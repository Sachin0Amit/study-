'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GitBranch, Lightbulb, Check, X, Grid3x3, Shapes, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

/* ------------------------------------------------------------------ */
/* types + helpers                                                     */
/* ------------------------------------------------------------------ */

type Matrix = boolean[][]

function emptyMatrix(n: number): Matrix {
  return Array.from({ length: n }, () => Array.from({ length: n }, () => false))
}

function makePreset(n: number, kind: 'empty' | 'identity' | 'leq' | 'mod3' | 'full'): Matrix {
  const m = emptyMatrix(n)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const a = i + 1
      const b = j + 1
      if (kind === 'empty') m[i][j] = false
      else if (kind === 'identity') m[i][j] = i === j
      else if (kind === 'leq') m[i][j] = a <= b
      else if (kind === 'mod3') m[i][j] = a % 3 === b % 3
      else m[i][j] = true
    }
  }
  return m
}

function transpose(m: Matrix): Matrix {
  return m.map((row, i) => row.map((_, j) => m[j][i]))
}

function multiply(a: Matrix, b: Matrix): Matrix {
  const n = a.length
  return a.map((row, i) => b[0].map((_, j) => row.some((v, k) => v && b[k][j])))
}

function isReflexive(m: Matrix): boolean {
  return m.every((row, i) => row[i])
}

function isSymmetric(m: Matrix): boolean {
  const t = transpose(m)
  return m.every((row, i) => row.every((v, j) => v === t[i][j]))
}

function isAntisymmetric(m: Matrix): boolean {
  return m.every((row, i) => row.every((v, j) => (i === j ? true : !(v && m[j][i]))))
}

function isTransitive(m: Matrix): boolean {
  const m2 = multiply(m, m) // boolean R∘R
  return m2.every((row, i) => row.every((v, j) => (v ? m[i][j] : true)))
}

function equivalenceClasses(m: Matrix): number[][] {
  const n = m.length
  const seen = new Set<number>()
  const classes: number[][] = []
  for (let i = 0; i < n; i++) {
    if (seen.has(i)) continue
    const cls: number[] = []
    for (let j = 0; j < n; j++) {
      if (m[i][j]) {
        cls.push(j)
        seen.add(j)
      }
    }
    classes.push(cls)
  }
  return classes
}

const PRESETS: { label: string; kind: 'empty' | 'identity' | 'leq' | 'mod3' | 'full' }[] = [
  { label: 'Empty', kind: 'empty' },
  { label: 'Identity', kind: 'identity' },
  { label: '≤ on A', kind: 'leq' },
  { label: 'Same mod 3', kind: 'mod3' },
  { label: 'Full A×A', kind: 'full' },
]

/* ------------------------------------------------------------------ */
/* property badge                                                      */
/* ------------------------------------------------------------------ */

