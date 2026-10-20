import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { db } from '@/lib/db'
import {
  SSE_HEADERS,
  cleanTopicLabel,
  extractJsonObject,
  fuzzyMatchTopic,
  fuzzyMatchWithinSubject,
  getCatalog,
  llmContent,
  matchTopicDetailed,
  sseStream,
  withTimeout,
} from '@/lib/syllabus'
import { matchCuratedExam } from '@/data/exams'
import { buildCuratedExamMap } from '@/lib/curated-exam-map'
import { LIBRARY_SUBJECTS } from '@/data/library'
import type {
  ExamMapSource,
  ExamMapStats,
  ExamOverview,
  ExamSubject,
  ExamUnit,
  ExamTopic,
} from '@/lib/exam-map-types'

export const runtime = 'nodejs'

/**
 * GET  /api/exam-maps?deviceId=  → { maps: ExamMapSummary[] } (updatedAt desc, 50)
 * POST /api/exam-maps — { deviceId, name, details? }
 * Live deep web research streamed over SSE, producing a hierarchical syllabus
 * map (overview → subjects → units → topics) with every topic auto-mapped onto
 * the library catalog. The result is persisted per device; re-running a name
 * re-researches it (no cache by design).
 *   event:stage  {stage:'search'|'sources'|'read'|'synthesize'|'map'|'save', ...}
 *   event:done   { id, name }
 */

const SEARCH_TIMEOUT_MS = 15_000
const READ_TIMEOUT_MS = 20_000
const LLM_TIMEOUT_MS = 120_000
const MAX_SOURCES = 8
const MAX_READS = 4

interface SearchItem {
  url?: string
  name?: string
  snippet?: string
  host_name?: string
  date?: string
}

const rateWindow = new Map<string, number[]>() // deviceId → recent timestamps

function rateLimited(deviceId: string): boolean {
  const now = Date.now()
  const recent = (rateWindow.get(deviceId) ?? []).filter((t) => now - t < 5 * 60_000)
  recent.push(now)
  rateWindow.set(deviceId, recent)
  return recent.length > 12
}

/** pick the most promising pages to actually read */
function pickReadCandidates(results: SearchItem[]): SearchItem[] {
  const seenHost = new Set<string>()
  const scored: { item: SearchItem; score: number }[] = []
  for (const r of results) {
    if (!r.url || !r.url.startsWith('http')) continue
    const host = r.host_name ?? ''
    if (seenHost.has(host)) continue
    seenHost.add(host)
    let score = 0
    const url = r.url.toLowerCase()
    const text = `${r.name ?? ''} ${r.snippet ?? ''}`.toLowerCase()
    if (/syllabus|curriculum|pattern|scheme/.test(url)) score += 3
    if (/syllabus|curriculum|topics|units|subjects/.test(text)) score += 2
    if (/gov|edu|ac\.in|nic\.in|edu\.in|university|institute/.test(host)) score += 2
    if ((r.snippet ?? '').length > 160) score += 1
    scored.push({ item: r, score })
  }
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_READS)
    .map((s) => s.item)
}

// ------------------------------------------------- LLM payload sanitizing --
// Pure local clamps: never throw, never invent fields — drop what is unusable.

/** clamp an optional string field (undefined when missing/empty) */
function str(v: unknown, max: number): string | undefined {
  if (typeof v !== 'string') return undefined
  const s = v.trim().slice(0, max)
  return s.length ? s : undefined
}

/** clamp an array of short strings (undefined when nothing survives) */
function strArr(v: unknown, maxItems: number, itemMax: number): string[] | undefined {
  if (!Array.isArray(v)) return undefined
  const out: string[] = []
  for (const item of v) {
    if (typeof item !== 'string') continue
    const s = item.trim().slice(0, itemMax)
    if (s.length) out.push(s)
    if (out.length >= maxItems) break
  }
  return out.length ? out : undefined
}

/** clamp a number into [min, max] with a fallback when unparseable */
function num(v: unknown, min: number, max: number, fallback: number): number {
  const n = typeof v === 'number' ? v : typeof v === 'string' ? parseFloat(v) : NaN
  if (!Number.isFinite(n)) return fallback
  return Math.min(max, Math.max(min, n))
}

