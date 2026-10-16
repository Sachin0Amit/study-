import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { buildTwin } from '@/lib/twin'

export const runtime = 'nodejs'

interface BriefSource {
  title: string
  url: string
}

/**
 * GET /api/briefing?deviceId=... — the daily OS briefing.
 * Composes yesterday's telemetry + twin state + SRS load into a mission
 * (pure computation — no LLM, instant and reliable).
 */
export async function GET(req: NextRequest) {
  try {
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }

    const [twin, cards, activity] = await Promise.all([
      buildTwin(deviceId),
      db.flashcardState.findMany({ where: { deviceId } }),
      db.studyActivity.findMany({ where: { deviceId } }),
    ])

    // ---- yesterday + today activity ----
    const dayKey = (offset: number) => {
      const d = new Date()
      d.setDate(d.getDate() - offset)
      return d.toISOString().slice(0, 10)
    }
    const byDay = new Map<string, number>()
    for (const a of activity) byDay.set(a.day, (byDay.get(a.day) ?? 0) + a.count)
    const yesterday = byDay.get(dayKey(1)) ?? 0
    const today = byDay.get(dayKey(0)) ?? 0

    // ---- SRS due load ----
    const now = Date.now()
    const dueCards = cards.filter((c) => new Date(c.dueAt).getTime() <= now).length
    const scheduled = cards.length - dueCards
    const mastered = cards.filter((c) => c.box >= 4).length

    // ---- streak (consecutive active days ending today or yesterday) ----
    let streak = 0
    for (let i = 0; i < 365; i++) {
      const k = dayKey(i)
      if ((byDay.get(k) ?? 0) > 0) streak++
      else if (i > 0) break // today may be zero and the streak still "alive" from yesterday
    }

    // ---- the mission: top urgency skills, spread across subjects ----
    const weak = [...twin.skills].sort((a, b) => b.urgency - a.urgency)
    const picked: typeof weak = []
    const subjectCount = new Map<string, number>()
    for (const s of weak) {
      const c = subjectCount.get(s.subjectId) ?? 0
      if (c >= 2) continue // max 2 per subject for variety
      picked.push(s)
      subjectCount.set(s.subjectId, c + 1)
      if (picked.length >= 5) break
    }
    const decaying = [...twin.skills]
      .sort((a, b) => b.raw - b.p - (a.raw - a.p))
      .slice(0, 3)
      .filter((s) => s.raw - s.p > 0.08)

    // ---- headline ----
    const lines: string[] = []
    if (yesterday > 0) {
      lines.push(`Yesterday you logged ${yesterday} study event${yesterday !== 1 ? 's' : ''}${streak > 1 ? ` — ${streak}-day streak alive` : ''}.`)
    } else {
      lines.push('No activity logged yesterday — today is a clean slate.')
    }
    if (dueCards > 0) lines.push(`${dueCards} flashcard${dueCards !== 1 ? 's' : ''} due for review.`)
    if (twin.totals.fragileSkills > 0) {
      lines.push(`${twin.totals.fragileSkills} skill${twin.totals.fragileSkills !== 1 ? 's' : ''} sitting in fragile territory.`)
    }
    if (twin.totals.decayingSkills > 0) {
      lines.push(`${twin.totals.decayingSkills} previously-strong skill${twin.totals.decayingSkills !== 1 ? 's' : ''} fading — quick reps revive them.`)
    }
    if (lines.length === 0) {
      lines.push('Your twin is a blank page — open any lesson and it starts lighting up.')
    }

    return NextResponse.json({
      computedAt: new Date().toISOString(),
      headline: lines.join(' '),
      telemetry: {
        yesterday,
        today,
        streak,
        dueCards,
        scheduledCards: scheduled,
        masteredCards: mastered,
      },
      twinTotals: twin.totals,
      forecast: twin.forecast,
      mission: picked.map((s) => ({
        skillKey: s.key,
        number: s.number,
        title: s.title,
        chapterId: s.chapterId,
        chapterTitle: s.chapterTitle,
        subjectName: s.subjectName,
        p: s.p,
        urgency: s.urgency,
      })),
      revive: decaying.map((s) => ({
        skillKey: s.key,
        number: s.number,
        title: s.title,
        chapterTitle: s.chapterTitle,
        subjectName: s.subjectName,
        lost: Math.round((s.raw - s.p) * 100),
      })),
      sources: [] as BriefSource[],
    })
  } catch (err) {
    console.error('[api/briefing]', err)
    return NextResponse.json({ error: 'Could not compose the briefing.' }, { status: 500 })
  }
}
