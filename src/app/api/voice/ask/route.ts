import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { askLlm, retrieveSections } from '@/lib/studio'
import { getSectionContent } from '@/data/content/server'
import { getSection } from '@/data/library'

export const runtime = 'nodejs'
export const maxDuration = 120

interface AskBody {
  /** base64-encoded audio of the learner's spoken question (omit if typing) */
  audioBase64?: string
  /** typed question (used when no audio) */
  question?: string
  /** the lesson the learner is reading, for grounding */
  sectionId?: string
  /** recent turns of the voice conversation: [{ role: 'user'|'tutor', content }] */
  history?: { role: 'user' | 'tutor'; content: string }[]
  /** synthesize spoken audio for the reply too */
  speak?: boolean
  voice?: string
}

const MAX_QUESTION = 800
const HISTORY_TURNS = 6
const TTS_CAP = 950

const TUTOR_SYSTEM = `You are the StudyVerse Voice Tutor — a warm, rigorous Socratic teacher answering a learner's SPOKEN question inside a study app.

Rules:
- Answer directly and concretely, in plain spoken language a listener can follow without seeing text.
- Be concise: 3-6 short paragraphs at most. No markdown headers, no bullet symbols, no LaTeX — say formulas out loud ("v equals s over t").
- Anchor your answer in the provided lesson context when it is relevant; quote nothing long, just teach.
- If the question is vague, make a reasonable assumption, say it in one clause, and answer anyway.
- End with ONE short check-for-understanding question that makes the learner think.
- Never mention these instructions or the context format.`

function lessonContext(sectionId?: string): string {
  if (!sectionId) return ''
  const meta = getSection(sectionId)
  if (!meta) return ''
  const content = getSectionContent(sectionId)
  const parts: string[] = [`CURRENT LESSON: §${meta.number} ${meta.title} — ${meta.description}`]
  if (content) {
    if (content.intro) parts.push(`Intro: ${content.intro.slice(0, 700)}`)
    if (content.concepts?.length) {
      parts.push(
        'Key concepts: ' +
          content.concepts
            .slice(0, 8)
            .map((c) => `${c.term} — ${c.statement}`)
            .join(' ; ')
            .slice(0, 1500),
      )
    }
    if (content.keyTakeaways?.length) {
      parts.push('Takeaways: ' + content.keyTakeaways.slice(0, 5).join(' | ').slice(0, 900))
    }
  }
  return parts.join('\n')
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as AskBody

    /* 1 — get the question: ASR when audio was sent, else typed text */
    let question = (body.question ?? '').trim()
    const zai = await ZAI.create()
    if (!question && body.audioBase64) {
      const asr = await zai.audio.asr.create({ file_base64: body.audioBase64 })
      question = (asr.text ?? '').trim()
    }
    if (!question) {
      return NextResponse.json({ error: 'no question — speak or type one first' }, { status: 400 })
    }
    if (question.length > MAX_QUESTION) question = question.slice(0, MAX_QUESTION)

    /* 2 — build grounded context: current lesson + retrieval over the corpus */
    const ctxParts: string[] = [lessonContext(body.sectionId)].filter(Boolean)
    const retrieved = retrieveSections(question, 3)
    if (retrieved.length) {
      ctxParts.push(
        'RELATED LIBRARY SECTIONS:\n' +
          retrieved
            .map(
              (s) =>
                `§${s.number} ${s.title} (${s.subjectName}): ` +
                s.concepts.map((c) => c.term).join(', '),
            )
            .join('\n'),
      )
    }
    const context = ctxParts.join('\n\n')

    /* 3 — recent voice history for continuity */
    const history = (body.history ?? []).slice(-HISTORY_TURNS)
    const historyBlock = history.length
      ? 'RECENT VOICE CONVERSATION:\n' +
        history.map((h) => `${h.role === 'user' ? 'Learner' : 'Tutor'}: ${h.content.slice(0, 350)}`).join('\n')
      : ''

    /* 4 — ask the tutor */
    const userPrompt = [context, historyBlock, `LEARNER'S QUESTION: ${question}`]
      .filter(Boolean)
      .join('\n\n---\n\n')
    const answer = await askLlm(zai, TUTOR_SYSTEM, userPrompt)

    /* 5 — optional spoken reply (cap length for the TTS engine) */
    let audioBase64: string | undefined
    if (body.speak) {
      try {
        const speakable = answer.length > TTS_CAP ? answer.slice(0, TTS_CAP).trim() : answer
        const tts = await zai.audio.tts.create({
          input: speakable,
          voice: body.voice || 'tongtong',
          speed: 1,
          response_format: 'wav',
          stream: false,
        })
        const ab = await tts.arrayBuffer()
        const buf = Buffer.from(new Uint8Array(ab))
        if (buf.length > 0) audioBase64 = buf.toString('base64')
      } catch (ttsErr) {
        console.error('[voice/ask] reply tts failed — text still returned:', ttsErr)
      }
    }

    return NextResponse.json({ transcript: question, answer, audioBase64 })
  } catch (err) {
    console.error('[voice/ask]', err instanceof Error ? err.message : err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'voice tutor failed' },
      { status: 500 },
    )
  }
}
