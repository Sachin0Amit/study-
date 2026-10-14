'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Lightbulb,
  ListOrdered,
  Play,
  RotateCcw,
  Terminal,
  Trash2,
  TriangleAlert,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Level = 'log' | 'info' | 'warn' | 'error'

interface LogLine {
  id: number
  level: Level
  text: string
  t: number
}

interface RunError {
  message: string
  frame: string | null
  promise: boolean
}

interface Preset {
  id: string
  label: string
  code: string
}

/* ------------------------------------------------------------------ */
/*  Value formatter for captured console arguments                     */
/* ------------------------------------------------------------------ */

function fmt(v: unknown, nested = false, depth = 0): string {
  if (v === null) return 'null'
  if (v === undefined) return 'undefined'
  if (typeof v === 'string') return nested ? `'${v}'` : v
  if (typeof v === 'number' || typeof v === 'boolean') return String(v)
  if (typeof v === 'bigint') return `${v}n`
  if (typeof v === 'symbol') return v.toString()
  if (typeof v === 'function') return `[Function${v.name ? `: ${v.name}` : ''}]`
  if (v instanceof Error) return `${v.name}: ${v.message}`
  if (depth >= 3) return Array.isArray(v) ? '[…]' : '{…}'
  if (Array.isArray(v)) {
    const shown = v.slice(0, 16).map((x) => fmt(x, true, depth + 1)).join(', ')
    return `[${shown}${v.length > 16 ? ', …' : ''}]`
  }
  if (typeof v === 'object') {
    const entries = Object.entries(v as Record<string, unknown>)
    const shown = entries
      .slice(0, 10)
      .map(([k, x]) => `${k}: ${fmt(x, true, depth + 1)}`)
      .join(', ')
    return `{ ${shown}${entries.length > 10 ? ', …' : ''} }`
  }
  return String(v)
}

/* ------------------------------------------------------------------ */
/*  Preset programs (Flanagan 7e companion)                            */
/* ------------------------------------------------------------------ */

const PRESETS: Preset[] = [
  {
    id: 'closures',
    label: 'Closures',
    code: `// A closure is a function bundled with the variables it captured
function makeCounter(label) {
  let count = 0;              // private state, captured below
  return function () {
    count += 1;
    return label + ': count ' + count;
  };
}

const a = makeCounter('A');
const b = makeCounter('B');   // a second, independent closure

console.log(a());             // A: count 1
console.log(a());             // A: count 2  (same captured count)
console.log(b());             // B: count 1  (different captured count)`,
  },
  {
    id: 'promises',
    label: 'Promises chain',
    code: `// Each .then returns a NEW promise, so the chain runs step by step
Promise.resolve(2)
  .then(n => {
    console.info('first .then got', n);
    return n * 10;
  })
  .then(n => {
    console.info('second .then got', n);
    return n + 1;
  })
  .then(n => console.info('third .then got', n))
  .catch(e => console.error('never happens:', e));

console.log('chain scheduled — this line prints first');`,
  },
  {
    id: 'destructuring',
    label: 'Destructuring',
    code: `const book = {
  title: 'JavaScript: The Definitive Guide',
  author: { name: 'David Flanagan' },
  tags: ['core', 'language'],
};

const { title, author, tags, edition = 7 } = book;   // defaults + nesting
console.log(title, '— by', author.name);
console.log('tags:', tags, 'edition:', edition);

const [first, , third] = [10, 20, 30];               // skip the middle
console.log('first:', first, 'third:', third);

function area({ w = 1, h = 1 } = {}) {               // destructured params
  return w * h;
}
console.log('area of 3x4:', area({ w: 3, h: 4 }));

return { title, author: author.name, area: area({ w: 2, h: 5 }) };`,
  },
  {
    id: 'pipeline',
    label: 'Array pipeline',
    code: `const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = nums.map(n => n * 2);              // 1. transform every element
console.log('after map:   ', doubled);

const big = doubled.filter(n => n > 8);            // 2. keep the survivors
console.log('after filter:', big);

const total = big.reduce((sum, n) => sum + n, 0);  // 3. fold into one value
console.log('after reduce:', total);

return total;   // 90`,
  },
  {
    id: 'classes',
    label: 'Classes + subclass',
    code: `class Shape {
  constructor(name) {
    this.name = name;
  }
  describe() {
    return 'a ' + this.name;
  }
}

class Circle extends Shape {
  constructor(r) {
    super('circle');        // must run before touching 'this'
    this.r = r;
  }
  describe() {
    return super.describe() + ' (r = ' + this.r + ')';
  }
  get area() {              // computed like a property
    return Math.PI * this.r ** 2;
  }
}

const c = new Circle(2);
console.log(c.describe());
console.log('area:', c.area.toFixed(2));
console.log('is a Shape?', c instanceof Shape);`,
  },
  {
    id: 'generators',
    label: 'Generators',
    code: `function* fibonacci(limit) {
  let [a, b] = [0, 1];
  for (let i = 0; i < limit; i++) {
    yield a;                // pause here, hand a value out
    [a, b] = [b, a + b];
  }
  return 'done';            // becomes the value of the LAST next()
}

const fib = fibonacci(8);

// pull three values by hand, one pause at a time
console.log('manual:', fib.next().value, fib.next().value, fib.next().value);

// for/of pulls whatever is left, automatically
for (const n of fib) {
  console.info('yielded', n);
}

console.log('finished?', fib.next().done);`,
  },
  {
    id: 'fetch',
    label: 'Fetch + await',
    code: `// A simulated network: resolves with data after ms milliseconds
function fakeFetch(name, ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve('data from ' + name), ms);
  });
}

async function loadAll() {
  console.log('start loading');
  const a = await fakeFetch('/api/a', 40);   // suspends here, frees the stack
  console.log('got:', a);
  const b = await fakeFetch('/api/b', 40);
  console.log('got:', b);
  return a + ' and ' + b;
}

loadAll().then(result => console.info('resolved:', result));

console.warn('sync code keeps running — no data yet');`,
  },
  {
    id: 'prototype',
    label: 'Prototype lookup',
    code: `const animal = {
  breathes: true,
  speak() {
    return this.name + ' makes a sound';
  },
};

const dog = Object.create(animal);   // animal becomes dog's prototype
dog.name = 'Rex';

console.log('breathes?', dog.breathes);                        // inherited lookup
console.log('own property?', Object.hasOwn(dog, 'breathes'));  // false
console.log(dog.speak());                                      // via prototype

dog.speak = function () {                                     // shadow it
  return this.name + ' barks';
};
console.log(dog.speak());                                      // own property wins
console.log('proto linked?', Object.getPrototypeOf(dog) === animal);`,
  },
]

