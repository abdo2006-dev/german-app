// Core entity types for the flashcard app

export interface Folder {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DeckSettings {
  newCardsPerDay: number;
  templateMode: 'both' | 'german-to-english' | 'english-to-german';
  learningSteps: number[];
  graduatingInterval: number;
  easyInterval: number;
  easyBonus: number;
  intervalModifier: number;
  maxInterval: number;
  lapseSteps: number[];
  lapseNewInterval: number;
  leechThreshold: number; // lapses before marking as leech
}

export const DEFAULT_DECK_SETTINGS: DeckSettings = {
  newCardsPerDay: 20,
  templateMode: 'both',
  learningSteps: [1, 10],
  graduatingInterval: 1,
  easyInterval: 4,
  easyBonus: 1.3,
  intervalModifier: 1.0,
  maxInterval: 365,
  lapseSteps: [10],
  lapseNewInterval: 0.0,
  leechThreshold: 8,
};

export interface Deck {
  id: string;
  folderId: string | null;
  name: string;
  settings: DeckSettings;
  createdAt: Date;
  updatedAt: Date;
}

export type CardState = 'new' | 'learning' | 'review' | 'relearning';
export type CardTemplate = 'german-to-english' | 'english-to-german';

export interface GeneratedCardExample {
  id: string;
  level: 'A2' | 'B1';
  sentence: string;
  translation: string;
  wordNote: string;
  grammarTip: string;
  vocabulary: { word: string; translation: string; note?: string }[];
  createdAt: string;
}

export interface Card {
  id: string;
  deckId: string;
  germanWord: string;
  englishMeaning: string;
  germanExample: string;
  englishExample: string;
  notes: string;
  generatedExamples: GeneratedCardExample[];
  state: CardState;
  template: CardTemplate;
  interval: number;
  ease: number;
  reps: number;
  lapses: number;
  stepIndex: number;
  lapseInterval: number;
  due: Date;
  suspended: boolean;
  buried: boolean;
  flags: {
    leech?: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

export type Rating = 'again' | 'hard' | 'good' | 'easy';

export interface ReviewLog {
  id: string;
  cardId: string;
  deckId: string;
  rating: Rating;
  stateBefore: CardState;
  interval: number;
  ease: number;
  time: number;
  reviewedAt: Date;
}

export interface ParsedEntry {
  germanWord: string;
  englishMeaning: string;
  germanExample: string;
  englishExample: string;
}

export interface ParseResult {
  entries: ParsedEntry[];
  errors: { line: number; message: string; raw: string }[];
}

export interface DeckStats {
  newCount: number;
  learningCount: number;
  reviewCount: number;
  dueCount: number;
  leechCount: number;
}

export interface ReadingQuestion {
  id: string;
  type: 'multiple-choice' | 'short-answer';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'detail' | 'inference' | 'main-idea' | 'vocabulary';
}

export interface ReadingPassage {
  id: string;
  title: string;
  text: string;
  deckId: string;
  questions: ReadingQuestion[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  dueDate?: string; // ISO date string YYYY-MM-DD
  createdAt: Date;
  updatedAt: Date;
}
