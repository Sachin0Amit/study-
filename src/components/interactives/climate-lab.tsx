'use client'

import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  Wind,
  Thermometer,
  Gauge,
  Snowflake,
  Waves,
  Check,
  X,
  Info,
  RotateCcw,
  Leaf,
  CalendarClock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'

// ============================================================
// Climate & Carbon Budget Lab — a real (tiny) 0-D Earth model.
// One carbon reservoir + one heat reservoir, integrated at
// dt = 0.25 yr from 2025 to 2150. No animation loops: every
// slider change recomputes the whole run inside a useMemo.
// ============================================================

// ---- model constants (tuned so today ≈ 424 ppm / +1.2 °C) ----
const Y0 = 2025
const Y_END = 2150
const DT = 0.25
const C0 = 280 // pre-industrial CO2 (ppm)
const C_INIT = 424 // 2025 concentration (ppm)
const T_INIT = 1.2 // 2025 warming vs pre-industrial (°C)
const LAMBDA = 2.0 // equilibrium sensitivity: °C per CO2 doubling
const TAU = 25 // ocean heat-uptake lag (yr)
const E0 = 40 // 2025 anthropogenic emissions (GtCO2/yr)
const GTC_PER_PPM = 7.8 // 1 ppm CO2 ≈ 7.8 GtCO2
const K_SINK = 0.05 // natural sink: Gt/yr per ppm of excess CO2
const SINK_CAP = 26 // sink saturation (Gt/yr)
const SINK_T_WARM = 0.12 // sink efficiency lost per °C of warming
const K_FB = 2.2 // permafrost + dieback: E_fb = s·min(cap, k·T²)
const FB_CAP = 10
const DD_RATE = 5 // overshoot drawdown (GtCO2/yr, negative emissions)
const DD_YEARS = 30
const DD_MAX_NZ = 2080 // drawdown only available for early net-zero

const AMBER = '#f59e0b'
const ROSE = '#f43f5e'
const TEAL = '#14b8a6'
const EMERALD = '#10b981'

interface ClimatePoint {
  y: number
  C: number
  T: number
  E: number // anthropogenic emissions (Gt/yr)
  F: number // feedback emissions (Gt/yr)
}

interface ClimateRun {
  series: ClimatePoint[]
  peakT: number
  peakYear: number
  peakC: number
  cumPos: number // cumulative positive anthropogenic emissions (GtCO2)
  cumFb: number // cumulative feedback emissions (GtCO2)
  cross15: number | null // first year ΔT crosses +1.5 °C
  cross20: number | null // first year ΔT crosses +2.0 °C
}

// smoothstep: linear-ish decline with a slight S-curve
const smoothstep = (u: number): number => (u <= 0 ? 0 : u >= 1 ? 1 : 3 * u * u - 2 * u * u * u)

const runModel = (netZero: number, fbFrac: number, drawdown: boolean, scale = 1): ClimateRun => {
  const series: ClimatePoint[] = []
  let C = C_INIT
  let T = T_INIT
  let cumPos = 0
  let cumFb = 0
  let peakT = T_INIT
  let peakYear = Y0
  let peakC = C_INIT
  let cross15: number | null = null
  let cross20: number | null = null
  let prevT = T_INIT

  for (let i = 0; ; i++) {
    const t = Y0 + i * DT
    if (t > Y_END + 1e-9) break

    // anthropogenic pathway: E0 → 0 by net-zero year (S-curve), then optional
    // drawdown. The "never" endpoint keeps emitting at today's rate — BAU.
    let E: number
    if (netZero >= 2150) {
      E = E0 * scale
    } else if (t <= netZero) {
      E = E0 * (1 - smoothstep((t - Y0) / (netZero - Y0))) * scale
    } else {
      E = drawdown && netZero <= DD_MAX_NZ && t <= netZero + DD_YEARS ? -DD_RATE * scale : 0
    }

    // feedback emissions grow with temperature squared (permafrost, dieback)
    const F = fbFrac * Math.min(FB_CAP, K_FB * T * T)

    // airborne-fraction sink: proportional to excess CO2, weakened by warming, saturating
    const sink = Math.min(SINK_CAP, K_SINK * (C - C0) * Math.max(0, 1 - SINK_T_WARM * T))

    cumPos += Math.max(E, 0) * DT
    cumFb += F * DT

    // equilibrium warming: 2 °C per doubling of CO2 (log2 form keeps the
    // "per doubling" definition exact and matches today's +1.2 °C at 424 ppm)
    const tEq = LAMBDA * Math.log2(C / C0)

    series.push({ y: t, C, T, E, F })

    // crossings (first only), interpolated
    if (cross15 === null && prevT < 1.5 && T >= 1.5) cross15 = t - DT * ((T - 1.5) / Math.max(T - prevT, 1e-9))
    if (cross20 === null && prevT < 2.0 && T >= 2.0) cross20 = t - DT * ((T - 2.0) / Math.max(T - prevT, 1e-9))
    prevT = T
    if (T > peakT) {
      peakT = T
      peakYear = t
    }
    if (C > peakC) peakC = C

    // forward Euler at dt = 0.25 yr — plenty for these smooth dynamics
    C += ((E + F - sink) / GTC_PER_PPM) * DT
    T += ((tEq - T) / TAU) * DT
  }

  return { series, peakT, peakYear, peakC, cumPos, cumFb, cross15, cross20 }
}

