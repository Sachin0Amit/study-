'use client'

/**
 * X11b — Focus Pod: floating Pomodoro launcher + redesigned timer panel.
 *
 * The ENGINE lives in '@/lib/focus' (module-level, survives unmounts and page
 * reloads). This file is the presentation layer:
 *
 *   • <FocusFab />     — the floating launcher button (bottom-right). Shows
 *                        whenever the timer is hidden, so Pomodoro is always
 *                        one click away — no nav-bar entry needed.
 *   • expanded panel   — a complete, scroll-safe redesign: capped height with
 *                        an internal scroll area so NOTHING is ever clipped,
 *                        gradient progress ring, grouped session-length picker
 *                        (presets + quick chips + stepper + fine slider).
 *   • collapsed pill   — compact live pill (time + play/pause).
 *   • zen edge dot     — near-invisible mode while a session runs.
 *
 * For the full Focus HQ experience (to-dos, per-subject analytics, settings)
 * see focus-view.tsx — the panel footer links to it.
 *
 * Mounting: `<FocusTimerMount />` is the app-level mount (page.tsx root). A
 * slot claim guarantees only ONE widget instance ever paints, and the chrome
 * is portaled into <body> so ancestor filters/transforms can never break its
 * fixed positioning (the header's backdrop-blur used to clip the panel).
 */

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import {
  BarChart3,
  Brain,
  CalendarDays,
  Check,
  ChevronDown,
  Coffee,
  Flame,
  Hourglass,
  LayoutList,
  Minus,
  NotebookPen,
  Pause,
  PhoneIncoming,
  Play,
  Plus,
  RotateCcw,
  Target,
  Timer,
  Trophy,
  Wind,
  X,
  Zap,
} from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Slider } from '@/components/ui/slider'
import { useStudy } from '@/store/useStudy'
import {
  type FocusEngineState,
  type FocusLogEntry,
  type FocusSettings,
  addInterruption,
  collapseWidget,
  closeStats,
  dismissCelebration,
  expandWidget,
  fmtClock,
  resetSession,
  saveSessionNote,
  selectSession,
  sessionLabel,
  setZen,
  skipToBreak,
  startBreakSession,
  startFocusSession,
  toggleRun,
  toggleWidget,
  openStats,
  useFocusEngine,
  useFocusLog,
  useFocusSettings,
} from '@/lib/focus'
import {
  SOUND_LAYERS,
  toggleLayer,
  useSoundscape,
} from '@/lib/soundscape'

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
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */

const RING_R = 58
const RING_CIRC = 2 * Math.PI * RING_R

const KEYFRAMES = `
@keyframes sv-focus-breathe { 0% { transform: scale(1); } 50% { transform: scale(1.03); } 100% { transform: scale(1); } }
@keyframes sv-focus-pop { 0% { transform: scale(0.55); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
@keyframes sv-focus-slide-up { from { transform: translateY(18px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
`

function clampMin(n: number): number {
  return Math.min(90, Math.max(5, Math.round(n)))
}

