'use client'

/**
 * Mechanics Sandbox (X5 Pro) — projectile · pendulum · inclined plane.
 * Real classical mechanics, computed live:
 *  - Projectile: RK4 integration (vacuum by default; optional quadratic drag
 *    a = −k|v|v and a constant horizontal "wind" push), trajectory trace and
 *    live velocity / gravity / wind vectors, target-practice missions.
 *  - Pendulum: full nonlinear ODE θ̈ = −(g/L)sinθ − cθ̇ integrated with RK4,
 *    side-by-side with the small-angle (linear) model, KE/PE energy bars and
 *    a live divergence readout.
 *  - Incline: block with static/kinetic friction (μs = μk = μ), free-body
 *    diagram vectors and the critical angle θc = arctan μ.
 * All mutable simulation state lives in refs; each panel runs one rAF loop
 * that is cancelled on unmount.
 */

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Check,
  Crosshair,
  Gauge,
  Pause,
  Play,
  RotateCcw,
  Rocket,
  Target,
} from 'lucide-react'
import { RING, clamp, fmt } from './types'
import { LabMissions, getMissions, useMissions } from './missions'

/* ------------------------------------------------------------------ */
/*  Canvas helpers                                                     */
/* ------------------------------------------------------------------ */

const EMERALD = '#34d399'
const AMBER = '#fbbf24'
const SKY = '#38bdf8'
const ROSE = '#fb7185'
const TEAL = '#2dd4bf'

function prepCanvas(canvas: HTMLCanvasElement): {
  ctx: CanvasRenderingContext2D
  w: number
  h: number
  ink: string
  grid: string
} | null {
  const rect = canvas.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = Math.max(rect.width, 10)
  const h = Math.max(rect.height, 10)
  const pw = Math.round(w * dpr)
  const ph = Math.round(h * dpr)
  if (canvas.width !== pw || canvas.height !== ph) {
    canvas.width = pw
    canvas.height = ph
  }
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  const cs = getComputedStyle(canvas)
  return {
    ctx,
    w,
    h,
    ink: cs.color || '#94a3b8',
    grid: cs.borderTopColor || 'rgba(128,128,128,0.3)',
  }
}

/** one shared rAF loop per panel: step(dt) then draw() */
function useRafLoop(step: (dt: number) => void, draw: () => void): void {
  const stepRef = useRef(step)
  const drawRef = useRef(draw)
  // refs are event/loop territory only — sync them after every render, never during
  useEffect(() => {
    stepRef.current = step
    drawRef.current = draw
  })
  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      stepRef.current(dt)
      drawRef.current()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])
}

function drawArrow(
  ctx: CanvasRenderingContext2D,
  x0: number,
  y0: number,
  dx: number,
  dy: number,
  color: string,
  label?: string,
): void {
  const len = Math.hypot(dx, dy)
  if (len < 2) return
  const x1 = x0 + dx
  const y1 = y0 + dy
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(x0, y0)
  ctx.lineTo(x1, y1)
  ctx.stroke()
  const ang = Math.atan2(dy, dx)
  const head = Math.min(7, len * 0.4)
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x1 - head * Math.cos(ang - 0.42), y1 - head * Math.sin(ang - 0.42))
  ctx.lineTo(x1 - head * Math.cos(ang + 0.42), y1 - head * Math.sin(ang + 0.42))
  ctx.closePath()
  ctx.fill()
  if (label) {
    ctx.font = 'bold 10px var(--font-mono), monospace'
    ctx.fillText(label, x1 + 4 * Math.sign(dx || 1), y1 + (dy >= 0 ? 10 : -4))
  }
}

/* ------------------------------------------------------------------ */
/*  RK4 primitives                                                     */
/* ------------------------------------------------------------------ */

interface PState {
  x: number
  y: number
  vx: number
  vy: number
}

function projectileAccel(s: PState, g: number, wind: number, k: number): { ax: number; ay: number } {
  const v = Math.hypot(s.vx, s.vy)
  return { ax: wind - k * v * s.vx, ay: -g - k * v * s.vy }
}

/** Classic RK4 on the state vector (x, y, vx, vy). */
function rk4Projectile(s: PState, h: number, g: number, wind: number, k: number): PState {
  const f = (st: PState): PState => {
    const { ax, ay } = projectileAccel(st, g, wind, k)
    return { x: st.vx, y: st.vy, vx: ax, vy: ay }
  }
  const k1 = f(s)
  const k2 = f({
    x: s.x + (h / 2) * k1.x,
    y: s.y + (h / 2) * k1.y,
    vx: s.vx + (h / 2) * k1.vx,
    vy: s.vy + (h / 2) * k1.vy,
  })
  const k3 = f({
    x: s.x + (h / 2) * k2.x,
    y: s.y + (h / 2) * k2.y,
    vx: s.vx + (h / 2) * k2.vx,
    vy: s.vy + (h / 2) * k2.vy,
  })
  const k4 = f({
    x: s.x + h * k3.x,
    y: s.y + h * k3.y,
    vx: s.vx + h * k3.vx,
    vy: s.vy + h * k3.vy,
  })
  return {
    x: s.x + (h / 6) * (k1.x + 2 * k2.x + 2 * k3.x + k4.x),
    y: s.y + (h / 6) * (k1.y + 2 * k2.y + 2 * k3.y + k4.y),
    vx: s.vx + (h / 6) * (k1.vx + 2 * k2.vx + 2 * k3.vx + k4.vx),
    vy: s.vy + (h / 6) * (k1.vy + 2 * k2.vy + 2 * k3.vy + k4.vy),
  }
}

interface PendState {
  th: number
  w: number
}

