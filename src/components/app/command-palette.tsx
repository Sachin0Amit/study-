'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { toast } from 'sonner'
import { useTheme } from 'next-themes'
import {
  BarChart3,
  BookOpen,
  Brain,
  ClipboardCheck,
  ClipboardList,
  CloudDownload,
  Command,
  FlaskConical,
  Globe,
  Keyboard,
  Layers,
  Library as LibraryIcon,
  Lightbulb,
  Route,
  Scale,
  Search,
  Sigma,
  Sparkles,
  Swords,
  Terminal,
  Timer,
  Wand2,
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
import {
  FocusTimer,
  requestFocusStart,
  requestFocusStats,
  requestFocusToggle,
} from './focus-timer'
import { ShortcutsOverlay, OPEN_SHORTCUTS_EVENT } from './shortcuts-overlay'

const KIND_ICON = {
  section: BookOpen,
  concept: Brain,
  chapter: Layers,
  lab: FlaskConical,
  universe: Globe,
} as const

type ViewName =
  | 'library'
  | 'playground'
  | 'flashcards'
  | 'formulas'
  | 'exam'
  | 'progress'
  | 'search'
  | 'syllabus'
  | 'studio'
  | 'twin'
  | 'remix'
  | 'arena'
  | 'paper-dna'
  | 'palace'

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
    hint: 'full-text across all sections',
    icon: Search,
    accent: 'emerald',
  },
  {
    view: 'studio',
    label: 'Teaching Studio',
    hint: '5 AI teachers · debate · viva',
    icon: Sparkles,
    accent: 'emerald',
  },
  {
    view: 'twin',
    label: 'Cognitive Digital Twin',
    hint: 'live brain scan of what you know',
    icon: Brain,
    accent: 'emerald',
  },
  {
    view: 'remix',
    label: 'Curriculum Remix',
    hint: 'the library re-orders itself for you',
    icon: Route,
  },
  {
    view: 'syllabus',
    label: 'Syllabus Mapper',
    hint: 'Map any syllabus to your library',
    icon: ClipboardList,
  },
  { view: 'library', label: 'Library', hint: '37 subject tracks · 540 chapters · Knowledge Universe', icon: LibraryIcon },
  { view: 'arena', label: 'Study Arena', hint: 'live 1v1 quiz battles · ELO', icon: Swords },
  { view: 'paper-dna', label: 'Paper-DNA Analyzer', hint: 'forensic topic prediction', icon: Scale },
  { view: 'palace', label: 'Memory Palaces', hint: 'visual journeys + narration', icon: Wand2 },
  { view: 'playground', label: 'Lab floor', hint: '62 labs + simulators + code judge', icon: FlaskConical },
  { view: 'flashcards', label: 'Flashcard decks', hint: '12,400+ cards · SRS', icon: Layers },
  {
    view: 'flashcards',
    examMisses: true,
    label: 'Drill missed questions',
    hint: 'questions you got wrong, scheduled',
    icon: Zap,
  },
  { view: 'formulas', label: 'Formula sheet', hint: '1,908 printable formulas', icon: Sigma },
  { view: 'exam', label: 'Test simulator', hint: '9,394-question bank', icon: ClipboardCheck },
  { view: 'progress', label: 'Progress dashboard', hint: 'streaks, notes & stats', icon: BarChart3 },
]

/** X10 Pro system actions — run in place (no navigation) */
const SYSTEM_ACTIONS: {
  label: string
  hint: string
  icon: typeof Search
  run: () => void
}[] = [
  {
    label: 'Start focus session (25m)',
    hint: 'deep-work timer · soft chime when done',
    icon: Timer,
    run: () => requestFocusStart(25),
  },
  {
    label: 'Focus stats',
    hint: 'today · 7-day chart · streak',
    icon: BarChart3,
    run: () => requestFocusStats(),
  },
  {
    label: 'Keyboard shortcuts',
    hint: 'press ? anytime for the cheatsheet',
    icon: Keyboard,
    run: () => window.dispatchEvent(new CustomEvent(OPEN_SHORTCUTS_EVENT)),
  },
  {
    label: 'Pin books for offline',
    hint: 'pick books to download for no-signal study',
    icon: CloudDownload,
    run: () => {
      // P9's download manager listens for this event; preventDefault() marks it handled
      const handled = window.dispatchEvent(
        new CustomEvent('sv:open-download-manager', { cancelable: true })
      )
      if (!handled) return
      toast('The offline download manager is not available yet — landing with offline packs.', {
        icon: <CloudDownload className="h-4 w-4 text-amber-300" />,
      })
    },
  },
]

