export interface GrammarQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface GrammarLesson {
  id: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  title: string;
  description: string;
  grammarTip: string;
  lessonContent?: string;
  questions: GrammarQuestion[];
}

export interface GrammarProgress {
  lessonId: string;
  completed: boolean;
  score: number;
  totalQuestions: number;
  lastAttemptAt: string;
  answers: Record<string, number>; // questionId -> selectedIndex
}
