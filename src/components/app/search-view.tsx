'use client'

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Clock, Search, SearchX, Sparkles, X } from 'lucide-react'
import {
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
  type ChapterMeta,
  type SectionContent,
} from '@/data/library'
import { allContent, TOTAL_CONTENT_SECTIONS } from '@/data/content'
import { useStudy } from '@/store/useStudy'
import { ChapterIcon } from './chapter-icon'

/* ============================== search index ============================== */

type SearchKind = 'intro' | 'concept' | 'example' | 'takeaway' | 'objective'

/** One searchable text block from the master content */
interface IndexEntry {
  sectionId: string
  chapterId: string
  chapterNumber: number
  sectionNumber: number
  sectionTitle: string
  kind: SearchKind
  /** block title — concept term / example title / label */
  title: string
  /** the searchable body text */
  text: string
}

interface SearchHit extends IndexEntry {
  score: number
}

const MAX_RESULTS = 60
const RECENT_KEY = 'sv-recent-searches'
const RECENT_EVENT = 'sv-recent-searches-changed'
const SNIPPET_RADIUS = 70
const TRY_QUERIES = ['pigeonhole', 'induction', 'dijkstra', 'hash', 'bayes', 'automata']

const CHAPTER_BY_ID = new Map<string, ChapterMeta>(LIBRARY_CHAPTERS.map((c) => [c.id, c]))

const KIND_BADGE: Record<SearchKind, string> = {
  concept: 'border-teal-400/25 bg-teal-400/10 text-teal-700 dark:border-teal-300/30 dark:bg-teal-300/15 dark:text-teal-300',
  example: 'border-amber-400/25 bg-amber-400/10 text-amber-700 dark:border-amber-300/30 dark:bg-amber-300/15 dark:text-amber-300',
  takeaway: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-700 dark:border-emerald-300/30 dark:bg-emerald-300/15 dark:text-emerald-300',
  objective: 'border-zinc-400/30 bg-zinc-400/10 text-zinc-600 dark:border-zinc-300/30 dark:bg-zinc-300/15 dark:text-zinc-300',
  intro: 'border-zinc-400/30 bg-zinc-400/10 text-zinc-600 dark:border-zinc-300/30 dark:bg-zinc-300/15 dark:text-zinc-300',
}

/** Strip the light **bold** markdown markers before indexing */
const plain = (s: string) => s.replace(/\*\*/g, '')

let cachedIndex: IndexEntry[] | null = null

/** Flat index over every intro, objective, concept, example and takeaway */
function buildIndex(): IndexEntry[] {
  if (cachedIndex) return cachedIndex
  const sectionById = new Map(LIBRARY_SECTIONS.map((s) => [s.id, s]))
  const entries: IndexEntry[] = []

  for (const content of allContent) {
    const sec = sectionById.get(content.sectionId)
    const ch = sec ? CHAPTER_BY_ID.get(sec.chapterId) : undefined
    if (!sec || !ch) continue
    const base = {
      sectionId: content.sectionId,
      chapterId: ch.id,
      chapterNumber: ch.number,
      sectionNumber: sec.number,
      sectionTitle: sec.title,
    }

    entries.push({
      ...base,
      kind: 'intro',
      title: `§${sec.number} ${sec.title}`,
      text: content.intro,
    })
    content.objectives.forEach((o, i) => {
      entries.push({ ...base, kind: 'objective', title: `Objective ${i + 1}`, text: plain(o) })
    })
    for (const c of content.concepts) {
      entries.push({
        ...base,
        kind: 'concept',
        title: c.term,
        text: plain(`${c.statement}${c.detail ? ' ' + c.detail : ''}`),
      })
    }
    for (const ex of content.examples) {
      const body = [ex.problem, ...ex.steps.map((s) => `${s.label}: ${s.text}`), ex.result ?? '']
        .join(' ')
        .trim()
      entries.push({ ...base, kind: 'example', title: ex.title, text: plain(body) })
    }
    for (const t of content.keyTakeaways) {
      entries.push({ ...base, kind: 'takeaway', title: 'Key takeaway', text: plain(t) })
    }
  }

  cachedIndex = entries
  return entries
}

/* ============================== search logic ============================== */

function countOccurrences(haystack: string, needle: string): number {
  if (!needle) return 0
  let count = 0
  let i = haystack.indexOf(needle)
  while (i !== -1) {
    count++
    i = haystack.indexOf(needle, i + needle.length)
  }
  return count
}

interface SearchResult {
  hits: SearchHit[]
  total: number
  sections: number
  ms: number
}

