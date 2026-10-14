'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Crosshair,
  Lightbulb,
  Moon,
  Pause,
  Play,
  RotateCcw,
  Rocket,
  Target,
  Wind,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Geometry                                                           */
/* ------------------------------------------------------------------ */

const W = 640
const H = 430
const PL = 48
const PR = 16
const PT = 18
const PB = 42
const PW = W - PL - PR
const PH = H - PT - PB

const G_EARTH = 9.81
const G_MOON = 1.62
const MASS = 1 // kg, fixed so energy readouts stay clean

interface Pt {
  t: number
  x: number
  y: number
  vx: number
  vy: number
}

/* ------------------------------------------------------------------ */
/*  Physics                                                           */
/* ------------------------------------------------------------------ */

/** Analytic vacuum trajectory, sampled in equal time steps. */
function vacSamples(v0: number, th: number, g: number): Pt[] {
  const vx = v0 * Math.cos(th)
  const vy = v0 * Math.sin(th)
  const T = vy > 0 ? (2 * vy) / g : 0
  const pts: Pt[] = []
  const n = 220
  for (let i = 0; i <= n; i++) {
    const t = (T * i) / n
    pts.push({ t, x: vx * t, y: vy * t - 0.5 * g * t * t, vx, vy: vy - g * t })
  }
  return pts
}

/** RK4 with quadratic drag  a = -g ŷ - c|v| v   (mass = 1 kg). */
function solveDrag(v0: number, th: number, g: number, c: number): { pts: Pt[]; T: number } {
  const dt = 0.01
  let x = 0
  let y = 0
  let vx = v0 * Math.cos(th)
  let vy = v0 * Math.sin(th)
  let t = 0
  const pts: Pt[] = [{ t: 0, x: 0, y: 0, vx, vy }]
  const ax = (px: number, py: number, qx: number, qy: number): number =>
    -c * Math.hypot(qx, qy) * qx
  const ay = (px: number, py: number, qx: number, qy: number): number =>
    -g - c * Math.hypot(qx, qy) * qy

  for (let i = 0; i < 42000; i++) {
    const k1x = vx
    const k1y = vy
    const a1x = ax(x, y, vx, vy)
    const a1y = ay(x, y, vx, vy)

    const v2x = vx + (a1x * dt) / 2
    const v2y = vy + (a1y * dt) / 2
    const k2x = v2x
    const k2y = v2y
    const a2x = ax(x + (k1x * dt) / 2, y + (k1y * dt) / 2, v2x, v2y)
    const a2y = ay(x + (k1x * dt) / 2, y + (k1y * dt) / 2, v2x, v2y)

    const v3x = vx + (a2x * dt) / 2
    const v3y = vy + (a2y * dt) / 2
    const k3x = v3x
    const k3y = v3y
    const a3x = ax(x + (k2x * dt) / 2, y + (k2y * dt) / 2, v3x, v3y)
    const a3y = ay(x + (k2x * dt) / 2, y + (k2y * dt) / 2, v3x, v3y)

    const v4x = vx + a3x * dt
    const v4y = vy + a3y * dt
    const k4x = v4x
    const k4y = v4y
    const a4x = ax(x + k3x * dt, y + k3y * dt, v4x, v4y)
    const a4y = ay(x + k3x * dt, y + k3y * dt, v4x, v4y)

    const px = x
    const py = y
    x += ((k1x + 2 * k2x + 2 * k3x + k4x) * dt) / 6
    y += ((k1y + 2 * k2y + 2 * k3y + k4y) * dt) / 6
    vx += ((a1x + 2 * a2x + 2 * a3x + a4x) * dt) / 6
    vy += ((a1y + 2 * a2y + 2 * a3y + a4y) * dt) / 6
    t += dt

    if (y < 0 && py >= 0) {
      // interpolate the landing point back to y = 0
      const f = py / (py - y)
      const lx = px + (x - px) * f
      const lvx = vx
      const lvy = vy
      const lt = t - dt + dt * f
      pts.push({ t: lt, x: lx, y: 0, vx: lvx, vy: lvy })
      return { pts, T: lt }
    }
    if (i % 2 === 0) pts.push({ t, x, y, vx, vy })
    if (!Number.isFinite(x) || !Number.isFinite(y)) break
  }
  return { pts, T: t }
}

/** The two launch angles that pass through (tx, ty); null when outside the envelope. */
function twoHitAngles(
  v0: number,
  g: number,
  tx: number,
  ty: number
): { low: number; high: number } | null {
  if (tx < 0.5) return null
  const disc = v0 ** 4 - g * (g * tx * tx + 2 * ty * v0 * v0)
  if (disc < 0) return null
  const q = Math.sqrt(disc)
  const low = (Math.atan((v0 * v0 - q) / (g * tx)) * 180) / Math.PI
  const high = (Math.atan((v0 * v0 + q) / (g * tx)) * 180) / Math.PI
  if (!Number.isFinite(low) || !Number.isFinite(high)) return null
  return { low, high }
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v))
}

