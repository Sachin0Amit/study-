'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Pause, Play, RotateCcw, Triangle, Waves, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Configuration model                                                */
/* ------------------------------------------------------------------ */

type Mode = 'inverting' | 'noninverting' | 'summing' | 'difference' | 'integrator' | 'differentiator'

interface Cfg {
  key: Mode
  label: string
  aria: string
  /** signal amplitude of each source, volts */
  a1: number
  a2: number
  r1: number // kΩ — input / gain-setting resistor
  r2: number // kΩ — feedback resistor
  c: number // µF — capacitor for integrator/differentiator
}

const MODES: Cfg[] = [
  { key: 'inverting', label: 'Inverting', aria: 'Inverting amplifier', a1: 1, a2: 0, r1: 10, r2: 100, c: 0 },
  { key: 'noninverting', label: 'Non-inverting', aria: 'Non-inverting amplifier', a1: 1, a2: 0, r1: 10, r2: 100, c: 0 },
  { key: 'summing', label: 'Summing', aria: 'Summing amplifier with two inputs', a1: 1, a2: 0.5, r1: 10, r2: 100, c: 0 },
  { key: 'difference', label: 'Difference', aria: 'Difference amplifier', a1: 1, a2: 0.5, r1: 10, r2: 100, c: 0 },
  { key: 'integrator', label: 'Integrator', aria: 'Op-amp integrator', a1: 1, a2: 0, r1: 10, r2: 100, c: 0.1 },
  { key: 'differentiator', label: 'Differentiator', aria: 'Op-amp differentiator', a1: 1, a2: 0, r1: 10, r2: 100, c: 0.1 },
]

const F_SIG = 1 // signal frequency, kHz — slow for readability

/** Closed-loop gain (ideal) for a config; returns [gain on v1, gain on v2]. */
function idealGains(m: Mode, r1: number, r2: number): [number, number] {
  switch (m) {
    case 'inverting':
      return [-r2 / r1, 0]
    case 'noninverting':
      return [1 + r2 / r1, 0]
    case 'summing':
      return [-r2 / r1, -r2 / r1]
    case 'difference':
      return [r2 / r1, -r2 / r1]
    case 'integrator':
      return [NaN, 0]
    case 'differentiator':
      return [NaN, 0]
  }
}

/** Frequency-domain transfer H(jω) for every mode (used by scope + phase). */
function transfer(m: Mode, r1: number, r2: number, c: number, w: number): { mag: number; phase: number } {
  // complex helpers
  const mul = (a: number, b: number, c2: number, d: number): [number, number] => [a * c2 - b * d, a * d + b * c2]
  const div = (a: number, b: number, c2: number, d: number): [number, number] => {
    const den = c2 * c2 + d * d
    return [(a * c2 + b * d) / den, (b * c2 - a * d) / den]
  }
  // z1 = impedance from input node to summing junction; z2 = feedback impedance
  const r1ohm = r1 * 1e3
  const r2ohm = r2 * 1e3
  const cF = c * 1e-6
  let z1: [number, number]
  let z2: [number, number]
  if (m === 'integrator') {
    z1 = [r1ohm, 0]
    z2 = [0, -1 / (w * cF)]
  } else if (m === 'differentiator') {
    z1 = [0, -1 / (w * cF)]
    z2 = [r2ohm, 0]
  } else {
    z1 = [r1ohm, 0]
    z2 = [r2ohm, 0]
  }
  const [zn, zd] = div(z2[0], z2[1], z1[0], z1[1])
  let h: [number, number]
  if (m === 'inverting' || m === 'summing') h = mul(-zn, -zd, 1, 0)
  else if (m === 'differentiator') h = [zn, zd]
  else h = [zn, zd]
  // non-inverting / difference handled separately below
  if (m === 'noninverting') {
    // H = 1 + z2/z1
    const [qn, qd] = div(z2[0], z2[1], z1[0], z1[1])
    h = [1 + qn, qd]
  } else if (m === 'difference') {
    const [qn, qd] = div(z2[0], z2[1], z1[0], z1[1])
    h = [qn, qd]
  }
  return { mag: Math.hypot(h[0], h[1]), phase: Math.atan2(h[1], h[0]) }
}