/** 'g' + letter view jumps */
const G_VIEWS: Record<string, 'library' | 'twin' | 'studio' | 'arena' | 'progress'> = {
  l: 'library',
  t: 'twin',
  s: 'studio',
  a: 'arena',
  p: 'progress',
}

/** 'o' — flip offline mode. Prefers clicking the header pill; falls back to
 *  the localStorage pref + a storage ping (the offline layer listens for it). */
function toggleOfflineMode() {
  const pill = document.querySelector<HTMLButtonElement>('button[aria-label="Toggle offline mode"]')
  if (pill) {
    pill.click()
    return
  }
  try {
    const next = localStorage.getItem('sv-offline-mode') !== '1'
    localStorage.setItem('sv-offline-mode', next ? '1' : '0')
    window.dispatchEvent(new Event('storage'))
    toast(
      next
        ? 'Offline mode on — lessons you open will cache for no-signal study'
        : 'Offline mode off'
    )
  } catch {
    /* storage unavailable */
  }
}

/** execute an OS action returned by /api/os/command */
function useOsExecutor() {
  const navigate = useStudy((s) => s.navigate)
  return useCallback(
    (action: Record<string, unknown>) => {
      switch (action.action) {
        case 'open': {
          const view = String(action.view ?? 'library')
          if (view === 'lesson' && typeof action.sectionId === 'string') {
            navigate({ name: 'lesson', sectionId: action.sectionId })
          } else if (
            ['library', 'playground', 'progress', 'formulas', 'syllabus'].includes(view)
          ) {
            navigate({ name: view as 'library' | 'playground' | 'progress' | 'formulas' | 'syllabus' })
          } else {
            navigate({ name: 'library' })
          }
          break
        }
        case 'remix':
          navigate({ name: 'remix' })
          if (typeof action.goal === 'string' && action.goal) {
            // hand the goal to the remix view via sessionStorage handshake
            try {
              sessionStorage.setItem('sv-remix-goal', action.goal.slice(0, 200))
              if (typeof action.horizonDays === 'number') {
                sessionStorage.setItem('sv-remix-horizon', String(action.horizonDays))
              }
            } catch {
              /* storage unavailable */
            }
          }
          break
        case 'studio':
          navigate({ name: 'studio' })
          if (typeof action.message === 'string' && action.message) {
            try {
              sessionStorage.setItem('sv-studio-question', action.message.slice(0, 500))
            } catch {
              /* storage unavailable */
            }
          }
          break
        case 'exam':
          navigate({ name: 'exam' })
          break
        case 'flashcards':
          navigate({
            name: 'flashcards',
            examMisses: action.examMisses === true ? true : undefined,
          })
          break
        case 'arena':
          navigate({ name: 'arena' })
          break
        case 'twin':
          navigate({ name: 'twin' })
          break
        case 'paper-dna':
          navigate({ name: 'paper-dna' })
          break
        case 'palace':
          navigate({ name: 'palace', sectionKey: typeof action.sectionId === 'string' ? action.sectionId : undefined })
          break
        case 'labs':
          navigate({ name: 'playground' })
          break
        case 'syllabus':
          navigate({ name: 'syllabus' })
          break
        case 'progress':
          navigate({ name: 'progress' })
          break
        case 'search':
          navigate({ name: 'search', query: typeof action.query === 'string' ? action.query : '' })
          break
        case 'briefing':
          navigate({ name: 'library' })
          try {
            sessionStorage.setItem('sv-show-briefing', '1')
          } catch {
            /* storage unavailable */
          }
          break
        case 'unknown':
        default:
          if (typeof action.reply === 'string' && action.reply) {
            toast(action.reply, { icon: <Terminal className="h-4 w-4 text-emerald-300" /> })
          }
          break
      }
    },
    [navigate]
  )
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [osBusy, setOsBusy] = useState(false)
  const navigate = useStudy((s) => s.navigate)
  const executeOs = useOsExecutor()
  const osBusyRef = useRef(false)
  const gArmedRef = useRef(0)
  const { resolvedTheme, setTheme } = useTheme()

  const results = useMemo(() => searchLibrary(query), [query])

  const jump = useCallback(
    (item: SearchItem) => {
      setOpen(false)
      setQuery('')
      if (item.universeTopicId && item.universeDomain) {
        navigate({
          name: 'library',
          domain: item.universeDomain,
          topicId: item.universeTopicId,
        })
      } else if (item.sectionId) navigate({ name: 'lesson', sectionId: item.sectionId })
      else if (item.chapterId) navigate({ name: 'chapter', chapterId: item.chapterId })
    },
    [navigate]
  )

  /** natural-language route through the OS */
  const askOs = useCallback(async () => {
    const text = query.trim()
    if (!text || osBusyRef.current) return
    osBusyRef.current = true
    setOsBusy(true)
    try {
      const res = await fetch('/api/os/command', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      const action = await res.json()
      setOpen(false)
      setQuery('')
      // slight delay so the palette closes before navigation paints
      setTimeout(() => executeOs(action), 60)
    } catch {
      toast.error('The OS is unreachable — try a direct jump instead.')
    } finally {
      osBusyRef.current = false
      setOsBusy(false)
    }
  }, [query, executeOs])

  useEffect(() => {
    const isTypingTarget = (t: EventTarget | null): boolean => {
      const el = t as HTMLElement | null
      if (!el) return false
      return (
        el.tagName === 'INPUT' ||
        el.tagName === 'TEXTAREA' ||
        el.tagName === 'SELECT' ||
        el.isContentEditable
      )
    }
    const anyDialogOpen = () =>
      document.querySelector('[role="dialog"][data-state="open"], dialog[open]') !== null

    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
        return
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
          return
        }
      }

      /* ---- X10 Pro global shortcuts (only when not typing / not in a dialog) ---- */
      if (e.metaKey || e.ctrlKey || e.altKey || e.isComposing) return
      if (open || e.defaultPrevented || isTypingTarget(e.target)) return
      const anyDialog = anyDialogOpen()

      // '?' → the keyboard shortcuts cheatsheet
      if (e.key === '?') {
        if (anyDialog) return
        e.preventDefault()
        window.dispatchEvent(new CustomEvent(OPEN_SHORTCUTS_EVENT))
        return
      }

      const key = e.key.toLowerCase()
      const now = Date.now()

      // 'g' + letter → view jump (g l / g t / g s / g a / g p, 1.5s window)
      if (gArmedRef.current !== 0) {
        const armedAt = gArmedRef.current
        gArmedRef.current = 0
        if (now - armedAt < 1500) {
          const dest = G_VIEWS[key]
          if (dest) {
            e.preventDefault()
            navigate({ name: dest })
            return
          }
        }
      }
      if (key === 'g' && !anyDialog) {
        gArmedRef.current = now
        return
      }

      if (anyDialog) return

      switch (key) {
        case 'e': {
          e.preventDefault()
          const { easyMode, setEasyMode } = useStudy.getState()
          setEasyMode(!easyMode)
          toast(
            easyMode ? 'Easy help off' : 'Easy help on — simple yellow boxes everywhere',
            { icon: <Lightbulb className="h-4 w-4 text-amber-300" /> }
          )
          return
        }
        case 't': {
          e.preventDefault()
          setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          return
        }
        case 'f': {
          // the test simulator & mock paper runner own 'f' (flag) while running
          const viewName = useStudy.getState().view.name
          if (viewName === 'exam' || viewName === 'paper-dna') return
          e.preventDefault()
          requestFocusToggle()
          return
        }
        case 'o': {
          e.preventDefault()
          toggleOfflineMode()
          return
        }
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open, navigate, resolvedTheme, setTheme])

  const groups = useMemo(() => {
    const g: Record<string, SearchItem[]> = {}
    for (const r of results) {
      const label =
        r.kind === 'concept'
          ? 'Concepts'
          : r.kind === 'chapter'
            ? 'Chapters'
            : r.kind === 'universe'
              ? 'Knowledge Universe'
              : 'Lessons'
      ;(g[label] ??= []).push(r)
    }
    return g
  }, [results])

  // quick actions that match the current query (all of them when query is empty)
  const quickMatches = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return QUICK_ACTIONS
    return QUICK_ACTIONS.filter(
      (qa) => qa.label.toLowerCase().includes(q) || qa.hint.toLowerCase().includes(q)
    )
  }, [query])

  // X10 Pro system actions, same fuzzy treatment
  const systemMatches = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return SYSTEM_ACTIONS
    return SYSTEM_ACTIONS.filter(
      (sa) => sa.label.toLowerCase().includes(q) || sa.hint.toLowerCase().includes(q)
    )
  }, [query])

  const hasDirectMatches =
    quickMatches.length > 0 ||
    systemMatches.length > 0 ||
    Object.values(groups).some((g) => g.length > 0)

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
          placeholder="Ask the OS anything — or search lessons, concepts, theorems…"
          value={query}
          onValueChange={setQuery}
        />
        <CommandList className="max-h-[420px]">
          {/* the OS natural-language route — first when text looks like intent */}
          {query.trim().length > 2 && (
            <CommandGroup heading="StudyVerse OS">
              <CommandItem
                value={`os command ${query}`}
                onSelect={() => void askOs()}
                className="gap-3 py-2.5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10">
                  <Terminal
                    className={`h-3.5 w-3.5 text-emerald-600 dark:text-emerald-300 ${osBusy ? 'animate-pulse' : ''}`}
                  />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate text-[13.5px] font-semibold">
                    {osBusy ? 'Routing…' : (
                      <>Run <span className="text-emerald-600 dark:text-emerald-300">“{query.trim().slice(0, 40)}”</span> as a command</>
                    )}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    plans · viva · battles · paper analysis · anything
                  </span>
                </span>
                <span className="ml-auto shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-300">
                  ⏎ os
                </span>
              </CommandItem>
            </CommandGroup>
          )}
          <CommandEmpty>
            {query.trim() ? (
              <div className="flex flex-col gap-1">
                {!hasDirectMatches && (
                  <button
                    type="button"
                    onClick={() => void askOs()}
                    className="mx-1 mb-1 flex w-[calc(100%-0.5rem)] items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-muted/60"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10">
                      <Terminal className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-300" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="truncate text-[13.5px] font-semibold">
                        Ask the OS: <span className="text-emerald-600 dark:text-emerald-300">“{query.trim().slice(0, 36)}”</span>
                      </span>
                      <span className="truncate text-xs text-muted-foreground">
                        it plans, teaches, tests and analyzes
                      </span>
                    </span>
                  </button>
                )}
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
              </div>
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
                          : ({ name: qa.view } as Parameters<typeof navigate>[0])
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
          {systemMatches.length > 0 && (
            <CommandGroup heading="Focus & system">
              {systemMatches.map((sa) => (
                <CommandItem
                  key={sa.label}
                  value={`system ${sa.label} ${sa.hint}`}
                  onSelect={() => {
                    setOpen(false)
                    setQuery('')
                    sa.run()
                  }}
                  className="gap-3 py-2.5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10">
                    <sa.icon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-300" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate text-[13.5px] font-semibold">{sa.label}</span>
                    <span className="truncate text-xs text-muted-foreground">{sa.hint}</span>
                  </span>
                  <span className="ml-auto shrink-0 rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    run
                  </span>
                </CommandItem>
              ))}
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

      {/* X10 Pro — deep focus timer (self-suppresses if an app-level
          <FocusTimerMount /> appears later; the engine survives unmounts) */}
      <FocusTimer />
      <ShortcutsOverlay />
    </>
  )
}
