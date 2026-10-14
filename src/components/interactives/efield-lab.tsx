'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Atom, Move, Plus, Minus, Trash2, Route, Hand, Eye, EyeOff, RotateCcw,
  Lightbulb, Gauge, CircleDashed, Sparkles, Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/* physics — 2D electrostatics sandbox                                 */
/* ------------------------------------------------------------------ */
/*
 * Screen units: 1 px = 1 cm. Charges stored in nC.
 *   E = sum_i k q_i (r - r_i) / |r - r_i|^3      [N/C]
 *   V = sum_i k q_i / |r - r_i|                  [V]
 * The drawn Gauss circle is the silhouette of a sphere seen edge-on; the
 * flux tally integrates E·da over that full sphere, where Gauss's law
 *   oint E · da = Q_enc / eps0
 * holds exactly for the 3-D Coulomb field (sampled on a Fibonacci lattice).
 */

const K = 8.99e9 // N m^2 / C^2
const EPS0 = 8.8541878128e-12 // F/m
const PX = 0.01 // 1 px = 1 cm
const W = 900
const H = 560
const Q_TEST = 2e-9 // work-mode test charge, C

interface Charge {
  id: string
  x: number
  y: number
  q: number // nC
  hidden?: boolean
}

interface Pt {
  x: number
  y: number
}

interface Tracer {
  id: string
  pts: Pt[]
  done: boolean
}

let idc = 0
const nid = () => `c${++idc}`

function fieldAt(chs: Charge[], x: number, y: number): { ex: number; ey: number } {
  let ex = 0
  let ey = 0
  for (const c of chs) {
    const dx = (x - c.x) * PX
    const dy = (y - c.y) * PX
    const r2 = dx * dx + dy * dy
    const r = Math.sqrt(r2)
    if (r < 0.05) continue // inside a charge — undefined direction
    const f = (K * c.q * 1e-9) / (r2 * r)
    ex += f * dx
    ey += f * dy
  }
  return { ex, ey }
}

function potAt(chs: Charge[], x: number, y: number): number {
  let v = 0
  for (const c of chs) {
    const dx = (x - c.x) * PX
    const dy = (y - c.y) * PX
    const r = Math.max(Math.hypot(dx, dy), 0.05)
    v += (K * c.q * 1e-9) / r
  }
  return v
}

/* ---------- formatting ---------- */

function fmtSI(v: number, unit: string): string {
  const a = Math.abs(v)
  if (!isFinite(v)) return '—'
  if (a < 1e-12) return `0 ${unit}`
  const tiers: [number, string][] = [
    [1e9, 'G'], [1e6, 'M'], [1e3, 'k'], [1, ''], [1e-3, 'm'], [1e-6, 'µ'], [1e-9, 'n'],
  ]
  for (const [s, p] of tiers) {
    if (a >= s) {
      const n = v / s
      const digits = Math.abs(n) >= 100 ? 0 : Math.abs(n) >= 10 ? 1 : 2
      return `${n.toFixed(digits)} ${p}${unit}`
    }
  }
  return `${v.toExponential(1)} ${unit}`
}

/* ---------- color helpers (emerald -> amber ramp, no blue) ---------- */

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

function magColor(t: number): string {
  const e = [16, 185, 129]
  const am = [251, 191, 36]
  const c = [lerp(e[0], am[0], t), lerp(e[1], am[1], t), lerp(e[2], am[2], t)]
  return `rgb(${c.map((v) => Math.round(v)).join(',')})`
}

/* ---------- marching squares for equipotentials ---------- */

function contourPath(
  vals: Float64Array,
  cols: number,
  rows: number,
  cell: number,
  level: number,
  ox: number,
  oy: number
): string {
  const segs: string[] = []
  const frac = (a: number, b: number) => {
    const d = b - a
    if (Math.abs(d) < 1e-12) return 0.5
    return Math.min(1, Math.max(0, (level - a) / d))
  }
  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      const a = vals[j * cols + i]
      const b = vals[j * cols + i + 1]
      const c = vals[(j + 1) * cols + i + 1]
      const d = vals[(j + 1) * cols + i]
      let code = 0
      if (a > level) code |= 1
      if (b > level) code |= 2
      if (c > level) code |= 4
      if (d > level) code |= 8
      if (code === 0 || code === 15) continue
      const x0 = ox + i * cell
      const y0 = oy + j * cell
      const top = { x: x0 + cell * frac(a, b), y: y0 }
      const right = { x: x0 + cell, y: y0 + cell * frac(b, c) }
      const bottom = { x: x0 + cell * frac(d, c), y: y0 + cell }
      const left = { x: x0, y: y0 + cell * frac(a, d) }
      const emit = (p1: Pt, p2: Pt) => segs.push(`M${p1.x.toFixed(1)} ${p1.y.toFixed(1)}L${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`)
      if (code === 1) emit(left, top)
      else if (code === 2) emit(top, right)
      else if (code === 3) emit(left, right)
      else if (code === 4) emit(right, bottom)
      else if (code === 5) { emit(left, top); emit(right, bottom) }
      else if (code === 6) emit(top, bottom)
      else if (code === 7) emit(left, bottom)
      else if (code === 8) emit(bottom, left)
      else if (code === 9) emit(top, bottom)
      else if (code === 10) { emit(top, right); emit(bottom, left) }
      else if (code === 11) emit(bottom, right)
      else if (code === 12) emit(left, right)
      else if (code === 13) emit(top, right)
      else if (code === 14) emit(left, top)
    }
  }
  return segs.join('')
}

