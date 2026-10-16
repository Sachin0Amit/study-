'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'sonner'
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  GitBranch,
  Loader2,
  Plus,
  RefreshCw,
  Route,
  Sparkles,
  Trash2,
  Wand2,
  X,
  type LucideIcon,
} from 'lucide-react'
import { LIBRARY_SUBJECTS } from '@/data/library'
import { useStudy } from '@/store/useStudy'

// ============================================================================
// X4 — CURRICULUM REMIX ENGINE (UI)
// The library reorders itself per learner: a prerequisite-aware sequence
// weighted by the twin, with LLM-authored bridge lessons for gaps.
// ============================================================================

const RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

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
}
interface BridgeContent {
  title: string
  gapKeys: string[]
  content: { intro: string; objectives: string[]; concepts: { term: string; statement: string }[]; takeaways: string[] }
}
interface PlanSummary {
  id: string
  goal: string
  horizonDays: number
  version: number
  stats: { skills: number; bridges: number }
  updatedAt: string
}

const SUGGESTIONS = [
  'Master Operating Systems in 21 days',
  'Strengthen my weakest mathematics topics',
  'Power systems deep dive, 2 weeks',
  'Cybersecurity foundations this month',
]

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
  const [stats, setStats] = useState<{ skills: number; bridges: number; weakSkills: number; freshSkills: number; avgMastery: number | null } | null>(null)
  const [bridges, setBridges] = useState<Record<string, BridgeContent>>({})
  const [openBridge, setOpenBridge] = useState<string | null>(null)
  const [bridgeBusy, setBridgeBusy] = useState<string | null>(null)
  const [plans, setPlans] = useState<PlanSummary[]>([])
  const [dayFilter, setDayFilter] = useState<number | 'all'>('all')

  const loadPlans = useCallback(async () => {
    try {
      const res = await fetch(`/api/remix?deviceId=${encodeURIComponent(deviceId)}`)
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
        headers: { 'Content-Type': 'application/json' },
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
      setSteps(d.steps ?? [])
      setStats(d.stats ?? null)
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'regenerate' }),
      })
      if (!res.ok) throw new Error('regenerate failed')
      const d = await res.json()
      setSteps(d.steps ?? [])
      setStats(d.stats ?? null)
      setBridges({})
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
      await fetch(`/api/remix/plan/${id}?deviceId=${encodeURIComponent(deviceId)}`, { method: 'DELETE' })
      if (id === planId) {
        setPlanId(null)
        setSteps(null)
        setStats(null)
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
        headers: { 'Content-Type': 'application/json' },
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

  const completeStep = async (skillKey: string) => {
    if (!planId) return
    try {
      await fetch(`/api/remix/plan/${planId}?deviceId=${encodeURIComponent(deviceId)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'complete', skillKey }),
      })
      toast.success('Twin updated — evidence recorded', { icon: <Brain className="h-4 w-4 text-emerald-300" /> })
    } catch {
      toast.error('Could not record that step.')
    }
  }

  const days = useMemo(() => {
    if (!steps) return []
    return [...new Set(steps.map((s) => s.day))].sort((a, b) => a - b)
  }, [steps])

  const visibleSteps = useMemo(
    () => (steps ? (dayFilter === 'all' ? steps : steps.filter((s) => s.day === dayFilter)) : []),
    [steps, dayFilter]
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
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

      {/* plan display */}
      {steps && stats && (
        <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
          <div className="min-w-0">
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
              {days.map((d) => (
                <button
                  key={d}
                  onClick={() => setDayFilter(dayFilter === d ? 'all' : d)}
                  aria-pressed={dayFilter === d}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-colors ${RING} ${
                    dayFilter === d
                      ? 'border-emerald-400/40 bg-emerald-400/15 text-emerald-600 dark:text-emerald-300'
                      : 'border-border/70 bg-card/50 text-muted-foreground hover:border-emerald-400/30'
                  }`}
                >
                  <CalendarDays className="h-3 w-3" aria-hidden /> Day {d}
                </button>
              ))}
            </div>

            {/* steps */}
            <div className="flex flex-col gap-2.5">
              <AnimatePresence initial={false}>
                {visibleSteps.map((s, i) => {
                  const bridge = bridges[s.skillKey]
                  const isOpen = openBridge === s.skillKey
                  return (
                    <motion.div
                      key={s.skillKey}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(i * 0.02, 0.3) }}
                      className={`rounded-2xl border p-4 ${
                        s.bridge
                          ? 'border-amber-400/30 bg-amber-400/[0.05]'
                          : 'border-border/80 bg-card'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background/50 font-mono text-[11px] font-bold text-emerald-300">
                          {s.day}·{i + 1}
                        </span>
                        <button
                          onClick={() => navigate({ name: 'lesson', sectionId: s.skillKey })}
                          className={`group min-w-0 flex-1 text-left ${RING} rounded-lg`}
                        >
                          <span className="block truncate text-[13.5px] font-semibold">
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
                          onClick={() => void completeStep(s.skillKey)}
                          title="Mark studied — feeds the twin"
                          className={`shrink-0 rounded-lg border border-emerald-400/25 bg-emerald-400/10 p-1.5 text-emerald-600 transition-colors hover:bg-emerald-400/20 dark:text-emerald-300 ${RING}`}
                        >
                          <CheckCircle2 className="h-4 w-4" aria-hidden />
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
                setStats(null)
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
                        v{p.version} · {p.stats.skills} skills · {p.stats.bridges} bridges
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
                <li>4. Re-sequence anytime: fresh twin data, new order, same mission.</li>
              </ul>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
