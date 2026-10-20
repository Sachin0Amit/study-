'use client'

/**
 * X11 — Focus HQ engine (Pomodoro-style deep work).
 *
 * The engine lives at module level (outside React) so a running session
 * survives widget/view unmounts AND full page reloads (live state is persisted
 * to localStorage and resumed on load — including sessions that finished while
 * the tab was closed: they complete silently and still bank their minutes).
 *
 * Capabilities beyond a plain timer:
 * - Task/subject/chapter LINKAGE — every focus session knows what it studied.
 * - Server logging (POST /api/focus/sessions) → "what did I study, how long".
 * - Pomodoro CYCLE counting (long break every N pomodoros, Cirillo-style).
 * - INTERRUPTION logging during a running focus session.
 * - PARTIAL credit: stopping early (≥60s) logs an honest partial session.
 * - Settings (durations / auto-chaining / sound) persisted in localStorage.
 *
 * Cross-component contract (window CustomEvents):
 *   'sv:focus-start'  detail { minutes, linkage? } → start a focus session
 *   'sv:focus-toggle'                       → show / hide the widget
 *   'sv:focus-stats'                        → open the stats sheet
 */

import { useSyncExternalStore } from 'react'
import { useStudy } from '@/store/useStudy'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type SessionKind = 'focus' | 'break'

/** What a focus session counts toward (all fields optional). */
export interface FocusLinkage {
  taskId?: string
  taskTitle?: string
  subject?: string
  subjectId?: string
  chapterId?: string
  chapterTitle?: string
}

export interface FocusSettings {
  focusMin: number
  shortMin: number
  longMin: number
  longEvery: number // pomodoros per long break
  autoBreak: boolean // auto-start the break after a focus session
  autoFocus: boolean // auto-start the next focus after a break
  sound: boolean
  scapeAutoPause: boolean // X11G: duck ambient soundscape when not in a focus block
  distractionGuard: boolean // X11J: leaving the tab mid-focus logs an interruption
  dailyGoalMin: number // daily deep-focus target in minutes
}

export interface FocusEngineState {
  kind: SessionKind
  minutes: number
  remainingMs: number
  running: boolean
  zen: boolean
  hidden: boolean
  collapsed: boolean
  statsOpen: boolean
  celebration: {
    kind: SessionKind
    minutes: number
    cycle: number
    nextLong: boolean
    interruptions: number // X11J — guard-aware count for the celebration UI
  } | null
  linkage: FocusLinkage | null
  cycle: number // pomodoros completed since the last long break
  interruptions: number // logged during the current focus session
  startedAt: number | null // wall-clock start of the session (for the record)
  accumulatedMs: number // time actually spent RUNNING (pauses excluded)
  resumedAt: number | null // start of the current run segment (null = paused/idle)
}

/* ------------------------------------------------------------------ */
/*  Event contracts                                                    */
/* ------------------------------------------------------------------ */

export const FOCUS_START_EVENT = 'sv:focus-start'
export const FOCUS_TOGGLE_EVENT = 'sv:focus-toggle'
export const FOCUS_STATS_EVENT = 'sv:focus-stats'
/** X11J distraction guard — detail { type: 'away' | 'back', awayMs } */
export const FOCUS_GUARD_EVENT = 'sv:focus-guard'

export function requestFocusStart(minutes: number, linkage?: FocusLinkage): void {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(FOCUS_START_EVENT, { detail: { minutes, linkage } }))
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
/*  Focus log (localStorage `sv-focus-log`) — daily minutes only.      */
/*  Kept for the daily briefing + widget quick stats (fast, offline).  */
/* ------------------------------------------------------------------ */

export interface FocusLogEntry {
  date: string // 'YYYY-MM-DD'
  focusMinutes: number
}

const LOG_KEY = 'sv-focus-log'

