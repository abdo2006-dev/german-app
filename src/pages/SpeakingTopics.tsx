import { useState } from 'react';
import { useFlashcardStore } from '@/store/flashcardStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, RefreshCw, Heart, Mic, AlertCircle, BookOpen, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type TopicEntry = {
  id: string;
  prompt: string;
  words: string[];
  level: string;
  savedAt: Date;
  favorited: boolean;
};

type FocusMode = 'recent' | 'weak' | 'mix' | 'free';

export default function SpeakingTopics() {
  const { cards, getWeakCards } = useFlashcardStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTopic, setCurrentTopic] = useState<string | null>(null);
  const [currentWords, setCurrentWords] = useState<string[]>([]);
  const [history, setHistory] = useState<TopicEntry[]>([]);
  const [focusMode, setFocusMode] = useState<FocusMode>('recent');
  const [customContext, setCustomContext] = useState('');
  const [copied, setCopied] = useState(false);

  const learnedCards = cards.filter(c => c.state === 'review' || c.reps > 0);
  const weakCards = getWeakCards(30);

  function pickVocabForMode(mode: FocusMode): string[] {
    if (mode === 'weak') {
      return weakCards.slice(0, 15).map(c => c.germanWord);
    }
    if (mode === 'recent') {
      // Most recently reviewed cards by updatedAt
      return [...learnedCards]
        .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
        .slice(0, 15)
        .map(c => c.germanWord);
    }
    if (mode === 'free') return [];
    // mix
    const mixed = [...learnedCards].sort(() => Math.random() - 0.5).slice(0, 15);
    return mixed.map(c => c.germanWord);
  }

  async function generate() {
    setLoading(true);
    setError(null);
    setCurrentTopic(null);

    const words = pickVocabForMode(focusMode);
    const wordList = words.length > 0 ? words.join(', ') : 'everyday German vocabulary';

    // Determine approximate level
    const reviewCount = learnedCards.length;
    const level = reviewCount < 50 ? 'A1/A2' : reviewCount < 200 ? 'A2/B1' : reviewCount < 500 ? 'B1/B2' : 'B2/C1';

    const prompt = focusMode === 'free' && customContext
      ? `Create a German speaking practice topic. Context: ${customContext}. Level: ${level}.`
      : `Create a German speaking practice prompt for level ${level} using these vocabulary words: ${wordList}.${customContext ? ` Additional context: ${customContext}` : ''}`;

    try {
      const res = await fetch('/api/speaking-topics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, words, level }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `API error ${res.status}`);
      }

      const data = await res.json();
      const topic = data.topic as string;

      setCurrentTopic(topic);
      setCurrentWords(words);

      const entry: TopicEntry = {
        id: crypto.randomUUID(),
        prompt: topic,
        words,
        level,
        savedAt: new Date(),
        favorited: false,
      };
      setHistory(h => [entry, ...h].slice(0, 20));
    } catch (err: any) {
      setError(err.message ?? 'Failed to generate topic. Check your API configuration.');
    } finally {
      setLoading(false);
    }
  }

  function toggleFavorite(id: string) {
    setHistory(h => h.map(e => e.id === id ? { ...e, favorited: !e.favorited } : e));
  }

  function copyTopic(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const noApiKey = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  return (
    <div className="page-transition max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold flex items-center gap-2">
          <Mic className="h-7 w-7 text-primary" />Speaking Practice
        </h1>
        <p className="text-muted-foreground mt-1">
          AI-generated speaking prompts personalized to your vocabulary.
        </p>
      </div>

      {learnedCards.length === 0 && (
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="py-4 flex gap-3 items-start">
            <BookOpen className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-amber-900">Learn some vocabulary first</p>
              <p className="text-sm text-amber-700 mt-0.5">You'll get better prompts once you've reviewed some flashcards. Try reviewing a deck first!</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Focus mode selection */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-medium">Topic Focus</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {([
              { id: 'recent', label: 'Recent Words', desc: 'Last reviewed vocabulary' },
              { id: 'weak', label: 'Weak Words', desc: 'Words you struggle with' },
              { id: 'mix', label: 'Random Mix', desc: 'Mixed vocabulary sample' },
              { id: 'free', label: 'Free Topic', desc: 'Your own context' },
            ] as { id: FocusMode; label: string; desc: string }[]).map(m => (
              <button
                key={m.id}
                onClick={() => setFocusMode(m.id)}
                className={cn(
                  "p-3 rounded-lg border text-left transition-all",
                  focusMode === m.id
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border hover:border-primary/40"
                )}
              >
                <p className="font-medium text-sm">{m.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{m.desc}</p>
              </button>
            ))}
          </div>

          {focusMode === 'free' && (
            <Textarea
              value={customContext}
              onChange={e => setCustomContext(e.target.value)}
              placeholder="Describe what you want to practice: e.g. 'shopping at the market', 'describing your job', 'making plans with a friend'..."
              rows={2}
              className="resize-none"
            />
          )}

          {focusMode !== 'free' && customContext === '' && (
            <div>
              <p className="text-xs text-muted-foreground mb-1">Optional: add extra context</p>
              <Textarea
                value={customContext}
                onChange={e => setCustomContext(e.target.value)}
                placeholder="Optional: any extra context or theme to focus on..."
                rows={1}
                className="resize-none text-sm"
              />
            </div>
          )}

          <Button onClick={generate} disabled={loading} className="w-full gap-2">
            {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            {loading ? 'Generating…' : 'Generate Speaking Prompt'}
          </Button>
        </CardContent>
      </Card>

      {/* Error */}
      {error && (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="py-4 flex gap-3 items-start">
            <AlertCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-destructive">Generation failed</p>
              <p className="text-sm text-muted-foreground mt-0.5">{error}</p>
              {noApiKey && (
                <p className="text-sm mt-2">
                  Set <code className="bg-muted px-1 rounded text-xs">GROQ_API_KEY</code> in your environment to enable AI topics.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Current topic */}
      {currentTopic && (
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />Speaking Prompt
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => copyTopic(currentTopic)} className="h-8 w-8">
                  {copied ? <Check className="h-4 w-4 text-srs-good" /> : <Copy className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="icon" onClick={() => {
                  const h = history.find(e => e.prompt === currentTopic);
                  if (h) toggleFavorite(h.id);
                }} className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={generate} className="h-8 w-8">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed whitespace-pre-wrap">{currentTopic}</p>
            {currentWords.length > 0 && (
              <div className="mt-4 pt-4 border-t border-primary/20">
                <p className="text-xs text-muted-foreground mb-2 font-medium">Vocabulary used:</p>
                <div className="flex flex-wrap gap-1.5">
                  {currentWords.map(w => (
                    <Badge key={w} variant="outline" className="text-xs">{w}</Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* History */}
      {history.length > 1 && (
        <div>
          <h2 className="text-base font-medium mb-3">Recent Prompts</h2>
          <div className="space-y-2">
            {history.slice(1).map(entry => (
              <Card key={entry.id} className={cn("transition-colors", entry.favorited ? "border-amber-300 bg-amber-50/50" : "")}>
                <CardContent className="py-3 px-4">
                  <div className="flex gap-3 items-start">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm leading-relaxed line-clamp-3">{entry.prompt}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Badge variant="outline" className="text-xs">{entry.level}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(entry.savedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                    <button onClick={() => toggleFavorite(entry.id)} className="shrink-0 text-muted-foreground hover:text-amber-500 transition-colors">
                      <Heart className={cn("h-4 w-4", entry.favorited ? "fill-amber-400 text-amber-400" : "")} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
