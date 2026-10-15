import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const runtime = 'nodejs'

/** GET /api/syllabus/plans?deviceId=... — newest plans first, capped at 50 */
export async function GET(req: NextRequest) {
  try {
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const rows = await db.syllabusPlan.findMany({
      where: { deviceId },
      orderBy: { createdAt: 'desc' },
      take: 50,
      select: {
        id: true,
        title: true,
        sourceType: true,
        sourceName: true,
        matched: true,
        total: true,
        engineVersion: true,
        refreshedAt: true,
        refreshCount: true,
        createdAt: true,
      },
    })
    return NextResponse.json({
      plans: rows.map((r) => ({
        ...r,
        refreshedAt: r.refreshedAt ? r.refreshedAt.toISOString() : null,
        createdAt: r.createdAt.toISOString(),
      })),
    })
  } catch (err) {
    console.error('[api/syllabus/plans]', err)
    return NextResponse.json({ error: 'Could not load plans.' }, { status: 500 })
  }
}
