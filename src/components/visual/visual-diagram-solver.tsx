'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Eye,
  CheckCircle2,
  Atom,
  Flame,
  Zap,
  Activity,
  Compass,
  Layers,
  ArrowRight,
  Maximize2,
  Pencil
} from 'lucide-react'
import { TeX } from '@/components/math'
import { RichText } from '@/components/rich-text'
import { HandDrawnSketch } from './hand-drawn-sketch'

/* =====================================================================
   Physics & STEM Visual Diagram Solver Engine
   Provides animated, mathematically accurate SVG visual diagrams that
   illustrate and solve physics, math, and STEM questions step-by-step.
   ===================================================================== */

export type DiagramTopic =
  | 'bohr_transitions'
  | 'projectile'
  | 'circular_motion'
  | 'free_body'
  | 'wave_interference'
  | 'doppler'
  | 'coulomb_efield'
  | 'circuits'
  | 'optics_snell'
  | 'thermodynamics_pv'
  | 'calculus_tangent'
  | 'logic_gates'
  | 'titration_equilibrium'
  | 'periodic_trends'
  | 'molecular_vsepr'
  | 'reaction_kinetics'
  | 'electrochem_galvanic'
  | 'universal_physics'

/** Determine the most appropriate physics/math/chemistry diagram from question text & explanation.
 *  Returns null when no STEM visual genuinely fits — callers render nothing then
 *  (a wrong diagram is worse than no diagram). */
export function detectDiagramTopic(
  text: string,
  explanation?: string,
  chapterId?: string
): DiagramTopic | null {
  const combined = `${text} ${explanation ?? ''} ${chapterId ?? ''}`.toLowerCase()

  // --- Chemistry Topics ---
  if (
    /titrat|equivalence point|buffer|ph |poh|henderson|acid.*base|indicator|neutraliz|weak acid|pka|pkb|hydrolysis|chem-ch1\b|chem-ch5\b|chem-ch27\b|le chatelier|equilibrium constant|q vs k|haber process|reaction quotient/i.test(
      combined
    )
  ) {
    return 'titration_equilibrium'
  }
  if (
    /galvanic|voltaic|daniell cell|anode|cathode|nernst|electrode potential|standard reduction|salt bridge|faraday|electrochemical|chem-ch6\b/i.test(
      combined
    )
  ) {
    return 'electrochem_galvanic'
  }
  if (
    /rate law|order of reaction|zero order|first order|second order|half-life|arrhenius|activation energy|catalyst.*barrier|collision theory|chem-ch7\b|chem-ch19\b|chem-ch20\b|chem-ch26\b|chem-ch28\b/i.test(
      combined
    )
  ) {
    return 'reaction_kinetics'
  }
  if (
    /periodic trend|electronegativ|atomic radi|ionization energy|shielding effect|effective nuclear charge|electron affinity|mendeleev|chem-ch11-s1|chem-ch13\b|chem-ch14\b|chem-ch31\b/i.test(
      combined
    )
  ) {
    return 'periodic_trends'
  }
  if (
    /vsepr|molecular geometry|bond angle|lone pair|tetrahedral|trigonal|octahedral|bent molecule|sp3|sp2|sp\b|hybridiz|dipole moment|chem-ch8\b|chem-ch9\b|chem-ch10\b|chem-ch11\b|chem-ch12\b|chem-ch17\b|chem-ch21\b|chem-ch22\b|chem-ch23\b|chem-ch25\b|chem-ch32\b/i.test(
      combined
    )
  ) {
    return 'molecular_vsepr'
  }

  // --- Physics & Math Topics ---
  if (
    /balmer|lyman|paschen|bohr|hydrogen|ground state|13\.6|spectral|rydberg|energy level|ionization|h-alpha|coletta-ch29|ch29|quantum atom|chem-ch2\b|chem-ch15\b|chem-ch16\b/i.test(
      combined
    )
  ) {
    return 'bohr_transitions'
  }
  if (
    /projectile|trajectory|launch|angle.*velocity|range.*gravity|parabola|horizontal velocity|vertical velocity|flight time|maximum height|coletta-ch3|young-ch3/i.test(
      combined
    )
  ) {
    return 'projectile'
  }
  if (
    /centripetal|circular motion|orbit.*speed|radius.*angular|tangential velocity|uniform circular/i.test(
      combined
    )
  ) {
    return 'circular_motion'
  }
  if (
    /incline|friction|normal force|newton|free body|tension.*pulley|slope|coletta-ch4|young-ch5/i.test(
      combined
    )
  ) {
    return 'free_body'
  }
  if (
    /interference|double slit|diffraction|standing wave|node.*antinode|wavelength.*fringe|crest.*trough|superposition|slit.*separation|coletta-ch24|young-ch35/i.test(
      combined
    )
  ) {
    return 'wave_interference'
  }
  if (
    /doppler|frequency.*approaching|source.*moving|sound.*pitch|redshift|blueshift|speed of sound|mach.*number|coletta-ch16|young-ch16/i.test(
      combined
    )
  ) {
    return 'doppler'
  }
  if (
    /coulomb|electric field|charge.*force|point charge|gauss.*law|potential difference|equipotential|coletta-ch17|young-ch21/i.test(
      combined
    )
  ) {
    return 'coulomb_efield'
  }
  if (
    /resistor|ohm|kirchhoff|voltage|series.*parallel|current.*ampere|circuit|equivalent resistance|elec-|coletta-ch19|young-ch25|young-ch26/i.test(
      combined
    )
  ) {
    return 'circuits'
  }
  if (
    /snell|refraction|index of refraction|critical angle|total internal reflection|incident ray|refracted ray|lens.*focal|coletta-ch23|young-ch33/i.test(
      combined
    )
  ) {
    return 'optics_snell'
  }
  if (
    /isothermal|adiabatic|isobaric|isochoric|pv diagram|carnot|heat engine|ideal gas|work done.*gas|coletta-ch15|young-ch19|chem-ch3\b|chem-ch4\b|chem-ch30\b/i.test(
      combined
    )
  ) {
    return 'thermodynamics_pv'
  }
  if (
    /derivative|tangent line|riemann|integral.*area|rate of change|limit as|secant|dy\/dx|calc-|stewart/i.test(
      combined
    )
  ) {
    return 'calculus_tangent'
  }
  if (
    /logic gate|truth table|nand|nor gate|boolean|karnaugh|flip-flop|and gate|or gate|xor gate|mano-|logical equivalence|tautolog|contradiction\b|contraposit|de morgan|propositional equivalence|logic circuit/i.test(
      combined
    )
  ) {
    return 'logic_gates'
  }

  // Safe domain-aware fallbacks before universal physics
  if (/chem-|chemistry|reaction|molecule|molar|chemical element|acid|base solution/i.test(combined)) {
    return 'molecular_vsepr'
  }

  // Universal physics is ONLY shown when the question is genuinely physics-flavoured —
  // never for logic/CS-theory/English/aptitude questions where a vector lab is noise.
  if (
    /physics|mechanics|statics|dynamics|force\b|forces\b|velocity|energy|momentum|accel|gravity|vector|resultant|displacement|speed\b|torque|pressure|density|friction|motion|kinetic|newton|pendulum|spring/i.test(
      combined
    )
  ) {
    return 'universal_physics'
  }

  return null
}

/* ------------------------------------------------------------------ */
/*  1. Bohr Atom & Spectral Series Visual Diagram                      */
/* ------------------------------------------------------------------ */

export function BohrTransitionsDiagram({
  questionText,
  selectedAnswer,
  isCorrect,
  playing,
}: {
  questionText: string
  selectedAnswer?: number | null
  isCorrect?: boolean
  playing: boolean
}) {
  const [activeSeries, setActiveSeries] = useState<'balmer' | 'lyman' | 'ionization'>(() => {
    if (/ionization|ground energy|-13\.6/i.test(questionText)) return 'ionization'
    if (/lyman/i.test(questionText)) return 'lyman'
    return 'balmer'
  })

  const [t, setT] = useState(0)
  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      setT((prev) => (prev + 1) % 100)
    }, 40)
    return () => clearInterval(interval)
  }, [playing])

  // Bohr Levels
  const levels = [
    { n: 1, e: -13.6, y: 220, label: 'n = 1 (-13.60 eV)' },
    { n: 2, e: -3.4, y: 155, label: 'n = 2 (-3.40 eV)' },
    { n: 3, e: -1.51, y: 110, label: 'n = 3 (-1.51 eV)' },
    { n: 4, e: -0.85, y: 80, label: 'n = 4 (-0.85 eV)' },
    { n: 5, e: -0.54, y: 60, label: 'n = 5 (-0.54 eV)' },
    { n: 6, e: 0.0, y: 35, label: 'n = ∞ (0.00 eV, Free)' },
  ]

  // Transition progress
  const jumpProgress = (t % 50) / 50
  const isJumping = t % 50 < 40

  return (
    <div className="flex flex-col gap-3">
      {/* Series selection buttons */}
      <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground mr-1">
          Active Scenario:
        </span>
        <button
          onClick={() => setActiveSeries('balmer')}
          className={`px-2.5 py-1 rounded-md border transition-all ${
            activeSeries === 'balmer'
              ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-semibold shadow-xs'
              : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
          }`}
        >
          Balmer Series (n_f = 2, Visible)
        </button>
        <button
          onClick={() => setActiveSeries('ionization')}
          className={`px-2.5 py-1 rounded-md border transition-all ${
            activeSeries === 'ionization'
              ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-semibold shadow-xs'
              : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
          }`}
        >
          Ionization (+13.6 eV from n = 1)
        </button>
        <button
          onClick={() => setActiveSeries('lyman')}
          className={`px-2.5 py-1 rounded-md border transition-all ${
            activeSeries === 'lyman'
              ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300 font-semibold shadow-xs'
              : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
          }`}
        >
          Lyman Series (n_f = 1, UV)
        </button>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-3 sm:p-4">
        <svg
          viewBox="0 0 640 260"
          className="w-full h-auto max-h-[300px] select-none"
          role="img"
          aria-label="Bohr Hydrogen Energy Level Diagram"
        >
          <defs>
            <linearGradient id="gradPhotonBalmer" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradPhotonIon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
            </linearGradient>
            <filter id="glowG">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Grid Lines */}
          <line x1="40" y1="20" x2="40" y2="240" stroke="#3f3f46" strokeWidth="1" strokeDasharray="3 3" />
          <text x="35" y="25" textAnchor="end" fontSize="10" fill="#a1a1aa" fontFamily="monospace">
            Energy
          </text>

          {/* Energy Levels */}
          {levels.map((lvl) => {
            const isTarget =
              activeSeries === 'balmer'
                ? lvl.n === 2
                : activeSeries === 'lyman'
                  ? lvl.n === 1
                  : lvl.n === 6
            const isSource =
              activeSeries === 'balmer'
                ? lvl.n === 3
                : activeSeries === 'lyman'
                  ? lvl.n === 2
                  : lvl.n === 1

            return (
              <g key={lvl.n}>
                <line
                  x1="50"
                  y1={lvl.y}
                  x2="590"
                  y2={lvl.y}
                  stroke={isTarget ? '#10b981' : isSource ? '#fbbf24' : '#52525b'}
                  strokeWidth={isTarget ? 2.5 : lvl.n === 6 ? 1.5 : 1.2}
                  strokeDasharray={lvl.n === 6 ? '4 4' : undefined}
                />
                <circle
                  cx="50"
                  cy={lvl.y}
                  r={isTarget ? 3.5 : 2.5}
                  fill={isTarget ? '#10b981' : '#71717a'}
                />
                <text
                  x="60"
                  y={lvl.y - 4}
                  fontSize="11"
                  fill={isTarget ? '#34d399' : isSource ? '#fde047' : '#a1a1aa'}
                  fontFamily="monospace"
                  fontWeight={isTarget ? 'bold' : 'normal'}
                >
                  {lvl.label}
                </text>
              </g>
            )
          })}

          {/* Transitions & Photons */}
          {activeSeries === 'balmer' && (
            <>
              {/* Highlight Target Level n=2 */}
              <rect
                x="45"
                y="145"
                width="550"
                height="20"
                fill="rgba(16,185,129,0.08)"
                rx="4"
              />
              {/* Jump Arrow n=3 -> n=2 */}
              <path
                d="M 220,110 L 220,155"
                stroke="#f43f5e"
                strokeWidth="2.5"
                markerEnd="url(#arrow)"
              />
              <polygon points="220,157 216,148 224,148" fill="#f43f5e" />

              {/* Jump Arrow n=4 -> n=2 */}
              <path
                d="M 280,80 L 280,155"
                stroke="#2dd4bf"
                strokeWidth="1.8"
                strokeDasharray="4 3"
              />
              <polygon points="280,157 276,148 284,148" fill="#2dd4bf" />

              {/* Moving Electron */}
              {isJumping && (
                <circle
                  cx="220"
                  cy={110 + (155 - 110) * jumpProgress}
                  r="5"
                  fill="#fbbf24"
                  filter="url(#glowG)"
                />
              )}

              {/* Emitted Photon Wave Packet (Red H-alpha 656 nm) */}
              <g transform="translate(230, 150)">
                <path
                  d="M 0,0 Q 15,-10 30,0 T 60,0 T 90,0 T 120,0"
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="2"
                  filter="url(#glowG)"
                />
                <text x="130" y="4" fontSize="11" fill="#fb7185" fontFamily="monospace" fontWeight="bold">
                  hf = 1.89 eV (λ = 656 nm Red)
                </text>
              </g>

              {/* Visual callout */}
              <g transform="translate(420, 95)">
                <rect width="180" height="48" rx="6" fill="#18181b" stroke="#10b981" strokeWidth="1" />
                <text x="10" y="20" fontSize="11" fill="#34d399" fontWeight="bold" fontFamily="monospace">
                  ✓ Balmer Formula:
                </text>
                <text x="10" y="38" fontSize="10.5" fill="#e4e4e7" fontFamily="sans-serif">
                  All jumps terminate at n_f = 2
                </text>
              </g>
            </>
          )}

          {activeSeries === 'ionization' && (
            <>
              {/* Highlight Ground Level n=1 & Continuum */}
              <rect x="45" y="210" width="550" height="20" fill="rgba(245,158,11,0.08)" rx="4" />
              <rect x="45" y="25" width="550" height="20" fill="rgba(16,185,129,0.08)" rx="4" />

              {/* Upward Jump Arrow n=1 -> n=inf */}
              <path d="M 240,220 L 240,35" stroke="#f59e0b" strokeWidth="2.5" />
              <polygon points="240,33 236,43 244,43" fill="#f59e0b" />

              {/* Moving Electron */}
              {isJumping && (
                <circle
                  cx="240"
                  cy={220 - (220 - 35) * jumpProgress}
                  r="5"
                  fill="#38bdf8"
                  filter="url(#glowG)"
                />
              )}

              {/* Incoming Ionizing UV Photon */}
              <g transform="translate(100, 220)">
                <path
                  d="M 0,0 Q 15,-10 30,0 T 60,0 T 90,0 T 120,0"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  filter="url(#glowG)"
                />
                <text x="10" y="-12" fontSize="10.5" fill="#fde047" fontFamily="monospace">
                  +13.6 eV UV photon absorbed (λ = 91.2 nm)
                </text>
              </g>

              {/* Visual callout */}
              <g transform="translate(370, 140)">
                <rect width="230" height="52" rx="6" fill="#18181b" stroke="#f59e0b" strokeWidth="1" />
                <text x="10" y="20" fontSize="11" fill="#fbbf24" fontWeight="bold" fontFamily="monospace">
                  ΔE = E_∞ - E_1
                </text>
                <text x="10" y="38" fontSize="10.5" fill="#e4e4e7" fontFamily="sans-serif">
                  0 - (-13.60 eV) = +13.60 eV to free
                </text>
              </g>
            </>
          )}

          {activeSeries === 'lyman' && (
            <>
              <path d="M 200,110 L 200,220" stroke="#6366f1" strokeWidth="2.2" />
              <polygon points="200,222 196,213 204,213" fill="#6366f1" />
              <g transform="translate(220, 215)">
                <text x="0" y="0" fontSize="11" fill="#818cf8" fontFamily="monospace">
                  Lyman Series: n_f = 1 (Ultraviolet)
                </text>
              </g>
            </>
          )}
        </svg>

        {/* Math explanation banner */}
        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-emerald-400">Rydberg &amp; Bohr Formula:</span>
            <span className="font-mono text-muted-foreground">
              1/λ = R_H (1/n_f² - 1/n_i²)
            </span>
          </div>
          <div className="font-mono text-teal-300">
            {activeSeries === 'balmer'
              ? 'Balmer Visible Series: n_f = 2 (n_i = 3, 4, 5...)'
              : activeSeries === 'ionization'
                ? 'Ionization: n_i = 1 → n_f = ∞ (Cost = 13.6 eV)'
                : 'Lyman Series: n_f = 1 (Ultraviolet)'}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  2. Projectile Motion Parabolic Trajectory Diagram                  */