/** RK4 on (θ, ω). `linear` switches to the small-angle model θ̈ = −(g/L)θ. */
function rk4Pendulum(s: PendState, h: number, g: number, L: number, c: number, linear: boolean): PendState {
  const f = (st: PendState): PendState => ({
    th: st.w,
    w: -(g / L) * (linear ? st.th : Math.sin(st.th)) - c * st.w,
  })
  const k1 = f(s)
  const k2 = f({ th: s.th + (h / 2) * k1.th, w: s.w + (h / 2) * k1.w })
  const k3 = f({ th: s.th + (h / 2) * k2.th, w: s.w + (h / 2) * k2.w })
  const k4 = f({ th: s.th + h * k3.th, w: s.w + h * k3.w })
  return {
    th: s.th + (h / 6) * (k1.th + 2 * k2.th + 2 * k3.th + k4.th),
    w: s.w + (h / 6) * (k1.w + 2 * k2.w + 2 * k3.w + k4.w),
  }
}

/** Exact-ish period of the full pendulum via the classic series expansion. */
function exactPeriod(L: number, g: number, th0: number): number {
  const t0 = 2 * Math.PI * Math.sqrt(L / g)
  const a = Math.abs(th0)
  return t0 * (1 + a * a / 16 + (11 * a ** 4) / 3072 + (173 * a ** 6) / 737280)
}

/* ------------------------------------------------------------------ */
/*  Small shared UI                                                    */
/* ------------------------------------------------------------------ */

function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
  accent = 'accent-emerald-400',
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  unit?: string
  onChange: (v: number) => void
  accent?: string
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        <span>{label}</span>
        <span className="font-mono tabular-nums text-foreground/80">
          {fmt(value, 2)}
          {unit ? ` ${unit}` : ''}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={`${label}${unit ? ` in ${unit}` : ''}`}
        className={`mt-0.5 h-11 w-full ${accent}`}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Projectile panel                                                   */
/* ------------------------------------------------------------------ */

interface LandingStats {
  range: number
  apex: number
  time: number
  offTarget: number
  hit: boolean
  bullseye: boolean
}

