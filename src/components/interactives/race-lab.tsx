'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertTriangle,
  Check,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Lock,
  Pause,
  Play,
  RotateCcw,
  Shuffle,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ThreadId = 'A' | 'B'
type Mode = 'none' | 'mutex' | 'atomic'
type OpKind = 'LOAD' | 'ADD' | 'STORE' | 'LOCK' | 'UNLOCK' | 'ATOMIC'

interface MicroOp {
  thread: ThreadId
  kind: OpKind
}

interface LogEntry {
  n: number
  thread: ThreadId
  text: string
  tone: 'plain' | 'race' | 'lost' | 'lock'
}

interface Snap {
  counter: number
  regs: Record<ThreadId, number | null>
  lock: ThreadId | null
  inFlight: Record<ThreadId, boolean>
  done: Record<ThreadId, number>
  log: LogEntry[]
  lost: number
  race: boolean
}

/* ------------------------------------------------------------------ */
/*  Schedule building                                                  */
/* ------------------------------------------------------------------ */

function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** The textbook lost-update window, repeated every round: both threads
 *  LOAD before either STOREs, so each round only +1 lands instead of +2. */
function classicSchedule(n: number): MicroOp[] {
  const ops: MicroOp[] = []
  for (let i = 0; i < n; i++) {
    ops.push(
      { thread: 'A', kind: 'LOAD' },
      { thread: 'B', kind: 'LOAD' },
      { thread: 'A', kind: 'ADD' },
      { thread: 'A', kind: 'STORE' },
      { thread: 'B', kind: 'ADD' },
      { thread: 'B', kind: 'STORE' },
    )
  }
  return ops
}

/** Random interleave that still respects each thread's internal order. */
function shuffledSchedule(n: number, rng: () => number): MicroOp[] {
  const seq: Record<ThreadId, MicroOp[]> = { A: [], B: [] }
  for (let i = 0; i < n; i++) {
    for (const t of ['A', 'B'] as ThreadId[]) {
      seq[t].push({ thread: t, kind: 'LOAD' }, { thread: t, kind: 'ADD' }, { thread: t, kind: 'STORE' })
    }
  }
  const ops: MicroOp[] = []
  let ia = 0
  let ib = 0
  const total = n * 3
  while (ia < total || ib < total) {
    const pickA = ia >= total ? false : ib >= total ? true : rng() < 0.5
    if (pickA) ops.push(seq.A[ia++])
    else ops.push(seq.B[ib++])
  }
  return ops
}

function mutexSchedule(n: number, rng: () => number): MicroOp[] {
  const order: ThreadId[] = []
  let a = n
  let b = n
  while (a + b > 0) {
    const pickA = a === 0 ? false : b === 0 ? true : rng() < 0.5
    if (pickA) {
      order.push('A')
      a--
    } else {
      order.push('B')
      b--
    }
  }
  const ops: MicroOp[] = []
  for (const t of order) {
    ops.push(
      { thread: t, kind: 'LOCK' },
      { thread: t, kind: 'LOAD' },
      { thread: t, kind: 'ADD' },
      { thread: t, kind: 'STORE' },
      { thread: t, kind: 'UNLOCK' },
    )
  }
  return ops
}

function atomicSchedule(n: number, rng: () => number): MicroOp[] {
  const order: ThreadId[] = []
  let a = n
  let b = n
  while (a + b > 0) {
    const pickA = a === 0 ? false : b === 0 ? true : rng() < 0.5
    if (pickA) {
      order.push('A')
      a--
    } else {
      order.push('B')
      b--
    }
  }
  return order.map((t) => ({ thread: t, kind: 'ATOMIC' as const }))
}

function buildSchedule(mode: Mode, n: number, classic: boolean, seed: number): MicroOp[] {
  const rng = mulberry32(seed * 2654435761 + 12345)
  if (mode === 'atomic') return atomicSchedule(n, rng)
  if (mode === 'mutex') return mutexSchedule(n, rng)
  return classic ? classicSchedule(n) : shuffledSchedule(n, rng)
}

/* ------------------------------------------------------------------ */
/*  Simulation — snapshot after every micro-op                        */
/* ------------------------------------------------------------------ */

