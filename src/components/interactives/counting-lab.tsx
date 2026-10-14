'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Hash, Lightbulb, Pause, Play, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

/* ------------------------------------------------------------------ */
/*  Combinatorics engine                                               */
/* ------------------------------------------------------------------ */

const LETTERS = 'ABCDEFGHIJ'
const FACTS: number[] = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800]
const CHIP_COLORS = ['#fbbf24', '#fb923c', '#f87171', '#fb7185', '#e879f9', '#a3e635', '#4ade80', '#34d399', '#2dd4bf', '#facc15']

/** P(m, t) = m! / (m−t)! — permutations of t out of m */
function pCount(m: number, t: number): number {
  if (t <= 0) return 1
  let x = 1
  for (let i = 0; i < t; i++) x *= m - i
  return x
}

/** Binomial coefficient with a small Pascal table (n ≤ 10). */
const BINOM: number[][] = (() => {
  const t: number[][] = [[1]]
  for (let m = 1; m <= 10; m++) {
    const row: number[] = [1]
    for (let j = 1; j < m; j++) row.push(t[m - 1][j - 1] + t[m - 1][j])
    row.push(1)
    t.push(row)
  }
  return t
})()

function binom(n: number, k: number): number {
  if (k < 0 || k > n) return 0
  return BINOM[n][k]
}

/** Direct lexicographic unranking of the rank-th k-permutation of 0..n−1. */
function unrankPermutation(n: number, k: number, rank: number): number[] {
  const avail = Array.from({ length: n }, (_, i) => i)
  const res: number[] = []
  let r = rank
  for (let pos = 0; pos < k; pos++) {
    const block = pCount(avail.length - 1, k - pos - 1)
    const idx = Math.floor(r / block)
    r %= block
    res.push(avail.splice(idx, 1)[0])
  }
  return res
}

/** Direct lexicographic unranking of the rank-th k-subset of 0..n−1. */
function unrankCombination(n: number, k: number, rank: number): number[] {
  const res: number[] = []
  let r = rank
  let x = 0
  for (let i = 0; i < k; i++) {
    for (;;) {
      const c = binom(n - (x + 1), k - i - 1)
      if (r < c) {
        res.push(x)
        x += 1
        break
      }
      r -= c
      x += 1
    }
  }
  return res
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CountingLab() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Hash className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Counting Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Permutations count ordered arrangements, combinations count unordered subsets. Same objects, wildly
            different totals.
          </p>
        </div>
      </div>

      <Tabs defaultValue="perm" className="mt-4 gap-4">
        <TabsList>
          <TabsTrigger value="perm">Permutations</TabsTrigger>
          <TabsTrigger value="comb">Combinations</TabsTrigger>
        </TabsList>
        <TabsContent value="perm">
          <PermutationLab />
        </TabsContent>
        <TabsContent value="comb">
          <CombinationLab />
        </TabsContent>
      </Tabs>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          set n = 10 and k = 6, then compare the two tabs — <span className="font-mono text-foreground">151,200</span>{' '}
          ordered arrangements collapse into just <span className="font-mono text-foreground">210</span> unordered
          subsets (exactly 6! = 720 times fewer).
        </span>
      </div>
    </div>
  )
}

/* ---------------------------- shared bits ---------------------------- */

function Chip({ idx, dim }: { idx: number; dim?: boolean }) {
  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-bold text-zinc-900 shadow-md"
      style={{
        backgroundColor: CHIP_COLORS[idx],
        opacity: dim ? 0.35 : 1,
        filter: dim ? 'grayscale(0.6)' : 'none',
        transition: 'opacity 300ms, filter 300ms',
      }}
    >
      {LETTERS[idx]}
    </span>
  )
}

function Controls({
  rank,
  total,
  playing,
  onPlay,
  onStep,
  onReset,
  label,
}: {
  rank: number
  total: number
  playing: boolean
  onPlay: () => void
  onStep: (d: number) => void
  onReset: () => void
  label: string
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="rounded-lg border border-border bg-muted/30 px-2.5 py-1.5 font-mono text-xs text-foreground">
        {label} <span className="font-bold text-emerald-400">#{rank + 1}</span>
        <span className="text-muted-foreground"> / {total.toLocaleString('en-US')}</span>
      </span>
      <Button size="sm" variant="outline" onClick={() => onStep(-1)} aria-label="Previous">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button size="sm" onClick={onPlay} className="min-w-[86px]">
        {playing ? <Pause className="mr-1 h-4 w-4" /> : <Play className="mr-1 h-4 w-4" />}
        {playing ? 'Pause' : 'Animate'}
      </Button>
      <Button size="sm" variant="outline" onClick={() => onStep(1)} aria-label="Next">
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button size="sm" variant="ghost" onClick={onReset} aria-label="Reset">
        <RotateCcw className="h-4 w-4" />
      </Button>
    </div>
  )
}

