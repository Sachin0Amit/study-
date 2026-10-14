'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Fan, Lightbulb, Pause, Play, RotateCcw, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const TWO_PI = 2 * Math.PI
const DEG = 180 / Math.PI

function fmtRpm(v: number): string {
  return v.toLocaleString('en-US', { maximumFractionDigits: 0 })
}

function pol(cx: number, cy: number, r: number, ang: number): readonly [number, number] {
  return [cx + r * Math.cos(ang), cy - r * Math.sin(ang)]
}

function useClock(run: boolean, reduce: boolean | null, resetKey: number): number {
  const [t, setT] = useState(0)
  useEffect(() => {
    if (!run || reduce) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      setT((now - start) / 1000)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, reduce, resetKey])
  return t
}

function arrowHead(id: string, cls: string) {
  return (
    <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3.2" orient="auto">
      <path d="M0,0 L7,3.2 L0,6.4 z" className={cls} />
    </marker>
  )
}

/* ------------------------------------------------------------------ */
/*  Motor models                                                       */
/* ------------------------------------------------------------------ */

/** Kloss approximation for the induction torque-speed curve. */
const T_BD = 1.0 // breakdown torque, per-unit
const S_BD = 0.18 // slip at breakdown

function klossTorque(s: number): number {
  const sc = Math.min(Math.max(s, 0.001), 1)
  return (2 * T_BD) / (sc / S_BD + S_BD / sc)
}

/** Fan-type load: T_load = Tset·(n/ns)^2. Returns the operating slip. */
function solveSlip(tset: number): { s: number; stall: boolean } {
  let best = 1
  let found = false
  for (let i = 599; i >= 0; i--) {
    const s = 0.0005 + (i / 600) * 0.9995
    const tem = klossTorque(s)
    const tl = tset * (1 - s) ** 2
    if (tem >= tl) {
      best = s
      found = true
      break
    }
  }
  return { s: found ? best : 1, stall: !found }
}

/* ------------------------------------------------------------------ */
/*  Presets                                                            */
/* ------------------------------------------------------------------ */

type MMode = 'field' | 'induction' | 'sync' | 'dc'

