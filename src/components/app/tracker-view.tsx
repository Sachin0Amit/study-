'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  History,
  Layers,
  ListChecks,
  RotateCcw,
  Search,
  SearchX,
  Undo2,
  type LucideIcon,
} from 'lucide-react'
import {
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
  LIBRARY_SUBJECTS,
  type ChapterMeta,
  type SectionMeta,
} from '@/data/library'
import { useStudy } from '@/store/useStudy'
import { ChapterIcon } from './chapter-icon'

/* ================= static lookups (built once per chunk load) ================= */

const CHAPTER_BY_ID = new Map<string, ChapterMeta>(LIBRARY_CHAPTERS.map((c) => [c.id, c]))
const SUBJECT_NAME_BY_BOOK = new Map<string, string>(
  LIBRARY_BOOKS.map((b) => [b.id, LIBRARY_SUBJECTS.find((s) => s.id === b.subjectId)?.name ?? ''])
)
const BOOK_TITLE_BY_ID = new Map<string, string>(LIBRARY_BOOKS.map((b) => [b.id, b.title]))

interface FlatSection {
  section: SectionMeta
  chapter: ChapterMeta
  subjectName: string
  bookTitle: string
  /** lowercase search haystack: section title + description + chapter + book + subject */
  hay: string
}

const FLAT_SECTIONS: FlatSection[] = LIBRARY_SECTIONS.map((section) => {
  const chapter = CHAPTER_BY_ID.get(section.chapterId)!
  const bookTitle = BOOK_TITLE_BY_ID.get(chapter.bookId) ?? ''
  return {
    section,
    chapter,
    subjectName: SUBJECT_NAME_BY_BOOK.get(chapter.bookId) ?? '',
    bookTitle,
    hay: `${section.title} ${section.description} ${chapter.shortTitle} ${chapter.title} ${bookTitle} ${
      SUBJECT_NAME_BY_BOOK.get(chapter.bookId) ?? ''
    }`.toLowerCase(),
  }
})

interface FlatChapter {
  chapter: ChapterMeta
  subjectName: string
  bookTitle: string
  sectionIds: string[]
  hay: string
}

const FLAT_CHAPTERS: FlatChapter[] = LIBRARY_CHAPTERS.map((chapter) => {
  const bookTitle = BOOK_TITLE_BY_ID.get(chapter.bookId) ?? ''
  const subjectName = SUBJECT_NAME_BY_BOOK.get(chapter.bookId) ?? ''
  const sectionIds = LIBRARY_SECTIONS.filter((s) => s.chapterId === chapter.id).map((s) => s.id)
  return {
    chapter,
    subjectName,
    bookTitle,
    sectionIds,
    hay: `${chapter.title} ${chapter.shortTitle} ${chapter.description} ${bookTitle} ${subjectName}`.toLowerCase(),
  }
})

const MAX_SECTION_RESULTS = 30
const MAX_CHAPTER_RESULTS = 6

/* ============================== small pieces ============================== */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function Highlight({ text, re }: { text: string; re: RegExp | null }) {
  if (!re) return <>{text}</>
  const parts = text.split(re)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="rounded-[3px] bg-emerald-400/20 px-0.5 text-foreground">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

/** Round checkbox that toggles a section's completed state. */
function CompleteToggle({
  done,
  onToggle,
  label,
  size = 'md',
}: {
  done: boolean
  onToggle: () => void
  label: string
  size?: 'md' | 'lg'
}) {
  const box = size === 'lg' ? 'h-7 w-7' : 'h-6 w-6'
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={done}
      aria-label={label}
      title={done ? 'Marked complete — click to unmark' : 'Mark as completed'}
      onClick={(e) => {
        e.stopPropagation()
        onToggle()
      }}
      className={`${box} shrink-0 rounded-lg border-2 transition-all duration-200 ${FOCUS_RING} ${
        done
          ? 'border-emerald-400 bg-emerald-400 text-background shadow-[0_0_12px_-2px_rgba(52,211,153,0.5)]'
          : 'border-border bg-card hover:border-emerald-400/60 hover:bg-emerald-400/10'
      }`}
    >
      {done && <Check className="h-full w-full p-0.5" strokeWidth={3.5} aria-hidden />}
    </button>
  )
}

