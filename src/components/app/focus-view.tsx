'use client'

/**
 * X11 — Focus HQ: the full Pomodoro experience.
 *
 * Three pillars (Cirillo's method, upgraded):
 *  1. TIMER    — focus / short / long sessions with cycle counting, zen mode,
 *                interruption logging, partial credit and reload survival
 *                (engine in '@/lib/focus').
 *  2. TO-DOS   — the "to-do today" list: every task carries a pomodoro
 *                estimate; sessions accrue against the linked task.
 *  3. ANALYTICS— "what did I study, for how much time": per-subject time,
 *                14-day trend, golden hours, streaks, recent sessions.
 *
 * Data: FocusTask + FocusSession tables via /api/focus/*.
 */

import { type CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  CalendarCheck,
  CalendarDays,
  CalendarRange,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Coffee,
  Download,
  Flame,
  Hourglass,
  ListTodo,
  Minus,
  NotebookPen,
  Pause,
  Pencil,
  PhoneIncoming,
  PieChart,
  Play,
  Plus,
  RotateCcw,
  Settings2,
  Sparkles,
  Sun,
  Target,
  Timer,
  Trash2,
  TrendingUp,
  Trophy,
  Wind,
  Zap,
} from 'lucide-react'
import { toast } from 'sonner'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { LIBRARY_SUBJECTS } from '@/data/library'
import { useStudy } from '@/store/useStudy'
import {
  type FocusLinkage,
  addInterruption,
  fmtClock,
  resetSession,
  selectSession,
  sessionLabel,
  setFocusLinkage,
  setZen,
  skipToBreak,
  startBreakSession,
  startFocusSession,
  toggleRun,
  useFocusEngine,
  useFocusSettings,
  useSessionsVersion,
  DEFAULT_FOCUS_SETTINGS,
  saveFocusSettings,
  focusPresets,
} from '@/lib/focus'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  API row types                                                      */
/* ------------------------------------------------------------------ */

interface FocusTaskRow {
  id: string
  title: string
  subject: string | null
  subjectId: string | null
  bookId: string | null
  estimate: number
  done: number
  interruptions: number
  completed: boolean
  completedAt: string | null
  position: number
}

interface SessionRow {
  id: string
  kind: string
  taskTitle: string | null
  subject: string | null
  chapterTitle: string | null
  plannedMin: number
  actualSec: number
  completed: boolean
  interruptions: number
  note: string | null
  startedAt: string
}

interface StatsPayload {
  days: { day: string; label: string; minutes: number; pomodoros: number; interruptions: number }[]
  subjects: { subject: string; minutes: number; sessions: number }[]
  hours: { hour: number; minutes: number }[]
  totals: {
    allMinutes: number
    allPomodoros: number
    allSessions: number
    avgSessionMin: number
    streakDays: number
    bestDayMinutes: number
    bestDayDate: string
    weekMinutes: number
    todayMinutes: number
    todayPomodoros: number
    todayInterruptions: number
    completedTasks: number
    longestSessionSec: number
    longestSessionLabel: string
    longestGoalStreak: number
  }
}

