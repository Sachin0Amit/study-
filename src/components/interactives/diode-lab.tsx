'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Activity, Lightbulb, Pause, Play, RotateCcw, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Geometry + math helpers                                            */
/* ------------------------------------------------------------------ */

const W = 620
const H = 430
const PL = 56
const PR = 14
const PT = 14
const PB = 32
const PW = W - PL - PR
const PH = H - PT - PB

/** Soft reverse-breakdown scale for the Zener model. */
const ZENER_IZR = 1e-8
const ZENER_KNEE = 0.05
const MAINS_F = 50

type Mode = 'forward' | 'reverse' | 'zener' | 'halfwave' | 'bridge'

const MODES: { key: Mode; label: string; aria: string }[] = [
  { key: 'forward', label: 'Forward bias', aria: 'Forward bias circuit' },
  { key: 'reverse', label: 'Reverse bias', aria: 'Reverse bias circuit' },
  { key: 'zener', label: 'Zener shunt', aria: 'Zener shunt regulator circuit' },
  { key: 'halfwave', label: 'Half-wave', aria: 'Half-wave rectifier circuit' },
  { key: 'bridge', label: 'Bridge + C', aria: 'Bridge rectifier with smoothing capacitor' },
]

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v))
}

/** Bisection root finder; assumes f(lo) and f(hi) have opposite signs. */
function bisect(f: (x: number) => number, lo: number, hi: number): number {
  let flo = f(lo)
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2
    const fm = f(mid)
    if (flo * fm <= 0) {
      hi = mid
    } else {
      lo = mid
      flo = fm
    }
  }
  return (lo + hi) / 2
}

function niceTicks(lo: number, hi: number, target = 6): number[] {
  const span = hi - lo
  const raw = span / target
  const mag = 10 ** Math.floor(Math.log10(raw))
  const norm = raw / mag
  const stepMul = norm < 1.5 ? 1 : norm < 2.2 ? 2 : norm < 3.5 ? 2.5 : norm < 7.5 ? 5 : 10
  const step = stepMul * mag
  const out: number[] = []
  for (let t = Math.ceil(lo / step) * step; t <= hi + 1e-12; t += step) {
    out.push(Math.abs(t) < step * 1e-6 ? 0 : Math.round(t / step) * step)
  }
  return out
}

function siFmt(v: number, unit: string, digits = 2): string {
  const a = Math.abs(v)
  if (a < 1e-13) return `0 ${unit}`
  const tbl: [number, string][] = [
    [1e-12, 'p'],
    [1e-9, 'n'],
    [1e-6, 'µ'],
    [1e-3, 'm'],
    [1, ''],
    [1e3, 'k'],
  ]
  for (const [s, p] of tbl) {
    if (a < s * 1e3 || s === 1e3) return `${(v / s).toFixed(digits)} ${p}${unit}`
  }
  return `${v.toExponential(2)} ${unit}`
}

function texA(v: number): string {
  if (!Number.isFinite(v) || v === 0) return '0\\,\\mathrm{A}'
  const [m, ex] = v.toExponential(2).split('e')
  return `${m}\\times10^{${Number(ex)}}\\,\\mathrm{A}`
}

function fc(v: number, d = 2): string {
  return String(Number(v.toFixed(d)))
}

/** Sampled curve path with breaks outside the (generous) y window. */
function buildPath(
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  f: (x: number) => number,
  n = 480
): string {
  const toPx = (x: number) => PL + ((x - xMin) / (xMax - xMin)) * PW
  const toPy = (y: number) => PT + ((yMax - y) / (yMax - yMin)) * PH
  const span = yMax - yMin
  let d = ''
  let pen = false
  let prev: number | null = null
  for (let i = 0; i <= n; i++) {
    const x = xMin + ((xMax - xMin) * i) / n
    const y = f(x)
    if (!Number.isFinite(y) || y > yMax + span || y < yMin - span) {
      pen = false
      prev = null
      continue
    }
    if (prev !== null && Math.abs(y - prev) > span) pen = false
    d += `${pen ? 'L' : 'M'}${toPx(x).toFixed(2)},${toPy(y).toFixed(2)}`
    pen = true
    prev = y
  }
  return d
}

/* ------------------------------------------------------------------ */
/*  Circuit-drawing helpers                                             */
/* ------------------------------------------------------------------ */

function zigPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy)
  if (len === 0) return ''
  const ux = dx / len
  const uy = dy / len
  const px = -uy
  const py = ux
  const lead = Math.min(8, len * 0.12)
  const zl = len - 2 * lead
  const n = 6
  let d = `M${x1},${y1} L${x1 + ux * lead},${y1 + uy * lead}`
  for (let i = 0; i < n; i++) {
    const t0 = lead + (zl * i) / n
    const t1 = lead + (zl * (i + 0.5)) / n
    const t2 = lead + (zl * (i + 1)) / n
    const amp = i % 2 === 0 ? 4.5 : -4.5
    d += ` L${(x1 + ux * t1 + px * amp).toFixed(1)},${(y1 + uy * t1 + py * amp).toFixed(1)} L${(x1 + ux * t2).toFixed(1)},${(y1 + uy * t2).toFixed(1)}`
  }
  d += ` L${x2},${y2}`
  return d
}

/** Diode symbol centred at (x, y); dir = direction of conventional current. */
function DiodeSym({
  x,
  y,
  dir,
  zener = false,
  highlight = false,
}: {
  x: number
  y: number
  dir: 'down' | 'up' | 'left' | 'right'
  zener?: boolean
  highlight?: boolean
}) {
  const vec =
    dir === 'down' ? [0, 1] : dir === 'up' ? [0, -1] : dir === 'left' ? [-1, 0] : [1, 0]
  const [ux, uy] = vec
  const px = -uy
  const py = ux
  const half = 11
  const bar = 5
  // triangle apex points along current flow (anode -> cathode)
  const ax = x + ux * 6
  const ay = y + uy * 6
  const bx = x - ux * 6 + px * half
  const by = y - uy * 6 + py * half
  const cx = x - ux * 6 - px * half
  const cy = y - uy * 6 - py * half
  const barX1 = ax + px * half
  const barY1 = ay + py * half
  const barX2 = ax - px * half
  const barY2 = ay - py * half
  const stroke = highlight ? 'stroke-emerald-400' : 'stroke-zinc-300'
  const fill = highlight ? 'fill-emerald-400/30' : 'fill-zinc-400/25'
  return (
    <g className={stroke} strokeWidth={2} fill="none" strokeLinejoin="round">
      <polygon points={`${ax},${ay} ${bx},${by} ${cx},${cy}`} className={fill} strokeWidth={1.5} />
      <line x1={barX1} y1={barY1} x2={barX2} y2={barY2} />
      {zener && (
        <>
          <line
            x1={barX1 + ux * bar - px * 4}
            y1={barY1 + uy * bar - py * 4}
            x2={barX1 + ux * bar + px * 4}
            y2={barY1 + uy * bar + py * 4}
          />
          <line
            x1={barX2 - ux * bar - px * 4}
            y1={barY2 - uy * bar - py * 4}
            x2={barX2 - ux * bar + px * 4}
            y2={barY2 - uy * bar + py * 4}
          />
        </>
      )}
    </g>
  )
}