/** optional percent weightage — omit the field rather than inventing it */
function optWeightage(v: unknown): number | undefined {
  if (v === undefined || v === null || v === '') return undefined
  return num(v, 0, 100, 0)
}

/** every overview field is optional; clamp lengths, never fail on missing ones */
function sanitizeOverview(raw: unknown): ExamOverview {
  const o: ExamOverview = {}
  if (!raw || typeof raw !== 'object') return o
  const r = raw as Record<string, unknown>
  const fullName = str(r.fullName, 600)
  if (fullName) o.fullName = fullName
  const conductor = str(r.conductor, 600)
  if (conductor) o.conductor = conductor
  const level = str(r.level, 600)
  if (level) o.level = level
  const duration = str(r.duration, 600)
  if (duration) o.duration = duration
  const marking = str(r.marking, 600)
  if (marking) o.marking = marking
  const negativeMarking = str(r.negativeMarking, 600)
  if (negativeMarking) o.negativeMarking = negativeMarking
  const website = str(r.website, 600)
  if (website) o.website = website
  const notes = str(r.notes, 600)
  if (notes) o.notes = notes
  const stages = strArr(r.stages, 12, 160)
  if (stages) o.stages = stages
  const papers = strArr(r.papers, 12, 160)
  if (papers) o.papers = papers
  const questionTypes = strArr(r.questionTypes, 12, 160)
  if (questionTypes) o.questionTypes = questionTypes
  return o
}

/** subjects → units → topics, each level capped and name-validated */
function sanitizeSubjects(raw: unknown): ExamSubject[] {
  if (!Array.isArray(raw)) return []
  const subjects: ExamSubject[] = []
  for (const item of raw.slice(0, 14)) {
    if (!item || typeof item !== 'object') continue
    const s = item as Record<string, unknown>
    const name = str(s.name, 120)
    if (!name) continue
    const subject: ExamSubject = { name, units: [] }
    const weightage = optWeightage(s.weightage)
    if (weightage !== undefined) subject.weightage = weightage
    const unitsRaw = Array.isArray(s.units) ? s.units : []
    for (const uItem of unitsRaw.slice(0, 10)) {
      if (!uItem || typeof uItem !== 'object') continue
      const u = uItem as Record<string, unknown>
      const uName = str(u.name, 160)
      if (!uName) continue
      const unit: ExamUnit = { name: uName, topics: [] }
      const topicsRaw = Array.isArray(u.topics) ? u.topics : []
      for (const tItem of topicsRaw.slice(0, 14)) {
        if (!tItem || typeof tItem !== 'object') continue
        const t = tItem as Record<string, unknown>
        const tName = str(t.name, 160)
        if (!tName) continue
        const topic: ExamTopic = { name: tName }
        const questionTypes = strArr(t.questionTypes, 6, 60)
        if (questionTypes) topic.questionTypes = questionTypes
        const tWeightage = optWeightage(t.weightage)
        if (tWeightage !== undefined) topic.weightage = tWeightage
        unit.topics.push(topic)
      }
      subject.units.push(unit)
    }
    subjects.push(subject)
  }
  return subjects
}

/** defensively read the persisted stats JSON column (zeros on any corruption) */
function parseStats(raw: string): ExamMapStats {
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>
    const n = (v: unknown): number => {
      const x = typeof v === 'number' ? v : parseInt(String(v), 10)
      return Number.isFinite(x) && x >= 0 ? Math.trunc(x) : 0
    }
    return {
      subjectCount: n(parsed.subjectCount),
      unitCount: n(parsed.unitCount),
      topicCount: n(parsed.topicCount),
      mappedCount: n(parsed.mappedCount),
    }
  } catch {
    return { subjectCount: 0, unitCount: 0, topicCount: 0, mappedCount: 0 }
  }
}