const PRESETS: { key: string; label: string; mode: MMode; note: string; data: Record<string, number | boolean> }[] = [
  {
    key: 'stator',
    label: '3-phase stator',
    mode: 'field',
    note: 'Three sines 120° apart make a field that spins at n_s = 120f/p — swap any two phases and it reverses.',
    data: { f: 50, p: 1, reversed: false },
  },
  {
    key: 'slip5',
    label: 'Induction at 5% slip',
    mode: 'induction',
    note: 'Fan load tuned so the rotor settles at s ≈ 5% — the workhorse point past the knee of the torque-speed curve.',
    data: { f: 60, tset: 0.57 },
  },
  {
    key: 'syncgen',
    label: 'Synchronous generator',
    mode: 'sync',
    note: 'Prime mover pushes the rotor ahead of the field (δ < 0): the machine exports power at exactly n_s = 120f/p.',
    data: { f: 60, p: 2, delta: -30 },
  },
  {
    key: 'shunt',
    label: 'Shunt DC motor',
    mode: 'dc',
    note: 'Constant flux (shunt field), 220 V armature, rated load — the commutator keeps torque unidirectional.',
    data: { v: 220, tload: 1 },
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MachineLab() {
  const reduce = useReducedMotion()
  const [mode, setMode] = useState<MMode>('field')
  const [playing, setPlaying] = useState(true)
  const [resetKey, setResetKey] = useState(0)
  const [note, setNote] = useState('')

  const [f, setF] = useState(50)
  const [p, setP] = useState(1)
  const [reversed, setReversed] = useState(false)
  const [tset, setTset] = useState(0.57)
  const [delta, setDelta] = useState(25)
  const [vArm, setVArm] = useState(220)
  const [tload, setTload] = useState(1)

  const t = useClock(playing, reduce, resetKey)

  const applyPreset = (key: string) => {
    const pr = PRESETS.find((x) => x.key === key)
    if (!pr) return
    setMode(pr.mode)
    setNote(pr.note)
    setResetKey((k) => k + 1)
    const d = pr.data
    if (pr.mode === 'field') {
      setF(d.f as number)
      setP(d.p as number)
      setReversed(Boolean(d.reversed))
    } else if (pr.mode === 'induction') {
      setF(d.f as number)
      setTset(d.tset as number)
    } else if (pr.mode === 'sync') {
      setF(d.f as number)
      setP(d.p as number)
      setDelta(d.delta as number)
    } else {
      setVArm(d.v as number)
      setTload(d.tload as number)
    }
  }

  const nSync = (120 * f) / p

  /* ============================ FIELD ============================ */
  const thetaE = TWO_PI * (f / 50) * t * (reversed ? -1 : 1)
  const thetaM = thetaE / p
  const phaseI = (k: number) => (reversed ? Math.cos(thetaE + k * TWO_PI / 3) : Math.cos(thetaE - k * TWO_PI / 3))
  const PHASE_CLS = ['text-emerald-400', 'text-amber-400', 'text-teal-400']
  const PHASE_STROKE = ['#34d399', '#fbbf24', '#2dd4bf']
  const PHASE_NAME = ['A', 'B', 'C']

  const fieldArrow = (ang: number, ghost = 0) => {
    const [x1, y1] = pol(150, 150, 24, ang)
    const [x2, y2] = pol(150, 150, 96, ang)
    return (
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        className="stroke-emerald-400"
        strokeWidth={ghost ? 2.2 : 3.4}
        opacity={ghost ? 0.35 / ghost : 1}
        markerEnd={ghost ? undefined : 'url(#ml-fld)'}
      />
    )
  }

  /* ============================ INDUCTION ============================ */
  const op = useMemo(() => solveSlip(tset), [tset])
  const slip = op.s
  const nSyncI = (120 * f) / 1
  const nRot = (1 - slip) * nSyncI
  const tOp = klossTorque(slip)
  const thetaFieldI = TWO_PI * (f / 50) * t
  const thetaRotI = thetaFieldI * (1 - slip)

  /* ============================ SYNC ============================ */
  const thetaSyncE = TWO_PI * (f / 50) * t
  const thetaSyncM = thetaSyncE / p
  const pPu = Math.sin((delta * Math.PI) / 180)
  const genMode = delta < 0

  /* ============================ DC ============================ */
  const KPHI = 0.5
  const RA = 1.2
  const ia = tload / KPHI
  const omega = (vArm - ia * RA) / KPHI
  const stalled = omega <= 0.5
  const nDc = Math.max(omega, 0) * 60 / TWO_PI
  const eb = KPHI * Math.max(omega, 0)
  const rps = Math.max(omega, 0) / TWO_PI
  const visRate = Math.min(rps / 22, 0.85)
  const thetaDc = TWO_PI * visRate * t
  const commA = Math.cos(thetaDc) > 0 // conductor A current out of page

  const TS_W = 560
  const TS_H = 300

  function syncRpm(f: number, p: number): string {
    return `${((120 * f) / p).toFixed(0)} rpm`
  }

  const modeBtn = (m: MMode, label: string) => (
    <button
      key={m}
      type="button"
      onClick={() => {
        setMode(m)
        setNote('')
        setResetKey((k) => k + 1)
      }}
      aria-pressed={mode === m}
      className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
        mode === m ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300' : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Fan className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Rotating Machines Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Electronics Ch 19: watch three sines become a spinning field, chase the slip of a squirrel cage, lock a
            synchronous rotor to that field, and commutate a DC armature.
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Presets</span>
        {PRESETS.map((pr) => (
          <button
            key={pr.key}
            type="button"
            onClick={() => applyPreset(pr.key)}
            className="rounded-lg border border-border bg-muted/30 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
          >
            {pr.label}
          </button>
        ))}
      </div>
      {note && <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{note}</p>}

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {modeBtn('field', 'Rotating field')}
        {modeBtn('induction', 'Induction motor')}
        {modeBtn('sync', 'Synchronous')}
        {modeBtn('dc', 'DC motor')}
        <Button type="button" size="sm" variant="outline" className="ml-auto h-8 w-9 px-0" onClick={() => setPlaying((v) => !v)} aria-label={playing ? 'Pause animation' : 'Play animation'}>
          {playing ? <Pause className="h-3.5 w-3.5" aria-hidden /> : <Play className="h-3.5 w-3.5" aria-hidden />}
        </Button>
        <Button type="button" size="sm" variant="outline" className="h-8 w-9 px-0" onClick={() => setResetKey((k) => k + 1)} aria-label="Restart animation">
          <RotateCcw className="h-3.5 w-3.5" aria-hidden />
        </Button>
      </div>

      {mode === 'field' && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <svg viewBox="0 0 300 300" className="w-full" role="img" aria-label="Three-phase stator with rotating resultant field vector">
              <defs>{arrowHead('ml-fld', 'fill-emerald-400')}</defs>
              <circle cx={150} cy={150} r={138} fill="none" className="stroke-zinc-700" strokeWidth={5} />
              <circle cx={150} cy={150} r={112} fill="none" className="stroke-zinc-700/70" strokeWidth={2} />
              {[0, 1, 2].map((k) => {
                const alpha = (k * TWO_PI) / 3
                const cur = phaseI(k)
                const a = Math.abs(cur)
                const [x1, y1] = pol(150, 150, 125, alpha - 0.38)
                const [x2, y2] = pol(150, 150, 125, alpha + 0.38)
                const [lx, ly] = pol(150, 150, 148, alpha)
                return (
                  <g key={`w${k}`}>
                    <path
                      d={`M ${x1} ${y1} A 125 125 0 0 0 ${x2} ${y2}`}
                      fill="none"
                      stroke={PHASE_STROKE[k]}
                      strokeWidth={2 + 7 * a}
                      opacity={0.25 + 0.75 * a}
                      strokeLinecap="round"
                    />
                    <text x={lx} y={ly + 4} fontSize={12} textAnchor="middle" className="fill-zinc-300 font-mono">{PHASE_NAME[k]}</text>
                  </g>
                )
              })}
              {[1, 2, 3].map((g) => fieldArrow(thetaM - g * 0.28 * (reversed ? -1 : 1), g))}
              {fieldArrow(thetaM)}
              <circle cx={150} cy={150} r={16} fill="none" className="stroke-zinc-600" strokeWidth={2} />
              <text x={150} y={154} fontSize={10} textAnchor="middle" className="fill-zinc-400 font-mono">rotor</text>
              <text x={150} y={292} fontSize={10} textAnchor="middle" className="fill-zinc-500">
                resultant field B̂ — spins at n_s, {reversed ? 'clockwise (reversed)' : 'counter-clockwise'}
              </text>
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="flex items-center gap-2.5">
                <span className="w-24 shrink-0 text-xs text-muted-foreground">f (supply)</span>
                <Slider min={20} max={70} step={1} value={[f]} onValueChange={(v) => setF(v[0] ?? 50)} className="flex-1" aria-label="Supply frequency in hertz" />
                <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{f} Hz</span>
              </div>
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="w-24 shrink-0 text-xs text-muted-foreground">pole pairs p</span>
                <Slider min={1} max={6} step={1} value={[p]} onValueChange={(v) => setP(v[0] ?? 1)} className="flex-1" aria-label="Number of pole pairs" />
                <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{p}</span>
              </div>
              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setReversed((v) => !v)}
                  aria-pressed={reversed}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                    reversed ? 'border-amber-500/60 bg-amber-500/15 text-amber-300' : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {reversed ? 'Phases swapped — reversed' : 'Swap two phases'}
                </button>
                <span className="text-[11px] text-muted-foreground">swap B and C to reverse the field</span>
              </div>
              <div className="mt-3 border-t border-border/60 pt-2.5">
                <TeX tex={`n_s=\\frac{120f}{p}=\\frac{120\\times ${f}}{${p}}=${fmtRpm(nSync)}\\ \\text{rpm}`} className="text-xs" />
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  Each winding is a pulsating field; their sum is a single field of constant magnitude rotating at
                  synchronous speed. Winding diagram shown two-pole.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phase currents</div>
              <svg viewBox={`0 0 ${TS_W} 120`} className="w-full" role="img" aria-label="Three phase currents offset by 120 degrees">
                {[0, 1, 2].map((k) => {
                  const pts = Array.from({ length: 120 }, (_, i) => {
                    const x = (i / 119) * TS_W
                    const y = 34 - 22 * Math.cos((i / 119) * TWO_PI * 2 - k * TWO_PI / 3)
                    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
                  }).join(' ')
                  return <path key={`s${k}`} d={pts} fill="none" stroke={PHASE_STROKE[k]} strokeWidth={2} opacity={0.9} />
                })}
                {[0, 1, 2].map((k) => {
                  const xc = (((thetaE / TWO_PI) % 2) + 2) % 2 / 2 * TS_W
                  const yv = 34 - 22 * phaseI(k)
                  return <circle key={`d${k}`} cx={xc} cy={yv} r={4} fill={PHASE_STROKE[k]} />
                })}
                <line x1={(((thetaE / TWO_PI) % 2) + 2) % 2 / 2 * TS_W} y1={6} x2={(((thetaE / TWO_PI) % 2) + 2) % 2 * TS_W} y2={62} className="stroke-zinc-500/70" strokeWidth={1} strokeDasharray="4 3" />
                {PHASE_NAME.map((nm, k) => (
                  <text key={`l${nm}`} x={8 + k * 34} y={14} fontSize={10} className={`font-mono ${PHASE_CLS[k]}`}>i_{nm}</text>
                ))}
              </svg>
              <div className="mt-1 flex gap-3 font-mono text-[11px] tabular-nums">
                {[0, 1, 2].map((k) => (
                  <span key={`c${k}`} className={PHASE_CLS[k]}>
                    i_{PHASE_NAME[k]} = {phaseI(k).toFixed(2)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === 'induction' && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <svg viewBox="0 0 300 300" className="w-full" role="img" aria-label="Squirrel-cage rotor bars rotating slower than the stator field arrow">
              <defs>{arrowHead('ml-if', 'fill-emerald-400')}</defs>
              <circle cx={150} cy={150} r={138} fill="none" className="stroke-zinc-700" strokeWidth={5} />
              <circle cx={150} cy={150} r={116} fill="none" className="stroke-zinc-700/70" strokeWidth={2} />
              {[0, 1, 2].map((k) => {
                const alpha = thetaFieldI + (k * TWO_PI) / 3
                const [x1, y1] = pol(150, 150, 104, alpha - 0.3)
                const [x2, y2] = pol(150, 150, 104, alpha + 0.3)
                return <path key={`pw${k}`} d={`M ${x1} ${y1} A 104 104 0 0 0 ${x2} ${y2}`} fill="none" stroke={PHASE_STROKE[k]} strokeWidth={5} opacity={0.35} strokeLinecap="round" />
              })}
              <g>
                {[1, 2].map((g) => {
                  const ang = thetaFieldI - g * 0.3
                  const [x1, y1] = pol(150, 150, 26, ang)
                  const [x2, y2] = pol(150, 150, 92, ang)
                  return <line key={`fg${g}`} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-emerald-400" strokeWidth={2.2} opacity={0.3 / g} />
                })}
                {(() => {
                  const [x1, y1] = pol(150, 150, 26, thetaFieldI)
                  const [x2, y2] = pol(150, 150, 92, thetaFieldI)
                  return <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-emerald-400" strokeWidth={3.2} markerEnd="url(#ml-if)" />
                })()}
              </g>
              <circle cx={150} cy={150} r={98} fill="none" className="stroke-zinc-700/60" strokeWidth={1.4} />
              <circle cx={150} cy={150} r={62} fill="none" className="stroke-zinc-700/60" strokeWidth={1.4} />
              {Array.from({ length: 12 }, (_, i) => {
                const ang = thetaRotI + (i * TWO_PI) / 12
                const [x1, y1] = pol(150, 150, 64, ang)
                const [x2, y2] = pol(150, 150, 96, ang)
                return (
                  <line
                    key={`bar${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    className={i === 0 ? 'stroke-amber-400' : 'stroke-zinc-500'}
                    strokeWidth={i === 0 ? 5 : 4}
                    strokeLinecap="round"
                  />
                )
              })}
              <circle cx={150} cy={150} r={20} fill="none" className="stroke-zinc-600" strokeWidth={2} />
              <circle cx={150} cy={150} r={3} className="fill-zinc-500" />
              <text x={150} y={292} fontSize={10} textAnchor="middle" className="fill-zinc-500 font-mono">
                field n_s = {syncRpm(f, 1)} · rotor = {fmtRpm(nRot)} rpm
              </text>
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Torque–speed curve</span>
                <span className="flex gap-2 font-mono text-[11px] tabular-nums">
                  <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-emerald-300">s = {(slip * 100).toFixed(1)} %</span>
                  <span className="rounded-md border border-border bg-muted/30 px-2 py-0.5 text-muted-foreground">n = {fmtRpm(nRot)} rpm</span>
                </span>
              </div>
              <svg viewBox={`0 0 ${TS_W} ${TS_H}`} className="w-full" role="img" aria-label="Torque versus speed curve with the operating point and breakdown torque marked">
                {/* axes: x = 0..nSync rpm, y = 0..1.3 pu */}
                <line x1={44} y1={10} x2={44} y2={TS_H - 30} className="stroke-zinc-600" strokeWidth={1.4} />
                <line x1={44} y1={TS_H - 30} x2={TS_W - 10} y2={TS_H - 30} className="stroke-zinc-600" strokeWidth={1.4} />
                {[0, 0.25, 0.5, 0.75, 1.0, 1.25].map((ty) => (
                  <g key={`ty${ty}`}>
                    <line x1={44} y1={TS_H - 30 - ty * 180} x2={TS_W - 10} y2={TS_H - 30 - ty * 180} className="stroke-zinc-700/40" strokeWidth={1} />
                    <text x={38} y={TS_H - 27 - ty * 180} fontSize={9.5} textAnchor="end" className="fill-zinc-500 font-mono">{ty.toFixed(2)}</text>
                  </g>
                ))}
                {[0, 0.25, 0.5, 0.75, 1].map((fr) => (
                  <text key={`tx${fr}`} x={44 + fr * (TS_W - 60)} y={TS_H - 14} fontSize={9.5} textAnchor="middle" className="fill-zinc-500 font-mono">
                    {fmtRpm(fr * nSyncI)}
                  </text>
                ))}
                <text x={26} y={16} fontSize={10} className="fill-zinc-400 font-mono">T (pu)</text>
                <text x={TS_W - 80} y={TS_H - 14} fontSize={9.5} className="fill-zinc-500 font-mono">n (rpm)</text>
                {/* breakdown marker */}
                <line x1={44 + (1 - S_BD) * (TS_W - 60)} y1={12} x2={44 + (1 - S_BD) * (TS_W - 60)} y2={TS_H - 30} className="stroke-amber-400/50" strokeWidth={1} strokeDasharray="5 4" />
                <text x={44 + (1 - S_BD) * (TS_W - 60)} y={22} fontSize={9.5} textAnchor="middle" className="fill-amber-300 font-mono">breakdown T_bd</text>
                {/* load curve */}
                <path
                  d={Array.from({ length: 100 }, (_, i) => {
                    const nn = i / 99
                    const tl = tset * nn * nn
                    return `${i === 0 ? 'M' : 'L'} ${(44 + nn * (TS_W - 60)).toFixed(1)} ${(TS_H - 30 - Math.min(tl, 1.3) * 180).toFixed(1)}`
                  }).join(' ')}
                  fill="none"
                  className="stroke-amber-400"
                  strokeWidth={1.6}
                  strokeDasharray="6 4"
                />
                {/* torque curve */}
                <path
                  d={Array.from({ length: 200 }, (_, i) => {
                    const nn = i / 199
                    const s = 1 - nn
                    return `${i === 0 ? 'M' : 'L'} ${(44 + nn * (TS_W - 60)).toFixed(1)} ${(TS_H - 30 - Math.min(klossTorque(s), 1.3) * 180).toFixed(1)}`
                  }).join(' ')}
                  fill="none"
                  className="stroke-emerald-400"
                  strokeWidth={2.2}
                />
                {/* operating point */}
                <line x1={44} y1={TS_H - 30 - tOp * 180} x2={44 + (1 - slip) * (TS_W - 60)} y2={TS_H - 30 - tOp * 180} className="stroke-emerald-400/40" strokeWidth={1} strokeDasharray="3 3" />
                <line x1={44 + (1 - slip) * (TS_W - 60)} y1={TS_H - 30 - tOp * 180} x2={44 + (1 - slip) * (TS_W - 60)} y2={TS_H - 30} className="stroke-emerald-400/40" strokeWidth={1} strokeDasharray="3 3" />
                <motion.circle
                  cx={44 + (1 - slip) * (TS_W - 60)}
                  cy={TS_H - 30 - tOp * 180}
                  r={5}
                  className="fill-emerald-300"
                  animate={reduce ? undefined : { opacity: [1, 0.55, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                <text x={44 + (1 - slip) * (TS_W - 60) + 8} y={TS_H - 30 - tOp * 180 - 6} fontSize={9.5} className="fill-emerald-300 font-mono">operating point</text>
                <text x={62} y={TS_H - 44} fontSize={9.5} className="fill-zinc-500 font-mono">start</text>
                <text x={TS_W - 52} y={TS_H - 44} fontSize={9.5} className="fill-zinc-500 font-mono">n_s</text>
              </svg>
            </div>
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="flex items-center gap-2.5">
                <span className="w-24 shrink-0 text-xs text-muted-foreground">f (supply)</span>
                <Slider min={20} max={70} step={1} value={[f]} onValueChange={(v) => setF(v[0] ?? 60)} className="flex-1" aria-label="Supply frequency in hertz" />
                <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{f} Hz</span>
              </div>
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="w-24 shrink-0 text-xs text-muted-foreground">load (drag)</span>
                <Slider min={0} max={1.2} step={0.01} value={[tset]} onValueChange={(v) => setTset(v[0] ?? 0.5)} className="flex-1" aria-label="Mechanical load as a fraction of breakdown torque" />
                <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{tset.toFixed(2)} pu</span>
              </div>
              <div className="mt-3 border-t border-border/60 pt-2.5">
                <TeX tex={`s=\\frac{n_s-n}{n_s}=${(slip * 100).toFixed(1)}\\%,\\qquad f_{\\text{rotor}}=s\\,f=${fmtRpm(slip * f)}\\ \\text{Hz}`} className="text-xs" />
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  The bars chase the field but never catch it — no slip, no induced bar current, no torque. Push the
                  drag past the breakdown point and the operating point slides back down the curve toward stall.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === 'sync' && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <svg viewBox="0 0 300 300" className="w-full" role="img" aria-label="Synchronous machine rotor magnet tracking the stator field with load angle delta">
              <defs>{arrowHead('ml-sf', 'fill-emerald-400')}{arrowHead('ml-sr', 'fill-amber-400')}</defs>
              <circle cx={150} cy={150} r={138} fill="none" className="stroke-zinc-700" strokeWidth={5} />
              <circle cx={150} cy={150} r={106} fill="none" className="stroke-zinc-700/70" strokeWidth={2} />
              <g>
                {[1, 2].map((g) => {
                  const ang = thetaSyncM - g * 0.25
                  const [x1, y1] = pol(150, 150, 30, ang)
                  const [x2, y2] = pol(150, 150, 98, ang)
                  return <line key={`sg${g}`} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-emerald-400" strokeWidth={2} opacity={0.3 / g} />
                })}
                {(() => {
                  const [x1, y1] = pol(150, 150, 30, thetaSyncM)
                  const [x2, y2] = pol(150, 150, 98, thetaSyncM)
                  return <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-emerald-400" strokeWidth={3.2} markerEnd="url(#ml-sf)" />
                })()}
              </g>
              {(() => {
                const [x1, y1] = pol(150, 150, 30, thetaSyncM - (delta / DEG))
                const [x2, y2] = pol(150, 150, 98, thetaSyncM - (delta / DEG))
                return (
                  <g>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-amber-400" strokeWidth={3.2} markerEnd="url(#ml-sr)" />
                    <text x={x2 + 6} y={y2 - 4} fontSize={10} className="fill-amber-300 font-mono">rotor (magnet)</text>
                  </g>
                )
              })()}
              {(() => {
                const [ex, ey] = pol(150, 150, 120, thetaSyncM - (delta / DEG) / 2)
                return (
                  <text x={ex} y={ey} fontSize={10} textAnchor="middle" className="fill-zinc-300 font-mono">
                    δ = {Math.abs(delta)}°
                  </text>
                )
              })()}
              <text x={150} y={286} fontSize={10} textAnchor="middle" className="fill-zinc-500">
                {genMode ? 'rotor leads the field — generating' : 'rotor lags the field — motoring'} · s = 0
              </text>
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="flex items-center gap-2.5">
                <span className="w-24 shrink-0 text-xs text-muted-foreground">f (supply)</span>
                <Slider min={20} max={70} step={1} value={[f]} onValueChange={(v) => setF(v[0] ?? 60)} className="flex-1" aria-label="Supply frequency in hertz" />
                <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{f} Hz</span>
              </div>
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="w-24 shrink-0 text-xs text-muted-foreground">pole pairs p</span>
                <Slider min={1} max={4} step={1} value={[p]} onValueChange={(v) => setP(v[0] ?? 2)} className="flex-1" aria-label="Number of pole pairs" />
                <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{p}</span>
              </div>
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="w-24 shrink-0 text-xs text-muted-foreground">load angle δ</span>
                <Slider min={-89} max={89} step={1} value={[delta]} onValueChange={(v) => setDelta(v[0] ?? 25)} className="flex-1" aria-label="Load angle delta in degrees, negative for generator action" />
                <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{delta}°</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border/60 pt-2.5">
                <TeX tex={`n_s=\\frac{120f}{p}=${fmtRpm(nSync)}\\ \\text{rpm}`} className="text-xs" />
                <TeX tex={`P=P_{\\max}\\sin\\delta=${(pPu * 100).toFixed(0)}\\%\\ \\text{of } P_{\\max}`} className="text-xs" />
                <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-300">zero slip — rotor locked to field</span>
                {Math.abs(delta) > 60 && (
                  <span className="rounded-md border border-rose-500/40 bg-rose-500/10 px-2 py-0.5 font-mono text-[11px] text-rose-300">
                    nearing pull-out at δ = 90°
                  </span>
                )}
              </div>
            </div>
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Power vs load angle</span>
                <span className="font-mono text-[11px] tabular-nums text-muted-foreground">P = P_max sin δ</span>
              </div>
              <svg viewBox={`0 0 ${TS_W} 150`} className="w-full" role="img" aria-label="Power transfer versus load angle with pull-out limit at ninety degrees">
                <line x1={40} y1={130} x2={TS_W - 10} y2={130} className="stroke-zinc-600" strokeWidth={1.4} />
                <line x1={40} y1={14} x2={40} y2={130} className="stroke-zinc-600" strokeWidth={1.4} />
                <path
                  d={Array.from({ length: 100 }, (_, i) => {
                    const dd = (i / 99) * 90
                    return `${i === 0 ? 'M' : 'L'} ${(40 + (dd / 90) * (TS_W - 70)).toFixed(1)} ${(130 - Math.sin((dd * Math.PI) / 180) * 100).toFixed(1)}`
                  }).join(' ')}
                  fill="none"
                  className="stroke-emerald-400"
                  strokeWidth={2.2}
                />
                <line x1={TS_W - 30} y1={14} x2={TS_W - 30} y2={130} className="stroke-rose-400/60" strokeWidth={1.2} strokeDasharray="5 4" />
                <text x={TS_W - 30} y={11} fontSize={9.5} textAnchor="middle" className="fill-rose-300 font-mono">pull-out</text>
                {(() => {
                  const ad = Math.abs(delta)
                  const x = 40 + (ad / 90) * (TS_W - 70)
                  const y = 130 - Math.abs(pPu) * 100
                  return (
                    <g>
                      <line x1={x} y1={130} x2={x} y2={y} className="stroke-amber-400/50" strokeWidth={1} strokeDasharray="3 3" />
                      <circle cx={x} cy={y} r={5} className="fill-amber-300" />
                      <text x={x + 7} y={y - 5} fontSize={9.5} className="fill-amber-300 font-mono">δ = {delta}°</text>
                    </g>
                  )
                })()}
                {[0, 30, 60, 90].map((dd) => (
                  <text key={`dl${dd}`} x={40 + (dd / 90) * (TS_W - 70)} y={144} fontSize={9.5} textAnchor="middle" className="fill-zinc-500 font-mono">{dd}°</text>
                ))}
              </svg>
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                The rotor sits at exactly n_s — but its magnetic axis leans by δ against the stator field. Past
                δ = 90° the machine cannot hold synchronism and pole-slips: the classic blackout scenario.
              </p>
            </div>
          </div>
        </div>
      )}

      {mode === 'dc' && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
          <div className="rounded-xl border border-border/80 bg-background/50 p-3">
            <svg viewBox="0 0 300 300" className="w-full" role="img" aria-label="DC motor with brushes, split-ring commutator and armature coil">
              <rect x={118} y={8} width={64} height={34} rx={6} fill="rgba(251,191,36,0.10)" className="stroke-amber-500/60" strokeWidth={1.6} />
              <text x={150} y={30} fontSize={13} textAnchor="middle" className="fill-amber-300 font-mono">N</text>
              <rect x={118} y={258} width={64} height={34} rx={6} fill="rgba(45,212,191,0.10)" className="stroke-teal-500/60" strokeWidth={1.6} />
              <text x={150} y={280} fontSize={13} textAnchor="middle" className="fill-teal-300 font-mono">S</text>
              <circle cx={150} cy={150} r={96} fill="none" className="stroke-zinc-700" strokeWidth={2} />
              {/* conductors */}
              {[0, Math.PI].map((off, ci) => {
                const ang = thetaDc + off
                const [cx2, cy2] = pol(150, 150, 78, ang)
                const out = ci === 0 ? commA : !commA
                return (
                  <g key={`cond${ci}`}>
                    <circle cx={cx2} cy={cy2} r={11} fill="rgba(24,24,27,0.9)" className={out ? 'stroke-amber-400' : 'stroke-teal-400'} strokeWidth={2} />
                    {out ? (
                      <circle cx={cx2} cy={cy2} r={3} className="fill-amber-400" />
                    ) : (
                      <path d={`M ${cx2 - 4} ${cy2 - 4} L ${cx2 + 4} ${cy2 + 4} M ${cx2 + 4} ${cy2 - 4} L ${cx2 - 4} ${cy2 + 4}`} className="stroke-teal-400" strokeWidth={2} />
                    )}
                  </g>
                )
              })}
              <path
                d={`M ${pol(150, 150, 78, thetaDc).join(' ')} A 78 78 0 0 0 ${pol(150, 150, 78, thetaDc + Math.PI).join(' ')}`}
                fill="none"
                className="stroke-zinc-600/50"
                strokeWidth={2}
              />
              {/* commutator */}
              {[0, Math.PI].map((off) => {
                const a0 = thetaDc + off - Math.PI / 2 + 0.09
                const a1 = thetaDc + off + Math.PI / 2 - 0.09
                const [x1, y1] = pol(150, 150, 30, a0)
                const [x2, y2] = pol(150, 150, 30, a1)
                const isA = off === 0
                return (
                  <path
                    key={`seg${off}`}
                    d={`M ${x1} ${y1} A 30 30 0 0 0 ${x2} ${y2}`}
                    fill="none"
                    className={isA === commA ? 'stroke-emerald-400' : 'stroke-zinc-500'}
                    strokeWidth={7}
                    strokeLinecap="butt"
                    opacity={isA === commA ? 0.95 : 0.6}
                  />
                )
              })}
              <circle cx={150} cy={150} r={44} fill="none" className="stroke-zinc-700/50" strokeWidth={1} />
              {/* brushes */}
              <rect x={70} y={144} width={18} height={12} rx={2} className="fill-zinc-600 stroke-zinc-400" strokeWidth={1.2} />
              <rect x={212} y={144} width={18} height={12} rx={2} className="fill-zinc-600 stroke-zinc-400" strokeWidth={1.2} />
              <text x={64} y={168} fontSize={11} textAnchor="middle" className="fill-zinc-300 font-mono">+</text>
              <text x={236} y={168} fontSize={11} textAnchor="middle" className="fill-zinc-300 font-mono">−</text>
              <text x={150} y={296} fontSize={10} textAnchor="middle" className="fill-zinc-500">
                dot = current out of page · cross = into page · brushes swap them every half turn
              </text>
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-border/80 bg-background/50 p-3">
              <div className="flex items-center gap-2.5">
                <span className="w-24 shrink-0 text-xs text-muted-foreground">V (armature)</span>
                <Slider min={0} max={240} step={1} value={[vArm]} onValueChange={(v) => setVArm(v[0] ?? 220)} className="flex-1" aria-label="Armature voltage in volts" />
                <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{vArm} V</span>
              </div>
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="w-24 shrink-0 text-xs text-muted-foreground">load torque</span>
                <Slider min={0} max={1.2} step={0.01} value={[tload]} onValueChange={(v) => setTload(v[0] ?? 1)} className="flex-1" aria-label="Load torque per unit of rated" />
                <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">{tload.toFixed(2)} pu</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border/60 pt-2.5">
                <TeX tex={`E_b=k\\phi\\,\\omega=${eb.toFixed(1)}\\ \\text{V}`} className="text-xs" />
                <TeX tex={`I_a=\\frac{V-E_b}{R_a}=${ia.toFixed(2)}\\ \\text{A}`} className="text-xs" />
                <span className={`rounded-md border px-2 py-0.5 font-mono text-[11px] tabular-nums ${stalled ? 'border-rose-500/40 bg-rose-500/10 text-rose-300' : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'}`}>
                  {stalled ? 'stalled — back-EMF cannot rise' : `n = ${fmtRpm(nDc)} rpm`}
                </span>
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                Speed settles where the back-EMF E_b = kφω leaves just enough volt-drop across R_a to supply the
                load current — raise V and the whole curve lifts, raise load and it droops. The commutator keeps
                every armature current producing torque in the same rotational direction.
              </p>
            </div>
            <div className="flex items-start gap-2.5 rounded-xl border border-border/80 bg-background/50 p-3">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden />
              <div className="w-full">
                <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>armature voltage vs back-EMF</span>
                  <span className="font-mono tabular-nums">V = {vArm} V · E_b = {eb.toFixed(1)} V</span>
                </div>
                <div className="h-3.5 w-full overflow-hidden rounded-full bg-muted" role="img" aria-label={`Armature voltage ${vArm} volts shown as a bar with back EMF ${eb.toFixed(0)} volts portion highlighted`}>
                  <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-400" style={{ width: `${Math.min(100, (eb / Math.max(vArm, 1)) * 100)}%` }} />
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  The emerald share is turned into mechanical power; the rest is burned in R_a — which is why a DC
                  motor slows down as you load it.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          in <span className="font-medium text-foreground">Rotating field</span>, press{' '}
          <span className="font-medium text-foreground">Swap two phases</span> — the resultant arrow stops and
          reverses without touching a single winding; that is how a crane reverses an induction motor. In{' '}
          <span className="font-medium text-foreground">Induction motor</span>, drag the load past 1.0 pu: the
          operating point rides over the breakdown peak and slides toward stall — start current, no torque. Then
          in <span className="font-medium text-foreground">Synchronous</span>, push δ toward 90° and watch the power
          curve flatten at exactly P_max.
        </span>
      </div>
    </div>
  )
}
