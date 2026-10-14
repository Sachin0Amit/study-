'use client'

import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { BatteryCharging, Lightbulb, Pause, Play, RotateCcw, Thermometer, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
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

function useClock(run: boolean, reduce: boolean | null, resetKey: number): number {
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
  }, [run, reduce, resetKey])
  return t
}

function pathFrom(pts: (readonly [number, number])[]): string {
  return pts.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt[0].toFixed(1)} ${pt[1].toFixed(1)}`).join(' ')
}

/* ------------------------------------------------------------------ */
/*  Converter model                                                    */
/* ------------------------------------------------------------------ */

type CTopo = 'buck' | 'boost' | 'buckboost'

interface ConvModel {
  vout: number
  iout: number
  ilAvg: number
  dIL: number
  iValley: number
  iPeak: number
  dcm: boolean
  lCrit: number
  pOut: number
  pSwCond: number
  pDcr: number
  pDiode: number
  pSwitching: number
  eta: number
  dv: number
}

function modelConverter(topo: CTopo, vin: number, d: number, fsw: number, L: number, rds: number, rload: number): ConvModel {
  const C = 47e-6
  const dcr = 0.01
  const vf = 0.4
  const tsw = 40e-9
  const vout = topo === 'buck' ? d * vin : topo === 'boost' ? vin / Math.max(1 - d, 0.02) : (-d * vin) / Math.max(1 - d, 0.02)
  const iout = Math.abs(vout) / rload
  const ilAvg = topo === 'buck' ? iout : iout / Math.max(1 - d, 0.02)
  const dIL = topo === 'buck' ? (Math.abs(vout) * (1 - d)) / (L * fsw) : (vin * d) / (L * fsw)
  const iValley = ilAvg - dIL / 2
  const iPeak = ilAvg + dIL / 2
  const dcm = iValley < 0
  const lCrit =
    topo === 'buck' ? (rload * (1 - d)) / (2 * fsw) : (d * (1 - d) ** 2 * rload) / (2 * fsw)
  const pOut = Math.abs(vout) * iout
  const ilRmsSq = ilAvg * ilAvg + (dIL * dIL) / 12
  const pSwCond = ilRmsSq * rds * d
  const pDcr = ilRmsSq * dcr
  const iDiodeAvg = topo === 'buck' ? iout * (1 - d) : iout
  const pDiode = vf * iDiodeAvg
  const vSw = topo === 'boost' ? Math.abs(vout) : vin
  const pSwitching = 0.5 * vSw * ilAvg * tsw * fsw
  const pLoss = pSwCond + pDcr + pDiode + pSwitching
  const eta = pOut / Math.max(pOut + pLoss, 1e-9)
  const dv = dIL / (8 * fsw * C)
  return { vout, iout, ilAvg, dIL, iValley, iPeak, dcm, lCrit, pOut, pSwCond, pDcr, pDiode, pSwitching, eta, dv }
}

/* ------------------------------------------------------------------ */
/*  Schematic                                                          */
/* ------------------------------------------------------------------ */

const S = 'stroke-zinc-400/90'
const SWD = 1.6

function Inductor({ x, y, len, horiz }: { x: number; y: number; len: number; horiz: boolean }) {
  const n = 4
  const r = len / (2 * n)
  let dd = `M ${x} ${y} `
  for (let i = 0; i < n; i++) {
    if (horiz) dd += `a ${r} ${r} 0 0 1 ${2 * r} 0 `
    else dd += `a ${r} ${r} 0 0 1 0 ${2 * r} `
  }
  return <path d={dd} fill="none" className={S} strokeWidth={SWD} />
}

function Capacitor({ x, y, horiz }: { x: number; y: number; horiz: boolean }) {
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

function Resistor({ x, y, len, horiz }: { x: number; y: number; len: number; horiz: boolean }) {
  const n = 6
  const a = 4
  const lead = 5
  const body = len - 2 * lead
  const ux = horiz ? 1 : 0
  const uy = horiz ? 0 : 1
  let dd = `M ${x} ${y} l ${ux * lead} ${uy * lead} `
  const seg = body / n
  for (let i = 0; i < n; i++) {
    const up = i % 2 === 0 ? -1 : 1
    if (horiz) dd += `l ${seg / 2} ${up * a} l ${seg / 2} ${-up * a} `
    else dd += `l ${up * a} ${seg / 2} l ${-up * a} ${seg / 2} `
  }
  dd += `L ${x + ux * len} ${y + uy * len}`
  return <path d={dd} fill="none" className={S} strokeWidth={SWD} strokeLinejoin="round" />
}

function Ground({ x, y }: { x: number; y: number }) {
  return (
    <g className={S} strokeWidth={SWD} strokeLinecap="round">
      <line x1={x - 8} y1={y} x2={x + 8} y2={y} />
      <line x1={x - 5} y1={y + 3.5} x2={x + 5} y2={y + 3.5} />
      <line x1={x - 2} y1={y + 7} x2={x + 2} y2={y + 7} />
    </g>
  )
}

function DiodeV({ x, y, up, hot }: { x: number; y: number; up: boolean; hot: boolean }) {
  const cls = hot ? 'stroke-teal-400 fill-teal-400/20' : S
  const tri = up
    ? `${x - 10},${y + 8} ${x + 10},${y + 8} ${x},${y - 8}`
    : `${x - 10},${y - 8} ${x + 10},${y - 8} ${x},${y + 8}`
  const barY = up ? y - 8 : y + 8
  return (
    <g className={hot ? 'stroke-teal-400' : S} strokeWidth={1.8}>
      <polygon points={tri} fill={hot ? 'rgba(45,212,191,0.15)' : 'none'} className={hot ? 'stroke-teal-400' : S} />
      <line x1={x - 10} y1={barY} x2={x + 10} y2={barY} />
    </g>
  )
}

function DiodeH({ x, y, right, hot }: { x: number; y: number; right: boolean; hot: boolean }) {
  const tri = right
    ? `${x - 8},${y - 10} ${x - 8},${y + 10} ${x + 8},${y}`
    : `${x + 8},${y - 10} ${x + 8},${y + 10} ${x - 8},${y}`
  const barX = right ? x + 8 : x - 8
  return (
    <g className={hot ? 'stroke-teal-400' : S} strokeWidth={1.8}>
      <polygon points={tri} fill={hot ? 'rgba(45,212,191,0.15)' : 'none'} className={hot ? 'stroke-teal-400' : S} />
      <line x1={barX} y1={y - 10} x2={barX} y2={y + 10} />
    </g>
  )
}

/** MOSFET-style switch: pivot at bottom, blade swings open/closed. */
function SwitchSym({ x, yTop, yBot, closed }: { x: number; yTop: number; yBot: number; closed: boolean }) {
  const ang = closed ? 0 : -0.5
  const dx = Math.sin(ang) * (yBot - yTop)
  const dy = -Math.cos(ang) * (yBot - yTop)
  return (
    <g>
      <line x1={x} y1={yTop} x2={x} y2={yTop + 4} className={S} strokeWidth={SWD} />
      <circle cx={x} cy={yTop + 4} r={2.4} className="fill-zinc-400" />
      <line x1={x} y1={yBot} x2={x} y2={yBot - 4} className={S} strokeWidth={SWD} />
      <circle cx={x} cy={yBot - 4} r={2.4} className="fill-zinc-400" />
      <line
        x1={x}
        y1={yBot - 4}
        x2={x + dx}
        y2={yBot - 4 + dy}
        className={closed ? 'stroke-emerald-400' : S}
        strokeWidth={2.2}
        strokeLinecap="round"
        style={{ transition: 'all 120ms' }}
      />
      <text x={x + 14} y={(yTop + yBot) / 2} fontSize={9.5} className={closed ? 'fill-emerald-300' : 'fill-zinc-400'} fontFamily="monospace">
        {closed ? 'ON' : 'OFF'}
      </text>
    </g>
  )
}

function FlowArrow({ d, hot, markerId }: { d: string; hot: boolean; markerId: string }) {
  if (!hot) return null
  return (
    <path d={d} fill="none" className="stroke-teal-400/90" strokeWidth={1.8} markerEnd={`url(#${markerId})`} />
  )
}