export function localDateKey(d: Date): string {
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

/** add focus minutes to today's localStorage log */
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

/** subscribe to the localStorage log (widget quick stats) */
export function useFocusLog(): FocusLogEntry[] {
  return useSyncExternalStore(subscribeFocusLog, getLogSnapshot, () => EMPTY_LOG)
}

/* ------------------------------------------------------------------ */
/*  Settings (localStorage `sv-focus-settings`)                        */
/* ------------------------------------------------------------------ */

const SETTINGS_KEY = 'sv-focus-settings'

export const DEFAULT_FOCUS_SETTINGS: FocusSettings = {
  focusMin: 25,
  shortMin: 5,
  longMin: 15,
  longEvery: 4,
  autoBreak: false,
  autoFocus: false,
  sound: true,
  scapeAutoPause: false,
  distractionGuard: true,
  dailyGoalMin: 120,
}

export function readFocusSettings(): FocusSettings {
  if (typeof localStorage === 'undefined') return DEFAULT_FOCUS_SETTINGS
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    const parsed: unknown = raw ? JSON.parse(raw) : null
    if (!parsed || typeof parsed !== 'object') return DEFAULT_FOCUS_SETTINGS
    const s = parsed as Record<string, unknown>
    const clamp = (v: unknown, min: number, max: number, fb: number) => {
      const n = Number(v)
      return Number.isFinite(n) ? Math.min(max, Math.max(min, Math.round(n))) : fb
    }
    return {
      focusMin: clamp(s.focusMin, 5, 120, 25),
      shortMin: clamp(s.shortMin, 1, 30, 5),
      longMin: clamp(s.longMin, 5, 60, 15),
      longEvery: clamp(s.longEvery, 2, 8, 4),
      autoBreak: Boolean(s.autoBreak),
      autoFocus: Boolean(s.autoFocus),
      sound: s.sound === undefined ? true : Boolean(s.sound),
      scapeAutoPause: s.scapeAutoPause === undefined ? false : Boolean(s.scapeAutoPause),
      distractionGuard: s.distractionGuard === undefined ? true : Boolean(s.distractionGuard),
      dailyGoalMin: clamp(s.dailyGoalMin, 15, 720, 120),
    }
  } catch {
    return DEFAULT_FOCUS_SETTINGS
  }
}

let settingsState: FocusSettings = readFocusSettings()
const settingsListeners = new Set<() => void>()
function subscribeSettings(fn: () => void): () => void {
  settingsListeners.add(fn)
  return () => {
    settingsListeners.delete(fn)
  }
}
function getSettingsSnapshot(): FocusSettings {
  return settingsState
}

export function useFocusSettings(): FocusSettings {
  return useSyncExternalStore(subscribeSettings, getSettingsSnapshot, () => DEFAULT_FOCUS_SETTINGS)
}

export function saveFocusSettings(patch: Partial<FocusSettings>): FocusSettings {
  settingsState = { ...settingsState, ...patch }
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsState))
  } catch {
    /* storage unavailable — settings just aren't persisted */
  }
  for (const fn of settingsListeners) fn()
  return settingsState
}

/* ------------------------------------------------------------------ */
/*  Server session log (POST /api/focus/sessions) + change signal      */
/* ------------------------------------------------------------------ */

let sessionsVersion = 0
const sessionsListeners = new Set<() => void>()
function subscribeSessions(fn: () => void): () => void {
  sessionsListeners.add(fn)
  return () => {
    sessionsListeners.delete(fn)
  }
}
function getSessionsVersion(): number {
  return sessionsVersion
}
/** Bumped whenever a session reaches the server — Focus HQ refetches. */
export function useSessionsVersion(): number {
  return useSyncExternalStore(subscribeSessions, getSessionsVersion, () => 0)
}
function bumpSessions(): void {
  sessionsVersion++
  for (const fn of sessionsListeners) fn()
}

interface PostSessionArgs {
  kind: 'focus' | 'short_break' | 'long_break'
  plannedMin: number
  actualSec: number
  completed: boolean
  interruptions: number
  linkage: FocusLinkage | null
  startedAt: number
}

