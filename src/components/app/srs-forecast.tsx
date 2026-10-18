'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { CalendarClock, Layers } from 'lucide-react'
import { LIBRARY_CHAPTERS, LIBRARY_SECTIONS } from '@/data/library'
import { useAllContent } from '@/hooks/use-content'

export interface CardSrs {
  box: number
  dueAt: string
  seen: number
  correct: number
}

/** local "YYYY-MM-DD" day key (same helper as streak-heatmap) */
function dayKey(d: Date): string {
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

// ---------- chart geometry (viewBox 0 0 320 150) ----------
const VB_W = 320
const VB_H = 150
const PLOT_TOP = 20 // space for value labels above the tallest bar
const BASELINE = 116
const PLOT_H = BASELINE - PLOT_TOP
const BAR_W = 30
const BAR_STEP = 40
const BAR_LEFT = 25
const GRID_YS = [44, 68, 92] // 3 subtle gridlines
const MIN_SCALE = 10 // small counts must not fill the chart

interface ChapterDue {
  id: string
  number: number
  shortTitle: string
  total: number
  due: number
  seen: number
}

interface ForecastDay {
  label: string
  count: number
}

/**
 * SRS review outlook for the progress dashboard:
 *  A) cards due for review, broken down by chapter
 *  B) 7-day forecast of cards becoming due (overdue + new cards lumped into "Today")
 */
export function SrsForecast({ srs, loaded }: { srs: Record<string, CardSrs>; loaded: boolean }) {
  /* lesson corpus arrives by runtime fetch (kept out of the bundle) */
  const allContent = useAllContent()
  const totalCards = allContent ? allContent.reduce((a, c) => a + c.concepts.length, 0) : 0

  // section→chapter map (avoids the historic ch1/ch10 prefix-parsing bug)
  const sectionToChapter = useMemo(
    () => new Map(LIBRARY_SECTIONS.map((s) => [s.id, s.chapterId])),
    []
  )

  const { chapters, days, totalDue, hasAnyState } = useMemo(() => {
    const now = Date.now()

    // 7 calendar days starting at local midnight of today
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const dates: Date[] = []
    for (let i = 0; i < 7; i++) {
      const d = new Date(today)
      d.setDate(d.getDate() + i)
      dates.push(d)
    }
    const keys = dates.map(dayKey)
    const counts = new Array(7).fill(0) as number[]

    const byChapter = new Map<string, ChapterDue>()
    for (const ch of LIBRARY_CHAPTERS) {
      byChapter.set(ch.id, { id: ch.id, number: ch.number, shortTitle: ch.shortTitle, total: 0, due: 0, seen: 0 })
    }

    let seenCards = 0
    for (const sec of allContent ?? []) {
      const stat = byChapter.get(sectionToChapter.get(sec.sectionId) ?? '')
      for (const concept of sec.concepts) {
        const key = `${sec.sectionId}::${concept.term}`
        const state = srs[key]
        if (stat) {
          stat.total++
          if (state) {
            stat.seen++
            if (new Date(state.dueAt).getTime() <= now) stat.due++
          } else {
            stat.due++ // never seen → due immediately
          }
        }
        if (!state) {
          counts[0]++ // new cards count as due today
          continue
        }
        seenCards++
        const k = dayKey(new Date(state.dueAt))
        const idx = keys.indexOf(k)
        if (idx >= 0) counts[idx]++ // falls inside the 7-day window
        else if (k < keys[0]) counts[0]++ // overdue → lumped into Today
        // due beyond day 6 → outside the window
      }
    }

    const chapters = Array.from(byChapter.values())
      .filter((c) => c.total > 0)
      .sort((a, b) => a.number - b.number)

    const days: ForecastDay[] = dates.map((d, i) => ({
      label: i === 0 ? 'Today' : d.toLocaleDateString(undefined, { weekday: 'short' }),
      count: counts[i],
    }))

    return { chapters, days, totalDue: chapters.reduce((a, c) => a + c.due, 0), hasAnyState: seenCards > 0 }
  }, [srs, sectionToChapter, allContent])

  const maxCount = Math.max(MIN_SCALE, ...days.map((d) => d.count))

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="mb-10 rounded-2xl border border-border/80 bg-card p-5 sm:p-6"
    >
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {/* ---------- A. due by chapter ---------- */}
        <section aria-label="Due for review by chapter">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              <Layers className="h-3.5 w-3.5" /> Due for review by chapter
            </h3>
            {loaded ? (
              <span
                className={`font-mono text-[11px] ${
                  totalDue > 0 ? 'font-bold text-amber-300' : 'font-semibold text-emerald-300'
                }`}
              >
                {totalDue} cards due across all chapters
              </span>
            ) : (
              <span className="font-mono text-[11px] text-muted-foreground">…</span>
            )}
          </div>

          {!loaded ? (
            <div className="grid gap-2.5 pt-1" aria-hidden>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-6 animate-pulse rounded-lg bg-muted/40" />
              ))}
            </div>
          ) : (
            <div>
              {chapters.map((ch) => {
                const pct = ch.total ? (ch.due / ch.total) * 100 : 0
                const fill =
                  ch.due > 0 ? 'bg-amber-400' : ch.seen > 0 ? 'bg-emerald-400' : 'bg-transparent'
                return (
                  <div key={ch.id} className="flex items-center gap-2.5 py-1.5">
                    <span className="shrink-0 rounded-md border border-border/70 bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-muted-foreground">
                      CH {ch.number}
                    </span>
                    <span className="w-[92px] shrink-0 truncate text-[12px] font-medium sm:w-28">
                      {ch.shortTitle}
                    </span>
                    <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${fill}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                      {ch.due}/{ch.total} due
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        {/* ---------- B. 7-day forecast ---------- */}
        <section aria-label="Review forecast for the next 7 days">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/80">
              <CalendarClock className="h-3.5 w-3.5" /> Review forecast — next 7 days
            </h3>
          </div>

          {!loaded ? (
            <div className="h-48 animate-pulse rounded-xl bg-muted/40" aria-hidden />
          ) : !hasAnyState ? (
            <div className="flex min-h-44 flex-col items-center justify-center gap-2.5 rounded-xl border border-dashed border-border/80 bg-muted/20 p-6 text-center">
              <CalendarClock className="h-5 w-5 text-muted-foreground/60" />
              <p className="max-w-[240px] text-[13px] leading-relaxed text-muted-foreground">
                Start reviewing to see your forecast — all {totalCards} cards are new.
              </p>
            </div>
          ) : (
            <>
              <svg
                viewBox={`0 0 ${VB_W} ${VB_H}`}
                className="h-auto w-full"
                role="img"
                aria-label="Number of flashcards becoming due each day over the next 7 days"
              >
                {/* gridlines */}
                {GRID_YS.map((y) => (
                  <line key={y} x1={6} y1={y} x2={VB_W - 6} y2={y} className="stroke-border" strokeWidth={1} />
                ))}
                <line x1={6} y1={BASELINE} x2={VB_W - 6} y2={BASELINE} className="stroke-border" strokeWidth={1.5} />

                {days.map((d, i) => {
                  const x = BAR_LEFT + i * BAR_STEP
                  const cx = x + BAR_W / 2
                  const barH =
                    d.count > 0 ? Math.max(2, Math.round((d.count / maxCount) * PLOT_H)) : 0
                  const barTop = BASELINE - barH
                  return (
                    <g key={d.label + i}>
                      {barH > 0 && (
                        <rect
                          x={x}
                          y={barTop}
                          width={BAR_W}
                          height={barH}
                          rx={3}
                          className={i === 0 ? 'fill-amber-400/80' : 'fill-emerald-400/70'}
                        />
                      )}
                      <text
                        x={cx}
                        y={barTop - 5}
                        textAnchor="middle"
                        fontSize={10}
                        className="fill-muted-foreground font-mono"
                      >
                        {d.count}
                      </text>
                      <text
                        x={cx}
                        y={132}
                        textAnchor="middle"
                        fontSize={9}
                        fontWeight={i === 0 ? 600 : 400}
                        className={i === 0 ? 'fill-amber-300' : 'fill-muted-foreground'}
                      >
                        {d.label}
                      </text>
                    </g>
                  )
                })}
              </svg>
              <p className="mt-3 text-xs text-muted-foreground">
                Cards becoming due each day — review early to keep the curve flat.
              </p>
            </>
          )}
        </section>
      </div>
    </motion.div>
  )
}
