'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  FlaskConical,
  RotateCcw,
  Sliders,
  Sparkles,
  Layers,
  ArrowRight,
  TrendingUp,
  Thermometer,
  Gauge,
  Droplets,
  HelpCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'

export default function EquilibriumLab() {
  const [activeTab, setActiveTab] = useState<'titration' | 'lechatelier'>('titration')

  // --- Titration State ---
  const [systemType, setSystemType] = useState<'sa-sb' | 'wa-sb' | 'wb-sa'>('wa-sb')
  const [ca, setCa] = useState<number>(0.1) // Acid concentration (M)
  const [va, setVa] = useState<number>(25.0) // Acid volume (mL)
  const [cb, setCb] = useState<number>(0.1) // Base concentration (M)
  const [vAdded, setVAdded] = useState<number>(12.5) // Added titrant volume (mL)
  const [indicator, setIndicator] = useState<'phenolphthalein' | 'methyl-orange' | 'bromothymol'>('phenolphthalein')

  // Equivalence point volume
  const vEq = useMemo(() => {
    return (ca * va) / cb
  }, [ca, va, cb])

  // pKa values
  const pKa = 4.76 // acetic acid
  const pKb = 4.75 // ammonia

  // Calculate pH at any volume V
  const computePH = (v: number) => {
    const vTotal = va + v
    if (vTotal <= 0) return 7

    if (systemType === 'sa-sb') {
      const molesAcid = (ca * va) / 1000
      const molesBase = (cb * v) / 1000
      if (Math.abs(molesAcid - molesBase) < 1e-7) {
        return 7.0
      }
      if (molesAcid > molesBase) {
        const remainingH = (molesAcid - molesBase) / (vTotal / 1000)
        return Math.max(0.3, -Math.log10(remainingH))
      } else {
        const excessOH = (molesBase - molesAcid) / (vTotal / 1000)
        const pOH = -Math.log10(excessOH)
        return Math.min(13.7, 14.0 - pOH)
      }
    } else if (systemType === 'wa-sb') {
      const Ka = Math.pow(10, -pKa)
      if (v === 0) {
        // Initial weak acid
        const h = Math.sqrt(Ka * ca)
        return -Math.log10(h)
      }
      if (v < vEq) {
        // Buffer region
        const baseMoles = (cb * v) / 1000
        const acidMoles = (ca * va) / 1000 - baseMoles
        if (acidMoles <= 0) return 8.7
        const ph = pKa + Math.log10(baseMoles / acidMoles)
        return Math.min(14, Math.max(0, ph))
      } else if (Math.abs(v - vEq) < 0.1) {
        // Equivalence point: salt hydrolysis
        const cSalt = (ca * va) / vTotal
        const Kw = 1e-14
        const Kh = Kw / Ka
        const oh = Math.sqrt(Kh * cSalt)
        const pOH = -Math.log10(oh)
        return 14 - pOH
      } else {
        // Post equivalence: excess strong base dominates
        const excessOH = (cb * (v - vEq)) / vTotal
        const pOH = -Math.log10(excessOH)
        return Math.min(13.8, 14 - pOH)
      }
    } else {
      // Weak Base + Strong Acid
      const Kb = Math.pow(10, -pKb)
      if (v === 0) {
        const oh = Math.sqrt(Kb * ca)
        return 14 - -Math.log10(oh)
      }
      if (v < vEq) {
        const acidMoles = (cb * v) / 1000
        const baseMoles = (ca * va) / 1000 - acidMoles
        if (baseMoles <= 0) return 5.3
        const pOH = pKb + Math.log10(acidMoles / baseMoles)
        return 14 - pOH
      } else if (Math.abs(v - vEq) < 0.1) {
        const cSalt = (ca * va) / vTotal
        const Kw = 1e-14
        const Kh = Kw / Kb
        const h = Math.sqrt(Kh * cSalt)
        return -Math.log10(h)
      } else {
        const excessH = (cb * (v - vEq)) / vTotal
        return Math.max(0.5, -Math.log10(excessH))
      }
    }
  }

  const currentPH = useMemo(() => computePH(vAdded), [vAdded, systemType, ca, va, cb])

  // Solution color based on chosen indicator & pH
  const indicatorColor = useMemo(() => {
    if (indicator === 'phenolphthalein') {
      // Colorless < 8.2, Pink > 8.2, Magenta > 10
      if (currentPH < 8.2) return { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'Colorless (clear)', hex: 'rgba(240, 248, 255, 0.4)' }
      if (currentPH < 10.0) return { bg: 'bg-pink-500/30', border: 'border-pink-500/50', text: 'Pale Pink', hex: 'rgba(244, 114, 182, 0.65)' }
      return { bg: 'bg-pink-600/60', border: 'border-pink-500', text: 'Deep Magenta Pink', hex: 'rgba(219, 39, 119, 0.9)' }
    }
    if (indicator === 'methyl-orange') {
      // Red < 3.1, Orange 3.1-4.4, Yellow > 4.4
      if (currentPH < 3.1) return { bg: 'bg-red-500/40', border: 'border-red-500', text: 'Red', hex: 'rgba(239, 68, 68, 0.8)' }
      if (currentPH < 4.4) return { bg: 'bg-orange-500/40', border: 'border-orange-500', text: 'Orange', hex: 'rgba(249, 115, 22, 0.8)' }
      return { bg: 'bg-yellow-500/35', border: 'border-yellow-500/50', text: 'Yellow', hex: 'rgba(234, 179, 8, 0.75)' }
    }
    // Bromothymol Blue: Yellow < 6.0, Green 6.0-7.6, Blue > 7.6
    if (currentPH < 6.0) return { bg: 'bg-amber-500/35', border: 'border-amber-500/60', text: 'Yellow', hex: 'rgba(245, 158, 11, 0.8)' }
    if (currentPH < 7.6) return { bg: 'bg-emerald-500/40', border: 'border-emerald-500/70', text: 'Green', hex: 'rgba(16, 185, 129, 0.8)' }
    return { bg: 'bg-blue-600/50', border: 'border-blue-500', text: 'Royal Blue', hex: 'rgba(37, 99, 235, 0.85)' }
  }, [indicator, currentPH])

  // Titration curve points for SVG
  const curvePoints = (() => {
    const pts: { v: number; ph: number }[] = []
    const maxV = vEq * 2
    const step = maxV / 70
    for (let v = 0; v <= maxV; v += step) {
      pts.push({ v, ph: computePH(v) })
    }
    return pts
  })()

  // SVG coordinate mapper
  const svgWidth = 420
  const svgHeight = 220
  const padX = 40
  const padY = 25
  const plotW = svgWidth - padX - 20
  const plotH = svgHeight - padY - 25

  const maxV = vEq * 2
  const mapX = (v: number) => padX + (v / maxV) * plotW
  const mapY = (ph: number) => svgHeight - padY - (ph / 14.0) * plotH

  const pathD = (() => {
    if (curvePoints.length === 0) return ''
    return curvePoints.reduce((acc, pt, i) => {
      const x = mapX(pt.v)
      const y = mapY(pt.ph)
      return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`
    }, '')
  })()

  // --- Le Chatelier State ---
  // System: 2 NO2 (brown gas, 2 mol) <=> N2O4 (colorless gas, 1 mol) + 57.2 kJ
  const [temperature, setTemperature] = useState<number>(298) // Kelvin (200K to 450K)
  const [pressure, setPressure] = useState<number>(1.0) // atm (0.5 to 4.0 atm)
  const [addedReactant, setAddedReactant] = useState<number>(0) // injected NO2

  // Le Chatelier shifts:
  // Exothermic: raising T shifts REVERSE (more brown NO2)
  // Higher pressure: favors fewer moles -> shifts FORWARD (more colorless N2O4)
  const no2Fraction = useMemo(() => {
    // base at 298K, 1 atm ~ 0.35
    const tempFactor = (temperature - 200) / 250 // 0 to 1
    const pressFactor = (4.0 - pressure) / 3.5 // higher press reduces NO2
    let val = 0.2 + tempFactor * 0.5 + pressFactor * 0.25 + addedReactant * 0.15
    return Math.max(0.05, Math.min(0.95, val))
  }, [temperature, pressure, addedReactant])

  const n2o4Fraction = 1 - no2Fraction

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-gradient-to-b from-card/95 via-card/80 to-background/95 p-4 md:p-6 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
            <FlaskConical className="h-5 w-5 animate-pulse" />
          </span>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              Chemical & Ionic Equilibrium Lab
              <Badge variant="outline" className="text-xs border-teal-500/30 text-teal-400 bg-teal-500/10">
                Physical Chemistry
              </Badge>
            </h3>
            <p className="text-xs text-muted-foreground">
              Simulate quantitative acid-base titrations, buffer equilibrium, and Le Châtelier shifts.
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 bg-muted/40 p-1 rounded-xl border border-border/50">
          <Button
            size="sm"
            variant={activeTab === 'titration' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('titration')}
            className="text-xs h-8"
          >
            Titration Curve & pH
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'lechatelier' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('lechatelier')}
            className="text-xs h-8"
          >
            Le Châtelier Gas Box
          </Button>
        </div>
      </div>

      {activeTab === 'titration' ? (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Interactive Titration Setup & Controls (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-4">
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
                Reaction System
              </span>
              <div className="grid grid-cols-3 gap-1.5 text-xs">
                <button
                  onClick={() => { setSystemType('wa-sb'); setVAdded(12.5) }}
                  className={`p-2 rounded-lg border text-center transition-all ${
                    systemType === 'wa-sb'
                      ? 'bg-teal-500/20 border-teal-500 text-teal-300 font-bold'
                      : 'border-border/50 text-muted-foreground hover:bg-muted/40'
                  }`}
                >
                  CH₃COOH + NaOH
                  <span className="block text-[10px] font-normal opacity-70">Weak Acid / SB</span>
                </button>
                <button
                  onClick={() => { setSystemType('sa-sb'); setVAdded(12.5) }}
                  className={`p-2 rounded-lg border text-center transition-all ${
                    systemType === 'sa-sb'
                      ? 'bg-teal-500/20 border-teal-500 text-teal-300 font-bold'
                      : 'border-border/50 text-muted-foreground hover:bg-muted/40'
                  }`}
                >
                  HCl + NaOH
                  <span className="block text-[10px] font-normal opacity-70">Strong / Strong</span>
                </button>
                <button
                  onClick={() => { setSystemType('wb-sa'); setVAdded(12.5) }}
                  className={`p-2 rounded-lg border text-center transition-all ${
                    systemType === 'wb-sa'
                      ? 'bg-teal-500/20 border-teal-500 text-teal-300 font-bold'
                      : 'border-border/50 text-muted-foreground hover:bg-muted/40'
                  }`}
                >
                  NH₃ + HCl
                  <span className="block text-[10px] font-normal opacity-70">Weak Base / SA</span>
                </button>
              </div>

              {/* Sliders */}
              <div className="space-y-3 pt-2 text-xs">
                <div>
                  <div className="flex justify-between text-muted-foreground mb-1">
                    <span>Analyte Acid Concentration (Cₐ):</span>
                    <span className="font-mono font-bold text-foreground">{ca.toFixed(2)} M</span>
                  </div>
                  <Slider
                    value={[ca]}
                    min={0.02}
                    max={0.3}
                    step={0.01}
                    onValueChange={([val]) => setCa(val)}
                  />
                </div>

                <div>
                  <div className="flex justify-between text-muted-foreground mb-1">
                    <span>Analyte Volume (Vₐ):</span>
                    <span className="font-mono font-bold text-foreground">{va.toFixed(1)} mL</span>
                  </div>
                  <Slider
                    value={[va]}
                    min={10}
                    max={50}
                    step={1}
                    onValueChange={([val]) => setVa(val)}
                  />
                </div>

                {/* Titrant Buret Slider */}
                <div className="bg-teal-500/10 p-3 rounded-lg border border-teal-500/30">
                  <div className="flex justify-between text-teal-300 font-semibold mb-1">
                    <span className="flex items-center gap-1.5">
                      <Droplets className="h-3.5 w-3.5" /> Added Titrant Volume (V_buret):
                    </span>
                    <span className="font-mono text-sm">{vAdded.toFixed(1)} mL</span>
                  </div>
                  <Slider
                    value={[vAdded]}
                    min={0}
                    max={vEq * 2}
                    step={0.2}
                    onValueChange={([val]) => setVAdded(val)}
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-1.5 font-mono">
                    <span>0.0 mL (Start)</span>
                    <span className="text-teal-400 font-bold">V_eq = {vEq.toFixed(1)} mL</span>
                    <span>{(vEq * 2).toFixed(1)} mL</span>
                  </div>
                </div>

                {/* Quick jump buttons */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setVAdded(0)}
                    className="flex-1 text-[11px] h-7"
                  >
                    Start (0 mL)
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setVAdded(vEq / 2)}
                    className="flex-1 text-[11px] h-7"
                  >
                    Half-Eq ({ (vEq/2).toFixed(1) } mL)
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setVAdded(vEq)}
                    className="flex-1 text-[11px] h-7 text-teal-400 font-bold"
                  >
                    Equiv ({ vEq.toFixed(1) } mL)
                  </Button>
                </div>
              </div>

              {/* Indicator choice */}
              <div className="border-t border-border/50 pt-3">
                <span className="text-[11px] font-medium text-muted-foreground block mb-2">
                  Select Visual pH Indicator:
                </span>
                <div className="grid grid-cols-3 gap-1.5 text-[11px]">
                  <button
                    onClick={() => setIndicator('phenolphthalein')}
                    className={`p-1.5 rounded border text-center transition-all ${
                      indicator === 'phenolphthalein'
                        ? 'bg-pink-500/20 border-pink-500 text-pink-300 font-semibold'
                        : 'border-border/40 text-muted-foreground'
                    }`}
                  >
                    Phenolphthalein
                    <span className="block text-[9px] opacity-70">pH 8.2–10.0</span>
                  </button>
                  <button
                    onClick={() => setIndicator('methyl-orange')}
                    className={`p-1.5 rounded border text-center transition-all ${
                      indicator === 'methyl-orange'
                        ? 'bg-orange-500/20 border-orange-500 text-orange-300 font-semibold'
                        : 'border-border/40 text-muted-foreground'
                    }`}
                  >
                    Methyl Orange
                    <span className="block text-[9px] opacity-70">pH 3.1–4.4</span>
                  </button>
                  <button
                    onClick={() => setIndicator('bromothymol')}
                    className={`p-1.5 rounded border text-center transition-all ${
                      indicator === 'bromothymol'
                        ? 'bg-blue-500/20 border-blue-500 text-blue-300 font-semibold'
                        : 'border-border/40 text-muted-foreground'
                    }`}
                  >
                    Bromothymol Blue
                    <span className="block text-[9px] opacity-70">pH 6.0–7.6</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Visual Beaker with Dynamic Indicator Liquid */}
            <div className="rounded-xl border border-border/60 bg-muted/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Simulated Beaker */}
                <div className="relative h-20 w-16 rounded-b-xl border-2 border-slate-400/60 overflow-hidden flex flex-col justify-end bg-slate-900/40 shadow-inner">
                  {/* Graduations */}
                  <div className="absolute top-2 right-1 text-[7px] text-slate-500 font-mono">- 50</div>
                  <div className="absolute top-7 right-1 text-[7px] text-slate-500 font-mono">- 25</div>
                  {/* Liquid fill */}
                  <motion.div
                    className="w-full transition-colors duration-300"
                    style={{
                      height: `${Math.min(92, 40 + (vAdded / (vEq * 2)) * 48)}%`,
                      backgroundColor: indicatorColor.hex,
                    }}
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Titration Flask Solution</div>
                  <div className="text-[11px] font-medium text-emerald-400 mt-0.5">
                    Indicator: <span className="underline">{indicatorColor.text}</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">
                    Total Volume = {(va + vAdded).toFixed(1)} mL
                  </div>
                </div>
              </div>

              {/* Big pH Meter Display */}
              <div className="text-right">
                <div className="text-[10px] uppercase font-bold text-muted-foreground">Current pH</div>
                <div className="text-3xl font-black font-mono text-teal-400 drop-shadow">
                  {currentPH.toFixed(2)}
                </div>
                <div className="text-[10px] text-muted-foreground font-medium">
                  {currentPH < 7 ? 'Acidic' : currentPH === 7 ? 'Neutral' : 'Basic'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live SVG Titration Curve (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-border/60 bg-muted/10 p-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4 text-teal-400" />
                  Titration Curve: pH vs Volume of Titrant
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">
                  Equivalence at {vEq.toFixed(1)} mL
                </span>
              </div>

              {/* SVG Curve Plot */}
              <div className="relative rounded-lg border border-border/50 bg-background/80 p-2 overflow-hidden shadow-inner">
                <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto">
                  {/* Grid Lines */}
                  {[0, 2, 4, 6, 8, 10, 12, 14].map(ph => (
                    <g key={ph}>
                      <line
                        x1={padX}
                        y1={mapY(ph)}
                        x2={svgWidth - 20}
                        y2={mapY(ph)}
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray={ph === 7 ? '4 2' : undefined}
                      />
                      <text
                        x={padX - 8}
                        y={mapY(ph) + 3}
                        fill="currentColor"
                        opacity="0.5"
                        fontSize="9"
                        textAnchor="end"
                        fontFamily="monospace"
                      >
                        {ph}
                      </text>
                    </g>
                  ))}

                  {/* Indicator transition band */}
                  {indicator === 'phenolphthalein' && (
                    <rect
                      x={padX}
                      y={mapY(10.0)}
                      width={plotW}
                      height={mapY(8.2) - mapY(10.0)}
                      fill="#ec4899"
                      fillOpacity="0.12"
                    />
                  )}
                  {indicator === 'methyl-orange' && (
                    <rect
                      x={padX}
                      y={mapY(4.4)}
                      width={plotW}
                      height={mapY(3.1) - mapY(4.4)}
                      fill="#f97316"
                      fillOpacity="0.15"
                    />
                  )}
                  {indicator === 'bromothymol' && (
                    <rect
                      x={padX}
                      y={mapY(7.6)}
                      width={plotW}
                      height={mapY(6.0) - mapY(7.6)}
                      fill="#3b82f6"
                      fillOpacity="0.14"
                    />
                  )}

                  {/* Equivalence Vertical Line */}
                  <line
                    x1={mapX(vEq)}
                    y1={padY}
                    x2={mapX(vEq)}
                    y2={svgHeight - padY}
                    stroke="#14b8a6"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    strokeOpacity="0.7"
                  />

                  {/* Titration Curve */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#0d9488"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Current Operating Point */}
                  <circle
                    cx={mapX(vAdded)}
                    cy={mapY(currentPH)}
                    r="5"
                    fill="#2dd4bf"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  {/* Pulse ring around current point */}
                  <circle
                    cx={mapX(vAdded)}
                    cy={mapY(currentPH)}
                    r="9"
                    fill="none"
                    stroke="#2dd4bf"
                    strokeWidth="1"
                    strokeOpacity="0.6"
                    className="animate-ping"
                  />

                  {/* Axis labels */}
                  <text
                    x={svgWidth / 2}
                    y={svgHeight - 6}
                    fill="currentColor"
                    opacity="0.7"
                    fontSize="10"
                    textAnchor="middle"
                  >
                    Volume of Titrant Added (mL)
                  </text>
                  <text
                    x={12}
                    y={svgHeight / 2}
                    fill="currentColor"
                    opacity="0.7"
                    fontSize="10"
                    textAnchor="middle"
                    transform={`rotate(-90 12 ${svgHeight / 2})`}
                  >
                    pH
                  </text>
                </svg>
              </div>
            </div>

            {/* Scientific Explanation Card */}
            <div className="mt-3 rounded-lg bg-muted/40 p-3 border border-border/40 text-xs space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <HelpCircle className="h-3.5 w-3.5 text-teal-400" />
                <span>Chemistry Concept Breakdown:</span>
              </div>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                {systemType === 'wa-sb' && (
                  <>
                    At half-equivalence (<span className="font-mono text-teal-300">{(vEq / 2).toFixed(1)} mL</span>), <span className="font-mono">[HA] = [A⁻]</span>, so according to Henderson-Hasselbalch: <span className="font-mono font-bold text-foreground">pH = pKₐ = 4.76</span>. This is the region of maximum buffer capacity!
                  </>
                )}
                {systemType === 'sa-sb' && (
                  <>
                    Strong acid with strong base exhibits a very sharp vertical inflection at equivalence (<span className="font-mono font-bold text-foreground">pH = 7.00</span>). Almost any indicator jumping across pH 4–10 will accurately catch the endpoint.
                  </>
                )}
                {systemType === 'wb-sa' && (
                  <>
                    At the equivalence point, the salt NH₄Cl hydrolyzes: <span className="font-mono">NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺</span>, giving an acidic endpoint (<span className="font-mono text-foreground font-bold">pH ~ 5.3</span>). Methyl orange is ideal here!
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Le Chatelier Chamber Tab */
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Controls */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-4">
              <div>
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
                  Reversible Gaseous Equilibrium
                </span>
                <div className="mt-1.5 p-2 rounded-lg bg-muted/60 border border-border/50 text-center font-mono text-xs">
                  <span className="text-amber-400 font-bold">2 NO₂(g)</span> (brown, 2 mol) ⇌{' '}
                  <span className="text-sky-300 font-bold">N₂O₄(g)</span> (colorless, 1 mol) + 57.2 kJ
                </div>
              </div>

              {/* Temperature Slider */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Thermometer className="h-3.5 w-3.5 text-rose-400" /> Temperature (T):
                  </span>
                  <span className="font-mono font-bold text-foreground">{temperature} K</span>
                </div>
                <Slider
                  value={[temperature]}
                  min={200}
                  max={450}
                  step={5}
                  onValueChange={([val]) => setTemperature(val)}
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>200 K (Cold)</span>
                  <span>298 K (STP)</span>
                  <span>450 K (Hot)</span>
                </div>
              </div>

              {/* Pressure Slider */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Gauge className="h-3.5 w-3.5 text-teal-400" /> Total Pressure (P):
                  </span>
                  <span className="font-mono font-bold text-foreground">{pressure.toFixed(1)} atm</span>
                </div>
                <Slider
                  value={[pressure]}
                  min={0.5}
                  max={4.0}
                  step={0.1}
                  onValueChange={([val]) => setPressure(val)}
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>0.5 atm (Expanded)</span>
                  <span>1.0 atm</span>
                  <span>4.0 atm (Compressed)</span>
                </div>
              </div>

              {/* Reagent Perturbation */}
              <div className="pt-2 border-t border-border/50">
                <span className="text-xs font-semibold text-muted-foreground block mb-2">
                  Chemical Stress Injection:
                </span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setAddedReactant(prev => Math.min(prev + 0.5, 1.5))}
                    className="flex-1 text-xs h-8"
                  >
                    Inject NO₂ Gas
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => { setAddedReactant(0); setTemperature(298); setPressure(1.0) }}
                    className="text-xs h-8"
                  >
                    <RotateCcw className="h-3.5 w-3.5 mr-1" /> Reset
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Reaction Cylinder & Equilibrium Shift Gauge */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-border/60 bg-muted/10 p-5">
            <div>
              <span className="text-xs font-semibold text-foreground block mb-3">
                Gas Cylinder Visualization (Color corresponds to [NO₂] vs [N₂O₄])
              </span>

              {/* Simulated Sealed Gas Cylinder */}
              <div className="relative h-44 w-full rounded-2xl border-2 border-slate-500/50 overflow-hidden flex flex-col justify-end shadow-2xl backdrop-blur-md">
                {/* Movable Piston */}
                <div
                  className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-slate-400 to-slate-600 border-b-2 border-slate-700 shadow-md transition-all duration-300"
                  style={{
                    top: `${Math.max(0, (1 - 1 / pressure) * 35)}%`,
                  }}
                />

                {/* Gas Mixture color: Brown NO2 opacity changes */}
                <div
                  className="w-full h-full transition-colors duration-500 flex items-center justify-center p-4 text-center"
                  style={{
                    backgroundColor: `rgba(180, 83, 9, ${no2Fraction * 0.85})`,
                  }}
                >
                  <div className="bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10 text-xs font-mono text-white">
                    {no2Fraction > 0.65 ? (
                      <span className="text-amber-300 font-bold">Deep Reddish-Brown (NO₂ Rich)</span>
                    ) : no2Fraction < 0.3 ? (
                      <span className="text-sky-200 font-bold">Nearly Colorless (N₂O₄ Favored)</span>
                    ) : (
                      <span>Intermediate Amber Mixture</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Live Mole Fraction Bars */}
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between font-mono">
                  <span className="text-amber-400">Mole Fraction [NO₂]: {(no2Fraction * 100).toFixed(1)}%</span>
                  <span className="text-sky-300">Mole Fraction [N₂O₄]: {(n2o4Fraction * 100).toFixed(1)}%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden flex">
                  <div
                    className="h-full bg-gradient-to-r from-amber-600 to-amber-500 transition-all duration-300"
                    style={{ width: `${no2Fraction * 100}%` }}
                  />
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 to-teal-400 transition-all duration-300"
                    style={{ width: `${n2o4Fraction * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Le Chatelier Rule Summary */}
            <div className="mt-4 rounded-lg bg-muted/40 p-3 border border-border/40 text-xs space-y-1">
              <span className="font-semibold text-foreground block">
                Le Châtelier's Principle in Action:
              </span>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                • <strong>Heating (endothermic shift):</strong> Supplies heat, driving the reaction to the left (2 mol NO₂, browner).<br />
                • <strong>Compression (increasing P):</strong> Drives the reaction toward fewer gas molecules (2 moles NO₂ → 1 mole N₂O₄), causing the brown tint to fade.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
