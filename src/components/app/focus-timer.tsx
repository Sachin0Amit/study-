'use client'

/**
 * X11 — Deep Focus widget (Pomodoro-style).
 *
 * The ENGINE lives in '@/lib/focus' (module-level, survives unmounts and page
 * reloads). This file is just the floating widget + the localStorage quick-stats
 * card. For the full Focus HQ experience (to-dos, subject analytics, settings)
 * see focus-view.tsx — everything there drives the same engine.
 *
 * Mounting: `<FocusTimerMount />` is the app-level mount (widget + stats
 * sheet). A slot claim guarantees only ONE widget instance ever paints, so
 * double mounting is harmless.
 */

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import {
  BarChart3,
  Brain,
  CalendarDays,
  Check,
  ChevronDown,
  Coffee,
  Flame,
  Hourglass,
  Pause,
  PhoneIncoming,
  Play,
  RotateCcw,
  Target,
  Timer,
  Wind,
  X,
} from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Slider } from '@/components/ui/slider'
import {
  type FocusLogEntry,
  addInterruption,
  collapseWidget,
  dismissCelebration,
  expandWidget,
  focusPresets,
  fmtClock,
  resetSession,
  selectSession,
  sessionLabel,
  setZen,
  startBreakSession,
  startFocusSession,
  toggleRun,
  toggleWidget,
  openStats,
  closeStats,
  useFocusEngine,
  useFocusLog,
  useFocusSettings,
} from '@/lib/focus'

// re-exported for older call sites (command palette binds these helpers)
export { requestFocusStart, requestFocusToggle, requestFocusStats } from '@/lib/focus'
export { readFocusLog, appendFocusMinutes, localDateKey } from '@/lib/focus'
export type { FocusLogEntry as LogEntry, FocusLinkage } from '@/lib/focus'

/* ------------------------------------------------------------------ */
/*  Widget slot claim (only one instance may paint)                    */
/* ------------------------------------------------------------------ */

let activeWidgetId: number | null = null
let nextWidgetId = 1
const slotListeners = new Set<() => void>()
function subscribeSlot(fn: () => void): () => void {
  slotListeners.add(fn)
  return () => {
    slotListeners.delete(fn)
  }
}
function getHolderId(): number | null {
  return activeWidgetId
}
function notifySlots(): void {
  for (const fn of slotListeners) fn()
}

/* ------------------------------------------------------------------ */
/*  Small helpers                                                      */
/* ------------------------------------------------------------------ */

const RING_RADIUS = 56
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

const KEYFRAMES = `
@keyframes sv-focus-breathe { 0% { transform: scale(1); } 50% { transform: scale(1.03); } 100% { transform: scale(1); } }
@keyframes sv-focus-pop { 0% { transform: scale(0.55); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
`

