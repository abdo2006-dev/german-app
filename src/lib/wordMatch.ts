import type { Card } from "@/types/flashcard";

const LEADING_WORDS = new Set([
  "der",
  "die",
  "das",
  "den",
  "dem",
  "des",
  "ein",
  "eine",
  "einen",
  "einem",
  "einer",
  "eines",
  "kein",
  "keine",
  "keinen",
  "keinem",
  "keiner",
  "keines",
  "sich",
]);

export type PriorityTerm = {
  raw: string;
  normalized: string;
};

export function normalizeStudyWord(value: string): string {
  return value
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .replace(/[()"'„“”‘’.,;:!?/\\[\]{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function stripLeadingStudyWords(value: string): string {
  const parts = normalizeStudyWord(value).split(" ").filter(Boolean);
  while (parts.length > 1 && LEADING_WORDS.has(parts[0])) {
    parts.shift();
  }
  return parts.join(" ");
}

export function parsePriorityWords(input: string): PriorityTerm[] {
  const seen = new Set<string>();
  return input
    .split(/[\n,;\t|]+/)
    .map(raw => raw.trim())
    .filter(Boolean)
    .map(raw => ({ raw, normalized: stripLeadingStudyWords(raw) || normalizeStudyWord(raw) }))
    .filter(term => {
      if (!term.normalized || seen.has(term.normalized)) return false;
      seen.add(term.normalized);
      return true;
    });
}

function cardWordCandidates(card: Pick<Card, "germanWord" | "englishMeaning">): Set<string> {
  const candidates = new Set<string>();
  for (const value of [card.germanWord, card.englishMeaning]) {
    const normalized = normalizeStudyWord(value);
    const stripped = stripLeadingStudyWords(value);
    if (normalized) candidates.add(normalized);
    if (stripped) candidates.add(stripped);
  }
  return candidates;
}

export function getCardPriorityRank(card: Pick<Card, "germanWord" | "englishMeaning">, terms: PriorityTerm[]): number | null {
  if (terms.length === 0) return null;
  const candidates = cardWordCandidates(card);
  for (let i = 0; i < terms.length; i++) {
    if (candidates.has(terms[i].normalized)) return i;
  }
  return null;
}
