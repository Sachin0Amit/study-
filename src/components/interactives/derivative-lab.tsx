'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Eye, EyeOff, Lightbulb, Play, RotateCcw, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
const pxToX = (px: number): number => XMIN + ((px - PL) / PW) * (XMAX - XMIN)

type Piece = readonly [number, number]

/* ------------------------------------------------------------------ */
/*  Function library (Stewart ch 1–3 catalog)                           */
/* ------------------------------------------------------------------ */

interface FnDef {
  key: string
  aria: string
  tex: string
  fTex: string
  dTex: string
  f: (x: number) => number | null
  pieces: Piece[]
  yRange: [number, number]
  a0: number
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

const FN_LIB: FnDef[] = [
  {
    key: 'square',
    aria: 'x squared',
    tex: 'x^{2}',
    fTex: 'f(x)=x^{2}',
    dTex: "f'(x)=2x",
    f: guarded((x) => x * x, [[-4, 4]]),
    pieces: [[-4, 4]],
    yRange: [-2.2, 5.2],
    a0: 1,
  },
  {
    key: 'cube',
    aria: 'x cubed',
    tex: 'x^{3}',
    fTex: 'f(x)=x^{3}',
    dTex: "f'(x)=3x^{2}",
    f: guarded((x) => x * x * x, [[-4, 4]]),
    pieces: [[-4, 4]],
    yRange: [-9, 9],
    a0: 1,
  },
  {
    key: 'sin',
    aria: 'sine of x',
    tex: '\\sin x',
    fTex: 'f(x)=\\sin x',
    dTex: "f'(x)=\\cos x",
    f: guarded(Math.sin, [[-4, 4]]),
    pieces: [[-4, 4]],
    yRange: [-1.6, 1.6],
    a0: 1,
  },
  {
    key: 'cos',
    aria: 'cosine of x',
    tex: '\\cos x',
    fTex: 'f(x)=\\cos x',
    dTex: "f'(x)=-\\sin x",
    f: guarded(Math.cos, [[-4, 4]]),
    pieces: [[-4, 4]],
    yRange: [-1.6, 1.6],
    a0: 1,
  },
  {
    key: 'tan',
    aria: 'tangent of x',
    tex: '\\tan x',
    fTex: 'f(x)=\\tan x',
    dTex: "f'(x)=\\sec^{2}x",
    f: guarded(Math.tan, [
      [-4, -HALF_PI],
      [-HALF_PI, HALF_PI],
      [HALF_PI, 4],
    ]),
    pieces: [
      [-4, -HALF_PI],
      [-HALF_PI, HALF_PI],
      [HALF_PI, 4],
    ],
    yRange: [-6, 6],
    a0: 0.6,
  },
  {
    key: 'exp',
    aria: 'e to the x',
    tex: 'e^{x}',
    fTex: 'f(x)=e^{x}',
    dTex: "f'(x)=e^{x}",
    f: guarded(Math.exp, [[-4, 4]]),
    pieces: [[-4, 4]],
    yRange: [-2.2, 5.2],
    a0: 0.5,
  },
  {
    key: 'ln',
    aria: 'natural log of x',
    tex: '\\ln x',
    fTex: 'f(x)=\\ln x',
    dTex: "f'(x)=\\frac{1}{x}",
    f: guarded(Math.log, [[0.2, 4]]),
    pieces: [[0.2, 4]],
    yRange: [-2.6, 2.6],
    a0: 1.5,
  },
  {
    key: 'recip',
    aria: 'one over x',
    tex: '\\frac{1}{x}',
    fTex: 'f(x)=\\frac{1}{x}',
    dTex: "f'(x)=-\\frac{1}{x^{2}}",
    f: guarded((x) => 1 / x, [
      [-4, -0.05],
      [0.05, 4],
    ]),
    pieces: [
      [-4, -0.05],
      [0.05, 4],
    ],
    yRange: [-6, 6],
    a0: 1,
  },
]

/* ------------------------------------------------------------------ */
/*  Math helpers                                                       */
/* ------------------------------------------------------------------ */

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

function clampA(x: number, pieces: Piece[], cur: number): number {
  const p = pieceAt(pieces, cur) ?? nearestPiece(pieces, x)
  return clamp(x, p[0] + 0.012, p[1] - 0.012)
}

/** Numeric derivative: central difference, one-sided near domain edges. */
function numDeriv(f: (x: number) => number | null, x: number): number | null {
  const e = 1e-4 * Math.max(1, Math.abs(x))
  const y0 = f(x)
  if (y0 === null) return null
  const yp = f(x + e)
  const ym = f(x - e)
  if (yp !== null && ym !== null) return (yp - ym) / (2 * e)
  if (yp !== null) return (yp - y0) / e
  if (ym !== null) return (y0 - ym) / e
  return null
}

function niceStep(span: number): number {
  const steps = [0.25, 0.5, 1, 2, 2.5, 5, 10, 20, 25, 50]
  for (const s of steps) if (span / s <= 9) return s
  return 50
}

/** Sampled curve path with breaks at domain gaps and vertical asymptotes. */
function buildPath(f: (x: number) => number | null, ylo: number, yhi: number, n = 560): string {
  const span = yhi - ylo
  const over = span * 1.25
  const toPy = (y: number): number => PT + ((yhi - y) / span) * PH
  let d = ''
  let pen = false
  let prev: number | null = null
  for (let i = 0; i <= n; i++) {
    const x = XMIN + ((XMAX - XMIN) * i) / n
    const y = f(x)
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

function fmt(v: number | null | undefined, d = 4): string {
  if (v === null || v === undefined || !Number.isFinite(v)) return '—'
  const av = Math.abs(v)
  if (av >= 1e5 || (av > 0 && av < 1e-4)) return v.toExponential(2)
  return v.toFixed(d)
}

function fc(v: number, d = 3): string {
  return String(Number(v.toFixed(d)))
}

/* ------------------------------------------------------------------ */
/*  Derivative rules reference chips                                   */
/* ------------------------------------------------------------------ */

const RULES: { name: string; tex: string }[] = [
  { name: 'Power rule', tex: '\\frac{d}{dx}\\,x^{n} = n x^{n-1}' },
  { name: 'Constant multiple', tex: "(cf)' = c\\,f'" },
  { name: 'Sum rule', tex: "(f+g)' = f' + g'" },
  { name: 'Product rule', tex: "(fg)' = f'g + fg'" },
  { name: 'Quotient rule', tex: "\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^{2}}" },
  { name: 'Chain rule', tex: '\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}' },
  { name: 'Exponential', tex: "\\left(e^{x}\\right)' = e^{x}" },
  { name: 'Natural log', tex: "(\\ln x)' = \\frac{1}{x}" },
  { name: 'Sine and cosine', tex: "(\\sin x)' = \\cos x,\\;\\;(\\cos x)' = -\\sin x" },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DerivativeLab() {
  const reduce = useReducedMotion()
  const [fnKey, setFnKey] = useState('square')
  const [a, setA] = useState(1)
  const [h, setH] = useState(1)
  const [showDeriv, setShowDeriv] = useState(false)
  const [hoverX, setHoverX] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)

  const svgRef = useRef<SVGSVGElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const dragging = useRef(false)

  const def = useMemo(() => FN_LIB.find((f) => f.key === fnKey) ?? FN_LIB[0], [fnKey])

  // function switch: reset the point and keep h inside the new domain
  const [prevDef, setPrevDef] = useState(def)
  if (prevDef !== def) {
    setPrevDef(def)
    setA(def.a0)
    setHoverX(null)
    setH((cur) => {
      const hi = (pieceAt(def.pieces, def.a0) ?? nearestPiece(def.pieces, def.a0))[1]
      return def.f(def.a0 + cur) === null ? Math.max(0.05, Math.min(cur, hi - 0.02 - def.a0)) : cur
    })
  }

  const [ylo, yhi] = def.yRange
  const yToPx = (y: number): number => PT + ((yhi - y) / (yhi - ylo)) * PH

  const fa = def.f(a)
  const m = numDeriv(def.f, a)
  const fh = def.f(a + h)
  const secSlope = fa !== null && fh !== null ? (fh - fa) / h : null

  const curveD = useMemo(() => buildPath(def.f, ylo, yhi), [def, ylo, yhi])
  const derivD = useMemo(
    () => (showDeriv ? buildPath((x) => numDeriv(def.f, x), ylo, yhi) : ''),
    [showDeriv, def, ylo, yhi]
  )

  const step = niceStep(yhi - ylo)
  const yTicks: number[] = []
  for (let t = Math.ceil(ylo / step) * step; t <= yhi + 1e-9; t += step) {
    yTicks.push(Math.round(t * 1e6) / 1e6)
  }

  /* ---------------- animation of h toward 0 ---------------- */

  const stopAnim = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    setAnimating(false)
  }

  useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    },
    []
  )