/* ------------------------------------------------------------------ */
/*  Small helpers                                                      */
/* ------------------------------------------------------------------ */

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.round(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.round(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.round(h / 24)}d ago`
}

function fmtDuration(sec: number): string {
  if (sec < 60) return `${sec}s`
  const m = Math.round(sec / 60)
  if (m < 60) return `${m}m`
  return `${Math.floor(m / 60)}h ${m % 60}m`
}

function fmtHour(h: number): string {
  const suffix = h < 12 ? 'AM' : 'PM'
  const hr = h % 12 === 0 ? 12 : h % 12
  return `${hr} ${suffix}`
}

/** "2026-10-20" → "Oct 20" (local-key safe) */
function fmtDay(key: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) return key
  const d = new Date(key + 'T00:00:00')
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

/** consecutive days (ending today or yesterday) whose minutes hit the goal */
function goalStreakOf(days: { day: string; minutes: number }[], goalMin: number): number {
  if (days.length === 0) return 0
  const hit = new Set(days.filter((d) => d.minutes >= goalMin).map((d) => d.day))
  const last = days[days.length - 1].day
  const prev = days.length > 1 ? days[days.length - 2].day : ''
  let cursor = hit.has(last) ? last : hit.has(prev) ? prev : null
  if (!cursor) return 0
  let streak = 0
  while (hit.has(cursor)) {
    streak++
    const d = new Date(cursor + 'T00:00:00')
    d.setDate(d.getDate() - 1)
    cursor = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  }
  return streak
}

/** best run of goal-hitting days anywhere in the window */
function bestGoalStreakOf(days: { day: string; minutes: number }[], goalMin: number): number {
  let best = 0
  let run = 0
  for (const d of days) {
    run = d.minutes >= goalMin ? run + 1 : 0
    if (run > best) best = run
  }
  return best
}

/** accent color for a subject name (falls back to emerald) */
function subjectAccent(name: string | null | undefined): string {
  if (!name) return '#10b981'
  const s = LIBRARY_SUBJECTS.find((x) => x.name.toLowerCase() === name.toLowerCase())
  return s?.accent ?? '#10b981'
}

const RING_R = 84
const RING_C = 2 * Math.PI * RING_R

/* ------------------------------------------------------------------ */
/*  Timer card                                                         */
/* ------------------------------------------------------------------ */

function TimerCard() {
  const s = useFocusEngine()
  const settings = useFocusSettings()
  const presets = useMemo(() => focusPresets(), [settings])
  const [dragMinutes, setDragMinutes] = useState<number | null>(null)

  const durationMs = s.minutes * 60_000
  const progress = durationMs > 0 ? Math.min(1, Math.max(0, 1 - s.remainingMs / durationMs)) : 0
  const isFocus = s.kind === 'focus'
  const accent = isFocus ? 'text-emerald-400' : 'text-sky-400'
  const ringStroke = isFocus ? '#34d399' : '#38bdf8'
  const cycleSlot = s.cycle === 0 ? 0 : s.cycle % settings.longEvery || settings.longEvery

  return (
    <section
      aria-label="Pomodoro timer"
      className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-5 sm:p-7"
    >
      {/* ambient glow */}
      <div
        className={cn(
          'pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl transition-colors',
          isFocus ? 'bg-emerald-400/10' : 'bg-sky-400/10',
          s.running && (isFocus ? 'bg-emerald-400/20' : 'bg-sky-400/20')
        )}
        aria-hidden
      />

      <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-8">
        {/* ring */}
        <div
          className="relative shrink-0"
          style={s.running ? { animation: 'sv-fq-breathe 4s ease-in-out infinite' } : undefined}
        >
          <style>{`@keyframes sv-fq-breathe { 0% { transform: scale(1); } 50% { transform: scale(1.025); } 100% { transform: scale(1); } }`}</style>
          <svg viewBox="0 0 200 200" className="h-44 w-44 -rotate-90 sm:h-52 sm:w-52" aria-hidden>
            <circle cx="100" cy="100" r={RING_R} fill="none" strokeWidth="10" className="stroke-border" />
            <circle
              cx="100"
              cy="100"
              r={RING_R}
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              stroke={ringStroke}
              strokeDasharray={RING_C}
              strokeDashoffset={RING_C * (1 - progress)}
              className="transition-[stroke-dashoffset] duration-500 ease-linear"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-5xl font-black leading-none tabular-nums tracking-tighter">
              {fmtClock(s.remainingMs)}
            </span>
            <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {sessionLabel(s.kind, s.minutes)}
              {s.running ? ' · live' : ''}
            </span>
            {isFocus && (
              <span className="mt-2.5 flex items-center gap-1.5" title="Pomodoros until your long break">
                {Array.from({ length: settings.longEvery }, (_, i) => (
                  <span
                    key={i}
                    className={cn(
                      'h-1.5 w-1.5 rounded-full transition-colors',
                      cycleSlot > i ? 'bg-emerald-400' : 'bg-border'
                    )}
                  />
                ))}
              </span>
            )}
          </div>
        </div>

        {/* controls */}
        <div className="flex w-full min-w-0 flex-1 flex-col items-center gap-4 sm:items-stretch">
          {/* linkage */}
          {s.linkage && (s.linkage.taskTitle || s.linkage.subject || s.linkage.chapterTitle) ? (
            <span className="flex max-w-full items-center justify-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300 sm:justify-start">
              <Target className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="truncate">
                {s.linkage.taskTitle ?? s.linkage.chapterTitle ?? s.linkage.subject}
              </span>
              {s.linkage.subject && s.linkage.taskTitle && (
                <span className="shrink-0 opacity-70">· {s.linkage.subject}</span>
              )}
              <button
                type="button"
                onClick={() => setFocusLinkage(null)}
                className="ml-1 shrink-0 rounded-full px-1 text-[10px] font-bold uppercase tracking-wide opacity-60 transition-opacity hover:opacity-100"
                aria-label="Detach session from task"
              >
                detach
              </button>
            </span>
          ) : (
            <span className="text-center text-[11px] text-muted-foreground/80 sm:text-left">
              No task linked — pick a to-do below so this time counts toward a subject.
            </span>
          )}

          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            <button
              type="button"
              onClick={toggleRun}
              className={cn(
                'flex h-12 items-center gap-2 rounded-full border px-6 text-[15px] font-bold transition-all hover:brightness-110',
                isFocus
                  ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300'
                  : 'border-sky-400/30 bg-sky-400/10 text-sky-600 dark:text-sky-300'
              )}
            >
              {s.running ? <Pause className="h-4.5 w-4.5" aria-hidden /> : <Play className="h-4.5 w-4.5" aria-hidden />}
              {s.running ? 'Pause' : s.remainingMs < durationMs ? 'Resume' : 'Start'}
            </button>
            <button
              type="button"
              onClick={resetSession}
              aria-label="Reset session (time already spent is banked)"
              title="Reset — spent time is banked as a partial session"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted/50 text-muted-foreground transition-colors hover:text-foreground"
            >
              <RotateCcw className="h-4.5 w-4.5" aria-hidden />
            </button>
            {isFocus ? (
              <button
                type="button"
                onClick={() => skipToBreak(false)}
                className="flex h-12 items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 text-xs font-bold text-sky-600 transition-all hover:brightness-110 dark:text-sky-300"
                title="Finish early and bank what you did"
              >
                <Coffee className="h-4 w-4" aria-hidden /> Break {settings.shortMin}m
              </button>
            ) : (
              <button
                type="button"
                onClick={() => startFocusSession(settings.focusMin)}
                className="flex h-12 items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 text-xs font-bold text-emerald-600 transition-all hover:brightness-110 dark:text-emerald-300"
              >
                <Timer className="h-4 w-4" aria-hidden /> Focus {settings.focusMin}m
              </button>
            )}
            {s.running && isFocus && (
              <button
                type="button"
                onClick={() => setZen(true)}
                className="flex h-12 items-center gap-2 rounded-full border border-border bg-muted/50 px-4 text-xs font-bold text-muted-foreground transition-colors hover:text-foreground"
                title="Zen — hide everything but a tiny edge dot"
              >
                <Wind className="h-4 w-4" aria-hidden /> Zen
              </button>
            )}
          </div>

          {/* interruptions — Cirillo's rule: log them, don't hide them */}
          {s.running && isFocus && (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <span className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                Interruptions
              </span>
              <button
                type="button"
                onClick={addInterruption}
                title="Internal — your own mind wandered"
                className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-bold text-amber-600 transition-all hover:brightness-110 dark:text-amber-300"
              >
                <Brain className="h-3 w-3" aria-hidden /> Internal
              </button>
              <button
                type="button"
                onClick={addInterruption}
                title="External — something pulled you away"
                className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-bold text-amber-600 transition-all hover:brightness-110 dark:text-amber-300"
              >
                <PhoneIncoming className="h-3 w-3" aria-hidden /> External
              </button>
              {s.interruptions > 0 && (
                <span className="text-[11px] font-bold text-amber-600 dark:text-amber-300">
                  {s.interruptions} logged
                </span>
              )}
            </div>
          )}

          {/* presets */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:justify-start">
            {presets.map((p) => {
              const active = p.kind === s.kind && p.minutes === s.minutes
              return (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => selectSession(p.kind, p.minutes)}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-[11.5px] font-bold transition-all',
                    active
                      ? p.kind === 'focus'
                        ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-600 dark:text-emerald-300'
                        : 'border-sky-400/50 bg-sky-400/15 text-sky-600 dark:text-sky-300'
                      : 'border-border bg-muted/40 text-muted-foreground hover:text-foreground'
                  )}
                >
                  {p.label}
                </button>
              )
            })}
          </div>

          {/* custom length */}
          <div className="w-full">
            <div className="mb-1.5 flex items-center justify-between text-[11px] font-medium text-muted-foreground">
              <span>Custom length</span>
              <span className="font-mono font-bold tabular-nums text-foreground/80">
                {dragMinutes ?? s.minutes} min
              </span>
            </div>
            <Slider
              value={[Math.min(120, Math.max(5, dragMinutes ?? s.minutes))]}
              min={5}
              max={120}
              step={5}
              onValueChange={(v) => setDragMinutes(v[0] ?? null)}
              onValueCommit={(v) => {
                selectSession(s.kind, v[0] ?? s.minutes)
                setDragMinutes(null)
              }}
              aria-label="Custom session length in minutes"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  To-do card                                                         */
/* ------------------------------------------------------------------ */

function linkageOf(t: FocusTaskRow): FocusLinkage {
  return {
    taskId: t.id,
    taskTitle: t.title,
    subject: t.subject ?? undefined,
    subjectId: t.subjectId ?? undefined,
  }
}

function TodoCard({
  tasks,
  onAdd,
  onPatch,
  onDelete,
  onMove,
  activeTaskId,
  engineRunning,
}: {
  tasks: FocusTaskRow[]
  onAdd: (title: string, subjectId: string | null, estimate: number) => Promise<void>
  onPatch: (id: string, patch: Partial<FocusTaskRow>) => Promise<void>
  onDelete: (id: string) => Promise<void>
  onMove: (id: string, dir: -1 | 1) => Promise<void>
  activeTaskId: string | null
  engineRunning: boolean
}) {
  const settings = useFocusSettings()
  const [title, setTitle] = useState('')
  const [subjectId, setSubjectId] = useState('')
  const [estimate, setEstimate] = useState(2)
  const [busy, setBusy] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editTitle, setEditTitle] = useState('')
  const [showDone, setShowDone] = useState(false)
  const titleRef = useRef<HTMLInputElement>(null)

  const open = tasks.filter((t) => !t.completed)
  const done = tasks.filter((t) => t.completed)
  const totalEstimate = open.reduce((n, t) => n + t.estimate, 0)
  const totalDone = open.reduce((n, t) => n + t.done, 0)

  async function submit() {
    const t = title.trim()
    if (!t || busy) return
    setBusy(true)
    try {
      await onAdd(t, subjectId || null, estimate)
      setTitle('')
      setEstimate(2)
      titleRef.current?.focus()
    } finally {
      setBusy(false)
    }
  }

  return (
    <section aria-label="Study to-do list" className="rounded-3xl border border-border/80 bg-card p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 text-base font-bold">
          <ListTodo className="h-4.5 w-4.5 text-emerald-300" aria-hidden />
          To-do today
        </h2>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
          <span aria-hidden>🍅</span>
          {totalDone}/{totalEstimate} pomodoros planned
        </span>
      </div>

      {/* add form */}
      <div className="mt-4 rounded-2xl border border-border/70 bg-muted/20 p-3">
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-2">
            <input
              ref={titleRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') void submit()
              }}
              placeholder="What will you study? e.g. “Finish thermodynamics laws”"
              aria-label="New task title"
              maxLength={160}
              className="h-10 min-w-0 flex-1 rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-emerald-400/50"
            />
            <button
              type="button"
              onClick={() => void submit()}
              disabled={!title.trim() || busy}
              className="flex h-10 shrink-0 items-center gap-1.5 rounded-xl bg-emerald-500 px-4 text-sm font-bold text-emerald-950 transition-all hover:bg-emerald-400 disabled:opacity-40"
            >
              <Plus className="h-4 w-4" aria-hidden /> Add
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
              aria-label="Subject for the new task"
              className="h-9 min-w-0 max-w-full flex-1 rounded-xl border border-border bg-background px-2.5 text-xs font-medium outline-none transition-colors focus:border-emerald-400/50"
            >
              <option value="">No subject</option>
              {LIBRARY_SUBJECTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <div className="flex h-9 items-center gap-1 rounded-xl border border-border bg-background px-1">
              <button
                type="button"
                onClick={() => setEstimate((n) => Math.max(1, n - 1))}
                aria-label="Fewer estimated pomodoros"
                className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Minus className="h-3.5 w-3.5" aria-hidden />
              </button>
              <span className="min-w-[3.25rem] text-center text-xs font-bold tabular-nums" title="Estimated pomodoros">
                🍅 {estimate}
              </span>
              <button
                type="button"
                onClick={() => setEstimate((n) => Math.min(16, n + 1))}
                aria-label="More estimated pomodoros"
                className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Plus className="h-3.5 w-3.5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* open tasks */}
      <ul className="mt-4 flex flex-col gap-2">
        {open.length === 0 && (
          <li className="rounded-2xl border border-dashed border-border/80 px-4 py-8 text-center text-sm text-muted-foreground">
            Nothing planned yet. Add a task above — then hit ▶ to run pomodoros against it.
          </li>
        )}
        {open.map((t, i) => {
          const active = activeTaskId === t.id
          const accent = subjectAccent(t.subject)
          const pct = Math.min(100, Math.round((t.done / Math.max(1, t.estimate)) * 100))
          return (
            <li
              key={t.id}
              className={cn(
                'group relative overflow-hidden rounded-2xl border p-3 transition-all',
                active
                  ? 'border-emerald-400/50 bg-emerald-400/[0.07] shadow-[inset_0_0_0_1px_rgba(52,211,153,0.15)]'
                  : 'border-border/70 bg-background/40 hover:border-border'
              )}
            >
              <span
                className="absolute inset-y-0 left-0 w-1"
                style={{ background: accent, opacity: active ? 1 : 0.5 }}
                aria-hidden
              />
              <div className="flex items-start gap-2.5 pl-2">
                {/* complete */}
                <button
                  type="button"
                  onClick={() => void onPatch(t.id, { completed: true })}
                  aria-label={`Mark “${t.title}” done`}
                  className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full border-2 border-border transition-colors hover:border-emerald-400 hover:bg-emerald-400/10"
                >
                  <Check className="h-3 w-3 text-transparent transition-colors group-hover:text-emerald-400" aria-hidden />
                </button>

                <div className="min-w-0 flex-1">
                  {editingId === t.id ? (
                    <input
                      autoFocus
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      onBlur={() => {
                        const v = editTitle.trim()
                        if (v && v !== t.title) void onPatch(t.id, { title: v })
                        setEditingId(null)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') (e.target as HTMLInputElement).blur()
                        if (e.key === 'Escape') setEditingId(null)
                      }}
                      className="w-full rounded-lg border border-emerald-400/40 bg-background px-2 py-1 text-sm font-semibold outline-none"
                      maxLength={160}
                      aria-label="Edit task title"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingId(t.id)
                        setEditTitle(t.title)
                      }}
                      className={cn(
                        'block max-w-full truncate text-left text-sm font-semibold transition-colors',
                        active ? 'text-emerald-700 dark:text-emerald-300' : 'hover:text-foreground'
                      )}
                      title="Click to rename"
                    >
                      {t.title}
                    </button>
                  )}

                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    {t.subject && (
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                        style={{ background: `${accent}1f`, color: accent }}
                      >
                        {t.subject}
                      </span>
                    )}
                    <span className="text-[11px] font-medium tabular-nums text-muted-foreground">
                      🍅 {t.done}/{t.estimate}
                    </span>
                    {t.interruptions > 0 && (
                      <span className="flex items-center gap-1 text-[10.5px] font-medium text-amber-600 dark:text-amber-300">
                        <Zap className="h-3 w-3" aria-hidden /> {t.interruptions}
                      </span>
                    )}
                    {active && engineRunning && (
                      <span className="flex items-center gap-1 text-[10.5px] font-bold text-emerald-500">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                          <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        studying now
                      </span>
                    )}
                  </div>

                  {/* estimate progress */}
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted" role="img" aria-label={`Pomodoro progress ${t.done} of ${t.estimate}`}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, background: accent }}
                    />
                  </div>
                </div>

                {/* actions */}
                <div className="flex shrink-0 items-center gap-0.5">
                  <div className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => void onMove(t.id, -1)}
                      disabled={i === 0}
                      aria-label="Move task up"
                      className="flex h-4.5 w-5 items-center justify-center rounded text-muted-foreground/60 transition-colors hover:text-foreground disabled:opacity-20"
                    >
                      <ChevronUp className="h-3 w-3" aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={() => void onMove(t.id, 1)}
                      disabled={i === open.length - 1}
                      aria-label="Move task down"
                      className="flex h-4.5 w-5 items-center justify-center rounded text-muted-foreground/60 transition-colors hover:text-foreground disabled:opacity-20"
                    >
                      <ChevronDown className="h-3 w-3" aria-hidden />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFocusLinkage(linkageOf(t))
                      startFocusSession(settings.focusMin, linkageOf(t))
                      toast.success(`Focus ${settings.focusMin}m — ${t.title}`, {
                        description: t.subject ? `Counting toward ${t.subject}` : undefined,
                      })
                    }}
                    aria-label={`Start a focus session on “${t.title}”`}
                    title={`Focus ${settings.focusMin}m on this`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-600 transition-all hover:brightness-125 dark:text-emerald-300"
                  >
                    <Play className="h-3.5 w-3.5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(t.id)}
                    aria-label={`Delete “${t.title}”`}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground/60 transition-colors hover:bg-red-500/10 hover:text-red-500"
                  >
                    <Trash2 className="h-3.5 w-3.5" aria-hidden />
                  </button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      {/* completed */}
      {done.length > 0 && (
        <div className="mt-4 border-t border-border/60 pt-3">
          <button
            type="button"
            onClick={() => setShowDone((v) => !v)}
            className="flex w-full items-center justify-between text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
            aria-expanded={showDone}
          >
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden />
              {done.length} completed today-list
            </span>
            {showDone ? <ChevronUp className="h-3.5 w-3.5" aria-hidden /> : <ChevronDown className="h-3.5 w-3.5" aria-hidden />}
          </button>
          {showDone && (
            <ul className="mt-2 flex max-h-48 flex-col gap-1 overflow-y-auto pr-1 sv-nice-scroll">
              {done.map((t) => (
                <li key={t.id} className="flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-muted/40">
                  <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden />
                  <span className="min-w-0 flex-1 truncate text-xs text-muted-foreground line-through">{t.title}</span>
                  <span className="shrink-0 text-[10px] font-medium tabular-nums text-muted-foreground/70">
                    🍅 {t.done}
                  </span>
                  <button
                    type="button"
                    onClick={() => void onPatch(t.id, { completed: false })}
                    className="shrink-0 text-[10px] font-bold uppercase text-muted-foreground/60 transition-colors hover:text-foreground"
                    aria-label={`Reopen “${t.title}”`}
                  >
                    undo
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(t.id)}
                    aria-label={`Delete “${t.title}”`}
                    className="shrink-0 text-muted-foreground/50 transition-colors hover:text-red-500"
                  >
                    <Trash2 className="h-3 w-3" aria-hidden />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Analytics cards                                                    */
/* ------------------------------------------------------------------ */

const GOAL_R = 30
const GOAL_C = 2 * Math.PI * GOAL_R
const GOAL_PRESETS = [60, 120, 180, 240]

/** today's minutes vs the daily goal — a compact ring + quick goal presets */
function DailyGoalCard({ stats }: { stats: StatsPayload | null }) {
  const settings = useFocusSettings()
  const todayMin = stats?.totals.todayMinutes ?? 0
  const goal = settings.dailyGoalMin
  const pct = Math.min(100, Math.round((todayMin / goal) * 100))
  const over = todayMin >= goal
  const streak = goalStreakOf(stats?.days ?? [], goal)
  const best = bestGoalStreakOf(stats?.days ?? [], goal)

  return (
    <div className="mt-4 flex items-center gap-3.5 rounded-2xl border border-border/70 bg-gradient-to-br from-emerald-400/[0.05] to-transparent p-3">
      <svg viewBox="0 0 76 76" className="h-[76px] w-[76px] shrink-0 -rotate-90" role="img"
        aria-label={`Daily goal ${pct}% — ${todayMin} of ${goal} minutes`}>
        <circle cx="38" cy="38" r={GOAL_R} fill="none" strokeWidth="7" className="stroke-muted" />
        <circle
          cx="38"
          cy="38"
          r={GOAL_R}
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={GOAL_C}
          strokeDashoffset={GOAL_C * (1 - pct / 100)}
          stroke={over ? '#2dd4bf' : '#34d399'}
          className="transition-[stroke-dashoffset] duration-700"
        />
        <text x="38" y="36" textAnchor="middle" fontSize="15" className="rotate-90 fill-foreground font-black" style={{ transformOrigin: '38px 38px' }}>
          {over ? '🎯' : `${pct}%`}
        </text>
        <text x="38" y="50" textAnchor="middle" fontSize="8.5" className="rotate-90 fill-muted-foreground font-bold" style={{ transformOrigin: '38px 38px' }}>
          {todayMin}/{goal}m
        </text>
      </svg>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold">
          Daily goal
          <span className="ml-1.5 font-medium text-muted-foreground">
            {over ? 'reached — every extra minute compounds' : `${Math.max(1, goal - todayMin)}m to go`}
          </span>
        </p>
        {streak > 0 && (
          <p className="mt-1 flex items-center gap-1 text-[10.5px] font-semibold text-amber-600 dark:text-amber-300">
            <Flame className="h-3 w-3" aria-hidden />
            {streak}-day goal streak
            <span className="font-medium text-muted-foreground">
              {best > streak ? `· best ${best} in the last year` : '· a personal best'}
            </span>
          </p>
        )}
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {GOAL_PRESETS.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => saveFocusSettings({ dailyGoalMin: g })}
              aria-pressed={goal === g}
              className={`rounded-full border px-2.5 py-1 text-[10.5px] font-bold tabular-nums transition-all ${
                goal === g
                  ? 'border-emerald-400/60 bg-emerald-400/20 text-emerald-700 dark:text-emerald-300'
                  : 'border-border/70 bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground'
              }`}
            >
              {g}m
            </button>
          ))}
          <button
            type="button"
            onClick={() => saveFocusSettings({ dailyGoalMin: Math.min(720, goal + 30) })}
            aria-label="Increase daily goal by 30 minutes"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <Plus className="h-3 w-3" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => saveFocusSettings({ dailyGoalMin: Math.max(15, goal - 30) })}
            aria-label="Decrease daily goal by 30 minutes"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <Minus className="h-3 w-3" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  )
}

/** this week vs last week — momentum, best day, active days */
function WeeklyDigestCard({ stats }: { stats: StatsPayload | null }) {
  // stats.days spans the year (heatmap) — window to the trailing fortnight
  const fortnight = (stats?.days ?? []).slice(-14)
  const thisWeek = fortnight.slice(-7)
  const lastWeek = fortnight.length >= 14 ? fortnight.slice(0, 7) : []
  const thisMin = thisWeek.reduce((n, d) => n + d.minutes, 0)
  const lastMin = lastWeek.reduce((n, d) => n + d.minutes, 0)
  const delta = lastMin > 0 ? Math.round(((thisMin - lastMin) / lastMin) * 100) : null
  const best = thisWeek.reduce((b, d) => (d.minutes > b.minutes ? d : b), {
    day: '', label: '', minutes: 0, pomodoros: 0, interruptions: 0,
  })
  const activeDays = thisWeek.filter((d) => d.minutes > 0).length
  const avgMin = Math.round(thisMin / 7)
  const maxBar = Math.max(60, ...thisWeek.map((d) => d.minutes))

  return (
    <section aria-label="Weekly digest" className="rounded-3xl border border-border/80 bg-card p-5">
      <h3 className="flex items-center gap-2 text-sm font-bold">
        <CalendarRange className="h-4 w-4 text-emerald-300" aria-hidden /> This week
      </h3>
      <div className="mt-3 flex items-end justify-between gap-3">
        <div className="flex items-end gap-2">
          <span className="text-3xl font-black leading-none tabular-nums tracking-tight">
            {thisMin >= 60 ? `${Math.floor(thisMin / 60)}h${thisMin % 60 ? ` ${thisMin % 60}m` : ''}` : `${thisMin}m`}
          </span>
          <span className="pb-0.5 text-[11px] font-medium text-muted-foreground">focused</span>
        </div>
        {delta !== null && (
          <span
            className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-bold tabular-nums ${
              delta >= 0
                ? 'border border-emerald-400/40 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300'
                : 'border border-amber-400/40 bg-amber-400/10 text-amber-600 dark:text-amber-300'
            }`}
          >
            {delta >= 0 ? <ArrowUpRight className="h-3 w-3" aria-hidden /> : <ArrowDownRight className="h-3 w-3" aria-hidden />}
            {Math.abs(delta)}% vs last week
          </span>
        )}
      </div>

      {/* 7-day strip */}
      <div className="mt-3 flex h-14 items-end gap-1.5" role="img" aria-label="Focus minutes this week, day by day">
        {thisWeek.map((d, i) => {
          const isToday = i === thisWeek.length - 1
          const h = d.minutes > 0 ? Math.max(6, Math.round((d.minutes / maxBar) * 52)) : 4
          return (
            <div key={d.day} className="group relative flex flex-1 flex-col items-center justify-end">
              <span className="pointer-events-none absolute -top-4 whitespace-nowrap rounded-md border border-border bg-popover px-1.5 py-0.5 text-[9px] font-bold tabular-nums opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                {d.label} · {d.minutes}m
              </span>
              <div
                className={`w-full rounded-t-[3px] transition-all ${isToday ? 'bg-emerald-400' : d.minutes > 0 ? 'bg-emerald-500/45 dark:bg-emerald-400/40' : 'bg-border'}`}
                style={{ height: `${h}px` }}
              />
              <span className={`mt-1 text-[8.5px] font-semibold ${isToday ? 'text-foreground' : 'text-muted-foreground/70'}`}>
                {d.label.slice(0, 1)}
              </span>
            </div>
          )
        })}
      </div>

      <p className="mt-3 border-t border-border/60 pt-2.5 text-[11px] text-muted-foreground">
        {activeDays > 0 ? (
          <>
            <strong className="text-foreground">{activeDays} active {activeDays === 1 ? 'day' : 'days'}</strong>
            {' '}· avg {avgMin}m/day
            {best.minutes > 0 && (
              <>
                {' '}· best <strong className="text-foreground">{best.label}</strong> ({best.minutes}m)
              </>
            )}
          </>
        ) : (
          'Run a pomodoro — your week lights up here.'
        )}
      </p>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Consistency — the GitHub-style year heatmap (full-width)           */
