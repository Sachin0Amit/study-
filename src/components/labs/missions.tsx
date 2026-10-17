'use client'

/**
 * Lab Missions engine (X5 Pro) — guided objectives for every virtual lab.
 *
 * `useMissions(labId)`  — the engine hook: per-lab mission state persisted to
 *   localStorage under `sv-lab-missions-<deviceId>` (device id comes from the
 *   study store, same as the code judge). Missions unlock sequentially; labs
 *   fire objective ids at natural interaction points via `fire(objectiveId)`.
 *
 * `<LabMissions missions activeLabId onEvent />` — the collapsible panel docked
 *   top-right of a lab (full-width block on mobile). `onEvent(missionId,
 *   objectiveId)` is called whenever an objective completes, so the host lab
 *   can react (toasts, evidence, ...). Mission completion triggers a CSS
 *   sparkle celebration — no extra packages.
 */

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown, Lightbulb, Lock, RotateCcw, Sparkles, Target, Zap } from 'lucide-react'
import { RING } from './types'
import { getMissions, type LabMission, type LabObjective } from './mission-packs'
import { useStudy } from '@/store/useStudy'

export type { LabMission, LabObjective } from './mission-packs'
export { getMissions, MISSION_PACKS } from './mission-packs'

/* ------------------------------------------------------------------ */
/*  Persistence store (module-level, subscribe/notify)                 */
/* ------------------------------------------------------------------ */

/** objectiveId → done, per mission id, per lab id */
type DoneMap = Record<string, true>
type LabStore = Record<string, DoneMap>
type AllStores = Record<string, LabStore>

const EMPTY_LAB: LabStore = {}
const EMPTY_ALL: AllStores = {}

let cache: AllStores | null = null
let loadedDeviceKey: string | null = null
let initScheduled = false
const listeners = new Set<() => void>()

function deviceKey(): string {
  try {
    const deviceId = useStudy.getState().ensureDevice()
    return `sv-lab-missions-${deviceId}`
  } catch {
    return 'sv-lab-missions-anon'
  }
}

function initFromStorage(): void {
  const key = deviceKey()
  try {
    const raw = window.localStorage.getItem(key)
    cache = raw ? (JSON.parse(raw) as AllStores) : {}
  } catch {
    cache = {}
  }
  loadedDeviceKey = key
}

/**
 * Client snapshot. The first read is deferred to a macrotask so we never touch
 * localStorage (or the device store) in the middle of a render pass — the
 * component re-renders once the real data lands.
 */
function readAll(): AllStores {
  if (typeof window === 'undefined') return EMPTY_ALL
  if (cache === null) {
    if (!initScheduled) {
      initScheduled = true
      setTimeout(() => {
        initScheduled = false
        initFromStorage()
        emit()
      }, 0)
    }
    return EMPTY_ALL
  }
  return cache
}

function persist(): void {
  if (!cache || typeof window === 'undefined') return
  try {
    window.localStorage.setItem(deviceKey(), JSON.stringify(cache))
  } catch {
    /* storage full / unavailable — missions stay in-memory for the session */
  }
}

function emit(): void {
  for (const fn of listeners) fn()
}

