// Round-12 depth validator — structure + KaTeX + typography for the depth ladder.
// Usage: bun scripts/validate-depth.mjs
// Checks every SectionContent.depth array: tiers, block kinds, body length,
// KaTeX renders, no bare ^ or _ outside math, example headings, tier order.
import katex from 'katex'
import { allContent } from '../src/data/content/index'

const KINDS = new Set([
  'para',
  'theorem',
  'proof',
  'derivation',
  'remark',
  'example',
  'application',
  'open',
])
const TIERS = new Set(['masters', 'phd'])

let errs = 0
let sections = 0
let tierCount = 0
let blocks = 0
let words = 0
const kindTally = {}
const err = (m) => {
  console.log('  ✗ ' + m)
  errs++
}

for (const c of allContent) {
  if (!c.depth) continue
  sections++
  const order = c.depth.map((t) => t.tier)
  const phdAt = order.indexOf('phd')
  const mAt = order.indexOf('masters')
  if (mAt >= 0 && phdAt >= 0 && phdAt < mAt) err(`${c.sectionId}: phd tier appears before masters`)
  // Round 14 policy: depth is optional enrichment — a single masters tier is valid.
  // The ordering invariant (masters before phd) is still enforced below.

  for (const t of c.depth) {
    tierCount++
    if (!TIERS.has(t.tier)) {
      err(`${c.sectionId}: bad tier ${JSON.stringify(t.tier)}`)
      continue
    }
    if (!t.title || t.title.length < 8) err(`${c.sectionId} ${t.tier}: weak or missing tier title`)
    if (!Array.isArray(t.blocks) || t.blocks.length === 0) {
      err(`${c.sectionId} ${t.tier}: no blocks`)
      continue
    }
    for (const b of t.blocks) {
      blocks++
      kindTally[b.kind] = (kindTally[b.kind] ?? 0) + 1
      if (!KINDS.has(b.kind)) err(`${c.sectionId} ${t.tier}: bad block kind ${JSON.stringify(b.kind)}`)
      if (!b.body || b.body.length < 70)
        err(`${c.sectionId} ${t.tier} ${b.kind}: body too short (${b.body?.length ?? 0} chars)`)
      if (b.kind === 'example' && !b.heading)
        err(`${c.sectionId} ${t.tier}: example block without a heading`)
      // KaTeX: every $...$ / $$...$$ span must render
      const math = [...(b.body ?? '').matchAll(/\$\$([^$]+)\$\$|\$([^$]+)\$/g)]
      for (const m of math) {
        const tex = m[1] ?? m[2]
        try {
          katex.renderToString(tex, { throwOnError: true })
        } catch (e) {
          err(
            `${c.sectionId} ${t.tier} ${b.kind}: KaTeX error for "${tex.slice(0, 48)}" — ${String(
              e.message
            ).split('\n')[0]}`
          )
        }
      }
      // typography: no bare ^ or _ outside math/code spans
      const stripped = (b.body ?? '')
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/\$\$[^$]+\$\$|\$[^$]+\$|`[^`]+`/g, '')
      if (/[\^_]/.test(stripped))
        err(`${c.sectionId} ${t.tier} ${b.kind}: bare ^ or _ outside math delimiters`)
      words += (b.body ?? '').split(/\s+/).filter(Boolean).length
    }
  }
}

console.log(
  `\nDepth coverage: ${sections}/${allContent.length} sections · ${tierCount} tiers · ${blocks} blocks · ~${(
    words / 200
  ).toFixed(0)} min of graduate reading`
)
console.log('Block kinds:', JSON.stringify(kindTally))
if (errs > 0) {
  console.log(`\nFAILED with ${errs} error${errs === 1 ? '' : 's'}`)
  process.exit(1)
}
console.log('All depth content valid.')
