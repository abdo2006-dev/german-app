import type { Card } from "@/types/flashcard";
import { mulberry32 } from "@/lib/rng";

export type ReviewScope = {
  deckIds: string[];
};

export type QueueItem = {
  cardId: string;
  due: Date;
};

function stableShuffle<T>(arr: T[], seed: number): T[] {
  const rng = mulberry32(seed);
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function getDueCardsForScope(cards: Card[], scope: ReviewScope, now: Date): Card[] {
  return cards.filter(
    (c) =>
      scope.deckIds.includes(c.deckId) &&
      !c.suspended &&
      !c.buried &&
      c.state !== "new" &&
      c.due.getTime() <= now.getTime()
  );
}

export function getNextLearningDueAt(cards: Card[], scope: ReviewScope, now: Date): Date | null {
  let min: Date | null = null;

  for (const c of cards) {
    if (!scope.deckIds.includes(c.deckId)) continue;
    if (c.suspended || c.buried) continue;
    if (c.state !== "learning" && c.state !== "relearning") continue;
    if (c.due.getTime() <= now.getTime()) continue;

    if (!min || c.due.getTime() < min.getTime()) min = c.due;
  }

  return min;
}

/**
 * Picks a session-eligible order for *currently due* cards:
 * - prioritize oldest due first (overdue cards)
 * - shuffle within a due bucket to avoid creation-order bias
 */
export function buildDueQueue(cards: Card[], scope: ReviewScope, now: Date, seed: number): QueueItem[] {
  const due = getDueCardsForScope(cards, scope, now);
  const sorted = [...due].sort((a, b) => a.due.getTime() - b.due.getTime());

  // Bucket by due-minute to keep stable grouping without being too strict.
  const buckets = new Map<number, Card[]>();
  for (const c of sorted) {
    const bucketKey = Math.floor(c.due.getTime() / 60_000);
    const bucket = buckets.get(bucketKey) ?? [];
    bucket.push(c);
    buckets.set(bucketKey, bucket);
  }

  const keys = [...buckets.keys()].sort((a, b) => a - b);
  const out: QueueItem[] = [];
  keys.forEach((k, idx) => {
    const shuffled = stableShuffle(buckets.get(k)!, seed + idx);
    shuffled.forEach((c) => out.push({ cardId: c.id, due: c.due }));
  });

  return out;
}
