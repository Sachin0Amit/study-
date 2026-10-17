// ============ Syllabus Mapper — shared server-side helpers (Engine v2) ============
//
// Used by /api/syllabus/* routes. Two layers:
//   1. Defensive LLM-output parsing + local DOCX/DOC text extraction (unchanged).
//   2. The v2 local matcher: an IDF-weighted, stemmed, synonym-aware index over
//      every chapter AND section title in the library (443 chapters / 3.4k
//      sections), with substring + exact-title + section-phrase bonuses. It
//      scores candidates for the ensemble scorer in syllabus-engine.ts and
//      provides "closest chapter" suggestions for unmatched topics.

import {
  LIBRARY_SUBJECTS,
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
  type ChapterMeta,
  type Subject,
} from '@/data/library'

/** Bump when mapping behaviour changes — persisted on every plan. */
export const ENGINE_VERSION = 2

/** One mapped topic — persisted in SyllabusPlan.mapping as JSON */
export interface MappingEntry {
  topic: string
  subjectId?: string | null
  subjectName?: string | null
  chapterId?: string | null
  chapterTitle?: string | null
  confidence: number
  /** how this match was produced (pin = user-confirmed) */
  via?: 'pin' | 'llm' | 'agree' | 'local' | 'subject' | null
  /** for unmatched topics: the best rejected candidate, for "use closest" */
  closest?: {
    chapterId: string
    chapterTitle: string
    subjectId: string
    subjectName: string
    confidence: number
  } | null
}

// ---------------------------------------------------------------- parsing --

/**
 * Pull a JSON array out of an LLM response. Strips markdown fences, slices
 * from the first '[' to the last ']', and falls back to quoted-string
 * extraction. Returns [] when nothing parseable is found.
 */
export function extractJsonArray(text: string): unknown[] {
  if (!text) return []
  let t = text.trim()

  // ```json ... ``` fence
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fence?.[1]) t = fence[1].trim()

  const start = t.indexOf('[')
  const end = t.lastIndexOf(']')
  if (start !== -1 && end > start) {
    try {
      const parsed = JSON.parse(t.slice(start, end + 1))
      if (Array.isArray(parsed)) return parsed
    } catch {
      /* fall through */
    }
  }
  try {
    const parsed = JSON.parse(t)
    if (Array.isArray(parsed)) return parsed
  } catch {
    /* fall through */
  }

  // last resort: every quoted run in the text
  const quoted = t.match(/"([^"\n]{2,160})"/g)
  if (quoted?.length) return quoted.map((q) => q.slice(1, -1))
  return []
}

/** Pull a JSON object out of an LLM response. Strips markdown fences, slices
 *  from the first '{' to the last '}', parses, and returns null when the
 *  result is not a plain object. */
export function extractJsonObject(text: string): Record<string, unknown> | null {
  if (!text) return null
  let t = text.trim()

  // ```json ... ``` fence
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fence?.[1]) t = fence[1].trim()

  const start = t.indexOf('{')
  const end = t.lastIndexOf('}')
  if (start !== -1 && end > start) {
    try {
      const parsed = JSON.parse(t.slice(start, end + 1))
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        return parsed as Record<string, unknown>
      }
    } catch {
      /* fall through */
    }
  }
  try {
    const parsed = JSON.parse(t)
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed as Record<string, unknown>
    }
  } catch {
    /* fall through */
  }
  return null
}

/** Normalize any LLM payload (string[] | {topic|name|title|unit}[]) into clean topic strings */
export function parseTopics(raw: unknown): string[] {
  const out: string[] = []
  const seen = new Set<string>()
  const push = (s: unknown) => {
    if (typeof s !== 'string') return
    const t = cleanTopicLabel(s).slice(0, 160)
    if (t.length < 2) return
    const key = t.toLowerCase()
    if (seen.has(key)) return
    seen.add(key)
    out.push(t)
  }
  if (Array.isArray(raw)) {
    for (const item of raw) {
      if (typeof item === 'string') push(item)
      else if (item && typeof item === 'object') {
        const o = item as Record<string, unknown>
        push(o.topic ?? o.name ?? o.title ?? o.unit)
      }
    }
  }
  return out.slice(0, 80)
}

