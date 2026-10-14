'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Lightbulb, Orbit as OrbitIcon, Pause, Play, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Geometry and constants                                              */
/* ------------------------------------------------------------------ */

const W = 660
const H = 470
const CX = W / 2
const CY = H / 2

const MU_SINGLE = 12000 // GM for the lone star
const MU_BINARY = 24000 // G(M_A + M_B) for the equal-mass pair
const SIM_RATE = 6 // sim seconds per real second at speed 1x
const VEL_SCALE = 3.4 // px shown per (unit velocity)
const PAR_SCALE = 0.55 // parallelogram velocity shrink factor

interface Vec {
  x: number
  y: number
}

interface Stamp {
  p1: Vec
  p2: Vec
  area: number
}

interface Readouts {
  a: number
  e: number
  tpred: number
  tmeas: number | null
  energy: number
  ke: number
  pe: number
  v: number
  r: number
  vesc: number
  L: number
  ldrift: number
  badge: 'circle' | 'ellipse' | 'parabola' | 'hyperbola'
  areaMean: number
  areaSpread: number
  out: boolean
}

function hypot(x: number, y: number): number {
  return Math.sqrt(x * x + y * y)
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v))
}

function fc(v: number, d = 1): string {
  return String(Number(v.toFixed(d)))
}

function fe(v: number, d = 2): string {
  return v.toExponential(d).replace('e', '\\times10^{') + '}'
}

/* ------------------------------------------------------------------ */
/*  Presets                                                            */
/* ------------------------------------------------------------------ */

type PresetKey = 'circle' | 'comet' | 'escape' | 'binary'

