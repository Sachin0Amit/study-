import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body?.deviceId || !body?.sectionKey) {
    return NextResponse.json({ error: 'deviceId and sectionKey required' }, { status: 400 })
  }
  const attempt = await db.quizAttempt.create({
    data: {
      deviceId: String(body.deviceId),
      sectionKey: String(body.sectionKey),
      score: Number(body.score) || 0,
      total: Number(body.total) || 0,
      answers: JSON.stringify(body.answers || []),
    },
  })
  return NextResponse.json({ ok: true, id: attempt.id })
}
