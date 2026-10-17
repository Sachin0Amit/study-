'use client'

/**
 * X10 Pro — Deep Focus timer (Pomodoro-style deep-work widget).
 *
 * Architecture notes:
 * - The timer ENGINE lives at module level (outside React) so a running session
 *   survives the widget unmounting (e.g. the header hides during focus reading).
 *   React components subscribe via useSyncExternalStore.
 * - Cross-component contract (window CustomEvents):
 *     'sv:focus-start'  detail { minutes }  → start a focus session
 *     'sv:focus-toggle'                    → show / hide the widget
 *     'sv:focus-stats'                     → open the stats sheet
 *   Use the exported requestFocusStart / requestFocusToggle / requestFocusStats
 *   helpers (they dispatch exactly these events).
 * - Persistence: localStorage `sv-focus-log` — `{ date: 'YYYY-MM-DD',
 *   focusMinutes: number }[]`. readFocusLog is exported so the daily briefing
 *   client can ship the log to /api/briefing.
 * - Mounting: `<FocusTimerMount />` is the intended app-level mount (widget +
 *   stats sheet). The command palette also renders `<FocusTimer />`; a slot
 *   claim guarantees only ONE widget instance ever paints, so double mounting
 *   is harmless. Recommended mount: page.tsx root, next to <ScrollTopButton />.
 */

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import {
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  Coffee,
  Flame,
  Hourglass,
  Pause,
  Play,
  RotateCcw,
  Timer,
  Wind,
  X,
} from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Slider } from '@/components/ui/slider'

/* ------------------------------------------------------------------ */
/*  Event contracts                                                    */
/* ------------------------------------------------------------------ */

export const FOCUS_START_EVENT = 'sv:focus-start'
export const FOCUS_TOGGLE_EVENT = 'sv:focus-toggle'
export const FOCUS_STATS_EVENT = 'sv:focus-stats'

export function requestFocusStart(minutes: number): void {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(FOCUS_START_EVENT, { detail: { minutes } }))
}
export function requestFocusToggle(): void {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(FOCUS_TOGGLE_EVENT))
}
export function requestFocusStats(): void {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(FOCUS_STATS_EVENT))
}

/* ------------------------------------------------------------------ */
/*  Focus log (localStorage `sv-focus-log`)                            */
/* ------------------------------------------------------------------ */

export interface FocusLogEntry {
  date: string // 'YYYY-MM-DD'
  focusMinutes: number
}

const LOG_KEY = 'sv-focus-log'

