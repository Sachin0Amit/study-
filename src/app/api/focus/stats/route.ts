import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/**
 * X11 — Focus HQ analytics. Answers "what did I study, for how much time".
 *
 * GET ?deviceId=…&days=… (default 14, max 120)
 * → {
 *     days:   [{ day, label, minutes, pomodoros, interruptions }],   // oldest → today
 *     subjects: [{ subject, minutes, sessions, pomodoros }],        // desc by minutes
 *     hours:  [{ hour, minutes }],                                   // 24 bins, focus start hour
 *     totals: { allMinutes, allPomodoros, allSessions, avgSessionMin,
 *               streakDays, bestDayMinutes, bestDayDate, weekMinutes,
 *               todayMinutes, todayPomodoros, todayInterruptions,
 *               completedTasks }
 *   }
 */

function localDayKey(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function shiftLocalDay(base: Date, days: number): Date {
  const d = new Date(base.getFullYear(), base.getMonth(), base.getDate())
  d.setDate(d.getDate() + days)
  return d
}

export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  const days = Math.min(120, Math.max(7, Number(req.nextUrl.searchParams.get('days')) || 14))

  try {
    const now = new Date()
    const windowStart = shiftLocalDay(now, -(days - 1))
    const windowStartKey = localDayKey(windowStart)

    // all sessions in the chart window (day keys are LOCAL — sessions store local days)
    const [windowRows, focusAll, completedTasks] = await Promise.all([
      db.focusSession.findMany({
        where: { deviceId, day: { gte: windowStartKey } },
        orderBy: { startedAt: 'asc' },
      }),
      db.focusSession.findMany({
        where: { deviceId, kind: 'focus' },
        select: { startedAt: true, day: true, actualSec: true, interruptions: true, completed: true },
      }),
      db.focusTask.count({ where: { deviceId, completed: true } }),
    ])

    /* ---- per-day chart (focus only) ---- */
    const byDay = new Map<string, { minutes: number; pomodoros: number; interruptions: number }>()
    for (const r of windowRows) {
      if (r.kind !== 'focus') continue
      const e = byDay.get(r.day) ?? { minutes: 0, pomodoros: 0, interruptions: 0 }
      e.minutes += Math.round(r.actualSec / 60)
      e.pomodoros += r.completed ? 1 : 0
      e.interruptions += r.interruptions
      byDay.set(r.day, e)
    }
    const dayRows: { day: string; label: string; minutes: number; pomodoros: number; interruptions: number }[] = []
    for (let i = days - 1; i >= 0; i--) {
      const d = shiftLocalDay(now, -i)
      const key = localDayKey(d)
      const e = byDay.get(key)
      dayRows.push({
        day: key,
        label: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()] ?? '',
        minutes: e?.minutes ?? 0,
        pomodoros: e?.pomodoros ?? 0,
        interruptions: e?.interruptions ?? 0,
      })
    }

    /* ---- per-subject time (focus only, all sessions w/ subject) ---- */
    const subjectRows = await db.focusSession.groupBy({
      by: ['subject'],
      where: { deviceId, kind: 'focus', subject: { not: null } },
      _sum: { actualSec: true },
      _count: { _all: true },
    })
    const subjects = subjectRows
      .map((r) => ({
        subject: r.subject ?? 'Unlabelled',
        minutes: Math.round((r._sum.actualSec ?? 0) / 60),
        sessions: r._count._all,
      }))
      .filter((r) => r.minutes > 0)
      .sort((a, b) => b.minutes - a.minutes)
      .slice(0, 12)

    /* ---- hour-of-day histogram (focus start hour, all time) ---- */
    const hourBins = new Array(24).fill(0) as number[]
    for (const r of focusAll) hourBins[r.startedAt.getHours()] += Math.round(r.actualSec / 60)

    /* ---- totals + streak ---- */
    const focusDays = new Set(focusAll.map((r) => r.day))
    const allMinutes = Math.round(focusAll.reduce((n, r) => n + r.actualSec, 0) / 60)
    const allPomodoros = focusAll.filter((r) => r.completed).length
    const allSessions = focusAll.length

    // streak of consecutive local days with ≥1 focus session
    let streakDays = 0
    const todayKey = localDayKey(now)
    const hasToday = focusDays.has(todayKey)
    const hasYesterday = focusDays.has(localDayKey(shiftLocalDay(now, -1)))
    if (hasToday || hasYesterday) {
      let i = hasToday ? 0 : -1 // this morning shouldn't zero out yesterday's run
      while (i > -400 && focusDays.has(localDayKey(shiftLocalDay(now, i)))) {
        streakDays++
        i--
      }
    }

    // best day (all time)
    const dayTotals = new Map<string, number>()
    for (const r of focusAll) dayTotals.set(r.day, (dayTotals.get(r.day) ?? 0) + r.actualSec)
    let bestDayMinutes = 0
    let bestDayDate = ''
    for (const [d, sec] of dayTotals) {
      const min = Math.round(sec / 60)
      if (min > bestDayMinutes) {
        bestDayMinutes = min
        bestDayDate = d
      }
    }

    const today = byDay.get(todayKey)
    const weekKeys = new Set(Array.from({ length: 7 }, (_, i) => localDayKey(shiftLocalDay(now, -i))))
    let weekMinutes = 0
    for (const [d, sec] of dayTotals) if (weekKeys.has(d)) weekMinutes += Math.round(sec / 60)

    return NextResponse.json({
      days: dayRows,
      subjects,
      hours: hourBins.map((minutes, hour) => ({ hour, minutes })),
      totals: {
        allMinutes,
        allPomodoros,
        allSessions,
        avgSessionMin: allSessions > 0 ? Math.round(allMinutes / allSessions) : 0,
        streakDays,
        bestDayMinutes,
        bestDayDate,
        weekMinutes,
        todayMinutes: today?.minutes ?? 0,
        todayPomodoros: today?.pomodoros ?? 0,
        todayInterruptions: today?.interruptions ?? 0,
        completedTasks,
      },
    })
  } catch (err) {
    console.error('[focus/stats]', err)
    return NextResponse.json({ error: 'Focus stats unavailable' }, { status: 500 })
  }
}