function AcSource({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={18} className="stroke-zinc-300" strokeWidth={2} fill="none" />
      <path
        d={`M${x - 10},${y} q5,-8 10,0 q5,8 10,0`}
        className="stroke-amber-300"
        strokeWidth={1.8}
        fill="none"
      />
      <text x={x - 26} y={y - 22} fontSize={11} className="fill-zinc-400 font-mono">
        {label}
      </text>
    </g>
  )
}

function DcSource({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={18} className="stroke-zinc-300" strokeWidth={2} fill="none" />
      <line x1={x - 9} y1={y - 4} x2={x + 9} y2={y - 4} className="stroke-zinc-300" strokeWidth={2.5} />
      <line x1={x - 5} y1={y + 4} x2={x + 5} y2={y + 4} className="stroke-zinc-300" strokeWidth={2.5} />
      <text x={x + 3} y={y - 26} fontSize={11} className="fill-zinc-400 font-mono">
        {label}
      </text>
      <text x={x + 14} y={y - 2} fontSize={12} className="fill-emerald-300 font-mono">
        +
      </text>
    </g>
  )
}

function GndSym({ x, y }: { x: number; y: number }) {
  return (
    <g className="stroke-zinc-500" strokeWidth={2}>
      <line x1={x - 10} y1={y} x2={x + 10} y2={y} />
      <line x1={x - 6} y1={y + 5} x2={x + 6} y2={y + 5} />
      <line x1={x - 2} y1={y + 10} x2={x + 2} y2={y + 10} />
    </g>
  )
}

function Wire({ d, dim = false }: { d: string; dim?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      strokeWidth={2}
      className={dim ? 'stroke-zinc-600/50' : 'stroke-zinc-400/80'}
      strokeLinejoin="round"
    />
  )
}

/** Animated dots travelling along a polyline (px coordinates). */
function PathDots({
  pts,
  phase,
  n = 6,
  r = 3.2,
  opacity = 1,
  className = 'fill-emerald-300',
}: {
  pts: [number, number][]
  phase: number
  n?: number
  r?: number
  opacity?: number
  className?: string
}) {
  const lens: number[] = [0]
  let total = 0
  for (let i = 1; i < pts.length; i++) {
    total += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])
    lens.push(total)
  }
  if (total === 0) return null
  const dots: [number, number][] = []
  for (let k = 0; k < n; k++) {
    const u = (((phase + k / n) % 1) + 1) % 1
    const d = u * total
    let i = 1
    while (i < lens.length - 1 && lens[i] < d) i++
    const seg = lens[i] - lens[i - 1] || 1
    const f = (d - lens[i - 1]) / seg
    dots.push([
      pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * f,
      pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * f,
    ])
  }
  return (
    <g className="pointer-events-none" opacity={opacity}>
      {dots.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={r} className={className} />
      ))}
    </g>
  )
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

interface PresetDef {
  key: string
  label: string
  apply: {
    mode: Mode
    isExp: number
    nvt: number
    vsrc: number
    rLoad: number
    vz: number
    capUf: number
  }
}

const PRESETS: PresetDef[] = [
  {
    key: 'silicon',
    label: 'Silicon knee',
    apply: { mode: 'forward', isExp: -14, nvt: 26, vsrc: 2, rLoad: 470, vz: 12, capUf: 470 },
  },
  {
    key: 'zener12',
    label: 'Zener 12 V shunt regulator',
    apply: { mode: 'zener', isExp: -14, nvt: 26, vsrc: 18, rLoad: 470, vz: 12, capUf: 470 },
  },
  {
    key: 'bridge',
    label: 'Bridge + smoothing',
    apply: { mode: 'bridge', isExp: -14, nvt: 26, vsrc: 15, rLoad: 1000, vz: 12, capUf: 470 },
  },
  {
    key: 'badfilter',
    label: 'Bad filter (small C)',
    apply: { mode: 'bridge', isExp: -14, nvt: 26, vsrc: 15, rLoad: 1000, vz: 12, capUf: 22 },
  },
]

/* ------------------------------------------------------------------ */
/*  Device models (module level so memoization is stable)              */
/* ------------------------------------------------------------------ */

function shockley(v: number, is: number, nvtV: number): number {
  return is * (Math.exp(clamp(v / nvtV, -45, 45)) - 1)
}

function zenerIV(v: number, is: number, nvtV: number, vz: number): number {
  return v < -vz
    ? shockley(v, is, nvtV) - ZENER_IZR * (Math.exp(-(v + vz) / ZENER_KNEE) - 1)
    : shockley(v, is, nvtV)
}

interface OpPoint {
  vd: number
  id: number
}

function solveOp(mode: Mode, is: number, nvtV: number, vsrc: number, rLoad: number, vz: number): OpPoint {
  if (mode === 'zener') {
    if (vsrc <= 0) return { vd: 0, id: 0 }
    const f = (v: number) => zenerIV(v, is, nvtV, vz) + (vsrc + v) / rLoad
    const lo = -vsrc
    const vd = f(lo) <= 0 ? bisect(f, lo, 0) : lo
    return { vd, id: zenerIV(vd, is, nvtV, vz) }
  }
  if (mode === 'reverse') {
    const f = (v: number) => shockley(v, is, nvtV) - (vsrc - v) / rLoad
    return { vd: bisect(f, vsrc, 0), id: 0 }
  }
  // forward + rectifier modes: source = positive peak
  const f = (v: number) => shockley(v, is, nvtV) - (vsrc - v) / rLoad
  const vd = bisect(f, 0, vsrc)
  return { vd, id: shockley(vd, is, nvtV) }
}

/** Numeric rectifier simulation over two mains cycles, plus ripple statistics. */
function simulateRectifier(
  mode: Mode,
  capUf: number,
  rLoad: number,
  vdEff: number,
  vsrc: number
): { src: number[]; out: number[]; vpp: number; vavg: number; ripple: number } {
  const N = 720
  const cycles = 2
  const dt = cycles / MAINS_F / N
  const C = capUf * 1e-6
  const tau = rLoad * C
  const drop = mode === 'bridge' ? 2 * vdEff : vdEff
  let vc = 0
  const src: number[] = []
  const out: number[] = []
  for (let i = 0; i <= N; i++) {
    const t = i * dt
    const s = vsrc * Math.sin(2 * Math.PI * MAINS_F * t)
    const raw = mode === 'bridge' ? Math.abs(s) : s
    if (raw - drop > vc) {
      vc = raw - drop
    } else if (C > 0) {
      vc *= Math.exp(-dt / tau)
    } else {
      vc = 0
    }
    src.push(s)
    out.push(Math.max(0, vc))
  }
  // statistics over the last cycle
  const half = N / 2
  let vavg = 0
  let vmax = -Infinity
  let vmin = Infinity
  let acc = 0
  for (let i = half; i <= N; i++) {
    vavg += out[i]
    acc += out[i] * out[i]
    vmax = Math.max(vmax, out[i])
    vmin = Math.min(vmin, out[i])
  }
  const m = N - half + 1
  vavg /= m
  acc /= m
  const vrmsR = Math.sqrt(Math.max(0, acc - vavg * vavg))
  return { src, out, vpp: vmax - vmin, vavg, ripple: vavg > 1e-9 ? vrmsR / vavg : 0 }
}

