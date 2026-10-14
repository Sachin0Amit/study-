'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronLeft, ChevronRight, Divide, Lightbulb, Pause, Play, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

/* ------------------------------------------------------------------ */
/*  Euclid helpers                                                     */
/* ------------------------------------------------------------------ */

interface EuclidStep { a: number; b: number; q: number; r: number }

function euclidSteps(a0: number, b0: number): { steps: EuclidStep[]; gcd: number } {
  const steps: EuclidStep[] = []
  let a = Math.max(a0, b0)
  let b = Math.min(a0, b0)
  while (b > 0) {
    const q = Math.floor(a / b)
    const r = a % b
    steps.push({ a, b, q, r })
    a = b
    b = r
  }
  return { steps, gcd: a }
}

const fmt = (x: number): string => x.toLocaleString('en-US')

/* ------------------------------------------------------------------ */
/*  Sieve helpers                                                      */
/* ------------------------------------------------------------------ */

type CellState = 'unknown' | 'prime' | 'composite'
type SieveEvent = { type: 'prime'; value: number } | { type: 'strike'; value: number }

function sieveEvents(): { events: SieveEvent[]; totalPrimes: number } {
  const events: SieveEvent[] = []
  const state: CellState[] = Array<CellState>(101).fill('unknown')
  for (let p = 2; p <= 10; p++) {
    if (state[p] === 'unknown') {
      state[p] = 'prime'
      events.push({ type: 'prime', value: p })
      for (let m = 2 * p; m <= 100; m += p) {
        if (state[m] === 'unknown') {
          state[m] = 'composite'
          events.push({ type: 'strike', value: m })
        }
      }
    }
  }
  for (let v = 11; v <= 100; v++) {
    if (state[v] === 'unknown') {
      state[v] = 'prime'
      events.push({ type: 'prime', value: v })
    }
  }
  return { events, totalPrimes: state.filter((s) => s === 'prime').length }
}

/* ------------------------------------------------------------------ */
/*  Main component with tabs                                           */
/* ------------------------------------------------------------------ */

export default function GcdStepper() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Divide className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">GCD Stepper</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Watch the Euclidean algorithm grind remainders to zero, or sieve the primes up to 100 strike by strike.
          </p>
        </div>
      </div>

      <Tabs defaultValue="euclid" className="mt-4 gap-4">
        <TabsList>
          <TabsTrigger value="euclid">Euclid</TabsTrigger>
          <TabsTrigger value="sieve">Prime Sieve</TabsTrigger>
        </TabsList>
        <TabsContent value="euclid">
          <EuclidLab />
        </TabsContent>
        <TabsContent value="sieve">
          <SieveLab />
        </TabsContent>
      </Tabs>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          in Euclid, enter <span className="font-mono text-foreground">a = 1071</span>,{' '}
          <span className="font-mono text-foreground">b = 462</span> — the gcd 21 appears after only 3 divisions.
          Then switch to the sieve and step slowly past 49: it survives 2, 3 and 5, and only falls to 7.
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Euclid tab                                                         */
/* ------------------------------------------------------------------ */

