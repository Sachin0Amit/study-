import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { parseStyleCounts } from '@/lib/studio'

export const runtime = 'nodejs'

const VALID = new Set(['intuition', 'rigor', 'examples'])

/**
 * POST /api/studio/vote — Debate Mode vote. The learner picks the explanation
 * style that landed; the tally trains the Professor's future answers in this
 * thread (cognitive-style learning).
 * Body: { threadId, deviceId, vote: 'intuition' | 'rigor' }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body?.threadId || !body?.deviceId || !VALID.has(body.vote)) {
      return NextResponse.json(
        { error: 'threadId, deviceId and vote (intuition|rigor|examples) required' },
        { status: 400 }
      )
    }
    const thread = await db.studioThread.findUnique({ where: { id: String(body.threadId) } })
    if (!thread || thread.deviceId !== String(body.deviceId)) {
      return NextResponse.json({ error: 'Thread not found' }, { status: 404 })
    }

    const vote = String(body.vote)
    const counts = parseStyleCounts(thread.styleCounts)
    counts[vote] = (counts[vote] ?? 0) + 1

    // leading style wins; tie → the latest vote
    const leader = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? vote

    await db.studioThread.update({
      where: { id: thread.id },
      data: { styleCounts: JSON.stringify(counts), style: leader, updatedAt: new Date() },
    })

    return NextResponse.json({ ok: true, counts, style: leader })
  } catch (err) {
    console.error('[api/studio/vote]', err)
    return NextResponse.json({ error: 'Could not record that vote.' }, { status: 500 })
  }
}
