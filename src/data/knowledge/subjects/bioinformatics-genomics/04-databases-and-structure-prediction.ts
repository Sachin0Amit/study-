/**
 * Knowledge Universe — Bioinformatics & Genomics — Chapter 04: Databases & Structure Prediction
 * 1 lesson · ~1,538 words
 * field: Bioinformatics
 * legacy sources: x47-bio-split-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Data & Structures]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 bio-bioinformatics-databases-structures — Bioinformatics Databases and Protein Structure Prediction: From FASTA to AlphaFold
 */
import type { KnowledgeTopic } from '../../types'

export const bioinformaticsGenomicsCh04: KnowledgeTopic[] = [
  {
    id: 'bio-bioinformatics-databases-structures',
    title: 'Bioinformatics Databases and Protein Structure Prediction: From FASTA to AlphaFold',
    domain: 'Emerging & Interdisciplinary',
    field: 'Bioinformatics',
    branch: 'Data & Structures',
    tier: 'intermediate',
    concepts: [
      'The International Nucleotide Sequence Database Collaboration: GenBank, ENA, DDBJ',
      'UniProt: the annotated protein knowledgebase',
      'The RCSB Protein Data Bank of experimentally determined 3D structures',
      'File formats: FASTA, FASTQ, GenBank flat file, GFF, VCF',
      'The FAIR principles for scientific data',
      'Homology modeling and threading: the pre-AI era',
      'CASP: the community-wide assessment that kept the field honest',
      'AlphaFold: deep-learning prediction with per-residue confidence',
    ],
    words: 1538,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The algorithms of bioinformatics — alignment, assembly, tree-building — operate on data that has to live somewhere, in some format, under some identifier scheme. That infrastructure is easy to treat as boring plumbing and impossible to actually work without: every analysis begins with fetching records from databases, and most practical failures in the field are format or metadata failures, not algorithmic ones. This lesson covers the data side of the discipline — the public archives, the standard formats, and the FAIR principles that keep them usable — and then the field’s most spectacular recent result built on top of that data: protein structure prediction.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'AlphaFold’s structure predictions — free, public, and near-experimental in accuracy for most proteins — have been called the single fastest change in the daily practice of biology in decades. Understanding what these predictions are, and what confidence you should place in them, is now basic literacy for anyone entering the life sciences.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Public Archives' },
      {
        kind: 'para',
        text: 'Raw DNA and RNA sequences live in three archives — GenBank in the United States, the European Nucleotide Archive, and Japan’s DNA Data Bank — that have exchanged data daily since the 1980s, so that submitting to one effectively submits to all. Each record carries an accession number (a stable identifier like its name in a library catalogue), the sequence itself, and structured metadata: organism, publication links, and feature annotations marking where genes and regulatory elements lie. The scale is difficult to absorb — hundreds of billions of bases, doubling on the scale of months, with the sequencing machines of the world streaming into it continuously.',
      },
      {
        kind: 'para',
        text: 'Protein sequences and their annotation live in UniProt, a curated knowledgebase whose entries summarize, for one protein, everything known: function, domains, post-translational modifications, disease associations, and cross-references to every other database worth knowing. UniProt layers three levels of curation, trading completeness against quality — computationally annotated records for everything, expert-curated records for the well-studied fraction. The third pillar is the Protein Data Bank, which since 1971 has archived the experimentally determined three-dimensional structures from X-ray crystallography and NMR — the reference answers, tens of thousands of them, against which every prediction method is judged.',
      },
      {
        kind: 'para',
        text: 'The formats are terse by design. FASTA is a header line beginning with “>” followed by bare sequence — the lowest common denominator everything can read. FASTQ adds a per-base quality line, one letter per base, which is what sequencers actually emit. The GenBank flat file interleaves sequence with features; GFF files list genomic features as table rows; VCF files list variants against a reference genome — position, change, and confidence. An enormous amount of practical bioinformatics is converting between these formats and keeping identifiers straight while you do it.',
      },
      {
        kind: 'para',
        text: 'What makes the infrastructure scientific, rather than merely computational, is the discipline about how data is kept: the FAIR principles. Data should be Findable (registered, described with rich metadata), Accessible (retrievable by standard protocols, even if the data itself is restricted), Interoperable (using shared vocabularies and formats), and Reusable (licensed and documented well enough for a stranger to reuse with attribution). The lesson generalizes far past biology — FAIR is becoming the norm for all research data — and its violations explain most wasted effort in computational science.',
      },
      { kind: 'heading', text: 'Predicting Protein Structure' },
      {
        kind: 'para',
        text: 'Proteins fold into the shapes that do the cell’s work, and for fifty years the gap between knowing a sequence and knowing its shape was filled by slow, expensive experiments. Before AI, the main computational route was homology modeling: proteins with similar sequences usually have similar structures, so if a relative of your protein has an experimental structure in the PDB, you can copy its scaffold and model only the differences. Without a suitable relative, threading methods tried to drape the sequence onto known structural skeletons — a much weaker bet. The honest summary of that era: prediction worked when you barely needed it.',
      },
      {
        kind: 'para',
        text: 'The referee for this whole enterprise was CASP — Critical Assessment of protein Structure Prediction — a community experiment held every two years since 1994, where predictors receive sequences whose structures have just been solved experimentally but not published, and are graded blind against answers they have never seen. CASP kept the field honest for a quarter century of slow progress, and it was at CASP14 in 2020 that DeepMind’s AlphaFold2 posted scores competitive with experimental methods for most targets — the moment the 50-year problem was declared, with reasonable fairness, solved. Deep neural networks trained on the PDB’s archive of structures and evolutionary co-variation in sequence alignments now produce structures for essentially any protein with a sequence, and the AlphaFold database now contains hundreds of millions of predicted structures, free to all.',
      },
      {
        kind: 'para',
        text: 'The skill the new era demands is knowing when to trust a prediction. AlphaFold reports a per-residue confidence score, pLDDT, on a 0–100 scale: values above 90 mean the backbone is probably near-experimental accuracy; 70–90 is a good model with some caution; below 50 — commonly found in genuinely disordered regions — is effectively no prediction at all. Disordered segments are not a failure of the method but a biological reality: many proteins genuinely have no single stable structure. Predictions also describe isolated units, not the conformational changes, binding partners, or crowded context of a living cell — the experiment remains the final word where it matters.',
      },
      {
        kind: 'example',
        title: 'Worked Example — A First Week on a New Protein',
        steps: [
          'Situation: your lab studies an unstudied bacterial enzyme; you have only its sequence.',
          'Fetch and annotate: submit the sequence to UniProt for domain and family annotation; run BLAST against GenBank to collect relatives (the algorithms lesson covers how BLAST works).',
          'Get the structure: query the AlphaFold database; the prediction returns with per-residue pLDDT confidence.',
          'Read the confidence map: the catalytic core comes back at 92 pLDDT — trustworthy — but a 40-residue segment at 35 pLDDT. Treat that segment as predicted disorder, not as an unknown shape to be forced into the model.',
          'Cross-check and proceed: find homologous structures in the PDB for the family scaffold; use the predicted model to choose site-directed mutagenesis targets, then verify experimentally.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Drug discovery: structure-based design against predicted models of parasitic and bacterial proteins no one would ever crystallize.',
          'Enzyme engineering: models of stability-changing mutations guide industrial biocatalyst redesign before a single wet-lab test.',
          'Disease interpretation: variants of uncertain significance in human genetics gain structural context — does the mutation sit in the folded core or the disordered tail?',
          'Pandemic response: SARS-CoV-2 protein structures were predicted within days of the genome’s release, guiding early antiviral and vaccine work.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'A predicted structure is a hypothesis with a confidence score, not an experimental fact — quoting AlphaFold output without its pLDDT context is the modern form of overclaiming. Second, “solved” applies to single-chain backbone prediction: complexes, alternative conformations, membrane environments and dynamics remain active research problems. Third, a database entry is not automatically correct: automated annotation propagates errors, and a function label inherited “by similarity” is a lead, not a result.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'accession number', def: 'Stable, citable identifier for a database record — the correct way to refer to a sequence, rather than pasting it.' },
          { term: 'UniProt', def: 'The curated protein knowledgebase: sequences plus everything known about function, domains and disease links.' },
          { term: 'FASTA / FASTQ', def: 'Bare-sequence format (header plus letters) versus sequencer output adding a per-base quality line.' },
          { term: 'FAIR principles', def: 'Findable, Accessible, Interoperable, Reusable — the normative standard for scientific data management.' },
          { term: 'homology modeling', def: 'Predicting a structure by copying the experimentally solved scaffold of a sequence relative.' },
          { term: 'CASP', def: 'The blinded, community-wide assessment of structure prediction held every two years since 1994.' },
          { term: 'pLDDT', def: 'Per-residue confidence score (0–100) reported with AlphaFold predictions; below ~50 indicates predicted disorder.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'You submit a sequence to GenBank. What happens to it?',
            options: [
              'It stays only in GenBank',
              'It is exchanged with the European and Japanese archives, appearing in all three',
              'It is automatically curated by experts',
              'It is converted to a protein structure',
            ],
            answer: 1,
            explain: 'The three archives of the International Nucleotide Sequence Database Collaboration synchronize daily — one deposit, three databases.',
          },
          {
            q: 'An AlphaFold prediction returns the core at 95 pLDDT and one loop at 32. The correct reading:',
            options: [
              'The whole model is unreliable',
              'The core is near-experimental quality; the low-confidence loop is predicted to be disordered',
              'The loop is the active site',
              'pLDDT refers to sequence identity',
            ],
            answer: 1,
            explain: 'pLDDT is per-residue: high-scoring regions are dependable; very low scores flag disorder, meaning no single structure exists to predict.',
          },
          {
            q: 'The F and A of FAIR stand for:',
            options: ['Fast and Accurate', 'Findable and Accessible', 'Formatted and Archived', 'Finite and Atomic'],
            answer: 1,
            explain: 'Findable, Accessible, Interoperable, Reusable — the four properties that make data usable by strangers, including future you.',
          },
          {
            q: 'Why was CASP important to the history of structure prediction?',
            options: [
              'It funded the AlphaFold project',
              'Its blind, answer-held-back format gave a trustworthy yardstick, and its 2020 round demonstrated the breakthrough',
              'It stored all known structures',
              'It replaced experiments with predictions',
            ],
            answer: 1,
            explain: 'Blind assessment against unpublished experimental structures prevented self-deception for 25 years and objectively revealed when prediction finally caught up.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Assumes the sequence-algorithms lesson (BLAST, alignment) and benefits from the protein-structure lesson’s account of what structures are and how they are determined experimentally. Together, the three cover the modern workflow: sequence, data, structure.',
        tone: 'path',
      },
    ],
  },
]
