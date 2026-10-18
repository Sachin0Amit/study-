'use client'

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  TrendingUp,
  GitFork,
  Tornado,
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  Info,
  RefreshCw,
  Crosshair,
  Gauge
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

/* ================= shared scaffolding ================= */

// Every canvas carries its own fixed warm-charcoal stage, so the sims read
// identically in light and dark mode.
const CANVAS_BG = '#0d0b09'

function Explainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mt-4 flex gap-2.5 rounded-xl border border-border/60 bg-muted/20 p-3.5"
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/80" />
      <p className="text-xs leading-relaxed text-muted-foreground font-serif italic">
        <span className="mr-1.5 font-sans not-italic font-semibold text-foreground/80">
          What to notice —
        </span>
        {children}
      </p>
    </motion.div>
  )
}

/* ---- logistic map: pure math helpers (no react) ---- */

const logistic = (x: number, r: number) => r * x * (1 - x)

/*
 * Cycle detection on the last 30 iterates: cluster near-identical values,
 * then verify the visit order actually repeats with some period p. A true
 * period-p orbit revisits the same clusters in the same sequence; a chaotic
 * or still-settling orbit keeps producing fresh patterns.
 */
function detectCycle(hist: number[], r: number): string {
  if (hist.length < 12) return 'warming up…'
  const last = hist.slice(-30)
  if (Math.max(...last) < 0.001) return 'extinct (x → 0)'
  // cluster: keep one representative per band of near-identical values
  const sorted = [...last].sort((a, b) => a - b)
  const reps: number[] = []
  for (const v of sorted) {
    if (!reps.length || Math.abs(v - reps[reps.length - 1]) >= 0.012) reps.push(v)
  }
  if (reps.length === 1) return 'period 1 (fixed point)'
  if (reps.length > 15) return r > 3.5699 ? 'chaotic' : 'settling…'
  // symbol sequence: which cluster each iterate landed in, in time order
  const seq = last.map((v) => {
    let best = 0
    let bd = Infinity
    for (let ci = 0; ci < reps.length; ci++) {
      const d = Math.abs(v - reps[ci])
      if (d < bd) {
        bd = d
        best = ci
      }
    }
    return best
  })
  for (let p = 1; p <= 15; p++) {
    let ok = true
    for (let i = p; i < seq.length; i++) {
      if (seq[i] !== seq[i - p]) {
        ok = false
        break
      }
    }
    if (ok) return p === 1 ? 'period 1 (fixed point)' : `period ${p}`
  }
  // past the Feigenbaum accumulation point, non-repetition means chaos;
  // below it the orbit is still winding its way onto a cycle
  return r > 3.5699 ? 'chaotic' : 'settling…'
}

function cycleTone(cycle: string): string {
  if (cycle.startsWith('period 1')) return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500'
  if (cycle.startsWith('period')) return 'border-teal-500/30 bg-teal-500/10 text-teal-400'
  if (cycle === 'chaotic' || cycle.startsWith('extinct')) return 'border-rose-500/30 bg-rose-500/10 text-rose-400'
  return 'border-border/60 bg-muted/30 text-muted-foreground'
}

/* ================= main export ================= */

