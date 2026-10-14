'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Pause, Play, Pyramid, RotateCcw, StepForward } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

/* ------------------------------------------------------------------ */
/*  Move engine                                                        */
/* ------------------------------------------------------------------ */

interface HanoiMove { disk: number; from: number; to: number }

function hanoiMoves(n: number, from: number, to: number, via: number): HanoiMove[] {
  if (n === 0) return []
  return [
    ...hanoiMoves(n - 1, from, via, to),
    { disk: n, from, to },
    ...hanoiMoves(n - 1, via, to, from),
  ]
}

/* ------------------------------------------------------------------ */
/*  Geometry (percent of a 1000 × 480 stage)                           */
/* ------------------------------------------------------------------ */

const PEG_X = [18, 50, 82]
const BASE_Y = 86 // top of the base plank — disks stack up from here
const DISK_H = 5.2
const LIFT_Y = 8
const PEG_NAMES = ['A', 'B', 'C']

const DISK_COLORS: Array<[string, string]> = [
  ['#fde68a', '#f59e0b'],
  ['#fed7aa', '#ea580c'],
  ['#fecdd3', '#e11d48'],
  ['#a7f3d0', '#059669'],
  ['#99f6e4', '#0d9488'],
  ['#d9f99d', '#65a30d'],
  ['#f5d0fe', '#c026d3'],
]

