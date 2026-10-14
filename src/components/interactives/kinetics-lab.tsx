'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Timer,
  RotateCcw,
  Sparkles,
  Flame,
  Zap,
  TrendingDown,
  Play,
  Pause,
  HelpCircle,
  BarChart2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'

export default function KineticsLab() {
  const [order, setOrder] = useState<0 | 1 | 2>(1) // 0th, 1st, or 2nd order
  const [a0, setA0] = useState<number>(1.0) // initial concentration [A]0 (M)
  const [temp, setTemp] = useState<number>(300) // Temperature (K)
  const [hasCatalyst, setHasCatalyst] = useState<boolean>(false)
  const [simTime, setSimTime] = useState<number>(10) // scrubber time (s)

  // Arrhenius calculations:
  // k = A * exp(-Ea / RT)
  // Normal Ea = 50 kJ/mol, Catalyzed Ea = 30 kJ/mol
  const Ea = hasCatalyst ? 30000 : 50000 // J/mol
  const R = 8.314 // J/(mol*K)
  const A_factor = 1e7 // frequency factor pre-exponential

  // Effective rate constant k
  const kEff = useMemo(() => {
    const rawK = A_factor * Math.exp(-Ea / (R * temp))
    // scale to nice laboratory time scale (0.01 to 0.4 s^-1)
    return Math.max(0.01, Math.min(0.5, rawK * 0.0003))
  }, [Ea, temp])

  // Half-life t_half
  const tHalf = useMemo(() => {
    if (order === 0) return a0 / (2 * kEff)
    if (order === 1) return Math.log(2) / kEff
    return 1 / (kEff * a0)
  }, [order, a0, kEff])

  // Concentration at any time t
  const computeConc = (t: number) => {
    if (order === 0) {
      return Math.max(0, a0 - kEff * t)
    }
    if (order === 1) {
      return a0 * Math.exp(-kEff * t)
    }
    // 2nd order: 1/[A] = 1/[A]0 + k t
    return a0 / (1 + kEff * a0 * t)
  }

  const currentConcA = useMemo(() => computeConc(simTime), [simTime, order, a0, kEff])
  const currentConcP = Math.max(0, a0 - currentConcA) // Product [P]

  // SVG dimensions for [A] vs t plot
  const svgW = 420
  const svgH = 210
  const padX = 40
  const padY = 25
  const plotW = svgW - padX - 15
  const plotH = svgH - padY - 20
  const maxTime = 40 // seconds total window

  const mapX = (t: number) => padX + (t / maxTime) * plotW
  const mapY = (c: number) => svgH - padY - (c / 1.5) * plotH

  // Curve points
  const curvePoints = (() => {
    const pts: { t: number; a: number; p: number }[] = []
    for (let t = 0; t <= maxTime; t += 0.5) {
      const a = computeConc(t)
      pts.push({ t, a, p: a0 - a })
    }
    return pts
  })()

  const pathA = (() => {
    return curvePoints.reduce((acc, pt, i) => {
      const x = mapX(pt.t)
      const y = mapY(pt.a)
      return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`
    }, '')
  })()

  const pathP = useMemo(() => {
    return curvePoints.reduce((acc, pt, i) => {
      const x = mapX(pt.t)
      const y = mapY(pt.p)
      return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`
    }, '')
  }, [curvePoints])

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-gradient-to-b from-card/95 via-card/80 to-background/95 p-4 md:p-6 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Timer className="h-5 w-5 animate-pulse" />
          </span>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              Chemical Kinetics & Reaction Rates Studio
              <Badge variant="outline" className="text-xs border-amber-500/30 text-amber-400 bg-amber-500/10">
                Rate Laws & Arrhenius
              </Badge>
            </h3>
            <p className="text-xs text-muted-foreground">
              Simulate integrated rate laws (0th, 1st, 2nd order), half-lives, and Arrhenius temperature dependency.
            </p>
          </div>
        </div>

        {/* Reaction Order Selector */}
        <div className="flex items-center gap-1.5 bg-muted/40 p-1 rounded-xl border border-border/50">
          <Button
            size="sm"
            variant={order === 0 ? 'default' : 'ghost'}
            onClick={() => setOrder(0)}
            className="text-xs h-8"
          >
            Zero Order
          </Button>
          <Button
            size="sm"
            variant={order === 1 ? 'default' : 'ghost'}
            onClick={() => setOrder(1)}
            className="text-xs h-8"
          >
            First Order
          </Button>
          <Button
            size="sm"
            variant={order === 2 ? 'default' : 'ghost'}
            onClick={() => setOrder(2)}
            className="text-xs h-8"
          >
            Second Order
          </Button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Sliders and Reaction Parameters (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                Reaction Parameters
              </span>
              <span className="text-xs font-mono text-amber-400">
                A → Products (P)
              </span>
            </div>

            {/* Initial Concentration Slider */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Initial Reactant [A]₀:</span>
                <span className="font-mono font-bold text-foreground">{a0.toFixed(2)} M</span>
              </div>
              <Slider
                value={[a0]}
                min={0.2}
                max={1.5}
                step={0.05}
                onValueChange={([val]) => setA0(val)}
              />
            </div>

            {/* Temperature Slider */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Flame className="h-3.5 w-3.5 text-rose-400" /> Temperature (T):
                </span>
                <span className="font-mono font-bold text-foreground">{temp} K</span>
              </div>
              <Slider
                value={[temp]}
                min={270}
                max={380}
                step={5}
                onValueChange={([val]) => setTemp(val)}
              />
              <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                <span>270 K (Slow)</span>
                <span>300 K (Ambient)</span>
                <span>380 K (Rapid)</span>
              </div>
            </div>

            {/* Catalyst Toggle */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/40">
              <div>
                <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-amber-400" /> Addition of Catalyst
                </span>
                <span className="text-[10px] text-muted-foreground block mt-0.5">
                  Lowers Eₐ from 50 kJ/mol to 30 kJ/mol
                </span>
              </div>
              <Button
                size="sm"
                variant={hasCatalyst ? 'default' : 'outline'}
                onClick={() => setHasCatalyst(!hasCatalyst)}
                className="text-xs h-7"
              >
                {hasCatalyst ? 'Active' : 'None'}
              </Button>
            </div>

            {/* Reaction Time Scrubber */}
            <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 space-y-1.5">
              <div className="flex justify-between text-xs text-amber-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Timer className="h-3.5 w-3.5" /> Reaction Progress Scrubber:
                </span>
                <span className="font-mono">{simTime.toFixed(1)} s</span>
              </div>
              <Slider
                value={[simTime]}
                min={0}
                max={maxTime}
                step={0.5}
                onValueChange={([val]) => setSimTime(val)}
              />
            </div>
          </div>

          {/* Rate Law & Half-Life Card */}
          <div className="rounded-xl border border-border/60 bg-muted/10 p-4 space-y-2 text-xs">
            <div className="flex justify-between items-center py-1 border-b border-border/30">
              <span className="text-muted-foreground">Differential Rate Law:</span>
              <span className="font-mono font-bold text-foreground">
                {order === 0 && 'Rate = k (constant)'}
                {order === 1 && 'Rate = k [A]'}
                {order === 2 && 'Rate = k [A]²'}
              </span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-border/30">
              <span className="text-muted-foreground">Effective Rate Constant (k):</span>
              <span className="font-mono font-bold text-amber-400">
                {kEff.toFixed(4)} {order === 0 ? 'M·s⁻¹' : order === 1 ? 's⁻¹' : 'M⁻¹·s⁻¹'}
              </span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-border/30">
              <span className="text-muted-foreground">Reaction Half-Life (t½):</span>
              <span className="font-mono font-bold text-emerald-400">
                {tHalf < 100 ? `${tHalf.toFixed(2)} s` : '> 100 s'}
              </span>
            </div>

            <div className="flex justify-between items-center py-1">
              <span className="text-muted-foreground">Linearized Diagnostic Plot:</span>
              <span className="font-mono font-semibold text-teal-300">
                {order === 0 && '[A] vs t is linear'}
                {order === 1 && 'ln[A] vs t is linear'}
                {order === 2 && '1/[A] vs t is linear'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Graphs & Activation Energy Profile (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-border/60 bg-muted/10 p-4 space-y-4">
          {/* Top: Concentration vs Time Plot */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <BarChart2 className="h-4 w-4 text-amber-400" />
                Concentration Profiles: [A] & [P] vs Time
              </span>
              <div className="flex items-center gap-3 text-[11px] font-mono">
                <span className="flex items-center gap-1 text-rose-400">
                  <span className="h-2 w-2 rounded-full bg-rose-500" /> Reactant [A]
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Product [P]
                </span>
              </div>
            </div>

            {/* SVG Plot */}
            <div className="relative rounded-lg border border-border/50 bg-background/80 p-2 overflow-hidden shadow-inner">
              <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-auto">
                {/* Horizontal grid lines for concentration */}
                {[0, 0.5, 1.0, 1.5].map(c => (
                  <g key={c}>
                    <line
                      x1={padX}
                      y1={mapY(c)}
                      x2={svgW - 15}
                      y2={mapY(c)}
                      stroke="currentColor"
                      strokeOpacity="0.1"
                    />
                    <text
                      x={padX - 6}
                      y={mapY(c) + 3}
                      fill="currentColor"
                      opacity="0.5"
                      fontSize="9"
                      textAnchor="end"
                      fontFamily="monospace"
                    >
                      {c.toFixed(1)}
                    </text>
                  </g>
                ))}

                {/* Vertical time marker */}
                <line
                  x1={mapX(simTime)}
                  y1={padY}
                  x2={mapX(simTime)}
                  y2={svgH - padY}
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />

                {/* Product Curve [P] */}
                <path
                  d={pathP}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Reactant Curve [A] */}
                <path
                  d={pathA}
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Current Reactant Point */}
                <circle
                  cx={mapX(simTime)}
                  cy={mapY(currentConcA)}
                  r="4.5"
                  fill="#ef4444"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                {/* Current Product Point */}
                <circle
                  cx={mapX(simTime)}
                  cy={mapY(currentConcP)}
                  r="4.5"
                  fill="#10b981"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />

                {/* Axis Labels */}
                <text
                  x={svgW / 2}
                  y={svgH - 5}
                  fill="currentColor"
                  opacity="0.7"
                  fontSize="10"
                  textAnchor="middle"
                >
                  Time elapsed (seconds)
                </text>
                <text
                  x={12}
                  y={svgH / 2}
                  fill="currentColor"
                  opacity="0.7"
                  fontSize="10"
                  textAnchor="middle"
                  transform={`rotate(-90 12 ${svgH / 2})`}
                >
                  Concentration (M)
                </text>
              </svg>
            </div>
          </div>

          {/* Bottom: Arrhenius Activation Energy Barrier Profile */}
          <div className="rounded-lg bg-muted/40 p-3 border border-border/40">
            <div className="flex justify-between items-center text-xs font-semibold mb-2">
              <span className="flex items-center gap-1.5 text-foreground">
                <Flame className="h-3.5 w-3.5 text-amber-400" />
                Arrhenius Reaction Coordinate & Energy Barrier (Eₐ)
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                Eₐ = {(Ea / 1000).toFixed(0)} kJ/mol
              </span>
            </div>

            {/* Reaction Coordinate Graphic */}
            <div className="relative h-20 w-full rounded border border-border/40 bg-slate-950/60 p-2 flex items-center justify-center">
              <svg viewBox="0 0 380 70" className="w-full h-full">
                {/* Uncatalyzed Barrier (dashed orange) */}
                <path
                  d="M 20 50 Q 180 -15 340 55"
                  fill="none"
                  stroke={hasCatalyst ? '#64748b' : '#f59e0b'}
                  strokeWidth="2"
                  strokeDasharray={hasCatalyst ? '3 2' : undefined}
                />
                {/* Catalyzed Barrier (green) */}
                {hasCatalyst && (
                  <path
                    d="M 20 50 Q 180 18 340 55"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                  />
                )}
                {/* Reactants and Products labels */}
                <text x="25" y="45" fill="#f87171" fontSize="9" fontWeight="bold">Reactants</text>
                <text x="290" y="50" fill="#34d399" fontSize="9" fontWeight="bold">Products</text>
                <text x="180" y={hasCatalyst ? 30 : 12} fill="#fbbf24" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  {hasCatalyst ? 'Lowered Eₐ (Catalyst)' : 'Activation Energy Barrier Eₐ'}
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
