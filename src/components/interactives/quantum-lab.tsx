'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Atom, Zap, Sparkles, RotateCcw, Lightbulb, Eye, EyeOff, Crosshair, Activity, Gauge,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/* physics                                                             */
/* ------------------------------------------------------------------ */
/*
 * Very slow electrons: lambda ~ 60 nm corresponds to v = h/(m lambda) of
 * roughly 1.2e4 m/s — a legitimate ultra-low-energy beam.
 * Screen physics is exact Fraunhofer; the apparatus drawing is not to
 * scale (the barrier is magnified, the screen physics is real).
 */

const HBAR = 1.054571817e-34 // J s
const W = 900
const H = 540
const GUN = { x: 88, y: 270 }
const BARRIER_X = 430
const SLITS = [
  { x: BARRIER_X, y: 230 },
  { x: BARRIER_X, y: 312 },
]
const MID_GATE = { x: BARRIER_X, y: 271 }
const SCREEN_X = 795
const Y_TOP = 84
const Y_BOT = 456
const HALF_MM = 12 // screen half-width in mm
const BINS = 120
const BAR_MAX = 330
const DUR = 950 // flight duration ms

interface Flight {
  id: string
  t0: number
  y: number // landing position, mm
  slit: 0 | 1 | null // null = superposition
}

let idc = 0
const nid = () => `q${++idc}`

const yPx = (y: number) => 270 - (y / HALF_MM) * ((Y_BOT - Y_TOP) / 2)
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

const SUP: Record<string, string> = {
  '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
}

function fmtExp(v: number, unit: string): string {
  const [m, e] = v.toExponential(2).split('e')
  const sup = Number(e)
    .toString()
    .split('')
    .map((ch) => SUP[ch] ?? ch)
    .join('')
  return `${m}×10${sup} ${unit}`
}

/* exact Fraunhofer screen probability at y (mm) for two slits of width a,
 * separation d, wavelength lam, screen distance L (all SI) */
function probCurve(y: number, lam: number, a: number, d: number, L: number, detectorOn: boolean): number {
  const env = (yy: number): number => {
    const s = (Math.PI * a * yy * 1e-3) / (lam * L)
    if (Math.abs(s) < 1e-9) return 1
    return (Math.sin(s) / s) ** 2
  }
  if (!detectorOn) {
    const c = Math.cos((Math.PI * d * y * 1e-3) / (lam * L))
    return env(y) * c * c
  }
  const off = (d / 2) * 1e3 // slit geometric projection, mm
  return 0.5 * (env(y - off) + env(y + off))
}

/* ------------------------------------------------------------------ */
/* component                                                           */
/* ------------------------------------------------------------------ */

