import { readFileSync } from 'fs'
import katex from 'katex'

const dir = 'src/data/content/'
const files = ['elec-ch13.ts', 'elec-ch14.ts']
let errors = 0

// expected section ids from library-parts
const lib = readFileSync('src/data/library-parts/electronics.ts', 'utf8')
const expected13 = [...lib.matchAll(/id: '(elec-ch13-s\d+)'/g)].map((m) => m[1])
const expected14 = [...lib.matchAll(/id: '(elec-ch14-s\d+)'/g)].map((m) => m[1])
const expected = { 'elec-ch13.ts': expected13, 'elec-ch14.ts': expected14 }

function stringsOf(src) {
  // top-level string literals with unescaping
  const out = []
  const re = /'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"/g
  for (const m of src.matchAll(re)) {
    const raw = m[1] !== undefined ? m[1] : m[2]
    out.push(raw.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\'))
  }
  return out
}

const counters = {}
for (const f of files) {
  const src = readFileSync(dir + f, 'utf8')
  counters[f] = { sections: 0, concepts: 0, examples: 0, quiz: 0 }

  // ---- structure: walk the SectionContent array
  const secRe = /sectionId: '([^']+)',\s*\n\s*readingTime: (\d+)/g
  const secs = [...src.matchAll(secRe)]
  counters[f].sections = secs.length
  const ids = secs.map((m) => m[1])
  const exp = expected[f]
  if (ids.join('|') !== exp.join('|')) {
    console.log(`SECTION MISMATCH ${f}: got [${ids}] expected [${exp}]`)
    errors++
  }

  for (const m of secs) {
    const rt = +m[2]
    if (rt < 6 || rt > 12) { console.log(`BAD readingTime ${f} ${m[1]}: ${rt}`); errors++ }
  }

  // counts
  counters[f].concepts = (src.match(/kind: '/g) || []).length
  counters[f].examples = (src.match(/^\s+title: '/gm) || []).length
  counters[f].quiz = (src.match(/^\s+q: '/gm) || []).length

  // objectives 3-5, concepts 5-9, takeaways 4-7, quiz 3-5 per section:
  // split source on sectionId boundaries (split with capture interleaves id, body)
  const parts = src.split(/sectionId: '(elec-ch\d+-s\d+)'/)
  for (let i = 1; i < parts.length; i += 2) {
    const id = parts[i]
    const body = parts[i + 1] || ''
    const concepts = (body.match(/kind: '/g) || []).length
    const steps = (body.match(/^\s+\{ label: '/gm) || []).length
    const exTitles = (body.match(/^\s+title: '/gm) || []).length
    const takeaways = (body.match(/^\s{6}'/gm) || []).length
    const quiz = (body.match(/^\s+q: '/gm) || []).length
    if (concepts < 5 || concepts > 9) { console.log(`BAD concepts ${id}: ${concepts}`); errors++ }
    if (exTitles < 1 || exTitles > 3) { console.log(`BAD examples ${id}: ${exTitles}`); errors++ }
    if (quiz < 3 || quiz > 5) { console.log(`BAD quiz count ${id}: ${quiz}`); errors++ }
    // steps 3-6 per example: count via example objects
    const exBodies = body.split(/\n\s{4}\{\n\s{6}title: '/).slice(1)
    for (const exb of exBodies) {
      const st = (exb.match(/\{ label: '/g) || []).length
      if (st < 3 || st > 6) { console.log(`BAD steps ${id}: ${st} in "${exb.slice(0, 60).replace(/\n/g, ' ')}"`); errors++ }
    }
    // quiz option checks
    const qBlocks = body.split(/\n\s{6}q: '/).slice(1)
    for (const qb of qBlocks) {
      const opts = [...qb.matchAll(/options: \[([^\]]+)\]/g)].map((mm) =>
        mm[1].split(/',\s*'/).map((s) => s.replace(/^'|'$/g, ''))
      )
      for (const oo of opts) {
        if (oo.length !== 4) { console.log(`BAD options ${id}: ${oo.length} — ${oo[0]?.slice(0, 40)}`); errors++ }
        if (new Set(oo).size !== oo.length) { console.log(`DUP options ${id}: ${oo[0]?.slice(0, 40)}`); errors++ }
        for (const o of oo) if (/all of the above/i.test(o)) { console.log(`ALL-OF-ABOVE ${id}`); errors++ }
      }
      const ans = [...qb.matchAll(/answer: (\d+)/g)].map((mm) => +mm[1])
      for (const a of ans) if (a < 0 || a > 3) { console.log(`BAD answer ${id}: ${a}`); errors++ }
    }
    // objectives & takeaways via array markers
    const objArr = body.match(/objectives: \[([\s\S]*?)\n\s{4}\]/)
    if (objArr) {
      const n = (objArr[1].match(/^\s{6}'/gm) || []).length
      if (n < 3 || n > 5) { console.log(`BAD objectives ${id}: ${n}`); errors++ }
    } else { console.log(`NO objectives array ${id}`); errors++ }
    const takeArr = body.match(/keyTakeaways: \[([\s\S]*?)\n\s{4}\]/)
    if (takeArr) {
      const n = (takeArr[1].match(/^\s{6}'/gm) || []).length
      if (n < 4 || n > 7) { console.log(`BAD takeaways ${id}: ${n}`); errors++ }
    } else { console.log(`NO takeaways array ${id}`); errors++ }
  }

  // ---- math validity + balanced $ + no ^ outside math + no straight apostrophe
  const strs = stringsOf(src)
  let mathCount = 0
  for (const s of strs) {
    // balanced $ (count unescaped $ is even)
    const dollars = (s.match(/\$/g) || []).length
    if (dollars % 2 !== 0) { console.log(`ODD $ in "${s.slice(0, 70)}"`); errors++ }
    const spans = [...s.matchAll(/\$\$([^$]+)\$\$|\$([^$]+)\$/g)]
    for (const sp of spans) {
      const tex = sp[1] !== undefined ? sp[1] : sp[2]
      mathCount++
      try {
        katex.renderToString(tex, { throwOnError: true, strict: false })
      } catch (e) {
        console.log(`KATEX FAIL ${f}: "${tex}" => ${e.message.slice(0, 100)}`)
        errors++
      }
    }
    // ^ outside math spans? remove math spans then scan (only for prose fields, which contain $)
    const stripped = s.replace(/\$\$[^$]+\$\$|\$[^$]+\$/g, '')
    if (dollars > 0 && stripped.includes('^')) { console.log(`BARE ^ in "${s.slice(0, 70)}"`); errors++ }
    if (/[A-Za-z]'s\b/.test(stripped) || /n't\b/.test(stripped)) {
      console.log(`STRAIGHT APOSTROPHE in "${s.slice(0, 70)}"`)
      errors++
    }
  }
  counters[f].math = mathCount

  // formula entries
  const fSec = [...src.matchAll(/chapterId: 'elec-ch1[34]',\s*\n\s*section: '([^']+)',\s*\n\s*name: '([^']+)',\s*\n\s*formula: '([^']*)'/g)]
  for (const m of fSec) {
    if (!/1[34]\.[1-9]/.test(m[1])) { console.log(`BAD formula section ${f}: ${m[1]}`); errors++ }
  }
  const latexes = [...src.matchAll(/latex: '([^']*)'/g)].map((m) => m[1].replace(/\\\\/g, '\\'))
  for (const l of latexes) {
    try {
      katex.renderToString(l, { throwOnError: true, strict: false })
    } catch (e) {
      console.log(`KATEX FAIL (formula) ${f}: "${l}" => ${e.message.slice(0, 100)}`)
      errors++
    }
  }
}

console.log('---')
console.log(JSON.stringify(counters, null, 1))
console.log(`errors: ${errors}`)
