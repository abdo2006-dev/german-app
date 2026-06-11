import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  FileText,
  KeyRound,
  Layers3,
  ListChecks,
  LockKeyhole,
  XCircle,
} from 'lucide-react';
import { shehataA2Stats, shehataA2Topics } from '@/data/shehataA2';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export default function ShehataA2() {
  const [selectedId, setSelectedId] = useState(shehataA2Topics[0]?.id ?? '');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const selectedTopic = useMemo(
    () => shehataA2Topics.find((topic) => topic.id === selectedId) ?? shehataA2Topics[0],
    [selectedId]
  );

  const answeredCount = useMemo(() => {
    if (!selectedTopic) return 0;
    return selectedTopic.interactiveQuestions.filter((question) => selectedAnswers[`${selectedTopic.id}:${question.id}`]).length;
  }, [selectedAnswers, selectedTopic]);

  if (!selectedTopic) return null;

  const chooseAnswer = (questionId: string, answer: string) => {
    setSelectedAnswers((current) => ({
      ...current,
      [`${selectedTopic.id}:${questionId}`]: answer,
    }));
  };

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
            <Badge variant="secondary">{shehataA2Stats.pageCount} pages</Badge>
            <Badge variant="secondary">{shehataA2Stats.interactiveQuestionCount} practice checks</Badge>
          </div>
          <h1 className="mt-2 font-serif text-3xl font-bold leading-tight">Shehata A2 PDF Workbook</h1>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Separate source-based view for <span className="font-medium">{shehataA2Stats.pdfName}</span>, grouped into
            lesson blocks with the original explanations, exercises, and hidden answer-key practice.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[19rem_minmax(0,1fr)] lg:items-start">
        <Card className="lg:sticky lg:top-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <FileText className="h-4 w-4" />
              PDF Groups
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {shehataA2Topics.map((topic, index) => {
              const active = topic.id === selectedTopic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedId(topic.id)}
                  className={cn(
                    'w-full rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
                    active ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/40 hover:bg-muted/50'
                  )}
                >
                  <span className="block text-xs font-medium text-muted-foreground">
                    Group {index + 1} · {topic.source}
                  </span>
                  <span className="mt-0.5 block font-medium leading-snug">{topic.title}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {topic.lessons.length} lessons · {topic.interactiveQuestions.length} checks
                  </span>
                </button>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b bg-muted/25">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{selectedTopic.source}</Badge>
              <Badge variant="secondary">{selectedTopic.pages}</Badge>
              <Badge variant="secondary">{selectedTopic.sourcePageCount} source pages</Badge>
              <Badge variant="secondary">{selectedTopic.answerPageCount} answer pages</Badge>
            </div>
            <CardTitle className="font-serif text-2xl">{selectedTopic.title}</CardTitle>
            <p className="max-w-4xl text-sm leading-relaxed text-muted-foreground">{selectedTopic.summary}</p>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="source" className="space-y-5">
              <TabsList className="grid h-auto w-full grid-cols-3 gap-1 p-1">
                <TabsTrigger value="source" className="gap-2 py-2">
                  <BookOpen className="h-4 w-4" />
                  Lessons
                </TabsTrigger>
                <TabsTrigger value="practice" className="gap-2 py-2">
                  <ListChecks className="h-4 w-4" />
                  Practice
                </TabsTrigger>
                <TabsTrigger value="answers" className="gap-2 py-2">
                  <KeyRound className="h-4 w-4" />
                  Answers
                </TabsTrigger>
              </TabsList>

              <TabsContent value="source" className="mt-0 space-y-4">
                <div className="grid gap-3 md:grid-cols-3">
                  <StatTile icon={Layers3} label="Lessons" value={String(selectedTopic.lessons.length)} />
                  <StatTile icon={BookOpen} label="Source pages" value={String(selectedTopic.sourcePageCount)} />
                  <StatTile icon={LockKeyhole} label="Hidden answer pages" value={String(selectedTopic.answerPageCount)} />
                </div>

                <Accordion type="multiple" defaultValue={[selectedTopic.lessons[0]?.folge ?? '']} className="rounded-lg border">
                  {selectedTopic.lessons.map((lesson) => (
                    <AccordionItem key={lesson.folge} value={lesson.folge} className="border-b last:border-b-0">
                      <AccordionTrigger className="px-4 text-left hover:no-underline">
                        <div className="min-w-0 space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline">{lesson.folge}</Badge>
                            <span className="font-semibold">{lesson.title}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            PDF pages {lesson.printedPageStart}-{lesson.printedPageEnd} · {lesson.sourcePages.length} lesson pages ·{' '}
                            {lesson.answerPages.length} hidden answer pages
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        {lesson.sourcePages.length > 0 ? (
                          <div className="space-y-3">
                            {lesson.sourcePages.map((page) => (
                              <SourcePage key={`${lesson.folge}-${page.page}`} page={page.page} text={page.text} />
                            ))}
                          </div>
                        ) : (
                          <div className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
                            This booklet slice only contains answer-key continuation pages.
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="practice" className="mt-0 space-y-4">
                <div className="rounded-lg border bg-muted/25 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold">Answer-Key Practice</h2>
                      <p className="text-sm text-muted-foreground">
                        {answeredCount} of {selectedTopic.interactiveQuestions.length} answered in this group.
                      </p>
                    </div>
                    <Badge variant="secondary">{selectedTopic.interactiveQuestions.length} checks</Badge>
                  </div>
                </div>

                {selectedTopic.interactiveQuestions.length > 0 ? (
                  <div className="grid gap-3">
                    {selectedTopic.interactiveQuestions.map((question, index) => {
                      const key = `${selectedTopic.id}:${question.id}`;
                      const selected = selectedAnswers[key];
                      const isCorrect = selected === question.answer;

                      return (
                        <div key={question.id} className="rounded-lg border bg-card p-4">
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                Check {index + 1}
                              </p>
                              <h3 className="mt-1 text-sm font-semibold leading-relaxed">{question.prompt}</h3>
                              <p className="mt-1 text-xs text-muted-foreground">{question.instruction}</p>
                            </div>
                            {selected && (
                              <Badge variant={isCorrect ? 'default' : 'destructive'}>{isCorrect ? 'Correct' : 'Review'}</Badge>
                            )}
                          </div>

                          <div className="mt-4 grid gap-2 md:grid-cols-2">
                            {question.options.map((option) => {
                              const chosen = selected === option;
                              const revealCorrect = selected && option === question.answer;
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => chooseAnswer(question.id, option)}
                                  className={cn(
                                    'rounded-lg border px-3 py-2 text-left text-sm transition-colors',
                                    !selected && 'hover:border-primary/50 hover:bg-primary/5',
                                    chosen && isCorrect && 'border-emerald-500 bg-emerald-50 text-emerald-950',
                                    chosen && !isCorrect && 'border-destructive bg-destructive/10 text-destructive',
                                    revealCorrect && !chosen && 'border-emerald-500 bg-emerald-50 text-emerald-950'
                                  )}
                                >
                                  {option}
                                </button>
                              );
                            })}
                          </div>

                          {selected && (
                            <div
                              className={cn(
                                'mt-3 flex items-start gap-2 rounded-lg border p-3 text-sm',
                                isCorrect
                                  ? 'border-emerald-200 bg-emerald-50 text-emerald-950'
                                  : 'border-amber-200 bg-amber-50 text-amber-950'
                              )}
                            >
                              {isCorrect ? (
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                              ) : (
                                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                              )}
                              <p>Correct answer: {question.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
                    This group has source exercises, but the PDF answer key for these pages was not structured enough to turn into multiple choice.
                  </div>
                )}
              </TabsContent>

              <TabsContent value="answers" className="mt-0 space-y-4">
                <div className="rounded-lg border bg-muted/25 p-4">
                  <div className="flex items-center gap-2">
                    <LockKeyhole className="h-4 w-4 text-primary" />
                    <h2 className="text-lg font-semibold">Collapsed Answer Key</h2>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The PDF solutions are included here, but each lesson stays closed until you open it.
                  </p>
                </div>

                <div className="space-y-3">
                  {selectedTopic.lessons.map((lesson) => (
                    <details key={`${lesson.folge}-answers`} className="rounded-lg border bg-card">
                      <summary className="cursor-pointer list-none px-4 py-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline">{lesson.folge}</Badge>
                            <span className="font-semibold">{lesson.title}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{lesson.answerPages.length} pages</span>
                        </div>
                      </summary>
                      <div className="space-y-3 border-t p-4">
                        {lesson.answerPages.length > 0 ? (
                          lesson.answerPages.map((page) => <SourcePage key={`${lesson.folge}-answer-${page.page}`} page={page.page} text={page.text} />)
                        ) : (
                          <p className="text-sm text-muted-foreground">No answer-key page was detected for this lesson slice.</p>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatTile({ icon: Icon, label, value }: { icon: typeof BookOpen; label: string; value: string }) {
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

function SourcePage({ page, text }: { page: number; text: string }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-background">
      <div className="flex items-center justify-between border-b bg-muted/40 px-3 py-2">
        <Badge variant="secondary">PDF page {page}</Badge>
      </div>
      <ScrollArea className="max-h-[28rem]">
        <pre className="whitespace-pre-wrap p-4 font-sans text-sm leading-7 text-foreground">{text}</pre>
      </ScrollArea>
    </div>
  );
}
