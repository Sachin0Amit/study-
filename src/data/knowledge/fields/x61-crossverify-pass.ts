import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X61 pass (2026-10-26): CROSSVERIFY-20261026-6 — Genetics &         */
/*  Heredity cross-verified vs Todd Nickle & Isabelle Barrette-Ng,     */
/*  "Online Open Genetics" (Mount Royal University & University of     */
/*  Calgary, LibreTexts edition 2022-23, CC BY-SA 3.0 — the standard   */
/*  OPEN genetics textbook; the most popular commercial texts —        */
/*  Pierce's Genetics: A Conceptual Approach, Griffiths' Introduction  */
/*  to Genetic Analysis, Brooker — have no freely accessible legal     */
/*  PDF, and this book is the most-adopted open equivalent, in use on  */
/*  university syllabi). The full book (13 chapters, 104 pages) was    */
/*  read IN FULL from LibreTexts' official chapter pages after the     */
/*  export service refused (same pattern as the Biochemistry run):     */
/*  Ch1 DNA/genes, Ch2 chromosomes/mitosis/meiosis, Ch3 single genes,  */
/*  Ch4 mutation, Ch5 pedigrees/populations, Ch6 multiple genes,       */
/*  Ch7 linkage & mapping, Ch8 molecular techniques, Ch9 chromosome    */
/*  changes, Ch10 markers/QTL, Ch11 genomics, Ch12 regulation,         */
/*  Ch13 cancer genetics.                                              */
/*                                                                     */
/*  VERDICT: zero factual corrections needed across all 9 existing
/*  lessons (details in the pass history); NOTE this run CONVERGED with
/*  a parallel session (commit afebd14) that had already cross-verified
/*  the same subject from a companion OER remix and added the
/*  cytogenetics + Muller-morphs + penetrance/chi-square lessons — so
/*  THIS pass drops its own duplicate cytogenetics lesson and Mendel
/*  chi-squared enrichment (zero-repetition rule) and ships ONLY the
/*  area the parallel session did not cover:
/*  1 missing subtopic area added as this pass (+1,662 verified        */
/*  words), WITH a 4-question quiz incl. explanations per the user's   */
/*  explicit requirement:                                              */
/*  - bio-markers-qtl-mapping fills book Ch10 (neutral polymorphism    */
/*    logic, length-vs-identity marker classes RFLP/SSR/VNTR/SNP,      */
/*    codominant molecular phenotypes, marker linkage maps,            */
/*    marker-assisted selection, QTL mapping with continuous           */
/*    variation from additive loci) — 'RFLP', 'QTL', 'marker-assisted' */
/*    had zero live hits even after the parallel session's additions.  */
/*                                                                     */
/*  DEDUP CARVING (verified against EXCLUDED_TOPICS, coverage/         */
/*  COVERAGE.md and greps of the live topic files):                    */
/*  - bio-markers-qtl-mapping is carved against                        */
/*    bio-biotechnology-rdna-processes (which OWNS the enzyme/cloning  */
/*    toolkit AND the STR identity-fingerprinting paragraph — this     */
/*    lesson references those tools as given and defers forensic       */
/*    identity testing in one line), bio-genomics-bioinformatics       */
/*    (which OWNS sequencing/assembly/annotation and the GWAS line —   */
/*    this lesson defers GWAS in one line), bio-beyond-mendel-         */
/*    extensions (which OWNS the polygenic ADDITIVE ARITHMETIC —       */
/*    this lesson owns HOW markers LOCATE the genes behind such        */
/*    traits) and bio-population-genetics (which OWNS allele-frequency */
/*    dynamics — markers only MEASURE them, deferred in one line).     */
/* ------------------------------------------------------------------ */

export const x61CrossverifyGeneticsPassTopics: KnowledgeTopic[] = [
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
]
