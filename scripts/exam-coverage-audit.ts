/**
 * Exam-syllabus coverage audit — the gap finder for content passes.
 *
 * Walks every curated exam, maps every topic (masters library → Knowledge
 * University), and prints per-exam coverage plus the UNMAPPED topics grouped
 * by cluster, so content passes know exactly what to write next.
 *
 * Run: bun run scripts/exam-coverage-audit.ts [--exam <id>]
 */
import { CURATED_EXAMS, getCuratedExam } from '../src/data/exams'
import { buildCuratedExamMap } from '../src/lib/curated-exam-map'

const argIdx = process.argv.indexOf('--exam')
const only = argIdx > -1 ? process.argv[argIdx + 1] : null

const exams = only ? [getCuratedExam(only)].filter(Boolean) : CURATED_EXAMS

let grandTopics = 0
let grandMapped = 0
const unmappedAll: { exam: string; subject: string; topic: string }[] = []

console.log('exam                       topics  masters   ku  unmapped  pct')
console.log('-------------------------------------------------------------')
for (const exam of exams) {
  const m = buildCuratedExamMap(exam)
  grandTopics += m.stats.topicCount
  grandMapped += m.stats.mappedCount
  const unmapped = m.stats.topicCount - m.stats.mappedCount
  for (const s of m.subjects) {
    for (const u of s.units) {
      for (const t of u.topics) {
        if (!t.chapterId) unmappedAll.push({ exam: exam.id, subject: s.name, topic: t.name })
      }
    }
  }
  console.log(
    exam.id.padEnd(24).slice(0, 24).padEnd(26) +
      String(m.stats.topicCount).padStart(5) +
      String(m.mastersMapped).padStart(8) +
      String(m.knowledgeMapped).padStart(5) +
      String(unmapped).padStart(9) +
      String(Math.round((100 * m.stats.mappedCount) / m.stats.topicCount)).padStart(6) +
      '%'
  )
}

console.log('\nTOTAL: ' + grandMapped + '/' + grandTopics + ' = ' + Math.round((100 * grandMapped) / grandTopics) + '%')
console.log('\nUNMAPPED TOPICS (' + unmappedAll.length + ') — grouped by exam:')
const byExam = new Map<string, string[]>()
for (const u of unmappedAll) {
  const arr = byExam.get(u.exam) ?? []
  arr.push(`    [${u.subject.slice(0, 20)}] ${u.topic}`)
  byExam.set(u.exam, arr)
}
for (const [exam, list] of [...byExam.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`  ${exam} (${list.length}):`)
  for (const l of list) console.log(l)
}