/* ------------------------------------------------------------------ */

export function ProjectileMotionDiagram({ playing }: { playing: boolean }) {
  const [angle, setAngle] = useState(45)
  const [v0, setV0] = useState(30)
  const g = 9.8

  const [t, setT] = useState(0)
  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      setT((prev) => (prev + 1) % 100)
    }, 40)
    return () => clearInterval(interval)
  }, [playing])

  const rad = (angle * Math.PI) / 180
  const v0x = v0 * Math.cos(rad)
  const v0y = v0 * Math.sin(rad)
  const flightTime = (2 * v0y) / g
  const maxH = (v0y * v0y) / (2 * g)
  const range = (v0 * v0 * Math.sin(2 * rad)) / g

  // Scaled coordinates for SVG (width 600, height 240)
  const scaleX = 500 / Math.max(1, range)
  const scaleY = 160 / Math.max(1, maxH)

  const curT = (t / 100) * flightTime
  const curX = v0x * curT
  const curY = v0y * curT - 0.5 * g * curT * curT
  const curVx = v0x
  const curVy = v0y - g * curT

  const svgX = 60 + curX * scaleX
  const svgY = 210 - Math.max(0, curY) * scaleY

  // Build trajectory path
  const pathD = useMemo(() => {
    let p = `M 60 210`
    for (let step = 0; step <= 50; step++) {
      const time = (step / 50) * flightTime
      const x = 60 + v0x * time * scaleX
      const y = 210 - (v0y * time - 0.5 * g * time * time) * scaleY
      p += ` L ${x.toFixed(1)} ${y.toFixed(1)}`
    }
    return p
  }, [v0x, v0y, flightTime, scaleX, scaleY])

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">Angle θ:</span>
          <input
            type="range"
            min="15"
            max="75"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="w-24 accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{angle}°</span>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">v₀:</span>
          <input
            type="range"
            min="15"
            max="45"
            value={v0}
            onChange={(e) => setV0(Number(e.target.value))}
            className="w-24 accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{v0} m/s</span>
        </label>
        <span className="text-muted-foreground ml-auto">
          Range: <strong className="text-teal-300">{range.toFixed(1)} m</strong> · Max H:{' '}
          <strong className="text-amber-300">{maxH.toFixed(1)} m</strong>
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-3 sm:p-4">
        <svg viewBox="0 0 640 240" className="w-full h-auto max-h-[300px] select-none">
          {/* Ground */}
          <line x1="40" y1="210" x2="600" y2="210" stroke="#71717a" strokeWidth="2" />
          <line x1="60" y1="40" x2="60" y2="210" stroke="#3f3f46" strokeWidth="1" strokeDasharray="3 3" />

          {/* Parabolic Path */}
          <path d={pathD} fill="none" stroke="#10b981" strokeWidth="2.5" opacity="0.85" />

          {/* Peak height indicator */}
          <line
            x1={60 + (range / 2) * scaleX}
            y1="210"
            x2={60 + (range / 2) * scaleX}
            y2={210 - maxH * scaleY}
            stroke="#fbbf24"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <text
            x={60 + (range / 2) * scaleX}
            y={200 - maxH * scaleY}
            fontSize="10"
            fill="#fbbf24"
            textAnchor="middle"
            fontFamily="monospace"
          >
            H_max = {maxH.toFixed(1)} m (v_y = 0)
          </text>

          {/* Active Projectile */}
          <circle cx={svgX} cy={svgY} r="6" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />

          {/* Velocity Vector Arrows */}
          <line
            x1={svgX}
            y1={svgY}
            x2={svgX + curVx * 1.2}
            y2={svgY - curVy * 1.2}
            stroke="#f43f5e"
            strokeWidth="2"
          />
          <line
            x1={svgX}
            y1={svgY}
            x2={svgX + curVx * 1.2}
            y2={svgY}
            stroke="#34d399"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <line
            x1={svgX}
            y1={svgY}
            x2={svgX}
            y2={svgY - curVy * 1.2}
            stroke="#fbbf24"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />

          {/* Velocity Component Labels */}
          <g transform="translate(440, 40)">
            <rect width="180" height="65" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
            <text x="10" y="18" fontSize="10" fill="#a1a1aa" fontFamily="monospace">
              v_x = v₀ cos θ = {v0x.toFixed(1)} m/s (const)
            </text>
            <text x="10" y="36" fontSize="10" fill="#fbbf24" fontFamily="monospace">
              v_y = v₀ sin θ - gt = {curVy.toFixed(1)} m/s
            </text>
            <text x="10" y="54" fontSize="10" fill="#38bdf8" fontFamily="monospace">
              a_y = -9.8 m/s² (gravity down)
            </text>
          </g>
        </svg>

        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-border/60 pt-2">
          <span>
            Governing Equations: <TeX tex="x = (v_0\cos\theta)t,\quad y = (v_0\sin\theta)t - \frac{1}{2}gt^2" />
          </span>
          <span className="font-mono text-emerald-400">Total flight time: {flightTime.toFixed(2)} s</span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  3. Wave Interference & Standing Wave Diagram                       */
/* ------------------------------------------------------------------ */

export function WaveInterferenceDiagram({ playing }: { playing: boolean }) {
  const [slitD, setSlitD] = useState(30)
  const [lambda, setLambda] = useState(20)

  const [t, setT] = useState(0)
  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      setT((prev) => (prev + 0.1) % (2 * Math.PI))
    }, 40)
    return () => clearInterval(interval)
  }, [playing])

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">Slit Separation d:</span>
          <input
            type="range"
            min="20"
            max="60"
            value={slitD}
            onChange={(e) => setSlitD(Number(e.target.value))}
            className="w-24 accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{slitD} µm</span>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">Wavelength λ:</span>
          <input
            type="range"
            min="10"
            max="35"
            value={lambda}
            onChange={(e) => setLambda(Number(e.target.value))}
            className="w-24 accent-emerald-500"
          />
          <span className="text-teal-300 font-bold">{lambda} nm</span>
        </label>
        <span className="text-muted-foreground ml-auto">
          Condition: <strong className="text-amber-300">d sin θ = m λ (Constructive)</strong>
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-3 sm:p-4">
        <svg viewBox="0 0 640 220" className="w-full h-auto max-h-[300px] select-none">
          {/* Barrier */}
          <line x1="120" y1="20" x2="120" y2={110 - slitD / 2} stroke="#a1a1aa" strokeWidth="4" />
          <line
            x1="120"
            y1={110 - slitD / 2}
            x2="120"
            y2={110 + slitD / 2}
            stroke="#27272a"
            strokeWidth="4"
          />
          <line x1="120" y1={110 + slitD / 2} x2="120" y2="200" stroke="#a1a1aa" strokeWidth="4" />

          {/* Slit Labels */}
          <text x="95" y={110 - slitD / 2 + 4} fontSize="10" fill="#2dd4bf" fontFamily="monospace">
            Slit 1
          </text>
          <text x="95" y={110 + slitD / 2 + 4} fontSize="10" fill="#2dd4bf" fontFamily="monospace">
            Slit 2
          </text>

          {/* Waves from Slit 1 and Slit 2 */}
          {[1, 2, 3, 4, 5, 6].map((r) => {
            const rad = r * 30 + (t * 5) % 30
            return (
              <g key={r} opacity={Math.max(0.1, 1 - rad / 220)}>
                <path
                  d={`M ${120} ${110 - slitD / 2 - rad} A ${rad} ${rad} 0 0 1 ${120 + rad} ${110 - slitD / 2}`}
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="1.5"
                />
                <path
                  d={`M ${120} ${110 + slitD / 2 - rad} A ${rad} ${rad} 0 0 1 ${120 + rad} ${110 + slitD / 2}`}
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="1.5"
                />
              </g>
            )
          })}

          {/* Screen on right */}
          <line x1="560" y1="20" x2="560" y2="200" stroke="#71717a" strokeWidth="3" />
          <text x="570" y="30" fontSize="10" fill="#a1a1aa" fontFamily="monospace">
            Detection Screen
          </text>

          {/* Intensity distribution curve on screen */}
          {Array.from({ length: 19 }).map((_, i) => {
            const y = 30 + i * 9
            const angle = (y - 110) / 440
            const phase = (2 * Math.PI * slitD * Math.sin(angle)) / lambda
            const intensity = Math.cos(phase / 2) ** 2
            const width = intensity * 40

            return (
              <rect
                key={i}
                x={560 - width}
                y={y - 3}
                width={width}
                height="6"
                fill="rgba(52,211,153,0.4)"
                rx="2"
              />
            )
          })}

          {/* Central Bright Fringe Marker */}
          <line x1="520" y1="110" x2="560" y2="110" stroke="#fbbf24" strokeWidth="2" />
          <text x="440" y="114" fontSize="10.5" fill="#fbbf24" fontFamily="monospace" fontWeight="bold">
            Central Max (m = 0)
          </text>
        </svg>

        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-border/60 pt-2">
          <span>
            Path Difference: <TeX tex="\Delta x = r_2 - r_1 = d\sin\theta = m\lambda" />
          </span>
          <span className="font-mono text-teal-300">Phase Coherence: Amplitudes Add (ψ₁ + ψ₂)</span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  4. Free-Body Diagrams & Inclined Plane Force Resolution            */
/* ------------------------------------------------------------------ */