function ProjectilePanel({ fire }: { fire: (id: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [v0, setV0] = useState(24)
  const [angleDeg, setAngleDeg] = useState(45)
  const [g, setG] = useState(9.81)
  const [wind, setWind] = useState(0)
  const [dragOn, setDragOn] = useState(false)
  const [dragK, setDragK] = useState(0.03)
  const [targetDist, setTargetDist] = useState(35)
  const [stats, setStats] = useState<LandingStats | null>(null)
  const [flying, setFlying] = useState(false)

  // mutable simulation state (never triggers re-render)
  const sim = useRef({
    flying: false,
    s: { x: 0, y: 0, vx: 0, vy: 0 } as PState,
    t: 0,
    apex: 0,
    trace: [] as { x: number; y: number }[],
    land: null as null | { x: number; t: number; apex: number },
    view: { w: 60, h: 30 },
    // mirrored controls so the rAF loop always sees the latest values
    p: { v0: 24, angle: 45, g: 9.81, wind: 0, dragOn: false, dragK: 0.03, target: 35 },
  })
  // mirror control state into the sim ref after every render (event/loop reads only)
  useEffect(() => {
    sim.current.p = { v0, angle: angleDeg, g, wind, dragOn, dragK, target: targetDist }
  })

  const launch = () => {
    const p = sim.current.p
    const th = (p.angle * Math.PI) / 180
    const s: PState = {
      x: 0,
      y: 0,
      vx: p.v0 * Math.cos(th),
      vy: p.v0 * Math.sin(th),
    }
    // freeze the world window for this flight (vacuum prediction sizes it)
    const range = (p.v0 * p.v0 * Math.sin(2 * th)) / p.g
    const apex = (p.v0 * p.v0 * Math.sin(th) ** 2) / (2 * p.g)
    sim.current.view = {
      w: clamp(1.3 * Math.max(range, p.target + 8), 20, 170),
      h: clamp(1.45 * Math.max(apex, 6), 10, 95),
    }
    sim.current.s = s
    sim.current.t = 0
    sim.current.apex = 0
    sim.current.trace = [{ x: 0, y: 0 }]
    sim.current.land = null
    sim.current.flying = true
    setStats(null)
    setFlying(true)
    fire('proj-launch')
  }

  const step = (dt: number) => {
    const S = sim.current
    if (!S.flying) return
    const p = S.p
    const h = 1 / 240
    let acc = dt
    let guard = 0
    while (acc > 0 && guard++ < 2400) {
      const hh = Math.min(h, acc)
      acc -= hh
      const prev = S.s
      const next = rk4Projectile(S.s, hh, p.g, p.wind, p.dragOn ? p.dragK : 0)
      S.t += hh
      S.apex = Math.max(S.apex, next.y)
      if (next.y <= 0 && next.vy < 0) {
        // interpolate the exact ground crossing between the last two states
        const f = prev.y / (prev.y - next.y)
        const landX = prev.x + f * (next.x - prev.x)
        const landT = S.t - hh + f * hh
        S.s = { ...next, x: landX, y: 0 }
        S.trace.push({ x: landX, y: 0 })
        S.land = { x: landX, t: landT, apex: S.apex }
        S.flying = false
        setFlying(false)
        const off = Math.abs(landX - p.target)
        const hit = off <= 2
        setStats({
          range: landX,
          apex: S.apex,
          time: landT,
          offTarget: off,
          hit,
          bullseye: off <= 0.5,
        })
        fire('proj-land')
        if (hit) fire('proj-hit')
        if (off <= 0.5) fire('proj-bullseye')
        return
      }
      S.s = next
      if (S.trace.length === 0 || Math.hypot(next.x - S.trace[S.trace.length - 1].x, next.y - S.trace[S.trace.length - 1].y) > 0.4) {
        S.trace.push({ x: next.x, y: next.y })
      }
    }
  }

  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const env = prepCanvas(canvas)
    if (!env) return
    const { ctx, w, h, ink, grid } = env
    const S = sim.current
    const p = S.p

    const ml = 40
    const mr = 14
    const mt = 14
    const mb = 30
    const worldW = S.flying || S.land ? S.view.w : clamp(1.3 * Math.max((p.v0 * p.v0 * Math.sin((2 * p.angle * Math.PI) / 180)) / p.g, p.target + 8), 20, 170)
    const worldH = S.flying || S.land ? S.view.h : clamp(1.45 * Math.max((p.v0 * p.v0 * Math.sin((p.angle * Math.PI) / 180) ** 2) / (2 * p.g), 6), 10, 95)
    const sx = (x: number) => ml + (x / worldW) * (w - ml - mr)
    const sy = (y: number) => h - mb - (y / worldH) * (h - mb - mt)

    // ground
    ctx.strokeStyle = grid
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(ml - 6, h - mb)
    ctx.lineTo(w - mr, h - mb)
    ctx.stroke()

    // distance ticks
    const tick = worldW > 90 ? 20 : worldW > 45 ? 10 : 5
    ctx.font = '10px var(--font-mono), monospace'
    ctx.fillStyle = ink
    ctx.globalAlpha = 0.7
    for (let d = tick; d <= worldW; d += tick) {
      ctx.strokeStyle = grid
      ctx.beginPath()
      ctx.moveTo(sx(d), h - mb)
      ctx.lineTo(sx(d), h - mb + 5)
      ctx.stroke()
      ctx.globalAlpha = 0.55
      ctx.fillText(`${d}`, sx(d) - 6, h - mb + 16)
      ctx.globalAlpha = 0.7
    }
    ctx.fillText('m', 4, h - mb + 16)
    ctx.globalAlpha = 1

    // target: ±2 m band + flag
    const tx = sx(p.target)
    ctx.fillStyle = 'rgba(52, 211, 153, 0.10)'
    ctx.fillRect(sx(p.target - 2), h - mb - 26, sx(p.target + 2) - sx(p.target - 2), 26)
    ctx.fillStyle = 'rgba(52, 211, 153, 0.25)'
    ctx.fillRect(sx(p.target - 0.5), h - mb - 26, sx(p.target + 0.5) - sx(p.target - 0.5), 26)
    ctx.strokeStyle = EMERALD
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(tx, h - mb)
    ctx.lineTo(tx, h - mb - 26)
    ctx.stroke()
    ctx.fillStyle = EMERALD
    ctx.beginPath()
    ctx.moveTo(tx, h - mb - 26)
    ctx.lineTo(tx + 13, h - mb - 21)
    ctx.lineTo(tx, h - mb - 16)
    ctx.closePath()
    ctx.fill()
    ctx.font = 'bold 9px var(--font-mono), monospace'
    ctx.fillStyle = EMERALD
    ctx.fillText(`${fmt(p.target, 1)}`, tx - 8, h - mb + 16)

    // vacuum preview (dashed) — only meaningful without drag/wind
    if (!S.flying && !S.land) {
      const th = (p.angle * Math.PI) / 180
      const T = (2 * p.v0 * Math.sin(th)) / p.g
      ctx.strokeStyle = ink
      ctx.globalAlpha = 0.35
      ctx.setLineDash([5, 4])
      ctx.lineWidth = 1.4
      ctx.beginPath()
      for (let i = 0; i <= 60; i++) {
        const t = (i / 60) * T
        const x = p.v0 * Math.cos(th) * t
        const y = p.v0 * Math.sin(th) * t - 0.5 * p.g * t * t
        if (x > worldW) break
        if (i === 0) ctx.moveTo(sx(x), sy(Math.max(y, 0)))
        else ctx.lineTo(sx(x), sy(Math.max(y, 0)))
      }
      ctx.stroke()
      ctx.setLineDash([])
      ctx.globalAlpha = 1
    }

    // trace
    if (S.trace.length > 1) {
      ctx.strokeStyle = EMERALD
      ctx.lineWidth = 2
      ctx.beginPath()
      S.trace.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(sx(pt.x), sy(pt.y))
        else ctx.lineTo(sx(pt.x), sy(pt.y))
      })
      ctx.stroke()
    }

    // ball + vectors
    const bx = sx(S.s.x)
    const by = sy(Math.max(S.s.y, 0))
    if (S.flying) {
      const vs = 1.1 // px per m/s
      drawArrow(ctx, bx, by, S.s.vx * vs, -S.s.vy * vs, SKY, `v ${fmt(Math.hypot(S.s.vx, S.s.vy), 1)} m/s`)
      drawArrow(ctx, bx, by, 0, 18 + p.g * 2.2, ROSE, `g ${fmt(p.g, 1)}`)
      if (Math.abs(p.wind) > 0.01) {
        drawArrow(ctx, bx, by - 26, p.wind * 7, 0, AMBER, `wind ${fmt(p.wind, 1)} m/s²`)
      }
    }
    ctx.fillStyle = S.flying ? EMERALD : S.land ? EMERALD : ink
    ctx.beginPath()
    ctx.arc(bx, by, 6, 0, Math.PI * 2)
    ctx.fill()

    // landing marker
    if (S.land) {
      ctx.fillStyle = EMERALD
      ctx.font = 'bold 10px var(--font-mono), monospace'
      ctx.fillText(`landed ${fmt(S.land.x, 1)} m`, clamp(bx - 46, ml, w - 110), h - mb - 34)
    }

    // live readout
    ctx.font = '11px var(--font-mono), monospace'
    ctx.fillStyle = ink
    ctx.globalAlpha = 0.9
    const v = Math.hypot(S.s.vx, S.s.vy)
    const lines = [
      `t = ${fmt(S.t, 2)} s`,
      `x = ${fmt(S.s.x, 1)} m   y = ${fmt(Math.max(S.s.y, 0), 1)} m`,
      `|v| = ${fmt(v, 1)} m/s`,
    ]
    lines.forEach((l, i) => ctx.fillText(l, ml, 16 + i * 14))
    ctx.globalAlpha = 1
  }

  useRafLoop(step, draw)

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="space-y-3">
        <canvas
          ref={canvasRef}
          style={{ height: 340 }}
          className="w-full rounded-xl border border-border/70 bg-background/40 text-foreground/70"
          role="img"
          aria-label="Projectile trajectory canvas with target flag and live vectors"
        />
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={launch}
            disabled={flying}
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2 text-sm font-bold text-emerald-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40 ${RING}`}
          >
            <Rocket className="h-4 w-4" aria-hidden="true" /> {flying ? 'In flight…' : 'Launch'}
          </button>
          <button
            onClick={() => setTargetDist(Math.round((15 + Math.random() * 40) * 2) / 2)}
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border/80 bg-background/60 px-4 py-2 text-sm font-semibold text-foreground/90 transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 ${RING}`}
          >
            <Crosshair className="h-4 w-4" aria-hidden="true" /> New target
          </button>
          <p className="text-[11px] leading-snug text-muted-foreground">
            Vacuum by default (no drag) — the dashed curve is the analytic parabola. Wind adds a
            constant horizontal push; drag applies a = −k|v|v via RK4.
          </p>
        </div>
        {stats && (
          <div
            className={`grid grid-cols-2 gap-2.5 rounded-xl border p-3 sm:grid-cols-4 ${
              stats.bullseye
                ? 'border-emerald-400/50 bg-emerald-400/[0.08]'
                : stats.hit
                  ? 'border-emerald-400/30 bg-emerald-400/[0.05]'
                  : 'border-border/70 bg-background/40'
            }`}
          >
            {[
              { l: 'Range', v: `${fmt(stats.range, 2)} m` },
              { l: 'Apex', v: `${fmt(stats.apex, 2)} m` },
              { l: 'Flight time', v: `${fmt(stats.time, 2)} s` },
              { l: 'Off target', v: `${fmt(stats.offTarget, 2)} m` },
            ].map((r) => (
              <div key={r.l}>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{r.l}</div>
                <div className="mt-0.5 font-mono text-sm font-bold tabular-nums text-emerald-300">{r.v}</div>
              </div>
            ))}
            {stats.bullseye ? (
              <p className="col-span-2 flex items-center gap-1.5 text-[12px] font-bold text-emerald-300 sm:col-span-4">
                <Check className="h-4 w-4" aria-hidden="true" /> Bullseye — within ±0.5 m of the flag.
              </p>
            ) : stats.hit ? (
              <p className="col-span-2 flex items-center gap-1.5 text-[12px] font-semibold text-emerald-300/90 sm:col-span-4">
                <Check className="h-4 w-4" aria-hidden="true" /> Target hit (±2 m). Shave it to ±0.5 m for the bullseye.
              </p>
            ) : (
              <p className="col-span-2 text-[12px] text-muted-foreground sm:col-span-4">
                Missed by {fmt(stats.offTarget, 1)} m — adjust v₀ or the angle and launch again.
              </p>
            )}
          </div>
        )}
      </div>

      <div className="space-y-3.5 rounded-2xl border border-border/80 bg-card p-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <Gauge className="h-4 w-4 text-emerald-300" aria-hidden="true" /> Launch parameters
        </div>
        <Slider label="Initial speed v₀" value={v0} min={5} max={60} step={0.5} unit="m/s" onChange={setV0} />
        <Slider label="Launch angle" value={angleDeg} min={5} max={85} step={1} unit="°" onChange={setAngleDeg} />
        <Slider label="Gravity g" value={g} min={1} max={25} step={0.01} unit="m/s²" onChange={setG} />
        <div className="flex flex-wrap gap-1.5">
          {[
            { l: 'Moon 1.62', v: 1.62 },
            { l: 'Earth 9.81', v: 9.81 },
            { l: 'Jupiter 24.79', v: 24.79 },
          ].map((b) => (
            <button
              key={b.l}
              onClick={() => setG(b.v)}
              className={`min-h-[44px] rounded-lg border px-2.5 text-[11px] font-semibold transition-all ${RING} ${
                Math.abs(g - b.v) < 0.005
                  ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-200'
                  : 'border-border/80 bg-background/60 text-muted-foreground hover:border-emerald-400/30 hover:text-foreground'
              }`}
            >
              {b.l}
            </button>
          ))}
        </div>
        <Slider label="Wind (constant ax)" value={wind} min={-8} max={8} step={0.1} unit="m/s²" onChange={setWind} accent="accent-amber-400" />
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDragOn((d) => !d)}
            aria-pressed={dragOn}
            className={`min-h-[44px] rounded-lg border px-3 text-[11px] font-bold uppercase tracking-wider transition-all ${RING} ${
              dragOn
                ? 'border-rose-400/50 bg-rose-400/15 text-rose-200'
                : 'border-border/80 bg-background/60 text-muted-foreground hover:text-foreground'
            }`}
          >
            drag {dragOn ? 'on' : 'off'}
          </button>
          <div className="min-w-0 flex-1">
            <Slider
              label="Drag k"
              value={dragK}
              min={0.005}
              max={0.2}
              step={0.005}
              unit="1/m"
              onChange={setDragK}
              accent="accent-rose-400"
            />
          </div>
        </div>
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          In vacuum, range R = v₀²·sin(2θ)/g — the maximum sits at 45°. Turn on drag or wind and the
          optimum angle drops below 45°.
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Pendulum panel                                                     */
/* ------------------------------------------------------------------ */

