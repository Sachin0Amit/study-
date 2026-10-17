'use client'

/**
 * Chemistry Bench (X5 Pro) — a reaction sandbox with real stoichiometry.
 *
 *  - Reaction bench: eight classic reactions (Haber, combustion,
 *    neutralization, single displacement, decomposition, esterification,
 *    thermite, N₂O₄ dissociation) on an animated rAF flask canvas —
 *    gas bubbles, silver precipitate, phenolphthalein fade, flame.
 *  - Balance mini-game: coefficient inputs per species with live per-element
 *    atom counts on both sides, "Check balance" (atom counts + lowest terms)
 *    and "Show answer".
 *  - Energy diagrams: SVG reaction-coordinate profiles with activation-energy
 *    and ΔH arrows, plus a mystery-diagram exo/endo challenge with a streak.
 *  - ICE calculator: equilibrium reactions with real literature Kc values;
 *    bisection solves Q(x) = Kc over the physical interval and renders the
 *    full I/C/E table with x highlighted.
 *
 * All mutable animation state lives in refs; the flask runs one rAF loop that
 * is cancelled on unmount. Values (ΔH, Ea, Kc) are rounded literature values
 * quoted for teaching.
 */

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Atom,
  Check,
  FlaskConical,
  Play,
  RotateCcw,
  Scale,
  Target,
  Thermometer,
  X,
} from 'lucide-react'
import { RING, clamp, fmt } from './types'
import { LabMissions, getMissions, useMissions } from './missions'

/* ------------------------------------------------------------------ */
/*  Reaction data — formulas, atom counts and coefficients are real     */
/* ------------------------------------------------------------------ */

interface RxSpecies {
  /** display formula with unicode subscripts */
  formula: string
  name: string
  state: 'g' | 'l' | 's' | 'aq'
  /** balanced coefficient */
  coeff: number
  /** atoms per formula unit, e.g. Cu(NO₃)₂ → { Cu:1, N:2, O:6 } */
  atoms: Record<string, number>
}

interface FlaskColor {
  hex: string
  a: number
}

export interface Reaction {
  id: string
  name: string
  category: string
  reversible: boolean
  /** kJ per reaction as balanced (negative = exothermic) */
  dH: number
  dHNote: string
  /** approximate activation energy, kJ/mol */
  ea: number
  eaNote: string
  kc?: { value: number; note: string }
  left: RxSpecies[]
  right: RxSpecies[]
  effect: 'bubbles' | 'precipitate' | 'colorshift' | 'flame'
  liquidFrom: FlaskColor
  liquidTo: FlaskColor
  observation: string
}

