'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { formatDistanceToNow } from 'date-fns'
import {
  AlarmClock,
  AlertTriangle,
  Award,
  Brain,
  Check,
  ChevronLeft,
  ChevronRight,
  Dna,
  Eye,
  FileText,
  Flag,
  Hammer,
  History,
  Layers,
  Loader2,
  Minus,
  Plus,
  Radar,
  RotateCcw,
  Sparkles,
  Timer,
  TrendingDown,
  TrendingUp,
  Upload,
  X,
  Zap,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { RichText } from '../rich-text'
import { useToast } from '@/hooks/use-toast'
import { useStudy } from '@/store/useStudy'

// ============ X7 — Paper-DNA Forensic Analyzer (client view) ============
//
// Three stages: upload past papers → live SSE progress → forensic report
// (hot-topic heatmap, trend arrows, predictions, mixes, drift table).
// Past reports live in the sidebar and reload via /api/paper-dna/[id].
//
// X7 Pro layer:
//   · Forge Mock Paper — blueprint-driven mock exam assembled by
//     /api/paper-dna/mock (config → timed runner w/ palette → results +
//     twin feeding + full answer review).
//   · Trend radar — cross-paper weight comparison over saved analyses
//     (client-computed sparklines + rising/falling/stable tags) with a
//     merge-into-blueprint shortcut into the mock generator.

// ------------------------------------------------------------------ types --

interface Totals {
  questions: number
  files: number
  chaptersTouched: number
  yearsSpan: number
}

interface HotTopic {
  chapterId: string
  chapterTitle: string
  subjectName: string
  count: number
  share: number
  avgConfidence: number | null
  recentShare: number
}

interface DriftRow {
  chapterId: string
  chapterTitle: string
  subjectName: string
  trend: 'rising' | 'falling' | 'stable'
  slope: number
  series: Record<string, number>
}

interface Prediction {
  chapterId: string
  chapterTitle: string
  subjectName: string
  score: number
  reasons: string[]
}

interface Stats {
  hotTopics: HotTopic[]
  drift: DriftRow[]
  typeMix: Record<string, number>
  difficultyMix: Record<string, number>
  predictions: Prediction[]
  totals: Totals
}

interface FileMeta {
  name: string
  year: number | null
  questionCount: number
}

interface Report {
  id: string
  title: string
  createdAt: string
  files: FileMeta[]
  stats: Stats
}

interface PastItem {
  id: string
  title: string
  fileCount: number
  totals: Totals | null
  createdAt: string
}

// ---------------------- X7 Pro — mock paper & trend types -------------------

interface MockQuestion {
  q: string
  options: string[]
  answer: number
  explanation: string
  /** library section the question was drawn from (twin skill key) */
  sectionId: string
  sectionTitle: string
  chapterId: string
  chapterTitle: string
}

interface MockPaper {
  mockId: string
  sections: {
    sectionId: string
    chapterId: string
    chapterTitle: string
    questions: MockQuestion[]
  }[]
  meta: {
    totalQuestions: number
    requested: number
    minutes: number
    seed: number
    blueprint: {
      chapterId: string
      chapterTitle: string
      weight: number
      requested: number
      served: number
      available: number
    }[]
    sampling: string
    difficulty: string
  }
}

interface MockSeedChapter {
  chapterId: string
  chapterTitle: string
  weight: number
}

interface MockSeed {
  chapters: MockSeedChapter[]
  source: string
  defaultTotal?: number
}

interface TrendPaper {
  id: string
  title: string
  createdAt: string
  stats: Stats
}

type Stage = 'input' | 'running' | 'report'
type RunFile = { name: string; state: 'pending' | 'active' | 'done'; questions: number }

// ----------------------------------------------------------------- config --

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const ACCEPT_ATTR = '.pdf,.png,.jpg,.jpeg,.webp,.txt'
const ACCEPTED_EXT = new Set(['.pdf', '.png', '.jpg', '.jpeg', '.webp', '.txt'])
const MAX_FILES = 8
const MAX_BYTES = 10 * 1024 * 1024

/** UI bounds for the mock forge (the API accepts a wider 10–100 range) */
const MOCK_MIN_Q = 10
const MOCK_MAX_Q = 60
const MOCK_MIN_MINUTES = 10
const MOCK_MAX_MINUTES = 240
/** how many saved analyses feed the trend radar */
const TREND_PAPERS = 4

const TYPE_COLORS: Record<string, string> = {
  mcq: 'bg-emerald-400',
  numerical: 'bg-teal-400',
  short: 'bg-amber-400',
  long: 'bg-rose-400',
  assertion: 'bg-emerald-300',
}
const DIFFICULTY_COLORS: Record<string, string> = {
  easy: 'bg-emerald-400',
  medium: 'bg-amber-400',
  hard: 'bg-rose-400',
}

// ------------------------------------------------------------ sse client --

/** POST + parse a text/event-stream body, invoking onEvent per event */
async function streamSSE(
  url: string,
  init: RequestInit,
  onEvent: (event: string, data: Record<string, unknown>) => void
): Promise<void> {
  const res = await fetch(url, init)
  if (!res.ok || !res.body) {
    let message = `Request failed (${res.status})`
    try {
      const data = (await res.json()) as { error?: string }
      if (data?.error) message = data.error
    } catch {
      /* non-json error */
    }
    throw new Error(message)
  }
  const reader = res.body.getReader()
  const dec = new TextDecoder()
  let buf = ''
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    buf += dec.decode(value, { stream: true })
    let i: number
    while ((i = buf.indexOf('\n\n')) !== -1) {
      const raw = buf.slice(0, i)
      buf = buf.slice(i + 2)
      let event = 'message'
      const dataLines: string[] = []
      for (const line of raw.split('\n')) {
        if (line.startsWith('event:')) event = line.slice(6).trim()
        else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim())
      }
      if (dataLines.length) {
        try {
          onEvent(event, JSON.parse(dataLines.join('\n')) as Record<string, unknown>)
        } catch {
          /* skip malformed frame */
        }
      }
    }
  }
}

// ---------------------------------------------------------------- helpers --

/** defensive Stats coercion for data coming back from the API */
function coerceStats(raw: unknown): Stats {
  const s = (raw ?? {}) as Partial<Stats>
  return {
    hotTopics: Array.isArray(s.hotTopics) ? s.hotTopics : [],
    drift: Array.isArray(s.drift) ? s.drift : [],
    typeMix: s.typeMix && typeof s.typeMix === 'object' ? s.typeMix : {},
    difficultyMix:
      s.difficultyMix && typeof s.difficultyMix === 'object' ? s.difficultyMix : {},
    predictions: Array.isArray(s.predictions) ? s.predictions : [],
    totals: {
      questions: s.totals?.questions ?? 0,
      files: s.totals?.files ?? 0,
      chaptersTouched: s.totals?.chaptersTouched ?? 0,
      yearsSpan: s.totals?.yearsSpan ?? 0,
    },
  }
}

function fmtSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  return `${Math.max(1, Math.round(bytes / 1024))} KB`
}

/** sort period keys: printed years first (ascending), then "File N" */
function sortPeriodKeys(keys: string[]): string[] {
  const years = keys
    .filter((k) => /^\d{4}$/.test(k))
    .map(Number)
    .sort((a, b) => a - b)
    .map(String)
  const fileKeys = keys
    .filter((k) => /^File \d+$/.test(k))
    .sort((a, b) => Number(a.slice(5)) - Number(b.slice(5)))
  const rest = keys.filter((k) => !/^\d{4}$/.test(k) && !/^File \d+$/.test(k))
  return [...years, ...fileKeys, ...rest]
}

/** mm:ss clock for the mock runner */
function fmtClock(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = Math.max(0, Math.round(sec % 60))
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function clampInt(v: number, min: number, max: number): number {
  if (!Number.isFinite(v)) return min
  return Math.max(min, Math.min(max, Math.trunc(v)))
}

/** least-squares slope — same math as the paper-dna server aggregation */
function slopeOf(series: number[]): number {
  const n = series.length
  if (n < 2) return 0
  const meanX = (n - 1) / 2
  const meanY = series.reduce((a, b) => a + b, 0) / n
  let num = 0
  let den = 0
  for (let i = 0; i < n; i++) {
    num += (i - meanX) * (series[i] - meanY)
    den += (i - meanX) ** 2
  }
  return den === 0 ? 0 : num / den
}

/** largest-remainder split of `total` across weights (mirrors the mock API) */
function estimateSplit(weights: number[], total: number): number[] {
  const sum = weights.reduce((a, b) => a + b, 0)
  if (sum <= 0 || total <= 0) return weights.map(() => 0)
  const exact = weights.map((w) => (w / sum) * total)
  const base = exact.map(Math.floor)
  let rem = total - base.reduce((a, b) => a + b, 0)
  const order = exact
    .map((e, i) => ({ i, frac: e - Math.floor(e) }))
    .sort((a, b) => b.frac - a.frac)
  for (let k = 0; k < order.length && rem > 0; k++, rem--) base[order[k].i]++
  return base
}

function TrendIcon({ trend, className = 'h-4 w-4' }: { trend: string; className?: string }) {
  if (trend === 'rising')
    return <TrendingUp className={`${className} text-emerald-400`} aria-label="rising trend" />
  if (trend === 'falling')
    return <TrendingDown className={`${className} text-rose-400`} aria-label="falling trend" />
  return <Minus className={`${className} text-muted-foreground`} aria-label="stable trend" />
}

/** label + bar + count row for the type/difficulty mixes */
function MixBar({
  label,
  count,
  max,
  color,
}: {
  label: string
  count: number
  max: number
  color: string
}) {
  const pct = max > 0 ? Math.round((count / max) * 100) : 0
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 shrink-0 text-xs font-medium capitalize text-muted-foreground">
        {label}
      </span>
      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="w-8 shrink-0 text-right font-mono text-xs text-foreground">{count}</span>
    </div>
  )
}

