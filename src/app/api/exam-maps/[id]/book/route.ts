import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { tokenize } from '@/lib/syllabus'
import {
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
  LIBRARY_SUBJECTS,
  type ChapterMeta,
  type SectionMeta,
} from '@/data/library'
import { allContentAsync } from '@/data/content/server'
import type { ExamSubject, ExamTopic, ExamUnit } from '@/lib/exam-map-types'
import type {
  BookChapter,
  BookSection,
  BookTopicRef,
  ExtraSection,
  SubjectBook,
} from '@/lib/exam-book'

// ============================================================================
// Exam Command Center — the curated SUBJECT BOOK for one exam subject.
//
// GET /api/exam-maps/[id]/book?deviceId=&subject=<index> → { book }
//
// The book is what makes the exam's Study Library feel like a real shelf:
// each subject becomes its own volume whose chapters are ONLY the library
// chapters the syllabus topics mapped onto, whose sections are ONLY the ones
// the topics actually need (section-title matching against every topic), plus
// a collapsed "extras" list per chapter and a "beyond the syllabus" shelf of
// related sections from the subject's other library chapters. Nothing is
// copied — everything links straight back into the main library lessons.
// ============================================================================

export const runtime = 'nodejs'

type Params = { params: Promise<{ id: string }> }

// ------------------------------------------------------------- thresholds --

/** a section counts as "teaches this topic" at ≥ 0.5 topic-token coverage
 *  (or a normalized title containment) */
const SERVES_ACCEPT = 0.5
/** a section from another chapter joins the beyond-the-syllabus shelf */
const EXTRA_ACCEPT = 0.4
/** collapsed extra sections shown per matched chapter */
const MAX_CHAPTER_EXTRAS = 8
/** beyond-the-syllabus sections across the whole subject */
const MAX_EXTRA_KNOWLEDGE = 10

// ----------------------------------------------------------- library index --

interface LibraryIndex {
  chapterById: Map<string, ChapterMeta>
  sectionsByChapter: Map<string, SectionMeta[]>
  bookTitleById: Map<string, string>
  subjectByBook: Map<string, string>
  subjectAccentById: Map<string, string>
  subjectIconById: Map<string, string>
  chaptersBySubject: Map<string, ChapterMeta[]>
}

let libIdx: LibraryIndex | null = null

function getLibIndex(): LibraryIndex {
  if (libIdx) return libIdx
  const chapterById = new Map(LIBRARY_CHAPTERS.map((c) => [c.id, c]))
  const sectionsByChapter = new Map<string, SectionMeta[]>()
  for (const s of LIBRARY_SECTIONS) {
    const arr = sectionsByChapter.get(s.chapterId)
    if (arr) arr.push(s)
    else sectionsByChapter.set(s.chapterId, [s])
  }
  for (const arr of sectionsByChapter.values()) arr.sort((a, b) => a.number - b.number)
  const bookTitleById = new Map(LIBRARY_BOOKS.map((b) => [b.id, b.title]))
  const subjectByBook = new Map(LIBRARY_BOOKS.map((b) => [b.id, b.subjectId]))
  const subjectAccentById = new Map(LIBRARY_SUBJECTS.map((s) => [s.id, s.accent]))
  const subjectIconById = new Map(LIBRARY_SUBJECTS.map((s) => [s.id, s.icon]))
  const chaptersBySubject = new Map<string, ChapterMeta[]>()
  for (const c of LIBRARY_CHAPTERS) {
    const sid = subjectByBook.get(c.bookId)
    if (!sid) continue
    const arr = chaptersBySubject.get(sid)
    if (arr) arr.push(c)
    else chaptersBySubject.set(sid, [c])
  }
  libIdx = {
    chapterById,
    sectionsByChapter,
    bookTitleById,
    subjectByBook,
    subjectAccentById,
    subjectIconById,
    chaptersBySubject,
  }
  return libIdx
}

// ----------------------------------------------------------- reading times --

let readMinsCache: Map<string, number> | null = null

async function readingTimes(): Promise<Map<string, number>> {
  if (!readMinsCache) {
    const all = await allContentAsync()
    readMinsCache = new Map(all.map((c) => [c.sectionId, c.readingTime]))
  }
  return readMinsCache
}

