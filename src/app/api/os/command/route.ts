import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { askLlm } from '@/lib/studio'
import { resolveSubjects } from '@/lib/remix'
import { getSection } from '@/data/library'

export const runtime = 'nodejs'

// ============================================================================
// X10 — STUDYVERSE OS COMMAND LAYER
// Natural language → structured intent → frontend action. The ⌘K palette and
// the briefing card route through here.
// ============================================================================

/** the closed set of actions the OS can execute (frontend interprets these) */
type OsAction =
  | { action: 'open'; view: string; bookId?: string; chapterId?: string; sectionId?: string }
  | { action: 'remix'; goal: string; horizonDays?: number; subjectId?: string | null }
  | { action: 'studio'; persona: string; message?: string }
  | { action: 'exam'; chapterId?: string }
  | { action: 'flashcards'; chapterId?: string; examMisses?: boolean }
  | { action: 'arena' }
  | { action: 'twin' }
  | { action: 'paper-dna' }
  | { action: 'palace'; sectionId?: string }
  | { action: 'labs' }
  | { action: 'syllabus' }
  | { action: 'progress' }
  | { action: 'search'; query: string }
  | { action: 'briefing' }
  | { action: 'unknown'; reply: string }

const COMMAND_SYSTEM = `You are the StudyVerse OS intent router. Turn the user's natural-language request into ONE structured action JSON.

Available actions (respond with ONLY the JSON for the best match):
{"action":"open","view":"library|playground|progress|formulas|syllabus"} — generic navigation
{"action":"remix","goal":"<their goal in their words>","horizonDays":<number if they said days/weeks>,"subjectId":null} — they want a study plan / schedule / "prepare me for X in N days"
{"action":"studio","persona":"professor|examiner|drill|planner|researcher","message":"<their question if any>"} — they want to ask/learn/viva/drill
{"action":"exam","chapterId":null} — they want to test themselves / mock test / timed quiz
{"action":"flashcards","chapterId":null,"examMisses":false} — they want flashcards / spaced repetition / review cards
{"action":"arena"} — they want multiplayer / battle / compete / race
{"action":"twin"} — they want to see their knowledge model / mastery / brain scan / what they know
{"action":"paper-dna"} — they want to analyze past papers / question papers / predict topics
{"action":"palace","sectionId":null} — they want a memory palace / mnemonic journey
{"action":"labs"} — they want the virtual labs / simulators / code judge
{"action":"search","query":"<what to find>"} — they want to find a topic/lesson
{"action":"briefing"} — they want today's briefing / mission / status
{"action":"unknown","reply":"<one friendly sentence asking what they meant>"} — nothing matched

Rules: horizonDays from "N days/weeks" (weeks×7), default null. Keep goal/message verbatim from the user when possible. JSON ONLY, no commentary.`