function localDateKey(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

/** defensive read — any garbage in storage degrades to [] */
export function readFocusLog(): FocusLogEntry[] {
  if (typeof localStorage === 'undefined') return []
  try {
    const raw = localStorage.getItem(LOG_KEY)
    const parsed: unknown = raw ? JSON.parse(raw) : []
    if (!Array.isArray(parsed)) return []
    const out: FocusLogEntry[] = []
    for (const entry of parsed) {
      if (!entry || typeof entry !== 'object') continue
      const date = String((entry as { date?: unknown }).date ?? '')
      const minutes = Number((entry as { focusMinutes?: unknown }).focusMinutes)
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue
      if (!Number.isFinite(minutes) || minutes <= 0 || minutes > 1440) continue
      out.push({ date, focusMinutes: Math.round(minutes) })
    }
    return out
  } catch {
    return []
  }
}

/** log store version — bumped on every write so stats views re-render */
let logVersion = 0
const logListeners = new Set<() => void>()
function subscribeFocusLog(fn: () => void): () => void {
  logListeners.add(fn)
  return () => {
    logListeners.delete(fn)
  }
}
function getLogVersion(): number {
  return logVersion
}
function bumpLog(): void {
  logVersion++
  for (const fn of logListeners) fn()
}

/** cached snapshot of the parsed log (stable reference per version) */
const EMPTY_LOG: FocusLogEntry[] = []
let cachedLog: FocusLogEntry[] = EMPTY_LOG
let cachedLogVersion = -1
function getLogSnapshot(): FocusLogEntry[] {
  if (cachedLogVersion !== logVersion) {
    cachedLog = readFocusLog()
    cachedLogVersion = logVersion
  }
  return cachedLog
}

/** add focus minutes to today's log (also exported for power users/tests) */
export function appendFocusMinutes(minutes: number): void {
  if (typeof localStorage === 'undefined' || !Number.isFinite(minutes) || minutes <= 0) return
  const today = localDateKey(new Date())
  const log = readFocusLog()
  const entry = log.find((e) => e.date === today)
  if (entry) entry.focusMinutes += Math.round(minutes)
  else log.push({ date: today, focusMinutes: Math.round(minutes) })
  try {
    localStorage.setItem(LOG_KEY, JSON.stringify(log.slice(-4000)))
  } catch {
    /* storage full / unavailable — this session just isn't persisted */
  }
  bumpLog()
}

/* ------------------------------------------------------------------ */
/*  Engine (module-level store — survives widget unmounts)             */
/* ------------------------------------------------------------------ */

type SessionKind = 'focus' | 'break'

interface FocusEngineState {
  kind: SessionKind
  minutes: number
  remainingMs: number
  running: boolean
  zen: boolean // focus running → hide the widget into an edge dot
  hidden: boolean // widget visibility
  collapsed: boolean // pill vs expanded panel
  statsOpen: boolean
  celebration: { kind: SessionKind; minutes: number } | null
}

const INITIAL: FocusEngineState = {
  kind: 'focus',
  minutes: 25,
  remainingMs: 25 * 60_000,
  running: false,
  zen: false,
  hidden: true,
  collapsed: false,
  statsOpen: false,
  celebration: null,
}

let engineState: FocusEngineState = INITIAL
let engineSnapshot: FocusEngineState = INITIAL
const engineListeners = new Set<() => void>()

function setEngine(patch: Partial<FocusEngineState>): void {
  engineState = { ...engineState, ...patch }
  engineSnapshot = engineState
  for (const fn of engineListeners) fn()
}
function subscribeEngine(fn: () => void): () => void {
  engineListeners.add(fn)
  return () => {
    engineListeners.delete(fn)
  }
}
function getEngineSnapshot(): FocusEngineState {
  return engineSnapshot
}
function useFocusState(): FocusEngineState {
  return useSyncExternalStore(subscribeEngine, getEngineSnapshot, () => INITIAL)
}

/* ---- ticking (single module interval, drift-proof via endAt) ------- */

let tickHandle: ReturnType<typeof setInterval> | null = null
let endAt = 0

function stopTick(): void {
  if (tickHandle !== null) {
    clearInterval(tickHandle)
    tickHandle = null
  }
}

function ensureTick(): void {
  if (tickHandle !== null) return
  tickHandle = setInterval(() => {
    if (!engineState.running) {
      stopTick()
      return
    }
    const remaining = Math.max(0, endAt - Date.now())
    if (remaining <= 0) {
      completeSession()
      return
    }
    // only re-render when the displayed second flips
    if (Math.ceil(remaining / 1000) !== Math.ceil(engineState.remainingMs / 1000)) {
      setEngine({ remainingMs: remaining })
    }
  }, 250)
}

/** soft two-tone chime — pure WebAudio, no audio files, volume 0.1 */
function chime(): void {
  if (typeof window === 'undefined') return
  try {
    const Ctx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctx) return
    const ctx = new Ctx()
    void ctx.resume?.()
    const now = ctx.currentTime
    const notes = [659.25, 987.77] // E5 → B5
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = freq
      const t0 = now + i * 0.18
      gain.gain.setValueAtTime(0.0001, t0)
      gain.gain.linearRampToValueAtTime(0.1, t0 + 0.03)
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.55)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(t0)
      osc.stop(t0 + 0.6)
    })
    setTimeout(() => void ctx.close().catch(() => {}), 1600)
  } catch {
    /* audio unavailable — silent completion */
  }
}

function completeSession(): void {
  stopTick()
  const kind = engineState.kind
  const minutes = engineState.minutes
  if (kind === 'focus') appendFocusMinutes(minutes)
  chime()
  setEngine({
    running: false,
    remainingMs: 0,
    zen: false,
    hidden: false,
    collapsed: false,
    celebration: { kind, minutes },
  })
}

