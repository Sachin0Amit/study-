'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, ChevronRight, Radar } from 'lucide-react'
import { LIBRARY_CHAPTERS, LIBRARY_SECTIONS } from '@/data/library'
import { useStudy } from '@/store/useStudy'

// ---------- shared prop types (structurally identical to the store's entries) ----------
export interface ProgressEntryLite {
  status: 'in_progress' | 'completed'
  quizScore?: { score: number; total: number }
  lastViewed: string
}

interface ExamAttemptLite {
  id: string
  chapters: string[]
  score: number
  total: number
}

export interface ChapterMastery {
  chapterId: string
  number: number
  shortTitle: string
  /** 0-100 overall: completion 40% · quizzes 30% · exams 30% */
  mastery: number
  completion: number
  quiz: number
  exam: number
  completedCount: number
  sectionCount: number
}

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

// ---------- radar geometry (viewBox 0 0 460 380) ----------
const VB_W = 460
const VB_H = 380
const CX = 230
const CY = 192
const R = 142
const N = LIBRARY_CHAPTERS.length // 13 axes
const LABEL_R = R + 17
const RINGS = [25, 50, 75, 100]
const DRAW_MS = 850

/** angle of axis i in radians — chapter 1 at 12 o'clock, then clockwise */
function axisAngle(i: number): number {
  return ((-90 + (i * 360) / N) * Math.PI) / 180
}

function axisPoint(i: number, radius: number): { x: number; y: number } {
  const a = axisAngle(i)
  return { x: CX + radius * Math.cos(a), y: CY + radius * Math.sin(a) }
}

