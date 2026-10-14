'use client'

import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CheckCircle2,
  Info,
  Landmark,
  Lightbulb,
  Pause,
  Play,
  RotateCcw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  StepForward,
  XCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Model — Silberschatz 10th ed., §8.6.3 (Banker's Algorithm)         */
/* ------------------------------------------------------------------ */

type Row = number[] // length 3: resources A, B, C
type Matrix = Row[] // 5 × 3

interface BankState {
  alloc: Matrix
  max: Matrix
  avail: Row
}

type LogKind = 'info' | 'pick' | 'ok' | 'bad'
interface LogEntry {
  kind: LogKind
  text: string
}

interface RunState {
  phase: 'picking' | 'safe' | 'unsafe'
  work: Row
  finished: boolean[]
  seq: number[]
  alloc: Matrix // snapshot used by this run
  need: Matrix
  log: LogEntry[]
  lastPick: number | null
  stuckNote: string
}

type ReqStatus = 'error-need' | 'wait-avail' | 'simulating' | 'granted' | 'denied-unsafe'

interface RequestEval {
  proc: number
  req: Row
  okNeed: boolean
  okAvail: boolean
  status: ReqStatus
  snapshot: BankState // state before the pretend grant (for rollback)
}

const N_PROC = 5
const RES_NAME = ['A', 'B', 'C']
const pname = (i: number) => `P${i}`

/* Classic textbook snapshot (Silberschatz 10th ed. §8.6.3, Fig. 8.x):
   resource totals A=10, B=5, C=7. */
const CLASSIC: BankState = {
  alloc: [
    [0, 1, 0],
    [2, 0, 0],
    [3, 0, 2],
    [2, 1, 1],
    [0, 0, 2],
  ],
  max: [
    [7, 5, 3],
    [3, 2, 2],
    [9, 0, 2],
    [2, 2, 2],
    [4, 3, 3],
  ],
  avail: [3, 3, 2],
}

/* The book's unsafe-request scenario: P1's (1,0,2) has already been granted
   (Allocation P1 = 3,0,2 · Available = 2,3,0). Now P0 requesting (0,2,0)
   passes both availability checks but leaves an UNSAFE state. */
const UNSAFE_REQ: BankState = {
  alloc: [
    [0, 1, 0],
    [3, 0, 2],
    [3, 0, 2],
    [2, 1, 1],
    [0, 0, 2],
  ],
  max: CLASSIC.max,
  avail: [2, 3, 0],
}

/* Deliberately deadlocked allocation: every process holds resources and
   needs more, while Available = (0,0,0) — the safety run finds no candidate. */
const DEADLOCKED: BankState = {
  alloc: [
    [5, 3, 2],
    [2, 1, 2],
    [2, 0, 2],
    [1, 1, 1],
    [0, 0, 0],
  ],
  max: CLASSIC.max,
  avail: [0, 0, 0],
}

const PRESETS: Array<{
  key: string
  label: string
  state: BankState
  request: { proc: number; req: Row }
}> = [
  {
    key: 'classic',
    label: 'Classic snapshot (safe)',
    state: CLASSIC,
    request: { proc: 1, req: [1, 0, 2] }, // the book's grantable request
  },
  {
    key: 'unsafe',
    label: "Book's unsafe request",
    state: UNSAFE_REQ,
    request: { proc: 0, req: [0, 2, 0] }, // passes both checks → unsafe
  },
  {
    key: 'deadlock',
    label: 'Deadlocked allocation',
    state: DEADLOCKED,
    request: { proc: 4, req: [1, 0, 0] },
  },
]

/* ------------------------------------------------------------------ */
/*  Pure helpers                                                       */
/* ------------------------------------------------------------------ */

function cloneBank(b: BankState): BankState {
  return { alloc: b.alloc.map((r) => [...r]), max: b.max.map((r) => [...r]), avail: [...b.avail] }
}

function vecLe(a: Row, b: Row): boolean {
  return a.every((v, j) => v <= b[j])
}

function vecAdd(a: Row, b: Row): Row {
  return a.map((v, j) => v + b[j])
}

function fmt(v: Row): string {
  return `(${v.join(', ')})`
}

function needMatrix(b: BankState): Matrix {
  return b.max.map((row, i) => row.map((m, j) => Math.max(0, m - b.alloc[i][j])))
}

function clampDigit(raw: string): number {
  const n = Number.parseInt(raw, 10)
  if (Number.isNaN(n)) return 0
  return Math.max(0, Math.min(9, n))
}

function candidatesOf(r: RunState): number[] {
  const out: number[] = []
  for (let i = 0; i < N_PROC; i++) {
    if (!r.finished[i] && vecLe(r.need[i], r.work)) out.push(i)
  }
  return out
}

function roundLine(round: number, cands: number[]): LogEntry {
  return {
    kind: 'info',
    text:
      cands.length > 0
        ? `Round ${round} candidates (Need ≤ Work): ${cands.map(pname).join(', ')}.`
        : `Round ${round}: no unfinished process has Need ≤ Work.`,
  }
}

function beginRun(b: BankState): RunState {
  const need = needMatrix(b)
  const base: RunState = {
    phase: 'picking',
    work: [...b.avail],
    finished: Array(N_PROC).fill(false),
    seq: [],
    alloc: b.alloc.map((r) => [...r]),
    need,
    log: [
      {
        kind: 'info',
        text: `Initialize: Work = Available = ${fmt(b.avail)}; Finish[i] = false for all i.`,
      },
    ],
    lastPick: null,
    stuckNote: '',
  }
  const cands = candidatesOf(base)
  if (cands.length > 0) {
    base.log.push(roundLine(1, cands))
    return base
  }
  return conclude(base)
}

function conclude(r: RunState): RunState {
  if (r.finished.every(Boolean)) {
    return {
      ...r,
      phase: 'safe',
      log: [
        ...r.log,
        {
          kind: 'ok',
          text: `All processes finished — the state is SAFE. Safe sequence ⟨${r.seq.map(pname).join(', ')}⟩.`,
        },
      ],
    }
  }
  const stuckParts: string[] = []
  for (let i = 0; i < N_PROC; i++) {
    if (!r.finished[i]) stuckParts.push(`${pname(i)} needs ${fmt(r.need[i])} but Work = ${fmt(r.work)}`)
  }
  const stuckText = stuckParts.join(' · ')
  return {
    ...r,
    phase: 'unsafe',
    stuckNote: stuckText,
    log: [
      ...r.log,
      {
        kind: 'bad',
        text: `No unfinished process has Need ≤ Work — the state is UNSAFE (deadlock possible). Stuck: ${stuckText}.`,
      },
    ],
  }
}

/* ------------------------------------------------------------------ */
/*  Reduced-motion hook                                                */
/* ------------------------------------------------------------------ */

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduced
}