/* ---------- presets ---------- */

interface Preset {
  key: string
  label: string
  charges: Charge[]
  gauss?: { on: boolean; cx: number; cy: number; r: number }
  note: string
  chip: string
}

function mk(x: number, y: number, q: number, hidden = false): Charge {
  return { id: nid(), x, y, q, hidden }
}

function buildPresets(): Preset[] {
  return [
    {
      key: 'dipole',
      label: 'Dipole',
      charges: [mk(370, 280, 10), mk(530, 280, -10)],
      note: 'Equal and opposite charges. Field lines leave the emerald + and dive into the rose −. Switch to Trace and click anywhere to ride the field.',
      chip: 'V=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r}',
    },
    {
      key: 'plates',
      label: 'Parallel plates',
      charges: [
        ...Array.from({ length: 7 }, (_, i) => mk(340, 150 + i * 43.4, 8)),
        ...Array.from({ length: 7 }, (_, i) => mk(560, 150 + i * 43.4, -8)),
      ],
      note: 'A capacitor cross-section: nearly uniform field between the plates, fringing at the edges. Equipotentials (teal) are evenly spaced inside.',
      chip: 'E\\approx\\frac{\\sigma}{\\varepsilon_0}',
    },
    {
      key: 'quad',
      label: 'Quadrupole',
      charges: [mk(375, 190, 10), mk(525, 190, -10), mk(375, 370, -10), mk(525, 370, 10)],
      note: 'Two dipoles nose-to-tail. The field nearly vanishes at the center — and the equipotentials form hyperbolas.',
      chip: 'V=0\\ \\text{on the symmetry axes}',
    },
    {
      key: 'hidden',
      label: 'Hidden charge (Gauss puzzle)',
      charges: [mk(285, 165, 10), mk(285, 395, -10), mk(640, 290, 14, true)],
      gauss: { on: true, cx: 460, cy: 280, r: 95 },
      note: 'One charge is invisible, but its field is not. Drag the Gauss circle around — the flux tally tells you how much charge is enclosed (and its sign) without ever seeing it.',
      chip: '\\oint \\mathbf{E}\\cdot d\\mathbf{a}=\\frac{Q_{\\text{enc}}}{\\varepsilon_0}',
    },
  ]
}

/* ------------------------------------------------------------------ */
/* component                                                           */
/* ------------------------------------------------------------------ */

type Mode = 'move' | 'add+' | 'add-' | 'delete' | 'trace' | 'work'

interface Gauss {
  on: boolean
  cx: number
  cy: number
  r: number
}

interface WorkState {
  w: number // accumulated work BY YOU (J): -q int E.dl
  v0: number
  path: Pt[]
  dragging: boolean
  landed: boolean
}

