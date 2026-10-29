import { emergingInterdisciplinary } from '../src/data/knowledge/fields/emerging-interdisciplinary'
import { environment } from '../src/data/knowledge/fields/environment'
import { healthWellness } from '../src/data/knowledge/fields/health-wellness'
import { lifeSciences } from '../src/data/knowledge/fields/life-sciences'
import { humanities } from '../src/data/knowledge/fields/humanities'
import { socialSciences } from '../src/data/knowledge/fields/social-sciences'
import { businessEconomics } from '../src/data/knowledge/fields/business-economics'
import { lawGovernance } from '../src/data/knowledge/fields/law-governance'
import { languagesLiterature } from '../src/data/knowledge/fields/languages-literature'
import { physicalSciences } from '../src/data/knowledge/fields/physical-sciences'
import { x16ExamSkills } from '../src/data/knowledge/fields/x16-exam-skills'
import { x17ExamSyllabusTopics } from '../src/data/knowledge/fields/x17-exam-syllabus'
import { x19CivilCoreTopics } from '../src/data/knowledge/fields/x19-civil-core'
import { x20FoundationsPassTopics } from '../src/data/knowledge/fields/x20-foundations-pass'
import { x21SkillsPassTopics } from '../src/data/knowledge/fields/x21-skills-pass'
import { x25TournamentReasoningCivicsPassTopics } from '../src/data/knowledge/fields/x25-tournament-reasoning-civics-pass'
import { x26BankingManagementPassTopics } from '../src/data/knowledge/fields/x26-banking-management-pass'
import { x27ApCalcChinaPassTopics } from '../src/data/knowledge/fields/x27-ap-calc-china-pass'
import { x36LearningSciencePassTopics } from '../src/data/knowledge/fields/x36-learning-science-pass'
import { x37AlbertaPassTopics } from '../src/data/knowledge/fields/x37-alberta-pass'
import { x45ExamGapPassTopics } from '../src/data/knowledge/fields/x45-exam-gap-pass'
import { x46ThinBooksPassTopics } from '../src/data/knowledge/fields/x46-thin-books-pass'
import { x47BioSplitPassTopics } from '../src/data/knowledge/fields/x47-bio-split-pass'
import { x48AllSubjectsSplitPassTopics } from '../src/data/knowledge/fields/x48-all-subjects-split-pass'
import { x49LanguageDeepeningPassTopics } from '../src/data/knowledge/fields/x49-language-deepening-pass'
import { x51LibraryOrgPassTopics } from '../src/data/knowledge/fields/x51-library-org-pass'
import { x52CrossverifyPassTopics } from '../src/data/knowledge/fields/x52-crossverify-pass'
import { x53CrossverifyPassTopics } from '../src/data/knowledge/fields/x53-crossverify-pass'
import { x54CrossverifyPassTopics } from '../src/data/knowledge/fields/x54-crossverify-pass'
import { x58LibraryOrgDeepeningPassTopics } from '../src/data/knowledge/fields/x58-library-org-pass'
import { x59LibraryOrgBacklogPassTopics } from '../src/data/knowledge/fields/x59-library-org-pass'
import { x60CrossverifyTopics } from '../src/data/knowledge/fields/x60-crossverify-pass'
import { x66CrossverifyTopics } from '../src/data/knowledge/fields/x66-crossverify-pass'
import { x62CrossverifyEvolutionPassTopics } from '../src/data/knowledge/fields/x62-crossverify-pass'
import { x63CengagePassTopics } from '../src/data/knowledge/fields/x63-cengage-pass'
import { x60EnemBrazilPassTopics } from '../src/data/knowledge/fields/x60-enem-brazil-pass'
import { x61LibraryOrgLoopPassTopics } from '../src/data/knowledge/fields/x61-library-org-pass'
import { x64LibraryOrgPassTopics } from '../src/data/knowledge/fields/x64-library-org-pass'
import { x65CrossverifyBotanyPassTopics } from '../src/data/knowledge/fields/x65-crossverify-pass'
import { x67LibraryOrgDeepeningPassTopics } from '../src/data/knowledge/fields/x67-library-org-pass'
import { x68LibraryOrgConvergenceTopics } from '../src/data/knowledge/fields/x68-library-org-convergence'
import { x69LibraryOrgConvergenceTopics } from '../src/data/knowledge/fields/x69-library-org-convergence'
import { x70LibraryOrgPassTopics } from '../src/data/knowledge/fields/x70-library-org-pass'
import { x71CrossverifyGeneticsTopics } from '../src/data/knowledge/fields/x71-crossverify-pass'
import { x72CrossverifyPassTopics } from '../src/data/knowledge/fields/x72-crossverify-pass'
import { x74LibraryOrgConvergencePassTopics } from '../src/data/knowledge/fields/x74-library-org-pass'
import { x76LibraryOrgPassTopics } from '../src/data/knowledge/fields/x76-library-org-pass'
import { x14HeredityBiotechTopics } from '../src/data/knowledge/fields/x14-heredity-biotech'
import { foundationLearning } from '../src/data/knowledge/fields/foundation-learning'
import { mathematics } from '../src/data/knowledge/fields/mathematics'
import { technologyApplied } from '../src/data/knowledge/fields/technology-applied'
import { computingAI } from '../src/data/knowledge/fields/computing-ai'

