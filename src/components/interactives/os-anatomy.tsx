'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  CircuitBoard,
  Info,
  Lightbulb,
  MemoryStick,
  Pause,
  Play,
  RotateCcw,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  model — computer-system anatomy (OSC 10th ed, Ch 1 + Ch 12)        */
/* ------------------------------------------------------------------ */

type CompId = 'cpu' | 'cores' | 'registers' | 'mmu' | 'modebit' | 'intr' | 'bus' | 'memory' | 'dma' | 'usb' | 'hdd' | 'ssd' | 'gpu'
type CpuMode = 'user' | 'kernel'
type RouteId = 'mem-cpu' | 'cpu-mem' | 'usb-cpu' | 'cpu-usb' | 'cpu-dma' | 'ssd-dma' | 'dma-mem' | 'cpu-hdd'
type WalkKey = 'cycle' | 'dma' | 'trap'
type Metric = 'size' | 'speed' | 'cost'

interface PacketDef {
  route: RouteId
  color?: string
  loop?: boolean
  delay?: number
}

interface WalkStep {
  caption: string
  hl?: CompId[]
  mode?: CpuMode
  trap?: boolean
  cpuBusy?: boolean
  dmaDest?: boolean
  interrupts?: number
  packets?: PacketDef[]
}

interface Walk {
  title: string
  steps: WalkStep[]
}

const INFO: Record<CompId, { name: string; group: string; role: string; facts: string[] }> = {
  cpu: {
    name: 'CPU (processor)',
    group: 'compute',
    role: 'The central processing unit — the only hardware that executes instructions.',
    facts: [
      'Runs the fetch–decode–execute cycle; the program counter (PC) points at the next instruction to fetch.',
      'Multiple cores on one die act as several CPUs, running processes in true parallel.',
      'Distinguishes kernel mode from user mode with a mode bit — the root of all OS protection.',
      'Polls interrupt lines between instructions, so hardware can redirect it at almost any moment.',
    ],
  },
  cores: {
    name: 'Cores',
    group: 'compute',
    role: 'Independent execution engines sharing one CPU package.',
    facts: [
      'Each core keeps its own PC and register set — a complete hardware context.',
      'Cores share main memory and the bus, so the OS must coordinate them.',
      'A multicore CPU gives the scheduler several CPUs to place ready processes on.',
    ],
  },
  registers: {
    name: 'Registers',
    group: 'compute',
    role: 'A handful of on-chip words — the fastest storage in the machine.',
    facts: [
      'PC: address of the next instruction. IR: the instruction being decoded.',
      'Base and limit registers bracket a process’s legal memory range, checked by hardware on every access.',
      'Access is sub-nanosecond — over 100× faster than main memory.',
      'The register set is exactly what a context switch must save and restore.',
    ],
  },
  mmu: {
    name: 'MMU (memory-management unit)',
    group: 'compute',
    role: 'Hardware that translates every memory reference from virtual to physical.',
    facts: [
      'Sits between the CPU and the bus; every load and store passes through it.',
      'Enforces protection: an access outside the process range traps to the OS.',
      'The OS loads the mappings (page tables, base/limit) — but only from kernel mode.',
    ],
  },
  modebit: {
    name: 'Mode bit',
    group: 'protection',
    role: 'One bit that separates user code from the operating system.',
    facts: [
      '0 = user mode: privileged instructions (I/O, halt, mask interrupts) are illegal and trap.',
      '1 = kernel mode: full privilege — every instruction is allowed.',
      'Flips to kernel on traps, interrupts and exceptions; back to user on return.',
      'Distinguishing execution modes is the foundation of OS protection.',
    ],
  },
  intr: {
    name: 'Interrupt logic',
    group: 'protection',
    role: 'The CPU machinery that lets devices grab its attention between instructions.',
    facts: [
      'Controllers assert interrupt lines; the CPU polls them after each instruction.',
      'Vectored interrupts: the interrupt-vector table (set at boot) maps each line to its handler.',
      'The CPU saves just enough state to resume, then jumps to the handler.',
      'Interrupts are why the CPU can run user code while a disk transfer is in flight.',
    ],
  },
  bus: {
    name: 'System bus',
    group: 'interconnect',
    role: 'The shared wires that connect CPU, memory and every device controller.',
    facts: [
      'Three groups of lines: address (where), data (what) and control (when and how).',
      'Shared and arbitrated — only one sender may drive the data lines at a time.',
      'Bus bandwidth is a whole-system bottleneck; DMA controllers and GPUs compete with the CPU for it.',
    ],
  },
  memory: {
    name: 'Main memory (DRAM)',
    group: 'storage',
    role: 'Volatile working storage holding the OS and every running process.',
    facts: [
      'The CPU executes only instructions and data that live in main memory (or registers).',
      'Divided into frames that hold OS pages and user processes side by side.',
      'Volatile — power loss erases it, which is why disks and SSDs exist.',
      'Gigabytes: about a million times the registers, but roughly 100× slower.',
    ],
  },
  dma: {
    name: 'DMA controller',
    group: 'interconnect',
    role: 'Direct memory access — moves whole blocks without the CPU.',
    facts: [
      'The OS programs it with a source, a destination and a word count, then walks away.',
      'It takes over the bus and streams data directly between device and memory.',
      'Cycle stealing: it borrows bus cycles between the CPU’s own transfers.',
      'Raises ONE interrupt when the whole block is done — not one interrupt per word.',
    ],
  },
  usb: {
    name: 'USB controller',
    group: 'I/O',
    role: 'Device controller for the universal serial bus — keyboards, mice and friends.',
    facts: [
      'Devices attach and detach dynamically through ports (hot-pluggable).',
      'The controller runs the wire protocol; the driver talks only to its registers.',
      'Raises interrupts so the OS reacts to input instead of polling for it.',
    ],
  },
  hdd: {
    name: 'Hard disk drive (HDD)',
    group: 'I/O',
    role: 'Mechanical magnetic storage — cheap, huge, slow.',
    facts: [
      'Spinning platters and moving heads: seek plus rotational latency dominate (~milliseconds).',
      'Disk-scheduling algorithms (SSTF, SCAN, C-SCAN) exist purely to tame seek cost.',
      'Non-volatile and the cheapest online storage per byte.',
    ],
  },
  ssd: {
    name: 'NVM / SSD',
    group: 'I/O',
    role: 'Flash-based solid-state storage — no moving parts.',
    facts: [
      'No seek or rotation: random access is roughly 1000× faster than an HDD.',
      'Wear leveling and flash translation layers hide the erase-block physics.',
      'Faster but pricier per byte than magnetic disk — the middle rung of the storage ladder.',
    ],
  },
  gpu: {
    name: 'GPU',
    group: 'I/O',
    role: 'A massively parallel processor that happens to render pixels too.',
    facts: [
      'Thousands of simple cores — throughput hardware, not latency hardware.',
      'Has its own high-bandwidth memory attached directly to the board.',
      'General-purpose GPU computing now runs ML and scientific workloads (GPGPU).',
    ],
  },
}

