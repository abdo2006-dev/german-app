import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  FileText,
  Layers3,
  Lightbulb,
  ListChecks,
  PenLine,
  RotateCcw,
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

type QuizMode = 'choice' | 'type';

type ShehataQuizQuestion = {
  id: string;
  prompt: string;
  source: string;
  answer: string;
  options: string[];
  mode: QuizMode;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
};

const lessonGuides: Record<string, { rule: string; steps: string[]; examples: string[] }> = {
  wechsel: {
    rule: 'Wechselpräpositionen switch case by meaning: wo? uses dative for location, wohin? uses accusative for movement or direction.',
    steps: ['Ask wo? or wohin? before choosing the article.', 'Location verbs often use stehen, liegen, sitzen, hängen, sein.', 'Movement verbs often use stellen, legen, setzen, hängen, gehen, fahren.'],
    examples: ['Das Buch liegt auf dem Tisch.', 'Ich lege das Buch auf den Tisch.', 'Wir gehen in die Schule.'],
  },
  genitiv: {
    rule: 'Genitive shows possession or “of”: masculine/neuter usually take des + noun ending, feminine/plural take der.',
    steps: ['Find the owner.', 'Choose des for masculine/neuter and der for feminine/plural.', 'Add -s or -es to many masculine/neuter nouns.'],
    examples: ['Das Auto des Mannes ist neu.', 'Die Tasche der Frau ist grün.', 'Das Hemd meines Bruders ist blau.'],
  },
  kasus: {
    rule: 'The four cases answer different grammar questions: wer/was, wen/was, wem, and wessen.',
    steps: ['Nominative marks the subject.', 'Accusative marks many direct objects.', 'Dative marks indirect objects and many fixed verbs/prepositions.', 'Genitive marks possession.'],
    examples: ['Der Lehrer erklärt den Schülern die Aufgabe.', 'Ich sehe den Mann.', 'Wir helfen der Frau.'],
  },
  adjektiv: {
    rule: 'Adjective endings depend on article signal, gender, number, and case.',
    steps: ['Identify the case first.', 'Check whether the article already shows gender/case.', 'Use -e/-en after clear definite articles; use stronger endings after ein/kein/mein when the article signal is missing.'],
    examples: ['der gute Mann', 'einen netten Kollegen', 'ein schönes Zimmer'],
  },
  komparation: {
    rule: 'Comparatives use -er + als; superlatives use am ... -sten or der/die/das ... -ste.',
    steps: ['Use als for comparisons.', 'Watch irregular forms like gut, besser, am besten.', 'Some short adjectives add umlaut: groß, größer.'],
    examples: ['Kairo ist größer als Berlin.', 'Deutsch ist interessanter als Mathe.', 'Das ist am besten.'],
  },
  praeteritum: {
    rule: 'Präteritum is the written-story past and is especially common with sein, haben, and modal verbs.',
    steps: ['Memorize war and hatte first.', 'Modal verbs lose umlaut in Präteritum.', 'Regular verbs usually add -te endings.'],
    examples: ['Ich war gestern krank.', 'Wir hatten keine Zeit.', 'Sie musste lernen.'],
  },
  konjunktiv: {
    rule: 'Konjunktiv II expresses wishes, polite requests, advice, and unreal situations.',
    steps: ['Use könnte/würde/hätte/wäre for polite or unreal meaning.', 'For most verbs, würde + infinitive is safe.', 'In wenn-clauses, put the conjugated verb at the end.'],
    examples: ['Könnten Sie mir helfen?', 'Ich würde gern reisen.', 'Wenn ich Zeit hätte, käme ich.'],
  },
  reflexiv: {
    rule: 'Reflexive verbs send the action back to the subject: mich, dich, sich, uns, euch, sich.',
    steps: ['Learn the verb with its reflexive pronoun.', 'Use dative reflexive when a body part or object is also present.', 'Keep the reflexive pronoun close to the verb.'],
    examples: ['Ich freue mich.', 'Er wäscht sich die Hände.', 'Wir interessieren uns für Musik.'],
  },
  infinitiv: {
    rule: 'Infinitiv mit zu connects a main idea to a second verb idea; um ... zu gives purpose when the subject is the same.',
    steps: ['Put zu directly before the infinitive.', 'For separable verbs, put zu between prefix and verb.', 'Use damit instead of um ... zu when the subjects are different.'],
    examples: ['Ich versuche, Deutsch zu lernen.', 'Sie hat keine Lust, aufzuräumen.', 'Ich lerne, um die Prüfung zu bestehen.'],
  },
  passiv: {
    rule: 'The passive focuses on what happens to the object, not who does it: werden + Partizip II.',
    steps: ['Move the object into subject position.', 'Conjugate werden.', 'Put the Partizip II at the end.'],
    examples: ['Der Brief wird geschrieben.', 'Das Auto wird repariert.', 'Die Aufgabe wird erklärt.'],
  },
  relativ: {
    rule: 'Relative clauses describe a noun and send the verb to the end.',
    steps: ['Find the noun being described.', 'Choose the relative pronoun by gender/number and case inside the relative clause.', 'Put the conjugated verb at the end.'],
    examples: ['Das ist der Mann, der hier wohnt.', 'Ich sehe die Frau, die Deutsch lernt.', 'Das ist der Lehrer, dem ich danke.'],
  },
  kausal: {
    rule: 'weil, denn, and deshalb all give reasons, but they use different word order.',
    steps: ['weil sends the verb to the end.', 'denn keeps normal word order.', 'deshalb starts a new main clause, so the verb comes second.'],
    examples: ['Ich bleibe zu Hause, weil ich krank bin.', 'Ich bin krank, deshalb bleibe ich zu Hause.', 'Ich bleibe zu Hause, denn ich bin krank.'],
  },
  temporal: {
    rule: 'Temporal prepositions show when or how long something happens.',
    steps: ['Use um for clock time.', 'Use am for days and parts of the day.', 'Use seit for something that started in the past and continues now.'],
    examples: ['Der Kurs beginnt um acht Uhr.', 'Am Montag habe ich frei.', 'Ich lerne seit zwei Monaten Deutsch.'],
  },
  default: {
    rule: 'This lesson trains A2 exam language through model phrases, short grammar patterns, and workbook exercises.',
    steps: ['Read the examples for the pattern.', 'Say one sentence aloud using the same pattern.', 'Use the quiz to check the answer-key items without seeing the solution first.'],
    examples: ['Ich finde das wichtig.', 'Meiner Meinung nach ...', 'Zum Beispiel ...'],
  },
};

