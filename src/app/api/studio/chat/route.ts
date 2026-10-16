import { NextRequest } from 'next/server'
import { db } from '@/lib/db'
import { SSE_HEADERS, sseStream } from '@/lib/syllabus'
import {
  DEBATE_A_SYSTEM,
  DEBATE_B_SYSTEM,
  PERSONA_META,
  askLlm,
  drillSystem,
  examinerSystem,
  extractMarker,
  parseStyleCounts,
  plannerSystem,
  professorSystem,
  resolveSkillKey,
  retrieveSections,
  researcherSystem,
  roundtablePersonaSystem,
  threadTitleFrom,
  webSearch,
  type Persona,
  type RetrievedSection,
  type StudioMode,
} from '@/lib/studio'
import { recordTwinEvent } from '@/lib/twin'
import ZAI from 'z-ai-web-dev-sdk'

export const runtime = 'nodejs'
export const maxDuration = 120

interface ChatBody {
  threadId?: string
  deviceId?: string
  message?: string
  persona?: Persona
  mode?: StudioMode
  subjectHint?: string | null
}

const MAX_MESSAGE = 4000
const HISTORY_TURNS = 8

/** chunk a completed reply into word-batches for the live SSE feel */
function chunkify(text: string): string[] {
  const words = text.split(/(\s+)/)
  const chunks: string[] = []
  let buf = ''
  for (const w of words) {
    buf += w
    if (buf.length >= 18) {
      chunks.push(buf)
      buf = ''
    }
  }
  if (buf) chunks.push(buf)
  return chunks
}

/**
 * POST /api/studio/chat — one consultation turn, streamed over SSE.
 * Events: `stage` {label} · `citations` [...] · `sources` [...] ·
 *         `delta` {persona?, text} · `done` {messages:[saved], twinEvents:n} · `error`
 */
