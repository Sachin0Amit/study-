'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  FlaskConical,
  Lightbulb,
  RotateCcw,
  Thermometer,
  Waves,
  Wind,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Box geometry and constants                                          */
/* ------------------------------------------------------------------ */

const CW = 600 // canvas logical width, px
const CH = 320 // canvas logical height, px
const PXU = 45 // px per sim unit
const X0 = 30
const XMAXP = 576
const Y0 = 26
const Y1 = 294
const LY_U = (Y1 - Y0) / PXU
const PISTON_MIN = 110
const PISTON0 = 470
const N = 120
const PR = 3.2 // particle radius, px
const MP = 12 // piston mass (units)
const PISTON_DAMP = 0.8
const A0 = ((PISTON0 - X0) / PXU) * LY_U
const P_REF = (N * 1) / A0 // reference pressure at T = 1, default volume
const P_GAUGE_MAX = 4 * P_REF
const HIST_BINS = 22
const TRACE_MAX = 260

let gaussSpare: number | null = null
function gauss(): number {
  if (gaussSpare !== null) {
    const s = gaussSpare
    gaussSpare = null
    return s
  }
  let u = 0
  let v = 0
  let s2 = 0
  do {
    u = Math.random() * 2 - 1
    v = Math.random() * 2 - 1
    s2 = u * u + v * v
  } while (s2 >= 1 || s2 === 0)
  const f = Math.sqrt((-2 * Math.log(s2)) / s2)
  gaussSpare = v * f
  return u * f
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v))
}

function fc(v: number, d = 1): string {
  return String(Number(v.toFixed(d)))
}

function lerpColor(
  a: [number, number, number],
  b: [number, number, number],
  t: number
): string {
  const r = Math.round(a[0] + (b[0] - a[0]) * t)
  const g = Math.round(a[1] + (b[1] - a[1]) * t)
  const bl = Math.round(a[2] + (b[2] - a[2]) * t)
  return `rgb(${r},${g},${bl})`
}

const TEAL: [number, number, number] = [45, 212, 191]
const AMBER: [number, number, number] = [251, 191, 36]
const ROSE: [number, number, number] = [244, 63, 94]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

