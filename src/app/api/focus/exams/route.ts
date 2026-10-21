import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/**
 * X11G — Exam D-day countdown (the YeolPumeto planner pillar).
 *
 * GET    ?deviceId=…                     → all exams, soonest first
 * POST   { deviceId, title, examDate, note? } → create (max 12 upcoming)
 * DELETE ?id=…&deviceId=…                → remove an exam
 *
 * examDate is a local "YYYY-MM-DD" string — countdown math happens
 * client-side in the user's timezone, so we never store UTC timestamps
 * for D-day (same convention as FocusSession.day).
 */

const MAX_TITLE = 60
const MAX_NOTE = 120
const MAX_UPCOMING = 12
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

function validDate(s: string): boolean {
  if (!DATE_RE.test(s)) return false
  // JS Date rolls over impossible dates (2026-02-31 → Mar 3) instead of
  // returning NaN — verify the components round-trip exactly.
  const [y, m, d] = s.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d
}

export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  try {
    const exams = await db.focusExam.findMany({
      where: { deviceId },
      orderBy: [{ examDate: 'asc' }, { createdAt: 'asc' }],
    })
    return NextResponse.json({ exams })
  } catch (err) {
    console.error('[focus/exams GET]', err)
    return NextResponse.json({ error: 'Exam list unavailable' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const deviceId = String(body?.deviceId ?? '')
  const title = String(body?.title ?? '').trim()
  const examDate = String(body?.examDate ?? '').trim()
  if (!deviceId) return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  if (!title) return NextResponse.json({ error: 'title required' }, { status: 400 })
  if (!validDate(examDate)) {
    return NextResponse.json({ error: 'examDate must be YYYY-MM-DD' }, { status: 400 })
  }
  // sanity window: no D-day more than a year in the past or 10 years ahead
  const d = new Date(`${examDate}T00:00:00`)
  const now = new Date()
  const tooOld = d.getTime() < now.getTime() - 365 * 24 * 3600 * 1000
  const tooFar = d.getTime() > now.getTime() + 10 * 365 * 24 * 3600 * 1000
  if (tooOld || tooFar) {
    return NextResponse.json({ error: 'examDate out of range' }, { status: 400 })
  }

  try {
    // count UPCOMING exams only — past exams never block new plans
    const upcoming = await db.focusExam.count({
      where: { deviceId, examDate: { gte: localKey(now) } },
    })
    if (upcoming >= MAX_UPCOMING) {
      return NextResponse.json(
        { error: `At most ${MAX_UPCOMING} upcoming exams — remove one first` },
        { status: 409 }
      )
    }
    const exam = await db.focusExam.create({
      data: {
        deviceId,
        title: title.slice(0, MAX_TITLE),
        examDate,
        note: body?.note ? String(body.note).trim().slice(0, MAX_NOTE) || null : null,
      },
    })
    return NextResponse.json({ exam }, { status: 201 })
  } catch (err) {
    console.error('[focus/exams POST]', err)
    return NextResponse.json({ error: 'Could not create exam' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!id || !deviceId) {
    return NextResponse.json({ error: 'id and deviceId required' }, { status: 400 })
  }
  try {
    await db.focusExam.deleteMany({ where: { id, deviceId } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[focus/exams DELETE]', err)
    return NextResponse.json({ error: 'Could not delete exam' }, { status: 500 })
  }
}

/** local YYYY-MM-DD key (matches localDateKey in src/lib/focus.ts) */
function localKey(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}
