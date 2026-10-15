import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { db } from '@/lib/db'
import { askLlm } from '@/lib/studio'
import {
  SSE_HEADERS,
  extractDocxText,
  extractLegacyDocText,
  extractJsonArray,
  llmContent,
  matchTopicDetailed,
  sseStream,
  withTimeout,
} from '@/lib/syllabus'

// ============ X7 — Paper-DNA Forensic Analyzer (SSE pipeline) ============
//
// POST  multipart { deviceId, files[] (1-8 × ≤10MB), title? } → SSE stream:
//   stage {label, fileIndex?}   live progress
//   file  {name, index, total, questions}
//   warn  {message}             per-file soft failures (pipeline continues)
//   done  {id, stats}           analysis persisted
//   error {error}
// GET ?deviceId= → latest 20 analyses (id, title, totals, createdAt).

export const runtime = 'nodejs'
export const maxDuration = 300

const MAX_FILES = 8
const MAX_BYTES = 10 * 1024 * 1024
const MAX_QUESTIONS_PER_FILE = 80
const VISION_TIMEOUT_MS = 150_000
const MATCH_ACCEPT = 0.4 // minimum local-matcher score to accept a chapter map

const ALLOWED_EXT = new Set([
  '.pdf',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.txt',
  '.doc',
  '.docx',
])

const IMAGE_MIME: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
}

// ------------------------------------------------------------- rate limit --

/** in-memory concurrency guard: max 3 live SSE pipes per device */
const activePipes = new Map<string, number>()

function acquirePipe(deviceId: string): boolean {
  const n = activePipes.get(deviceId) ?? 0
  if (n >= 3) return false
  activePipes.set(deviceId, n + 1)
  return true
}

function releasePipe(deviceId: string) {
  const n = activePipes.get(deviceId) ?? 0
  if (n <= 1) activePipes.delete(deviceId)
  else activePipes.set(deviceId, n - 1)
}

// ------------------------------------------------------------------ types --

type QType = 'mcq' | 'numerical' | 'short' | 'long' | 'assertion'
type QDifficulty = 'easy' | 'medium' | 'hard'

interface PaperQuestion {
  q: string
  type: QType
  difficulty: QDifficulty
  marks: number | null
  year: number | null
  fileIndex: number
  fileName: string
  chapterId: string | null
  chapterTitle: string | null
  subjectName: string | null
  confidence: number | null
}

interface FileMeta {
  name: string
  year: number | null
  questionCount: number
}

interface HotTopic {
  chapterId: string
  chapterTitle: string
  subjectName: string
  count: number
  share: number
  avgConfidence: number | null
  recentShare: number
}

interface DriftRow {
  chapterId: string
  chapterTitle: string
  subjectName: string
  trend: 'rising' | 'falling' | 'stable'
  slope: number
  series: Record<string, number>
}

interface Prediction {
  chapterId: string
  chapterTitle: string
  subjectName: string
  score: number
  reasons: string[]
}

interface Stats {
  hotTopics: HotTopic[]
  drift: DriftRow[]
  typeMix: Record<string, number>
  difficultyMix: Record<string, number>
  predictions: Prediction[]
  totals: {
    questions: number
    files: number
    chaptersTouched: number
    yearsSpan: number
  }
}

// ------------------------------------------------------------ LLM helpers --

const EXTRACT_SYSTEM = `You are a forensic question-paper analyzer. Read the given past question paper and extract EVERY question it contains, verbatim.
Return ONLY a JSON array — no commentary, no markdown fence. Each element must be an object:
{"q":"full question text verbatim","type":"mcq|numerical|short|long|assertion","difficulty":"easy|medium|hard","marks":number or null,"year":number or null}
Rules:
- "type": "mcq" when answer options are printed; "numerical" when a numeric answer is expected; "assertion" for assertion-reason items; otherwise "short" or "long" by expected answer length.
- "difficulty": your best reading of how hard the question is for a well-prepared student.
- "marks": the marks printed for the question, if visible; else null.
- "year": the year printed on the paper header if visible; else null.
- Keep each question's text as one string; include options only as part of the text when they are short.
- Extract up to 80 questions. Every element of the array must be one of the objects above.`

