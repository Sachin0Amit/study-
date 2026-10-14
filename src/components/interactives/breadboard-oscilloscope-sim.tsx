'use client'

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap,
  Activity,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Radio,
  Power,
  Layers,
  Sparkles,
  Info,
  CheckCircle2,
  Trash2,
  HelpCircle,
  Maximize2,
  Gauge,
  Cpu,
  ChevronRight,
  ShieldAlert
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TeX } from '@/components/math'

/* =====================================================================
   Live Interactive Breadboard & Dual-Channel Oscilloscope Circuit Lab
   Real-time electronic circuit simulation with animated electron currents,
   breadboard jumper wire routing, components toolbox, phosphor oscilloscope,
   and curated experiments (RC/RLC, Rectifier, Transistor, 555 Timer).
   ===================================================================== */

export type ComponentType =
  | 'resistor'
  | 'capacitor'
  | 'inductor'
  | 'led'
  | 'diode'
  | 'transistor'
  | 'switch'
  | 'ic_7408'
  | 'ic_555'

export interface PlacedComponent {
  id: string
  type: ComponentType
  name: string
  value: number // Ohms, Farads (uF), Henries (mH), etc.
  unit: string
  col1: number // Breadboard column 1..30
  row1: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'top_vcc' | 'top_gnd' | 'bot_vcc' | 'bot_gnd'
  col2: number
  row2: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'top_vcc' | 'top_gnd' | 'bot_vcc' | 'bot_gnd'
  col3?: number // For 3-pin transistor
  row3?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'top_vcc' | 'top_gnd' | 'bot_vcc' | 'bot_gnd'
  color?: string // For LED (red, green, blue) or wire
  state?: boolean // For switches (closed/open)
}

export interface WireConnection {
  id: string
  fromCol: number
  fromRow: string
  toCol: number
  toRow: string
  color: string // 'red' | 'black' | 'yellow' | 'blue' | 'green'
}

export interface LabPreset {
  id: string
  title: string
  category: 'analog' | 'ac_physics' | 'semiconductor' | 'digital'
  description: string
  theoryFormula: string
  expectedWaveform: string
  suggestedFreq: number // Hz
  suggestedTimeDiv: number // ms/div
  components: PlacedComponent[]
  wires: WireConnection[]
  probe1Node: { col: number; row: string }
  probe2Node: { col: number; row: string }
}

// Resistor standard 4-band color decoder
function getResistorBands(ohms: number): [string, string, string, string] {
  const COLOR_MAP = ['#000000', '#8b5a2b', '#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7', '#6b7280', '#ffffff']
  if (ohms <= 0) return ['#000', '#000', '#000', '#d4af37']
  const s = ohms.toExponential()
  const match = s.match(/^(\d)\.?(\d)?e\+?(-?\d+)$/)
  if (!match) return ['#8b5a2b', '#000000', '#ef4444', '#d4af37']

  const digit1 = parseInt(match[1]) || 1
  const digit2 = parseInt(match[2] || '0') || 0
  const exp = (parseInt(match[3]) || 1) - 1

  return [
    COLOR_MAP[Math.min(9, Math.max(0, digit1))],
    COLOR_MAP[Math.min(9, Math.max(0, digit2))],
    COLOR_MAP[Math.min(9, Math.max(0, exp))],
    '#d4af37' // Gold 5% tolerance
  ]
}

