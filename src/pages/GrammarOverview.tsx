import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { grammarLevels, getLessonsByLevel } from '@/data/grammar';
import { useGrammarStore } from '@/store/grammarStore';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, BookOpen, Lock, FileText, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const levelConfig: Record<string, { color: string; bg: string; desc: string }> = {
  A1: { color: 'text-emerald-700', bg: 'bg-emerald-100', desc: 'Beginner — foundations of German' },
  A2: { color: 'text-teal-700', bg: 'bg-teal-100', desc: 'Elementary — everyday communication' },
  B1: { color: 'text-blue-700', bg: 'bg-blue-100', desc: 'Intermediate — confident conversations' },
  B2: { color: 'text-violet-700', bg: 'bg-violet-100', desc: 'Upper intermediate — complex topics' },
  C1: { color: 'text-rose-700', bg: 'bg-rose-100', desc: 'Advanced — near-native fluency' },
};

export default function GrammarOverview() {
  const { progress } = useGrammarStore();

  const progressMap = useMemo(() => {
    const m = new Map<string, { score: number; total: number; pct: number }>();
    for (const p of progress) {
      const pct = p.totalQuestions > 0 ? Math.round((p.score / p.totalQuestions) * 100) : 0;
      m.set(p.lessonId, { score: p.score, total: p.totalQuestions, pct });
    }
    return m;
  }, [progress]);

  const totalLessons = grammarLevels.reduce((s, l) => s + getLessonsByLevel(l).length, 0);
  const totalDone = grammarLevels.reduce((s, l) => {
    return s + getLessonsByLevel(l).filter(lesson => progressMap.has(lesson.id)).length;
  }, 0);

  return (
    <div className="page-transition max-w-4xl mx-auto space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold">German Grammar</h1>
          <p className="text-muted-foreground mt-1">
            Structured lessons from A1 to C1 with explanations and interactive quizzes.
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{totalDone}/{totalLessons}</div>
          <div className="text-xs text-muted-foreground">lessons done</div>
          <Progress value={totalLessons > 0 ? (totalDone / totalLessons) * 100 : 0} className="h-1.5 w-24 mt-1" />
        </div>
      </div>

      <Link to="/grammar/shehata-a2">
        <Card className="border-teal-200 bg-teal-50/70 transition-all hover:border-teal-300 hover:shadow-md">
          <CardContent className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-teal-100 p-2 text-teal-700">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-serif text-xl font-bold text-teal-950">Shehata PDF A2 Workbook</h2>
                  <Badge variant="outline" className="border-teal-300 text-teal-700">Separate section</Badge>
                </div>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-teal-900/80">
                  Grouped lessons from the A2 PDF with explanations, examples, exercises, and answer keys.
                </p>
              </div>
            </div>
            <div className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-teal-700 px-4 py-2 text-sm font-medium text-white">
              Open Workbook <ArrowRight className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>

      {grammarLevels.map((level, levelIdx) => {
        const lessons = getLessonsByLevel(level);
        const done = lessons.filter(l => progressMap.has(l.id)).length;
        const pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0;
        const cfg = levelConfig[level];
        // Lock levels after A2 until previous level is 50%+ done
        const prevLevel = grammarLevels[levelIdx - 1];
        const prevLessons = prevLevel ? getLessonsByLevel(prevLevel) : [];
        const prevDone = prevLessons.filter(l => progressMap.has(l.id)).length;
        const isLocked = levelIdx > 1 && prevLessons.length > 0 && (prevDone / prevLessons.length) < 0.3;

        return (
          <section key={level} className={cn("space-y-3", isLocked && "opacity-60")}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge className={cn("text-sm px-3 py-1 font-bold", cfg.color, cfg.bg)}>{level}</Badge>
                <div>
                  <span className="font-medium text-sm">{cfg.desc}</span>
                  <p className="text-xs text-muted-foreground">{done}/{lessons.length} completed · {pct}%</p>
                </div>
              </div>
              <Progress value={pct} className="w-28 h-2" />
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {lessons.map((lesson) => {
                const prog = progressMap.get(lesson.id);
                const done = !!prog;
                const scorePct = prog?.pct ?? 0;

                return (
                  <Link key={lesson.id} to={isLocked ? '#' : `/grammar/${lesson.id}`}
                    onClick={e => isLocked && e.preventDefault()}>
                    <Card className={cn("h-full transition-all", !isLocked && "hover:shadow-md hover:border-primary/30 cursor-pointer", isLocked && "cursor-not-allowed")}>
                      <CardContent className="py-4 px-5">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0">
                            {isLocked ? (
                              <Lock className="h-4.5 w-4.5 text-muted-foreground" />
                            ) : done ? (
                              <CheckCircle className={cn("h-4.5 w-4.5", scorePct >= 70 ? 'text-emerald-500' : 'text-amber-500')} />
                            ) : (
                              <BookOpen className="h-4.5 w-4.5 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm leading-snug">{lesson.title}</p>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{lesson.description}</p>
                            {done && (
                              <div className="flex items-center gap-2 mt-2">
                                <Progress value={scorePct} className="h-1 flex-1" />
                                <span className={cn("text-xs font-medium shrink-0", scorePct >= 70 ? 'text-emerald-600' : 'text-amber-600')}>
                                  {scorePct}%
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
