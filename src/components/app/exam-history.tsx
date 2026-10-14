'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ClipboardCheck, LineChart, Timer, TrendingUp, Trophy } from 'lucide-react'
import { useStudy } from '@/store/useStudy'

export interface ExamAttemptRow {
  id: string
  label: string
  chapters: string[]
  questionCount: number
  score: number
  total: number
  durationSec: number
  createdAt: string
}

// ---------- chart geometry (viewBox 0 0 320 150) ----------
const VB_W = 320
const VB_H = 150
const PLOT_LEFT = 26
const PLOT_RIGHT = 312
const PLOT_TOP = 22 // space for value labels above 100% points
const PLOT_BOTTOM = 116 // the 0% baseline
const PLOT_H = PLOT_BOTTOM - PLOT_TOP
const X_LABEL_Y = 130
const PASS_PCT = 60
const MAX_SHOWN = 12 // chart shows the last 12 attempts

function yFor(pct: number): number {
  return PLOT_BOTTOM - (Math.max(0, Math.min(100, pct)) / 100) * PLOT_H
}

function pctOf(a: ExamAttemptRow): number {
  return a.total > 0 ? Math.round((a.score / a.total) * 100) : 0
}

function fmtDuration(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = Math.round(sec % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

/** smooth-ish line: quadratic béziers hinged on segment midpoints */
function smoothPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return ''
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i - 1]
    const c = pts[i]
    const mx = (p.x + c.x) / 2
    const my = (p.y + c.y) / 2
    d += ` Q ${p.x.toFixed(1)} ${p.y.toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`
  }
  const last = pts[pts.length - 1]
  d += ` L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`
  return d
}

/**
 * Exam performance over time for the progress dashboard:
 * score % per attempt (chronological, oldest → newest) as an SVG line chart
 * with a 60% pass threshold line + summary stats.
 */
