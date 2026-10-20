import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/**
 * X11 — Focus HQ task list ("to-do today", Cirillo-style: every task carries a
 * pomodoro estimate; completed pomodoros accrue as focus sessions reference it).
 *
 * GET    ?deviceId=…            → open tasks (position order) + last 30 completed
 * POST   { deviceId, title, subject?, subjectId?, bookId?, estimate? } → create
 * PATCH  { id, deviceId, …fields } → update title/subject/estimate/position/completed
 * DELETE ?id=…&deviceId=…        → remove a task
 */

const MAX_TITLE = 160

function clampEstimate(n: unknown, fallback = 1): number {
  const v = Number(n)
  if (!Number.isFinite(v)) return fallback
  return Math.min(16, Math.max(1, Math.round(v)))
}

export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  try {
    const [open, done] = await Promise.all([
      db.focusTask.findMany({
        where: { deviceId, completed: false },
        orderBy: [{ position: 'asc' }, { createdAt: 'asc' }],
      }),
      db.focusTask.findMany({
        where: { deviceId, completed: true },
        orderBy: [{ completedAt: 'desc' }],
        take: 30,
      }),
    ])
    return NextResponse.json({ open, done })
  } catch (err) {
    console.error('[focus/tasks GET]', err)
    return NextResponse.json({ error: 'Task list unavailable' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const deviceId = String(body?.deviceId ?? '')
  const title = String(body?.title ?? '').trim()
  if (!deviceId) return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  if (!title) return NextResponse.json({ error: 'title required' }, { status: 400 })

  try {
    // new tasks go to the top of the open list
    const first = await db.focusTask.findFirst({
      where: { deviceId, completed: false },
      orderBy: { position: 'asc' },
      select: { position: true },
    })
    const task = await db.focusTask.create({
      data: {
        deviceId,
        title: title.slice(0, MAX_TITLE),
        subject: body?.subject ? String(body.subject).slice(0, 80) : null,
        subjectId: body?.subjectId ? String(body.subjectId).slice(0, 80) : null,
        bookId: body?.bookId ? String(body.bookId).slice(0, 80) : null,
        estimate: clampEstimate(body?.estimate, 2),
        position: (first?.position ?? 0) - 1,
      },
    })
    return NextResponse.json({ task }, { status: 201 })
  } catch (err) {
    console.error('[focus/tasks POST]', err)
    return NextResponse.json({ error: 'Could not create task' }, { status: 500 })
  }
}

const PATCHABLE = new Set(['title', 'subject', 'subjectId', 'bookId', 'estimate', 'position', 'completed'])

export async function PATCH(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const id = String(body?.id ?? '')
  const deviceId = String(body?.deviceId ?? '')
  if (!id || !deviceId) return NextResponse.json({ error: 'id and deviceId required' }, { status: 400 })

  const data: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(body ?? {})) {
    if (!PATCHABLE.has(k)) continue
    if (k === 'title') {
      const t = String(v ?? '').trim()
      if (!t) continue
      data.title = t.slice(0, MAX_TITLE)
    } else if (k === 'estimate') {
      data.estimate = clampEstimate(v, 2)
    } else if (k === 'position') {
      const p = Number(v)
      if (Number.isFinite(p)) data.position = Math.round(p)
    } else if (k === 'completed') {
      data.completed = Boolean(v)
      data.completedAt = v ? new Date() : null
    } else if (v === null || v === undefined) {
      data[k] = null
    } else {
      data[k] = String(v).slice(0, 80)
    }
  }
  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: 'no updatable fields' }, { status: 400 })
  }

  try {
    const existing = await db.focusTask.findUnique({ where: { id } })
    if (!existing || existing.deviceId !== deviceId) {
      return NextResponse.json({ error: 'not found' }, { status: 404 })
    }
    const task = await db.focusTask.update({ where: { id }, data })
    return NextResponse.json({ task })
  } catch (err) {
    console.error('[focus/tasks PATCH]', err)
    return NextResponse.json({ error: 'Could not update task' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!id || !deviceId) return NextResponse.json({ error: 'id and deviceId required' }, { status: 400 })
  try {
    const existing = await db.focusTask.findUnique({ where: { id } })
    if (!existing || existing.deviceId !== deviceId) {
      return NextResponse.json({ error: 'not found' }, { status: 404 })
    }
    await db.focusTask.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[focus/tasks DELETE]', err)
    return NextResponse.json({ error: 'Could not delete task' }, { status: 500 })
  }
}
