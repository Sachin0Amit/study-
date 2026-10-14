'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeftRight, ArrowUpDown, Lightbulb, Pause, PenLine, Play, RotateCcw, Shuffle, StepForward, Timer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

/* ------------------------------------------------------------------ */
/*  Step engines — each algorithm is a generator of uniform steps      */
/* ------------------------------------------------------------------ */

type Step =
  | { type: 'compare'; i: number; j: number }
  | { type: 'swap'; i: number; j: number }
  | { type: 'overwrite'; i: number; value: number }
  | { type: 'sorted'; i: number }

function* bubbleSort(a: number[]): Generator<Step> {
  const arr = [...a]
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    for (let j = 0; j < n - 1 - i; j++) {
      yield { type: 'compare', i: j, j: j + 1 }
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
        yield { type: 'swap', i: j, j: j + 1 }
      }
    }
    yield { type: 'sorted', i: n - 1 - i }
    if (!swapped) {
      for (let k = n - 2 - i; k >= 0; k--) yield { type: 'sorted', i: k }
      return
    }
  }
  if (n > 0) yield { type: 'sorted', i: 0 }
}

function* insertionSort(a: number[]): Generator<Step> {
  const arr = [...a]
  if (arr.length > 0) yield { type: 'sorted', i: 0 }
  for (let i = 1; i < arr.length; i++) {
    let j = i
    while (j > 0) {
      yield { type: 'compare', i: j - 1, j }
      if (arr[j - 1] > arr[j]) {
        ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
        yield { type: 'swap', i: j - 1, j }
        j--
      } else break
    }
  }
  for (let k = 0; k < arr.length; k++) yield { type: 'sorted', i: k }
}

function* selectionSort(a: number[]): Generator<Step> {
  const arr = [...a]
  for (let i = 0; i < arr.length - 1; i++) {
    let m = i
    for (let j = i + 1; j < arr.length; j++) {
      yield { type: 'compare', i: m, j }
      if (arr[j] < arr[m]) m = j
    }
    if (m !== i) {
      ;[arr[i], arr[m]] = [arr[m], arr[i]]
      yield { type: 'swap', i, j: m }
    }
    yield { type: 'sorted', i }
  }
  if (arr.length > 0) yield { type: 'sorted', i: arr.length - 1 }
}

function* mergeSort(a: number[]): Generator<Step> {
  const arr = [...a]
  function* ms(lo: number, hi: number): Generator<Step> {
    if (lo >= hi) return
    const mid = (lo + hi) >> 1
    yield* ms(lo, mid)
    yield* ms(mid + 1, hi)
    const temp: number[] = []
    let i = lo
    let j = mid + 1
    while (i <= mid && j <= hi) {
      yield { type: 'compare', i, j }
      temp.push(arr[i] <= arr[j] ? arr[i++] : arr[j++])
    }
    while (i <= mid) temp.push(arr[i++])
    while (j <= hi) temp.push(arr[j++])
    for (let k = 0; k < temp.length; k++) {
      arr[lo + k] = temp[k]
      yield { type: 'overwrite', i: lo + k, value: temp[k] }
    }
  }
  yield* ms(0, arr.length - 1)
  for (let k = 0; k < arr.length; k++) yield { type: 'sorted', i: k }
}

function* quickSort(a: number[]): Generator<Step> {
  const arr = [...a]
  function* qs(lo: number, hi: number): Generator<Step> {
    if (lo > hi) return
    if (lo === hi) {
      yield { type: 'sorted', i: lo }
      return
    }
    const pivot = arr[hi]
    let i = lo
    for (let j = lo; j < hi; j++) {
      yield { type: 'compare', i: j, j: hi }
      if (arr[j] < pivot) {
        if (i !== j) {
          ;[arr[i], arr[j]] = [arr[j], arr[i]]
          yield { type: 'swap', i, j }
        }
        i++
      }
    }
    if (i !== hi) {
      ;[arr[i], arr[hi]] = [arr[hi], arr[i]]
      yield { type: 'swap', i, j: hi }
    }
    yield { type: 'sorted', i }
    yield* qs(lo, i - 1)
    yield* qs(i + 1, hi)
  }
  yield* qs(0, arr.length - 1)
  for (let k = 0; k < arr.length; k++) yield { type: 'sorted', i: k }
}

type AlgoId = 'bubble' | 'insertion' | 'selection' | 'merge' | 'quick'

const ALGOS: Record<AlgoId, { name: string; gen: (a: number[]) => Generator<Step> }> = {
  bubble: { name: 'Bubble', gen: bubbleSort },
  insertion: { name: 'Insertion', gen: insertionSort },
  selection: { name: 'Selection', gen: selectionSort },
  merge: { name: 'Merge', gen: mergeSort },
  quick: { name: 'Quick', gen: quickSort },
}

const COMPLEXITY: Record<AlgoId, { best: string; avg: string; worst: string }> = {
  bubble: { best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)' },
  insertion: { best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)' },
  selection: { best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)' },
  merge: { best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)' },
  quick: { best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n²)' },
}

