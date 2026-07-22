/**
 * Zustand store - flashcard app state
 * Persists to localStorage with date rehydration
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  Folder, Deck, Card, DeckSettings, DEFAULT_DECK_SETTINGS,
  CardTemplate, Rating, ReviewLog, DeckStats, ParsedEntry, CardState, Todo,
  ReadingPassage, ReadingQuestion, ReadingTranslation,
} from '@/types/flashcard';
import { scheduleCard } from '@/lib/srs';

function generateId(): string { return crypto.randomUUID(); }

function serializeDates(obj: any): any {
  if (obj instanceof Date) return obj.toISOString();
  if (Array.isArray(obj)) return obj.map(serializeDates);
  if (obj && typeof obj === 'object') return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, serializeDates(v)]));
  return obj;
}

function deserializeDates(obj: any, dateFields: string[]): any {
  if (Array.isArray(obj)) return obj.map(item => deserializeDates(item, dateFields));
  if (obj && typeof obj === 'object') {
    const result = { ...obj };
    for (const field of dateFields) {
      if (result[field] && typeof result[field] === 'string') result[field] = new Date(result[field]);
    }
    return result;
  }
  return obj;
}

/** Get YYYY-MM-DD string for a Date (local) */
function toDateKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function buildReadingCardNote(details?: Partial<ReadingTranslation>): string {
  if (!details) return '';
  const rows = [
    details.contextualMeaning ? `Meaning in this text: ${details.contextualMeaning}` : '',
    details.literalMeaning ? `Literal/base meaning: ${details.literalMeaning}` : '',
    details.partOfSpeech ? `Part of speech: ${details.partOfSpeech}` : '',
    details.grammar?.infinitive ? `Infinitive: ${details.grammar.infinitive}` : '',
    details.grammar?.article && details.grammar?.lemma ? `Noun: ${details.grammar.article} ${details.grammar.lemma}` : '',
    details.grammar?.plural ? `Plural: ${details.grammar.plural}` : '',
    details.usage ? `Mostly used for: ${details.usage}` : '',
    details.memoryHook ? `Memory hook: ${details.memoryHook}` : '',
    details.memoryImage ? `Mental image: ${details.memoryImage}` : '',
    details.recallPrompt ? `Recall prompt: ${details.recallPrompt}` : '',
    details.note ? `Context note: ${details.note}` : '',
  ].filter(Boolean);
  return rows.join('\n\n');
}

interface FlashcardState {
  folders: Folder[];
  decks: Deck[];
  cards: Card[];
  reviewLogs: ReviewLog[];
  readingPassages: ReadingPassage[];
  todos: Todo[];
  /** Map of deckId → Set<cardId> for new cards introduced today */
  newCardsIntroducedToday: Record<string, string[]>;
  /** Date key to validate the above */
  newCardDateKey: string;

  // Folder actions
  createFolder: (name: string) => Folder;
  updateFolder: (id: string, name: string) => void;
  deleteFolder: (id: string) => void;

  // Deck actions
  createDeck: (name: string, folderId: string | null, settings?: Partial<DeckSettings>) => Deck;
  updateDeck: (id: string, updates: Partial<Pick<Deck, 'name' | 'folderId' | 'settings'>>) => void;
  deleteDeck: (id: string) => void;
  moveDeck: (deckId: string, folderId: string | null) => void;

  // Card actions
  createCard: (deckId: string, entry: ParsedEntry, template: CardTemplate) => Card;
  bulkCreateCards: (deckId: string, entries: ParsedEntry[], templateMode: DeckSettings['templateMode']) => Card[];
  updateCard: (id: string, updates: Partial<Pick<Card, 'germanWord' | 'englishMeaning' | 'germanExample' | 'englishExample' | 'notes' | 'generatedExamples'>>) => void;
  deleteCard: (id: string) => void;
  moveCard: (cardId: string, deckId: string) => void;
  suspendCard: (id: string, suspended: boolean) => void;
  buryCard: (id: string) => void;
  unburyAllCards: (deckId: string) => void;

  // Review actions
  reviewCard: (cardId: string, rating: Rating, timeSpent: number) => void;
  getDueCards: (deckIds: string[]) => Card[];
  /** Returns new cards for a deck up to the remaining daily limit */
  getNewCardsForSession: (deckId: string) => Card[];
  /** Mark a new card as introduced today (call before first review) */
  markNewCardIntroduced: (deckId: string, cardId: string) => void;

