import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const runtime = 'nodejs'

type Params = { params: Promise<{ id: string }> }

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback
  try {
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

/** GET /api/paper-dna/[id]?deviceId=… — one full forensic report */
export async function GET(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const row = await db.paperAnalysis.findUnique({ where: { id } })
    if (!row || row.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Analysis not found' }, { status: 404 })
    }
    return NextResponse.json({
      analysis: {
        id: row.id,
        title: row.title,
        createdAt: row.createdAt.toISOString(),
        files: safeParse<unknown[]>(row.files, []),
        questions: safeParse<unknown[]>(row.questions, []),
        stats: safeParse<Record<string, unknown> | null>(row.stats, null),
      },
    })
  } catch (err) {
    console.error('[api/paper-dna/[id] GET]', err)
    return NextResponse.json({ error: 'Could not load that analysis.' }, { status: 500 })
  }
}
