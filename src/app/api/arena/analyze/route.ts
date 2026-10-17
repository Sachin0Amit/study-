import { NextRequest } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

/**
 * X3 Pro — POST /api/arena/analyze
 *
 * Post-match analysis for arena battles (human or bot opponents). ONE LLM
 * call turns the battle summary the frontend collected (per-question topic,
 * correctness + latency for both sides, result, ELO delta) into a coach-style
 * markdown breakdown. Falls back to a locally computed analysis if the LLM
 * fails or times out, so the button always produces something useful.
 */

export const runtime = 'nodejs'
export const maxDuration = 60

const LLM_TIMEOUT_MS = 52_000
const MAX_QUESTIONS = 30

/* ------------------------------------------------------------------ */
/*  Tiny helpers (same semantics as lib/syllabus — kept local so this  */
/*  route does not pull the content library into its bundle)           */
/* ------------------------------------------------------------------ */

function llmContent(res: unknown): string {
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
    /* ignore */
  }
  return ''
}

function withTimeout<T>(p: Promise<T>, ms: number, label = 'timeout'): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(label)), ms)
    p.then(
      (v) => {
        clearTimeout(t)
        resolve(v)
      },
      (e) => {
        clearTimeout(t)
        reject(e)
      }
    )
  })
}

/* ------------------------------------------------------------------ */
/*  Payload shapes                                                     */
/* ------------------------------------------------------------------ */

interface AnalyzeQuestion {
  topic: string
  subject: string
  youCorrect: boolean | null
  yourLatencySec: number | null
  opponentCorrect: boolean | null
  opponentLatencySec: number | null
}

interface NormalizedSummary {
  opponent: string
  bot: boolean
  result: 'win' | 'loss' | 'draw'
  yourPoints: number | null
  oppPoints: number | null
  eloDelta: number | null
  avgTimeSec: number | null
  questions: AnalyzeQuestion[]
}

