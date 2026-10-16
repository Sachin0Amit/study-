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
  Sprout,
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
  LIVING_DOMAIN_STATS,
  LIVING_STATS,
  LIVING_TOPICS,
  LIVING_TOPIC_BY_ID,
  searchLivingTopics,
} from '@/data/living'
import type { LivingBlock, LivingTopic, Tier } from '@/data/living'

/* ------------------------------------------------------------------ */
/*  The Living Library — a permanently growing knowledge base.         */
/*  Topics are hard-coded study guides across every field of human     */
/*  knowledge; every expansion pass appends more, nothing is deleted.  */
/* ------------------------------------------------------------------ */

const DOMAIN_ICONS: Record<string, typeof Atom> = {
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

function fmtWords(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : String(n)
}

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

const READ_KEY = 'sv-living-read'

function loadRead(): Set<string> {
  try {
    const raw = localStorage.getItem(READ_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw)
    return new Set(Array.isArray(arr) ? arr : [])
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

/* ------------------------------ quiz ------------------------------- */

function QuizBlock({ block, topicId }: { block: Extract<LivingBlock, { kind: 'quiz' }>; topicId: string }) {
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

function BlockView({ block, topicId }: { block: LivingBlock; topicId: string }) {
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

function TopicPage({
  topic,
  onBack,
  onNavigate,
  read,
  onToggleRead,
}: {
  topic: LivingTopic
  onBack: () => void
  onNavigate: (domain: string, topicId: string) => void
  read: Set<string>
  onToggleRead: (id: string) => void
}) {
  const siblings = useMemo(
    () => LIVING_TOPICS.filter((t) => t.domain === topic.domain),
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
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
          {topic.concepts.length} concepts · Living Library
        </span>
      </div>

      {(prev || next) && (
        <nav className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Topic navigation">
          {prev ? (
            <button
              type="button"
              onClick={() => onNavigate(prev.domain, prev.id)}
              className="group rounded-xl border border-border/60 bg-card/40 p-4 text-left transition-colors hover:border-foreground/25"
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
              className="group rounded-xl border border-border/60 bg-card/40 p-4 text-right transition-colors hover:border-foreground/25"
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

function DomainPage({
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
  const stats = LIVING_DOMAIN_STATS.find((d) => d.domain === domain)
  const topics = useMemo(
    () =>
      LIVING_TOPICS.filter(
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
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Living Library
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
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
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
            className="group rounded-xl border border-border/60 bg-card/40 p-4 text-left transition-colors hover:border-foreground/25 hover:bg-card/70"
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

/* ------------------------------ overview --------------------------- */

function Overview({
  onOpenDomain,
  onOpenTopic,
  read,
}: {
  onOpenDomain: (domain: string) => void
  onOpenTopic: (domain: string, topicId: string) => void
  read: Set<string>
}) {
  const [query, setQuery] = useState('')
  const results = useMemo(() => searchLivingTopics(query), [query])

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6">
      {/* hero */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
            <Sprout className="h-3 w-3" /> grows with every expansion pass
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">The Living Library</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A permanently expanding knowledge base across {LIVING_STATS.domains} domains of human
            knowledge — from foundation skills to emerging interdisciplinary fields. Every topic is
            a complete study guide with concepts, formulas, worked examples, glossaries and a
            self-check quiz.
          </p>
        </div>
      </div>

      {/* stats strip */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { label: 'Topics', value: LIVING_STATS.topics },
          { label: 'Words', value: fmtWords(LIVING_STATS.words) },
          { label: 'Domains', value: LIVING_STATS.domains },
          { label: 'Fields', value: LIVING_STATS.fields },
          { label: 'Quiz items', value: LIVING_STATS.quizItems },
          { label: 'Formulas', value: LIVING_STATS.formulas },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border/60 bg-card/40 px-3 py-2.5 text-center"
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
          placeholder="Search all topics — try “entropy”, “bayes”, “fatigue”, “harmony”…"
          className="pl-9"
          aria-label="Search the Living Library"
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
                onClick={() => onOpenTopic(t.domain, t.id)}
                className="group rounded-xl border border-border/60 bg-card/40 p-4 text-left transition-colors hover:border-foreground/25"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-[15px] font-semibold text-foreground/90 group-hover:underline">
                    {t.title}
                  </h2>
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
                Nothing yet — the library grows with every expansion pass, so this topic may arrive
                soon.
              </p>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* expansion note */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>
              Last expanded <strong className="text-foreground/80">{fmtDate(LIVING_STATS.lastExpanded)}</strong>
            </span>
            <span aria-hidden>·</span>
            <span>
              {LIVING_STATS.expansionDates.length} expansion{' '}
              {LIVING_STATS.expansionDates.length === 1 ? 'pass' : 'passes'} to date
            </span>
            <span aria-hidden>·</span>
            <span>{read.size} of {LIVING_STATS.topics} topics read</span>
          </div>

          {/* domain grid */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LIVING_DOMAIN_STATS.map((d, i) => {
              const Icon = DOMAIN_ICONS[d.domain] ?? BookOpen
              return (
                <motion.button
                  key={d.domain}
                  type="button"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.04, 0.4), duration: 0.22 }}
                  onClick={() => onOpenDomain(d.domain)}
                  className="group flex flex-col rounded-xl border border-border/60 bg-card/40 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-muted/40">
                      <Icon className="h-5 w-5 text-foreground/70" />
                    </div>
                    <span className="text-2xl font-bold tabular-nums text-foreground/20 transition-colors group-hover:text-foreground/40">
                      {d.topicCount}
                    </span>
                  </div>
                  <h2 className="mt-3 text-[15px] font-semibold text-foreground/90 group-hover:underline">
                    {d.domain}
                  </h2>
                  <p className="mt-1 line-clamp-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                    {d.blurb}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] text-muted-foreground">
                    <span>{fmtWords(d.words)} words</span>
                    <span aria-hidden>·</span>
                    <span>{d.fields.length} fields</span>
                    <span aria-hidden>·</span>
                    <span className="inline-flex items-center gap-1">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
                      {d.core}
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500/70" />
                      {d.intermediate}
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-500/70" />
                      {d.advanced}
                    </span>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

/* ------------------------------ root ------------------------------- */

export function LivingView({ domain, topicId }: { domain?: string; topicId?: string }) {
  const navigate = useStudy((s) => s.navigate)
  const goBack = useStudy((s) => s.goBack)
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

  const openTopic = (d: string, id: string) => navigate({ name: 'living', domain: d, topicId: id })
  const openDomain = (d: string) => navigate({ name: 'living', domain: d })

  if (topicId) {
    const topic = LIVING_TOPIC_BY_ID.get(topicId)
    if (topic) {
      return (
        <TopicPage
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
    const exists = LIVING_DOMAIN_STATS.some((d) => d.domain === domain)
    if (exists) {
      return <DomainPage domain={domain} onBack={goBack} onOpenTopic={openTopic} read={read} />
    }
  }

  return <Overview onOpenDomain={openDomain} onOpenTopic={openTopic} read={read} />
}
