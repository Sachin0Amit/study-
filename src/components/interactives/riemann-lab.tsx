'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Lightbulb, RotateCcw, Sigma } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Plot geometry                                                      */
/* ------------------------------------------------------------------ */

const XMIN = -4
const XMAX = 4
const W = 620
const H = 430
const PL = 48
const PR = 14
const PT = 14
const PB = 30
const PW = W - PL - PR
const PH = H - PT - PB
const HALF_PI = Math.PI / 2

const xToPx = (x: number): number => PL + ((x - XMIN) / (XMAX - XMIN)) * PW

type Piece = readonly [number, number]

/* ------------------------------------------------------------------ */
/*  Function library with antiderivatives (Stewart ch 4.8 / 5.3–5.4)   */
/* ------------------------------------------------------------------ */

interface FnDef {
  key: string
  aria: string
  tex: string
  integrand: string
  FTex: string
  f: (x: number) => number | null
  F: (x: number) => number
  pieces: Piece[]
  bPieces: Piece[]
  yRange: [number, number]
}

function guarded(raw: (x: number) => number, pieces: Piece[]): (x: number) => number | null {
  return (x: number) => {
    if (x < XMIN || x > XMAX) return null
    for (const p of pieces) {
      if (x >= p[0] && x <= p[1]) {
        const y = raw(x)
        return Number.isFinite(y) ? y : null
      }
    }
    return null
  }
}

const TAN_PIECES: Piece[] = [
  [-4, -HALF_PI],
  [-HALF_PI, HALF_PI],
  [HALF_PI, 4],
]
const TAN_BOUNDS: Piece[] = [
  [-4, -1.51],
  [-1.51, 1.51],
  [1.51, 4],
]
const RECIP_PIECES: Piece[] = [
  [-4, -0.05],
  [0.05, 4],
]
const RECIP_BOUNDS: Piece[] = [
  [-4, -0.15],
  [0.15, 4],
]

const FN_LIB: FnDef[] = [
  {
    key: 'square',
    aria: 'x squared',
    tex: 'x^{2}',
    integrand: 'x^{2}',
    FTex: '\\frac{x^{3}}{3}',
    f: guarded((x) => x * x, [[-4, 4]]),
    F: (x) => (x * x * x) / 3,
    pieces: [[-4, 4]],
    bPieces: [[-4, 4]],
    yRange: [-0.8, 4.8],
  },
  {
    key: 'cube',
    aria: 'x cubed',
    tex: 'x^{3}',
    integrand: 'x^{3}',
    FTex: '\\frac{x^{4}}{4}',
    f: guarded((x) => x * x * x, [[-4, 4]]),
    F: (x) => (x * x * x * x) / 4,
    pieces: [[-4, 4]],
    bPieces: [[-4, 4]],
    yRange: [-4.5, 4.5],
  },
  {
    key: 'sin',
    aria: 'sine of x',
    tex: '\\sin x',
    integrand: '\\sin x',
    FTex: '-\\cos x',
    f: guarded(Math.sin, [[-4, 4]]),
    F: (x) => -Math.cos(x),
    pieces: [[-4, 4]],
    bPieces: [[-4, 4]],
    yRange: [-1.5, 1.5],
  },
  {
    key: 'cos',
    aria: 'cosine of x',
    tex: '\\cos x',
    integrand: '\\cos x',
    FTex: '\\sin x',
    f: guarded(Math.cos, [[-4, 4]]),
    F: Math.sin,
    pieces: [[-4, 4]],
    bPieces: [[-4, 4]],
    yRange: [-1.5, 1.5],
  },
  {
    key: 'tan',
    aria: 'tangent of x',
    tex: '\\tan x',
    integrand: '\\tan x',
    FTex: '-\\ln\\left|\\cos x\\right|',
    f: guarded(Math.tan, TAN_PIECES),
    F: (x) => {
      const c = Math.cos(x)
      if (c === 0 || !Number.isFinite(c)) return Number.NaN
      return -Math.log(Math.abs(c))
    },
    pieces: TAN_PIECES,
    bPieces: TAN_BOUNDS,
    yRange: [-6, 6],
  },
  {
    key: 'exp',
    aria: 'e to the x',
    tex: 'e^{x}',
    integrand: 'e^{x}',
    FTex: 'e^{x}',
    f: guarded(Math.exp, [[-4, 4]]),
    F: Math.exp,
    pieces: [[-4, 4]],
    bPieces: [[-4, 4]],
    yRange: [-2.2, 5.2],
  },
  {
    key: 'ln',
    aria: 'natural log of x',
    tex: '\\ln x',
    integrand: '\\ln x',
    FTex: 'x\\ln x - x',
    f: guarded(Math.log, [[0.2, 4]]),
    F: (x) => (x <= 0 ? Number.NaN : x * Math.log(x) - x),
    pieces: [[0.2, 4]],
    bPieces: [[0.2, 4]],
    yRange: [-2.6, 2.6],
  },
  {
    key: 'recip',
    aria: 'one over x',
    tex: '\\frac{1}{x}',
    integrand: '\\frac{1}{x}',
    FTex: '\\ln\\left|x\\right|',
    f: guarded((x) => 1 / x, RECIP_PIECES),
    F: (x) => (x === 0 ? Number.NaN : Math.log(Math.abs(x))),
    pieces: RECIP_PIECES,
    bPieces: RECIP_BOUNDS,
    yRange: [-6, 6],
  },
  {
    key: 'circ',
    aria: 'square root of one minus x squared',
    tex: '\\sqrt{1-x^{2}}',
    integrand: '\\sqrt{1-x^{2}}',
    FTex: '\\tfrac{1}{2}\\left(x\\sqrt{1-x^{2}}+\\arcsin x\\right)',
    f: guarded((x) => Math.sqrt(Math.max(0, 1 - x * x)), [[-1, 1]]),
    F: (x) => 0.5 * (x * Math.sqrt(Math.max(0, 1 - x * x)) + Math.asin(clamp(x, -1, 1))),
    pieces: [[-1, 1]],
    bPieces: [[-1, 1]],
    yRange: [-0.3, 1.35],
  },
]

