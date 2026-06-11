import { useState, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLessonById } from '@/data/grammar';
import { lessonContentMap } from '@/data/grammar/lessonContent';
import { lessonEnhancementMap } from '@/data/grammar/lessonEnhancements';
import { useGrammarStore } from '@/store/grammarStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, XCircle, ArrowRight, RotateCcw, BookOpen, PenLine, Lightbulb, Trophy, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { GrammarQuestion } from '@/data/grammar';

const difficultyOrder: Record<GrammarQuestion['difficulty'], number> = {
  easy: 0,
  medium: 1,
  hard: 2,
};

function orderQuestionsForExamRamp(questions: GrammarQuestion[]): GrammarQuestion[] {
  const withIndex = questions.map((question, index) => ({ question, index }));
  const easyWarmup = withIndex.filter((item) => item.question.difficulty === 'easy').slice(0, 5);
  const warmupIds = new Set(easyWarmup.map((item) => item.question.id));
  const warmup = easyWarmup.length >= 5
    ? easyWarmup
    : [
        ...easyWarmup,
        ...withIndex
          .filter((item) => !warmupIds.has(item.question.id))
          .sort((a, b) => difficultyOrder[a.question.difficulty] - difficultyOrder[b.question.difficulty] || a.index - b.index)
          .slice(0, 5 - easyWarmup.length),
      ];

  const usedIds = new Set(warmup.map((item) => item.question.id));
  const ramp = withIndex
    .filter((item) => !usedIds.has(item.question.id))
    .sort((a, b) => difficultyOrder[a.question.difficulty] - difficultyOrder[b.question.difficulty] || a.index - b.index);

  return [...warmup, ...ramp].map((item) => item.question);
}

