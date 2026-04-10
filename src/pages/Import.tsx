import { useState, useMemo } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useFlashcardStore } from '@/store/flashcardStore';
import { parseVocabularyInput } from '@/lib/parser';
import { 
  ArrowLeft, 
  Upload, 
  AlertCircle, 
  CheckCircle2,
  FileText,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { toast } from 'sonner';

const EXAMPLE_INPUT = `der Vorschlag, suggestion, Ich habe einen Vorschlag., I have a suggestion.
sich entscheiden, to decide, Ich muss mich heute entscheiden., I have to decide today.
die Erfahrung, experience, Er hat viel Erfahrung., He has a lot of experience.
verstehen, to understand, Ich verstehe dich., I understand you.`;

export default function Import() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { decks, bulkCreateCards, createDeck } = useFlashcardStore();

  const preselectedDeckId = searchParams.get('deckId');
  
  const [selectedDeckId, setSelectedDeckId] = useState<string>(preselectedDeckId || 'new');
  const [newDeckName, setNewDeckName] = useState('');
  const [inputText, setInputText] = useState('');
  const [step, setStep] = useState<'input' | 'preview'>('input');
  const [parseResult, setParseResult] = useState<ReturnType<typeof parseVocabularyInput> | null>(null);

  const selectedDeck = useMemo(() => {
    return decks.find(d => d.id === selectedDeckId);
  }, [decks, selectedDeckId]);

  const handleParse = () => {
    if (!inputText.trim()) {
      toast.error('Please enter some vocabulary');
      return;
    }

    if (selectedDeckId === 'new' && !newDeckName.trim()) {
      toast.error('Please enter a name for the new deck');
      return;
    }

    const result = parseVocabularyInput(inputText);
    
    if (result.entries.length === 0) {
      toast.error('No valid entries found. Check the format.');
      return;
    }

    setParseResult(result);
    setStep('preview');
  };

  const handleImport = () => {
    if (!parseResult) return;

    let deckId = selectedDeckId;
    
    // Create new deck if needed
    if (selectedDeckId === 'new') {
      const newDeck = createDeck(newDeckName, null);
      deckId = newDeck.id;
    }

    const deck = decks.find(d => d.id === deckId) || { settings: { templateMode: 'both' as const } };
    const cards = bulkCreateCards(deckId, parseResult.entries, deck.settings?.templateMode || 'both');
    
    toast.success(`Created ${cards.length} cards!`);
    navigate(`/decks/${deckId}`);
  };

  const loadExample = () => {
    setInputText(EXAMPLE_INPUT);
  };

  if (step === 'preview' && parseResult) {
    return (
      <div className="page-transition max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setStep('input')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-serif font-bold">Confirm Import</h1>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="py-6 flex items-center gap-4">
              <CheckCircle2 className="h-8 w-8 text-srs-good" />
              <div>
                <div className="text-2xl font-bold">{parseResult.entries.length}</div>
                <div className="text-sm text-muted-foreground">Valid entries</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="py-6 flex items-center gap-4">
              <AlertCircle className="h-8 w-8 text-srs-again" />
              <div>
                <div className="text-2xl font-bold">{parseResult.errors.length}</div>
                <div className="text-sm text-muted-foreground">Errors</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Errors */}
        {parseResult.errors.length > 0 && (
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Errors ({parseResult.errors.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {parseResult.errors.map((error, i) => (
                  <div key={i} className="text-sm">
                    <span className="font-medium">Line {error.line}:</span>{' '}
                    <span className="text-muted-foreground">{error.message}</span>
                    <div className="text-xs text-muted-foreground truncate">
                      "{error.raw}"
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Cards to Create</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {parseResult.entries.map((entry, i) => (
                <div key={i} className="p-3 rounded-lg border bg-muted/30">
                  <div className="flex items-baseline gap-2">
                    <span className="font-medium text-primary">{entry.germanWord}</span>
                    <span className="text-muted-foreground">→</span>
                    <span>{entry.englishMeaning}</span>
                  </div>
                  {entry.germanExample && (
                    <p className="text-sm text-muted-foreground italic mt-1">
                      {entry.germanExample}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setStep('input')}>
            Back to Edit
          </Button>
          <Button onClick={handleImport} className="flex-1">
            <Upload className="h-4 w-4 mr-2" />
            Import {parseResult.entries.length} Entries
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-transition max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-serif font-bold">Import Vocabulary</h1>
          <p className="text-muted-foreground">Bulk-add German words in seconds</p>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-6">
          {/* Deck Selection */}
          <div className="space-y-2">
            <Label>Target Deck</Label>
            <Select value={selectedDeckId} onValueChange={setSelectedDeckId}>
              <SelectTrigger>
                <SelectValue placeholder="Select a deck" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">+ Create new deck</SelectItem>
                {decks.map(deck => (
                  <SelectItem key={deck.id} value={deck.id}>
                    {deck.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* New Deck Name */}
          {selectedDeckId === 'new' && (
            <div className="space-y-2">
              <Label>New Deck Name</Label>
              <input
                type="text"
                value={newDeckName}
                onChange={(e) => setNewDeckName(e.target.value)}
                placeholder="e.g., Week 4 Vocabulary"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          )}

          {/* Input Format Help */}
          <div className="flex items-start gap-2 p-4 rounded-lg bg-muted/50 border">
            <FileText className="h-5 w-5 text-primary mt-0.5" />
            <div className="text-sm">
              <p className="font-medium mb-1">Format: CSV-style, one entry per line</p>
              <code className="text-xs bg-background px-2 py-1 rounded">
                GermanWord, EnglishMeaning, GermanExample, EnglishTranslation
              </code>
              <p className="text-muted-foreground mt-2">
                Example sentences are optional. Use quotes for fields with commas.
              </p>
            </div>
          </div>

          {/* Text Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Paste your vocabulary</Label>
              <Button variant="link" size="sm" onClick={loadExample} className="h-auto p-0">
                Load example
              </Button>
            </div>
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`der Vorschlag, suggestion, Ich habe einen Vorschlag., I have a suggestion.
sich entscheiden, to decide, Ich muss mich heute entscheiden., I have to decide today.
...`}
              className="min-h-[200px] font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground">
              {inputText.split('\n').filter(l => l.trim()).length} lines
            </p>
          </div>

          <Button onClick={handleParse} className="w-full" size="lg">
            Preview Import
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
