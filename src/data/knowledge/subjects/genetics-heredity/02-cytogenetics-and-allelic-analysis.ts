/**
 * Knowledge Universe — Genetics & Heredity — Chapter 02: Cytogenetics & Allelic Analysis
 * 3 lessons · ~10,509 words
 * field: Genetics & Heredity
 * legacy sources: x60-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Cytogenetics, Allelic Analysis]
 *
 * Lessons:
 *   02.1 bio-chromosome-number-structure — Chromosomes Under Glass: Number, Structure and Karyotypes
 *   02.2 bio-alleles-mullers-morphs — What Alleles Do: Wild Type, Muller's Morphs and Complementation
 *   02.3 bio-structural-chromosome-mutations — Chromosome Mutations: Deletions to Inversions
 */
import type { KnowledgeTopic } from '../../types'

export const geneticsHeredityCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bio-chromosome-number-structure',
    title: 'Chromosomes Under Glass: Number, Structure and Karyotypes',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Cytogenetics',
    tier: 'core',
    concepts: [
      'The karyogram: length, centromere position, banding',
      'Euploid versus aneuploid; monosomy and trisomy',
      'Down syndrome and the maternal-age effect',
      'Nondisjunction syndromes of the sex chromosomes',
      'Double-strand breaks and NHEJ misrepair',
      'The four rearrangements: deletion, inversion, duplication, translocation',
      'Balanced versus unbalanced rearrangements',
      'FISH: painting chromosomes with fluorescent probes',
    ],

    words: 2383,
    readMins: 12,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Mendel inferred his factors from ratios alone; cytogenetics is the discipline that put the factors under the microscope and counted them. A karyotype is the number and appearance of an individual's chromosomes — their length, the position of each centromere, and the banding pattern that stains reveal along their length — and the chart into which the chromosomes are arranged is a karyogram. From a single prepared cell, a geneticist can see whether a person carries forty-six chromosomes or forty-seven, whether one of them is missing an arm, or whether two chromosomes have traded pieces with each other. This lesson is the cytogenetic view of heredity: what the chromosomes look like when they misbehave in number and in structure, and how the laboratory catches them doing it. The meiotic mechanics of how counts go wrong belong to the meiosis-and-linkage lesson; here we read the consequences.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Chromosome disorders are characteristically dramatic: because even a small chromosomal segment can span dozens or hundreds of genes, their gain or loss disrupts gene balance wholesale, which is why abnormalities in chromosome number are the leading genetic cause of miscarriage and developmental disability. Structural rearrangements, meanwhile, are implicated in certain cancers — including chronic myelogenous leukemia, where a translocation creates an oncogenic hybrid gene. Karyotyping and its fluorescent successor are, accordingly, standard tools of every prenatal diagnostics unit and cancer cytogenetics lab.",
      },
      {
        kind: 'para',
        text: "Making a karyogram is a small choreography of cell biology. White blood cells are collected and cultured for about three days with a growth factor so they divide actively; then colchicine, a microtubule inhibitor, arrests them in metaphase, when chromosomes are maximally condensed. A hypotonic solution swells the cells so the chromosomes spread apart, a fixative preserves them, and the preparation is dropped onto a slide. Staining with Giemsa dye brings out the banding pattern — roughly 400 to 800 reproducible bands across the 23 chromosome pairs, recognizable to an experienced eye — and a digital image is arranged into the classic display: homologous pairs in numerical order, longest to shortest. Every diagnosis in this lesson begins with this procedure.",
      },
      {
        kind: 'para',
        text: "The vocabulary of counts is precise. An individual with the species-typical chromosome set is euploid; in humans that is 22 pairs of autosomes plus one pair of sex chromosomes. An error in number makes the individual aneuploid, and the two names matter: monosomy is the loss of one chromosome of a pair, trisomy the gain of an extra one. The reason counts are so consequential is gene dosage — cell functions are calibrated to the output of two copies of each gene, so a whole extra or missing chromosome disrupts thousands of calibrated doses at once. Monosomic zygotes missing any autosome invariably fail to develop to birth; most autosomal trisomies fail too. Duplications of some of the smaller chromosomes — 13, 15, 18, 21, 22 — can survive, and among them trisomy 21, Down syndrome, is the most common, with characteristic physical features and delays in growth and cognition. The syndrome carries the name of John Down, who described it in 1866, but its chromosomal basis waited until 1959 to be discovered; part of the cognitive phenotype now traces to having three copies of the DYRK gene, whose excess protein damages neurons in both humans and mice — gene dosage made molecular.",
      },
      {
        kind: 'para',
        text: "The incidence of Down syndrome climbs steeply with maternal age, because the nondisjunction events that produce the extra chromosome 21 become more frequent in older mothers — the meiosis lesson's mechanism, meeting clinical statistics here. Prenatal screening watches for two signals: maternal age and a swelling at the back of the fetus's neck called nuchal translucency on ultrasound; either one can prompt amniocentesis, the withdrawal of a little amniotic fluid so fetal cells can be karyotyped. The sex-chromosome aneuploidies are comparatively tolerable — 45,X Turner syndrome, 47,XXY Klinefelter syndrome, 47,XYY, 47,XXX — partly because X inactivation cushions extra X chromosomes (the counting rule is one Barr body per cell per X beyond the first: zero in 46,XY or 45,X cells, one in 46,XX or 47,XXY, two in 47,XXX). Turner syndrome's health consequences trace in part to the single copy of SHOX, a bone-growth gene in the pseudoautosomal region that everyone else carries in two copies — which is why short stature is its signature.",
      },
      {
        kind: 'para',
        text: "One step further out, whole SETS can be wrong: polyploid individuals carry three or more complete chromosome sets. A diploid egg fertilized by a normal haploid sperm yields a triploid zygote. Polyploid animals are extremely rare — a few flatworms, crustaceans, amphibians, fish and lizards — and triploid animals are sterile, because meiosis cannot proceed normally with an odd number of sets. The plant kingdom is another story: polyploidy is so common there that polyploid plants tend to be larger and more robust than their diploid relatives, a fact plant breeders exploit deliberately.",
      },
      {
        kind: 'formula',
        name: 'Barr-body count',
        latex: '\\text{Barr bodies per cell} = (\\text{number of X chromosomes}) - 1',
        meaning: 'Each X chromosome beyond the first is inactivated as a Barr body, so karyotype and smear agree: 46,XY and 45,X cells show none, 46,XX and 47,XXY show one, 47,XXX shows two.',
      },
      {
        kind: 'para',
        text: "Structure can break without number changing, and the cause is usually a botched repair. A chromosome is a long thin molecule whose backbone can snap; a single-strand nick is routine, but a double-strand break cleaves the chromosome into two pieces. Cells carry a repair system — non-homologous end joining — whose proteins bind broken ends and re-ligate them. One break is usually fixed correctly; telomeres even protect the natural chromosome ends from the machinery. But two simultaneous double-strand breaks leave four broken ends, and if the proteins join the wrong pairs, the chromosome is rearranged. The same four outcomes also arise in meiosis when crossovers form between mispaired repeated sequences — two similar transposable elements, for example, can align out of register, and the crossover then leaves one chromatid with a duplication and one with a deletion.",
      },
      {
        kind: 'para',
        text: "Four rearrangements cover the cases. A deletion arises when both breaks are on one chromosome and the intervening piece — left without a centromere — is lost at the next division; deletion chromosomes never revert, because there is nothing to replace the missing DNA, and the gap lets recessive alleles on the normal homolog show through, a phenomenon called pseudodominance. A duplication adds a second copy of a segment (its reciprocal product is a deletion) and can revert by unequal crossing over; duplicated genes are raw material for evolutionary divergence, since one copy can keep the housekeeping while the other explores. An inversion flips a segment in place — paracentric if it excludes the centromere, pericentric if it includes it — and during meiosis the inverted region loops to pair; a crossover inside a paracentric loop produces a dicentric chromatid (two centromeres, torn at anaphase) and an acentric fragment (no centromere, lost), while a pericentric loop yields duplication-deletion products: either way the recombinant gametes are unbalanced, so inversions appear to suppress crossing over. A translocation swaps segments between non-homologous chromosomes — reciprocal when the pieces exchange, Robertsonian when whole long arms fuse and the tiny short-arm remnant is lost.",
      },
      {
        kind: 'para',
        text: "The clinical hinge is balance. Inversions and reciprocal translocations that neither lose nor gain DNA are balanced rearrangements: all the genes are present, merely reordered, and carriers are usually healthy — inv(9), an inversion of chromosome 9, sits in about two percent of the world's population with no health effect, handed down through generations. Deletions and duplications are unbalanced, and their gene-dose consequences are serious: cri-du-chat syndrome, from a deletion of two megabases or more at the tip of chromosome 5's short arm, brings an improperly formed larynx (infants cry with a cat-like pitch) and intellectual disability, probably because only one copy of the neuron-migration gene CTNND2 remains. Translocation carriers face a reproductive arithmetic: their paired quadrivalent can segregate alternate (balanced gametes) or adjacent-1 (unbalanced), both roughly equally often, so about half their gametes are unbalanced — recurrent miscarriage and reduced fertility are the usual presentations.",
      },
      {
        kind: 'para',
        text: "Diagnosis climbs a technology ladder. Bright-field karyotyping sees number and large structure but misses what is too subtle. Fluorescence in situ hybridization, FISH, hybridizes single-stranded DNA probes — fluorescent instead of radioactive — to denatured chromosomes on a slide, with DAPI staining everything a uniform blue; multiple probes in multiple colors can be read at once. For suspected trisomy 21, a red probe against chromosome 21's centromeres shows three signals where a normal cell shows two, and a green X probe reads the sex chromosomes: the karyotype 47,XX,+21. For suspected cri-du-chat, a green probe against the 5p tip lights only one short arm instead of two. Newer PCR- and chip-based methods measure dosage directly — a Down sample carries about 150 percent of its chromosome-21 DNA — and whole-genome sequencing is the likely end of the ladder, cheap enough one day to simply read the answer.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Problem: a 39-year-old pregnancy screens positive (maternal age plus nuchal translucency). Amniotic fetal cells are probed by FISH — red for chromosome 21 centromeres, green for X centromeres, DAPI for the DNA. Reading: three red signals, two green. What is the diagnosis, and why did the screen trigger?',
        'Count the signals: three red spots mean three chromosome-21 copies — trisomy 21, not two; two green spots mean two X chromosomes — a female fetus.',
        'Write the karyotype in standard notation: 47,XX,+21 — forty-seven chromosomes, female sex chromosomes, one extra 21. Down syndrome.',
        'Connect the trigger to the mechanism: maternal age raises the baseline risk that a meiosis-I nondisjunction in the egg produces an n+1 oocyte (the meiosis lesson owns the mechanics); nuchal translucency is the ultrasound sign that raises suspicion independently.',
        'Contrast the balanced case: a reciprocal-translocation carrier with 46 chromosomes looks normal, and even a normal-looking karyogram can hide an arm swap — which is exactly why banding, and later FISH, were invented: structure, not just count.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Four confusions recur. Trisomy is not triploidy: trisomy is one extra chromosome of one pair (2n+1), triploidy is a whole extra SET (3n) — different arithmetic, different lethality. Balanced does not mean harmless in every context: inv(9) carriers are fine because gene content is unchanged, but translocation carriers still pay the segregation tax of about half unbalanced gametes. Inversions do not delete DNA — a crossover inside the loop is what damages the gametes, which is why the damage reads as suppressed recombination. And a 47,XXY karyotype is a male despite two X chromosomes: in mammals the Y chromosome, not the X count, sets male development — two Barr bodies are simply what 47,XXY and 47,XXX cells show under the microscope.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Karyotype', def: 'The number and appearance of an individual\'s chromosomes — length, centromere position and banding pattern.' },
        { term: 'Euploid', def: 'Carrying the species-typical chromosome set; in humans, 22 autosome pairs plus one sex-chromosome pair.' },
        { term: 'Aneuploid', def: 'A chromosome count off by one or a few from euploid — monosomy (2n−1) or trisomy (2n+1), not whole extra sets.' },
        { term: 'Nondisjunction', def: 'Failure of homologs (meiosis I) or sister chromatids (meiosis II) to separate, producing aneuploid gametes — the mechanism behind most trisomies.' },
        { term: 'Polyploid', def: 'Carrying three or more complete chromosome sets; sterile in triploid animals, common and robust in plants.' },
        { term: 'Deletion', def: 'Loss of a chromosome segment after two breaks on one chromosome; unbalanced, non-reverting, pseudo-dominant.' },
        { term: 'Duplication', def: 'A second copy of a segment, from sister-chromatid misjoin or unequal crossover; reverts readily and fuels gene divergence.' },
        { term: 'Inversion', def: 'A segment flipped 180 degrees in place — paracentric (excluding the centromere) or pericentric (including it); balanced.' },
        { term: 'Translocation', def: 'Segment exchange between non-homologous chromosomes — reciprocal (swap) or Robertsonian (whole-arm fusion); balanced when no DNA is lost.' },
        { term: 'FISH', def: 'Fluorescence in situ hybridization — fluorescent DNA probes binding their complement on prepared chromosomes, reading count and structure in color.' },
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Prenatal cytogenetics: maternal-age and nuchal-translucency screening feeds amniocentesis, and FISH or karyotyping turns cells into a diagnosis within days.',
        'Cancer cytogenetics: translocation testing is routine in leukemia workups, because rearrangements such as the chronic-myelogenous-leukemia swap are both diagnostic marker and drug target.',
        'Agriculture: breeders exploit triploid sterility for seedless fruit and use polyploid robustness for yield — chromosome-number engineering as old as the discipline.',
        'Reproductive counseling: translocation carriers are told the alternate-versus-adjacent arithmetic before IVF, and many clinics screen embryos for balanced sets.',
        'Clinical shorthand: Barr-body counts from a simple smear check any X-chromosome count, a hundred-year-old test that still works.',
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In preparing a karyotype, colchicine is used to:',
          options: ['swell the cells so chromosomes spread', 'arrest dividing cells at metaphase when chromosomes are condensed', 'stain the chromosomes into visible bands', 'count the Barr bodies in each cell'],
          answer: 1,
          explain: 'Colchicine inhibits microtubules and halts mitosis at metaphase — the one stage at which chromosomes are condensed, countable and photographable. The hypotonic solution swells cells; Giemsa stains the bands.',
        },
        {
          q: 'Which rearrangement changes the cell\'s gene count (is unbalanced)?',
          options: ['a paracentric inversion', 'inversion(9)', 'a reciprocal translocation', 'a deletion'],
          answer: 3,
          explain: 'Inversions and reciprocal translocations move DNA without losing or gaining it — balanced. A deletion removes a segment outright, dropping the dosage of every gene it carried.',
        },
        {
          q: 'A single crossover inside a paracentric inversion loop produces chromatids that are:',
          options: ['all balanced and viable', 'one dicentric and one acentric, plus two normal', 'all four carrying duplications', 'identical to non-recombinant chromatids'],
          answer: 1,
          explain: 'The exchange within the loop links two centromeres into one chromatid (dicentric — torn at anaphase) and strands the other with none (acentric — lost). The recombinant gametes are unbalanced, so the inversion appears to suppress crossing over.',
        },
        {
          q: 'A reciprocal-translocation carrier who mates with a chromosomally normal partner can expect roughly what fraction of unbalanced embryos?',
          options: ['none — the rearrangement is balanced', 'about one quarter', 'about one half', 'all of them'],
          answer: 2,
          explain: 'The four paired chromosomes segregate alternate (balanced) or adjacent-1 (unbalanced) about equally often, so roughly half the gametes carry duplication-deletion dosage — the basis of the carrier\'s reduced fertility.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'path',
        text: 'Grounding: "Introduction to Genetics" (LibreTexts OER compilation remixed by Ying Liu, City College of San Francisco, compiled 2026), built on Nickle & Barrette-Ng, Online Open Genetics (CC BY-SA 3.0) and OpenStax Biology (CC BY 4.0) — Chapter 10 "Changes in Chromosome Number and Structure" and Chapter 2.5 "Karyotypes". The meiosis-and-linkage lesson (1.2) owns the nondisjunction mechanics and crossover machinery cited here; the beyond-Mendel lesson (1.3) owns X-inactivation itself; the CRISPR lesson (3.2) shows how breaks are now made deliberately rather than feared.',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-alleles-mullers-morphs',
    title: 'What Alleles Do: Wild Type, Muller\'s Morphs and Complementation',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Allelic Analysis',
    tier: 'advanced',
    concepts: [
      'Wild type and the allelic series',
      'Loss of function is usually recessive: haplosufficiency',
      'Amorph and hypomorph: the loss-of-function morphs',
      'Hypermorph, neomorph and antimorph: gain and interference',
      'Sorting any allele against deletion, wild type, duplication',
      'The complementation test: same gene or different genes?',
      'Complementation groups assign mutants to genes',
    ],

    words: 2305,
    readMins: 12,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Mendel's peas offered two alleles per gene, one visibly dominant. Real populations offer more: a typical diploid individual can carry at most two alleles of a gene, but a population may carry many, forming an allelic series — the most common form in the wild population is called the wild type, written with a plus sign, and everything else is a mutant deviation from it. Conventions follow: genes are written in italics (the white gene of Drosophila, on the X chromosome), the proteins they encode in upright capitals (WHITE); superscript plus marks the wild-type allele (w-plus), letters or numbers the mutants. This lesson asks the question underneath all that notation: what does each allele actually DO, functionally, and how can we find out which gene a new mutation belongs to? The answers — Muller's five functional classes and the complementation test — are the working tools of every genetic screen.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Nearly everything genetics knows about gene function began with mutants: knock out a piece, see what breaks. The functional classification predicts how a mutation will behave in a pedigree long before its molecular lesion is sequenced — loss-of-function alleles usually hide as recessives, gain-of-function alleles usually show as dominants — and the complementation test is still the fastest way to ask whether two similar mutants are the same gene. Modern genome editing changed how mutations are made, not how they are classified: a CRISPR knockout is a designed amorph.",
      },
      {
        kind: 'para',
        text: "The deep regularity is that most mutations lose function. A random change in a gene's DNA usually damages the product — a protein made in smaller amount, folded badly, or not at all — rather than improving it, and such loss-of-function alleles tend to be recessive for a simple quantitative reason: the wild-type allele is haplosufficient. One working copy supplies enough product for a normal phenotype, so a heterozygote carrying one wild-type and one dead allele looks wild type. Flip the economy and dominance flips: in some pathways a single wild-type allele is haploinsufficient — its product alone cannot reach the needed concentration — so the loss-of-function allele expresses in the heterozygote and behaves as dominant. These two words predict inheritance patterns from biochemistry, which is why the Mendel lesson's claim that dominance is a biochemical outcome lands here with full force.",
      },
      {
        kind: 'para',
        text: "Hermann Muller — Nobel laureate for showing that X-rays induce mutations — sorted mutant alleles into five functional classes, the morphs. The two loss classes come first. An amorph makes no active product at all: zero function, the null mutation. Molecularly it can be a gene deletion, a promoter or enhancer change that silences transcription, a splice-site change that ruins the messenger, a transcript that never reaches the ribosome, or a protein with one key residue altered into uselessness. Amorphs are usually recessive — the Drosophila white allele is the textbook case: w-plus over w-minus flies have red eyes; only w-minus over w-minus flies are white-eyed. The exception is instructive: the Minute locus is haploinsufficient, so a fly with one deleted copy shows the mutant bristles — a dominant amorph.",
      },
      {
        kind: 'para',
        text: "A hypomorph keeps partial function — the leaky mutation, its name suggesting a product that still drips through. Any step can be merely weakened: reduced transcription from a sloppier promoter, a splicing change that slows throughput, a protein that works at half speed. Hypomorphs are usually recessive too, for the same haplosufficiency reason; the white-apricot allele of Drosophila, which tints eyes apricot only when both copies are mutant, is the standard example. Because amorphs and hypomorphs both leave the heterozygote healthy, the great majority of inherited recessive disease alleles in humans are losses of function — the cystic-fibrosis allele the population-genetics lesson counts is one.",
      },
      {
        kind: 'para',
        text: "Cystic fibrosis is also the mutation story told end to end, and it shows why the allele-level view matters clinically. The disease — the most common life-limiting autosomal recessive condition among people of European heritage, about one birth in 2,500 affected and one person in 25 a carrier — traces to CFTR, an ATP-gated chloride channel of epithelial cell membranes identified by Lap-chee Tsui's group at the University of Toronto, mapped to DNA markers in 1985 and cloned in 1989. More than a thousand mutant alleles are known, and the details differ in therapeutically meaningful ways. The commonest, ΔF508, deletes exactly three nucleotides — one phenylalanine at position 508 of the 1,480-amino-acid protein — enough to misfold the channel in the endoplasmic reticulum so it never reaches the membrane; it accounts for roughly seventy percent of North American cases, and its frequency has prompted speculation that carriers gained an edge against cholera's dehydration. A different lesion, G551D, substitutes aspartic acid for glycine at position 551 and breaks ATP gating — the channel reaches the membrane but will not open. Both are loss-of-function, yet the drug that fixes one does not fix the other: Kalydeco, approved in 2012, binds mutant CFTR and holds it open — but only for G551D carriers of the allele, fewer than five percent of patients, at a cost near a quarter of a million dollars per patient per year. One gene, a thousand alleles, and precision medicine priced per mutation — the morphs vocabulary, cashed out at the pharmacy counter.",
      },
      {
        kind: 'para',
        text: "The remaining three morphs involve gain — of quantity, of novelty, or of interference — and they are almost always dominant. A hypermorph makes quantitatively MORE of the same product: a promoter turned up, a translation made more efficient, a protein engineered by chance to work harder; the classic hypermorph is a gene duplication, extra copies making extra product. A neomorph makes a product with a NEW function — or the same product in a new place or time: the classic route is a chromosome rearrangement that juxtaposes one gene's coding sequence with another gene's regulatory element, creating a chimeric gene expressed where it never was. An antimorph is the strangest: its product actively interferes with the wild-type allele's function — the dominant-negative mutation. The simplest model is a protein that works as a dimer: mix one mutant subunit into the complex and the whole assembly is poisoned, so the heterozygote is sicker than mere haplosufficiency would allow.",
      },
      {
        kind: 'para',
        text: "Muller's scheme comes with an operating procedure: any new allele can be classified by crossing it to three standard testers — a deletion (zero function), a wild type (one dose) and a duplication (two doses). An allele mutant over a deletion but wild over wild type is a loss of function; mutant over wild type but rescued (or over-rescued) by duplication points to gain or dosage; mutant even over a duplication, actively spoiling it, is the antimorph's signature. The test works because it reads function directly off gene dose, which is exactly the quantity dominance was hiding all along.",
      },
      {
        kind: 'para',
        text: "Complementation answers a different question with a cross instead of a tester panel. A screen yields two independently isolated recessive mutants with the SAME visible phenotype — say, white flowers. Are they broken in the same gene, or in two different genes that both feed the same pathway? Cross the true-breeding mutants. If the F1 offspring are wild type — purple, in the classic two-enzyme pigment pathway — each parent supplied the gene the other lacked: the double heterozygote AaBb has one good A and one good B, the mutations are in different genes (non-allelic), and they complement. If the F1 are still mutant, both parents carried mutations in the same gene — allelic — and the F1 has no functional copy to save the phenotype. The mutations fail to complement. Run the crosses across a whole set of mutants and the failure pattern sorts them into complementation groups — and the number of groups is the number of genes the screen found.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Problem: three true-breeding recessive white-flower mutants — m1, m2, m3 — from independent screens. Crosses: m1 x m2 gives all purple F1; m1 x m3 gives all white F1; m2 x m3 gives all white F1. Assign the mutations to genes.',
        'Read cross 1: m1 x m2 → F1 purple. The mutations complement, so they are non-allelic: m1 breaks one gene, m2 a different one. Write m1 as aaBB and m2 as AAbb; the F1 is AaBb — one good copy of each gene, pigment restored.',
        'Read cross 2: m1 x m3 → F1 white. No complementation: m3 is allelic to m1 — both break the same gene (different lesions in it, or the same one). Call that gene A: m1 = aa, m3 = aa.',
        'Read cross 3 as the check: m2 x m3 → F1 white, consistent — m3 (aa) fails to complement m2 only if m2 also lacks a functional A... which contradicts cross 1 — so re-read: the consistent assignment is two groups, {m1, m3} in gene A and {m2} in gene B, and cross 1\'s purple F1 is exactly what AaBb predicts.',
        'State the result: three mutants, two complementation groups, two genes in the pigment pathway — the same logic that assigned hundreds of Drosophila and Neurospora mutants to genes before any DNA was sequenced.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Five traps recur. Complementation is about genes, not dominance — it works only with recessive, true-breeding mutants, because a dominant mutation expresses in the F1 no matter which gene it sits in. A mutant F1 does not always mean same-gene: a strain carrying two mutations (or a deletion spanning two genes) can fail to complement mutants from either locus — multi-locus mutants define big, suspicious groups. Complementation is not epistasis: epistasis is interaction between genes' products inside one individual's pathway; complementation is about whether two mutations sit in one gene. Do not call every dominant mutation a neomorph — hypermorphs and antimorphs are dominant too, and the tester crosses are how you tell them apart. And wild type means most common in the population, not best or normal-est: dominant does not mean common, as the Mendel lesson's Huntington's-versus-type-O example already showed.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Wild type', def: 'The most common allele or phenotype for a locus in a natural population, written as a plus superscript — the reference against which mutants are defined.' },
        { term: 'Allelic series', def: 'The set of multiple known alleles of one gene, from wild type through various mutants, ranked by their dominance relations.' },
        { term: 'Haplosufficient', def: 'One functional allele supplies enough product for a normal phenotype — the reason loss-of-function alleles are usually recessive.' },
        { term: 'Haploinsufficient', def: 'A single wild-type allele cannot supply enough product, so a loss-of-function allele expresses in the heterozygote — a dominant loss.' },
        { term: 'Amorph', def: 'Muller\'s null: a complete loss-of-function allele making no active product — deletion, silencing, ruined transcript or dead protein.' },
        { term: 'Hypomorph', def: 'A leaky allele retaining partial function — reduced transcription, processing, translation or per-molecule activity.' },
        { term: 'Hypermorph', def: 'A gain-of-dosage allele making more of the same product; the classic case is a gene duplication.' },
        { term: 'Neomorph', def: 'A gain-of-function allele with a new activity, place or time of expression — often a rearrangement-created chimeric gene.' },
        { term: 'Antimorph', def: 'A dominant-negative allele whose product interferes with the wild-type allele\'s function, classically by poisoning a multimer.' },
        { term: 'Complementation test', def: 'Crossing two recessive mutants with like phenotypes: wild-type F1 means different genes (complementation), mutant F1 means the same gene.' },
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Genetic screens: every forward screen in flies, worms, yeast and plants ends with complementation grouping — the number of groups is the number of genes discovered.',
        'Human genetics: dominant-negative antimorphs explain severe dominant disorders of multimeric proteins, where one bad subunit sabotages the assembly.',
        'Genome editing: CRISPR knockouts are designed amorphs, and base-edited hypomorphs tune rather than abolish — the morph vocabulary describes therapeutic edits too.',
        'Pathway construction: complementation plus epistasis ordering in Neurospora-style auxotrophs built the first metabolic-pathway maps before sequencing existed.',
        'Biology education and diagnostics: allele nomenclature (italics for genes, capitals for proteins, plus for wild type) is the shared grammar of every genetics paper and clinic report.',
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Loss-of-function alleles are usually recessive because:',
          options: ['they are always deleted outright', 'one wild-type allele is usually haplosufficient', 'they mutate back constantly', 'dominant alleles are more common in populations'],
          answer: 1,
          explain: 'One working copy typically supplies enough product for a normal phenotype, so the heterozygote hides the loss. Where a single copy is haploinsufficient — like the Minute locus — the loss expresses as dominant.',
        },
        {
          q: 'A mutant allele makes its product in a tissue where the wild-type gene is normally silent. This is a:',
          options: ['hypomorph', 'amorph', 'neomorph', 'hypermorph'],
          answer: 2,
          explain: 'New place, time or kind of activity defines the neomorph — classically a rearrangement juxtaposing a new regulatory element beside the gene. It is a gain of function and usually dominant.',
        },
        {
          q: 'Two true-breeding recessive white-flower mutants are crossed and every F1 plant is white. The mutations are:',
          options: ['in different genes — they complement', 'in the same gene — they fail to complement', 'necessarily identical base-for-base', 'dominant alleles'],
          answer: 1,
          explain: 'A mutant F1 has no functional copy of the gene either parent lost — both mutations are allelic. Complementation would have restored purple; identical bases are possible but not required, since different lesions in one gene also fail.',
        },
        {
          q: 'Which allele CANNOT be classified by a standard complementation test?',
          options: ['a recessive hypomorph', 'a recessive amorph', 'a dominant neomorph', 'any true-breeding recessive mutant'],
          answer: 2,
          explain: 'Complementation tests require recessive mutants: a dominant allele shows its phenotype in the F1 regardless of which gene it occupies, so the cross carries no information about allelism.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'path',
        text: 'Grounding: "Introduction to Genetics" (LibreTexts OER compilation remixed by Ying Liu, CCSF, compiled 2026) — Section 5.4.8 "Muller\'s Morphs", Section 9.6 "Complementation tests and Allelism", Section 4.10 "Biochemical Basis of Dominance" and Section 4.6 "Mendel\'s First Law" (Nickle & Barrette-Ng, CC BY-SA). The Mendel lesson (1.1) owns dominance and Punnett mechanics; the beyond-Mendel lesson (1.3) owns pleiotropy and lethal alleles at the trait level; the cell-molecular book\'s mutations-and-DNA-repair lesson owns the repair biochemistry behind how lesions arise; the CRISPR lesson (3.2) manufactures the amorphs this vocabulary classifies.',
      },
    ],
  },
  // ------------------------------------------------------------------
  // 02.3 bio-structural-chromosome-mutations — Chromosome Mutations: Deletions
  //      to Inversions (NEW per MASTER-SYLLABUS §6.3, authored 2026-11-02,
  //      BORN textbook-quality under the NO-CEILING charter).
  //
  // DEDUP / CARVE evidence (greps 2026-11-02, all hits inspected):
  //  - paracentric/pericentric/cri-du-chat/dicentric/Robertsonian/
  //    pseudodominance/inversion loop → hit ONLY in this file (2.1 survey):
  //    2.1 owns the four-rearrangement SURVEY paragraph, karyograms, banding,
  //    FISH ladder, aneuploidy and balance logic — cited, deepened not repeated.
  //  - 2.2 owns Muller's morphs (deletion/duplication as TESTERS),
  //    haplosufficient/haploinsufficient, complementation incl. non-allelic
  //    non-complementation — cited; NAHR (fresh here) distinguished from
  //    "non-allelic non-complementation" explicitly.
  //  - 1.6 owns three-point-cross linkage arithmetic (cited).
  //  - 3.4 cancer-genetics owns BCR-ABL mechanism + imatinib (cited; this
  //    lesson owns the cytogenetic history: Nowell & Hungerford 1960,
  //    Rowley 1973). Philadelphia/BCR hits in 03-molecular-genetics = that
  //    lesson's territory, carved.
  //  - 3.1 genomics owns microarray mechanics (cited); chromosomal microarray
  //    as CNV diagnostics is fresh here.
  //  - polytene, semisterility, bridge-breakage-fusion, position-effect
  //    variegation, Nowell, Rowley, Sturtevant-1925-Bar, NAHR, contiguous-gene,
  //    Williams, 22q11.2, DMD reading-frame: ZERO hits anywhere — fresh.
  //  - McClintock: cell-molecular 03 owns Ac/Ds transposons + biography
  //    (cited); the BFB cycle (Missouri 1936-41) is fresh here.
  //  - human chromosome 2 fusion: evolutionary-biology 01 owns it (cited).
  //  - opsins: human-anatomy-physiology owns (cited, one clause).
  // ------------------------------------------------------------------
  {
    id: 'bio-structural-chromosome-mutations',
    title: 'Chromosome Mutations: Deletions to Inversions',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Cytogenetics',
    tier: 'intermediate',
    concepts: [
      'Two-break misrepair and unequal crossing-over: the rearrangement engines',
      'Pseudodominance: the deletion\'s genetic signature',
      'Contiguous-gene deletion syndromes: cri-du-chat, Williams, 22q11.2',
      'Bar eye: Sturtevant\'s unequal crossing-over and gene dosage',
      'Inversion loops, dicentric bridges and semisterility',
      'Recombination suppression and Drosophila balancer chromosomes',
      'Reciprocal and Robertsonian translocations; the Philadelphia chromosome',
      'Position-effect variegation',
    ],
    words: 5821,
    readMins: 29,
    addedOn: '2026-11-02',
    blocks: [
      {
        kind: 'para',
        text: "Missouri, the late 1930s. Barbara McClintock is growing maize lines that came out of X-ray experiments, and some of them carry a quiet scandal: the plants look perfectly healthy, but their ears are reliably half-empty. Open one of those ears and the aborted kernels sit in orderly patches — roughly the pattern you would get if about half the gametes from a plant died before fertilization could complete. Nothing is wrong with the soil, the weather, or the genes in the ordinary sense. What is wrong is the ARRANGEMENT of the chromosomes themselves: the plant carries a chromosome whose pieces have been reshuffled, and when it makes pollen and egg cells, close to half of them inherit a hopeless, unbalanced mixture. This lesson is about such mutations — changes not of a letter in a gene but of the genome's own architecture: stretches of chromosome deleted, duplicated, flipped 180 degrees, or traded between chromosomes. They are the structural chromosome mutations, and their fingerprints — half-empty ears, an impossible pedigree, an infant's unusual cry, a cancer cell's strangely small chromosome — run through the whole of genetics, from the fly room to the oncology ward.",
      },
      { kind: 'heading', text: 'Background: How a Chromosome Breaks and Misheals' },
      {
        kind: 'para',
        text: "A chromosome is one continuous DNA molecule, and its backbone can snap. The repair machinery was Lesson 2.1's first stop: a double-strand break is an emergency, and the cell's fastest fix, non-homologous end-joining, simply glues broken ends back together — usually correctly, occasionally not. (The repair biochemistry itself is taught in the cell-molecular book's mutations-and-repair lesson; here we follow what misrepair does to the chromosome map.) Three misrepair routes cover nearly everything. Route one: two breaks on ONE chromosome, and the ends rejoin wrongly — the middle piece is lost (a deletion) or reinstalled backwards (an inversion). Route two: two breaks on DIFFERENT chromosomes, and the cell exchanges the pieces between them — a translocation. Route three is subtler and needs no breaks at all: two homologous repeats pair slightly out of register during meiosis and recombine across the misalignment — one product gains a copy (a duplication) and the other loses the same stretch (a deletion). Cytogeneticists call the pattern the two-break rule: almost every rearrangement you will ever draw reduces to two breaks and a bad rejoin, or to one unequal crossover.",
      },
      {
        kind: 'para',
        text: "Lesson 2.1 surveyed the four rearrangements — deletion, duplication, inversion, translocation — in a single passing paragraph beside its main business of chromosome NUMBER. This lesson goes deep on structure, because the structural changes have mechanics worth watching, arithmetic worth doing, and consequences that reshaped medicine. One skill carried over from 2.1 to sharpen here: reading karyotype notation. A cytogenetics report reads like 46,XX,del(5)(p15.2) — forty-six chromosomes, two X chromosomes, a deletion on chromosome 5 at band p15.2. Every chromosome's short arm (p, for petit) and long arm (q) are divided into numbered regions and bands read outward from the centromere, so p15.2 means short arm, region 1, band 5, sub-band 2. An inversion names both breakpoints, as in inv(9)(p12q13); a translocation names the two chromosomes and then both breakpoints, as in t(9;22)(q34;q11.2). Reading this notation fluently is half of cytogenetics. The other half — understanding what each rearrangement does inside a meiosis — is where the real teaching begins.",
      },
      { kind: 'heading', text: 'Deletions: Losing a Run of the Text' },
      {
        kind: 'para',
        text: "A deletion removes a run of the text. If both breaks sit near an end, the piece beyond the outermost break — a terminal deletion — is lost outright. If both breaks are internal, the piece between them becomes an acentric fragment: with no centromere to grip the spindle, it drifts at the next cell division and is degraded — an interstitial deletion. Either way the loss is permanent; a deleted segment has nothing to copy itself back from. Calvin Bridges made this the foundation of a technique in 1917, in a paper titled simply 'Deficiency': his Notch mutant — a fly with notched wing margins — behaved not like a broken letter but like a chromosome missing a whole chunk, and the chunk stayed missing, generation after generation.",
      },
      {
        kind: 'para',
        text: "Bridges' deeper gift was genetic. A fly heterozygous for a deletion shows the phenotypes of recessive alleles that sit on the OTHER homolog, inside the deleted span — because there is no wild-type copy left to mask them. This unmasking, pseudodominance, was the deletion's first service to genetics: it let Bridges and his contemporaries remove genes one by one, like plucking tiles from a keyboard, and watch which functions failed. That is deletion mapping, and it ordered the Drosophila chromosomes into cytological decades before anyone sequenced a base (the linkage arithmetic that pairs with it lives in the three-point-cross lesson 1.6; the deletion supplies the cytological ruler those maps were drawn against).",
      },
      {
        kind: 'para',
        text: "Why is losing one copy often harmless but sometimes catastrophic? Lesson 2.2 supplied the vocabulary: most genes are haplosufficient — one working allele makes enough product — so a single-copy loss hides; dosage-sensitive genes are haploinsufficient, and a single-copy loss shows. A deletion is a bundle of such coin-flips at once. Its severity tracks how many dosage-sensitive (or outright haplolethal) genes the missing segment spans, which is why a 'small' deletion can be devastating while a 'large' one is mild — size alone predicts nothing. When one deletion removes several neighboring genes, the result is a contiguous-gene syndrome: a package of unrelated-looking symptoms that travel together because the genes travel together. Three classics anchor the category.",
      },
      {
        kind: 'para',
        text: "The first is cri-du-chat — 'cry of the cat' — described by Jérôme Lejeune in 1963: a terminal deletion of chromosome 5's short arm, seen in roughly one in twenty to fifty thousand newborns. Infants carry a high, mewing cry (the larynx is underdeveloped), a small head, and intellectual disability; two critical regions do the damage, 5p15.3 for the cry and 5p15.2 for the neurological features. Crucially, about ten to fifteen percent of cases are not new mutations at all: they arrive as unbalanced segregants from a PARENT who quietly carries a balanced translocation — which is why every cri-du-chat diagnosis triggers parental karyotypes. The second is Williams syndrome, a deletion of about 1.5-1.8 megabases at 7q11.23 in roughly one in eight to twenty thousand births. Its signature splits neatly across the deleted genes: one lost copy of the elastin gene leaves arteries stiff and narrowed (supravalvular aortic stenosis), while losses among the two dozen neighboring genes produce the startling neurocognitive profile — fluent, relentlessly social speech alongside poor visual-spatial skills. The third, the most common microdeletion in humans at roughly one in two to four thousand births, is 22q11.2 deletion syndrome: a loss on the long arm of chromosome 22 that disrupts development of the heart, thymus, parathyroids and palate, with the TBX1 gene as the major culprit. Its mechanism deserves special attention, because it is not random: the deletion forms when the recombination machinery crosses over between two low-copy repeats — long, nearly identical segmental duplications flanking the region. Misaligned repeats, crossover, loss. The same engine that builds duplications, as you will see below — which is why these syndromes recur at the same loci, in unrelated families, generation after generation: the repeat architecture of our genome channels the breaks.",
      },
      {
        kind: 'para',
        text: "Deletions also reach inside genes, and there the arithmetic is unforgiving. The dystrophin gene is the largest in the human genome — 79 exons encoding a 4,272-amino-acid muscle protein — and multi-exon deletions within it cause one of two very different diseases depending on a single piece of arithmetic, worked through below. Detection, meanwhile, climbs the ladder Lesson 2.1 built: a stained karyogram sees rearrangements of several megabases or more; fluorescence in situ hybridization probes specific segments and finds losses or swaps that banding misses. The modern top rung is the chromosomal microarray (array-comparative genomic hybridization): instead of one probe at a time, hundreds of thousands of probes tiled across the genome compete for labeled patient DNA, and the fluorescence ratios chart every copy-number change — deletion or duplication — down to tens of kilobases. (Lesson 3.1 teaches how microarrays work mechanically; routine microdeletion screening is this lesson's clinical application — most Williams and 22q11.2 diagnoses are now array findings, not karyogram readings.)",
      },
      {
        kind: 'example',
        title: 'Worked Example: Reading-Frame Arithmetic on the Dystrophin Gene',
        steps: [
          'Identify what is asked: the dystrophin gene (DMD, Xp21) carries 79 exons. Multi-exon deletions cause either Duchenne muscular dystrophy (severe, wheel-chair-bound in childhood) or Becker muscular dystrophy (milder, later onset). Predict which from the deleted nucleotide count using the reading-frame rule.',
          'Case A: a boy deletes exons 45 through 50 — six exons totalling, for this illustration, 354 coding nucleotides. Divide by the codon size: 354 ÷ 3 = 118 exactly.',
          'Because 354 is an exact multiple of three, every codon downstream of the deletion still reads in register — the ribosome never notices a frame shift, only a shortened message. The protein is missing about 118 internal amino acids but keeps its C-terminal membrane-anchoring domain: partial function survives. Verdict: Becker phenotype. (The reading-frame rule predicts correctly in about 90% of cases.)',
          'Case B: a different boy deletes six different exons totalling 347 nucleotides. 347 ÷ 3 = 115 remainder 2 — not a multiple of three.',
          'Every codon after the deletion is now read two letters out of register, a stop codon appears within a few dozen triplets, and translation ends early. The truncated protein lacks the C-terminal anchor and cannot tether the muscle contractile apparatus to the membrane. Verdict: Duchenne phenotype.',
          'State the result: one piece of arithmetic — deleted nucleotides mod 3 — splits one kind of mutation into two prognoses. Remainder 0 keeps the frame (Becker); any other remainder breaks it (Duchenne). Deletion logic at the smallest scale: what matters is not just which text is lost, but whether the surviving text still reads.',
        ],
      },
      { kind: 'heading', text: 'Duplications: Bar Eye and the Price of Extra Copies' },
      {
        kind: 'para',
        text: "Now flip the coin. A duplication adds a second copy of a stretch, usually tandem — head-to-tail beside the original. The classical story is the Bar eye of Drosophila: a narrow, slit-like eye that appeared in Morgan's fly room in the 1910s and behaved like a dominant mutation at a single locus. It took twelve years to see through that appearance. Alfred Sturtevant's 1925 paper showed that Bar is no point mutation at all: it is a tandem duplication of a small segment of the X chromosome (band region 16A). The proof came from an odd inheritance pattern: Bar females occasionally produced, in the same brood, both a wild-type-eyed daughter and an ultra-Bar daughter whose eyes were even narrower than Bar's. Sturtevant's explanation was unequal crossing-over: when the two tandem copies pair out of register and recombine, one recombinant chromosome is left with a single copy (the wild-type revertant) and the other with three in a row (ultra-Bar). The two products are reciprocal, so they must appear together — exactly what the broods showed. Lillian Morgan confirmed the revertant case in 1931, and in 1936 Calvin Bridges settled the question cytologically: squash preparations of the giant salivary-gland chromosomes show the 16A band repeated twice in Bar and three times in ultrabar.",
      },
      {
        kind: 'para',
        text: "Bar's real lesson was quantitative: phenotype tracked copy NUMBER. One copy of the region gives the normal compound eye; two copies give Bar; three give ultrabar — and counting the facets of each eye under the microscope made Bar one of the first traits in biology whose 'gene' was really a dosage dial. The mechanism generalizes far beyond one fly gene. Wherever a genome carries nearby copies of the same sequence — and ours is riddled with segmental duplications, repeats tens to hundreds of kilobases long — misaligned pairing plus crossover yields one product with a duplication and the other with the reciprocal deletion. The formal name is non-allelic homologous recombination (NAHR): recombination between copies that are similar but NOT at the same position (allelic means 'same locus', so 'non-allelic' flags the misalignment). NAHR is the engine behind the recurring 22q11.2 deletion you met above, behind its reciprocal duplication, and behind a large share of all copy-number variation in human populations. Be careful with one nearby phrase from Lesson 2.2: 'non-allelic NON-COMPLEMENTATION' there describes two mutations in different genes failing to complement; NAHR is a recombination geometry, not a cross outcome. Duplications, for the record, are usually milder than deletions — an extra copy rarely removes a function — but dosage-sensitive genes make them plenty visible, and over evolutionary time they are raw material: the spare copy is free to drift toward a new job. Our own color vision is the textbook outcome — ancient duplications of an ancestral opsin gene diversified into the cone pigments the human-eye lesson teaches — and the genomics lesson (3.1) carries the genome-architecture side of the story.",
      },
      { kind: 'heading', text: 'Inversions: The Loop and the Bridge' },
      {
        kind: 'para',
        text: "An inversion turns a middle stretch of a chromosome 180 degrees and reinstalls it: a chromosome read A·B·C·D·E·F with breaks at the B/C and D/E junctions becomes A·B·D·C·E·F — the stretch between the breaks is reversed. When the flipped stretch excludes the centromere the inversion is paracentric; when it includes the centromere, pericentric (Lesson 2.1's terms table introduced the pair of words; here is the machinery). Neither class loses DNA: every gene is still present, merely reordered, so the carrier is balanced and usually phenotypically normal — which is exactly why inversions stayed invisible for so long. Their damage is paid at meiosis, and the currency is gametes.",
      },
      {
        kind: 'para',
        text: "An inversion heterozygote carries one normal homolog and one inverted homolog. At meiotic pairing the two must align gene with gene along the inverted stretch, and the only way to do that is for one of them to twist into a circle-within-the-pair — the inversion loop of Figure 1. Now let a single crossover occur inside that loop and count the chromatid fates. Paracentric case: the exchange connects chromatids that end up with two centromeres or with none. One recombinant chromatid is dicentric — at anaphase its two centromeres are pulled toward opposite poles, and the chromatid stretches into a dicentric bridge that eventually tears; its partner is acentric, has no centromere at all, lags outside the spindle and is lost. Two chromatids escape untouched: one normal, one inverted. The meiosis therefore yields two workable products and two corpses, and the corpses carry broken, missing-ended chromosomes.",
      },
      {
        kind: 'figure',
        caption: 'Figure 1 — Why inversion heterozygotes are semisterile. LEFT (paracentric): the inverted segment excludes the centromere; a single crossover inside the inversion loop leaves two balanced chromatids (normal, inverted) plus two corpses — a dicentric bridge that tears at anaphase and an acentric fragment that is lost. RIGHT (pericentric): the inverted segment includes the centromere; no bridges form, but two recombinant chromatids carry a duplication and a deletion of everything distal to the breakpoints. Either way, when a crossover occurs, half the products die: semisterility.',
        afterConcept: 5,
        svg: `<svg viewBox="0 0 880 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two panels showing paracentric and pericentric inversion loops in a heterozygote, with the four chromatid products of a single crossover: normal, inverted, dicentric bridge, acentric fragment on the left; balanced and duplication-deletion products on the right">
  <style>.lbl{font-family:Georgia,serif;font-size:14px;fill:#3f3f46}.big{font-size:17px;font-weight:bold}.sm{font-size:12px;fill:#52525b}.ink{stroke:#8a8a93;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}.thin{stroke:#b8b8c0;fill:none;stroke-width:1.6}.ok{fill:#15803d}.bad{fill:#e11d48}.cen{fill:#7c3aed}.box{fill:none;stroke:#c8c8d0;stroke-width:1.6;stroke-dasharray:5 4}.node{fill:#f4f4f5;stroke:#c8c8d0;stroke-width:1.4}</style>
  <text class="lbl big" x="28" y="34" fill="#3f3f46">Inversion heterozygote meiosis — one crossover inside the loop</text>
  <rect x="24" y="52" width="408" height="428" rx="12" class="box"/>
  <text class="lbl" x="40" y="76" font-weight="bold">PARACENTRIC · centromere OUTSIDE the loop</text>
  <text class="sm" x="40" y="94">normal homolog:  A B (•) C D E F</text>
  <text class="sm" x="40" y="112">inverted homolog: A B (•) E D C F — pairs into a loop</text>
  <path class="ink" d="M60 150 H210 C300 150 300 190 210 190 H60"/>
  <circle cx="150" cy="150" r="6" class="cen"/><text class="sm" x="140" y="141">• centromere</text>
  <path class="ink" d="M120 170 L165 170 M165 170 L120 190" stroke-dasharray="0"/>
  <path d="M168 170 l-9 -4 v8 z" fill="#e11d48"/><text class="sm" x="176" y="166" fill="#e11d48">single crossover in loop</text>
  <rect x="48" y="216" width="150" height="30" rx="6" class="node"/><text class="lbl" x="123" y="236" text-anchor="middle">normal chromatid</text><circle cx="60" cy="231" r="3" class="cen"/>
  <text class="sm ok" x="208" y="236">✓ balanced · viable</text>
  <rect x="48" y="256" width="150" height="30" rx="6" class="node"/><text class="lbl" x="123" y="276" text-anchor="middle">inverted chromatid</text><circle cx="60" cy="271" r="3" class="cen"/>
  <text class="sm ok" x="208" y="276">✓ balanced · viable</text>
  <rect x="48" y="296" width="150" height="30" rx="6" class="node"/><text class="lbl" x="123" y="316" text-anchor="middle">dicentric bridge</text><circle cx="70" cy="311" r="3" class="cen"/><circle cx="186" cy="311" r="3" class="cen"/>
  <text class="sm bad" x="208" y="316">✗ torn at anaphase</text>
  <rect x="48" y="336" width="150" height="30" rx="6" class="node"/><text class="lbl" x="123" y="356" text-anchor="middle">acentric fragment</text>
  <text class="sm bad" x="208" y="356">✗ no centromere · lost</text>
  <text class="sm" x="40" y="396">bridge breaks leave gametes with missing</text>
  <text class="sm" x="40" y="412">terminal pieces; with crossover rate f the</text>
  <text class="sm" x="40" y="428">viable-gamete fraction is  V = 1 − f/2</text>
  <text class="lbl" x="40" y="460" font-weight="bold" fill="#b91c1c">semisterility: half the products die (f = 1)</text>
  <rect x="448" y="52" width="408" height="428" rx="12" class="box"/>
  <text class="lbl" x="464" y="76" font-weight="bold">PERICENTRIC · centromere INSIDE the loop</text>
  <text class="sm" x="464" y="94">normal homolog:  A B (•) C D E F</text>
  <text class="sm" x="464" y="112">inverted homolog: A E D C (•) B F — centromere flipped inside</text>
  <path class="ink" d="M484 150 H634 C724 150 724 190 634 190 H484"/>
  <circle cx="580" cy="170" r="6" class="cen"/><text class="sm" x="570" y="141">• centromere inside loop</text>
  <path class="ink" d="M544 170 L589 170 M589 170 L544 190"/>
  <path d="M592 170 l-9 -4 v8 z" fill="#e11d48"/><text class="sm" x="600" y="166" fill="#e11d48">single crossover in loop</text>
  <rect x="472" y="216" width="170" height="30" rx="6" class="node"/><text class="lbl" x="557" y="236" text-anchor="middle">normal chromatid</text><circle cx="484" cy="231" r="3" class="cen"/>
  <text class="sm ok" x="652" y="236">✓ balanced · viable</text>
  <rect x="472" y="256" width="170" height="30" rx="6" class="node"/><text class="lbl" x="557" y="276" text-anchor="middle">inverted chromatid</text><circle cx="484" cy="271" r="3" class="cen"/>
  <text class="sm ok" x="652" y="276">✓ balanced · viable</text>
  <rect x="472" y="296" width="170" height="30" rx="6" class="node"/><text class="lbl" x="557" y="316" text-anchor="middle">recombinant · one centromere</text><circle cx="484" cy="311" r="3" class="cen"/>
  <text class="sm bad" x="652" y="316">✗ distal arm DUPLICATED</text>
  <rect x="472" y="336" width="170" height="30" rx="6" class="node"/><text class="lbl" x="557" y="356" text-anchor="middle">recombinant · one centromere</text><circle cx="484" cy="351" r="3" class="cen"/>
  <text class="sm bad" x="652" y="356">✗ distal arm DELETED</text>
  <text class="sm" x="464" y="396">every recombinant keeps exactly one</text>
  <text class="sm" x="464" y="412">centromere — no bridges — but two of the</text>
  <text class="sm" x="464" y="428">four carry duplication + deletion beyond</text>
  <text class="lbl" x="464" y="460" font-weight="bold" fill="#b91c1c">the breakpoints: unbalanced, dead</text>
</svg>`,
      },
      {
        kind: 'para',
        text: "A pericentric inversion plays a different trick. Its loop contains the centromere, so every recombinant chromatid still receives exactly one centromere — no bridges, no acentric fragments. The recombinants are instead genetically unbalanced: beyond the breakpoints each one carries a duplication of one distal arm and a deletion of the other (Figure 1, right). Two of the four chromatid products are balanced — one normal, one inverted — and two are duplication-deletion combinations that usually die as gametes or embryos. Either way the count comes out the same as in the paracentric case: when a crossover occurs inside the loop, half the output is dead. Plant breeders met this long before anyone could stain a chromosome properly: inversion heterozygotes shed roughly half their pollen and ovules, and their ears fill only half-way — semisterility, the exact phenotype McClintock was chasing in her half-empty Missouri maize, and the trait Sturtevant and Beadle exploited in 1936 to locate X-chromosome inversions in Drosophila by crossing and counting. Semisterility has a flip side, too. Because recombinant products inside the loop die, the surviving offspring of an inversion heterozygote show essentially NO recombination between loci inside the inverted stretch. An inversion is a recombination suppressor — not by forbidding crossovers, but by letting only the non-crossover chromatids live.",
      },
      {
        kind: 'derivation',
        title: 'The Semisterility Bill for an Inversion Heterozygote',
        statement: 'A heterozygote carries one normal and one inverted homolog; a single crossover occurs inside the inversion loop in a fraction f of meioses, and none in the rest. What fraction of gametes is viable?',
        prerequisites: ['meiosis yields four chromatid products', 'paracentric crossover: two of four chromatids inviable', 'pericentric crossover: two balanced, two duplication-deletion'],
        steps: [
          { label: 'Count the no-crossover case', formula: 'V₀ = 1', explanation: 'With no crossover in the loop, the four products are two normal and two inverted chromatids — every one carries a complete gene set. Viable fraction 1.' },
          { label: 'Count the crossover case, paracentric', formula: 'V₁ = 2/4 = 1/2', explanation: 'A single crossover inside a paracentric loop leaves two balanced chromatids (one normal, one inverted) and two corpses: the dicentric-bridge product and the acentric fragment. Half the output survives.' },
          { label: 'Count the crossover case, pericentric', formula: 'V₁ = 2/4 = 1/2', explanation: 'A single crossover inside a pericentric loop leaves all four chromatids with one centromere each, but two carry a duplication-and-deletion of everything distal to the breakpoints — genetically unbalanced, dead in the same proportion.' },
          { label: 'Average over meioses', formula: 'V = f · (1/2) + (1 − f) · 1 = 1 − f/2', explanation: 'A fraction f of meioses lose half their products; the remaining 1 − f lose none. The viable fraction is the weighted average.' },
          { label: 'Read the formula', explanation: 'V = 1 − f/2 depends only on how often the loop recombines. A large loop that crosses over every meiosis (f = 1) caps fertility at one half; a small loop that almost never recombines (f → 0) costs almost nothing.' },
        ],
        result: 'Viable-gamete fraction V = 1 − f/2. Example: f = 0.8 gives V = 0.6 — a 40 percent gamete loss. In a sex or species with no crossing over — Drosophila males famously — f = 0 and inversion carriers are fully fertile.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Semisterility is genetics' first auditable rate. Long before banding, FISH or sequencing, a breeder could COUNT kernels, and every half-filled ear was a measurement of hidden chromosome architecture. McClintock's maize, Sturtevant and Beadle's flies, and the seed rows of dozens of experiments turned fertility itself into a microscope: the arithmetic you just derived is the same one they used to place rearrangements on maps. Counting what fails is often the sharpest instrument genetics owns.",
      },
      {
        kind: 'para',
        text: "Two endings complete the inversion story. First, in populations: because inversions lock stretches of chromosome together, naturally occurring inversion polymorphisms are common and useful. The pericentric inv(9)(p12q13) sits quietly in one to three percent of humans, benign — large fertility studies find no excess of unbalanced embryos. Drosophila's third chromosome carried a whole ladder of inversion polymorphisms that Sturtevant and Dobzhansky traced along climatic gradients; malaria mosquitoes carry inversions tied to dry-season survival; and the population-genetics lesson (4.4) will compute how selection and recombination contend over such arrangements. Second, inside the cell: an inversion can park a normally active gene next to heterochromatin — the densely packed, gene-silent chromatin the chromatin lesson teaches. The classic is white-mottled in Drosophila: an X-chromosome inversion relocated the white eye-color gene near the centromeric heterochromatin, and in some eye cells the silence spread across the gene while in others it did not — the adult eye opens mottled red and white, cell clone by cell clone. Muller named the phenomenon position-effect variegation in 1930, and it became the historical doorway into chromatin-based silencing: a balanced rearrangement is not automatically harmless, because WHERE a gene sits can matter as much as how many copies exist.",
      },
      {
        kind: 'para',
        text: "The fly geneticists turned recombination suppression into a tool. A Drosophila balancer chromosome carries multiple inversions stacked along its length, a dominant visible marker — the second-chromosome balancer CyO carries Curly, wings curled upward — and a recessive lethal so that its homozygote never survives. Cross any mutation into a balancer and the stock breeds true: recombination inside the inverted segments produces dead chromatids, so the two homologs pass down the generations untouched, flagged each generation by the Curly wings. The arithmetic is a worked example below. Half of experimental genetics rests on this trick, and breeders use quieter versions of it whenever inversions are deployed to lock favorable allele combinations together.",
      },
      {
        kind: 'example',
        title: 'Worked Example: Keeping a Lethal Mutation Forever — the Balancer Arithmetic',
        steps: [
          'Identify what is asked: you study a recessive-lethal mutation m on Drosophila chromosome 2 — m/m flies die as larvae, so a plain m/m stock is impossible. How does a balancer stock m/CyO maintain itself, and what do the adults of a stock cross look like?',
          'Set up the cross m/CyO × m/CyO. Both parents are viable: each carries one m chromosome and one CyO balancer. Each parent makes two gamete classes, m and CyO.',
          'Tally zygotes in the 1 : 2 : 1 ratio: one quarter m/m — dead (your mutation is lethal in homozygote); two quarters m/CyO — viable, Curly wings (the balancer\'s dominant marker shows), each carrying one copy of m; one quarter CyO/CyO — dead (the balancer\'s own recessive lethal kills its homozygote).',
          'Count the adults: only m/CyO survives. EVERY adult in the next generation is Curly and carries exactly one copy of m. The stock has regenerated itself — no genotyping, no markers beyond the wings, indefinitely.',
          'State the result: a balancer cross converts the 1 : 2 : 1 zygote ratio into a single adult class. The price is the two dead quarters; the return is that even a lethal, homozygote-sterile mutation can be stored forever. The plain 2 : 1 seen in other balancer crosses (CyO/+ × CyO/+ gives 2 Curly : 1 straight among adults, because only CyO/CyO dies) is the same ledger with one lethal class instead of two.',
        ],
      },
      { kind: 'heading', text: 'Translocations: Swapping Arms Between Chromosomes' },
      {
        kind: 'para',
        text: "A translocation moves a segment from one chromosome to a non-homologous one. In the reciprocal form — the common kind — two chromosomes each break once and trade distal pieces: A·B·C·D and E·F·G·H become A·B·C·H and E·F·G·D. Nothing is lost; the carrier is balanced and usually healthy, with two asterisks. Asterisk one: a breakpoint can land inside a gene and disrupt it, or move a gene into a new chromosomal neighborhood — the position effect you have already met with white-mottled. Asterisk two: meiosis. The two normal and two translocated chromosomes find each other by homology and assemble into a cross-shaped quadrivalent (Figure 2), and how that cross segregates decides the carrier's fertility. Alternate segregation sends opposite poles either both original chromosomes or both translocated ones — balanced gametes either way. Adjacent-1 segregation sends one normal and one translocated chromosome to each pole — every such gamete carries one duplication and one deletion. Adjacent-2, where homologous centromeres travel to the same pole, is unbalanced too and rare. Because alternate and adjacent-1 are roughly a coin flip, a reciprocal-translocation carrier loses about half of all gametes — semisterility again, but this time regardless of crossovers.",
      },
      {
        kind: 'figure',
        caption: 'Figure 2 — The translocation quadrivalent and its two fates. Four chromosomes — two normal, two reciprocally translocated — pair by homology into a cross. Alternate segregation (opposite poles: both original OR both translocated chromosomes) gives balanced gametes; adjacent-1 segregation (one normal + one translocated to each pole) gives gametes with a duplication and a deletion. Roughly half of gametes are unbalanced: the carrier is semisterile — no crossover required.',
        afterConcept: 7,
        svg: `<svg viewBox="0 0 880 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cross-shaped quadrivalent of two normal and two translocated chromosomes, with alternate segregation giving balanced gametes and adjacent-1 segregation giving duplication-deletion gametes">
  <style>.lbl{font-family:Georgia,serif;font-size:14px;fill:#3f3f46}.big{font-size:17px;font-weight:bold}.sm{font-size:12px;fill:#52525b}.ink{stroke:#8a8a93;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}.cen{fill:#7c3aed}.box{fill:none;stroke:#c8c8d0;stroke-width:1.6;stroke-dasharray:5 4}.ok{fill:#15803d}.bad{fill:#e11d48}.node{fill:#f4f4f5;stroke:#c8c8d0;stroke-width:1.4}</style>
  <text class="lbl big" x="28" y="34" fill="#3f3f46">The quadrivalent: two normals, two translocated, one cross</text>
  <rect x="24" y="52" width="392" height="360" rx="12" class="box"/>
  <text class="lbl" x="40" y="78" font-weight="bold">pairing: N1 · T1 · N2 · T2</text>
  <text class="sm" x="40" y="98">N1 = A B (•) C D    T1 = A B (•) C H</text>
  <text class="sm" x="40" y="116">N2 = E F (•) G H    T2 = E F (•) G D</text>
  <path class="ink" d="M220 130 V250 M220 250 V370 M150 250 H290 M290 250 H360"/>
  <circle cx="220" cy="250" r="7" class="cen"/>
  <text class="sm" x="228" y="132">N1 (vertical, top)</text>
  <text class="sm" x="120" y="132">T1</text>
  <text class="sm" x="228" y="392">T2 (vertical, bottom)</text>
  <text class="sm" x="296" y="268">N2</text>
  <text class="sm" x="40" y="340">homologous segments find each other;</text>
  <text class="sm" x="40" y="356">the four chromosomes pair into a cross —</text>
  <text class="sm" x="40" y="372">the quadrivalent</text>
  <rect x="456" y="52" width="400" height="360" rx="12" class="box"/>
  <text class="lbl" x="472" y="78" font-weight="bold">segregation: two fates</text>
  <path class="ink" d="M500 120 L780 120 M500 120 l14 -6 v12 z M780 120 l-14 -6 v12 z"/>
  <text class="lbl ok" x="560" y="108">alternate → balanced gametes</text>
  <text class="sm" x="500" y="146">gamete gets N1 + N2 (normal) — or T1 + T2 (balanced)</text>
  <rect x="500" y="162" width="150" height="26" rx="6" class="node"/><text class="sm ok" x="575" y="179" text-anchor="middle">N1 + N2 ✓</text>
  <rect x="660" y="162" width="150" height="26" rx="6" class="node"/><text class="sm ok" x="735" y="179" text-anchor="middle">T1 + T2 ✓</text>
  <path class="ink" d="M500 240 L780 240 M500 240 l14 -6 v12 z M780 240 l-14 -6 v12 z"/>
  <text class="lbl bad" x="530" y="228">adjacent-1 → unbalanced gametes</text>
  <text class="sm" x="500" y="266">gamete gets N1 + T2 — or T1 + N2: every one</text>
  <text class="sm" x="500" y="282">carries a duplication AND a deletion</text>
  <rect x="500" y="298" width="150" height="26" rx="6" class="node"/><text class="sm bad" x="575" y="315" text-anchor="middle">N1 + T2 ✗ dup·del</text>
  <rect x="660" y="298" width="150" height="26" rx="6" class="node"/><text class="sm bad" x="735" y="315" text-anchor="middle">T1 + N2 ✗ dup·del</text>
  <text class="sm" x="472" y="356">alternate vs adjacent-1 ≈ a coin flip →</text>
  <text class="lbl" x="472" y="376" font-weight="bold" fill="#b91c1c">about half the gametes die — no crossover required</text>
  <text class="sm" x="472" y="398">t(9;22)(q34;q11.2): the Philadelphia chromosome is exactly such a swap</text>
</svg>`,
      },
      {
        kind: 'para',
        text: "Then the case that changed medicine. In 1960, Peter Nowell — a pathologist in Philadelphia — and a young researcher, David Hungerford, reported in Science, in a 243-word abstract titled 'A minute chromosome in human chronic granulocytic leukemia', that cells from seven patients with that leukemia carried one strikingly small chromosome (Science 132:1497). The Edinburgh group that confirmed the finding nicknamed it the Philadelphia chromosome — the first chromosome abnormality ever tied to one specific cancer. For thirteen years the debate simmered: was the minute chromosome a lost fragment of chromosome 22, or something else? In 1973 Janet Rowley, armed with the new quinacrine-fluorescence and Giemsa-banding stains, settled it in Nature: the minute chromosome is not a loss but a SWAP — a reciprocal translocation, t(9;22)(q34;q11.2), exchanging a tip of chromosome 9's long arm for a piece of chromosome 22 (Nature 243:290-293). About 95 percent of chronic myelogenous leukemias carry it, and a sizable fraction of adult acute lymphoblastic leukemias too. What the fused BCR-ABL gene does to the cell, and how the drug imatinib was designed against it, belong to the cancer-genetics lesson (3.4) — that lesson owns the molecular story. This one owns the cytogenetic proof beneath it: a cancer can BE a chromosome rearrangement, visible under a microscope years before any molecular tool could have found it.",
      },
      {
        kind: 'para',
        text: "Robertsonian translocations trade whole arms. The five human acrocentric chromosomes — 13, 14, 15, 21, 22 — keep nearly all their bulk in the long arm; their tiny short arms carry only redundant ribosomal-RNA gene repeats. When two acrocentrics break at or near their centromeres and fuse long-arm to long-arm, the product is one metacentric mega-chromosome plus one discarded stub. The carrier's karyotype shows 45 chromosomes, every gene accounted for, phenotype normal. The classic is rob(14;21)(q10;q10), written 45,XX,rob(14;21)(q10;q10) for a carrier. In the carrier's meiosis the three involved chromosomes form a trivalent, and a gamete that receives both the translocation chromosome and the free chromosome 21 produces, after fertilization by a normal gamete, a fetus with two full long arms of chromosome 21 from the carrier plus one from the other parent — translocation trisomy 21. The counseling numbers are sex-asymmetric: a female carrier of rob(14;21) faces a per-pregnancy risk on the order of 10-15 percent of a liveborn affected child (plus substantial miscarriage), a male carrier around 1-3 percent. Lesson 2.1 owns free trisomy 21 and its maternal-age effect; the Robertsonian form is the INHERITED kind — rarer, but it demands family tracing, which is why relatives of any translocation-case child are karyotyped.",
      },
      {
        kind: 'para',
        text: "Two footnotes with big futures. First, bridge-breakage-fusion. McClintock spent 1936-1941 at Missouri proving — in papers such as 'The Stability of Broken Ends of Chromosomes in Zea Mays' (Genetics, 1941) — that a break-created chromosome end is sticky: two broken ends fuse, the resulting dicentric bridges and tears at the next anaphase, and the cycle repeats, amplifying and deleting DNA generation after generation. Her bridge-breakage-fusion cycle is the named mechanism behind chromosomal chaos in cancer cells; the transposon lesson owns her Ac/Ds discovery and her biography, and this lesson claims only the bridges. Second, chromosome-number evolution runs on fusions of exactly the Robertsonian kind: the evolutionary-biology book teaches how human chromosome 2 reveals an ancient head-to-head fusion of two ancestral ape chromosomes. Cytogenetics and evolution meet at the centromere.",
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Six traps recur. Balanced does not mean harmless: breakpoints can cut genes and position effects can silence them — the white-mottled eye is a balanced rearrangement and still abnormal. Do not over-read semisterility: the 1 − f/2 bill depends on crossovers inside the loop, so a small inversion that rarely recombines — or any inversion in a no-crossover sex, like Drosophila males — costs nothing, and human inversion carriers are often fully fertile. Adjacent-1 and adjacent-2 are different mistakes: adjacent-1 sends homologous centromeres to OPPOSITE poles (common), adjacent-2 sends them together (rare) — both unbalanced, different products. A Robertsonian carrier is not a patient: 45 chromosomes, healthy, no action needed — the risk is conditional on segregation, and it is sex-asymmetric (mother roughly 10-15 percent, father 1-3 percent for rob(14;21)). Deletion severity does not scale simply with size — it scales with how many dosage-sensitive genes the segment spans. And pseudodominance is not dominance: a deletion heterozygote shows a recessive phenotype only because the wild-type copy opposite it was deleted; the deletion itself is a loss, not a dominant allele.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Structural chromosome mutation', def: 'A change in gene order or dosage on a chromosome — deletion, duplication, inversion or translocation — as opposed to a change in chromosome number (aneuploidy) or in a single base pair.' },
        { term: 'Pseudodominance', def: 'The appearance of a recessive phenotype in a heterozygote because the homologous segment carrying the wild-type allele has been deleted.' },
        { term: 'Terminal / interstitial deletion', def: 'Loss of the end of an arm beyond one break versus loss of the internal acentric fragment between two breaks.' },
        { term: 'Contiguous-gene syndrome', def: 'A package of symptoms from one deletion removing several neighboring genes — cri-du-chat (5p), Williams (7q11.23), 22q11.2 deletion syndrome.' },
        { term: 'Tandem duplication', def: 'A duplicated segment seated head-to-tail beside the original copy — Bar eye (region 16A) is the classical case.' },
        { term: 'Unequal crossing-over / NAHR', def: 'Recombination between misaligned homologous repeats; one product gains a duplication, the other the reciprocal deletion.' },
        { term: 'Paracentric / pericentric inversion', def: 'A 180-degree flip of a segment excluding / including the centromere.' },
        { term: 'Dicentric bridge and acentric fragment', def: 'The anaphase bridge of a two-centromere chromatid and the centromere-less fragment that is lost — the two corpses of a paracentric crossover.' },
        { term: 'Semisterility', def: 'The roughly half-viable gamete output of inversion and translocation heterozygotes; for inversions V = 1 − f/2 with f the loop-crossover frequency.' },
        { term: 'Balancer chromosome', def: 'A stock-keeping Drosophila chromosome with stacked inversions, a dominant marker (Curly in CyO) and a recessive lethal, which holds mutations without recombination.' },
        { term: 'Reciprocal / Robertsonian translocation', def: 'A two-way trade of distal segments between non-homologues versus a whole-arm fusion of two acrocentric chromosomes.' },
        { term: 'Position-effect variegation', def: 'Clonally variable silencing of a gene relocated near heterochromatin by an inversion — the white-mottled eye.' },
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Cancer cytogenetics: the Philadelphia chromosome is found by karyotype or FISH in routine leukemia workups — the first and still the clearest case of a chromosome rearrangement as diagnostic marker (the drug story is the cancer-genetics lesson\'s).',
        'Reproductive genetics: carriers of balanced translocations and inversions receive segregation-risk counseling and embryo testing; every unbalanced child triggers parental karyotypes.',
        'Clinical microarrays: array-comparative-hybridization screens for microdeletion and microduplication syndromes in children with developmental delay — the modern top rung of Lesson 2.1\'s detection ladder.',
        'Neuromuscular genetics: exon-deletion reading-frame arithmetic (deleted nucleotides mod 3) separates Duchenne from Becker prognosis and guides exon-skipping therapy design.',
        'Model-organism genetics: balancer chromosomes maintain thousands of Drosophila lines, and standardized deficiency kits let researchers map new lethal mutations to intervals by pseudodominance.',
        'Breeding and evolution: inversions lock favorable allele blocks together (mosquito climate adaptation), and wheat-rye translocation lines moved disease-resistance blocks between crop species.',
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In a Drosophila line, an inversion loop crosses over in 80 percent of meioses. What fraction of a heterozygous FEMALE\'S eggs is viable?',
          options: ['40 percent', '50 percent', '60 percent', '80 percent'],
          answer: 2,
          explain: 'V = 1 − f/2 with f = 0.8 gives V = 0.6: every recombining meiosis kills half its products, the other 20 percent lose none. A male would be fully fertile — Drosophila males never cross over.',
        },
        {
          q: 'A single crossover inside a PERICENTRIC inversion loop produces recombinant chromatids that are:',
          options: ['one dicentric and one acentric', 'all with one centromere, two carrying a duplication and a deletion', 'all balanced', 'all acentric'],
          answer: 1,
          explain: 'Because the loop contains the centromere, each recombinant keeps exactly one centromere — no bridges form. The damage is genetic: everything distal to the breakpoints is duplicated on one chromatid and deleted on the other.',
        },
        {
          q: 'A stock m/CyO × m/CyO is set up, where m is recessive lethal and CyO also carries a recessive lethal. The ADULT progeny are:',
          options: ['1 Curly : 2 straight', 'all Curly, all carrying m', '2 Curly : 1 straight', 'all straight'],
          answer: 1,
          explain: 'The 1 : 2 : 1 zygote ratio loses m/m to your mutation and CyO/CyO to the balancer\'s own lethal; only m/CyO survives — Curly, one copy of m. The stock regenerates itself identically every generation.',
        },
        {
          q: 'A child has a recessive condition, yet only ONE parent carries the point mutation. The best cytogenetic explanation is:',
          options: ['pseudodominance: a deletion covering the locus was inherited from the other parent', 'an inversion loop error', 'a Robertsonian fusion', 'position-effect variegation'],
          answer: 0,
          explain: 'One parent passed the mutant allele; the other passed a chromosome whose copy of that gene is deleted outright. The child is a heterozygote with the wild-type copy missing — the recessive allele is uncovered: pseudodominance.',
        },
        {
          q: 'Read the notation t(9;22)(q34;q11.2). The band 9q34 means:',
          options: ['chromosome 9, long arm, region 3, band 4', 'chromosome 9, short arm, band 34', 'the 34th gene on chromosome 9', 'chromosome 9 deleted at band 4'],
          answer: 0,
          explain: 'q marks the long arm (p the short), and the digits count regions and bands outward from the centromere: q34 is long arm, region 3, band 4 — the ABL-side breakpoint of the Philadelphia swap.',
        },
        {
          q: 'A rob(14;21) carrier has how many chromosomes, and roughly what per-pregnancy risk of an affected liveborn child when the MOTHER is the carrier?',
          options: ['46; about 1 percent', '45; on the order of 10-15 percent', '45; about 50 percent', '46; about 25 percent'],
          answer: 1,
          explain: 'The whole-arm fusion costs one chromosome (45 total) but no genes — the carrier is healthy. Female rob(14;21) carriers face roughly a 10-15 percent liveborn risk (male carriers about 1-3 percent), from unbalanced segregation of the trivalent.',
        },
        {
          q: 'Sturtevant\'s 1925 proof that Bar is a duplication rested on:',
          options: ['Bar females occasionally producing one wild-type and one ultra-Bar daughter together', 'Bar mapping to three separate loci', 'Bar being lethal in males', 'X-rays breaking the Bar locus'],
          answer: 0,
          explain: 'Unequal crossing-over between out-of-register tandem copies yields reciprocal products of ONE event: one chromosome back to a single copy (wild-type revertant) and one with three copies (ultra-Bar) — co-occurring in the same broods, as observed. Bridges confirmed it cytologically in 1936: band 16A twice in Bar, three times in ultra-Bar.',
        },
        {
          q: 'White-mottled eyes in Drosophila arise because an inversion placed the white gene near heterochromatin. The VARIEGATION itself tells you:',
          options: ['the gene is deleted in half the cells', 'silencing spreads clonally — some eye lineages express white, others do not', 'the gene mutates back and forth', 'each cell carries a different inversion'],
          answer: 1,
          explain: 'Position-effect variegation: whether the heterochromatic silence spreads over the relocated gene is fixed per cell lineage early in development, so the adult eye is a mosaic of red and white patches — the classical doorway into chromatin-level gene regulation.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'path',
        text: 'Grounding: OpenStax Biology 2e, section 13.2 "Chromosomal Basis of Inherited Disorders" (structural rearrangements); Introduction to Genetics (LibreTexts OER compilation) — the chromosomal-mutation and inversion sections. Primary sources: Bridges 1917 "Deficiency" (Genetics 2), Sturtevant 1925 (Genetics 10:117-147), Sturtevant & Beadle 1936 (Genetics 21), Bridges 1936 (Bar, band 16A), McClintock 1941 "The Stability of Broken Ends of Chromosomes in Zea Mays" (Genetics 26), Nowell & Hungerford 1960 (Science 132:1497), Rowley 1973 (Nature 243:290-293). Carves: Lesson 2.1 owns karyograms, banding, FISH, aneuploidy and the four-rearrangement survey; 2.2 owns Muller\'s morphs and the deletion/duplication testers; 1.6 owns linkage-map arithmetic; 3.1 owns microarray mechanics and genome architecture; 3.4 owns BCR-ABL and imatinib; the cell-molecular book owns double-strand-break repair biochemistry, chromatin and the McClintock transposon story; the evolutionary-biology book owns human chromosome 2; lesson 4.4 will price inversion polymorphisms in populations; the quantitative-genetics chapter (6) will revisit recombination suppression as map contraction. Next in this book: 3.1 Genomics and Bioinformatics.',
      },
    ],
  },
]
