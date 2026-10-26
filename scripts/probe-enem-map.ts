/**
 * Probe: test planned ENEM topic names against the real matchers
 * (scoped masters match + knowledge-university fallback) before finalising
 * the exam file. Prints best match per name or UNMAPPED.
 */
import { getCatalog, fuzzyMatchWithinSubject, fuzzyMatchTopic } from '../src/lib/syllabus'
import { matchKnowledgeTopic } from '../src/lib/curated-exam-map'

interface Probe {
  name: string
  subject: string
  subs?: string[]
}

const probes: Probe[] = [
  // ---------- Linguagens ----------
  { name: 'Reading interpretation and textual genres', subject: 'english', subs: ['verbal texts', 'non-verbal texts', 'text genres', 'journalistic texts'] },
  { name: 'Language functions and figures of speech', subject: 'english', subs: ['metaphor', 'irony', 'semantics'] },
  { name: 'Linguistic variation and intertextuality', subject: 'english', subs: ['register variation', 'intertextuality'] },
  { name: 'Classical and colonial literature: Trovadorismo, Barroco and Arcadismo', subject: 'english', subs: ['troubadour lyric', 'baroque', 'neoclassicism'] },
  { name: 'Romanticism and Realism in Brazil', subject: 'english', subs: ['romanticism', 'realism', 'Machado de Assis'] },
  { name: 'Modernism and contemporary Brazilian literature', subject: 'english', subs: ['modern art week', 'modernism', 'Clarice Lispector'] },
  { name: 'Art movements and the Brazilian arts', subject: 'arts', subs: ['art movements from the renaissance to modernism', 'brazilian art', 'popular music', 'culture industry'] },
  { name: 'Sport as social practice and health', subject: 'physical education', subs: ['sport as social phenomenon', 'physical activity', 'body culture'] },
  { name: 'Digital media and the information society', subject: 'computer literacy', subs: ['digital media', 'networks', 'media literacy', 'misinformation'] },
  { name: 'Foreign language reading: English or Spanish', subject: 'english', subs: ['reading comprehension', 'cognates', 'inference'] },
  { name: 'Dissertative-argumentative essay', subject: 'english', subs: ['thesis', 'argumentation', 'intervention proposal'] },
  // ---------- Ciências Humanas ----------
  { name: 'Colonial Brazil: sugar, slavery and the gold cycle', subject: 'history', subs: ['captaincies', 'sugar plantations', 'slave trade', 'quilombos', 'gold rush'] },
  { name: 'Empire and the formation of the Brazilian state', subject: 'history', subs: ['independence 1822', 'abolition', 'coffee', 'fall of the monarchy'] },
  { name: 'Old Republic and the Era Vargas', subject: 'history', subs: ['cafe com leite', 'coronelismo', 'tenentismo', 'Estado Novo'] },
  { name: 'Democracy, dictatorship and redemocratization', subject: 'history', subs: ['military regime', 'institutional acts', 'censorship', '1988 constitution'] },
  { name: 'Ancient Greece and Rome', subject: 'history', subs: ['athenian democracy', 'roman republic', 'roman empire'] },
  { name: 'Medieval and early modern Europe', subject: 'history', subs: ['feudalism', 'absolutism', 'protestant reformation', 'maritime expansion'] },
  { name: 'Revolutions: Enlightenment, French and Industrial', subject: 'history', subs: ['enlightenment', 'french revolution', 'estates', 'napoleon', 'industrial revolution'] },
  { name: 'The twentieth century: wars, ideologies and the Cold War', subject: 'history', subs: ['world war i', 'russian revolution', 'fascism', 'nazism', 'cold war', 'decolonization'] },
  { name: 'Latin America after independence', subject: 'history', subs: ['bolivar', 'san martin', 'caudillismo', 'spanish american independence'] },
  { name: 'Cartography and physical geography', subject: 'geography', subs: ['maps', 'projections', 'climate zones', 'relief'] },
  { name: 'Brazilian biomes and environmental questions', subject: 'geography', subs: ['amazon', 'cerrado', 'deforestation', 'watersheds', 'energy sources'] },
  { name: 'Human geography and the global economy', subject: 'geography', subs: ['urbanization', 'migration', 'globalization', 'trade blocs', 'rise of china'] },
  { name: 'Classical and medieval philosophy', subject: 'philosophy', subs: ['socrates', 'plato', 'aristotle', 'medieval philosophy'] },
  { name: 'Modern philosophy', subject: 'philosophy', subs: ['descartes', 'bacon', 'kant', 'enlightenment'] },
  { name: 'Contemporary philosophy and ethics', subject: 'philosophy', subs: ['existentialism', 'applied ethics', 'alienation'] },
  { name: 'Classical sociology', subject: 'sociology', subs: ['comte', 'positivism', 'marx', 'durkheim', 'weber'] },
  { name: 'Culture, society and social movements', subject: 'sociology', subs: ['culture', 'heritage', 'social movements', 'work'] },
  { name: 'Digital networks, media and inequality', subject: 'sociology', subs: ['digital networks', 'media and social life', 'inequality', 'identity'] },
  // ---------- Ciências da Natureza ----------
  { name: 'Cell biology and the chemistry of life', subject: 'biology', subs: ['prokaryotic cells', 'eukaryotic cells', 'organelles', 'membranes', 'stem cells'] },
  { name: 'Human physiology and health', subject: 'biology', subs: ['digestive system', 'respiratory system', 'nervous system', 'immunology', 'vaccines'] },
  { name: 'Genetics and molecular biology', subject: 'biology', subs: ["mendel's laws", 'blood groups', 'dna', 'protein synthesis', 'biotechnology'] },
  { name: 'Ecology and evolution', subject: 'biology', subs: ['ecosystems', 'biogeochemical cycles', 'natural selection', 'pollution', 'conservation'] },
  { name: 'Matter, atoms and bonding', subject: 'chemistry', subs: ['atomic models', 'periodic table', 'chemical bonds', 'intermolecular forces'] },
  { name: 'Reactions and calculations', subject: 'chemistry', subs: ['stoichiometry', 'solutions', 'kinetics', 'chemical equilibrium'] },
  { name: 'Thermochemistry, electrochemistry and organic chemistry', subject: 'chemistry', subs: ['enthalpy', 'redox', 'electrolysis', 'organic functions', 'environmental chemistry'] },
  { name: 'Mechanics', subject: 'physics', subs: ['kinematics', "newton's laws", 'work and energy', 'hydrostatics'] },
  { name: 'Thermal physics and waves', subject: 'physics', subs: ['heat', 'thermodynamics', 'waves', 'sound', 'optics', 'lenses'] },
  { name: 'Electricity, magnetism and modern physics', subject: 'physics', subs: ['electrostatics', 'circuits', "ohm's law", 'magnetic force', 'induction', 'relativity'] },
  // ---------- Matemática ----------
  { name: 'Ratios, percentages and proportional reasoning', subject: 'mathematics', subs: ['percentage', 'rule of three', 'simple interest', 'compound interest'] },
  { name: 'Functions and equations', subject: 'mathematics', subs: ['linear functions', 'quadratic equations', 'exponential functions', 'inequalities'] },
  { name: 'Sequences and patterns', subject: 'mathematics', subs: ['arithmetic progression', 'geometric progression', 'lcm', 'gcd'] },
  { name: 'Plane geometry', subject: 'mathematics', subs: ['triangles', 'circles', 'cartesian plane', 'trigonometric ratios'] },
  { name: 'Solid geometry and measurement', subject: 'mathematics', subs: ['areas', 'volumes', 'cones', 'cylinders', 'unit conversion'] },
  { name: 'Statistics and data interpretation', subject: 'mathematics', subs: ['graphs', 'tables', 'mean', 'median', 'mode'] },
  { name: 'Probability and combinatorics', subject: 'mathematics', subs: ['counting principles', 'permutations', 'combinations', 'probability'] },
]

