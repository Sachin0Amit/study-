'use client'

import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Activity, CircuitBoard, Crosshair, Eye, EyeOff, Lightbulb, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Geometry + device model                                             */
/* ------------------------------------------------------------------ */

const W = 620
const H = 430
const PL = 56
const PR = 16
const PT = 14
const PB = 32
const PW = W - PL - PR
const PH = H - PT - PB

const VT = 0.02585 // thermal voltage at ~300 K
const VCE_SAT = 0.2
const VCE_KNEE = 0.3
const IB_STEPS = [5, 10, 15, 20, 25] // µA — the stepped base-current family

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v))
}

function niceTicks(lo: number, hi: number, target = 6): number[] {
  const span = hi - lo
  const raw = span / target
  const mag = 10 ** Math.floor(Math.log10(raw))
  const norm = raw / mag
  const stepMul = norm < 1.5 ? 1 : norm < 2.2 ? 2 : norm < 3.5 ? 2.5 : norm < 7.5 ? 5 : 10
  const step = stepMul * mag
  const out: number[] = []
  for (let t = Math.ceil(lo / step) * step; t <= hi + 1e-12; t += step) {
    out.push(Math.abs(t) < step * 1e-6 ? 0 : Math.round(t / step) * step)
  }
  return out
}

function fc(v: number, d = 2): string {
  return String(Number(v.toFixed(d)))
}

/** 2N2222-flavoured output characteristic: knee + optional Early tilt. */
function icOf(vce: number, ibA: number, beta: number, earlyOn: boolean, va: number): number {
  const knee = vce / (vce + VCE_KNEE)
  const tilt = earlyOn ? 1 + vce / va : 1
  return beta * ibA * knee * tilt
}

