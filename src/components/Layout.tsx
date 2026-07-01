import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FolderOpen, Plus, BookOpen, GraduationCap, BarChart3, Menu, X, Mic, ListTodo, Sparkles, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', icon: Home, label: 'Dashboard' },
  { path: '/decks', icon: FolderOpen, label: 'Decks' },
  { path: '/import', icon: Plus, label: 'Import' },
  { path: '/practice', icon: BookOpen, label: 'Review' },
  { path: '/grammar', icon: GraduationCap, label: 'Grammar' },
  { path: '/reading', icon: Newspaper, label: 'Reading' },
  { path: '/speaking', icon: Mic, label: 'Speaking' },
  { path: '/helper', icon: Sparkles, label: 'Helper' },
  { path: '/todo', icon: ListTodo, label: 'Tasks' },
  { path: '/stats', icon: BarChart3, label: 'Stats' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:flex md:w-60 md:flex-col bg-sidebar border-r border-sidebar-border">
        <div className="flex h-16 items-center gap-2 px-6 border-b border-sidebar-border">
          <span className="text-2xl">🇩🇪</span>
          <h1 className="font-serif text-xl font-bold text-sidebar-foreground">GermanCards</h1>
        </div>
        <nav className="flex-1 py-5 px-3 space-y-0.5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-4.5 w-4.5" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <p className="text-xs text-sidebar-foreground/50 text-center">Spaced Repetition · SM-2</p>
        </div>
      </aside>

      {/* Mobile header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-background border-b border-border z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🇩🇪</span>
          <h1 className="font-serif text-base font-bold">GermanCards</h1>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40" onClick={() => setMobileMenuOpen(false)} />
      )}

      <div className={cn(
        "md:hidden fixed top-14 left-0 right-0 bg-background border-b border-border z-50 transition-all duration-200",
        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      )}>
        <nav className="p-3 grid grid-cols-2 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <main className="md:pl-60 pt-14 md:pt-0">
        <div className="min-h-screen p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
