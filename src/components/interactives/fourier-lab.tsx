'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  AudioWaveform,
  Lightbulb,
  Pause,
  Play,
  RotateCcw,
  SlidersHorizontal,
  Wand2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ================================================================== */
/*  Fourier Synthesis Lab                                              */
/*  Hughes / Nilsson ch 10–11 (Fourier series, spectra, signals) +     */
/*  Feynman I ch 7 (the harmonic content of periodic waves)             */
/* ================================================================== */

type TargetKey = 'square' | 'triangle' | 'sawtooth' | 'halfrect' | 'pulse'

interface TargetDef {
  key: TargetKey
  label: string
  tex: string
  note: string
}

const TARGETS: TargetDef[] = [
  {
    key: 'square',
    label: 'Square',
    tex: 'b_n=\\frac{4A}{\\pi n}\\;(n\\ \\mathrm{odd})',
    note: 'Odd harmonics only, falling off like 1/n. The flat top is pure cancellation.',
  },
  {
    key: 'triangle',
    label: 'Triangle',
    tex: 'b_n=\\pm\\frac{8A}{\\pi^{2}n^{2}}\\;(n\\ \\mathrm{odd})',
    note: 'Odd harmonics with alternating sign, falling like 1/n² — that is why triangles sound softer.',
  },
  {
    key: 'sawtooth',
    label: 'Sawtooth',
    tex: 'b_n=\\frac{2A}{\\pi n}(-1)^{n+1}',
    note: 'Every harmonic present, alternating sign, 1/n roll-off.',
  },
  {
    key: 'halfrect',
    label: 'Half-rectified sine',
    tex: 'a_0=\\tfrac{2A}{\\pi},\\; b_1=\\tfrac{A}{2},\\; a_{2k}=-\\tfrac{2A}{\\pi(4k^{2}-1)}',
    note: 'A DC term plus even cosine harmonics — rectification manufactures new frequencies.',
  },
  {
    key: 'pulse',
    label: 'Pulse train',
    tex: 'a_n=\\frac{2A\\sin(\\pi nD)}{\\pi n}(-1)^{n}',
    note: 'Sinc-envelope spectrum from the duty cycle D; zeros at every n = 1/D.',
  },
]

/** theoretical signed coefficients for n = 1..15, plus DC, and each harmonic's basis */
function theoryFor(target: TargetKey, duty: number): { dc: number; amp: number[]; cos: boolean[] } {
  const amp = new Array<number>(15).fill(0)
  const cos = new Array<boolean>(15).fill(false)
  for (let n = 1; n <= 15; n++) {
    const i = n - 1
    if (target === 'square') {
      amp[i] = n % 2 === 1 ? 4 / (Math.PI * n) : 0
    } else if (target === 'triangle') {
      if (n % 2 === 1) amp[i] = (((n - 1) / 2) % 2 === 0 ? 1 : -1) * (8 / (Math.PI * Math.PI * n * n))
    } else if (target === 'sawtooth') {
      amp[i] = (2 / (Math.PI * n)) * (n % 2 === 1 ? 1 : -1)
    } else if (target === 'halfrect') {
      if (n === 1) amp[i] = 0.5
      else if (n % 2 === 0) {
        amp[i] = -2 / (Math.PI * (n * n - 1))
        cos[i] = true
      }
    } else {
      amp[i] = ((2 * Math.sin(Math.PI * n * duty)) / (Math.PI * n)) * (n % 2 === 0 ? -1 : 1)
      cos[i] = true
    }
  }
  const dc = target === 'halfrect' ? 1 / Math.PI : target === 'pulse' ? duty : 0
  return { dc, amp, cos }
}