const REACTIONS: Reaction[] = [
  {
    id: 'haber',
    name: 'Haber process',
    category: 'Equilibrium',
    reversible: true,
    dH: -92,
    dHNote: 'per 2 mol NH₃ — equilibrium favours ammonia when cold, but industry runs it hot for kinetics',
    ea: 230,
    eaNote: 'uncatalysed; an iron catalyst slashes the effective barrier',
    kc: { value: 6.8e-5, note: 'cited near 400 °C — tiny Kc, hence the enormous operating pressures' },
    left: [
      { formula: 'N₂', name: 'nitrogen', state: 'g', coeff: 1, atoms: { N: 2 } },
      { formula: 'H₂', name: 'hydrogen', state: 'g', coeff: 3, atoms: { H: 2 } },
    ],
    right: [{ formula: 'NH₃', name: 'ammonia', state: 'g', coeff: 2, atoms: { N: 1, H: 3 } }],
    effect: 'bubbles',
    liquidFrom: { hex: '#34d399', a: 0.2 },
    liquidTo: { hex: '#34d399', a: 0.3 },
    observation:
      'The gas mixture stews over the catalyst — with Kc ≈ 6.8×10⁻⁵ only a few percent converts to NH₃ per pass; the plant recycles the rest.',
  },
  {
    id: 'methane',
    name: 'Methane combustion',
    category: 'Combustion',
    reversible: false,
    dH: -890,
    dHNote: 'standard enthalpy of combustion of methane',
    ea: 420,
    eaNote: 'why you need a spark — the spark pays the activation bill',
    left: [
      { formula: 'CH₄', name: 'methane', state: 'g', coeff: 1, atoms: { C: 1, H: 4 } },
      { formula: 'O₂', name: 'oxygen', state: 'g', coeff: 2, atoms: { O: 2 } },
    ],
    right: [
      { formula: 'CO₂', name: 'carbon dioxide', state: 'g', coeff: 1, atoms: { C: 1, O: 2 } },
      { formula: 'H₂O', name: 'water', state: 'l', coeff: 2, atoms: { H: 2, O: 1 } },
    ],
    effect: 'flame',
    liquidFrom: { hex: '#64748b', a: 0.16 },
    liquidTo: { hex: '#f59e0b', a: 0.22 },
    observation:
      'A pale flame at the mouth — complete combustion gives CO₂ and water vapour and banks 890 kJ per mole of methane.',
  },
  {
    id: 'neutralization',
    name: 'HCl + NaOH',
    category: 'Neutralization',
    reversible: false,
    dH: -57.1,
    dHNote: 'the classic −57 kJ/mol of strong acid + strong base in water',
    ea: 15,
    eaNote: 'essentially diffusion-limited — hydronium meets hydroxide and it is over',
    left: [
      { formula: 'HCl', name: 'hydrochloric acid', state: 'aq', coeff: 1, atoms: { H: 1, Cl: 1 } },
      { formula: 'NaOH', name: 'sodium hydroxide', state: 'aq', coeff: 1, atoms: { Na: 1, O: 1, H: 1 } },
    ],
    right: [
      { formula: 'NaCl', name: 'sodium chloride', state: 'aq', coeff: 1, atoms: { Na: 1, Cl: 1 } },
      { formula: 'H₂O', name: 'water', state: 'l', coeff: 1, atoms: { H: 2, O: 1 } },
    ],
    effect: 'colorshift',
    liquidFrom: { hex: '#f9a8d4', a: 0.5 },
    liquidTo: { hex: '#f9a8d4', a: 0.06 },
    observation:
      'Phenolphthalein pink fades to colourless — the net ionic event is just H₃O⁺ + OH⁻ → 2H₂O, releasing 57 kJ per mole.',
  },
  {
    id: 'displacement',
    name: 'Cu + AgNO₃',
    category: 'Displacement',
    reversible: false,
    dH: -147,
    dHNote: 'copper is the stronger reducing agent — it donates electrons to silver',
    ea: 60,
    eaNote: 'surface reaction, sped up enormously by the crystal defects it grows on',
    left: [
      { formula: 'Cu', name: 'copper', state: 's', coeff: 1, atoms: { Cu: 1 } },
      { formula: 'AgNO₃', name: 'silver nitrate', state: 'aq', coeff: 2, atoms: { Ag: 1, N: 1, O: 3 } },
    ],
    right: [
      { formula: 'Cu(NO₃)₂', name: 'copper(II) nitrate', state: 'aq', coeff: 1, atoms: { Cu: 1, N: 2, O: 6 } },
      { formula: 'Ag', name: 'silver', state: 's', coeff: 2, atoms: { Ag: 1 } },
    ],
    effect: 'precipitate',
    liquidFrom: { hex: '#7dd3fc', a: 0.26 },
    liquidTo: { hex: '#38bdf8', a: 0.34 },
    observation:
      'Needles of silver plate onto the copper while the solution drifts blue as Cu²⁺ enters — single displacement, caught in the act.',
  },
  {
    id: 'decomposition',
    name: 'CaCO₃ decomposition',
    category: 'Decomposition',
    reversible: false,
    dH: 178,
    dHNote: 'endothermic — why quicklime has been fired in kilns for millennia',
    ea: 200,
    eaNote: 'the carbonate lattice refuses to let CO₂ go until it is seriously hot',
    left: [{ formula: 'CaCO₃', name: 'calcium carbonate', state: 's', coeff: 1, atoms: { Ca: 1, C: 1, O: 3 } }],
    right: [
      { formula: 'CaO', name: 'calcium oxide', state: 's', coeff: 1, atoms: { Ca: 1, O: 1 } },
      { formula: 'CO₂', name: 'carbon dioxide', state: 'g', coeff: 1, atoms: { C: 1, O: 2 } },
    ],
    effect: 'bubbles',
    liquidFrom: { hex: '#94a3b8', a: 0.1 },
    liquidTo: { hex: '#e2e8f0', a: 0.38 },
    observation:
      'CO₂ streams off through the limewater and turns it milky while the solid keeps absorbing heat — entropy and enthalpy both billed to the burner.',
  },
  {
    id: 'esterification',
    name: 'Esterification',
    category: 'Equilibrium',
    reversible: true,
    dH: -8,
    dHNote: 'nearly thermoneutral — heat barely moves this equilibrium',
    ea: 55,
    eaNote: 'with a strong acid catalyst (H₂SO₄) doing the heavy lifting',
    kc: { value: 4.0, note: '≈ 4 at 25 °C — the famous two-thirds conversion ceiling' },
    left: [
      { formula: 'CH₃COOH', name: 'acetic acid', state: 'l', coeff: 1, atoms: { C: 2, H: 4, O: 2 } },
      { formula: 'C₂H₅OH', name: 'ethanol', state: 'l', coeff: 1, atoms: { C: 2, H: 6, O: 1 } },
    ],
    right: [
      { formula: 'CH₃COOC₂H₅', name: 'ethyl acetate', state: 'l', coeff: 1, atoms: { C: 4, H: 8, O: 2 } },
      { formula: 'H₂O', name: 'water', state: 'l', coeff: 1, atoms: { H: 2, O: 1 } },
    ],
    effect: 'colorshift',
    liquidFrom: { hex: '#a78bfa', a: 0.14 },
    liquidTo: { hex: '#a78bfa', a: 0.26 },
    observation:
      'The pear-drop smell of ethyl acetate rises slowly — with Kc ≈ 4 starting from pure reactants you stall near two-thirds conversion unless you drain water.',
  },
  {
    id: 'thermite',
    name: 'Thermite',
    category: 'Combustion',
    reversible: false,
    dH: -851.5,
    dHNote: 'so exothermic the iron product leaves the reaction as a liquid',
    ea: 350,
    eaNote: 'why it takes a magnesium fuse to light',
    left: [
      { formula: 'Fe₂O₃', name: 'iron(III) oxide', state: 's', coeff: 1, atoms: { Fe: 2, O: 3 } },
      { formula: 'Al', name: 'aluminium', state: 's', coeff: 2, atoms: { Al: 1 } },
    ],
    right: [
      { formula: 'Fe', name: 'iron', state: 'l', coeff: 2, atoms: { Fe: 1 } },
      { formula: 'Al₂O₃', name: 'aluminium oxide', state: 's', coeff: 1, atoms: { Al: 2, O: 3 } },
    ],
    effect: 'flame',
    liquidFrom: { hex: '#fb7185', a: 0.2 },
    liquidTo: { hex: '#f97316', a: 0.3 },
    observation:
      'White-hot and self-sustaining — aluminium strips oxygen from iron oxide and hands back 850 kJ per mole of oxide.',
  },
  {
    id: 'n2o4',
    name: 'N₂O₄ dissociation',
    category: 'Equilibrium',
    reversible: true,
    dH: 57.2,
    dHNote: 'endothermic forward — heat pushes the brown side',
    ea: 57,
    eaNote: 'breaking the N–N bond of dinitrogen tetroxide',
    kc: { value: 4.6e-3, note: 'at 25 °C in a closed vessel' },
    left: [{ formula: 'N₂O₄', name: 'dinitrogen tetroxide', state: 'g', coeff: 1, atoms: { N: 2, O: 4 } }],
    right: [{ formula: 'NO₂', name: 'nitrogen dioxide', state: 'g', coeff: 2, atoms: { N: 1, O: 2 } }],
    effect: 'colorshift',
    liquidFrom: { hex: '#94a3b8', a: 0.08 },
    liquidTo: { hex: '#b45309', a: 0.45 },
    observation:
      'Colourless N₂O₄ darkens to the brown of NO₂ as it dissociates — warm the flask and it deepens, chill it and the brown fades back.',
  },
]

function speciesOf(rx: Reaction): RxSpecies[] {
  return [...rx.left, ...rx.right]
}

function eqString(rx: Reaction): string {
  const side = (arr: RxSpecies[]) => arr.map((s) => `${s.coeff > 1 ? `${s.coeff} ` : ''}${s.formula}(${s.state})`).join(' + ')
  return `${side(rx.left)} ${rx.reversible ? '⇌' : '→'} ${side(rx.right)}`
}

function elementsOf(rx: Reaction): string[] {
  const set = new Set<string>()
  for (const s of speciesOf(rx)) for (const el of Object.keys(s.atoms)) set.add(el)
  return [...set]
}