/* ------------------------------------------------------------------ */
/*  walkthrough scripts                                                */
/* ------------------------------------------------------------------ */

const WALKS: Record<WalkKey, Walk> = {
  cycle: {
    title: 'Instruction cycle + interrupt',
    steps: [
      {
        caption:
          'Fetch — the program counter holds 0x0400. The CPU drives the address onto the bus and reads the instruction from main memory into the instruction register (IR).',
        hl: ['registers', 'memory', 'bus'],
        packets: [{ route: 'mem-cpu', color: '#34d399' }],
      },
      {
        caption: 'Decode — the control unit interprets the opcode now sitting in the IR: it learns which operands and which operation follow.',
        hl: ['registers', 'cpu'],
      },
      {
        caption:
          'Execute — the ALU computes and results land in registers. Then the loop repeats: fetch, decode, execute — billions of times per second.',
        hl: ['cpu', 'registers'],
        packets: [{ route: 'mem-cpu', loop: true, color: '#2dd4bf' }],
      },
      {
        caption:
          'Meanwhile the USB controller finishes a transfer and asserts its interrupt line — a voltage on a wire the CPU watches between instructions.',
        hl: ['usb', 'intr'],
      },
      {
        caption:
          'The CPU completes the current instruction first (interrupts are checked between instructions), then saves its state — PC and registers — so it can resume later.',
        hl: ['registers', 'intr'],
        mode: 'user',
      },
      {
        caption:
          'The mode bit flips to 1 — kernel mode — and the interrupt-vector table (in low memory) points the CPU at the handler. This is hardware redirecting software.',
        hl: ['modebit', 'intr', 'memory'],
        mode: 'kernel',
      },
      {
        caption: 'The handler runs in kernel mode: it reads the USB controller’s status register, services the device, and dismisses the interrupt.',
        hl: ['intr', 'usb'],
        mode: 'kernel',
        packets: [{ route: 'cpu-usb', color: '#fbbf24' }],
      },
      {
        caption:
          'Restore the saved state, flip the mode bit back to 0 (user mode) — the interrupted program resumes exactly where it left off, never knowing it paused.',
        hl: ['registers'],
        mode: 'user',
      },
    ],
  },
  dma: {
    title: 'DMA transfer',
    steps: [
      {
        caption:
          'The SSD has a 4 KB block ready. Without DMA the CPU would move it one word per instruction — 1024 instructions plus 1024 interrupts of pure overhead.',
        hl: ['ssd', 'cpu'],
      },
      {
        caption:
          'Instead the OS — already in kernel mode — programs the DMA controller with three numbers: source (device), destination (a memory frame), and count (1024 words).',
        hl: ['dma', 'memory'],
        packets: [{ route: 'cpu-dma', color: '#34d399' }],
      },
      {
        caption:
          'The DMA controller takes command of the bus and streams bursts: SSD to DMA to memory. The CPU keeps executing user code the whole time.',
        hl: ['dma', 'bus', 'memory', 'ssd'],
        cpuBusy: true,
        dmaDest: true,
        packets: [
          { route: 'ssd-dma', loop: true },
          { route: 'dma-mem', loop: true, delay: 0.5 },
        ],
      },
      {
        caption:
          'Burst after burst — cycle stealing: the DMA controller borrows bus cycles between the CPU’s own transfers, so neither waits for the other. The count ticks down: 1024 … 512 … 0.',
        hl: ['dma', 'memory'],
        cpuBusy: true,
        dmaDest: true,
        packets: [{ route: 'dma-mem', loop: true }],
      },
      {
        caption: 'Count hits zero. The DMA controller raises exactly ONE interrupt: transfer complete.',
        hl: ['dma', 'intr'],
        interrupts: 1,
      },
      {
        caption:
          'The handler just verifies the result. One interrupt instead of 1024 — and the CPU spent the entire transfer doing useful user work.',
        hl: ['intr', 'memory'],
        interrupts: 1,
      },
    ],
  },
  trap: {
    title: 'Privileged instruction trap',
    steps: [
      {
        caption: 'A user process executes an I/O instruction — read from disk. But I/O instructions are privileged: they may run only in kernel mode.',
        hl: ['cpu', 'registers'],
        mode: 'user',
      },
      {
        caption: 'The mode bit reads 0 — user mode — so the hardware refuses the instruction and raises a trap into the operating system.',
        hl: ['modebit', 'cpu'],
        mode: 'kernel',
        trap: true,
      },
      {
        caption:
          'Exactly like an interrupt: the process state is saved, the mode bit switches to 1 (kernel mode), and the vector table dispatches the OS trap handler.',
        hl: ['intr', 'modebit', 'memory'],
        mode: 'kernel',
        trap: true,
      },
      {
        caption: 'Now privileged: the OS performs the I/O on the process’s behalf — this is precisely what happens inside a system call.',
        hl: ['cpu', 'hdd'],
        mode: 'kernel',
        packets: [{ route: 'cpu-hdd', color: '#fbbf24' }],
      },
      {
        caption: 'Return from trap: the saved state is restored, the mode bit drops back to 0, and the process continues at the next instruction.',
        hl: ['registers'],
        mode: 'user',
      },
    ],
  },
}

