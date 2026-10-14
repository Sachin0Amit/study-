'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ClipboardList, Lightbulb, Pause, Play, RotateCcw, ScrollText, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  model — five-state process lifecycle (OSC 10th ed, Ch 3)          */
/* ------------------------------------------------------------------ */

type PState = 'new' | 'ready' | 'running' | 'waiting' | 'terminated'
type EdgeId = 'admit' | 'dispatch' | 'timeout' | 'exit' | 'ioWait' | 'ioDone'
type LogKind = 'info' | 'cs' | 'exit' | 'io'
type Mode = 'explore' | 'workload'

interface EdgeDef {
  id: EdgeId
  from: PState
  to: PState
  label: string
  d: string
  lx: number
  ly: number
  anchor: 'start' | 'middle' | 'end'
}

interface LogEntry {
  id: number
  t: number
  text: string
  kind: LogKind
}

interface PcbData {
  pc: number
  regs: number[]
  priority: number
  arrival: number | null
}

interface WProc {
  pid: string
  state: 'ready' | 'running' | 'terminated'
  remaining: number
  pc: number
  regs: number[]
  priority: number
  qUsed: number
}

interface Workload {
  t: number
  cs: number
  switches: number
  useful: number
  procs: WProc[]
  queue: string[]
  running: string | null
  lastRun: string
  phase: 'dispatch' | 'tick' | 'preempt' | 'exit' | null
  note: string | null
  done: boolean
}

const QUANTUM = 4