function yearFromName(name: string): number | null {
  const m = name.match(/(19|20)\d{2}/)
  if (!m) return null
  const y = Number(m[0])
  return y >= 1900 && y <= 2099 ? y : null
}

/** vision-model call with 429-aware retry (same policy as askLlm) */
async function askVision(
  zai: Awaited<ReturnType<typeof ZAI.create>>,
  prompt: string,
  fileUrl: string,
  asImage: boolean
): Promise<string> {
  let lastErr: unknown = null
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const completion = await withTimeout(
        zai.chat.completions.createVision({
          model: 'glm-4.5v',
          messages: [
            {
              role: 'user',
              content: [
                { type: 'text', text: prompt },
                asImage
                  ? { type: 'image_url', image_url: { url: fileUrl } }
                  : { type: 'file_url', file_url: { url: fileUrl } },
              ],
            },
          ],
          thinking: { type: 'disabled' },
        }),
        VISION_TIMEOUT_MS,
        'vision-timeout'
      )
      return llmContent(completion)
    } catch (err) {
      lastErr = err
      const msg = err instanceof Error ? err.message : String(err)
      const rateLimited = /429|too many/i.test(msg)
      if (!rateLimited || attempt === 2) throw err
      await new Promise((r) => setTimeout(r, 2200 * (attempt + 1)))
    }
  }
  throw lastErr ?? new Error('vision-failed')
}

const QTYPES = new Set(['mcq', 'numerical', 'short', 'long', 'assertion'])
const QDIFFS = new Set(['easy', 'medium', 'hard'])

/** normalize raw LLM output into clean, deduped question records */
function normalizeQuestions(
  raw: unknown[],
  fallbackYear: number | null,
  cap = MAX_QUESTIONS_PER_FILE
): { q: string; type: QType; difficulty: QDifficulty; marks: number | null; year: number | null }[] {
  const out: {
    q: string
    type: QType
    difficulty: QDifficulty
    marks: number | null
    year: number | null
  }[] = []
  const seen = new Set<string>()
  for (const item of raw) {
    let q = ''
    let type = 'short'
    let difficulty = 'medium'
    let marks: number | null = null
    let year = fallbackYear
    if (typeof item === 'string') {
      q = item
    } else if (item && typeof item === 'object') {
      const o = item as Record<string, unknown>
      q = typeof o.q === 'string' ? o.q : typeof o.question === 'string' ? o.question : ''
      if (typeof o.type === 'string' && QTYPES.has(o.type)) type = o.type
      if (typeof o.difficulty === 'string' && QDIFFS.has(o.difficulty)) difficulty = o.difficulty
      if (typeof o.marks === 'number' && Number.isFinite(o.marks)) marks = o.marks
      if (typeof o.year === 'number' && o.year >= 1900 && o.year <= 2099) year = o.year
    }
    q = q.replace(/\s+/g, ' ').trim().slice(0, 600)
    if (q.length < 8) continue // heading / artifact / junk
    const key = q.toLowerCase().slice(0, 120)
    if (seen.has(key)) continue
    seen.add(key)
    out.push({
      q,
      type: type as QType,
      difficulty: difficulty as QDifficulty,
      marks,
      year: year !== null && year >= 1900 && year <= 2099 ? year : null,
    })
    if (out.length >= cap) break
  }
  return out
}

// --------------------------------------------------------- chapter mapping --

interface ChapterMap {
  chapterId: string
  chapterTitle: string
  subjectName: string
  confidence: number
}

/**
 * Map one question to the best library chapter with the v2 local matcher.
 * Question text is truncated before matching so MCQ options / stems don't
 * drown the topic signal. Returns null below the accept threshold.
 */
function mapQuestion(question: string, cache: Map<string, ChapterMap | null>): ChapterMap | null {
  const key = question.slice(0, 120).toLowerCase()
  if (cache.has(key)) return cache.get(key) ?? null
  let result: ChapterMap | null = null
  try {
    const detail = matchTopicDetailed(question.slice(0, 120))
    const top = detail.matches[0]
    if (top && top.score >= MATCH_ACCEPT) {
      const confidence = top.exact ? 0.85 : Math.min(0.9, Math.max(0.4, top.score))
      result = {
        chapterId: top.chapter.id,
        chapterTitle: top.chapter.title,
        subjectName: top.subject.name,
        confidence: Number(confidence.toFixed(2)),
      }
    }
  } catch {
    result = null // matcher hiccup on odd input — question stays unmapped
  }
  cache.set(key, result)
  return result
}

