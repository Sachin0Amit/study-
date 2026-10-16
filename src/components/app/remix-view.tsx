'use client'

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'sonner'
import {
  Activity,
  BookOpen,
  Brain,
  CalendarDays,
  CalendarPlus,
  Check,
  ChevronRight,
  GitBranch,
  Loader2,
  Plus,
  RefreshCw,
  Route,
  Scale,
  Sparkles,
  Stethoscope,
  Trash2,
  TriangleAlert,
  Wand2,
  X,
  type LucideIcon,
} from 'lucide-react'
import { LIBRARY_SUBJECTS } from '@/data/library'
import { useStudy } from '@/store/useStudy'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

// ============================================================================
// X4 — CURRICULUM REMIX ENGINE (UI)
// The library reorders itself per learner: a prerequisite-aware sequence
// weighted by the twin, with LLM-authored bridge lessons for gaps.
// P4 upgrades: saved plans with live progress tracking, auto-rebalance,
// the Plan Doctor and calendar (.ics) export.
// ============================================================================

const RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const CT = { 'Content-Type': 'application/json' }

interface RemixStep {
  skillKey: string
  number: number
  title: string
  chapterId: string
  chapterTitle: string
  subjectId: string
  subjectName: string
  day: number
  priority: number
  reason: string
  pKnown: number | null
  bridge: boolean
  done?: boolean
  completedAt?: string | null
}
interface BridgeContent {
  title: string
  gapKeys: string[]
  content: { intro: string; objectives: string[]; concepts: { term: string; statement: string }[]; takeaways: string[] }
}
interface SavedPlan {
  id: string
  goal: string
  horizonDays: number
  version: number
  createdAt: string
  updatedAt: string
  totalSteps: number
  doneSteps: number
  percent: number
  overdueDays: number[]
}
interface DoctorMetrics {
  goal: string
  horizonDays: number
  totalSteps: number
  doneSteps: number
  openSteps: number
  percent: number
  daysElapsed: number
  daysRemaining: number
  overdueDays: number[]
  velocity: number
  assumedPace: number
  twinVelocity: number | null
  avgMastery: number | null
  subjects: string[]
}
interface DoctorData {
  metrics: DoctorMetrics
  report: string
  source: string
}
interface DayGroup {
  day: number
  steps: RemixStep[]
  done: number
  total: number
}

const SUGGESTIONS = [
  'Master Operating Systems in 21 days',
  'Strengthen my weakest mathematics topics',
  'Power systems deep dive, 2 weeks',
  'Cybersecurity foundations this month',
]

// deterministic confetti sparks (seeded LCG — no hydration drift, no packages)
const SPARKS = (() => {
  let seed = 20251016
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296
    return seed / 4294967296
  }
  return Array.from({ length: 26 }, (_, i) => ({
    left: Math.round(rnd() * 96),
    delay: Math.round(rnd() * 70) / 100,
    dur: 2 + Math.round(rnd() * 110) / 100,
    dx: Math.round((rnd() - 0.5) * 240),
    size: 9 + Math.round(rnd() * 11),
    color: ['#34d399', '#fbbf24', '#38bdf8', '#f472b6'][i % 4],
    char: ['✦', '✧', '★', '•'][i % 4],
  }))
})()

// ------------------------------ small helpers --------------------------------

function startOfDayTs(d: Date): number {
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86_400_000)
}

/** 1-based day index of `now` relative to a plan that started at `start` */
function dayIndexOf(start: Date, now: Date): number {
  return startOfDayTs(now) - startOfDayTs(start) + 1
}

function fmtDate(d: Date): string {
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

/** tiny markdown renderer for the Doctor report (headings, bullets, bold) */
function MdInline({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  if (parts.length === 1) return <>{text}</>
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-emerald-600 dark:text-emerald-300">
            {p}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  )
}

function renderMd(md: string): ReactNode[] {
  const out: ReactNode[] = []
  let list: ReactNode[] = []
  const flush = () => {
    if (list.length) {
      out.push(
        <ul key={`ul-${out.length}`} className="mt-2 flex flex-col gap-1.5">
          {list}
        </ul>
      )
      list = []
    }
  }
  md.split('\n').forEach((line, i) => {
    const t = line.trim()
    if (!t) {
      flush()
      return
    }
    const h = t.match(/^#{1,4}\s+(.*)$/)
    if (h) {
      flush()
      out.push(
        <p key={i} className="mt-4 text-[11px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
          {h[1].replace(/\*\*/g, '')}
        </p>
      )
      return
    }
    const b = t.match(/^([-*•]|\d+\.)\s+(.*)$/)
    if (b) {
      list.push(
        <li key={i} className="flex gap-2 text-[12.5px] leading-relaxed text-muted-foreground">
          <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400/70" aria-hidden />
          <span>
            <MdInline text={b[2]} />
          </span>
        </li>
      )
      return
    }
    flush()
    out.push(
      <p key={i} className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
        <MdInline text={t} />
      </p>
    )
  })
  flush()
  return out
}

/** per-day completion ring */
function DayRing({ done, total, overdue, size = 30 }: { done: number; total: number; overdue?: boolean; size?: number }) {
  const pct = total > 0 ? done / total : 0
  const r = size / 2 - 3
  const c = 2 * Math.PI * r
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0" aria-hidden>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={3} className="stroke-muted-foreground/25" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        strokeWidth={3}
        strokeLinecap="round"
        className={pct >= 1 ? 'stroke-emerald-400' : overdue ? 'stroke-rose-400' : 'stroke-emerald-400/80'}
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct)}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" className="fill-foreground font-mono text-[9px] font-bold">
        {total > 0 ? Math.round(pct * 100) : '–'}
      </text>
    </svg>
  )
}

