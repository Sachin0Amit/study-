'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Activity, Lightbulb, Pause, Play, RotateCcw, Waves } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Formatting (engineering units)                                     */
/* ------------------------------------------------------------------ */

function trim(v: number): string {
  if (!Number.isFinite(v)) return '—'
  const a = Math.abs(v)
  if (a === 0) return '0'
  if (a >= 100) return v.toFixed(0)
  if (a >= 10) return String(Number(v.toFixed(1)))
  if (a >= 1) return String(Number(v.toFixed(2)))
  return String(Number(v.toPrecision(3)))
}
function fmtV(v: number): string {
  return `${trim(v)} V`
}
function fmtA(i: number): string {
  const a = Math.abs(i)
  if (a >= 1) return `${trim(i)} A`
  if (a >= 1e-3) return `${trim(i * 1e3)} mA`
  return `${trim(i * 1e6)} µA`
}
function fmtOhm(r: number): string {
  if (r >= 1e6) return `${trim(r / 1e6)} MΩ`
  if (r >= 1e3) return `${trim(r / 1e3)} kΩ`
  return `${trim(r)} Ω`
}
function fmtH(l: number): string {
  if (l >= 1) return `${trim(l)} H`
  if (l >= 1e-3) return `${trim(l * 1e3)} mH`
  return `${trim(l * 1e6)} µH`
}
function fmtF(c: number): string {
  if (c >= 1e-6) return `${trim(c / 1e-6)} µF`
  if (c >= 1e-9) return `${trim(c / 1e-9)} nF`
  return `${trim(c / 1e-12)} pF`
}
function fmtT(t: number): string {
  const a = Math.abs(t)
  if (a >= 1) return `${trim(t)} s`
  if (a >= 1e-3) return `${trim(t * 1e3)} ms`
  if (a >= 1e-6) return `${trim(t * 1e6)} µs`
  return `${trim(t * 1e9)} ns`
}
function fmtJ(e: number): string {
  const a = Math.abs(e)
  if (a >= 1) return `${trim(e)} J`
  if (a >= 1e-3) return `${trim(e * 1e3)} mJ`
  if (a >= 1e-6) return `${trim(e * 1e6)} µJ`
  return `${trim(e * 1e9)} nJ`
}
function fmtRate(w: number): string {
  const a = Math.abs(w)
  if (a >= 1e6) return `${trim(w / 1e6)} Mrad/s`
  if (a >= 1e3) return `${trim(w / 1e3)} krad/s`
  return `${trim(w)} rad/s`
}
function fmtTn(v: number): string {
  if (!Number.isFinite(v)) return '\\mathrm{n/a}'
  return String(Number(v.toPrecision(3)))
}

/* ------------------------------------------------------------------ */
/*  Physics                                                            */
/* ------------------------------------------------------------------ */

type Mode = 'rc' | 'rl' | 'rlc'
type Regime = 'under' | 'critical' | 'over'

interface Derived {
  tau: number
  alpha: number
  omega0: number
  wd: number
  zeta: number
  regime: Regime
  s1: number
  s2: number
  ton: number
  T: number
}

function derive(mode: Mode, r: number, l: number, c: number): Derived {
  if (mode === 'rc') {
    const tau = r * c
    return {
      tau, alpha: 1 / tau, omega0: 0, wd: 0, zeta: 0, regime: 'critical',
      s1: -1 / tau, s2: -1 / tau, ton: 5 * tau, T: 10 * tau,
    }
  }
  if (mode === 'rl') {
    const tau = l / r
    return {
      tau, alpha: 1 / tau, omega0: 0, wd: 0, zeta: 0, regime: 'critical',
      s1: -1 / tau, s2: -1 / tau, ton: 5 * tau, T: 10 * tau,
    }
  }
  const alpha = r / (2 * l)
  const omega0 = 1 / Math.sqrt(l * c)
  const zeta = (r / 2) * Math.sqrt(c / l)
  const eps = 1e-12 * omega0 * omega0
  const disc = alpha * alpha - omega0 * omega0
  let regime: Regime
  if (disc < -eps) regime = 'under'
  else if (disc <= eps) regime = 'critical'
  else regime = 'over'
  const wd = regime === 'under' ? Math.sqrt(-disc) : 0
  const beta = regime === 'over' ? Math.sqrt(disc) : 0
  let T: number
  if (regime === 'under') T = Math.max(6 / alpha, (8 * Math.PI) / wd)
  else if (regime === 'over') T = 8 / Math.max(alpha - beta, 1e-12)
  else T = 8 / alpha
  return {
    tau: 1 / alpha,
    alpha, omega0, wd, zeta, regime,
    s1: -alpha + beta, s2: -alpha - beta,
    ton: 0.6 * T, T,
  }
}