function postSession(args: PostSessionArgs): void {
  if (typeof window === 'undefined') return
  const deviceId = useStudy.getState().ensureDevice()
  const started = new Date(args.startedAt)
  const payload = JSON.stringify({
    deviceId,
    kind: args.kind,
    taskId: args.linkage?.taskId ?? null,
    taskTitle: args.linkage?.taskTitle ?? null,
    subject: args.linkage?.subject ?? null,
    subjectId: args.linkage?.subjectId ?? null,
    chapterId: args.linkage?.chapterId ?? null,
    chapterTitle: args.linkage?.chapterTitle ?? null,
    plannedMin: args.plannedMin,
    actualSec: args.actualSec,
    completed: args.completed,
    interruptions: args.interruptions,
    startedAt: started.toISOString(),
    endedAt: new Date().toISOString(),
    day: localDateKey(started),
    incrementTask: true,
  })
  try {
    void fetch('/api/focus/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    })
      .then((r) => {
        if (r.ok) bumpSessions()
      })
      .catch(() => {})
  } catch {
    /* never throws — logging must not break focusing */
  }
}

/* ------------------------------------------------------------------ */
/*  Engine (module-level store — survives unmounts + reloads)          */
/* ------------------------------------------------------------------ */

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
  linkage: null,
  cycle: 0,
  interruptions: 0,
  startedAt: null,
  accumulatedMs: 0,
  resumedAt: null,
}

let engineState: FocusEngineState = INITIAL
let engineSnapshot: FocusEngineState = INITIAL
const engineListeners = new Set<() => void>()

function setEngine(patch: Partial<FocusEngineState>): void {
  engineState = { ...engineState, ...patch }
  engineSnapshot = engineState
  saveLive()
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
export function useFocusEngine(): FocusEngineState {
  return useSyncExternalStore(subscribeEngine, getEngineSnapshot, () => INITIAL)
}

/** X11G — plain (non-React) access for cross-module listeners (soundscape ducking). */
export function getFocusEngineSnapshot(): FocusEngineState {
  return engineSnapshot
}
export function subscribeFocusEngine(fn: () => void): () => void {
  return subscribeEngine(fn)
}
/** X11G — current settings without a React hook (for module-level engines). */
export function getFocusSettingsSnapshot(): FocusSettings {
  return settingsState
}
export function subscribeFocusSettings(fn: () => void): () => void {
  settingsListeners.add(fn)
  return () => {
    settingsListeners.delete(fn)
  }
}

/* ---- ticking (single module interval, drift-proof via endAt) ------- */

let tickHandle: ReturnType<typeof setInterval> | null = null
let endAt = 0
/** X11J distraction guard — wall-clock moment the tab went hidden mid-run
 *  (null = the tab is visible). Module-level so completeSession can bill a
 *  session that rang while you were away. */
let guardAwaySince: number | null = null

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
      completeSession(false)
      return
    }
    // only re-render when the displayed second flips
    if (Math.ceil(remaining / 1000) !== Math.ceil(engineState.remainingMs / 1000)) {
      setEngine({ remainingMs: remaining })
    }
  }, 250)
}

/* ---- live persistence (survives reloads) --------------------------- */

const LIVE_KEY = 'sv-focus-live'

interface LiveState {
  kind: SessionKind
  minutes: number
  endAt: number // only meaningful while running
  remainingMs: number
  running: boolean
  linkage: FocusLinkage | null
  cycle: number
  interruptions: number
  startedAt: number | null
  accumulatedMs: number
  resumedAt: number | null
}

function saveLive(): void {
  if (typeof localStorage === 'undefined') return
  const midSession = engineState.running || engineState.accumulatedMs > 0
  const live: LiveState | null = midSession
    ? {
        kind: engineState.kind,
        minutes: engineState.minutes,
        endAt,
        remainingMs: engineState.remainingMs,
        running: engineState.running,
        linkage: engineState.linkage,
        cycle: engineState.cycle,
        interruptions: engineState.interruptions,
        startedAt: engineState.startedAt,
        accumulatedMs: engineState.accumulatedMs,
        resumedAt: engineState.resumedAt,
      }
    : null
  try {
    if (live) localStorage.setItem(LIVE_KEY, JSON.stringify(live))
    else localStorage.removeItem(LIVE_KEY)
  } catch {
    /* storage unavailable */
  }
}

