import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { AlertCircle, ArrowLeft, CheckCircle, ChevronDown, Edit3, Lightbulb, Loader2, Save, Sparkles, StickyNote, Trash2, X, Zap, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useFlashcardStore } from "@/store/flashcardStore";
import { getNextIntervals } from "@/lib/srs";
import { buildDueQueue, getNextLearningDueAt, getSiblingKey, stableShuffle } from "@/lib/reviewQueue";
import { getCardPriorityRank, parsePriorityWords } from "@/lib/wordMatch";
import { PronounceButton } from "@/components/PronounceButton";
import type { Card as CardType, GeneratedCardExample, Rating } from "@/types/flashcard";
import { toast } from "sonner";

type QueueEntry = { cardId: string; isNew: boolean };
type ExampleLevel = "A2" | "B1";
type AiPracticeMode = "generate" | "check" | "ask";
type CardExample = {
  sentence?: string;
  translation?: string;
  wordNote?: string;
  grammarTip?: string;
  vocabulary?: { word: string; translation: string; note?: string }[];
};
type CardSentenceCheck = {
  usesFlashcardWord?: boolean;
  correctForm?: string;
  a2Alternative?: string;
  b1Alternative?: string;
  translations?: {
    correctForm?: string;
    a2?: string;
    b1?: string;
  };
  wordFeedback?: string;
  rules?: { title: string; explanation: string; example?: string }[];
  vocabulary?: { word: string; translation: string; note?: string }[];
};
type CardQuestionAnswer = {
  answer?: string;
  quickContrast?: { term: string; meaning: string; usage?: string; register?: string; example?: string }[];
  examples?: { german: string; english: string; note?: string }[];
  ruleReminder?: string;
};
type PersistedReviewSession = {
  version: 1;
  deckIdsParam: string;
  priorityWordsParam?: string;
  seed: number;
  queue: QueueEntry[];
  currentCardId: string | null;
  revealed: boolean;
  sessionStats: { reviewed: number; again: number; hard: number; good: number; easy: number };
  isComplete: boolean;
  waitingUntil: string | null;
  buriedSiblingKeys: string[];
  updatedAt: string;
};

const ratingButtonClasses: Record<Rating, string> = {
  again: "rating-btn-again",
  hard: "rating-btn-hard",
  good: "rating-btn-good",
  easy: "rating-btn-easy",
};
const REVIEW_SESSION_VERSION = 1;

function getReviewSessionKey(deckIdsParam: string, priorityWordsParam: string) {
  if (!priorityWordsParam) return `wortwise-review-session:${deckIdsParam}`;
  return `wortwise-review-session:${deckIdsParam}:${priorityWordsParam}`;
}