const IDS = [
  'fnd-spaced-repetition',
  'rel-scripture-canon-interpretation',
  'edu-curriculum-backward-design',
  'res-survey-instrument-design',
  'bio-pedigree-mode-inference',
  'bio-sex-determination-systems',
  'bio-gene-mapping-three-point',
  'bio-inbreeding-mutation-balance',
  'bio-cancer-genetics-oncogenes',
  'bio-beyond-mendel-extensions',
  'bio-crispr-gene-editing',
  'bio-biotechnology-rdna-processes',
  'bio-markers-qtl-mapping',
  'bio-sexual-selection-darwin',
  'bio-darwin-difficulties',
  'bio-biogeography-darwin',
  'bio-classification-common-descent',
  'bio-dev-stem-cells-regeneration',
  'emer-synbio-genetic-circuits',
  'hum-eco-money-bretton-woods',
  'urb-urban-mobility-transit',
  'anth-fieldwork-ethnography',
  'media-algorithmic-feed',
  'bio-chromosome-number-structure',
  'bio-alleles-mullers-morphs',
  'bio-penetrance-expressivity',
  'bio-chromatin-nucleosome-packaging',
  'hist-french-revolution-napoleonic-era',
  'hist-brazil-colonial-slavery-empire',
  'hist-brazil-republic-vargas-dictatorship',
  'lit-brazilian-literature-modernism',
  'env-brazil-biomes-geography',
  'bio-cytoskeleton-cell-motility',
  'bio-cell-cycle-mitosis-checkpoints',
  'dl-bits-koans-digital-world',
  'dl-privacy-footprints-fingerprints',
  'dl-document-metadata-ghosts',
  'dl-web-search-bits-bazaar',
  'dl-copyright-balance-toppled',
  'dl-internet-packets-hourglass',
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
  'econ-foundations-methodology',
  'econ-market-efficiency-surplus',
  'econ-regional-integration',
  'cs-java-objects-classes-methods',
  'cs-java-arrays-and-arraylists',
  'cs-java-boolean-logic-expressions',
  'eng-punctuation-mechanics',
  'eng-paired-passages-authorial-choices',
  'eng-principle-application',
  'sci-experimental-design-hypotheses',
  'sj-situational-judgement',
  'fnd-visual-pattern-rules',
  'psy-stress-coping',
  'psy-psychological-disorders',
  'ecol-populations-communities',
  'bioc-carbohydrates-lipids',
  'bioc-water-ph-buffers',
  'bioc-amino-acids-r-groups',
  'bioc-protein-structure-folding',
  'bioc-enzymes-kinetics-regulation',
  'bioc-lipid-amino-acid-metabolism',
  'hist-koreas-division-han-river-miracle',
  'tech-clinical-lab-diagnostics',
  'mkt-brand-equity-architecture',
  'cook-heat-transfer-methods',
  'law-amendment-entrenchment',
  'eng-process-safety-layers',
  'law-legal-reasoning-facts',
  'eng-literary-narrative-passages',
  'pol-democratic-government-japan',
  'econ-japan-market-national-economy',
  'hist-japan-modern-industrial',
  'chem-ions-aqueous-solution',
  'health-behavior-medical-care',
  'fin-financial-markets-money-capital',
  'geog-india-physical-geography',
  'math-cumulative-frequency-box-plots',
  'math-reading-data-charts',
  'law-legal-history-milestones',
  'comp-office-productivity-software',
  'math-games-tournaments-tactics',
  'math-formulating-real-life-problems',
  'reason-coded-inequalities',
  'civ-india-defence-organisation',
  'bio-adaptations-habitat',
  'econ-indian-banking-financial-system',
  'econ-poverty-inequality-employment-india',
  'bus-management-organisational-behaviour',
  'bus-communication-governance-ethics',
  'eng-business-correspondence',
  'math-measurement-areas-volumes',
  'calc-removing-discontinuities',
  'calc-linearization-differentials',
  'calc-concavity-second-derivative-test',
  'hist-modern-china-aggression-salvation',
  'hist-peoples-republic-china',
  'eng-academic-listening-comprehension',
  'eng-seven-choice-gap-filling',
  'eng-argumentative-practical-texts',
  'math-sets-logic-foundations',
  'geo-regional-development-sustainability',
  'soc-culture-society-cultural-life',
  'bio-animal-tissue-types',
  'neuro-biological-bases-behavior',
  'soc-interpersonal-behavior',
  'math-algebra-notation-manipulation',
  'math-quadratics-completing-square',
  'chem-isotopes-nuclear-notation',
  'math-graphical-linear-programming',
  'chem-chemicals-medicine-food',
  'manuf-welding-joining',
  'eng-spelling-rules-patterns',
  'hist-twentieth-century',
  'res-research-methodology-hypothesis-sampling',
  'edu-teaching-aptitude-learner-evaluation',
  'edu-higher-education-system-india',
  'ict-computers-internet-digital-initiatives',
  'env-people-environment-sustainable-development',
  'com-business-environment-elements',
  'com-demand-consumer-production-theory',
  'com-corporate-finance-decisions',
  'com-international-business-fdi-integration',
  'com-marketing-mix-distribution-trends',
  'pol-western-political-thought-canon',
  'com-auditing-assurance-cycle',
  'com-regulatory-framework-modern-india',
  'pol-indian-foreign-policy-determinants',
  'pol-governance-concepts-data-administration',
  'gp-mass-media-society-responsibility',
  'pol-logic-induction-deduction-square',
  'lang-books-authors-prizes',
  'law-reading-judgments-precedent',
  'lang-classical-chinese-canon',
  'eng-texts-human-experiences',
  'eng-critical-response-literature',
  'bio-population-inheritance-frequencies',
  // CROSSVERIFY 2026-10-27 — genetics book corrections & label realignment
  'bio-genetics-mendel',
  'bio-meiosis-linkage-inheritance',
  'bio-beyond-mendel-extensions',
  'bio-genomics-bioinformatics',
  'bio-population-genetics',
  'bio-biotechnology-rdna-processes',
  'bio-biotechnology-applications',
  'bio-sensory-organ-technologies',
  'fnd-mnemonics-memory-palace',
  'fnd-habits-behavior-design',
  'fnd-metacognition-calibration',
  'fnd-peer-learning-teaching',
  'fnd-reading-scientific-papers',
  'pol-ideologies-individualism-collectivism',
  'pol-liberalism-classical-modern',
  'pol-citizenship-collective-rights',
  'lang-visual-multimedia-texts',
  'acct-computerized-accounting-systems',
  'hist-renaissance-cultural-change',
  'law-pil-public-interest-litigation',
  'cs-method-overriding-dynamic-dispatch',
  'phys-electronics-signals-amplifiers',
  'chem-bronsted-lowry-in-use',
  'lang-hindi-literature-masters',
  'lang-hindi-grammar-workshop',
  'anth-kinship-descent-marriage',
  'media-journalism-craft',
  'lang-french-reading-francophonie',
  'bioc-biochem-toolbox',
  'bio-dev-model-organisms',
  'bio-dev-morphogenesis',
  'bio-marine-plankton-larvae',
  'bio-bioinformatics-databases-structures',
  'bio-synbio-dbtl-practice',
  'bio-synbio-biosafety-ethics',
  'law-international-order-courts',
  'hist-great-divergence',
  'eng-traffic-flow-theory',
  'grow-plant-propagation',
  'eng-structural-analysis-methods',
  'lang-arabic-grammar-morphology',
  'lang-arabic-literature-culture',
  'lang-korean-grammar-workshop',
  'lang-korean-reading-culture',
  'lang-russian-grammar-workshop',
  'lang-russian-literature-golden',
  'eng-naval-ship-structures',
  'eng-naval-design-propulsion',
  'nano-making-seeing',
  'nano-medicine-clean-tech',
  'quantum-qubits-gates',
  'quantum-algorithms-hardware',
  'lang-german-literature',
  'lang-mandarin-grammar',
  'compsci-numerical-methods',
  'study-self-efficacy-mindset',
  'study-time-management',
  'study-stress-wellbeing',
  'study-focused-diffuse-modes',
  'study-procrastination-zombies',
  'fnd-active-recall',
  'fnd-interleaving',
  'study-exam-strategy',
  'fnd-deliberate-practice',
  'fnd-learning-styles-myth',
  'study-note-taking-systems',
  'fnd-habits-behavior-design',
  'psy-behaviourist-learning',
  'psy-memory-multistore-brain',
  'mind-specific-phobia-biopsychosocial',
  'stats-time-series-trend-seasonality',
  'env-measuring-biodiversity',
  'math-earth-geometry',
  'eng-naval-seakeeping-motions',
  'eng-naval-manoeuvring-rudders',
  'nano-confinement-brus',
  'nano-nucleation-growth-assembly',
  'quantum-error-correction-codes',
  'quantum-fault-tolerance-scale',
  'lang-german-adjective-endings',
  'lang-mandarin-writing-strokes',
  'compsci-monte-carlo-mcmc',
  // LIBRARY-ORG 2026-10-28 (X67) — post-merge thin-book deepening (4 kept)
  'media-propaganda-persuasion',
  'eng-bridges-long-span',
  'civ-foundations-geotechnical',
  'grow-pests-diseases-ipm',
  'career-resume-networking-applications',
  'math-sphere-three-dimensions',
  'calc-definite-integral-properties',
  'math-modulus-logarithm-inequalities',
  // LIBRARY-ORG 2026-10-27 (X61) — six-book backlog clearance
  'eng-naval-intact-stability-gz',
  'eng-naval-damage-subdivision',
  'nano-carbon-family',
  'nano-nanoelectronics-scaling',
  'quantum-qkd-bb84',
  'quantum-teleportation-networks',
  'lang-german-word-formation',
  'lang-mandarin-topolects',
  'compsci-hpc-parallel-scaling',
  // LIBRARY-ORG 2026-10-27 (X64) — thin-book deepening rotation
  'bio-cell-fate-determinants',
  'synbio-directed-evolution',
  'urb-heat-island-design',
  'anth-bioarchaeology-bones',
  'media-video-games-interactive',
  // CROSSVERIFY 2026-10-27 (X65) — Botany vs Taiz & Zeiger 6e
  'bio-plant-xylem-hydraulics',
  'bio-plant-phloem-loading-partitioning',
  'bio-plant-stomatal-blue-light',
  'bio-plant-seed-structure-germination',
  // X65 enrichments re-verified
  'bio-photosynthesis',
  'bio-plant-reproduction-flowers-seeds',
  // X68 convergence pass (2026-10-28) — the two uniquely-owned lessons
  'hum-money-credit-financial-revolutions',
  'urb-informal-settlements-self-built-cities',
  'bio-dev-evo-devo',
  'bio-marine-coastal-habitats',
  'emer-bioinformatics-sequencing-assembly',
  'env-nuclear-fission-fusion',
  // LIBRARY-ORG 2026-10-30 (X76) — International Law deepening: new chapter
  'law-states-statehood-territory',
  'law-jurisdiction-immunity',
  // CROSSVERIFY 2026-10-30 (X77) — Zoology vs Hickman 18e (internet-research)
  'bio-animal-behavior-rhythms',
  'ecol-metapopulations-dispersal',
  'ecol-species-richness-gradients',
  'bio-animal-senses-superpowers',
  'bio-animal-behavior-ethology',
]

