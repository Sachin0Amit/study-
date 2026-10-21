import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/**
 * X11 — Focus HQ session log. Every focus/break session is POSTed here with
 * its linkage (task / subject / chapter) so analytics can answer "what did I
 * study, for how much time".
 *
 * GET   ?deviceId=…&limit=…           → most recent sessions (default 25)
 * GET   ?deviceId=…&day=YYYY-MM-DD    → that day's sessions, oldest first
 *                                          (heatmap day-detail drill-down)
 * POST  { deviceId, kind, taskId?, taskTitle?, subject?, subjectId?,
 *         chapterId?, chapterTitle?, plannedMin, actualSec, completed,
 *         interruptions?, startedAt?, incrementTask? }
 *       → log the session; when incrementTask is set and the task belongs to
 *         the device, its done-pomodoro count + interruptions grow too.
 * PATCH { deviceId, id?, note } → attach/edit a journal note. With no id the
 *         note lands on the device's most recent session (the celebration
 *         flow: "how did it go?" right after a pomodoro banks).
 */

const KINDS = new Set(['focus', 'short_break', 'long_break'])
const DAY_RE = /^\d{4}-\d{2}-\d{2}$/

function localDayKey(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function intIn(n: unknown, min: number, max: number, fallback: number): number {
  const v = Number(n)
  if (!Number.isFinite(v)) return fallback
  return Math.min(max, Math.max(min, Math.round(v)))
}

export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  // limit up to 2000 so "Export CSV" can pull the full history in one request
  const limit = intIn(req.nextUrl.searchParams.get('limit'), 1, 2000, 25)
  // optional single-day drill-down (heatmap day click) — oldest first so the
  // day reads like a timeline
  const day = req.nextUrl.searchParams.get('day')
  // optional subject drill-down (subject-bar click in Focus HQ) — focus
  // sessions for one subject, newest first
  const subject = req.nextUrl.searchParams.get('subject')
  const where: { deviceId: string; day?: string; subject?: string; kind?: string } = { deviceId }
  if (day && DAY_RE.test(day)) where.day = day
  if (subject) {
    where.subject = subject
    where.kind = 'focus'
  }
  try {
    const sessions = await db.focusSession.findMany({
      where,
      orderBy: { startedAt: day && DAY_RE.test(day) ? 'asc' : 'desc' },
      take: limit,
    })
    return NextResponse.json({ sessions })
  } catch (err) {
    console.error('[focus/sessions GET]', err)
    return NextResponse.json({ error: 'Session log unavailable' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const deviceId = String(body?.deviceId ?? '')
  if (!deviceId) return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  const kind = String(body?.kind ?? 'focus')
  if (!KINDS.has(kind)) return NextResponse.json({ error: 'invalid kind' }, { status: 400 })

  const startedAt = body?.startedAt ? new Date(String(body.startedAt)) : new Date()
  const endedAt = body?.endedAt ? new Date(String(body.endedAt)) : new Date()
  const day = String(body?.day ?? '') || localDayKey(startedAt)
  if (!DAY_RE.test(day)) return NextResponse.json({ error: 'bad day key' }, { status: 400 })

  try {
    const session = await db.focusSession.create({
      data: {
        deviceId,
        kind,
        taskId: body?.taskId ? String(body.taskId).slice(0, 40) : null,
        taskTitle: body?.taskTitle ? String(body.taskTitle).slice(0, 160) : null,
        subject: body?.subject ? String(body.subject).slice(0, 80) : null,
        subjectId: body?.subjectId ? String(body.subjectId).slice(0, 80) : null,
        chapterId: body?.chapterId ? String(body.chapterId).slice(0, 120) : null,
        chapterTitle: body?.chapterTitle ? String(body.chapterTitle).slice(0, 160) : null,
        plannedMin: intIn(body?.plannedMin, 1, 240, 25),
        actualSec: intIn(body?.actualSec, 0, 24 * 3600, 0),
        completed: body?.completed === false ? false : true,
        interruptions: intIn(body?.interruptions, 0, 999, 0),
        day,
        startedAt,
        endedAt,
      },
    })

    // accrue the pomodoro against its task (ownership-checked)
    if (body?.incrementTask && session.taskId && kind === 'focus') {
      const task = await db.focusTask.findUnique({ where: { id: session.taskId } })
      if (task && task.deviceId === deviceId) {
        await db.focusTask.update({
          where: { id: task.id },
          data: {
            done: { increment: 1 },
            interruptions: { increment: session.interruptions },
          },
        })
      }
    }

    return NextResponse.json({ session }, { status: 201 })
  } catch (err) {
    console.error('[focus/sessions POST]', err)
    return NextResponse.json({ error: 'Could not log session' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const deviceId = String(body?.deviceId ?? '')
  if (!deviceId) return NextResponse.json({ error: 'deviceId required' }, { status: 400 })

  const noteRaw = body?.note === null || body?.note === undefined ? '' : String(body.note)
  const note = noteRaw.trim().slice(0, 600)

  try {
    let targetId = body?.id ? String(body.id).slice(0, 40) : null

    // no id → the celebration flow: attach to the device's most recent session
    if (!targetId) {
      const latest = await db.focusSession.findFirst({
        where: { deviceId },
        orderBy: { startedAt: 'desc' },
        select: { id: true },
      })
      if (!latest) return NextResponse.json({ error: 'No session to annotate' }, { status: 404 })
      targetId = latest.id
    }

    const existing = await db.focusSession.findUnique({ where: { id: targetId } })
    if (!existing || existing.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    const session = await db.focusSession.update({
      where: { id: targetId },
      data: { note: note || null },
    })
    return NextResponse.json({ session })
  } catch (err) {
    console.error('[focus/sessions PATCH]', err)
    return NextResponse.json({ error: 'Could not save the note' }, { status: 500 })
  }
}