function simulate(schedule: MicroOp[]): Snap[] {
  const snaps: Snap[] = []
  let counter = 0
  const regs: Record<ThreadId, number | null> = { A: null, B: null }
  const loadVal: Record<ThreadId, number> = { A: 0, B: 0 }
  const inFlight: Record<ThreadId, boolean> = { A: false, B: false }
  const done: Record<ThreadId, number> = { A: 0, B: 0 }
  let lock: ThreadId | null = null
  let lost = 0
  const log: LogEntry[] = []
  const push = () => {
    snaps.push({
      counter,
      regs: { ...regs },
      lock,
      inFlight: { ...inFlight },
      done: { ...done },
      log: [...log],
      lost,
      race: inFlight.A && inFlight.B,
    })
  }
  push()
  schedule.forEach((op, i) => {
    const t = op.thread
    const other: ThreadId = t === 'A' ? 'B' : 'A'
    const n0 = i + 1
    switch (op.kind) {
      case 'LOCK':
        lock = t
        log.push({ n: n0, thread: t, tone: 'lock', text: `LOCK   acquire() — thread ${t} enters the critical section` })
        break
      case 'UNLOCK':
        lock = null
        log.push({ n: n0, thread: t, tone: 'lock', text: `UNLOCK release() — thread ${t} leaves the critical section` })
        break
      case 'ATOMIC':
        counter += 1
        done[t] += 1
        log.push({ n: n0, thread: t, tone: 'plain', text: `FAA    counter ← counter + 1 → ${counter} (indivisible step)` })
        break
      case 'LOAD':
        regs[t] = counter
        loadVal[t] = counter
        inFlight[t] = true
        if (inFlight[other]) {
          log.push({
            n: n0,
            thread: t,
            tone: 'race',
            text: `LOAD   reg${t} ← counter (${counter}) — RACE: thread ${other} already holds ${counter} unsaved`,
          })
        } else {
          log.push({ n: n0, thread: t, tone: 'plain', text: `LOAD   reg${t} ← counter (${counter})` })
        }
        break
      case 'ADD':
        regs[t] = (regs[t] ?? 0) + 1
        log.push({ n: n0, thread: t, tone: 'plain', text: `ADD    reg${t} ← reg${t} + 1 → ${regs[t]} (private)` })
        break
      case 'STORE': {
        const before = counter
        counter = regs[t] ?? 0
        inFlight[t] = false
        done[t] += 1
        const clobber = before - loadVal[t]
        if (clobber > 0) {
          lost += clobber
          log.push({
            n: n0,
            thread: t,
            tone: 'lost',
            text:
              `STORE  counter ← reg${t} (${counter}) — clobbers ${clobber} pending update${clobber > 1 ? 's' : ''}` +
              (before > counter ? ' and drags the counter backwards' : ''),
          })
        } else {
          log.push({ n: n0, thread: t, tone: 'plain', text: `STORE  counter ← reg${t} (${counter})` })
        }
        break
      }
    }
    push()
  })
  return snaps
}

/* ------------------------------------------------------------------ */
/*  Static program listings per mode                                   */
/* ------------------------------------------------------------------ */

const PROGRAM: Record<Mode, { kind: OpKind; label: string }[]> = {
  none: [
    { kind: 'LOAD', label: 'LOAD   reg ← counter' },
    { kind: 'ADD', label: 'ADD    reg ← reg + 1' },
    { kind: 'STORE', label: 'STORE  counter ← reg' },
  ],
  mutex: [
    { kind: 'LOCK', label: 'LOCK   acquire()' },
    { kind: 'LOAD', label: 'LOAD   reg ← counter' },
    { kind: 'ADD', label: 'ADD    reg ← reg + 1' },
    { kind: 'STORE', label: 'STORE  counter ← reg' },
    { kind: 'UNLOCK', label: 'UNLOCK release()' },
  ],
  atomic: [{ kind: 'ATOMIC', label: 'FAA    counter ← counter + 1' }],
}

const MODES: { id: Mode; label: string; icon: LucideIcon; hint: string }[] = [
  { id: 'none', label: 'No sync', icon: Shuffle, hint: 'Threads interleave freely — races possible' },
  { id: 'mutex', label: 'Mutex', icon: Lock, hint: 'A lock serializes each critical section' },
  { id: 'atomic', label: 'Atomic', icon: Zap, hint: 'Hardware fetch-and-add — one indivisible step' },
]

