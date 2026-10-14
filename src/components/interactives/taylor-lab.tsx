'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Sigma, Play, Pause, Plus, Minus, RotateCcw, Crosshair, MoveHorizontal, Lightbulb,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/* constants + formatting helpers                                      */
/* ------------------------------------------------------------------ */

const W = 900
const H = 540
const PL = 52
const PR = 18
const PT = 18
const PB = 34
const XMIN = -3
const XMAX = 3
const SAMPLES = 360
const MAXN = 12

const FACT: number[] = (() => {
  const f = [1]
  for (let i = 1; i <= 15; i++) f.push(f[i - 1] * i)
  return f
})()

function fixed(v: number, d = 2): string {
  let s = v.toFixed(d)
  if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '')
  return s === '-0' ? '0' : s
}

function fmt(v: number, d = 2): string {
  if (Number.isNaN(v)) return '—'
  if (!Number.isFinite(v)) return '∞'
  const a = Math.abs(v)
  if (a !== 0 && (a >= 1e4 || a < 1e-3)) {
    const e = Math.floor(Math.log10(a))
    return `${(v / 10 ** e).toFixed(2)}e${e}`
  }
  return fixed(v, d)
}

function fmtTex(v: number, d = 2): string {
  if (Number.isNaN(v)) return '\\text{undefined}'
  if (!Number.isFinite(v)) return '\\infty'
  const a = Math.abs(v)
  if (a !== 0 && (a >= 1e4 || a < 1e-3)) {
    const e = Math.floor(Math.log10(a))
    return `${(v / 10 ** e).toFixed(2)}\\times 10^{${e}}`
  }
  return fixed(v, d)
}

/* ------------------------------------------------------------------ */
/* function library (analytic derivatives)                            */
/* ------------------------------------------------------------------ */

interface TermChip {
  n: number
  mag: string
  neg: boolean
}

interface FnDef {
  id: string
  label: string
  seriesTex: string
  f: (x: number) => number
  d: (n: number, x: number) => number
  singularities: number[]
  radius: (a: number) => number
  intervalTex: (a: number) => string
  maclaurinTerm: (n: number) => TermChip | null
}