/* ---- engine actions (called by the widget UI + window events) ------ */

function startFocusSession(minutes: number): void {
  const m = Math.min(180, Math.max(1, Math.round(minutes)))
  stopTick()
  endAt = Date.now() + m * 60_000
  setEngine({
    kind: 'focus',
    minutes: m,
    remainingMs: m * 60_000,
    running: true,
    zen: false,
    hidden: false,
    collapsed: false,
    celebration: null,
  })
  ensureTick()
}

function startBreakSession(minutes: number): void {
  const m = Math.min(60, Math.max(1, Math.round(minutes)))
  stopTick()
  endAt = Date.now() + m * 60_000
  setEngine({
    kind: 'break',
    minutes: m,
    remainingMs: m * 60_000,
    running: true,
    zen: false,
    hidden: false,
    collapsed: false,
    celebration: null,
  })
  ensureTick()
}

function toggleRun(): void {
  if (engineState.running) {
    stopTick()
    setEngine({ running: false, remainingMs: Math.max(0, endAt - Date.now()), zen: false })
  } else {
    const full = engineState.minutes * 60_000
    const remaining = engineState.remainingMs > 1000 ? engineState.remainingMs : full
    endAt = Date.now() + remaining
    setEngine({ running: true, remainingMs: remaining, celebration: null })
    ensureTick()
  }
}

function selectSession(kind: SessionKind, minutes: number): void {
  stopTick()
  const m = Math.min(180, Math.max(1, Math.round(minutes)))
  setEngine({
    kind,
    minutes: m,
    remainingMs: m * 60_000,
    running: false,
    zen: false,
    celebration: null,
  })
}

function resetSession(): void {
  selectSession(engineState.kind, engineState.minutes)
}

function setZen(on: boolean): void {
  setEngine({ zen: on && engineState.running && engineState.kind === 'focus' })
}

function toggleWidget(): void {
  if (engineState.hidden) {
    setEngine({ hidden: false, collapsed: false })
  } else {
    setEngine({ hidden: true, zen: false })
  }
}

function openStats(): void {
  setEngine({ statsOpen: true, hidden: false, collapsed: false, zen: false })
}

function dismissCelebration(): void {
  setEngine({ celebration: null })
}

/* ---- window event wiring (bound once, browser only) ---------------- */

if (typeof window !== 'undefined') {
  window.addEventListener(FOCUS_START_EVENT, (e: Event) => {
    const detail = (e as CustomEvent<{ minutes?: unknown }>).detail
    const minutes = Number(detail?.minutes)
    if (Number.isFinite(minutes) && minutes > 0) startFocusSession(minutes)
  })
  window.addEventListener(FOCUS_TOGGLE_EVENT, () => toggleWidget())
  window.addEventListener(FOCUS_STATS_EVENT, () => openStats())
  window.addEventListener('storage', (e: StorageEvent) => {
    if (e.key === LOG_KEY) bumpLog()
  })
}

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

const PRESETS: { label: string; kind: SessionKind; minutes: number }[] = [
  { label: 'Focus 25', kind: 'focus', minutes: 25 },
  { label: 'Focus 50', kind: 'focus', minutes: 50 },
  { label: 'Break 5', kind: 'break', minutes: 5 },
  { label: 'Break 15', kind: 'break', minutes: 15 },
]

function sessionLabel(kind: SessionKind, minutes: number): string {
  if (kind === 'break') return minutes >= 15 ? 'Long break' : 'Short break'
  return minutes >= 50 ? 'Deep work' : 'Deep focus'
}

