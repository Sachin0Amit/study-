/** Dump every QCE topic → mapped chapter/lesson for match-quality QA. */
import { getCuratedExam } from '../src/data/exams'
import { buildCuratedExamMap } from '../src/lib/curated-exam-map'

const exam = getCuratedExam('qce')
if (!exam) throw new Error('qce not found')
const m = buildCuratedExamMap(exam)
for (const s of m.subjects) {
  console.log(`== ${s.name} (hint: ${s.mappedSubjectId ?? '-'})`)
  for (const u of s.units) {
    for (const t of u.topics) {
      console.log(
        `  ${t.chapterId ? ' ' : '!'} ${t.name.slice(0, 56).padEnd(57)} → ${Number(t.confidence ?? 0).toFixed(2)} ${t.subjectName ?? '?'} :: ${t.chapterTitle ?? 'UNMAPPED'}`
      )
    }
  }
}
