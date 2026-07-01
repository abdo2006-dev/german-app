import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_MODEL = 'llama-3.3-70b-versatile';

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

  const { title = 'Reading passage', text } = req.body ?? {};
  const passageText = typeof text === 'string' ? text.trim() : '';

  if (passageText.length < 80) {
    return res.status(400).json({ error: 'Paste a longer paragraph so Groq can build meaningful questions.' });
  }

  const systemPrompt = `You are a German reading-comprehension examiner for A2/B1 learners.
Create questions that test real understanding, not just word matching.
Return valid JSON only. Do not include markdown.`;

  const userPrompt = `Create a stored comprehension quiz for this German reading passage.

Title: ${title}

Passage:
${passageText}

Return JSON with this exact shape:
{
  "questions": [
    {
      "type": "multiple-choice",
      "question": "German or English question",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": "exact correct option text",
      "explanation": "short explanation based on the passage",
      "difficulty": "detail"
    },
    {
      "type": "short-answer",
      "question": "German or English question",
      "correctAnswer": "sample correct answer",
      "explanation": "short explanation based on the passage",
      "difficulty": "inference"
    }
  ]
}

Rules:
- Create exactly 7 questions.
- Use 5 multiple-choice questions and 2 short-answer questions.
- Include a mix of detail, inference, main-idea, and vocabulary questions.
- Questions should be challenging but fair for A2/B1.
- Every answer must be justified by the passage.
- Multiple-choice options should be plausible and not silly.`;

  try {
    const groqRes = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || DEFAULT_MODEL,
        temperature: 0.25,
        max_tokens: 1600,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
      }),
    });

    if (!groqRes.ok) {
      const errorData = await groqRes.json().catch(() => ({}));
      console.error('Groq reading API error:', groqRes.status, errorData);
      return res.status(502).json({ error: `Groq API returned ${groqRes.status}` });
    }

    const data = await groqRes.json();
    const content = data.choices?.[0]?.message?.content ?? '';
    const parsed = parseJsonResponse(content);
    const questions = Array.isArray(parsed.questions) ? parsed.questions : [];

    return res.status(200).json({
      questions: questions.slice(0, 7).map((question: any, index: number) => ({
        id: `q-${index + 1}`,
        type: question.type === 'short-answer' ? 'short-answer' : 'multiple-choice',
        question: String(question.question ?? ''),
        options: Array.isArray(question.options) ? question.options.map(String).slice(0, 4) : undefined,
        correctAnswer: String(question.correctAnswer ?? ''),
        explanation: String(question.explanation ?? ''),
        difficulty: ['detail', 'inference', 'main-idea', 'vocabulary'].includes(question.difficulty)
          ? question.difficulty
          : 'detail',
      })),
    });
  } catch (err: any) {
    console.error('reading-questions handler error:', err);
    return res.status(500).json({ error: err.message ?? 'Internal server error' });
  }
}