/** Case-insensitive multi-term substring match — every term must appear in the block */
function searchIndex(
  index: IndexEntry[],
  terms: string[],
  chapterFilter: string | null
): SearchResult {
  const t0 = performance.now()
  const hits: SearchHit[] = []
  const sections = new Set<string>()

  if (terms.length > 0) {
    for (const entry of index) {
      if (chapterFilter && entry.chapterId !== chapterFilter) continue
      const titleL = entry.title.toLowerCase()
      const textL = entry.text.toLowerCase()
      let matched = true
      let score = 0
      for (const term of terms) {
        const inTitle = countOccurrences(titleL, term)
        const inText = countOccurrences(textL, term)
        if (inTitle + inText === 0) {
          matched = false
          break
        }
        score += inTitle * 3 + inText
      }
      if (!matched) continue
      hits.push({ ...entry, score })
      sections.add(entry.sectionId)
    }
    hits.sort(
      (a, b) =>
        b.score - a.score ||
        a.chapterNumber - b.chapterNumber ||
        a.sectionNumber - b.sectionNumber ||
        a.title.localeCompare(b.title)
    )
  }

  return {
    hits,
    total: hits.length,
    sections: sections.size,
    ms: performance.now() - t0,
  }
}

/** ±~70 chars around the first term match, ellipsised at both ends */
function makeSnippet(text: string, terms: string[]): string {
  const lower = text.toLowerCase()
  let first = -1
  for (const term of terms) {
    const i = lower.indexOf(term)
    if (i >= 0 && (first === -1 || i < first)) first = i
  }
  if (first === -1) {
    // matched in the title only — show the start of the body
    const end = Math.min(text.length, SNIPPET_RADIUS * 2)
    return end < text.length ? text.slice(0, end) + '…' : text
  }
  const start = Math.max(0, first - SNIPPET_RADIUS)
  const end = Math.min(text.length, first + SNIPPET_RADIUS)
  let snippet = text.slice(start, end)
  if (start > 0) snippet = '…' + snippet.replace(/^\s+/, '')
  if (end < text.length) snippet = snippet.replace(/\s+$/, '') + '…'
  return snippet
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/* ============================ recent searches ============================ */

function loadRecent(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((v): v is string => typeof v === 'string').slice(0, 5)
  } catch {
    return []
  }
}

function pushRecent(query: string) {
  try {
    const list = loadRecent().filter((q) => q !== query)
    list.unshift(query)
    localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 5)))
  } catch {
    // storage unavailable — non-fatal
  }
  notifyRecentsChanged()
}

function removeFromRecentStore(query: string) {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(loadRecent().filter((q) => q !== query)))
  } catch {
    // non-fatal
  }
  notifyRecentsChanged()
}

/* recents are an external store (localStorage) — read via useSyncExternalStore */
const EMPTY_RECENTS: string[] = []
let recentsCache: string[] | null = null

function getRecentSnapshot(): string[] {
  if (recentsCache === null) recentsCache = loadRecent()
  return recentsCache
}

function getServerRecentSnapshot(): string[] {
  return EMPTY_RECENTS
}

function notifyRecentsChanged() {
  recentsCache = null
  window.dispatchEvent(new Event(RECENT_EVENT))
}

function subscribeRecents(onChange: () => void): () => void {
  const handler = () => {
    recentsCache = null
    onChange()
  }
  window.addEventListener('storage', handler)
  window.addEventListener(RECENT_EVENT, handler)
  return () => {
    window.removeEventListener('storage', handler)
    window.removeEventListener(RECENT_EVENT, handler)
  }
}

/* ================================ pieces ================================= */

/** wraps every term occurrence in an amber <mark> */
function Highlight({ text, regex }: { text: string; regex: RegExp | null }) {
  if (!regex) return <>{text}</>
  const parts = text.split(regex)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark
            key={i}
            className="rounded-sm bg-amber-300/25 px-0.5 text-amber-700 break-words dark:text-amber-200"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

const pillBase =
  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] font-medium transition-colors'

/* ================================ view =================================== */