const STATE_META: Record<PState, { name: string; caption: string; stroke: string; fill: string; chip: string }> = {
  new: { name: 'new', caption: 'being created', stroke: '#a1a1aa', fill: 'rgba(161,161,170,0.16)', chip: 'border-zinc-500/40 bg-zinc-500/10 text-zinc-300' },
  ready: { name: 'ready', caption: 'waiting for CPU', stroke: '#2dd4bf', fill: 'rgba(45,212,191,0.16)', chip: 'border-teal-500/50 bg-teal-500/10 text-teal-300' },
  running: { name: 'running', caption: 'on the CPU', stroke: '#10b981', fill: 'rgba(16,185,129,0.18)', chip: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300' },
  waiting: { name: 'waiting', caption: 'blocked on I/O', stroke: '#fbbf24', fill: 'rgba(251,191,36,0.14)', chip: 'border-amber-500/50 bg-amber-500/10 text-amber-300' },
  terminated: { name: 'terminated', caption: 'exited', stroke: '#fb7185', fill: 'rgba(251,113,133,0.15)', chip: 'border-rose-500/50 bg-rose-500/10 text-rose-300' },
}

const STATE_ORDER: PState[] = ['new', 'ready', 'running', 'waiting', 'terminated']

const BW = 104
const BH = 48
const STATE_POS: Record<PState, { x: number; y: number }> = {
  new: { x: 28, y: 76 },
  ready: { x: 240, y: 76 },
  running: { x: 468, y: 76 },
  terminated: { x: 648, y: 76 },
  waiting: { x: 358, y: 238 },
}

const EDGES: EdgeDef[] = [
  { id: 'admit', from: 'new', to: 'ready', label: 'admit', d: 'M 136 100 H 228', lx: 182, ly: 88, anchor: 'middle' },
  { id: 'dispatch', from: 'ready', to: 'running', label: 'dispatch / schedule', d: 'M 344 88 C 384 50, 428 50, 468 88', lx: 406, ly: 42, anchor: 'middle' },
  { id: 'timeout', from: 'running', to: 'ready', label: 'interrupt / timeout', d: 'M 468 112 C 428 150, 384 150, 344 112', lx: 406, ly: 164, anchor: 'middle' },
  { id: 'exit', from: 'running', to: 'terminated', label: 'exit', d: 'M 576 100 H 640', lx: 608, ly: 88, anchor: 'middle' },
  { id: 'ioWait', from: 'running', to: 'waiting', label: 'I/O or event wait', d: 'M 505 124 C 505 172, 448 190, 446 230', lx: 516, ly: 168, anchor: 'start' },
  { id: 'ioDone', from: 'waiting', to: 'ready', label: 'I/O complete', d: 'M 374 234 C 374 188, 313 168, 312 130', lx: 320, ly: 198, anchor: 'end' },
]

const LOG_KIND_BAR: Record<LogKind, string> = {
  info: 'border-l-zinc-600',
  cs: 'border-l-emerald-500',
  exit: 'border-l-rose-500',
  io: 'border-l-amber-500',
}
const LOG_KIND_TEXT: Record<LogKind, string> = {
  info: 'text-zinc-400',
  cs: 'text-emerald-200',
  exit: 'text-rose-300',
  io: 'text-amber-200',
}

const hex4 = (v: number): string => `0x${v.toString(16).toUpperCase().padStart(4, '0')}`

const mutateRegs = (regs: number[]): number[] => {
  const out = [...regs]
  const i = Math.floor(Math.random() * out.length)
  out[i] = (out[i] + 1 + Math.floor(Math.random() * 64)) & 0xffff
  return out
}

const randBurst = (): number => 3 + Math.floor(Math.random() * 5)

function initWorkload(): Workload {
  const procs: WProc[] = ['P1', 'P2', 'P3'].map((pid, i) => ({
    pid,
    state: 'ready',
    remaining: randBurst(),
    pc: 0x0400 + i * 0x100,
    regs: Array.from({ length: 4 }, () => Math.floor(Math.random() * 0x10000)),
    priority: 1 + Math.floor(Math.random() * 9),
    qUsed: 0,
  }))
  return {
    t: 0,
    cs: 0,
    switches: 0,
    useful: 0,
    procs,
    queue: ['P1', 'P2', 'P3'],
    running: null,
    lastRun: 'P1',
    phase: null,
    note: null,
    done: false,
  }
}

interface StepResult {
  next: Workload
  logs: { t: number; text: string; kind: LogKind }[]
  token: EdgeId | null
}

/** One scheduler step: either a dispatch (costly) or 1 ms of useful execution. */
function stepWorkload(w: Workload, csMs: number): StepResult {
  const procs = w.procs.map((p) => ({ ...p, regs: [...p.regs] }))
  const queue = [...w.queue]
  const base: Workload = { ...w, procs, queue }
  const cur = w.running ? procs.find((p) => p.pid === w.running) : undefined

  if (!cur) {
    if (procs.every((p) => p.state === 'terminated')) {
      return {
        next: { ...base, done: true },
        logs: [{ t: w.t, text: `workload complete — T = ${w.t} ms (useful ${w.useful} ms · overhead ${w.cs} ms)`, kind: 'info' }],
        token: null,
      }
    }
    const pid = queue.shift()
    if (!pid) return { next: w, logs: [], token: null }
    const p = procs.find((x) => x.pid === pid)
    if (!p) return { next: w, logs: [], token: null }
    p.state = 'running'
    p.qUsed = 0
    const t = w.t + csMs
    const note =
      w.lastRun !== pid && w.switches > 0
        ? `context switch: ${w.lastRun} saved to its PCB · ${pid} restored from its PCB`
        : null
    return {
      next: { ...base, t, cs: w.cs + csMs, switches: w.switches + 1, running: pid, lastRun: pid, phase: 'dispatch', note },
      logs: [{ t, text: `${pid} dispatched${csMs > 0 ? ` (+${csMs} ms switch cost)` : ''}`, kind: 'cs' }],
      token: 'dispatch',
    }
  }

  cur.remaining -= 1
  cur.pc += 4
  cur.qUsed += 1
  cur.regs = mutateRegs(cur.regs)
  const t = w.t + 1
  if (cur.remaining <= 0) {
    cur.state = 'terminated'
    return {
      next: { ...base, t, useful: w.useful + 1, running: null, phase: 'exit', note: `${cur.pid} exited — its PCB is reclaimed` },
      logs: [{ t, text: `${cur.pid} terminated`, kind: 'exit' }],
      token: 'exit',
    }
  }
  if (cur.qUsed >= QUANTUM) {
    cur.state = 'ready'
    queue.push(cur.pid)
    return {
      next: {
        ...base,
        t,
        useful: w.useful + 1,
        running: null,
        phase: 'preempt',
        note: `context switch: ${cur.pid} state saved into its PCB (PC + registers)`,
      },
      logs: [{ t, text: `${cur.pid} quantum expired (${QUANTUM} ms) → back to ready`, kind: 'info' }],
      token: 'timeout',
    }
  }
  return { next: { ...base, t, useful: w.useful + 1, phase: 'tick' }, logs: [], token: null }
}

/* ------------------------------------------------------------------ */
/*  small presentational helpers                                       */
/* ------------------------------------------------------------------ */

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </div>
  )
}