/* ------------------------------------------------------------------ */
/*  Riemann engine                                                     */
/* ------------------------------------------------------------------ */

type RMode = 'left' | 'mid' | 'right' | 'trap'

interface Bar {
  x0: number
  x1: number
  yL: number
  yR: number
}

function computeBars(def: FnDef, a: number, b: number, n: number, mode: RMode): { bars: Bar[]; sum: number } {
  const dx = (b - a) / n
  const bars: Bar[] = []
  let sum = 0
  for (let i = 0; i < n; i++) {
    const x0 = a + i * dx
    const x1 = x0 + dx
    if (mode === 'trap') {
      const v0 = def.f(x0) ?? 0
      const v1 = def.f(x1) ?? 0
      sum += ((v0 + v1) / 2) * dx
      bars.push({ x0, x1, yL: v0, yR: v1 })
    } else {
      const xs = mode === 'left' ? x0 : mode === 'right' ? x1 : (x0 + x1) / 2
      const v = def.f(xs) ?? 0
      sum += v * dx
      bars.push({ x0, x1, yL: v, yR: v })
    }
  }
  return { bars, sum }
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v))
}

function pieceAt(pieces: Piece[], x: number): Piece | null {
  for (const p of pieces) if (x >= p[0] && x <= p[1]) return p
  return null
}

function nearestPiece(pieces: Piece[], x: number): Piece {
  let best = pieces[0]
  let bestDist = Infinity
  for (const p of pieces) {
    const d = x < p[0] ? p[0] - x : x > p[1] ? x - p[1] : 0
    if (d < bestDist) {
      bestDist = d
      best = p
    }
  }
  return best
}

function sanitizeBounds(def: FnDef, aRaw: number, bRaw: number): { a: number; b: number; clipped: boolean } {
  let a = clamp(aRaw, XMIN, XMAX)
  let b = clamp(bRaw, XMIN, XMAX)
  if (b < a) {
    const t = a
    a = b
    b = t
  }
  const mid = (a + b) / 2
  const p = pieceAt(def.bPieces, mid) ?? nearestPiece(def.bPieces, mid)
  let a2 = clamp(a, p[0], p[1])
  let b2 = clamp(b, p[0], p[1])
  if (b2 - a2 < 0.1) {
    a2 = clamp(a2, p[0], Math.max(p[0], p[1] - 0.1))
    b2 = Math.min(p[1], a2 + 0.1)
  }
  a = a2
  b = b2
  return { a, b, clipped: Math.abs(a - aRaw) > 1e-9 || Math.abs(b - bRaw) > 1e-9 }
}

