/**
 * Knowledge Universe — Bioinformatics & Genomics — Chapter 01: Reading Genomes with Code
 * 2 lessons · ~2,516 words (includes the 2026-11-01 salvage increment)
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
 *   01.2 bioinfo-single-cell-spatial — Single-Cell and Spatial Genomics: Profiling One Cell at a Time (~1,465w, salvaged)
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
  // Salvaged 2026-11-01 from the diverged local line (pass x60-lifescience-deepening-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'bioinfo-single-cell-spatial',
    title: 'Single-Cell and Spatial Genomics: Profiling One Cell at a Time',
    domain: 'Life Sciences',
    field: 'Bioinformatics',
    branch: 'Computational Biology',
    tier: 'intermediate',
    concepts: [
      'Why bulk averages lie: the smoothie problem',
      'Droplet barcoding: one cell, one bead, one library tag',
      'The cells × genes count matrix and its QC gauntlet',
      'Normalization, PCA, neighbors, UMAP: taming 20,000 dimensions',
      'Clustering and marker genes: naming the clusters',
      'Batch effects and integration',
      'Lineage tracing and spatial transcriptomics',
    ],
    words: 1465,
    readMins: 7,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Grind up a tissue and sequence its RNA — the RNA-seq workflow the genomics lesson owns — and you get one number per gene: the average expression across the tens of thousands of cells in the tube. It is a smoothie. If the sample is 60% tumor cells and 40% immune infiltrate, a gene that is sky-high in the immune cells and silent in the tumor shows a middling average in nobody’s cell. Two patients whose tumors respond differently can even present near-identical bulk profiles because the mixtures differ while nothing else does. Single-cell genomics was built to destroy this averaging: sequence each cell separately, and the smoothie resolves into its fruit. The genomics lesson gave this one sentence — “the same counting logic scales down to single cells” — and this lesson owns the whole apparatus that sentence hides.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Single-cell profiling is how the Human Cell Atlas is enumerating every cell type in the body, how new cell states were tracked through COVID-19 blood and tumor micro-environments, and how developmental biologists watch a zygote’s descendants diverge in real time. It is the fastest-moving measurement technology in biology.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'heading',
        text: 'One cell, one barcode',
      },
      {
        kind: 'para',
        text: 'The engineering problem is library preparation: doing a separate RNA-seq reaction for each of thousands of cells, in its own tube, is impossible; doing them together in one tube makes them indistinguishable. Droplet systems solve it with barcoded beads. The tissue is gently dissociated into a suspension of single cells; cells and beads are then flowed through a microfluidic chip so that droplets pair, at random, one cell with one bead. Each bead carries a huge library of capture oligos, all sharing one cell barcode but each with a unique molecular identifier (UMI) — a molecular serial number — plus a poly-dT tail that grabs messenger RNA by its poly-A tail. Every transcript captured inside that droplet is thus stamped with which cell it came from (the barcode) and which molecule it was (the UMI). Reverse transcription, pooling and sequencing follow, and afterwards the computer simply groups reads by barcode: one cell, one pile. UMIs kill amplification noise — a transcript amplified a thousand times by PCR still counts once, because all thousand copies share one serial number.',
      },
      {
        kind: 'para',
        text: 'A good run yields tens of thousands of cells, each quantified over a few thousand detected genes — sparse data, because a single cell holds only a few hundred thousand mRNA molecules, and any particular gene’s transcript may be present in copy counts of zero through a handful. The result is the field’s central object: a cells × genes count matrix, mostly zeros, about 5–10% dense.',
      },
      { kind: 'heading', text: 'The QC gauntlet and the dimensionality ladder' },
      {
        kind: 'para',
        text: 'Raw matrices are full of impostors. Dead or dying cells leak RNA and read as artificially gene-rich with high mitochondrial-transcript fractions; doublets — two cells sharing a droplet — read as cells expressing two cell types at once, immunology’s chimera. Quality control therefore gates on counts-per-cell, genes-per-cell and percent-mitochondrial, then doublet-detection algorithms flag suspicious chimeras. Only then does analysis begin, and it begins with a dimensionality problem: you cannot see 20,000-dimensional data, and least of all in sparse counts.',
      },
      {
        kind: 'para',
        text: 'The standard ladder, unchanged in its bones across the field’s two dominant toolkits, runs: normalize counts so cells are comparable (scaling each cell to a common total, then log-transforming); select highly variable genes; run PCA to compress those thousands of genes into a few dozen axes of dominant variation; build a k-nearest-neighbor graph on the PCA space; and project that graph to two dimensions with UMAP (or t-SNE) purely for looking. Clusters are then found in the graph itself — the Leiden algorithm being the current standard — and each cluster is named by its marker genes: genes expressed in that cluster and nowhere else. Markers, not coordinates, carry the biology: a cluster of blood cells high in hemoglobin genes is erythroid; one high in CD3 genes is T cells; one high in immunoglobulins is plasma. The scientist reads the map by its labels.',
      },
      {
        kind: 'example',
        title: 'Naming a cluster with markers',
        steps: [
          'The UMAP shows eight clusters; cluster 3 sits apart and you must name it.',
          'Run differential expression of cluster 3 against all other cells: the top genes are LYZ, S100A8, S100A9, FCN1, CD14.',
          'Interpret: LYZ = lysozyme; S100A8/A9 = calprotectin, an antimicrobial heterodimer; CD14 = the LPS co-receptor. This is the classic monocyte signature.',
          'Cross-check against known reference atlases: yes — CD14+ classical monocytes.',
          'Record: cluster 3 = classical monocytes, with the finding that they are expanded twofold in patient versus control samples — the biological result the bulk smoothie had averaged away.',
        ],
      },
      { kind: 'heading', text: 'The enemies: batch, and lost geography' },
      {
        kind: 'para',
        text: 'Two structural problems frame the field. Batch effects are technical differences — reagent lots, machines, days — that masquerade as biology: cells from the same tissue processed on different days cluster by day, not by type. Integration methods correct for this by aligning datasets in a shared embedding while preserving genuine biological difference; the craft lies in not regressing away the biology along with the batch, a risk that becomes acute when the true difference between conditions is subtle. The second problem is that dissociation destroys space: a beautiful atlas of cell types with no idea which cell sat next to which. Spatial transcriptomics restores it. In spot-based methods, a thin tissue section on a glass slide carries a grid of barcoded spots, each about 55 micrometers — a dozen cells — so transcripts are captured and sequenced with their grid address; high-resolution variants use barcoded arrays of nanometer-scale spots or in-situ readout, approaching single-molecule localization. The payoff is direct: you see the macrophages crowding the tumor margin, the layered gene domains of the brain, the infection front where interferon-high cells form a ring.',
      },
      {
        kind: 'para',
        text: 'A final branch replaces static snapshots with ancestry. Lineage tracing marks cells with heritable barcodes — introduced by safe-harbor integration or recorded into the genome itself through CRISPR-based scar accumulation — so that every daughter cell carries its ancestor’s tag plus its own accumulated edits. Reconstructing the barcode tree recovers developmental lineage: which founding cell gave rise to which tissue, how stem-cell clones compete over a lifetime, and how far a metastasis’s founder traveled. Combined with the RNA readout, each cell reports both who it became and where it came from.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Cell barcode + UMI', def: 'Droplet tags: the barcode assigns every read to its cell of origin; the unique molecular identifier makes PCR copies of one molecule count once.' },
          { term: 'Count matrix', def: 'Cells × genes table of transcript counts; sparse (~5–10% nonzero) because single cells hold limited mRNA.' },
          { term: 'QC gauntlet', def: 'Filtering on counts, genes, and mitochondrial fraction; removing doublets — paired-cell chimeras — before analysis.' },
          { term: 'UMAP', def: 'A graph-projection embedding of the k-nearest-neighbor PCA space into two dimensions for visualization; distances in it are suggestive, not metric.' },
          { term: 'Marker genes', def: 'Genes specifically expressed in one cluster, used to name it — CD3 for T cells, LYZ/S100A8 for monocytes, hemoglobins for erythroid.' },
          { term: 'Spatial transcriptomics', def: 'Barcoded capture on tissue sections so transcripts carry grid addresses, keeping gene expression and anatomy in one picture.' },
          { term: 'Lineage tracing', def: 'Heritable barcodes or CRISPR-accumulated scars that let descendants report their ancestry, reconstructing clone trees.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A gene is expressed highly in tumor-infiltrating immune cells but silent in the tumor cells themselves. Bulk RNA-seq of the mixed tissue will most likely report it as:',
            options: [
              'high in the tumor',
              'moderately expressed in the mixture, misrepresenting both populations',
              'silent overall',
              'specific to the tumor',
            ],
            answer: 1,
            explain: 'Bulk sequencing averages across cells — the smoothie problem — so compartment-specific expression appears as a misleading middling value.',
          },
          {
            q: 'Unique molecular identifiers (UMIs) improve single-cell counts by:',
            options: [
              'amplifying rare transcripts',
              'making PCR duplicates of the same original molecule count as one',
              'labeling which cell each read came from',
              'correcting batch effects',
            ],
            answer: 1,
            explain: 'Every PCR copy of one captured molecule shares its UMI serial number, so amplification noise collapses; the cell barcode, a different tag, handles cell identity.',
          },
          {
            q: 'Cells processed on Monday and Thursday cluster separately despite being the same tissue. The first suspicion should be:',
            options: ['a new cell type', 'a batch effect', 'a doublet population', 'a UMAP bug'],
            answer: 1,
            explain: 'Technical variation across runs routinely masquerades as biology; integration methods exist precisely to align such datasets before interpreting clusters.',
          },
          {
            q: 'In the standard pipeline, clusters are actually detected in:',
            options: [
              'the UMAP two-dimensional plot',
              'the k-nearest-neighbor graph built on PCA space',
              'the raw count matrix',
              'the FASTQ files',
            ],
            answer: 1,
            explain: 'Leiden and its relatives partition the cell–cell graph; the UMAP is a lossy illustration of that same graph, drawn afterward for human eyes.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'The genomics lesson owns RNA-seq fundamentals — read it first for the counting logic this lesson scales down to single cells. The databases-and-structures lesson owns where the results are stored; the CRISPR editing lesson owns the cutting machinery that lineage tracing borrows for scarring.',
        tone: 'path',
      },
    ],
  },

]