const WALK_ORDER: WalkKey[] = ['cycle', 'dma', 'trap']

/* packet routes as polylines through the bus */
const ROUTES: Record<RouteId, number[][]> = {
  'mem-cpu': [
    [380, 104],
    [258, 104],
  ],
  'cpu-mem': [
    [258, 104],
    [380, 104],
  ],
  'usb-cpu': [
    [110, 406],
    [110, 369],
    [309, 369],
    [309, 104],
    [258, 104],
  ],
  'cpu-usb': [
    [258, 104],
    [309, 104],
    [309, 369],
    [110, 369],
    [110, 406],
  ],
  'cpu-dma': [
    [258, 124],
    [309, 124],
    [309, 296],
    [336, 296],
  ],
  'ssd-dma': [
    [374, 406],
    [374, 342],
  ],
  'dma-mem': [
    [336, 296],
    [309, 296],
    [309, 104],
    [380, 104],
  ],
  'cpu-hdd': [
    [258, 164],
    [309, 164],
    [309, 369],
    [242, 369],
    [242, 406],
  ],
}

/* storage hierarchy ladder (approximate orders of magnitude) */
const LEVELS: { id: string; name: string; sizeLog: number; timeLog: number; costLog: number; size: string; speed: string; cost: string }[] = [
  { id: 'reg', name: 'Registers', sizeLog: 3, timeLog: -0.5, costLog: 7, size: '1 KB', speed: '0.3 ns', cost: 'on-die' },
  { id: 'cache', name: 'Cache (SRAM)', sizeLog: 7, timeLog: 0.7, costLog: 2, size: '16 MB', speed: '5 ns', cost: '$60/GB' },
  { id: 'dram', name: 'Main memory', sizeLog: 10, timeLog: 2, costLog: 0.5, size: '16 GB', speed: '100 ns', cost: '$3/GB' },
  { id: 'ssd', name: 'SSD (NVM)', sizeLog: 12, timeLog: 4.7, costLog: -1, size: '1 TB', speed: '50 μs', cost: '$0.10/GB' },
  { id: 'hdd', name: 'Hard disk', sizeLog: 13, timeLog: 6.9, costLog: -1.7, size: '10 TB', speed: '8 ms', cost: '$0.02/GB' },
  { id: 'tape', name: 'Tape', sizeLog: 15, timeLog: 10, costLog: -2.3, size: '1 PB', speed: '30 s', cost: '$0.005/GB' },
]

const METRIC_INFO: Record<Metric, { min: number; max: number; label: string; bar: string; hint: string }> = {
  size: { min: 3, max: 15, label: 'capacity', bar: 'bg-emerald-500/80', hint: 'bigger bar = more bytes (log scale)' },
  speed: { min: -0.5, max: 10, label: 'access time', bar: 'bg-amber-500/80', hint: 'longer bar = slower (log scale)' },
  cost: { min: -2.3, max: 7, label: 'cost per GB', bar: 'bg-teal-500/80', hint: 'longer bar = pricier (log scale)' },
}

/* ------------------------------------------------------------------ */
/*  small helpers                                                      */
/* ------------------------------------------------------------------ */

interface Vis {
  stroke: string
  sw: number
  fill: string
  pulse: boolean
}

