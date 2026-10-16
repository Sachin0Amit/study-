'use client'

/**
 * Circuit Sandbox — real modified nodal analysis (MNA).
 * Users wire components between named nodes; "Solve" builds the conductance
 * matrix + source-current unknowns and runs a hand-written Gaussian
 * elimination (partial pivoting). No external math libraries.
 */

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, CircuitBoard, Play, Plus, RotateCcw, Trash2, Zap } from 'lucide-react'
import { RING, fmt } from './types'

/* ------------------------------------------------------------------ */
/*  Model                                                              */
/* ------------------------------------------------------------------ */

type CompKind = 'resistor' | 'vsource'

interface Comp {
  id: number
  label: string
  nodeA: string // + terminal for sources
  nodeB: string
  kind: CompKind
  value: number // Ω for resistors, V for sources
}

interface BranchResult {
  comp: Comp
  current: number // A, defined below per kind
}

interface SolveOk {
  ok: true
  nodeVoltages: { node: string; v: number }[]
  branches: BranchResult[]
  power: number
}

type SolveResult = SolveOk | { ok: false; errors: string[] }

const GROUND = 'GND'

/* ------------------------------------------------------------------ */
/*  Validation + MNA solver                                            */
/* ------------------------------------------------------------------ */

function validate(comps: Comp[]): string[] {
  const errors: string[] = []
  if (comps.length === 0) {
    return ['The circuit is empty — add components or load a preset.']
  }
  if (!comps.some((c) => c.kind === 'vsource')) {
    errors.push('At least one voltage source is required (the matrix needs a reference drive).')
  }
  const degree = new Map<string, number>()
  for (const c of comps) {
    if (c.nodeA === c.nodeB) {
      errors.push(`${c.label} connects node "${c.nodeA}" to itself — components need two distinct nodes.`)
    }
    if (!(c.value > 0) || !Number.isFinite(c.value)) {
      errors.push(`${c.label}: value must be a finite number greater than zero.`)
    }
    degree.set(c.nodeA, (degree.get(c.nodeA) ?? 0) + 1)
    degree.set(c.nodeB, (degree.get(c.nodeB) ?? 0) + 1)
  }
  if (!degree.has(GROUND)) {
    errors.push('Nothing is connected to the GND reference node.')
  }
  for (const [node, d] of degree) {
    if (d < 2) {
      errors.push(`Node "${node}" is floating — every node needs at least two connections.`)
    }
  }
  return errors
}

/** Dense Gaussian elimination with partial pivoting. Returns null when singular. */
function gaussSolve(A: number[][], b: number[]): number[] | null {
  const n = b.length
  if (n === 0) return []
  const M = A.map((row, i) => [...row, b[i]])
  for (let col = 0; col < n; col++) {
    let piv = col
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(M[r][col]) > Math.abs(M[piv][col])) piv = r
    }
    if (Math.abs(M[piv][col]) < 1e-12) return null
    if (piv !== col) {
      const tmp = M[col]
      M[col] = M[piv]
      M[piv] = tmp
    }
    for (let r = col + 1; r < n; r++) {
      const f = M[r][col] / M[col][col]
      if (f === 0) continue
      for (let c = col; c <= n; c++) M[r][c] -= f * M[col][c]
    }
  }
  const x = new Array<number>(n).fill(0)
  for (let r = n - 1; r >= 0; r--) {
    let s = M[r][n]
    for (let c = r + 1; c < n; c++) s -= M[r][c] * x[c]
    x[r] = s / M[r][r]
  }
  return x
}

