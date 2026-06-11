import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle2, FileText, ListChecks } from 'lucide-react';
import { shehataA2Stats, shehataA2Topics } from '@/data/shehataA2';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function ShehataA2() {
  const [selectedId, setSelectedId] = useState(shehataA2Topics[0]?.id ?? '');
  const selectedTopic = useMemo(
    () => shehataA2Topics.find((topic) => topic.id === selectedId) ?? shehataA2Topics[0],
    [selectedId]
  );

  if (!selectedTopic) return null;

  return (
    <div className="page-transition mx-auto max-w-6xl space-y-6">
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
          </div>
          <h1 className="mt-2 font-serif text-3xl font-bold leading-tight">Shehata A2 PDF Workbook</h1>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Separate study view based on <span className="font-medium">{shehataA2Stats.pdfName}</span>.
            The topics are grouped by relevance and keep their own explanations, examples, exercises, and answer keys.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
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
                  <span className="block text-xs font-medium text-muted-foreground">Group {index + 1} · {topic.source}</span>
                  <span className="mt-0.5 block font-medium leading-snug">{topic.title}</span>
                </button>
              );
            })}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader className="border-b bg-muted/25">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">{selectedTopic.source}</Badge>
                <Badge variant="secondary">{selectedTopic.pages}</Badge>
              </div>
              <CardTitle className="font-serif text-2xl">{selectedTopic.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <section className="space-y-2">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Explanation Focus
                </h2>
                <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{selectedTopic.focus}</p>
                <ul className="grid gap-2 md:grid-cols-2">
                  {selectedTopic.explanations.map((item) => (
                    <li key={item} className="rounded-lg border bg-muted/20 p-3 text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold">Examples From This Topic</h2>
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full min-w-[42rem] text-sm">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="px-4 py-3 text-left">Type</th>
                        <th className="px-4 py-3 text-left">German</th>
                        <th className="px-4 py-3 text-left">Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedTopic.examples.map((example) => (
                        <tr key={`${example.label}-${example.german}`} className="border-t">
                          <td className="px-4 py-3 font-medium">{example.label}</td>
                          <td className="px-4 py-3">{example.german}</td>
                          <td className="px-4 py-3 text-muted-foreground">{example.english}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <ListChecks className="h-5 w-5 text-primary" />
                  Exercises With Answer Key
                </h2>
                <div className="grid gap-3">
                  {selectedTopic.exercises.map((exercise, index) => (
                    <div key={`${selectedTopic.id}-${index}`} className="rounded-lg border bg-card p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Exercise {index + 1}</p>
                      <p className="mt-1 text-sm font-medium leading-relaxed">{exercise.prompt}</p>
                      <div className="mt-3 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-950">
                        <div className="flex items-center gap-2 font-semibold">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          Correct answer: {exercise.answer}
                        </div>
                        {exercise.note && <p className="mt-1 leading-relaxed text-emerald-900/80">{exercise.note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
