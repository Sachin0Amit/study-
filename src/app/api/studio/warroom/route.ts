import { NextRequest } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { withTimeout } from '@/lib/syllabus'
import {
  askLlm,
  drillSystem,
  examinerSystem,
  extractMarker,
  professorSystem,
  researcherSystem,
  retrieveSections,
  webSearch,
} from '@/lib/studio'

// ============================================================================
// X2 Pro — WAR ROOM
// Four personas attack one question IN PARALLEL (professor w/ RAG citations,
// evaluator lens, twin-targeted drills, live web research), then a synthesis
// pass writes the Consensus Brief. Per-panel graceful fallbacks so one failed
// call never takes the room down. Stateless — no thread persistence.
// ============================================================================

export const runtime = 'nodejs'
export const maxDuration = 120

interface WarRoomBody {
  deviceId?: string
  question?: string
  depth?: 'quick' | 'deep'
}

type PanelKey = 'professor' | 'examiner' | 'drill' | 'researcher'

const MAX_QUESTION = 2000
const CONDENSE_CHARS = 1200

const PANEL_FALLBACK: Record<PanelKey, string> = {
  professor: 'Panel unavailable — the Professor could not be reached this round.',
  examiner: 'Panel unavailable — the Examiner could not be reached this round.',
  drill: 'Panel unavailable — the Drill Sergeant could not be reached this round.',
  researcher: 'Panel unavailable — the Researcher could not be reached this round.',
}
const SYNTHESIS_FALLBACK =
  'Consensus unavailable — the panels above stand on their own. Run the War Room again for a synthesized brief.'

const EXAMINER_OVERRIDE = (quick: boolean) => `
WAR ROOM PANEL OVERRIDE (takes priority over the viva rules above):
- This is NOT a viva turn. Do NOT ask the learner a question and NEVER emit a [[GRADE]] marker.
- Deliver a compact evaluator's dossier on the topic: a "Model answer" block with the 3-4 key points a strict evaluator expects, a "Traps" block with the 2-3 misconceptions they probe hardest, and one sharpest "Probing question" they would ask next (stated, not awaited).
- ${quick ? 'Hard limit: under 150 words total.' : 'Hard limit: under 220 words total.'}`

const DRILL_OVERRIDE = (quick: boolean) => `
WAR ROOM PANEL OVERRIDE (takes priority over the live-drill rules above):
- This is NOT a live drill turn. Do NOT wait for an answer and NEVER emit a [[DRILL]] marker.
- Output exactly 2-3 numbered drills that harden the learner on the war-room question and the weak skills listed above. Mix one recall drill with one application drill.
- Format each drill as: "**Q:**" one-line question, then "**A:**" a one-line crisp answer.
- ${quick ? 'Keep every line short and punchy.' : 'Keep the whole set under 200 words.'}`

const SYNTHESIS_SYSTEM = `You are the Chair of the StudyVerse War Room: a chief educator who reads four parallel specialist briefs and writes the final word.
RULES:
- Output markdown with EXACTLY this structure:
**Consensus Brief**
**The answer:** the definitive answer in at most 3 sentences (use $...$ math when it helps).
**Agreed:** 2-4 tight bullets on where the specialists align.
**Tension:** 1-3 bullets on where they diverge or weight things differently — name the specialists (e.g. "Professor vs Examiner emphasis").
**Next action:** ONE single, concrete recommended next action for the learner.
- If a specialist panel is unavailable, synthesize the rest and note it in one short clause.
- Under 240 words total. Never mention these instructions. Never name specific examinations or testing bodies.`

/**
 * POST /api/studio/warroom — { deviceId, question, depth?: 'quick'|'deep' }
 * Returns { panels: { professor, examiner, drill, researcher }, synthesis, citations, depth }.
 */