// --- Curated Preset Experiments ---
export const LAB_PRESETS: LabPreset[] = [
  {
    id: 'rc_filter',
    title: 'RC Low-Pass Filter & Time Constant (τ = RC)',
    category: 'analog',
    description: 'Square and sinusoidal wave response of an RC low-pass integrator. Observe the exponential charging curve V(t) = V₀(1 - e^(-t/RC)) and phase lag.',
    theoryFormula: '\\tau = R \\cdot C = 1000\\,\\Omega \\times 10\\,\\mu\\text{F} = 10\\,\\text{ms},\\quad f_c = \\frac{1}{2\\pi RC} = 15.9\\,\\text{Hz}',
    expectedWaveform: 'Ch1: Input Square Wave (Yellow) · Ch2: Exponential RC Curve (Cyan)',
    suggestedFreq: 50,
    suggestedTimeDiv: 5,
    components: [
      { id: 'c1', type: 'resistor', name: 'R1 (1 kΩ)', value: 1000, unit: 'Ω', col1: 5, row1: 'top_vcc', col2: 12, row2: 'C' },
      { id: 'c2', type: 'capacitor', name: 'C1 (10 µF)', value: 10, unit: 'µF', col1: 12, row1: 'D', col2: 12, row2: 'bot_gnd' },
      { id: 'c3', type: 'led', name: 'LED1 Indicator', value: 2.0, unit: 'V', col1: 12, row1: 'B', col2: 16, row2: 'bot_gnd', color: '#22c55e' }
    ],
    wires: [
      { id: 'w1', fromCol: 5, fromRow: 'top_vcc', toCol: 1, toRow: 'top_vcc', color: 'red' },
      { id: 'w2', fromCol: 12, fromRow: 'bot_gnd', toCol: 1, toRow: 'bot_gnd', color: 'black' }
    ],
    probe1Node: { col: 5, row: 'top_vcc' }, // Ch1 input
    probe2Node: { col: 12, row: 'C' }       // Ch2 output across capacitor
  },
  {
    id: 'rlc_resonance',
    title: 'Series RLC Resonance & AC Phase Shift',
    category: 'ac_physics',
    description: 'Series combination of resistor, inductor, and capacitor. Sweep the AC frequency to observe the sharp resonance peak where XL = XC and current peaks in phase with voltage.',
    theoryFormula: 'f_0 = \\frac{1}{2\\pi\\sqrt{LC}} = \\frac{1}{2\\pi\\sqrt{100\\,\\text{mH} \\times 10\\,\\mu\\text{F}}} = 159.2\\,\\text{Hz}',
    expectedWaveform: 'Ch1: AC Driving Voltage · Ch2: Resonant Capacitor Voltage (90° phase shift at resonance)',
    suggestedFreq: 160,
    suggestedTimeDiv: 2,
    components: [
      { id: 'c1', type: 'resistor', name: 'R1 (100 Ω)', value: 100, unit: 'Ω', col1: 4, row1: 'top_vcc', col2: 9, row2: 'C' },
      { id: 'c2', type: 'inductor', name: 'L1 (100 mH)', value: 100, unit: 'mH', col1: 9, row1: 'D', col2: 15, row2: 'C' },
      { id: 'c3', type: 'capacitor', name: 'C1 (10 µF)', value: 10, unit: 'µF', col1: 15, row1: 'D', col2: 15, row2: 'bot_gnd' }
    ],
    wires: [
      { id: 'w1', fromCol: 4, fromRow: 'top_vcc', toCol: 1, toRow: 'top_vcc', color: 'red' },
      { id: 'w2', fromCol: 15, fromRow: 'bot_gnd', toCol: 1, toRow: 'bot_gnd', color: 'black' }
    ],
    probe1Node: { col: 4, row: 'top_vcc' },
    probe2Node: { col: 15, row: 'C' }
  },
  {
    id: 'bridge_rectifier',
    title: 'Diode Rectifier & Smoothing Filter',
    category: 'semiconductor',
    description: 'Converts AC sinusoidal voltage into pulsating and smoothed DC voltage. Shows forward diode voltage drop (~0.7V) and capacitor ripple reduction.',
    theoryFormula: 'V_{\\text{dc}} \\approx V_{\\text{peak}} - 0.7\\,\\text{V},\\quad V_{\\text{ripple}} = \\frac{I_{\\text{load}}}{f \\cdot C}',
    expectedWaveform: 'Ch1: AC Sinusoid (Input) · Ch2: Smoothed DC with exponential ripple',
    suggestedFreq: 60,
    suggestedTimeDiv: 5,
    components: [
      { id: 'c1', type: 'diode', name: 'D1 (1N4007)', value: 0.7, unit: 'V', col1: 5, row1: 'top_vcc', col2: 11, row2: 'C' },
      { id: 'c2', type: 'capacitor', name: 'C_filter (47 µF)', value: 47, unit: 'µF', col1: 11, row1: 'D', col2: 11, row2: 'bot_gnd' },
      { id: 'c3', type: 'resistor', name: 'R_load (1 kΩ)', value: 1000, unit: 'Ω', col1: 11, row1: 'B', col2: 18, row2: 'bot_gnd' },
      { id: 'c4', type: 'led', name: 'DC Indicator LED', value: 2.0, unit: 'V', col1: 18, row1: 'C', col2: 18, row2: 'bot_gnd', color: '#ef4444' }
    ],
    wires: [
      { id: 'w1', fromCol: 5, fromRow: 'top_vcc', toCol: 1, toRow: 'top_vcc', color: 'red' },
      { id: 'w2', fromCol: 11, fromRow: 'bot_gnd', toCol: 1, toRow: 'bot_gnd', color: 'black' }
    ],
    probe1Node: { col: 5, row: 'top_vcc' },
    probe2Node: { col: 11, row: 'C' }
  },
  {
    id: 'transistor_switch',
    title: 'NPN BJT Transistor Switch & LED Driver',
    category: 'semiconductor',
    description: 'Demonstrates common-emitter transistor switching. A tiny base current Ib saturates the collector-emitter path (Vce ≈ 0.2V), switching on a high-current LED load.',
    theoryFormula: 'I_c = \\beta \\cdot I_b,\\quad I_b = \\frac{V_{\\text{in}} - 0.7\\,\\text{V}}{R_{\\text{base}}},\\quad V_{ce,\\text{sat}} \\approx 0.2\\,\\text{V}',
    expectedWaveform: 'Ch1: Base Trigger Pulse (Yellow) · Ch2: Inverted Collector Voltage Vce (Cyan)',
    suggestedFreq: 10,
    suggestedTimeDiv: 20,
    components: [
      { id: 'c1', type: 'resistor', name: 'R_base (4.7 kΩ)', value: 4700, unit: 'Ω', col1: 6, row1: 'top_vcc', col2: 10, row2: 'C' },
      { id: 'c2', type: 'transistor', name: 'Q1 (2N2222 NPN)', value: 100, unit: 'β', col1: 10, row1: 'D', col2: 11, row2: 'D', col3: 12, row3: 'bot_gnd' },
      { id: 'c3', type: 'resistor', name: 'R_collector (330 Ω)', value: 330, unit: 'Ω', col1: 11, row1: 'B', col2: 11, row2: 'top_vcc' },
      { id: 'c4', type: 'led', name: 'Load LED', value: 2.0, unit: 'V', col1: 11, row1: 'C', col2: 16, row2: 'bot_gnd', color: '#3b82f6' }
    ],
    wires: [
      { id: 'w1', fromCol: 6, fromRow: 'top_vcc', toCol: 1, toRow: 'top_vcc', color: 'red' },
      { id: 'w2', fromCol: 12, fromRow: 'bot_gnd', toCol: 1, toRow: 'bot_gnd', color: 'black' }
    ],
    probe1Node: { col: 6, row: 'top_vcc' },
    probe2Node: { col: 11, row: 'B' }
  }
]

