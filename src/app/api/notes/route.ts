import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  const sectionKey = req.nextUrl.searchParams.get('sectionKey') // optional: single note
  const rows = await db.sectionNote.findMany({
    where: sectionKey ? { deviceId, sectionKey } : { deviceId },
    orderBy: { updatedAt: 'desc' },
  })
  if (sectionKey) {
    const row = rows[0]
    return NextResponse.json({ note: row?.note ?? '', updatedAt: row?.updatedAt?.toISOString() ?? null })
  }
  const notes: Record<string, { note: string; updatedAt: string }> = {}
  for (const r of rows) {
    if (r.note.trim()) notes[r.sectionKey] = { note: r.note, updatedAt: r.updatedAt.toISOString() }
  }
  return NextResponse.json({ notes })
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body?.deviceId || !body?.sectionKey) {
    return NextResponse.json({ error: 'deviceId and sectionKey required' }, { status: 400 })
  }
  const note = String(body.note ?? '').slice(0, 20000)
  await db.sectionNote.upsert({
    where: {
      deviceId_sectionKey: {
        deviceId: String(body.deviceId),
        sectionKey: String(body.sectionKey),
      },
    },
    update: { note },
    create: {
      deviceId: String(body.deviceId),
      sectionKey: String(body.sectionKey),
      note,
    },
  })
  return NextResponse.json({ ok: true })
}

export async function DELETE(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body?.deviceId || !body?.sectionKey) {
    return NextResponse.json({ error: 'deviceId and sectionKey required' }, { status: 400 })
  }
  await db.sectionNote
    .deleteMany({
      where: { deviceId: String(body.deviceId), sectionKey: String(body.sectionKey) },
    })
    .catch(() => {})
  return NextResponse.json({ ok: true })
}
