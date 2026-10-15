import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import type { MappingEntry } from '@/lib/syllabus'

export const runtime = 'nodejs'

type Params = { params: Promise<{ id: string }> }

function parseMapping(raw: string): MappingEntry[] {
  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter((e): e is MappingEntry => !!e && typeof e === 'object' && 'topic' in e)
      .map((e) => ({
        topic: String(e.topic ?? ''),
        subjectId: e.subjectId ?? null,
        subjectName: e.subjectName ?? null,
        chapterId: e.chapterId ?? null,
        chapterTitle: e.chapterTitle ?? null,
        confidence: typeof e.confidence === 'number' ? e.confidence : 0,
      }))
  } catch {
    return []
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
      createdAt: plan.createdAt.toISOString(),
      mapping: parseMapping(plan.mapping),
    })
  } catch (err) {
    console.error('[api/syllabus/plans/[id] GET]', err)
    return NextResponse.json({ error: 'Could not load the plan.' }, { status: 500 })
  }
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
