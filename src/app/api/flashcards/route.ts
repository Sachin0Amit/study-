import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// Leitner box intervals in days: box 1 → 1d, 2 → 2d, 3 → 4d, 4 → 8d, 5 → 16d
const BOX_INTERVAL_DAYS = [0, 1, 2, 4, 8, 16]

export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  const rows = await db.flashcardState.findMany({ where: { deviceId } })
  const cards: Record<string, { box: number; dueAt: string; seen: number; correct: number }> = {}
  for (const r of rows) {
    cards[r.cardKey] = {
      box: r.box,
      dueAt: r.dueAt.toISOString(),
      seen: r.seen,
      correct: r.correct,
    }
  }
  return NextResponse.json({ cards })
}

// Batch update: results = [{ key, remembered }]
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body?.deviceId || !Array.isArray(body?.results)) {
    return NextResponse.json({ error: 'deviceId and results[] required' }, { status: 400 })
  }
  const deviceId = String(body.deviceId)
  const results: { key: string; remembered: boolean }[] = body.results
    .filter(
      (r: unknown) => typeof r === 'object' && r !== null && 'key' in r && 'remembered' in r
    )
    .slice(0, 2000)

  let updated = 0
  for (const r of results) {
    const cardKey = String(r.key).slice(0, 400)
    const existing = await db.flashcardState.findUnique({
      where: { deviceId_cardKey: { deviceId, cardKey } },
    })
    // remembered → promote one box (max 5); forgot → demote to box 1
    const prevBox = existing?.box ?? 0
    const nextBox = r.remembered ? Math.min(prevBox + 1, 5) : 1
    const dueAt = new Date(Date.now() + BOX_INTERVAL_DAYS[nextBox] * 24 * 60 * 60 * 1000)

    await db.flashcardState.upsert({
      where: { deviceId_cardKey: { deviceId, cardKey } },
      update: {
        box: nextBox,
        dueAt,
        seen: { increment: 1 },
        correct: r.remembered ? { increment: 1 } : undefined,
      },
      create: {
        deviceId,
        cardKey,
        box: nextBox,
        dueAt,
        seen: 1,
        correct: r.remembered ? 1 : 0,
      },
    })
    updated++
  }
  return NextResponse.json({ ok: true, updated })
}

export async function DELETE(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body?.deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  await db.flashcardState.deleteMany({ where: { deviceId: String(body.deviceId) } })
  return NextResponse.json({ ok: true })
}
