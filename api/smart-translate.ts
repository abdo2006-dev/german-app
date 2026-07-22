import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_MODEL = 'llama-3.3-70b-versatile';
const MYMEMORY_URL = 'https://api.mymemory.translated.net/get';

type Direction = 'de-en' | 'en-de';

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

async function fetchFallbackTranslation(input: string, direction: Direction) {
  const langpair = direction === 'de-en' ? 'de|en' : 'en|de';
  const url = `${MYMEMORY_URL}?q=${encodeURIComponent(input)}&langpair=${encodeURIComponent(langpair)}`;
  const translateRes = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!translateRes.ok) throw new Error(`Fallback translator returned ${translateRes.status}`);
  const data = await translateRes.json();
  const translatedText = String(data?.responseData?.translatedText || '').trim();
  if (!translatedText) throw new Error('No fallback translation found.');
  return {
    direction,
    translation: translatedText,
    literalTranslation: '',
    naturalAlternative: '',
    keyVocabulary: [],
    memorySummary: 'Fallback translation only. Try again when the smart tutor is available for memory hooks and usage notes.',
    grammarNotes: [],
    provider: 'MyMemory fallback',
  };
}

function normalizeResult(raw: any, direction: Direction) {
  return {
    direction,
    translation: String(raw?.translation || '').trim(),
    literalTranslation: String(raw?.literalTranslation || '').trim(),
    naturalAlternative: String(raw?.naturalAlternative || '').trim(),
    keyVocabulary: Array.isArray(raw?.keyVocabulary)
      ? raw.keyVocabulary.slice(0, 12).map((item: any) => ({
          term: String(item?.term || '').trim(),
          meaning: String(item?.meaning || '').trim(),
          partOfSpeech: String(item?.partOfSpeech || '').trim(),
          usedAs: String(item?.usedAs || '').trim(),
          exampleGerman: String(item?.exampleGerman || '').trim(),
          exampleEnglish: String(item?.exampleEnglish || '').trim(),
          memoryHook: String(item?.memoryHook || '').trim(),
          memoryImage: String(item?.memoryImage || '').trim(),
          recallPrompt: String(item?.recallPrompt || '').trim(),
        })).filter((item: any) => item.term && item.meaning)
      : [],
    memorySummary: String(raw?.memorySummary || '').trim(),
    grammarNotes: Array.isArray(raw?.grammarNotes)
      ? raw.grammarNotes.slice(0, 5).map((item: any) => String(item || '').trim()).filter(Boolean)
      : [],
    provider: 'Groq smart translator',
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const input = typeof req.body?.input === 'string' ? req.body.input.trim().slice(0, 5000) : '';
  const direction = req.body?.direction === 'en-de' ? 'en-de' : 'de-en';

  if (input.length < 1) {
    return res.status(400).json({ error: 'Enter text to translate.' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    try {
      return res.status(200).json(await fetchFallbackTranslation(input, direction));
    } catch (err: any) {
      return res.status(500).json({ error: err.message ?? 'Translation failed.' });
    }
  }

  const sourceTarget = direction === 'de-en'
    ? 'Translate German into natural English.'
    : 'Translate English into natural German.';

  const systemPrompt = `You are a precise German translator and memory coach for A2/B1 learners.
You translate accurately first, then extract useful vocabulary in a way that helps memory.
Never sacrifice translation accuracy for a mnemonic. Never invent false etymology.
Return valid JSON only. Do not include markdown.`;

  const userPrompt = `${sourceTarget}

Text:
${input}

Return JSON with this exact shape:
{
  "translation": "full natural translation",
  "literalTranslation": "more literal translation if useful, otherwise empty string",
  "naturalAlternative": "more natural German phrasing if target is German, or clearer English phrasing if useful; otherwise empty string",
  "keyVocabulary": [
    {
      "term": "important German word or phrase",
      "meaning": "English meaning in this context",
      "partOfSpeech": "article + noun / verb / adjective / phrase / etc.",
      "usedAs": "what it is mostly used for, register, and common context",
      "exampleGerman": "meaningful German sentence using the term",
      "exampleEnglish": "English translation of exampleGerman",
      "memoryHook": "short sticky cue connecting sound/shape/context to meaning without fake etymology",
      "memoryImage": "vivid micro-scene that makes the meaning easier to remember",
      "recallPrompt": "quick active-recall question"
    }
  ],
  "memorySummary": "one short strategy for remembering the most important words in this text",
  "grammarNotes": ["brief grammar or word-order note if useful"]
}

Rules:
- For German to English, keyVocabulary must contain German words/phrases from the source text.
- For English to German, keyVocabulary must contain German words/phrases from your translation.
- Prefer fewer, better vocabulary entries: 4-8 for short text, up to 12 for long text.
- Include separable verbs, fixed phrases, or words whose meaning changes with context.
- The example sentence must be meaningful and practical, not generic.
- memoryHook should help recognition without being childish or too long.
- recallPrompt should take under 10 seconds to answer.`;

  try {
    const groqRes = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || DEFAULT_MODEL,
        temperature: 0.12,
        max_tokens: 1800,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
      }),
    });

    if (!groqRes.ok) {
      const errorData = await groqRes.json().catch(() => ({}));
      console.error('Groq smart translate API error:', groqRes.status, errorData);
      return res.status(200).json(await fetchFallbackTranslation(input, direction));
    }

    const data = await groqRes.json();
    const content = data.choices?.[0]?.message?.content ?? '';
    if (!content) return res.status(502).json({ error: 'Empty response from Groq.' });

    const result = normalizeResult(parseJsonResponse(content), direction);
    if (!result.translation) return res.status(200).json(await fetchFallbackTranslation(input, direction));
    return res.status(200).json(result);
  } catch (err: any) {
    console.error('smart-translate error:', err);
    try {
      return res.status(200).json(await fetchFallbackTranslation(input, direction));
    } catch {
      return res.status(500).json({ error: err.message ?? 'Internal server error' });
    }
  }
}
