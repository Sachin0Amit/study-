'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Lightbulb, Pause, Play, Waves } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Engineering formatting + animation clock                           */
/* ------------------------------------------------------------------ */

const SI: readonly [number, string][] = [
  [1e9, 'G'],
  [1e6, 'M'],
  [1e3, 'k'],
  [1, ''],
  [1e-3, 'm'],
  [1e-6, 'µ'],
  [1e-9, 'n'],
  [1e-12, 'p'],
]

function fmtEng(v: number, unit: string, digits = 2): string {
  const a = Math.abs(v)
  if (!Number.isFinite(v)) return '—'
  if (a === 0) return `0 ${unit}`
  for (const [s, sfx] of SI) {
    if (a >= s * 0.9999) return `${(v / s).toFixed(digits)} ${sfx}${unit}`
  }
  return `${(v / 1e-12).toFixed(digits)} p${unit}`
}

function useClock(run: boolean, reduce: boolean | null): number {
  const [t, setT] = useState(0)
  useEffect(() => {
    if (!run || reduce) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      setT((now - start) / 1000)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, reduce])
  return t
}

/* ------------------------------------------------------------------ */
/*  Transfer-function engine                                           */
/* ------------------------------------------------------------------ */

type Topo = 'lp' | 'hp' | 'bp' | 'notch' | 'sk'

interface Params {
  R: number
  L: number
  C: number
  K: number
}

interface TF {
  f0: number
  Q: number
  bw: number | null
  magDb: (f: number) => number
  phaseDeg: (f: number) => number
  asymDb: (f: number) => number
  asymSpikesAtF0: boolean
}

const TWO_PI = 2 * Math.PI
const DEG = 180 / Math.PI

function buildTF(topo: Topo, p: Params): TF {
  const { R, L, C, K } = p
  if (topo === 'lp') {
    const f0 = 1 / (TWO_PI * R * C)
    return {
      f0,
      Q: 0.5,
      bw: null,
      magDb: (f) => {
        const x = f / f0
        return -10 * Math.log10(1 + x * x)
      },
      phaseDeg: (f) => -Math.atan(f / f0) * DEG,
      asymDb: (f) => (f <= f0 ? 0 : -20 * Math.log10(f / f0)),
      asymSpikesAtF0: false,
    }
  }
  if (topo === 'hp') {
    const f0 = 1 / (TWO_PI * R * C)
    return {
      f0,
      Q: 0.5,
      bw: null,
      magDb: (f) => {
        const x = f / f0
        return 10 * Math.log10(x * x / (1 + x * x))
      },
      phaseDeg: (f) => 90 - Math.atan(f / f0) * DEG,
      asymDb: (f) => (f >= f0 ? 0 : 20 * Math.log10(Math.max(f, f0 / 1000) / f0)),
      asymSpikesAtF0: false,
    }
  }
  if (topo === 'bp') {
    const f0 = 1 / (TWO_PI * Math.sqrt(L * C))
    const Q = Math.sqrt(L / C) / R
    return {
      f0,
      Q,
      bw: f0 / Q,
      magDb: (f) => {
        const x = f / f0
        const t = Q * (x - 1 / x)
        return -10 * Math.log10(1 + t * t)
      },
      phaseDeg: (f) => {
        const x = f / f0
        return -Math.atan2(Q * (x - 1 / x), 1) * DEG
      },
      asymDb: (f) => {
        const r = Math.sqrt(1 + 1 / (4 * Q * Q))
        const f1 = f0 * (r - 1 / (2 * Q))
        const f2 = f0 * (r + 1 / (2 * Q))
        if (f <= f1) return 20 * Math.log10(Math.max(f, f0 / 1e4) / f1)
        if (f >= f2) return -20 * Math.log10(f / f2)
        return 0
      },
      asymSpikesAtF0: false,
    }
  }
  if (topo === 'notch') {
    const f0 = 1 / (TWO_PI * R * C)
    const Q = 0.25 // passive twin-T
    return {
      f0,
      Q,
      bw: f0 / Q,
      magDb: (f) => {
        const x = f / f0
        const re = 1 - x * x
        return 10 * Math.log10(re * re / (re * re + (x / Q) * (x / Q)))
      },
      phaseDeg: (f) => {
        const x = f / f0
        return -Math.atan2(x / Q, 1 - x * x) * DEG
      },
      asymDb: () => 0,
      asymSpikesAtF0: true,
    }
  }
  // Sallen-Key low-pass, equal R equal C, gain K
  const f0 = 1 / (TWO_PI * R * C)
  const Q = K >= 2.99 ? 60 : 1 / (3 - K)
  return {
    f0,
    Q,
    bw: null,
    magDb: (f) => {
      const x = f / f0
      const re = 1 - x * x
      return -10 * Math.log10(re * re + (x / Q) * (x / Q))
    },
    phaseDeg: (f) => {
      const x = f / f0
      return -Math.atan2(x / Q, 1 - x * x) * DEG
    },
    asymDb: (f) => (f <= f0 ? 0 : -40 * Math.log10(f / f0)),
    asymSpikesAtF0: false,
  }
}

/* ------------------------------------------------------------------ */
/*  Topology metadata + presets                                        */
/* ------------------------------------------------------------------ */