function EuclidLab() {
  const [a, setA] = useState(252)
  const [b, setB] = useState(198)
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const { steps, gcd } = useMemo(() => euclidSteps(a, b), [a, b])
  const lcm = useMemo(() => (gcd > 0 ? Math.round((a * b) / gcd) : 0), [a, b, gcd])
  const done = idx >= steps.length
  const current = done ? null : steps[idx]
  const visible = done ? steps : steps.slice(0, idx + 1)

  // reset progress whenever inputs change
  const changeA = (raw: string): void => {
    setA(clampInput(raw))
    setIdx(0)
    setPlaying(false)
  }
  const changeB = (raw: string): void => {
    setB(clampInput(raw))
    setIdx(0)
    setPlaying(false)
  }

  useEffect(() => {
    if (!playing || done) return
    timerRef.current = setTimeout(() => {
      const next = Math.min(steps.length, idx + 1)
      setIdx(next)
      if (next >= steps.length) setPlaying(false)
    }, 1200)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [playing, idx, done, steps.length])

  const clampInput = (raw: string): number => {
    const v = parseInt(raw, 10)
    if (Number.isNaN(v)) return 1
    return Math.min(9999, Math.max(1, v))
  }

  // visual division strip for the current (or last) step
  const stripStep = current ?? steps[steps.length - 1] ?? null
  const strip = (() => {
    const s = stripStep
    if (!s) return null
    const segs: Array<{ key: string; w: number; kind: 'b' | 'r' }> = []
    for (let i = 0; i < s.q; i++) {
      segs.push({ key: `b-${i}`, w: (s.b / s.a) * 100, kind: 'b' })
    }
    if (s.r > 0) segs.push({ key: 'r', w: (s.r / s.a) * 100, kind: 'r' })
    return { segs, step: s }
  })()

  const chain = [a, b, ...steps.slice(0, done ? steps.length : idx + 1).map((s) => s.r)]

  return (
    <div className="flex flex-col gap-4">
      {/* inputs */}
      <div className="flex flex-wrap items-end gap-3">
        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          a
          <Input
            type="number"
            min={1}
            max={9999}
            value={a}
            onChange={(e) => changeA(e.target.value)}
            className="h-10 w-28 border-border bg-background font-mono"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          b
          <Input
            type="number"
            min={1}
            max={9999}
            value={b}
            onChange={(e) => changeB(e.target.value)}
            className="h-10 w-28 border-border bg-background font-mono"
          />
        </label>
        <span className="mb-1 font-mono text-sm text-muted-foreground">
          gcd(<span className="text-foreground">{a}</span>, <span className="text-foreground">{b}</span>) ={' '}
          <span className="font-semibold text-emerald-400">{gcd}</span>
        </span>
      </div>

      {/* division strip */}
      {strip && stripStep && (
        <div className="rounded-xl border border-border bg-background/50 p-4">
          <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
            Division layout — a as q copies of b plus r
          </p>
          <div className="mt-3 flex h-8 w-full overflow-hidden rounded-lg border border-border/60">
            {strip.segs.map((seg) => (
              <div
                key={seg.key}
                className={`flex items-center justify-center border-r border-zinc-900/40 text-[10px] font-bold text-zinc-900 last:border-r-0 ${
                  seg.kind === 'r' ? 'bg-amber-400' : 'bg-zinc-400'
                }`}
                style={{ width: `${Math.max(seg.w, 0.1)}%` }}
                title={seg.kind === 'r' ? `remainder ${stripStep.r}` : `b = ${stripStep.b}`}
              >
                {seg.kind === 'r' ? `r=${stripStep.r}` : ''}
              </div>
            ))}
          </div>
          <p className="mt-2 text-center font-mono text-sm text-foreground">
            {stripStep.a} = <span className="text-zinc-300">{stripStep.b}</span> ×{' '}
            <span className="text-zinc-300">{stripStep.q}</span> +{' '}
            <span className={`font-bold ${stripStep.r > 0 ? 'text-amber-400' : 'text-muted-foreground'}`}>
              {stripStep.r}
            </span>
          </p>
        </div>
      )}

      {/* remainder chain */}
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-xs text-muted-foreground">Remainders:</span>
        {chain.map((v, i) => (
          <motion.span
            key={`${i}-${v}`}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`rounded-md px-2 py-1 font-mono text-xs ${
              done && i === chain.length - 1
                ? 'bg-emerald-500/20 font-bold text-emerald-300 ring-1 ring-emerald-500/50'
                : v === 0
                  ? 'bg-muted/40 text-muted-foreground/50'
                  : 'bg-muted/40 text-foreground'
            }`}
          >
            {fmt(v)}
          </motion.span>
        ))}
      </div>

      {/* step list */}
      <div className="flex flex-col gap-1.5">
        <AnimatePresence initial={false}>
          {visible.map((s, i) => (
            <motion.div
              key={`${s.a}-${s.b}-${i}`}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: i === idx && !done ? 1 : 0.62, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`rounded-lg border px-3 py-2 font-mono text-sm ${
                i === idx && !done
                  ? 'border-amber-500/60 bg-amber-500/10 text-foreground'
                  : 'border-border bg-muted/20 text-muted-foreground'
              }`}
            >
              {fmt(s.a)} = {fmt(s.b)} × {s.q} +{' '}
              <span className={s.r > 0 ? 'font-bold text-amber-400' : 'text-muted-foreground'}>{s.r}</span>
              {s.r > 0 && <span className="ml-2 text-[10px] text-muted-foreground/70">next pair: ({fmt(s.b)}, {fmt(s.r)})</span>}
            </motion.div>
          ))}
        </AnimatePresence>
        {steps.length === 0 && (
          <div className="rounded-lg border border-dashed border-border px-3 py-4 text-center text-sm text-muted-foreground">
            Enter two positive integers above.
          </div>
        )}
      </div>

      {/* result card */}
      <AnimatePresence>
        {done && steps.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Check className="h-5 w-5 text-emerald-400" />
              <span className="font-mono text-lg font-semibold text-emerald-300">
                gcd({fmt(a)}, {fmt(b)}) = {gcd}
              </span>
              <span className="text-xs text-muted-foreground">
                — the last non-zero remainder after {steps.length} division{steps.length === 1 ? '' : 's'}.
              </span>
            </div>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              check: gcd · lcm = a · b → {gcd} × {fmt(lcm)} = {fmt(gcd * lcm)} = {fmt(a)} × {fmt(b)}{' '}
              <span className="text-emerald-400">✓</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* controls */}
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant="outline" onClick={() => setIdx((i) => Math.max(0, i - 1))} disabled={idx === 0}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          onClick={() => setPlaying((p) => !p)}
          disabled={done && steps.length > 0}
          className="min-w-[86px]"
        >
          {playing ? <Pause className="mr-1 h-4 w-4" /> : <Play className="mr-1 h-4 w-4" />}
          {playing ? 'Pause' : 'Auto'}
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIdx((i) => Math.min(steps.length, i + 1))}
          disabled={done}
        >
          <ChevronRight className="h-4 w-4" />
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
        <span className="ml-1 font-mono text-xs text-muted-foreground">
          step {Math.min(idx, steps.length)} / {steps.length}
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Sieve tab                                                          */
/* ------------------------------------------------------------------ */

