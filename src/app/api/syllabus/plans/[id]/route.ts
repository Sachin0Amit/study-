import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { SSE_HEADERS, getCatalog, sseStream } from '@/lib/syllabus'
import {
  ENGINE_VERSION,
  parseMapping,
  parsePins,
  parseTopics,
  runMappingEngine,
} from '@/lib/syllabus-engine'

export const runtime = 'nodejs'

type Params = { params: Promise<{ id: string }> }

function parseResearch(raw: string | null) {
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return null
    return parsed
      .filter(
        (s): s is { title: string; url: string; host: string; date?: string } =>
          !!s && typeof s === 'object' && typeof (s as { url?: unknown }).url === 'string'
      )
      .slice(0, 12)
  } catch {
    return null
  }
}

/** GET /api/syllabus/plans/[id]?deviceId=... — full plan with parsed mapping */
export async function GET(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const plan = await db.syllabusPlan.findUnique({ where: { id } })
    if (!plan || plan.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }
    return NextResponse.json({
      id: plan.id,
      title: plan.title,
      sourceType: plan.sourceType,
      sourceName: plan.sourceName,
      matched: plan.matched,
      total: plan.total,
      engineVersion: plan.engineVersion,
      research: parseResearch(plan.research),
      pins: parsePins(plan.pins),
      refreshedAt: plan.refreshedAt ? plan.refreshedAt.toISOString() : null,
      refreshCount: plan.refreshCount,
      createdAt: plan.createdAt.toISOString(),
      mapping: parseMapping(plan.mapping),
    })
  } catch (err) {
    console.error('[api/syllabus/plans/[id] GET]', err)
    return NextResponse.json({ error: 'Could not load the plan.' }, { status: 500 })
  }
}

/**
 * PATCH /api/syllabus/plans/[id]?deviceId=... — keep a plan updated.
 * Body: { pin?: { topic: string, chapterId: string | null } }
 *   - with pin: upsert/remove a user-confirmed mapping, then re-map the rest
 *   - without: full re-map with the current engine
 * Progress streams over SSE (event:stage / event:done / event:error).
 */
export async function PATCH(req: NextRequest, { params }: Params) {
  let deviceId = ''
  let pin: { topic?: unknown; chapterId?: unknown } | null = null
  try {
    const { id } = await params
    deviceId = req.nextUrl.searchParams.get('deviceId') ?? ''
    const body = await req.json().catch(() => null)
    if (body && typeof body.pin === 'object' && body.pin) pin = body.pin as typeof pin
    else if (typeof body?.chapterId === 'string' && typeof body?.topic === 'string') {
      pin = { topic: body.topic, chapterId: body.chapterId }
    }
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const plan = await db.syllabusPlan.findUnique({ where: { id } })
    if (!plan || plan.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }
    return await remapPlan(plan.id, pin)
  } catch (err) {
    console.error('[api/syllabus/plans/[id] PATCH]', err)
    return NextResponse.json({ error: 'Could not update the plan.' }, { status: 500 })
  }
}

async function remapPlan(
  planId: string,
  pin: { topic?: unknown; chapterId?: unknown } | null
): Promise<Response> {
  const plan = await db.syllabusPlan.findUnique({ where: { id: planId } })
  if (!plan) {
    return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
  }

  const topics = parseTopics(plan.topics)
  const pins = parsePins(plan.pins)

  // apply the incoming pin (chapterId null removes it)
  if (pin && typeof pin.topic === 'string') {
    const topic = topics.find((t) => t === pin.topic) ?? topics.find((t) => t.toLowerCase() === pin.topic!.toLowerCase())
    if (!topic) {
      return NextResponse.json({ error: 'Topic not in this plan.' }, { status: 400 })
    }
    if (typeof pin.chapterId === 'string' && getCatalog().chapterById.has(pin.chapterId)) {
      pins[topic] = pin.chapterId
    } else if (pin.chapterId === null) {
      delete pins[topic]
    } else {
      return NextResponse.json({ error: 'Invalid chapter for this pin.' }, { status: 400 })
    }
  }

  const sse = sseStream()
  void (async () => {
    let settled = false
    const finish = (payload: Record<string, unknown>) => {
      if (settled) return
      settled = true
      sse.send('done', payload)
      sse.close()
    }
    const fail = (message: string) => {
      if (settled) return
      settled = true
      sse.send('error', { error: message })
      sse.close()
    }

    try {
      const result = await runMappingEngine({
        topics,
        pins,
        onProgress: (p) => sse.send('stage', p),
      })
      sse.send('stage', { stage: 'save' })

      const updated = await db.syllabusPlan.update({
        where: { id: plan.id },
        data: {
          mapping: JSON.stringify(result.mapping),
          matched: result.matched,
          total: topics.length,
          topics: JSON.stringify(topics.map((t) => ({ topic: t }))),
          engineVersion: ENGINE_VERSION,
          pins: Object.keys(pins).length ? JSON.stringify(pins) : null,
          refreshedAt: new Date(),
          refreshCount: { increment: 1 },
        },
      })

      finish({
        id: updated.id,
        title: updated.title,
        sourceType: updated.sourceType,
        sourceName: updated.sourceName,
        matched: updated.matched,
        total: updated.total,
        engineVersion: updated.engineVersion,
        research: parseResearch(updated.research),
        pins: parsePins(updated.pins),
        refreshedAt: updated.refreshedAt ? updated.refreshedAt.toISOString() : null,
        refreshCount: updated.refreshCount,
        createdAt: updated.createdAt.toISOString(),
        mapping: result.mapping,
        llmUsed: result.llmUsed,
      })
    } catch (err) {
      console.error('[api/syllabus/plans/[id] PATCH remap]', err)
      fail('Could not refresh this plan — please try again.')
    }
  })()

  return new Response(sse.stream, { headers: SSE_HEADERS })
}

/** DELETE /api/syllabus/plans/[id]?deviceId=... — deletes an owned plan */
export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const plan = await db.syllabusPlan.findUnique({ where: { id } })
    if (!plan || plan.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }
    await db.syllabusPlan.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/syllabus/plans/[id] DELETE]', err)
    return NextResponse.json({ error: 'Could not delete the plan.' }, { status: 500 })
  }
}
