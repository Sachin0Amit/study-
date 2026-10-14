'use client'

import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Activity,
  Binary,
  Check,
  Pause,
  Play,
  RotateCcw,
  StepForward,
  Timer,
  TriangleAlert,
  Zap,
} from 'lucide-react'
import { TeX } from '@/components/math'
import { Button } from '@/components/ui/button'

/* ------------------------------------------------------------------ */
/*  flip-flop model                                                    */
/* ------------------------------------------------------------------ */

type FFType = 'SR' | 'D' | 'JK' | 'T'
type Bit = 0 | 1

interface FFResult {
  q: Bit
  label: string
  invalid: boolean
}

const FF_TYPES: FFType[] = ['SR', 'D', 'JK', 'T']

const INPUT_NAMES: Record<FFType, string[]> = {
  SR: ['S', 'R'],
  D: ['D'],
  JK: ['J', 'K'],
  T: ['T'],
}

const DEFAULT_INPUTS: Record<FFType, Record<string, Bit>> = {
  SR: { S: 0, R: 0 },
  D: { D: 1 },
  JK: { J: 1, K: 0 },
  T: { T: 1 },
}

const FF_EQN: Record<FFType, string> = {
  SR: "Q_{\\text{next}} = S + R'Q \\quad (S \\cdot R = 0)",
  D: 'Q_{\\text{next}} = D',
  JK: "Q_{\\text{next}} = JQ' + K'Q",
  T: 'Q_{\\text{next}} = T \\oplus Q',
}

const CHAR_TABLE: Record<FFType, Array<{ ins: string; next: string; bad?: boolean }>> = {
  SR: [
    { ins: '0 0', next: 'Q — hold' },
    { ins: '0 1', next: '0 — reset' },
    { ins: '1 0', next: '1 — set' },
    { ins: '1 1', next: 'undefined', bad: true },
  ],
  D: [
    { ins: '0', next: '0' },
    { ins: '1', next: '1' },
  ],
  JK: [
    { ins: '0 0', next: 'Q — hold' },
    { ins: '0 1', next: '0 — reset' },
    { ins: '1 0', next: '1 — set' },
    { ins: '1 1', next: 'Q′ — toggle' },
  ],
  T: [
    { ins: '0', next: 'Q — hold' },
    { ins: '1', next: 'Q′ — toggle' },
  ],
}

function evalFF(type: FFType, inputs: Record<string, Bit>, q: Bit): FFResult {
  switch (type) {
    case 'SR': {
      const s = inputs.S ?? 0
      const r = inputs.R ?? 0
      if (s === 1 && r === 1) return { q, label: 'forbidden', invalid: true }
      if (s === 1) return { q: 1, label: 'set', invalid: false }
      if (r === 1) return { q: 0, label: 'reset', invalid: false }
      return { q, label: 'hold', invalid: false }
    }
    case 'D': {
      const d = inputs.D ?? 0
      return { q: d, label: d === 1 ? 'follows D → 1' : 'follows D → 0', invalid: false }
    }
    case 'JK': {
      const j = inputs.J ?? 0
      const k = inputs.K ?? 0
      if (j === 1 && k === 1) return { q: q === 1 ? 0 : 1, label: 'toggle', invalid: false }
      if (j === 1) return { q: 1, label: 'set', invalid: false }
      if (k === 1) return { q: 0, label: 'reset', invalid: false }
      return { q, label: 'hold', invalid: false }
    }
    case 'T': {
      const t = inputs.T ?? 0
      if (t === 1) return { q: q === 1 ? 0 : 1, label: 'toggle', invalid: false }
      return { q, label: 'hold', invalid: false }
    }
  }
}

interface FFEvent {
  edge: number
  inputs: Record<string, Bit>
  qPrev: Bit
  q: Bit
  label: string
  invalid: boolean
}

/* ------------------------------------------------------------------ */
/*  counter model                                                      */
/* ------------------------------------------------------------------ */

const bitsOf = (n: number): [Bit, Bit, Bit, Bit] => [
  (n & 1) as Bit,
  ((n >> 1) & 1) as Bit,
  ((n >> 2) & 1) as Bit,
  ((n >> 3) & 1) as Bit,
]

const binaryString = (b: Array<Bit>): string => `${b[3]}${b[2]}${b[1]}${b[0]}`

interface CounterTick {
  bits: [Bit, Bit, Bit, Bit]
  from: number
  count: number
  wrapped: boolean
  cleared: boolean
  stages: number
}

const FF_INPUT_NOTE: Record<FFType, string> = {
  SR: 'S = Q′, R = Q feedback',
  D: 'D = Q′ feedback loop',
  JK: 'J = K = 1 on every stage',
  T: 'T = 1 on every stage',
}

const CLR_TEX = '\\text{CLR} = \\overline{Q_3 \\cdot Q_1}'

const stagesBetween = (from: number, to: number): number => {
  const fb = bitsOf(from)
  const tb = bitsOf(to)
  let highest = -1
  for (let i = 0; i < 4; i++) if (fb[i] !== tb[i]) highest = i
  return highest + 1
}