/* ------------------------------------------------------------------ */
/*  Trace table (hardcoded for the array pipeline preset)              */
/* ------------------------------------------------------------------ */

const TRACE_INPUT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const TRACE_STAGES: {
  key: string
  badge: string
  badgeCls: string
  code: string
  result: number[]
  note: string
}[] = [
  {
    key: 'map',
    badge: '1 · map',
    badgeCls: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
    code: 'doubled = nums.map(n => n * 2)',
    result: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    note: 'transform each element — same length, same order',
  },
  {
    key: 'filter',
    badge: '2 · filter',
    badgeCls: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
    code: 'big = doubled.filter(n => n > 8)',
    result: [10, 12, 14, 16, 18, 20],
    note: 'keep the elements whose predicate returns true — 6 of 10 survive',
  },
  {
    key: 'reduce',
    badge: '3 · reduce',
    badgeCls: 'border-teal-500/40 bg-teal-500/10 text-teal-300',
    code: 'total = big.reduce((sum, n) => sum + n, 0)',
    result: [90],
    note: 'fold everything into a single value with a running accumulator',
  },
]

const LEVEL_STYLE: Record<Level, string> = {
  log: 'text-foreground/90',
  info: 'text-teal-300',
  warn: 'rounded bg-amber-500/10 px-1 text-amber-300',
  error: 'rounded bg-rose-500/10 px-1 text-rose-300',
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function JsPlayground() {
  const reduced = useReducedMotion() ?? false
  const [presetId, setPresetId] = useState(PRESETS[0].id)
  const [code, setCode] = useState(PRESETS[0].code)
  const [logs, setLogs] = useState<LogLine[]>([])
  const [error, setError] = useState<RunError | null>(null)
  const [result, setResult] = useState<{ value: string; promise: boolean } | null>(null)
  const [pending, setPending] = useState(false)
  const [running, setRunning] = useState(false)
  const [duration, setDuration] = useState<number | null>(null)
  const [trace, setTrace] = useState(false)

  const taRef = useRef<HTMLTextAreaElement | null>(null)
  const gutterRef = useRef<HTMLDivElement | null>(null)
  const outRef = useRef<HTMLDivElement | null>(null)
  const runIdRef = useRef(0)
  const lineIdRef = useRef(0)

  const preset = PRESETS.find((p) => p.id === presetId) ?? PRESETS[0]
  const isPipeline = preset.id === 'pipeline'
  const dirty = code !== preset.code
  const lineCount = useMemo(() => code.split('\n').length, [code])

  /* ---------------- run: new Function + sandboxed console -------------- */

  const run = useCallback(() => {
    const myRun = ++runIdRef.current
    const t0 = performance.now()
    const lines: LogLine[] = []
    setLogs([])
    setError(null)
    setResult(null)
    setPending(false)
    setDuration(null)
    setRunning(true)

    const push = (level: Level, args: unknown[]) => {
      if (runIdRef.current !== myRun) return
      const line: LogLine = {
        id: ++lineIdRef.current,
        level,
        text: args.map((a) => fmt(a)).join(' '),
        t: performance.now() - t0,
      }
      lines.push(line)
      setLogs((prev) => [...prev, line])
    }

    // Sandbox console proxy: user code sees this object as `console`.
    const sandboxConsole = {
      log: (...args: unknown[]) => push('log', args),
      info: (...args: unknown[]) => push('info', args),
      warn: (...args: unknown[]) => push('warn', args),
      error: (...args: unknown[]) => push('error', args),
    }

    let value: unknown
    try {
      const fn = new Function('console', `"use strict";\n${code}`)
      value = fn(sandboxConsole)
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e))
      const firstFrame = err.stack
        ? (err.stack
            .split('\n')
            .slice(1)
            .find((l) => l.trim().startsWith('at'))
            ?.trim() ?? null)
        : null
      push('error', [`Uncaught ${err.name}: ${err.message}`])
      if (runIdRef.current === myRun) {
        setError({ message: err.message, frame: firstFrame, promise: false })
      }
      value = undefined
    }

    if (runIdRef.current === myRun && value !== undefined && !(value instanceof Promise)) {
      setResult({ value: fmt(value), promise: false })
    }
    if (value instanceof Promise) {
      if (runIdRef.current === myRun) setPending(true)
      value.then(
        (v) => {
          if (runIdRef.current !== myRun) return
          setPending(false)
          setResult({ value: fmt(v), promise: true })
        },
        (v) => {
          if (runIdRef.current !== myRun) return
          setPending(false)
          push('error', ['Uncaught (in promise)', v])
          setError({ message: fmt(v), frame: null, promise: true })
        },
      )
    }

    // Settle: keep listening until captured output stops growing, so
    // promise / setTimeout callbacks from async presets land in the log.
    let seen = lines.length
    let polls = 0
    const settle = () => {
      if (runIdRef.current !== myRun) return
      polls += 1
      if (lines.length === seen || polls > 80) {
        setRunning(false)
        setDuration(performance.now() - t0)
      } else {
        seen = lines.length
        window.setTimeout(settle, 100)
      }
    }
    window.setTimeout(settle, 200)
  }, [code])

  const clearOutput = () => {
    runIdRef.current += 1
    setLogs([])
    setError(null)
    setResult(null)
    setPending(false)
    setRunning(false)
    setDuration(null)
  }

  const loadPreset = (p: Preset) => {
    setPresetId(p.id)
    setCode(p.code)
    clearOutput()
    if (p.id !== 'pipeline') setTrace(false)
  }

  /* ---------------- keep the console scrolled down --------------------- */

  useEffect(() => {
    const el = outRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [logs.length, error])

  /* ---------------- editor keyboard behaviour -------------------------- */

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const ta = e.currentTarget
    if (e.key === 'Tab') {
      e.preventDefault()
      const s = ta.selectionStart
      const en = ta.selectionEnd
      if (e.shiftKey) {
        // dedent current line by up to two spaces
        const lineStart = ta.value.lastIndexOf('\n', s - 1) + 1
        const indent = ta.value.slice(lineStart, s)
        const spaces = indent.length - indent.trimStart().length
        if (spaces > 0) {
          const cut = Math.min(2, spaces)
          ta.setSelectionRange(lineStart, lineStart + cut)
          ta.setRangeText('', lineStart, lineStart + cut, 'end')
          setCode(ta.value)
        }
      } else {
        ta.setRangeText('  ', s, en, 'end')
        setCode(ta.value)
      }
    } else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      run()
    }
  }

  const syncGutter = () => {
    if (gutterRef.current && taRef.current) {
      gutterRef.current.scrollTop = taRef.current.scrollTop
    }
  }

  /* ---------------- render --------------------------------------------- */

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Terminal className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">JavaScript Playground</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Flanagan&apos;s core ideas, live in your browser — closures, promises, classes,
            generators. Edit any example, press Run, and read the captured console.
          </p>
        </div>
      </div>

      {/* preset programs */}
      <div role="group" aria-label="Example programs" className="mt-4 flex flex-wrap gap-1.5">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => loadPreset(p)}
            aria-pressed={presetId === p.id}
            className={cn(
              'rounded-lg border px-2.5 py-1.5 text-xs font-medium transition',
              presetId === p.id
                ? 'border-emerald-500/50 bg-emerald-600 text-white'
                : 'border-border bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground',
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* editor + console */}
      <div className="mt-4 grid gap-3 lg:grid-cols-5">
        {/* editor */}
        <section
          aria-label="Code editor"
          className="flex flex-col overflow-hidden rounded-xl border border-border bg-background/60 lg:col-span-3"
        >
          <header className="flex items-center gap-2 border-b border-border px-3 py-2">
            {dirty ? (
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
            ) : (
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/60" aria-hidden="true" />
            )}
            <span className="font-mono text-xs text-foreground">script.js</span>
            <span className="text-[10px] text-muted-foreground">
              {lineCount} lines · {code.length} chars
            </span>
            <Button size="sm" onClick={run} aria-label="Run program" className="ml-auto gap-1.5">
              <Play className="h-3.5 w-3.5" /> Run
            </Button>
          </header>
          <div className="flex h-[360px]">
            <div
              ref={gutterRef}
              aria-hidden="true"
              className="h-full w-10 shrink-0 select-none overflow-hidden border-r border-border bg-muted/20 py-3 text-right font-mono text-[13px] leading-6 text-muted-foreground/40"
            >
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i} className="pr-2">
                  {i + 1}
                </div>
              ))}
            </div>
            <textarea
              ref={taRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={onKeyDown}
              onScroll={syncGutter}
              spellCheck={false}
              wrap="off"
              aria-label="JavaScript code editor. Tab inserts two spaces. Press Control or Command plus Enter to run."
              className="h-full flex-1 resize-none bg-transparent py-3 pl-3 pr-4 font-mono text-[13px] leading-6 text-foreground caret-emerald-400 outline-none"
            />
          </div>
          <footer className="flex items-center gap-2 border-t border-border px-3 py-1.5 text-[10px] text-muted-foreground">
            <span>
              <kbd className="rounded border border-border bg-muted/40 px-1 py-0.5 font-mono">Tab</kbd> inserts 2
              spaces · <kbd className="rounded border border-border bg-muted/40 px-1 py-0.5 font-mono">Ctrl/Cmd + Enter</kbd> runs
            </span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => loadPreset(preset)}
              disabled={!dirty}
              className="ml-auto h-6 gap-1 px-2 text-[10px]"
              aria-label="Restore the preset program"
            >
              <RotateCcw className="h-3 w-3" /> Reset preset
            </Button>
          </footer>
        </section>

        {/* console */}
        <section
          aria-label="Output console"
          className="flex flex-col overflow-hidden rounded-xl border border-border bg-background/70 lg:col-span-2"
        >
          <header className="flex items-center gap-2 border-b border-border px-3 py-2">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">console</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={clearOutput}
              className="ml-auto h-6 w-6 p-0"
              aria-label="Clear console output"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </header>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={reduced ? false : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                role="alert"
                className="border-b border-rose-500/30 bg-rose-500/10 px-3 py-2"
              >
                <div className="flex items-start gap-2 text-rose-300">
                  <TriangleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <div className="min-w-0 text-xs">
                    <p className="font-semibold">
                      {error.promise ? 'Uncaught (in promise)' : 'Uncaught exception'}
                    </p>
                    <p className="break-words font-mono">{error.message}</p>
                    {error.frame && (
                      <p className="mt-1 break-all font-mono text-[10px] text-rose-300/60">{error.frame}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            ref={outRef}
            role="log"
            aria-live="polite"
            aria-label="Captured console output"
            className="h-[360px] overflow-y-auto px-3 py-2 font-mono text-[11px] leading-relaxed"
          >
            {logs.length === 0 && !error && (
              <p className="py-2 text-muted-foreground/70">
                Press Run — every console.log / info / warn / error lands here.
              </p>
            )}
            {logs.map((l) => (
              <motion.div
                key={l.id}
                initial={reduced ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-baseline gap-2 py-0.5"
              >
                <span className="w-14 shrink-0 text-right tabular-nums text-muted-foreground/40">
                  +{l.t.toFixed(1)}ms
                </span>
                {l.level !== 'log' && (
                  <span
                    className={cn(
                      'shrink-0 text-[9px] font-bold uppercase tracking-wider',
                      l.level === 'info' && 'text-teal-400',
                      l.level === 'warn' && 'text-amber-400',
                      l.level === 'error' && 'text-rose-400',
                    )}
                  >
                    {l.level}
                  </span>
                )}
                <span className={cn('min-w-0 break-words', LEVEL_STYLE[l.level])}>{l.text}</span>
              </motion.div>
            ))}
          </div>

          <footer className="flex items-center gap-2 border-t border-border px-3 py-1.5 font-mono text-[11px]">
            {running ? (
              <span className="text-muted-foreground">executing — waiting for async callbacks…</span>
            ) : pending ? (
              <span className="text-amber-300">Promise pending…</span>
            ) : result ? (
              <>
                <span className="shrink-0 text-emerald-400">return</span>
                <span className="min-w-0 break-all text-foreground">{result.value}</span>
                {result.promise && (
                  <span className="ml-1 shrink-0 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-1.5 text-[9px] uppercase tracking-wider text-emerald-300">
                    resolved
                  </span>
                )}
              </>
            ) : duration !== null ? (
              <span className="text-muted-foreground">returned undefined — add a top-level return to capture a value</span>
            ) : (
              <span className="text-muted-foreground/70">idle</span>
            )}
            <span className="ml-auto shrink-0 text-muted-foreground/60">
              {logs.length} lines{duration !== null ? ` · ${duration.toFixed(0)} ms` : ''}
            </span>
          </footer>
        </section>
      </div>

      {/* trace mode */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <Switch
            id="trace-switch"
            checked={trace}
            onCheckedChange={setTrace}
            disabled={!isPipeline}
            aria-label="Toggle trace mode for the array pipeline preset"
          />
          <label
            htmlFor="trace-switch"
            className={cn('text-xs font-medium', isPipeline ? 'text-foreground' : 'text-muted-foreground/60')}
          >
            Trace mode
          </label>
        </div>
        <p className="text-[11px] leading-snug text-muted-foreground">
          {isPipeline
            ? 'Shows the map → filter → reduce stages of the preset as a step table (reflects the preset, not your edits).'
            : 'Available for the “Array pipeline” preset — pick it to trace map → filter → reduce.'}
        </p>
      </div>

      <AnimatePresence initial={false}>
        {trace && isPipeline && (
          <motion.div
            key="trace"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-3 overflow-hidden rounded-xl border border-border bg-background/50">
              <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                <ListOrdered className="h-3.5 w-3.5 text-teal-400" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Trace — the pipeline, stage by stage
                </span>
                <span className="ml-auto font-mono text-[10px] text-muted-foreground/70">nums = [1 … 10]</span>
              </div>

              {/* input row */}
              <div className="grid gap-2 px-3 py-2.5 sm:grid-cols-[110px_1fr] sm:items-start">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  input
                </span>
                <div className="flex flex-wrap gap-1">
                  {TRACE_INPUT.map((n) => (
                    <span
                      key={n}
                      className="rounded border border-border bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] text-foreground/70"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {/* stage rows */}
              {TRACE_STAGES.map((st) => (
                <div
                  key={st.key}
                  className="grid gap-2 border-t border-border px-3 py-2.5 sm:grid-cols-[110px_1fr] sm:items-start"
                >
                  <span
                    className={cn(
                      'inline-flex w-fit items-center rounded-md border px-2 py-0.5 font-mono text-[10px] font-semibold',
                      st.badgeCls,
                    )}
                  >
                    {st.badge}
                  </span>
                  <div className="min-w-0">
                    <code className="break-all font-mono text-[11px] text-teal-300">{st.code}</code>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {st.result.map((n, i) => (
                        <span
                          key={`${st.key}-${i}`}
                          className={cn(
                            'rounded border px-1.5 py-0.5 font-mono text-[10px]',
                            st.key === 'reduce'
                              ? 'border-teal-500/40 bg-teal-500/10 font-bold text-teal-200'
                              : 'border-border bg-muted/40 text-foreground/70',
                          )}
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                    <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{st.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* footer hint */}
      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          edit the Array pipeline preset — raise the filter threshold to{' '}
          <span className="font-mono text-foreground">n &gt; 12</span> — and run it again. Then break the Closures
          preset on purpose (call the inner function before <span className="font-mono text-foreground">makeCounter</span>{' '}
          returns it) and watch the rose error banner report the exception with its first stack line.
        </span>
      </div>
    </div>
  )
}
