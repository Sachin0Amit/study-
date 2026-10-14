'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  Inbox,
  Layers,
  Lightbulb,
  Pause,
  Play,
  Repeat,
  RotateCcw,
  Terminal,
  Timer,
  TriangleAlert,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Tone = 'sync' | 'micro' | 'macro'
type FrameKind = 'script' | 'call' | 'micro' | 'macro'

interface Frame {
  id: string
  label: string
  kind: FrameKind
}

interface Task {
  id: string
  label: string
}

interface ApiTimer {
  id: string
  label: string
  ms: number
}

interface OutLine {
  text: string
  tone: Tone
}

interface Snap {
  caption: string
  glow: string[]
  rule: string | null
  stack: Frame[]
  micro: Task[]
  macro: Task[]
  apis: ApiTimer[]
  out: OutLine[]
}

interface Program {
  id: string
  title: string
  code: string
  order: string
  explain: string
  steps: Snap[]
}

/* ------------------------------------------------------------------ */
/*  Snapshot simulator: each mutation emits an immutable step          */
/* ------------------------------------------------------------------ */

function createSim() {
  const snaps: Snap[] = []
  let stack: Frame[] = []
  let micro: Task[] = []
  let macro: Task[] = []
  let apis: ApiTimer[] = []
  let out: OutLine[] = []
  let caption = ''
  let glow: string[] = []
  let rule: string | null = null

  const emit = () => {
    snaps.push({
      caption,
      glow: [...glow],
      rule,
      stack: [...stack],
      micro: [...micro],
      macro: [...macro],
      apis: [...apis],
      out: [...out],
    })
  }

  const self = {
    /** set the caption (and optional rule badge) shown for the next steps */
    say(c: string, g: string[] = [], r: string | null = null) {
      caption = c
      glow = g
      rule = r
      return self
    },
    push(id: string, label: string, kind: FrameKind = 'call') {
      stack = [...stack, { id, label, kind }]
      emit()
      return self
    },
    pop() {
      stack = stack.slice(0, -1)
      emit()
      return self
    },
    out(text: string, tone: Tone = 'sync') {
      out = [...out, { text, tone }]
      emit()
      return self
    },
    api(id: string, label: string, ms: number) {
      apis = [...apis, { id, label, ms }]
      emit()
      return self
    },
    /** timer finished counting: move its callback to the macrotask queue */
    fire(id: string) {
      const t = apis.find((a) => a.id === id)
      if (!t) return self
      apis = apis.filter((a) => a.id !== id)
      macro = [...macro, { id: t.id, label: t.label }]
      emit()
      return self
    },
    microQ(id: string, label: string) {
      micro = [...micro, { id, label }]
      emit()
      return self
    },
    /** dequeue the first microtask and push it onto the stack */
    takeMicro() {
      const t = micro[0]
      if (!t) return self
      micro = micro.slice(1)
      stack = [...stack, { id: t.id, label: t.label, kind: 'micro' }]
      emit()
      return self
    },
    /** event-loop tick: dequeue exactly one macrotask */
    takeMacro() {
      const t = macro[0]
      if (!t) return self
      macro = macro.slice(1)
      stack = [...stack, { id: t.id, label: t.label, kind: 'macro' }]
      emit()
      return self
    },
    /** emit a step without mutating anything (final captions) */
    mark() {
      emit()
      return self
    },
    done() {
      return snaps
    },
  }
  return self
}

/* ------------------------------------------------------------------ */
/*  Preset programs                                                    */
/* ------------------------------------------------------------------ */

