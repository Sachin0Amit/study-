import { readFileSync } from 'fs'

const files = ['languages-literature', 'x34-final-orphan-pass', 'emerging-interdisciplinary', 'engineering', 'environment']
const ids = ['lang-german-verbs', 'lang-mandarin-foundations', 'lang-classical-chinese-canon', 'emer-nanotechnology-scale', 'em-quantum-sensing-atomic-clocks', 'eng-naval-architecture-ships', 'env-renewable-transition', 'env-solar-energy-photovoltaics', 'env-wind-energy-turbines', 'em-digital-twins-mirror-worlds', 'emer-climate-models']

for (const f of files) {
  const src = readFileSync(`src/data/knowledge/fields/${f}.ts`, 'utf8')
  for (const id of ids) {
    const i1 = src.indexOf(`id: '${id}'`)
    const i2 = src.indexOf(`id: "${id}"`)
    const i = i1 >= 0 ? i1 : i2
    if (i < 0) continue
    const chunk = src.slice(i, i + 8000)
    const branch = (chunk.match(/branch: ['"]([^'"]+)['"]/) || [])[1]
    const field = (chunk.match(/field: ['"]([^'"]+)['"]/) || [])[1]
    const words = (chunk.match(/words: (\d+)/) || [])[1]
    const cm = chunk.match(/concepts: \[([\s\S]*?)\]/)
    const concepts = cm ? cm[1].replace(/['"\n]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 450) : '?'
    const terms = [...chunk.matchAll(/term: ['"]([^'"]+)['"]/g)].map(m => m[1]).slice(0, 12).join(', ')
    console.log(`=== ${id} [${f}] field=${field} branch=${branch} w=${words}`)
    console.log(`  CONCEPTS: ${concepts}`)
    console.log(`  TERMS: ${terms || '(none)'}`)
  }
}
