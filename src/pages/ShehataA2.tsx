import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  FileText,
  ListChecks,
  PenLine,
  RotateCcw,
  Search,
  Trophy,
  XCircle,
} from 'lucide-react';
import { shehataA2Stats, shehataA2Topics, type ShehataLesson, type ShehataTopic } from '@/data/shehataA2';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type LessonBundle = {
  topic: ShehataTopic;
  lesson: ShehataLesson;
};

type QuizMode = 'choice' | 'type';

type ShehataQuizQuestion = {
  id: string;
  prompt: string;
  source: string;
  answer: string;
  options: string[];
  mode: QuizMode;
  difficulty: 'easy' | 'medium' | 'hard';
};

type BookSection = {
  page: number;
  text: string;
};

const exerciseStarter = /^\s*(?:\d+[).]|[a-z]\)|Übung\s+\d+|Ergänzen|Beantworten|Wählen|Bilden|Füllen|Was ist richtig|Schreiben)/i;

function getAllLessons(): LessonBundle[] {
  return shehataA2Topics.flatMap((topic) => topic.lessons.map((lesson) => ({ topic, lesson })));
}

function cleanText(value: string) {
  return value
    .replace(/\s+/g, ' ')
    .replace(/_{3,}/g, '___')
    .replace(/\s+([,.!?;:])/g, '$1')
    .trim();
}

function normalizeAnswer(value: string) {
  return value
    .toLowerCase()
    .replace(/\bans\b/g, 'an das')
    .replace(/\bins\b/g, 'in das')
    .replace(/\bam\b/g, 'an dem')
    .replace(/\bim\b/g, 'in dem')
    .replace(/\bzum\b/g, 'zu dem')
    .replace(/\bzur\b/g, 'zu der')
    .replace(/[.,!?;:()[\]"]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function typedMatches(input: string, answer: string) {
  const typed = normalizeAnswer(input);
  if (!typed) return false;
  const candidates = answer
    .split(/\/|;|\boder\b|\n/i)
    .map(normalizeAnswer)
    .filter(Boolean);
  return candidates.some((candidate) => candidate === typed || candidate.includes(typed));
}

function parseQuestionParts(prompt: string) {
  const match = prompt.match(/^(Folge \d+):.*?· Übung (\d+) · item ([\w\d]+)/);
  if (!match) return null;
  return { folge: match[1], exercise: Number(match[2]), item: match[3] };
}

function extractPromptFromLesson(lesson: ShehataLesson, prompt: string) {
  const parts = parseQuestionParts(prompt);
  if (!parts) return cleanText(prompt);

  const sourceText = lesson.sourcePages.map((page) => page.text).join('\n');
  if (!sourceText) return cleanText(prompt);

  const exercisePattern = new RegExp(`(?:^|\\n)\\s*${parts.exercise}\\)\\s*([^\\n]*)`, 'i');
  const exerciseMatch = sourceText.match(exercisePattern);
  const start = exerciseMatch ? (exerciseMatch.index ?? 0) + exerciseMatch[0].length : 0;
  const nextPattern = new RegExp(`\\n\\s*${parts.exercise + 1}\\)`, 'i');
  const afterStart = sourceText.slice(start);
  const nextMatch = afterStart.match(nextPattern);
  const block = nextMatch ? afterStart.slice(0, nextMatch.index) : afterStart.slice(0, 2800);

  const itemPattern = /^[a-z]$/i.test(parts.item)
    ? new RegExp(`(?:^|\\n)\\s*${parts.item}\\)\\s*([^\\n]+)`, 'i')
    : new RegExp(`(?:^|\\n)\\s*${parts.item}[.)]\\s*([^\\n]+)`, 'i');
  const itemMatch = block.match(itemPattern);

  if (itemMatch?.[1]) return cleanText(itemMatch[1]).slice(0, 280);

  const heading = exerciseMatch?.[1] ? cleanText(exerciseMatch[1]) : `Übung ${parts.exercise}`;
  return `${parts.folge} · ${heading} · item ${parts.item}`;
}

function buildLessonQuiz(topic: ShehataTopic, lesson: ShehataLesson): ShehataQuizQuestion[] {
  const lessonPrefix = `${lesson.folge}:`;
  return topic.interactiveQuestions
    .filter((item) => item.prompt.startsWith(lessonPrefix))
    .map((item, index, filtered) => ({
      id: item.id,
      prompt: extractPromptFromLesson(lesson, item.prompt),
      source: item.prompt,
      answer: item.answer,
      options: item.options,
      mode: index % 5 === 4 || item.answer.length > 42 ? 'type' : 'choice',
      difficulty: index < 5 ? 'easy' : index < Math.ceil(filtered.length * 0.55) ? 'medium' : 'hard',
    }));
}

function splitBookSections(lesson: ShehataLesson) {
  const explanation: BookSection[] = [];
  const exercises: BookSection[] = [];
  let exerciseMode = false;

  lesson.sourcePages.forEach((page) => {
    const lines = page.text.split('\n');
    const exerciseIndex = lines.findIndex((line) => exerciseStarter.test(line.trim()));

    if (!exerciseMode && exerciseIndex === -1) {
      explanation.push({ page: page.page, text: page.text });
      return;
    }

    if (!exerciseMode && exerciseIndex >= 0) {
      const before = lines.slice(0, exerciseIndex).join('\n').trim();
      const after = lines.slice(exerciseIndex).join('\n').trim();
      if (before) explanation.push({ page: page.page, text: before });
      if (after) exercises.push({ page: page.page, text: after });
      exerciseMode = true;
      return;
    }

    exercises.push({ page: page.page, text: page.text });
  });

  return { explanation, exercises };
}

function getLineKind(line: string) {
  const trimmed = line.trim();
  if (!trimmed) return 'empty';
  if (/^(?:[-▪•❖➢*]|Z\.B\.|Beispiele?:)/i.test(trimmed)) return 'example';
  if (/^(?:\d+[).]|[a-z]\))/.test(trimmed)) return 'exercise';
  if (/^(?:Nom\.?|Akk\.?|Dat\.?|Genitiv|Kasus)\b/i.test(trimmed)) return 'table';
  if (trimmed.length <= 32 && trimmed === trimmed.toUpperCase() && /[A-ZÄÖÜ]/.test(trimmed)) return 'heading';
  return 'text';
}