function readReviewSession(deckIdsParam: string, priorityWordsParam: string): PersistedReviewSession | null {
  try {
    const raw = window.localStorage.getItem(getReviewSessionKey(deckIdsParam, priorityWordsParam));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedReviewSession;
    if (
      parsed.version !== REVIEW_SESSION_VERSION ||
      parsed.deckIdsParam !== deckIdsParam ||
      (parsed.priorityWordsParam ?? "") !== priorityWordsParam
    ) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeReviewSession(session: PersistedReviewSession) {
  try {
    window.localStorage.setItem(getReviewSessionKey(session.deckIdsParam, session.priorityWordsParam ?? ""), JSON.stringify(session));
  } catch {
    // Storage can be unavailable in private browsing; review still works without resume.
  }
}

function clearReviewSession(deckIdsParam: string, priorityWordsParam: string) {
  try {
    window.localStorage.removeItem(getReviewSessionKey(deckIdsParam, priorityWordsParam));
  } catch {
    // Ignore storage failures.
  }
}

function makeSavedExample(example: CardExample, level: ExampleLevel): GeneratedCardExample | null {
  if (!example.sentence?.trim()) return null;
  return {
    id: crypto.randomUUID(),
    level,
    sentence: example.sentence.trim(),
    translation: example.translation?.trim() ?? "",
    wordNote: example.wordNote?.trim() ?? "",
    grammarTip: example.grammarTip?.trim() ?? "",
    vocabulary: example.vocabulary ?? [],
    createdAt: new Date().toISOString(),
  };
}

export default function Review() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const deckIdsParam = searchParams.get("deckIds");
  const priorityWordsParam = searchParams.get("priorityWords") ?? "";
  const freshSession = searchParams.get("fresh") === "1";
  const selectedDeckIds = useMemo(() => (deckIdsParam ? deckIdsParam.split(",") : []), [deckIdsParam]);
  const priorityTerms = useMemo(() => parsePriorityWords(priorityWordsParam), [priorityWordsParam]);

  const { decks, cards, reviewCard, buryCard, markNewCardIntroduced, updateCard } = useFlashcardStore();

  const [seed, setSeed] = useState(() => Date.now());
  const [queue, setQueue] = useState<QueueEntry[]>([]);
  const [currentCardId, setCurrentCardId] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const startTime = useRef(Date.now());
  const buriedSiblingKeys = useRef<Set<string>>(new Set());
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [waitingUntil, setWaitingUntil] = useState<Date | null>(null);
  const [exampleLevel, setExampleLevel] = useState<ExampleLevel>("A2");
  const [aiExample, setAiExample] = useState<CardExample | null>(null);
  const [aiExampleLoading, setAiExampleLoading] = useState(false);
  const [aiExampleError, setAiExampleError] = useState<string | null>(null);
  const [aiPracticeMode, setAiPracticeMode] = useState<AiPracticeMode>("generate");
  const [ownSentence, setOwnSentence] = useState("");
  const [sentenceCheck, setSentenceCheck] = useState<CardSentenceCheck | null>(null);
  const [sentenceCheckLoading, setSentenceCheckLoading] = useState(false);
  const [sentenceCheckError, setSentenceCheckError] = useState<string | null>(null);
  const [wordQuestion, setWordQuestion] = useState("");
  const [wordAnswer, setWordAnswer] = useState<CardQuestionAnswer | null>(null);
  const [wordAnswerLoading, setWordAnswerLoading] = useState(false);
  const [wordAnswerError, setWordAnswerError] = useState<string | null>(null);
  const [notesOpen, setNotesOpen] = useState(false);
  const [notesEditing, setNotesEditing] = useState(false);
  const [noteDraft, setNoteDraft] = useState("");
  const [savedExamplesOpen, setSavedExamplesOpen] = useState(false);

  const scope = useMemo(() => ({ deckIds: selectedDeckIds }), [selectedDeckIds]);

  const currentCard: CardType | null = useMemo(() => {
    if (!currentCardId) return null;
    return cards.find((c) => c.id === currentCardId) ?? null;
  }, [cards, currentCardId]);

  const currentDeck = useMemo(() => {
    if (!currentCard) return null;
    return decks.find((d) => d.id === currentCard.deckId) ?? null;
  }, [decks, currentCard]);

  const intervals = useMemo(() => {
    if (!currentCard || !currentDeck) return null;
    return getNextIntervals(currentCard, currentDeck.settings);
  }, [currentCard, currentDeck]);

  /**
   * Build the full session queue: requested priority words first, then due cards
   * and new cards interleaved after every 5 due cards to avoid front-loading.
   */
  const buildSessionQueue = useCallback((now: Date): QueueEntry[] => {
    const state = useFlashcardStore.getState();
    const prioritySiblingKeys = new Set<string>();
    const priorityItems: QueueEntry[] = [];

    if (priorityTerms.length > 0) {
      const selected = new Set(selectedDeckIds);
      const rankedCards = state.cards
        .filter((c) =>
          selected.has(c.deckId) &&
          !c.suspended &&
          !c.buried &&
          !buriedSiblingKeys.current.has(getSiblingKey(c))
        )
        .map((card) => ({ card, rank: getCardPriorityRank(card, priorityTerms) }))
        .filter((item): item is { card: CardType; rank: number } => item.rank !== null)
        .sort((a, b) => a.rank - b.rank || a.card.germanWord.localeCompare(b.card.germanWord));

      for (const { card } of rankedCards) {
        const siblingKey = getSiblingKey(card);
        if (prioritySiblingKeys.has(siblingKey)) continue;
        prioritySiblingKeys.add(siblingKey);
        priorityItems.push({ cardId: card.id, isNew: card.state === "new" });
      }
    }

    const dueItems = buildDueQueue(state.cards, scope, now, seed)
      .map(i => state.cards.find(c => c.id === i.cardId))
      .filter((c): c is CardType => Boolean(c))
      .filter((c) => {
        const siblingKey = getSiblingKey(c);
        if (prioritySiblingKeys.has(siblingKey)) return false;
        if (c.state === "learning" || c.state === "relearning") return true;
        return !buriedSiblingKeys.current.has(siblingKey) && !prioritySiblingKeys.has(siblingKey);
      })
      .map(c => ({ cardId: c.id, isNew: false }));

    // Gather new cards for each deck
    const newItems: QueueEntry[] = [];
    for (const deckId of selectedDeckIds) {
      const newCards = stableShuffle(state.getNewCardsForSession(deckId), seed + deckId.length)
        .filter((c) => {
          const siblingKey = getSiblingKey(c);
          return !buriedSiblingKeys.current.has(siblingKey) && !prioritySiblingKeys.has(siblingKey);
        });
      for (const c of newCards) newItems.push({ cardId: c.id, isNew: true });
    }

    // Interleave: 5 due, 1 new, 5 due, 1 new...
    const result: QueueEntry[] = [];
    let di = 0, ni = 0;
    while (di < dueItems.length || ni < newItems.length) {
      for (let i = 0; i < 5 && di < dueItems.length; i++, di++) result.push(dueItems[di]);
      if (ni < newItems.length) result.push(newItems[ni++]);
    }
    return [...priorityItems, ...result];
  }, [priorityTerms, scope, seed, selectedDeckIds]);

  const pickNext = useCallback((now: Date) => {
    const q = buildSessionQueue(now);
    if (q.length > 0) {
      const next = q[0];
      setCurrentCardId(next.cardId);
      setQueue(q);
      setWaitingUntil(null);
      return;
    }

    // Check if there are learning cards coming up soon
    const nextLearning = getNextLearningDueAt(useFlashcardStore.getState().cards, scope, now);
    if (nextLearning) {
      setCurrentCardId(null);
      setQueue([]);
      setWaitingUntil(nextLearning);
      return;
    }

    setCurrentCardId(null);
    setQueue([]);
    setWaitingUntil(null);
    setIsComplete(true);
  }, [buildSessionQueue, scope]);

  // Initialize or restore an in-progress session. A refresh should resume; an explicit
  // Start Session action passes fresh=1 and clears the saved session first.
  useEffect(() => {
    if (!deckIdsParam) { navigate("/practice", { replace: true }); return; }

    if (freshSession) {
      clearReviewSession(deckIdsParam, priorityWordsParam);
      const params = new URLSearchParams({ deckIds: deckIdsParam });
      if (priorityWordsParam) params.set("priorityWords", priorityWordsParam);
      navigate(`/review?${params.toString()}`, { replace: true });
      return;
    }

    const state = useFlashcardStore.getState();
    const restored = readReviewSession(deckIdsParam, priorityWordsParam);
    if (restored) {
      const selected = new Set(selectedDeckIds);
      const isValidCard = (cardId: string | null) => {
        if (!cardId) return false;
        const card = state.cards.find(c => c.id === cardId);
        return Boolean(card && selected.has(card.deckId));
      };
      const validQueue = restored.queue.filter(item => isValidCard(item.cardId));
      const restoredCurrentCardId = isValidCard(restored.currentCardId)
        ? restored.currentCardId
        : validQueue[0]?.cardId ?? null;

      if (restoredCurrentCardId || restored.waitingUntil || restored.isComplete) {
        setSeed(restored.seed || Date.now());
        setQueue(validQueue);
        setCurrentCardId(restoredCurrentCardId);
        setRevealed(Boolean(restored.revealed && restoredCurrentCardId));
        setSessionStats(restored.sessionStats);
        setWaitingUntil(restored.waitingUntil ? new Date(restored.waitingUntil) : null);
        setIsComplete(restored.isComplete);
        buriedSiblingKeys.current = new Set(restored.buriedSiblingKeys);
        startTime.current = Date.now();
        return;
      }
    }

    setSeed(Date.now());
    setIsComplete(false);
    setSessionStats({ reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 });
    setRevealed(false);
    buriedSiblingKeys.current = new Set();
    startTime.current = Date.now();
    pickNext(new Date());
  }, [deckIdsParam, freshSession, priorityWordsParam]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!deckIdsParam || freshSession) return;
    const hasSessionState = Boolean(currentCardId || waitingUntil || isComplete || queue.length > 0 || sessionStats.reviewed > 0);
    if (!hasSessionState) return;

    writeReviewSession({
      version: REVIEW_SESSION_VERSION,
      deckIdsParam,
      priorityWordsParam,
      seed,
      queue,
      currentCardId,
      revealed,
      sessionStats,
      isComplete,
      waitingUntil: waitingUntil ? waitingUntil.toISOString() : null,
      buriedSiblingKeys: [...buriedSiblingKeys.current],
      updatedAt: new Date().toISOString(),
    });
  }, [deckIdsParam, priorityWordsParam, freshSession, seed, queue, currentCardId, revealed, sessionStats, isComplete, waitingUntil]);

  // Timer for waiting state
  useEffect(() => {
    if (!waitingUntil) return;
    const ms = waitingUntil.getTime() - Date.now();
    if (ms <= 0) { pickNext(new Date()); return; }
    const t = window.setTimeout(() => pickNext(new Date()), ms);
    return () => window.clearTimeout(t);
  }, [waitingUntil, pickNext]);

  const handleReveal = useCallback(() => setRevealed(true), []);

  useEffect(() => {
    setAiExample(null);
    setAiExampleError(null);
    setAiExampleLoading(false);
    setOwnSentence("");
    setSentenceCheck(null);
    setSentenceCheckError(null);
    setSentenceCheckLoading(false);
    setWordQuestion("");
    setWordAnswer(null);
    setWordAnswerError(null);
    setWordAnswerLoading(false);
    setNotesOpen(false);
    setNotesEditing(false);
    setNoteDraft(currentCard?.notes ?? "");
    setSavedExamplesOpen(false);
  }, [currentCardId]);

  const saveGeneratedExample = useCallback((example: CardExample) => {
    if (!currentCard) return;
    const savedExample = makeSavedExample(example, exampleLevel);
    if (!savedExample) return;

    const german = currentCard.germanWord.trim().toLocaleLowerCase();
    const english = currentCard.englishMeaning.trim().toLocaleLowerCase();
    const siblingCards = cards.filter(card =>
      card.deckId === currentCard.deckId &&
      card.germanWord.trim().toLocaleLowerCase() === german &&
      card.englishMeaning.trim().toLocaleLowerCase() === english
    );

    let saved = false;
    for (const card of siblingCards) {
      const existing = card.generatedExamples ?? [];
      const alreadySaved = existing.some(item =>
        item.level === savedExample.level &&
        item.sentence.trim().toLocaleLowerCase() === savedExample.sentence.trim().toLocaleLowerCase()
      );
      if (alreadySaved) continue;
      updateCard(card.id, { generatedExamples: [...existing, savedExample] });
      saved = true;
    }

    if (saved) {
      toast.success("Generated example saved to this card");
    } else {
      toast.info("That generated example is already saved");
    }
  }, [cards, currentCard, exampleLevel, updateCard]);

  const removeGeneratedExample = useCallback((exampleId: string) => {
    if (!currentCard) return;

    const german = currentCard.germanWord.trim().toLocaleLowerCase();
    const english = currentCard.englishMeaning.trim().toLocaleLowerCase();
    const siblingCards = cards.filter(card =>
      card.deckId === currentCard.deckId &&
      card.germanWord.trim().toLocaleLowerCase() === german &&
      card.englishMeaning.trim().toLocaleLowerCase() === english
    );

    for (const card of siblingCards) {
      updateCard(card.id, {
        generatedExamples: (card.generatedExamples ?? []).filter(example => example.id !== exampleId),
      });
    }
    toast.success("Saved example removed");
  }, [cards, currentCard, updateCard]);

  const generateAiExample = useCallback(async () => {
    if (!currentCard) return;

    setAiExampleLoading(true);
    setAiExampleError(null);

    try {
      const res = await fetch("/api/german-helper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "card-example",
          level: exampleLevel,
          germanWord: currentCard.germanWord,
          englishMeaning: currentCard.englishMeaning,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || `API error ${res.status}`);
      }

      const result = data.result as CardExample;
      setAiExample(result);
      saveGeneratedExample(result);
    } catch (err: any) {
      setAiExampleError(err.message ?? "Could not generate an example for this card.");
    } finally {
      setAiExampleLoading(false);
    }
  }, [currentCard, exampleLevel, saveGeneratedExample]);

  const checkOwnSentence = useCallback(async () => {
    if (!currentCard || ownSentence.trim().length < 2) return;

    setSentenceCheckLoading(true);
    setSentenceCheckError(null);

    try {
      const res = await fetch("/api/german-helper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "card-sentence",
          level: "both",
          input: ownSentence.trim(),
          germanWord: currentCard.germanWord,
          englishMeaning: currentCard.englishMeaning,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || `API error ${res.status}`);
      }

      setSentenceCheck(data.result as CardSentenceCheck);
    } catch (err: any) {
      setSentenceCheckError(err.message ?? "Could not check your sentence.");
    } finally {
      setSentenceCheckLoading(false);
    }
  }, [currentCard, ownSentence]);

  const askGroqAboutWord = useCallback(async () => {
    if (!currentCard || wordQuestion.trim().length < 2) return;

    setWordAnswerLoading(true);
    setWordAnswerError(null);

    try {
      const res = await fetch("/api/german-helper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "card-question",
          level: "B1",
          input: wordQuestion.trim(),
          germanWord: currentCard.germanWord,
          englishMeaning: currentCard.englishMeaning,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || `API error ${res.status}`);
      }

      setWordAnswer(data.result as CardQuestionAnswer);
    } catch (err: any) {
      setWordAnswerError(err.message ?? "Could not answer this card question.");
    } finally {
      setWordAnswerLoading(false);
    }
  }, [currentCard, wordQuestion]);

  const saveCardNotes = useCallback((notes: string) => {
    if (!currentCard) return;

    const german = currentCard.germanWord.trim().toLocaleLowerCase();
    const english = currentCard.englishMeaning.trim().toLocaleLowerCase();
    const siblingCards = cards.filter(card =>
      card.deckId === currentCard.deckId &&
      card.germanWord.trim().toLocaleLowerCase() === german &&
      card.englishMeaning.trim().toLocaleLowerCase() === english
    );

    for (const card of siblingCards) {
      updateCard(card.id, { notes });
    }

    setNoteDraft(notes);
    setNotesEditing(false);
    toast.success(notes.trim() ? "Card note saved" : "Card note cleared");
  }, [cards, currentCard, updateCard]);

  const saveGroqAnswerToNotes = useCallback((answer: CardQuestionAnswer) => {
    if (!currentCard) return;

    const blocks: string[] = [];
    const question = wordQuestion.trim();
    blocks.push(`Groq note for ${currentCard.germanWord}`);
    if (question) blocks.push(`Question: ${question}`);
    if (answer.answer) blocks.push(`Answer: ${answer.answer}`);

    if (answer.quickContrast?.length) {
      blocks.push(
        "Study cards:",
        ...answer.quickContrast.slice(0, 4).map(item => {
          const register = item.register ? ` (${item.register})` : "";
          const usage = item.usage || item.register || "See example/context";
          const example = item.example || "";
          return `${item.term} | Meaning: ${item.meaning}${register} | Usage: ${usage} | Example: ${example}`;
        })
      );
    }

    if (answer.examples?.length) {
      blocks.push(
        "Examples:",
        ...answer.examples.slice(0, 3).map(item => `- ${item.german} = ${item.english}${item.note ? ` (${item.note})` : ""}`)
      );
    }

    if (answer.ruleReminder) {
      blocks.push(`Rule reminder: ${answer.ruleReminder}`);
    }

    const formatted = blocks.join("\n");
    const existing = currentCard.notes?.trim();
    const nextNotes = existing && !existing.includes(formatted)
      ? `${existing}\n\n---\n${formatted}`
      : existing || formatted;

    saveCardNotes(nextNotes);
    setNotesOpen(false);
  }, [currentCard, saveCardNotes, wordQuestion]);

  const handleRate = useCallback((rating: Rating) => {
    if (!currentCard) return;
    const timeSpent = Date.now() - startTime.current;

    // If this card is new and we're rating it for the first time, mark it introduced
    if (currentCard.state === 'new') {
      markNewCardIntroduced(currentCard.deckId, currentCard.id);
    }

    reviewCard(currentCard.id, rating, timeSpent);
    buriedSiblingKeys.current.add(getSiblingKey(currentCard));
    setSessionStats(prev => ({ ...prev, reviewed: prev.reviewed + 1, [rating]: (prev[rating] as number) + 1 }));
    setRevealed(false);
    startTime.current = Date.now();
    setSeed(s => s + 1);
    pickNext(new Date());
  }, [currentCard, reviewCard, markNewCardIntroduced, pickNext]);

  const handleBury = useCallback(() => {
    if (!currentCard) return;
    buryCard(currentCard.id);
    setRevealed(false);
    startTime.current = Date.now();
    pickNext(new Date());
  }, [currentCard, buryCard, pickNext]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping = target?.tagName === "TEXTAREA" || target?.tagName === "INPUT" || target?.isContentEditable;
      if (isTyping) return;

      if (e.key === " " || e.key === "Enter") {
        if (!revealed && currentCard) handleReveal();
        e.preventDefault();
        return;
      }
      if (!revealed) return;
      if (e.key === "1") handleRate("again");
      else if (e.key === "2") handleRate("hard");
      else if (e.key === "3") handleRate("good");
      else if (e.key === "4") handleRate("easy");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [revealed, handleReveal, handleRate, currentCard]);

  // ── SESSION COMPLETE ──────────────────────────────────────
  if (isComplete) {
    const accuracy = sessionStats.reviewed > 0
      ? Math.round(((sessionStats.good + sessionStats.easy) / sessionStats.reviewed) * 100) : 0;
    return (
      <div className="page-transition max-w-2xl mx-auto py-16 text-center space-y-8">
        <div>
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-serif font-bold mb-2">Session Complete!</h2>
          <p className="text-muted-foreground">Great work — you finished your review queue.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Reviewed", value: sessionStats.reviewed, cls: "" },
            { label: "Accuracy", value: `${accuracy}%`, cls: "text-srs-good" },
            { label: "Correct", value: sessionStats.good + sessionStats.easy, cls: "text-srs-good" },
            { label: "Again", value: sessionStats.again, cls: sessionStats.again > 0 ? "text-srs-again" : "" },
          ].map(({ label, value, cls }) => (
            <Card key={label}><CardContent className="py-6 text-center">
              <div className={cn("text-2xl font-bold", cls)}>{value}</div>
              <div className="text-sm text-muted-foreground mt-1">{label}</div>
            </CardContent></Card>
          ))}
        </div>

        <div className="flex gap-3 justify-center">
          <Link to="/"><Button variant="outline">Dashboard</Button></Link>
          <Link to="/practice"><Button className="gap-2"><RotateCcw className="h-4 w-4" />New Session</Button></Link>
        </div>
      </div>
    );
  }

  // ── WAITING STATE ─────────────────────────────────────────
  if (!currentCardId && waitingUntil) {
    return (
      <div className="page-transition max-w-2xl mx-auto py-16 text-center space-y-6">
        <CheckCircle className="h-16 w-16 mx-auto text-srs-good" />
        <div>
          <h2 className="text-2xl font-serif font-bold mb-2">Almost done!</h2>
          <p className="text-muted-foreground">Waiting for the next learning step to come due.</p>
          <p className="text-sm text-muted-foreground mt-2">Next card at <strong>{waitingUntil.toLocaleTimeString()}</strong></p>
        </div>
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={() => pickNext(new Date())}>Refresh now</Button>
          <Button onClick={() => navigate("/practice")}>Change decks</Button>
        </div>
      </div>
    );
  }

  // ── EMPTY STATE ───────────────────────────────────────────
  if (!currentCard) {
    return (
      <div className="page-transition max-w-2xl mx-auto py-16 text-center space-y-6">
        <CheckCircle className="h-16 w-16 mx-auto text-srs-good" />
        <div>
          <h2 className="text-2xl font-serif font-bold mb-2">All caught up!</h2>
          <p className="text-muted-foreground">No cards due right now. Come back later or start a new deck.</p>
        </div>
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={() => navigate("/practice")}>Choose decks</Button>
          <Link to="/"><Button>Dashboard</Button></Link>
        </div>
      </div>
    );
  }

  if (!currentDeck || !intervals) return null;

  const isNew = currentCard.state === "new";
  const isGermanToEnglish = currentCard.template === "german-to-english";
  // Remaining items estimate
  const remaining = queue.filter(q => q.cardId !== currentCardId).length;

  const stateLabel = isNew ? "New" : currentCard.state === "learning" ? "Learning" : currentCard.state === "relearning" ? "Relearning" : "Review";
  const stateCls = isNew ? "stat-badge-new" : (currentCard.state === "learning" || currentCard.state === "relearning") ? "stat-badge-learning" : "stat-badge-review";
  const hasSavedNote = Boolean(currentCard.notes?.trim());

  return (
    <div className="page-transition max-w-2xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">{currentDeck.name}</p>
          <div className="mt-0.5 flex flex-wrap items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <span>{sessionStats.reviewed} reviewed · {remaining} remaining</span>
            {priorityTerms.length > 0 && (
              <Badge variant="secondary" className="h-5 rounded-full px-2 text-[11px] font-medium">
                Priority first
              </Badge>
            )}
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={handleBury}>
          <X className="h-4 w-4 mr-1" />Skip
        </Button>
      </div>

      <Progress value={sessionStats.reviewed > 0 ? Math.round((sessionStats.reviewed / (sessionStats.reviewed + remaining + 1)) * 100) : 0} className="h-1.5" />

      {/* Card state badge */}
      <div className="flex justify-center">
        <Badge variant="outline" className={cn("text-xs font-medium", stateCls)}>{stateLabel}</Badge>
        {hasSavedNote && (
          <Badge className="ml-2 border-amber-300 bg-amber-100 text-amber-900 shadow-[0_0_18px_rgba(245,158,11,0.35)] hover:bg-amber-100">
            <StickyNote className="mr-1 h-3 w-3" />
            Notes available
          </Badge>
        )}
        {currentCard.lapses > 0 && (
          <Badge variant="outline" className="ml-2 text-xs text-amber-600 border-amber-300">
            {currentCard.lapses} lapse{currentCard.lapses > 1 ? "s" : ""}
          </Badge>
        )}
      </div>

      {/* Flashcard */}
      <Card className={cn(
        "relative min-h-[280px] flex flex-col shadow-sm",
        hasSavedNote && "border-amber-300/70 shadow-[0_0_0_1px_rgba(245,158,11,0.2),0_18px_50px_rgba(245,158,11,0.14)]"
      )}>
        {hasSavedNote && (
          <div className="absolute right-4 top-4 rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900 shadow-[0_0_16px_rgba(245,158,11,0.35)]">
            <StickyNote className="mr-1 inline h-3.5 w-3.5 align-[-2px]" />
            Notes available
          </div>
        )}
        <CardContent className="flex-1 flex flex-col justify-center items-center py-10 text-center">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              {isGermanToEnglish ? "German → English" : "English → German"}
            </p>
            <div className="flex items-center justify-center gap-2">
              <h2 className={cn("font-bold", isGermanToEnglish ? "german-word" : "english-word text-2xl md:text-3xl")}>
                {isGermanToEnglish ? currentCard.germanWord : currentCard.englishMeaning}
              </h2>
              {isGermanToEnglish && <PronounceButton text={currentCard.germanWord} />}
            </div>
          </div>

          {revealed && (
            <div className="animate-slide-up space-y-4 w-full border-t pt-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                  {isGermanToEnglish ? "English" : "German"}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <h3 className={cn("font-bold", isGermanToEnglish ? "english-word text-xl md:text-2xl" : "german-word text-2xl md:text-3xl")}>
                    {isGermanToEnglish ? currentCard.englishMeaning : currentCard.germanWord}
                  </h3>
                  {!isGermanToEnglish && <PronounceButton text={currentCard.germanWord} />}
                </div>
              </div>
              {currentCard.germanExample && (
                <div className="mt-4 p-4 bg-muted/40 rounded-lg text-left">
                  <div className="flex items-start justify-between gap-2">
                    <p className="example-sentence text-sm italic">„{currentCard.germanExample}"</p>
                    <PronounceButton text={currentCard.germanExample} className="mt-[-4px]" />
                  </div>
                  {currentCard.englishExample && (
                    <p className="text-xs text-muted-foreground mt-1.5">"{currentCard.englishExample}"</p>
                  )}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className={cn(
        "shadow-sm transition-shadow",
        hasSavedNote
          ? "border-amber-300/70 bg-amber-50/45 shadow-[0_0_24px_rgba(245,158,11,0.18)]"
          : "border-muted bg-muted/10"
      )}>
        <CardContent className="p-4">
          <button
            type="button"
            onClick={() => setNotesOpen(open => !open)}
            className="flex w-full items-center justify-between gap-3 text-left"
          >
            <div className="flex items-center gap-2">
              <StickyNote className={cn("h-4 w-4", hasSavedNote ? "text-amber-700" : "text-primary")} />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold">Card notes</p>
                  {hasSavedNote && (
                    <span className="rounded-full border border-amber-300 bg-amber-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-900 shadow-[0_0_14px_rgba(245,158,11,0.28)]">
                      Notes available
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{hasSavedNote ? "Open to review your saved explanation." : "No note saved yet"}</p>
              </div>
            </div>
            <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", notesOpen && "rotate-180")} />
          </button>

          {notesOpen && (
            <div className="mt-4 space-y-4 border-t pt-4">
              {hasSavedNote && !notesEditing ? (
                <ReadableCardNote note={currentCard.notes} />
              ) : (
                <Textarea
                  value={noteDraft}
                  onChange={(event) => setNoteDraft(event.target.value)}
                  placeholder={`Save a note for "${currentCard.germanWord}"...`}
                  className="min-h-[220px] resize-y bg-background text-base leading-7"
                />
              )}
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                {hasSavedNote && !notesEditing && (
                  <Button type="button" variant="outline" size="sm" onClick={() => setNotesEditing(true)} className="gap-2 sm:w-auto">
                    <Edit3 className="h-4 w-4" />
                    Edit Note
                  </Button>
                )}
                {(notesEditing || !hasSavedNote) && (
                  <>
                    {hasSavedNote && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setNoteDraft(currentCard.notes ?? "");
                          setNotesEditing(false);
                        }}
                        className="sm:w-auto"
                      >
                        Cancel
                      </Button>
                    )}
                    {hasSavedNote && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => saveCardNotes("")}
                        className="sm:w-auto"
                      >
                        Clear Note
                      </Button>
                    )}
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => saveCardNotes(noteDraft)}
                      disabled={noteDraft === (currentCard.notes ?? "")}
                      className="gap-2 sm:w-auto"
                    >
                      <Save className="h-4 w-4" />
                      Save Note
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/[0.03] shadow-sm">
        <CardContent className="space-y-4 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-semibold">Groq practice</p>
                <p className="text-xs text-muted-foreground">Use this word in context or ask about it.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 rounded-md bg-muted p-1">
            {([
              ["generate", "Generate"],
              ["check", "Check mine"],
              ["ask", "Ask Groq"],
            ] as [AiPracticeMode, string][]).map(([mode, label]) => (
              <button
                key={mode}
                type="button"
                onClick={() => setAiPracticeMode(mode)}
                className={cn(
                  "rounded px-3 py-2 text-sm font-medium transition-colors",
                  aiPracticeMode === mode
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          {aiPracticeMode === "generate" ? (
            <>
              <div className="flex gap-2">
                <Select value={exampleLevel} onValueChange={(value) => setExampleLevel(value as ExampleLevel)}>
                  <SelectTrigger className="h-9 w-[88px] bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A2">A2</SelectItem>
                    <SelectItem value="B1">B1</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant={aiExample ? "outline" : "default"}
                  size="sm"
                  onClick={generateAiExample}
                  disabled={aiExampleLoading}
                  className="flex-1 gap-2"
                >
                  {aiExampleLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lightbulb className="h-4 w-4" />}
                  {aiExample ? "Regenerate Example" : "Generate Example"}
                </Button>
              </div>

              {currentCard.generatedExamples && currentCard.generatedExamples.length > 0 && (
                <SavedGeneratedExamples
                  examples={currentCard.generatedExamples}
                  open={savedExamplesOpen}
                  onOpenChange={setSavedExamplesOpen}
                  onRemove={removeGeneratedExample}
                />
              )}

              {aiExampleError && (
                <div className="flex gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <p className="text-muted-foreground">{aiExampleError}</p>
                </div>
              )}

              {aiExample && (
                <div className="space-y-3 rounded-md border bg-background p-4">
                  {aiExample.sentence && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">German</p>
                      <div className="flex items-start justify-between gap-2">
                        <p className="mt-1 text-base font-medium leading-relaxed">„{aiExample.sentence}"</p>
                        <PronounceButton text={aiExample.sentence} className="mt-1" />
                      </div>
                    </div>
                  )}
                  {aiExample.translation && (
                    <div className="border-t pt-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">English</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">"{aiExample.translation}"</p>
                    </div>
                  )}
                  {(aiExample.wordNote || aiExample.grammarTip) && (
                    <div className="grid gap-2 border-t pt-3 sm:grid-cols-2">
                      {aiExample.wordNote && (
                        <div className="rounded-md bg-muted/45 p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Word note</p>
                          <p className="mt-1 text-sm leading-relaxed">{aiExample.wordNote}</p>
                        </div>
                      )}
                      {aiExample.grammarTip && (
                        <div className="rounded-md bg-muted/45 p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Grammar tip</p>
                          <p className="mt-1 text-sm leading-relaxed">{aiExample.grammarTip}</p>
                        </div>
                      )}
                    </div>
                  )}
                  {aiExample.vocabulary && aiExample.vocabulary.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 border-t pt-3">
                      {aiExample.vocabulary.slice(0, 4).map((item, index) => (
                        <Badge key={`${item.word}-${index}`} variant="secondary" className="rounded-full">
                          {item.word} = {item.translation}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          ) : aiPracticeMode === "check" ? (
            <>
              <div className="space-y-2">
                <Textarea
                  value={ownSentence}
                  onChange={(event) => {
                    setOwnSentence(event.target.value);
                    setSentenceCheck(null);
                    setSentenceCheckError(null);
                  }}
                  placeholder={`Write a German sentence with "${currentCard.germanWord}"...`}
                  className="min-h-[86px] resize-none bg-background text-sm leading-relaxed"
                />
                <Button
                  size="sm"
                  onClick={checkOwnSentence}
                  disabled={sentenceCheckLoading || ownSentence.trim().length < 2}
                  className="w-full gap-2"
                >
                  {sentenceCheckLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                  Check My Sentence
                </Button>
              </div>

              {sentenceCheckError && (
                <div className="flex gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <p className="text-muted-foreground">{sentenceCheckError}</p>
                </div>
              )}

              {sentenceCheck && (
                <div className="space-y-3 rounded-md border bg-background p-4">
                  {sentenceCheck.usesFlashcardWord === false && (
                    <div className="rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
                      Try to include <strong>{currentCard.germanWord}</strong> directly in your sentence.
                    </div>
                  )}
                  <SentenceResultBlock
                    label="Corrected"
                    value={sentenceCheck.correctForm}
                    translation={sentenceCheck.translations?.correctForm}
                    highlight
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <SentenceResultBlock
                      label="A2 natural"
                      value={sentenceCheck.a2Alternative}
                      translation={sentenceCheck.translations?.a2}
                    />
                    <SentenceResultBlock
                      label="B1 natural"
                      value={sentenceCheck.b1Alternative}
                      translation={sentenceCheck.translations?.b1}
                    />
                  </div>
                  {sentenceCheck.wordFeedback && (
                    <div className="rounded-md bg-muted/45 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Word feedback</p>
                      <p className="mt-1 text-sm leading-relaxed">{sentenceCheck.wordFeedback}</p>
                    </div>
                  )}
                  {sentenceCheck.rules && sentenceCheck.rules.length > 0 && (
                    <div className="space-y-2 border-t pt-3">
                      {sentenceCheck.rules.slice(0, 2).map((rule, index) => (
                        <div key={`${rule.title}-${index}`} className="rounded-md bg-muted/45 p-3">
                          <p className="text-sm font-semibold">{rule.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{rule.explanation}</p>
                          {rule.example && <p className="mt-2 text-sm font-medium">{rule.example}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Textarea
                  value={wordQuestion}
                  onChange={(event) => {
                    setWordQuestion(event.target.value);
                    setWordAnswer(null);
                    setWordAnswerError(null);
                  }}
                  placeholder={`Ask about "${currentCard.germanWord}"... e.g. What is the difference between it and brauchen?`}
                  className="min-h-[86px] resize-none bg-background text-sm leading-relaxed"
                />
                <Button
                  size="sm"
                  onClick={askGroqAboutWord}
                  disabled={wordAnswerLoading || wordQuestion.trim().length < 2}
                  className="w-full gap-2"
                >
                  {wordAnswerLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                  Ask About This Word
                </Button>
              </div>

              {wordAnswerError && (
                <div className="flex gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <p className="text-muted-foreground">{wordAnswerError}</p>
                </div>
              )}

              {wordAnswer && (
                <WordQuestionAnswerBlock
                  answer={wordAnswer}
                  onSave={() => saveGroqAnswerToNotes(wordAnswer)}
                />
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* Action buttons */}
      {!revealed ? (
        <Button onClick={handleReveal} className="w-full py-6 text-base gap-2" size="lg">
          <Zap className="h-4 w-4" />
          Show Answer
          <span className="text-xs opacity-60 ml-1">(Space)</span>
        </Button>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {(["again", "hard", "good", "easy"] as Rating[]).map((r, i) => (
            <button
              key={r}
              onClick={() => handleRate(r)}
              className={cn("rating-btn flex flex-col items-center gap-0.5", ratingButtonClasses[r])}
            >
              <span className="text-sm font-medium capitalize">{r}</span>
              <span className="text-xs opacity-70">{intervals[r]}</span>
              <span className="text-xs opacity-40">[{i + 1}]</span>
            </button>
          ))}
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground">Space to reveal · 1–4 to rate</p>
    </div>
  );
}

type ParsedStudyCardNote = {
  term: string;
  fields: { label: string; value: string }[];
};

function parseStudyCardNoteLine(line: string): ParsedStudyCardNote | null {
  const parts = line
    .replace(/^[-•]\s*/, "")
    .split("|")
    .map(part => part.trim())
    .filter(Boolean);

  if (parts.length < 3) return null;

  const labels = ["Meaning", "Usage", "Example"];
  const fields = parts.slice(1).map((part, index) => {
    const match = part.match(/^([A-Za-z ]{2,24}):\s*(.+)$/);
    return {
      label: match?.[1]?.trim() || labels[index] || `Note ${index + 1}`,
      value: (match?.[2] || part).trim(),
    };
  }).filter(field => field.value);

  if (!parts[0] || fields.length === 0) return null;
  return { term: parts[0], fields };
}

function ReadableCardNote({ note }: { note: string }) {
  const sections = note
    .trim()
    .split(/\n\s*(?:---+)?\s*\n|^---+$/gm)
    .map(section => section.trim())
    .filter(Boolean);

  return (
    <div className="space-y-2.5">
      {sections.map((section, sectionIndex) => {
        const lines = section.split(/\n+/).map(line => line.trim()).filter(Boolean);
        const parsedStudyCards = lines
          .map(parseStudyCardNoteLine)
          .filter((card): card is ParsedStudyCardNote => Boolean(card));

        if (parsedStudyCards.length > 0) {
          const introLines = lines.filter(line => !parseStudyCardNoteLine(line) && !/^study cards:?$/i.test(line));
          return (
            <div key={`${section.slice(0, 24)}-${sectionIndex}`} className="rounded-md border bg-background p-3 shadow-sm">
              {introLines.length > 0 && (
                <div className="mb-3 rounded-md bg-muted/25 px-3 py-2">
                  {introLines.map((line) => (
                    <p key={line} className="text-sm leading-6 text-muted-foreground">{line}</p>
                  ))}
                </div>
              )}
              <div className="grid gap-3 sm:grid-cols-2">
                {parsedStudyCards.map((card) => (
                  <div key={card.term} className="rounded-md border bg-muted/20 p-3">
                    <p className="text-base font-bold leading-snug">{card.term}</p>
                    <div className="mt-3 space-y-2">
                      {card.fields.map((field) => (
                        <div key={`${card.term}-${field.label}`}>
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{field.label}</p>
                          <p className="mt-0.5 text-sm leading-6">{field.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        const grouped = lines.reduce<Array<{ label?: string; body: string[]; title?: boolean }>>((acc, line, lineIndex) => {
          const bullet = line.match(/^[-•]\s*(.+)$/);
          const label = line.match(/^([^:]{2,32}):\s*(.+)$/);
          if (bullet) {
            const last = acc[acc.length - 1];
            if (last?.label === "Details") last.body.push(bullet[1]);
            else acc.push({ label: "Details", body: [bullet[1]] });
            return acc;
          }
          if (label) {
            acc.push({ label: label[1], body: [label[2]] });
            return acc;
          }
          acc.push({ body: [line], title: lineIndex === 0 && lines.length > 1 });
          return acc;
        }, []);

        return (
          <div key={`${section.slice(0, 24)}-${sectionIndex}`} className="rounded-md border bg-background p-3 shadow-sm">
            <div className="grid gap-2 sm:grid-cols-2">
              {grouped.map((item, itemIndex) => (
                <div
                  key={`${item.label ?? item.body[0]}-${itemIndex}`}
                  className={cn(
                    "rounded-md bg-muted/25 px-3 py-2",
                    item.title && "bg-transparent px-0 py-0 sm:col-span-2"
                  )}
                >
                  {item.label && (
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</p>
                  )}
                  {item.label === "Details" ? (
                    <ul className="mt-1 space-y-1">
                      {item.body.map((line) => (
                        <li key={line} className="flex gap-2 text-sm leading-6">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={cn("whitespace-pre-wrap leading-6", item.title ? "text-base font-semibold" : "mt-1 text-sm")}>
                      {item.body.join(" ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SavedGeneratedExamples({
  examples,
  open,
  onOpenChange,
  onRemove,
}: {
  examples: GeneratedCardExample[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRemove: (id: string) => void;
}) {
  const latest = examples[examples.length - 1];

  return (
    <div className="rounded-md border bg-background">
      <button
        type="button"
        onClick={() => onOpenChange(!open)}
        className="flex w-full items-center justify-between gap-3 p-3 text-left"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Saved examples</p>
            <Badge variant="secondary" className="rounded-full text-[11px]">{examples.length}</Badge>
          </div>
          {latest && (
            <p className="mt-1 truncate text-sm text-muted-foreground">Latest: „{latest.sentence}"</p>
          )}
        </div>
        <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="space-y-2 border-t p-3">
          {[...examples].reverse().map((example) => (
            <div key={example.id} className="rounded-md bg-muted/30 p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 space-y-1">
                  <Badge variant="outline" className="mb-1 rounded-full text-[11px]">{example.level}</Badge>
                  <p className="text-sm font-medium leading-relaxed">„{example.sentence}"</p>
                  {example.translation && (
                    <p className="text-xs leading-relaxed text-muted-foreground">"{example.translation}"</p>
                  )}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(example.id)}
                  className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
                  aria-label="Remove saved example"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              {(example.wordNote || example.grammarTip) && (
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {example.wordNote && (
                    <div className="rounded-md bg-background/70 p-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Word note</p>
                      <p className="mt-1 text-xs leading-relaxed">{example.wordNote}</p>
                    </div>
                  )}
                  {example.grammarTip && (
                    <div className="rounded-md bg-background/70 p-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Grammar tip</p>
                      <p className="mt-1 text-xs leading-relaxed">{example.grammarTip}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function WordQuestionAnswerBlock({
  answer,
  onSave,
}: {
  answer: CardQuestionAnswer;
  onSave: () => void;
}) {
  return (
    <div className="space-y-3 rounded-md border bg-background p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Groq answer</p>
          <p className="text-sm text-muted-foreground">Save useful explanations to this card so you do not need to ask again.</p>
        </div>
        <Button type="button" variant="outline" size="sm" onClick={onSave} className="gap-2 sm:shrink-0">
          <Save className="h-4 w-4" />
          Save to Notes
        </Button>
      </div>

      {answer.answer && (
        <div className="border-t pt-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Answer</p>
          <p className="mt-1 text-sm leading-relaxed">{answer.answer}</p>
        </div>
      )}

      {answer.quickContrast && answer.quickContrast.length > 0 && (
        <div className="overflow-hidden rounded-md border">
          <div className="grid grid-cols-[1fr_1.2fr_1fr] bg-muted/50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <span>Word</span>
            <span>Meaning</span>
            <span>Register</span>
          </div>
          {answer.quickContrast.slice(0, 4).map((item, index) => (
            <div
              key={`${item.term}-${index}`}
              className="grid grid-cols-[1fr_1.2fr_1fr] gap-2 border-t px-3 py-2 text-sm"
            >
              <span className="font-semibold">{item.term}</span>
              <span className="text-muted-foreground">{item.meaning}</span>
              <span className="text-muted-foreground">{item.register || "neutral"}</span>
              {item.example && (
                <p className="col-span-3 rounded-md bg-muted/35 p-2 text-sm leading-relaxed">{item.example}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {answer.examples && answer.examples.length > 0 && (
        <div className="space-y-2 border-t pt-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Examples</p>
          {answer.examples.slice(0, 3).map((example, index) => (
            <div key={`${example.german}-${index}`} className="rounded-md bg-muted/45 p-3">
              <p className="text-sm font-medium leading-relaxed">„{example.german}"</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">"{example.english}"</p>
              {example.note && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{example.note}</p>}
            </div>
          ))}
        </div>
      )}

      {answer.ruleReminder && (
        <div className="rounded-md bg-primary/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Rule reminder</p>
          <p className="mt-1 text-sm leading-relaxed">{answer.ruleReminder}</p>
        </div>
      )}
    </div>
  );
}

function SentenceResultBlock({
  label,
  value,
  translation,
  highlight,
}: {
  label: string;
  value?: string;
  translation?: string;
  highlight?: boolean;
}) {
  if (!value) return null;

  return (
    <div className={cn("rounded-md border p-3", highlight ? "border-primary/30 bg-primary/5" : "bg-muted/30")}>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-medium leading-relaxed">„{value}"</p>
      {translation && <p className="mt-2 border-t pt-2 text-xs leading-relaxed text-muted-foreground">"{translation}"</p>}
    </div>
  );
}