function Hotspot({
  id,
  desc,
  selected,
  hl,
  trap,
  reduced,
  onSelect,
  children,
}: {
  id: CompId
  desc: string
  selected: CompId
  hl: readonly CompId[] | undefined
  trap: boolean
  reduced: boolean
  onSelect: (id: CompId) => void
  children: (v: Vis) => ReactNode
}) {
  const isSel = selected === id
  const isHl = hl?.includes(id) ?? false
  const v: Vis = isSel
    ? { stroke: '#34d399', sw: 2.4, fill: 'rgba(16,185,129,0.10)', pulse: isHl && !reduced }
    : isHl
      ? { stroke: trap ? '#fb7185' : '#fbbf24', sw: 2.4, fill: trap ? 'rgba(244,63,94,0.10)' : 'rgba(245,158,11,0.10)', pulse: !reduced }
      : { stroke: '#52525b', sw: 1.5, fill: 'var(--color-card, #18181b)', pulse: false }
  return (
    <g
      role="button"
      tabIndex={0}
      aria-pressed={isSel}
      aria-label={desc}
      onClick={() => onSelect(id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(id)
        }
      }}
      className="group cursor-pointer outline-none focus-visible:brightness-150"
    >
      {children(v)}
    </g>
  )
}

/** Animated data packet sliding along a polyline route (rAF-driven). */
function Packet({
  route,
  color = '#2dd4bf',
  dur = 1.3,
  delay = 0,
  loop = false,
  reduced = false,
}: {
  route: number[][]
  color?: string
  dur?: number
  delay?: number
  loop?: boolean
  reduced?: boolean
}) {
  const ref = useRef<SVGCircleElement>(null)
  const geom = useMemo(() => {
    const lens: number[] = [0]
    let total = 0
    for (let i = 1; i < route.length; i++) {
      total += Math.hypot(route[i][0] - route[i - 1][0], route[i][1] - route[i - 1][1])
      lens.push(total)
    }
    return { lens, total }
  }, [route])

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    let raf = 0
    let start: number | null = null
    const cycle = dur * 1000 + 350
    const tick = (now: number) => {
      if (start === null) start = now
      const elapsed = now - start
      const cyc = loop ? elapsed % cycle : Math.min(elapsed, dur * 1000)
      const d = Math.min(1, (dur * 1000 > 0 ? cyc / (dur * 1000) : 1)) * geom.total
      let i = 1
      while (i < route.length - 1 && geom.lens[i] < d) i++
      const l0 = geom.lens[i - 1]
      const l1 = geom.lens[i]
      const f = l1 > l0 ? (d - l0) / (l1 - l0) : 1
      const x = route[i - 1][0] + (route[i][0] - route[i - 1][0]) * f
      const y = route[i - 1][1] + (route[i][1] - route[i - 1][1]) * f
      el.setAttribute('cx', String(x))
      el.setAttribute('cy', String(y))
      if (loop || elapsed < dur * 1000) raf = requestAnimationFrame(tick)
    }
    const timeout = window.setTimeout(() => {
      raf = requestAnimationFrame(tick)
    }, delay * 1000)
    return () => {
      window.clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [route, dur, delay, loop, reduced, geom])

  if (reduced) {
    const mid = route[Math.max(0, Math.floor(route.length / 2) - 1)]
    return <circle cx={mid[0]} cy={mid[1]} r={5} fill={color} opacity={0.9} pointerEvents="none" />
  }
  return <circle ref={ref} r={6} fill={color} stroke="#022c22" strokeWidth={1.5} opacity={0.95} pointerEvents="none" />
}

/* ------------------------------------------------------------------ */
/*  main component                                                     */
/* ------------------------------------------------------------------ */

