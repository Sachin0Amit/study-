import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// "lesson" | "quiz" | "cards" | "note"
const KINDS = new Set(['lesson', 'quiz', 'cards', 'note'])
type Kind = 'lesson' | 'quiz' | 'cards' | 'note'

const RANGE_DAYS = 182 // 26 weeks
const DAY_RE = /^\d{4}-\d{2}-\d{2}$/

/** Server-side "today" as YYYY-MM-DD (UTC) */
function utcToday(): string {
  return new Date().toISOString().slice(0, 10)
}

export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  const today = utcToday()
  const start = new Date()
  start.setUTCDate(start.getUTCDate() - (RANGE_DAYS - 1))
  const startStr = start.toISOString().slice(0, 10)

  const rows = await db.studyActivity.findMany({
    where: { deviceId, day: { gte: startStr, lte: today } },
  })

  const days: Record<string, { total: number; lesson: number; quiz: number; cards: number; note: number }> = {}
  for (const r of rows) {
    const entry = (days[r.day] ??= { total: 0, lesson: 0, quiz: 0, cards: 0, note: 0 })
    if (!KINDS.has(r.kind)) continue
    entry[r.kind as Kind] += r.count
    entry.total += r.count
  }
  return NextResponse.json({ days })
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body?.deviceId || !body?.kind) {
    return NextResponse.json({ error: 'deviceId and kind required' }, { status: 400 })
  }
  const kind = String(body.kind)
  if (!KINDS.has(kind)) {
    return NextResponse.json({ error: 'kind must be one of lesson, quiz, cards, note' }, { status: 400 })
  }
  const deviceId = String(body.deviceId)

  // day is optional client-supplied "YYYY-MM-DD" (local day); default = server today UTC
  let day = typeof body.day === 'string' ? body.day : ''
  if (!DAY_RE.test(day)) day = utcToday()

  // increment amount, default 1, capped at 50 per call
  const raw = Number(body.count ?? 1)
  const count = Math.max(1, Math.min(50, Math.floor(Number.isFinite(raw) ? raw : 1)))

  await db.studyActivity.upsert({
    where: { deviceId_day_kind: { deviceId, day, kind } },
    update: { count: { increment: count } },
    create: { deviceId, day, kind, count },
  })
  return NextResponse.json({ ok: true })
}