/** the target waveform itself on theta in [0, 2pi) */
function targetF(target: TargetKey, theta: number, duty: number): number {
  const t = ((theta % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
  switch (target) {
    case 'square':
      return t < Math.PI ? 1 : -1
    case 'triangle':
      return 1 - (2 * Math.abs(t - Math.PI)) / Math.PI
    case 'sawtooth':
      return (t - Math.PI) / Math.PI
    case 'halfrect':
      return t < Math.PI ? Math.sin(t) : 0
    case 'pulse':
      return Math.abs(t - Math.PI) < Math.PI * duty ? 1 : 0
  }
}

/* ---------------- geometry ---------------- */

const MW = 640 // main scope
const MH = 280
const SPW = 640 // spectrum
const SPH = 210
const EPH_W = 320 // epicycle canvas
const EPH_H = 320
const ETR_W = 640 // epicycle trace scope
const ETR_H = 240

const CURVE_STEPS = 360

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */

export default function FourierLab() {
  const reduce = useReducedMotion()

  const [target, setTarget] = useState<TargetKey>('square')
  const [duty, setDuty] = useState(0.2)
  const [sliders, setSliders] = useState<number[]>(() => {
    const th = theoryFor('square', 0.2)
    return [th.dc, ...th.amp.map((a, i) => (i < 5 ? a : 0))]
  })
  const [terms, setTerms] = useState(5)
  const [showComponents, setShowComponents] = useState(false)

  const theory = useMemo(() => theoryFor(target, duty), [target, duty])

  /* -------- partial sum -------- */
  const dc = sliders[0] ?? 0
  const partial = (theta: number): number => {
    let v = dc
    for (let n = 1; n <= 15; n++) {
      const s = sliders[n] ?? 0
      if (s === 0) continue
      v += s * (theory.cos[n - 1] ? Math.cos(n * theta) : Math.sin(n * theta))
    }
    return v
  }

  /* -------- main scope paths -------- */
  const yScale = 1 / 1.55
  const mx = (theta: number): number => 46 + (theta / (2 * Math.PI)) * (MW - 62)
  const my = (v: number): number => MH / 2 - v * yScale * (MH / 2 - 18)

  const sumPath = useMemo(() => {
    let d = ''
    for (let i = 0; i <= CURVE_STEPS; i++) {
      const th = (i / CURVE_STEPS) * 2 * Math.PI
      d += `${i === 0 ? 'M' : 'L'}${mx(th).toFixed(1)},${my(partial(th)).toFixed(1)}`
    }
    return d
  }, [sliders, theory])

  const targetPath = useMemo(() => {
    let d = ''
    let open = false
    for (let i = 0; i <= CURVE_STEPS; i++) {
      const th = (i / CURVE_STEPS) * 2 * Math.PI
      const v = targetF(target, th, duty)
      if (!open) {
        d += `M${mx(th).toFixed(1)},${my(v).toFixed(1)}`
        open = true
      } else {
        d += `L${mx(th).toFixed(1)},${my(v).toFixed(1)}`
      }
    }
    return d
  }, [target, duty])

  const componentPaths = useMemo(() => {
    if (!showComponents) return []
    const active: number[] = []
    for (let n = 1; n <= 15; n++) if ((sliders[n] ?? 0) !== 0) active.push(n)
    return active.slice(0, 3).map((n) => {
      let d = ''
      for (let i = 0; i <= CURVE_STEPS; i++) {
        const th = (i / CURVE_STEPS) * 2 * Math.PI
        const v = (sliders[n] ?? 0) * (theory.cos[n - 1] ? Math.cos(n * th) : Math.sin(n * th))
        d += `${i === 0 ? 'M' : 'L'}${mx(th).toFixed(1)},${my(v).toFixed(1)}`
      }
      return { n, d }
    })
  }, [sliders, theory, showComponents])

  /* -------- RMS error + energy -------- */
  const { rmsErr, energyPct } = useMemo(() => {
    let se = 0
    let st = 0
    const N = 256
    for (let i = 0; i < N; i++) {
      const th = (i / N) * 2 * Math.PI
      const e = partial(th) - targetF(target, th, duty)
      se += e * e
      st += targetF(target, th, duty) ** 2
    }
    const rms = Math.sqrt(se / N)
    const rmsT = Math.sqrt(st / N)
    return { rmsErr: rms, energyPct: rmsT > 1e-9 ? Math.max(0, (1 - rms / rmsT) * 100) : 100 }
  }, [sliders, theory, target, duty])

  /* -------- Gibbs analysis -------- */
  const gibbs = useMemo(() => {
    const activeCount = sliders.slice(1).filter((s) => s !== 0).length
    if (target !== 'square' || activeCount === 0 || activeCount > 6) return null
    let minR = 0
    let maxL = 0
    for (let k = 0; k <= 300; k++) {
      const th = Math.PI + (k / 300) * 0.3
      const v = partial(th)
      if (v < minR) minR = v
    }
    for (let k = 0; k <= 300; k++) {
      const th = Math.PI - (k / 300) * 0.3
      const v = partial(th)
      if (v > maxL) maxL = v
    }
    const overR = Math.max(0, -1 - minR)
    const overL = Math.max(0, maxL - 1)
    const pct = ((overR + overL) / 2 / 2) * 100
    return { overR, overL, pct, activeCount }
  }, [sliders, target])

  const gibbsInsetPath = useMemo(() => {
    if (!gibbs) return ''
    let d = ''
    const w = 0.35
    for (let k = 0; k <= 160; k++) {
      const th = Math.PI - w + (k / 160) * 2 * w
      const v = partial(th)
      const gx = MW - 206 + ((th - (Math.PI - w)) / (2 * w)) * 188
      const gy = 90 - (v / 1.35) * 56
      d += `${k === 0 ? 'M' : 'L'}${gx.toFixed(1)},${gy.toFixed(1)}`
    }
    return d
  }, [gibbs, sliders])

  /* -------- epicycle animation -------- */
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(0.7)
  const [epiTheta, setEpiTheta] = useState(0)
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([])
  const thetaRef = useRef(0)
  const lastMod = useRef(0)

  useEffect(() => {
    if (!playing) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      thetaRef.current += dt * speed
      const m = thetaRef.current % (4 * Math.PI)
      if (m < lastMod.current) setTrail([])
      else
        setTrail((tr) => {
          const next = [...tr, { x: m, y: partial(m % (2 * Math.PI)) }]
          return next.length > 110 ? next.slice(next.length - 110) : next
        })
      lastMod.current = m
      setEpiTheta(thetaRef.current)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing, speed, sliders, theory])

  /* -------- epicycle chain -------- */
  const chain = useMemo(() => {
    const pts: { x: number; y: number }[] = [{ x: 0, y: dc }]
    let x = 0
    let y = dc
    for (let n = 1; n <= 15; n++) {
      const s = sliders[n] ?? 0
      if (s === 0) continue
      const alpha = n * epiTheta + (theory.cos[n - 1] ? Math.PI / 2 : 0) + (s < 0 ? Math.PI : 0)
      const len = Math.abs(s)
      x += len * Math.cos(alpha)
      y += len * Math.sin(alpha)
      pts.push({ x, y })
    }
    return pts
  }, [sliders, theory, epiTheta, dc])

  const chainScale = useMemo(() => {
    const mag = Math.abs(dc) + sliders.slice(1).reduce((a, b) => a + Math.abs(b), 0)
    return 108 / Math.max(1.3, mag)
  }, [sliders, dc])

  const epiTracePath = useMemo(() => {
    let d = ''
    for (let i = 0; i <= CURVE_STEPS; i++) {
      const th = (i / CURVE_STEPS) * 4 * Math.PI
      const v = partial(th)
      const px = 44 + (th / (4 * Math.PI)) * (ETR_W - 60)
      const py = ETR_H / 2 - (v / 1.55) * (ETR_H / 2 - 16)
      d += `${i === 0 ? 'M' : 'L'}${px.toFixed(1)},${py.toFixed(1)}`
    }
    return d
  }, [sliders, theory])

  const trailPath = useMemo(() => {
    if (trail.length < 2) return ''
    return trail
      .map((p, i) => `${i === 0 ? 'M' : 'L'}${(44 + (p.x / (4 * Math.PI)) * (ETR_W - 60)).toFixed(1)},${(ETR_H / 2 - (p.y / 1.55) * (ETR_H / 2 - 16)).toFixed(1)}`)
      .join('')
  }, [trail])

  /* -------- actions -------- */
  const fillTerms = (k: number, tgt: TargetKey, d: number) => {
    const th = theoryFor(tgt, d)
    setSliders([th.dc, ...th.amp.map((a, i) => (i < k ? a : 0))])
  }
  const changeTarget = (k: TargetKey) => {
    setTarget(k)
    fillTerms(terms, k, duty)
  }
  const zeroAll = () => setSliders(new Array(16).fill(0))
  const matchAll = () => {
    setTerms(15)
    fillTerms(15, target, duty)
  }

  const applyPreset = (key: string) => {
    if (key === 'sq5') {
      setTarget('square')
      setTerms(5)
      fillTerms(5, 'square', duty)
    } else if (key === 'sq15') {
      setTarget('square')
      setTerms(15)
      fillTerms(15, 'square', duty)
    } else if (key === 'saw') {
      setTarget('sawtooth')
      setTerms(15)
      fillTerms(15, 'sawtooth', duty)
    } else if (key === 'nyq') {
      setTarget('pulse')
      setDuty(0.1)
      setTerms(10)
      fillTerms(10, 'pulse', 0.1)
    }
  }
  const PRESETS = [
    { key: 'sq5', label: 'Square, 5 terms' },
    { key: 'sq15', label: 'Square, 15 terms' },
    { key: 'saw', label: 'Sawtooth' },
    { key: 'nyq', label: 'Band-limited pulse (the Nyquist story)' },
  ]

  const def = TARGETS.find((t) => t.key === target) ?? TARGETS[0]

  /* ================================================================ */

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <AudioWaveform className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Fourier Synthesis Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Build a wave one harmonic at a time — sliders for the amplitudes, a spectrum with the
            theoretical coefficients overlaid, and the epicycle machine that draws the sum as it rotates.
          </p>
        </div>
      </div>

      {/* presets + targets */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Presets</span>
        {PRESETS.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => applyPreset(p.key)}
            className="rounded-lg border border-border bg-muted/30 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/30 p-0.5" role="group" aria-label="Target waveform">
          {TARGETS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => changeTarget(t.key)}
              aria-pressed={target === t.key}
              className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                target === t.key
                  ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        {target === 'pulse' && (
          <label className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="shrink-0">duty D</span>
            <Slider
              min={0.05}
              max={0.5}
              step={0.01}
              value={[duty]}
              onValueChange={(v) => setDuty(v[0] ?? 0.2)}
              className="w-28"
              aria-label="Pulse duty cycle"
            />
            <span className="w-10 font-mono text-xs tabular-nums text-foreground">{duty.toFixed(2)}</span>
          </label>
        )}
        <p className="w-full text-[11px] leading-relaxed text-muted-foreground sm:w-auto sm:flex-1 sm:text-right">
          {def.note}
        </p>
      </div>

      {/* ==================== main scope + spectrum ==================== */}
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        {/* main scope */}
        <div className="min-w-0 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Partial sum vs target — one period
            </p>
            <div className="flex flex-wrap items-center gap-2 text-[10px]">
              <span className="inline-flex items-center gap-1 text-zinc-300"><span className="h-0.5 w-4 rounded bg-zinc-400" />target</span>
              <span className="inline-flex items-center gap-1 text-emerald-300"><span className="h-0.5 w-4 rounded bg-emerald-400" />sum</span>
              <button
                type="button"
                onClick={() => setShowComponents((s) => !s)}
                aria-pressed={showComponents}
                className={`rounded-md border px-2 py-0.5 text-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                  showComponents
                    ? 'border-teal-500/50 bg-teal-500/10 text-teal-300'
                    : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
                }`}
              >
                show components
              </button>
            </div>
          </div>
          <svg
            viewBox={`0 0 ${MW} ${MH}`}
            className="w-full"
            role="img"
            aria-label={`Partial sum of ${sliders.slice(1).filter((s) => s !== 0).length} harmonics against the ${def.label} target. RMS error ${(rmsErr * 100).toFixed(1)} percent of full scale.`}
          >
            <defs>
              <clipPath id="fl-plot-clip">
                <rect x={44} y={8} width={MW - 58} height={MH - 40} rx={6} />
              </clipPath>
            </defs>
            <rect x={44} y={8} width={MW - 58} height={MH - 40} rx={6} className="fill-zinc-950/40" />
            {/* grid */}
            {[0, 0.5, 1, 1.5, 2].map((u) => (
              <g key={`mg-${u}`}>
                <line x1={mx(u * Math.PI)} y1={8} x2={mx(u * Math.PI)} y2={MH - 32} className="stroke-zinc-500/12" />
                <text x={mx(u * Math.PI)} y={MH - 18} textAnchor="middle" fontSize={9} className="fill-zinc-500 font-mono">
                  {u === 0 ? '0' : `${u}π`}
                </text>
              </g>
            ))}
            <line x1={44} y1={my(0)} x2={MW - 14} y2={my(0)} className="stroke-zinc-500/50" strokeWidth={1} />
            <line x1={44} y1={my(1)} x2={MW - 14} y2={my(1)} className="stroke-zinc-500/15" strokeWidth={1} strokeDasharray="3 4" />
            <line x1={44} y1={my(-1)} x2={MW - 14} y2={my(-1)} className="stroke-zinc-500/15" strokeWidth={1} strokeDasharray="3 4" />

            <g clipPath="url(#fl-plot-clip)">
              {/* individual components */}
              {componentPaths.map((c, i) => (
                <path
                  key={`cp-${c.n}`}
                  d={c.d}
                  fill="none"
                  stroke={['#14b8a6', '#f59e0b', '#84cc16'][i % 3]}
                  strokeWidth={1.1}
                  opacity={0.55}
                />
              ))}

              {/* target */}
              <path d={targetPath} fill="none" className="stroke-zinc-400" strokeWidth={1.6} strokeDasharray="6 4" />
              {/* sum */}
              <motion.path
                d={sumPath}
                fill="none"
                className="stroke-emerald-400"
                strokeWidth={2.6}
                strokeLinejoin="round"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                key={`sum-${target}-${terms}`}
              />
            </g>

            {/* Gibbs highlight + inset */}
            {gibbs && (
              <g>
                <ellipse cx={mx(Math.PI)} cy={MH / 2} rx={46} ry={70} fill="none" className="stroke-amber-400/70" strokeWidth={1.6} strokeDasharray="5 4" />
                <text x={mx(Math.PI)} y={26} textAnchor="middle" fontSize={9} className="fill-amber-300">
                  ringing
                </text>
                {/* zoom inset */}
                <rect x={MW - 208} y={28} width={192} height={124} rx={6} className="fill-zinc-950/80 stroke-amber-400/40" />
                <text x={MW - 200} y={42} fontSize={8} className="fill-amber-300">
                  zoom ×18 at the jump
                </text>
                <line x1={MW - 206} y1={90 - (1 / 1.35) * 56} x2={MW - 14} y2={90 - (1 / 1.35) * 56} className="stroke-zinc-500/60" strokeWidth={1} strokeDasharray="3 3" />
                <line x1={MW - 206} y1={90 - (-1 / 1.35) * 56} x2={MW - 14} y2={90 - (-1 / 1.35) * 56} className="stroke-zinc-500/60" strokeWidth={1} strokeDasharray="3 3" />
                {gibbsInsetPath ? <path d={gibbsInsetPath} fill="none" className="stroke-emerald-400" strokeWidth={1.8} /> : null}
                <text x={MW - 104} y={146} textAnchor="middle" fontSize={9} className="fill-amber-300 font-mono">
                  overshoot +{gibbs.pct.toFixed(1)}% (Gibbs)
                </text>
              </g>
            )}
          </svg>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            <span className="rounded-lg border border-border bg-muted/20 px-2.5 py-1 font-mono text-[11px] tabular-nums text-muted-foreground">
              RMS error {(rmsErr * 100).toFixed(1)}% · energy captured {energyPct.toFixed(0)}%
            </span>
            <span className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1">
              <TeX tex={def.tex} />
            </span>
          </div>
        </div>

        {/* harmonic sliders */}
        <div className="min-w-0 rounded-xl border border-border bg-background/50 p-3">
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3">
            <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              <SlidersHorizontal className="h-3 w-3" /> Harmonic amplitudes
            </p>
            <p className="text-[10px] text-muted-foreground">s = sine · c = cosine</p>
          </div>
          <div className="flex flex-wrap items-end justify-center gap-1.5">
            {/* DC */}
            <div className="flex flex-col items-center gap-1">
              <span className="font-mono text-[10px] text-muted-foreground">a₀</span>
              <div className="flex h-44 w-6 items-stretch justify-center">
                <Slider
                  orientation="vertical"
                  min={0}
                  max={1.3}
                  step={0.01}
                  value={[sliders[0] ?? 0]}
                  onValueChange={(v) => setSliders((s) => [v[0] ?? 0, ...s.slice(1)])}
                  aria-label="DC term a0"
                  className="h-full"
                />
              </div>
              <span className="font-mono text-[9px] tabular-nums text-foreground">{(sliders[0] ?? 0).toFixed(2)}</span>
            </div>
            {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => {
              const isTheory = theory.amp[n - 1] !== 0
              return (
                <div key={`hs-${n}`} className="flex flex-col items-center gap-1">
                  <span className={`font-mono text-[10px] ${n % 2 === 1 ? 'text-foreground' : 'text-muted-foreground/70'}`}>{n}</span>
                  <div className="flex h-44 w-6 items-stretch justify-center">
                    <Slider
                      orientation="vertical"
                      min={-1.3}
                      max={1.3}
                      step={0.01}
                      value={[sliders[n] ?? 0]}
                      onValueChange={(v) => setSliders((s) => s.map((x, k) => (k === n ? v[0] ?? 0 : x)))}
                      aria-label={`Harmonic ${n} amplitude${theory.cos[n - 1] ? ', cosine basis' : ', sine basis'}`}
                      className="h-full"
                    />
                  </div>
                  <span className={`font-mono text-[9px] tabular-nums ${isTheory ? 'text-amber-300/90' : 'text-foreground/80'}`}>
                    {(sliders[n] ?? 0).toFixed(2)}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="mt-3 space-y-2">
            <label className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="shrink-0">terms K</span>
              <Slider
                min={1}
                max={15}
                step={1}
                value={[terms]}
                onValueChange={(v) => {
                  const k = v[0] ?? 1
                  setTerms(k)
                  fillTerms(k, target, duty)
                }}
                className="flex-1"
                aria-label="Number of theoretical harmonics included"
              />
              <span className="w-6 font-mono text-xs tabular-nums text-foreground">{terms}</span>
            </label>
            <div className="flex flex-wrap items-center gap-1.5">
              <Button size="sm" variant="outline" onClick={matchAll}>
                <Wand2 className="mr-1 h-3.5 w-3.5" />Match exactly (15)
              </Button>
              <Button size="sm" variant="ghost" onClick={zeroAll}>
                <RotateCcw className="mr-1 h-3.5 w-3.5" />Zero all
              </Button>
            </div>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              The K slider snaps the first K harmonics onto theory; the individual sliders let you stray —
              watch the RMS error and the sum respond. Amber numbers mark harmonics the target actually
              uses.
            </p>
          </div>
        </div>
      </div>

      {/* ==================== spectrum ==================== */}
      <div className="mt-4 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
        <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Spectrum — your bars vs the theoretical coefficients
          </p>
          <div className="flex flex-wrap items-center gap-2 text-[10px]">
            <span className="inline-flex items-center gap-1 text-emerald-300"><span className="h-2 w-2 rounded-sm bg-emerald-400" />your amplitude</span>
            <span className="inline-flex items-center gap-1 text-amber-300"><span className="h-2 w-2 rotate-45 bg-amber-400" />theory</span>
          </div>
        </div>
        <svg viewBox={`0 0 ${SPW} ${SPH}`} className="w-full" role="img" aria-label="Amplitude spectrum by harmonic number with theoretical coefficient markers">
          <rect x={40} y={10} width={SPW - 54} height={SPH - 44} rx={6} className="fill-zinc-950/40" />
          {/* zero line */}
          <line x1={40} y1={SPH / 2 - 12} x2={SPW - 14} y2={SPH / 2 - 12} className="stroke-zinc-500/50" strokeWidth={1} />
          {/* unit lines */}
          <line x1={40} y1={(SPH / 2 - 12) - (1 / 1.45) * (SPH / 2 - 26)} x2={SPW - 14} y2={(SPH / 2 - 12) - (1 / 1.45) * (SPH / 2 - 26)} className="stroke-zinc-500/15" strokeDasharray="3 4" />
          <line x1={40} y1={(SPH / 2 - 12) + (1 / 1.45) * (SPH / 2 - 26)} x2={SPW - 14} y2={(SPH / 2 - 12) + (1 / 1.45) * (SPH / 2 - 26)} className="stroke-zinc-500/15" strokeDasharray="3 4" />

          {/* DC slot */}
          {(() => {
            const bx = 58
            const sv = sliders[0] ?? 0
            const tv = theory.dc
            const zero = SPH / 2 - 12
            const up = (v: number) => zero - (v / 1.45) * (SPH / 2 - 26)
            return (
              <g>
                <rect x={bx - 7} y={Math.min(zero, up(sv))} width={14} height={Math.max(1.5, Math.abs(zero - up(sv)))} rx={2} className="fill-emerald-400/90" />
                <rect x={bx - 3.5} y={up(tv) - 3.5} width={7} height={7} transform={`rotate(45 ${bx} ${up(tv)})`} className="fill-amber-400" />
                <text x={bx} y={SPH - 24} textAnchor="middle" fontSize={9} className="fill-zinc-400 font-mono">a₀</text>
              </g>
            )
          })()}

          {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => {
            const bx = 96 + (n - 1) * ((SPW - 130) / 14)
            const sv = sliders[n] ?? 0
            const tv = theory.amp[n - 1]
            const zero = SPH / 2 - 12
            const up = (v: number) => zero - (v / 1.45) * (SPH / 2 - 26)
            const isTheory = tv !== 0
            return (
              <g key={`sp-${n}`}>
                {n % 2 === 0 && <rect x={bx - ((SPW - 130) / 28)} y={10} width={(SPW - 130) / 14} height={SPH - 44} className="fill-zinc-500/5" />}
                <rect
                  x={bx - 7}
                  y={Math.min(zero, up(sv))}
                  width={14}
                  height={Math.max(1.5, Math.abs(zero - up(sv)))}
                  rx={2}
                  className={sv >= 0 ? 'fill-emerald-400/90' : 'fill-teal-400/90'}
                />
                {isTheory && (
                  <rect
                    x={bx - 3.5}
                    y={up(tv) - 3.5}
                    width={7}
                    height={7}
                    transform={`rotate(45 ${bx} ${up(tv)})`}
                    className="fill-amber-400"
                  />
                )}
                <text x={bx} y={SPH - 24} textAnchor="middle" fontSize={9} className={`${n % 2 === 1 ? 'fill-zinc-300' : 'fill-zinc-500'} font-mono`}>
                  {n}
                </text>
              </g>
            )
          })}
          <text x={SPW - 46} y={SPH - 10} textAnchor="end" fontSize={9} className="fill-zinc-500">
            harmonic number n{target === 'pulse' ? ` · zeros of the envelope at n = ${(1 / duty).toFixed(1)}, ${2 / duty < 15 ? (2 / duty).toFixed(1) : ''}` : ''}
          </text>
        </svg>
        <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
          Even-harmonic columns are dimmed where the target has no content (square, triangle). Shaded
          bands never lie: park every bar on its amber diamond and the RMS error reads the leftover
          truncation only.
        </p>
      </div>

      {/* ==================== epicycles ==================== */}
      <div className="mt-4 grid gap-4 lg:grid-cols-[0.44fr_1fr]">
        <div className="min-w-0 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Epicycles</p>
            <p className="font-mono text-[10px] tabular-nums text-muted-foreground">θ = {(epiTheta % 6.283).toFixed(2)} rad</p>
          </div>
          <svg viewBox={`0 0 ${EPH_W} ${EPH_H}`} className="w-full select-none" role="img" aria-label="Rotating phasors added tip to tail; their vertical projection traces the wave">
            {/* faint circles at joints */}
            {chain.slice(0, -1).map((p, i) => {
              const nxt = chain[i + 1]
              const r = Math.hypot(nxt.x - p.x, nxt.y - p.y) * chainScale
              return (
                <circle
                  key={`ec-${i}`}
                  cx={EPH_W / 2 + p.x * chainScale}
                  cy={EPH_H / 2 - p.y * chainScale}
                  r={r}
                  fill="none"
                  className="stroke-zinc-500/20"
                  strokeWidth={1}
                />
              )
            })}
            {/* vectors */}
            {chain.slice(0, -1).map((p, i) => {
              const nxt = chain[i + 1]
              const colors = ['#10b981', '#14b8a6', '#f59e0b', '#f43f5e', '#84cc16']
              return (
                <line
                  key={`ev-${i}`}
                  x1={EPH_W / 2 + p.x * chainScale}
                  y1={EPH_H / 2 - p.y * chainScale}
                  x2={EPH_W / 2 + nxt.x * chainScale}
                  y2={EPH_H / 2 - nxt.y * chainScale}
                  stroke={colors[i % colors.length]}
                  strokeWidth={2.4}
                  strokeLinecap="round"
                />
              )
            })}
            {/* start point */}
            <circle cx={EPH_W / 2} cy={EPH_H / 2 - dc * chainScale} r={3} className="fill-zinc-400" />
            {/* tip */}
            {chain.length > 1 && (
              <>
                <circle
                  cx={EPH_W / 2 + chain[chain.length - 1].x * chainScale}
                  cy={EPH_H / 2 - chain[chain.length - 1].y * chainScale}
                  r={5}
                  className="fill-amber-400"
                  stroke="#09090b"
                  strokeWidth={1.4}
                />
                <line
                  x1={EPH_W / 2 + chain[chain.length - 1].x * chainScale}
                  y1={EPH_H / 2 - chain[chain.length - 1].y * chainScale}
                  x2={14}
                  y2={EPH_H / 2 - chain[chain.length - 1].y * chainScale}
                  className="stroke-amber-400/50"
                  strokeWidth={1}
                  strokeDasharray="3 4"
                />
              </>
            )}
            {/* projection axis */}
            <line x1={14} y1={16} x2={14} y2={EPH_H - 16} className="stroke-amber-400/40" strokeWidth={3} />
          </svg>
        </div>

        {/* trace scope */}
        <div className="min-w-0 space-y-3">
          <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                The traced sum — two periods
              </p>
              <p className="text-[10px] text-muted-foreground">
                {sliders.slice(1).filter((s) => s !== 0).length} rotating components
              </p>
            </div>
            <svg viewBox={`0 0 ${ETR_W} ${ETR_H}`} className="w-full" role="img" aria-label="Epicycle trace of the partial sum over two periods">
              <rect x={42} y={10} width={ETR_W - 58} height={ETR_H - 40} rx={6} className="fill-zinc-950/40" />
              <line x1={42} y1={ETR_H / 2} x2={ETR_W - 16} y2={ETR_H / 2} className="stroke-zinc-500/50" strokeWidth={1} />
              {[0, 0.5, 1, 1.5, 2].map((u) => (
                <g key={`et-${u}`}>
                  <line x1={44 + u * (ETR_W - 60)} y1={10} x2={44 + u * (ETR_W - 60)} y2={ETR_H - 30} className="stroke-zinc-500/12" />
                  <text x={44 + u * (ETR_W - 60)} y={ETR_H - 16} textAnchor="middle" fontSize={9} className="fill-zinc-500 font-mono">
                    {u === 0 ? '0' : `${u}π`}
                  </text>
                </g>
              ))}
              <path d={epiTracePath} fill="none" className="stroke-emerald-400/30" strokeWidth={1.6} strokeDasharray="5 4" />
              {trailPath ? <path d={trailPath} fill="none" className="stroke-emerald-300" strokeWidth={2.6} strokeLinecap="round" /> : null}
              {trail.length > 0 && (
                <circle
                  cx={44 + (trail[trail.length - 1].x / (4 * Math.PI)) * (ETR_W - 60)}
                  cy={ETR_H / 2 - (trail[trail.length - 1].y / 1.55) * (ETR_H / 2 - 16)}
                  r={4}
                  className="fill-amber-400"
                  stroke="#09090b"
                  strokeWidth={1.2}
                />
              )}
            </svg>
          </div>

          <div className="space-y-2.5 rounded-xl border border-border p-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <Button size="sm" onClick={() => setPlaying((p) => !p)}>
                {playing ? (
                  <>
                    <Pause className="mr-1 h-3.5 w-3.5" />Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-1 h-3.5 w-3.5" />Rotate
                  </>
                )}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setPlaying(false)
                  thetaRef.current = 0
                  lastMod.current = 0
                  setEpiTheta(0)
                  setTrail([])
                }}
                aria-label="Reset epicycle angle"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <label className="ml-2 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="shrink-0">speed</span>
                <Slider
                  min={0.15}
                  max={2}
                  step={0.05}
                  value={[speed]}
                  onValueChange={(v) => setSpeed(v[0] ?? 0.7)}
                  className="w-28"
                  aria-label="Epicycle rotation speed"
                />
                <span className="font-mono text-xs tabular-nums text-foreground">{speed.toFixed(2)}</span>
              </label>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="rounded-lg border border-border bg-muted/20 px-2.5 py-1">
                <TeX tex="f(\\theta)=a_0+\\sum_{n=1}^{15} c_n\\,\\mathrm{basis}_n(n\\theta)" />
              </span>
              <span className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1">
                <TeX tex={`f(${(epiTheta % 6.283).toFixed(2)})=${partial(epiTheta).toFixed(3)}`} />
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Each rotating vector turns n times faster than the last; the vertical position of the amber
              tip is the partial sum. This is the machine Fourier had in mind — a sum of circular motions
              drawing any periodic wave.
            </p>
          </div>
        </div>
      </div>

      {/* try this */}
      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          on <span className="font-medium text-foreground">Square, 5 terms</span> toggle{' '}
          <span className="font-medium text-foreground">show components</span> — the flat top is three odd
          sines cancelling their midpoints. Then drag K from 5 to 15 and keep one eye on the amber inset:
          the ripples narrow but the overshoot stays near 9% — Gibbs never surrenders. Finally load{' '}
          <span className="font-medium text-foreground">Band-limited pulse</span> and compare the pulse
          width with the spectrum: the sinc envelope&apos;s first zero sits at n = 1/D = 10, so any channel
          that passes fewer than ten harmonics must smear those edges — and sampling below twice the
          highest surviving harmonic would alias them for good.
        </span>
      </div>
    </div>
  )
}