/** cycle dots — how many pomodoros until the long break */
function CycleDots({ cycle, every }: { cycle: number; every: number }) {
  return (
    <span className="flex items-center gap-1.5" title={`${cycle % every || every} of ${every} pomodoros until the long break`}>
      {Array.from({ length: every }, (_, i) => {
        const filled = (cycle === 0 ? 0 : cycle % every || every) > i
        return (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              filled ? 'bg-emerald-400' : 'bg-border'
            }`}
          />
        )
      })}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  <FocusTimer /> — the floating widget                               */
/* ------------------------------------------------------------------ */

export function FocusTimer() {
  const id = useMemo(() => nextWidgetId++, [])
  const holderId = useSyncExternalStore(subscribeSlot, getHolderId, () => null)
  const isHolder = holderId === id
  const s = useFocusEngine()
  const settings = useFocusSettings()
  const presets = useMemo(() => focusPresets(), [settings])

  // claim the paint slot whenever it is free (survives holder swaps)
  useEffect(() => {
    if (activeWidgetId === null) {
      activeWidgetId = id
      notifySlots()
    }
  }, [holderId, id])

  // release on unmount so a waiting instance can take over
  useEffect(
    () => () => {
      if (activeWidgetId === id) {
        activeWidgetId = null
        notifySlots()
      }
    },
    [id]
  )

  const [dragMinutes, setDragMinutes] = useState<number | null>(null)

  if (!isHolder) return null

  const durationMs = s.minutes * 60_000
  const progress = durationMs > 0 ? Math.min(1, Math.max(0, 1 - s.remainingMs / durationMs)) : 0
  const isFocus = s.kind === 'focus'
  const accent = isFocus ? 'text-emerald-400' : 'text-sky-400'
  const accentSoft = isFocus
    ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300'
    : 'border-sky-400/30 bg-sky-400/10 text-sky-600 dark:text-sky-300'

  /* ---- zen mode: minimal edge dot (hover to peek) ---- */
  if (s.running && s.zen) {
    return (
      <>
        <style>{KEYFRAMES}</style>
        <button
          type="button"
          onClick={() => setZen(false)}
          aria-label="Focus timer in zen mode — click to bring it back"
          title="Zen mode — click to restore the timer"
          className="group fixed right-0 top-1/2 z-40 -translate-y-1/2 rounded-l-full border border-r-0 border-emerald-400/40 bg-card/90 py-3.5 pl-1.5 pr-2 text-emerald-300 shadow-lg backdrop-blur transition-colors hover:bg-card"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="pointer-events-none absolute right-full top-1/2 mr-2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-card px-2.5 py-1 font-mono text-xs font-bold tabular-nums opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
            {fmtClock(s.remainingMs)} · zen
          </span>
        </button>
        <FocusStatsDialog open={s.statsOpen} onClose={() => closeStats()} />
      </>
    )
  }

  if (s.hidden) {
    return (
      <>
        <style>{KEYFRAMES}</style>
        <FocusStatsDialog open={s.statsOpen} onClose={() => closeStats()} />
      </>
    )
  }

  /* ---- collapsed pill ---- */
  if (s.collapsed) {
    return (
      <>
        <style>{KEYFRAMES}</style>
        <div
          role="region"
          aria-label="Focus timer"
          className="fixed bottom-3 right-3 z-40 flex items-center gap-0.5 rounded-full border border-border/80 bg-card/95 p-1.5 pl-3.5 shadow-xl shadow-black/20 backdrop-blur-xl sm:bottom-5 sm:right-5"
        >
          <button
            type="button"
            onClick={() => expandWidget()}
            className="flex items-center gap-2 rounded-full px-1 py-1 text-left transition-colors hover:text-foreground"
            aria-label="Expand focus timer"
          >
            <Timer className={`h-4 w-4 ${s.running ? accent : 'text-muted-foreground'}`} aria-hidden />
            <span className="font-mono text-sm font-bold tabular-nums">
              {s.running || s.remainingMs < durationMs ? fmtClock(s.remainingMs) : `${s.minutes}m`}
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:inline">
              {sessionLabel(s.kind, s.minutes)}
            </span>
          </button>
          <button
            type="button"
            onClick={toggleRun}
            aria-label={s.running ? 'Pause session' : 'Start session'}
            className={`flex h-8 w-8 items-center justify-center rounded-full border ${accentSoft}`}
          >
            {s.running ? (
              <Pause className="h-3.5 w-3.5" aria-hidden />
            ) : (
              <Play className="h-3.5 w-3.5" aria-hidden />
            )}
          </button>
          <button
            type="button"
            onClick={() => expandWidget()}
            aria-label="Expand focus timer"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronDown className="h-4 w-4 rotate-180" aria-hidden />
          </button>
        </div>
        <FocusStatsDialog open={s.statsOpen} onClose={() => closeStats()} />
      </>
    )
  }

  /* ---- expanded panel ---- */
  return (
    <>
      <style>{KEYFRAMES}</style>
      <div
        role="region"
        aria-label="Focus timer"
        className="fixed inset-x-3 bottom-3 z-40 sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[320px]"
      >
        <div className="overflow-hidden rounded-3xl border border-border/80 bg-card/95 shadow-2xl shadow-black/25 backdrop-blur-xl">
          {/* header */}
          <div className="flex items-center justify-between gap-2 border-b border-border/60 px-4 py-2.5">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <Timer className={`h-3.5 w-3.5 ${accent}`} aria-hidden />
              <span className={s.running ? accent : 'text-muted-foreground'}>
                {sessionLabel(s.kind, s.minutes)}
                {s.running ? ' · live' : ''}
              </span>
            </span>
            <span className="flex items-center gap-0.5">
              {isFocus && s.running && (
                <>
                  <button
                    type="button"
                    onClick={addInterruption}
                    aria-label="Log an internal interruption (your own distraction)"
                    title="Internal interruption — I got distracted"
                    className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                  >
                    <Brain className="h-3.5 w-3.5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={addInterruption}
                    aria-label="Log an external interruption (someone/something interrupted you)"
                    title="External interruption — something pulled me away"
                    className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                  >
                    <PhoneIncoming className="h-3.5 w-3.5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZen(true)}
                    aria-label="Enter zen mode (hide timer to an edge dot)"
                    title="Zen — shrink to an edge dot while you work"
                    className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                  >
                    <Wind className="h-3.5 w-3.5" aria-hidden />
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={openStats}
                aria-label="Open focus stats"
                title="Focus stats"
                className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
              >
                <BarChart3 className="h-3.5 w-3.5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => collapseWidget()}
                aria-label="Collapse focus timer to a pill"
                title="Collapse"
                className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
              >
                <ChevronDown className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => {
                  toggleWidget()
                }}
                aria-label="Hide focus timer"
                title="Hide (press F to bring it back)"
                className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </span>
          </div>

          {/* body */}
          {s.celebration ? (
            <div className="flex flex-col items-center gap-3 px-5 py-6 text-center">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-full border ${accentSoft}`}
                style={{ animation: 'sv-focus-pop 0.5s ease-out both' }}
              >
                {s.celebration.kind === 'focus' ? (
                  <Check className="h-7 w-7" aria-hidden />
                ) : (
                  <Coffee className="h-6 w-6" aria-hidden />
                )}
              </span>
              <div>
                <p className="text-[15px] font-bold leading-tight">
                  {s.celebration.kind === 'focus'
                    ? `${s.celebration.minutes} focus minutes banked`
                    : 'Break\u2019s over'}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {s.celebration.kind === 'focus'
                    ? 'Nice work — your brain earned a pause.'
                    : 'Ready for another deep block?'}
                </p>
                {s.celebration.kind === 'focus' && (
                  <span className="mt-2 flex justify-center">
                    <CycleDots cycle={s.celebration.cycle} every={settings.longEvery} />
                  </span>
                )}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {s.celebration.kind === 'focus' ? (
                  <button
                    type="button"
                    onClick={() => startBreakSession(undefined, s.celebration?.nextLong)}
                    className="rounded-full border border-sky-400/40 bg-sky-400/15 px-3.5 py-1.5 text-xs font-bold text-sky-600 transition-colors hover:bg-sky-400/25 dark:text-sky-300"
                  >
                    {s.celebration.nextLong
                      ? `Take a long break · ${settings.longMin}m`
                      : `Take a ${settings.shortMin}-min break`}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => startFocusSession(settings.focusMin)}
                    className="rounded-full border border-emerald-400/40 bg-emerald-400/15 px-3.5 py-1.5 text-xs font-bold text-emerald-600 transition-colors hover:bg-emerald-400/25 dark:text-emerald-300"
                  >
                    Start focus {settings.focusMin}
                  </button>
                )}
                <button
                  type="button"
                  onClick={dismissCelebration}
                  className="rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:text-foreground"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 px-5 pb-4 pt-4">
              {/* ring + time */}
              <div
                className="relative"
                style={s.running ? { animation: 'sv-focus-breathe 4s ease-in-out infinite' } : undefined}
              >
                <svg viewBox="0 0 140 140" className="h-36 w-36 -rotate-90" aria-hidden>
                  <circle
                    cx="70"
                    cy="70"
                    r={RING_RADIUS}
                    fill="none"
                    strokeWidth="8"
                    className="stroke-border"
                  />
                  <circle
                    cx="70"
                    cy="70"
                    r={RING_RADIUS}
                    fill="none"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={RING_CIRCUMFERENCE}
                    strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress)}
                    className={`${accent} stroke-current transition-[stroke-dashoffset] duration-500 ease-linear`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-mono text-[30px] font-black leading-none tabular-nums tracking-tight">
                    {fmtClock(s.remainingMs)}
                  </span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {sessionLabel(s.kind, s.minutes)}
                  </span>
                </div>
              </div>

              {/* linkage chip — what this session counts toward */}
              {s.linkage && (s.linkage.taskTitle || s.linkage.subject || s.linkage.chapterTitle) && (
                <span className="flex max-w-full items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                  <Target className="h-3 w-3 shrink-0" aria-hidden />
                  <span className="truncate">
                    {s.linkage.taskTitle ??
                      s.linkage.chapterTitle ??
                      s.linkage.subject ??
                      'Linked session'}
                  </span>
                  {s.linkage.subject && s.linkage.taskTitle && (
                    <span className="shrink-0 text-emerald-600/70 dark:text-emerald-300/60">
                      · {s.linkage.subject}
                    </span>
                  )}
                </span>
              )}

              {/* interruptions this session */}
              {isFocus && s.interruptions > 0 && (
                <span className="text-[10.5px] font-medium text-amber-600 dark:text-amber-300">
                  {s.interruptions} interruption{s.interruptions === 1 ? '' : 's'} this session
                </span>
              )}

              {/* start / pause / reset */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleRun}
                  className={`flex h-10 items-center gap-2 rounded-full border px-5 text-sm font-bold transition-all ${accentSoft} hover:brightness-110`}
                >
                  {s.running ? (
                    <Pause className="h-4 w-4" aria-hidden />
                  ) : (
                    <Play className="h-4 w-4" aria-hidden />
                  )}
                  {s.running ? 'Pause' : s.remainingMs < durationMs ? 'Resume' : 'Start'}
                </button>
                <button
                  type="button"
                  onClick={resetSession}
                  aria-label="Reset session (partial time is banked)"
                  title="Reset — time already spent is banked"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/50 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden />
                </button>
              </div>

              {/* presets */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {presets.map((p) => {
                  const active = p.kind === s.kind && p.minutes === s.minutes
                  return (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => selectSession(p.kind, p.minutes)}
                      className={`rounded-full border px-2.5 py-1 text-[11px] font-bold transition-all ${
                        active
                          ? p.kind === 'focus'
                            ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-600 dark:text-emerald-300'
                            : 'border-sky-400/50 bg-sky-400/15 text-sky-600 dark:text-sky-300'
                          : 'border-border bg-muted/40 text-muted-foreground hover:text-foreground'
                      }`}
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
                  value={[Math.min(90, Math.max(5, dragMinutes ?? s.minutes))]}
                  min={5}
                  max={90}
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
          )}
        </div>

        <FocusStatsDialog open={s.statsOpen} onClose={() => dismissStats()} />
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Stats sheet (localStorage quick stats — full analytics in Focus HQ) */
/* ------------------------------------------------------------------ */

function FocusStatsDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose() }}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BarChart3 className="h-4.5 w-4.5 text-emerald-300" aria-hidden /> Focus stats
          </DialogTitle>
          <DialogDescription>
            Deep-work minutes logged on this device. Open <strong>Focus HQ</strong> for per-subject
            study-time analytics.
          </DialogDescription>
        </DialogHeader>
        <FocusTimerStats />
      </DialogContent>
    </Dialog>
  )
}

