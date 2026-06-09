/**
 * Anki-like SM-2 scheduler with learning + relearning steps.
 *
 * Design choices (kept intentionally minimal & predictable):
 * - "Due" means: card.due <= now (local time Date comparisons)
 * - Learning/Relearning steps schedule by minutes via due timestamps
 * - Review intervals are stored in `card.interval` (days)
 * - When a review card lapses (Again), we compute and store `card.lapseInterval` (days)
 *   so relearning graduation returns to a sane review interval.
 */

import type { Card, CardState, DeckSettings, Rating } from "@/types/flashcard";

const MINUTE_MS = 60_000;
const DAY_MS = 86_400_000;
const MIN_EASE = 1.3;

export type SchedulerOptions = {
  /**
   * Add small randomization for long review intervals.
   * Disabled in tests for determinism.
   */
  fuzz?: boolean;
  /** Deterministic RNG (0..1). Defaults to Math.random. */
  rng?: () => number;
};

export interface ScheduleResult {
  state: CardState;
  due: Date;
  /** Review interval (days). For learning steps this typically remains 0. */
  interval: number;
  ease: number;
  reps: number;
  lapses: number;
  stepIndex: number;
  /** Stored only during relearning; otherwise 0. */
  lapseInterval: number;
}

function clampEase(ease: number) {
  return Math.max(MIN_EASE, ease);
}

function addDays(now: Date, days: number) {
  return new Date(now.getTime() + days * DAY_MS);
}

function addMinutes(now: Date, minutes: number) {
  return new Date(now.getTime() + minutes * MINUTE_MS);
}

function stepMinutes(steps: number[], idx: number, fallback: number) {
  const raw = steps[idx] ?? steps[steps.length - 1] ?? fallback;
  return Math.max(1, raw);
}

function hardLearningDelay(steps: number[], currentStepIndex: number, fallback: number) {
  const current = stepMinutes(steps, currentStepIndex, fallback);
  const next = stepMinutes(steps, currentStepIndex + 1, current);
  if (currentStepIndex === 0) return Math.max(1, Math.round((current + next) / 2));
  return current;
}

function addFuzz(days: number, opts: Required<Pick<SchedulerOptions, "fuzz" | "rng">>) {
  if (!opts.fuzz) return days;
  // Only fuzz multi-day review intervals to avoid breaking learning steps.
  if (days < 2) return days;
  const r = opts.rng(); // 0..1
  const jitter = (r * 2 - 1) * 0.025; // ±2.5%
  return Math.max(1, days * (1 + jitter));
}