function diskWidth(disk: number, n: number): number {
  return 7 + ((disk - 1) * 9) / Math.max(1, n - 1)
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function HanoiTower() {
  const [n, setN] = useState(3)
  const [moves, setMoves] = useState<HanoiMove[]>(() => hanoiMoves(3, 0, 2, 1))
  const [pegs, setPegs] = useState<number[][]>([[1, 2, 3], [], []])
  const [moving, setMoving] = useState<{ disk: number; x: number; y: number } | null>(null)
  const [moveIdx, setMoveIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(5)

  const pegsRef = useRef<number[][]>([[1, 2, 3], [], []])
  const movesRef = useRef<HanoiMove[]>(hanoiMoves(3, 0, 2, 1))
  const moveIdxRef = useRef(0)
  const movingRef = useRef(false)
  const speedRef = useRef(5)
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([])
  const logRef = useRef<HTMLDivElement | null>(null)
  const mountedRef = useRef(false)

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  const setPegsBoth = useCallback((next: number[][]) => {
    pegsRef.current = next
    setPegs(next)
  }, [])

  const chooseN = useCallback(
    (v: number) => {
      clearTimers()
      movingRef.current = false
      setMoving(null)
      moveIdxRef.current = 0
      setMoveIdx(0)
      setPlaying(false)
      const mv = hanoiMoves(v, 0, 2, 1)
      movesRef.current = mv
      setMoves(mv)
      setN(v)
      setPegsBoth([Array.from({ length: v }, (_, i) => i + 1), [], []])
    },
    [clearTimers, setPegsBoth],
  )

  const reset = useCallback(() => {
    clearTimers()
    movingRef.current = false
    setMoving(null)
    moveIdxRef.current = 0
    setMoveIdx(0)
    setPlaying(false)
    setPegsBoth([Array.from({ length: n }, (_, i) => i + 1), [], []])
  }, [clearTimers, n, setPegsBoth])

  const applyMove = useCallback(() => {
    const mv = movesRef.current[moveIdxRef.current]
    if (!mv || movingRef.current) return
    const fromStack = pegsRef.current[mv.from]
    if (fromStack.length === 0) return
    movingRef.current = true

    const disk = fromStack[fromStack.length - 1]
    const targetIdx = pegsRef.current[mv.to].length

    // detach from source peg, then lift from its current spot
    setPegsBoth(pegsRef.current.map((p, i) => (i === mv.from ? p.slice(0, -1) : [...p])))
    setMoving({ disk, x: PEG_X[mv.from], y: BASE_Y - fromStack.length * DISK_H })

    const dur = Math.round(2600 / speedRef.current)
    const lift = Math.round(dur * 0.3)
    const slide = Math.round(dur * 0.44)
    const drop = Math.round(dur * 0.26)

    const t1 = setTimeout(() => {
      setMoving((m) => (m ? { ...m, x: PEG_X[mv.to] } : m))
    }, lift)
    const t2 = setTimeout(() => {
      setMoving((m) => (m ? { ...m, y: BASE_Y - (targetIdx + 1) * DISK_H } : m))
    }, lift + slide)
    const t3 = setTimeout(() => {
      setPegsBoth(pegsRef.current.map((p, i) => (i === mv.to ? [...p, disk] : [...p])))
      setMoving(null)
      movingRef.current = false
      moveIdxRef.current += 1
      setMoveIdx(moveIdxRef.current)
    }, lift + slide + drop)
    timersRef.current.push(t1, t2, t3)
  }, [setPegsBoth])

  // playback chain — waits for the current move to land before starting the next
  useEffect(() => {
    if (!playing || moving || moveIdx >= moves.length) return
    const t = setTimeout(() => applyMove(), 100)
    return () => clearTimeout(t)
  }, [playing, moving, moveIdx, moves, applyMove])

  useEffect(() => {
    if (moveIdx >= moves.length && moves.length > 0) {
      const t = setTimeout(() => setPlaying(false), 0)
      return () => clearTimeout(t)
    }
  }, [moveIdx, moves.length])

  useEffect(() => clearTimers, [clearTimers])

  // auto-scroll the move log (skip the very first mount)
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true
      return
    }
    logRef.current?.scrollIntoView({ block: 'nearest' })
  }, [moveIdx])

  const solved = moveIdx >= moves.length && moves.length > 0
  const nextMove = moves[moveIdx]
  const dur = Math.round(2600 / speed)

  const diskStyle = (disk: number, x: number, y: number, isMoving: boolean): React.CSSProperties => {
    const w = diskWidth(disk, n)
    return {
      left: `${x - w / 2}%`,
      top: `${y}%`,
      width: `${w}%`,
      height: `${DISK_H}%`,
      background: `linear-gradient(180deg, ${DISK_COLORS[disk - 1][0]} 0%, ${DISK_COLORS[disk - 1][1]} 65%, ${DISK_COLORS[disk - 1][1]} 100%)`,
      transition: isMoving
        ? `left ${Math.round(dur * 0.44)}ms cubic-bezier(0.45, 0, 0.3, 1), top ${Math.round(dur * 0.3)}ms ease-in-out`
        : 'none',
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Pyramid className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Tower of Hanoi</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            The optimal solution takes exactly 2ⁿ − 1 moves. Sit back and let recursion do the heavy lifting.
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
        {/* ---------------- stage + controls ---------------- */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-lg border border-border bg-muted/30 px-2.5 py-1 font-mono text-foreground">
              move <span className="font-bold text-emerald-400">{moveIdx}</span> / {moves.length}
            </span>
            <span className="rounded-lg border border-border bg-muted/30 px-2.5 py-1 font-mono text-muted-foreground">
              2<sup>{n}</sup> − 1 = {moves.length}
            </span>
            {nextMove && (
              <span className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 font-mono text-amber-300">
                next: {PEG_NAMES[nextMove.from]} → {PEG_NAMES[nextMove.to]} (disk {nextMove.disk})
              </span>
            )}
            {solved && (
              <span className="rounded-lg border border-emerald-500/50 bg-emerald-500/15 px-2.5 py-1 font-mono font-semibold text-emerald-300">
                solved in {moveIdx} moves ✓
              </span>
            )}
          </div>

          {/* stage */}
          <div
            className="relative w-full overflow-hidden rounded-xl border border-border bg-card"
            style={{ aspectRatio: '1000 / 480' }}
            role="img"
            aria-label="Tower of Hanoi stage with three pegs"
          >
            {/* peg ground shadows */}
            {PEG_X.map((x) => (
              <div
                key={`shadow-${x}`}
                className="absolute rounded-[50%] bg-black/40 blur-[3px]"
                style={{ left: `${x - 8}%`, top: '85%', width: '16%', height: '2.5%' }}
              />
            ))}

            {/* base plank */}
            <div
              className="absolute rounded-lg border-t border-zinc-500/40 bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-lg"
              style={{ left: '5%', top: `${BASE_Y}%`, width: '90%', height: '5.5%' }}
            />

            {/* pegs */}
            {PEG_X.map((x, i) => (
              <div
                key={`peg-${i}`}
                className="absolute rounded-full bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-700 shadow-[0_0_8px_rgba(0,0,0,0.4)]"
                style={{ left: `${x - 0.8}%`, top: '24%', width: '1.6%', height: `${BASE_Y - 24}%` }}
              />
            ))}

            {/* resting disks */}
            {pegs.map((stack, pi) =>
              stack.map((disk, si) => (
                <motion.div
                  key={`d-${disk}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: disk * 0.05, duration: 0.3 }}
                  className="absolute z-10 rounded-full border border-black/30 shadow-[0_3px_6px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.3)]"
                  style={diskStyle(disk, PEG_X[pi], BASE_Y - (si + 1) * DISK_H, false)}
                />
              )),
            )}

            {/* flying disk */}
            {moving && (
              <div
                key="moving"
                className="absolute z-20 rounded-full border border-black/40 shadow-[0_6px_14px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]"
                style={diskStyle(moving.disk, moving.x, moving.y, true)}
              />
            )}

            {/* peg labels */}
            {PEG_X.map((x, i) => (
              <span
                key={`label-${i}`}
                className="absolute -translate-x-1/2 font-mono text-sm font-bold text-muted-foreground"
                style={{ left: `${x}%`, top: '93%' }}
              >
                {PEG_NAMES[i]}
              </span>
            ))}
          </div>

          {/* controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1">
              {[3, 4, 5, 6, 7].map((v) => (
                <button
                  key={v}
                  onClick={() => chooseN(v)}
                  className={`h-8 w-8 rounded-lg border font-mono text-xs transition-colors ${
                    n === v
                      ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300'
                      : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
            <Button size="sm" onClick={() => setPlaying((p) => !p)} disabled={solved} className="min-w-[86px]">
              {playing ? <Pause className="mr-1 h-4 w-4" /> : <Play className="mr-1 h-4 w-4" />}
              {playing ? 'Pause' : 'Play'}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                if (!playing && !moving && !solved) applyMove()
              }}
              disabled={playing || moving !== null || solved}
              aria-label="Step one move"
            >
              <StepForward className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" onClick={reset} aria-label="Reset">
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-16 shrink-0 text-xs text-muted-foreground">speed</span>
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
              aria-label="Animation speed"
            />
          </div>
        </div>

        {/* ---------------- side panel ---------------- */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-border bg-background/50">
            <p className="border-b border-border px-3 py-2 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
              Move log
            </p>
            <div className="max-h-52 overflow-y-auto p-1.5">
              {moves.map((mv, i) => (
                <div
                  key={i}
                  ref={i === moveIdx ? logRef : undefined}
                  className={`rounded px-2 py-1 font-mono text-xs ${
                    i === moveIdx
                      ? 'bg-emerald-500/15 font-semibold text-emerald-300 ring-1 ring-emerald-500/40'
                      : i < moveIdx
                        ? 'text-muted-foreground/50'
                        : 'text-muted-foreground'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}. {PEG_NAMES[mv.from]} → {PEG_NAMES[mv.to]}
                  <span className="ml-1.5 text-[10px] opacity-60">disk {mv.disk}</span>
                </div>
              ))}
            </div>
          </div>

          <RecursionTree n={n} />
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          bump the disks from 3 to 7 and watch the counter — 7 moves become 127, exactly{' '}
          <span className="font-mono text-foreground">2·63 + 1</span>. The recursion tree shows why: every level
          doubles the work.
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Recursion tree — hanoi(n) = 2·hanoi(n−1) + 1                       */
/* ------------------------------------------------------------------ */

function RecursionTree({ n }: { n: number }) {
  const levels: number[] = [n]
  while (levels[levels.length - 1] > 1 && levels.length < 3) levels.push(levels[levels.length - 1] - 1)

  const W = 260
  const H = 152
  const nodeW = 56
  const nodeH = 26

  interface TNode { k: number; x: number; y: number }
  const nodes: TNode[] = []
  const edges: Array<[TNode, TNode]> = []
  levels.forEach((k, li) => {
    const count = 1 << li
    for (let j = 0; j < count; j++) {
      const node: TNode = { k, x: (W * (j + 1)) / (count + 1), y: 24 + li * 44 }
      nodes.push(node)
      if (li > 0) {
        const parent = nodes[Math.floor((nodes.length - 2) / 2)]
        if (parent) edges.push([parent, node])
      }
    }
  })

  return (
    <div className="rounded-xl border border-border bg-background/50 p-3">
      <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Recursion tree</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-1 w-full" role="img" aria-label="Hanoi recursion tree">
        {edges.map(([p, c], i) => (
          <line
            key={i}
            x1={p.x}
            y1={p.y + nodeH / 2}
            x2={c.x}
            y2={c.y - nodeH / 2}
            stroke="rgba(113,113,122,0.5)"
            strokeWidth={1.2}
          />
        ))}
        {nodes.map((nd, i) => (
          <g key={i}>
            <rect
              x={nd.x - nodeW / 2}
              y={nd.y - nodeH / 2}
              width={nodeW}
              height={nodeH}
              rx={7}
              fill="rgba(39,39,42,0.9)"
              stroke={i === 0 ? 'rgba(16,185,129,0.6)' : 'rgba(113,113,122,0.4)'}
            />
            <text x={nd.x} y={nd.y - 1.5} textAnchor="middle" fontSize={10} fill="rgba(212,212,216,0.95)" fontFamily="monospace">
              H({nd.k})
            </text>
            <text x={nd.x} y={nd.y + 8} textAnchor="middle" fontSize={8.5} fill="rgba(16,185,129,0.9)" fontFamily="monospace">
              {(1 << nd.k) - 1}
            </text>
          </g>
        ))}
      </svg>
      <p className="mt-1 text-center font-mono text-[10px] text-muted-foreground">hanoi(n) = 2·hanoi(n−1) + 1</p>
    </div>
  )
}