// ------------------------------------------------------- section matching --

function normPhrase(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9+#]+/g, ' ').trim()
}

/** tokenize + symmetric -ing expansion so "bonding" meets "bond" and
 *  "operating" meets "operates"-style variants without a real lemmatizer */
function flexTokens(phrase: string): Set<string> {
  const base = tokenize(phrase)
  const out = new Set(base)
  for (const w of base) {
    if (w.endsWith('ing') && w.length > 6) {
      out.add(w.slice(0, -3))
    } else if (w.length >= 3 && w.length <= 10) {
      out.add(w + 'ing')
      if (w.endsWith('e')) out.add(w.slice(0, -1) + 'ing')
    }
  }
  return out
}

interface TopicTokens {
  base: Set<string>
  flex: Set<string>
  norm: string
}

function topicTokens(name: string): TopicTokens {
  return { base: tokenize(name), flex: flexTokens(name), norm: normPhrase(name) }
}

/** 0–1 relevance of one section to one pre-tokenized topic */
function scoreSection(topic: TopicTokens, section: TopicTokens): number {
  let hit = 0
  for (const w of topic.base) if (section.flex.has(w)) hit++
  let score = topic.base.size > 0 ? hit / topic.base.size : 0
  if (
    topic.norm.length >= 5 &&
    section.norm.length >= 5 &&
    (section.norm.includes(topic.norm) || topic.norm.includes(section.norm))
  ) {
    score = Math.max(score, 0.9)
  }
  return score
}

// ------------------------------------------------------------ row parsing --

function parseArray<T>(raw: string): T[] {
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed as T[]
  } catch {
    /* corrupted row */
  }
  return []
}

/** defensive topic normalization → display ref + optional chapter link */
function normTopic(t: ExamTopic, unit: string): BookTopicRef & { chapterId?: string | null } {
  const name =
    typeof t?.name === 'string' && t.name.trim() ? t.name.replace(/\s+/g, ' ').trim() : ''
  return {
    name,
    unit,
    weightage: typeof t?.weightage === 'number' && t.weightage > 0 ? t.weightage : undefined,
    questionTypes: Array.isArray(t?.questionTypes)
      ? t.questionTypes.filter((q) => typeof q === 'string' && q).slice(0, 4)
      : undefined,
    chapterId: typeof t?.chapterId === 'string' && t.chapterId ? t.chapterId : null,
  }
}

// -------------------------------------------------------------- book build --

