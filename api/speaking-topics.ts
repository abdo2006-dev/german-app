// Vercel serverless function — proxies Groq API to keep the key server-side
import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY is not configured on the server.' });
  }

  const { prompt, words = [], level = 'A2/B1' } = req.body ?? {};

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt field' });
  }

  const systemPrompt = `You are a German language tutor specializing in speaking practice for exam preparation.
Your task is to generate a practical, engaging speaking prompt for a German learner.

Rules:
- Write the prompt in English
- Make it specific and actionable (3–6 sentences)
- Include example starter phrases in German where helpful
- Tailor difficulty to the specified level
- If vocabulary words are provided, incorporate as many as naturally possible
- Suggest one or two follow-up questions the learner should try to answer
- Keep it concise but rich with context`;

  const userMessage = words.length > 0
    ? `Create a German speaking practice prompt for level ${level}.
Vocabulary to use: ${words.join(', ')}
${prompt}`
    : prompt;

  try {
    const groqRes = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        max_tokens: 400,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage },
        ],
      }),
    });

    if (!groqRes.ok) {
      const errorData = await groqRes.json().catch(() => ({}));
      console.error('Groq API error:', groqRes.status, errorData);
      return res.status(502).json({ error: `Groq API returned ${groqRes.status}` });
    }

    const data = await groqRes.json();
    const topic = data.choices?.[0]?.message?.content ?? '';

    if (!topic) {
      return res.status(502).json({ error: 'Empty response from Groq' });
    }

    return res.status(200).json({ topic });
  } catch (err: any) {
    console.error('Speaking topics handler error:', err);
    return res.status(500).json({ error: err.message ?? 'Internal server error' });
  }
}
