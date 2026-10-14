'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Move, CirclePlus, Link2, Trash2, Play, Pause, SkipBack, SkipForward, RotateCcw,
  Network, Gauge, Lightbulb, Route, Box, Sparkles, Weight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

/* ------------------------------------------------------------------ */
/* types                                                               */
/* ------------------------------------------------------------------ */

type Mode = 'move' | 'add' | 'connect' | 'delete'
type Algo = 'bfs' | 'dfs' | 'dijkstra'

interface GNode {
  id: string
  label: number
  x: number
  y: number
}

interface GEdge {
  id: string
  a: string
  b: string
  weight: number
}

interface QueueItem {
  id: string
  tag?: string
}

interface AlgoStep {
  kind: Algo
  current: string | null
  visited: string[]
  queue: QueueItem[]
  treeEdges: string[]
  distances: Record<string, number>
  settled: string[]
  activeEdge: string | null
  note: string
}

const W = 900
const H = 560
const NR = 23

/* ------------------------------------------------------------------ */
/* graph construction                                                  */
/* ------------------------------------------------------------------ */

let idc = 0
const nid = () => `n${++idc}`

interface Preset {
  nodes: { x: number; y: number }[]
  edges: [number, number][]
}

function buildPreset(p: Preset, weights?: boolean): { nodes: GNode[]; edges: GEdge[] } {
  const nodes: GNode[] = p.nodes.map((pt, i) => ({ id: nid(), label: i + 1, x: pt.x, y: pt.y }))
  const edges: GEdge[] = p.edges.map(([ai, bi]) => {
    const a = nodes[ai]
    const b = nodes[bi]
    const lo = a.id < b.id ? a.id : b.id
    const hi = a.id < b.id ? b.id : a.id
    return { id: `e-${lo}-${hi}`, a: a.id, b: b.id, weight: weights ? 2 + Math.floor(Math.random() * 8) : 1 }
  })
  return { nodes, edges }
}

const HOUSE: Preset = {
  nodes: [
    { x: 350, y: 430 }, { x: 580, y: 430 }, { x: 580, y: 240 }, { x: 350, y: 240 }, { x: 465, y: 105 },
  ],
  edges: [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 2]],
}

const K4: Preset = {
  nodes: [{ x: 450, y: 95 }, { x: 215, y: 455 }, { x: 685, y: 455 }, { x: 450, y: 300 }],
  edges: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]],
}

const K33: Preset = {
  nodes: [
    { x: 285, y: 130 }, { x: 285, y: 285 }, { x: 285, y: 440 },
    { x: 615, y: 130 }, { x: 615, y: 285 }, { x: 615, y: 440 },
  ],
  edges: [
    [0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5],
  ],
}

const CYCLE6: Preset = {
  nodes: Array.from({ length: 6 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 3
    return { x: 450 + 205 * Math.cos(a), y: 290 + 195 * Math.sin(a) }
  }),
  edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]],
}

function petersen(): { nodes: GNode[]; edges: GEdge[] } {
  const cx = 450
  const cy = 290
  const pts: { x: number; y: number }[] = []
  for (let i = 0; i < 5; i++) {
    const ao = -Math.PI / 2 + (i * 2 * Math.PI) / 5
    const ai = -Math.PI / 2 + Math.PI / 5 + (i * 2 * Math.PI) / 5
    pts.push({ x: cx + 215 * Math.cos(ao), y: cy + 205 * Math.sin(ao) })
  }
  for (let i = 0; i < 5; i++) {
    const ai = -Math.PI / 2 + Math.PI / 5 + (i * 2 * Math.PI) / 5
    pts.push({ x: cx + 100 * Math.cos(ai), y: cy + 95 * Math.sin(ai) })
  }
  const edges: [number, number][] = []
  for (let i = 0; i < 5; i++) edges.push([i, (i + 1) % 5]) // outer cycle
  for (let i = 0; i < 5; i++) edges.push([5 + i, 5 + ((i + 2) % 5)]) // inner star
  for (let i = 0; i < 5; i++) edges.push([i, 5 + i]) // spokes
  return buildPreset({ nodes: pts, edges }, true)
}

