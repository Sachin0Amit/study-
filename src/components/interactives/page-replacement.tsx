'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  AlertTriangle,
  Database,
  Lightbulb,
  Pause,
  Play,
  RotateCcw,
  SkipForward,
  StepBack,
  StepForward,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Types + engine                                                     */
/* ------------------------------------------------------------------ */

type PRAlgo = 'fifo' | 'lru' | 'opt' | 'clock'

interface PRStep {
  page: number
  hit: boolean
  frames: (number | null)[]
  refBits: boolean[]
  pointer: number
  changedSlot: number | null
  evicted: number | null
  faultCount: number
  reason: string
}

function simulatePR(refs: number[], frameCount: number, algo: PRAlgo): PRStep[] {
  const k = frameCount
  const steps: PRStep[] = []
  if (k <= 0) return steps
  const frames: (number | null)[] = Array.from({ length: k }, () => null)
  const refBits = Array.from({ length: k }, () => false)
  const lastUse = new Map<number, number>()
  let pointer = 0
  let faultCount = 0
  const fifoQueue: number[] = []

  refs.forEach((page, i) => {
    const slot = frames.indexOf(page)
    if (slot >= 0) {
      refBits[slot] = true
      lastUse.set(page, i)
      steps.push({
        page,
        hit: true,
        frames: [...frames],
        refBits: [...refBits],
        pointer,
        changedSlot: null,
        evicted: null,
        faultCount,
        reason: `hit — page ${page} already in frame ${slot + 1}`,
      })
      return
    }

    faultCount++
    const empty = frames.indexOf(null)
    let target: number
    let evicted: number | null = null
    let why = ''

    if (algo === 'clock') {
      if (empty >= 0) {
        target = empty
        why = 'empty frame'
      } else {
        while (frames[pointer] !== null && refBits[pointer]) {
          refBits[pointer] = false
          pointer = (pointer + 1) % k
        }
        target = pointer
        evicted = frames[target]
        why = 'second-chance victim after the hand cleared its bit'
      }
    } else if (empty >= 0) {
      target = empty
      why = 'empty frame'
    } else if (algo === 'fifo') {
      const victim = fifoQueue.shift() ?? 0
      target = frames.indexOf(victim)
      evicted = victim
      why = 'oldest page in the queue'
    } else if (algo === 'lru') {
      let bestSlot = 0
      let bestTime = Infinity
      frames.forEach((p, s) => {
        const lu = lastUse.get(p ?? -1) ?? -1
        if (lu < bestTime) {
          bestTime = lu
          bestSlot = s
        }
      })
      target = bestSlot
      evicted = frames[target]
      why = 'least recently used'
    } else {
      let bestSlot = 0
      let bestDist = -1
      let neverAgain = false
      frames.forEach((p, s) => {
        let d = Infinity
        for (let j = i + 1; j < refs.length; j++) {
          if (refs[j] === p) {
            d = j - i
            break
          }
        }
        if (d > bestDist) {
          bestDist = d
          bestSlot = s
          neverAgain = d === Infinity
        }
      })
      target = bestSlot
      evicted = frames[target]
      why = neverAgain ? 'never used again' : 'furthest next use'
    }

    if (algo !== 'clock') evicted = frames[target]
    frames[target] = page
    refBits[target] = true
    if (algo === 'clock') pointer = (target + 1) % k
    fifoQueue.push(page)
    lastUse.set(page, i)
    steps.push({
      page,
      hit: false,
      frames: [...frames],
      refBits: [...refBits],
      pointer,
      changedSlot: target,
      evicted,
      faultCount,
      reason: `fault — page ${page} into frame ${target + 1} (${evicted !== null ? `evicted ${evicted}, ${why}` : why})`,
    })
  })
  return steps
}

function parseRefs(text: string): number[] {
  return text
    .split(/[\s,;]+/)
    .filter((tok) => /^\d+$/.test(tok))
    .map((tok) => Math.min(999, Number.parseInt(tok, 10)))
    .slice(0, 40)
}