function subscribe(fn: () => void): () => void {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

function getSnapshot(labId: string): LabStore {
  return readAll()[labId] ?? EMPTY_LAB
}

function getServerSnapshot(): LabStore {
  return EMPTY_LAB
}

/* ------------------------------------------------------------------ */
/*  Views                                                              */
/* ------------------------------------------------------------------ */

export interface MissionObjectiveView extends LabObjective {
  done: boolean
}

export interface MissionView {
  id: string
  title: string
  brief: string
  xp: number
  status: 'locked' | 'active' | 'complete'
  objectives: MissionObjectiveView[]
  doneCount: number
}

function buildViews(missions: LabMission[], store: LabStore): MissionView[] {
  let unlocked = true
  return missions.map((m) => {
    const done = store[m.id] ?? {}
    const objectives: MissionObjectiveView[] = m.objectives.map((o) => ({
      ...o,
      done: done[o.id] === true,
    }))
    const doneCount = objectives.filter((o) => o.done).length
    const complete = objectives.length > 0 && doneCount === objectives.length
    const status: MissionView['status'] = complete ? 'complete' : unlocked ? 'active' : 'locked'
    if (!complete) unlocked = false
    return { id: m.id, title: m.title, brief: m.brief, xp: m.xp, objectives, doneCount, status }
  })
}

/* ------------------------------------------------------------------ */
/*  Hook                                                               */
/* ------------------------------------------------------------------ */

export interface UseMissions {
  missions: MissionView[]
  xpEarned: number
  xpTotal: number
  completeCount: number
  /** Mark a single objective done (respects sequential unlock). */
  progress: (missionId: string, objectiveId: string) => void
  /** Fire an objective id against every mission of this lab that contains it. */
  fire: (objectiveId: string) => void
  /** Wipe progress of one mission. */
  reset: (missionId: string) => void
}

export function useMissions(labId: string): UseMissions {
  const store = useSyncExternalStore(subscribe, () => getSnapshot(labId), getServerSnapshot)

  const progress = useCallback(
    (missionId: string, objectiveId: string) => {
      const missions = getMissions(labId)
      const idx = missions.findIndex((m) => m.id === missionId)
      if (idx < 0) return
      const all = readAll()
      const lab = all[labId] ?? {}
      // sequential unlock: every previous mission must be complete
      for (let i = 0; i < idx; i++) {
        const prev = lab[missions[i].id]
        if (!missions[i].objectives.every((o) => prev?.[o.id] === true)) return
      }
      const mission = lab[missionId] ?? {}
      if (mission[objectiveId] === true) return
      const nextLab: LabStore = { ...lab, [missionId]: { ...mission, [objectiveId]: true } }
      cache = { ...all, [labId]: nextLab }
      persist()
      emit()
    },
    [labId],
  )

  const fire = useCallback(
    (objectiveId: string) => {
      for (const m of getMissions(labId)) progress(m.id, objectiveId)
    },
    [labId, progress],
  )

  const reset = useCallback(
    (missionId: string) => {
      const all = readAll()
      const lab = all[labId]
      if (!lab || !lab[missionId]) return
      const nextLab: LabStore = { ...lab }
      delete nextLab[missionId]
      cache = { ...all, [labId]: nextLab }
      persist()
      emit()
    },
    [labId],
  )

  const missions = useMemo(() => buildViews(getMissions(labId), store), [labId, store])
  const xpEarned = missions.reduce((s, m) => s + (m.status === 'complete' ? m.xp : 0), 0)
  const xpTotal = missions.reduce((s, m) => s + m.xp, 0)
  const completeCount = missions.filter((m) => m.status === 'complete').length

  return { missions, xpEarned, xpTotal, completeCount, progress, fire, reset }
}

/* ------------------------------------------------------------------ */
/*  Sparkle celebration (pure CSS keyframes, no packages)              */
/* ------------------------------------------------------------------ */

const SPARKLE_CSS = `
@keyframes sv-mission-sparkle {
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  45% { opacity: 1; }
  100% { transform: scale(1.25) rotate(200deg); opacity: 0; }
}
@keyframes sv-mission-pop {
  0% { transform: scale(0.72); opacity: 0; }
  55% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes sv-mission-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.35); }
  50% { box-shadow: 0 0 22px 4px rgba(52, 211, 153, 0.45); }
}`

const SPARKS = [
  { top: '8%', left: '12%', size: 10, delay: 0, dur: 1.5 },
  { top: '16%', left: '82%', size: 8, delay: 0.25, dur: 1.3 },
  { top: '46%', left: '6%', size: 7, delay: 0.5, dur: 1.7 },
  { top: '52%', left: '88%', size: 11, delay: 0.1, dur: 1.6 },
  { top: '82%', left: '22%', size: 8, delay: 0.4, dur: 1.4 },
  { top: '86%', left: '70%', size: 10, delay: 0.65, dur: 1.5 },
]

/* ------------------------------------------------------------------ */
/*  Panel                                                              */
/* ------------------------------------------------------------------ */

export interface LabMissionsProps {
  /** mission definitions for the active lab (see mission-packs.ts) */
  missions: LabMission[]
  activeLabId: string
  /** called with (missionId, objectiveId) whenever an objective completes */
  onEvent?: (missionId: string, objectiveId: string) => void
}

export function LabMissions({ missions, activeLabId, onEvent }: LabMissionsProps) {
  const [open, setOpen] = useState(false)
  const [hintFor, setHintFor] = useState<string | null>(null)
  const [celebrate, setCelebrate] = useState<MissionView | null>(null)
  const { reset } = useMissions(activeLabId)
  const store = useSyncExternalStore(subscribe, () => getSnapshot(activeLabId), getServerSnapshot)
  const views = useMemo(() => buildViews(missions, store), [missions, store])

  const onEventRef = useRef(onEvent)
  useEffect(() => {
    onEventRef.current = onEvent
  })

  // Newly completed missions are derived during render via React's
  // "state from previous renders" pattern (same as the os-lab step clamp) —
  // no cascading effect renders.
  const [prevStore, setPrevStore] = useState(store)
  if (prevStore !== store) {
    setPrevStore(store)
    for (const m of missions) {
      const before = prevStore[m.id] ?? {}
      const after = store[m.id] ?? {}
      const wasComplete = m.objectives.length > 0 && m.objectives.every((o) => before[o.id] === true)
      const isComplete = m.objectives.length > 0 && m.objectives.every((o) => after[o.id] === true)
      if (!wasComplete && isComplete) {
        setCelebrate(
          (c) =>
            c ?? {
              ...m,
              status: 'complete',
              doneCount: m.objectives.length,
              objectives: m.objectives.map((o) => ({ ...o, done: true })),
            },
        )
        setOpen(true)
      }
    }
  }

  // Host notification reaches outside this component, so it stays in an effect.
  const notifiedRef = useRef(store)
  useEffect(() => {
    const prev = notifiedRef.current
    if (prev === store) return
    notifiedRef.current = store
    for (const m of missions) {
      const before = prev[m.id] ?? {}
      const after = store[m.id] ?? {}
      for (const o of m.objectives) {
        if (before[o.id] !== true && after[o.id] === true) onEventRef.current?.(m.id, o.id)
      }
    }
  }, [store, missions])

  // auto-dismiss the celebration
  useEffect(() => {
    if (!celebrate) return
    const t = setTimeout(() => setCelebrate(null), 6500)
    return () => clearTimeout(t)
  }, [celebrate])

  if (missions.length === 0) return null

  const xpEarned = views.reduce((s, v) => s + (v.status === 'complete' ? v.xp : 0), 0)
  const xpTotal = views.reduce((s, v) => s + v.xp, 0)
  const totalObjectives = views.reduce((s, v) => s + v.objectives.length, 0)
  const doneObjectives = views.reduce((s, v) => s + v.doneCount, 0)
  const currentIdx = views.findIndex((v) => v.status === 'active')

  return (
    <div className="w-full md:absolute md:right-0 md:top-0 md:z-20 md:w-[320px]">
      <style dangerouslySetInnerHTML={{ __html: SPARKLE_CSS }} />
      <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/95 shadow-lg backdrop-blur">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle lab missions panel"
          className={`flex min-h-[44px] w-full items-center gap-2 px-3 py-2 text-left transition-colors hover:bg-emerald-400/5 ${RING}`}
        >
          <Target className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
          <span className="text-sm font-bold">Missions</span>
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 font-mono text-[10px] font-semibold tabular-nums text-amber-200/90">
            {xpEarned}/{xpTotal} XP
          </span>
          <span className="ml-auto font-mono text-[10px] tabular-nums text-muted-foreground">
            {doneObjectives}/{totalObjectives}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>

        {open && (
          <div className="max-h-[60vh] space-y-2 overflow-y-auto border-t border-border/70 p-2.5">
            {views.map((v, i) => (
              <div
                key={v.id}
                className={`rounded-xl border p-2.5 transition-colors ${
                  v.status === 'active'
                    ? 'border-emerald-400/40 bg-emerald-400/[0.06]'
                    : v.status === 'complete'
                      ? 'border-border/70 bg-background/40'
                      : 'border-border/50 bg-background/20 opacity-70'
                }`}
              >
                <div className="flex items-center gap-2">
                  {v.status === 'complete' ? (
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/20">
                      <Check className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
                    </span>
                  ) : v.status === 'locked' ? (
                    <Lock className="h-4 w-4 shrink-0 text-muted-foreground/70" aria-hidden="true" />
                  ) : (
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400/50 text-[9px] font-black text-emerald-300">
                      {i + 1}
                    </span>
                  )}
                  <span className="min-w-0 flex-1 truncate text-[13px] font-bold leading-tight">
                    {v.title}
                  </span>
                  <span className="shrink-0 rounded-full bg-emerald-400/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold tabular-nums text-emerald-300/90">
                    +{v.xp}
                  </span>
                  {v.status === 'complete' && (
                    <button
                      onClick={() => {
                        reset(v.id)
                        setCelebrate((c) => (c?.id === v.id ? null : c))
                      }}
                      aria-label={`Reset mission ${v.title}`}
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-muted-foreground/60 transition-colors hover:bg-rose-400/10 hover:text-rose-300 ${RING}`}
                    >
                      <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  )}
                </div>

                {v.status !== 'locked' && (
                  <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{v.brief}</p>
                )}

                <ul className="mt-2 space-y-1">
                  {v.objectives.map((o) => {
                    const key = `${v.id}:${o.id}`
                    const hintOpen = hintFor === key
                    return (
                      <li key={o.id}>
                        <button
                          onClick={() => setHintFor((h) => (h === key ? null : key))}
                          aria-expanded={hintOpen}
                          className={`flex min-h-[44px] w-full items-start gap-2 rounded-lg px-1.5 py-1 text-left transition-colors ${
                            v.status === 'locked' ? 'cursor-default' : 'hover:bg-background/60'
                          } ${RING}`}
                        >
                          <span
                            className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border ${
                              o.done
                                ? 'border-emerald-400 bg-emerald-400/25'
                                : v.status === 'locked'
                                  ? 'border-border/70'
                                  : 'border-emerald-400/40'
                            }`}
                          >
                            {o.done && <Check className="h-3 w-3 text-emerald-300" aria-hidden="true" />}
                          </span>
                          <span
                            className={`text-[12px] leading-snug ${
                              o.done ? 'text-muted-foreground line-through decoration-emerald-400/50' : 'text-foreground/90'
                            }`}
                          >
                            {o.text}
                          </span>
                        </button>
                        {hintOpen && v.status !== 'locked' && (
                          <p className="mb-1 ml-7 flex items-start gap-1.5 rounded-lg border border-amber-400/25 bg-amber-400/[0.07] px-2 py-1.5 text-[11px] leading-relaxed text-amber-200/90">
                            <Lightbulb className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
                            {o.hint}
                          </p>
                        )}
                      </li>
                    )
                  })}
                </ul>

                {v.status === 'complete' && (
                  <p className="mt-1.5 text-center font-mono text-[10px] uppercase tracking-wider text-emerald-300/80">
                    complete — +{v.xp} xp banked
                  </p>
                )}
              </div>
            ))}
            {currentIdx === -1 && (
              <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/[0.08] px-3 py-2.5 text-center text-[12px] font-semibold text-emerald-200">
                All missions complete — you run this lab now.
              </p>
            )}
          </div>
        )}
      </div>

      {/* celebration overlay */}
      <AnimatePresence>
        {celebrate && (
          <motion.div
            key={celebrate.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 flex items-center justify-center rounded-2xl border border-emerald-400/50 bg-card/95 backdrop-blur"
            style={{ animation: 'sv-mission-glow 1.6s ease-in-out infinite' }}
            role="status"
          >
            {SPARKS.map((s, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="absolute rounded-full bg-emerald-300"
                style={{
                  top: s.top,
                  left: s.left,
                  width: s.size,
                  height: s.size,
                  animation: `sv-mission-sparkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
                }}
              />
            ))}
            <div
              className="mx-4 w-full rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-3 text-center"
              style={{ animation: 'sv-mission-pop 0.5s ease-out both' }}
            >
              <Sparkles className="mx-auto h-5 w-5 text-emerald-300" aria-hidden="true" />
              <p className="mt-1 text-sm font-bold text-emerald-100">Mission complete</p>
              <p className="text-[12px] font-semibold text-emerald-200/90">{celebrate.title}</p>
              <p className="mt-1 inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 font-mono text-[11px] font-semibold tabular-nums text-amber-200/90">
                <Zap className="h-3 w-3" aria-hidden="true" /> +{celebrate.xp} XP
              </p>
              <button
                onClick={() => setCelebrate(null)}
                className={`mt-2.5 inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-bold text-emerald-950 transition-colors hover:bg-emerald-400 ${RING}`}
              >
                {currentIdx === -1 ? 'Back to the lab' : 'Next mission'}
                <ChevronDown className="h-4 w-4 -rotate-90" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LabMissions
