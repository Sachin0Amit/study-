import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { parseSteps, planProgress, type RemixStep } from '@/lib/remix'
import { buildTwin } from '@/lib/twin'
import { askLlm, extractMarker } from '@/lib/studio'
import ZAI from 'z-ai-web-dev-sdk'

export const runtime = 'nodejs'
export const maxDuration = 60

// ============================================================================
// P4 — Plan Doctor. Loads a saved plan + its progress (+ a twin snapshot when
// cheap), computes slip metrics, and makes ONE LLM call that returns markdown:
// Diagnosis / Rebalanced Prescription / Pressure Valves. Falls back to a local
// heuristic report if the LLM is unavailable.
// ============================================================================

interface DoctorMetrics {
  goal: string
  horizonDays: number
  totalSteps: number
  doneSteps: number
  openSteps: number
  percent: number
  daysElapsed: number
  daysRemaining: number
  overdueDays: number[]
  velocity: number // completed steps/day since start
  assumedPace: number // steps/day the plan originally assumed
  twinVelocity: number | null
  avgMastery: number | null
  subjects: string[]
  perDay: { day: number; open: number; done: number }[]
}

const DOCTOR_SYSTEM = `You are the Plan Doctor — a blunt but kind diagnostician for personalized study plans.
You receive a learner's study plan telemetry: completion progress, overdue day slots, velocity (completed steps per day), the pace the plan assumed, and their mastery estimates.
Return ONLY markdown with exactly these three sections, in order:
## Diagnosis
Explain why the plan slipped. Use the numbers. Explicitly blame the PLAN'S DENSITY (too many steps per day) or the LEARNER'S PACE (velocity below the assumed pace) — whichever the data supports — and say so in the first sentence.
## Rebalanced Prescription
A concrete day-by-day fix for the remaining days, e.g. "Day 6: finish §3.1, §3.2 + the flagged bridge". Reference actual step titles when given. Keep prerequisite order.
## Pressure Valves
2-4 bullets: what can be cut or compressed without losing the goal (maintenance-pass steps with high mastery, optional bridges, consolidation of related sections).
Rules: neutral university language — "your study plan", "assessment" — never any exam names. No meta commentary. Maximum ~320 words.`

function dayDate(createdAt: Date, day: number): string {
  const d = new Date(createdAt.getTime())
  d.setDate(d.getDate() + (day - 1))
  return d.toISOString().slice(5, 10)
}

function localReport(m: DoctorMetrics): string {
  const slip = m.overdueDays.length
  const densityBlame = m.assumedPace > Math.max(2, m.velocity * 1.6) && m.daysElapsed > 0
  const diagnosis = densityBlame
    ? `Your plan assumed **${m.assumedPace} steps/day** but your completion velocity is **${m.velocity} steps/day** — the plan's density outran your available study time. ${slip} day slot${slip === 1 ? '' : 's'} (${m.overdueDays
        .map((d) => `Day ${d}`)
        .join(', ')}) have already passed with steps still open.`
    : `You have completed ${m.doneSteps} of ${m.totalSteps} steps (${m.percent}%) with ${slip} overdue day slot${slip === 1 ? '' : 's'}. Your velocity (${m.velocity} steps/day) is close to the plan's assumed pace (${m.assumedPace}/day) — the slip is recent pace, not plan density. Keep the sequence and protect your daily block.`
  const days = m.perDay.filter((d) => d.open > 0).slice(0, 6)
  const spread = days.length ? Math.max(1, Math.ceil(m.openSteps / Math.max(1, m.daysRemaining))) : 0
  const prescription = days.length
    ? days
        .map(
          (d) =>
            `- **Day ${d.day}**: clear ${Math.min(d.open, spread)} step${Math.min(d.open, spread) === 1 ? '' : 's'} in the planned order — prerequisites first.`
        )
        .join('\n')
    : '- All steps are complete — run a light review pass and close the plan.'
  return `## Diagnosis\n${diagnosis}\n\n## Rebalanced Prescription\n${prescription}\n\n## Pressure Valves\n- Skip **maintenance-pass** steps (mastery already above 75%) — a skim is enough.\n- Defer optional **bridge lessons** unless the next step depends on them.\n- Merge adjacent sections of the same chapter into one sitting.`
}

