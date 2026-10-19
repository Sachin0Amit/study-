import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { schedule, type Grade } from '@/lib/sm2'

/** UTC "YYYY-MM-DD" day key — the ReviewLog primary dimension. */
function utcDayKey(d: Date = new Date()): string {
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(
    d.getUTCDate()
  ).padStart(2, '0')}`
}

/**
 * POST /api/review/answer  { cardId, grade }
 * grade: 0 Again · 1 Hard · 2 Good · 3 Easy — SM-2 reschedules the card and
 * the day's ReviewLog counter ticks up (streak + sparkline fuel).
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const cardId = typeof body?.cardId === 'string' ? body.cardId : ''
  const grade = Number(body?.grade)

  if (!cardId) {
    return NextResponse.json({ error: 'cardId required' }, { status: 400 })
  }
  if (!Number.isInteger(grade) || grade < 0 || grade > 3) {
    return NextResponse.json({ error: 'grade must be 0–3' }, { status: 400 })
  }

  try {
    const card = await db.reviewCard.findUnique({ where: { id: cardId } })
    if (!card) {
      return NextResponse.json({ error: 'Card not found' }, { status: 404 })
    }

    const next = schedule(
      { reps: card.reps, lapses: card.lapses, interval: card.interval, ease: card.ease },
      grade as Grade
    )

    const updated = await db.reviewCard.update({
      where: { id: cardId },
      data: {
        reps: next.reps,
        lapses: next.lapses,
        interval: next.interval,
        ease: next.ease,
        dueAt: next.dueAt,
        lastGrade: grade,
      },
    })

    await db.reviewLog.upsert({
      where: { day: utcDayKey() },
      update: { reviews: { increment: 1 } },
      create: { day: utcDayKey(), reviews: 1 },
    })

    return NextResponse.json({ card: updated })
  } catch (err) {
    console.error('[review/answer]', err)
    return NextResponse.json({ error: 'Answer failed' }, { status: 500 })
  }
}
