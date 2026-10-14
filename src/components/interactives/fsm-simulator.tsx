'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Lightbulb, Play, Pause, SkipForward, RotateCcw, Plus, X, CheckCircle2, XCircle, ListOrdered } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

/* ------------------------------------------------------------------ */
/* model                                                               */
/* ------------------------------------------------------------------ */

interface FsmState {
  id: string
  name: string
  accepting: boolean
  x: number
  y: number
}

interface FsmTransition {
  id: string
  from: string
  input: string
  to: string
}

interface FsmDef {
  states: FsmState[]
  alphabet: string[]
  start: string
  transitions: FsmTransition[]
}

interface RunStep {
  consumed: number
  state: string
  edge: string | null
  char: string | null
  stuck: boolean
}

const ST = (name: string, x: number, y: number, accepting = false): FsmState => ({ id: name, name, accepting, x, y })
const TR = (from: string, input: string, to: string): FsmTransition => ({ id: `${from}:${input}:${to}`, from, input, to })

const PRESETS: Record<string, FsmDef> = {
  even: {
    states: [ST('q0', 175, 150, true), ST('q1', 465, 150)],
    alphabet: ['0', '1'],
    start: 'q0',
    transitions: [TR('q0', '0', 'q0'), TR('q0', '1', 'q1'), TR('q1', '0', 'q1'), TR('q1', '1', 'q0')],
  },
  odd: {
    states: [ST('q0', 175, 150), ST('q1', 465, 150, true)],
    alphabet: ['0', '1'],
    start: 'q0',
    transitions: [TR('q0', '0', 'q0'), TR('q0', '1', 'q1'), TR('q1', '0', 'q1'), TR('q1', '1', 'q0')],
  },
  ab: {
    states: [ST('q0', 110, 150), ST('q1', 320, 150), ST('q2', 530, 150, true)],
    alphabet: ['a', 'b'],
    start: 'q0',
    transitions: [
      TR('q0', 'a', 'q1'), TR('q0', 'b', 'q0'),
      TR('q1', 'a', 'q1'), TR('q1', 'b', 'q2'),
      TR('q2', 'a', 'q1'), TR('q2', 'b', 'q0'),
    ],
  },
  mod3: {
    states: [ST('r0', 320, 80, true), ST('r1', 150, 245), ST('r2', 490, 245)],
    alphabet: ['0', '1'],
    start: 'r0',
    transitions: [
      TR('r0', '1', 'r1'), TR('r1', '1', 'r2'), TR('r2', '1', 'r0'),
      TR('r0', '0', 'r0'), TR('r1', '0', 'r1'), TR('r2', '0', 'r2'),
    ],
  },
}

const PRESET_LABELS: { key: string; label: string }[] = [
  { key: 'even', label: 'Even parity' },
  { key: 'odd', label: 'Odd number of 1s' },
  { key: 'ab', label: "Strings ending in 'ab'" },
  { key: 'mod3', label: 'Count of 1s mod 3' },
]

const VW = 640
const VH = 300
const SR = 36

const sub = (s: string) => s.replace(/\d/g, (d) => '₀₁₂₃₄₅₆₇₈₉'[Number(d)] ?? d)

/* ------------------------------------------------------------------ */
/* main                                                                */
/* ------------------------------------------------------------------ */