/* ------------------------------------------------------------------ */
/*  Matrix grid (editable or read-only)                                */
/* ------------------------------------------------------------------ */

function MatrixGrid({
  title,
  accent,
  rows,
  editable,
  onSet,
  disabled,
  highlight,
}: {
  title: string
  accent: 'teal' | 'amber' | 'emerald'
  rows: Matrix
  editable?: boolean
  onSet?: (i: number, j: number, raw: string) => void
  disabled?: boolean
  highlight?: boolean[]
}) {
  const headCls =
    accent === 'teal'
      ? 'text-teal-300'
      : accent === 'amber'
        ? 'text-amber-300'
        : 'text-emerald-300'
  const headBorder =
    accent === 'teal'
      ? 'border-teal-500/50'
      : accent === 'amber'
        ? 'border-amber-500/50'
        : 'border-emerald-500/50'
  return (
    <div className="shrink-0">
      {title !== '' && (
        <div className={`mb-1.5 h-9 border-t-2 ${headBorder} pt-1 text-center text-[10px] font-semibold tracking-widest uppercase ${headCls}`}>
          {title}
        </div>
      )}
      <div className="grid" style={{ gridTemplateColumns: '32px repeat(3, 38px)' }}>
        <span />
        {RES_NAME.map((r) => (
          <span key={r} className="pb-1 text-center font-mono text-[11px] font-bold text-muted-foreground">
            {r}
          </span>
        ))}
        {rows.map((row, i) => (
          <Fragment key={i}>
            <span
              className={`flex h-8 items-center justify-end pr-1.5 font-mono text-xs ${
                highlight && highlight[i] ? 'font-bold text-emerald-300' : 'text-muted-foreground'
              }`}
            >
              {pname(i)}
            </span>
            {row.map((cell, j) =>
              editable ? (
                <input
                  key={j}
                  type="number"
                  min={0}
                  max={9}
                  step={1}
                  inputMode="numeric"
                  value={cell}
                  disabled={disabled}
                  onChange={(e) => onSet?.(i, j, e.target.value)}
                  aria-label={`${title} for P${i}, resource ${RES_NAME[j]}`}
                  className={`h-8 w-[38px] rounded-md border bg-background text-center font-mono text-xs text-foreground outline-none transition-colors focus-visible:border-emerald-500/70 focus-visible:ring-2 focus-visible:ring-emerald-500/40 disabled:opacity-50 [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${
                    highlight && highlight[i] ? 'border-emerald-500/60' : 'border-border'
                  }`}
                />
              ) : (
                <span
                  key={j}
                  className={`flex h-8 w-[38px] items-center justify-center rounded-md border font-mono text-xs transition-colors ${
                    highlight && highlight[i]
                      ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-200'
                      : 'border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-200/90'
                  }`}
                >
                  {cell}
                </span>
              ),
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function BankersAlgorithm() {
  const [preset, setPreset] = useState('classic')
  const [bank, setBank] = useState<BankState>(() => cloneBank(CLASSIC))
  const [run, setRun] = useState<RunState | null>(null)
  const [playing, setPlaying] = useState(false)
  const [auto, setAuto] = useState(true)
  const [speed, setSpeed] = useState(3)
  const [reqProc, setReqProc] = useState(1)
  const [reqVec, setReqVec] = useState<Row>([1, 0, 2])
  const [reqEval, setReqEval] = useState<RequestEval | null>(null)
  const logRef = useRef<HTMLDivElement | null>(null)
  const reduced = usePrefersReducedMotion()

  const need = useMemo(() => needMatrix(bank), [bank])
  const totals = useMemo(
    () => bank.avail.map((v, j) => v + bank.alloc.reduce((a, row) => a + row[j], 0)),
    [bank],
  )

  const simulating = reqEval?.status === 'simulating'
  const lockInputs = (run !== null && run.phase === 'picking') || simulating
  const candidates = run && run.phase === 'picking' ? candidatesOf(run) : []

  /* ---------------- editing ---------------- */

  const clearRun = useCallback(() => {
    setRun(null)
    setPlaying(false)
    setReqEval(null)
  }, [])

  const setCell = useCallback(
    (which: 'alloc' | 'max', i: number, j: number, raw: string) => {
      const v = clampDigit(raw)
      clearRun()
      setBank((b) => ({
        ...b,
        [which]: b[which].map((row, ri) => (ri === i ? row.map((c, ci) => (ci === j ? v : c)) : row)),
      }))
    },
    [clearRun],
  )

  const setAvailCell = useCallback(
    (j: number, raw: string) => {
      const v = clampDigit(raw)
      clearRun()
      setBank((b) => ({ ...b, avail: b.avail.map((c, ci) => (ci === j ? v : c)) }))
    },
    [clearRun],
  )

  const applyPreset = useCallback((key: string) => {
    const p = PRESETS.find((x) => x.key === key)
    if (!p) return
    setRun(null)
    setPlaying(false)
    setReqEval(null)
    setBank(cloneBank(p.state))
    setPreset(key)
    setReqProc(p.request.proc)
    setReqVec([...p.request.req])
  }, [])

  /* ---------------- safety algorithm ---------------- */

  const pick = useCallback(
    (i: number) => {
      if (!run || run.phase !== 'picking' || run.finished[i]) return
      if (!vecLe(run.need[i], run.work)) return
      const work = vecAdd(run.work, run.alloc[i])
      const finished = [...run.finished]
      finished[i] = true
      const seq = [...run.seq, i]
      const next: RunState = {
        ...run,
        work,
        finished,
        seq,
        log: [
          ...run.log,
          {
            kind: 'pick',
            text: `${pname(i)} finishes: Need ${fmt(run.need[i])} ≤ Work ${fmt(run.work)} → Work = ${fmt(
              run.work,
            )} + ${fmt(run.alloc[i])} = ${fmt(work)}; Finish[${pname(i)}] = true.`,
          },
        ],
        lastPick: i,
      }
      const cands = candidatesOf(next)
      if (cands.length > 0) {
        next.log.push(roundLine(seq.length + 1, cands))
        setRun(next)
        return
      }
      const fin = conclude(next)
      setRun(fin)
      setPlaying(false)
      // resolve a pending request evaluation once the simulated run concludes
      if (reqEval && reqEval.status === 'simulating') {
        if (fin.phase === 'safe') {
          setReqEval({ ...reqEval, status: 'granted' })
        } else {
          setBank(cloneBank(reqEval.snapshot)) // roll back the pretend grant
          setReqEval({ ...reqEval, status: 'denied-unsafe' })
        }
      }
    },
    [run, reqEval],
  )

  const startRun = useCallback(() => {
    let base = bank
    if (reqEval && reqEval.status === 'simulating') {
      base = reqEval.snapshot
      setBank(cloneBank(reqEval.snapshot))
    }
    setReqEval(null)
    const r = beginRun(base)
    setRun(r)
    setPlaying(auto && r.phase === 'picking')
  }, [bank, reqEval, auto])

  const resetRun = useCallback(() => {
    if (reqEval && reqEval.status === 'simulating') {
      setBank(cloneBank(reqEval.snapshot))
    }
    setReqEval(null)
    setRun(null)
    setPlaying(false)
  }, [reqEval])

  const stepOnce = useCallback(() => {
    if (!run || run.phase !== 'picking' || candidates.length === 0) return
    pick(candidates[0])
  }, [run, candidates, pick])

  // auto mode: advance to the lowest-index candidate
  useEffect(() => {
    if (!run || run.phase !== 'picking' || !auto || !playing) return
    const cands = candidatesOf(run)
    if (cands.length === 0) return
    const t = setTimeout(() => pick(cands[0]), Math.round(1500 / speed))
    return () => clearTimeout(t)
  }, [run, auto, playing, speed, pick])

  // keep the run log scrolled to the latest entry
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight })
  }, [run?.log.length])

  /* ---------------- resource-request algorithm ---------------- */

  const evaluateRequest = useCallback(() => {
    let base = bank
    if (reqEval && reqEval.status === 'simulating') {
      base = reqEval.snapshot
      setBank(cloneBank(reqEval.snapshot))
    }
    const req = [...reqVec]
    const i = reqProc
    const needM = needMatrix(base)
    const okNeed = vecLe(req, needM[i])
    const okAvail = vecLe(req, base.avail)
    if (!okNeed || !okAvail) {
      setRun(null)
      setPlaying(false)
      setReqEval({
        proc: i,
        req,
        okNeed,
        okAvail,
        status: okNeed ? 'wait-avail' : 'error-need',
        snapshot: cloneBank(base),
      })
      return
    }
    // pretend the grant happened, then run the safety algorithm on the result
    const grantedState = cloneBank(base)
    grantedState.avail = grantedState.avail.map((v, j) => v - req[j])
    grantedState.alloc[i] = grantedState.alloc[i].map((v, j) => v + req[j])
    const re: RequestEval = { proc: i, req, okNeed, okAvail, status: 'simulating', snapshot: cloneBank(base) }
    const r = beginRun(grantedState)
    if (r.phase === 'unsafe') {
      // the grant leads straight to an unsafe state — never even pretend-commit it
      setReqEval({ ...re, status: 'denied-unsafe' })
    } else {
      setBank(grantedState)
      setReqEval(re)
    }
    setRun(r)
    setPlaying(auto && r.phase === 'picking')
  }, [bank, reqProc, reqVec, reqEval, auto])

  const setReqCell = useCallback(
    (j: number, raw: string) => {
      const v = clampDigit(raw)
      setReqEval(null)
      setReqVec((r) => r.map((c, ci) => (ci === j ? v : c)))
    },
    [],
  )

  /* ---------------- derived display bits ---------------- */

  const needHighlight = useMemo(() => {
    if (!run || run.phase !== 'picking') return undefined
    return run.need.map((_, i) => !run.finished[i] && vecLe(run.need[i], run.work))
  }, [run])

  const activePreset = PRESETS.find((p) => p.key === preset)

  /* ---------------- render ---------------- */

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
            <Landmark className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-foreground">Banker&apos;s Algorithm</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Deadlock avoidance (Silberschatz §8.6.3): decide whether a state is safe — and whether a request can
              be granted — before risking a deadlock.
            </p>
          </div>
        </div>
        <div className="min-w-[190px]">
          <Select value={preset} onValueChange={applyPreset}>
            <SelectTrigger size="sm" className="h-9 bg-card text-xs" aria-label="Load preset">
              <SelectValue placeholder="Load preset" />
            </SelectTrigger>
            <SelectContent>
              {PRESETS.map((p) => (
                <SelectItem key={p.key} value={p.key}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="flex min-w-0 flex-col gap-4">
          {/* ---------------- matrices ---------------- */}
          <div className="rounded-xl border border-border bg-background/50 p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                System snapshot — editable (0–9)
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                totals: {RES_NAME.map((r, j) => `${r}=${totals[j]}`).join(' · ')}
              </p>
            </div>
            <div className="mt-2 overflow-x-auto pb-1">
              <div className="flex min-w-max items-start gap-4">
                <MatrixGrid
                  title="Allocation"
                  accent="teal"
                  rows={bank.alloc}
                  editable
                  onSet={(i, j, raw) => setCell('alloc', i, j, raw)}
                  disabled={lockInputs}
                />
                <MatrixGrid
                  title="Max"
                  accent="amber"
                  rows={bank.max}
                  editable
                  onSet={(i, j, raw) => setCell('max', i, j, raw)}
                  disabled={lockInputs}
                />
                {/* Available vector */}
                <div className="shrink-0">
                  <div className="mb-1.5 h-9 border-t-2 border-emerald-500/50 pt-1 text-center text-[10px] font-semibold tracking-widest text-emerald-300 uppercase">
                    Available
                  </div>
                  <div className="grid" style={{ gridTemplateColumns: '32px repeat(3, 38px)' }}>
                    <span />
                    {RES_NAME.map((r) => (
                      <span key={r} className="pb-1 text-center font-mono text-[11px] font-bold text-muted-foreground">
                        {r}
                      </span>
                    ))}
                    <span className="flex h-8 items-center justify-end pr-1.5 font-mono text-xs text-muted-foreground">
                      free
                    </span>
                    {bank.avail.map((cell, j) => (
                      <input
                        key={j}
                        type="number"
                        min={0}
                        max={9}
                        step={1}
                        inputMode="numeric"
                        value={cell}
                        disabled={lockInputs}
                        onChange={(e) => setAvailCell(j, e.target.value)}
                        aria-label={`Available units of resource ${RES_NAME[j]}`}
                        className="h-8 w-[38px] rounded-md border border-border bg-background text-center font-mono text-xs text-foreground outline-none transition-colors focus-visible:border-emerald-500/70 focus-visible:ring-2 focus-visible:ring-emerald-500/40 disabled:opacity-50 [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    ))}
                  </div>
                </div>
                {/* Need — computed */}
                <div className="shrink-0">
                  <div className="mb-1.5 flex h-9 items-start justify-center border-t-2 border-emerald-500/50 pt-1">
                    <TeX tex="\text{Need} = \text{Max} - \text{Allocation}" className="text-[13px]" />
                  </div>
                  <MatrixGrid title="" accent="emerald" rows={need} highlight={needHighlight} />
                </div>
              </div>
            </div>
            {simulating && (
              <p className="mt-1 flex items-center gap-1.5 text-xs text-amber-300">
                <Info className="h-3.5 w-3.5" />
                Showing the <span className="font-semibold">simulated</span> state after the pretend grant — not yet
                permanent.
              </p>
            )}
          </div>

          {/* ---------------- safety algorithm ---------------- */}
          <div className="rounded-xl border border-border bg-background/50 p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                Safety algorithm (§8.6.3.1)
              </p>
              <label className="flex cursor-pointer items-center gap-1.5 text-xs text-muted-foreground select-none">
                <input
                  type="checkbox"
                  checked={auto}
                  onChange={(e) => setAuto(e.target.checked)}
                  className="h-3.5 w-3.5 accent-emerald-500"
                />
                auto mode (lowest index first)
              </label>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Button size="sm" onClick={startRun} className="min-w-[130px]">
                <Play className="mr-1 h-4 w-4" />
                {run ? 'Restart run' : 'Run safety algorithm'}
              </Button>
              {auto && (
                <Button
                  size="sm"
                  variant={playing ? 'secondary' : 'outline'}
                  onClick={() => setPlaying((p) => !p)}
                  disabled={!run || run.phase !== 'picking'}
                  className="min-w-[84px]"
                >
                  {playing ? <Pause className="mr-1 h-4 w-4" /> : <Play className="mr-1 h-4 w-4" />}
                  {playing ? 'Pause' : 'Play'}
                </Button>
              )}
              <Button
                size="sm"
                variant="outline"
                onClick={stepOnce}
                disabled={!run || run.phase !== 'picking' || candidates.length === 0}
                aria-label="Pick the lowest-index candidate"
              >
                <StepForward className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={resetRun}
                disabled={!run && !reqEval}
                aria-label="Reset safety run"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <div className="flex min-w-[150px] flex-1 items-center gap-2">
                <span className="text-xs text-muted-foreground">speed</span>
                <Slider
                  min={1}
                  max={5}
                  step={1}
                  value={[speed]}
                  onValueChange={(v) => setSpeed(Math.min(5, Math.max(1, v[0] ?? 3)))}
                  className="flex-1"
                  aria-label="Safety run speed"
                />
              </div>
            </div>

            {/* Work vector + finish flags */}
            <div className="mt-3 grid gap-3 sm:grid-cols-[auto_1fr]">
              <div>
                <p className="mb-1 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                  Work vector
                </p>
                {run ? (
                  <div className="flex gap-1.5">
                    {run.work.map((v, j) => (
                      <motion.div
                        key={`${j}-${v}`}
                        initial={reduced ? false : { scale: 1.35, opacity: 0.4 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        className="flex h-9 w-11 flex-col items-center justify-center rounded-lg border border-emerald-500/40 bg-emerald-500/10 font-mono"
                      >
                        <span className="text-[9px] leading-none text-emerald-400/70">{RES_NAME[j]}</span>
                        <span className="text-sm font-bold text-emerald-300">{v}</span>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex gap-1.5">
                    {bank.avail.map((v, j) => (
                      <div
                        key={j}
                        className="flex h-9 w-11 flex-col items-center justify-center rounded-lg border border-border bg-muted/30 font-mono"
                      >
                        <span className="text-[9px] leading-none text-muted-foreground/70">{RES_NAME[j]}</span>
                        <span className="text-sm font-bold text-muted-foreground">{v}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <p className="mb-1 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                  Processes — click a candidate to let it finish
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {Array.from({ length: N_PROC }, (_, i) => {
                    if (!run) {
                      return (
                        <span
                          key={i}
                          title={`Need ${fmt(need[i])}`}
                          className="rounded-md border border-border bg-muted/30 px-2 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {pname(i)}
                        </span>
                      )
                    }
                    if (run.finished[i]) {
                      return (
                        <span
                          key={i}
                          className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 font-mono text-xs font-semibold text-emerald-400"
                        >
                          {pname(i)} ✓
                        </span>
                      )
                    }
                    const isCand = candidates.includes(i)
                    if (isCand) {
                      return (
                        <button
                          key={i}
                          onClick={() => pick(i)}
                          title={`Need ${fmt(run.need[i])} ≤ Work ${fmt(run.work)}`}
                          className={`rounded-md border px-2 py-1 font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 ${
                            run.lastPick === i
                              ? 'border-emerald-400 bg-emerald-500/20 text-emerald-200'
                              : 'border-amber-500/50 bg-amber-500/10 text-amber-300 hover:bg-emerald-500/15 hover:text-emerald-200'
                          } ${reduced ? '' : 'animate-pulse'}`}
                        >
                          choose {pname(i)}
                        </button>
                      )
                    }
                    return (
                      <span
                        key={i}
                        title={`Need ${fmt(run.need[i])} ≰ Work ${fmt(run.work)}`}
                        className="rounded-md border border-border bg-muted/30 px-2 py-1 font-mono text-xs text-muted-foreground/60"
                      >
                        {pname(i)}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* safe sequence chip trail */}
            <div className="mt-3">
              <p className="mb-1 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                Safe sequence
              </p>
              <div className="flex min-h-[30px] flex-wrap items-center gap-1 font-mono text-xs">
                <span className="text-muted-foreground">⟨</span>
                {run && run.seq.length > 0 ? (
                  run.seq.map((p, k) => (
                    <span key={`${k}-${p}`} className="flex items-center gap-1">
                      {k > 0 && <span className="text-muted-foreground/50">→</span>}
                      <motion.span
                        initial={reduced ? false : { scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-md border border-emerald-500/50 bg-emerald-500/15 px-1.5 py-0.5 font-semibold text-emerald-300"
                      >
                        {pname(p)}
                      </motion.span>
                    </span>
                  ))
                ) : (
                  <span className="px-1 text-muted-foreground/60">
                    {run ? 'picking…' : 'run the algorithm to build one'}
                  </span>
                )}
                {run && run.phase === 'picking' && (
                  <span className="px-1 text-amber-400/70">…</span>
                )}
                <span className="text-muted-foreground">⟩</span>
              </div>
            </div>

            {/* verdict */}
            <div aria-live="polite" className="mt-3">
              {run && run.phase === 'safe' && (
                <div className="flex items-start gap-2.5 rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-3 py-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <p className="text-xs leading-relaxed text-emerald-200">
                    <span className="font-bold">SAFE STATE.</span> Every process can finish in the order{' '}
                    <span className="font-mono font-semibold">⟨{run.seq.map(pname).join(', ')}⟩</span> — the system can
                    satisfy every maximum claim without deadlocking.
                  </p>
                </div>
              )}
              {run && run.phase === 'unsafe' && (
                <div className="rounded-lg border border-rose-500/50 bg-rose-500/10 px-3 py-2">
                  <div className="flex items-start gap-2.5">
                    <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                    <p className="text-xs leading-relaxed text-rose-200">
                      <span className="font-bold">UNSAFE — deadlock possible.</span> No unfinished process has Need ≤
                      Work, so none can be guaranteed to finish.
                    </p>
                  </div>
                  <ul className="mt-1.5 space-y-0.5 pl-7 font-mono text-[11px] text-rose-200/80">
                    {run.finished.map((f, i) =>
                      f ? null : (
                        <li key={i}>
                          {pname(i)} needs {fmt(run.need[i])} but Work = {fmt(run.work)}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
              {!run && (
                <p className="rounded-lg border border-dashed border-border px-3 py-2 text-xs text-muted-foreground">
                  Run the safety algorithm to check whether this snapshot is safe.
                </p>
              )}
            </div>
          </div>

          {/* ---------------- resource-request algorithm ---------------- */}
          <div className="rounded-xl border border-border bg-background/50 p-3">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
              Resource-request algorithm (§8.6.3.2)
            </p>
            <div className="mt-2 flex flex-wrap items-end gap-3">
              <div className="min-w-[110px]">
                <label className="mb-1 block text-[11px] text-muted-foreground" htmlFor="req-proc">
                  Process
                </label>
                <Select value={String(reqProc)} onValueChange={(v) => setReqProc(Number(v))}>
                  <SelectTrigger id="req-proc" size="sm" className="h-9 bg-card text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: N_PROC }, (_, i) => (
                      <SelectItem key={i} value={String(i)}>
                        {pname(i)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-1 block text-[11px] text-muted-foreground">Request vector</label>
                <div className="flex gap-1.5">
                  {reqVec.map((v, j) => (
                    <input
                      key={j}
                      type="number"
                      min={0}
                      max={9}
                      step={1}
                      inputMode="numeric"
                      value={v}
                      onChange={(e) => setReqCell(j, e.target.value)}
                      aria-label={`Requested units of resource ${RES_NAME[j]}`}
                      className="h-9 w-[46px] rounded-md border border-border bg-background text-center font-mono text-xs text-amber-200 outline-none transition-colors focus-visible:border-amber-500/70 focus-visible:ring-2 focus-visible:ring-amber-500/40 [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  ))}
                </div>
              </div>
              <Button size="sm" onClick={evaluateRequest}>
                <Scale className="mr-1 h-4 w-4" />
                Evaluate request
              </Button>
            </div>

            {/* two checks */}
            {reqEval && (
              <div className="mt-3 grid gap-1.5">
                <CheckLine
                  ok={reqEval.okNeed}
                  label={<TeX tex="\text{Request}_i \le \text{Need}_i" />}
                  detail={`${fmt(reqEval.req)} ≤ ${fmt(needMatrix(reqEval.snapshot)[reqEval.proc])} for ${pname(
                    reqEval.proc,
                  )}`}
                />
                <CheckLine
                  ok={reqEval.okAvail}
                  label={<TeX tex="\text{Request}_i \le \text{Available}" />}
                  detail={`${fmt(reqEval.req)} ≤ ${fmt(reqEval.snapshot.avail)}`}
                />
              </div>
            )}

            {/* request verdict */}
            <div aria-live="polite" className="mt-3">
              {reqEval?.status === 'error-need' && (
                <Banner tone="rose" icon={<XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />}>
                  <span className="font-bold">Error — request refused.</span> {pname(reqEval.proc)} requested{' '}
                  {fmt(reqEval.req)} but its remaining Need is only{' '}
                  {fmt(needMatrix(reqEval.snapshot)[reqEval.proc])}: a process may never claim more than its declared
                  maximum. Nothing changes.
                </Banner>
              )}
              {reqEval?.status === 'wait-avail' && (
                <Banner tone="amber" icon={<Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />}>
                  <span className="font-bold">Must wait — resources not available.</span> The request is legal, but{' '}
                  {fmt(reqEval.req)} ≰ Available {fmt(reqEval.snapshot.avail)}: {pname(reqEval.proc)} waits until
                  enough units are free. Nothing changes.
                </Banner>
              )}
              {reqEval?.status === 'simulating' && (
                <Banner tone="amber" icon={<Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />}>
                  <span className="font-bold">Both checks passed.</span> Pretending to grant {fmt(reqEval.req)} to{' '}
                  {pname(reqEval.proc)}… watch the safety algorithm decide whether the resulting state is safe.
                </Banner>
              )}
              {reqEval?.status === 'granted' && run && (
                <Banner tone="emerald" icon={<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />}>
                  <span className="font-bold">Request granted.</span> The resulting state is safe — sequence{' '}
                  <span className="font-mono">⟨{run.seq.map(pname).join(', ')}⟩</span>. Available, Allocation and Need
                  have been updated.
                </Banner>
              )}
              {reqEval?.status === 'denied-unsafe' && run && (
                <Banner tone="rose" icon={<ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />}>
                  <span className="font-bold">Denied — {pname(reqEval.proc)} must wait: the state would be unsafe.</span>{' '}
                  Granting {fmt(reqEval.req)} leaves no safe sequence ({run.stuckNote}). The pretend grant has been
                  rolled back — availability alone is not safety.
                </Banner>
              )}
            </div>

            {preset === 'unsafe' && !reqEval && (
              <p className="mt-2 text-xs text-muted-foreground">
                Preset loaded: this is the book&apos;s state <em>after</em> granting P1&apos;s (1,0,2). Press
                &ldquo;Evaluate request&rdquo; to watch P0&apos;s (0,2,0) fail the safety check.
              </p>
            )}
          </div>
        </div>

        {/* ---------------- sidebar ---------------- */}
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-border bg-background/50 p-3">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
              The algorithms (from the book)
            </p>
            <div className="mt-2 space-y-2 text-xs leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">Safety (§8.6.3.1)</p>
              <ol className="list-inside list-decimal space-y-1.5">
                <li>
                  <TeX tex="\text{Work} = \text{Available}" /> and <TeX tex="\text{Finish}[i] = \text{false}" /> for
                  every process.
                </li>
                <li>
                  Find an <span className="font-mono">i</span> with <TeX tex="\text{Finish}[i]=\text{false}" /> and{' '}
                  <TeX tex="\text{Need}_i \le \text{Work}" />. If none exists, go to step 4.
                </li>
                <li>
                  <TeX tex="\text{Work} \leftarrow \text{Work} + \text{Allocation}_i" />, set{' '}
                  <TeX tex="\text{Finish}[i]=\text{true}" />, and return to step 2.
                </li>
                <li>
                  If every <TeX tex="\text{Finish}[i]=\text{true}" />, the state is <span className="font-semibold text-emerald-400">safe</span>{' '}
                  — otherwise it is <span className="font-semibold text-rose-400">unsafe</span>.
                </li>
              </ol>
              <p className="pt-1 font-semibold text-foreground">Request (§8.6.3.2)</p>
              <ol className="list-inside list-decimal space-y-1.5">
                <li>
                  Check <TeX tex="\text{Request}_i \le \text{Need}_i" /> — otherwise raise an error (claim exceeded).
                </li>
                <li>
                  Check <TeX tex="\text{Request}_i \le \text{Available}" /> — otherwise the process must wait.
                </li>
                <li>
                  Pretend to grant, then run the safety algorithm: safe ⇒ grant; unsafe ⇒ roll back and the
                  process waits.
                </li>
              </ol>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background/50">
            <p className="border-b border-border px-3 py-2 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
              Run log
            </p>
            <div ref={logRef} className="max-h-64 overflow-y-auto p-2">
              {run ? (
                run.log.map((l, i) => (
                  <div
                    key={i}
                    className={`mb-1 rounded px-2 py-1 font-mono text-[11px] leading-relaxed ${
                      l.kind === 'pick'
                        ? 'bg-emerald-500/10 text-emerald-300'
                        : l.kind === 'ok'
                          ? 'bg-emerald-500/15 font-semibold text-emerald-300'
                          : l.kind === 'bad'
                            ? 'bg-rose-500/10 text-rose-300'
                            : 'text-muted-foreground'
                    }`}
                  >
                    {l.text}
                  </div>
                ))
              ) : (
                <p className="px-2 py-1 text-xs text-muted-foreground">
                  {activePreset
                    ? 'Run the safety algorithm or evaluate a request to see each step logged here.'
                    : ''}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* footer hint */}
      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          with the classic preset, evaluate P1&apos;s request (1,0,2) — the book grants it because the resulting state
          stays safe. Then load the &ldquo;unsafe request&rdquo; preset: P0 asks for (0,2,0), every box gets ticked,
          the resources are free… and the request is still denied. Safety ≠ availability.
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

function CheckLine({ ok, label, detail }: { ok: boolean; label: React.ReactNode; detail: string }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs ${
        ok ? 'border-emerald-500/40 bg-emerald-500/[0.07]' : 'border-rose-500/40 bg-rose-500/[0.07]'
      }`}
    >
      {ok ? (
        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
      ) : (
        <XCircle className="h-4 w-4 shrink-0 text-rose-400" />
      )}
      <span className="text-foreground">{label}</span>
      <span className="ml-auto font-mono text-[11px] text-muted-foreground">{detail}</span>
    </div>
  )
}

function Banner({ tone, icon, children }: { tone: 'emerald' | 'amber' | 'rose'; icon: React.ReactNode; children: React.ReactNode }) {
  const cls =
    tone === 'emerald'
      ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-200'
      : tone === 'amber'
        ? 'border-amber-500/50 bg-amber-500/10 text-amber-200'
        : 'border-rose-500/50 bg-rose-500/10 text-rose-200'
  return (
    <div className={`flex items-start gap-2.5 rounded-lg border px-3 py-2 text-xs leading-relaxed ${cls}`}>
      {icon}
      <p>{children}</p>
    </div>
  )
}
