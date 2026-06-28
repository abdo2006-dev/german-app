// Vercel serverless function — proxies Groq API to keep the key server-side
import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_MODEL = 'llama-3.3-70b-versatile';

type HelperMode = 'sentence' | 'paragraph' | 'card-example';
type HelperLevel = 'A2' | 'B1' | 'both';

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
    if (match) {
      return JSON.parse(match[0]);
    }
    throw new Error('Groq returned a response that was not valid JSON.');
  }
}

function buildPrompt(mode: HelperMode, level: HelperLevel, input: string, card?: { germanWord?: string; englishMeaning?: string }) {
  const levelRules = `Level control:
- A2: use simple clauses, common vocabulary, Perfekt/present/modal verbs, and avoid "zu + Infinitiv".
- B1: you may use subordinate clauses, relative clauses, weil/dass/wenn/obwohl, and "zu + Infinitiv" when natural.
- both: provide both A2 and B1 versions side by side.`;

  if (mode === 'sentence') {
    return `${levelRules}

Task: Correct and improve this German sentence for a learner.
Input sentence: ${input}

Reference examples you must follow:
- "Diese Sommer war ich in der Türkei." -> "Diesen Sommer war ich in der Türkei." Rule: bare time expressions that answer "when?" often use accusative, and Sommer is masculine, so dieser becomes diesen.
- "Diese plant ist sehr gifting und deadly." -> "Diese Pflanze ist sehr giftig und tödlich." Rule: fix false friends and translate accidental English words into German.
- "Ich freue mich für dich zu sehen." -> "Ich freue mich, dich zu sehen." Rule: sich freuen + auf/über/für depends on meaning; with an infinitive clause, use a comma before zu + Infinitiv.

Return JSON with this exact shape:
{
  "mode": "sentence",
  "isGrammaticallyCorrect": boolean,
  "correctForm": "correct German sentence",
  "naturalAlternative": "more natural German phrasing or empty string if the correction is already natural",
  "translation": "English translation of the best German sentence",
  "vocabulary": [
    { "word": "German word", "translation": "English translation", "note": "why this word matters or empty string" }
  ],
  "rules": [
    { "title": "short grammar point", "explanation": "brief learner-friendly explanation", "example": "German example" }
  ]
}

Only include vocabulary that is new, corrected, or important. Explain the user's actual mistakes, especially cases, adjective endings, articles, word order, gender, tense, and false friends.`;
  }

  if (mode === 'card-example') {
    const germanWord = card?.germanWord || input;
    const englishMeaning = card?.englishMeaning || '';

    return `${levelRules}

Task: Create one useful example for a flashcard while the learner is reviewing vocabulary.
German flashcard word: ${germanWord}
English meaning: ${englishMeaning}
Requested level: ${level}

Return JSON with this exact shape:
{
  "mode": "card-example",
  "sentence": "one natural German example sentence using the flashcard word or a correct inflected/conjugated form",
  "translation": "English translation of the sentence",
  "wordNote": "short note explaining the flashcard word in this sentence",
  "grammarTip": "one short grammar or usage reminder connected to this sentence",
  "vocabulary": [
    { "word": "German word", "translation": "English translation", "note": "brief usage note or empty string" }
  ]
}

Keep it practical for memorizing this exact card. If the word is a verb, you may conjugate it naturally, but mention the infinitive in wordNote. If it is a noun, include its article when known.`;
  }

  return `${levelRules}

Task: Use as many of these German words as naturally possible in a short paragraph.
Words: ${input}
Requested level: ${level}

Return JSON with this exact shape:
{
  "mode": "paragraph",
  "paragraphs": {
    "a2": "A2 German paragraph or empty string",
    "b1": "B1 German paragraph or empty string"
  },
  "translations": {
    "a2": "English translation for the A2 paragraph or empty string",
    "b1": "English translation for the B1 paragraph or empty string"
  },
  "vocabulary": [
    { "word": "German word", "translation": "English translation", "note": "brief usage note or empty string" }
  ],
  "rules": [
    { "title": "useful grammar point", "explanation": "brief learner-friendly explanation", "example": "German example" }
  ]
}

If the requested level is A2, fill only paragraphs.a2/translations.a2. If B1, fill only paragraphs.b1/translations.b1. If both, fill both.`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY is not configured on the server.' });
  }

  const { mode, level = 'A2', input, germanWord, englishMeaning } = req.body ?? {};
  const helperMode = mode as HelperMode;
  const helperLevel = level as HelperLevel;

  if (helperMode !== 'sentence' && helperMode !== 'paragraph' && helperMode !== 'card-example') {
    return res.status(400).json({ error: 'Mode must be sentence, paragraph, or card-example.' });
  }

  if (!['A2', 'B1', 'both'].includes(helperLevel)) {
    return res.status(400).json({ error: 'Level must be A2, B1, or both.' });
  }

  const effectiveInput = helperMode === 'card-example'
    ? String(germanWord || input || '').trim()
    : typeof input === 'string'
      ? input.trim()
      : '';

  if (effectiveInput.length < 2) {
    return res.status(400).json({ error: 'Input is too short.' });
  }

  const systemPrompt = `You are a precise German tutor for Goethe-style A2 and B1 learners.
You correct German carefully, keep explanations short, and never invent facts.
Always return valid JSON only. Do not include markdown.`;

  try {
    const groqRes = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || DEFAULT_MODEL,
        temperature: 0.2,
        max_tokens: 900,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: systemPrompt },
          {
            role: 'user',
            content: buildPrompt(helperMode, helperLevel, effectiveInput, {
              germanWord: typeof germanWord === 'string' ? germanWord.trim() : undefined,
              englishMeaning: typeof englishMeaning === 'string' ? englishMeaning.trim() : undefined,
            }),
          },
        ],
      }),
    });

    if (!groqRes.ok) {
      const errorData = await groqRes.json().catch(() => ({}));
      console.error('Groq helper API error:', groqRes.status, errorData);
      return res.status(502).json({ error: `Groq API returned ${groqRes.status}` });
    }

    const data = await groqRes.json();
    const content = data.choices?.[0]?.message?.content ?? '';

    if (!content) {
      return res.status(502).json({ error: 'Empty response from Groq.' });
    }

    return res.status(200).json({ result: parseJsonResponse(content) });
  } catch (err: any) {
    console.error('German helper handler error:', err);
    return res.status(500).json({ error: err.message ?? 'Internal server error' });
  }
}