function Stat({ label, value, tone }: { label: string; value: string; tone: 'emerald' | 'amber' | 'zinc' }) {
  const tones = {
    emerald: 'text-emerald-300',
    amber: 'text-amber-300',
    zinc: 'text-zinc-200',
  }
  return (
    <div className="rounded-lg border border-border bg-muted/30 px-2.5 py-2">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`mt-0.5 font-mono text-sm font-bold ${tones[tone]}`}>{value}</div>
    </div>
  )
}

function QChip({ pid, kind, sub }: { pid: string; kind: 'ready' | 'running' | 'waiting' | 'terminated'; sub?: string }) {
  const cls = {
    ready: 'border-teal-500/50 bg-teal-500/10 text-teal-300',
    running: 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300',
    waiting: 'border-amber-500/50 bg-amber-500/10 text-amber-300',
    terminated: 'border-zinc-700 bg-zinc-800/40 text-zinc-500 line-through',
  }[kind]
  return (
    <span className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-mono text-xs ${cls}`}>
      {pid}
      {sub !== undefined && <span className="opacity-70">{sub}</span>}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  main component                                                     */
/* ------------------------------------------------------------------ */

export default function ProcessLifecycle() {
  const reduced = useReducedMotion() ?? false

  const [mode, setMode] = useState<Mode>('explore')
  const [mState, setMState] = useState<PState>('new')
  const [sel, setSel] = useState<PState>('new')
  const [busy, setBusy] = useState(false)
  const [firing, setFiring] = useState<EdgeId | null>(null)
  const [clock, setClock] = useState(0)
  const [swNote, setSwNote] = useState<string | null>(null)
  const [pcb, setPcb] = useState<PcbData>({ pc: 0x0400, regs: [0x1f2e, 0x0a55, 0xbeef, 0x0042], priority: 5, arrival: null })
  const [log, setLog] = useState<LogEntry[]>([{ id: 0, t: 0, text: 'P1 created — sitting in new', kind: 'info' }])

  const [wl, setWl] = useState<Workload | null>(null)
  const [wlRun, setWlRun] = useState(false)
  const [csMs, setCsMs] = useState(8)

  /* token animation machinery (rAF along the SVG path) */
  const pathRefs = useRef(new Map<string, SVGPathElement>())
  const tokenRef = useRef<SVGCircleElement>(null)
  const animSeq = useRef(0)
  const alive = useRef(true)

  const seqRef = useRef(0)
  const logRef = useRef<HTMLDivElement>(null)

  const pushLog = useCallback((t: number, text: string, kind: LogKind = 'info') => {
    setLog((prev) => [...prev, { id: ++seqRef.current, t, text, kind }].slice(-80))
  }, [])

  useEffect(() => {
    alive.current = true
    return () => {
      alive.current = false
      animSeq.current++
    }
  }, [])

  const animateToken = useCallback(
    (edgeId: EdgeId, onDone?: () => void) => {
      const path = pathRefs.current.get(edgeId)
      const finish = () => {
        if (onDone) onDone()
      }
      if (!path || reduced) {
        finish()
        return
      }
      const len = path.getTotalLength()
      const my = ++animSeq.current
      const t0 = performance.now()
      const dur = 620
      setFiring(edgeId)
      const step = (now: number) => {
        if (!alive.current || animSeq.current !== my) return
        const raw = Math.min(1, (now - t0) / dur)
        const p = raw < 0.5 ? 2 * raw * raw : 1 - (-2 * raw + 2) ** 2 / 2
        const pt = path.getPointAtLength(len * p)
        const c = tokenRef.current
        if (c) {
          c.setAttribute('cx', String(pt.x))
          c.setAttribute('cy', String(pt.y))
          c.setAttribute('opacity', '1')
        }
        if (raw < 1) {
          requestAnimationFrame(step)
        } else {
          if (c) c.setAttribute('opacity', '0')
          setFiring(null)
          finish()
        }
      }
      requestAnimationFrame(step)
    },
    [reduced]
  )

  /* PC ticks while the (single) process is running in explore mode */
  useEffect(() => {
    if (mode !== 'explore' || mState !== 'running') return
    const iv = window.setInterval(() => {
      setPcb((p) => ({ ...p, pc: p.pc + 4, regs: mutateRegs(p.regs) }))
      setClock((c) => c + 1)
    }, 900)
    return () => window.clearInterval(iv)
  }, [mode, mState])

  /* auto-scroll event log */
  useEffect(() => {
    const el = logRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [log])

  /* round-robin pump — one dispatch or 1 ms of execution per tick */
  useEffect(() => {
    if (mode !== 'workload' || !wlRun || !wl || wl.done) return
    const tm = window.setTimeout(() => {
      const r = stepWorkload(wl, csMs)
      r.logs.forEach((l) => pushLog(l.t, l.text, l.kind))
      if (r.token) animateToken(r.token)
      setWl(r.next)
      if (r.next.done) setWlRun(false)
    }, 750)
    return () => window.clearTimeout(tm)
  }, [mode, wlRun, wl, csMs, pushLog, animateToken])

  /* ---------------- manual transitions ---------------- */

  const commitManual = (e: EdgeDef) => {
    const t = clock + 1
    setClock(t)
    setMState(e.to)
    setSel(e.to)
    setSwNote(null)
    switch (e.id) {
      case 'admit':
        setPcb((p) => ({ ...p, arrival: t }))
        pushLog(t, 'P1 admitted to the ready queue', 'info')
        break
      case 'dispatch':
        pushLog(t, 'P1 dispatched — PCB restored (PC + R0–R3)', 'cs')
        setSwNote('context switch: PCB of P1 loaded → running')
        break
      case 'timeout':
        pushLog(t, 'P1 preempted (interrupt / timeout) → ready', 'info')
        setSwNote('context switch: PC + registers saved into PCB of P1')
        break
      case 'ioWait':
        pushLog(t, 'P1 blocked — I/O or event wait', 'io')
        break
      case 'ioDone':
        pushLog(t, 'I/O complete → P1 ready', 'io')
        break
      case 'exit':
        pushLog(t, 'P1 exited — PCB reclaimed', 'exit')
        break
    }
  }

  const fire = (e: EdgeDef) => {
    if (mode !== 'explore' || busy || e.from !== mState) return
    setBusy(true)
    animateToken(e.id, () => {
      commitManual(e)
      setBusy(false)
    })
  }

  const resetManual = () => {
    setMState('new')
    setSel('new')
    setClock(0)
    setSwNote(null)
    setBusy(false)
    setPcb({
      pc: 0x0400,
      regs: Array.from({ length: 4 }, () => Math.floor(Math.random() * 0x10000)),
      priority: 1 + Math.floor(Math.random() * 9),
      arrival: null,
    })
    pushLog(0, 'new process created — PCB allocated', 'info')
  }

  const setModeSafe = (m: Mode) => {
    setMode(m)
    if (m === 'explore') {
      setWlRun(false)
    } else if (!wl) {
      setWl(initWorkload())
      setWlRun(true)
    } else if (!wl.done) {
      setWlRun(true)
    }
  }

  const resetWorkload = () => {
    setWl(initWorkload())
    setWlRun(true)
    pushLog(0, 'workload reset — new random bursts for P1, P2, P3', 'info')
  }

  /* ---------------- derived ---------------- */

  const wlState: PState = wl ? (wl.running ? 'running' : wl.done || wl.phase === 'exit' ? 'terminated' : 'ready') : 'new'
  const curState: PState = mode === 'explore' ? mState : wlState

  const focusProc: WProc | null = useMemo(() => {
    if (mode !== 'workload' || !wl) return null
    return wl.procs.find((p) => p.pid === wl.running) ?? wl.procs.find((p) => p.pid === wl.lastRun) ?? null
  }, [mode, wl])

  const remainingOf = (pid: string): number | undefined => {
    const p = wl?.procs.find((x) => x.pid === pid)
    return p && p.state !== 'terminated' ? p.remaining : undefined
  }

  const totalT = (wl?.useful ?? 0) + (wl?.cs ?? 0)
  const pct = totalT > 0 ? Math.round(((wl?.cs ?? 0) / totalT) * 100) : 0

  /* ---------------- render ---------------- */

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
            <Workflow className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Process Lifecycle — Five-State Model</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Ch 3 · Processes — fire state transitions by hand, watch the PCB save and restore state, then run a
              round-robin workload and see context-switch overhead pile up.
            </p>
          </div>
        </div>
        <div className="flex rounded-lg border border-border bg-muted/40 p-1" role="group" aria-label="lab mode">
          {(
            [
              { m: 'explore' as Mode, label: 'Explore states' },
              { m: 'workload' as Mode, label: 'Run workload (RR)' },
            ]
          ).map((b) => (
            <button
              key={b.m}
              onClick={() => setModeSafe(b.m)}
              aria-pressed={mode === b.m}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                mode === b.m ? 'bg-emerald-600 text-white shadow' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        {/* ---------------- left: diagram + controls ---------------- */}
        <div className="flex flex-col gap-4 lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">State diagram</span>
              <span className="text-[11px] text-muted-foreground">
                {mode === 'explore' ? 'click a state · then fire a green arrow' : 'round-robin auto-stepping'}
              </span>
            </div>
            <div className="p-2">
              <svg
                viewBox="0 0 780 330"
                className="mx-auto h-auto w-full max-w-[620px]"
                aria-label="five-state process lifecycle diagram"
              >
                <defs>
                  <marker id="pl-arrow" viewBox="0 0 10 10" refX={8.5} refY={5} markerWidth={7.5} markerHeight={7.5} orient="auto-start-reverse">
                    <path d="M 0 1 L 9 5 L 0 9 z" className="fill-zinc-500" />
                  </marker>
                  <marker id="pl-arrow-go" viewBox="0 0 10 10" refX={8.5} refY={5} markerWidth={8.5} markerHeight={8.5} orient="auto-start-reverse">
                    <path d="M 0 1 L 9 5 L 0 9 z" className="fill-emerald-400" />
                  </marker>
                  <marker id="pl-arrow-hi" viewBox="0 0 10 10" refX={8.5} refY={5} markerWidth={8} markerHeight={8} orient="auto-start-reverse">
                    <path d="M 0 1 L 9 5 L 0 9 z" className="fill-amber-400" />
                  </marker>
                </defs>

                {/* creation arrow into new */}
                <g>
                  <line x1={4} y1={100} x2={22} y2={100} stroke="#71717a" strokeWidth={2} markerEnd="url(#pl-arrow)" />
                  <text x={2} y={86} fontSize={9} className="fill-zinc-500 font-mono">
                    create
                  </text>
                </g>

                {/* edges */}
                {EDGES.map((e) => {
                  const fireable = mode === 'explore' && !busy && e.from === mState
                  const wlActive = mode === 'workload' && (e.id === 'dispatch' || e.id === 'timeout' || e.id === 'exit')
                  const highlighted = !fireable && !wlActive && sel !== null && e.from === sel
                  const firingNow = firing === e.id
                  const stroke = firingNow ? '#6ee7b7' : fireable ? '#34d399' : wlActive ? '#14b8a6' : highlighted ? '#fbbf24' : '#52525b'
                  const sw = firingNow ? 4.5 : fireable ? 3 : highlighted || wlActive ? 2.5 : 2
                  const marker = firingNow || fireable ? 'url(#pl-arrow-go)' : highlighted ? 'url(#pl-arrow-hi)' : wlActive ? 'url(#pl-arrow-hi)' : 'url(#pl-arrow)'
                  const dim = !fireable && !highlighted && !wlActive && !firingNow
                  return (
                    <g
                      key={e.id}
                      onClick={() => fire(e)}
                      onKeyDown={(ev) => {
                        if ((ev.key === 'Enter' || ev.key === ' ') && fireable) {
                          ev.preventDefault()
                          fire(e)
                        }
                      }}
                      role="button"
                      tabIndex={fireable ? 0 : -1}
                      aria-label={`transition ${e.label}: ${e.from} to ${e.to}${fireable ? ' — activate to fire' : ' — not available now'}`}
                      aria-disabled={!fireable}
                      className={fireable ? 'cursor-pointer' : ''}
                      opacity={dim ? 0.45 : 1}
                      pointerEvents={fireable ? 'auto' : 'none'}
                    >
                      <path d={e.d} fill="none" stroke="transparent" strokeWidth={16} pointerEvents="stroke" />
                      <path
                        d={e.d}
                        fill="none"
                        stroke={stroke}
                        strokeWidth={sw}
                        markerEnd={marker}
                        className="transition-all"
                        ref={(el) => {
                          if (el) pathRefs.current.set(e.id, el)
                          else pathRefs.current.delete(e.id)
                        }}
                      />
                      <text
                        x={e.lx}
                        y={e.ly}
                        textAnchor={e.anchor}
                        fontSize={12}
                        fontWeight={700}
                        stroke="#09090b"
                        strokeWidth={4}
                        paintOrder="stroke"
                        className={
                          firingNow || fireable
                            ? 'fill-emerald-300 font-mono'
                            : highlighted
                              ? 'fill-amber-300 font-mono'
                              : wlActive
                                ? 'fill-teal-300 font-mono'
                                : 'fill-zinc-500 font-mono'
                        }
                      >
                        {e.label}
                      </text>
                    </g>
                  )
                })}

                {/* states */}
                {STATE_ORDER.map((id) => {
                  const pos = STATE_POS[id]
                  const meta = STATE_META[id]
                  const isCur = curState === id
                  const isSel = sel === id
                  return (
                    <g
                      key={id}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isSel}
                      aria-label={`${meta.name} state — ${meta.caption}${isCur ? '. Current process state.' : ''}`}
                      onClick={() => setSel(id)}
                      onKeyDown={(ev) => {
                        if (ev.key === 'Enter' || ev.key === ' ') {
                          ev.preventDefault()
                          setSel(id)
                        }
                      }}
                      className="cursor-pointer outline-none group focus-visible:brightness-150"
                    >
                      {isCur && id === 'running' && (
                        <rect x={pos.x - 6} y={pos.y - 6} width={BW + 12} height={BH + 12} rx={16} fill="none" stroke="#10b981" strokeWidth={2} strokeDasharray="7 5">
                          {!reduced && <animate attributeName="stroke-dashoffset" from="0" to="-48" dur="2.4s" repeatCount="indefinite" />}
                        </rect>
                      )}
                      <rect
                        x={pos.x}
                        y={pos.y}
                        width={BW}
                        height={BH}
                        rx={12}
                        fill={isCur ? meta.fill : 'var(--color-card, #18181b)'}
                        stroke={meta.stroke}
                        strokeWidth={isCur ? 3 : 1.8}
                        className="transition-all"
                      />
                      {isSel && !isCur && (
                        <rect x={pos.x - 5} y={pos.y - 5} width={BW + 10} height={BH + 10} rx={14} fill="none" stroke="#fbbf24" strokeWidth={1.6} strokeDasharray="5 4" />
                      )}
                      <text x={pos.x + BW / 2} y={pos.y + 21} textAnchor="middle" fontSize={14} fontWeight={700} className="fill-foreground font-mono">
                        {meta.name}
                      </text>
                      <text x={pos.x + BW / 2} y={pos.y + 37} textAnchor="middle" fontSize={9.5} className="fill-zinc-500">
                        {meta.caption}
                      </text>
                    </g>
                  )
                })}

                {/* workload pid badge above running */}
                {mode === 'workload' && wl?.running && (
                  <text x={STATE_POS.running.x + BW / 2} y={STATE_POS.running.y - 10} textAnchor="middle" fontSize={12} fontWeight={700} className="fill-emerald-300 font-mono">
                    {wl.running}
                  </text>
                )}

                {/* travelling token */}
                <circle ref={tokenRef} r={7} fill="#34d399" stroke="#022c22" strokeWidth={2} opacity={0} pointerEvents="none" />
              </svg>
            </div>

            {/* ready queue strip */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Ready queue</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {mode === 'workload' ? (
                  wl && wl.queue.length > 0 ? (
                    wl.queue.map((pid) => <QChip key={pid} pid={pid} kind="ready" sub={`·${remainingOf(pid) ?? 0}ms`} />)
                  ) : (
                    <span className="font-mono text-xs text-muted-foreground">empty</span>
                  )
                ) : mState === 'ready' ? (
                  <QChip pid="P1" kind="ready" />
                ) : (
                  <span className="font-mono text-xs text-muted-foreground">empty</span>
                )}
              </div>
              <span className="text-zinc-600">→</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">CPU</span>
              {mode === 'workload' ? (
                wl?.running ? (
                  <QChip pid={wl.running} kind="running" sub={`·${remainingOf(wl.running) ?? 0}ms`} />
                ) : (
                  <span className="font-mono text-xs text-muted-foreground">switching…</span>
                )
              ) : mState === 'running' ? (
                <QChip pid="P1" kind="running" />
              ) : (
                <span className="font-mono text-xs text-muted-foreground">idle</span>
              )}
              {mode === 'explore' && mState === 'waiting' && (
                <>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Waiting</span>
                  <QChip pid="P1" kind="waiting" />
                </>
              )}
              {mode === 'workload' && wl && wl.procs.some((p) => p.state === 'terminated') && (
                <>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Done</span>
                  {wl.procs
                    .filter((p) => p.state === 'terminated')
                    .map((p) => (
                      <QChip key={p.pid} pid={p.pid} kind="terminated" />
                    ))}
                </>
              )}
            </div>

            {/* legend */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 border-t border-border px-4 py-3">
              {STATE_ORDER.map((id) => (
                <span key={id} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: STATE_META[id].stroke }} />
                  <span className="font-mono text-foreground/80">{STATE_META[id].name}</span> — {STATE_META[id].caption}
                </span>
              ))}
            </div>
          </div>

          {/* controls */}
          <div className="rounded-xl border border-border bg-card p-4">
            {mode === 'explore' ? (
              <div className="flex flex-col gap-3">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Click a state to inspect its outgoing transitions (amber). Green arrows leave the current state —
                  click one to fire it and watch the PCB update. While{' '}
                  <span className="font-mono text-emerald-300">running</span>, the program counter ticks about once per
                  millisecond.
                </p>
                {mState === 'terminated' && (
                  <p className="rounded-lg border border-rose-500/30 bg-rose-500/5 px-3 py-2 text-xs text-rose-300">
                    P1 has exited and its PCB was reclaimed. Create a new process to keep exploring.
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm" variant="outline" onClick={resetManual} disabled={busy}>
                    <RotateCcw className="h-3.5 w-3.5" />
                    {mState === 'terminated' ? 'New process' : 'Reset'}
                  </Button>
                  <span className="font-mono text-[11px] text-muted-foreground">state: {mState}</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500" onClick={() => setWlRun((r) => !r)} disabled={!wl || wl.done}>
                    {wlRun ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    {wlRun ? 'Pause' : 'Run'}
                  </Button>
                  <Button size="sm" variant="outline" onClick={resetWorkload}>
                    <RotateCcw className="h-3.5 w-3.5" /> Reset
                  </Button>
                  <span className="rounded-md border border-border bg-muted/40 px-2 py-1 font-mono text-[11px] text-muted-foreground">
                    quantum = {QUANTUM} ms
                  </span>
                  {wl?.done && (
                    <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-[11px] font-semibold text-emerald-300">
                      complete
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">context-switch overhead</span>
                    <span className="font-mono text-xs text-amber-300">{csMs} ms / switch</span>
                  </div>
                  <Slider
                    aria-label="context-switch overhead in milliseconds"
                    min={0}
                    max={50}
                    step={1}
                    value={[csMs]}
                    onValueChange={(v) => setCsMs(v[0] ?? csMs)}
                    className="mt-3"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <Stat label="useful work" value={`${wl?.useful ?? 0} ms`} tone="emerald" />
                  <Stat label="switches" value={`${wl?.switches ?? 0}`} tone="zinc" />
                  <Stat label="overhead" value={`${wl?.cs ?? 0} ms`} tone="amber" />
                  <Stat label="elapsed T" value={`${totalT} ms`} tone="zinc" />
                </div>

                <div className="flex flex-col gap-1.5 rounded-lg bg-muted/30 px-3 py-2.5 sm:flex-row sm:items-center sm:gap-3">
                  <TeX tex={`\\sum t_{cs} = ${wl?.switches ?? 0} \\times ${csMs}\\,\\mathrm{ms} = ${wl?.cs ?? 0}\\,\\mathrm{ms}`} />
                  <span className="text-xs leading-relaxed text-muted-foreground">
                    {pct}% of this run is pure switching cost — no user instruction executes during{' '}
                    <TeX tex={'\\sum t_{cs}'} />.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ---------------- right: PCB + event log ---------------- */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  PCB — process control block
                </span>
              </div>
              <span className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-xs text-foreground">
                {mode === 'workload' && focusProc ? focusProc.pid : 'P1'}
              </span>
            </div>
            <div className="flex flex-col gap-3.5 p-4">
              {mode === 'workload' && !focusProc ? (
                <p className="text-xs text-muted-foreground">starting the scheduler…</p>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    <Field label="state">
                      <span
                        className={`inline-flex w-fit items-center rounded-md border px-2 py-0.5 font-mono text-xs ${
                          STATE_META[mode === 'workload' && focusProc ? focusProc.state : mState].chip
                        }`}
                      >
                        {mode === 'workload' && focusProc ? focusProc.state : mState}
                      </span>
                    </Field>
                    <Field label="program counter">
                      <span className="font-mono text-sm text-foreground">
                        {hex4(mode === 'workload' && focusProc ? focusProc.pc : pcb.pc)}
                      </span>
                    </Field>
                    <Field label="priority">
                      <span className="font-mono text-sm text-foreground">
                        {mode === 'workload' && focusProc ? focusProc.priority : pcb.priority}
                      </span>
                    </Field>
                    <Field label={mode === 'workload' ? 'remaining burst' : 'arrival time'}>
                      <span className="font-mono text-sm text-foreground">
                        {mode === 'workload'
                          ? focusProc && focusProc.state !== 'terminated'
                            ? `${focusProc.remaining} ms`
                            : '—'
                          : pcb.arrival !== null
                            ? `${pcb.arrival} ms`
                            : '—'}
                      </span>
                    </Field>
                  </div>
                  <Field label={curState === 'running' ? 'registers (live on CPU)' : 'registers (saved in PCB)'}>
                    <div className="flex flex-wrap gap-1">
                      {(mode === 'workload' && focusProc ? focusProc.regs : pcb.regs).map((v, i) => (
                        <span
                          key={i}
                          className={`rounded border px-1.5 py-0.5 font-mono text-[11px] ${
                            curState === 'running'
                              ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                              : 'border-border bg-muted/40 text-zinc-300'
                          }`}
                        >
                          R{i} {hex4(v)}
                        </span>
                      ))}
                    </div>
                  </Field>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      clock: <span className="font-mono text-foreground">{mode === 'workload' ? (wl?.t ?? 0) : clock} ms</span>
                    </span>
                    <span className="font-mono text-[10px] text-zinc-600">quantum {QUANTUM} ms</span>
                  </div>
                  {(mode === 'workload' ? wl?.note ?? null : swNote) && (
                    <motion.div
                      key={mode === 'workload' ? (wl?.note ?? '') : (swNote ?? '')}
                      initial={reduced ? false : { opacity: 0.35 }}
                      animate={{ opacity: 1 }}
                      className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-3 py-2 text-xs leading-relaxed text-amber-200/90"
                    >
                      {mode === 'workload' ? wl?.note : swNote}
                    </motion.div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* event log */}
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <ScrollText className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Event log</span>
            </div>
            <div ref={logRef} className="h-60 overflow-y-auto p-3 lg:h-auto lg:min-h-48 lg:flex-1" role="log" aria-label="process event log">
              <div className="space-y-1">
                <AnimatePresence initial={false}>
                  {log.map((entry) => (
                    <motion.div
                      key={entry.id}
                      layout
                      initial={reduced ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`border-l-2 pl-2 font-mono text-[11px] leading-relaxed ${LOG_KIND_BAR[entry.kind]} ${LOG_KIND_TEXT[entry.kind]}`}
                    >
                      <span className="text-zinc-600">t={entry.t}ms</span> {entry.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* try this */}
      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> run the workload with the overhead slider at
          0 ms, then slide it to 50 ms — the same three processes suddenly spend more time switching than executing.
          Then switch to Explore: interrupt the running process and watch the PCB save PC + registers, and dispatch
          restore them. Fire <span className="font-mono">I/O or event wait</span> to park the process in waiting until
          the I/O completes.
        </p>
      </div>
    </div>
  )
}
