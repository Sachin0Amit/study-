import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

/**
 * GET /api/review/queue
 * Cards due for review right now (dueAt ≤ now), oldest-due first, capped at
 * 50 so a session stays a session. New cards (reps 0) are due immediately —
 * their dueAt is their creation time.
 */
export async function GET() {
  try {
    const cards = await db.reviewCard.findMany({
      where: { dueAt: { lte: new Date() } },
      orderBy: { dueAt: 'asc' },
      take: 50,
    })
    return NextResponse.json({ cards })
  } catch (err) {
    console.error('[review/queue]', err)
    return NextResponse.json({ error: 'Queue unavailable' }, { status: 500 })
  }
}
