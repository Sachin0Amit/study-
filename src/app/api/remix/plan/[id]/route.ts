import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { buildRemix, parseSteps } from '@/lib/remix'
import { recordTwinEvent } from '@/lib/twin'
import { getSkillMeta } from '@/lib/twin'

export const runtime = 'nodejs'

type Params = { params: Promise<{ id: string }> }

/** GET /api/remix/plan/[id]?deviceId=... — full plan with steps + bridges */
export async function GET(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const plan = await db.remixPlan.findUnique({ where: { id } })
    if (!plan || plan.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }
    const steps = parseSteps(plan.sequence)
    const bridgeKeys = steps.filter((s) => s.bridge).map((s) => s.skillKey)
    const bridges = await db.bridgeLesson.findMany({
      where: { deviceId, skillKey: { in: bridgeKeys } },
    })
    return NextResponse.json({
      id: plan.id,
      goal: plan.goal,
      horizonDays: plan.horizonDays,
      version: plan.version,
      active: plan.active,
      createdAt: plan.createdAt.toISOString(),
      updatedAt: plan.updatedAt.toISOString(),
      steps,
      bridges: Object.fromEntries(
        bridges.map((b) => [
          b.skillKey,
          {
            title: b.title,
            gapKeys: safeJson(b.gapKeys),
            content: safeJson(b.content),
          },
        ])
      ),
    })
  } catch (err) {
    console.error('[api/remix/plan GET]', err)
    return NextResponse.json({ error: 'Could not load the plan.' }, { status: 500 })
  }
}

/**
 * PATCH /api/remix/plan/[id]?deviceId=...
 * Body: { action: 'regenerate' | 'complete', skillKey? }
 *   regenerate — re-run the engine with fresh twin data (version++)
 *   complete   — mark a step studied (records twin evidence)
 */
export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const plan = await db.remixPlan.findUnique({ where: { id } })
    if (!plan || plan.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }
    const body = await req.json().catch(() => null)
    const action = body?.action

    if (action === 'regenerate') {
      const result = await buildRemix({
        deviceId: plan.deviceId,
        goal: plan.goal,
        horizonDays: plan.horizonDays,
      })
      const updated = await db.remixPlan.update({
        where: { id: plan.id },
        data: {
          sequence: JSON.stringify(result.steps),
          version: { increment: 1 },
          updatedAt: new Date(),
        },
      })
      return NextResponse.json({ planId: updated.id, version: updated.version, ...result })
    }

    if (action === 'complete' && typeof body.skillKey === 'string') {
      const skillKey = String(body.skillKey)
      if (!getSkillMeta(skillKey)) {
        return NextResponse.json({ error: 'Unknown skill' }, { status: 400 })
      }
      await recordTwinEvent({
        deviceId: plan.deviceId,
        skillKey,
        kind: 'read',
        correct: null,
        weight: 3,
        meta: { planId: plan.id, action: 'step-complete' },
      })
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  } catch (err) {
    console.error('[api/remix/plan PATCH]', err)
    return NextResponse.json({ error: 'Could not update the plan.' }, { status: 500 })
  }
}

/** DELETE /api/remix/plan/[id]?deviceId=... */
export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const plan = await db.remixPlan.findUnique({ where: { id } })
    if (!plan || plan.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }
    await db.remixPlan.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/remix/plan DELETE]', err)
    return NextResponse.json({ error: 'Could not delete the plan.' }, { status: 500 })
  }
}

function safeJson(raw: string): unknown {
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}
