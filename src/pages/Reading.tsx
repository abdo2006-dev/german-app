import { useEffect, useMemo, useRef, useState } from 'react';
import type { ClipboardEvent, Dispatch, DragEvent, MouseEvent, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, BookOpen, CheckCircle2, ChevronDown, ExternalLink, FileImage, Loader2, Plus, Sparkles, Square, Trash2, Volume2 } from 'lucide-react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useFlashcardStore } from '@/store/flashcardStore';
import { cn } from '@/lib/utils';
import { speakGermanPassage, stopSpeaking, type SpeechController } from '@/lib/speech';
import type { ReadingPassage, ReadingQuestion, ReadingTranslation } from '@/types/flashcard';

type TranslationState = {
  word: string;
  translation: string;
  contextualMeaning: string;
  literalMeaning: string;
  partOfSpeech: string;
  grammar: ReadingTranslation['grammar'];
  usage: string;
  exampleGerman: string;
  exampleEnglish: string;
  memoryHook: string;
  memoryImage: string;
  recallPrompt: string;
  note: string;
  provider: string;
  sentence: string;
  loading: boolean;
  error?: string;
  saved: boolean;
  anchor: { x: number; y: number };
};

type CachedTranslation = ReadingTranslation;

const WORD_PATTERN = /^[A-Za-zÄÖÜäöüß]+(?:[-'][A-Za-zÄÖÜäöüß]+)?$/;
const PHRASE_TRANSLATION_VERSION = 2;
const EMPTY_READING_GRAMMAR: ReadingTranslation['grammar'] = {
  kind: '',
  lemma: '',
  article: '',
  plural: '',
  infinitive: '',
  separablePrefix: '',
  reflexive: false,
};

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

function getSelectionMode(text: string): 'word' | 'phrase' {
  const wordCount = normalizeSelection(text).match(/[A-Za-zÄÖÜäöüß]+(?:[-'][A-Za-zÄÖÜäöüß]+)?/g)?.length ?? 0;
  return wordCount > 1 ? 'phrase' : 'word';
}

function getReadingStudyTerm(word: string, details?: Partial<ReadingTranslation>): string {
  const grammar = details?.grammar;
  if (grammar?.kind === 'verb' && grammar.infinitive.trim()) return grammar.infinitive.trim();
  if (grammar?.kind === 'noun' && grammar.article && grammar.lemma.trim()) {
    return `${grammar.article} ${grammar.lemma.trim()}`;
  }
  if ((grammar?.kind === 'adjective' || grammar?.kind === 'adverb') && grammar.lemma.trim()) {
    return grammar.lemma.trim();
  }
  return word.trim();
}

function normalizeSavedKey(value: string) {
  return value.trim().replace(/\s+/g, ' ').toLocaleLowerCase();
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
    saveReadingTranslation,
    addReadingWordToDeck,
    removeReadingWordFromDeck,
  } = useFlashcardStore();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [selectedPassageId, setSelectedPassageId] = useState<string | null>(readingPassages[0]?.id ?? null);
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [extractingImage, setExtractingImage] = useState(false);
  const [draggingImage, setDraggingImage] = useState(false);
  const [imageExtractError, setImageExtractError] = useState<string | null>(null);
  const [imageExtractNote, setImageExtractNote] = useState<string | null>(null);
  const [translation, setTranslation] = useState<TranslationState | null>(null);
  const [translationCache, setTranslationCache] = useState<Record<string, CachedTranslation>>({});
  const [autoSaveWords, setAutoSaveWords] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [shownAnswers, setShownAnswers] = useState<Record<string, boolean>>({});
  const [screenshotSectionOpen, setScreenshotSectionOpen] = useState(false);
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const speechControllerRef = useRef<SpeechController | null>(null);

  const selectedPassage = useMemo(
    () => readingPassages.find(passage => passage.id === selectedPassageId) ?? readingPassages[0] ?? null,
    [readingPassages, selectedPassageId]
  );

  // Stop any in-progress read-aloud when switching passages or leaving the page.
  useEffect(() => {
    return () => {
      speechControllerRef.current?.stop();
      stopSpeaking();
    };
  }, [selectedPassageId]);

  async function toggleReadAloud() {
    if (isReadingAloud) {
      speechControllerRef.current?.stop();
      setIsReadingAloud(false);
      return;
    }
    if (!selectedPassage) return;
    setIsReadingAloud(true);
    const controller = await speakGermanPassage(selectedPassage.text, () => setIsReadingAloud(false));
    speechControllerRef.current = controller;
  }

  const selectedDeck = selectedPassage ? decks.find(deck => deck.id === selectedPassage.deckId) : null;
  const selectedDeckCards = selectedPassage ? cards.filter(card => card.deckId === selectedPassage.deckId) : [];
  const savedWords = useMemo(() => {
    const keys = new Set(selectedDeckCards.map(card => normalizeSavedKey(card.germanWord)));
    Object.entries(selectedPassage?.translations ?? {}).forEach(([rawSelection, details]) => {
      const studyTerm = normalizeSavedKey(getReadingStudyTerm(rawSelection, details));
      if (keys.has(studyTerm)) keys.add(normalizeSavedKey(rawSelection));
    });
    return keys;
  }, [selectedDeckCards, selectedPassage?.translations]);

  function isSelectionSaved(query: string, details?: Partial<ReadingTranslation>) {
    const rawKey = normalizeSavedKey(query);
    const studyKey = normalizeSavedKey(getReadingStudyTerm(query, details));
    return savedWords.has(rawKey) || savedWords.has(studyKey);
  }

  async function extractFromScreenshots(fileList: FileList | File[] | undefined) {
    const files = Array.from(fileList ?? []).filter(file => file.type.startsWith('image/'));
    if (files.length === 0) {
      setImageExtractError('Upload, drop, or paste image screenshots.');
      return;
    }
    if (files.length > 8) {
      setImageExtractError('Use up to 8 screenshots at once so extraction stays reliable.');
      return;
    }
    const oversized = files.find(file => file.size > 3_400_000);
    if (oversized) {
      setImageExtractError(`"${oversized.name || 'This screenshot'}" is too large. Crop it tighter or use a smaller image.`);
      return;
    }

    setExtractingImage(true);
    setImageExtractError(null);
    setImageExtractNote(null);

    try {
      const extracted = [];
      for (let index = 0; index < files.length; index += 1) {
        setImageExtractNote(`Extracting screenshot ${index + 1} of ${files.length}...`);
        const imageData = await readFileAsDataUrl(files[index]);
        const res = await fetch('/api/extract-reading-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageData }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          const rateLimited = res.status === 429 || String(data.error ?? '').includes('429');
          throw new Error(rateLimited ? 'OCR is busy right now. Wait a moment, then try again.' : data.error || `OCR error ${res.status}`);
        }
        extracted.push({
          title: String(data.title ?? '').trim(),
          text: String(data.text ?? '').trim(),
          layoutNotes: String(data.layoutNotes ?? '').trim(),
        });
      }

      const firstTitle = extracted.find(item => item.title)?.title;
      if (!title.trim() && firstTitle) setTitle(firstTitle);
      const combinedText = extracted
        .map((item) => item.text)
        .filter(Boolean)
        .join('\n\n');

      setText(prev => [prev.trim(), combinedText].filter(Boolean).join('\n\n'));
      const notes = extracted.map(item => item.layoutNotes).filter(Boolean);
      setImageExtractNote(
        notes.length
          ? notes.join(' ')
          : `${files.length} screenshot${files.length === 1 ? '' : 's'} extracted. Check the text box before creating the reading.`
      );
      setCreateError(null);
      toast.success(`${files.length} screenshot${files.length === 1 ? '' : 's'} extracted`);
    } catch (err: any) {
      setImageExtractError(err.message ?? 'Could not extract text from this screenshot.');
    } finally {
      setExtractingImage(false);
    }
  }

  function handleScreenshotDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDraggingImage(false);
    void extractFromScreenshots(event.dataTransfer.files);
  }

  function handleScreenshotPaste(event: ClipboardEvent<HTMLDivElement>) {
    const files = Array.from(event.clipboardData.files).filter(file => file.type.startsWith('image/'));
    if (files.length === 0) return;
    event.preventDefault();
    void extractFromScreenshots(files);
  }

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
    const transientCacheKey = `${selectedPassage.id}:${cacheKey}`;
    const storedTranslation = selectedPassage.translations?.[cacheKey] ?? translationCache[transientCacheKey];
    const translationMode = getSelectionMode(query);
    const cached = storedTranslation?.grammar && (
      translationMode === 'word' || storedTranslation.translationVersion === PHRASE_TRANSLATION_VERSION
    ) ? storedTranslation : undefined;
    const sentence = findSentence(selectedPassage.text, query);

    setTranslation({
      word: query,
      translation: cached?.translation ?? '',
      contextualMeaning: cached?.contextualMeaning ?? cached?.translation ?? '',
      literalMeaning: cached?.literalMeaning ?? '',
      partOfSpeech: cached?.partOfSpeech ?? '',
      grammar: cached?.grammar ?? EMPTY_READING_GRAMMAR,
      usage: cached?.usage ?? '',
      exampleGerman: cached?.exampleGerman ?? '',
      exampleEnglish: cached?.exampleEnglish ?? '',
      memoryHook: cached?.memoryHook ?? '',
      memoryImage: cached?.memoryImage ?? '',
      recallPrompt: cached?.recallPrompt ?? '',
      note: cached?.note ?? '',
      provider: cached ? cached.provider : 'Groq tutor',
      sentence: cached?.sentence || sentence,
      loading: !cached,
      saved: isSelectionSaved(query, cached),
      anchor,
    });

    try {
      const translated = cached ?? await fetchTranslation(query, sentence, selectedPassage.text);
      const enriched: ReadingTranslation = {
        term: translated.term || query,
        translation: translated.translation,
        contextualMeaning: translated.contextualMeaning || translated.translation,
        literalMeaning: translated.literalMeaning || '',
        partOfSpeech: translated.partOfSpeech || '',
        translationMode,
        translationVersion: translationMode === 'phrase' ? PHRASE_TRANSLATION_VERSION : 1,
        grammar: translated.grammar ?? EMPTY_READING_GRAMMAR,
        usage: translated.usage || '',
        exampleGerman: translated.exampleGerman || '',
        exampleEnglish: translated.exampleEnglish || '',
        memoryHook: translated.memoryHook || '',
        memoryImage: translated.memoryImage || '',
        recallPrompt: translated.recallPrompt || '',
        note: translated.note || '',
        provider: translated.provider,
        sentence,
        createdAt: cached?.createdAt ?? new Date().toISOString(),
      };
      if (!cached) saveReadingTranslation(selectedPassage.id, cacheKey, enriched);
      setTranslationCache(prev => ({ ...prev, [transientCacheKey]: enriched }));
      const existing = isSelectionSaved(query, enriched);
      const saved = autoSaveWords
        ? Boolean(addReadingWordToDeck(selectedPassage.id, query, enriched.contextualMeaning, sentence, enriched))
        : existing;
      setTranslation({
        word: query,
        translation: enriched.translation,
        contextualMeaning: enriched.contextualMeaning,
        literalMeaning: enriched.literalMeaning,
        partOfSpeech: enriched.partOfSpeech,
        grammar: enriched.grammar,
        usage: enriched.usage,
        exampleGerman: enriched.exampleGerman,
        exampleEnglish: enriched.exampleEnglish,
        memoryHook: enriched.memoryHook,
        memoryImage: enriched.memoryImage,
        recallPrompt: enriched.recallPrompt,
        note: enriched.note,
        provider: enriched.provider,
        sentence: enriched.sentence,
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
        contextualMeaning: '',
        literalMeaning: '',
        partOfSpeech: '',
        grammar: EMPTY_READING_GRAMMAR,
        usage: '',
        exampleGerman: '',
        exampleEnglish: '',
        memoryHook: '',
        memoryImage: '',
        recallPrompt: '',
        note: '',
        provider: 'Groq tutor',
        sentence,
        loading: false,
        saved: isSelectionSaved(query),
        anchor,
        error: err.message ?? 'Could not translate this word.',
      });
    }
  }

  function saveCurrentTranslation() {
    if (!selectedPassage || !translation || !translation.translation || translation.error) return;
    const card = addReadingWordToDeck(
      selectedPassage.id,
      translation.word,
      translation.contextualMeaning || translation.translation,
      translation.sentence,
      translation
    );
    if (!card) return;
    setTranslation(prev => prev ? { ...prev, saved: true } : prev);
    toast.success('Saved to linked deck');
  }

  function removeCurrentTranslation() {
    if (!selectedPassage || !translation) return;
    const removed = removeReadingWordFromDeck(selectedPassage.id, translation.word, translation);
    if (!removed) return;
    setTranslation(prev => prev ? { ...prev, saved: false } : prev);
    toast.success('Removed from linked deck');
  }

  function removePassage(passage: ReadingPassage) {
    deleteReadingPassage(passage.id);
    setSelectedPassageId(null);
    setTranslation(null);
    setIsReadingAloud(false);
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
            <CardContent className="space-y-3" onPaste={handleScreenshotPaste}>
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

              <Collapsible open={screenshotSectionOpen} onOpenChange={setScreenshotSectionOpen}>
                <CollapsibleTrigger asChild>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="flex items-center gap-1.5">
                      <FileImage className="h-3.5 w-3.5" />
                      Or extract text from screenshots
                    </span>
                    <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', screenshotSectionOpen && 'rotate-180')} />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2">
                  <div
                    onDragEnter={(event) => {
                      event.preventDefault();
                      setDraggingImage(true);
                    }}
                    onDragOver={(event) => event.preventDefault()}
                    onDragLeave={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        setDraggingImage(false);
                      }
                    }}
                    onDrop={handleScreenshotDrop}
                    className={cn(
                      'rounded-md border border-dashed bg-muted/15 p-3 text-center transition-colors',
                      draggingImage && 'border-primary bg-primary/5',
                      extractingImage && 'pointer-events-none opacity-80'
                    )}
                  >
                    <p className="text-xs text-muted-foreground">Drag, paste, or choose up to 8 screenshots.</p>

                    <input
                      id="reading-screenshot-upload"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(event) => {
                        void extractFromScreenshots(event.target.files);
                        event.target.value = '';
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      disabled={extractingImage}
                      onClick={() => document.getElementById('reading-screenshot-upload')?.click()}
                      className="mt-2 w-full gap-2"
                    >
                      {extractingImage ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <FileImage className="h-3.5 w-3.5" />}
                      {extractingImage ? 'Extracting...' : 'Choose Images'}
                    </Button>

                    {imageExtractError && (
                      <p className="mt-3 rounded-md border border-amber-200 bg-amber-50/80 p-2 text-left text-sm leading-relaxed text-amber-900">
                        {imageExtractError}
                      </p>
                    )}
                    {imageExtractNote && (
                      <p className="mt-3 rounded-md border bg-background p-2 text-left text-sm leading-relaxed text-muted-foreground">
                        {imageExtractNote}
                      </p>
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>

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
                        setIsReadingAloud(false);
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
                      Click or select text to translate it. Use Save to Deck only for words or phrases you want to review.
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <Button variant="outline" size="sm" onClick={toggleReadAloud} className="gap-2">
                      {isReadingAloud ? <Square className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
                      {isReadingAloud ? 'Stop' : 'Read Aloud'}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => removePassage(selectedPassage)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <Label htmlFor="auto-save-words" className="cursor-pointer text-sm text-muted-foreground">
                      Auto-save clicked words to linked deck
                    </Label>
                    <Switch
                      id="auto-save-words"
                      checked={autoSaveWords}
                      onCheckedChange={(value) => setAutoSaveWords(Boolean(value))}
                    />
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

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Could not read this image file.'));
    reader.readAsDataURL(file);
  });
}

async function fetchTranslation(word: string, sentence: string, passage: string): Promise<{
  term: string;
  translation: string;
  contextualMeaning: string;
  literalMeaning: string;
  partOfSpeech: string;
  grammar: ReadingTranslation['grammar'];
  usage: string;
  exampleGerman: string;
  exampleEnglish: string;
  memoryHook: string;
  memoryImage: string;
  recallPrompt: string;
  note: string;
  provider: string;
}> {
  const res = await fetch('/api/translate-word', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ q: word, sentence, passage, selectionMode: getSelectionMode(word) }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Translation error ${res.status}`);
  return {
    term: data.term ?? word,
    translation: data.translation ?? data.contextualMeaning ?? '',
    contextualMeaning: data.contextualMeaning ?? data.translation ?? '',
    literalMeaning: data.literalMeaning ?? '',
    partOfSpeech: data.partOfSpeech ?? '',
    grammar: data.grammar ?? EMPTY_READING_GRAMMAR,
    usage: data.usage ?? '',
    exampleGerman: data.exampleGerman ?? '',
    exampleEnglish: data.exampleEnglish ?? '',
    memoryHook: data.memoryHook ?? '',
    memoryImage: data.memoryImage ?? '',
    recallPrompt: data.recallPrompt ?? '',
    note: data.note ?? '',
    provider: data.provider ?? 'Groq tutor',
  };
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
    <div className="whitespace-pre-wrap rounded-md border bg-background p-5 text-lg leading-9" onMouseUp={handleSelection}>
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
  const meaning = state.contextualMeaning || state.translation;
  const isPhraseSelection = state.grammar.kind === 'phrase' || /\s/.test(state.word.trim());
  const showStudyDetails = !isPhraseSelection;
  const grammarItems = [
    state.grammar.infinitive
      ? { label: 'Infinitive', value: state.grammar.infinitive }
      : null,
    state.grammar.article && state.grammar.lemma
      ? { label: 'Article', value: `${state.grammar.article} ${state.grammar.lemma}` }
      : null,
    state.grammar.plural
      ? { label: 'Plural', value: state.grammar.plural }
      : null,
    state.grammar.separablePrefix
      ? { label: 'Separable', value: state.grammar.separablePrefix }
      : null,
  ].filter((item): item is { label: string; value: string } => Boolean(item));

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-h-[min(78vh,720px)] overflow-hidden rounded-md border border-primary/20 bg-popover text-popover-foreground shadow-2xl md:left-auto md:w-[430px]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 p-4 pb-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Selected text</p>
          <p className="mt-1 text-lg font-bold leading-snug">{state.word}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2 p-4 pb-2">
          <Badge variant="secondary">{state.loading ? 'Translating...' : state.provider}</Badge>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose}>
            ×
          </Button>
        </div>
      </div>
      {state.loading ? (
        <div className="flex items-center gap-2 px-4 pb-4 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Looking up translation
        </div>
      ) : state.error ? (
        <p className="px-4 pb-4 text-sm text-destructive">{state.error}</p>
      ) : (
        <div className="max-h-[calc(min(78vh,720px)-76px)] space-y-3 overflow-y-auto px-4 pb-4">
          <div className="rounded-md border border-primary/25 bg-primary/[0.06] p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {isPhraseSelection ? 'Full phrase translation' : 'Meaning here'}
            </p>
            <p className="mt-1 text-xl font-bold leading-snug text-foreground">{meaning}</p>
            {grammarItems.length > 0 && (
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {grammarItems.map(item => (
                  <div key={item.label} className="rounded-md border border-primary/15 bg-background/80 px-2.5 py-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</p>
                    <p className="mt-0.5 font-semibold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            )}
            {(state.literalMeaning || state.partOfSpeech) && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {state.literalMeaning && (
                  <Badge variant="outline" className="rounded-full">base: {state.literalMeaning}</Badge>
                )}
                {state.partOfSpeech && (
                  <Badge variant="secondary" className="rounded-full">{state.partOfSpeech}</Badge>
                )}
              </div>
            )}
          </div>

          {showStudyDetails && state.usage && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Mostly used for</p>
              <p className="mt-1 text-sm leading-relaxed">{state.usage}</p>
            </div>
          )}

          {showStudyDetails && (state.exampleGerman || state.exampleEnglish) && (
            <div className="rounded-md bg-primary/[0.04] p-3 text-sm leading-relaxed">
              <p className="font-medium">{state.exampleGerman}</p>
              {state.exampleEnglish && <p className="mt-1 text-muted-foreground">"{state.exampleEnglish}"</p>}
            </div>
          )}

          {showStudyDetails && (state.memoryHook || state.memoryImage || state.recallPrompt) && (
            <div className="rounded-md border border-amber-200 bg-amber-50/70 p-3 text-sm leading-relaxed">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-900">Memory spark</p>
              {state.memoryHook && <p className="mt-1 font-medium text-amber-950">{state.memoryHook}</p>}
              {state.memoryImage && <p className="mt-2 text-amber-950/85">{state.memoryImage}</p>}
              {state.recallPrompt && (
                <p className="mt-2 rounded border border-amber-200 bg-background/70 px-2.5 py-2 text-amber-950">
                  {state.recallPrompt}
                </p>
              )}
            </div>
          )}

          {showStudyDetails && state.note && (
            <p className="rounded-md bg-muted/45 p-3 text-sm leading-relaxed text-muted-foreground">{state.note}</p>
          )}

          {state.sentence && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Source sentence</p>
              <p className="mt-1 rounded-md bg-background p-3 text-sm leading-relaxed text-muted-foreground">"{state.sentence}"</p>
            </div>
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
