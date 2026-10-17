'use client'

// ============================================================================
// X1 Pro — KNOWLEDGE GRAPH EXPLORER
// A force-directed map of the twin's skill universe. Nodes are evidenced
// skills (colour = mastery, radius = evidence weight), edges are real
// prerequisite relations, and untouched predecessors of weak skills appear
// as dashed ghost nodes — the gaps you must cross. Physics is a tiny
// hand-rolled simulation (repulsion + springs + centering) driven by
// requestAnimationFrame; positions live in refs and are painted straight
// onto the DOM so React never re-renders per frame.
// ============================================================================

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ArrowRight, Crosshair, Maximize2, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { LIBRARY_CHAPTERS, LIBRARY_SECTIONS } from '@/data/library'
import type { TwinSkill, TwinSnapshot } from '@/lib/twin'

// ------------------------------ prerequisite index ---------------------------
// Mirrors skillPredecessor() from @/lib/twin, rebuilt client-side from the
// pure library metadata (twin.ts itself imports prisma — server only).

const PRED: Map<string, string | null> = (() => {
  const secIdx = new Map(LIBRARY_SECTIONS.map((s, i) => [s.id, i]))
  const chIdx = new Map(LIBRARY_CHAPTERS.map((c, i) => [c.id, i]))
  const bookOf = new Map(LIBRARY_CHAPTERS.map((c) => [c.id, c.bookId]))
  const lastSecOf = new Map<string, string>()
  for (let i = LIBRARY_SECTIONS.length - 1; i >= 0; i--) {
    const s = LIBRARY_SECTIONS[i]
    if (!lastSecOf.has(s.chapterId)) lastSecOf.set(s.chapterId, s.id)
  }
  const m = new Map<string, string | null>()
  for (const s of LIBRARY_SECTIONS) {
    const idx = secIdx.get(s.id) ?? -1
    let pred: string | null = null
    if (idx > 0) {
      const prev = LIBRARY_SECTIONS[idx - 1]
      if (prev.chapterId === s.chapterId) pred = prev.id
    }
    if (!pred) {
      const ci = chIdx.get(s.chapterId) ?? -1
      if (ci > 0) {
        const prevCh = LIBRARY_CHAPTERS[ci - 1]
        if (prevCh.bookId === bookOf.get(s.chapterId)) pred = lastSecOf.get(prevCh.id) ?? null
      }
    }
    m.set(s.id, pred)
  }
  return m
})()

const SEC_META = new Map(LIBRARY_SECTIONS.map((s) => [s.id, s]))

/** prerequisite chain walked back from `key` — immediate predecessor first */
function predChain(key: string, max: number): string[] {
  const out: string[] = []
  let cur: string | null = key
  while (out.length < max && cur) {
    cur = PRED.get(cur) ?? null
    if (!cur) break
    out.push(cur)
  }
  return out
}

// ------------------------------ palette + helpers ----------------------------

const GOLDEN = Math.PI * (3 - Math.sqrt(5))
const ROSE = '#fb7185'
const AMBER = '#fbbf24'
const EMERALD = '#34d399'
const SLATE = '#8b9a92' // untouched / ghost

type RGB = [number, number, number]
const C_ROSE: RGB = [251, 113, 133]
const C_AMBER: RGB = [251, 191, 36]
const C_EMERALD: RGB = [52, 211, 153]

function mix(a: RGB, b: RGB, t: number): RGB {
  const k = Math.min(1, Math.max(0, t))
  return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k]
}
/** mastery → node colour: rose → amber → emerald (readable in both themes) */
function masteryColor(p: number): string {
  const c =
    p < 0.3 ? C_ROSE : p < 0.5 ? mix(C_ROSE, C_AMBER, (p - 0.3) / 0.2) : p < 0.75 ? mix(C_AMBER, C_EMERALD, (p - 0.5) / 0.25) : C_EMERALD
  return `rgb(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])})`
}

/** deterministic 0..1 hash — stable jitter without Math.random */
function hash01(str: string): number {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return ((h >>> 0) % 10007) / 10007
}

function timeAgo(iso: string | null): string {
  if (!iso) return 'never'
  const ms = Date.now() - new Date(iso).getTime()
  if (Number.isNaN(ms)) return '—'
  const min = ms / 60_000
  if (min < 1) return 'just now'
  if (min < 60) return `${Math.round(min)}m ago`
  const hrs = min / 60
  if (hrs < 24) return `${Math.round(hrs)}h ago`
  const days = hrs / 24
  if (days < 45) return `${Math.round(days)}d ago`
  return new Date(iso).toLocaleDateString()
}

// ------------------------------ graph model ----------------------------------

const W = 1000 // simulation world width
const H = 680 // simulation world height
const MAX_NODES = 300 // hard cap on evidenced nodes
const MAX_GHOSTS = 36 // untouched-prerequisite stubs for the weakest skills

