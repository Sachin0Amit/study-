import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { SSE_HEADERS, cleanTopicLabel, sseStream } from '@/lib/syllabus'
import { ENGINE_VERSION, runMappingEngine } from '@/lib/syllabus-engine'

export const runtime = 'nodejs'

const MAX_TOPICS = 100

interface SourceIn {
  title?: unknown
  url?: unknown
  host?: unknown
  date?: unknown
}

/**
 * POST /api/syllabus/map — { deviceId, title, sourceType, sourceName, topics, sources? }
 * Streams the mapping engine over SSE:
 *   event:stage  {stage:'clean'|'route'|'route-done'|'chapter'|'score'|'save'}
 *   event:done   { plan }
 *   event:error  { error }
 * The engine itself (LLM routing → chapter matching → ensemble) reports its
 * own progress; this route validates input, persists the plan and replies.
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown> | null = null
  try {
    body = await req.json().catch(() => null)
  } catch {
    /* handled below */
  }
  const deviceId = typeof body?.deviceId === 'string' ? body.deviceId : ''
  const topicsRaw: unknown = body?.topics
  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  if (!Array.isArray(topicsRaw) || topicsRaw.length === 0) {
    return NextResponse.json({ error: 'topics[] required' }, { status: 400 })
  }

  // clean + dedupe + cap the topic list
  const seen = new Set<string>()
  const topics: string[] = []
  for (const t of topicsRaw) {
    if (typeof t !== 'string') continue
    const clean = cleanTopicLabel(t).slice(0, 160)
    if (clean.length < 2) continue
    const key = clean.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    topics.push(clean)
    if (topics.length >= MAX_TOPICS) break
  }
  if (!topics.length) {
    return NextResponse.json({ error: 'topics[] required' }, { status: 400 })
  }

  const sourceType = body?.sourceType === 'uploaded' ? 'uploaded' : 'typed'
  const sourceName =
    typeof body?.sourceName === 'string' ? body.sourceName.trim().slice(0, 200) : ''
  const title =
    (typeof body?.title === 'string' ? body.title.trim().slice(0, 200) : '') ||
    sourceName ||
    'Syllabus plan'

  // optional live-research sources (from the research step) — persisted with the plan
  const sources: { title: string; url: string; host: string; date?: string }[] = []
  if (Array.isArray(body?.sources)) {
    for (const s of body.sources.slice(0, 12) as SourceIn[]) {
      if (!s || typeof s !== 'object') continue
      if (typeof s.url !== 'string' || !s.url.startsWith('http')) continue
      sources.push({
        title: typeof s.title === 'string' ? s.title.slice(0, 140) : 'Source',
        url: s.url,
        host: typeof s.host === 'string' ? s.host.slice(0, 100) : '',
        date: typeof s.date === 'string' ? s.date : undefined,
      })
    }
  }

  const sse = sseStream()
  void (async () => {
    let settled = false
    const finish = (payload: Record<string, unknown>) => {
      if (settled) return
      settled = true
      sse.send('done', payload)
      sse.close()
    }
    const fail = (message: string) => {
      if (settled) return
      settled = true
      sse.send('error', { error: message })
      sse.close()
    }

    try {
      const result = await runMappingEngine({
        topics,
        onProgress: (p) => sse.send('stage', p),
      })

      sse.send('stage', { stage: 'save' })
      const plan = await db.syllabusPlan.create({
        data: {
          deviceId,
          title,
          sourceType,
          sourceName,
          topics: JSON.stringify(topics.map((t) => ({ topic: t }))),
          mapping: JSON.stringify(result.mapping),
          matched: result.matched,
          total: topics.length,
          engineVersion: ENGINE_VERSION,
          research: sources.length ? JSON.stringify(sources) : null,
        },
      })

      finish({
        id: plan.id,
        title: plan.title,
        sourceType: plan.sourceType,
        sourceName: plan.sourceName,
        matched: plan.matched,
        total: plan.total,
        engineVersion: plan.engineVersion,
        research: sources,
        pins: {},
        refreshedAt: null,
        refreshCount: 0,
        createdAt: plan.createdAt.toISOString(),
        mapping: result.mapping,
        llmUsed: result.llmUsed,
      })
    } catch (err) {
      console.error('[api/syllabus/map]', err)
      fail('Could not build the study plan — please try again.')
    }
  })()

  return new Response(sse.stream, { headers: SSE_HEADERS })
}