function formatDuration(ms: number): string {
  const minutes = Math.round(ms / MINUTE_MS);
  if (minutes < 60) return `${Math.max(1, minutes)}m`;
  const hours = Math.round(ms / (60 * MINUTE_MS));
  if (hours < 24) return `${hours}h`;
  const days = Math.round(ms / DAY_MS);
  if (days < 30) return `${days}d`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months}mo`;
  const years = (days / 365).toFixed(1);
  return `${years}y`;
}

export function scheduleCard(
  card: Card,
  rating: Rating,
  settings: DeckSettings,
  now: Date = new Date(),
  options: SchedulerOptions = {}
): ScheduleResult {
  const opts = { fuzz: options.fuzz ?? true, rng: options.rng ?? Math.random };

  switch (card.state) {
    case "new":
    case "learning":
      return scheduleLearning(card, rating, settings, now);
    case "review":
      return scheduleReview(card, rating, settings, now, opts);
    case "relearning":
      return scheduleRelearning(card, rating, settings, now, opts);
    default:
      throw new Error(`Unknown card state: ${(card as any).state}`);
  }
}

function scheduleLearning(card: Card, rating: Rating, settings: DeckSettings, now: Date): ScheduleResult {
  const steps = settings.learningSteps;
  const step = (idx: number) => stepMinutes(steps, idx, 1);

  if (rating === "again") {
    return {
      state: "learning",
      stepIndex: 0,
      due: addMinutes(now, step(0)),
      interval: 0,
      lapseInterval: 0,
      ease: card.ease,
      reps: card.reps,
      lapses: card.lapses,
    };
  }

  if (rating === "hard") {
    // Anki shows the first Hard step halfway between the first two learning steps.
    return {
      state: "learning",
      stepIndex: card.stepIndex,
      due: addMinutes(now, hardLearningDelay(steps, card.stepIndex, 1)),
      interval: 0,
      lapseInterval: 0,
      ease: clampEase(card.ease - 0.15),
      reps: card.reps,
      lapses: card.lapses,
    };
  }

  if (rating === "easy") {
    // Optional early graduation
    const intervalDays = settings.easyInterval;
    return {
      state: "review",
      stepIndex: 0,
      due: addDays(now, intervalDays),
      interval: intervalDays,
      lapseInterval: 0,
      ease: clampEase(card.ease + 0.15),
      reps: card.reps + 1,
      lapses: card.lapses,
    };
  }

  // good
  const nextStepIndex = card.stepIndex + 1;
  if (nextStepIndex >= steps.length) {
    const intervalDays = settings.graduatingInterval;
    return {
      state: "review",
      stepIndex: 0,
      due: addDays(now, intervalDays),
      interval: intervalDays,
      lapseInterval: 0,
      ease: card.ease,
      reps: card.reps + 1,
      lapses: card.lapses,
    };
  }

  return {
    state: "learning",
    stepIndex: nextStepIndex,
    due: addMinutes(now, step(nextStepIndex)),
    interval: 0,
    lapseInterval: 0,
    ease: card.ease,
    reps: card.reps,
    lapses: card.lapses,
  };
}

function scheduleReview(
  card: Card,
  rating: Rating,
  settings: DeckSettings,
  now: Date,
  opts: Required<Pick<SchedulerOptions, "fuzz" | "rng">>
): ScheduleResult {
  const interval = Math.max(1, card.interval || 1);

  if (rating === "again") {
    const lapseInterval = Math.max(1, interval * settings.lapseNewInterval);
    const firstStepMinutes = stepMinutes(settings.lapseSteps, 0, 10);

    return {
      state: "relearning",
      stepIndex: 0,
      due: addMinutes(now, firstStepMinutes),
      interval, // keep last review interval for stats/debug
      lapseInterval,
      ease: clampEase(card.ease - 0.2),
      reps: card.reps,
      lapses: card.lapses + 1,
    };
  }

  const hardDays = Math.max(interval + 1, interval * 1.2);
  const goodDays = Math.max(hardDays + 1, interval * card.ease);
  const easyDays = Math.max(goodDays + 1, interval * card.ease * settings.easyBonus);

  let nextInterval: number;
  let nextEase = card.ease;

  if (rating === "hard") {
    nextInterval = hardDays;
    nextEase = clampEase(card.ease - 0.15);
  } else if (rating === "good") {
    nextInterval = goodDays;
  } else {
    // easy
    nextInterval = easyDays;
    nextEase = card.ease + 0.15;
  }

  nextInterval = nextInterval * settings.intervalModifier;
  nextInterval = Math.min(settings.maxInterval, addFuzz(nextInterval, opts));

  return {
    state: "review",
    stepIndex: 0,
    due: addDays(now, nextInterval),
    interval: nextInterval,
    lapseInterval: 0,
    ease: nextEase,
    reps: card.reps + 1,
    lapses: card.lapses,
  };
}

function scheduleRelearning(
  card: Card,
  rating: Rating,
  settings: DeckSettings,
  now: Date,
  opts: Required<Pick<SchedulerOptions, "fuzz" | "rng">>
): ScheduleResult {
  const steps = settings.lapseSteps;
  const step = (idx: number) => stepMinutes(steps, idx, 10);
  const lapseInterval = Math.max(1, card.lapseInterval || 1);

  if (rating === "again") {
    return {
      state: "relearning",
      stepIndex: 0,
      due: addMinutes(now, step(0)),
      interval: card.interval,
      lapseInterval,
      ease: clampEase(card.ease - 0.2),
      reps: card.reps,
      lapses: card.lapses,
    };
  }

  if (rating === "hard") {
    return {
      state: "relearning",
      stepIndex: card.stepIndex,
      due: addMinutes(now, hardLearningDelay(steps, card.stepIndex, 10)),
      interval: card.interval,
      lapseInterval,
      ease: card.ease,
      reps: card.reps,
      lapses: card.lapses,
    };
  }

  if (rating === "easy") {
    // Early return to review (Anki-like)
    const nextInterval = Math.min(settings.maxInterval, addFuzz(lapseInterval, opts));
    return {
      state: "review",
      stepIndex: 0,
      due: addDays(now, nextInterval),
      interval: nextInterval,
      lapseInterval: 0,
      ease: card.ease,
      reps: card.reps + 1,
      lapses: card.lapses,
    };
  }

  // good
  const nextStepIndex = card.stepIndex + 1;
  if (nextStepIndex >= steps.length) {
    const nextInterval = Math.min(settings.maxInterval, addFuzz(lapseInterval, opts));
    return {
      state: "review",
      stepIndex: 0,
      due: addDays(now, nextInterval),
      interval: nextInterval,
      lapseInterval: 0,
      ease: card.ease,
      reps: card.reps + 1,
      lapses: card.lapses,
    };
  }

  return {
    state: "relearning",
    stepIndex: nextStepIndex,
    due: addMinutes(now, step(nextStepIndex)),
    interval: card.interval,
    lapseInterval,
    ease: card.ease,
    reps: card.reps,
    lapses: card.lapses,
  };
}

/**
 * Previews for the 4 buttons, computed from the resulting due timestamp.
 * This avoids conflating learning-step minutes with review interval days.
 */
export function getNextIntervals(card: Card, settings: DeckSettings): Record<Rating, string> {
  const now = new Date();
  const out = { again: "", hard: "", good: "", easy: "" } as Record<Rating, string>;

  ([("again"), ("hard"), ("good"), ("easy")] as Rating[]).forEach((rating) => {
    const res = scheduleCard(card, rating, settings, now, { fuzz: false });
    out[rating] = formatDuration(res.due.getTime() - now.getTime());
  });

  return out;
}
