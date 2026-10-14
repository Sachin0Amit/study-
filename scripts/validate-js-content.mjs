// Validation for round-9 JS content files (agent 9-js-C)
import { readFileSync } from 'fs'
import katex from 'katex'

const files = [
  'src/data/content/js-ch10.ts',
  'src/data/content/js-ch11.ts',
  'src/data/content/js-ch12.ts',
  'src/data/content/js-ch13.ts',
]

const expected = {
  'src/data/content/js-ch10.ts': ['js-ch10-s1', 'js-ch10-s2', 'js-ch10-s3'],
  'src/data/content/js-ch11.ts': ['js-ch11-s1', 'js-ch11-s2', 'js-ch11-s3', 'js-ch11-s4', 'js-ch11-s5', 'js-ch11-s6'],
  'src/data/content/js-ch12.ts': ['js-ch12-s1', 'js-ch12-s2', 'js-ch12-s3', 'js-ch12-s4'],
  'src/data/content/js-ch13.ts': ['js-ch13-s1', 'js-ch13-s2', 'js-ch13-s3', 'js-ch13-s4'],
}

const KINDS = new Set(['definition', 'theorem', 'law', 'method', 'notation', 'insight'])
let errors = 0
const err = (m) => { console.log('ERR ' + m); errors++ }

// Extract every string literal from source (handles '...' with escapes)
function extractStrings(src) {
  const out = []
  const re = /'((?:[^'\\\n]|\\.)*)'/g
  let m
  while ((m = re.exec(src))) out.push(m[1])
  return out
}
// Evaluate escapes so \\n -> newline, \\d -> \d etc. (mirror JS semantics)
function unescape(s) {
  return s.replace(/\\(.)/g, (_, c) => {
    if (c === 'n') return '\n'
    if (c === 't') return '\t'
    if (c === "'") return "'"
    if (c === '"') return '"'
    if (c === '\\') return '\\'
    return c // \d -> d is WRONG for our purposes... see note
  })
}

let totals = { sections: 0, concepts: 0, examples: 0, quiz: 0, katex: 0 }