/* ------------------------------------------------------------------ */
/*  <FocusTimerStats /> — the quick stats card                          */
/* ------------------------------------------------------------------ */

interface FocusSummary {
  todayMinutes: number
  weekMinutes: number
  totalMinutes: number
  streakDays: number
  week: { date: string; label: string; minutes: number; isToday: boolean }[]
}

function summarizeFocusLog(log: FocusLogEntry[]): FocusSummary {
  const byDay = new Map<string, number>()
  for (const e of log) byDay.set(e.date, (byDay.get(e.date) ?? 0) + e.focusMinutes)

  const today = localDateKeySafe()
  const week: FocusSummary['week'] = []
  const dayLetters = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const pad = (n: number) => String(n).padStart(2, '0')
    const key = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
    week.push({
      date: key,
      label: dayLetters[d.getDay()] ?? '',
      minutes: byDay.get(key) ?? 0,
      isToday: i === 0,
    })
  }

  // streak of consecutive days with ≥1 focus session (today, else from yesterday)
  let streakDays = 0
  let offset = (byDay.get(today) ?? 0) > 0 ? 0 : 1
  for (;;) {
    const d = new Date()
    d.setDate(d.getDate() - offset)
    const pad = (n: number) => String(n).padStart(2, '0')
    const key = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
    if ((byDay.get(key) ?? 0) > 0) {
      streakDays++
      offset++
    } else break
    if (offset > 3650) break // 10-year safety net
  }

  const totalMinutes = log.reduce((n, e) => n + e.focusMinutes, 0)
  return {
    todayMinutes: byDay.get(today) ?? 0,
    weekMinutes: week.reduce((n, d) => n + d.minutes, 0),
    totalMinutes,
    streakDays,
    week,
  }
}

