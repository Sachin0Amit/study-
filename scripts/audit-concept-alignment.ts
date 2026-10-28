/**
 * CROSSVERIFY helper (2026-10-29): simulate topicToSectionContent's
 * concept-label assignment for given topic ids and flag label/statement
 * mismatches. Usage: bun scripts/audit-concept-alignment.ts <id-stem>...
 * With no args, audits the nine Genetics & Heredity book topics.
 */
import { readFileSync } from 'fs'

const stems = process.argv.slice(2)
const IDS = stems.length
  ? stems
  : [
      'bio-meiosis-linkage-inheritance',
      'bio-beyond-mendel-extensions',
      'bio-genetics-mendel',
      'bio-genomics-bioinformatics',
      'bio-crispr-gene-editing',
      'bio-population-inheritance-frequencies',
      'bio-population-genetics',
      'bio-biotechnology-rdna-processes',
      'bio-biotechnology-applications',
    ]

// Load every fields file and find the topic objects by id via a crude
// but reliable TS-object slice (brace matching from `id: '<stem>'`).
import { globSync } from 'fs'

const files = globSync('src/data/knowledge/fields/*.ts')
const topics = new Map<string, any>()

for (const f of files) {
  const src = readFileSync(f, 'utf8')
  for (const id of IDS) {
    const markerSq = `id: '${id}'`
    const markerDq = `id: "${id}"`
    const at = src.includes(markerSq) ? src.indexOf(markerSq) : src.indexOf(markerDq)
    if (at === -1) continue
    // brace-match from the object opening brace before the marker
    const open = src.lastIndexOf('{', at)
    let depth = 0
    let end = -1
    for (let i = open; i < src.length; i++) {
      if (src[i] === '{') depth++
      else if (src[i] === '}') {
        depth--
        if (depth === 0) {
          end = i + 1
          break
        }
      }
    }
    if (end === -1) continue
    const objSrc = src.slice(open, end)
    try {
      // eval the object literal (single quotes, no imports inside)
      const obj = new Function(`return (${objSrc})`)()
      topics.set(id, { file: f, obj })
    } catch (e) {
      console.error(`PARSE FAIL ${id} in ${f}: ${e}`)
    }
  }
}

for (const id of IDS) {
  const t = topics.get(id)
  if (!t) {
    console.log(`\n### ${id}: NOT FOUND`)
    continue
  }
  const obj = t.obj
  const labels: string[] = [...obj.concepts]
  console.log(`\n### ${id}  (${t.file})  words=${obj.words}`)
  console.log(`    labels=${labels.length}`)
  let cursor = 0
  let paraIdx = 0
  for (const b of obj.blocks) {
    if (b.kind === 'para') {
      paraIdx++
      if (paraIdx === 1) continue // intro para — not labeled
      const label = cursor < labels.length ? labels[cursor] : '(fold into last)'
      cursor++
      const text = b.text as string
      console.log(`  §${cursor} [${label}]`)
      console.log(`     text: ${text.slice(0, 130).replace(/\n/g, ' ')}`)
    } else if (b.kind === 'callout') {
      console.log(`  · callout own-label: [${b.title}] (${b.tone})`)
    } else if (b.kind === 'formula') {
      console.log(`  · formula own-label: [${b.name}]`)
    }
  }
  console.log(`    labels available=${labels.length}, paras labeled=${cursor}`)
}