const TOPOS: { key: Topo; label: string; hint: string }[] = [
  { key: 'lp', label: 'RC low-pass', hint: 'one pole, −20 dB/dec above f_c' },
  { key: 'hp', label: 'RC high-pass', hint: 'one zero, +20 dB/dec below f_c' },
  { key: 'bp', label: 'RLC bandpass', hint: 'series RLC, output across R' },
  { key: 'notch', label: 'Twin-T notch', hint: 'R-R-2C over C-C-R/2' },
  { key: 'sk', label: 'Sallen-Key 2nd order', hint: 'two poles, Q set by gain K' },
]

interface Preset {
  key: string
  label: string
  topo: Topo
  rExp: number
  lExp: number
  cExp: number
  k: number
  note: string
}

const PRESETS: Preset[] = [
  {
    key: 'audio',
    label: 'Audio low-pass 1 kHz',
    topo: 'lp',
    rExp: Math.log10(1590),
    lExp: -4,
    cExp: -7,
    k: 1,
    note: 'R = 1.59 kΩ, C = 100 nF — the classic one-pole tone control knee at 1 kHz, −3 dB and −45° exactly on the corner.',
  },
  {
    key: 'am',
    label: 'AM bandpass (Q = 10)',
    topo: 'bp',
    rExp: Math.log10(35),
    lExp: Math.log10(122e-6),
    cExp: -9,
    k: 1,
    note: 'L = 122 µH, C = 1 nF, R = 35 Ω — a series-resonant IF selector at 455 kHz with Q = 10, bandwidth ≈ 45.5 kHz.',
  },
  {
    key: 'hum',
    label: 'Notch at 60 Hz',
    topo: 'notch',
    rExp: Math.log10(2650),
    lExp: -4,
    cExp: -6,
    k: 1,
    note: 'Twin-T with R = 2.65 kΩ, C = 1 µF nulls mains hum at 60 Hz. The passive null is broad (Q = ¼) — real designs add feedback to sharpen it.',
  },
  {
    key: 'butter',
    label: 'Sallen-Key Butterworth',
    topo: 'sk',
    rExp: 3,
    lExp: -4,
    cExp: -7,
    k: 1.586,
    note: 'Equal R, equal C with K = 1.586 gives Q = 1/√2 — the maximally flat Butterworth corner, −40 dB/dec beyond f_c.',
  },
]

/* ------------------------------------------------------------------ */
/*  Schematic primitives                                               */
/* ------------------------------------------------------------------ */

const S = 'stroke-zinc-400/90'
const SW = 1.6

function Wire({ x1, y1, x2, y2, hot = false }: { x1: number; y1: number; x2: number; y2: number; hot?: boolean }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className={hot ? 'stroke-emerald-400' : S}
      strokeWidth={SW}
      strokeLinecap="round"
    />
  )
}

function Resistor({ x, y, len, horiz }: { x: number; y: number; len: number; horiz: boolean }) {
  const n = 6
  const a = 4.5
  const lead = 5
  const body = len - 2 * lead
  let d = `M ${x} ${y} `
  const ux = horiz ? 1 : 0
  const uy = horiz ? 0 : 1
  d += `l ${ux * lead} ${uy * lead} `
  const seg = body / n
  for (let i = 0; i < n; i++) {
    const up = i % 2 === 0 ? -1 : 1
    if (horiz) d += `l ${seg / 2} ${up * a} l ${seg / 2} ${-up * a} `
    else d += `l ${up * a} ${seg / 2} l ${-up * a} ${seg / 2} `
  }
  d += `L ${x + ux * len} ${y + uy * len}`
  return <path d={d} fill="none" className={S} strokeWidth={SW} strokeLinejoin="round" />
}

function Capacitor({ x, y, horiz }: { x: number; y: number; horiz: boolean }) {
  // wire runs through (x,y); plates straddle the gap at the center
  return (
    <g className={S} strokeWidth={2.2} strokeLinecap="round">
      {horiz ? (
        <>
          <line x1={x - 3.5} y1={y - 8} x2={x - 3.5} y2={y + 8} />
          <line x1={x + 3.5} y1={y - 8} x2={x + 3.5} y2={y + 8} />
        </>
      ) : (
        <>
          <line x1={x - 8} y1={y - 3.5} x2={x + 8} y2={y - 3.5} />
          <line x1={x - 8} y1={y + 3.5} x2={x + 8} y2={y + 3.5} />
        </>
      )}
    </g>
  )
}

function Inductor({ x, y, len, horiz }: { x: number; y: number; len: number; horiz: boolean }) {
  const n = 4
  const r = len / (2 * n)
  let d = `M ${x} ${y} `
  for (let i = 0; i < n; i++) {
    if (horiz) d += `a ${r} ${r} 0 0 1 ${2 * r} 0 `
    else d += `a ${r} ${r} 0 0 1 0 ${2 * r} `
  }
  return <path d={d} fill="none" className={S} strokeWidth={SW} />
}

function Ground({ x, y }: { x: number; y: number }) {
  return (
    <g className={S} strokeWidth={SW} strokeLinecap="round">
      <line x1={x - 8} y1={y} x2={x + 8} y2={y} />
      <line x1={x - 5} y1={y + 3.5} x2={x + 5} y2={y + 3.5} />
      <line x1={x - 2} y1={y + 7} x2={x + 2} y2={y + 7} />
    </g>
  )
}