function ConvSchematic({ topo, vin, vout, closed, lVal }: { topo: CTopo; vin: number; vout: number; closed: boolean; lVal: string }) {
  const arrow = (id: string) => (
    <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3.2" orient="auto">
      <path d="M0,0 L7,3.2 L0,6.4 z" className="fill-teal-400" />
    </marker>
  )
  const capC = '47 µF'
  if (topo === 'buck') {
    return (
      <svg viewBox="0 0 360 210" className="w-full" role="img" aria-label="Buck converter schematic with animated MOSFET switch and diode">
        <defs>{arrow('cv-a1')}{arrow('cv-a2')}</defs>
        <circle cx={34} cy={42} r={3.2} className="fill-amber-400" />
        <text x={34} y={28} fontSize={9.5} textAnchor="middle" className="fill-amber-300/90 font-mono">+V_in {vin.toFixed(0)} V</text>
        <line x1={34} y1={42} x2={34} y2={70} className={S} strokeWidth={SWD} />
        <line x1={34} y1={70} x2={96} y2={70} className={S} strokeWidth={SWD} />
        <SwitchSym x={96} yTop={70} yBot={128} closed={closed} />
        <circle cx={96} cy={128} r={2.4} className="fill-zinc-400" />
        <line x1={96} y1={128} x2={96} y2={150} className={S} strokeWidth={SWD} />
        <line x1={34} y1={150} x2={330} y2={150} className={S} strokeWidth={SWD} />
        <Ground x={182} y={158} />
        <line x1={34} y1={42} x2={20} y2={42} className={S} strokeWidth={SWD} />
        <line x1={20} y1={42} x2={20} y2={162} className={S} strokeWidth={1.2} strokeDasharray="4 3" />
        <line x1={20} y1={162} x2={96} y2={162} className={S} strokeWidth={1.2} strokeDasharray="4 3" />
        <line x1={96} y1={162} x2={96} y2={150} className={S} strokeWidth={1.2} strokeDasharray="4 3" />
        {/* diode from gnd up to switch node */}
        <line x1={150} y1={150} x2={150} y2={132} className={S} strokeWidth={SWD} />
        <DiodeV x={150} y={112} up hot={!closed} />
        <line x1={150} y1={92} x2={150} y2={70} className={S} strokeWidth={SWD} />
        <line x1={96} y1={70} x2={150} y2={70} className={S} strokeWidth={SWD} />
        <circle cx={150} cy={70} r={2.6} className="fill-emerald-400" />
        <text x={158} y={64} fontSize={9.5} className="fill-emerald-300 font-mono">SW node</text>
        {/* inductor */}
        <line x1={150} y1={70} x2={168} y2={70} className={S} strokeWidth={SWD} />
        <Inductor x={168} y={70} len={64} horiz />
        <line x1={232} y1={70} x2={300} y2={70} className={S} strokeWidth={SWD} />
        <text x={200} y={54} fontSize={10} textAnchor="middle" className="fill-zinc-400 font-mono">L {lVal}</text>
        {/* output cap + load */}
        <line x1={262} y1={70} x2={262} y2={88} className={S} strokeWidth={SWD} />
        <Capacitor x={262} y={96} horiz={false} />
        <line x1={262} y1={104} x2={262} y2={150} className={S} strokeWidth={SWD} />
        <text x={286} y={102} fontSize={10} className="fill-zinc-400 font-mono">C {capC}</text>
        <line x1={310} y1={70} x2={310} y2={86} className={S} strokeWidth={SWD} />
        <Resistor x={310} y={86} len={42} horiz={false} />
        <line x1={310} y1={128} x2={310} y2={150} className={S} strokeWidth={SWD} />
        <text x={330} y={110} fontSize={10} className="fill-zinc-400 font-mono">R_L</text>
        <circle cx={300} cy={70} r={3.2} className="fill-amber-400" />
        <text x={300} y={54} fontSize={9.5} textAnchor="middle" className="fill-amber-300/90 font-mono">v_out {vout.toFixed(2)} V</text>
        {/* current flow arrows */}
        {closed && <FlowArrow d="M 44 70 L 90 70" hot markerId="cv-a1" />}
        {closed && <FlowArrow d="M 176 70 L 296 70" hot markerId="cv-a1" />}
        {!closed && <FlowArrow d="M 244 70 L 120 70" hot markerId="cv-a2" />}
      </svg>
    )
  }
  if (topo === 'boost') {
    return (
      <svg viewBox="0 0 360 210" className="w-full" role="img" aria-label="Boost converter schematic with animated MOSFET switch and diode">
        <defs>{arrow('cv-b1')}{arrow('cv-b2')}</defs>
        <circle cx={34} cy={42} r={3.2} className="fill-amber-400" />
        <text x={34} y={28} fontSize={9.5} textAnchor="middle" className="fill-amber-300/90 font-mono">+V_in {vin.toFixed(0)} V</text>
        <line x1={34} y1={42} x2={56} y2={42} className={S} strokeWidth={SWD} />
        <Inductor x={56} y={42} len={64} horiz />
        <line x1={120} y1={42} x2={162} y2={42} className={S} strokeWidth={SWD} />
        <text x={88} y={26} fontSize={10} textAnchor="middle" className="fill-zinc-400 font-mono">L {lVal}</text>
        <circle cx={162} cy={42} r={2.6} className="fill-emerald-400" />
        <text x={148} y={30} fontSize={9.5} textAnchor="end" className="fill-emerald-300 font-mono">SW node</text>
        <line x1={162} y1={42} x2={200} y2={42} className={S} strokeWidth={SWD} />
        <DiodeH x={181} y={42} right hot={!closed} />
        <line x1={200} y1={42} x2={300} y2={42} className={S} strokeWidth={SWD} />
        <circle cx={300} cy={42} r={3.2} className="fill-amber-400" />
        <text x={300} y={26} fontSize={9.5} textAnchor="middle" className="fill-amber-300/90 font-mono">v_out {vout.toFixed(2)} V</text>
        {/* switch to ground */}
        <line x1={162} y1={42} x2={162} y2={58} className={S} strokeWidth={SWD} />
        <SwitchSym x={162} yTop={58} yBot={122} closed={closed} />
        <line x1={162} y1={122} x2={162} y2={150} className={S} strokeWidth={SWD} />
        {/* cap + load */}
        <line x1={262} y1={42} x2={262} y2={88} className={S} strokeWidth={SWD} />
        <Capacitor x={262} y={96} horiz={false} />
        <line x1={262} y1={104} x2={262} y2={150} className={S} strokeWidth={SWD} />
        <text x={286} y={102} fontSize={10} className="fill-zinc-400 font-mono">C 47 µF</text>
        <line x1={310} y1={42} x2={310} y2={86} className={S} strokeWidth={SWD} />
        <Resistor x={310} y={86} len={42} horiz={false} />
        <line x1={310} y1={128} x2={310} y2={150} className={S} strokeWidth={SWD} />
        <text x={332} y={110} fontSize={10} className="fill-zinc-400 font-mono">R_L</text>
        <line x1={34} y1={150} x2={330} y2={150} className={S} strokeWidth={SWD} />
        <Ground x={196} y={158} />
        <line x1={34} y1={42} x2={20} y2={42} className={S} strokeWidth={SWD} />
        <line x1={20} y1={42} x2={20} y2={162} className={S} strokeWidth={1.2} strokeDasharray="4 3" />
        <line x1={20} y1={162} x2={162} y2={162} className={S} strokeWidth={1.2} strokeDasharray="4 3" />
        <line x1={162} y1={162} x2={162} y2={150} className={S} strokeWidth={1.2} strokeDasharray="4 3" />
        {closed && <FlowArrow d="M 66 42 L 158 42" hot markerId="cv-b1" />}
        {closed && <FlowArrow d="M 170 64 L 170 118" hot markerId="cv-b1" />}
        {!closed && <FlowArrow d="M 206 42 L 294 42" hot markerId="cv-b2" />}
      </svg>
    )
  }
  // buck-boost (inverting)
  return (
    <svg viewBox="0 0 360 210" className="w-full" role="img" aria-label="Inverting buck-boost converter schematic with animated MOSFET switch and diode">
      <defs>{arrow('cv-c1')}{arrow('cv-c2')}</defs>
      <circle cx={34} cy={42} r={3.2} className="fill-amber-400" />
      <text x={34} y={28} fontSize={9.5} textAnchor="middle" className="fill-amber-300/90 font-mono">+V_in {vin.toFixed(0)} V</text>
      <line x1={34} y1={42} x2={70} y2={42} className={S} strokeWidth={SWD} />
      <line x1={70} y1={42} x2={70} y2={58} className={S} strokeWidth={SWD} />
      <SwitchSym x={70} yTop={58} yBot={122} closed={closed} />
      <line x1={70} y1={122} x2={70} y2={150} className={S} strokeWidth={SWD} />
      <line x1={34} y1={150} x2={330} y2={150} className={S} strokeWidth={SWD} />
      <Ground x={196} y={158} />
      <line x1={34} y1={42} x2={20} y2={42} className={S} strokeWidth={SWD} />
      <line x1={20} y1={42} x2={20} y2={162} className={S} strokeWidth={1.2} strokeDasharray="4 3" />
      <line x1={20} y1={162} x2={70} y2={162} className={S} strokeWidth={1.2} strokeDasharray="4 3" />
      <line x1={70} y1={162} x2={70} y2={150} className={S} strokeWidth={1.2} strokeDasharray="4 3" />
      {/* switch node: L down to ground, diode to the right */}
      <circle cx={70} cy={58} r={2.6} className="fill-emerald-400" />
      <line x1={70} y1={58} x2={112} y2={58} className={S} strokeWidth={SWD} />
      <DiodeH x={128} y={58} right hot={!closed} />
      <line x1={144} y1={58} x2={196} y2={58} className={S} strokeWidth={SWD} />
      <circle cx={196} cy={58} r={3.2} className="fill-rose-400" />
      <text x={196} y={44} fontSize={9.5} textAnchor="middle" className="fill-rose-300 font-mono">v_out {vout.toFixed(2)} V</text>
      <text x={226} y={70} fontSize={9} className="fill-zinc-500 font-mono">negative rail</text>
      <line x1={70} y1={58} x2={70} y2={70} className={S} strokeWidth={SWD} />
      <Inductor x={70} y={70} len={56} horiz={false} />
      <text x={44} y={98} fontSize={10} textAnchor="end" className="fill-zinc-400 font-mono">L {lVal}</text>
      <line x1={70} y1={126} x2={70} y2={150} className={S} strokeWidth={SWD} />
      {/* output cap + load hanging from the negative rail to ground (inverted) */}
      <line x1={160} y1={58} x2={160} y2={70} className={S} strokeWidth={SWD} />
      <Capacitor x={160} y={78} horiz={false} />
      <line x1={160} y1={86} x2={160} y2={150} className={S} strokeWidth={SWD} />
      <text x={182} y={84} fontSize={10} className="fill-zinc-400 font-mono">C 47 µF</text>
      <line x1={236} y1={58} x2={236} y2={78} className={S} strokeWidth={SWD} />
      <Resistor x={236} y={78} len={42} horiz={false} />
      <line x1={236} y1={120} x2={236} y2={150} className={S} strokeWidth={SWD} />
      <text x={258} y={102} fontSize={10} className="fill-zinc-400 font-mono">R_L</text>
      {closed && <FlowArrow d="M 44 42 L 66 42" hot markerId="cv-c1" />}
      {closed && <FlowArrow d="M 70 72 L 70 120" hot markerId="cv-c1" />}
      {!closed && <FlowArrow d="M 150 58 L 194 58" hot markerId="cv-c2" />}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Presets                                                            */
/* ------------------------------------------------------------------ */

const PRESETS: { key: string; label: string; topo: CTopo; note: string; data: Record<string, number> }[] = [
  {
    key: 'b125',
    label: 'Buck 12→5 V',
    topo: 'buck',
    note: 'D = 5/12 — the warm little regulator on every logic board: 12 V chopped down to 5 V at ~94 % efficiency.',
    data: { vin: 12, d: 5 / 12, fExp: Math.log10(2e5), lExp: Math.log10(22e-6), rds: 0.01, rload: 5 },
  },
  {
    key: 'b512',
    label: 'Boost 5→12 V',
    topo: 'boost',
    note: 'D = 7/12 — the inductor stores energy while the switch is on and stacks it on top of V_in when it opens.',
    data: { vin: 5, d: 7 / 12, fExp: Math.log10(2e5), lExp: Math.log10(22e-6), rds: 0.01, rload: 12 },
  },
  {
    key: 'inv',
    label: 'Inverting',
    topo: 'buckboost',
    note: 'D ≈ 0.294 gives −5 V from +12 V — polarity flips because the inductor reverses when it discharges.',
    data: { vin: 12, d: 5 / 17, fExp: Math.log10(2e5), lExp: Math.log10(22e-6), rds: 0.01, rload: 5 },
  },
  {
    key: 'pushf',
    label: 'Push f_sw, watch losses',
    topo: 'buck',
    note: '1 MHz switching with a mediocre MOSFET: ripple shrinks nicely, but the switching-loss bar takes off.',
    data: { vin: 12, d: 5 / 12, fExp: 6, lExp: Math.log10(10e-6), rds: 0.025, rload: 5 },
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const SC_W = 560

export default function ConverterLab() {
  const reduce = useReducedMotion()
  const [topo, setTopo] = useState<CTopo>('buck')
  const [vin, setVin] = useState(12)
  const [d, setD] = useState(5 / 12)
  const [fExp, setFExp] = useState(Math.log10(2e5))
  const [lExp, setLExp] = useState(Math.log10(22e-6))
  const [rds, setRds] = useState(0.01)
  const [rload, setRload] = useState(5)
  const [playing, setPlaying] = useState(true)
  const [resetKey, setResetKey] = useState(0)
  const [note, setNote] = useState('')
  const [showCompare, setShowCompare] = useState(false)

  const t = useClock(playing, reduce, resetKey)
  const fsw = 10 ** fExp
  const L = 10 ** lExp
  const m = useMemo(() => modelConverter(topo, vin, d, fsw, L, rds, rload), [topo, vin, d, fsw, L, rds, rload])

  /* scope waveforms: 3 cycles, scrolling */
  const u0 = (t / 2.4) % 1
  const cycle = (x: number): number => (u0 + (x / SC_W) * 3) % 1
  const swHigh = topo === 'boost' ? Math.abs(m.vout) : vin
  const swLow = topo === 'buckboost' ? -Math.abs(m.vout) : 0
  const swPath = pathFrom(
    Array.from({ length: 280 }, (_, i) => {
      const x = (i / 279) * SC_W
      return [x, cycle(x) < d ? 26 : 58] as const
    })
  )
  const iLAt = (u: number): number => {
    if (u < d) return m.iValley + (m.dIL * u) / d
    const frac = (u - d) / Math.max(1 - d, 0.001)
    const v = m.iPeak - m.dIL * frac
    return m.dcm ? Math.max(v, 0) : v
  }
  const ilPath = pathFrom(
    Array.from({ length: 280 }, (_, i) => {
      const x = (i / 279) * SC_W
      const val = iLAt(cycle(x))
      return [x, 120 - Math.min(val, 4) * 16] as const
    })
  )
  const voPath = pathFrom(
    Array.from({ length: 280 }, (_, i) => {
      const x = (i / 279) * SC_W
      const u = cycle(x)
      const rip = (u < d ? u / d : -((u - d) / (1 - d))) * (m.dv / 2) * (m.dcm ? 0.5 : 1)
      return [x, 186 - Math.sign(m.vout) * rip * 14] as const
    })
  )

  const voutTex =
    topo === 'buck'
      ? `V_{out}=D\\,V_{in}=${d.toFixed(3)}\\times ${vin.toFixed(0)}=${m.vout.toFixed(2)}\\ \\text{V}`
      : topo === 'boost'
        ? `V_{out}=\\frac{V_{in}}{1-D}=\\frac{${vin.toFixed(0)}}{${(1 - d).toFixed(3)}}=${m.vout.toFixed(2)}\\ \\text{V}`
        : `V_{out}=-\\frac{D}{1-D}V_{in}=${m.vout.toFixed(2)}\\ \\text{V}`

  const lossTotal = m.pSwCond + m.pDcr + m.pDiode + m.pSwitching
  const barW = (v: number): string => `${Math.min(100, (v / Math.max(lossTotal + m.pOut, 1e-9)) * 100)}%`

  const applyPreset = (key: string) => {
    const pr = PRESETS.find((x) => x.key === key)
    if (!pr) return
    setTopo(pr.topo)
    setNote(pr.note)
    setResetKey((k) => k + 1)
    const dd = pr.data
    setVin(dd.vin)
    setD(dd.d)
    setFExp(dd.fExp)
    setLExp(dd.lExp)
    setRds(dd.rds)
    setRload(dd.rload)
  }

  const modeBtn = (tp: CTopo, label: string) => (
    <button
      key={tp}
      type="button"
      onClick={() => {
        setTopo(tp)
        setNote('')
      }}
      aria-pressed={topo === tp}
      className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
        topo === tp ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300' : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <BatteryCharging className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Switching Converter Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Electronics Ch 20: buck, boost and invert — move the duty cycle, watch the inductor ramp, and see where
            the watts actually go.
          </p>
        </div>
      </div>

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

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {modeBtn('buck', 'Buck')}
        {modeBtn('boost', 'Boost')}
        {modeBtn('buckboost', 'Buck-boost (inverting)')}
        <Button type="button" size="sm" variant="outline" className="ml-auto h-8 w-9 px-0" onClick={() => setPlaying((v) => !v)} aria-label={playing ? 'Pause animation' : 'Play animation'}>
          {playing ? <Pause className="h-3.5 w-3.5" aria-hidden /> : <Play className="h-3.5 w-3.5" aria-hidden />}
        </Button>
        <Button type="button" size="sm" variant="outline" className="h-8 w-9 px-0" onClick={() => setResetKey((k) => k + 1)} aria-label="Restart animation">
          <RotateCcw className="h-3.5 w-3.5" aria-hidden />
        </Button>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
        {/* left: schematic + controls */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <ConvSchematic topo={topo} vin={vin} vout={m.vout} closed={cycle(0) < d} lVal={fmtEng(L, 'H', 1)} />
          </div>
          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <div className="flex items-center gap-2.5">
              <span className="w-20 shrink-0 text-xs text-muted-foreground">V_in</span>
              <Slider min={3} max={24} step={0.5} value={[vin]} onValueChange={(v) => setVin(v[0] ?? 12)} className="flex-1" aria-label="Input voltage in volts" />
              <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{vin.toFixed(1)} V</span>
            </div>
            <div className="mt-2.5 flex items-center gap-2.5">
              <span className="w-20 shrink-0 text-xs text-muted-foreground">duty D</span>
              <Slider min={0.02} max={0.98} step={0.005} value={[d]} onValueChange={(v) => setD(v[0] ?? 0.4)} className="flex-1" aria-label="Duty cycle" />
              <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{(d * 100).toFixed(1)} %</span>
            </div>
            <div className="mt-2.5 flex items-center gap-2.5">
              <span className="w-20 shrink-0 text-xs text-muted-foreground">f_sw</span>
              <Slider min={4.3} max={6} step={0.01} value={[fExp]} onValueChange={(v) => setFExp(v[0] ?? 5.3)} className="flex-1" aria-label="Switching frequency, logarithmic" />
              <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(fsw, 'Hz', 1)}</span>
            </div>
            <div className="mt-2.5 flex items-center gap-2.5">
              <span className="w-20 shrink-0 text-xs text-muted-foreground">L</span>
              <Slider min={-6.5} max={-3.5} step={0.01} value={[lExp]} onValueChange={(v) => setLExp(v[0] ?? -4.66)} className="flex-1" aria-label="Inductance, logarithmic" />
              <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(L, 'H', 1)}</span>
            </div>
            <div className="mt-2.5 flex items-center gap-2.5">
              <span className="w-20 shrink-0 text-xs text-muted-foreground">R_DS(on)</span>
              <Slider min={2} max={100} step={1} value={[rds * 1000]} onValueChange={(v) => setRds((v[0] ?? 10) / 1000)} className="flex-1" aria-label="MOSFET on-resistance in milliohms" />
              <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{(rds * 1000).toFixed(0)} mΩ</span>
            </div>
            <div className="mt-2.5 flex items-center gap-2.5">
              <span className="w-20 shrink-0 text-xs text-muted-foreground">R load</span>
              <Slider min={2} max={48} step={0.5} value={[rload]} onValueChange={(v) => setRload(v[0] ?? 5)} className="flex-1" aria-label="Load resistance in ohms" />
              <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{rload.toFixed(1)} Ω</span>
            </div>
            <div className="mt-3 space-y-1.5 border-t border-border/60 pt-2.5">
              <TeX tex={voutTex} className="text-xs" />
              <TeX tex={`I_{out}=\\frac{|V_{out}|}{R_L}=${m.iout.toFixed(2)}\\ \\text{A},\\qquad \\Delta I_L=${m.dIL.toFixed(2)}\\ \\text{A}`} className="text-xs" />
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className={`rounded-md border px-2 py-0.5 font-mono text-[11px] tabular-nums ${m.dcm ? 'border-rose-500/40 bg-rose-500/10 text-rose-300' : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'}`}>
                  {m.dcm ? 'DCM — inductor empties each cycle' : 'CCM — continuous conduction'}
                </span>
                {!m.dcm && (
                  <span className="rounded-md border border-border bg-muted/30 px-2 py-0.5 font-mono text-[11px] tabular-nums text-muted-foreground">
                    L_crit = {fmtEng(m.lCrit, 'H', 1)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* right: scope + losses */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Scope</span>
              <span className="font-mono text-[11px] tabular-nums text-muted-foreground">3 switching cycles, time-compressed</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-border/70 bg-zinc-950/40">
              <svg viewBox={`0 0 ${SC_W} 210`} className="block w-full" role="img" aria-label="Scope showing switch node voltage, triangular inductor current and output ripple">
                <text x={8} y={16} fontSize={9.5} className="fill-zinc-500 font-mono">v_SW</text>
                <text x={8} y={100} fontSize={9.5} className="fill-amber-300 font-mono">i_L</text>
                <text x={8} y={180} fontSize={9.5} className="fill-teal-300 font-mono">v_out</text>
                <text x={SC_W - 8} y={16} fontSize={9} textAnchor="end" className="fill-zinc-500 font-mono">
                  {swHigh.toFixed(1)} / {swLow.toFixed(1)} V
                </text>
                <path d={swPath} fill="none" className="stroke-emerald-400" strokeWidth={1.8} />
                <path d={ilPath} fill="none" className="stroke-amber-400" strokeWidth={2.2} />
                <line x1={0} y1={120 - m.ilAvg * 16} x2={SC_W} y2={120 - m.ilAvg * 16} className="stroke-zinc-600/70" strokeWidth={1} strokeDasharray="4 4" />
                <path d={voPath} fill="none" className="stroke-teal-400" strokeWidth={2} />
                <text x={SC_W - 8} y={132 - m.ilAvg * 16} fontSize={9} textAnchor="end" className="fill-zinc-500 font-mono">I_L avg</text>
              </svg>
            </div>
          </div>

          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Thermometer className="h-3.5 w-3.5 text-rose-400" aria-hidden /> Loss budget
              </span>
              <span className={`rounded-md border px-2 py-0.5 font-mono text-[11px] tabular-nums ${m.eta > 0.85 ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : m.eta > 0.6 ? 'border-amber-500/40 bg-amber-500/10 text-amber-300' : 'border-rose-500/40 bg-rose-500/10 text-rose-300'}`}>
                η = {(m.eta * 100).toFixed(1)} %
              </span>
            </div>
            <div className="space-y-1.5">
              {[
                { label: 'output power', v: m.pOut, cls: 'bg-emerald-400/80', txt: 'text-emerald-300' },
                { label: 'switch conduction (R_DS)', v: m.pSwCond, cls: 'bg-amber-400/80', txt: 'text-amber-300' },
                { label: 'diode (0.4 V)', v: m.pDiode, cls: 'bg-teal-400/80', txt: 'text-teal-300' },
                { label: 'inductor DCR', v: m.pDcr, cls: 'bg-zinc-400/80', txt: 'text-zinc-300' },
                { label: 'switching (40 ns edges)', v: m.pSwitching, cls: 'bg-rose-400/80', txt: 'text-rose-300' },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-2">
                  <span className="w-40 shrink-0 text-[11px] text-muted-foreground">{row.label}</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className={`h-full ${row.cls}`} style={{ width: barW(row.v) }} />
                  </div>
                  <span className={`w-16 shrink-0 text-right font-mono text-[11px] tabular-nums ${row.txt}`}>{row.v < 0.01 && row.v > 0 ? '<0.01' : row.v.toFixed(2)} W</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
              Conduction losses scale with I²R and dwell time; switching losses with f_sw — that is the whole
              engineering trade in one slider.
            </p>
          </div>

          {/* linear vs switching */}
          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <button
              type="button"
              onClick={() => setShowCompare((v) => !v)}
              aria-pressed={showCompare}
              className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
            >
              <Zap className="h-3.5 w-3.5 text-amber-400" aria-hidden />
              {showCompare ? 'Hide linear comparison' : 'Compare with a linear regulator'}
            </button>
            {showCompare && (
              <div className="mt-3">
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  Same job — 12 V → 5 V at 1 A. The linear regulator simply burns the difference:{' '}
                  <TeX tex={`P=(12-5)\\times 1=7\\ \\text{W}`} className="text-[11px]" /> — it is a toaster with a
                  feedback loop. The switching buck (this lab&apos;s settings, D = 5/12) sheds only{' '}
                  <span className="font-mono text-foreground">{(m.pOut * (1 / Math.max(m.eta, 1e-9) - 1)).toFixed(2)} W</span>.
                </p>
                <div className="mt-2 space-y-2">
                  <div>
                    <div className="mb-1 flex justify-between text-[11px]">
                      <span className="text-muted-foreground">linear 7805-style · η = 41.7 %</span>
                      <span className="font-mono tabular-nums text-rose-300">7.00 W burned</span>
                    </div>
                    <div className="h-4 overflow-hidden rounded-md bg-muted">
                      <div className="h-full bg-rose-400/80" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-[11px]">
                      <span className="text-muted-foreground">this switching buck · η = {(m.eta * 100).toFixed(1)} %</span>
                      <span className="font-mono tabular-nums text-emerald-300">
                        {(m.pOut * (1 / Math.max(m.eta, 1e-9) - 1)).toFixed(2)} W burned
                      </span>
                    </div>
                    <div className="h-4 overflow-hidden rounded-md bg-muted">
                      <div className="h-full bg-emerald-400/80" style={{ width: `${Math.max(2, (m.pOut * (1 / Math.max(m.eta, 1e-9) - 1)) / 7 * 100)}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          load <span className="font-medium text-foreground">Push f_sw, watch losses</span> and sweep f_sw from
          20 kHz to 1 MHz — ripple shrinks (the triangle flattens) while the rose switching-loss bar climbs and η
          falls. Then push the load R down toward 2 Ω on the buck: the moment the triangle&apos;s valley hits zero,
          the badge flips to DCM and the output sags below D·V_in.
        </span>
      </div>
    </div>
  )
}
