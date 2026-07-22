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

async function fetchFallbackTranslation(term: string) {
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
    partOfSpeech: '',
    usage: '',
    exampleGerman: '',
    exampleEnglish: '',
    note: 'Fallback dictionary translation. For better nuance, try again when the Groq tutor is available.',
    provider: 'MyMemory fallback',
  };
}

function normalizeResult(raw: any, term: string) {
  const contextualMeaning = String(raw?.contextualMeaning || raw?.translation || '').trim();
  return {
    term: String(raw?.term || term).trim() || term,
    translation: contextualMeaning,
    contextualMeaning,
    literalMeaning: String(raw?.literalMeaning || '').trim(),
    partOfSpeech: String(raw?.partOfSpeech || '').trim(),
    usage: String(raw?.usage || '').trim(),
    exampleGerman: String(raw?.exampleGerman || '').trim(),
    exampleEnglish: String(raw?.exampleEnglish || '').trim(),
    note: String(raw?.note || '').trim(),
    provider: 'Groq contextual tutor',
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const rawTerm = req.method === 'GET' ? req.query.q : req.body?.q;
  const term = (Array.isArray(rawTerm) ? rawTerm[0] : rawTerm)?.toString().trim().slice(0, 240) ?? '';
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
      return res.status(200).json(await fetchFallbackTranslation(term));
    } catch (err: any) {
      return res.status(500).json({ error: err.message ?? 'Translation failed.' });
    }
  }

  const systemPrompt = `You are a precise German reading tutor for A2/B1 learners.
Translate the selected German word or phrase according to its exact context.
Prefer natural English meaning over literal dictionary meaning, but include the literal/base meaning separately when useful.
Return valid JSON only. Do not include markdown.`;

  const userPrompt = `Selected German text: ${term}

Sentence containing the selection:
${sentence || '(not provided)'}

Wider passage:
${passage || '(not provided)'}

Return JSON with this exact shape:
{
  "term": "selected German text",
  "contextualMeaning": "best English meaning in this sentence, concise but accurate",
  "literalMeaning": "literal/base meaning or empty string if same",
  "partOfSpeech": "noun/verb/adjective/adverb/expression/etc. plus article for nouns when known",
  "usage": "what this word/phrase is mostly used for, including register or common context",
  "exampleGerman": "one natural German example sentence using this word/phrase",
  "exampleEnglish": "English translation of exampleGerman",
  "note": "brief explanation of why this meaning fits the given sentence"
}

Rules:
- If the selected text is a phrase, translate the phrase as a whole, not word-by-word.
- If the word is inflected or conjugated, explain the base form in partOfSpeech or note.
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
        max_tokens: 700,
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
      return res.status(200).json(await fetchFallbackTranslation(term));
    }

    const data = await groqRes.json();
    const content = data.choices?.[0]?.message?.content ?? '';
    if (!content) return res.status(502).json({ error: 'Empty response from Groq.' });

    const result = normalizeResult(parseJsonResponse(content), term);
    if (!result.contextualMeaning) {
      return res.status(200).json(await fetchFallbackTranslation(term));
    }

    return res.status(200).json(result);
  } catch (err: any) {
    console.error('translate-word error:', err);
    try {
      return res.status(200).json(await fetchFallbackTranslation(term));
    } catch {
      return res.status(500).json({ error: err.message ?? 'Internal server error' });
    }
  }
}