export default function EFieldLab() {
  const reduced = useReducedMotion() ?? false
  const [charges, setCharges] = useState<Charge[]>(() => buildPresets()[0].charges)
  const [mode, setMode] = useState<Mode>('move')
  const [newQ, setNewQ] = useState(10)
  const [showVectors, setShowVectors] = useState(true)
  const [showEquip, setShowEquip] = useState(true)
  const [showHeat, setShowHeat] = useState(false)
  const [gauss, setGauss] = useState<Gauss>({ on: false, cx: 460, cy: 280, r: 95 })
  const [reveal, setReveal] = useState(false)
  const [tracers, setTracers] = useState<Tracer[]>([])
  const [probe, setProbe] = useState<Pt>({ x: 190, y: 452 })
  const [work, setWork] = useState<WorkState>({ w: 0, v0: 0, path: [], dragging: false, landed: false })
  const [cursor, setCursor] = useState<Pt | null>(null)
  const [presetKey, setPresetKey] = useState('dipole')
  const [presetTick, setPresetTick] = useState(0)

  const svgRef = useRef<SVGSVGElement>(null)
  const drag = useRef<{ kind: 'charge' | 'probe' | 'gauss-c' | 'gauss-r'; id?: string; dx: number; dy: number } | null>(null)

  const presets = useMemo(() => buildPresets(), [])
  const activePreset = presets.find((p) => p.key === presetKey) ?? null

  /* ---------- live field-charge animation (tracer loop) ---------- */

  const anyRunning = tracers.some((t) => !t.done)
  useEffect(() => {
    if (!anyRunning) return
    let raf = 0
    const step = () => {
      setTracers((ts) => {
        const chs = charges
        const next = ts.map((t) => {
          if (t.done) return t
          const head = t.pts[t.pts.length - 1]
          const { ex, ey } = fieldAt(chs, head.x, head.y)
          const mag = Math.hypot(ex, ey)
          if (
            mag < 0.35 ||
            head.x < 8 || head.x > W - 8 ||
            head.y < 8 || head.y > H - 8 ||
            t.pts.length > 850
          ) {
            return { ...t, done: true }
          }
          // speed grows with |E| (saturating so trails stay watchable)
          const v = Math.min(4.2, Math.max(0.22, mag / 1100))
          const ux = ex / mag
          const uy = ey / mag
          return { ...t, pts: [...t.pts, { x: head.x + ux * v, y: head.y + uy * v }] }
        })
        return next
      })
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [anyRunning, charges])

  /* ---------- derived: field vector grid ---------- */

  const arrows = useMemo(() => {
    if (!showVectors) return []
    const out: { x: number; y: number; x2: number; y2: number; t: number }[] = []
    const step = 52
    for (let gy = 44; gy <= H - 44; gy += step) {
      for (let gx = 36; gx <= W - 36; gx += step) {
        const { ex, ey } = fieldAt(charges, gx, gy)
        const mag = Math.hypot(ex, ey)
        if (mag < 0.4) continue
        const t = Math.min(1, Math.max(0.12, Math.log10(1 + mag) / Math.log10(1 + 6e4)))
        const len = 9 + 17 * t
        const ux = ex / mag
        const uy = ey / mag
        out.push({ x: gx, y: gy, x2: gx + ux * len, y2: gy + uy * len, t })
      }
    }
    return out
  }, [charges, showVectors])

  /* ---------- derived: potential grid (heat map + equipotentials) ---------- */

  const CELL = 28
  const COLS = Math.floor(W / CELL) + 1
  const ROWS = Math.floor(H / CELL) + 1
  const vGrid = useMemo(() => {
    const g = new Float64Array(COLS * ROWS)
    for (let j = 0; j < ROWS; j++) {
      for (let i = 0; i < COLS; i++) {
        g[j * COLS + i] = potAt(charges, i * CELL, j * CELL)
      }
    }
    return g
  }, [charges, COLS, ROWS])

  const equipPaths = useMemo(() => {
    if (!showEquip) return []
    const levels = [3, 10, 30, 100, 300, 1000]
    const out: { d: string; level: number }[] = []
    for (const lv of levels) {
      out.push({ d: contourPath(vGrid, COLS, ROWS, CELL, lv, 0, 0), level: lv })
      out.push({ d: contourPath(vGrid, COLS, ROWS, CELL, -lv, 0, 0), level: -lv })
    }
    return out.filter((p) => p.d.length > 0)
  }, [vGrid, showEquip, COLS, ROWS])

  const heatCells = useMemo(() => {
    if (!showHeat) return []
    const out: { x: number; y: number; fill: string; op: number }[] = []
    for (let j = 0; j < ROWS; j++) {
      for (let i = 0; i < COLS; i++) {
        const v = vGrid[j * COLS + i]
        const a = Math.abs(v)
        if (a < 1.5) continue
        const op = Math.min(0.42, Math.log10(1 + a) / Math.log10(1 + 2500) * 0.42)
        if (op < 0.02) continue
        out.push({ x: i * CELL, y: j * CELL, fill: v > 0 ? '#10b981' : '#f43f5e', op })
      }
    }
    return out
  }, [vGrid, showHeat, COLS, ROWS])

  /* ---------- derived: Gauss flux integral over the sphere ---------- */

  const gaussRead = useMemo(() => {
    if (!gauss.on) return null
    // Fibonacci-sphere sampling of the closed surface
    const R = gauss.r * PX
    const N = 800
    const dA = (4 * Math.PI * R * R) / N
    const ga = Math.PI * (3 - Math.sqrt(5))
    let flux = 0
    for (let i = 0; i < N; i++) {
      const z = 1 - (2 * (i + 0.5)) / N
      const rho = Math.sqrt(Math.max(0, 1 - z * z))
      const th = ga * (i + 0.5)
      const nx = rho * Math.cos(th)
      const ny = rho * Math.sin(th)
      const nz = z
      const px = gauss.cx + nx * gauss.r
      const py = gauss.cy + ny * gauss.r
      const pz = nz * R
      let ex = 0
      let ey = 0
      let ez = 0
      for (const c of charges) {
        const dx = (px - c.x) * PX
        const dy = (py - c.y) * PX
        const r2 = dx * dx + dy * dy + pz * pz
        const r = Math.sqrt(r2)
        if (r < 0.02) continue
        const f = (K * c.q * 1e-9) / (r2 * r)
        ex += f * dx
        ey += f * dy
        ez += f * pz
      }
      flux += (ex * nx + ey * ny + ez * nz) * dA
    }
    const qFromFlux = flux * EPS0 // C — Gauss's law
    let counted = 0
    let anyHidden = false
    const rm = gauss.r * PX
    for (const c of charges) {
      if (Math.hypot(c.x - gauss.cx, c.y - gauss.cy) < rm + 0.02) {
        counted += c.q
        if (c.hidden) anyHidden = true
      }
    }
    return { flux, qFromFlux: qFromFlux / 1e-9, counted, anyHidden }
  }, [gauss, charges])

  /* ---------- probe / work readout ---------- */

  const probeRead = useMemo(() => {
    const { ex, ey } = fieldAt(charges, probe.x, probe.y)
    return { e: Math.hypot(ex, ey), v: potAt(charges, probe.x, probe.y), ex, ey }
  }, [charges, probe])

  const cursorRead = useMemo(() => {
    if (!cursor) return null
    const { ex, ey } = fieldAt(charges, cursor.x, cursor.y)
    return { e: Math.hypot(ex, ey), v: potAt(charges, cursor.x, cursor.y) }
  }, [charges, cursor])

  /* ---------- interactions ---------- */

  const toSvg = useCallback((clientX: number, clientY: number): Pt => {
    const el = svgRef.current
    if (!el) return { x: 0, y: 0 }
    const r = el.getBoundingClientRect()
    const s = W / Math.max(r.width, 1)
    return { x: (clientX - r.left) * s, y: (clientY - r.top) * s }
  }, [])

  const chargeR = (q: number) => 11 + Math.min(9, Math.abs(q) * 0.32)

  const addCharge = (x: number, y: number, sign: 1 | -1) => {
    setPresetKey('')
    setCharges((cs) => [...cs, { id: nid(), x: Math.max(20, Math.min(W - 20, x)), y: Math.max(20, Math.min(H - 20, y)), q: sign * newQ }])
  }

  const onBackgroundClick = (e: React.MouseEvent) => {
    if (mode !== 'add+' && mode !== 'add-' && mode !== 'trace') return
    const p = toSvg(e.clientX, e.clientY)
    if (mode === 'add+') addCharge(p.x, p.y, 1)
    else if (mode === 'add-') addCharge(p.x, p.y, -1)
    else if (mode === 'trace' && p.x > 8 && p.x < W - 8 && p.y > 8 && p.y < H - 8) {
      setTracers((ts) => (ts.length >= 14 ? ts.slice(ts.length - 13) : ts).concat({ id: nid(), pts: [p], done: false }))
    }
  }

  const onChargePointerDown = (e: React.PointerEvent, c: Charge) => {
    e.stopPropagation()
    if (mode === 'delete') {
      setCharges((cs) => cs.filter((x) => x.id !== c.id))
      return
    }
    if (mode !== 'move') return
    const p = toSvg(e.clientX, e.clientY)
    drag.current = { kind: 'charge', id: c.id, dx: p.x - c.x, dy: p.y - c.y }
  }

  const onProbePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation()
    const p = toSvg(e.clientX, e.clientY)
    drag.current = { kind: 'probe', dx: p.x - probe.x, dy: p.y - probe.y }
    setWork({ w: 0, v0: potAt(charges, probe.x, probe.y), path: [probe], dragging: true, landed: false })
  }

  const onGaussCenterDown = (e: React.PointerEvent) => {
    e.stopPropagation()
    const p = toSvg(e.clientX, e.clientY)
    drag.current = { kind: 'gauss-c', dx: p.x - gauss.cx, dy: p.y - gauss.cy }
  }

  const onGaussEdgeDown = (e: React.PointerEvent) => {
    e.stopPropagation()
    drag.current = { kind: 'gauss-r', dx: 0, dy: 0 }
  }

  const onSvgPointerMove = (e: React.PointerEvent) => {
    const p = toSvg(e.clientX, e.clientY)
    setCursor(p)
    const d = drag.current
    if (!d) return
    if (d.kind === 'charge' && d.id) {
      const id = d.id
      setPresetKey('')
      setCharges((cs) =>
        cs.map((c) =>
          c.id === id
            ? { ...c, x: Math.max(18, Math.min(W - 18, p.x - d.dx)), y: Math.max(18, Math.min(H - 18, p.y - d.dy)) }
            : c
        )
      )
    } else if (d.kind === 'gauss-c') {
      setGauss((g) => ({ ...g, cx: Math.max(60, Math.min(W - 60, p.x - d.dx)), cy: Math.max(60, Math.min(H - 60, p.y - d.dy)) }))
    } else if (d.kind === 'gauss-r') {
      setGauss((g) => ({ ...g, r: Math.max(38, Math.min(230, Math.hypot(p.x - g.cx, p.y - g.cy))) }))
    } else if (d.kind === 'probe') {
      const np = { x: Math.max(16, Math.min(W - 16, p.x - d.dx)), y: Math.max(16, Math.min(H - 16, p.y - d.dy)) }
      setProbe(np)
      setWork((wk) => {
        const prev = wk.path[wk.path.length - 1] ?? np
        const mid = { x: (prev.x + np.x) / 2, y: (prev.y + np.y) / 2 }
        const { ex, ey } = fieldAt(charges, mid.x, mid.y)
        const dl = { x: (np.x - prev.x) * PX, y: (np.y - prev.y) * PX }
        const dw = -Q_TEST * (ex * dl.x + ey * dl.y) // work YOU do against the field
        return { ...wk, w: wk.w + dw, path: [...wk.path, np] }
      })
    }
  }

  const endDrag = () => {
    if (drag.current?.kind === 'probe') {
      setWork((wk) => ({ ...wk, dragging: false, landed: true }))
    }
    drag.current = null
  }

  const applyPreset = (key: string) => {
    const p = presets.find((x) => x.key === key)
    if (!p) return
    setCharges(p.charges.map((c) => ({ ...c, id: nid() })))
    setTracers([])
    setGauss(p.gauss ?? { on: false, cx: 460, cy: 280, r: 95 })
    setReveal(false)
    setMode('move')
    setPresetKey(p.key)
    setPresetTick((n) => n + 1)
    setWork({ w: 0, v0: 0, path: [], dragging: false, landed: false })
    setProbe({ x: 190, y: 452 })
  }

  /* ---------- render helpers ---------- */

  const MODES: { id: Mode; label: string; icon: typeof Move }[] = [
    { id: 'move', label: 'Move', icon: Move },
    { id: 'add+', label: 'Add +', icon: Plus },
    { id: 'add-', label: 'Add −', icon: Minus },
    { id: 'delete', label: 'Delete', icon: Trash2 },
    { id: 'trace', label: 'Trace', icon: Route },
    { id: 'work', label: 'Work qΔV', icon: Hand },
  ]

  const modeHint: Record<Mode, string> = {
    move: 'drag charges around — every arrow, contour and tracer follows live',
    'add+': 'click empty space to place a positive charge',
    'add-': 'click empty space to place a negative charge',
    delete: 'click a charge to remove it',
    trace: 'click empty space to drop a positive test charge — it rides the field at speed ∝ |E|',
    work: 'drag the teal test charge — its work tally accumulates live',
  }

  const gaussEdgeAngle = -Math.PI / 4
  const ge = { x: gauss.cx + gauss.r * Math.cos(gaussEdgeAngle), y: gauss.cy + gauss.r * Math.sin(gaussEdgeAngle) }

  const wyou = work.w
  const qdV = Q_TEST * (probeRead.v - (work.landed || work.dragging ? work.v0 : probeRead.v))
  const workMatch = Math.abs(wyou - qdV) < Math.max(1e-9, Math.abs(qdV) * 0.06) && (work.landed || work.dragging)

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
            <Atom className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-foreground">Electric Field Explorer</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Physics Ch 11: place charges, watch <TeX tex="\mathbf{E}" /> and <TeX tex="V" /> respond live, trace field
              lines, tally work along a drag, and make Gauss&apos;s law visible.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs tabular-nums text-muted-foreground">
          <span className="rounded-md border border-border bg-muted/30 px-2.5 py-1.5">charges: {charges.length}</span>
          <span className="rounded-md border border-border bg-muted/30 px-2.5 py-1.5">
            net q: {charges.reduce((s, c) => s + c.q, 0)} nC
          </span>
          <span className="rounded-md border border-border bg-muted/30 px-2.5 py-1.5">1 px = 1 cm</span>
        </div>
      </div>

      {/* presets */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Presets</span>
        {presets.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => applyPreset(p.key)}
            aria-pressed={presetKey === p.key}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
              presetKey === p.key
                ? 'border-emerald-500/60 bg-emerald-500/15 text-foreground ring-1 ring-emerald-500/40'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      {activePreset && (
        <motion.div
          key={presetTick}
          initial={reduced ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-3 py-2"
        >
          <p className="min-w-0 flex-1 text-[11px] leading-relaxed text-muted-foreground">{activePreset.note}</p>
          <span className="rounded-md bg-muted/50 px-2 py-1 font-mono text-xs text-teal-300">
            <TeX tex={activePreset.chip} />
          </span>
        </motion.div>
      )}

      <div className="mt-4 grid gap-5 lg:grid-cols-1 xl:grid-cols-12">
        {/* canvas */}
        <div className="overflow-hidden rounded-xl border border-border bg-card xl:col-span-7 2xl:col-span-8">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sandbox</span>
            <span className="font-mono text-[11px] text-muted-foreground">{modeHint[mode]}</span>
          </div>
          <div
            className="select-none p-2"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(82,82,91,0.22) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          >
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full touch-none"
              role="img"
              aria-label="electric field sandbox: charges, field vectors, equipotentials and a Gauss circle"
              onPointerMove={onSvgPointerMove}
              onPointerUp={endDrag}
              onPointerLeave={() => {
                endDrag()
                setCursor(null)
              }}
              onClick={onBackgroundClick}
              style={{
                cursor:
                  mode === 'add+' || mode === 'add-' || mode === 'trace'
                    ? 'crosshair'
                    : mode === 'delete'
                      ? 'pointer'
                      : 'default',
              }}
            >
              <rect x={0} y={0} width={W} height={H} fill="transparent" />

              {/* potential heat map */}
              {showHeat && (
                <g>
                  {heatCells.map((h, i) => (
                    <rect key={i} x={h.x} y={h.y} width={CELL} height={CELL} fill={h.fill} opacity={h.op} />
                  ))}
                </g>
              )}

              {/* equipotential contours */}
              {showEquip && (
                <g>
                  {equipPaths.map((p, i) => (
                    <path
                      key={i}
                      d={p.d}
                      fill="none"
                      stroke="#2dd4bf"
                      strokeWidth={1.1}
                      opacity={0.5}
                      style={{ pointerEvents: 'none' }}
                    />
                  ))}
                </g>
              )}

              {/* field vector grid */}
              <g>
                {arrows.map((a, i) => {
                  const col = magColor(a.t)
                  const ang = Math.atan2(a.y2 - a.y, a.x2 - a.x)
                  const hx = a.x2 - Math.cos(ang) * 5
                  const hy = a.y2 - Math.sin(ang) * 5
                  return (
                    <g key={i} style={{ pointerEvents: 'none' }}>
                      <line x1={a.x} y1={a.y} x2={a.x2} y2={a.y2} stroke={col} strokeWidth={1.3} opacity={0.85} />
                      <polygon
                        points={`${a.x2},${a.y2} ${hx - Math.sin(ang) * 2.6},${hy + Math.cos(ang) * 2.6} ${hx + Math.sin(ang) * 2.6},${hy - Math.cos(ang) * 2.6}`}
                        fill={col}
                        opacity={0.85}
                      />
                    </g>
                  )
                })}
              </g>

              {/* Gauss overlay */}
              {gauss.on && (
                <g>
                  <circle
                    cx={gauss.cx}
                    cy={gauss.cy}
                    r={gauss.r}
                    fill="rgba(45,212,191,0.05)"
                    stroke="#2dd4bf"
                    strokeWidth={2}
                    strokeDasharray="8 6"
                  />
                  <line x1={gauss.cx} y1={gauss.cy} x2={ge.x} y2={ge.y} stroke="#2dd4bf" strokeWidth={1} opacity={0.5} />
                  <circle cx={gauss.cx} cy={gauss.cy} r={7} fill="#2dd4bf" className="cursor-move" onPointerDown={onGaussCenterDown} />
                  <circle cx={ge.x} cy={ge.y} r={8} fill="#fbbf24" className="cursor-ew-resize" onPointerDown={onGaussEdgeDown} />
                  <text
                    x={gauss.cx}
                    y={gauss.cy - gauss.r - 10}
                    textAnchor="middle"
                    fontSize={13}
                    fontWeight={700}
                    fill="#2dd4bf"
                    className="font-mono"
                    style={{ pointerEvents: 'none' }}
                  >
                    Gauss sphere (edge-on)
                  </text>
                </g>
              )}

              {/* field-line tracers */}
              {tracers.map((t) => {
                const head = t.pts[t.pts.length - 1]
                const d = t.pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join('')
                return (
                  <g key={t.id}>
                    <path d={d} fill="none" stroke="#34d399" strokeWidth={2} opacity={0.75} style={{ pointerEvents: 'none' }} />
                    <circle
                      cx={head.x}
                      cy={head.y}
                      r={4.5}
                      fill={t.done ? 'rgba(52,211,153,0.35)' : '#34d399'}
                      stroke="#064e3b"
                      strokeWidth={1}
                    />
                  </g>
                )
              })}

              {/* work-mode path */}
              {work.path.length > 1 && (
                <path
                  d={work.path.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join('')}
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth={2.2}
                  strokeDasharray="6 5"
                  opacity={0.9}
                  style={{ pointerEvents: 'none' }}
                />
              )}

              {/* charges */}
              {charges.map((c) => {
                if (c.hidden && !reveal) return null
                const r = chargeR(c.q)
                const pos = c.q >= 0
                return (
                  <g
                    key={c.id}
                    transform={`translate(${c.x},${c.y})`}
                    opacity={c.hidden ? 0.55 : 1}
                    style={{ cursor: mode === 'move' ? 'grab' : mode === 'delete' ? 'pointer' : 'default' }}
                  >
                    <circle r={r} fill={pos ? 'rgba(16,185,129,0.28)' : 'rgba(244,63,94,0.26)'} stroke={pos ? '#10b981' : '#f43f5e'} strokeWidth={2.5} />
                    <text
                      y={6}
                      textAnchor="middle"
                      fontSize={20}
                      fontWeight={800}
                      fill={pos ? '#a7f3d0' : '#fecdd3'}
                      className="font-mono"
                      style={{ pointerEvents: 'none', userSelect: 'none' }}
                    >
                      {pos ? '+' : '−'}
                    </text>
                    <text
                      y={-r - 8}
                      textAnchor="middle"
                      fontSize={12}
                      fill={pos ? '#6ee7b7' : '#fda4af'}
                      className="font-mono"
                      stroke="#09090b"
                      strokeWidth={3}
                      paintOrder="stroke"
                      style={{ pointerEvents: 'none' }}
                    >
                      {c.q > 0 ? '+' : ''}{c.q} nC{c.hidden ? ' (hidden)' : ''}
                    </text>
                    <circle
                      r={r + 7}
                      fill="transparent"
                      onPointerDown={(e) => onChargePointerDown(e, c)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </g>
                )
              })}

              {/* test-charge probe (work mode) */}
              {mode === 'work' && (
                <g transform={`translate(${probe.x},${probe.y})`} style={{ cursor: 'grab' }}>
                  <AnimatePresence>
                    {workMatch && (
                      <motion.circle
                        key="match"
                        r={16}
                        fill="none"
                        stroke="#2dd4bf"
                        strokeWidth={2}
                        initial={reduced ? false : { opacity: 0.9, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.9 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.9 }}
                      />
                    )}
                  </AnimatePresence>
                  <circle r={12} fill="rgba(45,212,191,0.18)" stroke="#2dd4bf" strokeWidth={2.5} />
                  <text y={5} textAnchor="middle" fontSize={14} fontWeight={800} fill="#99f6e4" className="font-mono" style={{ pointerEvents: 'none' }}>
                    +q
                  </text>
                  <circle r={20} fill="transparent" onPointerDown={onProbePointerDown} onClick={(e) => e.stopPropagation()} />
                </g>
              )}

              {/* cursor crosshair readout */}
              {cursor && (
                <g style={{ pointerEvents: 'none' }} opacity={0.6}>
                  <line x1={cursor.x} y1={0} x2={cursor.x} y2={H} stroke="#71717a" strokeWidth={0.6} strokeDasharray="3 4" />
                  <line x1={0} y1={cursor.y} x2={W} y2={cursor.y} stroke="#71717a" strokeWidth={0.6} strokeDasharray="3 4" />
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col gap-4 xl:col-span-5 2xl:col-span-4">
          {/* tools */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tools</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {MODES.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMode(m.id)}
                  aria-pressed={mode === m.id}
                  className={`flex items-center justify-center gap-1.5 rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                    mode === m.id
                      ? 'border-emerald-500/60 bg-emerald-500/15 text-foreground'
                      : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <m.icon className="h-3.5 w-3.5" />
                  {m.label}
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <span className="w-28 shrink-0 text-xs text-muted-foreground">new |q|</span>
              <Slider value={[newQ]} onValueChange={(v) => setNewQ(v[0] ?? 10)} min={2} max={40} step={1} className="flex-1" aria-label="new charge magnitude in nanocoulombs" />
              <span className="w-14 shrink-0 rounded-md bg-muted/50 px-1.5 py-1 text-right font-mono text-xs tabular-nums text-foreground">{newQ} nC</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Button size="sm" variant="outline" onClick={() => setTracers([])} disabled={tracers.length === 0}>
                <Route className="h-3.5 w-3.5" />
                Clear trails
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setCharges([])
                  setTracers([])
                  setPresetKey('')
                }}
              >
                <Trash2 className="h-3.5 w-3.5" />
                Clear all
              </Button>
            </div>
          </div>

          {/* layers */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center gap-2">
              <Eye className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Layers</span>
            </div>
            <div className="space-y-2.5">
              <label className="flex cursor-pointer items-center justify-between gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-emerald-400" />
                  field vectors <TeX tex="\mathbf{E}" />
                </span>
                <Switch checked={showVectors} onCheckedChange={setShowVectors} aria-label="toggle field vector grid" />
              </label>
              <label className="flex cursor-pointer items-center justify-between gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CircleDashed className="h-3.5 w-3.5 text-teal-400" />
                  equipotentials <TeX tex="V=\sum \frac{kq}{r}" />
                </span>
                <Switch checked={showEquip} onCheckedChange={setShowEquip} aria-label="toggle equipotential contours" />
              </label>
              <label className="flex cursor-pointer items-center justify-between gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Gauge className="h-3.5 w-3.5 text-emerald-400" />
                  potential heat map
                </span>
                <Switch checked={showHeat} onCheckedChange={setShowHeat} aria-label="toggle potential heat map" />
              </label>
              <label className="flex cursor-pointer items-center justify-between gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CircleDashed className="h-3.5 w-3.5 text-teal-400" />
                  Gauss surface
                </span>
                <Switch
                  checked={gauss.on}
                  onCheckedChange={(on) => setGauss((g) => ({ ...g, on }))}
                  aria-label="toggle Gauss law overlay"
                />
              </label>
            </div>
          </div>

          {/* live probe readouts */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center gap-2">
              <Gauge className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Live probe</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 font-mono text-xs tabular-nums">
              <div className="rounded-lg bg-muted/50 px-2.5 py-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">|E| at cursor</div>
                <div className="text-emerald-400">{cursorRead ? fmtSI(cursorRead.e, 'N/C') : '—'}</div>
              </div>
              <div className="rounded-lg bg-muted/50 px-2.5 py-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">V at cursor</div>
                <div className="text-teal-300">{cursorRead ? fmtSI(cursorRead.v, 'V') : '—'}</div>
              </div>
            </div>
            <div className="mt-3 space-y-1 rounded-lg bg-muted/40 px-3 py-2 text-[11px] leading-relaxed text-muted-foreground">
              <p>
                <span className="font-mono text-foreground">E</span> points from emerald charges toward rose ones;{' '}
                <span className="font-mono text-teal-300">teal rings</span> are constant-potential contours (spacing ∝
                1/|E|).
              </p>
            </div>
          </div>

          {/* work integral panel */}
          <AnimatePresence initial={false}>
            {mode === 'work' && (
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">Work integral</span>
                  <Button
                    size="sm"
                    variant="outline"
                    aria-label="reset work path"
                    onClick={() => setWork({ w: 0, v0: potAt(charges, probe.x, probe.y), path: [probe], dragging: false, landed: false })}
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Reset
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-1.5 font-mono text-xs tabular-nums">
                  <div className="rounded-lg bg-muted/50 px-2.5 py-2">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">−∫ qE·dl (your drag)</div>
                    <div className="text-amber-300">{fmtSI(wyou, 'J')}</div>
                  </div>
                  <div className="rounded-lg bg-muted/50 px-2.5 py-2">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">qΔV (endpoints)</div>
                    <div className="text-emerald-400">{fmtSI(qdV, 'J')}</div>
                  </div>
                </div>
                <div className="mt-2 rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-2 text-[11px] leading-relaxed text-teal-200">
                  {workMatch
                    ? 'Match. Electrostatics is conservative: the drag tally equals qΔV no matter which route you took.'
                    : 'Drag the teal +q between two points — then drag it back along a different route. The tally only cares about endpoints.'}
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                  <TeX tex="W_{\text{you}}=-\int q\mathbf{E}\cdot d\mathbf{l}=q\,\Delta V" /> with{' '}
                  <span className="font-mono">q = 2 nC</span>.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Gauss panel */}
          <AnimatePresence initial={false}>
            {gauss.on && gaussRead && (
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">Gauss&apos;s law tally</span>
                  {gaussRead.anyHidden && (
                    <Button size="sm" variant={reveal ? 'default' : 'outline'} className={reveal ? 'bg-emerald-600 hover:bg-emerald-500' : ''} onClick={() => setReveal((r) => !r)}>
                      <Eye className="h-3.5 w-3.5" />
                      {reveal ? 'Hide' : 'Reveal'}
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-1.5 font-mono text-xs tabular-nums">
                  <div className="rounded-lg bg-muted/50 px-2.5 py-2">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">∮ E·da through sphere</div>
                    <div className="text-teal-300">{fmtSI(gaussRead.flux, 'N·m²/C')}</div>
                  </div>
                  <div className="rounded-lg bg-muted/50 px-2.5 py-2">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Φ·ε₀ ⇒ Q_enc</div>
                    <div className="text-emerald-400">{gaussRead.qFromFlux >= 0 ? '+' : ''}{gaussRead.qFromFlux.toFixed(2)} nC</div>
                  </div>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                  The drawn circle is a sphere seen edge-on — the tally integrates{' '}
                  <TeX tex="\oint\mathbf{E}\cdot d\mathbf{a}" /> over the whole closed surface. Counted inside:{' '}
                  <span className="font-mono text-foreground">
                    {gaussRead.anyHidden && !reveal ? '? nC (something is hidden)' : `${gaussRead.counted >= 0 ? '+' : ''}${gaussRead.counted.toFixed(1)} nC`}
                  </span>{' '}
                  — the flux alone pins it down, sign included. Shrink the sphere onto a charge to isolate it.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* try this */}
      <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> load <span className="font-medium">Dipole</span>,
          switch to <span className="font-medium">Trace</span> and click near the + charge, then near the − — trails flow
          source-to-sink and never cross. Turn on the heat map and drag a charge: contours follow it live. Then try{' '}
          <span className="font-medium">Work qΔV</span>: drag the teal test charge from the left edge to the right edge
          along two different routes — the tally is identical, because <TeX tex="W=q\Delta V" /> only cares about
          endpoints. Finish with the <span className="font-medium">hidden-charge puzzle</span>: move the Gauss circle
          until the flux tally peaks, and deduce where the invisible charge sits before revealing it.
        </p>
      </div>
    </div>
  )
}
