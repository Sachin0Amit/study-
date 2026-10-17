import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { buildTwin, skillPredecessor } from '@/lib/twin'
import { llmContent, withTimeout } from '@/lib/syllabus'
import type { TwinSkill, TwinSnapshot } from '@/lib/twin'

export const runtime = 'nodejs'
export const maxDuration = 60

// ============================================================================
// X1 Pro — AI TWIN DIAGNOSIS
// POST /api/twin/insight  { deviceId }
// Computes a compact diagnosis digest from the twin (weakest subjects/skills,
// forecast, decay risks, critical prerequisite chains), makes ONE LLM call for
// a blunt-but-supportive coach diagnosis in markdown, and returns everything
// the client needs to render the panel. Falls back to a locally computed
// diagnosis when the LLM is unavailable.
// ============================================================================

// ------------------------------ payload types ---------------------------------

interface SkillDigest {
  key: string
  number: number
  title: string
  chapterTitle: string
  subjectName: string
  mastery: number
  urgency: number
  evidence: number
  lastSeen: string | null
  trend: number
  lost: number // mastery points lost to decay
}

interface SubjectDigest {
  subjectId: string
  subjectName: string
  inferredMastery: number
  avgMastery: number
  coverage: number
  skills: number
  evidencedSkills: number
}

interface ChainLink {
  key: string
  number: number
  title: string
  chapterTitle: string
  mastery: number | null // null → not evidenced yet
}

interface CriticalPath {
  subject: string
  target: { key: string; number: number; title: string; mastery: number }
  chain: ChainLink[] // root-first prerequisite chain to master first
  summary: string
}

interface InsightStats {
  computedAt: string
  evidenceEvents: number
  evidencedSkills: number
  universe: number
  strongSkills: number
  fragileSkills: number
  decayingSkills: number
  velocityPerDay: number
  projectedCoverage7d: number
  projectedCoverage30d: number
  daysToFullCoverage: number | null
  subjectsLit: number
  weakestSubjects: SubjectDigest[]
  decayRisks: SkillDigest[]
}

interface InsightResult {
  diagnosis: string
  criticalPaths: CriticalPath[]
  weakestSkills: SkillDigest[]
  stats: InsightStats
  llm: boolean // whether the diagnosis came from the LLM (vs local fallback)
}

// ------------------------------ digest helpers --------------------------------

function digestSkill(s: TwinSkill): SkillDigest {
  return {
    key: s.key,
    number: s.number,
    title: s.title.slice(0, 80),
    chapterTitle: s.chapterTitle.slice(0, 60),
    subjectName: s.subjectName,
    mastery: Math.round(s.p * 100) / 100,
    urgency: Math.round(s.urgency * 100) / 100,
    evidence: s.evidenceCount,
    lastSeen: s.lastEvidenceAt,
    trend: Math.round(s.trend * 100) / 100,
    lost: Math.max(0, Math.round((s.raw - s.p) * 100) / 100),
  }
}

/** mastery of a skill key, or null when the learner has never touched it */
function masteryOf(skills: Map<string, TwinSkill>, key: string): number | null {
  return skills.get(key)?.p ?? null
}

/**
 * Critical-path analysis: from the weakest subject, walk skillPredecessor
 * chains backwards from its weakest skills to find blocking prerequisite
 * chains — "master A → B → C before attempting D".
 */
function findCriticalPaths(snap: TwinSnapshot, skills: Map<string, TwinSkill>): CriticalPath[] {
  const evidenced = snap.subjects.filter((s) => s.evidencedSkills > 0)
  if (!evidenced.length) return []
  const weakestSubject = [...evidenced].sort((a, b) => a.inferredMastery - b.inferredMastery)[0]

  const targets = [...skills.values()]
    .filter((s) => s.subjectId === weakestSubject.subjectId)
    .sort((a, b) => a.p - b.p || b.urgency - a.urgency)
    .slice(0, 8)

  const paths: CriticalPath[] = []
  const used = new Set<string>() // skills already claimed by an earlier chain
  for (const target of targets) {
    if (paths.length >= 3) break
    if (used.has(target.key)) continue

    // walk predecessors while they are blockers (weak or untouched)
    const chain: ChainLink[] = []
    let cur: string | null = target.key
    while (chain.length < 3 && cur) {
      cur = skillPredecessor(cur)
      if (!cur) break
      const m = masteryOf(skills, cur)
      if (m !== null && m >= 0.6) break // solid prerequisite — not a blocker
      const meta = skills.get(cur)
      chain.push({
        key: cur,
        number: meta?.number ?? 0,
        title: (meta?.title ?? cur).slice(0, 80),
        chapterTitle: (meta?.chapterTitle ?? '').slice(0, 60),
        mastery: m === null ? null : Math.round(m * 100) / 100,
      })
    }
    if (!chain.length) continue // nothing blocks this target

    chain.reverse() // root-first
    for (const link of chain) used.add(link.key)
    used.add(target.key)

    const arrow = [...chain, { number: target.number, title: target.title }]
      .map((l) => `§${l.number} ${l.title}`)
      .join(' → ')
    paths.push({
      subject: weakestSubject.subjectName,
      target: { key: target.key, number: target.number, title: target.title, mastery: Math.round(target.p * 100) / 100 },
      chain,
      summary: `master ${arrow} before pushing further`,
    })
  }
  return paths
}

