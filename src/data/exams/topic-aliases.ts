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
}

