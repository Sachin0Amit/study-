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
 *
 * POST /api/briefing (X10 Pro) — same briefing, plus optional client-side
 * signals that only live in the browser:
 *   body: {
 *     deviceId: string,
 *     focusLog?: { date: 'YYYY-MM-DD', focusMinutes: number }[],  // sv-focus-log
 *     judgeProfile?: unknown,  // sv-judge-profile-<deviceId> — object OR raw JSON string
 *     missionsXp?: unknown,    // lab missions XP — number or numeric string
 *   }
 * Everything is parsed defensively; garbage degrades to "field absent".
 * The response keeps the GET shape and ADDS `focus` + `labProgress` objects
 * only when the corresponding input was usable.
 */

interface FocusLogEntry {
  date: string
  focusMinutes: number
}

interface FocusBrief {
  todayMinutes: number
  weekMinutes: number
  totalMinutes: number
  streakDays: number
  week: { date: string; minutes: number }[]
}

interface LabProgressBrief {
  judgeLevel: number
  judgeXp: number
  judgeSolved: number
  missionsXp: number
}

function dayKey(offset: number): string {
  const d = new Date()
  d.setDate(d.getDate() - offset)
  return d.toISOString().slice(0, 10)
}

/** clamp + validate a client focus log entry */
function parseFocusLog(raw: unknown): FocusLogEntry[] {
  if (!Array.isArray(raw)) return []
  const out: FocusLogEntry[] = []
  for (const entry of raw.slice(0, 4000)) {
    if (!entry || typeof entry !== 'object') continue
    const date = String((entry as { date?: unknown }).date ?? '')
    const minutes = Number((entry as { focusMinutes?: unknown }).focusMinutes)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue
    if (!Number.isFinite(minutes) || minutes <= 0 || minutes > 1440) continue
    out.push({ date, focusMinutes: Math.round(minutes) })
  }
  return out
}

function summarizeFocus(log: FocusLogEntry[]): FocusBrief {
  const byDay = new Map<string, number>()
  for (const e of log) byDay.set(e.date, (byDay.get(e.date) ?? 0) + e.focusMinutes)

  const today = dayKey(0)
  const week: FocusBrief['week'] = []
  for (let i = 6; i >= 0; i--) {
    const key = dayKey(i)
    week.push({ date: key, minutes: byDay.get(key) ?? 0 })
  }

  // streak of consecutive days with ≥1 focus session (today, else from yesterday)
  let streakDays = 0
  let offset = (byDay.get(today) ?? 0) > 0 ? 0 : 1
  for (;;) {
    if ((byDay.get(dayKey(offset)) ?? 0) > 0) {
      streakDays++
      offset++
    } else break
    if (offset > 3650) break // 10-year safety net
  }

  return {
    todayMinutes: byDay.get(today) ?? 0,
    weekMinutes: week.reduce((n, d) => n + d.minutes, 0),
    totalMinutes: log.reduce((n, e) => n + e.focusMinutes, 0),
    streakDays,
    week,
  }
}

/**
 * sv-judge-profile-<deviceId> — { xp, level, solved: string[], streak, lastSolvedAt }.
 * The client may send the parsed object or the raw localStorage string.
 */
function parseJudgeProfile(raw: unknown): { xp: number; level: number; solved: number } | null {
  let obj: unknown = raw
  if (typeof raw === 'string') {
    try {
      obj = JSON.parse(raw)
    } catch {
      return null
    }
  }
  if (!obj || typeof obj !== 'object') return null
  const p = obj as { xp?: unknown; level?: unknown; solved?: unknown }
  const xp = Math.min(10_000_000, Math.max(0, Math.round(Number(p.xp) || 0)))
  const solved = Array.isArray(p.solved)
    ? p.solved.length
    : Math.min(10_000, Math.max(0, Math.round(Number(p.solved) || 0)))
  if (xp <= 0 && solved <= 0) return null
  const level =
    typeof p.level === 'number' && Number.isFinite(p.level) && p.level >= 0
      ? Math.min(100, Math.floor(p.level))
      : Math.floor(Math.sqrt(xp / 25)) // same curve as the judge panel
  return { xp, level, solved }
}

