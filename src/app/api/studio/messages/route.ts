import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const runtime = 'nodejs'

/** GET /api/studio/messages?threadId=...&deviceId=... — full transcript of a thread */
export async function GET(req: NextRequest) {
  try {
    const threadId = req.nextUrl.searchParams.get('threadId')
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!threadId || !deviceId) {
      return NextResponse.json({ error: 'threadId and deviceId required' }, { status: 400 })
    }
    const thread = await db.studioThread.findUnique({ where: { id: threadId } })
    if (!thread || thread.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Thread not found' }, { status: 404 })
    }
    const messages = await db.studioMessage.findMany({
      where: { threadId },
      orderBy: { createdAt: 'asc' },
      take: 200,
    })
    return NextResponse.json({
      thread: {
        id: thread.id,
        title: thread.title,
        persona: thread.persona,
        mode: thread.mode,
        style: thread.style,
        targetSkill: thread.targetSkill,
      },
      messages: messages.map((m) => ({
        id: m.id,
        role: m.role,
        persona: m.persona,
        content: m.content,
        citations: m.citations ? safeParse(m.citations) : null,
        createdAt: m.createdAt.toISOString(),
      })),
    })
  } catch (err) {
    console.error('[api/studio/messages GET]', err)
    return NextResponse.json({ error: 'Could not load messages.' }, { status: 500 })
  }
}

function safeParse(raw: string): unknown {
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}
