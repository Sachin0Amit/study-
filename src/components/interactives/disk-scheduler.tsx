'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronUp,
  FastForward,
  HardDrive,
  Lightbulb,
  Pause,
  Play,
  RotateCcw,
  Trophy,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

/* ------------------------------------------------------------------ */
/*  Types + scheduling logic                                           */
/* ------------------------------------------------------------------ */

const MAX_CYL = 199

type Algo = 'FCFS' | 'SSTF' | 'SCAN' | 'CSCAN' | 'CLOOK'
type Dir = 'up' | 'down'

interface Plan {
  order: number[] // serviced cylinders in visit order (edge stops included)
  travel: number // total head movement in cylinders
  jumpAt: number // index in order of the first element after a wrap jump (-1 = none)
  wrapTo: number // cylinder the head lands on after the jump (0 for the C-SCAN wrap)
}

const ALGOS: { id: Algo; label: string; scanFamily: boolean }[] = [
  { id: 'FCFS', label: 'FCFS', scanFamily: false },
  { id: 'SSTF', label: 'SSTF', scanFamily: false },
  { id: 'SCAN', label: 'SCAN', scanFamily: true },
  { id: 'CSCAN', label: 'C-SCAN', scanFamily: true },
  { id: 'CLOOK', label: 'C-LOOK', scanFamily: true },
]

function travelOf(start: number, order: number[], skipFrom = -1, wrapTo = 0): number {
  let t = 0
  let prev = start
  order.forEach((c, i) => {
    if (i === skipFrom) {
      prev = wrapTo // jump lands here: the seek is free, movement resumes from wrapTo
      return
    }
    t += Math.abs(c - prev)
    prev = c
  })
  return t
}