export default function FsmSimulator() {
  const [fsm, setFsm] = useState<FsmDef>(() => PRESETS.even)
  const [input, setInput] = useState('1011')
  const [runData, setRunData] = useState<{ sig: string; steps: RunStep[] } | null>(null)
  const [runIdx, setRunIdx] = useState(0)
  const [running, setRunning] = useState(false)
  const [msg, setMsg] = useState('')
  // add-transition form
  const [addFrom, setAddFrom] = useState('')
  const [addTo, setAddTo] = useState('')
  const [addChar, setAddChar] = useState('')

  const stateById = useMemo(() => new Map(fsm.states.map((s) => [s.id, s])), [fsm.states])

  const fsmSig = useMemo(
    () => fsm.states.map((s) => `${s.id}${s.accepting ? '*' : ''}`).join(',') + '|' + fsm.transitions.map((t) => t.id).join(','),
    [fsm]
  )
  /* a run stays live only while the machine is unchanged */
  const steps = runData !== null && runData.sig === fsmSig ? runData.steps : null

  /* auto-advance (state updates only inside timeouts) */
  useEffect(() => {
    if (!running || !steps) return
    if (runIdx >= steps.length - 1) {
      const t = window.setTimeout(() => setRunning(false), 0)
      return () => window.clearTimeout(t)
    }
    const t = window.setTimeout(() => setRunIdx((i) => Math.min(i + 1, steps.length - 1)), 800)
    return () => window.clearTimeout(t)
  }, [running, steps, runIdx])

  const clean = (raw: string): string => raw.split('').filter((c) => fsm.alphabet.includes(c)).slice(0, 40).join('')

  const run = () => {
    const s = input
    if (s.length === 0) {
      setMsg('Type a string over the alphabet first.')
      return
    }
    setMsg('')
    const out: RunStep[] = [{ consumed: 0, state: fsm.start, edge: null, char: null, stuck: false }]
    let cur = fsm.start
    for (let i = 0; i < s.length; i++) {
      const c = s[i]
      const t = fsm.transitions.find((x) => x.from === cur && x.input === c)
      if (!t) {
        out.push({ consumed: i, state: cur, edge: null, char: c, stuck: true })
        break
      }
      out.push({ consumed: i + 1, state: t.to, edge: t.id, char: c, stuck: false })
      cur = t.to
    }
    setRunData({ sig: fsmSig, steps: out })
    setRunIdx(0)
    setRunning(true)
  }

  const finished = steps !== null && runIdx >= steps.length - 1 && !running
  const current = steps ? steps[Math.min(runIdx, steps.length - 1)] : null
  const lastStep = steps ? steps[steps.length - 1] : null
  const accepted = lastStep ? !lastStep.stuck && (stateById.get(lastStep.state)?.accepting ?? false) : null
  const pathStates = useMemo(() => {
    if (!steps) return [] as string[]
    return steps.slice(0, Math.min(runIdx, steps.length - 1) + 1).map((s) => s.state)
  }, [steps, runIdx])

  /* grouped edges for rendering */
  const grouped = useMemo(() => {
    const keyOf = (t: FsmTransition) => (t.from === t.to ? `self:${t.from}` : `${t.from}>${t.to}`)
    const groups = new Map<string, { from: string; to: string; labels: string[]; ids: string[] }>()
    for (const t of fsm.transitions) {
      const k = keyOf(t)
      if (!groups.has(k)) groups.set(k, { from: t.from, to: t.to, labels: [], ids: [] })
      const g = groups.get(k)
      if (g && !g.labels.includes(t.input)) g.labels.push(t.input)
      if (g) g.ids.push(t.id)
    }
    return [...groups.values()]
  }, [fsm.transitions])

  const centroid = useMemo(() => {
    if (fsm.states.length === 0) return { x: VW / 2, y: VH / 2 }
    return {
      x: fsm.states.reduce((a, s) => a + s.x, 0) / fsm.states.length,
      y: fsm.states.reduce((a, s) => a + s.y, 0) / fsm.states.length,
    }
  }, [fsm.states])

  const toggleAccepting = (id: string) => {
    setFsm((f) => ({ ...f, states: f.states.map((s) => (s.id === id ? { ...s, accepting: !s.accepting } : s)) }))
  }

  const addTransition = () => {
    const from = addFrom || fsm.states[0]?.id || ''
    const to = addTo || fsm.states[0]?.id || ''
    if (!from || !to) return
    if (!fsm.alphabet.includes(addChar)) {
      setMsg(`Input symbol must be one of { ${fsm.alphabet.join(', ')} }.`)
      return
    }
    if (fsm.transitions.some((t) => t.from === from && t.input === addChar && t.to === to)) {
      setMsg('That transition already exists.')
      return
    }
    setMsg('')
    setFsm((f) => ({ ...f, transitions: [...f.transitions, TR(from, addChar, to)] }))
    setAddChar('')
  }

  const removeTransition = (id: string) => {
    setFsm((f) => ({ ...f, transitions: f.transitions.filter((t) => t.id !== id) }))
  }

  const applyPreset = (key: string) => {
    const p = PRESETS[key]
    if (!p) return
    setFsm(p)
    setAddFrom('')
    setAddTo('')
    setAddChar('')
    setMsg('')
    setInput(key === 'ab' ? 'aab' : key === 'mod3' ? '1011' : '1011')
  }

  const formal = `S = { ${fsm.states.map((s) => sub(s.name)).join(', ')} },  I = { ${fsm.alphabet.join(', ')} },  s₀ = ${sub(
    fsm.start
  )},  F = ${fsm.states.filter((s) => s.accepting).length > 0 ? `{ ${fsm.states.filter((s) => s.accepting).map((s) => sub(s.name)).join(', ')} }` : '∅'}`

  return (
    <div className="flex flex-col gap-4">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <Cpu className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Finite State Machine Simulator</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Feed a string into a deterministic finite automaton and watch each symbol drive a state transition.
            </p>
          </div>
        </div>
        <div className="min-w-[190px]">
          <Select onValueChange={applyPreset}>
            <SelectTrigger size="sm" className="h-9 bg-card text-xs">
              <SelectValue placeholder="Load preset" />
            </SelectTrigger>
            <SelectContent>
              {PRESET_LABELS.map((p) => (
                <SelectItem key={p.key} value={p.key}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* formal definition */}
      <div className="overflow-x-auto rounded-xl border border-border bg-card px-4 py-3 font-mono text-xs text-foreground">
        <span className="text-zinc-500">M = (S, I, f, s₀, F):&nbsp;&nbsp;</span>
        {formal}
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        {/* diagram + tape */}
        <div className="flex flex-col gap-4 lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">State diagram</span>
              <span className="text-[11px] text-muted-foreground">click a state to toggle accepting</span>
            </div>
            <div className="p-2">
              <svg viewBox={`0 0 ${VW} ${VH}`} className="mx-auto h-auto w-full max-w-[560px]" role="img" aria-label="finite state machine">
                <defs>
                  <marker id="fsm-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7.5" markerHeight="7.5" orient="auto-start-reverse">
                    <path d="M 0 1 L 9 5 L 0 9 z" className="fill-zinc-500" />
                  </marker>
                  <marker id="fsm-arrow-hi" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="8.5" markerHeight="8.5" orient="auto-start-reverse">
                    <path d="M 0 1 L 9 5 L 0 9 z" className="fill-emerald-400" />
                  </marker>
                </defs>

                {/* start arrow */}
                {(() => {
                  const s = stateById.get(fsm.start)
                  if (!s) return null
                  return (
                    <g>
                      <line x1={s.x - SR - 64} y1={s.y} x2={s.x - SR - 8} y2={s.y} stroke="#71717a" strokeWidth={2} markerEnd="url(#fsm-arrow)" />
                      <text x={s.x - SR - 64} y={s.y - 10} className="fill-zinc-500 font-mono" fontSize={10}>
                        start
                      </text>
                    </g>
                  )
                })()}

                {/* edges */}
                {grouped.map((g) => {
                  const a = stateById.get(g.from)
                  const b = stateById.get(g.to)
                  if (!a || !b) return null
                  const hi = current?.edge !== null && current?.edge !== undefined && g.ids.includes(current.edge)
                  if (a.id === b.id) {
                    // self loop
                    let ox = a.x - centroid.x
                    let oy = a.y - centroid.y
                    const ol = Math.hypot(ox, oy) || 1
                    ox /= ol
                    oy /= ol
                    const lx = a.x + ox * (SR + 24)
                    const ly = a.y + oy * (SR + 24)
                    const lr = 20
                    return (
                      <g key={`self-${a.id}`}>
                        <path
                          d={`M${lx - lr},${ly} a${lr},${lr} 0 1,0 ${2 * lr},0 a${lr},${lr} 0 1,0 ${-2 * lr},0`}
                          fill="none"
                          stroke={hi ? '#10b981' : '#71717a'}
                          strokeWidth={hi ? 3.5 : 2}
                          markerEnd={hi ? 'url(#fsm-arrow-hi)' : 'url(#fsm-arrow)'}
                          className="transition-all"
                        />
                        <text
                          x={lx + ox * 22}
                          y={ly + oy * 22 + 4}
                          textAnchor="middle"
                          fontSize={13}
                          fontWeight={700}
                          className={hi ? 'fill-emerald-400 font-mono' : 'fill-zinc-400 font-mono'}
                          stroke="#09090b"
                          strokeWidth={4}
                          paintOrder="stroke"
                        >
                          {g.labels.join(',')}
                        </text>
                      </g>
                    )
                  }
                  const dx = b.x - a.x
                  const dy = b.y - a.y
                  const len = Math.hypot(dx, dy) || 1
                  const ux = dx / len
                  const uy = dy / len
                  const sx = a.x + ux * (SR + 3)
                  const sy = a.y + uy * (SR + 3)
                  const ex = b.x - ux * (SR + 9)
                  const ey = b.y - uy * (SR + 9)
                  const px = -uy
                  const py = ux
                  const bow = Math.min(40, len * 0.22)
                  const mx = (sx + ex) / 2 + px * bow
                  const my = (sy + ey) / 2 + py * bow
                  return (
                    <g key={`${g.from}>${g.to}`}>
                      <path
                        d={`M${sx},${sy} Q${mx},${my} ${ex},${ey}`}
                        fill="none"
                        stroke={hi ? '#10b981' : '#71717a'}
                        strokeWidth={hi ? 4 : 2.2}
                        markerEnd={hi ? 'url(#fsm-arrow-hi)' : 'url(#fsm-arrow)'}
                        className="transition-all"
                      />
                      <text
                        x={mx + px * 20}
                        y={my + py * 20 + 4}
                        textAnchor="middle"
                        fontSize={13}
                        fontWeight={700}
                        className={hi ? 'fill-emerald-400 font-mono' : 'fill-zinc-400 font-mono'}
                        stroke="#09090b"
                        strokeWidth={4}
                        paintOrder="stroke"
                      >
                        {g.labels.join(',')}
                      </text>
                    </g>
                  )
                })}

                {/* states */}
                {fsm.states.map((s) => {
                  const isCurrent = current?.state === s.id
                  return (
                    <g key={s.id} onClick={() => toggleAccepting(s.id)} style={{ cursor: 'pointer' }}>
                      {isCurrent && (
                        <motion.circle
                          cx={s.x}
                          cy={s.y}
                          r={SR}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth={2.5}
                          animate={{ r: [SR, SR + 24], opacity: [0.9, 0] }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'easeOut' }}
                        />
                      )}
                      <circle
                        cx={s.x}
                        cy={s.y}
                        r={SR}
                        className="transition-colors"
                        fill={isCurrent ? 'rgba(16,185,129,0.25)' : 'var(--color-card)'}
                        stroke={isCurrent ? '#10b981' : s.accepting ? '#f59e0b' : '#52525b'}
                        strokeWidth={2.5}
                      />
                      {s.accepting && (
                        <circle cx={s.x} cy={s.y} r={SR - 7} fill="none" stroke={s.accepting ? '#f59e0b' : '#52525b'} strokeWidth={1.5} opacity={0.8} />
                      )}
                      <text x={s.x} y={s.y + 5} textAnchor="middle" fontSize={16} fontWeight={700} className="fill-foreground font-mono">
                        {sub(s.name)}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>

          {/* tape + run controls */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Input
                value={input}
                onChange={(e) => { setInput(clean(e.target.value)); setRunData(null); setRunIdx(0); setRunning(false) }}
                onKeyDown={(e) => { if (e.key === 'Enter') run() }}
                placeholder={`string over { ${fsm.alphabet.join(', ')} }`}
                className="h-9 w-52 font-mono text-sm"
              />
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500" onClick={() => (running ? setRunning(false) : run())}>
                {running ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                {running ? 'Pause' : 'Run'}
              </Button>
              <Button
                size="sm"
                variant="outline"
                disabled={!steps || runIdx >= steps.length - 1}
                onClick={() => { setRunning(false); setRunIdx((i) => (steps ? Math.min(i + 1, steps.length - 1) : i)) }}
              >
                <SkipForward className="h-3.5 w-3.5" /> Step
              </Button>
              <Button size="sm" variant="outline" disabled={!steps} onClick={() => { setRunning(false); setRunIdx(0) }}>
                <RotateCcw className="h-3.5 w-3.5" /> Reset
              </Button>
              <span className="font-mono text-[11px] text-muted-foreground">accepted length ≤ 40</span>
            </div>

            {/* tape */}
            <div className="mt-3 flex min-h-11 flex-wrap items-center gap-1.5 rounded-lg bg-muted/40 p-2.5">
              {input.split('').map((c, i) => {
                const consumed = current ? i < current.consumed : false
                const active = current ? i === current.consumed : false
                const err = current?.stuck && i === current.consumed
                return (
                  <motion.span
                    key={i}
                    layout
                    className={
                      'flex h-7 w-7 items-center justify-center rounded-md border font-mono text-sm transition-colors ' +
                      (err
                        ? 'border-rose-500/60 bg-rose-500/15 text-rose-400'
                        : active
                          ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300'
                          : consumed
                            ? 'border-border bg-muted text-zinc-600 line-through'
                            : 'border-border bg-card text-foreground')
                    }
                  >
                    {c}
                  </motion.span>
                )
              })}
              {input.length === 0 && <span className="px-1 font-mono text-xs text-muted-foreground">empty string ε — accepted iff s₀ ∈ F</span>}
            </div>

            {/* result */}
            <AnimatePresence>
              {finished && lastStep && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-3">
                  <div
                    className={
                      'flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold ' +
                      (accepted ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' : 'border-rose-500/40 bg-rose-500/10 text-rose-400')
                    }
                  >
                    {accepted ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                    {accepted ? 'ACCEPTED — ended in accepting state' : lastStep.stuck ? `REJECTED — no transition on '${lastStep.char}' from ${sub(lastStep.state)}` : 'REJECTED — ended in non-accepting state'}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-1">
                    {pathStates.map((sid, i) => (
                      <span key={i} className="flex items-center gap-1">
                        {i > 0 && <span className="text-zinc-600">→</span>}
                        <span
                          className={
                            'rounded-md border px-2 py-0.5 font-mono text-xs ' +
                            (i === pathStates.length - 1
                              ? (stateById.get(sid)?.accepting ?? false)
                                ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                                : 'border-rose-500/50 bg-rose-500/10 text-rose-300'
                              : 'border-border bg-muted/40 text-zinc-400')
                          }
                        >
                          {sub(stateById.get(sid)?.name ?? sid)}
                        </span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* transitions editor */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <ListOrdered className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Transition function δ</span>
            </div>
            <div className="max-h-64 overflow-auto p-3">
              <div className="space-y-1.5">
                <AnimatePresence initial={false}>
                  {fsm.transitions.map((t) => (
                    <motion.div
                      key={t.id}
                      layout
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-1.5 font-mono text-xs text-foreground"
                    >
                      <span className="flex-1">
                        {sub(t.from)} —[{t.input}]→ {sub(t.to)}
                      </span>
                      <button
                        onClick={() => removeTransition(t.id)}
                        className="rounded p-0.5 text-zinc-500 transition-colors hover:bg-rose-500/10 hover:text-rose-400"
                        aria-label={`delete transition ${t.id}`}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {fsm.transitions.length === 0 && <p className="px-1 py-2 text-xs text-muted-foreground">No transitions — the machine is stuck on every input.</p>}
              </div>
            </div>
            <div className="border-t border-border p-3">
              <div className="flex flex-wrap items-center gap-2">
                <div className="w-[86px]">
                  <Select value={addFrom} onValueChange={setAddFrom}>
                    <SelectTrigger size="sm" className="h-8 bg-card font-mono text-xs">
                      <SelectValue placeholder="from" />
                    </SelectTrigger>
                    <SelectContent>
                      {fsm.states.map((s) => (
                        <SelectItem key={s.id} value={s.id}>
                          {sub(s.name)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Input
                  value={addChar}
                  onChange={(e) => setAddChar(e.target.value.slice(0, 1))}
                  placeholder="σ"
                  className="h-8 w-12 rounded-md border border-border bg-card text-center font-mono text-sm"
                />
                <div className="w-[86px]">
                  <Select value={addTo} onValueChange={setAddTo}>
                    <SelectTrigger size="sm" className="h-8 bg-card font-mono text-xs">
                      <SelectValue placeholder="to" />
                    </SelectTrigger>
                    <SelectContent>
                      {fsm.states.map((s) => (
                        <SelectItem key={s.id} value={s.id}>
                          {sub(s.name)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button size="sm" className="h-8 bg-emerald-600 hover:bg-emerald-500" onClick={addTransition}>
                  <Plus className="h-3.5 w-3.5" />
                </Button>
              </div>
              {msg && <p className="mt-2 text-xs text-amber-400">{msg}</p>}
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                σ must be in I = {'{ ' + fsm.alphabet.join(', ') + ' }'}. A DFA has exactly one transition per (state, symbol).
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 text-xs leading-relaxed text-muted-foreground">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-foreground">How acceptance works</div>
            <p>
              The machine reads symbols left to right. Each symbol drives δ(s, σ) → next state; after the last symbol the run{' '}
              <span className="text-emerald-400">accepts</span> iff it rests in F. Change anything — states, accepting flags, transitions — and the
              formal definition above updates instantly.
            </p>
          </div>
        </div>
      </div>

      {/* try this */}
      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> load &ldquo;Count of 1s mod 3&rdquo; and run <span className="font-mono">1011</span>{' '}
          (four 1s → back to r₀, accepted). Then edit the machine: make r₁ accepting instead and re-run — you now detect counts ≡ 1 mod 3. For a
          real challenge, delete the q1—[a]→q1 self-loop in the &ldquo;ends in ab&rdquo; preset and watch which strings break.
        </p>
      </div>
    </div>
  )
}
