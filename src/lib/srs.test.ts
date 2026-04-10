import { describe, it, expect } from "vitest";
import { scheduleCard } from "@/lib/srs";
import type { Card, DeckSettings } from "@/types/flashcard";

const baseSettings: DeckSettings = {
  newCardsPerDay: 20,
  templateMode: "both",
  learningSteps: [1, 10],
  graduatingInterval: 1,
  easyInterval: 4,
  easyBonus: 1.3,
  intervalModifier: 1,
  maxInterval: 365,
  lapseSteps: [10],
  lapseNewInterval: 0.5,
};

function mkReviewCard(overrides: Partial<Card> = {}): Card {
  const now = new Date("2026-01-01T12:00:00");
  return {
    id: "c1",
    deckId: "d1",
    germanWord: "der Vorschlag",
    englishMeaning: "suggestion",
    germanExample: "Ich habe einen Vorschlag.",
    englishExample: "I have a suggestion.",
    state: "review",
    template: "german-to-english",
    interval: 10,
    ease: 2.5,
    reps: 5,
    lapses: 0,
    stepIndex: 0,
    due: now,
    suspended: false,
    buried: false,
    lapseInterval: 0,
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

describe("scheduler (Anki-like)", () => {
  it("Hard < Good < Easy for review cards", () => {
    const now = new Date("2026-01-01T12:00:00");
    const card = mkReviewCard();

    const hard = scheduleCard(card, "hard", baseSettings, now, { fuzz: false });
    const good = scheduleCard(card, "good", baseSettings, now, { fuzz: false });
    const easy = scheduleCard(card, "easy", baseSettings, now, { fuzz: false });

    expect(hard.due.getTime()).toBeLessThan(good.due.getTime());
    expect(good.due.getTime()).toBeLessThan(easy.due.getTime());
  });

  it("Again on a review card enters relearning and becomes due soon", () => {
    const now = new Date("2026-01-01T12:00:00");
    const card = mkReviewCard({ interval: 30, due: now });

    const again = scheduleCard(card, "again", baseSettings, now, { fuzz: false });

    expect(again.state).toBe("relearning");
    expect(again.lapses).toBe(card.lapses + 1);
    expect(again.due.getTime()).toBe(now.getTime() + 10 * 60_000);
    // Should NOT jump far into the future
    expect(again.due.getTime()).toBeLessThan(now.getTime() + 60 * 60_000);
  });

  it("Learning steps reappear according to step timing", () => {
    const now = new Date("2026-01-01T12:00:00");
    const card = mkReviewCard({ state: "new", interval: 0, reps: 0, due: now, stepIndex: 0 });

    const again = scheduleCard(card, "again", baseSettings, now, { fuzz: false });
    expect(again.state).toBe("learning");
    expect(again.due.getTime()).toBe(now.getTime() + 1 * 60_000);

    const step0Card = { ...card, state: "learning", stepIndex: 0 } as Card;
    const good1 = scheduleCard(step0Card, "good", baseSettings, now, { fuzz: false });
    expect(good1.state).toBe("learning");
    expect(good1.stepIndex).toBe(1);
    expect(good1.due.getTime()).toBe(now.getTime() + 10 * 60_000);
  });
});