export default function GrammarLesson() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = useMemo(() => getLessonById(lessonId ?? ''), [lessonId]);
  const { getProgress, saveProgress } = useGrammarStore();

  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const lessonContent = lessonId ? [lessonContentMap[lessonId], lessonEnhancementMap[lessonId]].filter(Boolean).join('\n') : undefined;
  const prevProgress = lesson ? getProgress(lesson.id) : undefined;
  const questions = useMemo(() => orderQuestionsForExamRamp(lesson?.questions ?? []), [lesson]);
  const difficultyCounts = useMemo(() => questions.reduce(
    (acc, q) => ({ ...acc, [q.difficulty]: acc[q.difficulty] + 1 }),
    { easy: 0, medium: 0, hard: 0 } as Record<GrammarQuestion['difficulty'], number>
  ), [questions]);
  const question = questions[currentIndex];
  const isCorrect = selectedIndex === question?.correctIndex;
  const pct = questions.length ? Math.round(((currentIndex + (selectedIndex !== null ? 1 : 0)) / questions.length) * 100) : 0;
  const wrongCount = Object.entries(answers).filter(([questionId, selected]) => {
    const answeredQuestion = questions.find((item) => item.id === questionId);
    return answeredQuestion ? selected !== answeredQuestion.correctIndex : false;
  }).length;

  const handleSelect = useCallback((idx: number) => {
    if (selectedIndex !== null || !question) return;
    setSelectedIndex(idx);
    const correct = idx === question.correctIndex;
    setAnswers(prev => ({ ...prev, [question.id]: idx }));
    if (correct) setScore(s => s + 1);
  }, [selectedIndex, question]);

  const handleNext = useCallback(() => {
    if (!lesson) return;
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
      saveProgress({
        lessonId: lesson.id, completed: true, score,
        totalQuestions: questions.length, lastAttemptAt: new Date().toISOString(), answers,
      });
    } else {
      setCurrentIndex(i => i + 1);
      setSelectedIndex(null);
    }
  }, [currentIndex, questions.length, score, lesson, answers, saveProgress]);

  const handleRestart = () => {
    setCurrentIndex(0); setSelectedIndex(null); setAnswers({});
    setScore(0); setFinished(false); setMode('learn');
  };

  if (!lesson) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <p className="text-muted-foreground mb-4">Lesson not found.</p>
        <Link to="/grammar"><Button variant="outline">Back to Grammar</Button></Link>
      </div>
    );
  }

  // ── FINISHED SCREEN ───────────────────────────────────────
  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const grade = pct >= 90 ? { label: 'Excellent!', emoji: '🏆', cls: 'text-emerald-600' }
      : pct >= 70 ? { label: 'Good job!', emoji: '👍', cls: 'text-blue-600' }
      : pct >= 50 ? { label: 'Keep going!', emoji: '💪', cls: 'text-amber-600' }
      : { label: 'More practice needed', emoji: '📖', cls: 'text-red-600' };

    return (
      <div className="page-transition max-w-xl mx-auto py-12 text-center space-y-6">
        <div className="text-6xl">{grade.emoji}</div>
        <div>
          <h2 className={`text-2xl font-serif font-bold ${grade.cls}`}>{grade.label}</h2>
          <p className="text-muted-foreground mt-1">{lesson.title}</p>
        </div>
        <Card>
          <CardContent className="py-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-srs-good">{score}</div>
                <div className="text-xs text-muted-foreground">Correct</div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${grade.cls}`}>{pct}%</div>
                <div className="text-xs text-muted-foreground">Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-srs-again">{questions.length - score}</div>
                <div className="text-xs text-muted-foreground">Missed</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={handleRestart} className="gap-2">
            <RotateCcw className="h-4 w-4" />Try Again
          </Button>
          <Link to="/grammar"><Button>Back to Grammar</Button></Link>
        </div>
      </div>
    );
  }

  // ── LEARN MODE ────────────────────────────────────────────
  if (mode === 'learn') {
    return (
      <div className="page-transition max-w-5xl mx-auto space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-start gap-3">
          <Link to="/grammar">
            <Button variant="ghost" size="icon" className="mt-1"><ArrowLeft className="h-5 w-5" /></Button>
          </Link>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="text-xs">{lesson.level}</Badge>
              <Badge variant="secondary" className="text-xs">{questions.length} quiz questions</Badge>
            </div>
            <h1 className="mt-2 text-3xl font-serif font-bold leading-tight">{lesson.title}</h1>
            <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{lesson.description}</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="space-y-6">
            {/* Grammar tip card */}
            <Card className="border-blue-200 bg-blue-50/60">
              <CardContent className="py-5">
                <div className="flex gap-3">
                  <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-950 mb-2">Core Rule</p>
                    <p className="text-sm text-blue-900 leading-relaxed">{lesson.grammarTip}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lesson content if available */}
            {lessonContent && (
              <Card>
                <CardHeader className="border-b bg-muted/25 pb-4">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />Examples & Notes
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div
                    className="lesson-content"
                    dangerouslySetInnerHTML={{ __html: typeof lessonContent === 'string' ? lessonContent : String(lessonContent) }}
                  />
                </CardContent>
              </Card>
            )}
          </div>

          {/* Quiz panel */}
          <Card className="lg:sticky lg:top-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <PenLine className="h-4 w-4" />Practice Quiz
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border bg-muted/25 p-3">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Layers className="h-4 w-4 text-primary" />
                  {questions.length} questions
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Starts with 5 warm-ups, then ramps into medium and hard Goethe-style checks.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
                  <Badge variant="outline" className="border-emerald-300 text-emerald-700">{difficultyCounts.easy} easy</Badge>
                  <Badge variant="outline" className="border-amber-300 text-amber-700">{difficultyCounts.medium} medium</Badge>
                  <Badge variant="outline" className="border-red-300 text-red-700">{difficultyCounts.hard} hard</Badge>
                </div>
              </div>
              {prevProgress && (
                <div className="flex items-start gap-2 text-sm p-3 bg-amber-50 text-amber-950 border border-amber-200 rounded-lg">
                  <Trophy className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>Previous best: <strong>{prevProgress.score}/{prevProgress.totalQuestions}</strong>
                  {' '}({Math.round((prevProgress.score / prevProgress.totalQuestions) * 100)}%)</span>
                </div>
              )}
              <Button onClick={() => { setMode('quiz'); setCurrentIndex(0); setSelectedIndex(null); setAnswers({}); setScore(0); setFinished(false); }} className="w-full gap-2">
                <PenLine className="h-4 w-4" />Start Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ── QUIZ MODE ─────────────────────────────────────────────
  const difficulty = question?.difficulty;

  return (
    <div className="page-transition max-w-2xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => setMode('learn')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">{lesson.title}</p>
            <p className="text-sm text-muted-foreground">{currentIndex + 1} / {questions.length}</p>
          </div>
          <Progress value={pct} className="h-1.5 mt-1" />
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className="text-srs-good font-medium">✓ {score} correct</span>
        <span className="text-srs-again font-medium">✗ {wrongCount} wrong</span>
        {difficulty && (
          <Badge variant="outline" className={cn("text-xs ml-auto",
            difficulty === 'easy' ? 'text-emerald-600 border-emerald-300' :
            difficulty === 'hard' ? 'text-red-600 border-red-300' : 'text-amber-600 border-amber-300'
          )}>{difficulty}</Badge>
        )}
      </div>

      {/* Question card */}
      <Card>
        <CardContent className="pt-8 pb-6">
          <p className="text-xl font-medium text-center mb-8 leading-relaxed">{question.question}</p>

          <div className="grid grid-cols-1 gap-3">
            {question.options.map((opt, idx) => {
              const isSelected = selectedIndex === idx;
              const isAnswer = selectedIndex !== null && idx === question.correctIndex;
              const isWrong = isSelected && !isCorrect;

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={selectedIndex !== null}
                  className={cn(
                    "w-full text-left px-5 py-3.5 rounded-lg border-2 transition-all font-medium",
                    selectedIndex === null
                      ? "border-border hover:border-primary hover:bg-primary/5 cursor-pointer"
                      : isAnswer
                        ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                        : isWrong
                          ? "border-red-400 bg-red-50 text-red-900"
                          : "border-border opacity-50",
                    "flex items-center justify-between gap-3"
                  )}
                >
                  <span>{opt}</span>
                  {isAnswer && <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />}
                  {isWrong && <XCircle className="h-5 w-5 text-red-500 shrink-0" />}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Explanation */}
      {selectedIndex !== null && question.explanation && (
        <Card className={cn(
          "border-l-4",
          isCorrect ? "border-l-emerald-500 bg-emerald-50/50" : "border-l-red-400 bg-red-50/50"
        )}>
          <CardContent className="py-4">
            <div className="flex gap-3 items-start">
              {isCorrect
                ? <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                : <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />}
              <div>
                <p className={`font-semibold text-sm mb-1 ${isCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                  {isCorrect ? 'Correct!' : `Incorrect — the answer is: ${question.options[question.correctIndex]}`}
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">{question.explanation}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Next button */}
      {selectedIndex !== null && (
        <Button onClick={handleNext} className="w-full gap-2" size="lg">
          {currentIndex + 1 >= questions.length ? (
            <><Trophy className="h-4 w-4" />Finish Lesson</>
          ) : (
            <>Next Question <ArrowRight className="h-4 w-4" /></>
          )}
        </Button>
      )}
    </div>
  );
}