function quizProgram(): Program {
  const s = createSim()
  s.say('Run script — the whole file is one job, and it starts as the first frame on the call stack.', ['stack'])
    .push('script', 'script (main)', 'script')
    .say('console.log(1) runs synchronously — output appears immediately, while the script frame is still on the stack.', ['stack'])
    .out('1')
    .say('setTimeout does NOT run its callback now. The runtime hands it to the Web APIs area and starts a 0 ms timer.', ['api'])
    .api('t4', 'cb: log(4)', 0)
    .say('The 0 ms timer finishes counting — but the callback only moves to the macrotask (callback) queue. It cannot run while the stack is busy.', ['api', 'macro'])
    .fire('t4')
    .say('Promise.resolve() is already settled, so .then enqueues its callback on the microtask queue — the fast lane.', ['micro'])
    .microQ('m3', 'then: log(3)')
    .say('console.log(2) — still synchronous code, so still ahead of everything queued.', ['stack'])
    .out('2')
    .say('End of script — the call stack is empty. Rule time: drain ALL microtasks before any macrotask.', ['stack', 'micro'], 'microtasks first')
    .pop()
    .say('The event loop checks the microtask queue before anything else — one job is waiting.', ['micro', 'loop'])
    .takeMicro()
    .say('The microtask runs — console.log(3) prints, beating the timer that was queued first.', ['stack'])
    .out('3', 'micro')
    .say('Microtask frame popped — the microtask queue is now empty.', ['stack', 'micro'])
    .pop()
    .say('Event loop tick: stack empty and microtasks drained — now exactly ONE macrotask is dequeued.', ['macro', 'loop'], 'one macrotask per tick')
    .takeMacro()
    .say('The timer callback finally runs — console.log(4).', ['stack'])
    .out('4', 'macro')
    .say('Stack empty again, both queues empty — the program is complete.', [])
    .pop()
    .say('Final order: 1 → 2 → 3 → 4. The microtask beat the 0 ms timer.', ['micro', 'macro'])
    .mark()
  return {
    id: 'quiz',
    title: 'The famous quiz',
    code: `console.log(1);
setTimeout(() => console.log(4), 0);
Promise.resolve().then(() => console.log(3));
console.log(2);`,
    order: '1 → 2 → 3 → 4',
    explain:
      'All synchronous code runs first: 1, then 2 — the two middle statements only schedule work. When the script frame pops, the microtask queue drains completely (3) before the event loop dequeues a single macrotask, the 0 ms timer (4). A settled promise’s .then always beats setTimeout(fn, 0).',
    steps: s.done(),
  }
}

function chainProgram(): Program {
  const s = createSim()
  s.say('Run script — one frame for the whole file.', ['stack'])
    .push('script', 'script (main)', 'script')
    .say("console.log('start') — synchronous.", ['stack'])
    .out('start')
    .say('setTimeout hands its callback to the Web APIs; a 0 ms timer starts counting.', ['api'])
    .api('t0', 'cb: log(timeout)', 0)
    .say('Timer done — the callback parks in the macrotask queue. It waits for the stack to clear and for its turn.', ['api', 'macro'])
    .fire('t0')
    .say('Promise.resolve() is settled, so the first .then enqueues a microtask. The SECOND .then is not queued yet — each .then returns a new promise that settles only when its callback finishes.', ['micro'])
    .microQ('m1', 'then #1: log(p1)')
    .say("console.log('end') — still synchronous code.", ['stack'])
    .out('end')
    .say('Script ends, stack empty → drain the whole microtask queue.', ['stack', 'micro'], 'microtasks first')
    .pop()
    .say('Microtask #1 pops off the queue onto the stack.', ['micro', 'loop'])
    .takeMicro()
    .say("console.log('p1') prints.", ['stack'])
    .out('p1', 'micro')
    .say('Microtask #1 returns — its value resolves the NEXT promise in the chain…', ['stack', 'micro'])
    .pop()
    .say('…which enqueues then #2 as a brand-new microtask, added during the drain. It still runs before the macrotask.', ['micro'], 'queued during the drain')
    .microQ('m2', 'then #2: log(p2)')
    .say('Microtask #2 runs.', ['micro', 'loop'])
    .takeMicro()
    .say("console.log('p2') prints.", ['stack'])
    .out('p2', 'micro')
    .say('Stack empty again — microtask queue is empty too.', ['stack', 'micro'])
    .pop()
    .say('Microtasks done — the event loop takes one macrotask.', ['macro', 'loop'], 'one macrotask per tick')
    .takeMacro()
    .say("The timer callback runs — console.log('timeout').", ['stack'])
    .out('timeout', 'macro')
    .say('Program complete.', [])
    .pop()
    .say('Final order: start → end → p1 → p2 → timeout. The chain grew the microtask drain, and the timer still waited.', ['micro', 'macro'])
    .mark()
  return {
    id: 'chain',
    title: 'Promise chain vs timeout',
    code: `console.log('start');
setTimeout(() => console.log('timeout'), 0);

Promise.resolve()
  .then(() => console.log('p1'))
  .then(() => console.log('p2'));

console.log('end');`,
    order: 'start → end → p1 → p2 → timeout',
    explain:
      'Each .then returns a new promise, so the second callback is queued only after the first one runs — the chain stretches the microtask drain to two turns. The timer waits anyway: even a queue that keeps growing during the drain finishes before the event loop’s single macrotask pickup.',
    steps: s.done(),
  }
}

