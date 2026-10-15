// ============ Syllabus Mapper — shared server-side helpers ============
//
// Used by /api/syllabus/* routes: defensive LLM-output parsing, a compact
// catalog digest for the mapping prompt, code-side id validation and a local
// fuzzy fallback that scores topic words against chapter/subject titles.

import {
  LIBRARY_SUBJECTS,
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  type ChapterMeta,
  type Subject,
} from '@/data/library'

/** One mapped topic — persisted in SyllabusPlan.mapping as JSON */
export interface MappingEntry {
  topic: string
  subjectId?: string | null
  subjectName?: string | null
  chapterId?: string | null
  chapterTitle?: string | null
  confidence: number
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

/** Normalize any LLM payload (string[] | {topic|name|title|unit}[]) into clean topic strings */
export function parseTopics(raw: unknown): string[] {
  const out: string[] = []
  const seen = new Set<string>()
  const push = (s: unknown) => {
    if (typeof s !== 'string') return
    const t = s.replace(/\s+/g, ' ').trim().slice(0, 160)
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

// ---------------------------------------------------------------- catalog --

export interface Catalog {
  /** one line per subject: subjectId="Name" :: id="Chapter title"; ... */
  digest: string
  subjectById: Map<string, Subject>
  bookIdBySubject: Map<string, string>
  chaptersBySubject: Map<string, ChapterMeta[]>
  chapterById: Map<string, ChapterMeta>
  subjectWordSets: Map<string, Set<string>>
  chapterWordSets: Map<string, Set<string>>
}

let catalogCache: Catalog | null = null

const WORD_SPLIT = /[^a-z0-9+#]+/
const STOPWORDS = new Set([
  'and', 'or', 'of', 'the', 'a', 'an', 'in', 'on', 'for', 'to', 'with', 'at',
  'by', 'from', 'into', 'per', 'as', 'is', 'are', 'vs',
])

/** lowercase, strip punctuation, drop function words */
export function normalizeWords(s: string): string[] {
  return s
    .toLowerCase()
    .split(WORD_SPLIT)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w))
}

function buildCatalog(): Catalog {
  const subjectById = new Map(LIBRARY_SUBJECTS.map((s) => [s.id, s]))
  const bookIdBySubject = new Map<string, string>()
  for (const s of LIBRARY_SUBJECTS) {
    const book = LIBRARY_BOOKS.find((b) => b.subjectId === s.id)
    if (book) bookIdBySubject.set(s.id, book.id)
  }
  const chaptersBySubject = new Map<string, ChapterMeta[]>()
  const chapterById = new Map<string, ChapterMeta>()
  for (const c of LIBRARY_CHAPTERS) {
    chapterById.set(c.id, c)
    const sid =
      LIBRARY_SUBJECTS.find((s) => bookIdBySubject.get(s.id) === c.bookId)?.id ?? '__none__'
    const list = chaptersBySubject.get(sid)
    if (list) list.push(c)
    else chaptersBySubject.set(sid, [c])
  }
  const subjectWordSets = new Map<string, Set<string>>()
  const lines: string[] = []
  for (const s of LIBRARY_SUBJECTS) {
    const chapters = chaptersBySubject.get(s.id) ?? []
    subjectWordSets.set(
      s.id,
      new Set(normalizeWords(`${s.name} ${s.tagline} ${s.description}`))
    )
    lines.push(
      `${s.id}="${s.name}" :: ${chapters
        .map((c) => `${c.id}="${c.title}"`)
        .join('; ')}`
    )
  }
  const chapterWordSets = new Map<string, Set<string>>()
  for (const c of LIBRARY_CHAPTERS) {
    chapterWordSets.set(c.id, new Set(normalizeWords(`${c.title} ${c.shortTitle}`)))
  }
  return {
    digest: lines.join('\n'),
    subjectById,
    bookIdBySubject,
    chaptersBySubject,
    chapterById,
    subjectWordSets,
    chapterWordSets,
  }
}

export function getCatalog(): Catalog {
  if (!catalogCache) catalogCache = buildCatalog()
  return catalogCache
}

/** fraction of unique topic words present in the candidate word set */
function overlap(topicWords: Set<string>, candidate: Set<string>): number {
  if (topicWords.size === 0 || candidate.size === 0) return 0
  let hit = 0
  for (const w of topicWords) if (candidate.has(w)) hit++
  return hit / topicWords.size
}

const FUZZY_ACCEPT = 0.45
/** fuzzy matches cap below the "green" 0.75 confidence — they are best-effort */
const FUZZY_CAP = 0.72

/**
 * Local fuzzy fallback for topics the LLM left null (or mapped to invalid
 * ids): scores significant-word overlap against every chapter title, boosted
 * by subject-name overlap and substring containment.
 */
export function fuzzyMatchTopic(topic: string, catalog = getCatalog()): MappingEntry | null {
  const normTopic = topic.toLowerCase().replace(/[^a-z0-9+#]+/g, ' ').trim()
  const words = normalizeWords(topic)
  if (!words.length) return null
  const topicSet = new Set(words)

  let bestScore = 0
  let bestExact = false
  let bestSubject: Subject | null = null
  let bestChapter: ChapterMeta | null = null

  for (const [sid, chapters] of catalog.chaptersBySubject) {
    const subject = catalog.subjectById.get(sid)
    if (!subject) continue
    const sw = catalog.subjectWordSets.get(sid)
    const subjectScore = sw ? overlap(topicSet, sw) : 0
    for (const ch of chapters) {
      const cw = catalog.chapterWordSets.get(ch.id)
      if (!cw) continue
      const chapterScore = overlap(topicSet, cw)
      const normTitle = ch.title.toLowerCase().replace(/[^a-z0-9+#]+/g, ' ').trim()
      const exact = normTopic.length >= 3 && normTopic === normTitle
      const substr =
        normTopic.length >= 4 &&
        normTitle.length >= 4 &&
        (normTitle.includes(normTopic) || normTopic.includes(normTitle))
      let score = chapterScore * 0.7 + subjectScore * 0.2 + (substr ? 0.25 : 0) + (exact ? 0.35 : 0)
      if (score > 1) score = 1
      if (score > bestScore) {
        bestScore = score
        bestExact = exact
        bestSubject = subject
        bestChapter = ch
      }
    }
  }

  if (!bestSubject || !bestChapter || bestScore < FUZZY_ACCEPT) return null
  const confidence = bestExact ? 0.82 : Math.min(FUZZY_CAP, Math.max(0.4, bestScore))
  return {
    topic,
    subjectId: bestSubject.id,
    subjectName: bestSubject.name,
    chapterId: bestChapter.id,
    chapterTitle: bestChapter.title,
    confidence: Number(confidence.toFixed(2)),
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
