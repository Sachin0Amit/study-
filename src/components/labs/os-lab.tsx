'use client'

/**
 * OS Lab — CPU scheduling + page replacement, computed for real.
 * Scheduling: FCFS, SJF (non-preemptive), Round Robin, Priority (preemptive)
 * → Gantt chart + waiting/turnaround/response table.
 * Paging: FIFO / LRU / Optimal with step-by-step playback.
 */

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Pause,
  Play,
  Plus,
  RotateCcw,
  StepForward,
  Target,
  Trash2,
} from 'lucide-react'
import { RING } from './types'
import { LabMissions, getMissions, useMissions } from './missions'

/* ------------------------------------------------------------------ */
/*  Scheduling engine                                                  */
/* ------------------------------------------------------------------ */

interface Proc {
  id: string
  arrival: number
  burst: number
  priority: number
}

type Algo = 'fcfs' | 'sjf' | 'rr' | 'prio'

interface Segment {
  pid: string | null
  start: number
  end: number
}

interface ProcStat {
  pid: string
  arrival: number
  burst: number
  priority: number
  completion: number
  turnaround: number
  waiting: number
  response: number
}

interface SchedResult {
  segments: Segment[]
  stats: ProcStat[]
  makespan: number
  avgWaiting: number
  avgTurnaround: number
  avgResponse: number
}

function finishStats(
  procs: Proc[],
  completion: Map<string, number>,
  firstRun: Map<string, number>,
  segments: Segment[],
): SchedResult {
  const stats: ProcStat[] = procs.map((p) => {
    const comp = completion.get(p.id) ?? 0
    const fr = firstRun.get(p.id) ?? p.arrival
    return {
      pid: p.id,
      arrival: p.arrival,
      burst: p.burst,
      priority: p.priority,
      completion: comp,
      turnaround: comp - p.arrival,
      waiting: comp - p.arrival - p.burst,
      response: fr - p.arrival,
    }
  })
  const avg = (f: (s: ProcStat) => number) =>
    stats.length ? stats.reduce((a, s) => a + f(s), 0) / stats.length : 0
  const makespan = segments.reduce((m, s) => Math.max(m, s.end), 0)
  return {
    segments,
    stats,
    makespan,
    avgWaiting: avg((s) => s.waiting),
    avgTurnaround: avg((s) => s.turnaround),
    avgResponse: avg((s) => s.response),
  }
}

function schedFCFS(procs: Proc[]): SchedResult {
  const order = procs.map((p, i) => ({ p, i })).sort((a, b) => a.p.arrival - b.p.arrival || a.i - b.i)
  const segments: Segment[] = []
  const completion = new Map<string, number>()
  const firstRun = new Map<string, number>()
  let t = 0
  for (const { p } of order) {
    const start = Math.max(t, p.arrival)
    if (start > t) segments.push({ pid: null, start: t, end: start })
    segments.push({ pid: p.id, start, end: start + p.burst })
    firstRun.set(p.id, start)
    completion.set(p.id, start + p.burst)
    t = start + p.burst
  }
  return finishStats(procs, completion, firstRun, segments)
}

function schedSJF(procs: Proc[]): SchedResult {
  const remaining = procs.map((p, i) => ({ ...p, i }))
  const segments: Segment[] = []
  const completion = new Map<string, number>()
  const firstRun = new Map<string, number>()
  let t = 0
  while (remaining.length > 0) {
    const ready = remaining.filter((p) => p.arrival <= t)
    if (ready.length === 0) {
      const next = Math.min(...remaining.map((p) => p.arrival))
      segments.push({ pid: null, start: t, end: next })
      t = next
      continue
    }
    ready.sort((a, b) => a.burst - b.burst || a.arrival - b.arrival || a.i - b.i)
    const p = ready[0]
    segments.push({ pid: p.id, start: t, end: t + p.burst })
    firstRun.set(p.id, t)
    completion.set(p.id, t + p.burst)
    t += p.burst
    remaining.splice(remaining.indexOf(p), 1)
  }
  return finishStats(procs, completion, firstRun, segments)
}