// Pass 1 — the compact skeleton: overview + subjects + unit names ONLY.
// Kept small on purpose: a full topic-level dump in a single completion gets
// truncated by the output-token limit (verified: ~19k chars mid-JSON cut),
// so the topics are deep-dived one subject at a time in pass 2 below.
const SKELETON_SYSTEM = `You research an examination the user names and return the SKELETON of its definitive, up-to-date syllabus as a strict JSON object — no commentary, no markdown, ONLY the JSON object with exactly this shape:
{
  "overview": {
    "fullName": "official expanded name of the exam",
    "conductor": "who conducts it",
    "level": "level/nature, e.g. national entrance, state entrance, certification, campus test",
    "stages": ["stage/paper names if the exam has stages"],
    "papers": ["one line per paper: name, question count, duration"],
    "duration": "overall duration summary",
    "marking": "marking scheme summary",
    "negativeMarking": "negative marking summary or 'None reported'",
    "questionTypes": ["types of questions asked"],
    "website": "official website if known",
    "notes": "anything important: eligibility, frequency, latest changes"
  },
  "subjects": [
    { "name": "Subject name", "weightage": 30,
      "units": [ { "name": "Unit / area name" } ] }
  ]
}
Rules: list EVERY subject of the exam (typically 2-12) and every unit/area inside each subject (typically 2-10). Do NOT include topics in this pass — unit names only. weightage is approximate percent importance (0-100); omit a field rather than inventing it.`

// Pass 2 — one subject at a time: every unit's topics, exhaustive to the
// last topic. Each response is bounded so it can never hit the token limit.
const TOPICS_SYSTEM = `You complete one subject of an exam syllabus. Given the exam name and ONE subject with its unit names, return ONLY a strict JSON object — no commentary, no markdown — with exactly this shape:
{
  "units": [
    { "name": "the exact unit name from the input",
      "topics": [
        { "name": "Concrete syllabus topic", "questionTypes": ["MCQ single correct"], "weightage": 8 }
      ] }
  ]
}
Rules: be exhaustive down to the LAST topic actually asked in this exam for each unit (typically 3-14 topics per unit). Keep unit names EXACTLY as given in the input. Topic names must be specific ("Quadratic equations", not "Mathematics"). questionTypes are short labels like "MCQ single correct", "Numerical value", "Multiple select", "Assertion-Reason", "Descriptive". weightage is approximate percent importance within the exam (0-100); omit a field rather than inventing it.`

/** one bounded LLM completion → parsed JSON object, with patient 429 backoff
 *  (the shared quota recovers in tens of seconds — short retries lose whole
 *  subjects) and a compactness nudge on unparseable (truncated) output.
 *  Returns null when no attempt yields a parseable object. Throws on hard
 *  non-429 errors. */
async function callLLMJsonObject(
  zai: Awaited<ReturnType<typeof ZAI.create>>,
  system: string,
  user: string
): Promise<Record<string, unknown> | null> {
  let parseFails = 0
  for (let attempt = 0; attempt < 5; attempt++) {
    const compact =
      parseFails > 0
        ? '\nIMPORTANT: keep the JSON compact — minimal whitespace, short strings, no extra fields.'
        : ''
    try {
      const completion = await withTimeout(
        zai.chat.completions.create({
          messages: [
            { role: 'system', content: system + compact },
            { role: 'user', content: user },
          ],
          thinking: { type: 'disabled' },
        }),
        LLM_TIMEOUT_MS,
        'llm-timeout'
      )
      const payload = extractJsonObject(llmContent(completion))
      if (payload) return payload
      parseFails++ // truncated/unparseable — retry compact (max twice)
      if (parseFails >= 3) return null
      await new Promise((r) => setTimeout(r, 3000))
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      if (!/429|too many/i.test(msg) || attempt === 4) throw err
      await new Promise((r) => setTimeout(r, 9000 + 11000 * attempt)) // 9s, 20s, 31s, 42s
    }
  }
  return null
}

/** normalize a unit/subject name for merging pass-2 results into the skeleton.
 *  cleanTopicLabel first strips scaffolding like "Unit 3: …" so returned unit
 *  names land on their skeleton twins instead of duplicating them. */
