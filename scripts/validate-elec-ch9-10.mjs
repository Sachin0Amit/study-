// Validation for elec-ch09.ts / elec-ch10.ts (task 10-e5)
import { readFileSync } from 'fs'
import katex from 'katex'

const dir = 'src/data/content/'
const files = ['elec-ch09.ts', 'elec-ch10.ts']
const lib = readFileSync('src/data/library-parts/electronics.ts', 'utf8')
const expected = [...lib.matchAll(/id: '(elec-ch(?:9|10)-s\d)'/g)].map((m) => m[1])

let errors = 0
const note = (msg) => { console.log('FAIL: ' + msg); errors++ }

// quick structural parse of each section object via TS-agnostic scanning
for (const f of files) {
  const src = readFileSync(dir + f, 'utf8')

  // --- section ids vs library
  const secs = [...src.matchAll(/sectionId: '(elec-ch(?:9|10)-s\d)'/g)].map((m) => m[1])
  if (f === 'elec-ch09.ts') {
    const want = expected.filter((s) => s.startsWith('elec-ch9'))
    if (JSON.stringify(secs) !== JSON.stringify(want)) note(`${f}: sections ${secs} != ${want}`)
  } else {
    const want = expected.filter((s) => s.startsWith('elec-ch10'))
    if (JSON.stringify(secs) !== JSON.stringify(want)) note(`${f}: sections ${secs} != ${want}`)
  }

  // --- readingTime / counts, evaluated by slicing per section
  const chunks = src.split(/sectionId: 'elec-ch(?:9|10)-s\d'/).slice(1)
  if (chunks.length !== 4) note(`${f}: expected 4 sections, split found ${chunks.length}`)
  for (let i = 0; i < chunks.length; i++) {
    const c = chunks[i]
    const id = secs[i]
    const rt = parseInt((c.match(/readingTime: (\d+)/) || [])[1] || '0')
    if (!(rt >= 6 && rt <= 12)) note(`${id}: readingTime ${rt} out of 6–12`)
    const objectives = (c.match(/^\s+objectives: \[/m) && (c.slice(c.indexOf('objectives:')).match(/'(?:[^'\\]|\\.)*'/g) || []).length) || 0
    const objCount = (() => {
      const o = c.slice(c.indexOf('objectives:'), c.indexOf('concepts:'))
      return (o.match(/'(?:[^'\\]|\\.)*',?$/gm) || []).length || (o.match(/',\n/g) || []).length + 1
    })()
    if (!(objCount >= 3 && objCount <= 5)) note(`${id}: objectives count ${objCount} not in 3–5`)
    const concepts = (c.match(/term: '/g) || []).length
    if (!(concepts >= 5 && concepts <= 9)) note(`${id}: concepts ${concepts} not in 5–9`)
    const kinds = (c.match(/kind: '/g) || []).length
    if (kinds !== concepts) note(`${id}: kind count ${kinds} != term count ${concepts}`)
    const examples = (c.match(/title: '/g) || []).length
    if (!(examples >= 1 && examples <= 3)) note(`${id}: examples ${examples} not in 1–3`)
    const steps = (c.match(/label: 'Step/g) || []).length
    if (!(steps >= 3 * examples && steps <= 6 * examples)) note(`${id}: steps ${steps} not within 3–6 per example (${examples})`)
    const takeaways = (c.match(/^\s+'/gm) || []).length // rough
    const tCount = (() => {
      const t = c.slice(c.indexOf('keyTakeaways:'), c.indexOf('quiz:'))
      return (t.match(/^      '/gm) || []).length
    })()
    if (!(tCount >= 4 && tCount <= 7)) note(`${id}: takeaways ${tCount} not in 4–7`)
    const qCount = (c.match(/^\s+q: '/gm) || []).length
    if (!(qCount >= 3 && qCount <= 5)) note(`${id}: quiz questions ${qCount} not in 3–5`)
    const optGroups = (c.match(/options: \[/g) || []).length
    if (optGroups !== qCount) note(`${id}: options groups ${optGroups} != quiz ${qCount}`)
    const answers = [...c.matchAll(/answer: (\d+)/g)].map((m) => +m[1])
    for (const a of answers) if (a < 0 || a > 3) note(`${id}: bad answer index ${a}`)
    // unique options per question: count items per options block
    const optBlocks = [...c.matchAll(/options: \[([^\]]+)\]/g)]
    for (const b of optBlocks) {
      const items = (b[1].match(/'/g) || []).length / 2
      if (items !== 4) note(`${id}: an options block has ${items} items`)
      const uniq = new Set((b[1].match(/'(?:[^'\\]|\\.)*'/g) || []))
      if (uniq.size !== items) note(`${id}: duplicate options in a block`)
    }
  }

  // --- KaTeX: render every $...$ / $$...$$ span and every latex field
  const strings = [...src.matchAll(/'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g)].map((m) =>
    m[1] !== undefined ? m[1] : m[2]
  )
  let spans = 0
  for (const raw of strings) {
    const s = raw.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\').replace(/\\n/g, ' ')
    for (const sp of s.matchAll(/\$\$([^$]+)\$\$|\$([^$]+)\$/g)) {
      const tex = sp[1] !== undefined ? sp[1] : sp[2]
      spans++
      try {
        katex.renderToString(tex, { throwOnError: true, strict: false })
      } catch (e) {
        note(`KATEX ${f}: ${tex.slice(0, 90)} => ${e.message.slice(0, 90)}`)
      }
    }
  }
  // latex fields in FormulaEntry
  for (const m of src.matchAll(/latex: '((?:[^'\\]|\\.)*)'/g)) {
    const tex = m[1].replace(/\\\\/g, '\\')
    try {
      katex.renderToString(tex, { throwOnError: true, strict: false })
    } catch (e) {
      note(`KATEX-LATEX ${f}: ${tex} => ${e.message.slice(0, 90)}`)
    }
  }
  console.log(`${f}: ${secs.length} sections, ${spans} math spans rendered`)
}

// --- caret check: ^ must only appear inside math spans or KaTeX latex fields
for (const f of files) {
  const src = readFileSync(dir + f, 'utf8')
  for (const line of src.split('\n')) {
    if (/latex:/.test(line)) continue // KaTeX source strings
    const noMath = line.replace(/\$\$[^$]+\$\$|\$[^$]+\$/g, '')
    if (noMath.includes('^')) note(`${f}: bare ^ outside math: ${line.trim().slice(0, 80)}`)
  }
}

// --- straight apostrophe check inside strings (prose)
for (const f of files) {
  const src = readFileSync(dir + f, 'utf8')
  for (const m of src.matchAll(/'((?:[^'\\]|\\.)*)'/g)) {
    if (m[1].includes("'")) {
      // an escaped \' inside a single-quoted string — check whether it is prose
      note(`${f}: straight apostrophe in string: ${m[1].slice(0, 60)}`)
    }
  }
}

console.log('---')
console.log(errors === 0 ? 'ALL CHECKS PASS' : `${errors} PROBLEMS`)