/** cycle dots — how many pomodoros until the long break */
function CycleDots({ cycle, every }: { cycle: number; every: number }) {
  const filledCount = cycle === 0 ? 0 : cycle % every || every
  return (
    <span
      className="flex items-center gap-1.5"
      title={`${filledCount} of ${every} pomodoros until the long break`}
    >
      {Array.from({ length: every }, (_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full transition-colors ${
            filledCount > i ? 'bg-emerald-400' : 'bg-border'
          }`}
        />
      ))}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  <FocusFab /> — the floating launcher                               */
/* ------------------------------------------------------------------ */

function FocusFab({ s }: { s: FocusEngineState }) {
  return (
    <div className="sv-dock-fab fixed bottom-5 right-5 z-40 flex flex-col items-center gap-2 sm:bottom-6 sm:right-6">
      {/* live countdown bubble while a session runs hidden */}
      {s.running && (
        <button
          type="button"
          onClick={() => toggleWidget()}
          className="rounded-full border border-emerald-400/30 bg-card/95 px-3 py-1 font-mono text-[11px] font-black tabular-nums text-emerald-600 shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-emerald-400/60 dark:text-emerald-300"
          aria-label={`Session running — ${fmtClock(s.remainingMs)} left. Open the timer`}
        >
          {fmtClock(s.remainingMs)} · {sessionLabel(s.kind, s.minutes).toLowerCase()}
        </button>
      )}
      <button
        type="button"
        onClick={() => toggleWidget()}
        aria-label="Open the Pomodoro focus timer"
        title="Focus timer — Pomodoro, to-dos & study-time stats"
        className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-[0_14px_36px_-10px_rgba(16,185,129,0.7)] transition-transform duration-200 hover:scale-105 active:scale-95"
        style={{ animation: 'sv-focus-pop 0.35s cubic-bezier(0.2, 0.9, 0.3, 1.3) both' }}
      >
        {s.running && (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-2xl bg-emerald-400/30"
            style={{ animationDuration: '2.2s' }}
          />
        )}
        <Timer className="relative h-6 w-6 transition-transform duration-300 group-hover:rotate-12" aria-hidden />
      </button>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  <CelebrationNote /> — journal line for the session just banked      */
/* ------------------------------------------------------------------ */

function CelebrationNote() {
  const [note, setNote] = useState('')
  const [saved, setSaved] = useState(false)

  if (saved) {
    return (
      <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-300">
        <Check className="h-3 w-3" aria-hidden /> Note saved to this session
      </span>
    )
  }

  return (
    <div className="w-full rounded-2xl border border-border/70 bg-muted/25 p-2.5">
      <label htmlFor="sv-session-note" className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-muted-foreground">
        <NotebookPen className="h-3 w-3" aria-hidden /> How did it go?
      </label>
      <textarea
        id="sv-session-note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="e.g. “truth tables finally clicked — redo the drill tomorrow”"
        maxLength={600}
        rows={2}
        className="mt-1.5 w-full resize-none rounded-xl border border-border/70 bg-background px-2.5 py-1.5 text-xs leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-emerald-400/50"
      />
      <div className="mt-1.5 flex items-center justify-between gap-2">
        <span className="text-[9.5px] text-muted-foreground/60">saved to Focus HQ · recent sessions</span>
        <button
          type="button"
          disabled={!note.trim()}
          onClick={() => {
            saveSessionNote(note)
            setSaved(true)
          }}
          className="rounded-full border border-emerald-400/40 bg-emerald-400/15 px-3 py-1 text-[11px] font-bold text-emerald-600 transition-colors hover:bg-emerald-400/25 disabled:cursor-not-allowed disabled:opacity-40 dark:text-emerald-300"
        >
          Save note
        </button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  <RingHero /> — gradient progress ring + clock                      */
/* ------------------------------------------------------------------ */

function RingHero({ s }: { s: FocusEngineState }) {
  const durationMs = s.minutes * 60_000
  const progress = durationMs > 0 ? Math.min(1, Math.max(0, 1 - s.remainingMs / durationMs)) : 0
  const isFocus = s.kind === 'focus'
  const gid = isFocus ? 'sv-focus-ring-grad' : 'sv-break-ring-grad'
  return (
    <div
      className="relative"
      style={s.running ? { animation: 'sv-focus-breathe 4s ease-in-out infinite' } : undefined}
    >
      <svg viewBox="0 0 140 140" className="h-[132px] w-[132px] -rotate-90" aria-hidden>
        <defs>
          <linearGradient id="sv-focus-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
          <linearGradient id="sv-break-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle cx="70" cy="70" r={RING_R} fill="none" strokeWidth="8" className="stroke-border" />
        <circle
          cx="70"
          cy="70"
          r={RING_R}
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={RING_CIRC}
          strokeDashoffset={RING_CIRC * (1 - progress)}
          stroke={`url(#${gid})`}
          className="transition-[stroke-dashoffset] duration-500 ease-linear"
          style={{ filter: isFocus ? 'drop-shadow(0 0 5px rgba(52,211,153,0.4))' : 'drop-shadow(0 0 5px rgba(56,189,248,0.4))' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-[27px] font-black leading-none tabular-nums tracking-tight">
          {fmtClock(s.remainingMs)}
        </span>
        <span className="mt-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          {sessionLabel(s.kind, s.minutes)}
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  <SessionPicker /> — presets + quick chips + stepper + slider       */
/* ------------------------------------------------------------------ */

const QUICK_CHIPS = [10, 15, 20, 30, 45, 60]

function SessionPicker({ s, settings }: { s: FocusEngineState; settings: FocusSettings }) {
  const [dragMinutes, setDragMinutes] = useState<number | null>(null)
  const isFocus = s.kind === 'focus'

  const focusChoices = useMemo(() => {
    const set = new Set([settings.focusMin, 50, 90])
    return [...set].sort((a, b) => a - b)
  }, [settings.focusMin])
  const breakChoices = useMemo(() => {
    const set = new Set([settings.shortMin, settings.longMin])
    return [...set].sort((a, b) => a - b)
  }, [settings.shortMin, settings.longMin])

  const current = clampMin(dragMinutes ?? s.minutes)
  const apply = (m: number) => selectSession(s.kind, clampMin(m))

  const chipCls = (active: boolean, focus: boolean) =>
    `rounded-full border px-3 py-1 text-[11.5px] font-bold tabular-nums transition-all ${
      active
        ? focus
          ? 'border-emerald-400/60 bg-emerald-400/20 text-emerald-700 shadow-[inset_0_0_0_1px_rgba(52,211,153,0.25)] dark:text-emerald-300'
          : 'border-sky-400/60 bg-sky-400/20 text-sky-700 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.25)] dark:text-sky-300'
        : 'border-border/70 bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground'
    }`

  return (
    <div className="w-full rounded-2xl border border-border/70 bg-muted/25 p-3">
      {/* header + stepper */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Session length
        </span>
        <span className="flex items-center gap-0.5 rounded-full border border-border/70 bg-card px-1 py-0.5 shadow-sm">
          <button
            type="button"
            onClick={() => apply(current - 5)}
            disabled={current <= 5}
            aria-label="Five minutes shorter"
            className="flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30"
          >
            <Minus className="h-3 w-3" aria-hidden />
          </button>
          <span className="w-16 text-center font-mono text-[13px] font-black tabular-nums">
            {current}
            <span className="text-[9.5px] font-bold text-muted-foreground"> min</span>
          </span>
          <button
            type="button"
            onClick={() => apply(current + 5)}
            disabled={current >= 90}
            aria-label="Five minutes longer"
            className="flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30"
          >
            <Plus className="h-3 w-3" aria-hidden />
          </button>
        </span>
      </div>

      {/* focus / break preset rows */}
      <div className="mt-2.5 grid grid-cols-2 gap-2.5">
        <div className="min-w-0">
          <span className="flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-[0.12em] text-muted-foreground/80">
            <Zap className="h-2.5 w-2.5 text-emerald-400" aria-hidden /> Focus
          </span>
          <div className="mt-1 flex flex-wrap gap-1">
            {focusChoices.map((m) => (
              <button
                key={`f${m}`}
                type="button"
                onClick={() => selectSession('focus', m)}
                className={chipCls(isFocus && s.minutes === m, true)}
              >
                {m}m
              </button>
            ))}
          </div>
        </div>
        <div className="min-w-0">
          <span className="flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-[0.12em] text-muted-foreground/80">
            <Coffee className="h-2.5 w-2.5 text-sky-400" aria-hidden /> Break
          </span>
          <div className="mt-1 flex flex-wrap gap-1">
            {breakChoices.map((m) => (
              <button
                key={`b${m}`}
                type="button"
                onClick={() => selectSession('break', m)}
                className={chipCls(!isFocus && s.minutes === m, false)}
              >
                {m}m
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* quick chips */}
      <div className="mt-2.5 flex flex-wrap gap-1">
        {QUICK_CHIPS.map((m) => (
          <button
            key={`q${m}`}
            type="button"
            onClick={() => apply(m)}
            className={`rounded-md border px-2 py-0.5 font-mono text-[10.5px] font-bold tabular-nums transition-colors ${
              s.minutes === m
                ? 'border-foreground/40 bg-foreground/10 text-foreground'
                : 'border-border/60 bg-card/60 text-muted-foreground/90 hover:border-foreground/25 hover:text-foreground'
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* fine-tune slider */}
      <div className="mt-1 px-0.5 pb-0.5 pt-2">
        <Slider
          value={[current]}
          min={5}
          max={90}
          step={5}
          onValueChange={(v) => setDragMinutes(v[0] ?? null)}
          onValueCommit={(v) => {
            apply(v[0] ?? s.minutes)
            setDragMinutes(null)
          }}
          aria-label="Fine-tune session length in minutes"
        />
        <div className="mt-1 flex items-center justify-between text-[9.5px] font-medium text-muted-foreground/70">
          <span>5 min</span>
          <span>drag to fine-tune</span>
          <span>90 min</span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  <FocusTimer /> — the widget (FAB / pill / panel / zen)              */
/* ------------------------------------------------------------------ */

export function FocusTimer() {
  const id = useMemo(() => nextWidgetId++, [])
  const holderId = useSyncExternalStore(subscribeSlot, getHolderId, () => null)
  const isHolder = holderId === id
  const s = useFocusEngine()
  const settings = useFocusSettings()

  // portal target — attaching to <body> makes the widget immune to ancestor
  // transforms/backdrop-filters that would otherwise reparent its fixed layer
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)
  useEffect(() => {
    setPortalTarget(document.body)
  }, [])

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

  // coordinate with the scroll-to-top button: while small focus chrome
  // (FAB or pill) occupies the bottom-right corner, shift it up
  useEffect(() => {
    if (!isHolder) return
    const smallChrome = (s.hidden && !s.zen) || (s.collapsed && !s.hidden)
    if (smallChrome) document.body.setAttribute('data-sv-focus-fab', '1')
    else document.body.removeAttribute('data-sv-focus-fab')
  }, [isHolder, s.hidden, s.zen, s.collapsed])

  if (!isHolder || !portalTarget) return null

  return createPortal(<WidgetChrome s={s} settings={settings} />, portalTarget)
}

/* ------------------------------------------------------------------ */
/*  <WidgetChrome /> — FAB / pill / panel / zen (rendered into <body>)  */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Soundscape row — compact ambient mixer inside the Pod (X11F)       */
/* ------------------------------------------------------------------ */

function PodSoundscapeRow() {
  const sound = useSoundscape()
  const audible = sound.master > 0
  const activeCount = SOUND_LAYERS.filter((l) => sound.layers[l.id] > 0).length

  return (
    <div
      className="w-full rounded-2xl border border-border/70 bg-muted/20 p-2"
      role="group"
      aria-label="Ambient soundscape"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="flex min-w-0 items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
          {/* mini equalizer — dances while audible */}
          <span className="flex h-3 items-end gap-[1.5px]" aria-hidden>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`w-[2.5px] rounded-full bg-emerald-400 ${audible && activeCount > 0 ? 'sv-eq-bar' : 'h-[3px] opacity-40'}`}
                style={audible && activeCount > 0 ? { animationDelay: `${i * 0.16}s` } : undefined}
              />
            ))}
          </span>
          ambient
          {audible && activeCount > 0 && (
            <span className="font-mono text-[9px] font-bold tabular-nums text-emerald-600 dark:text-emerald-300">
              {activeCount}
            </span>
          )}
        </span>
        <div className="flex items-center gap-1">
          {SOUND_LAYERS.map((layer) => {
            const on = sound.layers[layer.id] > 0 && audible
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => toggleLayer(layer.id)}
                aria-pressed={on}
                aria-label={`${layer.name}${on ? ' on' : ' off'}`}
                title={`${layer.name} — ${layer.hint}`}
                className={`flex h-6 w-6 items-center justify-center rounded-lg border text-[12px] leading-none transition-all active:scale-[0.94] ${
                  on
                    ? 'border-emerald-400/50 bg-emerald-400/15 shadow-[0_0_10px_-3px_rgba(52,211,153,0.6)]'
                    : 'border-transparent opacity-45 hover:opacity-90'
                }`}
              >
                <span aria-hidden>{layer.emoji}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Widget chrome                                                      */
/* ------------------------------------------------------------------ */

function WidgetChrome({ s, settings }: { s: FocusEngineState; settings: FocusSettings }) {
  const isFocus = s.kind === 'focus'
  const accent = isFocus ? 'text-emerald-400' : 'text-sky-400'

  // Escape closes layers top-down: stats sheet → celebration → the panel
  // itself. Other overlays (command palette, dialogs) own their Escape, so we
  // yield whenever one is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || e.defaultPrevented) return
      if (s.statsOpen) {
        closeStats()
        e.preventDefault()
        return
      }
      if (s.celebration) {
        dismissCelebration()
        e.preventDefault()
        return
      }
      // another overlay (palette, shortcut sheet, any dialog) owns Escape
      if (document.querySelector('[role="dialog"], [cmdk-root]')) return
      if (!s.hidden && !s.zen) {
        toggleWidget() // hides — a running session keeps running
        e.preventDefault()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [s.statsOpen, s.celebration, s.hidden, s.zen])

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

  /* ---- hidden: floating launcher button ---- */
  if (s.hidden) {
    return (
      <>
        <style>{KEYFRAMES}</style>
        <FocusFab s={s} />
        <FocusStatsDialog open={s.statsOpen} onClose={() => closeStats()} />
      </>
    )
  }

  /* ---- collapsed pill ---- */
  if (s.collapsed) {
    const durationMs = s.minutes * 60_000
    return (
      <>
        <style>{KEYFRAMES}</style>
        <div
          role="region"
          aria-label="Focus timer"
          className="sv-dock-fab fixed bottom-5 right-5 z-40 flex items-center gap-0.5 rounded-full border border-border/80 bg-card/95 p-1.5 pl-3.5 shadow-xl shadow-black/20 backdrop-blur-xl sm:bottom-6 sm:right-6"
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
            className={`flex h-8 w-8 items-center justify-center rounded-full border ${
              isFocus
                ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300'
                : 'border-sky-400/30 bg-sky-400/10 text-sky-600 dark:text-sky-300'
            }`}
          >
            {s.running ? <Pause className="h-3.5 w-3.5" aria-hidden /> : <Play className="h-3.5 w-3.5" aria-hidden />}
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

  /* ---- expanded panel (complete redesign — scroll-safe, never clipped) ---- */
  const primaryGradient = isFocus
    ? 'from-emerald-500 to-teal-500 shadow-emerald-500/30'
    : 'from-sky-500 to-cyan-500 shadow-sky-500/30'

  return (
    <>
      <style>{KEYFRAMES}</style>
      <div
        role="region"
        aria-label="Focus timer"
        className="fixed inset-x-3 bottom-3 z-40 flex max-h-[calc(100dvh-4.5rem)] flex-col sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[350px]"
      >
        <div
          className="flex max-h-full flex-col overflow-hidden rounded-[26px] border border-border/70 bg-card/95 shadow-2xl shadow-black/30 backdrop-blur-xl"
          style={{ animation: 'sv-focus-slide-up 0.3s cubic-bezier(0.21, 1.02, 0.55, 1.2) both' }}
        >
          {/* header */}
          <div className="flex h-11 shrink-0 items-center justify-between gap-2 border-b border-border/60 bg-gradient-to-r from-emerald-400/[0.07] to-transparent px-3.5">
            <span className="flex min-w-0 items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em]">
              <span className="relative flex h-2 w-2 shrink-0">
                {s.running && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                )}
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${
                    s.running
                      ? isFocus
                        ? 'bg-emerald-400'
                        : 'bg-sky-400'
                      : 'bg-muted-foreground/50'
                  }`}
                />
              </span>
              <span className={`truncate ${s.running ? accent : 'text-muted-foreground'}`}>
                {sessionLabel(s.kind, s.minutes)} · {s.minutes} min{s.running ? ' · live' : ''}
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-0.5">
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
                onClick={() => collapseWidget()}
                aria-label="Collapse focus timer to a pill"
                title="Collapse to a pill"
                className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
              >
                <ChevronDown className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => {
                  toggleWidget()
                }}
                aria-label="Hide focus timer (the floating button brings it back)"
                title="Hide — or press Esc (a running session keeps running)"
                className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </span>
          </div>

          {/* body — scrolls internally, so nothing is ever cut off */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            {s.celebration ? (
              <div className="flex flex-col items-center gap-3 px-5 py-7 text-center">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full border ${
                    s.celebration.kind === 'focus'
                      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300'
                      : 'border-sky-400/30 bg-sky-400/10 text-sky-600 dark:text-sky-300'
                  }`}
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
                {s.celebration.kind === 'focus' && <CelebrationNote />}
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
              <div className="flex flex-col items-center gap-3.5 px-4 pb-4 pt-4">
                {/* ring + clock */}
                <RingHero s={s} />

                {/* cycle dots */}
                {isFocus && (
                  <span className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
                    <CycleDots cycle={s.cycle} every={settings.longEvery} />
                    <span className="ml-0.5">
                      {s.cycle % settings.longEvery || s.cycle === 0
                        ? `${settings.longEvery - (s.cycle % settings.longEvery)} more until the long break`
                        : 'long break unlocked'}
                    </span>
                  </span>
                )}

                {/* linkage chip — what this session counts toward */}
                {s.linkage && (s.linkage.taskTitle || s.linkage.subject || s.linkage.chapterTitle) && (
                  <span className="flex max-w-full items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                    <Target className="h-3 w-3 shrink-0" aria-hidden />
                    <span className="truncate">
                      {s.linkage.taskTitle ?? s.linkage.chapterTitle ?? s.linkage.subject ?? 'Linked session'}
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

                {/* primary controls */}
                <div className="flex w-full items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleRun}
                    className={`flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.98] ${primaryGradient}`}
                  >
                    {s.running ? (
                      <Pause className="h-4 w-4" aria-hidden />
                    ) : (
                      <Play className="h-4 w-4" aria-hidden />
                    )}
                    {s.running
                      ? 'Pause'
                      : s.remainingMs < s.minutes * 60_000
                        ? 'Resume'
                        : `Start ${s.minutes}m`}
                  </button>
                  <button
                    type="button"
                    onClick={resetSession}
                    aria-label="Reset session (partial time is banked)"
                    title="Reset — time already spent is banked"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-muted/50 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden />
                  </button>
                </div>

                {/* skip to break */}
                {isFocus && (
                  <button
                    type="button"
                    onClick={() => skipToBreak(s.cycle + 1 >= settings.longEvery)}
                    className="text-[11px] font-semibold text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    Bank progress &amp; skip to break →
                  </button>
                )}

                {/* interruption logging (while a focus session runs) */}
                {isFocus && s.running && (
                  <div className="grid w-full grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={addInterruption}
                      aria-label="Log an internal interruption (your own distraction)"
                      title="Internal interruption — I got distracted"
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-amber-400/30 bg-amber-400/[0.07] px-2 py-2 text-[11px] font-semibold text-amber-700 transition-colors hover:bg-amber-400/15 dark:text-amber-300"
                    >
                      <Brain className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      <span className="truncate">I drifted</span>
                      {s.interruptions > 0 && (
                        <span className="rounded-full bg-amber-400/25 px-1.5 font-mono text-[10px] font-bold tabular-nums">
                          {s.interruptions}
                        </span>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={addInterruption}
                      aria-label="Log an external interruption (someone or something interrupted you)"
                      title="External interruption — something pulled me away"
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-amber-400/30 bg-amber-400/[0.07] px-2 py-2 text-[11px] font-semibold text-amber-700 transition-colors hover:bg-amber-400/15 dark:text-amber-300"
                    >
                      <PhoneIncoming className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      <span className="truncate">Pulled away</span>
                    </button>
                  </div>
                )}

                {/* ambient soundscape — synthesized layers, one tap away */}
                <PodSoundscapeRow />

                {/* session length picker (presets + custom) */}
                <SessionPicker s={s} settings={settings} />
              </div>
            )}
          </div>

          {/* footer — deep link to Focus HQ */}
          <div className="flex h-12 shrink-0 items-center justify-between gap-2 border-t border-border/60 bg-muted/30 px-3">
            <button
              type="button"
              onClick={() => {
                closeStats()
                useStudy.getState().navigate({ name: 'focus' })
              }}
              className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[12px] font-bold text-emerald-600 transition-colors hover:bg-emerald-400/10 dark:text-emerald-300"
            >
              <LayoutList className="h-3.5 w-3.5" aria-hidden />
              Focus HQ — to-dos &amp; stats
            </button>
            <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[10px] font-semibold text-muted-foreground">
              F
            </kbd>
          </div>
        </div>

        <FocusStatsDialog open={s.statsOpen} onClose={() => closeStats()} />
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
        <button
          type="button"
          onClick={() => {
            onClose()
            useStudy.getState().navigate({ name: 'focus' })
          }}
          className="flex w-full items-center justify-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/15 px-4 py-2 text-[13px] font-bold text-emerald-600 transition-colors hover:bg-emerald-400/25 dark:text-emerald-300"
        >
          <LayoutList className="h-4 w-4" aria-hidden />
          Open Focus HQ — to-dos &amp; per-subject stats
        </button>
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
    const key = localDateKeySafe(d)
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
    if ((byDay.get(localDateKeySafe(d)) ?? 0) > 0) {
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

function localDateKeySafe(d: Date = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

/** consecutive days at/above the daily goal — today only counts once reached */
function goalStreakFromLog(log: FocusLogEntry[], goalMin: number): number {
  const byDay = new Map<string, number>()
  for (const e of log) byDay.set(e.date, (byDay.get(e.date) ?? 0) + e.focusMinutes)
  const today = localDateKeySafe()
  let streak = 0
  let offset = (byDay.get(today) ?? 0) >= goalMin ? 0 : 1 // skip an in-progress today
  for (;;) {
    const d = new Date()
    d.setDate(d.getDate() - offset)
    if ((byDay.get(localDateKeySafe(d)) ?? 0) >= goalMin) {
      streak++
      offset++
    } else break
    if (offset > 3650) break
  }
  return streak
}

export function FocusTimerStats({ className = '' }: { className?: string }) {
  const log = useFocusLog()
  const settings = useFocusSettings()
  const stats = useMemo(() => summarizeFocusLog(log), [log])
  const maxBar = Math.max(60, ...stats.week.map((d) => d.minutes))
  const goalPct = Math.min(100, Math.round((stats.todayMinutes / settings.dailyGoalMin) * 100))
  const goalLeft = Math.max(0, settings.dailyGoalMin - stats.todayMinutes)

  // goal streak — consecutive days at/above the daily goal (today only counts
  // once it's actually reached, so an in-progress day never breaks the run)
  const goalStreak = useMemo(() => goalStreakFromLog(log, settings.dailyGoalMin), [log, settings.dailyGoalMin])
  const bestWeek = Math.max(0, ...stats.week.map((d) => d.minutes))
  const activeWeekDays = stats.week.filter((d) => d.minutes > 0).length
  const RING_R = 52
  const RING_C = 2 * Math.PI * RING_R

  return (
    <div className={`rounded-3xl border border-border/80 bg-card p-5 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-bold">Deep focus</span>
        {goalStreak >= 2 ? (
          <span className="flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-1 text-[11px] font-bold text-amber-600 dark:text-amber-300">
            <Trophy className="h-3 w-3" aria-hidden />
            {goalStreak}× goal
          </span>
        ) : (
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-300">
            <Flame className="h-3 w-3" aria-hidden />
            {stats.streakDays}-day streak
          </span>
        )}
      </div>

      {/* today's minutes inside the daily-goal ring */}
      <div className="mt-3 flex items-center gap-4">
        <svg
          viewBox="0 0 120 120"
          className="h-[118px] w-[118px] shrink-0 -rotate-90"
          role="img"
          aria-label={`Daily goal ${goalPct}% — ${stats.todayMinutes} of ${settings.dailyGoalMin} minutes`}
        >
          <circle cx="60" cy="60" r={RING_R} fill="none" strokeWidth="9" className="stroke-muted" />
          <circle
            cx="60"
            cy="60"
            r={RING_R}
            fill="none"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={RING_C}
            strokeDashoffset={RING_C * (1 - goalPct / 100)}
            stroke={goalPct >= 100 ? '#2dd4bf' : '#34d399'}
            className="transition-[stroke-dashoffset] duration-700"
          />
          <text x="60" y="54" textAnchor="middle" fontSize="30" className="rotate-90 fill-foreground font-black" style={{ transformOrigin: '60px 60px' }}>
            {stats.todayMinutes}
          </text>
          <text x="60" y="72" textAnchor="middle" fontSize="11" className="rotate-90 fill-muted-foreground font-bold" style={{ transformOrigin: '60px 60px' }}>
            {goalPct >= 100 ? 'goal 🎯' : `of ${settings.dailyGoalMin}m`}
          </text>
        </svg>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold">focus min today</p>
          <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">
            {goalLeft > 0 ? (
              <>{goalLeft}m to the daily goal</>
            ) : (
              <span className="font-bold text-emerald-600 dark:text-emerald-300">goal reached — bank the bonus 🎯</span>
            )}
          </p>
          {/* badge row */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-muted/40 px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
              <Flame className="h-2.5 w-2.5 text-orange-400" aria-hidden /> {stats.streakDays}d streak
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-muted/40 px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
              <Trophy className="h-2.5 w-2.5 text-amber-400" aria-hidden /> {goalStreak}× goal
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-muted/40 px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
              <CalendarDays className="h-2.5 w-2.5 text-emerald-400" aria-hidden /> best day {bestWeek}m
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-muted/40 px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
              <Hourglass className="h-2.5 w-2.5 text-sky-400" aria-hidden /> {(stats.totalMinutes / 60).toFixed(1)}h all-time
            </span>
          </div>
        </div>
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
          <Target className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
          <span className="text-sm font-black tabular-nums">{activeWeekDays}/7</span>
          <span className="text-[10px] font-medium text-muted-foreground">active days</span>
        </span>
        <span className="flex flex-col items-center gap-0.5 rounded-2xl border border-border/70 bg-muted/30 px-2 py-2.5 text-center">
          <Hourglass className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
          <span className="text-sm font-black tabular-nums">
            {activeWeekDays > 0 ? Math.round(stats.weekMinutes / activeWeekDays) : 0}
          </span>
          <span className="text-[10px] font-medium text-muted-foreground">avg / active day</span>
        </span>
      </div>

      <p className="mt-3 text-center text-[10.5px] text-muted-foreground/70">
        Focus HQ has per-subject analytics and your to-do list.
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  <FocusTimerMount /> — app-level mount point                        */
/* ------------------------------------------------------------------ */

/**
 * Mount this ONCE at the app root (page.tsx, right before <ScrollTopButton />).
 * Renders the floating launcher + widget + stats sheet; only one instance
 * ever paints thanks to the slot claim.
 */
export function FocusTimerMount() {
  return <FocusTimer />
}
