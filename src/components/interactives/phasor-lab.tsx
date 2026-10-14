'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Activity, Lightbulb, Pause, Play, RotateCcw, Waves, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ================================================================== */
/*  Phasor & Impedance Playground                                      */
/*  Hughes / Nilsson ch 8–9: phasors, j-notation, series RLC,           */
/*  impedance, power triangle, power-factor correction                 */
/* ================================================================== */

type Mode = 'playground' | 'rlc' | 'power'

const MODES: { id: Mode; label: string; hint: string }[] = [
  {
    id: 'playground',
    label: 'Phasors',
    hint: 'Drag the tips of up to three phasors, press play, and read their rotating projections as sine waves.',
  },
  {
    id: 'rlc',
    label: 'Series RLC',
    hint: 'One current, three voltage drops — the tip-to-tail sum is the source phasor V and the impedance triangle Z.',
  },
  {
    id: 'power',
    label: 'AC power',
    hint: 'P, Q and S make the power triangle; a shunt capacitor eats the reactive leg and walks the power factor to 1.',
  },
]

/* ---------------- geometry ---------------- */

const PW = 400 // phasor diagram
const PHH = 360
const TW = 560 // time scope
const TH = 320
const RLC_W = 400
const RLC_H = 340
const TRI_W = 360 // triangle svgs
const TRI_H = 280
const UNIT = 112 // px per unit in the playground

const DEG = Math.PI / 180

/* ---------------- formatting ---------------- */

function fmtOhm(v: number): string {
  if (Math.abs(v) >= 1000) return `${(v / 1000).toFixed(2)}\\,\\mathrm{k\\Omega}`
  if (Math.abs(v) >= 10) return `${v.toFixed(1)}\\,\\Omega`
  return `${v.toFixed(2)}\\,\\Omega`
}
function fmtOhmPlain(v: number): string {
  if (Math.abs(v) >= 1000) return `${(v / 1000).toFixed(2)} kΩ`
  if (Math.abs(v) >= 10) return `${v.toFixed(1)} Ω`
  return `${v.toFixed(2)} Ω`
}

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */

interface PhasorState {
  on: boolean
  amp: number
  phase: number // degrees
}

