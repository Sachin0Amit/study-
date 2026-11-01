/**
 * Knowledge Universe — Bioinformatics & Genomics — Chapter 02: Sequencing & Assembly
 * 2 lessons · ~2,753 words (includes the 2026-11-01 salvage increment)
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
 *   02.2 bioinfo-genome-assembly — Genome Assembly: Turning Billions of Reads into Chromosomes (~1,589w, salvaged)
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
  // Salvaged 2026-11-01 from the diverged local line (pass x60-lifescience-deepening-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'bioinfo-genome-assembly',
    title: 'Genome Assembly: Turning Billions of Reads into Chromosomes',
    domain: 'Life Sciences',
    field: 'Bioinformatics',
    branch: 'Sequencing & Assembly',
    tier: 'intermediate',
    concepts: [
      'The assembly ladder: reads → contigs → scaffolds → chromosomes',
      'Coverage depth and the Lander–Waterman statistics',
      'Overlap–layout–consensus: assembling long reads',
      'De Bruijn graphs: assembling billions of short reads',
      'Repeats: why assemblies break',
      'N50: measuring assembly contiguity honestly',
      'Long reads, hybrid assembly, polishing and telomere-to-telomere',
    ],
    words: 1589,
    readMins: 8,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'A modern sequencer does not hand you a genome. It hands you fragments — typically a few hundred letters for the short-read machines, and for the long-read platforms somewhere between thousands and a million. A bacterial genome runs a few million letters; a human genome 3.1 billion; the wheat genome 17 billion. Assembly is the computational craft of rebuilding the book from shuffled torn strips: overlap the fragments, order them, and hammer out a consensus letter where they disagree. The genomics lesson already told the Human Genome Project’s story — BAC-by-BAC hierarchy against whole-genome shotgun, and the Bermuda Principle that made the data public. This lesson owns the machinery underneath that race and every one since: what a computer actually does with the reads.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every time you hear that a new species’ genome, a cancer genome or a SARS-CoV-2 strain has been “sequenced,” an assembler rebuilt it first. Assembly quality decides whether you see a structural variant or a hallucination, and the field’s hardest open problems — perfect human genomes, cancer karyotypes, metagenome recovery — are assembly problems.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'heading',
        text: 'Coverage: how many strips do you need?',
      },
      {
        kind: 'para',
        text: 'Shotgun sequencing shreds DNA at random and reads a sample of the pieces. Because the shredding is random, some regions are read many times and others, by luck, not at all. The Poisson statistics of this lottery were worked out by Lander and Waterman: if you sequence total length N of reads for a genome of length G, the average depth of coverage is C = N/G, and the fraction of the genome you have seen at least once approaches 1 − e^(−C). At 5× coverage, roughly 0.7% of the genome is still missing; at 10×, about 0.005%. That exponential tail is why projects buy depth with cheap reads, and why “30×” became the standard depth for a human genome: the gaps from sampling bad luck are gone, and the remaining disagreements are read errors, which the consensus step can vote away.',
      },
      {
        kind: 'formula',
        name: 'Lander–Waterman coverage',
        latex: 'C = \\frac{N \\cdot L}{G}, \\qquad P(\\text{uncovered}) = e^{-C}',
        meaning: 'Coverage C equals reads N times read length L divided by genome length G; the probability a base was never read falls exponentially with depth.',
      },
      {
        kind: 'example',
        title: 'Planning a bacterial genome run',
        steps: [
          'The task: assemble a 5-megabase (5,000,000 bp) bacterial genome to 40× coverage using 150 bp paired-end reads.',
          'Total bases needed: C × G = 40 × 5,000,000 = 200,000,000 bp.',
          'Read pairs needed: 200,000,000 ÷ (2 × 150) ≈ 666,667 pairs — about 0.67 million read-pairs, a small fraction of one instrument run.',
          'Sanity check with Lander–Waterman: the chance any given base went unread is e^(−40) ≈ 4 × 10⁻¹⁸ — sampling gaps are impossible at this depth.',
          'Conclusion: for bacteria, the problem is never coverage; it is repeats and plasmids, which is where the graph algorithms earn their keep.',
        ],
      },
      { kind: 'heading', text: 'Two ways to overlap: OLC and de Bruijn' },
      {
        kind: 'para',
        text: 'Assemblers come in two great families. Overlap–layout–consensus (OLC) works the way a human solves a jigsaw: compute all worthwhile pairwise read overlaps (“this read’s end matches that read’s start for 400 letters”), build a graph whose nodes are reads and edges are overlaps, pick the heaviest path through it — the layout — and read off a consensus letter at each column. This was the logic behind the early whole-genome assemblers, and it is the natural style for long reads, where each read spans thousands of letters and overlaps are unambiguous and rare.',
      },
      {
        kind: 'para',
        text: 'The de Bruijn graph takes the opposite route: chop every read into overlapping k-mers — substrings of fixed length k, say 31 — and build a graph whose nodes are (k−1)-mers and whose edges are the k-mers, each read contributing a little path through the graph. Reads are then irrelevant; only the k-mer counts remain. This sounds like madness until you count: a billion reads never need to be compared pairwise (a quadrillion comparisons), because identical k-mers collapse into the same edge. The genome itself becomes the graph — every place where two reads agree is already merged — and assembly means finding an Eulerian path that walks every edge. This is the engine that made billion-read human assembly affordable, and its cost is fixed k: any repeat longer than the k-mer length tangles the graph, because the assembler cannot tell which copy of the repeat a read came from.',
      },
      {
        kind: 'para',
        text: 'Repeats are the eternal enemy. A genome is full of them — the human Alu element appears over a million times — and a repeat longer than the information in a read breaks the assembly into fragments at exactly that point. Short reads cannot span the repeat, so the graph bulges and the assembler must cut. This is the whole strategic logic of read length: a read longer than the repeat resolves it outright. Long-read platforms now deliver reads of tens of thousands to millions of bases — long enough to walk through most repeats and across entire bacterial genomes — but at higher per-base error rates and cost. The modern compromise is hybrid assembly: long reads for the layout, cheap accurate short reads for the consensus, plus a final polishing pass that realigns short reads to the long-read scaffold and votes on each letter.',
      },
      { kind: 'heading', text: 'Scoring an assembly: N50 and its caveats' },
      {
        kind: 'para',
        text: 'How do you know one assembly is better than another? The field’s favorite single number is N50: sort the contigs by length, then walk down the list accumulating bases; N50 is the length of the contig that carries you past half the total. An N50 of 10 kb says the assembly’s bulk lives in blocks of at least 10 kilobases. N50 must be read with total size — a splintered assembly and a good one can share an N50 if their totals differ — and it says nothing about correctness, since mis-joins inflate contiguity while scrambling the genome. Assembly-to-reference comparison, read-mapping agreement and BUSCO gene-completeness checks complete the honest picture.',
      },
      {
        kind: 'example',
        title: 'Computing N50 by hand',
        steps: [
          'Contig lengths: 120 kb, 95 kb, 80 kb, 40 kb, 30 kb, 25 kb, 10 kb — total = 400 kb; half = 200 kb.',
          'Walk the sorted list: 120 (cumulative 120), 95 (215) — the cumulative total crosses 200 kb at the 95 kb contig.',
          'N50 = 95 kb. L50 = 2, the number of contigs needed to get there.',
          'Now merge nothing but reorder nothing — suppose the 120 kb contig was a mis-join of two 60 kb pieces: totals stay 400 kb, but the walk becomes 95, 80, 60 (235) → N50 drops to 80 kb.',
          'Moral: N50 rewards contiguity, says nothing about whether the joins are real, and always travels with the total-assembly-size context.',
        ],
      },
      {
        kind: 'para',
        text: 'The endgame of the craft is the telomere-to-telomere (T2T) human genome, finished in 2022: ultra-long reads stitched through the repeat deserts — the satellite arrays and ribosomal-DNA clusters that stayed “gaps” for twenty years — until every chromosome ran gapless, including the fully sequenced Y. T2T is the proof that with reads long enough and polishing careful enough, the shuffled-strips problem yields completely; what remains open is doing it for every individual genome, cheaply, and for the cancer genomes that are worse than shuffled — rearranged.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Contig / scaffold', def: 'A gapless assembled sequence (contig); scaffolds additionally order and orient contigs using paired-read and mapping evidence across gaps.' },
          { term: 'Coverage depth', def: 'Average number of reads spanning a random base, C = NL/G; the probability of an unsequenced base falls as e^(−C).' },
          { term: 'OLC assembly', def: 'Overlap–layout–consensus: pairwise read overlaps form a graph; natural for long, expensive reads.' },
          { term: 'De Bruijn graph', def: 'Assembly on k-mers: nodes are (k−1)-mers, edges are k-mers; collapsing reads into k-mer space makes billion-read assembly affordable.' },
          { term: 'N50', def: 'The contig length at which cumulative sorted contig sizes reach half the assembly; a contiguity metric, not a correctness metric.' },
          { term: 'Polishing', def: 'Realigning accurate (usually short) reads to the draft and voting per base to correct long-read consensus errors.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Why do de Bruijn assemblers chop reads into k-mers instead of comparing all read pairs?',
            options: [
              'k-mers are more chemically stable',
              'Identical k-mers collapse into shared edges, avoiding quadratic all-vs-all read comparison',
              'It removes sequencing errors entirely',
              'k-mers make reads longer',
            ],
            answer: 1,
            explain: 'Billion-read pairwise overlap is computationally impossible; in k-mer space, redundancy merges and the genome itself becomes the graph.',
          },
          {
            q: 'A genome contains a 6,000 bp repeat. Which read assembles across it most reliably?',
            options: [
              'A 150 bp Illumina read',
              'A 250 bp paired-end read pair',
              'A 15,000 bp long read',
              'A 31-mer',
            ],
            answer: 2,
            explain: 'A read longer than the repeat spans it and anchors both sides; short reads and k-mers shorter than the repeat cannot distinguish its copies.',
          },
          {
            q: 'Assembly A has N50 = 95 kb and total 400 kb; assembly B has N50 = 95 kb and total 300 Mb. What can you conclude?',
            options: [
              'A is more accurate',
              'B is more contiguous — its bulk sits in 95 kb blocks',
              'They have identical quality',
              'Nothing without total sizes and correctness checks — same N50 alone does not compare them',
            ],
            answer: 3,
            explain: 'N50 is only meaningful alongside total assembly size, and it measures contiguity, never correctness — mis-joins can inflate it.',
          },
          {
            q: 'At coverage C, the probability a given base was never sequenced is:',
            options: ['C/N', 'e^(−C)', '1 − C', '(1 − e^(−C))'],
            answer: 1,
            explain: 'Lander–Waterman: random sampling gives Poisson coverage, so the unseen fraction is e^(−C) — the reason depth buys completeness exponentially.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Read after the genomics lesson, which owns the sequencing-platform story and the Human Genome Project race; the synthetic-biology programming lesson names de Bruijn assembly in one line that this lesson expands into the full machinery. The phylogenetics lesson next uses assembled or reference genomes as its raw material.',
        tone: 'path',
      },
    ],
  },

]