const wc = (s: string) => s.split(/\s+/).filter(Boolean).length

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

for (const file of [emergingInterdisciplinary, environment, healthWellness, lifeSciences, humanities, socialSciences, businessEconomics, lawGovernance, languagesLiterature, physicalSciences, mathematics, technologyApplied, foundationLearning, x16ExamSkills, { topics: x17ExamSyllabusTopics } as any, { topics: x19CivilCoreTopics } as any, { topics: x20FoundationsPassTopics } as any, { topics: x21SkillsPassTopics } as any, { topics: x25TournamentReasoningCivicsPassTopics } as any, { topics: x26BankingManagementPassTopics } as any, { topics: x27ApCalcChinaPassTopics } as any, { topics: x36LearningSciencePassTopics } as any, { topics: x37AlbertaPassTopics } as any, computingAI, { topics: x45ExamGapPassTopics } as any, { topics: x46ThinBooksPassTopics } as any, { topics: x47BioSplitPassTopics } as any, { topics: x48AllSubjectsSplitPassTopics } as any, { topics: x49LanguageDeepeningPassTopics } as any, { topics: x51LibraryOrgPassTopics } as any, { topics: x52CrossverifyPassTopics } as any, { topics: x53CrossverifyPassTopics } as any, { topics: x54CrossverifyPassTopics } as any, { topics: x58LibraryOrgDeepeningPassTopics } as any, { topics: x59LibraryOrgBacklogPassTopics } as any, { topics: x60EnemBrazilPassTopics } as any, { topics: x61LibraryOrgLoopPassTopics } as any, { topics: x64LibraryOrgPassTopics } as any, { topics: x65CrossverifyBotanyPassTopics } as any, { topics: x67LibraryOrgDeepeningPassTopics } as any, { topics: x68LibraryOrgConvergenceTopics } as any, { topics: x69LibraryOrgConvergenceTopics } as any, { topics: x70LibraryOrgPassTopics } as any, { topics: x71CrossverifyGeneticsTopics } as any, { topics: x72CrossverifyPassTopics } as any, { topics: x74LibraryOrgConvergencePassTopics } as any, { topics: x14HeredityBiotechTopics } as any]) {
  for (const t of file.topics) {
    if (!IDS.includes(t.id)) continue
    const actual = (t.blocks || []).reduce((a, b) => a + blockWords(b), 0)
    const flag = Math.abs(actual - t.words) <= 25 ? 'OK' : '*** FIX ***'
    console.log(`${t.id}: actual=${actual} declared=${t.words} readMins=${t.readMins} ${flag}`)
  }
}
