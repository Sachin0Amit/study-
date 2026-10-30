// One-off probe: per-block word counts for fnd-learning-styles-myth
import { x75SubjectDepthPassTopics } from '../src/data/knowledge/fields/x75-subjectdepth-pass'

function wc(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length
}
function blockWords(b: any): number {
  let n = 0
  if (typeof b.text === 'string') n += wc(b.text)
  if (typeof b.title === 'string' && b.kind === 'callout') n += wc(b.title)
  if (typeof b.name === 'string') n += wc(b.name)
  if (typeof b.meaning === 'string') n += wc(b.meaning)
  if (typeof b.title === 'string' && b.kind === 'example') n += wc(b.title)
  if (b.kind === 'figure') {
    if (typeof b.caption === 'string') n += wc(b.caption)
    if (typeof b.sketchCaption === 'string') n += wc(b.sketchCaption)
  }
  if (b.kind === 'derivation') {
    if (typeof b.title === 'string') n += wc(b.title)
    if (typeof b.statement === 'string') n += wc(b.statement)
    for (const p of b.prerequisites || []) n += wc(p)
    for (const s of b.steps || []) n += wc(s.label || '') + wc(s.formula || '') + wc(s.explanation || '')
    if (typeof b.result === 'string') n += wc(b.result)
  } else {
    for (const s of b.steps || []) n += wc(s)
  }
  for (const it of b.items || []) {
    if (typeof it === 'string') n += wc(it)
    else n += wc(it.term || '') + wc(it.def || '') + wc(it.q || '') + wc(it.explain || '') + (it.options || []).reduce((a: number, o: string) => a + wc(o), 0)
  }
  return n
}

const topic = x75SubjectDepthPassTopics[0]
let total = 0
topic.blocks.forEach((b, i) => {
  const n = blockWords(b as any)
  total += n
  const label =
    (b as any).kind === 'para'
      ? 'para: ' + String((b as any).text).slice(0, 48)
      : (b as any).kind === 'figure'
        ? 'FIGURE: ' + String((b as any).caption).slice(0, 40)
        : (b as any).kind === 'derivation'
          ? 'DERIVATION: ' + (b as any).title
          : (b as any).kind === 'quiz'
            ? 'QUIZ (' + (b as any).items.length + ' items)'
            : (b as any).kind === 'terms'
              ? 'TERMS (' + (b as any).items.length + ')'
              : (b as any).kind + ': ' + String((b as any).title ?? (b as any).text ?? '').slice(0, 40)
  console.log(String(i).padStart(2), String(n).padStart(4), label)
})
console.log('TOTAL', total)
