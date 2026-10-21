'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import {
  AlarmClock,
  BarChart3,
  BookCheck,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  ClipboardCheck,
  Download,
  Flame,
  Gauge,
  GraduationCap,
  Layers,
  ListChecks,
  NotebookPen,
  PlayCircle,
  Target,
  Trophy,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { LIBRARY_BOOKS, LIBRARY_CHAPTERS, LIBRARY_SECTIONS, getSection } from '@/data/library'
import { useAllContent } from '@/hooks/use-content'
import { ChapterIcon } from './chapter-icon'
import { ExamHistory } from './exam-history'
import { MasteryRadar } from './mastery-radar'
import { SrsForecast } from './srs-forecast'
import { StreakHeatmap } from './streak-heatmap'
import { useStudy } from '@/store/useStudy'

interface CardSrs {
  box: number
  dueAt: string
  seen: number
  correct: number
}

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

/**
 * Counts 0 → target (ease-out cubic, ~900ms) once `start` flips true.
 * Renders the final value until the animation begins, so SSR/no-JS always
 * shows the true number and hydration never sees a flash of zero.
 * Skips straight to the final value when prefers-reduced-motion is set.
 */
function useCountUp(target: number, start: boolean, decimals = 0, duration = 900) {
  const [display, setDisplay] = useState(target)
  const [prevTarget, setPrevTarget] = useState(target)
  const startedRef = useRef(false)
  const rafRef = useRef(0)

  // Until the count-up begins (and after it settles), the shown value mirrors
  // the latest target — the React derived-state pattern, so data arriving late
  // never leaves a stale number on screen and SSR always shows the final value.
  if (prevTarget !== target) {
    setPrevTarget(target)
    setDisplay(target)
  }

  useEffect(() => {
    if (!start || startedRef.current) return
    startedRef.current = true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(p < 1 ? Number((target * eased).toFixed(decimals)) : target)
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [start, target, decimals, duration])

  return display
}

interface StatDef {
  key: string
  label: string
  icon: LucideIcon
  /** large muted watermark in the top-right corner */
  watermark: LucideIcon
  tone: 'emerald' | 'amber' | 'teal'
  /** numeric target for the count-up; null renders an em-dash */
  target: number | null
  suffix?: string
  /** true while the data is still loading → renders an ellipsis */
  loading?: boolean
  /** 0-100 width of the underline bar */
  barPct: number
  barClass: string
  /** decimal places while animating (percent stats glide at 1) */
  decimals?: number
}

/** Dashboard stat card: count-up value, thin progress underline, watermark icon. */
function StatCard({ def, index }: { def: StatDef; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const start = inView && !def.loading
  const n = useCountUp(def.target ?? 0, start, def.decimals ?? 0)
  const value = def.loading ? '…' : `${n}${def.suffix ?? ''}`
  const toneClass =
    def.tone === 'emerald'
      ? 'text-emerald-300'
      : def.tone === 'amber'
        ? 'text-amber-300'
        : 'text-teal-300'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05 }}
      className="relative rounded-2xl border border-border/80 bg-card p-5"
    >
      <def.watermark
        aria-hidden
        className="pointer-events-none absolute right-4 top-4 h-8 w-8 text-muted-foreground opacity-[0.15]"
      />
      <def.icon className={`h-5 w-5 ${toneClass}`} />
      {def.loading ? (
        <div className="mt-3 font-mono text-2xl font-bold">{value}</div>
      ) : def.target === null ? (
        /* empty stat — a quiet invitation instead of a bare dash */
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-mono text-2xl font-bold text-muted-foreground/40">—</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground/50">
            no data yet
          </span>
        </div>
      ) : (
        <div className="mt-3 font-mono text-2xl font-bold">{value}</div>
      )}
      <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-muted/70">
        <div
          className={`h-full rounded-full transition-all duration-700 ${def.barClass}`}
          style={{ width: `${Math.min(100, Math.max(0, def.barPct))}%` }}
        />
      </div>
      <div className="mt-2 text-xs text-muted-foreground">{def.label}</div>
    </motion.div>
  )
}