export default function QuantumLab() {
  const reduced = useReducedMotion() ?? false
  const [tab, setTab] = useState<'experiment' | 'packet'>('experiment')

  /* apparatus parameters */
  const [lamNm, setLamNm] = useState(60)
  const [dUm, setDUm] = useState(60)
  const [aUm, setAUm] = useState(10)
  const [Lm, setLm] = useState(1.2)
  const [detectorOn, setDetectorOn] = useState(false)
  const [autofire, setAutofire] = useState(true)
  const [showTheory, setShowTheory] = useState(true)

  /* firing state */
  const [flights, setFlights] = useState<Flight[]>([])
  const [dots, setDots] = useState<number[]>([])
  const [bins, setBins] = useState<number[]>(() => Array.from({ length: BINS }, () => 0))
  const [flash, setFlash] = useState<{ y: number; t: number } | null>(null)
  const [now, setNow] = useState(0)

  /* wave packet state */
  const [sigmaNm, setSigmaNm] = useState(1.5)
  const [packT, setPackT] = useState(0)

  const [presetKey, setPresetKey] = useState('both')
  const [presetTick, setPresetTick] = useState(0)

  const flightsRef = useRef<Flight[]>([])
  const [loopOn, setLoopOn] = useState(autofire)

  /* ---------- probability model ---------- */

  const lamM = lamNm * 1e-9
  const aM = aUm * 1e-6
  const dM = dUm * 1e-6

  const probAt = (y: number): number => probCurve(y, lamM, aM, dM, Lm, detectorOn)

  const sampleY = (): number => {
    for (let tries = 0; tries < 500; tries++) {
      const y = (Math.random() * 2 - 1) * HALF_MM
      if (Math.random() < probAt(y)) return y
    }
    return (Math.random() * 2 - 1) * HALF_MM
  }

  /* ---------- landing bookkeeping ---------- */

  const commitLanded = (done: Flight[]) => {
    if (done.length === 0) return
    setBins((b) => {
      const nb = [...b]
      for (const f of done) {
        const idx = Math.min(BINS - 1, Math.max(0, Math.floor(((f.y + HALF_MM) / (2 * HALF_MM)) * BINS)))
        nb[idx] += 1
      }
      return nb
    })
    setDots((ds) => {
      const next = [...ds, ...done.map((f) => f.y)]
      return next.length > 900 ? next.slice(next.length - 900) : next
    })
    const last = done[done.length - 1]
    setFlash({ y: last.y, t: performance.now() })
  }

  const spawnFlights = (count: number) => {
    const t0 = performance.now()
    const made: Flight[] = []
    for (let i = 0; i < count; i++) {
      const slit: 0 | 1 | null = detectorOn ? (Math.random() < 0.5 ? 0 : 1) : null
      made.push({ id: nid(), t0: t0 + i * 40, y: sampleY(), slit })
    }
    if (reduced) {
      commitLanded(made)
      return
    }
    flightsRef.current = [...flightsRef.current, ...made].slice(-140)
    setFlights(flightsRef.current)
    if (!loopOn) setLoopOn(true)
  }

  const clearScreen = () => {
    flightsRef.current = []
    setFlights([])
    setDots([])
    setBins(Array.from({ length: BINS }, () => 0))
    setFlash(null)
  }

  /* param setters clear the screen — old dots no longer match the new physics */
  const setLam = (v: number) => {
    setLamNm(v)
    clearScreen()
  }
  const setD = (v: number) => {
    setDUm(v)
    if (aUm > Math.floor(v / 2)) setAUm(Math.max(3, Math.floor(v / 2)))
    clearScreen()
  }
  const setA = (v: number) => {
    setAUm(v)
    clearScreen()
  }
  const setL = (v: number) => {
    setLm(v)
    clearScreen()
  }
  const toggleDetector = (on: boolean) => {
    setDetectorOn(on)
    clearScreen()
  }

  /* ---------- firing loop ---------- */

  useEffect(() => {
    if (!loopOn) return
    let raf = 0
    let last = performance.now()
    let spawnAcc = 0
    let lastLand = 0
    const loop = () => {
      const nowMs = performance.now()
      const dt = nowMs - last
      last = nowMs
      spawnAcc += dt
      if (autofire && spawnAcc >= 220) {
        spawnAcc = 0
        const y = sampleY()
        const slit: 0 | 1 | null = detectorOn ? (Math.random() < 0.5 ? 0 : 1) : null
        if (reduced) {
          commitLanded([{ id: nid(), t0: nowMs, y, slit }])
          lastLand = nowMs
        } else {
          flightsRef.current = [...flightsRef.current, { id: nid(), t0: nowMs, y, slit }].slice(-140)
        }
      }
      const done = flightsRef.current.filter((f) => nowMs - f.t0 >= DUR)
      if (done.length > 0) {
        flightsRef.current = flightsRef.current.filter((f) => nowMs - f.t0 < DUR)
        setFlights(flightsRef.current)
        commitLanded(done)
        lastLand = nowMs
      }
      if (flightsRef.current.length > 0 || nowMs - lastLand < 700) {
        setNow(nowMs)
      }
      if (!autofire && flightsRef.current.length === 0 && nowMs - lastLand >= 700) {
        setLoopOn(false)
        return
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [loopOn, autofire, detectorOn, lamNm, dUm, aUm, Lm, reduced])

  /* ---------- wave packet drift ---------- */

  useEffect(() => {
    if (tab !== 'packet' || reduced) return
    let raf = 0
    let last = performance.now()
    const loop = (n: number) => {
      const dt = Math.min(0.05, (n - last) / 1000)
      last = n
      setPackT((v) => v + dt)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [tab, reduced])

  /* ---------- derived physics readouts ---------- */

  const dyMm = (lamM * Lm) / dM * 1e3 // mm
  const fringes = (2 * HALF_MM) / dyMm

  const theoryPath = useMemo(() => {
    const pts: string[] = []
    let pmax = 0
    const N = 1400
    const vals: number[] = []
    for (let i = 0; i <= N; i++) {
      const y = -HALF_MM + (i / N) * 2 * HALF_MM
      const p = probCurve(y, lamM, aM, dM, Lm, detectorOn)
      vals.push(p)
      if (p > pmax) pmax = p
    }
    for (let i = 0; i <= N; i++) {
      const y = -HALF_MM + (i / N) * 2 * HALF_MM
      const h = (vals[i] / (pmax || 1)) * BAR_MAX
      pts.push(`${(SCREEN_X - h).toFixed(1)} ${yPx(y).toFixed(1)}`)
    }
    return 'M' + pts.join('L')
  }, [lamM, aM, dM, Lm, detectorOn])

  const maxCount = Math.max(...bins, 1)
  const hits = bins.reduce((s, b) => s + b, 0)

  /* ---------- wave packet derived ---------- */

  const sigmaM = sigmaNm * 1e-9
  const k0 = (2 * Math.PI) / (1.2e-9)
  const p0 = HBAR * k0
  const dp = HBAR / (2 * sigmaM)
  const xcNm = 8 + 5.5 * Math.sin(2 * Math.PI * 0.07 * packT)

  const posPath = useMemo(() => {
    const pts: string[] = []
    for (let i = 0; i <= 320; i++) {
      const x = (i / 320) * 16
      const psi = Math.exp(-((x - xcNm) ** 2) / (4 * sigmaNm ** 2)) * Math.cos(k0 * (x - xcNm) * 1e-9)
      pts.push(`${(40 + (x / 16) * 380).toFixed(1)} ${(140 - psi * 108).toFixed(1)}`)
    }
    return 'M' + pts.join('L')
  }, [xcNm, sigmaNm, k0])

  const envPaths = useMemo(() => {
    const up: string[] = []
    const dn: string[] = []
    for (let i = 0; i <= 160; i++) {
      const x = (i / 160) * 16
      const e = Math.exp(-((x - xcNm) ** 2) / (4 * sigmaNm ** 2))
      up.push(`${(40 + (x / 16) * 380).toFixed(1)} ${(140 - e * 108).toFixed(1)}`)
      dn.push(`${(40 + (x / 16) * 380).toFixed(1)} ${(140 + e * 108).toFixed(1)}`)
    }
    const fwd = 'M' + up.join('L')
    const back = 'L' + dn.reverse().join('L') + 'Z'
    return { area: fwd + back, top: fwd }
  }, [xcNm, sigmaNm])

  const momPath = useMemo(() => {
    const pts: string[] = []
    const pHalf = 2.3e-25
    for (let i = 0; i <= 300; i++) {
      const p = p0 - pHalf + (i / 300) * 2 * pHalf
      const g = Math.exp(-((p - p0) ** 2) / (2 * dp ** 2))
      pts.push(`${(40 + (i / 300) * 380).toFixed(1)} ${(140 - g * 108).toFixed(1)}`)
    }
    return 'M' + pts.join('L')
  }, [dp, p0])

  /* ---------- presets ---------- */

  const PRESETS: { key: string; label: string; note: string }[] = [
    {
      key: 'both',
      label: 'Electrons, both slits open',
      note: 'Single electrons, no watchers. Dots land one by one with no obvious order — yet the running histogram builds interference fringes. Each electron interferes with itself.',
    },
    {
      key: 'detector',
      label: 'Detector on',
      note: 'Switch on the which-path lamps and the fringes dissolve: each electron now travels one definite route, so probabilities add instead of amplitudes.',
    },
    {
      key: 'wide',
      label: 'Wide slits',
      note: 'Opening the slit width a squeezes the single-slit envelope (first zero at λL/a) while the fringe spacing λL/d stays put — fewer fringes survive inside.',
    },
    {
      key: 'squeeze',
      label: 'Squeeze the packet',
      note: 'Wave-packet mode: pinch Δx down and watch Δp balloon — the product pinned at ħ/2, the minimum the uncertainty principle allows.',
    },
  ]
  const activePreset = PRESETS.find((p) => p.key === presetKey) ?? null

  const applyPreset = (key: string) => {
    setPresetKey(key)
    setPresetTick((n) => n + 1)
    if (key === 'both') {
      setTab('experiment')
      setLamNm(60)
      setDUm(60)
      setAUm(10)
      setLm(1.2)
      setDetectorOn(false)
      setAutofire(true)
    } else if (key === 'detector') {
      setTab('experiment')
      setLamNm(60)
      setDUm(60)
      setAUm(10)
      setLm(1.2)
      setDetectorOn(true)
      setAutofire(true)
    } else if (key === 'wide') {
      setTab('experiment')
      setLamNm(60)
      setDUm(60)
      setAUm(24)
      setLm(1.2)
      setDetectorOn(false)
      setAutofire(true)
    } else if (key === 'squeeze') {
      setTab('packet')
      setSigmaNm(0.7)
    }
  }

  /* ---------- flight rendering ---------- */

  const renderFlight = (f: Flight) => {
    const u = Math.max(0, Math.min(1, (now - f.t0) / DUR))
    const gate = f.slit === null ? MID_GATE : SLITS[f.slit]
    const land = { x: SCREEN_X, y: yPx(f.y) }
    let pos: { x: number; y: number }
    if (u < 0.45) {
      const t = u / 0.45
      pos = { x: lerp(GUN.x, gate.x, t), y: lerp(GUN.y, gate.y, t) }
    } else {
      const t = (u - 0.45) / 0.55
      pos = { x: lerp(gate.x, land.x, t), y: lerp(gate.y, land.y, t) }
    }
    return { pos, gate, land, u }
  }

  const flightAge = (f: Flight) => now - f.t0

  /* ---------- render ---------- */

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
            <Atom className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-foreground">Double-Slit Quantum Lab</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Physics Ch 15: fire electrons one at a time, watch dots build fringes — then switch on the which-path
              detector and see the interference die.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs tabular-nums text-muted-foreground">
          <span className="rounded-md border border-border bg-muted/30 px-2.5 py-1.5">
            probability cloud: n = {hits}
          </span>
          <span className="rounded-md border border-border bg-muted/30 px-2.5 py-1.5">Δy = {dyMm.toFixed(2)} mm</span>
        </div>
      </div>

      {/* tabs + presets */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <div className="flex overflow-hidden rounded-lg border border-border">
          {([
            { id: 'experiment' as const, label: 'Interference', icon: Crosshair },
            { id: 'packet' as const, label: 'Wave packet', icon: Activity },
          ]).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              aria-pressed={tab === t.id}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                tab === t.id ? 'bg-emerald-600 text-white' : 'bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground'
              }`}
            >
              <t.icon className="h-3.5 w-3.5" />
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Presets</span>
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
        <motion.div
          key={presetTick}
          initial={reduced ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-3 py-2"
        >
          <p className="text-[11px] leading-relaxed text-muted-foreground">{activePreset.note}</p>
        </motion.div>
      )}

      <div className="mt-4 grid gap-5 lg:grid-cols-1 xl:grid-cols-12">
        {/* stage */}
        <div className="overflow-hidden rounded-xl border border-border bg-card xl:col-span-7 2xl:col-span-8">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 border-b border-border px-4 py-2.5">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {tab === 'experiment' ? 'Apparatus' : 'Phase space'}
            </span>
            <span className="font-mono text-[11px] text-muted-foreground text-right sm:text-left">
              {tab === 'experiment'
                ? 'screen physics exact · barrier magnified for display'
                : 'position space · momentum space'}
            </span>
          </div>
          <div
            className="select-none p-2"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(82,82,91,0.2) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          >
            {tab === 'experiment' ? (
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="h-auto w-full touch-none"
                role="img"
                aria-label="double slit experiment: electron gun, barrier with two slits, screen with accumulating hits"
              >
                {/* beam axis */}
                <line x1={GUN.x} y1={270} x2={SCREEN_X} y2={270} stroke="#52525b" strokeWidth={1} strokeDasharray="4 5" opacity={0.6} />

                {/* electron gun */}
                <g>
                  <rect x={52} y={242} width={60} height={56} rx={10} fill="rgba(16,185,129,0.12)" stroke="#10b981" strokeWidth={2} />
                  <text x={82} y={276} textAnchor="middle" fontSize={16} fontWeight={800} fill="#34d399" className="font-mono">
                    e⁻
                  </text>
                  <text x={82} y={322} textAnchor="middle" fontSize={11} fill="#a1a1aa" className="font-mono">
                    electron gun
                  </text>
                </g>

                {/* barrier with two slits (drawing not to scale) */}
                <g>
                  <rect x={BARRIER_X - 7} y={90} width={14} height={118} rx={3} fill="rgba(161,161,170,0.35)" stroke="#a1a1aa" strokeWidth={1.5} />
                  <rect x={BARRIER_X - 7} y={252} width={14} height={38} rx={3} fill="rgba(161,161,170,0.35)" stroke="#a1a1aa" strokeWidth={1.5} />
                  <rect x={BARRIER_X - 7} y={334} width={14} height={122} rx={3} fill="rgba(161,161,170,0.35)" stroke="#a1a1aa" strokeWidth={1.5} />
                  <text x={BARRIER_X} y={470} textAnchor="middle" fontSize={11} fill="#a1a1aa" className="font-mono">
                    barrier · two slits d = {dUm} µm, a = {aUm} µm
                  </text>
                  {/* slit markers */}
                  {SLITS.map((s, i) => (
                    <g key={i}>
                      <line x1={BARRIER_X - 26} y1={s.y} x2={BARRIER_X - 14} y2={s.y} stroke="#2dd4bf" strokeWidth={1.2} />
                      <text x={BARRIER_X - 30} y={s.y + 4} textAnchor="end" fontSize={10} fill="#2dd4bf" className="font-mono">
                        {i === 0 ? 'slit 1' : 'slit 2'}
                      </text>
                    </g>
                  ))}
                </g>

                {/* which-path lamps */}
                {detectorOn && (
                  <g>
                    {SLITS.map((s, i) => (
                      <g key={i}>
                        <circle cx={BARRIER_X + 24} cy={s.y} r={8} fill="rgba(251,191,36,0.22)" stroke="#fbbf24" strokeWidth={2} />
                        <circle cx={BARRIER_X + 24} cy={s.y} r={3} fill="#fbbf24" />
                      </g>
                    ))}
                    <text x={BARRIER_X + 40} y={148} fontSize={11} fill="#fbbf24" className="font-mono">
                      which-path lamps (detector on)
                    </text>
                  </g>
                )}

                {/* ghost superposition paths for in-flight electrons */}
                {flights.map((f) => {
                  const r = renderFlight(f)
                  if (r.u <= 0.001) return null
                  const g1 = `M${GUN.x} ${GUN.y}L${SLITS[0].x} ${SLITS[0].y}L${r.land.x} ${r.land.y}`
                  const g2 = `M${GUN.x} ${GUN.y}L${SLITS[1].x} ${SLITS[1].y}L${r.land.x} ${r.land.y}`
                  const single = `M${GUN.x} ${GUN.y}L${r.gate.x} ${r.gate.y}L${r.land.x} ${r.land.y}`
                  return (
                    <g key={f.id} opacity={Math.min(0.3, 0.3 * Math.min(1, flightAge(f) / 300))}>
                      {f.slit === null ? (
                        <>
                          <path d={g1} fill="none" stroke="#2dd4bf" strokeWidth={1.2} strokeDasharray="5 5" />
                          <path d={g2} fill="none" stroke="#2dd4bf" strokeWidth={1.2} strokeDasharray="5 5" />
                        </>
                      ) : (
                        <path d={single} fill="none" stroke="#2dd4bf" strokeWidth={1.2} strokeDasharray="5 5" />
                      )}
                    </g>
                  )
                })}

                {/* in-flight electrons */}
                {flights.map((f) => {
                  const r = renderFlight(f)
                  if (r.u <= 0.001) return null
                  return <circle key={f.id} cx={r.pos.x} cy={r.pos.y} r={4} fill="#34d399" stroke="#064e3b" strokeWidth={1} />
                })}

                {/* screen */}
                <rect x={SCREEN_X} y={Y_TOP} width={9} height={Y_BOT - Y_TOP} rx={3} fill="rgba(228,228,231,0.16)" stroke="#a1a1aa" strokeWidth={1.5} />
                <text x={SCREEN_X + 14} y={Y_TOP + 10} fontSize={11} fill="#a1a1aa" className="font-mono">+12 mm</text>
                <text x={SCREEN_X + 14} y={270 + 4} fontSize={11} fill="#a1a1aa" className="font-mono">0</text>
                <text x={SCREEN_X + 14} y={Y_BOT - 4} fontSize={11} fill="#a1a1aa" className="font-mono">−12 mm</text>

                {/* histogram bars extending left of the screen */}
                {bins.map((c, i) => {
                  if (c === 0) return null
                  const yc = -HALF_MM + ((i + 0.5) / BINS) * 2 * HALF_MM
                  const h = (c / maxCount) * BAR_MAX
                  const py = yPx(yc)
                  return (
                    <rect
                      key={i}
                      x={SCREEN_X - 4 - h}
                      y={py - 1.5}
                      width={h}
                      height={3}
                      fill="rgba(52,211,153,0.5)"
                    />
                  )
                })}

                {/* theory curve */}
                {showTheory && hits >= 3 && (
                  <path d={theoryPath} fill="none" stroke="#2dd4bf" strokeWidth={1.6} opacity={0.85} style={{ pointerEvents: 'none' }} />
                )}

                {/* landed dots */}
                {dots.map((y, i) => (
                  <circle key={i} cx={SCREEN_X + 4} cy={yPx(y)} r={1.7} fill="#34d399" opacity={0.6} />
                ))}

                {/* landing flash */}
                {flash && !reduced && (
                  <circle
                    cx={SCREEN_X + 4}
                    cy={yPx(flash.y)}
                    r={3 + Math.min(1, Math.max(0, 1 - (now - flash.t) / 600)) * 7}
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth={2}
                    opacity={Math.max(0, 1 - (now - flash.t) / 600)}
                  />
                )}

                <text x={70} y={64} fontSize={12} fill="#a1a1aa" className="font-mono">
                  {detectorOn
                    ? 'lamps on: each electron takes ONE slit — probabilities add'
                    : 'no watcher: each electron takes BOTH slits — amplitudes add'}
                </text>
                <text x={430} y={510} textAnchor="middle" fontSize={12} fill="#a1a1aa" className="font-mono">
                  {showTheory ? 'teal: theory curve · emerald: live histogram · amber: latest hit' : 'emerald: live histogram · amber: latest hit'}
                </text>
              </svg>
            ) : (
              <svg
                viewBox="0 0 900 300"
                className="h-auto w-full touch-none"
                role="img"
                aria-label="gaussian wave packet in position space and its momentum distribution"
              >
                {/* position space */}
                <g>
                  <rect x={30} y={26} width={400} height={236} rx={10} fill="rgba(16,185,129,0.04)" stroke="#3f3f46" strokeWidth={1} />
                  <line x1={40} y1={140} x2={420} y2={140} stroke="#52525b" strokeWidth={1} />
                  <text x={230} y={20} textAnchor="middle" fontSize={11} fill="#34d399" className="font-mono">
                    position space ψ(x)
                  </text>
                  <path d={envPaths.area} fill="rgba(16,185,129,0.1)" />
                  <path d={envPaths.top} fill="none" stroke="#52525b" strokeWidth={1.2} strokeDasharray="4 4" />
                  <path d={posPath} fill="none" stroke="#10b981" strokeWidth={2} />
                  <line x1={40 + ((xcNm - sigmaNm) / 16) * 380} y1={36} x2={40 + ((xcNm - sigmaNm) / 16) * 380} y2={244} stroke="#fbbf24" strokeWidth={1.4} strokeDasharray="3 3" />
                  <line x1={40 + ((xcNm + sigmaNm) / 16) * 380} y1={36} x2={40 + ((xcNm + sigmaNm) / 16) * 380} y2={244} stroke="#fbbf24" strokeWidth={1.4} strokeDasharray="3 3" />
                  <text x={230} y={256} textAnchor="middle" fontSize={10} fill="#fbbf24" className="font-mono">
                    Δx = σ = {sigmaNm.toFixed(1)} nm
                  </text>
                  <text x={230} y={272} textAnchor="middle" fontSize={10} fill="#a1a1aa" className="font-mono">
                    16 nm window
                  </text>
                </g>

                {/* momentum space */}
                <g transform="translate(440,0)">
                  <rect x={30} y={26} width={400} height={236} rx={10} fill="rgba(251,191,36,0.04)" stroke="#3f3f46" strokeWidth={1} />
                  <line x1={40} y1={140} x2={420} y2={140} stroke="#52525b" strokeWidth={1} />
                  <text x={230} y={20} textAnchor="middle" fontSize={11} fill="#fbbf24" className="font-mono">
                    momentum space |φ(p)|²
                  </text>
                  <path d={momPath} fill="none" stroke="#fbbf24" strokeWidth={2} />
                  <line x1={40 + 190 - ((dp) / (4.6e-25)) * 380 / 2} y1={36} x2={40 + 190 - ((dp) / (4.6e-25)) * 380 / 2} y2={244} stroke="#2dd4bf" strokeWidth={1.4} strokeDasharray="3 3" />
                  <line x1={40 + 190 + ((dp) / (4.6e-25)) * 380 / 2} y1={36} x2={40 + 190 + ((dp) / (4.6e-25)) * 380 / 2} y2={244} stroke="#2dd4bf" strokeWidth={1.4} strokeDasharray="3 3" />
                  <text x={230} y={256} textAnchor="middle" fontSize={10} fill="#2dd4bf" className="font-mono">
                    Δp = ħ/2σ = {fmtExp(dp, 'kg·m/s')}
                  </text>
                  <text x={230} y={272} textAnchor="middle" fontSize={10} fill="#a1a1aa" className="font-mono">
                    fixed p axis — pinch the packet and the spike fattens
                  </text>
                </g>
              </svg>
            )}
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col gap-4 xl:col-span-5 2xl:col-span-4">
          {tab === 'experiment' ? (
            <>
              <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Beam &amp; geometry</span>
                </div>
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="w-28 shrink-0 text-xs text-muted-foreground">wavelength λ</span>
                    <Slider value={[lamNm]} onValueChange={(v) => setLam(v[0] ?? 60)} min={50} max={100} step={2} className="flex-1 min-w-[70px]" aria-label="electron de Broglie wavelength in nanometers" />
                    <span className="w-16 shrink-0 rounded-md bg-muted/50 px-2 py-1 text-right font-mono text-xs tabular-nums text-foreground">{lamNm} nm</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="w-28 shrink-0 text-xs text-muted-foreground">slit separation d</span>
                    <Slider
                      value={[dUm]}
                      onValueChange={(v) => setD(v[0] ?? 60)}
                      min={20}
                      max={100}
                      step={2}
                      className="flex-1 min-w-[70px]"
                      aria-label="slit separation in micrometers"
                    />
                    <span className="w-16 shrink-0 rounded-md bg-muted/50 px-2 py-1 text-right font-mono text-xs tabular-nums text-foreground">{dUm} µm</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="w-28 shrink-0 text-xs text-muted-foreground">slit width a</span>
                    <Slider value={[aUm]} onValueChange={(v) => setA(Math.min(Math.max(3, v[0] ?? 10), Math.floor(dUm / 2)))} min={3} max={Math.max(3, Math.floor(dUm / 2))} step={1} className="flex-1 min-w-[70px]" aria-label="slit width in micrometers" />
                    <span className="w-16 shrink-0 rounded-md bg-muted/50 px-2 py-1 text-right font-mono text-xs tabular-nums text-foreground">{aUm} µm</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="w-28 shrink-0 text-xs text-muted-foreground">screen distance L</span>
                    <Slider value={[Lm]} onValueChange={(v) => setL(v[0] ?? 1.2)} min={0.6} max={2} step={0.1} className="flex-1 min-w-[70px]" aria-label="screen distance in meters" />
                    <span className="w-16 shrink-0 rounded-md bg-muted/50 px-2 py-1 text-right font-mono text-xs tabular-nums text-foreground">{Lm.toFixed(1)} m</span>
                  </div>
                </div>
                <div className="mt-3.5 rounded-lg bg-muted/50 px-3 py-2.5 text-center overflow-x-auto">
                  <TeX
                    display
                    tex={`\\Delta y=\\frac{\\lambda L}{d}=\\frac{(${lamNm}\\,\\mathrm{nm})(${Lm.toFixed(1)}\\,\\mathrm{m})}{${dUm}\\,\\mu\\mathrm{m}}=${dyMm.toFixed(2)}\\,\\mathrm{mm}`}
                    className="text-xs sm:text-sm"
                  />
                  <p className="mt-1 font-mono text-[11px] tabular-nums text-muted-foreground leading-relaxed">
                    ≈ {fringes.toFixed(1)} fringes across the 24 mm screen · envelope zero at λL/a ={' '}
                    {((lamM * Lm) / aM * 1e3).toFixed(1)} mm
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Firing</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500" onClick={() => spawnFlights(1)}>
                    <Zap className="h-3.5 w-3.5" />
                    Fire 1
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => spawnFlights(100)}>
                    <Sparkles className="h-3.5 w-3.5" />
                    Fire 100
                  </Button>
                  <Button size="sm" variant="outline" aria-label="clear screen" onClick={clearScreen}>
                    <RotateCcw className="h-3.5 w-3.5" />
                    Clear
                  </Button>
                </div>
                <div className="mt-3.5 space-y-2.5">
                  <label className="flex cursor-pointer items-center justify-between gap-3 text-xs text-muted-foreground py-0.5">
                    <span className="select-none">auto-fire (steady beam)</span>
                    <Switch checked={autofire} onCheckedChange={setAutofire} aria-label="toggle automatic firing" />
                  </label>
                  <label className="flex cursor-pointer items-center justify-between gap-3 text-xs text-muted-foreground py-0.5">
                    <span className="flex items-center gap-1.5 select-none">
                      {detectorOn ? <Eye className="h-3.5 w-3.5 text-amber-400" /> : <EyeOff className="h-3.5 w-3.5 text-muted-foreground" />}
                      which-path detector
                    </span>
                    <Switch checked={detectorOn} onCheckedChange={toggleDetector} aria-label="toggle which-path detector" />
                  </label>
                  <label className="flex cursor-pointer items-center justify-between gap-3 text-xs text-muted-foreground py-0.5">
                    <span className="select-none">theory curve</span>
                    <Switch checked={showTheory} onCheckedChange={setShowTheory} aria-label="toggle theory curve overlay" />
                  </label>
                </div>
                <div className="mt-3.5 grid grid-cols-2 gap-2 font-mono text-xs tabular-nums">
                  <div className="rounded-lg bg-muted/50 p-2.5 flex flex-col justify-between min-h-[54px]">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground leading-tight">electrons landed</div>
                    <div className="mt-1 text-base font-semibold text-emerald-400">{hits}</div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-2.5 flex flex-col justify-between min-h-[54px]">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground leading-tight">busiest bin</div>
                    <div className="mt-1 text-base font-semibold text-teal-300">{maxCount}</div>
                  </div>
                </div>
              </div>

              <div
                className={`rounded-xl border p-4 sm:p-5 ${detectorOn ? 'border-amber-500/30 bg-amber-500/5' : 'border-emerald-500/30 bg-emerald-500/5'}`}
              >
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Amplitude rules
                </div>
                <div className="rounded-lg bg-muted/50 px-3 py-2.5 text-center overflow-x-auto">
                  {detectorOn ? (
                    <TeX display tex="P=|\varphi_1|^2+|\varphi_2|^2" className="text-xs sm:text-sm" />
                  ) : (
                    <TeX display tex="P=|\varphi_1+\varphi_2|^2=|\varphi_1|^2+|\varphi_2|^2+2\,\mathrm{Re}(\varphi_1^{*}\varphi_2)" className="text-xs sm:text-sm" />
                  )}
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                  {detectorOn ? (
                    <>
                      The lamps know which slit, so the cross term never happens: two single-slit envelopes simply add
                      (they sit a mere {(dUm / 2).toFixed(0)} µm apart — here they merge into one smooth band). The
                      fringes are gone because the electron no longer has two paths to interfere with.
                    </>
                  ) : (
                    <>
                      With no watcher, the amplitudes <TeX tex="\varphi_1" /> and <TeX tex="\varphi_2" /> add before the
                      square is taken — the amber-highlighted cross term is the interference. Note the pattern exists
                      even one electron at a time: each dot lands where the amplitude rules allow.
                    </>
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Packet width</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="w-20 shrink-0 text-xs text-muted-foreground">Δx = σ</span>
                  <Slider value={[sigmaNm]} onValueChange={(v) => setSigmaNm(v[0] ?? 1.5)} min={0.5} max={4} step={0.1} className="flex-1 min-w-[70px]" aria-label="wave packet position width in nanometers" />
                  <span className="w-16 shrink-0 rounded-md bg-muted/50 px-2 py-1 text-right font-mono text-xs tabular-nums text-foreground">{sigmaNm.toFixed(1)} nm</span>
                </div>
                <div className="mt-3.5 grid grid-cols-2 gap-2 font-mono text-xs tabular-nums">
                  <div className="rounded-lg bg-muted/50 p-2.5 flex flex-col justify-between min-h-[54px]">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground leading-tight">Δx</div>
                    <div className="mt-1 text-base font-semibold text-emerald-400">{sigmaNm.toFixed(1)} nm</div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-2.5 flex flex-col justify-between min-h-[54px]">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground leading-tight">Δp = ħ/2Δx</div>
                    <div className="mt-1 text-xs font-semibold text-amber-300 truncate" title={fmtExp(dp, 'kg·m/s')}>{fmtExp(dp, 'kg·m/s')}</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1.5 rounded-lg bg-muted/50 px-3 py-2.5 text-center overflow-x-auto">
                  <TeX display tex="\psi(x)=e^{-(x-x_0)^2/4\sigma^2}\cos k_0 x" className="text-xs sm:text-sm" />
                  <TeX display tex="\Delta x\,\Delta p=\frac{\hbar}{2}" className="text-xs sm:text-sm" />
                </div>
              </div>
              <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-4 sm:p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-teal-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">Uncertainty ledger</span>
                </div>
                <div className="rounded-lg bg-muted/50 px-3 py-2 text-center font-mono text-xs tabular-nums text-foreground overflow-x-auto">
                  Δx · Δp = {fmtExp(HBAR / 2, 'J·s')} = ħ/2
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                  A Gaussian saturates the bound — every setting pins the product at exactly{' '}
                  <TeX tex="\hbar/2" />. Squeeze the packet narrower and its momentum spectrum fattens to pay the
                  bill: narrow in position means many wavelengths are present, and wavelength is momentum,
                  <TeX tex="\ p=h/\lambda" />.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* try this */}
      <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> let the auto-fire run to ~200 electrons and
          squint — the fringes were never in any single dot, only in the statistics. Then flip the which-path detector
          on mid-run and watch the tallies redistribute into a smooth band. Double the wavelength and the fringes fan
          out (Δy doubles); halve the separation and they fan out further. Finally open{' '}
          <span className="font-medium">Wave packet</span> and squeeze Δx from 4 nm to 0.5 nm: Δp grows eightfold while
          the product stays pinned at ħ/2.
        </p>
      </div>
    </div>
  )
}
