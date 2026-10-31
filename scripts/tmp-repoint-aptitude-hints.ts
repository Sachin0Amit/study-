/** One-shot: re-point exam mappedSubjectId hints from the retired 'aptitude'
 *  subject to the three master-syllabus subjects. Run once, then delete. */
import { readFileSync, writeFileSync } from 'fs'

type Rule = [name: string, id: string]

const plan: Array<[file: string, rules: Rule[]]> = [
  ['india-professional', [['Logical Reasoning', 'ku-logical-reasoning']]],
  [
    'india-govt',
    [
      ['General Studies Paper II (CSAT)', 'ku-logical-reasoning'],
      ['General Intelligence and Reasoning', 'ku-logical-reasoning'],
      ['General Awareness', 'ku-general-awareness'],
      ['Reasoning Ability', 'ku-logical-reasoning'], // all occurrences
    ],
  ],
  [
    'india-engineering',
    [
      ['Logical Reasoning', 'ku-logical-reasoning'],
      ['Aptitude', 'ku-logical-reasoning'],
    ],
  ],
  [
    'uk',
    [
      ['Decision Making', 'ku-logical-reasoning'],
      ['Abstract Reasoning', 'ku-logical-reasoning'],
    ],
  ],
  ['usa-standardized', [['Data Insights', 'ku-quantitative-aptitude']]],
  [
    'india-pg-competitive',
    [
      ['General Aptitude', 'ku-quantitative-aptitude'], // all occurrences
      ['Data Interpretation and Logical Reasoning', 'ku-logical-reasoning'],
      ['General Test', 'ku-logical-reasoning'],
      ['General Paper on Teaching & Research Aptitude (Paper I)', 'ku-logical-reasoning'],
    ],
  ],
]

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

let changed = 0
for (const [file, rules] of plan) {
  const p = `src/data/exams/${file}.ts`
  let t = readFileSync(p, 'utf8')
  for (const [name, id] of rules) {
    const re = new RegExp(
      `(name: '${esc(name)}',[\\s\\S]{0,120}?mappedSubjectId: )'aptitude'`
    )
    let guard = 0
    let m: RegExpExecArray | null
    while ((m = re.exec(t)) !== null && guard++ < 20) {
      t = t.slice(0, m.index) + `${m[1]}'${id}'` + t.slice(m.index + m[0].length)
      changed++
    }
  }
  writeFileSync(p, t)
}
console.log('hints re-pointed:', changed)

let leftovers = 0
for (const [file] of plan) {
  const t = readFileSync(`src/data/exams/${file}.ts`, 'utf8')
  const n = (t.match(/mappedSubjectId: 'aptitude'/g) || []).length
  if (n) {
    console.log('LEFT OVER in', file, n)
    leftovers += n
  }
}
console.log(leftovers === 0 ? 'ALL CLEAN' : `WARN: ${leftovers} left`)