const PRESETS: { key: PresetKey; label: string; aria: string; r: Vec; v: Vec }[] = [
  {
    key: 'circle',
    label: 'Circle',
    aria: 'Preset: circular orbit',
    r: { x: 110, y: 0 },
    v: { x: 0, y: Math.sqrt(MU_SINGLE / 110) },
  },
  {
    key: 'comet',
    label: 'Comet ellipse (e=0.9)',
    aria: 'Preset: comet ellipse with eccentricity zero point nine',
    r: { x: 11, y: 0 },
    v: { x: 0, y: Math.sqrt((MU_SINGLE * 1.9) / 11) },
  },
  {
    key: 'escape',
    label: 'Escape trajectory',
    aria: 'Preset: escape trajectory just above escape velocity',
    r: { x: 110, y: 0 },
    v: { x: 0, y: Math.sqrt((2 * MU_SINGLE) / 110) * 1.07 },
  },
  {
    key: 'binary',
    label: 'Binary star dance',
    aria: 'Preset: binary star dance, two equal masses',
    r: { x: 160, y: 0 },
    v: { x: 0, y: Math.sqrt(MU_BINARY / 160) },
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function OrbitLab() {
  const reduce = useReducedMotion()
  const [running, setRunning] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [presetKey, setPresetKey] = useState<PresetKey>('circle')
  const [snap, setSnap] = useState<Readouts | null>(null)
  const [presetTick, setPresetTick] = useState(0)
  const [view, setView] = useState({
    rx: 110,
    ry: 0,
    vx: 0,
    vy: Math.sqrt(MU_SINGLE / 110),
    mode: 'single' as 'single' | 'binary',
    trailPath: '',
    stamps: [] as Stamp[],
  })

  const modeRef = useRef<'single' | 'binary'>('single')
  const relRef = useRef({ rx: 110, ry: 0, vx: 0, vy: Math.sqrt(MU_SINGLE / 110), t: 0 })
  const trailRef = useRef<number[][]>([])
  const stampsRef = useRef<Stamp[]>([])
  const nextStampRef = useRef(0)
  const prevStampRef = useRef<Vec | null>({ x: 110, y: 0 })
  const prevYRef = useRef(0)
  const lastCrossRef = useRef<number | null>(null)
  const periodRef = useRef<number | null>(null)
  const l0Ref = useRef(110 * Math.sqrt(MU_SINGLE / 110))
  const speedRef = useRef(1)

  const svgRef = useRef<SVGSVGElement | null>(null)
  const dragRef = useRef<'pos' | 'vel' | null>(null)
  const wasRunningRef = useRef(true)

  const mu = () => (modeRef.current === 'binary' ? MU_BINARY : MU_SINGLE)

  const computeReadouts = (): Readouts => {
    const { rx, ry, vx, vy } = relRef.current
    const m = mu()
    const r = hypot(rx, ry)
    const v = hypot(vx, vy)
    const ke = (v * v) / 2
    const pe = -m / r
    const energy = ke + pe
    const L = rx * vy - ry * vx
    const rv = rx * vx + ry * vy
    const ex = ((v * v - m / r) * rx - rv * vx) / m
    const ey = ((v * v - m / r) * ry - rv * vy) / m
    const e = hypot(ex, ey)
    const a = energy < -1e-9 ? -m / (2 * energy) : Infinity
    const tpred = Number.isFinite(a) ? 2 * Math.PI * Math.sqrt((a * a * a) / m) : Infinity
    const stamps = stampsRef.current
    const areas = stamps.slice(-10).map((s) => s.area)
    const areaMean = areas.length
      ? areas.reduce((s, x) => s + x, 0) / areas.length
      : 0
    const areaSpread =
      areas.length > 1 && areaMean > 0
        ? (Math.max(...areas) - Math.min(...areas)) / areaMean
        : 0
    const badge: Readouts['badge'] =
      energy < -1e-9 ? (e < 0.03 ? 'circle' : 'ellipse') : energy > 1e-9 ? 'hyperbola' : 'parabola'
    return {
      a,
      e,
      tpred,
      tmeas: periodRef.current,
      energy,
      ke,
      pe,
      v,
      r,
      vesc: Math.sqrt((2 * m) / r),
      L,
      ldrift: l0Ref.current !== 0 ? Math.abs(L - l0Ref.current) / Math.abs(l0Ref.current) : 0,
      badge,
      areaMean,
      areaSpread,
      out: r > 520,
    }
  }

  const clearEvidence = () => {
    trailRef.current = []
    stampsRef.current = []
    nextStampRef.current = relRef.current.t
    prevStampRef.current = { x: relRef.current.rx, y: relRef.current.ry }
    lastCrossRef.current = null
    periodRef.current = null
  }

  const applyPreset = (p: { key: PresetKey; r: Vec; v: Vec }) => {
    modeRef.current = p.key === 'binary' ? 'binary' : 'single'
    relRef.current = { rx: p.r.x, ry: p.r.y, vx: p.v.x, vy: p.v.y, t: 0 }
    l0Ref.current = p.r.x * p.v.y - p.r.y * p.v.x
    prevYRef.current = p.r.y
    clearEvidence()
    nextStampRef.current = 0
    setSnap(computeReadouts())
    pushView()
    setPresetTick((n) => n + 1)
    setRunning(true)
  }

  /** Mirror the ref-based sim into state so the SVG renders without touching refs. */
  const pushView = () => {
    const rel = relRef.current
    const half = modeRef.current === 'binary' ? 0.5 : 1
    setView({
      rx: rel.rx,
      ry: rel.ry,
      vx: rel.vx,
      vy: rel.vy,
      mode: modeRef.current,
      trailPath: trailRef.current
        .map((p, i) => `${i === 0 ? 'M' : 'L'}${(CX + p[0]).toFixed(1)},${(CY - p[1]).toFixed(1)}`)
        .join(''),
      stamps: stampsRef.current.slice(),
    })
  }

  /* ---------------- integrator (leapfrog KDK) ---------------- */

  const stepSim = (dtSim: number) => {
    const rel = relRef.current
    const m = mu()
    let r = hypot(rel.rx, rel.ry)
    const n = Math.round(clamp((16 * 90) / Math.max(r, 24), 12, 128))
    const h = dtSim / n
    for (let i = 0; i < n; i++) {
      const r3 = Math.max(r, 4) ** 3
      rel.vx += ((-m * rel.rx) / r3 * h) / 2
      rel.vy += ((-m * rel.ry) / r3 * h) / 2
      rel.rx += rel.vx * h
      rel.ry += rel.vy * h
      r = hypot(rel.rx, rel.ry)
      const r3b = Math.max(r, 4) ** 3
      rel.vx += ((-m * rel.rx) / r3b * h) / 2
      rel.vy += ((-m * rel.ry) / r3b * h) / 2
      rel.t += h

      // Kepler 2: stamp equal-time triangles
      if (rel.t >= nextStampRef.current && prevStampRef.current) {
        const bound = computeReadouts()
        const stampDT = Number.isFinite(bound.tpred) ? bound.tpred / 10 : 2
        const p1 = prevStampRef.current
        const p2 = { x: rel.rx, y: rel.ry }
        const area = Math.abs(p1.x * p2.y - p1.y * p2.x) / 2
        stampsRef.current.push({ p1, p2, area })
        if (stampsRef.current.length > 12) stampsRef.current.shift()
        prevStampRef.current = p2
        nextStampRef.current += stampDT
        if (nextStampRef.current < rel.t) nextStampRef.current = rel.t + stampDT
      }

      // period measurement: +x axis crossing, moving downward
      if (prevYRef.current > 0 && rel.ry <= 0 && rel.vy < 0 && Number.isFinite(computeReadouts().a)) {
        if (lastCrossRef.current !== null) {
          periodRef.current = rel.t - lastCrossRef.current
        }
        lastCrossRef.current = rel.t
      }
      prevYRef.current = rel.ry
    }
    if (r < 900) {
      const half = modeRef.current === 'binary' ? 0.5 : 1
      trailRef.current.push([rel.rx * half, rel.ry * half])
      if (trailRef.current.length > 1600) trailRef.current.splice(0, 240)
    }
  }

  useEffect(() => {
    speedRef.current = speed
  }, [speed])

  useEffect(() => {
    if (!running) return
    let raf = 0
    let last = performance.now()
    let lastSnap = 0
    const loop = (now: number) => {
      const dtReal = Math.min(0.05, (now - last) / 1000)
      last = now
      stepSim(dtReal * speedRef.current * SIM_RATE)
      pushView()
      if (now - lastSnap > 150) {
        lastSnap = now
        setSnap(computeReadouts())
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [running])

  /* ---------------- pointer / keyboard ---------------- */

  const clientToWorld = (clientX: number, clientY: number): Vec | null => {
    const svg = svgRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    if (rect.width === 0) return null
    const px = ((clientX - rect.left) / rect.width) * W
    const py = ((clientY - rect.top) / rect.height) * H
    return { x: px - CX, y: CY - py }
  }

  const onHandleDown = (kind: 'pos' | 'vel') => (e: React.PointerEvent<SVGGElement>) => {
    e.preventDefault()
    dragRef.current = kind
    wasRunningRef.current = running
    setRunning(false)
    clearEvidence()
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onHandleMove = (e: React.PointerEvent<SVGGElement>) => {
    const kind = dragRef.current
    if (!kind) return
    const w = clientToWorld(e.clientX, e.clientY)
    if (!w) return
    const rel = relRef.current
    if (kind === 'pos') {
      const f = modeRef.current === 'binary' ? 2 : 1
      let rx = w.x * f
      let ry = w.y * f
      const r = hypot(rx, ry)
      if (r > 320) {
        rx = (rx / r) * 320
        ry = (ry / r) * 320
      }
      if (r < 14) {
        rx = (rx / (r || 1)) * 14
        ry = (ry / (r || 1)) * 14
      }
      rel.rx = rx
      rel.ry = ry
      prevYRef.current = ry
      l0Ref.current = rx * rel.vy - ry * rel.vx
    } else {
      const half = modeRef.current === 'binary' ? 0.5 : 1
      const px = rel.rx * half
      const py = rel.ry * half
      let vx = (w.x - px) / VEL_SCALE / half
      let vy = (w.y - py) / VEL_SCALE / half
      const v = hypot(vx, vy)
      if (v > 120) {
        vx = (vx / v) * 120
        vy = (vy / v) * 120
      }
      rel.vx = vx
      rel.vy = vy
      l0Ref.current = rel.rx * vy - rel.ry * vx
    }
    setSnap(computeReadouts())
    pushView()
  }

  const onHandleUp = () => {
    dragRef.current = null
    if (wasRunningRef.current) setRunning(true)
  }

  const onPosKeyDown = (e: React.KeyboardEvent) => {
    const stepSize = e.shiftKey ? 12 : 4
    let dx = 0
    let dy = 0
    if (e.key === 'ArrowLeft') dx = -stepSize
    else if (e.key === 'ArrowRight') dx = stepSize
    else if (e.key === 'ArrowUp') dy = stepSize
    else if (e.key === 'ArrowDown') dy = -stepSize
    else return
    e.preventDefault()
    const rel = relRef.current
    const f = modeRef.current === 'binary' ? 0.5 : 1
    let rx = (rel.rx * f + dx) / f
    let ry = (rel.ry * f + dy) / f
    const r = hypot(rx, ry)
    if (r > 320) {
      rx = (rx / r) * 320
      ry = (ry / r) * 320
    }
    rel.rx = rx
    rel.ry = ry
    prevYRef.current = ry
    l0Ref.current = rel.rx * rel.vy - rel.ry * rel.vx
    clearEvidence()
    setSnap(computeReadouts())
    pushView()
  }

  const onVelKeyDown = (e: React.KeyboardEvent) => {
    const rel = relRef.current
    let vx = rel.vx
    let vy = rel.vy
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      const f = e.key === 'ArrowUp' ? 1.05 : 1 / 1.05
      vx *= f
      vy *= f
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const a = ((e.key === 'ArrowRight' ? 4 : -4) * Math.PI) / 180
      const c = Math.cos(a)
      const s = Math.sin(a)
      const nx = vx * c - vy * s
      vy = vx * s + vy * c
      vx = nx
    } else return
    e.preventDefault()
    const v = hypot(vx, vy)
    if (v > 120) {
      vx = (vx / v) * 120
      vy = (vy / v) * 120
    }
    rel.vx = vx
    rel.vy = vy
    l0Ref.current = rel.rx * vy - rel.ry * vx
    clearEvidence()
    setSnap(computeReadouts())
    pushView()
  }

  /* ---------------- derived drawing state (from view state only) ---------------- */

  const rel = view
  const half = view.mode === 'binary' ? 0.5 : 1
  const bodyA = { x: view.rx * half, y: view.ry * half }
  const velA = { x: view.vx * half, y: view.vy * half }
  const m = view.mode === 'binary' ? MU_BINARY : MU_SINGLE
  const rNow = hypot(view.rx, view.ry)
  const vNow = hypot(view.vx, view.vy)
  const eVec = (() => {
    const v2 = vNow * vNow
    const rv = view.rx * view.vx + view.ry * view.vy
    return {
      x: ((v2 - m / rNow) * view.rx - rv * view.vx) / m,
      y: ((v2 - m / rNow) * view.ry - rv * view.vy) / m,
    }
  })()
  const ecc = hypot(eVec.x, eVec.y)
  const energyNow = (vNow * vNow) / 2 - m / rNow
  const aNow = energyNow < -1e-9 ? -m / (2 * energyNow) : Infinity
  const vescDisp = view.mode === 'binary' ? Math.sqrt(m / (2 * rNow)) : Math.sqrt((2 * m) / rNow)

  const trailPath = view.trailPath

  const px = (x: number): number => CX + x
  const py = (y: number): number => CY - y

  const arrowTip = { x: px(bodyA.x + velA.x * VEL_SCALE), y: py(bodyA.y + velA.y * VEL_SCALE) }
  const escTip = vNow > 0.001
    ? {
        x: px(bodyA.x + (velA.x / vNow) * vescDisp * VEL_SCALE),
        y: py(bodyA.y + (velA.y / vNow) * vescDisp * VEL_SCALE),
      }
    : { x: px(bodyA.x), y: py(bodyA.y) }

  const badgeTone =
    snap && snap.badge === 'hyperbola'
      ? 'border-rose-500/50 bg-rose-500/10 text-rose-300'
      : snap && snap.badge === 'parabola'
        ? 'border-amber-500/50 bg-amber-500/10 text-amber-300'
        : 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
  const badgeText =
    snap?.badge === 'circle'
      ? 'Bound · circular'
      : snap?.badge === 'ellipse'
        ? 'Bound · ellipse'
        : snap?.badge === 'parabola'
          ? 'Marginal · parabola'
          : snap?.badge === 'hyperbola'
            ? 'Unbound · hyperbola'
            : '—'

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

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <OrbitIcon className="h-5 w-5 text-emerald-400" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Kepler Orbit Simulator</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Feynman ch 4–5: drag the planet (or star A) to reposition, drag the emerald arrow to
            reshape the orbit — Kepler&apos;s three laws verified live as you fly.
          </p>
        </div>
      </div>

      {/* presets */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Presets
        </span>
        {PRESETS.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => {
              setPresetKey(p.key)
              applyPreset(p)
            }}
            aria-label={p.aria}
            aria-pressed={presetKey === p.key}
            className={`rounded-lg border px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
              presetKey === p.key
                ? 'border-emerald-500/60 bg-emerald-500/15 text-foreground ring-1 ring-emerald-500/40'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* controls */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-border bg-background/50 p-3">
        <Button size="sm" variant="outline" onClick={() => setRunning((v) => !v)} className="h-8">
          {running ? (
            <Pause className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <Play className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
          )}
          {running ? 'Pause' : 'Play'}
        </Button>
        <Button
          size="sm"
          variant="ghost"
          aria-label="Reset to the current preset"
          onClick={() => applyPreset(PRESETS.find((p) => p.key === presetKey) ?? PRESETS[0])}
          className="h-8"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
        </Button>
        <div className="flex min-w-[180px] flex-1 items-center gap-x-3">
          <span className="shrink-0 text-xs font-medium text-muted-foreground">Speed</span>
          <Slider
            min={0.25}
            max={4}
            step={0.05}
            value={[speed]}
            onValueChange={(v) => setSpeed(v[0] ?? 1)}
            className="flex-1"
            aria-label="Simulation speed multiplier"
          />
          <span className="w-10 shrink-0 font-mono text-xs tabular-nums text-foreground">
            {fc(speed, 2)}×
          </span>
        </div>
        <span className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${badgeTone}`}>
          {badgeText}
        </span>
        <span className="rounded-lg border border-border bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground">
          {view.mode === 'binary' ? 'two-body mode · equal masses' : 'single star mode'}
        </span>
      </div>

      {/* plot */}
      <div className="mt-3 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="h-0.5 w-4 rounded bg-emerald-400" /> orbit trail
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-sm bg-amber-400/25 ring-1 ring-amber-400/70" />{' '}
            equal-area sweep (Kepler 2)
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-sm bg-teal-400/15 ring-1 ring-teal-400/60" />{' '}
            r × v parallelogram (L)
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="h-0.5 w-4 rounded border-t-2 border-dashed border-amber-400" />{' '}
            v_esc marker
          </span>
        </div>

        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full touch-none select-none"
          role="img"
          aria-label={`Orbit plot: ${view.mode === 'binary' ? 'binary stars about their common center of mass' : 'a planet orbiting the central star'}. Drag the body to reposition and the velocity arrow to reshape the orbit. Semi-major axis ${snap ? fc(snap.a, 0) : '—'} units, eccentricity ${snap ? fc(snap.e, 2) : '—'}.`}
        >
          <defs>
            <marker
              id="orbit-ah-em"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5.5"
              markerHeight="5.5"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" className="fill-emerald-400" />
            </marker>
            <marker
              id="orbit-ah-am"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" className="fill-amber-400" />
            </marker>
          </defs>

          <rect x={0} y={0} width={W} height={H} rx={6} className="fill-zinc-950/40" />

          {/* range rings */}
          {[60, 120, 180, 240].map((rr) => (
            <circle
              key={`ring-${rr}`}
              cx={CX}
              cy={CY}
              r={rr}
              className="stroke-zinc-500/10"
              strokeWidth={1}
              fill="none"
            />
          ))}
          <line x1={CX} y1={16} x2={CX} y2={H - 16} className="stroke-zinc-500/10" strokeWidth={1} />
          <line x1={16} y1={CY} x2={W - 16} y2={CY} className="stroke-zinc-500/10" strokeWidth={1} />

          {/* analytic orbit ellipse */}
          {Number.isFinite(aNow) && ecc < 0.999 && (
            <ellipse
              cx={CX - aNow * eVec.x}
              cy={CY + aNow * eVec.y}
              rx={aNow}
              ry={aNow * Math.sqrt(Math.max(0, 1 - ecc * ecc))}
              transform={`rotate(${(-Math.atan2(eVec.y, eVec.x) * 180) / Math.PI} ${CX - aNow * eVec.x} ${CY + aNow * eVec.y})`}
              className="stroke-zinc-500/30"
              strokeWidth={1}
              strokeDasharray="4 5"
              fill="none"
            />
          )}

          {/* equal-area stamps */}
          {view.stamps.map((st, i) => (
            <polygon
              key={`stamp-${i}`}
              points={`${CX},${CY} ${px(st.p1.x)},${py(st.p1.y)} ${px(st.p2.x)},${py(st.p2.y)}`}
              className="fill-amber-400/12 stroke-amber-400/60"
              strokeWidth={1}
            />
          ))}

          {/* trail */}
          {trailPath && (
            <path d={trailPath} className="stroke-emerald-400/70" strokeWidth={1.5} fill="none" />
          )}

          {/* r × v parallelogram */}
          {vNow > 0.001 && (
            <polygon
              points={`${CX},${CY} ${px(bodyA.x)},${py(bodyA.y)} ${px(bodyA.x + velA.x * PAR_SCALE)},${py(bodyA.y + velA.y * PAR_SCALE)} ${px(velA.x * PAR_SCALE)},${py(velA.y * PAR_SCALE)}`}
              className="fill-teal-400/10 stroke-teal-400/50"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
          )}

          {/* central star / COM */}
          {view.mode === 'single' ? (
            <g>
              <circle cx={CX} cy={CY} r={17} className="fill-amber-400/15" />
              <circle cx={CX} cy={CY} r={10} className="fill-amber-400" />
              <circle cx={CX} cy={CY} r={4} className="fill-amber-200" />
            </g>
          ) : (
            <g>
              <line x1={CX - 5} y1={CY} x2={CX + 5} y2={CY} className="stroke-zinc-400/70" strokeWidth={1.5} />
              <line x1={CX} y1={CY - 5} x2={CX} y2={CY + 5} className="stroke-zinc-400/70" strokeWidth={1.5} />
            </g>
          )}

          {/* star B (binary mode) */}
          {view.mode === 'binary' && (
            <g>
              <circle cx={px(-bodyA.x)} cy={py(-bodyA.y)} r={15} className="fill-teal-400/15" />
              <circle cx={px(-bodyA.x)} cy={py(-bodyA.y)} r={9} className="fill-teal-400" />
              <circle cx={px(-bodyA.x)} cy={py(-bodyA.y)} r={3.5} className="fill-teal-200" />
              <circle
                cx={px(-bodyA.x)}
                cy={py(-bodyA.y)}
                r={10}
                className="fill-transparent stroke-teal-300/50"
                strokeWidth={1}
                strokeDasharray="2 3"
              />
            </g>
          )}

          {/* velocity arrow + escape marker */}
          {vNow > 0.001 && (
            <g>
              <line
                x1={px(bodyA.x)}
                y1={py(bodyA.y)}
                x2={arrowTip.x}
                y2={arrowTip.y}
                className="stroke-emerald-400"
                strokeWidth={2.5}
                markerEnd="url(#orbit-ah-em)"
              />
              <line
                x1={px(bodyA.x)}
                y1={py(bodyA.y)}
                x2={escTip.x}
                y2={escTip.y}
                className="stroke-amber-400/80"
                strokeWidth={1.5}
                strokeDasharray="6 4"
                markerEnd="url(#orbit-ah-am)"
              />
              <text
                x={(px(bodyA.x) + escTip.x) / 2 + 8}
                y={(py(bodyA.y) + escTip.y) / 2}
                fontSize={11}
                className="fill-amber-300 font-mono"
              >
                v<tspan baselineShift="sub" fontSize="8">esc</tspan>
              </text>
            </g>
          )}

          {/* draggable velocity tip */}
          <g
            transform={`translate(${arrowTip.x},${arrowTip.y})`}
            tabIndex={0}
            role="slider"
            aria-label="Velocity vector handle. Arrow keys: up and down change the speed, left and right rotate the velocity. Hold Shift for bigger steps."
            aria-valuemin={0}
            aria-valuemax={120}
            aria-valuenow={Math.round(vNow)}
            aria-valuetext={`Speed ${fc(vNow, 1)} units per second`}
            onKeyDown={onVelKeyDown}
            onPointerDown={onHandleDown('vel')}
            onPointerMove={onHandleMove}
            onPointerUp={onHandleUp}
            onPointerCancel={onHandleUp}
            className="group cursor-grab outline-none active:cursor-grabbing"
          >
            <circle r={20} className="fill-transparent" />
            <circle
              r={13}
              strokeWidth={2}
              className="fill-transparent stroke-emerald-400 opacity-0 transition-opacity group-focus-visible:opacity-80"
            />
            <circle r={9} className="fill-emerald-400/25 stroke-emerald-400" strokeWidth={1.5} />
            <circle r={4} className="fill-emerald-300" />
            <text x={12} y={-12} fontSize={13} className="fill-emerald-300 font-mono font-bold">
              v
            </text>
          </g>

          {/* draggable body A */}
          <g
            transform={`translate(${px(bodyA.x)},${py(bodyA.y)})`}
            tabIndex={0}
            role="slider"
            aria-label="Body position handle. Use arrow keys to move the body and reshape the orbit. Hold Shift for bigger steps."
            aria-valuemin={-320}
            aria-valuemax={320}
            aria-valuenow={Math.round(bodyA.x)}
            aria-valuetext={`Position ${fc(bodyA.x, 0)} comma ${fc(bodyA.y, 0)}`}
            onKeyDown={onPosKeyDown}
            onPointerDown={onHandleDown('pos')}
            onPointerMove={onHandleMove}
            onPointerUp={onHandleUp}
            onPointerCancel={onHandleUp}
            className="group cursor-grab outline-none active:cursor-grabbing"
          >
            <circle r={24} className="fill-transparent" />
            <circle
              r={16}
              strokeWidth={2}
              className="fill-transparent stroke-amber-400 opacity-0 transition-opacity group-focus-visible:opacity-80"
            />
            {view.mode === 'binary' ? (
              <g>
                <circle r={15} className="fill-amber-400/15" />
                <circle r={9} className="fill-amber-400" />
                <circle r={3.5} className="fill-amber-200" />
              </g>
            ) : (
              <g>
                <circle r={11} className="fill-emerald-400/25 stroke-emerald-400" strokeWidth={1.5} />
                <circle r={5} className="fill-emerald-300" />
              </g>
            )}
          </g>

          {/* out-of-view notice */}
          {snap?.out && (
            <g>
              <rect x={W - 232} y={14} width={218} height={26} rx={8} className="fill-rose-500/15 stroke-rose-500/50" />
              <text x={W - 123} y={31} textAnchor="middle" fontSize={12} className="fill-rose-300 font-medium">
                body beyond view — pick a preset
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* stats */}
      <motion.div
        key={`ostats-${presetTick}`}
        initial={reduce ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.3 }}
        className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4"
      >
        {stat('a', 'a (semi-major)', snap && Number.isFinite(snap.a) ? fc(snap.a, 0) : '∞', 'from vis-viva: a = −GM/2E', 'emerald')}
        {stat('e', 'e (eccentricity)', snap ? fc(snap.e, 3) : '—', 'shape of the conic', 'amber')}
        {stat(
          'T',
          'T (measured)',
          snap?.tmeas ? `${fc(snap.tmeas, 1)} s` : snap ? `${fc(snap.tpred, 0)} s*` : '—',
          snap?.tmeas ? 'between +x axis crossings' : 'predicted — finishing first orbit',
          'teal'
        )}
        {stat('E', 'E total', snap ? fc(snap.energy, 1) : '—', 'negative means bound', snap && snap.energy < 0 ? 'emerald' : 'rose')}
      </motion.div>

      {/* chips */}
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2">
          <TeX
            tex={`T^{2}/a^{3}=${snap && snap.tmeas ? fe((snap.tmeas * snap.tmeas) / (snap.a ** 3), 2) : '\\cdots'}`}
          />
          <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
            measured vs <TeX tex={`4\\pi^{2}/GM=${fe((4 * Math.PI * Math.PI) / m, 2)}`} /> — Kepler 3
          </p>
        </div>
        <div className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-3 py-2">
          <TeX tex={`L=m\\,v\\,r\\sin\\theta=${snap ? fc(snap.L, 0) : '—'}`} />
          <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
            conserved to {snap ? (snap.ldrift * 100).toFixed(2) : '0.00'}% — the parallelogram area
            never changes
          </p>
        </div>
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2">
          <TeX
            tex={`|v|=${snap ? fc(snap.v, 1) : '—'}\\;\\;v_{\\rm esc}=${snap ? fc(snap.vesc, 1) : '—'}`}
          />
          <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
            drag the arrow past the dashed marker to unbind
          </p>
        </div>
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
          <TeX tex={`KE=\\tfrac12 v^{2}=${snap ? fc(snap.ke, 1) : '—'}`} />
          <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">per unit mass</p>
        </div>
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-3 py-2">
          <TeX tex={`PE=-\\frac{GM}{r}=${snap ? fc(snap.pe, 1) : '—'}`} />
          <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">per unit mass</p>
        </div>
        <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2">
          <TeX tex={`\\Delta A \\approx ${snap ? fc(snap.areaMean, 0) : '—'}`} />
          <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
            each amber triangle spans T/10 — spread{' '}
            {snap ? (snap.areaSpread * 100).toFixed(1) : '0.0'}% (Kepler 2)
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" aria-hidden="true" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          pause, drag the planet close to the star and watch the ellipse stretch into a comet — the
          amber triangles near perihelion grow long and thin but keep the{' '}
          <span className="font-medium text-foreground">same area</span>, because L is frozen. Now
          drag the emerald arrow past the dashed <TeX tex="v_{\rm esc}" /> marker: E flips positive,
          the badge turns rose, and Kepler 3&apos;s chip loses its number — there is no period for a
          hyperbola. Then try <span className="font-medium text-foreground">Binary star dance</span>{' '}
          and drag either star.
        </span>
      </div>
    </div>
  )
}