export default function ChaosLab() {
  return (
    <div className="w-full rounded-2xl border border-border/80 bg-gradient-to-b from-card/95 via-card/80 to-background/95 p-4 md:p-6 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-border/60 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Activity className="h-5 w-5" />
          </span>
          <div>
            <h3 className="flex flex-wrap items-center gap-2 text-xl font-bold tracking-tight text-foreground">
              Chaos & Nonlinear Dynamics Lab
              <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-xs text-amber-500">
                Deterministic Chaos
              </Badge>
            </h3>
            <p className="text-xs text-muted-foreground">
              Iterate the logistic map, watch orbits split and tangle, then fly through the Lorenz butterfly.
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="logistic" className="mt-5">
        <TabsList className="grid h-auto w-full grid-cols-3 p-1">
          <TabsTrigger value="logistic" className="gap-1.5 py-1.5 text-xs sm:text-sm">
            <TrendingUp className="h-4 w-4" /> Logistic Map
          </TabsTrigger>
          <TabsTrigger value="bifurcation" className="gap-1.5 py-1.5 text-xs sm:text-sm">
            <GitFork className="h-4 w-4" /> Bifurcation
          </TabsTrigger>
          <TabsTrigger value="lorenz" className="gap-1.5 py-1.5 text-xs sm:text-sm">
            <Tornado className="h-4 w-4" /> Lorenz Attractor
          </TabsTrigger>
        </TabsList>

        <TabsContent value="logistic" className="mt-4">
          <LogisticTab />
        </TabsContent>
        <TabsContent value="bifurcation" className="mt-4">
          <BifurcationTab />
        </TabsContent>
        <TabsContent value="lorenz" className="mt-4">
          <LorenzTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

/* ================= tab 1 · logistic map ================= */

function LogisticTab() {
  const [r, setR] = useState(3.2)
  const [x0, setX0] = useState(0.2)
  const [playing, setPlaying] = useState(true)
  // snapshot published by the sim loop at ~8 Hz — render itself never touches refs
  const [snap, setSnap] = useState<{ tail: number[]; win: number[]; n: number; x: number; cycle: string }>({
    tail: [x0],
    win: [x0],
    n: 0,
    x: x0,
    cycle: 'warming up…',
  })

  const histRef = useRef<number[]>([x0]) // orbit history — mutated only in handlers & rAF
  const nRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  /* copy the current orbit into state for the SVGs to draw */
  const publish = useCallback((rr: number) => {
    const h = histRef.current
    setSnap({
      tail: h.slice(-160),
      win: h.slice(-60),
      n: nRef.current,
      x: h[h.length - 1],
      cycle: detectCycle(h, rr),
    })
  }, [])

  /* a fresh orbit — called from control handlers, never from an effect */
  const resetRun = useCallback((seed: number) => {
    histRef.current = [seed]
    nRef.current = 0
    setSnap({ tail: [seed], win: [seed], n: 0, x: seed, cycle: 'warming up…' })
  }, [])

  /* play loop — ~8 iterations per second, one staircase step at a time */
  useEffect(() => {
    if (!playing) return
    let last = performance.now()
    let acc = 0
    const loop = (now: number) => {
      rafRef.current = requestAnimationFrame(loop)
      acc = Math.min(4, acc + ((now - last) / 1000) * 8)
      last = now
      if (acc < 1) return
      let steps = 0
      const hist = histRef.current
      while (acc >= 1 && steps < 40) {
        acc -= 1
        steps++
        const x = hist[hist.length - 1]
        hist.push(logistic(x, r))
        nRef.current++
      }
      if (hist.length > 1200) hist.splice(0, hist.length - 1200)
      publish(r)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [playing, r, publish])

  const stepOnce = () => {
    const hist = histRef.current
    const nx = logistic(hist[hist.length - 1], r)
    hist.push(nx)
    if (hist.length > 1200) hist.shift()
    nRef.current++
    publish(r)
  }

  /* changing the rule (r) or the seed (x₀) restarts the orbit from scratch */
  const changeR = (val: number) => {
    setR(val)
    resetRun(x0)
  }
  const changeX0 = (val: number) => {
    setX0(val)
    resetRun(val)
  }

  /* ---- cobweb diagram geometry ---- */
  const CW = 320
  const PAD = 30
  const cwX = (v: number) => PAD + v * (CW - 2 * PAD)
  const cwY = (v: number) => CW - PAD - v * (CW - 2 * PAD)

  const parabola = useMemo(() => {
    let d = ''
    for (let i = 0; i <= 80; i++) {
      const x = i / 80
      d += `${i === 0 ? 'M' : 'L'} ${cwX(x).toFixed(2)} ${cwY(r * x * (1 - x)).toFixed(2)} `
    }
    return d
  }, [r])

  // staircase: vertical to the curve, horizontal to the diagonal, repeat
  const cobweb = (() => {
    const vis = snap.tail
    if (vis.length === 0) return ''
    let d = `M ${cwX(vis[0]).toFixed(2)} ${cwY(0).toFixed(2)}`
    for (let i = 0; i < vis.length - 1; i++) {
      d += ` L ${cwX(vis[i]).toFixed(2)} ${cwY(vis[i + 1]).toFixed(2)} L ${cwX(vis[i + 1]).toFixed(2)} ${cwY(vis[i + 1]).toFixed(2)}`
    }
    return d
  })()

  const fixedX = r > 1 ? 1 - 1 / r : null // non-zero fixed point of f

  /* ---- time-series geometry ---- */
  const TW = 440
  const TH = 210
  const TPX = 36
  const TPY = 16
  const win = snap.win
  const startN = snap.n - (win.length - 1)
  const tx = (i: number) => TPX + (win.length <= 1 ? 0 : (i / (win.length - 1)) * (TW - TPX - 14))
  const ty = (v: number) => TH - 26 - v * (TH - 26 - TPY)
  const seriesPath = win.reduce((acc, v, i) => {
    return i === 0 ? `M ${tx(i).toFixed(1)} ${ty(v).toFixed(1)}` : `${acc} L ${tx(i).toFixed(1)} ${ty(v).toFixed(1)}`
  }, '')

  return (
    <div>
      {/* sliders */}
      <div className="grid grid-cols-1 gap-4 rounded-xl border border-border/60 bg-muted/20 p-4 sm:grid-cols-2">
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between text-muted-foreground">
            <span>Growth rate r:</span>
            <span className="font-mono font-bold text-foreground">{r.toFixed(2)}</span>
          </div>
          <Slider value={[r]} min={0} max={4} step={0.01} onValueChange={([val]) => changeR(val)} />
          <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
            <span>0 (extinction)</span>
            <span>3.0 (period 2)</span>
            <span>4 (chaos)</span>
          </div>
        </div>
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between text-muted-foreground">
            <span>Initial population x₀:</span>
            <span className="font-mono font-bold text-foreground">{x0.toFixed(2)}</span>
          </div>
          <Slider value={[x0]} min={0.01} max={0.99} step={0.01} onValueChange={([val]) => changeX0(val)} />
          <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
            <span>0.01</span>
            <span>0.99</span>
          </div>
        </div>
      </div>

      {/* live readout chips */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/70 px-2.5 py-1 font-mono text-xs text-foreground">
          <span className="text-muted-foreground">xₙ</span>
          <span className="font-bold text-amber-500">{snap.x.toFixed(4)}</span>
        </span>
        <span className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 font-mono text-xs ${cycleTone(snap.cycle)}`}>
          {snap.cycle}
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/30 px-2.5 py-1 font-mono text-xs text-muted-foreground">
          f(x) = {r.toFixed(2)}·x·(1 − x)
        </span>
      </div>

      {/* plots */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* left: cobweb */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-xl border border-border/60 bg-muted/10 p-4"
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-foreground">Cobweb diagram</span>
            <div className="ml-auto flex items-center gap-1.5">
              <Button size="sm" variant={playing ? 'default' : 'outline'} className="h-8 text-xs" onClick={() => setPlaying((p) => !p)}>
                {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                {playing ? 'Pause' : 'Play'}
              </Button>
              <Button size="sm" variant="outline" className="h-8 text-xs" onClick={stepOnce}>
                <SkipForward className="h-3.5 w-3.5" /> Step
              </Button>
              <Button size="sm" variant="outline" className="h-8 text-xs" onClick={() => resetRun(x0)}>
                <RotateCcw className="h-3.5 w-3.5" /> Reset
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-amber-900/40 shadow-inner">
            <svg viewBox={`0 0 ${CW} ${CW}`} className="h-auto w-full">
              <rect x="0" y="0" width={CW} height={CW} fill={CANVAS_BG} />
              {/* grid */}
              {[0.25, 0.5, 0.75].map((g) => (
                <g key={g}>
                  <line x1={cwX(g)} y1={cwY(0)} x2={cwX(g)} y2={cwY(1)} stroke="#a8a29e" strokeOpacity="0.08" />
                  <line x1={cwX(0)} y1={cwY(g)} x2={cwX(1)} y2={cwY(g)} stroke="#a8a29e" strokeOpacity="0.08" />
                </g>
              ))}
              {/* axes */}
              <line x1={cwX(0)} y1={cwY(0)} x2={cwX(1)} y2={cwY(0)} stroke="#78716c" strokeWidth="1" />
              <line x1={cwX(0)} y1={cwY(0)} x2={cwX(0)} y2={cwY(1)} stroke="#78716c" strokeWidth="1" />
              {/* diagonal y = x */}
              <line x1={cwX(0)} y1={cwY(0)} x2={cwX(1)} y2={cwY(1)} stroke="#a8a29e" strokeWidth="1" strokeDasharray="4 3" />
              {/* parabola */}
              <path d={parabola} fill="none" stroke="#f59e0b" strokeWidth="2" />
              {/* fixed points */}
              {fixedX !== null && (
                <circle cx={cwX(fixedX)} cy={cwY(fixedX)} r="3.5" fill="none" stroke="#fb7185" strokeWidth="1.5" />
              )}
              {/* the cobweb staircase */}
              <path d={cobweb} fill="none" stroke="#2dd4bf" strokeWidth="1.4" strokeOpacity="0.9" />
              {/* seed point on the axis */}
              <circle cx={cwX(x0)} cy={cwY(0)} r="3" fill="#2dd4bf" />
              {/* pulsing current point on the diagonal */}
              <motion.circle
                cx={cwX(snap.x)}
                cy={cwY(snap.x)}
                r="5"
                fill="#fef3c7"
                stroke="#f59e0b"
                strokeWidth="1.5"
                animate={{ r: [5, 7, 5], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <text x={CW - 12} y={CW - 12} fill="#a8a29e" fontSize="10" textAnchor="end" fontFamily="monospace">
                x
              </text>
              <text x={12} y={16} fill="#a8a29e" fontSize="10" fontFamily="monospace">
                f(x)
              </text>
            </svg>
          </div>
          <p className="mt-2 text-center font-mono text-[11px] text-muted-foreground">{snap.n} iterations run</p>
        </motion.div>

        {/* right: time series */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="rounded-xl border border-border/60 bg-muted/10 p-4"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">Time series — population xₙ vs n</span>
            <span className="font-mono text-[10px] text-muted-foreground">last 60 iterates</span>
          </div>
          <div className="overflow-hidden rounded-lg border border-amber-900/40 shadow-inner">
            <svg viewBox={`0 0 ${TW} ${TH}`} className="h-auto w-full">
              <rect x="0" y="0" width={TW} height={TH} fill={CANVAS_BG} />
              {/* horizontal grid + labels */}
              {[0, 0.5, 1].map((g) => (
                <g key={g}>
                  <line x1={TPX} y1={ty(g)} x2={TW - 10} y2={ty(g)} stroke="#a8a29e" strokeOpacity="0.12" strokeDasharray="3 3" />
                  <text x={TPX - 5} y={ty(g) + 3} fill="#a8a29e" fontSize="9" textAnchor="end" fontFamily="monospace">
                    {g.toFixed(1)}
                  </text>
                </g>
              ))}
              {/* the orbit */}
              <path d={seriesPath} fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinejoin="round" />
              {win.map((v, i) => (
                <circle key={`${startN + i}-${v.toFixed(4)}`} cx={tx(i)} cy={ty(v)} r="1.6" fill="#fbbf24" />
              ))}
              {win.length > 0 && (
                <motion.circle
                  cx={tx(win.length - 1)}
                  cy={ty(win[win.length - 1])}
                  r="4"
                  fill="#fde68a"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
              )}
              {/* n axis labels */}
              <text x={TPX} y={TH - 8} fill="#a8a29e" fontSize="9" textAnchor="middle" fontFamily="monospace">
                n = {Math.max(0, startN)}
              </text>
              <text x={TW - 14} y={TH - 8} fill="#a8a29e" fontSize="9" textAnchor="end" fontFamily="monospace">
                n = {snap.n}
              </text>
            </svg>
          </div>
          <p className="mt-2 text-center text-[11px] text-muted-foreground">
            fixed point → oscillation → period doubling → chaos, all from one rule
          </p>
        </motion.div>
      </div>

      <Explainer>
        Slide r past 3.0 and the single steady state splits into an alternating pair — period doubling — and each
        further split arrives faster than the last, until near r ≈ 3.57 the orbit never repeats. Nothing here is
        random: every point follows exactly from xₙ₊₁ = r·xₙ(1 − xₙ). Reset and nudge x₀ by 0.01 inside the chaotic
        zone to watch nearly identical seeds drift apart — sensitivity to initial conditions.
      </Explainer>
    </div>
  )
}

/* ================= tab 2 · bifurcation diagram ================= */

const BIF_H = 320
const BIF_PAD_T = 14
const BIF_PAD_B = 30
const BIF_PAD_L = 38
const BIF_PAD_R = 10
const bifY = (x: number) => BIF_PAD_T + (1 - x) * (BIF_H - BIF_PAD_T - BIF_PAD_B)

// sample the stored column values: a period-p orbit shows p distinct values,
// chaos shows a smear — summarize for the hover chip
function summarizeVals(vals: number[]): string {
  const s = [...vals].sort((a, b) => a - b)
  const uniq: number[] = []
  for (const v of s) {
    if (!uniq.length || Math.abs(v - uniq[uniq.length - 1]) > 0.01) uniq.push(v)
  }
  if (uniq.length <= 6) return uniq.map((v) => v.toFixed(3)).join(' · ')
  return `chaotic band [${s[0].toFixed(3)} – ${s[s.length - 1].toFixed(3)}]`
}

function BifurcationTab() {
  const [samples, setSamples] = useState(400) // iterations per column (half discarded as transient)
  const [showAnnotations, setShowAnnotations] = useState(true)
  const [redrawNonce, setRedrawNonce] = useState(0)
  const [progress, setProgress] = useState(0)
  const [hover, setHover] = useState<{ x: number; y: number; r: number; vals: number[] } | null>(null)
  const [width, setWidth] = useState(0)

  const wrapRef = useRef<HTMLDivElement | null>(null)
  const baseRef = useRef<HTMLCanvasElement | null>(null)
  const overlayRef = useRef<HTMLCanvasElement | null>(null)
  const colsRef = useRef<(Float32Array | null)[]>([])
  const rafRef = useRef<number | null>(null)

  /* responsive width */
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const w = Math.floor(entries[0].contentRect.width)
      if (w > 0) setWidth((prev) => (prev === w ? prev : w))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  /* ---- progressive render: one pixel-column of the r-axis per step ---- */
  useEffect(() => {
    const canvas = baseRef.current
    if (!canvas || width < 20) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = BIF_H * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = CANVAS_BG
    ctx.fillRect(0, 0, width, BIF_H)

    const totalCols = Math.max(1, width - BIF_PAD_L - BIF_PAD_R)
    const keep = Math.floor(samples / 2) // values kept after the transient is discarded
    const cols: (Float32Array | null)[] = new Array(totalCols).fill(null)
    colsRef.current = cols

    let col = 0
    let lastProg = 0
    let cancelled = false
    const step = () => {
      if (cancelled) return
      const t0 = performance.now()
      while (col < totalCols && !cancelled && performance.now() - t0 < 9) {
        const r = 2.5 + ((col + 0.5) / totalCols) * 1.5
        let x = 0.5
        const vals = new Float32Array(keep)
        for (let i = 0; i < samples; i++) {
          x = r * x * (1 - x)
          if (i >= samples - keep) vals[i - (samples - keep)] = x
        }
        cols[col] = vals
        ctx.fillStyle = 'rgba(251, 191, 36, 0.5)'
        for (let k = 0; k < keep; k++) ctx.fillRect(BIF_PAD_L + col, bifY(vals[k]), 1, 1)
        col++
      }
      const now = performance.now()
      if (now - lastProg > 100 || col >= totalCols) {
        lastProg = now
        setProgress(Math.round((col / totalCols) * 100))
      }
      if (col < totalCols) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => {
      cancelled = true
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [width, samples, redrawNonce])

  /* ---- overlay: axes, annotations, hover crosshair ---- */
  useEffect(() => {
    const canvas = overlayRef.current
    if (!canvas || width < 20) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = BIF_H * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, width, BIF_H)

    const totalCols = Math.max(1, width - BIF_PAD_L - BIF_PAD_R)
    const xForR = (rv: number) => BIF_PAD_L + ((rv - 2.5) / 1.5) * totalCols
    ctx.font = '10px ui-monospace, monospace'

    // r-axis ticks + gridlines
    ctx.strokeStyle = 'rgba(168, 162, 142, 0.18)'
    ctx.fillStyle = '#a8a29e'
    ctx.textAlign = 'center'
    for (const rv of [2.5, 3.0, 3.5, 4.0]) {
      const x = xForR(rv)
      ctx.beginPath()
      ctx.moveTo(x, BIF_PAD_T)
      ctx.lineTo(x, BIF_H - BIF_PAD_B)
      ctx.stroke()
      ctx.fillText(rv.toFixed(1), x, BIF_H - BIF_PAD_B + 14)
    }
    // xₙ labels on the left
    ctx.textAlign = 'right'
    for (const xv of [0, 0.5, 1]) {
      ctx.fillText(xv.toFixed(1), BIF_PAD_L - 6, bifY(xv) + 3)
    }
    // captions
    ctx.textAlign = 'center'
    ctx.fillText('growth rate r →', BIF_PAD_L + totalCols / 2, BIF_H - 4)
    ctx.save()
    ctx.translate(10, BIF_PAD_T + (BIF_H - BIF_PAD_T - BIF_PAD_B) / 2)
    ctx.rotate(-Math.PI / 2)
    ctx.fillText('attractor values xₙ', 0, 0)
    ctx.restore()

    // annotation lanes
    if (showAnnotations) {
      const marks: { r: number; label: string; color: string }[] = [
        { r: 3.0, label: 'period doubling', color: '#2dd4bf' },
        { r: 3.5699, label: 'chaos onset', color: '#fb7185' },
        { r: 3.83, label: 'period-3 window', color: '#fbbf24' },
      ]
      marks.forEach((m, i) => {
        const x = xForR(m.r)
        ctx.strokeStyle = m.color
        ctx.setLineDash([5, 4])
        ctx.beginPath()
        ctx.moveTo(x, BIF_PAD_T)
        ctx.lineTo(x, BIF_H - BIF_PAD_B)
        ctx.stroke()
        ctx.setLineDash([])
        ctx.fillStyle = m.color
        ctx.textAlign = 'left'
        ctx.fillText(m.label, Math.min(x + 4, width - 90), i % 2 === 0 ? 12 : 24)
      })
    }

    // hover crosshair
    if (hover) {
      ctx.strokeStyle = 'rgba(254, 243, 199, 0.8)'
      ctx.setLineDash([3, 3])
      ctx.beginPath()
      ctx.moveTo(hover.x + 0.5, BIF_PAD_T)
      ctx.lineTo(hover.x + 0.5, BIF_H - BIF_PAD_B)
      ctx.moveTo(BIF_PAD_L, hover.y + 0.5)
      ctx.lineTo(width - BIF_PAD_R, hover.y + 0.5)
      ctx.stroke()
      ctx.setLineDash([])
    }
  }, [width, hover, showAnnotations])

  /* hover probes the stored column data */
  const onMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cols = colsRef.current
    const col = Math.floor(x - BIF_PAD_L)
    if (!cols.length || col < 0 || col >= cols.length) {
      setHover(null)
      return
    }
    const vals = cols[col]
    if (!vals) {
      setHover(null)
      return
    }
    const r = 2.5 + ((col + 0.5) / cols.length) * 1.5
    setHover({ x, y, r, vals: Array.from(vals) })
  }

  return (
    <div>
      {/* controls */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl border border-border/60 bg-muted/20 p-4">
        <div className="w-52 space-y-1.5 text-xs">
          <div className="flex justify-between text-muted-foreground">
            <span>Iterations per column:</span>
            <span className="font-mono font-bold text-foreground">{samples}</span>
          </div>
          <Slider value={[samples]} min={200} max={800} step={100} onValueChange={([val]) => setSamples(val)} />
          <div className="font-mono text-[10px] text-muted-foreground">half burned off as transient</div>
        </div>
        <div className="flex items-center gap-2.5">
          <Switch checked={showAnnotations} onCheckedChange={setShowAnnotations} />
          <span className="text-xs text-muted-foreground">Annotations</span>
        </div>
        <Button size="sm" variant="outline" className="h-8 text-xs" onClick={() => setRedrawNonce((n) => n + 1)}>
          <RefreshCw className="h-3.5 w-3.5" /> Redraw
        </Button>
        <span className="ml-auto font-mono text-[11px] text-muted-foreground">
          {progress}% rendered · r ∈ [2.5, 4]
        </span>
      </div>

      {/* stacked canvases: dots below, crosshair + labels above */}
      <div className="mt-4 overflow-hidden rounded-lg border border-amber-900/40 shadow-inner">
        <div ref={wrapRef} className="relative w-full" style={{ height: BIF_H }}>
          <canvas ref={baseRef} className="absolute inset-0 h-full w-full" />
          <canvas
            ref={overlayRef}
            className="absolute inset-0 h-full w-full cursor-crosshair"
            onMouseMove={onMove}
            onMouseLeave={() => setHover(null)}
          />
        </div>
        <Progress value={progress} className="h-1 rounded-none" />
      </div>

      {/* hover readout */}
      <div className="mt-3 flex flex-wrap items-center gap-2 rounded-xl border border-border/60 bg-muted/10 px-3 py-2">
        {hover ? (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-xs text-amber-500">
              r = {hover.r.toFixed(3)}
            </span>
            <span className="font-mono text-xs text-foreground">x ∈ {summarizeVals(hover.vals)}</span>
          </>
        ) : (
          <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Crosshair className="h-3.5 w-3.5" /> Hover the diagram to probe where the orbit settles for a given r…
          </span>
        )}
      </div>

      <Explainer>
        Each vertical slice answers one question — “after the dust of the transient settles, which values does the
        population actually visit for this r?” The splitting branches are the period doublings you stepped through in
        the cobweb, compressed into a single picture. Look for the gaps: islands of order inside the chaos, like the
        period-3 window near r ≈ 3.83.
      </Explainer>
    </div>
  )
}

/* ================= tab 3 · lorenz attractor ================= */

const LORENZ_SIGMA = 10
const LORENZ_BETA = 8 / 3
const LORENZ_DT = 0.005
const LORENZ_H = 380

type T3 = [number, number, number]

function lorenzDeriv(p: T3, rho: number): T3 {
  return [
    LORENZ_SIGMA * (p[1] - p[0]),
    p[0] * (rho - p[2]) - p[1],
    p[0] * p[1] - LORENZ_BETA * p[2],
  ]
}

/* one classical Runge–Kutta 4 step, in place */
function rk4(p: T3, rho: number, dt: number): void {
  const k1 = lorenzDeriv(p, rho)
  const p2: T3 = [p[0] + (k1[0] * dt) / 2, p[1] + (k1[1] * dt) / 2, p[2] + (k1[2] * dt) / 2]
  const k2 = lorenzDeriv(p2, rho)
  const p3: T3 = [p[0] + (k2[0] * dt) / 2, p[1] + (k2[1] * dt) / 2, p[2] + (k2[2] * dt) / 2]
  const k3 = lorenzDeriv(p3, rho)
  const p4: T3 = [p[0] + k3[0] * dt, p[1] + k3[1] * dt, p[2] + k3[2] * dt]
  const k4 = lorenzDeriv(p4, rho)
  for (let i = 0; i < 3; i++) {
    p[i] += (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])
  }
}

function LorenzTab() {
  const [rho, setRho] = useState(28)
  const [autoRotate, setAutoRotate] = useState(true)
  const [readout, setReadout] = useState<T3>([0.1, 0, 0]) // throttled to 10 Hz

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const trailRef = useRef<T3[]>([])
  const posRef = useRef<T3>([0.1, 0, 0])
  const yawRef = useRef(0.6)
  const pitchRef = useRef(0.35)
  const zoomRef = useRef(1)
  const rhoRef = useRef(rho)
  const autoRef = useRef(autoRotate)
  const dimsRef = useRef({ w: 0, h: LORENZ_H, dpr: 1 })
  const rafRef = useRef<number | null>(null)
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map())
  const lastPinchRef = useRef(0)
  const lastReadRef = useRef(0)

  useEffect(() => {
    rhoRef.current = rho
  }, [rho])
  useEffect(() => {
    autoRef.current = autoRotate
  }, [autoRotate])

  const resetFlight = useCallback(() => {
    posRef.current = [0.1, 0, 0]
    trailRef.current = []
    setReadout([0.1, 0, 0])
  }, [])

  /* responsive canvas sizing (devicePixelRatio aware) */
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const w = Math.floor(entries[0].contentRect.width)
      if (w <= 0) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      dimsRef.current = { w, h: LORENZ_H, dpr }
      const canvas = canvasRef.current
      if (canvas) {
        canvas.width = w * dpr
        canvas.height = LORENZ_H * dpr
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  /* ---- the flight: RK4 integration + projected draw, all from refs ---- */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const loop = (now: number) => {
      rafRef.current = requestAnimationFrame(loop)
      if (autoRef.current) yawRef.current += 0.0045

      const pos = posRef.current
      const trail = trailRef.current
      const rhoNow = rhoRef.current
      for (let i = 0; i < 7; i++) {
        rk4(pos, rhoNow, LORENZ_DT)
        trail.push([pos[0], pos[1], pos[2]])
      }
      if (trail.length > 3000) trail.splice(0, trail.length - 3000)
      // safety net: a wild ρ should never fling us to infinity
      if (!Number.isFinite(pos[0]) || Math.abs(pos[0]) > 1e4 || Math.abs(pos[2]) > 1e4) {
        resetFlight()
        return
      }

      const { w, h, dpr } = dimsRef.current
      if (w > 0) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        ctx.fillStyle = CANVAS_BG
        ctx.fillRect(0, 0, w, h)

        // simple 3D: yaw around the vertical (z) axis, then a fixed tilt
        const s = (Math.min(w, h) / 62) * zoomRef.current
        const cy = Math.cos(yawRef.current)
        const sy = Math.sin(yawRef.current)
        const cp = Math.cos(pitchRef.current)
        const sp = Math.sin(pitchRef.current)
        const n = trail.length
        const px: number[] = new Array(n)
        const py: number[] = new Array(n)
        for (let i = 0; i < n; i++) {
          const p = trail[i]
          const x1 = p[0] * cy - p[1] * sy
          const y1 = p[0] * sy + p[1] * cy
          const zc = p[2] - 25 // recentre vertically around mid-flight z
          px[i] = w / 2 + x1 * s
          py[i] = h / 2 - (zc * cp + y1 * sp) * s
        }

        // fading trail: alpha by age, amber low → rose high (by z)
        const CH = 8
        ctx.lineWidth = 1.4
        for (let i = 0; i < n - 1; i += CH) {
          const end = Math.min(i + CH, n - 1)
          const age = i / Math.max(1, n - 1)
          const alpha = 0.05 + 0.95 * age * age
          let zm = 0
          for (let k = i; k <= end; k++) zm += trail[k][2]
          zm /= end - i + 1
          const t = Math.max(0, Math.min(1, zm / 48))
          const cr = Math.round(245 + (244 - 245) * t)
          const cg = Math.round(158 + (63 - 158) * t)
          const cb = Math.round(11 + (94 - 11) * t)
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha.toFixed(3)})`
          ctx.beginPath()
          ctx.moveTo(px[i], py[i])
          for (let k = i + 1; k <= end; k++) ctx.lineTo(px[k], py[k])
          ctx.stroke()
        }

        // glowing current point
        if (n > 0) {
          ctx.save()
          ctx.shadowColor = '#fde68a'
          ctx.shadowBlur = 12
          ctx.fillStyle = '#fef3c7'
          ctx.beginPath()
          ctx.arc(px[n - 1], py[n - 1], 3.2, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      }

      // 10 Hz readout — no state churn per frame
      if (now - lastReadRef.current > 100) {
        lastReadRef.current = now
        setReadout([pos[0], pos[1], pos[2]])
      }
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [resetFlight])

  /* scroll to zoom (non-passive so the page doesn't scroll) */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      zoomRef.current = Math.max(0.35, Math.min(4, zoomRef.current * Math.exp(-e.deltaY * 0.0012)))
    }
    canvas.addEventListener('wheel', onWheel, { passive: false })
    return () => canvas.removeEventListener('wheel', onWheel)
  }, [])

  /* drag to rotate, pinch to zoom */
  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    lastPinchRef.current = 0
  }
  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const pts = pointersRef.current
    const prev = pts.get(e.pointerId)
    if (!prev) return
    const cur = { x: e.clientX, y: e.clientY }
    if (pts.size === 1) {
      yawRef.current += (cur.x - prev.x) * 0.006
      pitchRef.current = Math.max(-0.15, Math.min(1.25, pitchRef.current + (cur.y - prev.y) * 0.004))
    }
    pts.set(e.pointerId, cur)
    if (pts.size === 2) {
      const arr = Array.from(pts.values())
      const a = arr[0]
      const b = arr[1]
      if (a && b) {
        const dist = Math.hypot(a.x - b.x, a.y - b.y)
        if (lastPinchRef.current > 0) {
          zoomRef.current = Math.max(0.35, Math.min(4, zoomRef.current * (dist / lastPinchRef.current)))
        }
        lastPinchRef.current = dist
      }
    }
  }
  const endPointer = (e: React.PointerEvent<HTMLCanvasElement>) => {
    pointersRef.current.delete(e.pointerId)
    lastPinchRef.current = 0
  }

  const applyPreset = (rv: number) => {
    setRho(rv)
    rhoRef.current = rv
    resetFlight()
  }

  return (
    <div>
      {/* controls */}
      <div className="grid grid-cols-1 gap-4 rounded-xl border border-border/60 bg-muted/20 p-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between text-muted-foreground">
            <span>Rayleigh number ρ:</span>
            <span className="font-mono font-bold text-foreground">{rho.toFixed(1)}</span>
          </div>
          <Slider value={[rho]} min={0} max={45} step={0.5} onValueChange={([val]) => setRho(val)} />
          <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
            <span>0</span>
            <span>24.74 (critical)</span>
            <span>45</span>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <Switch checked={autoRotate} onCheckedChange={setAutoRotate} />
          <span className="text-xs text-muted-foreground">Auto-rotate</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <Button size="sm" variant="outline" className="h-8 text-xs" onClick={() => applyPreset(28)}>
            Classic ρ=28
          </Button>
          <Button size="sm" variant="outline" className="h-8 text-xs" onClick={() => applyPreset(15)}>
            Stable ρ=15
          </Button>
          <Button size="sm" variant="outline" className="h-8 text-xs" onClick={resetFlight}>
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </Button>
        </div>
        <p className="text-[11px] leading-snug text-muted-foreground">
          Drag to orbit · scroll or pinch to zoom · σ = 10, β = 8/3, RK4 with dt = 0.005
        </p>
      </div>

      {/* canvas */}
      <div className="mt-4 overflow-hidden rounded-lg border border-amber-900/40 shadow-inner">
        <div ref={wrapRef} className="relative w-full" style={{ height: LORENZ_H }}>
          <canvas
            ref={canvasRef}
            className="h-full w-full cursor-grab touch-none active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endPointer}
            onPointerCancel={endPointer}
          />
        </div>
      </div>

      {/* readouts */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/70 px-2.5 py-1 font-mono text-xs text-foreground">
          <Gauge className="h-3.5 w-3.5 text-amber-500" />
          x = <span className="font-bold text-amber-500">{readout[0].toFixed(2)}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/70 px-2.5 py-1 font-mono text-xs text-foreground">
          y = <span className="font-bold text-teal-400">{readout[1].toFixed(2)}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/70 px-2.5 py-1 font-mono text-xs text-foreground">
          z = <span className="font-bold text-rose-400">{readout[2].toFixed(2)}</span>
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[11px] text-amber-500">
          <Info className="h-3.5 w-3.5" />
          ρ &lt; 24.74 → spirals into a fixed point; above → the butterfly
        </span>
      </div>

      <Explainer>
        The two lobes trade the trajectory back and forth forever, yet the curve never crosses itself or repeats —
        this is chaos in continuous time. Slide ρ below 24.74 and the same equations suddenly spiral into a quiet
        fixed point; nudge ρ just above the threshold and watch the wings be born. The fading trail is history: the
        bright head is “now”.
      </Explainer>
    </div>
  )
}
