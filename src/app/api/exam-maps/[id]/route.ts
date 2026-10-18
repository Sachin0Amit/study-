import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import type {
  ExamMapFull,
  ExamMapSource,
  ExamMapStats,
  ExamOverview,
  ExamSubject,
} from '@/lib/exam-map-types'

// ============================================================================
// Exam Command Center — single saved map actions
// GET    ?deviceId=            → { map: ExamMapFull } (defensively parsed JSON columns)
// DELETE ?deviceId=            → { ok: true } (404 when unknown id / device mismatch)
// PATCH  { deviceId, name }    → rename (name 2-200 chars) → { ok: true }
// ============================================================================

export const runtime = 'nodejs'

type Params = { params: Promise<{ id: string }> }

/** parse a JSON object column with a fallback (corrupted rows never 500) */
function parseObject<T extends object>(raw: string, fallback: T): T {
  try {
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed as T
  } catch {
    /* corrupted row — fall back */
  }
  return fallback
}

/** parse a JSON array column with an empty-array fallback */
function parseArray<T>(raw: string): T[] {
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed as T[]
  } catch {
    /* corrupted row — fall back */
  }
  return []
}

/** parse the stats column (zeros on any corruption) */
function parseStats(raw: string): ExamMapStats {
  const s = parseObject<Partial<ExamMapStats>>(raw, {})
  const n = (v: unknown): number => {
    const x = typeof v === 'number' ? v : parseInt(String(v), 10)
    return Number.isFinite(x) && x >= 0 ? Math.trunc(x) : 0
  }
  return {
    subjectCount: n(s.subjectCount),
    unitCount: n(s.unitCount),
    topicCount: n(s.topicCount),
    mappedCount: n(s.mappedCount),
  }
}

/** GET /api/exam-maps/[id]?deviceId= — the full saved map */
export async function GET(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const row = await db.examMap.findUnique({ where: { id } })
    if (!row || row.deviceId !== deviceId) {
      return NextResponse.json({ error: 'not found' }, { status: 404 })
    }
    const map: ExamMapFull = {
      id: row.id,
      name: row.name,
      overview: parseObject<ExamOverview>(row.overview, {}),
      subjects: parseArray<ExamSubject>(row.subjects),
      sources: parseArray<ExamMapSource>(row.sources),
      stats: parseStats(row.stats),
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    }
    return NextResponse.json({ map })
  } catch (err) {
    console.error('[api/exam-maps/[id] GET]', err)
    return NextResponse.json({ error: 'Could not load the map.' }, { status: 500 })
  }
}

/** DELETE /api/exam-maps/[id]?deviceId= — remove one saved map */
export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const row = await db.examMap.findUnique({ where: { id } })
    if (!row || row.deviceId !== deviceId) {
      return NextResponse.json({ error: 'not found' }, { status: 404 })
    }
    await db.examMap.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/exam-maps/[id] DELETE]', err)
    return NextResponse.json({ error: 'Could not delete the map.' }, { status: 500 })
  }
}

/** PATCH /api/exam-maps/[id] — body { deviceId, name } → rename the saved map */
export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    const body = (await req.json().catch(() => null)) as Record<string, unknown> | null
    const deviceId = typeof body?.deviceId === 'string' ? body.deviceId : ''
    const name = typeof body?.name === 'string' ? body.name.trim() : ''
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    if (name.length < 2 || name.length > 200) {
      return NextResponse.json(
        { error: 'name must be 2-200 characters' },
        { status: 400 }
      )
    }
    const row = await db.examMap.findUnique({ where: { id } })
    if (!row || row.deviceId !== deviceId) {
      return NextResponse.json({ error: 'not found' }, { status: 404 })
    }
    await db.examMap.update({ where: { id }, data: { name } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/exam-maps/[id] PATCH]', err)
    return NextResponse.json({ error: 'Could not rename the map.' }, { status: 500 })
  }
}