function awaitProgram(): Program {
  const s = createSim()
  s.say('Run script.', ['stack'])
    .push('script', 'script (main)', 'script')
    .say("console.log('start') — synchronous.", ['stack'])
    .out('start')
    .say('main() is invoked — pushed on top of the script frame.', ['stack'])
    .push('main', 'main()', 'call')
    .say('Code before the await runs synchronously: console.log(‘A’).', ['stack'])
    .out('A')
    .say('await suspends main(): the function pops off the stack immediately and control returns to the caller.', ['stack', 'micro'])
    .pop()
    .say('The code after await is queued as a microtask — await behaves like .then on the rest of the function.', ['micro'])
    .microQ('mc', 'rest of main')
    .say('setTimeout hands its callback to the Web APIs (0 ms timer).', ['api'])
    .api('tD', 'cb: log(D)', 0)
    .say('Timer done — the callback moves to the macrotask queue and waits for its tick.', ['api', 'macro'])
    .fire('tD')
    .say("Back in the script: console.log('B').", ['stack'])
    .out('B')
    .say('Script ends — stack empty → drain microtasks.', ['stack', 'micro'], 'microtasks first')
    .pop()
    .say('The awaited continuation runs — the rest of main is back on the stack.', ['micro', 'loop'])
    .takeMicro()
    .say("console.log('C') — the continuation beats every timer.", ['stack'])
    .out('C', 'micro')
    .say('main is finished.', ['stack', 'micro'])
    .pop()
    .say('Only now does the event loop dequeue the timer callback.', ['macro', 'loop'], 'one macrotask per tick')
    .takeMacro()
    .say("The timer callback runs — console.log('D').", ['stack'])
    .out('D', 'macro')
    .say('Program complete.', [])
    .pop()
    .say('Final order: start → A → B → C → D. The await continuation is a microtask: it beats every timer.', ['micro', 'macro'])
    .mark()
  return {
    id: 'await',
    title: 'async/await ordering',
    code: `async function main() {
  console.log('A');
  await null;          // rest of main -> one microtask
  console.log('C');
}

console.log('start');
main();
setTimeout(() => console.log('D'), 0);
console.log('B');`,
    order: 'start → A → B → C → D',
    explain:
      'The part of main before the await is synchronous (A). At await the function suspends and pops off the stack; its continuation is queued like a .then microtask. The script keeps going (B), the continuation resumes before any timer (C), and only then does the 0 ms timer fire (D).',
    steps: s.done(),
  }
}

