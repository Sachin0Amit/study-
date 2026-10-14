'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ConciergeBell,
  ListOrdered,
  Lightbulb,
  Pause,
  Play,
  RotateCcw,
  StepForward,
  TriangleAlert,
  Unlink,
  User,
  UserX,
  Utensils,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

/* ------------------------------------------------------------------ */
/*  Model — Silberschatz 10th ed., §7.1.3 (Dining-Philosophers)        */
/* ------------------------------------------------------------------ */

type PhilState = 'thinking' | 'hungry' | 'one' | 'eating' | 'dead'
type Mode = 'naive' | 'ordered' | 'waiter'

interface Phil {
  state: PhilState
  timer: number // ms remaining (think / eat duration, or reach delay in 'one')
  seated: boolean // waiter mode: admitted to the dining room (max 4)
  meals: number
}

interface SimState {
  phils: Phil[]
  forkOwner: Array<number | null> // fork j is held by philosopher i (or on the table)
  mode: Mode
  deadlocked: boolean
  clock: number // simulated ms
}

const N = 5
const TICK_MS = 100
const THINK_MIN = 1000
const THINK_MAX = 3000
const EAT_MIN = 1000
const EAT_MAX = 2000
const REACH_MS = 450 // pause between grabbing the first and second fork

const rand = (a: number, b: number) => a + Math.random() * (b - a)
const leftFork = (i: number) => i
const rightFork = (i: number) => (i + 4) % N

/** First fork grabbed by philosopher i. In ordered mode, P5 (i = 4) picks
 *  the RIGHT fork first — breaking the circular wait. */
function firstFork(i: number, mode: Mode): number {
  return mode === 'ordered' && i === 4 ? rightFork(i) : leftFork(i)
}
function secondFork(i: number, mode: Mode): number {
  return firstFork(i, mode) === leftFork(i) ? rightFork(i) : leftFork(i)
}

function cloneSim(s: SimState): SimState {
  return {
    mode: s.mode,
    clock: s.clock,
    deadlocked: s.deadlocked,
    forkOwner: [...s.forkOwner],
    phils: s.phils.map((p) => ({ ...p })),
  }
}

function makeInitial(mode: Mode): SimState {
  return {
    mode,
    phils: Array.from({ length: N }, () => ({
      state: 'thinking' as PhilState,
      timer: rand(600, 1600),
      seated: false,
      meals: 0,
    })),
    forkOwner: Array(N).fill(null),
    deadlocked: false,
    clock: 0,
  }
}

function simSig(s: SimState): string {
  return s.phils.map((p) => p.state).join('') + (s.deadlocked ? 'D' : '')
}

/** Advance the simulation by dt simulated ms. */
function advance(s: SimState, dt: number): SimState {
  if (s.deadlocked) return s
  const next = cloneSim(s)
  next.clock += dt
  for (let i = 0; i < N; i++) {
    const p = next.phils[i]
    if (p.state === 'dead') continue

    if (p.state === 'thinking') {
      p.timer -= dt
      if (p.timer <= 0) p.state = 'hungry'
    }

    if (p.state === 'hungry') {
      let mayGrab = true
      if (next.mode === 'waiter' && !p.seated) {
        const seatedCount = next.phils.filter((q) => q.seated).length
        if (seatedCount < N - 1) {
          p.seated = true
        } else {
          mayGrab = false // dining room is full — keep waiting outside
        }
      }
      if (mayGrab) {
        const f = firstFork(i, next.mode)
        if (next.forkOwner[f] === null) {
          next.forkOwner[f] = i
          p.state = 'one'
          p.timer = REACH_MS
        }
      }
    }

    if (p.state === 'one') {
      p.timer -= dt
      if (p.timer <= 0) {
        const f = secondFork(i, next.mode)
        if (next.forkOwner[f] === null) {
          next.forkOwner[f] = i
          p.state = 'eating'
          p.timer = rand(EAT_MIN, EAT_MAX)
          p.meals += 1
        }
      }
    }

    if (p.state === 'eating') {
      p.timer -= dt
      if (p.timer <= 0) {
        for (let j = 0; j < N; j++) {
          if (next.forkOwner[j] === i) next.forkOwner[j] = null
        }
        p.seated = false
        p.state = 'thinking'
        p.timer = rand(THINK_MIN, THINK_MAX)
      }
    }
  }

  // Deadlock detection (naive mode): every living philosopher holds exactly
  // one fork, has finished reaching for the second, and none is free.
  if (next.mode === 'naive') {
    const alive = next.phils.filter((p) => p.state !== 'dead')
    if (alive.length >= 2 && alive.every((p) => p.state === 'one' && p.timer <= 0)) {
      next.deadlocked = true
    }
  }
  return next
}