function prepareBookLines(text: string) {
  const rawLines = text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  const lines: string[] = [];

  for (const line of rawLines) {
    const previous = lines[lines.length - 1];
    if (
      previous &&
      /^[A-ZÄÖÜ]{4,}$/.test(previous) &&
      /^[A-ZÄÖÜ]{1,2}$/.test(line) &&
      previous.length + line.length <= 12
    ) {
      lines[lines.length - 1] = `${previous}${line}`;
    } else {
      lines.push(line);
    }
  }

  return lines;
}

function getCaseLabel(value: string) {
  const normalized = value.replace('.', '').toLowerCase();
  if (normalized.startsWith('nom')) return 'Nominative';
  if (normalized.startsWith('akk')) return 'Accusative';
  if (normalized.startsWith('dat')) return 'Dative';
  if (normalized.startsWith('gen')) return 'Genitive';
  return value;
}

function parseCaseRows(lines: string[]) {
  return lines
    .map((line) => {
      const match = line.match(/^(.+?)\s+(Nom\.?|Akk\.?|Dat\.?|Genitiv)$/i);
      if (!match) return null;
      const values = match[1].split(/\s+/).filter(Boolean);
      if (values.length < 3 || values.length > 5) return null;
      return {
        caseName: getCaseLabel(match[2]),
        values: values.reverse(),
      };
    })
    .filter(Boolean) as Array<{ caseName: string; values: string[] }>;
}

function parsePronounRows(lines: string[]) {
  const start = lines.findIndex((line) => /^Nominativ\s+Akkusativ\s+Dativ$/i.test(line));
  if (start === -1) return [];
  const rows: Array<{ nominative: string; accusative: string; dative: string }> = [];

  for (const line of lines.slice(start + 1)) {
    if (/Possessivartikel/i.test(line)) break;
    const tokens = line.split(/\s+/).filter(Boolean);
    if (tokens.length === 3) {
      rows.push({ nominative: tokens[0], accusative: tokens[1], dative: tokens[2] });
    }
  }

  return rows.length >= 4 ? rows : [];
}