function nestedProgram(): Program {
  const s = createSim()
  s.say('Run script.', ['stack'])
    .push('script', 'script (main)', 'script')
    .say('Promise.resolve() is settled, so .then queues the outer callback as a microtask right away.', ['micro'])
    .microQ('m1', 'outer cb')
    .say('setTimeout hands its callback to the Web APIs (0 ms timer).', ['api'])
    .api('t0', 'cb: log(timer)', 0)
    .say('Timer done — callback parked in the macrotask queue.', ['api', 'macro'])
    .fire('t0')
    .say("console.log('sync') — synchronous code still runs first.", ['stack'])
    .out('sync')
    .say('Stack empty → drain microtasks. Watch closely: NEW microtasks queued during the drain also run before the timer.', ['stack', 'micro'], 'microtasks first')
    .pop()
    .say('The outer callback runs.', ['micro', 'loop'])
    .takeMicro()
    .say("console.log('outer') prints.", ['stack'])
    .out('outer', 'micro')
    .say('While still draining, outer queues ANOTHER microtask — it joins the back of the same queue, still ahead of the timer.', ['micro'], 'queued during the drain')
    .microQ('m2', 'inner cb')
    .say('Outer returns — the queue is not empty, so the drain continues.', ['stack', 'micro'])
    .pop()
    .say('The inner callback runs.', ['micro', 'loop'])
    .takeMicro()
    .say("console.log('inner') prints.", ['stack'])
    .out('inner', 'micro')
    .say('Stack empty — the microtask queue is finally empty too.', ['stack', 'micro'])
    .pop()
    .say('Microtasks exhausted — the event loop takes one macrotask.', ['macro', 'loop'], 'one macrotask per tick')
    .takeMacro()
    .say("The timer callback runs — console.log('timer').", ['stack'])
    .out('timer', 'macro')
    .say('Program complete.', [])
    .pop()
    .say('Final order: sync → outer → inner → timer. The inner microtask was queued mid-drain and still went first.', ['micro', 'macro'])
    .mark()
  return {
    id: 'nested',
    title: 'Nested promises',
    code: `Promise.resolve().then(() => {
  console.log('outer');
  Promise.resolve().then(() => console.log('inner'));
});
setTimeout(() => console.log('timer'), 0);
console.log('sync');`,
    order: 'sync → outer → inner → timer',
    explain:
      'Microtasks queued while microtasks are draining still run before the next macrotask. inner is enqueued while outer executes, joins the back of the queue, and the drain does not end until the queue is truly empty — so timer is still last.',
    steps: s.done(),
  }
}

function microMixProgram(): Program {
  const s = createSim()
  s.say('Run script.', ['stack'])
    .push('script', 'script (main)', 'script')
    .say("console.log('sync') — synchronous.", ['stack'])
    .out('sync')
    .say('setTimeout hands its callback to the Web APIs (0 ms timer).', ['api'])
    .api('t0', 'cb: log(macrotask)', 0)
    .say('Timer done — callback parked in the macrotask queue.', ['api', 'macro'])
    .fire('t0')
    .say('queueMicrotask puts its callback on the SAME microtask queue promise reactions use — strict FIFO.', ['micro'])
    .microQ('q1', 'qmt: micro 1')
    .say('Promise .then joins behind it — one queue, one order.', ['micro'])
    .microQ('q2', 'then: micro 2')
    .say('Another queueMicrotask — third in line.', ['micro'])
    .microQ('q3', 'qmt: micro 3')
    .say('Script ends — stack empty → drain the entire microtask queue, in order.', ['stack', 'micro'], 'microtasks first')
    .pop()
    .say('Microtask 1 of 3 runs.', ['micro', 'loop'])
    .takeMicro()
    .out('micro 1', 'micro')
    .say('Microtask frame popped — drain continues.', ['stack', 'micro'])
    .pop()
    .say('Microtask 2 of 3 runs.', ['micro', 'loop'])
    .takeMicro()
    .out('micro 2', 'micro')
    .pop()
    .say('Microtask 3 of 3 runs.', ['micro', 'loop'])
    .takeMicro()
    .out('micro 3', 'micro')
    .say('Microtask queue finally empty — the event loop may take one macrotask.', ['macro', 'loop'], 'one macrotask per tick')
    .pop()
    .takeMacro()
    .say('The timer callback runs — console.log(‘macrotask’).', ['stack'])
    .out('macrotask', 'macro')
    .say('Program complete.', [])
    .pop()
    .say('Final order: sync → micro 1 → micro 2 → micro 3 → macrotask. queueMicrotask and .then share one lane.', ['micro', 'macro'])
    .mark()
  return {
    id: 'mix',
    title: 'queueMicrotask mix',
    code: `console.log('sync');
setTimeout(() => console.log('macrotask'), 0);
queueMicrotask(() => console.log('micro 1'));
Promise.resolve().then(() => console.log('micro 2'));
queueMicrotask(() => console.log('micro 3'));`,
    order: 'sync → micro 1 → micro 2 → micro 3 → macrotask',
    explain:
      'queueMicrotask and promise reactions share one FIFO microtask queue. Strict order: micro 1, 2, 3 — queued exactly as written — all drain when the stack empties; only then does the event loop take the single macrotask, the timer.',
    steps: s.done(),
  }
}