/** Sampled curve path with breaks at domain gaps and vertical asymptotes. */
function buildPath(def: FnDef, ylo: number, yhi: number, n = 560): string {
  const span = yhi - ylo
  const over = span * 1.25
  const toPy = (y: number): number => PT + ((yhi - y) / span) * PH
  let d = ''
  let pen = false
  let prev: number | null = null
  for (let i = 0; i <= n; i++) {
    const x = XMIN + ((XMAX - XMIN) * i) / n
    const y = def.f(x)
    if (y === null || !Number.isFinite(y) || y > yhi + over || y < ylo - over) {
      pen = false
      prev = null
      continue
    }
    if (prev !== null && Math.abs(y - prev) > span * 1.1) pen = false
    d += `${pen ? 'L' : 'M'}${xToPx(x).toFixed(2)},${toPy(y).toFixed(2)}`
    pen = true
    prev = y
  }
  return d
}

function niceStep(span: number): number {
  const steps = [0.25, 0.5, 1, 2, 2.5, 5, 10, 20, 25, 50]
  for (const s of steps) if (span / s <= 9) return s
  return 50
}

function fmt(v: number | null | undefined, d = 4): string {
  if (v === null || v === undefined || !Number.isFinite(v)) return '—'
  const av = Math.abs(v)
  if (av >= 1e5 || (av > 0 && av < 1e-4)) return v.toExponential(2)
  return v.toFixed(d)
}

/** Trimmed number for embedding inside TeX. */
function fmtT(v: number): string {
  if (!Number.isFinite(v)) return '\\mathrm{n/a}'
  return String(Number(v.toFixed(4)))
}

function parseBound(s: string, fallback: number): number {
  const t = s.trim()
  if (!/^-?(\d+\.?\d*|\.\d+)$/.test(t)) return fallback
  const v = Number(t)
  return Number.isFinite(v) ? v : fallback
}

/* ------------------------------------------------------------------ */
/*  Convergence helpers                                                */
/* ------------------------------------------------------------------ */

interface ConvPt {
  n: number
  err: number
  mode: RMode
}

/** Least-squares slope of log(err) vs log(n); negative because error shrinks. */
function fitSlope(pts: ConvPt[]): number | null {
  if (pts.length < 2) return null
  const xs = pts.map((p) => Math.log10(p.n))
  const ys = pts.map((p) => Math.log10(Math.max(p.err, 1e-16)))
  const mx = xs.reduce((s, v) => s + v, 0) / xs.length
  const my = ys.reduce((s, v) => s + v, 0) / ys.length
  let num = 0
  let den = 0
  for (let i = 0; i < xs.length; i++) {
    num += (xs[i] - mx) * (ys[i] - my)
    den += (xs[i] - mx) ** 2
  }
  return den === 0 ? null : num / den
}

const MODE_LABEL: Record<RMode, string> = {
  left: 'Left endpoints',
  right: 'Right endpoints',
  mid: 'Midpoint',
  trap: 'Trapezoid',
}

const MODE_SHORT: Record<RMode, string> = {
  left: 'L',
  right: 'R',
  mid: 'M',
  trap: 'T',
}

const MODE_CHIP: Record<RMode, string> = {
  left: 'border-rose-500/40 bg-rose-500/10 text-rose-300',
  right: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
  mid: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  trap: 'border-teal-500/40 bg-teal-500/10 text-teal-300',
}

const MODE_DOT: Record<RMode, string> = {
  left: 'fill-rose-400',
  right: 'fill-amber-400',
  mid: 'fill-emerald-400',
  trap: 'fill-teal-400',
}

const SUPS: Record<string, string> = {
  '-': '⁻',
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
}

function pow10Label(k: number): string {
  return `10${String(k)
    .split('')
    .map((c) => SUPS[c] ?? '')
    .join('')}`
}

/* ------------------------------------------------------------------ */
/*  Presets                                                            */
/* ------------------------------------------------------------------ */

interface Preset {
  key: string
  label: string
  fn: string
  a: number
  b: number
  n: number
  mode: RMode
  note: string
  chip: string
}

