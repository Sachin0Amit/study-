import { emergingInterdisciplinary } from '../src/data/knowledge/fields/emerging-interdisciplinary'
import { environment } from '../src/data/knowledge/fields/environment'
import { healthWellness } from '../src/data/knowledge/fields/health-wellness'
import { lifeSciences } from '../src/data/knowledge/fields/life-sciences'
import { humanities } from '../src/data/knowledge/fields/humanities'
import { socialSciences } from '../src/data/knowledge/fields/social-sciences'
import { businessEconomics } from '../src/data/knowledge/fields/business-economics'
import { lawGovernance } from '../src/data/knowledge/fields/law-governance'
import { languagesLiterature } from '../src/data/knowledge/fields/languages-literature'
import { x16ExamSkills } from '../src/data/knowledge/fields/x16-exam-skills'
import { x17ExamSyllabusTopics } from '../src/data/knowledge/fields/x17-exam-syllabus'
import { x19CivilCoreTopics } from '../src/data/knowledge/fields/x19-civil-core'
import { computingAI } from '../src/data/knowledge/fields/computing-ai'

const IDS = [
  'civ-concrete-structures',
  'civ-hydrology-irrigation',
  'civ-water-wastewater-municipal',
  'civ-highway-geometric-design',
  'civ-surveying-geomatics',
  'hist-nomads-indigenous-modernisation',
  'econ-india-development-challenges',
  'emer-phylogenetics-tree-of-life',
  'env-climate-feedbacks-sensitivity',
  'aid-cardiac-cpr-chain-of-survival',
  'health-sleep-stages-memory',
  'bio-plant-reproduction-flowers-seeds',
  'bio-classification-five-kingdoms',
  'bio-plant-kingdom-groups',
  'bio-flowering-plant-body',
  'bio-cell-biomolecules',
  'bio-cellular-respiration-pathways',
  'bio-human-reproduction-system',
  'hist-ancient-india',
  'hist-medieval-india',
  'hist-modern-india-freedom-struggle',
  'soc-indian-constitution-polity',
  'econ-macro-ad-as-indian-economy',
  'law-indian-contract-act',
  'eng-critical-reasoning-arguments',
  'eng-argument-essay-writing',
  'eng-cohesion-lexical-accuracy',
  'eng-skimming-scanning-timed-reading',
  'eng-verbal-reasoning-passage-claims',
  'eng-speaking-fluency-long-turn',
  'hist-thinkers-beliefs-buildings',
  'hist-travellers-vijayanagara',
  'hist-indian-countryside-towns',
  'pol-contemporary-world-order',
  'pol-india-since-independence',
  'cs-computing-thinking-digital-society',
]

const wc = (s: string) => s.split(/\s+/).filter(Boolean).length

function blockWords(b: any): number {
  let n = 0
  if (typeof b.text === 'string') n += wc(b.text)
  if (typeof b.title === 'string' && b.kind === 'callout') n += wc(b.title)
  if (typeof b.name === 'string') n += wc(b.name)
  if (typeof b.meaning === 'string') n += wc(b.meaning)
  if (typeof b.title === 'string' && b.kind === 'example') n += wc(b.title)
  for (const s of b.steps || []) n += wc(s)
  for (const it of b.items || []) {
    if (typeof it === 'string') n += wc(it)
    else n += wc(it.term || '') + wc(it.def || '') + wc(it.q || '') + wc(it.explain || '') + (it.options || []).reduce((a: number, o: string) => a + wc(o), 0)
  }
  return n
}

for (const file of [emergingInterdisciplinary, environment, healthWellness, lifeSciences, humanities, socialSciences, businessEconomics, lawGovernance, languagesLiterature, x16ExamSkills, { topics: x17ExamSyllabusTopics } as any, { topics: x19CivilCoreTopics } as any, computingAI]) {
  for (const t of file.topics) {
    if (!IDS.includes(t.id)) continue
    const actual = (t.blocks || []).reduce((a, b) => a + blockWords(b), 0)
    const flag = Math.abs(actual - t.words) <= 25 ? 'OK' : '*** FIX ***'
    console.log(`${t.id}: actual=${actual} declared=${t.words} readMins=${t.readMins} ${flag}`)
  }
}
