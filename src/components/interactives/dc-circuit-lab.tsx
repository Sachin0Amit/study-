'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { BatteryCharging, Lightbulb, Minus, Plus, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Units + formatting                                                 */
/* ------------------------------------------------------------------ */

const R_MIN = 10
const R_MAX = 100_000
const RATING_W = 0.5

/** log-slider helpers: slider t in [0,100] <-> ohms in [R_MIN, R_MAX] */
const rToT = (r: number): number => (Math.log10(r / R_MIN) / Math.log10(R_MAX / R_MIN)) * 100
const tToR = (t: number): number => R_MIN * Math.pow(R_MAX / R_MIN, t / 100)

function fmtOhm(r: number): string {
  if (!Number.isFinite(r)) return '∞'
  if (r >= 1e6) return `${trim(r / 1e6)} MΩ`
  if (r >= 1000) return `${trim(r / 1000)} kΩ`
  return `${trim(r)} Ω`
}
function fmtA(i: number): string {
  const a = Math.abs(i)
  if (a >= 1) return `${trim(i)} A`
  if (a >= 1e-3) return `${trim(i * 1e3)} mA`
  return `${trim(i * 1e6)} µA`
}
function fmtW(p: number): string {
  const a = Math.abs(p)
  if (a >= 1) return `${trim(p)} W`
  if (a >= 1e-3) return `${trim(p * 1e3)} mW`
  return `${trim(p * 1e6)} µW`
}
function fmtV(v: number): string {
  return `${trim(v)} V`
}
/** trims to at most 3 significant digits without trailing zeros */
function trim(v: number): string {
  if (!Number.isFinite(v)) return '—'
  const a = Math.abs(v)
  if (a === 0) return '0'
  if (a >= 100) return v.toFixed(0)
  if (a >= 10) return String(Number(v.toFixed(1)))
  if (a >= 1) return String(Number(v.toFixed(2)))
  return String(Number(v.toPrecision(3)))
}
/** trimmed number for TeX */
function fmtT(v: number): string {
  if (!Number.isFinite(v)) return '\\mathrm{open}'
  return String(Number(v.toPrecision(3)))
}

/* ------------------------------------------------------------------ */
/*  Circuit solver — series / parallel / ladder / divider              */
/* ------------------------------------------------------------------ */

type Topo = 'series' | 'parallel' | 'ladder' | 'divider'

interface Solved {
  req: number
  it: number
  pt: number
  vout: number | null
  per: { v: number; i: number; p: number }[]
}

function solveCircuit(topo: Topo, rs: number[], vs: number): Solved | null {
  if (rs.length === 0) return null
  if (topo === 'series' || (topo === 'ladder' && rs.length < 3)) {
    const req = rs.reduce((a, b) => a + b, 0)
    const it = vs / req
    return {
      req,
      it,
      pt: vs * it,
      vout: null,
      per: rs.map((r) => ({ v: it * r, i: it, p: it * it * r })),
    }
  }
  if (topo === 'parallel') {
    const g = rs.reduce((a, r) => a + 1 / r, 0)
    const req = 1 / g
    return {
      req,
      it: vs / req,
      pt: (vs * vs) / req,
      vout: null,
      per: rs.map((r) => ({ v: vs, i: vs / r, p: (vs * vs) / r })),
    }
  }
  if (topo === 'ladder') {
    // R1 in series with (middle rungs in parallel) in series with the last resistor
    const first = rs[0]
    const last = rs[rs.length - 1]
    const middles = rs.slice(1, rs.length - 1)
    const gMid = middles.reduce((a, r) => a + 1 / r, 0)
    const rMid = middles.length ? 1 / gMid : 0
    const req = first + rMid + last
    const it = vs / req
    const per: { v: number; i: number; p: number }[] = []
    per.push({ v: it * first, i: it, p: it * it * first })
    const vMid = it * rMid
    middles.forEach((r) => per.push({ v: vMid, i: vMid / r, p: (vMid * vMid) / r }))
    per.push({ v: it * last, i: it, p: it * it * last })
    return { req, it, pt: vs * it, vout: null, per }
  }
  // divider: R1 in series with a parallel bank; the output is taken across the bank
  const first = rs[0]
  const bank = rs.slice(1)
  if (bank.length === 0) {
    return { req: Infinity, it: 0, pt: 0, vout: vs, per: [{ v: vs, i: 0, p: 0 }] }
  }
  const gBank = bank.reduce((a, r) => a + 1 / r, 0)
  const rBank = 1 / gBank
  const req = first + rBank
  const it = vs / req
  const vout = it * rBank
  const per: { v: number; i: number; p: number }[] = [{ v: it * first, i: it, p: it * it * first }]
  bank.forEach((r) => per.push({ v: vout, i: vout / r, p: (vout * vout) / r }))
  return { req, it, pt: vs * it, vout, per }
}

/* ------------------------------------------------------------------ */
/*  Animated current dots (speed proportional to current)              */
/* ------------------------------------------------------------------ */

interface FlowRoute {
  key: string
  d: string
  /** loop traversals per second */
  speed: number
  dots: number
}