export function SearchView({ initialQuery }: { initialQuery?: string }) {
  const navigate = useStudy((s) => s.navigate)
  const goBack = useStudy((s) => s.goBack)
  const reduced = useReducedMotion()

  const [inputValue, setInputValue] = useState(initialQuery ?? '')
  const [query, setQuery] = useState((initialQuery ?? '').trim())
  const [chapterFilter, setChapterFilter] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)

  const index = useMemo(() => buildIndex(), [])

  /* recent searches — localStorage as an external store (SSR-safe, cross-tab) */
  const recent = useSyncExternalStore(subscribeRecents, getRecentSnapshot, getServerRecentSnapshot)

  /* debounce input → query */
  useEffect(() => {
    const t = setTimeout(() => setQuery(inputValue.trim()), 120)
    return () => clearTimeout(t)
  }, [inputValue])

  const commitRecent = useCallback((q: string) => {
    if (q) pushRecent(q)
  }, [])

  const removeFromRecent = useCallback((q: string) => {
    removeFromRecentStore(q)
  }, [])

  /* ------------------------------ search run ------------------------------ */

  const terms = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return [] as string[]
    return q.split(/\s+/).filter(Boolean)
  }, [query])

  const result = useMemo(
    () => searchIndex(index, terms, chapterFilter),
    [index, terms, chapterFilter]
  )

  /* group by chapter (display order) and assign flat indices in that same order,
     so keyboard nav / aria-activedescendant follow what the user sees */
  const groups = useMemo(() => {
    const capped = result.hits.slice(0, MAX_RESULTS)
    const map = new Map<
      string,
      { chapter: ChapterMeta; items: { hit: SearchHit; flat: number }[] }
    >()
    for (const hit of capped) {
      const g =
        map.get(hit.chapterId) ?? { chapter: CHAPTER_BY_ID.get(hit.chapterId)!, items: [] }
      g.items.push({ hit, flat: 0 })
      map.set(hit.chapterId, g)
    }
    const list = [...map.values()].sort((a, b) => a.chapter.number - b.chapter.number)
    let flat = 0
    for (const g of list) {
      for (const item of g.items) item.flat = flat++
    }
    return list
  }, [result])

  const shown = useMemo(
    () => groups.flatMap((g) => g.items.map(({ hit }) => hit)),
    [groups]
  )

  const highlightRe = useMemo(() => {
    if (terms.length === 0) return null
    const escaped = terms.map(escapeRegExp).sort((a, b) => b.length - a.length)
    return new RegExp(`(${escaped.join('|')})`, 'gi')
  }, [terms])

  const clampedActive = shown.length === 0 ? -1 : Math.min(activeIndex, shown.length - 1)

  /* ------------------------------- actions ------------------------------- */

  const openResult = useCallback(
    (hit: SearchHit) => {
      commitRecent(query)
      navigate({ name: 'lesson', sectionId: hit.sectionId })
    },
    [commitRecent, navigate, query]
  )

  const runQuery = useCallback((q: string) => {
    setInputValue(q)
    setQuery(q)
    setActiveIndex(0)
    inputRef.current?.focus()
  }, [])

  const clearInput = useCallback(() => {
    setInputValue('')
    setQuery('')
    setActiveIndex(0)
    inputRef.current?.focus()
  }, [])

  /* ------------------------------ keyboard ------------------------------ */

  const onInputKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (shown.length === 0) return
      e.preventDefault()
      const delta = e.key === 'ArrowDown' ? 1 : -1
      const next = Math.min(Math.max(clampedActive + delta, 0), shown.length - 1)
      setActiveIndex(next)
      document.getElementById(`sv-sr-${next}`)?.scrollIntoView({ block: 'nearest' })
    } else if (e.key === 'Enter') {
      const hit = shown[clampedActive]
      if (hit) {
        e.preventDefault()
        openResult(hit)
      }
    } else if (e.key === 'Escape') {
      e.preventDefault()
      e.stopPropagation()
      if (inputValue.trim()) clearInput()
      else goBack()
    }
  }

  /* '/' focuses the input from anywhere in the view; Escape works outside it too */
  useEffect(() => {
    const onCaptureSlash = (e: KeyboardEvent) => {
      if (e.key !== '/') return
      const target = e.target as HTMLElement
      const tag = target.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target.isContentEditable) return
      e.preventDefault()
      e.stopPropagation() // keep the command palette's '/' shortcut out of the way
      inputRef.current?.focus()
    }
    const onDocKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || e.defaultPrevented) return
      // let open dialogs (command palette, modals) handle their own Escape
      if (document.querySelector('[role="dialog"][data-state="open"]')) return
      const target = e.target as HTMLElement
      const tag = target.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target.isContentEditable) return
      e.preventDefault()
      if (query.trim()) clearInput()
      else goBack()
    }
    document.addEventListener('keydown', onCaptureSlash, { capture: true })
    document.addEventListener('keydown', onDocKey)
    return () => {
      document.removeEventListener('keydown', onCaptureSlash, { capture: true })
      document.removeEventListener('keydown', onDocKey)
    }
  }, [clearInput, goBack, query])

  /* -------------------------------- render ------------------------------- */

  const searching = terms.length > 0
  const hasResults = searching && result.total > 0

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6" data-sv-search-view>
      {/* hero */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative mb-6 overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8"
      >
        <div className="absolute inset-0 sv-hero-glow opacity-40" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            <Search className="h-3.5 w-3.5" /> Full-text search · {TOTAL_CONTENT_SECTIONS}{' '}
            sections indexed
          </div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
            Search the <span className="sv-text-gradient">master content</span>
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Every concept, example, takeaway and objective across {TOTAL_CONTENT_SECTIONS}{' '}
            sections — indexed and instant.
          </p>
        </div>
      </motion.div>

      {/* search box */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.06 }}
        className="mb-4 rounded-2xl border border-border/80 bg-card p-3 sm:p-4"
      >
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-emerald-300/80" />
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              setActiveIndex(0)
            }}
            onKeyDown={onInputKeyDown}
            onBlur={() => {
              const q = inputValue.trim()
              if (q.length >= 2) commitRecent(q)
            }}
            autoFocus
            data-sv-search-input
            role="combobox"
            aria-expanded={searching}
            aria-controls="sv-search-results"
            aria-autocomplete="list"
            aria-activedescendant={clampedActive >= 0 ? `sv-sr-${clampedActive}` : undefined}
            aria-label="Search the master content"
            placeholder="e.g. pigeonhole, big-O, spanning tree…"
            className="h-12 w-full rounded-xl border border-border/70 bg-background/60 pl-11 pr-11 text-[15px] outline-none transition-colors placeholder:font-mono placeholder:text-muted-foreground/60 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20"
          />
          {inputValue && (
            <button
              type="button"
              onClick={clearInput}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* recent searches — only while the input is empty */}
        {inputValue === '' && recent.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center gap-1.5 px-1 pt-1">
            <span className="sr-only">Recent searches</span>
            <Clock className="h-3 w-3 text-muted-foreground/70" aria-hidden />
            {recent.map((q) => (
              <span
                key={q}
                className="inline-flex items-center gap-0.5 rounded-full border border-border/70 bg-muted/30 pl-2.5 pr-1 text-[11px]"
              >
                <button
                  type="button"
                  onClick={() => runQuery(q)}
                  className="py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-300"
                >
                  {q}
                </button>
                <button
                  type="button"
                  onClick={() => removeFromRecent(q)}
                  aria-label={`Remove “${q}” from recent searches`}
                  className="rounded-full p-1 text-muted-foreground/60 transition-colors hover:text-rose-400"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* chapter filter chips + live stats */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.12 }}
        className="mb-5"
      >
        <div
          className="flex flex-wrap items-center gap-1.5"
          role="group"
          aria-label="Filter results by chapter"
        >
          <button
            type="button"
            onClick={() => {
              setChapterFilter(null)
              setActiveIndex(0)
            }}
            aria-pressed={chapterFilter === null}
            className={`${pillBase} ${
              chapterFilter === null
                ? 'border-primary/50 bg-primary/10 text-primary'
                : 'border-border/70 bg-card/60 text-muted-foreground hover:border-emerald-400/35 hover:text-foreground'
            }`}
          >
            All
          </button>
          {LIBRARY_CHAPTERS.map((ch) => {
            const active = chapterFilter === ch.id
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => {
                  setChapterFilter(active ? null : ch.id)
                  setActiveIndex(0)
                }}
                aria-pressed={active}
                className={`${pillBase} max-w-[11rem] ${
                  active
                    ? 'border-primary/50 bg-primary/10 text-primary'
                    : 'border-border/70 bg-card/60 text-muted-foreground hover:border-emerald-400/35 hover:text-foreground'
                }`}
              >
                <span className="shrink-0 font-mono text-[10px] opacity-70">{ch.number}</span>
                <span className="truncate">{ch.shortTitle}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
          <p aria-live="polite" className="font-mono text-[11px] text-muted-foreground">
            {searching
              ? `${result.total} ${result.total === 1 ? 'match' : 'matches'} across ${result.sections} ${
                  result.sections === 1 ? 'section' : 'sections'
                } · ${result.ms < 1 ? '<1' : Math.max(1, Math.round(result.ms))} ms`
              : `${index.length} text blocks indexed · press / to search`}
          </p>
          {result.total > MAX_RESULTS && (
            <p className="font-mono text-[11px] text-amber-600 dark:text-amber-300">
              showing {shown.length} of {result.total} — refine your query
            </p>
          )}
          <p className="hidden items-center gap-1.5 text-[11px] text-muted-foreground/80 sm:flex">
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-semibold">/</kbd>
            focus
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-semibold">↑↓</kbd>
            navigate
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-semibold">↵</kbd>
            open
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-semibold">esc</kbd>
            clear
          </p>
        </div>
      </motion.div>

      {/* results / empty states */}
      {!searching ? (
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.16 }}
          className="rounded-2xl border border-dashed border-border/80 bg-card/40 p-6 text-center sm:p-8"
        >
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
          </div>
          <p className="mt-3 text-sm font-semibold">
            Search everything — intros, concepts, worked examples, takeaways, objectives
          </p>
          <p className="mt-1.5 text-xs text-muted-foreground">Try one of these:</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {TRY_QUERIES.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => runQuery(q)}
                className="rounded-full border border-border/70 bg-card/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:border-emerald-400/40 hover:text-emerald-600 hover:-translate-y-0.5 dark:hover:text-emerald-300"
              >
                {q}
              </button>
            ))}
          </div>
        </motion.div>
      ) : !hasResults ? (
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-dashed border-border/80 bg-card/40 p-8 text-center"
        >
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted/40">
            <SearchX className="h-5 w-5 text-muted-foreground/70" />
          </div>
          <p className="mt-3 text-sm font-semibold">No matches for “{query}”</p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            {chapterFilter
              ? 'Nothing in this chapter matches — clear the chapter filter or try another term.'
              : 'Try a shorter or different term — e.g. “graph”, “proof”, “mod” — or check the spelling.'}
          </p>
          {chapterFilter && (
            <button
              type="button"
              onClick={() => {
                setChapterFilter(null)
                setActiveIndex(0)
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-emerald-400/40 hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" /> Clear chapter filter
            </button>
          )}
        </motion.div>
      ) : (
        <div className="space-y-6" id="sv-search-results" role="listbox" aria-label="Search results">
          {groups.map((g, gi) => (
            <motion.section
              key={g.chapter.id}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(gi * 0.05, 0.25) }}
            >
              {/* sticky chapter group header */}
              <div className="sticky top-16 z-10 flex items-center gap-2.5 border-b border-border/60 bg-background/85 px-1 py-2.5 backdrop-blur">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300">
                  <ChapterIcon icon={g.chapter.icon} className="h-3.5 w-3.5" />
                </span>
                <span className="shrink-0 font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-300">
                  {g.chapter.number}
                </span>
                <span className="min-w-0 truncate text-sm font-bold">{g.chapter.shortTitle}</span>
                <span className="ml-auto shrink-0 rounded-full border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {g.items.length} {g.items.length === 1 ? 'match' : 'matches'}
                </span>
              </div>

              <div className="mt-3 grid gap-2.5">
                {g.items.map(({ hit, flat }) => {
                  const active = flat === clampedActive
                  return (
                    <button
                      key={`${hit.sectionId}-${hit.kind}-${hit.title}-${flat}`}
                      type="button"
                      id={`sv-sr-${flat}`}
                      role="option"
                      aria-selected={active}
                      onClick={() => openResult(hit)}
                      className={`group w-full break-inside-avoid rounded-xl border border-border/80 bg-card p-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 hover:-translate-y-0.5 hover:border-emerald-400/35 hover:shadow-[0_12px_32px_-16px_rgba(16,185,129,0.25)] ${
                        active
                          ? 'border-emerald-400/35 bg-emerald-400/[0.04] shadow-[0_12px_32px_-16px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400/40'
                          : ''
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex min-w-0 flex-wrap items-center gap-2">
                          <span
                            className={`shrink-0 rounded-full border px-1.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider ${KIND_BADGE[hit.kind]}`}
                          >
                            {hit.kind}
                          </span>
                          <span className="min-w-0 break-words text-sm font-semibold">
                            <Highlight text={hit.title} regex={highlightRe} />
                          </span>
                        </div>
                        <span className="shrink-0 rounded-full border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                          §{hit.sectionNumber}
                        </span>
                      </div>
                      {hit.kind !== 'intro' && (
                        <p className="mt-1 text-[11px] text-muted-foreground">
                          §{hit.sectionNumber} · {hit.sectionTitle}
                        </p>
                      )}
                      <p className="mt-2 break-words text-[13px] leading-relaxed text-muted-foreground">
                        <Highlight text={makeSnippet(hit.text, terms)} regex={highlightRe} />
                      </p>
                    </button>
                  )
                })}
              </div>
            </motion.section>
          ))}
        </div>
      )}
    </div>
  )
}