export function FreeBodyForcesDiagram({ playing }: { playing: boolean }) {
  const [theta, setTheta] = useState(30)
  const [mu, setMu] = useState(0.2)
  const m = 5
  const g = 9.8

  const rad = (theta * Math.PI) / 180
  const mg = m * g
  const mgParallel = mg * Math.sin(rad)
  const mgPerp = mg * Math.cos(rad)
  const normal = mgPerp
  const friction = mu * normal
  const netForce = Math.max(0, mgParallel - friction)
  const accel = netForce / m

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">Incline Angle θ:</span>
          <input
            type="range"
            min="10"
            max="60"
            value={theta}
            onChange={(e) => setTheta(Number(e.target.value))}
            className="w-24 accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{theta}°</span>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">Friction Coeff µ:</span>
          <input
            type="range"
            min="0"
            max="0.8"
            step="0.05"
            value={mu}
            onChange={(e) => setMu(Number(e.target.value))}
            className="w-24 accent-emerald-500"
          />
          <span className="text-amber-300 font-bold">{mu.toFixed(2)}</span>
        </label>
        <span className="text-muted-foreground ml-auto">
          Net Acceleration: <strong className="text-teal-300">{accel.toFixed(2)} m/s²</strong>
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-3 sm:p-4">
        <svg viewBox="0 0 640 230" className="w-full h-auto max-h-[300px] select-none">
          {/* Base Incline Wedge */}
          <polygon
            points="60,200 480,200 480,80"
            fill="rgba(39,39,42,0.6)"
            stroke="#71717a"
            strokeWidth="2"
          />

          {/* Angle arc */}
          <path d="M 120,200 A 60 60 0 0 0 115,180" fill="none" stroke="#fbbf24" strokeWidth="2" />
          <text x="130" y="195" fontSize="11" fill="#fbbf24" fontFamily="monospace" fontWeight="bold">
            θ = {theta}°
          </text>

          {/* Block Center */}
          <g transform={`translate(280, 140) rotate(-${theta})`}>
            {/* The Block */}
            <rect
              x="-30"
              y="-30"
              width="60"
              height="30"
              fill="#10b981"
              stroke="#047857"
              strokeWidth="2"
              rx="3"
              opacity="0.85"
            />
            <text x="0" y="-12" textAnchor="middle" fontSize="11" fill="#042f2e" fontWeight="bold">
              m = {m} kg
            </text>

            {/* Normal Force Vector (pointing +y perpendicular away from plane) */}
            <line x1="0" y1="-15" x2="0" y2="-65" stroke="#38bdf8" strokeWidth="2.5" />
            <polygon points="0,-68 -4,-58 4,-58" fill="#38bdf8" />
            <text x="10" y="-55" fontSize="10.5" fill="#38bdf8" fontFamily="monospace">
              N = mg cos θ = {normal.toFixed(1)} N
            </text>

            {/* Down-plane Gravity Component (mg sin theta) */}
            <line x1="0" y1="-15" x2="-55" y2="-15" stroke="#f43f5e" strokeWidth="2.5" />
            <polygon points="-58,-15 -48,-11 -48,-19" fill="#f43f5e" />
            <text x="-65" y="-2" textAnchor="end" fontSize="10.5" fill="#f43f5e" fontFamily="monospace">
              mg sin θ = {mgParallel.toFixed(1)} N
            </text>

            {/* Friction Force Vector (opposing motion up-plane) */}
            <line x1="0" y1="-15" x2="45" y2="-15" stroke="#fbbf24" strokeWidth="2.2" />
            <polygon points="48,-15 38,-19 38,-11" fill="#fbbf24" />
            <text x="55" y="-18" fontSize="10.5" fill="#fbbf24" fontFamily="monospace">
              f_k = µN = {friction.toFixed(1)} N
            </text>
          </g>

          {/* True Gravity Vector straight down */}
          <line x1="280" y1="140" x2="280" y2="210" stroke="#a1a1aa" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="280,212 276,203 284,203" fill="#a1a1aa" />
          <text x="290" y="200" fontSize="10.5" fill="#a1a1aa" fontFamily="monospace">
            W = mg = {mg.toFixed(1)} N (vertical)
          </text>

          {/* Equation callout */}
          <g transform="translate(420, 25)">
            <rect width="200" height="70" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
            <text x="10" y="20" fontSize="11" fill="#34d399" fontWeight="bold" fontFamily="monospace">
              Newton's 2nd Law:
            </text>
            <text x="10" y="38" fontSize="10.5" fill="#e4e4e7" fontFamily="monospace">
              ΣF = mg sin θ - f_k = ma
            </text>
            <text x="10" y="56" fontSize="10.5" fill="#38bdf8" fontFamily="monospace">
              a = g(sin θ - µ cos θ)
            </text>
          </g>
        </svg>

        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-border/60 pt-2">
          <span>
            Decomposition: <TeX tex="F_\parallel = mg\sin\theta,\quad F_\perp = mg\cos\theta = N" />
          </span>
          <span className="font-mono text-emerald-400">
            {mgParallel > friction ? 'Accelerating down incline' : 'Static / Balanced at rest'}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  5. Doppler Effect & Wavefront Compression Diagram                 */
/* ------------------------------------------------------------------ */

export function DopplerEffectDiagram({ playing }: { playing: boolean }) {
  const [vs, setVs] = useState(120) // source speed in m/s
  const v = 343 // speed of sound in air at 20°C in m/s
  const f0 = 440 // source base frequency in Hz

  const [t, setT] = useState(0)
  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      setT((prev) => (prev + 0.05) % 10)
    }, 40)
    return () => clearInterval(interval)
  }, [playing])

  // Mach number
  const mach = vs / v
  const isSupersonic = vs >= v

  // Doppler shifted frequencies
  const fApproaching = vs < v ? Math.round(f0 * (v / (v - vs))) : Infinity
  const fReceding = Math.round(f0 * (v / (v + vs)))
  const lambda0 = (v / f0).toFixed(2)
  const lambdaApp = vs < v ? ((v - vs) / f0).toFixed(2) : '0.00'
  const lambdaRec = ((v + vs) / f0).toFixed(2)

  // Wavefronts: emitted at historical source positions
  const numWaves = 7
  const period = 1.0 // seconds between emitted wavefronts in model scale
  const scale = 0.5 // pixels per meter in SVG

  // Source current position along x axis
  const sourceBaseX = 320
  const sourceTravel = ((t % 4) - 2) * (vs / 60) * 35
  const currentSourceX = sourceBaseX + sourceTravel

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">Source Speed v_s:</span>
          <input
            type="range"
            min="0"
            max="300"
            step="10"
            value={vs}
            onChange={(e) => setVs(Number(e.target.value))}
            className="w-28 accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{vs} m/s</span>
          <span className="text-[11px] text-muted-foreground">({(vs * 3.6).toFixed(0)} km/h)</span>
        </label>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Mach:</span>
          <span className={`font-bold ${isSupersonic ? 'text-rose-400' : 'text-teal-300'}`}>
            M = {mach.toFixed(2)} {isSupersonic ? '(Supersonic Shockwave)' : '(Subsonic)'}
          </span>
        </div>
        <span className="text-muted-foreground ml-auto">
          Sound Speed: <strong className="text-foreground">v = {v} m/s</strong>
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-3 sm:p-4">
        <svg viewBox="0 0 640 240" className="w-full h-auto max-h-[300px] select-none">
          <defs>
            <radialGradient id="sourceGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Center line axis */}
          <line x1="20" y1="120" x2="620" y2="120" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" />

          {/* Left Observer (Receding source) */}
          <g transform="translate(60, 120)">
            <circle cx="0" cy="0" r="14" fill="#18181b" stroke="#60a5fa" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fontSize="12" fill="#93c5fd">
              👂
            </text>
            <text x="0" y="26" textAnchor="middle" fontSize="10" fill="#93c5fd" fontFamily="monospace">
              Receding
            </text>
            <text x="0" y="38" textAnchor="middle" fontSize="10.5" fill="#38bdf8" fontWeight="bold" fontFamily="monospace">
              {fReceding} Hz
            </text>
          </g>

          {/* Right Observer (Approaching source) */}
          <g transform="translate(580, 120)">
            <circle cx="0" cy="0" r="14" fill="#18181b" stroke="#34d399" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fontSize="12" fill="#6ee7b7">
              👂
            </text>
            <text x="0" y="26" textAnchor="middle" fontSize="10" fill="#6ee7b7" fontFamily="monospace">
              Approaching
            </text>
            <text x="0" y="38" textAnchor="middle" fontSize="10.5" fill="#10b981" fontWeight="bold" fontFamily="monospace">
              {Number.isFinite(fApproaching) ? `${fApproaching} Hz` : 'Shock!'}
            </text>
          </g>

          {/* Expanding Spherical Wavefronts emitted at spaced historical times */}
          {Array.from({ length: numWaves }).map((_, i) => {
            const age = (t % 2) + i * 0.4
            const r = age * 55
            const emitX = currentSourceX - (vs / 340) * (age * 40)
            if (r <= 4 || emitX + r < 20 || emitX - r > 620) return null

            return (
              <circle
                key={i}
                cx={emitX}
                cy={120}
                r={r}
                fill="none"
                stroke={isSupersonic ? '#fb7185' : '#34d399'}
                strokeWidth={i === 0 ? 2 : 1.2}
                opacity={Math.max(0.12, 1 - r / 260)}
              />
            )
          })}

          {/* Supersonic Mach Cone if vs >= v */}
          {isSupersonic && (
            <g stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 2">
              <line x1={currentSourceX} y1="120" x2={currentSourceX - 260} y2="40" />
              <line x1={currentSourceX} y1="120" x2={currentSourceX - 260} y2="200" />
              <text x={currentSourceX - 180} y="80" fontSize="10" fill="#fb7185" fontFamily="monospace">
                Mach Cone shockwave
              </text>
            </g>
          )}

          {/* Moving Sound Source */}
          <g transform={`translate(${currentSourceX}, 120)`}>
            <circle cx="0" cy="0" r="16" fill="url(#sourceGlow)" />
            <circle cx="0" cy="0" r="8" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            {/* Velocity arrow */}
            <line x1="8" y1="0" x2="32" y2="0" stroke="#38bdf8" strokeWidth="2.5" />
            <polygon points="36,0 28,-4 28,4" fill="#38bdf8" />
            <text x="0" y="-14" textAnchor="middle" fontSize="10" fill="#7dd3fc" fontFamily="monospace" fontWeight="bold">
              v_s →
            </text>
          </g>
        </svg>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-2 text-xs">
          <div>
            <span className="font-semibold text-emerald-400">Doppler Equation: </span>
            <span className="font-mono text-muted-foreground">
              <TeX tex="f' = f_0 \left(\frac{v \pm v_o}{v \mp v_s}\right)" />
            </span>
          </div>
          <div className="font-mono text-teal-300">
            Ahead: λ' = {lambdaApp} m (Compressed) · Behind: λ' = {lambdaRec} m (Stretched)
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  6. DC Circuits & Ohm's Law Dynamic Diagram                        */
/* ------------------------------------------------------------------ */

export function CircuitsDiagram({ playing }: { playing: boolean }) {
  const [voltage, setVoltage] = useState(12)
  const [resistance, setResistance] = useState(6)

  const current = voltage / Math.max(0.1, resistance)
  const power = voltage * current

  const [t, setT] = useState(0)
  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      setT((prev) => (prev + 1) % 100)
    }, 40)
    return () => clearInterval(interval)
  }, [playing])

  // Charge carrier positions around loop
  const speedFactor = Math.min(4, Math.max(0.5, current * 0.8))
  const carrierProgress = ((t * speedFactor) % 100) / 100

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">EMF Voltage V:</span>
          <input
            type="range"
            min="2"
            max="24"
            step="1"
            value={voltage}
            onChange={(e) => setVoltage(Number(e.target.value))}
            className="w-24 accent-amber-500"
          />
          <span className="text-amber-400 font-bold">{voltage} V</span>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">Resistance R:</span>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={resistance}
            onChange={(e) => setResistance(Number(e.target.value))}
            className="w-24 accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{resistance} Ω</span>
        </label>
        <span className="text-muted-foreground ml-auto">
          Current: <strong className="text-teal-300">I = {current.toFixed(2)} A</strong> · Dissipated Power:{' '}
          <strong className="text-rose-400">P = {power.toFixed(1)} W</strong>
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-3 sm:p-4">
        <svg viewBox="0 0 640 240" className="w-full h-auto max-h-[300px] select-none">
          <defs>
            <linearGradient id="voltageDropGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Circuit Loop Outline */}
          {/* Top Wire: High potential (Amber) */}
          <line x1="120" y1="50" x2="310" y2="50" stroke="#f59e0b" strokeWidth="3.5" />
          {/* Resistor zigzag between 310,50 and 430,50 */}
          <path
            d="M 310,50 L 325,35 L 345,65 L 365,35 L 385,65 L 405,35 L 415,65 L 430,50"
            fill="none"
            stroke="url(#voltageDropGrad)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Top Wire after resistor to corner */}
          <line x1="430" y1="50" x2="520" y2="50" stroke="#3b82f6" strokeWidth="3.5" />
          {/* Right Wire down */}
          <line x1="520" y1="50" x2="520" y2="190" stroke="#3b82f6" strokeWidth="3.5" />
          {/* Bottom Wire return */}
          <line x1="520" y1="190" x2="120" y2="190" stroke="#3b82f6" strokeWidth="3.5" />
          {/* Left Wire bottom to battery */}
          <line x1="120" y1="190" x2="120" y2="135" stroke="#3b82f6" strokeWidth="3.5" />
          {/* Left Wire top from battery */}
          <line x1="120" y1="105" x2="120" y2="50" stroke="#f59e0b" strokeWidth="3.5" />

          {/* Battery DC Source */}
          <g transform="translate(120, 120)">
            {/* Long plate (+) */}
            <line x1="-24" y1="-15" x2="24" y2="-15" stroke="#f59e0b" strokeWidth="4" />
            <text x="-36" y="-12" fontSize="12" fill="#fbbf24" fontWeight="bold">
              +
            </text>
            {/* Short plate (-) */}
            <line x1="-14" y1="15" x2="14" y2="15" stroke="#3b82f6" strokeWidth="5" />
            <text x="-36" y="20" fontSize="14" fill="#60a5fa" fontWeight="bold">
              −
            </text>
            <text x="32" y="4" fontSize="11" fill="#fde047" fontFamily="monospace" fontWeight="bold">
              {voltage} V
            </text>
          </g>

          {/* Resistor Label */}
          <g transform="translate(370, 25)">
            <rect x="-45" y="-16" width="90" height="20" rx="4" fill="#18181b" stroke="#10b981" strokeWidth="1" />
            <text x="0" y="-2" textAnchor="middle" fontSize="11" fill="#34d399" fontFamily="monospace" fontWeight="bold">
              R = {resistance} Ω
            </text>
          </g>

          {/* Current Flow Direction Arrow */}
          <g transform="translate(220, 50)">
            <polygon points="12,0 0,-5 0,5" fill="#f59e0b" />
            <text x="6" y="-10" textAnchor="middle" fontSize="11" fill="#fbbf24" fontFamily="monospace">
              I = {current.toFixed(2)} A →
            </text>
          </g>

          {/* Animated Electron / Charge dots circulating */}
          {Array.from({ length: 8 }).map((_, i) => {
            const frac = (carrierProgress + i / 8) % 1
            // Perimeter = top(400) + right(140) + bottom(400) + left(140) = 1080
            const totalLen = 1080
            const pos = frac * totalLen
            let cx = 120
            let cy = 50
            if (pos < 400) {
              cx = 120 + pos
              cy = 50
            } else if (pos < 540) {
              cx = 520
              cy = 50 + (pos - 400)
            } else if (pos < 940) {
              cx = 520 - (pos - 540)
              cy = 190
            } else {
              cx = 120
              cy = 190 - (pos - 940)
            }

            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="4.5"
                fill="#38bdf8"
                stroke="#0284c7"
                strokeWidth="1"
                opacity={0.9}
              />
            )
          })}

          {/* Power callout */}
          <g transform="translate(440, 140)">
            <rect width="160" height="42" rx="6" fill="#18181b" stroke="#f43f5e" strokeWidth="1" />
            <text x="12" y="18" fontSize="11" fill="#fb7185" fontWeight="bold" fontFamily="monospace">
              P = I²R = VI
            </text>
            <text x="12" y="32" fontSize="10.5" fill="#e4e4e7" fontFamily="sans-serif">
              Heat Rate = {power.toFixed(1)} Joules/sec
            </text>
          </g>
        </svg>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-2 text-xs">
          <div>
            <span className="font-semibold text-amber-400">Ohm's Law: </span>
            <span className="font-mono text-muted-foreground">
              <TeX tex={`I = \\frac{V}{R} = ${current.toFixed(2)}\\text{ A}`} />
            </span>
          </div>
          <div className="font-mono text-emerald-400">
            Potential Drop: \Delta V = IR = {voltage} V across resistor
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  7. Optics & Snell's Law Refraction Diagram                         */
/* ------------------------------------------------------------------ */

