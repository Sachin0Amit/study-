import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { db } from '@/lib/db'
import {
  clampConfidence,
  extractJsonArray,
  fuzzyMatchTopic,
  getCatalog,
  isValidMapping,
  llmContent,
  type MappingEntry,
} from '@/lib/syllabus'

export const runtime = 'nodejs'

const MIN_LLM_CONFIDENCE = 0.4
const MAX_TOPICS = 100

const SYSTEM_PROMPT = `You map syllabus topics to a course library catalog. For each topic, pick the single best matching subject+chapter, or null if nothing matches. Return ONLY a JSON array: [{"topic":"...","subjectId":"...","chapterId":"...","confidence":0.0-1.0}] — confidence < 0.4 means no good match, use null ids. Use ONLY subjectId and chapterId values that appear verbatim in the catalog. One entry per input topic, in the same order.`

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim()

/** POST /api/syllabus/map — { deviceId, title, sourceType, sourceName, topics } → saved plan */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
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
      const clean = t.replace(/\s+/g, ' ').trim().slice(0, 160)
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

    const catalog = getCatalog()

    // ---- LLM pass: map every topic onto the compact catalog digest ----
    const llmByTopic = new Map<string, { subjectId: unknown; chapterId: unknown; confidence: number }>()
    try {
      const zai = await ZAI.create()
      const completion = await zai.chat.completions.create({
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          {
            role: 'user',
            content: `Catalog (one line per subject — subjectId="Name" :: chapterId="Chapter title"; ...):\n${catalog.digest}\n\nTopics to map:\n${JSON.stringify(topics)}`,
          },
        ],
        thinking: { type: 'disabled' },
      })
      const entries = extractJsonArray(llmContent(completion))
      for (const e of entries) {
        if (!e || typeof e !== 'object') continue
        const o = e as Record<string, unknown>
        const t = typeof o.topic === 'string' ? o.topic : ''
        if (!t) continue
        llmByTopic.set(norm(t), {
          subjectId: o.subjectId,
          chapterId: o.chapterId,
          confidence: clampConfidence(o.confidence),
        })
      }
    } catch (err) {
      // LLM unavailable → every topic falls through to the local fuzzy matcher
      console.error('[api/syllabus/map] llm pass failed, using fuzzy fallback only', err)
    }

    // ---- code-side validation + fuzzy fallback ----
    const mapping: MappingEntry[] = topics.map((topic) => {
      const llm = llmByTopic.get(norm(topic))
      if (
        llm &&
        llm.confidence >= MIN_LLM_CONFIDENCE &&
        isValidMapping(llm.subjectId, llm.chapterId, catalog)
      ) {
        const subjectId = llm.subjectId as string
        const chapterId = llm.chapterId as string
        const subject = catalog.subjectById.get(subjectId)
        const chapter = catalog.chapterById.get(chapterId)
        return {
          topic,
          subjectId,
          subjectName: subject?.name ?? null,
          chapterId,
          chapterTitle: chapter?.title ?? null,
          confidence: Number(llm.confidence.toFixed(2)),
        }
      }
      // LLM left it null / invalid / low-confidence → local fuzzy match
      const fuzzy = fuzzyMatchTopic(topic, catalog)
      if (fuzzy) return fuzzy
      return { topic, subjectId: null, subjectName: null, chapterId: null, chapterTitle: null, confidence: 0 }
    })

    const matched = mapping.filter((m) => m.subjectId && m.chapterId).length

    const plan = await db.syllabusPlan.create({
      data: {
        deviceId,
        title,
        sourceType,
        sourceName,
        topics: JSON.stringify(topics.map((t) => ({ topic: t }))),
        mapping: JSON.stringify(mapping),
        matched,
        total: topics.length,
      },
    })

    return NextResponse.json({
      id: plan.id,
      title: plan.title,
      sourceType: plan.sourceType,
      sourceName: plan.sourceName,
      matched: plan.matched,
      total: plan.total,
      createdAt: plan.createdAt.toISOString(),
      mapping,
    })
  } catch (err) {
    console.error('[api/syllabus/map]', err)
    return NextResponse.json(
      { error: 'Could not build the study plan — please try again.' },
      { status: 500 }
    )
  }
}
