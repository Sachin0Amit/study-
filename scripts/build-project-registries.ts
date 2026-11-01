// ============ Project Registry Builder (master spec PART 14) =================
//
// Generates the machine-readable registries into docs/project/registries/:
//   SUBJECT_REGISTRY.json     — both universes (masters library + Knowledge
//                               University) with live counts
//   TOPIC_REGISTRY.json       — every knowledge topic by stable id
//   EXAMINATION_REGISTRY.json — every curated exam: authority, region, official
//                               sources, syllabusVerified date, syllabus-entry
//                               counts, mapped/unmapped coverage
//   TEXTBOOK_REGISTRY.json    — every library book (recognized textbooks +
//                               Knowledge University volumes)
//   COVERAGE_REPORT.json      — per-exam syllabus-entry coverage (spec PART 9:
//                               Coverage = mapped entries / total entries; the
//                               gap finder in machine-readable form)
//
// Run: bun scripts/build-project-registries.ts
// (after content changes, run the content pipeline first — see PROJECT_MASTER_PLAN §5)

import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import {
  LIBRARY_SUBJECTS,
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
} from '../src/data/library'
import { KNOWLEDGE_DOMAIN_FILES, KNOWLEDGE_TOPICS } from '../src/data/knowledge'
import { CURATED_EXAMS } from '../src/data/exams'
import { buildCuratedExamMap } from '../src/lib/curated-exam-map'

const ROOT = join(__dirname, '..')
const OUTDIR = join(ROOT, 'docs/project/registries')
const BUILT_ON = new Date().toISOString().slice(0, 10)

function write(name: string, data: unknown) {
  writeFileSync(join(OUTDIR, name), JSON.stringify(data, null, 2) + '\n')
  console.log(`  → registries/${name}`)
}

