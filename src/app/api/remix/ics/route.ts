import { NextRequest } from 'next/server'
import { db } from '@/lib/db'
import { parseSteps, type RemixStep } from '@/lib/remix'

export const runtime = 'nodejs'

// ============================================================================
// P4 — Calendar export: one VEVENT per study day of a saved plan.
// DTSTART is a floating local 09:00 (no TZID) so importing calendars put
// the study block at the learner's own 09:00. VALARM fires 15 min before.
// ============================================================================

/** escape per RFC 5545 TEXT rules */
function esc(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n')
}

/** fold long content lines at 74 chars with a leading space (RFC 5545 §3.1) */
function fold(line: string): string {
  if (line.length <= 75) return line
  const parts: string[] = [line.slice(0, 74)]
  let rest = line.slice(74)
  while (rest.length > 74) {
    parts.push(rest.slice(0, 73))
    rest = rest.slice(73)
  }
  if (rest) parts.push(rest)
  return parts.join('\r\n ')
}

/** local-time (floating) ICS stamp: YYYYMMDDTHHMMSS */
function icsLocal(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0')
  return (
    `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}` +
    `T${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`
  )
}

function icsUtc(d: Date): string {
  return `${icsLocal(new Date(d.getTime() + d.getTimezoneOffset() * 60_000))}Z`
}

/** estimated session minutes: ~30 per step, clamped to a sane study block */
function dayMinutes(steps: RemixStep[]): number {
  if (steps.length === 0) return 90
  return Math.min(240, Math.max(45, steps.length * 30))
}

/** GET /api/remix/ics?planId= — download the plan as a .ics calendar file */
export async function GET(req: NextRequest) {
  try {
    const planId = req.nextUrl.searchParams.get('planId')
    if (!planId) {
      return new Response('planId required', { status: 400 })
    }
    const plan = await db.remixPlan.findUnique({ where: { id: planId } })
    if (!plan) {
      return new Response('Plan not found', { status: 404 })
    }

    const steps = parseSteps(plan.sequence)
    const byDay = new Map<number, RemixStep[]>()
    for (const s of steps) {
      const list = byDay.get(s.day)
      if (list) list.push(s)
      else byDay.set(s.day, [s])
    }
    const days = [...byDay.keys()].sort((a, b) => a - b)

    const now = new Date()
    const lines: string[] = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//StudyVerse//Curriculum Remix//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      `X-WR-CALNAME:${esc(`Study plan — ${plan.goal}`)}`,
    ]

    for (const day of days) {
      const daySteps = byDay.get(day) ?? []
      // day N starts (N-1) days after the plan was created, at 09:00 local
      const start = new Date(plan.createdAt.getTime())
      start.setDate(start.getDate() + (day - 1))
      start.setHours(9, 0, 0, 0)
      const minutes = dayMinutes(daySteps)
      const end = new Date(start.getTime() + minutes * 60_000)

      const titles = daySteps.map((s) => `§${s.number} ${s.title}`)
      lines.push(
        'BEGIN:VEVENT',
        `UID:${plan.id}-day${day}@studyverse`,
        `DTSTAMP:${icsUtc(now)}`,
        `DTSTART:${icsLocal(start)}`,
        `DTEND:${icsLocal(end)}`,
        fold(`SUMMARY:${esc(`${plan.goal} — Day ${day}`)}`),
        fold(`DESCRIPTION:${esc(titles.join(' • '))}`),
        'STATUS:CONFIRMED',
        'BEGIN:VALARM',
        'TRIGGER:-PT15M',
        'ACTION:DISPLAY',
        fold(`DESCRIPTION:${esc(`Study block: ${plan.goal} (Day ${day})`)}`),
        'END:VALARM',
        'END:VEVENT'
      )
    }

    lines.push('END:VCALENDAR')
    const filename = `studyverse-plan-${planId.slice(0, 8)}.ics`
    return new Response(lines.join('\r\n') + '\r\n', {
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('[api/remix/ics]', err)
    return new Response('Could not export the calendar file.', { status: 500 })
  }
}