interface Snap {
  t: number
  p: number
  pth: number
  v: number
  pistonX: number
  meanV: number
  rmsV: number
  hist: number[]
  histVmax: number
  histTheory: number[]
  traceP: number[]
  tracePth: number[]
  traceT: number[]
  quasi: 'still' | 'slow' | 'fast'
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function GasLab() {
  const reduce = useReducedMotion()
  const [thermal, setThermal] = useState(true)
  const [tSet, setTSet] = useState(1)
  const [extMult, setExtMult] = useState(1)
  const [pistonCmd, setPistonCmd] = useState<number | null>(null)
  const [snap, setSnap] = useState<Snap | null>(null)
  const [presetTick, setPresetTick] = useState(0)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const partsRef = useRef<Particle[]>([])
  const pistonRef = useRef({ x: PISTON0, u: 0 })
  const thermalRef = useRef(true)
  const tSetRef = useRef(1)
  const tSetPrevRef = useRef(1)
  const extRef = useRef(1)
  const dragTargetRef = useRef<number | null>(null)
  const draggingRef = useRef(false)
  const pMeasRef = useRef(0)
  const rescaleRef = useRef(1)
  const jWinRef = useRef(0)
  const tWinRef = useRef(0)
  const histRef = useRef<number[]>(new Array(HIST_BINS).fill(0))
  const hitsRef = useRef<{ y: number; age: number }[]>([])
  const tracePRef = useRef<number[]>([])
  const tracePthRef = useRef<number[]>([])
  const traceTRef = useRef<number[]>([])

  const areaU = (): number => ((pistonRef.current.x - X0) / PXU) * LY_U

  const seed = (tNew: number, pistonX: number) => {
    const parts: Particle[] = []
    const sig = Math.sqrt(tNew)
    for (let i = 0; i < N; i++) {
      parts.push({
        x: X0 + PR + Math.random() * (pistonX - X0 - 2 * PR),
        y: Y0 + PR + Math.random() * (Y1 - Y0 - 2 * PR),
        vx: gauss() * sig,
        vy: gauss() * sig,
      })
    }
    partsRef.current = parts
    pistonRef.current = { x: pistonX, u: 0 }
    pMeasRef.current = (N * tNew) / (((pistonX - X0) / PXU) * LY_U)
    histRef.current = new Array(HIST_BINS).fill(0)
    tracePRef.current = []
    tracePthRef.current = []
    traceTRef.current = []
    hitsRef.current = []
    jWinRef.current = 0
    tWinRef.current = 0
  }

  /* ---------------- main loop ---------------- */

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    canvas.width = CW * dpr
    canvas.height = CH * dpr
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    seed(1, PISTON0)

    let raf = 0
    let last = performance.now()
    let lastSnap = 0
    let tSim = 0

    const step = (dt: number) => {
      const p = pistonRef.current
      if (rescaleRef.current !== 1) {
        const f = rescaleRef.current
        for (const q of partsRef.current) {
          q.vx *= f
          q.vy *= f
        }
        rescaleRef.current = 1
      }
      // piston: follow drag target or obey external force
      if (dragTargetRef.current !== null) {
        const target = dragTargetRef.current
        const dx = target - p.x
        const maxStep = 12 * PXU * dt
        const move = clamp(dx, -maxStep, maxStep)
        p.u = move / (PXU * dt)
        p.x += move
        if (Math.abs(dx) < 2) {
          p.x = target
          p.u = 0
          dragTargetRef.current = null
        }
      } else {
        const fGas = pMeasRef.current * LY_U
        const fExt = extRef.current * P_REF * LY_U
        p.u += (((fExt - fGas) / MP) - PISTON_DAMP * p.u) * dt
        p.u = clamp(p.u, -12, 12)
        p.x += p.u * PXU * dt
      }
      p.x = clamp(p.x, PISTON_MIN, XMAXP)
      if (p.x === PISTON_MIN || p.x === XMAXP) p.u = 0

      // particles
      const parts = partsRef.current
      const sig = Math.sqrt(tSetRef.current)
      const isThermal = thermalRef.current
      for (let i = 0; i < parts.length; i++) {
        const q = parts[i]
        q.x += q.vx * PXU * dt
        q.y += q.vy * PXU * dt
        if (q.x < X0 + PR) {
          q.x = X0 + PR
          if (isThermal) {
            q.vx = Math.abs(gauss() * sig)
            q.vy = gauss() * sig
          } else {
            q.vx = Math.abs(q.vx)
          }
        }
        if (q.y < Y0 + PR) {
          q.y = Y0 + PR
          if (isThermal) {
            q.vy = Math.abs(gauss() * sig)
            q.vx = gauss() * sig
          } else {
            q.vy = Math.abs(q.vy)
          }
        }
        if (q.y > Y1 - PR) {
          q.y = Y1 - PR
          if (isThermal) {
            q.vy = -Math.abs(gauss() * sig)
            q.vx = gauss() * sig
          } else {
            q.vy = -Math.abs(q.vy)
          }
        }
        if (q.x > p.x - PR) {
          q.x = p.x - PR
          const dv = q.vx - p.u
          if (dv > 0) {
            q.vx = p.u - dv
            jWinRef.current += 2 * dv
            hitsRef.current.push({ y: q.y, age: 0 })
          }
        }
      }

      // pair collisions (equal masses, elastic)
      for (let i = 0; i < parts.length; i++) {
        const a = parts[i]
        for (let j = i + 1; j < parts.length; j++) {
          const b = parts[j]
          const dx = b.x - a.x
          const dy = b.y - a.y
          const d2 = dx * dx + dy * dy
          if (d2 < 4 * PR * PR && d2 > 1e-9) {
            const d = Math.sqrt(d2)
            const nx = dx / d
            const ny = dy / d
            const dn = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny
            if (dn < 0) {
              a.vx += nx * dn
              a.vy += ny * dn
              b.vx -= nx * dn
              b.vy -= ny * dn
            }
            const overlap = (2 * PR - d) / 2
            a.x -= nx * overlap
            a.y -= ny * overlap
            b.x += nx * overlap
            b.y += ny * overlap
          }
        }
      }

      // pressure measurement window
      tWinRef.current += dt
      if (tWinRef.current >= 0.4) {
        const pInst = jWinRef.current / (tWinRef.current * LY_U)
        pMeasRef.current += (pInst - pMeasRef.current) * 0.5
        jWinRef.current = 0
        tWinRef.current = 0
      }

      // speed histogram (exponentially smoothed)
      const v2sum
        = parts.reduce((s, q) => s + q.vx * q.vx + q.vy * q.vy, 0) / parts.length
      const tNow = Math.max(v2sum / 2, 0.02)
      const vmax = 3.4 * Math.sqrt(tNow)
      const binW = vmax / HIST_BINS
      const decay = 0.985
      const bins = histRef.current
      for (let i = 0; i < HIST_BINS; i++) bins[i] *= decay
      for (let i = 0; i < parts.length; i++) {
        const v = Math.hypot(parts[i].vx, parts[i].vy)
        const b = Math.floor(v / binW)
        if (b >= 0 && b < HIST_BINS) bins[b] += 1
      }

      tSim += dt

      const hits = hitsRef.current
      for (let i = hits.length - 1; i >= 0; i--) {
        hits[i].age += dt
        if (hits[i].age > 0.6) hits.splice(i, 1)
      }
      if (hits.length > 60) hits.splice(0, hits.length - 60)

      return tNow
    }

    const draw = (tNow: number) => {
      const p = pistonRef.current
      ctx.clearRect(0, 0, CW, CH)
      // interior
      ctx.fillStyle = 'rgba(24,24,27,0.55)'
      ctx.fillRect(X0, Y0, p.x - X0, Y1 - Y0)
      // fixed walls
      ctx.strokeStyle = 'rgba(113,113,122,0.55)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(X0, Y1)
      ctx.lineTo(X0, Y0)
      ctx.lineTo(p.x, Y0)
      ctx.moveTo(X0, Y1)
      ctx.lineTo(p.x, Y1)
      ctx.stroke()
      // piston
      ctx.fillStyle = 'rgba(16,185,129,0.22)'
      ctx.fillRect(p.x - 9, Y0 - 4, 9, Y1 - Y0 + 8)
      ctx.strokeStyle = 'rgba(16,185,129,0.75)'
      ctx.strokeRect(p.x - 9, Y0 - 4, 9, Y1 - Y0 + 8)
      // rod + handle
      ctx.strokeStyle = 'rgba(113,113,122,0.5)'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(p.x - 4, (Y0 + Y1) / 2)
      ctx.lineTo(CW - 8, (Y0 + Y1) / 2)
      ctx.stroke()
      ctx.strokeStyle = draggingRef.current ? 'rgb(251,191,36)' : 'rgba(251,191,36,0.55)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(p.x - 4, (Y0 + Y1) / 2, 7, 0, Math.PI * 2)
      ctx.stroke()
      // impact flashes
      for (const h of hitsRef.current) {
        const alpha = Math.max(0, 1 - h.age / 0.6)
        ctx.fillStyle = `rgba(251,191,36,${(alpha * 0.9).toFixed(3)})`
        ctx.beginPath()
        ctx.arc(p.x - 6, h.y, 2 + alpha * 2.5, 0, Math.PI * 2)
        ctx.fill()
      }
      // particles, colored by speed
      const vRef = 1.8 * Math.sqrt(Math.max(tNow, 0.02))
      for (const q of partsRef.current) {
        const v = Math.hypot(q.vx, q.vy)
        const qq = clamp(v / vRef, 0, 1)
        const col
          = qq < 0.5
            ? lerpColor(TEAL, AMBER, qq * 2)
            : lerpColor(AMBER, ROSE, (qq - 0.5) * 2)
        ctx.fillStyle = col
        ctx.beginPath()
        ctx.arc(q.x, q.y, PR, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = (now: number) => {
      const dt = Math.min(0.033, (now - last) / 1000)
      last = now
      if (dt > 0) {
        const tNow = step(dt)
        draw(tNow)
        if (now - lastSnap > 160) {
          lastSnap = now
          const parts = partsRef.current
          const a = areaU()
          const v2 = parts.reduce((s, q) => s + q.vx * q.vx + q.vy * q.vy, 0) / parts.length
          const tSimNow = Math.max(v2 / 2, 0)
          const pth = (N * tSimNow) / a
          const vSum = parts.reduce((s, q) => s + Math.hypot(q.vx, q.vy), 0) / parts.length
          const rmsV = Math.sqrt(v2)
          const vmax = 3.4 * Math.sqrt(Math.max(tSimNow, 0.02))
          const binW = vmax / HIST_BINS
          const theory: number[] = []
          for (let i = 0; i < HIST_BINS; i++) {
            const vc = (i + 0.5) * binW
            theory.push(N * (vc / Math.max(tSimNow, 0.02)) * Math.exp((-vc * vc) / (2 * Math.max(tSimNow, 0.02))) * binW)
          }
          tracePRef.current.push(pMeasRef.current)
          tracePthRef.current.push(pth)
          traceTRef.current.push(tSimNow)
          if (tracePRef.current.length > TRACE_MAX) {
            tracePRef.current.shift()
            tracePthRef.current.shift()
            traceTRef.current.shift()
          }
          const pu = Math.abs(pistonRef.current.u)
          const quasi: Snap['quasi'] =
            !thermalRef.current ? 'fast' : pu > 3 ? 'fast' : pu > 0.15 ? 'slow' : 'still'
          setSnap({
            t: tSimNow,
            p: pMeasRef.current,
            pth,
            v: a,
            pistonX: pistonRef.current.x,
            meanV: vSum,
            rmsV,
            hist: histRef.current.slice(),
            histVmax: vmax,
            histTheory: theory,
            traceP: tracePRef.current.slice(),
            tracePth: tracePthRef.current.slice(),
            traceT: traceTRef.current.slice(),
            quasi,
          })
          if (dragTargetRef.current === null) setPistonCmd(null)
        }
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    thermalRef.current = thermal
  }, [thermal])
  useEffect(() => {
    extRef.current = extMult
  }, [extMult])

  /* ---------------- interaction ---------------- */

  const onCanvasPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * CW
    const y = ((e.clientY - rect.top) / rect.height) * CH
    if (Math.abs(x - (pistonRef.current.x - 4)) < 26 && y > Y0 - 10 && y < Y1 + 10) {
      draggingRef.current = true
      setPistonCmd(null)
      dragTargetRef.current = clamp(x, PISTON_MIN, XMAXP)
      canvas.setPointerCapture(e.pointerId)
      e.preventDefault()
    }
  }

  const onCanvasPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!draggingRef.current) return
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * CW
    dragTargetRef.current = clamp(x, PISTON_MIN, XMAXP)
  }

  const onCanvasPointerUp = () => {
    draggingRef.current = false
  }

  const onTSet = (v: number) => {
    setTSet(clamp(v, 0.2, 5))
  }

  // slider moves queue a rescale that the rAF loop applies (refs only mutate in the loop)
  useEffect(() => {
    const old = tSetPrevRef.current
    rescaleRef.current = Math.sqrt(tSet / Math.max(old, 0.02))
    tSetPrevRef.current = tSet
    tSetRef.current = tSet
  }, [tSet])

  /* ---------------- presets ---------------- */

  const applyPreset = (key: 'room' | 'hot' | 'adiabatic' | 'free') => {
    setPresetTick((n) => n + 1)
    if (key === 'room') {
      tSetRef.current = 1
      tSetPrevRef.current = 1
      setTSet(1)
      setThermal(true)
      thermalRef.current = true
      extRef.current = 1
      setExtMult(1)
      dragTargetRef.current = null
      seed(1, PISTON0)
    } else if (key === 'hot') {
      tSetRef.current = 4
      tSetPrevRef.current = 4
      setTSet(4)
      setThermal(true)
      thermalRef.current = true
      extRef.current = 1
      setExtMult(1)
      dragTargetRef.current = null
      seed(4, PISTON0)
    } else if (key === 'adiabatic') {
      tSetRef.current = 1
      tSetPrevRef.current = 1
      setTSet(1)
      setThermal(false)
      thermalRef.current = false
      extRef.current = 2.4
      setExtMult(2.4)
      dragTargetRef.current = null
      seed(1, PISTON0)
    } else {
      // free expansion: pull the piston out instantly — no work, no heat
      tSetPrevRef.current = tSetRef.current
      setThermal(true)
      thermalRef.current = true
      const aNew = ((XMAXP - X0) / PXU) * LY_U
      extRef.current = clamp(A0 / aNew, 0.05, 3)
      setExtMult(clamp(A0 / aNew, 0.05, 3))
      pistonRef.current = { x: XMAXP, u: 0 }
      dragTargetRef.current = null
      pMeasRef.current = (N * tSetRef.current) / aNew
    }
  }

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

  // gauge geometry
  const gx = 100
  const gy = 96
  const gr = 66
  const pNow = snap ? clamp(snap.p, 0, P_GAUGE_MAX) : 0
  const pTh = snap ? clamp(snap.pth, 0, P_GAUGE_MAX) : 0
  const needleAngle = Math.PI - (pNow / P_GAUGE_MAX) * Math.PI
  const theoryAngle = Math.PI - (pTh / P_GAUGE_MAX) * Math.PI
  const nx = gx + (gr - 8) * Math.cos(needleAngle)
  const ny = gy - (gr - 8) * Math.sin(needleAngle)
  const txp = gx + gr * Math.cos(theoryAngle)
  const typ = gy - gr * Math.sin(theoryAngle)

  const histW = 300
  const histH = 150
  const hpl = 10
  const hpr = 10
  const hpt = 10
  const hpb = 24
  const barW = (histW - hpl - hpr) / HIST_BINS
  const histMax = snap
    ? Math.max(...snap.hist, ...snap.histTheory, 1e-6)
    : 1
  const theoryPath = snap
    ? snap.histTheory
        .map((tv, i) => {
          const x = hpl + (i + 0.5) * barW
          const y = hpt + (histH - hpt - hpb) * (1 - tv / histMax)
          return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
        })
        .join('')
    : ''

  const traceW = 620
  const traceH = 110
  const tpl = 34
  const tpr = 10
  const tpt = 8
  const tpb = 18
  const tracePath = (vals: number[]): string =>
    vals
      .map((val, i) => {
        const x = tpl + ((traceW - tpl - tpr) * i) / Math.max(TRACE_MAX - 1, 1)
        const y = tpt + (traceH - tpt - tpb) * (1 - clamp(val, 0, P_GAUGE_MAX) / P_GAUGE_MAX)
        return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
      })
      .join('')

  const quasiBadge =
    snap?.quasi === 'fast'
      ? {
          cls: 'border-rose-500/50 bg-rose-500/10 text-rose-300',
          txt: thermal ? 'fast squeeze — quasi-adiabatic' : 'insulated walls — fully adiabatic',
        }
      : snap?.quasi === 'slow'
        ? {
            cls: 'border-teal-500/50 bg-teal-500/10 text-teal-300',
            txt: 'slow squeeze — quasistatic',
          }
        : {
            cls: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300',
            txt: thermal ? 'thermal walls — isothermal' : 'insulated walls — adiabatic',
          }

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <FlaskConical className="h-5 w-5 text-emerald-400" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Kinetic Theory Box</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Feynman ch 1 &amp; 10: 120 particles bounce off the walls — drag the piston or squeeze
            with the external force and watch P = NkT/V hold, break, and recover.
          </p>
        </div>
      </div>

      {/* presets */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Presets
        </span>
        {(
          [
            { key: 'room', label: 'Room-temperature box', aria: 'Preset: room temperature box' },
            { key: 'hot', label: 'Hot box', aria: 'Preset: hot box' },
            { key: 'adiabatic', label: 'Adiabatic squeeze', aria: 'Preset: adiabatic squeeze' },
            { key: 'free', label: 'Free expansion', aria: 'Preset: free expansion' },
          ] as const
        ).map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => applyPreset(p.key)}
            aria-label={p.aria}
            className="rounded-lg border border-border bg-muted/30 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* controls */}
      <div className="mt-3 grid grid-cols-1 gap-3 rounded-xl border border-border bg-background/50 p-3 sm:grid-cols-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <Thermometer className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
          <span className="w-8 shrink-0 text-xs font-medium text-muted-foreground">Temp</span>
          <Slider
            min={0.2}
            max={5}
            step={0.05}
            value={[tSet]}
            onValueChange={(v) => onTSet(v[0] ?? 1)}
            className="min-w-[120px] flex-1"
            aria-label="Wall temperature T, which also rescales the particle speeds"
          />
          <span className="w-16 shrink-0 font-mono text-xs tabular-nums text-foreground">
            T = {fc(tSet, 2)}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <Wind className="h-4 w-4 shrink-0 text-rose-400" aria-hidden="true" />
          <span className="w-20 shrink-0 text-xs font-medium text-muted-foreground">
            External force
          </span>
          <Slider
            min={0}
            max={3}
            step={0.05}
            value={[extMult]}
            onValueChange={(v) => {
              extRef.current = v[0] ?? 1
              setExtMult(v[0] ?? 1)
            }}
            className="min-w-[120px] flex-1"
            aria-label="External force on the piston, in multiples of the reference pressure"
          />
          <span className="w-16 shrink-0 font-mono text-xs tabular-nums text-rose-300">
            {fc(extMult, 2)}×P₀
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <Waves className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
          <span className="w-8 shrink-0 text-xs font-medium text-muted-foreground">Piston</span>
          <Slider
            min={PISTON_MIN}
            max={XMAXP}
            step={1}
            value={[pistonCmd ?? snap?.pistonX ?? PISTON0]}
            onValueChange={(v) => {
              const x = v[0] ?? PISTON0
              setPistonCmd(x)
              dragTargetRef.current = clamp(x, PISTON_MIN, XMAXP)
            }}
            className="min-w-[120px] flex-1"
            aria-label="Piston position, which sets the volume"
          />
          <span className="w-16 shrink-0 font-mono text-xs tabular-nums text-emerald-300">
            V={snap ? fc(snap.v, 0) : '—'}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <Button
            size="sm"
            variant={thermal ? 'default' : 'outline'}
            aria-pressed={thermal}
            onClick={() => setThermal((v) => !v)}
            className="h-8"
          >
            <Thermometer className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
            {thermal ? 'Thermal walls' : 'Insulated walls'}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            aria-label="Reset the box to room temperature and default volume"
            onClick={() => applyPreset('room')}
            className="h-8"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
          </Button>
          <span className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium ${quasiBadge.cls}`}>
            {quasiBadge.txt}
          </span>
        </div>
      </div>

      {/* box + gauge */}
      <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
          <canvas
            ref={canvasRef}
            style={{ width: '100%', height: 'auto', aspectRatio: `${CW} / ${CH}` }}
            className="w-full cursor-pointer touch-none select-none rounded-lg"
            role="img"
            aria-label="Gas box with 120 particles bouncing off the walls. The piston on the right can be dragged. Use the piston slider to change volume."
            onPointerDown={onCanvasPointerDown}
            onPointerMove={onCanvasPointerMove}
            onPointerUp={onCanvasPointerUp}
            onPointerCancel={onCanvasPointerUp}
          />
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Speed
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-2 w-16 rounded-full bg-gradient-to-r from-teal-400 via-amber-400 to-rose-400" />
              slow → fast (relative to √T)
            </span>
            <span className="text-[11px] text-muted-foreground">
              amber flashes = impacts pushing the piston
            </span>
          </div>
        </div>

        {/* pressure gauge */}
        <div className="rounded-xl border border-border bg-background/50 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Pressure gauge
          </p>
          <svg
            viewBox="0 0 200 112"
            className="mt-1 w-full"
            role="img"
            aria-label={`Pressure gauge. Measured pressure ${snap ? fc(snap.p, 2) : '—'}, ideal gas prediction ${snap ? fc(snap.pth, 2) : '—'} in units of N k T over V.`}
          >
            <path
              d={`M ${gx - gr} ${gy} A ${gr} ${gr} 0 0 1 ${gx + gr} ${gy}`}
              className="stroke-zinc-500/40"
              strokeWidth={10}
              fill="none"
              strokeLinecap="round"
            />
            {[0, 1, 2, 3, 4].map((i) => {
              const a = Math.PI - (i / 4) * Math.PI
              const x1 = gx + (gr - 12) * Math.cos(a)
              const y1 = gy - (gr - 12) * Math.sin(a)
              const x2 = gx + (gr - 3) * Math.cos(a)
              const y2 = gy - (gr - 3) * Math.sin(a)
              return (
                <g key={`gtick-${i}`}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    className="stroke-zinc-400/80"
                    strokeWidth={1.5}
                  />
                  <text
                    x={gx + (gr + 8) * Math.cos(a)}
                    y={gy - (gr + 8) * Math.sin(a) + 4}
                    textAnchor="middle"
                    fontSize={9}
                    className="fill-zinc-500 font-mono"
                  >
                    {i}×
                  </text>
                </g>
              )
            })}
            <circle cx={txp} cy={typ} r={4} className="fill-amber-400" />
            <line
              x1={gx}
              y1={gy}
              x2={nx}
              y2={ny}
              className="stroke-emerald-400"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <circle cx={gx} cy={gy} r={5} className="fill-zinc-300" />
            <text x={gx - gr + 4} y={gy + 22} fontSize={9} className="fill-zinc-500">
              0
            </text>
            <text x={gx + gr - 20} y={gy + 22} fontSize={9} className="fill-zinc-500">
              4×P₀
            </text>
          </svg>
          <div className="mt-1 space-y-1 font-mono text-[11px] tabular-nums">
            <p className="text-emerald-300">
              P measured = {snap ? fc(snap.p, 2) : '—'}
            </p>
            <p className="text-amber-300">P = NkT/V = {snap ? fc(snap.pth, 2) : '—'}</p>
            <p className="text-muted-foreground">
              V = {snap ? fc(snap.v, 1) : '—'} u² · N = {N}
            </p>
          </div>
        </div>
      </div>

      {/* histogram + trace */}
      <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-background/50 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Maxwell–Boltzmann speed histogram (2D)
          </p>
          <svg
            viewBox={`0 0 ${histW} ${histH}`}
            className="mt-1 w-full"
            role="img"
            aria-label="Histogram of particle speeds with the theoretical Maxwell Boltzmann curve overlaid"
          >
            <rect
              x={hpl}
              y={hpt}
              width={histW - hpl - hpr}
              height={histH - hpt - hpb}
              className="fill-zinc-950/40"
            />
            {snap?.hist.map((cnt, i) => {
              const h = (histH - hpt - hpb) * (cnt / histMax)
              return (
                <rect
                  key={`hb-${i}`}
                  x={hpl + i * barW + 0.5}
                  y={histH - hpb - h}
                  width={Math.max(barW - 1, 1)}
                  height={h}
                  className="fill-emerald-500/70"
                />
              )
            })}
            {theoryPath && (
              <path
                d={theoryPath}
                className="stroke-amber-400"
                strokeWidth={2}
                fill="none"
                strokeLinejoin="round"
              />
            )}
            <line
              x1={hpl}
              y1={histH - hpb}
              x2={histW - hpr}
              y2={histH - hpb}
              className="stroke-zinc-500/50"
              strokeWidth={1}
            />
            <text x={hpl} y={histH - 8} fontSize={10} className="fill-zinc-500 font-mono">
              0
            </text>
            <text
              x={histW - hpr}
              y={histH - 8}
              textAnchor="end"
              fontSize={10}
              className="fill-zinc-500 font-mono"
            >
              v = {snap ? fc(snap.histVmax, 1) : '—'}
            </text>
          </svg>
          <div className="mt-1 flex items-center gap-3 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="h-2 w-3 rounded-sm bg-emerald-500/70" /> sampled
            </span>
            <span className="flex items-center gap-1">
              <span className="h-0.5 w-4 rounded bg-amber-400" /> theory{' '}
              <TeX tex="f(v)\propto v\,e^{-mv^{2}/2kT}" />
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-background/50 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Pressure trace (last ~40 s)
          </p>
          <svg
            viewBox={`0 0 ${traceW} ${traceH}`}
            className="mt-1 w-full"
            role="img"
            aria-label="Pressure versus time trace: measured pressure in emerald and the ideal gas prediction in amber, overlapping when the gas is in equilibrium"
          >
            <rect
              x={tpl}
              y={tpt}
              width={traceW - tpl - tpr}
              height={traceH - tpt - tpb}
              className="fill-zinc-950/40"
            />
            {[1, 2, 3].map((i) => (
              <g key={`ttick-${i}`}>
                <line
                  x1={tpl}
                  y1={tpt + (traceH - tpt - tpb) * (1 - i / 4)}
                  x2={traceW - tpr}
                  y2={tpt + (traceH - tpt - tpb) * (1 - i / 4)}
                  className="stroke-zinc-500/15"
                  strokeWidth={1}
                />
                <text
                  x={tpl - 4}
                  y={tpt + (traceH - tpt - tpb) * (1 - i / 4) + 3}
                  textAnchor="end"
                  fontSize={9}
                  className="fill-zinc-500 font-mono"
                >
                  {i}×
                </text>
              </g>
            ))}
            {snap && snap.tracePth.length > 1 && (
              <path
                d={tracePath(snap.tracePth)}
                className="stroke-amber-400"
                strokeWidth={1.5}
                strokeDasharray="5 4"
                fill="none"
              />
            )}
            {snap && snap.traceP.length > 1 && (
              <path d={tracePath(snap.traceP)} className="stroke-emerald-400" strokeWidth={2} fill="none" />
            )}
            <text x={tpl} y={traceH - 6} fontSize={9} className="fill-zinc-500 font-mono">
              −40 s
            </text>
            <text
              x={traceW - tpr}
              y={traceH - 6}
              textAnchor="end"
              fontSize={9}
              className="fill-zinc-500 font-mono"
            >
              now
            </text>
          </svg>
          <div className="mt-1 flex items-center gap-3 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="h-0.5 w-4 rounded bg-emerald-400" /> measured P
            </span>
            <span className="flex items-center gap-1">
              <span className="h-0.5 w-4 rounded border-t-2 border-dashed border-amber-400" />{' '}
              NkT/V
            </span>
          </div>
        </div>
      </div>

      {/* verification chips */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200">
          <TeX
            tex={`\\langle\\tfrac12 mv^{2}\\rangle=${snap ? fc(snap.t, 2) : '\\cdots'}\\;\\approx\\;kT=${fc(tSet, 2)}`}
          />
        </span>
        <span className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 text-xs text-teal-200">
          <TeX tex={`\\langle\\tfrac12 mv^{2}\\rangle=\\tfrac32 kT`} />
        </span>
        <span className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs text-amber-200">
          <TeX
            tex={`P=${snap ? fc(snap.p, 2) : '\\cdots'}\\;\\;\\frac{NkT}{V}=${snap ? fc(snap.pth, 2) : '\\cdots'}`}
          />
        </span>
        <span className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 text-xs text-teal-200">
          <TeX
            tex={`\\bar v=${snap ? fc(snap.meanV, 2) : '\\cdots'}\\;\\left(\\sqrt{\\pi kT/2m}=${snap ? fc(Math.sqrt((Math.PI * snap.t) / 2), 2) : '\\cdots'}\\right)`}
          />
        </span>
        <span className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 text-xs text-teal-200">
          <TeX
            tex={`v_{\\rm rms}=${snap ? fc(snap.rmsV, 2) : '\\cdots'}\\;\\left(\\sqrt{2kT/m}=${snap ? fc(Math.sqrt(2 * snap.t), 2) : '\\cdots'}\\right)`}
          />
        </span>
      </div>

      {/* stats */}
      <motion.div
        key={`gstats-${presetTick}`}
        initial={reduce ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.3 }}
        className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4"
      >
        {stat('t', 'T (measured)', snap ? fc(snap.t, 2) : '—', 'from ⟨½mv²⟩, per particle', 'amber')}
        {stat('p', 'P (measured)', snap ? fc(snap.p, 2) : '—', 'momentum flux on the piston', 'emerald')}
        {stat('pt', 'P = NkT/V', snap ? fc(snap.pth, 2) : '—', 'ideal gas prediction', 'teal')}
        {stat('v', 'V (volume)', snap ? fc(snap.v, 1) : '—', 'piston sets the area', 'rose')}
      </motion.div>

      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
        This box is two-dimensional, so each particle carries one kT of energy{' '}
        <TeX tex="(\langle\tfrac12 mv^2\rangle = kT)" />; the textbook 3D law{' '}
        <TeX tex="\langle\tfrac12 mv^2\rangle=\tfrac32 kT" /> adds the third degree of freedom.
        During a fast squeeze the measured P overshoots NkT/V because the gas is momentarily out of
        equilibrium — relax and they re-merge.
      </p>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" aria-hidden="true" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          drag the piston left slowly — the emerald needle tracks the amber{' '}
          <TeX tex="NkT/V" /> dot the whole way down (isothermal). Now hit{' '}
          <span className="font-medium text-foreground">Adiabatic squeeze</span>: with insulated
          walls the same compression heats the gas, T climbs above the slider value, and the
          histogram marches right. Finish with{' '}
          <span className="font-medium text-foreground">Free expansion</span> — the piston leaps
          out, no work is done, and T stays put while P halves.
        </span>
      </div>
    </div>
  )
}
