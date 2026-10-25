/**
 * Curated exam-topic → Knowledge-University lesson aliases.
 *
 * The generic topic matcher (matchKnowledgeTopic) requires ≥2 token hits
 * between the exam topic name and the lesson's title/concepts/field. That
 * is deliberately conservative — it produces near-zero false positives —
 * but it also misses exam phrasings whose vocabulary differs from library
 * lesson titles even though the lesson fully covers the topic (audited
 * by scripts/exam-coverage-audit.ts; every entry below was verified
 * against the target lesson's actual concepts and blocks).
 *
 * Keys are NORMALIZED topic names (lowercase, non-alphanumerics → single
 * spaces, trimmed) exactly as matchKnowledgeTopic normalizes them, so
 * 'Biotechnology: Principles and Processes' → 'biotechnology principles
 * and processes'. Values are Knowledge-University topic ids. An entry is
 * silently skipped if its target id is missing from the index, so a
 * stale alias can never crash the map builder.
 *
 * RULE: only map a topic name when the target lesson genuinely teaches
 * that topic. When coverage is partial, leave the topic unmapped and add
 * it to the content-pass backlog instead.
 */

export function normalizeTopicName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

export const TOPIC_ALIASES: Record<string, string> = {
  /* ---- Biology: matcher misses on existing lessons (verified 2026-10-20) ---- */
  // NEET / CUET / BITSAT physiology phrasings → anatomy & physiology lessons
  'neural control and coordination': 'bio-anatomy-nervous-system-command',
  'nervous coordination': 'bio-anatomy-nervous-system-command',
  'locomotion and movement': 'bio-anatomy-musculoskeletal',
  'skeletal muscle': 'bio-anatomy-musculoskeletal',
  'movement and coordination': 'bio-anatomy-musculoskeletal',
  'chemical coordination and integration': 'bio-anatomy-kidneys-endocrine',
  'homeostasis': 'bio-anatomy-kidneys-endocrine',
  'excretory products and their elimination': 'bio-anatomy-kidneys-endocrine',
  'excretory products and elimination': 'bio-anatomy-kidneys-endocrine',
  'immune renal endocrine and reproductive systems':
    'bio-anatomy-kidneys-endocrine',
  'structural organisation in animals': 'bio-zoology-body-plans',
  'stimuli and responses': 'bio-anatomy-senses-perception',
  'surface area to volume and gas exchange': 'bio-anatomy-respiration',
  'circulation and excretion': 'bio-anatomy-heart-circulation',
  'circulatory respiratory and digestive systems':
    'bio-anatomy-heart-circulation',
  // A-Level / AP evolution & diversity phrasings → evolution/classification lessons
  'species and taxonomy': 'bio-classification-five-kingdoms',
  'genetic diversity and adaptation': 'bio-evolution-natural-selection',
  'populations and evolution': 'bio-evolution-natural-selection',
  'speciation and extinction': 'bio-speciation-barriers',
  'speciation and phylogeny': 'bio-speciation-barriers',
  'mendelian genetics': 'bio-genetics-mendel',
  'subcellular components': 'bio-cell-biomolecules',
  'lipid and nitrogen metabolism': 'bioc-lipid-amino-acid-metabolism',

  /* ---- Biology: X14 molecular-genetics engine (2026-10-20 lessons) ---- */
  'molecular basis of inheritance': 'bio-dna-structure-replication',
  'nucleic acids': 'bio-dna-structure-replication',
  'dna genes and chromosomes': 'bio-dna-structure-replication',
  'dna and rna structure and replication': 'bio-dna-structure-replication',
  'transcription and rna processing': 'bio-transcription-rna-processing',
  'translation': 'bio-translation-genetic-code',
  'mutations and biotechnology': 'bio-mutations-dna-repair',
  'regulation of gene expression and cell specialization':
    'bio-gene-regulation-epigenetics',
  'gene expression and epigenetics': 'bio-gene-regulation-epigenetics',
  'signal transduction': 'bio-cell-signaling-transduction',
  'meiosis': 'bio-meiosis-linkage-inheritance',
  'all cells arise from other cells': 'bio-meiosis-linkage-inheritance',
  'non mendelian genetics': 'bio-beyond-mendel-extensions',
  'environmental effects on phenotype': 'bio-beyond-mendel-extensions',
  'transmission genetics': 'bio-beyond-mendel-extensions',
  'biotechnology principles and processes': 'bio-biotechnology-rdna-processes',
  'biotechnology and its applications': 'bio-biotechnology-applications',
  'biotechnology': 'bio-biotechnology-rdna-processes',
  'recombinant dna technology': 'bio-biotechnology-rdna-processes',
  'microbial technology': 'bio-biotechnology-applications',
  'microbes in human welfare': 'bio-biotechnology-applications',
  // VITEEE mega-topic phrasing (was fuzzy-matched to the old one-volume
  // Biology book's Genetics chapter pre-split; the biology discipline split
  // fragmented that subject-level token coverage). The applications lesson
  // owns the welfare/biotechnology core of the topic.
  'biology and human welfare biotechnology ecology': 'bio-biotechnology-applications',
  'gene technologies': 'bio-biotechnology-rdna-processes',
  'using genome projects': 'bio-genomics-bioinformatics',

  /* ---- X15 accountancy + business-law cluster (2026-10-20 lessons) ---- */
  'depreciation and provisions': 'acct-depreciation-provisions',
  'bank reconciliation': 'acct-bank-reconciliation',
  'partnership accounts basics': 'acct-partnership-fundamentals',
  'admission of a partner': 'acct-partnership-changes',
  'retirement and death of a partner': 'acct-partnership-changes',
  'dissolution of partnership': 'acct-partnership-changes',
  'issue of shares': 'acct-shares-issue-forfeiture',
  'issue of shares and debentures': 'acct-shares-issue-forfeiture',
  'shares and debentures overview': 'acct-shares-issue-forfeiture',
  'forfeiture basics': 'acct-shares-issue-forfeiture',
  'issue of debentures': 'acct-debentures',
  'bills of exchange': 'acct-special-transactions',
  'consignment': 'acct-special-transactions',
  'sale on approval': 'acct-special-transactions',
  'recording of transactions': 'acct-double-entry',
  'receipts and payments': 'acct-financial-statements',
  'consideration': 'law-indian-contract-act',
  'capacity': 'law-indian-contract-act',
  'legality': 'law-indian-contract-act',
  'conditions and warranties': 'law-sale-of-goods',
  'unpaid seller': 'law-sale-of-goods',
  'registration': 'law-partnership-act',
  'dissolution': 'law-partnership-act',
  'llp nature and incorporation': 'law-llp-act',
  'llp versus partnership and company': 'law-llp-act',
  'incorporation basics': 'law-companies-act',
  'key regulators': 'law-companies-act',
  'micro vs macro': 'bus-cost-concepts',
  'cost concepts': 'bus-cost-concepts',
  'producer behaviour and supply': 'bus-cost-concepts',
  'meaning and phases of business cycles': 'bus-business-cycles',
  'causes and impact of business cycles': 'bus-business-cycles',
  'taxation basics': 'bus-taxation-basics',

  /* ---- X16 exam language & reasoning skills engine (2026-10-21 lessons) ----
     Targets the weakest audit clusters: IELTS 47%, TOEFL 53%, UCAT 58%,
     LSAT 59%, CLAT 76%, GRE 85%. Every mapping verified against the
     target lesson's actual concepts and blocks. */
  // IELTS / GRE / TOEFL writing → argument-essay lesson
  'argument essays': 'eng-argument-essay-writing',
  'argument construction': 'eng-argument-essay-writing',
  'essay structure': 'eng-argument-essay-writing',
  'discussion post response': 'eng-argument-essay-writing',
  // IELTS writing band descriptors → cohesion & lexical lesson
  'coherence and cohesion': 'eng-cohesion-lexical-accuracy',
  'lexical resource': 'eng-cohesion-lexical-accuracy',
  'grammatical range and accuracy': 'eng-cohesion-lexical-accuracy',
  // IELTS / TOEFL / ACT reading strategy → skimming & scanning lesson
  'skimming and scanning': 'eng-skimming-scanning-timed-reading',
  'factual and negative factual information': 'eng-skimming-scanning-timed-reading',
  'summary and fill in a table': 'eng-skimming-scanning-timed-reading',
  'main idea and theme': 'eng-skimming-scanning-timed-reading',
  // UCAT verbal reasoning / CLAT / LSAT passage judgements → T/F/Can't-tell lesson
  'true false can t tell from passages': 'eng-verbal-reasoning-passage-claims',
  'author s opinion vs fact': 'eng-verbal-reasoning-passage-claims',
  'drawing conclusions': 'eng-verbal-reasoning-passage-claims',
  'tone and attitude': 'eng-verbal-reasoning-passage-claims',
  'author attitude': 'eng-verbal-reasoning-passage-claims',
  // IELTS / TOEFL speaking → long-turn lesson
  'part 2 long turn': 'eng-speaking-fluency-long-turn',
  'fluency coherence and pronunciation': 'eng-speaking-fluency-long-turn',
  'personal preference task': 'eng-speaking-fluency-long-turn',
  'campus situation summary': 'eng-speaking-fluency-long-turn',
  'academic course summary': 'eng-speaking-fluency-long-turn',
  // LSAT / CLAT / UCAT argument phrasings → existing critical-reasoning lesson
  'identifying conclusions': 'eng-critical-reasoning-arguments',
  'premises': 'eng-critical-reasoning-arguments',
  'assumptions': 'eng-critical-reasoning-arguments',
  'strength and weakness of arguments': 'eng-critical-reasoning-arguments',
  'strongest argument selection': 'eng-critical-reasoning-arguments',
  // UCAT decision-making probability phrasings → existing probability lesson
  'interpreting probabilities': 'every-probability-everyday-decisions',
  'expected outcomes': 'every-probability-everyday-decisions',

  /* ---- X17 pass (2026-10-21): CUET cluster + cross-exam matcher misses.
   * Every mapping verified against the target lesson's concepts/blocks. ---- */
  // CUET History → X13 trilogy (each theme is a named concept + section there)
  'early states and economies': 'hist-ancient-india',
  'revolt of 1857 and its representations': 'hist-modern-india-freedom-struggle',
  'mahatma gandhi and the nationalist movement': 'hist-modern-india-freedom-struggle',
  // CUET Political Science → constitution & institutions lesson
  'framing of the constitution': 'soc-indian-constitution-polity',
  'executive legislature and judiciary': 'soc-indian-constitution-polity',
  // CUET Economics → macro lesson (each is a named concept + full section)
  'determination of income and employment': 'econ-macro-ad-as-indian-economy',
  'development policies and experience 1947 1990': 'econ-macro-ad-as-indian-economy',
  'economic reforms since 1991': 'econ-macro-ad-as-indian-economy',
  'current challenges facing the indian economy': 'econ-macro-ad-as-indian-economy',
  // CUET English + BITSAT proficiency: para-jumble skills → cohesion lesson
  'rearranging jumbled parts': 'eng-cohesion-lexical-accuracy',
  'rearrangement': 'eng-cohesion-lexical-accuracy',
  'referents and reorganization': 'eng-cohesion-lexical-accuracy',
  // UPSC GS phrasings → X13 trilogy + polity lesson
  'freedom struggle and its leaders': 'hist-modern-india-freedom-struggle',
  'parliament and judiciary': 'soc-indian-constitution-polity',
  // MCAT psych-soc foundations → senses lesson (sensation vs perception is its
  // opening concept)
  'sensation': 'bio-anatomy-senses-perception',
  'perception': 'bio-anatomy-senses-perception',
  // GMAT verbal phrasing → critical-reasoning lesson (assumption/strengthen-
  // weaken are its core concepts)
  'evaluation and assumptions': 'eng-critical-reasoning-arguments',

  /* ---- X18 pass (2026-10-21): world-history turnings + development agenda.
   * Every mapping verified against the target lesson's concepts/blocks;
   * targets X17 left honestly unmapped. ---- */
  // CUET world history → nomadic empires / settler displacement / modernisation
  'nomadic empires': 'hist-nomads-indigenous-modernisation',
  'displacing indigenous peoples': 'hist-nomads-indigenous-modernisation',
  'paths to modernisation': 'hist-nomads-indigenous-modernisation',
  // CUET development chapter → comparative-development lesson
  'development experience of india s neighbours':
    'econ-india-development-challenges',
  // IB Economics: development evaluation → the comparative scorecards lesson
  // (HDI mechanics, indicator limits, India/China/Pakistan/Sri Lanka data are
  // its core concepts); macro-fluctuation phrasing → the AD-AS lesson
  // (equilibrium shifts, output gaps, booms and slumps are named concepts).
  'evaluating economic development': 'econ-india-development-challenges',
  'variations in economic activity': 'econ-macro-ad-as-indian-economy',

  /* ---- X20 pass (2026-10-22): foundations gap — economics methodology/
   * welfare/integration + intro Java. New-lesson mappings point at the
   * x20-foundations-pass topics; the first three econ mappings target
   * pre-existing lessons verified to teach those units fully:
   * bus-supply-demand-elasticity owns demand/supply/equilibrium/price
   * signals and every elasticity measure (market mechanism; the elasticity
   * half of the IB competitive-markets unit), econ-market-failures owns
   * externalities, public goods, monopoly power, information gaps and the
   * corrective instruments (market failure and government intervention). ---- */
  // A-Level Economics methodology unit + IB foundations unit
  'economic methodology and the economic problem': 'econ-foundations-methodology',
  'how do economists approach the world': 'econ-foundations-methodology',
  // A-Level market mechanism → the price-theory lesson
  'market mechanism': 'bus-supply-demand-elasticity',
  // A-Level market failure unit → the market-failures lesson
  'market failure and government intervention': 'econ-market-failures',
  // IB competitive-markets unit → the surplus/efficiency lesson (which owns
  // the welfare/efficiency half and applies elasticity to incidence)
  'competitive markets elasticity and efficiency': 'econ-market-efficiency-surplus',
  // IB trade unit → the regional-integration lesson (blocs, creation/diversion;
  // protection instruments live in bus-trade-policy-tariffs)
  'trade protection and regional integration': 'econ-regional-integration',
  // AP CSA Java units
  'creating and storing objects': 'cs-java-objects-classes-methods',
  'accessor and mutator methods': 'cs-java-objects-classes-methods',
  'subclass constructors and super references': 'cs-java-objects-classes-methods',
  'traversing arraylists': 'cs-java-arrays-and-arraylists',
  'traversing 2d arrays': 'cs-java-arrays-and-arraylists',
  'equivalent boolean expressions': 'cs-java-boolean-logic-expressions',

  /* ---- X21 pass (2026-10-22): verbal, judgement & inquiry skills.
   * New-lesson mappings point at x21-skills-pass topics; single-token exam
   * topics ('punctuation', 'teamwork') can never pass the two-token matcher,
   * so aliases are the only route. Verified against each lesson's concepts. ---- */
  // ACT English punctuation unit
  'punctuation': 'eng-punctuation-mechanics',
  // ACT Reading + LSAT RC paired-passage units
  'comparing perspectives': 'eng-paired-passages-authorial-choices',
  'authorial choices': 'eng-paired-passages-authorial-choices',
  'two-passage relationship questions': 'eng-paired-passages-authorial-choices',
  'analyzing each passage in the pair': 'eng-paired-passages-authorial-choices',
  // LSAT Logical Reasoning principle unit
  'principle application': 'eng-principle-application',
  // ACT Science + AP Statistics design units (same normalized name)
  'experimental design': 'sci-experimental-design-hypotheses',
  'hypotheses and theories': 'sci-experimental-design-hypotheses',
  // UCAT SJT ethics units
  'integrity': 'sj-situational-judgement',
  'perspective taking': 'sj-situational-judgement',
  'teamwork': 'sj-situational-judgement',
  // UCAT abstract reasoning + BITSAT logical reasoning figural units
  'shape attributes': 'fnd-visual-pattern-rules',
  'pattern perception and figure formation': 'fnd-visual-pattern-rules',
  'rule detection': 'fnd-visual-pattern-rules',

  /* ---- X22 pass (2026-10-22): exam-gap closures on new + existing lessons.
   * Every mapping verified against the target lesson's actual concepts and
   * blocks; borderline auto-matches (< 0.6 name score) get belt-and-braces
   * aliases. ---- */
  // CLAT legal-reasoning unit → the legal-method lesson (auto-match scores
  // 0.5, below the comfortable band; the alias is exact-coverage).
  'applying given legal principles to fact situations': 'law-legal-reasoning-facts',
  // CUET English literary-reading unit → the narrative-reading lesson
  // (auto-match scores 0.5; the lesson is built for this unit).
  'literary and narrative passages': 'eng-literary-narrative-passages',
  // SSC reasoning "Critical Thinking" → the critical-reasoning lesson
  // (conclusions, assumptions, strengthen/weaken are its named concepts).
  'critical thinking': 'eng-critical-reasoning-arguments',
  // MCAT CARS relationships unit → the paired-passages lesson (relationship
  // classes: agree/qualify/oppose/extend are its named concepts).
  'relationships among ideas': 'eng-paired-passages-authorial-choices',
  // MCAT CARS application unit → the applying-principles lesson
  // (justify-the-action and conform-to application are its named concepts).
  'application and extrapolation': 'eng-principle-application',

  /* ---- X23 pass (2026-10-22): Japan cluster + single-topic closures.
   *  New-lesson mappings point at x23-japan-gap-pass topics; existing-lesson
   *  mappings were verified against each target's actual concepts/blocks. ---- */
  // EJU "Japan and the World" civics units → the Japan government & society
  // lesson (parliamentary cabinet system, Diet asymmetry, courts, environment/
  // labour/information-society policy are its named concepts and sections).
  'democratic government and japan s system of government':
    'pol-democratic-government-japan',
  'contemporary society environment law labour and information':
    'pol-democratic-government-japan',
  // EJU politics-economics units → the Japan economy lesson (economic agents,
  // main banks/keiretsu, national accounts, BOJ, consumption tax, debt).
  'the market economy and economic agents': 'econ-japan-market-national-economy',
  'the national economy finance and public finance':
    'econ-japan-market-national-economy',
  // EJU history unit → the Japan economic-history lesson (Edo commerce to the
  // international economy is literally its title and section arc).
  'japan s economic history industries and the international economy':
    'hist-japan-modern-industrial',
  // A-Level chemistry ion reactions + BITSAT volumetric analysis → the
  // aqueous-ion-chemistry lesson (both units are its named sections).
  'reactions of ions in aqueous solution': 'chem-ions-aqueous-solution',
  'volumetric analysis': 'chem-ions-aqueous-solution',
  // MCAT psych-soc health-behavior unit → the health-behavior lesson
  // (HBM constructs, stages of change, adherence are its named concepts).
  'health behavior and medical care': 'health-behavior-medical-care',
  // IBPS banking-awareness unit → the financial-markets lesson (money vs
  // capital markets, primary/secondary, instruments are its named concepts).
  'financial markets': 'fin-financial-markets-money-capital',
  // EJU history units already owned by existing lessons:
  'the two world wars and their impact': 'hist-world-wars',
  'modernization and its impact': 'hum-industrial-revolution',
  'thinking geographically about the modern world': 'geog-population-migration',
  // CUET world-history unit → the Greece-and-Rome lesson ("An empire of law,
  // roads and citizenship" is its named concept — the three-continents empire).
  'an empire across three continents': 'hist-classical-greco-roman',
  // GCE H2 Biology infectious-diseases unit → the immune-system lesson
  // (innate/adaptive defense and vaccination are its named concepts).
  'infectious diseases and immunity': 'bio-immune-system',
  // A-Level biodiversity unit → the conservation lesson ("Biodiversity from
  // genes to ecosystems" covers community-level diversity).
  'biodiversity within a community': 'env-biodiversity-loss',
  // UPSC GS demographics unit → the demographic-transition lesson (crude
  // rates, dependency ratio, population momentum are its named concepts).
  'demographics and social sector': 'geog-demographic-transition',
  // CLAT English sentence-correction unit → the cohesion/lexical-accuracy
  // lesson (grammatical accuracy and the editing pass are its named concepts).
  'sentence correction within passages': 'eng-cohesion-lexical-accuracy',

  /* ---- X24 gap-closing pass (2026-10-22): post-X23 re-audit leftovers.
   *  New-lesson mappings point at x24-gap-closing-pass topics; existing-lesson
   *  mappings verified against each target's actual concepts. ---- */
  // CDS + UPSC GS physical-geography unit → the India physical-frame lesson
  // (physiography, drainage, monsoon, vegetation and soils are its sections).
  'physical geography of india and the world': 'geog-india-physical-geography',
  // GCSE statistics descriptor → the quartiles/ogives/box-plots lesson
  // (five-number summary, IQR fences and the ogive are its named concepts).
  'cumulative frequency and box plots': 'math-cumulative-frequency-box-plots',
  // CAT + SSC-CGL DI units → the chart-reading lesson (bar/line/pie families,
  // percentage-change and share arithmetic are its named concepts).
  'bar and line graphs': 'math-reading-data-charts',
  'bar diagrams and pie charts': 'math-reading-data-charts',
  // GMAT integrated-reasoning unit → the chart-reading lesson's multi-source
  // section (unit conversion + deriving quantities across tables and charts).
  'multi source reasoning': 'math-reading-data-charts',
  // CLAT current-affairs history unit → the legal-history milestones lesson
  // (Hammurabi → Magna Carta → codification → Indian legal arc are its sections).
  'legal history milestones': 'law-legal-history-milestones',
  // IBPS computer-aptitude office unit → the office-productivity lesson
  // (word processor, spreadsheet references, mail merge, formats are its sections).
  'ms office': 'comp-office-productivity-software',
  // BITSAT ecology unit → the habitat-adaptations lesson (abiotic factors,
  // regulate/conform/migrate, dormancy and endemism are its named concepts).
  'adaptations and biodiversity': 'bio-adaptations-habitat',
  // BITSAT biology "Crop Improvement" → the existing crop-science lesson
  // (breeding by selection, hybrid vigor, GM crops are its named concepts).
  'crop improvement': 'env-crop-science-breeding',
  // CUET polity "Election and Representation" → the constitution lesson's
  // "Elections and constitutional bodies" concept (ECI, FPTP, universal franchise).
  'election and representation': 'soc-indian-constitution-polity',
  // UCAT SJT scoring unit → the situational-judgement lesson ("Rating scales:
  // appropriateness versus effectiveness" and the accountability framework).
  'band based scoring': 'sj-situational-judgement',
  // MCAT psych-soc memory unit → the cognitive-psychology lesson (memory
  // stores, encoding failure and schema-driven distortion are its concepts).
  'forgetting and distortion': 'psy-cognitive-architecture',
  // IB biology water-relations unit → the kidneys/endocrine lesson
  // (osmoregulation by ADH and negative feedback are its named concepts).
  'water potential osmosis and homeostasis': 'bio-anatomy-kidneys-endocrine',
  // EJU biology homeostasis unit → the kidneys/endocrine lesson (homeostasis
  // via negative feedback and hormonal messengers; the nervous half lives in
  // bio-anatomy-nervous-system-command, the immune half in bio-immune-system).
  'homeostasis nervous hormonal and immune systems': 'bio-anatomy-kidneys-endocrine',
  // GCE H2 biology control unit → the nervous-system lesson (nerve signaling
  // and reflex control; the hormonal half lives in bio-anatomy-kidneys-endocrine).
  'nervous and hormonal control': 'bio-anatomy-nervous-system-command',

  /* ---- X25 pass (2026-10-23): single-token topics the token matcher
     cannot connect (≥2 token hits required); each verified against the
     target lesson's actual concepts ---- */
  // BITSAT maths "Formulation" (single token) → the word-problem
  // formulation lesson (variable naming, translation vocabulary, the
  // five-step strategy are its named concepts).
  'formulation': 'math-formulating-real-life-problems',
  // Reasoning "Inequality" (single token) → the coded-inequalities lesson
  // (decode maps, chains, breaking points, either-or pairs are its concepts).
  'inequality': 'reason-coded-inequalities',
  // CDS general-knowledge unit → the defence-organisation lesson (five MoD
  // departments, CDS/DMA/IDS, service commands are its named concepts).
  'indian armed forces and defence organisation': 'civ-india-defence-organisation',
  // LSAT logical-reasoning question types → the critical-reasoning lesson
  // ("Strengthen and weaken: the evidence gap" is a named concept; the
  // weaken/strengthen families are taught as its core method).
  'weakening arguments': 'eng-critical-reasoning-arguments',
  'strengthening arguments': 'eng-critical-reasoning-arguments',
  // Gaokao biology regulation unit → the kidneys/endocrine lesson (internal
  // environment, nervous-hormonal regulation and immunity are its concepts —
  // the same coverage verified for the EJU phrasing above).
  'homeostasis and regulation': 'bio-anatomy-kidneys-endocrine',
  // X26 pass (2026-10-23) singles, verified against target lessons' concepts:
  // EJU maths 'Figures and measurements' → the mensuration lesson (perimeter,
  // area, volume, unit conversion are its concepts; the topic name is EJU's
  // phrasing for applied measurement).
  'figures and measurements': 'math-measurement-areas-volumes',
  // GATE-EE 'Compensation' (control systems) → the feedback-control lesson
  // (P/I/D action, tuning, stability — controller design IS compensation in
  // the control-systems sense; verified against its named concepts).
  'compensation': 'eng-feedback-control-pid-tuning',
  // IBPS-PO 'Fill in the Blanks' and GRE 'Multi-Blank Completions' → the
  // cohesion/lexical-resource lesson (collocation, paraphrase, referencing
  // and grammatical range are exactly the skills these blank-filling formats
  // test; verified against its named concepts).
  'fill in the blanks': 'eng-cohesion-lexical-accuracy',
  'multi blank completions': 'eng-cohesion-lexical-accuracy',
  // X27 pass (2026-10-24): AP-Calculus AB/BC shared unit topics → the three
  // new calculus lessons (each teaches exactly the syllabus subtopics:
  // removable/jump/infinite taxonomy + redefinition repair; tangent-line
  // approximation + differentials + error; concavity + inflection + the
  // Second Derivative Test with its inconclusive case).
  'removing discontinuities': 'calc-removing-discontinuities',
  'linearization and local linearity': 'calc-linearization-differentials',
  'concavity and the second derivative test':
    'calc-concavity-second-derivative-test',
  // Gaokao modern-China history block → the two new world-history lessons
  // (1840–1949 aggression→salvation chain; PRC 1949 consolidation, Leap,
  // Cultural Revolution and reform arc).
  'aggression and national salvation 1840 1949':
    'hist-modern-china-aggression-salvation',
  'the peoples republic since 1949': 'hist-peoples-republic-china',
  // X28 pass (2026-10-24): language-skills and foundations sweep → six new
  // lessons. Listening topic family: the listening lesson teaches the
  // five-stage process, gist/detail/inference, attitude & organization
  // tracking AND answer transcription (spelling, plurals, word limits), so
  // one lesson honestly covers three syllabus phrasings across exams.
  'listening': 'eng-academic-listening-comprehension',
  'spelling and grammar in answers': 'eng-academic-listening-comprehension',
  'attitude and organization': 'eng-academic-listening-comprehension',
  // Sentence-gap reconstruction (cohesion as decoding + elimination
  // procedure) covers the seven-choice gap-filling task verbatim.
  'gap filling': 'eng-seven-choice-gap-filling',
  // The argumentative/practical-texts lesson teaches claim-reason-evidence
  // anatomy, organization patterns, news/report/popular-science reading,
  // charts and multi-document comparison — both reading tasks.
  'argumentative and expository texts': 'eng-argumentative-practical-texts',
  'practical texts': 'eng-argumentative-practical-texts',
  // Sets/logic lesson: roster + set-builder notation, subsets, Venn,
  // operations, quantifiers, conditionals, necessary/sufficient — the
  // syllabus name decomposes exactly into its two halves.
  'sets and common logical terms': 'math-sets-logic-foundations',
  // Regional lesson: analysis toolkit, resource exploitation, land
  // management, governance, security, GIS — the syllabus subtopics verbatim.
  'regional development and sustainability':
    'geo-regional-development-sustainability',
  // Culture lesson: elements of culture, transmission/exchange, change,
  // diversity, identity — the cultural-life syllabus content at world level.
  'cultural life': 'soc-culture-society-cultural-life',
  // mcat 'Evolutionary Mechanisms' → the natural-selection lesson: selection
  // modes, drift and founder effect, migration (gene flow), variation and
  // inheritance, fossils/homology/molecule evidence, speciation — the
  // syllabus subtopics verbatim (the generic matcher misses it because only
  // 'evolution' overlaps the title; verified against its named concepts).
  'evolutionary mechanisms': 'bio-evolution-natural-selection',
  // X29 pass (2026-10-24): orphan-closure sweep → six new lessons.
  'tissue types': 'bio-animal-tissue-types',
  // The biopsych survey teaches neuron anatomy, glia, CNS/PNS and autonomic
  // divisions, brain geography, language areas, endocrine bridge and
  // lesion/imaging evidence — the full mcat topic at survey depth (the two
  // specialist neuro lessons own the action potential and synaptic chemistry).
  'biological bases of behavior': 'neuro-biological-bases-behavior',
  // Attraction (proximity, mere exposure, similarity, reciprocity),
  // aggression (hostile/instrumental, frustration-aggression, bullying,
  // cyberbullying) and prosocial behavior (bystander effect, diffusion of
  // responsibility, altruism) — the mcat topic's three subtopic clusters.
  'interpersonal behavior': 'soc-interpersonal-behavior',
  'notation vocabulary and manipulation':
    'math-algebra-notation-manipulation',
  'quadratics including the formula and completing the square':
    'math-quadratics-completing-square',
  'nuclear symbol notation and isotopes': 'chem-isotopes-nuclear-notation',
  // X30 pass (2026-10-24): final-orphan sweep → five new lessons.
  // The LPP lesson teaches objective/constraints, half-plane intersection,
  // the feasible region, the corner-point theorem and both optimum readings
  // (vertex table and iso-profit line) — the cuet topic and its two
  // subtopics verbatim.
  'graphical solution of lpps': 'math-graphical-linear-programming',
  // The drug-and-additive lesson covers the classification axes, targets,
  // antacids/antihistamines/analgesics/antibiotics/antiseptics plus
  // preservatives, antioxidants, sweeteners, colors and emulsifiers —
  // the bitsat topic's two halves.
  'chemicals in medicine health care and food': 'chem-chemicals-medicine-food',
  // The joining lesson spans the gate-mechanical subtopics exactly: arc,
  // gas and resistance welding (SMAW, GMAW, GTAW, spot) plus brazing and
  // soldering, with joints, HAZ, defects and weldability.
  'joining': 'manuf-welding-joining',
  // The spelling lesson delivers the rule set (i-before-e and exceptions,
  // doubling, drop-e, y-to-i, plural -es/-ves/-ies, irregulars,
  // British/American, confusables) behind detecting misspelt words.
  'spelling': 'eng-spelling-rules-patterns',
  // The twentieth-century survey covers the gaokao subtopic list verbatim:
  // world wars (pointing to the dedicated lesson), Russian Revolution,
  // interwar crises, Cold War order and multipolarisation, economic
  // globalisation.
  'the twentieth century': 'hist-twentieth-century',

  /* ---- UGC NET Paper 1: matcher misses on existing lessons (verified 2026-10-24) ---- */
  // The business-communication lesson teaches the communication process
  // (sender-encoding-channel-decoding-feedback), channels and the
  // semantic/psychological/organisational barriers behind communicating
  // effectively in formal contexts.
  'effective communication': 'bus-communication-governance-ethics',
  // The constitutional lesson spans the topic exactly: constitution-making,
  // preamble, fundamental rights and duties, directive principles,
  // Parliament, judiciary, federalism.
  'the constitutional framework': 'soc-indian-constitution-polity',
  // The IR-theory lesson teaches realism, liberalism and constructivism,
  // anarchy and the security dilemma, polarity and systemic stability —
  // the theory set the topic names.
  'theories and concepts of ir': 'pol-ir-theory',
  // The people-environment lesson's pollution section covers local,
  // regional and global issues — air/water/soil/noise pollution, climate
  // change and biodiversity loss — the topic's subtopic line verbatim.
  'environmental issues': 'env-people-environment-sustainable-development',
  // The ICT lesson's e-governance section covers the governance models
  // (G2C/G2B/G2G/G2E) and ICT use in policy, service delivery and
  // transparency that the topic asks for.
  'ict and governance': 'ict-computers-internet-digital-initiatives',
  // The higher-education lesson's closing section teaches NEP 2020 (GER
  // target, HECI, academic bank of credits) plus the regulators (UGC,
  // AICTE, NAAC, NBA, AISHE) — the topic's two subtopic lines.
  'policies governance and administration': 'edu-higher-education-system-india',
  // X32 pass (2026-10-24): UGC NET Paper II sweep → the six new commerce and
  // political-thought lessons. Each alias names the syllabus unit the lesson
  // was written to cover: the environment lesson teaches internal/external
  // sectors + PESTEL + LPG; the theory lesson teaches indifference curves,
  // variable proportions and cost curves; the finance lesson teaches the
  // three decision areas with NPV/WACC/trade-off; the FDI lesson teaches FDI
  // forms, entry modes, the integration ladder and the institutions; the
  // marketing lesson teaches pricing anchors, channel design, the promotion
  // mix and the digital trends (one lesson honestly spans two units); the
  // political-thought lesson walks Plato→Marx.
  'business environment: concepts and elements':
    'com-business-environment-elements',
  'demand, consumer behaviour and production':
    'com-demand-consumer-production-theory',
  'corporate finance decisions': 'com-corporate-finance-decisions',
  'fdi, regional integration and institutions':
    'com-international-business-fdi-integration',
  'pricing, promotion and distribution':
    'com-marketing-mix-distribution-trends',
  'trends in marketing': 'com-marketing-mix-distribution-trends',
  'western political thought': 'pol-western-political-thought-canon',
  // X33 pass (2026-10-24): UGC NET closure sweep → the six new lessons that
  // close all seven remaining units. The auditing lesson teaches the audit
  // cycle (vouching/verification/valuation, opinions, trend audits); the
  // regulatory lesson owns the statute-and-regulator map (IT Act machinery,
  // RTI routing, IPR/GST stations cross-referenced); the foreign-policy
  // lesson owns determinants, institutions, Panchsheel/NAM, phases,
  // neighbours and major powers; the governance lesson honestly spans TWO
  // Paper-1 units (governance concepts + data and governance — one arc from
  // good governance through RTI/charters/e-governance SMART to open data
  // and evidence-based policy); the media lesson owns the print/electronic/
  // digital evolution and effects/responsibility; the logic lesson owns the
  // deductive/inductive distinction, the A/E/I/O forms and the traditional
  // square (the critical-reasoning lesson only mentions formal logic).
  'auditing': 'com-auditing-assurance-cycle',
  'modern regulatory framework': 'com-regulatory-framework-modern-india',
  'determinants and evolution of indian foreign policy':
    'pol-indian-foreign-policy-determinants',
  'governance concepts': 'pol-governance-concepts-data-administration',
  'data and governance': 'pol-governance-concepts-data-administration',
  'mass-media and society': 'gp-mass-media-society-responsibility',
  'evaluating and distinguishing inductive and deductive reasoning':
    'pol-logic-induction-deduction-square',

  /* ---- CLAT / Gaokao: final-orphan closure (verified 2026-10-25) ----
   * The X34 pass authored these three lessons and verified each mapping
   * against the lesson blocks: the books-authors lesson owns the prize
   * map (Nobel/Booker/Pulitzer/Jnanpith) and mapping craft; the judgments
   * lesson owns judgment anatomy, ratio/obiter, Article 141 hierarchy and
   * the legal-news habit (carved against the constitutional-structure
   * lesson's case facts); the Chinese-canon lesson owns set-text famous
   * lines and exact-recall craft. Note the Gaokao key: Chinese characters
   * are stripped by normalizeTopicName, so the name normalises to
   * 'set text recitation'. */
  'books and authors': 'lang-books-authors-prizes',
  'recent judgments and legal news': 'law-reading-judgments-precedent',
  'set text recitation': 'lang-classical-chinese-canon',

  /* ---- NSW HSC: X35 pass mappings (verified 2026-10-25) ----
   * The English-craft lessons own the two response topics (one lesson
   * honestly spans them, the X33 pattern); the population-genetics lesson
   * owns the population-scale inheritance layer (carved against
   * bio-genetics-mendel / bio-beyond-mendel-extensions / evolution); the
   * disorder-technology lesson owns devices for sensory and kidney
   * failure (carved against the senses and kidney physiology lessons).
   * Chemistry "Using Bronsted-Lowry Theory" stays unmapped BY DECISION:
   * masters chem-ch5-s2 teaches it verbatim and aliases cannot point at
   * masters chapters. */
  'representing human experiences in texts': 'eng-texts-human-experiences',
  'analysing and responding to texts': 'eng-critical-response-literature',
  'close critical study of a single text': 'eng-critical-response-literature',
  'inheritance patterns in a population': 'bio-population-inheritance-frequencies',
  'technologies and disorders': 'bio-sensory-organ-technologies',

  /* ---- Alberta Diploma Exams: X37 pass mappings (verified 2026-10-25) ----
   * Three authored lessons own the Social Studies 30-1 ideology territory
   * (RI1 x2 → ideologies lesson; RI2 x2 → liberalism lesson; RI4 →
   * citizenship lesson). RI3 remapped by coverage to pol-regimes-spectrum,
   * which owns regime classification, hybrid regimes and illiberal
   * backsliding. ELA outcomes remapped to their existing owners: the
   * human-experiences lesson (GO1), research-methodology (GO3), the
   * critical-response lesson (GO4), the peer-learning lesson (GO5) — and
   * the new visual-texts lesson owns GO2. Biology 30 development remapped
   * to the reproduction-systems lesson (fertilization → implantation →
   * parturition → assisted reproduction all owned; embryonic pattern
   * formation deepened by the developmental-biology KU). */
  'discovering and exploring ideas through language': 'eng-texts-human-experiences',
  'responding to visual and multimedia texts': 'lang-visual-multimedia-texts',
  'inquiry research and source evaluation': 'res-research-methodology-hypothesis-sampling',
  'the personal response and the critical analytical essay': 'eng-critical-response-literature',
  'collaboration peer feedback and group inquiry': 'fnd-peer-learning-teaching',
  'development fertilization embryogenesis and reproductive technologies': 'bio-human-reproduction-system',
  'characteristics and themes of ideology': 'pol-ideologies-individualism-collectivism',
  'individualism and collectivism as foundations of ideology': 'pol-ideologies-individualism-collectivism',
  'classical liberalism and its nineteenth century impacts': 'pol-liberalism-classical-modern',
  'modern liberalism and ideologies that rejected it': 'pol-liberalism-classical-modern',
  'citizenship rights roles and responsibilities': 'pol-citizenship-collective-rights',
  'political and economic systems through a liberal lens': 'pol-regimes-spectrum',

  /* ---- Exam-gap pass X45 (verified 2026-10-25) --------------------
   * Six audited-unmapped syllabus points → lessons authored this pass
   * (src/data/knowledge/fields/x45-exam-gap-pass.ts). Each target
   * lesson genuinely teaches the full syllabus point (both accountancy
   * units map to the one computerized-accounting lesson, which covers
   * components, vouchers, account creation and report generation).
   * 'Electronics' is deliberately NOT aliased: the A-Level physics
   * lesson's title contains the exact topic name, so the normTitle
   * rule scores it 0.9 — and a one-word generic alias key would risk
   * capturing other exams' topics. */
  'computerized accounting system': 'acct-computerized-accounting-systems',
  'using computerized accounting': 'acct-computerized-accounting-systems',
  'changing cultural traditions': 'hist-renaissance-cultural-change',
  'public interest litigation basics': 'law-pil-public-interest-litigation',
  'overriding methods': 'cs-method-overriding-dynamic-dispatch',
  'using bronsted lowry theory': 'chem-bronsted-lowry-in-use',

  /* ---- All-subjects split X48 (verified 2026-10-25) -----------------
   * The discipline split renamed eleven subject books (Law → 7, Economics
   * → 5, History → 5, Political Science → 4, Accounting → 2 …), and the
   * fuzzy matcher lost 11 previously-subject-token-matched topics. Each
   * alias below restores an audited-unmapped syllabus point to its true
   * owner lesson (mapping verified against lesson blocks):
   * - CUET Political Science: international organisations and UGC NET
   *   'global politics' → the contemporary-world-order lesson (UN system,
   *   polarity, institutions); planned development → India-since-
   *   independence (planning commission, five-year arc); external
   *   relations → the Indian foreign-policy lesson; judiciary and
   *   federalism → the Indian constitution lesson.
   * - CA Foundation: rectification of errors → the accounting-cycle
   *   lesson (trial balance → suspense → rectify, owned in its closing
   *   block); joint venture → the special-transactions lesson.
   * - IB Economics: government intervention → the market-failures
   *   lesson (externalities/public goods/monopoly remedies); measuring
   *   economic activity and AD-AS → the national-income AD-AS lesson.
   * - NDA 'prominent personalities' → the Indian freedom-struggle
   *   lesson (its personalities are the syllabus's reference set).
   * - Gaokao 'Ancient China' → the first-civilizations lesson (Yellow
   *   River/Shang/Zhou are its second case study). */
  'international organisations': 'pol-contemporary-world-order',
  'global politics': 'pol-contemporary-world-order',
  'politics of planned development': 'pol-india-since-independence',
  'india s external relations': 'pol-indian-foreign-policy-determinants',
  'judiciary and federalism': 'soc-indian-constitution-polity',
  'rectification of errors': 'acct-accounting-cycle-accruals',
  'joint venture': 'acct-special-transactions',
  'government intervention': 'econ-market-failures',
  'measuring economic activity and ad as': 'econ-macro-ad-as-indian-economy',
  'prominent personalities': 'hist-modern-india-freedom-struggle',
  'ancient china': 'hist-first-civilizations',

  /* ---- VCE launch X56 (verified 2026-10-26) ---------------------------
   * The VCE was added as the 55th curated exam (src/data/exams/victoria.ts,
   * 8 studies at Units 3 and 4 from the official VCAA study designs). Each
   * alias below names a topic the matcher could not reach and the target
   * lesson genuinely teaches (verified against lesson blocks and concepts):
   * - General Maths data analysis → the statistics lessons (time series
   *   topic authored this pass; regression/descriptive already owned).
   * - General Maths recursion/financial modelling → the compound-interest
   *   TVM lesson (recurrence + loans + annuities; the rosen recursion
   *   chapter only owns the abstract recurrence half).
   * - Biology Unit 3/4 → biotech, photosynthesis, immune, vaccines,
   *   speciation, human-evolution and enzymes lessons (each verified as
   *   the owner of the syllabus bullet set).
   * - Scientific-poster topics (Bio/Chem/Phys/Psych) → the research-
   *   methodology lesson (owns variables, validity, repeatability,
   *   poster conventions).
   * - Psychology → the two lessons authored this pass (conditioning and
   *   multi-store) plus existing owners (synapse, sleep architecture).
   * - Mental wellbeing + specific phobia → the biopsychosocial lesson
   *   authored this pass (the continuum framings are taught in its
   *   opening section).
   * - 'Creating texts' → the story-structure lesson (owns imaginative
   *   narrative craft; persuasive mode owned by the argument-essay
   *   masters section the masters matcher already serves). */
  'investigating and modelling linear associations': 'stats-correlation-regression',
  'investigating associations between two variables scatterplots correlation and causation':
    'stats-correlation-regression',
  'investigating and modelling time series trend seasonality and smoothing':
    'stats-time-series-trend-seasonality',
  'recursion and financial modelling loans annuities and depreciation':
    'bus-compound-interest-tvm',
  'dna manipulation techniques and applications': 'bio-biotechnology-rdna-processes',
  'photosynthesis as a biochemical pathway': 'bio-photosynthesis',
  'biotechnological applications of biochemical pathways': 'bio-biotechnology-applications',
  'enzymes coenzymes and the regulation of biochemical pathways':
    'bioc-enzymes-kinetics-regulation',
  'responding to antigens': 'bio-immune-system',
  'acquiring immunity': 'bio-immune-system',
  'disease challenges and strategies': 'health-vaccines-how-work',
  'changes in species over time and their relatedness': 'bio-speciation-barriers',
  'human change over time hominins and human migration': 'bio-human-evolution',
  'scientific investigation and the scientific poster':
    'res-research-methodology-hypothesis-sampling',
  'scientific investigation and research methods':
    'res-research-methodology-hypothesis-sampling',
  'creating texts imaginative persuasive and reflective writing':
    'art-story-structure',
  'nervous system and neural transmission': 'neuro-synapse-neurotransmitters',
  'behaviourist approaches classical and operant conditioning':
    'psy-behaviourist-learning',
  'observational learning and social cognitive approaches': 'psy-behaviourist-learning',
  'observational learning attention retention reproduction motivation and reinforcement':
    'psy-behaviourist-learning',
  'memory and the multi-store model': 'psy-memory-multistore-brain',
  'sleep as a psychological construct rem and nrem sleep':
    'health-sleep-stages-memory',
  'mental wellbeing as a multidimensional construct':
    'mind-specific-phobia-biopsychosocial',
  'specific phobia development and interventions':
    'mind-specific-phobia-biopsychosocial',
}
