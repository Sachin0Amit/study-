'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CircuitBoard, Lightbulb, ToggleLeft, Trash2, Eraser, Zap, TriangleAlert, Plus,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

/* ------------------------------------------------------------------ */
/* model                                                               */
/* ------------------------------------------------------------------ */

type GateType = 'switch' | 'not' | 'and' | 'or' | 'xor' | 'nand' | 'nor' | 'bulb'

interface Elem {
  id: number
  type: GateType
  x: number
  y: number
  on?: boolean
}

interface Wire {
  id: string
  from: number
  to: number
  toPort: number
}

interface GateMeta {
  w: number
  h: number
  inputs: number
  label: string
}

const META: Record<GateType, GateMeta> = {
  switch: { w: 76, h: 44, inputs: 0, label: 'SWITCH' },
  not: { w: 84, h: 52, inputs: 1, label: 'NOT' },
  and: { w: 84, h: 56, inputs: 2, label: 'AND' },
  or: { w: 92, h: 56, inputs: 2, label: 'OR' },
  xor: { w: 92, h: 56, inputs: 2, label: 'XOR' },
  nand: { w: 92, h: 56, inputs: 2, label: 'NAND' },
  nor: { w: 100, h: 56, inputs: 2, label: 'NOR' },
  bulb: { w: 64, h: 48, inputs: 1, label: 'BULB' },
}

const CW = 960
const CH = 620

let eid = 0
const nextId = () => ++eid

const snap = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, Math.round(v / 24) * 24))

function outPort(e: Elem): { x: number; y: number } {
  const m = META[e.type]
  return { x: e.x + m.w - 5, y: e.y + m.h / 2 }
}

function inPort(e: Elem, port: number): { x: number; y: number } {
  const m = META[e.type]
  if (m.inputs <= 1) return { x: e.x + 4, y: e.y + m.h / 2 }
  return { x: e.x + 5, y: e.y + m.h / 2 + (port === 0 ? -14 : 14) }
}

/* ------------------------------------------------------------------ */
/* evaluation                                                          */
/* ------------------------------------------------------------------ */

function topoOrder(elems: Elem[], wires: Wire[]): Elem[] {
  const byId = new Map(elems.map((e) => [e.id, e]))
  const indeg = new Map(elems.map((e) => [e.id, 0]))
  const adj = new Map<number, number[]>(elems.map((e) => [e.id, []]))
  for (const w of wires) {
    if (!byId.has(w.from) || !byId.has(w.to)) continue
    adj.get(w.from)?.push(w.to)
    indeg.set(w.to, (indeg.get(w.to) ?? 0) + 1)
  }
  const q = elems.filter((e) => (indeg.get(e.id) ?? 0) === 0).map((e) => e.id)
  const out: Elem[] = []
  while (q.length > 0) {
    const id = q.shift() as number
    const el = byId.get(id)
    if (el) out.push(el)
    for (const n of adj.get(id) ?? []) {
      indeg.set(n, (indeg.get(n) ?? 0) - 1)
      if ((indeg.get(n) ?? 0) === 0) q.push(n)
    }
  }
  for (const e of elems) if (!out.some((o) => o.id === e.id)) out.push(e)
  return out
}

function evaluateAll(elems: Elem[], wires: Wire[]): Map<number, boolean> {
  const val = new Map<number, boolean>()
  const inVal = (id: number, port: number): boolean => {
    const w = wires.find((x) => x.to === id && x.toPort === port)
    return w ? val.get(w.from) ?? false : false
  }
  for (const e of topoOrder(elems, wires)) {
    switch (e.type) {
      case 'switch':
        val.set(e.id, e.on ?? false)
        break
      case 'not':
        val.set(e.id, !inVal(e.id, 0))
        break
      case 'and':
        val.set(e.id, inVal(e.id, 0) && inVal(e.id, 1))
        break
      case 'or':
        val.set(e.id, inVal(e.id, 0) || inVal(e.id, 1))
        break
      case 'xor':
        val.set(e.id, inVal(e.id, 0) !== inVal(e.id, 1))
        break
      case 'nand':
        val.set(e.id, !(inVal(e.id, 0) && inVal(e.id, 1)))
        break
      case 'nor':
        val.set(e.id, !(inVal(e.id, 0) || inVal(e.id, 1)))
        break
      case 'bulb':
        val.set(e.id, inVal(e.id, 0))
        break
    }
  }
  return val
}