function randomGraph(): { nodes: GNode[]; edges: GEdge[] } {
  const count = 6 + Math.floor(Math.random() * 3)
  const nodes: GNode[] = []
  for (let i = 0; i < count; i++) {
    let x = 0
    let y = 0
    let ok = false
    for (let tries = 0; tries < 40 && !ok; tries++) {
      x = 80 + Math.random() * (W - 160)
      y = 70 + Math.random() * (H - 140)
      ok = nodes.every((n) => Math.hypot(n.x - x, n.y - y) > 105)
    }
    if (!ok) {
      x = 60 + Math.random() * (W - 120)
      y = 50 + Math.random() * (H - 100)
    }
    nodes.push({ id: nid(), label: i + 1, x, y })
  }
  const edges: GEdge[] = []
  const add = (a: GNode, b: GNode) => {
    const lo = a.id < b.id ? a.id : b.id
    const hi = a.id < b.id ? b.id : a.id
    const id = `e-${lo}-${hi}`
    if (edges.some((e) => e.id === id)) return
    edges.push({ id, a: a.id, b: b.id, weight: 1 + Math.floor(Math.random() * 9) })
  }
  for (let i = 0; i + 1 < count; i++) add(nodes[i], nodes[i + 1]) // connected spine
  const extra = count + Math.floor(Math.random() * 3)
  for (let k = 0; k < extra; k++) {
    const a = nodes[Math.floor(Math.random() * count)]
    const b = nodes[Math.floor(Math.random() * count)]
    if (a !== b) add(a, b)
  }
  return { nodes, edges }
}

/* ------------------------------------------------------------------ */
/* algorithm step generators                                           */
/* ------------------------------------------------------------------ */

interface Neighbor {
  v: string
  edgeId: string
  weight: number
}

function buildAdj(nodes: GNode[], edges: GEdge[]): Map<string, Neighbor[]> {
  const labels = new Map(nodes.map((n) => [n.id, n.label]))
  const m = new Map<string, Neighbor[]>(nodes.map((n) => [n.id, []]))
  for (const e of edges) {
    m.get(e.a)?.push({ v: e.b, edgeId: e.id, weight: e.weight })
    m.get(e.b)?.push({ v: e.a, edgeId: e.id, weight: e.weight })
  }
  for (const list of m.values()) list.sort((x, y) => (labels.get(x.v) ?? 0) - (labels.get(y.v) ?? 0))
  return m
}

function emptyStep(kind: Algo, note: string): AlgoStep {
  return { kind, current: null, visited: [], queue: [], treeEdges: [], distances: {}, settled: [], activeEdge: null, note }
}

function bfsSteps(nodes: GNode[], edges: GEdge[], start: string): AlgoStep[] {
  const label = new Map(nodes.map((n) => [n.id, n.label]))
  const adj = buildAdj(nodes, edges)
  const steps: AlgoStep[] = []
  const visited: string[] = [start]
  const treeEdges: string[] = []
  const queue: string[] = [start]
  steps.push({ ...emptyStep('bfs', `Enqueue start vertex ${label.get(start)} — BFS explores level by level.`), current: start, visited: [start], queue: [{ id: start }], treeEdges: [] })
  while (queue.length > 0) {
    const u = queue.shift() as string
    const neighbors = adj.get(u) ?? []
    let discovered = 0
    for (const nb of neighbors) {
      if (!visited.includes(nb.v)) {
        visited.push(nb.v)
        queue.push(nb.v)
        treeEdges.push(nb.edgeId)
        discovered++
        steps.push({
          kind: 'bfs',
          current: u,
          visited: [...visited],
          queue: queue.map((q) => ({ id: q })),
          treeEdges: [...treeEdges],
          distances: {},
          settled: [],
          activeEdge: nb.edgeId,
          note: `Vertex ${label.get(u)} → discover ${label.get(nb.v)} and enqueue it.`,
        })
      }
    }
    if (discovered === 0) {
      steps.push({
        kind: 'bfs',
        current: u,
        visited: [...visited],
        queue: queue.map((q) => ({ id: q })),
        treeEdges: [...treeEdges],
        distances: {},
        settled: [],
        activeEdge: null,
        note: `Dequeue ${label.get(u)} — all neighbours already discovered.`,
      })
    }
  }
  steps.push({ ...emptyStep('bfs', `BFS complete — visit order ${visited.map((v) => label.get(v)).join(' → ')}.`), visited: [...visited], treeEdges, queue: [] })
  return steps
}

function dfsSteps(nodes: GNode[], edges: GEdge[], start: string): AlgoStep[] {
  const label = new Map(nodes.map((n) => [n.id, n.label]))
  const adj = buildAdj(nodes, edges)
  const steps: AlgoStep[] = []
  const visited: string[] = []
  const treeEdges: string[] = []
  const stack: string[] = [start]
  steps.push({ ...emptyStep('dfs', `Push start vertex ${label.get(start)} onto the stack — DFS dives deep before backtracking.`), current: start, queue: [{ id: start }] })
  while (stack.length > 0) {
    const u = stack.pop() as string
    if (visited.includes(u)) {
      steps.push({
        kind: 'dfs',
        current: u,
        visited: [...visited],
        queue: stack.map((q) => ({ id: q })),
        treeEdges: [...treeEdges],
        distances: {},
        settled: [],
        activeEdge: null,
        note: `${label.get(u)} is already visited — discard the stale stack entry.`,
      })
      continue
    }
    visited.push(u)
    const neighbors = adj.get(u) ?? []
    const fresh = neighbors.filter((nb) => !visited.includes(nb.v))
    for (let i = fresh.length - 1; i >= 0; i--) stack.push(fresh[i].v) // reverse so smallest label pops first
    for (const nb of fresh) treeEdges.push(nb.edgeId)
    steps.push({
      kind: 'dfs',
      current: u,
      visited: [...visited],
      queue: stack.map((q) => ({ id: q })),
      treeEdges: [...treeEdges],
      distances: {},
      settled: [],
      activeEdge: fresh.length > 0 ? fresh[fresh.length - 1].edgeId : null,
      note:
        fresh.length > 0
          ? `Visit ${label.get(u)} — push unvisited neighbours ${fresh.map((f) => label.get(f.v)).join(', ')} (top of stack first).`
          : `Visit ${label.get(u)} — dead end, the stack will backtrack.`,
    })
  }
  steps.push({ ...emptyStep('dfs', `DFS complete — visit order ${visited.map((v) => label.get(v)).join(' → ')}.`), visited: [...visited], treeEdges, queue: [] })
  return steps
}