/* ------------------------------------------------------------------ */
/*  SVG circuit drawing                                                */
/* ------------------------------------------------------------------ */

function CircuitSvg({ cfg, gain, virtualShort }: { cfg: Cfg; gain: number; virtualShort: boolean }) {
  const isInt = cfg.key === 'integrator'
  const isDiff2 = cfg.key === 'differentiator'
  const xIn = 60
  const xSum = 240
  const yTop = 70
  const yMid = 170
  const yBot = 290
  const xOut = 520
  const w = 580
  const h = 360
  const fLabel = isInt || isDiff2

  const inputLabel = cfg.key === 'differentiator' ? 'C₁' : 'R₁'
  const fbLabel = isInt ? 'C' : isDiff2 ? 'R₂' : 'R₂'

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" role="img" aria-label={`${cfg.label} op-amp circuit diagram`}>
      {/* input source(s) */}
      {cfg.key === 'summing' || cfg.key === 'difference' ? (
        <>
          <g>
            <circle cx={xIn} cy={yTop} r={18} fill="none" stroke="#5eead4" strokeWidth={2} />
            <path d={`M ${xIn - 12} ${yTop} h 24 M ${xIn} ${yTop - 12} v 24`} stroke="#5eead4" strokeWidth={2} />
            <text x={xIn - 46} y={yTop + 5} fill="#94a3b8" fontSize={13} fontFamily="monospace">v₁</text>
            <path d={`M ${xIn + 18} ${yTop} H 150 V ${yMid - 28}`} stroke="#64748b" strokeWidth={2} fill="none" />
          </g>
          <g>
            <circle cx={xIn} cy={yBot} r={18} fill="none" stroke="#fbbf24" strokeWidth={2} />
            <path d={`M ${xIn - 12} ${yBot} h 24 M ${xIn} ${yBot - 12} v 24`} stroke="#fbbf24" strokeWidth={2} />
            <text x={xIn - 46} y={yBot + 5} fill="#94a3b8" fontSize={13} fontFamily="monospace">v₂</text>
            <path d={`M ${xIn + 18} ${yBot} H 480 V ${yMid + 28}`} stroke="#64748b" strokeWidth={2} fill="none" />
          </g>
        </>
      ) : (
        <g>
          <circle cx={xIn} cy={yMid} r={18} fill="none" stroke="#5eead4" strokeWidth={2} />
          <path d={`M ${xIn - 12} ${yMid} h 24 M ${xIn} ${yMid - 12} v 24`} stroke="#5eead4" strokeWidth={2} />
          <text x={xIn - 46} y={yMid + 5} fill="#94a3b8" fontSize={13} fontFamily="monospace">vᵢₙ</text>
          <path d={`M ${xIn + 18} ${yMid} H 150`} stroke="#64748b" strokeWidth={2} fill="none" />
        </g>
      )}

      {/* input component (R1 or C) */}
      {isDiff2 ? (
        <g stroke="#e2e8f0" strokeWidth={2} fill="none">
          <path d="M 150 ${yMid} l 6 -12 l 10 24 l 10 -24 l 10 24 l 10 -24 l 6 12" />
        </g>
      ) : null}
      {isDiff2 ? (
        <g stroke="#e2e8f0" strokeWidth={2} fill="none">
          <path d={`M 150 ${yMid} l 6 -12 l 10 24 l 10 -24 l 10 24 l 10 -24 l 6 12`} />
          <text x={163} y={yMid - 20} fill="#94a3b8" fontSize={12} fontFamily="monospace">C₁</text>
        </g>
      ) : (
        <g stroke="#e2e8f0" strokeWidth={2} fill="none">
          <path d={`M 150 ${yMid} l 7 -13 l 11 26 l 11 -26 l 11 26 l 11 -26 l 7 13`} />
          <text x={163} y={yMid - 20} fill="#94a3b8" fontSize={12} fontFamily="monospace">{inputLabel}</text>
        </g>
      )}

      {/* summing junction */}
      <circle cx={xSum} cy={yMid} r={5} fill="#fbbf24" />
      <path d={`M ${xSum + (isDiff2 ? 90 : 92)} ${yMid} H 300`} stroke="#64748b" strokeWidth={2} fill="none" />

      {/* feedback component above */}
      {isInt ? (
        <g stroke="#e2e8f0" strokeWidth={2} fill="none">
          <path d={`M 300 ${yMid} V ${yTop + 14}`} />
          <path d={`M 300 ${yTop + 14} l -6 14 l 12 8 l -12 8 l 12 8 l -6 10`} />
          <path d={`M 300 ${yTop + 62} V ${yMid - 10}`} transform={`translate(0,${yMid - yTop - 72})`} />
          <text x={316} y={yTop + 40} fill="#94a3b8" fontSize={12} fontFamily="monospace">C</text>
        </g>
      ) : (
        <g stroke="#e2e8f0" strokeWidth={2} fill="none">
          <path d={`M 300 ${yMid} V ${yTop + 10}`} />
          <path d={`M 300 ${yTop + 10} l -8 0 l 4 -10 l 8 0 l -4 10`} transform="translate(4,0)" />
          <path d={`M 300 ${yTop + 10} l 7 -13 l 11 26 l 11 -26 l 11 26 l 11 -26 l 7 13`} />
          <text x={320} y={yTop + 16} fill="#94a3b8" fontSize={12} fontFamily="monospace">{fbLabel}</text>
          <path d={`M 300 ${yTop + 14} V ${yTop}`} stroke="#e2e8f0" strokeWidth={0} />
        </g>
      )}
      <path d={`M 300 ${yMid} V ${yTop}`} stroke="#64748b" strokeWidth={0} />
      {/* feedback wire: from output to top rail */}
      <path d={`M 470 ${yMid} H 500 V ${yTop} H 300`} stroke="#64748b" strokeWidth={2} fill="none" />

      {/* the op-amp triangle */}
      <path d={`M 300 ${yMid - 60} L 300 ${yMid + 60} L 400 ${yMid} Z`} fill="rgba(16,185,129,0.07)" stroke="#34d399" strokeWidth={2.5} />
      <text x={322} y={yMid - 30} fill="#34d399" fontSize={18} fontWeight={700}>−</text>
      <text x={322} y={yMid + 38} fill="#34d399" fontSize={16} fontWeight={700}>+</text>
      {/* rails */}
      <path d={`M 470 ${yMid} L 400 ${yMid}`} stroke="#64748b" strokeWidth={2} />
      <path d={`M 300 ${yMid + 60} V ${yMid + 84}`} stroke="#475569" strokeWidth={2} strokeDasharray="4 3" />
      <path d={`M 290 ${yMid + 84} H 310`} stroke="#475569" strokeWidth={2} />
      <path d={`M 294 ${yMid + 92} H 306`} stroke="#475569" strokeWidth={2} />

      {/* virtual short glow between inputs */}
      {virtualShort && (
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          <path d={`M 292 ${yMid - 26} L 292 ${yMid + 26}`} stroke="#fbbf24" strokeWidth={2} strokeDasharray="5 4" />
          <text x={246} y={yMid + 4} fill="#fbbf24" fontSize={10} fontFamily="monospace">v⁺ = v⁻</text>
        </motion.g>
      )}

      {/* output */}
      <circle cx={xOut} cy={yMid} r={16} fill="none" stroke="#f43f5e" strokeWidth={2} />
      <text x={xOut - 5} y={yMid + 5} fill="#f43f5e" fontSize={13} fontWeight={700}>V</text>
      <text x={xOut + 26} y={yMid - 34} fill="#94a3b8" fontSize={12} fontFamily="monospace">vₒᵤₜ</text>
      <text x={424} y={yMid - 16} fill={Math.abs(gain) >= 1 ? '#34d399' : '#94a3b8'} fontSize={12} fontFamily="monospace">
        {fLabel ? (isInt ? '−1/RC ∫' : '−RC d/dt') : `A = ${gain >= 0 ? '' : '−'}${Math.abs(gain).toFixed(1)}`}
      </text>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Scope                                                              */
/* ------------------------------------------------------------------ */

function Scope({ t, trace, traceOut, tMax }: { t: number; trace: (number | null)[]; traceOut: (number | null)[]; tMax: number }) {
  const W = 620
  const H = 210
  const toX = (i: number) => (i / (trace.length - 1)) * W
  const mkPath = (arr: (number | null)[]) => {
    let d = ''
    let pen = false
    for (let i = 0; i < arr.length; i++) {
      const v = arr[i]
      if (v === null || !Number.isFinite(v)) {
        pen = false
        continue
      }
      const y = H / 2 - (v / 8) * (H / 2 - 12)
      d += `${pen ? 'L' : 'M'} ${toX(i).toFixed(1)} ${clampY(y).toFixed(1)} `
      pen = true
    }
    return d
  }
  const clampY = (y: number) => Math.min(H - 2, Math.max(2, y))
  const cursorX = (t / tMax) * W

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full rounded-xl border border-border/70 bg-zinc-950/60" role="img" aria-label="Input and output waveforms on a scope">
      <g stroke="#1f2937" strokeWidth={1}>
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={W * f} y1={0} x2={W * f} y2={H} />
        ))}
        <line x1={0} y1={H / 2} x2={W} y2={H / 2} stroke="#334155" strokeWidth={1.5} />
      </g>
      {/* amplitude scale */}
      {[-8, -4, 4, 8].map((v) => (
        <text key={v} x={6} y={H / 2 - (v / 8) * (H / 2 - 12) + 4} fill="#475569" fontSize={10} fontFamily="monospace">{v}V</text>
      ))}
      <path d={mkPath(trace)} fill="none" stroke="#fbbf24" strokeWidth={2} />
      <path d={mkPath(traceOut)} fill="none" stroke="#34d399" strokeWidth={2.2} />
      {t > 0 && t < tMax && <line x1={cursorX} y1={0} x2={cursorX} y2={H} stroke="#f87171" strokeWidth={1.5} strokeDasharray="4 3" />}
      {/* legend */}
      <g fontFamily="monospace" fontSize={11}>
        <rect x={W - 150} y={8} width={142} height={34} rx={6} fill="rgba(9,9,11,0.75)" stroke="#27272a" />
        <circle cx={W - 134} cy={19} r={4} fill="#fbbf24" />
        <text x={W - 124} y={23} fill="#d4d4d8">input vᵢₙ</text>
        <circle cx={W - 134} cy={33} r={4} fill="#34d399" />
        <text x={W - 124} y={37} fill="#d4d4d8">output vₒᵤₜ</text>
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