const PROGRAMS: Program[] = [
  quizProgram(),
  chainProgram(),
  awaitProgram(),
  nestedProgram(),
  microMixProgram(),
]

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

const FRAME_STYLE: Record<FrameKind, string> = {
  script: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200',
  call: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200',
  micro: 'border-amber-500/40 bg-amber-500/10 text-amber-200',
  macro: 'border-rose-500/40 bg-rose-500/10 text-rose-200',
}

const OUT_STYLE: Record<Tone, string> = {
  sync: 'text-foreground/90',
  micro: 'text-amber-300',
  macro: 'text-rose-300',
}

function StackPanel({ frames, active }: { frames: Frame[]; active: boolean }) {
  const shown = [...frames].reverse() // top of the stack first
  return (
    <section
      aria-label={`Call stack, ${frames.length} frames`}
      className={cn(
        'flex flex-col rounded-xl border bg-background/50 p-3 transition-all duration-300',
        active ? 'border-emerald-500/50 ring-2 ring-emerald-500/20' : 'border-border',
      )}
    >
      <header className="flex items-center gap-1.5">
        <Layers className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
        <h4 className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400/90">Call stack</h4>
        <span className="ml-auto font-mono text-[10px] text-muted-foreground">LIFO</span>
      </header>
      <div className="mt-2 flex min-h-[172px] flex-col gap-1.5">
        <AnimatePresence initial={false}>
          {shown.map((f) => (
            <motion.div
              key={f.id}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className={cn(
                'rounded-lg border px-2.5 py-2 font-mono text-[11px] leading-tight break-words',
                FRAME_STYLE[f.kind],
              )}
            >
              {f.label}
            </motion.div>
          ))}
        </AnimatePresence>
        {shown.length === 0 && (
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-border/70 px-2 text-center text-[11px] text-muted-foreground/60">
            empty — the loop is free
          </div>
        )}
      </div>
      <p className="mt-2 text-[10px] leading-snug text-muted-foreground/70">
        one thread, one stack — only the top frame runs
      </p>
    </section>
  )
}

function QueuePanel({
  kind,
  items,
  active,
}: {
  kind: 'micro' | 'macro'
  items: Task[]
  active: boolean
}) {
  const isMicro = kind === 'micro'
  const title = isMicro ? 'Microtask queue' : 'Macrotask queue'
  const sub = isMicro ? 'promises · await · queueMicrotask' : 'setTimeout · events'
  const note = isMicro
    ? 'drains completely before the next task'
    : 'the event loop takes ONE per tick'
  return (
    <section
      aria-label={`${title}, ${items.length} waiting`}
      className={cn(
        'flex flex-col rounded-xl border bg-background/50 p-3 transition-all duration-300',
        active
          ? isMicro
            ? 'border-amber-500/50 ring-2 ring-amber-500/20'
            : 'border-rose-500/50 ring-2 ring-rose-500/20'
          : 'border-border',
      )}
    >
      <header className="flex items-center gap-1.5">
        {isMicro ? (
          <Zap className="h-3.5 w-3.5 shrink-0 text-amber-400" />
        ) : (
          <Inbox className="h-3.5 w-3.5 shrink-0 text-rose-400" />
        )}
        <h4
          className={cn(
            'text-[10px] font-semibold uppercase tracking-widest',
            isMicro ? 'text-amber-400/90' : 'text-rose-400/90',
          )}
        >
          {title}
        </h4>
        <span className="ml-auto font-mono text-[10px] text-muted-foreground">{items.length}</span>
      </header>
      <p className="mt-0.5 font-mono text-[9px] text-muted-foreground/60">{sub}</p>
      <div className="mt-2 flex min-h-[172px] flex-col gap-1.5">
        {items.map((t) => (
          <motion.div
            key={t.id}
            layout
            layoutId={t.id}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'rounded-lg border px-2.5 py-2 font-mono text-[11px] leading-tight break-words',
              isMicro
                ? 'border-amber-500/40 bg-amber-500/10 text-amber-200'
                : 'border-rose-500/40 bg-rose-500/10 text-rose-200',
            )}
          >
            {t.label}
          </motion.div>
        ))}
        {items.length === 0 && (
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-border/70 px-2 text-center text-[11px] text-muted-foreground/60">
            empty
          </div>
        )}
      </div>
      <p className="mt-2 text-[10px] leading-snug text-muted-foreground/70">{note}</p>
    </section>
  )
}