/* ---------------------------- helpers ---------------------------- */

function mulberry32(seed: number): () => number {
  let s = seed >>> 0
  return () => {
    s |= 0
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Deterministic, evenly-spread values then shuffled with the given seed. */
function makeArr(n: number, seed: number): number[] {
  const rnd = mulberry32(seed)
  const vals = Array.from({ length: n }, (_, i) => Math.round(10 + (i / Math.max(1, n - 1)) * 88))
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[vals[i], vals[j]] = [vals[j], vals[i]]
  }
  return vals
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const BAR = {
  idle: '#52525b',
  compare: '#fbbf24',
  swap: '#fb7185',
  sorted: '#10b981',
}

export default function SortingVisualizer() {
  const [algo, setAlgo] = useState<AlgoId>('bubble')
  const [n, setN] = useState(24)
  const [speed, setSpeed] = useState(5)
  const [array, setArray] = useState<number[]>(() => makeArr(24, 42))
  const [playing, setPlaying] = useState(false)
  const [finished, setFinished] = useState(false)
  const [compare, setCompare] = useState<{ i: number; j: number } | null>(null)
  const [swapPair, setSwapPair] = useState<{ i: number; j: number } | null>(null)
  const [sortedSet, setSortedSet] = useState<Set<number>>(() => new Set())
  const [stats, setStats] = useState({ comparisons: 0, swaps: 0, writes: 0 })

  const genRef = useRef<Generator<Step> | null>(null)
  const baseRef = useRef<number[]>(makeArr(24, 42))
  const algoRef = useRef<AlgoId>('bubble')
  const speedRef = useRef(5)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sweepTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const stopTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (sweepTimerRef.current) clearTimeout(sweepTimerRef.current)
    timerRef.current = null
    sweepTimerRef.current = null
  }, [])

  const resetWith = useCallback(
    (a: AlgoId, newBase?: number[]) => {
      stopTimers()
      if (newBase) baseRef.current = newBase
      algoRef.current = a
      genRef.current = ALGOS[a].gen(baseRef.current)
      setAlgo(a)
      setArray([...baseRef.current])
      setStats({ comparisons: 0, swaps: 0, writes: 0 })
      setCompare(null)
      setSwapPair(null)
      setSortedSet(new Set())
      setFinished(false)
      setPlaying(false)
    },
    [stopTimers],
  )

  const finishSweep = useCallback(() => {
    setPlaying(false)
    setFinished(true)
    setCompare(null)
    setSwapPair(null)
    const len = baseRef.current.length
    let i = 0
    const tick = () => {
      setSortedSet((prev) => {
        const nx = new Set(prev)
        nx.add(i)
        return nx
      })
      i++
      if (i < len) sweepTimerRef.current = setTimeout(tick, 22)
    }
    tick()
  }, [])

  const step = useCallback((): boolean => {
    if (!genRef.current) genRef.current = ALGOS[algoRef.current].gen(baseRef.current)
    const r = genRef.current.next()
    if (r.done) {
      finishSweep()
      return false
    }
    const s = r.value
    if (s.type === 'compare') {
      setStats((st) => ({ ...st, comparisons: st.comparisons + 1 }))
      setCompare({ i: s.i, j: s.j })
      setSwapPair(null)
    } else if (s.type === 'swap') {
      setStats((st) => ({ ...st, swaps: st.swaps + 1 }))
      setSwapPair({ i: s.i, j: s.j })
      setCompare(null)
      setArray((prev) => {
        const nx = [...prev]
        ;[nx[s.i], nx[s.j]] = [nx[s.j], nx[s.i]]
        return nx
      })
    } else if (s.type === 'overwrite') {
      setStats((st) => ({ ...st, writes: st.writes + 1 }))
      setSwapPair(null)
      setCompare(null)
      setArray((prev) => {
        const nx = [...prev]
        nx[s.i] = s.value
        return nx
      })
    } else {
      setSortedSet((prev) => {
        const nx = new Set(prev)
        nx.add(s.i)
        return nx
      })
    }
    return true
  }, [finishSweep])

  // playback loop
  useEffect(() => {
    if (!playing) return
    let cancelled = false
    const loop = () => {
      if (cancelled) return
      const more = step()
      if (!more) {
        setPlaying(false)
        return
      }
      timerRef.current = setTimeout(loop, Math.round(640 / speedRef.current))
    }
    timerRef.current = setTimeout(loop, 30)
    return () => {
      cancelled = true
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [playing, step])

  useEffect(() => stopTimers, [stopTimers])

  const barColor = (i: number): string => {
    if (swapPair && (i === swapPair.i || i === swapPair.j)) return BAR.swap
    if (compare && (i === compare.i || i === compare.j)) return BAR.compare
    if (sortedSet.has(i)) return BAR.sorted
    return BAR.idle
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <ArrowUpDown className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Sorting Visualizer</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Step through five classic sorts, one compare / swap / write at a time — and watch the operation counters
            pile up.
          </p>
        </div>
      </div>

      {/* algorithm pills */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        {(Object.keys(ALGOS) as AlgoId[]).map((id) => (
          <button
            key={id}
            onClick={() => resetWith(id)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
              algo === id
                ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
            }`}
          >
            {ALGOS[id].name}
          </button>
        ))}
      </div>

      {/* bars */}
      <div
        className="mt-3 flex h-52 items-end rounded-xl border border-border bg-muted/20 p-2 sm:h-64"
        style={{ gap: n > 32 ? 1 : 2 }}
        role="img"
        aria-label="Sorting bars"
      >
        {array.map((v, i) => (
          <div
            key={i}
            className="min-w-[2px] flex-1 rounded-t-[3px] transition-[height,background-color] duration-200 ease-out"
            style={{ height: `${v}%`, backgroundColor: barColor(i) }}
            title={`index ${i}: ${v}`}
          />
        ))}
      </div>

      {/* counters */}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/30 px-2.5 py-1.5 font-mono text-amber-300">
          <Timer className="h-3.5 w-3.5" /> comparisons {stats.comparisons}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/30 px-2.5 py-1.5 font-mono text-rose-300">
          <ArrowLeftRight className="h-3.5 w-3.5" /> swaps {stats.swaps}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/30 px-2.5 py-1.5 font-mono text-rose-300">
          <PenLine className="h-3.5 w-3.5" /> writes {stats.writes}
        </span>
        {finished && (
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/50 bg-emerald-500/15 px-2.5 py-1.5 font-mono font-semibold text-emerald-300">
            sorted ✓ {stats.comparisons} comparisons
          </span>
        )}
      </div>

      {/* controls */}
      <div className="mt-4 grid gap-3 sm:grid-cols-[auto_auto_1fr_1fr] sm:items-center">
        <div className="flex items-center gap-1.5">
          <Button
            size="sm"
            onClick={() => {
              if (finished) return
              setPlaying((p) => !p)
            }}
            disabled={finished}
            className="min-w-[86px]"
          >
            {playing ? <Pause className="mr-1 h-4 w-4" /> : <Play className="mr-1 h-4 w-4" />}
            {playing ? 'Pause' : 'Play'}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              if (!playing && !finished) step()
            }}
            disabled={playing || finished}
            aria-label="Single step"
          >
            <StepForward className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => resetWith(algoRef.current, makeArr(n, Math.floor(Math.random() * 2 ** 31)))}
          >
            <Shuffle className="mr-1 h-4 w-4" /> Shuffle
          </Button>
          <Button size="sm" variant="ghost" onClick={() => resetWith(algoRef.current)} aria-label="Reset">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="rounded bg-muted/40 px-1.5 py-0.5">n = {n}</span>
          <span className="rounded bg-muted/40 px-1.5 py-0.5">{Math.round(640 / speed)} ms/step</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-14 shrink-0 text-xs text-muted-foreground">size</span>
          <Slider
            min={8}
            max={48}
            step={1}
            value={[n]}
            onValueChange={(v) => {
              const nv = Math.min(48, Math.max(8, v[0] ?? 24))
              setN(nv)
              resetWith(algoRef.current, makeArr(nv, Math.floor(Math.random() * 2 ** 31)))
            }}
            className="flex-1"
            aria-label="Array size"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="w-14 shrink-0 text-xs text-muted-foreground">speed</span>
          <Slider
            min={1}
            max={10}
            step={1}
            value={[speed]}
            onValueChange={(v) => {
              const nv = Math.min(10, Math.max(1, v[0] ?? 5))
              speedRef.current = nv
              setSpeed(nv)
            }}
            className="flex-1"
            aria-label="Speed"
          />
        </div>
      </div>

      {/* complexity reference */}
      <div className="mt-4 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[420px] border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-border bg-muted/40 text-muted-foreground">
              <th className="px-3 py-2 font-medium">Algorithm</th>
              <th className="px-3 py-2 font-medium">Best</th>
              <th className="px-3 py-2 font-medium">Average</th>
              <th className="px-3 py-2 font-medium">Worst</th>
            </tr>
          </thead>
          <tbody className="font-mono">
            {(Object.keys(ALGOS) as AlgoId[]).map((id) => (
              <tr
                key={id}
                className={`border-b border-border/40 last:border-0 ${
                  algo === id ? 'bg-emerald-500/10 text-emerald-300' : 'text-muted-foreground'
                }`}
              >
                <td className="px-3 py-1.5 font-sans font-medium">{ALGOS[id].name}</td>
                <td className="px-3 py-1.5">{COMPLEXITY[id].best}</td>
                <td className="px-3 py-1.5">{COMPLEXITY[id].avg}</td>
                <td className="px-3 py-1.5">{COMPLEXITY[id].worst}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          set n = 48, pick Bubble sort, then press Play. Now press Shuffle, switch to Merge and compare the counters
          — roughly <span className="font-mono text-foreground">n² = 2304</span> versus{' '}
          <span className="font-mono text-foreground">n log₂ n ≈ 270</span> comparisons.
        </span>
      </div>
    </div>
  )
}
