'use client'

import { useCallback, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Dices, Lightbulb, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'

/* ------------------------------------------------------------------ */
/*  Experiment definitions                                             */
/* ------------------------------------------------------------------ */

type ExpId = 'coin' | 'die' | 'dice2' | 'biased'

interface OutcomeDef { label: string; value: number; p: number; frac: string }
interface ExpDef {
  id: ExpId
  name: string
  outcomes: OutcomeDef[]
  sample: () => number
  focus: number
}

const EXPS: Record<ExpId, ExpDef> = {
  coin: {
    id: 'coin',
    name: 'Fair coin',
    outcomes: [
      { label: 'H', value: 1, p: 0.5, frac: '1/2' },
      { label: 'T', value: 0, p: 0.5, frac: '1/2' },
    ],
    sample: () => (Math.random() < 0.5 ? 0 : 1),
    focus: 0,
  },
  biased: {
    id: 'biased',
    name: 'Biased coin (70% H)',
    outcomes: [
      { label: 'H', value: 1, p: 0.7, frac: '7/10' },
      { label: 'T', value: 0, p: 0.3, frac: '3/10' },
    ],
    sample: () => (Math.random() < 0.7 ? 0 : 1),
    focus: 0,
  },
  die: {
    id: 'die',
    name: 'Single die',
    outcomes: [1, 2, 3, 4, 5, 6].map((v) => ({ label: String(v), value: v, p: 1 / 6, frac: '1/6' })),
    sample: () => Math.floor(Math.random() * 6),
    focus: 5,
  },
  dice2: {
    id: 'dice2',
    name: 'Two dice sum',
    outcomes: Array.from({ length: 11 }, (_, i) => {
      const sum = i + 2
      const count = 6 - Math.abs(7 - sum)
      return { label: String(sum), value: sum, p: count / 36, frac: `${count}/36` }
    }),
    sample: () => Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6),
    focus: 5,
  },
}

interface Snap { n: number; counts: number[] }

/* ------------------------------------------------------------------ */
/*  Dice / coin faces                                                  */
/* ------------------------------------------------------------------ */

const PIPS: Record<number, Array<[number, number]>> = {
  1: [[1, 1]],
  2: [[0, 0], [2, 2]],
  3: [[0, 0], [1, 1], [2, 2]],
  4: [[0, 0], [0, 2], [2, 0], [2, 2]],
  5: [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]],
  6: [[0, 0], [0, 2], [1, 0], [1, 2], [2, 0], [2, 2]],
}

function DieFace({ v, size = 56 }: { v: number; size?: number }) {
  const pip = PIPS[v] ?? PIPS[1]
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" className="rounded-lg border border-zinc-600 bg-gradient-to-br from-zinc-700 to-zinc-800 shadow-md">
      {pip.map(([r, c], i) => (
        <circle key={i} cx={13 + c * 17} cy={13 + r * 17} r={5.5} fill="#e4e4e7" />
      ))}
    </svg>
  )
}

