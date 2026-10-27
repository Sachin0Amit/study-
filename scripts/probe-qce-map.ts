/**
 * Probe: test planned QCE topic names against the real matchers
 * (scoped masters match + knowledge-university fallback) before writing
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
  // mathematics subjects
  { name: 'Bivariate data', subject: 'mathematics', subs: ['scatterplots', 'correlation', 'line of best fit', 'residual analysis'] },
  { name: 'Time series analysis', subject: 'mathematics', subs: ['trend lines', 'smoothing', 'seasonality', 'forecasting'] },
  { name: 'Sequences and change', subject: 'mathematics', subs: ['arithmetic sequences', 'geometric sequences', 'recurrence relations', 'growth and decay'] },
  { name: 'Earth geometry', subject: 'mathematics', subs: ['latitude and longitude', 'time zones', 'distances on the Earth', 'great circles'] },
  { name: 'Loans, investments and annuities', subject: 'mathematics', subs: ['compound interest', 'recurrence relations', 'annuities', 'perpetuities'] },
  { name: 'Graphs and networks', subject: 'mathematics', subs: ['Eulerian trails', 'trees', 'minimum spanning trees', 'Prim and Kruskal'] },
  { name: 'Networks and decision mathematics', subject: 'mathematics', subs: ['shortest paths', 'Dijkstra', 'critical path analysis', 'flow problems'] },
  { name: 'Differentiation of exponential, logarithmic and trigonometric functions', subject: 'mathematics', subs: ['product rule', 'quotient rule', 'chain rule', 'optimisation'] },
  { name: 'Integrals and introduction to integration', subject: 'mathematics', subs: ['antidifferentiation', 'displacement from velocity'] },
  { name: 'Discrete random variables and binomial distributions', subject: 'mathematics', subs: ['probability distributions', 'Bernoulli', 'binomial'] },
  { name: 'Further integration', subject: 'mathematics', subs: ['fundamental theorem of calculus', 'definite integrals', 'area under curves'] },
  { name: 'Trigonometry, sine and cosine rules', subject: 'mathematics', subs: ['ambiguous case', 'bearings', 'angles of elevation and depression'] },
  { name: 'Continuous random variables and the normal distribution', subject: 'mathematics', subs: ['probability density functions', 'normal probabilities', 'quantiles'] },
  { name: 'Sampling and interval estimates for proportions', subject: 'mathematics', subs: ['random sampling', 'sample proportions', 'confidence intervals', 'margin of error'] },
  { name: 'Further complex numbers', subject: 'mathematics', subs: ['polar form', "De Moivre's theorem", 'roots of unity'] },
  { name: 'Mathematical induction and trigonometric proofs', subject: 'mathematics', subs: ['induction', 'proof'] },
  { name: 'Vectors in two and three dimensions', subject: 'mathematics', subs: ['scalar product', 'vector product', 'projections'] },
  { name: 'Vector calculus', subject: 'mathematics', subs: ['position vectors', 'differentiation of vector functions'] },
  { name: 'Further matrices', subject: 'mathematics', subs: ['matrix algebra', 'transformations', 'systems of equations'] },
  { name: 'Integration techniques', subject: 'mathematics', subs: ['integration by substitution', 'partial fractions'] },
  { name: 'Applications of integral calculus', subject: 'mathematics', subs: ['volumes of revolution', 'areas'] },
  { name: 'Rates of change and differential equations', subject: 'mathematics', subs: ['differential equations', 'exponential growth'] },
  { name: 'Modelling motion', subject: 'mathematics', subs: ['projectile motion', 'kinematics'] },
  { name: 'Statistical inference', subject: 'mathematics', subs: ['hypothesis testing', 'sample means', 'confidence intervals'] },
  // sciences
  { name: 'Gravity and motion', subject: 'physics', subs: ['projectile motion', 'uniform circular motion', "Kepler's laws", 'inclined planes'] },
  { name: 'Electromagnetism', subject: 'physics', subs: ['electrostatics', 'magnetic fields', 'electromagnetic induction'] },
  { name: 'Special relativity', subject: 'physics', subs: ['time dilation', 'length contraction', 'mass-energy equivalence'] },
  { name: 'Quantum theory', subject: 'physics', subs: ['blackbody radiation', 'photoelectric effect', 'atomic line spectra', 'de Broglie wavelength'] },
  { name: 'The Standard Model', subject: 'physics', subs: ['fundamental particles', 'particle interactions', 'quarks', 'leptons'] },
  { name: 'Chemical equilibrium systems', subject: 'chemistry', subs: ['dynamic equilibrium', "Le Chatelier's principle", 'equilibrium constant', 'pH', 'buffers', 'volumetric analysis'] },
  { name: 'Oxidation and reduction', subject: 'chemistry', subs: ['redox half-equations', 'galvanic cells', 'standard electrode potentials', 'electrolytic cells'] },
  { name: 'Properties and structure of organic materials', subject: 'chemistry', subs: ['organic nomenclature', 'homologous series', 'reaction pathways', 'spectroscopy'] },
  { name: 'Chemical synthesis and design', subject: 'chemistry', subs: ['green chemistry', 'polymers', 'macromolecules'] },
  { name: 'Biodiversity and populations', subject: 'ku-life-sciences-biology', subs: ["Simpson's diversity index", 'species richness', 'classification', 'limiting factors'] },
  { name: 'Functioning ecosystems and succession', subject: 'ku-life-sciences-biology', subs: ['energy flow', 'trophic levels', 'nutrient cycles', 'carrying capacity', 'succession'] },
  { name: 'DNA, genes and the continuity of life', subject: 'ku-life-sciences-biology', subs: ['DNA replication', 'transcription and translation', 'meiosis', 'Mendelian inheritance', 'biotechnology'] },
  { name: 'Continuity of life on Earth', subject: 'ku-life-sciences-biology', subs: ['natural selection', 'Hardy-Weinberg', 'speciation', 'phylogenetics'] },
  // psychology
  { name: 'Brain function', subject: 'ku-psychology', subs: ['nervous system', 'neurotransmission', 'localisation of function', 'limbic system'] },
  { name: 'Sensation and perception', subject: 'ku-psychology', subs: ['visual perception', 'perceptual set', 'Gestalt principles', 'depth cues'] },
  { name: 'Memory', subject: 'ku-psychology', subs: ['multi-store model', 'working memory', 'levels of processing', 'hippocampus'] },
  { name: 'Learning', subject: 'ku-psychology', subs: ['classical conditioning', 'operant conditioning', 'social learning'] },
  { name: 'Social psychology', subject: 'ku-psychology', subs: ['conformity', 'obedience', 'socialisation'] },
  { name: 'Interpersonal processes', subject: 'ku-psychology', subs: ['bystander intervention', 'prosocial behaviour'] },
  { name: 'Attitudes', subject: 'ku-psychology', subs: ['tri-component model', 'implicit attitudes', 'stereotype priming'] },
  { name: 'Cross-cultural psychology', subject: 'ku-psychology', subs: ['individualism and collectivism', 'cultural norms', 'acculturation'] },
  // english
  { name: 'Connecting and comparing texts', subject: 'english', subs: ['perspectives', 'cultural assumptions', 'values and beliefs', 'analytical response'] },
  { name: 'Creating texts for purposes and audiences', subject: 'english', subs: ['imaginative writing', 'persuasive writing', 'reflective writing'] },
  { name: 'Sustained analysis of literary texts', subject: 'english', subs: ['literary language features', 'perspective', 'style and cohesion', 'analytical essay'] },
  { name: 'Creative response to a literary text', subject: 'english', subs: ['imaginative transformation', 'written statement'] },
]

const catalog = getCatalog()

console.log('topic'.padEnd(58), 'scoped?', 'global-conf', 'ku-score', 'ku-title')
console.log('-'.repeat(150))
for (const p of probes) {
  const within = fuzzyMatchWithinSubject(p.name, p.subject, 0.32, catalog)
  const matchText = p.subs && p.subs.length ? `${p.name} ${p.subs.slice(0, 4).join(' ')}` : p.name
  const global = fuzzyMatchTopic(matchText, catalog)
  const gConf = (global?.confidence ?? 0) >= 0.4 ? global?.confidence : null
  const kn = matchKnowledgeTopic(p.name, p.subs)
  const status =
    (within ? 'Y' : 'n') +
    String(gConf ? gConf.toFixed(2) : '-').padStart(10) +
    String(kn ? kn.score.toFixed(2) : '-').padStart(9) +
    '  ' + (kn ? `${kn.entry.title.slice(0, 52)} [${kn.entry.field}]` : 'UNMAPPED')
  const mapped = within || gConf || kn
  console.log((mapped ? ' ' : '!') + p.name.slice(0, 56).padEnd(58), status)
}