// ------------------------------ prompts ----------------------------------------

const SYSTEM_PROMPT = `You are the cognitive-coach module of a study platform's digital twin. You receive a JSON digest of one learner's mastery model and write a blunt-but-supportive diagnosis in markdown.

Required structure — exactly these four sections, each opened by a bold heading on its own line:
**Reading Your Brain**
2-3 sentences diagnosing the overall state: which subjects are weakest, the fragile-versus-strong balance, and how much of the skill universe has evidence.
**Critical Blockers**
The prerequisite chains from the payload, phrased as "master X → Y → Z before attempting W" using the real titles verbatim. If the payload has no chains, say what that means instead.
**Three Moves This Week**
Exactly three concrete, checkable actions. Every action must reference real skill and/or chapter titles from the payload.
**Trajectory**
Interpret the 30-day forecast numbers honestly — velocity, projected coverage, full-coverage horizon. If velocity is near zero, say so plainly.

Rules: direct and a little wry, never cruel. No exam names or brand names. No medical or diagnostic claims about the person. Never invent skills that are not in the payload. Under 350 words total. Markdown only, no code fences.`

function buildUserPayload(stats: InsightStats, weakest: SkillDigest[], paths: CriticalPath[]): string {
  return JSON.stringify(
    {
      overview: {
        evidenceEvents: stats.evidenceEvents,
        evidencedSkills: stats.evidencedSkills,
        universe: stats.universe,
        strongSkills: stats.strongSkills,
        fragileSkills: stats.fragileSkills,
        decayingSkills: stats.decayingSkills,
        subjectsLit: stats.subjectsLit,
        velocityPerDay: stats.velocityPerDay,
        projectedCoverage7d: stats.projectedCoverage7d,
        projectedCoverage30d: stats.projectedCoverage30d,
        daysToFullCoverage: stats.daysToFullCoverage,
      },
      weakestSubjects: stats.weakestSubjects.map((s) => ({
        name: s.subjectName,
        inferredMastery: s.inferredMastery,
        coverage: s.coverage,
        evidenced: `${s.evidencedSkills}/${s.skills}`,
      })),
      weakestSkills: weakest.map((s) => ({
        title: `§${s.number} ${s.title}`,
        chapter: s.chapterTitle,
        subject: s.subjectName,
        mastery: s.mastery,
        urgency: s.urgency,
        evidence: s.evidence,
        lostToDecay: s.lost,
      })),
      decayRisks: stats.decayRisks.map((s) => ({
        title: `§${s.number} ${s.title}`,
        mastery: s.mastery,
        lost: s.lost,
        lastSeen: s.lastSeen,
      })),
      criticalPaths: paths.map((p) => ({
        subject: p.subject,
        chain: [
          ...p.chain.map((l) => ({ title: l.title, number: l.number, mastery: l.mastery })),
          { title: p.target.title, number: p.target.number, mastery: p.target.mastery },
        ].map((l) => `§${l.number} ${l.title} (${l.mastery === null ? 'untouched' : `${Math.round(l.mastery * 100)}%`})`),
      })),
    },
    null,
    1
  )
}

