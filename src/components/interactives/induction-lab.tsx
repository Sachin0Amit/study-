'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  Lightbulb,
  Magnet,
  Pause,
  Play,
  Repeat,
  RotateCcw,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ================================================================== */
/*  Electromagnetic Induction Lab                                      */
/*  Hughes/Nilsson ch 5 (magnetic circuits, induction) · Feynman II    */
/*  L16–17 (flux rule, Lenz, generator, mutual inductance)             */
/* ================================================================== */

type Mode = 'magnet' | 'generator' | 'transformer'

const MODES: { id: Mode; label: string; hint: string }[] = [
  { id: 'magnet', label: 'Magnet & coil', hint: 'Drag the bar magnet (or run a scripted pull) and watch flux, EMF and the galvanometer react.' },
  { id: 'generator', label: 'Generator', hint: 'Rotate a coil in a uniform field — flux pulsates cosinusoidally, EMF is the derivative, a sine.' },
  { id: 'transformer', label: 'Transformer', hint: 'Two coupled windings share one core flux; the turns ratio scales the voltage both ways.' },
]

/* ---------------- physics: magnet & coil ---------------- */

const AREA = 1.2e-3 // m^2  (coil face, 12 cm^2)
const SIGMA = 1.35 // cm, spatial fall-off of the coupled flux
const X_MIN = -6
const X_MAX = 6

/** Flux linked by the coil when the magnet centre is at x cm. */
function fluxAt(x: number, phiMax: number): number {
  return phiMax * Math.exp(-(x * x) / (2 * SIGMA * SIGMA))
}
/** Analytic dPhi/dx (Wb per cm). */
function fluxSlope(x: number, phiMax: number): number {
  return -(x / (SIGMA * SIGMA)) * fluxAt(x, phiMax)
}
/** Faraday: e = -N dPhi/dt = -N v dPhi/dx  (v in cm/s, slope in Wb/cm). */
function emfAt(x: number, v: number, n: number, phiMax: number): number {
  return -n * v * fluxSlope(x, phiMax)
}

/* ---------------- number formatting ---------------- */

function fmtVolt(v: number): string {
  const a = Math.abs(v)
  const s = v < 0 ? '-' : ''
  if (a >= 1) return `${s}${a.toFixed(2)}\\,\\mathrm{V}`
  if (a >= 1e-3) return `${s}${(a * 1e3).toFixed(1)}\\,\\mathrm{mV}`
  return `${s}${(a * 1e6).toFixed(0)}\\,\\mu\\mathrm{V}`
}
function fmtWb(w: number): string {
  const a = Math.abs(w)
  const s = w < 0 ? '-' : ''
  if (a >= 1e-3) return `${s}${(a * 1e3).toFixed(2)}\\,\\mathrm{mWb}`
  return `${s}${(a * 1e6).toFixed(1)}\\,\\mu\\mathrm{Wb}`
}

/* ---------------- samples for the e(t) strip ---------------- */

interface Sample {
  t: number
  e: number
}

/* ---------------- layout constants ---------------- */

const MW = 640 // mechanism SVG
const MH = 330
const SW = 640 // strip scope
const SH = 128
const GW = 300 // galvanometer
const GH = 196
const SCOPE_W = 640
const SCOPE_H = 220

const xToPx = (x: number): number => MW / 2 + (x / X_MAX) * (MW / 2 - 46)

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */

export default function InductionLab() {
  const reduce = useReducedMotion()

  const [mode, setMode] = useState<Mode>('magnet')

  /* -- shared magnet-mode state -- */
  const [x, setX] = useState(-4.2) // magnet centre, cm
  const [vel, setVel] = useState(0) // cm/s
  const [strength, setStrength] = useState(0.25) // T
  const [turns, setTurns] = useState(120)
  const [pullSpeed, setPullSpeed] = useState(2.5) // cm/s
  const [dropSpeed, setDropSpeed] = useState(0)
  const [running, setRunning] = useState(false)
  const [runToken, setRunToken] = useState(0)
  const [hist, setHist] = useState<Sample[]>([])
  const [peakE, setPeakE] = useState(0)

  const magnetRef = useRef<SVGGElement | null>(null)
  const velTrack = useRef({ x: -4.2, t: 0, v: 0 })
  const dragRef = useRef(false)
  const runRef = useRef<{ kind: 'drop' | 'pull'; speed: number } | null>(null)
  const histClock = useRef(0)
  const rafRef = useRef<number | null>(null)

  const phiMax = strength * AREA
  const phi = fluxAt(x, phiMax)
  const emf = emfAt(x, vel, turns, phiMax)

  // live physics params reachable from rAF closures
  const phiMaxRef = useRef(phiMax)
  const turnsRef = useRef(turns)
  phiMaxRef.current = phiMax
  turnsRef.current = turns

  /* ---------------- magnet position updates ---------------- */

  const appendSample = (e: number) => {
    const now = performance.now()
    if (now - histClock.current < 28) return
    histClock.current = now
    setHist((h) => {
      const next = [...h, { t: now, e }]
      return next.length > 620 ? next.slice(next.length - 620) : next
    })
  }

  const stopRun = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    rafRef.current = null
    runRef.current = null
    setRunToken(0)
    setRunning(false)
  }

  /** move the magnet from user input (drag / slider / keys) with velocity tracking */
  const userMoveTo = (nx: number) => {
    const clamped = Math.max(X_MIN, Math.min(X_MAX, nx))
    const now = performance.now()
    const tr = velTrack.current
    const dt = (now - tr.t) / 1000
    let v = tr.v
    if (dt > 0.006) {
      const inst = (clamped - tr.x) / dt
      v = tr.v === 0 ? inst : tr.v * 0.55 + inst * 0.45
      v = Math.max(-60, Math.min(60, v))
      tr.v = v
      tr.x = clamped
      tr.t = now
      setVel(v)
    }
    setX(clamped)
    appendSample(emfAt(clamped, v, turns, phiMax))
  }

  const settle = () => {
    // hand comes to rest -> velocity decays to zero, EMF dies away
    window.setTimeout(() => {
      if (!dragRef.current && !runRef.current) {
        velTrack.current.v = 0
        setVel(0)
      }
    }, 140)
  }

  /* pointer drag on the magnet */
  const pxToX = (clientX: number): number => {
    const svg = magnetRef.current?.ownerSVGElement
    if (!svg) return x
    const rect = svg.getBoundingClientRect()
    if (rect.width === 0) return x
    const sx = ((clientX - rect.left) / rect.width) * MW
    return ((sx - MW / 2) / (MW / 2 - 46)) * X_MAX
  }

  const onMagnetDown = (e: ReactPointerEvent<SVGGElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    dragRef.current = true
    stopRun()
    velTrack.current.t = performance.now()
  }
  const onMagnetMove = (e: ReactPointerEvent<SVGGElement>) => {
    if (!dragRef.current) return
    userMoveTo(pxToX(e.clientX))
  }
  const onMagnetUp = () => {
    if (!dragRef.current) return
    dragRef.current = false
    settle()
  }
  const onMagnetKey = (e: ReactKeyboardEvent<SVGGElement>) => {
    const step = e.shiftKey ? 1 : 0.2
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      stopRun()
      userMoveTo(x + step)
      settle()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      stopRun()
      userMoveTo(x - step)
      settle()
    }
  }

  /* scripted runs: pull / drop */
  const startRun = (kind: 'drop' | 'pull') => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    rafRef.current = null
    runRef.current = { kind, speed: kind === 'pull' ? pullSpeed : 4 }
    setX(-5.9)
    setDropSpeed(0)
    setHist([])
    setPeakE(0)
    setRunning(true)
    setRunToken((t) => t + 1)
  }

  useEffect(() => {
    if (runToken === 0) return
    const run = runRef.current
    if (!run) return
    let last = performance.now()
    let el = -5.9
    let v = run.kind === 'pull' ? run.speed : 4
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (run.kind === 'drop') v += 14 * dt // gravity-ish
      el += v * dt
      const e = emfAt(el, v, turnsRef.current, phiMaxRef.current)
      setX(el)
      setVel(v)
      setDropSpeed(v)
      appendSample(e)
      setPeakE((p) => (Math.abs(e) > p ? Math.abs(e) : p))
      if (el < X_MAX + 0.6) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        rafRef.current = null
        runRef.current = null
        setRunning(false)
        setRunToken(0)
        setVel(0)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [runToken])

  /* ---------------- generator mode ---------------- */

  const [genF, setGenF] = useState(25) // Hz
  const [genB, setGenB] = useState(0.3) // T
  const [genPlaying, setGenPlaying] = useState(true)
  const [theta, setTheta] = useState(0)
  const genA = 2.5e-3 // m^2 (25 cm^2)
  const genN = 150

  const genPhiPk = genN * genB * genA
  const genEPk = 2 * Math.PI * genF * genPhiPk
  const genOmega = 2 * Math.PI * genF
  const genPeriod = 1 / genF

  useEffect(() => {
    if (!genPlaying || mode !== 'generator') return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      setTheta((t) => (t + dt * 2.86) % (Math.PI * 4)) // fixed pleasant visual rate
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [genPlaying, mode])

  const genPhiT = genPhiPk * Math.cos(theta)
  const genET = genEPk * Math.sin(theta)
  const genPhase = ((theta % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)

  /* ---------------- transformer mode ---------------- */

  const [npT, setNpT] = useState(200)
  const [nsT, setNsT] = useState(60)
  const [vpT, setVpT] = useState(120) // V peak
  const vsT = (vpT * nsT) / npT
  const isLoad = vsT / 10 // 10 ohm load
  const ipT = (isLoad * nsT) / npT
  const xfmrUp = nsT > npT

  /* ---------------- presets ---------------- */

  const applyPreset = (key: string) => {
    stopRun()
    setHist([])
    setPeakE(0)
    setVel(0)
    if (key === 'drop') {
      setMode('magnet')
      setStrength(0.4)
      setTurns(180)
      setHist([])
      setPeakE(0)
      velTrack.current = { x: -5.9, t: performance.now(), v: 0 }
      runRef.current = { kind: 'drop', speed: 4 }
      setRunning(true)
      setRunToken((t) => t + 1)
    } else if (key === 'pull') {
      setMode('magnet')
      setStrength(0.25)
      setTurns(120)
      setPullSpeed(2.5)
      setHist([])
      setPeakE(0)
      velTrack.current = { x: -5.9, t: performance.now(), v: 0 }
      runRef.current = { kind: 'pull', speed: 2.5 }
      setRunning(true)
      setRunToken((t) => t + 1)
    } else if (key === 'gen60') {
      setMode('generator')
      setGenF(60)
      setGenB(0.3)
      setGenPlaying(true)
    } else if (key === 'xfmr10') {
      setMode('transformer')
      setNpT(400)
      setNsT(40)
      setVpT(240)
    }
  }

  const PRESETS: { key: string; label: string }[] = [
    { key: 'drop', label: 'Drop the magnet' },
    { key: 'pull', label: 'Slow pull vs fast pull' },
    { key: 'gen60', label: '60 Hz generator' },
    { key: 'xfmr10', label: '10:1 transformer' },
  ]

  /* ---------------- strip scope geometry ---------------- */

  const stripE = useMemo(() => {
    const m = hist.reduce((a, s) => Math.max(a, Math.abs(s.e)), 0)
    return m > 0 ? m * 1.15 : 0.2
  }, [hist])
  const now = performance.now()
  const t0 = hist.length ? hist[hist.length - 1].t - 6000 : now - 6000
  const sx = (t: number): number => ((t - t0) / 6000) * (SW - 58) + 46
  const sy = (e: number): number => SH / 2 - (e / stripE) * (SH / 2 - 14)
  const stripPath = useMemo(() => {
    if (hist.length < 2) return ''
    return hist.map((s, i) => `${i === 0 ? 'M' : 'L'}${sx(s.t).toFixed(1)},${sy(s.e).toFixed(1)}`).join('')
  }, [hist, stripE])

  /* ---------------- galvanometer ---------------- */

  const needleAngle = 55 * Math.tanh(emf / 0.45)
  const glow = Math.min(1, Math.abs(emf) / 0.45)

  /* ================================================================ */

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Magnet className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Electromagnetic Induction Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Faraday&apos;s <TeX tex="e=-N\,\mathrm{d}\Phi/\mathrm{d}t" /> in three acts: drag a magnet through
            a coil, spin a coil in a field, and trade volts for turns on a shared core.
          </p>
        </div>
      </div>

      {/* presets */}
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

      {/* mode switch */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/30 p-0.5" role="group" aria-label="Experiment mode">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                stopRun()
                setMode(m.id)
              }}
              aria-pressed={mode === m.id}
              className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                mode === m.id
                  ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <p className="w-full text-[11px] leading-relaxed text-muted-foreground sm:w-auto sm:flex-1 sm:text-right">
          {MODES.find((m) => m.id === mode)?.hint}
        </p>
      </div>

      {/* ============================ MAGNET MODE ============================ */}
      {mode === 'magnet' && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <div className="min-w-0">
            {/* mechanism */}
            <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
              <svg
                viewBox={`0 0 ${MW} ${MH}`}
                className="w-full select-none"
                role="img"
                aria-label={`Bar magnet at ${x.toFixed(1)} centimetres from the coil centre, moving at ${vel.toFixed(1)} centimetres per second. Induced EMF ${fmtPlainVolt(emf)}.`}
              >
                <defs>
                  <radialGradient id="ind-coil-glow" cx="50%" cy="50%" r="65%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.10 + 0.30 * glow} />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* coil axis guide */}
                <line
                  x1={16}
                  y1={MH / 2}
                  x2={MW - 16}
                  y2={MH / 2}
                  className="stroke-zinc-500/25"
                  strokeWidth={1}
                  strokeDasharray="4 5"
                />
                <text x={MW / 2} y={MH - 8} textAnchor="middle" fontSize={10} className="fill-zinc-500">
                  x = {x.toFixed(1)} cm · v = {vel.toFixed(1)} cm/s
                </text>

                {/* glow halo when current is induced */}
                <ellipse
                  cx={MW / 2}
                  cy={MH / 2 - 30}
                  rx={96}
                  ry={110}
                  fill="url(#ind-coil-glow)"
                />

                {/* magnet field lines (translate with the magnet) */}
                <g transform={`translate(${xToPx(x) - MW / 2},0)`} opacity={0.2 + 0.6 * strength * 2}>
                  {[0, 1, 2].map((k) => {
                    const rx = 44 + k * 17
                    const ry = 20 + k * 13
                    return (
                      <motion.ellipse
                        key={`fl-${k}`}
                        cx={MW / 2}
                        cy={MH / 2 - 30}
                        rx={rx}
                        ry={ry}
                        fill="none"
                        className="stroke-teal-400/70"
                        strokeWidth={1.4}
                        strokeDasharray="7 6"
                        animate={reduce ? undefined : { strokeDashoffset: [0, -26] }}
                        transition={{ duration: 1.15, repeat: Infinity, ease: 'linear' }}
                      />
                    )
                  })}
                </g>

                {/* the coil (solenoid seen side-on) */}
                <g
                  style={{
                    filter:
                      glow > 0.02
                        ? `drop-shadow(0 0 ${(3 + 9 * glow).toFixed(1)}px rgba(16,185,129,${(0.15 + 0.55 * glow).toFixed(2)}))`
                        : undefined,
                  }}
                >
                  {Array.from({ length: 7 }, (_, i) => (
                    <ellipse
                      key={`cl-${i}`}
                      cx={MW / 2 + (i - 3) * 9}
                      cy={MH / 2 - 30}
                      rx={7}
                      ry={62}
                      fill="none"
                      className="stroke-emerald-400"
                      strokeWidth={3}
                      opacity={0.92}
                    />
                  ))}
                </g>

                {/* Lenz current arrow on the front loop */}
                <g transform={`translate(${MW / 2},${MH / 2 - 30})`} opacity={glow > 0.04 ? 1 : 0.25}>
                  <path
                    d={
                      emf >= 0
                        ? 'M -4 -78 A 82 82 0 0 1 22 -74'
                        : 'M 4 -78 A 82 82 0 0 0 -22 -74'
                    }
                    fill="none"
                    className="stroke-amber-400"
                    strokeWidth={2.4}
                    markerEnd="url(#ind-arrow-amber)"
                  />
                  <text x={0} y={-92} textAnchor="middle" fontSize={10} className="fill-amber-300/90">
                    Lenz {emf >= 0 ? 'CCW' : 'CW'}
                  </text>
                  <defs>
                    <marker
                      id="ind-arrow-amber"
                      markerWidth="7"
                      markerHeight="7"
                      refX="5"
                      refY="3.5"
                      orient="auto"
                    >
                      <path d="M0,0 L7,3.5 L0,7 z" className="fill-amber-400" />
                    </marker>
                  </defs>
                </g>

                {/* wires to the meter */}
                <path
                  d={`M ${MW / 2 - 27} ${MH / 2 + 32} L ${MW / 2 - 27} ${MH / 2 + 66} L ${MW - 60} ${MH / 2 + 66} L ${MW - 60} ${MH / 2 + 50}`}
                  fill="none"
                  className="stroke-zinc-500/70"
                  strokeWidth={2}
                />
                <path
                  d={`M ${MW / 2 + 27} ${MH / 2 + 32} L ${MW / 2 + 27} ${MH / 2 + 80} L ${MW - 24} ${MH / 2 + 80} L ${MW - 24} ${MH / 2 + 50}`}
                  fill="none"
                  className="stroke-zinc-500/70"
                  strokeWidth={2}
                />
                <circle cx={MW - 60} cy={MH / 2 + 46} r={3.5} className="fill-zinc-400" />
                <circle cx={MW - 24} cy={MH / 2 + 46} r={3.5} className="fill-zinc-400" />
                <text x={MW - 42} y={MH / 2 + 44} textAnchor="middle" fontSize={9} className="fill-zinc-500">
                  to meter
                </text>

                {/* the bar magnet — draggable */}
                <g
                  ref={magnetRef}
                  transform={`translate(${xToPx(x) - MW / 2},0)`}
                  onPointerDown={onMagnetDown}
                  onPointerMove={onMagnetMove}
                  onPointerUp={onMagnetUp}
                  onPointerCancel={onMagnetUp}
                  onKeyDown={onMagnetKey}
                  tabIndex={0}
                  role="slider"
                  aria-label="Bar magnet position. Drag or use arrow keys to move; hold Shift for larger steps."
                  className="cursor-grab focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 active:cursor-grabbing"
                >
                  <rect x={MW / 2 - 44} y={MH / 2 - 44} width={44} height={28} rx={3} className="fill-rose-500/85" />
                  <rect x={MW / 2} y={MH / 2 - 44} width={44} height={28} rx={3} className="fill-zinc-400/90" />
                  <text x={MW / 2 - 22} y={MH / 2 - 26} textAnchor="middle" fontSize={12} className="fill-zinc-950 font-bold">
                    N
                  </text>
                  <text x={MW / 2 + 22} y={MH / 2 - 26} textAnchor="middle" fontSize={12} className="fill-zinc-900 font-bold">
                    S
                  </text>
                  {/* grip dots */}
                  <circle cx={MW / 2 - 6} cy={MH / 2 - 30} r={1.3} className="fill-zinc-800" />
                  <circle cx={MW / 2 - 6} cy={MH / 2 - 24} r={1.3} className="fill-zinc-800" />
                  <circle cx={MW / 2 + 6} cy={MH / 2 - 30} r={1.3} className="fill-zinc-700" />
                  <circle cx={MW / 2 + 6} cy={MH / 2 - 24} r={1.3} className="fill-zinc-700" />
                </g>
              </svg>
            </div>

            {/* e(t) strip scope */}
            <div className="mt-3 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  EMF strip — last 6 s
                </p>
                <p className="font-mono text-[10px] tabular-nums text-muted-foreground">
                  peak |e| = {fmtPlainVolt(peakE)}
                </p>
              </div>
              <svg viewBox={`0 0 ${SW} ${SH}`} className="w-full" role="img" aria-label="Time trace of the induced EMF over the last six seconds">
                <rect x={44} y={2} width={SW - 58} height={SH - 24} rx={6} className="fill-zinc-950/40" />
                {[0, 1, 2, 3, 4, 5, 6].map((k) => (
                  <line
                    key={`sg-${k}`}
                    x1={46 + ((SW - 60) / 6) * k}
                    y1={2}
                    x2={46 + ((SW - 60) / 6) * k}
                    y2={SH - 22}
                    className="stroke-zinc-500/12"
                    strokeWidth={1}
                  />
                ))}
                <line x1={44} y1={SH / 2 - 10} x2={SW - 14} y2={SH / 2 - 10} className="stroke-zinc-500/50" strokeWidth={1} strokeDasharray="5 4" />
                <text x={38} y={14} textAnchor="end" fontSize={9} className="fill-zinc-500 font-mono">
                  +{stripE >= 1 ? stripE.toFixed(1) : (stripE * 1000).toFixed(0) + 'm'}V
                </text>
                <text x={38} y={SH - 24} textAnchor="end" fontSize={9} className="fill-zinc-500 font-mono">
                  −{stripE >= 1 ? stripE.toFixed(1) : (stripE * 1000).toFixed(0) + 'm'}V
                </text>
                {hist.length > 1 && (
                  <path d={stripPath} fill="none" className="stroke-emerald-400" strokeWidth={1.8} strokeLinejoin="round" />
                )}
                {hist.length > 0 && (
                  <circle cx={sx(hist[hist.length - 1].t)} cy={sy(hist[hist.length - 1].e)} r={3} className="fill-amber-400" />
                )}
                <text x={SW / 2} y={SH - 6} textAnchor="middle" fontSize={9} className="fill-zinc-500">
                  6 s window — the double horn is the flux rising then falling as the magnet passes
                </text>
              </svg>
            </div>
          </div>

          {/* right column: galvanometer + readouts + controls */}
          <div className="min-w-0 space-y-3">
            <div className="rounded-xl border border-border bg-background/50 p-3">
              <svg viewBox={`0 0 ${GW} ${GH}`} className="w-full" role="img" aria-label={`Galvanometer reading ${fmtPlainVolt(emf)}`}>
                <path d={`M ${GW / 2 - 118} ${GH - 22} A 130 130 0 0 1 ${GW / 2 + 118} ${GH - 22}`} fill="none" className="stroke-zinc-500/40" strokeWidth={2} />
                {[-1, -0.5, 0, 0.5, 1].map((u) => {
                  const a = (-90 + u * 55) * (Math.PI / 180)
                  const x1 = GW / 2 + 118 * Math.cos(a)
                  const y1 = GH - 22 + 118 * Math.sin(a)
                  const x2 = GW / 2 + 104 * Math.cos(a)
                  const y2 = GH - 22 + 104 * Math.sin(a)
                  return (
                    <g key={`gt-${u}`}>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-zinc-400/70" strokeWidth={1.6} />
                      <text
                        x={GW / 2 + 132 * Math.cos(a)}
                        y={GH - 22 + 132 * Math.sin(a) + 3}
                        textAnchor="middle"
                        fontSize={9}
                        className="fill-zinc-500 font-mono"
                      >
                        {u === 0 ? '0' : u < 0 ? '−' : '+'}
                      </text>
                    </g>
                  )
                })}
                {/* needle — trig placement around the pivot */}
                {(() => {
                  const a = (-90 + needleAngle) * (Math.PI / 180)
                  const nx = GW / 2 + 112 * Math.cos(a)
                  const ny = GH - 22 + 112 * Math.sin(a)
                  return (
                    <g>
                      <line x1={GW / 2} y1={GH - 22} x2={nx} y2={ny} className="stroke-emerald-400" strokeWidth={2.6} strokeLinecap="round" />
                      <circle cx={GW / 2} cy={GH - 22} r={5.5} className="fill-zinc-600" />
                    </g>
                  )
                })()}
                <text x={GW / 2} y={GH - 6} textAnchor="middle" fontSize={10} className="fill-zinc-400">
                  center-zero galvanometer
                </text>
                <text x={GW / 2 - 96} y={GH - 60} fontSize={10} className="fill-rose-400/80">e &lt; 0</text>
                <text x={GW / 2 + 66} y={GH - 60} fontSize={10} className="fill-teal-300/80">e &gt; 0</text>
              </svg>
              <p className="mt-1 text-center font-mono text-sm tabular-nums text-foreground">
                e = <span className={Math.abs(emf) > 0.02 ? 'text-emerald-400' : 'text-muted-foreground'}>{fmtPlainVolt(emf)}</span>
              </p>
            </div>

            {/* live math */}
            <div className="space-y-1.5 rounded-xl border border-border bg-muted/20 p-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1">
                  <TeX tex={`\\Phi(x)=BA\\,e^{-x^{2}/2\\sigma^{2}}=${fmtWb(phi)}`} />
                </span>
                <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1">
                  <TeX tex={`\\frac{d\\Phi}{dx}=${fmtWb(fluxSlope(x, phiMax))}/\\mathrm{cm}`} />
                </span>
              </div>
              <span className="block rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1.5">
                <TeX
                  tex={`e=-N\\frac{d\\Phi}{dt}=-(${turns})\\times(${vel.toFixed(1)}\\,\\mathrm{cm/s})\\times(${fmtWb(fluxSlope(x, phiMax))}/\\mathrm{cm})=${fmtVolt(emf)}`}
                />
              </span>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                Lenz: the coil drives its own current to fight the <em>change</em> in flux — glow and the
                amber arrow show its direction. Hold the magnet still and e collapses to zero, even at
                maximum flux.
              </p>
            </div>

            {/* controls */}
            <div className="space-y-2.5 rounded-xl border border-border p-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <Button size="sm" onClick={() => startRun('pull')} disabled={running}>
                  <Play className="mr-1 h-3.5 w-3.5" />Pull through
                </Button>
                <Button size="sm" variant="outline" onClick={() => startRun('drop')} disabled={running}>
                  <ArrowDown className="mr-1 h-3.5 w-3.5" />Drop
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    stopRun()
                    setX(-4.2)
                    setVel(0)
                    setHist([])
                    setPeakE(0)
                    velTrack.current = { x: -4.2, t: performance.now(), v: 0 }
                  }}
                  aria-label="Reset magnet to start position"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                {running && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-amber-400">
                    <Repeat className="h-3 w-3 animate-pulse" />
                    {runRef.current?.kind === 'drop' ? `dropping — v = ${dropSpeed.toFixed(0)} cm/s` : `pulling at ${pullSpeed} cm/s`}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-14 shrink-0">pull speed</span>
                  <Slider
                    min={1}
                    max={40}
                    step={0.5}
                    value={[pullSpeed]}
                    onValueChange={(v) => setPullSpeed(v[0] ?? 2.5)}
                    className="w-28"
                    aria-label="Pull speed in centimetres per second"
                  />
                  <span className="w-12 font-mono text-xs tabular-nums text-foreground">{pullSpeed.toFixed(1)}</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-14 shrink-0">turns N</span>
                  <Slider
                    min={20}
                    max={400}
                    step={5}
                    value={[turns]}
                    onValueChange={(v) => setTurns(v[0] ?? 120)}
                    className="w-28"
                    aria-label="Coil turns"
                  />
                  <span className="w-12 font-mono text-xs tabular-nums text-foreground">{turns}</span>
                </label>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-14 shrink-0">magnet B</span>
                  <Slider
                    min={0.05}
                    max={0.6}
                    step={0.01}
                    value={[strength]}
                    onValueChange={(v) => setStrength(v[0] ?? 0.25)}
                    className="w-28"
                    aria-label="Magnet field strength in tesla"
                  />
                  <span className="w-12 font-mono text-xs tabular-nums text-foreground">{strength.toFixed(2)} T</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-14 shrink-0">position x</span>
                  <Slider
                    min={X_MIN}
                    max={X_MAX}
                    step={0.1}
                    value={[x]}
                    onValueChange={(v) => {
                      stopRun()
                      userMoveTo(v[0] ?? x)
                    }}
                    onValueCommit={settle}
                    className="w-28"
                    aria-label="Magnet position in centimetres"
                  />
                  <span className="w-12 font-mono text-xs tabular-nums text-foreground">{x.toFixed(1)}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================ GENERATOR MODE ============================ */}
      {mode === 'generator' && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <div className="min-w-0 space-y-3">
            <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
              <svg
                viewBox={`0 0 ${MW} ${MH}`}
                className="w-full select-none"
                role="img"
                aria-label={`Rotating coil in a uniform magnetic field. Rotation angle ${(theta % 6.283).toFixed(2)} radians, flux ${fmtWb(genPhiT)}, EMF ${fmtPlainVolt(genET)}.`}
              >
                {/* uniform field B -->
                {Array.from({ length: 6 }, (_, i) => (
                  <g key={`bf-${i}`}>
                    <line
                      x1={20}
                      y1={40 + i * 44}
                      x2={MW - 20}
                      y2={40 + i * 44}
                      className="stroke-teal-400/45"
                      strokeWidth={1.5}
                      markerEnd="url(#ind-arrow-teal)"
                    />
                    {i === 0 && (
                      <text x={24} y={30} fontSize={11} className="fill-teal-300">
                        B (uniform)
                      </text>
                    )}
                  </g>
                ))}
                <defs>
                  <marker id="ind-arrow-teal" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 z" className="fill-teal-400" />
                  </marker>
                </defs>

                {/* rotation path */}
                <circle cx={MW / 2} cy={MH / 2 - 20} r={92} fill="none" className="stroke-zinc-500/30" strokeWidth={1} strokeDasharray="3 6" />
                {/* the coil at angle theta */}
                <g>
                  <ellipse
                    cx={MW / 2}
                    cy={MH / 2 - 20}
                    rx={Math.max(1.5, 70 * Math.abs(Math.sin(theta)))}
                    ry={70}
                    fill="#14b8a6"
                    fillOpacity={0.08 + 0.28 * Math.abs(Math.cos(theta))}
                    className="stroke-emerald-400"
                    strokeWidth={3.5}
                  />
                  <line
                    x1={MW / 2}
                    y1={MH / 2 - 90}
                    x2={MW / 2}
                    y2={MH / 2 + 50}
                    className="stroke-emerald-400/70"
                    strokeWidth={2}
                  />
                  {/* normal vector n at angle theta from B */}
                  <line
                    x1={MW / 2}
                    y1={MH / 2 - 20}
                    x2={MW / 2 + 62 * Math.cos(theta)}
                    y2={MH / 2 - 20 - 62 * Math.sin(theta)}
                    className="stroke-amber-400"
                    strokeWidth={2.2}
                    markerEnd="url(#ind-arrow-amber2)"
                  />
                  <text
                    x={MW / 2 + 70 * Math.cos(theta)}
                    y={MH / 2 - 26 - 70 * Math.sin(theta)}
                    fontSize={11}
                    className="fill-amber-300"
                  >
                    n
                  </text>
                  <path
                    d={`M ${MW / 2 + 26} ${MH / 2 - 20} A 26 26 0 0 0 ${MW / 2 + 26 * Math.cos(theta)} ${MH / 2 - 20 - 26 * Math.sin(theta)}`}
                    fill="none"
                    className="stroke-amber-400/60"
                    strokeWidth={1.2}
                  />
                  <text x={MW / 2 + 34} y={MH / 2 - 30} fontSize={10} className="fill-amber-300/80 font-mono">
                    θ={(((theta % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)).toFixed(2)} rad
                  </text>
                  <defs>
                    <marker id="ind-arrow-amber2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 z" className="fill-amber-400" />
                    </marker>
                  </defs>
                </g>
                {/* terminals */}
                <path d={`M ${MW / 2} ${MH / 2 + 50} L ${MW / 2} ${MH / 2 + 84} L ${MW - 70} ${MH / 2 + 84}`} fill="none" className="stroke-zinc-500/70" strokeWidth={2} />
                <path d={`M ${MW / 2} ${MH / 2 - 90} L ${MW / 2} ${MH / 2 - 128}`} fill="none" className="stroke-zinc-500/70" strokeWidth={2} />
                <circle cx={MW - 66} cy={MH / 2 + 84} r={3.5} className="fill-zinc-400" />
                <circle cx={MW / 2} cy={MH / 2 - 132} r={3.5} className="fill-zinc-400" />
                <text x={MW / 2 + 8} y={MH / 2 + 76} fontSize={9} className="fill-zinc-500">
                  slip rings
                </text>
              </svg>
            </div>

            {/* generator scope */}
            <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">One period of Φ and e</p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                  <span className="inline-flex items-center gap-1 text-teal-300"><span className="h-0.5 w-4 rounded bg-teal-400" />Φ(t)</span>
                  <span className="inline-flex items-center gap-1 text-emerald-300"><span className="h-0.5 w-4 rounded bg-emerald-400" />e(t)</span>
                </div>
              </div>
              <svg viewBox={`0 0 ${SCOPE_W} ${SCOPE_H}`} className="w-full" role="img" aria-label="Flux and EMF versus time over one electrical period">
                <rect x={40} y={8} width={SCOPE_W - 56} height={SCOPE_H - 40} rx={6} className="fill-zinc-950/40" />
                <line x1={40} y1={SCOPE_H / 2 - 12} x2={SCOPE_W - 16} y2={SCOPE_H / 2 - 12} className="stroke-zinc-500/50" strokeWidth={1} />
                {[0, 0.25, 0.5, 0.75, 1].map((u) => (
                  <g key={`gt-${u}`}>
                    <line x1={40 + u * (SCOPE_W - 56)} y1={8} x2={40 + u * (SCOPE_W - 56)} y2={SCOPE_H - 32} className="stroke-zinc-500/12" />
                    <text x={40 + u * (SCOPE_W - 56)} y={SCOPE_H - 18} textAnchor="middle" fontSize={9} className="fill-zinc-500 font-mono">
                      {(u * genPeriod * 1000).toFixed(0)} ms
                    </text>
                  </g>
                ))}
                {/* curves */}
                <path
                  d={genCurve('phi')}
                  fill="none"
                  className="stroke-teal-400"
                  strokeWidth={2}
                />
                <path
                  d={genCurve('emf')}
                  fill="none"
                  className="stroke-emerald-400"
                  strokeWidth={2}
                />
                {/* playhead */}
                <line
                  x1={40 + (genPhase / (2 * Math.PI)) * (SCOPE_W - 56)}
                  y1={8}
                  x2={40 + (genPhase / (2 * Math.PI)) * (SCOPE_W - 56)}
                  y2={SCOPE_H - 32}
                  className="stroke-amber-400/70"
                  strokeWidth={1.4}
                />
                <circle
                  cx={40 + (genPhase / (2 * Math.PI)) * (SCOPE_W - 56)}
                  cy={SCOPE_H / 2 - 12 - (genPhiT / genPhiPk) * (SCOPE_H / 2 - 26)}
                  r={3.4}
                  className="fill-teal-400"
                />
                <circle
                  cx={40 + (genPhase / (2 * Math.PI)) * (SCOPE_W - 56)}
                  cy={SCOPE_H / 2 - 12 - (genET / genEPk) * (SCOPE_H / 2 - 26)}
                  r={3.4}
                  className="fill-emerald-400"
                />
                <text x={SCOPE_W / 2} y={SCOPE_H - 4} textAnchor="middle" fontSize={9} className="fill-zinc-500">
                  rotor drawn at a fixed visual speed — axis shows true electrical time
                </text>
              </svg>
            </div>
          </div>

          {/* right column */}
          <div className="min-w-0 space-y-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <Button size="sm" onClick={() => setGenPlaying((p) => !p)}>
                {genPlaying ? (
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
                  setGenPlaying(false)
                  setTheta(0)
                }}
                aria-label="Reset rotor angle"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-1.5 rounded-xl border border-border bg-muted/20 p-3">
              <span className="block rounded-lg border border-border bg-background/60 px-2.5 py-1">
                <TeX tex={`\\Phi(t)=NBA\\cos\\omega t=${fmtWb(genPhiPk)}\\cos(${genOmega.toFixed(0)}t)`} />
              </span>
              <span className="block rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1.5">
                <TeX tex={`e(t)=\\omega NBA\\sin\\omega t=${fmtVolt(genEPk)}\\sin(${genOmega.toFixed(0)}t)`} />
              </span>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1">
                  <TeX tex={`f=\\omega/2\\pi=${genF}\\,\\mathrm{Hz}`} />
                </span>
                <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1">
                  <TeX tex={`E_{\\mathrm{pk}}=\\omega N B A=${fmtVolt(genEPk)}`} />
                </span>
                <span className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-2.5 py-1">
                  <TeX tex={`E_{\\mathrm{rms}}=E_{\\mathrm{pk}}/\\sqrt{2}=${fmtVolt(genEPk / Math.SQRT2)}`} />
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                Live values: Φ = {fmtPlainWb(genPhiT)} · e = {fmtPlainVolt(genET)}. Note where the curves
                cross zero — flux peaks exactly when e = 0 and vice versa: the EMF is the <em>slope</em> of
                the flux, not its size.
              </p>
            </div>

            <div className="space-y-2.5 rounded-xl border border-border p-3">
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-20 shrink-0">frequency f</span>
                <Slider min={2} max={120} step={1} value={[genF]} onValueChange={(v) => setGenF(v[0] ?? 25)} className="w-32" aria-label="Rotation frequency in hertz" />
                <span className="w-14 font-mono text-xs tabular-nums text-foreground">{genF} Hz</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-20 shrink-0">field B</span>
                <Slider min={0.05} max={0.6} step={0.01} value={[genB]} onValueChange={(v) => setGenB(v[0] ?? 0.3)} className="w-32" aria-label="Magnetic field strength in tesla" />
                <span className="w-14 font-mono text-xs tabular-nums text-foreground">{genB.toFixed(2)} T</span>
              </label>
              <p className="text-[11px] text-muted-foreground">
                N = {genN} turns · A = 25 cm². Both sliders scale Φ and E linearly — but only f also
                squeezes the time axis, which is why E = NABω grows with speed while Φ does not.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================ TRANSFORMER MODE ============================ */}
      {mode === 'transformer' && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <div className="min-w-0 space-y-3">
            <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
              <svg
                viewBox={`0 0 ${MW} ${MH}`}
                className="w-full select-none"
                role="img"
                aria-label={`Transformer with ${npT} primary turns and ${nsT} secondary turns on a shared core. Voltage ratio ${vsT.toFixed(1)} to ${vpT.toFixed(1)}.`}
              >
                {/* laminated core */}
                <g className="stroke-zinc-500/60" fill="none">
                  <rect x={MW / 2 - 210} y={44} width={420} height={242} rx={16} strokeWidth={18} />
                  <rect x={MW / 2 - 210} y={44} width={420} height={242} rx={16} strokeWidth={1} className="stroke-zinc-600/50" strokeDasharray="3 5" />
                </g>
                <text x={MW / 2} y={30} textAnchor="middle" fontSize={10} className="fill-zinc-500">
                  laminated iron core
                </text>

                {/* circulating core flux */}
                <motion.rect
                  x={MW / 2 - 201}
                  y={53}
                  width={402}
                  height={224}
                  rx={10}
                  fill="none"
                  className="stroke-amber-400/45"
                  strokeWidth={1.3}
                  strokeDasharray="10 8"
                  animate={reduce ? undefined : { strokeDashoffset: [0, -36] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                />
                <text x={MW / 2} y={MH / 2 + 4} textAnchor="middle" fontSize={10} className="fill-amber-300/90">
                  Φ core (shared)
                </text>

                {/* primary winding */}
                <g>
                  {Array.from({ length: Math.min(9, Math.max(2, Math.round(npT / 45))) }, (_, i) => (
                    <ellipse
                      key={`pw-${i}`}
                      cx={MW / 2 - 210}
                      cy={96 + i * 20}
                      rx={26}
                      ry={9}
                      fill="none"
                      className="stroke-emerald-400"
                      strokeWidth={2.6}
                    />
                  ))}
                  <text x={MW / 2 - 210} y={MH - 18} textAnchor="middle" fontSize={10} className="fill-emerald-300">
                    primary Np = {npT}
                  </text>
                </g>
                {/* secondary winding */}
                <g>
                  {Array.from({ length: Math.min(9, Math.max(2, Math.round(nsT / 45))) }, (_, i) => (
                    <ellipse
                      key={`sw-${i}`}
                      cx={MW / 2 + 210}
                      cy={96 + i * 20}
                      rx={26}
                      ry={9}
                      fill="none"
                      className="stroke-teal-400"
                      strokeWidth={2.6}
                    />
                  ))}
                  <text x={MW / 2 + 210} y={MH - 18} textAnchor="middle" fontSize={10} className="fill-teal-300">
                    secondary Ns = {nsT}
                  </text>
                </g>

                {/* AC source symbol */}
                <circle cx={MW / 2 - 292} cy={MH / 2} r={22} fill="none" className="stroke-zinc-500/70" strokeWidth={1.6} />
                <path d={`M ${MW / 2 - 302} ${MH / 2} q 5 -9 10 0 q 5 9 10 0 q 5 -9 10 0`} fill="none" className="stroke-emerald-400" strokeWidth={1.8} />
                <text x={MW / 2 - 292} y={MH / 2 + 40} textAnchor="middle" fontSize={9} className="fill-zinc-500">
                  AC source
                </text>
                <path d={`M ${MW / 2 - 270} ${MH / 2} L ${MW / 2 - 236} ${MH / 2}`} className="stroke-zinc-500/70" strokeWidth={2} fill="none" />
                <path d={`M ${MW / 2 - 210} ${MH / 2 - 60} L ${MW / 2 - 210} ${MH / 2 - 46} M ${MW / 2 - 210} ${MH / 2 + 60} L ${MW / 2 - 210} ${MH / 2 + 46}`} className="stroke-zinc-500/70" strokeWidth={2} fill="none" />
                <path d={`M ${MW / 2 - 236} ${MH / 2} L ${MW / 2 - 236} ${MH / 2 + 74} L ${MW / 2 - 210} ${MH / 2 + 74} M ${MW / 2 - 236} ${MH / 2} L ${MW / 2 - 236} ${MH / 2 - 74} L ${MW / 2 - 210} ${MH / 2 - 74}`} className="stroke-zinc-500/70" strokeWidth={2} fill="none" />
                {/* load resistor */}
                <path d={`M ${MW / 2 + 210} ${MH / 2 - 74} L ${MW / 2 + 244} ${MH / 2 - 74} M ${MW / 2 + 210} ${MH / 2 + 74} L ${MW / 2 + 244} ${MH / 2 + 74}`} className="stroke-zinc-500/70" strokeWidth={2} fill="none" />
                <rect x={MW / 2 + 244} y={MH / 2 - 38} width={44} height={76} rx={4} fill="none" className="stroke-zinc-500/70" strokeWidth={2} />
                <text x={MW / 2 + 266} y={MH / 2 + 4} textAnchor="middle" fontSize={9} className="fill-zinc-500">
                  10 Ω
                </text>
                <path d={`M ${MW / 2 + 244} ${MH / 2 - 74} L ${MW / 2 + 266} ${MH / 2 - 74} L ${MW / 2 + 266} ${MH / 2 - 38} M ${MW / 2 + 266} ${MH / 2 + 38} L ${MW / 2 + 266} ${MH / 2 + 74} L ${MW / 2 + 244} ${MH / 2 + 74}`} className="stroke-zinc-500/70" strokeWidth={2} fill="none" />
              </svg>
            </div>

            {/* transformer waveforms */}
            <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Primary vs secondary (60 Hz)</p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                  <span className="inline-flex items-center gap-1 text-emerald-300"><span className="h-0.5 w-4 rounded bg-emerald-400" />Vp</span>
                  <span className="inline-flex items-center gap-1 text-teal-300"><span className="h-0.5 w-4 rounded bg-teal-400" />Vs</span>
                </div>
              </div>
              <svg viewBox={`0 0 ${SCOPE_W} ${SCOPE_H}`} className="w-full" role="img" aria-label="Primary and secondary voltage waveforms">
                <rect x={40} y={8} width={SCOPE_W - 56} height={SCOPE_H - 40} rx={6} className="fill-zinc-950/40" />
                <line x1={40} y1={SCOPE_H / 2 - 12} x2={SCOPE_W - 16} y2={SCOPE_H / 2 - 12} className="stroke-zinc-500/50" strokeWidth={1} />
                {[0, 0.5, 1].map((u) => (
                  <g key={`xt-${u}`}>
                    <line x1={40 + u * (SCOPE_W - 56)} y1={8} x2={40 + u * (SCOPE_W - 56)} y2={SCOPE_H - 32} className="stroke-zinc-500/12" />
                    <text x={40 + u * (SCOPE_W - 56)} y={SCOPE_H - 18} textAnchor="middle" fontSize={9} className="fill-zinc-500 font-mono">
                      {(u * (1 / 60) * 1000).toFixed(1)} ms
                    </text>
                  </g>
                ))}
                {xfmrCurve()}
                <text x={46} y={24} fontSize={9} className="fill-zinc-500 font-mono">
                  ±{vpT.toFixed(0)} V
                </text>
              </svg>
            </div>
          </div>

          {/* right column */}
          <div className="min-w-0 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className={xfmrUp ? 'border-amber-400/60 bg-amber-400/10 text-amber-300' : 'border-teal-400/60 bg-teal-400/10 text-teal-300'}>
                {nsT === npT ? '1:1 isolation' : xfmrUp ? `step-up ${nsT}:${npT}` : `step-down ${npT}:${nsT}`}
              </Badge>
              <span className="text-[11px] text-muted-foreground">
                {xfmrUp ? 'fewer primary turns → voltage amplified' : 'more primary turns → voltage reduced'}
              </span>
            </div>

            <div className="space-y-1.5 rounded-xl border border-border bg-muted/20 p-3">
              <span className="block rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1.5">
                <TeX tex={`\\frac{V_s}{V_p}=\\frac{N_s}{N_p}=\\frac{${nsT}}{${npT}}=${(vsT / vpT).toFixed(3)}\\;\\Rightarrow\\;V_s=${fmtVolt(vsT)}_{\\mathrm{pk}}`} />
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1">
                  <TeX tex={`V_{p,\\mathrm{rms}}=${(vpT / Math.SQRT2).toFixed(1)}\\,\\mathrm{V}`} />
                </span>
                <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1">
                  <TeX tex={`V_{s,\\mathrm{rms}}=${(vsT / Math.SQRT2).toFixed(1)}\\,\\mathrm{V}`} />
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1">
                  <TeX tex={`I_s=V_s/R=${fmtAmp(isLoad)}\\;(R=10\\,\\Omega)`} />
                </span>
                <span className="rounded-lg border border-teal-500/40 bg-teal-500/10 px-2.5 py-1">
                  <TeX tex={`P=V_s I_s=${((vsT * isLoad) / 2).toFixed(1)}\\,\\mathrm{W}`} />
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                An ideal transformer conserves power: <TeX tex="V_p I_p = V_s I_s" /> — here the primary
                draws {fmtAmp(ipT)} to feed the load. Currents step the <em>opposite</em> way to
                voltages.
              </p>
            </div>

            <div className="space-y-2.5 rounded-xl border border-border p-3">
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-16 shrink-0">primary Np</span>
                <Slider min={20} max={480} step={10} value={[npT]} onValueChange={(v) => setNpT(v[0] ?? 200)} className="w-32" aria-label="Primary turns" />
                <span className="w-12 font-mono text-xs tabular-nums text-foreground">{npT}</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-16 shrink-0">secondary Ns</span>
                <Slider min={5} max={600} step={5} value={[nsT]} onValueChange={(v) => setNsT(v[0] ?? 60)} className="w-32" aria-label="Secondary turns" />
                <span className="w-12 font-mono text-xs tabular-nums text-foreground">{nsT}</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-16 shrink-0">Vp (peak)</span>
                <Slider min={12} max={240} step={4} value={[vpT]} onValueChange={(v) => setVpT(v[0] ?? 120)} className="w-32" aria-label="Primary voltage peak in volts" />
                <span className="w-12 font-mono text-xs tabular-nums text-foreground">{vpT} V</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* try this */}
      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          park the magnet dead centre at maximum flux — the needle sags to zero, because Faraday needs a{' '}
          <em>change</em>. Then run <span className="font-medium text-foreground">Pull through</span> at
          2 cm/s and again at 25 cm/s: same flux swing, roughly twelve-fold EMF horns. Finally load{' '}
          <span className="font-medium text-foreground">60 Hz generator</span> and compare{' '}
          <TeX tex="E_{\mathrm{pk}}" /> with <TeX tex="\omega NBA" /> — the EMF rides the derivative, which
          is why speed, not flux, is the generator&apos;s payoff.
        </span>
      </div>
    </div>
  )

  /* ---------------- generator / transformer curve helpers ---------------- */

  function genCurve(which: 'phi' | 'emf'): string {
    const L = 40
    const R = SCOPE_W - 16
    const mid = SCOPE_H / 2 - 12
    const amp = SCOPE_H / 2 - 26
    const steps = 140
    let d = ''
    for (let i = 0; i <= steps; i++) {
      const u = i / steps
      const ph = 2 * Math.PI * u
      const v = which === 'phi' ? Math.cos(ph) : Math.sin(ph)
      const px = L + u * (R - L)
      const py = mid - v * amp
      d += `${i === 0 ? 'M' : 'L'}${px.toFixed(1)},${py.toFixed(1)}`
    }
    return d
  }

  function xfmrCurve() {
    const L = 40
    const R = SCOPE_W - 16
    const mid = SCOPE_H / 2 - 12
    const amp = SCOPE_H / 2 - 26
    const steps = 160
    const vMax = Math.max(vpT, vsT, 1)
    let dp = ''
    let ds = ''
    for (let i = 0; i <= steps; i++) {
      const u = i / steps
      const ph = 2 * Math.PI * u
      const px = L + u * (R - L)
      const py = mid - (vpT / vMax) * amp * Math.sin(ph)
      const pys = mid - (vsT / vMax) * amp * Math.sin(ph)
      dp += `${i === 0 ? 'M' : 'L'}${px.toFixed(1)},${py.toFixed(1)}`
      ds += `${i === 0 ? 'M' : 'L'}${px.toFixed(1)},${pys.toFixed(1)}`
    }
    return (
      <g>
        <path d={dp} fill="none" className="stroke-emerald-400" strokeWidth={2} />
        <path d={ds} fill="none" className="stroke-teal-400" strokeWidth={2} />
      </g>
    )
  }
}

/* plain-text unit helpers for aria labels (no TeX) */
function fmtPlainVolt(v: number): string {
  const a = Math.abs(v)
  const s = v < 0 ? '−' : ''
  if (a >= 1) return `${s}${a.toFixed(2)} V`
  if (a >= 1e-3) return `${s}${(a * 1e3).toFixed(1)} mV`
  return `${s}${(a * 1e6).toFixed(0)} µV`
}
function fmtPlainWb(w: number): string {
  const a = Math.abs(w)
  const s = w < 0 ? '−' : ''
  if (a >= 1e-3) return `${s}${(w * 1e3).toFixed(2)} mWb`
  return `${s}${(w * 1e6).toFixed(1)} µWb`
}
function fmtAmp(v: number): string {
  const a = Math.abs(v)
  const s = v < 0 ? '-' : ''
  if (a >= 1) return `${s}${a.toFixed(2)}\\,\\mathrm{A}`
  return `${s}${(a * 1e3).toFixed(1)}\\,\\mathrm{mA}`
}
