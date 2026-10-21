'use client'

/* ------------------------------------------------------------------ */
/*  Review Mode — SM-2 spaced repetition                               */
/*                                                                     */
/*  The dashboard for the deck every lesson feeds: stats + sparkline,  */
/*  a due-card session with Again/Hard/Good/Easy grading (keyboard     */
/*  1–4 + Space), and the full card browser with due chips and kind    */
/*  filters. Scheduling itself lives in src/lib/sm2.ts — the same      */
/*  algorithm the forgetting-curve lesson teaches.                     */
/* ------------------------------------------------------------------ */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlarmClock,
  BookOpen,
  Brain,
  Check,
  Flame,
  Layers,
  Library as LibraryIcon,
  RefreshCw,
  Repeat,
  Sparkles,
  Timer,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { toast } from 'sonner'
import { startFocusSession } from '@/lib/focus'
import { schedule, formatInterval, type Grade } from '@/lib/sm2'
import { RichText } from '../rich-text'
import { useStudy } from '@/store/useStudy'

/* ------------------------------ types ------------------------------ */

type CardKind = 'quiz' | 'term' | 'takeaway'

/** One ReviewCard row as it comes back from /api/review/* (ISO dates). */
interface ReviewCard {
  id: string
  sectionId: string
  sectionTitle: string
  front: string
  back: string
  kind: CardKind
  reps: number
  lapses: number
  interval: number
  ease: number
  dueAt: string
  lastGrade: number | null
  createdAt: string
  updatedAt: string
}

interface WeekPoint {
  day: string
  label: string
  reviews: number
}

interface ReviewStats {
  due: number
  total: number
  streak: number
  reviewedToday: number
  week: WeekPoint[]
}

type SessionState = 'idle' | 'active' | 'done'

/* ---------------------------- constants ---------------------------- */

const KIND_LABEL: Record<CardKind, string> = {
  quiz: 'Quiz',
  term: 'Term',
  takeaway: 'Takeaway',
}

/** badge tint per card kind (echoes the flashcard kind badges) */
const KIND_STYLE: Record<CardKind, string> = {
  quiz: 'border-rose-400/30 bg-rose-400/10 text-rose-200',
  term: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200',
  takeaway: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
}

/** the four grades — colors follow the app's rose/amber/emerald vocabulary */
const GRADES: {
  grade: Grade
  label: string
  key: string
  icon: typeof Check
  cls: string
  kbdCls: string
}[] = [
  {
    grade: 0,
    label: 'Again',
    key: '1',
    icon: RefreshCw,
    cls: 'border-rose-400/35 bg-rose-400/10 text-rose-200 hover:bg-rose-400/20',
    kbdCls: 'border-rose-400/30 bg-rose-400/10 text-rose-200/75',
  },
  {
    grade: 1,
    label: 'Hard',
    key: '2',
    icon: TrendingUp,
    cls: 'border-amber-400/35 bg-amber-400/10 text-amber-200 hover:bg-amber-400/20',
    kbdCls: 'border-amber-400/30 bg-amber-400/10 text-amber-200/75',
  },
  {
    grade: 2,
    label: 'Good',
    key: '3',
    icon: Check,
    cls: 'border-emerald-400/35 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400/20',
    kbdCls: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200/75',
  },
  {
    grade: 3,
    label: 'Easy',
    key: '4',
    icon: Sparkles,
    cls: 'border-teal-400/35 bg-teal-400/10 text-teal-200 hover:bg-teal-400/20',
    kbdCls: 'border-teal-400/30 bg-teal-400/10 text-teal-200/75',
  },
]

/** "due now" / "new" / "in 3d" — the chip on every browser row */
function dueChip(card: ReviewCard): { label: string; cls: string; title: string } {
  if (card.reps === 0) {
    return {
      label: 'new',
      cls: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200',
      title: 'Never reviewed — due immediately',
    }
  }
  const days = (new Date(card.dueAt).getTime() - Date.now()) / 86_400_000
  if (days <= 0) {
    return {
      label: 'due now',
      cls: 'border-amber-400/35 bg-amber-400/15 text-amber-200',
      title: `Overdue — scheduled ${formatInterval(-days)} ago`,
    }
  }
  return {
    label: `in ${formatInterval(days)}`,
    cls: 'border-border/80 bg-muted/50 text-muted-foreground',
    title: `Next review ${new Date(card.dueAt).toLocaleString()}`,
  }
}

