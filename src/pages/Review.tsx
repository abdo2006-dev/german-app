import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, X, Zap, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useFlashcardStore } from "@/store/flashcardStore";
import { getNextIntervals } from "@/lib/srs";
import { buildDueQueue, getNextLearningDueAt } from "@/lib/reviewQueue";
import type { Card as CardType, Rating } from "@/types/flashcard";

type QueueEntry = { cardId: string; isNew: boolean };

const ratingButtonClasses: Record<Rating, string> = {
  again: "rating-btn-again",
  hard: "rating-btn-hard",
  good: "rating-btn-good",
  easy: "rating-btn-easy",
};

export default function Review() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const deckIdsParam = searchParams.get("deckIds");
  const selectedDeckIds = useMemo(() => (deckIdsParam ? deckIdsParam.split(",") : []), [deckIdsParam]);

  const { decks, cards, reviewCard, buryCard, markNewCardIntroduced } = useFlashcardStore();

  const [seed, setSeed] = useState(() => Date.now());
  const [queue, setQueue] = useState<QueueEntry[]>([]);
  const [currentCardId, setCurrentCardId] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const startTime = useRef(Date.now());
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [waitingUntil, setWaitingUntil] = useState<Date | null>(null);

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
   * Build the full session queue: due cards first, then new cards.
   * New cards are interleaved after every 5 due cards to avoid front-loading.
   */
  const buildSessionQueue = useCallback((now: Date): QueueEntry[] => {
    const state = useFlashcardStore.getState();
    const dueItems = buildDueQueue(state.cards, scope, now, seed).map(i => ({ cardId: i.cardId, isNew: false }));

    // Gather new cards for each deck
    const newItems: QueueEntry[] = [];
    for (const deckId of selectedDeckIds) {
      const newCards = state.getNewCardsForSession(deckId);
      for (const c of newCards) newItems.push({ cardId: c.id, isNew: true });
    }

    // Interleave: 5 due, 1 new, 5 due, 1 new...
    const result: QueueEntry[] = [];
    let di = 0, ni = 0;
    while (di < dueItems.length || ni < newItems.length) {
      for (let i = 0; i < 5 && di < dueItems.length; i++, di++) result.push(dueItems[di]);
      if (ni < newItems.length) result.push(newItems[ni++]);
    }
    return result;
  }, [scope, seed, selectedDeckIds]);

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

  // Initialize
  useEffect(() => {
    if (!deckIdsParam) { navigate("/practice", { replace: true }); return; }
    setSeed(Date.now());
    setIsComplete(false);
    setSessionStats({ reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 });
    setRevealed(false);
    startTime.current = Date.now();
    pickNext(new Date());
  }, [deckIdsParam]); // eslint-disable-line react-hooks/exhaustive-deps

  // Timer for waiting state
  useEffect(() => {
    if (!waitingUntil) return;
    const ms = waitingUntil.getTime() - Date.now();
    if (ms <= 0) { pickNext(new Date()); return; }
    const t = window.setTimeout(() => pickNext(new Date()), ms);
    return () => window.clearTimeout(t);
  }, [waitingUntil, pickNext]);

  const handleReveal = useCallback(() => setRevealed(true), []);

  const handleRate = useCallback((rating: Rating) => {
    if (!currentCard) return;
    const timeSpent = Date.now() - startTime.current;

    // If this card is new and we're rating it for the first time, mark it introduced
    if (currentCard.state === 'new') {
      markNewCardIntroduced(currentCard.deckId, currentCard.id);
    }

    reviewCard(currentCard.id, rating, timeSpent);
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

  return (
    <div className="page-transition max-w-2xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">{currentDeck.name}</p>
          <p className="text-xs text-muted-foreground">{sessionStats.reviewed} reviewed · {remaining} remaining</p>
        </div>
        <Button variant="ghost" size="sm" onClick={handleBury}>
          <X className="h-4 w-4 mr-1" />Skip
        </Button>
      </div>

      <Progress value={sessionStats.reviewed > 0 ? Math.round((sessionStats.reviewed / (sessionStats.reviewed + remaining + 1)) * 100) : 0} className="h-1.5" />

      {/* Card state badge */}
      <div className="flex justify-center">
        <Badge variant="outline" className={cn("text-xs font-medium", stateCls)}>{stateLabel}</Badge>
        {currentCard.lapses > 0 && (
          <Badge variant="outline" className="ml-2 text-xs text-amber-600 border-amber-300">
            {currentCard.lapses} lapse{currentCard.lapses > 1 ? "s" : ""}
          </Badge>
        )}
      </div>

      {/* Flashcard */}
      <Card className="min-h-[280px] flex flex-col shadow-sm">
        <CardContent className="flex-1 flex flex-col justify-center items-center py-10 text-center">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              {isGermanToEnglish ? "German → English" : "English → German"}
            </p>
            <h2 className={cn("font-bold", isGermanToEnglish ? "german-word" : "english-word text-2xl md:text-3xl")}>
              {isGermanToEnglish ? currentCard.germanWord : currentCard.englishMeaning}
            </h2>
          </div>

          {revealed && (
            <div className="animate-slide-up space-y-4 w-full border-t pt-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                  {isGermanToEnglish ? "English" : "German"}
                </p>
                <h3 className={cn("font-bold", isGermanToEnglish ? "english-word text-xl md:text-2xl" : "german-word text-2xl md:text-3xl")}>
                  {isGermanToEnglish ? currentCard.englishMeaning : currentCard.germanWord}
                </h3>
              </div>
              {currentCard.germanExample && (
                <div className="mt-4 p-4 bg-muted/40 rounded-lg text-left">
                  <p className="example-sentence text-sm italic">„{currentCard.germanExample}"</p>
                  {currentCard.englishExample && (
                    <p className="text-xs text-muted-foreground mt-1.5">"{currentCard.englishExample}"</p>
                  )}
                </div>
              )}
            </div>
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
