'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Atom,
  BookOpen,
  Check,
  CheckCircle2,
  Coffee,
  Cog,
  Compass,
  Cpu,
  Dna,
  Globe,
  HeartPulse,
  Landmark,
  Languages,
  Leaf,
  Lightbulb,
  Palette,
  Rocket,
  Scale,
  Search,
  Sigma,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { TeX } from '@/components/math'
import { RichText } from '../rich-text'
import { useStudy } from '@/store/useStudy'
import {
  UNIVERSE_DOMAIN_STATS,
  UNIVERSE_STATS,
  UNIVERSE_TOPICS,
  UNIVERSE_TOPIC_BY_ID,
  searchUniverseTopics,
} from '@/data/universe'
import type { UniverseBlock, UniverseTopic, Tier } from '@/data/universe'

/* ------------------------------------------------------------------ */
/*  The Knowledge Universe — the Library's deepest layer.              */
/*  Complete study guides across every field of human knowledge,       */
/*  hard-coded and expanded with every content pass.                   */
/* ------------------------------------------------------------------ */

/** Icon per domain — shared by the catalog cards and the quick-jump chips. */
export const DOMAIN_ICONS: Record<string, typeof Atom> = {
  'Foundation Learning': BookOpen,
  'Physical Sciences': Atom,
  'Life Sciences': Dna,
  Mathematics: Sigma,
  'Environment & Sustainability': Leaf,
  'Computing & AI': Cpu,
  Engineering: Cog,
  'Technology & Applied Science': Rocket,
  'Social Sciences': Users,
  Humanities: Landmark,
  'Languages & World Literature': Languages,
  'Law & Governance': Scale,
  'Business & Economics': TrendingUp,
  'Health & Wellness': HeartPulse,
  'Arts & Culture': Palette,
  'Everyday Knowledge': Coffee,
  'Emerging & Interdisciplinary': Sparkles,
}

const TIER_STYLE: Record<Tier, string> = {
  core: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
  intermediate: 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400',
  advanced: 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-400',
}

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

/** Accent color per domain — the Knowledge Universe domains render as
 *  subject cards in the Library catalog, exactly like Mathematics or
 *  Physics, so each carries its own accent. */
export const UNIVERSE_DOMAIN_ACCENTS: Record<string, string> = {
  'Foundation Learning': '#f59e0b',
  'Physical Sciences': '#22d3ee',
  'Life Sciences': '#10b981',
  Mathematics: '#14b8a6',
  'Environment & Sustainability': '#84cc16',
  'Computing & AI': '#9333ea',
  Engineering: '#f97316',
  'Technology & Applied Science': '#ef4444',
  'Social Sciences': '#f472b6',
  Humanities: '#d946ef',
  'Languages & World Literature': '#fb7185',
  'Law & Governance': '#a16207',
  'Business & Economics': '#ca8a04',
  'Health & Wellness': '#f43f5e',
  'Arts & Culture': '#ec4899',
  'Everyday Knowledge': '#0d9488',
  'Emerging & Interdisciplinary': '#8b5cf6',
}

function fmtWords(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : String(n)
}

export { fmtWords }

function fmtDate(iso: string): string {
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return iso
  }
}

/* ------------------------------ read state ------------------------- */

const READ_KEY = 'sv-universe-read'
const LEGACY_READ_KEY = 'sv-living-read'

function loadRead(): Set<string> {
  try {
    const raw = localStorage.getItem(READ_KEY) ?? localStorage.getItem(LEGACY_READ_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw)
    const set = new Set(Array.isArray(arr) ? arr : [])
    if (localStorage.getItem(READ_KEY) === null) localStorage.setItem(READ_KEY, raw)
    return set
  } catch {
    return new Set()
  }
}

function saveRead(set: Set<string>) {
  try {
    localStorage.setItem(READ_KEY, JSON.stringify([...set]))
  } catch {
    /* storage unavailable */
  }
}

