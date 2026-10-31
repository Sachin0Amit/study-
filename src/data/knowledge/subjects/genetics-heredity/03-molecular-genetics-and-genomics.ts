/**
 * Knowledge Universe — Genetics & Heredity — Chapter 03: Molecular Genetics & Genomics
 * 4 lessons · ~7,378 words
 * field: Genetics & Heredity
 * legacy sources: life-sciences.ts, x14-heredity-biotech.ts, x61-crossverify-pass.ts, x72-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Molecular Genetics, Genomics]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 bio-genomics-bioinformatics — Genomics and Bioinformatics: Reading Whole Genomes
 *   03.2 bio-markers-qtl-mapping — Genetic Markers: DNA Landmarks, Marker Maps and QTL
 *   03.3 bio-crispr-gene-editing — CRISPR and the Mechanics of Gene Editing
 *   03.4 bio-cancer-genetics-oncogenes — Cancer Genetics: Oncogenes, Tumor Suppressors and Targeted Therapy
 */
import type { KnowledgeTopic } from '../../types'

export const geneticsHeredityCh03: KnowledgeTopic[] = [
  {
    id: 'bio-genomics-bioinformatics',
    title: 'Genomics and Bioinformatics: Reading Whole Genomes',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Genomics',
    tier: 'advanced',
    concepts: [
      'Human Genome Project: goals, rivals, and the Bermuda Principle',
      'Surprising findings: 20,000 genes, 98 percent non-coding',
      'From Sanger capillaries to long-read platforms and the 1,000-dollar genome',
      'Annotation, BLAST homology search, and the sequence databases',
      'Comparative genomics: synteny and model organisms',
      'Functional genomics: microarrays and RNA-seq',
      'Proteomics and metabolomics: the layers below RNA',
      'Pharmacogenomics: prescriptions tuned to genotype',
      'GWAS, DNA barcoding, metagenomics and ancient DNA',
    ],
    words: 3009,
    readMins: 15,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'In October 1990, the most ambitious biology project ever attempted set out to read all three billion letters of the human genome, at an estimated cost of billions and a projected finish fifteen years away. It finished early, in 2003, having also finished something else: the conversion of biology from a data-poor to a data-rich science, drowning in sequences that no notebook could hold. This lesson covers the project itself — its rival strategies and its surprises — then the technology curve that took a genome from a decade of international effort to an afternoon, the computational toolkit that turns raw letters into genes and functions, and the applications now running on whole genomes: personalized prescribing, gene-hunting at scale, and reading ecosystems directly from their DNA.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Whole-genome reading is no longer exotic. Pandemic response tracked viral variants by the thousands in near real time; rare-disease diagnosis increasingly starts with a genome rather than a series of single tests; and consumer genetics has put population-scale data — with all its privacy exposure — in millions of households. Knowing how genomes are read, assembled, and interpreted is now baseline scientific literacy.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The Human Genome Project\'s formal goals were five: sequence the entire human genome, map and eventually identify all of its genes, develop tools for analyzing the data, store everything in public databases, and — unusually for big science — devote real budget to the ethical, legal, and social implications of the work. The public consortium, coordinated through the United States National Institutes of Health and Department of Energy with the United Kingdom\'s Sanger Centre and international partners, chose a hierarchical strategy: break the genome into large mapped fragments carried in bacterial artificial chromosomes, order those BACs into a physical map, then sequence each BAC by the shotgun method — BAC-by-BAC, with the assembly plan drawn before the reading began. In 1998 Craig Venter\'s company Celera entered with the opposite wager: whole-genome shotgun — shred the entire genome at random, sequence everything fast, and let computers assemble the overlapping reads from scratch. The rivalry ended in an arranged draw: draft sequences published in February 2001 in competing journals, and a finished, high-accuracy euchromatic sequence announced complete in April 2003, exactly fifty years after the double helix. One policy decision shaped everything downstream: at a 1996 meeting in Bermuda, the funders required that all sequence data be released into public databases within twenty-four hours of generation. The Bermuda Principle meant no gene patents from the public data, and it made the genome a commons from day one.',
      },
      {
        kind: 'para',
        text: 'The findings rewrote expectations. The protein-coding gene count came in around 20,000 — not the 100,000 many had assumed, and scarcely more than a roundworm\'s tally — with only about 1.5 to 2 percent of the genome actually coding for protein. More than half the sequence is repetitive: transposable-element fossils like the LINE and Alu families echoing through every chromosome, plus tandem repeats and segmental duplications, entire neighborhoods of gene-dense activity and gene-poor deserts in between. The "junk DNA" label dissolved under scrutiny. The non-coding majority carries promoters, enhancers, silencers, insulators, scaffolding attachments, and thousands of functional non-coding RNAs; later surveys found biochemical activity across a large majority of the genome, though how much of that activity is functional is still debated. One clinical consequence stands out: most disease-associated variants found in population studies fall outside protein-coding regions — they tune when and where genes run, not just what proteins look like. Gene regulation, not gene count, is where human complexity lives.',
      },
      {
        kind: 'para',
        text: 'The technology curve did the rest. The project\'s workhorse was automated Sanger sequencing — fluorescent chain-termination chemistry in capillary arrays, hundreds of thousands of reads per instrument, each read about 800 bases. The next generation industrialized the trick: Illumina\'s platform clonally amplifies fragments into dense spots on a flow cell and reads them base by base using reversible terminators — each cycle adds one fluorescent, blockable nucleotide, snaps an image of the whole surface, and unblocks; hundreds of millions of reads per run made the thousand-dollar human genome a marketing milestone and pushed routine resequencing into clinics and laboratories. Long-read platforms answered the residual problems: Pacific Biosciences watches a single polymerase synthesize DNA in real time, and Oxford Nanopore threads a single DNA strand through a protein pore and reads the ionic-current signature letter by letter — reads tens to hundreds of kilobases long that span repetitive regions, resolve structural variants, and even detect chemical modifications directly. The modern strategy is hybrid: short reads for cheap depth, long reads for scaffolding, and sequencing costs that keep falling past every forecast — from a decade and billions, to weeks and hundreds.',
      },
      {
        kind: 'formula',
        name: 'Shotgun sequencing coverage (Lander-Waterman)',
        latex: 'C = \\frac{N \\cdot L}{G}',
        meaning: 'N reads of average length L give total sequence N times L; dividing by genome size G gives average coverage C. The probability a given base goes unsequenced falls as e to the minus C, so at 30-fold coverage a base is missed with probability e^-30 — effectively never, which is why 30x became the standard depth for human resequencing.',
      },
      {
        kind: 'para',
        text: 'Raw sequence is letters; annotation is the argument about what the letters mean. Gene finding starts with open reading frames — stretches from a start codon to a stop codon without interruption, scanned in all six possible reading frames of the double helix, then filtered by codon usage, length, and consensus signals like promoters and splice sites. Prediction algorithms mark candidates; the verdict usually comes from homology. BLAST — the Basic Local Alignment Search Tool — takes a query sequence and finds, among millions of known sequences, those matching it best, scoring local alignments and reporting an E-value: the number of matches that good expected by chance alone. A new protein sequence that aligns to a family of known enzymes with a tiny E-value inherits not just a name but a testable function. The data behind the search lives in three databases that operate as one: GenBank in the United States, the European Nucleotide Archive, and Japan\'s DDBJ exchange submissions daily, so each is a mirror of the world\'s sequence knowledge, with curated layers like RefSeq and UniProt sitting on top for reliability.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Identifying an Unknown Sequence',
        steps: [
          'The input: a 900-base stretch assembled from a soil-metagenome sample, with no hint of what it encodes.',
          'Scan for structure: an open reading frame of 270 codons appears in one frame, starting from a plausible initiation codon and ending in a stop, with a recognizable ribosome-binding site upstream — probably a protein-coding gene.',
          'Translate and search: the inferred protein sequence goes to BLAST against the protein database. The top hits are a family of bacterial beta-glucosidases, identities around 45-60 percent, E-values near zero — distant but clear kinship.',
          'Check the mechanism: the alignments show the catalytic glutamate residues conserved at exactly the positions the enzyme family\'s chemistry requires — function corroborated, not just name-matched.',
          'Interpret and share: the soil organism likely encodes a cellulose-degrading enzyme worth expressing and testing; the sequence is annotated and deposited with its metadata so the next researcher\'s search finds it too.',
        ],
      },
      {
        kind: 'para',
        text: 'Comparative genomics turns one genome into a measuring instrument for others. Aligned single nucleotides put human and chimpanzee divergence around 1.2 percent, with insertions and deletions pushing total structural divergence higher — a number that depends entirely on what is counted, so it should always be quoted with its method. Synteny — conserved blocks of gene order across species — shows that human chromosome 2 is a head-to-head fusion of two chromosomes that remain separate in the great apes, complete with relic telomere sequence buried at the fusion point; genome architecture records ancestry the way fossils record anatomy. Practically, comparison drives model choice: the large majority of mouse genes have clear human counterparts, often in syntenic blocks, which is why the mouse carries so much of biomedical research — a gene\'s function tested in a conserved syntenic context transfers with reasonable confidence. Distant comparisons do the reverse work: sequences conserved across half a billion years of separation mark functional regions that evolution refused to let drift.',
      },
      {
        kind: 'para',
        text: 'Functional genomics asks when and where each gene works. DNA microarrays put thousands of known sequences on one glass slide; labeled cDNA made from a tissue\'s messenger RNA hybridizes to matching spots, and spot intensity reports each gene\'s expression level — tumor versus normal, treated versus untreated, hour by hour through development. RNA-seq has largely displaced arrays: extract the RNA, convert to cDNA, sequence deeply, map the reads back to the genome, and count them per gene — abundance by arithmetic rather than hybridization physics, with no predefined probes, so novel transcripts and alternative splicing show themselves unasked. The same counting logic scales down to single cells, exposing the mixture of cell types that bulk averages used to blur. Expression data then feed networks: which genes rise and fall together, which regulators sit upstream.',
      },
      {
        kind: 'para',
        text: 'Two sibling fields extend the readout past RNA. Proteomics inventories the proteins themselves — largely by mass spectrometry, digesting protein mixtures into peptides, measuring their masses, and matching them back to predicted gene products, while catching the modifications (phosphorylation, cleavage) that change a protein\'s behavior without touching its gene. Proteins are the working parts, so proteomes often explain what transcript counts cannot. Metabolomics measures the small molecules — the metabolites that are the actual chemistry of a cell, profiled by mass spectrometry and nuclear magnetic resonance; metabolite signatures reveal what is actually happening biochemically, downstream of both genome and proteome (the metabolic pathways being read are the biochemistry lessons\' territory). Genomics names the parts list; proteomics and metabolomics report which parts are installed and running.',
      },
      { kind: 'heading', text: 'Genomes at Work' },
      {
        kind: 'para',
        text: 'Pharmacogenomics is the clinical dividend: prescriptions tuned to genotype. The clearest cases are drug-metabolizing enzymes — a patient classified as an ultrarapid metabolizer of codeine converts it to morphine so fast that a standard dose becomes an overdose risk, while a poor metabolizer gets no pain relief at all; similar variants in thiopurine metabolism and clopidogrel activation now carry pre-treatment genotyping recommendations on their labels. Genome data also disciplines drug development: a candidate drug\'s target can be validated against family databases, population variation can predict who will respond, and off-target sequence searches can flag risks before a molecule ever reaches people. The direction of travel is toward prescribing as a matched pair — the drug and the genome it will act on.',
      },
      {
        kind: 'para',
        text: 'Finding genes for common disease runs on association at scale. A genome-wide association study compares hundreds of thousands of typed positions across thousands of cases and controls; each variant is tested statistically, and the survivors of that many simultaneous comparisons — visualized as the towers of a Manhattan plot — mark genomic regions where the affected carry a variant more often than the healthy. The hits are rarely the causal variants themselves: because nearby stretches of chromosome are inherited together (linkage disequilibrium, the meiosis-linkage lesson\'s subject grown large), each hit tags a neighborhood, and fine mapping must find the actual culprit — which usually sits in regulatory DNA. Individual effects are small; a handful of variants moves risk measurably only when combined into polygenic scores, which spread risk across populations but remain weak predictors for individuals. The reference variation that makes all of this interpretable came from projects like the 1000 Genomes Project, which sequenced thousands of people across dozens of populations to catalog tens of millions of variants — the yardstick against which any patient\'s genome is read. Beyond the clinic: metagenomics sequences the mixed DNA of whole environments directly — soil, ocean, gut — a field the microbiome lesson develops; DNA barcoding identifies species from short standard loci (mitochondrial COI in animals, rbcL and matK in plants), policing food fraud and wildlife trafficking; and ancient DNA, read from fossil and museum material with painstaking contamination control, has now produced whole Neanderthal genomes — evolution\'s own archive, opened.',
      },
      {
        kind: 'callout',
        title: 'Whose data is it?',
        text: 'A genome cannot be de-identified the way a name can: it is a lifelong identifier shared with every relative, and studies have re-identified supposedly anonymous participants from public databases and consumer-genetics uploads — the same technique that has solved decades-old criminal cases. Insurers and employers are the classic worry; many jurisdictions bar the use of genetic test results in health coverage, though life and disability insurance are often exempt. Participating in genomics today is closer to donating data than to taking a test: broad consent, shared databases, and questions that will outlive the donors.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Pandemic surveillance sequenced pathogen genomes by the thousands, tracking variant sweeps in near real time and guiding vaccine updates.',
          'Rare-disease medicine now ends many multi-year diagnostic odysseys in infancy, when genome sequencing finds a Mendelian cause in a large share of cases.',
          'Dozens of drugs carry genomic prescribing guidance; pre-treatment genotyping for certain chemotherapies and blood thinners is routine practice.',
          'DNA barcoding polices the food supply and wildlife trade — mislabeled fish, protected timber, and adulterated herbal products all fall to a short standardized locus.',
          'Consumer ancestry and health reports, built on SNP arrays and reference panels like the 1000 Genomes, have made population genetics a household activity — with the privacy trade-offs noted above.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Genome and genes are not synonyms — the genome is the whole library; protein-coding genes are a small shelf of it. Chimp-human similarity shifts with the method: aligned single bases differ by about 1.2 percent, but insertions, deletions, and rearrangements raise the structural figure, so quote the number with its recipe. GWAS hits tag neighborhoods through linkage disequilibrium — they are signposts, not proven causes. And annotation is inference: gene models carry errors, and predictions propagate through databases like any rumor until experiment retires them.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Bermuda Principle', def: 'The Human Genome Project policy of releasing sequence data to public databases within 24 hours.' },
          { term: 'Whole-genome shotgun sequencing', def: 'Assembling a genome from massive random fragments by computational overlap alone.' },
          { term: 'Open reading frame', def: 'A start-to-stop codon stretch that could encode protein; the raw material of gene prediction.' },
          { term: 'BLAST', def: 'The homology search tool that finds a query sequence\'s closest known relatives by local alignment.' },
          { term: 'E-value', def: 'The number of matches as good as the observed one expected by chance; lower means more convincing.' },
          { term: 'Synteny', def: 'Conserved blocks of gene order across species, evidence of shared ancestry.' },
          { term: 'RNA-seq', def: 'Expression profiling by sequencing cDNA and counting reads per gene — abundance without probes.' },
          { term: 'Proteomics', def: 'The large-scale inventory of proteins, chiefly by mass spectrometry, including their modifications.' },
          { term: 'Metabolomics', def: 'The profiling of small-molecule metabolites that report a cell\'s actual running chemistry.' },
          { term: 'Pharmacogenomics', def: 'Tailoring drug choice and dose to a patient\'s genomic variants.' },
          { term: 'Genome-wide association study', def: 'A case-control scan of variants across the genome that flags regions associated with a trait.' },
          { term: 'DNA barcoding', def: 'Species identification from a short standardized sequence locus.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The Bermuda Principle required Human Genome Project laboratories to:',
            options: ['publish only finished chromosomes', 'release sequence data to public databases within 24 hours', 'patent genes as found', 'sequence only protein-coding regions'],
            answer: 1,
            explain: 'The 1996 policy forced daily data release, making the genome a public commons and preempting gene-by-gene patenting from the public effort.',
          },
          {
            q: 'Among the biggest surprises in the finished human sequence was that:',
            options: ['humans carry about 100,000 genes', 'protein-coding genes number only about 20,000 and under 2 percent of DNA codes for protein', 'the genome contained no repetitive DNA', 'all genes sat on one chromosome'],
            answer: 1,
            explain: 'The count came in near 20,000 — barely above a roundworm\'s — and most of the genome is non-coding, with regulation, not gene number, carrying complexity.',
          },
          {
            q: 'In a BLAST result, a lower E-value means:',
            options: ['a weaker match', 'fewer matches this good expected by chance — stronger evidence of homology', 'the query sequence is shorter', 'the alignment is older'],
            answer: 1,
            explain: 'The E-value is the expected count of chance matches at that score; near-zero values mean the observed similarity is essentially unexplainable by chance, so shared ancestry is inferred.',
          },
          {
            q: 'RNA-seq has largely displaced microarrays because it:',
            options: ['requires no reverse transcription', 'measures abundance by counting reads and needs no predefined probes, revealing novel transcripts', 'never needs replication', 'works on proteins directly'],
            answer: 1,
            explain: 'Counting mapped reads gives abundance directly, with wider dynamic range and no probe library — so unannotated genes and splice isoforms appear instead of being invisible.',
          },
          {
            q: 'A GWAS hit falling in a non-coding region most likely:',
            options: ['codes for a new protein', 'tags a causal or regulatory variant through linkage disequilibrium', 'proves causation outright', 'marks a sequencing error'],
            answer: 1,
            explain: 'Association studies find markers inherited together with the causal variant; because most common-trait signals are regulatory, the hit usually flags a control region that fine mapping must pin down.',
          },
          {
            q: 'Before prescribing a drug metabolized by a variable enzyme, pharmacogenomics would first:',
            options: ['sequence the entire genome of the pathogen', 'genotype the patient\'s drug-metabolizing enzyme to tune choice and dose', 'run a BLAST search against the enzyme', 'measure the drug by mass spectrometry in a bioreactor'],
            answer: 1,
            explain: 'Pharmacogenomics reads the patient\'s own variants — in enzymes and transporters — and adjusts prescribing before exposure, the clinical dividend of the sequence era.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the recombinant-DNA lesson for Sanger chemistry and libraries, and the biotechnology applications lesson for what sequence data is used to build. The evolution lessons pick up comparative genomics at the phylogenetics end; the microbiome lesson takes metagenomics from here; the CRISPR lesson stands at the editing frontier this reading made possible.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'The Human Genome Project (1990-2003) sequenced all three billion bases, mapping genes and funding ethics alongside the biology.',
          'The public BAC-by-BAC consortium and Celera\'s shotgun wager published drafts in 2001; the Bermuda Principle kept every base a public good.',
          'The surprises: about 20,000 genes, under 2 percent coding, half the genome repetitive — and the non-coding majority rich in regulation.',
          'Sequencing fell from billions to hundreds of dollars per genome as capillaries gave way to Illumina\'s reversible terminators and long-read platforms.',
          'Annotation finds reading frames; BLAST assigns function by homology; GenBank, ENA, and DDBJ share one daily-synced record of the world\'s sequences.',
          'Comparative, functional, proteomic, and metabolomic layers read sequence into biology — while pharmacogenomics, GWAS, barcoding, and metagenomics put whole genomes to work.',
        ],
      },
    ],
  },
  {
    id: 'bio-markers-qtl-mapping',
    title: 'Genetic Markers: DNA Landmarks, Marker Maps and QTL',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Genomics',
    tier: 'advanced',
    concepts: [
      'Molecular markers: neutral polymorphic landmarks',
      'Length variants versus nucleotide-identity variants',
      'RFLP, SSR/VNTR and SNP: three marker generations',
      'Codominant molecular phenotypes scored in any tissue',
      'Linkage maps built from marker recombination',
      'Marker-assisted selection in breeding',
      'QTL mapping: locating the loci behind continuous traits',
      'Resolution limits: a QTL is a region, not a gene',
    ],
    words: 1662,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The biotechnology lessons in this chapter built the tools — restriction enzymes, PCR, cloning. This lesson builds the map. Hidden in almost every genome sit millions of positions where individuals differ for no functional reason at all, and these harmless variants turn out to be genetics\u2019 most valuable infrastructure: mileposts for mapping genes, fingerprints for forensics, and measuring sticks for breeding. Molecular markers obey exactly the Mendelian inheritance rules this book opened with — they are ordinary loci that happen to be scored as DNA bands instead of flower colors — and that single fact is what makes modern gene mapping, from linkage maps to the loci behind crop yield, possible.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every linkage map ever printed, every forensic DNA profile, every disease-gene association and most modern plant and animal breeding decisions run on molecular markers. The technology has moved through three generations — RFLP to microsatellite to SNP — but the logic never changed: find a variant, follow its inheritance, and let recombination tell you where things are.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Compare the genomic DNA of any two unrelated people and millions of positions differ. Most of those differences are functionally silent — they sit in DNA that encodes neither proteins nor regulatory instructions, so selection neither favors nor removes them, and they persist as polymorphisms. That neutrality is the magic: a marker can be scored in any tissue at any developmental stage, needs no knowledge of what it does, and can be genotyped by the millions without worrying about dominance, epistasis or environment. Each variant acts as an allele of a single locus with a MOLECULAR phenotype — a band on a gel, a fluorescent signal, a base call — and because heterozygotes can be distinguished from both homozygotes, marker alleles are codominant, which classical visible traits rarely manage.',
      },
      {
        kind: 'para',
        text: 'Markers divide into two families by what varies. LENGTH variants change how much DNA sits between two fixed points: RFLPs (restriction fragment length polymorphisms) change a restriction-enzyme cutting site, so digesting DNA and probing a Southern blot yields fragments of different sizes; SSRs and VNTRs are tandem repeats whose repeat COUNT drifts through replication slippage and unequal crossing over, read by PCR with flanking primers — the same logic the recombinant-DNA lesson already owns for forensic identity testing, where VNTR repeat units are simply the larger cousins of SSRs. IDENTITY variants change which BASE sits at a position without changing length: SNPs (single nucleotide polymorphisms), the most abundant markers of all, now genotyped by hybridization arrays thousands to millions at a time. Three generations — RFLP in the 1980s, microsatellites through the 1990s, SNPs since — each multiplied the marker density available for the same genetics.',
      },
      {
        kind: 'para',
        text: 'Linkage maps come straight out of the recombination logic the meiosis-and-linkage lesson established: recombination frequency between two markers estimates their map distance, and pairwise distances across many markers chain into a chromosome-wide map — the same RF-per-cent approach, now with thousands of neutral mileposts instead of a handful of visible mutants. Modern maps went further: because markers are dense and neutral, a mapping population recombines a thousand times over, and any gene sits within a fraction of a centimorgan of a marker. That is what turned chromosome walking from an epic into a routine, and what let sequencing projects anchor their contigs to a genetic frame.',
      },
      {
        kind: 'para',
        text: 'Breeding may be the largest commercial application. In marker-assisted selection, a breeder genotypes seedlings for markers linked to a valuable allele — disease resistance, drought tolerance — and keeps or discards plants by MARKER genotype before the trait could ever be seen in the field. The savings are brutal arithmetic: for trees with a decade to first flowering, marker selection collapses generations into seasons; for disease resistance, a marker test replaces a greenhouse inoculation campaign. Gene pyramiding — stacking several resistance genes whose effects are indistinguishable in the field — is only possible marker-first, because the markers, unlike the phenotypes, tell the alleles apart. Introgression breeding uses the same logic in reverse: markers flag which chromosome segments still carry the wild parent\u2019s baggage, so breeders can minimize the linked drag while keeping the trait.',
      },
      {
        kind: 'para',
        text: 'Quantitative trait locus (QTL) analysis attacks the traits that Mendelian ratios never touched — yield, height, blood pressure — where variation is continuous and environmental. The beyond-Mendel lesson already owns the additive-loci arithmetic that makes many genes produce a bell curve; QTL mapping answers the next question: WHERE are those genes? Cross two parents that differ in the trait, let the progeny recombine, then ask for each marker: do progeny carrying allele A of this marker average heavier (or taller, or sweeter) than allele-B siblings? A marker that sorts with the phenotype tags a chromosomal neighborhood harboring a contributing gene, and the strength of the association, judged against a LOD-score threshold, grades the evidence. Repeat across hundreds of markers and the genome yields its hotspots — QTL — each a confidence interval on a chromosome, not a gene.',
      },
      {
        kind: 'para',
        text: 'That last caveat is the craft. A QTL interval from a few hundred progeny may span tens of genes; fine mapping (more markers, more recombinants) and then sequencing narrow it to candidates, and only a complementation test or transgenic proof names the gene. Association studies in natural populations — the genome-wide kind the genomics lesson touches — swap controlled crosses for historical recombination, trading cleaner causality for far finer resolution; either way the hit is a TAG, linked by population history, not a proven cause. The honest summary of the field: markers locate, they do not explain — but location is where explanation starts.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Additive genotype means at a QTL',
        latex: '\\bar{y}_{AA} - \\bar{y}_{Aa} = \\bar{y}_{Aa} - \\bar{y}_{aa} = a',
        meaning: 'For a purely additive QTL, each favorable allele adds the same increment a to the trait mean — the signature that lets marker-phenotype association detect a real locus rather than noise.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: an F2 plant population of 200 individuals is genotyped at a marker and weighed for fruit mass. Does the marker tag a QTL?',
          'Group by marker genotype: AA plants (n=51) average 82 g; Aa (n=98) average 80 g; aa (n=51) average 61 g.',
          'Check additivity: 82 \u2212 80 = 2 g but 80 \u2212 61 = 19 g — not equal, so the local pattern is not purely additive; but the AA-versus-aa contrast is 21 g against within-group scatter of about 8 g, a separation far too clean for chance.',
          'Test: the genotype-weight association clears a genome-scan LOD threshold (well above 3), so the marker tags a QTL whose favorable allele contributes roughly 10 g per copy on average.',
          'Interpret: the QTL interval now anchors fine mapping. The marker itself does nothing to the fruit — it is a milepost — but selection on it drags the linked favorable allele along, which is exactly what marker-assisted breeding does.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Marker-assisted backcrossing that moves a resistance gene into an elite variety in three seasons instead of ten',
          'Gene pyramiding of multiple disease-resistance alleles that no field trial could tell apart',
          'Seed-identity and purity testing for commercial lots — variety fraud detected by marker profiles',
          'Conservation and zoo genetics: parentage, heterozygosity and population-structure measurement (the population-genetics lesson owns what the numbers mean)',
          'Forensic and paternity identity testing — the recombinant-DNA lesson owns the STR mechanics; markers are the loci it consumes',
          'QTL-to-gene pipelines behind cloned crop genes for yield, submergence tolerance and cooking quality',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not call a QTL a gene — it is a chromosome interval whose confidence shrinks only with more recombinants. Do not expect a marker association from one population to travel to another — linkage phases differ. Do not confuse the marker\u2019s neutrality with uselessness — being silent is WHY millions of them can be scored at once. And never forget genotyping error: a 2 percent assay error can masquerade as recombination and quietly inflate a map.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Molecular marker', def: 'A neutral, polymorphic DNA locus scored by molecular assay — the mileposts of genome mapping.' },
          { term: 'RFLP', def: 'Restriction fragment length polymorphism — a gained or lost restriction site read as Southern-blot band sizes; the first genome-wide marker system.' },
          { term: 'SSR / VNTR', def: 'Tandem-repeat length polymorphisms — PCR-read microsatellites (SSRs) and their larger-unit cousins (VNTRs), codominant and abundant.' },
          { term: 'SNP', def: 'Single nucleotide polymorphism — the most common marker class, genotyped in parallel by the millions on hybridization arrays.' },
          { term: 'Marker-assisted selection', def: 'Choosing breeding stock by linked marker genotype instead of waiting for the phenotype to express.' },
          { term: 'QTL', def: 'Quantitative trait locus — a marker-tagged chromosome interval containing one or more genes contributing to a continuously varying trait.' },
          { term: 'LOD score', def: 'Logarithm-of-odds evidence for linkage or association; QTL claims clear a threshold (about 3) to survive genome-scan significance testing.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Molecular markers are useful mainly because they are:',
            options: [
              'always inside genes that matter',
              'numerous, phenotypically silent and codominant — scorable in any tissue without knowing their function',
              'immunogenic',
              'identical between individuals',
            ],
            answer: 1,
            explain: 'Neutrality plus density plus codominance is the book\u2019s own list — silent variants can be scored by the million without confounding.',
          },
          {
            q: 'An RFLP differs from a SNP in that an RFLP:',
            options: [
              'changes a base without changing length',
              'changes a restriction-enzyme cut site, altering fragment LENGTHS read on a blot',
              'only exists in plants',
              'cannot be inherited',
            ],
            answer: 1,
            explain: 'RFLPs are length variants (restriction-site gain or loss); SNPs are single-base identity variants of unchanged length — the two marker families.',
          },
          {
            q: 'Marker-assisted selection accelerates breeding because:',
            options: [
              'markers mutate faster than genes',
              'seedlings can be chosen by marker genotype years before the trait could be observed in the field',
              'markers replace water and fertilizer',
              'markers eliminate recombination',
            ],
            answer: 1,
            explain: 'Genotype-before-phenotype collapses generation time — decisive for trees and hard-to-assay traits like disease resistance.',
          },
          {
            q: 'A QTL mapping hit means:',
            options: [
              'the exact causal gene has been identified',
              'a chromosome interval tagged by the marker probably contains one or more genes affecting the trait',
              'the trait is purely environmental',
              'the marker itself causes the trait',
            ],
            answer: 1,
            explain: 'A QTL is a region with a confidence interval; fine mapping and functional proof are needed before a gene is named.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-crispr-gene-editing',
    title: 'CRISPR and the Mechanics of Gene Editing',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Molecular Genetics',
    tier: 'advanced',
    concepts: [
      'Bacterial adaptive immunity, repurposed',
      'Guide RNA design and targeting',
      'The PAM requirement',
      'Double-strand breaks and repair: NHEJ versus HDR',
      'Base editing and prime editing',
      'Off-target effects',
      'Delivery and therapeutic applications',
    ],
    words: 1169,
    readMins: 6,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'CRISPR-Cas9 turned genome editing from a specialist craft into a programmable routine. In Molecular Genetics the system is understood as a bacterial immune memory repurposed: a guide RNA matching twenty letters of target DNA directs the Cas9 nuclease to make a precise double-strand break, and the cell\u2019s own repair machinery finishes the edit. This topic walks the full mechanism — targeting, cutting, and repair — and follows it into the clinic.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Approved therapies now edit blood stem cells to treat sickle-cell disease, while agriculture, diagnostics, and thousands of research labs run on the same machinery. Understanding CRISPR is understanding the most consequential biotechnology of the decade.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Bacteria store fragments of invading phage DNA between clustered repeats in their genome; transcribed later, these fragments guide Cas nucleases to cut the same sequence should it return. It is acquired immunity in a single-celled organism — a memory written directly into heritable DNA. The immune memory works in three stages. Adaptation: after surviving an infection, the bacterium splices a short piece of the viral genome — a spacer, cut from the viral segment called the protospacer — into its CRISPR array between the repeats. crRNA biogenesis: on re-infection the array is transcribed and processed so each mature guide carries one spacer. Interference: the guide–tracrRNA–Cas9 complex scans incoming DNA for a protospacer sitting beside its PAM motif and cuts it — the host\u2019s own chromosome lacks PAMs beside those stored sequences, which is why the cell never cuts itself. The laboratory system keeps the interference stage and lets the experimenter write the spacer.',
      },
      {
        kind: 'para',
        text: 'Engineers collapsed the natural two-RNA system into one synthetic guide: twenty targeting nucleotides fused to a scaffold that grips Cas9. Rewriting those twenty letters retargets the entire editing machine, which is why guide design is the everyday skill of CRISPR work.',
      },
      {
        kind: 'para',
        text: 'Cas9 only cuts beside a protospacer-adjacent motif — the short NGG sequence recognized by the common SpyCas9 — which the protein must bind before it unwinds and interrogates DNA. No PAM, no edit; where usable PAMs sit constrains every targeting plan.',
      },
      {
        kind: 'para',
        text: 'Making the break is the easy part; the edit depends on which repair pathway picks up the pieces. Non-homologous end joining glues ends back together, often adding or deleting letters — ideal for knocking a gene out. Homology-directed repair copies from a supplied template, enabling precise replacement but working efficiently mainly in dividing cells.',
      },
      {
        kind: 'para',
        text: 'Newer editors avoid the double-strand break entirely: base editors chemically convert C·G pairs to T·A (or A·T to G·C) within a small window, and prime editors write a search-and-replace sequence using a reverse transcriptase. They trade some flexibility for a dramatically cleaner safety profile.',
      },
      {
        kind: 'para',
        text: 'A guide with close matches elsewhere in the genome can cut those sites too, creating unintended mutations. Careful guide selection, high-fidelity Cas variants, and whole-genome checking are how that off-target risk is managed before any clinical use.',
      },
      {
        kind: 'para',
        text: 'Finally, the editor must physically reach its cells: lipid nanoparticles deliver to liver cells, engineered viruses such as AAV reach tissues like the eye and nervous system, and blood stem cells are often edited outside the body and returned. Delivery, not cutting, is the pacing problem for most therapies.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how a therapy edits blood stem cells to reactivate fetal hemoglobin in sickle-cell disease.',
          'Recall the governing idea: a guide RNA plus Cas9 creates a targeted break, and error-prone repair disrupts the chosen regulatory element.',
          'Apply: a guide is designed against an erythroid enhancer of the BCL11A gene, screened for sites with no near-perfect matches elsewhere; Cas9 cuts, and non-homologous end joining introduces small insertions or deletions that silence the enhancer in red-cell precursors.',
          'State the result: BCL11A repression lifts, fetal hemoglobin rises, and the resulting red cells resist sickling — the mechanism behind the first approved CRISPR therapy.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Sickle-cell disease and beta-thalassemia are treated by editing blood stem cells to raise fetal hemoglobin.',
          'Agriculture uses CRISPR for disease-resistant crops and improved livestock, regulated as conventional products in several countries.',
          'CRISPR-based diagnostics detect viral or genetic sequences with a simple visible readout.',
          'Research labs knock out genes in cell lines and organisms at scale to expose gene function.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The recurring error is imagining CRISPR pastes in a new gene at will — routine edits are far easier to break than to write, and template-guided precision still fails in most non-dividing cells. A second misconception is treating CRISPR as risk-free; off-target cuts are rare but real, which is why clinical candidates are screened so extensively.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Cas9', def: 'An RNA-guided nuclease that cuts both DNA strands at a sequence specified by its guide.' },
          { term: 'Guide RNA', def: 'A roughly 20-nucleotide targeting sequence fused to a Cas-binding scaffold.' },
          { term: 'PAM', def: 'The protospacer-adjacent motif (NGG for SpyCas9) required beside the target site.' },
          { term: 'NHEJ', def: 'Non-homologous end joining — fast, error-prone repair useful for gene knockout.' },
          { term: 'HDR', def: 'Homology-directed repair — template-guided repair enabling precise sequence replacement.' },
          { term: 'Off-target effect', def: 'An unintended edit at a genomic site similar to the intended target.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'What does the PAM sequence do in CRISPR-Cas9 editing?',
            options: ['It is the exact cut site itself', 'It is a motif Cas9 must recognize adjacent to the target before cutting', 'It signals the cell to start repairing', 'It forms the guide RNA scaffold'],
            answer: 1,
            explain: 'Cas9 binds the PAM first, then unwinds the adjacent DNA to check for guide complementarity; without a PAM there is no edit.',
          },
          {
            q: 'Which repair pathway would you rely on to knock out a gene?',
            options: ['Homology-directed repair with a perfect template', 'Non-homologous end joining, which introduces disruptive insertions and deletions', 'Base excision repair', 'Mismatch repair'],
            answer: 1,
            explain: 'NHEJ is error-prone by nature, and those small errors are exactly what scrambles a coding sequence into a nonfunctional one.',
          },
          {
            q: 'Prime editing differs from standard CRISPR-Cas9 mainly because it:',
            options: ['Uses a longer guide RNA only', 'Searches and replaces sequence without making a double-strand break', 'Cannot be targeted to chosen sites', 'Works only in bacteria'],
            answer: 1,
            explain: 'Prime editing nicks one strand and writes the edit with a reverse transcriptase, avoiding the double-strand break that risky repair pathways respond to.',
          },
          {
            q: 'A likely source of unintended mutations in CRISPR editing is:',
            options: ['The guide cutting similar off-target sites elsewhere in the genome', 'Using too many nucleotides in the cell', 'The PAM disappearing after the cut', 'RNA degradation inside the nucleus'],
            answer: 0,
            explain: 'Guides with close matches at other loci can direct Cas9 to cut there too; whole-genome screening checks for exactly this.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: DNA structure, transcription, and translation at core level. After this topic, move on to gene-therapy delivery platforms, epigenetic editing, and the ethics of germline versus somatic editing — the science is only half of the conversation.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'CRISPR-Cas9 is a bacterial immune system repurposed for programmable genome editing.',
          'A 20-letter guide RNA retargets the nuclease, and a PAM must sit beside the target.',
          'The break is easy; the edit depends on repair — NHEJ disrupts, HDR rewrites.',
          'Base and prime editors avoid double-strand breaks for safer small edits.',
          'Off-target effects and delivery remain the engineering frontier.',
        ],
      },
    ],
  },
  {
    id: 'bio-cancer-genetics-oncogenes',
    title: 'Cancer Genetics: Oncogenes, Tumor Suppressors and Targeted Therapy',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Molecular Genetics',
    tier: 'advanced',
    concepts: [
      'Cancer as clonal evolution driven by accumulated mutations',
      'Oncogenes: proto-oncogenes turned gain-of-function',
      'Tumor suppressor genes and the two-hit rule',
      'Chromosome translocations that manufacture cancer genes',
      'Mutagens and carcinogens as the raw feedstock',
      'Gleevec: rationally designed targeted therapy',
    ],
    words: 1538,
    readMins: 8,
    addedOn: '2026-10-29',
    blocks: [
      {
        kind: 'para',
        text: 'Every cancer begins as a genetics problem inside a single cell. The meiosis lesson tracked mutations passed through the germline; this lesson follows mutations that arise in somatic cells and are never inherited at all — yet they rewrite the cell\u2019s own control circuitry so thoroughly that its descendants take over the body. Cancer genetics is the bookkeeping of that rebellion: which genes, in which order, and why the same handful of pathways keeps showing up in tumors of wildly different tissues. The clinical picture — staging, metastasis, treatment — belongs to the medicine lesson; this one is the mechanism underneath it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Cancer is a leading cause of death worldwide, and every modern therapy that works rationally — from HER2 antibodies in breast cancer to the imatinib pill that turned chronic myeloid leukemia from a fatal disease into a daily tablet — was designed backward from a genetic mechanism. Reading a tumor report today means reading its genes.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The first organizing idea is clonal evolution. A tumor is a population descended from one original mutant cell, and its growth is Darwinian: each additional mutation that speeds division or dodges death lets that lineage outgrow its neighbors, so the strongest variants accumulate. That is why cancer is overwhelmingly a disease of aging tissues — the mutational baggage must be collected over years of cell divisions, and why the body\u2019s normal failure modes matter: a cell that slips past the G1 checkpoint with damaged DNA, the cell-cycle lesson\u2019s central warning, is the seed of the whole process. Cancers are classified by the tissue they arise from — carcinomas from epithelium, sarcomas from connective tissue, leukemias and lymphomas from blood-forming cells — but the genetic logic underneath the classification is shared.',
      },
      {
        kind: 'para',
        text: 'The second idea is the oncogene. A proto-oncogene is a normal gene that pushes cell division forward — a growth factor, a growth-factor receptor, a signal transducer such as RAS, or a transcription factor such as MYC. Cancer can hijack one in three characteristic ways. A point mutation can make the protein hyperactive and unregulated — RAS genes are locked into their GTP-bound ON state in a large share of human tumors. Gene amplification can overproduce the protein — HER2 copies multiply in some breast cancers. And a chromosome rearrangement can weld two genes together: a reciprocal translocation between chromosome 9 and chromosome 22, visible in karyotypes as the shortened Philadelphia chromosome, fuses BCR with ABL to build a constitutively firing kinase that drives chronic myeloid leukemia. All three routes are gain-of-function, and all three behave dominantly at the cellular level: one altered copy is enough, because a hyperactive accelerator cannot be turned down by the good copy on the other homolog.',
      },
      {
        kind: 'para',
        text: 'The third idea is the mirror image: tumor suppressor genes, the brakes. Their cancer-causing mutations are losses of function, and they behave recessively at the cellular level — one working copy usually suffices, which is why both copies must be knocked out before the brake fails. Alfred Knudson drew the consequence in his two-hit hypothesis for retinoblastoma, the childhood eye tumor: children who inherit one defective RB1 allele need only one further somatic hit in any retinal cell, so their tumors appear early and often in both eyes, while children born with two good copies need two independent hits in the same cell line — vastly rarer — so their tumors are rare, late, and unilateral. The RB1 protein gates the G1-to-S transition, and p53 — the guardian of the genome — halts division or triggers apoptosis when DNA is damaged, which is why TP53 is the single most frequently mutated gene in human cancer. BRCA1 and BRCA2 are DNA-repair genes: inheriting one defective copy does not cause cancer by itself but stacks the two-hit deck, the logic behind genetic testing for breast and ovarian cancer risk.',
      },
      {
        kind: 'para',
        text: 'Where does the damage come from? From mutagens and carcinogens — the agents that create the somatic mutations the two classes of genes collect. The letter-level chemistry (tautomeric shifts, deamination, oxidative lesions) is the mutation-and-repair lesson\u2019s territory; cancer genetics cares about the exposure-to-consequence chain. Tobacco smoke carries a cocktail of DNA-adduct-forming chemicals that explains its fingerprint of mutations in lung tumors; ultraviolet light dimerizes adjacent pyrimidines in skin; aflatoxin from mold-contaminated grain prefersentially mutates TP53 in liver. Because the hits accumulate in somatic tissue over a lifetime, exposure control — the largest share of preventable-cancer public health — is population genetics applied to mutation rates.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Reading a Two-Hit Risk',
        steps: [
          'Model the retinoblastoma gene: RB1/RB1 is healthy; one lost copy (RB1/−) leaves the brake partly working; two lost copies (−/−) in the same retinal cell-line release the tumor.',
          'Hereditary case: the child is born RB1/− in every cell. Each of the roughly one million retinal cells needs exactly one further hit to finish the job — so multiple independent tumors are likely, appearing early, often bilateral.',
          'Sporadic case: both hits must land in the same cell lineage by chance during childhood — two rare events multiplied, so the tumor is rare, appears later, and is unilateral.',
          'Read the clinic backward: bilateral or multifocal disease in an infant implies a germline first hit, which changes counseling — the parents, and later the child, face a 50 percent chance of passing the predisposing allele to each offspring.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Targeted therapy designed from the mechanism: imatinib (Gleevec) was built to sit in the BCR-ABL fusion kinase\u2019s ATP-binding pocket and jam it — the textbook\u2019s poster child for genetic research leading to a cancer treatment, and the reason chronic myeloid leukemia became a manageable chronic disease.',
          'Resistance monitoring: imatinib\u2019s patients relapse when the kinase mutates inside the drug\u2019s binding pocket — the same selection logic the antibiotic-resistance lesson documents in bacteria, answered with second-generation inhibitors.',
          'Hereditary cancer clinics: two-hit logic plus BRCA1/2 testing turns family histories into surveillance and prevention decisions.',
          'Karyotyping and FISH find the Philadelphia chromosome and HER2 amplification directly — cytogenetics doing diagnostic work in the oncology ward.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Oncogenes and tumor suppressors behave in opposite ways: gain-of-function is dominant in the cell, loss-of-function is recessive — memorizing the names without the directions is the classic exam error. Inheriting a predisposing allele is not inheriting cancer: penetrance is incomplete, and the second hit is still a matter of chance. And a tumor\u2019s mutations are somatic — the patient\u2019s children inherit nothing from them unless the change sits in the germline.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Proto-oncogene', def: 'A normal gene that promotes cell growth and division; the raw material an oncogene is made from.' },
          { term: 'Oncogene', def: 'A hyperactive or recombined version of a proto-oncogene — growth signaling stuck ON, dominant at the cellular level.' },
          { term: 'Tumor suppressor gene', def: 'A gene whose product restrains division or maintains the genome; cancer requires losing both copies.' },
          { term: 'Two-hit hypothesis', def: 'Knudson\u2019s model: both alleles of a suppressor must be inactivated in one cell lineage for the brake to fail.' },
          { term: 'Philadelphia chromosome', def: 'The shortened chromosome 22 created by a 9;22 translocation, carrying the BCR-ABL fusion kinase of chronic myeloid leukemia.' },
          { term: 'Mutagen / carcinogen', def: 'An agent that damages DNA / an agent that promotes cancer — overlapping sets whose exposure history shapes a tumor\u2019s mutations.' },
          { term: 'Targeted therapy', def: 'A drug designed against a specific cancer mechanism, such as imatinib against the BCR-ABL kinase.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A single altered copy of RAS is enough to push a cell toward cancer, while both copies of TP53 must be lost. The reason is that RAS acts as:',
            options: [
              'a gain-of-function oncogene, dominant at the cellular level',
              'a loss-of-function tumor suppressor',
              'a gene on the X chromosome',
              'a gene repaired by BRCA1',
            ],
            answer: 0,
            explain: 'A hyperactive accelerator cannot be dialed down by the normal copy — gain-of-function is dominant. TP53 must lose both copies: loss-of-function is recessive in the cell.',
          },
          {
            q: 'A child with retinoblastoma has tumors in both eyes diagnosed at six months. The most likely genetic situation is:',
            options: [
              'two somatic hits landed in the same cell by pure chance',
              'an inherited germline RB1 mutation, so every cell is one hit short',
              'exposure to a mutagen during pregnancy',
              'an oncogenic amplification of MYC',
            ],
            answer: 1,
            explain: 'Early, bilateral, multifocal disease is the hereditary (one-hit-short) pattern of the two-hit hypothesis; the sporadic two-hit path is rare, late, and unilateral.',
          },
          {
            q: 'The Philadelphia chromosome arises from:',
            options: [
              'nondisjunction of chromosome 21',
              'a reciprocal translocation between chromosomes 9 and 22 that fuses BCR with ABL',
              'deletion of both TP53 copies',
              'amplification of the HER2 gene',
            ],
            answer: 1,
            explain: 'A structural rearrangement — not a number change — welds two genes into a constitutive kinase; the fusion protein is the target of imatinib.',
          },
          {
            q: 'Patients treated with imatinib can relapse when:',
            options: [
              'the tumor amplifies the TP53 gene',
              'mutations alter the BCR-ABL kinase pocket so the drug no longer binds',
              'the Philadelphia chromosome spontaneously disappears',
              'germline resistance alleles spread through the population',
            ],
            answer: 1,
            explain: 'Selection in the tumor for kinase variants that survive the drug mirrors antibiotic resistance — the mechanism, not the drug, decides the escape route.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The cell-cycle lesson owns the checkpoint machinery these genes police; the mutation-and-repair lesson owns the chemical damage they accumulate; the medicine lesson carries the clinical course — staging, metastasis, and treatment from the patient\u2019s side. The CRISPR lesson is where targeted editing of disease genes is heading next.',
        tone: 'path',
      },
    ],
  },
]