/** normalize an API row into our client shape (kind arrives as string) */
function normalizeCard(raw: Record<string, unknown>): ReviewCard {
  const kind = raw.kind === 'quiz' || raw.kind === 'takeaway' ? raw.kind : 'term'
  return {
    id: String(raw.id),
    sectionId: String(raw.sectionId ?? ''),
    sectionTitle: String(raw.sectionTitle ?? ''),
    front: String(raw.front ?? ''),
    back: String(raw.back ?? ''),
    kind: kind as CardKind,
    reps: Number(raw.reps ?? 0),
    lapses: Number(raw.lapses ?? 0),
    interval: Number(raw.interval ?? 0),
    ease: Number(raw.ease ?? 2.5),
    dueAt: String(raw.dueAt ?? new Date().toISOString()),
    lastGrade: raw.lastGrade === null || raw.lastGrade === undefined ? null : Number(raw.lastGrade),
    createdAt: String(raw.createdAt ?? new Date().toISOString()),
    updatedAt: String(raw.updatedAt ?? new Date().toISOString()),
  }
}

/** collapse whitespace + truncate for aria-live announcements */
function shortText(text: string, max = 90): string {
  const t = text.replace(/\s+/g, ' ').trim()
  return t.length > max ? `${t.slice(0, max - 1)}…` : t
}

/* --------------------------- tiny pieces --------------------------- */

/** keyboard-hint chip (matches the ⌘K kbd style across the app) */
function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-border/70 bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
      {children}
    </kbd>
  )
}