/** Sampled path for one I_B curve. */
function familyPath(
  xToPx: (x: number) => number,
  yToPx: (y: number) => number,
  xMax: number,
  ibA: number,
  beta: number,
  earlyOn: boolean,
  va: number
): string {
  let d = ''
  const n = 240
  for (let i = 0; i <= n; i++) {
    const vce = (xMax * i) / n
    const ic = icOf(vce, ibA, beta, earlyOn, va)
    d += `${i === 0 ? 'M' : 'L'}${xToPx(vce).toFixed(2)},${yToPx(ic).toFixed(2)}`
  }
  return d
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

interface TPreset {
  key: string
  label: string
  beta: number
  vcc: number
  rc: number
  qIc: number
  ibm: number
  earlyOn: boolean
  va: number
  r1: number
  r2: number
  re: number
}

const PRESETS: TPreset[] = [
  {
    key: 'midpoint',
    label: 'Midpoint bias',
    beta: 150,
    vcc: 12,
    rc: 1200,
    qIc: 5,
    ibm: 8,
    earlyOn: false,
    va: 50,
    r1: 10,
    r2: 11,
    re: 1,
  },
  {
    key: 'starved',
    label: 'Starved (cutoff)',
    beta: 150,
    vcc: 12,
    rc: 1200,
    qIc: 0.4,
    ibm: 10,
    earlyOn: false,
    va: 50,
    r1: 68,
    r2: 8,
    re: 2,
  },
  {
    key: 'sat',
    label: 'Saturated switch',
    beta: 100,
    vcc: 12,
    rc: 470,
    qIc: 24,
    ibm: 0,
    earlyOn: false,
    va: 50,
    r1: 4.7,
    r2: 47,
    re: 0.22,
  },
  {
    key: 'hot',
    label: 'Hot Q-point (Early effect)',
    beta: 200,
    vcc: 15,
    rc: 1000,
    qIc: 9,
    ibm: 6,
    earlyOn: true,
    va: 40,
    r1: 8.2,
    r2: 12,
    re: 0.68,
  },
]

export default function TransistorLab() {
  const reduce = useReducedMotion()
  const [beta, setBeta] = useState(150)
  const [vcc, setVcc] = useState(12)
  const [rc, setRc] = useState(1200)
  const [qIc, setQIc] = useState(5) // mA
  const [ibm, setIbm] = useState(8) // µA signal drive
  const [earlyOn, setEarlyOn] = useState(false)
  const [va, setVa] = useState(50)
  const [r1, setR1] = useState(10) // kΩ divider
  const [r2, setR2] = useState(11)
  const [re, setRe] = useState(1)

  const svgRef = useRef<SVGSVGElement | null>(null)
  const dragging = useRef(false)

  /* ---------------- load line + Q point ------------------------------- */

  const iLineMax = (vcc / rc) * 1000 // mA at V_CE = 0
  const icQ = Math.min(qIc, iLineMax * 0.9995) // mA, clamped to the line
  const vceQ = Math.max(VCE_SAT, vcc - (icQ * 1e-3) * rc)
  const region =
    icQ * 1e-3 < (iLineMax * 1e-3) * 0.02
      ? 'cutoff'
      : vceQ <= VCE_SAT + 0.15
        ? 'saturation'
        : 'active'

  /* ---------------- plot ranges --------------------------------------- */

  const xMax = Math.max(vcc * 1.08, 2)
  const yMax = Math.max(
    1.15 * icOf(xMax, IB_STEPS[4] * 1e-6, beta, earlyOn, va) * 1000,
    iLineMax,
    1
  )
  const xToPx = (x: number) => PL + (x / xMax) * PW
  const yToPx = (y: number) => PT + ((yMax - y) / yMax) * PH
  const xTicks = niceTicks(0, xMax, 8)
  const yTicks = niceTicks(0, yMax, 6)

  /* ---------------- clipping preview ---------------------------------- */

  const ibQ = (icQ * 1e-3) / beta // A
  const iDrive = ibm * 1e-6
  const scope = (() => {
    const N = 240
    const ideal: number[] = []
    const actual: number[] = []
    let clippedTop = false
    let clippedBottom = false
    for (let i = 0; i <= N; i++) {
      const s = Math.sin((2 * Math.PI * 2 * i) / N) // two cycles
      const icLin = beta * (ibQ + iDrive * s)
      const vIdeal = vcc - icLin * rc
      if (vIdeal > vcc) clippedTop = true
      if (vIdeal < VCE_SAT) clippedBottom = true
      ideal.push(vIdeal)
      actual.push(clamp(vIdeal, VCE_SAT, vcc))
    }
    return { ideal, actual, clippedTop, clippedBottom }
  })()

  /* ---------------- bias network --------------------------------------- */

  const vbb = (vcc * r2) / (r1 + r2)
  const rbb = (r1 * r2) / (r1 + r2)
  const ieDiv = Math.max(0, (vbb - 0.7) / re) // mA (kΩ, V)
  const alpha = beta / (beta + 1)
  const icDiv = ieDiv * alpha
  const vceDiv = vcc - icDiv * 1e-3 * rc - ieDiv * 1e-3 * re * 1000
  const sFactor = ((1 + beta) * (rbb + re)) / ((1 + beta) * re + rbb)

  /* ---------------- small signal --------------------------------------- */

  const icA = icQ * 1e-3
  const gm = icA / VT
  const rpi = (beta * VT) / icA
  const av = -gm * rc

  /* ---------------- Q-point dragging ----------------------------------- */

  const clientToMath = (clientX: number, clientY: number): { mx: number; my: number } | null => {
    const svg = svgRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return null
    const px = ((clientX - rect.left) / rect.width) * W
    const py = ((clientY - rect.top) / rect.height) * H
    return {
      mx: (px - PL) / PW * xMax,
      my: (1 - (py - PT) / PH) * yMax,
    }
  }

  const moveQ = (clientX: number, clientY: number) => {
    const p = clientToMath(clientX, clientY)
    if (!p) return
    // orthogonal projection of the pointer onto the load line V_CE + I_C·R_C = V_CC
    const a = p.mx // V
    const b = p.my * 1e-3 // A
    const vceStar = (vcc + rc * rc * a - rc * b) / (1 + rc * rc)
    const vceClamped = clamp(vceStar, 0, vcc)
    const icLine = ((vcc - vceClamped) / rc) * 1000
    setQIc(Math.round(clamp(icLine, 0, iLineMax * 0.9995) * 100) / 100)
  }

  const onPointerDown = (e: React.PointerEvent<SVGGElement>) => {
    e.preventDefault()
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    moveQ(e.clientX, e.clientY)
  }
  const onPointerMove = (e: React.PointerEvent<SVGGElement>) => {
    if (dragging.current) moveQ(e.clientX, e.clientY)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  const onQKeyDown = (e: React.KeyboardEvent) => {
    const stepFrac = e.shiftKey ? 0.05 : 0.01
    let next: number | null = null
    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') next = qIc + iLineMax * stepFrac
    else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') next = qIc - iLineMax * stepFrac
    if (next === null) return
    e.preventDefault()
    setQIc(Math.round(clamp(next, 0, iLineMax * 0.9995) * 100) / 100)
  }

  /* ---------------- render helpers ------------------------------------- */

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

  const sliderRow = (
    key: string,
    label: string,
    hint: string,
    value: string,
    min: number,
    max: number,
    step: number,
    val: number,
    set: (v: number) => void,
    aria: string
  ) => (
    <div key={key}>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <span className="font-mono text-xs tabular-nums text-emerald-300">{value}</span>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={[val]}
        onValueChange={(v) => set(v[0] ?? val)}
        aria-label={aria}
        className="mt-2"
      />
      <p className="mt-1 text-[10px] leading-tight text-muted-foreground">{hint}</p>
    </div>
  )

  /* ---------------- JSX ------------------------------------------------- */

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <CircuitBoard className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-foreground">BJT Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Electronics Ch 13–14: output characteristics, the DC load line and a draggable Q-point
            — drag it off-centre and hear the amplifier clip before you ever build it.
          </p>
        </div>
        <Button
          size="sm"
          variant="ghost"
          aria-label="Reset lab to midpoint bias"
          onClick={() => {
            const p = PRESETS[0]
            setBeta(p.beta)
            setVcc(p.vcc)
            setRc(p.rc)
            setQIc(p.qIc)
            setIbm(p.ibm)
            setEarlyOn(p.earlyOn)
            setVa(p.va)
            setR1(p.r1)
            setR2(p.r2)
            setRe(p.re)
          }}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
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
              setBeta(p.beta)
              setVcc(p.vcc)
              setRc(p.rc)
              setQIc(p.qIc)
              setIbm(p.ibm)
              setEarlyOn(p.earlyOn)
              setVa(p.va)
              setR1(p.r1)
              setR2(p.r2)
              setRe(p.re)
            }}
            aria-label={`Load preset: ${p.label}`}
            className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-2.5 py-1 text-xs text-amber-200 transition-colors hover:border-amber-500/60 hover:bg-amber-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* ---------------- output characteristics ---------------- */}
        <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Output characteristics
            </p>
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-0.5 w-4 rounded bg-emerald-400" /> I<sub>B</sub> family
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-0.5 w-4 rounded bg-amber-400" /> load line
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-300" /> Q
            </span>
          </div>
          <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            className="w-full touch-none select-none"
            role="img"
            aria-label="BJT output characteristics: five stepped base-current curves of collector current versus collector-emitter voltage, with the DC load line and a draggable Q-point."
          >
            <defs>
              <clipPath id="bjt-plot-clip">
                <rect x={PL} y={PT} width={PW} height={PH} rx={6} />
              </clipPath>
            </defs>
            <rect x={PL} y={PT} width={PW} height={PH} rx={6} className="fill-zinc-950/40" />
            {xTicks.map((t) => (
              <g key={`gx-${t}`}>
                <line
                  x1={xToPx(t)}
                  y1={PT}
                  x2={xToPx(t)}
                  y2={PT + PH}
                  className="stroke-zinc-500/15"
                  strokeWidth={1}
                />
                <text
                  x={xToPx(t)}
                  y={H - PB + 16}
                  textAnchor="middle"
                  fontSize={11}
                  className="fill-zinc-500 font-mono"
                >
                  {fc(t, t % 1 === 0 ? 0 : 1)}
                </text>
              </g>
            ))}
            {yTicks.map((t) => (
              <g key={`gy-${t}`}>
                <line
                  x1={PL}
                  y1={yToPx(t)}
                  x2={PL + PW}
                  y2={yToPx(t)}
                  className="stroke-zinc-500/15"
                  strokeWidth={1}
                />
                <text
                  x={PL - 7}
                  y={yToPx(t) + 4}
                  textAnchor="end"
                  fontSize={10}
                  className="fill-zinc-500 font-mono"
                >
                  {fc(t, t >= 10 ? 0 : 1)}
                </text>
              </g>
            ))}
            <line
              x1={PL}
              y1={yToPx(0)}
              x2={PL + PW}
              y2={yToPx(0)}
              className="stroke-zinc-500/50"
              strokeWidth={1.5}
            />
            <line
              x1={PL}
              y1={PT}
              x2={PL}
              y2={PT + PH}
              className="stroke-zinc-500/50"
              strokeWidth={1.5}
            />
            <text
              x={PL + PW - 4}
              y={yToPx(0) - 7}
              textAnchor="end"
              fontSize={12}
              className="fill-zinc-400 italic"
            >
              V_CE (V)
            </text>
            <text x={PL + 6} y={PT + 12} fontSize={12} className="fill-zinc-400 italic">
              I_C (mA)
            </text>

            <g clipPath="url(#bjt-plot-clip)">
              {/* region tints + labels */}
              <rect x={PL} y={PT} width={xToPx(0.5) - PL} height={PH} className="fill-rose-500/5" />
              <rect
                x={PL}
                y={yToPx(yMax * 0.04)}
                width={PW}
                height={yToPx(0) - yToPx(yMax * 0.04)}
                className="fill-amber-500/5"
              />
              <text x={PL + 6} y={PT + PH - 10} fontSize={10} className="fill-rose-300 font-mono">
                saturation
              </text>
              <text
                x={PL + 70}
                y={yToPx(yMax * 0.02) + 3}
                fontSize={10}
                className="fill-amber-300 font-mono"
              >
                cutoff
              </text>
              <text
                x={PL + PW * 0.42}
                y={yToPx(yMax * 0.55)}
                fontSize={11}
                className="fill-emerald-300/50 font-mono"
              >
                active region
              </text>

              {/* the I_B family */}
              {IB_STEPS.map((ib, i) => (
                <motion.path
                  key={`ib-${ib}`}
                  d={familyPath(xToPx, yToPx, xMax, ib * 1e-6, beta, earlyOn, va)}
                  className="stroke-emerald-400"
                  strokeWidth={i === IB_STEPS.length - 1 ? 2.4 : 1.8}
                  fill="none"
                  strokeLinecap="round"
                  style={{ opacity: 0.45 + (0.55 * i) / (IB_STEPS.length - 1) }}
                  initial={reduce ? false : { pathLength: 0, opacity: 0.1 }}
                  animate={
                    reduce
                      ? { opacity: 0.45 + (0.55 * i) / (IB_STEPS.length - 1) }
                      : { pathLength: 1, opacity: 0.45 + (0.55 * i) / (IB_STEPS.length - 1) }
                  }
                  transition={reduce ? { duration: 0 } : { duration: 0.5 + i * 0.08, ease: 'easeOut' }}
                />
              ))}
              {IB_STEPS.map((ib) => (
                <text
                  key={`ibl-${ib}`}
                  x={PL + PW - 4}
                  y={yToPx(icOf(xMax, ib * 1e-6, beta, earlyOn, va) * 1000) + 4}
                  textAnchor="end"
                  fontSize={9.5}
                  className="fill-emerald-300/80 font-mono"
                >
                  {`${ib} µA`}
                </text>
              ))}

              {/* the DC load line */}
              <line
                x1={xToPx(0)}
                y1={yToPx(iLineMax)}
                x2={xToPx(vcc)}
                y2={yToPx(0)}
                className="stroke-amber-400"
                strokeWidth={2}
                strokeDasharray="8 5"
              />
            </g>

            {/* the draggable Q point */}
            <g
              transform={`translate(${xToPx(vceQ)},${yToPx(icQ)})`}
              tabIndex={0}
              role="slider"
              aria-label="Quiescent point on the load line. Use arrow keys to move it; hold Shift for bigger steps."
              aria-valuemin={0}
              aria-valuemax={Number(iLineMax.toFixed(1))}
              aria-valuenow={Number(icQ.toFixed(2))}
              aria-valuetext={`Q point: collector current ${fc(icQ)} milliamps, collector-emitter voltage ${fc(vceQ)} volts, ${region} region`}
              onKeyDown={onQKeyDown}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              className="group cursor-grab outline-none active:cursor-grabbing"
            >
              <circle r={22} className="fill-transparent" />
              <circle
                r={14}
                className="fill-transparent stroke-emerald-400 opacity-0 transition-opacity group-focus-visible:opacity-80"
                strokeWidth={2}
              />
              <motion.circle
                r={10}
                className="fill-emerald-400/20 stroke-emerald-400"
                strokeWidth={1.5}
                animate={reduce ? undefined : { opacity: [0.85, 0.25, 0.85] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              />
              <circle r={5} className="fill-emerald-300" />
              <text x={12} y={-12} fontSize={13} className="fill-emerald-300 font-mono font-bold">
                Q
              </text>
            </g>
          </svg>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-200">
              <Crosshair className="h-3 w-3" />
              <TeX tex={`V_{CE,Q} = ${fc(vceQ)}\\,\\mathrm{V}`} />
            </span>
            <span className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 font-mono text-[11px] text-teal-200">
              <TeX tex={`I_{C,Q} = ${fc(icQ)}\\,\\mathrm{mA}`} />
            </span>
            <span
              className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] ${
                region === 'active'
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                  : region === 'saturation'
                    ? 'border-rose-500/40 bg-rose-500/10 text-rose-200'
                    : 'border-amber-500/40 bg-amber-500/10 text-amber-200'
              }`}
            >
              {region === 'active' ? 'active region' : region === 'saturation' ? 'saturated' : 'cut off'}
            </span>
            <span className="text-[11px] text-muted-foreground">
              drag Q along the load line, or focus it and use the arrow keys
            </span>
          </div>
        </div>

        {/* ---------------- clipping preview scope ---------------- */}
        <div className="flex min-w-0 flex-col gap-4">
          <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
            <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                <Activity className="h-3.5 w-3.5 text-emerald-400" />
                Clipping preview
              </p>
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="h-0.5 w-4 rounded border-t-2 border-dashed border-amber-400" /> ideal
                swing
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="h-0.5 w-4 rounded bg-emerald-400" /> v_out (V_CE)
              </span>
            </div>
            <ClippingScope ideal={scope.ideal} actual={scope.actual} vcc={vcc} />
            <div className="mt-2">
              {sliderRow(
                'ibm',
                'Signal drive (base-current swing)',
                'a sine of I_BQ ± this much µA, mapped through the load line',
                `± ${ibm} µA`,
                0,
                40,
                1,
                ibm,
                (v) => setIbm(Math.round(v)),
                'Signal drive amplitude in microamps'
              )}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {scope.clippedBottom ? (
                <span className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-2.5 py-1 font-mono text-[11px] text-rose-200">
                  bottom clip: saturation — output floor at V_CE(sat) ≈ 0.2 V
                </span>
              ) : (
                <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-2.5 py-1 font-mono text-[11px] text-emerald-200/70">
                  no saturation clip
                </span>
              )}
              {scope.clippedTop ? (
                <span className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-2.5 py-1 font-mono text-[11px] text-rose-200">
                  top clip: cutoff — output ceiling at V_CC, I_C reaches zero
                </span>
              ) : (
                <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-2.5 py-1 font-mono text-[11px] text-emerald-200/70">
                  no cutoff clip
                </span>
              )}
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
              The common-emitter stage inverts: the input&apos;s positive peak pulls I_C up and drives
              V_CE down toward saturation (the flat floor); the negative peak starves the transistor
              and V_CE ceilings at V_CC (cutoff).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stat('ibq', 'I_BQ', `${fc((icQ * 1000) / beta, 1)} µA`, 'quiescent base current', 'amber')}
            {stat('icq', 'I_CQ', `${fc(icQ)} mA`, 'β × I_BQ at the Q-point', 'emerald')}
            {stat('vd', 'V_CE(headroom)', `${fc(vcc - vceQ)} V`, 'swing room before saturation', 'teal')}
            {stat(
              'swing',
              'Max output swing',
              `± ${fc(Math.min(vceQ - VCE_SAT, vcc - vceQ))} V`,
              'limited by whichever clip comes first',
              'rose'
            )}
          </div>
        </div>
      </div>

      {/* ---------------- DC bias controls ---------------- */}
      <div className="mt-4 rounded-xl border border-border bg-background/50 p-3 sm:p-4">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {sliderRow(
            'beta',
            'Current gain β',
            '2N2222-ish spread — every device is different',
            String(Math.round(beta)),
            50,
            300,
            5,
            beta,
            (v) => setBeta(Math.round(v)),
            'Beta current gain'
          )}
          {sliderRow(
            'vcc',
            'Supply V_CC',
            'the load line pivots on it',
            `${fc(vcc, 1)} V`,
            2,
            24,
            0.5,
            vcc,
            (v) => setVcc(Math.round(v * 2) / 2),
            'Collector supply voltage'
          )}
          {sliderRow(
            'rc',
            'Collector resistor R_C',
            'its slope is the load line',
            `${rc} Ω`,
            100,
            5000,
            10,
            rc,
            (v) => setRc(Math.round(v)),
            'Collector resistor'
          )}
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium text-muted-foreground">Early effect</span>
              <Button
                size="sm"
                variant="outline"
                aria-pressed={earlyOn}
                aria-label={earlyOn ? 'Disable Early effect tilt on the curves' : 'Enable Early effect tilt on the curves'}
                onClick={() => setEarlyOn((v) => !v)}
                className={`h-7 ${
                  earlyOn ? 'border-teal-500/60 bg-teal-500/15 text-teal-300 hover:bg-teal-500/25' : ''
                }`}
              >
                {earlyOn ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                {earlyOn ? 'On' : 'Off'}
              </Button>
            </div>
            {earlyOn ? (
              <>
                <Slider
                  min={20}
                  max={150}
                  step={5}
                  value={[va]}
                  onValueChange={(v) => setVa(v[0] ?? va)}
                  aria-label="Early voltage"
                  className="mt-2"
                />
                <p className="mt-1 text-[10px] leading-tight text-muted-foreground">
                  V_A = {va} V — the curves tilt up as V_CE spreads the depletion region
                </p>
              </>
            ) : (
              <p className="mt-1 text-[10px] leading-tight text-muted-foreground">
                toggle to tilt the family with the Early voltage V_A
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ---------------- bias network + small signal ---------------- */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-3 sm:p-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Potential-divider bias network
          </p>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
            {sliderRow(
              'r1',
              'R1 (top)',
              'V_CC to base',
              `${fc(r1, 1)} kΩ`,
              1,
              100,
              1,
              r1,
              (v) => setR1(Math.round(v)),
              'Top divider resistor'
            )}
            {sliderRow(
              'r2',
              'R2 (bottom)',
              'base to ground',
              `${fc(r2, 1)} kΩ`,
              1,
              100,
              1,
              r2,
              (v) => setR2(Math.round(v)),
              'Bottom divider resistor'
            )}
            {sliderRow(
              're',
              'R_E (emitter)',
              'the stabilising resistor',
              `${fc(re, 2)} kΩ`,
              0.1,
              10,
              0.1,
              re,
              (v) => setRe(Math.round(v * 10) / 10),
              'Emitter resistor'
            )}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="rounded-lg border border-teal-500/40 bg-teal-500/10 px-2.5 py-1 font-mono text-[11px] text-teal-200">
              <TeX tex={`V_{BB} = ${fc(vbb)}\\,\\mathrm{V}`} />
            </span>
            <span className="rounded-lg border border-teal-500/40 bg-teal-500/10 px-2.5 py-1 font-mono text-[11px] text-teal-200">
              <TeX tex={`R_{BB} = ${fc(rbb, 1)}\\,\\mathrm{k\\Omega}`} />
            </span>
            <span className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-200">
              <TeX
                tex={`I_C \\approx \\alpha\\frac{V_{BB}-0.7}{R_E} = ${fc(icDiv)}\\,\\mathrm{mA}`}
              />
            </span>
            <span className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] text-amber-200">
              <TeX tex={`V_{CE} = ${fc(vceDiv)}\\,\\mathrm{V}`} />
            </span>
          </div>
          <div className="mt-3 rounded-lg border border-border bg-background/60 px-3 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Bias stability factor (simplified)
            </p>
            <div className="mt-1 overflow-x-auto text-sm">
              <TeX
                display
                tex={`S = \\frac{\\Delta I_C}{\\Delta I_{CBO}} = \\frac{(1+\\beta)(R_{BB}+R_E)}{(1+\\beta)R_E + R_{BB}} = ${fc(sFactor, 1)}`}
              />
            </div>
            <p className="mt-1 text-center text-[11px] text-muted-foreground">
              {sFactor < 5
                ? 'S below 5 — a stiff bias: R_E dominates and I_CBO leaks barely move I_C'
                : sFactor < 20
                  ? 'S in the 5–20 band — workable, but β spread will shift the Q-point'
                  : 'S above 20 — fragile: with little R_E, leakage gets multiplied by nearly β+1'}
            </p>
          </div>
          <Button
            size="sm"
            className="mt-3"
            onClick={() =>
              setQIc(Math.round(clamp(icDiv, 0, iLineMax * 0.9995) * 100) / 100)
            }
          >
            <Crosshair className="mr-1 h-3.5 w-3.5" />
            Set Q-point from divider
          </Button>
        </div>

        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-3 sm:p-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Small-signal parameters at Q
          </p>
          <div className="mt-2 space-y-2">
            <div className="rounded-lg border border-border bg-background/60 px-3 py-2">
              <div className="overflow-x-auto text-sm">
                <TeX
                  display
                  tex={`g_m = \\frac{I_C}{V_T} = \\frac{${fc(icQ)}\\,\\mathrm{mA}}{25.85\\,\\mathrm{mV}} = ${fc(gm * 1000)}\\,\\mathrm{mS}`}
                />
              </div>
              <p className="mt-0.5 text-center text-[11px] text-muted-foreground">
                transconductance — volts in, milliamps out
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background/60 px-3 py-2">
              <div className="overflow-x-auto text-sm">
                <TeX
                  display
                  tex={`r_\\pi = \\frac{\\beta}{g_m} = \\frac{${Math.round(beta)}}{${fc(gm * 1000)}\\,\\mathrm{mS}} = ${fc(rpi, 1)}\\,\\Omega`}
                />
              </div>
              <p className="mt-0.5 text-center text-[11px] text-muted-foreground">
                input resistance seen at the base (the π of the hybrid-π model)
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background/60 px-3 py-2">
              <div className="overflow-x-auto text-sm">
                <TeX
                  display
                  tex={`A_v = -g_m R_C = -${fc(gm * 1000)}\\,\\mathrm{mS}\\cdot ${rc}\\,\\Omega = ${fc(av, 1)}\\,\\mathrm{V/V}`}
                />
              </div>
              <p className="mt-0.5 text-center text-[11px] text-muted-foreground">
                unloaded voltage gain (negative: the CE stage inverts)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          start on{' '}
          <span className="font-medium text-foreground">Midpoint bias</span> and confirm the Q-point
          sits near the middle of the load line — maximum clean swing both ways. Now load{' '}
          <span className="font-medium text-foreground">Starved (cutoff)</span>: I_CQ is tiny, so
          the drive slams the output ceiling into V_CC on nearly every cycle. Then{' '}
          <span className="font-medium text-foreground">Saturated switch</span> shows the opposite
          failure — the output is pinned at 0.2 V, exactly what a saturated switch wants. Finally
          enable the Early effect and watch the whole family tilt: gain rises with V_CE because the
          effective β does.
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Clipping scope                                                      */
/* ------------------------------------------------------------------ */

function ClippingScope({
  ideal,
  actual,
  vcc,
}: {
  ideal: number[]
  actual: number[]
  vcc: number
}) {
  const SW = 620
  const SH = 210
  const SPL = 50
  const SPR = 14
  const SPT = 12
  const SPB = 26
  const SPW = SW - SPL - SPR
  const SPH = SH - SPT - SPB
  const vTop = Math.max(vcc * 1.12, Math.max(...ideal, Math.max(...actual)) + 1)
  const vBot = -1
  const toX = (i: number) => SPL + (i / (ideal.length - 1)) * SPW
  const toY = (v: number) => SPT + ((vTop - v) / (vTop - vBot)) * SPH
  const pathOf = (arr: number[], cmd = 'L') => {
    let d = ''
    arr.forEach((v, i) => {
      d += `${i === 0 ? 'M' : cmd}${toX(i).toFixed(1)},${toY(clamp(v, vBot, vTop)).toFixed(1)}`
    })
    return d
  }
  return (
    <svg
      viewBox={`0 0 ${SW} ${SH}`}
      className="w-full"
      role="img"
      aria-label="Mini scope: the input sine mapped through the load line as the collector voltage, with clipped tops and bottoms."
    >
      <rect x={SPL} y={SPT} width={SPW} height={SPH} rx={6} className="fill-zinc-950/40" />
      {[0, 0.5, 1, 1.5, 2].map((c) => (
        <line
          key={c}
          x1={SPL + c * SPW}
          y1={SPT}
          x2={SPL + c * SPW}
          y2={SPT + SPH}
          className="stroke-zinc-500/15"
          strokeWidth={1}
        />
      ))}
      {[0, vcc / 2, vcc].map((t, i) => (
        <g key={i}>
          <line
            x1={SPL}
            y1={toY(t)}
            x2={SPL + SPW}
            y2={toY(t)}
            className="stroke-zinc-500/15"
            strokeWidth={1}
          />
          <text
            x={SPL - 6}
            y={toY(t) + 3}
            textAnchor="end"
            fontSize={10}
            className="fill-zinc-500 font-mono"
          >
            {fc(t, 1)}
          </text>
        </g>
      ))}
      <line
        x1={SPL}
        y1={toY(vcc)}
        x2={SPL + SPW}
        y2={toY(vcc)}
        className="stroke-amber-400/60"
        strokeWidth={1.2}
        strokeDasharray="4 4"
      />
      <text x={SPL + 6} y={toY(vcc) - 5} fontSize={9.5} className="fill-amber-300 font-mono">
        V_CC ceiling (cutoff)
      </text>
      <line
        x1={SPL}
        y1={toY(0.2)}
        x2={SPL + SPW}
        y2={toY(0.2)}
        className="stroke-rose-400/60"
        strokeWidth={1.2}
        strokeDasharray="4 4"
      />
      <text x={SPL + 6} y={toY(0.2) + 12} fontSize={9.5} className="fill-rose-300 font-mono">
        0.2 V floor (saturation)
      </text>
      <path d={pathOf(ideal)} className="stroke-amber-400" strokeWidth={1.6} fill="none" strokeDasharray="6 4" />
      <path
        d={pathOf(actual)}
        className="stroke-emerald-400"
        strokeWidth={2.4}
        fill="none"
        strokeLinejoin="round"
      />
      <text x={SPL + SPW - 6} y={SPT + SPH - 8} textAnchor="end" fontSize={9.5} className="fill-zinc-500 font-mono">
        two cycles of drive
      </text>
    </svg>
  )
}