for (const f of files) {
  const src = readFileSync(f, 'utf8')

  // zero-width / irregular whitespace check
  if (/[\u200b\u200c\u200d\ufeff]/.test(src)) err(`${f}: irregular whitespace (ZWSP/BOM) found`)

  // section ids
  const secs = [...src.matchAll(/sectionId: '(js-ch\d+-s\d+)'/g)].map((m) => m[1])
  const exp = expected[f]
  if (JSON.stringify(secs) !== JSON.stringify(exp)) err(`${f}: section ids ${secs.join(',')} != expected ${exp.join(',')}`)
  totals.sections += secs.length

  // import + export name
  if (!/import type \{ SectionContent \} from '\.\.\/library'/.test(src)) err(`${f}: missing library type import`)
  const expName = 'jsCh' + f.match(/js-ch(\d+)/)[1] + 'Content'
  if (!src.includes(`export const ${expName}: SectionContent[] = [`)) err(`${f}: missing export ${expName}`)

  // per-string checks: fences, $ balance, katex, bold contents
  for (const raw of extractStrings(src)) {
    const s = raw.replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\\\/g, '\\')
    const fenceCount = (s.match(/```/g) || []).length
    if (fenceCount % 2 !== 0) err(`${f}: odd fence count (${fenceCount}) in: ${s.slice(0, 70)}...`)
    const outsideFences = s.split('```').filter((_, i) => i % 2 === 0).join(' ')
    const outsideCode = outsideFences.replace(/`[^`]*`/g, 'CODE')
    const dollars = (outsideCode.match(/\$/g) || []).length
    if (dollars % 2 !== 0) err(`${f}: odd $ count (${dollars}) in: ${s.slice(0, 70)}...`)
    for (const b of outsideCode.matchAll(/\*\*([^*]+)\*\*/g)) {
      if (/[$`]/.test(b[1])) err(`${f}: bold span contains $ or backtick: ${b[1].slice(0, 60)}`)
    }
    for (const m of outsideCode.matchAll(/\$([^$]+)\$/g)) {
      totals.katex++
      try { katex.renderToString(m[1], { throwOnError: true, strict: false }) } catch (e) {
        err(`${f}: KATEX FAIL: $${m[1]}$ => ${e.message.slice(0, 90)}`)
      }
    }
    // single-backslash LaTeX leakage outside code (e.g. \frac in prose)
    if (/[^\\]\\(frac|sum|log|sqrt|times|le|ge|dots|infty|equiv|pmod)/.test(outsideCode)) {
      // find offending
      const bad = outsideCode.match(/[^\\]\\(frac|sum|log|sqrt|times|le|ge|dots|infty|equiv|pmod)[a-z]* ?[({]?/)
      if (bad && !/\$\$/.test(bad[0])) err(`${f}: possible un-doubled LaTeX backslash in prose: ${bad[0]}`)
    }
  }

  // structural checks (regex-based, per section block)
  const blocks = src.split(/^\s*\/\/ -+ \d+\.\d+$/m)
  for (const b of blocks.slice(1)) {
    const id = (b.match(/sectionId: '(js-ch\d+-s\d+)'/) || [])[1]
    const rt = parseInt((b.match(/readingTime: (\d+)/) || [])[1], 10)
    if (!(rt >= 6 && rt <= 12)) err(`${id}: readingTime ${rt} out of 6-12`)
    const objectives = (b.match(/^\s{6}"|^\s{6}'|objectives: \[/gm), (b.match(/^\s+objectives: \[([\s\S]*?)\],/m) || [''])[0])
    const count = (re) => (b.match(re) || []).length
    const obj = count(/^\s{4}"[A-Z]|^\s{4}'[A-Z]/) // not reliable; use field-based below
    void objectives; void obj
  }
}

// ---- deep structural pass via evaluating the TS as data (via regexes per field) ----
for (const f of files) {
  const src = readFileSync(f, 'utf8')
  const secRe = /sectionId: '(js-ch\d+-s\d+)'([\s\S]*?)(?=\n\s*\/\/ -{10,}|\n\]\s*$)/g
  let m
  while ((m = secRe.exec(src))) {
    const id = m[1], body = m[2]
    const count = (re) => (body.match(re) || []).length
    const objectives = count(/^\s{6}'(?!\])/gm) - 0 || count(/\n\s{6}'/g)
    const quizQs = count(/^\s{6}q: '/gm)
    const quizOptsPer = [...body.matchAll(/options: \[([\s\S]*?)\]/g)].map((o) => (o[1].match(/^\s{8}'/gm) || []).length)
    const answers = [...body.matchAll(/answer: (\d+)/g)].map((a) => +a[1])
    const concepts = count(/^\s{4}\{\n\s{4}term: '/gm)
    const examples = count(/^\s{4}\{\n\s{4}title: '/gm)
    const steps = [...body.matchAll(/steps: \[([\s\S]*?)\n\s{8}\],/g)].map((s) => (s[1].match(/^\s{6}\{/gm) || []).length)
    const takeaways = count(/^\s{6}'(?=[^']*$)/gm) - objectives // heuristic; refined below
    // strict per-quiz checks
    quizOptsPer.forEach((n, i) => { if (n !== 4) err(`${id}: quiz ${i + 1} has ${n} options`) })
    answers.forEach((a, i) => { if (a < 0 || a > 3) err(`${id}: quiz ${i + 1} invalid answer ${a}`) })
    if (quizQs < 3 || quizQs > 5) err(`${id}: ${quizQs} quiz questions (need 3-5)`)
    if (concepts < 4 || concepts > 9) err(`${id}: ${concepts} concepts (need 4-9)`)
    if (examples < 1 || examples > 3) err(`${id}: ${examples} examples (need 1-3)`)
    steps.forEach((n, i) => { if (n < 3 || n > 7) err(`${id}: example ${i + 1} has ${n} steps (need 3-7)`) })
    totals.concepts += concepts
    totals.examples += examples
    totals.quiz += quizQs
    void takeaways
  }
}

console.log('---')
console.log(`totals: ${totals.sections} sections, ${totals.concepts} concepts, ${totals.examples} examples, ${totals.quiz} quiz, ${totals.katex} katex spans`)
console.log(errors === 0 ? 'ALL CHECKS PASSED' : `${errors} ERRORS`)