function solveMNA(comps: Comp[]): SolveResult {
  const errors = validate(comps)
  if (errors.length > 0) return { ok: false, errors }

  const nodeSet = new Set<string>([GROUND])
  for (const c of comps) {
    nodeSet.add(c.nodeA)
    nodeSet.add(c.nodeB)
  }
  const nodes = [...nodeSet]
  const unknown = nodes.filter((n) => n !== GROUND)
  const uIdx = new Map(unknown.map((n, i) => [n, i]))
  const sources = comps.filter((c) => c.kind === 'vsource')

  const n = unknown.length
  const m = sources.length
  const N = n + m
  const A: number[][] = Array.from({ length: N }, () => new Array<number>(N).fill(0))
  const z = new Array<number>(N).fill(0)

  const gi = (node: string) => (node === GROUND ? -1 : (uIdx.get(node) ?? -1))

  for (const c of comps) {
    const a = gi(c.nodeA)
    const b = gi(c.nodeB)
    if (c.kind === 'resistor') {
      const g = 1 / c.value
      if (a >= 0) A[a][a] += g
      if (b >= 0) A[b][b] += g
      if (a >= 0 && b >= 0) {
        A[a][b] -= g
        A[b][a] -= g
      }
    } else {
      const k = sources.indexOf(c)
      // current unknown I_k flows through the source from nodeA(+) to nodeB(-)
      if (a >= 0) A[a][n + k] += 1
      if (b >= 0) A[b][n + k] -= 1
      if (a >= 0) A[n + k][a] += 1
      if (b >= 0) A[n + k][b] -= 1
      z[n + k] = c.value
    }
  }

  const x = gaussSolve(A, z)
  if (!x) {
    return {
      ok: false,
      errors: ['The system is singular — every node needs a DC path to GND (no isolated islands).'],
    }
  }

  const vOf = (node: string) => (node === GROUND ? 0 : x[uIdx.get(node) as number])
  const nodeVoltages = nodes.map((node) => ({ node, v: vOf(node) }))
  const branches: BranchResult[] = comps.map((c) => {
    if (c.kind === 'resistor') {
      return { comp: c, current: (vOf(c.nodeA) - vOf(c.nodeB)) / c.value }
    }
    // current delivered out of the + terminal into the circuit = -I_k
    return { comp: c, current: -x[n + sources.indexOf(c)] }
  })
  const power = branches
    .filter((b) => b.comp.kind === 'vsource')
    .reduce((s, b) => s + b.comp.value * b.current, 0)

  return { ok: true, nodeVoltages, branches, power }
}

/* ------------------------------------------------------------------ */
/*  Formatting                                                         */
/* ------------------------------------------------------------------ */

function fmtOhm(v: number): string {
  if (v >= 1e6) return `${fmt(v / 1e6)} MΩ`
  if (v >= 1e3) return `${fmt(v / 1e3)} kΩ`
  return `${fmt(v)} Ω`
}

function fmtAmps(a: number): string {
  const abs = Math.abs(a)
  if (abs >= 1) return `${fmt(a)} A`
  if (abs >= 1e-3) return `${fmt(a * 1e3)} mA`
  return `${fmt(a * 1e6)} µA`
}

/* ------------------------------------------------------------------ */
/*  Presets                                                            */
/* ------------------------------------------------------------------ */

interface Preset {
  key: string
  label: string
  note: string
  build: () => Comp[]
}

let pid = 0
function mk(nodeA: string, nodeB: string, kind: CompKind, value: number, label: string): Comp {
  return { id: ++pid, label, nodeA, nodeB, kind, value }
}

