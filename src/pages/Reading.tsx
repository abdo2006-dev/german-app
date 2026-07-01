import { useMemo, useState } from 'react';
import type { Dispatch, MouseEvent, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, BookOpen, CheckCircle2, ExternalLink, Loader2, Plus, Sparkles, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useFlashcardStore } from '@/store/flashcardStore';
import { cn } from '@/lib/utils';
import type { ReadingPassage, ReadingQuestion } from '@/types/flashcard';

type TranslationState = {
  word: string;
  translation: string;
  provider: string;
  sentence: string;
  loading: boolean;
  error?: string;
  saved: boolean;
  anchor: { x: number; y: number };
};

type CachedTranslation = { translation: string; provider: string };

const WORD_PATTERN = /^[A-Za-zÄÖÜäöüß]+(?:[-'][A-Za-zÄÖÜäöüß]+)?$/;

function normalizeWord(token: string) {
  return token
    .replace(/^[^A-Za-zÄÖÜäöüß]+|[^A-Za-zÄÖÜäöüß]+$/g, '')
    .trim();
}

function normalizeSelection(text: string) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/^[^A-Za-zÄÖÜäöüß]+|[^A-Za-zÄÖÜäöüß.!?]+$/g, '')
    .trim();
}

function tokenize(text: string) {
  return text.match(/[A-Za-zÄÖÜäöüß]+(?:[-'][A-Za-zÄÖÜäöüß]+)?|\s+|[^\sA-Za-zÄÖÜäöüß]+/g) ?? [];
}

function findSentence(text: string, word: string) {
  const lower = word.toLocaleLowerCase();
  const sentences = text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .map(sentence => sentence.trim())
    .filter(Boolean);
  return sentences.find(sentence => sentence.toLocaleLowerCase().includes(lower)) ?? '';
}

export default function Reading() {
  const {
    readingPassages,
    decks,
    cards,
    createReadingPassage,
    deleteReadingPassage,
    addReadingWordToDeck,
    removeReadingWordFromDeck,
  } = useFlashcardStore();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [selectedPassageId, setSelectedPassageId] = useState<string | null>(readingPassages[0]?.id ?? null);
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [translation, setTranslation] = useState<TranslationState | null>(null);
  const [translationCache, setTranslationCache] = useState<Record<string, CachedTranslation>>({});
  const [autoSaveWords, setAutoSaveWords] = useState(true);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [shownAnswers, setShownAnswers] = useState<Record<string, boolean>>({});

  const selectedPassage = useMemo(
    () => readingPassages.find(passage => passage.id === selectedPassageId) ?? readingPassages[0] ?? null,
    [readingPassages, selectedPassageId]
  );

  const selectedDeck = selectedPassage ? decks.find(deck => deck.id === selectedPassage.deckId) : null;
  const selectedDeckCards = selectedPassage ? cards.filter(card => card.deckId === selectedPassage.deckId) : [];
  const savedWords = useMemo(
    () => new Set(selectedDeckCards.map(card => card.germanWord.trim().toLocaleLowerCase())),
    [selectedDeckCards]
  );

  async function createPassage() {
    if (text.trim().length < 80) {
      setCreateError('Paste a longer paragraph so Groq can build meaningful questions.');
      return;
    }

    setCreating(true);
    setCreateError(null);

    try {
      const res = await fetch('/api/reading-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim() || 'Reading passage', text: text.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || `API error ${res.status}`);
      }

      const passage = createReadingPassage(title.trim() || 'Reading passage', text.trim(), data.questions ?? []);
      setSelectedPassageId(passage.id);
      setTitle('');
      setText('');
      setAnswers({});
      setShownAnswers({});
      toast.success('Reading passage created');
    } catch (err: any) {
      setCreateError(err.message ?? 'Could not create reading passage.');
    } finally {
      setCreating(false);
    }
  }

  async function translateText(queryText: string, anchor: { x: number; y: number }) {
    if (!selectedPassage) return;

    const query = normalizeSelection(queryText);
    if (!query) return;

    const cacheKey = query.toLocaleLowerCase();
    const cached = translationCache[cacheKey];
    const sentence = findSentence(selectedPassage.text, query);

    setTranslation({
      word: query,
      translation: cached?.translation ?? '',
      provider: cached ? cached.provider : 'MyMemory',
      sentence,
      loading: !cached,
      saved: savedWords.has(cacheKey),
      anchor,
    });

    try {
      const translated = cached ?? await fetchTranslation(query);
      setTranslationCache(prev => ({ ...prev, [cacheKey]: translated }));
      const existing = savedWords.has(cacheKey);
      const saved = autoSaveWords ? Boolean(addReadingWordToDeck(selectedPassage.id, query, translated.translation, sentence)) : existing;
      setTranslation({
        word: query,
        translation: translated.translation,
        provider: translated.provider,
        sentence,
        loading: false,
        saved,
        anchor,
      });
      if (autoSaveWords) {
        toast.success(existing ? 'Already in linked deck' : 'Saved to linked deck');
      }
    } catch (err: any) {
      setTranslation({
        word: query,
        translation: '',
        provider: 'MyMemory',
        sentence,
        loading: false,
        saved: savedWords.has(cacheKey),
        anchor,
        error: err.message ?? 'Could not translate this word.',
      });
    }
  }

  function saveCurrentTranslation() {
    if (!selectedPassage || !translation || !translation.translation || translation.error) return;
    const card = addReadingWordToDeck(selectedPassage.id, translation.word, translation.translation, translation.sentence);
    if (!card) return;
    setTranslation(prev => prev ? { ...prev, saved: true } : prev);
    toast.success('Saved to linked deck');
  }

  function removeCurrentTranslation() {
    if (!selectedPassage || !translation) return;
    const removed = removeReadingWordFromDeck(selectedPassage.id, translation.word);
    if (!removed) return;
    setTranslation(prev => prev ? { ...prev, saved: false } : prev);
    toast.success('Removed from linked deck');
  }

  function removePassage(passage: ReadingPassage) {
    deleteReadingPassage(passage.id);
    setSelectedPassageId(null);
    setTranslation(null);
    toast.success('Reading passage deleted');
  }

  return (
    <div className="page-transition mx-auto max-w-6xl space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold">Reading Practice</h1>
          <p className="mt-1 max-w-2xl text-muted-foreground">
            Paste a German paragraph, save unknown words into a linked deck, and study stored comprehension questions.
          </p>
        </div>
        {selectedDeck && (
          <Link to={`/decks/${selectedDeck.id}`}>
            <Button variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Linked Deck
            </Button>
          </Link>
        )}
      </header>

      <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">New Paragraph</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1.5">
                <Label>Title</Label>
                <Input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Timos Blog..." />
              </div>
              <div className="space-y-1.5">
                <Label>Text</Label>
                <Textarea
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  placeholder="Paste your German paragraph here..."
                  className="min-h-[180px] resize-none"
                />
              </div>
              {createError && (
                <div className="flex gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <p className="text-muted-foreground">{createError}</p>
                </div>
              )}
              <Button onClick={createPassage} disabled={creating} className="w-full gap-2">
                {creating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                {creating ? 'Generating Questions...' : 'Create Reading'}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Saved Readings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {readingPassages.length === 0 ? (
                <p className="text-sm text-muted-foreground">No reading passages yet.</p>
              ) : (
                readingPassages.map(passage => {
                  const wordCount = cards.filter(card => card.deckId === passage.deckId).length;
                  return (
                    <button
                      key={passage.id}
                      type="button"
                      onClick={() => {
                        setSelectedPassageId(passage.id);
                        setTranslation(null);
                        setAnswers({});
                        setShownAnswers({});
                      }}
                      className={cn(
                        'w-full rounded-md border p-3 text-left transition-colors',
                        selectedPassage?.id === passage.id ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
                      )}
                    >
                      <p className="font-medium">{passage.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {wordCount} saved word{wordCount === 1 ? '' : 's'} · {passage.questions.length} questions
                      </p>
                    </button>
                  );
                })
              )}
            </CardContent>
          </Card>
        </aside>

        <main className="space-y-5">
          {!selectedPassage ? (
            <Card className="border-dashed">
              <CardContent className="flex min-h-[420px] flex-col items-center justify-center gap-3 text-center">
                <BookOpen className="h-10 w-10 text-muted-foreground" />
                <div>
                  <p className="font-medium">Create your first reading passage</p>
                  <p className="mt-1 text-sm text-muted-foreground">Groq will generate the questions once when you submit it.</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              <Card>
                <CardHeader className="flex-row items-start justify-between gap-4 space-y-0">
                  <div>
                    <CardTitle>{selectedPassage.title}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Click any German word to translate it. Save only the words you want to review.
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removePassage(selectedPassage)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 rounded-md border bg-muted/25 px-3 py-2">
                    <Checkbox
                      id="auto-save-words"
                      checked={autoSaveWords}
                      onCheckedChange={(value) => setAutoSaveWords(Boolean(value))}
                    />
                    <Label htmlFor="auto-save-words" className="cursor-pointer text-sm">
                      Auto-save clicked words to linked deck
                    </Label>
                  </div>
                  <ReadableText text={selectedPassage.text} onTranslate={translateText} savedWords={savedWords} />
                  {translation && (
                    <TranslationBubble
                      state={translation}
                      deckName={selectedDeck?.name ?? 'linked deck'}
                      onSave={saveCurrentTranslation}
                      onRemove={removeCurrentTranslation}
                      onClose={() => setTranslation(null)}
                    />
                  )}
                </CardContent>
              </Card>

              <QuestionPanel
                questions={selectedPassage.questions}
                answers={answers}
                setAnswers={setAnswers}
                shownAnswers={shownAnswers}
                setShownAnswers={setShownAnswers}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

async function fetchTranslation(word: string): Promise<{ translation: string; provider: string }> {
  const res = await fetch(`/api/translate-word?q=${encodeURIComponent(word)}`);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Translation error ${res.status}`);
  return { translation: data.translation, provider: data.provider ?? 'MyMemory' };
}

function ReadableText({
  text,
  onTranslate,
  savedWords,
}: {
  text: string;
  onTranslate: (text: string, anchor: { x: number; y: number }) => void;
  savedWords: Set<string>;
}) {
  function handleSelection(event: MouseEvent<HTMLDivElement>) {
    const selection = window.getSelection();
    const selectedText = normalizeSelection(selection?.toString() ?? '');
    if (!selection || selectedText.length < 2) return;

    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    if (!range || !event.currentTarget.contains(range.commonAncestorContainer)) return;

    const rect = range.getBoundingClientRect();
    if (!rect.width && !rect.height) return;
    onTranslate(selectedText, {
      x: rect.left + rect.width / 2,
      y: Math.max(rect.top, 96),
    });
  }

  function handleWordClick(token: string, event: MouseEvent<HTMLSpanElement>) {
    const selectedText = normalizeSelection(window.getSelection()?.toString() ?? '');
    if (selectedText.length > 0) return;

    const rect = event.currentTarget.getBoundingClientRect();
    onTranslate(token, {
      x: rect.left + rect.width / 2,
      y: Math.max(rect.top, 96),
    });
  }

  return (
    <div className="rounded-md border bg-background p-5 text-lg leading-9" onMouseUp={handleSelection}>
      {text.split(/\n{2,}/).map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex} className="mb-4 last:mb-0">
          {tokenize(paragraph).map((token, index) => {
            if (!WORD_PATTERN.test(token)) return <span key={`${token}-${index}`}>{token}</span>;
            const saved = savedWords.has(token.toLocaleLowerCase());
            return (
              <span
                key={`${token}-${index}`}
                role="button"
                tabIndex={0}
                onClick={(event) => handleWordClick(token, event)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    const rect = event.currentTarget.getBoundingClientRect();
                    onTranslate(token, {
                      x: rect.left + rect.width / 2,
                      y: Math.max(rect.top, 96),
                    });
                  }
                }}
                className={cn(
                  "cursor-pointer rounded px-0.5 text-left transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:outline-none focus:ring-1 focus:ring-primary",
                  saved && "bg-green-100 text-green-900 underline decoration-green-600 decoration-2 underline-offset-4"
                )}
              >
                {token}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

function TranslationBubble({
  state,
  deckName,
  onSave,
  onRemove,
  onClose,
}: {
  state: TranslationState;
  deckName: string;
  onSave: () => void;
  onRemove: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed z-50 w-[min(360px,calc(100vw-24px))] rounded-md border border-primary/20 bg-popover p-4 text-popover-foreground shadow-xl"
      style={{
        left: Math.min(Math.max(state.anchor.x, 180), window.innerWidth - 180),
        top: state.anchor.y,
        transform: 'translate(-50%, calc(-100% - 12px))',
      }}
    >
      <div className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-primary/20 bg-popover" />
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Selected text</p>
          <p className="mt-1 text-lg font-bold leading-snug">{state.word}</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{state.loading ? 'Translating...' : state.provider}</Badge>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose}>
            ×
          </Button>
        </div>
      </div>
      {state.loading ? (
        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Looking up translation
        </div>
      ) : state.error ? (
        <p className="mt-3 text-sm text-destructive">{state.error}</p>
      ) : (
        <div className="mt-3 space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">English</p>
            <p className="mt-1 text-base font-medium">{state.translation}</p>
          </div>
          {state.sentence && (
            <p className="rounded-md bg-background p-3 text-sm leading-relaxed text-muted-foreground">"{state.sentence}"</p>
          )}
          <div className="flex flex-col gap-2 border-t pt-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              {state.saved ? `Saved into ${deckName} for Anki-style review.` : 'Translation only. Not saved to the deck yet.'}
            </p>
            {state.saved ? (
              <Button variant="outline" size="sm" onClick={onRemove} className="gap-2">
                <Trash2 className="h-4 w-4" />
                Remove from Deck
              </Button>
            ) : (
              <Button size="sm" onClick={onSave} className="gap-2">
                <Plus className="h-4 w-4" />
                Save to Deck
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function QuestionPanel({
  questions,
  answers,
  setAnswers,
  shownAnswers,
  setShownAnswers,
}: {
  questions: ReadingQuestion[];
  answers: Record<string, string>;
  setAnswers: Dispatch<SetStateAction<Record<string, string>>>;
  shownAnswers: Record<string, boolean>;
  setShownAnswers: Dispatch<SetStateAction<Record<string, boolean>>>;
}) {
  if (questions.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comprehension Questions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {questions.map((question, index) => (
          <div key={question.id} className="rounded-md border p-4">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <Badge variant="outline" className="mb-2 rounded-full">{question.difficulty}</Badge>
                <p className="font-medium">{index + 1}. {question.question}</p>
              </div>
            </div>

            {question.type === 'multiple-choice' && question.options?.length ? (
              <div className="grid gap-2">
                {question.options.map(option => {
                  const selected = answers[question.id] === option;
                  const answered = Boolean(answers[question.id]);
                  const correct = option === question.correctAnswer;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setAnswers(prev => ({ ...prev, [question.id]: option }))}
                      className={cn(
                        'rounded-md border px-3 py-2 text-left text-sm transition-colors',
                        selected && !correct && 'border-destructive bg-destructive/5',
                        answered && correct && 'border-srs-good bg-green-50',
                        !answered && 'hover:border-primary/40 hover:bg-muted/50'
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
                {answers[question.id] && (
                  <AnswerExplanation question={question} correct={answers[question.id] === question.correctAnswer} />
                )}
              </div>
            ) : (
              <div className="space-y-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShownAnswers(prev => ({ ...prev, [question.id]: !prev[question.id] }))}
                >
                  {shownAnswers[question.id] ? 'Hide Answer' : 'Show Answer'}
                </Button>
                {shownAnswers[question.id] && <AnswerExplanation question={question} correct />}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function AnswerExplanation({ question, correct }: { question: ReadingQuestion; correct: boolean }) {
  return (
    <div className={cn('mt-2 rounded-md border p-3 text-sm', correct ? 'border-green-200 bg-green-50' : 'border-destructive/30 bg-destructive/5')}>
      <div className="mb-1 flex items-center gap-2 font-medium">
        {correct ? <CheckCircle2 className="h-4 w-4 text-srs-good" /> : <AlertCircle className="h-4 w-4 text-destructive" />}
        {correct ? 'Correct answer' : 'Correct answer'}
      </div>
      <p>{question.correctAnswer}</p>
      {question.explanation && <p className="mt-2 text-muted-foreground">{question.explanation}</p>}
    </div>
  );
}