async function buildSubjectBook(
  row: { id: string; name: string; subjects: string; updatedAt: Date },
  subjectIndex: number
): Promise<SubjectBook | null> {
  const subjects = parseArray<ExamSubject>(row.subjects)
  const subject = subjects[subjectIndex]
  if (!subject || typeof subject.name !== 'string') return null

  const lib = getLibIndex()
  const mins = await readingTimes()

  const unitsRaw: ExamUnit[] = Array.isArray(subject.units) ? subject.units : []
  const units = unitsRaw
    .filter((u) => u && typeof u.name === 'string')
    .map((u) => ({ name: u.name, topicCount: Array.isArray(u.topics) ? u.topics.length : 0 }))

  // ---- walk the syllabus: every topic with its unit ----
  const allTopics: (BookTopicRef & { chapterId?: string | null })[] = []
  for (const u of unitsRaw) {
    if (!u || typeof u.name !== 'string' || !Array.isArray(u.topics)) continue
    for (const t of u.topics) {
      const ref = normTopic(t as ExamTopic, u.name)
      if (ref.name) allTopics.push(ref)
    }
  }

  // ---- group mapped topics by chapter, preserving syllabus order ----
  const byChapter = new Map<
    string,
    { units: Set<string>; topics: (BookTopicRef & { chapterId?: string | null })[] }
  >()
  const unmapped: BookTopicRef[] = []
  const seenTopicKeys = new Set<string>()
  for (const t of allTopics) {
    const key = t.name.toLowerCase()
    if (seenTopicKeys.has(key)) continue
    seenTopicKeys.add(key)
    if (t.chapterId && lib.chapterById.has(t.chapterId)) {
      const grp = byChapter.get(t.chapterId)
      if (grp) {
        grp.topics.push(t)
        grp.units.add(t.unit)
      } else {
        byChapter.set(t.chapterId, { units: new Set([t.unit]), topics: [t] })
      }
    } else {
      unmapped.push({
        name: t.name,
        unit: t.unit,
        weightage: t.weightage,
        questionTypes: t.questionTypes,
      })
    }
  }

  // all topic tokens of this subject (for the beyond-the-syllabus shelf)
  const allTopicToks = allTopics
    .filter((t) => t.name)
    .slice(0, 120)
    .map((t) => topicTokens(t.name))

  // ---- build the chapters ----
  const chapters: BookChapter[] = []
  for (const [chapterId, grp] of byChapter) {
    const chapter = lib.chapterById.get(chapterId)!
    const sections = lib.sectionsByChapter.get(chapterId) ?? []
    const topicToks = grp.topics.map((t) => topicTokens(t.name))
    const sectionToks = sections.map((s) => topicTokens(s.title))

    const picked: BookSection[] = []
    const extras: BookSection[] = []
    let strongestTopic = grp.topics[0]?.name ?? ''

    for (let i = 0; i < sections.length; i++) {
      const s = sections[i]
      const st = sectionToks[i]
      let best = 0
      let bestTopic = ''
      const serves: string[] = []
      for (let j = 0; j < topicToks.length; j++) {
        const sc = scoreSection(topicToks[j], st)
        if (sc > best) {
          best = sc
          bestTopic = grp.topics[j].name
        }
        if (sc >= SERVES_ACCEPT && !serves.includes(grp.topics[j].name)) {
          serves.push(grp.topics[j].name)
        }
      }
      const entry: BookSection = {
        id: s.id,
        number: s.number,
        title: s.title,
        description: s.description,
        readMins: mins.get(s.id),
        serves,
        score: Number(best.toFixed(2)),
      }
      if (serves.length > 0) {
        picked.push(entry)
        if (bestTopic) strongestTopic = bestTopic
      } else {
        extras.push(entry)
      }
    }

    // fallback: the topic matched the chapter but no single section stood out
    // → the whole chapter IS the syllabus unit
    let includedWhole = false
    if (picked.length === 0 && sections.length > 0) {
      includedWhole = true
      for (const e of extras) {
        e.all = true
        e.serves = [strongestTopic]
        e.score = 0.4
      }
      picked.push(...extras)
      extras.length = 0
    } else {
      // order extras by relevance, cap them
      extras.sort((a, b) => b.score - a.score)
      extras.length = Math.min(extras.length, MAX_CHAPTER_EXTRAS)
    }

    const bookTitle = lib.bookTitleById.get(chapter.bookId) ?? ''
    const hostSubject = lib.subjectByBook.get(chapter.bookId)
    const accent = hostSubject
      ? lib.subjectAccentById.get(hostSubject) ?? '#34d399'
      : '#34d399'

    chapters.push({
      chapterId,
      number: chapter.number,
      title: chapter.title,
      shortTitle: chapter.shortTitle || chapter.title,
      description: chapter.description,
      bookTitle,
      accent,
      units: [...grp.units],
      topics: grp.topics.map((t) => ({
        name: t.name,
        unit: t.unit,
        weightage: t.weightage,
        questionTypes: t.questionTypes,
      })),
      sections: picked,
      extras,
      includedWhole,
    })
  }

  // ---- beyond the syllabus: related sections in the subject's OTHER books ----
  const extraKnowledge: ExtraSection[] = []
  const mappedSubjectId =
    typeof subject.mappedSubjectId === 'string' && subject.mappedSubjectId
      ? subject.mappedSubjectId
      : null
  if (mappedSubjectId) {
    const inBook = new Set(chapters.map((c) => c.chapterId))
    const candidates: { section: SectionMeta; chapter: ChapterMeta; score: number; topic: string }[] =
      []
    for (const chapter of lib.chaptersBySubject.get(mappedSubjectId) ?? []) {
      if (inBook.has(chapter.id)) continue
      for (const s of lib.sectionsByChapter.get(chapter.id) ?? []) {
        const st = topicTokens(s.title)
        let best = 0
        let bestTopicIdx = -1
        for (let j = 0; j < allTopicToks.length; j++) {
          const sc = scoreSection(allTopicToks[j], st)
          if (sc > best) {
            best = sc
            bestTopicIdx = j
          }
        }
        if (best >= EXTRA_ACCEPT) {
          candidates.push({
            section: s,
            chapter,
            score: best,
            topic: bestTopicIdx >= 0 ? (allTopics[bestTopicIdx]?.name ?? '') : '',
          })
        }
      }
    }
    candidates.sort((a, b) => b.score - a.score)
    const seen = new Set<string>()
    for (const c of candidates) {
      if (extraKnowledge.length >= MAX_EXTRA_KNOWLEDGE) break
      if (seen.has(c.section.id)) continue
      seen.add(c.section.id)
      extraKnowledge.push({
        id: c.section.id,
        number: c.section.number,
        title: c.section.title,
        description: c.section.description,
        readMins: mins.get(c.section.id),
        serves: c.topic ? [c.topic] : [],
        score: Number(c.score.toFixed(2)),
        chapterId: c.chapter.id,
        chapterNumber: c.chapter.number,
        chapterTitle: c.chapter.title,
        chapterShortTitle: c.chapter.shortTitle || c.chapter.title,
      })
    }
  }

  // ---- totals ----
  const sectionCount = chapters.reduce((a, c) => a + c.sections.length, 0)
  const readMins = chapters.reduce(
    (a, c) => a + c.sections.reduce((b, s) => b + (s.readMins ?? 0), 0),
    0
  )

  return {
    examId: row.id,
    examName: row.name,
    subjectIndex,
    subjectName: subject.name,
    subjectWeightage:
      typeof subject.weightage === 'number' && subject.weightage > 0 ? subject.weightage : undefined,
    mappedSubjectId,
    mappedSubjectName:
      typeof subject.mappedSubjectName === 'string' ? subject.mappedSubjectName : null,
    mappedSubjectIcon: mappedSubjectId ? lib.subjectIconById.get(mappedSubjectId) ?? null : null,
    accent:
      (mappedSubjectId ? lib.subjectAccentById.get(mappedSubjectId) : undefined) ?? '#34d399',
    units,
    chapters,
    unmapped,
    extraKnowledge,
    totals: {
      topics: allTopics.length,
      mapped: allTopics.length - unmapped.length,
      units: units.length,
      chapters: chapters.length,
      sections: sectionCount,
      readMins: Math.round(readMins),
      extraCount: extraKnowledge.length,
    },
  }
}