// ------------------------------------------------------------ aggregation --

/** least-squares slope of y over x=[0..n-1] */
function regressionSlope(counts: number[]): number {
  const n = counts.length
  if (n < 2) return 0
  const meanX = (n - 1) / 2
  const meanY = counts.reduce((a, b) => a + b, 0) / n
  let num = 0
  let den = 0
  for (let i = 0; i < n; i++) {
    num += (i - meanX) * (counts[i] - meanY)
    den += (i - meanX) ** 2
  }
  return den === 0 ? 0 : num / den
}

function modeOf(values: number[]): number | null {
  if (!values.length) return null
  const counts = new Map<number, number>()
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1)
  let best: number | null = null
  let bestN = -1
  for (const [v, n] of counts) {
    if (n > bestN || (n === bestN && best !== null && v > best)) {
      best = v
      bestN = n
    }
  }
  return best
}

/**
 * Pure-TS forensic stats over the normalized question list. No LLM calls —
 * everything below is deterministic counting, regression and scoring.
 */
function aggregateStats(questions: PaperQuestion[], fileMetas: FileMeta[]): Stats {
  const total = questions.length
  const fileCount = fileMetas.length

  // ---- period axis: printed years when at least one question carries one,
  //      otherwise file order ("File 1", "File 2", …).
  const knownYears = questions.filter((q) => q.year !== null).map((q) => q.year as number)
  const useYears = knownYears.length > 0
  const globalYear = modeOf(knownYears)

  const fileFill = new Map<number, number | null>()
  for (let i = 0; i < fileCount; i++) {
    const years = questions.filter((q) => q.fileIndex === i && q.year !== null).map((q) => q.year as number)
    fileFill.set(i, modeOf(years) ?? globalYear)
  }

  // per-question period label + recency flag
  const yearAxisLabels: number[] = []
  const periodOf = (q: PaperQuestion): string => {
    if (useYears) {
      const y = q.year ?? fileFill.get(q.fileIndex) ?? globalYear
      if (y !== null) {
        if (!yearAxisLabels.includes(y)) yearAxisLabels.push(y)
        return String(y)
      }
    }
    return `File ${q.fileIndex + 1}`
  }
  for (const q of questions) periodOf(q)
  const periods = useYears && yearAxisLabels.length ? [...yearAxisLabels].sort((a, b) => a - b) : []
  const periodLabels = periods.length
    ? periods.map(String)
    : [...new Set(questions.map((q) => `File ${q.fileIndex + 1}`))].sort((a, b) => {
        const na = Number(a.replace('File ', ''))
        const nb = Number(b.replace('File ', ''))
        return na - nb
      })
  const periodIndex = new Map(periodLabels.map((p, i) => [p, i]))

  const maxYear = periods.length ? periods[periods.length - 1] : null
  const isRecent = (q: PaperQuestion): boolean => {
    if (useYears && maxYear !== null) {
      const y = q.year ?? fileFill.get(q.fileIndex) ?? globalYear
      return y !== null && y >= maxYear - 1
    }
    return q.fileIndex >= fileCount - 2
  }

  // ---- group by chapter (unmapped → 'unmapped')
  interface Group {
    chapterId: string
    chapterTitle: string
    subjectName: string
    count: number
    confSum: number
    confN: number
    recent: number
    mediumHard: number
    byPeriod: Map<string, number>
  }
  const groups = new Map<string, Group>()
  for (const q of questions) {
    const key = q.chapterId ?? 'unmapped'
    let g = groups.get(key)
    if (!g) {
      g = {
        chapterId: key,
        chapterTitle: q.chapterTitle ?? 'Unmapped questions',
        subjectName: q.subjectName ?? '—',
        count: 0,
        confSum: 0,
        confN: 0,
        recent: 0,
        mediumHard: 0,
        byPeriod: new Map(),
      }
      groups.set(key, g)
    }
    g.count++
    if (q.confidence !== null) {
      g.confSum += q.confidence
      g.confN++
    }
    if (isRecent(q)) g.recent++
    if (q.difficulty === 'medium' || q.difficulty === 'hard') g.mediumHard++
    const p = periodOf(q)
    g.byPeriod.set(p, (g.byPeriod.get(p) ?? 0) + 1)
  }

  const sorted = [...groups.values()].sort((a, b) => b.count - a.count)
  const maxCount = sorted.length ? sorted[0].count : 1

  // ---- hot topics (top 20)
  const hotTopics: HotTopic[] = sorted.slice(0, 20).map((g) => ({
    chapterId: g.chapterId,
    chapterTitle: g.chapterTitle,
    subjectName: g.subjectName,
    count: g.count,
    share: total ? Math.round((g.count / total) * 1000) / 10 : 0,
    avgConfidence: g.confN ? Math.round((g.confSum / g.confN) * 100) / 100 : null,
    recentShare: g.count ? Math.round((g.recent / g.count) * 1000) / 10 : 0,
  }))

  // ---- drift: per-chapter counts per period + regression trend
  const drift: DriftRow[] = sorted.slice(0, 20).map((g) => {
    const counts = periodLabels.map((p) => g.byPeriod.get(p) ?? 0)
    const slope = regressionSlope(counts)
    const mean = g.count / Math.max(1, counts.length)
    const rel = slope / Math.max(0.5, mean)
    const trend: DriftRow['trend'] = rel > 0.12 ? 'rising' : rel < -0.12 ? 'falling' : 'stable'
    const series: Record<string, number> = {}
    periodLabels.forEach((p, i) => {
      series[p] = counts[i]
    })
    return {
      chapterId: g.chapterId,
      chapterTitle: g.chapterTitle,
      subjectName: g.subjectName,
      trend,
      slope: Math.round(slope * 1000) / 1000,
      series,
    }
  })
  const trendByChapter = new Map(drift.map((d) => [d.chapterId, d.trend]))

  // ---- type / difficulty mixes
  const typeMix: Record<string, number> = { mcq: 0, numerical: 0, short: 0, long: 0, assertion: 0 }
  const difficultyMix: Record<string, number> = { easy: 0, medium: 0, hard: 0 }
  for (const q of questions) {
    typeMix[q.type] = (typeMix[q.type] ?? 0) + 1
    difficultyMix[q.difficulty] = (difficultyMix[q.difficulty] ?? 0) + 1
  }

  // ---- predictions: Bayesian-flavored hot-topic score
  //      0.45 normalized frequency + 0.25 recency + 0.20 rising trend
  //      + 0.10 medium/hard difficulty weight.
  const predictions: Prediction[] = [...groups.values()]
    .filter((g) => g.chapterId !== 'unmapped')
    .map((g) => {
      const normFreq = g.count / maxCount
      const recency = g.count ? g.recent / g.count : 0
      const rising = trendByChapter.get(g.chapterId) === 'rising' ? 1 : 0
      const hard = g.count ? g.mediumHard / g.count : 0
      const score = 0.45 * normFreq + 0.25 * recency + 0.2 * rising + 0.1 * hard
      const reasons: string[] = []
      reasons.push(`${g.count} question${g.count === 1 ? '' : 's'} in the corpus`)
      if (recency >= 0.5) reasons.push(`${Math.round(recency * 100)}% from the most recent papers`)
      if (rising) reasons.push('appearance trend is rising')
      else if (trendByChapter.get(g.chapterId) === 'falling') reasons.push('cooling off in recent papers')
      if (hard >= 0.5) reasons.push(`${Math.round(hard * 100)}% medium/hard difficulty`)
      if (g.confN && g.confSum / g.confN < 0.55) reasons.push('matches are low-confidence — verify')
      return {
        chapterId: g.chapterId,
        chapterTitle: g.chapterTitle,
        subjectName: g.subjectName,
        score: Math.round(Math.min(1, score) * 1000) / 1000,
        reasons: reasons.slice(0, 4),
      }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)

  // ---- totals
  const chaptersTouched = new Set(
    questions.filter((q) => q.chapterId).map((q) => q.chapterId as string)
  ).size
  const yearsSpan = periods.length ? periods.length : fileCount

  return {
    hotTopics,
    drift,
    typeMix,
    difficultyMix,
    predictions,
    totals: { questions: total, files: fileCount, chaptersTouched, yearsSpan },
  }
}

// -------------------------------------------------------------------- POST --

/** POST /api/paper-dna — multipart { deviceId, files[], title? } → SSE */
export async function POST(req: NextRequest) {
  let deviceId = ''
  let files: File[] = []
  let title = ''

  try {
    const form = await req.formData()
    deviceId = typeof form.get('deviceId') === 'string' ? String(form.get('deviceId')) : ''
    title = typeof form.get('title') === 'string' ? String(form.get('title')).trim().slice(0, 200) : ''
    const raw = form.getAll('files')
    for (const f of raw) if (f instanceof File) files.push(f)
  } catch {
    return NextResponse.json({ error: 'Could not read the upload — please retry.' }, { status: 400 })
  }

  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  if (!files.length || files.length > MAX_FILES) {
    return NextResponse.json(
      { error: `Attach between 1 and ${MAX_FILES} question-paper files.` },
      { status: 400 }
    )
  }
  for (const f of files) {
    const ext = f.name.slice(f.name.lastIndexOf('.')).toLowerCase()
    if (!ALLOWED_EXT.has(ext)) {
      return NextResponse.json(
        { error: `"${f.name}" is not a supported type — use PDF, images (PNG/JPG/WEBP) or TXT.` },
        { status: 400 }
      )
    }
    if (f.size > MAX_BYTES) {
      return NextResponse.json({ error: `"${f.name}" is larger than 10 MB.` }, { status: 413 })
    }
  }

  if (!acquirePipe(deviceId)) {
    return NextResponse.json(
      { error: 'An analysis is already running for this device — please wait for it to finish.' },
      { status: 429 }
    )
  }

  const sse = sseStream()
  const finalTitle = title || files[0].name

  void (async () => {
    let settled = false
    const finish = (event: string, payload: Record<string, unknown>) => {
      if (settled) return
      settled = true
      sse.send(event, payload)
      sse.close()
      releasePipe(deviceId)
    }

    try {
      const zai = await ZAI.create()
      const questions: PaperQuestion[] = []
      const fileMetas: FileMeta[] = []
      const mapCache = new Map<string, ChapterMap | null>()

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const ext = file.name.slice(file.name.lastIndexOf('.')).toLowerCase()
        const fallbackYear = yearFromName(file.name)

        sse.send('stage', { label: `Reading ${file.name}…`, fileIndex: i })
        let warnedFile = false

        let extracted: { q: string; type: QType; difficulty: QDifficulty; marks: number | null; year: number | null }[] = []

        try {
          if (ext === '.txt') {
            const text = await file.text()
            if (!text.trim()) {
              sse.send('warn', { message: `${file.name} appears to be empty — skipped.` })
              warnedFile = true
            } else {
              sse.send('stage', { label: `Extracting questions from ${file.name}…`, fileIndex: i })
              const raw = await askLlm(zai, EXTRACT_SYSTEM, text.slice(0, 60_000))
              extracted = normalizeQuestions(extractJsonArray(raw), fallbackYear)
            }
          } else if (ext === '.docx' || ext === '.doc') {
            const bytes = new Uint8Array(await file.arrayBuffer())
            const text = ext === '.docx' ? await extractDocxText(bytes) : extractLegacyDocText(bytes)
            if (!text || !text.trim()) {
              sse.send('warn', { message: `Could not read ${file.name} — try saving it as PDF.` })
              warnedFile = true
            } else {
              sse.send('stage', { label: `Extracting questions from ${file.name}…`, fileIndex: i })
              const raw = await askLlm(zai, EXTRACT_SYSTEM, text.slice(0, 60_000))
              extracted = normalizeQuestions(extractJsonArray(raw), fallbackYear)
            }
          } else {
            const bytes = Buffer.from(await file.arrayBuffer())
            const mime = IMAGE_MIME[ext] ?? 'application/pdf'
            const dataUrl = `data:${mime};base64,${bytes.toString('base64')}`
            sse.send('stage', { label: `Extracting questions from ${file.name}…`, fileIndex: i })
            const raw = await askVision(zai, EXTRACT_SYSTEM.replace('the given past question paper', 'the attached question paper'), dataUrl, !!IMAGE_MIME[ext])
            extracted = normalizeQuestions(extractJsonArray(raw), fallbackYear)
            // vision output can be messy — one text-model cleanup pass
            if (!extracted.length) {
              const messy = raw.slice(0, 24_000)
              if (messy.trim()) {
                sse.send('stage', { label: `Cleaning up ${file.name}…`, fileIndex: i })
                const cleaned = await askLlm(zai, EXTRACT_SYSTEM, messy)
                extracted = normalizeQuestions(extractJsonArray(cleaned), fallbackYear)
              }
            }
          }
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err)
          sse.send('warn', {
            message: `Could not analyze ${file.name}${msg.includes('timeout') ? ' (timed out)' : ''} — skipped.`,
          })
          warnedFile = true
        }

        if (!extracted.length && !warnedFile) {
          sse.send('warn', { message: `No questions found in ${file.name} — skipped.` })
        }

        // map every extracted question to the library catalog
        if (extracted.length) {
          sse.send('stage', { label: `Matching ${file.name} questions to chapters…`, fileIndex: i })
          for (const ex of extracted) {
            const m = mapQuestion(ex.q, mapCache)
            questions.push({
              ...ex,
              fileIndex: i,
              fileName: file.name,
              chapterId: m?.chapterId ?? null,
              chapterTitle: m?.chapterTitle ?? null,
              subjectName: m?.subjectName ?? null,
              confidence: m?.confidence ?? null,
            })
          }
        }

        fileMetas.push({ name: file.name, year: fallbackYear, questionCount: extracted.length })
        sse.send('file', {
          name: file.name,
          index: i,
          total: files.length,
          questions: extracted.length,
        })
      }

      if (!questions.length) {
        finish('error', {
          error: 'No questions could be read from the uploaded files — check that they are readable question papers.',
        })
        return
      }

      sse.send('stage', { label: 'Crunching the paper DNA…' })
      const stats = aggregateStats(questions, fileMetas)

      sse.send('stage', { label: 'Saving the forensic report…' })
      const row = await db.paperAnalysis.create({
        data: {
          deviceId,
          title: finalTitle,
          files: JSON.stringify(fileMetas),
          questions: JSON.stringify(
            questions.map((q) => ({
              text: q.q,
              year: q.year,
              type: q.type,
              difficulty: q.difficulty,
              marks: q.marks,
              fileIndex: q.fileIndex,
              chapterId: q.chapterId,
              chapterTitle: q.chapterTitle,
              subjectName: q.subjectName,
              confidence: q.confidence,
            }))
          ),
          stats: JSON.stringify(stats),
        },
      })

      finish('done', {
        id: row.id,
        title: row.title,
        stats,
        files: fileMetas,
        createdAt: row.createdAt.toISOString(),
      })
    } catch (err) {
      console.error('[api/paper-dna POST]', err)
      finish('error', { error: 'The forensic analysis failed — please try again.' })
    }
  })()

  return new Response(sse.stream, { headers: SSE_HEADERS })
}

// --------------------------------------------------------------------- GET --

/** GET /api/paper-dna?deviceId=… — latest 20 analyses for the device */
export async function GET(req: NextRequest) {
  try {
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const rows = await db.paperAnalysis.findMany({
      where: { deviceId },
      orderBy: { createdAt: 'desc' },
      take: 20,
      select: { id: true, title: true, files: true, stats: true, createdAt: true },
    })
    const analyses = rows.map((r) => {
      let totals: Stats['totals'] | null = null
      let fileCount = 0
      try {
        const stats = JSON.parse(r.stats) as Stats
        totals = stats?.totals ?? null
      } catch {
        totals = null
      }
      try {
        const files = JSON.parse(r.files) as FileMeta[]
        fileCount = Array.isArray(files) ? files.length : 0
      } catch {
        fileCount = 0
      }
      return {
        id: r.id,
        title: r.title,
        fileCount,
        totals,
        createdAt: r.createdAt.toISOString(),
      }
    })
    return NextResponse.json({ analyses })
  } catch (err) {
    console.error('[api/paper-dna GET]', err)
    return NextResponse.json({ error: 'Could not load past analyses.' }, { status: 500 })
  }
}