const PR_HINT: Record<PRAlgo, string> = {
  fifo: 'FIFO evicts the oldest loaded page — pure queue order, no recency.',
  lru: 'LRU evicts the least recently used page — approximates locality of reference.',
  opt: 'Optimal evicts the page whose next use is furthest away — needs the future, the benchmark.',
  clock: 'Clock is second-chance FIFO: the hand sweeps, clearing reference bits, and only evicts a page with bit 0.',
}

const PR_PRESETS: { key: string; label: string; refs: number[]; algo: PRAlgo; frames: number; note: string }[] = [
  {
    key: 'belady',
    label: "Belady's anomaly",
    refs: [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5],
    algo: 'fifo',
    frames: 3,
    note: 'Both fault totals are compared side by side below — then bump frames to 4 yourself and watch the count go the wrong way.',
  },
  {
    key: 'lru-fifo',
    label: 'LRU vs FIFO',
    refs: [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2],
    algo: 'fifo',
    frames: 3,
    note: 'Run it with FIFO (10 faults), then switch to LRU — 9 faults: recency tracking pays off on the same string.',
  },
  {
    key: 'optimal',
    label: 'Optimal demo',
    refs: [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1],
    algo: 'opt',
    frames: 3,
    note: 'The classic string from the textbook: Optimal looks into the future and lands 9 faults with 3 frames.',
  },
]

const SPEEDS = [0.5, 1, 2, 4]