function fc(v: number, d = 1): string {
  return String(Number(v.toFixed(d)))
}

/* ------------------------------------------------------------------ */
/*  Presets                                                            */
/* ------------------------------------------------------------------ */

interface Preset {
  key: string
  label: string
  aria: string
  theta: number
  v0: number
  gKey: 'earth' | 'moon'
  dragOn: boolean
  c: number
}

const PRESETS: Preset[] = [
  {
    key: 'max45',
    label: '45° max range',
    aria: 'Preset: forty-five degree maximum range',
    theta: 45,
    v0: 25,
    gKey: 'earth',
    dragOn: false,
    c: 0.01,
  },
  {
    key: 'comp',
    label: 'Complementary pair',
    aria: 'Preset: complementary angles share the range',
    theta: 30,
    v0: 25,
    gKey: 'earth',
    dragOn: false,
    c: 0.01,
  },
  {
    key: 'drag',
    label: 'With drag',
    aria: 'Preset: air drag switched on',
    theta: 45,
    v0: 40,
    gKey: 'earth',
    dragOn: true,
    c: 0.015,
  },
  {
    key: 'moon',
    label: 'Moon gravity',
    aria: 'Preset: moon gravity',
    theta: 45,
    v0: 15,
    gKey: 'moon',
    dragOn: false,
    c: 0.01,
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ProjectileLab() {
  const reduce = useReducedMotion()
  const [presetKey, setPresetKey] = useState('max45')
  const [theta, setTheta] = useState(45)
  const [v0, setV0] = useState(25)
  const [gKey, setGKey] = useState<'earth' | 'moon'>('earth')
  const [dragOn, setDragOn] = useState(false)
  const [cDrag, setCDrag] = useState(0.01)
  const [targetOn, setTargetOn] = useState(false)
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null)
  const [frac, setFrac] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [presetTick, setPresetTick] = useState(0)

  const rafRef = useRef<number | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const dragging = useRef(false)

  const g = gKey === 'earth' ? G_EARTH : G_MOON
  const th = (theta * Math.PI) / 180
  const cosT = Math.cos(th)
  const sinT = Math.sin(th)
  const vx0 = v0 * cosT
  const vy0 = v0 * sinT

  const stopAnim = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    setPlaying(false)
  }

  useEffect(() => () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
  }, [])

  /* ---------------- derived physics ---------------- */

  const vac = useMemo(() => vacSamples(v0, th, g), [v0, th, g])
  const vacT = 2 * vy0 / g
  const vacR = vx0 * vacT
  const vacH = (vy0 * vy0) / (2 * g)

  const dragSol = useMemo(
    () => (dragOn ? solveDrag(v0, th, g, Math.max(cDrag, 0)) : null),
    [dragOn, v0, th, g, cDrag]
  )

  const active: Pt[] = dragOn && dragSol ? dragSol.pts : vac
  const activeT = dragOn && dragSol ? dragSol.T : vacT
  const dragRange = dragOn && dragSol ? dragSol.pts[dragSol.pts.length - 1].x : 0
  const dragMaxY = dragOn && dragSol ? Math.max(...dragSol.pts.map((p) => p.y)) : 0

  const E0 = 0.5 * MASS * v0 * v0

  /* marker state at time frac * activeT */
  const marker: Pt | null = useMemo(() => {
    if (active.length === 0 || activeT <= 0) return null
    const t = frac * activeT
    const pts = active
    let lo = 0
    let hi = pts.length - 1
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1
      if (pts[mid].t <= t) lo = mid
      else hi = mid
    }
    const a = pts[lo]
    const b = pts[hi]
    if (b.t <= a.t) return a
    const f = (t - a.t) / (b.t - a.t)
    return {
      t,
      x: a.x + (b.x - a.x) * f,
      y: a.y + (b.y - a.y) * f,
      vx: a.vx + (b.vx - a.vx) * f,
      vy: a.vy + (b.vy - a.vy) * f,
    }
  }, [active, activeT, frac])

  const ke = marker ? 0.5 * MASS * (marker.vx ** 2 + marker.vy ** 2) : 0
  const pe = marker ? MASS * g * marker.y : 0
  const lost = marker ? Math.max(0, E0 - ke - pe) : 0

  /* ---------------- target mode ---------------- */

  const newTarget = () => {
    const rMax = (v0 * v0) / g
    const hMax = (v0 * v0) / (2 * g)
    const nx = rMax * (0.35 + 0.5 * Math.random())
    const ny = hMax * (0.15 + 0.45 * Math.random())
    setTarget({ x: Math.max(1.5, nx), y: Math.max(0.6, ny) })
  }

  const toggleTarget = () => {
    if (!targetOn) {
      setTargetOn(true)
      if (!target) newTarget()
    } else {
      setTargetOn(false)
    }
  }

  const hit = useMemo(() => {
    if (!targetOn || !target) return false
    const rMax = (v0 * v0) / g
    const tol = Math.max(0.4, 0.022 * rMax)
    for (const p of active) {
      if (Math.hypot(p.x - target.x, p.y - target.y) <= tol) return true
    }
    return false
  }, [targetOn, target, active, v0, g])

  const hits = useMemo(
    () => (targetOn && target ? twoHitAngles(v0, g, target.x, target.y) : null),
    [targetOn, target, v0, g]
  )

  /* ---------------- viewport ---------------- */

  const rMaxNow = (v0 * v0) / g
  const xmax =
    Math.max(vacR, dragRange * 1.04, targetOn && target ? target.x * 1.18 : 0, 8) * 1.03
  const ymax = Math.max(vacH * 1.12, dragMaxY * 1.12, targetOn && target ? target.y * 1.5 : 0, 3)
  const s = Math.min(PW / xmax, PH / ymax)

  const xPx = (x: number): number => PL + x * s
  const yPx = (y: number): number => PT + PH - y * s

  const gridStep = (() => {
    const steps = [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]
    for (const st of steps) if (xmax / st <= 8) return st
    return 500
  })()

  const xTicks: number[] = []
  for (let t = gridStep; t <= xmax / s + 1e-9; t += gridStep) xTicks.push(t)
  const yTicks: number[] = []
  for (let t = gridStep; t <= ymax + 1e-9; t += gridStep) yTicks.push(t)

  const pathOf = (pts: Pt[]): string =>
    pts
      .filter((p) => p.x * s <= PW + 40)
      .map((p, i) => `${i === 0 ? 'M' : 'L'}${xPx(p.x).toFixed(2)},${yPx(p.y).toFixed(2)}`)
      .join('')

  const vacPath = useMemo(() => pathOf(vac), [vac, s])
  const dragPath = useMemo(
    () => (dragSol ? pathOf(dragSol.pts) : ''),
    [dragSol, s]
  )

  const envPath = useMemo(() => {
    const rMax = (v0 * v0) / g
    const n = 64
    let d = ''
    for (let i = 0; i <= n; i++) {
      const x = (rMax * i) / n
      const y = (v0 * v0) / (2 * g) - (g * x * x) / (2 * v0 * v0)
      d += `${i === 0 ? 'M' : 'L'}${xPx(x).toFixed(2)},${yPx(y).toFixed(2)}`
    }
    return d
  }, [v0, g, s])

  /* ---------------- angle dial ---------------- */

  const ox = PL
  const oy = PT + PH
  const dialR = 56
  const hx = ox + dialR * cosT
  const hy = oy - dialR * sinT
  const arcPts = (() => {
    const n = Math.max(2, Math.round(theta / 2))
    const pts: string[] = []
    for (let i = 0; i <= n; i++) {
      const a = (theta * i) / n
      const rad = (a * Math.PI) / 180
      pts.push(`${(ox + 44 * Math.cos(rad)).toFixed(2)},${(oy - 44 * Math.sin(rad)).toFixed(2)}`)
    }
    return 'M' + pts.join('L')
  })()

  const clientToAngle = (clientX: number, clientY: number): number | null => {
    const svg = svgRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    if (rect.width === 0) return null
    const mx = ((clientX - rect.left) / rect.width) * W
    const my = ((clientY - rect.top) / rect.height) * H
    const deg = (Math.atan2(oy - my, mx - ox) * 180) / Math.PI
    return clamp(deg, 0, 90)
  }

  const moveAngle = (clientX: number, clientY: number) => {
    const deg = clientToAngle(clientX, clientY)
    if (deg !== null) setTheta(Math.round(deg))
  }

  const onDialPointerDown = (e: React.PointerEvent<SVGGElement>) => {
    e.preventDefault()
    dragging.current = true
    stopAnim()
    e.currentTarget.setPointerCapture(e.pointerId)
    moveAngle(e.clientX, e.clientY)
  }
  const onDialPointerMove = (e: React.PointerEvent<SVGGElement>) => {
    if (dragging.current) moveAngle(e.clientX, e.clientY)
  }
  const onDialPointerUp = () => {
    dragging.current = false
  }

  const onDialKeyDown = (e: React.KeyboardEvent) => {
    const stepSize = e.shiftKey ? 5 : 1
    let next: number | null = null
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = theta - stepSize
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = theta + stepSize
    if (next === null) return
    e.preventDefault()
    setTheta(Math.round(clamp(next, 0, 90)))
  }

  /* ---------------- flight animation ---------------- */

  const animateFlight = () => {
    stopAnim()
    if (activeT <= 0) return
    if (reduce) {
      setFrac(1)
      return
    }
    setPlaying(true)
    const from = frac >= 0.999 ? 0 : frac
    const t0 = performance.now()
    const dur = clamp(activeT * 0.5, 2.2, 6) * 1000
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / dur)
      const e = 1 - (1 - t) ** 2
      setFrac(from + (1 - from) * e)
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        rafRef.current = null
        setPlaying(false)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  const applyPreset = (p: Preset) => {
    stopAnim()
    setPresetKey(p.key)
    setTheta(p.theta)
    setV0(p.v0)
    setGKey(p.gKey)
    setDragOn(p.dragOn)
    setCDrag(p.c)
    setFrac(0)
    setPresetTick((n) => n + 1)
  }

  /* ---------------- arrow geometry ---------------- */

  const as = 95 / Math.max(v0, 1) // px per (m/s)
  const mk = marker
  const arrow = (m: Pt, dx: number, dy: number) => ({ x2: xPx(m.x) + dx * as, y2: yPx(m.y) - dy * as })

  /* ---------------- render helpers ---------------- */

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

  const barRow = (
    key: string,
    label: string,
    value: number,
    tone: 'emerald' | 'amber' | 'rose',
    tex: string
  ) => (
    <div key={key} className="mt-2 first:mt-0">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-[11px] text-muted-foreground">
          <TeX tex={tex} />
        </span>
        <span
          className={`font-mono text-xs tabular-nums ${
            tone === 'emerald' ? 'text-emerald-300' : tone === 'amber' ? 'text-amber-300' : 'text-rose-300'
          }`}
        >
          {fc(value)} J
        </span>
      </div>
      <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-muted/60">
        <div
          className={`h-full rounded-full ${
            tone === 'emerald' ? 'bg-emerald-500' : tone === 'amber' ? 'bg-amber-500' : 'bg-rose-500'
          }`}
          style={{ width: `${clamp((value / E0) * 100, 0, 100)}%` }}
        />
      </div>
    </div>
  )

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Rocket className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Projectile Playground</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Feynman ch 3–4: drag the launch angle and speed, watch the analytic parabola fly — then
            switch on air drag and see the RK4 trajectory fall short of the ideal.
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
            onClick={() => applyPreset(p)}
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
      <div className="mt-3 grid grid-cols-1 gap-3 rounded-xl border border-border bg-background/50 p-3 sm:grid-cols-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="w-14 shrink-0 text-xs font-medium text-muted-foreground">
            Speed <TeX tex="v_0" />
          </span>
          <Slider
            min={5}
            max={60}
            step={0.5}
            value={[v0]}
            onValueChange={(v) => setV0(v[0] ?? 25)}
            className="min-w-[130px] flex-1"
            aria-label="Initial launch speed in meters per second"
          />
          <span className="w-20 shrink-0 font-mono text-xs tabular-nums text-foreground">
            {fc(v0)} m/s
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="w-14 shrink-0 text-xs font-medium text-muted-foreground">Angle θ</span>
          <Slider
            min={0}
            max={90}
            step={1}
            value={[theta]}
            onValueChange={(v) => setTheta(v[0] ?? 45)}
            className="min-w-[130px] flex-1"
            aria-label="Launch angle in degrees"
          />
          <span className="w-20 shrink-0 font-mono text-xs tabular-nums text-foreground">
            {theta}°
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="w-14 shrink-0 text-xs font-medium text-muted-foreground">Gravity</span>
          <button
            type="button"
            onClick={() => setGKey('earth')}
            aria-pressed={gKey === 'earth'}
            aria-label="Earth gravity, 9.81 meters per second squared"
            className={`rounded-lg border px-2.5 py-1 font-mono text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
              gKey === 'earth'
                ? 'border-emerald-500/60 bg-emerald-500/15 text-foreground ring-1 ring-emerald-500/40'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
            }`}
          >
            g = 9.81
          </button>
          <button
            type="button"
            onClick={() => setGKey('moon')}
            aria-pressed={gKey === 'moon'}
            aria-label="Moon gravity, 1.62 meters per second squared"
            className={`flex items-center gap-1 rounded-lg border px-2.5 py-1 font-mono text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
              gKey === 'moon'
                ? 'border-emerald-500/60 bg-emerald-500/15 text-foreground ring-1 ring-emerald-500/40'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
            }`}
          >
            <Moon className="h-3 w-3" aria-hidden="true" /> g = 1.62
          </button>
          <span className="text-[10px] text-muted-foreground">m/s²</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <Button
            size="sm"
            variant={dragOn ? 'default' : 'outline'}
            aria-pressed={dragOn}
            onClick={() => setDragOn((v) => !v)}
            className="h-8"
          >
            <Wind className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
            Air drag {dragOn ? 'on' : 'off'}
          </Button>
          {dragOn && (
            <>
              <Slider
                min={0}
                max={0.03}
                step={0.0005}
                value={[cDrag]}
                onValueChange={(v) => setCDrag(v[0] ?? 0.01)}
                className="min-w-[110px] max-w-[180px] flex-1"
                aria-label="Quadratic drag coefficient c"
              />
              <span className="w-16 shrink-0 font-mono text-xs tabular-nums text-rose-300">
                c = {cDrag.toFixed(4)}
              </span>
            </>
          )}
        </div>
      </div>

      {/* plot + energy panel */}
      <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-0.5 w-4 rounded bg-emerald-400" /> vacuum (analytic)
            </span>
            {dragOn && (
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="h-0.5 w-4 rounded border-t-2 border-dashed border-rose-400" />{' '}
                with drag (RK4)
              </span>
            )}
            {targetOn && (
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="h-0.5 w-4 rounded border-t-2 border-dashed border-amber-400" />{' '}
                envelope of all angles
              </span>
            )}
            <Button
              size="sm"
              variant={targetOn ? 'default' : 'outline'}
              aria-pressed={targetOn}
              onClick={toggleTarget}
              className="ml-auto h-8"
            >
              <Target className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
              Target {targetOn ? 'on' : 'off'}
            </Button>
            {targetOn && (
              <Button
                size="sm"
                variant="ghost"
                aria-label="Move the target to a new random spot"
                onClick={newTarget}
                className="h-8"
              >
                <Crosshair className="h-4 w-4" aria-hidden="true" />
              </Button>
            )}
          </div>

          <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            className="w-full touch-none select-none"
            role="img"
            aria-label={`Projectile plot: launch angle ${theta} degrees, speed ${fc(v0)} meters per second, ${gKey === 'earth' ? 'earth' : 'moon'} gravity${dragOn ? ', air drag on' : ', vacuum'}. Use the controls below the plot.`}
          >
            <defs>
              <clipPath id="proj-plot-clip">
                <rect x={PL} y={PT} width={PW} height={PH} rx={6} />
              </clipPath>
              <marker
                id="proj-ah-em"
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
                id="proj-ah-te"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5.5"
                markerHeight="5.5"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" className="fill-teal-400" />
              </marker>
              <marker
                id="proj-ah-am"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5.5"
                markerHeight="5.5"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" className="fill-amber-400" />
              </marker>
            </defs>

            <rect x={PL} y={PT} width={PW} height={PH} rx={6} className="fill-zinc-950/40" />

            {/* grid */}
            {xTicks.map((gx) => (
              <g key={`gx-${gx}`}>
                <line
                  x1={xPx(gx)}
                  y1={PT}
                  x2={xPx(gx)}
                  y2={PT + PH}
                  className="stroke-zinc-500/15"
                  strokeWidth={1}
                />
                <text
                  x={xPx(gx)}
                  y={H - PB + 16}
                  textAnchor="middle"
                  fontSize={11}
                  className="fill-zinc-500 font-mono"
                >
                  {fc(gx, 0)}
                </text>
              </g>
            ))}
            {yTicks.map((gy) => (
              <g key={`gy-${gy}`}>
                <line
                  x1={PL}
                  y1={yPx(gy)}
                  x2={PL + PW}
                  y2={yPx(gy)}
                  className="stroke-zinc-500/15"
                  strokeWidth={1}
                />
                <text
                  x={PL - 7}
                  y={yPx(gy) + 4}
                  textAnchor="end"
                  fontSize={11}
                  className="fill-zinc-500 font-mono"
                >
                  {fc(gy, 0)}
                </text>
              </g>
            ))}

            {/* ground */}
            <line
              x1={PL}
              y1={oy}
              x2={PL + PW}
              y2={oy}
              className="stroke-zinc-500/60"
              strokeWidth={1.5}
            />
            <text
              x={PL + PW - 4}
              y={oy - 7}
              textAnchor="end"
              fontSize={12}
              className="fill-zinc-400 italic"
            >
              x (m)
            </text>
            <text x={PL + 8} y={PT + 14} fontSize={12} className="fill-zinc-400 italic">
              y (m)
            </text>

            <g clipPath="url(#proj-plot-clip)">
              {/* envelope of safety */}
              {targetOn && (
                <path
                  d={envPath}
                  className="stroke-amber-400/70"
                  strokeWidth={1.5}
                  strokeDasharray="6 5"
                  fill="none"
                />
              )}

              {/* drag trajectory */}
              {dragOn && dragPath && (
                <motion.path
                  key={`drag-${presetTick}`}
                  d={dragPath}
                  className="stroke-rose-400"
                  strokeWidth={2}
                  strokeDasharray="7 5"
                  fill="none"
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0, opacity: 0.4 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.7, ease: 'easeOut' }}
                />
              )}

              {/* vacuum parabola */}
              {vacPath && (
                <motion.path
                  key={`vac-${presetTick}`}
                  d={vacPath}
                  className="stroke-emerald-400"
                  strokeWidth={2.5}
                  fill="none"
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0, opacity: 0.4 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.7, ease: 'easeOut' }}
                />
              )}

              {/* target */}
              {targetOn && target && (
                <g>
                  <circle
                    cx={xPx(target.x)}
                    cy={yPx(target.y)}
                    r={hit ? 15 : 10}
                    className={hit ? 'fill-emerald-400/25 stroke-emerald-400' : 'fill-amber-400/15 stroke-amber-400'}
                    strokeWidth={2}
                    style={{ transition: 'r 150ms' }}
                  />
                  <circle
                    cx={xPx(target.x)}
                    cy={yPx(target.y)}
                    r={3}
                    className={hit ? 'fill-emerald-300' : 'fill-amber-300'}
                  />
                  <line
                    x1={xPx(target.x) - 14}
                    y1={yPx(target.y)}
                    x2={xPx(target.x) + 14}
                    y2={yPx(target.y)}
                    className="stroke-amber-400/70"
                    strokeWidth={1}
                  />
                  <line
                    x1={xPx(target.x)}
                    y1={yPx(target.y) - 14}
                    x2={xPx(target.x)}
                    y2={yPx(target.y) + 14}
                    className="stroke-amber-400/70"
                    strokeWidth={1}
                  />
                </g>
              )}

              {/* marker + velocity decomposition */}
              {mk && activeT > 0 && (
                <g>
                  <line
                    x1={xPx(mk.x)}
                    y1={yPx(mk.y)}
                    x2={arrow(mk, mk.vx, 0).x2}
                    y2={arrow(mk, mk.vx, 0).y2}
                    className="stroke-teal-400"
                    strokeWidth={2}
                    markerEnd="url(#proj-ah-te)"
                  />
                  <line
                    x1={xPx(mk.x)}
                    y1={yPx(mk.y)}
                    x2={arrow(mk, 0, mk.vy).x2}
                    y2={arrow(mk, 0, mk.vy).y2}
                    className="stroke-amber-400"
                    strokeWidth={2}
                    markerEnd="url(#proj-ah-am)"
                  />
                  <line
                    x1={xPx(mk.x)}
                    y1={yPx(mk.y)}
                    x2={arrow(mk, mk.vx, mk.vy).x2}
                    y2={arrow(mk, mk.vx, mk.vy).y2}
                    className="stroke-emerald-400"
                    strokeWidth={2.5}
                    markerEnd="url(#proj-ah-em)"
                  />
                  <line
                    x1={arrow(mk, mk.vx, 0).x2}
                    y1={arrow(mk, mk.vx, 0).y2}
                    x2={arrow(mk, mk.vx, mk.vy).x2}
                    y2={arrow(mk, mk.vx, mk.vy).y2}
                    className="stroke-zinc-400/50"
                    strokeWidth={1}
                    strokeDasharray="3 3"
                  />
                  <line
                    x1={arrow(mk, 0, mk.vy).x2}
                    y1={arrow(mk, 0, mk.vy).y2}
                    x2={arrow(mk, mk.vx, mk.vy).x2}
                    y2={arrow(mk, mk.vx, mk.vy).y2}
                    className="stroke-zinc-400/50"
                    strokeWidth={1}
                    strokeDasharray="3 3"
                  />
                  <circle
                    cx={xPx(mk.x)}
                    cy={yPx(mk.y)}
                    r={9}
                    className="fill-emerald-400/25 stroke-emerald-400"
                    strokeWidth={1.5}
                  />
                  <circle cx={xPx(mk.x)} cy={yPx(mk.y)} r={3.5} className="fill-emerald-300" />
                </g>
              )}
            </g>

            {/* launch pad + angle dial */}
            <rect
              x={ox - 8}
              y={oy - 4}
              width={16}
              height={4}
              rx={1}
              className="fill-zinc-500/70"
            />
            <path d={arcPts} className="stroke-amber-400/60" strokeWidth={1.5} fill="none" />
            {[0, 15, 30, 45, 60, 75, 90].map((a) => {
              const rad = (a * Math.PI) / 180
              return (
                <line
                  key={`tick-${a}`}
                  x1={ox + 50 * Math.cos(rad)}
                  y1={oy - 50 * Math.sin(rad)}
                  x2={ox + 56 * Math.cos(rad)}
                  y2={oy - 56 * Math.sin(rad)}
                  className="stroke-zinc-500/60"
                  strokeWidth={1}
                />
              )
            })}
            <text
              x={ox + 30 * Math.cos(th + 0.12)}
              y={oy - 30 * Math.sin(th + 0.12) - 4}
              fontSize={13}
              className="fill-emerald-300 font-mono font-bold"
            >
              <tspan fontStyle="italic">v</tspan>
              <tspan dy="3" fontSize="10">0</tspan>
            </text>
            <g
              transform={`translate(${hx},${hy})`}
              tabIndex={0}
              role="slider"
              aria-label="Launch angle dial. Use arrow keys to change the angle; hold Shift for bigger steps."
              aria-valuemin={0}
              aria-valuemax={90}
              aria-valuenow={theta}
              aria-valuetext={`Launch angle ${theta} degrees`}
              onKeyDown={onDialKeyDown}
              onPointerDown={onDialPointerDown}
              onPointerMove={onDialPointerMove}
              onPointerUp={onDialPointerUp}
              onPointerCancel={onDialPointerUp}
              className="group cursor-grab outline-none active:cursor-grabbing"
            >
              <circle r={20} className="fill-transparent" />
              <circle
                r={13}
                strokeWidth={2}
                className="fill-transparent stroke-amber-400 opacity-0 transition-opacity group-focus-visible:opacity-80"
              />
              <circle r={9} className="fill-amber-400/25 stroke-amber-400" strokeWidth={1.5} />
              <circle r={4.5} className="fill-amber-300" />
              <text
                x={14}
                y={-12}
                fontSize={13}
                className="fill-amber-300 font-mono font-bold"
              >
                {theta}°
              </text>
            </g>

            {/* two-hit angle ticks */}
            {targetOn && hits && (
              [hits.low, hits.high].map((a, i) => {
                const rad = (a * Math.PI) / 180
                return (
                  <circle
                    key={`sol-${i}`}
                    cx={ox + 64 * Math.cos(rad)}
                    cy={oy - 64 * Math.sin(rad)}
                    r={3}
                    className="fill-teal-300"
                  />
                )
              })
            )}
          </svg>

          {/* scrub controls */}
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
            <Button size="sm" variant="outline" onClick={animateFlight} className="h-8">
              {playing ? (
                <Pause className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Play className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
              )}
              {playing ? 'Pause' : 'Fly'}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              aria-label="Reset the flight marker to launch"
              onClick={() => {
                stopAnim()
                setFrac(0)
              }}
              className="h-8"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Slider
              min={0}
              max={1}
              step={0.002}
              value={[frac]}
              onValueChange={(v) => {
                stopAnim()
                setFrac(v[0] ?? 0)
              }}
              className="min-w-[140px] flex-1"
              aria-label="Scrub the flight marker along the trajectory"
            />
            <span className="w-20 shrink-0 font-mono text-xs tabular-nums text-foreground">
              t = {activeT > 0 ? fc(frac * activeT, 2) : '0.00'} s
            </span>
          </div>
        </div>

        {/* energy side panel */}
        <div className="rounded-xl border border-border bg-background/50 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Energy along the flight
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
            The marker on the plot carries the velocity decomposition:{' '}
            <span className="text-teal-300">v_x</span> constant,{' '}
            <span className="text-amber-300">v_y</span> eaten by gravity,{' '}
            <span className="text-emerald-300">v</span> their sum.
          </p>
          <div className="mt-3">
            {barRow('ke', 'Kinetic', ke, 'emerald', 'KE=\\tfrac{1}{2}mv^{2}')}
            {barRow('pe', 'Potential', pe, 'amber', 'PE=mgy')}
            {dragOn
              ? barRow('lost', 'Lost to drag', lost, 'rose', 'W_{\\rm drag}')
              : barRow('tot', 'Total (vacuum)', ke + pe, 'emerald', 'E=KE+PE')}
          </div>
          <div className="mt-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1.5 text-[11px] text-emerald-200">
            <TeX
              tex={`E_{0}=\\tfrac{1}{2}mv_0^{2}=${fc(E0)}\\ \\mathrm{J}`}
            />
          </div>
          <div className="mt-2 space-y-1 font-mono text-[11px] tabular-nums text-muted-foreground">
            <p>
              height y = <span className="text-foreground">{mk ? fc(mk.y, 2) : '0.00'}</span> m
            </p>
            <p>
              speed |v| ={' '}
              <span className="text-foreground">
                {mk ? fc(Math.hypot(mk.vx, mk.vy), 2) : fc(v0, 2)}
              </span>{' '}
              m/s
            </p>
            <p>
              v_x = <span className="text-teal-300">{mk ? fc(mk.vx, 2) : fc(vx0, 2)}</span> · v_y ={' '}
              <span className="text-amber-300">{mk ? fc(mk.vy, 2) : fc(vy0, 2)}</span>
            </p>
          </div>
          <div className="mt-3 rounded-lg border border-amber-500/30 bg-amber-500/5 px-2.5 py-1.5">
            <TeX tex="KE+PE=mgy+\\tfrac12 mv^{2}" />
            <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
              In vacuum the sum is pinned at E₀; with drag it leaks away as the rose bar grows.
            </p>
          </div>
        </div>
      </div>

      {/* TeX readouts with numbers */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200">
          <TeX
            tex={`R=\\frac{v_0^{2}\\sin 2\\theta}{g}=${fc(vacR)}\\ \\mathrm{m}`}
          />
        </span>
        <span className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs text-amber-200">
          <TeX
            tex={`H=\\frac{v_0^{2}\\sin^{2}\\theta}{2g}=${fc(vacH)}\\ \\mathrm{m}`}
          />
        </span>
        <span className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 text-xs text-teal-200">
          <TeX tex={`T=\\frac{2v_0\\sin\\theta}{g}=${fc(vacT, 2)}\\ \\mathrm{s}`} />
        </span>
        {dragOn && dragSol && (
          <span className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-2.5 py-1 text-xs text-rose-200">
            <TeX
              tex={`R_{\\rm drag}=${fc(dragRange)}\\ \\mathrm{m},\\;T_{\\rm drag}=${fc(dragSol.T, 2)}\\ \\mathrm{s}`}
            />
          </span>
        )}
        {!dragOn && !targetOn && theta > 0 && theta < 90 && (
          <span className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 text-xs text-teal-200">
            <TeX
              tex={`90^{\\circ}-\\theta=${fc(90 - theta, 0)}^{\\circ}\\Rightarrow R_{\\rm same}`}
            />
          </span>
        )}
      </div>

      {/* stats */}
      <motion.div
        key={`stats-${presetTick}`}
        initial={reduce ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.3 }}
        className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4"
      >
        {stat('v0', 'v₀', `${fc(v0)} m/s`, 'launch speed', 'emerald')}
        {stat('th', 'θ', `${theta}°`, 'launch angle (drag the dial)', 'amber')}
        {stat('g', 'g', gKey === 'earth' ? '9.81' : '1.62', `${gKey === 'earth' ? 'earth' : 'moon'} gravity, m/s²`, 'teal')}
        {stat(
          'rd',
          dragOn ? 'R (drag vs vac)' : 'E₀',
          dragOn ? `${fc(dragRange)} / ${fc(vacR)}` : `${fc(E0)} J`,
          dragOn ? 'RK4 falls short of the ideal' : 'launch kinetic energy',
          dragOn ? 'rose' : 'emerald'
        )}
      </motion.div>

      {/* target mode panel */}
      {targetOn && target && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.25 }}
          className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/5 p-3 sm:p-4"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Target className="h-4 w-4 text-amber-400" aria-hidden="true" />
            <p className="text-sm font-medium text-foreground">
              Target at ({fc(target.x)} m, {fc(target.y)} m)
            </p>
            {hit ? (
              <span className="rounded-lg border border-emerald-500/50 bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                Direct hit — trajectory passes within tolerance
              </span>
            ) : hits ? (
              <span className="rounded-lg border border-amber-500/50 bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
                Miss — adjust angle and speed
              </span>
            ) : (
              <span className="rounded-lg border border-rose-500/50 bg-rose-500/10 px-2.5 py-0.5 text-xs font-semibold text-rose-300">
                Outside the envelope — no angle can reach it at this speed
              </span>
            )}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-muted-foreground">Elegant solution:</span>
            {hits ? (
              [hits.low, hits.high].map((a, i) => (
                <button
                  key={`th-${i}`}
                  type="button"
                  onClick={() => setTheta(Math.round(a))}
                  aria-label={`Set launch angle to ${fc(a)} degrees, the ${i === 0 ? 'low' : 'high'} solution that hits the target`}
                  className="rounded-lg border border-teal-500/40 bg-teal-500/10 px-2.5 py-1 font-mono text-xs text-teal-200 transition-colors hover:bg-teal-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-500"
                >
                  θ = {fc(a)}°
                </button>
              ))
            ) : (
              <span className="text-[11px] text-rose-300">
                raise v₀ past {fc(Math.sqrt(g * (g * target.x ** 2 + 2 * target.y)), 1)} m/s or
                move the target
              </span>
            )}
            {hits && (
              <span className="text-[11px] leading-snug text-muted-foreground">
                two launch angles always hit the same point — they are complementary only when the
                target sits on the ground
              </span>
            )}
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
            The amber dashed curve is the envelope:{' '}
            <TeX tex="y=\frac{v_0^{2}}{2g}-\frac{g\,x^{2}}{2v_0^{2}}" /> — every vacuum trajectory
            at this speed lives below it.
            {dragOn && ' Air drag bends trajectories further inside the envelope.'}
          </p>
        </motion.div>
      )}

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" aria-hidden="true" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          load <span className="font-medium text-foreground">45° max range</span>, then nudge θ to
          30° and again to 60° — the range barely moves, because{' '}
          <TeX tex="\sin 2\theta" /> is the same for complementary angles. Switch on{' '}
          <span className="font-medium text-foreground">air drag</span> and the symmetry dies: the
          optimal angle drops below 45°. Then press{' '}
          <span className="font-medium text-foreground">Target</span>, solve it both ways, and scrub
          the flight to watch <span className="text-teal-300">v_x</span> hold steady while{' '}
          <span className="text-amber-300">v_y</span> hands its energy to gravity.
        </span>
      </div>
    </div>
  )
}
