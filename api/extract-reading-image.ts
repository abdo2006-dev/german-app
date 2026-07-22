import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_VISION_MODEL = 'qwen/qwen3.6-27b';

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY is not configured on the server.' });
  }

  const imageData = typeof req.body?.imageData === 'string' ? req.body.imageData : '';
  if (!imageData.startsWith('data:image/')) {
    return res.status(400).json({ error: 'Upload a valid screenshot image.' });
  }

  if (imageData.length > 4_500_000) {
    return res.status(413).json({ error: 'Image is too large. Try a smaller screenshot or crop the page first.' });
  }

  const prompt = `Extract the German reading text from this screenshot for a language-learning app.

Return JSON with this exact shape:
{
  "title": "main title if visible, otherwise empty string",
  "text": "clean extracted German text",
  "layoutNotes": "short note about table/columns/images, if relevant"
}

Rules:
- Preserve the reading order.
- If the image contains a table, convert it into readable plain text using headings and rows.
- For two-column comparison tables, label each row clearly, for example:
  Früher: ...
  Heute: ...
- Do not translate.
- Do not summarize.
- Keep German punctuation, umlauts, quotation marks, and paragraph breaks.
- Ignore decorative images, page chrome, close buttons, and line numbers.
- If a word is split across a line break, join it correctly when obvious.`;

  try {
    const groqRes = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.GROQ_VISION_MODEL || DEFAULT_VISION_MODEL,
        temperature: 0,
        max_completion_tokens: 2400,
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              {
                type: 'image_url',
                image_url: { url: imageData },
              },
            ],
          },
        ],
      }),
    });

    if (!groqRes.ok) {
      const errorData = await groqRes.json().catch(() => ({}));
      console.error('Groq image extraction API error:', groqRes.status, errorData);
      return res.status(502).json({ error: `Groq vision API returned ${groqRes.status}` });
    }

    const data = await groqRes.json();
    const content = data.choices?.[0]?.message?.content ?? '';
    if (!content) return res.status(502).json({ error: 'Empty response from Groq vision.' });

    const parsed = parseJsonResponse(content);
    const text = String(parsed.text ?? '').trim();
    if (!text) return res.status(502).json({ error: 'No readable German text was found in the image.' });

    return res.status(200).json({
      title: String(parsed.title ?? '').trim(),
      text,
      layoutNotes: String(parsed.layoutNotes ?? '').trim(),
      provider: 'Groq vision OCR',
    });
  } catch (err: any) {
    console.error('extract-reading-image error:', err);
    return res.status(500).json({ error: err.message ?? 'Internal server error' });
  }
}
