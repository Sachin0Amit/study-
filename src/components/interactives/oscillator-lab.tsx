'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Gauge, Lightbulb, Pause, Play, Radio, RotateCcw, Timer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const TWO_PI = 2 * Math.PI
const LN2 = Math.LN2

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

/* ------------------------------------------------------------------ */
/*  Schematic primitives                                               */
/* ------------------------------------------------------------------ */

const S = 'stroke-zinc-400/90'
const SW = 1.6

function Resistor({ x, y, len, horiz }: { x: number; y: number; len: number; horiz: boolean }) {
  const n = 6
  const a = 4.5
  const lead = 5
  const body = len - 2 * lead
  const ux = horiz ? 1 : 0
  const uy = horiz ? 0 : 1
  let d = `M ${x} ${y} l ${ux * lead} ${uy * lead} `
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

function pathFrom(pts: (readonly [number, number])[]): string {
  return pts.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt[0].toFixed(1)} ${pt[1].toFixed(1)}`).join(' ')
}

/* ------------------------------------------------------------------ */
/*  Wien bridge schematic                                              */
/* ------------------------------------------------------------------ */

function WienSchematic({ lampOn, rc }: { lampOn: boolean; rc: { R: number; C: number } }) {
  return (
    <svg viewBox="0 0 360 215" className="w-full" role="img" aria-label="Wien bridge oscillator schematic: op-amp with RC lead-lag network and gain-setting divider">
      {/* output node */}
      <line x1={265} y1={90} x2={305} y2={90} className={S} strokeWidth={SW} />
      <line x1={305} y1={90} x2={305} y2={38} className={S} strokeWidth={SW} />
      <line x1={305} y1={38} x2={262} y2={38} className={S} strokeWidth={SW} />
      <circle cx={305} cy={90} r={3.2} className="fill-amber-400" />
      <text x={313} y={93} fontSize={10} className="fill-amber-300/90 font-mono">out</text>
      {/* lead-lag: series R then C into node A */}
      <Resistor x={222} y={38} len={40} horiz />
      <line x1={262} y1={38} x2={206} y2={38} className={S} strokeWidth={SW} />
      <Capacitor x={190} y={38} horiz />
      <line x1={206} y1={38} x2={170} y2={38} className={S} strokeWidth={SW} />
      {/* node A bus */}
      <line x1={170} y1={38} x2={140} y2={38} className={S} strokeWidth={SW} />
      <circle cx={170} cy={38} r={2.6} className="fill-zinc-400" />
      <line x1={170} y1={38} x2={170} y2={78} className={S} strokeWidth={SW} />
      <line x1={170} y1={78} x2={228} y2={78} className={S} strokeWidth={SW} />
      {/* parallel R and C to ground */}
      <Resistor x={170} y={48} len={40} horiz={false} />
      <line x1={170} y1={88} x2={170} y2={98} className={S} strokeWidth={SW} />
      <line x1={140} y1={38} x2={140} y2={48} className={S} strokeWidth={SW} />
      <Capacitor x={140} y={62} horiz={false} />
      <line x1={140} y1={70} x2={140} y2={98} className={S} strokeWidth={SW} />
      <line x1={140} y1={98} x2={170} y2={98} className={S} strokeWidth={SW} />
      <Ground x={155} y={104} />
      {/* op-amp */}
      <polygon points="228,64 228,96 260,80" fill="none" className={S} strokeWidth={SW} />
      <text x={234} y={77} fontSize={9} className="fill-zinc-300 font-mono">+</text>
      <text x={234} y={93} fontSize={9} className="fill-zinc-300 font-mono">−</text>
      {/* divider Rf / Rg */}
      <line x1={305} y1={90} x2={305} y2={112} className={S} strokeWidth={SW} />
      {lampOn ? (
        <g>
          <circle cx={305} cy={130} r={13} fill="none" className="stroke-amber-400/90" strokeWidth={1.8} />
          <path d={`M ${297} ${122} L ${313} ${138} M ${313} ${122} L ${297} ${138}`} className="stroke-amber-400/90" strokeWidth={1.4} />
        </g>
      ) : (
        <Resistor x={305} y={112} len={36} horiz={false} />
      )}
      <line x1={305} y1={148} x2={305} y2={152} className={S} strokeWidth={SW} />
      <circle cx={305} cy={152} r={2.6} className="fill-zinc-400" />
      <line x1={305} y1={152} x2={252} y2={152} className={S} strokeWidth={SW} />
      <line x1={228} y1={152} x2={252} y2={152} className={S} strokeWidth={SW} />
      <line x1={252} y1={152} x2={252} y2={96} className={S} strokeWidth={SW} />
      <line x1={252} y1={96} x2={228} y2={96} className={S} strokeWidth={SW} />
      <Resistor x={305} y={158} len={32} horiz={false} />
      <line x1={305} y1={190} x2={305} y2={196} className={S} strokeWidth={SW} />
      <Ground x={305} y={196} />
      {/* labels */}
      <text x={242} y={26} fontSize={10} textAnchor="middle" className="fill-zinc-400 font-mono">R {fmtEng(rc.R, 'Ω', 1)}</text>
      <text x={190} y={26} fontSize={10} textAnchor="middle" className="fill-zinc-400 font-mono">C {fmtEng(rc.C, 'F', 1)}</text>
      <text x={288} y={131} fontSize={9.5} textAnchor="end" className="fill-zinc-400 font-mono">{lampOn ? 'lamp' : 'R_f'}</text>
      <text x={322} y={176} fontSize={9.5} className="fill-zinc-400 font-mono">R_g</text>
      <text x={126} y={44} fontSize={9.5} textAnchor="end" className="fill-zinc-500 font-mono">R∥C</text>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  555 block diagram                                                  */
/* ------------------------------------------------------------------ */

function Block555({ charging, out, reduce }: { charging: boolean; out: boolean; reduce: boolean | null }) {
  return (
    <svg viewBox="0 0 360 215" className="w-full" role="img" aria-label="555 timer internal block diagram with two comparators, flip-flop and discharge transistor">
      {/* external RC network */}
      <circle cx={36} cy={22} r={3.2} className="fill-amber-400" />
      <text x={36} y={12} fontSize={9.5} textAnchor="middle" className="fill-amber-300/90 font-mono">Vcc</text>
      <line x1={36} y1={22} x2={36} y2={30} className={S} strokeWidth={SW} />
      <Resistor x={36} y={30} len={30} horiz={false} />
      <text x={22} y={48} fontSize={9.5} textAnchor="end" className="fill-zinc-400 font-mono">R_A</text>
      <line x1={36} y1={60} x2={36} y2={68} className={S} strokeWidth={SW} />
      <circle cx={36} cy={64} r={2.6} className="fill-zinc-400" />
      <line x1={36} y1={64} x2={150} y2={64} className={S} strokeWidth={SW} strokeDasharray="0" />
      <Resistor x={36} y={68} len={30} horiz={false} />
      <text x={22} y={86} fontSize={9.5} textAnchor="end" className="fill-zinc-400 font-mono">R_B</text>
      <line x1={36} y1={98} x2={36} y2={104} className={S} strokeWidth={SW} />
      <circle cx={36} cy={101} r={2.6} className="fill-zinc-400" />
      <Capacitor x={36} y={110} horiz={false} />
      <line x1={36} y1={117} x2={36} y2={128} className={S} strokeWidth={SW} />
      <Ground x={36} y={128} />
      <text x={48} y={120} fontSize={9.5} className="fill-zinc-400 font-mono">C</text>

      {/* package outline */}
      <rect x={150} y={56} width={128} height={104} rx={8} fill="none" className="stroke-zinc-500" strokeWidth={1.4} />
      <text x={214} y={185} fontSize={10} textAnchor="middle" className="fill-zinc-500 font-mono">NE555</text>

      {/* threshold comparator */}
      <rect x={158} y={62} width={70} height={22} rx={4} fill="none" className={charging ? 'stroke-zinc-500' : 'stroke-teal-400'} strokeWidth={1.4} />
      <text x={193} y={76} fontSize={8.5} textAnchor="middle" className={charging ? 'fill-zinc-400' : 'fill-teal-300'} fontFamily="monospace">
        COMP ⅔Vcc
      </text>
      {/* trigger comparator */}
      <rect x={158} y={130} width={70} height={22} rx={4} fill="none" className={charging ? 'stroke-emerald-400' : 'stroke-zinc-500'} strokeWidth={1.4} />
      <text x={193} y={144} fontSize={8.5} textAnchor="middle" className={charging ? 'fill-emerald-300' : 'fill-zinc-400'} fontFamily="monospace">
        COMP ⅓Vcc
      </text>
      {/* flip-flop */}
      <rect x={236} y={88} width={34} height={40} rx={4} fill="none" className={out ? 'stroke-emerald-400' : 'stroke-zinc-500'} strokeWidth={1.4} />
      <text x={253} y={111} fontSize={8.5} textAnchor="middle" className="fill-zinc-300" fontFamily="monospace">SR</text>
      {/* discharge transistor */}
      <rect x={166} y={158} width={34} height={16} rx={3} fill={charging ? 'none' : 'rgba(45,212,191,0.18)'} className={charging ? 'stroke-zinc-500' : 'stroke-teal-400'} strokeWidth={1.4} />
      <text x={183} y={169.5} fontSize={8} textAnchor="middle" className={charging ? 'fill-zinc-400' : 'fill-teal-300'} fontFamily="monospace">Q1</text>
      <line x1={183} y1={174} x2={183} y2={186} className={S} strokeWidth={SW} />
      <Ground x={183} y={186} />

      {/* connections */}
      <line x1={36} y1={64} x2={166} y2={64} className={S} strokeWidth={1.2} />
      <line x1={36} y1={101} x2={158} y2={101} className={S} strokeWidth={1.2} />
      <line x1={158} y1={101} x2={158} y2={73} className={S} strokeWidth={1.2} />
      <line x1={158} y1={101} x2={158} y2={141} className={S} strokeWidth={1.2} />
      <line x1={158} y1={141} x2={168} y2={141} className={S} strokeWidth={1.2} />
      <line x1={166} y1={64} x2={166} y2={166} className={S} strokeWidth={1.2} />
      <line x1={193} y1={84} x2={220} y2={84} className={S} strokeWidth={1.2} />
      <line x1={220} y1={84} x2={220} y2={96} className={S} strokeWidth={1.2} />
      <line x1={193} y1={130} x2={220} y2={130} className={S} strokeWidth={1.2} />
      <line x1={220} y1={130} x2={220} y2={120} className={S} strokeWidth={1.2} />

      {/* output pin */}
      <line x1={270} y1={108} x2={310} y2={108} className={S} strokeWidth={SW} />
      <motion.circle
        cx={316}
        cy={108}
        r={4}
        fill={out ? '#34d399' : '#3f3f46'}
        className="transition-colors"
        animate={reduce || !out ? undefined : { r: [4, 5.5, 4] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
      <text x={316} y={96} fontSize={9.5} textAnchor="middle" className="fill-zinc-400 font-mono">OUT</text>
      <text x={316} y={126} fontSize={9} textAnchor="middle" className={out ? 'fill-emerald-400' : 'fill-zinc-500'} fontFamily="monospace">
        {out ? 'HIGH' : 'LOW'}
      </text>

      {/* current flow arrows */}
      {charging && (
        <g className="stroke-emerald-400" fill="none" strokeWidth={1.6}>
          <path d="M 52 64 L 148 64" markerEnd="url(#o555a)" />
          <path d="M 66 101 L 150 101" markerEnd="url(#o555a)" />
          <defs>
            <marker id="o555a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 z" className="fill-emerald-400" />
            </marker>
          </defs>
          <text x={100} y={58} fontSize={9} textAnchor="middle" className="fill-emerald-300" fontFamily="monospace">charge: R_A+R_B → C</text>
        </g>
      )}
      {!charging && (
        <g className="stroke-teal-400" fill="none" strokeWidth={1.6}>
          <path d="M 120 101 L 42 101" markerEnd="url(#o555b)" />
          <defs>
            <marker id="o555b" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 z" className="fill-teal-400" />
            </marker>
          </defs>
          <path d="M 166 70 L 60 70" markerEnd="url(#o555b)" strokeDasharray="none" />
          <text x={110} y={95} fontSize={9} textAnchor="middle" className="fill-teal-300" fontFamily="monospace">C → R_B → Q1 → gnd</text>
        </g>
      )}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Presets                                                           */
/* ------------------------------------------------------------------ */

type OMode = 'wien' | '555' | 'colpitts'

interface Preset {
  key: string
  label: string
  mode: OMode
  note: string
  data: Record<string, number | boolean>
}

const PRESETS: Preset[] = [
  {
    key: 'wien1k',
    label: 'Wien 1 kHz',
    mode: 'wien',
    note: 'R = 1.59 kΩ, C = 100 nF — the textbook Wien bridge at 1 kHz with the lamp holding A at exactly 3.',
    data: { rExp: Math.log10(1590), cExp: -7, lamp: true },
  },
  {
    key: 'flasher',
    label: '555 LED flasher 1 Hz',
    mode: '555',
    note: 'R_A = 4.7 kΩ, R_B = 68 kΩ, C = 10 µF — astable at ≈ 1 Hz, duty ≈ 52 %: the classic blinky.',
    data: { raExp: Math.log10(4700), rbExp: Math.log10(68000), cExp: -5 },
  },
  {
    key: 'tone',
    label: '555 tone 440 Hz',
    mode: '555',
    note: 'R_A = 1 kΩ, R_B = 15.8 kΩ, C = 100 nF — Concert A from a astable timer, ~52 % duty square wave.',
    data: { raExp: 3, rbExp: Math.log10(15800), cExp: -7 },
  },
  {
    key: 'if455',
    label: 'Colpitts 455 kHz IF',
    mode: 'colpitts',
    note: 'L = 680 µH, C = 180 pF — the AM radio intermediate-frequency tank, slowed here by ~500 000×.',
    data: { lExp: Math.log10(680e-6), cExp: Math.log10(180e-12) },
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function OscillatorLab() {
  const reduce = useReducedMotion()
  const [mode, setMode] = useState<OMode>('wien')
  const [playing, setPlaying] = useState(true)
  const [resetKey, setResetKey] = useState(0)
  const [note, setNote] = useState('')

  // Wien
  const [rExp, setRExp] = useState(Math.log10(1590))
  const [cExp, setCExp] = useState(-7)
  const [gain, setGain] = useState(3)
  const [lampOn, setLampOn] = useState(true)

  // 555
  const [raExp, setRaExp] = useState(Math.log10(4700))
  const [rbExp, setRbExp] = useState(Math.log10(68000))
  const [c555, setC555] = useState(-5)

  // Colpitts
  const [lExp, setLExp] = useState(Math.log10(680e-6))
  const [cTank, setCTank] = useState(Math.log10(180e-12))

  const t = useClock(playing, reduce, resetKey)

  const pickGain = (g: number) => {
    setGain(g)
    setResetKey((k) => k + 1)
  }
  const toggleLamp = () => {
    setLampOn((v) => {
      if (!v) setGain(3)
      return !v
    })
    setResetKey((k) => k + 1)
  }

  /* ------------------------- Wien ------------------------- */
  const R = 10 ** rExp
  const C = 10 ** cExp
  const fWien = 1 / (TWO_PI * R * C)
  const envAt = (tau: number): number => {
    if (gain === 3) return 1
    const r = gain / 3
    const base = gain > 3 ? 0.3 : 1.1
    return Math.min(1.45, Math.max(0.02, base * r ** (16 * Math.max(tau, 0))))
  }
  const SCOPE_W = 560
  const SCOPE_H = 180
  const wienPath = (x: number): number => {
    const th = (x / SCOPE_W) * 4 * TWO_PI + t * TWO_PI * 1.2
    const tau = t + (x / SCOPE_W) * 6
    return SCOPE_H / 2 - envAt(tau) * 62 * Math.sin(th)
  }
  const wienWave = pathFrom(Array.from({ length: 200 }, (_, i) => [i * (SCOPE_W / 199), wienPath(i * (SCOPE_W / 199))] as const))
  const envTop = pathFrom(Array.from({ length: 60 }, (_, i) => {
    const x = i * (SCOPE_W / 59)
    return [x, SCOPE_H / 2 - envAt(t + (x / SCOPE_W) * 6) * 62] as const
  }))
  const envBot = pathFrom(Array.from({ length: 60 }, (_, i) => {
    const x = i * (SCOPE_W / 59)
    return [x, SCOPE_H / 2 + envAt(t + (x / SCOPE_W) * 6) * 62] as const
  }))
  const gainChip =
    gain > 3
      ? { cls: 'border-amber-500/40 bg-amber-500/10 text-amber-300', txt: `A = ${gain.toFixed(2)} > 3 — envelope grows` }
      : gain < 3
        ? { cls: 'border-rose-500/40 bg-rose-500/10 text-rose-300', txt: `A = ${gain.toFixed(2)} < 3 — oscillation dies` }
        : { cls: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300', txt: 'A = 3.00 — Barkhausen met, sustained sine' }

  /* ------------------------- 555 ------------------------- */
  const RA = 10 ** raExp
  const RB = 10 ** rbExp
  const C5 = 10 ** c555
  const tH = LN2 * (RA + RB) * C5
  const tL = LN2 * RB * C5
  const T5 = tH + tL
  const f555 = 1 / T5
  const duty = tH / T5
  const Tv = 2.4
  const u0 = (t / Tv) % 1
  const vcAt = (u: number): number => {
    if (u < tH / T5) {
      const tau = u * T5
      return 1 - (1 - 1 / 3) * Math.exp(-tau / ((RA + RB) * C5))
    }
    const tau = u * T5 - tH
    return (2 / 3) * Math.exp(-tau / (RB * C5))
  }
  const outAt = (u: number): boolean => u < tH / T5
  const charging = outAt(u0)
  const capPath = pathFrom(
    Array.from({ length: 240 }, (_, i) => {
      const x = i * (SCOPE_W / 239)
      const u = (u0 + (x / SCOPE_W) * 2) % 1
      return [x, 22 + (1 - vcAt(u)) * 84] as const
    })
  )
  const outPath = pathFrom(
    Array.from({ length: 240 }, (_, i) => {
      const x = i * (SCOPE_W / 239)
      const u = (u0 + (x / SCOPE_W) * 2) % 1
      return [x, outAt(u) ? 150 : 176] as const
    })
  )

  /* ------------------------- Colpitts ------------------------- */
  const Lc = 10 ** lExp
  const Ct = 10 ** cTank
  const fTank = 1 / (TWO_PI * Math.sqrt(Lc * Ct))
  const phase = t * TWO_PI * 0.55
  const eC = Math.sin(phase) ** 2
  const eL = Math.cos(phase) ** 2
  const tankVPath = pathFrom(
    Array.from({ length: 160 }, (_, i) => {
      const x = i * (SCOPE_W / 159)
      const th = (x / SCOPE_W) * 2 * TWO_PI + phase
      return [x, 50 - 28 * Math.sin(th)] as const
    })
  )
  const tankIPath = pathFrom(
    Array.from({ length: 160 }, (_, i) => {
      const x = i * (SCOPE_W / 159)
      const th = (x / SCOPE_W) * 2 * TWO_PI + phase
      return [x, 136 - 26 * Math.cos(th)] as const
    })
  )

  const applyPreset = (key: string) => {
    const pr = PRESETS.find((x) => x.key === key)
    if (!pr) return
    setMode(pr.mode)
    setNote(pr.note)
    setResetKey((k) => k + 1)
    const d = pr.data
    if (pr.mode === 'wien') {
      setRExp(d.rExp as number)
      setCExp(d.cExp as number)
      setLampOn(Boolean(d.lamp))
      setGain(3)
    } else if (pr.mode === '555') {
      setRaExp(d.raExp as number)
      setRbExp(d.rbExp as number)
      setC555(d.cExp as number)
    } else {
      setLExp(d.lExp as number)
      setCTank(d.cExp as number)
    }
  }

  const modeBtn = (m: OMode, label: string) => (
    <button
      key={m}
      type="button"
      onClick={() => {
        setMode(m)
        setNote('')
        setResetKey((k) => k + 1)
      }}
      aria-pressed={mode === m}
      className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
        mode === m ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300' : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Radio className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Oscillator &amp; 555 Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Electronics Ch 17: three ways to make a sine or square from DC — the Wien bridge&apos;s delicate A = 3
            balance, the 555&apos;s comparator flip-flop dance, and a Colpitts tank trading field energy.
          </p>
        </div>
      </div>

      {/* presets + modes + play */}
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
        {modeBtn('wien', 'Wien bridge')}
        {modeBtn('555', '555 timer')}
        {modeBtn('colpitts', 'LC Colpitts')}
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="ml-auto h-8 w-9 px-0"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? 'Pause animation' : 'Play animation'}
        >
          {playing ? <Pause className="h-3.5 w-3.5" aria-hidden /> : <Play className="h-3.5 w-3.5" aria-hidden />}
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="h-8 w-9 px-0"
          onClick={() => setResetKey((k) => k + 1)}
          aria-label="Restart animation"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden />
        </Button>
      </div>

      {mode === 'wien' && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <WienSchematic lampOn={lampOn} rc={{ R, C }} />
            </div>
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground">R</span>
                <Slider min={3} max={5} step={0.01} value={[rExp]} onValueChange={(v) => setRExp(v[0] ?? 3.2)} className="flex-1" aria-label="Wien bridge resistance R, logarithmic" />
                <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(R, 'Ω', 1)}</span>
              </div>
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground">C</span>
                <Slider min={-9} max={-6} step={0.01} value={[cExp]} onValueChange={(v) => setCExp(v[0] ?? -7)} className="flex-1" aria-label="Wien bridge capacitance C, logarithmic" />
                <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(C, 'F', 1)}</span>
              </div>
              <div className="mt-3 border-t border-border/60 pt-2.5">
                <TeX tex={`f=\\frac{1}{2\\pi RC}=${fmtEng(fWien, '\\text{Hz}', 2)}`} className="text-xs" />
                <TeX tex={`A=1+\\frac{R_f}{R_g}=3,\\quad\\beta=\\tfrac{1}{3},\\quad A\\beta=1`} className="mt-1 text-xs" />
              </div>
            </div>
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="mr-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Loop gain</span>
                {[2.95, 3, 3.05].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => pickGain(g)}
                    disabled={lampOn}
                    aria-pressed={gain === g}
                    className={`rounded-lg border px-2.5 py-1 font-mono text-xs tabular-nums transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 disabled:opacity-40 ${
                      gain === g ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300' : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    A = {g.toFixed(2)}
                  </button>
                ))}
              </div>
              <label className="mt-2.5 flex cursor-pointer items-center gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={lampOn}
                  onChange={toggleLamp}
                  className="h-3.5 w-3.5 accent-emerald-500"
                  aria-label="Toggle lamp AGC, which pins the gain at exactly 3"
                />
                lamp AGC on — the tiny bulb heats up, raises R_f and pins A at 3.00 (Hewlett&apos;s trick)
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Output scope</span>
                <span className={`rounded-md border px-2 py-0.5 font-mono text-[11px] tabular-nums ${gainChip.cls}`}>{gainChip.txt}</span>
              </div>
              <div className="overflow-hidden rounded-lg border border-border/70 bg-zinc-950/40">
                <svg viewBox={`0 0 ${SCOPE_W} ${SCOPE_H}`} className="block w-full" role="img" aria-label="Wien bridge oscillator output with growing, sustained or decaying envelope">
                  <line x1={0} y1={SCOPE_H / 2} x2={SCOPE_W} y2={SCOPE_H / 2} className="stroke-zinc-700/60" strokeWidth={1} />
                  <path d={envTop} fill="none" className="stroke-amber-400/70" strokeWidth={1.2} strokeDasharray="5 4" />
                  <path d={envBot} fill="none" className="stroke-amber-400/70" strokeWidth={1.2} strokeDasharray="5 4" />
                  <path d={wienWave} fill="none" className="stroke-emerald-400" strokeWidth={2.2} />
                  <text x={8} y={16} fontSize={10} className="fill-zinc-500 font-mono">envelope ±A(t) · time compressed</text>
                </svg>
              </div>
            </div>
            <div className="rounded-xl border border-border/80 bg-background/50 p-3 text-[11px] leading-relaxed text-muted-foreground">
              <p>
                The RC lead-lag network feeds back <span className="font-mono text-foreground">β = 1/3</span> at{' '}
                <TeX tex={`f=\frac{1}{2\pi RC}`} className="text-[11px]" /> and zero phase. Barkhausen demands{' '}
                <TeX tex={`A\beta=1`} className="text-[11px]" /> — one dB too much and the sine climbs until the
                amp clips; one dB too little and thermal noise fades to nothing. The lamp is the automatic gain
                control that lands it exactly on 3.
              </p>
            </div>
          </div>
        </div>
      )}

      {mode === '555' && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <Block555 charging={charging} out={!charging ? false : true} reduce={reduce} />
            </div>
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="flex items-center gap-2.5">
                <span className="w-10 shrink-0 font-mono text-xs text-muted-foreground">R_A</span>
                <Slider min={2} max={6} step={0.01} value={[raExp]} onValueChange={(v) => setRaExp(v[0] ?? 3)} className="flex-1" aria-label="Timing resistance R A, logarithmic" />
                <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(RA, 'Ω', 1)}</span>
              </div>
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="w-10 shrink-0 font-mono text-xs text-muted-foreground">R_B</span>
                <Slider min={2} max={6} step={0.01} value={[rbExp]} onValueChange={(v) => setRbExp(v[0] ?? 4)} className="flex-1" aria-label="Timing resistance R B, logarithmic" />
                <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(RB, 'Ω', 1)}</span>
              </div>
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="w-10 shrink-0 font-mono text-xs text-muted-foreground">C</span>
                <Slider min={-9} max={-4} step={0.01} value={[c555]} onValueChange={(v) => setC555(v[0] ?? -5)} className="flex-1" aria-label="Timing capacitance C, logarithmic" />
                <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(C5, 'F', 1)}</span>
              </div>
              <div className="mt-3 space-y-1.5 border-t border-border/60 pt-2.5">
                <TeX tex={`f=\\frac{1.44}{(R_A+2R_B)\\,C}=${fmtEng(f555, '\\text{Hz}', 2)}`} className="text-xs" />
                <TeX tex={`D=\\frac{R_A+R_B}{R_A+2R_B}=${(duty * 100).toFixed(1)}\\%`} className="text-xs" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Timing scope</span>
                <span className="flex items-center gap-3 font-mono text-[11px] tabular-nums">
                  <span className="text-amber-300">t_H = {fmtEng(tH, 's', 2)}</span>
                  <span className="text-teal-300">t_L = {fmtEng(tL, 's', 2)}</span>
                </span>
              </div>
              <div className="overflow-hidden rounded-lg border border-border/70 bg-zinc-950/40">
                <svg viewBox={`0 0 ${SCOPE_W} 200`} className="block w-full" role="img" aria-label="555 timing diagram: capacitor voltage ramping between one third and two thirds of Vcc, and the output square wave">
                  <line x1={0} y1={22 + (1 - 2 / 3) * 84} x2={SCOPE_W} y2={22 + (1 - 2 / 3) * 84} className="stroke-amber-400/50" strokeWidth={1} strokeDasharray="5 4" />
                  <line x1={0} y1={22 + (1 - 1 / 3) * 84} x2={SCOPE_W} y2={22 + (1 - 1 / 3) * 84} className="stroke-amber-400/50" strokeWidth={1} strokeDasharray="5 4" />
                  <text x={SCOPE_W - 6} y={22 + (1 - 2 / 3) * 84 - 4} fontSize={9.5} textAnchor="end" className="fill-amber-300/80 font-mono">⅔ Vcc</text>
                  <text x={SCOPE_W - 6} y={22 + (1 - 1 / 3) * 84 + 11} fontSize={9.5} textAnchor="end" className="fill-amber-300/80 font-mono">⅓ Vcc</text>
                  <path d={capPath} fill="none" className="stroke-teal-400" strokeWidth={2.2} />
                  <path d={outPath} fill="none" className="stroke-emerald-400" strokeWidth={2} />
                  <text x={8} y={16} fontSize={10} className="fill-teal-300 font-mono">v_C</text>
                  <text x={8} y={196} fontSize={10} className="fill-emerald-300 font-mono">OUT (3)</text>
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="flex items-center gap-2.5">
                <Gauge className="h-4 w-4 text-emerald-400" aria-hidden />
                <span className="text-xs text-muted-foreground">LED on pin 3</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`h-5 w-5 rounded-full border transition-colors ${charging ? 'border-emerald-400 bg-emerald-400/80 shadow-[0_0_12px_rgba(52,211,153,0.7)]' : 'border-zinc-600 bg-zinc-700/40'}`}
                  aria-hidden
                />
                <span className="font-mono text-xs tabular-nums text-muted-foreground">{charging ? 'lit' : 'dark'}</span>
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                <span className="font-mono text-foreground">OUT</span> flips high while C charges through R_A+R_B, low
                while C dumps through R_B and the discharge transistor — the two comparators simply watch the ⅓ and
                ⅔ rails and clock an SR flip-flop.
              </p>
            </div>
          </div>
        </div>
      )}

      {mode === 'colpitts' && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <svg viewBox="0 0 360 200" className="w-full" role="img" aria-label="Colpitts tank circuit with the capacitive tap feeding an amplifier">
                <line x1={110} y1={36} x2={252} y2={36} className={S} strokeWidth={SW} />
                <Capacitor x={160} y={36} horiz />
                <text x={160} y={26} fontSize={10} textAnchor="middle" className="fill-zinc-400 font-mono">C₁ {fmtEng(2 * Ct, 'F', 1)}</text>
                <Inductor x={252} y={44} len={96} horiz={false} />
                <text x={278} y={96} fontSize={10} className="fill-zinc-400 font-mono">L {fmtEng(Lc, 'H', 1)}</text>
                <line x1={252} y1={140} x2={252} y2={150} className={S} strokeWidth={SW} />
                <line x1={110} y1={150} x2={252} y2={150} className={S} strokeWidth={SW} />
                <Capacitor x={200} y={150} horiz />
                <text x={200} y={168} fontSize={10} textAnchor="middle" className="fill-zinc-400 font-mono">C₂ {fmtEng(2 * Ct, 'F', 1)}</text>
                <line x1={110} y1={36} x2={110} y2={150} className={S} strokeWidth={SW} />
                <circle cx={110} cy={93} r={2.6} className="fill-zinc-400" />
                <line x1={110} y1={93} x2={72} y2={93} className={S} strokeWidth={SW} />
                <rect x={16} y={76} width={56} height={34} rx={6} fill="none" className="stroke-emerald-400/70" strokeWidth={1.4} />
                <text x={44} y={96} fontSize={9.5} textAnchor="middle" className="fill-emerald-300 font-mono">amp</text>
                <path d="M 60 44 L 106 44 L 106 88" fill="none" className="stroke-emerald-400/60" strokeWidth={1.2} strokeDasharray="4 3" />
                <text x={44} y={60} fontSize={9} textAnchor="middle" className="fill-emerald-400/80 font-mono">replenishes losses</text>
                <text x={180} y={190} fontSize={9.5} textAnchor="middle" className="fill-zinc-500">tap between C₁ and C₂ feeds the amplifier</text>
              </svg>
            </div>
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground">L</span>
                <Slider min={-7} max={-2} step={0.01} value={[lExp]} onValueChange={(v) => setLExp(v[0] ?? -4)} className="flex-1" aria-label="Tank inductance L, logarithmic" />
                <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(Lc, 'H', 1)}</span>
              </div>
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground">C</span>
                <Slider min={-12} max={-7} step={0.01} value={[cTank]} onValueChange={(v) => setCTank(v[0] ?? -9.7)} className="flex-1" aria-label="Tank capacitance C, logarithmic" />
                <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{fmtEng(Ct, 'F', 1)}</span>
              </div>
              <div className="mt-3 border-t border-border/60 pt-2.5">
                <TeX tex={`f=\\frac{1}{2\\pi\\sqrt{LC}}=${fmtEng(fTank, '\\text{Hz}', 2)}`} className="text-xs" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Energy sloshing</span>
                <span className="font-mono text-[11px] tabular-nums text-muted-foreground">E_C + E_L = const</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex h-36 w-16 items-end overflow-hidden rounded-lg border border-amber-500/30 bg-amber-500/5">
                    <div className="w-full bg-gradient-to-t from-amber-500/60 to-amber-400" style={{ height: `${Math.max(eC, 0.02) * 100}%` }} />
                  </div>
                  <span className="font-mono text-[10px] text-amber-300">E_C = ½Cv²</span>
                  <span className="font-mono text-[10px] tabular-nums text-muted-foreground">{(eC * 100).toFixed(0)} %</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex h-36 w-16 items-end overflow-hidden rounded-lg border border-teal-500/30 bg-teal-500/5">
                    <div className="w-full bg-gradient-to-t from-teal-500/60 to-teal-400" style={{ height: `${Math.max(eL, 0.02) * 100}%` }} />
                  </div>
                  <span className="font-mono text-[10px] text-teal-300">E_L = ½Li²</span>
                  <span className="font-mono text-[10px] tabular-nums text-muted-foreground">{(eL * 100).toFixed(0)} %</span>
                </div>
              </div>
              <div className="mt-3 overflow-hidden rounded-lg border border-border/70 bg-zinc-950/40">
                <svg viewBox={`0 0 ${SCOPE_W} 170`} className="block w-full" role="img" aria-label="Tank voltage and current waveforms, ninety degrees apart">
                  <line x1={0} y1={50} x2={SCOPE_W} y2={50} className="stroke-zinc-700/60" strokeWidth={1} />
                  <line x1={0} y1={136} x2={SCOPE_W} y2={136} className="stroke-zinc-700/60" strokeWidth={1} />
                  <path d={tankVPath} fill="none" className="stroke-amber-400" strokeWidth={2.2} />
                  <path d={tankIPath} fill="none" className="stroke-teal-400" strokeWidth={2.2} />
                  <text x={8} y={16} fontSize={10} className="fill-amber-300 font-mono">v_C</text>
                  <text x={8} y={118} fontSize={10} className="fill-teal-300 font-mono">i_L</text>
                </svg>
              </div>
            </div>
            <div className="flex items-start gap-2.5 rounded-xl border border-border/80 bg-background/50 p-3">
              <Timer className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" aria-hidden />
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                Current peaks when voltage crosses zero — the energy swaps completely twice per cycle, which is why
                v and i sit 90° apart. The amp only tops up the losses; the frequency belongs entirely to L and C.
                Animation slowed to be watchable ({Math.round(0.55 / Math.max(fTank, 1e-6)) > 9999 ? '≫' : '≈'}×
                <span className="font-mono text-foreground">{fmtEng(Math.max(fTank, 1e-6) / 0.55, '', 0)}</span> real time).
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          in <span className="font-medium text-foreground">Wien bridge</span>, uncheck the lamp and press{' '}
          <span className="font-mono text-foreground">A = 3.05</span> — the envelope climbs without bound (in real
          silicon it clips into a square). Press <span className="font-mono text-foreground">A = 2.95</span> and watch
          it die. In <span className="font-medium text-foreground">555 timer</span>, load the LED flasher preset and
          halve R_A — the duty shifts even though the frequency barely moves, because R_A appears once in the
          numerator and twice in the denominator.
        </span>
      </div>
    </div>
  )
}
