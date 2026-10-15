// ============ Syllabus Mapper — mapping engine v2 ============
//
// Two-phase LLM pipeline + local ensemble scoring:
//   Phase A  route every topic to one subject (tiny prompt, whole-subject view)
//   Phase B  per-subject chapter matching with section titles in the prompt
//   Ensemble combine LLM choices with the local IDF/section scorer:
//            agreement boosts confidence, strong local disagreement wins,
//            user "pins" always override, unmatched topics get a closest
//            suggestion so the UI can offer "use closest".

import ZAI from 'z-ai-web-dev-sdk'
import {
  ENGINE_VERSION,
  cleanTopicLabel,
  clampConfidence,
  extractJsonArray,
  fuzzyMatchTopic,
  fuzzyMatchWithinSubject,
  getCatalog,
  isValidMapping,
  llmContent,
  matchTopicDetailed,
  runWave,
  withTimeout,
  type MappingEntry,
} from './syllabus'

export { ENGINE_VERSION }

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim()
const MAX_TOPICS = 100
const LLM_TIMEOUT_MS = 60_000
const PHASE_B_WAVE = 3 // bounded parallelism — the chat API rate-limits hard

export interface EngineProgress {
  stage: 'clean' | 'route' | 'route-done' | 'chapter' | 'score'
  [k: string]: unknown
}

export interface EngineResult {
  mapping: MappingEntry[]
  matched: number
  llmUsed: boolean
}

interface LlmChoice {
  subjectId: unknown
  chapterId: unknown
  confidence: number
}

const ROUTE_SYSTEM = `You route study-syllabus topics to subjects. Given the subject catalog, pick the single best subjectId for each topic, or null when nothing fits. Return ONLY a JSON array: [{"topic":"...","subjectId":"...","confidence":0.0-1.0}] — one entry per input topic, same order, using subjectId values that appear verbatim in the catalog.`

const CHAPTER_SYSTEM = `You map study-syllabus topics to chapters of one subject. Use the chapter list (chapter titles plus their section titles) to pick the single best chapterId per topic, or null when nothing fits. Return ONLY a JSON array: [{"topic":"...","chapterId":"...","confidence":0.0-1.0}] — one entry per input topic, same order, using chapterId values that appear verbatim in the list. Prefer the most specific chapter, not the general introductory one.`

/** subject routing digest: one line per subject with tagline context */
function subjectRouteDigest(): string {
  return getCatalog().digest
    .split('\n')
    .map((line) => line.split(' :: ')[0])
    .join('\n')
}

/** per-subject chapter digest with (capped) section titles */
function subjectChapterDigest(subjectId: string): string {
  const catalog = getCatalog()
  const chapters = catalog.chaptersBySubject.get(subjectId) ?? []
  return chapters
    .map((c) => {
      const sections = (catalog.sectionTitlesByChapter.get(c.id) ?? []).slice(0, 14)
      return `${c.id}="${c.title}"${sections.length ? ` [${sections.join('; ')}]` : ''}`
    })
    .join('\n')
}

/** one LLM call with timeout + polite retry on rate-limit responses */
async function askLlm(zai: Awaited<ReturnType<typeof ZAI.create>>, system: string, user: string) {
  let lastErr: unknown = null
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const completion = await withTimeout(
        zai.chat.completions.create({
          messages: [
            { role: 'system', content: system },
            { role: 'user', content: user },
          ],
          thinking: { type: 'disabled' },
        }),
        LLM_TIMEOUT_MS,
        'llm-timeout'
      )
      return llmContent(completion)
    } catch (err) {
      lastErr = err
      const msg = err instanceof Error ? err.message : String(err)
      const rateLimited = /429|too many/i.test(msg)
      if (!rateLimited || attempt === 2) throw err
      // back off before the retry so parallel waves don't hammer the API
      await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)))
    }
  }
  throw lastErr ?? new Error('llm-failed')
}