  // Stats
  getDeckStats: (deckId: string) => DeckStats;
  getTodayStats: () => { reviewed: number; correct: number; wrong: number; newSeen: number };
  getReviewHistory: (days: number) => { date: string; count: number; correct: number }[];
  getStreakDays: () => number;
  getWeakCards: (limit?: number) => Card[];
  getLeeches: () => Card[];

  // Reading actions
  createReadingPassage: (title: string, text: string, questions: ReadingQuestion[]) => ReadingPassage;
  deleteReadingPassage: (id: string) => void;
  saveReadingTranslation: (passageId: string, key: string, translation: ReadingTranslation) => void;
  addReadingWordToDeck: (passageId: string, word: string, translation: string, sentence: string, details?: Partial<ReadingTranslation>) => Card | null;
  removeReadingWordFromDeck: (passageId: string, word: string) => boolean;

  // Todo actions
  createTodo: (text: string, dueDate?: string) => Todo;
  updateTodo: (id: string, updates: Partial<Pick<Todo, 'text' | 'completed' | 'dueDate'>>) => void;
  deleteTodo: (id: string) => void;
}

export const useFlashcardStore = create<FlashcardState>()(
  persist(
    (set, get) => ({
      folders: [],
      decks: [],
      cards: [],
      reviewLogs: [],
      readingPassages: [],
      todos: [],
      newCardsIntroducedToday: {},
      newCardDateKey: '',

      createFolder: (name) => {
        const folder: Folder = { id: generateId(), name, createdAt: new Date(), updatedAt: new Date() };
        set((s) => ({ folders: [...s.folders, folder] }));
        return folder;
      },
      updateFolder: (id, name) => set((s) => ({ folders: s.folders.map(f => f.id === id ? { ...f, name, updatedAt: new Date() } : f) })),
      deleteFolder: (id) => set((s) => ({
        folders: s.folders.filter(f => f.id !== id),
        decks: s.decks.map(d => d.folderId === id ? { ...d, folderId: null } : d),
      })),

      createDeck: (name, folderId, settings = {}) => {
        const deck: Deck = {
          id: generateId(), folderId, name,
          settings: { ...DEFAULT_DECK_SETTINGS, ...settings },
          createdAt: new Date(), updatedAt: new Date(),
        };
        set((s) => ({ decks: [...s.decks, deck] }));
        return deck;
      },
      updateDeck: (id, updates) => set((s) => ({
        decks: s.decks.map(d => d.id === id
          ? { ...d, ...updates, settings: updates.settings ? { ...d.settings, ...updates.settings } : d.settings, updatedAt: new Date() }
          : d),
      })),
      deleteDeck: (id) => set((s) => ({
        decks: s.decks.filter(d => d.id !== id),
        cards: s.cards.filter(c => c.deckId !== id),
      })),
      moveDeck: (deckId, folderId) => set((s) => ({
        decks: s.decks.map(d => d.id === deckId ? { ...d, folderId, updatedAt: new Date() } : d),
      })),

      createCard: (deckId, entry, template) => {
        const card: Card = {
          id: generateId(), deckId, ...entry, state: 'new', template,
          notes: '',
          generatedExamples: [],
          interval: 0, ease: 2.5, reps: 0, lapses: 0, stepIndex: 0, lapseInterval: 0,
          due: new Date(), suspended: false, buried: false, flags: {},
          createdAt: new Date(), updatedAt: new Date(),
        };
        set((s) => ({ cards: [...s.cards, card] }));
        return card;
      },

      bulkCreateCards: (deckId, entries, templateMode) => {
        const newCards: Card[] = [];
        const now = new Date();
        for (const entry of entries) {
          const templates: CardTemplate[] = templateMode === 'both'
            ? ['german-to-english', 'english-to-german'] : [templateMode];
          for (const template of templates) {
            newCards.push({
              id: generateId(), deckId, ...entry, state: 'new', template,
              notes: '',
              generatedExamples: [],
              interval: 0, ease: 2.5, reps: 0, lapses: 0, stepIndex: 0, lapseInterval: 0,
              due: now, suspended: false, buried: false, flags: {},
              createdAt: now, updatedAt: now,
            });
          }
        }
        set((s) => ({ cards: [...s.cards, ...newCards] }));
        return newCards;
      },

      updateCard: (id, updates) => set((s) => ({
        cards: s.cards.map(c => c.id === id ? { ...c, ...updates, updatedAt: new Date() } : c),
      })),
      deleteCard: (id) => set((s) => ({ cards: s.cards.filter(c => c.id !== id) })),
      moveCard: (cardId, deckId) => set((s) => ({
        cards: s.cards.map(c => c.id === cardId ? { ...c, deckId, updatedAt: new Date() } : c),
      })),
      suspendCard: (id, suspended) => set((s) => ({
        cards: s.cards.map(c => c.id === id ? { ...c, suspended, updatedAt: new Date() } : c),
      })),
      buryCard: (id) => set((s) => ({
        cards: s.cards.map(c => c.id === id ? { ...c, buried: true, updatedAt: new Date() } : c),
      })),
      unburyAllCards: (deckId) => set((s) => ({
        cards: s.cards.map(c => c.deckId === deckId ? { ...c, buried: false, updatedAt: new Date() } : c),
      })),

      reviewCard: (cardId, rating, timeSpent) => {
        const state = get();
        const card = state.cards.find(c => c.id === cardId);
        if (!card) return;
        const deck = state.decks.find(d => d.id === card.deckId);
        if (!deck) return;

        const stateBefore: CardState = card.state;
        const result = scheduleCard(card, rating, deck.settings);

        // Leech detection
        const isLeech = result.lapses >= (deck.settings.leechThreshold ?? 8);
        const flags = { ...card.flags, leech: isLeech };

        const log: ReviewLog = {
          id: generateId(), cardId, deckId: card.deckId, rating, stateBefore,
          interval: result.interval, ease: result.ease, time: timeSpent, reviewedAt: new Date(),
        };

        set((s) => ({
          cards: s.cards.map(c => c.id === cardId ? { ...c, ...result, flags, updatedAt: new Date() } : c),
          reviewLogs: [...s.reviewLogs, log],
        }));
      },

      getDueCards: (deckIds) => {
        const now = new Date();
        return get().cards.filter(c =>
          deckIds.includes(c.deckId) && !c.suspended && !c.buried &&
          c.state !== 'new' && new Date(c.due) <= now
        );
      },

      markNewCardIntroduced: (deckId, cardId) => {
        const todayKey = toDateKey(new Date());
        set((s) => {
          // Reset if it's a new day
          const base = s.newCardDateKey === todayKey ? s.newCardsIntroducedToday : {};
          const prev = base[deckId] ?? [];
          if (prev.includes(cardId)) return {};
          return {
            newCardDateKey: todayKey,
            newCardsIntroducedToday: { ...base, [deckId]: [...prev, cardId] },
          };
        });
      },

      getNewCardsForSession: (deckId) => {
        const state = get();
        const deck = state.decks.find(d => d.id === deckId);
        if (!deck) return [];

        const todayKey = toDateKey(new Date());
        const introduced = state.newCardDateKey === todayKey
          ? (state.newCardsIntroducedToday[deckId] ?? [])
          : [];
        const remaining = Math.max(0, deck.settings.newCardsPerDay - introduced.length);

        return state.cards
          .filter(c => c.deckId === deckId && c.state === 'new' && !c.suspended && !c.buried && !introduced.includes(c.id))
          .slice(0, remaining);
      },

      getDeckStats: (deckId) => {
        const cards = get().cards.filter(c => c.deckId === deckId && !c.suspended && !c.buried);
        const now = new Date();
        return {
          newCount: cards.filter(c => c.state === 'new').length,
          learningCount: cards.filter(c => c.state === 'learning' || c.state === 'relearning').length,
          reviewCount: cards.filter(c => c.state === 'review').length,
          dueCount: cards.filter(c => c.state !== 'new' && new Date(c.due) <= now).length,
          leechCount: cards.filter(c => c.flags?.leech).length,
        };
      },

      getTodayStats: () => {
        const todayStart = new Date(); todayStart.setHours(0, 0, 0, 0);
        const todayLogs = get().reviewLogs.filter(log => new Date(log.reviewedAt) >= todayStart);
        const newSeen = todayLogs.filter(l => l.stateBefore === 'new').length;
        return {
          reviewed: todayLogs.length,
          correct: todayLogs.filter(l => l.rating === 'good' || l.rating === 'easy').length,
          wrong: todayLogs.filter(l => l.rating === 'again' || l.rating === 'hard').length,
          newSeen,
        };
      },

      getReviewHistory: (days) => {
        const result: { date: string; count: number; correct: number }[] = [];
        const logs = get().reviewLogs;
        for (let i = days - 1; i >= 0; i--) {
          const date = new Date(); date.setDate(date.getDate() - i); date.setHours(0, 0, 0, 0);
          const nextDate = new Date(date); nextDate.setDate(nextDate.getDate() + 1);
          const dayLogs = logs.filter(log => { const d = new Date(log.reviewedAt); return d >= date && d < nextDate; });
          result.push({
            date: date.toISOString().split('T')[0],
            count: dayLogs.length,
            correct: dayLogs.filter(l => l.rating === 'good' || l.rating === 'easy').length,
          });
        }
        return result;
      },

      getStreakDays: () => {
        const history = get().getReviewHistory(365);
        let streak = 0;
        for (let i = history.length - 1; i >= 0; i--) {
          if (history[i].count > 0) streak++;
          else break;
        }
        return streak;
      },

      getWeakCards: (limit = 20) => {
        return get().cards
          .filter(c => !c.suspended && c.lapses > 0)
          .sort((a, b) => b.lapses - a.lapses)
          .slice(0, limit);
      },

      getLeeches: () => get().cards.filter(c => c.flags?.leech && !c.suspended),

      createReadingPassage: (title, text, questions) => {
        const now = new Date();
        const cleanTitle = title.trim() || `Reading ${now.toLocaleDateString()}`;
        const deck: Deck = {
          id: generateId(),
          folderId: null,
          name: `Reading: ${cleanTitle}`,
          settings: { ...DEFAULT_DECK_SETTINGS, newCardsPerDay: 9999 },
          createdAt: now,
          updatedAt: now,
        };
        const passage: ReadingPassage = {
          id: generateId(),
          title: cleanTitle,
          text,
          deckId: deck.id,
          questions,
          translations: {},
          createdAt: now,
          updatedAt: now,
        };
        set((s) => ({
          decks: [...s.decks, deck],
          readingPassages: [passage, ...s.readingPassages],
        }));
        return passage;
      },

      deleteReadingPassage: (id) => {
        const passage = get().readingPassages.find(p => p.id === id);
        if (!passage) return;
        set((s) => ({
          readingPassages: s.readingPassages.filter(p => p.id !== id),
          decks: s.decks.filter(d => d.id !== passage.deckId),
          cards: s.cards.filter(c => c.deckId !== passage.deckId),
          reviewLogs: s.reviewLogs.filter(l => l.deckId !== passage.deckId),
        }));
      },

      saveReadingTranslation: (passageId, key, translation) => set((s) => ({
        readingPassages: s.readingPassages.map(passage => passage.id === passageId
          ? {
              ...passage,
              translations: {
                ...(passage.translations ?? {}),
                [key]: translation,
              },
              updatedAt: new Date(),
            }
          : passage
        ),
      })),

      addReadingWordToDeck: (passageId, word, translation, sentence, details) => {
        const passage = get().readingPassages.find(p => p.id === passageId);
        if (!passage) return null;
        const normalized = word.trim().toLocaleLowerCase();
        if (!normalized || !translation.trim()) return null;
        const existing = get().cards.find(c =>
          c.deckId === passage.deckId &&
          c.germanWord.trim().toLocaleLowerCase() === normalized
        );
        if (existing) {
          if (details) {
            const note = buildReadingCardNote(details);
            set((s) => ({
              cards: s.cards.map(card => card.id === existing.id
                ? {
                    ...card,
                    englishMeaning: translation.trim(),
                    germanExample: (details.exampleGerman || sentence).trim(),
                    englishExample: (details.exampleEnglish || '').trim(),
                    notes: note || card.notes,
                    updatedAt: new Date(),
                  }
                : card
              ),
            }));
            return get().cards.find(card => card.id === existing.id) ?? existing;
          }
          return existing;
        }

        const now = new Date();
        const note = buildReadingCardNote(details);
        const card: Card = {
          id: generateId(),
          deckId: passage.deckId,
          germanWord: word.trim(),
          englishMeaning: translation.trim(),
          germanExample: (details?.exampleGerman || sentence).trim(),
          englishExample: (details?.exampleEnglish || '').trim(),
          notes: note,
          generatedExamples: [],
          state: 'new',
          template: 'german-to-english',
          interval: 0,
          ease: 2.5,
          reps: 0,
          lapses: 0,
          stepIndex: 0,
          lapseInterval: 0,
          due: now,
          suspended: false,
          buried: false,
          flags: {},
          createdAt: now,
          updatedAt: now,
        };
        set((s) => ({ cards: [...s.cards, card] }));
        return card;
      },

      removeReadingWordFromDeck: (passageId, word) => {
        const passage = get().readingPassages.find(p => p.id === passageId);
        if (!passage) return false;
        const normalized = word.trim().toLocaleLowerCase();
        const card = get().cards.find(c =>
          c.deckId === passage.deckId &&
          c.germanWord.trim().toLocaleLowerCase() === normalized
        );
        if (!card) return false;

        set((s) => ({
          cards: s.cards.filter(c => c.id !== card.id),
          reviewLogs: s.reviewLogs.filter(log => log.cardId !== card.id),
          newCardsIntroducedToday: Object.fromEntries(
            Object.entries(s.newCardsIntroducedToday).map(([deckId, ids]) => [
              deckId,
              ids.filter(id => id !== card.id),
            ])
          ),
        }));
        return true;
      },

      // Todos
      createTodo: (text, dueDate) => {
        const todo: Todo = { id: generateId(), text, completed: false, dueDate, createdAt: new Date(), updatedAt: new Date() };
        set(s => ({ todos: [...s.todos, todo] }));
        return todo;
      },
      updateTodo: (id, updates) => set(s => ({
        todos: s.todos.map(t => t.id === id ? { ...t, ...updates, updatedAt: new Date() } : t),
      })),
      deleteTodo: (id) => set(s => ({ todos: s.todos.filter(t => t.id !== id) })),
    }),
    {
      name: 'flashcard-storage-v2',
      partialize: (state) => ({
        folders: serializeDates(state.folders),
        decks: serializeDates(state.decks),
        cards: serializeDates(state.cards),
        reviewLogs: serializeDates(state.reviewLogs),
        readingPassages: serializeDates(state.readingPassages),
        todos: serializeDates(state.todos),
        newCardsIntroducedToday: state.newCardsIntroducedToday,
        newCardDateKey: state.newCardDateKey,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        state.folders = deserializeDates(state.folders, ['createdAt', 'updatedAt']);
        state.decks = deserializeDates(state.decks, ['createdAt', 'updatedAt']);
        state.decks = state.decks.map((d: any) => {
          const settings = { ...DEFAULT_DECK_SETTINGS, ...(d.settings ?? {}) };
          // Decks created before learning/lapse steps were configurable still carry
          // the old hardcoded defaults (1m/10m learning, 10m lapse). Bump those up to
          // the new defaults so existing decks get the extra repetition too, without
          // touching steps anyone has deliberately customized to something else.
          if (JSON.stringify(settings.learningSteps) === JSON.stringify([1, 10])) {
            settings.learningSteps = DEFAULT_DECK_SETTINGS.learningSteps;
          }
          if (JSON.stringify(settings.lapseSteps) === JSON.stringify([10])) {
            settings.lapseSteps = DEFAULT_DECK_SETTINGS.lapseSteps;
          }
          return {
            ...d,
            folderId: d.folderId ?? null,
            settings,
          };
        });
        state.cards = deserializeDates(state.cards, ['createdAt', 'updatedAt', 'due']);
        // Migrate old cards missing new fields
        state.cards = state.cards.map((c: any) => ({
          lapseInterval: 0, flags: {}, notes: '', generatedExamples: [], ...c,
          settings: c.settings ? { leechThreshold: 8, ...c.settings } : c.settings,
        }));
        state.reviewLogs = deserializeDates(state.reviewLogs, ['reviewedAt']);
        // Migrate old logs missing deckId/stateBefore
        state.reviewLogs = state.reviewLogs.map((l: any) => ({
          deckId: '', stateBefore: 'review', ...l,
        }));
        state.readingPassages = deserializeDates(state.readingPassages ?? [], ['createdAt', 'updatedAt']);
        state.readingPassages = state.readingPassages.map((p: any) => ({
          translations: {},
          ...p,
        }));
        state.todos = deserializeDates(state.todos ?? [], ['createdAt', 'updatedAt']);
        if (!state.newCardsIntroducedToday) state.newCardsIntroducedToday = {};
        if (!state.newCardDateKey) state.newCardDateKey = '';
      },
    }
  )
);