/** Fast-forward in small steps until any philosopher changes state. */
function stepToEvent(s: SimState): SimState {
  let cur = s
  const sig0 = simSig(s)
  for (let k = 0; k < 100; k++) {
    if (cur.deadlocked) break
    const next = advance(cur, 50)
    if (simSig(next) !== sig0) return next
    cur = next
  }
  return cur
}

/** Force every living philosopher into the hungry state at the same instant
 *  (releasing any forks held) — the reliable way to trigger the naive deadlock. */
function allHungryNow(s: SimState): SimState {
  const next = cloneSim(s)
  for (let i = 0; i < N; i++) {
    const p = next.phils[i]
    if (p.state === 'dead') continue
    for (let j = 0; j < N; j++) {
      if (next.forkOwner[j] === i) next.forkOwner[j] = null
    }
    p.seated = false
    p.state = 'hungry'
    p.timer = 0
  }
  return next
}

/** Kill the first living philosopher, releasing its forks. */
function killFirstAlive(s: SimState): SimState {
  const i = s.phils.findIndex((p) => p.state !== 'dead')
  if (i < 0) return s
  const next = cloneSim(s)
  for (let j = 0; j < N; j++) {
    if (next.forkOwner[j] === i) next.forkOwner[j] = null
  }
  const p = next.phils[i]
  p.state = 'dead'
  p.seated = false
  p.timer = 0
  next.deadlocked = false
  return next
}

/* ------------------------------------------------------------------ */
/*  Visual constants                                                   */
/* ------------------------------------------------------------------ */

const CX = 200
const CY = 200
const PHIL_R = 140
const FORK_R = 96
const TABLE_R = 68
const PLATE_R = 53

const PHIL_COLORS = ['#34d399', '#2dd4bf', '#fbbf24', '#fb923c', '#a3e635']

const STATE_FILL: Record<PhilState, string> = {
  thinking: 'rgba(39,39,42,0.9)',
  hungry: 'rgba(120,53,15,0.55)',
  one: 'rgba(124,45,18,0.55)',
  eating: 'rgba(6,78,59,0.6)',
  dead: 'rgba(24,24,27,0.5)',
}
const STATE_STROKE: Record<PhilState, string> = {
  thinking: '#52525b',
  hungry: '#f59e0b',
  one: '#f97316',
  eating: '#10b981',
  dead: '#3f3f46',
}
const STATE_ICON: Record<PhilState, string> = {
  thinking: 'text-zinc-400',
  hungry: 'text-amber-300',
  one: 'text-orange-300',
  eating: 'text-emerald-300',
  dead: 'text-zinc-600',
}
const STATE_LABEL: Record<PhilState, string> = {
  thinking: 'thinking',
  hungry: 'hungry — waiting for a fork',
  one: 'holding one fork',
  eating: 'eating',
  dead: 'dead',
}

function philXY(i: number): { x: number; y: number } {
  const a = ((-90 + i * 72) * Math.PI) / 180
  return { x: CX + PHIL_R * Math.cos(a), y: CY + PHIL_R * Math.sin(a) }
}
function forkXY(i: number): { x: number; y: number } {
  const a = ((-54 + i * 72) * Math.PI) / 180
  return { x: CX + FORK_R * Math.cos(a), y: CY + FORK_R * Math.sin(a) }
}
function plateXY(i: number): { x: number; y: number } {
  const a = ((-90 + i * 72) * Math.PI) / 180
  return { x: CX + PLATE_R * Math.cos(a), y: CY + PLATE_R * Math.sin(a) }
}
function forkLabelXY(i: number): { x: number; y: number } {
  const a = ((-54 + i * 72) * Math.PI) / 180
  return { x: CX + (FORK_R - 17) * Math.cos(a), y: CY + (FORK_R - 17) * Math.sin(a) + 3 }
}
const deg = (rad: number) => (rad * 180) / Math.PI

/* ------------------------------------------------------------------ */
/*  Reduced-motion hook                                                */
/* ------------------------------------------------------------------ */

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduced
}

/* ------------------------------------------------------------------ */
/*  Fork glyph — drawn centered on (0,0), tines pointing up            */
/* ------------------------------------------------------------------ */

