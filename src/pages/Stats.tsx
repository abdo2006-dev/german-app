import { useMemo } from 'react';
import { useFlashcardStore } from '@/store/flashcardStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Flame, Target, TrendingUp, AlertTriangle, BookOpen, CheckCircle } from 'lucide-react';

export default function Stats() {
  const { decks, cards, reviewLogs, getDeckStats, getTodayStats, getReviewHistory, getStreakDays, getWeakCards, getLeeches } = useFlashcardStore();

  const todayStats = getTodayStats();
  const reviewHistory = getReviewHistory(30);
  const streak = getStreakDays();
  const weakCards = getWeakCards(10);
  const leeches = getLeeches();

  const ratingDist = useMemo(() => {
    const c = { again: 0, hard: 0, good: 0, easy: 0 };
    reviewLogs.forEach(l => { c[l.rating]++; });
    return [
      { name: 'Again', value: c.again, color: 'hsl(var(--srs-again))' },
      { name: 'Hard', value: c.hard, color: 'hsl(var(--srs-hard))' },
      { name: 'Good', value: c.good, color: 'hsl(var(--srs-good))' },
      { name: 'Easy', value: c.easy, color: 'hsl(var(--srs-easy))' },
    ];
  }, [reviewLogs]);

  const cardStateDist = useMemo(() => {
    const c = { new: 0, learning: 0, review: 0 };
    cards.forEach(card => {
      if (card.state === 'new') c.new++;
      else if (card.state === 'learning' || card.state === 'relearning') c.learning++;
      else c.review++;
    });
    return [
      { name: 'New', value: c.new, color: 'hsl(var(--srs-new))' },
      { name: 'Learning', value: c.learning, color: 'hsl(var(--srs-learning))' },
      { name: 'Mature', value: c.review, color: 'hsl(var(--srs-review))' },
    ];
  }, [cards]);

  const totalReviews = reviewLogs.length;
  const totalCorrect = reviewLogs.filter(l => l.rating === 'good' || l.rating === 'easy').length;
  const overallAccuracy = totalReviews > 0 ? Math.round((totalCorrect / totalReviews) * 100) : 0;
  const todayAccuracy = todayStats.reviewed > 0 ? Math.round((todayStats.correct / todayStats.reviewed) * 100) : null;

  // Heatmap data (last 12 weeks = 84 days)
  const heatmapData = useMemo(() => getReviewHistory(84), [reviewLogs]); // eslint-disable-line
  const maxDay = Math.max(...heatmapData.map(d => d.count), 1);

  function heatColor(count: number) {
    if (count === 0) return 'bg-muted';
    const intensity = Math.min(count / maxDay, 1);
    if (intensity < 0.25) return 'bg-emerald-200';
    if (intensity < 0.5) return 'bg-emerald-400';
    if (intensity < 0.75) return 'bg-emerald-500';
    return 'bg-emerald-700';
  }

  return (
    <div className="page-transition max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold">Statistics</h1>
        <p className="text-muted-foreground mt-1">Your German learning progress at a glance.</p>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Flame, iconCls: 'text-orange-500', bg: 'bg-orange-100', label: 'Day Streak', value: streak, suffix: streak === 1 ? ' day' : ' days' },
          { icon: CheckCircle, iconCls: 'text-emerald-600', bg: 'bg-emerald-100', label: 'Total Reviews', value: totalReviews, suffix: '' },
          { icon: TrendingUp, iconCls: 'text-blue-600', bg: 'bg-blue-100', label: 'All-time Accuracy', value: overallAccuracy, suffix: '%' },
          { icon: Target, iconCls: 'text-violet-600', bg: 'bg-violet-100', label: 'Today', value: todayStats.reviewed, suffix: ' reviews' },
        ].map(s => (
          <Card key={s.label}>
            <CardContent className="pt-5 pb-4">
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-lg ${s.bg} flex items-center justify-center shrink-0`}>
                  <s.icon className={`h-5 w-5 ${s.iconCls}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold leading-none">{s.value}{s.suffix}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Today detail */}
      {todayStats.reviewed > 0 && (
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="font-medium text-sm">Today's session</p>
              <div className="flex gap-6 text-sm">
                <span className="text-srs-good font-medium">✓ {todayStats.correct} correct</span>
                <span className="text-srs-again font-medium">✗ {todayStats.wrong} wrong</span>
                <span className="font-medium">{todayAccuracy}% accuracy</span>
                {todayStats.newSeen > 0 && <span className="text-srs-new font-medium">+{todayStats.newSeen} new cards</span>}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Activity heatmap */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-medium">Review Heatmap (12 weeks)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${Math.ceil(heatmapData.length / 7)}, minmax(0, 1fr))`, minWidth: '400px' }}>
              {Array.from({ length: Math.ceil(heatmapData.length / 7) }).map((_, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, dayIdx) => {
                    const dataIdx = weekIdx * 7 + dayIdx;
                    const day = heatmapData[dataIdx];
                    if (!day) return <div key={dayIdx} className="h-3 w-3" />;
                    return (
                      <div
                        key={dayIdx}
                        title={`${day.date}: ${day.count} reviews`}
                        className={`h-3 w-3 rounded-sm ${heatColor(day.count)} cursor-pointer`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
            <span>Less</span>
            {['bg-muted', 'bg-emerald-200', 'bg-emerald-400', 'bg-emerald-500', 'bg-emerald-700'].map(cls => (
              <div key={cls} className={`h-3 w-3 rounded-sm ${cls}`} />
            ))}
            <span>More</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Reviews 30 days */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">Reviews – Last 30 Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={reviewHistory}>
                  <XAxis dataKey="date" tickFormatter={v => new Date(v + 'T12:00:00').getDate().toString()} tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip
                    labelFormatter={v => new Date(v + 'T12:00:00').toLocaleDateString()}
                    formatter={(val, name) => [val, name === 'count' ? 'Total' : 'Correct']}
                    contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8 }}
                  />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="correct" fill="hsl(var(--srs-good))" radius={[3, 3, 0, 0]} opacity={0.6} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Rating dist */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">All-time Rating Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            {totalReviews > 0 ? (
              <>
                <div className="h-44">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={ratingDist} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={4} dataKey="value">
                        {ratingDist.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                      </Pie>
                      <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {ratingDist.map(r => (
                    <div key={r.name} className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: r.color }} />
                      <span>{r.name}</span>
                      <span className="text-muted-foreground ml-auto">{r.value}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="h-44 flex items-center justify-center text-muted-foreground text-sm">No reviews yet</div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Card states */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-medium">Card States</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {cardStateDist.map(s => (
              <div key={s.name} className="text-center p-4 rounded-lg bg-muted/30">
                <div className="text-3xl font-bold" style={{ color: s.color }}>{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.name}</div>
                <div className="text-xs text-muted-foreground">{cards.length > 0 ? Math.round((s.value / cards.length) * 100) : 0}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Per-deck breakdown */}
      {decks.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">Cards by Deck</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {decks.map(deck => {
                const stats = getDeckStats(deck.id);
                const total = stats.newCount + stats.learningCount + stats.reviewCount;
                const maturity = total > 0 ? Math.round((stats.reviewCount / total) * 100) : 0;
                return (
                  <div key={deck.id}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="font-medium truncate">{deck.name}</span>
                      <div className="flex gap-3 items-center text-xs text-muted-foreground shrink-0 ml-4">
                        {stats.dueCount > 0 && <Badge variant="destructive" className="text-xs py-0">{stats.dueCount} due</Badge>}
                        <span>{total} cards · {maturity}% mature</span>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden flex">
                      <div className="h-full bg-srs-new" style={{ width: `${total > 0 ? (stats.newCount / total) * 100 : 0}%` }} />
                      <div className="h-full bg-srs-learning" style={{ width: `${total > 0 ? (stats.learningCount / total) * 100 : 0}%` }} />
                      <div className="h-full bg-srs-review" style={{ width: `${total > 0 ? (stats.reviewCount / total) * 100 : 0}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Weak cards / leeches */}
      {weakCards.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />Weak Cards
              {leeches.length > 0 && <Badge variant="outline" className="text-xs text-amber-600 border-amber-300">{leeches.length} leeches</Badge>}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mb-3">Cards you've struggled with most — worth extra attention.</p>
            <div className="space-y-2">
              {weakCards.slice(0, 8).map(card => (
                <div key={card.id} className="flex items-center justify-between text-sm py-2 border-b last:border-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="german-word text-base">{card.germanWord}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-muted-foreground truncate">{card.englishMeaning}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    <Badge variant="outline" className="text-xs text-srs-again border-red-200">
                      {card.lapses} lapse{card.lapses !== 1 ? 's' : ''}
                    </Badge>
                    {card.flags?.leech && <Badge className="text-xs bg-amber-500">Leech</Badge>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
