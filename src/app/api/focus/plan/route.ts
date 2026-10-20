import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import {
  generateStudyPlan,
  planDateKey,
  planKeyToDate,
  type PlanSubjectInput,
} from '@/lib/plan-generator'

/**
 * X11H — Smart Study Planner (study plan till D-day).
 *
 * GET    ?deviceId=…                        → active blocks (day >= today − 30d, day asc)
 * POST   { deviceId, examId?, days?, subjects[], dailyMinutes, restWeekly }
 *        → generate + REPLACE the active plan (one plan per device).
 *          examId  → horizon = today … day-before-exam (light last day)
 *          days?   → custom horizon (7..365) when no exam is linked
 * PATCH  { id, deviceId, done }             → tick off / re-open a block
 * DELETE ?id=…&deviceId=…                   → remove one block
 * DELETE ?deviceId=…&all=1                  → clear the active plan
 *
 * Days are local "YYYY-MM-DD" strings (same convention as FocusSession.day
 * and FocusExam.examDate) — countdown math stays in the user's timezone.
 */

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const MAX_SUBJECTS = 8
const MAX_BLOCKS = 400

function validDate(s: string): boolean {
  if (!DATE_RE.test(s)) return false
  const [y, m, d] = s.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d
}

function localKey(d: Date): string {
  return planDateKey(d)
}

export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  try {
    const cutoff = new Date()
    cutoff.setDate(cutoff.getDate() - 30)
    const blocks = await db.studyPlanBlock.findMany({
      where: { deviceId, day: { gte: localKey(cutoff) } },
      orderBy: [{ day: 'asc' }, { position: 'asc' }],
    })
    return NextResponse.json({ blocks })
  } catch (err) {
    console.error('[focus/plan GET]', err)
    return NextResponse.json({ error: 'Plan unavailable' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const deviceId = String(body?.deviceId ?? '')
  if (!deviceId) return NextResponse.json({ error: 'deviceId required' }, { status: 400 })

  const examId = body?.examId ? String(body.examId) : null
  const horizonDays = Math.max(7, Math.min(365, Math.round(Number(body?.days ?? 30)) || 30))
  const dailyMinutes = Math.max(20, Math.min(600, Math.round(Number(body?.dailyMinutes ?? 120)) || 120))
  const restWeekly = Boolean(body?.restWeekly)

  // subjects: [{ subject, subjectId?, weight }]
  const rawSubjects = Array.isArray(body?.subjects) ? body.subjects : []
  const subjects: PlanSubjectInput[] = rawSubjects
    .slice(0, MAX_SUBJECTS)
    .map((s: { subject?: unknown; subjectId?: unknown; weight?: unknown }) => ({
      subject: String(s?.subject ?? '').trim().slice(0, 60),
      subjectId: s?.subjectId ? String(s.subjectId).slice(0, 80) : null,
      weight: Math.max(1, Math.min(5, Math.round(Number(s?.weight ?? 1)) || 1)),
    }))
    .filter((s: PlanSubjectInput) => s.subject.length > 0)
  if (subjects.length === 0) {
    return NextResponse.json({ error: 'Pick at least one subject' }, { status: 400 })
  }

  // resolve the horizon + light-last-day flag
  let endKey: string
  let examTitle: string | null = null
  let lightLastDay = false
  const today = new Date()
  const todayKey = localKey(today)

  if (examId) {
    const exam = await db.focusExam.findFirst({ where: { id: examId, deviceId } })
    if (!exam) return NextResponse.json({ error: 'Exam not found' }, { status: 404 })
    if (!validDate(exam.examDate)) {
      return NextResponse.json({ error: 'Exam date is invalid' }, { status: 400 })
    }
    examTitle = exam.title
    // study up to the day BEFORE the exam; the exam day itself stays free
    const eve = planKeyToDate(exam.examDate)
    eve.setDate(eve.getDate() - 1)
    endKey = localKey(eve)
    lightLastDay = true
    if (endKey < todayKey) {
      return NextResponse.json({ error: 'That exam is already past — add a future D-day' }, { status: 400 })
    }
  } else {
    const end = new Date(today)
    end.setDate(end.getDate() + horizonDays - 1)
    endKey = localKey(end)
  }

  // build the day list
  const days: string[] = []
  for (
    const cur = new Date(planKeyToDate(todayKey));
    localKey(cur) <= endKey && days.length < 400;
    cur.setDate(cur.getDate() + 1)
  ) {
    days.push(localKey(cur))
  }
  if (days.length === 0) {
    return NextResponse.json({ error: 'No days to plan' }, { status: 400 })
  }

  const preview = generateStudyPlan({ days, subjects, dailyMinutes, restWeekly, lightLastDay })
  if (preview.blocks.length === 0) {
    return NextResponse.json({ error: 'Could not build a plan from those inputs' }, { status: 400 })
  }
  if (preview.blocks.length > MAX_BLOCKS) {
    return NextResponse.json(
      { error: `Plan too long (${preview.blocks.length} blocks) — shorten the horizon` },
      { status: 400 }
    )
  }

  try {
    const created = await db.$transaction(async (tx) => {
      // one active plan per device — replace everything from today onward
      await tx.studyPlanBlock.deleteMany({ where: { deviceId, day: { gte: todayKey } } })
      return tx.studyPlanBlock.createMany({
        data: preview.blocks.map((b) => ({
          deviceId,
          examId,
          examTitle,
          day: b.day,
          subject: b.subject,
          subjectId: b.subjectId,
          minutes: b.minutes,
          note: b.note,
          position: b.position,
        })),
      })
    })
    const blocks = await db.studyPlanBlock.findMany({
      where: { deviceId, day: { gte: todayKey } },
      orderBy: [{ day: 'asc' }, { position: 'asc' }],
    })
    return NextResponse.json(
      {
        blocks,
        created: created.count,
        summary: {
          totalMinutes: preview.totalMinutes,
          dayCount: preview.dayCount,
          restDays: preview.restDays,
          perSubject: preview.perSubject,
        },
      },
      { status: 201 }
    )
  } catch (err) {
    console.error('[focus/plan POST]', err)
    return NextResponse.json({ error: 'Could not generate the plan' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const id = String(body?.id ?? '')
  const deviceId = String(body?.deviceId ?? '')
  if (!id || !deviceId) {
    return NextResponse.json({ error: 'id and deviceId required' }, { status: 400 })
  }
  if (typeof body?.done !== 'boolean') {
    return NextResponse.json({ error: 'done (boolean) required' }, { status: 400 })
  }
  try {
    const updated = await db.studyPlanBlock.updateMany({
      where: { id, deviceId },
      data: { done: body.done },
    })
    if (updated.count === 0) return NextResponse.json({ error: 'Block not found' }, { status: 404 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[focus/plan PATCH]', err)
    return NextResponse.json({ error: 'Could not update the block' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  const all = req.nextUrl.searchParams.get('all')
  if (!deviceId) return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  try {
    if (all === '1') {
      const todayKey = localKey(new Date())
      const cleared = await db.studyPlanBlock.deleteMany({ where: { deviceId, day: { gte: todayKey } } })
      return NextResponse.json({ ok: true, cleared: cleared.count })
    }
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })
    await db.studyPlanBlock.deleteMany({ where: { id, deviceId } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[focus/plan DELETE]', err)
    return NextResponse.json({ error: 'Could not delete' }, { status: 500 })
  }
}