function main() {
  mkdirSync(OUTDIR, { recursive: true })
  console.log('PROJECT REGISTRIES → docs/project/registries/')

  // ---------------- TOPIC_REGISTRY (Knowledge University topics) ------------
  const topicRegistry = {
    $comment:
      'Every Knowledge-University topic by stable id (spec PART 8: canonical topic registry — check here before authoring; ids are kebab-case, globally unique, stable forever). Regenerate: bun scripts/build-project-registries.ts',
    builtOn: BUILT_ON,
    count: KNOWLEDGE_TOPICS.length,
    topics: KNOWLEDGE_TOPICS.map((t) => ({
      id: t.id,
      title: t.title,
      domain: t.domain,
      subject: t.field,
      chapter: t.branch,
      tier: t.tier,
      words: t.words,
      readMins: t.readMins,
      addedOn: t.addedOn,
      concepts: t.concepts,
    })),
  }
  write('TOPIC_REGISTRY.json', topicRegistry)

  // ---------------- SUBJECT_REGISTRY (both universes) -----------------------
  const kuBySubject = new Map<string, { topics: number; words: number; chapters: Set<string>; tiers: Record<string, number> }>()
  for (const t of KNOWLEDGE_TOPICS) {
    let s = kuBySubject.get(t.field)
    if (!s) {
      s = { topics: 0, words: 0, chapters: new Set(), tiers: {} }
      kuBySubject.set(t.field, s)
    }
    s.topics++
    s.words += t.words
    s.chapters.add(t.branch)
    s.tiers[t.tier] = (s.tiers[t.tier] ?? 0) + 1
  }

  const mastersSubjects = LIBRARY_SUBJECTS.map((s) => {
    const books = LIBRARY_BOOKS.filter((b) => b.subjectId === s.id)
    const chapters = LIBRARY_CHAPTERS.filter((c) => books.some((b) => b.id === c.bookId))
    const sections = LIBRARY_SECTIONS.filter((sec) => chapters.some((c) => c.id === sec.chapterId))
    return {
      id: s.id,
      name: s.name,
      group: s.group,
      universe: 'masters-library',
      books: books.length,
      chapters: chapters.length,
      sections: sections.length,
    }
  })

  const kuSubjects = [...kuBySubject.entries()]
    .map(([name, s]) => ({
      // subject key as used by the authoring tree: src/data/knowledge/subjects/<key>/
      id: name,
      name,
      universe: 'knowledge-university',
      domain: KNOWLEDGE_DOMAIN_FILES.find((d) => d.topics.some((t) => t.field === name))?.domain ?? null,
      chapters: s.chapters.size,
      topics: s.topics,
      words: s.words,
      tiers: s.tiers,
    }))
    .sort((a, b) => b.topics - a.topics)

  write('SUBJECT_REGISTRY.json', {
    $comment:
      'Subject registry across both universes (spec PART 3/14). Masters Library: recognized-textbook subjects. Knowledge University: original StudyVerse textbooks (subject name = authoring-tree key). Regenerate: bun scripts/build-project-registries.ts',
    builtOn: BUILT_ON,
    summary: {
      mastersSubjects: mastersSubjects.length,
      mastersBooks: LIBRARY_BOOKS.filter((b) => !b.id.startsWith('ku-')).length,
      mastersChapters: LIBRARY_CHAPTERS.filter((c) => !c.bookId.startsWith('ku-')).length,
      mastersSections: LIBRARY_SECTIONS.filter(
        (s) => !LIBRARY_CHAPTERS.some((c) => c.id === s.chapterId && c.bookId.startsWith('ku-'))
      ).length,
      knowledgeDomains: KNOWLEDGE_DOMAIN_FILES.length,
      knowledgeSubjects: kuSubjects.length,
      knowledgeBooks: LIBRARY_BOOKS.filter((b) => b.id.startsWith('ku-')).length,
      knowledgeChapters: LIBRARY_CHAPTERS.filter((c) => c.bookId.startsWith('ku-')).length,
      knowledgeTopics: KNOWLEDGE_TOPICS.length,
      knowledgeWords: KNOWLEDGE_TOPICS.reduce((n, t) => n + t.words, 0),
      // sections on ku chapters (SectionMeta has chapterId, not bookId)
      knowledgeSections: LIBRARY_SECTIONS.filter((s) =>
        LIBRARY_CHAPTERS.some((c) => c.id === s.chapterId && c.bookId.startsWith('ku-'))
      ).length,
    },
    subjects: [...mastersSubjects, ...kuSubjects],
  })

  // ---------------- TEXTBOOK_REGISTRY ---------------------------------------
  const chaptersByBook = new Map<string, number>()
  for (const c of LIBRARY_CHAPTERS) chaptersByBook.set(c.bookId, (chaptersByBook.get(c.bookId) ?? 0) + 1)
  write('TEXTBOOK_REGISTRY.json', {
    $comment:
      'Every library book (spec PART 4). Masters books are recognized textbooks (author/edition/year as curated; full texts are NOT reproduced — lessons are original explanations). ku- books are original StudyVerse volumes. sources[] on master volumes lists the books merged into it. Regenerate: bun scripts/build-project-registries.ts',
    builtOn: BUILT_ON,
    count: LIBRARY_BOOKS.length,
    books: LIBRARY_BOOKS.map((b) => ({
      id: b.id,
      universe: b.id.startsWith('ku-') ? 'knowledge-university' : 'masters-library',
      subjectId: b.subjectId,
      title: b.title,
      author: b.author,
      edition: b.edition ?? null,
      year: b.year ?? null,
      pages: b.pages ?? null,
      chapters: chaptersByBook.get(b.id) ?? 0,
      mergedFrom: b.sources ?? [],
      description: b.description,
    })),
  })

  // ---------------- EXAMINATION_REGISTRY + COVERAGE_REPORT ------------------
  const examEntries: unknown[] = []
  const coverageExams: unknown[] = []
  let grandTopics = 0
  let grandMapped = 0
  let grandMasters = 0
  let grandKnowledge = 0

  for (const exam of CURATED_EXAMS) {
    const m = buildCuratedExamMap(exam)
    grandTopics += m.stats.topicCount
    grandMapped += m.stats.mappedCount
    grandMasters += m.mastersMapped
    grandKnowledge += m.knowledgeMapped
    const unmapped = m.stats.topicCount - m.stats.mappedCount

    examEntries.push({
      id: exam.id,
      name: exam.name,
      fullName: exam.fullName,
      region: exam.region,
      category: exam.category,
      authority: exam.overview.conductor ?? null,
      website: exam.website,
      syllabusVerified: exam.syllabusVerified,
      officialSources: exam.sources.map((s) => ({ title: s.title, url: s.url, host: s.host })),
      overview: exam.overview,
      subjects: exam.subjects.map((s) => ({
        name: s.name,
        mappedSubjectId: s.mappedSubjectId ?? null,
        weightage: s.weightage ?? null,
        units: s.units.length,
        syllabusEntries: s.units.reduce((n, u) => n + u.topics.length, 0),
      })),
      syllabusEntries: m.stats.topicCount,
      mappedEntries: m.stats.mappedCount,
      unmappedEntries: unmapped,
      coveragePct: Math.round((100 * m.stats.mappedCount) / Math.round(m.stats.topicCount || 1)),
    })

    const unmappedList: { subject: string; unit: string; topic: string }[] = []
    for (const s of m.subjects) {
      for (const u of s.units) {
        for (const t of u.topics) {
          if (!t.chapterId) unmappedList.push({ subject: s.name, unit: u.name, topic: t.name })
        }
      }
    }
    coverageExams.push({
      examId: exam.id,
      examName: exam.name,
      region: exam.region,
      syllabusEntries: m.stats.topicCount,
      mapped: m.stats.mappedCount,
      mastersMapped: m.mastersMapped,
      knowledgeMapped: m.knowledgeMapped,
      unmapped,
      coveragePct: m.stats.topicCount ? Math.round((100 * m.stats.mappedCount) / m.stats.topicCount) : 0,
      unmappedEntries: unmappedList,
    })
  }

  write('EXAMINATION_REGISTRY.json', {
    $comment:
      'Examination registry (spec PART 2.2): curated OFFICIAL syllabi with authority, verification date and official source URLs. syllabusVerified = date the syllabus data was last verified against the official page — re-verify when older than 12 months (DISCOVERY_BACKLOG item 11). Regenerate: bun scripts/build-project-registries.ts',
    builtOn: BUILT_ON,
    count: CURATED_EXAMS.length,
    regions: [...new Set(CURATED_EXAMS.map((e) => e.region))],
    exams: examEntries,
  })

  write('COVERAGE_REPORT.json', {
    $comment:
      'Syllabus-entry coverage (spec PART 9): Coverage = mapped entries / total applicable entries. Mapping confirms a lesson/chapter genuinely teaching the entry exists (alias-first, audited) — it does NOT certify exam-depth mastery; depth is tracked by the writing program (tiers + word counts). Assessment coverage (practice-question counts per entry) is not yet tracked — DISCOVERY_BACKLOG item 10. Regenerate: bun scripts/build-project-registries.ts',
    builtOn: BUILT_ON,
    formula: 'Coverage = mapped syllabus entries / total verified applicable syllabus entries × 100',
    grandTotal: {
      exams: CURATED_EXAMS.length,
      syllabusEntries: grandTopics,
      mapped: grandMapped,
      unmapped: grandTopics - grandMapped,
      coveragePct: Math.round((100 * grandMapped) / grandTopics),
      mastersMapped: grandMasters,
      knowledgeMapped: grandKnowledge,
    },
    perExam: coverageExams,
  })

  console.log(
    `  grand coverage: ${grandMapped}/${grandTopics} = ${Math.round((100 * grandMapped) / grandTopics)}%  (masters ${grandMasters} · ku ${grandKnowledge})`
  )
  console.log(
    `  subjects: ${mastersSubjects.length} masters + ${kuSubjects.length} ku · topics: ${KNOWLEDGE_TOPICS.length} · books: ${LIBRARY_BOOKS.length}`
  )
}

main()