export default function OsAnatomy() {
  const reduced = useReducedMotion() ?? false

  const [selected, setSelected] = useState<CompId>('cpu')
  const [walkKey, setWalkKey] = useState<WalkKey | null>(null)
  const [walkIdx, setWalkIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [metric, setMetric] = useState<Metric>('size')
  const [hover, setHover] = useState<number | null>(null)

  const walk = walkKey ? WALKS[walkKey] : null
  const atEnd = walk ? walkIdx >= walk.steps.length - 1 : false
  const isPlaying = playing && !atEnd
  const step = walk ? walk.steps[Math.min(walkIdx, walk.steps.length - 1)] : undefined
  const stepHl = step?.hl
  const trap = step?.trap ?? false
  const cpuMode: CpuMode = step?.mode ?? 'user'

  /* auto-play the walkthrough (state changes happen inside the timeout) */
  useEffect(() => {
    if (!playing || !walk || walkIdx >= walk.steps.length - 1) return
    const t = window.setTimeout(() => setWalkIdx((i) => i + 1), 2600)
    return () => window.clearTimeout(t)
  }, [playing, walk, walkIdx])

  const selectWalk = (k: WalkKey) => {
    setWalkKey(k)
    setWalkIdx(0)
    setPlaying(true)
  }

  const togglePlay = () => {
    if (atEnd) {
      setWalkIdx(0)
      setPlaying(true)
    } else {
      setPlaying((p) => !p)
    }
  }

  const info = INFO[selected]

  const logBar = (v: number): number => {
    const m = METRIC_INFO[metric]
    return 8 + 92 * ((v - m.min) / (m.max - m.min || 1))
  }

  const hoverPair =
    hover !== null && hover >= 0 && hover < LEVELS.length - 1
      ? {
          a: LEVELS[hover],
          b: LEVELS[hover + 1],
          dSize: Math.round(LEVELS[hover + 1].sizeLog - LEVELS[hover].sizeLog),
          dTime: Math.round(LEVELS[hover + 1].timeLog - LEVELS[hover].timeLog),
        }
      : null

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      {/* header */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <CircuitBoard className="h-5 w-5 text-emerald-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground">Computer-System Anatomy</h3>
          <p className="mt-0.5 max-w-2xl text-sm text-muted-foreground">
            Ch 1 &amp; 12 — click any block to inspect it, run guided walkthroughs of interrupt handling, DMA and
            privileged traps, and weigh the storage ladder’s tradeoffs.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        {/* ---------------- left: diagram + walkthroughs ---------------- */}
        <div className="flex flex-col gap-4 lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Block diagram</span>
              <span className="text-[11px] text-muted-foreground">click a block for details</span>
            </div>
            <div className="p-2">
              <svg viewBox="0 0 620 532" className="mx-auto h-auto w-full max-w-[560px]" aria-label="computer system block diagram">
                {/* ---------------- system bus ---------------- */}
                <Hotspot
                  id="bus"
                  desc="System bus — shared address, data and control lines connecting CPU, memory and devices. Select for details."
                  selected={selected}
                  hl={stepHl}
                  trap={trap}
                  reduced={reduced}
                  onSelect={setSelected}
                >
                  {(v) => (
                    <g className={v.pulse ? 'animate-pulse' : ''}>
                      <rect x={300} y={44} width={18} height={328} rx={4} fill="rgba(45,212,191,0.10)" stroke={v.stroke} strokeWidth={v.sw} />
                      <rect x={56} y={360} width={528} height={18} rx={4} fill="rgba(45,212,191,0.10)" stroke={v.stroke} strokeWidth={v.sw} />
                      <line x1={258} y1={84} x2={300} y2={84} stroke="#0d9488" strokeWidth={2} />
                      <line x1={258} y1={124} x2={300} y2={124} stroke="#0d9488" strokeWidth={2} />
                      <line x1={258} y1={164} x2={300} y2={164} stroke="#0d9488" strokeWidth={2} />
                      <line x1={318} y1={84} x2={380} y2={84} stroke="#0d9488" strokeWidth={2} />
                      <line x1={318} y1={124} x2={380} y2={124} stroke="#0d9488" strokeWidth={2} />
                      <line x1={318} y1={164} x2={380} y2={164} stroke="#0d9488" strokeWidth={2} />
                      <line x1={318} y1={296} x2={336} y2={296} stroke="#0d9488" strokeWidth={2} />
                      <line x1={110} y1={378} x2={110} y2={410} stroke="#0d9488" strokeWidth={2} />
                      <line x1={242} y1={378} x2={242} y2={410} stroke="#0d9488" strokeWidth={2} />
                      <line x1={374} y1={378} x2={374} y2={410} stroke="#0d9488" strokeWidth={2} />
                      <line x1={506} y1={378} x2={506} y2={410} stroke="#0d9488" strokeWidth={2} />
                      <text transform="rotate(-90 309 206)" x={309} y={206} textAnchor="middle" fontSize={10} className="fill-teal-300/90 font-mono">
                        system bus
                      </text>
                      <text x={60} y={352} fontSize={9} className="fill-teal-300/60 font-mono">
                        address · data · control lines
                      </text>
                    </g>
                  )}
                </Hotspot>

                {/* ---------------- CPU box (background) ---------------- */}
                <Hotspot
                  id="cpu"
                  desc="CPU — central processing unit, executes every instruction. Select for details."
                  selected={selected}
                  hl={stepHl}
                  trap={trap}
                  reduced={reduced}
                  onSelect={setSelected}
                >
                  {(v) => (
                    <g className={v.pulse ? 'animate-pulse' : ''}>
                      <rect x={36} y={44} width={222} height={196} rx={10} fill={v.fill} stroke={v.stroke} strokeWidth={v.sw} />
                      <text x={48} y={68} fontSize={13} fontWeight={700} className="fill-foreground font-mono">
                        CPU
                      </text>
                    </g>
                  )}
                </Hotspot>

                {/* cores */}
                <Hotspot
                  id="cores"
                  desc="Cores — independent execution engines, each with its own PC and registers. Select for details."
                  selected={selected}
                  hl={stepHl}
                  trap={trap}
                  reduced={reduced}
                  onSelect={setSelected}
                >
                  {(v) => (
                    <g className={v.pulse ? 'animate-pulse' : ''}>
                      <rect x={48} y={84} width={96} height={34} rx={6} fill={v.fill} stroke={v.stroke} strokeWidth={v.sw} />
                      <rect x={154} y={84} width={96} height={34} rx={6} fill={v.fill} stroke={v.stroke} strokeWidth={v.sw} />
                      <text x={96} y={105} textAnchor="middle" fontSize={10.5} className="fill-zinc-300 font-mono">
                        core 0
                      </text>
                      <text x={202} y={105} textAnchor="middle" fontSize={10.5} className="fill-zinc-300 font-mono">
                        core 1
                      </text>
                    </g>
                  )}
                </Hotspot>

                {/* registers */}
                <Hotspot
                  id="registers"
                  desc="Registers — PC, IR, R0, SP: the fastest storage in the machine. Select for details."
                  selected={selected}
                  hl={stepHl}
                  trap={trap}
                  reduced={reduced}
                  onSelect={setSelected}
                >
                  {(v) => (
                    <g className={v.pulse ? 'animate-pulse' : ''}>
                      <text x={50} y={128} fontSize={8} className="fill-zinc-500 font-mono uppercase">
                        registers
                      </text>
                      <rect x={50} y={132} width={46} height={30} rx={5} fill={v.fill} stroke={v.stroke} strokeWidth={v.sw} />
                      <rect x={102} y={132} width={46} height={30} rx={5} fill={v.fill} stroke={v.stroke} strokeWidth={v.sw} />
                      <rect x={154} y={132} width={46} height={30} rx={5} fill={v.fill} stroke={v.stroke} strokeWidth={v.sw} />
                      <rect x={206} y={132} width={46} height={30} rx={5} fill={v.fill} stroke={v.stroke} strokeWidth={v.sw} />
                      {['PC', 'IR', 'R0', 'SP'].map((r, i) => (
                        <text key={r} x={73 + i * 52} y={151} textAnchor="middle" fontSize={9} className="fill-zinc-300 font-mono">
                          {r}
                        </text>
                      ))}
                    </g>
                  )}
                </Hotspot>

                {/* MMU */}
                <Hotspot
                  id="mmu"
                  desc="MMU — memory-management unit translating virtual to physical addresses. Select for details."
                  selected={selected}
                  hl={stepHl}
                  trap={trap}
                  reduced={reduced}
                  onSelect={setSelected}
                >
                  {(v) => (
                    <g className={v.pulse ? 'animate-pulse' : ''}>
                      <rect x={48} y={170} width={100} height={52} rx={6} fill={v.fill} stroke={v.stroke} strokeWidth={v.sw} />
                      <text x={98} y={192} textAnchor="middle" fontSize={11} fontWeight={700} className="fill-zinc-200 font-mono">
                        MMU
                      </text>
                      <text x={98} y={207} textAnchor="middle" fontSize={8} className="fill-zinc-500 font-mono">
                        VA → PA
                      </text>
                    </g>
                  )}
                </Hotspot>

                {/* interrupt logic */}
                <Hotspot
                  id="intr"
                  desc="Interrupt logic — lets devices signal the CPU between instructions. Select for details."
                  selected={selected}
                  hl={stepHl}
                  trap={trap}
                  reduced={reduced}
                  onSelect={setSelected}
                >
                  {(v) => (
                    <g className={v.pulse ? 'animate-pulse' : ''}>
                      <rect x={158} y={170} width={92} height={52} rx={6} fill={v.fill} stroke={v.stroke} strokeWidth={v.sw} />
                      <text x={204} y={192} textAnchor="middle" fontSize={10} className="fill-zinc-200 font-mono">
                        interrupt
                      </text>
                      <text x={204} y={206} textAnchor="middle" fontSize={10} className="fill-zinc-200 font-mono">
                        logic
                      </text>
                    </g>
                  )}
                </Hotspot>

                {/* mode bit */}
                <g>
                  <motion.rect
                    key={`mode-${cpuMode}-${trap ? 'trap' : 'n'}`}
                    x={166}
                    y={52}
                    width={84}
                    height={22}
                    rx={11}
                    fill={cpuMode === 'kernel' ? 'rgba(244,63,94,0.15)' : 'rgba(16,185,129,0.12)'}
                    stroke={cpuMode === 'kernel' ? '#fb7185' : '#34d399'}
                    strokeWidth={1.6}
                    initial={reduced ? false : { opacity: 0.15 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.45 }}
                  />
                  <text
                    x={208}
                    y={66.5}
                    textAnchor="middle"
                    fontSize={9}
                    className={cpuMode === 'kernel' ? 'fill-rose-300 font-mono' : 'fill-emerald-300 font-mono'}
                  >
                    mode: {cpuMode}
                  </text>
                </g>

                {/* memory */}
                <Hotspot
                  id="memory"
                  desc="Main memory — DRAM holding the OS kernel and user process frames. Select for details."
                  selected={selected}
                  hl={stepHl}
                  trap={trap}
                  reduced={reduced}
                  onSelect={setSelected}
                >
                  {(v) => (
                    <g className={v.pulse ? 'animate-pulse' : ''}>
                      <rect x={380} y={44} width={204} height={196} rx={10} fill={v.fill} stroke={v.stroke} strokeWidth={v.sw} />
                      <text x={392} y={66} fontSize={12} fontWeight={700} className="fill-foreground font-mono">
                        main memory
                      </text>
                      <rect x={392} y={78} width={180} height={22} rx={4} fill="rgba(16,185,129,0.12)" stroke="#0f766e" strokeWidth={1} />
                      <text x={400} y={92} fontSize={9} className="fill-emerald-200/80 font-mono">
                        OS kernel
                      </text>
                      <rect x={392} y={105} width={180} height={22} rx={4} fill="rgba(16,185,129,0.12)" stroke="#0f766e" strokeWidth={1} />
                      <text x={400} y={119} fontSize={9} className="fill-emerald-200/80 font-mono">
                        OS data
                      </text>
                      <rect
                        x={392}
                        y={132}
                        width={180}
                        height={22}
                        rx={4}
                        fill={step?.dmaDest ? 'rgba(245,158,11,0.14)' : 'rgba(45,212,191,0.10)'}
                        stroke={step?.dmaDest ? '#fbbf24' : '#0d9488'}
                        strokeWidth={step?.dmaDest ? 1.6 : 1}
                        className={step?.dmaDest && !reduced ? 'animate-pulse' : ''}
                      />
                      <text x={400} y={146} fontSize={9} className={step?.dmaDest ? 'fill-amber-200/90 font-mono' : 'fill-teal-200/80 font-mono'}>
                        user process
                      </text>
                      {[
                        { y: 159, label: 'free frame' },
                        { y: 186, label: 'free frame' },
                        { y: 213, label: 'free frame' },
                      ].map((r) => (
                        <g key={r.y}>
                          <rect x={392} y={r.y} width={180} height={22} rx={4} fill="rgba(63,63,70,0.25)" stroke="#3f3f46" strokeWidth={1} />
                          <text x={400} y={r.y + 14} fontSize={9} className="fill-zinc-500 font-mono">
                            {r.label}
                          </text>
                        </g>
                      ))}
                    </g>
                  )}
                </Hotspot>

                {/* DMA controller */}
                <Hotspot
                  id="dma"
                  desc="DMA controller — programmed by the OS to move blocks between device and memory without the CPU. Select for details."
                  selected={selected}
                  hl={stepHl}
                  trap={trap}
                  reduced={reduced}
                  onSelect={setSelected}
                >
                  {(v) => (
                    <g className={v.pulse ? 'animate-pulse' : ''}>
                      <rect x={336} y={256} width={248} height={80} rx={8} fill={v.fill} stroke={v.stroke} strokeWidth={v.sw} />
                      <text x={348} y={278} fontSize={12} fontWeight={700} className="fill-foreground font-mono">
                        DMA controller
                      </text>
                      <text x={348} y={296} fontSize={9} className="fill-zinc-400">
                        direct memory access — moves data without the CPU
                      </text>
                      <text x={348} y={318} fontSize={10} className="fill-amber-300/90 font-mono">
                        src → dst · count
                      </text>
                    </g>
                  )}
                </Hotspot>

                {/* devices */}
                {(
                  [
                    { id: 'usb' as CompId, x: 56, title: 'USB controller', c1: 'ports: keyboard', c2: 'mouse · hot-plug' },
                    { id: 'hdd' as CompId, x: 188, title: 'HDD', c1: 'platters + heads', c2: 'seek + rotation' },
                    { id: 'ssd' as CompId, x: 320, title: 'NVM / SSD', c1: 'flash memory', c2: 'no moving parts' },
                    { id: 'gpu' as CompId, x: 452, title: 'GPU', c1: 'thousands of', c2: 'parallel cores' },
                  ]
                ).map((d) => (
                  <Hotspot
                    key={d.id}
                    id={d.id}
                    desc={`${d.title} — device controller on the system bus. Select for details.`}
                    selected={selected}
                    hl={stepHl}
                    trap={trap}
                    reduced={reduced}
                    onSelect={setSelected}
                  >
                    {(v) => (
                      <g className={v.pulse ? 'animate-pulse' : ''}>
                        <rect x={d.x} y={410} width={108} height={90} rx={8} fill={v.fill} stroke={v.stroke} strokeWidth={v.sw} />
                        <text x={d.x + 54} y={446} textAnchor="middle" fontSize={11.5} fontWeight={700} className="fill-foreground font-mono">
                          {d.title}
                        </text>
                        <text x={d.x + 54} y={466} textAnchor="middle" fontSize={8.5} className="fill-zinc-400">
                          {d.c1}
                        </text>
                        <text x={d.x + 54} y={481} textAnchor="middle" fontSize={8.5} className="fill-zinc-400">
                          {d.c2}
                        </text>
                      </g>
                    )}
                  </Hotspot>
                ))}

                {/* CPU busy badge (DMA walkthrough) */}
                {step?.cpuBusy && (
                  <g>
                    <rect x={62} y={248} width={170} height={24} rx={12} fill="rgba(16,185,129,0.12)" stroke="#34d399" strokeWidth={1.2} />
                    <text x={147} y={264} textAnchor="middle" fontSize={10} className="fill-emerald-300 font-mono">
                      CPU: executing user code
                    </text>
                  </g>
                )}

                {/* packets */}
                {step?.packets?.map((p, i) => (
                  <Packet
                    key={`${walkKey}-${walkIdx}-${i}`}
                    route={ROUTES[p.route]}
                    color={p.color}
                    loop={p.loop}
                    delay={p.delay ?? i * 0.35}
                    reduced={reduced}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* walkthroughs */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <Zap className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Guided walkthroughs</span>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex flex-wrap gap-1.5">
                {WALK_ORDER.map((k) => (
                  <button
                    key={k}
                    onClick={() => selectWalk(k)}
                    aria-pressed={walkKey === k}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      walkKey === k
                        ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300'
                        : 'border-border bg-muted/40 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
                    }`}
                  >
                    {WALKS[k].title}
                  </button>
                ))}
              </div>

              {walk && step ? (
                <>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button size="sm" variant="outline" onClick={() => setWalkIdx((i) => Math.max(0, i - 1))} disabled={walkIdx === 0} aria-label="Previous step">
                      <ChevronLeft className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-500"
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Pause walkthrough' : 'Play walkthrough'}
                    >
                      {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                      {isPlaying ? 'Pause' : 'Play'}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setWalkIdx((i) => Math.min(walk.steps.length - 1, i + 1))}
                      disabled={walkIdx >= walk.steps.length - 1}
                      aria-label="Next step"
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setWalkIdx(0)} aria-label="Restart walkthrough">
                      <RotateCcw className="h-3.5 w-3.5" />
                    </Button>
                    <span className="ml-auto font-mono text-[11px] text-muted-foreground">
                      step {walkIdx + 1} / {walk.steps.length}
                    </span>
                  </div>
                  <div className="min-h-[4.5rem] rounded-lg border border-border bg-muted/30 px-3.5 py-3" aria-live="polite">
                    <p className="text-sm leading-relaxed text-foreground/90">{step.caption}</p>
                    {step.interrupts !== undefined && (
                      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold text-amber-300">
                        <Zap className="h-3 w-3" />
                        interrupts: {step.interrupts} (would be 1024 word-by-word)
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Pick a walkthrough — the diagram animates while the caption narrates each step: fetch–decode–execute
                  with an interrupt in the middle, a DMA transfer that bypasses the CPU, or a privileged instruction
                  trapping into the kernel.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ---------------- right: detail + storage ladder ---------------- */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <Info className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Component detail</span>
            </div>
            <div className="p-4">
              <AnimatePresence mode="wait">
                <motion.div key={selected} initial={reduced ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-foreground">{info.name}</h4>
                    <span className="rounded-md border border-border bg-muted/40 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {info.group}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-emerald-200/80">{info.role}</p>
                  <ul className="mt-3 space-y-1.5">
                    {info.facts.map((f) => (
                      <li key={f} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* storage hierarchy */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <MemoryStick className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Storage hierarchy</span>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-1.5" role="group" aria-label="storage metric">
                {(['size', 'speed', 'cost'] as Metric[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMetric(m)}
                    aria-pressed={metric === m}
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                      metric === m
                        ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300'
                        : 'border-border bg-muted/40 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {METRIC_INFO[m].label}
                  </button>
                ))}
              </div>

              <div className="mt-3 flex flex-col gap-1">
                {LEVELS.map((l, i) => (
                  <button
                    key={l.id}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover(i)}
                    onBlur={() => setHover(null)}
                    aria-label={`${l.name}: ${l.size}, access in ${l.speed}, ${l.cost === 'on-die' ? 'part of the CPU die' : l.cost + ' per gigabyte'}`}
                    className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-left transition-colors ${
                      hover === i ? 'bg-emerald-500/10 ring-1 ring-emerald-500/40' : 'hover:bg-muted/40'
                    }`}
                  >
                    <span className="w-24 shrink-0 truncate text-[11px] font-medium text-foreground/90 sm:w-28">{l.name}</span>
                    <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted/60">
                      <span
                        className={`block h-full rounded-full transition-all ${METRIC_INFO[metric].bar}`}
                        style={{ width: `${logBar(metric === 'size' ? l.sizeLog : metric === 'speed' ? l.timeLog : l.costLog)}%` }}
                      />
                    </span>
                    <span className="w-16 shrink-0 text-right font-mono text-[10px] text-muted-foreground">
                      {metric === 'size' ? l.size : metric === 'speed' ? l.speed : l.cost}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-3 rounded-lg bg-muted/30 px-3 py-2.5 text-[11px] leading-relaxed text-muted-foreground">
                {hoverPair ? (
                  <span className="text-amber-200/90">
                    {hoverPair.a.name} → {hoverPair.b.name}: about <TeX tex={`10^{${hoverPair.dSize}}\\times`} /> more
                    capacity for <TeX tex={`10^{${hoverPair.dTime}}\\times`} /> more latency — that is the tradeoff.
                  </span>
                ) : (
                  <span>
                    Fastest on top, biggest at the bottom. Registers → main memory spans roughly{' '}
                    <TeX tex={'10^{6}\\times'} /> in size (KB → GB); every level down is bigger, slower per byte and
                    cheaper. Bars are logarithmic — a few pixels can mean an order of magnitude.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* try this */}
      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> run the DMA walkthrough and watch the CPU keep
          executing user code while data streams past it on the bus — one interrupt at the end. Then run the trap
          walkthrough and watch the mode bit snap to kernel (red) and back. Finally, click the mode bit itself to see
          exactly which privileges it guards.
        </p>
      </div>
    </div>
  )
}