/* ------------------------------------------------------------------ */
/*  main component                                                     */
/* ------------------------------------------------------------------ */

export default function SequentialLab() {
  const [ffType, setFFType] = useState<FFType>('JK')

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Activity className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Sequential Logic Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Drive SR, D, JK and T flip-flops from an animated clock and read their characteristic equations — then
            watch four of them count as a ripple or synchronous 4-bit counter.
          </p>
        </div>
      </div>

      <FFExplorer ffType={ffType} setFFType={setFFType} />
      <CounterPanel ffType={ffType} />

      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> switch the explorer to JK, set J = K = 1 and
          press play — the output divides the clock by two. Then set the counter to ripple mode and step from 7 to 8:
          all four flip-flops toggle in a staggered chain, while the synchronous mode would settle in a single{' '}
          <TeX tex="t_{pd}" />. Finally enable mod-10 and step from 9 to see the decode-and-clear race.
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  panel 1 — flip-flop explorer                                       */
/* ------------------------------------------------------------------ */

function FFExplorer({ ffType, setFFType }: { ffType: FFType; setFFType: (t: FFType) => void }) {
  const [inputs, setInputs] = useState<Record<string, Bit>>(DEFAULT_INPUTS.JK)
  const [q, setQ] = useState<Bit>(0)
  const [history, setHistory] = useState<FFEvent[]>([])
  const [playing, setPlaying] = useState(false)
  const [showQn, setShowQn] = useState(false)
  const reduced = useReducedMotion() ?? false

  const nextEdge = useCallback(() => {
    const res = evalFF(ffType, inputs, q)
    setHistory((h) => {
      const lastEdge = h.length > 0 ? h[h.length - 1].edge : 0
      return [
        ...h.slice(-39),
        {
          edge: lastEdge + 1,
          inputs: { ...inputs },
          qPrev: q,
          q: res.q,
          label: res.label,
          invalid: res.invalid,
        },
      ]
    })
    setQ(res.q)
  }, [ffType, inputs, q])

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => nextEdge(), 1000)
    return () => clearInterval(id)
  }, [playing, nextEdge])

  const selectType = (t: FFType): void => {
    if (t === ffType) return
    setPlaying(false)
    setFFType(t)
    setInputs(DEFAULT_INPUTS[t])
    setQ(0)
    setHistory([])
  }

  const reset = (): void => {
    setPlaying(false)
    setQ(0)
    setHistory([])
  }

  const last = history.length > 0 ? history[history.length - 1] : null
  const names = INPUT_NAMES[ffType]
  const currentIns = names.map((n) => inputs[n] ?? 0).join(' ')
  const srForbidden = ffType === 'SR' && (inputs.S ?? 0) === 1 && (inputs.R ?? 0) === 1

  return (
    <section className="flex flex-col gap-3 rounded-xl border border-border bg-background/40 p-3.5" aria-label="Flip-flop explorer">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Timer className="h-4 w-4 text-teal-400" aria-hidden />
          <h4 className="text-sm font-semibold text-foreground">Flip-flop explorer</h4>
          <span className="rounded-md border border-border bg-muted/30 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            {history.length} edge{history.length === 1 ? '' : 's'} evaluated
          </span>
        </div>
        <div className="flex overflow-hidden rounded-lg border border-border" role="group" aria-label="flip-flop type">
          {FF_TYPES.map((t) => (
            <button
              key={t}
              onClick={() => selectType(t)}
              aria-pressed={ffType === t}
              className={`px-3.5 py-1.5 font-mono text-xs font-bold tracking-wider transition-colors ${
                ffType === t ? 'bg-teal-600 text-white' : 'bg-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* controls + input toggles */}
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500" onClick={() => setPlaying(!playing)} aria-label={playing ? 'pause clock' : 'play clock'}>
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {playing ? 'Pause' : 'Play'}
        </Button>
        <Button size="sm" variant="outline" onClick={nextEdge}>
          <StepForward className="h-3.5 w-3.5" />
          Next edge
        </Button>
        <Button size="sm" variant="outline" onClick={reset} aria-label="reset flip-flop and clear waveform history">
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </Button>
        <Button
          size="sm"
          variant={showQn ? 'default' : 'outline'}
          aria-pressed={showQn}
          onClick={() => setShowQn(!showQn)}
        >
          Show Q′
        </Button>

        <span className="mx-1 hidden h-5 w-px bg-border sm:block" aria-hidden />

        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="flip-flop inputs for the next clock edge">
          {names.map((n) => {
            const on = (inputs[n] ?? 0) === 1
            return (
              <button
                key={n}
                onClick={() => setInputs({ ...inputs, [n]: on ? 0 : 1 })}
                aria-pressed={on}
                aria-label={`${n} input, currently ${on ? 1 : 0}, activate to toggle`}
                className={`rounded-lg border px-3 py-1.5 font-mono text-xs font-bold transition-colors ${
                  on
                    ? 'border-amber-500/50 bg-amber-500/15 text-amber-300'
                    : 'border-border bg-muted/30 text-muted-foreground hover:border-amber-500/40'
                }`}
              >
                {n} = {on ? 1 : 0}
              </button>
            )
          })}
        </div>

        <AnimatePresence>
          {srForbidden && (
            <motion.span
              initial={reduced ? false : { opacity: 0, y: -3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-rose-500/50 bg-rose-500/10 px-2.5 py-1 text-xs font-semibold text-rose-300"
            >
              <TriangleAlert className="h-3.5 w-3.5" aria-hidden />
              S = R = 1 is forbidden
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* waveform */}
      <FFWaveform history={history} inputs={inputs} q={q} ffType={ffType} showQn={showQn} playing={playing} reduced={reduced} />

      {/* table + transition */}
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
              Characteristic table
            </span>
            <TeX tex={FF_EQN[ffType]} />
          </div>
          <table className="w-full border-collapse text-center font-mono text-xs">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                {names.map((n) => (
                  <th key={n} className="px-2 py-1.5 font-medium">
                    {n}
                  </th>
                ))}
                <th className="px-2 py-1.5 font-medium text-teal-300">Q next</th>
              </tr>
            </thead>
            <tbody>
              {CHAR_TABLE[ffType].map((r) => {
                const active = r.ins === currentIns
                return (
                  <tr
                    key={r.ins}
                    className={`border-b border-border/40 last:border-0 ${
                      active ? 'bg-emerald-500/10' : r.bad ? 'bg-rose-500/[0.07]' : ''
                    }`}
                  >
                    {r.ins.split(' ').map((v, i) => (
                      <td
                        key={i}
                        className={`px-2 py-1.5 ${active ? 'font-bold text-foreground' : 'text-muted-foreground'}`}
                      >
                        {v}
                      </td>
                    ))}
                    <td
                      className={`px-2 py-1.5 ${
                        r.bad ? 'font-bold text-rose-300' : active ? 'font-bold text-emerald-300' : 'text-muted-foreground'
                      }`}
                    >
                      {r.next}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="rounded-lg border border-border bg-card p-3">
          <div className="mb-2 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
            Last transition
          </div>
          <div aria-live="polite">
            <AnimatePresence mode="wait">
              {last ? (
                <motion.div
                  key={`${last.edge}-${last.label}`}
                  initial={reduced ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`rounded-lg border px-3 py-2.5 font-mono text-sm ${
                    last.invalid
                      ? 'border-rose-500/50 bg-rose-500/10 text-rose-300'
                      : 'border-emerald-500/30 bg-emerald-500/5 text-foreground'
                  }`}
                >
                  <span className="text-teal-300">edge {last.edge}</span>
                  <span className="text-muted-foreground">: </span>
                  {INPUT_NAMES[ffType].map((n) => `${n}=${last.inputs[n] ?? 0}`).join(', ')}
                  <span className="text-muted-foreground"> → Q ← </span>
                  <span className="font-bold text-emerald-300">{last.invalid ? '?' : last.q}</span>
                  <span
                    className={`ml-2 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
                      last.invalid
                        ? 'border-rose-500/50 bg-rose-500/15 text-rose-300'
                        : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                    }`}
                  >
                    {last.label}
                  </span>
                </motion.div>
              ) : (
                <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-1 py-3 font-mono text-xs text-muted-foreground">
                  set the inputs above, then press Next edge or Play.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <p className="mt-2 px-1 text-xs leading-relaxed text-muted-foreground">
            The flip-flop samples its inputs on every <span className="text-teal-300">rising clock edge</span> — the
            value latched at edge <span className="font-mono">n</span> is held until edge{' '}
            <span className="font-mono">n + 1</span>. Inputs can be changed between edges (or live, while playing).
          </p>
          {ffType === 'SR' && (
            <p className="mt-1.5 px-1 text-xs leading-relaxed text-rose-300/80">
              With S = R = 1 both outputs are driven at once — Q and Q′ stop complementing each other, so the state
              after the inputs drop is unpredictable. Mano’s rule: never drive an SR latch this way.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  flip-flop waveform (SVG)                                           */
/* ------------------------------------------------------------------ */

interface WaveRow {
  label: string
  color: string
  kind: 'clk' | 'in' | 'q' | 'qn'
  name?: string
}

function FFWaveform({
  history,
  inputs,
  q,
  ffType,
  showQn,
  playing,
  reduced,
}: {
  history: FFEvent[]
  inputs: Record<string, Bit>
  q: Bit
  ffType: FFType
  showQn: boolean
  playing: boolean
  reduced: boolean
}) {
  const SLOT = 56
  const RH = 30
  const LW = 52
  const TOP = 10
  const MAXPAST = 9

  const past = history.slice(-MAXPAST)
  const upcoming = past.length
  const names = INPUT_NAMES[ffType]

  const rows: WaveRow[] = [
    { label: 'CLK', color: '#2dd4bf', kind: 'clk' },
    ...names.map((n): WaveRow => ({ label: n, color: '#fbbf24', kind: 'in', name: n })),
    { label: 'Q', color: '#10b981', kind: 'q' },
  ]
  if (showQn) rows.push({ label: 'Q′', color: '#84cc16', kind: 'qn' })

  const W = LW + 10 * SLOT
  const H = TOP + rows.length * RH + 16

  const rowY = (idx: number): number => TOP + idx * RH
  const yHi = (idx: number): number => rowY(idx) + 6
  const yLo = (idx: number): number => rowY(idx) + RH - 7

  const levelPath = (vals: Array<number | undefined>, idx: number, skew: number, pre: number | null = null): string => {
    const yOf = (v: number): number => (v === 1 ? yHi(idx) : yLo(idx))
    let d = pre !== null ? `M ${LW - 16} ${yOf(pre)}` : ''
    let prev: number | null = pre
    vals.forEach((v, i) => {
      if (v === undefined) return
      const x0 = LW + i * SLOT + skew
      if (prev === null) d += `M ${x0} ${yOf(v)}`
      else if (prev !== v) d += ` L ${x0} ${yOf(prev)} L ${x0} ${yOf(v)}`
      d += ` L ${x0 + SLOT} ${yOf(v)}`
      prev = v
    })
    return d
  }

  const qIdx = rows.findIndex((r) => r.kind === 'q')

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background/60">
      <div className="p-2">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full select-none"
          role="img"
          aria-label={`${ffType} flip-flop timing diagram: clock, ${names.join(', ')} and Q waveforms over ${history.length} edges`}
        >
          {/* row separators */}
          {rows.slice(1).map((_, i) => (
            <line
              key={`sep-${i}`}
              x1={LW - 14}
              x2={W - 4}
              y1={rowY(i + 1) - 4}
              y2={rowY(i + 1) - 4}
              stroke="rgba(63,63,70,0.35)"
              strokeWidth={1}
            />
          ))}

          {/* rising edge markers */}
          {past.map((ev, i) => (
            <line
              key={`edge-${ev.edge}`}
              x1={LW + i * SLOT}
              x2={LW + i * SLOT}
              y1={TOP - 2}
              y2={H - 16}
              stroke="rgba(113,113,122,0.30)"
              strokeDasharray="3 3"
              strokeWidth={1}
            />
          ))}

          {/* next-edge marker */}
          <line
            x1={LW + upcoming * SLOT}
            x2={LW + upcoming * SLOT}
            y1={TOP - 2}
            y2={H - 16}
            stroke="#fbbf24"
            strokeDasharray="5 4"
            strokeWidth={1.6}
          />
          {playing ? (
            <motion.circle
              cx={LW + upcoming * SLOT}
              cy={TOP - 2}
              r={3}
              fill="#fbbf24"
              animate={reduced ? undefined : { opacity: [1, 0.25, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ) : (
            <circle cx={LW + upcoming * SLOT} cy={TOP - 2} r={3} fill="#fbbf24" />
          )}

          {/* pending slot */}
          <rect
            x={LW + upcoming * SLOT + 1}
            y={TOP - 2}
            width={SLOT - 2}
            height={H - 16 - TOP}
            rx={4}
            fill="rgba(251,191,36,0.05)"
            stroke="rgba(251,191,36,0.45)"
            strokeDasharray="4 4"
            strokeWidth={1}
          />

          {/* waveforms */}
          {rows.map((row, idx) => {
            let d = ''
            if (row.kind === 'clk') {
              d = `M ${LW - 16} ${yLo(idx)}`
              for (let i = 0; i < past.length; i++) {
                const x = LW + i * SLOT
                d += ` L ${x} ${yLo(idx)} L ${x} ${yHi(idx)} L ${x + SLOT / 2} ${yHi(idx)} L ${x + SLOT / 2} ${yLo(idx)} L ${x + SLOT} ${yLo(idx)}`
              }
            } else if (row.kind === 'in') {
              const nm = row.name ?? ''
              d = levelPath([...past.map((ev) => ev.inputs[nm] ?? 0), inputs[nm] ?? 0], idx, 0)
            } else {
              const inv = row.kind === 'qn'
              const qv = (b: Bit): number => (inv ? (b === 1 ? 0 : 1) : b)
              const vals: Array<number | undefined> = [...past.map((ev) => qv(ev.q)), qv(q)]
              const pre = past.length > 0 ? qv(past[0].qPrev) : qv(q)
              d = levelPath(vals, idx, 5, pre)
            }
            return (
              <g key={row.label + idx}>
                <path d={d} fill="none" stroke={row.color} strokeWidth={row.kind === 'clk' ? 2.2 : 2} strokeLinejoin="round" />
              </g>
            )
          })}

          {/* pending clock ghost */}
          {(() => {
            const x = LW + upcoming * SLOT
            const d = `M ${x} ${yLo(0)} L ${x} ${yHi(0)} L ${x + SLOT / 2} ${yHi(0)} L ${x + SLOT / 2} ${yLo(0)} L ${x + SLOT} ${yLo(0)}`
            return <path d={d} fill="none" stroke="#2dd4bf" strokeWidth={2.2} strokeDasharray="4 3" opacity={0.45} />
          })()}

          {/* invalid markers on the Q row */}
          {past.map((ev, i) =>
            ev.invalid ? (
              <g key={`inv-${ev.edge}`} stroke="#f43f5e" strokeWidth={1.8}>
                <circle cx={LW + i * SLOT + 10} cy={rowY(qIdx) + RH / 2} r={5.5} fill="rgba(244,63,94,0.15)" />
                <line
                  x1={LW + i * SLOT + 7.5}
                  x2={LW + i * SLOT + 12.5}
                  y1={rowY(qIdx) + RH / 2 - 2.5}
                  y2={rowY(qIdx) + RH / 2 + 2.5}
                />
                <line
                  x1={LW + i * SLOT + 12.5}
                  x2={LW + i * SLOT + 7.5}
                  y1={rowY(qIdx) + RH / 2 - 2.5}
                  y2={rowY(qIdx) + RH / 2 + 2.5}
                />
              </g>
            ) : null
          )}

          {/* labels */}
          {rows.map((row, idx) => (
            <text
              key={`lab-${row.label}-${idx}`}
              x={10}
              y={rowY(idx) + RH / 2 + 4}
              fontSize={11}
              fontWeight={700}
              fill={row.color}
              className="font-mono"
            >
              {row.label}
            </text>
          ))}

          {/* edge numbers */}
          {past.map((ev, i) => (
            <text
              key={`num-${ev.edge}`}
              x={LW + i * SLOT}
              y={H - 5}
              textAnchor="middle"
              fontSize={8.5}
              className="fill-zinc-600 font-mono"
            >
              {ev.edge}
            </text>
          ))}
          <text
            x={LW + upcoming * SLOT}
            y={H - 5}
            textAnchor="middle"
            fontSize={8.5}
            className="fill-amber-500/80 font-mono"
          >
            next
          </text>
        </svg>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  panel 2 — 4-bit counter                                            */
/* ------------------------------------------------------------------ */

interface Pending {
  from: number
  to: number
  settled: number
  wrapped: boolean
  cleared: boolean
}

function CounterPanel({ ffType }: { ffType: FFType }) {
  const [mode, setMode] = useState<'ripple' | 'sync'>('ripple')
  const [dir, setDir] = useState<'up' | 'down'>('up')
  const [mod10, setMod10] = useState(false)
  const [count, setCount] = useState(0)
  const [hist, setHist] = useState<CounterTick[]>([])
  const [pending, setPending] = useState<Pending | null>(null)
  const [flash, setFlash] = useState<{ text: string; tone: 'amber' | 'rose' | 'emerald' } | null>(null)
  const timers = useRef<Array<ReturnType<typeof setTimeout>>>([])
  const reduced = useReducedMotion() ?? false

  const clearTimers = useCallback((): void => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  const showFlash = useCallback(
    (text: string, tone: 'amber' | 'rose' | 'emerald'): void => {
      setFlash({ text, tone })
      const id = setTimeout(() => setFlash(null), 1700)
      timers.current.push(id)
    },
    []
  )

  const pushHist = useCallback(
    (from: number, to: number, wrapped: boolean, cleared: boolean, stages: number): void => {
      setHist((h) => [...h.slice(-15), { bits: bitsOf(to), from, count: to, wrapped, cleared, stages }])
    },
    []
  )

  const step = (): void => {
    let from = count
    if (pending) {
      clearTimers()
      from = pending.to
      setCount(pending.to)
      pushHist(pending.from, pending.to, pending.wrapped, pending.cleared, stagesBetween(pending.from, pending.to))
    }

    let to: number
    let wrapped = false
    let cleared = false
    if (mod10) {
      if (dir === 'up') {
        if (from === 9) {
          to = 0
          cleared = true
          wrapped = true
        } else to = from + 1
      } else {
        to = from === 0 ? 9 : from - 1
        wrapped = from === 0
      }
    } else {
      to = dir === 'up' ? (from + 1) % 16 : (from + 15) % 16
      wrapped = dir === 'up' ? from === 15 : from === 0
    }

    const fromBits = bitsOf(from)
    const toBits = bitsOf(to)
    let highest = -1
    for (let i = 0; i < 4; i++) if (fromBits[i] !== toBits[i]) highest = i
    const stages = highest + 1

    if (mode === 'sync' || reduced) {
      setCount(to)
      pushHist(from, to, wrapped, cleared, stages)
    } else {
      setPending({ from, to, settled: 0, wrapped, cleared })
      for (let k = 1; k <= 4; k++) {
        const id = setTimeout(() => {
          setPending((p) => (p && p.from === from && p.to === to ? { ...p, settled: k } : p))
        }, k * 270)
        timers.current.push(id)
      }
      const fid = setTimeout(() => {
        setPending(null)
        setCount(to)
        pushHist(from, to, wrapped, cleared, stages)
      }, 4 * 270 + 90)
      timers.current.push(fid)
    }

    if (cleared) showFlash('NAND decodes 1010 → asynchronous CLR', 'rose')
    else if (wrapped)
      showFlash(
        mod10 ? 'decade wrap — back to 9' : dir === 'up' ? 'carry out — wraps 15 → 0' : 'borrow — wraps 0 → 15',
        'amber'
      )
  }

  const reset = (): void => {
    clearTimers()
    setPending(null)
    setCount(0)
    setHist([])
    showFlash('asynchronous clear — back to 0000, ignoring the clock', 'emerald')
  }

  const toggleMod10 = (): void => {
    const next = !mod10
    setMod10(next)
    if (next) {
      setDir('up')
      setMode('ripple')
      showFlash('mod-10 BCD — decode 1010 and clear', 'amber')
    }
  }

  const changed: boolean[] = [false, false, false, false]
  const dispBits: Array<Bit> = []
  if (pending) {
    const fb = bitsOf(pending.from)
    const tb = bitsOf(pending.to)
    for (let i = 0; i < 4; i++) {
      changed[i] = fb[i] !== tb[i]
      dispBits.push(i < pending.settled ? tb[i] : fb[i])
    }
  } else {
    const cb = bitsOf(count)
    for (let i = 0; i < 4; i++) dispBits.push(cb[i])
  }
  const glowIdx = pending ? pending.settled - 1 : -1
  const lastTick = hist.length > 0 ? hist[hist.length - 1] : null

  const flashStyle: Record<'amber' | 'rose' | 'emerald', string> = {
    amber: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
    rose: 'border-rose-500/40 bg-rose-500/10 text-rose-300',
    emerald: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  }

  return (
    <section className="flex flex-col gap-3 rounded-xl border border-border bg-background/40 p-3.5" aria-label="4-bit counter">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Binary className="h-4 w-4 text-emerald-400" aria-hidden />
          <h4 className="text-sm font-semibold text-foreground">4-bit counter</h4>
          <span className="rounded-md border border-border bg-muted/30 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            4 × {ffType} · {FF_INPUT_NOTE[ffType]}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex overflow-hidden rounded-lg border border-border" role="group" aria-label="counter architecture">
            {(['ripple', 'sync'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`px-3 py-1.5 font-mono text-xs font-semibold transition-colors ${
                  mode === m ? 'bg-emerald-600 text-white' : 'bg-card text-muted-foreground hover:text-foreground'
                }`}
              >
                {m === 'sync' ? 'synchronous' : 'ripple'}
              </button>
            ))}
          </div>
          <div className="flex overflow-hidden rounded-lg border border-border" role="group" aria-label="count direction">
            <button
              onClick={() => setDir('up')}
              aria-pressed={dir === 'up'}
              aria-label="count up"
              className={`px-2.5 py-1.5 transition-colors ${dir === 'up' ? 'bg-emerald-600 text-white' : 'bg-card text-muted-foreground hover:text-foreground'}`}
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
                <path d="M6 1 L11 9 H1 Z" fill="currentColor" />
              </svg>
            </button>
            <button
              onClick={() => setDir('down')}
              aria-pressed={dir === 'down'}
              aria-label="count down"
              className={`px-2.5 py-1.5 transition-colors ${dir === 'down' ? 'bg-emerald-600 text-white' : 'bg-card text-muted-foreground hover:text-foreground'}`}
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
                <path d="M6 11 L1 3 H11 Z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <Button
            size="sm"
            variant={mod10 ? 'default' : 'outline'}
            aria-pressed={mod10}
            className={mod10 ? 'bg-amber-600 hover:bg-amber-500' : ''}
            onClick={toggleMod10}
          >
            mod-10 BCD
          </Button>
        </div>
      </div>

      {/* step controls */}
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500" onClick={step}>
          <StepForward className="h-3.5 w-3.5" />
          Step clock
        </Button>
        <Button size="sm" variant="outline" onClick={reset}>
          <RotateCcw className="h-3.5 w-3.5" />
          Async reset
        </Button>
        <span className="sr-only" aria-live="polite">
          counter value {pending ? 'settling' : count}
        </span>
        <span
          className={`ml-auto rounded-lg border px-3 py-1.5 font-mono text-sm font-bold ${
            pending
              ? 'border-amber-500/50 bg-amber-500/10 text-amber-300'
              : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
          }`}
          aria-label={`counter value ${pending ? 'settling' : count} decimal, binary ${binaryString(dispBits)}`}
        >
          {pending ? `${binaryString(dispBits)} …` : `${count} = ${binaryString(dispBits)}₂`}
        </span>
      </div>

      {/* flash message */}
      <AnimatePresence>
        {flash && (
          <motion.div
            key={flash.text}
            initial={reduced ? false : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`inline-flex items-center gap-2 self-start rounded-lg border px-3 py-1.5 text-xs font-semibold ${flashStyle[flash.tone]}`}
          >
            {flash.tone === 'emerald' ? (
              <Check className="h-3.5 w-3.5" aria-hidden />
            ) : (
              <TriangleAlert className="h-3.5 w-3.5" aria-hidden />
            )}
            {flash.text}
          </motion.div>
        )}
      </AnimatePresence>

      {/* flip-flop chain */}
      <div className="overflow-x-auto">
        <div className="flex min-w-max items-stretch gap-1.5 py-1">
          {[0, 1, 2, 3].map((i) => {
            const bit = dispBits[i]
            const glowing = pending && changed[i] && i <= glowIdx
            return (
              <Fragment key={i}>
                {i > 0 &&
                  (mode === 'ripple' ? (
                    <span className="flex flex-col items-center justify-center px-0.5" aria-hidden>
                      <svg viewBox="0 0 24 12" className="h-3.5 w-6">
                        <line x1="0" y1="6" x2="18" y2="6" stroke={glowing ? '#fbbf24' : '#52525b'} strokeWidth="2" />
                        <path d="M16 2 L22 6 L16 10" fill="none" stroke={glowing ? '#fbbf24' : '#52525b'} strokeWidth="2" />
                      </svg>
                    </span>
                  ) : (
                    <span className="flex items-center px-0.5" aria-hidden>
                      <span className="h-px w-5 bg-border" />
                    </span>
                  ))}
                <div
                  className={`flex w-[92px] flex-col items-center gap-1 rounded-xl border px-3 py-2.5 transition-colors ${
                    glowing ? 'border-amber-400/70 bg-amber-500/10' : 'border-border bg-card'
                  }`}
                >
                  <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
                    FF{i} · {ffType}
                  </span>
                  <motion.span
                    key={`${i}-${bit}`}
                    initial={reduced ? false : { scale: 1.35 }}
                    animate={{ scale: 1 }}
                    className={`font-mono text-2xl font-bold ${bit === 1 ? 'text-emerald-400' : 'text-zinc-500'}`}
                  >
                    {bit}
                  </motion.span>
                  <span className="font-mono text-[9px] text-muted-foreground">
                    Q{i} · f/{2 ** (i + 1)}
                  </span>
                </div>
              </Fragment>
            )
          })}
        </div>
      </div>

      {/* timing diagram */}
      <CounterTiming hist={hist} />

      {/* delay readout */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-3">
          <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
            <Timer className="h-3.5 w-3.5 text-teal-400" aria-hidden />
            Propagation
          </div>
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">
            {pending ? (
              <span className="text-amber-300">
                ripple in progress — {pending.settled} of 4 FFs settled · {pending.settled} × t_pd
              </span>
            ) : mode === 'ripple' ? (
              <>
                last transition: {lastTick ? `${lastTick.stages} × t_pd` : '—'}
                <br />
                worst case: 4 × t_pd (all four stages toggle)
              </>
            ) : (
              <>
                settling: 1 × t_pd — one common clock edge
                <br />
                last transition touched {lastTick ? `${lastTick.stages} FF${lastTick.stages === 1 ? '' : 's'}` : '—'}
              </>
            )}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-3">
          <div className="mb-1 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Frequency division</div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Each stage halves the rate: <span className="font-mono text-foreground">Q0 = f/2</span>,{' '}
            <span className="font-mono text-foreground">Q1 = f/4</span>, <span className="font-mono text-foreground">Q2 = f/8</span>,{' '}
            <span className="font-mono text-foreground">Q3 = f/16</span> — the counter is a frequency divider chain,
            reading <TeX tex="0" /> to <TeX tex="15" /> on its four outputs.
          </p>
        </div>
      </div>

      {mode === 'ripple' && (
        <p className="text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Ripple:</span> FF0 is clocked directly; every later stage is
          clocked by the previous Q. The new value travels down the chain, so transient states appear while the ripple
          settles — the amber sweep above.
        </p>
      )}
      {mode === 'sync' && (
        <p className="text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Synchronous:</span> all four flip-flops share the clock, so
          every output changes on the same edge and no decoded glitches appear between stages.
        </p>
      )}

      {mod10 && (
        <div className="rounded-lg border border-amber-500/25 bg-amber-500/5 px-3 py-2 text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Decode-and-clear (mod-10 BCD):</span> a NAND gate watches for
          the forbidden code <span className="font-mono">1010</span> (decimal 10) and drives the asynchronous CLR
          inputs of every stage: <TeX tex={CLR_TEX} />. The counter passes through 10
          only for nanoseconds before snapping to 0 — watch the rose flash when stepping past 9.
        </div>
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  counter timing diagram (SVG)                                       */
/* ------------------------------------------------------------------ */

function CounterTiming({ hist }: { hist: CounterTick[] }) {
  const SLOT = 44
  const RH = 26
  const LW = 64
  const TOP = 10
  const MAXSLOTS = 12

  const slots = hist.slice(-MAXSLOTS)
  const rows = ['CLK', 'Q0', 'Q1', 'Q2', 'Q3', 'value']
  const rowBits = [0, 1, 2, 3]
  const W = LW + MAXSLOTS * SLOT
  const H = TOP + rows.length * RH + 6

  const rowY = (idx: number): number => TOP + idx * RH
  const yHi = (idx: number): number => rowY(idx) + 5
  const yLo = (idx: number): number => rowY(idx) + RH - 6

  const levelPath = (vals: Array<number | undefined>, idx: number, pre: number | null): string => {
    const yOf = (v: number): number => (v === 1 ? yHi(idx) : yLo(idx))
    let d = ''
    let prev: number | null = pre
    if (pre !== null) d = `M ${LW - 14} ${yOf(pre)}`
    vals.forEach((v, i) => {
      if (v === undefined) return
      const x0 = LW + i * SLOT + 4
      if (prev === null) d += `M ${x0} ${yOf(v)}`
      else if (prev !== v) d += ` L ${x0} ${yOf(prev)} L ${x0} ${yOf(v)}`
      d += ` L ${x0 + SLOT} ${yOf(v)}`
      prev = v
    })
    return d
  }

  if (slots.length === 0) {
    return (
      <div className="flex h-24 items-center justify-center rounded-xl border border-dashed border-border/70 text-xs text-muted-foreground">
        step the counter to draw its timing diagram
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background/60">
      <div className="p-2">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full select-none"
          role="img"
          aria-label={`counter timing diagram: clock, Q0 to Q3 and decoded values ${slots.map((s) => s.count).join(', ')}`}
        >
          {/* row separators */}
          {rows.slice(1).map((_, i) => (
            <line
              key={`sep-${i}`}
              x1={LW - 10}
              x2={W - 4}
              y1={rowY(i + 1) - 3}
              y2={rowY(i + 1) - 3}
              stroke="rgba(63,63,70,0.35)"
              strokeWidth={1}
            />
          ))}

          {/* clock edges */}
          {slots.map((s, i) => (
            <line
              key={`edge-${i}`}
              x1={LW + i * SLOT}
              x2={LW + i * SLOT}
              y1={TOP - 2}
              y2={H - 4}
              stroke="rgba(113,113,122,0.25)"
              strokeDasharray="3 3"
              strokeWidth={1}
            />
          ))}

          {/* CLK */}
          {(() => {
            let d = `M ${LW - 14} ${yLo(0)}`
            for (let i = 0; i < slots.length; i++) {
              const x = LW + i * SLOT
              d += ` L ${x} ${yLo(0)} L ${x} ${yHi(0)} L ${x + SLOT / 2} ${yHi(0)} L ${x + SLOT / 2} ${yLo(0)} L ${x + SLOT} ${yLo(0)}`
            }
            return <path d={d} fill="none" stroke="#2dd4bf" strokeWidth={2.2} strokeLinejoin="round" />
          })()}

          {/* Q rows */}
          {rowBits.map((bitIdx) => {
            const idx = bitIdx + 1
            const pre = slots.length > 0 ? bitsOf(slots[0].from)[bitIdx] : null
            const vals: Array<number | undefined> = slots.map((s) => s.bits[bitIdx])
            return (
              <path
                key={`qrow-${bitIdx}`}
                d={levelPath(vals, idx, pre)}
                fill="none"
                stroke="#10b981"
                strokeWidth={2}
                strokeLinejoin="round"
              />
            )
          })}

          {/* labels */}
          {rows.map((label, idx) => (
            <text
              key={`lab-${label}`}
              x={8}
              y={rowY(idx) + RH / 2 + 4}
              fontSize={10.5}
              fontWeight={700}
              fill={idx === 0 ? '#2dd4bf' : idx === 5 ? '#a1a1aa' : '#10b981'}
              className="font-mono"
            >
              {idx >= 1 && idx <= 4 ? `${label} · f/${2 ** idx}` : label}
            </text>
          ))}

          {/* decoded values */}
          {slots.map((s, i) => (
            <text
              key={`val-${i}`}
              x={LW + i * SLOT + SLOT / 2}
              y={rowY(5) + RH / 2 + 4}
              textAnchor="middle"
              fontSize={11}
              fontWeight={700}
              className="font-mono"
              fill={s.cleared ? '#f43f5e' : s.wrapped ? '#fbbf24' : '#d4d4d8'}
            >
              {s.count}
            </text>
          ))}
          {slots.map((s, i) =>
            s.cleared ? (
              <text
                key={`clr-${i}`}
                x={LW + i * SLOT + SLOT / 2}
                y={rowY(5) + RH - 2}
                textAnchor="middle"
                fontSize={7.5}
                className="fill-rose-400 font-mono"
              >
                CLR
              </text>
            ) : null
          )}
        </svg>
      </div>
    </div>
  )
}