function Source({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={11} fill="none" className={S} strokeWidth={SW} />
      <path d={`M ${x - 5.5} ${y} q 2.75 -6 5.5 0 q 2.75 6 5.5 0`} fill="none" className="stroke-emerald-400" strokeWidth={1.5} />
    </g>
  )
}

function Term({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={3.4} fill="none" className="stroke-amber-400" strokeWidth={1.6} />
      <text x={x + 8} y={y + 3.5} fontSize={10} className="fill-amber-300/90 font-mono">
        {label}
      </text>
    </g>
  )
}

function CompLabel({ x, y, name, value }: { x: number; y: number; name: string; value: string }) {
  return (
    <text x={x} y={y} fontSize={10} textAnchor="middle" className="fill-zinc-400 font-mono">
      <tspan className="fill-zinc-300">{name}</tspan>
      <tspan x={x} dy={11} className="fill-emerald-400">{value}</tspan>
    </text>
  )
}

/* ------------------------------------------------------------------ */
/*  Schematic per topology                                             */
/* ------------------------------------------------------------------ */

function Schematic({ topo, p }: { topo: Topo; p: Params }) {
  const r = fmtEng(p.R, 'Ω', 1)
  const c = fmtEng(p.C, 'F', 1)
  const l = fmtEng(p.L, 'H', 1)
  if (topo === 'lp') {
    return (
      <svg viewBox="0 0 340 190" className="w-full" role="img" aria-label="RC low-pass schematic">
        <Source x={30} y={90} />
        <Wire x1={41} y1={90} x2={60} y2={90} />
        <Resistor x={60} y={90} len={80} horiz />
        <Wire x1={140} y1={90} x2={255} y2={90} />
        <Capacitor x={195} y={90} horiz />
        <Wire x1={195} y1={90} x2={195} y2={128} />
        <Capacitor x={195} y={128} horiz={false} />
        <Wire x1={195} y1={163} x2={195} y2={168} />
        <Ground x={195} y={168} />
        <Term x={255} y={90} label="v_out" />
        <CompLabel x={100} y={62} name="R" value={r} />
        <CompLabel x={195} y={158} name="C" value={c} />
        <text x={30} y={128} fontSize={10} className="fill-zinc-400 font-mono" textAnchor="middle">v_in</text>
        <text x={170} y={40} fontSize={9.5} className="fill-zinc-500">1st order — shunt C, series R</text>
      </svg>
    )
  }
  if (topo === 'hp') {
    return (
      <svg viewBox="0 0 340 190" className="w-full" role="img" aria-label="RC high-pass schematic">
        <Source x={30} y={90} />
        <Wire x1={41} y1={90} x2={60} y2={90} />
        <Capacitor x={100} y={90} horiz />
        <Wire x1={60} y1={90} x2={140} y2={90} />
        <Wire x1={140} y1={90} x2={255} y2={90} />
        <Wire x1={195} y1={90} x2={195} y2={128} />
        <Resistor x={195} y={128} len={36} horiz={false} />
        <Wire x1={195} y1={164} x2={195} y2={168} />
        <Ground x={195} y={168} />
        <Term x={255} y={90} label="v_out" />
        <CompLabel x={100} y={62} name="C" value={c} />
        <CompLabel x={230} y={148} name="R" value={r} />
        <text x={30} y={128} fontSize={10} className="fill-zinc-400 font-mono" textAnchor="middle">v_in</text>
        <text x={170} y={40} fontSize={9.5} className="fill-zinc-500">series C blocks DC, shunt R sets f_c</text>
      </svg>
    )
  }
  if (topo === 'bp') {
    return (
      <svg viewBox="0 0 340 190" className="w-full" role="img" aria-label="Series RLC bandpass schematic">
        <Source x={28} y={70} />
        <Wire x1={39} y1={70} x2={55} y2={70} />
        <Capacitor x={75} y={70} horiz />
        <Wire x1={55} y1={70} x2={95} y2={70} />
        <Inductor x={95} y={70} len={64} horiz />
        <Wire x1={159} y1={70} x2={215} y2={70} />
        <Wire x1={175} y1={70} x2={175} y2={100} />
        <Resistor x={175} y={100} len={40} horiz={false} />
        <Wire x1={175} y1={140} x2={175} y2={150} />
        <Ground x={175} y={150} />
        <Term x={215} y={70} label="v_out" />
        <CompLabel x={75} y={42} name="C" value={c} />
        <CompLabel x={127} y={42} name="L" value={l} />
        <CompLabel x={212} y={122} name="R" value={r} />
        <text x={28} y={106} fontSize={10} className="fill-zinc-400 font-mono" textAnchor="middle">v_in</text>
        <text x={170} y={24} fontSize={9.5} className="fill-zinc-500">series L–C, output across R: bandpass</text>
      </svg>
    )
  }
  if (topo === 'notch') {
    return (
      <svg viewBox="0 0 340 200" className="w-full" role="img" aria-label="Twin-T notch schematic">
        <Source x={30} y={66} />
        <Wire x1={41} y1={66} x2={48} y2={66} />
        {/* left bus feeding both rails */}
        <Wire x1={48} y1={40} x2={48} y2={92} />
        <Wire x1={48} y1={40} x2={62} y2={40} />
        <Wire x1={48} y1={92} x2={62} y2={92} />
        {/* top T: R — R with 2C shunt from the midpoint */}
        <Resistor x={62} y={40} len={44} horiz />
        <Wire x1={106} y1={40} x2={128} y2={40} />
        <Resistor x={128} y={40} len={44} horiz />
        <Wire x1={172} y1={40} x2={240} y2={40} />
        <circle cx={106} cy={40} r={2.6} className="fill-zinc-400" />
        {/* bottom T: C — C with R/2 shunt from the midpoint (offset to x=150 to avoid the top shunt) */}
        <Capacitor x={80} y={92} horiz />
        <Wire x1={62} y1={92} x2={150} y2={92} />
        <Capacitor x={116} y={92} horiz />
        <circle cx={150} cy={92} r={2.6} className="fill-zinc-400" />
        <Wire x1={150} y1={92} x2={184} y2={92} />
        <Capacitor x={172} y={92} horiz />
        <Wire x1={184} y1={92} x2={240} y2={92} />
        {/* top shunt 2C: hops over the bottom rail on its way to ground */}
        <Wire x1={106} y1={40} x2={106} y2={84} />
        <path d="M 106 84 a 8 8 0 0 0 0 16" fill="none" className={S} strokeWidth={SW} />
        <Wire x1={106} y1={100} x2={106} y2={110} />
        <Capacitor x={106} y={118} horiz={false} />
        <Wire x1={106} y1={126} x2={106} y2={140} />
        <Ground x={106} y={140} />
        {/* bottom shunt R/2 */}
        <Wire x1={150} y1={92} x2={150} y2={100} />
        <Resistor x={150} y={100} len={32} horiz={false} />
        <Wire x1={150} y1={132} x2={150} y2={140} />
        <Ground x={150} y={140} />
        {/* output bus */}
        <Wire x1={240} y1={40} x2={240} y2={92} />
        <Term x={240} y={66} label="v_out" />
        <CompLabel x={84} y={20} name="R" value={r} />
        <CompLabel x={150} y={20} name="R" value={r} />
        <CompLabel x={80} y={116} name="C" value={c} />
        <CompLabel x={120} y={116} name="C" value={c} />
        <CompLabel x={130} y={160} name="2C" value={fmtEng(2 * p.C, 'F', 1)} />
        <CompLabel x={178} y={148} name="R/2" value={fmtEng(p.R / 2, 'Ω', 1)} />
        <text x={30} y={100} fontSize={10} className="fill-zinc-400 font-mono" textAnchor="middle">v_in</text>
        <text x={170} y={186} fontSize={9.5} className="fill-zinc-500">both T-branches null at f₀ = 1/2πRC</text>
      </svg>
    )
  }
  // Sallen-Key
  return (
    <svg viewBox="0 0 340 200" className="w-full" role="img" aria-label="Sallen-Key low-pass schematic">
      <Source x={26} y={60} />
      <Wire x1={37} y1={60} x2={52} y2={60} />
      <Resistor x={52} y={60} len={44} horiz />
      <Wire x1={96} y1={60} x2={106} y2={60} />
      <Resistor x={106} y={60} len={44} horiz />
      <Wire x1={150} y1={60} x2={196} y2={60} />
      {/* C1 from node1 across to the output node */}
      <Wire x1={106} y1={60} x2={106} y2={80} />
      <Wire x1={106} y1={80} x2={164} y2={80} />
      <Capacitor x={180} y={80} horiz />
      <Wire x1={196} y1={80} x2={268} y2={80} />
      {/* C2 from node2 to ground */}
      <Wire x1={150} y1={60} x2={150} y2={96} />
      <Capacitor x={150} y={104} horiz={false} />
      <Wire x1={150} y1={112} x2={150} y2={124} />
      <Ground x={150} y={124} />
      <polygon points="196,44 196,76 226,60" fill="none" className={S} strokeWidth={SW} />
      <text x={202} y={56} fontSize={9} className="fill-zinc-300 font-mono">+</text>
      <text x={202} y={72} fontSize={9} className="fill-zinc-300 font-mono">−</text>
      <Wire x1={226} y1={60} x2={268} y2={60} />
      {/* output rail down to the gain divider */}
      <Wire x1={268} y1={60} x2={268} y2={112} />
      <Resistor x={268} y={112} len={36} horiz={false} />
      <Wire x1={196} y1={76} x2={196} y2={148} />
      <Wire x1={196} y1={148} x2={268} y2={148} />
      <circle cx={268} cy={148} r={2.6} className="fill-zinc-400" />
      <Resistor x={268} y={158} len={32} horiz={false} />
      <Wire x1={268} y1={190} x2={268} y2={196} />
      <Ground x={268} y={196} />
      <Term x={268} y={60} label="v_out" />
      <CompLabel x={74} y={34} name="R" value={r} />
      <CompLabel x={128} y={34} name="R" value={r} />
      <CompLabel x={180} y={100} name="C₁" value={c} />
      <CompLabel x={130} y={140} name="C₂" value={c} />
      <CompLabel x={196} y={128} name="R_f" value={fmtEng(2 * p.R, 'Ω', 1)} />
      <CompLabel x={300} y={178} name="R_g" value={fmtEng((2 * p.R) / Math.max(p.K - 1, 0.02), 'Ω', 1)} />
      <text x={170} y={16} fontSize={9.5} className="fill-zinc-500">K = 1 + Rf/Rg sets Q = 1/(3−K)</text>
      <text x={26} y={96} fontSize={10} className="fill-zinc-400 font-mono" textAnchor="middle">v_in</text>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Bode plot geometry                                                 */
/* ------------------------------------------------------------------ */

const W = 620
const MG_H = 250
const PH_H = 180
const PL = 52
const PRG = 16
const PT = 14
const PB = 26
const PW2 = W - PL - PRG

function pathFrom(pts: (readonly [number, number])[]): string {
  let d = ''
  pts.forEach((pt, i) => {
    d += `${i === 0 ? 'M' : 'L'} ${pt[0].toFixed(1)} ${pt[1].toFixed(1)} `
  })
  return d
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FilterLab() {
  const reduce = useReducedMotion()
  const [topo, setTopo] = useState<Topo>('lp')
  const [rExp, setRExp] = useState(Math.log10(1590))
  const [lExp, setLExp] = useState(Math.log10(122e-6))
  const [cExp, setCExp] = useState(-7)
  const [k, setK] = useState(1)
  const [sineOn, setSineOn] = useState(false)
  const [testRatio, setTestRatio] = useState(0)
  const [note, setNote] = useState('')
  const [dragging, setDragging] = useState(false)
  const plotRef = useRef<SVGSVGElement | null>(null)

  const p: Params = useMemo(
    () => ({ R: 10 ** rExp, L: 10 ** lExp, C: 10 ** cExp, K: k }),
    [rExp, lExp, cExp, k]
  )
  const tf = useMemo(() => buildTF(topo, p), [topo, p])

  const t = useClock(sineOn, reduce)

  /* ---------- Bode axes ---------- */
  const LX0 = Math.log10(tf.f0) - 2
  const LX1 = Math.log10(tf.f0) + 2
  const fx = (f: number): number => PL + ((Math.log10(f) - LX0) / (LX1 - LX0)) * PW2
  const xf = (px: number): number => 10 ** (LX0 + ((px - PL) / PW2) * (LX1 - LX0))

  const freqs = useMemo(() => {
    const arr: number[] = []
    for (let i = 0; i <= 260; i++) arr.push(10 ** (LX0 + (i / 260) * (LX1 - LX0)))
    arr.push(tf.f0 * 0.999, tf.f0 * 1.001)
    return arr.sort((a, b) => a - b)
  }, [LX0, LX1, tf.f0])

  const mags = freqs.map((f) => tf.magDb(f))
  const peak = Math.max(...mags)
  const floor = Math.min(...mags)
  const hi = Math.min(24, Math.ceil((peak > 1 ? peak + 6 : 6) / 6) * 6)
  const lo = Math.max(-64, Math.floor((floor - 6) / 6) * 6)
  const my = (db: number): number => PT + ((hi - db) / (hi - lo)) * (MG_H - PT - PB)
  const py = (deg: number): number => PT + ((95 - deg) / 190) * (PH_H - PT - PB)

  const magPts = freqs.map((f) => [fx(f), Math.max(PT - 8, Math.min(MG_H - PB + 8, my(tf.magDb(f))))] as const)
  const asymPts = freqs.map((f) => [fx(f), Math.max(PT - 8, Math.min(MG_H - PB + 8, my(tf.asymDb(f))))] as const)
  const phasePts = freqs.map((f) => [fx(f), py(tf.phaseDeg(f))] as const)

  /* ---------- drag the knee ---------- */
  const setFcByKnee = (f: number) => {
    const clamped = Math.min(Math.max(f, 10 ** LX0), 10 ** LX1)
    if (topo === 'bp') {
      const c = 1 / ((TWO_PI * clamped) ** 2 * p.L)
      setCExp(Math.min(-5, Math.max(-9, Math.log10(c))))
    } else {
      const c = 1 / (TWO_PI * clamped * p.R)
      setCExp(Math.min(-5, Math.max(-9, Math.log10(c))))
    }
  }
  const freqFromPointer = (e: React.PointerEvent<SVGSVGElement>): number | null => {
    const svg = plotRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    const px = ((e.clientX - rect.left) / rect.width) * W
    if (px < PL - 6 || px > W - PRG + 6) return null
    return xf(Math.min(Math.max(px, PL), W - PRG))
  }

  /* ---------- sine test ---------- */
  const testF = tf.f0 * 10 ** testRatio
  const gainLin = 10 ** (tf.magDb(testF) / 20)
  const phaseAt = tf.phaseDeg(testF)
  const SW_W = 560
  const SW_H = 168
  const cycles = 3
  const inAmp = 34
  const outAmp = Math.min(inAmp * gainLin, 52)
  const sinePath = (which: 'in' | 'out'): string => {
    const pts: (readonly [number, number])[] = []
    const phase = which === 'in' ? 0 : -phaseAt / DEG
    for (let i = 0; i <= 160; i++) {
      const x = (i / 160) * SW_W
      const th = (i / 160) * cycles * TWO_PI + t * TWO_PI * 1.1 + phase
      const a = which === 'in' ? inAmp : outAmp
      pts.push([x, SW_H / 2 - a * Math.sin(th)])
    }
    return pathFrom(pts)
  }

  /* ---------- TeX readouts ---------- */
  const f0Tex =
    topo === 'bp'
      ? `f_0=\\frac{1}{2\\pi\\sqrt{LC}}=${fmtEng(tf.f0, '\\text{Hz}', 2)}`
      : `f_c=\\frac{1}{2\\pi RC}=${fmtEng(tf.f0, '\\text{Hz}', 2)}`
  const qTex =
    topo === 'bp'
      ? `Q=\\frac{1}{R}\\sqrt{\\frac{L}{C}}=${tf.Q.toFixed(2)},\\qquad \\mathrm{BW}=\\frac{f_0}{Q}=${fmtEng(tf.bw ?? 0, '\\text{Hz}', 2)}`
      : topo === 'notch'
        ? `Q=\\frac{1}{4}=0.25\\ (\\text{passive}),\\qquad \\mathrm{BW}=${fmtEng(tf.bw ?? 0, '\\text{Hz}', 2)}`
        : topo === 'sk'
          ? `Q=\\frac{1}{3-K}=${tf.Q.toFixed(2)}`
          : topo === 'lp'
            ? `\\text{slope}=-20\\ \\text{dB/dec},\\quad \\text{one pole}`
            : `\\text{slope}=+20\\ \\text{dB/dec},\\quad \\text{one pole}`
  const kWarn = topo === 'sk' && k >= 2.9

  const applyPreset = (key: string) => {
    const pr = PRESETS.find((x) => x.key === key)
    if (!pr) return
    setTopo(pr.topo)
    setRExp(pr.rExp)
    setLExp(pr.lExp)
    setCExp(pr.cExp)
    setK(pr.k)
    setNote(pr.note)
    setTestRatio(0)
  }

  const kneeY = my(topo === 'hp' ? 0 : 0)

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Waves className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Bode &amp; Filter Designer</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Electronics Ch 16: pick a topology, drag the corner frequency, and watch the true curve peel off its
            asymptotes — then probe it with a live sine wave.
          </p>
        </div>
      </div>

      {/* presets */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Presets</span>
        {PRESETS.map((pr) => (
          <button
            key={pr.key}
            type="button"
            onClick={() => applyPreset(pr.key)}
            className="rounded-lg border border-border bg-muted/30 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
          >
            {pr.label}
          </button>
        ))}
      </div>
      {note && <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{note}</p>}

      {/* topology picker */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {TOPOS.map((tp) => (
          <button
            key={tp.key}
            type="button"
            onClick={() => {
              setTopo(tp.key)
              setNote('')
            }}
            aria-pressed={topo === tp.key}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
              topo === tp.key
                ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300'
                : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
            }`}
          >
            {tp.label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
        {/* left column: schematic + sliders */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <Schematic topo={topo} p={p} />
          </div>

          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground">R</span>
              <Slider min={1} max={5} step={0.01} value={[rExp]} onValueChange={(v) => setRExp(v[0] ?? 3)} className="flex-1" aria-label="Resistance R, logarithmic" />
              <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(p.R, 'Ω', 1)}</span>
            </div>
            {topo === 'bp' && (
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground">L</span>
                <Slider min={-7} max={-2} step={0.01} value={[lExp]} onValueChange={(v) => setLExp(v[0] ?? -4)} className="flex-1" aria-label="Inductance L, logarithmic" />
                <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(p.L, 'H', 1)}</span>
              </div>
            )}
            <div className="mt-2.5 flex items-center gap-2.5">
              <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground">C</span>
              <Slider min={-9} max={-5} step={0.01} value={[cExp]} onValueChange={(v) => setCExp(v[0] ?? -7)} className="flex-1" aria-label="Capacitance C, logarithmic" />
              <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(p.C, 'F', 1)}</span>
            </div>
            {topo === 'sk' && (
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground">K</span>
                <Slider min={1} max={2.98} step={0.005} value={[k]} onValueChange={(v) => setK(v[0] ?? 1)} className="flex-1" aria-label="Amplifier gain K" />
                <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{k.toFixed(3)}</span>
              </div>
            )}
            <div className="mt-3 space-y-1.5 border-t border-border/60 pt-2.5">
              <TeX tex={f0Tex} className="text-xs" />
              <TeX tex={qTex} className="text-xs" />
              {kWarn && (
                <p className="rounded-md border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-300">
                  K → 3 pushes Q → ∞: the poles reach the imaginary axis and the filter becomes an oscillator.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* right column: Bode plots */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Magnitude</span>
              <span className="flex items-center gap-3 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1"><span className="h-0.5 w-4 rounded bg-emerald-400" />|H| true</span>
                <span className="flex items-center gap-1"><span className="h-0.5 w-4 rounded bg-amber-400/80" style={{ borderTop: '2px dashed' }} />asymptotes</span>
              </span>
            </div>
            <svg
              ref={plotRef}
              viewBox={`0 0 ${W} ${MG_H}`}
              className={`w-full ${dragging ? 'cursor-grabbing' : 'cursor-grab'} touch-none`}
              role="img"
              aria-label={`Bode magnitude plot, drag horizontally to move the corner frequency to ${fmtEng(tf.f0, 'Hz')}`}
              onPointerDown={(e) => {
                const f = freqFromPointer(e)
                if (f !== null) {
                  e.currentTarget.setPointerCapture(e.pointerId)
                  setDragging(true)
                  setFcByKnee(f)
                }
              }}
              onPointerMove={(e) => {
                if (dragging) {
                  const f = freqFromPointer(e)
                  if (f !== null) setFcByKnee(f)
                }
              }}
              onPointerUp={() => setDragging(false)}
              onPointerCancel={() => setDragging(false)}
            >
              {/* grid */}
              {Array.from({ length: 5 }, (_, i) => LX0 + i).map((lx) => {
                const f = 10 ** lx
                return (
                  <g key={`gx${lx}`}>
                    <line x1={fx(f)} y1={PT} x2={fx(f)} y2={MG_H - PB} className="stroke-zinc-700/50" strokeWidth={1} />
                    <text x={fx(f)} y={MG_H - 8} fontSize={10} textAnchor="middle" className="fill-zinc-500 font-mono">
                      {fmtEng(f, '', 0)}
                    </text>
                  </g>
                )
              })}
              {Array.from({ length: Math.round((hi - lo) / 12) + 1 }, (_, i) => lo + i * 12)
                .filter((db) => db % 12 === 0 && db > lo && db < hi)
                .map((db) => (
                  <g key={`gy${db}`}>
                    <line x1={PL} y1={my(db)} x2={W - PRG} y2={my(db)} className="stroke-zinc-700/50" strokeWidth={1} />
                    <text x={PL - 6} y={my(db) + 3} fontSize={9.5} textAnchor="end" className="fill-zinc-500 font-mono">
                      {db}
                    </text>
                  </g>
                ))}
              <text x={10} y={PT + 4} fontSize={10} className="fill-zinc-500 font-mono">dB</text>

              {/* asymptotes */}
              <path d={pathFrom(asymPts)} fill="none" className="stroke-amber-400/80" strokeWidth={1.5} strokeDasharray="7 5" />
              {tf.asymSpikesAtF0 && (
                <path
                  d={`M ${fx(tf.f0)} ${my(0)} L ${fx(tf.f0)} ${MG_H - PB}`}
                  className="stroke-amber-400/80"
                  strokeWidth={1.5}
                  strokeDasharray="7 5"
                />
              )}

              {/* true curve */}
              <path d={pathFrom(magPts)} fill="none" className="stroke-emerald-400" strokeWidth={2.2} strokeLinejoin="round" />

              {/* corner marker + handle */}
              <line x1={fx(tf.f0)} y1={PT} x2={fx(tf.f0)} y2={MG_H - PB} className="stroke-amber-400/60" strokeWidth={1} strokeDasharray="4 4" />
              <circle cx={fx(tf.f0)} cy={my(tf.magDb(tf.f0))} r={3.2} className="fill-emerald-300" />
              <text x={fx(tf.f0) + 7} y={my(tf.magDb(tf.f0)) - 6} fontSize={10} className="fill-emerald-300 font-mono">
                {tf.magDb(tf.f0).toFixed(1)} dB
              </text>
              <motion.g
                animate={reduce || dragging ? undefined : { opacity: [1, 0.55, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <circle
                  cx={fx(tf.f0)}
                  cy={kneeY}
                  r={8}
                  className="fill-amber-400/15 stroke-amber-400"
                  strokeWidth={2}
                  style={{ cursor: dragging ? 'grabbing' : 'grab' }}
                >
                  <title>Drag to move the corner frequency</title>
                </circle>
              </motion.g>
              <text x={fx(tf.f0)} y={PT + 10} fontSize={10} textAnchor="middle" className="fill-amber-300 font-mono">
                {topo === 'bp' || topo === 'notch' ? 'f₀' : 'f_c'}
              </text>

              {sineOn && (
                <g>
                  <line x1={fx(testF)} y1={PT} x2={fx(testF)} y2={MG_H - PB} className="stroke-teal-400/70" strokeWidth={1.2} strokeDasharray="3 3" />
                  <text x={fx(testF)} y={MG_H - PB - 4} fontSize={9.5} textAnchor="middle" className="fill-teal-300 font-mono">f_test</text>
                </g>
              )}
            </svg>
          </div>

          {/* phase plot */}
          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phase</span>
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <span className="h-0.5 w-4 rounded bg-teal-400" />arg H
              </span>
            </div>
            <svg viewBox={`0 0 ${W} ${PH_H}`} className="w-full" role="img" aria-label="Bode phase plot with marker at the corner frequency">
              {Array.from({ length: 5 }, (_, i) => LX0 + i).map((lx) => (
                <line key={`pg${lx}`} x1={fx(10 ** lx)} y1={PT} x2={fx(10 ** lx)} y2={PH_H - PB} className="stroke-zinc-700/50" strokeWidth={1} />
              ))}
              {[-90, -45, 0, 45, 90].map((deg) => (
                <g key={`ph${deg}`}>
                  <line
                    x1={PL}
                    y1={py(deg)}
                    x2={W - PRG}
                    y2={py(deg)}
                    className={deg === -45 ? 'stroke-zinc-500/70' : 'stroke-zinc-700/50'}
                    strokeWidth={1}
                    strokeDasharray={deg === -45 ? '5 4' : undefined}
                  />
                  <text x={PL - 6} y={py(deg) + 3} fontSize={9.5} textAnchor="end" className="fill-zinc-500 font-mono">
                    {deg}°
                  </text>
                </g>
              ))}
              <text x={fx(tf.f0) - 6} y={PH_H - 8} fontSize={9.5} textAnchor="end" className="fill-amber-300/90 font-mono">
                {topo === 'bp' || topo === 'notch' ? 'f₀' : 'f_c'}
              </text>
              <line x1={fx(tf.f0)} y1={PT} x2={fx(tf.f0)} y2={PH_H - PB} className="stroke-amber-400/60" strokeWidth={1} strokeDasharray="4 4" />
              <path d={pathFrom(phasePts)} fill="none" className="stroke-teal-400" strokeWidth={2.2} strokeLinejoin="round" />
              <circle cx={fx(tf.f0)} cy={py(phaseAt)} r={4} className="fill-teal-300" />
              <text x={fx(tf.f0) + 8} y={py(phaseAt) - 6} fontSize={10} className="fill-teal-300 font-mono">
                {phaseAt.toFixed(1)}° @ f_c
              </text>
              {sineOn && <line x1={fx(testF)} y1={PT} x2={fx(testF)} y2={PH_H - PB} className="stroke-teal-400/70" strokeWidth={1.2} strokeDasharray="3 3" />}
            </svg>
          </div>
        </div>
      </div>

      {/* sine test mode */}
      <div className="mt-4 rounded-xl border border-border/80 bg-background/50 p-3">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            size="sm"
            variant={sineOn ? 'default' : 'outline'}
            onClick={() => setSineOn((v) => !v)}
            className="h-8"
            aria-pressed={sineOn}
          >
            {sineOn ? <Pause className="h-3.5 w-3.5" aria-hidden /> : <Play className="h-3.5 w-3.5" aria-hidden />}
            <span className="ml-1">{sineOn ? 'Pause sine test' : 'Live sine test'}</span>
          </Button>
          <span className="text-[11px] text-muted-foreground">drive the filter with a test sine and read the gain/phase it actually experiences</span>
          <span className="ml-auto flex items-center gap-3 font-mono text-[11px] tabular-nums">
            <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-emerald-300">
              |H| = {gainLin.toFixed(3)} ({tf.magDb(testF).toFixed(1)} dB)
            </span>
            <span className="rounded-md border border-teal-500/40 bg-teal-500/10 px-2 py-0.5 text-teal-300">
              φ = {phaseAt.toFixed(1)}°
            </span>
            <span className="rounded-md border border-border bg-muted/30 px-2 py-0.5 text-muted-foreground">
              v_out = {fmtEng(gainLin, 'V', 2)} pk
            </span>
          </span>
        </div>
        <div className="mt-2.5 flex items-center gap-2.5">
          <span className="shrink-0 font-mono text-xs text-muted-foreground">f_test</span>
          <Slider
            min={-2}
            max={2}
            step={0.01}
            value={[testRatio]}
            onValueChange={(v) => setTestRatio(v[0] ?? 0)}
            className="flex-1"
            aria-label="Test frequency in decades relative to the corner"
          />
          <span className="w-20 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(testF, 'Hz', 2)}</span>
        </div>
        <div className="mt-2 overflow-hidden rounded-lg border border-border/70 bg-zinc-950/40">
          <svg viewBox={`0 0 ${SW_W} ${SW_H}`} className="block w-full" role="img" aria-label="Oscilloscope showing input sine in gray and output sine in green">
            <line x1={0} y1={SW_H / 2} x2={SW_W} y2={SW_H / 2} className="stroke-zinc-700/60" strokeWidth={1} />
            <path d={sinePath('in')} fill="none" className="stroke-zinc-400/80" strokeWidth={1.6} />
            <path d={sinePath('out')} fill="none" className="stroke-emerald-400" strokeWidth={2.2} />
            <text x={8} y={16} fontSize={10} className="fill-zinc-400 font-mono">v_in</text>
            <text x={8} y={SW_H - 7} fontSize={10} className="fill-emerald-400 font-mono">v_out</text>
          </svg>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          with <span className="font-medium text-foreground">RC low-pass</span> loaded from the audio preset, watch the
          true curve sit within 3 dB of the amber asymptotes until a decade past the knee — then start{' '}
          <span className="font-medium text-foreground">Live sine test</span> and sweep f_test across the corner: the
          output wave visibly shrinks and slides sideways (−45° exactly at f_c). Now switch to{' '}
          <span className="font-medium text-foreground">Sallen-Key</span> and push K from 1.586 toward 3 — the
          Butterworth flatness turns into a resonant spike, and at K = 3 the circuit would sing forever: that is the
          Oscillator Lab&apos;s day job.
        </span>
      </div>
    </div>
  )
}