function getPrepositionChips(lines: string[]) {
  const chips = lines.filter((line) => /^[A-ZÄÖÜ]{2,12}$/.test(line));
  return chips.length >= 4 ? chips : [];
}

function groupLines(text: string) {
  const lines = prepareBookLines(text);

  const blocks: Array<{ kind: string; lines: string[] }> = [];
  for (const line of lines) {
    const kind = getLineKind(line);
    const normalizedKind = kind === 'heading' || kind === 'example' || kind === 'exercise' || kind === 'table' ? kind : 'text';
    const last = blocks[blocks.length - 1];
    if (last && last.kind === normalizedKind && normalizedKind !== 'heading') {
      last.lines.push(line);
    } else {
      blocks.push({ kind: normalizedKind, lines: [line] });
    }
  }

  return blocks;
}

function extractBookExamples(sections: BookSection[]) {
  const seen = new Set<string>();
  return sections
    .flatMap((section) => section.text.split('\n').map((line) => cleanText(line)))
    .filter((line) => {
      if (line.length < 14 || line.length > 180) return false;
      if (!/[.!?]$/.test(line) && !/^[-▪•❖➢]/.test(line)) return false;
      if (!/[A-ZÄÖÜa-zäöüß]/.test(line)) return false;
      const key = line.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 12);
}

function extractExerciseCards(sections: BookSection[]) {
  const text = sections.map((section) => section.text).join('\n');
  const matches = [...text.matchAll(/(?:^|\n)\s*(\d+[).])\s*([^\n]+)([\s\S]*?)(?=\n\s*\d+[).]\s*[^\n]+|\n\s*Die Lösungen|$)/g)];
  return matches.slice(0, 16).map((match) => ({
    number: match[1],
    title: cleanText(match[2]),
    body: cleanText(match[3]).slice(0, 420),
  }));
}