function CurrentFlow({
  routes,
  reduce,
  idPrefix,
}: {
  routes: FlowRoute[]
  reduce: boolean | null
  idPrefix: string
}) {
  const pathRefs = useRef<(SVGPathElement | null)[]>([])
  const dotRefs = useRef<(SVGCircleElement | null)[]>([])
  const routesRef = useRef(routes)
  useEffect(() => {
    routesRef.current = routes
  }, [routes])

  /* lay the dots out at fixed fractions so they are meaningful even when static */
  useEffect(() => {
    routes.forEach((route, ri) => {
      const p = pathRefs.current[ri]
      if (!p) return
      const len = p.getTotalLength()
      for (let j = 0; j < route.dots; j++) {
        const dot = dotRefs.current[ri * 16 + j]
        if (!dot) continue
        const pt = p.getPointAtLength((j / route.dots) * len)
        dot.setAttribute('cx', String(pt.x))
        dot.setAttribute('cy', String(pt.y))
      }
    })
  }, [routes])

  useEffect(() => {
    if (reduce) return
    let start: number | null = null
    let raf = 0
    const tick = (ts: number) => {
      if (start === null) start = ts
      const t = (ts - start) / 1000
      routesRef.current.forEach((route, ri) => {
        const p = pathRefs.current[ri]
        if (!p) return
        const len = p.getTotalLength()
        for (let j = 0; j < route.dots; j++) {
          const dot = dotRefs.current[ri * 16 + j]
          if (!dot) continue
          const frac = (t * route.speed + j / route.dots) % 1
          const pt = p.getPointAtLength(frac * len)
          dot.setAttribute('cx', String(pt.x))
          dot.setAttribute('cy', String(pt.y))
        }
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduce])

  return (
    <g>
      {routes.map((route, ri) => (
        <g key={route.key}>
          <path
            ref={(el) => {
              pathRefs.current[ri] = el
            }}
            d={route.d}
            fill="none"
            stroke="none"
          />
          {Array.from({ length: route.dots }, (_, j) => (
            <circle
              key={j}
              ref={(el) => {
                dotRefs.current[ri * 16 + j] = el
              }}
              r={3.1}
              className="fill-emerald-300"
            />
          ))}
        </g>
      ))}
      <defs>
        <filter id={`${idPrefix}-heat`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
    </g>
  )
}

/* ------------------------------------------------------------------ */
/*  Shared SVG glyphs                                                  */
/* ------------------------------------------------------------------ */

function heatStyle(p: number): { body: string; halo: string; haloOp: number } {
  const h = p / RATING_W
  if (h >= 0.85) return { body: 'fill-rose-950 stroke-rose-400', halo: 'fill-rose-500', haloOp: 0.55 }
  if (h >= 0.5) return { body: 'fill-amber-950 stroke-amber-400', halo: 'fill-amber-500', haloOp: 0.12 + (h - 0.5) * 0.55 }
  return { body: 'fill-zinc-800 stroke-zinc-500', halo: 'fill-amber-500', haloOp: 0 }
}

interface ResGlyphProps {
  cx: number
  cy: number
  vertical?: boolean
  /** baseline y for readouts drawn below a rail (vertical resistors only) */
  roY?: number
  name: string
  value: string
  ros: string[]
  heat: number
}

function ResGlyph({ cx, cy, vertical = false, roY, name, value, ros, heat }: ResGlyphProps) {
  const w = vertical ? 22 : 46
  const h = vertical ? 46 : 22
  const hs = heatStyle(heat)
  const pCls =
    heat >= 0.85 ? 'fill-rose-400' : heat >= 0.5 ? 'fill-amber-400' : 'fill-zinc-400'
  const lineCls = ['fill-emerald-300', 'fill-teal-300', pCls]
  return (
    <g>
      {hs.haloOp > 0 && (
        <rect
          x={cx - w / 2 - 7}
          y={cy - h / 2 - 7}
          width={w + 14}
          height={h + 14}
          rx={10}
          className={hs.halo}
          fillOpacity={hs.haloOp}
          filter="url(#dc-heat)"
        />
      )}
      <rect
        x={cx - w / 2}
        y={cy - h / 2}
        width={w}
        height={h}
        rx={3.5}
        className={`${hs.body} transition-colors`}
        strokeWidth={1.6}
      />
      {vertical ? (
        <>
          <text x={cx + 16} y={cy - 4} fontSize={10.5} className="fill-zinc-300 font-mono">
            {name}
          </text>
          <text x={cx + 16} y={cy + 8} fontSize={9} className="fill-zinc-500 font-mono">
            {value}
          </text>
          {ros.map((ro, li) =>
            roY !== undefined ? (
              <text
                key={li}
                x={cx}
                y={roY + li * 11}
                fontSize={9}
                textAnchor="middle"
                className={`${lineCls[li] ?? 'fill-zinc-400'} font-mono`}
              >
                {ro}
              </text>
            ) : (
              <text
                key={li}
                x={cx - w / 2 - 6}
                y={cy - 6 + li * 11}
                fontSize={9}
                textAnchor="end"
                className={`${lineCls[li] ?? 'fill-zinc-400'} font-mono`}
              >
                {ro}
              </text>
            )
          )}
        </>
      ) : (
        <>
          <text x={cx} y={cy - 17} fontSize={10.5} textAnchor="middle" className="fill-zinc-300 font-mono">
            {name}
          </text>
          <text x={cx} y={cy - 6} fontSize={9} textAnchor="middle" className="fill-zinc-500 font-mono">
            {value}
          </text>
          {ros.map((ro, li) => (
            <text
              key={li}
              x={cx}
              y={cy + 21 + li * 11}
              fontSize={9}
              textAnchor="middle"
              className={`${lineCls[li] ?? 'fill-zinc-400'} font-mono`}
            >
              {ro}
            </text>
          ))}
        </>
      )}
    </g>
  )
}

/** vertical battery glyph centred on (x, cy) */
function BatteryGlyph({ x, cy, label }: { x: number; cy: number; label: string }) {
  return (
    <g>
      <line x1={x - 14} y1={cy - 7} x2={x + 14} y2={cy - 7} className="stroke-emerald-400" strokeWidth={2.4} />
      <line x1={x - 7} y1={cy + 5} x2={x + 7} y2={cy + 5} className="stroke-emerald-400" strokeWidth={4.5} />
      <text x={x + 20} y={cy - 8} fontSize={11} className="fill-emerald-300 font-mono">
        +
      </text>
      <text x={x + 20} y={cy + 10} fontSize={10} className="fill-zinc-400 font-mono">
        {label}
      </text>
    </g>
  )
}

const wire = 'stroke-zinc-500'
const WIRE_W = 1.6

/* ------------------------------------------------------------------ */
/*  Resistor colour code                                              */
/* ------------------------------------------------------------------ */

interface BandColor {
  name: string
  hex: string
  /** band paints use explicit hex — the code is the physics, not the theme */
  digit?: number
  mult?: number
  tol?: number
}

const BANDS: BandColor[] = [
  { name: 'black', hex: '#27272a', digit: 0, mult: 1 },
  { name: 'brown', hex: '#92400e', digit: 1, mult: 10, tol: 1 },
  { name: 'red', hex: '#e11d48', digit: 2, mult: 100, tol: 2 },
  { name: 'orange', hex: '#ea580c', digit: 3, mult: 1e3 },
  { name: 'yellow', hex: '#eab308', digit: 4, mult: 1e4 },
  { name: 'green', hex: '#16a34a', digit: 5, mult: 1e5 },
  { name: 'blue', hex: '#2563eb', digit: 6, mult: 1e6 },
  { name: 'violet', hex: '#7c3aed', digit: 7, mult: 1e7 },
  { name: 'gray', hex: '#a1a1aa', digit: 8, mult: 1e8 },
  { name: 'white', hex: '#fafafa', digit: 9, mult: 1e9 },
  { name: 'gold', hex: '#d4af37', mult: 0.1, tol: 5 },
  { name: 'silver', hex: '#d4d4d8', mult: 0.01, tol: 10 },
]

/* ------------------------------------------------------------------ */
/*  Presets                                                            */
/* ------------------------------------------------------------------ */

interface Preset {
  key: string
  label: string
  topo: Topo
  vs: number
  rs: number[]
  note: string
  chip: string
}

const PRESETS: Preset[] = [
  {
    key: 'series',
    label: 'Series chain',
    topo: 'series',
    vs: 12,
    rs: [100, 220, 330, 470],
    note: 'One loop, one current. The 12 V battery divides itself across the four resistors in proportion to their values — add the four voltage readouts and you get exactly 12 V back (Kirchhoff’s voltage law, Ch 2.3).',
    chip: 'R_{eq}=R_1+R_2+R_3+R_4=1120\\;\\Omega',
  },
  {
    key: 'parallel',
    label: 'Parallel bank',
    topo: 'parallel',
    vs: 9,
    rs: [330, 470, 680, 1000],
    note: 'One voltage, four currents. Conductances add: 1/R_eq = 1/330 + 1/470 + 1/680 + 1/1000, so R_eq = 131 Ω — smaller than the smallest resistor in the bank. The branch currents sum back to 68.7 mA.',
    chip: '\\frac{1}{R_{eq}}=\\sum_k \\frac{1}{R_k}\\;\\Rightarrow\\;R_{eq}=131\\;\\Omega',
  },
  {
    key: 'ladder',
    label: 'Mixed ladder',
    topo: 'ladder',
    vs: 12,
    rs: [100, 220, 330, 470],
    note: 'R₁ feeds a parallel pair (R₂ ∥ R₃ = 132 Ω) that feeds R₄ — the series-recursive structure of Ch 2.2. Reduce inside-out: collapse the parallel rungs first, then the outer series arms.',
    chip: 'R_{eq}=R_1+\\left(R_2\\parallel R_3\\right)+R_4=702\\;\\Omega',
  },
  {
    key: 'divider',
    label: 'Divider',
    topo: 'divider',
    vs: 12,
    rs: [330, 1000],
    note: 'The workhorse of Ch 2.4: V_out = V·R_bank/(R₁+R_bank) = 9.02 V. Now press Add resistor — every extra branch loads the divider and the output sags, exactly why a real 10 MΩ voltmeter barely disturbs a circuit.',
    chip: 'V_{out}=V\\cdot\\frac{R_{bank}}{R_1+R_{bank}}',
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface Resistor {
  id: number
  r: number
}

let resId = 4

export default function DcCircuitLab() {
  const reduce = useReducedMotion()
  const [vs, setVs] = useState(12)
  const [topo, setTopo] = useState<Topo>('series')
  const [resistors, setResistors] = useState<Resistor[]>([
    { id: 1, r: 100 },
    { id: 2, r: 220 },
    { id: 3, r: 330 },
    { id: 4, r: 470 },
  ])
  const [presetKey, setPresetKey] = useState('series')

  /* colour decoder state: band1, band2 digits; multiplier; tolerance */
  const [b1, setB1] = useState(4)
  const [b2, setB2] = useState(7)
  const [mIdx, setMIdx] = useState(2)
  const [tolIdx, setTolIdx] = useState(10)
  const [applyTarget, setApplyTarget] = useState(0)
  const [clampNote, setClampNote] = useState('')

  const rs = resistors.map((r) => r.r)
  const solved = useMemo(() => solveCircuit(topo, rs, vs), [topo, rs, vs])

  const it = solved?.it ?? 0
  const req = solved?.req ?? Infinity
  const pt = solved?.pt ?? 0

  /* current-dot speeds: fraction of the loop per second, roughly proportional to amps */
  const clampSpeed = (i: number): number => Math.min(Math.max(i * 0.9, 0.18), 3.2)
  const mainSpeed = clampSpeed(it)

  const applyPreset = (key: string) => {
    const p = PRESETS.find((x) => x.key === key)
    if (!p) return
    setTopo(p.topo)
    setVs(p.vs)
    setResistors(p.rs.map((r, i) => ({ id: i + 1, r })))
    setPresetKey(p.key)
  }

  const activePreset = PRESETS.find((p) => p.key === presetKey) ?? null

  const setResistorValue = (idx: number, r: number) => {
    setResistors((prev) => prev.map((res, i) => (i === idx ? { ...res, r } : res)))
    setPresetKey('')
  }

  const addResistor = () => {
    if (resistors.length >= 4) return
    resId += 1
    setResistors((prev) => [...prev, { id: resId, r: 220 }])
    setPresetKey('')
  }
  const removeResistor = (idx: number) => {
    if (resistors.length <= 1) return
    setResistors((prev) => prev.filter((_, i) => i !== idx))
    setPresetKey('')
  }

  /* ---------- decoder value ---------- */
  const decValue = (BANDS[b1].digit ?? 0) * 10 + (BANDS[b2].digit ?? 0)
  const decMult = BANDS[mIdx].mult ?? 1
  const decOhms = decValue * decMult
  const decTol = BANDS[tolIdx].tol ?? 5

  const cycleBand = (
    setter: (fn: (v: number) => number) => void,
    len: number
  ) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setter((v) => (v + 1) % len)
    }
  }

  const applyDecoded = () => {
    const clamped = Math.min(Math.max(decOhms, R_MIN), R_MAX)
    setClampNote(
      clamped !== decOhms
        ? `${fmtOhm(decOhms)} sits outside the sandbox range — clamped to ${fmtOhm(clamped)} (slider domain ${fmtOhm(R_MIN)}–${fmtOhm(R_MAX)}).`
        : ''
    )
    setResistorValue(applyTarget, clamped)
  }

  /* ---------- TeX readouts ---------- */
  const reqTex =
    topo === 'series'
      ? `R_{eq}=\\sum R_k=${fmtT(req)}\\;\\Omega`
      : topo === 'parallel'
        ? `R_{eq}=\\left(\\sum_k R_k^{-1}\\right)^{-1}=${fmtT(req)}\\;\\Omega`
        : topo === 'ladder'
          ? `R_{eq}=R_1+\\left(R_2\\parallel R_3\\right)+R_4=${fmtT(req)}\\;\\Omega`
          : `R_{eq}=R_1+R_{bank}=${fmtT(req)}\\;\\Omega`

  const ohmChips = [
    { tex: `V = IR \\;=\\; ${fmtT(vs)} = ${fmtT(it)}\\times${fmtT(req)}`, tone: 'emerald' },
    { tex: `P = VI \\;=\\; ${fmtT(pt)}\\;\\text{W}`, tone: 'teal' },
    { tex: `P = I^2R \\;=\\; ${fmtT(it * it * req)}\\;\\text{W}`, tone: 'amber' },
    { tex: `P = \\frac{V^2}{R} \\;=\\; ${fmtT((vs * vs) / req)}\\;\\text{W}`, tone: 'rose' },
  ] as const

  const chipTone: Record<string, string> = {
    emerald: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-100',
    teal: 'border-teal-500/40 bg-teal-500/10 text-teal-100',
    amber: 'border-amber-500/40 bg-amber-500/10 text-amber-100',
    rose: 'border-rose-500/40 bg-rose-500/10 text-rose-100',
  }

  /* ---------- SVG geometry ---------- */
  const W = 640
  const H = 300
  const B_X = 70
  const TOP = 80
  const BOT = 230

  const roFor = (i: number): string[] => {
    const p = solved?.per[i] ?? { v: 0, i: 0, p: 0 }
    return [fmtV(p.v), fmtA(p.i), fmtW(p.p)]
  }
  const heatFor = (i: number): number => solved?.per[i]?.p ?? 0

  /* series / degenerate ladder diagram */
  const seriesRoutes = useMemo<FlowRoute[]>(() => {
    const n = resistors.length
    const d = `M ${B_X},${TOP} H 570 V ${BOT} H ${B_X}`
    return [{ key: 'loop', d, speed: mainSpeed, dots: Math.min(14, 6 + n * 2) }]
  }, [resistors.length, mainSpeed])

  const seriesXs = (): number[] => {
    const n = resistors.length
    const xs: number[] = []
    for (let i = 0; i < n; i++) xs.push(170 + (360 / n) * (i + 0.5))
    return xs
  }

  /* parallel diagram */
  const parallelRoutes = useMemo<FlowRoute[]>(() => {
    const n = resistors.length
    const xs: number[] = []
    for (let i = 0; i < n; i++) xs.push(180 + (330 / n) * (i + 0.5))
    const routes: FlowRoute[] = [
      { key: 'feed', d: `M ${B_X},${TOP} H 150`, speed: mainSpeed, dots: 3 },
      { key: 'ret', d: `M 150,${BOT} H ${B_X}`, speed: mainSpeed, dots: 3 },
    ]
    resistors.forEach((_, i) => {
      const p = solved?.per[i]
      const sp = p ? clampSpeed(p.i) : 0.18
      routes.push({ key: `br-${i}`, d: `M ${xs[i]},${TOP} V ${BOT}`, speed: sp, dots: 3 })
    })
    return routes
  }, [resistors, solved, mainSpeed])

  const parallelXs = (): number[] => {
    const n = resistors.length
    const xs: number[] = []
    for (let i = 0; i < n; i++) xs.push(180 + (330 / n) * (i + 0.5))
    return xs
  }

  /* ladder diagram (n >= 3) */
  const ladderRoutes = useMemo<FlowRoute[]>(() => {
    const n = resistors.length
    const midCount = n - 2
    const gMid = rs.slice(1, n - 1).reduce((a, r) => a + 1 / r, 0)
    const rMid = midCount ? 1 / gMid : 0
    const iMid = it * rMid
    const routes: FlowRoute[] = [
      { key: 'arm1', d: `M ${B_X},${TOP} H 250`, speed: mainSpeed, dots: 3 },
      { key: 'arm2', d: `M 400,${TOP} H 545 M 545,${TOP} V ${BOT} H ${B_X}`, speed: mainSpeed, dots: 8 },
    ]
    routes.push({ key: 'rungA', d: `M 250,${TOP} H 400`, speed: clampSpeed(iMid / Math.max(rs[1], 1e-9)), dots: 3 })
    if (midCount > 1) {
      routes.push({ key: 'rungB', d: `M 250,${TOP} V 160 H 400 V ${TOP}`, speed: clampSpeed(iMid / Math.max(rs[2], 1e-9)), dots: 4 })
    }
    return routes
  }, [resistors.length, rs, it, mainSpeed])

  /* divider diagram */
  const dividerRoutes = useMemo<FlowRoute[]>(() => {
    const bank = resistors.slice(1)
    const routes: FlowRoute[] = [
      { key: 'src', d: `M ${B_X},${TOP} H 258`, speed: mainSpeed, dots: 4 },
      { key: 'ret', d: `M 545,${BOT} H ${B_X}`, speed: mainSpeed, dots: 4 },
    ]
    const bx = bankXs()
    bank.forEach((_, i) => {
      const p = solved?.per[i + 1]
      const sp = p ? clampSpeed(p.i) : 0.18
      routes.push({ key: `bank-${i}`, d: `M ${bx[i]},${TOP} V ${BOT}`, speed: sp, dots: 3 })
    })
    return routes
    function bankXs(): number[] {
      const n = Math.max(bank.length, 1)
      const xs: number[] = []
      for (let i = 0; i < bank.length; i++) xs.push(330 + (200 / n) * (i + 0.5))
      return xs
    }
  }, [resistors, solved, mainSpeed])

  const divBankXs = (): number[] => {
    const bank = resistors.slice(1)
    const n = Math.max(bank.length, 1)
    const xs: number[] = []
    for (let i = 0; i < bank.length; i++) xs.push(330 + (200 / n) * (i + 0.5))
    return xs
  }

  const routes: FlowRoute[] =
    topo === 'parallel'
      ? parallelRoutes
      : topo === 'ladder' && resistors.length >= 3
        ? ladderRoutes
        : topo === 'divider'
          ? dividerRoutes
          : seriesRoutes

  /* ---------- summary for live region ---------- */
  const summary = `Equivalent resistance ${fmtOhm(req)}. Total current ${fmtA(it)}. Total power ${fmtW(pt)}.`

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay, ease: 'easeOut' as const },
        }

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <BatteryCharging className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">DC Circuit Sandbox</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Electronics Ch 1–2: wire up to four resistors off an adjustable battery, flip between series,
            parallel, ladder and divider topologies, and read every branch with live voltmeters, ammeters
            and a heat glow. Hughes 41–80 · Nilsson 52–116.
          </p>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {summary}
      </p>

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

      {/* controls */}
      <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex min-w-[240px] flex-1 flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex items-center gap-2.5">
            <span className="text-xs text-muted-foreground">Battery</span>
            <Slider
              min={1}
              max={24}
              step={0.5}
              value={[vs]}
              onValueChange={(v) => {
                setVs(v[0] ?? 12)
                setPresetKey('')
              }}
              className="w-40"
              aria-label="Battery voltage in volts"
            />
            <span className="w-16 font-mono text-xs tabular-nums text-emerald-300">{fmtV(vs)}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div
            className="flex items-center gap-1 rounded-lg border border-border bg-muted/30 p-0.5"
            role="group"
            aria-label="Circuit topology"
          >
            {(
              [
                ['series', 'Series'],
                ['parallel', 'Parallel'],
                ['ladder', 'Ladder'],
                ['divider', 'Divider'],
              ] as [Topo, string][]
            ).map(([tk, label]) => (
              <button
                key={tk}
                type="button"
                onClick={() => {
                  setTopo(tk)
                  setPresetKey('')
                }}
                aria-pressed={topo === tk}
                className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                  topo === tk
                    ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              size="sm"
              variant="outline"
              className="h-8 px-2.5"
              onClick={addResistor}
              disabled={resistors.length >= 4}
              aria-label="Add a resistor (up to four)"
            >
              <Plus className="h-3.5 w-3.5" />
              <span className="ml-1 text-xs">Add</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-8 px-2.5"
              onClick={() => removeResistor(resistors.length - 1)}
              disabled={resistors.length <= 1}
              aria-label="Remove the last resistor"
            >
              <Minus className="h-3.5 w-3.5" />
              <span className="ml-1 text-xs">Remove</span>
            </Button>
            <span className="font-mono text-xs tabular-nums text-muted-foreground">
              {resistors.length}/4
            </span>
          </div>
        </div>
      </div>

      {/* circuit diagram */}
      <motion.div {...fade(0.05)} className="mt-3 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full select-none"
          role="img"
          aria-label={`Circuit diagram: ${topo} topology with ${resistors.length} resistor${resistors.length === 1 ? '' : 's'} on a ${fmtV(vs)} battery. Equivalent resistance ${fmtOhm(req)}, total current ${fmtA(it)}.`}
        >
          {/* battery leads (gap where the battery glyph sits) */}
          <path
            d={`M ${B_X},${TOP} V 132 M ${B_X},152 V ${BOT}`}
            className={wire}
            strokeWidth={WIRE_W}
            fill="none"
          />
          <BatteryGlyph x={B_X} cy={142} label={fmtV(vs)} />

          {/* visible frame wires */}
          {topo === 'parallel' ? (
            <>
              <path d={`M ${B_X},${TOP} H 150`} className={wire} strokeWidth={WIRE_W} fill="none" />
              <path d={`M ${B_X},${BOT} H 150`} className={wire} strokeWidth={WIRE_W} fill="none" />
            </>
          ) : topo === 'divider' ? (
            <>
              <path d={`M ${B_X},${TOP} H 560`} className={wire} strokeWidth={WIRE_W} fill="none" />
              <path d={`M ${B_X},${BOT} H 560`} className={wire} strokeWidth={WIRE_W} fill="none" />
            </>
          ) : (
            <path
              d={`M ${B_X},${TOP} H 570 V ${BOT} H ${B_X}`}
              className={wire}
              strokeWidth={WIRE_W}
              fill="none"
            />
          )}

          {topo === 'parallel' ? (
            <ParallelDiagram
              resistors={resistors}
              xs={parallelXs()}
              roFor={roFor}
              heatFor={heatFor}
            />
          ) : topo === 'divider' ? (
            <DividerDiagram
              resistors={resistors}
              solved={solved}
              xs={divBankXs()}
              roFor={roFor}
              heatFor={heatFor}
            />
          ) : topo === 'ladder' && resistors.length >= 3 ? (
            <LadderDiagram resistors={resistors} roFor={roFor} heatFor={heatFor} />
          ) : (
            <SeriesDiagram
              resistors={resistors}
              xs={seriesXs()}
              roFor={roFor}
              heatFor={heatFor}
            />
          )}

          {/* animated current rides on top of the wires and bodies */}
          <CurrentFlow routes={routes} reduce={reduce} idPrefix="dc" />
        </svg>
        <p className="mt-1.5 text-[11px] text-muted-foreground">
          Emerald dots are conventional current — their speed scales with the branch current (Ch 1.2).
          Resistor bodies warm from zinc through amber to rose as dissipation approaches the{' '}
          <span className="font-mono">{RATING_W} W</span> rating.
        </p>
      </motion.div>

      {/* per-resistor controls */}
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {resistors.map((res, i) => {
          const p = solved?.per[i] ?? { v: 0, i: 0, p: 0 }
          const heat = p.p / RATING_W
          const heatCls =
            heat >= 0.85
              ? 'bg-rose-500'
              : heat >= 0.5
                ? 'bg-amber-500'
                : 'bg-emerald-500'
          return (
            <div
              key={res.id}
              className="rounded-xl border border-border bg-background/50 p-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-foreground">
                  R<sub>{i + 1}</sub>
                </span>
                <span className="font-mono text-xs tabular-nums text-emerald-300">{fmtOhm(res.r)}</span>
                <button
                  type="button"
                  onClick={() => removeResistor(i)}
                  disabled={resistors.length <= 1}
                  aria-label={`Remove resistor ${i + 1}`}
                  className="rounded-md p-1 text-muted-foreground transition-colors hover:text-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 disabled:opacity-30"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
              </div>
              <Slider
                min={0}
                max={100}
                step={0.5}
                value={[rToT(res.r)]}
                onValueChange={(v) => setResistorValue(i, tToR(v[0] ?? 0))}
                className="mt-2.5"
                aria-label={`Resistance of resistor ${i + 1}`}
              />
              <div className="mt-2 space-y-0.5 font-mono text-[10.5px] tabular-nums text-muted-foreground">
                <p>
                  <span className="text-emerald-300">{fmtV(p.v)}</span>
                  {' · '}
                  <span className="text-emerald-300">{fmtA(p.i)}</span>
                </p>
                <p className={heat >= 0.85 ? 'text-rose-400' : heat >= 0.5 ? 'text-amber-400' : 'text-teal-300'}>
                  {fmtW(p.p)}
                  {heat >= 1 ? ' — over rating' : heat >= 0.85 ? ' — near rating' : ''}
                </p>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-muted" aria-hidden="true">
                <div
                  className={`h-full rounded-full ${heatCls} transition-[width] duration-300`}
                  style={{ width: `${Math.min(heat, 1) * 100}%` }}
                />
              </div>
              <p className="mt-1 text-[9.5px] text-muted-foreground">
                {Math.round(Math.min(heat, 1.5) * 100)}% of {RATING_W} W rating
              </p>
            </div>
          )
        })}
      </div>

      {/* Ohm's law panel */}
      <motion.div {...fade(0.1)} className="mt-4 rounded-xl border border-border bg-background/50 p-3 sm:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <Zap className="h-4 w-4 text-amber-400" />
          <h4 className="text-sm font-semibold text-foreground">Ohm’s law panel — live numbers</h4>
          <span className="rounded-lg border border-border bg-muted/30 px-2 py-0.5 font-mono text-[10px] tabular-nums text-muted-foreground">
            {topo === 'divider' ? `V_out = ${fmtV(solved?.vout ?? 0)}` : `R_eq = ${fmtOhm(req)}`}
          </span>
        </div>
        <div className="mt-1.5 overflow-x-auto text-sm text-foreground">
          <TeX display tex={reqTex} />
        </div>
        <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {ohmChips.map((c) => (
            <div
              key={c.tex}
              className={`rounded-xl border px-3 py-2 text-sm ${chipTone[c.tone]}`}
            >
              <TeX tex={c.tex} />
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
          All four power forms must agree — they are the same physics with Ohm’s law substituted in
          (Ch 1.4 and Ch 2.5). For the divider topology the chips describe the whole R₁ + bank string.
        </p>
      </motion.div>

      {/* colour code decoder */}
      <motion.div {...fade(0.15)} className="mt-4 rounded-xl border border-border bg-background/50 p-3 sm:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-sm font-semibold text-foreground">Resistor colour-code decoder</h4>
          <span className="text-[11px] text-muted-foreground">
            (Ch 2.1 — click a band to cycle its colour)
          </span>
          <div className="ml-auto flex items-center gap-1">
            {resistors.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setApplyTarget(i)}
                aria-pressed={applyTarget === i}
                className={`rounded-md border px-2 py-0.5 font-mono text-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                  applyTarget === i
                    ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300'
                    : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
                }`}
              >
                R{i + 1}
              </button>
            ))}
            <Button
              size="sm"
              className="ml-1 h-7 bg-emerald-600 px-2.5 text-xs hover:bg-emerald-500"
              onClick={applyDecoded}
            >
              Apply value
            </Button>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-center">
          <svg
            viewBox="0 0 420 120"
            className="w-full max-w-[420px] select-none"
            role="img"
            aria-label={`Four-band resistor with band one ${BANDS[b1].name}, band two ${BANDS[b2].name}, multiplier ${BANDS[mIdx].name}, tolerance ${BANDS[tolIdx].name}. Activate a band to change its colour.`}
          >
            <line x1={8} y1={60} x2={52} y2={60} className="stroke-zinc-500" strokeWidth={2} />
            <line x1={368} y1={60} x2={412} y2={60} className="stroke-zinc-500" strokeWidth={2} />
            <rect x={52} y={28} width={316} height={64} rx={16} className="fill-stone-300" />
            {(
              [
                [100, b1, setB1, 10, 'Band 1 (first digit)'],
                [140, b2, setB2, 10, 'Band 2 (second digit)'],
                [180, mIdx, setMIdx, 12, 'Band 3 (multiplier)'],
                [318, tolIdx, setTolIdx, 4, 'Band 4 (tolerance)'],
              ] as [number, number, (fn: (v: number) => number) => void, number, string][]
            ).map(([bx, val, setter, len, label]) => (
              <rect
                key={label}
                x={bx}
                y={28}
                width={17}
                height={64}
                fill={BANDS[val].hex}
                className="cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
                role="button"
                tabIndex={0}
                aria-label={`${label}: currently ${BANDS[val].name}. Activate to cycle to the next colour.`}
                onClick={() => setter((v) => (v + 1) % len)}
                onKeyDown={cycleBand(setter, len)}
              />
            ))}
          </svg>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-xs tabular-nums text-muted-foreground">
              {BANDS[b1].name} · {BANDS[b2].name} · {BANDS[mIdx].name} · {BANDS[tolIdx].name}
            </p>
            <div className="mt-1 text-sm text-emerald-200">
              <TeX
                tex={`R = (${BANDS[b1].digit}\\times 10 + ${BANDS[b2].digit})\\times ${fmtT(decMult)}\\;\\Omega = ${fmtT(decOhms)}\\;\\Omega\\;\\pm ${decTol}\\%`}
              />
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
              Two significant digits, a power-of-ten multiplier, and a tolerance band — that is the whole
              4-band code. Gold and silver only ever appear as multiplier or tolerance.
            </p>
            {clampNote && <p className="mt-1.5 text-[11px] text-amber-400">{clampNote}</p>}
          </div>
        </div>
      </motion.div>

      {/* totals */}
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <StatChip label="R_eq" value={fmtOhm(req)} tone="border-emerald-500/40 bg-emerald-500/5 text-emerald-200" />
        <StatChip label="I total" value={fmtA(it)} tone="border-teal-500/40 bg-teal-500/5 text-teal-200" />
        <StatChip label="P total" value={fmtW(pt)} tone="border-amber-500/40 bg-amber-500/5 text-amber-200" />
        <StatChip
          label={topo === 'divider' ? 'V out' : 'Battery'}
          value={topo === 'divider' ? fmtV(solved?.vout ?? 0) : fmtV(vs)}
          tone="border-rose-500/40 bg-rose-500/5 text-rose-200"
        />
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          load <span className="font-medium text-foreground">Divider</span> and read V_out ≈ 9.0 V, then
          press <span className="font-medium text-foreground">Add</span> twice — each new branch is another
          load in parallel with the output and the voltage sags (this is why voltmeters are built with
          megohm inputs, Ch 2.4). Next set both resistors to the 10 Ω floor in Divider mode and push the
          battery to 24 V: each body dumps 14.4 W into a 0.5 W part and flares rose — now drop the battery
          to 12 V and watch the power quarter itself, the V² law of Ch 2.5. Finally load{' '}
          <span className="font-medium text-foreground">Series chain</span>, note R_eq = 1.12 kΩ, then flip
          to <span className="font-medium text-foreground">Parallel</span> with the same four resistors —
          R_eq collapses to 131 Ω because conductances, not resistances, are what add.
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Diagram bodies                                                     */
/* ------------------------------------------------------------------ */

function SeriesDiagram({
  resistors,
  xs,
  roFor,
  heatFor,
}: {
  resistors: Resistor[]
  xs: number[]
  roFor: (i: number) => string[]
  heatFor: (i: number) => number
}) {
  return (
    <g>
      {resistors.map((res, i) => (
        <g key={res.id}>
          {i > 0 && (
            <line
              x1={xs[i - 1] + 23}
              y1={80}
              x2={xs[i] - 23}
              y2={80}
              className={wire}
              strokeWidth={WIRE_W}
            />
          )}
          <line x1={xs[i] - 23} y1={80} x2={xs[i] + 23} y2={80} className="stroke-zinc-700" strokeWidth={WIRE_W} />
        </g>
      ))}
      {resistors.map((res, i) => (
        <ResGlyph
          key={res.id}
          cx={xs[i]}
          cy={80}
          name={`R${i + 1}`}
          value={fmtOhm(res.r)}
          ros={roFor(i)}
          heat={heatFor(i)}
        />
      ))}
    </g>
  )
}

function ParallelDiagram({
  resistors,
  xs,
  roFor,
  heatFor,
}: {
  resistors: Resistor[]
  xs: number[]
  roFor: (i: number) => string[]
  heatFor: (i: number) => number
}) {
  return (
    <g>
      <line x1={150} y1={80} x2={560} y2={80} className={wire} strokeWidth={WIRE_W} />
      <line x1={150} y1={230} x2={560} y2={230} className={wire} strokeWidth={WIRE_W} />
      {xs.map((x) => (
        <line key={x} x1={x} y1={80} x2={x} y2={230} className="stroke-zinc-700" strokeWidth={WIRE_W} />
      ))}
      {resistors.map((res, i) => (
        <ResGlyph
          key={res.id}
          cx={xs[i]}
          cy={155}
          vertical
          roY={246}
          name={`R${i + 1}`}
          value={fmtOhm(res.r)}
          ros={roFor(i)}
          heat={heatFor(i)}
        />
      ))}
      <text x={553} y={70} fontSize={10} textAnchor="end" className="fill-zinc-500 font-mono">
        node a
      </text>
      <text x={553} y={247} fontSize={10} textAnchor="end" className="fill-zinc-500 font-mono">
        node b
      </text>
    </g>
  )
}

function LadderDiagram({
  resistors,
  roFor,
  heatFor,
}: {
  resistors: Resistor[]
  roFor: (i: number) => string[]
  heatFor: (i: number) => number
}) {
  const n = resistors.length
  const midCount = n - 2
  return (
    <g>
      <line x1={250} y1={80} x2={400} y2={80} className="stroke-zinc-700" strokeWidth={WIRE_W} />
      {midCount > 1 && (
        <>
          <path d="M 250,80 V 160 H 400 V 80" className={wire} strokeWidth={WIRE_W} fill="none" />
          <line x1={253} y1={160} x2={397} y2={160} className="stroke-zinc-700" strokeWidth={WIRE_W} />
        </>
      )}
      <circle cx={250} cy={80} r={3} className="fill-emerald-400" />
      <circle cx={400} cy={80} r={3} className="fill-emerald-400" />
      <text x={250} y={68} fontSize={10} textAnchor="middle" className="fill-zinc-500 font-mono">
        node a
      </text>
      <text x={400} y={68} fontSize={10} textAnchor="middle" className="fill-zinc-500 font-mono">
        node b
      </text>
      {/* R1 and R4 straddle the middle group on the top wire */}
      <ResGlyph cx={185} cy={80} name="R1" value={fmtOhm(resistors[0].r)} ros={roFor(0)} heat={heatFor(0)} />
      <ResGlyph cx={325} cy={80} name="R2" value={fmtOhm(resistors[1].r)} ros={roFor(1)} heat={heatFor(1)} />
      {midCount > 1 && (
        <ResGlyph cx={345} cy={160} name="R3" value={fmtOhm(resistors[2].r)} ros={roFor(2)} heat={heatFor(2)} />
      )}
      <ResGlyph cx={470} cy={80} name={`R${n}`} value={fmtOhm(resistors[n - 1].r)} ros={roFor(n - 1)} heat={heatFor(n - 1)} />
      <line x1={545} y1={80} x2={545} y2={230} className={wire} strokeWidth={WIRE_W} />
    </g>
  )
}

function DividerDiagram({
  resistors,
  solved,
  xs,
  roFor,
  heatFor,
}: {
  resistors: Resistor[]
  solved: Solved | null
  xs: number[]
  roFor: (i: number) => string[]
  heatFor: (i: number) => number
}) {
  const vout = solved?.vout ?? 0
  return (
    <g>
      <line x1={258} y1={80} x2={560} y2={80} className={wire} strokeWidth={WIRE_W} />
      <line x1={150} y1={230} x2={560} y2={230} className={wire} strokeWidth={WIRE_W} />
      {xs.map((x) => (
        <line key={x} x1={x} y1={80} x2={x} y2={230} className="stroke-zinc-700" strokeWidth={WIRE_W} />
      ))}
      <ResGlyph cx={185} cy={80} name="R1" value={fmtOhm(resistors[0].r)} ros={roFor(0)} heat={heatFor(0)} />
      {resistors.slice(1).map((res, i) => (
        <ResGlyph
          key={res.id}
          cx={xs[i]}
          cy={155}
          vertical
          roY={246}
          name={`R${i + 2}`}
          value={fmtOhm(res.r)}
          ros={roFor(i + 1)}
          heat={heatFor(i + 1)}
        />
      ))}
      {/* output terminals */}
      <circle cx={258} cy={80} r={4} className="fill-amber-400" stroke="#18181b" strokeWidth={1} />
      <circle cx={258} cy={230} r={4} className="fill-amber-400" stroke="#18181b" strokeWidth={1} />
      <text x={258} y={64} fontSize={11} textAnchor="middle" className="fill-amber-300 font-mono">
        A
      </text>
      <text x={258} y={252} fontSize={11} textAnchor="middle" className="fill-amber-300 font-mono">
        B
      </text>
      <line x1={268} y1={80} x2={268} y2={230} className="stroke-amber-400/40" strokeWidth={1} strokeDasharray="4 4" />
      <text x={276} y={158} fontSize={12} className="fill-amber-300 font-mono">
        V_out = {fmtV(vout)}
      </text>
    </g>
  )
}

function StatChip({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className={`rounded-xl border px-3 py-2 ${tone}`}>
      <p className="text-[10px] font-semibold uppercase tracking-wider opacity-80">{label}</p>
      <p className="mt-0.5 font-mono text-sm tabular-nums">{value}</p>
    </div>
  )
}
