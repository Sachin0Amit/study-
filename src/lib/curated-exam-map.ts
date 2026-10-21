/**
 * Curated-exam map builder — server-side.
 *
 * Turns a CuratedExam (official syllabus: subjects → units → topics →
 * subtopics) into the same ExamMap JSON shape the live-research path
 * produces, by mapping every topic onto library chapters:
 *   1. subject-scoped masters-library match (mappedSubjectId hint / derived)
 *   2. global masters-library fuzzy match
 *   3. Knowledge-University topic match (pseudo chapter = the ku topic)
 *
 * The result is saved to the same ExamMap table, so the Study Library,
 * subject books, progress tracking and deep links all work unchanged.
 */
import { readFileSync } from 'fs'
import { join } from 'path'
import type { CuratedExam, CuratedSubject } from '@/data/exams/types'
import type {
  ExamOverview,
  ExamSubject,
  ExamMapSource,
  ExamMapStats,
} from '@/lib/exam-map-types'
import {
  getCatalog,
  fuzzyMatchWithinSubject,
  fuzzyMatchTopic,
  matchTopicDetailed,
  tokenize,
} from '@/lib/syllabus'
import type { Catalog } from '@/lib/syllabus'
import { TOPIC_ALIASES, normalizeTopicName } from '@/data/exams/topic-aliases'

// ----------------------------------------------------- knowledge index -----

export interface KnowledgeIndexEntry {
  id: string
  title: string
  domain: string
  field: string
  branch: string
  concepts: string[]
  readMins: number
  words: number
}

let knEntries: KnowledgeIndexEntry[] | null = null

/** Lightweight Knowledge-University index (built by scripts/build-knowledge-index.ts).
 *  Read via fs — never bundled (the full corpus is ~25 MB of TS). */
export function knowledgeIndex(): KnowledgeIndexEntry[] {
  if (!knEntries) {
    knEntries = JSON.parse(
      readFileSync(join(process.cwd(), 'public', 'data', 'exam-knowledge-index.json'), 'utf8')
    ) as KnowledgeIndexEntry[]
  }
  return knEntries
}

export function fieldSlug(field: string): string {
  return (
    'kuf-' +
    field
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  )
}

interface KnowledgeCandidate {
  entry: KnowledgeIndexEntry
  tokens: Set<string>
  normTitle: string
}

let knCandidates: KnowledgeCandidate[] | null = null

function knowledgeCandidates(): KnowledgeCandidate[] {
  if (!knCandidates) {
    knCandidates = knowledgeIndex().map((entry) => ({
      entry,
      tokens: tokenize(
        `${entry.title} ${entry.concepts.join(' ')} ${entry.field} ${entry.branch}`
      ),
      normTitle: entry.title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(),
    }))
  }
  return knCandidates
}

export interface KnowledgeMatch {
  entry: KnowledgeIndexEntry
  score: number
}

/** Best Knowledge-University topic for a syllabus topic, or null.
 *  Curated aliases (verified exact-topic coverage) are consulted first;
 *  otherwise the generic scorer runs — name tokens carry the signal,
 *  subtopic tokens only refine it. */
export function matchKnowledgeTopic(name: string, subs?: string[]): KnowledgeMatch | null {
  const nameTokens = tokenize(name)
  if (nameTokens.size === 0) return null
  const subTokens = subs && subs.length ? tokenize(subs.join(' ')) : new Set<string>()
  const norm = normalizeTopicName(name)
  const aliasId = TOPIC_ALIASES[norm]
  if (aliasId) {
    // index ids carry the ku- pseudo-chapter prefix
    const hit = knowledgeCandidates().find((c) => c.entry.id === 'ku-' + aliasId)
    if (hit) return { entry: hit.entry, score: 1 } // silently skip stale aliases
  }
  let best: KnowledgeMatch | null = null
  for (const cand of knowledgeCandidates()) {
    let nameHits = 0
    for (const t of nameTokens) if (cand.tokens.has(t)) nameHits++
    let subHits = 0
    for (const t of subTokens) if (cand.tokens.has(t)) subHits++
    const nameScore = nameHits / nameTokens.size
    const subScore = subTokens.size > 0 ? subHits / subTokens.size : 0
    let score = nameScore * 0.75 + subScore * 0.25
    if (norm.length >= 4 && (cand.normTitle.includes(norm) || norm.includes(cand.normTitle))) {
      score = Math.max(score, 0.9)
    }
    // single generic-word hits are not evidence — require real name overlap
    if (nameHits < 2 && score < 0.9) continue
    if (score > (best?.score ?? 0)) best = { entry: cand.entry, score }
  }
  return best && best.score >= 0.45 ? best : null
}

// --------------------------------------------------------- map building ----

export interface BuiltCuratedMap {
  name: string
  overview: ExamOverview
  subjects: ExamSubject[]
  sources: ExamMapSource[]
  stats: ExamMapStats
  /** topics mapped to masters-library chapters */
  mastersMapped: number
  /** topics mapped to Knowledge-University topics */
  knowledgeMapped: number
  builtAt: number
}

const ACCEPT = 0.4

