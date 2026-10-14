import { readFileSync } from 'fs'
import katex from 'katex'

const dir = 'src/data/content/'
const files = ['elec-ch11.ts', 'elec-ch12.ts']

const lib = readFileSync('src/data/library-parts/electronics.ts', 'utf8')
const wanted = [...lib.matchAll(/id: '(elec-ch1[12]-s\d+)'/g)].map((m) => m[1])

let errors = 0
const found = []

for (const f of files) {
  const src = readFileSync(dir + f, 'utf8')
  const secs = [...src.matchAll(/sectionId: ['"](elec-ch\d+-s\d+)['"]/g)].map((m) => m[1])
  secs.forEach((s) => found.push(s))

  // --- extract every string literal, both quote styles
  const strings = [...src.matchAll(/'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g)].map((m) =>
    m[1] !== undefined ? m[1] : m[2],
  )

  for (const raw of strings) {
    const s = raw.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\').replace(/\\n/g, ' ')

    // KaTeX: every $...$ and $$...$$ span must render
    const spans = [...s.matchAll(/\$\$([^$]+)\$\$|\$([^$]+)\$/g)]
    for (const sp of spans) {
      const tex = sp[1] !== undefined ? sp[1] : sp[2]
      try {
        katex.renderToString(tex, { throwOnError: true, strict: false })
      } catch (e) {
        console.log(`KATEX FAIL ${f}: ${tex} => ${e.message.slice(0, 120)}`)
        errors++
      }
    }
    // unbalanced $ delimiters (odd count => broken)
    const dollars = (s.match(/\$/g) || []).length
    if (dollars % 2 !== 0) {
      console.log(`ODD $ COUNT (${dollars}) in ${f}: ${s.slice(0, 90)}`)
      errors++
    }
    // ^ outside math spans
    let outside = s
    for (const sp of spans) outside = outside.replace(sp[0], '')
    if (outside.includes('^')) {
      console.log(`BARE ^ OUTSIDE MATH in ${f}: ${s.slice(0, 100)}`)
      errors++
    }
    // straight apostrophe inside prose strings (escaped ones were unescaped above)
    if (/['"]/.test(s) && /[^\\]'/.test(s)) {
      console.log(`STRAIGHT ' in ${f}: ${s.slice(0, 100)}`)
      errors++
    }
  }

  // raw source caret check (excluding LaTeX backslash-caret sequences inside strings is handled above;
  // here catch carets that appear in code, e.g. bitwise ops)
  const codeOnly = src.replace(/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g, '')
  if (codeOnly.includes('^')) {
    console.log(`BARE ^ IN CODE of ${f}`)
    errors++
  }

  // quiz answers in range
  const answers = [...src.matchAll(/answer: (\d+)/g)].map((m) => +m[1])
  for (const a of answers) if (a < 0 || a > 3 || Number.isNaN(a)) { console.log(`BAD ANSWER in ${f}: ${a}`); errors++ }
}

// --- structural per-section counts via a crude TS parse: split on sectionId blocks
for (const f of files) {
  const src = readFileSync(dir + f, 'utf8')
  const blocks = src.split(/sectionId: '/).slice(1)
  for (const b of blocks) {
    const id = b.slice(0, b.indexOf("'"))
    const grab = (re) => (b.match(re) || []).length
    const rt = b.match(/readingTime: (\d+)/)
    const concepts = grab(/term: '/g)
    const examples = grab(/title: '/g)
    const steps = grab(/label: '/g)
    const quiz = grab(/\n\s+q: '/g) || grab(/q: '/g)
    const takeaways = b.split('keyTakeaways:')[1]?.split('quiz:')[0]?.match(/'/g)?.length ?? 0
    const objectives = b.split('objectives:')[1]?.split('concepts:')[0]?.match(/^\s{6}'/gm)?.length ?? 0
    console.log(
      `${id}: readingTime=${rt?.[1]} concepts=${concepts} examples=${examples} steps=${steps} quizQs=${quiz} takeaways=${takeaways / 2} objectives=${objectives}`,
    )
  }
}

const missing = wanted.filter((s) => !found.includes(s))
const extra = found.filter((s) => !wanted.includes(s))
console.log('---')
console.log(`expected sections: ${wanted.length} found: ${found.length} missing: ${missing.length} extra: ${extra.length}`)
if (missing.length) console.log('MISSING:', missing.join(', '))
if (extra.length) console.log('EXTRA:', extra.join(', '))
console.log(`total errors: ${errors}`)
