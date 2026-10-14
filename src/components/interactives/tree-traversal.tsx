'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TreePine, Lightbulb, Play, Trash2, Dices, GitBranch, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'

/* ------------------------------------------------------------------ */
/* tree model                                                          */
/* ------------------------------------------------------------------ */

interface TNode {
  id: number
  label: string
  kind: 'num' | 'var' | 'op'
  left: TNode | null
  right: TNode | null
}

let tid = 0
const mk = (label: string, kind: TNode['kind'], left: TNode | null = null, right: TNode | null = null): TNode => ({
  id: ++tid,
  label,
  kind,
  left,
  right,
})

function insertBST(root: TNode | null, value: number): { root: TNode | null; inserted: boolean; path: number[] } {
  const path: number[] = []
  if (!root) return { root: mk(String(value), 'num'), inserted: true, path }
  let inserted = false
  const rec = (node: TNode): TNode => {
    path.push(node.id)
    if (value < Number(node.label)) {
      return { ...node, left: node.left ? rec(node.left) : (inserted = true, mk(String(value), 'num')) }
    }
    if (value > Number(node.label)) {
      return { ...node, right: node.right ? rec(node.right) : (inserted = true, mk(String(value), 'num')) }
    }
    return node // duplicate
  }
  const out = rec(root)
  return { root: out, inserted, path }
}

function bstFrom(values: number[]): TNode | null {
  let root: TNode | null = null
  for (const v of values) {
    root = insertBST(root, v).root
  }
  return root
}

function expressionTree(): TNode {
  return mk('×', 'op', mk('+', 'op', mk('a', 'var'), mk('3', 'num')), mk('−', 'op', mk('b', 'var'), mk('2', 'num')))
}

function size(n: TNode | null): number {
  return n ? 1 + size(n.left) + size(n.right) : 0
}
function height(n: TNode | null): number {
  return n ? 1 + Math.max(height(n.left), height(n.right)) : 0
}
function leaves(n: TNode | null): number {
  if (!n) return 0
  if (!n.left && !n.right) return 1
  return leaves(n.left) + leaves(n.right)
}

interface Entry {
  id: number
  label: string
  kind: TNode['kind']
}

function preorder(n: TNode | null, out: Entry[] = []): Entry[] {
  if (!n) return out
  out.push({ id: n.id, label: n.label, kind: n.kind })
  preorder(n.left, out)
  preorder(n.right, out)
  return out
}
function inorder(n: TNode | null, out: Entry[] = []): Entry[] {
  if (!n) return out
  inorder(n.left, out)
  out.push({ id: n.id, label: n.label, kind: n.kind })
  inorder(n.right, out)
  return out
}
function postorder(n: TNode | null, out: Entry[] = []): Entry[] {
  if (!n) return out
  postorder(n.left, out)
  postorder(n.right, out)
  out.push({ id: n.id, label: n.label, kind: n.kind })
  return out
}
function levelorder(n: TNode | null): Entry[] {
  const out: Entry[] = []
  if (!n) return out
  const q: TNode[] = [n]
  while (q.length > 0) {
    const cur = q.shift() as TNode
    out.push({ id: cur.id, label: cur.label, kind: cur.kind })
    if (cur.left) q.push(cur.left)
    if (cur.right) q.push(cur.right)
  }
  return out
}

function infixOf(n: TNode): string {
  if (!n.left && !n.right) return n.label
  return `(${infixOf(n.left as TNode)}${n.label}${infixOf(n.right as TNode)})`
}
function prefixOf(n: TNode): string {
  if (!n.left && !n.right) return n.label
  return `${n.label} ${prefixOf(n.left as TNode)} ${prefixOf(n.right as TNode)}`
}
function postfixOf(n: TNode): string {
  if (!n.left && !n.right) return n.label
  return `${postfixOf(n.left as TNode)} ${postfixOf(n.right as TNode)} ${n.label}`
}

/* ------------------------------------------------------------------ */
/* layout                                                              */
/* ------------------------------------------------------------------ */

const TW = 900
const TH = 440