function ForkGlyph({ color, held }: { color: string; held: boolean }) {
  return (
    <g
      stroke={color}
      strokeWidth={held ? 2.6 : 2}
      strokeLinecap="round"
      fill="none"
      style={{ transition: 'stroke 250ms' }}
    >
      <line x1={-4.5} y1={-16} x2={-4.5} y2={-7} />
      <line x1={0} y1={-16} x2={0} y2={-7} />
      <line x1={4.5} y1={-16} x2={4.5} y2={-7} />
      <line x1={-5} y1={-7} x2={5} y2={-7} />
      <line x1={0} y1={-6} x2={0} y2={15} strokeWidth={held ? 3.2 : 2.6} />
    </g>
  )
}

/* ------------------------------------------------------------------ */
/*  Mode descriptions                                                  */
/* ------------------------------------------------------------------ */

const MODES: Array<{ key: Mode; label: string; desc: string; icon: React.ReactNode }> = [
  {
    key: 'naive',
    label: 'Naive',
    desc: 'everyone grabs the left fork first — can deadlock',
    icon: <TriangleAlert className="h-4 w-4" />,
  },
  {
    key: 'ordered',
    label: 'Ordered resources',
    desc: 'P5 picks its right fork first — deadlock-free',
    icon: <ListOrdered className="h-4 w-4" />,
  },
  {
    key: 'waiter',
    label: 'Waiter (semaphore)',
    desc: 'at most 4 philosophers may try to eat',
    icon: <ConciergeBell className="h-4 w-4" />,
  },
]

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function DiningPhilosophers() {
  const [mode, setMode] = useState<Mode>('naive')
  const [sim, setSim] = useState<SimState>(() => makeInitial('naive'))
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [hovered, setHovered] = useState<number | null>(null)
  const speedRef = useRef(1)
  const reduced = usePrefersReducedMotion()

  // user intent (play) vs actually running — a detected deadlock freezes the loop
  const running = playing && !sim.deadlocked

  // simulation loop (cleaned up on unmount / pause)
  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setSim((prev) => advance(prev, TICK_MS * speedRef.current))
    }, TICK_MS)
    return () => clearInterval(id)
  }, [running])

  const changeMode = useCallback((m: Mode) => {
    setMode(m)
    setSim(makeInitial(m))
    setPlaying(false)
    setHovered(null)
  }, [])

  const reset = useCallback(() => {
    setSim(makeInitial(mode))
    setPlaying(false)
    setHovered(null)
  }, [mode])

  const breakDeadlock = useCallback(() => {
    setSim((prev) => (prev.deadlocked ? killFirstAlive(prev) : prev))
    setPlaying(true)
  }, [])

  const killTarget = sim.phils.findIndex((p) => p.state !== 'dead')
  const seatedCount = sim.phils.filter((p) => p.seated).length
  const totalMeals = sim.phils.reduce((a, p) => a + p.meals, 0)
  const maxMeals = Math.max(1, ...sim.phils.map((p) => p.meals))
  const stateCounts: Record<string, number> = {}
  for (const p of sim.phils) stateCounts[p.state] = (stateCounts[p.state] ?? 0) + 1

  const heldForksOf = (i: number): number[] => {
    const out: number[] = []
    for (let j = 0; j < N; j++) if (sim.forkOwner[j] === i) out.push(j)
    return out
  }

  const hoverInfo =
    hovered !== null
      ? {
          i: hovered,
          p: sim.phils[hovered],
          forks: heldForksOf(hovered),
        }
      : null

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      {/* header */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Utensils className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Dining Philosophers</h3>
          <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
            Five philosophers alternate between thinking and eating, sharing five forks (Silberschatz §7.1.3). Three
            strategies — one of them deadlocks.
          </p>
        </div>
      </div>

      {/* mode selector */}
      <div className="mt-4 grid gap-2 sm:grid-cols-3" role="group" aria-label="Synchronization strategy">
        {MODES.map((m) => (
          <button
            key={m.key}
            onClick={() => changeMode(m.key)}
            aria-pressed={mode === m.key}
            className={`flex items-start gap-2.5 rounded-xl border p-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 ${
              mode === m.key
                ? 'border-emerald-500/60 bg-emerald-500/10'
                : 'border-border bg-muted/20 hover:bg-muted/40'
            }`}
          >
            <span className={mode === m.key ? 'mt-0.5 text-emerald-400' : 'mt-0.5 text-muted-foreground'}>
              {m.icon}
            </span>
            <span className="min-w-0">
              <span
                className={`block text-sm font-semibold ${
                  mode === m.key ? 'text-emerald-300' : 'text-foreground'
                }`}
              >
                {m.label}
              </span>
              <span className="block text-[11px] leading-snug text-muted-foreground">{m.desc}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* ---------------- table ---------------- */}
        <div className="flex min-w-0 flex-col gap-3">
          <div className="overflow-hidden rounded-xl border border-border bg-card p-1">
            <svg
              viewBox="0 0 400 400"
              className="mx-auto h-auto w-full max-w-[480px]"
              role="img"
              aria-label="Round dining table with five philosophers and five forks"
            >
              {/* table + bowl + plates */}
              <circle cx={CX} cy={CY} r={TABLE_R} fill="rgba(39,39,42,0.35)" stroke="#3f3f46" strokeWidth={2} />
              <circle cx={CX} cy={CY} r={24} fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.3)" strokeWidth={1.5} />
              {Array.from({ length: N }, (_, i) => {
                const q = plateXY(i)
                return <circle key={i} cx={q.x} cy={q.y} r={15} fill="rgba(39,39,42,0.5)" stroke="#3f3f46" strokeWidth={1.2} />
              })}
              {Array.from({ length: N }, (_, i) => {
                const q = forkLabelXY(i)
                return (
                  <text
                    key={i}
                    x={q.x}
                    y={q.y}
                    textAnchor="middle"
                    fontSize={9}
                    fill="#71717a"
                    fontFamily="monospace"
                    pointerEvents="none"
                  >
                    F{i + 1}
                  </text>
                )
              })}

              {/* forks */}
              {Array.from({ length: N }, (_, j) => {
                const base = forkXY(j)
                const owner = sim.forkOwner[j]
                let tx = base.x
                let ty = base.y
                let rot = deg(Math.atan2(CY - base.y, CX - base.x)) + 90
                let scale = 1
                let color = '#71717a'
                if (owner !== null) {
                  const pp = philXY(owner)
                  tx = base.x + (pp.x - base.x) * 0.38
                  ty = base.y + (pp.y - base.y) * 0.38
                  rot += 160
                  scale = 1.18
                  color = PHIL_COLORS[owner]
                }
                return (
                  <motion.g
                    key={`fork-${j}`}
                    initial={false}
                    animate={{ x: tx, y: ty, rotate: rot, scale }}
                    transition={reduced ? { duration: 0 } : { duration: 0.35, ease: 'easeOut' }}
                  >
                    <title>
                      {owner === null
                        ? `Fork F${j + 1} — on the table`
                        : `Fork F${j + 1} — held by philosopher P${owner + 1}`}
                    </title>
                    <ForkGlyph color={color} held={owner !== null} />
                  </motion.g>
                )
              })}

              {/* philosophers */}
              {Array.from({ length: N }, (_, i) => {
                const p = sim.phils[i]
                const pos = philXY(i)
                const forks = heldForksOf(i)
                const focused = hovered === i
                return (
                  <motion.g
                    key={`phil-${i}`}
                    initial={false}
                    animate={{ x: pos.x, y: pos.y, scale: p.state === 'eating' && !reduced ? 1.07 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <g
                      tabIndex={0}
                      role="img"
                      aria-label={`Philosopher P${i + 1}: ${STATE_LABEL[p.state]}, ${
                        forks.length > 0 ? `holds fork${forks.length > 1 ? 's' : ''} ${forks.map((f) => `F${f + 1}`).join(' and ')}` : 'holds no forks'
                      }, ${p.meals} meals`}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(i)}
                      onBlur={() => setHovered(null)}
                      className="cursor-help outline-none"
                    >
                      <title>{`P${i + 1} — ${STATE_LABEL[p.state]}`}</title>
                      {p.state === 'hungry' && !reduced && (
                        <circle r={30} fill="none" stroke="#f59e0b" strokeWidth={2} opacity={0.7} className="animate-pulse" />
                      )}
                      {focused && <circle r={30} fill="none" stroke="#d4d4d8" strokeWidth={1.5} opacity={0.6} />}
                      <circle
                        r={24}
                        fill={STATE_FILL[p.state]}
                        stroke={STATE_STROKE[p.state]}
                        strokeWidth={p.state === 'eating' ? 3 : 2.2}
                        style={{ transition: 'fill 250ms, stroke 250ms' }}
                      />
                      {p.state === 'dead' ? (
                        <UserX x={-11} y={-15} width={22} height={22} className={STATE_ICON[p.state]} strokeWidth={1.75} />
                      ) : (
                        <User x={-11} y={-15} width={22} height={22} className={STATE_ICON[p.state]} strokeWidth={1.75} />
                      )}
                      <text
                        y={40}
                        textAnchor="middle"
                        fontSize={13}
                        fontWeight={700}
                        fill={PHIL_COLORS[i]}
                        fontFamily="monospace"
                        pointerEvents="none"
                      >
                        P{i + 1}
                      </text>
                    </g>
                  </motion.g>
                )
              })}

              {/* tooltip for hovered philosopher */}
              {hoverInfo && (
                <g pointerEvents="none">
                  {(() => {
                    const pos = philXY(hoverInfo.i)
                    const w = 190
                    const bx = Math.max(10, Math.min(400 - w - 10, pos.x - w / 2))
                    const by = Math.max(8, Math.min(342, pos.y - 24 - 52))
                    const line2 =
                      hoverInfo.forks.length > 0
                        ? `holds ${hoverInfo.forks.map((f) => `F${f + 1}`).join(' + ')}`
                        : 'holds no forks'
                    return (
                      <g>
                        <rect
                          x={bx}
                          y={by}
                          width={w}
                          height={48}
                          rx={8}
                          fill="rgba(24,24,27,0.96)"
                          stroke={STATE_STROKE[hoverInfo.p.state]}
                          strokeWidth={1.4}
                        />
                        <text x={bx + w / 2} y={by + 19} textAnchor="middle" fontSize={12} fontWeight={700} fill={STATE_STROKE[hoverInfo.p.state]}>
                          {`P${hoverInfo.i + 1} · ${STATE_LABEL[hoverInfo.p.state]}`}
                        </text>
                        <text x={bx + w / 2} y={by + 36} textAnchor="middle" fontSize={11} fill="#a1a1aa" fontFamily="monospace">
                          {`${line2} · ${hoverInfo.p.meals} meals`}
                        </text>
                      </g>
                    )
                  })()}
                </g>
              )}
            </svg>
          </div>

          {/* status strip */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-border bg-background/50 px-3 py-2 text-xs text-muted-foreground">
            <span className="font-mono">t = {(sim.clock / 1000).toFixed(1)}s</span>
            {hoverInfo ? (
              <span>
                <span className="font-mono font-semibold text-foreground">P{hoverInfo.i + 1}</span> —{' '}
                {STATE_LABEL[hoverInfo.p.state]}
                {hoverInfo.p.state === 'hungry' && mode === 'waiter' && !hoverInfo.p.seated
                  ? ' (outside the dining room)'
                  : ''}
                {hoverInfo.forks.length > 0
                  ? `, holds ${hoverInfo.forks.map((f) => `F${f + 1}`).join(' + ')}`
                  : ', holds no forks'}
              </span>
            ) : (
              <span className="font-mono">
                {stateCounts['eating'] ?? 0} eating · {stateCounts['one'] ?? 0} one fork ·{' '}
                {stateCounts['hungry'] ?? 0} hungry · {stateCounts['thinking'] ?? 0} thinking
                {stateCounts['dead'] ? ` · ${stateCounts['dead']} dead` : ''}
              </span>
            )}
            {mode === 'waiter' && (
              <span className="font-mono text-amber-300/90">dining room {seatedCount}/{N - 1}</span>
            )}
          </div>

          {/* deadlock banner */}
          <div aria-live="polite">
            <AnimatePresence>
              {sim.deadlocked && (
                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="rounded-xl border border-rose-500/50 bg-rose-500/10 p-3"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-rose-300">
                    <TriangleAlert className="h-4 w-4" />
                    Deadlock: every philosopher holds their left fork
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-rose-200/80">
                    P1 holds F1, P2 holds F2, P3 holds F3, P4 holds F4, P5 holds F5 — and each waits for the fork on
                    their right, which a neighbor already holds. A circular wait with no way out: no philosopher can
                    ever eat again.
                  </p>
                  <div className="mt-2">
                    <Button size="sm" variant="destructive" onClick={breakDeadlock}>
                      <Unlink className="mr-1 h-4 w-4" />
                      Break deadlock (kill P{killTarget + 1})
                    </Button>
                    <span className="ml-2 text-[11px] text-rose-200/60">
                      killing one philosopher releases its forks — the chain can then unwind
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ---------------- side panel ---------------- */}
        <div className="flex flex-col gap-4">
          {/* controls */}
          <div className="rounded-xl border border-border bg-background/50 p-3">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Simulation</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Button
                size="sm"
                onClick={() => setPlaying((p) => !p)}
                disabled={sim.deadlocked}
                className="min-w-[84px]"
              >
                {running ? <Pause className="mr-1 h-4 w-4" /> : <Play className="mr-1 h-4 w-4" />}
                {running ? 'Pause' : 'Play'}
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSim((prev) => stepToEvent(prev))}
                disabled={sim.deadlocked}
                aria-label="Advance to the next event"
              >
                <StepForward className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" onClick={reset} aria-label="Reset simulation">
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSim((prev) => allHungryNow(prev))}
                disabled={sim.deadlocked}
                title="Force every living philosopher into the hungry state at the same instant (releases forks)"
              >
                <Utensils className="mr-1 h-4 w-4" />
                All hungry
              </Button>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <span className="w-14 shrink-0 text-xs text-muted-foreground">speed</span>
              <Slider
                min={0.5}
                max={4}
                step={0.5}
                value={[speed]}
                onValueChange={(v) => {
                  const nv = Math.min(4, Math.max(0.5, v[0] ?? 1))
                  speedRef.current = nv
                  setSpeed(nv)
                }}
                className="flex-1"
                aria-label="Simulation speed"
              />
              <span className="w-8 shrink-0 text-right font-mono text-xs text-muted-foreground">{speed}×</span>
            </div>
          </div>

          {/* legend */}
          <div className="rounded-xl border border-border bg-background/50 p-3">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">State legend</p>
            <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
              {(['thinking', 'hungry', 'one', 'eating'] as PhilState[]).map((st) => (
                <li key={st} className="flex items-center gap-2">
                  <span
                    className="inline-block h-3 w-3 rounded-full border-2"
                    style={{ borderColor: STATE_STROKE[st], backgroundColor: STATE_FILL[st] }}
                  />
                  <span className="capitalize">{STATE_LABEL[st]}</span>
                </li>
              ))}
              {stateCounts['dead'] ? (
                <li className="flex items-center gap-2">
                  <span
                    className="inline-block h-3 w-3 rounded-full border-2"
                    style={{ borderColor: STATE_STROKE['dead'], backgroundColor: STATE_FILL['dead'] }}
                  />
                  dead (killed to break the deadlock)
                </li>
              ) : null}
            </ul>
            <p className="mt-2 text-[11px] leading-snug text-muted-foreground/70">
              A fork is drawn in the color of the philosopher holding it and slides toward their seat.
            </p>
          </div>

          {/* meals */}
          <div className="rounded-xl border border-border bg-background/50 p-3">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Meals eaten</p>
              <span className="font-mono text-xs text-muted-foreground">Σ {totalMeals}</span>
            </div>
            <div className="mt-2 space-y-2">
              {sim.phils.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-6 shrink-0 font-mono text-xs font-bold" style={{ color: PHIL_COLORS[i] }}>
                    P{i + 1}
                  </span>
                  <div
                    className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-800"
                    role="meter"
                    aria-valuemin={0}
                    aria-valuenow={p.meals}
                    aria-label={`P${i + 1} meals`}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${(p.meals / maxMeals) * 100}%`,
                        backgroundColor: PHIL_COLORS[i],
                        opacity: p.state === 'dead' ? 0.35 : 1,
                      }}
                    />
                  </div>
                  <span className="w-6 shrink-0 text-right font-mono text-xs text-muted-foreground">{p.meals}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[11px] leading-snug text-muted-foreground/70">
              {mode === 'ordered'
                ? 'Ordered mode: P5 grabs its right fork first — watch whether it eats as often as the others.'
                : mode === 'waiter'
                  ? 'Waiter mode: with at most 4 at the table, someone always has both forks available.'
                  : 'Naive mode: perfectly symmetric — until the circular wait freezes everyone.'}
            </p>
          </div>
        </div>
      </div>

      {/* footer hint */}
      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          in Naive mode press &ldquo;All hungry&rdquo; — all five grab their left fork in the same instant and the room
          freezes in a circular wait. Break the deadlock by killing a philosopher, then switch to Ordered or Waiter mode
          and repeat: no deadlock is possible, but the meal bars show the strategies are not equally fair.
        </span>
      </div>

      {/* screen-reader live region for the verdict */}
      <div className="sr-only" role="status" aria-live="polite">
        {sim.deadlocked ? 'Deadlock: every philosopher holds their left fork.' : ''}
      </div>
    </div>
  )
}