const catalog = getCatalog()

console.log('topic'.padEnd(62), 'sc', 'global', 'ku    ', 'target')
console.log('-'.repeat(150))
let unmapped = 0
for (const p of probes) {
  const within = fuzzyMatchWithinSubject(p.name, p.subject, 0.32, catalog)
  const matchText = p.subs && p.subs.length ? `${p.name} ${p.subs.slice(0, 4).join(' ')}` : p.name
  const global = fuzzyMatchTopic(matchText, catalog)
  const gConf = (global?.confidence ?? 0) >= 0.4 ? global?.confidence : null
  const kn = matchKnowledgeTopic(p.name, p.subs)
  const target = within ? `${within.subjectId}/${within.chapterTitle}` : global ? `${global.subjectId}/${global.chapterTitle}` : kn ? `ku:${kn.entry.field}` : 'UNMAPPED'
  const conf = (within?.confidence ?? gConf ?? kn ? Math.max(within?.confidence ?? 0, gConf ?? 0, kn ? 0.5 : 0) : 0)
  if (!within && !gConf && !kn) unmapped++
  console.log((within || gConf || kn ? ' ' : '!') + p.name.slice(0, 60).padEnd(62), within ? 'Y' : 'n', String(gConf ? gConf.toFixed(2) : '-').padStart(6), String(kn ? kn.score.toFixed(2) : '-').padStart(6), `${conf.toFixed(2)} ${target.slice(0, 70)}`)
}
console.log(`\n${probes.length} probed, ${unmapped} unmapped`)