function gcd(nums: number[]): number {
  let g = 0
  for (const n of nums) {
    let a = g
    let b = Math.abs(Math.round(n))
    while (b !== 0) {
      const t = a % b
      a = b
      b = t
    }
    g = a
  }
  return g || 1
}

/* ------------------------------------------------------------------ */
/*  Canvas helpers                                                     */
/* ------------------------------------------------------------------ */

function prepCanvas(canvas: HTMLCanvasElement): {
  ctx: CanvasRenderingContext2D
  w: number
  h: number
  ink: string
  grid: string
} | null {
  const rect = canvas.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = Math.max(rect.width, 10)
  const h = Math.max(rect.height, 10)
  const pw = Math.round(w * dpr)
  const ph = Math.round(h * dpr)
  if (canvas.width !== pw || canvas.height !== ph) {
    canvas.width = pw
    canvas.height = ph
  }
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  const cs = getComputedStyle(canvas)
  return {
    ctx,
    w,
    h,
    ink: cs.color || '#94a3b8',
    grid: cs.borderTopColor || 'rgba(128,128,128,0.3)',
  }
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}

function lerpLiquid(a: FlaskColor, b: FlaskColor, t: number): string {
  const ca = hexToRgb(a.hex)
  const cb = hexToRgb(b.hex)
  const r = Math.round(ca[0] + (cb[0] - ca[0]) * t)
  const g = Math.round(ca[1] + (cb[1] - ca[1]) * t)
  const bl = Math.round(ca[2] + (cb[2] - ca[2]) * t)
  const al = a.a + (b.a - a.a) * t
  return `rgba(${r},${g},${bl},${al.toFixed(3)})`
}

/** one shared rAF loop: step(dt) then draw(); cancelled on unmount */
function useRafLoop(step: (dt: number) => void, draw: () => void): void {
  const stepRef = useRef(step)
  const drawRef = useRef(draw)
  // refs are event/loop territory only — sync them after every render, never during
  useEffect(() => {
    stepRef.current = step
    drawRef.current = draw
  })
  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      stepRef.current(dt)
      drawRef.current()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])
}

/* ------------------------------------------------------------------ */
/*  Reaction bench — animated flask                                    */
/* ------------------------------------------------------------------ */

interface Bubble {
  x: number
  y: number
  r: number
  vy: number
  phase: number
}

interface Grain {
  x: number
  y: number
  vy: number
  settled: boolean
}

const RUN_SECONDS = 4

