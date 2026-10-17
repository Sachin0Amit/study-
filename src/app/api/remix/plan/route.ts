import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { parseSteps, planProgress, type RemixStep } from '@/lib/remix'

export const runtime = 'nodejs'

// ============================================================================
// P4 — Plan persistence + live progress tracking.
// Steps (incl. per-step done/completedAt flags) live inside RemixPlan.sequence
// as JSON, so progress survives without any schema change.
// ============================================================================

interface PlanSummary {
  id: string
  goal: string
  horizonDays: number
  version: number
  createdAt: string
  updatedAt: string
  totalSteps: number
  doneSteps: number
  percent: number
  overdueDays: number[]
}

function summarize(plan: {
  id: string
  goal: string
  horizonDays: number
  version: number
  sequence: string
  createdAt: Date
  updatedAt: Date
}): PlanSummary {
  const steps = parseSteps(plan.sequence)
  const p = planProgress(steps, plan.createdAt, plan.horizonDays)
  return {
    id: plan.id,
    goal: plan.goal,
    horizonDays: plan.horizonDays,
    version: plan.version,
    createdAt: plan.createdAt.toISOString(),
    updatedAt: plan.updatedAt.toISOString(),
    totalSteps: p.totalSteps,
    doneSteps: p.doneSteps,
    percent: p.percent,
    overdueDays: p.overdueDays,
  }
}

/** sanitize an incoming steps array (progress writes + rebalance writes) */
function sanitizeSteps(raw: unknown, horizonDays: number): RemixStep[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > 500) return null
  const out: RemixStep[] = []
  for (const s of raw) {
    if (!s || typeof s !== 'object') return null
    const o = s as Record<string, unknown>
    if (typeof o.skillKey !== 'string' || !o.skillKey) return null
    const day = Math.min(Math.max(1, Math.floor(Number(o.day) || 1)), horizonDays * 2)
    out.push({
      skillKey: o.skillKey,
      number: Math.floor(Number(o.number) || 0),
      title: typeof o.title === 'string' ? o.title.slice(0, 300) : '',
      chapterId: typeof o.chapterId === 'string' ? o.chapterId : '',
      chapterTitle: typeof o.chapterTitle === 'string' ? o.chapterTitle : '',
      subjectId: typeof o.subjectId === 'string' ? o.subjectId : '',
      subjectName: typeof o.subjectName === 'string' ? o.subjectName : '',
      day,
      priority: Math.min(1, Math.max(0, Number(o.priority) || 0)),
      reason: typeof o.reason === 'string' ? o.reason.slice(0, 500) : '',
      pKnown: typeof o.pKnown === 'number' && Number.isFinite(o.pKnown) ? o.pKnown : null,
      bridge: o.bridge === true,
      done: o.done === true,
      completedAt:
        typeof o.completedAt === 'string' && Number.isFinite(Date.parse(o.completedAt))
          ? o.completedAt
          : null,
    })
  }
  return out
}

/** GET /api/remix/plan?deviceId= — saved plans with progress summaries */
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
    return NextResponse.json({ plans: plans.map(summarize) })
  } catch (err) {
    console.error('[api/remix/plan GET]', err)
    return NextResponse.json({ error: 'Could not load plans.' }, { status: 500 })
  }
}

/**
 * POST /api/remix/plan — save/update a plan, deduped by deviceId + goal.
 * Body: { deviceId, goal, steps, horizonDays? }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    const deviceId = typeof body?.deviceId === 'string' ? body.deviceId : ''
    const goal = typeof body?.goal === 'string' ? body.goal.trim().slice(0, 200) : ''
    if (!deviceId || !goal) {
      return NextResponse.json({ error: 'deviceId and goal are required' }, { status: 400 })
    }
    const existing = await db.remixPlan.findFirst({ where: { deviceId, goal } })
    const horizonDays = Math.min(
      60,
      Math.max(3, Math.floor(Number(body?.horizonDays ?? existing?.horizonDays ?? 14)) || 14)
    )
    const steps = sanitizeSteps(body?.steps, horizonDays)
    if (!steps) {
      return NextResponse.json({ error: 'steps must be a non-empty array of steps' }, { status: 400 })
    }

    const plan = existing
      ? await db.remixPlan.update({
          where: { id: existing.id },
          data: { sequence: JSON.stringify(steps), horizonDays, updatedAt: new Date() },
        })
      : await db.remixPlan.create({
          data: {
            deviceId,
            goal,
            horizonDays,
            sequence: JSON.stringify(steps),
            version: 1,
          },
        })
    return NextResponse.json({ plan: summarize(plan) })
  } catch (err) {
    console.error('[api/remix/plan POST]', err)
    return NextResponse.json({ error: 'Could not save the plan.' }, { status: 500 })
  }
}

/**
 * PATCH /api/remix/plan — two write shapes:
 *   { planId, stepIndex, done }        → toggle one step's completion
 *   { planId, steps }                  → replace all steps (rebalance save)
 * Optional deviceId verifies ownership.
 */
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    const planId = typeof body?.planId === 'string' ? body.planId : ''
    if (!planId) {
      return NextResponse.json({ error: 'planId required' }, { status: 400 })
    }
    const plan = await db.remixPlan.findUnique({ where: { id: planId } })
    if (!plan) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }
    if (typeof body?.deviceId === 'string' && body.deviceId && body.deviceId !== plan.deviceId) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }

    let steps: RemixStep[] | null = null

    // shape 1 — toggle a single step by index
    if (typeof body?.stepIndex === 'number' && Number.isInteger(body.stepIndex)) {
      const idx = body.stepIndex
      const current = parseSteps(plan.sequence)
      if (idx < 0 || idx >= current.length) {
        return NextResponse.json({ error: 'stepIndex out of range' }, { status: 400 })
      }
      const done = body.done === true
      steps = current.map((s, i) =>
        i === idx
          ? { ...s, done, completedAt: done ? new Date().toISOString() : null }
          : s
      )
    }
    // shape 2 — full steps replace (rebalance)
    else if (Array.isArray(body?.steps)) {
      steps = sanitizeSteps(body.steps, plan.horizonDays)
      if (!steps) {
        return NextResponse.json({ error: 'Invalid steps payload' }, { status: 400 })
      }
    } else {
      return NextResponse.json(
        { error: 'Provide { stepIndex, done } or { steps }' },
        { status: 400 }
      )
    }

    const updated = await db.remixPlan.update({
      where: { id: plan.id },
      data: { sequence: JSON.stringify(steps), updatedAt: new Date() },
    })
    const progress = planProgress(steps, updated.createdAt, updated.horizonDays)
    return NextResponse.json({ planId: updated.id, steps, progress })
  } catch (err) {
    console.error('[api/remix/plan PATCH]', err)
    return NextResponse.json({ error: 'Could not update the plan.' }, { status: 500 })
  }
}

/** DELETE /api/remix/plan?planId=(&deviceId=) — remove a saved plan */
export async function DELETE(req: NextRequest) {
  try {
    const planId = req.nextUrl.searchParams.get('planId')
    if (!planId) {
      return NextResponse.json({ error: 'planId required' }, { status: 400 })
    }
    const plan = await db.remixPlan.findUnique({ where: { id: planId } })
    if (!plan) {
      return NextResponse.json({ ok: true }) // idempotent delete
    }
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (deviceId && deviceId !== plan.deviceId) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }
    await db.remixPlan.delete({ where: { id: plan.id } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/remix/plan DELETE]', err)
    return NextResponse.json({ error: 'Could not delete the plan.' }, { status: 500 })
  }
}