// Carbon budget by bisection: scale the pathway up until peak ΔT hits the
// marker; the budget is that scale × the pathway's cumulative emissions.
// ~12 model runs per marker, all inside a useMemo cache.
const findBudget = (netZero: number, fbFrac: number, drawdown: boolean, limit: number, cumPos: number): { budget: number; saturated: boolean } => {
  let lo = 0
  let hi = 6
  for (let i = 0; i < 12; i++) {
    const mid = (lo + hi) / 2
    if (runModel(netZero, fbFrac, drawdown, mid).peakT <= limit) lo = mid
    else hi = mid
  }
  return { budget: lo * Math.max(cumPos, 1), saturated: lo >= 5.99 }
}

type PresetKey = 'bau' | 'current' | 'p15' | 'p2'

const PRESETS: Record<PresetKey, { label: string; netZero: number; feedback: number; drawdown: boolean }> = {
  bau: { label: 'BAU (never net-zero)', netZero: 2150, feedback: 50, drawdown: false },
  current: { label: 'Current policies (~2075)', netZero: 2075, feedback: 50, drawdown: false },
  p15: { label: '1.5 °C pathway (2045 + drawdown)', netZero: 2045, feedback: 50, drawdown: true },
  p2: { label: '2 °C pathway (2065)', netZero: 2065, feedback: 50, drawdown: false }
}

