import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/** Max length of a personal formula note (trimmed server-side) */
const MAX_NOTE_LEN = 500

export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  const rows = await db.formulaFavorite.findMany({
    where: { deviceId },
    orderBy: { createdAt: 'asc' },
  })
  // formulaKey → personal note (only non-empty notes)
  const notes: Record<string, string> = {}
  for (const r of rows) {
    if (r.note) notes[r.formulaKey] = r.note
  }
  return NextResponse.json({ favorites: rows.map((r) => r.formulaKey), notes })
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body?.deviceId || !body?.formulaKey) {
    return NextResponse.json({ error: 'deviceId and formulaKey required' }, { status: 400 })
  }
  await db.formulaFavorite
    .upsert({
      where: {
        deviceId_formulaKey: {
          deviceId: String(body.deviceId),
          formulaKey: String(body.formulaKey),
        },
      },
      update: {},
      create: {
        deviceId: String(body.deviceId),
        formulaKey: String(body.formulaKey),
      },
    })
    .catch(() => {}) // duplicate / offline tolerant
  return NextResponse.json({ ok: true })
}

// PUT — save a personal note on a formula. Upserts the row (creating it if
// missing, i.e. saving a note implicitly pins the formula). Note ≤ 500 chars.
export async function PUT(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body?.deviceId || !body?.formulaKey) {
    return NextResponse.json({ error: 'deviceId and formulaKey required' }, { status: 400 })
  }
  const note = (typeof body.note === 'string' ? body.note : '').trim().slice(0, MAX_NOTE_LEN)
  try {
    await db.formulaFavorite.upsert({
      where: {
        deviceId_formulaKey: {
          deviceId: String(body.deviceId),
          formulaKey: String(body.formulaKey),
        },
      },
      update: { note },
      create: {
        deviceId: String(body.deviceId),
        formulaKey: String(body.formulaKey),
        note,
      },
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'failed to save note' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body?.deviceId || !body?.formulaKey) {
    return NextResponse.json({ error: 'deviceId and formulaKey required' }, { status: 400 })
  }
  await db.formulaFavorite
    .deleteMany({
      where: { deviceId: String(body.deviceId), formulaKey: String(body.formulaKey) },
    })
    .catch(() => {})
  return NextResponse.json({ ok: true })
}