function WebApisPanel({ apis, active }: { apis: ApiTimer[]; active: boolean }) {
  return (
    <section
      aria-label={`Web APIs holding area, ${apis.length} timers`}
      className={cn(
        'flex flex-1 flex-col rounded-xl border bg-background/50 p-3 transition-all duration-300',
        active ? 'border-teal-500/50 ring-2 ring-teal-500/20' : 'border-border',
      )}
    >
      <header className="flex flex-wrap items-center gap-1.5">
        <Globe className="h-3.5 w-3.5 shrink-0 text-teal-400" />
        <h4 className="text-[10px] font-semibold uppercase tracking-widest text-teal-400/90">Web APIs</h4>
        <span className="text-[10px] text-muted-foreground">the browser — outside the JS thread</span>
        <span className="ml-auto font-mono text-[10px] text-muted-foreground">{apis.length} waiting</span>
      </header>
      <div className="mt-2 flex min-h-[64px] flex-1 flex-wrap content-start gap-1.5">
        <AnimatePresence initial={false}>
          {apis.map((t) => (
            <motion.div
              key={t.id}
              layout
              layoutId={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-1.5 rounded-lg border border-teal-500/40 bg-teal-500/10 px-2.5 py-2 font-mono text-[11px] text-teal-200"
            >
              <Timer className="h-3 w-3 shrink-0 text-teal-300" />
              <span className="truncate">{t.label}</span>
              <span className="shrink-0 text-teal-300/80">{t.ms} ms</span>
              <span className="motion-safe:animate-pulse shrink-0 text-[9px] uppercase tracking-wider text-teal-300/60">
                counting
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
        {apis.length === 0 && (
          <div className="flex w-full flex-1 items-center justify-center rounded-lg border border-dashed border-border/70 px-2 py-3 text-center text-[11px] text-muted-foreground/60">
            no pending timers
          </div>
        )}
      </div>
      <p className="mt-2 text-[10px] leading-snug text-muted-foreground/70">
        timers count down here; finished callbacks move to the macrotask queue and wait for an event-loop tick
      </p>
    </section>
  )
}

function RuleCard({
  icon: Icon,
  title,
  tone,
  children,
}: {
  icon: LucideIcon
  title: string
  tone: 'emerald' | 'amber' | 'teal' | 'rose'
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const toneText: Record<typeof tone, string> = {
    emerald: 'text-emerald-400',
    amber: 'text-amber-400',
    teal: 'text-teal-400',
    rose: 'text-rose-400',
  }
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background/40">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-2 px-3 py-2.5 text-left transition hover:bg-muted/30"
      >
        <Icon className={cn('h-4 w-4 shrink-0', toneText[tone])} />
        <span className="text-xs font-semibold text-foreground">{title}</span>
        <ChevronDown
          className={cn(
            'ml-auto h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-3 pb-3 text-[11px] leading-relaxed text-muted-foreground">{children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function EventLoopLab() {
  const [programId, setProgramId] = useState(PROGRAMS[0].id)
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const consoleRef = useRef<HTMLDivElement | null>(null)

  const program = useMemo(
    () => PROGRAMS.find((p) => p.id === programId) ?? PROGRAMS[0],
    [programId],
  )
  const steps = program.steps
  const snap = steps[Math.min(idx, steps.length - 1)]
  const atEnd = idx >= steps.length - 1
  const expectedOut = steps[steps.length - 1].out.length
  const progress = steps.length > 1 ? (idx / (steps.length - 1)) * 100 : 100

  const pickProgram = (p: Program) => {
    if (p.id === programId) return
    setProgramId(p.id)
    setIdx(0)
    setPlaying(false)
  }

  /* autoplay with cleanup — stops inside the async callback, never sync */
  useEffect(() => {
    if (!playing || idx >= steps.length - 1) return
    const next = idx + 1
    const t = window.setTimeout(() => {
      setIdx(next)
      if (next >= steps.length - 1) setPlaying(false)
    }, 1150 / speed)
    return () => window.clearTimeout(t)
  }, [playing, idx, speed, steps.length])

  /* keep the console scrolled to the newest line */
  useEffect(() => {
    const el = consoleRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [snap.out.length])

  const togglePlay = () => {
    if (atEnd) {
      setIdx(0)
      setPlaying(true)
    } else {
      setPlaying((p) => !p)
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
            <Clock className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-foreground">Event Loop Lab</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              The interview classic: one thread, one call stack, two queues. Watch timers take a
              detour through the Web APIs while promise callbacks skip the line — and see why{' '}
              <span className="font-mono text-xs text-foreground">setTimeout(fn, 0)</span> is never
              first.
            </p>
          </div>
        </div>

        {/* preset programs */}
        <div role="group" aria-label="Preset programs" className="mt-4 flex flex-wrap gap-1.5">
          {PROGRAMS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => pickProgram(p)}
              aria-pressed={p.id === programId}
              className={cn(
                'rounded-lg border px-2.5 py-1.5 text-xs font-medium transition',
                p.id === programId
                  ? 'border-emerald-500/50 bg-emerald-600 text-white'
                  : 'border-border bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground',
              )}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-12">
          {/* code + explanation */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            <section
              aria-label="Program code"
              className="overflow-hidden rounded-xl border border-border bg-background/60"
            >
              <header className="flex items-center gap-2 border-b border-border px-3 py-2">
                <span className="font-mono text-[11px] text-foreground/80">program.js</span>
                <span className="rounded-full border border-border bg-muted/30 px-2 py-0.5 text-[10px] text-muted-foreground">
                  {program.title}
                </span>
              </header>
              <pre className="max-h-[248px] overflow-auto p-3 font-mono text-[12px] leading-relaxed text-foreground/90">
                <code>{program.code}</code>
              </pre>
            </section>

            <div className="flex items-start gap-2 rounded-xl border border-dashed border-amber-500/30 bg-amber-500/[0.06] px-3 py-2.5">
              <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
              <div className="text-[11px] leading-relaxed text-muted-foreground">
                <p>
                  <span className="font-semibold text-amber-300">Why this order: </span>
                  {program.explain}
                </p>
                <p className="mt-1.5 font-mono text-[10px] text-muted-foreground/70">
                  answer: {program.order}
                </p>
              </div>
            </div>
          </div>

          {/* Web APIs holding area (top right) */}
          <div className="flex lg:col-span-7">
            <WebApisPanel apis={snap.apis} active={snap.glow.includes('api')} />
          </div>

          {/* the three columns */}
          <div className="grid gap-3 sm:grid-cols-3 lg:col-span-12">
            <StackPanel frames={snap.stack} active={snap.glow.includes('stack')} />
            <QueuePanel kind="micro" items={snap.micro} active={snap.glow.includes('micro')} />
            <QueuePanel kind="macro" items={snap.macro} active={snap.glow.includes('macro')} />
          </div>
        </div>

        {/* caption bar */}
        <div className="mt-4 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.05] px-4 py-3">
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-emerald-400/80">
              <Repeat
                className={cn('h-3.5 w-3.5', playing && 'motion-safe:animate-spin')}
                aria-hidden="true"
              />
              Event loop
            </span>
            <div className="flex items-center gap-2">
              {snap.rule && (
                <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                  rule: {snap.rule}
                </span>
              )}
              <span className="font-mono text-[10px] text-muted-foreground">
                step {idx + 1} / {steps.length}
              </span>
            </div>
          </div>
          <p aria-live="polite" className="mt-1.5 min-h-[2.5rem] text-sm leading-relaxed text-foreground/90">
            {snap.caption}
          </p>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-muted/50" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} aria-label="Simulation progress">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* controls */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setPlaying(false)
              setIdx((i) => Math.max(0, i - 1))
            }}
            disabled={idx === 0}
            aria-label="Previous step"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="sm" onClick={togglePlay} className="min-w-[92px]">
            {playing ? (
              <>
                <Pause className="mr-1 h-4 w-4" /> Pause
              </>
            ) : (
              <>
                <Play className="mr-1 h-4 w-4" /> {atEnd ? 'Replay' : 'Auto'}
              </>
            )}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setPlaying(false)
              setIdx((i) => Math.min(steps.length - 1, i + 1))
            }}
            disabled={atEnd}
          >
            Step <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setIdx(0)
              setPlaying(false)
            }}
            aria-label="Reset simulation"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">speed</span>
            <Slider
              value={[speed]}
              min={0.5}
              max={3}
              step={0.25}
              onValueChange={(v) => setSpeed(v[0] ?? 1)}
              className="w-24"
              aria-label="Playback speed"
            />
            <span className="w-8 font-mono text-[10px] text-muted-foreground">{speed.toFixed(2).replace(/\.?0+$/, '')}×</span>
          </div>
          <span className="ml-auto font-mono text-[10px] text-muted-foreground/70">
            output {snap.out.length} / {expectedOut}
          </span>
        </div>

        {/* console */}
        <div className="mt-4 overflow-hidden rounded-xl border border-border bg-background/60">
          <div className="flex items-center justify-between border-b border-border px-3 py-2">
            <span className="flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                console — execution order
              </span>
            </span>
            <span className="font-mono text-[10px] text-muted-foreground/70">{program.order}</span>
          </div>
          <div
            ref={consoleRef}
            role="log"
            aria-live="polite"
            aria-label="Console output"
            className="max-h-40 overflow-y-auto px-3 py-2 font-mono text-xs leading-relaxed"
          >
            {snap.out.length === 0 && (
              <p className="py-1 text-muted-foreground/70">
                Press Auto or Step — the real order reveals itself line by line.
              </p>
            )}
            {snap.out.map((l, i) => (
              <div key={i} className="flex items-baseline gap-2 py-0.5">
                <span className="w-5 shrink-0 text-right text-muted-foreground/40">{i + 1}</span>
                <span className={OUT_STYLE[l.tone]}>{l.text}</span>
              </div>
            ))}
            {atEnd && (
              <div className="py-1 text-emerald-400/80">— program complete · order: {program.order} —</div>
            )}
          </div>
        </div>

        {/* rule cards */}
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <RuleCard icon={Layers} title="The call stack is LIFO" tone="emerald">
            A function call pushes a frame; returning pops it. Only the top frame runs, so a
            long-running frame blocks rendering, timers and everything else. One thread means one
            stack — the parallelism you met in OS threads (OSC Ch 4) is achieved here with queues,
            not extra stacks.
          </RuleCard>
          <RuleCard icon={Zap} title="Microtasks drain completely" tone="amber">
            When the stack empties, the entire microtask queue drains — promise reactions,{' '}
            <span className="font-mono text-[10px] text-foreground/80">await</span> continuations
            and <span className="font-mono text-[10px] text-foreground/80">queueMicrotask</span> —
            including jobs queued while draining. Only then may the event loop pick a single
            macrotask.
          </RuleCard>
          <RuleCard icon={Timer} title="Timers are clamped, not exact" tone="teal">
            <span className="font-mono text-[10px] text-foreground/80">setTimeout(fn, 0)</span>{' '}
            means “at least 0 ms, after the stack clears and the queues allow” — never “now”.
            Browsers clamp nested timers to 4 ms after five levels of nesting, and background tabs
            clamp much harder.
          </RuleCard>
          <RuleCard icon={TriangleAlert} title="Starvation warning" tone="rose">
            A{' '}
            <span className="font-mono text-[10px] text-foreground/80">.then</span> that re-queues
            itself forever starves everything: timers, I/O and even rendering wait while microtasks
            keep the thread busy. Break long work into macrotasks — or hand it to a Worker thread
            (Flanagan Ch 15.12) — to let the page breathe.
          </RuleCard>
        </div>
      </div>
    </MotionConfig>
  )
}
