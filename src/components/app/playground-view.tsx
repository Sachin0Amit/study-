'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Dices, FlaskConical, X } from 'lucide-react'
import { INTERACTIVE_META, InteractiveTool } from '@/components/interactives/registry'
import { easyLabLine } from '@/data/easy-library'
import { EasyBox, EasyLine } from './easy-box'
import { useStudy } from '@/store/useStudy'

type SubjectKey = 'math' | 'physics' | 'chem' | 'os' | 'js' | 'dld' | 'elec' | 'cpp' | 'java'

interface LabGroup {
  subject: SubjectKey
  subjectLabel: string
  groupLabel: string
  keys: string[]
}

const LAB_GROUPS: LabGroup[] = [
  {
    subject: 'chem',
    subjectLabel: 'Chemistry',
    groupLabel: 'Physical & Inorganic Chemistry',
    keys: [
      'crystal-lattice-lab',
      'molecular-lab',
      'periodic-table-lab',
      'equilibrium-lab',
      'kinetics-lab',
      'gas-lab',
      'quantum-lab',
    ],
  },
  {
    subject: 'math',
    subjectLabel: 'Mathematics',
    groupLabel: 'Discrete & Logic — Rosen',
    keys: [
      'truth-table-lab',
      'venn-explorer',
      'sorting-visualizer',
      'gcd-stepper',
      'hanoi-tower',
      'counting-lab',
      'probability-lab',
      'recurrence-explorer',
      'relation-explorer',
      'graph-playground',
      'tree-traversal',
      'logic-gates',
      'fsm-simulator',
    ],
  },
  {
    subject: 'math',
    subjectLabel: 'Mathematics',
    groupLabel: 'Calculus — Stewart',
    keys: ['curve-lab', 'derivative-lab', 'riemann-lab', 'taylor-lab'],
  },
  {
    subject: 'physics',
    subjectLabel: 'Physics',
    groupLabel: 'Feynman Lectures I–III',
    keys: [
      'projectile-lab',
      'orbit-lab',
      'gas-lab',
      'wave-lab',
      'relativity-lab',
      'efield-lab',
      'em-wave-lab',
      'quantum-lab',
    ],
  },
  {
    subject: 'os',
    subjectLabel: 'Operating Systems',
    groupLabel: 'Silberschatz OSC',
    keys: [
      'os-anatomy',
      'process-lifecycle',
      'cpu-scheduler',
      'race-lab',
      'dining-philosophers',
      'bankers-algorithm',
      'paging-visualizer',
      'page-replacement',
      'disk-scheduler',
      'file-allocation',
    ],
  },
  {
    subject: 'js',
    subjectLabel: 'JavaScript',
    groupLabel: 'Flanagan, Definitive Guide',
    keys: ['js-playground', 'event-loop-lab'],
  },
  {
    subject: 'dld',
    subjectLabel: 'Digital Logic',
    groupLabel: 'Mano, Computer Design',
    keys: ['kmap-minimizer', 'sequential-lab'],
  },
  {
    subject: 'elec',
    subjectLabel: 'Electronics',
    groupLabel: 'Hughes + Nilsson + AoE',
    keys: [
      'breadboard-oscilloscope-sim',
      'dc-circuit-lab',
      'thevenin-lab',
      'transient-lab',
      'induction-lab',
      'phasor-lab',
      'fourier-lab',
      'diode-lab',
      'transistor-lab',
      'opamp-lab',
      'filter-lab',
      'oscillator-lab',
      'machine-lab',
      'converter-lab',
    ],
  },
  {
    subject: 'cpp',
    subjectLabel: 'C++ Programming',
    groupLabel: 'Stroustrup, The C++ Language',
    keys: ['cpp-playground'],
  },
  {
    subject: 'java',
    subjectLabel: 'Java Programming',
    groupLabel: 'Horstmann, Core Java',
    keys: ['java-playground'],
  },
]

const FILTERS: { key: 'all' | SubjectKey; label: string }[] = [
  { key: 'all', label: 'All subjects' },
  { key: 'chem', label: 'Chemistry' },
  { key: 'math', label: 'Mathematics' },
  { key: 'physics', label: 'Physics' },
  { key: 'os', label: 'Operating Systems' },
  { key: 'js', label: 'JavaScript' },
  { key: 'dld', label: 'Digital Logic' },
  { key: 'elec', label: 'Electronics' },
  { key: 'cpp', label: 'C++' },
  { key: 'java', label: 'Java' },
]

const TOTAL_LABS = LAB_GROUPS.reduce((n, g) => n + g.keys.length, 0)

const SUBJECT_ACCENT: Record<SubjectKey, string> = {
  chem: 'text-cyan-300/90 border-cyan-400/25 bg-cyan-400/[0.06]',
  math: 'text-emerald-300/90 border-emerald-400/25 bg-emerald-400/[0.06]',
  physics: 'text-teal-300/90 border-teal-400/25 bg-teal-400/[0.06]',
  os: 'text-amber-300/90 border-amber-400/25 bg-amber-400/[0.06]',
  js: 'text-yellow-300/90 border-yellow-400/25 bg-yellow-400/[0.06]',
  dld: 'text-rose-300/90 border-rose-400/25 bg-rose-400/[0.06]',
  elec: 'text-lime-300/90 border-lime-400/25 bg-lime-400/[0.06]',
  cpp: 'text-violet-300/90 border-violet-400/25 bg-violet-400/[0.06]',
  java: 'text-orange-300/90 border-orange-400/25 bg-orange-400/[0.06]',
}

function focusRing() {
  return 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
}