function getLessonGuide(lesson: ShehataLesson) {
  const key = lesson.title.toLowerCase();
  if (key.includes('wechsel')) return lessonGuides.wechsel;
  if (key.includes('genitiv')) return lessonGuides.genitiv;
  if (key.includes('kasus') || key.includes('akkusativ') || key.includes('dativ')) return lessonGuides.kasus;
  if (key.includes('adjektiv')) return lessonGuides.adjektiv;
  if (key.includes('komparation')) return lessonGuides.komparation;
  if (key.includes('präteritum') || key.includes('modalverben')) return lessonGuides.praeteritum;
  if (key.includes('konjunktiv')) return lessonGuides.konjunktiv;
  if (key.includes('reflexiv')) return lessonGuides.reflexiv;
  if (key.includes('infinitiv') || key.includes('damit') || key.includes('um ... zu')) return lessonGuides.infinitiv;
  if (key.includes('passiv') || key.includes('werden')) return lessonGuides.passiv;
  if (key.includes('relativ')) return lessonGuides.relativ;
  if (key.includes('weil') || key.includes('denn') || key.includes('deshalb')) return lessonGuides.kausal;
  if (key.includes('temporal')) return lessonGuides.temporal;
  return lessonGuides.default;
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

function extractPromptFromLesson(topic: ShehataTopic, prompt: string) {
  const parts = parseQuestionParts(prompt);
  if (!parts) return cleanText(prompt);

  const lesson = topic.lessons.find((item) => item.folge === parts.folge);
  const sourceText = lesson?.sourcePages.map((page) => page.text).join('\n') ?? '';
  if (!sourceText) return cleanText(prompt);

  const exercisePattern = new RegExp(`(?:^|\\n)\\s*${parts.exercise}\\)\\s*([^\\n]*)`, 'i');
  const exerciseMatch = sourceText.match(exercisePattern);
  const start = exerciseMatch ? (exerciseMatch.index ?? 0) + exerciseMatch[0].length : 0;
  const nextPattern = new RegExp(`\\n\\s*${parts.exercise + 1}\\)`, 'i');
  const afterStart = sourceText.slice(start);
  const nextMatch = afterStart.match(nextPattern);
  const block = nextMatch ? afterStart.slice(0, nextMatch.index) : afterStart.slice(0, 2500);

  const itemPattern = /^[a-z]$/i.test(parts.item)
    ? new RegExp(`(?:^|\\n)\\s*${parts.item}\\)\\s*([^\\n]+)`, 'i')
    : new RegExp(`(?:^|\\n)\\s*${parts.item}[.)]\\s*([^\\n]+)`, 'i');
  const itemMatch = block.match(itemPattern);

  if (itemMatch?.[1]) return cleanText(itemMatch[1]).slice(0, 260);

  const heading = exerciseMatch?.[1] ? cleanText(exerciseMatch[1]) : `Übung ${parts.exercise}`;
  return `${parts.folge} · ${heading} · item ${parts.item}`;
}

function buildQuizQuestions(topic: ShehataTopic): ShehataQuizQuestion[] {
  return topic.interactiveQuestions.map((item, index) => {
    const mode: QuizMode = index % 6 === 5 || item.answer.length > 42 ? 'type' : 'choice';
    const difficulty = index < 5 ? 'easy' : index < Math.ceil(topic.interactiveQuestions.length * 0.55) ? 'medium' : 'hard';
    return {
      id: item.id,
      prompt: extractPromptFromLesson(topic, item.prompt),
      source: item.prompt,
      answer: item.answer,
      options: item.options,
      mode,
      difficulty,
      explanation: `Correct answer from the Shehata answer key: ${item.answer}`,
    };
  });
}

function extractExerciseSummaries(lesson: ShehataLesson) {
  const text = lesson.sourcePages.map((page) => page.text).join('\n');
  const matches = [...text.matchAll(/(?:^|\n)\s*(\d+)\)\s*([^\n]{5,120})/g)];
  return matches.slice(0, 8).map((match) => ({
    number: match[1],
    title: cleanText(match[2]),
  }));
}