export default function BreadboardOscilloscopeSim() {
  const [selectedPresetId, setSelectedPresetId] = useState('rc_filter')
  const [isPowered, setIsPowered] = useState(true)
  const [running, setRunning] = useState(true)

  // Power Supply Controls
  const [dcVoltage, setDcVoltage] = useState(5.0) // Volts
  const [acWaveform, setAcWaveform] = useState<'sine' | 'square' | 'triangle'>('square')
  const [acFreq, setAcFreq] = useState(50) // Hz
  const [acVpp, setAcVpp] = useState(5.0) // Vpp

  // Oscilloscope Controls
  const [timeDiv, setTimeDiv] = useState(5) // ms/div
  const [ch1VoltsDiv, setCh1VoltsDiv] = useState(1.0) // V/div
  const [ch2VoltsDiv, setCh2VoltsDiv] = useState(1.0) // V/div
  const [ch1Offset, setCh1Offset] = useState(0) // screen offset pixels
  const [ch2Offset, setCh2Offset] = useState(0)
  const [triggerMode, setTriggerMode] = useState<'auto' | 'normal'>('auto')

  // Breadboard Circuit State
  const [components, setComponents] = useState<PlacedComponent[]>(LAB_PRESETS[0].components)
  const [wires, setWires] = useState<WireConnection[]>(LAB_PRESETS[0].wires)
  const [probe1, setProbe1] = useState(LAB_PRESETS[0].probe1Node)
  const [probe2, setProbe2] = useState(LAB_PRESETS[0].probe2Node)

  // Interactive wiring state
  const [wireStart, setWireStart] = useState<{ col: number; row: string } | null>(null)
  const [selectedWireColor, setSelectedWireColor] = useState('red')

  // Animation time
  const [simTime, setSimTime] = useState(0)
  const scopeCanvasRef = useRef<HTMLCanvasElement>(null)

  const currentPreset = useMemo(() => {
    return LAB_PRESETS.find(p => p.id === selectedPresetId) || LAB_PRESETS[0]
  }, [selectedPresetId])

  // Load preset handler
  const loadPreset = (preset: LabPreset) => {
    setSelectedPresetId(preset.id)
    setComponents(preset.components)
    setWires(preset.wires)
    setProbe1(preset.probe1Node)
    setProbe2(preset.probe2Node)
    setAcFreq(preset.suggestedFreq)
    setTimeDiv(preset.suggestedTimeDiv)
    if (preset.id === 'rc_filter') setAcWaveform('square')
    if (preset.id === 'rlc_resonance') setAcWaveform('sine')
    if (preset.id === 'bridge_rectifier') setAcWaveform('sine')
  }

  // Animation frame loop
  useEffect(() => {
    let animId: number
    let lastT = performance.now()

    const loop = (t: number) => {
      const dt = (t - lastT) / 1000
      lastT = t
      if (running && isPowered) {
        setSimTime(prev => prev + dt)
      }
      animId = requestAnimationFrame(loop)
    }

    animId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animId)
  }, [running, isPowered])

  // Real-Time Waveform Generator for Oscilloscope
  const sampleWaveform = useCallback((channel: 1 | 2, t: number): number => {
    if (!isPowered) return 0

    const omega = 2 * Math.PI * acFreq
    const vPeak = acVpp / 2

    if (currentPreset.id === 'rc_filter') {
      // Tau = R * C = 1000 * 10e-6 = 10 ms
      const tau = 0.010
      if (channel === 1) {
        // Square wave input
        return Math.sin(omega * t) >= 0 ? vPeak : -vPeak
      } else {
        // Output across capacitor: exponential charge/discharge
        const period = 1 / acFreq
        const tInPeriod = t % period
        const halfT = period / 2
        if (tInPeriod < halfT) {
          return vPeak * (1 - 2 * Math.exp(-tInPeriod / tau))
        } else {
          return -vPeak * (1 - 2 * Math.exp(-(tInPeriod - halfT) / tau))
        }
      }
    } else if (currentPreset.id === 'rlc_resonance') {
      // f0 = 159 Hz
      const f0 = 159.2
      const deltaF = Math.abs(acFreq - f0)
      const resonanceGain = 1 / Math.sqrt(1 + Math.pow(deltaF / 20, 2))
      const phaseShift = Math.atan2(deltaF, 20)

      if (channel === 1) {
        return vPeak * Math.sin(omega * t)
      } else {
        return vPeak * resonanceGain * 1.8 * Math.sin(omega * t - phaseShift)
      }
    } else if (currentPreset.id === 'bridge_rectifier') {
      if (channel === 1) {
        return vPeak * Math.sin(omega * t)
      } else {
        // Rectified + filter capacitor ripple
        const rawRect = Math.max(0, Math.abs(vPeak * Math.sin(omega * t)) - 0.7)
        const rippleFactor = 0.15
        const smoothed = (vPeak - 0.7) * (1 - rippleFactor * (1 - Math.abs(Math.sin(omega * t))))
        return Math.max(0, smoothed)
      }
    } else {
      // Transistor switch
      if (channel === 1) {
        return Math.sin(omega * t) >= 0 ? 5.0 : 0.0
      } else {
        // Inverted collector: low when base is high
        return Math.sin(omega * t) >= 0 ? 0.2 : 5.0
      }
    }
  }, [isPowered, acFreq, acVpp, currentPreset])

  // Oscilloscope Canvas Rendering Loop
  useEffect(() => {
    const canvas = scopeCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = canvas.clientWidth * dpr
    const height = canvas.clientHeight * dpr
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width
      canvas.height = height
    }

    ctx.save()
    ctx.scale(dpr, dpr)
    const cw = canvas.clientWidth
    const ch = canvas.clientHeight

    // Dark phosphor CRT background
    ctx.fillStyle = '#06100c'
    ctx.fillRect(0, 0, cw, ch)

    // Oscilloscope Reticle Grid (8 vertical divisions x 10 horizontal divisions)
    const gridCols = 10
    const gridRows = 8
    const dx = cw / gridCols
    const dy = ch / gridRows

    ctx.strokeStyle = '#0f3826'
    ctx.lineWidth = 1

    for (let i = 0; i <= gridCols; i++) {
      ctx.beginPath()
      ctx.moveTo(i * dx, 0)
      ctx.lineTo(i * dx, ch)
      ctx.stroke()
    }
    for (let j = 0; j <= gridRows; j++) {
      ctx.beginPath()
      ctx.moveTo(0, j * dy)
      ctx.lineTo(cw, j * dy)
      ctx.stroke()
    }

    // Center Crosshairs with minor tick subdivisions
    ctx.strokeStyle = '#185d40'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(cw / 2, 0); ctx.lineTo(cw / 2, ch)
    ctx.moveTo(0, ch / 2); ctx.lineTo(cw, ch / 2)
    ctx.stroke()

    // Minor tick marks on center axes
    ctx.fillStyle = '#185d40'
    for (let x = 0; x < cw; x += dx / 5) {
      ctx.fillRect(x, ch / 2 - 2, 1, 4)
    }
    for (let y = 0; y < ch; y += dy / 5) {
      ctx.fillRect(cw / 2 - 2, y, 4, 1)
    }

    if (!isPowered) {
      ctx.restore()
      return
    }

    // Calculate time span across the 10 screen divisions
    const totalTimeSpan = (timeDiv * 10) / 1000 // seconds
    const midY = ch / 2

    // Draw Channel 1 Trace (Yellow Phosphor)
    ctx.strokeStyle = '#facc15' // Yellow
    ctx.shadowColor = '#facc15'
    ctx.shadowBlur = 6
    ctx.lineWidth = 2.2
    ctx.beginPath()

    for (let px = 0; px < cw; px += 2) {
      const frac = px / cw
      const t = simTime + frac * totalTimeSpan
      const v = sampleWaveform(1, t)
      const py = midY - (v / ch1VoltsDiv) * dy + ch1Offset
      if (px === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.stroke()

    // Draw Channel 2 Trace (Cyan Phosphor)
    ctx.strokeStyle = '#22d3ee' // Cyan
    ctx.shadowColor = '#22d3ee'
    ctx.shadowBlur = 6
    ctx.lineWidth = 2.2
    ctx.beginPath()

    for (let px = 0; px < cw; px += 2) {
      const frac = px / cw
      const t = simTime + frac * totalTimeSpan
      const v = sampleWaveform(2, t)
      const py = midY - (v / ch2VoltsDiv) * dy + ch2Offset
      if (px === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.stroke()

    ctx.restore()
  }, [simTime, isPowered, timeDiv, ch1VoltsDiv, ch2VoltsDiv, ch1Offset, ch2Offset, sampleWaveform])

  // Breadboard Click Handling (Placing wires)
  const handleHoleClick = (col: number, row: string) => {
    if (!wireStart) {
      setWireStart({ col, row })
    } else {
      if (wireStart.col === col && wireStart.row === row) {
        setWireStart(null)
        return
      }
      // Create new wire
      const newWire: WireConnection = {
        id: `wire-${Date.now()}`,
        fromCol: wireStart.col,
        fromRow: wireStart.row,
        toCol: col,
        toRow: row,
        color: selectedWireColor
      }
      setWires(prev => [...prev, newWire])
      setWireStart(null)
    }
  }

  // Clear user-added wires
  const resetWires = () => {
    setWires(currentPreset.wires)
    setWireStart(null)
  }

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-gradient-to-b from-card/95 via-card/85 to-background/95 p-4 md:p-6 shadow-2xl backdrop-blur-xl">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-emerald-500/20 border border-amber-500/30 text-amber-400 shadow-inner">
            <Radio className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                Interactive Breadboard &amp; Dual-Channel Oscilloscope
              </h2>
              <Badge variant="outline" className="text-[11px] font-semibold border-amber-500/40 text-amber-300 bg-amber-500/10">
                Live Circuit Engine
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Simulate real electronics: wire up components, observe electron currents, and analyze AC waveforms on a calibrated CRT scope.
            </p>
          </div>
        </div>

        {/* Global Power & Run Toggles */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant={isPowered ? 'default' : 'destructive'}
            onClick={() => setIsPowered(p => !p)}
            className={`text-xs h-8 font-semibold shadow-xs ${
              isPowered ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-red-600 hover:bg-red-500 text-white'
            }`}
          >
            <Power className="h-3.5 w-3.5 mr-1" />
            <span>{isPowered ? 'VCC Active (5V)' : 'Power Cut (0V)'}</span>
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={() => setRunning(r => !r)}
            className="text-xs h-8"
          >
            {running ? <Pause className="h-3 w-3 mr-1 text-amber-400" /> : <Play className="h-3 w-3 mr-1 text-emerald-400" />}
            <span>{running ? 'Pause Sim' : 'Resume Sim'}</span>
          </Button>
        </div>
      </div>

      {/* Preset Experiment Selector */}
      <div className="mt-4 flex flex-wrap items-center gap-2 border-b border-border/40 pb-3">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-1">
          Lab Preset:
        </span>
        {LAB_PRESETS.map(p => (
          <Button
            key={p.id}
            size="sm"
            variant={selectedPresetId === p.id ? 'default' : 'outline'}
            onClick={() => loadPreset(p)}
            className="text-xs h-7 font-medium"
          >
            {p.title.split('&')[0]}
          </Button>
        ))}
      </div>

      {/* Dual Layout: Oscilloscope & Signal Generator on Top, Breadboard on Bottom */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Oscilloscope Screen (7 cols) */}
        <div className="lg:col-span-7 flex flex-col rounded-xl border border-border/80 bg-slate-950 p-3 shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-950/60 text-xs">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-emerald-400 font-bold uppercase tracking-wider">
                CRT Phosphor Oscilloscope (Dual Ch)
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono">
              <span className="text-yellow-400">CH1: {ch1VoltsDiv} V/div</span>
              <span className="text-cyan-400">CH2: {ch2VoltsDiv} V/div</span>
              <span className="text-emerald-400">TIME: {timeDiv} ms/div</span>
            </div>
          </div>

          {/* CRT Screen */}
          <div className="relative mt-2 w-full h-[240px] md:h-[280px] rounded-lg overflow-hidden border border-emerald-900/40 bg-black">
            <canvas ref={scopeCanvasRef} className="w-full h-full block" />

            {/* Probe Labels Overlay */}
            <div className="absolute top-2 left-2 flex gap-2">
              <span className="px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 text-[10px] font-mono">
                Probe 1 (Yellow) → Input V_in
              </span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-mono">
                Probe 2 (Cyan) → Output V_out
              </span>
            </div>

            {/* Live Measurements HUD */}
            <div className="absolute bottom-2 right-2 bg-slate-950/90 border border-emerald-500/40 px-2.5 py-1.5 rounded text-[11px] font-mono text-emerald-300 shadow-md">
              <div>f = {acFreq.toFixed(1)} Hz · T = {(1000 / acFreq).toFixed(2)} ms</div>
              <div>V_pp = {acVpp.toFixed(2)} V · V_rms = {(acVpp / (2 * Math.SQRT2)).toFixed(2)} V</div>
            </div>
          </div>

          {/* Scope Knobs & Calibrated Controls */}
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <div className="p-2 rounded bg-slate-900/80 border border-border/40">
              <div className="text-[10px] text-muted-foreground">Timebase:</div>
              <div className="flex items-center gap-1 mt-1">
                {[1, 5, 20].map(td => (
                  <button
                    key={td}
                    onClick={() => setTimeDiv(td)}
                    className={`px-1.5 py-0.5 rounded text-[11px] font-mono ${timeDiv === td ? 'bg-emerald-600 text-white font-bold' : 'bg-muted text-muted-foreground'}`}
                  >
                    {td}ms
                  </button>
                ))}
              </div>
            </div>

            <div className="p-2 rounded bg-slate-900/80 border border-border/40">
              <div className="text-[10px] text-yellow-400">CH1 Scale:</div>
              <div className="flex items-center gap-1 mt-1">
                {[0.5, 1.0, 2.0].map(v => (
                  <button
                    key={v}
                    onClick={() => setCh1VoltsDiv(v)}
                    className={`px-1.5 py-0.5 rounded text-[11px] font-mono ${ch1VoltsDiv === v ? 'bg-yellow-500 text-slate-950 font-bold' : 'bg-muted text-muted-foreground'}`}
                  >
                    {v}V
                  </button>
                ))}
              </div>
            </div>

            <div className="p-2 rounded bg-slate-900/80 border border-border/40">
              <div className="text-[10px] text-cyan-400">CH2 Scale:</div>
              <div className="flex items-center gap-1 mt-1">
                {[0.5, 1.0, 2.0].map(v => (
                  <button
                    key={v}
                    onClick={() => setCh2VoltsDiv(v)}
                    className={`px-1.5 py-0.5 rounded text-[11px] font-mono ${ch2VoltsDiv === v ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-muted text-muted-foreground'}`}
                  >
                    {v}V
                  </button>
                ))}
              </div>
            </div>

            <div className="p-2 rounded bg-slate-900/80 border border-border/40">
              <div className="text-[10px] text-muted-foreground">Trigger:</div>
              <button
                onClick={() => setTriggerMode(t => t === 'auto' ? 'normal' : 'auto')}
                className="mt-1 px-2 py-0.5 rounded text-[11px] font-mono bg-muted text-foreground uppercase"
              >
                {triggerMode} Edge
              </button>
            </div>
          </div>
        </div>

        {/* Function Generator & Physics Lab Theory (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {/* AC Function Generator */}
          <div className="rounded-xl border border-border/60 bg-card/70 p-3.5">
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="font-semibold text-xs text-foreground flex items-center gap-1.5">
                <Sliders className="h-3.5 w-3.5 text-amber-400" /> AC Function Generator
              </span>
              <span className="text-[10px] font-mono text-muted-foreground">Input V_sig</span>
            </div>

            <div className="mt-2.5 space-y-2.5 text-xs">
              {/* Waveform Select */}
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Waveform:</span>
                <div className="flex gap-1">
                  {(['sine', 'square', 'triangle'] as const).map(wf => (
                    <button
                      key={wf}
                      onClick={() => setAcWaveform(wf)}
                      className={`px-2 py-0.5 rounded text-xs capitalize font-medium ${
                        acWaveform === wf ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {wf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency Slider */}
              <div>
                <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                  <span>Frequency (f):</span>
                  <span className="font-mono text-amber-400 font-bold">{acFreq} Hz</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={acFreq}
                  onChange={(e) => setAcFreq(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              {/* Amplitude Vpp */}
              <div>
                <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                  <span>Amplitude (V_pp):</span>
                  <span className="font-mono text-amber-400 font-bold">{acVpp.toFixed(1)} V</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={acVpp}
                  onChange={(e) => setAcVpp(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Theory & Equation Box */}
          <div className="rounded-xl border border-border/60 bg-muted/20 p-3.5 text-xs flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-foreground font-semibold mb-1">
                <Activity className="h-3.5 w-3.5 text-indigo-400" />
                <span>{currentPreset.title}</span>
              </div>
              <p className="text-muted-foreground text-[11px] leading-relaxed mb-2.5">
                {currentPreset.description}
              </p>
              <div className="p-2 rounded bg-background/80 border border-border/40 font-mono text-indigo-300 text-[11px] overflow-x-auto">
                <TeX tex={currentPreset.theoryFormula} />
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-border/40 text-[11px] text-muted-foreground">
              <strong>Expected Scope Display:</strong> {currentPreset.expectedWaveform}
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Solderless Breadboard Component Canvas */}
      <div className="mt-6 rounded-xl border border-border/80 bg-neutral-900 p-4 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-amber-400 shadow-sm" />
            <span className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
              Solderless Breadboard Workbench (30 Columns)
            </span>
            <span className="text-[11px] text-neutral-400">
              • Click any hole to start a wire, click target hole to connect.
            </span>
          </div>

          {/* Wire Color Picker & Reset */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-neutral-400">Wire Color:</span>
            <div className="flex gap-1.5">
              {[
                { name: 'red', col: '#ef4444' },
                { name: 'black', col: '#1f2937' },
                { name: 'yellow', col: '#eab308' },
                { name: 'blue', col: '#3b82f6' },
                { name: 'green', col: '#22c55e' }
              ].map(c => (
                <button
                  key={c.name}
                  onClick={() => setSelectedWireColor(c.name)}
                  className={`h-5 w-5 rounded-full border-2 transition-transform ${
                    selectedWireColor === c.name ? 'scale-125 border-white' : 'border-transparent hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.col }}
                  title={c.name}
                />
              ))}
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={resetWires}
              className="text-xs h-7 ml-2 text-neutral-300 border-neutral-700 hover:bg-neutral-800"
            >
              <RotateCcw className="h-3 w-3 mr-1" /> Reset Wires
            </Button>
          </div>
        </div>

        {/* Breadboard Visual SVG */}
        <div className="relative mt-4 w-full overflow-x-auto select-none py-2">
          <svg
            viewBox="0 0 940 320"
            className="w-full min-w-[750px] h-auto drop-shadow-2xl rounded-xl"
            style={{ backgroundColor: '#e5e5e5' }}
          >
            {/* Top Power Rail (Red +Vcc / Blue GND) */}
            <rect x="20" y="16" width="900" height="40" rx="4" fill="#f3f4f6" stroke="#d1d5db" />
            <line x1="30" y1="28" x2="910" y2="28" stroke="#ef4444" strokeWidth="2" />
            <line x1="30" y1="44" x2="910" y2="44" stroke="#3b82f6" strokeWidth="2" />

            {/* Top Rail Holes */}
            {Array.from({ length: 30 }).map((_, i) => {
              const x = 45 + i * 29
              return (
                <g key={`top-rail-${i}`}>
                  <circle
                    cx={x}
                    cy={28}
                    r={3.2}
                    fill="#1e293b"
                    className="cursor-pointer hover:fill-amber-400 transition-colors"
                    onClick={() => handleHoleClick(i + 1, 'top_vcc')}
                  />
                  <circle
                    cx={x}
                    cy={44}
                    r={3.2}
                    fill="#1e293b"
                    className="cursor-pointer hover:fill-amber-400 transition-colors"
                    onClick={() => handleHoleClick(i + 1, 'top_gnd')}
                  />
                </g>
              )
            })}

            {/* Main Terminal Strips (Rows A..E and F..J separated by center trough) */}
            <rect x="20" y="66" width="900" height="188" rx="4" fill="#fafafa" stroke="#d1d5db" />

            {/* Center DIP divider trough */}
            <rect x="20" y="154" width="900" height="12" fill="#d4d4d8" />

            {/* Terminal Holes Grid */}
            {Array.from({ length: 30 }).map((_, colIdx) => {
              const x = 45 + colIdx * 29
              const rowsTop = ['A', 'B', 'C', 'D', 'E']
              const rowsBot = ['F', 'G', 'H', 'I', 'J']

              return (
                <g key={`col-${colIdx}`}>
                  {/* Column Label */}
                  {colIdx % 5 === 0 && (
                    <text x={x} y={63} fontSize="9" fill="#6b7280" textAnchor="middle" fontFamily="monospace">
                      {colIdx + 1}
                    </text>
                  )}

                  {/* Top Bank A..E */}
                  {rowsTop.map((r, ri) => (
                    <circle
                      key={`hole-${colIdx}-${r}`}
                      cx={x}
                      cy={80 + ri * 14}
                      r={3.2}
                      fill="#1e293b"
                      className="cursor-pointer hover:fill-amber-400 transition-colors"
                      onClick={() => handleHoleClick(colIdx + 1, r)}
                    />
                  ))}

                  {/* Bottom Bank F..J */}
                  {rowsBot.map((r, ri) => (
                    <circle
                      key={`hole-${colIdx}-${r}`}
                      cx={x}
                      cy={176 + ri * 14}
                      r={3.2}
                      fill="#1e293b"
                      className="cursor-pointer hover:fill-amber-400 transition-colors"
                      onClick={() => handleHoleClick(colIdx + 1, r)}
                    />
                  ))}
                </g>
              )
            })}

            {/* Bottom Power Rail */}
            <rect x="20" y="264" width="900" height="40" rx="4" fill="#f3f4f6" stroke="#d1d5db" />
            <line x1="30" y1="276" x2="910" y2="276" stroke="#ef4444" strokeWidth="2" />
            <line x1="30" y1="292" x2="910" y2="292" stroke="#3b82f6" strokeWidth="2" />

            {/* Bottom Rail Holes */}
            {Array.from({ length: 30 }).map((_, i) => {
              const x = 45 + i * 29
              return (
                <g key={`bot-rail-${i}`}>
                  <circle
                    cx={x}
                    cy={276}
                    r={3.2}
                    fill="#1e293b"
                    className="cursor-pointer hover:fill-amber-400 transition-colors"
                    onClick={() => handleHoleClick(i + 1, 'bot_vcc')}
                  />
                  <circle
                    cx={x}
                    cy={292}
                    r={3.2}
                    fill="#1e293b"
                    className="cursor-pointer hover:fill-amber-400 transition-colors"
                    onClick={() => handleHoleClick(i + 1, 'bot_gnd')}
                  />
                </g>
              )
            })}

            {/* Placed Circuit Components */}
            {components.map(comp => {
              const getCoord = (col: number, row: string) => {
                const x = 45 + (col - 1) * 29
                if (row === 'top_vcc') return { x, y: 28 }
                if (row === 'top_gnd') return { x, y: 44 }
                if (row === 'bot_vcc') return { x, y: 276 }
                if (row === 'bot_gnd') return { x, y: 292 }
                const topRows = ['A', 'B', 'C', 'D', 'E']
                const botRows = ['F', 'G', 'H', 'I', 'J']
                if (topRows.includes(row)) return { x, y: 80 + topRows.indexOf(row) * 14 }
                return { x, y: 176 + botRows.indexOf(row) * 14 }
              }

              const p1 = getCoord(comp.col1, comp.row1)
              const p2 = getCoord(comp.col2, comp.row2)

              if (comp.type === 'resistor') {
                const bands = getResistorBands(comp.value)
                const midX = (p1.x + p2.x) / 2
                const midY = (p1.y + p2.y) / 2
                return (
                  <g key={comp.id}>
                    {/* Metal Leads */}
                    <line x1={p1.x} y1={p1.y} x2={midX - 18} y2={midY} stroke="#94a3b8" strokeWidth="2.5" />
                    <line x1={midX + 18} y1={midY} x2={p2.x} y2={p2.y} stroke="#94a3b8" strokeWidth="2.5" />
                    {/* Ceramic Resistor Body */}
                    <rect x={midX - 18} y={midY - 7} width="36" height="14" rx="4" fill="#d2b48c" stroke="#b48c5a" strokeWidth="1.2" />
                    {/* Color Bands */}
                    <rect x={midX - 12} y={midY - 7} width="3" height="14" fill={bands[0]} />
                    <rect x={midX - 6} y={midY - 7} width="3" height="14" fill={bands[1]} />
                    <rect x={midX} y={midY - 7} width="3" height="14" fill={bands[2]} />
                    <rect x={midX + 8} y={midY - 7} width="3" height="14" fill={bands[3]} />
                    <text x={midX} y={midY - 11} fontSize="9" fill="#1e293b" textAnchor="middle" fontWeight="bold">
                      {comp.name}
                    </text>
                  </g>
                )
              } else if (comp.type === 'capacitor') {
                const midX = (p1.x + p2.x) / 2
                const midY = (p1.y + p2.y) / 2
                return (
                  <g key={comp.id}>
                    <line x1={p1.x} y1={p1.y} x2={midX} y2={midY - 8} stroke="#94a3b8" strokeWidth="2.5" />
                    <line x1={midX} y1={midY + 8} x2={p2.x} y2={p2.y} stroke="#94a3b8" strokeWidth="2.5" />
                    {/* Electrolytic Capacitor Can */}
                    <circle cx={midX} cy={midY} r="12" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
                    <line x1={midX - 8} y1={midY} x2={midX + 8} y2={midY} stroke="#fff" strokeWidth="2" />
                    <text x={midX} y={midY - 16} fontSize="9" fill="#0369a1" textAnchor="middle" fontWeight="bold">
                      {comp.name}
                    </text>
                  </g>
                )
              } else if (comp.type === 'led') {
                const midX = (p1.x + p2.x) / 2
                const midY = (p1.y + p2.y) / 2
                const ledColor = comp.color || '#ef4444'
                return (
                  <g key={comp.id}>
                    <line x1={p1.x} y1={p1.y} x2={midX} y2={midY} stroke="#94a3b8" strokeWidth="2.5" />
                    <line x1={midX} y1={midY} x2={p2.x} y2={p2.y} stroke="#94a3b8" strokeWidth="2.5" />
                    {/* Glowing LED dome */}
                    <circle
                      cx={midX}
                      cy={midY}
                      r="10"
                      fill={ledColor}
                      stroke="#fff"
                      strokeWidth="1.5"
                      opacity={isPowered ? 0.95 : 0.4}
                      style={{ filter: isPowered ? `drop-shadow(0 0 8px ${ledColor})` : 'none' }}
                    />
                    <text x={midX} y={midY - 14} fontSize="9" fill={ledColor} textAnchor="middle" fontWeight="bold">
                      {comp.name}
                    </text>
                  </g>
                )
              } else if (comp.type === 'diode') {
                const midX = (p1.x + p2.x) / 2
                const midY = (p1.y + p2.y) / 2
                return (
                  <g key={comp.id}>
                    <line x1={p1.x} y1={p1.y} x2={midX - 14} y2={midY} stroke="#94a3b8" strokeWidth="2.5" />
                    <line x1={midX + 14} y1={midY} x2={p2.x} y2={p2.y} stroke="#94a3b8" strokeWidth="2.5" />
                    {/* Diode body */}
                    <rect x={midX - 14} y={midY - 6} width="28" height="12" rx="2" fill="#18181b" stroke="#27272a" />
                    {/* Cathode silver band */}
                    <rect x={midX + 6} y={midY - 6} width="5" height="12" fill="#e4e4e7" />
                    <text x={midX} y={midY - 10} fontSize="9" fill="#18181b" textAnchor="middle" fontWeight="bold">
                      {comp.name}
                    </text>
                  </g>
                )
              } else {
                // Transistor (3-pins)
                const midX = (p1.x + p2.x) / 2
                const midY = (p1.y + p2.y) / 2
                return (
                  <g key={comp.id}>
                    <line x1={p1.x} y1={p1.y} x2={midX - 8} y2={midY} stroke="#94a3b8" strokeWidth="2" />
                    <line x1={p2.x} y1={p2.y} x2={midX} y2={midY} stroke="#94a3b8" strokeWidth="2" />
                    <circle cx={midX} cy={midY} r="11" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
                    <text x={midX} y={midY + 4} fontSize="8" fill="#fff" textAnchor="middle" fontWeight="bold">
                      NPN
                    </text>
                  </g>
                )
              }
            })}

            {/* Jumper Wires */}
            {wires.map(wire => {
              const getCoord = (col: number, row: string) => {
                const x = 45 + (col - 1) * 29
                if (row === 'top_vcc') return { x, y: 28 }
                if (row === 'top_gnd') return { x, y: 44 }
                if (row === 'bot_vcc') return { x, y: 276 }
                if (row === 'bot_gnd') return { x, y: 292 }
                const topRows = ['A', 'B', 'C', 'D', 'E']
                const botRows = ['F', 'G', 'H', 'I', 'J']
                if (topRows.includes(row)) return { x, y: 80 + topRows.indexOf(row) * 14 }
                return { x, y: 176 + botRows.indexOf(row) * 14 }
              }

              const p1 = getCoord(wire.fromCol, wire.fromRow)
              const p2 = getCoord(wire.toCol, wire.toRow)
              const wireColorCode = wire.color === 'red' ? '#ef4444' : wire.color === 'black' ? '#1f2937' : wire.color === 'yellow' ? '#eab308' : wire.color === 'blue' ? '#3b82f6' : '#22c55e'

              // Curved Jumper Wire Arc
              const midX = (p1.x + p2.x) / 2
              const arcY = Math.min(p1.y, p2.y) - 25

              return (
                <g key={wire.id}>
                  <path
                    d={`M ${p1.x} ${p1.y} Q ${midX} ${arcY} ${p2.x} ${p2.y}`}
                    fill="none"
                    stroke={wireColorCode}
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                  {/* Pin endpoints */}
                  <circle cx={p1.x} cy={p1.y} r="3" fill="#cbd5e1" stroke={wireColorCode} strokeWidth="1.5" />
                  <circle cx={p2.x} cy={p2.y} r="3" fill="#cbd5e1" stroke={wireColorCode} strokeWidth="1.5" />

                  {/* Electron current animated dot */}
                  {isPowered && (
                    <circle
                      cx={p1.x + ((simTime * 80) % 100) * (p2.x - p1.x) / 100}
                      cy={p1.y + ((simTime * 80) % 100) * (p2.y - p1.y) / 100}
                      r="2.5"
                      fill="#38bdf8"
                      style={{ filter: 'drop-shadow(0 0 4px #38bdf8)' }}
                    />
                  )}
                </g>
              )
            })}

            {/* Active Wiring in progress */}
            {wireStart && (
              <circle
                cx={45 + (wireStart.col - 1) * 29}
                cy={wireStart.row === 'top_vcc' ? 28 : wireStart.row === 'top_gnd' ? 44 : 80}
                r="6"
                fill="none"
                stroke="#eab308"
                strokeWidth="2"
                className="animate-ping"
              />
            )}
          </svg>
        </div>
      </div>
    </div>
  )
}
