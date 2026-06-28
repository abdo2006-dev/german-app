import { useMemo, useState } from 'react';
import { AlertCircle, BookOpenCheck, CheckCircle2, Languages, Loader2, Send, Sparkles, Wand2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type HelperMode = 'sentence' | 'paragraph';
type HelperLevel = 'A2' | 'B1' | 'both';

type VocabularyItem = {
  word: string;
  translation: string;
  note?: string;
};

type RuleItem = {
  title: string;
  explanation: string;
  example?: string;
};

type HelperResult = {
  mode: HelperMode;
  isGrammaticallyCorrect?: boolean;
  correctForm?: string;
  naturalAlternative?: string;
  translation?: string;
  paragraphs?: {
    a2?: string;
    b1?: string;
  };
  translations?: {
    a2?: string;
    b1?: string;
  };
  vocabulary?: VocabularyItem[];
  rules?: RuleItem[];
};

const sentenceExamples = [
  'Diese plant ist sehr gifting und deadly.',
  'Diese Sommer war ich in der Türkei.',
  'Ich freue mich für dich zu sehen.',
];

const wordExamples = [
  'Sommer, Türkei, schwimmen, Freunde',
  'Prüfung, nervös, vorbereiten, bestehen',
  'Wohnung, umziehen, Nachbarn, ruhig',
];

export default function GermanHelper() {
  const [mode, setMode] = useState<HelperMode>('sentence');
  const [level, setLevel] = useState<HelperLevel>('A2');
  const [sentence, setSentence] = useState('');
  const [words, setWords] = useState('');
  const [result, setResult] = useState<HelperResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const input = mode === 'sentence' ? sentence : words;
  const canSubmit = input.trim().length >= 2 && !loading;

  const exampleList = useMemo(() => (mode === 'sentence' ? sentenceExamples : wordExamples), [mode]);

  async function runHelper() {
    if (!canSubmit) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/german-helper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode,
          level,
          input: input.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || `API error ${res.status}`);
      }

      setResult(data.result as HelperResult);
    } catch (err: any) {
      setError(err.message ?? 'The helper could not generate a response.');
    } finally {
      setLoading(false);
    }
  }

  function useExample(example: string) {
    if (mode === 'sentence') {
      setSentence(example);
    } else {
      setWords(example);
    }
    setError(null);
    setResult(null);
  }

  return (
    <div className="page-transition mx-auto max-w-5xl space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Groq Helper
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-normal">Grammar & Sentence Helper</h1>
          <p className="mt-1 max-w-2xl text-muted-foreground">
            Correct German, revise grammar rules, and turn vocabulary into level-appropriate sentences.
          </p>
        </div>

        <div className="flex w-full gap-2 sm:w-auto">
          <Select value={level} onValueChange={(value) => setLevel(value as HelperLevel)}>
            <SelectTrigger className="h-10 w-full sm:w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A2">A2</SelectItem>
              <SelectItem value="B1">B1</SelectItem>
              <SelectItem value="both">A2 + B1</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)]">
        <Card className="overflow-hidden">
          <CardHeader className="border-b bg-muted/30 pb-4">
            <Tabs value={mode} onValueChange={(value) => {
              setMode(value as HelperMode);
              setError(null);
              setResult(null);
            }}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sentence" className="gap-2">
                  <Wand2 className="h-4 w-4" />
                  Sentence
                </TabsTrigger>
                <TabsTrigger value="paragraph" className="gap-2">
                  <BookOpenCheck className="h-4 w-4" />
                  Paragraph
                </TabsTrigger>
              </TabsList>

              <TabsContent value="sentence" className="mt-5 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="sentence-input">German sentence</label>
                  <Textarea
                    id="sentence-input"
                    value={sentence}
                    onChange={(event) => setSentence(event.target.value)}
                    placeholder="Diese Sommer war ich in der Türkei."
                    className="min-h-[168px] resize-none text-base leading-relaxed"
                  />
                </div>
              </TabsContent>

              <TabsContent value="paragraph" className="mt-5 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="words-input">Vocabulary words</label>
                  <Textarea
                    id="words-input"
                    value={words}
                    onChange={(event) => setWords(event.target.value)}
                    placeholder="Sommer, Türkei, schwimmen, Freunde"
                    className="min-h-[168px] resize-none text-base leading-relaxed"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex flex-wrap gap-2">
              {exampleList.map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => useExample(example)}
                  className="rounded-full border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {example}
                </button>
              ))}
            </div>

            <Button onClick={runHelper} disabled={!canSubmit} className="w-full gap-2">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {loading ? 'Checking...' : mode === 'sentence' ? 'Check Sentence' : 'Generate Paragraph'}
            </Button>
          </CardHeader>

          <CardContent className="space-y-4 p-5">
            <LevelNotes level={level} />
            {error && <ErrorBox message={error} />}
          </CardContent>
        </Card>

        <ResultPanel result={result} loading={loading} mode={mode} />
      </div>
    </div>
  );
}

