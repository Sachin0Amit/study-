/**
 * Verify the curated hero/footer totals against the real data.
 * Run after any content expansion: bun run scripts/verify-counts.ts
 */
import { allContent } from '../src/data/content'
import { TOTAL_FORMULAS } from '../src/data/formulas'
import { KNOWLEDGE_STATS } from '../src/data/knowledge'
import { LIBRARY_SECTIONS, LIBRARY_CHAPTERS } from '../src/data/library'

const questions = allContent.reduce((n, c) => n + c.quiz.length, 0)
/** the expected value is read from the constant the hero actually renders */
const { readFileSync } = await import('fs')
const hero = readFileSync('src/components/app/library-view.tsx', 'utf8')
const m = hero.match(/TOTAL_QUIZ_QUESTIONS\s*=\s*([\d_]+)/)
const declared = m ? Number(m[1].replace(/_/g, '')) : -1
console.log('quiz questions:', questions, questions === declared ? `✓ matches TOTAL_QUIZ_QUESTIONS (${declared})` : `✗ UPDATE src/components/app/library-view.tsx (declared ${declared})`)
console.log('formulas:', TOTAL_FORMULAS, TOTAL_FORMULAS === 1908 ? '✓ matches TOTAL_FORMULAS const' : '✗ UPDATE src/components/app/library-view.tsx')
console.log('sections:', LIBRARY_SECTIONS.length, '· chapters:', LIBRARY_CHAPTERS.length)
console.log('knowledge topics:', KNOWLEDGE_STATS.topics, '· words:', KNOWLEDGE_STATS.words, '· domains:', KNOWLEDGE_STATS.domains)