function restoreLive(): void {
  if (typeof localStorage === 'undefined') return
  try {
    const raw = localStorage.getItem(LIVE_KEY)
    if (!raw) return
    const live = JSON.parse(raw) as Partial<LiveState>
    if (!live || typeof live !== 'object' || !live.kind) return
    const minutes = Math.min(180, Math.max(1, Math.round(Number(live.minutes) || 25)))
    const savedEnd = Number(live.endAt) || 0
    const running = Boolean(live.running)

    if (running && savedEnd > Date.now()) {
      // still mid-session — resume the countdown
      endAt = savedEnd
      engineState = {
        ...engineState,
        kind: live.kind === 'break' ? 'break' : 'focus',
        minutes,
        remainingMs: savedEnd - Date.now(),
        running: true,
        linkage: live.linkage ?? null,
        cycle: Number(live.cycle) || 0,
        interruptions: Number(live.interruptions) || 0,
        startedAt: Number(live.startedAt) || Date.now(),
        accumulatedMs: Number(live.accumulatedMs) || 0,
        resumedAt: Date.now(),
      }
      engineSnapshot = engineState
      ensureTick()
    } else if (running) {
      // finished while the tab was closed — bank it silently
      engineState = {
        ...engineState,
        kind: live.kind === 'break' ? 'break' : 'focus',
        minutes,
        remainingMs: 0,
        running: false,
        linkage: live.linkage ?? null,
        cycle: Number(live.cycle) || 0,
        interruptions: Number(live.interruptions) || 0,
        startedAt: Number(live.startedAt) || Date.now(),
        accumulatedMs: minutes * 60_000,
        resumedAt: null,
      }
      engineSnapshot = engineState
      completeSession(true)
    } else {
      // paused mid-session — restore the remainder, still paused
      engineState = {
        ...engineState,
        kind: live.kind === 'break' ? 'break' : 'focus',
        minutes,
        remainingMs: Math.max(0, Math.min(minutes * 60_000, Number(live.remainingMs) || 0)),
        linkage: live.linkage ?? null,
        cycle: Number(live.cycle) || 0,
        interruptions: Number(live.interruptions) || 0,
        startedAt: Number(live.startedAt) || null,
        accumulatedMs: Number(live.accumulatedMs) || 0,
        resumedAt: null,
      }
      engineSnapshot = engineState
    }
  } catch {
    /* garbage in storage — start fresh */
  }
}

/* ---- soft two-tone chime — pure WebAudio, no audio files ---------- */

function chime(): void {
  if (!settingsState.sound || typeof window === 'undefined') return
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

/* ---- session completion -------------------------------------------- */

/** time actually spent running (pause-safe) */
function elapsedMs(): number {
  return engineState.accumulatedMs + (engineState.resumedAt ? Date.now() - engineState.resumedAt : 0)
}

function completeSession(silent: boolean): void {
  stopTick()
  const { kind, minutes, linkage, startedAt, cycle } = engineState
  const start = startedAt ?? Date.now() - minutes * 60_000
  const actualSec = Math.max(1, Math.round(elapsedMs() / 1000))
  let nextCycle = cycle
  // X11J — the timer rang while the tab was hidden: that absence is an
  // interruption too (billed once, never for sub-2s flickers)
  let interruptions = engineState.interruptions
  if (guardAwaySince !== null) {
    const awayMs = Date.now() - guardAwaySince
    guardAwaySince = null
    if (kind === 'focus' && settingsState.distractionGuard && awayMs >= 2_000) {
      interruptions += 1
    }
  }

  if (kind === 'focus') {
    appendFocusMinutes(minutes)
    postSession({
      kind: 'focus',
      plannedMin: minutes,
      actualSec,
      completed: true,
      interruptions,
      linkage,
      startedAt: start,
    })
    nextCycle = cycle + 1
  } else {
    const isLong = minutes >= settingsState.longMin
    postSession({
      kind: isLong ? 'long_break' : 'short_break',
      plannedMin: minutes,
      actualSec,
      completed: true,
      interruptions: 0,
      linkage: null,
      startedAt: start,
    })
    if (isLong) nextCycle = 0 // cycle resets after a long break
  }

  if (!silent) chime()

  const nextLong = nextCycle > 0 && nextCycle % settingsState.longEvery === 0
  setEngine({
    running: false,
    remainingMs: 0,
    zen: false,
    hidden: false,
    collapsed: false,
    cycle: nextCycle,
    interruptions: 0,
    startedAt: null,
    accumulatedMs: 0,
    resumedAt: null,
    celebration: silent
      ? null
      : { kind, minutes, cycle: nextCycle, nextLong, interruptions },
  })

  // auto-chaining (classic Pomodoro flow helpers)
  if (!silent) {
    if (kind === 'focus' && settingsState.autoBreak) {
      setTimeout(() => {
        if (!engineState.running) startBreakSession()
      }, 1400)
    } else if (kind === 'break' && settingsState.autoFocus) {
      setTimeout(() => {
        if (!engineState.running) startFocusSession(engineState.minutes)
      }, 1400)
    }
  }
}

/** stop early → partial credit for honest tracking (≥60s of focus) */
function logPartialIfRunning(): void {
  if (engineState.kind !== 'focus' || !engineState.startedAt) return
  const elapsed = elapsedMs()
  if (elapsed < 60_000) return
  appendFocusMinutes(Math.max(1, Math.round(elapsed / 60_000)))
  postSession({
    kind: 'focus',
    plannedMin: engineState.minutes,
    actualSec: Math.round(elapsed / 1000),
    completed: false,
    interruptions: engineState.interruptions,
    linkage: engineState.linkage,
    startedAt: engineState.startedAt,
  })
}

/* ---- engine actions ------------------------------------------------- */

export function startFocusSession(minutes?: number, linkage?: FocusLinkage): void {
  const m = Math.min(180, Math.max(1, Math.round(minutes ?? settingsState.focusMin)))
  logPartialIfRunning()
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
    linkage: linkage ?? engineState.linkage,
    interruptions: 0,
    startedAt: Date.now(),
    accumulatedMs: 0,
    resumedAt: Date.now(),
  })
  ensureTick()
}

