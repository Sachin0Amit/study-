import type { KnowledgeTopic } from '/home/z/my-project/src/data/knowledge/types'

function countWords(t: KnowledgeTopic, mode: 'full' | 'para' | 'nopro'): number {
  let n = 0
  const add = (s: string) => { n += s.split(/\s+/).filter(Boolean).length }
  for (const b of t.blocks as any[]) {
    if (mode === 'para') { if (b.kind === 'para' || b.kind === 'callout') add(b.text); continue }
    if (mode === 'nopro') { if (['para','callout','heading','example','list','terms','quiz','formula'].includes(b.kind)) continue }
    switch (b.kind) {
      case 'para': case 'heading': add(b.text); break
      case 'callout': add(b.title); add(b.text); break
      case 'formula': add(b.name); add(b.meaning); break
      case 'example': add(b.title); b.steps.forEach(add); break
      case 'list': b.items.forEach(add); break
      case 'terms': b.items.forEach((i: any) => { add(i.term); add(i.def) }); break
      case 'quiz': b.items.forEach((i: any) => { add(i.q); i.options.forEach(add); add(i.explain) }); break
    }
  }
  return n
}

const files = [
  ['tech', await import('/home/z/my-project/src/data/knowledge/fields/technology-applied')],
  ['eng', await import('/home/z/my-project/src/data/knowledge/fields/engineering')],
  ['env', await import('/home/z/my-project/src/data/knowledge/fields/environment')],
  ['emer', await import('/home/z/my-project/src/data/knowledge/fields/emerging-interdisciplinary')],
] as const

for (const [name, mod] of files) {
  const topics = (mod as any).default ? (mod as any).default.topics : Object.values(mod as any)[0].topics
  for (const t of topics) {
    console.log(name, t.id, 'claimed:', t.words, 'full:', countWords(t, 'full'), 'para:', countWords(t, 'para'))
  }
}