function localDateKeySafe(): string {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export function FocusTimerStats({ className = '' }: { className?: string }) {
  const log = useFocusLog()
  const stats = useMemo(() => summarizeFocusLog(log), [log])
  const maxBar = Math.max(60, ...stats.week.map((d) => d.minutes))

  return (
    <div className={`rounded-3xl border border-border/80 bg-card p-5 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-bold">Deep focus</span>
        <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-300">
          <Flame className="h-3 w-3" aria-hidden />
          {stats.streakDays}-day streak
        </span>
      </div>

      <div className="mt-3 flex items-end gap-2">
        <span className="text-5xl font-black leading-none tabular-nums tracking-tight">
          {stats.todayMinutes}
        </span>
        <span className="pb-1 text-xs font-medium text-muted-foreground">
          focus min today
          {stats.todayMinutes > 0 ? '' : ' — start a session'}
        </span>
      </div>

      {/* 7-day mini bar chart (pure SVG) */}
      <svg viewBox="0 0 196 66" className="mt-4 w-full" role="img" aria-label="Focus minutes, last 7 days">
        {stats.week.map((d, i) => {
          const x = 6 + i * 27
          const h =
            d.minutes > 0 ? Math.max(5, Math.round((d.minutes / maxBar) * 42)) : 3
          const y = 50 - h
          return (
            <g key={d.date}>
              <rect
                x={x}
                y={y}
                width={16}
                height={h}
                rx={3.5}
                fill="currentColor"
                className={
                  d.isToday
                    ? 'text-emerald-400'
                    : d.minutes > 0
                      ? 'text-emerald-500/45 dark:text-emerald-400/40'
                      : 'text-border'
                }
              >
                <title>{`${d.date}: ${d.minutes} min`}</title>
              </rect>
              {d.minutes > 0 && (
                <text
                  x={x + 8}
                  y={y - 3}
                  textAnchor="middle"
                  fontSize="7.5"
                  className="fill-muted-foreground"
                >
                  {d.minutes}
                </text>
              )}
              <text
                x={x + 8}
                y={62}
                textAnchor="middle"
                fontSize="8"
                className={d.isToday ? 'fill-foreground font-bold' : 'fill-muted-foreground'}
              >
                {d.label}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <span className="flex flex-col items-center gap-0.5 rounded-2xl border border-border/70 bg-muted/30 px-2 py-2.5 text-center">
          <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
          <span className="text-sm font-black tabular-nums">{stats.weekMinutes}</span>
          <span className="text-[10px] font-medium text-muted-foreground">min · 7 days</span>
        </span>
        <span className="flex flex-col items-center gap-0.5 rounded-2xl border border-border/70 bg-muted/30 px-2 py-2.5 text-center">
          <Hourglass className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
          <span className="text-sm font-black tabular-nums">
            {(stats.totalMinutes / 60).toFixed(1)}
          </span>
          <span className="text-[10px] font-medium text-muted-foreground">hours all-time</span>
        </span>
        <span className="flex flex-col items-center gap-0.5 rounded-2xl border border-border/70 bg-muted/30 px-2 py-2.5 text-center">
          <Flame className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
          <span className="text-sm font-black tabular-nums">{stats.streakDays}</span>
          <span className="text-[10px] font-medium text-muted-foreground">day streak</span>
        </span>
      </div>

      <p className="mt-3 text-center text-[10.5px] text-muted-foreground/70">
        Focus HQ has per-subject analytics — open it from the header.
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  <FocusTimerMount /> — app-level mount point                        */
/* ------------------------------------------------------------------ */

/**
 * Mount this ONCE at the app root (page.tsx, right before <ScrollTopButton />).
 * Renders the floating widget + stats sheet; only one instance ever paints
 * thanks to the slot claim.
 */
export function FocusTimerMount() {
  return <FocusTimer />
}