const PRESETS: { label: string; mode: Mode; r1: number; r2: number; c: number; a1: number; a2: number; note: string }[] = [
  { label: 'Unity follower', mode: 'noninverting', r1: 100, r2: 0, c: 0, a1: 2, a2: 0, note: 'R₂ = 0 → A = 1: the classic buffer with huge input impedance.' },
  { label: 'Inverting ×10', mode: 'inverting', r1: 10, r2: 100, c: 0, a1: 0.5, a2: 0, note: 'The textbook gain −R₂/R₁ = −10, phase-flipped output.' },
  { label: 'Binary summing DAC', mode: 'summing', r1: 10, r2: 20, c: 0, a1: 2, a2: 1, note: 'Equal-weight inputs scaled to a binary output — the DAC story from ch 18.' },
  { label: 'Integrator', mode: 'integrator', r1: 10, r2: 100, c: 0.05, a1: 1, a2: 0, note: 'Square input in, triangle out — the area-accumulator from ch 15.' },
]

export default function OpampLab() {
  const reduced = useReducedMotion()
  const [modeKey, setModeKey] = useState<Mode>('inverting')
  const [a1, setA1] = useState(1)
  const [a2, setA2] = useState(0.5)
  const [r1, setR1] = useState(10)
  const [r2, setR2] = useState(100)
  const [cF, setCF] = useState(0.1)
  const [showRules, setShowRules] = useState(true)
  const [playing, setPlaying] = useState(true)
  const [t, setT] = useState(0)

  const cfg = MODES.find((m) => m.key === modeKey) ?? MODES[0]
  const isDynamic = modeKey === 'integrator' || modeKey === 'differentiator'
  const twoInput = modeKey === 'summing' || modeKey === 'difference'
  const tMax = 4 // ms of signal — 4 cycles at 1 kHz
  const N = 480

  // animation clock
  const raf = useRef(0)
  useEffect(() => {
    if (!playing) return
    let last = performance.now()
    const step = (now: number) => {
      const dt = now - last
      last = now
      setT((prev) => (prev + dt * (reduced ? 0.0006 : 0.0016)) % tMax)
      raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [playing, reduced, tMax])

  const { traceIn, traceOut, gain, phase, gainErr } = useMemo(() => {
    const w = 2 * Math.PI * F_SIG * 1000
    const h = transfer(modeKey, r1, r2, cF, w)
    const [g1, g2] = idealGains(modeKey, r1, r2)
    const useComplex = isDynamic || twoInput
    const traceIn: (number | null)[] = []
    const traceOut: (number | null)[] = []
    for (let i = 0; i < N; i++) {
      const tt = (i / (N - 1)) * tMax
      const x = tt - tMax / 2
      // input: trapezoid-ish square wave (integrator story) for dynamic, sine otherwise
      const v1 = isDynamic ? Math.sign(Math.sin(w * tt * 0.001)) * a1 : a1 * Math.sin(w * tt * 0.001)
      const v2 = a2 * Math.sin(w * tt * 0.001 + Math.PI / 3)
      const vin = twoInput ? v1 + v2 : v1
      traceIn.push(vin)
      if (useComplex) {
        // for dynamic modes use time-domain convolution-free formulas:
        // integrator: vo = -1/(RC) ∫ vin dt ; differentiator: vo = -RC dvin/dt
        const RC = r1 * 1e3 * cF * 1e-6
        if (modeKey === 'integrator') {
          const seg = Math.PI / 1000 // half period in s
          const vo = (-1 / RC) * (Math.cos(w * (tt - tMax / 2) * 0.001) - 1) * (a1 / w) * (Math.sin(w * tt * 0.001) >= 0 ? 1 : 1)
          traceOut.push(Number.isFinite(vo) ? vo : null)
          void seg
        } else {
          const dvin = a1 * w * 1000 * Math.cos(w * tt * 0.001) * 0.001
          const vo = -RC * dvin * (isDynamic ? 1 : 0)
          traceOut.push(Number.isFinite(vo) ? vo : null)
        }
      } else {
        const vo = g1 * v1 + g2 * v2
        traceOut.push(Number.isFinite(vo) ? vo : null)
      }
    }
    // gain display for static modes; for dynamic show |H| at f
    const gain = isDynamic ? h.mag : g1
    const phase = h.phase
    // saturate to ±13 V like a real op-amp on ±15 V rails
    const sat = (v: number) => Math.max(-13, Math.min(13, v))
    return { traceIn, traceOut: traceOut.map((v) => (v === null ? null : sat(v))), gain, phase, gainErr: 0 }
  }, [modeKey, a1, a2, r1, r2, cF, isDynamic, twoInput])

  const preset = (p: (typeof PRESETS)[number]) => {
    setModeKey(p.mode)
    setR1(p.r1)
    setR2(p.r2)
    setCF(p.c)
    setA1(p.a1)
    setA2(p.a2)
    setT(0)
  }

  const fmt = (v: number) => (Math.abs(v) >= 100 ? v.toFixed(0) : v.toFixed(1))

  return (
    <div className="space-y-4">
      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10">
            <Triangle className="h-4.5 w-4.5 text-emerald-300" aria-hidden />
          </div>
          <div>
            <h3 className="text-[15px] font-bold leading-tight">Op-Amp Circuit Sandbox</h3>
            <p className="text-xs text-muted-foreground">The six classic configurations, live on the scope</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause scope' : 'Play scope'}>
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="sm" onClick={() => setT(0)} aria-label="Reset scope cursor">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* mode tabs */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Op-amp configuration">
        {MODES.map((m) => (
          <button
            key={m.key}
            role="tab"
            aria-selected={modeKey === m.key}
            aria-label={m.aria}
            onClick={() => {
              setModeKey(m.key)
              setT(0)
            }}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 ${
              modeKey === m.key
                ? 'border-emerald-400/60 bg-emerald-400/15 text-emerald-200'
                : 'border-border/70 bg-muted/40 text-muted-foreground hover:text-foreground'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* circuit */}
        <div className="rounded-2xl border border-border/80 bg-card p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Circuit</span>
            <button
              onClick={() => setShowRules((s) => !s)}
              aria-pressed={showRules}
              className="rounded-md border border-amber-300/30 bg-amber-300/10 px-2.5 py-1 text-[11px] font-semibold text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
            >
              ideal rules {showRules ? 'on' : 'off'}
            </button>
          </div>
          <CircuitSvg cfg={cfg} gain={gain} virtualShort={showRules} />
          <div className="mt-3 rounded-lg border border-amber-300/20 bg-amber-300/[0.06] px-3 py-2 text-[12px] leading-relaxed text-amber-100/90">
            <Zap className="mr-1 inline h-3.5 w-3.5" aria-hidden />
            {showRules ? (
              <>The two golden rules: the inputs draw <strong>no current</strong>, and with negative feedback the inputs sit at the <strong>same voltage</strong> — the amber dashed link is the virtual short doing all the work.</>
            ) : (
              <>Turn the rules off to remember they are <strong>approximations</strong> — real op-amps have finite gain, bias currents and offset voltage (ch 15.3).</>
            )}
          </div>
        </div>

        {/* controls + scope */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-border/80 bg-card p-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="font-medium text-muted-foreground">Input amplitude v₁</span>
                  <span className="font-mono text-emerald-300">{a1.toFixed(1)} V</span>
                </div>
                <Slider value={[a1]} min={0.1} max={3} step={0.1} onValueChange={(v) => setA1(v[0])} aria-label="Input amplitude v one" />
              </div>
              {twoInput && (
                <div>
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span className="font-medium text-muted-foreground">Second input v₂</span>
                    <span className="font-mono text-amber-300">{a2.toFixed(1)} V</span>
                  </div>
                  <Slider value={[a2]} min={0} max={3} step={0.1} onValueChange={(v) => setA2(v[0])} aria-label="Second input amplitude v two" />
                </div>
              )}
              <div>
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="font-medium text-muted-foreground">R₁ (input)</span>
                  <span className="font-mono text-emerald-300">{fmt(r1)} kΩ</span>
                </div>
                <Slider value={[Math.log10(r1)]} min={0} max={2.3} step={0.02} onValueChange={(v) => setR1(10 ** v[0])} aria-label="Input resistance R one, logarithmic" />
              </div>
              <div>
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="font-medium text-muted-foreground">{isDynamic ? 'R₂ (series)' : 'R₂ (feedback)'}</span>
                  <span className="font-mono text-emerald-300">{fmt(r2)} kΩ</span>
                </div>
                <Slider value={[Math.log10(Math.max(1, r2))]} min={0} max={2.5} step={0.02} onValueChange={(v) => setR2(10 ** v[0])} aria-label="Feedback resistance R two, logarithmic" />
              </div>
              {isDynamic && (
                <div>
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span className="font-medium text-muted-foreground">C</span>
                    <span className="font-mono text-teal-300">{cF.toFixed(2)} µF</span>
                  </div>
                  <Slider value={[Math.log10(cF * 100)]} min={0} max={2} step={0.02} onValueChange={(v) => setCF(10 ** v[0] / 100)} aria-label="Capacitance in microfarads, logarithmic" />
                </div>
              )}
            </div>
            {/* live formula */}
            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg border border-border/70 bg-muted/30 px-3 py-2.5">
              {modeKey === 'inverting' && <TeX tex={`A_v = -\\dfrac{R_2}{R_1} = -\\dfrac{${fmt(r2)}}{${fmt(r1)}} = ${(-r2 / r1).toFixed(1)}`} />}
              {modeKey === 'noninverting' && <TeX tex={`A_v = 1 + \\dfrac{R_2}{R_1} = ${(1 + r2 / r1).toFixed(1)}`} />}
              {modeKey === 'summing' && <TeX tex={`v_o = -R_2\\!\\left(\\dfrac{v_1 + v_2}{R_1}\\right),\\; A = -\\dfrac{${fmt(r2)}}{${fmt(r1)}}`} />}
              {modeKey === 'difference' && <TeX tex={`v_o = \\dfrac{R_2}{R_1}(v_1 - v_2) = ${(r2 / r1).toFixed(1)}\\,(v_1 - v_2)`} />}
              {modeKey === 'integrator' && <TeX tex={`v_o = -\\dfrac{1}{R_1 C}\\int v_{in}\\,dt,\\; R_1C = ${(r1 * 1e3 * cF * 1e-6 * 1000).toFixed(1)}\\text{ ms}`} />}
              {modeKey === 'differentiator' && <TeX tex={`v_o = -R_2C\\,\\dfrac{dv_{in}}{dt},\\; R_2C = ${(r2 * 1e3 * cF * 1e-6 * 1e6).toFixed(1)}\\text{ µs}`} />}
            </div>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Scope · 1 kHz</span>
              <span className="font-mono text-[11px] text-muted-foreground">
                gain {Math.abs(gain) >= 100 ? Math.abs(gain).toFixed(0) : Math.abs(gain).toFixed(2)} · φ {(phase * 180 / Math.PI).toFixed(0)}°
              </span>
            </div>
            <Scope t={t} trace={traceIn} traceOut={traceOut} tMax={tMax} />
            {/* saturation warning */}
            {traceOut.some((v) => v !== null && Math.abs(v) >= 12.95) && (
              <div className="mt-2 rounded-lg border border-rose-400/30 bg-rose-400/10 px-3 py-2 text-[12px] font-medium text-rose-200">
                Output clipped at the ±13 V rails — the classic saturation story: reduce the input or the gain.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* presets */}
      <div className="rounded-2xl border border-border/80 bg-card p-4">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Presets</div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => preset(p)}
              className="rounded-xl border border-border/70 bg-muted/30 p-3 text-left transition-colors hover:border-emerald-400/40 hover:bg-emerald-400/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
            >
              <div className="text-[13px] font-semibold">{p.label}</div>
              <div className="mt-1 text-[11px] leading-snug text-muted-foreground">{p.note}</div>
            </button>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.05] px-3.5 py-2.5 text-[12px] leading-relaxed text-emerald-100/90">
          <Waves className="mr-1.5 inline h-3.5 w-3.5" aria-hidden />
          <strong>Try this:</strong> build the inverting ×10 preset, then push v₁ to 1.5 V and watch the flat-top clipping on the scope. Then switch to the integrator with the square input — the triangle output is the area being accumulated, exactly the first-order-system story from Chapter 6.
        </div>
      </div>
    </div>
  )
}
