import { jsCh16Content } from '/home/z/my-project/src/data/content/js-ch16.ts'
import { jsCh17Content } from '/home/z/my-project/src/data/content/js-ch17.ts'

const expected16 = ['js-ch16-s1','js-ch16-s2','js-ch16-s3','js-ch16-s4','js-ch16-s5','js-ch16-s6','js-ch16-s7']
const expected17 = ['js-ch17-s1','js-ch17-s2','js-ch17-s3','js-ch17-s4','js-ch17-s5','js-ch17-s6']
const kinds = new Set(['definition','theorem','law','method','notation','insight'])
const emoji = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/u

let errors = []
let warnings = []
let stats = { sections: 0, concepts: 0, examples: 0, steps: 0, quiz: 0, fences: 0, mathSpans: 0, codeSpans: 0 }

function checkField(id, name, text) {
  if (typeof text !== 'string') { errors.push(`${id} ${name}: not a string`); return }
  const fences = (text.match(/```/g) || []).length
  stats.fences += fences / 2
  if (fences % 2 !== 0) errors.push(`${id} ${name}: ODD fence count (${fences})`)
  const parts = text.split('```')
  parts.forEach((p, i) => {
    if (i % 2 === 0) {
      const dollars = (p.match(/\$/g) || []).length
      if (dollars > 0) warnings.push(`${id} ${name}: ${dollars} $ char(s) OUTSIDE code fence — would render as math`)
      const math = (p.match(/\$[^$]+\$/g) || []).length
      stats.mathSpans += math
      const spans = (p.match(/`[^`]+`/g) || []).length
      stats.codeSpans += spans
    }
  })
  if (text.includes("'")) errors.push(`${id} ${name}: contains straight apostrophe`)
  if (emoji.test(text)) errors.push(`${id} ${name}: contains emoji`)
}

function validate(content, expected, file) {
  const ids = content.map(s => s.sectionId)
  if (JSON.stringify(ids) !== JSON.stringify(expected)) {
    errors.push(`${file}: section IDs ${JSON.stringify(ids)} != expected ${JSON.stringify(expected)}`)
  }
  for (const s of content) {
    const id = s.sectionId
    stats.sections++
    if (!(s.readingTime >= 6 && s.readingTime <= 12)) errors.push(`${id}: readingTime ${s.readingTime} out of 6-12`)
    checkField(id, 'intro', s.intro)
    if (s.intro.length < 200) warnings.push(`${id}: intro shorter than gold standard density`)
    if (s.objectives.length < 3 || s.objectives.length > 5) errors.push(`${id}: objectives count ${s.objectives.length}`)
    s.objectives.forEach((o, i) => checkField(id, `objectives[${i}]`, o))
    if (s.concepts.length < 4 || s.concepts.length > 9) errors.push(`${id}: concepts count ${s.concepts.length}`)
    s.concepts.forEach((c, i) => {
      stats.concepts++
      if (!kinds.has(c.kind)) errors.push(`${id}: concepts[${i}] bad kind ${c.kind}`)
      if (!c.term || !c.statement) errors.push(`${id}: concepts[${i}] missing term/statement`)
      checkField(id, `concepts[${i}].statement`, c.statement)
      if (c.detail) checkField(id, `concepts[${i}].detail`, c.detail)
    })
    if (s.examples.length < 1 || s.examples.length > 3) errors.push(`${id}: examples count ${s.examples.length}`)
    s.examples.forEach((e, i) => {
      stats.examples++
      if (!e.title || !e.problem) errors.push(`${id}: examples[${i}] missing title/problem`)
      if (e.steps.length < 3 || e.steps.length > 7) errors.push(`${id}: examples[${i}] steps count ${e.steps.length}`)
      e.steps.forEach((st, j) => {
        stats.steps++
        if (!st.label || !st.text) errors.push(`${id}: examples[${i}].steps[${j}] missing label/text`)
        checkField(id, `examples[${i}].steps[${j}]`, st.text)
      })
      if (!e.result) errors.push(`${id}: examples[${i}] missing result`)
      else checkField(id, `examples[${i}].result`, e.result)
      checkField(id, `examples[${i}].problem`, e.problem)
    })
    if (s.keyTakeaways.length < 4 || s.keyTakeaways.length > 7) errors.push(`${id}: keyTakeaways count ${s.keyTakeaways.length}`)
    s.keyTakeaways.forEach((k, i) => checkField(id, `keyTakeaways[${i}]`, k))
    if (s.quiz.length < 3 || s.quiz.length > 5) errors.push(`${id}: quiz count ${s.quiz.length}`)
    s.quiz.forEach((q, i) => {
      stats.quiz++
      if (q.options.length !== 4) errors.push(`${id}: quiz[${i}] options count ${q.options.length}`)
      if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length)) errors.push(`${id}: quiz[${i}] bad answer index ${q.answer}`)
      if (!q.explanation) errors.push(`${id}: quiz[${i}] missing explanation`)
      checkField(id, `quiz[${i}].q`, q.q)
      q.options.forEach((o, j) => checkField(id, `quiz[${i}].options[${j}]`, o))
      checkField(id, `quiz[${i}].explanation`, q.explanation)
    })
    const allText = JSON.stringify(s)
    if (!allText.includes('```')) errors.push(`${id}: NO code fence anywhere (code-first rule)`)
  }
}

validate(jsCh16Content, expected16, 'js-ch16.ts')
validate(jsCh17Content, expected17, 'js-ch17.ts')

console.log('=== STATS ===')
console.log(JSON.stringify(stats, null, 2))
console.log('=== WARNINGS ===')
console.log(warnings.length ? warnings.join('\n') : 'none')
console.log('=== ERRORS ===')
console.log(errors.length ? errors.join('\n') : 'none')
console.log(errors.length === 0 ? 'ALL CHECKS PASSED' : `${errors.length} ERRORS`)
process.exit(errors.length === 0 ? 0 : 1)