function schedRR(procs: Proc[], quantum: number): SchedResult {
  const rem = new Map(procs.map((p) => [p.id, p.burst]))
  const completion = new Map<string, number>()
  const firstRun = new Map<string, number>()
  const segments: Segment[] = []
  const pending = procs.map((p, i) => ({ ...p, i })).sort((a, b) => a.arrival - b.arrival || a.i - b.i)
  const queue: string[] = []
  const q = Math.max(1, Math.round(quantum))
  let t = 0
  let nextArr = 0
  const pump = () => {
    while (nextArr < pending.length && pending[nextArr].arrival <= t) {
      queue.push(pending[nextArr].id)
      nextArr++
    }
  }
  pump()
  let guard = 0
  while (queue.length > 0 || nextArr < pending.length) {
    if (queue.length === 0) {
      const jump = pending[nextArr].arrival
      if (jump > t) segments.push({ pid: null, start: t, end: jump })
      t = jump
      pump()
      continue
    }
    if (++guard > 100000) break
    const pid = queue.shift() as string
    const p = procs.find((x) => x.id === pid) as Proc
    if (!firstRun.has(pid)) firstRun.set(pid, t)
    const slice = Math.min(q, rem.get(pid) as number)
    segments.push({ pid, start: t, end: t + slice })
    t += slice
    rem.set(pid, (rem.get(pid) as number) - slice)
    pump() // arrivals during the slice enter BEFORE the preempted process
    if ((rem.get(pid) as number) > 0) queue.push(pid)
    else completion.set(pid, t)
  }
  return finishStats(procs, completion, firstRun, segments)
}

function schedPriority(procs: Proc[]): SchedResult {
  // preemptive, lower number = higher priority; ties keep the running process
  const rem = new Map(procs.map((p) => [p.id, p.burst]))
  const completion = new Map<string, number>()
  const firstRun = new Map<string, number>()
  const raw: Segment[] = []
  let t = 0
  let running: string | null = null
  let done = 0
  const guard = procs.reduce((a, p) => a + p.burst, 0) + 2
  while (done < procs.length && t <= guard * 4 + 64) {
    const ready = procs.filter((p) => p.arrival <= t && (rem.get(p.id) as number) > 0)
    if (ready.length === 0) {
      t++
      continue
    }
    let pick: Proc
    if (running && (rem.get(running) as number) > 0 && procs.find((p) => p.id === running)) {
      const cur = procs.find((p) => p.id === running) as Proc
      const better = ready.filter((p) => p.priority < cur.priority)
      pick = better.length > 0 ? better.sort((a, b) => a.priority - b.priority || a.arrival - b.arrival)[0] : cur
    } else {
      pick = ready.sort((a, b) => a.priority - b.priority || a.arrival - b.arrival || a.id.localeCompare(b.id))[0]
    }
    running = pick.id
    if (!firstRun.has(pick.id)) firstRun.set(pick.id, t)
    raw.push({ pid: pick.id, start: t, end: t + 1 })
    rem.set(pick.id, (rem.get(pick.id) as number) - 1)
    t++
    if ((rem.get(pick.id) as number) === 0) {
      completion.set(pick.id, t)
      done++
      running = null
    }
  }
  // merge consecutive same-pid unit segments
  const segments: Segment[] = []
  for (const s of raw) {
    const last = segments[segments.length - 1]
    if (last && last.pid === s.pid && last.end === s.start) last.end = s.end
    else segments.push({ ...s })
  }
  return finishStats(procs, completion, firstRun, segments)
}

const PALETTE = ['#10b981', '#14b8a6', '#f59e0b', '#fb923c', '#f43f5e', '#84cc16', '#34d399', '#2dd4bf']

const ALGOS: { id: Algo; name: string; hint: string }[] = [
  { id: 'fcfs', name: 'FCFS', hint: 'First-come, first-served — no preemption; watch the convoy effect.' },
  { id: 'sjf', name: 'SJF', hint: 'Non-preemptive shortest job first — minimal average waiting time.' },
  { id: 'rr', name: 'Round Robin', hint: 'Fixed time slices; new arrivals queue before the preempted process.' },
  { id: 'prio', name: 'Priority', hint: 'Preemptive; a lower priority number wins the CPU immediately.' },
]

/* ------------------------------------------------------------------ */
/*  Page replacement engine                                            */
/* ------------------------------------------------------------------ */

type PageAlgo = 'fifo' | 'lru' | 'opt'

interface PageStep {
  page: number
  hit: boolean
  frames: (number | null)[]
  slot: number // slot written this step (hit = slot of the page)
  evicted: number | null
  faults: number
  hits: number
}