/* ------------------------------------------------------------------ */

const HEAT_CELL = 11 // px — 53 weeks × (11+3) ≈ 742px, scrolls on mobile
const HEAT_GAP = 3

/** intensity bucket for a day's minutes (0 = rest day) */
function heatLevel(minutes: number): 0 | 1 | 2 | 3 | 4 {
  if (minutes <= 0) return 0
  if (minutes < 30) return 1
  if (minutes < 60) return 2
  if (minutes < 120) return 3
  return 4
}
const HEAT_CLASSES = [
  'bg-muted/70 dark:bg-muted/50',
  'bg-emerald-500/25 dark:bg-emerald-400/25',
  'bg-emerald-500/45 dark:bg-emerald-400/45',
  'bg-emerald-500/70 dark:bg-emerald-400/70',
  'bg-emerald-400 dark:bg-emerald-300',
] as const

/** 371-day contribution heatmap: weeks as columns, weekdays as rows */
function ConsistencyCard({ stats }: { stats: StatsPayload | null }) {
  const days = stats?.days ?? []
  const todayKey = days.length > 0 ? days[days.length - 1].day : ''

  // grid geometry — the first column starts on the Sunday on/before day one
  const { columns, cells, monthLabels } = useMemo(() => {
    if (days.length === 0) return { columns: 0, cells: [], monthLabels: [] as { col: number; name: string }[] }
    const byDay = new Map(days.map((d) => [d.day, d]))
    const first = new Date(days[0].day + 'T00:00:00')
    first.setDate(first.getDate() - first.getDay()) // back to Sunday
    const last = new Date(todayKey + 'T00:00:00')
    const span = Math.round((last.getTime() - first.getTime()) / 86400000) + 1
    const cols = Math.ceil(span / 7)

    const cells: { col: number; row: number; day: string; minutes: number; inWindow: boolean; isToday: boolean }[] = []
    const months: { col: number; name: string }[] = []
    let lastMonth = -1
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < 7; row++) {
        const d = new Date(first)
        d.setDate(d.getDate() + col * 7 + row)
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
        const inWindow = key >= days[0].day && key <= todayKey
        cells.push({ col, row, day: key, minutes: byDay.get(key)?.minutes ?? 0, inWindow, isToday: key === todayKey })
        // label the column that contains the 1st of a month
        if (d.getDate() === 1 && d.getMonth() !== lastMonth && inWindow) {
          months.push({ col, name: d.toLocaleDateString(undefined, { month: 'short' }) })
          lastMonth = d.getMonth()
        }
      }
    }
    return { columns: cols, cells, monthLabels: months }
  }, [days, todayKey])

  const yearMin = days.reduce((n, d) => n + d.minutes, 0)
  const activeDays = days.filter((d) => d.minutes > 0).length
  const t = stats?.totals

  return (
    <section aria-label="Yearly consistency" className="rounded-3xl border border-border/80 bg-card p-5">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h3 className="flex items-center gap-2 text-sm font-bold">
          <CalendarCheck className="h-4 w-4 text-emerald-300" aria-hidden /> Consistency
          <span className="font-medium text-muted-foreground">— the last year, day by day</span>
        </h3>
        {days.length > 0 && (
          <p className="text-[11px] text-muted-foreground">
            <strong className="font-mono text-foreground">{yearMin >= 60 ? `${Math.floor(yearMin / 60)}h ${yearMin % 60}m` : `${yearMin}m`}</strong> focused
            {' '}· <strong className="text-foreground">{activeDays}</strong> active {activeDays === 1 ? 'day' : 'days'}
            {t && t.longestGoalStreak > 1 && <> · best run <strong className="text-foreground">{t.longestGoalStreak} days</strong></>}
          </p>
        )}
      </div>

      {days.length === 0 ? (
        <p className="mt-3 text-xs text-muted-foreground">
          A full year of focus squares — every pomodoro you run paints one green. Start today.
        </p>
      ) : (
        <div className="mt-3 overflow-x-auto pb-1 sv-nice-scroll">
          <div className="flex gap-1.5" style={{ minWidth: columns * (HEAT_CELL + HEAT_GAP) + 22 }}>
            {/* weekday rail */}
            <div className="flex flex-col pt-[18px]" style={{ gap: `${HEAT_GAP}px` }} aria-hidden>
              {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((wd, i) => (
                <span
                  key={i}
                  className="text-[8.5px] font-semibold leading-[11px] text-muted-foreground/60"
                  style={{ height: HEAT_CELL, width: 22, textAlign: 'right' }}
                >
                  {wd}
                </span>
              ))}
            </div>

            <div>
              {/* month labels */}
              <div
                className="relative mb-1 h-[14px]"
                style={{ width: columns * (HEAT_CELL + HEAT_GAP) }}
                aria-hidden
              >
                {monthLabels.map((m) => (
                  <span
                    key={`${m.col}-${m.name}`}
                    className="absolute top-0 whitespace-nowrap text-[9px] font-bold text-muted-foreground/70"
                    style={{ left: m.col * (HEAT_CELL + HEAT_GAP) }}
                  >
                    {m.name}
                  </span>
                ))}
              </div>

              {/* the grid — columns of 7 weekday cells */}
              <div
                role="img"
                aria-label={`Focus minutes heatmap for the last ${days.length} days: ${yearMin} minutes across ${activeDays} active days`}
                className="grid"
                style={{
                  gridTemplateRows: `repeat(7, ${HEAT_CELL}px)`,
                  gridAutoFlow: 'column',
                  gridAutoColumns: `${HEAT_CELL}px`,
                  gap: `${HEAT_GAP}px`,
                }}
              >
                {cells.map((c) => {
                  if (!c.inWindow) return <span key={c.day} />
                  const lvl = heatLevel(c.minutes)
                  const title = c.isToday ? 'today' : fmtDay(c.day)
                  return (
                    <span
                      key={c.day}
                      title={`${title} · ${c.minutes > 0 ? `${c.minutes}m focused` : 'no focus'}`}
                      style={{ '--sv-heat-col': c.col } as CSSProperties}
                      className={`sv-heat-cell rounded-[2.5px] transition-transform duration-150 ${HEAT_CLASSES[lvl]} ${
                        c.isToday ? 'ring-1 ring-emerald-400/80 dark:ring-emerald-300/80' : ''
                      }`}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {days.length > 0 && (
        <div className="mt-2 flex items-center justify-between gap-2 border-t border-border/60 pt-2.5">
          <p className="text-[10px] text-muted-foreground/70">
            Greener = deeper. Squares dim before your first session; today carries the ring.
          </p>
          <p className="flex shrink-0 items-center gap-1 text-[9.5px] font-medium text-muted-foreground/70">
            less
            {HEAT_CLASSES.map((cls, i) => (
              <span key={i} className={`h-[10px] w-[10px] rounded-[2px] ${cls}`} aria-hidden />
            ))}
            more
          </p>
        </div>
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Personal records — all-time bests                                  */
/* ------------------------------------------------------------------ */

function RecordsCard({ stats }: { stats: StatsPayload | null }) {
  const t = stats?.totals
  const hours = stats?.hours ?? []
  const peakHour = hours.reduce((best, h) => (h.minutes > best.minutes ? h : best), { hour: -1, minutes: -1 })
  const records = [
    {
      icon: Trophy,
      value: t && t.bestDayMinutes > 0 ? `${t.bestDayMinutes}m` : '—',
      label: 'best day',
      sub: t && t.bestDayDate ? fmtDay(t.bestDayDate) : 'run a pomodoro',
      tone: 'text-amber-500 dark:text-amber-300 bg-amber-400/10 border-amber-400/30',
    },
    {
      icon: Timer,
      value: t && t.longestSessionSec > 0 ? fmtDuration(t.longestSessionSec) : '—',
      label: 'longest session',
      sub: t && t.longestSessionLabel ? fmtDay(t.longestSessionLabel) : 'go deep',
      tone: 'text-emerald-600 dark:text-emerald-300 bg-emerald-400/10 border-emerald-400/30',
    },
    {
      icon: Sun,
      value: peakHour.minutes > 0 ? fmtHour(peakHour.hour) : '—',
      label: 'golden hour',
      sub: peakHour.minutes > 0 ? `${peakHour.minutes}m banked` : 'find your rhythm',
      tone: 'text-sky-600 dark:text-sky-300 bg-sky-400/10 border-sky-400/30',
    },
    {
      icon: Flame,
      value: t && t.streakDays > 0 ? `${t.streakDays}d` : '—',
      label: 'focus streak',
      sub: t && t.longestGoalStreak > 0 ? `record ${t.longestGoalStreak}d` : 'start one today',
      tone: 'text-rose-600 dark:text-rose-300 bg-rose-400/10 border-rose-400/30',
    },
  ]

  return (
    <section aria-label="Personal records" className="rounded-3xl border border-border/80 bg-card p-5">
      <h3 className="flex items-center gap-2 text-sm font-bold">
        <Trophy className="h-4 w-4 text-amber-400" aria-hidden /> Personal records
      </h3>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {records.map((r) => (
          <div
            key={r.label}
            className="rounded-2xl border border-border/70 bg-gradient-to-br from-card to-muted/30 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md hover:shadow-black/5"
          >
            <span className={`flex h-7 w-7 items-center justify-center rounded-lg border ${r.tone}`}>
              <r.icon className="h-3.5 w-3.5" aria-hidden />
            </span>
            <p className="mt-2 truncate font-mono text-lg font-black leading-none tabular-nums">{r.value}</p>
            <p className="mt-1 text-[10.5px] font-bold uppercase tracking-wide text-muted-foreground">{r.label}</p>
            <p className="truncate text-[10px] text-muted-foreground/70">{r.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function StatTile({
  icon: Icon,
  value,
  label,
  tone = 'default',
}: {
  icon: typeof Clock
  value: string | number
  label: string
  tone?: 'default' | 'emerald' | 'amber' | 'sky'
}) {
  const tones = {
    default: 'text-muted-foreground',
    emerald: 'text-emerald-500 dark:text-emerald-300',
    amber: 'text-amber-500 dark:text-amber-300',
    sky: 'text-sky-500 dark:text-sky-300',
  }
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl border border-border/70 bg-muted/25 px-2 py-3 text-center">
      <Icon className={cn('h-4 w-4', tones[tone])} aria-hidden />
      <span className="text-lg font-black leading-none tabular-nums">{value}</span>
      <span className="text-[10px] font-medium leading-tight text-muted-foreground">{label}</span>
    </div>
  )
}

function TrendCard({ stats }: { stats: StatsPayload | null }) {
  // stats.days spans the year (heatmap) — the trend card only shows the last 14
  const days = (stats?.days ?? []).slice(-14)
  const maxBar = Math.max(60, ...days.map((d) => d.minutes))
  return (
    <section aria-label="Focus trend" className="rounded-3xl border border-border/80 bg-card p-5">
      <h3 className="flex items-center gap-2 text-sm font-bold">
        <TrendingUp className="h-4 w-4 text-emerald-300" aria-hidden /> Last 14 days
      </h3>
      <div className="mt-3 flex h-28 items-end gap-[3px]" role="img" aria-label="Focus minutes per day, last 14 days">
        {days.map((d, i) => {
          const isToday = i === days.length - 1
          const h = d.minutes > 0 ? Math.max(4, Math.round((d.minutes / maxBar) * 100)) : 3
          return (
            <div key={d.day} className="group relative flex flex-1 flex-col items-center justify-end">
              <span className="pointer-events-none absolute -top-5 whitespace-nowrap rounded-md border border-border bg-popover px-1.5 py-0.5 text-[9.5px] font-bold tabular-nums opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                {d.minutes}m · 🍅{d.pomodoros}
              </span>
              <div
                className={cn(
                  'w-full rounded-t-[4px] transition-all',
                  isToday
                    ? 'bg-emerald-400'
                    : d.minutes > 0
                      ? 'bg-emerald-500/45 dark:bg-emerald-400/40'
                      : 'bg-border'
                )}
                style={{ height: `${h}%` }}
              />
              <span className={cn('mt-1 text-[8.5px] font-semibold', isToday ? 'text-foreground' : 'text-muted-foreground/70')}>
                {d.label.slice(0, 1)}
              </span>
            </div>
          )
        })}
        {days.length === 0 &&
          Array.from({ length: 14 }, (_, i) => <div key={i} className="h-[3%] flex-1 rounded-t bg-border" />)}
      </div>
    </section>
  )
}

function SubjectsCard({ stats }: { stats: StatsPayload | null }) {
  const subjects = stats?.subjects ?? []
  const total = subjects.reduce((n, s) => n + s.minutes, 0)
  const maxMin = Math.max(1, ...subjects.map((s) => s.minutes))
  return (
    <section aria-label="Study time by subject" className="rounded-3xl border border-border/80 bg-card p-5">
      <h3 className="flex items-center gap-2 text-sm font-bold">
        <PieChart className="h-4 w-4 text-emerald-300" aria-hidden /> What you studied · for how long
      </h3>
      {subjects.length === 0 ? (
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Link a to-do to a subject, run a pomodoro, and your per-subject study time appears here — the honest
          answer to “what did I actually study?”.
        </p>
      ) : (
        <ul className="mt-3 flex max-h-72 flex-col gap-2.5 overflow-y-auto pr-1 sv-nice-scroll">
          {subjects.map((s, i) => {
            const accent = subjectAccent(s.subject)
            const share = total > 0 ? Math.round((s.minutes / total) * 100) : 0
            return (
              <li key={s.subject}>
                <div className="flex items-baseline justify-between gap-2 text-xs">
                  <span className="flex min-w-0 items-center gap-1.5 font-semibold">
                    <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: accent }} aria-hidden />
                    <span className="truncate">{s.subject}</span>
                  </span>
                  <span className="shrink-0 font-mono text-[11px] font-bold tabular-nums">
                    {s.minutes >= 60 ? `${Math.floor(s.minutes / 60)}h ${s.minutes % 60}m` : `${s.minutes}m`}
                    <span className="ml-1.5 text-muted-foreground/70">{share}%</span>
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${Math.max(3, (s.minutes / maxMin) * 100)}%`, background: accent }}
                    />
                  </div>
                  <span className="shrink-0 text-[9.5px] font-medium text-muted-foreground/70">
                    {s.sessions} session{s.sessions === 1 ? '' : 's'}
                  </span>
                </div>
                {i === 0 && <p className="mt-1 text-[10px] text-muted-foreground/60">your top subject</p>}
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

function GoldenHoursCard({ stats }: { stats: StatsPayload | null }) {
  const hours = stats?.hours ?? []
  const maxMin = Math.max(1, ...hours.map((h) => h.minutes))
  const peak = hours.reduce((best, h) => (h.minutes > best.minutes ? h : best), { hour: -1, minutes: -1 })
  return (
    <section aria-label="Best hours to focus" className="rounded-3xl border border-border/80 bg-card p-5">
      <h3 className="flex items-center gap-2 text-sm font-bold">
        <Clock className="h-4 w-4 text-emerald-300" aria-hidden /> Golden hours
      </h3>
      {peak.minutes <= 0 ? (
        <p className="mt-3 text-xs text-muted-foreground">
          Your most productive hours of the day will light up here as sessions accumulate.
        </p>
      ) : (
        <>
          <p className="mt-1.5 text-[11px] text-muted-foreground">
            You focus best around <strong className="text-foreground">{fmtHour(peak.hour)}</strong>
          </p>
          <div className="mt-3 flex h-16 items-end gap-[2px]" role="img" aria-label="Focus minutes by hour of day">
            {hours.map((h) => (
              <div key={h.hour} className="group relative flex-1">
                <span className="pointer-events-none absolute -top-5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-1.5 py-0.5 text-[9px] font-bold tabular-nums opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                  {fmtHour(h.hour)} · {h.minutes}m
                </span>
                <div
                  className={cn(
                    'w-full rounded-t-sm transition-all',
                    h.hour === peak.hour ? 'bg-amber-400' : h.minutes > 0 ? 'bg-emerald-500/40 dark:bg-emerald-400/35' : 'bg-border'
                  )}
                  style={{ height: h.minutes > 0 ? `${Math.max(8, (h.minutes / maxMin) * 64)}px` : '3px' }}
                />
              </div>
            ))}
          </div>
          <div className="mt-1 flex justify-between text-[8.5px] font-medium text-muted-foreground/60">
            <span>12 AM</span>
            <span>6 AM</span>
            <span>noon</span>
            <span>6 PM</span>
            <span>11 PM</span>
          </div>
        </>
      )}
    </section>
  )
}

function RecentSessionsCard({
  sessions,
  onNote,
  onExport,
}: {
  sessions: SessionRow[]
  onNote: (id: string, note: string) => Promise<void>
  onExport: () => void
}) {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState('')
  const [saving, setSaving] = useState(false)

  return (
    <section aria-label="Recent sessions" className="rounded-3xl border border-border/80 bg-card p-5">
      <div className="flex items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 text-sm font-bold">
          <CalendarDays className="h-4 w-4 text-emerald-300" aria-hidden /> Recent sessions
        </h3>
        <button
          type="button"
          onClick={onExport}
          title="Download every session — date, task, subject, minutes, notes — as a CSV file"
          className="flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-2.5 py-1 text-[10.5px] font-bold text-muted-foreground transition-all hover:border-emerald-400/50 hover:text-emerald-600 dark:hover:text-emerald-300"
        >
          <Download className="h-3 w-3" aria-hidden /> CSV
        </button>
      </div>
      {sessions.length === 0 ? (
        <p className="mt-3 text-xs text-muted-foreground">
          No sessions yet — your first pomodoro will show up here with exactly what you studied.
        </p>
      ) : (
        <ul className="mt-3 flex max-h-80 flex-col gap-1.5 overflow-y-auto pr-1 sv-nice-scroll">
          {sessions.map((s) => {
            const isFocus = s.kind === 'focus'
            const isEditing = editingId === s.id
            return (
              <li key={s.id} className="rounded-xl border border-border/60 bg-muted/20 px-2.5 py-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-full',
                      isFocus
                        ? 'bg-emerald-400/15 text-emerald-500 dark:text-emerald-300'
                        : 'bg-sky-400/15 text-sky-500 dark:text-sky-300'
                    )}
                  >
                    {isFocus ? <Timer className="h-3.5 w-3.5" aria-hidden /> : <Coffee className="h-3.5 w-3.5" aria-hidden />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold">
                      {s.taskTitle ?? s.chapterTitle ?? s.subject ?? (isFocus ? 'Focus session' : 'Break')}
                    </p>
                    <p className="truncate text-[10px] text-muted-foreground">
                      {timeAgo(s.startedAt)}
                      {s.subject && !s.taskTitle ? ` · ${s.subject}` : ''}
                      {s.taskTitle && s.subject ? ` · ${s.subject}` : ''}
                      {!s.completed && ' · partial'}
                      {s.interruptions > 0 ? ` · ${s.interruptions} ⚡` : ''}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] font-bold tabular-nums">
                    {fmtDuration(s.actualSec)}
                  </span>
                  {isFocus && !isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingId(s.id)
                        setDraft(s.note ?? '')
                      }}
                      aria-label={s.note ? 'Edit session note' : 'Add a note to this session'}
                      title={s.note ? 'Edit note' : 'Add a note'}
                      className={cn(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors',
                        s.note
                          ? 'text-emerald-500 hover:bg-emerald-400/10 dark:text-emerald-300'
                          : 'text-muted-foreground/60 hover:bg-muted hover:text-foreground'
                      )}
                    >
                      {s.note ? <NotebookPen className="h-3.5 w-3.5" aria-hidden /> : <Pencil className="h-3.5 w-3.5" aria-hidden />}
                    </button>
                  )}
                </div>

                {/* the journal line */}
                {s.note && !isEditing && (
                  <p className="mt-1.5 line-clamp-2 rounded-lg border-l-2 border-emerald-400/50 bg-emerald-400/[0.06] px-2.5 py-1.5 text-[11px] italic leading-relaxed text-muted-foreground">
                    {s.note}
                  </p>
                )}

                {/* inline note editor */}
                {isEditing && (
                  <div className="mt-1.5">
                    <textarea
                      autoFocus
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      placeholder="What clicked? What needs a redo?"
                      maxLength={600}
                      rows={2}
                      aria-label="Session note"
                      className="w-full resize-none rounded-lg border border-border/70 bg-background px-2.5 py-1.5 text-[11.5px] leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-emerald-400/50"
                    />
                    <div className="mt-1 flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="rounded-full px-2.5 py-1 text-[10.5px] font-bold text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        disabled={saving || !draft.trim()}
                        onClick={async () => {
                          setSaving(true)
                          await onNote(s.id, draft)
                          setSaving(false)
                          setEditingId(null)
                        }}
                        className="rounded-full border border-emerald-400/40 bg-emerald-400/15 px-3 py-1 text-[10.5px] font-bold text-emerald-600 transition-colors hover:bg-emerald-400/25 disabled:opacity-40 dark:text-emerald-300"
                      >
                        {saving ? 'Saving…' : 'Save'}
                      </button>
                    </div>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

function Stepper({
  label,
  value,
  min,
  max,
  step,
  onChange,
  suffix = 'min',
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  suffix?: string
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-muted/20 px-3 py-2">
      <span className="text-xs font-semibold">{label}</span>
      <span className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - step))}
          aria-label={`Decrease ${label}`}
          className="flex h-6.5 w-6.5 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <Minus className="h-3 w-3" aria-hidden />
        </button>
        <span className="w-14 text-center font-mono text-xs font-bold tabular-nums">
          {value}
          <span className="ml-0.5 text-[9px] font-medium text-muted-foreground">{suffix}</span>
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + step))}
          aria-label={`Increase ${label}`}
          className="flex h-6.5 w-6.5 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <Plus className="h-3 w-3" aria-hidden />
        </button>
      </span>
    </div>
  )
}

function SettingsCard() {
  const settings = useFocusSettings()

  return (
    <section aria-label="Focus settings" className="rounded-3xl border border-border/80 bg-card p-5">
      <h3 className="flex items-center gap-2 text-sm font-bold">
        <Settings2 className="h-4 w-4 text-emerald-300" aria-hidden /> Ritual settings
      </h3>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <Stepper label="Focus" value={settings.focusMin} min={5} max={120} step={5} onChange={(v) => saveFocusSettings({ focusMin: v })} />
        <Stepper label="Short break" value={settings.shortMin} min={1} max={30} step={1} onChange={(v) => saveFocusSettings({ shortMin: v })} />
        <Stepper label="Long break" value={settings.longMin} min={5} max={60} step={5} onChange={(v) => saveFocusSettings({ longMin: v })} />
        <Stepper label="Long break every" value={settings.longEvery} min={2} max={8} step={1} suffix="🍅" onChange={(v) => saveFocusSettings({ longEvery: v })} />
        <Stepper label="Daily goal" value={settings.dailyGoalMin} min={15} max={480} step={15} onChange={(v) => saveFocusSettings({ dailyGoalMin: v })} />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {(
          [
            ['autoBreak', 'Auto-start breaks', 'The break begins itself when a pomodoro ends'],
            ['autoFocus', 'Auto-start next focus', 'Chain focus blocks after breaks end'],
            ['sound', 'Completion chime', 'A soft two-tone when sessions finish'],
          ] as const
        ).map(([key, label, hint]) => (
          <label key={key} className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-border/70 bg-muted/20 px-3 py-2">
            <span className="flex flex-col">
              <span className="text-xs font-semibold">{label}</span>
              <span className="text-[10px] text-muted-foreground">{hint}</span>
            </span>
            <Switch
              checked={settings[key]}
              onCheckedChange={(v) => saveFocusSettings({ [key]: v })}
              aria-label={label}
            />
          </label>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          saveFocusSettings(DEFAULT_FOCUS_SETTINGS)
          toast.success('Settings reset to the classic 25 / 5 / 15 ritual')
        }}
        className="mt-3 w-full rounded-xl border border-border bg-muted/40 py-2 text-[11px] font-bold text-muted-foreground transition-colors hover:text-foreground"
      >
        Reset to classic Pomodoro (25 · 5 · 15 · every 4)
      </button>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Focus HQ — the view                                                */
/* ------------------------------------------------------------------ */

export function FocusView() {
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const engine = useFocusEngine()
  const settings = useFocusSettings()
  const sessionsVersion = useSessionsVersion()

  const [tasks, setTasks] = useState<FocusTaskRow[] | null>(null)
  const [stats, setStats] = useState<StatsPayload | null>(null)
  const [sessions, setSessions] = useState<SessionRow[]>([])

  const loadTasks = useCallback(async () => {
    try {
      const deviceId = ensureDevice()
      const res = await fetch(`/api/focus/tasks?deviceId=${encodeURIComponent(deviceId)}`)
      if (!res.ok) return
      const data = (await res.json()) as { open: FocusTaskRow[]; done: FocusTaskRow[] }
      setTasks([...data.open, ...data.done])
    } catch {
      /* offline-tolerant */
    }
  }, [ensureDevice])

  const loadAnalytics = useCallback(async () => {
    try {
      const deviceId = ensureDevice()
      // 371 days feeds the year heatmap; the 14-day cards window themselves
      const [statsRes, sessRes] = await Promise.all([
        fetch(`/api/focus/stats?deviceId=${encodeURIComponent(deviceId)}&days=371`),
        fetch(`/api/focus/sessions?deviceId=${encodeURIComponent(deviceId)}&limit=15`),
      ])
      if (statsRes.ok) setStats((await statsRes.json()) as StatsPayload)
      if (sessRes.ok) {
        const d = (await sessRes.json()) as { sessions: SessionRow[] }
        setSessions(d.sessions)
      }
    } catch {
      /* offline-tolerant */
    }
  }, [ensureDevice])

  useEffect(() => {
    void loadTasks()
  }, [loadTasks])

  // analytics refresh whenever a session lands on the server
  useEffect(() => {
    void loadAnalytics()
  }, [loadAnalytics, sessionsVersion])

  /* ---- task mutations (optimistic) ---- */

  const addTask = useCallback(
    async (title: string, subjectId: string | null, estimate: number) => {
      const deviceId = ensureDevice()
      const subject = subjectId ? LIBRARY_SUBJECTS.find((s) => s.id === subjectId) : null
      try {
        const res = await fetch('/api/focus/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            deviceId,
            title,
            subject: subject?.name ?? null,
            subjectId: subject?.id ?? null,
            estimate,
          }),
        })
        if (!res.ok) throw new Error('create failed')
        await loadTasks()
        toast.success('Task added', {
          description: `${title} · 🍅 ${estimate} · ${subject?.name ?? 'no subject'}`,
        })
      } catch {
        toast.error('Could not add the task')
      }
    },
    [ensureDevice, loadTasks]
  )

  const patchTask = useCallback(
    async (id: string, patch: Partial<FocusTaskRow>) => {
      const deviceId = ensureDevice()
      // optimistic
      setTasks((prev) => prev?.map((t) => (t.id === id ? { ...t, ...patch } : t)) ?? prev)
      try {
        const res = await fetch('/api/focus/tasks', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, deviceId, ...patch }),
        })
        if (!res.ok) throw new Error('patch failed')
        await loadTasks()
      } catch {
        toast.error('Could not update the task')
        await loadTasks()
      }
    },
    [ensureDevice, loadTasks]
  )

  const deleteTask = useCallback(
    async (id: string) => {
      const deviceId = ensureDevice()
      setTasks((prev) => prev?.filter((t) => t.id !== id) ?? prev)
      if (engine.linkage?.taskId === id) setFocusLinkage(null)
      try {
        const res = await fetch(
          `/api/focus/tasks?id=${encodeURIComponent(id)}&deviceId=${encodeURIComponent(deviceId)}`,
          { method: 'DELETE' }
        )
        if (!res.ok) throw new Error('delete failed')
      } catch {
        toast.error('Could not delete the task')
        await loadTasks()
      }
    },
    [ensureDevice, engine.linkage?.taskId, loadTasks]
  )

  const moveTask = useCallback(
    async (id: string, dir: -1 | 1) => {
      const list = tasks?.filter((t) => !t.completed) ?? []
      const i = list.findIndex((t) => t.id === id)
      const j = i + dir
      if (i < 0 || j < 0 || j >= list.length) return
      const a = list[i]
      const b = list[j]
      // optimistic swap
      setTasks((prev) =>
        prev?.map((t) =>
          t.id === a.id ? { ...t, position: b.position } : t.id === b.id ? { ...t, position: a.position } : t
        ) ?? prev
      )
      const deviceId = ensureDevice()
      try {
        await Promise.all([
          fetch('/api/focus/tasks', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: a.id, deviceId, position: b.position }),
          }),
          fetch('/api/focus/tasks', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: b.id, deviceId, position: a.position }),
          }),
        ])
        await loadTasks()
      } catch {
        await loadTasks()
      }
    },
    [ensureDevice, loadTasks, tasks]
  )

  /** download the entire session log as a CSV (Excel-friendly, BOM + CRLF) */
  const exportSessions = useCallback(async () => {
    try {
      const deviceId = ensureDevice()
      const res = await fetch(`/api/focus/sessions?deviceId=${encodeURIComponent(deviceId)}&limit=2000`)
      if (!res.ok) throw new Error('export failed')
      const { sessions: rows } = (await res.json()) as { sessions: SessionRow[] }
      if (rows.length === 0) {
        toast.info('Nothing to export yet', {
          description: 'Run your first pomodoro — it will land here with a timestamp.',
        })
        return
      }
      const esc = (v: string | number | boolean | null | undefined) =>
        `"${String(v ?? '').replace(/"/g, '""')}"`
      const kindLabel = (k: string) => (k === 'focus' ? 'focus' : k === 'short_break' ? 'short break' : 'long break')
      const header = [
        'started at', 'kind', 'task', 'subject', 'chapter',
        'planned min', 'actual min', 'completed', 'interruptions', 'note',
      ]
      const lines = rows.map((s) =>
        [
          new Date(s.startedAt).toLocaleString(),
          kindLabel(s.kind),
          s.taskTitle,
          s.subject,
          s.chapterTitle,
          s.plannedMin,
          Math.round(s.actualSec / 60),
          s.completed ? 'yes' : 'partial',
          s.interruptions,
          s.note,
        ]
          .map(esc)
          .join(',')
      )
      const csv = `\ufeff${[header.map(esc).join(','), ...lines].join('\r\n')}`
      const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
      const a = document.createElement('a')
      a.href = url
      a.download = `studyverse-focus-log-${new Date().toISOString().slice(0, 10)}.csv`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      toast.success(`Exported ${rows.length} ${rows.length === 1 ? 'session' : 'sessions'}`, {
        description: 'studyverse-focus-log.csv — opens in Excel, Sheets or Numbers',
      })
    } catch {
      toast.error('Could not export the session log')
    }
  }, [ensureDevice])

  const t = stats?.totals
  const topSubject = stats?.subjects[0]
  const goalStreak = stats ? goalStreakOf(stats.days, settings.dailyGoalMin) : 0

  /** attach/edit a journal note on a completed session (recent-sessions card) */
  const saveNote = useCallback(
    async (id: string, note: string) => {
      const deviceId = ensureDevice()
      const trimmed = note.trim().slice(0, 600)
      if (!trimmed) return
      // optimistic
      setSessions((prev) => prev.map((s) => (s.id === id ? { ...s, note: trimmed } : s)))
      try {
        const res = await fetch('/api/focus/sessions', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, deviceId, note: trimmed }),
        })
        if (!res.ok) throw new Error('note failed')
        toast.success('Note saved')
      } catch {
        toast.error('Could not save the note')
        await loadAnalytics()
      }
    },
    [ensureDevice, loadAnalytics]
  )

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8">
      {/* header */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="flex items-center gap-2.5 text-2xl font-black tracking-tight sm:text-3xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10">
              <Timer className="h-5 w-5 text-emerald-300" aria-hidden />
            </span>
            Focus<span className="text-emerald-300">HQ</span>
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Pomodoro deep work · to-dos · an honest record of what you studied, for how long.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {t && t.streakDays > 0 && (
            <span className="flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 text-xs font-bold text-amber-600 dark:text-amber-300">
              <Flame className="h-3.5 w-3.5" aria-hidden /> {t.streakDays}-day streak
            </span>
          )}
          {goalStreak >= 2 && (
            <span
              title="Consecutive days hitting your daily goal"
              className="flex items-center gap-1.5 rounded-full border border-rose-400/40 bg-rose-400/10 px-3 py-1.5 text-xs font-bold text-rose-600 dark:text-rose-300"
            >
              <Target className="h-3.5 w-3.5" aria-hidden /> {goalStreak}× goal
            </span>
          )}
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden /> 🍅 {t?.todayPomodoros ?? 0} today
          </span>
        </div>
      </div>

      {/* today one-liner */}
      {t && (t.todayMinutes > 0 || topSubject) && (
        <p className="mt-3 text-[13px] text-muted-foreground">
          Today: <strong className="text-foreground">{t.todayMinutes} focus minutes</strong>
          {t.todayInterruptions > 0 && <> · {t.todayInterruptions} ⚡ interruptions</>}
          {topSubject && (
            <>
              {' '}· most-studied: <strong className="text-foreground">{topSubject.subject}</strong> ({topSubject.minutes}m all-time)
            </>
          )}
        </p>
      )}

      {/* main grid */}
      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <TimerCard />
          <TodoCard
            tasks={tasks ?? []}
            onAdd={addTask}
            onPatch={patchTask}
            onDelete={deleteTask}
            onMove={moveTask}
            activeTaskId={engine.linkage?.taskId ?? null}
            engineRunning={engine.running && engine.kind === 'focus'}
          />
        </div>

        <div className="flex flex-col gap-5">
          {/* today tiles */}
          <section aria-label="Today at a glance" className="rounded-3xl border border-border/80 bg-card p-5">
            <h3 className="flex items-center gap-2 text-sm font-bold">
              <BarChart3 className="h-4 w-4 text-emerald-300" aria-hidden /> Today
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
              <StatTile icon={Timer} value={t?.todayMinutes ?? 0} label="focus minutes" tone="emerald" />
              <StatTile icon={Hourglass} value={t?.todayPomodoros ?? 0} label="pomodoros 🍅" tone="emerald" />
              <StatTile icon={Zap} value={t?.todayInterruptions ?? 0} label="interruptions" tone="amber" />
              <StatTile icon={Check} value={t?.completedTasks ?? 0} label="tasks done" tone="sky" />
            </div>
            <DailyGoalCard stats={stats} />
            {t && t.allSessions > 0 && (
              <p className="mt-3 text-center text-[10.5px] text-muted-foreground/70">
                all-time: {(t.allMinutes / 60).toFixed(1)}h · {t.allPomodoros} pomodoros · avg {t.avgSessionMin}m
                {t.bestDayMinutes > 0 && <> · best day {t.bestDayMinutes}m</>}
              </p>
            )}
          </section>

          <WeeklyDigestCard stats={stats} />
          <RecordsCard stats={stats} />
          <TrendCard stats={stats} />
          <SubjectsCard stats={stats} />
          <GoldenHoursCard stats={stats} />
          <RecentSessionsCard sessions={sessions} onNote={saveNote} onExport={exportSessions} />
          <SettingsCard />
        </div>
      </div>

      {/* the year, full width — the consistency heatmap */}
      <div className="mt-5">
        <ConsistencyCard stats={stats} />
      </div>
    </div>
  )
}
