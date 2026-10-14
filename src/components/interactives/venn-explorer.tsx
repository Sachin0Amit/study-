'use client'

import { useCallback, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, RotateCcw, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

/* ------------------------------------------------------------------ */
/*  Geometry                                                           */
/* ------------------------------------------------------------------ */

const VB = { w: 520, h: 400 }
const U = { x: 14, y: 14, w: 492, h: 372 }
const DOT_R = 11

type SetKey = 'A' | 'B' | 'C'
interface Circle { cx: number; cy: number; r: number }

const GEO_TWO: Record<'A' | 'B', Circle> = {
  A: { cx: 200, cy: 190, r: 118 },
  B: { cx: 320, cy: 190, r: 118 },
}
const GEO_THREE: Record<SetKey, Circle> = {
  A: { cx: 210, cy: 155, r: 103 },
  B: { cx: 310, cy: 155, r: 103 },
  C: { cx: 260, cy: 240, r: 103 },
}

interface Dot { id: string; x: number; y: number; color: string }

const INITIAL_DOTS: Dot[] = [
  { id: 'a', x: 110, y: 155, color: '#34d399' },
  { id: 'b', x: 260, y: 190, color: '#fbbf24' },
  { id: 'c', x: 405, y: 150, color: '#fb7185' },
  { id: 'd', x: 60, y: 60, color: '#e879f9' },
  { id: 'e', x: 165, y: 265, color: '#f97316' },
  { id: 'f', x: 245, y: 130, color: '#4ade80' },
  { id: 'g', x: 350, y: 265, color: '#f472b6' },
  { id: 'h', x: 455, y: 330, color: '#2dd4bf' },
  { id: 'i', x: 125, y: 195, color: '#eab308' },
  { id: 'j', x: 300, y: 95, color: '#fb923c' },
  { id: 'k', x: 55, y: 330, color: '#c084fc' },
  { id: 'l', x: 260, y: 133, color: '#a3e635' },
]

/* ------------------------------------------------------------------ */
/*  Operations                                                         */
/* ------------------------------------------------------------------ */

type Paint =
  | { kind: 'union'; parts: SetKey[] }
  | { kind: 'inter'; parts: SetKey[] }
  | { kind: 'diff'; x: SetKey; y: SetKey }
  | { kind: 'sym'; x: SetKey; y: SetKey }
  | { kind: 'comp'; x: SetKey }

interface VennOp {
  id: string
  label: string
  needsC: boolean
  pred: (a: boolean, b: boolean, c: boolean) => boolean
  paint: Paint
  builder: string
}

const OPS: VennOp[] = [
  { id: 'aub', label: 'A ∪ B', needsC: false, pred: (a, b) => a || b, paint: { kind: 'union', parts: ['A', 'B'] }, builder: '{ x : x ∈ A ∨ x ∈ B }' },
  { id: 'anb', label: 'A ∩ B', needsC: false, pred: (a, b) => a && b, paint: { kind: 'inter', parts: ['A', 'B'] }, builder: '{ x : x ∈ A ∧ x ∈ B }' },
  { id: 'amb', label: 'A − B', needsC: false, pred: (a, b) => a && !b, paint: { kind: 'diff', x: 'A', y: 'B' }, builder: '{ x : x ∈ A ∧ x ∉ B }' },
  { id: 'bma', label: 'B − A', needsC: false, pred: (a, b) => b && !a, paint: { kind: 'diff', x: 'B', y: 'A' }, builder: '{ x : x ∈ B ∧ x ∉ A }' },
  { id: 'asb', label: 'A △ B', needsC: false, pred: (a, b) => a !== b, paint: { kind: 'sym', x: 'A', y: 'B' }, builder: '{ x : exactly one of x ∈ A, x ∈ B }' },
  { id: 'ca', label: 'Aᶜ', needsC: false, pred: (a) => !a, paint: { kind: 'comp', x: 'A' }, builder: '{ x ∈ U : x ∉ A }' },
  { id: 'cb', label: 'Bᶜ', needsC: false, pred: (_a, b) => !b, paint: { kind: 'comp', x: 'B' }, builder: '{ x ∈ U : x ∉ B }' },
  { id: 'auc', label: 'A ∪ C', needsC: true, pred: (a, _b, c) => a || c, paint: { kind: 'union', parts: ['A', 'C'] }, builder: '{ x : x ∈ A ∨ x ∈ C }' },
  { id: 'anc', label: 'A ∩ C', needsC: true, pred: (a, _b, c) => a && c, paint: { kind: 'inter', parts: ['A', 'C'] }, builder: '{ x : x ∈ A ∧ x ∈ C }' },
  { id: 'amc', label: 'A − C', needsC: true, pred: (a, _b, c) => a && !c, paint: { kind: 'diff', x: 'A', y: 'C' }, builder: '{ x : x ∈ A ∧ x ∉ C }' },
  { id: 'cma', label: 'C − A', needsC: true, pred: (a, _b, c) => c && !a, paint: { kind: 'diff', x: 'C', y: 'A' }, builder: '{ x : x ∈ C ∧ x ∉ A }' },
  { id: 'buc', label: 'B ∪ C', needsC: true, pred: (_a, b, c) => b || c, paint: { kind: 'union', parts: ['B', 'C'] }, builder: '{ x : x ∈ B ∨ x ∈ C }' },
  { id: 'bnc', label: 'B ∩ C', needsC: true, pred: (_a, b, c) => b && c, paint: { kind: 'inter', parts: ['B', 'C'] }, builder: '{ x : x ∈ B ∧ x ∈ C }' },
  { id: 'bmc', label: 'B − C', needsC: true, pred: (_a, b, c) => b && !c, paint: { kind: 'diff', x: 'B', y: 'C' }, builder: '{ x : x ∈ B ∧ x ∉ C }' },
  { id: 'cmb', label: 'C − B', needsC: true, pred: (_a, b, c) => c && !b, paint: { kind: 'diff', x: 'C', y: 'B' }, builder: '{ x : x ∈ C ∧ x ∉ B }' },
  { id: 'aubuc', label: 'A ∪ B ∪ C', needsC: true, pred: (a, b, c) => a || b || c, paint: { kind: 'union', parts: ['A', 'B', 'C'] }, builder: '{ x : x ∈ A ∨ x ∈ B ∨ x ∈ C }' },
  { id: 'anbnc', label: 'A ∩ B ∩ C', needsC: true, pred: (a, b, c) => a && b && c, paint: { kind: 'inter', parts: ['A', 'B', 'C'] }, builder: '{ x : x ∈ A ∧ x ∈ B ∧ x ∈ C }' },
  { id: 'cc', label: 'Cᶜ', needsC: true, pred: (_a, _b, c) => !c, paint: { kind: 'comp', x: 'C' }, builder: '{ x ∈ U : x ∉ C }' },
]

function involvedKeys(p: Paint): SetKey[] {
  switch (p.kind) {
    case 'union': return p.parts
    case 'inter': return p.parts
    case 'diff': return [p.x, p.y]
    case 'sym': return [p.x, p.y]
    case 'comp': return [p.x]
  }
}

const FILL = '#10b981'

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function VennExplorer() {
  const [showC, setShowC] = useState(false)
  const [opId, setOpId] = useState('anb')
  const [dots, setDots] = useState<Dot[]>(INITIAL_DOTS)
  const svgRef = useRef<SVGSVGElement>(null)
  const dragRef = useRef<{ id: string; dx: number; dy: number } | null>(null)
  const [draggingId, setDraggingId] = useState<string | null>(null)

  const op = useMemo(() => OPS.find((o) => o.id === opId) ?? OPS[0], [opId])

  // if C disappears, fall back to a two-set operation (adjust during render)
  if (!showC && op.needsC) setOpId('anb')

  const shape = useCallback(
    (k: SetKey): Circle => (showC ? GEO_THREE[k] : k === 'C' ? GEO_THREE.C : GEO_TWO[k]),
    [showC],
  )

  const memberships = useMemo(
    () =>
      dots.map((d) => {
        const inA = Math.hypot(d.x - shape('A').cx, d.y - shape('A').cy) < shape('A').r
        const inB = Math.hypot(d.x - shape('B').cx, d.y - shape('B').cy) < shape('B').r
        const inC = showC && Math.hypot(d.x - shape('C').cx, d.y - shape('C').cy) < shape('C').r
        return { ...d, inA, inB, inC, inResult: op.pred(inA, inB, inC) }
      }),
    [dots, shape, showC, op],
  )

  const resultEls = memberships.filter((m) => m.inResult)
  const count = (fn: (m: (typeof memberships)[number]) => boolean) => memberships.filter(fn).length
  const sizes = [
    { label: '|A|', value: count((m) => m.inA) },
    { label: '|B|', value: count((m) => m.inB) },
    ...(showC ? [{ label: '|C|', value: count((m) => m.inC) }] : []),
    { label: '|A ∩ B|', value: count((m) => m.inA && m.inB) },
    { label: '|A ∪ B|', value: count((m) => m.inA || m.inB) },
    { label: '|A △ B|', value: count((m) => m.inA !== m.inB) },
    { label: '|Aᶜ|', value: count((m) => !m.inA) },
    { label: '|U|', value: memberships.length },
  ]

  /* ------------------------- dragging ------------------------- */

  const toSvg = useCallback((clientX: number, clientY: number): { x: number; y: number } | null => {
    const svg = svgRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    return {
      x: ((clientX - rect.left) / rect.width) * VB.w,
      y: ((clientY - rect.top) / rect.height) * VB.h,
    }
  }, [])

  const onDotPointerDown = useCallback(
    (e: React.PointerEvent, dot: Dot) => {
      e.preventDefault()
      const loc = toSvg(e.clientX, e.clientY)
      if (!loc) return
      ;(e.currentTarget as Element).setPointerCapture(e.pointerId)
      dragRef.current = { id: dot.id, dx: dot.x - loc.x, dy: dot.y - loc.y }
      setDraggingId(dot.id)
    },
    [toSvg],
  )

  const onDotPointerMove = useCallback(
    (e: React.PointerEvent) => {
      const drag = dragRef.current
      if (!drag) return
      const loc = toSvg(e.clientX, e.clientY)
      if (!loc) return
      const x = Math.min(Math.max(loc.x + drag.dx, U.x + DOT_R), U.x + U.w - DOT_R)
      const y = Math.min(Math.max(loc.y + drag.dy, U.y + DOT_R), U.y + U.h - DOT_R)
      setDots((prev) => prev.map((d) => (d.id === drag.id ? { ...d, x, y } : d)))
    },
    [toSvg],
  )

  const endDrag = useCallback(() => {
    dragRef.current = null
    setDraggingId(null)
  }, [])

  /* --------------------------- masks --------------------------- */

  const masks = useMemo(() => {
    const invMask = (opIdStr: string, k: SetKey) => ({
      id: `v-${opIdStr}-inv-${k}`,
      content: (
        <>
          <rect x={0} y={0} width={VB.w} height={VB.h} fill="#ffffff" />
          <circle {...shape(k)} fill="#000000" />
        </>
      ),
    })
    const p = op.paint
    const out: Array<{ id: string; content: React.ReactNode }> = []
    if (p.kind === 'inter') {
      for (const k of p.parts.slice(1)) {
        out.push({ id: `v-${op.id}-w-${k}`, content: <circle {...shape(k)} fill="#ffffff" /> })
      }
    } else if (p.kind === 'diff') {
      out.push(invMask(op.id, p.y))
    } else if (p.kind === 'sym') {
      out.push(invMask(op.id, p.y), invMask(op.id, p.x))
    } else if (p.kind === 'comp') {
      out.push(invMask(op.id, p.x))
    }
    return out
  }, [op, shape])

  const regionPaint = useMemo(() => {
    const p = op.paint
    switch (p.kind) {
      case 'union':
        return (
          <>
            {p.parts.map((k) => (
              <circle key={k} {...shape(k)} fill={FILL} />
            ))}
          </>
        )
      case 'inter': {
        let el: React.ReactNode = <circle {...shape(p.parts[0])} fill={FILL} />
        for (const k of p.parts.slice(1)) {
          el = <g mask={`url(#v-${op.id}-w-${k})`}>{el}</g>
        }
        return el
      }
      case 'diff':
        return (
          <g mask={`url(#v-${op.id}-inv-${p.y})`}>
            <circle {...shape(p.x)} fill={FILL} />
          </g>
        )
      case 'sym':
        return (
          <>
            <g mask={`url(#v-${op.id}-inv-${p.y})`}>
              <circle {...shape(p.x)} fill={FILL} />
            </g>
            <g mask={`url(#v-${op.id}-inv-${p.x})`}>
              <circle {...shape(p.y)} fill={FILL} />
            </g>
          </>
        )
      case 'comp':
        return (
          <g mask={`url(#v-${op.id}-inv-${p.x})`}>
            <rect x={U.x} y={U.y} width={U.w} height={U.h} fill={FILL} />
          </g>
        )
    }
  }, [op, shape])

  const involved = new Set(involvedKeys(op.paint))

  /* --------------------------- render --------------------------- */

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Target className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Venn Explorer</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Drag the elements anywhere inside U — membership is computed from position, live. Pick an operation to
            light up its region.
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
        {/* ---------------- SVG stage ---------------- */}
        <div>
          <div className="w-full rounded-xl border border-border bg-background/60" style={{ aspectRatio: '520 / 400' }}>
            <svg
              ref={svgRef}
              viewBox={`0 0 ${VB.w} ${VB.h}`}
              className="h-full w-full touch-none select-none"
              role="img"
              aria-label="Venn diagram with draggable elements"
            >
              <defs>
                {masks.map((m) => (
                  <mask key={m.id} id={m.id} maskUnits="userSpaceOnUse" x={0} y={0} width={VB.w} height={VB.h}>
                    {m.content}
                  </mask>
                ))}
              </defs>

              {/* universal set */}
              <rect
                x={U.x}
                y={U.y}
                width={U.w}
                height={U.h}
                rx={10}
                fill="rgba(113,113,122,0.05)"
                stroke="rgba(113,113,122,0.45)"
                strokeWidth={1.5}
                strokeDasharray="6 4"
              />
              <text x={U.x + 10} y={U.y + 22} fill="rgba(161,161,170,0.9)" fontSize={15} fontStyle="italic" fontWeight={600}>
                U
              </text>

              {/* circles */}
              {(['A', 'B', 'C'] as SetKey[]).filter((k) => k !== 'C' || showC).map((k) => {
                const c = shape(k)
                const isActive = involved.has(k)
                return (
                  <circle
                    key={k}
                    cx={c.cx}
                    cy={c.cy}
                    r={c.r}
                    fill={isActive ? 'rgba(16,185,129,0.04)' : 'rgba(113,113,122,0.07)'}
                    stroke={isActive ? '#10b981' : 'rgba(161,161,170,0.6)'}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    style={{ transition: 'stroke 300ms, stroke-width 300ms, fill 300ms' }}
                  />
                )
              })}

              {/* animated result region */}
              <motion.g
                key={op.id + (showC ? '3' : '2')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.24 }}
                transition={{ duration: 0.5 }}
              >
                {regionPaint}
              </motion.g>

              {/* circle labels */}
              {(['A', 'B', 'C'] as SetKey[]).filter((k) => k !== 'C' || showC).map((k) => {
                const c = shape(k)
                const lx = k === 'A' ? c.cx - c.r + 16 : k === 'B' ? c.cx + c.r - 16 : c.cx
                const ly = k === 'C' ? c.cy + c.r - 12 : c.cy - c.r + 26
                return (
                  <text
                    key={k}
                    x={lx}
                    y={ly}
                    textAnchor={k === 'B' ? 'end' : 'middle'}
                    fill={involved.has(k) ? '#34d399' : 'rgba(212,212,216,0.85)'}
                    fontSize={18}
                    fontWeight={700}
                    fontStyle="italic"
                    style={{ pointerEvents: 'none', transition: 'fill 300ms' }}
                  >
                    {k}
                  </text>
                )
              })}

              {/* draggable dots */}
              {memberships.map((m) => {
                const isDrag = m.id === draggingId
                return (
                  <g
                    key={m.id}
                    transform={`translate(${m.x} ${m.y})`}
                    className={isDrag ? 'cursor-grabbing' : 'cursor-grab'}
                    style={{ touchAction: 'none' }}
                    onPointerDown={(e) => onDotPointerDown(e, m)}
                    onPointerMove={onDotPointerMove}
                    onPointerUp={endDrag}
                    onPointerCancel={endDrag}
                    onLostPointerCapture={endDrag}
                  >
                    {m.inResult && (
                      <circle r={DOT_R + 6} fill="none" stroke="rgba(16,185,129,0.55)" strokeWidth={2} />
                    )}
                    <circle
                      r={DOT_R}
                      fill={m.color}
                      stroke={m.inResult ? '#10b981' : 'rgba(24,24,27,0.8)'}
                      strokeWidth={m.inResult ? 2.5 : 1.5}
                      opacity={m.inResult || isDrag ? 1 : 0.45}
                      style={{
                        transition: 'opacity 300ms, stroke 300ms',
                        filter: isDrag ? 'drop-shadow(0 4px 6px rgba(0,0,0,0.55))' : 'drop-shadow(0 2px 3px rgba(0,0,0,0.35))',
                      }}
                    />
                    <text
                      textAnchor="middle"
                      dominantBaseline="central"
                      y={0.5}
                      fontSize={12}
                      fontWeight={700}
                      fill="#18181b"
                      style={{ pointerEvents: 'none' }}
                    >
                      {m.id}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* operation picker */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-xs font-medium text-muted-foreground">Operation:</span>
            {OPS.filter((o) => !o.needsC).map((o) => (
              <button
                key={o.id}
                onClick={() => setOpId(o.id)}
                className={`rounded-lg border px-2.5 py-1 font-mono text-xs transition-colors ${
                  opId === o.id
                    ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300'
                    : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
          {showC && (
            <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
              <span className="mr-1 text-xs font-medium text-muted-foreground">With C:</span>
              {OPS.filter((o) => o.needsC).map((o) => (
                <button
                  key={o.id}
                  onClick={() => setOpId(o.id)}
                  className={`rounded-lg border px-2.5 py-1 font-mono text-xs transition-colors ${
                    opId === o.id
                      ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300'
                      : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ---------------- result panel ---------------- */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-border bg-background/50 p-4">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Live result</p>
            <p className="mt-2 font-mono text-lg font-semibold break-words text-foreground">
              {op.label} <span className="text-muted-foreground">=</span>{' '}
              <span className="text-emerald-400">
                {resultEls.length === 0 ? '∅' : `{ ${resultEls.map((m) => m.id).join(', ')} }`}
              </span>
            </p>
            <p className="mt-1 font-mono text-[11px] leading-relaxed text-muted-foreground">
              {op.label} <span className="opacity-60">=</span> {op.builder}
            </p>
            {resultEls.length === 0 && (
              <p className="mt-2 text-xs text-amber-400/90">Empty set — drag some dots into the region.</p>
            )}
          </div>

          <div className="rounded-xl border border-border bg-background/50 p-4">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Set sizes</p>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {sizes.map((s) => (
                <div key={s.label} className="flex items-center justify-between rounded-lg bg-muted/30 px-2 py-1.5">
                  <span className="font-mono text-[11px] text-muted-foreground">{s.label}</span>
                  <span className="font-mono text-sm font-semibold text-foreground">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-background/50 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <Switch id="show-c" checked={showC} onCheckedChange={setShowC} />
              <Label htmlFor="show-c" className="cursor-pointer text-sm text-muted-foreground">
                Third set <span className="font-mono text-foreground">C</span>
              </Label>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setDots(INITIAL_DOTS)
                dragRef.current = null
                setDraggingId(null)
              }}
            >
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Reset dots
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          select <span className="font-mono text-foreground">A ∩ B</span>, then drag dot{' '}
          <span className="font-mono text-foreground">b</span> out of both circles — watch the readout drop to{' '}
          <span className="font-mono text-foreground">{'{ f, l }'}</span> as you cross each boundary.
        </span>
      </div>
    </div>
  )
}