function ReactionBench({ rx, fire }: { rx: Reaction; fire: (id: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState(false)

  const sim = useRef({
    t: 0,
    running: false,
    bubbles: [] as Bubble[],
    grains: [] as Grain[],
    temp: 20,
    flameSeed: 0,
  })

  const targetTemp = 20 + clamp(-rx.dH / 12, -16, 62)

  const run = () => {
    const S = sim.current
    S.t = 0
    S.running = true
    S.bubbles = []
    S.grains = []
    S.temp = 20
    S.flameSeed = Math.random() * 10
    setRunning(true)
    setDone(false)
    fire('chem-run-flask')
  }

  const step = (dt: number) => {
    const S = sim.current
    if (S.running) {
      S.t = Math.min(S.t + dt / RUN_SECONDS, 1)
      if (S.t >= 1) {
        S.running = false
        setRunning(false)
        setDone(true)
      }
    }
    const progress = S.running || S.t >= 1 ? S.t : 0

    // gas bubbles rise from the bottom of the liquid
    if (rx.effect === 'bubbles' && S.running && S.t < 0.96 && Math.random() < dt * 18) {
      S.bubbles.push({
        x: (Math.random() - 0.5) * 2 * 26,
        y: 0,
        r: 1.5 + Math.random() * 2.2,
        vy: 26 + Math.random() * 22,
        phase: Math.random() * Math.PI * 2,
      })
    }
    for (const b of S.bubbles) {
      b.y += b.vy * dt
      b.phase += dt * 6
    }
    S.bubbles = S.bubbles.filter((b) => b.y < 96)

    // precipitate grains nucleate near the surface and sink
    if (rx.effect === 'precipitate' && S.running && S.t < 0.9 && Math.random() < dt * 11) {
      S.grains.push({
        x: (Math.random() - 0.5) * 2 * 30,
        y: -2,
        vy: 0,
        settled: false,
      })
    }
    for (const g of S.grains) {
      if (g.settled) continue
      g.vy += 60 * dt
      g.y += g.vy * dt
      if (g.y >= 88 - Math.random() * 6) {
        g.y = 88
        g.settled = true
      }
    }
    if (S.grains.length > 260) S.grains.splice(0, S.grains.length - 260)

    // thermometer eases toward the enthalpy-signed target
    const k = Math.min(1, dt * 1.6)
    S.temp += (20 + (targetTemp - 20) * progress - S.temp) * k
  }

  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const env = prepCanvas(canvas)
    if (!env) return
    const { ctx, w, h, ink, grid } = env
    const S = sim.current
    const progress = S.running || S.t >= 1 ? S.t : 0
    const ease = progress * progress * (3 - 2 * progress)

    // flask geometry (local coordinates centred on the flask)
    const cx = w * 0.4
    const neckTop = 40
    const neckBot = 100
    const neckHalf = 20
    const bodyBot = h - 48
    const bodyHalf = Math.min(w * 0.26, 118)
    const liquidTop = neckBot + 40

    ctx.save()
    ctx.translate(cx, 0)

    // liquid (clipped to the flask interior)
    const flaskPath = new Path2D()
    flaskPath.moveTo(-neckHalf, neckTop)
    flaskPath.lineTo(-neckHalf, neckBot)
    flaskPath.lineTo(-bodyHalf + 6, bodyBot - 16)
    flaskPath.quadraticCurveTo(-bodyHalf, bodyBot, -bodyHalf + 18, bodyBot)
    flaskPath.lineTo(bodyHalf - 18, bodyBot)
    flaskPath.quadraticCurveTo(bodyHalf, bodyBot, bodyHalf - 6, bodyBot - 16)
    flaskPath.lineTo(neckHalf, neckBot)
    flaskPath.lineTo(neckHalf, neckTop)
    flaskPath.closePath()

    ctx.save()
    ctx.clip(flaskPath)
    ctx.fillStyle = lerpLiquid(rx.liquidFrom, rx.liquidTo, ease)
    ctx.fillRect(-bodyHalf - 4, liquidTop, bodyHalf * 2 + 8, bodyBot - liquidTop + 4)
    // surface sheen
    ctx.strokeStyle = 'rgba(255,255,255,0.22)'
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.ellipse(0, liquidTop + 1, (bodyHalf - 26) * (1 - 0.25 * ((liquidTop - neckBot) / (bodyBot - neckBot))), 4, 0, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()

    // bubbles (local coords: origin at liquid bottom centre, y up)
    ctx.strokeStyle = 'rgba(226,232,240,0.55)'
    ctx.lineWidth = 1
    for (const b of S.bubbles) {
      const bx = b.x + Math.sin(b.phase) * 3
      const by = bodyBot - 8 - b.y
      ctx.beginPath()
      ctx.arc(bx, by, b.r, 0, Math.PI * 2)
      ctx.stroke()
    }

    // precipitate grains
    ctx.fillStyle = 'rgba(203,213,225,0.9)'
    for (const g of S.grains) {
      const gy = bodyBot - 10 - g.y
      ctx.beginPath()
      ctx.arc(g.x + Math.sin(g.x) * 2, gy, 1.8, 0, Math.PI * 2)
      ctx.fill()
    }

    // flask outline
    ctx.strokeStyle = ink
    ctx.lineWidth = 2
    ctx.stroke(flaskPath)
    // lip
    ctx.beginPath()
    ctx.moveTo(-neckHalf - 5, neckTop)
    ctx.lineTo(neckHalf + 5, neckTop)
    ctx.stroke()

    // graduation ticks
    ctx.strokeStyle = grid
    ctx.lineWidth = 1
    for (let i = 1; i <= 3; i++) {
      const ty = neckBot + ((bodyBot - neckBot) * i) / 4
      ctx.beginPath()
      ctx.moveTo(bodyHalf - 6 - (ty - neckBot) * 0.62, ty)
      ctx.lineTo(bodyHalf - 16 - (ty - neckBot) * 0.62, ty)
      ctx.stroke()
    }

    // flame for combustion reactions
    if (rx.effect === 'flame' && S.running && S.t > 0.04) {
      const flick = 1 + 0.18 * Math.sin(S.flameSeed + performance.now() / 90)
      const fx = 0
      const fy = neckTop - 4
      const layers: [number, number, string][] = [
        [7, 22 * flick, 'rgba(251,146,60,0.5)'],
        [4.6, 15 * flick, 'rgba(251,191,36,0.62)'],
        [2.4, 9 * flick, 'rgba(253,224,71,0.8)'],
      ]
      for (const [rxl, ryl, col] of layers) {
        ctx.fillStyle = col
        ctx.beginPath()
        ctx.ellipse(fx, fy - ryl / 2, rxl, ryl, 0, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    ctx.restore()

    // thermometer (right side, canvas coordinates)
    const tx = Math.min(w - 56, cx + bodyHalf + 60)
    const tubeTop = 74
    const tubeBot = h - 92
    ctx.strokeStyle = ink
    ctx.lineWidth = 1.6
    ctx.beginPath()
    ctx.roundRect(tx - 5, tubeTop, 10, tubeBot - tubeTop, 5)
    ctx.stroke()
    const mercuryColor = S.temp > 20.5 ? '#fb7185' : S.temp < 19.5 ? '#38bdf8' : '#94a3b8'
    const frac = clamp((S.temp - 2) / 82, 0.04, 1)
    ctx.fillStyle = mercuryColor
    ctx.beginPath()
    ctx.arc(tx, tubeBot + 10, 8, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillRect(tx - 3, tubeBot - (tubeBot - tubeTop) * frac, 6, (tubeBot - tubeTop) * frac + 4)
    ctx.fillStyle = ink
    ctx.font = '10px var(--font-mono), monospace'
    ctx.textAlign = 'center'
    ctx.fillText(`${fmt(S.temp, 1)}°C`, tx, tubeBot + 34)
    ctx.textAlign = 'left'

    // readout
    ctx.font = 'bold 12px var(--font-mono), monospace'
    ctx.fillStyle = rx.dH < 0 ? '#34d399' : '#38bdf8'
    ctx.fillText(`ΔH = ${rx.dH > 0 ? '+' : ''}${fmt(rx.dH, 1)} kJ/mol`, 16, 22)
    ctx.font = '11px var(--font-mono), monospace'
    ctx.fillStyle = ink
    ctx.globalAlpha = 0.85
    ctx.fillText(rx.dH < 0 ? 'exothermic — the flask warms' : 'endothermic — the flask chills', 16, 40)
    ctx.fillText(S.running ? `reacting · ${Math.round(S.t * 100)} %` : S.t >= 1 ? 'complete' : 'ready', 16, 58)
    ctx.globalAlpha = 1
  }

  useRafLoop(step, draw)

  const exo = rx.dH < 0

  return (
    <div className="space-y-3">
      <canvas
        ref={canvasRef}
        style={{ height: 330 }}
        className="w-full rounded-xl border border-border/70 bg-background/40 text-foreground/70"
        role="img"
        aria-label={`Animated flask running ${rx.name}: ${eqString(rx)}`}
      />
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={run}
          disabled={running}
          className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2 text-sm font-bold text-emerald-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40 ${RING}`}
        >
          <Play className="h-4 w-4" aria-hidden="true" /> {running ? 'Reacting…' : 'Run reaction'}
        </button>
        <p className="text-[11px] leading-snug text-muted-foreground">
          Enthalpy: {rx.dHNote}. Thermometer follows the sign of ΔH — {exo ? 'heat leaves with the products' : 'heat flows in from the surroundings'}.
        </p>
      </div>
      {done && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          className={`rounded-xl border px-3.5 py-2.5 text-xs leading-relaxed ${
            exo ? 'border-emerald-400/30 bg-emerald-400/[0.07] text-emerald-200/90' : 'border-sky-400/30 bg-sky-400/[0.07] text-sky-200/90'
          }`}
        >
          <span className="font-bold">Observation — </span>
          {rx.observation}
        </motion.div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Balance mini-game                                                  */
/* ------------------------------------------------------------------ */

type CheckState =
  | { kind: 'idle' }
  | { kind: 'ok' }
  | { kind: 'notLowest'; g: number }
  | { kind: 'mismatch'; el: string; l: number; r: number }
  | { kind: 'revealed' }

function BalanceGame({ rx, fire }: { rx: Reaction; fire: (id: string) => void }) {
  const species = speciesOf(rx)
  const solution = species.map((s) => s.coeff)
  const [coeffs, setCoeffs] = useState<number[]>(() => species.map(() => 1))
  const [check, setCheck] = useState<CheckState>({ kind: 'idle' })

  const setCoeff = (i: number, raw: string) => {
    const v = Math.round(Number(raw))
    const next = Math.min(Math.max(Number.isFinite(v) && v > 0 ? v : 1, 1), 99)
    setCoeffs((cs) => cs.map((c, j) => (j === i ? next : c)))
    setCheck({ kind: 'idle' })
  }

  const countSide = (side: 'left' | 'right', el: string): number => {
    let total = 0
    const arr = side === 'left' ? rx.left : rx.right
    const off = side === 'left' ? 0 : rx.left.length
    arr.forEach((s, i) => {
      total += coeffs[off + i] * (s.atoms[el] ?? 0)
    })
    return total
  }

  const checkBalance = () => {
    for (const el of elementsOf(rx)) {
      const l = countSide('left', el)
      const r = countSide('right', el)
      if (l !== r) {
        setCheck({ kind: 'mismatch', el, l, r })
        return
      }
    }
    const g = gcd(coeffs)
    if (g > 1) {
      setCheck({ kind: 'notLowest', g })
      return
    }
    setCheck({ kind: 'ok' })
    fire('chem-balance-any')
    if (rx.id === 'haber') fire('chem-balance-haber')
  }

  const reveal = () => {
    setCoeffs(solution)
    setCheck({ kind: 'revealed' })
  }

  return (
    <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-2 text-sm font-bold">
          <Scale className="h-4 w-4 text-amber-300" aria-hidden="true" /> Balance the equation
        </span>
        <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {rx.name}
        </span>
      </div>

      {/* equation with inline coefficient inputs */}
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 rounded-xl border border-border/70 bg-background/40 px-3 py-3 font-mono text-sm">
        {species.map((s, i) => {
          const isRight = i >= rx.left.length
          const first = i === 0
          const firstRight = isRight && i === rx.left.length
          return (
            <span key={s.formula} className="flex items-center gap-1.5">
              {!first && !firstRight && <span className="text-muted-foreground">+</span>}
              {firstRight && (
                <span className="mx-1 font-bold text-emerald-300">{rx.reversible ? '⇌' : '→'}</span>
              )}
              <input
                type="number"
                min={1}
                max={99}
                step={1}
                value={coeffs[i]}
                onChange={(e) => setCoeff(i, e.target.value)}
                aria-label={`Coefficient of ${s.formula}`}
                className="h-11 w-14 rounded-lg border border-border bg-background px-1 text-center text-sm font-bold tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
              />
              <span className="font-semibold">
                {s.formula}
                <span className="text-[10px] text-muted-foreground">{s.state}</span>
              </span>
            </span>
          )
        })}
      </div>

      {/* live atom counts */}
      <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
        {elementsOf(rx).map((el) => {
          const l = countSide('left', el)
          const r = countSide('right', el)
          const ok = l === r
          return (
            <div
              key={el}
              className={`rounded-lg border px-2.5 py-1.5 text-center font-mono text-xs tabular-nums ${
                ok ? 'border-emerald-400/30 bg-emerald-400/[0.06] text-emerald-200' : 'border-rose-400/40 bg-rose-400/[0.07] text-rose-200'
              }`}
            >
              <span className="font-bold">{el}</span>{' '}
              <span aria-label={`${el} atoms left ${l}, right ${r}`}>{l} = {r}</span>
            </div>
          )
        })}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          onClick={checkBalance}
          className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold text-emerald-950 transition-all hover:bg-emerald-400 ${RING}`}
        >
          <Check className="h-4 w-4" aria-hidden="true" /> Check balance
        </button>
        <button
          onClick={reveal}
          className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border/80 bg-background/60 px-4 py-2 text-sm font-semibold text-foreground/90 transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 ${RING}`}
        >
          Show answer
        </button>
        {check.kind === 'mismatch' && (
          <p className="flex items-center gap-1.5 text-[12px] font-semibold text-rose-300">
            <X className="h-4 w-4 shrink-0" aria-hidden="true" />
            {check.el} does not balance — left {check.l}, right {check.r}. Adjust the coefficients.
          </p>
        )}
        {check.kind === 'notLowest' && (
          <p className="flex items-center gap-1.5 text-[12px] font-semibold text-amber-300">
            <X className="h-4 w-4 shrink-0" aria-hidden="true" />
            Atoms agree, but every coefficient shares the factor {check.g} — divide through for the lowest terms.
          </p>
        )}
        {check.kind === 'ok' && (
          <p className="flex items-center gap-1.5 text-[12px] font-bold text-emerald-300">
            <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
            Balanced — every element counts equal on both sides, in lowest terms.
          </p>
        )}
        {check.kind === 'revealed' && (
          <p className="text-[12px] text-muted-foreground">
            Answer revealed ({solution.join(' : ')}). Rebalance it yourself or switch reactions to bank the objective.
          </p>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Energy diagram (SVG)                                               */
/* ------------------------------------------------------------------ */

function EnergyDiagram({
  rx,
  numbers,
  dhArrow,
  offset = 0,
}: {
  rx: Reaction
  numbers: boolean
  dhArrow: boolean
  offset?: number
}) {
  const Er = offset
  const Ep = offset + rx.dH
  const Ets = Math.max(Er, Ep) + rx.ea
  const hi = Math.max(Er, Ep, Ets)
  const lo = Math.min(Er, Ep)
  const span = Math.max(hi - lo, 1)
  const top = lo - span * 0.08
  const bot = hi + span * 0.16

  const PB = 206
  const PT = 18
  const yOf = (e: number) => PB - ((e - top) / (bot - top)) * (PB - PT)
  const yr = yOf(Er)
  const yp = yOf(Ep)
  const yts = yOf(Ets)
  const curve = `M 60 ${yr} H 130 C 172 ${yr} 192 ${yts} 250 ${yts} C 308 ${yts} 328 ${yp} 388 ${yp} H 486`

  const exo = rx.dH < 0
  const dhColor = exo ? '#34d399' : '#38bdf8'
  const arrowHead = (x: number, y: number, up: boolean) =>
    `M ${x - 4.5} ${y + (up ? 8 : -8)} L ${x} ${y} L ${x + 4.5} ${y + (up ? 8 : -8)} Z`

  return (
    <svg viewBox="0 0 520 248" className="w-full" role="img" aria-label={`Energy diagram: reactants, activation barrier, products`}>
      {/* axes */}
      <line x1={46} y1={PT - 4} x2={46} y2={PB} stroke="#94a3b8" strokeOpacity={0.55} strokeWidth={1.4} />
      <line x1={46} y1={PB} x2={500} y2={PB} stroke="#94a3b8" strokeOpacity={0.55} strokeWidth={1.4} />
      <text x={16} y={(PT + PB) / 2} fill="#94a3b8" fontSize={11} transform={`rotate(-90 16 ${(PT + PB) / 2})`} textAnchor="middle">
        Energy
      </text>
      <text x={272} y={232} fill="#94a3b8" fontSize={11} textAnchor="middle">
        reaction progress →
      </text>

      {/* plateaus + curve */}
      <path d={curve} fill="none" stroke="#34d399" strokeWidth={2.6} strokeLinecap="round" />
      <text x={95} y={yr - 9} fill="#94a3b8" fontSize={11} fontWeight="bold" textAnchor="middle">
        Reactants
      </text>
      <text x={437} y={yp < yr - 8 ? yp - 9 : yp + 18} fill="#94a3b8" fontSize={11} fontWeight="bold" textAnchor="middle">
        Products
      </text>

      {/* activation energy arrow */}
      <line x1={250} y1={yr} x2={250} y2={yts} stroke="#fbbf24" strokeWidth={1.6} />
      <path d={arrowHead(250, yts, true)} fill="#fbbf24" />
      <path d={arrowHead(250, yr, false)} fill="#fbbf24" />
      <text x={258} y={(yr + yts) / 2} fill="#fbbf24" fontSize={11} fontWeight="bold">
        Ea{numbers ? ` ≈ ${fmt(rx.ea, 0)} kJ/mol` : ''}
      </text>

      {/* ΔH arrow */}
      {dhArrow && (
        <>
          <line x1={442} y1={yr} x2={442} y2={yp} stroke={dhColor} strokeWidth={1.8} />
          <path d={arrowHead(442, yp, yp < yr)} fill={dhColor} />
          <path d={arrowHead(442, yr, yp > yr)} fill={dhColor} />
          <text x={450} y={(yr + yp) / 2 + 4} fill={dhColor} fontSize={11} fontWeight="bold">
            ΔH = {exo ? '' : '+'}
            {fmt(rx.dH, 0)}
          </text>
        </>
      )}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Energy panel — profile + mystery challenge                         */
/* ------------------------------------------------------------------ */

function pickMystery(prev: Reaction | null): { rx: Reaction; offset: number } {
  const pool = REACTIONS.filter((r) => r.id !== prev?.id)
  const rx = pool[Math.floor(Math.random() * pool.length)]
  return { rx, offset: (Math.random() - 0.5) * 44 }
}

function EnergyPanel({ rx, fire }: { rx: Reaction; fire: (id: string) => void }) {
  const [mystery, setMystery] = useState(() => pickMystery(null))
  const [guess, setGuess] = useState<'exo' | 'endo' | null>(null)
  const [result, setResult] = useState<{ correct: boolean } | null>(null)
  const [streak, setStreak] = useState(0)

  const exo = rx.dH < 0

  const check = () => {
    if (!guess || result) return
    const correct = (mystery.rx.dH < 0) === (guess === 'exo')
    const nextStreak = correct ? streak + 1 : 0
    setStreak(nextStreak)
    setResult({ correct })
    if (correct) {
      fire('chem-heat-correct')
      if (nextStreak >= 3) fire('chem-heat-streak')
    }
  }

  const next = () => {
    setMystery((m) => pickMystery(m.rx))
    setGuess(null)
    setResult(null)
  }

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {/* labelled profile of the selected reaction */}
      <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-2 text-sm font-bold">
            <Thermometer className="h-4 w-4 text-emerald-300" aria-hidden="true" /> Energy profile
          </span>
          <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {rx.name}
          </span>
        </div>
        <EnergyDiagram rx={rx} numbers dhArrow />
        <p className="mt-2 text-[11.5px] leading-relaxed text-muted-foreground">
          Reactants ride the left plateau; the amber arrow is the activation energy (Ea ≈ {fmt(rx.ea, 0)} kJ/mol —{' '}
          {rx.eaNote}). {exo ? 'The products land lower, so ΔH = −' : 'The products land higher, so ΔH = +'}
          {fmt(Math.abs(rx.dH), 0)} kJ/mol and the reaction is {exo ? 'exothermic — the surplus leaves as heat.' : 'endothermic — heat flows in to pay the difference.'}
        </p>
      </div>

      {/* mystery challenge */}
      <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-bold">Mystery diagram</span>
          <span
            className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold tabular-nums ${
              streak >= 3 ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300' : 'border-border bg-background/60 text-muted-foreground'
            }`}
          >
            streak {streak}/3
          </span>
        </div>
        <EnergyDiagram rx={mystery.rx} numbers={false} dhArrow={false} offset={mystery.offset} />
        <p className="mt-2 text-[11.5px] leading-relaxed text-muted-foreground">
          Which side of the hill do the products sit on — above or below the reactants? Classify the mystery reaction.
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2" role="group" aria-label="Exothermic or endothermic">
          {(
            [
              { id: 'exo', label: 'Exothermic (ΔH < 0)' },
              { id: 'endo', label: 'Endothermic (ΔH > 0)' },
            ] as const
          ).map((opt) => (
            <button
              key={opt.id}
              onClick={() => setGuess(opt.id)}
              disabled={!!result}
              aria-pressed={guess === opt.id}
              className={`min-h-[44px] rounded-lg border px-3 text-xs font-bold transition-all disabled:cursor-not-allowed disabled:opacity-60 ${RING} ${
                guess === opt.id
                  ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-200'
                  : 'border-border/80 bg-background/60 text-muted-foreground hover:border-emerald-400/30 hover:text-foreground'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          <button
            onClick={check}
            disabled={!guess || !!result}
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold text-emerald-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40 ${RING}`}
          >
            <Check className="h-4 w-4" aria-hidden="true" /> Check
          </button>
          {result && (
            <button
              onClick={next}
              className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border/80 bg-background/60 px-4 py-2 text-sm font-semibold text-foreground/90 transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 ${RING}`}
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" /> Next mystery
            </button>
          )}
        </div>

        {result && (
          <div
            role="status"
            className={`mt-3 rounded-xl border px-3.5 py-2.5 text-xs leading-relaxed ${
              result.correct
                ? 'border-emerald-400/40 bg-emerald-400/[0.08] text-emerald-200'
                : 'border-rose-400/40 bg-rose-400/[0.08] text-rose-200'
            }`}
          >
            <span className="font-bold">
              {result.correct ? 'Correct — ' : 'Not this time — '}
            </span>
            {mystery.rx.name}: ΔH = {mystery.rx.dH > 0 ? '+' : ''}
            {fmt(mystery.rx.dH, 1)} kJ/mol, so the products sit{' '}
            {mystery.rx.dH < 0 ? 'below the reactants (exothermic)' : 'above the reactants (endothermic)'}.{' '}
            {result.correct
              ? streak >= 3
                ? 'Three in a row — mission banked.'
                : `Keep going — ${3 - streak} more for the streak.`
              : 'Streak reset. Compare the two plateau heights, ignore the arrows.'}
          </div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  ICE table calculator                                               */
/* ------------------------------------------------------------------ */

interface IceOk {
  x: number
  eq: number[]
  q: number
  iters: number
}

type IceResult = IceOk | { error: string }

function qOf(rx: Reaction, initials: number[], x: number): number {
  let num = 1
  let den = 1
  rx.left.forEach((s, i) => {
    den *= Math.pow(Math.max(initials[i] - s.coeff * x, 1e-300), s.coeff)
  })
  rx.right.forEach((s, j) => {
    num *= Math.pow(Math.max(initials[rx.left.length + j] + s.coeff * x, 1e-300), s.coeff)
  })
  return num / den
}

function solveIce(rx: Reaction, initials: number[], kc: number): IceResult {
  if (initials.some((v) => !Number.isFinite(v) || v < 0)) {
    return { error: 'Initial concentrations must be finite numbers ≥ 0.' }
  }
  if (!(kc > 0) || !Number.isFinite(kc)) {
    return { error: 'Kc must be a positive number.' }
  }
  let hi = Infinity
  rx.left.forEach((s, i) => {
    hi = Math.min(hi, initials[i] / s.coeff)
  })
  if (!Number.isFinite(hi)) hi = 0
  let maxRev = 0
  rx.right.forEach((s, j) => {
    maxRev = Math.max(maxRev, initials[rx.left.length + j] / s.coeff)
  })
  const lo = -maxRev
  if (hi - lo < 1e-12) {
    return { error: 'Every concentration is zero — give the system something to react.' }
  }
  const eps = (hi - lo) * 1e-12 + 1e-15
  let a = lo + eps
  let b = hi - eps
  // Q(x) is strictly increasing on (lo, hi)
  let iters = 0
  let x = (a + b) / 2
  if (qOf(rx, initials, a) >= kc) {
    x = a
  } else if (qOf(rx, initials, b) <= kc) {
    x = b
  } else {
    for (; iters < 200; iters++) {
      x = (a + b) / 2
      if (qOf(rx, initials, x) < kc) a = x
      else b = x
      if (b - a < 1e-14) {
        iters++
        break
      }
    }
    x = (a + b) / 2
  }
  const eq = [
    ...rx.left.map((s, i) => initials[i] - s.coeff * x),
    ...rx.right.map((s, j) => initials[rx.left.length + j] + s.coeff * x),
  ]
  return { x, eq, q: qOf(rx, initials, x), iters }
}

const ICE_DEFAULTS: Record<string, number[]> = {
  haber: [1, 3, 0],
  esterification: [1, 1, 0, 0],
  n2o4: [0.5, 0],
}

function IceSolver({ rx, fire }: { rx: Reaction; fire: (id: string) => void }) {
  const species = speciesOf(rx)
  const [initials, setInitials] = useState<number[]>(() => ICE_DEFAULTS[rx.id] ?? species.map(() => 0))
  const [kcText, setKcText] = useState(() => String(rx.kc?.value ?? 1))
  const [result, setResult] = useState<IceOk | { error: string } | null>(null)
  const lastSolved = useRef<number[] | null>(null)

  const solve = () => {
    const kc = Number(kcText)
    const r = solveIce(rx, initials, kc)
    setResult(r)
    if (!('error' in r)) {
      fire('chem-ice-solve')
      if (lastSolved.current && lastSolved.current.some((v, i) => Math.abs(v - initials[i]) > 1e-12)) {
        fire('chem-ice-reshift')
      }
      lastSolved.current = [...initials]
    }
  }

  const setInit = (i: number, raw: string) => {
    const v = Number(raw)
    setInitials((xs) => xs.map((x, j) => (j === i ? (Number.isFinite(v) && v >= 0 ? v : 0) : x)))
    setResult(null)
  }

  const kc = Number(kcText)
  const relErr = result && !('error' in result) ? Math.abs(result.q - kc) / Math.max(kc, 1e-300) : 0

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-2 text-sm font-bold">
            <Atom className="h-4 w-4 text-emerald-300" aria-hidden="true" /> ICE table — {rx.name}
          </span>
          <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] font-semibold text-muted-foreground">
            {eqString(rx)}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {species.map((s, i) => (
            <label key={s.formula} className="block">
              <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Initial [{s.formula}] — mol/L
              </span>
              <input
                type="number"
                min={0}
                step={0.05}
                value={initials[i]}
                onChange={(e) => setInit(i, e.target.value)}
                aria-label={`Initial concentration of ${s.name}`}
                className="h-11 w-full rounded-lg border border-border bg-background px-2.5 font-mono text-sm tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
              />
            </label>
          ))}
          <label className="block">
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Kc (literature {rx.kc ? fmt(rx.kc.value) : ''})
            </span>
            <input
              value={kcText}
              onChange={(e) => {
                setKcText(e.target.value)
                setResult(null)
              }}
              inputMode="decimal"
              aria-label="Equilibrium constant Kc"
              className="h-11 w-full rounded-lg border border-border bg-background px-2.5 font-mono text-sm tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            />
          </label>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            onClick={solve}
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2 text-sm font-bold text-emerald-950 transition-all hover:bg-emerald-400 ${RING}`}
          >
            <Play className="h-4 w-4" aria-hidden="true" /> Solve for x
          </button>
          <p className="text-[11px] leading-snug text-muted-foreground">
            Kc {rx.kc?.note}. With unit stoichiometry this is the classic quadratic; the solver bisects Q(x) − Kc, so any
            stoichiometry works, forward or reverse.
          </p>
        </div>

        {result && 'error' in result && (
          <p role="alert" className="mt-3 rounded-xl border border-rose-400/40 bg-rose-400/[0.08] px-3.5 py-2.5 text-xs font-semibold text-rose-200">
            {result.error}
          </p>
        )}
      </div>

      {result && !('error' in result) && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
          <div className="overflow-x-auto rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-bold">Equilibrium table</span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-emerald-300">
                x = {result.x >= 0 ? '+' : ''}
                {fmt(result.x, 4)} mol/L → {result.x > 1e-9 ? 'forward' : result.x < -1e-9 ? 'reverse' : 'already at equilibrium'}
              </span>
            </div>
            <table className="w-full min-w-[420px] text-sm">
              <thead>
                <tr className="border-b border-border/70 text-left text-[10px] uppercase tracking-wider text-muted-foreground">
                  <th className="pb-2 pr-3 font-semibold">Row</th>
                  {species.map((s) => (
                    <th key={s.formula} className="pb-2 pr-3 font-mono font-semibold">
                      {s.coeff > 1 ? `${s.coeff} ` : ''}
                      {s.formula}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-mono text-xs tabular-nums">
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-sans font-semibold text-muted-foreground">I (initial)</td>
                  {initials.map((v, i) => (
                    <td key={i} className="py-2 pr-3">
                      {fmt(v, 3)}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border/40 bg-emerald-400/[0.05]">
                  <td className="py-2 pr-3 font-sans font-semibold text-emerald-300">C (change)</td>
                  {species.map((s, i) => {
                    const c = s.coeff
                    const sign = i < rx.left.length ? '−' : '+'
                    return (
                      <td key={i} className="py-2 pr-3 font-bold text-emerald-300">
                        {sign}
                        {c > 1 ? c : ''}x
                      </td>
                    )
                  })}
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-sans font-semibold text-muted-foreground">E (equilibrium)</td>
                  {result.eq.map((v, i) => (
                    <td key={i} className="py-2 pr-3 font-bold">
                      {fmt(Math.max(v, 0), 4)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <p className="mt-3 font-mono text-[11px] text-muted-foreground">
              Q(x*) = {fmt(result.q)} vs Kc = {fmt(kc)} · relative error {(relErr * 100).toPrecision(2)}% · bisection{' '}
              {result.iters} iterations {relErr < 1e-3 ? '— converged' : ''}
            </p>
          </div>
          <p className="rounded-xl border border-sky-400/25 bg-sky-400/[0.06] px-3.5 py-2.5 text-xs leading-relaxed text-sky-200/90">
            <span className="font-bold">Le Chatelier check — </span>
            bump any initial concentration and solve again: the system always shifts to oppose the change (more N₂/H₂
            pushes x forward; seeding product drives it backward).
          </p>
        </motion.div>
      )}
    </div>
  )
}

function IcePanel({ fire }: { fire: (id: string) => void }) {
  const eqReactions = REACTIONS.filter((r) => r.kc)
  const [rxId, setRxId] = useState(eqReactions[0].id)
  const rx = eqReactions.find((r) => r.id === rxId) ?? eqReactions[0]

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Equilibrium</span>
        {eqReactions.map((r) => (
          <button
            key={r.id}
            onClick={() => setRxId(r.id)}
            aria-pressed={rxId === r.id}
            className={`min-h-[44px] rounded-lg border px-3 text-xs font-semibold transition-all ${RING} ${
              rxId === r.id
                ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-200'
                : 'border-border/80 bg-background/60 text-muted-foreground hover:border-emerald-400/30 hover:text-foreground'
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>
      <IceSolver key={rx.id} rx={rx} fire={fire} />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Lab shell                                                          */
/* ------------------------------------------------------------------ */

type Tab = 'bench' | 'energy' | 'ice'

const TABS: { id: Tab; label: string }[] = [
  { id: 'bench', label: 'Reaction bench' },
  { id: 'energy', label: 'Energy diagrams' },
  { id: 'ice', label: 'Equilibrium · ICE' },
]

export function ChemLab() {
  const [tab, setTab] = useState<Tab>('bench')
  const [rxId, setRxId] = useState(REACTIONS[0].id)
  const rx = REACTIONS.find((r) => r.id === rxId) ?? REACTIONS[0]
  const { fire } = useMissions('chem')
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current)
    }
  }, [])

  const onMissionEvent = (missionId: string, objectiveId: string) => {
    const m = getMissions('chem').find((x) => x.id === missionId)
    const o = m?.objectives.find((x) => x.id === objectiveId)
    setToast(o?.text ?? 'Objective complete')
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="relative space-y-5"
    >
      <LabMissions missions={getMissions('chem')} activeLabId="chem" onEvent={onMissionEvent} />

      <div className="flex items-start gap-3 md:pr-[336px]">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10">
          <FlaskConical className="h-5 w-5 text-emerald-300" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-bold leading-tight">Chemistry Bench — reactions · energy · equilibrium</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            Eight classic reactions with real stoichiometry: run them in an animated flask, balance the equations against
            live atom counts, read the energy diagrams, and drive equilibria to their Kc with a proper ICE solve. Watch
            your missions — top right.
          </p>
        </div>
      </div>

      <div className="inline-flex rounded-xl border border-border/80 bg-card p-1" role="tablist" aria-label="Chemistry lab mode">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`min-h-[44px] rounded-lg px-4 text-sm font-semibold transition-all ${RING} ${
              tab === t.id ? 'bg-emerald-400/15 text-emerald-200' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* reaction picker (bench + energy tabs share the selection) */}
      {tab !== 'ice' && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Reaction</span>
          {REACTIONS.map((r) => (
            <button
              key={r.id}
              onClick={() => setRxId(r.id)}
              aria-pressed={rxId === r.id}
              title={eqString(r)}
              className={`min-h-[44px] rounded-lg border px-3 text-xs font-semibold transition-all ${RING} ${
                rxId === r.id
                  ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-200'
                  : 'border-border/80 bg-background/60 text-muted-foreground hover:border-emerald-400/30 hover:text-foreground'
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
        >
          {tab === 'bench' ? (
            <div className="space-y-5">
              <div className="rounded-2xl border border-border/80 bg-card/70 p-4 sm:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-sm font-bold text-foreground/90">{eqString(rx)}</span>
                  <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {rx.category}
                  </span>
                </div>
                <ReactionBench key={rx.id} rx={rx} fire={fire} />
              </div>
              <BalanceGame key={`bg-${rx.id}`} rx={rx} fire={fire} />
            </div>
          ) : tab === 'energy' ? (
            <EnergyPanel rx={rx} fire={fire} />
          ) : (
            <IcePanel fire={fire} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* objective toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="pointer-events-none absolute bottom-2 right-2 z-30 flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-card/95 px-3.5 py-2.5 text-[12px] font-semibold text-emerald-100 shadow-lg"
            role="status"
          >
            <Target className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
            <span className="max-w-[260px]">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ChemLab
