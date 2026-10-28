/* Word-count audit for CENGAGE-20261028-1 sections (hall-ch9-s13, hall-ch9-s18, hall-ch28-s28).
 * Mirrors the app's counting: all prose words across intro, objectives, concepts
 * (term+statement+detail), figures (caption), examples (title+problem+steps+result),
 * keyTakeaways, quiz (q+options+explanation). */
import { hallCh9Content } from '../src/data/content/hall-ch9'
import { hallCh28Content } from '../src/data/content/hall-ch28'

const TARGETS = ['hall-ch9-s13', 'hall-ch9-s18', 'hall-ch28-s28']

function words(s: string): number {
  return s.split(/\s+/).filter(Boolean).length
}

function stripMarkup(s: string): string {
  // count rendered words: drop latex/inline-math/grouping noise but keep prose words
  return s
    .replace(/\\\[|\\\(|\$\$|\$/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}]/g, ' ')
    .replace(/[~^_]/g, ' ')
}

for (const target of TARGETS) {
  const pool = [...hallCh9Content, ...hallCh28Content]
  const sec = pool.find((x) => x.sectionId === target)
  if (!sec) {
    console.log(`${target}: NOT FOUND`)
    continue
  }
  let n = 0
  n += words(stripMarkup(sec.intro))
  for (const o of sec.objectives) n += words(stripMarkup(o))
  for (const c of sec.concepts) n += words(stripMarkup(c.term + ' ' + c.statement + ' ' + (c.detail ?? '')))
  for (const f of sec.figures ?? []) n += words(stripMarkup(f.caption))
  for (const e of sec.examples) {
    n += words(stripMarkup(e.title + ' ' + e.problem + ' ' + (e.result ?? '')))
    for (const st of e.steps) n += words(stripMarkup(st.label + ' ' + st.text))
  }
  for (const k of sec.keyTakeaways) n += words(stripMarkup(k))
  for (const q of sec.quiz) {
    if (!q) continue
    n += words(stripMarkup(q.q + ' ' + q.explanation))
    for (const o of q.options) n += words(stripMarkup(o))
  }
  console.log(`${target}: ${n} words → readMins should be ${Math.round(n / 200)} (declared ${sec.readingTime})`)
}