interface LaidNode {
  node: TNode
  x: number
  y: number
}
interface LaidEdge {
  x1: number
  y1: number
  x2: number
  y2: number
  id: string
}

function layout(root: TNode | null): { nodes: LaidNode[]; edges: LaidEdge[] } {
  const nodes: LaidNode[] = []
  const edges: LaidEdge[] = []
  if (!root) return { nodes, edges }
  const count = size(root)
  const h = Math.max(1, height(root))
  const padX = 48
  const padT = 44
  const padB = 36
  let i = 0
  // x coordinate comes from the node's INORDER index — tidy tree layout
  const walk = (n: TNode, depth: number): LaidNode => {
    const leftLaid = n.left ? walk(n.left, depth + 1) : null
    const ln: LaidNode = {
      node: n,
      x: count === 1 ? TW / 2 : padX + (i / (count - 1)) * (TW - 2 * padX),
      y: padT + (depth / h) * (TH - padT - padB),
    }
    i++
    nodes.push(ln)
    if (leftLaid && n.left) {
      edges.push({ x1: ln.x - 7, y1: ln.y + 15, x2: leftLaid.x + 7, y2: leftLaid.y - 15, id: `e${n.id}-${n.left.id}` })
    }
    if (n.right) {
      const c = walk(n.right, depth + 1)
      edges.push({ x1: ln.x + 7, y1: ln.y + 15, x2: c.x - 7, y2: c.y - 15, id: `e${n.id}-${n.right.id}` })
    }
    return ln
  }
  walk(root, 0)
  return { nodes, edges }
}

/* ------------------------------------------------------------------ */
/* main                                                                */
/* ------------------------------------------------------------------ */

type TravKind = 'pre' | 'in' | 'post' | 'level'

const TRAVS: { id: TravKind; label: string; hint: string }[] = [
  { id: 'pre', label: 'Preorder', hint: 'root → left → right' },
  { id: 'in', label: 'Inorder', hint: 'left → root → right' },
  { id: 'post', label: 'Postorder', hint: 'left → right → root' },
  { id: 'level', label: 'Level-order', hint: 'breadth-first by row' },
]

