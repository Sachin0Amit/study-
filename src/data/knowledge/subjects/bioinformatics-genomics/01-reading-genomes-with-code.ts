/**
 * Knowledge Universe — Bioinformatics & Genomics — Chapter 01: Reading Genomes with Code
 * 1 lesson · ~1,051 words
 * field: Bioinformatics
 * legacy sources: emerging-interdisciplinary.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Computational Biology]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 emer-bioinformatics-reading-genomes — Bioinformatics: Reading Genomes with Code
 */
import type { KnowledgeTopic } from '../../types'

export const bioinformaticsGenomicsCh01: KnowledgeTopic[] = [
  {
    id: 'emer-bioinformatics-reading-genomes',
    title: 'Bioinformatics: Reading Genomes with Code',
    domain: 'Emerging & Interdisciplinary',
    field: 'Bioinformatics',
    branch: 'Computational Biology',
    tier: 'advanced',
    concepts: [
      'Genomes as strings over a four-letter alphabet',
      'Alignment as the core primitive',
      'Dynamic programming: Needleman–Wunsch and Smith–Waterman',
      'BLAST: heuristic search at scale',
      'Next-generation sequencing and Phred quality',
      'Assembly, mapping, and variant calling',
    ],
    words: 1051,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'A human genome is a 3.1-billion-character string over a four-letter alphabet, and reading, comparing, and annotating those strings is a software problem as much as a biology one. Bioinformatics — the computational biology heart of Emerging & Interdisciplinary fields — builds the algorithms that make genomes legible: alignment, heuristic search, quality scoring, and assembly. This advanced topic walks the core toolkit that turns sequencing machines into medical and scientific insight.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Pathogen variant tracking, rare-disease diagnosis, and crop improvement all run on these exact algorithms. Sequencing a genome is now routine; understanding it is entirely a computational discipline.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'DNA stores information in a four-letter alphabet — A, C, G, T — so a genome is literally a very long string: the human one runs about 3.1 billion letters, roughly 3 GB of text. That framing licenses the toolkit: substrings, indexes, and k-mers (all snippets of length k) become the working units, and the central dogma becomes string rewriting.',
      },
      {
        kind: 'para',
        text: 'Evolution edits strings — substitutions, insertions, deletions — so related sequences are approximate copies of one another. An alignment is the hypothesis that two strings share ancestry plus a specific edit history, scored by rewarding matches and penalizing mismatches and gaps; most genomic questions reduce to alignment in some form.',
      },
      {
        kind: 'para',
        text: 'Saul Needleman and Christian Wunsch proved in 1970 that the best global alignment of two strings can be found by filling a table of best sub-solutions, in time proportional to the product of the lengths. Temple Smith and Michael Waterman\'s 1981 variant adds a zero floor, finding the best matching local region — one gene hidden inside a genome.',
      },
      {
        kind: 'para',
        text: 'Exact alignment against billions of database letters is infeasible, so BLAST (1990) finds short exact seed matches, extends them, and scores the survivors — trading a sliver of sensitivity for orders of magnitude in speed. Its E-value reports how many matches that good you would expect by chance: the smaller, the more significant.',
      },
      {
        kind: 'para',
        text: 'Sequencers deliver reads — short strings with every letter tagged by a Phred score, Q = −10 log₁₀ of the error probability: Q20 means a 1% error per base, Q30 a tenth of that. Massive numbers of such reads, historically about 100–150 letters on the dominant platforms, are the raw material of genomics.',
      },
      {
        kind: 'para',
        text: 'Assembling a novel genome stitches reads together through de Bruijn graphs of k-mers, while re-sequencing maps reads onto a reference and calls differences — single-letter variants and small insertions or deletions — from the pile-up, weighted by quality. Sequencing cost fell faster than Moore\'s law for a decade, and the bottleneck has moved decisively to interpretation.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Phred quality score',
        latex: 'Q = -10 \\log_{10} p',
        meaning: 'p is the probability the base was called wrongly; Q20 corresponds to a 1% error rate, Q30 to 0.1%.',
      },
      {
        kind: 'formula',
        name: 'Needleman–Wunsch recurrence',
        latex: 'S_{i,j} = \\max\\{\\, S_{i-1,j-1} + s(x_i, y_j),\\; S_{i-1,j} + g,\\; S_{i,j-1} + g \\}',
        meaning: 'The best score for prefixes ending at positions i and j comes from a match or mismatch, or a gap in either string with penalty g; fill every cell, then traceback for the alignment.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: a sequencer reports a base at Q27 — what is the probability the call is wrong, and how many errors should you expect in a 150-base read at that quality?',
          'Recall the governing formula: Q = −10 log₁₀ p, inverted to p = 10^(−Q/10).',
          'Apply: Q27 gives p = 10^(−2.7) ≈ 0.002, about 0.2% per base; across 150 bases the expected count is 150 × 0.002 ≈ 0.3 errors.',
          'State the result: roughly one error per three reads — which is why pipelines call variants from many overlapping reads and trust the consensus, never a single read.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Genomic surveillance turned SARS-CoV-2 variants into a named, tracked global phenomenon in near-real time.',
          'Clinical exome sequencing now resolves a meaningful share of rare pediatric disease cases.',
          'Crop breeding selects for traits by marker genotypes instead of waiting on field phenotypes.',
          'Evolutionary biology reconstructs species trees from alignments — reading common ancestry directly.',
          'Protein engineering and structure prediction consume sequence databases as training fuel.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Sequencing is not understanding: an assembled genome is an annotated string, not an explained one. Ignoring quality scores — or trusting a single read — infects analyses with base-calling noise. And a variant found is not a disease caused: variants of uncertain significance vastly outnumber clinically validated ones, which is why genetic results go through counselors.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Base pair (bp)', def: 'One matched pair of DNA letters; the length unit of genomes.' },
          { term: 'k-mer', def: 'Any substring of length k; the atom of many genome algorithms.' },
          { term: 'Alignment', def: 'A hypothesized edit history — matches, substitutions, gaps — between two sequences.' },
          { term: 'Dynamic programming', def: 'Solving a problem via overlapping sub-solutions stored in a table.' },
          { term: 'BLAST', def: 'Heuristic seed-and-extend database search, the field\'s workhorse since 1990.' },
          { term: 'Phred score', def: 'Log-scaled per-base error probability, Q = −10 log₁₀ p.' },
          { term: 'Coverage depth', def: 'The number of sequencing reads stacked over a given position.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Phred Q30 corresponds to what per-base error probability?',
            options: ['1 in 10', '1 in 1,000', '1 in 3', '1 in 100'],
            answer: 1,
            explain: 'p = 10^(−30/10) = 0.001 — one wrong call per thousand bases.',
          },
          {
            q: 'Needleman–Wunsch versus Smith–Waterman differs mainly in:',
            options: ['Scoring matches versus mismatches', 'Global versus local alignment', 'DNA versus protein sequences', 'Speed only'],
            answer: 1,
            explain: 'Needleman–Wunsch aligns entire sequences; Smith–Waterman finds the best matching subregion by letting the score floor at zero.',
          },
          {
            q: 'BLAST achieves database-scale speed by:',
            options: ['Quantum-inspired parallelism', 'Heuristic seeding on exact word matches, then extending', 'Compressing the database losslessly', 'Ignoring gaps entirely'],
            answer: 1,
            explain: 'Seed-and-extend skips most of the search space, trading small sensitivity for orders of magnitude in speed.',
          },
          {
            q: 'Variant callers trust the consensus of many overlapping reads because:',
            options: ['Reads are stored redundantly for legal reasons', 'Independent errors average out, so a true variant stands above noise', 'The reference genome is always wrong', 'Quality scores cannot be used alone'],
            answer: 1,
            explain: 'Sequencing errors are random and position-independent, while real variants appear consistently across reads.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: comfort with basic algorithms (especially dynamic programming) and the central dogma of molecular biology. Next: phylogenetics, RNA-seq analysis, then statistical genetics and machine learning in protein structure.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Genomes are strings; k-mers are the atoms.',
          'An alignment is a shared-ancestry hypothesis with an edit script.',
          'Needleman–Wunsch is global, Smith–Waterman local — both exact via dynamic programming.',
          'BLAST trades exactness for speed; its E-values measure chance.',
          'Phred Q = −10 log₁₀ of error probability; consensus beats any single read.',
        ],
      },
    ],
  },
]
