import { readFileSync, writeFileSync, mkdtempSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'
import katex from 'katex'

// Compile-free structural validation: strip the type-only import, import the real data.
const tmp = mkdtempSync(join(tmpdir(), 'calcval-'))
const dir = 'src/data/content/'
const files = {
  'calc-ch16.ts': 'calcCh16Content',
  'calc-ch17.ts': 'calcCh17Content',
}

const expected = [
  'calc-ch16-s1','calc-ch16-s2','calc-ch16-s3','calc-ch16-s4','calc-ch16-s5',
  'calc-ch16-s6','calc-ch16-s7','calc-ch16-s8','calc-ch16-s9',
  'calc-ch17-s1','calc-ch17-s2','calc-ch17-s3','calc-ch17-s4',
]

let errors = 0
const found = []
let totalConcepts = 0, totalQuiz = 0, totalExamples = 0, totalTakeaways = 0, totalObjectives = 0, totalSteps = 0
let mathSpans = 0
const kinds = new Set(['definition','theorem','law','method','notation','insight'])

const strRe = /'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g

// collect ALL string literals per file for KaTeX + typography checks
function collectStrings(obj, acc = []) {
  if (typeof obj === 'string') { acc.push(obj); return acc }
  if (Array.isArray(obj)) { for (const v of obj) collectStrings(v, acc); return acc }
  if (obj && typeof obj === 'object') { for (const v of Object.values(obj)) collectStrings(v, acc); return acc }
  return acc
}

for (const [f, name] of Object.entries(files)) {
  const src = readFileSync(dir + f, 'utf8')
  const js = src.replace(/^import type .*$/m, '')
    .replace(/: SectionContent\[\]/, '')
  const tmpFile = join(tmp, f.replace(/\.ts$/, '.mjs'))
  writeFileSync(tmpFile, js)
  const mod = await import('file://' + tmpFile)
  const data = mod[name]

  if (!Array.isArray(data) || data.length === 0) { console.log(`FAIL ${f}: ${name} not an array`); errors++; continue }

  for (const sec of data) {
    found.push(sec.sectionId)
    const problems = []
    const rt = sec.readingTime
    if (!(rt >= 6 && rt <= 12)) problems.push(`readingTime=${rt}`)
    if (!sec.intro || sec.intro.length < 80) problems.push('intro too short')
    if (sec.objectives.length < 3 || sec.objectives.length > 5) problems.push(`objectives=${sec.objectives.length}`)
    if (sec.concepts.length < 4 || sec.concepts.length > 9) problems.push(`concepts=${sec.concepts.length}`)
    if (sec.examples.length < 1 || sec.examples.length > 3) problems.push(`examples=${sec.examples.length}`)
    for (const ex of sec.examples) {
      if (ex.steps.length < 3 || ex.steps.length > 7) problems.push(`${ex.title}: steps=${ex.steps.length}`)
      if (!ex.result) problems.push(`${ex.title}: missing result`)
      for (const st of ex.steps) if (!st.label || !st.text) problems.push(`${ex.title}: bad step`)
    }
    if (sec.keyTakeaways.length < 4 || sec.keyTakeaways.length > 7) problems.push(`takeaways=${sec.keyTakeaways.length}`)
    if (sec.quiz.length < 3 || sec.quiz.length > 5) problems.push(`quiz=${sec.quiz.length}`)
    for (const q of sec.quiz) {
      if (q.options.length !== 4) problems.push(`quiz "${q.q.slice(0, 40)}": ${q.options.length} options`)
      if (q.answer < 0 || q.answer > 3) problems.push(`quiz "${q.q.slice(0, 40)}": answer=${q.answer}`)
      if (new Set(q.options).size !== q.options.length) problems.push(`quiz "${q.q.slice(0, 40)}": duplicate options`)
      if (/all of the above/i.test(q.options.join(' '))) problems.push('all-of-the-above option')
      if (!q.explanation) problems.push('missing explanation')
    }
    for (const c of sec.concepts) {
      if (!kinds.has(c.kind)) problems.push(`kind=${c.kind}`)
      if (!/\*\*/.test(c.statement)) problems.push(`concept "${c.term}": no bold in statement`)
      if (/\$/.test(c.term)) problems.push(`concept term has math: ${c.term}`)
      if (!c.statement) problems.push(`concept "${c.term}": empty statement`)
    }
    totalConcepts += sec.concepts.length; totalQuiz += sec.quiz.length
    totalExamples += sec.examples.length; totalTakeaways += sec.keyTakeaways.length
    totalObjectives += sec.objectives.length
    totalSteps += sec.examples.reduce((a, e) => a + e.steps.length, 0)
    if (problems.length) { console.log(`STRUCT ${f} ${sec.sectionId}: ${problems.join('; ')}`); errors++ }
  }

  // Typography + KaTeX over every string literal in the FILE (raw source scan)
  const strings = [...src.matchAll(strRe)].map(m => m[1] !== undefined ? m[1] : m[2])
  for (const raw of strings) {
    const s = raw.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\')
    // KaTeX every span
    const spans = [...s.matchAll(/\$\$([^$]+)\$\$|\$([^$]+)\$/g)]
    for (const sp of spans) {
      const tex = sp[1] !== undefined ? sp[1] : sp[2]
      mathSpans++
      try { katex.renderToString(tex, { throwOnError: true, strict: false }) }
      catch (e) { console.log(`KATEX FAIL ${f}: $${tex}$ => ${e.message.slice(0, 110)}`); errors++ }
    }
    // math genuinely INSIDE a bold span
    for (const bm of s.matchAll(/\*\*([^*]+)\*\*/g)) {
      if (bm[1].includes('$')) { console.log(`MATH-IN-BOLD ${f}: **${bm[1].slice(0, 60)}**`); errors++ }
    }
    // pseudo-math outside math spans: strip math, look for ^ _ \frac etc.
    const stripped = s.replace(/\$\$[^$]+\$\$|\$[^$]+\$/g, '')
    if (/[\^_]|\\frac|\\sqrt|\\times/.test(stripped)) {
      console.log(`PSEUDO-MATH ${f}: ${stripped.slice(0, 90)}`); errors++
    }
    // straight English apostrophes: letter'letter (LaTeX primes are \'( or y\')
    if (/[A-Za-z]'[A-Za-z]/.test(raw)) { console.log(`STRAIGHT-APOS ${f}: ${raw.slice(0, 90)}`); errors++ }
    // lone $ (unbalanced) would break the span regex; check parity
    const dollars = (s.match(/\$/g) || []).length
    if (dollars % 2 !== 0) { console.log(`ODD-DOLLARS ${f}: ${s.slice(0, 80)}`); errors++ }
  }
}

const missing = expected.filter(s => !found.includes(s))
const extra = found.filter(s => !expected.includes(s))
const dupes = found.filter((s, i) => found.indexOf(s) !== i)
if (missing.length) { console.log('MISSING:', missing.join(', ')); errors++ }
if (extra.length) { console.log('EXTRA:', extra.join(', ')); errors++ }
if (dupes.length) { console.log('DUPES:', dupes.join(', ')); errors++ }

console.log('---')
console.log(`sections: ${found.length}/${expected.length} | concepts: ${totalConcepts} | examples: ${totalExamples} (steps: ${totalSteps}) | quiz: ${totalQuiz} | objectives: ${totalObjectives} | takeaways: ${totalTakeaways} | math spans: ${mathSpans}`)
console.log(`errors: ${errors}`)
process.exit(errors ? 1 : 0)