/** shared read-state hook — loads once, toggles persist to localStorage */
function useUniverseRead() {
  const [read, setRead] = useState<Set<string>>(new Set())

  useEffect(() => {
    // localStorage is an external system — read once, apply outside the render
    const stored = loadRead()
    queueMicrotask(() => setRead(stored))
  }, [])

  const toggleRead = (id: string) => {
    setRead((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      saveRead(next)
      return next
    })
  }

  return { read, toggleRead }
}

/* ------------------------------ quiz ------------------------------- */

function QuizBlock({ block, topicId }: { block: Extract<UniverseBlock, { kind: 'quiz' }>; topicId: string }) {
  const [picked, setPicked] = useState<Record<number, number>>({})

  const correct = block.items.reduce((n, it, i) => (picked[i] === it.answer ? n + 1 : n), 0)
  const answered = Object.keys(picked).length

  return (
    <div className="my-5 space-y-4">
      {block.items.map((item, i) => {
        const chosen = picked[i]
        const done = chosen !== undefined
        return (
          <div
            key={`${topicId}-q${i}`}
            className="rounded-xl border border-border/70 bg-card/50 p-4"
          >
            <p className="mb-3 text-[15px] font-medium leading-relaxed text-foreground/90">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[11px] font-semibold text-muted-foreground">
                {i + 1}
              </span>
              {item.q}
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {item.options.map((opt, j) => {
                const isAnswer = j === item.answer
                const isChosen = j === chosen
                let cls =
                  'border-border/60 bg-background/60 hover:border-foreground/25 hover:bg-muted/50'
                if (done && isAnswer)
                  cls = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                else if (done && isChosen)
                  cls = 'border-rose-500/50 bg-rose-500/10 text-rose-700 dark:text-rose-300'
                else if (done) cls = 'border-border/40 bg-background/40 opacity-60'
                return (
                  <button
                    key={j}
                    type="button"
                    disabled={done}
                    onClick={() => setPicked((p) => ({ ...p, [i]: j }))}
                    className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors disabled:cursor-default ${cls}`}
                  >
                    <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                      {String.fromCharCode(65 + j)}
                    </span>
                    <span className="flex-1">{opt}</span>
                    {done && isAnswer && <Check className="mt-0.5 h-4 w-4 shrink-0" />}
                    {done && isChosen && !isAnswer && <X className="mt-0.5 h-4 w-4 shrink-0" />}
                  </button>
                )
              })}
            </div>
            {done && (
              <p className="mt-3 border-l-2 border-border/70 pl-3 text-sm leading-relaxed text-muted-foreground">
                {picked[i] === item.answer ? 'Correct — ' : 'Not quite — '}
                {item.explain}
              </p>
            )}
          </div>
        )
      })}
      {answered > 0 && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2
            className={`h-4 w-4 ${correct === block.items.length ? 'text-emerald-500' : 'text-amber-500'}`}
          />
          <span>
            Scored {correct} / {block.items.length}
            {correct === block.items.length ? ' — flawless.' : ' — reread the recap and retry later.'}
          </span>
        </div>
      )}
    </div>
  )
}

/* --------------------------- block renderer ------------------------ */

function BlockView({ block, topicId }: { block: UniverseBlock; topicId: string }) {
  switch (block.kind) {
    case 'para':
      return (
        <RichText
          text={block.text}
          className="my-3 text-[15px] leading-[1.85] text-foreground/85"
        />
      )
    case 'heading':
      return (
        <h3 className="mt-9 mb-1 text-lg font-semibold tracking-tight text-foreground">
          {block.text}
        </h3>
      )
    case 'callout': {
      const tone =
        block.tone === 'insight'
          ? { cls: 'border-emerald-500/30 bg-emerald-500/[0.06]', icon: Lightbulb, icls: 'text-emerald-500' }
          : block.tone === 'warn'
            ? { cls: 'border-amber-500/30 bg-amber-500/[0.06]', icon: AlertTriangle, icls: 'text-amber-500' }
            : { cls: 'border-violet-500/30 bg-violet-500/[0.06]', icon: Compass, icls: 'text-violet-500' }
      const Icon = tone.icon
      return (
        <aside className={`my-5 rounded-xl border p-4 ${tone.cls}`}>
          <div className="mb-1 flex items-center gap-2">
            <Icon className={`h-4 w-4 ${tone.icls}`} />
            <span className="text-sm font-semibold text-foreground/90">{block.title}</span>
          </div>
          <RichText text={block.text} className="text-sm leading-relaxed text-foreground/75" />
        </aside>
      )
    }
    case 'formula':
      return (
        <div className="my-5 rounded-xl border border-border/70 bg-card/40 p-4">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {block.name}
          </div>
          <TeX tex={block.latex} display className="text-lg" />
          <RichText text={block.meaning} className="mt-2 text-sm text-muted-foreground" />
        </div>
      )
    case 'example':
      return (
        <div className="my-5 rounded-xl border border-border/70 bg-muted/30 p-4">
          <div className="mb-3 text-sm font-semibold text-foreground/90">{block.title}</div>
          <ol className="space-y-2.5">
            {block.steps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-[11px] font-semibold text-muted-foreground">
                  {i + 1}
                </span>
                <RichText text={s} className="flex-1 text-sm leading-relaxed text-foreground/80" />
              </li>
            ))}
          </ol>
        </div>
      )
    case 'terms':
      return (
        <dl className="my-5 grid gap-2.5 sm:grid-cols-2">
          {block.items.map((it) => (
            <div
              key={it.term}
              className="rounded-lg border border-border/60 bg-card/40 p-3"
            >
              <dt className="text-sm font-semibold text-foreground/90">{it.term}</dt>
              <dd className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">{it.def}</dd>
            </div>
          ))}
        </dl>
      )
    case 'quiz':
      return <QuizBlock block={block} topicId={topicId} />
    case 'list':
      return block.ordered ? (
        <ol className="my-4 list-decimal space-y-1.5 pl-5 text-[15px] leading-relaxed text-foreground/80">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      ) : (
        <ul className="my-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-foreground/80">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )
    default:
      return null
  }
}

/* ------------------------------ topic page ------------------------- */

export function UniverseTopicPage({
  topic,
  onBack,
  onNavigate,
  read,
  onToggleRead,
}: {
  topic: UniverseTopic
  onBack: () => void
  onNavigate: (domain: string, topicId: string) => void
  read: Set<string>
  onToggleRead: (id: string) => void
}) {
  const siblings = useMemo(
    () => UNIVERSE_TOPICS.filter((t) => t.domain === topic.domain),
    [topic.domain],
  )
  const idx = siblings.findIndex((t) => t.id === topic.id)
  const prev = idx > 0 ? siblings[idx - 1] : null
  const next = idx < siblings.length - 1 ? siblings[idx + 1] : null
  const isRead = read.has(topic.id)

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">
      <button
        type="button"
        onClick={onBack}
        className={`mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground ${FOCUS_RING} rounded`}
      >
        <ArrowLeft className="h-4 w-4" /> {topic.domain}
      </button>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Badge variant="outline" className={TIER_STYLE[topic.tier]}>
          {topic.tier[0].toUpperCase() + topic.tier.slice(1)}
        </Badge>
        <span className="text-xs text-muted-foreground">
          {topic.field} · {topic.branch}
        </span>
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {topic.title}
      </h1>
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <span>{topic.readMins} min read</span>
        <span aria-hidden>·</span>
        <span>{fmtWords(topic.words)} words</span>
        <span aria-hidden>·</span>
        <span>added {fmtDate(topic.addedOn)}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {topic.concepts.slice(0, 8).map((c) => (
          <span
            key={c}
            className="rounded-full border border-border/60 bg-muted/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-border/60 pt-6">
        <article>
          {topic.blocks.map((b, i) => (
            <BlockView key={i} block={b} topicId={topic.id} />
          ))}
        </article>
      </div>

      <div className="mt-10 flex items-center justify-between gap-3 border-t border-border/60 pt-6">
        <Button
          variant={isRead ? 'default' : 'outline'}
          size="sm"
          onClick={() => onToggleRead(topic.id)}
          aria-pressed={isRead}
        >
          <CheckCircle2 className="mr-1.5 h-4 w-4" />
          {isRead ? 'Marked as read' : 'Mark as read'}
        </Button>
        <span className="text-xs text-muted-foreground">
          {topic.concepts.length} concepts · Knowledge Universe
        </span>
      </div>

      {(prev || next) && (
        <nav className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Topic navigation">
          {prev ? (
            <button
              type="button"
              onClick={() => onNavigate(prev.domain, prev.id)}
              className={`group rounded-xl border border-border/60 bg-card/40 p-4 text-left transition-colors hover:border-foreground/25 ${FOCUS_RING}`}
            >
              <span className="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
                <ArrowLeft className="h-3 w-3" /> Previous
              </span>
              <span className="text-sm font-medium text-foreground/90 group-hover:underline">
                {prev.title}
              </span>
            </button>
          ) : (
            <span />
          )}
          {next && (
            <button
              type="button"
              onClick={() => onNavigate(next.domain, next.id)}
              className={`group rounded-xl border border-border/60 bg-card/40 p-4 text-right transition-colors hover:border-foreground/25 ${FOCUS_RING}`}
            >
              <span className="mb-1 flex items-center justify-end gap-1 text-xs text-muted-foreground">
                Next <ArrowRight className="h-3 w-3" />
              </span>
              <span className="text-sm font-medium text-foreground/90 group-hover:underline">
                {next.title}
              </span>
            </button>
          )}
        </nav>
      )}
    </div>
  )
}

/* ------------------------------ domain page ------------------------ */

export function UniverseDomainPage({
  domain,
  onBack,
  onOpenTopic,
  read,
}: {
  domain: string
  onBack: () => void
  onOpenTopic: (domain: string, topicId: string) => void
  read: Set<string>
}) {
  const [tier, setTier] = useState<Tier | 'all'>('all')
  const stats = UNIVERSE_DOMAIN_STATS.find((d) => d.domain === domain)
  const topics = useMemo(
    () =>
      UNIVERSE_TOPICS.filter(
        (t) => t.domain === domain && (tier === 'all' || t.tier === tier),
      ),
    [domain, tier],
  )

  if (!stats) return null
  const Icon = DOMAIN_ICONS[domain] ?? BookOpen

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6">
      <button
        type="button"
        onClick={onBack}
        className={`mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground ${FOCUS_RING} rounded`}
      >
        <ArrowLeft className="h-4 w-4" /> Library · Knowledge Universe
      </button>

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/40">
          <Icon className="h-6 w-6 text-foreground/70" />
        </div>
        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">{domain}</h1>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{stats.blurb}</p>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span>{stats.topicCount} topics</span>
            <span aria-hidden>·</span>
            <span>{fmtWords(stats.words)} words</span>
            <span aria-hidden>·</span>
            <span>{stats.fields.length} fields</span>
            <span aria-hidden>·</span>
            <span>latest {fmtDate(stats.lastAddedOn)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5" role="group" aria-label="Filter by tier">
        {(['all', 'core', 'intermediate', 'advanced'] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTier(t)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${FOCUS_RING} ${
              tier === t
                ? 'border-foreground/30 bg-foreground text-background'
                : 'border-border/60 bg-muted/30 text-muted-foreground hover:border-foreground/20'
            }`}
          >
            {t === 'all'
              ? `All ${stats.topicCount}`
              : `${t[0].toUpperCase() + t.slice(1)} ${
                  t === 'core' ? stats.core : t === 'intermediate' ? stats.intermediate : stats.advanced
                }`}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-3">
        {topics.map((t, i) => (
          <motion.button
            key={t.id}
            type="button"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i * 0.03, 0.3), duration: 0.2 }}
            onClick={() => onOpenTopic(t.domain, t.id)}
            className={`group rounded-xl border border-border/60 bg-card/40 p-4 text-left transition-colors hover:border-foreground/25 hover:bg-card/70 ${FOCUS_RING}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-[15px] font-semibold text-foreground/90 group-hover:underline">
                    {t.title}
                  </h2>
                  {read.has(t.id) && (
                    <span
                      className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400"
                      title="Read"
                    >
                      <Check className="h-3 w-3" /> read
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t.field} · {t.branch}
                </p>
                <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground/90">
                  {t.concepts.slice(0, 4).join(' · ')}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1.5">
                <Badge variant="outline" className={TIER_STYLE[t.tier]}>
                  {t.tier[0].toUpperCase() + t.tier.slice(1)}
                </Badge>
                <span className="text-[11px] text-muted-foreground">{t.readMins} min</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

/* ---------------------- library home section ----------------------- */

/**
 * The Knowledge Universe as a section of the Library home page.
 * Renders the stats strip, topic search, latest-additions row and the
 * 17-domain grid — all inside the Library view.
 */
export function UniverseSection() {
  const navigate = useStudy((s) => s.navigate)
  const { read } = useUniverseRead()
  const [query, setQuery] = useState('')
  const results = useMemo(() => searchUniverseTopics(query), [query])

  const openTopic = (d: string, id: string) => navigate({ name: 'library', domain: d, topicId: id })
  const openDomain = (d: string) => navigate({ name: 'library', domain: d })

  /** topics added in the most recent expansion pass */
  const freshest = useMemo(() => {
    const latest = UNIVERSE_STATS.lastExpanded
    return UNIVERSE_TOPICS.filter((t) => t.addedOn === latest).slice(0, 4)
  }, [])

  return (
    <section className="border-t border-border/60 bg-card/25" id="universe">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
            <Globe className="h-3.5 w-3.5" /> The Knowledge Universe
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Every field of human knowledge, one library
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Every domain of the Universe is a subject track in the catalog above — presented
            exactly like Mathematics or Physics. This layer adds live stats, full-text search
            across all {UNIVERSE_STATS.topics} guides, and the freshest additions from the latest
            expansion pass.
          </p>
        </div>

        {/* stats strip */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { label: 'Topics', value: String(UNIVERSE_STATS.topics) },
            { label: 'Words', value: fmtWords(UNIVERSE_STATS.words) },
            { label: 'Domains', value: String(UNIVERSE_STATS.domains) },
            { label: 'Fields', value: String(UNIVERSE_STATS.fields) },
            { label: 'Quiz items', value: String(UNIVERSE_STATS.quizItems) },
            { label: 'Formulas', value: String(UNIVERSE_STATS.formulas) },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border/70 bg-card/50 px-3 py-2.5 text-center"
            >
              <div className="text-xl font-bold tabular-nums text-foreground">{s.value}</div>
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* search */}
        <div className="relative mt-6 max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the universe — try “entropy”, “bayes”, “fatigue”, “harmony”…"
            className="pl-9"
            aria-label="Search the Knowledge Universe"
          />
        </div>

        {query.trim() ? (
          <div className="mt-6">
            <p className="mb-3 text-sm text-muted-foreground">
              {results.length} {results.length === 1 ? 'match' : 'matches'} for “{query.trim()}”
            </p>
            <div className="grid gap-3">
              {results.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => openTopic(t.domain, t.id)}
                  className={`group rounded-xl border border-border/60 bg-card/40 p-4 text-left transition-colors hover:border-foreground/25 ${FOCUS_RING}`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[15px] font-semibold text-foreground/90 group-hover:underline">
                      {t.title}
                    </h3>
                    <Badge variant="outline" className={TIER_STYLE[t.tier]}>
                      {t.tier[0].toUpperCase() + t.tier.slice(1)}
                    </Badge>
                    {read.has(t.id) && <Check className="h-3.5 w-3.5 text-emerald-500" />}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t.domain} · {t.field} · {t.readMins} min
                  </p>
                  <p className="mt-2 line-clamp-2 text-[13px] text-muted-foreground/90">
                    {t.concepts.slice(0, 5).join(' · ')}
                  </p>
                </button>
              ))}
              {results.length === 0 && (
                <p className="rounded-xl border border-dashed border-border/60 p-6 text-center text-sm text-muted-foreground">
                  Nothing yet — the Universe expands with every pass, so this topic may arrive soon.
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* freshest additions */}
            {freshest.length > 0 && (
              <div className="mt-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300/90">
                    Fresh this pass · {fmtDate(UNIVERSE_STATS.lastExpanded)}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-emerald-400/30 via-border to-transparent" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {freshest.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => openTopic(t.domain, t.id)}
                      className={`group rounded-xl border border-emerald-400/20 bg-emerald-400/[0.04] p-4 text-left transition-colors hover:border-emerald-400/40 hover:bg-emerald-400/[0.08] ${FOCUS_RING}`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                        <h3 className="text-sm font-semibold text-foreground/90 group-hover:underline">
                          {t.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {t.domain} · {t.field} · {t.readMins} min read
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* expansion note */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span>
                Last expanded{' '}
                <strong className="text-foreground/80">{fmtDate(UNIVERSE_STATS.lastExpanded)}</strong>
              </span>
              <span aria-hidden>·</span>
              <span>
                {UNIVERSE_STATS.expansionDates.length} expansion{' '}
                {UNIVERSE_STATS.expansionDates.length === 1 ? 'pass' : 'passes'} to date
              </span>
              <span aria-hidden>·</span>
              <span>
                {read.size} of {UNIVERSE_STATS.topics} topics read
              </span>
            </div>

            {/* domain quick-jump — the full domain cards live in the subject
                catalog above, rendered in the same manner as every subject */}
            <div className="mt-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300/90">
                  Jump to a domain
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-emerald-400/30 via-border to-transparent" />
              </div>
              <div className="flex flex-wrap gap-2">
                {UNIVERSE_DOMAIN_STATS.map((d) => {
                  const Icon = DOMAIN_ICONS[d.domain] ?? BookOpen
                  const accent = UNIVERSE_DOMAIN_ACCENTS[d.domain] ?? '#10b981'
                  return (
                    <button
                      key={d.domain}
                      type="button"
                      onClick={() => openDomain(d.domain)}
                      className={`group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3.5 py-1.5 text-[13px] font-medium text-foreground/80 transition-colors hover:border-foreground/25 hover:bg-card ${FOCUS_RING}`}
                    >
                      <Icon className="h-3.5 w-3.5" style={{ color: accent }} aria-hidden />
                      {d.domain}
                      <span
                        className="rounded-full bg-muted/70 px-1.5 py-0.5 text-[10px] font-semibold tabular-nums text-muted-foreground"
                        style={{ color: accent }}
                      >
                        {d.topicCount}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

/** convenience wrapper: the whole universe drill-down flow used by LibraryView */
export function UniverseDrilldown({ domain, topicId }: { domain?: string; topicId?: string }) {
  const navigate = useStudy((s) => s.navigate)
  const goBack = useStudy((s) => s.goBack)
  const { read, toggleRead } = useUniverseRead()

  const openTopic = (d: string, id: string) => navigate({ name: 'library', domain: d, topicId: id })
  const openDomain = (d: string) => navigate({ name: 'library', domain: d })

  if (topicId) {
    const topic = UNIVERSE_TOPIC_BY_ID.get(topicId)
    if (topic) {
      return (
        <UniverseTopicPage
          topic={topic}
          onBack={() => (domain ? openDomain(domain) : goBack())}
          onNavigate={openTopic}
          read={read}
          onToggleRead={toggleRead}
        />
      )
    }
  }

  if (domain) {
    const exists = UNIVERSE_DOMAIN_STATS.some((d) => d.domain === domain)
    if (exists) {
      return <UniverseDomainPage domain={domain} onBack={goBack} onOpenTopic={openTopic} read={read} />
    }
  }

  return null
}
