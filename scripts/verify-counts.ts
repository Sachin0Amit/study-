/**
 * Verify the curated hero/footer totals against the real data.
 * Run after any content expansion: bun run scripts/verify-counts.ts
 */
import { allContent } from '../src/data/content'
import { TOTAL_FORMULAS } from '../src/data/formulas'
import { UNIVERSE_STATS } from '../src/data/universe'
import { LIBRARY_SECTIONS, LIBRARY_CHAPTERS } from '../src/data/library'

const questions = allContent.reduce((n, c) => n + c.quiz.length, 0)
console.log('quiz questions:', questions, questions === 9394 ? '✓ matches TOTAL_QUIZ_QUESTIONS' : '✗ UPDATE src/components/app/library-view.tsx')
console.log('formulas:', TOTAL_FORMULAS, TOTAL_FORMULAS === 1908 ? '✓ matches TOTAL_FORMULAS const' : '✗ UPDATE src/components/app/library-view.tsx')
console.log('sections:', LIBRARY_SECTIONS.length, '· chapters:', LIBRARY_CHAPTERS.length)
console.log('universe topics:', UNIVERSE_STATS.topics, '· words:', UNIVERSE_STATS.words, '· domains:', UNIVERSE_STATS.domains)
