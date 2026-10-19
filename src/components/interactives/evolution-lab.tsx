'use client'

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Dna,
  Play,
  Pause,
  StepForward,
  RotateCcw,
  ChartLine,
  Scale,
  Eye,
  Users,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'

// ============================================================
// Evolution & Population Genetics Lab — a real Wright–Fisher engine.
// Each generation: selection weights the gene pool, symmetric
// mutation flips alleles, migration swaps in migrants, then 2N
// alleles are resampled with replacement (genetic drift).
// ============================================================

type Genotype = 'AA' | 'Aa' | 'aa'

interface Organism {
  x: number
  y: number
  vx: number
  vy: number
  g: Genotype
}

interface HistPoint {
  p: number // allele frequency of A after that generation
  n: number // population size that generation (for drift band)
}

interface FixBanner {
  fixed: 'A' | 'a'
  gen: number
  sweep: boolean
}

interface Preset {
  id: string
  label: string
  N: number
  s: number
  mu: number
  m: number
}

const AMBER = '#fbbf24' // allele A
const ROSE = '#fb7185' // allele a
const CANVAS_BG = '#0a1120'
const CANVAS_H = 340

const PRESETS: Preset[] = [
  { id: 'neutral', label: 'Neutral drift (s=0, N=40)', N: 40, s: 0, mu: 0, m: 0 },
  { id: 'sweep', label: 'Selection sweep (s=0.15, N=200)', N: 200, s: 0.15, mu: 0, m: 0 },
  { id: 'mutbal', label: 'Mutation–selection balance (μ=0.01, s=0.3)', N: 200, s: 0.3, mu: 0.01, m: 0 },
  { id: 'founder', label: 'Founder effect (N=20)', N: 20, s: 0, mu: 0, m: 0 },
]

function clampNum(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v))
}

function randRange(a: number, b: number): number {
  return a + Math.random() * (b - a)
}

function genotypeFromAlleles(a1: boolean, a2: boolean): Genotype {
  if (a1 && a2) return 'AA'
  if (!a1 && !a2) return 'aa'
  return 'Aa'
}

function countGenotypes(pop: Organism[]): { AA: number; Aa: number; aa: number } {
  let AA = 0
  let Aa = 0
  let aa = 0
  for (const o of pop) {
    if (o.g === 'AA') AA++
    else if (o.g === 'Aa') Aa++
    else aa++
  }
  return { AA, Aa, aa }
}

function alleleFreqOf(pop: Organism[]): number {
  const { AA, Aa, aa } = countGenotypes(pop)
  const total = 2 * (AA + Aa + aa)
  return total > 0 ? (2 * AA + Aa) / total : 0.5
}

