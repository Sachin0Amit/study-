import { NextRequest } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export const runtime = 'nodejs'
export const maxDuration = 60

/**
 * POST /api/judge/review — one LLM call that reviews a learner's judge
 * solution. Returns markdown with **Verdict** / **Complexity Read** /
 * **One Level Deeper** / **Style Notes** (under ~250 words). Falls back to a
 * static checklist-style review if the LLM is unavailable.
 */

interface ReviewBody {
  challengeId?: string
  challengeTitle?: string
  code?: string
  passed?: number
  failed?: number
}

const MAX_CODE = 8000
const REVIEW_TIMEOUT_MS = 55_000

const SYSTEM_PROMPT = [
  "You are a senior software engineer reviewing a learner's JavaScript solution to a short algorithmic challenge.",
  'Be rigorous but warm — never condescending.',
  '',
  'Reply ONLY in markdown with exactly these four sections, each opened by a bold label on its own line:',
  '**Verdict** — 1-2 sentences: does the solution work, and is the approach sound?',
  '**Complexity Read** — the time and space complexity of THEIR code (e.g. O(n) time, O(n) space) with a half-sentence justification.',
  '**One Level Deeper** — one concrete optimization or missed edge case, referencing their actual code. If it is already optimal, name the next technique worth learning instead.',
  '**Style Notes** — at most 3 short bullet points on naming, structure or readability.',
  '',
  'Rules:',
  '- Describe what THEY wrote — never dump a full corrected solution.',
  '- If tests failed, point at the most likely cause before anything else.',
  '- Plain English, no filler, no headings other than the bold labels.',
  '- Keep the whole reply under 250 words.',
].join('\n')

function extractContent(res: unknown): string {
  try {
    const r = res as { choices?: { message?: { content?: unknown } }[] }
    const c = r?.choices?.[0]?.message?.content
    if (typeof c === 'string') return c
    if (Array.isArray(c)) {
      return c
        .map((p) => (typeof p === 'string' ? p : ((p as { text?: string })?.text ?? '')))
        .join('')
    }
  } catch {
    /* fall through */
  }
  return ''
}

/** graceful offline review — same shape as the LLM reply */
function fallbackReview(passed: number, failed: number): string {
  const ok = failed === 0 && passed > 0
  return [
    '**Verdict**',
    ok
      ? `All ${passed} checks passed — the solution works on every tested input. The AI reviewer is offline, so grade yourself against the checklist below.`
      : `${passed} of ${passed + failed} checks passed. The AI reviewer is offline — re-read the failing cases: is it an edge case (empty input, duplicates, off-by-one) or a wrong core idea?`,
    '',
    '**Complexity Read**',
    'Count the passes over the input size n: one loop is O(n), a nested loop is O(n²), sorting is O(n log n). Space is any extra array, map or string you build.',
    '',
    '**One Level Deeper**',
    'Ask what input would break this: empty arrays, single elements, negative numbers, duplicates and extreme values are the usual suspects.',
    '',
    '**Style Notes**',
    '- Name variables after what they hold, not single letters (loop indices excepted).',
    '- Handle edge cases at the top, then write the happy path.',
    '- Remove dead code and console.log calls before calling it done.',
  ].join('\n')
}

function sanitizeCount(v: unknown): number {
  const n = typeof v === 'number' && Number.isFinite(v) ? Math.floor(v) : 0
  return Math.max(0, Math.min(999, n))
}

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as ReviewBody | null
  const code = typeof body?.code === 'string' ? body.code : ''
  if (!body?.challengeTitle?.trim() || !code.trim()) {
    return Response.json(
      { error: 'challengeTitle and code are required' },
      { status: 400 },
    )
  }

  const challengeId = typeof body.challengeId === 'string' ? body.challengeId.slice(0, 100) : ''
  const challengeTitle = body.challengeTitle.trim().slice(0, 200)
  const passed = sanitizeCount(body.passed)
  const failed = sanitizeCount(body.failed)
  const trimmedCode = code.slice(0, MAX_CODE)

  const userPrompt = [
    `Challenge: ${challengeTitle}${challengeId ? ` (id: ${challengeId})` : ''}`,
    `Tests: ${passed} passed, ${failed} failed.`,
    '',
    'Solution code:',
    '```javascript',
    trimmedCode,
    '```',
  ].join('\n')

  try {
    const zai = await ZAI.create()
    let timer: ReturnType<typeof setTimeout> | undefined
    const timeout = new Promise<never>((_, reject) => {
      timer = setTimeout(() => reject(new Error('review-timeout')), REVIEW_TIMEOUT_MS)
    })
    const completion = await Promise.race([
      zai.chat.completions.create({
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt },
        ],
        thinking: { type: 'disabled' },
      }),
      timeout,
    ])
    if (timer) clearTimeout(timer)
    const review = extractContent(completion).trim()
    if (!review) throw new Error('empty review')
    return Response.json({ review })
  } catch (err) {
    console.error('[api/judge/review]', err)
    return Response.json({ review: fallbackReview(passed, failed), fallback: true })
  }
}
