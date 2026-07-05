import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useFlashcardStore } from '@/store/flashcardStore';
import { 
  ArrowLeft, 
  Plus, 
  Settings, 
  Play,
  Search,
  MoreHorizontal,
  Pencil,
  Trash2,
  Pause,
  PlayCircle,
  StickyNote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import type { Card as CardType, DeckSettings } from '@/types/flashcard';

export default function DeckView() {
  const { deckId } = useParams<{ deckId: string }>();
  const navigate = useNavigate();
  const { 
    decks, 
    cards, 
    folders,
    getDeckStats, 
    updateCard, 
    deleteCard,
    suspendCard,
    updateDeck,
    getNewCardsForSession
  } = useFlashcardStore();

  const deck = decks.find(d => d.id === deckId);
  const deckCards = cards.filter(c => c.deckId === deckId);
  const stats = deck ? getDeckStats(deck.id) : null;
  const newCardsAvailable = deck ? getNewCardsForSession(deck.id).length : 0;

  const [searchQuery, setSearchQuery] = useState('');
  const [editingCard, setEditingCard] = useState<CardType | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Card edit form state
  const [editGerman, setEditGerman] = useState('');
  const [editEnglish, setEditEnglish] = useState('');
  const [editGermanEx, setEditGermanEx] = useState('');
  const [editEnglishEx, setEditEnglishEx] = useState('');
  const [editNotes, setEditNotes] = useState('');

  // Settings form state
  const [newCardsPerDay, setNewCardsPerDay] = useState(20);
  const [templateMode, setTemplateMode] = useState<DeckSettings['templateMode']>('both');
  const [settingsFolderId, setSettingsFolderId] = useState<string | null>(null);

  if (!deck || !stats) {
    return (
      <div className="page-transition max-w-4xl mx-auto py-16 text-center">
        <h2 className="text-xl font-medium mb-4">Deck not found</h2>
        <Link to="/decks">
          <Button variant="outline">Back to Decks</Button>
        </Link>
      </div>
    );
  }

  const folder = folders.find(f => f.id === deck.folderId);

  const filteredCards = deckCards.filter(card => 
    card.germanWord.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.englishMeaning.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openEditCard = (card: CardType) => {
    setEditingCard(card);
    setEditGerman(card.germanWord);
    setEditEnglish(card.englishMeaning);
    setEditGermanEx(card.germanExample);
    setEditEnglishEx(card.englishExample);
    setEditNotes(card.notes ?? '');
  };

  const handleSaveCard = () => {
    if (!editingCard) return;
    updateCard(editingCard.id, {
      germanWord: editGerman,
      englishMeaning: editEnglish,
      germanExample: editGermanEx,
      englishExample: editEnglishEx,
      notes: editNotes,
    });
    toast.success('Card updated');
    setEditingCard(null);
  };

  const handleDeleteCard = (id: string) => {
    deleteCard(id);
    toast.success('Card deleted');
  };

  const handleToggleSuspend = (card: CardType) => {
    suspendCard(card.id, !card.suspended);
    toast.success(card.suspended ? 'Card unsuspended' : 'Card suspended');
  };

  const openSettings = () => {
    setNewCardsPerDay(deck.settings.newCardsPerDay);
    setTemplateMode(deck.settings.templateMode);
    setSettingsFolderId(deck.folderId);
    setSettingsOpen(true);
  };

  const handleSaveSettings = () => {
    updateDeck(deck.id, {
      folderId: settingsFolderId,
      settings: {
        ...deck.settings,
        newCardsPerDay: Math.max(0, Math.floor(newCardsPerDay || 0)),
        templateMode,
      }
    });
    toast.success('Settings saved');
    setSettingsOpen(false);
  };

  return (
    <div className="page-transition max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/decks')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        <div className="flex-1">
          {folder && (
            <p className="text-sm text-muted-foreground mb-1">{folder.name}</p>
          )}
          <h1 className="text-3xl font-serif font-bold">{deck.name}</h1>
        </div>
        
        <Button variant="outline" size="icon" onClick={openSettings}>
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="py-4 text-center">
            <div className="text-2xl font-bold text-srs-new">{stats.newCount}</div>
            <div className="text-xs text-muted-foreground">New</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4 text-center">
            <div className="text-2xl font-bold text-srs-learning">{stats.learningCount}</div>
            <div className="text-xs text-muted-foreground">Learning</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4 text-center">
            <div className="text-2xl font-bold text-srs-review">{stats.reviewCount}</div>
            <div className="text-xs text-muted-foreground">Review</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4 text-center">
            <div className="text-2xl font-bold text-srs-again">{stats.dueCount}</div>
            <div className="text-xs text-muted-foreground">Due</div>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <Link to={`/import?deckId=${deck.id}`}>
          <Button variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Cards
          </Button>
        </Link>
        
        {(stats.dueCount > 0 || newCardsAvailable > 0) && (
          <Link to={`/review?deckIds=${deck.id}&fresh=1`}>
            <Button className="gap-2">
              <Play className="h-4 w-4" />
              Study ({stats.dueCount > 0 ? `${stats.dueCount} due` : `${newCardsAvailable} new`})
            </Button>
          </Link>
        )}
      </div>

      {/* Card List */}
      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle className="text-lg">Cards ({deckCards.length})</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cards..."
              className="pl-9"
            />
          </div>
        </CardHeader>
        <CardContent>
          {filteredCards.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              {deckCards.length === 0 
                ? "No cards yet. Import some vocabulary!"
                : "No cards match your search."}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredCards.map(card => (
                <div 
                  key={card.id} 
                  className={`flex items-center gap-4 p-3 rounded-lg border transition-colors ${
                    card.suspended ? 'bg-muted/50 opacity-60' : 'hover:bg-muted/30'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium truncate">{card.germanWord}</span>
                      <span className="text-muted-foreground">→</span>
                      <span className="text-muted-foreground truncate">{card.englishMeaning}</span>
                    </div>
                    {card.germanExample && (
                      <p className="text-sm text-muted-foreground truncate italic mt-1">
                        {card.germanExample}
                      </p>
                    )}
                    {card.notes && (
                      <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <StickyNote className="h-3.5 w-3.5" />
                        Saved note
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge 
                      variant="outline" 
                      className={
                        card.state === 'new' ? 'border-srs-new text-srs-new' :
                        card.state === 'learning' ? 'border-srs-learning text-srs-learning' :
                        card.state === 'relearning' ? 'border-srs-learning text-srs-learning' :
                        'border-srs-review text-srs-review'
                      }
                    >
                      {card.state}
                    </Badge>
                    
                    {card.template === 'german-to-english' ? (
                      <Badge variant="secondary" className="text-xs">DE→EN</Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs">EN→DE</Badge>
                    )}
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEditCard(card)}>
                          <Pencil className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleToggleSuspend(card)}>
                          {card.suspended ? (
                            <>
                              <PlayCircle className="h-4 w-4 mr-2" />
                              Unsuspend
                            </>
                          ) : (
                            <>
                              <Pause className="h-4 w-4 mr-2" />
                              Suspend
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDeleteCard(card.id)}
                          className="text-destructive"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Card Dialog */}
      <Dialog open={!!editingCard} onOpenChange={(open) => !open && setEditingCard(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Card</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>German Word</Label>
              <Input
                value={editGerman}
                onChange={(e) => setEditGerman(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>English Meaning</Label>
              <Input
                value={editEnglish}
                onChange={(e) => setEditEnglish(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>German Example</Label>
              <Input
                value={editGermanEx}
                onChange={(e) => setEditGermanEx(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>English Translation</Label>
              <Input
                value={editEnglishEx}
                onChange={(e) => setEditEnglishEx(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Hidden Card Note</Label>
              <Textarea
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                placeholder="Add a private note, synonym contrast, grammar reminder, or Groq explanation..."
                className="min-h-[120px] resize-y"
              />
              <p className="text-xs text-muted-foreground">
                Notes stay hidden during review until you open the card notes panel.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingCard(null)}>
              Cancel
            </Button>
            <Button onClick={handleSaveCard}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deck Settings</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Folder</Label>
              <Select
                value={settingsFolderId || 'none'}
                onValueChange={(v) => setSettingsFolderId(v === 'none' ? null : v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No folder</SelectItem>
                  {folders.map(folder => (
                    <SelectItem key={folder.id} value={folder.id}>
                      {folder.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>New Cards Per Day</Label>
              <Input
                type="number"
                value={newCardsPerDay}
                onChange={(e) => setNewCardsPerDay(Math.max(0, parseInt(e.target.value) || 0))}
                min={0}
              />
              <div className="flex flex-wrap gap-2">
                {[20, 50, 100, 200].map(value => (
                  <Button
                    key={value}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setNewCardsPerDay(value)}
                  >
                    {value}
                  </Button>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setNewCardsPerDay(9999)}
                >
                  All new
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Reviews and learning cards always stay due. This only controls how many brand-new cards enter each day.
              </p>
            </div>
            <div className="space-y-2">
              <Label>Card Templates</Label>
              <Select value={templateMode} onValueChange={(v) => setTemplateMode(v as DeckSettings['templateMode'])}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="both">Both directions (DE↔EN)</SelectItem>
                  <SelectItem value="german-to-english">German → English only</SelectItem>
                  <SelectItem value="english-to-german">English → German only</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                This affects newly imported cards only.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSettingsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveSettings}>Save Settings</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
