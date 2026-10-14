'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck, Flame, Trophy, Zap } from 'lucide-react'
import { useStudy } from '@/store/useStudy'

interface DayStat {
  total: number
  lesson: number
  quiz: number
  cards: number
  note: number
}

const WEEKS = 26
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** level 0..4 color ramp (0 = no activity) */
const LEVEL_CLASS = ['bg-muted/50', 'bg-emerald-400/25', 'bg-emerald-400/45', 'bg-emerald-600/70', 'bg-emerald-600']

function levelOf(total: number): number {
  if (total <= 0) return 0
  if (total === 1) return 1
  if (total <= 3) return 2
  if (total <= 7) return 3
  return 4
}

/** local "YYYY-MM-DD" */
function dayKey(d: Date): string {
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

/**
 * GitHub-style 26-week study activity heatmap with streak stats.
 * Data comes from /api/activity (fire-and-forget events logged by src/lib/activity.ts).
 */
export function StreakHeatmap({ deviceId }: { deviceId: string }) {
  const [days, setDays] = useState<Record<string, DayStat> | null>(null)

  useEffect(() => {
    let cancelled = false
    const id = deviceId || useStudy.getState().ensureDevice()
    fetch(`/api/activity?deviceId=${encodeURIComponent(id)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled) setDays(data?.days ?? {})
      })
      .catch(() => {
        if (!cancelled) setDays({})
      })
    return () => {
      cancelled = true
    }
  }, [deviceId])

  // 26 week columns ending with the current (partial) week; rows Sun→Sat
  const { weeks, today, todayKey } = useMemo(() => {
    const t = new Date()
    t.setHours(0, 0, 0, 0)
    const weekStart = new Date(t)
    weekStart.setDate(weekStart.getDate() - weekStart.getDay()) // Sunday
    const gridStart = new Date(weekStart)
    gridStart.setDate(gridStart.getDate() - (WEEKS - 1) * 7)
    const cols: Date[][] = []
    for (let w = 0; w < WEEKS; w++) {
      const col: Date[] = []
      for (let d = 0; d < 7; d++) {
        const date = new Date(gridStart)
        date.setDate(gridStart.getDate() + w * 7 + d)
        col.push(date)
      }
      cols.push(col)
    }
    return { weeks: cols, today: t, todayKey: dayKey(t) }
  }, [])

  const stats = useMemo(() => {
    if (!days) return null
    const active = (key: string) => (days[key]?.total ?? 0) > 0

    // current streak: consecutive active days ending today (yesterday allowed if today not yet active)
    const cursor = new Date(today)
    if (!active(dayKey(cursor))) cursor.setDate(cursor.getDate() - 1)
    let current = 0
    while (active(dayKey(cursor))) {
      current++
      cursor.setDate(cursor.getDate() - 1)
    }

    // longest streak + active days over the whole 26-week range
    let longest = 0
    let run = 0
    let activeDays = 0
    const it = new Date(weeks[0][0])
    while (it.getTime() <= today.getTime()) {
      if (active(dayKey(it))) {
        run++
        activeDays++
        if (run > longest) longest = run
      } else {
        run = 0
      }
      it.setDate(it.getDate() + 1)
    }

    // total actions in the current calendar week (Sunday → today)
    let weekTotal = 0
    const wIt = new Date(weeks[WEEKS - 1][0])
    while (wIt.getTime() <= today.getTime()) {
      weekTotal += days[dayKey(wIt)]?.total ?? 0
      wIt.setDate(wIt.getDate() + 1)
    }

    return { current, longest, activeDays, weekTotal }
  }, [days, weeks, today])

  const statItems = [
    {
      icon: Flame,
      label: 'Current streak',
      value: stats ? `${stats.current} day${stats.current !== 1 ? 's' : ''}` : '—',
      cls: 'text-amber-300',
    },
    {
      icon: Trophy,
      label: 'Longest streak',
      value: stats ? `${stats.longest} day${stats.longest !== 1 ? 's' : ''}` : '—',
      cls: 'text-emerald-300',
    },
    { icon: CalendarCheck, label: 'Active days', value: stats ? String(stats.activeDays) : '—', cls: 'text-teal-300' },
    { icon: Zap, label: 'Actions this week', value: stats ? String(stats.weekTotal) : '—', cls: 'text-amber-300' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="mb-10 rounded-2xl border border-border/80 bg-card p-5 sm:p-6"
    >
      {/* header */}
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold tracking-tight">Study activity — last 26 weeks</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Lessons read, quizzes taken, cards drilled and notes saved — one square per day.
          </p>
        </div>
        {/* legend */}
        <div className="flex items-center gap-1.5 pt-1 text-[10px] text-muted-foreground" aria-hidden>
          <span>Less</span>
          {LEVEL_CLASS.map((c) => (
            <span key={c} className={`h-[10px] w-[10px] rounded-[3px] ${c}`} />
          ))}
          <span>More</span>
        </div>
      </div>

      {/* stats */}
      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {statItems.map((s) => (
          <div key={s.label} className="rounded-xl border border-border/70 bg-muted/25 px-3.5 py-2.5">
            <div className="flex items-center gap-1.5">
              <s.icon className={`h-3.5 w-3.5 ${s.cls}`} />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </span>
            </div>
            <div className="mt-1.5 font-mono text-lg font-bold tabular-nums">{s.value}</div>
          </div>
        ))}
      </div>

      {/* heatmap grid */}
      <div className="flex gap-2">
        {/* weekday labels */}
        <div className="flex shrink-0 flex-col gap-[3px] pt-[19px]" aria-hidden>
          {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((wd, i) => (
            <span key={i} className="flex h-[13px] items-center text-[9px] leading-none text-muted-foreground">
              {wd ? wd[0] : ''}
            </span>
          ))}
        </div>
        {/* scrollable weeks */}
        <div
          className="min-w-0 flex-1 overflow-x-auto"
          role="img"
          aria-label="Study activity heatmap for the last 26 weeks"
        >
          <div className="flex w-max gap-[3px] pr-8">
            {weeks.map((col, wi) => {
              const firstOfMonth = col.find((d) => d.getDate() === 1)
              return (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {/* month label slot */}
                  <div className="relative h-4 w-[13px]">
                    {firstOfMonth && (
                      <span className="absolute left-0 top-0 whitespace-nowrap text-[9px] font-medium leading-4 text-muted-foreground">
                        {MONTHS[firstOfMonth.getMonth()]}
                      </span>
                    )}
                  </div>
                  {col.map((date) => {
                    const key = dayKey(date)
                    const total = days?.[key]?.total ?? 0
                    const future = date.getTime() > today.getTime()
                    const isToday = key === todayKey
                    const fmt = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
                    const title = future ? fmt : total > 0 ? `${total} action${total !== 1 ? 's' : ''} · ${fmt}` : `No activity · ${fmt}`
                    return (
                      <span
                        key={key}
                        title={title}
                        className={`h-[13px] w-[13px] rounded-[3px] ${
                          future
                            ? 'bg-muted/20'
                            : LEVEL_CLASS[levelOf(total)] + (isToday ? ' ring-1 ring-emerald-300/80' : '')
                        }`}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