/** closed-form v_C for the series RLC step with final value vf and initial conditions */
function rlcVC(
  d: Derived,
  c: number,
  vf: number,
  v0: number,
  i0: number
): (t: number) => number {
  if (d.regime === 'under') {
    const k = (i0 / c + d.alpha * (v0 - vf)) / d.wd
    return (t) =>
      vf +
      Math.exp(-d.alpha * t) * ((v0 - vf) * Math.cos(d.wd * t) + k * Math.sin(d.wd * t))
  }
  if (d.regime === 'critical') {
    const k = i0 / c + d.alpha * (v0 - vf)
    return (t) => vf + ((v0 - vf) + k * t) * Math.exp(-d.alpha * t)
  }
  const den = d.s1 - d.s2
  const a1 = (i0 / c - d.s2 * (v0 - vf)) / den
  const a2 = v0 - vf - a1
  return (t) => vf + a1 * Math.exp(d.s1 * t) + a2 * Math.exp(d.s2 * t)
}

/** analytic response value at time t (v_C for rc/rlc, i_L for rl) */
function analyticAt(
  mode: Mode,
  d: Derived,
  vs: number,
  r: number,
  c: number,
  t: number
): number {
  if (mode === 'rc') {
    if (t < d.ton) return vs * (1 - Math.exp(-t / d.tau))
    const v1 = vs * (1 - Math.exp(-d.ton / d.tau))
    return v1 * Math.exp(-(t - d.ton) / d.tau)
  }
  if (mode === 'rl') {
    const iinf = vs / r
    if (t < d.ton) return iinf * (1 - Math.exp(-t / d.tau))
    const i1 = iinf * (1 - Math.exp(-d.ton / d.tau))
    return i1 * Math.exp(-(t - d.ton) / d.tau)
  }
  if (t < d.ton) return rlcVC(d, c, vs, 0, 0)(t)
  const f1 = rlcVC(d, c, vs, 0, 0)
  const h = d.T / 1e6
  const v1 = f1(d.ton)
  const i1 = (f1(d.ton + h) - f1(d.ton - h)) / (2 * h)
  return rlcVC(d, c, 0, v1, i1)(t - d.ton)
}

/** inductor voltage for RL mode (the kickback trace) */
function rlVL(mode: Mode, d: Derived, vs: number, r: number, t: number): number {
  if (mode !== 'rl') return 0
  const iinf = vs / r
  if (t < d.ton) return vs * Math.exp(-t / d.tau)
  const i1 = iinf * (1 - Math.exp(-d.ton / d.tau))
  return -r * i1 * Math.exp(-(t - d.ton) / d.tau)
}

/** RK4 integration of the state equations; also accumulates energies */
interface SimResult {
  ts: number[]
  v: number[]
  i: number[]
  ec: number[]
  el: number[]
  er: number[]
  n: number
}

function simulate(
  mode: Mode,
  vs: number,
  r: number,
  l: number,
  c: number,
  d: Derived
): SimResult {
  const N = 1600
  const dt = d.T / N
  const src = (t: number): number => (t < d.ton ? vs : 0)
  /* state: x = v_C (rc/rlc) or i_L (rl); y = i_L (rlc only) */
  const f = (t: number, x: number, y: number): [number, number] => {
    if (mode === 'rc') return [(src(t) - x) / (r * c), 0]
    if (mode === 'rl') return [(src(t) - r * x) / l, 0]
    return [y / c, (src(t) - r * y - x) / l]
  }
  const power = (t: number, x: number, y: number): number => {
    if (mode === 'rc') return ((src(t) - x) * (src(t) - x)) / r
    if (mode === 'rl') return x * x * r
    return y * y * r
  }
  let x = 0
  let y = 0
  let e = 0
  const ts: number[] = []
  const vv: number[] = []
  const ii: number[] = []
  const ec: number[] = []
  const el: number[] = []
  const er: number[] = []
  for (let k = 0; k <= N; k++) {
    const t = k * dt
    ts.push(t)
    vv.push(x)
    ii.push(y)
    if (mode === 'rc') {
      ec.push(0.5 * c * x * x)
      el.push(0)
    } else if (mode === 'rl') {
      ec.push(0)
      el.push(0.5 * l * x * x)
    } else {
      ec.push(0.5 * c * x * x)
      el.push(0.5 * l * y * y)
    }
    er.push(e)
    if (k === N) break
    const k1 = f(t, x, y)
    const k2 = f(t + dt / 2, x + (k1[0] * dt) / 2, y + (k1[1] * dt) / 2)
    const k3 = f(t + dt / 2, x + (k2[0] * dt) / 2, y + (k2[1] * dt) / 2)
    const k4 = f(t + dt, x + k3[0] * dt, y + k3[1] * dt)
    e += power(t + dt / 2, x, y) * dt
    x += (dt / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0])
    y += (dt / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])
  }
  return { ts, v: vv, i: ii, ec, el, er, n: N }
}

/* ------------------------------------------------------------------ */
/*  Presets                                                            */
/* ------------------------------------------------------------------ */

interface Preset {
  key: string
  label: string
  mode: Mode
  vs: number
  r: number
  l: number
  c: number
  note: string
  chip: string
}

