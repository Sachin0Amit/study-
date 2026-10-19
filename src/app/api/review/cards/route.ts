import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/**
 * GET /api/review/cards?limit=300
 * The whole deck, newest first — the "All review cards" browser on the
 * Review dashboard (due chips, kind filters, jump-into-session).
 */
export async function GET(req: NextRequest) {
  const limitRaw = Number(req.nextUrl.searchParams.get('limit'))
  const limit = Number.isFinite(limitRaw) ? Math.min(Math.max(Math.trunc(limitRaw), 1), 1000) : 300

  try {
    const cards = await db.reviewCard.findMany({
      orderBy: { createdAt: 'desc' },
      take: limit,
    })
    return NextResponse.json({ cards })
  } catch (err) {
    console.error('[review/cards]', err)
    return NextResponse.json({ error: 'Cards unavailable' }, { status: 500 })
  }
}