interface GNode {
  key: string
  skill: TwinSkill | null // null → ghost (untouched prerequisite)
  x: number
  y: number
  vx: number
  vy: number
  r: number
  color: string
  ghost: boolean
  weakFocus: boolean
  labeled: boolean
}
interface GEdge {
  a: number // predecessor index
  b: number // successor index
  ghost: boolean // touches an untouched prerequisite
}

interface Graph {
  nodes: GNode[]
  edges: GEdge[]
  nodeByKey: Map<string, number>
  capped: number // how many evidenced skills were dropped by the cap
}

function buildGraph(skills: TwinSkill[], weakestMode: boolean): Graph {
  // cap by twin relevance: urgency + evidence weight
  let visible = skills
  let capped = 0
  if (skills.length > MAX_NODES) {
    visible = [...skills]
      .sort((a, b) => b.urgency + Math.min(1, b.evidenceCount / 20) - (a.urgency + Math.min(1, a.evidenceCount / 20)))
      .slice(0, MAX_NODES)
    capped = skills.length - MAX_NODES
  }

  // subject clusters on a golden ring → deterministic, decent first paint
  const subjectIds = [...new Set(visible.map((s) => s.subjectId))]
  const cluster = new Map<string, { cx: number; cy: number }>()
  const ringR = Math.min(380, Math.max(120, 110 + subjectIds.length * 22))
  subjectIds.forEach((sid, i) => {
    const a = i * GOLDEN + 0.6
    cluster.set(sid, { cx: W / 2 + Math.cos(a) * ringR, cy: H / 2 + Math.sin(a) * ringR * 0.72 })
  })
  const perSubject = new Map<string, number>()
  for (const s of visible) perSubject.set(s.subjectId, (perSubject.get(s.subjectId) ?? 0) + 1)

  // weakest 10% of visible evidenced nodes get the pulsing focus ring
  const weakCut = Math.max(1, Math.ceil(visible.length * 0.1))
  const weakKeys = new Set(
    [...visible]
      .sort((a, b) => a.p - b.p)
      .slice(0, weakCut)
      .map((s) => s.key)
  )

  const nodes: GNode[] = []
  const nodeByKey = new Map<string, number>()
  const seen = new Set<string>()
  const counters = new Map<string, number>()

  const spawn = (key: string, skill: TwinSkill | null, x: number, y: number, r: number, color: string, ghost: boolean): number => {
    const node: GNode = {
      key,
      skill,
      x,
      y,
      vx: 0,
      vy: 0,
      r,
      color,
      ghost,
      weakFocus: !ghost && weakestMode && weakKeys.has(key),
      labeled: false,
    }
    nodes.push(node)
    nodeByKey.set(key, nodes.length - 1)
    seen.add(key)
    return nodes.length - 1
  }

  for (const s of visible) {
    const c = cluster.get(s.subjectId) ?? { cx: W / 2, cy: H / 2 }
    const j = counters.get(s.subjectId) ?? 0
    counters.set(s.subjectId, j + 1)
    const a = j * GOLDEN + 1.3
    const r = 9 + 6.2 * Math.sqrt(j + 0.4)
    spawn(
      s.key,
      s,
      c.cx + Math.cos(a) * r,
      c.cy + Math.sin(a) * r,
      4.5 + Math.min(9, Math.sqrt(Math.max(1, s.evidenceCount)) * 1.6),
      masteryColor(s.p),
      false
    )
  }

  // ghost predecessors for the weakest evidenced nodes — the frontier to cross
  let ghosts = 0
  const weakest = [...visible].sort((a, b) => a.p - b.p).slice(0, 26)
  for (const s of weakest) {
    if (ghosts >= MAX_GHOSTS) break
    const pred = PRED.get(s.key)
    if (!pred || seen.has(pred)) continue
    const succ = nodes[nodeByKey.get(s.key) ?? -1]
    if (!succ) continue
    const h = hash01(pred)
    spawn(
      pred,
      null,
      succ.x - 26 - h * 30,
      succ.y - 20 + h * 40,
      3.4,
      SLATE,
      true
    )
    ghosts++
  }

  // labels for the heaviest-evidence nodes so the map is readable at a glance
  const labeled = [...nodes]
    .filter((n) => !n.ghost)
    .sort((a, b) => (b.skill?.evidenceCount ?? 0) - (a.skill?.evidenceCount ?? 0))
    .slice(0, 8)
  for (const n of labeled) n.labeled = true

  // prerequisite edges between visible nodes (ghost edges dashed)
  const edges: GEdge[] = []
  for (const [key, idx] of nodeByKey) {
    const pred = PRED.get(key)
    if (!pred) continue
    const a = nodeByKey.get(pred)
    if (a === undefined) continue
    edges.push({ a, b: idx, ghost: nodes[a].ghost || nodes[idx].ghost })
  }

  return { nodes, edges, nodeByKey, capped }
}

// ------------------------------ physics ---------------------------------------
// ~40 lines: pairwise repulsion with collision resolve, spring edges toward a
// rest length, weak centering, velocity damping, alpha cooling to a stop.