/** POST /api/remix/doctor — diagnose a plan. Body: { deviceId, planId } */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    const deviceId = typeof body?.deviceId === 'string' ? body.deviceId : ''
    const planId = typeof body?.planId === 'string' ? body.planId : ''
    if (!deviceId || !planId) {
      return NextResponse.json({ error: 'deviceId and planId are required' }, { status: 400 })
    }
    const plan = await db.remixPlan.findUnique({ where: { id: planId } })
    if (!plan || plan.deviceId !== deviceId) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }

    const steps: RemixStep[] = parseSteps(plan.sequence)
    const progress = planProgress(steps, plan.createdAt, plan.horizonDays)

    // twin snapshot — cheap enough (already powers the twin view); tolerate failure
    let twinVelocity: number | null = null
    let twinContext = ''
    try {
      const twin = await buildTwin(deviceId)
      twinVelocity =
        Number.isFinite(twin.forecast.velocityPerDay) && twin.forecast.velocityPerDay > 0
          ? Math.round(twin.forecast.velocityPerDay * 10) / 10
          : null
      const weak = [...twin.subjects]
        .sort((a, b) => a.inferredMastery - b.inferredMastery)
        .slice(0, 3)
        .map((s) => `${s.subjectName} (${Math.round(s.inferredMastery * 100)}%)`)
      twinContext = `Twin snapshot: overall evidence velocity ${twinVelocity ?? 'n/a'} events/day. Weakest subjects: ${
        weak.join(', ') || 'no evidence yet'
      }.`
    } catch (err) {
      console.error('[api/remix/doctor twin]', err)
    }

    const perDay = new Map<number, { open: number; done: number }>()
    for (const s of steps) {
      const e = perDay.get(s.day) ?? { open: 0, done: 0 }
      if (s.done) e.done++
      else e.open++
      perDay.set(s.day, e)
    }
    const metrics: DoctorMetrics = {
      goal: plan.goal,
      horizonDays: plan.horizonDays,
      totalSteps: progress.totalSteps,
      doneSteps: progress.doneSteps,
      openSteps: progress.openSteps,
      percent: progress.percent,
      daysElapsed: Math.max(0, progress.currentDay - 1),
      daysRemaining: Math.max(0, plan.horizonDays - progress.currentDay + 1),
      overdueDays: progress.overdueDays,
      velocity: progress.velocity ?? 0,
      assumedPace: Math.round((progress.totalSteps / Math.max(1, plan.horizonDays)) * 10) / 10,
      twinVelocity,
      avgMastery:
        steps.filter((s) => s.pKnown !== null).length > 0
          ? Math.round(
              (steps.reduce((a, s) => a + (s.pKnown ?? 0), 0) /
                steps.filter((s) => s.pKnown !== null).length) *
                100
            ) / 100
          : null,
      subjects: [...new Set(steps.map((s) => s.subjectName))].slice(0, 4),
      perDay: [...perDay.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([day, e]) => ({ day, ...e })),
    }

    // compact prompt telemetry
    const openByDay = metrics.perDay
      .filter((d) => d.open > 0)
      .map((d) => {
        const titles = steps
          .filter((s) => s.day === d.day && !s.done)
          .slice(0, 4)
          .map((s) => `§${s.number} ${s.title}`)
        return `Day ${d.day} (${dayDate(plan.createdAt, d.day)}): ${d.open} open — ${titles.join('; ')}`
      })
      .join('\n')
    const userPrompt = `GOAL: ${plan.goal}
SUBJECTS: ${metrics.subjects.join(', ') || 'general'}
HORIZON: ${plan.horizonDays} days (started ${metrics.daysElapsed} day(s) ago, ${metrics.daysRemaining} day(s) remain)
PROGRESS: ${metrics.doneSteps}/${metrics.totalSteps} steps done (${metrics.percent}%)
OVERDUE DAY SLOTS (date passed, steps still open): ${
      metrics.overdueDays.length ? metrics.overdueDays.map((d) => `Day ${d}`).join(', ') : 'none'
    }
VELOCITY: ${metrics.velocity} steps/day completed (plan assumed ${metrics.assumedPace}/day)${
      twinVelocity !== null ? `; twin evidence velocity ~${twinVelocity} events/day` : ''
    }
AVG MASTERY OF PLAN SKILLS: ${metrics.avgMastery !== null ? `${Math.round(metrics.avgMastery * 100)}%` : 'no data'}
${twinContext}

OPEN STEPS BY DAY:
${openByDay || '(all steps complete)'}`

    try {
      const zai = await ZAI.create()
      const reply = await askLlm(zai, DOCTOR_SYSTEM, userPrompt)
      const report = extractMarker(reply).clean.trim()
      if (report.length > 80) {
        return NextResponse.json({ metrics, report, source: 'llm' })
      }
    } catch (err) {
      console.error('[api/remix/doctor llm]', err)
    }

    return NextResponse.json({ metrics, report: localReport(metrics), source: 'heuristic' })
  } catch (err) {
    console.error('[api/remix/doctor]', err)
    return NextResponse.json({ error: 'The doctor could not see the plan.' }, { status: 500 })
  }
}
