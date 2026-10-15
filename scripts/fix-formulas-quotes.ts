// Follow-up: retarget formula entries in DOUBLE-QUOTED formula files
// (coletta-formulas, ewen-formulas — the first pass only handled single quotes).
import * as fs from 'node:fs'
import * as path from 'node:path'
import { LIBRARY_CHAPTERS, LIBRARY_SECTIONS } from '../src/data/library'

const finalSectionIndex = new Map<string, { chapter: string; index: number }>()
for (const s of LIBRARY_SECTIONS) {
  const ch = LIBRARY_CHAPTERS.find((c) => c.id === s.chapterId)!
  finalSectionIndex.set(s.id, { chapter: ch.id, index: s.number })
}
const finalChapterNumber = new Map(LIBRARY_CHAPTERS.map((c) => [c.id, c.number]))

const idMapping = new Map<string, string>(
  JSON.parse(fs.readFileSync(path.resolve(__dirname, 'migration-id-map.json'), 'utf8')) as [string, string][]
)

function resolveFormulaTarget(srcSecId: string): { chapter: string; secStr: string; quote: string } | 'DROP' | null {
  if (idMapping.has(srcSecId)) {
    const to = idMapping.get(srcSecId)!
    const loc = finalSectionIndex.get(to)
    if (loc) return { chapter: loc.chapter, secStr: `${finalChapterNumber.get(loc.chapter)}.${loc.index}`, quote: '"' }
    return 'DROP'
  }
  if (finalSectionIndex.has(srcSecId)) return null
  return 'DROP'
}

let retargeted = 0, dropped = 0, patchedFiles = 0
const processFile = (p: string) => {
  const src = fs.readFileSync(p, 'utf8')
  if (!src.includes('chapterId:')) return
  const lines = src.split('\n')
  const out: string[] = []
  let changed = false
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    // single-line entry: { chapterId: 'x', section: '1.2', name: ..., ... },
    if (/^\s*\{\s*chapterId:\s*['"]/.test(line) && /\}\s*,?\s*$/.test(line)) {
      const chId = /chapterId:\s*['"]([^'"]+)['"]/.exec(line)?.[1]
      const sec = /section:\s*['"]([^'"]+)['"]/.exec(line)?.[1]
      const quote = line.includes(`chapterId: '`) ? "'" : '"'
      if (chId && sec && Number.isFinite(Number(sec.split('.')[1]))) {
        const srcSecId = `${chId}-s${Number(sec.split('.')[1])}`
        const target = resolveFormulaTarget(srcSecId)
        if (target === 'DROP') { changed = true; dropped++; i++; continue }
        if (target) {
          out.push(
            line
              .replace(/chapterId:\s*['"][^'"]+['"]/, `chapterId: ${quote}${target.chapter}${quote}`)
              .replace(/section:\s*['"][^'"]+['"]/, `section: ${quote}${target.secStr}${quote}`)
          )
          changed = true
          retargeted++
          i++
          continue
        }
      }
      out.push(line)
      i++
      continue
    }
    if (/^\s*\{\s*$/.test(lines[i])) {
      let j = i + 1
      while (j < lines.length && !/^\s*\},?\s*$/.test(lines[j])) j++
      if (j < lines.length) {
        const block = lines.slice(i, j + 1)
        const blockStr = block.join('\n')
        const chId = /chapterId:\s*['"]([^'"]+)['"]/.exec(blockStr)?.[1]
        const sec = /section:\s*['"]([^'"]+)['"]/.exec(blockStr)?.[1]
        if (chId && sec && Number.isFinite(Number(sec.split('.')[1]))) {
          const srcSecId = `${chId}-s${Number(sec.split('.')[1])}`
          const target = resolveFormulaTarget(srcSecId)
          if (target === 'DROP') { changed = true; dropped++; i = j + 1; continue }
          if (target) {
            const newBlock = blockStr
              .replace(/chapterId:\s*['"][^'"]+['"]/, `chapterId: "${target.chapter}"`)
              .replace(/section:\s*['"][^'"]+['"]/, `section: "${target.secStr}"`)
            out.push(...newBlock.split('\n'))
            changed = true
            retargeted++
            i = j + 1
            continue
          }
        }
        out.push(...block)
        i = j + 1
        continue
      }
    }
    out.push(lines[i])
    i++
  }
  if (changed) { fs.writeFileSync(p, out.join('\n')); patchedFiles++ }
}
const dataDir = path.resolve(__dirname, '../src/data')
for (const f of fs.readdirSync(dataDir)) {
  if (f.endsWith('-formulas.ts') || f === 'missing-formulas.ts') processFile(path.join(dataDir, f))
}
for (const f of fs.readdirSync(path.join(dataDir, 'content'))) {
  if (!f.endsWith('.ts') || f === 'index.ts') continue
  processFile(path.join(dataDir, 'content', f))
}
console.log(`double-quote pass: files patched ${patchedFiles}, entries retargeted ${retargeted}, dropped ${dropped}`)
