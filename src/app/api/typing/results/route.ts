import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const runtime = 'nodejs'

/**
 * X12 — Keyboard Dojo leaderboard API.
 *
 * POST /api/typing/results          → save a finished run, return its rank
 * GET  /api/typing/results          → top 25 runs (accuracy ≥ 70%)
 * GET  /api/typing/results?mode=xx  → board filtered by mode (time-60, code, …)
 * GET  /api/typing/results?deviceId=xx → rows belonging to this device get `mine`
 */

const MODE_RE = /^[a-z0-9-]{2,16}$/
const MOD_RE = /^(punc|nums|iron|blind|peek)(,(punc|nums|iron|blind|peek))*$/

function sanitizeName(raw: unknown): string {
  const s = typeof raw === 'string' ? raw.replace(/[^\w \-.']/g, '').trim().slice(0, 24) : ''
  return s || 'Anonymous'
}

function clampInt(raw: unknown, min: number, max: number): number | null {
  const n = typeof raw === 'number' ? raw : Number(raw)
  if (!Number.isFinite(n)) return null
  const r = Math.round(n)
  return r >= min && r <= max ? r : null
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Record<string, unknown>
    const deviceId = typeof body.deviceId === 'string' ? body.deviceId.slice(0, 64) : ''
    const mode = typeof body.mode === 'string' ? body.mode : ''
    const modifiers = typeof body.modifiers === 'string' ? body.modifiers : ''
    if (!deviceId || !MODE_RE.test(mode)) {
      return NextResponse.json({ error: 'invalid payload' }, { status: 400 })
    }
    if (modifiers && !MOD_RE.test(modifiers)) {
      return NextResponse.json({ error: 'invalid modifiers' }, { status: 400 })
    }
    const wpm = clampInt(body.wpm, 1, 350)
    const rawWpm = clampInt(body.rawWpm, 0, 400)
    const accuracy = clampInt(body.accuracy, 1, 100)
    const consistency = clampInt(body.consistency, 0, 100)
    const durationSec = clampInt(body.durationSec, 3, 3600)
    const chars = clampInt(body.chars, 0, 100000)
    const errors = clampInt(body.errors, 0, 100000)
    if (wpm === null || accuracy === null || durationSec === null) {
      return NextResponse.json({ error: 'invalid metrics' }, { status: 400 })
    }

    const created = await db.typingResult.create({
      data: {
        deviceId,
        name: sanitizeName(body.name),
        mode,
        modifiers,
        wpm,
        rawWpm: rawWpm ?? 0,
        accuracy,
        consistency: consistency === null ? null : consistency,
        durationSec,
        chars: chars ?? 0,
        errors: errors ?? 0,
      },
    })

    // rank among legit runs of the same mode (accuracy-gated board)
    const better = await db.typingResult.count({
      where: { mode, accuracy: { gte: 70 }, wpm: { gt: wpm } },
    })

    return NextResponse.json({ ok: true, id: created.id, rank: better + 1 })
  } catch {
    return NextResponse.json({ error: 'failed to save run' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const mode = req.nextUrl.searchParams.get('mode')?.trim() ?? ''
    const deviceId = req.nextUrl.searchParams.get('deviceId')?.trim() ?? ''
    const where: { accuracy: { gte: number }; mode?: string } = { accuracy: { gte: 70 } }
    if (mode && MODE_RE.test(mode)) where.mode = mode

    const rows = await db.typingResult.findMany({
      where,
      orderBy: [{ wpm: 'desc' }, { accuracy: 'desc' }, { createdAt: 'asc' }],
      take: 25,
      select: {
        id: true,
        deviceId: true,
        name: true,
        mode: true,
        modifiers: true,
        wpm: true,
        accuracy: true,
        consistency: true,
        durationSec: true,
        createdAt: true,
      },
    })

    return NextResponse.json({
      entries: rows.map((r) => ({
        id: r.id,
        name: r.name,
        mode: r.mode,
        modifiers: r.modifiers,
        wpm: r.wpm,
        accuracy: r.accuracy,
        consistency: r.consistency,
        durationSec: r.durationSec,
        createdAt: r.createdAt.toISOString(),
        mine: deviceId ? r.deviceId === deviceId : false,
      })),
    })
  } catch {
    return NextResponse.json({ entries: [] }, { status: 200 })
  }
}