// ------------------------------------------------------------------- cache --

const bookCache = new Map<string, SubjectBook>()

// -------------------------------------------------------------------- GET --

export async function GET(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params
    const deviceId = req.nextUrl.searchParams.get('deviceId')
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }
    const subjectIndex = parseInt(req.nextUrl.searchParams.get('subject') ?? '0', 10)
    if (!Number.isInteger(subjectIndex) || subjectIndex < 0 || subjectIndex > 40) {
      return NextResponse.json({ error: 'invalid subject index' }, { status: 400 })
    }

    const row = await db.examMap.findUnique({ where: { id } })
    if (!row || row.deviceId !== deviceId) {
      return NextResponse.json({ error: 'not found' }, { status: 404 })
    }

    const cacheKey = `${row.id}:${subjectIndex}:${row.updatedAt.getTime()}`
    const cached = bookCache.get(cacheKey)
    if (cached) {
      return NextResponse.json({ book: cached })
    }

    const book = await buildSubjectBook(row, subjectIndex)
    if (!book) {
      return NextResponse.json({ error: 'subject not found in this map' }, { status: 404 })
    }

    if (bookCache.size >= 40) {
      const oldest = bookCache.keys().next().value
      if (oldest) bookCache.delete(oldest)
    }
    bookCache.set(cacheKey, book)

    return NextResponse.json({ book })
  } catch (err) {
    console.error('[api/exam-maps book]', err)
    return NextResponse.json({ error: 'Could not build this subject book.' }, { status: 500 })
  }
}