/** Safely pull choices[0].message.content out of a chat completion response */
export function llmContent(res: unknown): string {
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

// -------------------------------------------------------- topic cleaning --

/**
 * Strip syllabus scaffolding from a topic label so "Unit 3: Thermodynamics —
 * Basic concepts" becomes "Thermodynamics — Basic concepts". Applied before
 * matching and before storing topics.
 */
export function cleanTopicLabel(t: string): string {
  let s = t.replace(/\s+/g, ' ').trim()
  // leading "Unit 3:", "Module II —", "Chapter 2.", "Week 5 -" (with or without separator)
  for (let i = 0; i < 2; i++) {
    s = s.replace(
      /^\s*(?:unit|module|chapter|section|part|topic|week|lesson)\s*[-–—:.]?\s*(?:[ivxlcdm]+|\d+(?:\.\d+)*)\s*[-–—:.)\]]?\s*/i,
      ''
    )
  }
  // leading bare numbering: "3.2 Circuits", "12) Optics", "III - Grammar"
  s = s.replace(/^\s*\d+(?:\.\d+)*\s*[-–—:.)\]]\s+/, '')
  s = s.replace(/^\s*[ivxlcdm]{1,4}\s*[-–—:.)\]]\s+/i, '')
  // trailing enumeration artifacts
  s = s.replace(/[,;–—-]\s*$/, '')
  return s.replace(/\s+/g, ' ').trim()
}

// ---------------------------------------------------------------- catalog --

export interface Catalog {
  /** one line per subject: subjectId="Name" :: id="Chapter title"; ... */
  digest: string
  subjectById: Map<string, Subject>
  bookIdBySubject: Map<string, string>
  chaptersBySubject: Map<string, ChapterMeta[]>
  chapterById: Map<string, ChapterMeta>
  subjectWordSets: Map<string, Set<string>>
  subjectNameWordSets: Map<string, Set<string>>
  chapterWordSets: Map<string, Set<string>>
  /** v2 additions */
  subjectIdByBook: Map<string, string>
  sectionTitlesByChapter: Map<string, string[]>
  idf: Map<string, number>
  defaultIdf: number
  chapterNormTitle: Map<string, string>
  sectionNormTitles: Map<string, string[]>
  subjectNormName: Map<string, string>
}

let catalogCache: Catalog | null = null