/* shared cell classes */
const CELL = 'min-w-[2.25rem] border-b border-r border-border/50 px-1 py-1.5 text-center align-middle font-mono text-xs'
const LABEL = 'sticky left-0 z-10 border-b border-r border-border bg-card px-3 py-1.5 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground'
const CUR = 'outline outline-1 -outline-offset-1 outline-emerald-400/70'

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PageReplacement() {
  const reduce = useReducedMotion()
  const [refText, setRefText] = useState('7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1')
  const [algo, setAlgo] = useState<PRAlgo>('fifo')
  const [frames, setFrames] = useState(3)
  const [speed, setSpeed] = useState(1)
  const [playing, setPlaying] = useState(false)
  const [step, setStep] = useState(0)
  const [beladyMode, setBeladyMode] = useState(false)
  const [presetNote, setPresetNote] = useState('')
  const gridRef = useRef<HTMLDivElement | null>(null)

  const refs = useMemo(() => parseRefs(refText), [refText])
  const trace = useMemo(() => simulatePR(refs, frames, algo), [refs, frames, algo])

  // any change of the simulation restarts playback (render-time adjust)
  const [prevTrace, setPrevTrace] = useState(trace)
  if (prevTrace !== trace) {
    setPrevTrace(trace)
    setPlaying(false)
    setStep(0)
  }

  // playback loop
  useEffect(() => {
    if (!playing) return
    const t = setTimeout(() => {
      if (step >= trace.length) setPlaying(false)
      else setStep((s) => Math.min(trace.length, s + 1))
    }, Math.round(950 / speed))
    return () => clearTimeout(t)
  }, [playing, step, speed, trace])

  // keep the current column in view
  useEffect(() => {
    const el = gridRef.current
    if (!el || step <= 0) return
    const cell = el.querySelector<HTMLElement>('[data-cur="1"]')
    cell?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' })
  }, [step, reduce])

  const cur = step > 0 && step <= trace.length ? trace[step - 1] : null
  const totalFaults = trace.length ? trace[trace.length - 1].faultCount : 0
  const totalHits = refs.length - totalFaults
  const curFaults = cur ? cur.faultCount : 0
  const curHits = step - curFaults
  const hitRatio = refs.length > 0 ? totalHits / refs.length : 0

  const beladyCompare = useMemo(() => {
    if (!beladyMode || refs.length === 0) return null
    const a = simulatePR(refs, 3, 'fifo')
    const b = simulatePR(refs, 4, 'fifo')
    const fa = a.length ? a[a.length - 1].faultCount : 0
    const fb = b.length ? b[b.length - 1].faultCount : 0
    return { fa, fb }
  }, [beladyMode, refs])

  const applyPreset = (key: string) => {
    const p = PR_PRESETS.find((x) => x.key === key)
    if (!p) return
    setRefText(p.refs.join(','))
    setAlgo(p.algo)
    setFrames(p.frames)
    setBeladyMode(p.key === 'belady')
    setPresetNote(p.note)
    setPlaying(false)
    setStep(0)
  }

  const onPlay = () => {
    if (step >= trace.length) {
      setStep(0)
      setPlaying(true)
    } else setPlaying((p) => !p)
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Database className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Page Replacement Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            March a reference string through the frame table — FIFO, LRU, Optimal and Clock, fault by fault, with the
            classic step grid.
          </p>
        </div>
      </div>

      {/* presets */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Presets</span>
        {PR_PRESETS.map((p) => (
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
      {presetNote && <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{presetNote}</p>}

      {/* reference string */}
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2">
          <span className="shrink-0 text-xs text-muted-foreground">Reference string</span>
          <Input
            value={refText}
            onChange={(e) => {
              setRefText(e.target.value)
              setBeladyMode(false)
            }}
            placeholder="comma or space separated, e.g. 7,0,1,2,0,3"
            className="flex-1 bg-card font-mono text-xs"
            aria-label="Reference string"
          />
        </div>
        <span className="shrink-0 rounded-lg border border-border bg-muted/30 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground">
          {refs.length} refs · {new Set(refs).size} pages
        </span>
      </div>

      {/* algorithm + frames */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Algorithm</span>
          <Select value={algo} onValueChange={(v) => setAlgo(v as PRAlgo)}>
            <SelectTrigger size="sm" className="h-9 w-[140px] bg-card text-xs" aria-label="Replacement algorithm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fifo">FIFO</SelectItem>
              <SelectItem value="lru">LRU</SelectItem>
              <SelectItem value="opt">Optimal</SelectItem>
              <SelectItem value="clock">Clock</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-xs text-muted-foreground">frames</span>
          <Slider
            min={3}
            max={8}
            step={1}
            value={[frames]}
            onValueChange={(v) => setFrames(v[0] ?? 3)}
            className="w-28"
            aria-label="Number of frames"
          />
          <span className="w-4 font-mono text-xs text-foreground">{frames}</span>
        </div>
        <p className="hidden text-[11px] text-muted-foreground md:block">{PR_HINT[algo]}</p>
      </div>

      {/* current reference */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-border bg-background/50 p-3">
        <div className="flex items-center gap-3">
          <motion.div
            key={step}
            initial={reduce || step === 0 ? false : { scale: 0.55, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 24 }}
            className="flex h-11 min-w-11 items-center justify-center rounded-lg border border-border bg-muted/40 px-2 font-mono text-lg font-bold text-foreground"
            aria-live="polite"
          >
            {cur ? cur.page : '–'}
          </motion.div>
          {cur ? (
            cur.hit ? (
              <span className="inline-flex items-center rounded-md bg-emerald-500/15 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-500/40">
                hit
              </span>
            ) : (
              <span className="inline-flex items-center rounded-md bg-rose-500/15 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-300 ring-1 ring-rose-500/40">
                fault{cur.evicted !== null ? ` — evicted ${cur.evicted}` : ''}
              </span>
            )
          ) : (
            <span className="text-xs text-muted-foreground">press play, or step through the string</span>
          )}
        </div>
        <div className="ml-auto flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
          <span>
            faults <b className="text-rose-400">{curFaults}</b>
          </span>
          <span>
            hits <b className="text-emerald-400">{curHits}</b>
          </span>
          <span>
            step <b className="text-foreground">{step}</b>/{trace.length}
          </span>
        </div>
      </div>

      {/* step grid */}
      {refs.length === 0 ? (
        <div className="mt-4 flex h-40 items-center justify-center rounded-xl border border-dashed border-border text-xs text-muted-foreground">
          Enter a reference string above to build the step grid.
        </div>
      ) : (
        <div className="mt-4">
          <div
            ref={gridRef}
            className="overflow-x-auto rounded-xl border border-border bg-muted/20"
            tabIndex={0}
            aria-label="Page replacement step grid — focus and use left and right arrow keys"
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') {
                e.preventDefault()
                setPlaying(false)
                setStep((s) => Math.min(trace.length, s + 1))
              } else if (e.key === 'ArrowLeft') {
                e.preventDefault()
                setPlaying(false)
                setStep((s) => Math.max(0, s - 1))
              }
            }}
          >
            <table className="min-w-max border-collapse" aria-label="Page replacement grid: columns are references, rows are frames">
              <thead>
                <tr>
                  <th className={LABEL}>Frame</th>
                  {refs.map((r, i) => {
                    const past = i < step
                    const isCur = i === step - 1
                    return (
                      <th
                        key={i}
                        scope="col"
                        data-cur={isCur ? '1' : undefined}
                        className={`min-w-[2.25rem] border-b border-r border-border/50 px-1 py-1.5 text-center font-mono text-xs font-bold ${
                          isCur
                            ? `bg-emerald-500/15 text-emerald-300 ${CUR}`
                            : past
                              ? 'bg-card text-foreground'
                              : 'bg-card text-muted-foreground/50'
                        }`}
                      >
                        {r}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: frames }, (_, f) => (
                  <tr key={f}>
                    <th scope="row" className={LABEL}>
                      Frame {f + 1}
                    </th>
                    {refs.map((_, i) => {
                      const past = i < step
                      const isCur = i === step - 1
                      if (!past) {
                        return <td key={i} className={`${CELL} border-dashed bg-transparent`} aria-hidden />
                      }
                      const st = trace[i]
                      const page = st.frames[f]
                      const changed = st.changedSlot === f
                      const pointed = algo === 'clock' && st.pointer === f
                      const bg = changed
                        ? 'bg-amber-500/25 font-bold text-amber-100'
                        : st.hit
                          ? 'bg-emerald-500/10 text-emerald-200'
                          : 'bg-card text-foreground'
                      return (
                        <td
                          key={i}
                          className={`${CELL} ${bg} ${isCur ? CUR : ''} ${pointed ? 'ring-1 ring-amber-400/80' : ''}`}
                          title={st.reason}
                        >
                          {page === null ? (
                            <span className="text-muted-foreground/40">·</span>
                          ) : (
                            <span className="relative inline-block">
                              {page}
                              {algo === 'clock' && (
                                <span
                                  className={`absolute -right-2 -top-1.5 h-1.5 w-1.5 rounded-full ${
                                    st.refBits[f] ? 'bg-amber-400' : 'bg-zinc-600'
                                  }`}
                                />
                              )}
                            </span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" className={LABEL}>
                    Verdict
                  </th>
                  {refs.map((_, i) => {
                    const past = i < step
                    const isCur = i === step - 1
                    if (!past) return <td key={i} className={`${CELL} border-dashed bg-transparent`} aria-hidden />
                    const st = trace[i]
                    return (
                      <td key={i} className={`${CELL} ${st.hit ? 'bg-emerald-500/10' : 'bg-rose-500/10'} ${isCur ? CUR : ''}`}>
                        <span
                          className={`mx-auto flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-bold ${
                            st.hit ? 'bg-emerald-500/25 text-emerald-300' : 'bg-rose-500/25 text-rose-300'
                          }`}
                        >
                          {st.hit ? 'H' : 'F'}
                        </span>
                      </td>
                    )
                  })}
                </tr>
                <tr>
                  <th scope="row" className={LABEL}>
                    Faults
                  </th>
                  {refs.map((_, i) => {
                    const past = i < step
                    const isCur = i === step - 1
                    if (!past) return <td key={i} className={`${CELL} border-dashed bg-transparent`} aria-hidden />
                    const st = trace[i]
                    return (
                      <td
                        key={i}
                        className={`${CELL} ${st.hit ? 'text-muted-foreground/50' : 'font-bold text-rose-300'} ${isCur ? CUR : ''}`}
                      >
                        {st.faultCount}
                      </td>
                    )
                  })}
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="mt-1.5 text-[11px] text-muted-foreground">
            {algo === 'clock'
              ? 'Clock: the amber ring marks the frame the hand points at, the dot on a page is its reference bit (amber = 1, grey = 0).'
              : PR_HINT[algo]}
          </p>
        </div>
      )}

      {/* playback controls */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <Button size="sm" onClick={onPlay} disabled={trace.length === 0} className="min-w-[88px]">
          {playing ? (
            <>
              <Pause className="mr-1 h-4 w-4" />Pause
            </>
          ) : (
            <>
              <Play className="mr-1 h-4 w-4" />
              {step >= trace.length && trace.length > 0 ? 'Replay' : 'Play'}
            </>
          )}
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setPlaying(false)
            setStep((s) => Math.max(0, s - 1))
          }}
          disabled={step <= 0}
          aria-label="Step back"
        >
          <StepBack className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setPlaying(false)
            setStep((s) => Math.min(trace.length, s + 1))
          }}
          disabled={step >= trace.length}
          aria-label="Step forward"
        >
          <StepForward className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setPlaying(false)
            setStep(trace.length)
          }}
          disabled={step >= trace.length}
        >
          <SkipForward className="mr-1 h-3.5 w-3.5" />All
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            setPlaying(false)
            setStep(0)
          }}
          disabled={step === 0}
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

      {/* final results */}
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="flex items-center gap-3 rounded-xl border border-rose-500/30 bg-rose-500/5 p-3">
          <span className="font-mono text-2xl font-bold text-rose-400">{totalFaults}</span>
          <span className="text-xs leading-tight text-muted-foreground">
            page faults
            <br /> out of {refs.length} references
          </span>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3">
          <span className="font-mono text-2xl font-bold text-emerald-400">{totalHits}</span>
          <span className="text-xs leading-tight text-muted-foreground">
            hits
            <br /> page already loaded
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-xl border border-border bg-background/50 p-3">
          <TeX tex={'\\text{hit ratio} = \\frac{\\text{hits}}{n}'} />
          <span className="font-mono text-lg font-bold text-emerald-400">= {hitRatio.toFixed(2)}</span>
        </div>
      </div>

      {/* Belady's anomaly side-by-side */}
      {beladyCompare && (
        <div className="mt-4 rounded-xl border border-amber-500/40 bg-amber-500/5 p-4">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">Belady&apos;s anomaly — 3 vs 4 frames (FIFO)</p>
              <div className="mt-2 grid grid-cols-2 gap-3 sm:max-w-md">
                <div className="rounded-lg border border-border bg-card p-3 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">3 frames</p>
                  <p className="font-mono text-2xl font-bold text-emerald-400">{beladyCompare.fa}</p>
                  <p className="text-[10px] text-muted-foreground">faults</p>
                </div>
                <div className="relative rounded-lg border border-border bg-card p-3 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">4 frames</p>
                  <p
                    className={`font-mono text-2xl font-bold ${
                      beladyCompare.fb > beladyCompare.fa ? 'text-amber-400' : 'text-emerald-400'
                    }`}
                  >
                    {beladyCompare.fb}
                  </p>
                  <p className="text-[10px] text-muted-foreground">faults</p>
                  {beladyCompare.fb > beladyCompare.fa && (
                    <Badge
                      variant="outline"
                      className="absolute -top-2.5 left-1/2 -translate-x-1/2 gap-1 border-amber-400/60 bg-amber-400/15 text-[10px] text-amber-300"
                    >
                      anomaly
                    </Badge>
                  )}
                </div>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                More frames produced MORE faults: FIFO is not a stack algorithm — its victim depends on the whole queue
                order, not on recency. LRU and Optimal satisfy the inclusion property (every{' '}
                <TeX tex="n" />-frame set contains the <TeX tex="(n-1)" />-frame set), which makes them immune to the
                anomaly.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          load <span className="font-medium text-foreground">Belady&apos;s anomaly</span> and confirm that 3 frames beat
          4 under FIFO. Then switch the algorithm to LRU and rerun both — the anomaly disappears, because stack
          algorithms can only ever gain from extra frames.
        </span>
      </div>
    </div>
  )
}