export default function ClimateLab() {
  const [netZero, setNetZero] = useState(2075)
  const [feedback, setFeedback] = useState(50)
  const [drawdown, setDrawdown] = useState(false)
  const [scrubYear, setScrubYear] = useState(2075)

  // main run + budgets, recomputed only when the scenario changes
  const model = useMemo(() => {
    const run = runModel(netZero, feedback / 100, drawdown)
    const b15 = findBudget(netZero, feedback / 100, drawdown, 1.5, run.cumPos)
    const b20 = findBudget(netZero, feedback / 100, drawdown, 2.0, run.cumPos)
    return { run, b15, b20 }
  }, [netZero, feedback, drawdown])

  const { run, b15, b20 } = model

  // state of the world at the scrub year
  const scrubIdx = Math.min(run.series.length - 1, Math.max(0, Math.round((scrubYear - Y0) / DT)))
  const scrubPt = run.series[scrubIdx]

  // ---- chart geometry ----
  const CW = 480
  const CH = 300
  const CPL = 46
  const CPR = 14
  const CPT = 16
  const CPB = 34
  const CPW = CW - CPL - CPR
  const CPH = CH - CPT - CPB
  const xT = (yr: number) => CPL + ((yr - Y0) / (Y_END - Y0)) * CPW

  // left chart: emissions axis −8 … +52 Gt/yr
  const E_MIN = -8
  const E_MAX = 52
  const yE = (e: number) => CPT + ((E_MAX - e) / (E_MAX - E_MIN)) * CPH

  // right chart geometry; axis ranges are sized to the run just below
  const RPL = 46
  const RPR = 46
  const RPW = CW - RPL - RPR
  const xR = (yr: number) => RPL + ((yr - Y0) / (Y_END - Y0)) * RPW
  // right chart: ppm (left axis) + ΔT (right axis), ranges sized to the run so
  // BAU (~900 ppm / ~3 °C) and deep-mitigation (~460 ppm / ~1.3 °C) both read well
  const C_LO = 340
  const C_HI = Math.max(600, Math.ceil((run.peakC + 60) / 50) * 50)
  const T_LO = 0.6
  const T_HI = Math.max(2.4, Math.ceil((run.peakT + 0.4) / 0.2) * 0.2)
  const yC = (c: number) => CPT + ((C_HI - c) / (C_HI - C_LO)) * CPH
  const yT = (t: number) => CPT + ((T_HI - t) / (T_HI - T_LO)) * CPH
  const cTicks: number[] = []
  for (let c = 400; c <= C_HI - 30; c += C_HI > 700 ? 100 : 50) cTicks.push(c)

  // path builders (1 sample per year is plenty for smooth curves)
  const step = 4 // 4 × 0.25 yr
  const linePath = (get: (p: ClimatePoint) => number, map: (v: number) => number): string => {
    let d = ''
    for (let i = 0; i < run.series.length; i += step) {
      const p = run.series[i]
      d += `${i === 0 ? 'M' : 'L'} ${xT(p.y).toFixed(1)} ${map(get(p)).toFixed(1)} `
    }
    return d
  }
  const areaPath = (get: (p: ClimatePoint) => number, map: (v: number) => number, base: number): string => {
    let d = `M ${xT(Y0).toFixed(1)} ${map(base).toFixed(1)} `
    for (let i = 0; i < run.series.length; i += step) {
      const p = run.series[i]
      d += `L ${xT(p.y).toFixed(1)} ${map(get(p)).toFixed(1)} `
    }
    return d + `L ${xT(Y_END).toFixed(1)} ${map(base).toFixed(1)} Z`
  }
  const stackPath = (
    getBottom: (p: ClimatePoint) => number,
    getTop: (p: ClimatePoint) => number,
    map: (v: number) => number
  ): string => {
    let d = ''
    for (let i = 0; i < run.series.length; i += step) {
      const p = run.series[i]
      d += `${i === 0 ? 'M' : 'L'} ${xT(p.y).toFixed(1)} ${map(getTop(p)).toFixed(1)} `
    }
    for (let i = run.series.length - 1 - ((run.series.length - 1) % step); i >= 0; i -= step) {
      const p = run.series[i]
      d += `L ${xT(p.y).toFixed(1)} ${map(getBottom(p)).toFixed(1)} `
    }
    return d + 'Z'
  }

  const eLine = linePath((p) => p.E, yE)
  const eArea = areaPath((p) => p.E, yE, 0)
  const fbArea = stackPath((p) => p.E, (p) => p.E + p.F, yE)
  const cLine = linePath((p) => p.C, yC)
  const tLine = linePath((p) => p.T, yT)

  const netZeroLabel = netZero >= 2150 ? 'Never — BAU (emissions persist)' : `Net-zero by ${netZero}`
  const drawdownEligible = netZero <= DD_MAX_NZ

  const arcticNote = (() => {
    if (scrubPt.T < 1.5) return 'Summer sea ice holding (mostly)'
    if (scrubPt.T < 2.0) return 'Ice-free Septembers likely most years'
    return 'Ice-free Arctic summers routine'
  })()

  const seaNote = `≈ +${(0.4 * scrubPt.T).toFixed(1)} m vs pre-industrial`

  const applyPreset = (k: PresetKey) => {
    const p = PRESETS[k]
    setNetZero(p.netZero)
    setFeedback(p.feedback)
    setDrawdown(p.drawdown)
  }

  const budgetRow = (
    label: string,
    limit: number,
    budget: { budget: number; saturated: boolean },
    color: string
  ) => {
    const fits = run.peakT <= limit
    const used = Math.min(100, (run.cumPos / Math.max(budget.budget, 1)) * 100)
    const overshoot = run.cumPos - budget.budget
    return (
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs">
          <span className="font-semibold text-foreground flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
            {label}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            budget {budget.saturated ? '> ' : ''}
            {budget.budget.toFixed(0)} GtCO₂ · this pathway {run.cumPos.toFixed(0)} GtCO₂
          </span>
          <Badge
            variant="outline"
            className={
              fits
                ? 'text-[10px] border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
                : 'text-[10px] border-rose-500/40 text-rose-400 bg-rose-500/10'
            }
          >
            {fits ? <Check className="h-3 w-3 mr-1" /> : <X className="h-3 w-3 mr-1" />}
            {fits ? 'stays under' : `overshoots by ${overshoot.toFixed(0)} Gt`}
          </Badge>
        </div>
        <Progress value={used} className="h-2" />
      </div>
    )
  }

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-gradient-to-b from-card/95 via-card/80 to-background/95 p-4 md:p-6 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
            <Globe className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground flex flex-wrap items-center gap-2">
              Climate &amp; Carbon Budget Lab
              <Badge variant="outline" className="text-xs border-teal-500/30 text-teal-400 bg-teal-500/10">
                0-D Earth model
              </Badge>
            </h3>
            <p className="text-xs text-muted-foreground">
              Choose when emissions hit zero, how hard feedbacks bite, and whether we draw down — the model integrates 2025 → 2150 at ¼-year steps.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {(Object.keys(PRESETS) as PresetKey[]).map((k) => (
            <Button key={k} size="sm" variant="outline" onClick={() => applyPreset(k)} className="text-[11px] h-7 px-2.5">
              <Leaf className="h-3 w-3 mr-1 text-teal-400" />
              {PRESETS[k].label}
            </Button>
          ))}
          <Button size="sm" variant="ghost" onClick={() => applyPreset('current')} className="text-[11px] h-7 px-2">
            <RotateCcw className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 rounded-xl border border-border/60 bg-muted/20 p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-1 text-xs">
            <div className="flex justify-between text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarClock className="h-3.5 w-3.5 text-teal-400" /> Net-zero year
              </span>
              <span className="font-mono font-bold text-teal-400">{netZeroLabel}</span>
            </div>
            <Slider value={[netZero]} min={2040} max={2150} step={5} onValueChange={([v]) => setNetZero(v)} />
            <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
              <span>2040 fast</span>
              <span>2100</span>
              <span>2150 = never</span>
            </div>
          </div>

          <div className="space-y-1 text-xs">
            <div className="flex justify-between text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Wind className="h-3.5 w-3.5 text-rose-400" /> Feedback strength
              </span>
              <span className="font-mono font-bold text-rose-400">{feedback}%</span>
            </div>
            <Slider value={[feedback]} min={0} max={100} step={5} onValueChange={([v]) => setFeedback(v)} />
            <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
              <span>0% none</span>
              <span>permafrost + dieback: E_fb = s·min(10, 2.2·ΔT²)</span>
            </div>
          </div>

          <div className="flex items-start justify-between gap-3 rounded-lg bg-muted/50 border border-border/40 p-3">
            <div>
              <Label htmlFor="drawdown-switch" className="text-xs font-semibold text-foreground">
                Overshoot drawdown
              </Label>
              <span className="text-[10px] text-muted-foreground block mt-0.5 leading-snug">
                −5 GtCO₂/yr for 30 yrs after net-zero
                {!drawdownEligible && ' (needs net-zero ≤ 2080)'}
              </span>
            </div>
            <Switch id="drawdown-switch" checked={drawdown} onCheckedChange={setDrawdown} disabled={!drawdownEligible} />
          </div>
        </div>

        {/* year scrubber */}
        <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 space-y-1.5">
          <div className="flex justify-between text-xs text-amber-500 dark:text-amber-300 font-semibold">
            <span>Year scrubber — state of the world:</span>
            <span className="font-mono">{Math.round(scrubYear)}</span>
          </div>
          <Slider value={[scrubYear]} min={Y0} max={Y_END} step={1} onValueChange={([v]) => setScrubYear(v)} />
        </div>
      </div>

      {/* Charts */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT: emissions pathway */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-border/60 bg-muted/10 p-4"
        >
          <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <Wind className="h-4 w-4 text-amber-400" /> Emissions pathway (GtCO₂/yr)
            </span>
            <div className="flex items-center gap-3 text-[10px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1"><span className="h-2 w-3 rounded bg-amber-500/60" /> human</span>
              <span className="flex items-center gap-1"><span className="h-2 w-3 rounded bg-rose-500/60" /> + feedback</span>
            </div>
          </div>
          <div className="rounded-lg border border-border/50 bg-background/80 p-2 shadow-inner">
            <svg viewBox={`0 0 ${CW} ${CH}`} className="w-full h-auto">
              {/* grid + axes */}
              {[0, 20, 40].map((e) => (
                <g key={`eg${e}`}>
                  <line x1={CPL} y1={yE(e)} x2={CW - CPR} y2={yE(e)} stroke="currentColor" strokeOpacity={e === 0 ? 0.35 : 0.08} strokeDasharray={e === 0 ? undefined : '3 3'} />
                  <text x={CPL - 6} y={yE(e) + 3} fill="currentColor" opacity="0.5" fontSize="9" textAnchor="end" fontFamily="monospace">
                    {e}
                  </text>
                </g>
              ))}
              <text x={CPL - 6} y={yE(-8) + 3} fill="currentColor" opacity="0.5" fontSize="9" textAnchor="end" fontFamily="monospace">−8</text>
              {[2050, 2075, 2100, 2125].map((yr) => (
                <text key={`ex${yr}`} x={xT(yr)} y={CH - CPB + 14} fill="currentColor" opacity="0.5" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  {yr}
                </text>
              ))}
              <text x={CPL - 34} y={CPT + 6} fill={AMBER} fontSize="9" fontFamily="monospace">Gt/yr</text>
              <text x={CW / 2} y={CH - 4} fill="currentColor" opacity="0.7" fontSize="10" textAnchor="middle">Year</text>

              {/* net-zero marker */}
              {netZero < 2150 && (
                <g>
                  <line x1={xT(netZero)} y1={CPT} x2={xT(netZero)} y2={CH - CPB} stroke={EMERALD} strokeOpacity={0.5} strokeWidth={1.5} strokeDasharray="5 4" />
                  <text x={xT(netZero)} y={CPT + 10} fill={EMERALD} fontSize={9} textAnchor="middle" fontFamily="monospace">
                    net-zero {netZero}
                  </text>
                </g>
              )}

              {/* anthropogenic area + feedback stack */}
              <path d={eArea} fill={AMBER} fillOpacity={0.2} />
              <path d={fbArea} fill={ROSE} fillOpacity={0.28} />
              <path d={eLine} fill="none" stroke={AMBER} strokeWidth={2.25} strokeLinecap="round" />
              <path d={linePath((p) => p.E + p.F, yE)} fill="none" stroke={ROSE} strokeWidth={1.5} strokeDasharray="5 3" />

              {/* scrubber */}
              <line x1={xT(scrubYear)} y1={CPT} x2={xT(scrubYear)} y2={CH - CPB} stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.5} strokeDasharray="3 3" />
              <circle cx={xT(scrubYear)} cy={yE(scrubPt.E)} r={4} fill={AMBER} stroke="#f8fafc" strokeWidth={1.5} />
              <circle cx={xT(scrubYear)} cy={yE(scrubPt.E + scrubPt.F)} r={4} fill={ROSE} stroke="#f8fafc" strokeWidth={1.5} />
            </svg>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Badge variant="outline" className="text-[10px] font-mono border-amber-500/30 text-amber-500 dark:text-amber-400 bg-amber-500/10">
              {scrubPt.E >= 0 ? 'emitting' : 'drawing down'} {Math.abs(scrubPt.E).toFixed(1)} Gt/yr in {Math.round(scrubYear)}
            </Badge>
            <Badge variant="outline" className="text-[10px] font-mono border-rose-500/30 text-rose-400 bg-rose-500/10">
              feedback +{scrubPt.F.toFixed(1)} Gt/yr · {run.cumFb.toFixed(0)} Gt cumulative
            </Badge>
          </div>
        </motion.div>

        {/* RIGHT: CO2 + temperature */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="rounded-xl border border-border/60 bg-muted/10 p-4"
        >
          <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <Thermometer className="h-4 w-4 text-rose-400" /> CO₂ and temperature
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge variant="outline" className="text-[10px] font-mono border-rose-500/30 text-rose-400 bg-rose-500/10">
                peak ΔT +{run.peakT.toFixed(2)} °C @ {Math.round(run.peakYear)}
              </Badge>
              <Badge variant="outline" className="text-[10px] font-mono border-teal-500/30 text-teal-400 bg-teal-500/10">
                peak CO₂ {run.peakC.toFixed(0)} ppm
              </Badge>
            </div>
          </div>
          <div className="rounded-lg border border-border/50 bg-background/80 p-2 shadow-inner">
            <svg viewBox={`0 0 ${CW} ${CH}`} className="w-full h-auto">
              {/* ppm grid (left axis) */}
              {cTicks.map((c) => (
                <g key={`cg${c}`}>
                  <line x1={RPL} y1={yC(c)} x2={CW - RPR} y2={yC(c)} stroke="currentColor" strokeOpacity="0.07" />
                  <text x={RPL - 6} y={yC(c) + 3} fill={TEAL} opacity="0.75" fontSize="9" textAnchor="end" fontFamily="monospace">
                    {c}
                  </text>
                </g>
              ))}
              {/* temperature grid (right axis) */}
              {[1, 2, 3].filter((t) => t <= T_HI - 0.15).map((t) => (
                <text key={`tg${t}`} x={CW - RPR + 6} y={yT(t) + 3} fill="currentColor" opacity="0.5" fontSize="9" fontFamily="monospace">
                  {t}°
                </text>
              ))}
              {[2050, 2075, 2100, 2125].map((yr) => (
                <text key={`rx${yr}`} x={xR(yr)} y={CH - CPB + 14} fill="currentColor" opacity="0.5" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  {yr}
                </text>
              ))}

              {/* 1.5 / 2.0 markers */}
              {[1.5, 2.0].map((m) => (
                <g key={`mark${m}`}>
                  <line x1={RPL} y1={yT(m)} x2={CW - RPR} y2={yT(m)} stroke={ROSE} strokeOpacity={0.55} strokeWidth={1.25} strokeDasharray="7 5" />
                  <text x={CW - RPR - 4} y={yT(m) - 4} fill={ROSE} fontSize={9} textAnchor="end" fontFamily="monospace">
                    +{m} °C
                  </text>
                </g>
              ))}

              {/* lines */}
              <path d={cLine} fill="none" stroke={TEAL} strokeWidth={2.5} strokeLinecap="round" />
              <path d={tLine} fill="none" stroke={ROSE} strokeWidth={2.5} strokeLinecap="round" />

              {/* crossing dots + labels */}
              {run.cross15 !== null && (
                <g>
                  <circle cx={xR(run.cross15)} cy={yT(1.5)} r={4.5} fill={ROSE} stroke="#f8fafc" strokeWidth={1.5} />
                  <text x={xR(run.cross15)} y={yT(1.5) + 16} fill={ROSE} fontSize={9.5} textAnchor="middle" fontFamily="monospace">
                    1.5 °C @ {Math.round(run.cross15)}
                  </text>
                </g>
              )}
              {run.cross20 !== null && (
                <g>
                  <circle cx={xR(run.cross20)} cy={yT(2.0)} r={4.5} fill={ROSE} stroke="#f8fafc" strokeWidth={1.5} />
                  <text x={xR(run.cross20)} y={yT(2.0) - 10} fill={ROSE} fontSize={9.5} textAnchor="middle" fontFamily="monospace">
                    2.0 °C @ {Math.round(run.cross20)}
                  </text>
                </g>
              )}

              {/* peak dot */}
              <circle cx={xR(run.peakYear)} cy={yT(run.peakT)} r={3.5} fill={ROSE} fillOpacity={0.85} />

              {/* scrubber */}
              <line x1={xR(scrubYear)} y1={CPT} x2={xR(scrubYear)} y2={CH - CPB} stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.5} strokeDasharray="3 3" />
              <circle cx={xR(scrubYear)} cy={yC(scrubPt.C)} r={4} fill={TEAL} stroke="#f8fafc" strokeWidth={1.5} />
              <circle cx={xR(scrubYear)} cy={yT(scrubPt.T)} r={4} fill={ROSE} stroke="#f8fafc" strokeWidth={1.5} />

              {/* axis labels */}
              <text x={RPL - 34} y={CPT + 6} fill={TEAL} fontSize="9" fontFamily="monospace">ppm</text>
              <text x={CW - RPR + 6} y={CPT + 6} fill={ROSE} fontSize="9" fontFamily="monospace">ΔT °C</text>
              <text x={CW / 2} y={CH - 4} fill="currentColor" opacity="0.7" fontSize="10" textAnchor="middle">Year</text>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Carbon budget */}
      <div className="mt-6 rounded-xl border border-border/60 bg-muted/10 p-4 space-y-4">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <span className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5 text-amber-400" /> Carbon budget check
          </span>
          <span className="text-[10px] text-muted-foreground">
            cumulative CO₂ this pathway may emit while holding peak ΔT under each marker (bisection over a pathway scale factor, feedback at {feedback}%)
          </span>
        </div>
        {budgetRow('Hold peak warming under +1.5 °C', 1.5, b15, ROSE)}
        <Separator className="opacity-40" />
        {budgetRow('Hold peak warming under +2.0 °C', 2.0, b20, AMBER)}
      </div>

      {/* State of the world + model card */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-xl border border-border/60 bg-muted/10 p-4"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-foreground uppercase tracking-wider">State of the world, {Math.round(scrubYear)}</span>
            <span className="text-[10px] font-mono text-muted-foreground">{netZeroLabel}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-teal-500/25 bg-teal-500/5 p-3">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-teal-400 font-semibold">
                <Gauge className="h-3.5 w-3.5" /> CO₂
              </div>
              <div className="font-mono text-lg font-bold text-foreground">{scrubPt.C.toFixed(0)} ppm</div>
              <div className="text-[10px] text-muted-foreground">vs 280 pre-industrial</div>
            </div>
            <div className="rounded-lg border border-rose-500/25 bg-rose-500/5 p-3">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-rose-400 font-semibold">
                <Thermometer className="h-3.5 w-3.5" /> Warming
              </div>
              <div className="font-mono text-lg font-bold text-foreground">+{scrubPt.T.toFixed(2)} °C</div>
              <div className="text-[10px] text-muted-foreground">vs pre-industrial, 25-yr ocean lag</div>
            </div>
            <div className="rounded-lg border border-border/50 bg-muted/30 p-3">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-teal-300 font-semibold">
                <Snowflake className="h-3.5 w-3.5" /> Arctic ice
              </div>
              <div className="text-xs font-semibold text-foreground mt-1 leading-snug">{arcticNote}</div>
            </div>
            <div className="rounded-lg border border-border/50 bg-muted/30 p-3">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-teal-300 font-semibold">
                <Waves className="h-3.5 w-3.5" /> Sea level
              </div>
              <div className="text-xs font-semibold text-foreground mt-1">{seaNote}</div>
              <div className="text-[10px] text-muted-foreground">rough 0.4 m per °C; slow ice sheets excluded</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="rounded-xl border border-border/60 bg-muted/10 p-4 flex flex-col gap-3"
        >
          <div className="flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5 text-teal-400" />
            <span className="text-xs font-semibold text-foreground uppercase tracking-wider">The model, honestly</span>
          </div>
          <div className="text-[10px] font-mono text-muted-foreground leading-relaxed space-y-1">
            <div>dC/dt = (E + E_fb − sink) / 7.8 &nbsp;[ppm/yr]</div>
            <div>sink = min(26, 0.05·(C−280)·(1−0.12·T)) — weakens as it warms</div>
            <div>ΔT_eq = 2.0·log₂(C/280) — 2 °C per doubling</div>
            <div>dT/dt = (ΔT_eq − T)/25 — first-order ocean lag</div>
            <div>E_fb = {feedback}%·min(10, 2.2·ΔT²) — permafrost + dieback</div>
          </div>
          <p className="font-serif italic text-sm leading-relaxed text-foreground/90 mt-auto">
            A 0-D toy model — a single well-mixed reservoir with tuned constants. Real Earth-system projections couple ocean, ice, biosphere and atmosphere in three-dimensional grids (CMIP-class), so read these numbers as direction, not destiny.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