const LIB: FnDef[] = [
  {
    id: 'exp',
    label: 'e^x',
    seriesTex: 'e^{x} \\;=\\; \\sum_{n=0}^{\\infty} \\frac{x^{n}}{n!}',
    f: (x) => Math.exp(x),
    d: (_n, x) => Math.exp(x),
    singularities: [],
    radius: () => Infinity,
    intervalTex: () => '\\text{converges for every } x \\quad (R = \\infty)',
    maclaurinTerm: (n) =>
      n === 0 ? { n, mag: '1', neg: false } : { n, mag: `\\frac{x^{${n}}}{${n}!}`, neg: false },
  },
  {
    id: 'sin',
    label: 'sin x',
    seriesTex: '\\sin x \\;=\\; \\sum_{n=0}^{\\infty} (-1)^{n} \\frac{x^{2n+1}}{(2n+1)!}',
    f: (x) => Math.sin(x),
    d: (n, x) => Math.sin(x + (n * Math.PI) / 2),
    singularities: [],
    radius: () => Infinity,
    intervalTex: () => '\\text{converges for every } x \\quad (R = \\infty)',
    maclaurinTerm: (n) => {
      if (n % 2 === 0) return null
      const k = (n - 1) / 2
      return { n, mag: n === 1 ? 'x' : `\\frac{x^{${n}}}{${n}!}`, neg: k % 2 === 1 }
    },
  },
  {
    id: 'cos',
    label: 'cos x',
    seriesTex: '\\cos x \\;=\\; \\sum_{n=0}^{\\infty} (-1)^{n} \\frac{x^{2n}}{(2n)!}',
    f: (x) => Math.cos(x),
    d: (n, x) => Math.cos(x + (n * Math.PI) / 2),
    singularities: [],
    radius: () => Infinity,
    intervalTex: () => '\\text{converges for every } x \\quad (R = \\infty)',
    maclaurinTerm: (n) => {
      if (n % 2 === 1) return null
      return { n, mag: n === 0 ? '1' : `\\frac{x^{${n}}}{${n}!}`, neg: n / 2 % 2 === 1 }
    },
  },
  {
    id: 'ln',
    label: 'ln(1+x)',
    seriesTex: '\\ln(1+x) \\;=\\; \\sum_{n=1}^{\\infty} (-1)^{n-1} \\, \\frac{x^{n}}{n}',
    f: (x) => Math.log(1 + x),
    d: (n, x) =>
      n === 0 ? Math.log(1 + x) : ((n % 2 === 1 ? 1 : -1) * FACT[n - 1]) / (1 + x) ** n,
    singularities: [-1],
    radius: (a) => a + 1,
    intervalTex: (a) =>
      Math.abs(a) < 1e-9 ? '-1 < x \\le 1' : `-1 < x \\le ${fixed(2 * a + 1)}`,
    maclaurinTerm: (n) => (n === 0 ? null : { n, mag: `\\frac{x^{${n}}}{${n}}`, neg: n % 2 === 0 }),
  },
  {
    id: 'recip',
    label: '1/(1-x)',
    seriesTex: '\\frac{1}{1-x} \\;=\\; \\sum_{n=0}^{\\infty} x^{n}',
    f: (x) => 1 / (1 - x),
    d: (n, x) => FACT[n] / (1 - x) ** (n + 1),
    singularities: [1],
    radius: (a) => Math.abs(1 - a),
    intervalTex: (a) =>
      Math.abs(a) < 1e-9 ? '-1 \\le x < 1' : `${fixed(2 * a - 1)} \\le x < ${fixed(2 * a + 1)}`,
    maclaurinTerm: (n) => (n === 0 ? { n, mag: '1', neg: false } : { n, mag: `x^{${n}}`, neg: false }),
  },
]

/* keep the expansion point a strictly inside the domain of f */
function sanitizeA(v: number, fn: FnDef): number {
  let a = Math.round(v * 10) / 10
  if (fn.id === 'ln') a = Math.max(a, -0.9)
  for (const s of fn.singularities) {
    if (fn.id !== 'ln' && Math.abs(a - s) < 0.11) a = a < s ? s - 0.1 : s + 0.1
  }
  return Math.min(2.5, Math.max(-2.5, a))
}

/* Taylor's inequality: M = max |f^(n+1)| on the interval between a and x0 */
function taylorBound(
  cur: FnDef,
  a: number,
  x0: number,
  n: number
): { finite: boolean; m: number; b: number } {
  const lo = Math.min(a, x0)
  const hi = Math.max(a, x0)
  let m = 0
  for (let i = 0; i <= 64; i++) {
    const x = lo + ((hi - lo) * i) / 64
    const v = cur.d(n + 1, x)
    if (!Number.isFinite(v)) return { finite: false, m: 0, b: 0 }
    m = Math.max(m, Math.abs(v))
  }
  return { finite: true, m, b: (m * Math.abs(x0 - a) ** (n + 1)) / FACT[n + 1] }
}

/* ------------------------------------------------------------------ */
/* main component                                                      */
/* ------------------------------------------------------------------ */