const PH_META = [
  { name: 'V_R', tex: 'V_R', color: '#10b981', chip: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' },
  { name: 'V_L', tex: 'V_L', color: '#f59e0b', chip: 'border-amber-500/40 bg-amber-500/10 text-amber-300' },
  { name: 'V_C', tex: 'V_C', color: '#f43f5e', chip: 'border-rose-500/40 bg-rose-500/10 text-rose-300' },
] as const

export default function PhasorLab() {
  const reduce = useReducedMotion()
  const [mode, setMode] = useState<Mode>('playground')

  /* ================= playground state ================= */

  const [phasors, setPhasors] = useState<PhasorState[]>([
    { on: true, amp: 1.0, phase: 0 },
    { on: true, amp: 0.6, phase: 90 },
    { on: true, amp: 0.4, phase: -90 },
  ])
  const [omega, setOmega] = useState(1.2) // visual rad/s
  const [playing, setPlaying] = useState(true)
  const [angle, setAngle] = useState(0) // radians, grows forever (mod 4pi when used)

  useEffect(() => {
    if (!playing || mode !== 'playground') return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      setAngle((a) => (a + dt * omega) % (4 * Math.PI))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing, mode, omega])

  /* drag a phasor tip */
  const svgRef = useRef<SVGSVGElement | null>(null)
  const dragIdx = useRef<number | null>(null)

  const ptToUser = (clientX: number, clientY: number): { ux: number; uy: number } => {
    const svg = svgRef.current
    if (!svg) return { ux: 0, uy: 0 }
    const rect = svg.getBoundingClientRect()
    const sx = ((clientX - rect.left) / rect.width) * PW
    const sy = ((clientY - rect.top) / rect.height) * PHH
    return { ux: (sx - PW / 2) / UNIT, uy: (PHH / 2 - sy) / UNIT }
  }

  const onTipDown = (e: ReactPointerEvent<SVGCircleElement>, idx: number) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    dragIdx.current = idx
  }
  const onTipMove = (e: ReactPointerEvent<SVGCircleElement>) => {
    if (dragIdx.current === null) return
    const { ux, uy } = ptToUser(e.clientX, e.clientY)
    const amp = Math.max(0.05, Math.min(1.4, Math.hypot(ux, uy)))
    const rawDeg = Math.atan2(uy, ux) / DEG
    const rel = ((rawDeg - angle / DEG) % 360 + 540) % 360 - 180
    setPhasors((ps) => ps.map((p, i) => (i === dragIdx.current ? { ...p, amp, phase: rel } : p)))
  }
  const onTipUp = () => {
    dragIdx.current = null
  }
  const onTipKey = (e: ReactKeyboardEvent<SVGCircleElement>, idx: number) => {
    const dAmp = e.key === 'ArrowUp' ? 0.05 : e.key === 'ArrowDown' ? -0.05 : 0
    const dPh = e.key === 'ArrowRight' ? 5 : e.key === 'ArrowLeft' ? -5 : 0
    if (dAmp === 0 && dPh === 0) return
    e.preventDefault()
    setPhasors((ps) =>
      ps.map((p, i) =>
        i === idx ? { ...p, amp: Math.max(0.05, Math.min(1.4, p.amp + dAmp)), phase: p.phase + dPh } : p
      )
    )
  }

  /* sum phasor */
  const sum = useMemo(() => {
    let sx = 0
    let sy = 0
    phasors.forEach((p, i) => {
      if (!p.on || i > 2) return
      sx += p.amp * Math.cos(p.phase * DEG)
      sy += p.amp * Math.sin(p.phase * DEG)
    })
    return { mag: Math.hypot(sx, sy), ang: Math.atan2(sy, sx) / DEG, sx, sy }
  }, [phasors])

  /* scope curves: amplitude . sin(phi + phase) for phi in [0, 4pi] */
  const curves = useMemo(() => {
    return phasors.map((p) => {
      if (!p.on) return ''
      const steps = 180
      let d = ''
      for (let i = 0; i <= steps; i++) {
        const u = i / steps
        const phi = 4 * Math.PI * u
        const v = p.amp * Math.sin(phi + p.phase * DEG)
        const px = 44 + u * (TW - 60)
        const py = TH / 2 - (v / 1.5) * (TH / 2 - 26)
        d += `${i === 0 ? 'M' : 'L'}${px.toFixed(1)},${py.toFixed(1)}`
      }
      return d
    })
  }, [phasors])
  const playX = 44 + (((angle % (4 * Math.PI)) + 4 * Math.PI) % (4 * Math.PI) / (4 * Math.PI)) * (TW - 60)

  /* ================= series RLC state ================= */

  const [rL, setRL] = useState(100) // ohm
  const [lH, setLH] = useState(0.2) // H
  const [cUf, setCUf] = useState(10) // µF
  const [fHz, setFHz] = useState(60)
  const V_PK = 170 // ~120 V rms

  const xl = 2 * Math.PI * fHz * lH
  const xc = 1 / (2 * Math.PI * fHz * cUf * 1e-6)
  const xNet = xl - xc
  const zMag = Math.hypot(rL, xNet)
  const phiZ = Math.atan2(xNet, rL) / DEG
  const iPk = V_PK / zMag
  const f0 = 1 / (2 * Math.PI * Math.sqrt(lH * cUf * 1e-6))
  const vR = iPk * rL
  const vL = iPk * xl
  const vC = iPk * xc
  const rlcKind = Math.abs(xNet) < zMag * 0.02 ? 'resonant' : xNet > 0 ? 'inductive' : 'capacitive'

  const [rlcPlaying, setRlcPlaying] = useState(false)
  const [rlcPhase, setRlcPhase] = useState(0)
  useEffect(() => {
    if (!rlcPlaying || mode !== 'rlc') return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      setRlcPhase((a) => (a + dt * 1.9) % (4 * Math.PI))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [rlcPlaying, mode])

  /* RLC phasor diagram geometry (chain V_R -> V_L -> V_C) */
  const rlcGeom = useMemo(() => {
    const maxAbs = Math.max(vR, vL, vC, V_PK, 1e-6)
    const s = 118 / maxAbs
    return { vRs: vR * s, vLs: vL * s, vCs: vC * s, vS: V_PK * s }
  }, [vR, vL, vC])
  const ox = RLC_W / 2 - 70
  const oy = RLC_H / 2
  const p1 = { x: ox + rlcGeom.vRs, y: oy }
  const p2 = { x: p1.x, y: p1.y - rlcGeom.vLs }
  const p3 = { x: p2.x, y: p2.y + rlcGeom.vCs }

  /* RLC scope curves: v and i, phi = phase difference */
  const rlcCurves = useMemo(() => {
    const steps = 180
    let dv = ''
    let di = ''
    for (let i = 0; i <= steps; i++) {
      const u = i / steps
      const phi = 4 * Math.PI * u
      const px = 44 + u * (TW - 60)
      const vy = TH / 2 - Math.sin(phi) * (TH / 2 - 40)
      const iy = TH / 2 - 0.72 * Math.sin(phi - phiZ * DEG) * (TH / 2 - 40)
      dv += `${i === 0 ? 'M' : 'L'}${px.toFixed(1)},${vy.toFixed(1)}`
      di += `${i === 0 ? 'M' : 'L'}${px.toFixed(1)},${iy.toFixed(1)}`
    }
    return { dv, di }
  }, [phiZ])

  /* ================= AC power state ================= */

  const [pKw, setPKw] = useState(10)
  const [qKvar, setQKvar] = useState(10.2)
  const [pfCap, setPfCap] = useState(0) // µF
  const V_LL = 480
  const F_MAINS = 60
  const capRef = useRef<number | null>(null)

  const qcKvar = 2 * Math.PI * F_MAINS * pfCap * 1e-6 * V_LL * V_LL / 1000
  const qNet = qKvar - qcKvar
  const sKva = Math.hypot(pKw, qNet)
  const pf = pKw / Math.max(sKva, 1e-9)
  const pfKind = Math.abs(qNet) < sKva * 0.02 ? 'unity' : qNet > 0 ? 'lagging' : 'leading'
  const cForUnity = (qKvar * 1000) / (2 * Math.PI * F_MAINS * V_LL * V_LL) * 1e6 // µF

  const animateToUnity = () => {
    if (capRef.current !== null) return
    const from = pfCap
    const to = Math.max(0, Math.min(600, cForUnity))
    const t0 = performance.now()
    const dur = reduce ? 0 : 900
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / dur)
      const e = 1 - (1 - t) ** 3
      setPfCap(from + (to - from) * e)
      if (t < 1) capRef.current = requestAnimationFrame(step)
      else capRef.current = null
    }
    capRef.current = requestAnimationFrame(step)
  }
  useEffect(
    () => () => {
      if (capRef.current !== null) cancelAnimationFrame(capRef.current)
    },
    []
  )

  /* ================= presets ================= */

  const applyPreset = (key: string) => {
    if (key === 'ind') {
      setMode('rlc')
      setRL(100)
      setLH(0.2)
      setCUf(10)
      setFHz(60)
    } else if (key === 'cap') {
      setMode('rlc')
      setRL(100)
      setLH(0.01)
      setCUf(300)
      setFHz(60)
    } else if (key === 'res') {
      setMode('rlc')
      setRL(50)
      setLH(0.1)
      setCUf(10)
      setFHz(Math.round(1 / (2 * Math.PI * Math.sqrt(0.1 * 10e-6))))
    } else if (key === 'pfc') {
      setMode('power')
      setPKw(10)
      setQKvar(10.2)
      setPfCap(0)
    }
  }
  const PRESETS = [
    { key: 'ind', label: 'Inductive circuit' },
    { key: 'cap', label: 'Capacitive circuit' },
    { key: 'res', label: 'Resonance' },
    { key: 'pfc', label: 'PF correction 0.7 → 1' },
  ]

  /* power triangle geometry */
  const triGeom = useMemo(() => {
    const maxAbs = Math.max(pKw, Math.abs(qNet), sKva, 1e-6)
    const s = 150 / maxAbs
    return { p: pKw * s, q: qNet * s, h: sKva * s }
  }, [pKw, qNet, sKva])
  const tx = 62
  const ty = TRI_H - 56
  const tpx = tx + triGeom.p
  const tqy = ty - triGeom.q

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Activity className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Phasor &amp; Impedance Playground</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Rotating phasors, the series-RLC voltage chain and the power triangle — with{' '}
            <TeX tex="Z=R+j(X_L-X_C)" /> and the power factor computed live under your fingertips.
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
        <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/30 p-0.5" role="group" aria-label="Mode">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
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

      {/* ============================ PLAYGROUND ============================ */}
      {mode === 'playground' && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-4 grid gap-4 lg:grid-cols-[0.62fr_1fr]"
        >
          {/* phasor diagram */}
          <div className="min-w-0 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Phasor diagram</p>
              <p className="font-mono text-[10px] tabular-nums text-muted-foreground">
                ω = {omega.toFixed(1)} rad/s
              </p>
            </div>
            <svg
              ref={svgRef}
              viewBox={`0 0 ${PW} ${PHH}`}
              className="w-full select-none"
              role="img"
              aria-label={`Phasor diagram with ${phasors.filter((p) => p.on).length} active phasors. Sum magnitude ${sum.mag.toFixed(2)} at angle ${sum.ang.toFixed(0)} degrees.`}
            >
              {/* rings + axes */}
              {[0.5, 1, 1.4].map((k) => (
                <circle key={`ring-${k}`} cx={PW / 2} cy={PHH / 2} r={UNIT * k} fill="none" className="stroke-zinc-500/15" strokeWidth={1} />
              ))}
              <line x1={PW / 2} y1={14} x2={PW / 2} y2={PHH - 14} className="stroke-zinc-500/25" strokeWidth={1} />
              <line x1={14} y1={PHH / 2} x2={PW - 14} y2={PHH / 2} className="stroke-zinc-500/25" strokeWidth={1} />

              {/* projection axis (vertical) */}
              <line x1={PW / 2} y1={14} x2={PW / 2} y2={PHH - 14} className="stroke-amber-400/40" strokeWidth={3} />

              {/* sum phasor */}
              {sum.mag > 0.02 && (
                <g>
                  <line
                    x1={PW / 2}
                    y1={PHH / 2}
                    x2={PW / 2 + sum.sx * UNIT}
                    y2={PHH / 2 - sum.sy * UNIT}
                    className="stroke-zinc-200"
                    strokeWidth={2.4}
                    strokeDasharray="7 5"
                  />
                  <text
                    x={PW / 2 + sum.sx * UNIT + 8}
                    y={PHH / 2 - sum.sy * UNIT}
                    fontSize={11}
                    className="fill-zinc-200 font-mono"
                  >
                    V
                  </text>
                </g>
              )}

              {/* phasors */}
              {phasors.map((p, i) => {
                if (!p.on) return null
                const a = (p.phase * DEG + angle) % (2 * Math.PI)
                const tx2 = PW / 2 + p.amp * Math.cos(a) * UNIT
                const ty2 = PHH / 2 - p.amp * Math.sin(a) * UNIT
                return (
                  <g key={`ph-${i}`}>
                    <line
                      x1={PW / 2}
                      y1={PHH / 2}
                      x2={tx2}
                      y2={ty2}
                      stroke={PH_META[i].color}
                      strokeWidth={3.4}
                      strokeLinecap="round"
                    />
                    {/* projection guide */}
                    <line x1={tx2} y1={ty2} x2={PW / 2} y2={ty2} stroke={PH_META[i].color} strokeWidth={1} strokeDasharray="3 4" opacity={0.55} />
                    <circle cx={PW / 2} cy={ty2} r={3} fill={PH_META[i].color} opacity={0.8} />
                    <circle
                      cx={tx2}
                      cy={ty2}
                      r={10}
                      fill="transparent"
                      stroke="transparent"
                      className="cursor-grab focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
                      onPointerDown={(e) => onTipDown(e, i)}
                      onPointerMove={onTipMove}
                      onPointerUp={onTipUp}
                      onPointerCancel={onTipUp}
                      onKeyDown={(e) => onTipKey(e, i)}
                      tabIndex={0}
                      role="slider"
                      aria-label={`${PH_META[i].name} phasor tip. Drag to set amplitude and angle; arrow keys adjust, up and down for amplitude, left and right for phase.`}
                      aria-valuenow={Number(p.amp.toFixed(2))}
                      aria-valuemin={0.05}
                      aria-valuemax={1.4}
                    />
                    <circle cx={tx2} cy={ty2} r={5.5} fill={PH_META[i].color} stroke="#09090b" strokeWidth={1.4} className="pointer-events-none" />
                    <text x={tx2 + 9} y={ty2 - 7} fontSize={11} className="pointer-events-none font-mono" fill={PH_META[i].color}>
                      {PH_META[i].name}
                    </text>
                  </g>
                )
              })}

              <text x={PW / 2 - 10} y={PHH / 2 + 14} fontSize={10} className="fill-zinc-500 font-mono">
                0
              </text>
            </svg>

            {/* toggles + readouts */}
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              {PH_META.map((m, i) => (
                <button
                  key={`tg-${i}`}
                  type="button"
                  onClick={() => setPhasors((ps) => ps.map((p, k) => (k === i ? { ...p, on: !p.on } : p)))}
                  aria-pressed={phasors[i].on}
                  className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] tabular-nums transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                    phasors[i].on ? m.chip : 'border-border bg-muted/20 text-muted-foreground/60'
                  }`}
                >
                  {m.name} = {phasors[i].amp.toFixed(2)}∠{phasors[i].phase.toFixed(0)}°
                </button>
              ))}
              <span className="rounded-lg border border-border bg-muted/20 px-2.5 py-1 font-mono text-[11px] tabular-nums text-zinc-200">
                V = {sum.mag.toFixed(2)}∠{sum.ang.toFixed(0)}°
              </span>
            </div>
          </div>

          {/* scope */}
          <div className="min-w-0 space-y-3">
            <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Projections vs time — y = A sin(ωt + θ)
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                  {PH_META.map((m, i) =>
                    phasors[i].on ? (
                      <span key={`lg-${i}`} className="inline-flex items-center gap-1" style={{ color: m.color }}>
                        <span className="h-0.5 w-4 rounded" style={{ backgroundColor: m.color }} />
                        {m.name}
                      </span>
                    ) : null
                  )}
                </div>
              </div>
              <svg viewBox={`0 0 ${TW} ${TH}`} className="w-full" role="img" aria-label="Sine wave projections of the active phasors over two cycles">
                <rect x={42} y={12} width={TW - 58} height={TH - 46} rx={6} className="fill-zinc-950/40" />
                <line x1={42} y1={TH / 2} x2={TW - 16} y2={TH / 2} className="stroke-zinc-500/50" strokeWidth={1} />
                {[0, 0.5, 1, 1.5, 2].map((u) => (
                  <g key={`tks-${u}`}>
                    <line x1={44 + u * (TW - 60)} y1={12} x2={44 + u * (TW - 60)} y2={TH - 34} className="stroke-zinc-500/12" />
                    <text x={44 + u * (TW - 60)} y={TH - 20} textAnchor="middle" fontSize={9} className="fill-zinc-500 font-mono">
                      {((u * 4 * Math.PI) / omega).toFixed(2)} s
                    </text>
                  </g>
                ))}
                {curves.map((d, i) =>
                  d ? (
                    <path
                      key={`cv-${i}`}
                      d={d}
                      fill="none"
                      stroke={PH_META[i].color}
                      strokeWidth={2.2}
                      strokeLinejoin="round"
                    />
                  ) : null
                )}
                {/* playhead */}
                <line x1={playX} y1={12} x2={playX} y2={TH - 34} className="stroke-amber-400/70" strokeWidth={1.4} />
                {phasors.map((p, i) => {
                  if (!p.on) return null
                  const v = p.amp * Math.sin(angle + p.phase * DEG)
                  return (
                    <circle
                      key={`pd-${i}`}
                      cx={playX}
                      cy={TH / 2 - (v / 1.5) * (TH / 2 - 26)}
                      r={4}
                      fill={PH_META[i].color}
                      stroke="#09090b"
                      strokeWidth={1.2}
                    />
                  )
                })}
                <text x={TW / 2} y={TH - 4} textAnchor="middle" fontSize={9} className="fill-zinc-500">
                  dots are the vertical projections of the rotating tips — the diagram and the scope agree
                </text>
              </svg>
            </div>

            {/* controls */}
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
                    setAngle(0)
                  }}
                  aria-label="Reset rotation angle"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <label className="ml-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="shrink-0">ω</span>
                  <Slider
                    min={0.2}
                    max={4}
                    step={0.1}
                    value={[omega]}
                    onValueChange={(v) => setOmega(v[0] ?? 1.2)}
                    className="w-28"
                    aria-label="Angular velocity in radians per second"
                  />
                  <span className="font-mono text-xs tabular-nums text-foreground">{omega.toFixed(1)}</span>
                </label>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-lg border border-border bg-muted/20 px-2.5 py-1">
                  <TeX tex="v(t)=A\sin(\omega t+\theta)" />
                </span>
                <span className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1">
                  <TeX tex={`|V|=\\sqrt{(\\textstyle\\sum A_i\\cos\\theta_i)^{2}+(\\sum A_i\\sin\\theta_i)^{2}}=${sum.mag.toFixed(2)}`} />
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                Drag a phasor tip while the system rotates — the scope bends instantly. Two opposite tips
                of equal length cancel in the sum, which is exactly how V_L and V_C cancel at resonance.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* ============================ SERIES RLC ============================ */}
      {mode === 'rlc' && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-4 space-y-4"
        >
          <div className="grid gap-4 lg:grid-cols-[0.62fr_1fr]">
            {/* voltage phasor chain */}
            <div className="min-w-0 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Voltage phasors (I as reference)
                </p>
                <Badge
                  variant="outline"
                  className={
                    rlcKind === 'resonant'
                      ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-300'
                      : rlcKind === 'inductive'
                        ? 'border-amber-400/60 bg-amber-400/10 text-amber-300'
                        : 'border-teal-400/60 bg-teal-400/10 text-teal-300'
                  }
                >
                  {rlcKind === 'resonant' ? 'resonant — V ∥ I' : rlcKind === 'inductive' ? 'inductive — I lags V' : 'capacitive — I leads V'}
                </Badge>
              </div>
              <svg
                viewBox={`0 0 ${RLC_W} ${RLC_H}`}
                className="w-full select-none"
                role="img"
                aria-label={`Series RLC phasor diagram. V R ${fmtOhmPlain(vR)}, V L ${fmtOhmPlain(vL)}, V C ${fmtOhmPlain(vC)}, source ${V_PK} volts at ${phiZ.toFixed(1)} degrees.`}
              >
                <line x1={24} y1={oy} x2={RLC_W - 16} y2={oy} className="stroke-zinc-500/25" strokeWidth={1} />
                <line x1={ox} y1={20} x2={ox} y2={RLC_H - 20} className="stroke-zinc-500/25" strokeWidth={1} />

                {/* I reference */}
                <line x1={ox} y1={oy} x2={ox + 66} y2={oy} className="stroke-zinc-400" strokeWidth={1.6} strokeDasharray="4 4" markerEnd="url(#pl-arrow-zinc)" />
                <text x={ox + 34} y={oy + 16} fontSize={11} className="fill-zinc-400 font-mono">
                  I
                </text>
                <defs>
                  <marker id="pl-arrow-zinc" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 z" className="fill-zinc-400" />
                  </marker>
                  <marker id="pl-arrow-emerald" markerWidth="9" markerHeight="9" refX="6.5" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 z" className="fill-emerald-400" />
                  </marker>
                  <marker id="pl-arrow-amber" markerWidth="9" markerHeight="9" refX="6.5" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 z" className="fill-amber-400" />
                  </marker>
                  <marker id="pl-arrow-rose" markerWidth="9" markerHeight="9" refX="6.5" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 z" className="fill-rose-400" />
                  </marker>
                  <marker id="pl-arrow-white" markerWidth="9" markerHeight="9" refX="6.5" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 z" className="fill-zinc-200" />
                  </marker>
                </defs>

                {/* V_R */}
                <line x1={ox} y1={oy} x2={p1.x} y2={p1.y} className="stroke-emerald-400" strokeWidth={3.2} markerEnd="url(#pl-arrow-emerald)" />
                <text x={(ox + p1.x) / 2} y={oy + 30} fontSize={10} textAnchor="middle" className="fill-emerald-300 font-mono">
                  V_R
                </text>
                {/* V_L */}
                <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} className="stroke-amber-400" strokeWidth={3.2} markerEnd="url(#pl-arrow-amber)" />
                <text x={p1.x + 10} y={(p1.y + p2.y) / 2} fontSize={10} className="fill-amber-300 font-mono">
                  V_L
                </text>
                {/* V_C */}
                <line x1={p2.x} y1={p2.y} x2={p3.x} y2={p3.y} className="stroke-rose-400" strokeWidth={3.2} markerEnd="url(#pl-arrow-rose)" />
                <text x={p2.x - 20} y={(p2.y + p3.y) / 2} fontSize={10} className="fill-rose-300 font-mono">
                  V_C
                </text>
                {/* resultant V */}
                <line x1={ox} y1={oy} x2={p3.x} y2={p3.y} className="stroke-zinc-200" strokeWidth={2.2} strokeDasharray="7 5" markerEnd="url(#pl-arrow-white)" />
                <text x={p3.x + 8} y={p3.y} fontSize={11} className="fill-zinc-200 font-mono">
                  V
                </text>

                {/* phi arc */}
                <path
                  d={`M ${ox + 44} ${oy} A 44 44 0 0 ${phiZ >= 0 ? 1 : 0} ${ox + 44 * Math.cos(phiZ * DEG)} ${oy - 44 * Math.sin(phiZ * DEG)}`}
                  fill="none"
                  className="stroke-teal-300/80"
                  strokeWidth={1.4}
                />
                <text x={ox + 52} y={oy - 18} fontSize={10} className="fill-teal-300 font-mono">
                  φ = {phiZ.toFixed(1)}°
                </text>
              </svg>
              <div className="mt-1 flex flex-wrap gap-1.5">
                <span className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] tabular-nums text-emerald-300">
                  V_R = {vR.toFixed(1)} V
                </span>
                <span className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] tabular-nums text-amber-300">
                  V_L = {vL.toFixed(1)} V
                </span>
                <span className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-2.5 py-1 font-mono text-[11px] tabular-nums text-rose-300">
                  V_C = {vC.toFixed(1)} V
                </span>
                <span className="rounded-lg border border-border bg-muted/20 px-2.5 py-1 font-mono text-[11px] tabular-nums text-zinc-200">
                  V = {V_PK} V ∠{phiZ.toFixed(1)}°
                </span>
              </div>
            </div>

            {/* impedance triangle + chips + sliders */}
            <div className="min-w-0 space-y-3">
              <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Impedance triangle</p>
                <svg viewBox={`0 0 ${TRI_W} ${TRI_H}`} className="w-full" role="img" aria-label={`Impedance triangle. R ${fmtOhmPlain(rL)}, net reactance ${fmtOhmPlain(xNet)}, Z ${fmtOhmPlain(zMag)}, angle ${phiZ.toFixed(1)} degrees.`}>
                  <line x1={30} y1={TRI_H / 2 + 60} x2={TRI_W - 16} y2={TRI_H / 2 + 60} className="stroke-zinc-500/25" strokeWidth={1} />
                  <line x1={tx} y1={30} x2={tx} y2={TRI_H - 24} className="stroke-zinc-500/25" strokeWidth={1} />
                  {/* R */}
                  <line x1={tx} y1={ty} x2={tpx} y2={ty} className="stroke-emerald-400" strokeWidth={3.4} markerEnd="url(#pl-arrow-emerald)" />
                  <text x={(tx + tpx) / 2} y={ty + 18} fontSize={11} textAnchor="middle" className="fill-emerald-300 font-mono">
                    R = {fmtOhmPlain(rL)}
                  </text>
                  {/* X */}
                  <line x1={tpx} y1={ty} x2={tpx} y2={tqy} stroke={xNet >= 0 ? '#f59e0b' : '#14b8a6'} strokeWidth={3.4} markerEnd={xNet >= 0 ? 'url(#pl-arrow-amber)' : 'url(#pl-arrow-teal)'} />
                  <text x={tpx + 8} y={(ty + tqy) / 2} fontSize={11} fill={xNet >= 0 ? '#fbbf24' : '#2dd4bf'} className="font-mono">
                    X = {fmtOhmPlain(xNet)}
                  </text>
                  {/* Z */}
                  <line x1={tx} y1={ty} x2={tpx} y2={tqy} className="stroke-zinc-200" strokeWidth={2.2} strokeDasharray="7 5" markerEnd="url(#pl-arrow-white)" />
                  <text x={(tx + tpx) / 2 - 14} y={(ty + tqy) / 2 - 8} fontSize={11} className="fill-zinc-200 font-mono">
                    Z = {fmtOhmPlain(zMag)}
                  </text>
                  {/* angle arc */}
                  <path d={`M ${tx + 40} ${ty} A 40 40 0 0 ${phiZ >= 0 ? 1 : 0} ${tx + 40 * Math.cos(phiZ * DEG)} ${ty - 40 * Math.sin(phiZ * DEG)}`} fill="none" className="stroke-teal-300/80" strokeWidth={1.4} />
                  <text x={tx + 48} y={ty - 14} fontSize={10} className="fill-teal-300 font-mono">
                    φ = {phiZ.toFixed(1)}°
                  </text>
                  <defs>
                    <marker id="pl-arrow-teal" markerWidth="9" markerHeight="9" refX="6.5" refY="3.5" orient="auto">
                      <path d="M0,0 L7,3.5 L0,7 z" className="fill-teal-400" />
                    </marker>
                  </defs>
                </svg>
              </div>

              <div className="space-y-1.5 rounded-xl border border-border bg-muted/20 p-3">
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1">
                    <TeX tex={`X_L=2\\pi f L=${fmtOhm(xl)}`} />
                  </span>
                  <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1">
                    <TeX tex={`X_C=\\frac{1}{2\\pi f C}=${fmtOhm(xc)}`} />
                  </span>
                </div>
                <span className="block rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1.5">
                  <TeX tex={`Z=\\sqrt{R^{2}+(X_L-X_C)^{2}}=${fmtOhm(zMag)}\\quad\\angle\\;\\varphi=${phiZ.toFixed(1)}^{\\circ}`} />
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1">
                    <TeX tex={`I_{\\mathrm{pk}}=V_{\\mathrm{pk}}/Z=${(iPk * 1000).toFixed(1)}\\,\\mathrm{mA}`} />
                  </span>
                  <span className="rounded-lg border border-teal-500/40 bg-teal-500/10 px-2.5 py-1">
                    <TeX tex={`f_0=\\frac{1}{2\\pi\\sqrt{LC}}=${f0.toFixed(1)}\\,\\mathrm{Hz}`} />
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 rounded-xl border border-border p-3">
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-4 shrink-0">R</span>
                  <Slider min={10} max={1000} step={5} value={[rL]} onValueChange={(v) => setRL(v[0] ?? 100)} className="flex-1" aria-label="Resistance in ohms" />
                  <span className="w-16 font-mono text-xs tabular-nums text-foreground">{fmtOhmPlain(rL)}</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-4 shrink-0">L</span>
                  <Slider min={0.005} max={0.5} step={0.005} value={[lH]} onValueChange={(v) => setLH(v[0] ?? 0.2)} className="flex-1" aria-label="Inductance in henries" />
                  <span className="w-16 font-mono text-xs tabular-nums text-foreground">{(lH * 1000).toFixed(0)} mH</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-4 shrink-0">C</span>
                  <Slider min={1} max={500} step={1} value={[cUf]} onValueChange={(v) => setCUf(v[0] ?? 10)} className="flex-1" aria-label="Capacitance in microfarads" />
                  <span className="w-16 font-mono text-xs tabular-nums text-foreground">{cUf} µF</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-4 shrink-0">f</span>
                  <Slider min={10} max={1000} step={5} value={[fHz]} onValueChange={(v) => setFHz(v[0] ?? 60)} className="flex-1" aria-label="Frequency in hertz" />
                  <span className="w-16 font-mono text-xs tabular-nums text-foreground">{fHz} Hz</span>
                </label>
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <Button size="sm" variant="outline" onClick={() => setFHz(Math.max(10, Math.min(1000, Math.round(f0))))}>
                    <Waves className="mr-1 h-3.5 w-3.5" />Tune to f₀
                  </Button>
                  <span className="text-[11px] text-muted-foreground">
                    drives f to {f0.toFixed(0)} Hz — watch φ collapse to 0 and V align with I
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* v & i scope */}
          <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Source v(t) vs current i(t)</p>
              <div className="flex flex-wrap items-center gap-2 text-[10px]">
                <span className="inline-flex items-center gap-1 text-emerald-300"><span className="h-0.5 w-4 rounded bg-emerald-400" />v(t)</span>
                <span className="inline-flex items-center gap-1 text-teal-300"><span className="h-0.5 w-4 rounded bg-teal-400" />i(t)</span>
                <span className="font-mono text-muted-foreground">
                  {rlcKind === 'resonant' ? 'in phase' : rlcKind === 'inductive' ? `i lags by ${Math.abs(phiZ).toFixed(1)}°` : `i leads by ${Math.abs(phiZ).toFixed(1)}°`}
                </span>
              </div>
            </div>
            <svg viewBox={`0 0 ${TW} ${TH}`} className="w-full" role="img" aria-label="Voltage and current waveforms showing the phase angle">
              <rect x={42} y={12} width={TW - 58} height={TH - 46} rx={6} className="fill-zinc-950/40" />
              <line x1={42} y1={TH / 2} x2={TW - 16} y2={TH / 2} className="stroke-zinc-500/50" strokeWidth={1} />
              {[0, 0.5, 1, 1.5, 2].map((u) => (
                <g key={`rtk-${u}`}>
                  <line x1={44 + u * (TW - 60)} y1={12} x2={44 + u * (TW - 60)} y2={TH - 34} className="stroke-zinc-500/12" />
                  <text x={44 + u * (TW - 60)} y={TH - 20} textAnchor="middle" fontSize={9} className="fill-zinc-500 font-mono">
                    {(u / fHz * 2).toFixed(4)} s
                  </text>
                </g>
              ))}
              <path d={rlcCurves.dv} fill="none" className="stroke-emerald-400" strokeWidth={2.2} />
              <path d={rlcCurves.di} fill="none" className="stroke-teal-400" strokeWidth={2.2} strokeDasharray="8 4" />
              {/* phase markers on first peaks: v peaks at phi = pi/2, i peaks at pi/2 + phiZ */}
              {(() => {
                const xv = 44 + (Math.PI / 2 / (4 * Math.PI)) * (TW - 60)
                const xi = 44 + ((Math.PI / 2 + phiZ * DEG) / (4 * Math.PI)) * (TW - 60)
                return (
                  <g>
                    <line x1={xv} y1={TH / 2 - (TH / 2 - 40) - 8} x2={xv} y2={TH / 2 + 6} className="stroke-zinc-400/60" strokeWidth={1} strokeDasharray="2 3" />
                    <line x1={xi} y1={TH / 2 + 6} x2={xi} y2={TH / 2 - 0.72 * (TH / 2 - 40) - 8} className="stroke-teal-300/60" strokeWidth={1} strokeDasharray="2 3" />
                    {Math.abs(xi - xv) > 8 && (
                      <line x1={xv} y1={TH / 2 + 14} x2={xi} y2={TH / 2 + 14} className="stroke-amber-400/80" strokeWidth={1.6} markerEnd="url(#pl-arrow-amber)" />
                    )}
                  </g>
                )
              })()}
              {/* playhead */}
              <line x1={44 + (rlcPhase / (4 * Math.PI)) * (TW - 60)} y1={12} x2={44 + (rlcPhase / (4 * Math.PI)) * (TW - 60)} y2={TH - 34} className="stroke-amber-400/70" strokeWidth={1.4} />
              <circle cx={44 + (rlcPhase / (4 * Math.PI)) * (TW - 60)} cy={TH / 2 - Math.sin(rlcPhase) * (TH / 2 - 40)} r={4} fill="#10b981" stroke="#09090b" strokeWidth={1.2} />
              <circle cx={44 + (rlcPhase / (4 * Math.PI)) * (TW - 60)} cy={TH / 2 - 0.72 * Math.sin(rlcPhase - phiZ * DEG) * (TH / 2 - 40)} r={4} fill="#14b8a6" stroke="#09090b" strokeWidth={1.2} />
              <text x={TW / 2} y={TH - 4} textAnchor="middle" fontSize={9} className="fill-zinc-500">
                amber bracket = φ, the gap between the v and i peaks — the same angle as the impedance triangle
              </text>
            </svg>
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <Button size="sm" variant="outline" onClick={() => setRlcPlaying((p) => !p)}>
                {rlcPlaying ? (
                  <>
                    <Pause className="mr-1 h-3.5 w-3.5" />Pause sweep
                  </>
                ) : (
                  <>
                    <Play className="mr-1 h-3.5 w-3.5" />Sweep v and i
                  </>
                )}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setRlcPlaying(false)
                  setRlcPhase(0)
                }}
                aria-label="Reset waveform sweep"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <span className="text-[11px] text-muted-foreground">
                watch the two dots trade the lead as you move f across resonance
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* ============================ AC POWER ============================ */}
      {mode === 'power' && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-4 grid gap-4 lg:grid-cols-[0.62fr_1fr]"
        >
          {/* power triangle */}
          <div className="min-w-0 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Power triangle</p>
              <Badge
                variant="outline"
                className={
                  pfKind === 'unity'
                    ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-300'
                    : pfKind === 'lagging'
                      ? 'border-amber-400/60 bg-amber-400/10 text-amber-300'
                      : 'border-rose-400/60 bg-rose-400/10 text-rose-300'
                }
              >
                {pfKind === 'unity' ? 'unity PF' : pfKind === 'lagging' ? 'lagging (inductive)' : 'leading — overcorrected'}
              </Badge>
            </div>
            <svg viewBox={`0 0 ${TRI_W} ${TRI_H}`} className="w-full" role="img" aria-label={`Power triangle. P ${pKw} kilowatts, net Q ${qNet.toFixed(1)} kilovars, S ${sKva.toFixed(1)} kilovolt amps, power factor ${pf.toFixed(3)}.`}>
              <defs>
                <marker id="pl-arrow-emerald-p" markerWidth="9" markerHeight="9" refX="6.5" refY="3.5" orient="auto">
                  <path d="M0,0 L7,3.5 L0,7 z" className="fill-emerald-400" />
                </marker>
                <marker id="pl-arrow-amber-p" markerWidth="9" markerHeight="9" refX="6.5" refY="3.5" orient="auto">
                  <path d="M0,0 L7,3.5 L0,7 z" className="fill-amber-400" />
                </marker>
                <marker id="pl-arrow-rose-p" markerWidth="9" markerHeight="9" refX="6.5" refY="3.5" orient="auto">
                  <path d="M0,0 L7,3.5 L0,7 z" className="fill-rose-400" />
                </marker>
                <marker id="pl-arrow-teal-p" markerWidth="9" markerHeight="9" refX="6.5" refY="3.5" orient="auto">
                  <path d="M0,0 L7,3.5 L0,7 z" className="fill-teal-400" />
                </marker>
              </defs>
              <line x1={24} y1={TRI_H / 2 + 44} x2={TRI_W - 16} y2={TRI_H / 2 + 44} className="stroke-zinc-500/20" strokeWidth={1} />
              {/* P */}
              <line x1={tx} y1={ty} x2={tpx} y2={ty} className="stroke-emerald-400" strokeWidth={3.6} markerEnd="url(#pl-arrow-emerald-p)" />
              <text x={(tx + tpx) / 2} y={ty + 20} fontSize={11} textAnchor="middle" className="fill-emerald-300 font-mono">
                P = {pKw.toFixed(1)} kW
              </text>
              {/* Q */}
              <line x1={tpx} y1={ty} x2={tpx} y2={tqy} stroke={qNet >= 0 ? '#f59e0b' : '#f43f5e'} strokeWidth={3.6} markerEnd={qNet >= 0 ? 'url(#pl-arrow-amber-p)' : 'url(#pl-arrow-rose-p)'} />
              <text x={tpx + 8} y={(ty + tqy) / 2} fontSize={11} fill={qNet >= 0 ? '#fbbf24' : '#fb7185'} className="font-mono">
                Q = {qNet.toFixed(1)} kVAr
              </text>
              {/* S */}
              <line x1={tx} y1={ty} x2={tpx} y2={tqy} className="stroke-teal-300" strokeWidth={2.2} strokeDasharray="7 5" markerEnd="url(#pl-arrow-teal-p)" />
              <text x={(tx + tpx) / 2 - 10} y={(ty + tqy) / 2 - 8} fontSize={11} className="fill-teal-200 font-mono">
                S = {sKva.toFixed(1)} kVA
              </text>
              {/* angle */}
              {Math.abs(qNet) > 0.5 && (
                <>
                  <path d={`M ${tx + 42} ${ty} A 42 42 0 0 ${qNet >= 0 ? 1 : 0} ${tx + 42 * (pKw / Math.max(sKva, 1e-9))} ${ty - 42 * (qNet / Math.max(sKva, 1e-9))}`} fill="none" className="stroke-zinc-400/70" strokeWidth={1.4} />
                  <text x={tx + 50} y={ty - 12} fontSize={10} className="fill-zinc-300 font-mono">
                    θ = {((Math.acos(Math.max(-1, Math.min(1, pf))) * 180) / Math.PI).toFixed(1)}°
                  </text>
                </>
              )}
            </svg>
            <div className="mt-1 rounded-lg border border-border bg-muted/20 px-3 py-2 text-center">
              <p className="font-mono text-2xl tabular-nums text-foreground">PF = {pf.toFixed(3)}</p>
              <p className="text-[11px] text-muted-foreground">
                {pfKind === 'unity' ? 'all delivered power is real' : `${sKva.toFixed(1)} kVA must flow to deliver ${pKw.toFixed(1)} kW`}
              </p>
            </div>
          </div>

          {/* right column */}
          <div className="min-w-0 space-y-3">
            <div className="space-y-1.5 rounded-xl border border-border bg-muted/20 p-3">
              <span className="block rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1.5">
                <TeX tex={`S^{2}=P^{2}+Q^{2}\\;\\Rightarrow\\;S=${sKva.toFixed(2)}\\,\\mathrm{kVA}`} />
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1">
                  <TeX tex={`\\mathrm{PF}=\\cos\\theta=${pf.toFixed(3)}`} />
                </span>
                <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1">
                  <TeX tex={`Q_C=2\\pi fCV^{2}=${qcKvar.toFixed(2)}\\,\\mathrm{kVAr}`} />
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                The capacitor injects reactive power, shrinking the net Q leg{' '}
                <TeX tex="Q=Q_L-Q_C" /> — the triangle collapses toward the P axis and the power factor
                walks to 1. Push past it and the load turns leading (rose).
              </p>
            </div>

            <div className="space-y-2.5 rounded-xl border border-border p-3">
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-10 shrink-0">P</span>
                <Slider min={1} max={20} step={0.1} value={[pKw]} onValueChange={(v) => setPKw(v[0] ?? 10)} className="flex-1" aria-label="Real power in kilowatts" />
                <span className="w-16 font-mono text-xs tabular-nums text-foreground">{pKw.toFixed(1)} kW</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-10 shrink-0">Q_L</span>
                <Slider min={0} max={20} step={0.1} value={[qKvar]} onValueChange={(v) => setQKvar(v[0] ?? 10.2)} className="flex-1" aria-label="Inductive reactive power in kilovars" />
                <span className="w-16 font-mono text-xs tabular-nums text-foreground">{qKvar.toFixed(1)} kVAr</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-10 shrink-0">C</span>
                <Slider min={0} max={600} step={1} value={[pfCap]} onValueChange={(v) => setPfCap(v[0] ?? 0)} className="flex-1" aria-label="Correction capacitor in microfarads" />
                <span className="w-16 font-mono text-xs tabular-nums text-foreground">{pfCap.toFixed(0)} µF</span>
              </label>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <Button size="sm" onClick={animateToUnity}>
                  <Zap className="mr-1 h-3.5 w-3.5" />Correct it — animate to PF 1
                </Button>
                <span className="text-[11px] text-muted-foreground">
                  needs C = {cForUnity.toFixed(0)} µF at {V_LL} V, {F_MAINS} Hz
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background/50 p-3 text-[11px] leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Why utilities care:</span> the same{' '}
              {pKw.toFixed(1)} kW load draws {sKva.toFixed(1)} kVA at PF {pf.toFixed(2)} — every bit of
              that extra current heats the lines while billing only meters P. Penalties for industrial
              customers below ~0.9 are standard, which is why capacitor banks sit beside every big motor.
            </div>
          </div>
        </motion.div>
      )}

      {/* try this */}
      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          in <span className="font-medium text-foreground">Phasors</span>, pause and drag V_L until it
          exactly opposes V_C (equal length, 180° apart) — the dashed sum collapses onto V_R, the picture
          of resonance. Then load <span className="font-medium text-foreground">Resonance</span> and nudge
          f by ±20 Hz to watch φ flip sign. Finally in{' '}
          <span className="font-medium text-foreground">AC power</span>, press{' '}
          <span className="font-medium text-foreground">Correct it</span> and let the amber leg fold into
          the emerald one — then drag C past the mark to see the rose overcorrection.
        </span>
      </div>
    </div>
  )
}