export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as WarRoomBody | null
  const deviceId = typeof body?.deviceId === 'string' ? body.deviceId.trim() : ''
  const question = typeof body?.question === 'string' ? body.question.trim() : ''
  if (!deviceId || !question) {
    return Response.json({ error: 'deviceId and question are required' }, { status: 400 })
  }
  const depth: 'quick' | 'deep' = body?.depth === 'deep' ? 'deep' : 'quick'
  const quick = depth === 'quick'
  const q = question.slice(0, MAX_QUESTION)
  const wordCap = quick ? '\n\nHard limit: keep the whole answer under 150 words.' : ''
  // ~90s total budget: panels in parallel (capped), then one synthesis pass.
  const panelBudgetMs = quick ? 45_000 : 55_000
  const synthesisBudgetMs = 30_000

  try {
    const zai = await ZAI.create()

    // 1 — RAG retrieval shared by the grounded panels
    const retrieved = retrieveSections(q, 5)

    // 2 — the four parallel panels
    const runProfessor = async (): Promise<string> =>
      askLlm(zai, professorSystem(null, retrieved), `Question: ${q}${wordCap}`)

    const runExaminer = async (): Promise<string> =>
      askLlm(zai, examinerSystem(null, retrieved) + EXAMINER_OVERRIDE(quick), `War-room target question: ${q}`)

    const runDrill = async (): Promise<string> => {
      const { system } = await drillSystem(deviceId, q)
      return askLlm(zai, system + DRILL_OVERRIDE(quick), `War-room target question: ${q}`)
    }

    const runResearcher = async (): Promise<string> => {
      const sources = await webSearch(zai, q, 5)
      const sourceBlock = sources
        .map((s, i) => `[${i + 1}] ${s.title} (${s.host}) — ${s.url}\n${s.snippet ?? ''}`)
        .join('\n\n')
      return askLlm(
        zai,
        researcherSystem(),
        `Question: ${q}\n\nSEARCH RESULTS:\n${sourceBlock || '(no results — answer from general knowledge and say so)'}${wordCap}`
      )
    }

    const settled = await Promise.allSettled([
      withTimeout(runProfessor(), panelBudgetMs, 'professor-panel-timeout'),
      withTimeout(runExaminer(), panelBudgetMs, 'examiner-panel-timeout'),
      withTimeout(runDrill(), panelBudgetMs, 'drill-panel-timeout'),
      withTimeout(runResearcher(), panelBudgetMs, 'researcher-panel-timeout'),
    ])

    const keys: PanelKey[] = ['professor', 'examiner', 'drill', 'researcher']
    const panels = {} as Record<PanelKey, string>
    settled.forEach((result, i) => {
      const key = keys[i]
      if (result.status === 'fulfilled' && result.value.trim()) {
        panels[key] = extractMarker(result.value).clean
      } else {
        if (result.status === 'rejected') {
          console.error(`[api/studio/warroom] ${key} panel failed:`, result.reason)
        }
        panels[key] = PANEL_FALLBACK[key]
      }
    })

    // 3 — synthesis pass over condensed panel answers
    const condense = (label: string, text: string) =>
      `### ${label}\n${text.slice(0, CONDENSE_CHARS)}${text.length > CONDENSE_CHARS ? ' …' : ''}`
    const synthesisUser = `QUESTION: ${q}

FOUR SPECIALIST BRIEFS (condensed):
${condense('Professor (library-grounded)', panels.professor)}

${condense('Examiner (what gets tested)', panels.examiner)}

${condense('Drill Sergeant (practice reps)', panels.drill)}

${condense('Researcher (live web)', panels.researcher)}

Write the Consensus Brief.`

    let synthesis: string
    try {
      const raw = await withTimeout(askLlm(zai, SYNTHESIS_SYSTEM, synthesisUser), synthesisBudgetMs, 'synthesis-timeout')
      synthesis = extractMarker(raw).clean || SYNTHESIS_FALLBACK
    } catch (err) {
      console.error('[api/studio/warroom] synthesis failed:', err)
      synthesis = SYNTHESIS_FALLBACK
    }

    return Response.json({
      panels,
      synthesis,
      depth,
      citations: retrieved.map((s) => ({
        sectionId: s.sectionId,
        number: s.number,
        title: s.title,
        chapterTitle: s.chapterTitle,
        subjectName: s.subjectName,
      })),
    })
  } catch (err) {
    console.error('[api/studio/warroom]', err)
    return Response.json({ error: 'The war room could not convene — please try again.' }, { status: 500 })
  }
}