function normKey(s: string): string {
  return normKeyRaw(cleanTopicLabel(s))
}

function normKeyRaw(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

/** GET /api/exam-maps?deviceId= — saved map summaries for this device */
export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  try {
    const rows = await db.examMap.findMany({
      where: { deviceId },
      orderBy: { updatedAt: 'desc' },
      take: 50,
      select: { id: true, name: true, stats: true, createdAt: true, updatedAt: true },
    })
    const maps = rows.map((row) => {
      const stats = parseStats(row.stats)
      return {
        id: row.id,
        name: row.name,
        subjectCount: stats.subjectCount,
        unitCount: stats.unitCount,
        topicCount: stats.topicCount,
        mappedCount: stats.mappedCount,
        createdAt: row.createdAt.toISOString(),
        updatedAt: row.updatedAt.toISOString(),
      }
    })
    return NextResponse.json({ maps })
  } catch (err) {
    console.error('[api/exam-maps GET]', err)
    return NextResponse.json({ error: 'Could not load the saved maps.' }, { status: 500 })
  }
}

/** POST /api/exam-maps — { deviceId, name, details? } → SSE deep-research pipeline */
export async function POST(req: NextRequest) {
  let deviceId = ''
  let name = ''
  let details = ''
  let forceLive = false
  try {
    const body = await req.json().catch(() => null)
    deviceId = typeof body?.deviceId === 'string' ? body.deviceId : ''
    name = typeof body?.name === 'string' ? body.name.trim().slice(0, 200) : ''
    details = typeof body?.details === 'string' ? body.details.trim().slice(0, 300) : ''
    forceLive = body?.forceLive === true
  } catch {
    /* handled below */
  }
  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  if (!name) {
    return NextResponse.json({ error: 'name required' }, { status: 400 })
  }
  if (rateLimited(deviceId)) {
    return NextResponse.json(
      { error: 'Too many research requests — please wait a minute and try again.' },
      { status: 429 }
    )
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
      // ---- 0. curated fast-path: the official syllabus is already known ----
      // 44 hand-verified exams (JEE, NEET, SAT, GRE, UPSC …) build instantly
      // with every subject/unit/topic/subtopic — no live research needed.
      const curated = forceLive ? null : matchCuratedExam(name)
      if (curated) {
        sse.send('stage', {
          stage: 'search',
          queries: 0,
          curated: true,
          exam: curated.name,
        })
        sse.send('stage', {
          stage: 'sources',
          count: curated.sources.length,
          kept: curated.sources.length,
          curated: true,
        })
        sse.send('stage', {
          stage: 'read',
          host: curated.website.replace(/^https?:\/\//, ''),
          title: 'Official syllabus (curated registry)',
          curated: true,
        })
        const built = buildCuratedExamMap(curated)
        sse.send('stage', {
          stage: 'synthesize',
          curated: true,
          subjects: built.stats.subjectCount,
          topics: built.stats.topicCount,
        })
        sse.send('stage', {
          stage: 'map',
          curated: true,
          mapped: built.stats.mappedCount,
          total: built.stats.topicCount,
        })
        sse.send('stage', { stage: 'save' })
        const row = await db.examMap.create({
          data: {
            deviceId,
            name: built.name,
            overview: JSON.stringify(built.overview),
            subjects: JSON.stringify(built.subjects),
            sources: JSON.stringify(built.sources),
            stats: JSON.stringify(built.stats),
          },
        })
        finish({ id: row.id, name: row.name, curated: true })
        return
      }

      const zai = await ZAI.create()

      // ---- 1. web searches with complementary phrasings ----
      // Run SEQUENTIALLY with generous 429 backoff: the shared web-search
      // quota is easy to exhaust with a parallel burst, and a spaced-out
      // sequence recovers far more reliably. Early-stop once we have plenty.
      sse.send('stage', { stage: 'search', queries: 4 })
      const queries = [
        `${name} syllabus`,
        `${name} exam pattern marking scheme question types`,
        `${name} detailed syllabus all subjects units topics${details ? ` ${details}` : ''}`,
        `${name} latest syllabus ${new Date().getFullYear()}`,
      ]
      const searchOnce = (q: string) =>
        withTimeout(
          zai.functions.invoke('web_search', { query: q, num: 8 }) as Promise<SearchItem[]>,
          SEARCH_TIMEOUT_MS,
          'search-timeout'
        )
      const searchWithRetry = async (q: string): Promise<SearchItem[]> => {
        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            return await searchOnce(q)
          } catch (err) {
            const msg = err instanceof Error ? err.message : String(err)
            if (!/429|too many/i.test(msg) || attempt === 2) throw err
            await new Promise((r) => setTimeout(r, 4000 + 6000 * attempt))
          }
        }
        return []
      }
      const all: SearchItem[] = []
      for (const q of queries) {
        try {
          const items = await searchWithRetry(q)
          if (Array.isArray(items)) all.push(...items)
        } catch {
          /* this query failed — the others may still succeed */
        }
        if (all.length >= 16) break // plenty of material already
      }
      if (!all.length) {
        fail(
          'The live search service is rate-limited right now — wait a minute and try again.'
        )
        return
      }

      // dedupe by url
      const byUrl = new Map<string, SearchItem>()
      for (const r of all) if (r.url && !byUrl.has(r.url)) byUrl.set(r.url, r)
      const results = [...byUrl.values()]
      const sources: ExamMapSource[] = results.slice(0, MAX_SOURCES).map((r) => ({
        title: (r.name ?? 'Source').slice(0, 140),
        url: r.url!,
        host: r.host_name ?? '',
        date: r.date && r.date !== 'N/A' ? r.date : undefined,
      }))
      sse.send('stage', { stage: 'sources', count: results.length, kept: sources.length })

      // ---- 2. read the most promising pages for real syllabus text ----
      const readCandidates = pickReadCandidates(results)
      const pageTexts: string[] = []
      for (const cand of readCandidates) {
        if (!cand.url) continue
        sse.send('stage', {
          stage: 'read',
          host: cand.host_name ?? '',
          title: (cand.name ?? '').slice(0, 80),
        })
        try {
          const page = ((await withTimeout(
            zai.functions.invoke('page_reader', { url: cand.url }),
            READ_TIMEOUT_MS,
            'read-timeout'
          )) ?? {}) as {
            title?: string
            text?: string
            html?: string
          }
          const text =
            page.text && page.text.trim().length > 200
              ? page.text
              : (page.html ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
          if (text.trim().length > 200) pageTexts.push(text.slice(0, 9000))
        } catch {
          /* skip unreadable pages */
        }
      }

      // ---- 3. synthesize the hierarchical map (two passes) ----
      // Pass 1: compact skeleton (overview + subjects + unit names) — cannot
      //         be truncated. Pass 2: one dedicated call per subject fills in
      //         every unit's topics, exhaustive to the last topic.
      sse.send('stage', { stage: 'synthesize', pages: pageTexts.length, snippets: results.length })
      const snippetBlock = results
        .slice(0, 14)
        .map((r, i) => `${i + 1}. ${r.name ?? ''} (${r.host_name ?? ''})\n${r.snippet ?? ''}`)
        .join('\n\n')
      const pageBlock = pageTexts.map((t, i) => `--- PAGE ${i + 1} ---\n${t}`).join('\n\n')
      const researchBlock = `The user wants to crack: "${name}"${
        details ? ` (context: ${details})` : ''
      }\n\nLive search results:\n${snippetBlock}${
        pageBlock ? `\n\nFull page extracts:\n${pageBlock}` : ''
      }`

      // -- pass 1: skeleton --
      const skeleton = await callLLMJsonObject(
        zai,
        SKELETON_SYSTEM,
        `${researchBlock}\n\nBuild the syllabus skeleton: every subject and every unit name, no topics yet.`
      )
      const overview = sanitizeOverview(skeleton?.overview)
      const subjects = sanitizeSubjects(skeleton?.subjects)
      if (!subjects.length) {
        fail('Could not build a syllabus map from the research — try adding more context.')
        return
      }
      sse.send('stage', { stage: 'synthesize', subjects: subjects.length })

      // -- pass 2: deep-dive every subject's topics --
      // The shared LLM quota is thin: back-to-back subject calls can 429-out
      // the first subjects while later ones succeed once the quota recovers.
      // So: first sweep in order, then ONE retry sweep over the subjects that
      // ended up empty, after a deliberate recovery pause.
      const mergeTopicPayload = (subject: ExamSubject, payload: Record<string, unknown> | null): number => {
        const unitsRaw = payload?.units
        if (!Array.isArray(unitsRaw)) return 0
        const byKey = new Map(subject.units.map((u) => [normKey(u.name), u]))
        const seenTopics = new Set(
          subject.units.flatMap((u) => u.topics.map((t) => normKey(t.name)))
        )
        let added = 0
        for (const uItem of unitsRaw.slice(0, 12)) {
          if (!uItem || typeof uItem !== 'object') continue
          const u = uItem as Record<string, unknown>
          const uName = str(u.name, 160)
          if (!uName) continue
          let unit = byKey.get(normKey(uName))
          if (!unit) {
            unit = { name: uName, topics: [] }
            subject.units.push(unit)
            byKey.set(normKey(uName), unit)
          }
          const topicsRaw = Array.isArray(u.topics) ? u.topics : []
          for (const tItem of topicsRaw.slice(0, 14)) {
            if (!tItem || typeof tItem !== 'object') continue
            const t = tItem as Record<string, unknown>
            const tName = str(t.name, 160)
            if (!tName) continue
            const key = normKey(tName)
            if (seenTopics.has(key)) continue
            seenTopics.add(key)
            const topic: ExamTopic = { name: tName }
            const questionTypes = strArr(t.questionTypes, 6, 60)
            if (questionTypes) topic.questionTypes = questionTypes
            const tWeightage = optWeightage(t.weightage)
            if (tWeightage !== undefined) topic.weightage = tWeightage
            unit.topics.push(topic)
            added++
          }
        }
        return added
      }

      const deepDive = async (
        subject: ExamSubject,
        label: string,
        onlyChunks?: string[][]
      ): Promise<number> => {
        // Chunk the units: a subject-wide dump can exceed the output-token
        // limit (verified truncation on big subjects), so ask for at most 4
        // units per call — each response stays small and parses reliably.
        // A subject with no units yet gets one call that also proposes units.
        let chunks: string[][]
        if (onlyChunks) {
          chunks = onlyChunks
        } else if (subject.units.length === 0) {
          chunks = [[]]
        } else {
          chunks = []
          for (let i = 0; i < subject.units.length; i += 4) {
            chunks.push(subject.units.slice(i, i + 4).map((u) => u.name))
          }
        }
        let added = 0
        const failed: string[][] = []
        for (const chunk of chunks) {
          let payload: Record<string, unknown> | null = null
          try {
            payload = await callLLMJsonObject(
              zai,
              TOPICS_SYSTEM,
              `${researchBlock}\n\nExam subject to complete: "${subject.name}"${
                chunk.length
                  ? ` with these units:\n${chunk.map((n, i) => `${i + 1}. ${n}`).join('\n')}`
                  : ' (no unit list available — propose the standard units for this subject yourself)'
              }\n\nReturn the topics for every unit listed.`
            )
          } catch {
            /* this chunk failed — recorded for the retry sweep */
          }
          const chunkAdded = mergeTopicPayload(subject, payload)
          added += chunkAdded
          if (chunkAdded === 0) failed.push(chunk)
        }
        // remember failed chunks so the sweep retries exactly what's missing
        const prev = failedChunks.get(subject) ?? []
        failedChunks.set(subject, [...prev, ...failed])
        sse.send('stage', { stage: 'synthesize', subject: subject.name, note: label })
        return added
      }
      const failedChunks = new Map<ExamSubject, string[][]>()

      for (let si = 0; si < subjects.length; si++) {
        const subject = subjects[si]
        sse.send('stage', {
          stage: 'synthesize',
          subject: subject.name,
          done: si + 1,
          total: subjects.length,
        })
        await deepDive(subject, 'first pass')
      }

      // retry sweep: give the quota time to recover, then re-dive only the
      // chunks that produced nothing
      const toRetry = [...failedChunks.entries()].filter(([, chunks]) => chunks.length > 0)
      if (toRetry.length) {
        sse.send('stage', {
          stage: 'synthesize',
          retry: toRetry.reduce((a, [, c]) => a + c.length, 0),
          note: 'recovering capacity',
        })
        await new Promise((r) => setTimeout(r, 45_000))
        for (const [subject, chunks] of toRetry) {
          failedChunks.set(subject, [])
          await deepDive(subject, 'retry', chunks)
        }
      }

      const anyTopics = subjects.some((s) => s.units.some((u) => u.topics.length > 0))
      if (!anyTopics) {
        fail('Could not extract topics from the research — please try again.')
        return
      }

      // ---- 4. map every topic (and subject) onto the library catalog ----
      // Subject-scoped first: resolve each exam subject to up to three library
      // subject candidates (exact name match first, then the best scored ones),
      // and try a topic against those subjects' chapters BEFORE the global
      // matcher — a chemistry topic should never land in an electronics chapter.
      let topicCount = 0
      let unitCount = 0
      for (const s of subjects) {
        unitCount += s.units.length
        for (const u of s.units) topicCount += u.topics.length
      }
      sse.send('stage', { stage: 'map', topics: topicCount })
      const catalog = getCatalog()
      let mappedCount = 0
      for (const subject of subjects) {
        // candidate library subjects for this exam subject (best first)
        const candidates: string[] = []
        const norm = normKeyRaw(subject.name)
        const exact = LIBRARY_SUBJECTS.find(
          (s) =>
            normKeyRaw(s.name) === norm ||
            (norm.length >= 5 && (normKeyRaw(s.name).includes(norm) || norm.includes(normKeyRaw(s.name))))
        )
        if (exact) candidates.push(exact.id)
        const detail = matchTopicDetailed(subject.name, catalog)
        for (const m of detail.matches) {
          if (!candidates.includes(m.subject.id)) candidates.push(m.subject.id)
          if (candidates.length >= 3) break
        }
        // primary subject link = first candidate
        const primary = candidates[0] ? catalog.subjectById.get(candidates[0]) : undefined
        if (primary) {
          subject.mappedSubjectId = primary.id
          subject.mappedSubjectName = primary.name
        }
        for (const unit of subject.units) {
          for (const topic of unit.topics) {
            let m = null as null | { chapterId?: string | null; chapterTitle?: string | null; subjectId?: string | null; subjectName?: string | null; confidence: number }
            for (const sid of candidates) {
              const within = fuzzyMatchWithinSubject(topic.name, sid, 0.32, catalog)
              if (within) {
                m = within
                break
              }
            }
            if (!m) m = fuzzyMatchTopic(topic.name, catalog)
            if (m && m.confidence >= 0.4) {
              topic.chapterId = m.chapterId ?? null
              topic.chapterTitle = m.chapterTitle ?? null
              topic.subjectId = m.subjectId ?? null
              topic.subjectName = m.subjectName ?? null
              topic.confidence = m.confidence
              mappedCount++
            }
          }
        }
      }

      // ---- 5. persist the map for this device ----
      sse.send('stage', { stage: 'save' })
      const stats: ExamMapStats = {
        subjectCount: subjects.length,
        unitCount,
        topicCount,
        mappedCount,
      }
      const row = await db.examMap.create({
        data: {
          deviceId,
          name,
          overview: JSON.stringify(overview),
          subjects: JSON.stringify(subjects),
          sources: JSON.stringify(sources),
          stats: JSON.stringify(stats),
        },
      })
      finish({ id: row.id, name: row.name })
    } catch (err) {
      console.error('[api/exam-maps]', err)
      fail('Deep research failed — please try again.')
    }
  })()

  return new Response(sse.stream, { headers: SSE_HEADERS })
}
