import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFlashcardStore } from "@/store/flashcardStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Folder as FolderIcon, ArrowRight, Zap, BookOpen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Counts = { new: number; learning: number; due: number; total: number };

export default function Practice() {
  const navigate = useNavigate();
  const { folders, decks, getDeckStats, getNewCardsForSession } = useFlashcardStore();

  const decksByFolder = useMemo(() => {
    const m = new Map<string, typeof decks>();
    for (const d of decks) {
      const key = d.folderId ?? "__no_folder__";
      m.set(key, [...(m.get(key) ?? []), d]);
    }
    return m;
  }, [decks]);

  const [selectedDeckIds, setSelectedDeckIds] = useState<Set<string>>(() => {
    // Auto-select all decks that have due or new cards
    return new Set();
  });

  const deckCounts = useMemo(() => {
    const m = new Map<string, Counts>();
    for (const d of decks) {
      const s = getDeckStats(d.id);
      const newAvailable = getNewCardsForSession(d.id).length;
      m.set(d.id, { new: newAvailable, learning: s.learningCount, due: s.dueCount, total: s.newCount + s.learningCount + s.reviewCount });
    }
    return m;
  }, [decks, getDeckStats, getNewCardsForSession]);

  const toggleDeck = (deckId: string, checked: boolean) => {
    setSelectedDeckIds(prev => {
      const next = new Set(prev);
      if (checked) next.add(deckId); else next.delete(deckId);
      return next;
    });
  };

  const folderCounts = (folderId: string | null): Counts => {
    const key = folderId ?? "__no_folder__";
    const ds = decksByFolder.get(key) ?? [];
    return ds.reduce((acc, d) => {
      const c = deckCounts.get(d.id) ?? { new: 0, learning: 0, due: 0, total: 0 };
      return { new: acc.new + c.new, learning: acc.learning + c.learning, due: acc.due + c.due, total: acc.total + c.total };
    }, { new: 0, learning: 0, due: 0, total: 0 });
  };

  const toggleFolder = (folderId: string | null, checked: boolean) => {
    const key = folderId ?? "__no_folder__";
    const ds = decksByFolder.get(key) ?? [];
    setSelectedDeckIds(prev => {
      const next = new Set(prev);
      for (const d of ds) { if (checked) next.add(d.id); else next.delete(d.id); }
      return next;
    });
  };

  const selectAll = () => setSelectedDeckIds(new Set(decks.map(d => d.id)));
  const selectDue = () => {
    const dueDecks = decks.filter(d => {
      const c = deckCounts.get(d.id)!;
      return c.due > 0 || c.learning > 0 || c.new > 0;
    });
    setSelectedDeckIds(new Set(dueDecks.map(d => d.id)));
  };

  // Summary for selected decks
  const selectedSummary = useMemo(() => {
    let due = 0, learning = 0, newCards = 0;
    for (const id of selectedDeckIds) {
      const c = deckCounts.get(id);
      if (c) { due += c.due; learning += c.learning; newCards += c.new; }
    }
    return { due, learning, newCards, total: due + learning + newCards };
  }, [selectedDeckIds, deckCounts]);

  const canStart = selectedDeckIds.size > 0 && selectedSummary.total > 0;

  const start = () => {
    const ids = [...selectedDeckIds].join(",");
    navigate(`/review?deckIds=${encodeURIComponent(ids)}&fresh=1`);
  };

  const allDecks = [...(decksByFolder.entries())];
  const folderIds = folders.map(f => f.id);
  const hasNoFolder = (decksByFolder.get("__no_folder__") ?? []).length > 0;

  if (decks.length === 0) {
    return (
      <div className="page-transition max-w-2xl mx-auto py-16 text-center space-y-4">
        <BookOpen className="h-14 w-14 mx-auto text-muted-foreground" />
        <h1 className="text-2xl font-serif font-bold">No decks yet</h1>
        <p className="text-muted-foreground">Import vocabulary words to create your first deck and start reviewing.</p>
        <Link to="/import"><Button className="gap-2"><Sparkles className="h-4 w-4" />Import Words</Button></Link>
      </div>
    );
  }

  return (
    <div className="page-transition max-w-3xl mx-auto space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold">Start Review</h1>
          <p className="text-muted-foreground mt-1">Select one or more decks to review.</p>
        </div>
        <Link to="/"><Button variant="outline" size="sm">Back</Button></Link>
      </div>

      {/* Quick select */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={selectDue} className="gap-1.5">
          <Zap className="h-3.5 w-3.5" />Select due
        </Button>
        <Button variant="outline" size="sm" onClick={selectAll}>Select all</Button>
        {selectedDeckIds.size > 0 && (
          <Button variant="ghost" size="sm" onClick={() => setSelectedDeckIds(new Set())}>Clear</Button>
        )}
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Decks
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Folders with decks */}
          {folders.map((f) => {
            const c = folderCounts(f.id);
            const folderDecks = decksByFolder.get(f.id) ?? [];
            if (folderDecks.length === 0) return null;
            const allSelected = folderDecks.every(d => selectedDeckIds.has(d.id));
            const someSelected = folderDecks.some(d => selectedDeckIds.has(d.id));

            return (
              <div key={f.id} className="space-y-2">
                <div className="flex items-center gap-3 py-1">
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={(v) => toggleFolder(f.id, Boolean(v))}
                    className={someSelected && !allSelected ? "opacity-60" : ""}
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FolderIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium text-sm">{f.name}</span>
                    </div>
                    <div className="flex gap-1.5 text-xs">
                      {c.due > 0 && <Badge variant="destructive" className="text-xs py-0">{c.due} due</Badge>}
                      {c.new > 0 && <Badge variant="outline" className="text-xs py-0 stat-badge-new">{c.new} new</Badge>}
                    </div>
                  </div>
                </div>

                <div className="pl-7 space-y-1.5">
                  {folderDecks.map((d) => {
                    const dc = deckCounts.get(d.id) ?? { new: 0, learning: 0, due: 0, total: 0 };
                    const active = dc.due > 0 || dc.learning > 0 || dc.new > 0;
                    return (
                      <div key={d.id} className={cn("flex items-center justify-between py-2 px-3 rounded-lg", selectedDeckIds.has(d.id) ? "bg-primary/5 border border-primary/20" : "border border-transparent hover:bg-muted/50")}>
                        <div className="flex items-center gap-3">
                          <Checkbox checked={selectedDeckIds.has(d.id)} onCheckedChange={(v) => toggleDeck(d.id, Boolean(v))} />
                          <div>
                            <p className="text-sm font-medium">{d.name}</p>
                            <p className="text-xs text-muted-foreground">{dc.total} total cards</p>
                          </div>
                        </div>
                        <div className="flex gap-1.5 text-xs">
                          {dc.due > 0 && <Badge variant="destructive" className="text-xs py-0">{dc.due} due</Badge>}
                          {dc.learning > 0 && <span className="stat-badge-learning px-1.5 py-0.5 rounded text-xs">{dc.learning}</span>}
                          {dc.new > 0 && <span className="stat-badge-new px-1.5 py-0.5 rounded text-xs">{dc.new} new</span>}
                          {!active && <span className="text-muted-foreground">Up to date</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* No-folder decks */}
          {hasNoFolder && (
            <div className="space-y-1.5">
              {(decksByFolder.get("__no_folder__") ?? []).map((d) => {
                const dc = deckCounts.get(d.id) ?? { new: 0, learning: 0, due: 0, total: 0 };
                const active = dc.due > 0 || dc.learning > 0 || dc.new > 0;
                return (
                  <div key={d.id} className={cn("flex items-center justify-between py-2 px-3 rounded-lg", selectedDeckIds.has(d.id) ? "bg-primary/5 border border-primary/20" : "border border-transparent hover:bg-muted/50")}>
                    <div className="flex items-center gap-3">
                      <Checkbox checked={selectedDeckIds.has(d.id)} onCheckedChange={(v) => toggleDeck(d.id, Boolean(v))} />
                      <div>
                        <p className="text-sm font-medium">{d.name}</p>
                        <p className="text-xs text-muted-foreground">{dc.total} total cards</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5 text-xs">
                      {dc.due > 0 && <Badge variant="destructive" className="text-xs py-0">{dc.due} due</Badge>}
                      {dc.learning > 0 && <span className="stat-badge-learning px-1.5 py-0.5 rounded text-xs">{dc.learning}</span>}
                      {dc.new > 0 && <span className="stat-badge-new px-1.5 py-0.5 rounded text-xs">{dc.new} new</span>}
                      {!active && <span className="text-muted-foreground">Up to date</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Start bar */}
      <div className="sticky bottom-4">
        <Card className={cn("transition-all shadow-lg", canStart ? "border-primary/30 bg-primary/5" : "")}>
          <CardContent className="py-4 flex items-center justify-between gap-4">
            <div className="text-sm">
              {selectedDeckIds.size === 0 ? (
                <span className="text-muted-foreground">Select decks to start</span>
              ) : !canStart ? (
                <span className="text-muted-foreground">Selected decks are all up to date</span>
              ) : (
                <div className="flex gap-3 flex-wrap">
                  {selectedSummary.due > 0 && <span className="text-srs-again font-medium">{selectedSummary.due} due</span>}
                  {selectedSummary.learning > 0 && <span className="font-medium">{selectedSummary.learning} learning</span>}
                  {selectedSummary.newCards > 0 && <span className="text-srs-new font-medium">{selectedSummary.newCards} new</span>}
                </div>
              )}
            </div>
            <Button onClick={start} disabled={!canStart} className="gap-2 shrink-0">
              Start Session <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