function PendulumPanel({ fire }: { fire: (id: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [length, setLength] = useState(1.5)
  const [th0Deg, setTh0Deg] = useState(30)
  const [damping, setDamping] = useState(0)
  const [compare, setCompare] = useState(true)
  const [running, setRunning] = useState(false)
  const [started, setStarted] = useState(false)
  const [readout, setReadout] = useState<{ errPct: number } | null>(null)

  const sim = useRef({
    th: (30 * Math.PI) / 180,
    w: 0,
    thL: (30 * Math.PI) / 180,
    wL: 0,
    t: 0,
    running: false,
    e0: 0,
    lastRead: 0,
    trail: [] as { x: number; y: number }[],
    p: { L: 1.5, th0: 30, c: 0, compare: true },
  })
  // mirror control state into the sim ref after every render (event/loop reads only)
  useEffect(() => {
    sim.current.p = { L: length, th0: th0Deg, c: damping, compare }
  })

  const resetSim = (run: boolean) => {
    const S = sim.current
    const th0 = (S.p.th0 * Math.PI) / 180
    S.th = th0
    S.w = 0
    S.thL = th0
    S.wL = 0
    S.t = 0
    S.e0 = 9.81 * S.p.L * (1 - Math.cos(th0))
    S.trail = []
    S.lastRead = 0
    S.running = run
    setRunning(run)
    setStarted(run)
    setReadout(null)
    if (run && Math.abs(th0) >= (60 * Math.PI) / 180) fire('pend-large')
  }

  const step = (dt: number) => {
    const S = sim.current
    if (!S.running) return
    const p = S.p
    const g = 9.81
    const h = 1 / 240
    let acc = dt
    let guard = 0
    while (acc > 0 && guard++ < 2400) {
      const hh = Math.min(h, acc)
      acc -= hh
      const next = rk4Pendulum({ th: S.th, w: S.w }, hh, g, p.L, p.c, false)
      S.th = next.th
      S.w = next.w
      if (p.compare) {
        const nl = rk4Pendulum({ th: S.thL, w: S.wL }, hh, g, p.L, p.c, true)
        S.thL = nl.th
        S.wL = nl.w
      }
      S.t += hh
    }
    const denom = Math.max(Math.abs((p.th0 * Math.PI) / 180), 0.05)
    const errPct = (Math.abs(S.th - S.thL) / denom) * 100
    // sampled readout for the DOM (about 8×/s — not per frame)
    if (S.t - S.lastRead > 0.12) {
      S.lastRead = S.t
      setReadout({ errPct })
    }
    if (p.compare && errPct > 5) fire('pend-diverge')
  }

  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const env = prepCanvas(canvas)
    if (!env) return
    const { ctx, w, h, ink, grid } = env
    const S = sim.current
    const g = 9.81
    const p = S.p

    const cx = w * 0.42
    const py = 34
    const pxL = Math.min(h - 120, 260) * (p.L / 3) + 40

    // ceiling mount
    ctx.strokeStyle = grid
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(cx - 22, py - 12)
    ctx.lineTo(cx + 22, py - 12)
    ctx.stroke()

    // swing guide arc
    ctx.strokeStyle = grid
    ctx.globalAlpha = 0.5
    ctx.setLineDash([4, 4])
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(cx, py, pxL, Math.PI / 2 - (170 * Math.PI) / 180, Math.PI / 2 + (170 * Math.PI) / 180)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.globalAlpha = 1

    const posOf = (th: number) => ({ x: cx + Math.sin(th) * pxL, y: py + Math.cos(th) * pxL })

    // trail
    if (S.trail.length > 0) {
      ctx.fillStyle = EMERALD
      S.trail.forEach((pt, i) => {
        ctx.globalAlpha = (i / S.trail.length) * 0.35
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalAlpha = 1
    }

    // ghost (small-angle) bob
    if (p.compare) {
      const gp = posOf(S.thL)
      ctx.strokeStyle = AMBER
      ctx.setLineDash([4, 3])
      ctx.lineWidth = 1.6
      ctx.beginPath()
      ctx.moveTo(cx, py)
      ctx.lineTo(gp.x, gp.y)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.beginPath()
      ctx.arc(gp.x, gp.y, 7, 0, Math.PI * 2)
      ctx.stroke()
      ctx.font = 'bold 9px var(--font-mono), monospace'
      ctx.fillStyle = AMBER
      ctx.fillText('sin θ ≈ θ', gp.x + 10, gp.y - 8)
    }

    // rod + bob (full model)
    const bp = posOf(S.th)
    ctx.strokeStyle = ink
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(cx, py)
    ctx.lineTo(bp.x, bp.y)
    ctx.stroke()
    ctx.fillStyle = EMERALD
    ctx.beginPath()
    ctx.arc(bp.x, bp.y, 10, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = ink
    ctx.beginPath()
    ctx.arc(cx, py, 3.5, 0, Math.PI * 2)
    ctx.fill()

    // angle arc
    ctx.strokeStyle = TEAL
    ctx.globalAlpha = 0.8
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.arc(cx, py, 30, Math.PI / 2, Math.PI / 2 + S.th, S.th < 0)
    ctx.stroke()
    ctx.globalAlpha = 1
    ctx.font = '10px var(--font-mono), monospace'
    ctx.fillStyle = TEAL
    ctx.fillText(`θ ${fmt((S.th * 180) / Math.PI, 1)}°`, cx + 8, py + 44)

    // vectors: gravity + tangential velocity
    drawArrow(ctx, bp.x, bp.y, 0, 42, ROSE, 'mg')
    const vt = S.w * pxL * 0.35
    drawArrow(ctx, bp.x, bp.y, Math.cos(S.th) * vt, -Math.sin(S.th) * vt, SKY)

    // energy bars (right column)
    const ke = 0.5 * p.L * p.L * S.w * S.w
    const pe = g * p.L * (1 - Math.cos(S.th))
    const e0 = Math.max(S.e0, 1e-9)
    const barX = w - 96
    const barW = 26
    const barMax = Math.min(h - 130, 150)
    const barBase = h - 58
    const bar = (x: number, frac: number, color: string, label: string) => {
      const bh = clamp(frac, 0, 1.15) * barMax
      ctx.fillStyle = 'rgba(128,128,128,0.12)'
      ctx.fillRect(x, barBase - barMax, barW, barMax)
      ctx.fillStyle = color
      ctx.fillRect(x, barBase - bh, barW, bh)
      ctx.font = 'bold 9px var(--font-mono), monospace'
      ctx.fillStyle = ink
      ctx.fillText(label, x - 2, barBase + 12)
    }
    bar(barX, ke / e0, TEAL, 'KE')
    bar(barX + 34, pe / e0, AMBER, 'PE')
    bar(barX + 68, (ke + pe) / e0, EMERALD, 'E')

    // divergence readout
    if (p.compare) {
      const denom = Math.max(Math.abs((p.th0 * Math.PI) / 180), 0.05)
      const errPct = (Math.abs(S.th - S.thL) / denom) * 100
      ctx.font = 'bold 11px var(--font-mono), monospace'
      ctx.fillStyle = errPct > 5 ? ROSE : ink
      ctx.fillText(`model divergence ${fmt(errPct, 1)}%`, 14, 20)
      ctx.font = '10px var(--font-mono), monospace'
      ctx.fillStyle = ink
      ctx.globalAlpha = 0.75
      ctx.fillText(`t = ${fmt(S.t, 1)} s   ω = ${fmt(S.w, 2)} rad/s`, 14, 36)
      ctx.globalAlpha = 1
    }

    // grow trail while running
    if (S.running) {
      const bp2 = posOf(S.th)
      S.trail.push(bp2)
      if (S.trail.length > 110) S.trail.shift()
    }
  }

  useRafLoop(step, draw)

  const tSmall = 2 * Math.PI * Math.sqrt(length / 9.81)
  const tExact = exactPeriod(length, 9.81, (th0Deg * Math.PI) / 180)

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="space-y-3">
        <canvas
          ref={canvasRef}
          style={{ height: 340 }}
          className="w-full rounded-xl border border-border/70 bg-background/40 text-foreground/70"
          role="img"
          aria-label="Pendulum canvas with full and small-angle bobs plus energy bars"
        />
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              if (!sim.current.running && sim.current.t === 0) resetSim(true)
              else {
                sim.current.running = !sim.current.running
                setRunning(sim.current.running)
              }
            }}
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2 text-sm font-bold text-emerald-950 transition-all hover:bg-emerald-400 ${RING}`}
          >
            {running ? (
              <>
                <Pause className="h-4 w-4" aria-hidden="true" /> Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4" aria-hidden="true" /> {started ? 'Resume' : 'Start'}
              </>
            )}
          </button>
          <button
            onClick={() => resetSim(false)}
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border/80 bg-background/60 px-4 py-2 text-sm font-semibold text-foreground/90 transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 ${RING}`}
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Reset
          </button>
          <button
            onClick={() => setCompare((c) => !c)}
            aria-pressed={compare}
            className={`min-h-[44px] rounded-lg border px-3 text-[11px] font-bold uppercase tracking-wider transition-all ${RING} ${
              compare
                ? 'border-amber-400/50 bg-amber-400/15 text-amber-200'
                : 'border-border/80 bg-background/60 text-muted-foreground hover:text-foreground'
            }`}
          >
            compare small-angle
          </button>
          <p className="text-[11px] leading-snug text-muted-foreground">
            Emerald bob = full ODE (RK4). Amber ghost = linear model sin θ ≈ θ. Energy bars: KE +
            PE = E (constant while damping = 0).
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <div className="rounded-xl border border-border/80 bg-card px-3 py-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">T (small-angle)</div>
            <div className="mt-0.5 font-mono text-sm font-bold tabular-nums text-emerald-300">{fmt(tSmall, 3)} s</div>
          </div>
          <div className="rounded-xl border border-border/80 bg-card px-3 py-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">T (exact series)</div>
            <div className="mt-0.5 font-mono text-sm font-bold tabular-nums text-teal-300">{fmt(tExact, 3)} s</div>
          </div>
          <div className="rounded-xl border border-border/80 bg-card px-3 py-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Divergence</div>
            <div
              className={`mt-0.5 font-mono text-sm font-bold tabular-nums ${
                (readout?.errPct ?? 0) > 5 ? 'text-rose-300' : 'text-foreground'
              }`}
            >
              {readout ? `${fmt(readout.errPct, 1)}%` : '—'}
            </div>
          </div>
          <div className="rounded-xl border border-border/80 bg-card px-3 py-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Period error</div>
            <div className="mt-0.5 font-mono text-sm font-bold tabular-nums text-amber-300">
              {fmt(((tExact - tSmall) / tSmall) * 100, 2)}%
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3.5 rounded-2xl border border-border/80 bg-card p-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <Gauge className="h-4 w-4 text-emerald-300" aria-hidden="true" /> Pendulum parameters
        </div>
        <Slider label="Rod length L" value={length} min={0.5} max={3} step={0.05} unit="m" onChange={setLength} />
        <Slider label="Initial angle θ₀" value={th0Deg} min={5} max={170} step={1} unit="°" onChange={setTh0Deg} />
        <Slider label="Damping c" value={damping} min={0} max={0.5} step={0.01} unit="1/s" onChange={setDamping} accent="accent-rose-400" />
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          The small-angle model is only trustworthy below ~15°. Push θ₀ past 60° and the linear ghost
          drifts out of phase — the divergence readout (and the period error chip) quantifies the
          damage. Undamped energy stays flat: KE + PE = const.
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Inclined plane panel                                               */
/* ------------------------------------------------------------------ */

const SLOPE_LEN = 10 // m of slope

function InclinePanel({ fire }: { fire: (id: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [thetaDeg, setThetaDeg] = useState(20)
  const [mu, setMu] = useState(0.4)
  const [mass, setMass] = useState(2)
  const [reached, setReached] = useState(false)

  const sim = useRef({
    s: 0, // distance along the slope from the top, metres
    v: 0,
    wasMoving: false,
    done: false,
    p: { th: 20, mu: 0.4 },
  })
  // mirror control state into the sim ref after every render (event/loop reads only)
  useEffect(() => {
    sim.current.p = { th: thetaDeg, mu }
  })

  const resetBlock = () => {
    sim.current.s = 0
    sim.current.v = 0
    sim.current.wasMoving = false
    sim.current.done = false
    setReached(false)
  }

  const step = (dt: number) => {
    const S = sim.current
    if (S.done) return
    const { th, mu } = S.p
    const g = 9.81
    const thRad = (th * Math.PI) / 180
    const crit = Math.atan(mu)
    const tanTh = Math.tan(thRad)

    let a = 0
    if (S.v > 1e-9) {
      // moving: kinetic friction μ (μs = μk here)
      a = g * (Math.sin(thRad) - mu * Math.cos(thRad))
    } else if (tanTh > mu + 1e-12) {
      // static friction can no longer hold it
      a = g * (Math.sin(thRad) - mu * Math.cos(thRad))
      if (!S.wasMoving) {
        fire('plane-slide')
        if (Math.abs(th - (crit * 180) / Math.PI) <= 2) fire('plane-critical')
      }
    } else {
      a = 0
    }

    const vNext = S.v + a * dt
    if (S.v <= 1e-9 && a <= 0) {
      S.v = 0
      S.wasMoving = false
      return
    }
    if (vNext <= 0 && a < 0) {
      // friction stops the block
      S.s = Math.max(0, S.s + S.v * dt)
      S.v = 0
      S.wasMoving = false
      return
    }
    S.v = vNext
    S.s += S.v * dt + 0.5 * a * dt * dt
    S.wasMoving = true
    if (S.s >= SLOPE_LEN) {
      S.s = SLOPE_LEN
      S.v = 0
      S.done = true
      setReached(true)
    }
  }

  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const env = prepCanvas(canvas)
    if (!env) return
    const { ctx, w, h, ink, grid } = env
    const S = sim.current
    const { th, mu } = S.p
    const g = 9.81
    const thRad = (th * Math.PI) / 180
    const critDeg = (Math.atan(mu) * 180) / Math.PI

    const x0 = 46
    const y0 = h - 44
    let bw = w - x0 - 40
    let ah = bw * Math.tan(thRad)
    const maxAh = h - 130
    if (ah > maxAh) {
      ah = maxAh
      bw = ah / Math.tan(thRad)
    }
    const topX = x0 + bw
    const topY = y0 - ah

    // triangle
    ctx.strokeStyle = grid
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.lineTo(topX, topY)
    ctx.lineTo(topX, y0)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle = 'rgba(128,128,128,0.06)'
    ctx.fill()

    // ground
    ctx.strokeStyle = grid
    ctx.beginPath()
    ctx.moveTo(x0 - 20, y0)
    ctx.lineTo(x0 + bw + 20, y0)
    ctx.stroke()

    // angle arc + label
    ctx.strokeStyle = TEAL
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.arc(x0, y0, 36, -thRad, 0)
    ctx.stroke()
    ctx.font = 'bold 10px var(--font-mono), monospace'
    ctx.fillStyle = TEAL
    ctx.fillText(`θ ${fmt(th, 0)}°`, x0 + 40, y0 - 10)
    ctx.fillStyle = ink
    ctx.fillText(`θc ${fmt(critDeg, 1)}°`, x0 + 40, y0 - 24)

    // block — s measured from the TOP of the slope
    const u = S.s / SLOPE_LEN
    const px = topX + (x0 - topX) * u
    const py = topY + (y0 - topY) * u
    const blockHalf = 14
    // outward unit normal of the slope (up-left in canvas coordinates)
    const nx = -Math.sin(thRad)
    const ny = -Math.cos(thRad)
    const cx = px + nx * (blockHalf + 2)
    const cy = py + ny * (blockHalf + 2)

    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(-thRad)
    ctx.fillStyle = EMERALD
    ctx.strokeStyle = '#065f46'
    ctx.fillRect(-blockHalf, -blockHalf, blockHalf * 2, blockHalf * 2)
    ctx.strokeRect(-blockHalf, -blockHalf, blockHalf * 2, blockHalf * 2)
    ctx.restore()

    // free-body diagram vectors (visual scale: mg → 52 px)
    const mgPx = 52
    const mg = mass * g
    const scale = mgPx / mg
    const sliding = S.v > 1e-9
    const fStatic = mass * g * Math.sin(thRad)
    const fKinetic = mu * mass * g * Math.cos(thRad)
    const fNow = sliding ? fKinetic : Math.min(fStatic, mu * mass * g * Math.cos(thRad))
    const net = sliding ? mass * (g * (Math.sin(thRad) - mu * Math.cos(thRad))) : 0

    drawArrow(ctx, cx, cy, 0, mg * scale, ROSE, `W ${fmt(mg, 0)} N`)
    drawArrow(ctx, cx, cy, nx * mass * g * Math.cos(thRad) * scale, ny * mass * g * Math.cos(thRad) * scale, SKY, `N ${fmt(mass * g * Math.cos(thRad), 0)}`)
    // friction points up-slope (toward the top-right), opposing the slide
    const slopeLenPx = Math.hypot(topX - x0, topY - y0)
    const upx = (topX - x0) / slopeLenPx
    const upy = (topY - y0) / slopeLenPx
    drawArrow(ctx, cx, cy, upx * fNow * scale, upy * fNow * scale, AMBER, `f ${fmt(fNow, 0)} N`)
    if (sliding && Math.abs(net) > 1e-6) {
      drawArrow(ctx, cx, cy, -upx * net * scale, -upy * net * scale, EMERALD, `ma ${fmt(net, 0)} N`)
    }

    // status readout
    ctx.font = 'bold 11px var(--font-mono), monospace'
    ctx.fillStyle = sliding ? EMERALD : ink
    ctx.fillText(sliding ? 'sliding' : Math.tan(thRad) > mu ? 'unstable' : 'static — friction holds', 14, 20)
    ctx.font = '10px var(--font-mono), monospace'
    ctx.fillStyle = ink
    ctx.globalAlpha = 0.75
    ctx.fillText(`v ${fmt(S.v, 2)} m/s   a ${fmt(sliding ? g * (Math.sin(thRad) - mu * Math.cos(thRad)) : 0, 2)} m/s²`, 14, 36)
    ctx.globalAlpha = 1
  }

  useRafLoop(step, draw)

  const thRad = (thetaDeg * Math.PI) / 180
  const critDeg = (Math.atan(mu) * 180) / Math.PI
  const sliding = Math.tan(thRad) > mu
  const a = sliding ? 9.81 * (Math.sin(thRad) - mu * Math.cos(thRad)) : 0
  const n = mass * 9.81 * Math.cos(thRad)
  const fStaticNeeded = mass * 9.81 * Math.sin(thRad)
  const fMax = mu * n

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="space-y-3">
        <canvas
          ref={canvasRef}
          style={{ height: 340 }}
          className="w-full rounded-xl border border-border/70 bg-background/40 text-foreground/70"
          role="img"
          aria-label="Inclined plane canvas with block and free-body diagram vectors"
        />
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={resetBlock}
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border/80 bg-background/60 px-4 py-2 text-sm font-semibold text-foreground/90 transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 ${RING}`}
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Reset block
          </button>
          <p className="text-[11px] leading-snug text-muted-foreground">
            The block sits at the top of a {SLOPE_LEN} m slope. W = mg (rose), N = mg cos θ (sky),
            friction f (amber) points up-slope. tan θ &gt; μ is the slipping condition.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <div className="rounded-xl border border-border/80 bg-card px-3 py-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Critical angle θc</div>
            <div className="mt-0.5 font-mono text-sm font-bold tabular-nums text-teal-300">{fmt(critDeg, 2)}°</div>
          </div>
          <div className="rounded-xl border border-border/80 bg-card px-3 py-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Acceleration</div>
            <div className={`mt-0.5 font-mono text-sm font-bold tabular-nums ${sliding ? 'text-emerald-300' : 'text-muted-foreground'}`}>
              {sliding ? `${fmt(a, 2)} m/s²` : '0 (static)'}
            </div>
          </div>
          <div className="rounded-xl border border-border/80 bg-card px-3 py-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Normal N</div>
            <div className="mt-0.5 font-mono text-sm font-bold tabular-nums text-sky-300">{fmt(n, 1)} N</div>
          </div>
          <div className="rounded-xl border border-border/80 bg-card px-3 py-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Friction f</div>
            <div className="mt-0.5 font-mono text-sm font-bold tabular-nums text-amber-300">
              {sliding ? `${fmt(fMax, 1)} N (kinetic)` : `${fmt(fStaticNeeded, 1)} N (static)`}
            </div>
          </div>
        </div>
        {reached && (
          <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/[0.07] px-3.5 py-2.5 text-xs font-semibold text-emerald-200">
            Block reached the bottom — press Reset block to run again. Note the acceleration never
            depends on mass; only θ and μ matter.
          </p>
        )}
      </div>

      <div className="space-y-3.5 rounded-2xl border border-border/80 bg-card p-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <Gauge className="h-4 w-4 text-emerald-300" aria-hidden="true" /> Incline parameters
        </div>
        <Slider label="Incline angle θ" value={thetaDeg} min={0} max={60} step={0.5} unit="°" onChange={setThetaDeg} />
        <Slider label="Friction coefficient μ" value={mu} min={0} max={1} step={0.01} onChange={setMu} accent="accent-amber-400" />
        <Slider label="Mass m (cosmetic — a is mass-independent)" value={mass} min={0.5} max={10} step={0.5} unit="kg" onChange={setMass} accent="accent-sky-400" />
        <div
          className={`rounded-xl border px-3 py-2.5 text-[11px] leading-relaxed ${
            sliding
              ? 'border-emerald-400/40 bg-emerald-400/[0.07] text-emerald-200/90'
              : 'border-border/70 bg-background/40 text-muted-foreground'
          }`}
        >
          {sliding ? (
            <>
              tan θ = {fmt(Math.tan(thRad), 3)} &gt; μ = {fmt(mu, 2)} → the block slides with
              a = g(sin θ − μ cos θ). Deeper angles slide faster; shallower ones stall.
            </>
          ) : (
            <>
              tan θ = {fmt(Math.tan(thRad), 3)} ≤ μ = {fmt(mu, 2)} → static friction holds the block.
              The critical angle is θc = arctan μ = {fmt(critDeg, 2)}°.
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Lab shell                                                          */
/* ------------------------------------------------------------------ */

type Mode = 'projectile' | 'pendulum' | 'incline'

const MODES: { id: Mode; label: string }[] = [
  { id: 'projectile', label: 'Projectile' },
  { id: 'pendulum', label: 'Pendulum' },
  { id: 'incline', label: 'Inclined plane' },
]

export function MechanicsLab() {
  const [tab, setTab] = useState<Mode>('projectile')
  const [toast, setToast] = useState<string | null>(null)
  const { fire } = useMissions('mechanics')
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current)
    }
  }, [])

  const onMissionEvent = (missionId: string, objectiveId: string) => {
    const m = getMissions('mechanics').find((x) => x.id === missionId)
    const o = m?.objectives.find((x) => x.id === objectiveId)
    setToast(o?.text ?? 'Objective complete')
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="relative space-y-5"
    >
      <LabMissions missions={getMissions('mechanics')} activeLabId="mechanics" onEvent={onMissionEvent} />

      <div className="flex items-start gap-3 md:pr-[336px]">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10">
          <Rocket className="h-5 w-5 text-emerald-300" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-bold leading-tight">Mechanics Sandbox — projectile · pendulum · incline</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            Real classical mechanics on canvas: RK4-integrated ballistics with live vectors, a full
            nonlinear pendulum raced against its small-angle lie, and an incline whose block obeys
            static friction until tan θ beats μ. Watch your missions — top right.
          </p>
        </div>
      </div>

      <div className="inline-flex rounded-xl border border-border/80 bg-card p-1" role="tablist" aria-label="Mechanics lab mode">
        {MODES.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={tab === m.id}
            onClick={() => setTab(m.id)}
            className={`min-h-[44px] rounded-lg px-4 text-sm font-semibold transition-all ${RING} ${
              tab === m.id ? 'bg-emerald-400/15 text-emerald-200' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
        >
          {tab === 'projectile' ? (
            <ProjectilePanel fire={fire} />
          ) : tab === 'pendulum' ? (
            <PendulumPanel fire={fire} />
          ) : (
            <InclinePanel fire={fire} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* objective toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="pointer-events-none absolute bottom-2 right-2 z-30 flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-card/95 px-3.5 py-2.5 text-[12px] font-semibold text-emerald-100 shadow-lg"
            role="status"
          >
            <Target className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
            <span className="max-w-[260px]">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default MechanicsLab