function PropertyBadge({ name, holds, tip }: { name: string; holds: boolean; tip: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={
            'flex cursor-help items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ' +
            (holds ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' : 'border-rose-500/40 bg-rose-500/10 text-rose-400')
          }
        >
          {holds ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
          {name}
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[240px] text-left leading-relaxed">
        <span className="font-semibold">{name}</span> — {tip}
      </TooltipContent>
    </Tooltip>
  )
}

/* ------------------------------------------------------------------ */
/* main component                                                      */
/* ------------------------------------------------------------------ */

const SIZE = 440
const C = SIZE / 2
const RAD = SIZE / 2 - 70
const NR = 24 // node radius

export default function RelationExplorer() {
  const [n, setN] = useState(4)
  const [matrix, setMatrix] = useState<Matrix>(() => makePreset(4, 'leq'))
  const [hover, setHover] = useState<{ i: number; j: number } | null>(null)

  const props = useMemo(
    () => ({
      reflexive: isReflexive(matrix),
      symmetric: isSymmetric(matrix),
      antisymmetric: isAntisymmetric(matrix),
      transitive: isTransitive(matrix),
    }),
    [matrix]
  )
  const isEquivalence = props.reflexive && props.symmetric && props.transitive
  const isPartialOrder = props.reflexive && props.antisymmetric && props.transitive
  const classes = useMemo(() => (isEquivalence ? equivalenceClasses(matrix) : []), [isEquivalence, matrix])
  const pairCount = useMemo(() => matrix.flat().filter(Boolean).length, [matrix])

  const setNsafe = (next: 4 | 5) => {
    setN(next)
    setMatrix(makePreset(next, 'leq'))
    setHover(null)
  }

  const applyPreset = (kind: (typeof PRESETS)[number]['kind']) => setMatrix(makePreset(n, kind))

  const toggle = (i: number, j: number) => {
    setMatrix((m) => m.map((row, ii) => (ii === i ? row.map((v, jj) => (jj === j ? !v : v)) : row)))
  }

  // node positions on circle
  const pos = useMemo(
    () => Array.from({ length: n }, (_, i) => {
      const ang = -Math.PI / 2 + (2 * Math.PI * i) / n
      return { x: C + RAD * Math.cos(ang), y: C + RAD * Math.sin(ang) }
    }),
    [n]
  )

  const isHi = (i: number, j: number) => hover !== null && hover.i === i && hover.j === j

  return (
    <div className="flex flex-col gap-4">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <GitBranch className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Relation Explorer</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Toggle cells of the matrix R ⊆ A×A and watch the digraph, properties and equivalence classes update together.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">|A|</span>
          <div className="flex overflow-hidden rounded-md border border-border">
            {([4, 5] as const).map((v) => (
              <button
                key={v}
                onClick={() => setNsafe(v)}
                className={'h-8 w-9 font-mono text-sm transition ' + (n === v ? 'bg-emerald-600 text-white' : 'bg-muted/40 text-muted-foreground hover:text-foreground')}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* presets + properties */}
      <div className="flex flex-wrap items-center gap-2">
        {PRESETS.map((p) => (
          <Button key={p.label} size="sm" variant="outline" onClick={() => applyPreset(p.kind)}>
            {p.label}
          </Button>
        ))}
        <span className="ml-auto font-mono text-xs text-muted-foreground">|R| = {pairCount} / {n * n}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        <PropertyBadge
          name="Reflexive"
          holds={props.reflexive}
          tip="Every element relates to itself: (a,a) ∈ R for all a ∈ A. On the graph this means every node carries a self-loop — the matrix diagonal is all 1s."
        />
        <PropertyBadge
          name="Symmetric"
          holds={props.symmetric}
          tip="aRb implies bRa for all a,b. Every arrow between two distinct nodes has a matching reverse arrow — the matrix is symmetric across its diagonal."
        />
        <PropertyBadge
          name="Antisymmetric"
          holds={props.antisymmetric}
          tip="aRb and bRa implies a = b. No two-way arrows between different elements (self-loops on the diagonal are allowed). Together with reflexive + transitive this gives a partial order."
        />
        <PropertyBadge
          name="Transitive"
          holds={props.transitive}
          tip="aRb and bRc implies aRc: every path of length 2 must be matched by a direct edge. Computed here as R² ⊆ R using boolean matrix multiplication."
        />
        {isEquivalence && (
          <div className="flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-400">
            <Crown className="h-3.5 w-3.5" /> Equivalence relation
          </div>
        )}
        {isPartialOrder && !isEquivalence && (
          <div className="flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-400">
            <Crown className="h-3.5 w-3.5" /> Partial order
          </div>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* matrix */}
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <Grid3x3 className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Matrix Mᵣ — click to toggle</span>
          </div>
          <div className="overflow-x-auto p-4">
            <table className="mx-auto border-separate" style={{ borderSpacing: 3 }}>
              <thead>
                <tr>
                  <th />
                  {Array.from({ length: n }, (_, j) => (
                    <th key={j} className="w-9 pb-1 text-center font-mono text-xs font-medium text-muted-foreground">
                      {j + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={i}>
                    <td className="pr-1 text-right font-mono text-xs font-medium text-muted-foreground">{i + 1}</td>
                    {row.map((v, j) => {
                      const hi = isHi(i, j)
                      return (
                        <td key={j}>
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={() => toggle(i, j)}
                            onMouseEnter={() => setHover({ i, j })}
                            onMouseLeave={() => setHover(null)}
                            aria-label={`R(${i + 1}, ${j + 1}) = ${v ? 1 : 0}`}
                            className={
                              'h-9 w-9 rounded-md border font-mono text-sm transition-colors ' +
                              (v
                                ? 'border-emerald-500/60 bg-emerald-500/80 text-zinc-950'
                                : 'border-border bg-muted/30 text-transparent hover:bg-muted/60') +
                              (hi ? ' ring-2 ring-amber-400' : '')
                            }
                          >
                            1
                          </motion.button>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-border px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
            Cell (i, j) = 1 means the ordered pair (i, j) ∈ R — hover a cell to spotlight its arrow in the digraph.
          </p>
        </div>

        {/* digraph */}
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <Shapes className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Digraph of R</span>
          </div>
          <div className="p-2">
            <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="mx-auto h-auto w-full max-w-[440px]" role="img" aria-label="directed graph">
              <defs>
                <marker id="rel-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 1 L 9 5 L 0 9 z" className="fill-zinc-600" />
                </marker>
                <marker id="rel-arrow-hi" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                  <path d="M 0 1 L 9 5 L 0 9 z" className="fill-amber-400" />
                </marker>
                <marker id="rel-arrow-self" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 9 5 L 0 9 z" className="fill-zinc-500" />
                </marker>
              </defs>

              {/* edges i != j */}
              {matrix.map((row, i) =>
                row.map((v, j) => {
                  if (!v || i === j) return null
                  const a = pos[i]
                  const b = pos[j]
                  const dx = b.x - a.x
                  const dy = b.y - a.y
                  const len = Math.hypot(dx, dy) || 1
                  const ux = dx / len
                  const uy = dy / len
                  const sx = a.x + ux * (NR + 2)
                  const sy = a.y + uy * (NR + 2)
                  const ex = b.x - ux * (NR + 9)
                  const ey = b.y - uy * (NR + 9)
                  // perpendicular bow
                  const px = -uy
                  const py = ux
                  const bow = Math.min(34, len * 0.22)
                  const mx = (sx + ex) / 2 + px * bow
                  const my = (sy + ey) / 2 + py * bow
                  const hi = isHi(i, j)
                  return (
                    <g key={`e${i}-${j}`}>
                      <path
                        d={`M${sx},${sy} Q${mx},${my} ${ex},${ey}`}
                        fill="none"
                        stroke={hi ? '#fbbf24' : '#52525b'}
                        strokeWidth={hi ? 3.5 : 2}
                        markerEnd={hi ? 'url(#rel-arrow-hi)' : 'url(#rel-arrow)'}
                        className="transition-all"
                      />
                      <path
                        d={`M${sx},${sy} Q${mx},${my} ${ex},${ey}`}
                        fill="none"
                        stroke="transparent"
                        strokeWidth={16}
                        style={{ pointerEvents: 'stroke', cursor: 'pointer' }}
                        onMouseEnter={() => setHover({ i, j })}
                        onMouseLeave={() => setHover(null)}
                      />
                    </g>
                  )
                })
              )}

              {/* self loops */}
              {matrix.map((row, i) =>
                row[i] ? (() => {
                  const a = pos[i]
                  const outx = (a.x - C) / RAD
                  const outy = (a.y - C) / RAD
                  const lr = 13
                  const lx = a.x + outx * (NR + 11)
                  const ly = a.y + outy * (NR + 11)
                  const hi = isHi(i, i)
                  return (
                    <g key={`s${i}`}>
                      <path
                        d={`M${lx - lr},${ly} a${lr},${lr} 0 1,0 ${2 * lr},0 a${lr},${lr} 0 1,0 ${-2 * lr},0`}
                        fill="none"
                        stroke={hi ? '#fbbf24' : '#71717a'}
                        strokeWidth={hi ? 3 : 2}
                        markerEnd={hi ? 'url(#rel-arrow-hi)' : 'url(#rel-arrow-self)'}
                      />
                      <circle
                        cx={lx}
                        cy={ly}
                        r={16}
                        fill="transparent"
                        style={{ pointerEvents: 'all', cursor: 'pointer' }}
                        onMouseEnter={() => setHover({ i, j: i })}
                        onMouseLeave={() => setHover(null)}
                      />
                    </g>
                  )
                })() : null
              )}

              {/* nodes */}
              {pos.map((p, i) => {
                const hiSelf = isHi(i, i)
                return (
                  <g key={`n${i}`}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={NR}
                      className={hiSelf ? 'fill-amber-500/20' : 'fill-card'}
                      stroke={hiSelf ? '#fbbf24' : matrix.some((_, j) => isHi(i, j) || isHi(j, i)) ? '#fbbf24' : '#10b981'}
                      strokeWidth={2}
                    />
                    <text x={p.x} y={p.y + 5} textAnchor="middle" className="fill-foreground font-mono" fontSize={15} fontWeight={600}>
                      {i + 1}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
          <p className="border-t border-border px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
            Hover any arrow to spotlight its matrix cell. Self-loops sit just outside each node.
          </p>
        </div>
      </div>

      {/* equivalence classes */}
      <AnimatePresence>
        {isEquivalence && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4"
          >
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-400">A/R — partition of A into equivalence classes</div>
            <div className="flex flex-wrap gap-2">
              {classes.map((cls, k) => (
                <div key={k} className="rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-sm text-foreground">
                  <span className="text-muted-foreground">C{k + 1} = </span>
                  {'{'}
                  {cls.map((v) => v + 1).join(', ')}
                  {'}'}
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              These blocks are disjoint, their union is all of A, and a R b exactly when they share a block — that&apos;s the fundamental
              correspondence between equivalence relations and partitions.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* try this */}
      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> start from &ldquo;≤ on A&rdquo; (a partial order — note it&apos;s antisymmetric but not symmetric), then
          remove the pairs needed to break transitivity and watch the badge flip. Or load &ldquo;Same mod 3&rdquo; and hover the big block {`{1, 4}`} to see
          its complete bipartite arrows.
        </p>
      </div>
    </div>
  )
}