function levelsOf(elems: Elem[], wires: Wire[]): Map<number, number> {
  const byId = new Map(elems.map((e) => [e.id, e]))
  const depth = (id: number, seen: Set<number>): number => {
    if (seen.has(id)) return 0
    seen.add(id)
    const e = byId.get(id)
    if (!e) return 0
    if (e.type === 'switch') return 0
    const incoming = wires.filter((w) => w.to === id).map((w) => w.from)
    if (incoming.length === 0) return 0
    return 1 + Math.max(...incoming.map((f) => depth(f, seen)))
  }
  const m = new Map<number, number>()
  for (const e of elems) m.set(e.id, depth(e.id, new Set()))
  return m
}

/** would adding wire from → to create a signal loop? */
function createsLoop(wires: Wire[], from: number, to: number): boolean {
  if (from === to) return true
  const adj = new Map<number, number[]>()
  for (const w of wires) {
    if (!adj.has(w.from)) adj.set(w.from, [])
    adj.get(w.from)?.push(w.to)
  }
  const seen = new Set<number>()
  const stack = [to]
  while (stack.length > 0) {
    const u = stack.pop() as number
    if (u === from) return true
    if (seen.has(u)) continue
    seen.add(u)
    for (const v of adj.get(u) ?? []) stack.push(v)
  }
  return false
}

/* ------------------------------------------------------------------ */
/* half adder preset                                                   */
/* ------------------------------------------------------------------ */

function halfAdder(): { elems: Elem[]; wires: Wire[] } {
  const swA: Elem = { id: nextId(), type: 'switch', x: 72, y: 120, on: true }
  const swB: Elem = { id: nextId(), type: 'switch', x: 72, y: 360, on: false }
  const xor: Elem = { id: nextId(), type: 'xor', x: 408, y: 112 }
  const and: Elem = { id: nextId(), type: 'and', x: 408, y: 352 }
  const sum: Elem = { id: nextId(), type: 'bulb', x: 792, y: 116 }
  const carry: Elem = { id: nextId(), type: 'bulb', x: 792, y: 356 }
  const mkW = (from: Elem, to: Elem, toPort: number): Wire => ({ id: `w${from.id}-${to.id}-${toPort}`, from: from.id, to: to.id, toPort })
  return {
    elems: [swA, swB, xor, and, sum, carry],
    wires: [mkW(swA, xor, 0), mkW(swB, xor, 1), mkW(xor, sum, 0), mkW(swA, and, 0), mkW(swB, and, 1), mkW(and, carry, 0)],
  }
}

/* ------------------------------------------------------------------ */
/* gate rendering                                                      */
/* ------------------------------------------------------------------ */

