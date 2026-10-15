import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const runtime = 'nodejs'

/** GET /api/studio/threads?deviceId=... — the learner's consultation history */
export async function GET(req: NextRequest) {
  try {
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const threads = await db.studioThread.findMany({
      where: { deviceId },
      orderBy: { updatedAt: 'desc' },
      take: 30,
    })
    return NextResponse.json({
      threads: threads.map((t) => ({
        id: t.id,
        title: t.title,
        persona: t.persona,
        mode: t.mode,
        style: t.style,
        targetSkill: t.targetSkill,
        updatedAt: t.updatedAt.toISOString(),
      })),
    })
  } catch (err) {
    console.error('[api/studio/threads GET]', err)
    return NextResponse.json({ error: 'Could not load threads.' }, { status: 500 })
  }
}

/**
 * POST /api/studio/threads — create a new consultation.
 * Body: { deviceId, persona?, mode?, targetSkill?, title? }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body?.deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const thread = await db.studioThread.create({
      data: {
        deviceId: String(body.deviceId),
        persona: ['professor', 'examiner', 'drill', 'planner', 'researcher'].includes(body.persona)
          ? String(body.persona)
          : 'professor',
        mode: ['chat', 'debate', 'roundtable'].includes(body.mode) ? String(body.mode) : 'chat',
        targetSkill: typeof body.targetSkill === 'string' ? body.targetSkill.slice(0, 120) : null,
        title:
          typeof body.title === 'string' && body.title.trim()
            ? body.title.trim().slice(0, 80)
            : 'New consultation',
      },
    })
    return NextResponse.json({ id: thread.id })
  } catch (err) {
    console.error('[api/studio/threads POST]', err)
    return NextResponse.json({ error: 'Could not create thread.' }, { status: 500 })
  }
}

/** DELETE /api/studio/threads?id=...&deviceId=... — remove a thread + messages */
export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get('id')
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!id || !deviceId) {
      return NextResponse.json({ error: 'id and deviceId required' }, { status: 400 })
    }
    const thread = await db.studioThread.findUnique({ where: { id } })
    if (!thread || thread.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Thread not found' }, { status: 404 })
    }
    await db.studioMessage.deleteMany({ where: { threadId: id } })
    await db.studioThread.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/studio/threads DELETE]', err)
    return NextResponse.json({ error: 'Could not delete thread.' }, { status: 500 })
  }
}