function parseChoices(raw: unknown): Map<string, LlmChoice> {
  const out = new Map<string, LlmChoice>()
  if (!Array.isArray(raw)) return out
  for (const e of raw) {
    if (!e || typeof e !== 'object') continue
    const o = e as Record<string, unknown>
    const t = typeof o.topic === 'string' ? norm(cleanTopicLabel(o.topic)) : ''
    if (!t) continue
    out.set(t, {
      subjectId: o.subjectId,
      chapterId: o.chapterId,
      confidence: clampConfidence(o.confidence),
    })
  }
  return out
}

/**
 * The full v2 mapping pipeline. `topics` should be pre-cleaned/deduped;
 * `pins` maps topic → chapterId (user-confirmed) and always wins.
 */
export async function runMappingEngine(opts: {
  topics: string[]
  pins?: Record<string, string>
  onProgress?: (p: EngineProgress) => void
}): Promise<EngineResult> {
  const topicsIn = opts.topics.slice(0, MAX_TOPICS).map(cleanTopicLabel).filter((t) => t.length >= 2)
  // dedupe after cleaning
  const seen = new Set<string>()
  const topics: string[] = []
  for (const t of topicsIn) {
    const k = norm(t)
    if (seen.has(k)) continue
    seen.add(k)
    topics.push(t)
  }
  const pins = opts.pins ?? {}
  const onProgress = opts.onProgress ?? (() => {})

  const catalog = getCatalog()
  const mapping: MappingEntry[] = new Array(topics.length)

  // ---- pins first: always honored, never re-asked ----
  const open: string[] = []
  topics.forEach((topic, i) => {
    const pinId = pins[topic] ?? pins[norm(topic)]
    if (pinId && catalog.chapterById.has(pinId)) {
      const ch = catalog.chapterById.get(pinId)!
      const sid = catalog.subjectIdByBook.get(ch.bookId)
      const subject = sid ? catalog.subjectById.get(sid) : undefined
      if (subject) {
        mapping[i] = {
          topic,
          subjectId: subject.id,
          subjectName: subject.name,
          chapterId: ch.id,
          chapterTitle: ch.title,
          confidence: 0.97,
          via: 'pin',
        }
        return
      }
    }
    open.push(topic)
  })

  onProgress({ stage: 'clean', count: topics.length, pinned: topics.length - open.length })
  if (!open.length) return finish()

  // ---- Phase A: route every open topic to a subject ----
  onProgress({ stage: 'route', count: open.length })
  const routed = new Map<string, LlmChoice>() // norm(topic) → {subjectId, confidence}
  let llmUsed = false
  try {
    const zai = await ZAI.create()
    const chunks: string[][] = []
    for (let i = 0; i < open.length; i += 50) chunks.push(open.slice(i, i + 50))
    const results = await Promise.all(
      chunks.map((chunk) =>
        askLlm(
          zai,
          ROUTE_SYSTEM,
          `Subject catalog (subjectId="Name"):\n${subjectRouteDigest()}\n\nTopics:\n${JSON.stringify(chunk)}`
        ).catch(() => '')
      )
    )
    for (const text of results) {
      for (const [t, c] of parseChoices(extractJsonArray(text))) routed.set(t, c)
    }
    llmUsed = routed.size > 0
  } catch (err) {
    console.error('[syllabus-engine] phase A failed, local routing only', err)
  }

  // group open topics under their routed subject (invalid → null)
  const topicsBySubject = new Map<string, string[]>()
  const routedSubjectByTopic = new Map<string, { subjectId: string | null; confidence: number }>()
  for (const topic of open) {
    const choice = routed.get(norm(topic))
    let subjectId: string | null = null
    let confidence = 0
    if (
      choice &&
      typeof choice.subjectId === 'string' &&
      catalog.subjectById.has(choice.subjectId) &&
      choice.confidence >= 0.35
    ) {
      subjectId = choice.subjectId
      confidence = choice.confidence
    }
    routedSubjectByTopic.set(topic, { subjectId, confidence })
    const key = subjectId ?? '__none__'
    const list = topicsBySubject.get(key)
    if (list) list.push(topic)
    else topicsBySubject.set(key, [topic])
  }

  const routedCount = [...topicsBySubject.keys()].filter((k) => k !== '__none__').length
  onProgress({ stage: 'route-done', subjects: routedCount, llm: llmUsed })

  // ---- Phase B: per-subject chapter matching (bounded parallel) ----
  const chapterChoice = new Map<string, LlmChoice>() // norm(topic) → {chapterId, subjectId, confidence}
  const subjectKeys = [...topicsBySubject.keys()].filter((k) => k !== '__none__')
  let chapterDone = 0
  if (llmUsed && subjectKeys.length) {
    try {
      const zai = await ZAI.create()
      await runWave(subjectKeys, PHASE_B_WAVE, async (sid) => {
        const group = topicsBySubject.get(sid) ?? []
        const subject = catalog.subjectById.get(sid)
        if (!subject) return
        try {
          const text = await askLlm(
            zai,
            CHAPTER_SYSTEM,
            `Subject: ${subject.name}\nChapters (chapterId="Title" [section titles]):\n${subjectChapterDigest(sid)}\n\nTopics:\n${JSON.stringify(group)}`
          )
          for (const [t, c] of parseChoices(extractJsonArray(text))) {
            chapterChoice.set(t, { ...c, subjectId: sid })
          }
        } catch (err) {
          console.error(`[syllabus-engine] phase B failed for ${sid}`, err)
        } finally {
          chapterDone++
          onProgress({ stage: 'chapter', done: chapterDone, total: subjectKeys.length, subject: subject.name })
        }
      })
    } catch (err) {
      console.error('[syllabus-engine] phase B crashed', err)
    }
  }

  // ---- Ensemble: LLM choice × local score, pins already set ----
  onProgress({ stage: 'score' })
  const detailCache = new Map<string, ReturnType<typeof matchTopicDetailed>>()
  const detailFor = (topic: string) => {
    let d = detailCache.get(topic)
    if (!d) {
      d = matchTopicDetailed(topic, catalog)
      detailCache.set(topic, d)
    }
    return d
  }

  topics.forEach((topic, i) => {
    if (mapping[i]) return // pinned

    const detail = detailFor(topic)
    const top = detail.matches[0]
    const llm = chapterChoice.get(norm(topic))

    if (llm && typeof llm.chapterId === 'string' && catalog.chapterById.has(llm.chapterId)) {
      const ch = catalog.chapterById.get(llm.chapterId)!
      const sid = catalog.subjectIdByBook.get(ch.bookId)
      const subject = sid ? catalog.subjectById.get(sid) : undefined
      if (subject && sid) {
        const localForLlm = detail.matches.find((m) => m.chapter.id === ch.id)
        let chapterId = ch.id
        let via: MappingEntry['via'] = 'llm'
        if (
          top &&
          top.score >= 0.55 &&
          top.chapter.id !== ch.id &&
          top.score - (localForLlm?.score ?? 0) >= 0.18
        ) {
          // local matcher strongly disagrees → trust the section-level evidence
          chapterId = top.chapter.id
          via = 'local'
        } else if (top && top.chapter.id === ch.id) {
          via = 'agree'
        }
        const chosen = catalog.chapterById.get(chapterId)!
        const chosenSubjectId = catalog.subjectIdByBook.get(chosen.bookId) ?? sid
        const chosenSubject = catalog.subjectById.get(chosenSubjectId)
        if (chosenSubject) {
          const localConf =
            via === 'local' ? top.score : (detail.matches.find((m) => m.chapter.id === chapterId)?.score ?? 0)
          let confidence = 0.6 * llm.confidence + 0.4 * Math.min(1, localConf + 0.15)
          if (via === 'agree') confidence = Math.min(1, confidence + 0.08)
          if (via === 'local') confidence = Math.min(0.9, Math.max(confidence, 0.55))
          mapping[i] = {
            topic,
            subjectId: chosenSubject.id,
            subjectName: chosenSubject.name,
            chapterId: chosen.id,
            chapterTitle: chosen.title,
            confidence: Number(clampConfidence(confidence).toFixed(2)),
            via,
          }
          return
        }
      }
    }

    // no usable LLM chapter → local across everything
    if (top && top.score >= 0.34) {
      const confidence = top.exact ? 0.85 : Math.min(0.72, Math.max(0.4, top.score))
      mapping[i] = {
        topic,
        subjectId: top.subject.id,
        subjectName: top.subject.name,
        chapterId: top.chapter.id,
        chapterTitle: top.chapter.title,
        confidence: Number(confidence.toFixed(2)),
        via: 'local',
      }
      return
    }

    // subject-level fallback (LLM routed it, but no chapter convinced us)
    const routedInfo = routedSubjectByTopic.get(topic)
    if (routedInfo?.subjectId) {
      const within = fuzzyMatchWithinSubject(topic, routedInfo.subjectId, 0.3, catalog)
      if (within) {
        mapping[i] = within
        return
      }
      const subject = catalog.subjectById.get(routedInfo.subjectId)
      if (subject) {
        mapping[i] = {
          topic,
          subjectId: subject.id,
          subjectName: subject.name,
          chapterId: null,
          chapterTitle: null,
          confidence: 0.45,
          via: 'subject',
        }
        return
      }
    }

    // unmatched — attach the closest rejected candidate for "use closest"
    mapping[i] = {
      topic,
      subjectId: null,
      subjectName: null,
      chapterId: null,
      chapterTitle: null,
      confidence: 0,
      closest:
        top && top.score >= 0.18
          ? {
              chapterId: top.chapter.id,
              chapterTitle: top.chapter.title,
              subjectId: top.subject.id,
              subjectName: top.subject.name,
              confidence: Number(top.score.toFixed(2)),
            }
          : null,
    }
  })

  return finish()

  function finish(): EngineResult {
    const matched = mapping.filter((m) => m.chapterId).length
    return { mapping, matched, llmUsed }
  }
}