function SieveLab() {
  const { events, totalPrimes } = useMemo(() => sieveEvents(), [])
  const [states, setStates] = useState<CellState[]>(() => Array<CellState>(101).fill('unknown'))
  const [applied, setApplied] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [strikeTick, setStrikeTick] = useState<Record<number, number>>({})
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const applyEvent = (e: SieveEvent) => {
    setStates((prev) => {
      const nx = [...prev]
      nx[e.value] = e.type === 'prime' ? 'prime' : 'composite'
      return nx
    })
    if (e.type === 'strike') setStrikeTick((prev) => ({ ...prev, [e.value]: applied }))
  }

  useEffect(() => {
    if (!playing || applied >= events.length) return
    timerRef.current = setTimeout(
      () => {
        const e = events[applied]
        if (e) applyEvent(e)
        const next = applied + 1
        setApplied(next)
        if (next >= events.length) setPlaying(false)
      },
      applied < 4 ? 350 : 110,
    )
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [playing, applied, events])

  const primesFound = states.reduce((acc, s) => (s === 'prime' ? acc + 1 : acc), 0)
  const currentSweeping = events.slice(0, applied).reverse().find((e) => e.type === 'prime')
  const done = applied >= events.length

  const reset = () => {
    setPlaying(false)
    setStates(Array<CellState>(101).fill('unknown'))
    setApplied(0)
    setStrikeTick({})
  }

  const cellClass = (v: number): string => {
    const st = states[v]
    const flashing = strikeTick[v] !== undefined && applied - strikeTick[v] <= 2
    if (flashing) return 'border-amber-300 bg-amber-400/80 font-bold text-zinc-900'
    if (st === 'prime') return 'border-emerald-500/60 bg-emerald-500/20 font-bold text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.35)]'
    if (st === 'composite') return 'border-border/40 bg-transparent text-muted-foreground/50 line-through'
    return 'border-border bg-muted/30 text-muted-foreground'
  }

  return (
    <div className="flex flex-col gap-4">
      {/* grid */}
      <div className="grid grid-cols-10 gap-1 sm:gap-1.5">
        {Array.from({ length: 100 }, (_, i) => i + 1).map((v) => (
          <motion.div
            key={v}
            initial={false}
            animate={{ scale: strikeTick[v] !== undefined && applied - strikeTick[v] <= 1 ? 1.18 : 1 }}
            transition={{ duration: 0.18 }}
            className={`flex aspect-square items-center justify-center rounded-md border font-mono text-[10px] transition-colors duration-300 sm:text-xs ${cellClass(v)}`}
          >
            {v}
          </motion.div>
        ))}
      </div>

      {/* status + legend */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="font-mono text-foreground">
          primes found: <span className="font-bold text-emerald-400">{primesFound}</span>
          <span className="text-muted-foreground"> / {totalPrimes}</span>
        </span>
        {currentSweeping && !done && (
          <span className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 font-mono text-amber-300">
            sweeping multiples of {currentSweeping.value}
          </span>
        )}
        {done && (
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/50 bg-emerald-500/15 px-2.5 py-1 font-mono font-semibold text-emerald-300">
            <Check className="h-3.5 w-3.5" /> 25 primes below 100
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded border border-border bg-muted/30" /> not yet tested
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded border border-amber-300 bg-amber-400/80" /> just struck
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded border border-border/40 bg-transparent" /> composite (struck out)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded border border-emerald-500/60 bg-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.5)]" /> prime
        </span>
      </div>

      {/* controls */}
      <div className="flex flex-wrap items-center gap-1.5">
        <Button
          size="sm"
          onClick={() => {
            if (applied < events.length) setPlaying((p) => !p)
          }}
          disabled={done}
          className="min-w-[86px]"
        >
          {playing ? <Pause className="mr-1 h-4 w-4" /> : <Play className="mr-1 h-4 w-4" />}
          {playing ? 'Pause' : 'Play'}
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            if (!playing && applied < events.length) {
              const e = events[applied]
              if (e) applyEvent(e)
              setApplied((x) => x + 1)
            }
          }}
          disabled={playing || done}
        >
          Step
        </Button>
        <Button size="sm" variant="ghost" onClick={reset} aria-label="Reset sieve">
          <RotateCcw className="h-4 w-4" />
        </Button>
        <span className="ml-1 font-mono text-xs text-muted-foreground">
          {applied} / {events.length} steps
        </span>
      </div>
    </div>
  )
}
