import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { buildRemix, parseSteps } from '@/lib/remix'

export const runtime = 'nodejs'

/** GET /api/remix?deviceId=... — the learner's remix plans */
export async function GET(req: NextRequest) {
  try {
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const plans = await db.remixPlan.findMany({
      where: { deviceId },
      orderBy: { updatedAt: 'desc' },
      take: 20,
    })
    return NextResponse.json({
      plans: plans.map((p) => ({
        id: p.id,
        goal: p.goal,
        horizonDays: p.horizonDays,
        version: p.version,
        active: p.active,
        stats: safeStats(p.sequence),
        updatedAt: p.updatedAt.toISOString(),
      })),
    })
  } catch (err) {
    console.error('[api/remix GET]', err)
    return NextResponse.json({ error: 'Could not load plans.' }, { status: 500 })
  }
}

/**
 * POST /api/remix — build a personalized sequence.
 * Body: { deviceId, goal, horizonDays?, subjectId? }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body?.deviceId || !body?.goal?.trim()) {
      return NextResponse.json({ error: 'deviceId and goal are required' }, { status: 400 })
    }
    const goal = String(body.goal).trim().slice(0, 200)
    const horizonDays = Math.min(60, Math.max(3, Math.floor(Number(body.horizonDays ?? 14)) || 14))
    const subjectId = typeof body.subjectId === 'string' && body.subjectId ? body.subjectId : null

    const result = await buildRemix({
      deviceId: String(body.deviceId),
      goal,
      horizonDays,
      subjectId,
    })

    const plan = await db.remixPlan.create({
      data: {
        deviceId: String(body.deviceId),
        goal,
        horizonDays,
        sequence: JSON.stringify(result.steps),
        version: 1,
      },
    })
    return NextResponse.json({ planId: plan.id, ...result })
  } catch (err) {
    console.error('[api/remix POST]', err)
    return NextResponse.json({ error: 'Could not build the plan.' }, { status: 500 })
  }
}

function safeStats(sequenceRaw: string): { skills: number; bridges: number } {
  const steps = parseSteps(sequenceRaw)
  return { skills: steps.length, bridges: steps.filter((s) => s.bridge).length }
}