/** 7-day review sparkline — inline SVG bars, today in amber */
function Sparkline({ week }: { week: WeekPoint[] }) {
  const max = Math.max(1, ...week.map((w) => w.reviews))
  const BAR_W = 14
  const STEP = 24
  const BASELINE = 44
  const PLOT_H = 34
  return (
    <svg
      viewBox="0 0 172 62"
      className="h-auto w-full max-w-[220px]"
      role="img"
      aria-label={`Reviews per day over the last week: ${week
        .map((w) => `${w.label} ${w.reviews}`)
        .join(', ')}`}
    >
      <line x1={2} y1={BASELINE} x2={170} y2={BASELINE} className="stroke-border" strokeWidth={1.5} />
      {week.map((d, i) => {
        const x = 4 + i * STEP + (STEP - BAR_W) / 2
        const h = d.reviews > 0 ? Math.max(3, Math.round((d.reviews / max) * PLOT_H)) : 2
        const today = i === week.length - 1
        return (
          <g key={d.day}>
            <rect
              x={x}
              y={BASELINE - h}
              width={BAR_W}
              height={h}
              rx={2.5}
              className={
                d.reviews === 0
                  ? 'fill-muted'
                  : today
                    ? 'fill-amber-400/90'
                    : 'fill-emerald-400/70'
              }
            />
            {d.reviews > 0 && (
              <text
                x={x + BAR_W / 2}
                y={BASELINE - h - 4}
                textAnchor="middle"
                fontSize={8.5}
                className={`font-mono ${today ? 'fill-amber-300' : 'fill-muted-foreground'}`}
              >
                {d.reviews}
              </text>
            )}
            <text
              x={x + BAR_W / 2}
              y={BASELINE + 11}
              textAnchor="middle"
              fontSize={8.5}
              fontWeight={today ? 700 : 400}
              className={today ? 'fill-amber-300' : 'fill-muted-foreground'}
            >
              {d.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

/** one of the four dashboard stat blocks */
function StatBlock({
  label,
  value,
  sub,
  icon: Icon,
  accent,
}: {
  label: string
  value: string | number
  sub: string
  icon: typeof Layers
  accent: 'amber' | 'emerald'
}) {
  return (
    <div className="min-w-0 rounded-xl border border-border/80 bg-card p-4">
      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
        <Icon
          className={`h-3 w-3 shrink-0 ${accent === 'amber' ? 'text-amber-300' : 'text-emerald-300'}`}
          aria-hidden
        />
        <span className="truncate">{label}</span>
      </div>
      <div
        className={`mt-1.5 font-mono text-2xl font-bold leading-none sm:text-[26px] ${
          accent === 'amber' ? 'text-amber-200' : 'text-foreground'
        }`}
      >
        {value}
      </div>
      <div className="mt-1 truncate text-[11px] text-muted-foreground">{sub}</div>
    </div>
  )
}

/* ------------------------------ view ------------------------------- */

export function ReviewView() {
  const navigate = useStudy((s) => s.navigate)

  /* dashboard data */
  const [stats, setStats] = useState<ReviewStats | null>(null)
  const [cards, setCards] = useState<ReviewCard[] | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  /* session state */
  const [sessionState, setSessionState] = useState<SessionState>('idle')
  const [queue, setQueue] = useState<ReviewCard[]>([])
  const [done, setDone] = useState(0)
  const [total, setTotal] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [answering, setAnswering] = useState(false)
  const [starting, setStarting] = useState(false)

  /* browser filter */
  const [kindFilter, setKindFilter] = useState<CardKind | 'all'>('all')

  /* screen-reader announcements for the session runner */
  const [announcement, setAnnouncement] = useState('')

  /* focus management: focus the freshly mounted card after a grade */
  const sessionRef = useRef<HTMLDivElement | null>(null)
  const cardRegionRef = useRef<HTMLDivElement | null>(null)
  const shouldFocusCardRef = useRef(false)
  const setCardRegionRef = useCallback((el: HTMLDivElement | null) => {
    cardRegionRef.current = el
    if (el && shouldFocusCardRef.current) {
      shouldFocusCardRef.current = false
      el.focus()
    }
  }, [])

  const current = queue[0]
  const progressPct = total > 0 ? Math.round((done / total) * 100) : 0

  /* ------------------------- data loading ------------------------- */

  const load = useCallback(async () => {
    let failed = false
    try {
      const res = await fetch('/api/review/stats', { cache: 'no-store' })
      if (res.ok) {
        const data = await res.json()
        setStats({
          due: Number(data.due ?? 0),
          total: Number(data.total ?? 0),
          streak: Number(data.streak ?? 0),
          reviewedToday: Number(data.reviewedToday ?? 0),
          week: Array.isArray(data.week) ? data.week : [],
        })
      } else failed = true
    } catch {
      failed = true
    }
    try {
      const res = await fetch('/api/review/cards?limit=300', { cache: 'no-store' })
      if (res.ok) {
        const data = await res.json()
        setCards(Array.isArray(data.cards) ? data.cards.map(normalizeCard) : [])
      } else failed = true
    } catch {
      failed = true
    }
    if (failed) toast.error('Review data is unreachable — try the refresh button.')
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const refresh = async () => {
    setRefreshing(true)
    await load()
    setRefreshing(false)
  }

  /* --------------------------- session ---------------------------- */

  const startSession = async () => {
    if (starting) return
    setStarting(true)
    try {
      const res = await fetch('/api/review/queue', { cache: 'no-store' })
      if (!res.ok) throw new Error('queue fetch failed')
      const data = await res.json()
      const dueCards: ReviewCard[] = Array.isArray(data.cards) ? data.cards.map(normalizeCard) : []
      if (dueCards.length === 0) {
        toast('Nothing is due right now — cards ripen as their intervals pass.', {
          icon: <AlarmClock className="h-4 w-4 text-amber-300" />,
        })
        return
      }
      setQueue(dueCards)
      setDone(0)
      setTotal(dueCards.length)
      setRevealed(false)
      setSessionState('active')
      shouldFocusCardRef.current = true
      setAnnouncement(`Session started. Card 1 of ${dueCards.length}. ${shortText(dueCards[0].front)}`)
    } catch {
      toast.error('Could not load the review queue — check your connection.')
    } finally {
      setStarting(false)
    }
  }

  const endSession = useCallback(() => {
    setSessionState('idle')
    setQueue([])
    setDone(0)
    setTotal(0)
    setRevealed(false)
    setAnnouncement('Session ended.')
  }, [])

  /** grade the current card: POST the answer, then advance the session */
  const answer = async (grade: Grade) => {
    const card = current
    if (!card || answering) return
    setAnswering(true)
    try {
      const res = await fetch('/api/review/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardId: card.id, grade }),
      })
      if (!res.ok) throw new Error('answer failed')
      const data = await res.json()
      const updated = normalizeCard(data.card)

      /* keep the browser list + stats in sync without a refetch */
      setCards((cs) => (cs ? cs.map((c) => (c.id === updated.id ? updated : c)) : cs))
      setStats((s) =>
        s
          ? {
              ...s,
              reviewedToday: s.reviewedToday + 1,
              week: s.week.map((w, i) =>
                i === s.week.length - 1 ? { ...w, reviews: w.reviews + 1 } : w
              ),
            }
          : s
      )
      setDone((d) => d + 1)

      const preview = formatInterval(updated.interval)
      if (grade === 0) {
        /* a lapse re-enters the session at the back — you'll see it again */
        setQueue((q) => [...q.slice(1), updated])
        setTotal((t) => t + 1)
        setAnnouncement(`Again — card returns in ${preview}.`)
      } else {
        setQueue((q) => q.slice(1))
        setAnnouncement(`${GRADES[grade].label} — next review in ${preview}.`)
      }
      setRevealed(false)

      if (grade !== 0 && queue.length === 1) {
        setSessionState('done')
        setAnnouncement(`Session complete — ${done + 1} reviews saved. Every card has a new schedule.`)
        void load() /* fresh due/streak counts */
      }
    } catch {
      toast.error('Could not save that answer — try again.')
    } finally {
      setAnswering(false)
    }
  }

  /** click a browser row → jump that card into the session */
  const jumpToCard = (card: ReviewCard) => {
    if (sessionState === 'active') {
      if (queue.some((c) => c.id === card.id)) {
        toast('That card is already in this session.', {
          icon: <Repeat className="h-4 w-4 text-amber-300" />,
        })
        return
      }
      setQueue((q) => [card, ...q])
      setTotal((t) => t + 1)
      setRevealed(false)
      setAnnouncement(`Card pulled into the session. ${shortText(card.front)}`)
    } else {
      setQueue([card])
      setDone(0)
      setTotal(1)
      setRevealed(false)
      setSessionState('active')
      setAnnouncement(`Practicing one card. ${shortText(card.front)}`)
    }
    shouldFocusCardRef.current = true
    sessionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  /* SM-2 previews for the four grade buttons of the current card */
  const previews = useMemo(() => {
    if (!current) return null
    const base = { reps: current.reps, lapses: current.lapses, interval: current.interval, ease: current.ease }
    return GRADES.map((g) => formatInterval(schedule(base, g.grade).interval))
  }, [current])

  /* -------- keyboard controls (Space reveal · 1–4 grade · Esc exit) --------
     Same guards as the flashcard runner: ignored while typing, while a
     dialog (⌘K palette) is open, or when a focused button owns the key. */
  useEffect(() => {
    if (sessionState !== 'active' || !current) return
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const t = e.target instanceof HTMLElement ? e.target : null
      if (
        t &&
        (t.tagName === 'INPUT' ||
          t.tagName === 'TEXTAREA' ||
          t.tagName === 'SELECT' ||
          t.isContentEditable)
      ) {
        return
      }
      if (document.querySelector('[role="dialog"]')) return

      if (e.key === ' ' || e.key === 'Spacebar') {
        if (t?.closest('button, a[href], [role="button"], summary')) return
        e.preventDefault()
        setRevealed((r) => {
          setAnnouncement(r ? 'Answer hidden.' : 'Answer revealed.')
          return !r
        })
        return
      }
      if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault()
        endSession()
        return
      }
      const gi = ['1', '2', '3', '4'].indexOf(e.key)
      if (gi >= 0) {
        if (!revealed) return // grade only after the answer is revealed
        e.preventDefault()
        void answer(GRADES[gi].grade)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [sessionState, current, revealed, answering, endSession])

  /* --------------------------- browser ---------------------------- */

  const filteredCards = useMemo(() => {
    if (!cards) return null
    if (kindFilter === 'all') return cards
    return cards.filter((c) => c.kind === kindFilter)
  }, [cards, kindFilter])

  const kindCount = (kind: CardKind | 'all') =>
    kind === 'all' ? (cards?.length ?? 0) : (cards?.filter((c) => c.kind === kind).length ?? 0)

  const loading = stats === null || cards === null

  /* ============================= render ============================= */

  /* ---- loading shell ---- */
  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6" role="status" aria-label="Loading Review Mode">
        <div className="h-40 animate-pulse rounded-3xl border border-border/80 bg-card" />
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-24 animate-pulse rounded-xl border border-border/80 bg-card" />
          ))}
        </div>
        <div className="mt-6 h-64 animate-pulse rounded-2xl border border-border/80 bg-card" />
      </div>
    )
  }

  /* ---- empty state: no cards have been saved yet ---- */
  if (cards.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl border border-amber-400/25 bg-card p-8 text-center sm:p-12"
        >
          <div className="absolute inset-0 sv-hero-glow opacity-50" />
          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10">
              <Repeat className="h-8 w-8 text-amber-300" aria-hidden />
            </div>
            <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Review Mode</h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Spaced repetition, SM-2 style — the method the forgetting-curve lesson teaches, now at
              work. Your deck is empty: open any lesson, press{' '}
              <span className="font-semibold text-amber-200">Save to Review</span> at its end, and
              its quiz questions, key terms and takeaways become scheduled cards.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => navigate({ name: 'library' })}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                <LibraryIcon className="h-4 w-4" /> Browse the Library
              </button>
              <button
                onClick={() => navigate({ name: 'lesson', sectionId: 'ku-fnd-spaced-repetition' })}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-700 dark:hover:text-amber-300"
              >
                <BookOpen className="h-4 w-4" /> The forgetting-curve lesson
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  /* ---- the dashboard (cards exist) ---- */
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      {/* ---------------- hero ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative mb-6 overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8"
      >
        <div className="absolute inset-0 sv-hero-glow opacity-50" />
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-3.5 py-1.5 text-xs font-semibold text-amber-200">
                <Repeat className="h-3.5 w-3.5" /> Review Mode · SM-2
              </div>
              <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
                Memory, <span className="sv-text-gradient">scheduled</span>
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Spaced repetition, SM-2 style — the method the forgetting-curve lesson teaches, now
                at work. Cards you grade <span className="font-semibold text-foreground">Easy</span>{' '}
                drift away for months; cards you miss come back in minutes.
              </p>
            </div>
            <button
              onClick={refresh}
              disabled={refreshing}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-amber-400/40 hover:text-foreground disabled:opacity-50"
              aria-label="Refresh review stats and cards"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? 'animate-spin' : ''}`} aria-hidden />
              Refresh
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <button
              onClick={startSession}
              disabled={starting || stats.due === 0}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(251,191,36,0.35)] transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <AlarmClock className="h-4 w-4" aria-hidden />
              {starting ? 'Loading…' : stats.due > 0 ? `Start session — ${stats.due} due` : 'Nothing due'}
            </button>
            {/* X11J review↔focus bridge — time a review sit-in as a Pomodoro so
                the minutes land in "What you studied" beside the book subjects */}
            <button
              onClick={() => {
                startFocusSession(undefined, {
                  subject: 'Spaced Review',
                  taskTitle: `SM-2 review${stats.due > 0 ? ` — ${stats.due} due` : ' · reading mode'}`,
                })
                toast.success('Pomodoro started — review time is being timed', {
                  description: 'Deep-focus block · banks into Focus HQ as “Spaced Review” study time',
                })
              }}
              title="Start a Pomodoro for this review sit-in — it shows up in Focus HQ as study time"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-emerald-400/50 hover:text-emerald-600 dark:hover:text-emerald-300"
            >
              <Timer className="h-4 w-4" aria-hidden /> Pomodoro
            </button>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-[11px] text-muted-foreground">
              <Brain className="h-3 w-3 text-amber-300/80" aria-hidden />
              {stats.total} cards · {cards.filter((c) => c.reps === 0).length} still new
            </span>
          </div>
        </div>
      </motion.div>

      {/* ---------------- stats row + sparkline ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.06 }}
        className="mb-6 grid gap-4 lg:grid-cols-[1fr_auto]"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatBlock
            label="Due now"
            value={stats.due}
            sub={stats.due > 0 ? 'cards ready today' : 'all caught up'}
            icon={AlarmClock}
            accent="amber"
          />
          <StatBlock
            label="Total cards"
            value={stats.total}
            sub="across saved lessons"
            icon={Layers}
            accent="emerald"
          />
          <StatBlock
            label="Day streak"
            value={stats.streak}
            sub={stats.streak > 0 ? 'days in a row' : 'review today to start'}
            icon={Flame}
            accent="amber"
          />
          <StatBlock
            label="Reviewed today"
            value={stats.reviewedToday}
            sub="answers since midnight UTC"
            icon={Zap}
            accent="emerald"
          />
        </div>
        <div className="rounded-xl border border-border/80 bg-card p-4 lg:min-w-[240px]">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Last 7 days
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-emerald-300/80" aria-hidden />
              {stats.week.reduce((a, w) => a + w.reviews, 0)} reviews
            </span>
          </div>
          <Sparkline week={stats.week} />
        </div>
      </motion.div>

      {/* ---------------- session ---------------- */}
      <section ref={sessionRef} aria-label="Review session" className="mb-6 scroll-mt-24">
        <AnimatePresence mode="wait">
          {sessionState === 'active' && current ? (
            <motion.div
              key="session-active"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-3xl"
            >
              <p className="sr-only" role="status" aria-live="polite">
                {announcement}
              </p>

              {/* session header: progress + exit */}
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {done} / {total} done
                </span>
                <button
                  onClick={endSession}
                  className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  End session
                </button>
              </div>
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="h-2 flex-1 overflow-hidden rounded-full bg-muted"
                  role="progressbar"
                  aria-valuenow={progressPct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Session progress"
                >
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-emerald-400"
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {progressPct}%
                </span>
              </div>

              {/* the current card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id + String(queue.length)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div
                    ref={setCardRegionRef}
                    tabIndex={-1}
                    className={`relative min-h-[300px] overflow-hidden rounded-3xl border bg-card p-6 outline-none transition-colors sm:min-h-[340px] sm:p-7 ${
                      revealed ? 'border-amber-400/30' : 'border-border/80'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${KIND_STYLE[current.kind]}`}
                      >
                        {KIND_LABEL[current.kind]}
                      </span>
                      <span className="min-w-0 truncate font-mono text-[10px] text-muted-foreground">
                        {current.sectionTitle}
                      </span>
                    </div>

                    {/* front — the prompt */}
                    <div className="flex min-h-[130px] items-center justify-center overflow-y-auto px-2 py-5 text-center">
                      <h3 className="text-xl font-semibold leading-relaxed tracking-tight sm:text-2xl">
                        <RichText text={current.front} />
                      </h3>
                    </div>

                    {/* SM-2 vitals of this card */}
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[10px] text-muted-foreground">
                      <span>{current.reps === 0 ? 'new card' : `seen ${current.reps}×`}</span>
                      {current.lapses > 0 && (
                        <span className="text-rose-300/80">{current.lapses} lapse{current.lapses > 1 ? 's' : ''}</span>
                      )}
                      <span>ease {current.ease.toFixed(2)}</span>
                      {current.interval > 0 && <span>interval {formatInterval(current.interval)}</span>}
                    </div>

                    {/* the answer side — revealed in place */}
                    <AnimatePresence initial={false}>
                      {revealed && (
                        <motion.div
                          key="back"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 border-t border-dashed border-amber-400/25 pt-5">
                            <div className="max-h-56 overflow-y-auto text-center">
                              <p className="text-[15px] leading-relaxed text-foreground/95 sm:text-base">
                                <RichText text={current.back} />
                              </p>
                            </div>
                            <p className="mt-3 text-center text-[11px] text-muted-foreground">
                              How well did you know it? The button schedules the next review.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!revealed && (
                      <div className="mt-6 flex justify-center">
                        <button
                          onClick={() => {
                            setRevealed(true)
                            setAnnouncement('Answer revealed.')
                          }}
                          className="inline-flex items-center gap-2 rounded-xl border border-amber-400/40 bg-amber-400/10 px-6 py-3 text-sm font-semibold text-amber-200 transition-all hover:bg-amber-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
                        >
                          <Brain className="h-4 w-4" aria-hidden /> Show answer
                          <span className="ml-1 inline-flex items-center gap-1 font-mono text-[10px] font-bold text-amber-200/70">
                            <Kbd>Space</Kbd>
                          </span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* grade buttons — each shows its SM-2 interval preview */}
                  {revealed && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: 0.05 }}
                      className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4"
                    >
                      {GRADES.map((g, gi) => (
                        <button
                          key={g.key}
                          onClick={() => void answer(g.grade)}
                          disabled={answering}
                          className={`flex min-h-[64px] flex-col items-center justify-center gap-1 rounded-xl border px-3 py-3 text-sm font-semibold transition-all disabled:opacity-40 ${g.cls}`}
                        >
                          <span className="inline-flex items-center gap-1.5">
                            <g.icon className="h-4 w-4" aria-hidden /> {g.label}
                            <span
                              aria-hidden="true"
                              className={`rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-bold ${g.kbdCls}`}
                            >
                              {g.key}
                            </span>
                          </span>
                          {previews && (
                            <span className="font-mono text-[10px] font-medium opacity-75">
                              next in {previews[gi]}
                            </span>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {/* keyboard hints */}
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-[11px] text-muted-foreground">
                    {(
                      [
                        ['Space', 'reveal'],
                        ['1–4', 'grade'],
                        ['Esc', 'end session'],
                      ] as const
                    ).map(([key, label], i) => (
                      <span key={key} className="inline-flex items-center gap-1.5">
                        {i > 0 && (
                          <span aria-hidden="true" className="opacity-60">
                            ·
                          </span>
                        )}
                        <Kbd>{key}</Kbd> {label}
                      </span>
                    ))}
                  </div>

                  {/* jump back to the source lesson */}
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => navigate({ name: 'lesson', sectionId: current.sectionId })}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-amber-300"
                    >
                      <BookOpen className="h-3.5 w-3.5" aria-hidden /> Open the source lesson
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : sessionState === 'done' ? (
            /* ---------- session complete ---------- */
            <motion.div
              key="session-done"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="mx-auto max-w-2xl"
            >
              <div className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-card p-8 text-center">
                <div className="absolute inset-0 sv-hero-glow opacity-60" />
                <div className="relative">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10">
                    <Repeat className="h-8 w-8 text-amber-300" aria-hidden />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold">Session complete</h2>
                  <p className="mt-1 font-mono text-4xl font-bold text-amber-300">{done}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    reviews saved · every graded card carries a fresh SM-2 schedule
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-[11px] text-muted-foreground">
                    <Flame className="h-3 w-3 text-amber-300/80" aria-hidden />
                    {stats.streak > 0
                      ? `${stats.streak}-day streak · ${stats.reviewedToday} reviewed today`
                      : 'Your streak starts today — come back tomorrow'}
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={startSession}
                      disabled={starting || stats.due === 0}
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <AlarmClock className="h-4 w-4" aria-hidden />
                      {stats.due > 0 ? `Keep going — ${stats.due} due` : 'All caught up'}
                    </button>
                    <button
                      onClick={endSession}
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-amber-400/40"
                    >
                      <Layers className="h-4 w-4" aria-hidden /> Back to the deck
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ---------- idle: session invitation ---------- */
            <motion.div
              key="session-idle"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mx-auto max-w-3xl rounded-2xl border border-dashed border-amber-400/30 bg-amber-400/[0.04] p-6 sm:p-7"
            >
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10">
                    <AlarmClock className="h-5 w-5 text-amber-300" aria-hidden />
                  </span>
                  <div>
                    <h2 className="text-[15px] font-bold tracking-tight">
                      {stats.due > 0
                        ? `${stats.due} card${stats.due !== 1 ? 's' : ''} waiting for review`
                        : 'Nothing due right now'}
                    </h2>
                    <p className="mt-1 max-w-md text-xs leading-relaxed text-muted-foreground">
                      {stats.due > 0
                        ? 'A session drills up to 50 due cards — grade each one and SM-2 picks the perfect moment to show it again.'
                        : 'Cards return as their intervals ripen — check the due chips below, or pull any card into a one-card practice below.'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={startSession}
                  disabled={starting || stats.due === 0}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-amber-400/40 bg-amber-400/15 px-5 py-3 text-sm font-semibold text-amber-100 transition-all hover:bg-amber-400/25 disabled:cursor-not-allowed disabled:opacity-40 dark:text-amber-200"
                >
                  <Zap className="h-4 w-4" aria-hidden /> {starting ? 'Loading…' : 'Start session'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ---------------- all review cards ---------------- */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.12 }}
        aria-label="All review cards"
      >
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/80">
            <Layers className="h-3.5 w-3.5" aria-hidden /> All review cards
          </h2>
          <span className="font-mono text-[11px] text-muted-foreground">
            {cards.length} card{cards.length !== 1 ? 's' : ''} · click one to practice it
          </span>
        </div>

        {/* kind filter chips */}
        <div className="mb-4 flex flex-wrap items-center gap-2" role="group" aria-label="Filter cards by kind">
          {(['all', 'quiz', 'term', 'takeaway'] as const).map((k) => {
            const active = kindFilter === k
            const label = k === 'all' ? 'All' : KIND_LABEL[k]
            return (
              <button
                key={k}
                onClick={() => setKindFilter(k)}
                aria-pressed={active}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? 'border-amber-400/50 bg-amber-400/15 text-amber-200'
                    : 'border-border/80 bg-card text-muted-foreground hover:border-amber-400/30 hover:text-foreground'
                }`}
              >
                {label}
                <span className="font-mono text-[10px] opacity-70">{kindCount(k)}</span>
              </button>
            )
          })}
        </div>

        {/* the list — capped height, custom-scrollbar scroll */}
        <div className="max-h-96 overflow-y-auto rounded-2xl border border-border/80 bg-card">
          {filteredCards && filteredCards.length > 0 ? (
            <ul className="divide-y divide-border/60">
              {filteredCards.map((c) => {
                const chip = dueChip(c)
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => jumpToCard(c)}
                      className="group flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:bg-muted/40"
                      aria-label={`Practice card: ${shortText(c.front, 60)}`}
                    >
                      <span
                        className={`hidden shrink-0 rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider sm:inline-block ${KIND_STYLE[c.kind]}`}
                      >
                        {KIND_LABEL[c.kind]}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[13.5px] font-medium text-foreground/90">
                          {c.front}
                        </span>
                        <span className="mt-0.5 block truncate font-mono text-[10px] text-muted-foreground">
                          {c.sectionTitle}
                          {c.reps > 0 && ` · ease ${c.ease.toFixed(2)} · ${c.reps} rep${c.reps > 1 ? 's' : ''}`}
                        </span>
                      </span>
                      <span
                        title={chip.title}
                        className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold ${chip.cls}`}
                      >
                        {chip.label}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          ) : (
            <div className="flex min-h-24 items-center justify-center p-6 text-center text-[13px] text-muted-foreground">
              No {kindFilter === 'all' ? '' : KIND_LABEL[kindFilter].toLowerCase()} cards match this
              filter yet.
            </div>
          )}
        </div>

        <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
          Cards are seeded per lesson — open a lesson and press{' '}
          <span className="font-semibold text-amber-200/90">Save to Review</span> to add its quiz
          questions, key terms and takeaways here.
        </p>
      </motion.section>
    </div>
  )
}
