/**
 * Knowledge Universe — Genetics & Heredity — Chapter 02: Cytogenetics & Allelic Analysis
 * 2 lessons · ~4,688 words
 * field: Genetics & Heredity
 * legacy sources: x60-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Cytogenetics, Allelic Analysis]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 bio-chromosome-number-structure — Chromosomes Under Glass: Number, Structure and Karyotypes
 *   02.2 bio-alleles-mullers-morphs — What Alleles Do: Wild Type, Muller's Morphs and Complementation
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
]