/** POST /api/os/command — body { text } → OsAction */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    const text = typeof body?.text === 'string' ? body.text.trim().slice(0, 500) : ''
    if (!text) {
      return NextResponse.json({ action: 'unknown', reply: 'Say or type a command.' })
    }

    // ---- fast paths first (no LLM): exact keywords ----
    const t = text.toLowerCase()
    const fast: [RegExp, OsAction][] = [
      [/^(home|library|catalog)$/, { action: 'open', view: 'library' }],
      [/^(labs?|simulators?)$/, { action: 'labs' }],
      [/^(arena|battle|multiplayer)$/, { action: 'arena' }],
      [/^(twin|brain ?scan|mastery)$/, { action: 'twin' }],
      [/^(briefing|mission|today)$/, { action: 'briefing' }],
      [/^(papers?|paper ?dna|analy[sz]e papers)$/, { action: 'paper-dna' }],
      [/^(progress|dashboard|stats)$/, { action: 'progress' }],
      [/^(syllabus|mapper)$/, { action: 'syllabus' }],
      [/^(flashcards?|cards?|srs)$/, { action: 'flashcards' }],
      [/^(exam|test|mock)$/, { action: 'exam' }],
    ]
    for (const [re, action] of fast) {
      if (re.test(t)) return NextResponse.json(action)
    }

    // direct lesson deep link ("rosen-ch1-s1" etc.)
    const sectionId = t.match(/\b([a-z]{2,10}(?:-[a-z0-9]+){1,3}-s\d{1,2})\b/)
    if (sectionId && getSection(sectionId[1])) {
      return NextResponse.json({ action: 'open', view: 'lesson', sectionId: sectionId[1] })
    }

    // subject mention without other verbs → open that subject's book
    const subjectHit = resolveSubjects(text)[0]
    if (subjectHit && t.split(/\s+/).length <= 5 && !/\b(plan|prepare|study|remix|drill|test|exam)\b/.test(t)) {
      return NextResponse.json({ action: 'remix', goal: text, subjectId: subjectHit })
    }

    // ---- LLM routing ----
    try {
      const zai = await ZAI.create()
      const raw = await askLlm(zai, COMMAND_SYSTEM, text)
      const jsonStart = raw.indexOf('{')
      const jsonEnd = raw.lastIndexOf('}')
      if (jsonStart >= 0 && jsonEnd > jsonStart) {
        const parsed = JSON.parse(raw.slice(jsonStart, jsonEnd + 1))
        if (parsed && typeof parsed.action === 'string') {
          // sanitize to the closed action set
          const allowed = new Set([
            'open', 'remix', 'studio', 'exam', 'flashcards', 'arena', 'twin',
            'paper-dna', 'palace', 'labs', 'syllabus', 'progress', 'search', 'briefing', 'unknown',
          ])
          if (allowed.has(parsed.action)) {
            return NextResponse.json(sanitize(parsed))
          }
        }
      }
    } catch {
      // fall through to heuristic
    }

    // ---- heuristic fallback ----
    if (/\b(plan|schedule|prepare|roadmap|days|weeks)\b/.test(t)) {
      return NextResponse.json({ action: 'remix', goal: text })
    }
    if (/\b(ask|explain|why|how|what|doubt|question|viva)\b/.test(t)) {
      return NextResponse.json({ action: 'studio', persona: 'professor', message: text })
    }
    if (/\b(find|search|locate|show me)\b/.test(t)) {
      return NextResponse.json({ action: 'search', query: text })
    }
    return NextResponse.json({
      action: 'unknown',
      reply: 'I can plan, teach, test, analyze papers, or run labs — what would you like?',
    })
  } catch (err) {
    console.error('[api/os/command]', err)
    return NextResponse.json({ action: 'unknown', reply: 'The OS hiccuped — try again.' })
  }
}

function sanitize(parsed: Record<string, unknown>): OsAction {
  const action = String(parsed.action)
  switch (action) {
    case 'remix':
      return {
        action,
        goal: typeof parsed.goal === 'string' ? parsed.goal.slice(0, 200) : 'Study plan',
        horizonDays:
          typeof parsed.horizonDays === 'number' ? Math.min(60, Math.max(3, Math.round(parsed.horizonDays))) : undefined,
        subjectId: null,
      }
    case 'studio': {
      const persona = ['professor', 'examiner', 'drill', 'planner', 'researcher'].includes(String(parsed.persona))
        ? String(parsed.persona)
        : 'professor'
      return {
        action,
        persona,
        message: typeof parsed.message === 'string' ? parsed.message.slice(0, 500) : undefined,
      }
    }
    case 'search':
      return { action, query: typeof parsed.query === 'string' ? parsed.query.slice(0, 200) : '' }
    case 'unknown':
      return {
        action,
        reply: typeof parsed.reply === 'string' ? parsed.reply.slice(0, 300) : 'Could you rephrase that?',
      }
    case 'palace':
      return { action, sectionId: typeof parsed.sectionId === 'string' ? parsed.sectionId : undefined }
    case 'flashcards':
      return { action, examMisses: parsed.examMisses === true }
    default:
      return { action } as OsAction
  }
}
