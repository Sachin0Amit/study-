'use client'

/**
 * LabsFloor (X5) — the Virtual Laboratory Floor entry point.
 * A grid of lab cards that switches to a full lab view (max-w-5xl, back button).
 * All engines are lazy-loaded; each runs real client-side computation.
 */

import { lazy, Suspense, useState } from 'react'
import type { ComponentType } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  AudioWaveform,
  Braces,
  CircuitBoard,
  Cpu,
  Database,
  FlaskConical,
  Loader2,
  Rocket,
  Trophy,
} from 'lucide-react'
import { RING, type LabMeta } from './types'

const LAB_COMPONENTS: Record<string, ComponentType> = {
  circuit: lazy(() => import('./circuit-lab')),
  signals: lazy(() => import('./signals-lab')),
  os: lazy(() => import('./os-lab')),
  cache: lazy(() => import('./cache-lab')),
  compiler: lazy(() => import('./compiler-lab')),
  mechanics: lazy(() => import('./mechanics-lab')),
  chem: lazy(() => import('./chem-lab')),
  judge: lazy(() => import('./judge-panel')),
}

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  'circuit-board': CircuitBoard,
  'audio-waveform': AudioWaveform,
  cpu: Cpu,
  database: Database,
  braces: Braces,
  rocket: Rocket,
  flask: FlaskConical,
  trophy: Trophy,
}

const LABS: LabMeta[] = [
  {
    id: 'circuit',
    title: 'Circuit Sandbox',
    icon: 'circuit-board',
    tagline: 'Wire resistors and sources between nodes — modified nodal analysis with a hand-rolled Gaussian solver.',
    subjectHint: 'Electronics',
  },
  {
    id: 'signals',
    title: 'Signals Workbench',
    icon: 'audio-waveform',
    tagline: 'Generators, convolution, windowed-sinc FIR and a radix-2 FFT on live canvases.',
    subjectHint: 'DSP',
  },
  {
    id: 'os',
    title: 'OS Scheduler & Paging',
    icon: 'cpu',
    tagline: 'FCFS / SJF / RR / priority Gantt charts plus step-through FIFO / LRU / Optimal paging.',
    subjectHint: 'Operating systems',
  },
  {
    id: 'cache',
    title: 'Cache Visualizer',
    icon: 'database',
    tagline: 'Set-associative LRU simulation with per-set heatmap and compulsory / capacity / conflict split.',
    subjectHint: 'Computer architecture',
  },
  {
    id: 'compiler',
    title: 'Compiler Pipeline',
    icon: 'braces',
    tagline: 'Lexer → recursive-descent parser → stack-machine codegen → step-through VM.',
    subjectHint: 'Languages',
  },
  {
    id: 'mechanics',
    title: 'Mechanics Sandbox',
    icon: 'rocket',
    tagline: 'RK4 projectile ballistics with target practice, a nonlinear pendulum vs its small-angle lie, and friction on an incline.',
    subjectHint: 'Physics',
  },
  {
    id: 'chem',
    title: 'Chemistry Bench',
    icon: 'flask',
    tagline: 'Eight classic reactions on an animated flask, a balance-the-equation mini-game, energy diagrams and a real ICE-table solver.',
    subjectHint: 'Chemistry',
  },
  // NOTE: the code judge lives in the standing "Code judge arena" section of
  // the playground (below the floor) — keeping it out of this catalog avoids
  // mounting two live judge instances at once.
]

function LabFallback() {
  return (
    <div className="flex h-48 items-center justify-center gap-2 text-sm text-muted-foreground">
      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> booting the engine…
    </div>
  )
}

export function LabsFloor() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = LABS.find((l) => l.id === activeId)

  return (
    <div>
      <AnimatePresence mode="wait">
        {active ? (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-5xl"
          >
            <button
              onClick={() => setActiveId(null)}
              className={`mb-4 inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground ${RING}`}
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> All labs
            </button>
            <div className="mb-5 flex items-center gap-3">
              {(() => {
                const Icon = ICONS[active.icon] ?? FlaskConical
                return (
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10">
                    <Icon className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                  </span>
                )
              })()}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold leading-tight">{active.title}</h3>
                  <span className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {active.subjectHint}
                  </span>
                </div>
                <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
                  {active.tagline}
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/70 p-4 sm:p-6">
              <Suspense fallback={<LabFallback />}>
                {activeId && LAB_COMPONENTS[activeId] && (() => {
                  const Lab = LAB_COMPONENTS[activeId]
                  return <Lab />
                })()}
              </Suspense>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {LABS.map((lab, i) => {
              const Icon = ICONS[lab.icon] ?? FlaskConical
              return (
                <motion.button
                  key={lab.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.06, 0.35) }}
                  onClick={() => setActiveId(lab.id)}
                  aria-label={`Open ${lab.title} lab`}
                  className={`group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-5 text-left transition-all hover:border-emerald-400/40 ${RING}`}
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl transition-opacity group-hover:opacity-70" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10">
                        <Icon className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                      </span>
                      <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {lab.subjectHint}
                      </span>
                    </div>
                    <h4 className="mt-3 text-base font-bold leading-snug">{lab.title}</h4>
                    <p className="mt-1.5 line-clamp-3 text-[12.5px] leading-relaxed text-muted-foreground">
                      {lab.tagline}
                    </p>
                    <span className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
                      Open lab
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { CircuitLab } from './circuit-lab'
export { SignalsLab } from './signals-lab'
export { OsLab } from './os-lab'
export { CacheLab } from './cache-lab'
export { CompilerLab } from './compiler-lab'
export { MechanicsLab } from './mechanics-lab'
export { ChemLab } from './chem-lab'
export { JudgePanel } from './judge-panel'
export type { LabMeta } from './types'

export default LabsFloor