function GateBody({ type, on, lit, flash }: { type: GateType; on?: boolean; lit?: boolean; flash: boolean }) {
  const stroke = flash ? '#fbbf24' : '#71717a'
  const bodyFill = 'rgba(24,24,27,0.92)'
  switch (type) {
    case 'switch':
      return (
        <g>
          <rect x={4} y={4} width={68} height={36} rx={8} fill={bodyFill} stroke={stroke} strokeWidth={2}
            className="transition-colors" />
          <line x1={14} y1={22} x2={62} y2={22} stroke="#3f3f46" strokeWidth={3} strokeLinecap="round" />
          <motion.circle cx={on ? 52 : 24} cy={22} animate={{ cx: on ? 52 : 24 }} transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            r={7} fill={on ? '#10b981' : '#52525b'} stroke="#09090b" strokeWidth={1.5} />
          <text x={38} y={12} textAnchor="middle" fontSize={8} fontWeight={700}
            className={on ? 'fill-emerald-400 font-mono' : 'fill-zinc-500 font-mono'} style={{ pointerEvents: 'none' }}>
            {on ? '1' : '0'}
          </text>
        </g>
      )
    case 'not':
      return (
        <g>
          <path d="M12,5 L62,26 L12,47 Z" fill={bodyFill} stroke={stroke} strokeWidth={2} className="transition-colors" />
          <circle cx={68} cy={26} r={5} fill="#09090b" stroke={stroke} strokeWidth={2} className="transition-colors" />
        </g>
      )
    case 'and':
      return (
        <path d="M4,2 H44 A26,26 0 0 1 44,54 H4 Z" fill={bodyFill} stroke={stroke} strokeWidth={2} className="transition-colors" />
      )
    case 'nand':
      return (
        <g>
          <path d="M4,2 H42 A26,26 0 0 1 42,54 H4 Z" fill={bodyFill} stroke={stroke} strokeWidth={2} className="transition-colors" />
          <circle cx={72} cy={28} r={5.5} fill="#09090b" stroke={stroke} strokeWidth={2} className="transition-colors" />
        </g>
      )
    case 'or':
      return (
        <path d="M6,2 C26,2 50,10 78,28 C50,46 26,54 6,54 C16,44 16,12 6,2 Z" fill={bodyFill} stroke={stroke} strokeWidth={2} className="transition-colors" />
      )
    case 'xor':
      return (
        <g>
          <path d="M6,2 C26,2 50,10 78,28 C50,46 26,54 6,54 C16,44 16,12 6,2 Z" fill={bodyFill} stroke={stroke} strokeWidth={2} className="transition-colors" />
          <path d="M0,2 C10,12 10,44 0,54" fill="none" stroke={stroke} strokeWidth={2} className="transition-colors" />
        </g>
      )
    case 'nor':
      return (
        <g>
          <path d="M6,2 C24,2 46,10 70,28 C46,46 24,54 6,54 C16,44 16,12 6,2 Z" fill={bodyFill} stroke={stroke} strokeWidth={2} className="transition-colors" />
          <circle cx={78} cy={28} r={5.5} fill="#09090b" stroke={stroke} strokeWidth={2} className="transition-colors" />
        </g>
      )
    case 'bulb':
      return (
        <g>
          {lit && (
            <g>
              <circle cx={32} cy={24} r={26} fill="rgba(16,185,129,0.12)" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                <line key={a} x1={32 + 23 * Math.cos((a * Math.PI) / 180)} y1={24 + 23 * Math.sin((a * Math.PI) / 180)}
                  x2={32 + 31 * Math.cos((a * Math.PI) / 180)} y2={24 + 31 * Math.sin((a * Math.PI) / 180)}
                  stroke="#10b981" strokeWidth={2} strokeLinecap="round" opacity={0.85} />
              ))}
            </g>
          )}
          <circle cx={32} cy={24} r={17} fill={lit ? 'rgba(16,185,129,0.35)' : bodyFill} stroke={lit ? '#10b981' : stroke}
            strokeWidth={2} className="transition-colors" />
          <path d="M26,31 L38,31 M29,31 L29,20 L35,24 L29,28" fill="none" stroke={lit ? '#10b981' : '#52525b'} strokeWidth={1.8}
            strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )
  }
}

/* ------------------------------------------------------------------ */
/* main component                                                      */
/* ------------------------------------------------------------------ */