const WORD_SPLIT = /[^a-z0-9+#]+/
const STOPWORDS = new Set([
  'and', 'or', 'of', 'the', 'a', 'an', 'in', 'on', 'for', 'to', 'with', 'at',
  'by', 'from', 'into', 'per', 'as', 'is', 'are', 'vs',
  // syllabus noise words (symmetric removal keeps scoring honest)
  'study', 'notes', 'syllabus', 'unit', 'module', 'paper', 'section',
  'overview', 'etc', 'including', 'based', 'following', 'introduction',
  'basic', 'basics', 'concept', 'concepts', 'fundamental', 'fundamentals',
  'core', 'essential', 'principle', 'principles',
])

/** compact synonym / acronym expansion — token → extra tokens (stemmed later).
 *  A Map so tokens like "constructor" or "toString" can't hit Object.prototype. */
const SYNONYMS = new Map<string, string[]>([
  ['maths', ['mathematics']],
  ['math', ['mathematics']],
  ['mathematical', ['mathematics']],
  ['calc', ['calculus']],
  ['phys', ['physics']],
  ['chem', ['chemistry']],
  ['dbms', ['database']],
  ['sql', ['database']],
  ['os', ['operating', 'system']],
  ['toc', ['theory', 'computation', 'automata']],
  ['coa', ['computer', 'organization', 'architecture']],
  ['dsa', ['data', 'structures', 'algorithms']],
  ['ml', ['machine', 'learning']],
  ['ai', ['artificial', 'intelligence']],
  ['nlp', ['natural', 'language', 'processing']],
  ['dl', ['deep', 'learning']],
  ['edc', ['electronic', 'devices', 'circuits']],
  ['comms', ['communication']],
  ['thermo', ['thermodynamics']],
  ['micro', ['microprocessor']],
  ['microprocessor', ['micro']],
  ['ops', ['operating']],
  ['fundamentals', ['fundamental']],
  ['auton', ['automata']],
  ['electronics', ['electronic']],
  ['electricals', ['electrical']],
  ['machinery', ['machine']],
  ['mechanisms', ['mechanism', 'machine']],
])

/** very light, safe suffix stripping (plurals only — avoids stem collisions) */
export function stem(w: string): string {
  if (w.length <= 3) return w
  if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y'
  if (w.endsWith('sses')) return w.slice(0, -2)
  if (w.endsWith('s') && !w.endsWith('ss') && !w.endsWith('us') && !w.endsWith('is')) {
    return w.slice(0, -1)
  }
  return w
}

/** lowercase, split, drop function words, stem + expand synonyms.
 *  Synonyms REPLACE their raw token (curated same-concept aliases): "DBMS"
 *  scores as "database", "machinery" as "machine" — otherwise a rare alias
 *  token would drag an IDF penalty onto every candidate. */
export function tokenize(phrase: string): Set<string> {
  const raw = phrase.toLowerCase().split(WORD_SPLIT)
  const out = new Set<string>()
  for (const w of raw) {
    if (w.length <= 1 || STOPWORDS.has(w)) continue
    const syns = SYNONYMS.get(w)
    if (syns) {
      for (const syn of syns) if (syn) out.add(stem(syn))
    } else {
      out.add(stem(w))
    }
  }
  return out
}

/** backward-compatible word list (stemmed, synonym-expanded) */
export function normalizeWords(s: string): string[] {
  return [...tokenize(s)]
}

function normPhrase(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9+#]+/g, ' ').trim()
}

function buildCatalog(): Catalog {
  const subjectById = new Map(LIBRARY_SUBJECTS.map((s) => [s.id, s]))
  const bookIdBySubject = new Map<string, string>()
  const subjectIdByBook = new Map<string, string>()
  for (const s of LIBRARY_SUBJECTS) {
    const book = LIBRARY_BOOKS.find((b) => b.subjectId === s.id)
    if (book) {
      bookIdBySubject.set(s.id, book.id)
      subjectIdByBook.set(book.id, s.id)
    }
  }
  const chaptersBySubject = new Map<string, ChapterMeta[]>()
  const chapterById = new Map<string, ChapterMeta>()
  for (const c of LIBRARY_CHAPTERS) {
    chapterById.set(c.id, c)
    const sid = subjectIdByBook.get(c.bookId) ?? '__none__'
    const list = chaptersBySubject.get(sid)
    if (list) list.push(c)
    else chaptersBySubject.set(sid, [c])
  }

  // section titles per chapter (the v2 precision signal)
  const sectionTitlesByChapter = new Map<string, string[]>()
  for (const s of LIBRARY_SECTIONS) {
    const list = sectionTitlesByChapter.get(s.chapterId)
    if (list) list.push(s.title)
    else sectionTitlesByChapter.set(s.chapterId, [s.title])
  }

  const subjectWordSets = new Map<string, Set<string>>()
  const subjectNameWordSets = new Map<string, Set<string>>()
  const subjectNormName = new Map<string, string>()
  const lines: string[] = []
  for (const s of LIBRARY_SUBJECTS) {
    const chapters = chaptersBySubject.get(s.id) ?? []
    subjectWordSets.set(s.id, tokenize(`${s.name} ${s.tagline} ${s.description}`))
    subjectNameWordSets.set(s.id, tokenize(s.name))
    subjectNormName.set(s.id, normPhrase(s.name))
    lines.push(
      `${s.id}="${s.name}" :: ${chapters.map((c) => `${c.id}="${c.title}"`).join('; ')}`
    )
  }

  // chapter word sets include their section titles + the subject name (so a
  // topic naming the subject's identity, e.g. "DBMS", credits its chapters)
  const chapterWordSets = new Map<string, Set<string>>()
  const chapterNormTitle = new Map<string, string>()
  const sectionNormTitles = new Map<string, string[]>()
  for (const c of LIBRARY_CHAPTERS) {
    const sections = sectionTitlesByChapter.get(c.id) ?? []
    const sid = subjectIdByBook.get(c.bookId)
    const subjectName = sid ? (subjectById.get(sid)?.name ?? '') : ''
    chapterWordSets.set(
      c.id,
      tokenize(`${c.title} ${c.shortTitle} ${sections.join(' ')} ${subjectName}`)
    )
    chapterNormTitle.set(c.id, normPhrase(`${c.title} ${c.shortTitle}`))
    sectionNormTitles.set(
      c.id,
      sections.map((t) => normPhrase(t)).filter((t) => t.length >= 5)
    )
  }

  // IDF across chapter sets: rare distinctive words dominate the score
  const df = new Map<string, number>()
  for (const words of chapterWordSets.values()) {
    for (const w of words) df.set(w, (df.get(w) ?? 0) + 1)
  }
  const N = Math.max(1, chapterWordSets.size)
  const idf = new Map<string, number>()
  for (const [w, d] of df) idf.set(w, Math.log(1 + N / (1 + d)))
  const defaultIdf = Math.log(1 + N)

  return {
    digest: lines.join('\n'),
    subjectById,
    bookIdBySubject,
    chaptersBySubject,
    chapterById,
    subjectWordSets,
    subjectNameWordSets,
    chapterWordSets,
    subjectIdByBook,
    sectionTitlesByChapter,
    idf,
    defaultIdf,
    chapterNormTitle,
    sectionNormTitles,
    subjectNormName,
  }
}

export function getCatalog(): Catalog {
  if (!catalogCache) catalogCache = buildCatalog()
  return catalogCache
}

// ------------------------------------------------------------- v2 matcher --

export interface TopicMatch {
  chapter: ChapterMeta
  subject: Subject
  score: number
  exact: boolean
  sectionHit: boolean
}

export interface TopicMatchDetail {
  topic: string
  tokens: Set<string>
  norm: string
  /** all scored candidates sorted best-first */
  matches: TopicMatch[]
}

/** score one topic (pre-tokenized) against one chapter.
 *  Raw scores may exceed 1 (bonuses stack on a full IDF overlap) so that
 *  containment evidence can break ties — callers clamp when reporting. */
function scoreChapter(
  detail: { tokens: Set<string>; norm: string },
  chapterId: string,
  catalog: Catalog
): TopicMatch | null {
  const chapter = catalog.chapterById.get(chapterId)
  if (!chapter) return null
  const sid = catalog.subjectIdByBook.get(chapter.bookId)
  const subject = sid ? catalog.subjectById.get(sid) : undefined
  if (!sid || !subject) return null

  const cw = catalog.chapterWordSets.get(chapterId)
  const sw = catalog.subjectWordSets.get(sid)
  const snw = catalog.subjectNameWordSets.get(sid)
  if (!cw || !sw) return null

  let num = 0
  let den = 0
  for (const w of detail.tokens) {
    const idf = catalog.idf.get(w) ?? catalog.defaultIdf
    den += idf
    if (cw.has(w)) num += idf
    else if (sw.has(w)) num += idf * 0.5 // subject-level credit
  }
  const base = den > 0 ? num / den : 0
  // identity bonus: every topic word appears in this subject's NAME —
  // the topic is naming the subject itself ("DBMS", "Operating Systems")
  let identity = true
  if (snw) {
    for (const w of detail.tokens) if (!snw.has(w)) { identity = false; break }
  } else identity = false
  const identityBonus = identity && detail.tokens.size > 0 ? 0.12 : 0

  const normTitle = catalog.chapterNormTitle.get(chapterId) ?? ''
  const normSubject = catalog.subjectNormName.get(sid) ?? ''
  const exact = detail.norm.length >= 3 && detail.norm === normTitle
  const contains =
    !exact &&
    detail.norm.length >= 4 &&
    normTitle.length >= 4 &&
    (normTitle.includes(detail.norm) || detail.norm.includes(normTitle))
  // the topic is (almost) the subject's name — e.g. "Theory of Machines"
  const subjectContains =
    detail.norm.length >= 6 &&
    normSubject.length >= 6 &&
    (normSubject.includes(detail.norm) || detail.norm.includes(normSubject))

  // section-phrase hit: a section title is (almost) the topic itself
  let sectionHit = false
  if (detail.norm.length >= 6) {
    for (const sn of catalog.sectionNormTitles.get(chapterId) ?? []) {
      if (sn.includes(detail.norm) || detail.norm.includes(sn)) {
        sectionHit = true
        break
      }
    }
  }

  const score =
    base +
    identityBonus +
    (exact ? 0.35 : 0) +
    (contains ? 0.25 : 0) +
    (subjectContains ? 0.15 : 0) +
    (sectionHit ? 0.18 : 0)
  return { chapter, subject, score, exact, sectionHit }
}

/** full local analysis of a topic: every chapter scored, best first */
export function matchTopicDetailed(topic: string, catalog = getCatalog()): TopicMatchDetail {
  const tokens = tokenize(topic)
  const norm = normPhrase(topic)
  const matches: TopicMatch[] = []
  if (tokens.size > 0) {
    const detail = { tokens, norm }
    for (const chapterId of catalog.chapterById.keys()) {
      const m = scoreChapter(detail, chapterId, catalog)
      if (m) matches.push(m)
    }
    matches.sort((a, b) => b.score - a.score)
  }
  return { topic, tokens, norm, matches }
}

const FUZZY_ACCEPT = 0.34
/** fuzzy matches cap below the "green" 0.75 confidence — they are best-effort */
const FUZZY_CAP = 0.72

/**
 * Local fuzzy fallback for topics the LLM left null: best chapter by the v2
 * IDF/section-aware scorer, accepted only above FUZZY_ACCEPT.
 */
export function fuzzyMatchTopic(topic: string, catalog = getCatalog()): MappingEntry | null {
  const detail = matchTopicDetailed(topic, catalog)
  const top = detail.matches[0]
  if (!top || top.score < FUZZY_ACCEPT) return null
  const confidence = top.exact ? 0.85 : Math.min(FUZZY_CAP, Math.max(0.4, top.score))
  return {
    topic,
    subjectId: top.subject.id,
    subjectName: top.subject.name,
    chapterId: top.chapter.id,
    chapterTitle: top.chapter.title,
    confidence: Number(confidence.toFixed(2)),
    via: 'local',
  }
}

/** best local match restricted to one subject's chapters (lower accept) */
export function fuzzyMatchWithinSubject(
  topic: string,
  subjectId: string,
  accept = 0.3,
  catalog = getCatalog()
): MappingEntry | null {
  const detail = matchTopicDetailed(topic, catalog)
  const chapters = catalog.chaptersBySubject.get(subjectId) ?? []
  const ids = new Set(chapters.map((c) => c.id))
  const top = detail.matches.find((m) => ids.has(m.chapter.id))
  if (!top || top.score < accept) return null
  const confidence = top.exact ? 0.85 : Math.min(0.68, Math.max(0.4, top.score))
  return {
    topic,
    subjectId: top.subject.id,
    subjectName: top.subject.name,
    chapterId: top.chapter.id,
    chapterTitle: top.chapter.title,
    confidence: Number(confidence.toFixed(2)),
    via: 'local',
  }
}

/** hard validation: subject exists, chapter exists, chapter belongs to that subject's book */
export function isValidMapping(
  subjectId: unknown,
  chapterId: unknown,
  catalog = getCatalog()
): boolean {
  if (typeof subjectId !== 'string' || typeof chapterId !== 'string') return false
  if (!catalog.subjectById.has(subjectId)) return false
  const chapter = catalog.chapterById.get(chapterId)
  if (!chapter) return false
  return chapter.bookId === catalog.bookIdBySubject.get(subjectId)
}

/** clamp a raw confidence value into [0, 1] */
export function clampConfidence(v: unknown): number {
  const n = typeof v === 'number' ? v : parseFloat(String(v))
  if (!Number.isFinite(n)) return 0
  return Math.min(1, Math.max(0, n))
}

// ------------------------------------------------------------ SSE helper --

/**
 * Minimal server-sent-events helper for route handlers:
 *   const sse = sseStream(); return new Response(sse.stream, { headers: SSE_HEADERS, ... })
 *   sse.send('stage', {...}) … sse.close()
 */
export const SSE_HEADERS = {
  'Content-Type': 'text/event-stream; charset=utf-8',
  'Cache-Control': 'no-cache, no-transform',
  Connection: 'keep-alive',
  'X-Accel-Buffering': 'no',
} as const

export function sseStream() {
  let controller: ReadableStreamDefaultController<Uint8Array> | null = null
  const stream = new ReadableStream<Uint8Array>({
    start(c) {
      controller = c
    },
  })
  const encoder = new TextEncoder()
  return {
    stream,
    send(event: string, data: unknown) {
      try {
        controller?.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`))
      } catch {
        /* client gone */
      }
    },
    close() {
      try {
        controller?.close()
      } catch {
        /* already closed */
      }
    },
  }
}

/** reject a promise if it takes too long (keeps live pipelines moving) */
export function withTimeout<T>(p: Promise<T>, ms: number, label = 'timeout'): Promise<T> {
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

/** run async jobs with bounded parallelism, preserving input order */
export async function runWave<T>(items: T[], limit: number, fn: (item: T, i: number) => Promise<void>): Promise<void> {
  let next = 0
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    for (;;) {
      const i = next++
      if (i >= items.length) return
      await fn(items[i], i)
    }
  })
  await Promise.all(workers)
}

// ------------------------------------------------- office text extraction --
// The vision endpoint reads PDFs reliably but not Office documents, so
// DOCX/DOC text is extracted locally (no extra dependencies).

/** word/document.xml → plain text (paragraph breaks, tabs, entity decode) */
function docxXmlToText(xml: string): string {
  const text = xml
    .replace(/<w:tab\s*\/>/g, ' ')
    .replace(/<w:br\s*\/>/g, '\n')
    .replace(/<\/w:p>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
  return text
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join('\n')
}

/** Pull word/document.xml out of a .docx (ZIP) buffer and return its text */
export async function extractDocxText(bytes: Uint8Array): Promise<string | null> {
  try {
    const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
    // locate the End Of Central Directory record (scan back from the end)
    let eocd = -1
    for (let i = bytes.length - 22; i >= 0; i--) {
      if (dv.getUint32(i, true) === 0x06054b50) {
        eocd = i
        break
      }
    }
    if (eocd < 0) return null
    const entryCount = dv.getUint16(eocd + 10, true)
    let ptr = dv.getUint32(eocd + 16, true)
    const dec = new TextDecoder()
    for (let n = 0; n < entryCount; n++) {
      if (dv.getUint32(ptr, true) !== 0x02014b50) break
      const method = dv.getUint16(ptr + 10, true)
      const compSize = dv.getUint32(ptr + 20, true)
      const nameLen = dv.getUint16(ptr + 28, true)
      const extraLen = dv.getUint16(ptr + 30, true)
      const commentLen = dv.getUint16(ptr + 32, true)
      const localOff = dv.getUint32(ptr + 42, true)
      const name = dec.decode(bytes.subarray(ptr + 46, ptr + 46 + nameLen))
      if (name === 'word/document.xml') {
        const lNameLen = dv.getUint16(localOff + 26, true)
        const lExtraLen = dv.getUint16(localOff + 28, true)
        const dataStart = localOff + 30 + lNameLen + lExtraLen
        const comp = bytes.subarray(dataStart, dataStart + compSize)
        let xml: string
        if (method === 0) {
          xml = dec.decode(comp)
        } else if (method === 8) {
          const stream = new Blob([comp as unknown as BlobPart])
            .stream()
            .pipeThrough(new DecompressionStream('deflate-raw'))
          xml = dec.decode(await new Response(stream).arrayBuffer())
        } else {
          return null
        }
        const text = docxXmlToText(xml)
        return text.trim() ? text : null
      }
      ptr += 46 + nameLen + extraLen + commentLen
    }
    return null
  } catch {
    return null
  }
}

/**
 * Heuristic text scrape for legacy .doc (OLE2) files: collect runs of
 * printable characters in both UTF-16LE and single-byte decodings and keep
 * whichever recovers more text. Crude, but enough for topic-line extraction.
 */
export function extractLegacyDocText(bytes: Uint8Array): string {
  const collect = (isPrintable: (b0: number, b1: number, i: number) => boolean, step: number) => {
    const runs: string[] = []
    let cur: string[] = []
    for (let i = 0; i + (step - 1) < bytes.length; i += step) {
      const b0 = bytes[i]
      const b1 = step === 2 ? bytes[i + 1] : 0
      if (isPrintable(b0, b1, i)) {
        cur.push(String.fromCharCode(b0))
      } else {
        if (cur.length >= 4) runs.push(cur.join(''))
        cur = []
      }
    }
    if (cur.length >= 4) runs.push(cur.join(''))
    return runs.join('\n')
  }
  const ascii = collect((b0) => b0 >= 0x20 && b0 <= 0x7e, 1)
  const utf16 = collect((b0, b1) => b1 === 0 && b0 >= 0x20 && b0 <= 0x7e, 2)
  const best = utf16.length > ascii.length ? utf16 : ascii
  return best
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter((l) => l.length >= 4 && /[a-zA-Z]/.test(l))
    .slice(0, 400)
    .join('\n')
}