/** restore remembered positions of surviving nodes — effects only */
function restorePositions(nodes: GNode[], mem: Map<string, { x: number; y: number }>): void {
  if (!mem.size) return
  for (const nd of nodes) {
    const p = mem.get(nd.key)
    if (p) {
      nd.x = p.x
      nd.y = p.y
    }
  }
}

function step(sim: { nodes: GNode[]; edges: GEdge[]; alpha: number }) {
  const { nodes, edges } = sim
  const n = nodes.length
  const REP = 3000
  const SPRING = 0.014
  const REST = 52
  const CENTER = 0.012
  const DAMP = 0.85

  for (let i = 0; i < n; i++) {
    const a = nodes[i]
    for (let j = i + 1; j < n; j++) {
      const b = nodes[j]
      let dx = a.x - b.x
      let dy = a.y - b.y
      let d2 = dx * dx + dy * dy
      if (d2 > 100_000) continue // distance cutoff keeps n² affordable
      if (d2 < 0.01) {
        dx = 0.5 - hash01(a.key + b.key)
        dy = hash01(b.key + a.key) - 0.5
        d2 = 0.01
      }
      const d = Math.sqrt(d2)
      const minD = a.r + b.r + 12
      let f = REP / d2
      if (d < minD) f += (minD - d) * 0.09
      const fx = (dx / d) * f
      const fy = (dy / d) * f
      a.vx += fx
      a.vy += fy
      b.vx -= fx
      b.vy -= fy
    }
  }
  for (const e of edges) {
    const a = nodes[e.a]
    const b = nodes[e.b]
    const dx = b.x - a.x
    const dy = b.y - a.y
    const d = Math.max(1, Math.hypot(dx, dy))
    const f = (d - REST) * SPRING
    const fx = (dx / d) * f
    const fy = (dy / d) * f
    a.vx += fx
    a.vy += fy
    b.vx -= fx
    b.vy -= fy
  }
  for (const nd of nodes) {
    nd.vx += (W / 2 - nd.x) * CENTER
    nd.vy += (H / 2 - nd.y) * CENTER
    nd.vx *= DAMP
    nd.vy *= DAMP
    nd.x += Math.max(-16, Math.min(16, nd.vx))
    nd.y += Math.max(-16, Math.min(16, nd.vy))
    nd.x = Math.min(W - 10, Math.max(10, nd.x))
    nd.y = Math.min(H - 10, Math.max(10, nd.y))
  }
  sim.alpha *= 0.994
}

// ------------------------------ coordinate maps -------------------------------

interface View {
  x: number
  y: number
  k: number
}

function svgPoint(svg: SVGSVGElement, clientX: number, clientY: number): { x: number; y: number } {
  const rect = svg.getBoundingClientRect()
  const scale = Math.min(rect.width / W, rect.height / H) || 1
  const ox = (rect.width - W * scale) / 2
  const oy = (rect.height - H * scale) / 2
  return { x: (clientX - rect.left - ox) / scale, y: (clientY - rect.top - oy) / scale }
}

// ------------------------------ the component ---------------------------------

export interface TwinGraphProps {
  snapshot: TwinSnapshot
  onSelectSkill?: (skillKey: string) => void
}