export default function ShehataA2() {
  const lessons = useMemo(() => getAllLessons(), []);
  const [query, setQuery] = useState('');
  const [selectedKey, setSelectedKey] = useState(`${lessons[0]?.lesson.folge}:${lessons[0]?.lesson.title}`);
  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [choiceAnswer, setChoiceAnswer] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [answers, setAnswers] = useState<Record<string, { value: string; correct: boolean }>>({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const filteredLessons = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return lessons;
    return lessons.filter(({ lesson, topic }) => `${lesson.folge} ${lesson.title} ${topic.title}`.toLowerCase().includes(needle));
  }, [lessons, query]);

  const selected = useMemo(
    () => lessons.find(({ lesson }) => `${lesson.folge}:${lesson.title}` === selectedKey) ?? lessons[0],
    [lessons, selectedKey]
  );

  const bookSections = useMemo(() => splitBookSections(selected.lesson), [selected.lesson]);
  const bookExamples = useMemo(() => extractBookExamples(bookSections.explanation), [bookSections.explanation]);
  const exerciseCards = useMemo(() => extractExerciseCards(bookSections.exercises), [bookSections.exercises]);
  const quizQuestions = useMemo(() => buildLessonQuiz(selected.topic, selected.lesson), [selected]);
  const currentQuestion = quizQuestions[currentIndex];
  const answered = currentQuestion ? answers[currentQuestion.id] : undefined;
  const currentCorrect = currentQuestion?.mode === 'type'
    ? typedMatches(typedAnswer, currentQuestion.answer)
    : choiceAnswer === currentQuestion?.answer;
  const wrongCount = Object.values(answers).filter((answer) => !answer.correct).length;
  const progressValue = quizQuestions.length ? Math.round(((currentIndex + (answered ? 1 : 0)) / quizQuestions.length) * 100) : 0;

  const resetQuizState = () => {
    setCurrentIndex(0);
    setChoiceAnswer(null);
    setTypedAnswer('');
    setAnswers({});
    setScore(0);
    setFinished(false);
  };

  const chooseLesson = (bundle: LessonBundle) => {
    setSelectedKey(`${bundle.lesson.folge}:${bundle.lesson.title}`);
    setMode('learn');
    resetQuizState();
  };

  const startQuiz = () => {
    setMode('quiz');
    resetQuizState();
  };

  const recordAnswer = (value: string, correct: boolean) => {
    if (!currentQuestion || answers[currentQuestion.id]) return;
    setAnswers((current) => ({ ...current, [currentQuestion.id]: { value, correct } }));
    if (correct) setScore((current) => current + 1);
  };

  const handleChoice = (value: string) => {
    if (answered || !currentQuestion) return;
    setChoiceAnswer(value);
    recordAnswer(value, value === currentQuestion.answer);
  };

  const handleTypedSubmit = () => {
    if (answered || !currentQuestion) return;
    recordAnswer(typedAnswer, typedMatches(typedAnswer, currentQuestion.answer));
  };

  const handleNext = () => {
    if (currentIndex + 1 >= quizQuestions.length) {
      setFinished(true);
      return;
    }
    setCurrentIndex((current) => current + 1);
    setChoiceAnswer(null);
    setTypedAnswer('');
  };

  if (finished) {
    const pct = quizQuestions.length ? Math.round((score / quizQuestions.length) * 100) : 0;
    return (
      <div className="page-transition mx-auto max-w-xl space-y-6 py-12 text-center">
        <Trophy className="mx-auto h-14 w-14 text-primary" />
        <div>
          <h1 className="font-serif text-3xl font-bold">Quiz Finished</h1>
          <p className="mt-1 text-sm text-muted-foreground">{selected.lesson.folge} · {selected.lesson.title}</p>
        </div>
        <Card>
          <CardContent className="grid grid-cols-3 gap-4 py-6 text-center">
            <div>
              <div className="text-3xl font-bold text-srs-good">{score}</div>
              <div className="text-xs text-muted-foreground">Correct</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">{pct}%</div>
              <div className="text-xs text-muted-foreground">Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-srs-again">{quizQuestions.length - score}</div>
              <div className="text-xs text-muted-foreground">Missed</div>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={startQuiz} className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Try Again
          </Button>
          <Button onClick={() => setMode('learn')} className="gap-2">
            <BookOpen className="h-4 w-4" />
            Back To Lesson
          </Button>
        </div>
      </div>
    );
  }

  if (mode === 'quiz' && currentQuestion) {
    const isAnswered = Boolean(answered);
    const isCorrect = answered?.correct ?? currentCorrect;

    return (
      <div className="page-transition mx-auto max-w-2xl space-y-5">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setMode('learn')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <p className="truncate text-sm font-medium">{selected.lesson.folge} · {selected.lesson.title}</p>
              <p className="shrink-0 text-sm text-muted-foreground">{currentIndex + 1} / {quizQuestions.length}</p>
            </div>
            <Progress value={progressValue} className="mt-1 h-1.5" />
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="font-medium text-srs-good">Correct {score}</span>
          <span className="font-medium text-srs-again">Wrong {wrongCount}</span>
          <Badge
            variant="outline"
            className={cn(
              'ml-auto',
              currentQuestion.difficulty === 'easy' && 'border-emerald-300 text-emerald-700',
              currentQuestion.difficulty === 'medium' && 'border-amber-300 text-amber-700',
              currentQuestion.difficulty === 'hard' && 'border-red-300 text-red-700'
            )}
          >
            {currentQuestion.difficulty}
          </Badge>
        </div>

        <Card>
          <CardContent className="space-y-6 py-7">
            <div className="space-y-2 text-center">
              <Badge variant="secondary">{currentQuestion.mode === 'type' ? 'Type answer' : 'Choose one'}</Badge>
              <h1 className="text-xl font-semibold leading-relaxed">{currentQuestion.prompt}</h1>
              <p className="text-xs text-muted-foreground">{currentQuestion.source}</p>
            </div>

            {currentQuestion.mode === 'choice' ? (
              <div className="grid gap-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = choiceAnswer === option;
                  const isAnswer = isAnswered && option === currentQuestion.answer;
                  const isWrong = isAnswered && isSelected && !isCorrect;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleChoice(option)}
                      disabled={isAnswered}
                      className={cn(
                        'flex w-full items-center justify-between gap-3 rounded-lg border-2 px-5 py-3.5 text-left font-medium transition-all',
                        !isAnswered && 'cursor-pointer border-border hover:border-primary hover:bg-primary/5',
                        isAnswer && 'border-emerald-500 bg-emerald-50 text-emerald-900',
                        isWrong && 'border-red-400 bg-red-50 text-red-900',
                        isAnswered && !isAnswer && !isWrong && 'border-border opacity-45'
                      )}
                    >
                      <span>{option}</span>
                      {isAnswer && <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600" />}
                      {isWrong && <XCircle className="h-5 w-5 shrink-0 text-red-500" />}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-3">
                <Input
                  value={typedAnswer}
                  onChange={(event) => setTypedAnswer(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') handleTypedSubmit();
                  }}
                  disabled={isAnswered}
                  placeholder="Type the German answer..."
                  className="h-12 text-base"
                />
                <Button onClick={handleTypedSubmit} disabled={isAnswered || !typedAnswer.trim()} className="w-full">
                  {isAnswered ? 'Checked' : 'Check Answer'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {isAnswered && (
          <Card className={cn('border-l-4', isCorrect ? 'border-l-emerald-500 bg-emerald-50/50' : 'border-l-red-400 bg-red-50/50')}>
            <CardContent className="py-4">
              <div className="flex gap-3">
                {isCorrect ? (
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                ) : (
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                )}
                <div>
                  <p className={cn('text-sm font-semibold', isCorrect ? 'text-emerald-800' : 'text-red-800')}>
                    {isCorrect ? 'Correct.' : 'Not quite.'} Correct answer: {currentQuestion.answer}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                    This answer comes from the Shehata PDF answer key for this lesson.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {isAnswered && (
          <Button onClick={handleNext} className="w-full gap-2" size="lg">
            {currentIndex + 1 >= quizQuestions.length ? (
              <>
                <Trophy className="h-4 w-4" />
                Finish Quiz
              </>
            ) : (
              <>
                Next Question
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="page-transition mx-auto max-w-7xl space-y-6">
      <div className="flex items-start gap-3">
        <Link to="/grammar">
          <Button variant="ghost" size="icon" className="mt-1">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">A2</Badge>
            <Badge variant="secondary">Shehata PDF</Badge>
            <Badge variant="secondary">{shehataA2Stats.sourceCount} Folgen</Badge>
            <Badge variant="secondary">{shehataA2Stats.pageCount} PDF pages</Badge>
          </div>
          <h1 className="mt-2 font-serif text-3xl font-bold leading-tight">Shehata A2 PDF Reader</h1>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            A navigable site version of the PDF: each Folge is separate, the book text is the lesson, and the quiz uses the book answer key.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[19rem_minmax(0,1fr)] lg:items-start">
        <Card className="lg:sticky lg:top-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <FileText className="h-4 w-4" />
              PDF Lessons
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search Folgen..."
                className="pl-9"
              />
            </div>
            <ScrollArea className="h-[34rem] pr-3">
              <div className="space-y-2">
                {filteredLessons.map((bundle) => {
                  const key = `${bundle.lesson.folge}:${bundle.lesson.title}`;
                  const active = key === selectedKey;
                  return (
                    <button
                      key={key}
                      onClick={() => chooseLesson(bundle)}
                      className={cn(
                        'w-full rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
                        active ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/40 hover:bg-muted/50'
                      )}
                    >
                      <span className="block text-xs font-medium text-muted-foreground">{bundle.lesson.folge}</span>
                      <span className="mt-0.5 block font-medium leading-snug">{bundle.lesson.title}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        PDF {bundle.lesson.printedPageStart}-{bundle.lesson.printedPageEnd}
                      </span>
                    </button>
                  );
                })}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{selected.lesson.folge}</Badge>
                  <Badge variant="secondary">PDF pages {selected.lesson.printedPageStart}-{selected.lesson.printedPageEnd}</Badge>
                </div>
                <h2 className="mt-2 font-serif text-2xl font-bold">{selected.lesson.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {bookSections.explanation.length} explanation pages · {bookSections.exercises.length} exercise pages · {quizQuestions.length} quiz checks
                </p>
              </div>
              <Button onClick={startQuiz} disabled={quizQuestions.length === 0} className="gap-2">
                <PenLine className="h-4 w-4" />
                Start This Lesson Quiz
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
            <div className="space-y-4">
              <Card>
                <CardHeader className="border-b bg-muted/25">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Book Explanation & Examples
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-5">
                  {bookSections.explanation.length > 0 ? (
                    bookSections.explanation.map((section) => (
                      <BookSectionCard key={`explanation-${section.page}`} section={section} />
                    ))
                  ) : (
                    <p className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
                      No separate explanation page was detected for this Folge. Use the exercise section and PDF reference below.
                    </p>
                  )}
                </CardContent>
              </Card>

              {bookExamples.length > 0 && (
                <Card>
                  <CardHeader className="border-b bg-muted/25">
                    <CardTitle className="text-lg">Examples Pulled From The Book</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-2 pt-5 md:grid-cols-2">
                    {bookExamples.map((example) => (
                      <div key={example} className="rounded-lg border bg-card px-3 py-2 text-sm leading-relaxed">
                        {example}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader className="border-b bg-muted/25">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ListChecks className="h-5 w-5 text-primary" />
                    Book Exercises
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-5">
                  {exerciseCards.length > 0 ? (
                    exerciseCards.map((exercise) => (
                      <div key={`${exercise.number}-${exercise.title}`} className="rounded-lg border bg-card p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Exercise {exercise.number}</p>
                        <p className="mt-1 text-sm font-medium leading-relaxed">{exercise.title}</p>
                        {exercise.body && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exercise.body}</p>}
                      </div>
                    ))
                  ) : (
                    bookSections.exercises.map((section) => <BookSectionCard key={`exercise-page-${section.page}`} section={section} />)
                  )}
                </CardContent>
              </Card>

              <Accordion type="single" collapsible className="rounded-lg border bg-card">
                <AccordionItem value="full-source" className="border-b-0">
                  <AccordionTrigger className="px-4 hover:no-underline">
                    <span className="flex items-center gap-2 font-semibold">
                      <FileText className="h-4 w-4" />
                      Full PDF text for this Folge
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ScrollArea className="max-h-96 rounded-lg border bg-background">
                      <div className="space-y-4 p-4">
                        {selected.lesson.sourcePages.map((page) => (
                          <BookSectionCard key={`source-${page.page}`} section={{ page: page.page, text: page.text }} compact />
                        ))}
                      </div>
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <Card className="xl:sticky xl:top-6">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <PenLine className="h-4 w-4" />
                  Lesson Quiz
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border bg-muted/25 p-4">
                  <div className="text-3xl font-semibold">{quizQuestions.length}</div>
                  <p className="text-xs text-muted-foreground">answer-key checks for this Folge</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The quiz is filtered to this exact PDF lesson and reveals the answer only after you try.
                </p>
                <Button onClick={startQuiz} disabled={quizQuestions.length === 0} className="w-full gap-2">
                  <PenLine className="h-4 w-4" />
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookSectionCard({ section, compact = false }: { section: BookSection; compact?: boolean }) {
  const lines = prepareBookLines(section.text);
  const prepositionChips = getPrepositionChips(lines);
  const caseRows = parseCaseRows(lines);
  const pronounRows = parsePronounRows(lines);
  const blocks = groupLines(section.text);

  return (
    <div className={cn('rounded-lg border bg-background', compact ? 'p-3' : 'p-4')}>
      <Badge variant="secondary">PDF page {section.page}</Badge>
      <div className="mt-3 space-y-3">
        {prepositionChips.length >= 4 && (
          <div className="rounded-lg border bg-muted/20 p-3">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Book keyword list</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {prepositionChips.map((chip) => (
                <div key={chip} className="rounded-md border bg-background px-3 py-2 text-center text-sm font-semibold">
                  {chip}
                </div>
              ))}
            </div>
          </div>
        )}

        {caseRows.length >= 2 && (
          <div className="overflow-hidden rounded-lg border">
            <div className="border-b bg-muted/35 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Case / Article Table From The Book
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[34rem] text-sm">
                <thead className="bg-muted/20">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Case</th>
                    <th className="px-3 py-2 text-left font-semibold">der</th>
                    <th className="px-3 py-2 text-left font-semibold">das</th>
                    <th className="px-3 py-2 text-left font-semibold">die (sg.)</th>
                    <th className="px-3 py-2 text-left font-semibold">die (pl.)</th>
                  </tr>
                </thead>
                <tbody>
                  {caseRows.map((row, index) => (
                    <tr key={`${row.caseName}-${index}`} className="border-t">
                      <td className="px-3 py-2 font-semibold">{row.caseName}</td>
                      {[0, 1, 2, 3].map((cellIndex) => (
                        <td key={cellIndex} className="px-3 py-2">{row.values[cellIndex] ?? '—'}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {pronounRows.length > 0 && (
          <div className="overflow-hidden rounded-lg border">
            <div className="border-b bg-muted/35 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Pronoun Table From The Book
            </div>
            <table className="w-full text-sm">
              <thead className="bg-muted/20">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Nominative</th>
                  <th className="px-3 py-2 text-left font-semibold">Accusative</th>
                  <th className="px-3 py-2 text-left font-semibold">Dative</th>
                </tr>
              </thead>
              <tbody>
                {pronounRows.map((row) => (
                  <tr key={`${row.nominative}-${row.accusative}-${row.dative}`} className="border-t">
                    <td className="px-3 py-2 font-medium">{row.nominative}</td>
                    <td className="px-3 py-2">{row.accusative}</td>
                    <td className="px-3 py-2">{row.dative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {blocks.map((block, index) => {
          if (
            prepositionChips.length >= 4 &&
            block.lines.every((line) => prepositionChips.includes(line))
          ) {
            return null;
          }

          if (
            caseRows.length >= 2 &&
            block.lines.every((line) => parseCaseRows([line]).length > 0)
          ) {
            return null;
          }

          if (
            pronounRows.length > 0 &&
            (block.lines.some((line) => /^Nominativ\s+Akkusativ\s+Dativ$/i.test(line)) ||
              block.lines.every((line) => line.split(/\s+/).length === 3 && pronounRows.some((row) => `${row.nominative} ${row.accusative} ${row.dative}` === line)))
          ) {
            return null;
          }

          if (block.kind === 'heading') {
            return (
              <div key={`${block.kind}-${index}`} className="flex flex-wrap gap-2">
                {block.lines.map((line) => (
                  <Badge key={line} variant="outline" className="text-sm">{line}</Badge>
                ))}
              </div>
            );
          }

          if (block.kind === 'example') {
            return (
              <ul key={`${block.kind}-${index}`} className="space-y-2">
                {block.lines.map((line) => (
                  <li key={line} className="rounded-md border bg-muted/20 px-3 py-2 text-sm leading-relaxed">
                    {line.replace(/^[-▪•❖➢*]\s*/, '')}
                  </li>
                ))}
              </ul>
            );
          }

          if (block.kind === 'table') {
            return (
              <div key={`${block.kind}-${index}`} className="overflow-x-auto rounded-md border bg-muted/20 p-3">
                <div className="grid gap-1 text-sm">
                  {block.lines.map((line) => (
                    <div key={line} className="font-medium leading-relaxed">{line}</div>
                  ))}
                </div>
              </div>
            );
          }

          if (block.kind === 'exercise') {
            return (
              <div key={`${block.kind}-${index}`} className="space-y-2">
                {block.lines.map((line) => (
                  <div key={line} className="rounded-md border-l-4 border-l-primary bg-primary/5 px-3 py-2 text-sm leading-relaxed">
                    {line}
                  </div>
                ))}
              </div>
            );
          }

          return (
            <div key={`${block.kind}-${index}`} className="space-y-1.5 rounded-md bg-muted/10 p-3">
              {block.lines.map((line) => (
                <p key={line} className="text-sm leading-7 text-foreground">
                  {line}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