/** Status pill — completed / in progress / not started. */
function StatusPill({ status }: { status: 'completed' | 'in_progress' | 'new' }) {
  if (status === 'completed')
    return (
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">
        <CheckCircle2 className="h-3 w-3" aria-hidden /> Done
      </span>
    )
  if (status === 'in_progress')
    return (
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-300/30 bg-amber-300/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-200">
        <CircleDashed className="h-3 w-3" aria-hidden /> In progress
      </span>
    )
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
      Not started
    </span>
  )
}

/* ================================= view ================================= */

type CollectionTab = 'completed' | 'in_progress'

export function TrackerView() {
  const progress = useStudy((s) => s.progress)
  const navigate = useStudy((s) => s.navigate)
  const markCompleted = useStudy((s) => s.markCompleted)
  const unmarkCompleted = useStudy((s) => s.unmarkCompleted)
  const toggleCompleted = useStudy((s) => s.toggleCompleted)

  const [inputValue, setInputValue] = useState('')
  const [query, setQuery] = useState('')
  const [collectionTab, setCollectionTab] = useState<CollectionTab>('completed')
  const [subjectFilter, setSubjectFilter] = useState<string | null>(null)
  const [showAllSubjects, setShowAllSubjects] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  /* '/' focuses the search box (same convention as the content search view) */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== '/') return
      const t = e.target as HTMLElement
      if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable) return
      e.preventDefault()
      inputRef.current?.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  /* ---------------- global stats ---------------- */

  const total = FLAT_SECTIONS.length
  const completedCount = FLAT_SECTIONS.filter((f) => progress[f.section.id]?.status === 'completed').length
  const startedCount = FLAT_SECTIONS.filter((f) => progress[f.section.id]?.status === 'in_progress').length
  const overallPct = total ? Math.round((completedCount / total) * 100) : 0
  const touchedPct = total ? ((completedCount + startedCount) / total) * 100 : 0

  /* ---------------- search ---------------- */

  const tokens = useMemo(
    () =>
      query
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter((t) => t.length > 0),
    [query]
  )

  const chapterHits = useMemo(() => {
    if (tokens.length === 0) return []
    return FLAT_CHAPTERS.map((fc) => {
      let score = 0
      for (const t of tokens) {
        const inTitle = fc.chapter.shortTitle.toLowerCase().includes(t) || fc.chapter.title.toLowerCase().includes(t)
        const inRest = fc.hay.includes(t)
        if (!inTitle && !inRest) return null
        score += inTitle ? 3 : 1
      }
      return { fc, score }
    })
      .filter((x): x is { fc: FlatChapter; score: number } => x !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_CHAPTER_RESULTS)
  }, [tokens])

  const sectionHits = useMemo(() => {
    if (tokens.length === 0) return []
    return FLAT_SECTIONS.map((fs) => {
      let score = 0
      for (const t of tokens) {
        const inTitle = fs.section.title.toLowerCase().includes(t)
        const inRest = fs.hay.includes(t)
        if (!inTitle && !inRest) return null
        score += inTitle ? 3 : 1
      }
      return { fs, score }
    })
      .filter((x): x is { fs: FlatSection; score: number } => x !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_SECTION_RESULTS)
  }, [tokens])

  const highlightRe = useMemo(() => {
    if (tokens.length === 0) return null
    const escaped = tokens.map(escapeRegExp).sort((a, b) => b.length - a.length)
    return new RegExp(`(${escaped.join('|')})`, 'gi')
  }, [tokens])

  const searching = tokens.length > 0
  const hitCount = chapterHits.length + sectionHits.length

  /* recently viewed — shown when the search box is empty */
  const recent = useMemo(
    () =>
      FLAT_SECTIONS.filter((f) => progress[f.section.id])
        .sort((a, b) => (progress[b.section.id]?.lastViewed ?? '').localeCompare(progress[a.section.id]?.lastViewed ?? ''))
        .slice(0, 5),
    [progress]
  )

  /* ---------------- per-subject progress ---------------- */

  const subjectRows = useMemo(() => {
    const map = new Map<string, { name: string; done: number; started: number; total: number }>()
    for (const fs of FLAT_SECTIONS) {
      const row = map.get(fs.subjectName) ?? { name: fs.subjectName, done: 0, started: 0, total: 0 }
      const p = progress[fs.section.id]
      if (p?.status === 'completed') row.done++
      else if (p?.status === 'in_progress') row.started++
      row.total++
      map.set(fs.subjectName, row)
    }
    return [...map.values()]
      .filter((r) => r.name)
      .sort((a, b) => {
        const pa = a.total ? a.done / a.total : 0
        const pb = b.total ? b.done / b.total : 0
        if (pb !== pa) return pb - pa
        return b.done - a.done
      })
  }, [progress])

  const activeSubjects = subjectRows.filter((r) => r.done + r.started > 0)
  const visibleSubjects = showAllSubjects ? subjectRows : activeSubjects

  /* ---------------- collection (completed / in progress) ---------------- */

  const collection = useMemo(() => {
    const status = collectionTab
    return FLAT_SECTIONS.filter((f) => progress[f.section.id]?.status === status).sort((a, b) =>
      (progress[b.section.id]?.lastViewed ?? '').localeCompare(progress[a.section.id]?.lastViewed ?? '')
    )
  }, [progress, collectionTab])

  const collectionSubjects = useMemo(() => {
    const names = new Set(collection.map((f) => f.subjectName))
    return [...names].filter(Boolean).sort()
  }, [collection])

  const filteredCollection = useMemo(
    () => (subjectFilter ? collection.filter((f) => f.subjectName === subjectFilter) : collection),
    [collection, subjectFilter]
  )

  /* ---------------- chapter quick actions ---------------- */

  const chapterFullyDone = (fc: FlatChapter) =>
    fc.sectionIds.length > 0 && fc.sectionIds.every((id) => progress[id]?.status === 'completed')

  const markChapter = (fc: FlatChapter, done: boolean) => {
    for (const id of fc.sectionIds) {
      if (done) markCompleted(id)
      else unmarkCompleted(id)
    }
  }

  /* ================================= render ================================ */

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6" data-sv-tracker-view>
      {/* ============ hero ============ */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative mb-8 overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8"
        aria-labelledby="tracker-title"
      >
        <div className="absolute inset-0 sv-hero-glow opacity-50" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <ListChecks className="h-3.5 w-3.5" /> Topic tracker
            </div>
            <h1 id="tracker-title" className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
              Tick what you&apos;ve <span className="sv-text-gradient">mastered</span>
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Search any lesson or chapter, mark it completed, and watch your progress grow. Everything you
              finish lands in your collection below — one click to revise it anytime.
            </p>

            {/* stacked distribution bar */}
            <div className="mt-5 max-w-md">
              <div
                className="flex h-2.5 w-full overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-valuenow={overallPct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Library completion"
              >
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 transition-all duration-700"
                  style={{ width: `${(completedCount / total) * 100}%` }}
                />
                <div
                  className="h-full bg-amber-300 transition-all duration-700"
                  style={{ width: `${(startedCount / total) * 100}%` }}
                />
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-400" />
                  <strong className="font-mono text-emerald-600 dark:text-emerald-300">{completedCount}</strong> completed
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span aria-hidden className="h-2 w-2 rounded-full bg-amber-300" />
                  <strong className="font-mono text-amber-600 dark:text-amber-200">{startedCount}</strong> in progress
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span aria-hidden className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                  <strong className="font-mono">{total}</strong> lessons in the library
                </span>
              </div>
            </div>
          </div>

          {/* progress ring */}
          <div className="relative flex h-32 w-32 shrink-0 items-center justify-center self-start sm:self-auto">
            <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90" aria-hidden>
              <circle cx="60" cy="60" r="50" fill="none" strokeWidth="10" className="stroke-muted/30" />
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                strokeWidth="10"
                strokeLinecap="round"
                className="stroke-emerald-400"
                strokeDasharray={`${(overallPct / 100) * 314.2} 314.2`}
                style={{ transition: 'stroke-dasharray 0.9s ease' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-2xl font-bold text-emerald-300">{overallPct}%</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">complete</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ============ search & mark ============ */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.06 }}
        className="mb-8 rounded-2xl border border-border/80 bg-card p-4 sm:p-5"
        aria-labelledby="tracker-search-title"
      >
        <h2 id="tracker-search-title" className="sr-only">
          Search topics and chapters to mark completed
        </h2>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-emerald-300/80" />
          <input
            ref={inputRef}
            type="search"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              setQuery(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && sectionHits.length > 0) {
                navigate({ name: 'lesson', sectionId: sectionHits[0].fs.section.id })
              } else if (e.key === 'Escape' && inputValue) {
                setInputValue('')
                setQuery('')
              }
            }}
            aria-label="Search topics, chapters and lessons to mark completed"
            placeholder="Search a topic, chapter or lesson — e.g. recursion, thermodynamics, integrals…"
            className="h-12 w-full rounded-xl border border-border/70 bg-background/60 pl-11 pr-11 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20"
          />
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 px-1">
          <p aria-live="polite" className="font-mono text-[11px] text-muted-foreground">
            {searching
              ? `${hitCount} ${hitCount === 1 ? 'result' : 'results'} · “${query.trim()}”`
              : `${total} lessons · ${LIBRARY_CHAPTERS.length} chapters — press / to search`}
          </p>
          <p className="hidden items-center gap-1.5 text-[11px] text-muted-foreground/80 sm:flex">
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-semibold">/</kbd>
            focus
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-semibold">↵</kbd>
            open first lesson
          </p>
        </div>

        {/* ----- results ----- */}
        {searching ? (
          hitCount === 0 ? (
            <div className="mt-4 rounded-xl border border-dashed border-border/80 bg-card/40 p-6 text-center">
              <SearchX className="mx-auto h-6 w-6 text-muted-foreground/60" />
              <p className="mt-2 text-sm font-semibold">No lesson or chapter matches “{query.trim()}”</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Try a shorter term — e.g. “graph”, “entropy”, “loops” — or check the spelling.
              </p>
            </div>
          ) : (
            <div className="mt-4" role="list" aria-label="Search results">
              {/* chapter results */}
              {chapterHits.map(({ fc }) => {
                const done = fc.sectionIds.filter((id) => progress[id]?.status === 'completed').length
                const all = chapterFullyDone(fc)
                return (
                  <div
                    key={`ch-${fc.chapter.id}`}
                    role="listitem"
                    className="mb-2.5 flex flex-wrap items-center gap-3 rounded-xl border border-teal-300/25 bg-teal-300/[0.04] p-3.5 transition-colors hover:border-teal-300/45"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal-300/30 bg-teal-300/10">
                      <ChapterIcon icon={fc.chapter.icon} className="h-4 w-4 text-teal-600 dark:text-teal-300" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-1.5 py-px text-[9px] font-bold uppercase tracking-[0.12em] text-teal-700 dark:text-teal-300">
                          Chapter
                        </span>
                        <span className="text-[14px] font-bold">
                          <Highlight text={`Ch ${fc.chapter.number} · ${fc.chapter.shortTitle}`} re={highlightRe} />
                        </span>
                      </div>
                      <p className="mt-0.5 truncate text-[12px] text-muted-foreground">
                        {fc.subjectName} · {fc.bookTitle} · {fc.sectionIds.length} lessons · {done} done
                      </p>
                      <div className="mt-1.5 h-1 max-w-xs overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 transition-all duration-500"
                          style={{ width: `${fc.sectionIds.length ? (done / fc.sectionIds.length) * 100 : 0}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        onClick={() => markChapter(fc, !all)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors ${FOCUS_RING} ${
                          all
                            ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-600 hover:bg-emerald-400/20 dark:text-emerald-300'
                            : 'border-emerald-400/40 bg-emerald-400/10 text-emerald-600 hover:bg-emerald-400/20 dark:text-emerald-300'
                        }`}
                      >
                        {all ? <Undo2 className="h-3.5 w-3.5" aria-hidden /> : <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />}
                        {all ? 'Unmark chapter' : 'Mark chapter done'}
                      </button>
                      <button
                        type="button"
                        onClick={() => navigate({ name: 'chapter', chapterId: fc.chapter.id })}
                        aria-label={`Open chapter ${fc.chapter.number}, ${fc.chapter.shortTitle}`}
                        className={`inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition-colors hover:border-emerald-400/40 hover:text-foreground ${FOCUS_RING}`}
                      >
                        Open <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                      </button>
                    </div>
                  </div>
                )
              })}

              {/* section results */}
              {sectionHits.map(({ fs }) => {
                const p = progress[fs.section.id]
                const done = p?.status === 'completed'
                return (
                  <div
                    key={`sec-${fs.section.id}`}
                    role="listitem"
                    className={`mb-2.5 flex items-center gap-3 rounded-xl border p-3.5 transition-colors ${
                      done
                        ? 'border-emerald-400/30 bg-emerald-400/[0.06] hover:border-emerald-400/50'
                        : p?.status === 'in_progress'
                          ? 'border-amber-300/25 bg-amber-300/[0.04] hover:border-amber-300/45'
                          : 'border-border/80 bg-card hover:border-emerald-400/35'
                    }`}
                  >
                    <CompleteToggle
                      done={done}
                      onToggle={() => toggleCompleted(fs.section.id)}
                      label={done ? `Unmark ${fs.section.title} as completed` : `Mark ${fs.section.title} as completed`}
                    />
                    <button
                      type="button"
                      onClick={() => navigate({ name: 'lesson', sectionId: fs.section.id })}
                      className="min-w-0 flex-1 text-left"
                    >
                      <span className="flex flex-wrap items-baseline gap-x-2.5">
                        <span className="font-mono text-[11px] font-bold text-emerald-300/80">
                          §{fs.section.number}
                        </span>
                        <span className="text-[14px] font-semibold leading-snug">
                          <Highlight text={fs.section.title} re={highlightRe} />
                        </span>
                        <StatusPill status={p?.status ?? 'new'} />
                      </span>
                      <span className="mt-0.5 block truncate text-[12px] text-muted-foreground">
                        <Highlight text={`${fs.subjectName} · ${fs.chapter.shortTitle} · ${fs.section.description}`} re={highlightRe} />
                      </span>
                    </button>
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                  </div>
                )
              })}
            </div>
          )
        ) : (
          /* idle state — recently viewed shortcuts */
          recent.length > 0 && (
            <div className="mt-4">
              <p className="mb-2 flex items-center gap-1.5 px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <History className="h-3.5 w-3.5" aria-hidden /> Recently viewed
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {recent.map((fs) => (
                  <button
                    key={fs.section.id}
                    type="button"
                    onClick={() => navigate({ name: 'lesson', sectionId: fs.section.id })}
                    className={`flex items-center gap-2.5 rounded-xl border border-border/80 bg-card p-3 text-left transition-colors hover:border-emerald-400/40 ${FOCUS_RING}`}
                  >
                    {progress[fs.section.id]?.status === 'completed' ? (
                      <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-400" aria-hidden />
                    ) : (
                      <CircleDashed className="h-4.5 w-4.5 shrink-0 text-amber-300" aria-hidden />
                    )}
                    <span className="min-w-0">
                      <span className="block truncate text-[13px] font-semibold">
                        §{fs.section.number} {fs.section.title}
                      </span>
                      <span className="block truncate text-[11px] text-muted-foreground">
                        {fs.subjectName} · {fs.chapter.shortTitle}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )
        )}
      </motion.section>

      {/* ============ progress by subject ============ */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.12 }}
        className="mb-8"
        aria-labelledby="tracker-subjects-title"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2
            id="tracker-subjects-title"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80"
          >
            <BookMarked className="h-3.5 w-3.5" aria-hidden /> Progress by subject
          </h2>
          {subjectRows.length > activeSubjects.length && (
            <button
              type="button"
              onClick={() => setShowAllSubjects((v) => !v)}
              aria-expanded={showAllSubjects}
              className={`rounded-full border border-border/80 bg-card px-3.5 py-1.5 text-[11px] font-semibold text-muted-foreground transition-colors hover:border-emerald-400/40 hover:text-foreground ${FOCUS_RING}`}
            >
              {showAllSubjects ? 'Hide untouched subjects' : `Show all ${subjectRows.length} subjects`}
            </button>
          )}
        </div>

        {visibleSubjects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border/80 bg-card/40 p-6 text-center text-sm text-muted-foreground">
            No subject touched yet — mark your first lesson above and its subject appears here with a progress bar.
          </div>
        ) : (
          <div className="grid gap-2.5 md:grid-cols-2">
            {visibleSubjects.map((row, i) => {
              const pct = row.total ? Math.round((row.done / row.total) * 100) : 0
              return (
                <motion.div
                  key={row.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: Math.min(i * 0.03, 0.3), duration: 0.3 }}
                  className="rounded-xl border border-border/80 bg-card p-3.5"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="min-w-0 truncate text-[13.5px] font-semibold">{row.name}</span>
                    <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                      {row.done}/{row.total}
                      {row.started > 0 && <span className="text-amber-500"> · {row.started} active</span>}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        pct === 100
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-300'
                          : pct > 0
                            ? 'bg-gradient-to-r from-emerald-400/80 to-teal-300/80'
                            : 'bg-transparent'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="mt-1.5 text-right font-mono text-[10px] font-bold text-emerald-300">{pct}%</div>
                </motion.div>
              )
            })}
          </div>
        )}
      </motion.section>

      {/* ============ my collection — completed / in progress ============ */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.18 }}
        aria-labelledby="tracker-collection-title"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2
            id="tracker-collection-title"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80"
          >
            <Layers className="h-3.5 w-3.5" aria-hidden /> My collection
          </h2>

          {/* segmented control */}
          <div
            className="flex items-center gap-1 rounded-full border border-border/70 bg-card/60 p-1"
            role="group"
            aria-label="Collection filter"
          >
            {(
              [
                { key: 'completed', label: `Completed (${completedCount})`, icon: CheckCircle2 },
                { key: 'in_progress', label: `In progress (${startedCount})`, icon: CircleDashed },
              ] as { key: CollectionTab; label: string; icon: LucideIcon }[]
            ).map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setCollectionTab(key)
                  setSubjectFilter(null) // subject chips differ per tab
                }}
                aria-pressed={collectionTab === key}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition-all ${FOCUS_RING} ${
                  collectionTab === key
                    ? 'bg-emerald-400/15 text-emerald-700 shadow-[inset_0_0_0_1px_rgba(52,211,153,0.25)] dark:text-emerald-200'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden /> {label}
              </button>
            ))}
          </div>
        </div>

        {/* subject filter chips */}
        {collectionSubjects.length > 1 && (
          <div className="mb-4 flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter collection by subject">
            <button
              type="button"
              onClick={() => setSubjectFilter(null)}
              aria-pressed={subjectFilter === null}
              className={`rounded-full border px-3 py-1 text-[11px] font-semibold transition-colors ${FOCUS_RING} ${
                subjectFilter === null
                  ? 'border-primary/50 bg-primary/10 text-primary'
                  : 'border-border/70 bg-card/60 text-muted-foreground hover:border-emerald-400/35 hover:text-foreground'
              }`}
            >
              All
            </button>
            {collectionSubjects.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setSubjectFilter(subjectFilter === name ? null : name)}
                aria-pressed={subjectFilter === name}
                className={`max-w-[11rem] truncate rounded-full border px-3 py-1 text-[11px] font-semibold transition-colors ${FOCUS_RING} ${
                  subjectFilter === name
                    ? 'border-primary/50 bg-primary/10 text-primary'
                    : 'border-border/70 bg-card/60 text-muted-foreground hover:border-emerald-400/35 hover:text-foreground'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        )}

        {filteredCollection.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border/80 bg-card/40 p-8 text-center">
            <ListChecks className="mx-auto h-8 w-8 text-muted-foreground/50" />
            <h3 className="mt-3 text-base font-semibold">
              {collectionTab === 'completed' ? 'Nothing completed yet' : 'Nothing in progress'}
            </h3>
            <p className="mx-auto mt-1 max-w-sm text-sm text-muted-foreground">
              {collectionTab === 'completed'
                ? 'Search a topic above and tick its checkbox — finished lessons collect here for future revision.'
                : 'Lessons you open (but haven’t ticked) show up here as “in progress”.'}
            </p>
            <button
              type="button"
              onClick={() => inputRef.current?.focus()}
              className={`mt-4 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 ${FOCUS_RING}`}
            >
              Search a topic to mark
            </button>
          </div>
        ) : (
          <div className="max-h-[28rem] overflow-y-auto pr-1" role="list" aria-label={collectionTab === 'completed' ? 'Completed lessons' : 'Lessons in progress'}>
            <AnimatePresence initial={false}>
              {filteredCollection.map((fs) => {
                const p = progress[fs.section.id]
                const done = p?.status === 'completed'
                return (
                  <motion.div
                    key={fs.section.id}
                    role="listitem"
                    layout="position"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -14 }}
                    transition={{ duration: 0.22 }}
                    className={`mb-2.5 flex flex-wrap items-center gap-3 rounded-xl border p-3.5 ${
                      done
                        ? 'border-emerald-400/30 bg-emerald-400/[0.06]'
                        : 'border-amber-300/25 bg-amber-300/[0.04]'
                    }`}
                  >
                    <CompleteToggle
                      done={done}
                      onToggle={() => toggleCompleted(fs.section.id)}
                      label={done ? `Unmark ${fs.section.title} as completed` : `Mark ${fs.section.title} as completed`}
                    />
                    <div className="min-w-0 flex-1">
                      <button
                        type="button"
                        onClick={() => navigate({ name: 'lesson', sectionId: fs.section.id })}
                        className="block min-w-0 max-w-full text-left"
                      >
                        <span className="flex flex-wrap items-baseline gap-x-2.5">
                          <span className="font-mono text-[11px] font-bold text-emerald-300/80">§{fs.section.number}</span>
                          <span className="truncate text-[14px] font-semibold">{fs.section.title}</span>
                        </span>
                        <span className="mt-0.5 block truncate text-[11.5px] text-muted-foreground">
                          {fs.subjectName} · Ch {fs.chapter.number} {fs.chapter.shortTitle}
                        </span>
                      </button>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-2">
                      {p?.quizScore && (
                        <span className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] font-semibold text-emerald-300">
                          quiz {p.quizScore.score}/{p.quizScore.total}
                        </span>
                      )}
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {p ? new Date(p.lastViewed).toLocaleDateString() : ''}
                      </span>
                      <button
                        type="button"
                        onClick={() => navigate({ name: 'lesson', sectionId: fs.section.id })}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold transition-colors ${
                          done
                            ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-600 hover:bg-emerald-400/20 dark:text-emerald-300'
                            : 'border-amber-400/40 bg-amber-400/10 text-amber-600 hover:bg-amber-400/20 dark:text-amber-200'
                        } ${FOCUS_RING}`}
                      >
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Revise
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        )}

        {filteredCollection.length > 0 && (
          <p className="mt-3 px-1 text-center font-mono text-[11px] text-muted-foreground">
            {filteredCollection.length} {filteredCollection.length === 1 ? 'lesson' : 'lessons'}{' '}
            {collectionTab === 'completed' ? 'completed' : 'in progress'}
            {subjectFilter ? ` · ${subjectFilter}` : ''} · {Math.round(touchedPct * 10) / 10}% of the library touched
          </p>
        )}
      </motion.section>
    </div>
  )
}
