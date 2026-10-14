'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Lightbulb, Pause, Play, Plus, RotateCcw, SkipForward, StepForward, Timer, Trash2, Trophy } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Proc {
  id: string
  arrival: number
  burst: number
  priority: number
}

type AlgoId = 'fcfs' | 'sjf' | 'srtf' | 'priority' | 'rr'

interface Segment {
  pid: string | null // null = CPU idle
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

interface ScheduleResult {
  segments: Segment[]
  stats: ProcStat[]
  makespan: number
  avgWaiting: number
  avgTurnaround: number
  avgResponse: number
}

const ALGO_LIST: { id: AlgoId; name: string }[] = [
  { id: 'fcfs', name: 'FCFS' },
  { id: 'sjf', name: 'SJF' },
  { id: 'srtf', name: 'SRTF' },
  { id: 'priority', name: 'Priority' },
  { id: 'rr', name: 'Round Robin' },
]

const POLICY_HINT: Record<AlgoId, (q: number) => string> = {
  fcfs: () => 'Runs strictly in arrival order, no preemption — one long job and everyone waits behind it.',
  sjf: () => 'Picks the shortest ready burst and runs it to completion — non-preemptive, minimal average waiting.',
  srtf: () => 'Shortest-remaining-time-first: preempts the instant a shorter job arrives. Optimal average waiting.',
  priority: () => 'Lower priority number wins, ties break by arrival — non-preemptive, watch for starvation.',
  rr: (q) => `Time slices of q = ${q}. At quantum expiry, newly arrived processes enqueue BEFORE the preempted one.`,
}

/* Fixed 10-color palette: emerald, teal, amber, orange, rose, lime shades cycling */
const PALETTE = ['#10b981', '#14b8a6', '#f59e0b', '#fb923c', '#f43f5e', '#84cc16', '#34d399', '#2dd4bf', '#fbbf24', '#f97316']

const PRESETS: { key: string; label: string; algo: AlgoId; quantum?: number; procs: Proc[] }[] = [
  {
    key: 'classic',
    label: 'FCFS vs SJF',
    algo: 'fcfs',
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
    algo: 'fcfs',
    procs: [
      { id: 'P1', arrival: 0, burst: 24, priority: 2 },
      { id: 'P2', arrival: 1, burst: 3, priority: 1 },
      { id: 'P3', arrival: 2, burst: 3, priority: 1 },
    ],
  },
  {
    key: 'rr',
    label: 'RR quantum',
    algo: 'rr',
    quantum: 2,
    procs: [
      { id: 'P1', arrival: 0, burst: 5, priority: 2 },
      { id: 'P2', arrival: 1, burst: 3, priority: 1 },
      { id: 'P3', arrival: 2, burst: 8, priority: 2 },
      { id: 'P4', arrival: 3, burst: 4, priority: 1 },
    ],
  },
  {
    key: 'srtf',
    label: 'SJF needs prediction',
    algo: 'srtf',
    procs: [
      { id: 'P1', arrival: 0, burst: 8, priority: 3 },
      { id: 'P2', arrival: 1, burst: 4, priority: 1 },
      { id: 'P3', arrival: 2, burst: 9, priority: 4 },
      { id: 'P4', arrival: 3, burst: 5, priority: 2 },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Scheduling engine                                                  */
/*  - pick-based: FCFS / SJF / SRTF / Priority (non-preemptive)        */
/*  - queue-based: Round Robin (arrivals enqueue before the           */
/*    preempted process — the standard textbook convention)           */
/* ------------------------------------------------------------------ */

function simulateSchedule(procs: Proc[], algo: AlgoId, quantum: number): ScheduleResult {
  const n = procs.length
  if (n === 0) {
    return { segments: [], stats: [], makespan: 0, avgWaiting: 0, avgTurnaround: 0, avgResponse: 0 }
  }

  const info = new Map<string, Proc & { i: number }>()
  procs.forEach((p, i) => info.set(p.id, { ...p, i }))
  const order = procs
    .map((p, i) => ({ ...p, i }))
    .sort((a, b) => a.arrival - b.arrival || a.i - b.i)
  const rem = new Map<string, number>(procs.map((p) => [p.id, p.burst]))
  const firstRun = new Map<string, number>()
  const done = new Map<string, number>()
  const raw: Segment[] = []
  const pad = (x: number) => String(x).padStart(7, '0')
  let t = 0
  let next = 0
  let finished = 0

  const pushSeg = (pid: string | null, start: number, end: number) => {
    const last = raw[raw.length - 1]
    if (last && last.pid === pid && last.end === start) last.end = end
    else raw.push({ pid, start, end })
  }

  if (algo === 'rr') {
    const queue: string[] = []
    while (finished < n) {
      while (next < n && order[next].arrival <= t) queue.push(order[next++].id)
      if (queue.length === 0) {
        const at = order[next].arrival
        pushSeg(null, t, at)
        t = at
        continue
      }
      const pid = queue.shift() ?? ''
      const r = rem.get(pid) ?? 1
      const slice = Math.min(Math.max(1, quantum), r)
      const end = t + slice
      if (!firstRun.has(pid)) firstRun.set(pid, t)
      pushSeg(pid, t, end)
      rem.set(pid, r - slice)
      t = end
      // textbook convention: arrivals during this slice enqueue first...
      while (next < n && order[next].arrival <= t) queue.push(order[next++].id)
      // ...then the preempted process goes to the tail
      if ((rem.get(pid) ?? 0) > 0) queue.push(pid)
      else {
        done.set(pid, t)
        finished++
      }
    }
  } else {
    const ready = new Set<string>()
    const keyOf = (id: string): string => {
      const p = info.get(id)
      if (!p) return 'zzzzzzz'
      const r = rem.get(id) ?? 0
      switch (algo) {
        case 'sjf':
          return `${pad(p.burst)}:${pad(p.arrival)}:${pad(p.i)}`
        case 'srtf':
          return `${pad(r)}:${pad(p.arrival)}:${pad(p.i)}`
        case 'priority':
          return `${pad(p.priority)}:${pad(p.arrival)}:${pad(p.i)}`
        default:
          return `${pad(p.arrival)}:${pad(p.i)}`
      }
    }
    while (finished < n) {
      while (next < n && order[next].arrival <= t) ready.add(order[next++].id)
      if (ready.size === 0) {
        const at = order[next].arrival
        pushSeg(null, t, at)
        t = at
        continue
      }
      let pid = ''
      let bestKey = '\uFFFF'
      for (const id of ready) {
        const k = keyOf(id)
        if (k < bestKey) {
          bestKey = k
          pid = id
        }
      }
      const r = rem.get(pid) ?? 0
      let end = t + r
      // SRTF: stop the slice at the next arrival so preemption can be re-decided
      if (algo === 'srtf' && next < n && order[next].arrival < end) end = order[next].arrival
      if (!firstRun.has(pid)) firstRun.set(pid, t)
      pushSeg(pid, t, end)
      rem.set(pid, r - (end - t))
      t = end
      if ((rem.get(pid) ?? 1) === 0) {
        done.set(pid, t)
        ready.delete(pid)
        finished++
      }
    }
  }

  const stats: ProcStat[] = procs.map((p) => {
    const c = done.get(p.id) ?? 0
    const turnaround = c - p.arrival
    const waiting = turnaround - p.burst
    const response = (firstRun.get(p.id) ?? p.arrival) - p.arrival
    return { pid: p.id, arrival: p.arrival, burst: p.burst, priority: p.priority, completion: c, turnaround, waiting, response }
  })
  const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0)
  return {
    segments: raw,
    stats,
    makespan: raw.length ? raw[raw.length - 1].end : 0,
    avgWaiting: avg(stats.map((s) => s.waiting)),
    avgTurnaround: avg(stats.map((s) => s.turnaround)),
    avgResponse: avg(stats.map((s) => s.response)),
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const SPEEDS = [0.5, 1, 2, 4]

export default function CpuScheduler() {
  const reduce = useReducedMotion()
  const [procs, setProcs] = useState<Proc[]>(() => PRESETS[0].procs.map((p) => ({ ...p })))
  const [algo, setAlgo] = useState<AlgoId>('fcfs')
  const [quantum, setQuantum] = useState(2)
  const [speed, setSpeed] = useState(1)
  const [playing, setPlaying] = useState(false)
  const [revealed, setRevealed] = useState(0)
  const ganttRef = useRef<HTMLDivElement | null>(null)

  const result = useMemo(() => simulateSchedule(procs, algo, quantum), [procs, algo, quantum])

  // any change of the schedule itself restarts playback (render-time adjust)
  const [prevResult, setPrevResult] = useState(result)
  if (prevResult !== result) {
    setPrevResult(result)
    setPlaying(false)
    setRevealed(0)
  }

  // animated playback loop
  useEffect(() => {
    if (!playing) return
    const t = setTimeout(() => {
      if (revealed >= result.segments.length) setPlaying(false)
      else setRevealed((r) => Math.min(result.segments.length, r + 1))
    }, Math.round(900 / speed))
    return () => clearTimeout(t)
  }, [playing, revealed, speed, result])

  const makespan = result.makespan
  const pxPerUnit = makespan > 0 ? Math.max(34, Math.min(88, 860 / makespan)) : 34
  const totalPx = Math.max(320, makespan * pxPerUnit + 14)
  const tickStep = makespan <= 20 ? 1 : makespan <= 40 ? 2 : makespan <= 80 ? 5 : 10
  const playheadT = revealed > 0 ? result.segments[revealed - 1].end : 0
  const colorOf = (pid: string): string => {
    const idx = procs.findIndex((p) => p.id === pid)
    return PALETTE[(idx >= 0 ? idx : 0) % PALETTE.length]
  }
  const ganttAria =
    result.segments.map((s) => (s.pid === null ? `idle ${s.start} to ${s.end}` : `${s.pid} from ${s.start} to ${s.end}`)).join(', ') ||
    'empty'

  // keep the playhead in view
  useEffect(() => {
    const el = ganttRef.current
    if (!el) return
    el.scrollTo({ left: Math.max(0, playheadT * pxPerUnit - el.clientWidth * 0.45), behavior: reduce ? 'auto' : 'smooth' })
  }, [revealed, playheadT, pxPerUnit, reduce])

  const onGanttKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      setPlaying(false)
      setRevealed((r) => Math.min(result.segments.length, r + 1))
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setPlaying(false)
      setRevealed((r) => Math.max(0, r - 1))
    }
  }

  const updateProc = (id: string, field: 'arrival' | 'burst' | 'priority', raw: string) => {
    const v = Number.parseInt(raw, 10)
    const min = field === 'burst' ? 1 : 0
    const max = field === 'priority' ? 9 : 99
    const clamped = Number.isNaN(v) ? min : Math.max(min, Math.min(max, v))
    setProcs((ps) => ps.map((p) => (p.id === id ? { ...p, [field]: clamped } : p)))
  }

  const addProc = () =>
    setProcs((ps) => {
      if (ps.length >= 10) return ps
      let k = ps.length + 1
      while (ps.some((p) => p.id === `P${k}`)) k++
      return [...ps, { id: `P${k}`, arrival: 0, burst: 3, priority: 2 }]
    })

  const removeProc = (id: string) => setProcs((ps) => (ps.length <= 1 ? ps : ps.filter((p) => p.id !== id)))

  const applyPreset = (key: string) => {
    const p = PRESETS.find((x) => x.key === key)
    if (!p) return
    setProcs(p.procs.map((x) => ({ ...x })))
    setAlgo(p.algo)
    if (p.quantum !== undefined) setQuantum(p.quantum)
    setPlaying(false)
    setRevealed(0)
  }

  const onPlay = () => {
    if (revealed >= result.segments.length) {
      setRevealed(0)
      setPlaying(true)
    } else setPlaying((p) => !p)
  }

  const comparison = useMemo(
    () =>
      ALGO_LIST.map((a) => {
        const res = simulateSchedule(procs, a.id, quantum)
        return {
          id: a.id,
          name: a.id === 'rr' ? `RR (q=${quantum})` : a.name,
          avgWaiting: res.avgWaiting,
          avgTurnaround: res.avgTurnaround,
        }
      }).sort((a, b) => a.avgWaiting - b.avgWaiting),
    [procs, quantum],
  )
  const bestWait = comparison.length ? comparison[0].avgWaiting : 0
  const maxWait = comparison.length ? Math.max(...comparison.map((c) => c.avgWaiting)) : 0

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Timer className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">CPU Scheduler Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Five classic policies on one editable process set — watch preemption, the convoy effect and quantum
            trade-offs play out on a shared Gantt timeline.
          </p>
        </div>
      </div>

      {/* presets */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Presets</span>
        {PRESETS.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => applyPreset(p.key)}
            className="rounded-lg border border-border bg-muted/30 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* policy + quantum */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Policy</span>
          <Select value={algo} onValueChange={(v) => setAlgo(v as AlgoId)}>
            <SelectTrigger size="sm" className="h-9 w-[240px] bg-card text-xs" aria-label="Scheduling policy">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fcfs">FCFS — first come, first served</SelectItem>
              <SelectItem value="sjf">SJF — shortest job first</SelectItem>
              <SelectItem value="srtf">SRTF — preemptive SJF</SelectItem>
              <SelectItem value="priority">Priority — non-preemptive</SelectItem>
              <SelectItem value="rr">Round Robin</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {algo === 'rr' && (
          <div className="flex items-center gap-2.5">
            <span className="text-xs text-muted-foreground">quantum</span>
            <Slider
              min={1}
              max={10}
              step={1}
              value={[quantum]}
              onValueChange={(v) => setQuantum(v[0] ?? 2)}
              className="w-32"
              aria-label="Round Robin quantum"
            />
            <span className="w-5 font-mono text-xs text-foreground">{quantum}</span>
          </div>
        )}
        <p className="w-full text-[11px] leading-relaxed text-muted-foreground sm:w-auto sm:flex-1 sm:text-right">
          {POLICY_HINT[algo](quantum)}
        </p>
      </div>

      {/* process table */}
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Processes</p>
          <Button size="sm" variant="outline" onClick={addProc} disabled={procs.length >= 10}>
            <Plus className="mr-1 h-3.5 w-3.5" />Add process
          </Button>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[440px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-muted-foreground">
                <th className="px-3 py-2 font-medium">Process</th>
                <th className="px-2 py-2 font-medium">Arrival</th>
                <th className="px-2 py-2 font-medium">Burst</th>
                <th className="px-2 py-2 font-medium">Priority</th>
                <th className="w-12 px-2 py-2" aria-label="Remove process" />
              </tr>
            </thead>
            <tbody>
              {procs.map((p) => (
                <tr key={p.id} className="border-b border-border/40 last:border-0">
                  <td className="px-3 py-1.5">
                    <span className="inline-flex items-center gap-2 font-mono font-semibold text-foreground">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: colorOf(p.id) }} />
                      {p.id}
                    </span>
                  </td>
                  <td className="px-2 py-1.5">
                    <Input
                      type="number"
                      min={0}
                      max={99}
                      value={p.arrival}
                      onChange={(e) => updateProc(p.id, 'arrival', e.target.value)}
                      className="h-8 w-16 px-1 text-center font-mono text-xs"
                      aria-label={`${p.id} arrival time`}
                    />
                  </td>
                  <td className="px-2 py-1.5">
                    <Input
                      type="number"
                      min={1}
                      max={99}
                      value={p.burst}
                      onChange={(e) => updateProc(p.id, 'burst', e.target.value)}
                      className="h-8 w-16 px-1 text-center font-mono text-xs"
                      aria-label={`${p.id} burst time`}
                    />
                  </td>
                  <td className="px-2 py-1.5">
                    <Input
                      type="number"
                      min={0}
                      max={9}
                      value={p.priority}
                      onChange={(e) => updateProc(p.id, 'priority', e.target.value)}
                      className="h-8 w-16 px-1 text-center font-mono text-xs"
                      aria-label={`${p.id} priority`}
                    />
                  </td>
                  <td className="px-2 py-1.5 text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeProc(p.id)}
                      disabled={procs.length <= 1}
                      aria-label={`Remove ${p.id}`}
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-rose-400"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-1.5 text-[11px] text-muted-foreground">
          Up to 10 processes. Priority only matters for the Priority policy; every tie breaks by arrival order.
        </p>
      </div>

      {/* gantt */}
      <div className="mt-5">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Gantt timeline</p>
          <p className="font-mono text-[10px] text-muted-foreground">
            slice {Math.min(revealed, result.segments.length)}/{result.segments.length} · makespan {makespan}
          </p>
        </div>
        <div
          ref={ganttRef}
          tabIndex={0}
          role="img"
          aria-label={`Gantt chart. ${ganttAria}. Use left and right arrow keys to step.`}
          onKeyDown={onGanttKey}
          className="overflow-x-auto rounded-xl border border-border bg-muted/20 p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          <div className="relative" style={{ width: totalPx, height: 88, minWidth: '100%' }}>
            {result.segments.map((seg, i) => {
              const w = (seg.end - seg.start) * pxPerUnit
              const isRevealed = i < revealed
              const isCurrent = i === revealed - 1
              const idle = seg.pid === null
              return (
                <motion.div
                  key={`${seg.pid ?? 'idle'}-${seg.start}-${seg.end}`}
                  className="absolute top-[26px] flex h-11 items-center justify-center overflow-hidden rounded-md"
                  style={
                    idle
                      ? {
                          left: seg.start * pxPerUnit + 1,
                          width: Math.max(6, w - 2),
                          border: '1px dashed rgba(161,161,170,0.35)',
                          backgroundImage:
                            'repeating-linear-gradient(45deg, transparent 0 5px, rgba(161,161,170,0.16) 5px 10px)',
                        }
                      : {
                          left: seg.start * pxPerUnit + 1,
                          width: Math.max(6, w - 2),
                          backgroundColor: colorOf(seg.pid as string),
                        }
                  }
                  initial={false}
                  animate={isRevealed ? { opacity: 1, scaleY: 1 } : { opacity: 0.16, scaleY: 0.45 }}
                  transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 320, damping: 24 }}
                  title={idle ? `CPU idle ${seg.start}–${seg.end}` : `${seg.pid}: ${seg.start}–${seg.end}`}
                >
                  {idle ? (
                    w >= 56 && (
                      <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">idle</span>
                    )
                  ) : (
                    <span className="px-0.5 font-mono text-[10px] font-bold leading-none text-zinc-950">
                      {seg.pid}
                      {w >= 56 && <span className="opacity-60"> ·{seg.end - seg.start}</span>}
                    </span>
                  )}
                  {isCurrent && <span className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-amber-300/90" />}
                </motion.div>
              )
            })}
            {revealed > 0 && (
              <div
                className={`absolute top-0 z-10 h-[82px] w-0.5 bg-amber-400 ${reduce ? '' : 'transition-[left] duration-300 ease-out'}`}
                style={{ left: playheadT * pxPerUnit }}
                aria-hidden
              >
                <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded bg-amber-400 px-1 font-mono text-[9px] font-bold leading-4 text-zinc-950">
                  t={playheadT}
                </span>
              </div>
            )}
            {Array.from({ length: Math.floor(makespan / tickStep) + 1 }, (_, i) => i * tickStep)
              .filter((tt) => tt <= makespan)
              .map((tt) => (
                <span
                  key={tt}
                  className="absolute top-[74px] -translate-x-1/2 font-mono text-[9px] leading-none text-muted-foreground"
                  style={{ left: tt * pxPerUnit }}
                >
                  {tt}
                </span>
              ))}
          </div>
        </div>

        {/* playback controls */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <Button size="sm" onClick={onPlay} disabled={result.segments.length === 0} className="min-w-[88px]">
            {playing ? (
              <>
                <Pause className="mr-1 h-4 w-4" />Pause
              </>
            ) : (
              <>
                <Play className="mr-1 h-4 w-4" />
                {revealed >= result.segments.length && result.segments.length > 0 ? 'Replay' : 'Play'}
              </>
            )}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setPlaying(false)
              setRevealed((r) => Math.min(result.segments.length, r + 1))
            }}
            disabled={revealed >= result.segments.length}
            aria-label="Reveal next slice"
          >
            <StepForward className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setPlaying(false)
              setRevealed(result.segments.length)
            }}
            disabled={revealed >= result.segments.length}
          >
            <SkipForward className="mr-1 h-3.5 w-3.5" />All
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setPlaying(false)
              setRevealed(0)
            }}
            aria-label="Reset playback"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <div className="ml-auto flex items-center gap-1 rounded-lg border border-border bg-muted/30 p-0.5" role="group" aria-label="Playback speed">
            {SPEEDS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSpeed(s)}
                aria-pressed={speed === s}
                className={`rounded-md px-2 py-1 font-mono text-[11px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                  speed === s
                    ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {s}×
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* metrics */}
      <div className="mt-5">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Per-process metrics</p>
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 rounded-lg border border-border bg-muted/20 px-3 py-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <TeX tex="T_i = C_i - A_i" />
            <span>turnaround</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <TeX tex="W_i = T_i - b_i" />
            <span>waiting</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <TeX tex="R_i = s_i - A_i" />
            <span>response</span>
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5">
            <TeX tex={'\\bar{W} = \\frac{1}{n}\\sum_{i=1}^{n} W_i'} />
          </span>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[480px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-muted-foreground">
                <th className="px-3 py-2 font-medium">Process</th>
                <th className="px-2 py-2 text-right font-medium" title="arrival time">
                  <TeX tex="A_i" />
                </th>
                <th className="px-2 py-2 text-right font-medium" title="burst time">
                  <TeX tex="b_i" />
                </th>
                <th className="px-2 py-2 text-right font-medium" title="completion time">
                  <TeX tex="C_i" />
                </th>
                <th className="px-2 py-2 text-right font-medium" title="turnaround time">
                  <TeX tex="T_i" />
                </th>
                <th className="px-2 py-2 text-right font-medium" title="waiting time">
                  <TeX tex="W_i" />
                </th>
                <th className="px-2 py-2 text-right font-medium" title="response time">
                  <TeX tex="R_i" />
                </th>
              </tr>
            </thead>
            <tbody>
              {result.stats.map((s) => (
                <tr key={s.pid} className="border-b border-border/40 last:border-0 hover:bg-muted/20">
                  <td className="px-3 py-1.5">
                    <span className="inline-flex items-center gap-2 font-mono font-semibold text-foreground">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: colorOf(s.pid) }} />
                      {s.pid}
                    </span>
                  </td>
                  <td className="px-2 py-1.5 text-right font-mono">{s.arrival}</td>
                  <td className="px-2 py-1.5 text-right font-mono">{s.burst}</td>
                  <td className="px-2 py-1.5 text-right font-mono">{s.completion}</td>
                  <td className="px-2 py-1.5 text-right font-mono">{s.turnaround}</td>
                  <td className="px-2 py-1.5 text-right font-mono text-emerald-300">{s.waiting}</td>
                  <td className="px-2 py-1.5 text-right font-mono">{s.response}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-border bg-muted/30 font-semibold">
                <td className="px-3 py-2 text-muted-foreground" colSpan={4}>
                  Average
                </td>
                <td className="px-2 py-2 text-right font-mono">{result.avgTurnaround.toFixed(2)}</td>
                <td className="px-2 py-2 text-right font-mono text-emerald-400">{result.avgWaiting.toFixed(2)}</td>
                <td className="px-2 py-2 text-right font-mono">{result.avgResponse.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* compare all */}
      <div className="mt-5 rounded-xl border border-border bg-background/50 p-4">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Compare all policies</p>
          <p className="text-[11px] text-muted-foreground">
            average waiting <TeX tex="\bar{W}" /> — lower is better
          </p>
        </div>
        <div className="mt-3 flex flex-col gap-1.5">
          {comparison.map((c) => {
            const best = c.avgWaiting <= bestWait + 1e-9
            const wPct = maxWait > 0 ? Math.max(3, (c.avgWaiting / maxWait) * 100) : 3
            return (
              <div key={c.id} className="flex items-center gap-2" role="group" aria-label={`${c.name}: average waiting ${c.avgWaiting.toFixed(2)}`}>
                <span className="w-24 shrink-0 truncate text-xs font-medium text-foreground sm:w-28" title={`average turnaround ${c.avgTurnaround.toFixed(2)}`}>
                  {c.name}
                </span>
                <div className="relative h-5 flex-1 overflow-hidden rounded-md bg-muted/40">
                  <motion.div
                    className={`h-full rounded-md ${best ? 'bg-amber-400' : 'bg-emerald-500/70'}`}
                    initial={reduce ? false : { width: 0 }}
                    animate={{ width: `${wPct}%` }}
                    transition={reduce ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
                <span className={`w-11 shrink-0 text-right font-mono text-xs ${best ? 'font-bold text-amber-300' : 'text-foreground'}`}>
                  {c.avgWaiting.toFixed(2)}
                </span>
                {best && (
                  <Badge variant="outline" className="gap-1 border-amber-400/60 bg-amber-400/10 text-[10px] text-amber-300">
                    <Trophy className="h-3 w-3" />best
                  </Badge>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          load <span className="font-medium text-foreground">Convoy effect</span> and read the FCFS{' '}
          <TeX tex="\bar{W}" />, then switch the policy to SRTF — the long job stops blocking the short ones and the
          average collapses. Then scan the compare-all panel to see every policy on one bar chart.
        </span>
      </div>
    </div>
  )
}
