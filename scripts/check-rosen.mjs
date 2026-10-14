import { readFileSync } from 'fs'
import katex from 'katex'
let total = 0, fail = 0
for (const f of ['ch02','ch04','ch05']) {
  const src = readFileSync(`src/data/content/${f}.ts`, 'utf8')
  const strings = [...src.matchAll(/'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1] ?? m[2])
  for (const raw of strings) {
    const s = raw.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\').replace(/\\n/g, ' ')
    for (const sp of [...s.matchAll(/\$([^$]+)\$/g)]) {
      total++
      try { katex.renderToString(sp[1], { throwOnError: true, strict: false }) } catch (e) { console.log(`FAIL ${f}: ${sp[1].slice(0,60)}`); fail++ }
    }
  }
}
console.log(`rosen math spans: ${total}, failures: ${fail}`)
