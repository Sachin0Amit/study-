'use client'

import { motion } from 'framer-motion'
import {
  BadgeCheck,
  CalendarDays,
  Check,
  ClipboardList,
  Equal,
  Globe,
  Lightbulb,
  Minus,
  Percent,
  Plus,
  Scale,
  X,
} from 'lucide-react'
import type { ExamMarkingRule, ExamPattern } from '@/data/exam-patterns'

const toneStyles: Record<ExamMarkingRule['tone'], { chip: string; icon: typeof Plus; iconCls: string }> = {
  correct: {
    chip: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
    icon: Check,
    iconCls: 'text-emerald-500',
  },
  wrong: {
    chip: 'border-rose-400/40 bg-rose-400/10 text-rose-600 dark:text-rose-300',
    icon: X,
    iconCls: 'text-rose-400',
  },
  unattempted: {
    chip: 'border-border bg-muted/60 text-muted-foreground',
    icon: Equal,
    iconCls: 'text-muted-foreground',
  },
}

export function ExamPatternCard({ pattern }: { pattern: ExamPattern }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      aria-label={`${pattern.examName} pattern and marking scheme`}
      className="relative mb-10 overflow-hidden rounded-3xl border border-border/80 bg-card"
    >
      {/* decorative header wash */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-amber-400/[0.08] via-transparent to-emerald-400/[0.06]" aria-hidden />
      <div className="absolute inset-0 sv-grid-bg opacity-[0.12]" aria-hidden />

      <div className="relative p-6 sm:p-8">
        {/* header */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-600/90 dark:text-amber-300/90">
              <ClipboardList className="h-3.5 w-3.5" aria-hidden />
              Exam pattern · know your battlefield
            </div>
            <h2 className="mt-1.5 text-xl font-bold tracking-tight sm:text-2xl">{pattern.examName}</h2>
            <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden />
              {pattern.authority}
            </p>
          </div>
          {pattern.website && (
            <a
              href={pattern.website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3.5 py-1.5 text-[11px] font-semibold text-muted-foreground transition-colors hover:border-emerald-400/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            >
              <Globe className="h-3 w-3" aria-hidden />
              {pattern.website.label}
            </a>
          )}
        </div>

        <p className="mt-3 rounded-xl border border-amber-300/25 bg-amber-300/[0.06] px-4 py-2.5 text-[13px] font-medium leading-relaxed text-amber-900 dark:text-amber-100/90">
          {pattern.patternLine}
        </p>

        {/* quick stats grid */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {pattern.stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-xl border border-border/80 bg-background/60 p-3 transition-colors hover:border-emerald-400/40"
            >
              <div className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{stat.label}</div>
              <div className="mt-1 font-mono text-[15px] font-bold leading-none text-foreground">{stat.value}</div>
              {stat.hint && <div className="mt-1.5 text-[10px] leading-tight text-muted-foreground/80">{stat.hint}</div>}
            </div>
          ))}
        </div>

        {/* marking scheme + weightage */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* marking scheme */}
          <div className="rounded-2xl border border-border/80 bg-muted/25 p-5">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              <Scale className="h-3.5 w-3.5 text-emerald-400" aria-hidden />
              Marking scheme
            </div>
            <ul className="mt-3 space-y-2">
              {pattern.marking.map((rule) => {
                const tone = toneStyles[rule.tone]
                return (
                  <li key={rule.situation} className="flex items-center gap-3 text-[12.5px]">
                    <span
                      className={`inline-flex shrink-0 items-center gap-1 rounded-md border px-2.5 py-1 font-mono text-[12px] font-bold ${tone.chip}`}
                    >
                      <tone.icon className={`h-3 w-3 ${tone.iconCls}`} aria-hidden />
                      {rule.marks}
                    </span>
                    <span className="min-w-0 leading-snug text-muted-foreground">{rule.situation}</span>
                  </li>
                )
              })}
            </ul>
            {pattern.markingNote && (
              <p className="mt-3.5 border-t border-border/60 pt-3 text-[11.5px] leading-relaxed text-muted-foreground/90">
                {pattern.markingNote}
              </p>
            )}
          </div>

          {/* section weightage */}
          <div className="rounded-2xl border border-border/80 bg-muted/25 p-5">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              <Percent className="h-3.5 w-3.5 text-amber-400" aria-hidden />
              Sectional weightage
            </div>
            <ul className="mt-3 space-y-3.5">
              {pattern.weightage.map((row) => (
                <li key={row.name}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[13px] font-semibold leading-snug">{row.name}</span>
                    <span className="shrink-0 font-mono text-[11px] font-bold text-emerald-500 dark:text-emerald-400">
                      {row.weight}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted" aria-hidden>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.max(row.weight, 4)}%` }}
                      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-amber-400"
                    />
                  </div>
                  <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground/90">{row.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* strategy */}
        <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-400/[0.05] to-transparent p-5">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
            <Lightbulb className="h-3.5 w-3.5" aria-hidden />
            Examiner-tested strategy
          </div>
          <ol className="mt-3 space-y-2.5">
            {pattern.strategy.map((tip, i) => (
              <li key={i} className="flex gap-3 text-[13px] leading-relaxed">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-300"
                >
                  {i + 1}
                </span>
                <span className="min-w-0 text-foreground/90">{tip}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* timeline */}
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-border/70 bg-muted/30 px-4 py-3.5">
          <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden />
          <p className="text-[12.5px] leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Calendar ·</span> {pattern.timeline}
          </p>
        </div>
      </div>
    </motion.section>
  )
}