  const animateH = () => {
    stopAnim()
    const from = h > 0.06 ? h : 2
    const to = 0.05
    if (reduce) {
      setH(to)
      return
    }
    setAnimating(true)
    const t0 = performance.now()
    const dur = 2400
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / dur)
      const e = 1 - (1 - t) ** 3
      setH(Math.max(to, from * (to / from) ** e))
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        rafRef.current = null
        setAnimating(false)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  /* ---------------- pointer / keyboard interaction ---------------- */

  const clientXToMath = (clientX: number): number | null => {
    const svg = svgRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    if (rect.width === 0) return null
    return pxToX(((clientX - rect.left) / rect.width) * W)
  }

  const moveA = (clientX: number) => {
    const x = clientXToMath(clientX)
    if (x === null) return
    setA(Math.round(clampA(x, def.pieces, a) * 1000) / 1000)
  }

  const onHandlePointerDown = (e: React.PointerEvent<SVGGElement>) => {
    e.preventDefault()
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    moveA(e.clientX)
  }
  const onHandlePointerMove = (e: React.PointerEvent<SVGGElement>) => {
    if (dragging.current) moveA(e.clientX)
  }
  const onHandlePointerUp = () => {
    dragging.current = false
  }

  const onHandleKeyDown = (e: React.KeyboardEvent) => {
    const stepSize = e.shiftKey ? 0.25 : 0.05
    let next: number | null = null
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = a - stepSize
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = a + stepSize
    if (next === null) return
    e.preventDefault()
    setA(Math.round(clampA(next, def.pieces, a) * 1000) / 1000)
  }

