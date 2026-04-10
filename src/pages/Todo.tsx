import { useState } from 'react';
import { useFlashcardStore } from '@/store/flashcardStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, CheckCircle, Circle, Calendar, BookOpen } from 'lucide-react';
import type { Todo } from '@/types/flashcard';

const QUICK_TASKS = [
  "Review 30 flashcards",
  "Complete a grammar lesson",
  "Practice one speaking topic",
  "Study verb conjugations",
  "Review weak vocabulary",
  "Finish importing new words",
];

export default function TodoPage() {
  const { todos, createTodo, updateTodo, deleteTodo } = useFlashcardStore();
  const [newText, setNewText] = useState('');
  const [newDate, setNewDate] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'done'>('all');

  const handleAdd = () => {
    const text = newText.trim();
    if (!text) return;
    createTodo(text, newDate || undefined);
    setNewText('');
    setNewDate('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleAdd();
  };

  const today = new Date().toISOString().split('T')[0];

  const filtered = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'done') return t.completed;
    return true;
  }).sort((a, b) => {
    // Sort: incomplete first, then by due date, then by creation
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    if (a.dueDate && b.dueDate) return a.dueDate.localeCompare(b.dueDate);
    if (a.dueDate) return -1;
    if (b.dueDate) return 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const pending = todos.filter(t => !t.completed).length;
  const done = todos.filter(t => t.completed).length;
  const overdue = todos.filter(t => !t.completed && t.dueDate && t.dueDate < today).length;

  const isOverdue = (todo: Todo) => !todo.completed && todo.dueDate && todo.dueDate < today;
  const isDueToday = (todo: Todo) => !todo.completed && todo.dueDate === today;

  return (
    <div className="page-transition max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold">Study Tasks</h1>
        <p className="text-muted-foreground mt-1">Keep track of what to study and practice.</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Pending', value: pending, color: 'text-foreground' },
          { label: 'Completed', value: done, color: 'text-srs-good' },
          { label: 'Overdue', value: overdue, color: overdue > 0 ? 'text-srs-again' : 'text-muted-foreground' },
        ].map(s => (
          <Card key={s.label}>
            <CardContent className="py-4 text-center">
              <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add task */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-medium">Add a task</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-2">
            <Input
              value={newText}
              onChange={e => setNewText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What do you want to study?"
              className="flex-1"
            />
            <Input
              type="date"
              value={newDate}
              onChange={e => setNewDate(e.target.value)}
              className="w-36"
            />
            <Button onClick={handleAdd} disabled={!newText.trim()} size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick-add suggestions */}
          <div>
            <p className="text-xs text-muted-foreground mb-2">Quick add:</p>
            <div className="flex flex-wrap gap-1.5">
              {QUICK_TASKS.map(t => (
                <button
                  key={t}
                  onClick={() => { createTodo(t); }}
                  className="text-xs px-2 py-1 rounded-full border border-dashed border-muted-foreground/40 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex gap-2">
        {(['all', 'active', 'done'] as const).map(f => (
          <Button
            key={f}
            variant={filter === f ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter(f)}
            className="capitalize"
          >
            {f}
          </Button>
        ))}
      </div>

      {/* Task list */}
      {filtered.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="py-10 text-center">
            <BookOpen className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
            <p className="text-muted-foreground">
              {filter === 'done' ? 'No completed tasks yet.' : 'All done! Add a new task above.'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {filtered.map(todo => (
            <Card key={todo.id} className={`transition-opacity ${todo.completed ? 'opacity-60' : ''}`}>
              <CardContent className="py-3 px-4">
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => updateTodo(todo.id, { completed: !todo.completed })}
                    className="mt-0.5 shrink-0 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {todo.completed
                      ? <CheckCircle className="h-5 w-5 text-srs-good" />
                      : <Circle className="h-5 w-5" />}
                  </button>

                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {todo.text}
                    </p>
                    {todo.dueDate && (
                      <div className="flex items-center gap-1 mt-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className={`text-xs ${isOverdue(todo) ? 'text-srs-again font-medium' : isDueToday(todo) ? 'text-amber-600 font-medium' : 'text-muted-foreground'}`}>
                          {isOverdue(todo) ? 'Overdue · ' : isDueToday(todo) ? 'Today · ' : ''}
                          {new Date(todo.dueDate + 'T12:00:00').toLocaleDateString('en', { month: 'short', day: 'numeric' })}
                        </span>
                        {isOverdue(todo) && <Badge variant="destructive" className="text-xs py-0 px-1">Late</Badge>}
                        {isDueToday(todo) && <Badge className="text-xs py-0 px-1 bg-amber-500">Today</Badge>}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="shrink-0 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {done > 0 && filter !== 'active' && (
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-muted-foreground"
          onClick={() => todos.filter(t => t.completed).forEach(t => deleteTodo(t.id))}
        >
          Clear {done} completed task{done > 1 ? 's' : ''}
        </Button>
      )}
    </div>
  );
}