function str(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

function boolOrNull(v: unknown): boolean | null {
  return typeof v === 'boolean' ? v : null
}

function numOrNull(v: unknown): number | null {
  return typeof v === 'number' && Number.isFinite(v) ? v : null
}

function normalize(raw: Record<string, unknown>): NormalizedSummary | null {
  const questionsRaw = Array.isArray(raw.questions) ? raw.questions : []
  const questions: AnalyzeQuestion[] = questionsRaw.slice(0, MAX_QUESTIONS).map((q) => {
    const o = (q ?? {}) as Record<string, unknown>
    return {
      topic: str(o.topic, 80) || str(o.title, 80) || 'Untitled topic',
      subject: str(o.subject, 40),
      youCorrect: boolOrNull(o.youCorrect),
      yourLatencySec: numOrNull(o.yourLatencySec),
      opponentCorrect: boolOrNull(o.opponentCorrect),
      opponentLatencySec: numOrNull(o.opponentLatencySec),
    }
  })

  let result = str(raw.result, 8).toLowerCase()
  if (result !== 'win' && result !== 'loss' && result !== 'draw') {
    const yp = numOrNull(raw.yourPoints)
    const op = numOrNull(raw.oppPoints)
    if (yp === null || op === null) return null
    result = yp > op ? 'win' : yp < op ? 'loss' : 'draw'
  }

  return {
    opponent: str(raw.opponent, 40) || 'your opponent',
    bot: raw.bot === true,
    result: result as NormalizedSummary['result'],
    yourPoints: numOrNull(raw.yourPoints),
    oppPoints: numOrNull(raw.oppPoints),
    eloDelta: numOrNull(raw.eloDelta),
    avgTimeSec: numOrNull(raw.avgTimeSec),
    questions,
  }
}

/* ------------------------------------------------------------------ */
/*  Stats + prompt building                                            */
/* ------------------------------------------------------------------ */

interface Stats {
  youCorrect: number
  oppCorrect: number
  answered: number
  total: number
  avgLatency: number | null
  avgCorrectLatency: number | null
  avgWrongLatency: number | null
  weakTopics: string[]
  strongTopics: string[]
  oppFaster: boolean | null
}

function computeStats(s: NormalizedSummary): Stats {
  const answered = s.questions.filter((q) => q.youCorrect !== null)
  const lat = answered.filter((q) => q.yourLatencySec !== null)
  const avg = (xs: number[]) => (xs.length ? Math.round((xs.reduce((a, b) => a + b, 0) / xs.length) * 10) / 10 : null)
  const youLat = lat.map((q) => q.yourLatencySec as number)
  const oppLat = s.questions
    .filter((q) => q.opponentLatencySec !== null)
    .map((q) => q.opponentLatencySec as number)
  const yourAvgLatency = avg(youLat)
  const oppAvgLatency = avg(oppLat)

  const weak = new Map<string, number>()
  const strong = new Map<string, number>()
  for (const q of s.questions) {
    if (q.youCorrect === false) weak.set(q.topic, (weak.get(q.topic) ?? 0) + 1)
    else if (q.youCorrect === true) strong.set(q.topic, (strong.get(q.topic) ?? 0) + 1)
  }
  const sortTopics = (m: Map<string, number>) =>
    [...m.entries()].sort((a, b) => b[1] - a[1]).map(([t, n]) => (n > 1 ? `${t} (×${n})` : t))

  return {
    youCorrect: s.questions.filter((q) => q.youCorrect === true).length,
    oppCorrect: s.questions.filter((q) => q.opponentCorrect === true).length,
    answered: answered.length,
    total: s.questions.length,
    avgLatency: yourAvgLatency,
    avgCorrectLatency: avg(lat.filter((q) => q.youCorrect === true).map((q) => q.yourLatencySec as number)),
    avgWrongLatency: avg(lat.filter((q) => q.youCorrect === false).map((q) => q.yourLatencySec as number)),
    weakTopics: sortTopics(weak),
    strongTopics: sortTopics(strong),
    oppFaster:
      yourAvgLatency !== null && oppAvgLatency !== null ? yourAvgLatency > oppAvgLatency : null,
  }
}

const SYSTEM_PROMPT = [
  'You are the Arena Analyst — a sharp, encouraging coach who reviews 1-v-1 quiz battle replays for a study platform.',
  'You receive a machine-readable battle summary and write a punchy post-match breakdown in GitHub-flavored markdown.',
  '',
  'Rules:',
  '- Use EXACTLY these five sections as "### " headings, in this order:',
  '  ### Verdict — one or two lines reading the result.',
  '  ### Speed vs Accuracy — what the latency pattern says (rushing wrong answers vs stalling), quoting the numbers.',
  '  ### Topic Damage Report — which topics cost the match, worst first (skip the section body with a single sentence if you lost nothing).',
  '  ### Counter-Punch Drills — EXACTLY 3 concrete drills, numbered 1-3, each 1-2 lines, tied to the weak topics and the speed pattern.',
  '  ### Next Opponent Read — what to train before the next battle plus one tactical tip.',
  '- Be specific: quote the actual topics, seconds and counts you were given. Never invent data.',
  '- Never mention any specific exam or brand names.',
  '- No tables — use lists only. Keep the whole reply under 350 words. Motivating, direct, zero fluff.',
].join('\n')

function buildUserPrompt(s: NormalizedSummary, st: Stats): string {
  const lines: string[] = []
  lines.push('BATTLE SUMMARY')
  lines.push(
    `Result: ${s.result}` +
      (s.yourPoints !== null && s.oppPoints !== null ? ` (you ${s.yourPoints} : ${s.oppPoints} opponent)` : '') +
      ` vs "${s.opponent}"${s.bot ? ' (a practice bot)' : ''}`
  )
  if (s.eloDelta !== null) lines.push(`ELO change: ${s.eloDelta >= 0 ? '+' : ''}${s.eloDelta}`)
  if (st.total > 0) lines.push(`Correct answers: you ${st.youCorrect}/${st.total}, opponent ${st.oppCorrect}/${st.total}.`)
  if (st.avgLatency !== null) {
    lines.push(`Your average answer time: ${st.avgLatency}s.`)
    if (st.avgCorrectLatency !== null && st.avgWrongLatency !== null) {
      lines.push(
        `Your correct answers averaged ${st.avgCorrectLatency}s; wrong answers averaged ${st.avgWrongLatency}s.`
      )
    }
    if (st.oppFaster !== null) {
      lines.push(st.oppFaster ? 'The opponent was consistently faster than you.' : 'You were consistently faster than the opponent.')
    }
  } else if (s.avgTimeSec !== null) {
    lines.push(`Your average answer time: ${s.avgTimeSec}s.`)
  }
  if (st.strongTopics.length) lines.push(`Topics you answered correctly: ${st.strongTopics.slice(0, 8).join('; ')}.`)
  lines.push('')
  lines.push('PER QUESTION:')
  s.questions.forEach((q, i) => {
    const you = q.youCorrect === null ? 'no answer' : q.youCorrect ? 'correct' : 'WRONG'
    const youT = q.yourLatencySec !== null ? ` ${q.yourLatencySec}s` : ''
    const opp = q.opponentCorrect === null ? 'no answer' : q.opponentCorrect ? 'correct' : 'wrong'
    const oppT = q.opponentLatencySec !== null ? ` ${q.opponentLatencySec}s` : ''
    const topic = [q.subject, q.topic].filter(Boolean).join(' · ')
    lines.push(`${i + 1}. [${topic}] you: ${you}${youT} | opponent: ${opp}${oppT}`)
  })
  lines.push('')
  lines.push('Write the five-section analysis now.')
  return lines.join('\n')
}

/* ------------------------------------------------------------------ */
/*  Deterministic fallback (LLM down / rate-limited / timeout)         */
/* ------------------------------------------------------------------ */

function fallbackAnalysis(s: NormalizedSummary, st: Stats): string {
  const resultLine =
    s.result === 'win'
      ? `You took the win — ${st.youCorrect}/${st.total} correct against ${st.oppCorrect} for ${s.opponent}. Bank it, then hunt the leaks below.`
      : s.result === 'draw'
        ? `Dead even — ${st.youCorrect}/${st.total} correct each. Matches like this are decided by speed and one or two topics, not knowledge volume.`
        : `This one got away — ${st.youCorrect}/${st.total} correct against ${st.oppCorrect} for ${s.opponent}. Here is where it slipped.`

  let speed = 'Not enough timing data to read your pace — answer a few more battles to unlock this read.'
  if (st.avgLatency !== null) {
    if (st.avgCorrectLatency !== null && st.avgWrongLatency !== null && st.avgWrongLatency < st.avgCorrectLatency - 0.5) {
      speed = `You averaged ${st.avgLatency}s overall, but wrong answers came ${st.avgWrongLatency}s — faster than your correct ones (${st.avgCorrectLatency}s). You are rushing the uncertain ones; a two-second doubt-check would flip several of them.`
    } else if (st.avgCorrectLatency !== null && st.avgWrongLatency !== null && st.avgWrongLatency > st.avgCorrectLatency + 0.5) {
      speed = `You averaged ${st.avgLatency}s overall, and wrong answers were your slowest (${st.avgWrongLatency}s vs ${st.avgCorrectLatency}s when correct). Those were knowledge gaps, not nerves — the time went nowhere.`
    } else {
      speed = `Steady tempo: ${st.avgLatency}s average, consistent whether right or wrong (${st.avgCorrectLatency ?? '—'}s correct / ${st.avgWrongLatency ?? '—'}s wrong).${
        st.oppFaster ? ' The opponent simply answered faster — claw back speed bonus points.' : ' Your speed held up against the opponent.'
      }`
    }
  }

  const damage = st.weakTopics.length
    ? `Costliest topics: ${st.weakTopics.slice(0, 5).join(', ')}. These are where the points bled — each miss also handed over speed-bonus margin.`
    : 'Clean sheet — no topic lost you points this match. Push into harder opponents before this becomes a comfort zone.'

  const drills: string[] = []
  const t1 = st.weakTopics[0]
  const t2 = st.weakTopics[1]
  if (t1) drills.push(`Run a focused 10-question drill on ${t1.split(' (')[0]} in the exam trainer tonight — re-read the lesson first, then answer without notes.`)
  if (t2 && t2 !== t1) drills.push(`Do a recall pass on ${t2.split(' (')[0]}: skim the lesson, close it, and rewrite the key idea from memory.`)
  if (drills.length < 3) {
    drills.push(
      st.avgLatency !== null && st.avgLatency > 6
        ? 'Practice a 5-second cap: for each practice question, commit to an answer within five seconds, then verify — speed points win tight battles.'
        : 'Add one timed mini-set (5 questions, 15s each) to your warm-up so the battle clock feels slow by comparison.'
    )
  }
  while (drills.length < 3) drills.push('Replay this battle type tomorrow and beat your own correct-count before raising the difficulty.')

  const next =
    s.result === 'loss' && st.oppFaster
      ? `Next opponent read: you matched or beat them on knowledge — the clock beat you. Train the two drills above plus the 5-second cap, then challenge the same level again.`
      : st.weakTopics.length
        ? `Next opponent read: shore up ${st.weakTopics[0].split(' (')[0]} before queueing again — opponents at your level will find it. Tactical tip: answer the questions you know first-fast to bank speed points, and let the doubt-checks spend time only where it pays.`
        : `Next opponent read: you are ready for a tougher lobby. Tactical tip: bank speed points on the questions you know cold, and bank thinking time on the two hardest.`

  return [
    '### Verdict',
    resultLine,
    '',
    '### Speed vs Accuracy',
    speed,
    '',
    '### Topic Damage Report',
    damage,
    '',
    '### Counter-Punch Drills',
    ...drills.map((d, i) => `${i + 1}. ${d}`),
    '',
    '### Next Opponent Read',
    next,
  ].join('\n')
}

/* ------------------------------------------------------------------ */
/*  Route                                                              */
/* ------------------------------------------------------------------ */

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as {
    deviceId?: unknown
    battleSummary?: unknown
  } | null

  if (!body || typeof body.deviceId !== 'string' || body.deviceId.trim().length === 0) {
    return Response.json({ error: 'deviceId and battleSummary are required' }, { status: 400 })
  }
  if (typeof body.battleSummary !== 'object' || body.battleSummary === null) {
    return Response.json({ error: 'deviceId and battleSummary are required' }, { status: 400 })
  }

  const summary = normalize(body.battleSummary as Record<string, unknown>)
  if (!summary) {
    return Response.json({ error: 'battleSummary could not be read' }, { status: 400 })
  }

  const stats = computeStats(summary)

  try {
    const zai = await ZAI.create()
    const completion = await withTimeout(
      zai.chat.completions.create({
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: buildUserPrompt(summary, stats) },
        ],
        thinking: { type: 'disabled' },
      }),
      LLM_TIMEOUT_MS,
      'llm-timeout'
    )
    const analysis = llmContent(completion).trim()
    if (analysis) return Response.json({ analysis })
    throw new Error('empty analysis')
  } catch (err) {
    console.error('[api/arena/analyze]', err)
    return Response.json({ analysis: fallbackAnalysis(summary, stats) })
  }
}