/** locally computed fallback so the panel is still useful when the LLM fails */
function fallbackDiagnosis(stats: InsightStats, weakest: SkillDigest[], paths: CriticalPath[]): string {
  const pct = (x: number) => `${Math.round(x * 100)}%`
  const head =
    stats.evidencedSkills === 0
      ? '**Reading Your Brain**\n\nNo evidence has reached the twin yet — the model is blind. Open a lesson, answer a self-check, or review a few flashcards and the scan will light up.'
      : `**Reading Your Brain**\n\nYou have evidence on ${stats.evidencedSkills} of ${stats.universe} skills across ${stats.subjectsLit} subjects. ${stats.strongSkills} skills are banked stable while ${stats.fragileSkills} sit fragile and ${stats.decayingSkills} are actively fading — the balance leans toward wide-but-thin.${
          stats.weakestSubjects[0]
            ? ` Weakest front: **${stats.weakestSubjects[0].subjectName}** at ${pct(stats.weakestSubjects[0].inferredMastery)} inferred mastery (${stats.weakestSubjects[0].evidencedSkills}/${stats.weakestSubjects[0].skills} skills touched).`
            : ''
        }`

  const blockers =
    paths.length > 0
      ? `**Critical Blockers**\n\n${paths
          .map(
            (p) =>
              `- ${p.chain.map((l) => `§${l.number} ${l.title}`).join(' → ')} → §${p.target.number} ${p.target.title} (${pct(p.target.mastery)}) — ${p.subject}`
          )
          .join('\n')}`
      : '**Critical Blockers**\n\nNo hard prerequisite chains are blocking you right now — the weakness is spread, not stacked. That is actually easier to fix.'

  const moves = `**Three Moves This Week**\n\n${weakest
    .slice(0, 3)
    .map(
      (s, i) =>
        `${i + 1}. Rework **§${s.number} ${s.title}** (${s.chapterTitle}) — mastery ${pct(s.mastery)}${
          s.lost > 0.05 ? `, with ${Math.round(s.lost * 100)} points already faded` : ''
        }.`
    )
    .join('\n')}`

  const horizon =
    stats.daysToFullCoverage === null || stats.daysToFullCoverage <= 0
      ? 'complete at this pace'
      : stats.daysToFullCoverage > 900
        ? `over ${Math.round(stats.daysToFullCoverage / 365)} years at this pace — treat coverage as a marathon, not the goal`
        : `~${stats.daysToFullCoverage} days at this pace`
  const decayNote =
    stats.decayRisks.length > 0
      ? ` Watch **§${stats.decayRisks[0].number} ${stats.decayRisks[0].title}** — it has already shed ${Math.round(
          stats.decayRisks[0].lost * 100
        )} points and needs a refresh soon.`
      : ''
  const trajectory = `**Trajectory**\n\nVelocity is ${stats.velocityPerDay} evidence events/day, projecting ${pct(
    stats.projectedCoverage7d
  )} coverage in 7 days and ${pct(stats.projectedCoverage30d)} in 30 — full-universe coverage in ${horizon}.${decayNote}`

  return [head, blockers, moves, trajectory].join('\n\n')
}

// ------------------------------ the route ---------------------------------------

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as { deviceId?: string } | null
    const deviceId = body?.deviceId?.trim()
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }

    const snap = await buildTwin(deviceId)
    const skills = new Map(snap.skills.map((s) => [s.key, s]))

    // ---- compact diagnosis digest ----
    const weakestSubjects: SubjectDigest[] = [...snap.subjects]
      .sort((a, b) => a.inferredMastery - b.inferredMastery)
      .slice(0, 6)
      .map((s) => ({
        subjectId: s.subjectId,
        subjectName: s.subjectName,
        inferredMastery: Math.round(s.inferredMastery * 100) / 100,
        avgMastery: Math.round(s.avgMastery * 100) / 100,
        coverage: Math.round(s.coverage * 1000) / 1000,
        skills: s.skills,
        evidencedSkills: s.evidencedSkills,
      }))

    const weakestSkills = [...snap.skills]
      .sort((a, b) => a.p - b.p || b.urgency - a.urgency)
      .slice(0, 8)
      .map(digestSkill)

    const decayRisks = [...snap.skills]
      .filter((s) => s.raw - s.p > 0.08)
      .sort((a, b) => b.raw - b.p - (a.raw - a.p))
      .slice(0, 6)
      .map(digestSkill)

    const criticalPaths = findCriticalPaths(snap, skills)

    const stats: InsightStats = {
      computedAt: snap.computedAt,
      evidenceEvents: snap.totals.evidenceEvents,
      evidencedSkills: snap.totals.evidencedSkills,
      universe: snap.totals.universe,
      strongSkills: snap.totals.strongSkills,
      fragileSkills: snap.totals.fragileSkills,
      decayingSkills: snap.totals.decayingSkills,
      velocityPerDay: snap.forecast.velocityPerDay,
      projectedCoverage7d: snap.forecast.projectedCoverage7d,
      projectedCoverage30d: snap.forecast.projectedCoverage30d,
      daysToFullCoverage: snap.forecast.daysToFullCoverage,
      subjectsLit: snap.subjects.length,
      weakestSubjects,
      decayRisks,
    }

    // ---- ONE LLM call for the coach diagnosis ----
    let diagnosis = ''
    let usedLlm = false
    try {
      const zai = await ZAI.create()
      const completion = await withTimeout(
        zai.chat.completions.create({
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: buildUserPayload(stats, weakestSkills, criticalPaths) },
          ],
          thinking: { type: 'disabled' },
          temperature: 0.7,
        }),
        45_000,
        'diagnosis-timeout'
      )
      diagnosis = llmContent(completion).trim()
      if (diagnosis) usedLlm = true
    } catch (err) {
      console.error('[api/twin/insight] LLM call failed, using local fallback:', err)
    }
    if (!diagnosis) {
      diagnosis = fallbackDiagnosis(stats, weakestSkills, criticalPaths)
    }

    const result: InsightResult = {
      diagnosis: diagnosis.slice(0, 24_000),
      criticalPaths,
      weakestSkills,
      stats,
      llm: usedLlm,
    }
    return NextResponse.json(result)
  } catch (err) {
    console.error('[api/twin/insight]', err)
    return NextResponse.json({ error: 'Could not compute the diagnosis.' }, { status: 500 })
  }
}