function parseMissionsXp(raw: unknown): number | null {
  const n = typeof raw === 'string' ? Number(raw) : typeof raw === 'number' ? raw : NaN
  if (!Number.isFinite(n) || n <= 0) return null
  return Math.min(10_000_000, Math.round(n))
}

interface BriefingExtras {
  focusLog?: unknown
  judgeProfile?: unknown
  missionsXp?: unknown
}

async function composeBriefing(deviceId: string, extras: BriefingExtras) {
  const [twin, cards, activity] = await Promise.all([
    buildTwin(deviceId),
    db.flashcardState.findMany({ where: { deviceId } }),
    db.studyActivity.findMany({ where: { deviceId } }),
  ])

  // ---- yesterday + today activity ----
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

  // ---- X10 Pro: client-side focus + lab signals (parsed defensively) ----
  const focusLog = parseFocusLog(extras.focusLog)
  const focus = focusLog.length > 0 ? summarizeFocus(focusLog) : null
  const judge = parseJudgeProfile(extras.judgeProfile)
  const missionsXp = parseMissionsXp(extras.missionsXp)
  const labProgress: LabProgressBrief | null =
    judge || missionsXp !== null
      ? {
          judgeLevel: judge?.level ?? 0,
          judgeXp: judge?.xp ?? 0,
          judgeSolved: judge?.solved ?? 0,
          missionsXp: missionsXp ?? 0,
        }
      : null

  // ---- headline ----
  const lines: string[] = []
  if (yesterday > 0) {
    lines.push(`Yesterday you logged ${yesterday} study event${yesterday !== 1 ? 's' : ''}${streak > 1 ? ` — ${streak}-day streak alive` : ''}.`)
  } else {
    lines.push('No activity logged yesterday — today is a clean slate.')
  }
  if (focus && focus.todayMinutes > 0) {
    lines.push(
      `${focus.todayMinutes} deep-focus minute${focus.todayMinutes !== 1 ? 's' : ''} banked today${focus.streakDays > 1 ? ` — ${focus.streakDays}-day focus streak` : ''}.`
    )
  } else if (focus && focus.weekMinutes > 0) {
    lines.push(`No focus time yet today — ${focus.weekMinutes} minutes last week says you know how.`)
  }
  if (labProgress) {
    const bits: string[] = []
    if (labProgress.judgeSolved > 0) {
      bits.push(`code judge level ${labProgress.judgeLevel} (${labProgress.judgeSolved} solved)`)
    }
    if (labProgress.missionsXp > 0) bits.push(`${labProgress.missionsXp} lab-mission XP`)
    if (bits.length > 0) lines.push(`Labs: ${bits.join(' · ')}.`)
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

  return {
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
    ...(focus ? { focus } : {}),
    ...(labProgress ? { labProgress } : {}),
  }
}

export async function GET(req: NextRequest) {
  try {
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const payload = await composeBriefing(deviceId, {})
    return NextResponse.json(payload)
  } catch (err) {
    console.error('[api/briefing]', err)
    return NextResponse.json({ error: 'Could not compose the briefing.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as {
      deviceId?: unknown
      focusLog?: unknown
      judgeProfile?: unknown
      missionsXp?: unknown
    } | null
    const deviceId = typeof body?.deviceId === 'string' ? body.deviceId.slice(0, 64) : ''
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const payload = await composeBriefing(deviceId, {
      focusLog: body?.focusLog,
      judgeProfile: body?.judgeProfile,
      missionsXp: body?.missionsXp,
    })
    return NextResponse.json(payload)
  } catch (err) {
    console.error('[api/briefing]', err)
    return NextResponse.json({ error: 'Could not compose the briefing.' }, { status: 500 })
  }
}