const PRESETS: Preset[] = [
  {
    key: 'divider',
    label: 'Voltage divider',
    note: '9 V across 1 kΩ + 2 kΩ → the mid node settles at exactly 6 V.',
    build: () => [
      mk('IN', GROUND, 'vsource', 9, 'V1'),
      mk('IN', 'MID', 'resistor', 1000, 'R1'),
      mk('MID', GROUND, 'resistor', 2000, 'R2'),
    ],
  },
  {
    key: 'rc',
    label: 'RC steady state',
    note: 'τ = R·C = 10 ms. After ≈5τ the capacitor is fully charged and behaves as an open circuit — modeled here as a 10 MΩ leak, so only ~1.2 µA trickles through.',
    build: () => [
      mk('IN', GROUND, 'vsource', 12, 'V1'),
      mk('IN', 'MID', 'resistor', 1000, 'R1'),
      mk('MID', GROUND, 'resistor', 10_000_000, 'C1'),
    ],
  },
  {
    key: 'bridge',
    label: 'Wheatstone bridge',
    note: 'Slightly unbalanced (R3 = 1.1 kΩ) — a small current crosses the bridge resistor between the L and R arms.',
    build: () => [
      mk('TOP', GROUND, 'vsource', 5, 'V1'),
      mk('TOP', 'L', 'resistor', 1000, 'R1'),
      mk('TOP', 'R', 'resistor', 1000, 'R2'),
      mk('L', GROUND, 'resistor', 1100, 'R3'),
      mk('R', GROUND, 'resistor', 1000, 'R4'),
      mk('L', 'R', 'resistor', 1000, 'R5'),
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Schematic (SVG, circle layout)                                     */
/* ------------------------------------------------------------------ */

function Schematic({ comps, voltages }: { comps: Comp[]; voltages?: { node: string; v: number }[] }) {
  const vMap = new Map((voltages ?? []).map((n) => [n.node, n.v]))
  const nodeSet = new Set<string>([GROUND])
  for (const c of comps) {
    nodeSet.add(c.nodeA)
    nodeSet.add(c.nodeB)
  }
  const nodeList = [...nodeSet]
  const W = 440
  const H = 320
  const cx = W / 2
  const cy = 142
  const r = 98
  const pos = new Map<string, { x: number; y: number }>()
  nodeList.forEach((node, i) => {
    const ang = Math.PI / 2 + (2 * Math.PI * (i + 0.5)) / nodeList.length
    pos.set(node, { x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang) })
  })

  if (comps.length === 0) {
    return (
      <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-border/70 bg-background/40 px-6 text-center text-sm text-muted-foreground">
        The schematic appears here once you add components. Try a preset for an instant circuit.
      </div>
    )
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Circuit schematic with nodes on a circle layout"
    >
      {comps.map((c) => {
        const a = pos.get(c.nodeA)
        const b = pos.get(c.nodeB)
        if (!a || !b) return null
        const mx = (a.x + b.x) / 2
        const my = (a.y + b.y) / 2
        const isSrc = c.kind === 'vsource'
        const labelText = isSrc
          ? `${c.label} ${fmt(c.value)} V`
          : `${c.label} ${c.kind === 'resistor' && c.value >= 1e6 ? '(C)' : fmtOhm(c.value)}`
        const lw = labelText.length * 6.4 + 10
        return (
          <g key={c.id}>
            <line
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={isSrc ? '#fbbf24' : '#34d399'}
              strokeWidth={2}
              strokeLinecap="round"
              opacity={0.9}
            />
            <rect
              x={mx - lw / 2}
              y={my - 9}
              width={lw}
              height={18}
              rx={5}
              fill="var(--card)"
              stroke="var(--border)"
              strokeWidth={1}
            />
            <text
              x={mx}
              y={my + 4}
              textAnchor="middle"
              fontSize={11}
              fontFamily="var(--font-mono)"
              fill={isSrc ? '#fbbf24' : '#34d399'}
            >
              {labelText}
            </text>
          </g>
        )
      })}
      {nodeList.map((node) => {
        const p = pos.get(node)
        if (!p) return null
        const v = vMap.get(node)
        return (
          <g key={node}>
            {node === GROUND && (
              <g stroke="#5eead4" strokeWidth={2} strokeLinecap="round">
                <line x1={p.x - 9} y1={p.y + 9} x2={p.x + 9} y2={p.y + 9} />
                <line x1={p.x - 6} y1={p.y + 14} x2={p.x + 6} y2={p.y + 14} />
                <line x1={p.x - 3} y1={p.y + 19} x2={p.x + 3} y2={p.y + 19} />
              </g>
            )}
            <circle cx={p.x} cy={p.y} r={5.5} fill="#14b8a6" stroke="var(--card)" strokeWidth={2} />
            <text
              x={p.x}
              y={p.y - 11}
              textAnchor="middle"
              fontSize={12}
              fontWeight={700}
              fill="var(--foreground)"
            >
              {node}
            </text>
            {v !== undefined && (
              <text
                x={p.x}
                y={p.y - 24}
                textAnchor="middle"
                fontSize={10.5}
                fontFamily="var(--font-mono)"
                fill="#5eead4"
              >
                {fmt(v)} V
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function CircuitLab() {
  const [comps, setComps] = useState<Comp[]>([])
  const [nodeA, setNodeA] = useState('IN')
  const [nodeB, setNodeB] = useState('MID')
  const [kind, setKind] = useState<CompKind>('resistor')
  const [value, setValue] = useState('1000')
  const [result, setResult] = useState<SolveResult | null>(null)
  const [presetNote, setPresetNote] = useState<string | null>(null)

  const knownNodes = useMemo(() => {
    const s = new Set<string>([GROUND])
    for (const c of comps) {
      s.add(c.nodeA)
      s.add(c.nodeB)
    }
    return [...s]
  }, [comps])

  const parsedValue = Number(value)
  const canAdd =
    nodeA.trim().length > 0 &&
    nodeB.trim().length > 0 &&
    nodeA.trim().toUpperCase() !== nodeB.trim().toUpperCase() &&
    Number.isFinite(parsedValue) &&
    parsedValue > 0

  const counters = useMemo(() => {
    let r = 0
    let v = 0
    for (const c of comps) {
      if (c.kind === 'resistor') r = Math.max(r, Number(c.label.slice(1)))
      else v = Math.max(v, Number(c.label.slice(1)))
    }
    return { r, v }
  }, [comps])

  const addComponent = () => {
    if (!canAdd) return
    const label =
      kind === 'resistor' ? `R${counters.r + 1}` : `V${counters.v + 1}`
    setComps((cs) => [
      ...cs,
      {
        id: ++pid,
        label,
        nodeA: nodeA.trim().toUpperCase(),
        nodeB: nodeB.trim().toUpperCase(),
        kind,
        value: parsedValue,
      },
    ])
    setResult(null)
    setPresetNote(null)
  }

  const removeComponent = (id: number) => {
    setComps((cs) => cs.filter((c) => c.id !== id))
    setResult(null)
    setPresetNote(null)
  }

  const loadPreset = (p: Preset) => {
    const built = p.build()
    setComps(built)
    // instant feedback — solve the preset right away
    setResult(solveMNA(built))
    setPresetNote(p.note)
  }

  const solve = () => setResult(solveMNA(comps))

  const unit = kind === 'resistor' ? 'Ω' : 'V'
  const solved = result?.ok === true

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-5"
    >
      {/* header */}
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10">
          <CircuitBoard className="h-5 w-5 text-emerald-300" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-bold leading-tight">Circuit Sandbox — nodal analysis</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            Wire resistors and voltage sources between named nodes (GND is the reference). Solving
            builds the full conductance matrix and eliminates it with partial pivoting — the same
            method professional simulators use for DC operating points.
          </p>
        </div>
      </div>

      {/* presets */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Presets
        </span>
        {PRESETS.map((p) => (
          <button
            key={p.key}
            onClick={() => loadPreset(p)}
            className={`rounded-lg border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-semibold text-foreground/90 transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-200 ${RING}`}
          >
            {p.label}
          </button>
        ))}
        {comps.length > 0 && (
          <button
            onClick={() => {
              setComps([])
              setResult(null)
              setPresetNote(null)
            }}
            className={`inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground ${RING}`}
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Clear
          </button>
        )}
      </div>
      {presetNote && (
        <p className="rounded-lg border border-teal-400/25 bg-teal-400/[0.07] px-3.5 py-2.5 text-xs leading-relaxed text-teal-200/90">
          {presetNote}
        </p>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        {/* builder */}
        <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold">
            <Zap className="h-4 w-4 text-amber-300" aria-hidden="true" /> Schematic editor
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                From node {kind === 'vsource' ? '(+)' : ''}
              </span>
              <input
                value={nodeA}
                onChange={(e) => setNodeA(e.target.value.toUpperCase())}
                list="sv-circuit-nodes"
                placeholder="IN"
                aria-label="From node"
                className={`w-full rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-sm uppercase tracking-wide placeholder:normal-case placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60`}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                To node {kind === 'vsource' ? '(−)' : ''}
              </span>
              <input
                value={nodeB}
                onChange={(e) => setNodeB(e.target.value.toUpperCase())}
                list="sv-circuit-nodes"
                placeholder="GND"
                aria-label="To node"
                className="w-full rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-sm uppercase tracking-wide placeholder:normal-case placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
              />
            </label>
          </div>
          <datalist id="sv-circuit-nodes">
            {knownNodes.map((n) => (
              <option key={n} value={n} />
            ))}
          </datalist>

          <div className="mt-2.5 grid grid-cols-2 gap-2.5">
            <div>
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Type
              </span>
              <div className="grid grid-cols-2 gap-1.5" role="group" aria-label="Component type">
                {(['resistor', 'vsource'] as CompKind[]).map((k) => (
                  <button
                    key={k}
                    onClick={() => setKind(k)}
                    aria-pressed={kind === k}
                    className={`rounded-lg border px-2 py-1.5 text-xs font-semibold transition-all ${RING} ${
                      kind === k
                        ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-200'
                        : 'border-border/80 bg-background/60 text-muted-foreground hover:border-emerald-400/30 hover:text-foreground'
                    }`}
                  >
                    {k === 'resistor' ? 'Resistor' : 'Source'}
                  </button>
                ))}
              </div>
            </div>
            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Value ({unit})
              </span>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                inputMode="decimal"
                aria-label={`Value in ${unit}`}
                className="w-full rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-sm tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
              />
            </label>
          </div>

          <button
            onClick={addComponent}
            disabled={!canAdd}
            title={canAdd ? 'Add this component' : 'Fill both nodes and a positive value first'}
            className={`mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/15 px-4 py-2 text-sm font-bold text-emerald-200 transition-all hover:bg-emerald-400/25 disabled:cursor-not-allowed disabled:opacity-40 ${RING}`}
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add {kind === 'resistor' ? 'resistor' : 'voltage source'} {canAdd && `(${nodeA}→${nodeB})`}
          </button>

          {/* component list */}
          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Components
              </span>
              <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                {comps.length}
              </span>
            </div>
            {comps.length === 0 ? (
              <p className="rounded-lg border border-dashed border-border/70 bg-background/40 px-3 py-4 text-center text-xs text-muted-foreground">
                No components yet — add one above or load a preset.
              </p>
            ) : (
              <ul className="max-h-56 space-y-1.5 overflow-y-auto pr-1">
                {comps.map((c) => (
                  <li
                    key={c.id}
                    className="group flex items-center justify-between gap-2 rounded-lg border border-border/70 bg-background/50 px-2.5 py-1.5"
                  >
                    <span className="flex min-w-0 items-center gap-2 font-mono text-xs">
                      <span
                        className={
                          c.kind === 'vsource' ? 'font-bold text-amber-300' : 'font-bold text-emerald-300'
                        }
                      >
                        {c.label}
                      </span>
                      <span className="truncate text-muted-foreground">
                        {c.nodeA} → {c.nodeB}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-2">
                      <span className="font-mono text-xs tabular-nums text-foreground/90">
                        {c.kind === 'resistor' ? fmtOhm(c.value) : `${fmt(c.value)} V`}
                      </span>
                      <button
                        onClick={() => removeComponent(c.id)}
                        aria-label={`Remove ${c.label}`}
                        className={`rounded-md p-1 text-muted-foreground/60 transition-colors hover:bg-rose-400/10 hover:text-rose-300 ${RING}`}
                      >
                        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={solve}
            disabled={comps.length === 0}
            className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-bold text-emerald-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40 ${RING}`}
          >
            <Play className="h-4 w-4" aria-hidden="true" /> Solve circuit (MNA)
          </button>
        </div>

        {/* results */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
            <div className="mb-2 text-sm font-bold">Schematic</div>
            <Schematic
              comps={comps}
              voltages={solved ? result.nodeVoltages : undefined}
            />
          </div>

          {result && !result.ok && (
            <div
              role="alert"
              className="rounded-2xl border border-amber-400/30 bg-amber-400/[0.07] p-4"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-amber-200">
                <AlertTriangle className="h-4 w-4" aria-hidden="true" /> Cannot solve yet
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-amber-100/80">
                {result.errors.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          )}

          {solved && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
                <div className="mb-2.5 text-sm font-bold">Node voltages</div>
                <div className="overflow-hidden rounded-lg border border-border/70">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/70 bg-background/60 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                        <th className="px-3 py-1.5 font-semibold">Node</th>
                        <th className="px-3 py-1.5 text-right font-semibold">Voltage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.nodeVoltages.map((n) => (
                        <tr key={n.node} className="border-b border-border/40 last:border-0">
                          <td className="px-3 py-1.5 font-mono text-xs">
                            {n.node}
                            {n.node === GROUND && (
                              <span className="ml-2 rounded bg-muted px-1.5 py-px text-[10px] text-muted-foreground">
                                ref
                              </span>
                            )}
                          </td>
                          <td className="px-3 py-1.5 text-right font-mono text-xs tabular-nums text-teal-200">
                            {fmt(n.v)} V
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="text-sm font-bold">Branch currents</span>
                  <span className="font-mono text-[11px] tabular-nums text-amber-200/90">
                    P = {fmt(result.power)} W
                  </span>
                </div>
                <div className="overflow-hidden rounded-lg border border-border/70">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/70 bg-background/60 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                        <th className="px-3 py-1.5 font-semibold">Element</th>
                        <th className="px-3 py-1.5 font-semibold">Path</th>
                        <th className="px-3 py-1.5 text-right font-semibold">Current</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.branches.map((b) => (
                        <tr key={b.comp.id} className="border-b border-border/40 last:border-0">
                          <td className="px-3 py-1.5 font-mono text-xs font-bold">
                            <span className={b.comp.kind === 'vsource' ? 'text-amber-300' : 'text-emerald-300'}>
                              {b.comp.label}
                            </span>
                          </td>
                          <td className="px-3 py-1.5 font-mono text-xs text-muted-foreground">
                            {b.comp.nodeA} → {b.comp.nodeB}
                          </td>
                          <td className="px-3 py-1.5 text-right font-mono text-xs tabular-nums">
                            {fmtAmps(b.current)}
                            {b.comp.kind === 'vsource' && (
                              <span className="ml-1.5 text-[10px] text-muted-foreground">delivered</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {!result && comps.length > 0 && (
            <p className="rounded-2xl border border-dashed border-border/70 bg-background/40 px-4 py-3 text-center text-xs text-muted-foreground">
              Press <span className="font-semibold text-foreground/80">Solve circuit</span> to run
              the nodal analysis and fill in voltages + currents.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default CircuitLab
