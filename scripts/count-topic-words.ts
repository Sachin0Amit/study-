/* Honest word-count audit for newly added knowledge topics. */
import { lifeSciences } from '../src/data/knowledge/fields/life-sciences'
import { businessEconomics } from '../src/data/knowledge/fields/business-economics'
import { lawGovernance } from '../src/data/knowledge/fields/law-governance'
import { languagesLiterature } from '../src/data/knowledge/fields/languages-literature'

function blockWords(b: any): number {
  let n = 0
  const count = (s: string) => { n += String(s).trim().split(/\s+/).filter(Boolean).length }
  if (!b) return 0
  switch (b.kind) {
    case 'para': case 'heading': count(b.text); break
    case 'callout': count(b.title); count(b.text); break
    case 'formula': count(b.name); count(b.meaning); break
    case 'example': b.steps.forEach(count); break
    case 'terms': b.items.forEach((i: any) => { count(i.term); count(i.def) }); break
    case 'quiz': b.items.forEach((i: any) => { count(i.q); i.options.forEach(count); count(i.explain) }); break
    case 'list': b.items.forEach(count); break
  }
  return n
}

const files: [string, any[], string[]][] = [
  ['life-sciences', lifeSciences.topics, ['bioc-protein-structure-folding', 'bioc-enzymes-kinetics-regulation', 'bioc-lipid-amino-acid-metabolism']],
  ['business-economics', businessEconomics.topics, ['mkt-stp-playbook', 'econ-exchange-rates-bop', 'acct-accounting-cycle-accruals']],
  ['law-governance', lawGovernance.topics, ['law-federalism-division-of-powers', 'law-consent-defects-void-voidable']],
  ['languages-literature', languagesLiterature.topics, ['lang-french-verbs', 'lang-german-verbs', 'lang-japanese-verbs', 'lang-spanish-verbs']],
]

const all: { id: string; words: number; readMins: number }[] = []
for (const [fname, topics, ids] of files) {
  for (const id of ids) {
    const t = topics.find((x: any) => x.id === id)
    if (!t) { console.log(`${fname} :: ${id} :: NOT FOUND`); continue }
    const real = t.blocks.reduce((s: number, b: any) => s + blockWords(b), 0)
    const mins = Math.max(1, Math.round(real / 210))
    all.push({ id, words: real, readMins: mins })
    console.log(`${fname} :: ${id} :: declared=${t.words} real=${real} suggestedMins=${mins}`)
  }
}
console.log('JSON:' + JSON.stringify(all))