export function startBreakSession(minutes?: number, long = false): void {
  const m = Math.min(
    60,
    Math.max(1, Math.round(minutes ?? (long ? settingsState.longMin : settingsState.shortMin)))
  )
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
    interruptions: 0,
    startedAt: Date.now(),
    accumulatedMs: 0,
    resumedAt: Date.now(),
  })
  ensureTick()
}

export function toggleRun(): void {
  if (engineState.running) {
    // pause — freeze accumulated time so pauses never count as studying
    const acc = elapsedMs()
    stopTick()
    setEngine({ running: false, remainingMs: Math.max(0, endAt - Date.now()), zen: false, accumulatedMs: acc, resumedAt: null })
  } else {
    const full = engineState.minutes * 60_000
    const remaining = engineState.remainingMs > 1000 ? engineState.remainingMs : full
    endAt = Date.now() + remaining
    setEngine({
      running: true,
      remainingMs: remaining,
      celebration: null,
      startedAt: engineState.startedAt ?? Date.now(),
      resumedAt: Date.now(),
    })
    ensureTick()
  }
}

export function selectSession(kind: SessionKind, minutes: number): void {
  logPartialIfRunning()
  stopTick()
  const m = Math.min(180, Math.max(1, Math.round(minutes)))
  setEngine({
    kind,
    minutes: m,
    remainingMs: m * 60_000,
    running: false,
    zen: false,
    celebration: null,
    interruptions: 0,
    startedAt: null,
    accumulatedMs: 0,
    resumedAt: null,
  })
}

export function resetSession(): void {
  // selectSession() itself banks any running partial credit (≥60s) before
  // resetting — logging here too would double-post the same session.
  selectSession(engineState.kind, engineState.minutes)
}

/** skip straight to the (long/short) break, banking partial focus first */
export function skipToBreak(long = false): void {
  logPartialIfRunning()
  startBreakSession(undefined, long)
}

export function setZen(on: boolean): void {
  setEngine({ zen: on && engineState.running && engineState.kind === 'focus' })
}

export function toggleWidget(): void {
  if (engineState.hidden) {
    setEngine({ hidden: false, collapsed: false })
  } else {
    setEngine({ hidden: true, zen: false })
  }
}

export function openStats(): void {
  setEngine({ statsOpen: true, hidden: false, collapsed: false, zen: false })
}

export function closeStats(): void {
  setEngine({ statsOpen: false })
}

export function collapseWidget(): void {
  setEngine({ collapsed: true })
}

export function expandWidget(): void {
  setEngine({ collapsed: false })
}

export function dismissCelebration(): void {
  setEngine({ celebration: null })
}

/** log an interruption (Cirillo: internal itch or external poke) */
export function addInterruption(): void {
  if (engineState.running && engineState.kind === 'focus') {
    setEngine({ interruptions: engineState.interruptions + 1 })
  }
}

/** attach/detach what the next focus session counts toward */
export function setFocusLinkage(linkage: FocusLinkage | null): void {
  setEngine({ linkage })
}