const PRESETS: Preset[] = [
  {
    key: 'circ',
    label: 'Circle area',
    fn: 'circ',
    a: 0,
    b: 1,
    n: 8,
    mode: 'mid',
    note: 'Every bar is a slice of the quarter-circle of radius 1. Drive n upward and the sum closes in on π/4 ≈ 0.7854, the exact area — stack four quarter-circles and you have π. Detective note: because of the vertical tangent at x = 1, convergence here is slower than the textbook orders.',
    chip: '\\int_{0}^{1}\\sqrt{1-x^{2}}\\,dx=\\frac{\\pi}{4}\\approx 0.7854',
  },
  {
    key: 'sinhump',
    label: 'sin on [0, π] = 2',
    fn: 'sin',
    a: 0,
    b: Math.PI,
    n: 8,
    mode: 'mid',
    note: 'The classic hump: over one half-period the sine curve encloses exactly 2 units of signed area — the example behind the net change theorem (Ch 5.4). Bonus: because sin vanishes at both endpoints, even the left-endpoint rule converges at order 1/n² here — the O(1/n) term cancels.',
    chip: '\\int_{0}^{\\pi}\\sin x\\,dx=\\left[-\\cos x\\right]_{0}^{\\pi}=2',
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function RiemannLab() {
  const reduce = useReducedMotion()
  const [fnKey, setFnKey] = useState('square')
  const [mode, setMode] = useState<RMode>('left')
  const [n, setN] = useState(8)
  const [aText, setAText] = useState('0')
  const [bText, setBText] = useState('2')
  const [conv, setConv] = useState<ConvPt[]>([])
  const [presetKey, setPresetKey] = useState('')
  const [animSeed, setAnimSeed] = useState(0)
  const prevSig = useRef<string | null>(null)

  const def = useMemo(() => FN_LIB.find((f) => f.key === fnKey) ?? FN_LIB[0], [fnKey])

  const aRaw = parseBound(aText, 0)
  const bRaw = parseBound(bText, 2)
  const { a, b, clipped } = useMemo(
    () => sanitizeBounds(def, aRaw, bRaw),
    [def, aRaw, bRaw]
  )

  const dx = (b - a) / n
  const exact = def.F(b) - def.F(a)
  const { bars, sum } = useMemo(
    () => computeBars(def, a, b, n, mode),
    [def, a, b, n, mode]
  )
  const err = Math.abs(sum - exact)
  const signed = sum - exact

  /* -------- accumulate convergence points as n / mode change -------- */

  const sig = `${fnKey}|${a.toFixed(4)}|${b.toFixed(4)}`
  useEffect(() => {
    const reset = prevSig.current !== null && prevSig.current !== sig
    prevSig.current = sig
    setConv((prev) => {
      const base = reset ? [] : prev.filter((p) => !(p.n === n && p.mode === mode))
      const next = [...base, { n, err, mode }]
      return next.length > 200 ? next.slice(next.length - 200) : next
    })
  }, [sig, n, mode, err])

  /* -------- plot scales -------- */

  const [ylo, yhi] = def.yRange
  const yToPx = (y: number): number => PT + ((yhi - y) / (yhi - ylo)) * PH
  const curveD = useMemo(() => buildPath(def, ylo, yhi), [def, ylo, yhi])
  const step = niceStep(yhi - ylo)
  const yTicks: number[] = []
  for (let t = Math.ceil(ylo / step) * step; t <= yhi + 1e-9; t += step) {
    yTicks.push(Math.round(t * 1e6) / 1e6)
  }
  const barPxW = Math.max(1, (PW / (XMAX - XMIN)) * dx)

  /* -------- TeX readouts -------- */

  const sup = mode === 'left' ? 'L' : mode === 'right' ? 'R' : mode === 'trap' ? 'T' : 'M'
  const sumTex =
    mode === 'trap'
      ? `T_{${n}}=\\frac{\\Delta x}{2}\\left[f(x_0)+2f(x_1)+\\cdots+2f(x_{${n - 1}})+f(x_{${n}})\\right]=${fmtT(sum)}`
      : `S^{${sup}}_{${n}}=\\sum_{i=1}^{${n}} f(${mode === 'left' ? 'x_{i-1}' : mode === 'right' ? 'x_i' : '\\bar{x}_i'})\\,\\Delta x=${fmtT(sum)}`

  const exactTex = `\\int_{${fmtT(a)}}^{${fmtT(b)}} ${def.integrand}\\,dx=\\left[${def.FTex}\\right]_{${fmtT(a)}}^{${fmtT(b)}}=${fmtT(exact)}`
  const errTex = `\\left|${mode === 'trap' ? 'T' : 'S'}_{${n}}-I\\right|=${fmtT(err)}`
  const dxtex = `\\Delta x=\\frac{b-a}{n}=${fmtT(dx)}`

  /* -------- convergence plot scales -------- */

  const CW = 560
  const CH = 210
  const CL = 46
  const CRR = 14
  const CT = 14
  const CB = 26
  const LX0 = Math.log10(4)
  const LX1 = Math.log10(200)
  const cx = (lx: number): number => CL + ((lx - LX0) / (LX1 - LX0)) * (CW - CL - CRR)

  const logPts = conv.map((p) => ({ ...p, lx: Math.log10(p.n), ly: Math.log10(Math.max(p.err, 1e-16)) }))
  let yLo = logPts.length ? Math.min(...logPts.map((p) => p.ly)) - 0.4 : -3.5
  let yHi = logPts.length ? Math.max(...logPts.map((p) => p.ly)) + 0.4 : -0.5
  if (yHi - yLo < 1.4) {
    const c = (yHi + yLo) / 2
    yLo = c - 0.7
    yHi = c + 0.7
  }
  yHi = Math.min(yHi, 0.6)
  const cy = (ly: number): number => CT + ((yHi - ly) / (yHi - yLo)) * (CH - CT - CB)
  const guideTop = yHi - 0.12

  const applyPreset = (key: string) => {
    const p = PRESETS.find((x) => x.key === key)
    if (!p) return
    setFnKey(p.fn)
    setAText(String(Number(p.a.toFixed(4))))
    setBText(String(Number(p.b.toFixed(4))))
    setN(p.n)
    setMode(p.mode)
    setPresetKey(p.key)
    setConv([])
    setAnimSeed((s) => s + 1)
  }

  const activePreset = PRESETS.find((p) => p.key === presetKey) ?? null

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Sigma className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Riemann Sum Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Stewart Ch 5–7: stack rectangles (or trapezoids) under a curve, drive n upward and watch the
            sum close in on the exact integral — with the error race on a log–log chart.
          </p>
        </div>
      </div>

      {/* presets */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Presets
        </span>
        {PRESETS.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => applyPreset(p.key)}
            aria-pressed={presetKey === p.key}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
              presetKey === p.key
                ? 'border-emerald-500/60 bg-emerald-500/15 text-foreground ring-1 ring-emerald-500/40'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      {activePreset && (
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
          <p className="min-w-0 flex-1 text-[11px] leading-relaxed text-muted-foreground">
            {activePreset.note}
          </p>
          <span className="shrink-0 rounded-lg border border-border bg-card px-2.5 py-1 text-xs text-emerald-200">
            <TeX tex={activePreset.chip} />
          </span>
        </div>
      )}

      {/* function library */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Function
        </span>
        {FN_LIB.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => {
              setFnKey(f.key)
              setPresetKey('')
              setAnimSeed((s) => s + 1)
            }}
            aria-pressed={fnKey === f.key}
            aria-label={`Integrate ${f.aria}`}
            className={`rounded-lg border px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
              fnKey === f.key
                ? 'border-emerald-500/60 bg-emerald-500/15 text-foreground ring-1 ring-emerald-500/40'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
            }`}
          >
            <TeX tex={f.tex} />
          </button>
        ))}
      </div>

      {/* bounds + modes + n */}
      <div className="mt-3 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs text-muted-foreground">Bounds</span>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs text-muted-foreground">a =</span>
            <Input
              value={aText}
              onChange={(e) => {
                setAText(e.target.value)
                setPresetKey('')
              }}
              onBlur={() => {
                setAText(String(Number(a.toFixed(4))))
                setAnimSeed((s) => s + 1)
              }}
              inputMode="decimal"
              aria-label="Lower bound a"
              className="h-8 w-[72px] bg-card px-2 font-mono text-xs"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs text-muted-foreground">b =</span>
            <Input
              value={bText}
              onChange={(e) => {
                setBText(e.target.value)
                setPresetKey('')
              }}
              onBlur={() => {
                setBText(String(Number(b.toFixed(4))))
                setAnimSeed((s) => s + 1)
              }}
              inputMode="decimal"
              aria-label="Upper bound b"
              className="h-8 w-[72px] bg-card px-2 font-mono text-xs"
            />
          </div>
          {clipped && (
            <span className="text-[11px] text-amber-400">a, b snapped into the domain of f</span>
          )}
          <span className="rounded-lg border border-border bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground">
            <TeX tex={dxtex} />
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/30 p-0.5" role="group" aria-label="Sample point rule">
            {(['left', 'mid', 'right', 'trap'] as RMode[]).map((mk) => (
              <button
                key={mk}
                type="button"
                onClick={() => {
                  setMode(mk)
                  setAnimSeed((s) => s + 1)
                }}
                aria-pressed={mode === mk}
                className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                  mode === mk
                    ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {mk === 'mid' ? 'Midpoint' : mk === 'trap' ? 'Trapezoid' : mk === 'left' ? 'Left' : 'Right'}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-xs text-muted-foreground">n</span>
            <Slider
              min={4}
              max={200}
              step={1}
              value={[n]}
              onValueChange={(v) => setN(v[0] ?? 8)}
              className="w-36"
              aria-label="Number of rectangles"
            />
            <span className="w-8 font-mono text-xs text-foreground">{n}</span>
          </div>
        </div>
      </div>

      {/* plot */}
      <div className="mt-3 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full select-none"
          role="img"
          aria-label={`Plot of ${def.aria} on the interval from ${a.toFixed(2)} to ${b.toFixed(2)} with ${n} ${MODE_LABEL[mode].toLowerCase()} Riemann bars.`}
        >
          <defs>
            <clipPath id="riemann-plot-clip">
              <rect x={PL} y={PT} width={PW} height={PH} rx={6} />
            </clipPath>
          </defs>

          {/* plot background */}
          <rect x={PL} y={PT} width={PW} height={PH} rx={6} className="fill-zinc-950/40" />

          {/* grid */}
          {Array.from({ length: 9 }, (_, i) => XMIN + i).map((gx) => (
            <g key={`gx-${gx}`}>
              <line
                x1={xToPx(gx)}
                y1={PT}
                x2={xToPx(gx)}
                y2={PT + PH}
                className="stroke-zinc-500/15"
                strokeWidth={1}
              />
              <text
                x={xToPx(gx)}
                y={H - PB + 16}
                textAnchor="middle"
                fontSize={11}
                className="fill-zinc-500 font-mono"
              >
                {gx === 0 ? '' : gx}
              </text>
            </g>
          ))}
          {yTicks.map((gy) => (
            <g key={`gy-${gy}`}>
              <line
                x1={PL}
                y1={yToPx(gy)}
                x2={PL + PW}
                y2={yToPx(gy)}
                className="stroke-zinc-500/15"
                strokeWidth={1}
              />
              <text
                x={PL - 7}
                y={yToPx(gy) + 4}
                textAnchor="end"
                fontSize={11}
                className="fill-zinc-500 font-mono"
              >
                {gy === 0 ? '' : String(Number(gy.toFixed(2)))}
              </text>
            </g>
          ))}

          {/* axes */}
          {ylo <= 0 && yhi >= 0 && (
            <line
              x1={PL}
              y1={yToPx(0)}
              x2={PL + PW}
              y2={yToPx(0)}
              className="stroke-zinc-500/50"
              strokeWidth={1.5}
            />
          )}
          <line
            x1={xToPx(0)}
            y1={PT}
            x2={xToPx(0)}
            y2={PT + PH}
            className="stroke-zinc-500/50"
            strokeWidth={1.5}
          />
          <text
            x={PL - 7}
            y={yToPx(0) + 14}
            textAnchor="end"
            fontSize={11}
            className="fill-zinc-500 font-mono"
          >
            0
          </text>

          <g clipPath="url(#riemann-plot-clip)">
            {/* bars / trapezoids */}
            {mode === 'trap'
              ? bars.map((bar, i) => {
                  const pos = (bar.yL + bar.yR) / 2 >= 0
                  const x0 = xToPx(bar.x0).toFixed(2)
                  const x1 = xToPx(bar.x1).toFixed(2)
                  const y0 = yToPx(bar.yL).toFixed(2)
                  const y1 = yToPx(bar.yR).toFixed(2)
                  const yb = yToPx(0).toFixed(2)
                  return (
                    <motion.polygon
                      key={`${animSeed}-${i}`}
                      points={`${x0},${yb} ${x0},${y0} ${x1},${y1} ${x1},${yb}`}
                      className={
                        pos ? 'fill-teal-500/20 stroke-teal-400/70' : 'fill-rose-500/20 stroke-rose-400/70'
                      }
                      strokeWidth={0.75}
                      initial={reduce ? false : { opacity: 0, scaleY: 0.05 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { duration: 0.3, delay: (i / bars.length) * 0.45, ease: 'easeOut' }
                      }
                      style={{ transformBox: 'fill-box', transformOrigin: pos ? '50% 100%' : '50% 0%' }}
                    />
                  )
                })
              : bars.map((bar, i) => {
                  const pos = bar.yL >= 0
                  return (
                    <motion.rect
                      key={`${animSeed}-${i}`}
                      x={xToPx(bar.x0)}
                      width={barPxW}
                      y={yToPx(Math.max(0, bar.yL))}
                      height={Math.abs(yToPx(bar.yL) - yToPx(0))}
                      className={
                        pos
                          ? 'fill-emerald-500/25 stroke-emerald-400/70'
                          : 'fill-rose-500/20 stroke-rose-400/70'
                      }
                      strokeWidth={0.75}
                      initial={reduce ? false : { opacity: 0, scaleY: 0.05 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { duration: 0.3, delay: (i / bars.length) * 0.45, ease: 'easeOut' }
                      }
                      style={{ transformBox: 'fill-box', transformOrigin: pos ? '50% 100%' : '50% 0%' }}
                    />
                  )
                })}

            {/* evaluation points */}
            {n <= 48 &&
              bars.map((bar, i) => {
                const xs = mode === 'left' ? bar.x0 : mode === 'right' ? bar.x1 : (bar.x0 + bar.x1) / 2
                const pts: [number, number][] =
                  mode === 'trap'
                    ? [
                        [bar.x0, bar.yL],
                        [bar.x1, bar.yR],
                      ]
                    : [[xs, bar.yL]]
                return pts.map(([px, py], j) => (
                  <circle
                    key={`pt-${i}-${j}`}
                    cx={xToPx(px)}
                    cy={yToPx(py)}
                    r={2.4}
                    className="fill-emerald-300"
                  />
                ))
              })}

            {/* curve */}
            <motion.path
              key={`curve-${fnKey}-${animSeed}`}
              d={curveD}
              className="stroke-emerald-400"
              strokeWidth={2.5}
              fill="none"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={reduce ? { duration: 0 } : { duration: 0.7, ease: 'easeOut' }}
            />
          </g>

          {/* bound markers */}
          <line
            x1={xToPx(a)}
            y1={PT}
            x2={xToPx(a)}
            y2={PT + PH}
            className="stroke-amber-400/50"
            strokeWidth={1}
            strokeDasharray="3 3"
          />
          <line
            x1={xToPx(b)}
            y1={PT}
            x2={xToPx(b)}
            y2={PT + PH}
            className="stroke-amber-400/50"
            strokeWidth={1}
            strokeDasharray="3 3"
          />
        </svg>
        <p className="mt-1.5 text-[11px] text-muted-foreground">
          Bars above the x-axis add positive area (emerald), below it they subtract (rose) — the definite
          integral is signed area. Amber dashes mark a and b.
        </p>
      </div>

      {/* readouts */}
      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Riemann sum — {MODE_LABEL[mode]}
          </p>
          <div className="mt-1.5 overflow-x-auto text-sm text-emerald-100">
            <TeX display tex={sumTex} />
          </div>
          <p className="mt-1 text-[10px] text-muted-foreground">
            n = {n} rectangles · Δx = {fmtT(dx)}
          </p>
        </div>
        <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Exact integral — Fundamental Theorem
          </p>
          <div className="mt-1.5 overflow-x-auto text-sm text-teal-100">
            <TeX display tex={exactTex} />
          </div>
          <p className="mt-1 text-[10px] text-muted-foreground">
            antiderivative hard-coded from the Ch 5.4 table
          </p>
        </div>
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Error
          </p>
          <div className="mt-1.5 overflow-x-auto text-sm text-amber-100">
            <TeX display tex={errTex} />
          </div>
          <p className="mt-1 font-mono text-[10px] text-muted-foreground">
            {mode === 'trap' ? 'T' : 'S'} − I = {fmtT(signed)} ({signed < 0 ? 'under' : 'over'}-estimate)
          </p>
        </div>
      </div>

      {/* convergence panel */}
      <div className="mt-4 rounded-xl border border-border bg-background/50 p-3 sm:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-sm font-semibold text-foreground">Convergence — error vs n (log–log)</h4>
          <span className="rounded-lg border border-border bg-muted/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
            {conv.length} pt{conv.length === 1 ? '' : 's'}
          </span>
          <Button
            size="sm"
            variant="ghost"
            className="ml-auto h-7 px-2"
            onClick={() => setConv([])}
            aria-label="Clear convergence points"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </Button>
        </div>

        <svg
          viewBox={`0 0 ${CW} ${CH}`}
          className="mt-2 w-full select-none"
          role="img"
          aria-label="Log-log scatter plot of absolute error against n, with reference slopes of order one over n and one over n squared."
        >
          <defs>
            <clipPath id="riemann-conv-clip">
              <rect x={CL} y={CT} width={CW - CL - CRR} height={CH - CT - CB} rx={4} />
            </clipPath>
          </defs>
          <rect
            x={CL}
            y={CT}
            width={CW - CL - CRR}
            height={CH - CT - CB}
            rx={4}
            className="fill-zinc-950/40"
          />

          {/* x grid at n = 4, 10, 25, 50, 100, 200 */}
          {[4, 10, 25, 50, 100, 200].map((nx) => (
            <g key={`cn-${nx}`}>
              <line
                x1={cx(Math.log10(nx))}
                y1={CT}
                x2={cx(Math.log10(nx))}
                y2={CH - CB}
                className="stroke-zinc-500/15"
                strokeWidth={1}
              />
              <text
                x={cx(Math.log10(nx))}
                y={CH - CB + 15}
                textAnchor="middle"
                fontSize={10}
                className="fill-zinc-500 font-mono"
              >
                {nx}
              </text>
            </g>
          ))}

          {/* y grid at decades */}
          {Array.from({ length: Math.floor(yHi) - Math.ceil(yLo) + 1 }, (_, i) => Math.ceil(yLo) + i).map(
            (k) => (
              <g key={`ck-${k}`}>
                <line
                  x1={CL}
                  y1={cy(k)}
                  x2={CW - CRR}
                  y2={cy(k)}
                  className="stroke-zinc-500/15"
                  strokeWidth={1}
                />
                <text
                  x={CL - 6}
                  y={cy(k) + 3.5}
                  textAnchor="end"
                  fontSize={10}
                  className="fill-zinc-500 font-mono"
                >
                  {pow10Label(k)}
                </text>
              </g>
            )
          )}

          <g clipPath="url(#riemann-conv-clip)">
            {/* reference slopes */}
            {[1, 2].map((s) => (
              <line
                key={`ref-${s}`}
                x1={cx(LX0)}
                y1={cy(guideTop)}
                x2={cx(LX1)}
                y2={cy(guideTop - s * (LX1 - LX0))}
                className="stroke-zinc-400/40"
                strokeWidth={1.25}
                strokeDasharray="6 4"
              />
            ))}

            {/* accumulated points */}
            {logPts.map((p, idx) => (
              <circle
                key={`cp-${idx}`}
                cx={cx(p.lx)}
                cy={cy(p.ly)}
                r={3.2}
                className={MODE_DOT[p.mode]}
              >
                <title>{`n = ${p.n}, error = ${p.err.toPrecision(3)} (${MODE_LABEL[p.mode]})`}</title>
              </circle>
            ))}
          </g>

          <text
            x={CL + (CW - CL - CRR) / 2}
            y={CH - 4}
            textAnchor="middle"
            fontSize={10}
            className="fill-zinc-400"
          >
            n
          </text>
          <text x={CL - 34} y={CT + 6} fontSize={10} className="fill-zinc-400">
            |error|
          </text>
        </svg>

        {/* fitted slopes */}
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {(['left', 'right', 'mid', 'trap'] as RMode[]).map((mk) => {
            const pts = conv.filter((p) => p.mode === mk)
            const s = fitSlope(pts)
            if (s === null) return null
            return (
              <span
                key={`fit-${mk}`}
                className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] ${MODE_CHIP[mk]}`}
              >
                {MODE_SHORT[mk]}: p ≈ {(-s).toFixed(2)}
              </span>
            )
          })}
          <span className="rounded-lg border border-border bg-muted/20 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
            Simpson: p ≈ 4
          </span>
          {conv.length < 2 && (
            <span className="text-[11px] text-muted-foreground">
              move the n slider to accumulate points
            </span>
          )}
        </div>
        <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
          Dashed guides: error ∝ 1/n (slope −1, the endpoint rules) and ∝ 1/n² (slope −2, midpoint and
          trapezoid). Halving Δx halves the endpoint error but quarters the midpoint error — exactly the
          Ch 7.7 error-bound orders. Simpson&apos;s rule (p ≈ 4) is not drawn.
        </p>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          with <span className="font-medium text-foreground">x²</span> on [0, 2], sweep n from 4 to
          200 under <span className="font-medium text-foreground">Midpoint</span> — the log–log slope
          pins itself near 2, while <span className="font-medium text-foreground">Left</span> pins near
          1: four times more rectangles for the same accuracy. Then load{' '}
          <span className="font-medium text-foreground">Circle area</span> and watch the sum race
          toward π/4 — slower than n⁻², because of that vertical tangent at x = 1.
        </span>
      </div>
    </div>
  )
}