export function ExamHistory({ deviceId }: { deviceId: string }) {
  const navigate = useStudy((s) => s.navigate)
  const [attempts, setAttempts] = useState<ExamAttemptRow[] | null>(null)

  useEffect(() => {
    let cancelled = false
    const id = deviceId || useStudy.getState().ensureDevice()
    fetch(`/api/exam?deviceId=${encodeURIComponent(id)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled)
          setAttempts(Array.isArray(d?.attempts) ? (d.attempts as ExamAttemptRow[]) : [])
      })
      .catch(() => {
        if (!cancelled) setAttempts([])
      })
    return () => {
      cancelled = true
    }
  }, [deviceId])

  const loaded = attempts !== null

  // chronological order (API returns newest-first) → last 12 for the chart
  const shown = useMemo(() => {
    if (!attempts) return []
    return [...attempts].reverse().slice(-MAX_SHOWN)
  }, [attempts])

  // stats use ALL fetched attempts (not just the 12 shown)
  const stats = useMemo(() => {
    if (!attempts || attempts.length === 0) return null
    const pcts = attempts.map(pctOf)
    const best = Math.max(...pcts)
    const avg = Math.round(pcts.reduce((a, p) => a + p, 0) / pcts.length)
    const avgSec = Math.round(attempts.reduce((a, x) => a + x.durationSec, 0) / attempts.length)
    return { best, avg, count: attempts.length, avgSec }
  }, [attempts])

  // chart point coordinates (single point renders centered)
  const pts = useMemo(
    () =>
      shown.map((a, i) => ({
        x:
          shown.length === 1
            ? (PLOT_LEFT + PLOT_RIGHT) / 2
            : PLOT_LEFT + (i / (shown.length - 1)) * (PLOT_RIGHT - PLOT_LEFT),
        y: yFor(pctOf(a)),
        pct: pctOf(a),
        attempt: a,
      })),
    [shown]
  )

  const linePath = smoothPath(pts)
  const areaPath =
    pts.length >= 2
      ? `${linePath} L ${pts[pts.length - 1].x.toFixed(1)} ${PLOT_BOTTOM} L ${pts[0].x.toFixed(1)} ${PLOT_BOTTOM} Z`
      : ''
  const passY = yFor(PASS_PCT)
  const labelEvery = pts.length > 8 ? 2 : 1 // thin out value labels when crowded

  const statBoxes = stats
    ? [
        { icon: Trophy, label: 'Best score', value: `${stats.best}%`, cls: 'text-emerald-300' },
        { icon: TrendingUp, label: 'Average score', value: `${stats.avg}%`, cls: 'text-amber-300' },
        { icon: ClipboardCheck, label: 'Exams taken', value: String(stats.count), cls: 'text-emerald-300' },
        { icon: Timer, label: 'Avg duration', value: fmtDuration(stats.avgSec), cls: 'text-amber-300' },
      ]
    : []

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="mb-10 rounded-2xl border border-border/80 bg-card p-5 sm:p-6"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          <LineChart className="h-3.5 w-3.5" /> Exam performance
        </h3>
        {!loaded ? (
          <span className="font-mono text-[11px] text-muted-foreground">…</span>
        ) : stats ? (
          <span className="font-mono text-[11px] text-muted-foreground">
            {stats.count} attempt{stats.count !== 1 ? 's' : ''} · avg {stats.avg}%
          </span>
        ) : (
          <span className="font-mono text-[11px] text-muted-foreground">no attempts yet</span>
        )}
      </div>

      {!loaded ? (
        <div className="h-48 animate-pulse rounded-xl bg-muted/40" aria-hidden />
      ) : pts.length === 0 ? (
        <div className="flex min-h-44 flex-col items-center justify-center gap-2.5 rounded-xl border border-dashed border-border/80 bg-muted/20 p-6 text-center">
          <LineChart className="h-5 w-5 text-muted-foreground/60" />
          <p className="max-w-[280px] text-[13px] leading-relaxed text-muted-foreground">
            No exams yet — take your first exam to start tracking.
          </p>
          <button
            type="button"
            onClick={() => navigate({ name: 'exam' })}
            className="mt-1 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Open exam simulator
          </button>
        </div>
      ) : (
        <>
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="h-auto w-full"
            role="img"
            aria-label="Exam score percentage for each of your most recent attempts, oldest to newest"
          >
            {/* y gridlines at 0 / 50 / 100 */}
            {[0, 50, 100].map((v) => (
              <g key={v}>
                <line
                  x1={PLOT_LEFT}
                  y1={yFor(v)}
                  x2={PLOT_RIGHT}
                  y2={yFor(v)}
                  className="stroke-border"
                  strokeWidth={v === 0 ? 1.5 : 1}
                />
                <text
                  x={PLOT_LEFT - 6}
                  y={yFor(v) + 3}
                  textAnchor="end"
                  fontSize={9}
                  className="fill-muted-foreground font-mono"
                >
                  {v}
                </text>
              </g>
            ))}

            {/* 60% pass threshold */}
            <line
              x1={PLOT_LEFT}
              y1={passY}
              x2={PLOT_RIGHT}
              y2={passY}
              className="stroke-amber-300/40"
              strokeWidth={1}
              strokeDasharray="4 4"
            />
            <text
              x={PLOT_RIGHT}
              y={passY - 3}
              textAnchor="end"
              fontSize={8}
              className="fill-amber-300/80 font-mono"
            >
              60%
            </text>

            {/* area fill + line */}
            {areaPath && <path d={areaPath} className="fill-emerald-400/10" />}
            {linePath && (
              <path
                d={linePath}
                fill="none"
                className="stroke-emerald-400"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}

            {/* points (emerald = pass, amber = below 60%) */}
            {pts.map((p) => (
              <circle
                key={p.attempt.id}
                cx={p.x.toFixed(1)}
                cy={p.y.toFixed(1)}
                r={3.5}
                className={p.pct >= PASS_PCT ? 'fill-emerald-400' : 'fill-amber-400'}
              >
                <title>{`${p.attempt.label} · ${p.attempt.score}/${p.attempt.total} (${p.pct}%) · ${fmtDuration(
                  p.attempt.durationSec
                )} · ${new Date(p.attempt.createdAt).toLocaleDateString()}`}</title>
              </circle>
            ))}

            {/* value labels (thinned out when crowded) */}
            {pts.map(
              (p, i) =>
                i % labelEvery === 0 && (
                  <text
                    key={`v-${p.attempt.id}`}
                    x={p.x.toFixed(1)}
                    y={p.y - 7}
                    textAnchor="middle"
                    fontSize={10}
                    className="fill-muted-foreground font-mono"
                  >
                    {p.pct}%
                  </text>
                )
            )}

            {/* x labels: attempt order within the shown window */}
            {pts.map((p, i) => (
              <text
                key={`x-${p.attempt.id}`}
                x={p.x.toFixed(1)}
                y={X_LABEL_Y}
                textAnchor="middle"
                fontSize={9}
                className="fill-muted-foreground font-mono"
              >
                {i + 1}
              </text>
            ))}
          </svg>
          <p className="mt-3 text-xs text-muted-foreground">
            Score % per attempt · dashed line = 60% pass threshold
          </p>

          {stats && (
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {statBoxes.map((s) => (
                <div key={s.label} className="rounded-xl border border-border/70 bg-muted/20 px-4 py-3">
                  <s.icon className={`h-4 w-4 ${s.cls}`} />
                  <div className="mt-2 font-mono text-lg font-bold leading-none">{s.value}</div>
                  <div className="mt-1.5 text-[11px] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </motion.div>
  )
}
