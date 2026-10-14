import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  const rows = await db.sectionProgress.findMany({ where: { deviceId } })
  const quizRows = await db.quizAttempt.findMany({
    where: { deviceId },
    orderBy: { createdAt: 'desc' },
  })

  const progress: Record<
    string,
    { status: 'in_progress' | 'completed'; quizScore?: { score: number; total: number }; lastViewed: string }
  > = {}
  for (const r of rows) {
    progress[r.sectionKey] = {
      status: r.status as 'in_progress' | 'completed',
      lastViewed: r.lastViewedAt.toISOString(),
    }
  }
  for (const q of quizRows) {
    const p = progress[q.sectionKey]
    if (!p || !p.quizScore || q.score > p.quizScore.score) {
      if (progress[q.sectionKey]) {
        progress[q.sectionKey].quizScore = { score: q.score, total: q.total }
      }
    }
  }
  return NextResponse.json({ progress })
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body?.deviceId || !body?.sectionKey) {
    return NextResponse.json({ error: 'deviceId and sectionKey required' }, { status: 400 })
  }
  await db.sectionProgress.upsert({
    where: {
      deviceId_sectionKey: {
        deviceId: String(body.deviceId),
        sectionKey: String(body.sectionKey),
      },
    },
    update: { status: String(body.status || 'in_progress'), lastViewedAt: new Date() },
    create: {
      deviceId: String(body.deviceId),
      sectionKey: String(body.sectionKey),
      status: String(body.status || 'in_progress'),
    },
  })
  return NextResponse.json({ ok: true })
}
