'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  BookOpen,
  Brain,
  ClipboardCheck,
  Command,
  FlaskConical,
  Layers,
  Library as LibraryIcon,
  BarChart3,
  Search,
  Sigma,
  Sparkles,
  Zap,
} from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { searchLibrary, type SearchItem } from '@/data/search'
import { useStudy } from '@/store/useStudy'

const KIND_ICON = {
  section: BookOpen,
  concept: Brain,
  chapter: Layers,
  lab: FlaskConical,
} as const

type ViewName = 'library' | 'playground' | 'flashcards' | 'formulas' | 'exam' | 'progress' | 'search'

/** Quick jumps — shown when the palette opens (empty or matching query) */
const QUICK_ACTIONS: {
  view: ViewName
  label: string
  hint: string
  icon: typeof Search
  examMisses?: boolean
  accent?: 'emerald'
}[] = [
  {
    view: 'search',
    label: 'Search everything',
    hint: 'full-text across all 1,825 sections',
    icon: Search,
    accent: 'emerald',
  },
  { view: 'library', label: 'Library', hint: '8 books & 336 chapters', icon: LibraryIcon },
  { view: 'playground', label: 'Lab floor', hint: '52 interactive labs', icon: FlaskConical },
  { view: 'flashcards', label: 'Flashcard decks', hint: '10,365 cards · SRS spaced repetition', icon: Layers },
  {
    view: 'flashcards',
    examMisses: true,
    label: 'Drill exam misses',
    hint: 'questions you got wrong, scheduled',
    icon: Zap,
  },
  { view: 'formulas', label: 'Formula sheet', hint: '1,668 printable formulas', icon: Sigma },
  { view: 'exam', label: 'Exam simulator', hint: '6,947-question bank', icon: ClipboardCheck },
  { view: 'progress', label: 'Progress dashboard', hint: 'streaks, notes & stats', icon: BarChart3 },
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useStudy((s) => s.navigate)

  const results = useMemo(() => searchLibrary(query), [query])

  const jump = useCallback(
    (item: SearchItem) => {
      setOpen(false)
      setQuery('')
      if (item.sectionId) navigate({ name: 'lesson', sectionId: item.sectionId })
      else if (item.chapterId) navigate({ name: 'chapter', chapterId: item.chapterId })
    },
    [navigate]
  )

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === '/' && !open) {
        const target = e.target as HTMLElement
        const tag = target.tagName
        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && !target.isContentEditable) {
          e.preventDefault()
          // inside the search view, '/' belongs to the big search input
          const searchInput = document.querySelector<HTMLInputElement>('[data-sv-search-input]')
          if (searchInput) {
            searchInput.focus()
            return
          }
          setOpen(true)
        }
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open])

  const groups = useMemo(() => {
    const g: Record<string, SearchItem[]> = {}
    for (const r of results) {
      const label = r.kind === 'concept' ? 'Concepts' : r.kind === 'chapter' ? 'Chapters' : 'Lessons'
      ;(g[label] ??= []).push(r)
    }
    return g
  }, [results])

  // quick actions that match the current query (all of them when query is empty)
  const quickMatches = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return QUICK_ACTIONS
    return QUICK_ACTIONS.filter(
      (qa) => qa.label.toLowerCase().includes(q) || qa.hint.includes(q)
    )
  }, [query])

  return (
    <>
      {/* palette trigger — the full-text search button lives in the header */}
      <button
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card/60 text-muted-foreground transition-all hover:border-emerald-400/40 hover:text-foreground"
        aria-label="Command palette"
        title="Command palette (⌘K)"
      >
        <Command className="h-4 w-4" />
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search lessons, concepts, theorems… (e.g. 'dijkstra', 'pigeonhole', 'bayes')"
          value={query}
          onValueChange={setQuery}
        />
        <CommandList className="max-h-[420px]">
          <CommandEmpty>
            {query.trim() ? (
              <button
                type="button"
                onClick={() => {
                  const q = query.trim()
                  setOpen(false)
                  setQuery('')
                  navigate({ name: 'search', query: q })
                }}
                className="mx-1 mb-1 flex w-[calc(100%-0.5rem)] items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-muted/60"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10">
                  <Search className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-300" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate text-[13.5px] font-semibold">
                    Search content for{' '}
                    <span className="text-emerald-600 dark:text-emerald-300">“{query.trim()}”</span>
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    every concept, example & takeaway — full-text
                  </span>
                </span>
                <span className="ml-auto shrink-0 rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  go
                </span>
              </button>
            ) : (
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" /> No matches — try “induction”, “graph”, or “gcd”.
              </span>
            )}
          </CommandEmpty>
          {quickMatches.length > 0 && (
            <CommandGroup heading="Go to">
              {quickMatches.map((qa) => {
                return (
                  <CommandItem
                    key={qa.label}
                    value={`go to ${qa.label} ${qa.hint}`}
                    onSelect={() => {
                      setOpen(false)
                      setQuery('')
                      navigate(
                        qa.examMisses
                          ? { name: 'flashcards', examMisses: true }
                          : { name: qa.view }
                      )
                    }}
                    className="gap-3 py-2.5"
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${
                        qa.accent === 'emerald'
                          ? 'border-emerald-400/25 bg-emerald-400/10'
                          : 'border-amber-300/25 bg-amber-300/10'
                      }`}
                    >
                      <qa.icon
                        className={`h-3.5 w-3.5 ${
                          qa.accent === 'emerald'
                            ? 'text-emerald-600 dark:text-emerald-300'
                            : 'text-amber-300'
                        }`}
                      />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="truncate text-[13.5px] font-semibold">{qa.label}</span>
                      <span className="truncate text-xs text-muted-foreground">{qa.hint}</span>
                    </span>
                    <span className="ml-auto shrink-0 rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      jump
                    </span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          )}
          {Object.entries(groups).map(([label, items]) => (
            <CommandGroup key={label} heading={label}>
              {items.map((item) => {
                const Icon = KIND_ICON[item.kind] ?? BookOpen
                return (
                  <CommandItem
                    key={item.id}
                    value={`${item.title} ${item.subtitle} ${item.context}`}
                    onSelect={() => jump(item)}
                    className="gap-3 py-2.5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10">
                      <Icon className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="truncate text-[13.5px] font-semibold">{item.title}</span>
                      <span className="truncate text-xs text-muted-foreground">{item.subtitle}</span>
                    </span>
                    <span className="ml-auto shrink-0 rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {item.context}
                    </span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
