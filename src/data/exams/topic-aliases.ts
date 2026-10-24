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
}