export function TwinGraph({ snapshot, onSelectSkill }: TwinGraphProps) {
  const reduced = useReducedMotion() ?? false
  const wrapRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const worldRef = useRef<SVGGElement>(null)
  const solidPathRef = useRef<SVGPathElement>(null)
  const ghostPathRef = useRef<SVGPathElement>(null)
  const hiPathRef = useRef<SVGPathElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const nodeEls = useRef(new Map<string, SVGGElement>())
  const viewRef = useRef<View>({ x: 0, y: 0, k: 1 })
  const posMemory = useRef(new Map<string, { x: number; y: number }>())
  const hoverKeyRef = useRef<string | null>(null)
  const selectedRef = useRef<string | null>(null)

  const [subjectFilter, setSubjectFilter] = useState('all')
  const [range, setRange] = useState<[number, number]>([0, 100])
  const [weakestMode, setWeakestMode] = useState(false)
  const [hoverKey, setHoverKey] = useState<string | null>(null)
  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  // subjects actually present in the twin's skill set
  const subjectsInPlay = useMemo(() => {
    const map = new Map<string, { id: string; name: string; count: number; accent: string }>()
    for (const s of snapshot.skills) {
      const cur = map.get(s.subjectId)
      if (cur) cur.count++
      else map.set(s.subjectId, { id: s.subjectId, name: s.subjectName, count: 1, accent: '' })
    }
    const accents = new Map(snapshot.subjects.map((sub) => [sub.subjectId, sub.accent]))
    return [...map.values()]
      .map((s) => ({ ...s, accent: accents.get(s.id) ?? EMERALD }))
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [snapshot])

  const filtered = useMemo(() => {
    const [lo, hi] = range
    return snapshot.skills.filter(
      (s) =>
        (subjectFilter === 'all' || s.subjectId === subjectFilter) &&
        s.p * 100 >= lo - 0.001 &&
        s.p * 100 <= hi + 0.001
    )
  }, [snapshot, subjectFilter, range])

  const graph = useMemo(() => buildGraph(filtered, weakestMode), [filtered, weakestMode])
  const graphKey = `${subjectFilter}:${range[0]}-${range[1]}:${weakestMode}:${graph.nodes.length}`

  const stats = useMemo(() => {
    const evidenced = graph.nodes.filter((n) => !n.ghost)
    const avg = evidenced.length ? evidenced.reduce((a, n) => a + (n.skill?.p ?? 0), 0) / evidenced.length : 0
    return {
      nodes: graph.nodes.length,
      evidenced: evidenced.length,
      ghosts: graph.nodes.length - evidenced.length,
      edges: graph.edges.length,
      avg,
    }
  }, [graph])

  const skillByKey = useMemo(() => {
    const m = new Map<string, TwinSkill>()
    for (const n of graph.nodes) if (n.skill) m.set(n.key, n.skill)
    return m
  }, [graph])

  const hoverInfo = useMemo(() => {
    if (!hoverKey) return null
    const node = graph.nodes[graph.nodeByKey.get(hoverKey) ?? -1]
    if (!node) return null
    if (node.skill) {
      const s = node.skill
      return {
        key: s.key,
        title: `§${s.number} ${s.title}`,
        sub: `${s.chapterTitle} · ${s.subjectName}`,
        mastery: Math.round(s.p * 100),
        evidence: s.evidenceCount,
        last: timeAgo(s.lastEvidenceAt),
        ghost: false,
      }
    }
    const meta = SEC_META.get(node.key)
    return {
      key: node.key,
      title: `§${meta?.number ?? '—'} ${meta?.title ?? node.key}`,
      sub: 'prerequisite · not touched yet',
      mastery: null as number | null,
      evidence: 0,
      last: 'never',
      ghost: true,
    }
  }, [hoverKey, graph])

  const selectedSkill = selectedKey ? skillByKey.get(selectedKey) ?? null : null
  const selectedMeta = selectedKey && !selectedSkill ? SEC_META.get(selectedKey) ?? null : null
  const selectedSubject = selectedSkill
    ? snapshot.subjects.find((sub) => sub.subjectId === selectedSkill.subjectId)
    : undefined

  // ---------------------------- painting (imperative) --------------------------

  const positionTooltip = useCallback(() => {
    const tip = tooltipRef.current
    const svg = svgRef.current
    const wrap = wrapRef.current
    const key = hoverKeyRef.current
    if (!tip || !svg || !wrap || !key) return
    const node = graph.nodes[graph.nodeByKey.get(key) ?? -1]
    if (!node) return
    const v = viewRef.current
    const rect = svg.getBoundingClientRect()
    const scale = Math.min(rect.width / W, rect.height / H) || 1
    const ox = (rect.width - W * scale) / 2
    const oy = (rect.height - H * scale) / 2
    const sx = (node.x * v.k + v.x) * scale + ox + rect.left
    const sy = (node.y * v.k + v.y) * scale + oy + rect.top
    const wr = wrap.getBoundingClientRect()
    const left = Math.min(Math.max(sx - wr.left, 96), Math.max(96, wr.width - 96))
    const flip = sy - wr.top < 130
    tip.style.left = `${left}px`
    tip.style.top = `${sy - wr.top + (flip ? 16 : -16)}px`
    tip.style.transform = flip ? 'translate(-50%, 0)' : 'translate(-50%, -100%)'
  }, [graph])

  const applyView = useCallback(() => {
    const world = worldRef.current
    if (!world) return
    const v = viewRef.current
    world.setAttribute('transform', `translate(${v.x.toFixed(2)} ${v.y.toFixed(2)}) scale(${v.k.toFixed(4)})`)
    positionTooltip()
  }, [positionTooltip])

  const paint = useCallback(() => {
    const { nodes, edges } = graph
    for (const nd of nodes) {
      const el = nodeEls.current.get(nd.key)
      if (el) el.setAttribute('transform', `translate(${nd.x.toFixed(2)} ${nd.y.toFixed(2)})`)
      posMemory.current.set(nd.key, { x: nd.x, y: nd.y })
    }
    const solid: string[] = []
    const ghost: string[] = []
    for (const e of edges) {
      const a = nodes[e.a]
      const b = nodes[e.b]
      if (!a || !b) continue
      const seg = `M${a.x.toFixed(1)},${a.y.toFixed(1)}L${b.x.toFixed(1)},${b.y.toFixed(1)}`
      ;(e.ghost ? ghost : solid).push(seg)
    }
    solidPathRef.current?.setAttribute('d', solid.join(''))
    ghostPathRef.current?.setAttribute('d', ghost.join(''))
    // highlight the selected node's prerequisite chain
    const sel = selectedRef.current
    const hi: string[] = []
    if (sel) {
      const chain = new Set([sel, ...predChain(sel, 6)])
      for (const e of edges) {
        if (chain.has(nodes[e.a].key) && chain.has(nodes[e.b].key)) {
          const a = nodes[e.a]
          const b = nodes[e.b]
          hi.push(`M${a.x.toFixed(1)},${a.y.toFixed(1)}L${b.x.toFixed(1)},${b.y.toFixed(1)}`)
        }
      }
    }
    hiPathRef.current?.setAttribute('d', hi.join(''))
    applyView()
  }, [graph, applyView])

  // simulation loop — reheats whenever the graph is rebuilt
  useEffect(() => {
    // restore positions of surviving nodes so filter changes feel continuous
    // (ref access + mutation are effect-only — never during render)
    restorePositions(graph.nodes, posMemory.current)
    const sim = { nodes: graph.nodes, edges: graph.edges, alpha: 1 }
    if (reduced) {
      for (let i = 0; i < 260; i++) step(sim)
      paint()
      return
    }
    let raf = 0
    const loop = () => {
      step(sim)
      paint()
      if (sim.alpha > 0.015) raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [graphKey, paint, reduced])

  useEffect(() => {
    hoverKeyRef.current = hoverKey
    positionTooltip()
  }, [hoverKey, positionTooltip])

  useEffect(() => {
    selectedRef.current = selectedKey
    paint()
  }, [selectedKey, paint])

  // ---------------------------- pan + zoom --------------------------------------

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    let panning = false
    let lastX = 0
    let lastY = 0

    const toSvgDelta = (dx: number, dy: number) => {
      const rect = svg.getBoundingClientRect()
      const scale = Math.min(rect.width / W, rect.height / H) || 1
      return { dx: dx / (scale * viewRef.current.k), dy: dy / (scale * viewRef.current.k) }
    }

    const onDown = (e: PointerEvent) => {
      if ((e.target as Element).closest('[data-node]')) return
      panning = true
      lastX = e.clientX
      lastY = e.clientY
      svg.setPointerCapture(e.pointerId)
    }
    const onMove = (e: PointerEvent) => {
      if (!panning) return
      const { dx, dy } = toSvgDelta(e.clientX - lastX, e.clientY - lastY)
      viewRef.current.x += dx
      viewRef.current.y += dy
      lastX = e.clientX
      lastY = e.clientY
      applyView()
    }
    const onUp = () => {
      panning = false
    }
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const v = viewRef.current
      const factor = Math.exp(-e.deltaY * 0.0013)
      const k2 = Math.min(4, Math.max(0.35, v.k * factor))
      const p = svgPoint(svg, e.clientX, e.clientY)
      v.x = p.x - ((p.x - v.x) / v.k) * k2
      v.y = p.y - ((p.y - v.y) / v.k) * k2
      v.k = k2
      applyView()
    }

    svg.addEventListener('pointerdown', onDown)
    svg.addEventListener('pointermove', onMove)
    svg.addEventListener('pointerup', onUp)
    svg.addEventListener('pointercancel', onUp)
    svg.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      svg.removeEventListener('pointerdown', onDown)
      svg.removeEventListener('pointermove', onMove)
      svg.removeEventListener('pointerup', onUp)
      svg.removeEventListener('pointercancel', onUp)
      svg.removeEventListener('wheel', onWheel)
    }
  }, [applyView])

  const resetView = useCallback(() => {
    viewRef.current = { x: 0, y: 0, k: 1 }
    applyView()
  }, [applyView])

  const select = useCallback((key: string) => {
    setSelectedKey(key)
  }, [])

  // ---------------------------- side-panel chain --------------------------------

  const chainRows = useMemo(() => {
    if (!selectedKey) return []
    return predChain(selectedKey, 6).map((key) => {
      const skill = skillByKey.get(key)
      if (skill) {
        return { key, label: `§${skill.number} ${skill.title}`, mastery: Math.round(skill.p * 100), ghost: false }
      }
      const meta = SEC_META.get(key)
      return { key, label: `§${meta?.number ?? '—'} ${meta?.title ?? key}`, mastery: null as number | null, ghost: true }
    })
  }, [selectedKey, skillByKey])

  const quickWeakest = useMemo(
    () => [...filtered].sort((a, b) => a.p - b.p).slice(0, 5),
    [filtered]
  )

  // ---------------------------- empty states ------------------------------------

  if (snapshot.skills.length === 0) {
    return (
      <div className="rounded-2xl border border-border/80 bg-card/60 p-8 text-center backdrop-blur-sm">
        <Crosshair className="mx-auto h-6 w-6 text-emerald-300/60" aria-hidden />
        <p className="mt-3 text-sm font-semibold">The knowledge graph is waiting for evidence</p>
        <p className="mx-auto mt-1.5 max-w-sm text-[12.5px] leading-relaxed text-muted-foreground">
          Answer quizzes, review flashcards or visit the studio — every skill you touch becomes a node,
          and prerequisite chains light up between them.
        </p>
      </div>
    )
  }

  const lo = range[0]
  const hi = range[1]

  return (
    <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm">
      {/* ---------------- controls ---------------- */}
      <div className="flex flex-wrap items-center gap-2.5 border-b border-border/70 p-3 sm:p-4">
        <Select value={subjectFilter} onValueChange={setSubjectFilter}>
          <SelectTrigger size="sm" className="h-9 w-[190px] shrink-0 bg-card text-xs">
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent className="max-h-72">
            <SelectItem value="all">All subjects ({snapshot.skills.length})</SelectItem>
            {subjectsInPlay.map((s) => (
              <SelectItem key={s.id} value={s.id}>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: s.accent }} aria-hidden />
                  {s.name} ({s.count})
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex min-w-[210px] flex-1 items-center gap-2.5">
          <span className="shrink-0 font-mono text-[10.5px] text-muted-foreground" aria-hidden>
            {lo}–{hi}% mastery
          </span>
          <Slider
            value={[lo, hi]}
            onValueChange={(v) => {
              const a = v[0] ?? 0
              const b = v[1] ?? 100
              setRange(a <= b ? [a, b] : [b, a])
            }}
            min={0}
            max={100}
            step={5}
            aria-label="Mastery range filter"
          />
        </div>

        <Button
          type="button"
          size="sm"
          variant={weakestMode ? 'default' : 'outline'}
          aria-pressed={weakestMode}
          onClick={() => setWeakestMode((v) => !v)}
          className={`h-9 shrink-0 text-xs ${weakestMode ? 'bg-rose-500/80 hover:bg-rose-500' : ''}`}
        >
          <Target className="h-3.5 w-3.5" aria-hidden /> Weakest first
        </Button>
        <Button type="button" size="sm" variant="outline" onClick={resetView} className="h-9 shrink-0 text-xs">
          <Maximize2 className="h-3.5 w-3.5" aria-hidden /> Reset view
        </Button>
      </div>

      {/* ---------------- graph + side panel ---------------- */}
      <div className="grid gap-0 xl:grid-cols-[1fr_290px]">
        <div ref={wrapRef} className="relative min-w-0">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="xMidYMid meet"
            className="block h-[400px] w-full touch-none sm:h-[480px] xl:h-[560px]"
            role="application"
            aria-label="Knowledge graph of your skills — drag to pan, scroll to zoom, click a node for details"
            style={{ cursor: 'grab' }}
          >
            <defs>
              <pattern id="twin-graph-grid" width="46" height="46" patternUnits="userSpaceOnUse">
                <path d="M46 0H0V46" fill="none" className="stroke-muted-foreground/15" strokeWidth="0.7" />
              </pattern>
              <radialGradient id="twin-graph-glow" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width={W} height={H} fill="url(#twin-graph-grid)" aria-hidden />
            <rect width={W} height={H} fill="url(#twin-graph-glow)" aria-hidden />

            <g ref={worldRef}>
              {/* prerequisite edges */}
              <path ref={solidPathRef} fill="none" className="stroke-muted-foreground/45" strokeWidth={1.1} aria-hidden />
              <path
                ref={ghostPathRef}
                fill="none"
                className="stroke-muted-foreground/35"
                strokeWidth={1}
                strokeDasharray="3 5"
                aria-hidden
              />
              <path ref={hiPathRef} fill="none" stroke="#34d399" strokeWidth={2.2} strokeLinecap="round" opacity={0.9} aria-hidden />

              {/* nodes — positioned imperatively via transform */}
              {graph.nodes.map((nd) => {
                const isHover = hoverKey === nd.key
                const isSel = selectedKey === nd.key
                const dimmed = weakestMode && !nd.ghost && !nd.weakFocus && !isSel && !isHover
                return (
                  <g
                    key={nd.key}
                    data-node
                    transform={`translate(${nd.x.toFixed(2)} ${nd.y.toFixed(2)})`}
                    ref={(el) => {
                      if (el) nodeEls.current.set(nd.key, el)
                      else nodeEls.current.delete(nd.key)
                    }}
                    className="group cursor-pointer outline-none"
                    role="button"
                    tabIndex={0}
                    aria-label={
                      nd.skill
                        ? `Skill ${nd.skill.title}, ${nd.skill.subjectName}, mastery ${Math.round(nd.skill.p * 100)} percent`
                        : `Untouched prerequisite ${SEC_META.get(nd.key)?.title ?? nd.key}`
                    }
                    opacity={dimmed ? 0.4 : 1}
                    onMouseEnter={() => setHoverKey(nd.key)}
                    onMouseLeave={() => setHoverKey((k) => (k === nd.key ? null : k))}
                    onFocus={() => setHoverKey(nd.key)}
                    onBlur={() => setHoverKey((k) => (k === nd.key ? null : k))}
                    onClick={() => select(nd.key)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        select(nd.key)
                      }
                    }}
                  >
                    {nd.weakFocus && (
                      <circle
                        r={nd.r + 7}
                        fill="none"
                        stroke={ROSE}
                        strokeWidth={1.6}
                        className="animate-pulse"
                        aria-hidden
                      />
                    )}
                    {(isHover || isSel) && (
                      <circle
                        r={nd.r + 6}
                        fill="none"
                        stroke={isSel ? '#34d399' : '#a7f3d0'}
                        strokeWidth={isSel ? 2.2 : 1.6}
                        opacity={0.95}
                        aria-hidden
                      />
                    )}
                    <circle
                      r={nd.r}
                      fill={nd.color}
                      fillOpacity={nd.ghost ? 0.3 : 0.92}
                      stroke={nd.ghost ? SLATE : 'rgba(255,255,255,0.65)'}
                      strokeWidth={nd.ghost ? 1 : 1.2}
                      strokeDasharray={nd.ghost ? '2.5 2.5' : undefined}
                      aria-hidden
                    />
                    {nd.labeled && (
                      <text
                        y={nd.r + 11}
                        textAnchor="middle"
                        fontSize="9.5"
                        className="fill-muted-foreground font-medium"
                        style={{ pointerEvents: 'none' }}
                      >
                        {(nd.skill?.title ?? SEC_META.get(nd.key)?.title ?? '').slice(0, 22)}
                      </text>
                    )}
                  </g>
                )
              })}
            </g>
          </svg>

          {/* mini stats + cap notice */}
          <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-1.5">
            <Badge variant="outline" className="border-border/70 bg-card/70 font-mono text-[10px] font-normal text-muted-foreground">
              {stats.evidenced} skills · {stats.ghosts} untouched · {stats.edges} edges
            </Badge>
            <Badge variant="outline" className="border-emerald-400/30 bg-emerald-400/10 font-mono text-[10px] font-normal text-emerald-300">
              avg mastery {Math.round(stats.avg * 100)}%
            </Badge>
            {graph.capped > 0 && (
              <Badge variant="outline" className="border-amber-400/30 bg-amber-400/10 font-mono text-[10px] font-normal text-amber-300">
                showing {MAX_NODES} of {filtered.length} — narrow the filters
              </Badge>
            )}
          </div>

          {filtered.length === 0 && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
              <p className="rounded-xl border border-border/70 bg-card/90 px-4 py-3 text-[12.5px] text-muted-foreground backdrop-blur-sm">
                No skills in this mastery range — widen the slider or pick another subject.
              </p>
            </div>
          )}

          {/* hover tooltip */}
          {hoverInfo && (
            <div
              ref={tooltipRef}
              className="pointer-events-none absolute z-10 w-52 rounded-xl border border-border/80 bg-card/95 p-3 text-card-foreground shadow-xl backdrop-blur-sm"
            >
              <p className="text-[12px] font-bold leading-tight">{hoverInfo.title}</p>
              <p className="mt-0.5 truncate text-[10.5px] text-muted-foreground">{hoverInfo.sub}</p>
              <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-[10.5px]">
                <span className="text-muted-foreground">mastery</span>
                <span className="text-right font-bold" style={{ color: hoverInfo.ghost ? SLATE : masteryColor((hoverInfo.mastery ?? 0) / 100) }}>
                  {hoverInfo.mastery === null ? '—' : `${hoverInfo.mastery}%`}
                </span>
                <span className="text-muted-foreground">evidence</span>
                <span className="text-right text-muted-foreground">{hoverInfo.evidence}</span>
                <span className="text-muted-foreground">last seen</span>
                <span className="text-right text-muted-foreground">{hoverInfo.last}</span>
              </div>
              <p className="mt-2 text-[10px] text-emerald-300/80">click to inspect the chain →</p>
            </div>
          )}
        </div>

        {/* ---------------- side panel ---------------- */}
        <div className="border-t border-border/70 xl:border-l xl:border-t-0">
          <ScrollArea className="h-[320px] xl:h-[560px]">
            <div className="p-4">
              {selectedSkill || selectedMeta ? (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300/80">Selected skill</p>
                  <h3 className="mt-1.5 text-[14px] font-bold leading-snug">
                    §{selectedSkill?.number ?? selectedMeta?.number} {selectedSkill?.title ?? selectedMeta?.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    {selectedSkill ? `${selectedSkill.chapterTitle} · ${selectedSkill.subjectName}` : 'prerequisite · not touched yet'}
                  </p>

                  {selectedSkill && (
                    <>
                      <div className="mt-3 space-y-2">
                        <div>
                          <div className="flex items-baseline justify-between font-mono text-[10.5px]">
                            <span className="text-muted-foreground">mastery</span>
                            <span className="font-bold" style={{ color: masteryColor(selectedSkill.p) }}>
                              {Math.round(selectedSkill.p * 100)}%
                            </span>
                          </div>
                          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${Math.round(selectedSkill.p * 100)}%`, background: masteryColor(selectedSkill.p) }}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-[10.5px]">
                          <span className="text-muted-foreground">evidence</span>
                          <span className="text-right text-muted-foreground">{selectedSkill.evidenceCount} events</span>
                          <span className="text-muted-foreground">last seen</span>
                          <span className="text-right text-muted-foreground">{timeAgo(selectedSkill.lastEvidenceAt)}</span>
                          <span className="text-muted-foreground">urgency</span>
                          <span className="text-right text-rose-300">{Math.round(selectedSkill.urgency * 100)}%</span>
                          <span className="text-muted-foreground">decay margin</span>
                          <span className="text-right text-amber-300">
                            {Math.max(0, Math.round((selectedSkill.raw - selectedSkill.p) * 100))}pts
                          </span>
                        </div>
                      </div>
                      {selectedSubject && (
                        <p className="mt-3 rounded-lg border border-border/60 bg-muted/30 px-2.5 py-1.5 text-[10.5px] text-muted-foreground">
                          {selectedSubject.subjectName} — subject inferred mastery{' '}
                          <span className="font-bold text-emerald-300">{Math.round(selectedSubject.inferredMastery * 100)}%</span> ·{' '}
                          {selectedSubject.evidencedSkills}/{selectedSubject.skills} skills touched
                        </p>
                      )}
                      <button
                        type="button"
                        onClick={() => onSelectSkill?.(selectedSkill.key)}
                        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-400/15 px-3 py-2 text-[12px] font-semibold text-emerald-200 transition-colors hover:bg-emerald-400/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                      >
                        Open lesson <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </button>
                    </>
                  )}

                  <div className="mt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
                      Prerequisite chain — root first
                    </p>
                    <div className="mt-2 space-y-1.5">
                      {chainRows.length === 0 && (
                        <p className="text-[11.5px] text-muted-foreground">This skill is a chapter root — nothing blocks it.</p>
                      )}
                      {chainRows.map((row, i) => (
                        <div
                          key={row.key}
                          className="flex items-center justify-between gap-2 rounded-lg border border-border/60 bg-muted/20 px-2.5 py-1.5"
                        >
                          <span className="flex min-w-0 items-center gap-1.5 text-[11px] font-medium">
                            <span className="font-mono text-[9px] text-muted-foreground/70">{i + 1}</span>
                            <span className="truncate">{row.label}</span>
                          </span>
                          <span
                            className={`shrink-0 rounded-full px-1.5 py-0.5 font-mono text-[9.5px] ${
                              row.ghost
                                ? 'border border-border/60 bg-muted/40 text-muted-foreground'
                                : `font-bold`
                            }`}
                            style={row.ghost ? undefined : { color: masteryColor((row.mastery ?? 0) / 100) }}
                          >
                            {row.ghost ? 'untouched' : `${row.mastery}%`}
                          </span>
                        </div>
                      ))}
                      {(selectedSkill || selectedMeta) && (
                        <div className="flex items-center justify-between gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1.5">
                          <span className="truncate text-[11px] font-semibold text-emerald-200">
                            §{selectedSkill?.number ?? selectedMeta?.number} {selectedSkill?.title ?? selectedMeta?.title}
                          </span>
                          <span
                            className="shrink-0 font-mono text-[9.5px] font-bold"
                            style={{ color: selectedSkill ? masteryColor(selectedSkill.p) : SLATE }}
                          >
                            {selectedSkill ? `${Math.round(selectedSkill.p * 100)}%` : 'you are here'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300/80">Start here</p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
                    Click any node to inspect its mastery and prerequisite chain. Drag to pan, scroll to zoom.
                  </p>
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-300/80">Weakest right now</p>
                  <div className="mt-2 space-y-1.5">
                    {quickWeakest.map((s) => (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => select(s.key)}
                        className="flex w-full items-center justify-between gap-2 rounded-lg border border-border/60 bg-muted/20 px-2.5 py-1.5 text-left transition-colors hover:border-rose-400/40 hover:bg-rose-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/50"
                      >
                        <span className="min-w-0 truncate text-[11px] font-medium">
                          §{s.number} {s.title}
                        </span>
                        <span className="shrink-0 font-mono text-[9.5px] font-bold" style={{ color: masteryColor(s.p) }}>
                          {Math.round(s.p * 100)}%
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* ---------------- legend ---------------- */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/70 px-3 py-2.5 text-[10.5px] text-muted-foreground sm:px-4">
        <span className="inline-flex items-center gap-2">
          <span
            className="h-1.5 w-20 rounded-full"
            style={{ background: 'linear-gradient(90deg, #fb7185, #fbbf24, #34d399)' }}
            aria-hidden
          />
          mastery · shaky → stable
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-muted-foreground/60" aria-hidden /> node size · evidence weight
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-px w-5 bg-muted-foreground/60" aria-hidden /> prerequisite chain
        </span>
        <span className="inline-flex items-center gap-1.5">
          <svg width="16" height="8" viewBox="0 0 16 8" aria-hidden>
            <path d="M0 4H16" stroke={SLATE} strokeWidth="1.4" strokeDasharray="3 3" fill="none" />
          </svg>
          untouched prerequisite
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-rose-400" aria-hidden /> weakest 10%
        </span>
      </div>
    </div>
  )
}

export default TwinGraph
