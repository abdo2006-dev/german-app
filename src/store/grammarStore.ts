import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GrammarProgress } from '@/data/grammar/types';

interface GrammarState {
  progress: GrammarProgress[];
  getProgress: (lessonId: string) => GrammarProgress | undefined;
  saveProgress: (p: GrammarProgress) => void;
}

export const useGrammarStore = create<GrammarState>()(
  persist(
    (set, get) => ({
      progress: [],
      getProgress: (lessonId) => get().progress.find((p) => p.lessonId === lessonId),
      saveProgress: (p) =>
        set((state) => ({
          progress: [
            ...state.progress.filter((x) => x.lessonId !== p.lessonId),
            p,
          ],
        })),
    }),
    { name: 'grammar-progress' }
  )
);
