import { a1Lessons } from './a1';
import { a2Lessons } from './a2';
import { b1Lessons } from './b1';
import { b2Lessons } from './b2';
import { c1Lessons } from './c1';
import type { GrammarLesson } from './types';

export const allGrammarLessons: GrammarLesson[] = [
  ...a1Lessons,
  ...a2Lessons,
  ...b1Lessons,
  ...b2Lessons,
  ...c1Lessons,
];

export const grammarLevels = ['A1', 'A2', 'B1', 'B2', 'C1'] as const;

export function getLessonsByLevel(level: string): GrammarLesson[] {
  return allGrammarLessons.filter((l) => l.level === level);
}

export function getLessonById(id: string): GrammarLesson | undefined {
  return allGrammarLessons.find((l) => l.id === id);
}

export type { GrammarLesson, GrammarQuestion, GrammarProgress } from './types';