function mapSubject(
  subject: CuratedSubject,
  catalog: Catalog
): { examSubject: ExamSubject; mapped: number; knowledgeMapped: number } {
  // candidate library subjects for scoped matching: authored hint first,
  // then the top scored subjects for the subject name itself. A derived
  // (non-hinted) primary link must be reasonably confident — weak name
  // matches like "General Studies Paper I" → mathematics are worse than none.
  const candidates: string[] = []
  if (subject.mappedSubjectId) candidates.push(subject.mappedSubjectId)
  const detail = matchTopicDetailed(subject.name, catalog)
  for (const m of detail.matches) {
    if (!candidates.includes(m.subject.id)) candidates.push(m.subject.id)
    if (candidates.length >= 3) break
  }
  const hinted = Boolean(subject.mappedSubjectId)
  const primary =
    candidates[0] !== undefined ? catalog.subjectById.get(candidates[0]) : undefined
  const primaryScore = detail.matches[0]?.score ?? 0
  const usePrimary = primary && (hinted || primaryScore >= 0.55) ? primary : undefined

  let mapped = 0
  let knowledgeMapped = 0

  const units = subject.units.map((unit) => ({
    name: unit.name,
    topics: unit.topics.map((topic) => {
      // matching text: topic name (+ a few subtopics when they exist, they
      // sharpen the token set — "Optics" alone is vague, "Optics: ray optics,
      // wave optics, dispersion" is not)
      const matchText =
        topic.subtopics && topic.subtopics.length
          ? `${topic.name} ${topic.subtopics.slice(0, 4).join(' ')}`
          : topic.name

      let hit: {
        chapterId?: string | null
        chapterTitle?: string | null
        subjectId?: string | null
        subjectName?: string | null
        confidence: number
      } | null = null

      for (const sid of candidates) {
        // scoped match uses the clean topic name — subtopic tokens dilute the
        // IDF overlap and make the scoped matcher miss (verified empirically)
        const within = fuzzyMatchWithinSubject(topic.name, sid, 0.32, catalog)
        if (within) {
          hit = within
          break
        }
      }
      if (!hit || (hit.confidence ?? 0) < ACCEPT) {
        const global = fuzzyMatchTopic(matchText, catalog)
        if (global && (global.confidence ?? 0) > (hit?.confidence ?? 0)) hit = global
      }
      if (hit && (hit.confidence ?? 0) >= ACCEPT) {
        mapped++
      } else {
        // knowledge-university fallback
        const kn = matchKnowledgeTopic(topic.name, topic.subtopics)
        if (kn) {
          knowledgeMapped++
          hit = {
            chapterId: kn.entry.id,
            chapterTitle: kn.entry.title,
            subjectId: fieldSlug(kn.entry.field),
            subjectName: `${kn.entry.field} (Knowledge University)`,
            confidence: Math.min(0.7, 0.4 + kn.score * 0.3),
          }
        }
      }

      return {
        name: topic.name,
        subtopics: topic.subtopics && topic.subtopics.length ? topic.subtopics : undefined,
        weightage: topic.weightage,
        chapterId: hit?.chapterId ?? null,
        chapterTitle: hit?.chapterTitle ?? null,
        subjectId: hit?.subjectId ?? null,
        subjectName: hit?.subjectName ?? null,
        confidence: hit?.confidence,
      }
    }),
  }))

  return {
    examSubject: {
      name: subject.name,
      weightage: subject.weightage,
      mappedSubjectId: usePrimary?.id ?? null,
      mappedSubjectName: usePrimary?.name ?? null,
      units,
    },
    mapped,
    knowledgeMapped,
  }
}

const builtCache = new Map<string, BuiltCuratedMap>()

/** Build (and memoize) the full ExamMap payload for a curated exam. */
export function buildCuratedExamMap(exam: CuratedExam): BuiltCuratedMap {
  const cached = builtCache.get(exam.id)
  if (cached) return cached

  const catalog = getCatalog()

  let unitCount = 0
  let topicCount = 0
  let mappedCount = 0
  let mastersMapped = 0
  let knowledgeMapped = 0

  const subjects: ExamSubject[] = exam.subjects.map((s) => {
    unitCount += s.units.length
    topicCount += s.units.reduce((n, u) => n + u.topics.length, 0)
    const r = mapSubject(s, catalog)
    mappedCount += r.mapped + r.knowledgeMapped
    mastersMapped += r.mapped
    knowledgeMapped += r.knowledgeMapped
    return r.examSubject
  })

  const overview: ExamOverview = {
    fullName: exam.fullName,
    conductor: exam.overview.conductor,
    level: exam.overview.level,
    stages: exam.overview.stages,
    papers: exam.overview.papers,
    duration: exam.overview.duration,
    marking: exam.overview.marking,
    negativeMarking: exam.overview.negativeMarking,
    questionTypes: exam.overview.questionTypes,
    website: exam.website,
    notes: exam.overview.notes,
    curatedFrom: exam.id,
    curatedVerified: exam.syllabusVerified,
  }

  const sources: ExamMapSource[] = exam.sources.map((s) => ({
    title: s.title,
    url: s.url,
    host: s.host,
  }))

  const result: BuiltCuratedMap = {
    name: exam.name,
    overview,
    subjects,
    sources,
    stats: {
      subjectCount: subjects.length,
      unitCount,
      topicCount,
      mappedCount,
    },
    mastersMapped,
    knowledgeMapped,
    builtAt: Date.now(),
  }
  builtCache.set(exam.id, result)
  return result
}