// ------------------------------------------------- X7 Pro — trend radar --

/** tiny multi-bar sparkline: one bar per compared paper, height ∝ share */
function Sparkbars({ series, max }: { series: number[]; max: number }) {
  const w = 108
  const h = 28
  const bw = 10
  const gap = 8
  const n = series.length
  const totalW = n * bw + (n - 1) * gap
  const x0 = (w - totalW) / 2
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-7 w-[108px] shrink-0" aria-hidden>
      {series.map((v, i) => {
        const barH = max > 0 && v > 0 ? Math.max(3, Math.round((v / max) * (h - 6))) : 3
        return (
          <rect
            key={i}
            x={x0 + i * (bw + gap)}
            y={h - 3 - barH}
            width={bw}
            height={barH}
            rx={2}
            className={v > 0 ? 'fill-emerald-400' : 'fill-muted-foreground/30'}
          />
        )
      })}
    </svg>
  )
}

/**
 * Cross-paper weight comparison over the device's saved analyses. Everything
 * is computed client-side from the hot-topic shares (no LLM, no extra API):
 * per-chapter sparkline + rising/falling/stable tag + a one-line summary, and
 * a merge button that averages the weights into a mock blueprint.
 */
function TrendRadarCard({
  papers,
  onMerge,
}: {
  papers: TrendPaper[]
  onMerge: (chapters: MockSeedChapter[]) => void
}) {
  const rowsAll = useMemo(() => {
    const byChapter = new Map<string, { title: string; series: number[]; sum: number }>()
    papers.forEach((p, pi) => {
      for (const t of p.stats.hotTopics) {
        if (t.chapterId === 'unmapped') continue
        const entry =
          byChapter.get(t.chapterId) ??
          { title: t.chapterTitle, series: papers.map(() => 0), sum: 0 }
        entry.series[pi] = t.share
        entry.sum += t.share
        byChapter.set(t.chapterId, entry)
      }
    })
    return [...byChapter.entries()]
      .map(([chapterId, e]) => {
        const avg = e.sum / papers.length
        const rel = slopeOf(e.series) / Math.max(0.5, avg)
        return {
          chapterId,
          title: e.title,
          series: e.series,
          avg,
          trend: (rel > 0.15 ? 'rising' : rel < -0.15 ? 'falling' : 'stable') as
            | 'rising'
            | 'falling'
            | 'stable',
        }
      })
      .sort((a, b) => b.avg - a.avg)
  }, [papers])

  const rows = rowsAll.slice(0, 8)
  const maxShare = Math.max(0.001, ...rows.flatMap((r) => r.series))
  const risers = rows.filter((r) => r.trend === 'rising')
  const fallers = rows.filter((r) => r.trend === 'falling')
  const summary = risers.length
    ? `Rising: ${risers.slice(0, 2).map((r) => r.title).join(', ')}${
        fallers.length ? ` · cooling: ${fallers.slice(0, 2).map((r) => r.title).join(', ')}` : ''
      } — lean your next mock toward the risers.`
    : fallers.length
      ? `Cooling: ${fallers.slice(0, 2).map((r) => r.title).join(', ')} — everything else is holding steady.`
      : 'Weights are holding steady across these papers — a balanced mock works.'

  function merge() {
    const blueprint = rowsAll
      .filter((r) => r.avg > 0)
      .slice(0, 10)
      .map((r) => ({
        chapterId: r.chapterId,
        chapterTitle: r.title,
        weight: Math.max(1, Math.round(r.avg)),
      }))
    if (blueprint.length) onMerge(blueprint)
  }

  return (
    <section className="rounded-2xl border border-border bg-card p-5" aria-labelledby="pdna-trend">
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <Radar className="h-4 w-4 text-emerald-400" aria-hidden />
        <h3 id="pdna-trend" className="min-w-0 flex-1 text-sm font-semibold">
          Trend radar
          <span className="ml-2 font-normal text-muted-foreground">
            {papers.length} paper{papers.length === 1 ? '' : 's'} compared
          </span>
        </h3>
      </div>
      <ul className="mb-3 flex flex-wrap gap-1.5">
        {papers.map((p) => (
          <li
            key={p.id}
            className="max-w-56 truncate rounded-md bg-muted/60 px-1.5 py-0.5 text-[11px] text-muted-foreground"
            title={p.title}
          >
            {p.title}
          </li>
        ))}
      </ul>
      <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{summary}</p>
      {rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">No mapped chapters across these papers yet.</p>
      ) : (
        <ul className="flex flex-col gap-1.5">
          {rows.map((r) => (
            <li
              key={r.chapterId}
              className="flex items-center gap-3 rounded-xl border border-border/70 bg-muted/20 px-3 py-2"
            >
              <span className="min-w-0 flex-1 truncate text-[12.5px] font-semibold" title={r.title}>
                {r.title}
              </span>
              <Sparkbars series={r.series} max={maxShare} />
              <span className="w-12 shrink-0 text-right font-mono text-[11px] text-muted-foreground">
                {r.avg.toFixed(1)}%
              </span>
              <span className="flex w-16 shrink-0 items-center justify-end gap-1 text-[11px] font-medium">
                <TrendIcon trend={r.trend} className="h-3.5 w-3.5" />
                <span
                  className={
                    r.trend === 'rising'
                      ? 'text-emerald-400'
                      : r.trend === 'falling'
                        ? 'text-rose-400'
                        : 'text-muted-foreground'
                  }
                >
                  {r.trend}
                </span>
              </span>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        onClick={merge}
        className={`mt-4 inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20 ${FOCUS_RING}`}
      >
        <Layers className="h-4 w-4" aria-hidden /> Merge into blueprint
      </button>
    </section>
  )
}

// ------------------------------------------------- X7 Pro — mock forge --

type MockPhase = 'config' | 'loading' | 'run' | 'results'

/**
 * The full Forge Mock Paper flow: blueprint config → timed runner (question
 * palette, flagging, auto-submit) → results (score ring, per-chapter bars,
 * twin feeding, answer review). Stateless on purpose — the paper is assembled
 * server-side by /api/paper-dna/mock and lives only in this component.
 */
function MockFlow({ seed, onClose }: { seed: MockSeed; onClose: () => void }) {
  const { toast } = useToast()
  const ensureDevice = useStudy((s) => s.ensureDevice)

  const [phase, setPhase] = useState<MockPhase>('config')
  const [rows, setRows] = useState<MockSeedChapter[]>(() => seed.chapters.map((c) => ({ ...c })))
  const [total, setTotal] = useState(() =>
    clampInt(seed.defaultTotal ?? 20, MOCK_MIN_Q, MOCK_MAX_Q)
  )
  const [minutes, setMinutes] = useState(() =>
    clampInt(Math.round((seed.defaultTotal ?? 20) * 1.2), MOCK_MIN_MINUTES, MOCK_MAX_MINUTES)
  )
  const [error, setError] = useState<string | null>(null)

  const [paper, setPaper] = useState<MockPaper | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [flags, setFlags] = useState<boolean[]>([])
  const [cursor, setCursor] = useState(0)
  const [startedAt, setStartedAt] = useState(0)
  const [endedAt, setEndedAt] = useState<number | null>(null)
  const [now, setNow] = useState(() => Date.now())
  const [submitArm, setSubmitArm] = useState(false)
  const [quitArm, setQuitArm] = useState(false)
  const [feed, setFeed] = useState<'idle' | 'sending' | 'done'>('idle')
  const [fedCount, setFedCount] = useState(0)

  const cursorRef = useRef(0)

  const questions = useMemo<MockQuestion[]>(
    () => paper?.sections.flatMap((s) => s.questions) ?? [],
    [paper]
  )

  const score = useMemo(
    () => questions.reduce((a, q, i) => a + (answers[i] === q.answer ? 1 : 0), 0),
    [questions, answers]
  )

  /** per-chapter correct/total across the served blueprint sections */
  const breakdown = useMemo(() => {
    if (!paper) return []
    const map = new Map<string, { chapterTitle: string; right: number; total: number }>()
    paper.sections.forEach((s) =>
      map.set(s.chapterId, { chapterTitle: s.chapterTitle, right: 0, total: s.questions.length })
    )
    questions.forEach((q, i) => {
      const b = map.get(q.chapterId)
      if (b && answers[i] === q.answer) b.right++
    })
    return [...map.entries()].map(([chapterId, b]) => ({ chapterId, ...b }))
  }, [paper, questions, answers])

  // ------------------------------------------------------------- actions --

  async function generate() {
    const active = rows.filter((r) => r.weight > 0)
    if (!active.length) {
      setError('Give at least one chapter a weight above zero.')
      return
    }
    const deviceId = ensureDevice()
    if (!deviceId) {
      setError('Device not ready — please retry in a moment.')
      return
    }
    setPhase('loading')
    setError(null)
    try {
      const res = await fetch('/api/paper-dna/mock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deviceId,
          spec: {
            chapters: active.map(({ chapterId, weight }) => ({ chapterId, weight })),
            totalQuestions: total,
            minutes: clampInt(minutes, MOCK_MIN_MINUTES, MOCK_MAX_MINUTES),
          },
        }),
      })
      const data = (await res.json().catch(() => null)) as MockPaper | { error?: string } | null
      if (!res.ok || !data || !('sections' in data)) {
        throw new Error((data as { error?: string })?.error ?? 'Could not forge the mock paper.')
      }
      setPaper(data)
      setAnswers(data.sections.flatMap((s) => s.questions.map(() => null)))
      setFlags(data.sections.flatMap((s) => s.questions.map(() => false)))
      setCursor(0)
      cursorRef.current = 0
      setStartedAt(Date.now())
      setEndedAt(null)
      setNow(Date.now())
      setSubmitArm(false)
      setQuitArm(false)
      setFeed('idle')
      setFedCount(0)
      setPhase('run')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Could not forge the mock paper.'
      setError(message)
      setPhase('config')
      toast({ title: 'Mock paper', description: message, variant: 'destructive' })
    }
  }

  const finalize = useCallback(() => {
    setEndedAt(Date.now())
    setPhase('results')
  }, [])

  function answer(i: number, at = cursorRef.current) {
    setAnswers((prev) => {
      if (at < 0 || at >= prev.length) return prev
      const next = [...prev]
      next[at] = next[at] === i ? null : i // tap again to unanswer
      return next
    })
  }

  function toggleFlag(at = cursorRef.current) {
    setFlags((prev) => {
      if (at < 0 || at >= prev.length) return prev
      const next = [...prev]
      next[at] = !next[at]
      return next
    })
  }

  function goTo(i: number) {
    const next = Math.max(0, Math.min(i, questions.length - 1))
    if (next === cursorRef.current) return
    cursorRef.current = next
    setCursor(next)
  }

  function nudgeWeight(idx: number, delta: number) {
    setRows((prev) =>
      prev.map((r, i) =>
        i === idx ? { ...r, weight: clampInt(r.weight + delta, 0, 50) } : r
      )
    )
  }

  /** stream every miss into the cognitive twin (kind 'exam', weight 2) */
  async function feedTwin() {
    if (!paper || feed === 'sending') return
    const deviceId = ensureDevice()
    if (!deviceId) return
    const misses = questions.filter((q, i) => answers[i] !== q.answer)
    if (!misses.length) return
    setFeed('sending')
    const results = await Promise.allSettled(
      misses.map((m) =>
        fetch('/api/twin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            deviceId,
            skillKey: m.sectionId,
            kind: 'exam',
            correct: false,
            weight: 2,
            meta: { source: 'paper-dna-mock', mockId: paper.mockId, chapterId: m.chapterId },
          }),
        }).then((r) => {
          if (!r.ok) throw new Error('twin-post-failed')
        })
      )
    )
    const ok = results.filter((r) => r.status === 'fulfilled').length
    setFedCount(ok)
    setFeed('done')
    toast({
      title: 'Digital twin',
      description: `Twin updated with ${ok} miss${ok === 1 ? '' : 'es'}.`,
    })
  }

  // -------------------------------------------------------------- effects --

  // countdown ticker
  useEffect(() => {
    if (phase !== 'run') return
    const t = setInterval(() => setNow(Date.now()), 500)
    return () => clearInterval(t)
  }, [phase])

  const limitSec = paper ? paper.meta.minutes * 60 : 0
  const elapsedSec = startedAt ? Math.floor(((endedAt ?? now) - startedAt) / 1000) : 0
  const remainingSec = Math.max(0, limitSec - elapsedSec)

  // auto-submit at 00:00
  useEffect(() => {
    if (phase === 'run' && paper && limitSec > 0 && remainingSec <= 0) finalize()
  }, [phase, paper, limitSec, remainingSec, finalize])

  // armed confirms reset after a beat
  useEffect(() => {
    if (!submitArm) return
    const t = setTimeout(() => setSubmitArm(false), 3000)
    return () => clearTimeout(t)
  }, [submitArm])
  useEffect(() => {
    if (!quitArm) return
    const t = setTimeout(() => setQuitArm(false), 3000)
    return () => clearTimeout(t)
  }, [quitArm])

  // run-phase keyboard shortcuts: 1–9 answer, ←/→ move, F flag
  useEffect(() => {
    if (phase !== 'run' || !paper) return
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (document.querySelector('[role="dialog"], dialog[open]')) return
      const t = e.target as HTMLElement | null
      if (
        t &&
        (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)
      )
        return
      const i = cursorRef.current
      if (i < 0 || i >= questions.length) return
      if (e.key >= '1' && e.key <= '9') {
        const idx = Number(e.key) - 1
        if (idx < questions[i].options.length) {
          e.preventDefault()
          answer(idx, i)
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goTo(Math.max(0, i - 1))
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goTo(i + 1)
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        toggleFlag(i)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, paper, questions])

  // ------------------------------------------------------------ rendering --

  // ===== config =====
  if (phase === 'config' || phase === 'loading') {
    const active = rows.filter((r) => r.weight > 0)
    const est = estimateSplit(
      rows.map((r) => r.weight),
      total
    )
    const perQ = total > 0 ? Math.round((minutes * 60) / total) : 0
    return (
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-border bg-card p-5 sm:p-6"
        aria-labelledby="mock-config"
      >
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
            <Hammer className="h-5 w-5" aria-hidden />
          </span>
          <h2 id="mock-config" className="min-w-0 flex-1 text-base font-semibold">
            Forge a mock paper
          </h2>
          <button
            type="button"
            onClick={onClose}
            className={`rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-rose-500/15 hover:text-rose-400 ${FOCUS_RING}`}
            aria-label="Close the mock forge"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <p className="mb-5 text-xs text-muted-foreground">
          Blueprint from <span className="font-medium text-foreground">{seed.source}</span> — tune the
          mix, then draw a fresh seeded sample from the question bank.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <label htmlFor="mock-total" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Questions
              </label>
              <span className="rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 font-mono text-sm font-bold text-emerald-300">
                {total}
              </span>
            </div>
            <Slider
              id="mock-total"
              value={[total]}
              min={MOCK_MIN_Q}
              max={MOCK_MAX_Q}
              step={1}
              onValueChange={(v) => setTotal(v[0] ?? total)}
              aria-label="Total questions"
            />
            <div className="mt-1 flex items-center justify-between text-[10px] text-muted-foreground">
              <span>{MOCK_MIN_Q}</span>
              <span>{MOCK_MAX_Q}</span>
            </div>
          </div>
          <div>
            <label htmlFor="mock-minutes" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Time limit (minutes)
            </label>
            <div className="flex items-center gap-3">
              <Input
                id="mock-minutes"
                type="number"
                inputMode="numeric"
                value={minutes}
                min={MOCK_MIN_MINUTES}
                max={MOCK_MAX_MINUTES}
                onChange={(e) => {
                  const v = Number(e.target.value)
                  setMinutes(Number.isFinite(v) ? v : MOCK_MIN_MINUTES)
                }}
                onBlur={() => setMinutes((m) => clampInt(m, MOCK_MIN_MINUTES, MOCK_MAX_MINUTES))}
                className={`${FOCUS_RING} bg-background w-24 font-mono`}
              />
              <span className="text-[11px] text-muted-foreground">
                ≈ {Math.max(0, perQ)} s per question · auto-submit at 00:00
              </span>
            </div>
          </div>
        </div>

        <h3 className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Chapter weights
        </h3>
        <ul className="flex flex-col gap-2">
          {rows.map((r, i) => {
            const off = r.weight <= 0
            const share = active.length && !off ? Math.round((r.weight / active.reduce((a, c) => a + c.weight, 0)) * 100) : 0
            return (
              <li
                key={r.chapterId}
                className={`flex flex-wrap items-center gap-2 rounded-xl border px-3 py-2.5 sm:flex-nowrap ${
                  off
                    ? 'border-border/60 bg-muted/20 opacity-55'
                    : 'border-emerald-500/25 bg-emerald-500/5'
                }`}
              >
                <span className="min-w-0 flex-1 truncate text-[13px] font-semibold" title={r.chapterTitle}>
                  {r.chapterTitle}
                </span>
                <span className="shrink-0 rounded-md bg-black/20 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                  ~{est[i]} Qs · {share}%
                </span>
                <span className="flex shrink-0 items-center gap-1">
                  <button
                    type="button"
                    onClick={() => nudgeWeight(i, -1)}
                    disabled={off}
                    aria-label={`Lower ${r.chapterTitle} weight`}
                    className={`flex h-7 w-7 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30 ${FOCUS_RING}`}
                  >
                    <Minus className="h-3.5 w-3.5" aria-hidden />
                  </button>
                  <span className="w-8 text-center font-mono text-sm font-bold">{r.weight}</span>
                  <button
                    type="button"
                    onClick={() => nudgeWeight(i, 1)}
                    aria-label={`Raise ${r.chapterTitle} weight`}
                    className={`flex h-7 w-7 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground ${FOCUS_RING}`}
                  >
                    <Plus className="h-3.5 w-3.5" aria-hidden />
                  </button>
                </span>
              </li>
            )
          })}
        </ul>

        {error && (
          <p className="mt-4 flex items-start gap-2 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-300">
            <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
            {error}
          </p>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={generate}
            disabled={phase === 'loading' || !active.length}
            className={`inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40 ${FOCUS_RING}`}
          >
            {phase === 'loading' ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            ) : (
              <Hammer className="h-4 w-4" aria-hidden />
            )}
            {phase === 'loading' ? 'Forging…' : `Generate mock · ${total} Qs`}
          </button>
          <button
            type="button"
            onClick={onClose}
            className={`rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground ${FOCUS_RING}`}
          >
            Cancel
          </button>
          <span className="text-[11px] text-muted-foreground">
            Every generate draws a new seeded sample.
          </span>
        </div>
      </motion.section>
    )
  }

  // ===== run =====
  if (phase === 'run' && paper) {
    const q = questions[cursor]
    const answered = answers.filter((a) => a !== null).length
    const danger = remainingSec <= 60
    const low = remainingSec <= Math.max(60, limitSec * 0.2)

    const paletteButton = (i: number) => {
      const isCurrent = i === cursor
      const isAnswered = answers[i] !== null
      const isFlagged = flags[i]
      return (
        <button
          key={i}
          type="button"
          onClick={() => goTo(i)}
          aria-label={`Question ${i + 1}${isAnswered ? ' (answered)' : ' (unanswered)'}${isFlagged ? ' (flagged)' : ''}`}
          aria-current={isCurrent ? 'true' : undefined}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border font-mono text-xs font-bold transition-colors ${FOCUS_RING} ${
            isCurrent
              ? 'border-emerald-400 bg-emerald-500/20 text-foreground ring-1 ring-emerald-400/60'
              : isFlagged
                ? 'border-amber-300/50 bg-amber-300/10 text-amber-300'
                : isAnswered
                  ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
                  : 'border-border bg-muted/40 text-muted-foreground hover:border-emerald-500/40'
          }`}
        >
          {i + 1}
        </button>
      )
    }

    return (
      <div className="flex flex-col gap-5">
        {/* top bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <Hammer className="h-4 w-4 text-emerald-400" aria-hidden /> Mock paper · Q {cursor + 1}/
            {questions.length}
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-mono text-sm font-bold tabular-nums transition-colors ${
                danger
                  ? 'border-rose-400/50 bg-rose-400/10 text-rose-300'
                  : low
                    ? 'border-amber-300/50 bg-amber-300/10 text-amber-300'
                    : 'border-border bg-card text-foreground'
              }`}
              role="timer"
              aria-label="Time remaining"
            >
              {danger ? <AlarmClock className="h-3.5 w-3.5" aria-hidden /> : <Timer className="h-3.5 w-3.5" aria-hidden />}
              {fmtClock(remainingSec)}
            </span>
            <button
              type="button"
              onClick={() => {
                if (quitArm) onClose()
                else setQuitArm(true)
              }}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${FOCUS_RING} ${
                quitArm
                  ? 'border-rose-400/60 bg-rose-400/15 text-rose-300'
                  : 'border-border bg-card text-muted-foreground hover:border-rose-400/40 hover:text-rose-300'
              }`}
            >
              <X className="h-3.5 w-3.5" aria-hidden /> {quitArm ? 'Tap again to quit' : 'Quit'}
            </button>
          </div>
        </div>

        {/* progress strip */}
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to question ${i + 1}`}
              className={`h-1.5 flex-1 rounded-full transition-all ${FOCUS_RING} ${
                i === cursor
                  ? 'bg-emerald-400'
                  : answers[i] !== null
                    ? 'bg-emerald-400/50'
                    : flags[i]
                      ? 'bg-amber-400/70'
                      : 'bg-muted'
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_196px]">
          <div className="flex min-w-0 flex-col gap-4">
            {/* mobile palette strip */}
            <div className="-mx-1 overflow-x-auto px-1 pb-1 lg:hidden" aria-label="Question palette">
              <div className="flex w-max gap-1.5">{questions.map((_, i) => paletteButton(i))}</div>
            </div>

            {/* question card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={cursor}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span
                    className="min-w-0 truncate rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-300"
                    title={`${q.chapterTitle} · ${q.sectionTitle}`}
                  >
                    {q.chapterTitle} · §{q.sectionTitle}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleFlag()}
                    aria-pressed={flags[cursor]}
                    aria-label={flags[cursor] ? 'Unflag question' : 'Flag for review'}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all ${FOCUS_RING} ${
                      flags[cursor]
                        ? 'border-amber-300/50 bg-amber-300/10 text-amber-300'
                        : 'border-border text-muted-foreground hover:border-amber-300/40 hover:text-amber-300'
                    }`}
                  >
                    <Flag className="h-4 w-4" aria-hidden />
                  </button>
                </div>

                <h2 className="text-[17px] font-semibold leading-relaxed sm:text-lg">
                  <RichText text={q.q} />
                </h2>

                <div className="mt-6 grid gap-2.5">
                  {q.options.map((opt, i) => {
                    const picked = answers[cursor] === i
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => answer(i)}
                        aria-pressed={picked}
                        className={`flex items-start gap-3 rounded-xl border px-4 py-3.5 text-left transition-all ${FOCUS_RING} ${
                          picked
                            ? 'border-emerald-400/60 bg-emerald-500/10 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.25)]'
                            : 'border-border bg-muted/20 hover:border-emerald-500/40 hover:bg-muted/40'
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] font-bold ${
                            picked
                              ? 'border-emerald-400 bg-emerald-400 text-emerald-950'
                              : 'border-border text-muted-foreground'
                          }`}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-[14px] leading-relaxed">
                          <RichText text={opt} />
                        </span>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* bottom bar */}
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => goTo(cursor - 1)}
                disabled={cursor === 0}
                className={`inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30 ${FOCUS_RING}`}
              >
                <ChevronLeft className="h-4 w-4" aria-hidden /> Prev
              </button>
              <span className="font-mono text-xs text-muted-foreground">
                {answered}/{questions.length} answered
              </span>
              {cursor < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => goTo(cursor + 1)}
                  className={`inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-400 ${FOCUS_RING}`}
                >
                  Next <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    if (submitArm) finalize()
                    else setSubmitArm(true)
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-colors ${FOCUS_RING} ${
                    submitArm
                      ? 'bg-rose-500 hover:bg-rose-500/85'
                      : 'bg-amber-500 hover:bg-amber-500/85 dark:bg-amber-300 dark:text-amber-950 dark:hover:bg-amber-200'
                  }`}
                >
                  <Check className="h-4 w-4" aria-hidden />
                  {submitArm ? 'Tap again to submit' : 'Submit paper'}
                </button>
              )}
            </div>

            {cursor === questions.length - 1 && answered < questions.length && (
              <p className="text-center text-xs text-amber-300/90">
                {questions.length - answered} question
                {questions.length - answered !== 1 ? 's' : ''} still unanswered.
              </p>
            )}

            <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded border border-border bg-muted px-1 font-mono text-[10px]">1</kbd>–
                <kbd className="rounded border border-border bg-muted px-1 font-mono text-[10px]">4</kbd> answer
              </span>
              <span aria-hidden className="text-muted-foreground/50">·</span>
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded border border-border bg-muted px-1 font-mono text-[10px]">←</kbd>
                <kbd className="rounded border border-border bg-muted px-1 font-mono text-[10px]">→</kbd> move
              </span>
              <span aria-hidden className="text-muted-foreground/50">·</span>
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded border border-border bg-muted px-1 font-mono text-[10px]">F</kbd> flag
              </span>
            </p>
          </div>

          {/* desktop palette */}
          <aside className="hidden lg:block">
            <div className="rounded-2xl border border-border bg-card p-3">
              <h3 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Palette
              </h3>
              <div className="grid grid-cols-4 gap-1.5">{questions.map((_, i) => paletteButton(i))}</div>
              <div className="mt-3 flex flex-col gap-1.5 border-t border-border pt-3 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-emerald-400/40" /> answered
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-amber-400/70" /> flagged
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-muted" /> untouched
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (submitArm) finalize()
                  else setSubmitArm(true)
                }}
                className={`mt-3 w-full rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${FOCUS_RING} ${
                  submitArm
                    ? 'bg-rose-500 text-white hover:bg-rose-500/85'
                    : 'bg-amber-500 text-white hover:bg-amber-500/85 dark:bg-amber-300 dark:text-amber-950 dark:hover:bg-amber-200'
                }`}
              >
                {submitArm ? 'Tap again to submit' : 'Submit paper'}
              </button>
            </div>
          </aside>
        </div>
      </div>
    )
  }

  // ===== results =====
  if (phase === 'results' && paper) {
    const pct = questions.length ? Math.round((score / questions.length) * 100) : 0
    const timeUsed = Math.min(elapsedSec, limitSec)
    const grade =
      pct >= 90 ? 'Outstanding' : pct >= 75 ? 'Strong pass' : pct >= 60 ? 'Pass' : pct >= 40 ? 'Borderline' : 'Needs work'
    const misses = questions.filter((q, i) => answers[i] !== q.answer).length

    return (
      <div className="flex flex-col gap-6">
        {/* hero */}
        <section className="rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-card to-card p-5 sm:p-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold ${
                  pct >= 60
                    ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                    : 'border-amber-300/30 bg-amber-300/10 text-amber-300'
                }`}
              >
                <Award className="h-3.5 w-3.5" aria-hidden /> {grade}
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight">
                {score} / {questions.length} correct
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {fmtClock(timeUsed)} used of {fmtClock(limitSec)} · paper {paper.mockId}
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                seed {paper.meta.seed.toString(36)} · {paper.meta.sampling}
              </p>
              {paper.meta.totalQuestions < paper.meta.requested && (
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[11px] text-amber-200">
                  <AlertTriangle className="h-3 w-3" aria-hidden /> pool capped at{' '}
                  {paper.meta.totalQuestions} of {paper.meta.requested} requested
                </p>
              )}
            </div>
            {/* score ring */}
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
              <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
                <circle cx="60" cy="60" r="50" fill="none" strokeWidth="10" className="stroke-muted/30" />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  strokeWidth="10"
                  strokeLinecap="round"
                  className={pct >= 60 ? 'stroke-emerald-400' : 'stroke-amber-400'}
                  strokeDasharray={`${(pct / 100) * 314.2} 314.2`}
                  initial={false}
                  animate={{ strokeDashoffset: 0 }}
                  style={{ transition: 'stroke-dasharray 1s ease' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-mono text-2xl font-bold">{pct}%</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">score</span>
              </div>
            </div>
          </div>
        </section>

        {/* blueprint performance */}
        <section aria-labelledby="mock-breakdown">
          <h3 id="mock-breakdown" className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Blueprint performance
          </h3>
          <div className="flex flex-col gap-2">
            {breakdown.map((b) => (
              <div
                key={b.chapterId}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/20 px-3.5 py-2.5"
              >
                <span className="min-w-0 flex-1 truncate text-[12.5px] font-semibold" title={b.chapterTitle}>
                  {b.chapterTitle}
                </span>
                <span className="h-2 w-28 shrink-0 overflow-hidden rounded-full bg-muted sm:w-44">
                  <motion.span
                    className={`block h-full rounded-full ${b.right === b.total ? 'bg-emerald-400' : 'bg-amber-400'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(b.right / Math.max(1, b.total)) * 100}%` }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
                <span className="shrink-0 font-mono text-[12px] font-bold text-muted-foreground">
                  {b.right}/{b.total}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* twin feed */}
        <section className="rounded-2xl border border-border bg-card p-5" aria-labelledby="mock-twin">
          <h3 id="mock-twin" className="flex items-center gap-2 text-sm font-semibold">
            <Brain className="h-4 w-4 text-emerald-400" aria-hidden /> Feed the twin
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            {misses === 0
              ? 'Perfect run — the twin has nothing new to learn from this paper.'
              : `Send each of the ${misses} miss${misses === 1 ? '' : 'es'} to your cognitive digital twin as exam evidence (weight 2) so mastery decays where it matters.`}
          </p>
          {misses > 0 && (
            <button
              type="button"
              onClick={feedTwin}
              disabled={feed === 'sending'}
              className={`mt-3 inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-50 ${FOCUS_RING}`}
            >
              {feed === 'sending' ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <Brain className="h-4 w-4" aria-hidden />
              )}
              {feed === 'sending'
                ? 'Feeding…'
                : feed === 'done'
                  ? `Fed ${fedCount} miss${fedCount === 1 ? '' : 'es'}`
                  : `Feed ${misses} miss${misses === 1 ? '' : 'es'} to the twin`}
            </button>
          )}
          {feed === 'done' && (
            <p className="mt-2 flex items-center gap-1.5 text-xs text-emerald-300">
              <Check className="h-3.5 w-3.5" aria-hidden /> Twin updated with {fedCount} miss
              {fedCount === 1 ? '' : 'es'}.
            </p>
          )}
        </section>

        {/* answer review */}
        <section aria-labelledby="mock-review">
          <h3 id="mock-review" className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            <Eye className="h-4 w-4 text-emerald-400" aria-hidden /> Answer review
          </h3>
          <div className="grid gap-3">
            {questions.map((q, i) => {
              const picked = answers[i]
              const correct = picked === q.answer
              return (
                <div
                  key={i}
                  className={`rounded-xl border p-4 sm:p-5 ${
                    correct
                      ? 'border-emerald-400/25 bg-emerald-400/[0.04]'
                      : 'border-rose-400/30 bg-rose-400/[0.04]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="min-w-0 truncate font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Q{i + 1} · {q.chapterTitle} · §{q.sectionTitle}
                    </span>
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        correct ? 'bg-emerald-400/15 text-emerald-300' : 'bg-rose-400/15 text-rose-300'
                      }`}
                    >
                      {correct ? <Check className="h-3 w-3" aria-hidden /> : <X className="h-3 w-3" aria-hidden />}
                    </span>
                  </div>
                  <p className="mt-2 text-[14px] font-semibold leading-relaxed">
                    <RichText text={q.q} />
                  </p>
                  <div className="mt-3 space-y-1.5 text-[13px]">
                    {picked !== null && !correct && (
                      <p className="text-rose-300">
                        <span className="font-semibold">Your answer:</span>{' '}
                        {String.fromCharCode(65 + picked)}. {q.options[picked]}
                      </p>
                    )}
                    {picked === null && (
                      <p className="text-amber-300">
                        <span className="font-semibold">Unanswered</span>
                      </p>
                    )}
                    <p className="text-emerald-300">
                      <span className="font-semibold">Correct:</span>{' '}
                      {String.fromCharCode(65 + q.answer)}. {q.options[q.answer]}
                    </p>
                    <p className="border-t border-dashed border-border/60 pt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                      <RichText text={q.explanation} />
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setPaper(null)
              setPhase('config')
            }}
            className={`inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-400 ${FOCUS_RING}`}
          >
            <RotateCcw className="h-4 w-4" aria-hidden /> New mock
          </button>
          <button
            type="button"
            onClick={onClose}
            className={`inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-emerald-400/40 ${FOCUS_RING}`}
          >
            <Dna className="h-4 w-4 text-emerald-400" aria-hidden /> Back to Paper-DNA
          </button>
        </div>
      </div>
    )
  }

  return null
}

// ------------------------------------------------------------- main view --

export function PaperDnaView() {
  const { toast } = useToast()
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const navigate = useStudy((s) => s.navigate)

  const [stage, setStage] = useState<Stage>('input')
  const [title, setTitle] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [dragOver, setDragOver] = useState(false)

  const [runFiles, setRunFiles] = useState<RunFile[]>([])
  const [stageLine, setStageLine] = useState('')
  const [warnings, setWarnings] = useState<string[]>([])
  const [runError, setRunError] = useState<string | null>(null)

  const [report, setReport] = useState<Report | null>(null)
  const [past, setPast] = useState<PastItem[]>([])
  const [pastLoading, setPastLoading] = useState(true)
  const [openingId, setOpeningId] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const deviceIdRef = useRef('')

  // device + past analyses on mount
  useEffect(() => {
    deviceIdRef.current = ensureDevice()
    const id = deviceIdRef.current
    if (!id) return
    let alive = true
    ;(async () => {
      try {
        const res = await fetch(`/api/paper-dna?deviceId=${encodeURIComponent(id)}`)
        const data = (await res.json()) as { analyses?: PastItem[] }
        if (alive) setPast(Array.isArray(data?.analyses) ? data.analyses : [])
      } catch {
        /* sidebar just stays empty */
      } finally {
        if (alive) setPastLoading(false)
      }
    })()
    return () => {
      alive = false
    }
  }, [ensureDevice])

  const refreshPast = useCallback(async () => {
    const id = deviceIdRef.current || ensureDevice()
    if (!id) return
    try {
      const res = await fetch(`/api/paper-dna?deviceId=${encodeURIComponent(id)}`)
      const data = (await res.json()) as { analyses?: PastItem[] }
      setPast(Array.isArray(data?.analyses) ? data.analyses : [])
    } catch {
      /* keep the previous list */
    }
  }, [ensureDevice])

  // ---------------------------------------------------------- file intake --

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      const next = [...files]
      const problems: string[] = []
      for (const f of Array.from(incoming)) {
        const ext = f.name.slice(f.name.lastIndexOf('.')).toLowerCase()
        if (!ACCEPTED_EXT.has(ext)) {
          problems.push(`"${f.name}" is not a PDF, image or text file`)
          continue
        }
        if (f.size > MAX_BYTES) {
          problems.push(`"${f.name}" is larger than 10 MB`)
          continue
        }
        if (next.some((x) => x.name === f.name && x.size === f.size)) continue
        if (next.length >= MAX_FILES) {
          problems.push(`at most ${MAX_FILES} files per analysis`)
          break
        }
        next.push(f)
      }
      setFiles(next)
      if (problems.length) {
        toast({
          title: 'Some files were skipped',
          description: problems.slice(0, 3).join(' · '),
          variant: 'destructive',
        })
      }
    },
    [files, toast]
  )

  const removeFile = (idx: number) => setFiles(files.filter((_, i) => i !== idx))

  // ------------------------------------------------------------ run (SSE) --

  const runAnalysis = useCallback(async () => {
    if (!files.length) return
    const deviceId = deviceIdRef.current || ensureDevice()
    if (!deviceId) {
      toast({ title: 'Device not ready', description: 'Please retry in a moment.' })
      return
    }
    const form = new FormData()
    form.set('deviceId', deviceId)
    if (title.trim()) form.set('title', title.trim())
    for (const f of files) form.append('files', f)

    setRunFiles(files.map((f) => ({ name: f.name, state: 'pending', questions: 0 })))
    setStageLine('Uploading the papers…')
    setWarnings([])
    setRunError(null)
    setStage('running')

    try {
      await streamSSE('/api/paper-dna', { method: 'POST', body: form }, (event, data) => {
        if (event === 'stage') {
          const label = typeof data.label === 'string' ? data.label : ''
          setStageLine(label)
          const fi = typeof data.fileIndex === 'number' ? data.fileIndex : null
          if (fi !== null) {
            setRunFiles((prev) =>
              prev.map((r, i) =>
                i === fi && r.state !== 'done' ? { ...r, state: 'active' } : r
              )
            )
          }
        } else if (event === 'file') {
          const idx = typeof data.index === 'number' ? data.index : -1
          const n = typeof data.questions === 'number' ? data.questions : 0
          setRunFiles((prev) =>
            prev.map((r, i) => (i === idx ? { ...r, state: 'done', questions: n } : r))
          )
        } else if (event === 'warn') {
          const message = typeof data.message === 'string' ? data.message : 'A file was skipped'
          setWarnings((prev) => [...prev, message])
        } else if (event === 'done') {
          const stats = coerceStats(data.stats)
          const fileMetas = Array.isArray(data.files) ? (data.files as FileMeta[]) : []
          setReport({
            id: typeof data.id === 'string' ? data.id : '',
            title: typeof data.title === 'string' ? data.title : 'Paper analysis',
            createdAt: typeof data.createdAt === 'string' ? data.createdAt : new Date().toISOString(),
            files: fileMetas,
            stats,
          })
          setStage('report')
          void refreshPast()
        } else if (event === 'error') {
          setRunError(
            typeof data.error === 'string' ? data.error : 'The forensic analysis failed.'
          )
        }
      })
    } catch (err) {
      setRunError(err instanceof Error ? err.message : 'The upload failed — please retry.')
    }
  }, [files, title, ensureDevice, refreshPast, toast])

  // ------------------------------------------------- load a past analysis --

  const openAnalysis = useCallback(
    async (id: string) => {
      const deviceId = deviceIdRef.current || ensureDevice()
      if (!deviceId) return
      setOpeningId(id)
      try {
        const res = await fetch(
          `/api/paper-dna/${encodeURIComponent(id)}?deviceId=${encodeURIComponent(deviceId)}`
        )
        const data = (await res.json()) as {
          analysis?: {
            id: string
            title: string
            createdAt: string
            files: FileMeta[]
            stats: unknown
          }
          error?: string
        }
        if (!res.ok || !data?.analysis) {
          throw new Error(data?.error ?? 'Could not open that analysis.')
        }
        setReport({
          id: data.analysis.id,
          title: data.analysis.title,
          createdAt: data.analysis.createdAt,
          files: Array.isArray(data.analysis.files) ? data.analysis.files : [],
          stats: coerceStats(data.analysis.stats),
        })
        setStage('report')
      } catch (err) {
        toast({
          title: 'Paper-DNA',
          description: err instanceof Error ? err.message : 'Could not open that analysis.',
          variant: 'destructive',
        })
      } finally {
        setOpeningId(null)
      }
    },
    [ensureDevice, toast]
  )

  const resetAll = () => {
    setStage('input')
    setFiles([])
    setTitle('')
    setReport(null)
    setRunFiles([])
    setWarnings([])
    setRunError(null)
    setStageLine('')
  }

  // --------------------------------------------- X7 Pro — mock + trends state --

  const [mockSeed, setMockSeed] = useState<MockSeed | null>(null)
  const [mockNonce, setMockNonce] = useState(0)
  const [trend, setTrend] = useState<{ key: string; papers: TrendPaper[] } | null>(null)
  const [forgingId, setForgingId] = useState<string | null>(null)

  const trendKey = useMemo(() => past.slice(0, TREND_PAPERS).map((p) => p.id).join(','), [past])

  /** pull the latest few saved analyses in full for the trend radar */
  useEffect(() => {
    if (past.length < 2) return
    const deviceId = deviceIdRef.current || ensureDevice()
    if (!deviceId) return
    const key = trendKey
    let alive = true
    void (async () => {
      const rows = await Promise.all(
        past.slice(0, TREND_PAPERS).map(async (p) => {
          try {
            const res = await fetch(
              `/api/paper-dna/${encodeURIComponent(p.id)}?deviceId=${encodeURIComponent(deviceId)}`
            )
            if (!res.ok) return null
            const data = (await res.json()) as {
              analysis?: { id: string; title: string; createdAt: string; stats: unknown }
            }
            const a = data?.analysis
            if (!a) return null
            return { id: a.id, title: a.title, createdAt: a.createdAt, stats: coerceStats(a.stats) }
          } catch {
            return null
          }
        })
      )
      const papers = rows
        .filter((r): r is TrendPaper => r !== null)
        .reverse() // oldest → newest, left to right
      if (alive) setTrend({ key, papers })
    })()
    return () => {
      alive = false
    }
  }, [past, trendKey, ensureDevice])

  const trendReady = trend !== null && trend.key === trendKey && trend.papers.length >= 2

  /** blueprint from a loaded forensic report (weights = mapped question counts) */
  const openMockFromReport = useCallback(() => {
    if (!report) return
    const chapters: MockSeedChapter[] = report.stats.hotTopics
      .filter((t) => t.chapterId !== 'unmapped')
      .slice(0, 12)
      .map((t) => ({ chapterId: t.chapterId, chapterTitle: t.chapterTitle, weight: Math.max(1, t.count) }))
    if (!chapters.length) {
      toast({
        title: 'Paper-DNA',
        description: 'This analysis has no chapter matches to build a blueprint from.',
        variant: 'destructive',
      })
      return
    }
    setMockNonce((n) => n + 1)
    setMockSeed({
      chapters,
      source: report.title,
      defaultTotal: clampInt(report.stats.totals.questions, MOCK_MIN_Q, 30),
    })
  }, [report, toast])

  /** averaged cross-paper weights from the trend radar → mock blueprint */
  const openMockMerged = useCallback(
    (chapters: MockSeedChapter[]) => {
      setMockNonce((n) => n + 1)
      setMockSeed({ chapters, source: 'merged trend blueprint', defaultTotal: 20 })
    },
    []
  )

  /** forge straight from a saved analysis without opening its report first */
  const forgeFromPast = useCallback(
    async (id: string) => {
      const deviceId = deviceIdRef.current || ensureDevice()
      if (!deviceId) return
      setForgingId(id)
      try {
        const res = await fetch(
          `/api/paper-dna/${encodeURIComponent(id)}?deviceId=${encodeURIComponent(deviceId)}`
        )
        const data = (await res.json()) as {
          analysis?: { title: string; stats: unknown }
          error?: string
        }
        if (!res.ok || !data?.analysis) {
          throw new Error(data?.error ?? 'Could not open that analysis.')
        }
        const stats = coerceStats(data.analysis.stats)
        const chapters: MockSeedChapter[] = stats.hotTopics
          .filter((t) => t.chapterId !== 'unmapped')
          .slice(0, 12)
          .map((t) => ({
            chapterId: t.chapterId,
            chapterTitle: t.chapterTitle,
            weight: Math.max(1, t.count),
          }))
        if (!chapters.length) {
          throw new Error('That analysis has no mapped chapters to forge from.')
        }
        setMockNonce((n) => n + 1)
        setMockSeed({
          chapters,
          source: data.analysis.title,
          defaultTotal: clampInt(stats.totals.questions, MOCK_MIN_Q, 30),
        })
      } catch (err) {
        toast({
          title: 'Paper-DNA',
          description: err instanceof Error ? err.message : 'Could not forge from that analysis.',
          variant: 'destructive',
        })
      } finally {
        setForgingId(null)
      }
    },
    [ensureDevice, toast]
  )

  // ------------------------------------------------------ report subviews --

  const trendByChapter = useMemo(() => {
    const m = new Map<string, string>()
    for (const d of report?.stats.drift ?? []) m.set(d.chapterId, d.trend)
    return m
  }, [report])

  const maxShare = useMemo(
    () => Math.max(0.001, ...(report?.stats.hotTopics ?? []).map((t) => t.share)),
    [report]
  )

  const unmapped = report?.stats.hotTopics.find((t) => t.chapterId === 'unmapped') ?? null

  const driftColumns = useMemo(() => {
    const keys = new Set<string>()
    for (const d of report?.stats.drift ?? []) {
      for (const k of Object.keys(d.series)) keys.add(k)
    }
    return sortPeriodKeys([...keys])
  }, [report])

  const maxCell = useMemo(() => {
    let m = 0
    for (const d of report?.stats.drift ?? []) {
      for (const v of Object.values(d.series)) m = Math.max(m, v)
    }
    return m
  }, [report])

  // -------------------------------------------------------------- render --

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6">
      {/* ---------------------------------------------------------- header */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
          <Dna className="h-6 w-6" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Paper-DNA Forensic Analyzer</h1>
          <p className="text-sm text-muted-foreground">
            Upload past question papers — get the hot-topic heatmap, trends and probable topics.
          </p>
        </div>
        {stage === 'report' && !mockSeed && (
          <button
            type="button"
            onClick={openMockFromReport}
            className={`inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-3.5 py-2 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-400 ${FOCUS_RING}`}
          >
            <Hammer className="h-4 w-4" aria-hidden /> Forge Mock Paper
          </button>
        )}
        {stage === 'report' && !mockSeed && (
          <button
            type="button"
            onClick={resetAll}
            className={`inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted ${FOCUS_RING}`}
          >
            <RotateCcw className="h-4 w-4" aria-hidden /> New analysis
          </button>
        )}
      </div>

      <div
        className={`grid grid-cols-1 gap-6 ${
          mockSeed ? '' : 'lg:grid-cols-[minmax(0,1fr)_280px]'
        }`}
      >
        {/* ======================================================= main col */}
        <div className="min-w-0">
          {mockSeed ? (
            <MockFlow
              key={`mock-${mockNonce}`}
              seed={mockSeed}
              onClose={() => setMockSeed(null)}
            />
          ) : (
            <>
          <AnimatePresence mode="wait">
            {/* ------------------------------------------------ input stage */}
            {stage === 'input' && (
              <motion.div
                key="input"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Optional title — e.g. “Mechanics papers, last 5 years”"
                  maxLength={200}
                  className={`${FOCUS_RING} bg-background`}
                  aria-label="Analysis title (optional)"
                />

                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Upload question papers"
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click()
                  }}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragOver(true)
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault()
                    setDragOver(false)
                    if (e.dataTransfer?.files?.length) addFiles(e.dataTransfer.files)
                  }}
                  className={`flex min-h-44 cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-8 text-center transition-colors ${FOCUS_RING} ${
                    dragOver
                      ? 'border-emerald-400/70 bg-emerald-500/10'
                      : 'border-border bg-muted/30 hover:border-emerald-400/50 hover:bg-emerald-500/5'
                  }`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                    <Upload className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Drop question papers here</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      PDF, PNG, JPG, WEBP or TXT · up to {MAX_FILES} files · 10 MB each
                    </p>
                  </div>
                  <span className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium">
                    or browse files
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={ACCEPT_ATTR}
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.length) addFiles(e.target.files)
                      e.target.value = ''
                    }}
                  />
                </div>

                {files.length > 0 && (
                  <ul className="flex flex-wrap gap-2" aria-label="Selected files">
                    {files.map((f, i) => (
                      <motion.li
                        key={`${f.name}-${f.size}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex max-w-full items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 py-1.5 pl-2.5 pr-1.5 text-xs"
                      >
                        <FileText className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden />
                        <span className="max-w-48 truncate font-medium text-foreground" title={f.name}>
                          {f.name}
                        </span>
                        <span className="shrink-0 text-muted-foreground">{fmtSize(f.size)}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          aria-label={`Remove ${f.name}`}
                          className={`rounded-md p-1 text-muted-foreground transition-colors hover:bg-rose-500/15 hover:text-rose-400 ${FOCUS_RING}`}
                        >
                          <X className="h-3.5 w-3.5" aria-hidden />
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                )}

                <button
                  type="button"
                  onClick={runAnalysis}
                  disabled={!files.length}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40 ${FOCUS_RING}`}
                >
                  <Sparkles className="h-4 w-4" aria-hidden />
                  Run forensic analysis
                  {files.length > 0 && (
                    <span className="rounded-md bg-emerald-950/15 px-1.5 py-0.5 text-xs">
                      {files.length}
                    </span>
                  )}
                </button>

                {past.length >= 2 && !trendReady && (
                  <div className="rounded-2xl border border-border bg-card p-5" role="status" aria-label="Loading trend radar">
                    <div className="h-4 w-32 animate-pulse rounded bg-muted" />
                    <div className="mt-3 flex flex-col gap-2">
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="h-9 animate-pulse rounded-xl bg-muted" />
                      ))}
                    </div>
                  </div>
                )}
                {trendReady && (
                  <TrendRadarCard papers={trend.papers} onMerge={openMockMerged} />
                )}
              </motion.div>
            )}

            {/* ---------------------------------------------- running stage */}
            {stage === 'running' && (
              <motion.div
                key="running"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                <h2 className="flex items-center gap-2 text-base font-semibold">
                  <Loader2 className="h-4 w-4 animate-spin text-emerald-400" aria-hidden />
                  Forensic analysis in progress
                </h2>

                <ol className="mt-4 flex flex-col gap-2" aria-live="polite">
                  {runFiles.map((f, i) => (
                    <li
                      key={`${f.name}-${i}`}
                      className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition-colors ${
                        f.state === 'active'
                          ? 'border-emerald-500/40 bg-emerald-500/10'
                          : f.state === 'done'
                            ? 'border-emerald-500/20 bg-emerald-500/5'
                            : 'border-border bg-muted/30'
                      }`}
                    >
                      {f.state === 'done' ? (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-emerald-950">
                          <Check className="h-3 w-3" aria-hidden />
                        </span>
                      ) : f.state === 'active' ? (
                        <Loader2
                          className="h-5 w-5 shrink-0 animate-spin text-emerald-400"
                          aria-hidden
                        />
                      ) : (
                        <span className="h-5 w-5 shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      )}
                      <span className="min-w-0 flex-1 truncate font-medium">{f.name}</span>
                      {f.state === 'done' && (
                        <span className="shrink-0 rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-xs text-emerald-300">
                          {f.questions} question{f.questions === 1 ? '' : 's'}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>

                {stageLine && (
                  <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground" role="status">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-300" aria-hidden />
                    {stageLine}
                  </p>
                )}

                {warnings.length > 0 && (
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {warnings.map((w, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-300"
                      >
                        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                        {w}
                      </li>
                    ))}
                  </ul>
                )}

                {runError && (
                  <div className="mt-4 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4">
                    <p className="flex items-start gap-2 text-sm text-rose-300">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                      {runError}
                    </p>
                    <button
                      type="button"
                      onClick={resetAll}
                      className={`mt-3 rounded-lg border border-rose-500/40 px-3 py-1.5 text-xs font-medium text-rose-300 transition-colors hover:bg-rose-500/15 ${FOCUS_RING}`}
                    >
                      Back to upload
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* ---------------------------------------------- report stage */}
            {stage === 'report' && report && (
              <motion.div
                key={`report-${report.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-6"
              >
                {/* forensic header */}
                <section className="rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-card to-card p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Dna className="h-4 w-4 text-emerald-400" aria-hidden />
                    <h2 className="min-w-0 flex-1 truncate text-base font-semibold" title={report.title}>
                      {report.title}
                    </h2>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(report.createdAt), { addSuffix: true })}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { label: 'questions', value: report.stats.totals.questions },
                      { label: 'files', value: report.stats.totals.files },
                      { label: 'chapters', value: report.stats.totals.chaptersTouched },
                      { label: report.stats.totals.yearsSpan > 1 ? 'years' : 'year', value: report.stats.totals.yearsSpan },
                    ].map((c) => (
                      <span
                        key={c.label}
                        className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 font-mono text-sm text-emerald-300"
                      >
                        <strong className="font-bold text-emerald-200">{c.value}</strong> {c.label}
                      </span>
                    ))}
                    {unmapped && (
                      <span
                        className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 font-mono text-sm text-amber-300"
                        title="Questions that could not be matched to a library chapter"
                      >
                        <strong className="font-bold text-amber-200">{unmapped.count}</strong>{' '}
                        unmapped
                      </span>
                    )}
                  </div>
                  {report.files.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      {report.files.map((f, i) => (
                        <li key={`${f.name}-${i}`} className="flex max-w-full items-center gap-1">
                          <FileText className="h-3 w-3 shrink-0" aria-hidden />
                          <span className="truncate" title={f.name}>
                            {f.name}
                            {f.questionCount > 0 && ` · ${f.questionCount}q`}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {report.stats.hotTopics.some((t) => t.chapterId !== 'unmapped') && (
                    <button
                      type="button"
                      onClick={openMockFromReport}
                      className={`mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-400 ${FOCUS_RING}`}
                    >
                      <Hammer className="h-4 w-4" aria-hidden /> Forge a mock paper from this blueprint
                    </button>
                  )}
                </section>

                {/* hot-topic heatmap */}
                <section aria-labelledby="pdna-hot">
                  <h3 id="pdna-hot" className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Hot-topic heatmap
                  </h3>
                  {report.stats.hotTopics.length === 0 ? (
                    <p className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                      No topic matches found in these papers.
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-4">
                      {report.stats.hotTopics.map((t) => {
                        const isUnmapped = t.chapterId === 'unmapped'
                        const trend = trendByChapter.get(t.chapterId) ?? 'stable'
                        const alpha = 0.05 + 0.42 * (t.share / maxShare)
                        const body = (
                          <>
                            <div className="flex w-full items-start justify-between gap-2">
                              <span className="line-clamp-2 min-w-0 flex-1 text-left text-[13px] font-semibold leading-snug">
                                {t.chapterTitle}
                              </span>
                              {!isUnmapped && <TrendIcon trend={trend} className="mt-0.5 h-4 w-4 shrink-0" />}
                            </div>
                            <div className="mt-2 flex items-baseline gap-1.5">
                              <span className="font-mono text-lg font-bold">{t.count}</span>
                              <span className="text-xs text-muted-foreground">questions</span>
                            </div>
                            <div className="mt-1 flex flex-wrap items-center gap-1.5">
                              <span className="rounded-md bg-black/20 px-1.5 py-0.5 font-mono text-[11px]">
                                {t.share}%
                              </span>
                              <span className="max-w-full truncate rounded-md bg-black/20 px-1.5 py-0.5 text-[11px] text-muted-foreground">
                                {t.subjectName}
                              </span>
                            </div>
                          </>
                        )
                        return isUnmapped ? (
                          <div
                            key={t.chapterId}
                            className="flex flex-col rounded-xl border border-amber-500/25 bg-amber-500/5 p-3"
                          >
                            {body}
                          </div>
                        ) : (
                          <button
                            key={t.chapterId}
                            type="button"
                            onClick={() => navigate({ name: 'chapter', chapterId: t.chapterId })}
                            title={`Open ${t.chapterTitle}`}
                            style={{ backgroundColor: `rgba(16, 185, 129, ${alpha.toFixed(3)})` }}
                            className={`flex flex-col rounded-xl border border-emerald-500/25 p-3 text-left text-foreground transition-transform hover:-translate-y-0.5 hover:border-emerald-400/60 ${FOCUS_RING}`}
                          >
                            {body}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </section>

                {/* predictions */}
                <section aria-labelledby="pdna-pred">
                  <h3 id="pdna-pred" className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-emerald-400" aria-hidden />
                    Most probable topics
                  </h3>
                  {report.stats.predictions.length === 0 ? (
                    <p className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                      Not enough mapped questions for predictions yet — add more papers.
                    </p>
                  ) : (
                    <ol className="flex flex-col gap-2.5">
                      {report.stats.predictions.map((p, i) => (
                        <li
                          key={p.chapterId}
                          className="rounded-xl border border-border bg-card p-3.5"
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 font-mono text-xs font-bold text-emerald-300">
                              {i + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => navigate({ name: 'chapter', chapterId: p.chapterId })}
                              className={`min-w-0 flex-1 truncate text-left text-sm font-semibold hover:text-emerald-300 ${FOCUS_RING}`}
                              title={`Open ${p.chapterTitle}`}
                            >
                              {p.chapterTitle}
                            </button>
                            <span className="shrink-0 font-mono text-xs text-muted-foreground">
                              {(p.score * 100).toFixed(0)}%
                            </span>
                          </div>
                          <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.round(p.score * 100)}%` }}
                              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </div>
                          {p.reasons.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {p.reasons.map((r, j) => (
                                <span
                                  key={j}
                                  className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 text-[11px] text-emerald-300"
                                >
                                  {r}
                                </span>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ol>
                  )}
                </section>

                {/* type & difficulty mixes */}
                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Question types
                    </h3>
                    <div className="flex flex-col gap-2.5">
                      {Object.entries(report.stats.typeMix).map(([k, v]) => (
                        <MixBar
                          key={k}
                          label={k}
                          count={v}
                          max={Math.max(1, ...Object.values(report.stats.typeMix))}
                          color={TYPE_COLORS[k] ?? 'bg-emerald-400'}
                        />
                      ))}
                      {Object.keys(report.stats.typeMix).length === 0 && (
                        <p className="text-sm text-muted-foreground">No data</p>
                      )}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Difficulty mix
                    </h3>
                    <div className="flex flex-col gap-2.5">
                      {Object.entries(report.stats.difficultyMix).map(([k, v]) => (
                        <MixBar
                          key={k}
                          label={k}
                          count={v}
                          max={Math.max(1, ...Object.values(report.stats.difficultyMix))}
                          color={DIFFICULTY_COLORS[k] ?? 'bg-amber-400'}
                        />
                      ))}
                      {Object.keys(report.stats.difficultyMix).length === 0 && (
                        <p className="text-sm text-muted-foreground">No data</p>
                      )}
                    </div>
                  </div>
                </section>

                {/* year-by-year drift table */}
                <section aria-labelledby="pdna-drift">
                  <h3 id="pdna-drift" className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Year-by-year drift
                  </h3>
                  {driftColumns.length === 0 ? (
                    <p className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                      Not enough papers to chart drift yet.
                    </p>
                  ) : (
                    <div className="overflow-auto max-h-96 rounded-2xl border border-border bg-card">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="sticky top-0 z-10 bg-muted/95 backdrop-blur">
                            <th className="sticky left-0 z-20 min-w-44 max-w-64 bg-muted/95 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              Chapter
                            </th>
                            {driftColumns.map((c) => (
                              <th
                                key={c}
                                className="whitespace-nowrap px-3 py-2.5 text-right text-xs font-semibold text-muted-foreground"
                              >
                                {c}
                              </th>
                            ))}
                            <th className="px-3 py-2.5 text-center text-xs font-semibold text-muted-foreground">
                              Trend
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {report.stats.drift.map((d) => (
                            <tr key={d.chapterId} className="border-t border-border">
                              <td className="sticky left-0 z-10 max-w-64 truncate bg-card px-3 py-2 font-medium" title={d.chapterTitle}>
                                {d.chapterTitle}
                              </td>
                              {driftColumns.map((c) => {
                                const v = d.series[c] ?? 0
                                const alpha = v > 0 ? 0.1 + 0.55 * (v / Math.max(1, maxCell)) : 0
                                return (
                                  <td
                                    key={c}
                                    className="px-3 py-2 text-right font-mono"
                                    style={{
                                      backgroundColor: v > 0 ? `rgba(16, 185, 129, ${alpha.toFixed(3)})` : undefined,
                                    }}
                                  >
                                    {v > 0 ? v : <span className="text-muted-foreground/40">·</span>}
                                  </td>
                                )
                              })}
                              <td className="px-3 py-2 text-center">
                                <TrendIcon trend={d.trend} className="mx-auto h-4 w-4" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>

                {/* cross-paper trend radar (X7 Pro) */}
                {trendReady && (
                  <TrendRadarCard papers={trend.papers} onMerge={openMockMerged} />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* skeleton while opening a past analysis */}
          {openingId && stage !== 'report' && (
            <div className="mt-4 flex flex-col gap-3" role="status" aria-label="Loading analysis">
              <div className="h-24 animate-pulse rounded-2xl bg-muted" />
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-20 animate-pulse rounded-xl bg-muted" />
                ))}
              </div>
              <div className="h-40 animate-pulse rounded-2xl bg-muted" />
            </div>
          )}
            </>
          )}
        </div>

        {/* ==================================================== sidebar col */}
        {!mockSeed && (
        <aside className="min-w-0">
          <div className="rounded-2xl border border-border bg-card p-4">
            <h2 className="flex items-center gap-2 text-sm font-semibold">
              <History className="h-4 w-4 text-emerald-400" aria-hidden />
              Past analyses
            </h2>
            {pastLoading ? (
              <div className="mt-3 flex flex-col gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-12 animate-pulse rounded-xl bg-muted" />
                ))}
              </div>
            ) : past.length === 0 ? (
              <p className="mt-3 text-xs text-muted-foreground">
                No past analyses yet — your first run will appear here.
              </p>
            ) : (
              <ul className="mt-3 flex max-h-96 flex-col gap-1.5 overflow-y-auto pr-1">
                {past.map((p) => {
                  const active = report?.id === p.id
                  return (
                    <li key={p.id} className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => openAnalysis(p.id)}
                        disabled={openingId !== null}
                        className={`min-w-0 flex-1 rounded-xl border px-3 py-2 text-left transition-colors disabled:opacity-50 ${FOCUS_RING} ${
                          active
                            ? 'border-emerald-500/50 bg-emerald-500/10'
                            : 'border-transparent bg-muted/40 hover:border-emerald-500/30 hover:bg-emerald-500/5'
                        }`}
                      >
                        <span className="block truncate text-xs font-semibold" title={p.title}>
                          {p.title}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-muted-foreground">
                          {p.totals ? `${p.totals.questions} questions · ` : ''}
                          {formatDistanceToNow(new Date(p.createdAt), { addSuffix: true })}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => forgeFromPast(p.id)}
                        disabled={forgingId !== null}
                        title={`Forge a mock paper from “${p.title}”`}
                        aria-label={`Forge a mock paper from ${p.title}`}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40 text-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-emerald-300 disabled:opacity-40 ${FOCUS_RING}`}
                      >
                        {forgingId === p.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                        ) : (
                          <Hammer className="h-4 w-4" aria-hidden />
                        )}
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </aside>
        )}
      </div>
    </div>
  )
}

export default PaperDnaView