export default function DiodeLab() {
  const reduce = useReducedMotion()
  const [mode, setMode] = useState<Mode>('forward')
  const [isExp, setIsExp] = useState(-14)
  const [nvt, setNvt] = useState(26)
  const [vsrc, setVsrc] = useState(2)
  const [rLoad, setRLoad] = useState(470)
  const [vz, setVz] = useState(12)
  const [capUf, setCapUf] = useState(470)
  const [playing, setPlaying] = useState(true)
  const [phase, setPhase] = useState(0)

  const svgRef = useRef<SVGSVGElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const dragRef = useRef<'vsrc' | 'r' | null>(null)

  const is = 10 ** isExp
  const nvtV = nvt / 1000
  const isRect = mode === 'halfwave' || mode === 'bridge'

  /* ---------------- mode switch keeps the source sensible ------------- */
  const [prevMode, setPrevMode] = useState(mode)
  if (prevMode !== mode) {
    setPrevMode(mode)
    if (mode === 'reverse' && vsrc > 0) setVsrc(-3)
    else if (mode !== 'reverse' && vsrc < 0) setVsrc(Math.abs(vsrc) || 2)
    else if (mode === 'forward' && vsrc > 3.5) setVsrc(2)
    else if (isRect && vsrc < 1) setVsrc(12)
    else if (mode === 'zener' && vsrc <= vz + 1) setVsrc(vz + 6)
  }

  /* ---------------- animation loop ------------------------------------ */
  useEffect(() => {
    if (!playing || reduce) return
    const t0 = performance.now()
    const tick = (now: number) => {
      setPhase(((now - t0) / 3400) % 1)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [playing, reduce])

  useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    },
    []
  )

  const effPhase = playing && !reduce ? phase : 0.125
  const sinPh = Math.sin(2 * Math.PI * effPhase)

  /* ---------------- device + operating point -------------------------- */

  const op = solveOp(mode, is, nvtV, vsrc, rLoad, vz)

  // per-diode drop at the conduction peak, for the scope simulation
  const vdEff = isRect
    ? mode === 'halfwave'
      ? op.vd
      : (() => {
          const f = (v: number) => shockley(v, is, nvtV) - (vsrc - 2 * v) / rLoad
          return bisect(f, 0, vsrc / 2)
        })()
    : 0.7

  /* ---------------- plot ranges --------------------------------------- */

  let xMin: number
  let xMax: number
  let yMin: number
  let yMax: number
  if (mode === 'reverse') {
    const m = Math.max(3 * is, 1e-12)
    xMin = Math.min(vsrc - 0.6, -3.6)
    xMax = 0.8
    yMin = -m
    yMax = m
  } else if (mode === 'zener') {
    const mag = Math.max(vsrc, vz + 1.5)
    xMin = -(vz + 4)
    xMax = 1.2
    yMin = -1.3 * (mag / rLoad)
    yMax = Math.abs(yMin) * 0.22
  } else {
    const yTop = Math.max(0.006, 1.3 * (vsrc / rLoad))
    xMin = mode === 'forward' ? -1.2 : -1.6
    xMax = mode === 'forward' ? 3.6 : 1.9
    yMin = -yTop * 0.06
    yMax = yTop
  }

  const xToPx = (x: number) => PL + ((x - xMin) / (xMax - xMin)) * PW
  const yToPx = (y: number) => PT + ((yMax - y) / (yMax - yMin)) * PH

  const curveD = buildPath(
    xMin,
    xMax,
    yMin,
    yMax,
    mode === 'zener' ? (v: number) => zenerIV(v, is, nvtV, vz) : (v: number) => shockley(v, is, nvtV)
  )

  const xTicks = niceTicks(xMin, xMax, 8)
  const yTicks = niceTicks(yMin, yMax, 6)
  const yTickLabel = (v: number) =>
    mode === 'reverse' ? siFmt(v, 'A', 0) : siFmt(v, 'A', v >= 0.001 ? 0 : 2)

  // load line endpoints (math space)
  const ll =
    mode === 'zener'
      ? { vo: -vsrc, io: 0, vs: 0, is0: -vsrc / rLoad }
      : { vo: vsrc, io: 0, vs: 0, is0: vsrc / rLoad }

  // instantaneous operating point while the AC source sweeps (rectifier modes)
  let instOp: { vd: number; id: number } | null = null
  if (isRect) {
    const vi = vsrc * sinPh
    if (vi > 0.05) {
      const f = (v: number) => shockley(v, is, nvtV) - (vi - v) / rLoad
      const vd = bisect(f, 0, Math.min(vi, xMax))
      instOp = { vd, id: shockley(vd, is, nvtV) }
    }
  }

  /* ---------------- rectifier scope simulation ------------------------ */

  const sim = isRect ? simulateRectifier(mode, capUf, rLoad, vdEff, vsrc) : null

  /* ---------------- pointer interaction on the plot ------------------- */

  const clientToMath = (clientX: number, clientY: number): { mx: number; my: number } | null => {
    const svg = svgRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return null
    const px = ((clientX - rect.left) / rect.width) * W
    const py = ((clientY - rect.top) / rect.height) * H
    return {
      mx: xMin + ((px - PL) / PW) * (xMax - xMin),
      my: yMax - ((py - PT) / PH) * (yMax - yMin),
    }
  }

  const onHandleMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return
    const p = clientToMath(e.clientX, e.clientY)
    if (!p) return
    if (dragRef.current === 'vsrc') {
      const lo = mode === 'reverse' ? -3.5 : mode === 'zener' ? 5 : mode === 'forward' ? 0.1 : 1
      const hi = mode === 'reverse' ? -0.1 : mode === 'zener' ? 24 : mode === 'forward' ? 3.5 : 24
      setVsrc(Math.round(clamp(p.mx, lo, hi) * 20) / 20)
    } else {
      const sgn = mode === 'zener' ? -1 : 1
      const iMax = Math.abs(vsrc) / 50
      const iMin = Math.abs(vsrc) / 2000
      const i = clamp(Math.abs(p.my), iMin, iMax) * sgn
      setRLoad(Math.round(vsrc / i))
    }
  }

  const beginDrag = (which: 'vsrc' | 'r') => (e: React.PointerEvent<SVGGElement>) => {
    e.preventDefault()
    dragRef.current = which
    e.currentTarget.setPointerCapture(e.pointerId)
    onHandleMove(e)
  }
  const endDrag = () => {
    dragRef.current = null
  }

  const vsrcHandleKey = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 0.25 : 0.05
    let next: number | null = null
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = vsrc - step
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = vsrc + step
    if (next === null) return
    e.preventDefault()
    const lo = mode === 'reverse' ? -3.5 : mode === 'zener' ? 5 : mode === 'forward' ? 0.1 : 1
    const hi = mode === 'reverse' ? -0.1 : mode === 'zener' ? 24 : mode === 'forward' ? 3.5 : 24
    setVsrc(Math.round(clamp(next, lo, hi) * 20) / 20)
  }

  const rHandleKey = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 100 : 10
    let next: number | null = null
    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') next = rLoad - step
    else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') next = rLoad + step
    if (next === null) return
    e.preventDefault()
    setRLoad(Math.round(clamp(next, 50, 2000)))
  }

  /* ---------------- TeX readouts -------------------------------------- */

  const eqTex = `I_D = I_S\\!\\left(e^{V_D/nV_T}-1\\right) = ${texA(is)}\\cdot\\left(e^{${fc(op.vd)}/${fc(nvtV)}}-1\\right)`

  let pivTex = ''
  if (isRect) {
    pivTex =
      mode === 'halfwave'
        ? capUf > 0
          ? `\\text{PIV} = 2V_m = 2\\cdot${fc(vsrc)} = ${fc(2 * vsrc, 1)}\\,\\mathrm{V}`
          : `\\text{PIV} = V_m = ${fc(vsrc)}\\,\\mathrm{V}`
        : `\\text{PIV} = V_m = ${fc(vsrc)}\\,\\mathrm{V}\\;\\text{(per diode)}`
  }

  let avgTex = ''
  if (isRect && sim) {
    avgTex =
      capUf === 0
        ? mode === 'halfwave'
          ? `V_{avg} = \\frac{V_m}{\\pi} = ${fc(vsrc / Math.PI)}\\,\\mathrm{V}`
          : `V_{avg} = \\frac{2V_m}{\\pi} = ${fc((2 * vsrc) / Math.PI)}\\,\\mathrm{V}`
        : `V_{avg} \\approx V_{dc} = ${fc(sim.vavg)}\\,\\mathrm{V}`
  }

  const rippleTheory = isRect
    ? capUf > 0
      ? 1 / (2 * Math.sqrt(3) * (mode === 'bridge' ? 2 * MAINS_F : MAINS_F) * (capUf * 1e-6) * rLoad)
      : 0
    : 0

  /* ---------------- circuit geometry ---------------------------------- */

  const conducting =
    mode === 'forward'
      ? true
      : mode === 'reverse'
        ? false
        : mode === 'zener'
          ? vsrc > vz + 0.35
          : mode === 'bridge'
            ? true
            : sinPh > 0.06

  const circuit =
    mode === 'forward' || mode === 'reverse' || mode === 'zener'
      ? { CW: 500, CH: 250 }
      : mode === 'halfwave'
        ? { CW: 460, CH: 240 }
        : { CW: 520, CH: 260 }

  /* ---------------- render helpers ------------------------------------ */

  const stat = (
    key: string,
    label: string,
    value: string,
    sub: string,
    tone: 'amber' | 'emerald' | 'teal' | 'rose'
  ) => (
    <div
      key={key}
      className={`rounded-xl border p-3 ${
        tone === 'amber'
          ? 'border-amber-500/30 bg-amber-500/5'
          : tone === 'emerald'
            ? 'border-emerald-500/30 bg-emerald-500/5'
            : tone === 'teal'
              ? 'border-teal-500/30 bg-teal-500/5'
              : 'border-rose-500/30 bg-rose-500/5'
      }`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p
        className={`mt-1 truncate font-mono text-lg font-bold tabular-nums ${
          tone === 'amber'
            ? 'text-amber-300'
            : tone === 'emerald'
              ? 'text-emerald-300'
              : tone === 'teal'
                ? 'text-teal-300'
                : 'text-rose-300'
        }`}
      >
        {value}
      </p>
      <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">{sub}</p>
    </div>
  )

  const sliderRow = (
    key: string,
    label: string,
    hint: string,
    value: string,
    min: number,
    max: number,
    step: number,
    val: number,
    set: (v: number) => void,
    aria: string
  ) => (
    <div key={key}>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <span className="font-mono text-xs tabular-nums text-emerald-300">{value}</span>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={[val]}
        onValueChange={(v) => set(v[0] ?? val)}
        aria-label={aria}
        className="mt-2"
      />
      <p className="mt-1 text-[10px] leading-tight text-muted-foreground">{hint}</p>
    </div>
  )

  /* ---------------- JSX ------------------------------------------------ */

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Zap className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-foreground">Diode &amp; Rectifier Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Electronics Ch 12: the Shockley equation made tangible — drag the load line across the
            I–V curve, then rectify, clamp and filter with animated current.
          </p>
        </div>
        <Button
          size="sm"
          variant="ghost"
          aria-label="Reset lab to the silicon knee defaults"
          onClick={() => {
            setMode('forward')
            setIsExp(-14)
            setNvt(26)
            setVsrc(2)
            setRLoad(470)
            setVz(12)
            setCapUf(470)
          }}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* mode chips */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Circuit
        </span>
        {MODES.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => setMode(m.key)}
            aria-pressed={mode === m.key}
            aria-label={`Show the ${m.aria}`}
            className={`rounded-lg border px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
              mode === m.key
                ? 'border-emerald-500/60 bg-emerald-500/15 text-foreground ring-1 ring-emerald-500/40'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* presets */}
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Presets
        </span>
        {PRESETS.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => {
              const a = p.apply
              setMode(a.mode)
              setIsExp(a.isExp)
              setNvt(a.nvt)
              setVsrc(a.vsrc)
              setRLoad(a.rLoad)
              setVz(a.vz)
              setCapUf(a.capUf)
            }}
            aria-label={`Load preset: ${p.label}`}
            className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-2.5 py-1 text-xs text-amber-200 transition-colors hover:border-amber-500/60 hover:bg-amber-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* ---------------- left: I-V plot ---------------- */}
        <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-0.5 w-4 rounded bg-emerald-400" /> diode I–V
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-0.5 w-4 rounded bg-amber-400" /> load line
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-300" /> operating point
            </span>
            {isRect && (
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> instantaneous
              </span>
            )}
          </div>
          <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            className="w-full touch-none select-none"
            role="img"
            aria-label="Diode current-voltage characteristic with a draggable load line and the marked operating point."
          >
            <defs>
              <clipPath id="diode-plot-clip">
                <rect x={PL} y={PT} width={PW} height={PH} rx={6} />
              </clipPath>
            </defs>
            <rect x={PL} y={PT} width={PW} height={PH} rx={6} className="fill-zinc-950/40" />
            {xTicks.map((t) => (
              <g key={`gx-${t}`}>
                <line
                  x1={xToPx(t)}
                  y1={PT}
                  x2={xToPx(t)}
                  y2={PT + PH}
                  className="stroke-zinc-500/15"
                  strokeWidth={1}
                />
                <text
                  x={xToPx(t)}
                  y={H - PB + 16}
                  textAnchor="middle"
                  fontSize={11}
                  className="fill-zinc-500 font-mono"
                >
                  {fc(t, t % 1 === 0 ? 0 : 1)}
                </text>
              </g>
            ))}
            {yTicks.map((t) => (
              <g key={`gy-${t}`}>
                <line
                  x1={PL}
                  y1={yToPx(t)}
                  x2={PL + PW}
                  y2={yToPx(t)}
                  className="stroke-zinc-500/15"
                  strokeWidth={1}
                />
                <text
                  x={PL - 7}
                  y={yToPx(t) + 4}
                  textAnchor="end"
                  fontSize={10}
                  className="fill-zinc-500 font-mono"
                >
                  {yTickLabel(t)}
                </text>
              </g>
            ))}
            {yMin <= 0 && yMax >= 0 && (
              <line
                x1={PL}
                y1={yToPx(0)}
                x2={PL + PW}
                y2={yToPx(0)}
                className="stroke-zinc-500/50"
                strokeWidth={1.5}
              />
            )}
            {xMin <= 0 && xMax >= 0 && (
              <line
                x1={xToPx(0)}
                y1={PT}
                x2={xToPx(0)}
                y2={PT + PH}
                className="stroke-zinc-500/50"
                strokeWidth={1.5}
              />
            )}
            <text
              x={PL + PW - 4}
              y={yToPx(Math.max(0, Math.min(0, yMax))) - 7}
              textAnchor="end"
              fontSize={12}
              className="fill-zinc-400 italic"
            >
              V (V)
            </text>
            <text x={PL + 6} y={PT + 12} fontSize={12} className="fill-zinc-400 italic">
              I (A)
            </text>

            <g clipPath="url(#diode-plot-clip)">
              {/* reverse breakdown tint */}
              {mode === 'zener' && (
                <>
                  <rect
                    x={PL}
                    y={PT}
                    width={xToPx(-vz) - PL}
                    height={PH}
                    className="fill-rose-500/5"
                  />
                  <line
                    x1={xToPx(-vz)}
                    y1={PT}
                    x2={xToPx(-vz)}
                    y2={PT + PH}
                    className="stroke-rose-400/40"
                    strokeDasharray="4 5"
                    strokeWidth={1}
                  />
                  <text
                    x={xToPx(-vz) + 5}
                    y={PT + 16}
                    fontSize={10}
                    className="fill-rose-300 font-mono"
                  >
                    breakdown
                  </text>
                  <text
                    x={xToPx(-vz) + 5}
                    y={PT + 28}
                    fontSize={10}
                    className="fill-rose-300/70 font-mono"
                  >
                    −V_Z = −{fc(vz, 1)} V
                  </text>
                </>
              )}

              {/* the diode curve */}
              <motion.path
                key={`curve-${mode}-${isExp}-${nvt}-${vz}`}
                d={curveD}
                className="stroke-emerald-400"
                strokeWidth={2.5}
                fill="none"
                strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0, opacity: 0.4 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, ease: 'easeOut' }}
              />

              {/* the load line */}
              <line
                x1={xToPx(ll.vo)}
                y1={yToPx(ll.io)}
                x2={xToPx(ll.vs)}
                y2={yToPx(ll.is0)}
                className="stroke-amber-400"
                strokeWidth={2}
                strokeDasharray="8 5"
              />

              {/* instantaneous point sweeping the curve */}
              {instOp && (
                <g>
                  <circle cx={xToPx(instOp.vd)} cy={yToPx(instOp.id)} r={7} className="fill-amber-400/20" />
                  <circle cx={xToPx(instOp.vd)} cy={yToPx(instOp.id)} r={4} className="fill-amber-300" />
                </g>
              )}

              {/* operating point (peak, for rectifiers) */}
              {Number.isFinite(op.id) && op.vd >= xMin && op.vd <= xMax && (
                <g transform={`translate(${xToPx(op.vd)},${yToPx(op.id)})`}>
                  <motion.circle
                    r={10}
                    className="fill-emerald-400/20 stroke-emerald-400"
                    strokeWidth={1.5}
                    animate={reduce ? undefined : { opacity: [0.85, 0.25, 0.85] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                  />
                  <circle r={5} className="fill-emerald-300" />
                </g>
              )}
            </g>

            {/* draggable load-line handles (not in rectifier modes) */}
            {!isRect && mode !== 'reverse' && (
              <g
                tabIndex={0}
                role="slider"
                aria-label="Drag the load-line open-circuit point to change the source voltage. Arrow keys adjust it; hold Shift for bigger steps."
                aria-valuemin={mode === 'zener' ? 5 : 0.1}
                aria-valuemax={mode === 'zener' ? 24 : 3.5}
                aria-valuenow={Number(vsrc.toFixed(2))}
                aria-valuetext={`Source voltage ${fc(vsrc, 2)} volts`}
                onKeyDown={vsrcHandleKey}
                onPointerDown={beginDrag('vsrc')}
                onPointerMove={onHandleMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                className="group cursor-grab outline-none active:cursor-grabbing"
              >
                <circle cx={xToPx(ll.vo)} cy={yToPx(0)} r={20} className="fill-transparent" />
                <circle
                  r={13}
                  cx={xToPx(ll.vo)}
                  cy={yToPx(0)}
                  className="fill-transparent stroke-amber-400 opacity-0 transition-opacity group-focus-visible:opacity-80"
                  strokeWidth={2}
                />
                <circle
                  cx={xToPx(ll.vo)}
                  cy={yToPx(0)}
                  r={9}
                  className="fill-amber-400/25 stroke-amber-400"
                  strokeWidth={1.5}
                />
                <circle cx={xToPx(ll.vo)} cy={yToPx(0)} r={4.5} className="fill-amber-300" />
                <text
                  x={xToPx(ll.vo)}
                  y={yToPx(0) + 24}
                  textAnchor="middle"
                  fontSize={11}
                  className="fill-amber-300 font-mono"
                >
                  V_src
                </text>
              </g>
            )}
            {mode === 'reverse' && (
              <g
                tabIndex={0}
                role="slider"
                aria-label="Drag the operating point along the voltage axis to change the reverse source voltage. Arrow keys adjust it."
                aria-valuemin={-3.5}
                aria-valuemax={-0.1}
                aria-valuenow={Number(vsrc.toFixed(2))}
                onKeyDown={vsrcHandleKey}
                onPointerDown={beginDrag('vsrc')}
                onPointerMove={onHandleMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                className="group cursor-grab outline-none active:cursor-grabbing"
              >
                <circle cx={xToPx(op.vd)} cy={yToPx(op.id)} r={20} className="fill-transparent" />
                <circle
                  cx={xToPx(op.vd)}
                  cy={yToPx(op.id)}
                  r={9}
                  className="fill-amber-400/25 stroke-amber-400"
                  strokeWidth={1.5}
                />
                <circle cx={xToPx(op.vd)} cy={yToPx(op.id)} r={4.5} className="fill-amber-300" />
              </g>
            )}
            {!isRect && mode !== 'reverse' && (
              <g
                tabIndex={0}
                role="slider"
                aria-label="Drag the load-line short-circuit point vertically to change the resistance. Arrow keys adjust it; hold Shift for bigger steps."
                aria-valuemin={50}
                aria-valuemax={2000}
                aria-valuenow={rLoad}
                aria-valuetext={`Resistance ${rLoad} ohms`}
                onKeyDown={rHandleKey}
                onPointerDown={beginDrag('r')}
                onPointerMove={onHandleMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                className="group cursor-grab outline-none active:cursor-grabbing"
              >
                <circle cx={xToPx(0)} cy={yToPx(ll.is0)} r={20} className="fill-transparent" />
                <circle
                  cx={xToPx(0)}
                  cy={yToPx(ll.is0)}
                  r={13}
                  className="fill-transparent stroke-amber-400 opacity-0 transition-opacity group-focus-visible:opacity-80"
                  strokeWidth={2}
                />
                <circle
                  cx={xToPx(0)}
                  cy={yToPx(ll.is0)}
                  r={9}
                  className="fill-amber-400/25 stroke-amber-400"
                  strokeWidth={1.5}
                />
                <circle cx={xToPx(0)} cy={yToPx(ll.is0)} r={4.5} className="fill-amber-300" />
                <text
                  x={xToPx(0) + 14}
                  y={yToPx(ll.is0) + 14}
                  fontSize={11}
                  className="fill-amber-300 font-mono"
                >
                  R
                </text>
              </g>
            )}
          </svg>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-200">
              <TeX tex={`V_D = ${fc(op.vd)}\\,\\mathrm{V}`} />
            </span>
            <span className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 font-mono text-[11px] text-teal-200">
              <TeX tex={`I_D = ${siFmt(op.id, 'A')}`} />
            </span>
            <span className="text-[11px] text-muted-foreground">
              {mode === 'zener'
                ? 'the load line lives in the third quadrant — breakdown does the regulating'
                : isRect
                  ? 'the amber dot sweeps the curve as the AC source peaks'
                  : 'drag the amber handles, or focus them and use the arrow keys'}
            </span>
          </div>
        </div>

        {/* ---------------- right: circuit + scope ---------------- */}
        <div className="flex min-w-0 flex-col gap-4">
          <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
            <div className="mb-1 flex items-center justify-between gap-2">
              <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                <Activity className="h-3.5 w-3.5 text-emerald-400" />
                Circuit
              </p>
              <Button
                size="sm"
                variant="outline"
                aria-label={playing ? 'Pause the current animation' : 'Play the current animation'}
                aria-pressed={playing}
                onClick={() => setPlaying((p) => !p)}
                className="h-7"
              >
                {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                {playing ? 'Pause' : 'Play'}
              </Button>
            </div>
            <svg
              viewBox={`0 0 ${circuit.CW} ${circuit.CH}`}
              className="w-full"
              role="img"
              aria-label={`Schematic of the ${MODES.find((m) => m.key === mode)?.aria} with animated current dots on the conducting path.`}
            >
              {/* ===== forward / reverse / zener ===== */}
              {(mode === 'forward' || mode === 'reverse' || mode === 'zener') && (
                <g>
                  <DcSource x={70} y={130} label={mode === 'zener' ? 'V_src' : 'V_S'} />
                  <Wire d="M70,112 L70,60 L250,60" />
                  <Wire d="M70,148 L70,200 L360,200" />
                  <path
                    d={zigPath(250, 60, 330, 60)}
                    className={conducting ? 'stroke-emerald-400' : 'stroke-zinc-300'}
                    strokeWidth={2}
                    fill="none"
                  />
                  <text x={266} y={44} fontSize={11} className="fill-zinc-400 font-mono">
                    {mode === 'zener' ? 'R_S' : 'R'}
                  </text>
                  <text x={266} y={82} fontSize={10} className="fill-zinc-500 font-mono">
                    {rLoad} Ω
                  </text>
                  <Wire d="M330,60 L360,60 L360,86" />
                  <Wire d="M360,154 L360,200" />
                  {mode === 'forward' && (
                    <DiodeSym x={360} y={120} dir="down" highlight={conducting} />
                  )}
                  {mode === 'reverse' && <DiodeSym x={360} y={120} dir="up" highlight={false} />}
                  {mode === 'zener' && (
                    <DiodeSym x={360} y={120} dir="up" zener highlight={conducting} />
                  )}
                  <text x={378} y={124} fontSize={11} className="fill-zinc-400 font-mono">
                    {mode === 'zener' ? 'D_Z' : 'D'}
                  </text>
                  {mode !== 'zener' && (
                    <text
                      x={376}
                      y={140}
                      fontSize={10}
                      className={conducting ? 'fill-emerald-300 font-mono' : 'fill-zinc-500 font-mono'}
                    >
                      {conducting ? siFmt(op.id, 'A') : 'blocked'}
                    </text>
                  )}
                  {mode === 'zener' && (
                    <>
                      <circle cx={360} cy={60} r={3} className="fill-zinc-300" />
                      <text x={360} y={44} fontSize={11} className="fill-emerald-300 font-mono">
                        V_out
                      </text>
                      <Wire d="M360,200 L360,214" />
                      <GndSym x={360} y={214} />
                    </>
                  )}
                  {conducting ? (
                    <PathDots
                      pts={[
                        [70, 112],
                        [70, 60],
                        [360, 60],
                        [360, 200],
                        [70, 200],
                        [70, 148],
                      ]}
                      phase={effPhase}
                      n={7}
                    />
                  ) : (
                    <text x={150} y={235} fontSize={11} className="fill-rose-300 font-mono">
                      {`reverse-biased: only leakage ${siFmt(-is, 'A')} flows — an open switch`}
                    </text>
                  )}
                </g>
              )}

              {/* ===== half-wave ===== */}
              {mode === 'halfwave' && (
                <g>
                  <AcSource x={60} y={130} label="v_s" />
                  <Wire d="M60,112 L60,60 L170,60" />
                  <DiodeSym x={200} y={60} dir="right" highlight={conducting} />
                  <Wire d="M60,148 L60,200 L360,200" />
                  <Wire d="M360,60 L360,200" />
                  <path
                    d={zigPath(360, 90, 360, 170)}
                    className="stroke-zinc-300"
                    strokeWidth={2}
                    fill="none"
                  />
                  <text x={378} y={134} fontSize={11} className="fill-zinc-400 font-mono">
                    R
                  </text>
                  {capUf > 0 && (
                    <>
                      <Wire d="M360,60 L420,60 L420,110" />
                      <Wire d="M420,150 L420,200 L360,200" />
                      <line x1={404} y1={110} x2={436} y2={110} className="stroke-zinc-300" strokeWidth={2.5} />
                      <line x1={404} y1={150} x2={436} y2={150} className="stroke-zinc-300" strokeWidth={2.5} />
                      <text x={396} y={134} fontSize={10} className="fill-teal-300 font-mono">
                        C
                      </text>
                    </>
                  )}
                  <text x={200} y={38} fontSize={11} className="fill-zinc-400 font-mono">
                    D
                  </text>
                  <circle cx={360} cy={60} r={3} className="fill-zinc-300" />
                  <text x={330} y={44} fontSize={11} className="fill-emerald-300 font-mono">
                    v_out
                  </text>
                  {conducting && (
                    <PathDots
                      pts={[
                        [60, 112],
                        [60, 60],
                        [360, 60],
                        [360, 200],
                        [60, 200],
                        [60, 148],
                      ]}
                      phase={effPhase}
                      n={7}
                      opacity={0.35 + 0.65 * Math.min(1, Math.max(0, sinPh))}
                    />
                  )}
                  <text x={120} y={232} fontSize={11} className="fill-zinc-500 font-mono">
                    {conducting ? 'conducting half-cycle' : 'diode blocks the negative half'}
                  </text>
                </g>
              )}

              {/* ===== bridge ===== */}
              {mode === 'bridge' && (
                <g>
                  <AcSource x={58} y={115} label="v_s" />
                  <Wire d="M76,115 L150,115" />
                  <Wire d="M58,97 L58,50 L100,50 L285,50 L285,115 L250,115" />
                  {/* diamond */}
                  <Wire d="M150,115 L200,65" />
                  <Wire d="M250,115 L200,165" />
                  <DiodeSym x={175} y={90} dir="right" highlight />
                  <DiodeSym x={225} y={90} dir="left" highlight={sinPh < 0} />
                  <DiodeSym x={175} y={140} dir="left" highlight={sinPh < 0} />
                  <DiodeSym x={225} y={140} dir="right" highlight />
                  <text x={152} y={82} fontSize={10} className="fill-zinc-400 font-mono">
                    D1
                  </text>
                  <text x={248} y={82} fontSize={10} className="fill-zinc-400 font-mono">
                    D2
                  </text>
                  <text x={152} y={162} fontSize={10} className="fill-zinc-400 font-mono">
                    D3
                  </text>
                  <text x={248} y={162} fontSize={10} className="fill-zinc-400 font-mono">
                    D4
                  </text>
                  {/* output rails */}
                  <Wire d="M200,65 L200,30 L420,30" />
                  <Wire d="M200,165 L200,200 L420,200" />
                  <path
                    d={zigPath(420, 60, 420, 170)}
                    className="stroke-zinc-300"
                    strokeWidth={2}
                    fill="none"
                  />
                  <text x={438} y={120} fontSize={11} className="fill-zinc-400 font-mono">
                    R
                  </text>
                  {capUf > 0 && (
                    <>
                      <Wire d="M420,30 L470,30 L470,80" />
                      <Wire d="M470,120 L470,200 L420,200" />
                      <line x1={454} y1={80} x2={486} y2={80} className="stroke-zinc-300" strokeWidth={2.5} />
                      <line x1={454} y1={120} x2={486} y2={120} className="stroke-zinc-300" strokeWidth={2.5} />
                      <text x={446} y={104} fontSize={10} className="fill-teal-300 font-mono">
                        C
                      </text>
                    </>
                  )}
                  <circle cx={420} cy={30} r={3} className="fill-zinc-300" />
                  <text x={390} y={18} fontSize={11} className="fill-emerald-300 font-mono">
                    v_out
                  </text>
                  {sinPh >= 0 ? (
                    <PathDots
                      pts={[
                        [76, 115],
                        [150, 115],
                        [200, 65],
                        [200, 30],
                        [420, 30],
                        [420, 200],
                        [200, 200],
                        [200, 165],
                        [250, 115],
                        [285, 115],
                        [285, 50],
                        [100, 50],
                        [58, 50],
                        [58, 97],
                      ]}
                      phase={effPhase}
                      n={9}
                    />
                  ) : (
                    <PathDots
                      pts={[
                        [58, 97],
                        [58, 50],
                        [100, 50],
                        [285, 50],
                        [285, 115],
                        [250, 115],
                        [200, 65],
                        [200, 30],
                        [420, 30],
                        [420, 200],
                        [200, 200],
                        [200, 165],
                        [150, 115],
                        [76, 115],
                      ]}
                      phase={effPhase}
                      n={9}
                    />
                  )}
                  <text x={120} y={238} fontSize={11} className="fill-zinc-500 font-mono">
                    {sinPh >= 0 ? 'D1 + D4 conduct' : 'D2 + D3 conduct — both half-cycles used'}
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* scope + ripple explorer */}
          {isRect && sim && (
            <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
              <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Output scope
                </p>
                <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span className="h-0.5 w-4 rounded bg-amber-400" /> v_s
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span className="h-0.5 w-4 rounded bg-emerald-400" /> v_out
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span className="h-0.5 w-4 rounded border-t-2 border-dashed border-teal-400" /> V_dc
                </span>
              </div>
              <ScopeView sim={sim} vsrc={vsrc} vavg={sim.vavg} />
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-200">
                  V_dc = {fc(sim.vavg)} V
                </span>
                <span className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] text-amber-200">
                  ripple V_pp = {fc(sim.vpp)} V
                </span>
                <span
                  className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] tabular-nums ${
                    capUf === 0
                      ? 'border-rose-500/40 bg-rose-500/10 text-rose-200'
                      : sim.ripple > 0.2
                        ? 'border-rose-500/40 bg-rose-500/10 text-rose-200'
                        : sim.ripple > 0.05
                          ? 'border-amber-500/40 bg-amber-500/10 text-amber-200'
                          : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                  }`}
                >
                  {capUf === 0
                    ? 'no filter: r = 48% (half-wave) / 21% (bridge)'
                    : `ripple factor r = ${(sim.ripple * 100).toFixed(1)}%`}
                </span>
                {capUf > 0 && (
                  <span className="text-[11px] text-muted-foreground">
                    theory: r ≈ 1/(2√3·f′RC) ={' '}
                    <b className="font-mono text-foreground">{(rippleTheory * 100).toFixed(1)}%</b>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* non-rectifier readouts */}
          {!isRect && (
            <div className="grid grid-cols-2 gap-3">
              {mode === 'zener' && (
                <>
                  {stat(
                    'vout',
                    'V_out',
                    `${fc(-op.vd)} V`,
                    op.id < -1e-6 ? 'clamped at the Zener knee' : 'below V_Z — no regulation',
                    'emerald'
                  )}
                  {stat(
                    'iz',
                    'I_Z',
                    siFmt(-op.id, 'A'),
                    `series drop ${(vsrc + op.vd).toFixed(2)} V across R_S`,
                    'amber'
                  )}
                  {stat(
                    'pz',
                    'P_Z',
                    `${(-op.vd * -op.id * 1000).toFixed(0)} mW`,
                    -op.vd * -op.id > 0.5 ? 'over 500 mW — device at risk' : 'dissipation in the Zener',
                    -op.vd * -op.id > 0.5 ? 'rose' : 'teal'
                  )}
                  {stat(
                    'reg',
                    'Load regulation',
                    `${fc(vz)} V`,
                    `V_out holds while V_src > V_Z (${fc(vz)} V)`,
                    'teal'
                  )}
                </>
              )}
              {mode === 'forward' && (
                <>
                  {stat('vd', 'V_D', `${fc(op.vd)} V`, 'the forward knee voltage', 'emerald')}
                  {stat('id', 'I_D', siFmt(op.id, 'A'), 'set by the load line crossing', 'teal')}
                  {stat(
                    'rd',
                    'r_d = nV_T/I_D',
                    siFmt((nvtV / Math.max(op.id, 1e-18)), 'Ω'),
                    'small-signal resistance at Q',
                    'amber'
                  )}
                  {stat(
                    'p',
                    'P_D',
                    `${((op.vd * op.id * 1000) | 0)} mW`,
                    'V_D × I_D dissipated in the junction',
                    op.vd * op.id > 0.5 ? 'rose' : 'teal'
                  )}
                </>
              )}
              {mode === 'reverse' && (
                <>
                  {stat('vr', 'V_R', `${fc(op.vd)} V`, 'whole source across the diode', 'amber')}
                  {stat('ir', 'I_R', siFmt(-is, 'A'), 'reverse saturation current −I_S', 'teal')}
                  {stat(
                    'piv0',
                    'PIV rating needed',
                    `> ${fc(Math.abs(vsrc), 1)} V`,
                    'peak inverse voltage the diode must survive',
                    'emerald'
                  )}
                  {stat(
                    'switch',
                    'Behaviour',
                    'open switch',
                    'the depletion layer blocks conduction',
                    'rose'
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ---------------- sliders ---------------- */}
      <div className="mt-4 rounded-xl border border-border bg-background/50 p-3 sm:p-4">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {sliderRow(
            'is',
            'Saturation current I_S',
            'log scale — real silicon sits near 10⁻¹⁴ A',
            texA(is).replace(/\\mathrm\{A\}/, 'A'),
            -16,
            -9,
            0.25,
            isExp,
            (v) => setIsExp(v),
            'Saturation current, logarithmic'
          )}
          {sliderRow(
            'nvt',
            'Thermal voltage n·V_T',
            'n = 1 gives 26 mV at room temperature',
            `${nvt} mV`,
            15,
            60,
            1,
            nvt,
            (v) => setNvt(Math.round(v)),
            'Ideality factor times thermal voltage'
          )}
          {sliderRow(
            'vsrc',
            mode === 'zener' ? 'Source V_src' : isRect ? 'Peak voltage V_m' : 'Source V_S',
            mode === 'reverse' ? 'negative — the diode is reverse biased' : 'draggable on the plot too',
            `${fc(vsrc)} V`,
            mode === 'reverse' ? -3.5 : mode === 'zener' ? 5 : mode === 'forward' ? 0.1 : 1,
            mode === 'reverse' ? -0.1 : mode === 'zener' ? 24 : mode === 'forward' ? 3.5 : 24,
            0.1,
            vsrc,
            (v) => setVsrc(Math.round(v * 10) / 10),
            'Source voltage'
          )}
          {sliderRow(
            'r',
            mode === 'zener' ? 'Series resistance R_S' : 'Load / series R',
            'sets the load-line slope',
            `${rLoad} Ω`,
            50,
            2000,
            10,
            rLoad,
            (v) => setRLoad(Math.round(v)),
            'Resistance'
          )}
          {mode === 'zener' &&
            sliderRow(
              'vz',
              'Zener voltage V_Z',
              'the breakdown knee location',
              `${fc(vz)} V`,
              3.3,
              18,
              0.1,
              vz,
              (v) => setVz(Math.round(v * 10) / 10),
              'Zener voltage'
            )}
          {isRect &&
            sliderRow(
              'c',
              'Smoothing capacitor C',
              'drag down toward 0 to watch the ripple explode',
              capUf === 0 ? 'none' : `${capUf} µF`,
              0,
              2200,
              10,
              capUf,
              (v) => setCapUf(Math.round(v)),
              'Smoothing capacitor'
            )}
        </div>
      </div>

      {/* ---------------- TeX readouts ---------------- */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Shockley equation, substituted
          </p>
          <div className="mt-1 overflow-x-auto text-sm">
            <TeX display tex={eqTex} />
          </div>
          <p className="mt-1 text-center font-mono text-[11px] text-emerald-300">
            I_D = {siFmt(op.id, 'A')}
          </p>
        </div>
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {isRect ? 'Peak inverse voltage' : 'Reverse behaviour'}
          </p>
          <div className="mt-1 overflow-x-auto text-sm">
            {isRect ? (
              <TeX display tex={pivTex} />
            ) : (
              <TeX
                display
                tex={`\\text{PIV} > |V|_{max} = ${fc(Math.max(Math.abs(vsrc), mode === 'zener' ? vz : 0), 1)}\\,\\mathrm{V}`}
              />
            )}
          </div>
          <p className="mt-1 text-center text-[11px] text-muted-foreground">
            {isRect
              ? mode === 'bridge'
                ? 'the bridge halves the PIV per diode — its key selling point'
                : capUf > 0
                  ? 'the charged capacitor doubles the stress in a half-wave peak rectifier'
                  : 'no capacitor: the diode only sees the source peak'
              : 'the rating that stops the junction avalanching'}
          </p>
        </div>
        <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Average rectified value
          </p>
          <div className="mt-1 overflow-x-auto text-sm">
            {isRect ? (
              <TeX display tex={avgTex} />
            ) : (
              <TeX
                display
                tex={`V_{avg} = \\frac{1}{T}\\int_0^T |v|\\,dt \\;\\Rightarrow\\; \\frac{V_m}{\\pi}\\;(\\frac{1}{2}\\text{-wave}),\\;\\frac{2V_m}{\\pi}\\;(\\text{bridge})`}
              />
            )}
          </div>
          <p className="mt-1 text-center text-[11px] text-muted-foreground">
            {isRect && sim
              ? `measured on the scope: V_dc = ${fc(sim.vavg)} V, ripple ${(sim.ripple * 100).toFixed(1)}%`
              : 'the DC a moving-coil meter would read'}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          load{' '}
          <span className="font-medium text-foreground">Bridge + smoothing</span>, then drag the
          capacitor slider down to 22 µF — the scope turns into a sawtooth and the ripple chip goes
          rose. Now push C back to 2200 µF and drop R to 220 Ω: same ripple, because it is R·C that
          sets the droop. Then switch to{' '}
          <span className="font-medium text-foreground">Zener shunt</span>, slide V_src from 18 V
          down through 12 V and watch V_out give up exactly at the knee — regulation only ever
          borrows the leftover voltage across R_S.
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Scope                                                               */
/* ------------------------------------------------------------------ */

function ScopeView({
  sim,
  vsrc,
  vavg,
}: {
  sim: { src: number[]; out: number[] }
  vsrc: number
  vavg: number
}) {
  const SW = 620
  const SH = 190
  const SPL = 46
  const SPR = 12
  const SPT = 12
  const SPB = 26
  const SPW = SW - SPL - SPR
  const SPH = SH - SPT - SPB
  const yTop = Math.max(vsrc, vavg + (sim.out.length ? Math.max(...sim.out) : 0)) * 1.15
  const yLo = -vsrc * 1.15
  const toX = (i: number) => SPL + (i / (sim.src.length - 1)) * SPW
  const toY = (v: number) => SPT + ((yTop - v) / (yTop - yLo)) * SPH
  const pathOf = (arr: number[]) => {
    let d = ''
    arr.forEach((v, i) => {
      d += `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(v).toFixed(1)}`
    })
    return d
  }
  const vTicks = niceTicks(yLo, yTop, 4)
  return (
    <svg
      viewBox={`0 0 ${SW} ${SH}`}
      className="w-full"
      role="img"
      aria-label="Oscilloscope trace: source sine wave versus the rectified, smoothed output voltage."
    >
      <rect x={SPL} y={SPT} width={SPW} height={SPH} rx={6} className="fill-zinc-950/40" />
      {[0, 0.5, 1, 1.5, 2].map((c) => (
        <line
          key={c}
          x1={SPL + c * SPW}
          y1={SPT}
          x2={SPL + c * SPW}
          y2={SPT + SPH}
          className="stroke-zinc-500/15"
          strokeWidth={1}
        />
      ))}
      {vTicks.map((t) => (
        <g key={t}>
          <line
            x1={SPL}
            y1={toY(t)}
            x2={SPL + SPW}
            y2={toY(t)}
            className="stroke-zinc-500/15"
            strokeWidth={1}
          />
          <text
            x={SPL - 6}
            y={toY(t) + 3}
            textAnchor="end"
            fontSize={10}
            className="fill-zinc-500 font-mono"
          >
            {fc(t, Math.abs(t) >= 10 ? 0 : 1)}
          </text>
        </g>
      ))}
      <line
        x1={SPL}
        y1={toY(0)}
        x2={SPL + SPW}
        y2={toY(0)}
        className="stroke-zinc-500/50"
        strokeWidth={1.5}
      />
      <path d={pathOf(sim.src)} className="stroke-amber-400/70" strokeWidth={1.8} fill="none" strokeDasharray="6 4" />
      <path d={pathOf(sim.out)} className="stroke-emerald-400" strokeWidth={2.4} fill="none" strokeLinejoin="round" />
      {vavg > 0 && (
        <line
          x1={SPL}
          y1={toY(vavg)}
          x2={SPL + SPW}
          y2={toY(vavg)}
          className="stroke-teal-400"
          strokeWidth={1.4}
          strokeDasharray="4 4"
        />
      )}
      <text x={SPL + 6} y={SPT + 12} fontSize={10} className="fill-zinc-500 font-mono">
        2 cycles @ 50 Hz
      </text>
    </svg>
  )
}