export function PlaygroundView() {
  const [active, setActive] = useState<string | null>('truth-table-lab')
  const [filter, setFilter] = useState<'all' | SubjectKey>('all')
  const easyMode = useStudy((s) => s.easyMode)

  const visibleGroups = useMemo(
    () =>
      filter === 'all'
        ? LAB_GROUPS
        : LAB_GROUPS.filter((g) => g.subject === filter),
    [filter],
  )
  const visibleCount = visibleGroups.reduce((n, g) => n + g.keys.length, 0)

  const openLab = (key: string) => {
    setActive(key)
    requestAnimationFrame(() => {
      document.getElementById('active-lab')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const surpriseMe = () => {
    const allKeys = LAB_GROUPS.flatMap((g) => g.keys)
    const pick = allKeys[Math.floor(Math.random() * allKeys.length)]
    openLab(pick)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative mb-8 overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8"
      >
        <div className="absolute inset-0 sv-hero-glow opacity-60" />
        <div className="absolute inset-0 sv-grid-bg opacity-25" />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-3.5 py-1.5 text-xs font-semibold text-amber-200">
              <FlaskConical className="h-3.5 w-3.5" /> The lab floor
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              {TOTAL_LABS} labs · 9 subjects · 8 books
            </div>
          </div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
            {TOTAL_LABS} laboratories. <span className="sv-text-gradient">Zero passive reading.</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every subject ships with hands-on laboratories — launch projectiles, build DC circuits,
            race CPU schedulers, minimize K-maps, fire electrons through double slits — the concepts
            from master notes, made touchable.
          </p>
          {easyMode && (
            <div className="mt-3 max-w-2xl">
              <EasyBox
                variant="text"
                text="Easy way to use labs: 1. Open any card below. 2. Press buttons and move sliders first, just play. 3. Then read what changed. Playing first makes theory easy. Start with Truth Table Lab."
                defaultOpen={false}
              />
            </div>
          )}
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={surpriseMe}
              className={`inline-flex items-center gap-2 rounded-xl border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200 transition-all hover:bg-amber-300/20 ${focusRing()}`}
              aria-label="Open a random lab"
            >
              <Dices className="h-4 w-4" aria-hidden="true" /> Surprise me
            </button>
          </div>
        </div>
      </motion.div>

      {/* subject filter */}
      <div
        className="sticky top-[57px] z-20 -mx-4 mb-8 border-y border-border/60 bg-background/85 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6"
        role="group"
        aria-label="Filter labs by subject"
      >
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => {
            const count =
              f.key === 'all'
                ? TOTAL_LABS
                : LAB_GROUPS.filter((g) => g.subject === f.key).reduce((n, g) => n + g.keys.length, 0)
            const selected = filter === f.key
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                aria-pressed={selected}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${focusRing()} ${
                  selected
                    ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-200'
                    : 'border-border/70 bg-card text-muted-foreground hover:border-emerald-400/30 hover:text-foreground'
                }`}
              >
                {f.label}
                <span
                  className={`rounded-full px-1.5 py-px font-mono text-[10px] tabular-nums ${
                    selected ? 'bg-emerald-400/20 text-emerald-100' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* active lab */}
      <AnimatePresence mode="wait">
        {active && INTERACTIVE_META[active] && (
          <motion.section
            id="active-lab"
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mb-10 scroll-mt-32"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-300/25 bg-amber-300/10">
                  <FlaskConical className="h-4 w-4 text-amber-300" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-300/80">
                    {INTERACTIVE_META[active].chapter}
                  </div>
                  <h2 className="text-lg font-bold leading-tight">{INTERACTIVE_META[active].title}</h2>
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                className={`inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground ${focusRing()}`}
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" /> Close lab
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/70">
              <InteractiveTool toolKey={active} />
            </div>
            {easyMode && (
              <div className="mt-3">
                <EasyBox
                  variant="text"
                  text={easyLabLine(active, INTERACTIVE_META[active].title, INTERACTIVE_META[active].description)}
                  defaultOpen={false}
                />
              </div>
            )}
          </motion.section>
        )}
      </AnimatePresence>

      {/* grouped grid */}
      <div className="space-y-10">
        {visibleGroups.map((group) => (
          <section key={group.groupLabel} aria-labelledby={`lab-group-${group.subject}-${group.groupLabel.slice(0, 12)}`}>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <h2
                id={`lab-group-${group.subject}-${group.groupLabel.slice(0, 12)}`}
                className="text-sm font-bold uppercase tracking-[0.16em] text-foreground/90"
              >
                {group.subjectLabel}
              </h2>
              <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${SUBJECT_ACCENT[group.subject]}`}>
                {group.groupLabel}
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                {group.keys.length} {group.keys.length === 1 ? 'lab' : 'labs'}
              </span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.keys.map((key, i) => {
                const meta = INTERACTIVE_META[key]
                if (!meta) return null
                const selected = active === key
                return (
                  <motion.button
                    key={key}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
                    onClick={() => openLab(key)}
                    aria-pressed={selected}
                    className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all ${focusRing()} ${
                      selected
                        ? 'border-amber-300/50 bg-amber-300/[0.05] shadow-[0_0_0_1px_rgba(252,211,77,0.2)]'
                        : 'border-border/80 bg-card hover:border-emerald-400/35'
                    }`}
                  >
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl transition-opacity group-hover:opacity-60" />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300/80">
                          {meta.chapter}
                        </span>
                        {selected && (
                          <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-200">
                            open
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1.5 text-lg font-bold leading-snug">{meta.title}</h3>
                      <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
                        {meta.description}
                      </p>
                      <EasyLine text={easyLabLine(key, meta.title, meta.description)} />
                      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
                        {selected ? 'Lab open above' : 'Open lab'}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground" aria-live="polite">
        Showing {visibleCount} of {TOTAL_LABS} labs
      </p>
    </div>
  )
}