/**
 * Attach a journal note ("how did it go?") to a completed session.
 * With no id the note lands on the device's most recent session — this is
 * the celebration flow, where the session was banked seconds ago. Pure
 * fire-and-forget: a lost note must never break focusing.
 */
export function saveSessionNote(note: string, id?: string): void {
  if (typeof window === 'undefined') return
  const trimmed = note.trim().slice(0, 600)
  if (!trimmed) return
  const deviceId = useStudy.getState().ensureDevice()
  try {
    void fetch('/api/focus/sessions', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id ? { deviceId, id, note: trimmed } : { deviceId, note: trimmed }),
      keepalive: true,
    })
      .then((r) => {
        if (r.ok) bumpSessions()
      })
      .catch(() => {})
  } catch {
    /* never throws */
  }
}

/**
 * Today's deep-focus minutes vs the daily goal (localStorage log — fast,
 * offline-tolerant; the server stats stay the source of truth for history).
 */
export function todayGoalProgress(): { minutes: number; goal: number; pct: number; reached: boolean } {
  const today = localDateKey(new Date())
  const minutes = readFocusLog().find((e) => e.date === today)?.focusMinutes ?? 0
  const goal = settingsState.dailyGoalMin
  const pct = goal > 0 ? Math.min(100, Math.round((minutes / goal) * 100)) : 0
  return { minutes, goal, pct, reached: goal > 0 && minutes >= goal }
}

/** presets derived from the user's settings */
export function focusPresets(): { label: string; kind: SessionKind; minutes: number }[] {
  const s = settingsState
  return [
    { label: `Focus ${s.focusMin}`, kind: 'focus', minutes: s.focusMin },
    { label: 'Focus 50', kind: 'focus', minutes: 50 },
    { label: `Break ${s.shortMin}`, kind: 'break', minutes: s.shortMin },
    { label: `Break ${s.longMin}`, kind: 'break', minutes: s.longMin },
  ]
}

export function sessionLabel(kind: SessionKind, minutes: number): string {
  if (kind === 'break') return minutes >= settingsState.longMin ? 'Long break' : 'Short break'
  return minutes >= 50 ? 'Deep work' : 'Deep focus'
}

export function fmtClock(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000))
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`
}

/* ---- window event wiring (bound once, browser only) ---------------- */

if (typeof window !== 'undefined') {
  window.addEventListener(FOCUS_START_EVENT, (e: Event) => {
    const detail = (e as CustomEvent<{ minutes?: unknown; linkage?: FocusLinkage }>).detail
    const minutes = Number(detail?.minutes)
    const linkage =
      detail?.linkage && typeof detail?.linkage === 'object' ? detail.linkage : undefined
    if (Number.isFinite(minutes) && minutes > 0) startFocusSession(minutes, linkage)
    else startFocusSession(undefined, linkage)
  })
  window.addEventListener(FOCUS_TOGGLE_EVENT, () => toggleWidget())
  window.addEventListener(FOCUS_STATS_EVENT, () => openStats())
  window.addEventListener('storage', (e: StorageEvent) => {
    if (e.key === LOG_KEY) bumpLog()
    if (e.key === SETTINGS_KEY) {
      settingsState = readFocusSettings()
      for (const fn of settingsListeners) fn()
    }
  })
  // X11J distraction guard — leaving the tab mid-run is an interruption
  // (Forest-style honesty), but sub-2s flickers are forgiven. The count is
  // applied on RETURN (or at completion if the timer rang while you were
  // away), so an accidental Cmd+Tab never marks the session.
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      if (guardAwaySince === null) return
      const awayMs = Date.now() - guardAwaySince
      guardAwaySince = null
      if (
        awayMs >= 2_000 &&
        engineState.running &&
        engineState.kind === 'focus' &&
        settingsState.distractionGuard
      ) {
        addInterruption()
        if (awayMs >= 10_000) {
          window.dispatchEvent(new CustomEvent(FOCUS_GUARD_EVENT, { detail: { type: 'back', awayMs } }))
        }
      }
      return
    }
    if (engineState.running && engineState.kind === 'focus') guardAwaySince = Date.now()
  })
  // resume / silently complete a session that ran while the page was closed
  restoreLive()
}
