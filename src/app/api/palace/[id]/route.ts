import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { db } from '@/lib/db'
import { recordTwinEvent } from '@/lib/twin'

// ============================================================================
// X8 — MEMORY PALACE: single-palace actions
// GET    ?deviceId=          → full palace (parsed rooms)
// POST   ?deviceId= (walked) → increments walks, SRS dueAt, twin evidence
// DELETE ?deviceId=          → delete row + best-effort remove /public/palace/<id>
// ============================================================================

export const runtime = 'nodejs'

type Params = { params: Promise<{ id: string }> }

interface PalaceRoomOut {
  name: string
  scene: string
  facts: string[]
  image: string | null
  narration: string
  audio: string | null
}

function parseRoomsJson(raw: string): { place: string; rooms: PalaceRoomOut[] } {
  try {
    const parsed: unknown = JSON.parse(raw)
    if (Array.isArray(parsed)) return { place: '', rooms: parsed as PalaceRoomOut[] }
    if (parsed && typeof parsed === 'object') {
      const obj = parsed as { place?: unknown; rooms?: unknown }
      return {
        place: typeof obj.place === 'string' ? obj.place : '',
        rooms: Array.isArray(obj.rooms) ? (obj.rooms as PalaceRoomOut[]) : [],
      }
    }
  } catch {
    /* corrupted row — treat as empty */
  }
  return { place: '', rooms: [] }
}

/** GET /api/palace/[id]?deviceId= — the full palace for the walk stage */
export async function GET(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const row = await db.memoryPalace.findUnique({ where: { id } })
    if (!row || row.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Palace not found' }, { status: 404 })
    }
    const { place, rooms } = parseRoomsJson(row.rooms)
    return NextResponse.json({
      id: row.id,
      sectionKey: row.sectionKey,
      status: row.status,
      place,
      rooms,
      walks: row.walks,
      dueAt: row.dueAt ? row.dueAt.toISOString() : null,
      createdAt: row.createdAt.toISOString(),
    })
  } catch (err) {
    console.error('[api/palace/[id] GET]', err)
    return NextResponse.json({ error: 'Could not load the palace.' }, { status: 500 })
  }
}

/**
 * POST /api/palace/[id]?deviceId= — body { action: 'walked' }
 * Walk completed: walks++, SRS interval (walks<3 ? 3 : 7 days), twin evidence.
 */
export async function POST(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    let deviceId: string | null = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      const body = (await req.json().catch(() => null)) as Record<string, unknown> | null
      if (body && typeof body.deviceId === 'string' && body.deviceId) deviceId = body.deviceId
    }
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const row = await db.memoryPalace.findUnique({ where: { id } })
    if (!row || row.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Palace not found' }, { status: 404 })
    }

    const walks = row.walks + 1
    const dueAt = new Date(Date.now() + (walks < 3 ? 3 : 7) * 86_400_000)
    const updated = await db.memoryPalace.update({
      where: { id },
      data: { walks, dueAt },
    })

    // evidence for the cognitive twin (non-gradeable exposure — weight 1)
    try {
      await recordTwinEvent({
        deviceId,
        skillKey: row.sectionKey,
        kind: 'palace',
        correct: null,
        weight: 1,
        meta: { place: parseRoomsJson(row.rooms).place, walks },
      })
    } catch (twinErr) {
      // unknown skill key or twin hiccup must never break the walk action
      console.error('[api/palace/[id]] twin evidence failed:', twinErr instanceof Error ? twinErr.message : twinErr)
    }

    return NextResponse.json({
      walks: updated.walks,
      dueAt: updated.dueAt ? updated.dueAt.toISOString() : null,
    })
  } catch (err) {
    console.error('[api/palace/[id] POST]', err)
    return NextResponse.json({ error: 'Could not record the walk.' }, { status: 500 })
  }
}

/** DELETE /api/palace/[id]?deviceId= — row + generated assets */
export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const row = await db.memoryPalace.findUnique({ where: { id } })
    if (!row || row.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Palace not found' }, { status: 404 })
    }
    await db.memoryPalace.delete({ where: { id } })
    // best-effort cleanup of the generated room images + narration
    try {
      await fs.rm(path.join(process.cwd(), 'public', 'palace', id), { recursive: true, force: true })
    } catch {
      /* files already gone or fs hiccup — row deletion already succeeded */
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/palace/[id] DELETE]', err)
    return NextResponse.json({ error: 'Could not delete the palace.' }, { status: 500 })
  }
}