  const onSvgPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (dragging.current || !showDeriv) return
    const x = clientXToMath(e.clientX)
    setHoverX(x !== null && x >= XMIN && x <= XMAX ? Math.round(x * 100) / 100 : null)
  }

  const hoverFa = hoverX !== null ? def.f(hoverX) : null
  const hoverDa = hoverX !== null ? numDeriv(def.f, hoverX) : null

  /* ---------------- line geometry ---------------- */

  const tangentXs: [number, number][] =
    m !== null && fa !== null
      ? [
          [XMIN, fa + m * (XMIN - a)],
          [XMAX, fa + m * (XMAX - a)],
        ]
      : []
  const secantXs: [number, number][] =
    secSlope !== null && fa !== null
      ? [
          [XMIN, fa + secSlope * (XMIN - a)],
          [XMAX, fa + secSlope * (XMAX - a)],
        ]
      : []

  const stat = (
    key: string,
    label: string,
    value: string,
    sub: string,
    tone: 'amber' | 'emerald' | 'rose'
  ) => (
    <div
      key={key}
      className={`rounded-xl border p-3 ${
        tone === 'amber'
          ? 'border-amber-500/30 bg-amber-500/5'
          : tone === 'emerald'
            ? 'border-emerald-500/30 bg-emerald-500/5'
            : 'border-rose-500/30 bg-rose-500/5'
      }`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p
        className={`mt-1 truncate font-mono text-lg font-bold ${
          tone === 'amber' ? 'text-amber-300' : tone === 'emerald' ? 'text-emerald-300' : 'text-rose-300'
        }`}
      >
        {value}
      </p>
      <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">{sub}</p>
    </div>
  )

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <TrendingUp className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Derivative Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Stewart Ch 2–4: drag the point, shrink the secant and watch it swing into the tangent — the
            difference quotient becoming the derivative, live.
          </p>
        </div>
      </div>

      {/* function library */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Function
        </span>
        {FN_LIB.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFnKey(f.key)}
            aria-pressed={fnKey === f.key}
            aria-label={`Plot ${f.aria}`}
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

      {/* formula chips */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200">
          <TeX tex={def.fTex} />
        </span>
        <span className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 text-xs text-teal-200">
          <TeX tex={def.dTex} />
        </span>
        <span className="text-[11px] text-muted-foreground">
          drag the amber point, or focus it and use the arrow keys (hold Shift for bigger steps)
        </span>
      </div>

      {/* plot */}
      <div className="mt-3 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="h-0.5 w-4 rounded bg-emerald-400" /> f
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="h-0.5 w-4 rounded bg-amber-400" /> tangent at a
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="h-0.5 w-4 rounded border-t-2 border-dashed border-rose-400" /> secant (a, a+h)
          </span>
          {showDeriv && (
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-0.5 w-4 rounded border-t-2 border-dashed border-teal-400" /> f′ overlay
            </span>
          )}
          <Button
            size="sm"
            variant="outline"
            aria-pressed={showDeriv}
            onClick={() => {
              setShowDeriv((v) => !v)
              setHoverX(null)
            }}
            className={`ml-auto h-8 ${
              showDeriv
                ? 'border-teal-500/60 bg-teal-500/15 text-teal-300 hover:bg-teal-500/25'
                : ''
            }`}
          >
            {showDeriv ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            {showDeriv ? 'Hide f′(x)' : 'Show f′(x)'}
          </Button>
        </div>

        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full touch-none select-none"
          role="img"
          aria-label={`Plot of ${def.aria} with a tangent line at the draggable point a and a secant line through a and a plus h. Use the controls below the plot.`}
          onPointerMove={onSvgPointerMove}
          onPointerLeave={() => setHoverX(null)}
        >
          <defs>
            <clipPath id="deriv-plot-clip">
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
                {gy === 0 ? '' : fc(gy, 2)}
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
          <text
            x={PL + PW - 4}
            y={yToPx(0) - 7}
            textAnchor="end"
            fontSize={12}
            className="fill-zinc-400 italic"
          >
            x
          </text>
          <text x={xToPx(0) + 7} y={PT + 12} fontSize={12} className="fill-zinc-400 italic">
            y
          </text>

          <g clipPath="url(#deriv-plot-clip)">
            {/* derivative overlay */}
            {showDeriv && derivD && (
              <path
                d={derivD}
                className="stroke-teal-400"
                strokeWidth={2}
                strokeDasharray="7 5"
                fill="none"
                strokeLinecap="round"
              />
            )}

            {/* function curve */}
            <motion.path
              key={`curve-${fnKey}`}
              d={curveD}
              className="stroke-emerald-400"
              strokeWidth={2.5}
              fill="none"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={reduce ? { duration: 0 } : { duration: 0.7, ease: 'easeOut' }}
            />

            {/* hover guide + paired points */}
            {showDeriv && hoverX !== null && (
              <g>
                <line
                  x1={xToPx(hoverX)}
                  y1={PT}
                  x2={xToPx(hoverX)}
                  y2={PT + PH}
                  className="stroke-zinc-400/60"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
                {hoverFa !== null && (
                  <circle cx={xToPx(hoverX)} cy={yToPx(hoverFa)} r={4} className="fill-emerald-300" />
                )}
                {hoverDa !== null && (
                  <circle cx={xToPx(hoverX)} cy={yToPx(hoverDa)} r={4} className="fill-teal-300" />
                )}
              </g>
            )}

            {/* secant line */}
            {secantXs.length === 2 && (
              <line
                x1={xToPx(secantXs[0][0])}
                y1={yToPx(secantXs[0][1])}
                x2={xToPx(secantXs[1][0])}
                y2={yToPx(secantXs[1][1])}
                className="stroke-rose-400"
                strokeWidth={2}
                strokeDasharray="8 5"
              />
            )}

            {/* tangent line */}
            {tangentXs.length === 2 && (
              <motion.line
                key={`tan-${fnKey}`}
                x1={xToPx(tangentXs[0][0])}
                y1={yToPx(tangentXs[0][1])}
                x2={xToPx(tangentXs[1][0])}
                y2={yToPx(tangentXs[1][1])}
                className="stroke-amber-400"
                strokeWidth={2.5}
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={reduce ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }}
              />
            )}

            {/* second secant point (a+h, f(a+h)) */}
            {fh !== null && (
              <g>
                <circle
                  cx={xToPx(a + h)}
                  cy={yToPx(fh)}
                  r={7}
                  className="fill-rose-400/20 stroke-rose-400"
                  strokeWidth={1.5}
                />
                <circle cx={xToPx(a + h)} cy={yToPx(fh)} r={3} className="fill-rose-300" />
              </g>
            )}
          </g>

          {/* draggable point a */}
          {fa !== null && (
            <g
              transform={`translate(${xToPx(a)},${yToPx(fa)})`}
              tabIndex={0}
              role="slider"
              aria-label="Point a on the curve. Use left and right arrow keys to move it; hold Shift for larger steps."
              aria-valuemin={XMIN}
              aria-valuemax={XMAX}
              aria-valuenow={Number(a.toFixed(2))}
              aria-valuetext={`a = ${fc(a, 2)}, f of a = ${fmt(fa)}, tangent slope = ${fmt(m)}`}
              onKeyDown={onHandleKeyDown}
              onPointerDown={onHandlePointerDown}
              onPointerMove={onHandlePointerMove}
              onPointerUp={onHandlePointerUp}
              onPointerCancel={onHandlePointerUp}
              className="group cursor-grab outline-none active:cursor-grabbing"
            >
              <circle r={20} className="fill-transparent" />
              <circle
                r={13}
                strokeWidth={2}
                className="fill-transparent stroke-amber-400 opacity-0 transition-opacity group-focus-visible:opacity-80"
              />
              <circle
                r={9}
                className="fill-amber-400/25 stroke-amber-400"
                strokeWidth={1.5}
              />
              <circle r={4.5} className="fill-amber-300" />
              <text
                x={14}
                y={-12}
                fontSize={13}
                className="fill-amber-300 font-mono font-bold"
              >
                a
              </text>
            </g>
          )}
        </svg>

        {/* hover readouts */}
        {showDeriv && hoverX !== null && (
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-200">
              <TeX tex={`f(${fc(hoverX, 2)}) = ${fmt(hoverFa)}`} />
            </span>
            <span className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 font-mono text-[11px] text-teal-200">
              <TeX tex={`f'(${fc(hoverX, 2)}) = ${fmt(hoverDa)}`} />
            </span>
            <span className="text-[11px] text-muted-foreground">
              f′ is zero exactly where f peaks or bottoms — sweep across a hilltop
            </span>
          </div>
        )}
      </div>

      {/* readouts */}
      <motion.div
        key={`stats-${fnKey}`}
        initial={reduce ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.3 }}
        className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4"
      >
        {stat('a', 'a', fc(a, 3), 'point of tangency', 'amber')}
        {stat('fa', 'f(a)', fmt(fa), 'height of the curve', 'emerald')}
        {stat('m', 'f′(a) — tangent', fmt(m), 'instantaneous rate of change', 'amber')}
        {stat('sec', 'secant slope', fmt(secSlope), `through a and a + h (h = ${fc(h, 2)})`, 'rose')}
      </motion.div>

      {/* secant controls */}
      <div className="mt-4 rounded-xl border border-rose-500/30 bg-rose-500/5 p-3 sm:p-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="shrink-0 text-xs font-medium text-muted-foreground">Secant step h</span>
          <Slider
            min={0.05}
            max={2}
            step={0.05}
            value={[h]}
            onValueChange={(v) => {
              stopAnim()
              setH(v[0] ?? 1)
            }}
            disabled={animating}
            className="min-w-[140px] flex-1"
            aria-label="Secant step h"
          />
          <span className="w-16 shrink-0 font-mono text-xs text-foreground">h = {h.toFixed(2)}</span>
          <Button size="sm" onClick={animateH} disabled={animating}>
            <Play className="mr-1 h-3.5 w-3.5" />
            Animate h → 0
          </Button>
          <Button
            size="sm"
            variant="ghost"
            aria-label="Reset point a and step h"
            onClick={() => {
              stopAnim()
              setA(def.a0)
              setH(1)
            }}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* the limit panel */}
        <div className="mt-3 rounded-lg border border-amber-500/40 bg-amber-500/5 px-3 py-2.5">
          {secSlope !== null ? (
            <TeX
              display
              tex={`\\frac{f(${fc(a + h, 2)})-f(${fc(a, 2)})}{${fc(h, 2)}} = ${fmt(secSlope)}`}
            />
          ) : (
            <p className="text-center text-xs text-muted-foreground">
              a + h falls outside the domain of f — shrink h to bring the secant back.
            </p>
          )}
          <TeX
            display
            tex={`\\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h} = f'(a) = ${fmt(m)}`}
          />
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
            <span>
              secant slope (h = {h.toFixed(3)}):{' '}
              <b className="font-mono text-rose-300">{fmt(secSlope)}</b>
            </span>
            <span>
              tangent slope f′(a): <b className="font-mono text-amber-300">{fmt(m)}</b>
            </span>
            {secSlope !== null && m !== null && (
              <span>
                gap: <b className="font-mono text-foreground">{fmt(Math.abs(secSlope - m))}</b>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* derivative rules */}
      <div className="mt-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Differentiation rules (Stewart Ch 3)
        </p>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {RULES.map((r, i) => (
            <motion.div
              key={r.name}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.25, delay: Math.min(0.3, i * 0.03) }
              }
              className="rounded-lg border border-border bg-muted/20 px-3 py-2 transition-colors hover:border-emerald-500/40"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {r.name}
              </p>
              <div className="mt-1 overflow-x-auto text-sm">
                <TeX tex={r.tex} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          with <span className="font-medium text-foreground">x²</span> at a = 1, the secant slope is 3
          and the tangent slope is 2 — the classic Chapter 2 example. Hit{' '}
          <span className="font-medium text-foreground">Animate h → 0</span> and watch the rose line
          rotate onto the amber one. Then load <span className="font-medium text-foreground">sin x</span>,
          switch on the f′ overlay and sweep across a peak: f′ crosses zero exactly where f tops out
          (Ch 4.3).
        </span>
      </div>
    </div>
  )
}
