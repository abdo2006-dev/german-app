import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_MODEL = 'llama-3.3-70b-versatile';
const MYMEMORY_URL = 'https://api.mymemory.translated.net/get';

function cleanJson(content: string) {
  return content
    .trim()
    .replace(/^```(?:json)?/i, '')
    .replace(/```$/i, '')
    .trim();
}

function parseJsonResponse(content: string) {
  try {
    return JSON.parse(cleanJson(content));
  } catch {
    const match = content.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error('Groq returned a response that was not valid JSON.');
  }
}

function countGermanWords(text: string) {
  return text.match(/[A-Za-zÄÖÜäöüß]+(?:[-'][A-Za-zÄÖÜäöüß]+)?/g)?.length ?? 0;
}

async function fetchFallbackTranslation(term: string, isPhrase = false) {
  const url = `${MYMEMORY_URL}?q=${encodeURIComponent(term)}&langpair=${encodeURIComponent('de|en')}`;
  const translateRes = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!translateRes.ok) throw new Error(`Translation service returned ${translateRes.status}`);
  const data = await translateRes.json();
  const translatedText = data?.responseData?.translatedText;
  const match = Array.isArray(data?.matches)
    ? data.matches.find((item: any) => typeof item?.translation === 'string' && item.translation.trim())
    : null;
  const translation = String(translatedText || match?.translation || '').trim();
  if (!translation) throw new Error('No translation found.');
  return {
    term,
    translation,
    contextualMeaning: translation,
    literalMeaning: translation,
    partOfSpeech: isPhrase ? 'phrase' : '',
    grammar: {
      kind: isPhrase ? 'phrase' : '',
      lemma: '',
      article: '',
      plural: '',
      infinitive: '',
      separablePrefix: '',
      reflexive: false,
    },
    usage: '',
    exampleGerman: '',
    exampleEnglish: '',
    memoryHook: '',
    memoryImage: '',
    recallPrompt: '',
    note: isPhrase ? '' : 'Fallback dictionary translation. For better nuance, try again when the Groq tutor is available.',
    provider: 'MyMemory fallback',
  };
}

function normalizeResult(raw: any, term: string, isPhrase = false) {
  const contextualMeaning = String(raw?.contextualMeaning || raw?.translation || '').trim();
  const rawGrammar = raw?.grammar && typeof raw.grammar === 'object' ? raw.grammar : {};
  const kind = ['noun', 'verb', 'adjective', 'adverb', 'phrase', 'other'].includes(rawGrammar.kind)
    ? rawGrammar.kind
    : '';
  const article = ['der', 'die', 'das'].includes(rawGrammar.article)
    ? rawGrammar.article
    : '';
  return {
    term: isPhrase ? term : (String(raw?.term || term).trim() || term),
    translation: contextualMeaning,
    contextualMeaning,
    literalMeaning: String(raw?.literalMeaning || '').trim(),
    partOfSpeech: String(raw?.partOfSpeech || (isPhrase ? 'phrase' : '')).trim(),
    grammar: {
      kind: isPhrase ? 'phrase' : kind,
      lemma: String(rawGrammar.lemma || '').trim(),
      article,
      plural: String(rawGrammar.plural || '').trim(),
      infinitive: String(rawGrammar.infinitive || '').trim(),
      separablePrefix: String(rawGrammar.separablePrefix || '').trim(),
      reflexive: Boolean(rawGrammar.reflexive),
    },
    usage: String(raw?.usage || '').trim(),
    exampleGerman: String(raw?.exampleGerman || '').trim(),
    exampleEnglish: String(raw?.exampleEnglish || '').trim(),
    memoryHook: String(raw?.memoryHook || '').trim(),
    memoryImage: String(raw?.memoryImage || '').trim(),
    recallPrompt: String(raw?.recallPrompt || '').trim(),
    note: String(raw?.note || '').trim(),
    provider: 'Groq contextual tutor',
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const rawTerm = req.method === 'GET' ? req.query.q : req.body?.q;
  const term = (Array.isArray(rawTerm) ? rawTerm[0] : rawTerm)?.toString().trim().slice(0, 700) ?? '';
  const requestedSelectionMode = req.method === 'POST' && req.body?.selectionMode === 'phrase' ? 'phrase' : 'word';
  const isPhrase = requestedSelectionMode === 'phrase' || countGermanWords(term) > 1;
  const sentence = req.method === 'POST' && typeof req.body?.sentence === 'string'
    ? req.body.sentence.trim().slice(0, 900)
    : '';
  const passage = req.method === 'POST' && typeof req.body?.passage === 'string'
    ? req.body.passage.trim().slice(0, 2400)
    : '';

  if (term.length < 1) {
    return res.status(400).json({ error: 'Missing word or phrase.' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    try {
      return res.status(200).json(await fetchFallbackTranslation(term, isPhrase));
    } catch (err: any) {
      return res.status(500).json({ error: err.message ?? 'Translation failed.' });
    }
  }

  const systemPrompt = `You are a precise German reading tutor for A2/B1 learners.
Translate the selected German word or phrase according to its exact context.
For phrase selections, translate the entire selected text completely. Do not summarize, shorten, or translate only the most important part.
Prefer natural English meaning over literal dictionary meaning, but include the literal/base meaning separately when useful.
Return valid JSON only. Do not include markdown.`;

  const userPrompt = `Selection mode: ${isPhrase ? 'PHRASE - translate the full selected span' : 'WORD - vocabulary lookup'}

Selected German text:
${term}

Sentence containing the selection:
${sentence || '(not provided)'}

Wider passage:
${passage || '(not provided)'}

Return JSON with this exact shape:
{
  "term": "selected German text",
  "contextualMeaning": "complete English translation of the entire selected text; if phrase mode, cover every clause and important word in the selected text",
  "literalMeaning": "literal/base meaning or empty string if same",
  "partOfSpeech": "noun/verb/adjective/adverb/expression/etc. plus article for nouns when known",
  "grammar": {
    "kind": "noun | verb | adjective | adverb | phrase | other",
    "lemma": "dictionary/base form; for nouns use singular without article; for verbs use infinitive without sich unless reflexive; for adjectives use the undeclined form",
    "article": "der/die/das for nouns, otherwise empty string",
    "plural": "plural form for nouns when known, otherwise empty string",
    "infinitive": "infinitive for verbs; include sich if reflexive, otherwise empty string",
    "separablePrefix": "separable prefix for verbs like aufstehen, otherwise empty string",
    "reflexive": boolean
  },
  "usage": "what this word/phrase is mostly used for, including register or common context",
  "exampleGerman": "one natural German example sentence using this word/phrase",
  "exampleEnglish": "English translation of exampleGerman",
  "memoryHook": "",
  "memoryImage": "",
  "recallPrompt": "",
  "note": ""
}

Rules:
- If selection mode is PHRASE, contextualMeaning must translate the whole selected span, not just one word, not just one clause, and not a summary.
- If selection mode is PHRASE, keep the same meaning boundaries as the German text. For example, if the German contains two clauses joined by "und", the English translation must include both clauses.
- Always leave memoryHook, memoryImage, recallPrompt, and note as empty strings.
- If selection mode is PHRASE, set grammar.kind to "phrase" and leave usage, exampleGerman, and exampleEnglish as empty strings unless the phrase itself is a fixed idiom.
- If the selected word is a conjugated verb, grammar.infinitive must contain the infinitive, e.g. "verhält" -> "sich verhalten".
- If the selected word is a noun, grammar.article must be der/die/das and grammar.lemma must be the singular noun without article, even if the selected form is plural, dative, genitive, or accusative. Example: "Aufenthalt" -> article "der", lemma "Aufenthalt".
- If the selected word is an adjective, grammar.lemma must be the undeclined dictionary form. Examples: "guten" -> "gut", "schönen" -> "schön", "deutschen" -> "deutsch".
- If the word is inflected or conjugated, reflect that only in grammar fields, not in note.
- Keep explanations practical for a learner who wants to save this as a flashcard.
- Do not invent context outside the passage.`;

  try {
    const groqRes = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || DEFAULT_MODEL,
        temperature: 0.15,
        max_tokens: isPhrase ? 900 : 700,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
      }),
    });

    if (!groqRes.ok) {
      const errorData = await groqRes.json().catch(() => ({}));
      console.error('Groq translate API error:', groqRes.status, errorData);
      return res.status(200).json(await fetchFallbackTranslation(term, isPhrase));
    }

    const data = await groqRes.json();
    const content = data.choices?.[0]?.message?.content ?? '';
    if (!content) return res.status(502).json({ error: 'Empty response from Groq.' });

    const result = normalizeResult(parseJsonResponse(content), term, isPhrase);
    if (!result.contextualMeaning) {
      return res.status(200).json(await fetchFallbackTranslation(term, isPhrase));
    }

    return res.status(200).json(result);
  } catch (err: any) {
    console.error('translate-word error:', err);
    try {
      return res.status(200).json(await fetchFallbackTranslation(term, isPhrase));
    } catch {
      return res.status(500).json({ error: err.message ?? 'Internal server error' });
    }
  }
}
