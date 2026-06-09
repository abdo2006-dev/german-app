import { describe, it, expect } from "vitest";
import { buildDueQueue, getDueCardsForScope, getSiblingKey, stableShuffle } from "@/lib/reviewQueue";
import type { Card } from "@/types/flashcard";

function mkCard(id: string, dueIso: string, createdIso: string): Card {
  const due = new Date(dueIso);
  const createdAt = new Date(createdIso);
  return {
    id,
    deckId: "d1",
    germanWord: id,
    englishMeaning: id,
    germanExample: "",
    englishExample: "",
    state: "review",
    template: "german-to-english",
    interval: 5,
    ease: 2.5,
    reps: 1,
    lapses: 0,
    stepIndex: 0,
    due,
    suspended: false,
    buried: false,
    lapseInterval: 0,
    createdAt,
    updatedAt: createdAt,
  };
}

describe("review queue", () => {
  it("does not return due cards in creation order (shuffles within a due bucket)", () => {
    const now = new Date("2026-01-01T12:00:00");
    const cards = [
      mkCard("c1", "2026-01-01T11:00:00", "2026-01-01T10:00:00"),
      mkCard("c2", "2026-01-01T11:00:00", "2026-01-01T10:01:00"),
      mkCard("c3", "2026-01-01T11:00:00", "2026-01-01T10:02:00"),
      mkCard("c4", "2026-01-01T11:00:00", "2026-01-01T10:03:00"),
    ];

    const scope = { deckIds: ["d1"] };
    const q1 = buildDueQueue(cards, scope, now, 1).map((q) => q.cardId);
    const q2 = buildDueQueue(cards, scope, now, 2).map((q) => q.cardId);

    expect(q1.join(",")).not.toBe(q2.join(","));
    // If it were creation-order biased we'd see c1,c2,c3,c4 every time
    expect(q1.join(",")).not.toBe("c1,c2,c3,c4");
  });

  it("prioritizes overdue cards (older due first)", () => {
    const now = new Date("2026-01-01T12:00:00");
    const cards = [
      mkCard("late", "2026-01-01T08:00:00", "2026-01-01T10:00:00"),
      mkCard("lessLate", "2026-01-01T10:00:00", "2026-01-01T10:00:00"),
    ];

    const scope = { deckIds: ["d1"] };
    const q = buildDueQueue(cards, scope, now, 42).map((x) => x.cardId);
    expect(q[0]).toBe("late");
  });

  it("due selection is due_at <= now and excludes new", () => {
    const now = new Date("2026-01-01T12:00:00");
    const due = mkCard("due", "2026-01-01T11:00:00", "2026-01-01T10:00:00");
    const future = mkCard("future", "2026-01-01T13:00:00", "2026-01-01T10:00:00");
    const newCard = { ...mkCard("new", "2026-01-01T11:00:00", "2026-01-01T10:00:00"), state: "new" as const };

    const scope = { deckIds: ["d1"] };
    const eligible = getDueCardsForScope([due, future, newCard], scope, now).map((c) => c.id);
    expect(eligible).toEqual(["due"]);
  });

  it("shuffles new-card batches deterministically", () => {
    const cards = ["n1", "n2", "n3", "n4", "n5"];
    const shuffled = stableShuffle(cards, 123);

    expect(shuffled).toHaveLength(cards.length);
    expect(new Set(shuffled)).toEqual(new Set(cards));
    expect(shuffled.join(",")).not.toBe(cards.join(","));
    expect(stableShuffle(cards, 123)).toEqual(shuffled);
  });

  it("identifies reverse-template siblings from the same vocab pair", () => {
    const front = mkCard("front", "2026-01-01T11:00:00", "2026-01-01T10:00:00");
    const reverse = {
      ...front,
      id: "reverse",
      template: "english-to-german" as const,
      germanWord: " FRONT ",
      englishMeaning: "Front",
    };

    expect(getSiblingKey(front)).toBe(getSiblingKey(reverse));
  });
});
