import { NextRequest, NextResponse } from 'next/server'
import { buildTwin, recordTwinEvent } from '@/lib/twin'

export const runtime = 'nodejs'

/**
 * GET /api/twin?deviceId=...[&subject=...&weak=12&detail=skillKey]
 * The Cognitive Digital Twin snapshot: per-skill mastery probabilities,
 * subject rollups, decaying skills and a velocity forecast.
 */
export async function GET(req: NextRequest) {
  try {
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const snap = await buildTwin(deviceId)

    const subjectFilter = req.nextUrl.searchParams.get('subject')
    const weakLimit = Math.min(50, Math.max(1, Number(req.nextUrl.searchParams.get('weak') ?? 12)))
    const detailKey = req.nextUrl.searchParams.get('detail')

    // optional narrowing
    const skills = subjectFilter
      ? snap.skills.filter((s) => s.subjectId === subjectFilter)
      : snap.skills

    const weak = [...skills].sort((a, b) => b.urgency - a.urgency).slice(0, weakLimit)
    const strong = [...skills].sort((a, b) => b.p - a.p).slice(0, weakLimit)
    const decaying = [...skills]
      .filter((s) => s.raw - s.p > 0.08)
      .sort((a, b) => b.raw - b.p - (a.raw - a.p))
      .slice(0, weakLimit)

    return NextResponse.json({
      computedAt: snap.computedAt,
      totals: snap.totals,
      forecast: snap.forecast,
      subjects: snap.subjects,
      weak,
      strong,
      decaying,
      skillCount: skills.length,
      detail: detailKey ? skills.find((s) => s.key === detailKey) ?? null : undefined,
    })
  } catch (err) {
    console.error('[api/twin GET]', err)
    return NextResponse.json({ error: 'Could not compute the twin.' }, { status: 500 })
  }
}

/**
 * POST /api/twin — stream one evidence event into the twin.
 * Body: { deviceId, skillKey, kind, correct?, weight?, meta? }
 * kind ∈ studio | arena | judge | lab | palace | bridge
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body?.deviceId || !body?.skillKey || !body?.kind) {
      return NextResponse.json(
        { error: 'deviceId, skillKey and kind are required' },
        { status: 400 }
      )
    }
    await recordTwinEvent({
      deviceId: String(body.deviceId),
      skillKey: String(body.skillKey),
      kind: String(body.kind),
      correct:
        typeof body.correct === 'boolean' ? body.correct : body.correct === null ? null : undefined,
      weight: Number(body.weight ?? 1),
      meta: body.meta,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/twin POST]', err)
    return NextResponse.json({ error: 'Could not record that event.' }, { status: 500 })
  }
}