function fmtClock(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000))
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`
}

const RING_RADIUS = 56
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

const KEYFRAMES = `
@keyframes sv-focus-breathe { 0% { transform: scale(1); } 50% { transform: scale(1.03); } 100% { transform: scale(1); } }
@keyframes sv-focus-pop { 0% { transform: scale(0.55); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
`

/* ------------------------------------------------------------------ */
/*  <FocusTimer /> — the floating widget                               */
/* ------------------------------------------------------------------ */

export function FocusTimer() {
  const id = useMemo(() => nextWidgetId++, [])
  const holderId = useSyncExternalStore(subscribeSlot, getHolderId, () => null)
  const isHolder = holderId === id
  const s = useFocusState()

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
        <FocusStatsDialog open={s.statsOpen} onClose={() => setEngine({ statsOpen: false })} />
      </>
    )
  }

  if (s.hidden) {
    return (
      <>
        <style>{KEYFRAMES}</style>
        <FocusStatsDialog open={s.statsOpen} onClose={() => setEngine({ statsOpen: false })} />
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
          onClick={() => setEngine({ collapsed: false })}
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
          onClick={() => setEngine({ collapsed: false })}
          aria-label="Expand focus timer"
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronDown className="h-4 w-4" aria-hidden />
        </button>
      </div>
      <FocusStatsDialog open={s.statsOpen} onClose={() => setEngine({ statsOpen: false })} />
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
              <button
                type="button"
                onClick={() => setZen(true)}
                aria-label="Enter zen mode (hide timer to an edge dot)"
                title="Zen — shrink to an edge dot while you work"
                className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
              >
                <Wind className="h-3.5 w-3.5" aria-hidden />
              </button>
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
              onClick={() => setEngine({ collapsed: true })}
              aria-label="Collapse focus timer to a pill"
              title="Collapse"
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              <ChevronDown className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setEngine({ hidden: true, zen: false })}
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
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {s.celebration.kind === 'focus' ? (
                <button
                  type="button"
                  onClick={() => startBreakSession(5)}
                  className="rounded-full border border-sky-400/40 bg-sky-400/15 px-3.5 py-1.5 text-xs font-bold text-sky-600 transition-colors hover:bg-sky-400/25 dark:text-sky-300"
                >
                  Take a 5-min break
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => startFocusSession(25)}
                  className="rounded-full border border-emerald-400/40 bg-emerald-400/15 px-3.5 py-1.5 text-xs font-bold text-emerald-600 transition-colors hover:bg-emerald-400/25 dark:text-emerald-300"
                >
                  Start focus 25
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
                aria-label="Reset session"
                title="Reset"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/50 text-muted-foreground transition-colors hover:text-foreground"
              >
                <RotateCcw className="h-4 w-4" aria-hidden />
              </button>
            </div>

            {/* presets */}
            <div className="flex flex-wrap justify-center gap-1.5">
              {PRESETS.map((p) => {
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

      <FocusStatsDialog open={s.statsOpen} onClose={() => setEngine({ statsOpen: false })} />
    </div>
    </>
  )
}

/** stats sheet rendered by the widget (opened via the 'sv:focus-stats' event) */
function FocusStatsDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose() }}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BarChart3 className="h-4.5 w-4.5 text-emerald-300" aria-hidden /> Focus stats
          </DialogTitle>
          <DialogDescription>
            Deep-work minutes logged on this device — take the number to your daily briefing.
          </DialogDescription>
        </DialogHeader>
        <FocusTimerStats />
      </DialogContent>
    </Dialog>
  )
}

/* ------------------------------------------------------------------ */
/*  <FocusTimerStats /> — the stats card                               */
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

  const today = localDateKey(new Date())
  const week: FocusSummary['week'] = []
  const dayLetters = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const key = localDateKey(d)
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
    if ((byDay.get(localDateKey(d)) ?? 0) > 0) {
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

export function FocusTimerStats({ className = '' }: { className?: string }) {
  const log = useSyncExternalStore(subscribeFocusLog, getLogSnapshot, () => EMPTY_LOG)
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
        Sessions are stored on this device only — they feed your daily briefing.
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  <FocusTimerMount /> — app-level mount point                        */
/* ------------------------------------------------------------------ */

/**
 * Mount this ONCE at the app root (recommended: page.tsx, right before
 * <ScrollTopButton />). It renders the floating widget + stats sheet and is
 * safe to co-exist with the command palette's internal <FocusTimer /> —
 * only one instance ever paints thanks to the slot claim.
 */
export function FocusTimerMount() {
  return <FocusTimer />
}