function ringPoints(radius: number): string {
  return Array.from({ length: N }, (_, i) => {
    const p = axisPoint(i, radius)
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`
  }).join(' ')
}

// ---------- mastery math ----------
function computeMasteries(
  progress: Record<string, ProgressEntryLite>,
  attempts: ExamAttemptLite[]
): ChapterMastery[] {
  return LIBRARY_CHAPTERS.map((ch) => {
    const secs = LIBRARY_SECTIONS.filter((s) => s.chapterId === ch.id)
    const done = secs.filter((s) => progress[s.id]?.status === 'completed').length

    // (a) completion — share of the chapter's sections marked completed
    const completion = secs.length ? (done / secs.length) * 100 : 0

    // (b) quizzes — average best quiz score % over the chapter's quizzed sections
    const quizScores = secs
      .map((s) => progress[s.id]?.quizScore)
      .filter((q): q is { score: number; total: number } => !!q)
    const quiz = quizScores.length
      ? (quizScores.reduce((a, q) => a + (q.total > 0 ? q.score / q.total : 0), 0) / quizScores.length) * 100
      : 0

    // (c) exams — average score % over attempts that covered this chapter
    const covering = attempts.filter((a) => Array.isArray(a.chapters) && a.chapters.includes(ch.id))
    const exam = covering.length
      ? (covering.reduce((a, x) => a + (x.total > 0 ? x.score / x.total : 0), 0) / covering.length) * 100
      : 0

    const mastery = Math.round(0.4 * completion + 0.3 * quiz + 0.3 * exam)
    return {
      chapterId: ch.id,
      number: ch.number,
      shortTitle: ch.shortTitle,
      mastery,
      completion: Math.round(completion),
      quiz: Math.round(quiz),
      exam: Math.round(exam),
      completedCount: done,
      sectionCount: secs.length,
    }
  })
}

function barClass(mastery: number): string {
  if (mastery >= 60) return 'bg-gradient-to-r from-emerald-400 to-teal-300'
  if (mastery >= 30) return 'bg-amber-300'
  return 'bg-rose-400'
}

/**
 * Per-chapter mastery radar for the progress dashboard: a 13-axis animated SVG
 * radar (completion 40% · quizzes 30% · exams 30%) plus a clickable
 * leaderboard. Exam attempts are fetched here; reading/quiz state arrives via
 * the `progress` prop (the store map the dashboard already loads).
 */
export function MasteryRadar({
  deviceId,
  progress,
}: {
  deviceId: string
  progress: Record<string, ProgressEntryLite>
}) {
  const navigate = useStudy((s) => s.navigate)
  const reduceMotion = useReducedMotion()
  const [attempts, setAttempts] = useState<ExamAttemptLite[] | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false
    const id = deviceId || useStudy.getState().ensureDevice()
    fetch(`/api/exam?deviceId=${encodeURIComponent(id)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled) setAttempts(Array.isArray(d?.attempts) ? (d.attempts as ExamAttemptLite[]) : [])
      })
      .catch(() => {
        if (!cancelled) setAttempts([])
      })
    return () => {
      cancelled = true
    }
  }, [deviceId])

  const loaded = attempts !== null

  const masteries = useMemo(
    () => (attempts === null ? [] : computeMasteries(progress, attempts)),
    [attempts, progress]
  )

  // draw animation: polygon grows from the center once data lands (runs once).
  // With prefers-reduced-motion the render below pins the final state instead.
  const [draw, setDraw] = useState(0)
  const drewRef = useRef(false)
  useEffect(() => {
    if (!loaded || drewRef.current || reduceMotion) return
    drewRef.current = true
    let raf = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / DRAW_MS)
      setDraw(1 - Math.pow(1 - p, 3))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [loaded, reduceMotion])
  const drawNow = reduceMotion ? 1 : draw

  // interpolated data vertices (ride the draw animation)
  const dataPoints = masteries.map((m, i) => axisPoint(i, (m.mastery / 100) * R * drawNow))
  const polygonPoints = dataPoints.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')

  const maxMastery = masteries.length ? Math.max(...masteries.map((m) => m.mastery)) : 0
  const isEmpty = loaded && masteries.length > 0 && maxMastery === 0
  const best = maxMastery > 0 ? masteries.reduce((b, m) => (m.mastery > b.mastery ? m : b)) : null
  let weak = best ? masteries.reduce((w, m) => (m.mastery < w.mastery ? m : w)) : null
  if (weak && best && weak.chapterId === best.chapterId) weak = null
  const bestIdx = best ? masteries.findIndex((m) => m.chapterId === best.chapterId) : -1
  const weakIdx = weak ? masteries.findIndex((m) => m.chapterId === weak.chapterId) : -1
  const avg = masteries.length
    ? Math.round(masteries.reduce((a, m) => a + m.mastery, 0) / masteries.length)
    : null

  const ranked = useMemo(
    () => [...masteries].sort((a, b) => b.mastery - a.mastery || a.number - b.number),
    [masteries]
  )

  const hoveredMastery = hovered !== null ? masteries[hovered] : null
  const hoveredPoint =
    hovered !== null ? axisPoint(hovered, (masteries[hovered].mastery / 100) * R) : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="mb-10 rounded-2xl border border-border/80 bg-card p-5 sm:p-6"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300/80">
          <Radar className="h-3.5 w-3.5" /> Chapter mastery radar
        </h3>
        <span className="font-mono text-[11px] text-muted-foreground">
          {!loaded ? '…' : isEmpty ? 'no data yet' : `avg mastery ${avg}%`}
        </span>
      </div>

      {!loaded ? (
        <div className="h-64 animate-pulse rounded-xl bg-muted/40" aria-hidden />
      ) : (
        <>
          <div className="relative mx-auto w-full max-w-2xl">
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              role="img"
              aria-label={`Radar chart of mastery for all ${N} chapters across the library: completion counts 40 percent, quiz averages 30 percent, exam averages 30 percent`}
              className="block h-auto w-full"
              data-testid="mastery-radar"
            >
              {/* concentric grid rings (25 / 50 / 75 / 100) — 50% slightly stronger */}
              {RINGS.map((v) => (
                <polygon
                  key={v}
                  data-testid="mastery-ring"
                  points={ringPoints((v / 100) * R)}
                  className={v === 50 ? 'fill-none stroke-border' : 'fill-none stroke-border/60'}
                  strokeWidth={v === 50 ? 1.1 : 0.8}
                />
              ))}

              {/* axis spokes */}
              {masteries.map((m, i) => {
                const p = axisPoint(i, R)
                return (
                  <line
                    key={`axis-${m.chapterId}`}
                    data-testid="mastery-axis"
                    x1={CX}
                    y1={CY}
                    x2={p.x.toFixed(1)}
                    y2={p.y.toFixed(1)}
                    className="stroke-border/50"
                    strokeWidth={0.8}
                  />
                )
              })}

              {/* data polygon (fill + stroke drawn on top of the web) */}
              <polygon
                data-testid="mastery-polygon"
                points={polygonPoints}
                className="fill-emerald-400/15 stroke-emerald-400/80"
                strokeWidth={1.5}
                strokeLinejoin="round"
              />

              {/* vertices (staggered scale-in) */}
              {masteries.map((m, i) => {
                const p = dataPoints[i]
                return (
                  <motion.circle
                    key={`v-${m.chapterId}`}
                    data-testid="mastery-vertex"
                    cx={p.x.toFixed(1)}
                    cy={p.y.toFixed(1)}
                    r={3}
                    className="fill-emerald-400"
                    initial={reduceMotion ? false : { scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.04, duration: 0.3, ease: 'easeOut' }}
                    style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                  />
                )
              })}

              {/* pulsing markers: strongest (amber) + needs work (rose) */}
              {bestIdx >= 0 && dataPoints[bestIdx] && (
                <g data-testid="mastery-pulse-best">
                  <circle
                    cx={dataPoints[bestIdx].x.toFixed(1)}
                    cy={dataPoints[bestIdx].y.toFixed(1)}
                    r={4}
                    className="fill-amber-400"
                  />
                  {!reduceMotion && (
                    <motion.circle
                      cx={dataPoints[bestIdx].x.toFixed(1)}
                      cy={dataPoints[bestIdx].y.toFixed(1)}
                      r={4}
                      className="fill-amber-400/50"
                      initial={{ r: 4, opacity: 0.6 }}
                      animate={{ r: 11, opacity: 0 }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                </g>
              )}
              {weakIdx >= 0 && dataPoints[weakIdx] && (
                <g data-testid="mastery-pulse-weak">
                  <circle
                    cx={dataPoints[weakIdx].x.toFixed(1)}
                    cy={dataPoints[weakIdx].y.toFixed(1)}
                    r={4}
                    className="fill-rose-400"
                  />
                  {!reduceMotion && (
                    <motion.circle
                      cx={dataPoints[weakIdx].x.toFixed(1)}
                      cy={dataPoints[weakIdx].y.toFixed(1)}
                      r={4}
                      className="fill-rose-400/50"
                      initial={{ r: 4, opacity: 0.6 }}
                      animate={{ r: 11, opacity: 0 }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
                    />
                  )}
                </g>
              )}

              {/* hover hit areas at the final vertex positions */}
              {masteries.map((m, i) => {
                const p = axisPoint(i, (m.mastery / 100) * R)
                return (
                  <circle
                    key={`hit-${m.chapterId}`}
                    cx={p.x.toFixed(1)}
                    cy={p.y.toFixed(1)}
                    r={14}
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                  >
                    <title>{`Ch ${m.number} · ${m.shortTitle} — ${m.mastery}% mastery (completion ${m.completion}% · quizzes ${m.quiz}% · exams ${m.exam}%)`}</title>
                  </circle>
                )
              })}

              {/* radial chapter-number labels (full titles live in the leaderboard below) */}
              {masteries.map((m, i) => {
                const p = axisPoint(i, LABEL_R)
                const cos = Math.cos(axisAngle(i))
                const anchor = cos > 0.25 ? 'start' : cos < -0.25 ? 'end' : 'middle'
                return (
                  <text
                    key={`lbl-${m.chapterId}`}
                    data-testid="mastery-axis-label"
                    x={p.x.toFixed(1)}
                    y={p.y.toFixed(1)}
                    textAnchor={anchor}
                    dominantBaseline="central"
                    fontSize={10}
                    className="fill-muted-foreground font-mono"
                  >
                    {m.number}
                    <title>{`Ch ${m.number} · ${m.shortTitle}`}</title>
                  </text>
                )
              })}
            </svg>

            {/* hover tooltip (absolute over the chart, never blocks the pointer) */}
            {hoveredMastery && hoveredPoint && (
              <div
                data-testid="mastery-tooltip"
                className="pointer-events-none absolute z-10 w-44 rounded-lg border border-border bg-card px-3 py-2 shadow-lg"
                style={{
                  left: `${(hoveredPoint.x / VB_W) * 100}%`,
                  top: `${(hoveredPoint.y / VB_H) * 100}%`,
                  transform:
                    hoveredPoint.y < CY
                      ? 'translate(-50%, 16px)'
                      : 'translate(-50%, calc(-100% - 16px))',
                }}
              >
                <div className="text-[11px] font-bold">
                  <span className="font-mono text-emerald-300/90">Ch {hoveredMastery.number}</span>{' '}
                  {hoveredMastery.shortTitle}
                </div>
                <div className="mt-0.5 font-mono text-lg font-bold leading-none text-emerald-300">
                  {hoveredMastery.mastery}%
                </div>
                <div className="mt-1.5 space-y-0.5 font-mono text-[10px] text-muted-foreground">
                  <div>completion {hoveredMastery.completion}%</div>
                  <div>quizzes {hoveredMastery.quiz}%</div>
                  <div>exams {hoveredMastery.exam}%</div>
                </div>
              </div>
            )}
          </div>

          {/* legend + formula hint */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
            {best && (
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-amber-200">
                <ArrowUpRight className="h-3 w-3" /> strongest · Ch {best.number} ({best.mastery}%)
              </span>
            )}
            {weak && (
              <span className="inline-flex items-center gap-1 rounded-full border border-rose-400/30 bg-rose-400/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-rose-300">
                <ArrowDownRight className="h-3 w-3" /> needs work · Ch {weak.number} ({weak.mastery}%)
              </span>
            )}
            <span className="font-mono text-[10px] text-muted-foreground" data-testid="mastery-formula-hint">
              mastery = completion 40% · quizzes 30% · exams 30%
            </span>
          </div>

          {/* leaderboard (all chapters, sorted) or the empty-state call to action */}
          {isEmpty ? (
            <div
              className="mt-4 flex flex-col items-center gap-2.5 rounded-xl border border-dashed border-border/80 bg-muted/20 p-5 text-center"
              data-testid="mastery-empty"
            >
              <p className="max-w-sm text-[13px] leading-relaxed text-muted-foreground">
                Start reading, quizzing or sitting exams to fill in your mastery map.
              </p>
              <button
                type="button"
                data-testid="mastery-empty-cta"
                onClick={() => navigate({ name: 'library' })}
                className={`inline-flex items-center gap-1 text-[13px] font-semibold text-emerald-300 underline underline-offset-4 transition-colors hover:text-emerald-200 ${FOCUS_RING}`}
              >
                Open the library <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <div
              className="mt-4 grid max-h-44 gap-1 overflow-y-auto pr-1"
              data-testid="mastery-leaderboard"
            >
              {ranked.map((m, rank) => (
                <button
                  key={`row-${m.chapterId}`}
                  type="button"
                  data-testid="mastery-row"
                  data-chapter-id={m.chapterId}
                  onClick={() => navigate({ name: 'chapter', chapterId: m.chapterId })}
                  className={`group flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-muted/40 ${FOCUS_RING}`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border font-mono text-[10px] font-semibold ${
                      rank < 3
                        ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                        : 'border-border/70 bg-muted/30 text-muted-foreground'
                    }`}
                  >
                    {m.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-2">
                      <span className="truncate text-[12.5px] font-medium">{m.shortTitle}</span>
                      <span className="shrink-0 font-mono text-[11px] font-semibold">{m.mastery}%</span>
                    </span>
                    <span className="mt-1 block h-1 overflow-hidden rounded-full bg-muted">
                      <span
                        className={`block h-full rounded-full transition-all duration-700 ${barClass(m.mastery)}`}
                        style={{ width: `${m.mastery}%` }}
                      />
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </motion.div>
  )
}