export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as ChatBody | null
  if (!body?.threadId || !body?.deviceId || !body?.message?.trim()) {
    return Response.json({ error: 'threadId, deviceId and message are required' }, { status: 400 })
  }
  const message = body.message.trim().slice(0, MAX_MESSAGE)
  const persona: Persona =
    body.persona && body.persona in PERSONA_META ? body.persona : 'professor'
  const mode: StudioMode = body.mode === 'debate' || body.mode === 'roundtable' ? body.mode : 'chat'

  const thread = await db.studioThread.findUnique({ where: { id: body.threadId } })
  if (!thread || thread.deviceId !== body.deviceId) {
    return Response.json({ error: 'Thread not found' }, { status: 404 })
  }

  const history = await db.studioMessage.findMany({
    where: { threadId: thread.id },
    orderBy: { createdAt: 'asc' },
  })

  const sse = sseStream()
  const send = (event: string, data: unknown) => sse.send(event, data)

  void (async () => {
    let settled = false
    const finish = (payload: Record<string, unknown>) => {
      if (settled) return
      settled = true
      send('done', payload)
      sse.close()
    }
    const fail = (msg: string) => {
      if (settled) return
      settled = true
      send('error', { error: msg })
      sse.close()
    }

    try {
      const zai = await ZAI.create()
      const savedIds: string[] = []
      let twinEvents = 0

      // save the user message
      const userMsg = await db.studioMessage.create({
        data: { threadId: thread.id, deviceId: thread.deviceId, role: 'user', content: message },
      })
      savedIds.push(userMsg.id)

      // transcript for multi-turn personas (compact)
      const transcript = history
        .slice(-HISTORY_TURNS * 2)
        .map((m) => `${m.role === 'user' ? 'Learner' : m.persona ?? 'Teacher'}: ${m.content.slice(0, 700)}`)
        .join('\n')

      const citations: RetrievedSection[] = []

      // ================================================== CHAT (all personas)
      if (mode === 'chat') {
        send('stage', { label: `${PERSONA_META[persona].label} is thinking` })

        let system: string
        let user: string
        let recordKey: string | null = null

        if (persona === 'professor') {
          const retrieved = retrieveSections(message, 5)
          citations.push(...retrieved)
          if (retrieved.length) send('citations', retrieved)
          system = professorSystem(thread.style, retrieved)
          user = transcript ? `${transcript}\n\nLearner: ${message}` : message
        } else if (persona === 'examiner') {
          const target = thread.targetSkill
            ? `§${thread.title}` // title may carry the skill name
            : null
          const retrieved = retrieveSections(target ?? message, 4)
          citations.push(...retrieved)
          system = examinerSystem(thread.targetSkill, retrieved)
          user = transcript ? `${transcript}\n\nLearner: ${message}` : message
          recordKey = resolveSkillKey(thread.targetSkill, message)
        } else if (persona === 'drill') {
          const { system: drillSys, targets } = await drillSystem(
            thread.deviceId,
            body.subjectHint ?? message
          )
          system = drillSys
          user = message
          recordKey = targets[0]?.key ?? null
          if (recordKey) send('citations', [])
        } else if (persona === 'planner') {
          const { system: plannerSys, user: plannerUser } = await plannerSystem(thread.deviceId)
          system = plannerSys
          user = `${plannerUser}\n\nLearner adds: ${message}`
        } else {
          // researcher — live web
          send('stage', { label: 'Researcher is searching the web' })
          const sources = await webSearch(zai, message, 6)
          send('sources', sources)
          system = researcherSystem()
          const sourceBlock = sources
            .map((s, i) => `[${i + 1}] ${s.title} (${s.host}) — ${s.url}\n${s.snippet ?? ''}`)
            .join('\n\n')
          user = `Question: ${message}\n\nSEARCH RESULTS:\n${sourceBlock || '(no results — answer from general knowledge and say so)'}`
        }

        const reply = await askLlm(zai, system, user)
        const { clean, grade, drill } = extractMarker(reply)

        // stream the reply in chunks for the live feel
        for (const chunk of chunkify(clean)) {
          send('delta', { persona, text: chunk })
          await new Promise((r) => setTimeout(r, 24))
        }

        // evidence into the twin from graded personas
        if (recordKey && persona === 'examiner' && grade !== undefined) {
          await recordTwinEvent({
            deviceId: thread.deviceId,
            skillKey: recordKey,
            kind: 'studio',
            correct: grade >= 3,
            weight: grade >= 4 ? 2 : 1,
            meta: { persona, grade },
          })
          twinEvents++
        }
        if (recordKey && persona === 'drill' && drill !== undefined) {
          await recordTwinEvent({
            deviceId: thread.deviceId,
            skillKey: recordKey,
            kind: 'studio',
            correct: drill,
            weight: 1,
            meta: { persona },
          })
          twinEvents++
        }

        const asstMsg = await db.studioMessage.create({
          data: {
            threadId: thread.id,
            deviceId: thread.deviceId,
            role: 'assistant',
            persona,
            content: clean,
            citations: citations.length ? JSON.stringify(citations) : null,
          },
        })
        savedIds.push(asstMsg.id)
      }

      // ================================================== DEBATE
      else if (mode === 'debate') {
        send('stage', { label: 'Two teachers prepare opposing approaches' })
        const retrieved = retrieveSections(message, 4)
        citations.push(...retrieved)
        if (retrieved.length) send('citations', retrieved)
        const ctx = retrieved.length
          ? `\n\nLIBRARY CONTEXT:\n${retrieved
              .map((s) => `§${s.number} ${s.title}: ${s.concepts[0]?.statement ?? ''}`)
              .join('\n')}`
          : ''

        const [a, b] = await Promise.all([
          askLlm(zai, DEBATE_A_SYSTEM, `The learner's doubt: ${message}${ctx}`),
          askLlm(zai, DEBATE_B_SYSTEM, `The learner's doubt: ${message}${ctx}`),
        ])
        const aClean = extractMarker(a).clean
        const bClean = extractMarker(b).clean

        for (const chunk of chunkify(aClean)) {
          send('delta', { persona: 'debate-a', text: chunk })
          await new Promise((r) => setTimeout(r, 18))
        }
        send('delta', { persona: 'debate-sep', text: '' })
        for (const chunk of chunkify(bClean)) {
          send('delta', { persona: 'debate-b', text: chunk })
          await new Promise((r) => setTimeout(r, 18))
        }

        const aMsg = await db.studioMessage.create({
          data: {
            threadId: thread.id,
            deviceId: thread.deviceId,
            role: 'assistant',
            persona: 'debate-a',
            content: aClean,
            citations: citations.length ? JSON.stringify(citations) : null,
          },
        })
        const bMsg = await db.studioMessage.create({
          data: {
            threadId: thread.id,
            deviceId: thread.deviceId,
            role: 'assistant',
            persona: 'debate-b',
            content: bClean,
          },
        })
        savedIds.push(aMsg.id, bMsg.id)
      }

      // ================================================== ROUNDTABLE
      else {
        const retrieved = retrieveSections(message, 4)
        citations.push(...retrieved)
        if (retrieved.length) send('citations', retrieved)
        const order: ('professor' | 'examiner' | 'researcher')[] = [
          'professor',
          'examiner',
          'researcher',
          'professor',
          'examiner',
        ]
        let seminar = `Seminar topic: ${message}\n`
        for (let i = 0; i < order.length; i++) {
          const p = order[i]
          send('stage', { label: `${PERSONA_META[p].label} takes the floor (turn ${i + 1}/${order.length})` })
          const sys = roundtablePersonaSystem(p, i + 1, order.length)
          const ctx = retrieved.length
            ? `\n\nLIBRARY CONTEXT:\n${retrieved
                .map((s) => `§${s.number} ${s.title}: ${s.concepts[0]?.statement ?? ''}`)
                .join('\n')}`
            : ''
          const turn = await askLlm(zai, sys, `${seminar}${ctx}`)
          const cleanTurn = extractMarker(turn).clean
          seminar += `${PERSONA_META[p].label}: ${cleanTurn}\n`
          for (const chunk of chunkify(cleanTurn)) {
            send('delta', { persona: p, text: chunk })
            await new Promise((r) => setTimeout(r, 16))
          }
          send('delta', { persona: 'rt-sep', text: '' })
          const msg = await db.studioMessage.create({
            data: {
              threadId: thread.id,
              deviceId: thread.deviceId,
              role: 'assistant',
              persona: p,
              content: cleanTurn,
              citations: i === 0 && citations.length ? JSON.stringify(citations) : null,
            },
          })
          savedIds.push(msg.id)
        }
      }

      // update thread bookkeeping
      await db.studioThread.update({
        where: { id: thread.id },
        data: {
          title: history.length === 0 ? threadTitleFrom(message) : thread.title,
          persona,
          mode,
          updatedAt: new Date(),
        },
      })

      finish({ messages: savedIds, twinEvents })
    } catch (err) {
      console.error('[api/studio/chat]', err)
      const msg = err instanceof Error ? err.message : String(err)
      fail(/429|too many/i.test(msg) ? 'The AI faculty is rate-limited — catch your breath and resend.' : 'The faculty could not answer — please try again.')
    }
  })()

  return new Response(sse.stream, { headers: SSE_HEADERS })
}