function simulatePages(refs: number[], frameCount: number, algo: PageAlgo): PageStep[] {
  const steps: PageStep[] = []
  const frames: (number | null)[] = new Array(frameCount).fill(null)
  const order: number[] = [] // FIFO insertion order
  const lastUse = new Map<number, number>()
  let faults = 0
  let hits = 0
  refs.forEach((page, i) => {
    lastUse.set(page, i)
    const slot = frames.indexOf(page)
    if (slot >= 0) {
      hits++
      steps.push({ page, hit: true, frames: [...frames], slot, evicted: null, faults, hits })
      return
    }
    faults++
    let target = frames.indexOf(null)
    let evicted: number | null = null
    if (target < 0) {
      if (algo === 'fifo') {
        evicted = order.shift() as number
        target = frames.indexOf(evicted)
      } else if (algo === 'lru') {
        let oldest = -1
        frames.forEach((f, fi) => {
          const lu = lastUse.get(f as number) ?? -1
          if (oldest < 0 || lu < (lastUse.get(frames[oldest] as number) ?? -1)) oldest = fi
        })
        evicted = frames[oldest]
        target = oldest
      } else {
        // optimal — evict the page used farthest in the future
        let farthest = -1
        let dist = -1
        frames.forEach((f, fi) => {
          let next = Infinity
          for (let j = i + 1; j < refs.length; j++) {
            if (refs[j] === f) {
              next = j
              break
            }
          }
          if (next > dist) {
            dist = next
            farthest = fi
          }
        })
        evicted = frames[farthest]
        target = farthest
      }
      if (evicted !== null) {
        const oi = order.indexOf(evicted)
        if (oi >= 0) order.splice(oi, 1)
      }
    }
    frames[target] = page
    order.push(page)
    steps.push({ page, hit: false, frames: [...frames], slot: target, evicted, faults, hits })
  })
  return steps
}

/* ------------------------------------------------------------------ */
/*  Presets                                                            */
/* ------------------------------------------------------------------ */

const SCHED_PRESETS: { key: string; label: string; procs: Proc[] }[] = [
  {
    key: 'classic',
    label: 'FCFS vs SJF',
    procs: [
      { id: 'P1', arrival: 0, burst: 7, priority: 2 },
      { id: 'P2', arrival: 2, burst: 4, priority: 1 },
      { id: 'P3', arrival: 4, burst: 1, priority: 3 },
      { id: 'P4', arrival: 5, burst: 4, priority: 2 },
    ],
  },
  {
    key: 'convoy',
    label: 'Convoy effect',
    procs: [
      { id: 'P1', arrival: 0, burst: 24, priority: 2 },
      { id: 'P2', arrival: 1, burst: 3, priority: 1 },
      { id: 'P3', arrival: 2, burst: 3, priority: 1 },
    ],
  },
  {
    key: 'rr',
    label: 'RR quantum 2',
    procs: [
      { id: 'P1', arrival: 0, burst: 5, priority: 2 },
      { id: 'P2', arrival: 1, burst: 3, priority: 1 },
      { id: 'P3', arrival: 2, burst: 8, priority: 2 },
      { id: 'P4', arrival: 3, burst: 4, priority: 1 },
    ],
  },
  {
    key: 'prio',
    label: 'Priority preemption',
    procs: [
      { id: 'P1', arrival: 0, burst: 8, priority: 3 },
      { id: 'P2', arrival: 1, burst: 4, priority: 1 },
      { id: 'P3', arrival: 2, burst: 9, priority: 4 },
      { id: 'P4', arrival: 3, burst: 5, priority: 2 },
    ],
  },
]

