'use client'

import {
  Library,
  FlaskConical,
  BarChart3,
  ClipboardList,
  Sparkles,
  Layers,
  Sigma,
  Search,
  Brain,
  Swords,
} from 'lucide-react'
import { useStudy } from '@/store/useStudy'
import { CommandPalette } from './command-palette'
import { ThemeToggle } from './theme-toggle'

const NAV = [
  { view: 'library', label: 'Library', icon: Library, easy: 'Home: all books + the Knowledge Universe' },
  { view: 'studio', label: 'Studio', icon: Sparkles, easy: 'Ask the AI faculty' },
  { view: 'twin', label: 'Twin', icon: Brain, easy: 'Brain scan of what you know' },
  { view: 'syllabus', label: 'Syllabus', icon: ClipboardList, easy: 'Map any syllabus to your books' },
  { view: 'arena', label: 'Arena', icon: Swords, easy: 'Live 1v1 quiz battles' },
  { view: 'playground', label: 'Labs', icon: FlaskConical, easy: 'Play with live demos' },
  { view: 'flashcards', label: 'Cards', icon: Layers, easy: 'Quick memory cards' },
  { view: 'formulas', label: 'Formulas', icon: Sigma, easy: 'All key formulas' },
  { view: 'progress', label: 'Progress', icon: BarChart3, easy: 'Your learning score' },
] as const

export function Header() {
  const view = useStudy((s) => s.view)
  const navigate = useStudy((s) => s.navigate)
  const easyMode = useStudy((s) => s.easyMode)
  const setEasyMode = useStudy((s) => s.setEasyMode)

  const currentView = view.name

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl print:hidden">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6">
        {/* Logo */}
        <button
          onClick={() => navigate({ name: 'library' })}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="StudyVerse home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-amber-300/10 border border-emerald-400/30">
            <Sparkles className="h-4.5 w-4.5 text-emerald-300 transition-transform duration-500 group-hover:rotate-12" />
            <span className="absolute inset-0 rounded-xl bg-emerald-400/10 blur-md sv-pulse-glow" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-tight">
              Study<span className="text-emerald-300">Verse</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              master content labs
            </span>
          </span>
        </button>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          {/* Full-text search — opens the search view (palette keeps ⌘K) */}
          <button
            onClick={() => navigate({ name: 'search' })}
            aria-label="Search lessons"
            className={`group hidden items-center gap-2 rounded-full border bg-card/60 px-3.5 py-1.5 text-[13px] transition-all hover:border-emerald-400/40 hover:text-foreground md:flex ${
              view.name === 'search'
                ? 'border-emerald-400/40 bg-emerald-400/10 text-foreground'
                : 'border-border/70 text-muted-foreground'
            }`}
          >
            <Search className="h-3.5 w-3.5 text-emerald-300/80" />
            <span>Search lessons…</span>
            <kbd className="ml-1 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-semibold">
              ⌘K
            </kbd>
          </button>
          {/* mobile search trigger */}
          <button
            onClick={() => navigate({ name: 'search' })}
            aria-label="Search lessons"
            aria-current={view.name === 'search' ? 'page' : undefined}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-card/60 transition-all hover:border-emerald-400/40 hover:text-foreground md:hidden ${
              view.name === 'search'
                ? 'border-emerald-400/40 bg-emerald-400/10 text-foreground'
                : 'border-border/70 text-muted-foreground'
            }`}
          >
            <Search className="h-4 w-4 text-emerald-300/80" />
          </button>
          <CommandPalette />
          <ThemeToggle />
          {/* Easy help toggle — simple words everywhere, ON by default */}
          <button
            onClick={() => setEasyMode(!easyMode)}
            aria-pressed={easyMode}
            title={easyMode ? 'Easy help is ON: yellow simple boxes are shown. Click to hide.' : 'Easy help is OFF. Click to show simple yellow boxes.'}
            aria-label={easyMode ? 'Turn off easy help' : 'Turn on easy help'}
            className={`flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3 text-[12px] font-bold transition-all ${
              easyMode
                ? 'border-amber-400/50 bg-amber-400/15 text-amber-600 dark:text-amber-200'
                : 'border-border/70 bg-card/60 text-muted-foreground hover:text-foreground'
            }`}
          >
            <span aria-hidden>💡</span>
            <span className="hidden xl:inline">{easyMode ? 'Easy: ON' : 'Easy: OFF'}</span>
          </button>

          {/* Nav */}
          <nav
            className="flex items-center gap-0.5 overflow-x-auto rounded-full border border-border/70 bg-card/60 p-1 scrollbar-none print:hidden sm:gap-1"
            aria-label="Primary"
          >
          {NAV.map(({ view: v, label, icon: Icon, easy }) => {
            const active = currentView === v
            return (
              <button
                key={v}
                aria-label={`${label} — ${easy}`}
                title={`${label} — ${easy}`}
                onClick={() =>
                  navigate(
                    v === 'library'
                      ? { name: 'library' }
                      : v === 'flashcards'
                        ? { name: 'flashcards' }
                        : v === 'formulas'
                          ? { name: 'formulas' }
                          : v === 'studio'
                            ? { name: 'studio' }
                            : v === 'twin'
                              ? { name: 'twin' }
                              : v === 'arena'
                                ? { name: 'arena' }
                                : { name: v }
                  )
                }
                className={`flex shrink-0 items-center gap-2 rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-all sm:px-3 lg:px-4 ${
                  active
                    ? 'bg-emerald-400/15 text-emerald-200 shadow-[inset_0_0_0_1px_rgba(52,211,153,0.25)]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden lg:inline">{label}</span>
              </button>
            )
          })}
          </nav>
        </div>
      </div>
    </header>
  )
}