const PRESETS: Preset[] = [
  {
    key: 'slowrc',
    label: 'Slow RC (τ=2s)',
    mode: 'rc',
    vs: 12,
    r: 2000,
    l: 0.01,
    c: 1e-3,
    note: 'τ = RC = 2 kΩ × 1000 µF = 2 s — a transient you can watch in real time. It reaches 63.2 % of 12 V at 1τ, 99.3 % at 5τ, then the source switches off and the capacitor discharges through the same resistor (Hughes Ch 4.4).',
    chip: '\\tau = RC = 2\\;\\mathrm{s}',
  },
  {
    key: 'rlkick',
    label: 'RL kickback',
    mode: 'rl',
    vs: 24,
    r: 24,
    l: 2.4,
    c: 1e-7,
    note: '24 V across 24 Ω through 2.4 H: the current ramps toward 1 A with τ = L/R = 0.1 s. Watch the teal v_L trace slam to −24 V the instant the switch opens — the inductor will not let its current jump (Ch 6). This reversed spike is what arcs across switches and kills relay contacts.',
    chip: 'v_L(0^+) = -V_s\\left(1-e^{-5}\\right) \\approx -24\\;\\mathrm{V}',
  },
  {
    key: 'ringy',
    label: 'Ringy RLC (ζ=0.1)',
    mode: 'rlc',
    vs: 12,
    r: 200,
    l: 1,
    c: 1e-6,
    note: 'α = 100 rad/s, ω₀ = 1000 rad/s, ζ = 0.1: a bell of a circuit. The energy sloshes between L and C about eight times while R bleeds it away — follow the energy bars as the sweep runs (Ch 7.1).',
    chip: '\\zeta=0.1,\\;\\omega_d=995\\;\\mathrm{rad/s}',
  },
  {
    key: 'critical',
    label: 'Critically damped',
    mode: 'rlc',
    vs: 12,
    r: 2000,
    l: 1,
    c: 1e-6,
    note: 'R = 2√(L/C) = 2 kΩ exactly, so ζ = 1: the boundary between ringing and crawling. Fastest possible approach to 12 V with no overshoot — the damping every movement controller aims for (Ch 7.2).',
    chip: 'R = 2\\sqrt{L/C} = 2\\;\\mathrm{k\\Omega},\\;\\zeta=1',
  },
  {
    key: 'nilsson811',
    label: 'Nilsson 8.11',
    mode: 'rlc',
    vs: 100,
    r: 560,
    l: 0.1,
    c: 1e-7,
    note: 'The textbook series RLC step: 560 Ω, 100 mH, 0.1 µF, 100 V → α = 2800, ω_d = 9600 rad/s, ζ = 0.28. The scope shows v_C; differentiate it (the panel below) and you have the book’s inductor current 0.1042e⁻²⁸⁰⁰ᵗ sin 9600t A, sign per its reference direction.',
    chip: 'v_C = 100 - e^{-2800t}\\left(100\\cos 9600t + 29.2\\sin 9600t\\right)\\;\\mathrm{V}',
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const R_LOGS: [number, number] = [0, 5] // 1 Ω … 100 kΩ
const L_LOGS: [number, number] = [-6, 1] // 1 µH … 10 H
const C_LOGS: [number, number] = [-10, -3] // 100 pF … 1000 µF

export default function TransientLab() {
  const reduce = useReducedMotion()
  const [mode, setMode] = useState<Mode>('rc')
  const [vs, setVs] = useState(12)
  const [rT, setRT] = useState(Math.log10(2000))
  const [lT, setLT] = useState(0)
  const [cT, setCT] = useState(-3)
  const [presetKey, setPresetKey] = useState('slowrc')
  const [playing, setPlaying] = useState(false)
  const [tFrac, setTFrac] = useState(0)
  const [speed, setSpeed] = useState(1)
  const tFracRef = useRef(0)
  const setCursor = (v: number) => {
    tFracRef.current = v
    setTFrac(v)
  }

  const r = Math.pow(10, rT)
  const l = Math.pow(10, lT)
  const c = Math.pow(10, cT)

  const d = useMemo(() => derive(mode, r, l, c), [mode, r, l, c])
  const sim = useMemo(() => simulate(mode, vs, r, l, c, d), [mode, vs, r, l, c, d])

  const applyPreset = (key: string) => {
    const p = PRESETS.find((x) => x.key === key)
    if (!p) return
    setMode(p.mode)
    setVs(p.vs)
    setRT(Math.log10(p.r))
    setLT(Math.log10(p.l))
    setCT(Math.log10(p.c))
    setPresetKey(p.key)
    setCursor(0)
    setPlaying(false)
  }
  const activePreset = PRESETS.find((p) => p.key === presetKey) ?? null

  const touchParam = () => setPresetKey('')

  /* ---------- sweep animation ---------- */
  useEffect(() => {
    if (!playing) return
    let last: number | null = null
    let raf = 0
    const tick = (ts: number) => {
      if (last === null) last = ts
      const dtReal = (ts - last) / 1000
      last = ts
      const next = Math.min(tFracRef.current + (dtReal / 6) * speed, 1)
      setCursor(next)
      if (next >= 1) {
        setPlaying(false)
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing, speed])

  const tCur = tFrac * d.T

  /* ---------- scope geometry ---------- */
  const W = 640
  const SRC_TOP = 20
  const SRC_BOT = 96
  const RSP_TOP = 132
  const RSP_BOT = 384
  const PL = 54
  const PR = 14
  const PW = W - PL - PR
  const xOf = (t: number): number => PL + (t / d.T) * PW
  const xCur = PL + tFrac * PW

  /* response samples + scale */
  const N_CURVE = 440
  const samples = useMemo(() => {
    const out: number[] = []
    for (let i = 0; i <= N_CURVE; i++) out.push(analyticAt(mode, d, vs, r, c, (i / N_CURVE) * d.T))
    return out
  }, [mode, d, vs, r, c])

  const finalVal = mode === 'rl' ? vs / r : vs
  let yLo = 0
  let yHi = Math.max(finalVal, 1e-12) * 0.02
  for (const s of samples) {
    if (s < yLo) yLo = s
    if (s > yHi) yHi = s
  }
  const pad = (yHi - yLo) * 0.08 || 1e-12
  yLo -= pad
  yHi += pad
  if (finalVal > yLo && finalVal < yHi) {
    /* keep final value strictly inside */
  }
  const yOf = (v: number): number => RSP_TOP + ((yHi - v) / (yHi - yLo)) * (RSP_BOT - RSP_TOP)

  const curvePath = samples
    .map((s, i) => `${i === 0 ? 'M' : 'L'}${xOf((i / N_CURVE) * d.T).toFixed(1)},${yOf(s).toFixed(1)}`)
    .join('')

  const vlPath =
    mode === 'rl'
      ? samples
          .map((_, i) => {
            const t = (i / N_CURVE) * d.T
            const vl = rlVL(mode, d, vs, r, t)
            const yv = RSP_TOP + ((1.12 * vs - vl) / (2.24 * vs)) * (RSP_BOT - RSP_TOP)
            return `${i === 0 ? 'M' : 'L'}${xOf(t).toFixed(1)},${yv.toFixed(1)}`
          })
          .join('')
      : ''

  /* simulation dots */
  const DOT_N = 40
  const dots = useMemo(() => {
    const out: { t: number; v: number }[] = []
    for (let k = 0; k <= DOT_N; k++) {
      const idx = Math.round((k / DOT_N) * sim.n)
      out.push({ t: sim.ts[idx], v: mode === 'rl' ? sim.v[idx] : sim.v[idx] })
    }
    return out
  }, [sim, mode])

  /* readouts at the cursor (from the simulation, matching the dots) */
  const idxNow = Math.min(Math.round(tFrac * sim.n), sim.n)
  const vNow = sim.v[idxNow]
  const iNow = mode === 'rlc' ? sim.i[idxNow] : mode === 'rl' ? vNow : (vs !== 0 && tCur < d.ton ? (vs - vNow) / r : -vNow / r)
  const pct = (analyticAt(mode, d, vs, r, c, tCur) / (finalVal || 1)) * 100

  /* energies (RLC) */
  const eC = 0.5 * c * vNow * vNow
  const eL = 0.5 * l * iNow * iNow
  const eR = sim.er[idxNow]
  const maxTotal = useMemo(() => {
    let m = 0
    for (let k = 0; k <= sim.n; k++) m = Math.max(m, sim.ec[k] + sim.el[k] + sim.er[k])
    return m || 1e-12
  }, [sim])

  /* time ticks */
  const timeTicks = useMemo(() => {
    const raw = d.T / 5
    const mag = Math.pow(10, Math.floor(Math.log10(raw)))
    const step = [1, 2, 5, 10].map((m) => m * mag).find((s) => d.T / s <= 6.5) ?? 10 * mag
    const out: number[] = []
    for (let t = 0; t <= d.T * 1.0001; t += step) out.push(t)
    return out
  }, [d.T])

  const TAU_PCT = ['63.2%', '86.5%', '95.0%', '98.2%', '99.3%']

  /* ---------- TeX readouts ---------- */
  const rootsTex =
    mode !== 'rlc'
      ? `s = -\\frac{1}{\\tau} = ${fmtTn(d.s1)}\\;\\mathrm{s^{-1}}`
      : d.regime === 'under'
        ? `s_{1,2} = -\\alpha \\pm j\\omega_d = ${fmtTn(-d.alpha)} \\pm j${fmtTn(d.wd)}\\;\\mathrm{rad/s}`
        : d.regime === 'critical'
          ? `s_{1,2} = -\\alpha = ${fmtTn(-d.alpha)}\\;\\mathrm{rad/s}\\;(\\mathrm{double})`
          : `s_{1,2} = ${fmtTn(d.s1)},\\;${fmtTn(d.s2)}\\;\\mathrm{rad/s}`

  const formulaTex =
    mode === 'rc'
      ? `v_C(t) = ${fmtTn(vs)}\\left(1 - e^{-t/${fmtTn(d.tau)}}\\right)\\;\\mathrm{V},\\qquad \\tau = RC = ${fmtTn(d.tau)}\\;\\mathrm{s}`
      : mode === 'rl'
        ? `i_L(t) = ${fmtTn(vs / r)}\\left(1 - e^{-t/${fmtTn(d.tau)}}\\right)\\;\\mathrm{A},\\qquad \\tau = \\frac{L}{R} = ${fmtTn(d.tau)}\\;\\mathrm{s}`
        : d.regime === 'under'
          ? `v_C(t) = V_s\\left[1 - e^{-${fmtTn(d.alpha)}t}\\left(\\cos ${fmtTn(d.wd)}t + \\frac{${fmtTn(d.alpha)}}{${fmtTn(d.wd)}}\\sin ${fmtTn(d.wd)}t\\right)\\right]`
          : d.regime === 'critical'
            ? `v_C(t) = V_s\\left[1 - (1 + ${fmtTn(d.alpha)}t)\\,e^{-${fmtTn(d.alpha)}t}\\right]`
            : `v_C(t) = V_s\\left[1 - \\frac{s_2e^{s_1t} - s_1e^{s_2t}}{s_2-s_1}\\right],\\;\\; s_{1,2} = ${fmtTn(d.s1)},${fmtTn(d.s2)}`

  const regimeBadge =
    mode !== 'rlc'
      ? null
      : d.regime === 'under'
        ? { text: 'underdamped — it rings', cls: 'border-teal-500/50 bg-teal-500/10 text-teal-300' }
        : d.regime === 'critical'
          ? { text: 'critically damped — fastest settle', cls: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300' }
          : { text: 'overdamped — sluggish', cls: 'border-amber-500/50 bg-amber-500/10 text-amber-300' }

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay, ease: 'easeOut' as const },
        }

  const liveSummary =
    mode === 'rlc'
      ? `Mode series RLC. Damping ratio ${trim(d.zeta)}, neper frequency ${fmtRate(d.alpha)}, resonant frequency ${fmtRate(d.omega0)}. ${regimeBadge?.text ?? ''}`
      : `Mode ${mode === 'rc' ? 'RC' : 'RL'}. Time constant ${fmtT(d.tau)}. Source ${fmtV(vs)}.`

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Activity className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">RC / RL / RLC Transient Scope</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Electronics Ch 4, 6, 7: a switched source on the top trace, the energy-storage element’s
            response below — analytic curve overlaid with numerical-integration dots, time-constant
            markers, damping regimes and live energy bookkeeping. Hughes 117–221 · Nilsson 208–343.
          </p>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {liveSummary}
      </p>

      {/* mode tabs */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <div
          className="flex items-center gap-1 rounded-lg border border-border bg-muted/30 p-0.5"
          role="group"
          aria-label="Circuit mode"
        >
          {(
            [
              ['rc', 'RC'],
              ['rl', 'RL'],
              ['rlc', 'Series RLC'],
            ] as [Mode, string][]
          ).map(([mk, label]) => (
            <button
              key={mk}
              type="button"
              onClick={() => {
                setMode(mk)
                setPresetKey('')
                setCursor(0)
                setPlaying(false)
              }}
              aria-pressed={mode === mk}
              className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                mode === mk
                  ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="text-[11px] text-muted-foreground">
          source steps {fmtV(vs)} at t = 0 and drops at t<sub>off</sub> = {fmtT(d.ton)}
        </span>
      </div>

      {/* presets */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
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

      {/* sliders */}
      <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
        <ParamSlider
          label="Source V_s"
          value={fmtV(vs)}
          min={1}
          max={100}
          step={1}
          raw={vs}
          onChange={(v) => {
            setVs(v)
            touchParam()
          }}
          aria="Source voltage in volts"
        />
        <ParamSlider
          label="Resistance R"
          value={fmtOhm(r)}
          min={R_LOGS[0]}
          max={R_LOGS[1]}
          step={0.01}
          raw={rT}
          onChange={(v) => {
            setRT(v)
            touchParam()
          }}
          aria="Resistance, logarithmic from 1 ohm to 100 kiloohm"
        />
        {(mode === 'rl' || mode === 'rlc') && (
          <ParamSlider
            label="Inductance L"
            value={fmtH(l)}
            min={L_LOGS[0]}
            max={L_LOGS[1]}
            step={0.01}
            raw={lT}
            onChange={(v) => {
              setLT(v)
              touchParam()
            }}
            aria="Inductance, logarithmic from 1 microhenry to 10 henry"
          />
        )}
        {(mode === 'rc' || mode === 'rlc') && (
          <ParamSlider
            label="Capacitance C"
            value={fmtF(c)}
            min={C_LOGS[0]}
            max={C_LOGS[1]}
            step={0.01}
            raw={cT}
            onChange={(v) => {
              setCT(v)
              touchParam()
            }}
            aria="Capacitance, logarithmic from 100 picofarad to 1000 microfarad"
          />
        )}
      </div>

      {/* scope */}
      <motion.div {...fade(0.05)} className="mt-4 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
        <div className="flex flex-wrap items-center gap-2 px-1">
          <Button
            size="sm"
            className="h-8 bg-emerald-600 px-3 text-xs hover:bg-emerald-500"
            onClick={() => {
              if (tFrac >= 1) setCursor(0)
              setPlaying((p) => !p)
            }}
            aria-label={playing ? 'Pause the sweep' : 'Play the sweep'}
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            <span className="ml-1">{playing ? 'Pause' : 'Play'}</span>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-8 px-2.5"
            onClick={() => {
              setCursor(0)
              setPlaying(false)
            }}
            aria-label="Reset the sweep to zero"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </Button>
          <div
            className="flex items-center gap-1 rounded-lg border border-border bg-muted/30 p-0.5"
            role="group"
            aria-label="Sweep speed"
          >
            {[0.5, 1, 2].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSpeed(s)}
                aria-pressed={speed === s}
                className={`rounded-md px-2 py-0.5 font-mono text-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                  speed === s
                    ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {s}×
              </button>
            ))}
          </div>
          <div className="flex min-w-[160px] flex-1 items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">cursor</span>
            <Slider
              min={0}
              max={1000}
              step={1}
              value={[Math.round(tFrac * 1000)]}
              onValueChange={(v) => setCursor((v[0] ?? 0) / 1000)}
              className="flex-1"
              aria-label="Sweep cursor position"
            />
            <span className="w-14 font-mono text-[11px] tabular-nums text-amber-300">{fmtT(tCur)}</span>
          </div>
        </div>

        <svg
          viewBox={`0 0 ${W} 404`}
          className="mt-2 w-full select-none"
          role="img"
          aria-label={
            mode === 'rlc'
              ? `Oscilloscope: source steps to ${fmtV(vs)} then drops at ${fmtT(d.ton)}; below, the series RLC capacitor voltage with damping ratio ${trim(d.zeta)}, ${regimeBadge?.text}. Amber dashed lines are not shown in this mode.`
              : `Oscilloscope: source steps to ${fmtV(vs)} then drops at ${fmtT(d.ton)}; below, the ${mode === 'rc' ? 'capacitor voltage' : 'inductor current'} with time constant ${fmtT(d.tau)}, amber dashed markers at one through five time constants carrying 63.2 to 99.3 percent of the final value.`
          }
        >
          {/* ---------- source panel ---------- */}
          <rect x={PL} y={SRC_TOP} width={PW} height={SRC_BOT - SRC_TOP} rx={6} className="fill-zinc-950/40" />
          <text x={PL + 8} y={SRC_TOP + 14} fontSize={10} className="fill-zinc-500 font-mono">
            source v(t)
          </text>
          <line
            x1={PL}
            y1={SRC_BOT - 8}
            x2={PL + PW}
            y2={SRC_BOT - 8}
            className="stroke-zinc-500/50"
            strokeWidth={1}
          />
          <path
            d={`M ${PL},${SRC_BOT - 8} L ${PL},${SRC_TOP + 18} L ${xOf(d.ton)},${SRC_TOP + 18} L ${xOf(d.ton)},${SRC_BOT - 8} L ${PL + PW},${SRC_BOT - 8}`}
            className="stroke-zinc-300"
            strokeWidth={1.8}
            fill="none"
          />
          <text x={xOf(d.ton) + 5} y={SRC_TOP + 14} fontSize={9.5} className="fill-zinc-500 font-mono">
            switch off
          </text>
          <text x={PL + 8} y={SRC_TOP + 30} fontSize={9.5} className="fill-emerald-300 font-mono">
            {fmtV(vs)}
          </text>

          {/* ---------- response panel ---------- */}
          <rect x={PL} y={RSP_TOP} width={PW} height={RSP_BOT - RSP_TOP} rx={6} className="fill-zinc-950/40" />

          {/* horizontal grid: fractions of the final value */}
          {[0, 0.25, 0.5, 0.75, 1].map((f) => (
            <g key={`gy-${f}`}>
              <line
                x1={PL}
                y1={yOf(finalVal * f)}
                x2={PL + PW}
                y2={yOf(finalVal * f)}
                className="stroke-zinc-500/15"
                strokeWidth={1}
              />
              <text
                x={PL - 6}
                y={yOf(finalVal * f) + 3.5}
                textAnchor="end"
                fontSize={9.5}
                className="fill-zinc-500 font-mono"
              >
                {Math.round(f * 100)}%
              </text>
            </g>
          ))}
          <text x={PL - 6} y={RSP_TOP + 12} textAnchor="end" fontSize={9.5} className="fill-emerald-300 font-mono">
            {mode === 'rl' ? fmtA(finalVal) : fmtV(finalVal)}
          </text>
          <text x={PL - 40} y={RSP_TOP + 24} fontSize={10} className="fill-zinc-400">
            {mode === 'rl' ? 'i_L' : 'v_C'}
          </text>

          {/* time ticks */}
          {timeTicks.map((t) => (
            <g key={`tt-${t}`}>
              <line
                x1={xOf(t)}
                y1={RSP_TOP}
                x2={xOf(t)}
                y2={RSP_BOT}
                className="stroke-zinc-500/10"
                strokeWidth={1}
              />
              <text x={xOf(t)} y={RSP_BOT + 14} textAnchor="middle" fontSize={9.5} className="fill-zinc-500 font-mono">
                {t === 0 ? '0' : fmtT(t)}
              </text>
            </g>
          ))}
          <text x={PL + PW / 2} y={RSP_BOT + 28} textAnchor="middle" fontSize={10} className="fill-zinc-400">
            time
          </text>

          {/* τ markers (first-order modes) */}
          {mode !== 'rlc' &&
            [1, 2, 3, 4, 5].map((k) => {
              const t = k * d.tau
              if (t > d.T * 0.995) return null
              return (
                <g key={`tau-${k}`}>
                  <line
                    x1={xOf(t)}
                    y1={RSP_TOP}
                    x2={xOf(t)}
                    y2={RSP_BOT}
                    className="stroke-amber-400/60"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                  />
                  <text x={xOf(t) + 3} y={RSP_TOP + 12} fontSize={9} className="fill-amber-300 font-mono">
                    {TAU_PCT[k - 1]}
                  </text>
                  <text x={xOf(t) + 3} y={RSP_BOT - 6} fontSize={9} className="fill-amber-400/80 font-mono">
                    {k}τ
                  </text>
                </g>
              )
            })}

          {/* v_L overlay for RL */}
          {mode === 'rl' && (
            <path d={vlPath} className="stroke-teal-400" strokeWidth={1.4} fill="none" strokeDasharray="5 4" />
          )}

          {/* analytic curve */}
          <path d={curvePath} className="stroke-emerald-400" strokeWidth={2.4} fill="none" strokeLinecap="round" />

          {/* simulation dots */}
          {dots.map((p, k) => (
            <circle key={`d-${k}`} cx={xOf(p.t)} cy={yOf(p.v)} r={2.4} className="fill-amber-400" />
          ))}

          {/* sweep cursor */}
          <line
            x1={xCur}
            y1={RSP_TOP}
            x2={xCur}
            y2={RSP_BOT}
            className="stroke-amber-400"
            strokeWidth={1.2}
          />
          <circle
            cx={xCur}
            cy={yOf(analyticAt(mode, d, vs, r, c, tCur))}
            r={4.5}
            className="fill-amber-300"
            stroke="#18181b"
            strokeWidth={1.2}
          />
          <circle cx={xCur} cy={SRC_TOP + 18} r={2.6} className="fill-amber-300" />
        </svg>

        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 px-1">
          <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <span className="inline-block h-0.5 w-5 rounded bg-emerald-400" /> analytic curve
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-400" /> RK4 simulation (
            {sim.n} steps)
          </span>
          {mode === 'rl' && (
            <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span className="inline-block h-0.5 w-5 rounded border-t border-dashed border-teal-400" /> v_L
              (own ±V_s scale)
            </span>
          )}
          {mode !== 'rlc' && (
            <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span className="inline-block h-3 w-0 border-l border-dashed border-amber-400/70" /> τ markers
              1τ–5τ
            </span>
          )}
        </div>
      </motion.div>

      {/* readouts */}
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {mode === 'rlc' ? (
          <>
            <StatChip label="damping ζ" value={trim(d.zeta)} tone="border-teal-500/40 bg-teal-500/5 text-teal-200" />
            <StatChip label="α (neper)" value={fmtRate(d.alpha)} tone="border-emerald-500/40 bg-emerald-500/5 text-emerald-200" />
            <StatChip label="ω₀" value={fmtRate(d.omega0)} tone="border-amber-500/40 bg-amber-500/5 text-amber-200" />
            <StatChip
              label={d.regime === 'under' ? 'ω_d (ring)' : '≈ α'}
              value={d.regime === 'under' ? fmtRate(d.wd) : fmtRate(d.alpha)}
              tone="border-rose-500/40 bg-rose-500/5 text-rose-200"
            />
          </>
        ) : (
          <>
            <StatChip label="τ" value={fmtT(d.tau)} tone="border-amber-500/40 bg-amber-500/5 text-amber-200" />
            <StatChip label="5τ (settled)" value={fmtT(5 * d.tau)} tone="border-emerald-500/40 bg-emerald-500/5 text-emerald-200" />
            <StatChip
              label={mode === 'rc' ? 'final v_C' : 'final i_L'}
              value={mode === 'rc' ? fmtV(vs) : fmtA(vs / r)}
              tone="border-teal-500/40 bg-teal-500/5 text-teal-200"
            />
            <StatChip label="cursor" value={fmtT(tCur)} tone="border-rose-500/40 bg-rose-500/5 text-rose-200" />
          </>
        )}
      </div>

      {mode === 'rlc' && regimeBadge && (
        <div className={`mt-2 flex flex-wrap items-center gap-2 rounded-xl border px-3 py-2 ${regimeBadge.cls}`}>
          <Waves className="h-4 w-4" />
          <span className="text-xs font-semibold">{regimeBadge.text}</span>
          <span className="rounded-lg border border-border bg-card px-2 py-0.5 text-xs text-foreground">
            <TeX tex={rootsTex} />
          </span>
        </div>
      )}

      {/* response formula + cursor values */}
      <motion.div {...fade(0.1)} className="mt-4 rounded-xl border border-border bg-background/50 p-3 sm:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-sm font-semibold text-foreground">Response equation — with your numbers</h4>
          {mode === 'rlc' && (
            <span className="rounded-lg border border-border bg-muted/30 px-2 py-0.5 text-xs text-foreground">
              <TeX tex={rootsTex} />
            </span>
          )}
        </div>
        <div className="mt-1.5 overflow-x-auto text-sm text-foreground">
          <TeX display tex={formulaTex} />
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] tabular-nums text-amber-300">
            t = {fmtT(tCur)}
          </span>
          <span className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] tabular-nums text-emerald-300">
            {mode === 'rl' ? `i_L = ${fmtA(vNow)}` : `v_C = ${fmtV(vNow)}`}
          </span>
          <span className="rounded-lg border border-teal-500/40 bg-teal-500/10 px-2.5 py-1 font-mono text-[11px] tabular-nums text-teal-300">
            {trim(pct)}% of final
          </span>
          <span className="rounded-lg border border-border bg-muted/30 px-2.5 py-1 font-mono text-[11px] tabular-nums text-muted-foreground">
            source {tCur < d.ton ? 'on' : 'off'}
          </span>
          {mode === 'rlc' && (
            <span className="rounded-lg border border-border bg-muted/30 px-2.5 py-1 font-mono text-[11px] tabular-nums text-muted-foreground">
              i_L = {fmtA(iNow)}
            </span>
          )}
        </div>
        <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
          The emerald curve is the closed form above; the amber dots are an independent RK4 numerical
          integration of the state equations — they agree to sub-pixel accuracy, which is the whole point
          of Ch 4.4’s step-by-step method meeting Ch 7’s classical ODE solution.
        </p>
      </motion.div>

      {/* energy bars (RLC) */}
      {mode === 'rlc' && (
        <motion.div {...fade(0.15)} className="mt-4 rounded-xl border border-border bg-background/50 p-3 sm:p-4">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-sm font-semibold text-foreground">Energy exchange — ½CV² and ½LI²</h4>
            <span className="rounded-lg border border-border bg-muted/30 px-2 py-0.5 font-mono text-[10px] tabular-nums text-muted-foreground">
              total stored+dissipated at cursor: {fmtJ(eC + eL + eR)}
            </span>
          </div>
          <div className="mt-3 space-y-2.5">
            <EBar
              label="½ C v² (capacitor)"
              tex={`\\tfrac{1}{2}Cv_C^2`}
              value={eC}
              max={maxTotal}
              cls="bg-teal-500"
              textCls="text-teal-300"
            />
            <EBar
              label="½ L i² (inductor)"
              tex={`\\tfrac{1}{2}Li_L^2`}
              value={eL}
              max={maxTotal}
              cls="bg-amber-500"
              textCls="text-amber-300"
            />
            <EBar
              label="dissipated in R"
              tex={`\\int_0^t i^2R\\,dt`}
              value={eR}
              max={maxTotal}
              cls="bg-rose-500"
              textCls="text-rose-300"
            />
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
            Press play and watch the teal and amber bars hand their energy back and forth once per ring —
            each exchange leaves a little more in the rose bar, because R taxes every pass. When the source
            drops at {fmtT(d.ton)}, the remaining stored energy rings down to zero.
          </p>
        </motion.div>
      )}

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          in <span className="font-medium text-foreground">Slow RC</span>, park the cursor exactly on the
          3τ marker — 95.0 % — then halve C and watch τ halve with it; the exponential never changes shape,
          only its clock. In <span className="font-medium text-foreground">RL kickback</span>, sweep across
          the switch-off instant: i_L is continuous but v_L flips to −24 V in zero time — that spike is why
          real circuits put a freewheeling diode across inductive loads. Then load{' '}
          <span className="font-medium text-foreground">Ringy RLC</span> and drag R upward through 2 kΩ:
          the rings die at ζ = 1 (<span className="font-medium text-foreground">Critically damped</span>),
          and past it the response crawls — with the energy bars showing the slosh fading into a one-way
          slide into the rose bar.
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

function ParamSlider({
  label,
  value,
  min,
  max,
  step,
  raw,
  onChange,
  aria,
}: {
  label: string
  value: string
  min: number
  max: number
  step: number
  raw: number
  onChange: (v: number) => void
  aria: string
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="font-mono text-xs tabular-nums text-emerald-300">{value}</span>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={[raw]}
        onValueChange={(v) => onChange(v[0] ?? raw)}
        className="mt-1.5"
        aria-label={aria}
      />
    </div>
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

function EBar({
  label,
  tex,
  value,
  max,
  cls,
  textCls,
}: {
  label: string
  tex: string
  value: number
  max: number
  cls: string
  textCls: string
}) {
  const pct = Math.min((value / max) * 100, 100)
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className="w-40 shrink-0 text-[11px] text-muted-foreground">{label}</span>
      <div className="h-2.5 min-w-[120px] flex-1 overflow-hidden rounded-full bg-muted" aria-hidden="true">
        <div className={`h-full rounded-full ${cls}`} style={{ width: `${pct}%` }} />
      </div>
      <span className={`w-16 shrink-0 text-right font-mono text-[11px] tabular-nums ${textCls}`}>
        {fmtJ(value)}
      </span>
      <span className="hidden text-[10px] text-muted-foreground sm:inline">
        <TeX tex={tex} />
      </span>
    </div>
  )
}