/** parse + validate a pins JSON blob from the database */
export function parsePins(raw: string | null | undefined): Record<string, string> {
  if (!raw) return {}
  try {
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {}
    const catalog = getCatalog()
    const out: Record<string, string> = {}
    for (const [topic, chapterId] of Object.entries(parsed)) {
      if (typeof chapterId === 'string' && catalog.chapterById.has(chapterId)) out[topic] = chapterId
    }
    return out
  } catch {
    return {}
  }
}

/** parse + normalize a mapping JSON blob from the database */
export function parseMapping(raw: string): MappingEntry[] {
  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter((e): e is MappingEntry => !!e && typeof e === 'object' && 'topic' in e)
      .map((e) => ({
        topic: String(e.topic ?? ''),
        subjectId: e.subjectId ?? null,
        subjectName: e.subjectName ?? null,
        chapterId: e.chapterId ?? null,
        chapterTitle: e.chapterTitle ?? null,
        confidence: typeof e.confidence === 'number' ? e.confidence : 0,
        via: (e.via ?? null) as MappingEntry['via'],
        closest: e.closest ?? null,
      }))
  } catch {
    return []
  }
}

/** parse topics JSON from the database */
export function parseTopics(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    const out: string[] = []
    for (const t of parsed) {
      if (typeof t === 'string') out.push(t)
      else if (t && typeof t === 'object' && typeof (t as { topic?: unknown }).topic === 'string') {
        out.push((t as { topic: string }).topic)
      }
    }
    return out
  } catch {
    return []
  }
}

/** validity helper reused by routes */
export { isValidMapping, fuzzyMatchTopic }
