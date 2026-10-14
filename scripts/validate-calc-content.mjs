// Round-9 calc content validator — structure + KaTeX checks for calc-ch*.ts
// Usage: node scripts/validate-calc-content.mjs [files...]
import { readFileSync } from 'fs'
import katex from 'katex'

const files = process.argv.slice(2)
if (files.length === 0) {
  console.error('usage: node scripts/validate-calc-content.mjs src/data/content/calc-chXX.ts ...')
  process.exit(1)
}

const KINDS = new Set(['definition', 'theorem', 'law', 'method', 'notation', 'insight'])
let errs = 0
const err = (m) => { console.log('  ✗ ' + m); errs++ }

for (const f of files) {
  const src = readFileSync(f, 'utf8')
  console.log(`\n== ${f}`)
  const secIds = [...src.matchAll(/sectionId: '([^']+)'/g)].map((m) => m[1])
  const readingTimes = [...src.matchAll(/readingTime: (\d+)/g)].map((m) => +m[1])
  const kinds = [...src.matchAll(/kind: '([^']+)'/g)].map((m) => m[1])
  const steps = [...src.matchAll(/steps: \[([\s\S]*?)\n\s*\]/g)].map((m) => (m[1].match(/label:/g) || []).length)
  const answers = [...src.matchAll(/answer: (\d+)/g)].map((m) => +m[1])

  // slice-based per-section counting (arrays may contain ] inside math spans)
  const block = (id, i) => src.slice(src.indexOf(`sectionId: '${id}'`), i + 1 < secIds.length ? src.indexOf(`sectionId: '${secIds[i + 1]}'`) : src.length)
  const countBetween = (txt, from, to) => {
    const a = txt.indexOf(from); if (a < 0) return -1
    const b = txt.indexOf(to, a); if (b < 0) return txt.length
    return (txt.slice(a, b).match(/^\s*'/gm) || []).length
  }
  const objCounts = [], ktCounts = [], quizBlocks = [], optionsPerQ = []
  secIds.forEach((id, i) => {
    const t = block(id, i)
    objCounts.push(countBetween(t, 'objectives: [', ']'))
    ktCounts.push(countBetween(t, 'keyTakeaways: [', 'quiz: ['))
    const qa = t.indexOf('quiz: [')
    quizBlocks.push(qa < 0 ? -1 : (t.slice(qa).match(/^\s*q: '/gm) || []).length)
    for (const line of t.split('\n')) {
      if (line.includes('options: [') && line.trim().startsWith('options:')) {
        optionsPerQ.push((line.match(/'(?:[^'\\]|\\.)*'/g) || []).length)
      }
    }
  })

  console.log(`  sections: ${secIds.length} ids ok: ${secIds.every((s) => /^calc-ch\d+-s\d+$/.test(s))}`)
  console.log(`  readingTime: ${readingTimes.join(', ')} | objectives: ${objCounts.join(', ')}`)
  console.log(`  concepts: ${kinds.length} (per-section via split below) | takeaways: ${ktCounts.join(', ')}`)
  console.log(`  examples(steps): ${steps.join(', ')} | quiz: ${quizBlocks.join(', ')}`)
  readingTimes.forEach((t) => { if (t < 6 || t > 12) err(`readingTime ${t} out of 6–12`) })
  objCounts.forEach((n) => { if (n < 3 || n > 5) err(`objectives count ${n} out of 3–5`) })
  ktCounts.forEach((n) => { if (n < 4 || n > 7) err(`keyTakeaways count ${n} out of 4–7`) })
  steps.forEach((n) => { if (n < 3 || n > 7) err(`example with ${n} steps out of 3–7`) })
  quizBlocks.forEach((n) => { if (n < 3 || n > 5) err(`quiz count ${n} out of 3–5`) })
  answers.forEach((a) => { if (a < 0 || a > 3) err(`bad answer index ${a}`) })
  optionsPerQ.forEach((n) => { if (n !== 4) err(`quiz question with ${n} options (need 4)`) })
  kinds.forEach((k) => { if (!KINDS.has(k)) err(`bad concept kind ${k}`) })

  // concepts per section
  const perSecConcepts = []
  let cursor = 0
  for (const id of secIds) {
    const start = src.indexOf(`sectionId: '${id}'`)
    const next = secIds.indexOf(id) === secIds.length - 1 ? src.length : src.indexOf(`sectionId: '${secIds[secIds.indexOf(id) + 1]}'`)
    perSecConcepts.push((src.slice(start, next).match(/kind: '/g) || []).length)
  }
  console.log(`  concepts per section: ${perSecConcepts.join(', ')}`)
  perSecConcepts.forEach((n) => { if (n < 4 || n > 9) err(`section with ${n} concepts out of 4–9`) })

  // string extraction: single- and double-quoted TS strings (with escapes)
  const raws = []
  const re = /'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"/g
  let m
  while ((m = re.exec(src))) raws.push(m[1] !== undefined ? m[1] : m[2])

  let spanCount = 0
  const plain = []
  for (const raw of raws) {
    const s = raw.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\').replace(/\\n/g, ' ')
    const spans = [...s.matchAll(/\$\$([^$]+)\$\$|\$([^$]+)\$/g)]
    for (const sp of spans) {
      const tex = sp[1] !== undefined ? sp[1] : sp[2]
      spanCount++
      try { katex.renderToString(tex, { throwOnError: true, strict: false }) }
      catch (e) { err(`KATEX FAIL: ${tex} => ${e.message.slice(0, 100)}`) }
    }
    // plain text = string with math spans removed, bold markers kept for bold checks
    const noMath = s.replace(/\$\$[^$]+\$\$|\$[^$]+\$/g, ' § ')
    plain.push(noMath)
    // bold containing math → renderer cannot show math inside bold
    for (const b of noMath.matchAll(/\*\*([^*]+)\*\*/g)) {
      if (b[1].includes('§')) err(`math inside bold span: **${b[1].slice(0, 60)}**`)
    }
    if (/[ ^]('s|'t|'re|'ll|'ve|'d)\b/.test(noMath)) err(`straight apostrophe in prose: ${noMath.slice(0, 70)}`)
    // pseudo-notation outside math: bare ^ or _{...}
    const pseudo = noMath.match(/[^$§]\^|_[{(]/)
    if (pseudo) err(`possible pseudo-notation in plain text: ${noMath.slice(Math.max(0, noMath.indexOf(pseudo[0]) - 20), noMath.indexOf(pseudo[0]) + 30)}`)
  }
  console.log(`  KaTeX spans checked: ${spanCount} (errors above, if any)`)
}

console.log(errs === 0 ? `\nALL CHECKS PASSED` : `\n${errs} PROBLEM(S) FOUND`)
process.exit(errs === 0 ? 0 : 1)