export function ProgressView() {
  /* lesson corpus arrives by runtime fetch (kept out of the bundle) */
  const allContent = useAllContent()
  const TOTAL_CARDS = allContent ? allContent.reduce((a, c) => a + c.concepts.length, 0) : 0
  const progress = useStudy((s) => s.progress)
  const navigate = useStudy((s) => s.navigate)
  const deviceId = useStudy((s) => s.deviceId)
  const ensureDevice = useStudy((s) => s.ensureDevice)

  const [srs, setSrs] = useState<Record<string, CardSrs>>({})
  const [notes, setNotes] = useState<Record<string, { note: string; updatedAt: string }>>({})
  const [srsLoaded, setSrsLoaded] = useState(false)
  const [notesLoaded, setNotesLoaded] = useState(false)
  // stable device id for the activity heatmap (same pattern as flashcards-view)
  const heatDid = useRef(deviceId ?? ensureDevice())

  useEffect(() => {
    const id = deviceId ?? ensureDevice()
    let cancelled = false
    fetch(`/api/flashcards?deviceId=${encodeURIComponent(id)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled) {
          setSrs(d?.cards ?? {})
          setSrsLoaded(true)
        }
      })
      .catch(() => {
        if (!cancelled) setSrsLoaded(true)
      })
    fetch(`/api/notes?deviceId=${encodeURIComponent(id)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled) {
          setNotes(d?.notes ?? {})
          setNotesLoaded(true)
        }
      })
      .catch(() => {
        if (!cancelled) setNotesLoaded(true)
      })
    return () => {
      cancelled = true
    }
  }, [deviceId, ensureDevice])

  const total = LIBRARY_SECTIONS.length
  const completed = LIBRARY_SECTIONS.filter((s) => progress[s.id]?.status === 'completed').length
  const started = LIBRARY_SECTIONS.filter((s) => progress[s.id]?.status === 'in_progress').length
  const quizzed = LIBRARY_SECTIONS.filter((s) => progress[s.id]?.quizScore).length
  const quizScores = LIBRARY_SECTIONS.map((s) => progress[s.id]?.quizScore).filter(Boolean) as {
    score: number
    total: number
  }[]
  const avgQuiz = quizScores.length
    ? Math.round((quizScores.reduce((a, q) => a + q.score / q.total, 0) / quizScores.length) * 100)
    : null

  const overallPct = total ? Math.round((completed / total) * 100) : 0

  // header ring percentage counts up too (percent values glide at 1 decimal, then settle)
  const ringRef = useRef<HTMLDivElement>(null)
  const ringInView = useInView(ringRef, { once: true })
  const ringPct = useCountUp(overallPct, ringInView, 1)
  const reduceMotion = useReducedMotion()

  // SRS aggregates
  const srsValues = Object.values(srs)
  const masteredCards = srsValues.filter((c) => c.box >= 4).length
  // "due" = never-seen cards (no state yet) + scheduled cards whose dueAt has passed
  const scheduledNotDue = srsValues.filter((c) => new Date(c.dueAt).getTime() > Date.now()).length
  const dueNow = srsLoaded ? TOTAL_CARDS - scheduledNotDue : 0
  const reviewedTotal = srsValues.reduce((a, c) => a + c.seen, 0)
  const recallRate = reviewedTotal
    ? Math.round((srsValues.reduce((a, c) => a + c.correct, 0) / reviewedTotal) * 100)
    : null

  const noteCount = notesLoaded ? Object.keys(notes).length : 0
  const book = LIBRARY_BOOKS[0]

  // next up: first section not completed (in-progress first)
  const nextUp =
    LIBRARY_SECTIONS.find((s) => progress[s.id]?.status === 'in_progress') ??
    LIBRARY_SECTIONS.find((s) => progress[s.id]?.status !== 'completed')

  const statDefs: StatDef[] = [
    {
      key: 'completed',
      label: 'Sections completed',
      icon: CheckCircle2,
      watermark: BookCheck,
      tone: 'emerald',
      target: completed,
      suffix: `/${total}`,
      barPct: total ? (completed / total) * 100 : 0,
      barClass: 'bg-gradient-to-r from-emerald-400 to-teal-300',
    },
    {
      key: 'inprogress',
      label: 'In progress',
      icon: CircleDashed,
      watermark: PlayCircle,
      tone: 'amber',
      target: started,
      barPct: total ? (started / total) * 100 : 0,
      barClass: 'bg-amber-300',
    },
    {
      key: 'avgquiz',
      label: 'Average quiz score',
      icon: Trophy,
      watermark: Target,
      tone: 'emerald',
      target: avgQuiz,
      suffix: '%',
      decimals: 1,
      barPct: avgQuiz ?? 0,
      barClass: 'bg-amber-300',
    },
    {
      key: 'quizzed',
      label: 'Sections quizzed',
      icon: Flame,
      watermark: ClipboardCheck,
      tone: 'amber',
      target: quizzed,
      barPct: total ? (quizzed / total) * 100 : 0,
      barClass: 'bg-teal-300',
    },
    {
      key: 'mastered',
      label: 'Cards mastered (SRS)',
      icon: Brain,
      watermark: Layers,
      tone: 'emerald',
      target: srsLoaded ? masteredCards : null,
      loading: !srsLoaded,
      barPct: srsLoaded && TOTAL_CARDS ? (masteredCards / TOTAL_CARDS) * 100 : 0,
      barClass: 'bg-gradient-to-r from-emerald-400 to-teal-300',
    },
    {
      key: 'due',
      label: 'Cards due now',
      icon: AlarmClock,
      watermark: Zap,
      tone: 'amber',
      target: srsLoaded ? dueNow : null,
      loading: !srsLoaded,
      barPct: srsLoaded && TOTAL_CARDS ? (dueNow / TOTAL_CARDS) * 100 : 0,
      barClass: 'bg-amber-300',
    },
    {
      key: 'notes',
      label: 'Lessons with notes',
      icon: NotebookPen,
      watermark: NotebookPen,
      tone: 'teal',
      target: notesLoaded ? noteCount : null,
      loading: !notesLoaded,
      barPct: total ? (noteCount / total) * 100 : 0,
      barClass: 'bg-teal-300',
    },
    {
      key: 'recall',
      label: 'Recall rate (all-time)',
      icon: Brain,
      watermark: Gauge,
      tone: 'teal',
      target: recallRate,
      suffix: '%',
      decimals: 1,
      barPct: recallRate ?? 0,
      barClass: 'bg-teal-300',
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative mb-10 overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8"
      >
        <div className="absolute inset-0 sv-hero-glow opacity-50" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-200">
              <BarChart3 className="h-3.5 w-3.5" /> Your journey
            </div>
            <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">Progress dashboard</h1>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
              {book.title} · {book.author}
            </p>
            {/* next up */}
            {nextUp && (
              <button
                onClick={() => navigate({ name: 'lesson', sectionId: nextUp.id })}
                className={`mt-4 inline-flex items-center gap-2.5 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.07] px-4 py-2.5 text-left transition-colors hover:border-emerald-400/45 ${FOCUS_RING}`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10">
                  <BookOpen className="h-4 w-4 text-emerald-300" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-emerald-300/80">
                    {completed + started > 0 ? 'Continue' : 'Start here'}
                  </span>
                  <span className="block text-[13px] font-semibold">§{nextUp.number} {nextUp.title}</span>
                </span>
                <motion.span
                  aria-hidden
                  className="shrink-0 text-emerald-300/90"
                  animate={reduceMotion ? undefined : { x: [0, 3, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.span>
              </button>
            )}
            {/* topic tracker — search any topic, tick it done, revise later */}
            <button
              onClick={() => navigate({ name: 'tracker' })}
              className={`mt-3 inline-flex items-center gap-2.5 rounded-xl border border-border/80 bg-card px-4 py-2 text-left transition-colors hover:border-emerald-400/40 ${FOCUS_RING}`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-teal-300/25 bg-teal-300/10">
                <ListChecks className="h-3.5 w-3.5 text-teal-300" />
              </span>
              <span className="text-[12.5px] font-semibold">Topic tracker</span>
              <span className="text-[11px] text-muted-foreground">search · tick done · revise later</span>
            </button>
          </div>
          <div ref={ringRef} className="relative flex h-32 w-32 shrink-0 items-center justify-center">
            <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
              <circle cx="60" cy="60" r="50" fill="none" strokeWidth="10" className="stroke-muted/30" />
              <motion.circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                strokeWidth="10"
                strokeLinecap="round"
                className="stroke-emerald-400"
                strokeDasharray={`${(overallPct / 100) * 314.2} 314.2`}
                initial={false}
                animate={{ strokeDashoffset: 0 }}
                style={{ transition: 'stroke-dasharray 1s ease' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-2xl font-bold text-emerald-300">{ringPct}%</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                complete
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* stat cards */}
      <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {statDefs.map((d, i) => (
          <StatCard key={d.key} def={d} index={i} />
        ))}
      </div>

      {/* streak heatmap */}
      <StreakHeatmap deviceId={heatDid.current} />

      {/* SRS due breakdown + 7-day forecast */}
      <SrsForecast srs={srs} loaded={srsLoaded} />

      {/* per-chapter mastery radar (completion / quizzes / exams) */}
      <MasteryRadar deviceId={heatDid.current} progress={progress} />

      {/* exam performance over time */}
      <ExamHistory deviceId={heatDid.current} />

      {/* notes quick access */}
      {noteCount > 0 && (
        <div className="mb-10">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300/80">
              <NotebookPen className="h-3.5 w-3.5" /> My notes
            </div>
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[11px] text-muted-foreground">
                {noteCount} lesson{noteCount !== 1 ? 's' : ''} with notes
              </span>
              <button
                type="button"
                onClick={() => {
                  const id = deviceId ?? ensureDevice()
                  window.open(`/api/notes/export?deviceId=${encodeURIComponent(id)}`, '_blank')
                }}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/80 bg-card px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition hover:border-teal-300/40 hover:text-foreground print:hidden ${FOCUS_RING}`}
              >
                <Download className="h-3.5 w-3.5" /> Export .md
              </button>
            </div>
          </div>
          <div className="grid max-h-96 gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2">
            {Object.entries(notes)
              .sort((a, b) => b[1].updatedAt.localeCompare(a[1].updatedAt))
              .slice(0, 10)
              .map(([sectionKey, n]) => {
                const sec = getSection(sectionKey)
                return (
                  <button
                    key={sectionKey}
                    onClick={() => navigate({ name: 'lesson', sectionId: sectionKey })}
                    className={`group rounded-xl border border-border/80 bg-card p-4 text-left transition-colors hover:border-teal-300/40 ${FOCUS_RING}`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[13px] font-bold">
                        {sec ? `§${sec.number} ${sec.title}` : sectionKey}
                      </span>
                      <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                        {new Date(n.updatedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="mt-1.5 line-clamp-2 whitespace-pre-line text-[12.5px] leading-relaxed text-muted-foreground">
                      {n.note}
                    </p>
                  </button>
                )
              })}
          </div>
        </div>
      )}

      {/* per-chapter breakdown */}
      <div>
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          <BookOpen className="h-3.5 w-3.5" /> Chapter by chapter
        </div>
        <div className="grid gap-3">
          {LIBRARY_CHAPTERS.map((ch) => {
            const secs = LIBRARY_SECTIONS.filter((s) => s.chapterId === ch.id)
            const done = secs.filter((s) => progress[s.id]?.status === 'completed').length
            const startedC = secs.filter((s) => progress[s.id]?.status === 'in_progress').length
            const pct = secs.length ? (done / secs.length) * 100 : 0
            const notesInChapter = secs.filter((s) => notes[s.id]).length
            return (
              <motion.button
                key={ch.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Math.min(0.2 + Number(ch.id.slice(-2)) * 0.03, 0.6) }}
                onClick={() => navigate({ name: 'chapter', chapterId: ch.id })}
                className={`group flex items-center gap-4 rounded-xl border border-border/80 bg-card p-4 text-left transition-colors hover:border-emerald-400/35 ${FOCUS_RING}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10">
                  <ChapterIcon icon={ch.icon} className="h-4.5 w-4.5 text-emerald-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="truncate text-[14px] font-semibold">
                      <span className="font-mono text-[11px] text-emerald-300/80">Ch {ch.number}</span>{' '}
                      {ch.shortTitle}
                    </span>
                    <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                      {done}/{secs.length}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        pct === 100 ? 'bg-emerald-400' : pct > 0 ? 'bg-amber-300' : 'bg-transparent'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
                <div className="hidden shrink-0 items-center gap-2 sm:flex">
                  {notesInChapter > 0 && (
                    <span
                      className="rounded-full border border-teal-300/30 bg-teal-300/10 px-2.5 py-1 text-[10px] font-semibold text-teal-200"
                      title={`${notesInChapter} lesson(s) with notes`}
                    >
                      <NotebookPen className="h-3 w-3" />
                    </span>
                  )}
                  {startedC > 0 && done < secs.length && (
                    <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-1 text-[10px] font-semibold text-amber-200">
                      {startedC} active
                    </span>
                  )}
                  {pct === 100 && <GraduationCap className="h-5 w-5 shrink-0 text-emerald-300" />}
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      {completed === 0 && started === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-border/80 bg-card/40 p-8 text-center">
          <BarChart3 className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <h3 className="mt-3 text-base font-semibold">No progress yet</h3>
          <p className="mx-auto mt-1 max-w-sm text-sm text-muted-foreground">
            Your reading and quiz history will appear here as soon as you open your first section.
          </p>
          <button
            onClick={() => navigate({ name: 'library' })}
            className={`mt-4 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 ${FOCUS_RING}`}
          >
            Browse the library
          </button>
        </div>
      )}
    </div>
  )
}
