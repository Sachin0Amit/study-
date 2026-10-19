'use client'

import React, { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Scale,
  Receipt,
  Coins,
  Landmark,
  Percent,
  Gauge,
  Info,
  RotateCcw,
  MousePointerClick,
  TrendingUp,
  TrendingDown
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'

// ============================================================
// Market Lab — supply, demand & policy in one draggable diagram.
// Curves are constant-elasticity: P = A·Q^(−1/ε) for demand,
// P = B·Q^(1/ε) for supply. Elasticity is then EXACT at every
// point, which keeps the ε readouts and tax-incidence math honest.
// ============================================================

// ---- chart geometry (SVG user units; responsive via viewBox) ----
const W = 560
const H = 440
const PL = 48 // left pad (price axis)
const PR = 16
const PT = 16
const PB = 42 // bottom pad (quantity axis)
const PLOT_W = W - PL - PR
const PLOT_H = H - PT - PB
const Q_MAX = 10
const P_MAX = 12

// coordinate mappers — module-level so memoized views capture stable identities
const x = (q: number) => PL + (q / Q_MAX) * PLOT_W
const y = (p: number) => H - PB - (p / P_MAX) * PLOT_H
const invQ = (sx: number) => ((sx - PL) / PLOT_W) * Q_MAX
const invP = (sy: number) => ((H - PB - sy) / PLOT_H) * P_MAX
const D_ANCHOR_P = 6.0 // demand grip rides at this price
const S_ANCHOR_P = 3.0 // supply grip rides at this price

const EMERALD = '#10b981'
const AMBER = '#f59e0b'
const ROSE = '#f43f5e'
const TEAL = '#14b8a6'

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

interface Curves {
  pD(q: number): number
  pS(q: number): number
  qD(p: number): number
  qS(p: number): number
}

// Anchors: each curve passes through (anchorQ, anchorP); dragging the grip
// moves anchorQ, which shifts the whole curve left/right.
const makeCurves = (epsD: number, epsS: number, qaD: number, qaS: number): Curves => ({
  pD: (q) => D_ANCHOR_P * Math.pow(qaD / Math.max(q, 0.02), 1 / epsD),
  pS: (q) => S_ANCHOR_P * Math.pow(Math.max(q, 0.02) / qaS, 1 / epsS),
  qD: (p) => qaD * Math.pow(D_ANCHOR_P / Math.max(p, 0.05), epsD),
  qS: (p) => qaS * Math.pow(Math.max(p, 0.05) / S_ANCHOR_P, epsS)
})

// Bisection on a strictly decreasing f (demand minus supply, minus wedge).
const solveDecreasing = (f: (q: number) => number): number => {
  let lo = 0.02
  let hi = 80
  for (let i = 0; i < 70; i++) {
    const mid = (lo + hi) / 2
    if (f(mid) > 0) lo = mid
    else hi = mid
  }
  return (lo + hi) / 2
}

// Trapezoid integration — real areas under the curves.
const integrate = (f: (q: number) => number, a: number, b: number, n = 480): number => {
  if (b === a) return 0
  const h = (b - a) / n
  let s = 0
  for (let i = 0; i < n; i++) s += ((f(a + i * h) + f(a + (i + 1) * h)) * h) / 2
  return s
}

type PresetKey = 'neutral' | 'medicine' | 'luxury' | 'heavytax' | 'rentceiling'
type DragTarget = 'demand' | 'supply' | 'ceiling' | 'floor'

interface PresetSpec {
  epsD: number
  epsS: number
  tax: number
  subsidy: number
  ceilingOn: boolean
  ceilingP: number
  floorOn: boolean
  floorP: number
}

const PRESETS: Record<PresetKey, { label: string; spec: PresetSpec }> = {
  neutral: {
    label: 'Neutral market',
    spec: { epsD: 1.0, epsS: 1.1, tax: 0, subsidy: 0, ceilingOn: false, ceilingP: 2.5, floorOn: false, floorP: 5.0 }
  },
  medicine: {
    label: 'Inelastic demand (medicine)',
    spec: { epsD: 0.35, epsS: 1.1, tax: 0, subsidy: 0, ceilingOn: false, ceilingP: 2.5, floorOn: false, floorP: 5.0 }
  },
  luxury: {
    label: 'Elastic demand (luxury)',
    spec: { epsD: 2.4, epsS: 1.1, tax: 0, subsidy: 0, ceilingOn: false, ceilingP: 2.5, floorOn: false, floorP: 5.0 }
  },
  heavytax: {
    label: 'Heavy tax',
    spec: { epsD: 0.6, epsS: 1.1, tax: 6, subsidy: 0, ceilingOn: false, ceilingP: 2.5, floorOn: false, floorP: 5.0 }
  },
  rentceiling: {
    label: 'Rent ceiling',
    spec: { epsD: 0.45, epsS: 1.4, tax: 0, subsidy: 0, ceilingOn: true, ceilingP: 2.5, floorOn: false, floorP: 5.0 }
  }
}

interface MarketView {
  // equilibrium & elasticities
  qFree: number
  pFree: number
  epsDPoint: number // signed, = (dQ/dP)·(P/Q) at equilibrium
  epsSPoint: number
  // wedge (tax/subsidy) outcome
  qW: number
  pbW: number
  psW: number
  // effective traded point after price controls
  qT: number
  pb: number
  ps: number
  gov: number
  // welfare (charted: CS clipped where demand exits the plot top —
  // constant-ε<1 demand has unbounded choke-price surplus, we chart-clip)
  cs: number
  psWelf: number
  dwl: number
  total: number
  freeCS: number
  freePS: number
  freeTotal: number
  buyerShare: number | null
  slopeRuleShare: number
  // price controls
  ceilingBinding: boolean
  shortage: number
  qdC: number
  qsC: number
  floorBinding: boolean
  surplus: number
  qsF: number
  qdF: number
  // svg paths
  demandPath: string
  supplyPath: string
  shiftedPath: string
  csRegion: string
  psRegion: string
  dwlRegion: string
  shortageRegion: string
  surplusRegion: string
  qTop: number
}

export default function EconLab() {
  const [epsD, setEpsD] = useState(1.0)
  const [epsS, setEpsS] = useState(1.1)
  const [anchorQD, setAnchorQD] = useState(4.0)
  const [anchorQS, setAnchorQS] = useState(4.0)
  const [tax, setTax] = useState(0)
  const [taxSide, setTaxSide] = useState<'producer' | 'consumer'>('producer')
  const [subsidy, setSubsidy] = useState(0)
  const [ceilingOn, setCeilingOn] = useState(false)
  const [ceilingP, setCeilingP] = useState(2.5)
  const [floorOn, setFloorOn] = useState(false)
  const [floorP, setFloorP] = useState(5.0)

  const svgRef = useRef<SVGSVGElement | null>(null)
  const dragRef = useRef<DragTarget | null>(null)

  const view = useMemo<MarketView>(() => {
    const cv = makeCurves(epsD, epsS, anchorQD, anchorQS)
    const wedge = tax - subsidy // >0 tax (supply shifts up), <0 subsidy (supply shifts down)

    // free equilibrium
    const qFree = solveDecreasing((q) => cv.pD(q) - cv.pS(q))
    const pFree = cv.pD(qFree)

    // point elasticity via ε = (dQ/dP)·(P/Q), derivatives from the curve slopes
    const dpdQ_D = -pFree / (epsD * qFree) // dP/dQ along demand at (qFree, pFree)
    const dpdQ_S = pFree / (epsS * qFree)
    const epsDPoint = (1 / dpdQ_D) * (pFree / qFree) // = −ε_D (negative, as drawn)
    const epsSPoint = (1 / dpdQ_S) * (pFree / qFree) // = +ε_S

    // wedge equilibrium: buyers pay Pb, sellers keep Ps, Pb − Ps = wedge
    const qW = wedge !== 0 ? solveDecreasing((q) => cv.pD(q) - cv.pS(q) - wedge) : qFree
    const pbW = cv.pD(qW)
    const psW = cv.pS(qW)

    let qT = qW
    let pb = pbW
    let ps = psW

    // price ceiling — caps the buyer price; quantity supplied at the seller's take-home
    let ceilingBinding = false
    let shortage = 0
    let qdC = 0
    let qsC = 0
    if (ceilingOn && ceilingP < pbW) {
      ceilingBinding = true
      qdC = cv.qD(ceilingP)
      const psC = ceilingP - wedge
      qsC = psC > 0 ? cv.qS(psC) : 0
      if (qsC < qT) {
        qT = qsC
        pb = ceilingP
        ps = Math.max(psC, 0)
      }
      shortage = Math.max(0, qdC - qT)
    }

    // price floor — props up the seller price; buyers demand at their all-in price
    let floorBinding = false
    let surplus = 0
    let qsF = 0
    let qdF = 0
    if (floorOn && floorP > ps) {
      floorBinding = true
      const pbF = floorP + wedge
      qdF = cv.qD(pbF)
      qsF = cv.qS(floorP)
      if (qdF < qT) {
        qT = qdF
        ps = floorP
        pb = pbF
      }
      surplus = Math.max(0, qsF - qT)
    }

    // Charted welfare: willingness-to-pay is capped at the plot top (constant-ε
    // demand never chokes). The cap is policy-independent, so the welfare
    // ledger's DWL equals the on-chart area between the curves over lost trades.
    const qTop = clamp(cv.qD(P_MAX), 0.25, Q_MAX)
    const csOf = (qEnd: number, price: number) =>
      (P_MAX - price) * Math.min(qTop, Math.max(qEnd, 0)) +
      integrate((q) => cv.pD(q) - price, Math.min(qTop, qEnd), qEnd)
    const psOf = (qEnd: number, price: number) =>
      integrate((q) => price - cv.pS(q), 0.02, qEnd)

    const freeCS = csOf(qFree, pFree)
    const freePS = psOf(qFree, pFree)
    const cs = csOf(qT, pb)
    const psS = psOf(qT, ps)
    const gov = wedge * qT // + tax revenue, − subsidy cost
    const freeTotal = freeCS + freePS
    const total = cs + psS + gov
    const dwl = Math.max(0, freeTotal - total) // = ∫(P_D − P_S) over lost trades

    let buyerShare: number | null = null
    if (tax > 0) buyerShare = clamp((pbW - pFree) / tax, 0, 1)
    else if (subsidy > 0) buyerShare = clamp((pFree - pbW) / subsidy, 0, 1)
    const slopeRuleShare = epsS / (epsS + epsD) // small-tax pass-through prediction

    // ---- SVG paths ----
    const pathAlong = (f: (q: number) => number, qa: number, qb: number, steps = 90): string => {
      let d = ''
      for (let i = 0; i <= steps; i++) {
        const q = qa + (qb - qa) * (i / steps)
        d += `${i === 0 ? 'M' : 'L'} ${x(q).toFixed(1)} ${y(f(q)).toFixed(1)} `
      }
      return d
    }
    const bandPath = (
      fa: (q: number) => number,
      fb: (q: number) => number,
      qa: number,
      qb: number,
      steps = 36
    ): string => {
      if (qb <= qa) return ''
      let d = ''
      for (let i = 0; i <= steps; i++) {
        const q = qa + (qb - qa) * (i / steps)
        d += `${i === 0 ? 'M' : 'L'} ${x(q).toFixed(1)} ${y(fa(q)).toFixed(1)} `
      }
      for (let i = steps; i >= 0; i--) {
        const q = qa + (qb - qa) * (i / steps)
        d += `L ${x(q).toFixed(1)} ${y(fb(q)).toFixed(1)} `
      }
      return d + 'Z'
    }

    const qDStart = clamp(cv.qD(P_MAX), 0.25, Q_MAX)
    const demandPath = pathAlong(cv.pD, qDStart, Q_MAX)
    const supplyPath = pathAlong(cv.pS, 0.25, Q_MAX)

    // the dashed "after policy" curve: which one shifts depends on the statutory side
    let shiftedPath = ''
    if (tax > 0) {
      shiftedPath =
        taxSide === 'producer'
          ? pathAlong((q) => cv.pS(q) + tax, 0.25, Q_MAX)
          : pathAlong((q) => cv.pD(q) - tax, qDStart, Q_MAX)
    } else if (subsidy > 0) {
      shiftedPath = pathAlong((q) => cv.pS(q) - subsidy, 0.25, Q_MAX)
    }

    // consumer surplus: under demand, above the buyer price, left of Q traded
    let csRegion = ''
    {
      const parts: string[] = [`M ${PL} ${y(pb).toFixed(1)}`, `L ${x(qT).toFixed(1)} ${y(pb).toFixed(1)}`]
      if (qT > qTop) {
        for (let i = 0; i <= 30; i++) {
          const q = qT + (qTop - qT) * (i / 30)
          parts.push(`L ${x(q).toFixed(1)} ${y(Math.min(cv.pD(q), P_MAX)).toFixed(1)}`)
        }
      } else {
        parts.push(`L ${x(qT).toFixed(1)} ${PT}`)
      }
      parts.push(`L ${PL} ${PT}`, 'Z')
      csRegion = parts.join(' ')
    }

    // producer surplus: above supply, below the seller price
    let psRegion = ''
    {
      const parts: string[] = [`M ${PL} ${y(0).toFixed(1)}`]
      for (let i = 0; i <= 30; i++) {
        const q = 0.02 + (qT - 0.02) * (i / 30)
        parts.push(`L ${x(q).toFixed(1)} ${y(cv.pS(q)).toFixed(1)}`)
      }
      parts.push(`L ${x(qT).toFixed(1)} ${y(ps).toFixed(1)}`, `L ${PL} ${y(ps).toFixed(1)}`, 'Z')
      psRegion = parts.join(' ')
    }

    const qa = Math.min(qT, qFree)
    const qb = Math.max(qT, qFree)
    const dwlRegion = bandPath(cv.pD, cv.pS, qa, qb)
    const shortageRegion = ceilingBinding ? bandPath(cv.pD, cv.pS, qsC, qdC) : ''
    const surplusRegion = floorBinding ? bandPath(cv.pS, cv.pD, qdF, qsF) : ''

    return {
      qFree, pFree, epsDPoint, epsSPoint,
      qW, pbW, psW, qT, pb, ps, gov,
      cs, psWelf: psS, dwl, total, freeCS, freePS, freeTotal,
      buyerShare, slopeRuleShare,
      ceilingBinding, shortage, qdC, qsC,
      floorBinding, surplus, qsF, qdF,
      demandPath, supplyPath, shiftedPath, csRegion, psRegion, dwlRegion,
      shortageRegion, surplusRegion, qTop
    }
  }, [epsD, epsS, anchorQD, anchorQS, tax, taxSide, subsidy, ceilingOn, ceilingP, floorOn, floorP])

  // ---- pointer dragging on the SVG ----
  const toSvgCoords = (e: React.PointerEvent): { sx: number; sy: number } => {
    const svg = svgRef.current
    if (!svg) return { sx: 0, sy: 0 }
    const rect = svg.getBoundingClientRect()
    // viewBox is uniform-scale (w-full h-auto), so a proportional map is exact
    return {
      sx: ((e.clientX - rect.left) / rect.width) * W,
      sy: ((e.clientY - rect.top) / rect.height) * H
    }
  }

  const startDrag = (target: DragTarget) => (e: React.PointerEvent) => {
    e.preventDefault()
    dragRef.current = target
    svgRef.current?.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    const target = dragRef.current
    if (!target) return
    const { sx, sy } = toSvgCoords(e)
    if (target === 'demand') setAnchorQD(clamp(invQ(sx), 1.5, 7.5))
    else if (target === 'supply') setAnchorQS(clamp(invQ(sx), 1.5, 7.5))
    else if (target === 'ceiling') setCeilingP(clamp(invP(sy), 0.5, 10))
    else setFloorP(clamp(invP(sy), 0.5, 11))
  }

  const endDrag = (e: React.PointerEvent) => {
    dragRef.current = null
    const svg = svgRef.current
    if (svg && svg.hasPointerCapture(e.pointerId)) svg.releasePointerCapture(e.pointerId)
  }

  // ---- control handlers ----
  const changeTax = ([v]: number[]) => {
    setTax(v)
    if (v > 0) setSubsidy(0) // one wedge at a time
  }
  const changeSubsidy = ([v]: number[]) => {
    setSubsidy(v)
    if (v > 0) setTax(0)
  }
  const applyPreset = (key: PresetKey) => {
    const s = PRESETS[key].spec
    setEpsD(s.epsD)
    setEpsS(s.epsS)
    setTax(s.tax)
    setSubsidy(s.subsidy)
    setCeilingOn(s.ceilingOn)
    setCeilingP(s.ceilingP)
    setFloorOn(s.floorOn)
    setFloorP(s.floorP)
    setAnchorQD(4.0)
    setAnchorQS(4.0)
  }

  // small in-SVG readout chip
  const chip = (cx: number, cy: number, label: string, color: string) => (
    <g>
      <rect
        x={cx}
        y={cy - 9}
        width={label.length * 5.9 + 12}
        height={18}
        rx={5}
        fill={color}
        fillOpacity={0.16}
        stroke={color}
        strokeOpacity={0.45}
        strokeWidth={1}
      />
      <text x={cx + 6} y={cy + 4} fontSize={10} fontFamily="monospace" fill={color}>
        {label}
      </text>
    </g>
  )

  const absEpsD = Math.abs(view.epsDPoint)
  const dElasticLabel = absEpsD < 0.9 ? 'inelastic' : absEpsD > 1.4 ? 'elastic' : '≈ unit-elastic'
  const sElasticLabel = view.epsSPoint < 0.9 ? 'inelastic' : view.epsSPoint > 1.4 ? 'elastic' : '≈ unit-elastic'
  const predBuyerPct = Math.round(view.slopeRuleShare * 100)

  // clamp readout chips + control brackets into the plot area so extreme
  // scenarios (very elastic demand under a low ceiling, off-chart Qd) stay labeled
  const ceilQdX = Math.min(x(view.qdC), W - PR)
  const floorQsX = Math.min(x(view.qsF), W - PR)

  const notice = (() => {
    if (tax > 0) {
      const who = absEpsD < view.epsSPoint ? 'buyers' : 'sellers'
      return `A $${tax.toFixed(1)} tax wedges buyers' price ($${view.pb.toFixed(2)}) away from sellers' take-home ($${view.ps.toFixed(2)}), and the rose triangle is surplus destroyed on trades that no longer happen. Demand is ${dElasticLabel} here, so ${who} carry most of the burden — and flipping who legally pays the tax changes nothing.`
    }
    if (subsidy > 0) {
      return `A $${subsidy.toFixed(1)} subsidy pulls the two prices apart the other way: buyers pay $${view.pb.toFixed(2)}, sellers receive $${view.ps.toFixed(2)}, and the emerald rectangle is what the government pays out. Extra trades get made — but some of them are worth less than they cost, which is why a DWL triangle still appears.`
    }
    if (view.ceilingBinding) {
      return `At a $${ceilingP.toFixed(1)} ceiling, buyers want ${view.qdC.toFixed(1)} units but only ${view.qsC.toFixed(1)} are supplied — the rose gap is a shortage. Since price can no longer ration, something else does: queues, black markets, or landlord side-payments.`
    }
    if (view.floorBinding) {
      return `At a $${floorP.toFixed(1)} floor, sellers offer ${view.qsF.toFixed(1)} units but buyers only take ${view.qdF.toFixed(1)} — the teal gap is a surplus (a glut). Governments end up buying, storing, or destroying the excess, as with classic farm programs.`
    }
    return 'Drag the emerald and amber grips to shift demand or supply — the equilibrium re-solves live, and the surplus triangles redraw. Then layer on a tax, subsidy, or price control and watch the welfare table keep score.'
  })()

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-gradient-to-b from-card/95 via-card/80 to-background/95 p-4 md:p-6 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Scale className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground flex flex-wrap items-center gap-2">
              Market Lab: Supply, Demand &amp; Policy
              <Badge variant="outline" className="text-xs border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                P·Q diagram
              </Badge>
            </h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <MousePointerClick className="h-3.5 w-3.5" />
              Drag the D/S grips (and the policy chords) — taxes, subsidies, ceilings, floors and welfare all re-solve live.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {(Object.keys(PRESETS) as PresetKey[]).map((k) => (
            <Button
              key={k}
              size="sm"
              variant="outline"
              onClick={() => applyPreset(k)}
              className="text-[11px] h-7 px-2.5"
            >
              {PRESETS[k].label}
            </Button>
          ))}
          <Button size="sm" variant="ghost" onClick={() => applyPreset('neutral')} className="text-[11px] h-7 px-2">
            <RotateCcw className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Main grid */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 rounded-xl border border-border/60 bg-muted/10 p-4"
        >
          <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-foreground">The market, live</span>
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1"><span className="h-2 w-4 rounded bg-emerald-500" /> demand</span>
              <span className="flex items-center gap-1"><span className="h-2 w-4 rounded bg-amber-500" /> supply</span>
              {view.shiftedPath && (
                <span className="flex items-center gap-1"><span className="h-0.5 w-4 border-t-2 border-dashed border-muted-foreground" /> shifted</span>
              )}
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-rose-500/60" /> DWL</span>
            </div>
          </div>

          <div className="rounded-lg border border-border/50 bg-background/80 p-2 shadow-inner">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              className="w-full h-auto touch-none select-none"
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            >
              <defs>
                <clipPath id="econPlotClip">
                  <rect x={PL} y={PT} width={PLOT_W} height={PLOT_H} />
                </clipPath>
              </defs>

              {/* grid */}
              {[0, 3, 6, 9, 12].map((p) => (
                <g key={`h${p}`}>
                  <line x1={PL} y1={y(p)} x2={W - PR} y2={y(p)} stroke="currentColor" strokeOpacity="0.08" />
                  <text x={PL - 6} y={y(p) + 3} fill="currentColor" opacity="0.5" fontSize="9" textAnchor="end" fontFamily="monospace">
                    {p}
                  </text>
                </g>
              ))}
              {[0, 2, 4, 6, 8, 10].map((q) => (
                <g key={`v${q}`}>
                  <line x1={x(q)} y1={PT} x2={x(q)} y2={H - PB} stroke="currentColor" strokeOpacity="0.08" />
                  <text x={x(q)} y={H - PB + 14} fill="currentColor" opacity="0.5" fontSize="9" textAnchor="middle" fontFamily="monospace">
                    {q}
                  </text>
                </g>
              ))}
              {/* axes */}
              <line x1={PL} y1={PT} x2={PL} y2={H - PB} stroke="currentColor" strokeOpacity="0.35" />
              <line x1={PL} y1={H - PB} x2={W - PR} y2={H - PB} stroke="currentColor" strokeOpacity="0.35" />
              <text x={W / 2} y={H - 4} fill="currentColor" opacity="0.7" fontSize="10" textAnchor="middle">
                Quantity (units)
              </text>
              <text x={12} y={H / 2} fill="currentColor" opacity="0.7" fontSize="10" textAnchor="middle" transform={`rotate(-90 12 ${H / 2})`}>
                Price ($/unit)
              </text>

              <g clipPath="url(#econPlotClip)">
                {/* surplus regions */}
                <path d={view.csRegion} fill={EMERALD} fillOpacity={0.07} stroke={EMERALD} strokeOpacity={0.5} strokeWidth={1} strokeDasharray="4 3" />
                <path d={view.psRegion} fill={AMBER} fillOpacity={0.07} stroke={AMBER} strokeOpacity={0.5} strokeWidth={1} strokeDasharray="4 3" />
                {view.qT > 0.15 && (
                  <>
                    <text x={x(view.qT * 0.45)} y={(y(view.pb) + PT) / 2 + 4} fill={EMERALD} fontSize={11} fontWeight="bold" textAnchor="middle" fontFamily="monospace">CS</text>
                    <text x={x(view.qT * 0.4)} y={(y(0) + y(view.ps)) / 2 + 4} fill={AMBER} fontSize={11} fontWeight="bold" textAnchor="middle" fontFamily="monospace">PS</text>
                  </>
                )}

                {/* shortage / surplus shading from price controls */}
                {view.shortageRegion && <path d={view.shortageRegion} fill={ROSE} fillOpacity={0.1} />}
                {view.surplusRegion && <path d={view.surplusRegion} fill={TEAL} fillOpacity={0.1} />}

                {/* DWL triangle */}
                {view.dwlRegion && (
                  <>
                    <path d={view.dwlRegion} fill={ROSE} fillOpacity={0.22} />
                    <text
                      x={x((Math.min(view.qT, view.qFree) + Math.max(view.qT, view.qFree)) / 2)}
                      y={y((view.pb + view.ps) / 2) + (view.qT < view.qFree ? -8 : 16)}
                      fill={ROSE}
                      fontSize={10}
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      DWL
                    </text>
                  </>
                )}

                {/* tax revenue / subsidy cost rectangle */}
                {tax > 0 && view.qT > 0.1 && y(view.pbW) < y(view.psW) && (
                  <>
                    <rect x={PL} y={y(view.pbW)} width={x(view.qT) - PL} height={y(view.psW) - y(view.pbW)} fill={AMBER} fillOpacity={0.18} />
                    {x(view.qT) - PL > 58 && (
                      <text x={(PL + x(view.qT)) / 2} y={(y(view.pbW) + y(view.psW)) / 2 + 3} fill={AMBER} fontSize={9} textAnchor="middle" fontFamily="monospace">
                        tax revenue
                      </text>
                    )}
                  </>
                )}
                {subsidy > 0 && view.qT > 0.1 && y(view.pbW) > y(view.psW) && (
                  <>
                    <rect x={PL} y={y(view.psW)} width={x(view.qT) - PL} height={y(view.pbW) - y(view.psW)} fill={EMERALD} fillOpacity={0.14} />
                    {x(view.qT) - PL > 58 && (
                      <text x={(PL + x(view.qT)) / 2} y={(y(view.pbW) + y(view.psW)) / 2 + 3} fill={EMERALD} fontSize={9} textAnchor="middle" fontFamily="monospace">
                        subsidy cost
                      </text>
                    )}
                  </>
                )}

                {/* shifted (post-policy) curve */}
                {view.shiftedPath && (
                  <path d={view.shiftedPath} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.75} strokeDasharray="6 4" />
                )}

                {/* main curves */}
                <path d={view.demandPath} fill="none" stroke={EMERALD} strokeWidth={2.75} strokeLinecap="round" />
                <path d={view.supplyPath} fill="none" stroke={AMBER} strokeWidth={2.75} strokeLinecap="round" />
              </g>

              {/* equilibrium guides + dot */}
              <line x1={PL} y1={y(view.pFree)} x2={x(view.qFree)} y2={y(view.pFree)} stroke="currentColor" strokeOpacity={0.3} strokeDasharray="3 3" />
              <line x1={x(view.qFree)} y1={y(view.pFree)} x2={x(view.qFree)} y2={H - PB} stroke="currentColor" strokeOpacity={0.3} strokeDasharray="3 3" />
              <circle cx={x(view.qFree)} cy={y(view.pFree)} r={5} fill={EMERALD} stroke="#f8fafc" strokeWidth={1.5} />

              {/* equilibrium readout chips (clamped into the plot) */}
              {chip(PL + 8, Math.max(y(Math.min(view.pFree, P_MAX)), PT + 12), `P* ${view.pFree.toFixed(1)}`, EMERALD)}
              {chip(Math.min(x(view.qFree) - 30, W - PR - 60), H - PB + 26, `Q* ${view.qFree.toFixed(1)}`, AMBER)}

              {/* buyer/seller price chips when a wedge is active */}
              {(tax > 0 || subsidy > 0) && view.pbW !== view.psW && (
                <>
                  {chip(PL + 8, Math.max(y(view.pbW) - 14, PT + 10), `buy ${view.pbW.toFixed(1)}`, EMERALD)}
                  {chip(PL + 8, Math.min(y(view.psW) + 14, H - PB - 10), `sell ${view.psW.toFixed(1)}`, AMBER)}
                  {/* wedge bracket on the price axis */}
                  <line x1={PL + 1} y1={y(view.pbW)} x2={PL + 1} y2={y(view.psW)} stroke={tax > 0 ? AMBER : EMERALD} strokeWidth={4} strokeLinecap="round" />
                </>
              )}

              {/* price ceiling chord */}
              {ceilingOn && (
                <g>
                  <line x1={PL} y1={y(ceilingP)} x2={W - PR} y2={y(ceilingP)} stroke={ROSE} strokeWidth={2} strokeDasharray="8 4" />
                  <text x={W - PR - 4} y={y(ceilingP) - 6} fill={ROSE} fontSize={9} textAnchor="end" fontFamily="monospace">
                    ceiling {ceilingP.toFixed(1)}
                  </text>
                  {view.ceilingBinding && view.shortage > 0.05 && (
                    <g stroke={ROSE} strokeWidth={1.5} fill="none">
                      <path d={`M ${x(view.qsC)} ${y(ceilingP) - 7} L ${x(view.qsC)} ${y(ceilingP) + 7} M ${x(view.qsC)} ${y(ceilingP)} L ${ceilQdX} ${y(ceilingP)} M ${ceilQdX} ${y(ceilingP) - 7} L ${ceilQdX} ${y(ceilingP) + 7}`} />
                      <text x={(x(view.qsC) + ceilQdX) / 2} y={y(ceilingP) + 20} fill={ROSE} stroke="none" fontSize={9.5} textAnchor="middle" fontFamily="monospace">
                        shortage {view.shortage.toFixed(1)}
                      </text>
                    </g>
                  )}
                  <circle
                    cx={W - PR - 60}
                    cy={y(ceilingP)}
                    r={13}
                    fill="transparent"
                    onPointerDown={startDrag('ceiling')}
                    style={{ cursor: 'ns-resize' }}
                  />
                  <circle cx={W - PR - 60} cy={y(ceilingP)} r={6} fill={ROSE} stroke="#f8fafc" strokeWidth={1.5} style={{ cursor: 'ns-resize' }} onPointerDown={startDrag('ceiling')} />
                </g>
              )}

              {/* price floor chord */}
              {floorOn && (
                <g>
                  <line x1={PL} y1={y(floorP)} x2={W - PR} y2={y(floorP)} stroke={TEAL} strokeWidth={2} strokeDasharray="8 4" />
                  <text x={PL + 6} y={y(floorP) - 6} fill={TEAL} fontSize={9} fontFamily="monospace">
                    floor {floorP.toFixed(1)}
                  </text>
                  {view.floorBinding && view.surplus > 0.05 && (
                    <g stroke={TEAL} strokeWidth={1.5} fill="none">
                      <path d={`M ${x(view.qdF)} ${y(floorP) - 7} L ${x(view.qdF)} ${y(floorP) + 7} M ${x(view.qdF)} ${y(floorP)} L ${floorQsX} ${y(floorP)} M ${floorQsX} ${y(floorP) - 7} L ${floorQsX} ${y(floorP) + 7}`} />
                      <text x={(x(view.qdF) + floorQsX) / 2} y={y(floorP) - 12} fill={TEAL} stroke="none" fontSize={9.5} textAnchor="middle" fontFamily="monospace">
                        surplus {view.surplus.toFixed(1)}
                      </text>
                    </g>
                  )}
                  <circle cx={W - PR - 90} cy={y(floorP)} r={13} fill="transparent" onPointerDown={startDrag('floor')} style={{ cursor: 'ns-resize' }} />
                  <circle cx={W - PR - 90} cy={y(floorP)} r={6} fill={TEAL} stroke="#f8fafc" strokeWidth={1.5} style={{ cursor: 'ns-resize' }} onPointerDown={startDrag('floor')} />
                </g>
              )}

              {/* demand grip */}
              <g>
                <circle cx={x(anchorQD)} cy={y(D_ANCHOR_P)} r={15} fill="transparent" onPointerDown={startDrag('demand')} style={{ cursor: 'ew-resize' }} />
                <circle cx={x(anchorQD)} cy={y(D_ANCHOR_P)} r={8} fill={EMERALD} fillOpacity={0.25} stroke={EMERALD} strokeWidth={2} onPointerDown={startDrag('demand')} style={{ cursor: 'ew-resize' }} />
                <circle cx={x(anchorQD)} cy={y(D_ANCHOR_P)} r={2.6} fill={EMERALD} />
                <text x={x(anchorQD)} y={y(D_ANCHOR_P) - 14} fill={EMERALD} fontSize={10} fontWeight="bold" textAnchor="middle" fontFamily="monospace">D</text>
              </g>

              {/* supply grip */}
              <g>
                <circle cx={x(anchorQS)} cy={y(S_ANCHOR_P)} r={15} fill="transparent" onPointerDown={startDrag('supply')} style={{ cursor: 'ew-resize' }} />
                <circle cx={x(anchorQS)} cy={y(S_ANCHOR_P)} r={8} fill={AMBER} fillOpacity={0.25} stroke={AMBER} strokeWidth={2} onPointerDown={startDrag('supply')} style={{ cursor: 'ew-resize' }} />
                <circle cx={x(anchorQS)} cy={y(S_ANCHOR_P)} r={2.6} fill={AMBER} />
                <text x={x(anchorQS)} y={y(S_ANCHOR_P) + 24} fill={AMBER} fontSize={10} fontWeight="bold" textAnchor="middle" fontFamily="monospace">S</text>
              </g>
            </svg>
          </div>

          {/* live readout chips */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Badge variant="outline" className="text-[10px] font-mono border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
              Q* {view.qFree.toFixed(1)} · P* ${view.pFree.toFixed(2)}
            </Badge>
            {(tax > 0 || subsidy > 0) && (
              <Badge variant="outline" className="text-[10px] font-mono border-amber-500/30 text-amber-400 bg-amber-500/10">
                traded Q {view.qT > Q_MAX ? '>' : ''}{Math.min(view.qT, Q_MAX).toFixed(1)}{view.qT > Q_MAX ? ' (off chart)' : ''} · buy ${view.pb.toFixed(2)} · sell ${view.ps.toFixed(2)}
              </Badge>
            )}
            <Badge variant="outline" className="text-[10px] font-mono border-border/60 text-muted-foreground">
              ε_D {view.epsDPoint.toFixed(2)} ({dElasticLabel}) · ε_S {view.epsSPoint.toFixed(2)} ({sElasticLabel})
            </Badge>
            {view.ceilingBinding && (
              <Badge variant="outline" className="text-[10px] font-mono border-rose-500/30 text-rose-400 bg-rose-500/10">
                ceiling binds — rationing &amp; queues
              </Badge>
            )}
            {ceilingOn && !view.ceilingBinding && (
              <Badge variant="outline" className="text-[10px] font-mono border-border/60 text-muted-foreground">
                ceiling not binding (above market price)
              </Badge>
            )}
            {view.floorBinding && (
              <Badge variant="outline" className="text-[10px] font-mono border-teal-500/30 text-teal-400 bg-teal-500/10">
                floor binds — glut of {view.surplus.toFixed(1)} units
              </Badge>
            )}
            {floorOn && !view.floorBinding && (
              <Badge variant="outline" className="text-[10px] font-mono border-border/60 text-muted-foreground">
                floor not binding (below market price)
              </Badge>
            )}
          </div>
        </motion.div>

        {/* Controls */}
        <div className="lg:col-span-5 space-y-4">
          {/* Market shape */}
          <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Percent className="h-3.5 w-3.5 text-emerald-400" /> Curve Elasticities
              </span>
              <span className="text-[10px] font-mono text-muted-foreground">ε = (dQ/dP)·(P/Q)</span>
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Demand elasticity |ε_D|:</span>
                <span className="font-mono font-bold text-emerald-400">{epsD.toFixed(2)} — {dElasticLabel}</span>
              </div>
              <Slider value={[epsD]} min={0.3} max={3} step={0.05} onValueChange={([v]) => setEpsD(v)} />
              <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                <span>0.3 medicine-steep</span>
                <span>3.0 luxury-flat</span>
              </div>
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Supply elasticity ε_S:</span>
                <span className="font-mono font-bold text-amber-400">{epsS.toFixed(2)} — {sElasticLabel}</span>
              </div>
              <Slider value={[epsS]} min={0.3} max={3} step={0.05} onValueChange={([v]) => setEpsS(v)} />
              <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                <span>0.3 fixed capacity</span>
                <span>3.0 easy to scale</span>
              </div>
            </div>
          </div>

          {/* Tax */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Receipt className="h-3.5 w-3.5 text-amber-400" /> Per-unit Tax
              </span>
              <span className="font-mono text-xs font-bold text-amber-400">${tax.toFixed(1)}</span>
            </div>
            <Slider value={[tax]} min={0} max={8} step={0.5} onValueChange={changeTax} />
            <Tabs value={taxSide} onValueChange={(v) => setTaxSide(v === 'consumer' ? 'consumer' : 'producer')}>
              <TabsList className="h-8">
                <TabsTrigger value="producer" className="text-xs px-3">On producers</TabsTrigger>
                <TabsTrigger value="consumer" className="text-xs px-3">On consumers</TabsTrigger>
              </TabsList>
            </Tabs>
            {tax > 0 && (
              <div className="space-y-1.5">
                <div className="flex h-3.5 rounded-full overflow-hidden border border-border/50">
                  <div className="bg-emerald-500" style={{ width: `${(view.buyerShare ?? 0) * 100}%` }} />
                  <div className="bg-amber-500 flex-1" />
                </div>
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="text-emerald-400">buyers bear {Math.round((view.buyerShare ?? 0) * 100)}%</span>
                  <span className="text-amber-400">sellers bear {Math.round((1 - (view.buyerShare ?? 0)) * 100)}%</span>
                </div>
                <p className="text-[10px] text-muted-foreground leading-snug">
                  Slope rule check: ε_S/(ε_S+|ε_D|) predicts buyers carry {predBuyerPct}% of a small tax. Statutory side ≠ economic incidence — toggle the tabs and watch the split hold.
                </p>
              </div>
            )}
          </div>

          {/* Subsidy */}
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Coins className="h-3.5 w-3.5 text-emerald-400" /> Per-unit Subsidy
              </span>
              <span className="font-mono text-xs font-bold text-emerald-400">${subsidy.toFixed(1)}</span>
            </div>
            <Slider value={[subsidy]} min={0} max={8} step={0.5} onValueChange={changeSubsidy} />
            {subsidy > 0 && (
              <p className="text-[10px] text-muted-foreground leading-snug">
                Supply shifts down: buyers pay less, sellers receive more, output grows. The emerald rectangle is the payout ({(subsidy * view.qT).toFixed(0)} welfare units) — compare it to the surplus gained.
              </p>
            )}
          </div>

          {/* Price controls */}
          <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-4">
            <span className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Landmark className="h-3.5 w-3.5 text-rose-400" /> Price Controls
            </span>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="ceiling-switch" className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <TrendingDown className="h-3.5 w-3.5 text-rose-400" /> Price ceiling (max price)
                </Label>
                <Switch id="ceiling-switch" checked={ceilingOn} onCheckedChange={setCeilingOn} />
              </div>
              <div className={ceilingOn ? 'space-y-1 text-xs' : 'space-y-1 text-xs opacity-40 pointer-events-none'}>
                <div className="flex justify-between text-muted-foreground">
                  <span>Cap at:</span>
                  <span className="font-mono font-bold text-rose-400">${ceilingP.toFixed(2)}</span>
                </div>
                <Slider value={[ceilingP]} min={0.5} max={10} step={0.25} onValueChange={([v]) => setCeilingP(v)} />
              </div>
              {view.ceilingBinding && (
                <Badge variant="outline" className="text-[10px] border-rose-500/30 text-rose-400 bg-rose-500/10">
                  shortage {view.shortage.toFixed(1)} — expect queues, rationing, side-payments
                </Badge>
              )}
            </div>

            <Separator className="opacity-50" />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="floor-switch" className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5 text-teal-400" /> Price floor (min price)
                </Label>
                <Switch id="floor-switch" checked={floorOn} onCheckedChange={setFloorOn} />
              </div>
              <div className={floorOn ? 'space-y-1 text-xs' : 'space-y-1 text-xs opacity-40 pointer-events-none'}>
                <div className="flex justify-between text-muted-foreground">
                  <span>Prop at:</span>
                  <span className="font-mono font-bold text-teal-400">${floorP.toFixed(2)}</span>
                </div>
                <Slider value={[floorP]} min={1} max={11} step={0.25} onValueChange={([v]) => setFloorP(v)} />
              </div>
              {view.floorBinding && (
                <Badge variant="outline" className="text-[10px] border-teal-500/30 text-teal-400 bg-teal-500/10">
                  surplus {view.surplus.toFixed(1)} — gluts, storage costs, bought-up harvests
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Welfare table + explainer */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-xl border border-border/60 bg-muted/10 p-4"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Gauge className="h-3.5 w-3.5 text-teal-400" /> Welfare Ledger
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">welfare units</span>
          </div>
          <div className="text-xs font-mono">
            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-border/40 text-muted-foreground text-[10px] uppercase tracking-wider">
              <span>component</span>
              <span className="text-right">free market</span>
              <span className="text-right">with policy</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-border/30">
              <span className="text-emerald-400">Consumer surplus</span>
              <span className="text-right text-muted-foreground">{view.freeCS.toFixed(1)}</span>
              <span className="text-right text-foreground">{view.cs.toFixed(1)}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-border/30">
              <span className="text-amber-400">Producer surplus</span>
              <span className="text-right text-muted-foreground">{view.freePS.toFixed(1)}</span>
              <span className="text-right text-foreground">{view.psWelf.toFixed(1)}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-border/30">
              <span className="text-foreground/80">Government</span>
              <span className="text-right text-muted-foreground">0.0</span>
              <span className="text-right text-foreground">{view.gov >= 0 ? '+' : ''}{view.gov.toFixed(1)}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-border/30">
              <span className="text-rose-400">Deadweight loss</span>
              <span className="text-right text-muted-foreground">0.0</span>
              <span className="text-right text-rose-400">{view.dwl.toFixed(1)}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1.5 font-bold">
              <span className="text-foreground">Total</span>
              <span className="text-right text-muted-foreground">{view.freeTotal.toFixed(1)}</span>
              <span className={'text-right ' + (view.dwl > 0.05 ? 'text-rose-400' : 'text-emerald-400')}>{view.total.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 leading-snug">
            DWL = area between the curves over the trades your policy destroys (½·|ΔQ|·wedge for near-linear stretches). Charted convention: WTP above the plot top is capped, so ledger and shading agree.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="rounded-xl border border-border/60 bg-muted/10 p-4 flex flex-col"
        >
          <div className="flex items-center gap-1.5 mb-2">
            <Info className="h-3.5 w-3.5 text-teal-400" />
            <span className="text-xs font-semibold text-foreground uppercase tracking-wider">What to notice</span>
          </div>
          <p className="font-serif italic text-sm leading-relaxed text-foreground/90">{notice}</p>
          <p className="text-[10px] text-muted-foreground mt-auto pt-3">
            Try: set a heavy tax with inelastic demand (medicine preset), then drag |ε_D| up past 2 — watch the burden migrate from buyers to sellers while the tax revenue rectangle shrinks.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
