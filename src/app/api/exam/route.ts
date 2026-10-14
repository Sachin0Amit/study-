import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/** One missed exam question, persisted for the flashcards "exam misses" deck */
interface MissedQuestion {
  q: string
  options: string[]
  answer: number
  explanation: string
  sectionId: string
  sectionNumber: number
  sectionTitle: string
  chapterNumber: number
  picked: number | null
}

const MAX_MISSED = 60

function str(v: unknown, max: number): string {
  return typeof v === 'string' ? v.slice(0, max) : ''
}

/** finite number clamped to [min, max]; fallback when not finite */
function num(v: unknown, min: number, max: number, fallback: number): number {
  const n = Number(v)
  if (!Number.isFinite(n)) return fallback
  return Math.max(min, Math.min(max, Math.trunc(n)))
}

/** sanitize an unknown `missed` payload into a clean MissedQuestion[] (max 60) */
function sanitizeMissed(raw: unknown): MissedQuestion[] {
  if (!Array.isArray(raw)) return []
  const out: MissedQuestion[] = []
  for (const item of raw.slice(0, MAX_MISSED)) {
    if (typeof item !== 'object' || item === null) continue
    const m = item as Record<string, unknown>
    const q = str(m.q, 600)
    if (!q) continue
    const options = Array.isArray(m.options)
      ? m.options.filter((o: unknown) => typeof o === 'string').map((o: string) => o.slice(0, 300)).slice(0, 6)
      : []
    if (options.length === 0) continue // a card with no options cannot be drilled
    const answer = num(m.answer, 0, options.length - 1, 0)
    const pickedRaw = m.picked
    const picked =
      pickedRaw === null || pickedRaw === undefined || typeof pickedRaw === 'string' || Number.isNaN(Number(pickedRaw))
        ? null
        : num(pickedRaw, 0, options.length - 1, 0)
    const sectionId = str(m.sectionId, 100)
    if (!sectionId) continue
    out.push({
      q,
      options,
      answer,
      explanation: str(m.explanation, 600),
      sectionId,
      sectionNumber: num(m.sectionNumber, 0, 999, 0),
      sectionTitle: str(m.sectionTitle, 300),
      chapterNumber: num(m.chapterNumber, 0, 99, 0),
      picked,
    })
  }
  return out.slice(0, MAX_MISSED)
}

/** GET /api/exam?deviceId=X → last 20 exam attempts (newest first) */
export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  const rows = await db.examAttempt.findMany({
    where: { deviceId },
    orderBy: { createdAt: 'desc' },
    take: 20,
  })
  return NextResponse.json({
    attempts: rows.map((r) => {
      let missed: MissedQuestion[] = []
      try {
        const parsed = JSON.parse(r.missed) as unknown
        if (Array.isArray(parsed)) missed = parsed as MissedQuestion[]
      } catch {
        missed = []
      }
      return {
        id: r.id,
        label: r.label,
        chapters: JSON.parse(r.chapters) as string[],
        questionCount: r.questionCount,
        score: r.score,
        total: r.total,
        durationSec: r.durationSec,
        missed,
        createdAt: r.createdAt.toISOString(),
      }
    }),
  })
}

/** POST /api/exam — record a finished attempt (with missed questions for the SRS deck) */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body?.deviceId || typeof body.score !== 'number' || typeof body.total !== 'number') {
    return NextResponse.json({ error: 'deviceId, score and total required' }, { status: 400 })
  }
  const chapters: string[] = Array.isArray(body.chapters)
    ? body.chapters.filter((c: unknown) => typeof c === 'string').slice(0, 20)
    : []
  const missed = sanitizeMissed(body.missed)
  await db.examAttempt.create({
    data: {
      deviceId: String(body.deviceId),
      label: String(body.label ?? 'Exam').slice(0, 120),
      chapters: JSON.stringify(chapters),
      questionCount: Math.max(0, Math.min(288, Number(body.questionCount) || 0)),
      score: Math.max(0, Math.min(288, Number(body.score) || 0)),
      total: Math.max(0, Math.min(288, Number(body.total) || 0)),
      durationSec: Math.max(0, Math.min(24 * 3600, Number(body.durationSec) || 0)),
      missed: JSON.stringify(missed),
    },
  })
  return NextResponse.json({ ok: true, missedSaved: missed.length })
}
