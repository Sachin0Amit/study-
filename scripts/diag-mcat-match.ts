import { matchTopicDetailed } from '../src/lib/syllabus'
import { buildCuratedExamMap } from '../src/lib/curated-exam-map'
import { getCuratedExam } from '../src/data/exams'

const targets = ['Tissue Types', 'Evolutionary Mechanisms', 'Biological Bases of Behavior', 'Interpersonal Behavior']

for (const t of targets) {
  const d = matchTopicDetailed(t)
  console.log(`\n== ${t} ==`)
  for (const m of d.matches.slice(0, 3)) {
    console.log(`  ${m.score.toFixed(3)} ${m.subject.id} / ${m.chapter.id} (${m.chapter.title.slice(0, 50)})`)
  }
}

// also show mcat scoped candidate subjects for the two subjects
const mcat = getCuratedExam('mcat')
if (mcat) {
  for (const s of mcat.subjects) {
    if (s.name.includes('Biological') || s.name.includes('Psychological')) {
      console.log(`\nsubject: ${s.name} hinted=${s.mappedSubjectId ?? 'none'}`)
      const det = matchTopicDetailed(s.name)
      for (const m of det.matches.slice(0, 6)) {
        console.log(`  subj-score ${m.score.toFixed(3)} -> ${m.subject.id}`)
      }
    }
  }
  const m = buildCuratedExamMap(mcat)
  console.log(`\nmcat totals: masters=${m.mastersMapped} ku=${m.knowledgeMapped} unmapped=${m.stats.topicCount - m.stats.mappedCount}`)
}