export default function ShehataA2() {
  const [selectedId, setSelectedId] = useState(shehataA2Topics[0]?.id ?? '');
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [choiceAnswer, setChoiceAnswer] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [typedSubmitted, setTypedSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, { value: string; correct: boolean }>>({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const selectedTopic = useMemo(
    () => shehataA2Topics.find((topic) => topic.id === selectedId) ?? shehataA2Topics[0],
    [selectedId]
  );
  const quizQuestions = useMemo(() => buildQuizQuestions(selectedTopic), [selectedTopic]);
  const selectedLesson = selectedTopic.lessons[Math.min(selectedLessonIndex, selectedTopic.lessons.length - 1)] ?? selectedTopic.lessons[0];
  const lessonGuide = selectedLesson ? getLessonGuide(selectedLesson) : lessonGuides.default;
  const exerciseSummaries = selectedLesson ? extractExerciseSummaries(selectedLesson) : [];
  const currentQuestion = quizQuestions[currentIndex];
  const answered = currentQuestion ? answers[currentQuestion.id] : undefined;
  const selectedValue = currentQuestion?.mode === 'type' ? typedAnswer : choiceAnswer;
  const currentCorrect = currentQuestion?.mode === 'type'
    ? typedMatches(typedAnswer, currentQuestion.answer)
    : choiceAnswer === currentQuestion?.answer;
  const wrongCount = Object.values(answers).filter((answer) => !answer.correct).length;
  const progressValue = quizQuestions.length ? Math.round(((currentIndex + (answered ? 1 : 0)) / quizQuestions.length) * 100) : 0;

  const resetQuestionState = () => {
    setChoiceAnswer(null);
    setTypedAnswer('');
    setTypedSubmitted(false);
  };

  const selectTopic = (topicId: string) => {
    setSelectedId(topicId);
    setSelectedLessonIndex(0);
    setMode('learn');
    setCurrentIndex(0);
    setAnswers({});
    setScore(0);
    setFinished(false);
    resetQuestionState();
  };

  const startQuiz = () => {
    setMode('quiz');
    setCurrentIndex(0);
    setAnswers({});
    setScore(0);
    setFinished(false);
    resetQuestionState();
  };

  const recordAnswer = (value: string, correct: boolean) => {
    if (!currentQuestion || answers[currentQuestion.id]) return;
    setAnswers((current) => ({ ...current, [currentQuestion.id]: { value, correct } }));
    if (correct) setScore((current) => current + 1);
  };

  const handleChoice = (value: string) => {
    if (answered) return;
    setChoiceAnswer(value);
    recordAnswer(value, value === currentQuestion.answer);
  };

  const handleTypedSubmit = () => {
    if (!currentQuestion || answered) return;
    setTypedSubmitted(true);
    recordAnswer(typedAnswer, typedMatches(typedAnswer, currentQuestion.answer));
  };

  const handleNext = () => {
    if (currentIndex + 1 >= quizQuestions.length) {
      setFinished(true);
      return;
    }
    setCurrentIndex((current) => current + 1);
    resetQuestionState();
  };

  const restart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setScore(0);
    setFinished(false);
    resetQuestionState();
  };

  if (finished) {
    const pct = quizQuestions.length ? Math.round((score / quizQuestions.length) * 100) : 0;
    const grade = pct >= 90
      ? { label: 'Excellent', cls: 'text-emerald-600' }
      : pct >= 70
        ? { label: 'Good work', cls: 'text-blue-600' }
        : pct >= 50
          ? { label: 'Keep practicing', cls: 'text-amber-600' }
          : { label: 'Review the lesson again', cls: 'text-red-600' };

    return (
      <div className="page-transition mx-auto max-w-xl space-y-6 py-12 text-center">
        <Trophy className="mx-auto h-14 w-14 text-primary" />
        <div>
          <h1 className={cn('font-serif text-3xl font-bold', grade.cls)}>{grade.label}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{selectedTopic.title}</p>
        </div>
        <Card>
          <CardContent className="grid grid-cols-3 gap-4 py-6 text-center">
            <div>
              <div className="text-3xl font-bold text-srs-good">{score}</div>
              <div className="text-xs text-muted-foreground">Correct</div>
            </div>
            <div>
              <div className={cn('text-3xl font-bold', grade.cls)}>{pct}%</div>
              <div className="text-xs text-muted-foreground">Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-srs-again">{quizQuestions.length - score}</div>
              <div className="text-xs text-muted-foreground">Missed</div>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={restart} className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Try Again
          </Button>
          <Button onClick={() => setMode('learn')} className="gap-2">
            <BookOpen className="h-4 w-4" />
            Review Lesson
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
              <p className="truncate text-sm font-medium">{selectedTopic.title}</p>
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
                  const isSelected = selectedValue === option;
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
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">{currentQuestion.explanation}</p>
                  {typedSubmitted && !isCorrect && <p className="mt-1 text-xs text-muted-foreground">Your answer: {typedAnswer}</p>}
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
            <Badge variant="secondary">{shehataA2Stats.interactiveQuestionCount} quiz checks</Badge>
          </div>
          <h1 className="mt-2 font-serif text-3xl font-bold leading-tight">Shehata A2 Workbook</h1>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Study the lesson in a clean format, then start a quiz that hides answers until you try.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[18rem_minmax(0,1fr)_18rem] lg:items-start">
        <Card className="lg:sticky lg:top-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Layers3 className="h-4 w-4" />
              Units
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {shehataA2Topics.map((topic, index) => {
              const active = topic.id === selectedTopic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => selectTopic(topic.id)}
                  className={cn(
                    'w-full rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
                    active ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/40 hover:bg-muted/50'
                  )}
                >
                  <span className="block text-xs font-medium text-muted-foreground">Unit {index + 1} · {topic.source}</span>
                  <span className="mt-0.5 block font-medium leading-snug">{topic.title}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{topic.interactiveQuestions.length} quiz checks</span>
                </button>
              );
            })}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{selectedTopic.source}</Badge>
                  <Badge variant="secondary">{selectedTopic.pages}</Badge>
                </div>
                <h2 className="mt-2 font-serif text-2xl font-bold">{selectedTopic.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {selectedTopic.lessons.length} lessons with a quiz built from the Shehata answer key.
                </p>
              </div>
              <Button onClick={startQuiz} disabled={quizQuestions.length === 0} className="gap-2">
                <PenLine className="h-4 w-4" />
                Start Quiz
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-[15rem_minmax(0,1fr)]">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Lessons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {selectedTopic.lessons.map((lesson, index) => (
                  <button
                    key={lesson.folge}
                    onClick={() => setSelectedLessonIndex(index)}
                    className={cn(
                      'w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors',
                      index === selectedLessonIndex
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/40 hover:bg-muted/50'
                    )}
                  >
                    <span className="block text-xs text-muted-foreground">{lesson.folge}</span>
                    <span className="font-medium leading-snug">{lesson.title}</span>
                  </button>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader className="border-b bg-muted/25">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{selectedLesson?.folge}</Badge>
                    <Badge variant="secondary">PDF pages {selectedLesson?.printedPageStart}-{selectedLesson?.printedPageEnd}</Badge>
                  </div>
                  <CardTitle className="font-serif text-2xl">{selectedLesson?.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 pt-5">
                  <div className="rounded-lg border border-blue-200 bg-blue-50/70 p-4">
                    <div className="flex gap-3">
                      <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                      <div>
                        <p className="font-semibold text-blue-950">Core Rule</p>
                        <p className="mt-1 text-sm leading-relaxed text-blue-900">{lessonGuide.rule}</p>
                      </div>
                    </div>
                  </div>

                  <section className="space-y-3">
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Learn It
                    </h3>
                    <div className="grid gap-3 md:grid-cols-3">
                      {lessonGuide.steps.map((step, index) => (
                        <div key={step} className="rounded-lg border bg-card p-3 text-sm leading-relaxed">
                          <Badge variant="secondary" className="mb-2">Step {index + 1}</Badge>
                          <p>{step}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-lg font-semibold">Examples</h3>
                    <div className="overflow-hidden rounded-lg border">
                      <table className="w-full text-sm">
                        <tbody>
                          {lessonGuide.examples.map((example) => (
                            <tr key={example} className="border-b last:border-b-0">
                              <td className="w-10 bg-muted/35 px-3 py-3 font-medium text-muted-foreground">DE</td>
                              <td className="px-3 py-3 font-medium">{example}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {exerciseSummaries.length > 0 && (
                    <section className="space-y-3">
                      <h3 className="flex items-center gap-2 text-lg font-semibold">
                        <ListChecks className="h-5 w-5 text-primary" />
                        Booklet Practice In This Lesson
                      </h3>
                      <div className="grid gap-2">
                        {exerciseSummaries.map((exercise) => (
                          <div key={`${selectedLesson?.folge}-${exercise.number}`} className="rounded-lg border bg-muted/20 px-3 py-2 text-sm">
                            <span className="font-semibold">Exercise {exercise.number}: </span>
                            <span className="text-muted-foreground">{exercise.title}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  <Accordion type="single" collapsible className="rounded-lg border">
                    <AccordionItem value="source" className="border-b-0">
                      <AccordionTrigger className="px-4 hover:no-underline">
                        <span className="flex items-center gap-2 text-sm font-semibold">
                          <FileText className="h-4 w-4" />
                          PDF source reference
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <ScrollArea className="max-h-72 rounded-lg border bg-background">
                          <div className="space-y-4 p-4">
                            {selectedLesson?.sourcePages.map((page) => (
                              <div key={`${selectedLesson.folge}-${page.page}`} className="space-y-2">
                                <Badge variant="secondary">PDF page {page.page}</Badge>
                                <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-foreground">{page.text}</pre>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Card className="lg:sticky lg:top-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <PenLine className="h-4 w-4" />
              Practice Quiz
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <StatTile icon={ListChecks} label="Questions" value={String(quizQuestions.length)} />
            <div className="rounded-lg border bg-muted/25 p-3 text-sm leading-relaxed text-muted-foreground">
              The quiz starts easy, then ramps up. Some cards are multiple choice, and some ask you to type the answer.
            </div>
            <Button onClick={startQuiz} disabled={quizQuestions.length === 0} className="w-full gap-2">
              <PenLine className="h-4 w-4" />
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatTile({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Icon className="h-4 w-4 text-primary" />
        {label}
      </div>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}
