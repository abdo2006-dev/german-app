import { useMemo, useState } from 'react';
import { AlertCircle, ArrowRightLeft, Languages, Loader2, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type Direction = 'de-en' | 'en-de';

type VocabularyItem = {
  term: string;
  meaning: string;
  partOfSpeech: string;
  usedAs: string;
  exampleGerman: string;
  exampleEnglish: string;
  memoryHook: string;
  memoryImage: string;
  recallPrompt: string;
};

type TranslateResult = {
  direction: Direction;
  translation: string;
  literalTranslation: string;
  naturalAlternative: string;
  keyVocabulary: VocabularyItem[];
  memorySummary: string;
  grammarNotes: string[];
  provider: string;
};

const examples = {
  'de-en': [
    'Ich habe mich daran gewöhnt, früh aufzustehen.',
    'Trotz des schlechten Wetters sind wir spazieren gegangen.',
    'Er hat den Termin verschoben, weil er noch arbeiten musste.',
  ],
  'en-de': [
    'I got used to waking up early.',
    'Even though the weather was bad, we went for a walk.',
    'I need to postpone the appointment because I still have to work.',
  ],
} satisfies Record<Direction, string[]>;

export default function Translator() {
  const [direction, setDirection] = useState<Direction>('de-en');
  const [input, setInput] = useState('');
  const [result, setResult] = useState<TranslateResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canTranslate = input.trim().length > 0 && !loading;
  const activeExamples = useMemo(() => examples[direction], [direction]);

  async function translate() {
    if (!canTranslate) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/smart-translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: input.trim(), direction }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `Translation error ${res.status}`);
      setResult(data as TranslateResult);
    } catch (err: any) {
      setError(err.message ?? 'Could not translate this text.');
    } finally {
      setLoading(false);
    }
  }

  function useExample(example: string) {
    setInput(example);
    setResult(null);
    setError(null);
  }

  return (
    <div className="page-transition mx-auto max-w-6xl space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Languages className="h-3.5 w-3.5 text-primary" />
            Smart Translator
          </div>
          <h1 className="font-serif text-3xl font-bold">Translate & Remember</h1>
          <p className="mt-1 max-w-2xl text-muted-foreground">
            Translate German or English, then turn the important German words into memorable examples and recall hooks.
          </p>
        </div>

        <Select value={direction} onValueChange={(value) => {
          setDirection(value as Direction);
          setResult(null);
          setError(null);
        }}>
          <SelectTrigger className="h-10 w-full sm:w-[210px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="de-en">German → English</SelectItem>
            <SelectItem value="en-de">English → German</SelectItem>
          </SelectContent>
        </Select>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <Card className="overflow-hidden">
          <CardHeader className="border-b bg-muted/25 pb-4">
            <CardTitle className="flex items-center gap-2 text-base">
              <ArrowRightLeft className="h-4 w-4 text-primary" />
              {direction === 'de-en' ? 'German text' : 'English text'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-5">
            <Textarea
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
                setError(null);
              }}
              placeholder={direction === 'de-en' ? 'Paste German text here...' : 'Paste English text here...'}
              className="min-h-[260px] resize-y text-base leading-relaxed"
            />

            <div className="flex flex-wrap gap-2">
              {activeExamples.map((example) => (
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

            {error && (
              <div className="flex gap-3 rounded-md border border-destructive/30 bg-destructive/5 p-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <p className="text-sm text-muted-foreground">{error}</p>
              </div>
            )}

            <Button onClick={translate} disabled={!canTranslate} className="w-full gap-2">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              {loading ? 'Translating...' : 'Translate Smartly'}
            </Button>
          </CardContent>
        </Card>

        <TranslatorResult result={result} loading={loading} />
      </div>
    </div>
  );
}

function TranslatorResult({ result, loading }: { result: TranslateResult | null; loading: boolean }) {
  if (loading) {
    return (
      <Card className="min-h-[520px]">
        <CardContent className="flex min-h-[520px] flex-col items-center justify-center gap-3 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <div>
            <p className="font-medium">Translating with context...</p>
            <p className="mt-1 text-sm text-muted-foreground">Building meaning, examples, and memory hooks.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!result) {
    return (
      <Card className="min-h-[520px]">
        <CardContent className="flex min-h-[520px] flex-col items-center justify-center gap-3 text-center">
          <div className="rounded-full border bg-muted/40 p-4">
            <Languages className="h-8 w-8 text-primary" />
          </div>
          <div>
            <p className="font-medium">Your translation will appear here</p>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              The important German words will be pulled out with usage notes and quick recall prompts.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-3">
            <CardTitle className="text-base">Translation</CardTitle>
            <Badge variant="secondary">{result.provider}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="rounded-md border bg-primary/[0.04] p-4 text-base font-medium leading-relaxed">
            {result.translation}
          </div>
          {result.literalTranslation && (
            <ResultNote label="Literal" value={result.literalTranslation} />
          )}
          {result.naturalAlternative && (
            <ResultNote label="Natural alternative" value={result.naturalAlternative} />
          )}
          {result.memorySummary && (
            <div className="rounded-md border border-amber-200 bg-amber-50/70 p-3 text-sm leading-relaxed text-amber-950">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-900">Memory strategy</p>
              <p className="mt-1">{result.memorySummary}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {result.keyVocabulary.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Words Worth Remembering</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {result.keyVocabulary.map((item, index) => (
              <MemoryWordCard key={`${item.term}-${index}`} item={item} />
            ))}
          </CardContent>
        </Card>
      )}

      {result.grammarNotes.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Grammar Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {result.grammarNotes.map((note, index) => (
              <p key={`${note}-${index}`} className="rounded-md border bg-muted/25 p-3 text-sm leading-relaxed text-muted-foreground">
                {note}
              </p>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function ResultNote({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="rounded-md border bg-background p-3 text-sm leading-relaxed text-muted-foreground">{value}</p>
    </div>
  );
}

function MemoryWordCard({ item }: { item: VocabularyItem }) {
  return (
    <div className="rounded-md border bg-background p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-bold">{item.term}</p>
          <p className="mt-1 text-sm font-medium text-primary">{item.meaning}</p>
        </div>
        {item.partOfSpeech && <Badge variant="outline" className="w-fit rounded-full">{item.partOfSpeech}</Badge>}
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {item.usedAs && <MiniBlock label="Used as" value={item.usedAs} />}
        {(item.exampleGerman || item.exampleEnglish) && (
          <MiniBlock
            label="Meaningful sentence"
            value={[
              item.exampleGerman,
              item.exampleEnglish ? `"${item.exampleEnglish}"` : '',
            ].filter(Boolean).join('\n')}
            strong
          />
        )}
      </div>

      {(item.memoryHook || item.memoryImage || item.recallPrompt) && (
        <div className="mt-3 rounded-md border border-amber-200 bg-amber-50/70 p-3 text-sm leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-900">Memory spark</p>
          {item.memoryHook && <p className="mt-1 font-medium text-amber-950">{item.memoryHook}</p>}
          {item.memoryImage && <p className="mt-2 text-amber-950/85">{item.memoryImage}</p>}
          {item.recallPrompt && (
            <p className="mt-2 rounded border border-amber-200 bg-background/70 px-2.5 py-2 text-amber-950">
              {item.recallPrompt}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function MiniBlock({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  if (!value) return null;
  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className={cn('whitespace-pre-line rounded-md bg-muted/30 p-3 text-sm leading-relaxed', strong && 'font-medium')}>
        {value}
      </p>
    </div>
  );
}