function CoinFace({ label }: { label: string }) {
  const heads = label === 'H'
  return (
    <div
      className={`flex items-center justify-center rounded-full border-2 font-mono text-xl font-bold shadow-md ${
        heads ? 'border-emerald-500/60 bg-emerald-500/20 text-emerald-300' : 'border-zinc-500/60 bg-zinc-500/20 text-zinc-300'
      }`}
      style={{ width: 56, height: 56 }}
    >
      {label}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ProbabilityLab() {
  const [expId, setExpId] = useState<ExpId>('coin')
  const def = EXPS[expId]
  const [counts, setCounts] = useState<number[]>(() => def.outcomes.map(() => 0))
  const [total, setTotal] = useState(0)
  const [focus, setFocus] = useState(def.focus)
  const [recent, setRecent] = useState<number[]>([])
  const [snapshots, setSnapshots] = useState<Snap[]>([])
  const [lastIdx, setLastIdx] = useState<number | null>(null)
  const [lastPair, setLastPair] = useState<[number, number] | null>(null)
  const [flash, setFlash] = useState(0)

  const countsRef = useRef(counts)
  const totalRef = useRef(0)
  const expRef = useRef<ExpId>('coin')

  const switchExp = useCallback((id: ExpId) => {
    expRef.current = id
    setExpId(id)
    setCounts(EXPS[id].outcomes.map(() => 0))
    countsRef.current = EXPS[id].outcomes.map(() => 0)
    totalRef.current = 0
    setTotal(0)
    setFocus(EXPS[id].focus)
    setRecent([])
    setSnapshots([])
    setLastIdx(null)
    setLastPair(null)
    setFlash(0)
  }, [])

  const runTrials = useCallback((m: number) => {
    const d = EXPS[expRef.current]
    const running = [...countsRef.current]
    const step = Math.max(1, Math.ceil(m / 60))
    const newSnaps: Snap[] = []
    const trialIdx: number[] = []
    let pair: [number, number] | null = null

    for (let t = 1; t <= m; t++) {
      let idx: number
      if (d.id === 'dice2') {
        const d1 = 1 + Math.floor(Math.random() * 6)
        const d2 = 1 + Math.floor(Math.random() * 6)
        pair = [d1, d2]
        idx = d1 + d2 - 2
      } else {
        idx = d.sample()
      }
      running[idx]++
      trialIdx.push(idx)
      if (t % step === 0) newSnaps.push({ n: totalRef.current + t, counts: [...running] })
    }
    if (m % step !== 0) newSnaps.push({ n: totalRef.current + m, counts: [...running] })

    countsRef.current = running
    totalRef.current += m
    setCounts(running)
    setTotal(totalRef.current)
    setRecent((prev) => [...prev, ...trialIdx].slice(-24))
    setSnapshots((prev) => {
      const merged = [...prev, ...newSnaps]
      // keep the chart light on very long sessions
      if (merged.length > 500) {
        return merged.filter((_, i) => i >= merged.length - 120 || i % 2 === 0)
      }
      return merged
    })
    setLastIdx(trialIdx[trialIdx.length - 1] ?? null)
    if (d.id === 'dice2' && pair) setLastPair(pair)
    setFlash((f) => f + 1)
  }, [])

  const reset = useCallback(() => {
    const d = EXPS[expRef.current]
    const zeros = d.outcomes.map(() => 0)
    countsRef.current = zeros
    totalRef.current = 0
    setCounts(zeros)
    setTotal(0)
    setRecent([])
    setSnapshots([])
    setLastIdx(null)
    setLastPair(null)
  }, [])

  /* ------------------------- derived stats ------------------------- */

  const meanVar = useMemo(() => {
    if (total === 0) return { mean: null as number | null, variance: null as number | null }
    let sum = 0
    counts.forEach((c, i) => { sum += c * def.outcomes[i].value })
    const mean = sum / total
    let v2 = 0
    counts.forEach((c, i) => { v2 += c * (def.outcomes[i].value - mean) ** 2 })
    return { mean, variance: v2 / total }
  }, [counts, total, def])

  const theoryMean = def.outcomes.reduce((acc, o) => acc + o.p * o.value, 0)
  const theoryVar = def.outcomes.reduce((acc, o) => acc + o.p * o.value ** 2, 0) - theoryMean ** 2

  const maxTheoretical = Math.max(...def.outcomes.map((o) => o.p))
  const maxObserved = Math.max(0.001, ...counts.map((c) => (total ? c / total : 0)))
  const yMax = Math.max(maxTheoretical * 1.3, maxObserved * 1.08, 0.02)

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Dices className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Probability Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Run thousands of trials and watch empirical frequencies converge on the theoretical curve — the law of
            large numbers, live.
          </p>
        </div>
      </div>

      {/* experiment picker */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        {(Object.keys(EXPS) as ExpId[]).map((id) => (
          <button
            key={id}
            onClick={() => switchExp(id)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
              expId === id
                ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
            }`}
          >
            {EXPS[id].name}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="flex flex-col gap-4">
          {/* histogram */}
          <div className="rounded-xl border border-border bg-background/50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                Observed relative frequency — click a bar to track it
              </p>
              <span className="flex items-center gap-3 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-3 rounded-sm bg-gradient-to-t from-emerald-600 to-emerald-400" /> observed
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-0 w-3 border-t-2 border-dashed border-amber-400" /> theory
                </span>
              </span>
            </div>
            <div className="mt-3 flex h-44 items-end gap-1 sm:gap-1.5">
              {def.outcomes.map((o, i) => {
                const f = total ? counts[i] / total : 0
                const isFocus = i === focus
                return (
                  <button
                    key={o.label}
                    onClick={() => setFocus(i)}
                    className="group relative flex h-full flex-1 cursor-pointer flex-col justify-end"
                    aria-label={`Outcome ${o.label}, observed ${(f * 100).toFixed(1)}%`}
                  >
                    <span
                      className={`mb-0.5 text-center font-mono text-[9px] transition-colors ${
                        isFocus ? 'text-emerald-300' : 'text-muted-foreground/70'
                      }`}
                    >
                      {total > 0 ? `${(f * 100).toFixed(1)}%` : ''}
                    </span>
                    <span className="relative w-full" style={{ height: '100%' }}>
                      {/* theoretical marker */}
                      <span
                        className="absolute right-0 left-0 border-t-2 border-dashed border-amber-400/90"
                        style={{ bottom: `${(o.p / yMax) * 100}%` }}
                      />
                      <span
                        className={`absolute right-0 bottom-0 left-0 rounded-t-md transition-[height] duration-500 ${
                          isFocus
                            ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                            : 'bg-gradient-to-t from-emerald-700/70 to-emerald-500/70'
                        }`}
                        style={{ height: `${(f / yMax) * 100}%` }}
                      />
                    </span>
                    <span
                      className={`mt-1 text-center font-mono text-[10px] ${
                        isFocus ? 'font-bold text-emerald-300' : 'text-muted-foreground'
                      }`}
                    >
                      {o.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* convergence chart */}
          <div className="rounded-xl border border-border bg-background/50 p-4">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
              Running estimate of P(outcome = {def.outcomes[focus].label}) vs trials
            </p>
            <ConvergenceChart
              snapshots={snapshots}
              focus={focus}
              theory={def.outcomes[focus].p}
              total={total}
            />
          </div>
        </div>

        {/* ---------------- side: last trial + stats + theory ---------------- */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-border bg-background/50 p-4">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Last trial</p>
            <div className="mt-3 flex min-h-[64px] items-center justify-center gap-3">
              {lastIdx === null ? (
                <span className="text-xs text-muted-foreground">run a trial…</span>
              ) : (
                <motion.div
                  key={flash}
                  initial={{ scale: 1.18, rotate: -8 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                  className="flex items-center gap-2"
                >
                  {def.id === 'dice2' ? (
                    <>
                      <DieFace v={lastPair?.[0] ?? 1} size={48} />
                      <DieFace v={lastPair?.[1] ?? 1} size={48} />
                      <span className="font-mono text-xl font-bold text-emerald-400">= {def.outcomes[lastIdx].label}</span>
                    </>
                  ) : def.id === 'die' ? (
                    <DieFace v={lastIdx + 1} />
                  ) : (
                    <CoinFace label={def.outcomes[lastIdx].label} />
                  )}
                </motion.div>
              )}
            </div>
            {recent.length > 0 && (
              <div className="mt-3 flex flex-wrap justify-center gap-1">
                {recent.slice(-18).map((idx, i) => (
                  <span
                    key={`${i}-${idx}`}
                    className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${
                      idx === focus ? 'bg-emerald-500/25 text-emerald-300' : 'bg-muted/40 text-muted-foreground'
                    }`}
                  >
                    {def.outcomes[idx].label}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* trial buttons */}
          <div className="grid grid-cols-2 gap-1.5">
            {[1, 10, 100, 1000].map((m) => (
              <Button key={m} size="sm" variant="outline" onClick={() => runTrials(m)}>
                +{m.toLocaleString('en-US')}
              </Button>
            ))}
            <Button size="sm" variant="ghost" onClick={reset} className="col-span-2">
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Reset
            </Button>
          </div>

          {/* stats */}
          <div className="rounded-xl border border-border bg-background/50 p-4">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Statistics</p>
            <dl className="mt-2 flex flex-col gap-1.5 font-mono text-xs">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">trials</dt>
                <dd className="font-semibold text-foreground">{total.toLocaleString('en-US')}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">mean</dt>
                <dd className="font-semibold text-foreground">
                  {meanVar.mean === null ? '—' : meanVar.mean.toFixed(3)}
                  <span className="ml-1 text-[10px] text-muted-foreground">(μ {theoryMean.toFixed(2)})</span>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">variance</dt>
                <dd className="font-semibold text-foreground">
                  {meanVar.variance === null ? '—' : meanVar.variance.toFixed(3)}
                  <span className="ml-1 text-[10px] text-muted-foreground">(σ² {theoryVar.toFixed(2)})</span>
                </dd>
              </div>
            </dl>
          </div>

          {/* theoretical distribution */}
          <div className="rounded-xl border border-border bg-background/50 p-4">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
              Theoretical model
            </p>
            <div className="mt-2 flex flex-col gap-1">
              {def.outcomes.map((o, i) => (
                <div
                  key={o.label}
                  className={`flex items-center justify-between rounded-md px-2 py-1 font-mono text-[11px] ${
                    i === focus ? 'bg-emerald-500/15 text-emerald-300' : 'text-muted-foreground'
                  }`}
                >
                  <span>{o.label}</span>
                  <span>
                    {o.frac} <span className="opacity-60">≈ {(o.p * 100).toFixed(1)}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          pick Two dice sum, click the bar for <span className="font-mono text-foreground">7</span> to track it, then
          press +1000 a few times — the emerald running estimate tightens around the dashed amber line at{' '}
          <span className="font-mono text-foreground">6/36 ≈ 16.7%</span>.
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Convergence chart (SVG)                                            */
/* ------------------------------------------------------------------ */

function ConvergenceChart({
  snapshots,
  focus,
  theory,
  total,
}: {
  snapshots: Snap[]
  focus: number
  theory: number
  total: number
}) {
  const W = 620
  const H = 220
  const L = 42
  const R = 14
  const T = 12
  const B = 26

  const yMax = Math.min(1, Math.max(theory * 2.4, 0.3))
  const xMax = Math.max(10, total)

  const px = (n: number): number => L + (n / xMax) * (W - L - R)
  const py = (p: number): number => H - B - (Math.min(p, 1.05) / yMax) * (H - T - B)

  const series = useMemo(
    () => snapshots.map((s) => ({ n: s.n, p: s.counts[focus] / s.n })).filter((d) => Number.isFinite(d.p)),
    [snapshots, focus],
  )

  const path =
    series.length > 0
      ? series.map((d, i) => `${i === 0 ? 'M' : 'L'}${px(d.n).toFixed(1)},${py(d.p).toFixed(1)}`).join(' ')
      : ''

  const last = series[series.length - 1]
  const theoryY = py(theory)
  const ticksY = [0, yMax / 2, yMax]
  const ticksX = [0, Math.round(xMax / 2), xMax]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 w-full" role="img" aria-label="Convergence chart">
      <defs>
        <clipPath id="prob-plot-clip">
          <rect x={L} y={T} width={W - L - R} height={H - T - B} />
        </clipPath>
      </defs>

      {/* grid */}
      {ticksY.map((v, i) => (
        <g key={i}>
          <line x1={L} y1={py(v)} x2={W - R} y2={py(v)} stroke="rgba(113,113,122,0.25)" strokeWidth={1} />
          <text x={L - 6} y={py(v) + 3.5} textAnchor="end" fontSize={9} fill="rgba(161,161,170,0.8)" fontFamily="monospace">
            {v.toFixed(2)}
          </text>
        </g>
      ))}
      {ticksX.map((v, i) => (
        <text key={i} x={px(v)} y={H - 8} textAnchor="middle" fontSize={9} fill="rgba(161,161,170,0.8)" fontFamily="monospace">
          {v >= 10000 ? `${Math.round(v / 1000)}k` : v}
        </text>
      ))}

      {/* theoretical line */}
      <line
        x1={L}
        y1={theoryY}
        x2={W - R}
        y2={theoryY}
        stroke="#fbbf24"
        strokeWidth={1.6}
        strokeDasharray="7 5"
      />
      <text x={W - R} y={theoryY - 5} textAnchor="end" fontSize={9.5} fill="#fbbf24" fontFamily="monospace">
        theory {theory.toFixed(3)}
      </text>

      {/* empirical line */}
      {series.length > 0 ? (
        <g clipPath="url(#prob-plot-clip)">
          <path d={path} fill="none" stroke="#10b981" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
          <circle cx={px(last.n)} cy={py(last.p)} r={3.5} fill="#10b981" />
        </g>
      ) : (
        <text x={(L + W - R) / 2} y={(T + H - B) / 2} textAnchor="middle" fontSize={11} fill="rgba(161,161,170,0.7)" fontFamily="monospace">
          run some trials to see convergence
        </text>
      )}

      {series.length > 0 && (
        <text
          x={px(last.n)}
          y={Math.max(T + 10, py(last.p) - 8)}
          textAnchor={last.n > xMax * 0.15 ? 'end' : 'start'}
          fontSize={9.5}
          fill="#34d399"
          fontFamily="monospace"
        >
          p̂ {last.p.toFixed(3)}
        </text>
      )}
    </svg>
  )
}
