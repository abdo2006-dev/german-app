import { useFlashcardStore } from '@/store/flashcardStore';
import { Link } from 'react-router-dom';
import { BookOpen, Plus, Folder, ChevronRight, Zap, Flame, Target, TrendingUp, ListTodo } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

export default function Dashboard() {
  const { folders, decks, cards, getDeckStats, getTodayStats, getReviewHistory, getStreakDays, todos } = useFlashcardStore();

  const todayStats = getTodayStats();
  const reviewHistory = getReviewHistory(14);
  const streak = getStreakDays();
  const pendingTodos = todos.filter(t => !t.completed).length;

  const totalDue = decks.reduce((sum, deck) => sum + getDeckStats(deck.id).dueCount, 0);
  const totalNew = decks.reduce((sum, deck) => sum + getDeckStats(deck.id).newCount, 0);
  const totalCards = cards.length;
  const maxReviews = Math.max(...reviewHistory.map(d => d.count), 1);

  const accuracy = todayStats.reviewed > 0
    ? Math.round((todayStats.correct / todayStats.reviewed) * 100) : null;

  return (
    <div className="page-transition max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Guten Tag! 👋</h1>
          <p className="text-muted-foreground mt-1">Ready to practice German today?</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link to="/import">
            <Button variant="outline" className="gap-2"><Plus className="h-4 w-4" />Import Words</Button>
          </Link>
          {(totalDue > 0 || totalNew > 0) && (
            <Link to="/practice">
              <Button className="gap-2"><Zap className="h-4 w-4" />
                {totalDue > 0 ? `Review (${totalDue})` : `Study (${totalNew} new)`}
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="deck-card">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
                <Target className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{totalDue}</div>
                <div className="text-xs text-muted-foreground">Due Today</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="deck-card">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{todayStats.reviewed}</div>
                <div className="text-xs text-muted-foreground">Reviewed Today</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="deck-card">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{streak}</div>
                <div className="text-xs text-muted-foreground">Day Streak</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="deck-card">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {accuracy !== null ? `${accuracy}%` : '—'}
                </div>
                <div className="text-xs text-muted-foreground">Today's Accuracy</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity bar chart */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-medium flex items-center justify-between">
            <span>Review Activity (14 days)</span>
            {totalCards > 0 && <span className="text-sm font-normal text-muted-foreground">{totalCards} cards total</span>}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between gap-1 h-20 mb-3">
            {reviewHistory.map((day, i) => {
              const height = (day.count / maxReviews) * 100;
              const isToday = i === reviewHistory.length - 1;
              const isWeekend = [0, 6].includes(new Date(day.date + 'T12:00:00').getDay());
              return (
                <div key={day.date} className="flex-1 flex flex-col items-center gap-1 group relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover border rounded px-2 py-1 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    {new Date(day.date + 'T12:00:00').toLocaleDateString('en', { month: 'short', day: 'numeric' })}: {day.count} reviews
                  </div>
                  <div
                    className={`w-full rounded-t-sm transition-all ${isToday ? 'bg-primary' : isWeekend ? 'bg-muted-foreground/30' : 'bg-muted-foreground/20'} ${day.count > 0 ? 'opacity-100' : 'opacity-40'}`}
                    style={{ height: `${Math.max(height, day.count > 0 ? 12 : 4)}%` }}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{new Date(reviewHistory[0].date + 'T12:00:00').toLocaleDateString('en', { month: 'short', day: 'numeric' })}</span>
            <span>Today</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Decks Overview */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-serif font-semibold">Your Decks</h2>
            <Link to="/decks" className="text-sm text-primary hover:underline flex items-center gap-1">
              All Decks <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {decks.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="py-10 text-center">
                <Folder className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                <h3 className="font-medium mb-1">No decks yet</h3>
                <p className="text-sm text-muted-foreground mb-4">Import vocabulary to get started.</p>
                <Link to="/import"><Button size="sm"><Plus className="h-4 w-4 mr-1" />Import Words</Button></Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {decks.slice(0, 5).map((deck) => {
                const stats = getDeckStats(deck.id);
                const folder = folders.find(f => f.id === deck.folderId);
                const total = stats.newCount + stats.learningCount + stats.reviewCount;
                const progress = total > 0 ? (stats.reviewCount / total) * 100 : 0;

                return (
                  <Link key={deck.id} to={`/decks/${deck.id}`}>
                    <Card className="deck-card cursor-pointer">
                      <CardContent className="py-4 px-5">
                        <div className="flex items-center justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            {folder && (
                              <span className="text-xs text-muted-foreground flex items-center gap-1 mb-0.5">
                                <Folder className="h-3 w-3" />{folder.name}
                              </span>
                            )}
                            <p className="font-medium truncate">{deck.name}</p>
                            <div className="flex gap-2 mt-1.5 text-xs">
                              {stats.newCount > 0 && <span className="stat-badge-new px-1.5 py-0.5 rounded">{stats.newCount} new</span>}
                              {stats.learningCount > 0 && <span className="stat-badge-learning px-1.5 py-0.5 rounded">{stats.learningCount} learning</span>}
                              {stats.reviewCount > 0 && <span className="stat-badge-review px-1.5 py-0.5 rounded">{stats.reviewCount} review</span>}
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            {stats.dueCount > 0 ? (
                              <Badge variant="destructive" className="text-xs">{stats.dueCount} due</Badge>
                            ) : (
                              <span className="text-xs text-muted-foreground">{total} cards</span>
                            )}
                            <Progress value={progress} className="h-1 w-20 mt-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* To-Do Sidebar */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-serif font-semibold">Study Tasks</h2>
            <Link to="/todo" className="text-sm text-primary hover:underline flex items-center gap-1">
              All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <Card>
            <CardContent className="py-4 px-5">
              {todos.length === 0 ? (
                <div className="text-center py-4">
                  <ListTodo className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">No tasks yet</p>
                  <Link to="/todo"><Button variant="outline" size="sm" className="mt-3">Add a task</Button></Link>
                </div>
              ) : (
                <div className="space-y-2">
                  {todos.slice(0, 5).map(todo => (
                    <div key={todo.id} className={`flex items-start gap-2 text-sm ${todo.completed ? 'opacity-50' : ''}`}>
                      <div className={`h-4 w-4 mt-0.5 rounded border shrink-0 ${todo.completed ? 'bg-primary border-primary' : 'border-muted-foreground'}`} />
                      <span className={todo.completed ? 'line-through text-muted-foreground' : ''}>{todo.text}</span>
                    </div>
                  ))}
                  {pendingTodos > 5 && (
                    <p className="text-xs text-muted-foreground pt-1">+{pendingTodos - 5} more tasks</p>
                  )}
                  <Link to="/todo">
                    <Button variant="outline" size="sm" className="w-full mt-2">Manage Tasks</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