export default function LogicGates() {
  const [{ elems, wires }, setCircuit] = useState<{ elems: Elem[]; wires: Wire[] }>(() => halfAdder())
  const [placing, setPlacing] = useState<GateType | null>(null)
  const [deleteMode, setDeleteMode] = useState(false)
  const [pending, setPending] = useState<number | null>(null)
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null)
  const [flashMsg, setFlashMsg] = useState('')
  const [reveal, setReveal] = useState<number | null>(null)
  const [hoverElem, setHoverElem] = useState<number | null>(null)
  const [hoverWire, setHoverWire] = useState<string | null>(null)
  const [prevVals, setPrevVals] = useState<Map<number, boolean>>(new Map())
  const dragRef = useRef<{ id: number; dx: number; dy: number } | null>(null)
  const dragMoved = useRef(false)
  const svgRef = useRef<SVGSVGElement>(null)

  const values = useMemo(() => evaluateAll(elems, wires), [elems, wires])
  const levels = useMemo(() => levelsOf(elems, wires), [elems, wires])
  const maxLevel = useMemo(() => Math.max(0, ...elems.map((e) => levels.get(e.id) ?? 0)), [elems, levels])

  /* frontier-by-frontier propagation */
  useEffect(() => {
    if (reveal === null) return
    if (reveal >= maxLevel) {
      const t = setTimeout(() => setReveal(null), 260)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setReveal(reveal + 1), 240)
    return () => clearTimeout(t)
  }, [reveal, maxLevel])

  const flash = useCallback((m: string) => {
    setFlashMsg(m)
    setTimeout(() => setFlashMsg(''), 2600)
  }, [])

  /* escape cancels interactions */
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPlacing(null)
        setPending(null)
      }
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  const byId = useMemo(() => new Map(elems.map((e) => [e.id, e])), [elems])

  const shown = (id: number): boolean => {
    if (reveal === null) return values.get(id) ?? false
    const lv = levels.get(id) ?? 0
    return lv <= reveal ? values.get(id) ?? false : prevVals.get(id) ?? false
  }
  const flashing = (id: number): boolean => reveal !== null && (levels.get(id) ?? 0) === reveal

  const toSvg = useCallback((clientX: number, clientY: number): { x: number; y: number } => {
    const el = svgRef.current
    if (!el) return { x: 0, y: 0 }
    const r = el.getBoundingClientRect()
    const s = CW / Math.max(r.width, 1)
    return { x: (clientX - r.left) * s, y: (clientY - r.top) * s }
  }, [])

  /* ---- mutations ---- */
  const place = (type: GateType, x: number, y: number) => {
    const m = META[type]
    setCircuit((c) => ({
      ...c,
      elems: [...c.elems, { id: nextId(), type, x: snap(x - m.w / 2, 0, CW - m.w), y: snap(y - m.h / 2, 0, CH - m.h - 20), on: false }],
    }))
    setReveal(null)
  }

  const removeElem = (id: number) => {
    setCircuit((c) => ({
      elems: c.elems.filter((e) => e.id !== id),
      wires: c.wires.filter((w) => w.from !== id && w.to !== id),
    }))
    setReveal(null)
    if (pending === id) setPending(null)
  }

  const toggleSwitch = (id: number) => {
    setPrevVals(values)
    setCircuit((c) => ({ ...c, elems: c.elems.map((e) => (e.id === id ? { ...e, on: !(e.on ?? false) } : e)) }))
    setReveal(0)
  }

  const tryConnect = (from: number, to: number, toPort: number) => {
    if (createsLoop(wires, from, to)) {
      flash('✗ Loop rejected — signals must flow forward through an acyclic circuit.')
      setPending(null)
      return
    }
    setCircuit((c) => ({
      ...c,
      wires: [...c.wires.filter((w) => !(w.to === to && w.toPort === toPort)), { id: `w${from}-${to}-${toPort}`, from, to, toPort }],
    }))
    setReveal(null)
    setPending(null)
  }

  const removeWire = (id: string) => {
    setCircuit((c) => ({ ...c, wires: c.wires.filter((w) => w.id !== id) }))
    setReveal(null)
  }

  /* ---- pointer handling ---- */
  const onElemPointerDown = (e: React.PointerEvent, el: Elem) => {
    e.stopPropagation()
    if (deleteMode) return
    const p = toSvg(e.clientX, e.clientY)
    dragRef.current = { id: el.id, dx: p.x - el.x, dy: p.y - el.y }
    dragMoved.current = false
  }

  const onElemClick = (el: Elem) => {
    if (deleteMode) {
      removeElem(el.id)
      return
    }
    if (el.type === 'switch' && !dragMoved.current) toggleSwitch(el.id)
  }

  const onSvgPointerMove = (e: React.PointerEvent) => {
    const p = toSvg(e.clientX, e.clientY)
    if (dragRef.current) {
      const d = dragRef.current
      dragMoved.current = true
      const m = META[byId.get(d.id)?.type ?? 'and']
      setCircuit((c) => ({
        ...c,
        elems: c.elems.map((el) =>
          el.id === d.id ? { ...el, x: snap(p.x - d.dx, 0, CW - m.w), y: snap(p.y - d.dy, 0, CH - m.h - 20) } : el
        ),
      }))
    } else if (pending !== null || placing !== null) {
      setCursor(p)
    }
  }

  const onBackgroundClick = (e: React.MouseEvent) => {
    const p = toSvg(e.clientX, e.clientY)
    if (placing) {
      place(placing, p.x, p.y)
      return
    }
    if (pending !== null) setPending(null)
  }

  /* ---- palette ---- */
  const PALETTE: { type: GateType; icon: typeof Zap }[] = [
    { type: 'switch', icon: ToggleLeft },
    { type: 'not', icon: TriangleAlert },
    { type: 'and', icon: Plus },
    { type: 'or', icon: Plus },
    { type: 'xor', icon: Plus },
    { type: 'nand', icon: Plus },
    { type: 'nor', icon: Plus },
    { type: 'bulb', icon: Lightbulb },
  ]

  return (
    <div className="flex flex-col gap-4">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <CircuitBoard className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Logic Gate Circuit Simulator</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Place gates on the grid, wire outputs to inputs, then flip switches and watch signals ripple through the circuit frontier by frontier.
            </p>
          </div>
        </div>
        <span className="rounded-md border border-border bg-card px-2.5 py-1.5 font-mono text-xs text-muted-foreground">
          {elems.length} gates · {wires.length} wires
        </span>
      </div>

      {/* toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(META) as GateType[]).map((t) => {
            const Icon = PALETTE.find((p) => p.type === t)?.icon ?? Plus
            return (
              <Tooltip key={t}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => {
                      setPlacing(placing === t ? null : t)
                      setDeleteMode(false)
                    }}
                    className={
                      'rounded-lg border px-3 py-1.5 font-mono text-[11px] font-bold tracking-wider transition ' +
                      (placing === t
                        ? 'border-emerald-500/60 bg-emerald-600 text-white'
                        : 'border-border bg-card text-muted-foreground hover:border-emerald-500/40 hover:text-foreground')
                    }
                  >
                    <Icon className="mr-1 inline h-3 w-3" />
                    {META[t].label}
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  click, then click the canvas to place a {META[t].label.toLowerCase()}
                </TooltipContent>
              </Tooltip>
            )
          })}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant={deleteMode ? 'destructive' : 'outline'} onClick={() => { setDeleteMode(!deleteMode); setPlacing(null); setPending(null) }}>
            <Trash2 className="h-3.5 w-3.5" />
            {deleteMode ? 'Deleting…' : 'Delete mode'}
          </Button>
          <Button size="sm" variant="outline" onClick={() => { setCircuit({ elems: [], wires: [] }); setReveal(null); setPending(null) }}>
            <Eraser className="h-3.5 w-3.5" />
            Clear
          </Button>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500" onClick={() => { setCircuit(halfAdder()); setReveal(null); setPending(null) }}>
            <Zap className="h-3.5 w-3.5" />
            Half adder
          </Button>
        </div>
      </div>

      {/* status line */}
      <div className="flex min-h-5 items-center gap-2 font-mono text-[11px]">
        <span className={flashMsg ? 'text-rose-400' : 'text-amber-400'}>
          {flashMsg ||
            (placing
              ? `placing ${META[placing].label} — click the canvas (Esc to cancel)`
              : pending !== null
                ? 'output chosen — now click an input port (Esc to cancel)'
                : deleteMode
                  ? 'click a gate or wire to delete it'
                  : 'click a switch to toggle it · drag any gate to move it')}
        </span>
      </div>

      {/* canvas */}
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="p-2">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${CW} ${CH}`}
            className="h-auto w-full touch-none select-none"
            role="img"
            aria-label="circuit canvas"
            style={{ cursor: placing ? 'copy' : deleteMode ? 'not-allowed' : 'default' }}
            onPointerMove={onSvgPointerMove}
            onPointerUp={() => { dragRef.current = null }}
            onPointerLeave={() => { dragRef.current = null; setCursor(null) }}
          >
            <defs>
              <pattern id="lg-grid" width={24} height={24} patternUnits="userSpaceOnUse">
                <path d="M24 0H0V24" fill="none" stroke="rgba(63,63,70,0.30)" strokeWidth={1} />
              </pattern>
            </defs>
            <style>{`@keyframes lg-flow { to { stroke-dashoffset: -14; } } .lg-flow { stroke-dasharray: 7 7; animation: lg-flow .45s linear infinite; }`}</style>
            <rect x={0} y={0} width={CW} height={CH} fill="url(#lg-grid)" onClick={onBackgroundClick} />

            {/* wires */}
            {wires.map((w) => {
              const from = byId.get(w.from)
              const to = byId.get(w.to)
              if (!from || !to) return null
              const o = outPort(from)
              const i = inPort(to, w.toPort)
              const sig = shown(w.from)
              const hi = hoverWire === w.id
              return (
                <g key={w.id}>
                  <path
                    d={`M${o.x + 5},${o.y} C${o.x + 50},${o.y} ${i.x - 50},${i.y} ${i.x - 4},${i.y}`}
                    fill="none"
                    stroke={hi && deleteMode ? '#f43f5e' : sig ? '#10b981' : '#52525b'}
                    strokeWidth={sig ? 2.6 : 2}
                    className={sig && !deleteMode ? 'lg-flow' : undefined}
                    style={sig ? { filter: 'drop-shadow(0 0 3px rgba(16,185,129,0.5))' } : undefined}
                  />
                  <path
                    d={`M${o.x + 5},${o.y} C${o.x + 50},${o.y} ${i.x - 50},${i.y} ${i.x - 4},${i.y}`}
                    fill="none"
                    stroke="transparent"
                    strokeWidth={16}
                    style={{ cursor: deleteMode ? 'pointer' : 'default', pointerEvents: 'stroke' }}
                    onMouseEnter={() => setHoverWire(w.id)}
                    onMouseLeave={() => setHoverWire(null)}
                    onClick={(e) => { e.stopPropagation(); if (deleteMode) removeWire(w.id) }}
                  />
                </g>
              )
            })}

            {/* ghost wire */}
            {pending !== null && cursor && (() => {
              const from = byId.get(pending)
              if (!from) return null
              const o = outPort(from)
              return (
                <motion.line
                  x1={o.x}
                  y1={o.y}
                  x2={cursor.x}
                  y2={cursor.y}
                  stroke="#fbbf24"
                  strokeWidth={2}
                  strokeDasharray="7 7"
                  animate={{ strokeDashoffset: [0, -28] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
              )
            })()}

            {/* ghost element while placing */}
            {placing !== null && cursor && (
              <g opacity={0.45} style={{ pointerEvents: 'none' }}>
                <rect
                  x={snap(cursor.x - META[placing].w / 2, 0, CW - META[placing].w)}
                  y={snap(cursor.y - META[placing].h / 2, 0, CH - META[placing].h - 20)}
                  width={META[placing].w}
                  height={META[placing].h}
                  rx={10}
                  fill="rgba(16,185,129,0.12)"
                  stroke="#10b981"
                  strokeDasharray="5 4"
                />
                <text
                  x={snap(cursor.x, 0, CW) + META[placing].w / 2 - 12}
                  y={snap(cursor.y, 0, CH) + 4}
                  textAnchor="middle"
                  fontSize={11}
                  className="fill-emerald-400 font-mono"
                >
                  {META[placing].label}
                </text>
              </g>
            )}

            {/* elements */}
            {elems.map((el) => {
              const m = META[el.type]
              const hi = hoverElem === el.id
              const sig = shown(el.id)
              const fl = flashing(el.id)
              return (
                <g key={el.id} transform={`translate(${el.x},${el.y})`}>
                  {/* invisible hit area */}
                  <rect
                    x={0}
                    y={0}
                    width={m.w}
                    height={m.h}
                    fill="transparent"
                    style={{ cursor: deleteMode ? 'pointer' : el.type === 'switch' ? 'pointer' : 'move' }}
                    onPointerDown={(e) => onElemPointerDown(e, el)}
                    onClick={() => onElemClick(el)}
                    onMouseEnter={() => setHoverElem(el.id)}
                    onMouseLeave={() => setHoverElem(null)}
                  />
                  <g style={{ pointerEvents: 'none' }}>
                    <GateBody type={el.type} on={el.on ?? false} lit={sig && el.type === 'bulb'} flash={fl} />
                    <text x={m.w / 2 - (el.type === 'bulb' ? 0 : 6)} y={m.h + 14} textAnchor="middle" fontSize={9} fontWeight={700}
                      letterSpacing={1.5} className={fl ? 'fill-amber-400 font-mono' : 'fill-zinc-600 font-mono'}>
                      {m.label}
                    </text>
                  </g>
                  {/* output port */}
                  {el.type !== 'bulb' && (
                    <circle
                      cx={m.w - 5}
                      cy={m.h / 2}
                      r={5}
                      fill={sig ? '#10b981' : '#3f3f46'}
                      stroke={pending === el.id ? '#fbbf24' : '#18181b'}
                      strokeWidth={pending === el.id ? 2.5 : 1.5}
                      style={{ cursor: deleteMode ? 'pointer' : 'crosshair' }}
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (deleteMode) { removeElem(el.id); return }
                        setPending(pending === el.id ? null : el.id)
                      }}
                    />
                  )}
                  {/* input ports */}
                  {Array.from({ length: m.inputs }, (_, p) => {
                    const ip = inPort(el, p)
                    const wired = wires.some((w) => w.to === el.id && w.toPort === p)
                    return (
                      <circle
                        key={p}
                        cx={ip.x}
                        cy={ip.y}
                        r={5}
                        fill={wired ? 'rgba(16,185,129,0.25)' : '#27272a'}
                        stroke={pending !== null ? '#fbbf24' : '#52525b'}
                        strokeWidth={pending !== null ? 2 : 1.5}
                        style={{ cursor: deleteMode ? 'pointer' : 'crosshair' }}
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation()
                          if (deleteMode) { removeElem(el.id); return }
                          if (pending === null) {
                            flash('pick an output port first — signals flow left to right')
                            return
                          }
                          tryConnect(pending, el.id, p)
                        }}
                      />
                    )
                  })}
                  {/* delete hover ring */}
                  {hi && deleteMode && (
                    <rect x={-4} y={-4} width={m.w + 8} height={m.h + 8} rx={10} fill="none" stroke="#f43f5e" strokeWidth={2} strokeDasharray="6 4" />
                  )}
                </g>
              )
            })}

            {elems.length === 0 && (
              <text x={CW / 2} y={CH / 2} textAnchor="middle" className="fill-zinc-600 font-mono" fontSize={15}>
                empty canvas — pick a gate above, or load the half adder preset
              </text>
            )}
          </svg>
        </div>
      </div>

      {/* legend */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-3">
          <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Wiring</div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Click an <span className="text-emerald-400">output port</span> (right side dot), then an <span className="text-amber-400">input port</span>{' '}
            (left side dot). Wires glow emerald and flow when carrying a 1.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-3">
          <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Simulation</div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Evaluation is a real topological pass over the circuit DAG. Loops are detected by DFS and rejected — combinational logic only.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-3">
          <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Half adder</div>
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">
            Sum = A ⊕ B &nbsp; Carry = A · B — flip both switches to 1 and watch Carry light up.
          </p>
        </div>
      </div>

      {/* try this */}
      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> with the half adder loaded, flip switch A and watch the signal ripple
          through the XOR gate before the Sum bulb updates — one frontier per animation beat. Then try wiring the XOR output into a NOT gate feeding
          a third bulb, or attempt to wire an output back into its own input — the cycle detector will refuse.
        </p>
      </div>
    </div>
  )
}