function threadStatus(t: ThreadId, snap: Snap, next: MicroOp | null, mode: Mode): string {
  if (!next) return 'finished'
  if (mode === 'mutex' && snap.lock !== null && snap.lock !== t && next.kind === 'LOCK') {
    return `blocked — waiting for the lock (${snap.lock})`
  }
  if (mode === 'mutex' && snap.lock === t) return 'running — holds the lock'
  switch (next.kind) {
    case 'LOAD':
      return 'reading the counter'
    case 'ADD':
      return 'adding 1 in its register'
    case 'STORE':
      return 'writing its register back'
    case 'LOCK':
      return 'trying to acquire the lock'
    case 'UNLOCK':
      return 'releasing the lock'
    case 'ATOMIC':
      return 'fetch-and-add (single step)'
  }
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function RaceLab() {
  const [mode, setMode] = useState<Mode>('none')
  const [n, setN] = useState(5)
  const [classic, setClassic] = useState(true)
  const [seed, setSeed] = useState(7)
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const logRef = useRef<HTMLDivElement>(null)

  const schedule = useMemo(() => buildSchedule(mode, n, classic, seed), [mode, n, classic, seed])
  const snaps = useMemo(() => simulate(schedule), [schedule])
  const doneAll = idx >= schedule.length
  const snap = snaps[Math.min(idx, snaps.length - 1)]

  const nextOpOf = (t: ThreadId): MicroOp | null => {
    for (let i = idx; i < schedule.length; i++) {
      if (schedule[i].thread === t) return schedule[i]
    }
    return null
  }

  // changing the scenario restarts the run
  const changeScenario = (apply: () => void) => {
    apply()
    setIdx(0)
    setPlaying(false)
  }

  // auto-run
  useEffect(() => {
    if (!playing) return
    if (idx >= schedule.length) return
    const t = setTimeout(() => {
      setIdx((i) => Math.min(i + 1, schedule.length))
      if (idx + 1 >= schedule.length) setPlaying(false)
    }, 750 / speed)
    return () => clearTimeout(t)
  }, [playing, idx, schedule.length, speed])

  // keep the trace log scrolled to the newest op
  useEffect(() => {
    const el = logRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [snap.log.length])

  const activeMode = MODES.find((m) => m.id === mode)
  if (!activeMode) return null

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Zap className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Race Condition Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Two threads increment one shared counter. Step the machine and watch a lost update happen — then fix it with a
            mutex lock or atomic fetch-and-add.
          </p>
        </div>
      </div>

      {/* config */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <div className="flex overflow-hidden rounded-lg border border-border" role="group" aria-label="Synchronization mode">
          {MODES.map((m) => {
            const Icon = m.icon
            return (
              <button
                key={m.id}
                onClick={() => changeScenario(() => setMode(m.id))}
                title={m.hint}
                className={
                  'flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition ' +
                  (mode === m.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground')
                }
              >
                <Icon className="h-3.5 w-3.5" />
                {m.label}
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-1 rounded-lg border border-border px-1 py-0.5" aria-label="Increments per thread">
          <button
            onClick={() => changeScenario(() => setN((v) => Math.max(1, v - 1)))}
            className="h-7 w-7 rounded-md text-sm text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
            aria-label="Fewer increments"
          >
            −
          </button>
          <span className="w-16 text-center font-mono text-xs text-foreground">
            n = {n}
          </span>
          <button
            onClick={() => changeScenario(() => setN((v) => Math.min(20, v + 1)))}
            className="h-7 w-7 rounded-md text-sm text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
            aria-label="More increments"
          >
            +
          </button>
        </div>

        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            changeScenario(() => {
              setMode('none')
              setClassic(true)
            })
          }
        >
          Classic lost update
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() =>
            changeScenario(() => {
              setClassic(false)
              setSeed((s) => s + 1)
            })
          }
        >
          <Shuffle className="mr-1 h-3.5 w-3.5" /> Reshuffle
        </Button>
      </div>

      {/* step machine */}
      <div className="mt-4 grid gap-3 md:grid-cols-[1fr_minmax(190px,220px)_1fr]">
        <ThreadCard id="A" snap={snap} next={nextOpOf('A')} n={n} mode={mode} />
        <div className="order-first md:order-none">
          <CounterCard snap={snap} mode={mode} n={n} doneAll={doneAll} />
        </div>
        <ThreadCard id="B" snap={snap} next={nextOpOf('B')} n={n} mode={mode} />
      </div>

      {/* trace log */}
      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-background/50">
        <div className="flex items-center justify-between border-b border-border px-3 py-2">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Interleaving trace
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            op {Math.min(idx, schedule.length)} / {schedule.length}
          </span>
        </div>
        <div ref={logRef} className="max-h-44 overflow-y-auto px-2 py-2 font-mono text-[11px] leading-relaxed">
          {snap.log.length === 0 && (
            <p className="px-1 py-2 text-muted-foreground/70">Press step or auto — every micro-operation lands here.</p>
          )}
          {snap.log.map((e) => (
            <div
              key={e.n}
              className={
                'flex items-baseline gap-2 rounded px-1 py-0.5 ' +
                (e.tone === 'race'
                  ? 'bg-amber-500/10 text-amber-300'
                  : e.tone === 'lost'
                    ? 'bg-rose-500/10 text-rose-300'
                    : e.tone === 'lock'
                      ? 'text-teal-300/90'
                      : 'text-muted-foreground')
              }
            >
              <span className="w-7 shrink-0 text-right text-muted-foreground/50">{String(e.n).padStart(2, '0')}</span>
              <span className={'w-3 shrink-0 font-bold ' + (e.thread === 'A' ? 'text-emerald-400' : 'text-amber-400')}>
                {e.thread}
              </span>
              <span className="min-w-0 break-words">{e.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5">
          <Button size="sm" variant="outline" onClick={() => setIdx((i) => Math.max(0, i - 1))} disabled={idx === 0} aria-label="Previous step">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            onClick={() => {
              if (doneAll) {
                setIdx(0)
                setPlaying(true)
              } else {
                setPlaying((p) => !p)
              }
            }}
            className="min-w-[92px]"
          >
            {playing ? (
              <>
                <Pause className="mr-1 h-4 w-4" /> Pause
              </>
            ) : (
              <>
                <Play className="mr-1 h-4 w-4" /> {doneAll ? 'Replay' : 'Auto'}
              </>
            )}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIdx((i) => Math.min(schedule.length, i + 1))}
            disabled={doneAll}
          >
            Step <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setIdx(0)
              setPlaying(false)
            }}
            aria-label="Reset"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">speed</span>
          <Slider
            value={[speed]}
            min={0.25}
            max={4}
            step={0.25}
            onValueChange={(v) => setSpeed(v[0] ?? 1)}
            className="w-24"
            aria-label="Playback speed"
          />
          <span className="w-8 font-mono text-[10px] text-muted-foreground">{speed.toFixed(2).replace(/\.?0+$/, '')}×</span>
        </div>
        <span className="ml-auto font-mono text-xs text-muted-foreground">{activeMode.hint}</span>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          run the classic preset — the final counter is <span className="font-mono text-foreground">n</span>, not{' '}
          <span className="font-mono text-foreground">2n</span>: every round both threads LOAD the same value, so one STORE
          overwrites the other. Switch to <span className="text-foreground">Mutex</span> or{' '}
          <span className="text-foreground">Atomic</span> and run again — the result is always 2n. Then reshuffle: some
          random interleavings lose nothing, others lose several updates at once.
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Thread card                                                        */
/* ------------------------------------------------------------------ */

function ThreadCard({ id, snap, next, n, mode }: { id: ThreadId; snap: Snap; next: MicroOp | null; n: number; mode: Mode }) {
  const isA = id === 'A'
  const tone = isA
    ? { border: 'border-emerald-500/30', bg: 'bg-emerald-500/[0.04]', text: 'text-emerald-400', reg: 'text-emerald-300', bar: 'bg-emerald-500' }
    : { border: 'border-amber-500/30', bg: 'bg-amber-500/[0.04]', text: 'text-amber-400', reg: 'text-amber-300', bar: 'bg-amber-400' }
  const status = threadStatus(id, snap, next, mode)
  const done = snap.done[id]
  const raceRing = snap.race ? ' ring-2 ring-rose-500/70' : ''

  return (
    <div className={`rounded-xl border p-3 transition-shadow sm:p-4 ${tone.border} ${tone.bg}`}>
      <div className="flex flex-wrap items-center justify-between gap-1.5">
        <span className={`text-xs font-semibold uppercase tracking-wider ${tone.text}`}>Thread {id}</span>
        <span className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-[10px] text-muted-foreground">
          {status}
        </span>
      </div>

      <div className={`mt-3 rounded-lg border border-border bg-background/60 px-3 py-2.5 transition-all ${raceRing}`}>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">register reg{id}</span>
        <div className={`font-mono text-3xl font-bold tabular-nums ${tone.reg}`}>
          {mode === 'atomic' ? '—' : (snap.regs[id] ?? '—')}
        </div>
        {snap.race && <div className="mt-1 text-[10px] font-semibold text-rose-400">same value as the other register</div>}
      </div>

      <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
        <span>
          increments done <span className="font-mono text-foreground">{done}</span>/{n}
        </span>
        <span className="font-mono">{mode === 'atomic' ? 'FAA × ' + (next ? n - done : n) : ''}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted/40">
        <div
          className={`h-full rounded-full transition-all duration-300 ${tone.bar}`}
          style={{ width: `${(done / n) * 100}%` }}
        />
      </div>

      <ol className="mt-3 flex flex-col gap-1">
        {PROGRAM[mode].map((line, i) => {
          const active = next !== null && next.kind === line.kind
          return (
            <li
              key={i}
              className={
                'rounded border px-2 py-1 font-mono text-[11px] transition-colors duration-200 ' +
                (active
                  ? 'border-amber-500/60 bg-amber-500/10 text-foreground'
                  : 'border-transparent text-muted-foreground/60')
              }
            >
              {line.label}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Shared counter card                                                */
/* ------------------------------------------------------------------ */

function CounterCard({ snap, mode, n, doneAll }: { snap: Snap; mode: Mode; n: number; doneAll: boolean }) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-xl border border-border bg-background/70 p-4 text-center">
      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">shared counter</span>
      <motion.div
        key={snap.counter}
        initial={{ scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className={
          'font-mono text-5xl font-bold tabular-nums ' +
          (snap.race ? 'text-rose-400' : snap.lost > 0 ? 'text-amber-300' : 'text-foreground')
        }
      >
        {snap.counter}
      </motion.div>
      <div className="mt-1 text-xs text-muted-foreground">
        <TeX tex={`\\text{expected} = 2n = ${2 * n}`} />
      </div>

      {mode === 'mutex' && (
        <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-teal-500/40 bg-teal-500/10 px-2.5 py-1 text-[11px] font-medium text-teal-300">
          <Lock className="h-3 w-3" />
          {snap.lock ? `lock held by ${snap.lock}` : 'lock free'}
        </div>
      )}

      <AnimatePresence>
        {snap.race && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mt-2 flex items-center gap-1.5 rounded-lg border border-rose-500/50 bg-rose-500/10 px-2.5 py-1.5 text-[11px] font-semibold text-rose-300"
          >
            <AlertTriangle className="h-3.5 w-3.5 animate-pulse" />
            RACE — both registers hold {snap.regs.A}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {doneAll && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className={
              'mt-3 w-full rounded-lg border p-3 ' +
              (snap.lost > 0 ? 'border-rose-500/40 bg-rose-500/10' : 'border-emerald-500/40 bg-emerald-500/10')
            }
          >
            {snap.lost > 0 ? (
              <>
                <div className="flex items-center justify-center gap-2 font-mono text-sm font-semibold text-rose-300">
                  <AlertTriangle className="h-4 w-4" />
                  final = {snap.counter} / {2 * n}
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-rose-200/70">
                  {snap.lost} update{snap.lost === 1 ? '' : 's'} lost — <TeX tex={`2n - ${snap.counter} = ${2 * n - snap.counter}`} />
                </p>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center gap-2 font-mono text-sm font-semibold text-emerald-300">
                  <Check className="h-4 w-4" />
                  final = {snap.counter} = 2n
                </div>
                <p className="mt-1 text-[11px] text-emerald-200/70">every increment survived — no lost updates.</p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