/* ------------------------- Permutations tab ------------------------- */

function PermutationLab() {
  const [n, setN] = useState(6)
  const [k, setK] = useState(3)
  const [rank, setRank] = useState(0)
  const [playing, setPlaying] = useState(false)

  const total = pCount(n, k)
  const effK = Math.min(k, n)
  const perm = useMemo(() => unrankPermutation(n, effK, rank % Math.max(1, total)), [n, effK, rank, total])
  const chosen = new Set(perm)
  const bench = Array.from({ length: n }, (_, i) => i).filter((i) => !chosen.has(i))

  const [prevDims, setPrevDims] = useState({ n, k: effK })
  if (prevDims.n !== n || prevDims.k !== effK) {
    setPrevDims({ n, k: effK })
    setRank(0)
  }

  useEffect(() => {
    if (!playing) return
    const t = setInterval(() => setRank((r) => (r + 1) % Math.max(1, total)), 600)
    return () => clearInterval(t)
  }, [playing, total])

  return (
    <div className="flex flex-col gap-4">
      {/* value card */}
      <div className="rounded-xl border border-border bg-background/50 p-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-2xl font-bold text-emerald-400">P({n}, {effK}) = {total.toLocaleString('en-US')}</span>
          <span className="font-mono text-xs text-muted-foreground">
            n! / (n − k)! = {FACTS[n]} / {FACTS[n - effK]}
          </span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Order matters — every rearrangement of the chosen objects counts as a different permutation.
        </p>
      </div>

      {/* arrangement slots */}
      <div>
        <p className="mb-2 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
          Ordered arrangement (first k objects)
        </p>
        <div className="flex flex-wrap gap-2">
          {effK === 0 && (
            <div className="flex h-16 items-center rounded-xl border border-dashed border-border px-4 text-xs text-muted-foreground">
              empty arrangement — only one way to order nothing
            </div>
          )}
          {perm.map((idx, slot) => (
            <div key={slot} className="flex flex-col items-center gap-1">
              <span className="font-mono text-[10px] text-muted-foreground">{slot + 1}</span>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-dashed border-border/70 bg-muted/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={LETTERS[idx]}
                    initial={{ opacity: 0, y: 12, scale: 0.75 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.75 }}
                    transition={{ duration: 0.16 }}
                  >
                    <Chip idx={idx} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
        {bench.length > 0 && (
          <div className="mt-3">
            <p className="mb-1.5 text-[10px] font-medium text-muted-foreground/70">left out of the arrangement:</p>
            <div className="flex flex-wrap gap-1.5">
              {bench.map((idx) => (
                <Chip key={idx} idx={idx} dim />
              ))}
            </div>
          </div>
        )}
      </div>

      <Controls
        rank={rank}
        total={total}
        playing={playing}
        onPlay={() => setPlaying((p) => !p)}
        onStep={(d) => setRank((r) => (r + d + Math.max(1, total)) % Math.max(1, total))}
        onReset={() => {
          setRank(0)
          setPlaying(false)
        }}
        label="arrangement"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <SizeControls n={n} k={k} setN={setN} setK={setK} />
        <FactorialStrip n={n} />
      </div>
    </div>
  )
}

/* ------------------------- Combinations tab ------------------------- */

function CombinationLab() {
  const [n, setN] = useState(6)
  const [k, setK] = useState(3)
  const [rank, setRank] = useState(0)
  const [playing, setPlaying] = useState(false)

  const total = binom(n, k)
  const effK = Math.min(k, n)
  const subset = useMemo(() => unrankCombination(n, effK, rank % Math.max(1, total)), [n, effK, rank, total])
  const inSubset = new Set(subset)

  const [prevDims, setPrevDims] = useState({ n, k: effK })
  if (prevDims.n !== n || prevDims.k !== effK) {
    setPrevDims({ n, k: effK })
    setRank(0)
  }

  useEffect(() => {
    if (!playing) return
    const t = setInterval(() => setRank((r) => (r + 1) % Math.max(1, total)), 600)
    return () => clearInterval(t)
  }, [playing, total])

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl border border-border bg-background/50 p-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-2xl font-bold text-emerald-400">
            C({n}, {effK}) = {total.toLocaleString('en-US')}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            n! / (k!(n − k)!) = {FACTS[n]} / ({FACTS[effK]} · {FACTS[n - effK]})
          </span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Order does not matter — the glowing subset is the same team no matter how you list it.
        </p>
      </div>

      {/* subset chips */}
      <div>
        <p className="mb-2 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
          Current k-subset (k = {effK})
        </p>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: n }, (_, i) => i).map((i) => {
            const active = inSubset.has(i)
            return (
              <motion.div
                key={i}
                animate={{ scale: active ? 1.1 : 1, y: active ? -4 : 0, opacity: active ? 1 : 0.4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                style={{
                  filter: active ? 'none' : 'grayscale(0.6)',
                }}
              >
                <div
                  className="rounded-full"
                  style={{
                    boxShadow: active ? '0 0 0 3px rgba(16,185,129,0.45), 0 0 20px rgba(16,185,129,0.3)' : 'none',
                    borderRadius: 999,
                    transition: 'box-shadow 300ms',
                  }}
                >
                  <Chip idx={i} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <Controls
        rank={rank}
        total={total}
        playing={playing}
        onPlay={() => setPlaying((p) => !p)}
        onStep={(d) => setRank((r) => (r + d + Math.max(1, total)) % Math.max(1, total))}
        onReset={() => {
          setRank(0)
          setPlaying(false)
        }}
        label="subset"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <SizeControls n={n} k={k} setN={setN} setK={setK} />
        <PascalTriangle n={n} k={effK} onPick={(nn, kk) => { setN(nn); setK(kk) }} />
      </div>
    </div>
  )
}

/* ------------------------------ widgets ------------------------------ */

function SizeControls({ n, k, setN, setK }: { n: number; k: number; setN: (v: number) => void; setK: (v: number) => void }) {
  return (
    <div className="flex flex-col justify-center gap-4 rounded-xl border border-border bg-background/50 p-4">
      <div className="flex items-center gap-3">
        <span className="w-16 shrink-0 text-xs text-muted-foreground">
          n <span className="font-mono text-foreground">{n}</span>
        </span>
        <Slider min={3} max={10} step={1} value={[n]} onValueChange={(v) => setN(Math.min(10, Math.max(3, v[0] ?? 6)))} aria-label="n" />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-16 shrink-0 text-xs text-muted-foreground">
          k <span className="font-mono text-foreground">{Math.min(k, n)}</span>
        </span>
        <Slider min={0} max={n} step={1} value={[Math.min(k, n)]} onValueChange={(v) => setK(Math.min(n, Math.max(0, v[0] ?? 3)))} aria-label="k" />
      </div>
      <p className="text-[11px] text-muted-foreground">k ≤ n is enforced automatically.</p>
    </div>
  )
}

function FactorialStrip({ n }: { n: number }) {
  return (
    <div className="rounded-xl border border-border bg-background/50 p-4">
      <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Factorial growth</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {FACTS.slice(1).map((f, i) => (
          <span
            key={i}
            className={`rounded-md px-2 py-1 font-mono text-[11px] transition-colors ${
              i + 1 === n
                ? 'bg-emerald-500/20 font-bold text-emerald-300 ring-1 ring-emerald-500/50'
                : 'bg-muted/30 text-muted-foreground'
            }`}
          >
            {i + 1}! = {f.toLocaleString('en-US')}
          </span>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-muted-foreground">10 objects already admit 3,628,800 orderings.</p>
    </div>
  )
}

function PascalTriangle({ n, k, onPick }: { n: number; k: number; onPick: (n: number, k: number) => void }) {
  return (
    <div className="rounded-xl border border-border bg-background/50 p-4">
      <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
        Pascal triangle — click a cell
      </p>
      <div className="mt-2 flex flex-col items-center gap-1 overflow-x-auto pb-1">
        {BINOM.slice(0, n + 1).map((row, m) => (
          <div key={m} className={`flex gap-1 ${m === n ? 'rounded-lg bg-emerald-500/10 px-1 py-0.5' : ''}`}>
            {row.map((val, j) => {
              const isCurrent = m === n && j === k
              return (
                <button
                  key={j}
                  onClick={() => onPick(m, j)}
                  className={`h-6 min-w-6 rounded px-1 text-center font-mono text-[10px] transition-colors ${
                    isCurrent
                      ? 'bg-emerald-500/40 font-bold text-emerald-200 ring-1 ring-emerald-400'
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  }`}
                  title={`C(${m}, ${j}) = ${val}`}
                >
                  {val}
                </button>
              )
            })}
          </div>
        ))}
      </div>
      <p className="mt-1 text-center font-mono text-[10px] text-muted-foreground">
        C({n}, {k}) highlighted — row {n}, entry {k}
      </p>
    </div>
  )
}
