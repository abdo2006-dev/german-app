import type { VercelRequest, VercelResponse } from '@vercel/node';

const MYMEMORY_URL = 'https://api.mymemory.translated.net/get';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const rawWord = req.method === 'GET' ? req.query.q : req.body?.q;
  const word = Array.isArray(rawWord) ? rawWord[0] : rawWord;

  if (typeof word !== 'string' || word.trim().length < 1) {
    return res.status(400).json({ error: 'Missing word.' });
  }

  const cleanWord = word.trim().slice(0, 80);
  const langpair = 'de|en';
  const url = `${MYMEMORY_URL}?q=${encodeURIComponent(cleanWord)}&langpair=${encodeURIComponent(langpair)}`;

  try {
    const translateRes = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!translateRes.ok) {
      return res.status(502).json({ error: `Translation service returned ${translateRes.status}` });
    }

    const data = await translateRes.json();
    const translatedText = data?.responseData?.translatedText;
    const match = Array.isArray(data?.matches)
      ? data.matches.find((item: any) => typeof item?.translation === 'string' && item.translation.trim())
      : null;
    const translation = String(translatedText || match?.translation || '').trim();

    if (!translation) {
      return res.status(502).json({ error: 'No translation found.' });
    }

    return res.status(200).json({
      word: cleanWord,
      translation,
      provider: 'MyMemory',
    });
  } catch (err: any) {
    console.error('translate-word error:', err);
    return res.status(500).json({ error: err.message ?? 'Internal server error' });
  }
}