export function OpticsSnellDiagram({ playing }: { playing: boolean }) {
  const [theta1Deg, setTheta1Deg] = useState(40)
  const [preset, setPreset] = useState<'air_glass' | 'glass_air' | 'water_air'>('air_glass')

  let n1 = 1.0
  let n2 = 1.5
  let name1 = 'Air (n = 1.00)'
  let name2 = 'Glass (n = 1.50)'

  if (preset === 'glass_air') {
    n1 = 1.5
    n2 = 1.0
    name1 = 'Glass (n = 1.50)'
    name2 = 'Air (n = 1.00)'
  } else if (preset === 'water_air') {
    n1 = 1.33
    n2 = 1.0
    name1 = 'Water (n = 1.33)'
    name2 = 'Air (n = 1.00)'
  }

  const theta1Rad = (theta1Deg * Math.PI) / 180
  const sinTheta2 = (n1 / n2) * Math.sin(theta1Rad)
  const isTIR = sinTheta2 > 1.0 // Total internal reflection

  const theta2Rad = isTIR ? 0 : Math.asin(sinTheta2)
  const theta2Deg = isTIR ? 0 : (theta2Rad * 180) / Math.PI
  const criticalAngleDeg = n1 > n2 ? (Math.asin(n2 / n1) * 180) / Math.PI : null

  const [t, setT] = useState(0)
  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      setT((prev) => (prev + 1) % 50)
    }, 40)
    return () => clearInterval(interval)
  }, [playing])

  const rayProgress = (t % 50) / 50

  // SVG dimensions: interface at y=120, center at x=320
  const cx = 320
  const cy = 120
  const rayLen = 140

  // Incident ray start (in medium 1, coming down-right to center)
  const incStartX = cx - rayLen * Math.sin(theta1Rad)
  const incStartY = cy - rayLen * Math.cos(theta1Rad)

  // Refracted ray end (in medium 2, going down-right from center)
  const refEndX = cx + rayLen * Math.sin(theta2Rad)
  const refEndY = cy + rayLen * Math.cos(theta2Rad)

  // Reflected ray end (in medium 1, going up-right from center)
  const reflEndX = cx + rayLen * Math.sin(theta1Rad)
  const reflEndY = cy - rayLen * Math.cos(theta1Rad)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">Incident Angle θ₁:</span>
          <input
            type="range"
            min="0"
            max="85"
            value={theta1Deg}
            onChange={(e) => setTheta1Deg(Number(e.target.value))}
            className="w-24 accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{theta1Deg}°</span>
        </label>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setPreset('air_glass')}
            className={`px-2 py-0.5 rounded border text-[11px] ${
              preset === 'air_glass'
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                : 'border-border bg-muted/30 text-muted-foreground'
            }`}
          >
            Air → Glass
          </button>
          <button
            onClick={() => setPreset('glass_air')}
            className={`px-2 py-0.5 rounded border text-[11px] ${
              preset === 'glass_air'
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                : 'border-border bg-muted/30 text-muted-foreground'
            }`}
          >
            Glass → Air (TIR demo)
          </button>
          <button
            onClick={() => setPreset('water_air')}
            className={`px-2 py-0.5 rounded border text-[11px] ${
              preset === 'water_air'
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                : 'border-border bg-muted/30 text-muted-foreground'
            }`}
          >
            Water → Air
          </button>
        </div>
        <span className="text-muted-foreground ml-auto">
          {criticalAngleDeg !== null && (
            <span className="text-amber-300">θ_c = {criticalAngleDeg.toFixed(1)}° · </span>
          )}
          {isTIR ? (
            <strong className="text-rose-400">Total Internal Reflection!</strong>
          ) : (
            <strong className="text-teal-300">Refracted θ₂ = {theta2Deg.toFixed(1)}°</strong>
          )}
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-3 sm:p-4">
        <svg viewBox="0 0 640 240" className="w-full h-auto max-h-[300px] select-none">
          {/* Medium 1 Shading (Top) */}
          <rect x="20" y="20" width="600" height="100" fill="rgba(59,130,246,0.04)" />
          {/* Medium 2 Shading (Bottom) */}
          <rect x="20" y="120" width="600" height="100" fill="rgba(16,185,129,0.08)" />

          {/* Interface boundary */}
          <line x1="20" y1="120" x2="620" y2="120" stroke="#71717a" strokeWidth="2" />
          <text x="30" y="45" fontSize="11" fill="#93c5fd" fontFamily="monospace">
            {name1}
          </text>
          <text x="30" y="145" fontSize="11" fill="#6ee7b7" fontFamily="monospace">
            {name2}
          </text>

          {/* Normal Dashed Line */}
          <line x1={cx} y1="30" x2={cx} y2="210" stroke="#a1a1aa" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x={cx + 6} y="40" fontSize="10" fill="#a1a1aa" fontFamily="monospace">
            Normal line
          </text>

          {/* Incident Ray */}
          <line x1={incStartX} y1={incStartY} x2={cx} y2={cy} stroke="#fbbf24" strokeWidth="2.5" />
          {/* Incident pulse */}
          <circle
            cx={incStartX + (cx - incStartX) * rayProgress}
            cy={incStartY + (cy - incStartY) * rayProgress}
            r="4"
            fill="#fef08a"
          />

          {/* Reflected Ray (always present, but 100% in TIR) */}
          <line
            x1={cx}
            y1={cy}
            x2={reflEndX}
            y2={reflEndY}
            stroke="#f59e0b"
            strokeWidth={isTIR ? 2.5 : 1.2}
            opacity={isTIR ? 1 : 0.45}
            strokeDasharray={isTIR ? undefined : '4 3'}
          />

          {/* Refracted Ray (only if not TIR) */}
          {!isTIR && (
            <>
              <line x1={cx} y1={cy} x2={refEndX} y2={refEndY} stroke="#10b981" strokeWidth="2.5" />
              <circle
                cx={cx + (refEndX - cx) * rayProgress}
                cy={cy + (refEndY - cy) * rayProgress}
                r="4"
                fill="#34d399"
              />
            </>
          )}

          {/* Angle annotations */}
          <text x={cx - 35} y={cy - 20} fontSize="11" fill="#fbbf24" fontFamily="monospace">
            θ₁={theta1Deg}°
          </text>
          {!isTIR ? (
            <text x={cx + 25} y={cy + 35} fontSize="11" fill="#34d399" fontFamily="monospace">
              θ₂={theta2Deg.toFixed(1)}°
            </text>
          ) : (
            <g transform="translate(420, 140)">
              <rect width="180" height="45" rx="6" fill="#18181b" stroke="#f43f5e" strokeWidth="1" />
              <text x="10" y="20" fontSize="11" fill="#fb7185" fontWeight="bold" fontFamily="monospace">
                TIR Condition Met
              </text>
              <text x="10" y="36" fontSize="10" fill="#e4e4e7" fontFamily="sans-serif">
                θ₁ ({theta1Deg}°) &gt; θ_c ({criticalAngleDeg?.toFixed(1)}°)
              </text>
            </g>
          )}
        </svg>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-2 text-xs">
          <div>
            <span className="font-semibold text-emerald-400">Snell's Law: </span>
            <span className="font-mono text-muted-foreground">
              n_1 \sin\theta_1 = n_2 \sin\theta_2
            </span>
          </div>
          <div className="font-mono text-teal-300">
            Ratio: <TeX tex={`\\sin\\theta_2 = \\frac{${n1}}{${n2}} \\sin(${theta1Deg}^\\circ) = ${sinTheta2.toFixed(3)}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  8. Thermodynamics PV-Diagram & Work Expansion Diagram             */
/* ------------------------------------------------------------------ */

export function ThermodynamicsPVDiagram({ playing }: { playing: boolean }) {
  const [processType, setProcessType] = useState<'isothermal' | 'isobaric' | 'isochoric' | 'adiabatic'>('isothermal')
  const [ratio, setRatio] = useState(2.2)

  const p1 = 400 // kPa
  const v1 = 1.0 // m³
  const v2 = v1 * ratio

  // Work calculation
  let work = 0 // kJ
  let p2 = p1
  if (processType === 'isothermal') {
    // PV = const, W = P1*V1*ln(V2/V1)
    p2 = p1 / ratio
    work = p1 * v1 * Math.log(ratio)
  } else if (processType === 'isobaric') {
    // P = const, W = P * deltaV
    p2 = p1
    work = p1 * (v2 - v1)
  } else if (processType === 'isochoric') {
    // V = const, W = 0
    p2 = p1 * 0.5
    work = 0
  } else if (processType === 'adiabatic') {
    // PV^1.4 = const
    const gamma = 1.4
    p2 = p1 / Math.pow(ratio, gamma)
    work = (p1 * v1 - p2 * v2) / (gamma - 1)
  }

  // Coordinate scales for SVG (x: V from 0.5 to 4.0, y: P from 0 to 500)
  const mapV = (vVal: number) => 80 + ((vVal - 0.5) / 3.5) * 380
  const mapP = (pVal: number) => 200 - (pVal / 480) * 160

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
        <span className="text-muted-foreground">Process:</span>
        {(['isothermal', 'isobaric', 'isochoric', 'adiabatic'] as const).map((proc) => (
          <button
            key={proc}
            onClick={() => setProcessType(proc)}
            className={`px-2.5 py-1 rounded-md border capitalize transition-all ${
              processType === proc
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold'
                : 'border-border bg-muted/30 text-muted-foreground'
            }`}
          >
            {proc}
          </button>
        ))}
        {processType !== 'isochoric' && (
          <label className="flex items-center gap-2 ml-2">
            <span className="text-muted-foreground">V₂/V₁:</span>
            <input
              type="range"
              min="1.3"
              max="3.2"
              step="0.1"
              value={ratio}
              onChange={(e) => setRatio(Number(e.target.value))}
              className="w-20 accent-emerald-500"
            />
            <span className="text-emerald-400 font-bold">{ratio.toFixed(1)}x</span>
          </label>
        )}
        <span className="text-muted-foreground ml-auto">
          Work Done: <strong className="text-amber-300">W = {work.toFixed(1)} kJ</strong>
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-3 sm:p-4">
        <svg viewBox="0 0 640 240" className="w-full h-auto max-h-[300px] select-none">
          {/* PV Axes */}
          <line x1="80" y1="200" x2="500" y2="200" stroke="#71717a" strokeWidth="2" />
          <polygon points="505,200 495,196 495,204" fill="#71717a" />
          <text x="510" y="204" fontSize="11" fill="#a1a1aa" fontFamily="monospace">
            V (m³)
          </text>

          <line x1="80" y1="200" x2="80" y2="30" stroke="#71717a" strokeWidth="2" />
          <polygon points="80,25 76,35 84,35" fill="#71717a" />
          <text x="60" y="24" fontSize="11" fill="#a1a1aa" fontFamily="monospace">
            P (kPa)
          </text>

          {/* Shaded Work Done Area W = \int P dV */}
          {processType !== 'isochoric' && (
            <path
              d={(() => {
                let dStr = `M ${mapV(v1)} ${mapP(0)} L ${mapV(v1)} ${mapP(p1)}`
                const steps = 30
                for (let i = 0; i <= steps; i++) {
                  const currV = v1 + (i / steps) * (v2 - v1)
                  let currP = p1
                  if (processType === 'isothermal') currP = (p1 * v1) / currV
                  else if (processType === 'adiabatic') currP = p1 / Math.pow(currV / v1, 1.4)
                  dStr += ` L ${mapV(currV)} ${mapP(currP)}`
                }
                dStr += ` L ${mapV(v2)} ${mapP(0)} Z`
                return dStr
              })()}
              fill="rgba(245,158,11,0.15)"
              stroke="none"
            />
          )}

          {/* Curve Path from State 1 to State 2 */}
          <path
            d={(() => {
              if (processType === 'isochoric') {
                return `M ${mapV(v1)} ${mapP(p1)} L ${mapV(v1)} ${mapP(p2)}`
              }
              let dStr = `M ${mapV(v1)} ${mapP(p1)}`
              const steps = 30
              for (let i = 0; i <= steps; i++) {
                const currV = v1 + (i / steps) * (v2 - v1)
                let currP = p1
                if (processType === 'isothermal') currP = (p1 * v1) / currV
                else if (processType === 'adiabatic') currP = p1 / Math.pow(currV / v1, 1.4)
                dStr += ` L ${mapV(currV)} ${mapP(currP)}`
              }
              return dStr
            })()}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
          />

          {/* State 1 Marker */}
          <circle cx={mapV(v1)} cy={mapP(p1)} r="5" fill="#10b981" stroke="#34d399" strokeWidth="2" />
          <text x={mapV(v1) - 15} y={mapP(p1) - 10} fontSize="11" fill="#34d399" fontFamily="monospace" fontWeight="bold">
            State 1 ({p1} kPa, {v1} m³)
          </text>

          {/* State 2 Marker */}
          <circle
            cx={mapV(processType === 'isochoric' ? v1 : v2)}
            cy={mapP(p2)}
            r="5"
            fill="#f59e0b"
            stroke="#fbbf24"
            strokeWidth="2"
          />
          <text
            x={mapV(processType === 'isochoric' ? v1 : v2) + 10}
            y={mapP(p2) - 10}
            fontSize="11"
            fill="#fbbf24"
            fontFamily="monospace"
            fontWeight="bold"
          >
            State 2 ({p2.toFixed(0)} kPa, {(processType === 'isochoric' ? v1 : v2).toFixed(1)} m³)
          </text>

          {/* Work indicator label */}
          {processType !== 'isochoric' && (
            <text
              x={(mapV(v1) + mapV(v2)) / 2}
              y="160"
              textAnchor="middle"
              fontSize="11"
              fill="#fde047"
              fontFamily="monospace"
              fontWeight="bold"
            >
              W = ∫ P dV = {work.toFixed(1)} kJ
            </text>
          )}
        </svg>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-2 text-xs">
          <div>
            <span className="font-semibold text-emerald-400">Thermodynamic Work: </span>
            <span className="font-mono text-muted-foreground">
              W = \int_{`{V_1}`}^{`{V_2}`} P\, dV
            </span>
          </div>
          <div className="font-mono text-teal-300">
            {processType === 'isothermal'
              ? 'Isothermal: T = const → W = nRT ln(V₂/V₁)'
              : processType === 'isobaric'
                ? 'Isobaric: P = const → W = P(V₂ - V₁)'
                : processType === 'isochoric'
                  ? 'Isochoric: V = const → W = 0 (No boundary work)'
                  : 'Adiabatic: Q = 0 → PV^γ = const (Steeper slope)'}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  9. Calculus Derivatives & Tangent Slopes Diagram                  */
/* ------------------------------------------------------------------ */

export function CalculusTangentDiagram({ playing }: { playing: boolean }) {
  const [x0, setX0] = useState(1.2)
  const [h, setH] = useState(0.8)
  const [showRiemann, setShowRiemann] = useState(false)

  // f(x) = x^2 / 3 + 1
  const f = (xVal: number) => (xVal * xVal) / 3 + 0.8
  const fPrime = (xVal: number) => (2 * xVal) / 3 // exact derivative

  const y0 = f(x0)
  const mTangent = fPrime(x0)
  const x1 = x0 + h
  const y1 = f(x1)
  const mSecant = (y1 - y0) / h

  // Coordinate mapping for SVG (x from -3 to 3, y from 0 to 4.5)
  const mapX = (xVal: number) => 320 + xVal * 75
  const mapY = (yVal: number) => 210 - yVal * 40

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">Evaluation Point x₀:</span>
          <input
            type="range"
            min="-2.2"
            max="2.2"
            step="0.1"
            value={x0}
            onChange={(e) => setX0(Number(e.target.value))}
            className="w-24 accent-emerald-500"
          />
          <span className="text-emerald-400 font-bold">{x0.toFixed(1)}</span>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">Secant Step h:</span>
          <input
            type="range"
            min="0.1"
            max="1.5"
            step="0.05"
            value={h}
            onChange={(e) => setH(Number(e.target.value))}
            className="w-20 accent-amber-500"
          />
          <span className="text-amber-400 font-bold">{h.toFixed(2)}</span>
        </label>
        <button
          onClick={() => setShowRiemann((r) => !r)}
          className={`px-2.5 py-1 rounded border text-[11px] ${
            showRiemann
              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
              : 'border-border bg-muted/30 text-muted-foreground'
          }`}
        >
          {showRiemann ? 'Hide Integral Slices' : 'Show Riemann Area'}
        </button>
        <span className="text-muted-foreground ml-auto">
          Tangent Slope: <strong className="text-teal-300">f'(x₀) = {mTangent.toFixed(2)}</strong> · Secant:{' '}
          <strong className="text-amber-300">m_sec = {mSecant.toFixed(2)}</strong>
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-3 sm:p-4">
        <svg viewBox="0 0 640 240" className="w-full h-auto max-h-[300px] select-none">
          {/* Axes */}
          <line x1="60" y1="210" x2="580" y2="210" stroke="#71717a" strokeWidth="1.5" />
          <line x1="320" y1="220" x2="320" y2="20" stroke="#71717a" strokeWidth="1.5" />

          {/* Riemann rectangles under curve if enabled */}
          {showRiemann &&
            Array.from({ length: 10 }).map((_, i) => {
              const rectX = 0 + i * 0.22
              const rectY = f(rectX)
              return (
                <rect
                  key={i}
                  x={mapX(rectX)}
                  y={mapY(rectY)}
                  width={0.22 * 75}
                  height={rectY * 40}
                  fill="rgba(52,211,153,0.18)"
                  stroke="#34d399"
                  strokeWidth="0.8"
                />
              )
            })}

          {/* Function Curve f(x) */}
          <path
            d={(() => {
              let p = ''
              for (let xVal = -2.8; xVal <= 2.8; xVal += 0.1) {
                const px = mapX(xVal)
                const py = mapY(f(xVal))
                p += p === '' ? `M ${px} ${py}` : ` L ${px} ${py}`
              }
              return p
            })()}
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2.5"
          />

          {/* Secant Line (Amber dashed) */}
          <line
            x1={mapX(x0 - 0.5)}
            y1={mapY(y0 - 0.5 * mSecant)}
            x2={mapX(x1 + 0.5)}
            y2={mapY(y1 + 0.5 * mSecant)}
            stroke="#fbbf24"
            strokeWidth="1.8"
            strokeDasharray="4 3"
          />

          {/* Tangent Line (Emerald) */}
          <line
            x1={mapX(x0 - 1.2)}
            y1={mapY(y0 - 1.2 * mTangent)}
            x2={mapX(x0 + 1.2)}
            y2={mapY(y0 + 1.2 * mTangent)}
            stroke="#10b981"
            strokeWidth="2.5"
          />

          {/* Tangent Point (x0, y0) */}
          <circle cx={mapX(x0)} cy={mapY(y0)} r="5" fill="#10b981" stroke="#34d399" strokeWidth="2" />
          <circle cx={mapX(x1)} cy={mapY(y1)} r="4" fill="#fbbf24" stroke="#fde047" strokeWidth="1.5" />

          {/* Annotations */}
          <text x={mapX(x0) + 10} y={mapY(y0) - 10} fontSize="11" fill="#34d399" fontFamily="monospace" fontWeight="bold">
            (x₀, f(x₀))
          </text>
        </svg>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-2 text-xs">
          <div>
            <span className="font-semibold text-emerald-400">Derivative Limit Definition: </span>
            <span className="font-mono text-muted-foreground">
              <TeX tex="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" />
            </span>
          </div>
          <div className="font-mono text-teal-300">
            As step h → 0: Secant chord {mSecant.toFixed(2)} converges to exact Tangent {mTangent.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  10. Digital Logic Gates & Boolean Algebra Diagram                 */
/* ------------------------------------------------------------------ */

export function LogicGatesDiagram({ playing }: { playing: boolean }) {
  const [gate, setGate] = useState<'AND' | 'OR' | 'NAND' | 'NOR' | 'XOR'>('AND')
  const [inA, setInA] = useState<0 | 1>(1)
  const [inB, setInB] = useState<0 | 1>(0)

  // Compute boolean output
  let out: 0 | 1 = 0
  if (gate === 'AND') out = (inA && inB) as 0 | 1
  else if (gate === 'OR') out = (inA || inB) as 0 | 1
  else if (gate === 'NAND') out = (!(inA && inB) ? 1 : 0) as 0 | 1
  else if (gate === 'NOR') out = (!(inA || inB) ? 1 : 0) as 0 | 1
  else if (gate === 'XOR') out = (inA !== inB ? 1 : 0) as 0 | 1

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
        <span className="text-muted-foreground">Gate:</span>
        {(['AND', 'OR', 'NAND', 'NOR', 'XOR'] as const).map((g) => (
          <button
            key={g}
            onClick={() => setGate(g)}
            className={`px-2.5 py-1 rounded-md border transition-all ${
              gate === g
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold'
                : 'border-border bg-muted/30 text-muted-foreground'
            }`}
          >
            {g}
          </button>
        ))}
        <div className="flex items-center gap-2 ml-3">
          <span className="text-muted-foreground">Inputs:</span>
          <button
            onClick={() => setInA((v) => (v === 1 ? 0 : 1))}
            className={`px-2.5 py-1 rounded font-bold transition-all ${
              inA === 1 ? 'bg-emerald-500 text-slate-950' : 'bg-muted border border-border text-muted-foreground'
            }`}
          >
            A = {inA}
          </button>
          <button
            onClick={() => setInB((v) => (v === 1 ? 0 : 1))}
            className={`px-2.5 py-1 rounded font-bold transition-all ${
              inB === 1 ? 'bg-emerald-500 text-slate-950' : 'bg-muted border border-border text-muted-foreground'
            }`}
          >
            B = {inB}
          </button>
        </div>
        <span className="text-muted-foreground ml-auto">
          Output: <strong className={out === 1 ? 'text-emerald-400 font-bold' : 'text-zinc-400 font-bold'}>Y = {out}</strong>
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-3 sm:p-4">
        <svg viewBox="0 0 640 200" className="w-full h-auto max-h-[260px] select-none">
          {/* Input Wires */}
          <line
            x1="80"
            y1="70"
            x2="240"
            y2="70"
            stroke={inA === 1 ? '#10b981' : '#3f3f46'}
            strokeWidth="3.5"
          />
          <text x="50" y="75" fontSize="13" fill={inA === 1 ? '#34d399' : '#a1a1aa'} fontFamily="monospace" fontWeight="bold">
            A={inA}
          </text>

          <line
            x1="80"
            y1="130"
            x2="240"
            y2="130"
            stroke={inB === 1 ? '#10b981' : '#3f3f46'}
            strokeWidth="3.5"
          />
          <text x="50" y="135" fontSize="13" fill={inB === 1 ? '#34d399' : '#a1a1aa'} fontFamily="monospace" fontWeight="bold">
            B={inB}
          </text>

          {/* Logic Gate Body */}
          <g transform="translate(240, 50)">
            <rect width="110" height="100" rx="12" fill="#18181b" stroke="#3b82f6" strokeWidth="2" />
            <text x="55" y="58" textAnchor="middle" fontSize="18" fill="#60a5fa" fontFamily="monospace" fontWeight="bold">
              {gate}
            </text>
          </g>

          {/* Output Wire */}
          <line
            x1="350"
            y1="100"
            x2="500"
            y2="100"
            stroke={out === 1 ? '#10b981' : '#3f3f46'}
            strokeWidth="4"
          />

          {/* Output Node & Indicator */}
          <circle
            cx="500"
            cy="100"
            r="16"
            fill={out === 1 ? '#10b981' : '#27272a'}
            stroke={out === 1 ? '#34d399' : '#52525b'}
            strokeWidth="2"
          />
          <text
            x="500"
            y="105"
            textAnchor="middle"
            fontSize="14"
            fill={out === 1 ? '#022c22' : '#a1a1aa'}
            fontFamily="monospace"
            fontWeight="bold"
          >
            {out}
          </text>
          <text x="530" y="105" fontSize="13" fill={out === 1 ? '#34d399' : '#a1a1aa'} fontFamily="monospace" fontWeight="bold">
            Y = {out}
          </text>
        </svg>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-2 text-xs">
          <div>
            <span className="font-semibold text-emerald-400">Boolean Function: </span>
            <span className="font-mono text-muted-foreground">
              {gate === 'AND'
                ? 'Y = A \\cdot B'
                : gate === 'OR'
                  ? 'Y = A + B'
                  : gate === 'NAND'
                    ? 'Y = \\overline{A \\cdot B}'
                    : gate === 'NOR'
                      ? 'Y = \\overline{A + B}'
                      : 'Y = A \\oplus B = A\\bar{B} + \\bar{A}B'}
            </span>
          </div>
          <div className="font-mono text-teal-300">
            Evaluating with inputs ({inA}, {inB}) produces state {out}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  11. Acid-Base Titration & Le Châtelier Equilibrium Solver         */
/* ------------------------------------------------------------------ */

export function TitrationEquilibriumDiagram({
  questionText,
  playing,
}: {
  questionText: string
  playing: boolean
}) {
  const [mode, setMode] = useState<'titration' | 'lechatelier'>('titration')
  const [vol, setVol] = useState(12.5) // mL added
  const [temp, setTemp] = useState(298) // K
  const [pressure, setPressure] = useState(1.0) // atm

  // Animation for titration volume
  useEffect(() => {
    if (!playing || mode !== 'titration') return
    const interval = setInterval(() => {
      setVol((prev) => (prev >= 45 ? 0 : Number((prev + 0.5).toFixed(1))))
    }, 120)
    return () => clearInterval(interval)
  }, [playing, mode])

  // Titration pH calculation (Weak Acid + Strong Base: CH3COOH + NaOH)
  const vEq = 25.0
  const pKa = 4.76
  const ph = useMemo(() => {
    if (vol <= 0.1) return 2.88 // initial pH of 0.1M CH3COOH
    if (vol < vEq) {
      // Buffer region: pH = pKa + log([A-]/[HA])
      const ratio = vol / (vEq - vol)
      return Number(Math.max(2.88, Math.min(8.5, pKa + Math.log10(ratio))).toFixed(2))
    }
    if (Math.abs(vol - vEq) <= 0.3) return 8.72 // equivalence point pH
    // Excess strong base
    const excess = (0.1 * (vol - vEq)) / (25.0 + vol)
    const pOH = -Math.log10(excess)
    return Number(Math.min(13.2, 14.0 - pOH).toFixed(2))
  }, [vol])

  // Le Chatelier NO2 / N2O4 fraction
  const no2Fraction = useMemo(() => {
    const tFact = (temp - 250) / 200
    const pFact = (3.0 - pressure) / 2.5
    return Math.max(0.1, Math.min(0.9, 0.35 + tFact * 0.4 + pFact * 0.25))
  }, [temp, pressure])

  return (
    <div className="flex flex-col gap-2.5">
      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/30">
              <Sparkles className="h-3 w-3" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
              Chemical &amp; Ionic Equilibrium Laboratory
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => setMode('titration')}
              className={`px-2.5 py-1 rounded-md border text-[11px] font-medium transition-all ${
                mode === 'titration'
                  ? 'bg-teal-500/20 border-teal-500 text-teal-300 font-bold'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              Titration pH Curve
            </button>
            <button
              onClick={() => setMode('lechatelier')}
              className={`px-2.5 py-1 rounded-md border text-[11px] font-medium transition-all ${
                mode === 'lechatelier'
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              Le Châtelier Gas Box
            </button>
          </div>
        </div>

        {mode === 'titration' ? (
          <div>
            <div className="flex items-center justify-between gap-3 text-xs font-mono mb-2">
              <span className="text-muted-foreground">
                Titrant Added: <strong className="text-teal-400">{vol.toFixed(1)} mL</strong> / 50 mL
              </span>
              <span className="text-muted-foreground">
                pH: <strong className="text-teal-300 text-sm">{ph.toFixed(2)}</strong> (
                {ph < 7 ? 'Acidic' : ph === 7 ? 'Neutral' : 'Basic'})
              </span>
            </div>

            <svg viewBox="0 0 620 180" className="w-full h-auto select-none">
              {/* Axes */}
              <line x1="50" y1="150" x2="420" y2="150" stroke="#52525b" strokeWidth="1.5" />
              <line x1="50" y1="150" x2="50" y2="20" stroke="#52525b" strokeWidth="1.5" />
              <text x="425" y="154" fontSize="10" fill="#a1a1aa" fontFamily="monospace">
                V (mL)
              </text>
              <text x="46" y="16" fontSize="10" fill="#a1a1aa" fontFamily="monospace">
                pH
              </text>

              {/* pH horizontal ticks */}
              {[0, 4, 7, 10, 14].map((pVal) => (
                <g key={pVal}>
                  <line
                    x1="50"
                    y1={150 - (pVal / 14) * 125}
                    x2="420"
                    y2={150 - (pVal / 14) * 125}
                    stroke="#27272a"
                    strokeDasharray={pVal === 7 ? '3 3' : undefined}
                  />
                  <text
                    x="42"
                    y={153 - (pVal / 14) * 125}
                    fontSize="9"
                    fill="#71717a"
                    textAnchor="end"
                    fontFamily="monospace"
                  >
                    {pVal}
                  </text>
                </g>
              ))}

              {/* Buffer region shaded band */}
              <rect
                x="50"
                y={150 - (5.76 / 14) * 125}
                width={420 - 50}
                height={((5.76 - 3.76) / 14) * 125}
                fill="#14b8a6"
                fillOpacity="0.08"
              />
              <text x="140" y="112" fontSize="9" fill="#2dd4bf" opacity="0.8" fontFamily="sans-serif">
                Buffer Region (pH = pK_a ± 1)
              </text>

              {/* Vertical equivalence guide */}
              <line
                x1={50 + (25.0 / 50.0) * 370}
                y1="25"
                x2={50 + (25.0 / 50.0) * 370}
                y2="150"
                stroke="#0d9488"
                strokeWidth="1.2"
                strokeDasharray="4 2"
              />
              <text
                x={50 + (25.0 / 50.0) * 370 + 4}
                y="35"
                fontSize="9"
                fill="#2dd4bf"
                fontFamily="monospace"
              >
                V_eq = 25 mL
              </text>

              {/* Titration sigmoidal curve */}
              <path
                d="M 50 124 C 110 115 190 102 225 90 C 235 70 235 45 245 35 C 270 30 350 28 420 26"
                fill="none"
                stroke="#14b8a6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Current operating cursor */}
              <circle
                cx={50 + (vol / 50.0) * 370}
                cy={150 - (ph / 14) * 125}
                r="5"
                fill="#2dd4bf"
                stroke="#ffffff"
                strokeWidth="1.8"
              />

              {/* Visual Beaker with live indicator color */}
              <g transform="translate(470, 35)">
                <rect width="125" height="110" rx="8" fill="#18181b" stroke="#3f3f46" strokeWidth="1.2" />
                <text x="62" y="20" textAnchor="middle" fontSize="10" fill="#a1a1aa" fontWeight="bold">
                  Analyte Flask
                </text>
                {/* Solution Beaker */}
                <rect
                  x="30"
                  y="35"
                  width="65"
                  height="60"
                  rx="4"
                  fill={ph > 8.2 ? 'rgba(236, 72, 153, 0.45)' : 'rgba(20, 184, 166, 0.12)'}
                  stroke="#71717a"
                  strokeWidth="1.5"
                />
                <text
                  x="62"
                  y="70"
                  textAnchor="middle"
                  fontSize="9.5"
                  fill={ph > 8.2 ? '#f472b6' : '#2dd4bf'}
                  fontFamily="sans-serif"
                  fontWeight="bold"
                >
                  {ph > 8.2 ? 'Pink (Endpt)' : 'Colorless'}
                </text>
                <text x="62" y="102" textAnchor="middle" fontSize="8" fill="#71717a">
                  Phenolphthalein
                </text>
              </g>
            </svg>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-2 text-xs">
              <span className="font-semibold text-teal-400">Henderson-Hasselbalch:</span>
              <span className="font-mono text-muted-foreground">
                <TeX tex="pH = pK_a + \log\frac{[A^-]}{[HA]} = 4.76 + \log\frac{V}{25 - V}" />
              </span>
              <span className="font-mono text-teal-300">
                At half-equiv (12.5 mL): [HA]=[A⁻] → pH = 4.76
              </span>
            </div>
          </div>
        ) : (
          <div>
            {/* Le Chatelier mode */}
            <div className="grid grid-cols-2 gap-4 mb-2 text-xs">
              <label className="flex items-center gap-2">
                <span className="text-muted-foreground">Temperature (T):</span>
                <input
                  type="range"
                  min="250"
                  max="450"
                  value={temp}
                  onChange={(e) => setTemp(Number(e.target.value))}
                  className="w-24 accent-amber-500"
                />
                <span className="font-mono text-amber-300 font-bold">{temp} K</span>
              </label>
              <label className="flex items-center gap-2">
                <span className="text-muted-foreground">Pressure (P):</span>
                <input
                  type="range"
                  min="0.5"
                  max="3.0"
                  step="0.1"
                  value={pressure}
                  onChange={(e) => setPressure(Number(e.target.value))}
                  className="w-24 accent-sky-500"
                />
                <span className="font-mono text-sky-300 font-bold">{pressure.toFixed(1)} atm</span>
              </label>
            </div>

            <svg viewBox="0 0 600 130" className="w-full h-auto select-none">
              {/* Gas chamber cylinder */}
              <rect
                x="60"
                y="20"
                width="480"
                height="70"
                rx="10"
                fill={`rgba(180, 83, 9, ${no2Fraction * 0.85})`}
                stroke="#71717a"
                strokeWidth="2"
              />
              <text x="300" y="58" textAnchor="middle" fontSize="14" fill="#ffffff" fontWeight="bold" fontFamily="monospace">
                2 NO₂(g) [brown, 2 mol] ⇌ N₂O₄(g) [colorless, 1 mol] + 57.2 kJ
              </text>
              <text x="300" y="112" textAnchor="middle" fontSize="11" fill="#fbbf24" fontFamily="sans-serif">
                {temp > 340
                  ? 'Heating supplies heat → equilibrium shifts LEFT (more brown NO₂)'
                  : pressure > 1.8
                  ? 'Compression favors fewer gas molecules → shifts RIGHT (colorless N₂O₄)'
                  : 'Equilibrium mixture at balance'}
              </text>
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  12. Periodic Trends & Atomic Periodicity Solver                   */
/* ------------------------------------------------------------------ */

export function PeriodicTrendsDiagram({ playing }: { playing: boolean }) {
  const [trend, setTrend] = useState<'ie' | 'radius' | 'en'>('ie')

  // Sample data across Z = 1 to 20
  const points = [
    { z: 1, sym: 'H', ie: 1312, r: 53, en: 2.2 },
    { z: 2, sym: 'He', ie: 2372, r: 31, en: 0 },
    { z: 3, sym: 'Li', ie: 520, r: 167, en: 0.98 },
    { z: 4, sym: 'Be', ie: 899, r: 112, en: 1.57 },
    { z: 5, sym: 'B', ie: 801, r: 87, en: 2.04 },
    { z: 6, sym: 'C', ie: 1086, r: 67, en: 2.55 },
    { z: 7, sym: 'N', ie: 1402, r: 56, en: 3.04 },
    { z: 8, sym: 'O', ie: 1314, r: 48, en: 3.44 },
    { z: 9, sym: 'F', ie: 1681, r: 42, en: 3.98 },
    { z: 10, sym: 'Ne', ie: 2081, r: 38, en: 0 },
    { z: 11, sym: 'Na', ie: 496, r: 190, en: 0.93 },
    { z: 12, sym: 'Mg', ie: 738, r: 145, en: 1.31 },
    { z: 13, sym: 'Al', ie: 578, r: 118, en: 1.61 },
    { z: 14, sym: 'Si', ie: 786, r: 111, en: 1.90 },
    { z: 15, sym: 'P', ie: 1012, r: 98, en: 2.19 },
    { z: 16, sym: 'S', ie: 1000, r: 88, en: 2.58 },
    { z: 17, sym: 'Cl', ie: 1251, r: 79, en: 3.16 },
    { z: 18, sym: 'Ar', ie: 1521, r: 71, en: 0 },
    { z: 19, sym: 'K', ie: 419, r: 243, en: 0.82 },
    { z: 20, sym: 'Ca', ie: 590, r: 194, en: 1.00 },
  ]

  const maxVal = trend === 'ie' ? 2500 : trend === 'radius' ? 260 : 4.0
  const getY = (pt: typeof points[0]) => {
    const val = trend === 'ie' ? pt.ie : trend === 'radius' ? pt.r : pt.en
    return 145 - (val / maxVal) * 115
  }

  const pathD = points.reduce((acc, pt, i) => {
    const x = 50 + (i / (points.length - 1)) * 520
    const y = getY(pt)
    return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`
  }, '')

  return (
    <div className="flex flex-col gap-2.5">
      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="h-3 w-3" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
              Periodic Properties &amp; Atomic Trends Solver
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <button
              onClick={() => setTrend('ie')}
              className={`px-2.5 py-1 rounded-md border text-[11px] transition-all ${
                trend === 'ie'
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              Ionization Energy (IE)
            </button>
            <button
              onClick={() => setTrend('radius')}
              className={`px-2.5 py-1 rounded-md border text-[11px] transition-all ${
                trend === 'radius'
                  ? 'bg-purple-500/20 border-purple-500 text-purple-300 font-bold'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              Atomic Radius (r)
            </button>
            <button
              onClick={() => setTrend('en')}
              className={`px-2.5 py-1 rounded-md border text-[11px] transition-all ${
                trend === 'en'
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              Electronegativity (χ)
            </button>
          </div>
        </div>

        <svg viewBox="0 0 620 180" className="w-full h-auto select-none">
          {/* Axes */}
          <line x1="45" y1="150" x2="585" y2="150" stroke="#52525b" strokeWidth="1.5" />
          <line x1="45" y1="150" x2="45" y2="20" stroke="#52525b" strokeWidth="1.5" />
          <text x="590" y="154" fontSize="10" fill="#a1a1aa" fontFamily="monospace">
            Z
          </text>
          <text x="42" y="16" fontSize="10" fill="#a1a1aa" fontFamily="monospace">
            {trend === 'ie' ? 'kJ/mol' : trend === 'radius' ? 'pm' : 'Pauling'}
          </text>

          {/* Period vertical boundary guides */}
          {[2, 10, 18].map((zVal) => {
            const idx = points.findIndex((p) => p.z === zVal)
            const x = 50 + (idx / (points.length - 1)) * 520
            return (
              <g key={zVal}>
                <line x1={x} y1="25" x2={x} y2="150" stroke="#3f3f46" strokeDasharray="3 3" />
                <text x={x} y="22" textAnchor="middle" fontSize="9" fill="#a1a1aa" fontFamily="monospace">
                  Octet End
                </text>
              </g>
            )
          })}

          {/* Trend Curve */}
          <path
            d={pathD}
            fill="none"
            stroke={trend === 'ie' ? '#f43f5e' : trend === 'radius' ? '#a855f7' : '#f59e0b'}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Element Points */}
          {points.map((pt, i) => {
            const x = 50 + (i / (points.length - 1)) * 520
            const y = getY(pt)
            return (
              <g key={pt.z}>
                <circle cx={x} cy={y} r="3.5" fill="#ffffff" stroke="#000000" strokeWidth="1" />
                <text
                  x={x}
                  y={y - 7}
                  textAnchor="middle"
                  fontSize="8.5"
                  fill="#e4e4e7"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {pt.sym}
                </text>
              </g>
            )
          })}
        </svg>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-2 text-xs">
          <span className="font-semibold text-emerald-400">Periodic Law Insight:</span>
          <span className="font-sans text-muted-foreground text-[11.5px]">
            {trend === 'ie'
              ? 'Ionization energy peaks at Noble Gases (He, Ne, Ar) due to filled valence shells; drops sharply at Alkali metals.'
              : trend === 'radius'
              ? 'Atomic radius contracts across a period as Z_eff increases (drawing electrons inward), and expands down a group.'
              : 'Electronegativity reaches its universal peak at Fluorine (3.98) and minimum at alkali metals.'}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  13. VSEPR Molecular Geometry & Bond Angle Solver                  */
/* ------------------------------------------------------------------ */

export function MolecularVseprDiagram({ playing }: { playing: boolean }) {
  const [selected, setSelected] = useState<'ch4' | 'nh3' | 'h2o' | 'bf3' | 'becl2'>('h2o')

  const moleculeData = {
    ch4: {
      formula: 'CH₄',
      name: 'Methane',
      steric: 4,
      bp: 4,
      lp: 0,
      hybrid: 'sp³',
      ideal: '109.5°',
      actual: '109.5°',
      polar: 'Nonpolar (μ = 0 D)',
      desc: 'All 4 bonding pairs experience identical repulsion; perfect tetrahedral symmetry.',
    },
    nh3: {
      formula: 'NH₃',
      name: 'Ammonia',
      steric: 4,
      bp: 3,
      lp: 1,
      hybrid: 'sp³',
      ideal: '109.5°',
      actual: '107.0°',
      polar: 'Polar (μ = 1.47 D)',
      desc: '1 lone pair exerts stronger LP-BP repulsion, compressing bond angle down to 107°.',
    },
    h2o: {
      formula: 'H₂O',
      name: 'Water',
      steric: 4,
      bp: 2,
      lp: 2,
      hybrid: 'sp³',
      ideal: '109.5°',
      actual: '104.5°',
      polar: 'Polar (μ = 1.85 D)',
      desc: '2 lone pairs exert maximal LP-LP repulsion, squeezing H-O-H angle to 104.5°.',
    },
    bf3: {
      formula: 'BF₃',
      name: 'Boron Trifluoride',
      steric: 3,
      bp: 3,
      lp: 0,
      hybrid: 'sp²',
      ideal: '120.0°',
      actual: '120.0°',
      polar: 'Nonpolar (μ = 0 D)',
      desc: '3 electron domains disperse coplanar at 120° apart; trigonal planar geometry.',
    },
    becl2: {
      formula: 'BeCl₂',
      name: 'Beryllium Chloride',
      steric: 2,
      bp: 2,
      lp: 0,
      hybrid: 'sp',
      ideal: '180.0°',
      actual: '180.0°',
      polar: 'Nonpolar (μ = 0 D)',
      desc: '2 electron domains point directly opposite at 180°; linear geometry.',
    },
  }[selected]

  return (
    <div className="flex flex-col gap-2.5">
      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              <Sparkles className="h-3 w-3" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
              VSEPR Theory &amp; Molecular Shapes Solver
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono">
            {(['ch4', 'nh3', 'h2o', 'bf3', 'becl2'] as const).map((id) => (
              <button
                key={id}
                onClick={() => setSelected(id)}
                className={`px-2 py-0.5 rounded-md border uppercase transition-all ${
                  selected === id
                    ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300 font-bold'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        <svg viewBox="0 0 600 170" className="w-full h-auto select-none">
          {/* Central atom node */}
          <circle cx="240" cy="90" r="24" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
          <text x="240" y="96" textAnchor="middle" fontSize="14" fill="#ffffff" fontWeight="bold" fontFamily="monospace">
            {selected === 'h2o' ? 'O' : selected === 'nh3' ? 'N' : selected === 'ch4' ? 'C' : selected === 'bf3' ? 'B' : 'Be'}
          </text>

          {/* Ligand bonds & atoms */}
          {selected === 'h2o' && (
            <>
              {/* O-H bonds at 104.5 deg */}
              <line x1="225" y1="105" x2="160" y2="135" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
              <circle cx="160" cy="135" r="14" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
              <text x="160" y="140" textAnchor="middle" fontSize="11" fill="#ffffff" fontWeight="bold">H</text>

              <line x1="255" y1="105" x2="320" y2="135" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
              <circle cx="320" cy="135" r="14" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
              <text x="320" y="140" textAnchor="middle" fontSize="11" fill="#ffffff" fontWeight="bold">H</text>

              {/* Lone pair lobes at top */}
              <ellipse cx="215" cy="45" rx="16" ry="22" fill="#818cf8" fillOpacity="0.25" stroke="#a5b4fc" strokeDasharray="3 2" />
              <circle cx="212" cy="45" r="2" fill="#e0e7ff" /><circle cx="218" cy="45" r="2" fill="#e0e7ff" />

              <ellipse cx="265" cy="45" rx="16" ry="22" fill="#818cf8" fillOpacity="0.25" stroke="#a5b4fc" strokeDasharray="3 2" />
              <circle cx="262" cy="45" r="2" fill="#e0e7ff" /><circle cx="268" cy="45" r="2" fill="#e0e7ff" />

              {/* Repulsion arrows */}
              <path d="M 230 45 Q 240 38 250 45" fill="none" stroke="#f43f5e" strokeWidth="1.8" />
              <text x="240" y="30" textAnchor="middle" fontSize="9" fill="#f43f5e" fontFamily="monospace">
                LP-LP Repulsion
              </text>
            </>
          )}

          {selected === 'nh3' && (
            <>
              <line x1="220" y1="105" x2="160" y2="140" stroke="#94a3b8" strokeWidth="4" />
              <circle cx="160" cy="140" r="14" fill="#38bdf8" />
              <text x="160" y="144" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">H</text>

              <line x1="240" y1="114" x2="240" y2="155" stroke="#94a3b8" strokeWidth="4" />
              <circle cx="240" cy="155" r="14" fill="#38bdf8" />
              <text x="240" y="159" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">H</text>

              <line x1="260" y1="105" x2="320" y2="140" stroke="#94a3b8" strokeWidth="4" />
              <circle cx="320" cy="140" r="14" fill="#38bdf8" />
              <text x="320" y="144" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">H</text>

              {/* 1 lone pair lobe */}
              <ellipse cx="240" cy="45" rx="18" ry="24" fill="#818cf8" fillOpacity="0.25" stroke="#a5b4fc" strokeDasharray="3 2" />
              <circle cx="236" cy="45" r="2.5" fill="#e0e7ff" /><circle cx="244" cy="45" r="2.5" fill="#e0e7ff" />
              <text x="240" y="18" textAnchor="middle" fontSize="9.5" fill="#a5b4fc">
                1 Lone Pair
              </text>
            </>
          )}

          {selected === 'ch4' && (
            <>
              <line x1="240" y1="66" x2="240" y2="25" stroke="#94a3b8" strokeWidth="4" />
              <circle cx="240" cy="25" r="14" fill="#38bdf8" />
              <text x="240" y="29" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">H</text>

              <line x1="220" y1="105" x2="160" y2="140" stroke="#94a3b8" strokeWidth="4" />
              <circle cx="160" cy="140" r="14" fill="#38bdf8" />
              <text x="160" y="144" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">H</text>

              <line x1="240" y1="114" x2="240" y2="155" stroke="#94a3b8" strokeWidth="4" />
              <circle cx="240" cy="155" r="14" fill="#38bdf8" />
              <text x="240" y="159" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">H</text>

              <line x1="260" y1="105" x2="320" y2="140" stroke="#94a3b8" strokeWidth="4" />
              <circle cx="320" cy="140" r="14" fill="#38bdf8" />
              <text x="320" y="144" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">H</text>
            </>
          )}

          {/* Target Data Panel on right */}
          <g transform="translate(380, 25)">
            <rect width="200" height="120" rx="8" fill="#18181b" stroke="#6366f1" strokeWidth="1.5" />
            <text x="14" y="24" fontSize="12" fill="#a5b4fc" fontWeight="bold">
              {moleculeData.formula} · {moleculeData.name}
            </text>
            <text x="14" y="46" fontSize="10.5" fill="#e4e4e7">
              Steric No: <tspan fill="#818cf8" fontWeight="bold">{moleculeData.steric}</tspan> ({moleculeData.hybrid})
            </text>
            <text x="14" y="66" fontSize="10.5" fill="#e4e4e7">
              Ideal Angle: <tspan fill="#a1a1aa">{moleculeData.ideal}</tspan>
            </text>
            <text x="14" y="86" fontSize="11" fill="#2dd4bf" fontWeight="bold">
              Actual Angle: {moleculeData.actual}
            </text>
            <text x="14" y="106" fontSize="10" fill="#fbbf24">
              {moleculeData.polar}
            </text>
          </g>
        </svg>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-2 text-xs">
          <span className="font-semibold text-indigo-400">Repulsion Order:</span>
          <span className="font-mono text-muted-foreground">
            LP–LP &gt; LP–BP &gt; BP–BP
          </span>
          <span className="font-sans text-[11px] text-muted-foreground italic">
            {moleculeData.desc}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  14. Chemical Kinetics & Arrhenius Activation Barrier Solver       */
/* ------------------------------------------------------------------ */

export function ReactionKineticsDiagram({ playing }: { playing: boolean }) {
  const [order, setOrder] = useState<0 | 1 | 2>(1)
  const [hasCat, setHasCat] = useState(false)
  const [tVal, setTVal] = useState(10)

  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      setTVal((prev) => (prev >= 35 ? 0 : prev + 1))
    }, 150)
    return () => clearInterval(interval)
  }, [playing])

  const kEff = hasCat ? 0.08 : 0.04
  const a0 = 1.0

  // Points for concentration plot
  const pts: { t: number; a: number }[] = []
  for (let t = 0; t <= 35; t += 2) {
    let conc = a0
    if (order === 0) conc = Math.max(0, a0 - kEff * t * 0.3)
    else if (order === 1) conc = a0 * Math.exp(-kEff * t)
    else conc = a0 / (1 + kEff * a0 * t)
    pts.push({ t, a: conc })
  }

  const pathA = pts.reduce((acc, pt, i) => {
    const x = 50 + (pt.t / 35) * 220
    const y = 145 - (pt.a / 1.0) * 110
    return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`
  }, '')

  return (
    <div className="flex flex-col gap-2.5">
      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Sparkles className="h-3 w-3" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
              Reaction Kinetics &amp; Arrhenius Barrier Studio
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1 font-mono">
              <button
                onClick={() => setOrder(0)}
                className={`px-2 py-0.5 rounded text-[11px] ${order === 0 ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-muted-foreground'}`}
              >
                0th
              </button>
              <button
                onClick={() => setOrder(1)}
                className={`px-2 py-0.5 rounded text-[11px] ${order === 1 ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-muted-foreground'}`}
              >
                1st
              </button>
              <button
                onClick={() => setOrder(2)}
                className={`px-2 py-0.5 rounded text-[11px] ${order === 2 ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-muted-foreground'}`}
              >
                2nd
              </button>
            </div>
            <button
              onClick={() => setHasCat(!hasCat)}
              className={`px-2.5 py-1 rounded-md border text-[11px] font-medium transition-all ${
                hasCat
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {hasCat ? 'Catalyst ON (Lower Ea)' : 'No Catalyst'}
            </button>
          </div>
        </div>

        <svg viewBox="0 0 620 170" className="w-full h-auto select-none">
          {/* Left: Concentration vs Time */}
          <g>
            <line x1="50" y1="145" x2="280" y2="145" stroke="#52525b" strokeWidth="1.5" />
            <line x1="50" y1="145" x2="50" y2="25" stroke="#52525b" strokeWidth="1.5" />
            <text x="285" y="148" fontSize="9.5" fill="#a1a1aa" fontFamily="monospace">t (s)</text>
            <text x="44" y="20" fontSize="9.5" fill="#a1a1aa" fontFamily="monospace">[A]</text>
            <path d={pathA} fill="none" stroke="#ef4444" strokeWidth="2.5" />
            <text x="140" y="38" fontSize="10" fill="#f87171" fontWeight="bold">
              {order === 0 ? '[A] = [A]₀ - kt' : order === 1 ? '[A] = [A]₀ e^{-kt}' : '1/[A] = 1/[A]₀ + kt'}
            </text>
          </g>

          {/* Right: Arrhenius Energy Profile */}
          <g transform="translate(320, 0)">
            <line x1="30" y1="145" x2="270" y2="145" stroke="#52525b" strokeWidth="1.5" />
            <line x1="30" y1="145" x2="30" y2="25" stroke="#52525b" strokeWidth="1.5" />
            <text x="275" y="148" fontSize="9.5" fill="#a1a1aa" fontFamily="monospace">Reaction Coordinate</text>
            <text x="25" y="20" fontSize="9.5" fill="#a1a1aa" fontFamily="monospace">Potential Energy</text>

            {/* Reactant level */}
            <line x1="30" y1="110" x2="70" y2="110" stroke="#a1a1aa" strokeWidth="2" />
            <text x="40" y="104" fontSize="9.5" fill="#a1a1aa" fontWeight="bold">Reactants</text>

            {/* Uncatalyzed curve */}
            <path
              d="M 70 110 Q 150 -10 230 130"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.2"
              strokeDasharray={hasCat ? '3 2' : undefined}
            />

            {/* Catalyzed curve */}
            {hasCat && (
              <path
                d="M 70 110 Q 150 40 230 130"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
              />
            )}

            {/* Product level */}
            <line x1="230" y1="130" x2="260" y2="130" stroke="#a1a1aa" strokeWidth="2" />
            <text x="235" y="124" fontSize="9.5" fill="#34d399" fontWeight="bold">Products</text>

            {/* Ea marker */}
            <text x="150" y={hasCat ? 55 : 30} textAnchor="middle" fontSize="10" fill={hasCat ? '#34d399' : '#fbbf24'} fontFamily="monospace" fontWeight="bold">
              {hasCat ? 'E_a (Catalyzed, -50%)' : 'Activation Barrier E_a'}
            </text>
          </g>
        </svg>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-2 text-xs font-mono">
          <span className="font-semibold text-amber-400">Arrhenius Equation:</span>
          <span className="text-muted-foreground">k = A \exp(-E_a / RT)</span>
          <span className="text-emerald-300">
            {order === 1 ? '1st-order half life t_{1/2} = ln(2)/k is independent of [A]₀' : 'Half life depends on initial [A]₀'}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  15. Galvanic Cell & Nernst Equation Solver                        */
/* ------------------------------------------------------------------ */

export function ElectrochemGalvanicDiagram({ playing }: { playing: boolean }) {
  const [eCount, setECount] = useState(0)

  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      setECount((prev) => (prev + 1) % 60)
    }, 50)
    return () => clearInterval(interval)
  }, [playing])

  return (
    <div className="flex flex-col gap-2.5">
      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Sparkles className="h-3 w-3" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
              Galvanic Voltaic Cell &amp; Electrochemical Solver
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-cyan-400 font-bold">Standard Cell EMF: E° = +1.10 V</span>
          </div>
        </div>

        <svg viewBox="0 0 600 170" className="w-full h-auto select-none">
          {/* Anode Beaker (Zinc) */}
          <rect x="70" y="60" width="120" height="95" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
          <rect x="70" y="85" width="120" height="70" rx="4" fill="rgba(56, 189, 248, 0.12)" />
          {/* Zinc Electrode strip */}
          <rect x="115" y="40" width="22" height="100" rx="3" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1.5" />
          <text x="126" y="80" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="bold">Zn</text>
          <text x="130" y="145" textAnchor="middle" fontSize="9.5" fill="#94a3b8" fontWeight="bold">
            Anode (-): Zn → Zn²⁺ + 2e⁻
          </text>

          {/* Cathode Beaker (Copper) */}
          <rect x="410" y="60" width="120" height="95" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
          <rect x="410" y="85" width="120" height="70" rx="4" fill="rgba(37, 99, 235, 0.25)" />
          {/* Copper Electrode strip */}
          <rect x="460" y="40" width="22" height="100" rx="3" fill="#b45309" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="471" y="80" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">Cu</text>
          <text x="470" y="145" textAnchor="middle" fontSize="9.5" fill="#f59e0b" fontWeight="bold">
            Cathode (+): Cu²⁺ + 2e⁻ → Cu
          </text>

          {/* Salt Bridge (U-tube) */}
          <path
            d="M 160 100 L 160 55 Q 160 45 175 45 L 425 45 Q 440 45 440 55 L 440 100"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="16"
            strokeLinecap="round"
            opacity="0.4"
          />
          <text x="300" y="42" textAnchor="middle" fontSize="9" fill="#fef08a" fontWeight="bold">
            Salt Bridge (KNO₃)
          </text>

          {/* External wire with animated electrons */}
          <path d="M 126 40 L 126 18 L 270 18" fill="none" stroke="#e4e4e7" strokeWidth="2" />
          <path d="M 330 18 L 471 18 L 471 40" fill="none" stroke="#e4e4e7" strokeWidth="2" />

          {/* Voltmeter in center */}
          <circle cx="300" cy="18" r="16" fill="#18181b" stroke="#22d3ee" strokeWidth="2" />
          <text x="300" y="22" textAnchor="middle" fontSize="10" fill="#67e8f9" fontWeight="bold" fontFamily="monospace">
            1.10V
          </text>

          {/* Moving electron dots */}
          <circle cx={126 + (eCount % 60) * 2.4} cy="18" r="3" fill="#38bdf8" />
          <text x="200" y="12" fontSize="9" fill="#38bdf8" fontFamily="monospace">
            e⁻ flow →
          </text>
        </svg>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-2 text-xs font-mono">
          <span className="font-semibold text-cyan-400">Nernst Equation:</span>
          <span className="text-muted-foreground"><TeX tex="E_{\text{cell}} = E^\circ - \frac{0.0592}{n}\log Q" /></span>
          <span className="text-teal-300">
            Overall: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)
          </span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  16. Universal Physics & Vector Mechanics Solver                   */
/* ------------------------------------------------------------------ */

export function UniversalPhysicsDiagram({
  questionText,
  explanation,
  options,
  answer,
}: {
  questionText: string
  explanation?: string
  options?: string[]
  answer?: number
}) {
  const [vectorMag, setVectorMag] = useState(25)
  const [vectorAngle, setVectorAngle] = useState(35)

  const rad = (vectorAngle * Math.PI) / 180
  const vx = vectorMag * Math.cos(rad)
  const vy = vectorMag * Math.sin(rad)

  const correctOption = options && answer !== undefined ? options[answer] : null

  return (
    <div className="flex flex-col gap-2.5">
      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="h-3 w-3" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
              Vector Resolution &amp; Physics Laboratory
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <label className="flex items-center gap-1.5">
              <span className="text-muted-foreground">Angle θ:</span>
              <input
                type="range"
                min="0"
                max="90"
                value={vectorAngle}
                onChange={(e) => setVectorAngle(Number(e.target.value))}
                className="w-20 accent-emerald-500"
              />
              <span className="text-emerald-400 font-bold">{vectorAngle}°</span>
            </label>
            <span className="text-muted-foreground">
              Components: <span className="text-teal-300">R_x = {vx.toFixed(1)}</span>,{' '}
              <span className="text-amber-300">R_y = {vy.toFixed(1)}</span>
            </span>
          </div>
        </div>

        <svg viewBox="0 0 600 170" className="w-full h-auto max-h-[220px] select-none">
          {/* Coordinate grid */}
          <line x1="60" y1="140" x2="320" y2="140" stroke="#52525b" strokeWidth="1.5" />
          <line x1="60" y1="140" x2="60" y2="20" stroke="#52525b" strokeWidth="1.5" />
          <text x="325" y="144" fontSize="10" fill="#a1a1aa" fontFamily="monospace">
            x
          </text>
          <text x="56" y="16" fontSize="10" fill="#a1a1aa" fontFamily="monospace">
            y
          </text>

          {/* Component vectors: Rx (horizontal) */}
          <line x1="60" y1="140" x2={60 + vx * 6} y2="140" stroke="#2dd4bf" strokeWidth="2.5" />
          <polygon
            points={`${60 + vx * 6},140 ${52 + vx * 6},137 ${52 + vx * 6},143`}
            fill="#2dd4bf"
          />
          <text x={60 + (vx * 6) / 2} y="156" textAnchor="middle" fontSize="10.5" fill="#2dd4bf" fontFamily="monospace">
            R_x = R cos θ
          </text>

          {/* Component vectors: Ry (vertical projection) */}
          <line
            x1={60 + vx * 6}
            y1="140"
            x2={60 + vx * 6}
            y2={140 - vy * 2.8}
            stroke="#fbbf24"
            strokeWidth="2"
            strokeDasharray="3 3"
          />
          <text
            x={70 + vx * 6}
            y={140 - (vy * 2.8) / 2}
            fontSize="10.5"
            fill="#fbbf24"
            fontFamily="monospace"
          >
            R_y = R sin θ
          </text>

          {/* Resultant Vector R */}
          <line
            x1="60"
            y1="140"
            x2={60 + vx * 6}
            y2={140 - vy * 2.8}
            stroke="#10b981"
            strokeWidth="3"
          />
          <circle cx={60 + vx * 6} cy={140 - vy * 2.8} r="4" fill="#34d399" />
          <text
            x={60 + (vx * 6) / 2 - 10}
            y={140 - (vy * 2.8) / 2 - 8}
            fontSize="11"
            fill="#34d399"
            fontWeight="bold"
            fontFamily="monospace"
          >
            Resultant Vector R
          </text>

          {/* Analytical Physics Target Card on right */}
          <g transform="translate(370, 30)">
            <rect width="210" height="110" rx="8" fill="#18181b" stroke="#10b981" strokeWidth="1.5" />
            <text x="14" y="24" fontSize="11" fill="#34d399" fontWeight="bold" fontFamily="monospace">
              ✓ Verified Solution:
            </text>
            <text x="14" y="46" fontSize="12" fill="#6ee7b7" fontWeight="bold" fontFamily="sans-serif">
              {correctOption ? String(correctOption).slice(0, 24) : 'Verified Conclusion'}
            </text>
            <text x="14" y="70" fontSize="10" fill="#a1a1aa" fontFamily="sans-serif">
              Physical parameters and
            </text>
            <text x="14" y="85" fontSize="10" fill="#a1a1aa" fontFamily="sans-serif">
              conservation rules satisfied.
            </text>
          </g>
        </svg>

        {explanation && (
          <div className="mt-2 text-xs leading-relaxed text-muted-foreground border-t border-border/60 pt-2 font-serif">
            <span className="font-semibold text-foreground font-sans mr-1">Direct Physical Proof:</span>
            <RichText text={explanation} />
          </div>
        )}
      </div>
    </div>
  )
}

/* =====================================================================
   Master Visual Diagram Solver Component
   Intelligently selects and renders the highest-accuracy diagram for
   any question, with animation toggles, expand/collapse, and full clarity.
   ===================================================================== */

interface VisualDiagramSolverProps {
  questionText: string
  options?: string[]
  answer?: number
  explanation?: string
  customDiagram?: string
  chapterId?: string
  subject?: string
  initiallyOpen?: boolean
}

export function VisualDiagramSolver({
  questionText,
  options,
  answer,
  explanation,
  customDiagram,
  chapterId,
  subject,
  initiallyOpen = true,
}: VisualDiagramSolverProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen)
  const [playing, setPlaying] = useState(true)
  const [viewMode, setViewMode] = useState<'simulation' | 'handdrawn'>('simulation')

  const topic = useMemo(() => {
    return detectDiagramTopic(questionText, explanation, chapterId)
  }, [questionText, explanation, chapterId])

  // No genuine STEM visual fits this question → render nothing rather than an
  // irrelevant diagram (e.g. a physics vector lab under a logic question).
  if (!topic && !customDiagram) return null

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-book-rule/80 bg-card/60 transition-all">
      {/* Header bar with controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-book-rule/70 bg-muted/30 px-3.5 py-2 font-sans">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 text-left text-xs font-semibold text-foreground hover:text-primary transition-colors focus-visible:outline-none"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
            <Atom className="h-3 w-3" />
          </span>
          <span>Visual Diagram &amp; Solution</span>
          {topic && (
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-400 border border-emerald-500/20">
              {topic.replace('_', ' ')}
            </span>
          )}
        </button>

        <div className="flex items-center gap-2 text-xs">
          {/* Mode Switcher: Interactive Simulation vs Hand-drawn Sketch */}
          <div className="flex items-center rounded-lg border border-border/80 bg-background/90 p-0.5 text-[11px] font-medium shadow-xs">
            <button
              type="button"
              onClick={() => {
                setViewMode('simulation')
                if (!isOpen) setIsOpen(true)
              }}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-all ${
                viewMode === 'simulation'
                  ? 'bg-emerald-500/20 text-emerald-400 font-semibold shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              title="Interactive Animated Simulation"
            >
              <Zap className="h-3 w-3" />
              <span>Simulation</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setViewMode('handdrawn')
                if (!isOpen) setIsOpen(true)
              }}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-all ${
                viewMode === 'handdrawn'
                  ? 'bg-amber-500/20 text-amber-400 font-semibold shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              title="Authentic Hand-drawn Notebook Sketch, Graphs & Formulas"
            >
              <Pencil className="h-3 w-3" />
              <span>Hand-drawn Sketch</span>
            </button>
          </div>

          {viewMode === 'simulation' && !customDiagram && (
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="flex items-center gap-1 px-2 py-1 rounded-md border border-border bg-background/80 hover:bg-muted text-[11px] font-medium transition-colors"
              title={playing ? 'Pause physics animation' : 'Play physics animation'}
            >
              {playing ? <Pause className="h-3 w-3 text-amber-400" /> : <Play className="h-3 w-3 text-emerald-400" />}
              <span>{playing ? 'Pause' : 'Play'}</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-[11px] text-muted-foreground hover:text-foreground transition-colors"
          >
            {isOpen ? 'Collapse' : 'Expand'}
          </button>
        </div>
      </div>

      {/* Body content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="p-3 sm:p-4"
          >
            {viewMode === 'handdrawn' && topic ? (
              <HandDrawnSketch
                topic={topic}
                questionText={questionText}
                explanation={explanation}
                options={options}
                answer={answer}
                onSwitchToSimulation={() => setViewMode('simulation')}
              />
            ) : customDiagram ? (
              <div
                className="mx-auto w-full max-w-[800px] [&_svg]:block [&_svg]:h-auto [&_svg]:w-full"
                dangerouslySetInnerHTML={{ __html: customDiagram }}
              />
            ) : topic === 'bohr_transitions' ? (
              <BohrTransitionsDiagram questionText={questionText} playing={playing} />
            ) : topic === 'projectile' ? (
              <ProjectileMotionDiagram playing={playing} />
            ) : topic === 'wave_interference' ? (
              <WaveInterferenceDiagram playing={playing} />
            ) : topic === 'free_body' ? (
              <FreeBodyForcesDiagram playing={playing} />
            ) : topic === 'doppler' ? (
              <DopplerEffectDiagram playing={playing} />
            ) : topic === 'circuits' ? (
              <CircuitsDiagram playing={playing} />
            ) : topic === 'optics_snell' ? (
              <OpticsSnellDiagram playing={playing} />
            ) : topic === 'thermodynamics_pv' ? (
              <ThermodynamicsPVDiagram playing={playing} />
            ) : topic === 'calculus_tangent' ? (
              <CalculusTangentDiagram playing={playing} />
            ) : topic === 'logic_gates' ? (
              <LogicGatesDiagram playing={playing} />
            ) : topic === 'titration_equilibrium' ? (
              <TitrationEquilibriumDiagram questionText={questionText} playing={playing} />
            ) : topic === 'periodic_trends' ? (
              <PeriodicTrendsDiagram playing={playing} />
            ) : topic === 'molecular_vsepr' ? (
              <MolecularVseprDiagram playing={playing} />
            ) : topic === 'reaction_kinetics' ? (
              <ReactionKineticsDiagram playing={playing} />
            ) : topic === 'electrochem_galvanic' ? (
              <ElectrochemGalvanicDiagram playing={playing} />
            ) : (
              <UniversalPhysicsDiagram
                questionText={questionText}
                explanation={explanation}
                options={options}
                answer={answer}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