/** SCAN family is computed on a reflected number line so "down" reuses the "up" code. */
function planFor(algo: Algo, head: number, dir: Dir, reqs: number[]): Plan {
  if (reqs.length === 0) return { order: [], travel: 0, jumpAt: -1, wrapTo: 0 }

  if (algo === 'FCFS') {
    const order = [...reqs]
    return { order, travel: travelOf(head, order), jumpAt: -1, wrapTo: 0 }
  }

  if (algo === 'SSTF') {
    const pending = [...reqs]
    const order: number[] = []
    let cur = head
    while (pending.length > 0) {
      let best = 0
      for (let i = 1; i < pending.length; i++) {
        if (Math.abs(pending[i] - cur) < Math.abs(pending[best] - cur)) best = i
      }
      cur = pending.splice(best, 1)[0]
      order.push(cur)
    }
    return { order, travel: travelOf(head, order), jumpAt: -1, wrapTo: 0 }
  }

  // reflect so the sweep is always "up", then map back
  const refl = (c: number): number => (dir === 'down' ? MAX_CYL - c : c)
  const headR = refl(head)
  const reqsR = reqs.map(refl)
  const ups = reqsR.filter((c) => c >= headR).sort((a, b) => a - b)
  const downs = reqsR.filter((c) => c < headR)
  const downsAsc = [...downs].sort((a, b) => a - b)
  const downsDesc = [...downs].sort((a, b) => b - a)

  let orderR: number[]
  let jumpAt = -1
  let wrapTo = 0
  if (algo === 'SCAN') {
    // sweep to the edge before reversing — but only if work waits on the other side
    orderR = downsDesc.length > 0 ? [...ups, MAX_CYL, ...downsDesc] : [...ups]
  } else if (algo === 'CSCAN') {
    if (downsAsc.length > 0) {
      // sweep up through 199, wrap back to 0 (free seek), then continue upward
      jumpAt = ups.length + 1 // first element after the wrap
      wrapTo = 0
      orderR = [...ups, MAX_CYL, ...downsAsc]
    } else {
      orderR = [...ups]
    }
  } else {
    // C-LOOK: stop at the last request, jump straight to the farthest pending one
    orderR = downsAsc.length > 0 ? [...ups, ...downsAsc] : [...ups]
    if (downsAsc.length > 0) {
      jumpAt = ups.length
      wrapTo = downsAsc[0]
    }
  }

  const order = dir === 'down' ? orderR.map(refl) : orderR
  return { order, travel: travelOf(headR, orderR, jumpAt, wrapTo), jumpAt, wrapTo }
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

const PRESET_REQS = [98, 183, 37, 122, 14, 124, 65, 67]

export default function DiskScheduler() {
  const reduced = useReducedMotion()
  const [requests, setRequests] = useState<number[]>([...PRESET_REQS])
  const [head, setHead] = useState(53)
  const [algo, setAlgo] = useState<Algo>('FCFS')
  const [dir, setDir] = useState<Dir>('up')
  const [pathIdx, setPathIdx] = useState(0)
  const [running, setRunning] = useState(false)
  const [showCompare, setShowCompare] = useState(false)
  const [addText, setAddText] = useState('')

  const plan = useMemo(() => planFor(algo, head, dir, requests), [algo, head, dir, requests])
  const path = useMemo(() => [head, ...plan.order], [head, plan])
  const activeAlgo = ALGOS.find((a) => a.id === algo)

  const finished = path.length > 1 && pathIdx >= path.length - 1
  const started = pathIdx > 0 && !finished
  const cur = path[Math.min(pathIdx, path.length - 1)]
  const prev = path[Math.max(0, Math.min(pathIdx, path.length - 1) - 1)]
  const servedSet = useMemo(() => new Set(path.slice(1, pathIdx + 1)), [path, pathIdx])
  const servedCount = requests.filter((r) => servedSet.has(r)).length

  // live + final head movement along the walked prefix
  const walked = useMemo(() => {
    const walkedPath = path.slice(0, Math.min(pathIdx, path.length - 1) + 1)
    return travelOf(head, walkedPath.slice(1), plan.jumpAt, plan.wrapTo)
  }, [path, pathIdx, head, plan.jumpAt, plan.wrapTo])
  const totalShown = finished ? plan.travel : walked

  // changing the scenario resets the run
  const changeScenario = (apply: () => void) => {
    apply()
    setPathIdx(0)
    setRunning(false)
  }

  // segment animation driver
  useEffect(() => {
    if (!running) return
    if (pathIdx >= path.length - 1) return
    const from = path[pathIdx]
    const to = path[pathIdx + 1]
    const ms = reduced ? 0 : Math.min(1500, Math.max(140, Math.abs(to - from) * 12))
    const t = setTimeout(() => {
      const next = Math.min(pathIdx + 1, path.length - 1)
      setPathIdx(next)
      if (next >= path.length - 1) setRunning(false)
    }, ms)
    return () => clearTimeout(t)
  }, [running, pathIdx, path, reduced])

  const segMs = reduced ? 0 : Math.min(1500, Math.max(140, Math.abs(cur - prev) * 12))
  const pct = (c: number): string => `${(c / MAX_CYL) * 100}%`

  const addRequest = () => {
    const v = parseInt(addText, 10)
    if (Number.isNaN(v) || v < 0 || v > MAX_CYL) return
    changeScenario(() => setRequests((r) => (r.includes(v) || r.length >= 16 ? r : [...r, v])))
    setAddText('')
  }

  const applyPreset = () => {
    changeScenario(() => {
      setRequests([...PRESET_REQS])
      setHead(53)
    })
  }

  const compareRows = useMemo(() => {
    const rows = ALGOS.map((a) => ({ algo: a, ...planFor(a.id, head, dir, requests) }))
    rows.sort((x, y) => x.travel - y.travel)
    return rows
  }, [head, dir, requests])

  const maxCompare = Math.max(1, ...compareRows.map((r) => r.travel))

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <HardDrive className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Disk Scheduler</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Sweep cylinders 0–199 with FCFS, SSTF, SCAN, C-SCAN and C-LOOK — and watch total head movement change with
            every strategy.
          </p>
        </div>
      </div>

      {/* config */}
      <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-3">
        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          algorithm
          <div className="flex overflow-hidden rounded-lg border border-border" role="group" aria-label="Algorithm">
            {ALGOS.map((a) => (
              <button
                key={a.id}
                onClick={() => changeScenario(() => setAlgo(a.id))}
                className={
                  'h-8 px-2.5 text-[11px] font-medium transition ' +
                  (algo === a.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground')
                }
              >
                {a.label}
              </button>
            ))}
          </div>
        </label>

        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          head direction
          <div className="flex overflow-hidden rounded-lg border border-border" role="group" aria-label="Head direction">
            {(['up', 'down'] as Dir[]).map((dv) => (
              <button
                key={dv}
                onClick={() => changeScenario(() => setDir(dv))}
                title={`Sweep ${dv === 'up' ? 'toward 199' : 'toward 0'} first (SCAN family)`}
                className={
                  'flex h-8 items-center gap-1 px-2.5 text-[11px] font-medium transition ' +
                  (dir === dv ? 'bg-teal-600 text-white' : 'bg-muted/30 text-muted-foreground hover:bg-muted/60')
                }
              >
                {dv === 'up' ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                {dv}
              </button>
            ))}
          </div>
        </label>

        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          head at cylinder
          <Input
            type="number"
            min={0}
            max={MAX_CYL}
            value={head}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10)
              changeScenario(() => setHead(Number.isNaN(v) ? 0 : Math.max(0, Math.min(MAX_CYL, v))))
            }}
            className="h-10 w-24 border-border bg-background font-mono"
            aria-label="Head cylinder"
          />
        </label>

        <Button size="sm" variant="outline" onClick={applyPreset}>
          Classic preset (head 53)
        </Button>
      </div>

      {/* requests editor */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          pending ({requests.length})
        </span>
        {requests.map((r) => (
          <span
            key={r}
            className="inline-flex items-center gap-1 rounded-md border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono text-xs text-amber-300"
          >
            {r}
            <button
              onClick={() => changeScenario(() => setRequests((rs) => rs.filter((x) => x !== r)))}
              aria-label={`Remove request ${r}`}
              className="text-amber-400/60 transition hover:text-rose-400"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
        {requests.length === 0 && <span className="text-xs text-muted-foreground/60">no pending requests</span>}
        <span className="ml-2 flex items-center gap-1.5">
          <Input
            value={addText}
            onChange={(e) => setAddText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') addRequest()
            }}
            placeholder="add 0–199"
            className="h-8 w-24 border-border bg-background font-mono text-xs"
            aria-label="New request cylinder"
          />
          <Button size="sm" variant="outline" onClick={addRequest}>
            Add
          </Button>
        </span>
      </div>

      {/* ruler */}
      <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-background/50 p-1">
        <div className="relative mx-4 h-32 min-w-[540px]">
          {/* request labels + ticks */}
          {requests.map((r, i) => {
            const served = servedSet.has(r)
            const top = i % 2 === 0 ? 'top-0' : 'top-[22px]'
            return (
              <div key={r} className="absolute" style={{ left: pct(r), transform: 'translateX(-50%)' }}>
                <span
                  className={
                    'absolute flex -translate-x-1/2 items-center gap-0.5 whitespace-nowrap font-mono text-[10px] font-bold ' +
                    top +
                    ' left-1/2 ' +
                    (served ? 'text-emerald-400' : 'text-amber-400')
                  }
                >
                  {served && <Check className="h-3 w-3" />}
                  {r}
                </span>
                <div
                  className={
                    'absolute top-[44px] h-5 w-[3px] -translate-x-1/2 rounded-sm transition-colors duration-300 ' +
                    (served ? 'bg-emerald-400' : 'bg-amber-400/90')
                  }
                />
              </div>
            )
          })}

          {/* baseline */}
          <div className="absolute inset-x-0 top-[64px] h-0.5 rounded bg-border" />
          {/* minor ticks */}
          {Array.from({ length: 40 }, (_, i) => i * 5).map((c) => (
            <div key={c} className="absolute top-[64px] h-2 w-px bg-border" style={{ left: pct(c) }} />
          ))}
          {/* major labels */}
          {[0, 25, 50, 75, 100, 125, 150, 175, 199].map((c) => (
            <span
              key={c}
              className="absolute top-[74px] -translate-x-1/2 font-mono text-[10px] text-muted-foreground/70"
              style={{ left: pct(c) }}
            >
              {c}
            </span>
          ))}

          {/* head marker */}
          <motion.div
            className="absolute top-[64px] flex -translate-x-1/2 flex-col items-center"
            animate={{ left: pct(cur) }}
            transition={{ duration: segMs / 1000, ease: 'linear' }}
          >
            <div className="h-0 w-0 border-x-[7px] border-b-[10px] border-x-transparent border-b-emerald-400" />
            <div className="absolute top-[12px] h-4 w-[3px] -translate-x-1/2 bg-emerald-400/40" />
            <span className="absolute top-[80px] whitespace-nowrap rounded-md border border-emerald-500/50 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
              head {cur}
            </span>
          </motion.div>
        </div>
      </div>

      {/* controls + status */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          onClick={() => {
            if (running) {
              setRunning(false)
            } else {
              if (!started && !finished) setPathIdx(0)
              else if (finished) setPathIdx(0)
              setRunning(true)
            }
          }}
          disabled={path.length <= 1}
          className="min-w-[92px]"
        >
          {running ? (
            <>
              <Pause className="mr-1 h-4 w-4" /> Pause
            </>
          ) : (
            <>
              <Play className="mr-1 h-4 w-4" /> {finished ? 'Run again' : started ? 'Resume' : 'Run'}
            </>
          )}
        </Button>
        {(running || started) && !finished && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setRunning(false)
              setPathIdx(path.length - 1)
            }}
          >
            <FastForward className="mr-1 h-4 w-4" /> Skip to end
          </Button>
        )}
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            setPathIdx(0)
            setRunning(false)
          }}
          aria-label="Reset run"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        <span className="font-mono text-xs text-muted-foreground">
          serviced {servedCount}/{requests.length}
          {running ? ' — sweeping…' : finished ? ' — done' : ''}
        </span>

        <div className="ml-auto flex items-center gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-2">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">total head movement</span>
            <span className="font-mono text-2xl font-bold leading-none text-amber-300 tabular-nums">
              {totalShown.toLocaleString('en-US')}
            </span>
          </div>
          <span className="text-[10px] text-muted-foreground">
            cylinders
            <br />
            {activeAlgo?.label}
            {activeAlgo?.scanFamily ? (dir === 'up' ? ' ↑' : ' ↓') : ''}
          </span>
        </div>
      </div>

      {/* path sequence */}
      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-background/50">
        <div className="border-b border-border px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          head path
        </div>
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5 p-3 font-mono text-xs">
          <span className="rounded-md border border-emerald-500/50 bg-emerald-500/15 px-2 py-0.5 font-semibold text-emerald-300">
            {head}
          </span>
          {plan.order.map((c, i) => {
            const visited = i < pathIdx
            const isJump = i === plan.jumpAt
            return (
              <span key={`${c}-${i}`} className="flex items-center">
                <span className={isJump ? 'text-teal-400' : 'text-muted-foreground/50'}>{isJump ? '↩' : '→'}</span>
                <span
                  className={
                    'rounded-md border px-2 py-0.5 transition-colors duration-300 ' +
                    (visited
                      ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300'
                      : 'border-border bg-muted/20 text-muted-foreground/70')
                  }
                >
                  {c}
                  {isJump ? ' (wrap)' : ''}
                </span>
              </span>
            )
          })}
          {plan.order.length === 0 && <span className="text-muted-foreground/60">add requests to build a path</span>}
        </div>
      </div>

      <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
        SCAN sweeps to the disk edge before reversing when requests wait on the other side; C-SCAN wraps from the edge
        back to 0 (the return seek is not counted); C-LOOK jumps straight from the last request to the farthest pending
        one. The direction toggle affects the SCAN family only.
      </p>

      {/* compare all */}
      <div className="mt-3">
        <Button size="sm" variant="outline" onClick={() => setShowCompare((v) => !v)} aria-expanded={showCompare}>
          <BarChart3 className="mr-1 h-4 w-4" /> {showCompare ? 'Hide comparison' : 'Compare all 5'}
        </Button>
        {showCompare && (
          <div className="mt-3 rounded-xl border border-border bg-background/50 p-4">
            <div className="flex flex-col gap-2">
              {compareRows.map((row, i) => {
                const best = i === 0
                const selected = row.algo.id === algo
                return (
                  <button
                    key={row.algo.id}
                    onClick={() => changeScenario(() => setAlgo(row.algo.id))}
                    className={
                      'flex items-center gap-3 rounded-lg border px-3 py-2 text-left transition ' +
                      (selected ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-transparent hover:bg-muted/30')
                    }
                  >
                    <span className="flex w-20 shrink-0 items-center gap-1 text-xs font-semibold text-foreground">
                      {best && <Trophy className="h-3.5 w-3.5 text-amber-400" />}
                      {row.algo.label}
                    </span>
                    <div className="h-5 flex-1 overflow-hidden rounded bg-muted/40">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(row.travel / maxCompare) * 100}%` }}
                        transition={{ duration: reduced ? 0 : 0.6, ease: 'easeOut', delay: reduced ? 0 : i * 0.08 }}
                        className={'h-full rounded ' + (best ? 'bg-amber-400' : 'bg-emerald-500/50')}
                      />
                    </div>
                    <span className={'w-14 shrink-0 text-right font-mono text-sm font-bold ' + (best ? 'text-amber-300' : 'text-foreground')}>
                      {row.travel.toLocaleString('en-US')}
                    </span>
                  </button>
                )
              })}
            </div>
            <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <ArrowRight className="h-3 w-3" /> sorted best-first — click a row to load that algorithm.
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          load the classic preset — FCFS pays{' '}
          <span className="font-mono text-foreground">640</span> cylinders zig-zagging across the platter, while SSTF
          greedily trims it to <span className="font-mono text-foreground">236</span>. Then compare all five: C-LOOK
          usually wins by never sweeping past the last request, and flipping the head direction reshuffles the SCAN
          family entirely.
        </span>
      </div>
    </div>
  )
}