function dijkstraSteps(nodes: GNode[], edges: GEdge[], start: string, weighted: boolean): AlgoStep[] {
  const label = new Map(nodes.map((n) => [n.id, n.label]))
  const adj = buildAdj(nodes, edges)
  const dist = new Map<string, number>(nodes.map((n) => [n.id, Infinity]))
  dist.set(start, 0)
  const settled: string[] = []
  const parentEdge = new Map<string, string>()
  const steps: AlgoStep[] = []
  const distObj = () => {
    const o: Record<string, number> = {}
    for (const [k, v] of dist.entries()) o[k] = v
    return o
  }
  const frontier = (): QueueItem[] =>
    nodes
      .filter((n) => !settled.includes(n.id) && (dist.get(n.id) ?? Infinity) < Infinity)
      .sort((a, b) => (dist.get(a.id) ?? 0) - (dist.get(b.id) ?? 0) || a.label - b.label)
      .map((n) => ({ id: n.id, tag: String(dist.get(n.id)) }))
  const snap = (note: string, current: string | null, activeEdge: string | null = null) => {
    steps.push({
      kind: 'dijkstra',
      current,
      visited: [...settled],
      queue: frontier(),
      treeEdges: [...parentEdge.values()],
      distances: distObj(),
      settled: [...settled],
      activeEdge,
      note,
    })
  }
  snap(`Source ${label.get(start)} gets distance 0; everyone else ∞.`, start)
  while (true) {
    let u: string | null = null
    let best = Infinity
    for (const n of nodes) {
      if (settled.includes(n.id)) continue
      const d = dist.get(n.id) ?? Infinity
      if (d < best) {
        best = d
        u = n.id
      }
    }
    if (u === null || best === Infinity) break
    settled.push(u)
    snap(`Settle ${label.get(u)} — smallest tentative distance ${best}${best === 0 ? '' : ''}. Its distance is now final.`, u)
    for (const nb of adj.get(u) ?? []) {
      if (settled.includes(nb.v)) continue
      const w = weighted ? nb.weight : 1
      const nd = (dist.get(u) ?? Infinity) + w
      const old = dist.get(nb.v) ?? Infinity
      if (nd < old) {
        dist.set(nb.v, nd)
        parentEdge.set(nb.v, nb.edgeId)
        snap(
          `Relax edge ${label.get(u)}–${label.get(nb.v)}${weighted ? ` (weight ${w})` : ''}: distance ${old === Infinity ? '∞' : old} → ${nd}.`,
          u,
          nb.edgeId
        )
      }
    }
  }
  const unreached = nodes.filter((n) => (dist.get(n.id) ?? Infinity) === Infinity)
  snap(
    unreached.length > 0
      ? `Dijkstra complete — ${unreached.map((n) => n.label).join(', ')} remain unreachable (∞).`
      : 'Dijkstra complete — every vertex settled with its shortest distance.',
    null
  )
  return steps
}

/* ------------------------------------------------------------------ */
/* main component                                                      */
/* ------------------------------------------------------------------ */