// ============================================================================

export function RemixView() {
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const navigate = useStudy((s) => s.navigate)
  const deviceId = ensureDevice()

  const [goal, setGoal] = useState('')
  const [subject, setSubject] = useState('')
  const [horizon, setHorizon] = useState(14)
  const [busy, setBusy] = useState(false)
  const [stage, setStage] = useState<string | null>(null)
  const [steps, setSteps] = useState<RemixStep[] | null>(null)
  const [planId, setPlanId] = useState<string | null>(null)
  const [planStart, setPlanStart] = useState<string | null>(null)
  const [bridges, setBridges] = useState<Record<string, BridgeContent>>({})
  const [openBridge, setOpenBridge] = useState<string | null>(null)
  const [bridgeBusy, setBridgeBusy] = useState<string | null>(null)
  const [plans, setPlans] = useState<SavedPlan[]>([])
  const [dayFilter, setDayFilter] = useState<number | 'all'>('all')

  // P4 tracker state
  const [toggleBusy, setToggleBusy] = useState<number | null>(null)
  const [rebalBusy, setRebalBusy] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [doctorOpen, setDoctorOpen] = useState(false)
  const [doctorBusy, setDoctorBusy] = useState(false)
  const [doctor, setDoctor] = useState<DoctorData | null>(null)

  const loadPlans = useCallback(async () => {
    try {
      const res = await fetch(`/api/remix/plan?deviceId=${encodeURIComponent(deviceId)}`)
      if (res.ok) {
        const d = await res.json()
        setPlans(d.plans ?? [])
      }
    } catch {
      /* offline-tolerant */
    }
  }, [deviceId])

  useEffect(() => {
    void loadPlans()
  }, [loadPlans])

  // OS command handshake — the palette may hand us a goal
  useEffect(() => {
    try {
      const g = sessionStorage.getItem('sv-remix-goal')
      if (g) {
        sessionStorage.removeItem('sv-remix-goal')
        setGoal(g)
      }
      const h = sessionStorage.getItem('sv-remix-horizon')
      if (h) {
        sessionStorage.removeItem('sv-remix-horizon')
        const n = Number(h)
        if (Number.isFinite(n) && n >= 3 && n <= 60) setHorizon(Math.round(n))
      }
    } catch {
      /* storage unavailable */
    }
  }, [])

  const build = async () => {
    const g = goal.trim() || (subject ? `Study ${subject}` : '') || 'Strengthen my weakest subjects'
    if (busy) return
    setBusy(true)
    setStage('Reading your twin…')
    setSteps(null)
    setBridges({})
    setOpenBridge(null)
    try {
      const res = await fetch('/api/remix', {
        method: 'POST',
        headers: CT,
        body: JSON.stringify({
          deviceId,
          goal: g,
          horizonDays: horizon,
          subjectId: subject || null,
        }),
      })
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error ?? `HTTP ${res.status}`)
      const d = await res.json()
      setStage('Sequencing…')
      await new Promise((r) => setTimeout(r, 350))
      setPlanId(d.planId)
      setPlanStart(new Date().toISOString())
      setSteps((d.steps ?? []).map((s: RemixStep) => ({ ...s, done: false, completedAt: null })))
      setDayFilter('all')
      toast.success(`Plan built — ${d.steps?.length ?? 0} skills sequenced`, {
        icon: <Route className="h-4 w-4 text-emerald-300" />,
      })
      void loadPlans()
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Could not build the plan.')
    } finally {
      setBusy(false)
      setStage(null)
    }
  }

  const openPlan = async (id: string) => {
    try {
      const res = await fetch(`/api/remix/plan/${id}?deviceId=${encodeURIComponent(deviceId)}`)
      if (!res.ok) return
      const d = await res.json()
      setPlanId(d.id)
      setPlanStart(d.createdAt ?? null)
      setSteps(d.steps ?? [])
      setBridges(d.bridges ?? {})
      setGoal(d.goal)
      setHorizon(d.horizonDays)
      setDayFilter('all')
    } catch {
      toast.error('Could not open that plan.')
    }
  }

  const regenerate = async () => {
    if (!planId || busy) return
    setBusy(true)
    setStage('Re-reading your twin and re-sequencing…')
    try {
      const res = await fetch(`/api/remix/plan/${planId}?deviceId=${encodeURIComponent(deviceId)}`, {
        method: 'PATCH',
        headers: CT,
        body: JSON.stringify({ action: 'regenerate' }),
      })
      if (!res.ok) throw new Error('regenerate failed')
      const d = await res.json()
      setSteps((d.steps ?? []).map((s: RemixStep) => ({ ...s, done: false, completedAt: null })))
      setBridges({})
      setPlanStart(new Date().toISOString())
      toast.success(`Plan v${d.version} — re-sequenced with fresh twin data`)
      void loadPlans()
    } catch {
      toast.error('Could not regenerate.')
    } finally {
      setBusy(false)
      setStage(null)
    }
  }

  const deletePlan = async (id: string) => {
    try {
      await fetch(`/api/remix/plan?planId=${encodeURIComponent(id)}&deviceId=${encodeURIComponent(deviceId)}`, {
        method: 'DELETE',
      })
      if (id === planId) {
        setPlanId(null)
        setSteps(null)
        setPlanStart(null)
      }
      void loadPlans()
    } catch {
      toast.error('Could not delete.')
    }
  }

  const genBridge = async (skillKey: string) => {
    if (bridgeBusy) return
    setBridgeBusy(skillKey)
    try {
      const res = await fetch('/api/remix/bridge', {
        method: 'POST',
        headers: CT,
        body: JSON.stringify({ deviceId, skillKey }),
      })
      const d = await res.json()
      if (!res.ok) throw new Error(d.error ?? 'bridge failed')
      setBridges((b) => ({ ...b, [skillKey]: d }))
      setOpenBridge(skillKey)
      if (!d.cached) toast.success('Bridge lesson authored')
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Could not author the bridge.')
    } finally {
      setBridgeBusy(null)
    }
  }

  // ------------------------------ P4: progress tracking -----------------------

  /** best-effort twin evidence (legacy complete action) when a step is checked */
  const recordTwinEvidence = useCallback(
    async (skillKey: string) => {
      if (!planId) return
      try {
        await fetch(`/api/remix/plan/${planId}?deviceId=${encodeURIComponent(deviceId)}`, {
          method: 'PATCH',
          headers: CT,
          body: JSON.stringify({ action: 'complete', skillKey }),
        })
      } catch {
        /* twin evidence is best-effort */
      }
    },
    [planId, deviceId]
  )

  const toggleStep = async (index: number) => {
    if (!planId || !steps || index < 0 || index >= steps.length) return
    const was = steps[index]?.done ?? false
    const next = steps.map((s, i) =>
      i === index ? { ...s, done: !was, completedAt: !was ? new Date().toISOString() : null } : s
    )
    setSteps(next)
    setToggleBusy(index)
    try {
      const res = await fetch('/api/remix/plan', {
        method: 'PATCH',
        headers: CT,
        body: JSON.stringify({ planId, deviceId, stepIndex: index, done: !was }),
      })
      if (!res.ok) throw new Error('toggle failed')
      const d = await res.json()
      if (Array.isArray(d.steps)) setSteps(d.steps)
      if (!was) {
        toast.success('Step done — twin updated', { icon: <Brain className="h-4 w-4 text-emerald-300" /> })
        void recordTwinEvidence(steps[index].skillKey)
      }
      void loadPlans()
    } catch {
      setSteps(steps) // revert optimistic update
      toast.error('Could not save that step.')
    } finally {
      setToggleBusy(null)
    }
  }

  const progress = useMemo(() => {
    if (!steps || steps.length === 0) return { done: 0, total: 0, percent: 0 }
    const done = steps.filter((s) => s.done).length
    return { done, total: steps.length, percent: Math.round((done / steps.length) * 100) }
  }, [steps])

  // derived stats (so plans loaded from the list render identically)
  const stats = useMemo(() => {
    if (!steps) return null
    const evid = steps.filter((s) => s.pKnown !== null)
    return {
      skills: steps.length,
      bridges: steps.filter((s) => s.bridge).length,
      weakSkills: steps.filter((s) => s.pKnown !== null && s.pKnown < 0.4).length,
      freshSkills: steps.filter((s) => s.pKnown === null).length,
      avgMastery: evid.length ? evid.reduce((a, s) => a + (s.pKnown ?? 0), 0) / evid.length : null,
    }
  }, [steps])

  const dayMeta = useMemo<DayGroup[]>(() => {
    if (!steps) return []
    return [...new Set(steps.map((s) => s.day))]
      .sort((a, b) => a - b)
      .map((d) => {
        const list = steps.filter((s) => s.day === d)
        return { day: d, steps: list, done: list.filter((s) => s.done).length, total: list.length }
      })
  }, [steps])

  const currentDay = useMemo(
    () => (planStart ? Math.max(1, dayIndexOf(new Date(planStart), new Date())) : 1),
    [planStart]
  )

  const overdueDays = useMemo(() => {
    if (!steps) return []
    return [...new Set(steps.filter((s) => !s.done && s.day < currentDay).map((s) => s.day))].sort((a, b) => a - b)
  }, [steps, currentDay])

  // confetti moment when the plan hits 100%
  const prevPercent = useRef(0)
  useEffect(() => {
    if (progress.total === 0) {
      prevPercent.current = 0
      return
    }
    if (progress.percent === 100 && prevPercent.current < 100) {
      prevPercent.current = 100
      setConfetti(true)
      toast.success('Study plan complete — every step done', {
        icon: <Sparkles className="h-4 w-4 text-emerald-300" />,
      })
      const t = setTimeout(() => setConfetti(false), 3200)
      return () => clearTimeout(t)
    }
    prevPercent.current = progress.percent
  }, [progress])

  // ------------------------------ P4: auto-rebalance --------------------------

  const rebalance = async () => {
    if (!planId || !steps || rebalBusy) return
    setRebalBusy(true)
    try {
      const start = planStart ? new Date(planStart) : new Date()
      const now = new Date()
      const curDay = Math.max(1, dayIndexOf(start, now))
      const horizonDays = Math.max(1, horizon)
      const openCount = steps.filter((s) => !s.done).length
      if (openCount === 0) {
        toast.info('Nothing to rebalance — every step is already done.')
        return
      }
      // keep the plan's density; extend past the horizon only if it fully elapsed
      const avgPerDay = Math.max(1, Math.ceil(steps.length / horizonDays))
      let lastDay = horizonDays
      if (curDay > horizonDays) lastDay = curDay - 1 + Math.max(1, Math.ceil(openCount / avgPerDay))
      const firstOpenDay = Math.min(curDay, lastDay)
      const remainingDays = lastDay - firstOpenDay + 1
      const perDay = Math.max(1, Math.ceil(openCount / remainingDays))

      let day = firstOpenDay
      let fill = 0
      const next = steps.map((s) => {
        if (s.done) return s
        const d = Math.min(day, lastDay)
        fill++
        if (fill >= perDay && day < lastDay) {
          day++
          fill = 0
        }
        return { ...s, day: d }
      })

      // before/after diff toast
      const counts = (arr: RemixStep[]) => {
        const m = new Map<number, number>()
        for (const s of arr) m.set(s.day, (m.get(s.day) ?? 0) + 1)
        return m
      }
      const before = counts(steps)
      const after = counts(next)
      const allDays = [...new Set([...before.keys(), ...after.keys()])].sort((a, b) => a - b)
      const diff = allDays
        .filter((d) => before.get(d) !== after.get(d))
        .map((d) => `Day ${d}: ${before.get(d) ?? 0}→${after.get(d) ?? 0}`)
      if (diff.length === 0) {
        toast.info('The plan already fits the remaining days.')
        return
      }

      const res = await fetch('/api/remix/plan', {
        method: 'PATCH',
        headers: CT,
        body: JSON.stringify({ planId, deviceId, steps: next }),
      })
      if (!res.ok) throw new Error('rebalance failed')
      const d = await res.json()
      if (Array.isArray(d.steps)) setSteps(d.steps)
      toast.success(`Rebalanced — ${diff.slice(0, 4).join(' · ')}${diff.length > 4 ? ' …' : ''}`, {
        icon: <Scale className="h-4 w-4 text-amber-300" />,
      })
      void loadPlans()
    } catch {
      toast.error('Could not rebalance the plan.')
    } finally {
      setRebalBusy(false)
    }
  }

  // ------------------------------ P4: plan doctor -----------------------------

  const openDoctor = async () => {
    if (!planId || doctorBusy) return
    setDoctorBusy(true)
    setDoctor(null)
    setDoctorOpen(true)
    try {
      const res = await fetch('/api/remix/doctor', {
        method: 'POST',
        headers: CT,
        body: JSON.stringify({ deviceId, planId }),
      })
      const d = await res.json()
      if (!res.ok) throw new Error(d.error ?? 'doctor failed')
      setDoctor(d)
    } catch {
      setDoctorOpen(false)
      toast.error('The doctor could not see the plan.')
    } finally {
      setDoctorBusy(false)
    }
  }

  // ------------------------------ P4: calendar export -------------------------

  const downloadIcs = () => {
    if (!planId) return
    const a = document.createElement('a')
    a.href = `/api/remix/ics?planId=${encodeURIComponent(planId)}`
    a.download = 'studyverse-plan.ics'
    document.body.appendChild(a)
    a.click()
    a.remove()
    toast.success('Calendar file downloaded', { icon: <CalendarPlus className="h-4 w-4 text-emerald-300" /> })
  }

  // ------------------------------ render --------------------------------------

  const rows = useMemo(() => {
    if (!steps) return []
    const groups = dayFilter === 'all' ? dayMeta : dayMeta.filter((g) => g.day === dayFilter)
    const indexBy = new Map(steps.map((s, i) => [s.skillKey, i]))
    type Row =
      | { kind: 'header'; group: DayGroup }
      | { kind: 'step'; step: RemixStep; gi: number }
    const out: Row[] = []
    for (const g of groups) {
      out.push({ kind: 'header', group: g })
      for (const s of g.steps) out.push({ kind: 'step', step: s, gi: indexBy.get(s.skillKey) ?? 0 })
    }
    return out
  }, [steps, dayMeta, dayFilter])

  const stepAnim = (i: number) => ({
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: Math.min(i * 0.02, 0.3) },
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      {/* confetti keyframes (rendered once) */}
      <style>{`
@keyframes sv-confetti-fall {
  0% { transform: translate3d(0, -6vh, 0) rotate(0deg) scale(1); opacity: 0 }
  10% { opacity: 1 }
  100% { transform: translate3d(var(--dx, 0px), 106vh, 0) rotate(520deg) scale(0.85); opacity: 0 }
}
.sv-confetti-spark {
  position: absolute;
  top: 0;
  pointer-events: none;
  animation: sv-confetti-fall var(--dur, 2.4s) cubic-bezier(0.25, 0.5, 0.7, 1) var(--delay, 0s) forwards;
  color: var(--c, #34d399);
  font-size: var(--s, 12px);
}
`}</style>

      {confetti && (
        <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" aria-hidden>
          {SPARKS.map((s, i) => (
            <span
              key={i}
              className="sv-confetti-spark"
              style={{ left: `${s.left}%`, '--c': s.color, '--dx': `${s.dx}px`, '--s': `${s.size}px`, '--dur': `${s.dur}s`, '--delay': `${s.delay}s` } as CSSProperties}
            >
              {s.char}
            </span>
          ))}
        </div>
      )}

      {/* header */}
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10">
            <Route className="h-6 w-6 text-emerald-300" aria-hidden />
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Curriculum <span className="text-emerald-300">Remix</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-[15px]">
              The library re-orders itself around your twin — prerequisites first, gaps bridged.
            </p>
          </div>
        </div>
        {planId && steps && (
          <button
            onClick={() => void regenerate()}
            disabled={busy}
            className={`inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2.5 text-sm font-semibold text-emerald-600 transition-colors hover:border-emerald-400/50 disabled:opacity-60 dark:text-emerald-300 ${RING}`}
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <RefreshCw className="h-4 w-4" aria-hidden />}
            Re-sequence
          </button>
        )}
      </div>

      {/* input card */}
      {!steps && (
        <div className="mx-auto max-w-2xl rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
          <label htmlFor="remix-goal" className="mb-2 block text-sm font-semibold">
            What is the mission?
          </label>
          <input
            id="remix-goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && void build()}
            placeholder="e.g. Master Operating Systems in 3 weeks"
            disabled={busy}
            maxLength={200}
            className="h-11 w-full rounded-xl border border-border/80 bg-background/60 px-3.5 text-[14px] placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setGoal(s)}
                disabled={busy}
                className={`rounded-full border border-border/70 bg-background/40 px-3 py-1.5 text-[12px] text-muted-foreground transition-colors hover:border-emerald-400/40 hover:text-foreground disabled:opacity-50 ${RING}`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="remix-subject" className="mb-1.5 block text-xs font-semibold text-muted-foreground">
                Focus subject <span className="font-normal opacity-70">(optional — the twin picks if blank)</span>
              </label>
              <select
                id="remix-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={busy}
                className="h-10 w-full rounded-xl border border-border/80 bg-background/60 px-3 text-[13px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
              >
                <option value="">Twin decides (weakest subjects)</option>
                {LIBRARY_SUBJECTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="remix-horizon" className="mb-1.5 block text-xs font-semibold text-muted-foreground">
                Horizon — <span className="font-mono text-emerald-300">{horizon} days</span>
              </label>
              <input
                id="remix-horizon"
                type="range"
                min={3}
                max={42}
                value={horizon}
                onChange={(e) => setHorizon(Number(e.target.value))}
                disabled={busy}
                className="mt-3.5 w-full accent-emerald-400"
              />
            </div>
          </div>
          <button
            onClick={() => void build()}
            disabled={busy}
            className={`mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(52,211,153,0.35)] transition-all hover:bg-primary/90 disabled:opacity-60 ${RING}`}
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Sparkles className="h-4 w-4" aria-hidden />}
            {busy ? (stage ?? 'Building…') : 'Build my study plan'}
          </button>
          {busy && stage && (
            <p className="mt-3 flex items-center gap-2 text-[12.5px] text-muted-foreground">
              <Brain className="h-3.5 w-3.5 animate-pulse text-emerald-300" aria-hidden /> {stage}
            </p>
          )}
        </div>
      )}

      {/* saved plans (landing) */}
      {!steps && plans.length > 0 && (
        <section className="mx-auto mt-8 max-w-4xl" aria-label="Saved study plans">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-[15px] font-bold">
              <CalendarDays className="h-4 w-4 text-emerald-300" aria-hidden /> Saved study plans
            </h2>
            <span className="text-[11.5px] text-muted-foreground">
              {plans.length} plan{plans.length === 1 ? '' : 's'}
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {plans.map((p) => (
              <div
                key={p.id}
                className={`group rounded-2xl border p-4 transition-colors ${
                  p.id === planId ? 'border-emerald-400/40 bg-emerald-400/[0.06]' : 'border-border/80 bg-card hover:border-emerald-400/30'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <button onClick={() => void openPlan(p.id)} className={`min-w-0 flex-1 text-left ${RING} rounded-lg`}>
                    <span className="block truncate text-[13.5px] font-semibold">{p.goal}</span>
                    <span className="mt-0.5 block text-[11px] text-muted-foreground">
                      v{p.version} · {p.totalSteps} steps · started {fmtDate(new Date(p.createdAt))} · updated{' '}
                      {fmtDate(new Date(p.updatedAt))}
                    </span>
                  </button>
                  <button
                    onClick={() => void deletePlan(p.id)}
                    aria-label={`Delete ${p.goal}`}
                    className={`shrink-0 rounded-lg p-1.5 text-muted-foreground/50 transition-colors hover:text-rose-400 ${RING}`}
                  >
                    <Trash2 className="h-3.5 w-3.5" aria-hidden />
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-2.5">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-background/70">
                    <div className="h-full rounded-full bg-emerald-400/80" style={{ width: `${p.percent}%` }} />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-emerald-300">{p.percent}%</span>
                </div>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-muted-foreground">
                    {p.doneSteps}/{p.totalSteps} steps done
                  </span>
                  {p.overdueDays.length > 0 ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-rose-400/30 bg-rose-400/10 px-2 py-0.5 text-[10.5px] font-bold text-rose-500 dark:text-rose-300">
                      <TriangleAlert className="h-3 w-3" aria-hidden /> {p.overdueDays.length} overdue
                    </span>
                  ) : null}
                </div>
                <button
                  onClick={() => void openPlan(p.id)}
                  className={`mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-border/70 bg-background/40 px-3 py-2 text-[12px] font-semibold transition-colors hover:border-emerald-400/40 ${RING}`}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-emerald-300" aria-hidden /> Load plan
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* plan display */}
      {steps && stats && (
        <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
          <div className="min-w-0">
            {/* progress tracker */}
            <div
              className={`mb-4 rounded-2xl border bg-card p-4 ${
                progress.percent === 100
                  ? 'border-emerald-400/40 shadow-[0_0_28px_-8px_rgba(52,211,153,0.5)]'
                  : 'border-border/80'
              }`}
            >
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="min-w-[200px] flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-[13px] font-bold">
                      {progress.done} of {progress.total} steps{' '}
                      <span className="font-normal text-muted-foreground">done</span>
                    </p>
                    <span className="font-mono text-[15px] font-bold text-emerald-500 dark:text-emerald-300">
                      {progress.percent}%
                    </span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-background/70">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-300"
                      initial={false}
                      animate={{ width: `${progress.percent}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {overdueDays.length > 0 && (
                    <button
                      onClick={() => void rebalance()}
                      disabled={rebalBusy}
                      title={`${overdueDays.length} day slot${overdueDays.length === 1 ? '' : 's'} slipped — re-pack the open steps`}
                      className={`inline-flex items-center gap-2 rounded-xl border border-amber-400/40 bg-amber-400/10 px-3.5 py-2.5 text-[12.5px] font-semibold text-amber-600 transition-colors hover:bg-amber-400/20 disabled:opacity-60 dark:text-amber-300 ${RING}`}
                    >
                      {rebalBusy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Scale className="h-4 w-4" aria-hidden />}
                      Rebalance
                    </button>
                  )}
                  <button
                    onClick={() => void openDoctor()}
                    disabled={doctorBusy}
                    className={`inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background/40 px-3.5 py-2.5 text-[12.5px] font-semibold transition-colors hover:border-emerald-400/40 disabled:opacity-60 ${RING}`}
                  >
                    {doctorBusy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Stethoscope className="h-4 w-4 text-emerald-300" aria-hidden />}
                    Doctor
                  </button>
                  <button
                    onClick={downloadIcs}
                    className={`inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background/40 px-3.5 py-2.5 text-[12.5px] font-semibold transition-colors hover:border-emerald-400/40 ${RING}`}
                  >
                    <CalendarPlus className="h-4 w-4 text-emerald-300" aria-hidden /> Add to calendar
                  </button>
                </div>
              </div>
            </div>

            {/* stats strip */}
            <div className="mb-4 flex flex-wrap gap-2">
              {[
                { icon: Route, label: `${stats.skills} skills sequenced` },
                { icon: GitBranch, label: `${stats.bridges} bridges flagged` },
                { icon: Sparkles, label: `${stats.freshSkills} first-contact` },
                stats.avgMastery !== null
                  ? { icon: Brain, label: `${Math.round(stats.avgMastery * 100)}% avg mastery now` }
                  : null,
              ]
                .filter(Boolean)
                .map((c, i) => {
                  const chip = c as { icon: LucideIcon; label: string };
                  const ChipIcon = chip.icon;
                  return (
                    <span
                      key={chip.label ?? i}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/40 px-2.5 py-1 text-[11.5px] font-medium text-muted-foreground"
                    >
                      <ChipIcon className="h-3.5 w-3.5 text-emerald-300/80" aria-hidden />
                      {chip.label}
                    </span>
                  );
                })}
            </div>

            {/* day filter chips */}
            <div className="mb-4 flex flex-wrap gap-2">
              <button
                onClick={() => setDayFilter('all')}
                aria-pressed={dayFilter === 'all'}
                className={`rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-colors ${RING} ${
                  dayFilter === 'all'
                    ? 'border-emerald-400/40 bg-emerald-400/15 text-emerald-600 dark:text-emerald-300'
                    : 'border-border/70 bg-card/50 text-muted-foreground hover:border-emerald-400/30'
                }`}
              >
                All days
              </button>
              {dayMeta.map((g) => (
                <button
                  key={g.day}
                  onClick={() => setDayFilter(dayFilter === g.day ? 'all' : g.day)}
                  aria-pressed={dayFilter === g.day}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-colors ${RING} ${
                    dayFilter === g.day
                      ? 'border-emerald-400/40 bg-emerald-400/15 text-emerald-600 dark:text-emerald-300'
                      : 'border-border/70 bg-card/50 text-muted-foreground hover:border-emerald-400/30'
                  }`}
                >
                  <CalendarDays className="h-3 w-3" aria-hidden /> Day {g.day}
                  <span className="font-mono text-[10.5px] font-normal opacity-70">
                    {g.done}/{g.total}
                  </span>
                </button>
              ))}
            </div>

            {/* steps (grouped by day, with completion headers) */}
            <div className="flex flex-col gap-2.5">
              <AnimatePresence initial={false}>
                {rows.map((row, i) => {
                  if (row.kind === 'header') {
                    const g = row.group
                    const isOverdue = g.day < currentDay && g.done < g.total
                    const isToday = g.day === currentDay
                    const dateStr = planStart
                      ? fmtDate(new Date(new Date(planStart).getTime() + (g.day - 1) * 86_400_000))
                      : null
                    return (
                      <motion.div
                        key={`h-${g.day}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 flex flex-wrap items-center gap-2.5 first:mt-0"
                      >
                        <DayRing done={g.done} total={g.total} overdue={isOverdue} size={30} />
                        <span className="text-[13px] font-bold">Day {g.day}</span>
                        {dateStr && <span className="text-[11.5px] text-muted-foreground">{dateStr}</span>}
                        {isToday && (
                          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
                            today
                          </span>
                        )}
                        {isOverdue && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-rose-400/30 bg-rose-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-rose-500 dark:text-rose-300">
                            <TriangleAlert className="h-3 w-3" aria-hidden /> overdue
                          </span>
                        )}
                        <span className="ml-auto font-mono text-[10.5px] text-muted-foreground">
                          {g.done}/{g.total} done
                        </span>
                      </motion.div>
                    )
                  }
                  const s = row.step
                  const gi = row.gi
                  const done = s.done ?? false
                  const bridge = bridges[s.skillKey]
                  const isOpen = openBridge === s.skillKey
                  return (
                    <motion.div
                      key={s.skillKey}
                      {...stepAnim(i)}
                      className={`rounded-2xl border p-4 ${
                        s.bridge
                          ? 'border-amber-400/30 bg-amber-400/[0.05]'
                          : 'border-border/80 bg-card'
                      } ${done ? 'opacity-60' : ''}`}
                    >
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background/50 font-mono text-[11px] font-bold text-emerald-300">
                          {s.day}·{gi + 1}
                        </span>
                        <button
                          onClick={() => navigate({ name: 'lesson', sectionId: s.skillKey })}
                          className={`group min-w-0 flex-1 text-left ${RING} rounded-lg`}
                        >
                          <span className={`block truncate text-[13.5px] font-semibold ${done ? 'line-through decoration-emerald-400/60' : ''}`}>
                            <span className="font-mono text-[11px] text-emerald-300/80">§{s.number}</span> {s.title}
                          </span>
                          <span className="block truncate text-[11.5px] text-muted-foreground">
                            {s.chapterTitle} · {s.subjectName}
                          </span>
                        </button>
                        {s.pKnown !== null && (
                          <span
                            className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10.5px] font-bold ${
                              s.pKnown < 0.4
                                ? 'border-rose-400/30 bg-rose-400/10 text-rose-500 dark:text-rose-300'
                                : s.pKnown < 0.75
                                  ? 'border-amber-400/30 bg-amber-400/10 text-amber-600 dark:text-amber-300'
                                  : 'border-emerald-400/30 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300'
                            }`}
                            title="Twin mastery estimate"
                          >
                            {Math.round(s.pKnown * 100)}%
                          </span>
                        )}
                        <button
                          role="checkbox"
                          aria-checked={done}
                          aria-label={done ? `Mark ${s.title} as not done` : `Mark ${s.title} done`}
                          onClick={() => void toggleStep(gi)}
                          disabled={toggleBusy === gi}
                          title={done ? 'Step done — tap to undo' : 'Mark step done — feeds the twin'}
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-all disabled:opacity-60 ${
                            done
                              ? 'border-emerald-400/60 bg-emerald-400/20 text-emerald-500 dark:text-emerald-300'
                              : 'border-border/80 bg-background/50 hover:border-emerald-400/50'
                          } ${RING}`}
                        >
                          {toggleBusy === gi ? (
                            <Loader2 className="h-4 w-4 animate-spin text-emerald-300" aria-hidden />
                          ) : done ? (
                            <Check className="h-4 w-4" aria-hidden />
                          ) : null}
                        </button>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-2 pl-10.5">
                        <span className="text-[11px] text-muted-foreground/80">{s.reason}</span>
                        {s.bridge && (
                          <button
                            onClick={() => (bridge ? setOpenBridge(isOpen ? null : s.skillKey) : void genBridge(s.skillKey))}
                            disabled={bridgeBusy === s.skillKey}
                            className={`inline-flex items-center gap-1.5 rounded-lg border border-dashed border-amber-400/40 bg-amber-400/[0.08] px-2.5 py-1 text-[11.5px] font-semibold text-amber-600 transition-colors hover:bg-amber-400/15 disabled:opacity-60 dark:text-amber-300 ${RING}`}
                          >
                            {bridgeBusy === s.skillKey ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                            ) : bridge ? (
                              isOpen ? <X className="h-3.5 w-3.5" aria-hidden /> : <BookOpen className="h-3.5 w-3.5" aria-hidden />
                            ) : (
                              <Wand2 className="h-3.5 w-3.5" aria-hidden />
                            )}
                            {bridge ? (isOpen ? 'Hide bridge' : 'Read bridge') : 'Author bridge lesson'}
                          </button>
                        )}
                      </div>
                      <AnimatePresence>
                        {isOpen && bridge && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 rounded-xl border border-amber-400/25 bg-background/50 p-4">
                              <p className="text-[11px] font-bold uppercase tracking-wide text-amber-600 dark:text-amber-300">
                                Bridge lesson — authored for your gap
                              </p>
                              <p className="mt-2 text-[13px] leading-relaxed">{bridge.content.intro}</p>
                              {bridge.content.objectives.length > 0 && (
                                <ul className="mt-2.5 flex flex-col gap-1">
                                  {bridge.content.objectives.map((o, j) => (
                                    <li key={j} className="flex gap-2 text-[12.5px] text-muted-foreground">
                                      <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400/70" aria-hidden />
                                      {o}
                                    </li>
                                  ))}
                                </ul>
                              )}
                              <div className="mt-3 flex flex-col gap-2.5">
                                {bridge.content.concepts.map((k, j) => (
                                  <div key={j} className="rounded-lg border border-border/60 bg-card/60 p-3">
                                    <p className="text-[12.5px] font-bold">{k.term}</p>
                                    <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{k.statement}</p>
                                  </div>
                                ))}
                              </div>
                              {bridge.content.takeaways.length > 0 && (
                                <p className="mt-3 rounded-lg border border-emerald-400/25 bg-emerald-400/[0.07] p-3 text-[12px] leading-relaxed">
                                  <b>Takeaways:</b> {bridge.content.takeaways.join(' · ')}
                                </p>
                              )}
                              {bridge.gapKeys?.length > 0 && (
                                <p className="mt-2 text-[10.5px] text-muted-foreground/60">
                                  Bridges your gap in: {bridge.gapKeys.join(' → ')}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            <button
              onClick={() => {
                setSteps(null)
                setPlanId(null)
                setPlanStart(null)
                setGoal('')
                setSubject('')
              }}
              className={`mt-5 inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-emerald-400/40 ${RING}`}
            >
              <Plus className="h-4 w-4 text-emerald-300" aria-hidden /> New mission
            </button>
          </div>

          {/* sidebar: saved plans */}
          <aside className="min-w-0" aria-label="Saved plans">
            <div className="rounded-2xl border border-border/80 bg-card p-4">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold">
                <Route className="h-4 w-4 text-emerald-300" aria-hidden /> Your plans
              </span>
              <div className="mt-3 flex max-h-96 flex-col gap-2 overflow-y-auto pr-1">
                {plans.length === 0 && (
                  <p className="py-4 text-center text-[12.5px] text-muted-foreground">No plans yet.</p>
                )}
                {plans.map((p) => (
                  <div
                    key={p.id}
                    className={`group flex items-center gap-2 rounded-xl px-2.5 py-2 transition-colors hover:bg-emerald-400/[0.06] ${
                      p.id === planId ? 'bg-emerald-400/10' : ''
                    }`}
                  >
                    <button onClick={() => void openPlan(p.id)} className={`min-w-0 flex-1 text-left ${RING} rounded-lg`}>
                      <span className="block truncate text-[12.5px] font-semibold">{p.goal}</span>
                      <span className="block text-[10.5px] text-muted-foreground">
                        v{p.version} · {p.doneSteps}/{p.totalSteps} steps · {fmtDate(new Date(p.updatedAt))}
                      </span>
                      <span className="mt-1.5 block h-1 overflow-hidden rounded-full bg-background/70">
                        <span className="block h-full rounded-full bg-emerald-400/70" style={{ width: `${p.percent}%` }} />
                      </span>
                    </button>
                    <button
                      onClick={() => void deletePlan(p.id)}
                      aria-label={`Delete ${p.goal}`}
                      className={`shrink-0 rounded-lg p-1.5 text-muted-foreground/50 opacity-0 transition-opacity hover:text-rose-400 group-hover:opacity-100 ${RING}`}
                    >
                      <Trash2 className="h-3.5 w-3.5" aria-hidden />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-border/80 bg-card p-4">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold">
                <GitBranch className="h-4 w-4 text-amber-300" aria-hidden /> How remix works
              </span>
              <ul className="mt-2.5 flex flex-col gap-2 text-[12px] leading-relaxed text-muted-foreground">
                <li>1. Your twin scores every skill — mastery, urgency, decay.</li>
                <li>2. The prerequisite graph sequences them — foundations can&apos;t come late.</li>
                <li>3. Weak prerequisites get amber flags — tap to author a bridge lesson on the spot.</li>
                <li>4. Check steps off as you study — progress, rebalance and the Doctor react live.</li>
                <li>5. Re-sequence anytime: fresh twin data, new order, same mission.</li>
              </ul>
            </div>
          </aside>
        </div>
      )}

      {/* Plan Doctor dialog */}
      <Dialog open={doctorOpen} onOpenChange={setDoctorOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-emerald-300" aria-hidden /> Plan Doctor
            </DialogTitle>
            <DialogDescription>
              A diagnosis of your study plan — why it slipped and how to fix it without losing the goal.
            </DialogDescription>
          </DialogHeader>
          {doctorBusy && (
            <div className="flex flex-col items-center gap-3 py-10 text-muted-foreground">
              <Loader2 className="h-6 w-6 animate-spin text-emerald-300" aria-hidden />
              <p className="text-[13px]">Examining your progress, velocity and twin…</p>
            </div>
          )}
          {!doctorBusy && doctor && (
            <>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    `${doctor.metrics.doneSteps}/${doctor.metrics.totalSteps} steps · ${doctor.metrics.percent}%`,
                    `${doctor.metrics.velocity}/day velocity`,
                    `${doctor.metrics.overdueDays.length} overdue day${doctor.metrics.overdueDays.length === 1 ? '' : 's'}`,
                    `${doctor.metrics.daysRemaining} day${doctor.metrics.daysRemaining === 1 ? '' : 's'} left`,
                    doctor.metrics.avgMastery !== null
                      ? `${Math.round(doctor.metrics.avgMastery * 100)}% avg mastery`
                      : null,
                    doctor.metrics.twinVelocity !== null
                      ? `twin: ${doctor.metrics.twinVelocity} events/day`
                      : null,
                  ] as (string | null)[]
                )
                  .filter((x): x is string => x !== null)
                  .map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      <Activity className="h-3 w-3 text-emerald-300/80" aria-hidden />
                      {label}
                    </span>
                  ))}
              </div>
              <div className="mt-1 max-h-[52vh] overflow-y-auto pr-1">{renderMd(doctor.report)}</div>
              <p className="mt-2 text-right text-[10.5px] text-muted-foreground/60">
                {doctor.source === 'llm' ? 'AI analysis' : 'Quick analysis (offline heuristic)'}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
