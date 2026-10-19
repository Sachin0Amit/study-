import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

/** UTC "YYYY-MM-DD" day key — matches the ReviewLog rows. */
function utcDayKey(d: Date): string {
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(
    d.getUTCDate()
  ).padStart(2, '0')}`
}

function shiftDay(d: Date, days: number): Date {
  return new Date(d.getTime() + days * 24 * 60 * 60 * 1000)
}

/**
 * GET /api/review/stats
 * Dashboard fuel: due count, deck size, day streak, reviews today and the
 * last-7-days activity the sparkline draws.
 */
export async function GET() {
  try {
    const now = new Date()

    const [due, total, logs] = await Promise.all([
      db.reviewCard.count({ where: { dueAt: { lte: now } } }),
      db.reviewCard.count(),
      db.reviewLog.findMany({
        where: {
          day: {
            gte: utcDayKey(shiftDay(now, -30)), // streak look-back window
          },
        },
        orderBy: { day: 'desc' },
      }),
    ])

    const byDay = new Map(logs.map((l) => [l.day, l.reviews]))

    // last 7 days ending today (UTC), oldest → newest
    const week = Array.from({ length: 7 }, (_, i) => {
      const d = shiftDay(now, i - 6)
      const key = utcDayKey(d)
      return {
        day: key,
        label: ['S', 'M', 'T', 'W', 'T', 'F', 'S'][d.getUTCDay()],
        reviews: byDay.get(key) ?? 0,
      }
    })

    // streak: consecutive days with reviews > 0, ending today (or yesterday,
    // so this morning doesn't zero out yesterday's honest run)
    let streak = 0
    let cursor = now
    const todayKey = utcDayKey(now)
    if (!(byDay.get(todayKey) ?? 0)) {
      if (!(byDay.get(utcDayKey(shiftDay(now, -1))) ?? 0)) {
        return NextResponse.json({ due, total, streak: 0, reviewedToday: 0, week })
      }
      cursor = shiftDay(now, -1)
    }
    for (let i = 0; i < 366; i++) {
      const key = utcDayKey(cursor)
      if ((byDay.get(key) ?? 0) > 0) {
        streak++
        cursor = shiftDay(cursor, -1)
      } else break
    }

    return NextResponse.json({
      due,
      total,
      streak,
      reviewedToday: byDay.get(todayKey) ?? 0,
      week,
    })
  } catch (err) {
    console.error('[review/stats]', err)
    return NextResponse.json({ error: 'Stats unavailable' }, { status: 500 })
  }
}