export default function TaylorLab() {
  const reduced = useReducedMotion() ?? false
  const [fnId, setFnId] = useState('sin')
  const cur = useMemo(() => LIB.find((f) => f.id === fnId) ?? LIB[1], [fnId])
  const [n, setN] = useState(5)
  const [aRaw, setA] = useState(0)
  const a = sanitizeA(aRaw, cur) // derived: valid expansion point
  const [x0, setX0] = useState(1.2)
  const [showBand, setShowBand] = useState(true)
  const [playing, setPlaying] = useState(false)

  const svgRef = useRef<SVGSVGElement | null>(null)
  const dragRef = useRef(false)
  const [playFrom, setPlayFrom] = useState(0)

  /* ---------------- play: animate N from a start order to 12 ---------------- */
  useEffect(() => {
    if (!playing) return
    const from = playFrom
    const steps = Math.max(MAXN - from, 1)
    const dur = steps * 560
    const t0 = performance.now()
    let raf = 0
    let last = -1
    const tick = (now: number) => {
      const u = Math.min(1, (now - t0) / dur)
      const eased = u < 0.5 ? 4 * u * u * u : 1 - (-2 * u + 2) ** 3 / 2
      const val = Math.round(from + eased * steps)
      if (val !== last) {
        last = val
        setN(val)
      }
      if (u < 1) raf = requestAnimationFrame(tick)
      else setPlaying(false)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing, playFrom])

  const onPlayToggle = () => {
    if (playing) {
      setPlaying(false)
      return
    }
    if (n >= MAXN) setN(0)
    setPlayFrom(n >= MAXN ? 0 : n)
    setPlaying(true)
  }

  /* ---------------- coefficients + view ---------------- */
  const coeffs = useMemo(() => {
    const cs: number[] = []
    for (let k = 0; k <= MAXN; k++) {
      const c = cur.d(k, a) / FACT[k]
      cs.push(Number.isFinite(c) ? c : 0)
    }
    return cs
  }, [cur, a])

  const taylorAt = (x: number): number => {
    let s = 0
    for (let k = n; k >= 0; k--) s = s * (x - a) + coeffs[k]
    return s
  }

  const { yLo, yHi } = useMemo(() => {
    const vals: number[] = []
    for (let i = 0; i <= SAMPLES; i++) {
      const x = XMIN + ((XMAX - XMIN) * i) / SAMPLES
      const y = cur.f(x)
      if (Number.isFinite(y) && Math.abs(y) < 60) vals.push(y)
    }
    vals.sort((p, q) => p - q)
    let lo = vals.length > 0 ? vals[Math.floor(0.02 * vals.length)] : -3
    let hi = vals.length > 0 ? vals[Math.floor(0.98 * (vals.length - 1))] : 3
    for (const e of [cur.f(x0), cur.f(a)]) {
      if (Number.isFinite(e) && Math.abs(e) < 60) {
        lo = Math.min(lo, e)
        hi = Math.max(hi, e)
      }
    }
    if (!Number.isFinite(lo) || !Number.isFinite(hi)) {
      lo = -3
      hi = 3
    }
    const pad = 0.1 * (hi - lo)
    lo -= pad
    hi += pad
    lo = Math.max(lo, -8)
    hi = Math.min(hi, 8)
    if (hi - lo < 1.6) {
      const m = (hi + lo) / 2
      lo = m - 0.8
      hi = m + 0.8
    }
    return { yLo: lo, yHi: hi }
  }, [cur, x0, a])

  const SX = (x: number): number => PL + ((x - XMIN) / (XMAX - XMIN)) * (W - PL - PR)
  const SY = (y: number): number => PT + ((yHi - y) / (yHi - yLo)) * (H - PT - PB)
  const ySpan = yHi - yLo

  const yStep = [0.25, 0.5, 1, 2, 4].find((s) => ySpan / s <= 8.5) ?? 4
  const yTicks: number[] = []
  for (let v = Math.ceil(yLo / yStep) * yStep; v <= yHi + 1e-9; v += yStep) yTicks.push(v)

  /* ---------------- paths ---------------- */
  const buildFPath = (): string => {
    let d = ''
    let pen = false
    let prev = 0
    for (let i = 0; i <= SAMPLES; i++) {
      const x = XMIN + ((XMAX - XMIN) * i) / SAMPLES
      const y = cur.f(x)
      if (!Number.isFinite(y)) {
        pen = false
        continue
      }
      if (pen && Math.abs(y - prev) > 0.7 * ySpan) pen = false
      d += `${pen ? 'L' : 'M'}${SX(x).toFixed(1)} ${SY(y).toFixed(1)} `
      pen = true
      prev = y
    }
    return d
  }

  const buildTPath = (): string => {
    let d = ''
    let pen = false
    let prev = 0
    for (let i = 0; i <= SAMPLES; i++) {
      const x = XMIN + ((XMAX - XMIN) * i) / SAMPLES
      const y = taylorAt(x)
      if (!Number.isFinite(y)) {
        pen = false
        continue
      }
      if (pen && Math.abs(y - prev) > 0.7 * ySpan) pen = false
      d += `${pen ? 'L' : 'M'}${SX(x).toFixed(1)} ${SY(y).toFixed(1)} `
      pen = true
      prev = y
    }
    return d
  }

  const buildBand = (): string[] => {
    const polys: string[] = []
    const fPts: [number, number][] = []
    const tPts: [number, number][] = []
    const cl = (y: number): number => Math.max(yLo - 0.6 * ySpan, Math.min(yHi + 0.6 * ySpan, y))
    const closePoly = () => {
      if (fPts.length > 1) {
        let d = ''
        fPts.forEach((p, i) => {
          d += `${i === 0 ? 'M' : 'L'}${SX(p[0]).toFixed(1)} ${SY(p[1]).toFixed(1)} `
        })
        for (let i = tPts.length - 1; i >= 0; i--) {
          d += `L${SX(tPts[i][0]).toFixed(1)} ${SY(tPts[i][1]).toFixed(1)} `
        }
        polys.push(`${d}Z`)
      }
      fPts.length = 0
      tPts.length = 0
    }
    let pen = false
    let prevF = 0
    for (let i = 0; i <= SAMPLES; i++) {
      const x = XMIN + ((XMAX - XMIN) * i) / SAMPLES
      const fv = cur.f(x)
      const tv = taylorAt(x)
      if (!Number.isFinite(fv) || !Number.isFinite(tv)) {
        closePoly()
        pen = false
        continue
      }
      if (pen && Math.abs(fv - prevF) > 0.7 * ySpan) closePoly()
      fPts.push([x, cl(fv)])
      tPts.push([x, cl(tv)])
      pen = true
      prevF = fv
    }
    closePoly()
    return polys
  }

  /* ---------------- convergence data ---------------- */
  const R = cur.radius(a)
  const convLines = Number.isFinite(R)
    ? [a - R, a + R].filter((x) => x >= XMIN - 0.05 && x <= XMAX + 0.05)
    : []
  const outside = Number.isFinite(R) && (x0 < a - R || x0 > a + R)

  /* ---------------- readout ---------------- */
  const tVal = taylorAt(x0)
  const fVal = cur.f(x0)
  const err = Number.isFinite(fVal) && Number.isFinite(tVal) ? Math.abs(fVal - tVal) : NaN

  const bound = taylorBound(cur, a, x0, n)

  /* ---------------- term chips ---------------- */
  const chips = useMemo(() => {
    const out: TermChip[] = []
    for (let k = 0; k <= n; k++) {
      if (Math.abs(a) < 1e-9) {
        const t = cur.maclaurinTerm(k)
        if (t) out.push(t)
      } else {
        const c = cur.d(k, a) / FACT[k]
        if (Number.isFinite(c) && Math.abs(c) >= 1e-12) {
          const base =
            k === 0 ? '' : `\\,(x${a < 0 ? '+' : '-'}${fixed(Math.abs(a))})^{${k}}`
          out.push({ n: k, mag: fmtTex(Math.abs(c), 4) + base, neg: c < 0 })
        }
      }
    }
    if (out.length === 0) out.push({ n: 0, mag: '0', neg: false })
    return out
  }, [cur, n, a])

  /* ---------------- probe drag ---------------- */
  const toDataX = (clientX: number): number => {
    const rect = svgRef.current?.getBoundingClientRect()
    if (!rect) return x0
    const vx = ((clientX - rect.left) / rect.width) * W
    const x = XMIN + ((vx - PL) / (W - PL - PR)) * (XMAX - XMIN)
    return Math.round(Math.min(2.95, Math.max(-2.95, x)) * 20) / 20
  }

  const axisY = 0 >= yLo && 0 <= yHi ? SY(0) : H - PB
  const fA = cur.f(a)
  const probeDotCl = (y: number): number => Math.max(PT + 4, Math.min(H - PB - 4, SY(y)))

  return (
    <div className="flex flex-col gap-4">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <Sigma className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Taylor &amp; Maclaurin Lab</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Wrap Taylor polynomials <TeX tex="T_N" /> around a function, watch the error band shrink, and drag the
              expansion point to see the radius of convergence move.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">N = {n}</span>
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">a = {fixed(a)}</span>
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">R = {fmt(R)}</span>
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">
            |R<sub>N</sub>(x₀)| = {fmt(err, 3)}
          </span>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-1 xl:grid-cols-12">
        {/* canvas */}
        <div className="overflow-hidden rounded-xl border border-border bg-card xl:col-span-7 2xl:col-span-8">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Approximation
              </span>
              <span className="rounded-md border border-teal-500/30 bg-teal-500/10 px-2 py-0.5 font-mono text-[10px] text-teal-300">
                {Math.abs(a) < 1e-9 ? 'Maclaurin (a = 0)' : `Taylor about a = ${fixed(a)}`}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                f(x)
                <span className="ml-2 h-2 w-2 rounded-full bg-amber-400" />
                <TeX tex={`T_{${n}}(x)`} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-muted-foreground">Error band</span>
                <Switch checked={showBand} onCheckedChange={setShowBand} aria-label="toggle error band" />
              </div>
            </div>
          </div>
          <div className="p-2">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full touch-none"
              role="img"
              aria-label={`Chart of the true function in emerald and the order ${n} Taylor polynomial in amber about a = ${fixed(
                a
              )}, with the absolute error shaded in rose`}
            >
              <defs>
                <clipPath id="tl-plot">
                  <rect x={PL} y={PT} width={W - PL - PR} height={H - PT - PB} />
                </clipPath>
              </defs>

              {/* grid */}
              {[-3, -2, -1, 0, 1, 2, 3].map((t) => (
                <line key={`gx${t}`} x1={SX(t)} y1={PT} x2={SX(t)} y2={H - PB} stroke="#27272a" strokeWidth={1} />
              ))}
              {yTicks.map((v) => (
                <line
                  key={`gy${v.toFixed(3)}`}
                  x1={PL}
                  y1={SY(v)}
                  x2={W - PR}
                  y2={SY(v)}
                  stroke="#27272a"
                  strokeWidth={1}
                />
              ))}
              {/* axes */}
              <line x1={PL} y1={axisY} x2={W - PR} y2={axisY} stroke="#52525b" strokeWidth={1.5} />
              <line x1={SX(0)} y1={PT} x2={SX(0)} y2={H - PB} stroke="#52525b" strokeWidth={1.5} />
              {[-3, -2, -1, 1, 2, 3].map((t) => (
                <text key={`tx${t}`} x={SX(t)} y={axisY + 15} textAnchor="middle" fontSize={10} className="fill-zinc-500 font-mono">
                  {t}
                </text>
              ))}
              {yTicks.map((v) => (
                <text key={`ty${v.toFixed(3)}`} x={PL - 7} y={SY(v) + 3} textAnchor="end" fontSize={10} className="fill-zinc-500 font-mono">
                  {fixed(v, 2)}
                </text>
              ))}

              {/* error band + curves (clipped) */}
              <g clipPath="url(#tl-plot)">
                {showBand &&
                  buildBand().map((d, i) => (
                    <path key={`band${i}`} d={d} fill="#f43f5e" fillOpacity={0.14} stroke="none" />
                  ))}
                {convLines.map((x) => (
                  <g key={`conv${x}`}>
                    <line
                      x1={SX(x)}
                      y1={PT + 4}
                      x2={SX(x)}
                      y2={H - PB - 4}
                      stroke="#f43f5e"
                      strokeWidth={1.5}
                      strokeDasharray="6 5"
                      opacity={0.85}
                    />
                    <text x={SX(x)} y={PT + 13} textAnchor="middle" fontSize={10} className="fill-rose-400 font-mono">
                      x = {fixed(x)}
                    </text>
                  </g>
                ))}
                <path d={buildFPath()} fill="none" stroke="#10b981" strokeWidth={3} strokeLinecap="round" />
                <motion.path
                  key={`${cur.id}-${n}-${a}`}
                  initial={reduced ? false : { opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  d={buildTPath()}
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
              </g>

              {/* expansion point a */}
              <g>
                <line x1={SX(a)} y1={PT} x2={SX(a)} y2={H - PB} stroke="#2dd4bf" strokeWidth={1} strokeDasharray="3 4" opacity={0.7} />
                {Number.isFinite(fA) && (
                  <>
                    <circle cx={SX(a)} cy={probeDotCl(fA)} r={4.5} fill="#2dd4bf" stroke="#042f2e" strokeWidth={1.5} />
                    <text x={SX(a) + 8} y={probeDotCl(fA) - 8} fontSize={11} className="fill-teal-300 font-mono">
                      a
                    </text>
                  </>
                )}
              </g>

              {/* probe */}
              <g>
                <line x1={SX(x0)} y1={PT} x2={SX(x0)} y2={H - PB} stroke="#fbbf24" strokeWidth={1} strokeDasharray="4 4" opacity={0.55} />
                {Number.isFinite(fVal) && (
                  <circle cx={SX(x0)} cy={probeDotCl(fVal)} r={5} fill="#10b981" stroke="#052e22" strokeWidth={2} />
                )}
                {Number.isFinite(tVal) && (
                  <circle cx={SX(x0)} cy={probeDotCl(tVal)} r={5} fill="#fbbf24" stroke="#451a03" strokeWidth={2} />
                )}
                <text x={SX(x0)} y={PT - 5} textAnchor="middle" fontSize={11} className="fill-amber-300 font-mono">
                  x₀ = {fixed(x0)}
                </text>
              </g>

              {/* drag surface for the probe */}
              <rect
                x={PL}
                y={PT}
                width={W - PL - PR}
                height={H - PT - PB}
                fill="transparent"
                style={{ cursor: 'ew-resize' }}
                onPointerDown={(e) => {
                  e.currentTarget.setPointerCapture(e.pointerId)
                  dragRef.current = true
                  setX0(toDataX(e.clientX))
                }}
                onPointerMove={(e) => {
                  if (dragRef.current) setX0(toDataX(e.clientX))
                }}
                onPointerUp={(e) => {
                  dragRef.current = false
                  e.currentTarget.releasePointerCapture(e.pointerId)
                }}
              />
            </svg>
          </div>
          <div className="border-t border-border px-4 py-2 font-mono text-[11px] text-muted-foreground">
            drag anywhere on the chart to move the x₀ probe · dashed rose lines mark the interval of convergence a ± R
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col gap-4 xl:col-span-5 2xl:col-span-4">
          {/* controls */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center gap-2">
              <Crosshair className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Controls</span>
            </div>

            <div className="min-w-[150px]">
              <Select value={cur.id} onValueChange={setFnId}>
                <SelectTrigger size="sm" className="h-9 w-full bg-card text-xs" aria-label="choose function">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LIB.map((f) => (
                    <SelectItem key={f.id} value={f.id}>
                      {f.label} <span className="text-muted-foreground">· Stewart §11.10</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">
                  Order <TeX tex="N" /> of the polynomial
                </span>
                <span className="rounded-md border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono text-xs text-amber-300">
                  N = {n}
                </span>
              </div>
              <Slider
                value={[n]}
                min={0}
                max={MAXN}
                step={1}
                onValueChange={(v) => {
                  setPlaying(false)
                  setN(v[0] ?? 0)
                }}
                aria-label="Taylor polynomial order N"
              />
              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 w-8 p-0"
                  disabled={n <= 0}
                  onClick={() => {
                    setPlaying(false)
                    setN((i) => Math.max(0, i - 1))
                  }}
                  aria-label="step order down"
                >
                  <Minus className="h-3.5 w-3.5" />
                </Button>
                <Button
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-500"
                  disabled={n >= MAXN}
                  onClick={() => {
                    setPlaying(false)
                    setN((i) => Math.min(MAXN, i + 1))
                  }}
                >
                  <Plus className="h-3.5 w-3.5" />
                  Step up
                </Button>
                <Button size="sm" variant="outline" className="bg-emerald-600 hover:bg-emerald-500" onClick={onPlayToggle}>
                  {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  {playing ? 'Pause' : 'Play'}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 w-8 p-0"
                  onClick={() => {
                    setPlaying(false)
                    setN(0)
                  }}
                  aria-label="reset order to zero"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">
                  Expansion point <TeX tex="a" /> (drag off 0 for a Taylor series)
                </span>
                <span className="rounded-md border border-teal-500/40 bg-teal-500/10 px-2 py-0.5 font-mono text-xs text-teal-300">
                  a = {fixed(a)}
                </span>
              </div>
              <Slider
                value={[a]}
                min={-2.5}
                max={2.5}
                step={0.1}
                onValueChange={(v) => setA(v[0] ?? 0)}
                aria-label="expansion point a"
              />
              {cur.singularities.length > 0 && (
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  <TeX tex={`R = ${fmtTex(R)}`} /> — the distance from <TeX tex="a" /> to the nearest singular point{' '}
                  <TeX tex={`x = ${fixed(cur.singularities[0])}`} />.
                </p>
              )}
            </div>

            <div className="mt-4">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs font-medium text-foreground">
                  <MoveHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
                  Probe <TeX tex="x_0" />
                </span>
                <span className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-xs text-foreground">
                  x₀ = {fixed(x0)}
                </span>
              </div>
              <Slider
                value={[x0]}
                min={-2.95}
                max={2.95}
                step={0.05}
                onValueChange={(v) => setX0(v[0] ?? 0)}
                aria-label="probe point x zero"
              />
            </div>
          </div>

          {/* readout */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Readout at x₀
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between gap-2 rounded-md bg-amber-500/5 px-3 py-1.5">
                <TeX tex={`T_{${n}}(${fixed(x0)})`} />
                <span className="font-mono text-amber-300">
                  <TeX tex={`\\approx ${fmtTex(tVal, 4)}`} />
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-md bg-emerald-500/5 px-3 py-1.5">
                <TeX tex={`f(${fixed(x0)})`} />
                <span className="font-mono text-emerald-400">
                  <TeX tex={`= ${fmtTex(fVal, 4)}`} />
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-md bg-rose-500/5 px-3 py-1.5">
                <TeX tex={`|R_{${n}}(x_0)|`} />
                <span className="font-mono text-rose-400">
                  <TeX tex={`\\approx ${fmtTex(err, 4)}`} />
                </span>
              </div>
            </div>

            <div className="mt-3 border-t border-border pt-3">
              <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Taylor’s inequality
              </div>
              <TeX display tex={`|R_{n}(x)| \\;\\le\\; \\frac{M\\,|x-a|^{\\,n+1}}{(n+1)!}`} className="text-sm" />
              {bound.finite ? (
                <>
                  <p className="text-[11px] leading-relaxed text-muted-foreground">
                    with{' '}
                    <TeX
                      tex={`M = \\max_{[${fixed(Math.min(a, x0))},\\,${fixed(
                        Math.max(a, x0)
                      )}]}\\,\\bigl|f^{(${n + 1})}(x)\\bigr| \\approx ${fmtTex(bound.m, 3)}`}
                    />
                    :
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed">
                    <span className="text-rose-300">
                      <TeX tex={`|R_{${n}}(x_0)| \\le ${fmtTex(bound.b, 4)}`} />
                    </span>
                    <span className="text-muted-foreground"> vs actual </span>
                    <TeX tex={`|R_{${n}}(x_0)| \\approx ${fmtTex(err, 4)}`} />
                    <span className="ml-1 text-emerald-400">
                      {Number.isFinite(err) && err <= bound.b + 1e-12 ? '— bound holds' : ''}
                    </span>
                  </p>
                </>
              ) : (
                <p className="text-[11px] leading-relaxed text-rose-400">
                  <TeX tex={`f^{(${n + 1})}`} /> is unbounded between <TeX tex="a" /> and{' '}
                  <TeX tex="x_0" /> — a singularity sits inside that interval, so Taylor’s inequality gives no
                  information there.
                </p>
              )}
            </div>

            <div className="mt-3 border-t border-border pt-3">
              <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Interval of convergence
              </div>
              <p className="text-xs">
                <TeX tex={cur.intervalTex(a)} />
              </p>
              {outside && (
                <p className="mt-1.5 rounded-md border border-rose-500/40 bg-rose-500/10 px-2.5 py-1.5 text-[11px] leading-relaxed text-rose-300">
                  x₀ lies outside the interval of convergence — no matter how large <TeX tex="N" /> gets,{' '}
                  <TeX tex="T_N(x_0)" /> will not approach <TeX tex="f(x_0)" /> here.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* series + term chips */}
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="grid gap-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              The full series
            </div>
            <TeX display tex={cur.seriesTex} className="text-sm" />
            <p className="mt-1 text-xs text-muted-foreground">
              <TeX tex={cur.intervalTex(a)} />
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Partial sum — term by term
              </div>
              <span className="rounded-md border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] text-amber-300">
                newest term highlighted
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 rounded-lg bg-muted/30 p-3">
              <TeX tex={`T_{${n}}(x) \\,=\\,`} />
              {chips.map((c, i) => {
                const newest = i === chips.length - 1
                return (
                  <span key={c.n} className="flex items-center gap-1.5">
                    {i > 0 && (
                      <span className="font-mono text-sm text-muted-foreground">{c.neg ? '−' : '+'}</span>
                    )}
                    {i === 0 && c.neg && <span className="font-mono text-sm text-muted-foreground">−</span>}
                    <motion.span
                      initial={reduced ? false : { scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 480, damping: 26 }}
                      className={
                        'inline-flex items-center rounded-md border px-2 py-1 ' +
                        (newest
                          ? 'border-amber-500/60 bg-amber-500/10 ring-1 ring-amber-500/40'
                          : 'border-border bg-card')
                      }
                    >
                      <TeX tex={c.mag} />
                    </motion.span>
                  </span>
                )
              })}
              <span className="inline-flex items-center rounded-md border border-dashed border-border px-2 py-1 text-muted-foreground">
                <TeX tex="+\,\cdots" />
              </span>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
              {Math.abs(a) < 1e-9
                ? 'Zero-coefficient terms are skipped; the amber ring tracks the term added most recently as N grows.'
                : `Expanded about a = ${fixed(a)} — coefficients are computed analytically from the derivatives of f at a.`}
            </p>
          </div>
        </div>
      </div>

      {/* try this */}
      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> press Play on{' '}
          <TeX tex="\sin x" /> and watch the amber polynomial hug the emerald wave a little further with every term.
          Then drag <TeX tex="a" /> to 2 — the series re-centers and the approximation is best near the new center.
          Switch to <TeX tex="\ln(1+x)" /> and push <TeX tex="a" /> toward −1: the radius <TeX tex="R = a+1" /> shrinks
          with it, because the singularity at <TeX tex="x = -1" /> is closing in. Finally pick{' '}
          <TeX tex="\frac{1}{1-x}" />, set <TeX tex="x_0 = -2" /> (outside the dashed interval) and crank N — the error
          band refuses to die. That divergence is exactly why power series come with a radius of convergence.
        </p>
      </div>
    </div>
  )
}