function LevelNotes({ level }: { level: HelperLevel }) {
  const notes = {
    A2: ['Simple sentence structure', 'Common exam vocabulary', 'No zu + Infinitiv'],
    B1: ['Subordinate clauses', 'More natural connectors', 'Optional zu + Infinitiv'],
    both: ['A2 version', 'B1 version', 'Side-by-side translation'],
  } satisfies Record<HelperLevel, string[]>;

  return (
    <div className="rounded-md border bg-background p-3">
      <div className="mb-2 flex items-center gap-2 text-sm font-medium">
        <Languages className="h-4 w-4 text-primary" />
        {level === 'both' ? 'A2 + B1' : level} output
      </div>
      <div className="flex flex-wrap gap-1.5">
        {notes[level].map((note) => (
          <Badge key={note} variant="secondary" className="rounded-full">
            {note}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function ErrorBox({ message }: { message: string }) {
  return (
    <div className="flex gap-3 rounded-md border border-destructive/30 bg-destructive/5 p-3">
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
      <div>
        <p className="font-medium text-destructive">Helper unavailable</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}

function ResultPanel({ result, loading, mode }: { result: HelperResult | null; loading: boolean; mode: HelperMode }) {
  if (loading) {
    return (
      <Card className="min-h-[430px]">
        <CardContent className="flex h-full min-h-[430px] flex-col items-center justify-center gap-3 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <div>
            <p className="font-medium">Thinking in German...</p>
            <p className="mt-1 text-sm text-muted-foreground">Checking grammar, phrasing, vocabulary, and level.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!result) {
    return (
      <Card className="min-h-[430px]">
        <CardContent className="flex h-full min-h-[430px] flex-col items-center justify-center gap-3 text-center">
          <div className="rounded-full border bg-muted/40 p-4">
            {mode === 'sentence' ? <Wand2 className="h-8 w-8 text-primary" /> : <BookOpenCheck className="h-8 w-8 text-primary" />}
          </div>
          <div>
            <p className="font-medium">Your answer will appear here</p>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              The helper separates corrections, natural phrasing, vocabulary, and grammar reminders.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {result.mode === 'sentence' ? <SentenceResult result={result} /> : <ParagraphResult result={result} />}
      <VocabularyTable vocabulary={result.vocabulary ?? []} />
      <RuleCards rules={result.rules ?? []} />
    </div>
  );
}

function SentenceResult({ result }: { result: HelperResult }) {
  const correct = result.isGrammaticallyCorrect === true;

  return (
    <Card className={cn('border-l-4', correct ? 'border-l-srs-good' : 'border-l-primary')}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <CheckCircle2 className={cn('h-5 w-5', correct ? 'text-srs-good' : 'text-primary')} />
          Sentence Result
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ResultBlock label="Correct form" value={result.correctForm} highlight />
        {result.naturalAlternative && (
          <ResultBlock label="Natural alternative" value={result.naturalAlternative} />
        )}
        {result.translation && (
          <ResultBlock label="Translation" value={result.translation} muted />
        )}
      </CardContent>
    </Card>
  );
}

function ParagraphResult({ result }: { result: HelperResult }) {
  const a2 = result.paragraphs?.a2;
  const b1 = result.paragraphs?.b1;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <BookOpenCheck className="h-5 w-5 text-primary" />
          Generated Paragraph
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-2">
        {a2 && (
          <ParagraphCard level="A2" paragraph={a2} translation={result.translations?.a2} />
        )}
        {b1 && (
          <ParagraphCard level="B1" paragraph={b1} translation={result.translations?.b1} />
        )}
      </CardContent>
    </Card>
  );
}

function ParagraphCard({ level, paragraph, translation }: { level: 'A2' | 'B1'; paragraph: string; translation?: string }) {
  return (
    <div className="rounded-md border bg-background p-4">
      <Badge variant={level === 'A2' ? 'secondary' : 'default'}>{level}</Badge>
      <p className="mt-3 text-base leading-relaxed">{paragraph}</p>
      {translation && (
        <p className="mt-3 border-t pt-3 text-sm leading-relaxed text-muted-foreground">{translation}</p>
      )}
    </div>
  );
}

function ResultBlock({ label, value, highlight, muted }: { label: string; value?: string; highlight?: boolean; muted?: boolean }) {
  if (!value) return null;

  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className={cn(
        'rounded-md border p-3 text-base leading-relaxed',
        highlight ? 'border-primary/30 bg-primary/5 font-medium' : 'bg-background',
        muted && 'text-muted-foreground'
      )}>
        {value}
      </div>
    </div>
  );
}

function VocabularyTable({ vocabulary }: { vocabulary: VocabularyItem[] }) {
  if (vocabulary.length === 0) return null;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Vocabulary</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr className="border-b text-left text-xs uppercase tracking-wide text-muted-foreground">
              <th className="py-2 pr-4 font-semibold">German</th>
              <th className="py-2 pr-4 font-semibold">English</th>
              <th className="py-2 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {vocabulary.map((item, index) => (
              <tr key={`${item.word}-${index}`} className="border-b last:border-0">
                <td className="py-3 pr-4 font-semibold">{item.word}</td>
                <td className="py-3 pr-4">{item.translation}</td>
                <td className="py-3 text-muted-foreground">{item.note || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

function RuleCards({ rules }: { rules: RuleItem[] }) {
  if (rules.length === 0) return null;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Rule Reminder</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {rules.map((rule, index) => (
          <div key={`${rule.title}-${index}`} className="rounded-md border bg-muted/25 p-4">
            <p className="font-semibold">{rule.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{rule.explanation}</p>
            {rule.example && (
              <p className="mt-3 rounded-md bg-background px-3 py-2 text-sm font-medium">{rule.example}</p>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
