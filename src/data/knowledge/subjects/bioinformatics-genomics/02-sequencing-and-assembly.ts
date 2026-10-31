/**
 * Knowledge Universe — Bioinformatics & Genomics — Chapter 02: Sequencing & Assembly
 * 1 lesson · ~1,164 words
 * field: Bioinformatics
 * legacy sources: x69-library-org-convergence.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Sequencing & Assembly]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 emer-bioinformatics-sequencing-assembly — Genome Sequencing and Assembly: From Reads to Reference
 */
import type { KnowledgeTopic } from '../../types'

export const bioinformaticsGenomicsCh02: KnowledgeTopic[] = [
  {
    id: 'emer-bioinformatics-sequencing-assembly',
    title: 'Genome Sequencing and Assembly: From Reads to Reference',
    domain: 'Emerging & Interdisciplinary',
    field: 'Bioinformatics',
    branch: 'Sequencing & Assembly',
    tier: 'advanced',
    concepts: [
      'reads, not chromosomes: why assembly exists',
      'three chemistry generations in one paragraph: read length, throughput, error profile',
      'assembly as a graph problem: OLC versus de Bruijn k-mer graphs',
      'repeats: the ambiguity that read length resolves',
      'coverage depth C = NL/G and the Lander\u2013Waterman view',
      'N50 and what makes an assembly honest',
      'mapping with the Burrows\u2013Wheeler transform; variant calling; T2T and pangenomes',
    ],
    words: 1164,
    readMins: 6,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: 'The Reading Genomes with Code chapter treats genomes as strings to be analyzed; this lesson goes one step upstream and asks where those strings come from. No machine reads a whole chromosome end to end. Every sequencing technology produces short fragments — reads — and every genome sequence ever published is a computational reconstruction from millions of them. Sequencing and assembly are therefore inseparable: the wet-lab chemistry decides what the data look like, and the algorithms decide what can be known. The history is a staircase of chemistries, each trading read length against throughput, and each generation forcing a new algorithmic settlement.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every clinical genome, every outbreak investigation, every crop-breeding program runs through this pipeline. When a public-health lab sequences a virus in hours, that is a nanopore sequencer and an assembler; when a tumor genome is compared to a patient\u2019s baseline, that is short reads aligned by a Burrows\u2013Wheeler index and sifted for variants. The cost of a human genome has fallen from roughly three billion dollars to a few hundred — an economics lesson written in chemistry and algorithms.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The instrument tour — Sanger\'s chain-termination chemistry, Illumina\'s sequencing-by-synthesis with reversible terminators, and the single-molecule long reads of Pacific Biosciences and Oxford Nanopore — is told in the genome-project lesson; what matters for assembly is what each chemistry leaves behind. Sanger-era capillary runs delivered long (roughly 800-1,000 base) reads but one at a time; second-generation flow-cells parallelized the same termination idea into hundreds of millions of 50-300-base reads whose errors are almost all substitutions, each base carrying a quality score on the Q scale (Q30 = one error per thousand); long reads reach tens of kilobases to megabases, paying for length with higher raw error rates that random-error consensus passes wash out — and nanopore\'s portability put sequencing in the field during the 2015 Ebola outbreak. Read length, throughput and error profile are the three numbers every assembler is designed around, and the trade between them explains the entire algorithmic history that follows.", \'When a good reference exists, the cheaper strategy is resequencing: map the new reads back to the reference and call differences. Mapping hundreds of millions of reads demands an index faster than linear search, and the winner is the FM-index built on the Burrows\u2013Wheeler transform — the reversible rearrangement that groups similar suffixes together, letting tools like Bowtie and BWA search the entire human reference in a few kilobytes-to-megabytes of memory per lookup. A pile-up of mapped reads at each position is then scanned for variants — single-nucleotide polymorphisms and small indels, filtered by depth and quality. The frontier has moved to representing our species honestly: the Telomere-to-Telomere consortium published a gapless human genome in 2022 using long reads to finally resolve the centromeres and short arms, and the pangenome effort now weaves many diverse genomes into a graph reference so that no single linear sequence becomes the tyranny of the normal.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Coverage depth',
        latex: 'C = \\frac{N \\times L}{G}',
        meaning: 'N reads of length L across a genome of size G. C is the expected number of observations of any base; the fraction of bases never seen falls roughly as e^\u2212C.',
      },
      {
        kind: 'formula',
        name: 'Base quality score',
        latex: 'Q = -10\\,\\log_{10} p',
        meaning: 'p is the estimated error probability. Q20 = one error per hundred, Q30 = one per thousand, Q40 = one per ten thousand.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how many 150-base reads are needed to sequence a 3-gigabase human genome at 30\u00d7 coverage?',
          'Compute the required base count: C \u00d7 G = 30 \u00d7 3 \u00d7 10\u2079 = 9 \u00d7 10\u00b9\u2070 bases.',
          'Divide by read length: 9 \u00d7 10\u00b9\u2070 ÷ 150 = 6 \u00d7 10\u2078 — 600 million reads.',
          'Interpret: at C = 30 the expected unseen fraction is e^\u221230, effectively zero — but real projects plan higher because coverage is uneven and the budget must absorb sample loss, duplicates and low-quality tails. This arithmetic is why the cost per base, not per read, is the industry\u2019s true metric.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Clinical genomes: short-read resequencing plus variant calling is the workhorse of diagnostics for rare disease and cancer',
          'Field epidemiology: nanopore sequencing of viruses during outbreaks, from Ebola to pandemic variants, with results in hours',
          'Ancient DNA: damaged, fragmented reads mapped to reference genomes rewrite human prehistory',
          'Metagenomics: mixed-community reads assembled and binned to catalogue microbes that refuse laboratory culture',
          'Crop and livestock genomics: long-read assemblies resolve the repeat-rich genomes short reads cannot close',
          'Quality control: N50 and per-base coverage plots are the first figures on every genome-report page',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Coverage is not completeness: at C = 30 some bases are still unseen, and repeats bias where coverage concentrates. N50 is not accuracy — an assembly can be contiguous and wrong, and early "high-N50" assemblies stitched chimeras. Do not call variants from bad mappings: a paralog mapping to the wrong copy masquerades as heterozygosity. And do not confuse scientific breakeven claims with consumer-grade accuracy: each technology\u2019s error profile shapes what the downstream assembler must forgive.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Dideoxynucleotide (ddNTP)', def: 'A chain-terminating nucleotide lacking the 3\u2032 hydroxyl; the basis of Sanger sequencing.' },
          { term: 'Sequencing-by-synthesis', def: 'Cyclic addition of reversibly terminated fluorescent bases, imaged across millions of clonal clusters.' },
          { term: 'Long read', def: 'A read of tens of kilobases or more (PacBio SMRT, nanopore) able to bridge repeats and structural variants.' },
          { term: 'de Bruijn graph', def: 'Assembly graph over k-mers whose Eulerian path spells the genome; the short-read assembler\u2019s core data structure.' },
          { term: 'Coverage (C = NL/G)', def: 'Average number of times each base is sequenced; the planning quantity for every sequencing project.' },
          { term: 'N50', def: 'The contig length above which half the assembly\u2019s bases reside — the standard (imperfect) contiguity statistic.' },
          { term: 'Burrows\u2013Wheeler transform', def: 'A reversible text rearrangement enabling the FM-index search that maps millions of reads per hour.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Sanger chain termination produces a sequence ladder because ddNTPs:',
            options: [
              'carry no fluorescent label',
              'terminate strand extension at the base where they are incorporated',
              'pair with RNA',
              'are longer than normal nucleotides',
            ],
            answer: 1,
            explain: 'Lacking the 3\u2032 hydroxyl, a ddNTP cannot accept the next bond — every incorporation ends a strand at a known base.',
          },
          {
            q: 'Sequencing a 3 Gb genome to 30\u00d7 with 150-base reads needs about:',
            options: [
              '6 million reads',
              '60 million reads',
              '600 million reads',
              '600 billion reads',
            ],
            answer: 2,
            explain: 'C \u00d7 G = 9 \u00d7 10\u00b9\u2070 bases; divided by 150 that is 6 \u00d7 10\u2078 reads — hundreds of millions, which is why massively parallel machines won.',
          },
          {
            q: 'Long reads matter most for assembly because they:',
            options: [
              'have lower raw error rates than short reads',
              'bridge repeats that short reads cannot resolve',
              'eliminate the need for coverage',
              'are cheaper per base',
            ],
            answer: 1,
            explain: 'Repeats longer than a read create unresolvable graph branches; long reads span them — the reason T2T needed them.',
          },
          {
            q: 'N50 is best described as:',
            options: [
              'the longest contig in the assembly',
              'the length such that contigs of at least that size contain half the assembled bases',
              'the number of gaps remaining',
              'the average read quality',
            ],
            answer: 1,
            explain: 'Order contigs longest-first, accumulate to half the total length, and read off the contig you land in — a contiguity, not accuracy, metric.',
          },
        ],
      },
    ],
  },
]