export default function GraphPlayground() {
  const [{ nodes, edges }, setGraph] = useState<{ nodes: GNode[]; edges: GEdge[] }>(() => buildPreset(HOUSE, true))
  const [mode, setMode] = useState<Mode>('move')
  const [weighted, setWeighted] = useState(false)
  const [connectFrom, setConnectFrom] = useState<string | null>(null)
  const [hoverNode, setHoverNode] = useState<string | null>(null)
  const [hoverEdge, setHoverEdge] = useState<string | null>(null)
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null)
  const drag = useRef<{ id: string; dx: number; dy: number } | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const [algo, setAlgo] = useState<Algo>('bfs')
  const [startId, setStartId] = useState<string>('')
  const [runData, setRunData] = useState<{ sig: string; steps: AlgoStep[] } | null>(null)
  const [stepIdx, setStepIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(5)
  const [eulerShown, setEulerShown] = useState(false)

  const nodeById = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes])
  const effectiveStart = startId && nodes.some((n) => n.id === startId) ? startId : nodes.length > 0 ? nodes[0].id : ''

  /* structural signature — dragging nodes never changes it */
  const structSig = useMemo(
    () => nodes.map((n) => n.id).join(',') + '|' + edges.map((e) => `${e.id}:${weighted ? e.weight : 1}`).join(','),
    [nodes, edges, weighted]
  )
  /* a run stays live only while the graph structure is unchanged */
  const steps = runData !== null && runData.sig === structSig ? runData.steps : null
  const step = steps && steps.length > 0 ? steps[Math.min(stepIdx, steps.length - 1)] : null

  /* auto-advance the player (all state updates happen inside timeouts) */
  const delay = 1500 - speed * 130
  useEffect(() => {
    if (!playing || !steps) return
    if (stepIdx >= steps.length - 1) {
      const t = setTimeout(() => setPlaying(false), 0)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setStepIdx((i) => Math.min(i + 1, steps.length - 1)), delay)
    return () => clearTimeout(t)
  }, [playing, steps, stepIdx, delay])

  /* escape cancels a pending connection */
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setConnectFrom(null)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  /* ---- coordinate mapping ---- */
  const toSvg = useCallback((clientX: number, clientY: number): { x: number; y: number } => {
    const el = svgRef.current
    if (!el) return { x: 0, y: 0 }
    const r = el.getBoundingClientRect()
    const s = W / Math.max(r.width, 1)
    return { x: (clientX - r.left) * s, y: (clientY - r.top) * s }
  }, [])

  /* ---- mutations ---- */
  const addNode = (x: number, y: number) => {
    setGraph((g) => {
      const label = g.nodes.reduce((m, n) => Math.max(m, n.label), 0) + 1
      return { ...g, nodes: [...g.nodes, { id: nid(), label, x: Math.max(35, Math.min(W - 35, x)), y: Math.max(35, Math.min(H - 35, y)) }] }
    })
  }

  const connect = (a: string, b: string) => {
    setGraph((g) => {
      const lo = a < b ? a : b
      const hi = a < b ? b : a
      const id = `e-${lo}-${hi}`
      if (g.edges.some((e) => e.id === id)) return g
      return { ...g, edges: [...g.edges, { id, a, b, weight: 1 + Math.floor(Math.random() * 4) }] }
    })
  }

  const deleteNode = (id: string) => {
    setGraph((g) => ({
      nodes: g.nodes.filter((n) => n.id !== id),
      edges: g.edges.filter((e) => e.a !== id && e.b !== id),
    }))
    if (connectFrom === id) setConnectFrom(null)
  }

  const cycleWeight = (id: string) => {
    setGraph((g) => ({ ...g, edges: g.edges.map((e) => (e.id === id ? { ...e, weight: (e.weight % 9) + 1 } : e)) }))
  }

  const applyPreset = (name: string) => {
    setConnectFrom(null)
    setEulerShown(false)
    if (name === 'random') setGraph(randomGraph())
    else if (name === 'petersen') setGraph(petersen())
    else if (name === 'house') setGraph(buildPreset(HOUSE, true))
    else if (name === 'k4') setGraph(buildPreset(K4, true))
    else if (name === 'k33') setGraph(buildPreset(K33, true))
    else if (name === 'c6') setGraph(buildPreset(CYCLE6, true))
  }

  const runAlgo = () => {
    if (nodes.length === 0) return
    const start = effectiveStart
    const generated =
      algo === 'bfs' ? bfsSteps(nodes, edges, start) : algo === 'dfs' ? dfsSteps(nodes, edges, start) : dijkstraSteps(nodes, edges, start, weighted)
    setRunData({ sig: structSig, steps: generated })
    setStepIdx(0)
    setPlaying(true)
  }

  /* ---- derived ---- */
  const degrees = useMemo(() => {
    const d = new Map(nodes.map((n) => [n.id, 0]))
    for (const e of edges) {
      d.set(e.a, (d.get(e.a) ?? 0) + 1)
      d.set(e.b, (d.get(e.b) ?? 0) + 1)
    }
    return d
  }, [nodes, edges])

  const euler = useMemo(() => {
    if (!eulerShown) return null
    const odd = nodes.filter((n) => (degrees.get(n.id) ?? 0) % 2 === 1)
    const nonIsolated = nodes.filter((n) => (degrees.get(n.id) ?? 0) > 0)
    let connected = nonIsolated.length <= 1
    if (nonIsolated.length > 1) {
      const adj = buildAdj(nodes, edges)
      const seen = new Set<string>([nonIsolated[0].id])
      const q = [nonIsolated[0].id]
      while (q.length > 0) {
        const u = q.pop() as string
        for (const nb of adj.get(u) ?? []) if (!seen.has(nb.v)) { seen.add(nb.v); q.push(nb.v) }
      }
      connected = nonIsolated.every((n) => seen.has(n.id))
    }
    if (!connected && nonIsolated.length > 1) return { verdict: 'none', detail: 'Graph is disconnected (ignoring isolated vertices) — no Euler tour is possible.' } as const
    if (odd.length === 0) return { verdict: 'circuit', detail: 'Every vertex has even degree and the graph is connected — a closed Euler circuit exists.' } as const
    if (odd.length === 2) return { verdict: 'path', detail: `Exactly two vertices (${odd.map((n) => n.label).join(' & ')}) have odd degree — an Euler path exists between them, but no circuit.` } as const
    return { verdict: 'none', detail: `${odd.length} vertices have odd degree — no Euler circuit (needs 0 odd) and no Euler path (needs exactly 2).` } as const
  }, [eulerShown, nodes, edges, degrees])

  /* ---- pointer handlers ---- */
  const onNodePointerDown = (e: React.PointerEvent, n: GNode) => {
    e.stopPropagation()
    if (mode === 'move') {
      const p = toSvg(e.clientX, e.clientY)
      drag.current = { id: n.id, dx: p.x - n.x, dy: p.y - n.y }
    }
  }

  const onNodeClick = (n: GNode) => {
    if (mode === 'connect') {
      if (connectFrom === null) setConnectFrom(n.id)
      else if (connectFrom === n.id) setConnectFrom(null)
      else {
        connect(connectFrom, n.id)
        setConnectFrom(null)
      }
    } else if (mode === 'delete') deleteNode(n.id)
  }

  const onEdgeClick = (e: React.MouseEvent, edge: GEdge) => {
    e.stopPropagation()
    if (mode === 'delete') setGraph((g) => ({ ...g, edges: g.edges.filter((x) => x.id !== edge.id) }))
    else if (weighted) cycleWeight(edge.id)
  }

  const onBackgroundClick = (e: React.MouseEvent) => {
    const p = toSvg(e.clientX, e.clientY)
    if (mode === 'add') addNode(p.x, p.y)
    else if (mode === 'connect') setConnectFrom(null)
  }

  const onSvgPointerMove = (e: React.PointerEvent) => {
    const p = toSvg(e.clientX, e.clientY)
    if (drag.current) {
      const d = drag.current
      setGraph((g) => ({
        ...g,
        nodes: g.nodes.map((n) =>
          n.id === d.id ? { ...n, x: Math.max(35, Math.min(W - 35, p.x - d.dx)), y: Math.max(35, Math.min(H - 35, p.y - d.dy)) } : n
        ),
      }))
    } else if (connectFrom) {
      setCursor(p)
    }
  }

  const endDrag = () => {
    drag.current = null
  }

  /* ---- render helpers ---- */
  const visitedIndex = (id: string): number => (step ? step.visited.indexOf(id) : -1)
  const treeSet = useMemo(() => new Set(step ? step.treeEdges : []), [step])
  const settledSet = useMemo(() => new Set(step ? step.settled : []), [step])
  const queueIds = useMemo(() => new Set(step ? step.queue.map((q) => q.id) : []), [step])

  const MODES: { id: Mode; label: string; icon: typeof Move }[] = [
    { id: 'move', label: 'Move', icon: Move },
    { id: 'add', label: 'Add node', icon: CirclePlus },
    { id: 'connect', label: 'Connect', icon: Link2 },
    { id: 'delete', label: 'Delete', icon: Trash2 },
  ]

  return (
    <div className="flex flex-col gap-4">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <Network className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Graph Playground</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Build a graph by dragging, adding and connecting vertices — then animate BFS, DFS and Dijkstra across it.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">|V| = {nodes.length}</span>
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">|E| = {edges.length}</span>
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">
            deg: {nodes.length > 0 ? degrees.get(nodes[0].id) : 0}
            {nodes.slice(1).map((n) => `,${degrees.get(n.id) ?? 0}`)}
          </span>
        </div>
      </div>

      {/* toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex overflow-hidden rounded-lg border border-border">
          {MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setMode(m.id)
                setConnectFrom(null)
              }}
              className={
                'flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition ' +
                (mode === m.id ? 'bg-emerald-600 text-white' : 'bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground')
              }
            >
              <m.icon className="h-3.5 w-3.5" />
              {m.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5">
          <Weight className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Weighted</span>
          <Switch checked={weighted} onCheckedChange={setWeighted} />
        </div>

        <div className="min-w-[150px]">
          <Select onValueChange={applyPreset}>
            <SelectTrigger size="sm" className="h-9 bg-card text-xs">
              <SelectValue placeholder="Load preset" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="k4">Complete K₄</SelectItem>
              <SelectItem value="k33">Complete bipartite K₃,₃</SelectItem>
              <SelectItem value="petersen">Petersen</SelectItem>
              <SelectItem value="c6">Cycle C₆</SelectItem>
              <SelectItem value="random">Random</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-1 xl:grid-cols-12">
        {/* canvas */}
        <div className="overflow-hidden rounded-xl border border-border bg-card xl:col-span-7 2xl:col-span-8">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Canvas</span>
            <span className="font-mono text-[11px] text-muted-foreground">
              {mode === 'move' && 'drag vertices to rearrange'}
              {mode === 'add' && 'click empty space to place a vertex'}
              {mode === 'connect' && (connectFrom ? 'now click a second vertex (Esc to cancel)' : 'click the first vertex')}
              {mode === 'delete' && 'click a vertex or edge to remove it'}
              {mode === 'move' && weighted ? ' · click an edge to cycle its weight' : weighted ? ' · click an edge to cycle its weight' : ''}
            </span>
          </div>
          <div
            className="select-none p-2"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(82,82,91,0.25) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          >
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full touch-none"
              role="img"
              aria-label="graph canvas"
              onPointerMove={onSvgPointerMove}
              onPointerUp={endDrag}
              onPointerLeave={() => {
                endDrag()
                setCursor(null)
              }}
              style={{ cursor: mode === 'add' || mode === 'connect' ? 'crosshair' : 'default' }}
            >
              <defs>
                <filter id="glow-emerald" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="6" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <rect x={0} y={0} width={W} height={H} fill="transparent" onClick={onBackgroundClick} />

              {/* edges */}
              {edges.map((e) => {
                const a = nodeById.get(e.a)
                const b = nodeById.get(e.b)
                if (!a || !b) return null
                const dx = b.x - a.x
                const dy = b.y - a.y
                const len = Math.hypot(dx, dy) || 1
                const ux = dx / len
                const uy = dy / len
                const sx = a.x + ux * NR
                const sy = a.y + uy * NR
                const tx = b.x - ux * NR
                const ty = b.y - uy * NR
                const inTree = treeSet.has(e.id)
                const isActive = step?.activeEdge === e.id
                const hi = hoverEdge === e.id
                const dim = step ? !inTree : false
                return (
                  <g key={e.id}>
                    <line
                      x1={sx}
                      y1={sy}
                      x2={tx}
                      y2={ty}
                      stroke={isActive ? '#fbbf24' : inTree ? '#10b981' : hi ? '#f43f5e' : '#52525b'}
                      strokeWidth={inTree ? 4.5 : isActive ? 4 : 2.5}
                      strokeOpacity={dim ? 0.25 : 1}
                      className="transition-all"
                    />
                    {weighted && (
                      <text
                        x={(sx + tx) / 2 - uy * 13}
                        y={(sy + ty) / 2 + ux * 13 + 4}
                        textAnchor="middle"
                        fontSize={14}
                        fontWeight={700}
                        className="fill-amber-400 font-mono"
                        stroke="#09090b"
                        strokeWidth={4}
                        paintOrder="stroke"
                        style={{ pointerEvents: 'none' }}
                      >
                        {e.weight}
                      </text>
                    )}
                    <line
                      x1={sx}
                      y1={sy}
                      x2={tx}
                      y2={ty}
                      stroke="transparent"
                      strokeWidth={18}
                      style={{ cursor: mode === 'delete' || weighted ? 'pointer' : 'default' }}
                      onMouseEnter={() => setHoverEdge(e.id)}
                      onMouseLeave={() => setHoverEdge(null)}
                      onClick={(ev) => onEdgeClick(ev, e)}
                    />
                  </g>
                )
              })}

              {/* ghost connection line */}
              {connectFrom && cursor && (() => {
                const a = nodeById.get(connectFrom)
                if (!a) return null
                return (
                  <motion.line
                    x1={a.x}
                    y1={a.y}
                    x2={cursor.x}
                    y2={cursor.y}
                    stroke="#fbbf24"
                    strokeWidth={2}
                    strokeDasharray="7 7"
                    initial={false}
                    animate={{ strokeDashoffset: [0, -28] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                )
              })()}

              {/* nodes */}
              {nodes.map((n) => {
                const vIdx = visitedIndex(n.id)
                const visited = vIdx >= 0
                const isCurrent = step?.current === n.id
                const isSettled = settledSet.has(n.id)
                const inQueue = queueIds.has(n.id)
                const isConnect = connectFrom === n.id
                const hi = hoverNode === n.id
                const dist = step && step.kind === 'dijkstra' ? step.distances[n.id] : undefined
                return (
                  <g key={n.id} transform={`translate(${n.x},${n.y})`}>
                    {isCurrent && (
                      <motion.circle
                        r={NR}
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth={2.5}
                        animate={{ r: [NR + 2, NR + 26], opacity: [0.9, 0] }}
                        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}
                    <circle
                      r={NR}
                      className="transition-colors"
                      fill={isSettled || (visited && step?.kind !== 'dijkstra') ? 'rgba(16,185,129,0.22)' : 'var(--color-card)'}
                      stroke={isSettled ? '#10b981' : visited ? '#10b981' : isCurrent ? '#fbbf24' : isConnect ? '#fbbf24' : hi && mode === 'delete' ? '#f43f5e' : '#71717a'}
                      strokeWidth={isSettled ? 3 : 2}
                      filter={isSettled ? 'url(#glow-emerald)' : undefined}
                    />
                    <text
                      y={5}
                      textAnchor="middle"
                      fontSize={15}
                      fontWeight={700}
                      className="fill-zinc-100 font-mono"
                      style={{ pointerEvents: 'none', userSelect: 'none' }}
                    >
                      {n.label}
                    </text>
                    {inQueue && !isCurrent && (
                      <circle r={NR + 5} fill="none" stroke="#fbbf24" strokeWidth={1.5} strokeDasharray="4 4" opacity={0.8} style={{ pointerEvents: 'none' }} />
                    )}
                    {vIdx >= 0 && (
                      <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 500, damping: 25 }}>
                        <circle cx={NR - 4} cy={-NR + 4} r={10} fill="#fbbf24" />
                        <text x={NR - 4} y={-NR + 8} textAnchor="middle" fontSize={11} fontWeight={800} className="fill-zinc-950 font-mono" style={{ pointerEvents: 'none' }}>
                          {vIdx + 1}
                        </text>
                      </motion.g>
                    )}
                    {dist !== undefined && (
                      <text
                        y={NR + 18}
                        textAnchor="middle"
                        fontSize={13}
                        fontWeight={700}
                        className={isSettled ? 'fill-emerald-400 font-mono' : 'fill-amber-400 font-mono'}
                        stroke="#09090b"
                        strokeWidth={4}
                        paintOrder="stroke"
                        style={{ pointerEvents: 'none' }}
                      >
                        {dist === Infinity || dist === undefined ? '∞' : dist}
                      </text>
                    )}
                    <circle
                      r={NR + 6}
                      fill="transparent"
                      style={{
                        cursor: mode === 'move' ? 'grab' : mode === 'delete' ? 'pointer' : 'crosshair',
                      }}
                      onPointerDown={(e) => onNodePointerDown(e, n)}
                      onClick={() => onNodeClick(n)}
                      onMouseEnter={() => setHoverNode(n.id)}
                      onMouseLeave={() => setHoverNode(null)}
                    />
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col gap-4 xl:col-span-5 2xl:col-span-4">
          {/* algorithm panel */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center gap-2">
              <Route className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Algorithms</span>
            </div>
            <div className="flex overflow-hidden rounded-lg border border-border">
              {([
                { id: 'bfs', label: 'BFS' },
                { id: 'dfs', label: 'DFS' },
                { id: 'dijkstra', label: 'Dijkstra' },
              ] as { id: Algo; label: string }[]).map((a) => (
                <button
                  key={a.id}
                  onClick={() => setAlgo(a.id)}
                  className={
                    'flex-1 px-3 py-1.5 font-mono text-xs font-semibold transition ' +
                    (algo === a.id ? 'bg-emerald-600 text-white' : 'bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground')
                  }
                >
                  {a.label}
                </button>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <div className="min-w-[120px] flex-1">
                <Select value={effectiveStart} onValueChange={setStartId}>
                  <SelectTrigger size="sm" className="h-9 bg-card text-xs">
                    <SelectValue placeholder="start" />
                  </SelectTrigger>
                  <SelectContent>
                    {nodes.map((n) => (
                      <SelectItem key={n.id} value={n.id}>
                        start at {n.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500" onClick={runAlgo} disabled={nodes.length === 0}>
                <Play className="h-3.5 w-3.5" />
                Run
              </Button>
              {steps && (
                <Button size="sm" variant="outline" onClick={() => { setRunData(null); setStepIdx(0); setPlaying(false) }}>
                  <RotateCcw className="h-3.5 w-3.5" />
                </Button>
              )}
            </div>

            {algo === 'dijkstra' && (
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                {weighted ? 'Edge weights are used as-is.' : 'Weights are off — every edge counts as 1.'} Unreachable vertices stay ∞.
              </p>
            )}

            {steps && step && (
              <div className="mt-3 space-y-3 border-t border-border pt-3">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0"
                      disabled={stepIdx <= 0}
                      onClick={() => { setPlaying(false); setStepIdx((i) => Math.max(0, i - 1)) }}
                    >
                      <SkipBack className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      size="sm"
                      className="h-8 w-8 bg-emerald-600 p-0 hover:bg-emerald-500"
                      onClick={() => {
                        if (steps !== null && stepIdx >= steps.length - 1) {
                          setStepIdx(0)
                          setPlaying(true)
                        } else {
                          setPlaying(!playing)
                        }
                      }}
                    >
                      {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0"
                      disabled={stepIdx >= steps.length - 1}
                      onClick={() => { setPlaying(false); setStepIdx((i) => Math.min(steps.length - 1, i + 1)) }}
                    >
                      <SkipForward className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    step {stepIdx + 1}/{steps.length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  <Slider value={[speed]} onValueChange={(v) => setSpeed(v[0] ?? 5)} min={1} max={10} step={1} className="flex-1" />
                </div>
                <motion.div key={stepIdx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="rounded-md bg-muted/50 px-3 py-2 text-xs leading-relaxed text-foreground">
                  {step.note}
                </motion.div>
                <div>
                  <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {step.kind === 'bfs' ? 'Queue (FIFO)' : step.kind === 'dfs' ? 'Stack (LIFO)' : 'Frontier by dist'}
                  </div>
                  <div className="flex min-h-8 flex-wrap items-center gap-1.5">
                    <AnimatePresence>
                      {step.queue.map((q) => (
                        <motion.span
                          key={q.id}
                          layout
                          initial={{ opacity: 0, scale: 0.6 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.6 }}
                          className="rounded-md border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono text-xs text-amber-300"
                        >
                          {nodeById.get(q.id)?.label}
                          {q.tag !== undefined && <span className="ml-1 text-[10px] text-amber-500/70">:{q.tag}</span>}
                        </motion.span>
                      ))}
                    </AnimatePresence>
                    {step.queue.length === 0 && <span className="font-mono text-xs text-muted-foreground">empty</span>}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* dijkstra distances */}
          {steps && step && step.kind === 'dijkstra' && (
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="border-b border-border px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Distances from {nodeById.get(effectiveStart)?.label ?? '?'}
              </div>
              <div className="max-h-48 overflow-auto">
                <table className="w-full font-mono text-xs">
                  <thead className="sticky top-0 bg-muted/80 backdrop-blur">
                    <tr className="text-left text-muted-foreground">
                      <th className="px-4 py-2 font-medium">vertex</th>
                      <th className="px-4 py-2 font-medium">dist</th>
                      <th className="px-4 py-2 font-medium">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nodes.map((n) => {
                      const d = step.distances[n.id]
                      const set = settledSet.has(n.id)
                      return (
                        <tr key={n.id} className="border-t border-border/50">
                          <td className="px-4 py-1.5 text-foreground">{n.label}</td>
                          <td className={'px-4 py-1.5 ' + (set ? 'text-emerald-400' : 'text-amber-400')}>
                            {d === undefined || d === Infinity ? '∞' : d}
                          </td>
                          <td className="px-4 py-1.5 text-muted-foreground">{set ? 'settled' : d !== undefined && d < Infinity ? 'tentative' : '—'}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* euler */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Box className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Euler tour check</span>
              </div>
              <Button size="sm" variant={eulerShown ? 'default' : 'outline'} className={eulerShown ? 'bg-emerald-600 hover:bg-emerald-500' : ''} onClick={() => setEulerShown((v) => !v)}>
                <Sparkles className="h-3.5 w-3.5" />
                {eulerShown ? 'Refresh' : 'Check'}
              </Button>
            </div>
            <AnimatePresence mode="wait">
              {euler && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} key={euler.verdict}>
                  <div
                    className={
                      'rounded-lg border px-3 py-2 text-xs font-semibold ' +
                      (euler.verdict === 'circuit'
                        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                        : euler.verdict === 'path'
                          ? 'border-amber-500/40 bg-amber-500/10 text-amber-400'
                          : 'border-rose-500/40 bg-rose-500/10 text-rose-400')
                    }
                  >
                    {euler.verdict === 'circuit' ? 'Euler circuit exists — all degrees even' : euler.verdict === 'path' ? 'Euler path exists — exactly 2 odd vertices' : 'No Euler circuit or path'}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{euler.detail}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {nodes.map((n) => {
                const d = degrees.get(n.id) ?? 0
                return (
                  <span
                    key={n.id}
                    className={
                      'rounded-md border px-2 py-0.5 font-mono text-xs ' +
                      (d % 2 === 0 ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400' : 'border-rose-500/30 bg-rose-500/5 text-rose-400')
                    }
                  >
                    {n.label}: {d}
                  </span>
                )
              })}
              {nodes.length === 0 && <span className="text-xs text-muted-foreground">No vertices yet.</span>}
            </div>
          </div>
        </div>
      </div>

      {/* try this */}
      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> load the Petersen preset and run BFS from vertex 1 — watch the queue grow one
          level at a time. Then turn on weights, pick Dijkstra, and see distances relax frontier by frontier. Finally hit &ldquo;Check&rdquo; on the
          Euler panel: the Petersen graph is 3-regular with 10 odd-degree vertices — no Euler tour, but the House graph hides a perfect circuit.
        </p>
      </div>
    </div>
  )
}
