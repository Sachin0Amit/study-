'use client'

/**
 * In-Browser Code Judge — runs real JS against real tests, no server.
 * User code executes through `new Function` with a local console collector and
 * a best-effort tick guard injected into every loop body (50M tick limit →
 * "Time limit exceeded"). Completions persist to localStorage and stream
 * evidence into the cognitive twin via /api/twin.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CheckCircle2,
  Circle,
  Eraser,
  Loader2,
  Play,
  RotateCcw,
  Terminal,
  Trophy,
  XCircle,
} from 'lucide-react'
import { RING } from './types'
import { useStudy } from '@/store/useStudy'

/* ------------------------------------------------------------------ */
/*  Challenges                                                         */
/* ------------------------------------------------------------------ */

type Difficulty = 'easy' | 'medium' | 'hard'

interface TestCase {
  desc: string
  args: unknown[]
  expected: unknown
}

interface Challenge {
  id: string
  title: string
  difficulty: Difficulty
  prompt: string
  fn: string
  starter: string
  tests: TestCase[]
}

const CHALLENGES: Challenge[] = [
  {
    id: 'two-sum',
    title: 'Two sum',
    difficulty: 'medium',
    fn: 'twoSum',
    prompt:
      'Given an array of integers `nums` and an integer `target`, return the indices [i, j] with i < j such that nums[i] + nums[j] === target. Exactly one solution exists. A hash map does it in one pass.',
    starter: `// Return [i, j] with i < j such that nums[i] + nums[j] === target
function twoSum(nums, target) {
  // your solution
}`,
    tests: [
      { desc: '[2,7,11,15], target 9', args: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { desc: '[3,2,4], target 6', args: [[3, 2, 4], 6], expected: [1, 2] },
      { desc: '[3,3], target 6', args: [[3, 3], 6], expected: [0, 1] },
      { desc: 'negatives: [-1,-2,-3,-4,-5], target -8', args: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
    ],
  },
  {
    id: 'reverse-words',
    title: 'Reverse words',
    difficulty: 'easy',
    fn: 'reverseWords',
    prompt:
      'Reverse the order of words in a string. Words are separated by one or more spaces; the result must be trimmed and joined with single spaces.',
    starter: `// "the sky is blue" -> "blue is sky the"
function reverseWords(s) {
  // your solution
}`,
    tests: [
      { desc: '"the sky is blue"', args: ['the sky is blue'], expected: 'blue is sky the' },
      { desc: 'extra spaces: "  hello   world  "', args: ['  hello   world  '], expected: 'world hello' },
      { desc: 'single word "a"', args: ['a'], expected: 'a' },
      { desc: 'empty string', args: [''], expected: '' },
    ],
  },
  {
    id: 'stack-with-max',
    title: 'Stack with max',
    difficulty: 'medium',
    fn: 'maxStack',
    prompt:
      'Simulate a stack that also reports its maximum. `ops` is a list of operations:\n`[\'push\', x]` pushes x, `[\'pop\']` removes and returns the top (null when empty), `[\'max\']` returns the current maximum (null when empty), `[\'top\']` returns the top without removing (null when empty).\nReturn an array with the result of every pop / max / top, in order — in O(1) per op if you can.',
    starter: `// ops: ['push', x] | ['pop'] | ['max'] | ['top']
// return the results of every pop / max / top, in order
function maxStack(ops) {
  // your solution
}`,
    tests: [
      {
        desc: 'push 2,1,5 then max, pop, max',
        args: [[['push', 2], ['push', 1], ['push', 5], ['max'], ['pop'], ['max']]],
        expected: [5, 5, 2],
      },
      {
        desc: 'max tracks new peaks',
        args: [[['push', 1], ['max'], ['push', 3], ['max'], ['pop'], ['max']]],
        expected: [1, 3, 3, 1],
      },
      { desc: 'empty stack returns null', args: [[['pop'], ['max'], ['top']]], expected: [null, null, null] },
      {
        desc: 'top peeks without popping',
        args: [[['push', 7], ['top'], ['push', 9], ['top'], ['max']]],
        expected: [7, 9, 9],
      },
    ],
  },
  {
    id: 'valid-brackets',
    title: 'Valid brackets',
    difficulty: 'easy',
    fn: 'isValid',
    prompt:
      'Given a string containing the characters ( ) [ ] { } and possibly spaces, return true if every bracket is matched and correctly nested, false otherwise.',
    starter: `// "([)]" -> false, "{[()]}" -> true
function isValid(s) {
  // your solution
}`,
    tests: [
      { desc: '"()"', args: ['()'], expected: true },
      { desc: '"()[]{}"', args: ['()[]{}'], expected: true },
      { desc: '"(]" mismatch', args: ['(]'], expected: false },
      { desc: '"([)]" interleaved', args: ['([)]'], expected: false },
      { desc: '"{[]}" nested', args: ['{[]}'], expected: true },
      { desc: 'empty string', args: [''], expected: true },
    ],
  },
  {
    id: 'fib-memo',
    title: 'Fibonacci, fast',
    difficulty: 'easy',
    fn: 'fib',
    prompt:
      'fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2). Return fib(n) for n up to 40 — naive recursion recomputes exponentially; iterate or memoize.',
    starter: `// fib(0)=0, fib(1)=1 — make it fast for n=40
function fib(n) {
  // your solution
}`,
    tests: [
      { desc: 'fib(0)', args: [0], expected: 0 },
      { desc: 'fib(1)', args: [1], expected: 1 },
      { desc: 'fib(10)', args: [10], expected: 55 },
      { desc: 'fib(25)', args: [25], expected: 75025 },
      { desc: 'fib(40) — needs speed', args: [40], expected: 102334155 },
    ],
  },
  {
    id: 'matrix-transpose',
    title: 'Matrix transpose',
    difficulty: 'easy',
    fn: 'transpose',
    prompt:
      'Given a rectangular matrix as an array of rows, return its transpose (rows become columns). Do not mutate the input.',
    starter: `// [[1,2,3],[4,5,6]] -> [[1,4],[2,5],[3,6]]
function transpose(matrix) {
  // your solution
}`,
    tests: [
      { desc: '2×3', args: [[[1, 2, 3], [4, 5, 6]]], expected: [[1, 4], [2, 5], [3, 6]] },
      { desc: '3×1 column', args: [[[1], [2], [3]]], expected: [[1, 2, 3]] },
      { desc: '2×2', args: [[[1, 2], [3, 4]]], expected: [[1, 3], [2, 4]] },
      { desc: '1×1', args: [[[5]]], expected: [[5]] },
    ],
  },
  {
    id: 'debounce-sim',
    title: 'Debounce simulation',
    difficulty: 'hard',
    fn: 'debounceSim',
    prompt:
      'Simulate a debounced function without timers. `calls` is an array of { t, arg } events sorted by time t; `wait` is the debounce window in ms. A call at time T fires at T + wait iff no other call occurs in the window (T, T + wait]. Return the args of the calls that fire, in firing order.',
    starter: `// calls: [{t: 0, arg: 'a'}, {t: 100, arg: 'b'}], wait: 100
// 'a' is cancelled by 'b' (window (0, 100] contains 100)
function debounceSim(calls, wait) {
  // your solution — pure logic, no setTimeout
}`,
    tests: [
      {
        desc: 'a@0,b@100,c@250 / wait 100',
        args: [[{ t: 0, arg: 'a' }, { t: 100, arg: 'b' }, { t: 250, arg: 'c' }], 100],
        expected: ['b', 'c'],
      },
      {
        desc: 'tight cluster x@0,y@50,z@90 / wait 40',
        args: [[{ t: 0, arg: 'x' }, { t: 50, arg: 'y' }, { t: 90, arg: 'z' }], 40],
        expected: ['x', 'z'],
      },
      { desc: 'single call always fires', args: [[{ t: 0, arg: 'only' }], 100], expected: ['only'] },
      {
        desc: 'cascade a@0,b@99,c@198 / wait 100',
        args: [[{ t: 0, arg: 'a' }, { t: 99, arg: 'b' }, { t: 198, arg: 'c' }], 100],
        expected: ['c'],
      },
    ],
  },
  {
    id: 'binary-search',
    title: 'Binary search',
    difficulty: 'easy',
    fn: 'bsearch',
    prompt:
      'Given a sorted (ascending) array and a value, return the index of the value, or -1 if it is absent. Aim for O(log n) — that is the entire point.',
    starter: `// sorted arr, return index of x or -1
function bsearch(arr, x) {
  // your solution
}`,
    tests: [
      { desc: 'middle hit', args: [[1, 3, 5, 7, 9, 11], 7], expected: 3 },
      { desc: 'first element', args: [[1, 3, 5, 7, 9, 11], 1], expected: 0 },
      { desc: 'last element', args: [[1, 3, 5, 7, 9, 11], 11], expected: 5 },
      { desc: 'absent value', args: [[1, 3, 5, 7, 9, 11], 8], expected: -1 },
      { desc: 'empty array', args: [[], 5], expected: -1 },
      { desc: 'singleton hit', args: [[42], 42], expected: 0 },
    ],
  },
]

const DIFF_STYLE: Record<Difficulty, string> = {
  easy: 'border-emerald-400/35 bg-emerald-400/10 text-emerald-300',
  medium: 'border-amber-400/35 bg-amber-400/10 text-amber-300',
  hard: 'border-rose-400/35 bg-rose-400/10 text-rose-300',
}

/* ------------------------------------------------------------------ */
/*  Sandbox: tick-guard injection + guarded Function runner            */
/* ------------------------------------------------------------------ */

const TICK_LIMIT = 50_000_000

/**
 * Best-effort rewrite: injects `__sv_tick();` as the first statement of every
 * loop body (for / while / do), skipping string & comment spans so literals
 * like "for(" are never mangled.
 */
function injectTicks(code: string): string {
  let out = ''
  let i = 0
  const n = code.length
  const isWord = (c: string) => /[A-Za-z0-9_$]/.test(c)
  while (i < n) {
    const c = code[i]
    // comments
    if (c === '/' && code[i + 1] === '/') {
      while (i < n && code[i] !== '\n') out += code[i++]
      continue
    }
    if (c === '/' && code[i + 1] === '*') {
      out += '/*'
      i += 2
      while (i < n && !(code[i] === '*' && code[i + 1] === '/')) out += code[i++]
      out += '*/'
      i += 2
      continue
    }
    // strings + template literals (no escape-aware handling of ${} — best effort)
    if (c === '"' || c === "'" || c === '`') {
      const quote = c
      out += c
      i++
      while (i < n && code[i] !== quote) {
        if (code[i] === '\\') {
          out += code[i++]
          if (i < n) out += code[i++]
          continue
        }
        out += code[i++]
      }
      if (i < n) out += code[i++]
      continue
    }
    // loop keywords
    if ((c === 'f' || c === 'w' || c === 'd') && !isWord(code[i - 1] ?? ' ')) {
      const rest = code.slice(i)
      const kw = rest.match(/^(for|while|do)\b/)
      if (kw) {
        const word = kw[1]
        out += word
        i += word.length
        if (word === 'do') {
          const mm = code.slice(i).match(/^\s*\{/)
          if (mm) {
            out += mm[0] + '__sv_tick();'
            i += mm[0].length
          }
          continue
        }
        const open = code.slice(i).match(/^\s*\(/)
        if (open) {
          out += open[0]
          i += open[0].length
          let depth = 1
          while (i < n && depth > 0) {
            const cc = code[i]
            if (cc === '(') depth++
            else if (cc === ')') depth--
            out += cc
            i++
          }
          const brace = code.slice(i).match(/^\s*\{/)
          if (brace) {
            out += brace[0] + '__sv_tick();'
            i += brace[0].length
          }
          continue
        }
        continue
      }
    }
    out += c
    i++
  }
  return out
}

function fmtVal(v: unknown): string {
  if (v === undefined) return 'undefined'
  if (v === null) return 'null'
  if (typeof v === 'function') return 'ƒ'
  if (typeof v === 'number') return String(v)
  if (typeof v === 'string') return JSON.stringify(v)
  if (typeof v === 'boolean') return String(v)
  try {
    return JSON.stringify(v)
  } catch {
    return String(v)
  }
}

function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true
  if (typeof a !== typeof b || a === null || b === null || a === undefined || b === undefined) {
    return false
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((v, i) => deepEqual(v, b[i]))
  }
  if (typeof a === 'object' && typeof b === 'object') {
    const ka = Object.keys(a as object)
    const kb = Object.keys(b as object)
    return (
      ka.length === kb.length &&
      ka.every((k) =>
        deepEqual((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k]),
      )
    )
  }
  return false
}

interface TestResult {
  desc: string
  pass: boolean
  expected: string
  got: string
  ms: number
}

interface RunOutcome {
  results: TestResult[]
  logs: string[]
  error: string | null
  allPass: boolean
}

function runChallenge(ch: Challenge, code: string): RunOutcome {
  const logs: string[] = []
  let factory: (tick: () => void, consoleObj: { log: (...a: unknown[]) => void }) => unknown
  try {
    const transformed = injectTicks(code)
    factory = new Function(
      '__sv_tick',
      'console',
      `"use strict";\n${transformed}\n;return typeof ${ch.fn} === 'function' ? ${ch.fn} : undefined;`,
    ) as typeof factory
  } catch (e) {
    return {
      results: [],
      logs,
      error: `Syntax error — ${(e as Error).message}`,
      allPass: false,
    }
  }

  const results: TestResult[] = []
  let fn: unknown
  try {
    let ticks = 0
    const tick = () => {
      if (++ticks > TICK_LIMIT) {
        throw new Error('Time limit exceeded (possible infinite loop)')
      }
    }
    const collector = {
      log: (...a: unknown[]) => {
        if (logs.length < 200) logs.push(a.map(fmtVal).join(' '))
      },
    }
    fn = factory(tick, collector)
  } catch (e) {
    return { results, logs, error: (e as Error).message, allPass: false }
  }
  if (typeof fn !== 'function') {
    return {
      results,
      logs,
      error: `Define a function named "${ch.fn}" for this challenge.`,
      allPass: false,
    }
  }

  for (const t of ch.tests) {
    const t0 = performance.now()
    let got: unknown
    let err: string | null = null
    try {
      let ticks = 0
      const tick = () => {
        if (++ticks > TICK_LIMIT) {
          throw new Error('Time limit exceeded (possible infinite loop)')
        }
      }
      const collector = {
        log: (...a: unknown[]) => {
          if (logs.length < 200) logs.push(a.map(fmtVal).join(' '))
        },
      }
      // re-enter scope per test so closures/state reset
      const testFn = (factory as (t2: () => void, c2: { log: (...a: unknown[]) => void }) => unknown)(
        tick,
        collector,
      ) as (...a: unknown[]) => unknown
      got = (testFn ?? fn)(...(t.args as unknown[]))
    } catch (e) {
      err = (e as Error).message
    }
    const ms = performance.now() - t0
    results.push({
      desc: t.desc,
      pass: err === null && deepEqual(got, t.expected),
      expected: fmtVal(t.expected),
      got: err !== null ? `threw: ${err}` : fmtVal(got),
      ms,
    })
  }
  return {
    results,
    logs,
    error: null,
    allPass: results.length > 0 && results.every((r) => r.pass),
  }
}

/* ------------------------------------------------------------------ */
/*  Persistence + twin                                                 */
/* ------------------------------------------------------------------ */

const DONE_KEY = 'sv-judge-done'

function readDone(): Set<string> {
  try {
    const raw = localStorage.getItem(DONE_KEY)
    return new Set(raw ? (JSON.parse(raw) as string[]) : [])
  } catch {
    return new Set()
  }
}

function writeDone(done: Set<string>) {
  try {
    localStorage.setItem(DONE_KEY, JSON.stringify([...done]))
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new CustomEvent('sv-judge-done'))
}

/* ------------------------------------------------------------------ */
/*  Editor                                                             */
/* ------------------------------------------------------------------ */

function CodeEditor({
  value,
  onChange,
  errorLine,
}: {
  value: string
  onChange: (v: string) => void
  errorLine?: number | null
}) {
  const taRef = useRef<HTMLTextAreaElement>(null)
  const gutterRef = useRef<HTMLDivElement>(null)
  const lines = useMemo(() => value.split('\n'), [value])

  const syncScroll = () => {
    if (gutterRef.current && taRef.current) {
      gutterRef.current.scrollTop = taRef.current.scrollTop
    }
  }

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const ta = e.currentTarget
      const { selectionStart: s, selectionEnd: en } = ta
      const next = value.slice(0, s) + '  ' + value.slice(en)
      onChange(next)
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = s + 2
      })
    }
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background font-mono text-[13px] leading-[22px]">
      <div
        ref={gutterRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-11 select-none overflow-hidden border-r border-border/70 bg-card/60 text-right"
      >
        {lines.map((_, i) => (
          <div
            key={i}
            className={`h-[22px] pr-2 text-[11px] leading-[22px] tabular-nums ${
              errorLine === i + 1 ? 'bg-rose-400/20 font-bold text-rose-300' : 'text-muted-foreground/60'
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <textarea
        ref={taRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onScroll={syncScroll}
        onKeyDown={onKeyDown}
        spellCheck={false}
        aria-label="Solution code editor"
        rows={14}
        className="block w-full resize-y bg-transparent py-2 pl-14 pr-3 font-mono text-[13px] leading-[22px] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400/60"
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function JudgePanel() {
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const [activeId, setActiveId] = useState(CHALLENGES[0].id)
  const [code, setCode] = useState<Record<string, string>>(
    () => Object.fromEntries(CHALLENGES.map((c) => [c.id, c.starter])),
  )
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState<Set<string>>(() => new Set())

  const challenge = CHALLENGES.find((c) => c.id === activeId) as Challenge

  useEffect(() => {
    const onDone = () => setDone(readDone())
    onDone()
    window.addEventListener('sv-judge-done', onDone)
    window.addEventListener('storage', onDone)
    return () => {
      window.removeEventListener('sv-judge-done', onDone)
      window.removeEventListener('storage', onDone)
    }
  }, [])

  // clear stale results when switching challenges — derived via key reset
  const [outcome, setOutcome] = useState<RunOutcome | null>(null)
  const [lastActiveId, setLastActiveId] = useState(activeId)
  if (lastActiveId !== activeId) {
    setLastActiveId(activeId)
    setOutcome(null)
  }

  const report = useCallback(
    (correct: boolean, weight: number, challengeId: string) => {
      try {
        const deviceId = ensureDevice()
        void fetch('/api/twin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            deviceId,
            skillKey: 'dsa-ch3-s1',
            kind: 'judge',
            correct,
            weight,
            meta: { challenge: challengeId },
          }),
        }).catch(() => {
          /* twin offline-tolerant */
        })
      } catch {
        /* ensureDevice unavailable */
      }
    },
    [ensureDevice],
  )

  const run = () => {
    setRunning(true)
    // let the spinner paint before the synchronous run
    setTimeout(() => {
      const result = runChallenge(challenge, code[challenge.id] ?? '')
      setOutcome(result)
      setRunning(false)
      if (result.allPass) {
        if (!done.has(challenge.id)) {
          const next = new Set(done)
          next.add(challenge.id)
          setDone(next)
          writeDone(next)
        }
        report(true, 2, challenge.id)
      } else if (result.results.length > 0) {
        report(false, 1, challenge.id)
      }
    }, 30)
  }

  const solvedCount = done.size

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="grid gap-5 lg:grid-cols-[290px_minmax(0,1fr)]"
    >
      {/* leaderboard / challenge list */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-border/80 bg-card p-4">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Trophy className="h-4 w-4 text-amber-300" aria-hidden="true" /> Your record
          </div>
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="font-mono text-2xl font-bold tabular-nums text-emerald-300">
              {solvedCount}
            </span>
            <span className="text-xs text-muted-foreground">/ {CHALLENGES.length} solved</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={solvedCount} aria-valuemin={0} aria-valuemax={CHALLENGES.length}>
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-500"
              style={{ width: `${(solvedCount / CHALLENGES.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border/80 bg-card p-2" role="list" aria-label="Challenges">
          {CHALLENGES.map((c) => {
            const solved = done.has(c.id)
            const active = c.id === activeId
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`flex w-full items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-all ${RING} ${
                  active
                    ? 'border-emerald-400/50 bg-emerald-400/10'
                    : 'border-transparent hover:border-border/70 hover:bg-emerald-400/[0.05]'
                }`}
              >
                {solved ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                ) : (
                  <Circle className="h-4 w-4 shrink-0 text-muted-foreground/40" aria-hidden="true" />
                )}
                <span className="min-w-0 flex-1">
                  <span className={`block truncate text-sm font-semibold ${active ? 'text-emerald-100' : ''}`}>
                    {c.title}
                  </span>
                  <span
                    className={`mt-0.5 inline-block rounded border px-1.5 py-px text-[9px] font-bold uppercase tracking-wider ${DIFF_STYLE[c.difficulty]}`}
                  >
                    {c.difficulty}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* workspace */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-bold">{challenge.title}</h3>
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${DIFF_STYLE[challenge.difficulty]}`}
            >
              {challenge.difficulty}
            </span>
          </div>
          <p className="mt-2 whitespace-pre-wrap text-[13px] leading-relaxed text-muted-foreground">
            {challenge.prompt}
          </p>
        </div>

        <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-sm font-bold">
              <Terminal className="h-4 w-4 text-emerald-300" aria-hidden="true" /> Solution —{' '}
              <span className="font-mono text-xs text-emerald-300">{challenge.fn}()</span>
            </span>
            <span className="hidden text-[10px] text-muted-foreground sm:inline">
              Tab inserts 2 spaces · runs locally in a guarded sandbox
            </span>
          </div>
          <CodeEditor
            value={code[challenge.id] ?? ''}
            onChange={(v) => setCode((c) => ({ ...c, [challenge.id]: v }))}
          />
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              onClick={run}
              disabled={running}
              className={`inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-bold text-emerald-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50 ${RING}`}
            >
              {running ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Running…
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" aria-hidden="true" /> Run tests
                </>
              )}
            </button>
            <button
              onClick={() => setCode((c) => ({ ...c, [challenge.id]: challenge.starter }))}
              className={`inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/60 px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground ${RING}`}
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Reset starter
            </button>
            {done.has(challenge.id) && (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/35 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-300">
                <Trophy className="h-3.5 w-3.5" aria-hidden="true" /> solved
              </span>
            )}
          </div>
        </div>

        {/* results */}
        <AnimatePresence mode="wait">
          {outcome && (
            <motion.div
              key={activeId + (outcome ? 'r' : '')}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="space-y-4"
            >
              {outcome.error && (
                <div
                  role="alert"
                  className="rounded-2xl border border-rose-400/30 bg-rose-400/[0.07] px-4 py-3 font-mono text-xs leading-relaxed text-rose-200"
                >
                  {outcome.error}
                </div>
              )}

              {outcome.results.length > 0 && (
                <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold">Test results</span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        outcome.allPass
                          ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
                          : 'border-amber-400/40 bg-amber-400/10 text-amber-300'
                      }`}
                    >
                      {outcome.results.filter((r) => r.pass).length}/{outcome.results.length} passing
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {outcome.results.map((r, i) => (
                      <li
                        key={i}
                        className={`rounded-xl border px-3.5 py-2.5 ${
                          r.pass
                            ? 'border-emerald-400/25 bg-emerald-400/[0.05]'
                            : 'border-amber-400/25 bg-amber-400/[0.05]'
                        }`}
                      >
                        <div className="flex items-center gap-2 text-sm">
                          {r.pass ? (
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                          ) : (
                            <XCircle className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                          )}
                          <span className="font-semibold">{r.desc}</span>
                          <span className="ml-auto font-mono text-[10px] tabular-nums text-muted-foreground">
                            {r.ms < 1 ? '<1' : r.ms.toFixed(0)} ms
                            {r.ms > 1500 && (
                              <span className="ml-1 text-amber-400" title="Slow — consider a faster algorithm">
                                slow
                              </span>
                            )}
                          </span>
                        </div>
                        {!r.pass && (
                          <div className="mt-1.5 grid gap-1 font-mono text-[11px] sm:grid-cols-2">
                            <span className="truncate text-muted-foreground">
                              expected <span className="text-emerald-300">{r.expected}</span>
                            </span>
                            <span className="truncate text-muted-foreground">
                              got <span className="text-amber-300">{r.got}</span>
                            </span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  {outcome.allPass && (
                    <p className="mt-3 rounded-lg border border-emerald-400/25 bg-emerald-400/[0.08] px-3.5 py-2.5 text-xs leading-relaxed text-emerald-200">
                      All tests green — challenge complete. Evidence (weight 2) sent to your mastery
                      twin.
                    </p>
                  )}
                </div>
              )}

              {outcome.logs.length > 0 && (
                <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-bold">
                      <Eraser className="h-4 w-4 text-teal-300" aria-hidden="true" /> console.log
                    </span>
                    <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                      {outcome.logs.length} lines
                    </span>
                  </div>
                  <div className="max-h-40 overflow-y-auto rounded-lg border border-border/70 bg-background/60 p-2.5 font-mono text-[11px] leading-5">
                    {outcome.logs.map((l, i) => (
                      <div key={i} className="text-foreground/80">
                        <span className="mr-2 text-muted-foreground/50">›</span>
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!outcome && (
          <p className="rounded-2xl border border-dashed border-border/70 bg-background/40 px-4 py-5 text-center text-sm text-muted-foreground">
            Write your solution above and press{' '}
            <span className="font-semibold text-foreground/80">Run tests</span> — the judge executes
            it right here in your browser against {challenge.tests.length} hidden inputs.
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default JudgePanel
