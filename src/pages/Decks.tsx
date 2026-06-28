import { useState } from 'react';
import { useFlashcardStore } from '@/store/flashcardStore';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Folder, 
  FolderPlus,
  MoreHorizontal,
  Pencil,
  Trash2,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

export default function Decks() {
  const navigate = useNavigate();
  const { 
    folders, 
    decks, 
    createFolder, 
    updateFolder, 
    deleteFolder,
    createDeck,
    updateDeck,
    moveDeck,
    deleteDeck,
    getDeckStats,
    cards
  } = useFlashcardStore();

  const [folderDialogOpen, setFolderDialogOpen] = useState(false);
  const [deckDialogOpen, setDeckDialogOpen] = useState(false);
  const [editingFolder, setEditingFolder] = useState<{ id: string; name: string } | null>(null);
  const [editingDeck, setEditingDeck] = useState<{ id: string; name: string; folderId: string | null } | null>(null);
  
  const [folderName, setFolderName] = useState('');
  const [deckName, setDeckName] = useState('');
  const [deckFolderId, setDeckFolderId] = useState<string | null>(null);

  const handleCreateFolder = () => {
    if (!folderName.trim()) {
      toast.error('Please enter a folder name');
      return;
    }
    if (editingFolder) {
      updateFolder(editingFolder.id, folderName);
      toast.success('Folder updated');
    } else {
      createFolder(folderName);
      toast.success('Folder created');
    }
    setFolderDialogOpen(false);
    setFolderName('');
    setEditingFolder(null);
  };

  const handleCreateDeck = () => {
    if (!deckName.trim()) {
      toast.error('Please enter a deck name');
      return;
    }
    if (editingDeck) {
      updateDeck(editingDeck.id, { name: deckName, folderId: deckFolderId });
      toast.success('Deck updated');
    } else {
      const deck = createDeck(deckName, deckFolderId);
      toast.success('Deck created');
      navigate(`/decks/${deck.id}`);
    }
    setDeckDialogOpen(false);
    setDeckName('');
    setDeckFolderId(null);
    setEditingDeck(null);
  };

  const handleDeleteFolder = (id: string) => {
    deleteFolder(id);
    toast.success('Folder deleted');
  };

  const handleDeleteDeck = (id: string) => {
    deleteDeck(id);
    toast.success('Deck deleted');
  };

  const handleMoveDeck = (deckId: string, folderId: string | null) => {
    moveDeck(deckId, folderId);
    const folder = folderId ? folders.find(f => f.id === folderId) : null;
    toast.success(folder ? `Moved to ${folder.name}` : 'Moved to Unfiled');
  };

  const openEditFolder = (folder: { id: string; name: string }) => {
    setEditingFolder(folder);
    setFolderName(folder.name);
    setFolderDialogOpen(true);
  };

  const openEditDeck = (deck: { id: string; name: string; folderId: string | null }) => {
    setEditingDeck(deck);
    setDeckName(deck.name);
    setDeckFolderId(deck.folderId);
    setDeckDialogOpen(true);
  };

  const openNewDeck = (folderId: string | null = null) => {
    setEditingDeck(null);
    setDeckName('');
    setDeckFolderId(folderId);
    setDeckDialogOpen(true);
  };

  // Group decks by folder
  const unfoldered = decks.filter(d => !d.folderId);
  const folderGroups = folders.map(folder => ({
    folder,
    decks: decks.filter(d => d.folderId === folder.id)
  }));

  return (
    <div className="page-transition max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold">Decks & Folders</h1>
          <p className="text-muted-foreground mt-1">
            Organize your vocabulary by topic or level
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={() => {
              setEditingFolder(null);
              setFolderName('');
              setFolderDialogOpen(true);
            }}
          >
            <FolderPlus className="h-4 w-4" />
            New Folder
          </Button>
          <Button 
            className="gap-2"
            onClick={() => openNewDeck()}
          >
            <Plus className="h-4 w-4" />
            New Deck
          </Button>
        </div>
      </div>

      {/* Unfiled Decks */}
      {unfoldered.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-muted-foreground">Unfiled</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {unfoldered.map(deck => (
              <DeckCard
                key={deck.id}
                deck={deck}
                stats={getDeckStats(deck.id)}
                cardCount={cards.filter(c => c.deckId === deck.id).length}
                onEdit={() => openEditDeck(deck)}
                onMove={(folderId) => handleMoveDeck(deck.id, folderId)}
                onDelete={() => handleDeleteDeck(deck.id)}
                folders={folders}
              />
            ))}
          </div>
        </div>
      )}

      {/* Folders */}
      {folderGroups.map(({ folder, decks }) => (
        <div key={folder.id} className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-medium">{folder.name}</h2>
              <span className="text-sm text-muted-foreground">
                ({decks.length} {decks.length === 1 ? 'deck' : 'decks'})
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Button variant="outline" size="sm" className="gap-1.5" onClick={() => openNewDeck(folder.id)}>
                <Plus className="h-3.5 w-3.5" />
                Deck
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => openEditFolder(folder)}>
                    <Pencil className="h-4 w-4 mr-2" />
                    Rename
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleDeleteFolder(folder.id)}
                    className="text-destructive"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {decks.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="py-8 text-center text-muted-foreground">
                No decks in this folder yet
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              {decks.map(deck => (
                <DeckCard
                  key={deck.id}
                  deck={deck}
                  stats={getDeckStats(deck.id)}
                  cardCount={cards.filter(c => c.deckId === deck.id).length}
                  onEdit={() => openEditDeck(deck)}
                  onMove={(folderId) => handleMoveDeck(deck.id, folderId)}
                  onDelete={() => handleDeleteDeck(deck.id)}
                  folders={folders}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {folders.length === 0 && decks.length === 0 && (
        <Card className="border-dashed">
          <CardContent className="py-16 text-center">
            <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-medium text-lg mb-2">Get started with your first deck</h3>
            <p className="text-muted-foreground mb-6">
              Create folders to organize by level (A1, A2, B1...) or topic
            </p>
            <div className="flex gap-3 justify-center">
              <Button 
                variant="outline"
                onClick={() => setFolderDialogOpen(true)}
              >
                <FolderPlus className="h-4 w-4 mr-2" />
                Create Folder
              </Button>
              <Button onClick={() => setDeckDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create Deck
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Folder Dialog */}
      <Dialog open={folderDialogOpen} onOpenChange={setFolderDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingFolder ? 'Edit Folder' : 'New Folder'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Folder Name</Label>
              <Input
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                placeholder="e.g., A2 Level, Work Vocabulary..."
                onKeyDown={(e) => e.key === 'Enter' && handleCreateFolder()}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setFolderDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateFolder}>
              {editingFolder ? 'Save' : 'Create'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Deck Dialog */}
      <Dialog open={deckDialogOpen} onOpenChange={setDeckDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingDeck ? 'Edit Deck' : 'New Deck'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Deck Name</Label>
              <Input
                value={deckName}
                onChange={(e) => setDeckName(e.target.value)}
                placeholder="e.g., Week 3 Vocabulary, Restaurant Words..."
              />
            </div>
            <div className="space-y-2">
              <Label>Folder (optional)</Label>
              <Select 
                value={deckFolderId || 'none'} 
                onValueChange={(v) => setDeckFolderId(v === 'none' ? null : v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a folder" />
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
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeckDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateDeck}>
              {editingDeck ? 'Save' : 'Create'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DeckCard({ 
  deck, 
  stats, 
  cardCount,
  onEdit, 
  onMove,
  onDelete,
  folders,
}: { 
  deck: { id: string; name: string; folderId: string | null };
  stats: { newCount: number; learningCount: number; reviewCount: number; dueCount: number };
  cardCount: number;
  onEdit: () => void;
  onMove: (folderId: string | null) => void;
  onDelete: () => void;
  folders: { id: string; name: string }[];
}) {
  return (
    <Card className="deck-card group">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <Link to={`/decks/${deck.id}`} className="flex-1">
            <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
              {deck.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {cardCount} {cardCount === 1 ? 'card' : 'cards'}
            </p>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onEdit}>
                <Pencil className="h-4 w-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Folder className="h-4 w-4 mr-2" />
                  Move to folder
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={() => onMove(null)}>
                    No folder
                  </DropdownMenuItem>
                  {folders.length > 0 && <DropdownMenuSeparator />}
                  {folders.map(folder => (
                    <DropdownMenuItem key={folder.id} onClick={() => onMove(folder.id)}>
                      {folder.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onDelete} className="text-destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex gap-2 mt-3 text-xs">
          <span className="stat-badge-new px-2 py-1 rounded-full">
            {stats.newCount} new
          </span>
          {stats.dueCount > 0 && (
            <span className="stat-badge-due px-2 py-1 rounded-full">
              {stats.dueCount} due
            </span>
          )}
        </div>
        
        <Link 
          to={`/decks/${deck.id}`}
          className="flex items-center gap-1 text-sm text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          View deck <ChevronRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