export default function EvolutionLab() {
  // ---- controls ----
  const [popSize, setPopSize] = useState(80)
  const [sel, setSel] = useState(0)
  const [mu, setMu] = useState(0)
  const [mig, setMig] = useState(0)
  const [pMig, setPMig] = useState(0.5)
  const [running, setRunning] = useState(false)
  const [showBand, setShowBand] = useState(true)

  // ---- live readouts (throttled: one update per generation) ----
  const [gen, setGen] = useState(0)
  const [pNow, setPNow] = useState(0.5)
  const [counts, setCounts] = useState({ AA: 20, Aa: 40, aa: 20 })
  const [hist, setHist] = useState<HistPoint[]>([{ p: 0.5, n: 80 }])
  const [ghosts, setGhosts] = useState<number[][]>([])
  const [tally, setTally] = useState({ sweeps: 0, drifts: 0 })
  const [banner, setBanner] = useState<FixBanner | null>(null)

  // ---- refs drive the canvas + engine (no per-frame setState) ----
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const sizeRef = useRef({ w: 600, h: CANVAS_H, dpr: 1 })
  const popRef = useRef<Organism[]>([])
  const genRef = useRef(0)
  const histRef = useRef<HistPoint[]>([{ p: 0.5, n: 80 }])
  const trackRef = useRef<number[]>([0.5]) // full trajectory of the current run
  const fixedRef = useRef(false)
  const paramsRef = useRef({ N: 80, s: 0, mu: 0, m: 0, pMig: 0.5 })

  // sync engine-visible values after render (never during render)
  useEffect(() => {
    paramsRef.current = { N: popSize, s: sel, mu, m: mig, pMig }
  }, [popSize, sel, mu, mig, pMig])

  const initPopulation = useCallback((N: number, p0: number): Organism[] => {
    const { w, h } = sizeRef.current
    // iid Bernoulli allele draws = random mating; consecutive pairs = diploids
    const pop: Organism[] = []
    for (let i = 0; i < N; i++) {
      const ang = Math.random() * Math.PI * 2
      const sp = randRange(0.25, 0.8)
      pop.push({
        x: randRange(12, Math.max(13, w - 12)),
        y: randRange(12, Math.max(13, h - 12)),
        vx: Math.cos(ang) * sp,
        vy: Math.sin(ang) * sp,
        g: genotypeFromAlleles(Math.random() < p0, Math.random() < p0),
      })
    }
    return pop
  }, [])

  const resetRun = useCallback(
    (N: number, p0: number) => {
      const pop = initPopulation(N, p0)
      popRef.current = pop
      // record the ACTUAL sampled allele frequency, not the requested one —
      // the meadow dots and every readout must agree with the real draw
      const actualP = alleleFreqOf(pop)
      genRef.current = 0
      histRef.current = [{ p: actualP, n: pop.length }]
      trackRef.current = [actualP]
      fixedRef.current = false
      setGen(0)
      setPNow(actualP)
      setCounts(countGenotypes(pop))
      setHist(histRef.current.slice())
      setBanner(null)
    },
    [initPopulation],
  )

  // N slider: grow/shrink the meadow live without restarting the run
  const adjustPopulation = useCallback((newN: number) => {
    const pop = popRef.current
    if (newN < pop.length) {
      popRef.current = pop.slice(0, newN)
    } else if (pop.length > 0) {
      const added: Organism[] = []
      while (added.length < newN - pop.length) {
        const parent = pop[Math.floor(Math.random() * pop.length)]
        if (!parent) break
        const ang = Math.random() * Math.PI * 2
        added.push({
          x: clampNum(parent.x + randRange(-18, 18), 10, Math.max(11, sizeRef.current.w - 10)),
          y: clampNum(parent.y + randRange(-18, 18), 10, Math.max(11, sizeRef.current.h - 10)),
          vx: Math.cos(ang) * 0.5,
          vy: Math.sin(ang) * 0.5,
          g: parent.g, // offspring copies preserve the allele pool
        })
      }
      popRef.current = [...pop, ...added]
    }
    setCounts(countGenotypes(popRef.current))
    setPNow(alleleFreqOf(popRef.current))
  }, [])

  // ---- the Wright–Fisher generation step ----
  const stepGeneration = useCallback(() => {
    if (fixedRef.current) {
      setRunning(false)
      return
    }
    const { N, s, mu, m, pMig } = paramsRef.current
    const pop = popRef.current

    // 1) census the current gene pool
    let aCount = 0
    for (const o of pop) {
      if (o.g === 'AA') aCount += 2
      else if (o.g === 'Aa') aCount += 1
    }
    const twoNcur = 2 * pop.length
    const p = twoNcur > 0 ? aCount / twoNcur : 0.5
    const q = 1 - p

    // 2) selection — diploid fitnesses with dominance h = 0.5
    const wAA = 1
    const wAa = 1 - s * 0.5
    const waa = 1 - s
    const wBar = p * p * wAA + 2 * p * q * wAa + q * q * waa
    const pSel = wBar > 1e-9 ? (p * p * wAA + p * q * wAa) / wBar : p

    // 3) symmetric mutation: A→a and a→A each with probability μ
    const pMut = pSel * (1 - mu) + (1 - pSel) * mu

    // 4) migration: a fraction m of individuals are replaced by migrants
    const pFinal = (1 - m) * pMut + m * pMig

    // 5) genetic drift: resample 2N alleles with replacement
    const twoN = 2 * N
    const alleles: boolean[] = new Array<boolean>(twoN)
    let newA = 0
    for (let i = 0; i < twoN; i++) {
      const a = Math.random() < pFinal
      alleles[i] = a
      if (a) newA++
    }

    // offspring settle near a random parent (visual pedigree clustering)
    const { w, h } = sizeRef.current
    const parents = pop.length > 0 ? pop : null
    const newPop: Organism[] = new Array<Organism>(N)
    for (let i = 0; i < N; i++) {
      let x: number
      let y: number
      if (parents) {
        const par = parents[Math.floor(Math.random() * parents.length)]
        x = clampNum(par.x + randRange(-16, 16), 8, Math.max(9, w - 8))
        y = clampNum(par.y + randRange(-16, 16), 8, Math.max(9, h - 8))
      } else {
        x = randRange(12, Math.max(13, w - 12))
        y = randRange(12, Math.max(13, h - 12))
      }
      const ang = Math.random() * Math.PI * 2
      const sp = randRange(0.25, 0.8)
      newPop[i] = {
        x,
        y,
        vx: Math.cos(ang) * sp,
        vy: Math.sin(ang) * sp,
        g: genotypeFromAlleles(alleles[2 * i], alleles[2 * i + 1]),
      }
    }
    popRef.current = newPop

    // 6) record + fixation detection
    const pNew = twoN > 0 ? newA / twoN : 0
    genRef.current += 1
    histRef.current.push({ p: pNew, n: N })
    if (histRef.current.length > 200) histRef.current.shift()
    trackRef.current.push(pNew)
    if (trackRef.current.length > 800) trackRef.current.shift()

    setGen(genRef.current)
    setPNow(pNew)
    setCounts(countGenotypes(newPop))
    setHist(histRef.current.slice())

    if (newA === 0 || newA === twoN) {
      const fixedA = newA === twoN
      // Only declare fixation when the lost allele cannot come back: with
      // μ > 0, or inward migration carrying it, the very next generation can
      // resurrect it — that resurrection is the real Wright–Fisher behavior.
      const canReturn = mu > 0 || (m > 0 && (fixedA ? pMig < 1 : pMig > 0))
      if (!canReturn) {
        const sweep = Math.abs(s) >= 0.05
        fixedRef.current = true
        setRunning(false)
        setBanner({ fixed: fixedA ? 'A' : 'a', gen: genRef.current, sweep })
        setTally((t) => (sweep ? { ...t, sweeps: t.sweeps + 1 } : { ...t, drifts: t.drifts + 1 }))
        setGhosts((g) => [...g.slice(-9), trackRef.current.slice()])
      }
    }
  }, [])

  // auto mode: one generation every ~700 ms
  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => stepGeneration(), 700)
    return () => window.clearInterval(id)
  }, [running, stepGeneration])

  // responsive canvas via ResizeObserver (with cleanup)
  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    const ro = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 600
      const w = Math.max(280, Math.floor(width))
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(CANVAS_H * dpr)
      canvas.style.width = '100%'
      canvas.style.height = `${CANVAS_H}px`
      sizeRef.current = { w, h: CANVAS_H, dpr }
    })
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [])

  // rAF loop: wander + draw. All per-frame state lives in refs; React state is
  // only touched by generation steps (~1.4 Hz max). The first animation frame
  // seeds the meadow and syncs readouts to the ACTUAL random draw (setState
  // from a rAF callback, never synchronously inside the effect body).
  useEffect(() => {
    const seed = () => {
      if (popRef.current.length > 0) return
      const pop = initPopulation(paramsRef.current.N, 0.5)
      popRef.current = pop
      const p0 = alleleFreqOf(pop)
      histRef.current = [{ p: p0, n: pop.length }]
      trackRef.current = [p0]
      setPNow(p0)
      setCounts(countGenotypes(pop))
      setHist(histRef.current.slice())
    }

    // one 60 Hz step of random-walk wandering (organisms roam whether or not
    // the generations are advancing — only stepGeneration changes genotypes)
    const wander = () => {
      const { w, h } = sizeRef.current
      const pop = popRef.current
      const r = clampNum(200 / Math.max(pop.length, 1) + 1.2, 2.2, 5)
      for (const o of pop) {
        // random walk with a whisper of drift back toward center
        o.vx += (Math.random() - 0.5) * 0.32
        o.vy += (Math.random() - 0.5) * 0.32
        o.vx += (w / 2 - o.x) * 0.0001
        o.vy += (h / 2 - o.y) * 0.0001
        const sp = Math.hypot(o.vx, o.vy)
        if (sp > 0.001) {
          const cl = clampNum(sp, 0.18, 0.85)
          o.vx = (o.vx / sp) * cl
          o.vy = (o.vy / sp) * cl
        }
        o.x += o.vx
        o.y += o.vy
        if (o.x < r) {
          o.x = r
          o.vx = Math.abs(o.vx)
        } else if (o.x > w - r) {
          o.x = w - r
          o.vx = -Math.abs(o.vx)
        }
        if (o.y < r) {
          o.y = r
          o.vy = Math.abs(o.vy)
        } else if (o.y > h - r) {
          o.y = h - r
          o.vy = -Math.abs(o.vy)
        }
      }
    }

    const draw = () => {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')
      const { w, h, dpr } = sizeRef.current
      if (!canvas || !ctx || w <= 0) return
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = CANVAS_BG
      ctx.fillRect(0, 0, w, h)

      const pop = popRef.current
      const r = clampNum(200 / Math.max(pop.length, 1) + 1.2, 2.2, 5)
      for (const o of pop) {
        if (o.g === 'AA') {
          ctx.fillStyle = AMBER
          ctx.beginPath()
          ctx.arc(o.x, o.y, r, 0, Math.PI * 2)
          ctx.fill()
        } else if (o.g === 'aa') {
          ctx.fillStyle = ROSE
          ctx.beginPath()
          ctx.arc(o.x, o.y, r, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // heterozygote: two-tone half circle
          ctx.fillStyle = AMBER
          ctx.beginPath()
          ctx.moveTo(o.x, o.y)
          ctx.arc(o.x, o.y, r, Math.PI / 2, Math.PI * 1.5)
          ctx.closePath()
          ctx.fill()
          ctx.fillStyle = ROSE
          ctx.beginPath()
          ctx.moveTo(o.x, o.y)
          ctx.arc(o.x, o.y, r, -Math.PI / 2, Math.PI / 2)
          ctx.closePath()
          ctx.fill()
        }
      }
      // subtle vignette so the meadow recedes at the edges
      const grad = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.35, w / 2, h / 2, Math.max(w, h) * 0.72)
      grad.addColorStop(0, 'rgba(0,0,0,0)')
      grad.addColorStop(1, 'rgba(0,0,0,0.4)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)
    }

    // fixed 60 Hz stepping so the meadow wanders at the same speed on 60/120/
    // 144 Hz displays; the accumulator clamps stalls (tab switches)
    const FRAME_MS = 1000 / 60
    let raf = 0
    let lastT = performance.now()
    let acc = 0
    const loop = (now: number) => {
      seed() // no-op after the first frame
      const dt = Math.min(now - lastT, 100)
      lastT = now
      acc += dt
      let steps = 0
      while (acc >= FRAME_MS && steps < 6) {
        wander()
        acc -= FRAME_MS
        steps++
      }
      if (steps === 6) acc = 0 // shed any leftover backlog
      draw()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  const applyPreset = (preset: Preset) => {
    setPopSize(preset.N)
    setSel(preset.s)
    setMu(preset.mu)
    setMig(preset.m)
    setPMig(0.5)
    // founder effect: the founders ARE a tiny random sample of a p = 0.5
    // source population — resetRun's 2N Bernoulli draws are exactly that
    // founding sample, so the meadow starts with whatever p the founders
    // happened to carry, and drift takes it from there
    resetRun(preset.N, 0.5)
    setRunning(false)
  }

  // ---- Hardy–Weinberg live check (expected vs observed genotypes) ----
  const hw = useMemo(() => {
    const N = counts.AA + counts.Aa + counts.aa
    const p = N > 0 ? (2 * counts.AA + counts.Aa) / (2 * N) : 0.5
    const q = 1 - p
    const expAA = N * p * p
    const expAa = N * 2 * p * q
    const expaa = N * q * q
    // χ² goodness-of-fit (df ≈ 1 because p is estimated from the data)
    let chi2 = 0
    const terms: Array<[number, number]> = [
      [counts.AA, expAA],
      [counts.Aa, expAa],
      [counts.aa, expaa],
    ]
    for (const [obs, exp] of terms) {
      if (exp >= 0.5) chi2 += ((obs - exp) * (obs - exp)) / exp
    }
    const matches = chi2 <= 3.84
    return { N, p, q, expAA, expAa, expaa, chi2, matches }
  }, [counts])

  // ---- SVG chart geometry (last-200-generation window) ----
  const chart = useMemo(() => {
    const W = 460
    const H = 250
    const padL = 36
    const padR = 12
    const padT = 14
    const padB = 24
    const pts = hist
    const plotW = W - padL - padR
    const plotH = H - padT - padB

    // fixed full 0–1 allele-frequency axis — the whole point of the chart is
    // seeing drift wander inside the unit interval (and the ±2 SE band must
    // never escape the plot box)
    const lastIdx = Math.max(pts.length - 1, 1)
    const xAt = (i: number) => padL + (i / lastIdx) * plotW
    const yAt = (v: number) => padT + (1 - clampNum(v, 0, 1)) * plotH

    const linePath = pts
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i).toFixed(1)} ${yAt(d.p).toFixed(1)}`)
      .join(' ')

    // ±2 SE drift envelope: 2·√(p(1−p)/2N)
    let bandPath = ''
    if (showBand && pts.length > 1) {
      const up: string[] = []
      const dn: string[] = []
      pts.forEach((d, i) => {
        const sd = 2 * Math.sqrt(Math.max(d.p * (1 - d.p), 0) / (2 * Math.max(d.n, 1)))
        up.push(`${xAt(i).toFixed(1)},${yAt(d.p + sd).toFixed(1)}`)
        dn.unshift(`${xAt(i).toFixed(1)},${yAt(d.p - sd).toFixed(1)}`)
      })
      bandPath = `M ${up.join(' L ')} L ${dn.join(' L ')} Z`
    }

    const ghostPaths = ghosts
      .map((track) => {
        const t = track.slice(-200)
        if (t.length < 2) return ''
        const m = t.length - 1
        return t
          .map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt((i / m) * lastIdx).toFixed(1)} ${yAt(v).toFixed(1)}`)
          .join(' ')
      })
      .filter((d) => d.length > 0)

    const genStart = gen - pts.length + 1
    const gridVals = [0, 0.25, 0.5, 0.75, 1]
    const endP = pts[pts.length - 1]?.p ?? 0.5
    return { W, H, padL, padB, padT, plotH, xAt, yAt, linePath, bandPath, ghostPaths, genStart, gridVals, endP }
  }, [hist, ghosts, showBand, gen])

  const wAA = 1
  const wAa = 1 - sel * 0.5
  const waa = 1 - sel

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-gradient-to-b from-card/95 via-card/80 to-background/95 p-4 shadow-xl backdrop-blur-md md:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/20 text-amber-400">
            <Dna className="h-5 w-5" />
          </span>
          <div>
            <h3 className="flex flex-wrap items-center gap-2 text-xl font-bold tracking-tight text-foreground">
              Evolution &amp; Population Genetics Lab
              <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-xs text-amber-400">
                Wright–Fisher · drift · selection
              </Badge>
            </h3>
            <p className="text-xs text-muted-foreground">
              Allele A (amber) vs allele a (rose) across generations — real diploid sampling, selection, mutation and
              migration.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            onClick={() => {
              if (fixedRef.current) return // a fixed run can only be reset
              setRunning((r) => !r)
            }}
            className="h-8 text-xs"
          >
            {running ? <Pause className="mr-1 h-3.5 w-3.5" /> : <Play className="mr-1 h-3.5 w-3.5" />}
            {running ? 'Pause' : 'Play'}
          </Button>
          <Button size="sm" variant="outline" onClick={stepGeneration} className="h-8 text-xs">
            <StepForward className="mr-1 h-3.5 w-3.5" /> Step
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              resetRun(popSize, 0.5)
              setRunning(false)
            }}
            className="h-8 text-xs"
          >
            <RotateCcw className="mr-1 h-3.5 w-3.5" /> Reset
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* ============ LEFT: meadow + controls ============ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {/* Canvas meadow */}
          <div className="rounded-xl border border-border/60 bg-muted/20 p-3">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                <Users className="h-3.5 w-3.5 text-amber-400" /> The Meadow — generation {gen}
              </span>
              <span className="font-mono text-muted-foreground">
                p(A) = {pNow.toFixed(3)} · q(a) = {(1 - pNow).toFixed(3)}
              </span>
            </div>
            <div ref={wrapRef} className="relative w-full overflow-hidden rounded-lg border border-border/50">
              <canvas
                ref={canvasRef}
                role="img"
                aria-label="Meadow of organisms: amber circles are AA, rose circles are aa, two-tone circles are Aa heterozygotes"
                className="block w-full"
                style={{ height: CANVAS_H }}
              />
              <div className="pointer-events-none absolute left-2 top-2 flex flex-wrap gap-x-3 gap-y-1 rounded-md bg-background/50 px-2 py-1 font-mono text-[10px] text-muted-foreground backdrop-blur-sm">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full" style={{ background: AMBER }} /> AA
                </span>
                <span className="flex items-center gap-1">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: 'linear-gradient(90deg,#fbbf24 50%,#fb7185 50%)' }}
                  />{' '}
                  Aa
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full" style={{ background: ROSE }} /> aa
                </span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4 rounded-xl border border-border/60 bg-muted/20 p-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Population &amp; Evolutionary Forces
            </span>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Population size N:</span>
                <span className="font-mono font-bold text-foreground">{popSize} (2N = {2 * popSize} alleles)</span>
              </div>
              <Slider
                value={[popSize]}
                min={20}
                max={400}
                step={5}
                onValueChange={([v]) => {
                  setPopSize(v)
                  adjustPopulation(v)
                }}
              />
              <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>20 (drift dominates)</span>
                <span>400 (drift weakens)</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Fitness advantage of A — selection pressure on aa:</span>
                <span className="font-mono font-bold text-foreground">
                  s = {sel >= 0 ? '+' : ''}
                  {sel.toFixed(2)}
                </span>
              </div>
              <Slider value={[sel]} min={-0.5} max={0.5} step={0.01} onValueChange={([v]) => setSel(v)} />
              <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>−0.5 (a favoured)</span>
                <span>0 (neutral)</span>
                <span>+0.5 (A favoured)</span>
              </div>
              <div className="flex justify-between pt-1 font-mono text-[10px] text-amber-400/90">
                <span>w(AA) = {wAA.toFixed(2)}</span>
                <span>w(Aa) = {wAa.toFixed(2)}</span>
                <span>w(aa) = {waa.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Mutation rate μ (symmetric A↔a):</span>
                <span className="font-mono font-bold text-foreground">{mu.toFixed(3)}</span>
              </div>
              <Slider value={[mu]} min={0} max={0.05} step={0.001} onValueChange={([v]) => setMu(v)} />
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Migration rate m (fraction replaced):</span>
                <span className="font-mono font-bold text-foreground">{mig.toFixed(2)}</span>
              </div>
              <Slider value={[mig]} min={0} max={0.2} step={0.01} onValueChange={([v]) => setMig(v)} />
              <div className="space-y-1 pt-0.5 text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span className="pl-3 text-[11px]">Migrant allele frequency p(migrant):</span>
                  <span className="font-mono font-bold text-foreground">{pMig.toFixed(2)}</span>
                </div>
                <Slider value={[pMig]} min={0} max={1} step={0.05} onValueChange={([v]) => setPMig(v)} />
              </div>
            </div>
          </div>

          {/* Scenario presets */}
          <div className="rounded-xl border border-border/60 bg-muted/10 p-3">
            <span className="mb-2 block text-xs font-semibold text-foreground">Scenario presets</span>
            <div className="flex flex-wrap gap-1.5">
              {PRESETS.map((preset) => (
                <Button
                  key={preset.id}
                  size="sm"
                  variant="secondary"
                  className="h-7 rounded-full px-3 text-[11px]"
                  onClick={() => applyPreset(preset)}
                >
                  {preset.label}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============ RIGHT: chart + Hardy–Weinberg + tally ============ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-4"
        >
          {/* Allele frequency chart */}
          <div className="rounded-xl border border-border/60 bg-muted/10 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <ChartLine className="h-4 w-4 text-amber-400" /> p(A) over generations
              </span>
              <label className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                drift band
                <Switch checked={showBand} onCheckedChange={setShowBand} className="scale-75" />
              </label>
            </div>
            <div className="rounded-lg border border-border/50 bg-background/80 p-2">
              <svg viewBox={`0 0 ${chart.W} ${chart.H}`} className="h-auto w-full">
                {/* y grid + labels */}
                {chart.gridVals.map((v) => (
                  <g key={v}>
                    <line
                      x1={chart.padL}
                      y1={chart.yAt(v)}
                      x2={chart.W - 12}
                      y2={chart.yAt(v)}
                      stroke="currentColor"
                      strokeOpacity="0.1"
                    />
                    <text
                      x={chart.padL - 5}
                      y={chart.yAt(v) + 3}
                      fill="currentColor"
                      opacity="0.55"
                      fontSize="9"
                      textAnchor="end"
                      fontFamily="monospace"
                    >
                      {v.toFixed(2)}
                    </text>
                  </g>
                ))}
                {/* p = 0.5 guide */}
                <line
                  x1={chart.padL}
                  y1={chart.yAt(0.5)}
                  x2={chart.W - 12}
                  y2={chart.yAt(0.5)}
                  stroke="currentColor"
                  strokeOpacity="0.2"
                  strokeDasharray="2 4"
                />
                {/* ghost trajectories from earlier runs */}
                {chart.ghostPaths.map((d, i) => (
                  <path key={`ghost-${i}`} d={d} fill="none" stroke="#64748b" strokeOpacity="0.3" strokeWidth="1" />
                ))}
                {/* ±2SE drift band */}
                {chart.bandPath && <path d={chart.bandPath} fill={AMBER} fillOpacity="0.1" stroke="none" />}
                {/* main trajectory */}
                <path d={chart.linePath} fill="none" stroke={AMBER} strokeWidth="2.2" strokeLinecap="round" />
                <circle
                  cx={chart.xAt(Math.max(hist.length - 1, 0))}
                  cy={chart.yAt(chart.endP)}
                  r="4"
                  fill={AMBER}
                  stroke="#ffffff"
                  strokeWidth="1.4"
                />
                {/* x labels: generation numbers of the window */}
                {[0, 0.5, 1].map((frac) => (
                  <text
                    key={frac}
                    x={chart.padL + frac * (chart.W - chart.padL - 12)}
                    y={chart.H - 8}
                    fill="currentColor"
                    opacity="0.55"
                    fontSize="9"
                    textAnchor={frac === 0 ? 'start' : frac === 1 ? 'end' : 'middle'}
                    fontFamily="monospace"
                  >
                    g = {Math.max(0, Math.round(chart.genStart + frac * Math.max(hist.length - 1, 0)))}
                  </text>
                ))}
              </svg>
            </div>
            <p className="mt-1.5 text-[10px] leading-relaxed text-muted-foreground">
              Shaded band = ±2 standard errors of drift, 2·√(p(1−p)/2N) — small N walks wide, big N walks narrow. Gray
              ghost lines are your last {ghosts.length} finished runs.
            </p>
          </div>

          {/* Hardy–Weinberg live readout */}
          <div className="space-y-3 rounded-xl border border-border/60 bg-muted/10 p-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Scale className="h-3.5 w-3.5 text-emerald-400" /> Hardy–Weinberg live check
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                p = {hw.p.toFixed(3)} · q = {hw.q.toFixed(3)}
              </span>
            </div>

            {/* expected genotype proportions as a stacked bar */}
            <div>
              <div className="flex h-6 w-full overflow-hidden rounded-md border border-border/40">
                <div className="bg-amber-500/80" style={{ width: `${hw.p * hw.p * 100}%` }} />
                <div className="bg-rose-500/70" style={{ width: `${2 * hw.p * hw.q * 100}%` }} />
                <div className="bg-rose-400/50" style={{ width: `${hw.q * hw.q * 100}%` }} />
              </div>
              <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground">
                <span className="text-amber-400">p² = {(hw.p * hw.p).toFixed(3)}</span>
                <span>2pq = {(2 * hw.p * hw.q).toFixed(3)}</span>
                <span className="text-rose-400">q² = {(hw.q * hw.q).toFixed(3)}</span>
              </div>
            </div>

            {/* expected vs observed genotype counts */}
            <div className="grid grid-cols-3 gap-x-3 gap-y-1 font-mono text-[11px]">
              <span className="text-muted-foreground">genotype</span>
              <span className="text-right text-muted-foreground">expected</span>
              <span className="text-right text-muted-foreground">observed</span>
              <span className="text-amber-400">AA</span>
              <span className="text-right">{hw.expAA.toFixed(1)}</span>
              <span className="text-right font-bold">{counts.AA}</span>
              <span>Aa</span>
              <span className="text-right">{hw.expAa.toFixed(1)}</span>
              <span className="text-right font-bold">{counts.Aa}</span>
              <span className="text-rose-400">aa</span>
              <span className="text-right">{hw.expaa.toFixed(1)}</span>
              <span className="text-right font-bold">{counts.aa}</span>
            </div>

            <p className="text-[11px] leading-relaxed text-muted-foreground">
              <span className="font-mono">χ² = {hw.chi2.toFixed(2)}</span> (df ≈ 1, critical 3.84) —{' '}
              {hw.matches ? (
                <span className="text-emerald-400">
                  matches Hardy–Weinberg: random mating rebuilds these ratios every single generation.
                </span>
              ) : (
                <span className="text-amber-400">
                  deviates from HW — with small N, sampling noise jiggles the genotype counts.
                </span>
              )}
            </p>
          </div>

          {/* Fixation banner + run tally */}
          <AnimatePresence>
            {banner && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-start gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3"
              >
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <div className="text-xs leading-relaxed">
                  <span className="font-semibold text-amber-300">
                    Allele {banner.fixed} fixed after {banner.gen} generations.
                  </span>{' '}
                  {banner.sweep
                    ? 'Selection drove this sweep — the fitter morph took over the meadow.'
                    : 'Pure drift — a neutral allele got lucky (or unlucky).'}{' '}
                  <span className="text-muted-foreground">Reset to start a new run.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="text-[11px]">
              Selection sweeps: {tally.sweeps}
            </Badge>
            <Badge variant="secondary" className="text-[11px]">
              Drift fixations: {tally.drifts}
            </Badge>
            <Badge variant="outline" className="text-[11px] text-muted-foreground">
              Ghost runs: {ghosts.length}/10
            </Badge>
            {ghosts.length > 0 && (
              <Button
                size="sm"
                variant="ghost"
                className="h-6 px-2 text-[11px] text-muted-foreground"
                onClick={() => setGhosts([])}
              >
                clear ghosts
              </Button>
            )}
          </div>

          {/* What to notice */}
          <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-4">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <Eye className="h-3.5 w-3.5" /> What to notice
            </span>
            <p className="mt-1.5 font-serif text-xs italic leading-relaxed text-muted-foreground">
              With s = 0 the two morphs wander by luck alone — and in a small meadow (try N = 40) one allele always ends
              up fixed, simply because 2N coin flips eventually run out of one face. Give A the slightest edge, though,
              and the trajectory turns into a ratchet: drift still staggers, but selection biases every step uphill.
              Set μ &gt; 0 with s &gt; 0 and watch the population settle at mutation–selection balance instead of ever
              truly fixing.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
