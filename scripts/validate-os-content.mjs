import { readFileSync, readdirSync } from 'fs'
import katex from 'katex'

const dir = 'src/data/content/'
const files = readdirSync(dir).filter((f) => f.startsWith('os-ch') && f.endsWith('.ts'))

const lib = readFileSync('src/data/library.ts', 'utf8')
const expected = [...lib.matchAll(/id: '(osc-ch\d+-s\d+)'/g)].map((m) => m[1])
const found = new Set()

let totalSections = 0, totalConcepts = 0, totalQuiz = 0, errors = 0

for (const f of files) {
  const src = readFileSync(dir + f, 'utf8')
  const secs = [...src.matchAll(/sectionId: ['"](osc-ch\d+-s\d+)['"]/g)].map((m) => m[1])
  totalSections += secs.length
  secs.forEach((s) => found.add(s))
  totalConcepts += (src.match(/kind: ['"]/g) || []).length
  totalQuiz += (src.match(/^\s+q: ['"]/gm) || []).length

  const strings = [...src.matchAll(/'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g)].map((m) =>
    m[1] !== undefined ? m[1] : m[2]
  )
  for (const raw of strings) {
    const s = raw.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\').replace(/\\n/g, ' ')
    const spans = [...s.matchAll(/\$\$([^$]+)\$\$|\$([^$]+)\$/g)]
    for (const sp of spans) {
      const tex = sp[1] !== undefined ? sp[1] : sp[2]
      try {
        katex.renderToString(tex, { throwOnError: true, strict: false })
      } catch (e) {
        console.log(`KATEX FAIL ${f}: ${tex} => ${e.message.slice(0, 110)}`)
        errors++
      }
    }
  }
  const answers = [...src.matchAll(/answer: (\d+)/g)].map((m) => +m[1])
  for (const a of answers) if (a < 0 || a > 3 || isNaN(a)) { console.log(`BAD ANSWER in ${f}: ${a}`); errors++ }
}

const missing = expected.filter((s) => !found.has(s))
const extra = [...found].filter((s) => !expected.includes(s))
console.log('---')
console.log(`sections: ${totalSections} (expected ${expected.length}) missing: ${missing.length} extra: ${extra.length}`)
console.log(`concepts: ${totalConcepts} | quiz: ${totalQuiz} | katex errors: ${errors}`)
if (missing.length) console.log('MISSING:', missing.join(', '))
if (extra.length) console.log('EXTRA:', extra.join(', '))