export default function TreeTraversal() {
  const [tree, setTree] = useState<TNode | null>(() => bstFrom([50, 30, 70, 20, 40, 60, 80]))
  const [tab, setTab] = useState<'presets' | 'build'>('presets')
  const [input, setInput] = useState('')
  const [msg, setMsg] = useState('')
  const [walk, setWalk] = useState<{ tree: TNode; path: number[]; idx: number; value: number } | null>(null)
  const [trav, setTrav] = useState<{ tree: TNode; kind: TravKind; order: Entry[]; idx: number } | null>(null)

  /* animations stay live only while the tree they were built from is current */
  const activeWalk = walk !== null && walk.tree === tree ? walk : null
  const activeTrav = trav !== null && trav.tree === tree ? trav : null

  const laid = useMemo(() => layout(tree), [tree])
  const stats = useMemo(
    () => ({ count: size(tree), height: height(tree), leaves: leaves(tree) }),
    [tree]
  )
  const isExpression = useMemo(() => {
    let has = false
    const scan = (n: TNode | null) => {
      if (!n) return
      if (n.kind === 'op') has = true
      scan(n.left)
      scan(n.right)
    }
    scan(tree)
    return has
  }, [tree])

  /* traversal auto-advance (state updates only inside timeouts) */
  useEffect(() => {
    if (activeTrav && activeTrav.idx < activeTrav.order.length - 1) {
      const t = setTimeout(() => setTrav((s) => (s ? { ...s, idx: s.idx + 1 } : s)), 620)
      return () => clearTimeout(t)
    }
  }, [activeTrav])

  const beginInsert = () => {
    const v = parseInt(input, 10)
    if (isNaN(v) || v < -99 || v > 999) {
      setMsg('Enter an integer between −99 and 999.')
      return
    }
    setMsg('')
    setTrav(null)
    if (!tree) {
      setTree(mk(String(v), 'num'))
      setInput('')
      return
    }
    const { path } = insertBST(tree, v) // dry run for the walk path
    setWalk({ tree, path, idx: 0, value: v })
  }

  /* insert walk animation (advances and commits inside timeouts) */
  useEffect(() => {
    if (!activeWalk || activeWalk.tree !== tree) return
    const t = setTimeout(() => {
      if (activeWalk.idx < activeWalk.path.length - 1) {
        setWalk({ ...activeWalk, idx: activeWalk.idx + 1 })
      } else {
        const { root, inserted } = insertBST(tree, activeWalk.value)
        if (inserted) {
          setTree(root)
          setMsg('')
        } else {
          setMsg(`${activeWalk.value} is already in the tree — BSTs hold distinct keys.`)
        }
        setInput('')
        setWalk(null)
      }
    }, 520)
    return () => clearTimeout(t)
  }, [activeWalk, tree])

  const randomFill = () => {
    const pool = Array.from({ length: 25 }, (_, i) => i + 1)
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[pool[i], pool[j]] = [pool[j], pool[i]]
    }
    const count = 5 + Math.floor(Math.random() * 4)
    setTree(bstFrom(pool.slice(0, count)))
    setMsg('')
  }

  const startTraversal = useCallback(
    (kind: TravKind) => {
      if (!tree) return
      const order =
        kind === 'pre' ? preorder(tree) : kind === 'in' ? inorder(tree) : kind === 'post' ? postorder(tree) : levelorder(tree)
      setTrav({ tree, kind, order, idx: 0 })
    },
    [tree]
  )

  const orderMap = useMemo(() => {
    const m = new Map<number, number>()
    if (activeTrav) activeTrav.order.forEach((e, i) => m.set(e.id, i))
    return m
  }, [activeTrav])

  const walkSet = useMemo(() => new Set(activeWalk ? activeWalk.path.slice(0, activeWalk.idx + 1) : []), [activeWalk])
  const doneIdx = activeTrav ? activeTrav.idx : -1
  const currentId = activeTrav ? activeTrav.order[Math.max(0, Math.min(activeTrav.idx, activeTrav.order.length - 1))]?.id : undefined

  const infix = tree && isExpression ? (() => {
    const s = infixOf(tree)
    return s.startsWith('(') && s.endsWith(')') ? s.slice(1, -1) : s
  })() : null

  return (
    <div className="flex flex-col gap-4">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <TreePine className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Tree Traversal Animator</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Light up preorder, inorder, postorder and level-order — or grow your own BST one animated comparison at a time.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">nodes = {stats.count}</span>
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">height = {stats.height}</span>
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">leaves = {stats.leaves}</span>
        </div>
      </div>

      {/* builder / presets */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card p-3">
        <Tabs value={tab} onValueChange={(v) => setTab(v as 'presets' | 'build')}>
          <TabsList className="h-9">
            <TabsTrigger value="presets" className="text-xs">Presets</TabsTrigger>
            <TabsTrigger value="build" className="text-xs">BST builder</TabsTrigger>
          </TabsList>
        </Tabs>

        {tab === 'presets' ? (
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm" variant="outline" onClick={() => { setTree(bstFrom([50, 30, 70, 20, 40, 60, 80])); setMsg('') }}>
              Sample BST
            </Button>
            <Button size="sm" variant="outline" onClick={() => { setTree(bstFrom([40, 20, 60, 10, 30, 50, 70])); setMsg('') }}>
              Balanced
            </Button>
            <Button size="sm" variant="outline" onClick={() => { setTree(bstFrom([10, 20, 30, 40, 50, 60])); setMsg('') }}>
              Degenerate
            </Button>
            <Button size="sm" variant="outline" className="border-amber-500/40 text-amber-400 hover:bg-amber-500/10" onClick={() => { setTree(expressionTree()); setMsg('') }}>
              (a+3)×(b−2)
            </Button>
            <Button size="sm" variant="outline" onClick={randomFill}>
              <Dices className="h-3.5 w-3.5" /> Random
            </Button>
          </div>
        ) : (
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') beginInsert() }}
              placeholder="integer, e.g. 42"
              inputMode="numeric"
              className="h-9 w-36 font-mono text-sm"
            />
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500" onClick={beginInsert} disabled={activeWalk !== null}>
              <Play className="h-3.5 w-3.5" /> Insert
            </Button>
            <Button size="sm" variant="outline" onClick={randomFill}>
              <Dices className="h-3.5 w-3.5" /> Random
            </Button>
            <Button size="sm" variant="outline" onClick={() => { setTree(null); setMsg('') }}>
              <Trash2 className="h-3.5 w-3.5" /> Clear
            </Button>
            {msg && <span className="text-xs text-amber-400">{msg}</span>}
          </div>
        )}
      </div>

      {/* canvas */}
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <GitBranch className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {isExpression ? 'Expression tree' : 'Binary tree'}
          </span>
          {activeWalk && (
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-auto font-mono text-[11px] text-amber-400"
            >
              comparing {activeWalk.value}…
            </motion.span>
          )}
        </div>
        <div className="p-2">
          <svg viewBox={`0 0 ${TW} ${TH}`} className="h-auto min-h-[220px] w-full" role="img" aria-label="binary tree">
            {laid.edges.map((e) => (
              <line key={e.id} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke="#3f3f46" strokeWidth={2} className="transition-all" />
            ))}
            {laid.nodes.map((ln) => {
              const n = ln.node
              const oIdx = orderMap.has(n.id) ? (orderMap.get(n.id) as number) : -1
              const visited = oIdx >= 0 && oIdx <= doneIdx
              const isCurrent = currentId === n.id
              const walkHi = walkSet.has(n.id)
              const isWalkCurrent = activeWalk ? activeWalk.path[activeWalk.idx] === n.id : false
              return (
                <g key={n.id} transform={`translate(${ln.x},${ln.y})`}>
                  {isCurrent && (
                    <motion.circle
                      r={20}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth={2.5}
                      animate={{ r: [20, 40], opacity: [0.9, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                  {n.kind === 'op' ? (
                    <rect x={-24} y={-19} width={48} height={38} rx={9}
                      className="transition-colors"
                      fill={visited ? 'rgba(16,185,129,0.25)' : 'rgba(245,158,11,0.10)'}
                      stroke={visited ? '#10b981' : isCurrent ? '#10b981' : isWalkCurrent ? '#fbbf24' : walkHi ? 'rgba(251,191,36,0.6)' : '#d97706'}
                      strokeWidth={isWalkCurrent || isCurrent ? 3 : 2}
                    />
                  ) : (
                    <motion.circle
                      r={20}
                      initial={{ r: 0 }}
                      animate={{ r: 20 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                      className="transition-colors"
                      fill={visited ? 'rgba(16,185,129,0.25)' : isWalkCurrent ? 'rgba(251,191,36,0.18)' : walkHi ? 'rgba(251,191,36,0.08)' : 'var(--color-card)'}
                      stroke={visited ? '#10b981' : isCurrent ? '#10b981' : isWalkCurrent ? '#fbbf24' : walkHi ? 'rgba(251,191,36,0.65)' : '#10b981'}
                      strokeWidth={isWalkCurrent || isCurrent ? 3 : 2}
                    />
                  )}
                  <text
                    y={n.kind === 'op' ? 6 : 6}
                    textAnchor="middle"
                    fontSize={n.label.length > 2 ? 15 : 17}
                    fontWeight={700}
                    fill={n.kind === 'op' ? '#fbbf24' : '#fafafa'}
                    className="font-mono"
                    style={{ pointerEvents: 'none' }}
                  >
                    {n.label}
                  </text>
                  {visited && (
                    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 500, damping: 22 }}>
                      <circle cx={17} cy={-17} r={10} fill="#10b981" />
                      <text x={17} y={-13} textAnchor="middle" fontSize={11} fontWeight={800} fill="#052e1b" className="font-mono" style={{ pointerEvents: 'none' }}>
                        {oIdx + 1}
                      </text>
                    </motion.g>
                  )}
                </g>
              )
            })}
            {laid.nodes.length === 0 && (
              <text x={TW / 2} y={TH / 2} textAnchor="middle" className="fill-zinc-600 font-mono" fontSize={15}>
                {tab === 'build' ? 'empty tree — type a number and hit Insert' : 'load a preset'}
              </text>
            )}
          </svg>
        </div>
      </div>

      {/* traversals */}
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="rounded-xl border border-border bg-card p-4 lg:col-span-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Run a traversal</span>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {TRAVS.map((t) => (
              <Button
                key={t.id}
                size="sm"
                variant={activeTrav?.kind === t.id ? 'default' : 'outline'}
                className={activeTrav?.kind === t.id ? 'bg-emerald-600 hover:bg-emerald-500' : ''}
                onClick={() => startTraversal(t.id)}
              >
                {t.label}
              </Button>
            ))}
          </div>
          <div className="mt-3 min-h-9">
            <AnimatePresence>
              {activeTrav && (
                <motion.div key={activeTrav.kind} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-1.5">
                  {activeTrav.order.slice(0, doneIdx + 1).map((e, i) => (
                    <motion.span
                      key={`${e.id}-${i}`}
                      layout
                      initial={{ opacity: 0, y: -8, scale: 0.7 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 26 }}
                      className={
                        'rounded-md border px-2.5 py-1 font-mono text-sm ' +
                        (e.kind === 'op'
                          ? 'border-amber-500/40 bg-amber-500/10 text-amber-300'
                          : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300')
                      }
                    >
                      {e.label}
                      <span className="ml-1.5 text-[10px] text-zinc-500">{i + 1}</span>
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {activeTrav && (
            <p className="mt-2 font-mono text-[11px] text-muted-foreground">
              {TRAVS.find((t) => t.id === activeTrav.kind)?.hint} · {doneIdx + 1}/{activeTrav.order.length}
            </p>
          )}
        </div>

        {/* notation / stats */}
        <div className="rounded-xl border border-border bg-card p-4 lg:col-span-2">
          <div className="mb-3 flex items-center gap-2">
            <BarChart3 className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {isExpression ? 'Notations' : 'Notes'}
            </span>
          </div>
          {isExpression && tree && (
            <div className="space-y-2">
              {[
                { name: 'infix (inorder)', val: infix ?? '', active: activeTrav?.kind === 'in', note: 'parentheses from the tree structure' },
                { name: 'prefix (preorder)', val: prefixOf(tree), active: activeTrav?.kind === 'pre', note: 'Polish notation' },
                { name: 'postfix (postorder)', val: postfixOf(tree), active: activeTrav?.kind === 'post', note: 'reverse Polish — no parens needed' },
              ].map((row) => (
                <div key={row.name} className={'rounded-lg border px-3 py-2 transition-colors ' + (row.active ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-border bg-muted/40')}>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{row.name}</span>
                    <span className="text-[10px] text-zinc-600">{row.note}</span>
                  </div>
                  <div className="mt-1 break-all font-mono text-sm text-foreground">{row.val}</div>
                </div>
              ))}
            </div>
          )}
          {!isExpression && (
            <div className="space-y-2 text-xs leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Inorder</span> of a BST emits keys in sorted order — that&apos;s the whole magic
                of BST sort.
              </p>
              <p>
                <span className="font-semibold text-foreground">Preorder</span> is what you write down to serialize a BST: re-inserting the keys
                in this order rebuilds the identical tree.
              </p>
              <p>
                <span className="font-semibold text-foreground">Postorder</span> evaluates children before parents — exactly how expression trees
                are computed bottom-up.
              </p>
              <p>
                <span className="font-semibold text-foreground">Level-order</span> uses a queue (BFS); the other three use a stack (DFS).
              </p>
            </div>
          )}
        </div>
      </div>

      {/* try this */}
      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> run Inorder on the Sample BST — the chips come out perfectly sorted.
          Then switch to the Degenerate preset to see a BST collapsing into a linked list, and rebuild it with the Random button: average depth
          stays logarithmic, but worst case is O(n). Finally load (a+3)×(b−2) and compare all three notations.
        </p>
      </div>
    </div>
  )
}
