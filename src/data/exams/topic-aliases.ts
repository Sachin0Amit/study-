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
}