const PAGE_PRESETS: { key: string; label: string; refs: string }[] = [
  { key: 'textbook', label: 'Textbook string', refs: '7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1' },
  { key: 'belady', label: 'Belady anomaly', refs: '1 2 3 4 1 2 5 1 2 3 4 5' },
  { key: 'recency', label: 'LRU vs Optimal', refs: '4 7 0 7 1 0 1 2 1 2 7 1 2' },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function OsLab() {
  const [tab, setTab] = useState<'sched' | 'pages'>('sched')
  const { fire } = useMissions('os')
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current)
    }
  }, [])

  const onMissionEvent = (missionId: string, objectiveId: string) => {
    const m = getMissions('os').find((x) => x.id === missionId)
    const o = m?.objectives.find((x) => x.id === objectiveId)
    setToast(o?.text ?? 'Objective complete')
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="relative space-y-5"
    >
      <LabMissions missions={getMissions('os')} activeLabId="os" onEvent={onMissionEvent} />

      <div className="flex items-start gap-3 md:pr-[336px]">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-400/10">
          <Cpu className="h-5 w-5 text-amber-300" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-bold leading-tight">OS Lab — schedulers &amp; paging</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            Real dispatch simulations: build a process table, race four CPU policies and read the
            Gantt timeline; then step through FIFO / LRU / Optimal page replacement frame by frame.
          </p>
        </div>
      </div>

      <div className="inline-flex rounded-xl border border-border/80 bg-card p-1" role="tablist" aria-label="OS lab mode">
        {(
          [
            { id: 'sched', label: 'CPU scheduling' },
            { id: 'pages', label: 'Page replacement' },
          ] as const
        ).map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-lg px-4 py-1.5 text-sm font-semibold transition-all ${RING} ${
              tab === t.id
                ? 'bg-amber-400/15 text-amber-200'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
        >
          {tab === 'sched' ? <SchedulerPanel fire={fire} /> : <PagingPanel fire={fire} />}
        </motion.div>
      </AnimatePresence>

      {/* objective toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="pointer-events-none absolute bottom-2 right-2 z-30 flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-card/95 px-3.5 py-2.5 text-[12px] font-semibold text-emerald-100 shadow-lg"
            role="status"
          >
            <Target className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
            <span className="max-w-[260px]">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Scheduler panel                                                    */
/* ------------------------------------------------------------------ */

function SchedulerPanel({ fire }: { fire: (id: string) => void }) {
  const [procs, setProcs] = useState<Proc[]>(SCHED_PRESETS[0].procs.map((p) => ({ ...p })))
  const [algo, setAlgo] = useState<Algo>('fcfs')
  const [quantum, setQuantum] = useState(2)

  const result = useMemo(() => {
    const valid = procs.filter((p) => p.burst > 0)
    if (valid.length === 0) return null
    switch (algo) {
      case 'fcfs':
        return schedFCFS(valid)
      case 'sjf':
        return schedSJF(valid)
      case 'rr':
        return schedRR(valid, quantum)
      case 'prio':
        return schedPriority(valid)
    }
  }, [procs, algo, quantum])

  const setProc = (i: number, patch: Partial<Proc>) =>
    setProcs((ps) => ps.map((p, j) => (j === i ? { ...p, ...patch } : p)))

  const algoHint = ALGOS.find((a) => a.id === algo)?.hint
  const colorOf = (pid: string) => PALETTE[Number(pid.replace(/\D/g, '')) % PALETTE.length] ?? '#10b981'

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* process table */}
        <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-bold">Process table</span>
            <button
              onClick={() =>
                setProcs((ps) =>
                  ps.length >= 8
                    ? ps
                    : [...ps, { id: `P${ps.length + 1}`, arrival: 0, burst: 5, priority: 2 }],
                )
              }
              disabled={procs.length >= 8}
              className={`inline-flex items-center gap-1 rounded-lg border border-border/80 bg-background/60 px-2.5 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:border-emerald-400/40 hover:text-emerald-200 disabled:cursor-not-allowed disabled:opacity-40 ${RING}`}
            >
              <Plus className="h-3.5 w-3.5" aria-hidden="true" /> Add
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[340px] text-sm">
              <thead>
                <tr className="border-b border-border/70 text-left text-[10px] uppercase tracking-wider text-muted-foreground">
                  <th className="pb-1.5 pr-2 font-semibold">PID</th>
                  <th className="pb-1.5 pr-2 font-semibold">Arrival</th>
                  <th className="pb-1.5 pr-2 font-semibold">Burst</th>
                  <th className="pb-1.5 pr-2 font-semibold">Prio</th>
                  <th className="pb-1.5" />
                </tr>
              </thead>
              <tbody>
                {procs.map((p, i) => (
                  <tr key={p.id + i} className="border-b border-border/40 last:border-0">
                    <td className="py-1 pr-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold">
                        <span className="h-2 w-2 rounded-full" style={{ background: colorOf(p.id) }} />
                        {p.id}
                      </span>
                    </td>
                    {(['arrival', 'burst', 'priority'] as const).map((f) => (
                      <td key={f} className="py-1 pr-2">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          value={p[f]}
                          onChange={(e) => setProc(i, { [f]: Math.max(0, Number(e.target.value) || 0) })}
                          aria-label={`${p.id} ${f}`}
                          className="w-14 rounded-md border border-border bg-background px-1.5 py-1 font-mono text-xs tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                        />
                      </td>
                    ))}
                    <td className="py-1 text-right">
                      <button
                        onClick={() => setProcs((ps) => (ps.length <= 1 ? ps : ps.filter((_, j) => j !== i)))}
                        disabled={procs.length <= 1}
                        aria-label={`Remove ${p.id}`}
                        className={`rounded-md p-1 text-muted-foreground/60 transition-colors hover:bg-rose-400/10 hover:text-rose-300 disabled:cursor-not-allowed disabled:opacity-30 ${RING}`}
                      >
                        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {SCHED_PRESETS.map((p) => (
              <button
                key={p.key}
                onClick={() => setProcs(p.procs.map((x) => ({ ...x })))}
                className={`rounded-lg border border-border/80 bg-background/60 px-2.5 py-1 text-[11px] font-semibold text-foreground/85 transition-all hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-200 ${RING}`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-2.5">
            <div className="grid grid-cols-2 gap-1.5" role="group" aria-label="Scheduling algorithm">
              {ALGOS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => {
                    setAlgo(a.id)
                    if (a.id === 'fcfs') fire('os-alg-fcfs')
                    else if (a.id === 'sjf') fire('os-alg-sjf')
                    else if (a.id === 'rr') fire('os-alg-rr')
                  }}
                  aria-pressed={algo === a.id}
                  className={`rounded-lg border px-2 py-1.5 text-xs font-semibold transition-all ${RING} ${
                    algo === a.id
                      ? 'border-amber-400/50 bg-amber-400/15 text-amber-200'
                      : 'border-border/80 bg-background/60 text-muted-foreground hover:border-amber-400/30 hover:text-foreground'
                  }`}
                >
                  {a.name}
                </button>
              ))}
            </div>
            {algo === 'rr' && (
              <label className="flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-background/50 px-3 py-2">
                <span className="text-xs font-semibold text-muted-foreground">Quantum</span>
                <span className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={quantum}
                    onChange={(e) => setQuantum(Math.max(1, Number(e.target.value) || 1))}
                    aria-label="Round robin quantum"
                    className="w-16 rounded-md border border-border bg-background px-2 py-1 text-right font-mono text-xs tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                  />
                  <span className="font-mono text-[10px] text-muted-foreground">tu</span>
                </span>
              </label>
            )}
            {algoHint && <p className="text-[11px] leading-relaxed text-muted-foreground">{algoHint}</p>}
          </div>
        </div>

        {/* gantt + stats */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-bold">Gantt chart</span>
              {result && (
                <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                  makespan {result.makespan} tu
                </span>
              )}
            </div>
            {result ? (
              <>
                <div className="relative h-12 overflow-hidden rounded-lg border border-border/70 bg-background/40">
                  {result.segments.map((s, i) => {
                    const w = (s.end - s.start) / Math.max(result.makespan, 1)
                    return (
                      <div
                        key={i}
                        title={
                          s.pid
                            ? `${s.pid} · ${s.start} → ${s.end}`
                            : `CPU idle · ${s.start} → ${s.end}`
                        }
                        className="absolute inset-y-1 flex items-center justify-center overflow-hidden rounded-md border border-background/40"
                        style={{
                          left: `${(s.start / Math.max(result.makespan, 1)) * 100}%`,
                          width: `${Math.max(w * 100 - 0.4, 0.6)}%`,
                          background: s.pid ? `${colorOf(s.pid)}33` : 'transparent',
                          borderLeft: s.pid ? `3px solid ${colorOf(s.pid)}` : '1px dashed var(--border)',
                        }}
                      >
                        {w > 0.05 && s.pid && (
                          <span className="font-mono text-[10px] font-bold">{s.pid}</span>
                        )}
                      </div>
                    )
                  })}
                </div>
                <div className="mt-1 flex justify-between font-mono text-[9px] tabular-nums text-muted-foreground">
                  {[0, 0.25, 0.5, 0.75, 1].map((f) => (
                    <span key={f}>{Math.round(f * result.makespan)}</span>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {result.stats.map((s) => (
                    <span key={s.pid} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <span className="h-2 w-2 rounded-sm" style={{ background: colorOf(s.pid) }} />
                      {s.pid}
                    </span>
                  ))}
                  <span className="text-[10px] text-muted-foreground/70">dashed outline = idle</span>
                </div>
              </>
            ) : (
              <p className="rounded-lg border border-dashed border-border/70 bg-background/40 px-3 py-6 text-center text-xs text-muted-foreground">
                Add at least one process with a burst &gt; 0 to simulate.
              </p>
            )}
          </div>

          {result && (
            <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold">Metrics</span>
                <span className="flex gap-2 font-mono text-[11px] tabular-nums">
                  <span className="rounded-md bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
                    avg wait {result.avgWaiting.toFixed(2)}
                  </span>
                  <span className="rounded-md bg-teal-400/10 px-2 py-0.5 text-teal-300">
                    avg TAT {result.avgTurnaround.toFixed(2)}
                  </span>
                  <span className="rounded-md bg-amber-400/10 px-2 py-0.5 text-amber-300">
                    avg resp {result.avgResponse.toFixed(2)}
                  </span>
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[380px] text-sm">
                  <thead>
                    <tr className="border-b border-border/70 text-left text-[10px] uppercase tracking-wider text-muted-foreground">
                      <th className="px-2 py-1.5 font-semibold">PID</th>
                      <th className="px-2 py-1.5 text-right font-semibold">Arrival</th>
                      <th className="px-2 py-1.5 text-right font-semibold">Burst</th>
                      <th className="px-2 py-1.5 text-right font-semibold">Completion</th>
                      <th className="px-2 py-1.5 text-right font-semibold">Turnaround</th>
                      <th className="px-2 py-1.5 text-right font-semibold">Waiting</th>
                      <th className="px-2 py-1.5 text-right font-semibold">Response</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.stats.map((s) => (
                      <tr key={s.pid} className="border-b border-border/40 last:border-0">
                        <td className="px-2 py-1.5 font-mono text-xs font-bold">{s.pid}</td>
                        {[s.arrival, s.burst, s.completion, s.turnaround, s.waiting, s.response].map(
                          (v, i) => (
                            <td key={i} className="px-2 py-1.5 text-right font-mono text-xs tabular-nums">
                              {v}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Paging panel                                                       */
/* ------------------------------------------------------------------ */

function PagingPanel({ fire }: { fire: (id: string) => void }) {
  const [refsText, setRefsText] = useState(PAGE_PRESETS[0].refs)
  const [frameCount, setFrameCount] = useState(3)
  const [algo, setAlgo] = useState<PageAlgo>('fifo')
  const [stepIdx, setStepIdx] = useState(0)
  const [playing, setPlaying] = useState(false)

  const parsed = useMemo(
    () =>
      refsText
        .split(/[\s,]+/)
        .map((s) => Number(s))
        .filter((n) => Number.isInteger(n) && n >= 0),
    [refsText],
  )

  const steps = useMemo(
    () => (parsed.length > 0 ? simulatePages(parsed.slice(0, 200), frameCount, algo) : []),
    [parsed, frameCount, algo],
  )

  // clamp step index when the simulation shrinks — derived-state pattern
  const [lastStepsLen, setLastStepsLen] = useState(steps.length)
  if (steps.length !== lastStepsLen) {
    setLastStepsLen(steps.length)
    setStepIdx((i) => Math.min(i, Math.max(0, steps.length - 1)))
  }

  // auto-play — subscription pattern, no synchronous setState
  useEffect(() => {
    if (!playing) return
    if (steps.length === 0 || stepIdx >= steps.length - 1) return
    const t = setTimeout(() => setStepIdx((i) => Math.min(i + 1, steps.length - 1)), 650)
    return () => clearTimeout(t)
  }, [playing, stepIdx, steps.length])

  const stopAtEnd = playing && (steps.length === 0 || stepIdx >= steps.length - 1)
  useEffect(() => {
    if (stopAtEnd) {
      const t = setTimeout(() => setPlaying(false), 0)
      return () => clearTimeout(t)
    }
  }, [stopAtEnd])

  // reaching the final reference of a trace — by auto-play or by stepping
  useEffect(() => {
    if (steps.length > 1 && stepIdx >= steps.length - 1) fire('os-pages-end')
  }, [stepIdx, steps.length, fire])

  const step = steps[stepIdx]
  const last = steps[steps.length - 1]

  const reset = () => {
    setStepIdx(0)
    setPlaying(false)
  }

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,2fr)_auto]">
          <label className="block">
            <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Reference string (pages, space or comma separated — max 200)
            </span>
            <input
              value={refsText}
              onChange={(e) => {
                setRefsText(e.target.value)
                reset()
              }}
              aria-label="Page reference string"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 font-mono text-sm tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Frames: <span className="font-mono tabular-nums text-foreground/80">{frameCount}</span>
            </span>
            <input
              type="range"
              min={3}
              max={8}
              value={frameCount}
              onChange={(e) => {
                setFrameCount(Number(e.target.value))
                reset()
              }}
              aria-label="Frame count"
              className="mt-2.5 w-40 accent-amber-400"
            />
          </label>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {PAGE_PRESETS.map((p) => (
            <button
              key={p.key}
              onClick={() => {
                setRefsText(p.refs)
                reset()
              }}
              className={`rounded-lg border border-border/80 bg-background/60 px-2.5 py-1 text-[11px] font-semibold text-foreground/85 transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-200 ${RING}`}
            >
              {p.label}
            </button>
          ))}
          <span className="mx-1 h-4 w-px bg-border" aria-hidden="true" />
          {(['fifo', 'lru', 'opt'] as const).map((a) => (
            <button
              key={a}
              onClick={() => {
                setAlgo(a)
                reset()
                if (a === 'lru') fire('os-pages-lru')
              }}
              aria-pressed={algo === a}
              className={`rounded-lg border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all ${RING} ${
                algo === a
                  ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-200'
                  : 'border-border/80 bg-background/60 text-muted-foreground hover:border-emerald-400/30 hover:text-foreground'
              }`}
            >
              {a === 'opt' ? 'Optimal' : a}
            </button>
          ))}
        </div>
      </div>

      {steps.length === 0 || !step ? (
        <p className="rounded-2xl border border-dashed border-border/70 bg-background/40 px-4 py-6 text-center text-sm text-muted-foreground">
          Enter a reference string above (e.g. “7 0 1 2 0 3”) to simulate page replacement.
        </p>
      ) : (
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          {/* step view */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold">Step {stepIdx + 1} / {steps.length}</span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                    step.hit
                      ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
                      : 'border-amber-400/40 bg-amber-400/10 text-amber-300'
                  }`}
                >
                  {step.hit ? 'HIT' : 'MISS · fault'}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={stepIdx + 1} aria-valuemin={1} aria-valuemax={steps.length}>
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all"
                  style={{ width: `${((stepIdx + 1) / steps.length) * 100}%` }}
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="text-xs text-muted-foreground">page</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background font-mono text-xl font-bold tabular-nums">
                  {step.page}
                </span>
              </div>
              <div className="mt-4 flex items-end justify-center gap-2">
                {step.frames.map((f, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={`flex h-14 w-12 items-center justify-center rounded-lg border-2 font-mono text-lg font-bold tabular-nums transition-all ${
                        !step.hit && i === step.slot
                          ? 'border-amber-400 bg-amber-400/15 text-amber-200'
                          : f !== null
                            ? 'border-emerald-400/30 bg-emerald-400/[0.07] text-emerald-200'
                            : 'border-dashed border-border/60 text-muted-foreground/40'
                      }`}
                    >
                      {f ?? '·'}
                    </div>
                    <div className="mt-1 font-mono text-[9px] uppercase text-muted-foreground">f{i}</div>
                  </div>
                ))}
              </div>
              <p className="mt-3 min-h-[16px] text-center text-[11px] text-muted-foreground">
                {step.hit
                  ? `Page ${step.page} already in frame ${step.slot}.`
                  : step.evicted !== null
                    ? `Page ${step.evicted} evicted → page ${step.page} loaded into frame ${step.slot}.`
                    : `Page ${step.page} loaded into empty frame ${step.slot}.`}
              </p>

              <div className="mt-4 flex items-center justify-center gap-2">
                <button
                  onClick={() => {
                    setPlaying(false)
                    setStepIdx((i) => Math.max(0, i - 1))
                  }}
                  disabled={stepIdx === 0}
                  aria-label="Previous step"
                  className={`rounded-lg border border-border/80 bg-background/60 p-2 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 ${RING}`}
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  onClick={() => {
                    setPlaying((p) => !p)
                    if (!playing) fire('os-pages-play')
                  }}
                  disabled={stepIdx >= steps.length - 1}
                  className={`inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold text-emerald-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40 ${RING}`}
                >
                  {playing ? (
                    <>
                      <Pause className="h-4 w-4" aria-hidden="true" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" aria-hidden="true" /> Auto-play
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setPlaying(false)
                    setStepIdx((i) => Math.min(steps.length - 1, i + 1))
                  }}
                  disabled={stepIdx >= steps.length - 1}
                  aria-label="Next step"
                  className={`rounded-lg border border-border/80 bg-background/60 p-2 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 ${RING}`}
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  onClick={reset}
                  aria-label="Reset playback"
                  className={`rounded-lg border border-border/80 bg-background/60 p-2 text-muted-foreground transition-colors hover:text-foreground ${RING}`}
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {last && (
              <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
                <div className="mb-2.5 text-sm font-bold">Final tally (whole trace)</div>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: 'Faults', value: last.faults, cls: 'text-amber-300' },
                    { label: 'Hits', value: last.hits, cls: 'text-emerald-300' },
                    {
                      label: 'Hit rate',
                      value: `${Math.round((last.hits / Math.max(steps.length, 1)) * 100)}%`,
                      cls: 'text-teal-300',
                    },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-border/70 bg-background/50 px-3 py-2.5 text-center">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {s.label}
                      </div>
                      <div className={`mt-0.5 font-mono text-xl font-bold tabular-nums ${s.cls}`}>
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-2.5 text-[11px] leading-relaxed text-muted-foreground">
                  Try the “Belady anomaly” preset with 3 vs 4 frames under FIFO — more frames can
                  mean <em>more</em> faults.
                </p>
              </div>
            )}
          </div>

          {/* history table */}
          <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-sm font-bold">Trace history</span>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <StepForward className="h-3.5 w-3.5" aria-hidden="true" /> click a row to jump
              </span>
            </div>
            <div className="max-h-96 overflow-y-auto overflow-x-auto">
              <table className="w-full min-w-[320px] text-sm">
                <thead className="sticky top-0 z-10 bg-card">
                  <tr className="border-b border-border/70 text-left text-[10px] uppercase tracking-wider text-muted-foreground">
                    <th className="px-2 py-1.5 font-semibold">#</th>
                    <th className="px-2 py-1.5 font-semibold">Page</th>
                    {Array.from({ length: frameCount }, (_, i) => (
                      <th key={i} className="px-2 py-1.5 text-center font-semibold">
                        f{i}
                      </th>
                    ))}
                    <th className="px-2 py-1.5 text-right font-semibold">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {steps.map((s, i) => (
                    <tr
                      key={i}
                      onClick={() => {
                        setPlaying(false)
                        setStepIdx(i)
                      }}
                      className={`cursor-pointer border-b border-border/40 transition-colors last:border-0 ${
                        i === stepIdx ? 'bg-emerald-400/10' : 'hover:bg-emerald-400/[0.04]'
                      }`}
                    >
                      <td className="px-2 py-1 font-mono text-[11px] tabular-nums text-muted-foreground">
                        {i + 1}
                      </td>
                      <td className="px-2 py-1 font-mono text-xs font-bold tabular-nums">{s.page}</td>
                      {s.frames.map((f, fi) => (
                        <td
                          key={fi}
                          className={`px-2 py-1 text-center font-mono text-xs tabular-nums ${
                            i <= stepIdx ? 'text-foreground' : 'text-muted-foreground/30'
                          } ${!s.hit && fi === s.slot && i === stepIdx ? 'font-bold text-amber-300' : ''}`}
                        >
                          {f ?? '·'}
                        </td>
                      ))}
                      <td className="px-2 py-1 text-right">
                        <span
                          className={`inline-block rounded px-1.5 py-px font-mono text-[10px] font-bold ${
                            s.hit
                              ? 'bg-emerald-400/15 text-emerald-300'
                              : 'bg-amber-400/15 text-amber-300'
                          }`}
                        >
                          {s.hit ? 'H' : 'M'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OsLab
