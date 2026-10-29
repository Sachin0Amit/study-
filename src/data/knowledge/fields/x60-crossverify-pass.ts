import type { KnowledgeTopic } from '../types'

/** CROSS-VERIFY PASS X60 (2026-10-26): Genetics & Heredity (book 5,
 *  ku-genetics-heredity) cross-verified against "Introduction to Genetics"
 *  — the LibreTexts OER compilation remixed by Ying Liu (City College of
 *  San Francisco, compiled 08/08/2026), built on Todd Nickle & Isabelle
 *  Barrette-Ng, "Online Open Genetics" (Mount Royal University, CC BY-SA
 *  3.0) and OpenStax Biology 2e genetics chapters (CC BY 4.0). The full
 *  478-page PDF (35 MB, bio.libretexts.org batch print) was downloaded to
 *  tmp-books/, signature-validated, pdftotext-extracted and read chapter
 *  by chapter IN FULL for the genetics-relevant scope: Ch3 Meiosis,
 *  Ch4 Mendelian Genetics (incl. 4.4 test crosses, 4.6 first law,
 *  4.10 biochemical basis of dominance, 4.14-4.15 penetrance/chi-square),
 *  Ch5 Genetic Analysis of Multiple Genes (incl. 5.2 epistasis, 5.4.8
 *  Muller's Morphs), Ch6 Sex Chromosomes (incl. pseudoautosomal regions),
 *  Ch9.6 Complementation tests, Ch9.8 Linkage and Mapping (incl. 9.8.7
 *  three-point crosses), Ch10 Changes in Chromosome Number and Structure
 *  (incl. FISH diagnosis), Ch11.6 Population Genetics, Ch12 Techniques of
 *  Molecular Genetics, Ch14 Genomics, Ch15 Molecular Markers and QTL.
 *
 *  CROSS-VERIFY RESULT — our nine existing genetics lessons (bio-genetics-
 *  mendel, bio-meiosis-linkage-inheritance, bio-beyond-mendel-extensions,
 *  bio-population-inheritance-frequencies, bio-population-genetics,
 *  bio-genomics-bioinformatics, bio-crispr-gene-editing,
 *  bio-biotechnology-rdna-processes, bio-biotechnology-applications)
 *  agree with the book on every shared claim checked: segregation and
 *  independent assortment with their meiotic physical bases, Punnett and
 *  test-cross logic, Sutton-Boveri and Morgan's 1910 white-eyed fly,
 *  prophase-I substages, Bateson-Punnett 1905 sweet peas, RF = recombinants
 *  /total with 50% as the unlinked ceiling, coupling/repulsion testcross
 *  data, double crossovers revealing gene order in three-point crosses,
 *  recessive epistasis 9:3:4 (Labrador B/E loci — the book's own example),
 *  dominant epistasis 12:3:1 (squash — the book's own example),
 *  complementary 9:7 and duplicate 15:1, hemizygosity, Barr bodies and
 *  calico mosaics, Hardy-Weinberg conditions and the q-squared-to-carrier
 *  arithmetic (the book's own worked numbers), HGP 1990-2003 with the
 *  Bermuda 24-hour release rule, ~20,000 genes under 2% coding, PCR
 *  temperature ladder and Taq, pBR322 insertional inactivation, blue-white
 *  screening, STR product-rule forensics, insulin 1982, HAT-medium
 *  hybridoma selection, Bt midgut activation, golden rice psy+crtI.
 *  ZERO factual corrections were needed — no claim in our nine lessons
 *  contradicts the book.
 *
 *  THREE STRUCTURE FINDINGS, acted on:
 *  (1) ORDER — the x14-heredity-biotech spread sits above the main-array
 *      Mendel object in life-sciences.ts, so Classical & Transmission
 *      Genetics rendered as meiosis, beyond-Mendel, Mendel — foundations-
 *      last, the exact inversion of USER RULE 5, and the meiosis lesson
 *      itself lists "Mendel's Laws" as its prerequisite. FIXED by moving
 *      the bio-genetics-mendel object above the x14 spreads (id and
 *      content untouched; only section numbers re-sequence; Mendel now
 *      renders as 1.1 of the book).
 *  (2) MISSING SUBTOPICS the book teaches as full sections with zero live
 *      coverage anywhere in the Library (grep-verified across
 *      public/data/content.json AND all field files): chromosome-structure
 *      rearrangements ("translocation", "inversion", "deletion loop",
 *      "paracentric", "pericentric", "Robertsonian", "cri-du-chat",
 *      "haploinsufficient": 0 hits); penetrance/expressivity and the
 *      chi-square goodness-of-fit test ("penetrance", "expressivity",
 *      "goodness-of-fit": 0 hits); Muller's morphs and complementation
 *      ("hypomorph", "neomorph", "antimorph", "complementation test": 0
 *      hits; the 24 "amorph" hits are all "megamorphic"/"amorphous" false
 *      positives). Three new lessons below fill exactly these gaps, WITH
 *      4-question quizzes + explanations as the user requires.
 *  (3) CARVING — bio-chromosome-number-structure owns the cytogenetic VIEW
 *      (karyotypes, syndromes, structural rearrangements, FISH) and carves
 *      against bio-meiosis-linkage-inheritance (which owns the meiotic
 *      MECHANISM of nondisjunction and which we do not re-teach) and
 *      bio-beyond-mendel-extensions (which owns X-inactivation mechanics —
 *      here only the Barr-body COUNT appears, as a clinical tool);
 *      bio-penetrance-expressivity owns the QUANTIFIED genotype-phenotype
 *      correlation and the statistics of testing ratios, carving against
 *      bio-beyond-mendel-extensions (which owns categorical environment
 *      rewrites — Himalayan rabbit, PKU, hydrangea — and 2:1 lethal
 *      ratios) and the population lessons (which own frequency-level
 *      thinking); bio-alleles-mullers-morphs owns allele-level functional
 *      classification and complementation, carving against
 *      bio-genetics-mendel (dominance definitions), beyond-Mendel
 *      (pleiotropy/lethals at trait level) and the cell-molecular book's
 *      DNA-repair lesson (repair biochemistry). Carving is restated in
 *      each topic's 'Where next' callout.
 *
 *  Source citations live in each 'Where next' callout and in this header.
 */
export const x60CrossverifyTopics: KnowledgeTopic[] = [
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
  {
    id: 'bio-penetrance-expressivity',
    title: 'When Genes Do Not Follow the Script: Penetrance, Expressivity and the Chi-Square Test',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Classical Genetics',
    tier: 'advanced',
    concepts: [
      'Phenotype is genotype multiplied by environment',
      'Penetrance: does the genotype show at all?',
      'Expressivity: how strongly does it show?',
      'Chance, environment and modifier genes',
      'Why real crosses miss their ratios',
      'The chi-square goodness-of-fit test',
      'Degrees of freedom and the 0.05 cutoff',
    ],

    words: 1808,
    readMins: 9,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Every ratio in this book — 3:1, 9:3:3:1, 9:3:4 — is a promise with a footnote. The genotypes in a Punnett square are certainties, but the phenotypes above them are not: many traits are determined by an interaction between genotype and non-genetic, environmental factors, so the same allele can build different bodies in different surroundings, different households of modifier genes, or plain molecular luck. This lesson adds the two descriptors that quantify how faithfully a genotype produces its phenotype — penetrance and expressivity — and the statistical test that decides whether a cross's deviation from its expected ratio is honest sampling noise or evidence that an assumption has failed. Both ideas come straight from the classical curriculum; both are absent from every other lesson here, which is exactly why they have their own.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Genetic counselors quote penetrance the way weather services quote rain: a dominant-disease allele is quoted as a percentage chance of expression per carrier, not a certainty, and the sentence changes lives. The same discipline runs the laboratory: before a geneticist publishes a 9:3:3:1 ratio or claims linkage, the chi-square goodness-of-fit test arbitrates whether the counts support the claim. Between counseling rooms and count sheets, these two tools are how genetics stays honest about its own expectations.",
      },
      {
        kind: 'para',
        text: "Start with the relationship the deviations reveal. A phenotype is not read off a genotype like a printout; it is the product of the genotype and everything else — the exposure history, the other genes, the developmental dice. The book's example is cancer: a particular genotype may predispose an individual to cancer, but the cancer may develop only if the individual is exposed to certain DNA-damaging chemicals, so not every carrier of the genotype develops the phenotype. The beyond-Mendel lesson already met categorical versions of this — the Himalayan rabbit's coat written by temperature, hydrangeas written by soil pH, PKU rewritten by diet. This lesson goes one step further and asks for NUMBERS: in what fraction of genotype-carriers does the trait appear, and how much does it vary when it does?",
      },
      {
        kind: 'para',
        text: "Penetrance is the proportion of individuals with a particular genotype that display the corresponding phenotype, usually a percentage. When every pea plant homozygous for the white-flower allele is, in fact, white-flowered, the genotype is completely penetrant — Mendelian expectations assume as much. Many human genetic diseases are incompletely penetrant: some carriers of the disease genotype never develop symptoms. Standard teaching examples make the point concrete — polydactyly (extra digits) is a dominant trait in which some carriers show the phenotype and others, genetically identical at that locus, show ordinary hands — and clinical genetics quotes figures the same way for conditions from hereditary cancers to cardiac-channel disorders. Penetrance is a property of the POPULATION, not the person — a frequency, exactly like the allele frequencies the population lessons count, and the same level-discipline applies: no individual is forty-percent penetrant.",
      },
      {
        kind: 'para',
        text: "Expressivity is the complement: among individuals who DO show the phenotype, how much do they differ? It describes the variability in mutant phenotypes observed among individuals with the same genotype — narrow when every expresser looks alike, broad when the same genotype produces severities from trivial to profound. Both incomplete penetrance and broad expressivity trace to the same three causes: random developmental chance, non-genetic environmental factors, and mutations in OTHER genes — modifier loci that turn a clean ratio into a distribution. Human genetic diseases supply the textbook cases: individuals with the same disease genotype vary greatly in symptom severity, and the pedigree counselor who expects one phenotype per genotype will misread the family tree.",
      },
      {
        kind: 'para',
        text: "Deviations also plague the experimental side, and most of them are innocent. A real cross rarely reproduces its expected ratio exactly — sampling effects alone guarantee wobble, the same coin-flip luck the Mendel lesson's Punnett arithmetic hides. Less innocently, certain genotypes can have less than a full survival rate: in Drosophila, crosses give unexpected counts because zygotes carrying more mutant alleles are less likely to survive to adulthood, so the dead classes are under-represented whenever adults are counted. The working question is always the same: is THIS deviation consistent with sampling, or large enough to demand a re-examination of the assumptions? Answering it needs statistics, and genetics has had its standard since the 1900s.",
      },
      {
        kind: 'formula',
        name: 'Chi-square goodness-of-fit',
        latex: '\\chi^2 = \\sum \\frac{(O - E)^2}{E}',
        meaning: 'Sum over every phenotypic class: squared deviation from the expected count, divided by the expected count. Small sums are sampling noise; large sums indict the model.',
      },
      {
        kind: 'para',
        text: "The procedure is four steps. One: from the expected ratio and the total offspring count, compute the EXPECTED number in each class. Two: for each class, take the squared difference between observed and expected, divide by expected, and sum — that is chi-squared. Three: count the degrees of freedom as the number of classes minus one (a 3:1 cross has two classes, df = 1; a 9:3:3:1 cross has four, df = 3). Four: compare against the critical value for that df at the conventional significance level of 0.05 — 3.84 for df = 1, 5.99 for df = 2, 7.81 for df = 3. Below the critical value, the deviation is consistent with sampling and the model stands (statisticians say fail to reject); above it, the deviation is too large to blame on luck, and some assumption — independent assortment, viability, penetrance — must be re-examined.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Problem: a Tt x Tt cross yields 200 offspring, expected 3 tall : 1 short — that is, 150 and 50. Counting gives 160 tall and 40 short. Is the model dead?',
        'Compute chi-squared class by class: tall contributes (160 − 150) squared over 150 = 100/150 = 0.67; short contributes (40 − 50) squared over 50 = 100/50 = 2.00.',
        'Sum: chi-squared = 0.67 + 2.00 = 2.67, on df = 1 (two classes minus one).',
        'Compare: the df = 1 critical value at p = 0.05 is 3.84, and 2.67 < 3.84 — fail to reject. A ten-offspring wobble in two hundred is ordinary sampling.',
        'Contrast: had the count come in at 175 and 25, chi-squared = (25 squared/150) + (25 squared/50) = 4.17 + 12.50 = 16.67 — far past 3.84. That model IS dead: hunt for reduced viability, incomplete penetrance, or a mis-scoring error before trusting the ratio again.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Six slips recur. Penetrance and expressivity answer different questions — WHETHER a genotype shows versus HOW MUCH — and mixing them misreads every pedigree. Penetrance is a population-level frequency, so it never describes one individual (the population lessons' level rule, restated). Expressivity is not pleiotropy: one trait varying in degree versus one gene producing many traits. The chi-square test must be computed on COUNTS, never on percentages — the expected numbers come from the ratio times the total. Degrees of freedom is classes minus one, not sample size minus one. And a passing test does not PROVE the model — it merely fails to refute it; a 2.67 could sit beside a true linkage that a bigger sample would expose, which is why sample size is reported with every chi-square.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Penetrance', def: 'The proportion of individuals with a given genotype that display its phenotype — complete at 100 percent, incomplete below.' },
        { term: 'Incomplete penetrance', def: 'A genotype that fails to express its phenotype in some carriers — the source of silent generations in dominant-disease pedigrees.' },
        { term: 'Expressivity', def: 'The degree of phenotype shown by an individual with a given genotype — narrow when uniform, broad when severity varies widely.' },
        { term: 'Modifier gene', def: 'A second-locus gene that alters another gene\'s expression — one of the three causes of incomplete penetrance and broad expressivity.' },
        { term: 'Goodness-of-fit test', def: 'A statistical comparison of observed counts against counts expected under a model, judging whether deviation exceeds sampling luck.' },
        { term: 'Chi-square', def: 'The summed, expected-weighted squared deviations — the statistic the goodness-of-fit test reads.' },
        { term: 'Degrees of freedom', def: 'Number of phenotypic classes minus one; it selects the critical value for comparison.' },
        { term: 'Critical value', def: 'The cutoff above which a deviation is judged too large for sampling noise — 3.84 at df = 1, 7.81 at df = 3, all at p = 0.05.' },
        { term: 'Sampling effect', def: 'The random wobble of finite counts around their expectation — the innocent null hypothesis every chi-square test defends.' },
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Genetic counseling: dominant-condition counseling quotes penetrance — the risk sentence given to families is a penetrance figure, not a certainty.',
        'Clinical surveillance: variable expressivity tells physicians what spectrum to watch for in the same family — severity in one relative predicts presence, not degree, in another.',
        'Laboratory genetics: every published ratio in classical genetics carries its chi-square; the test is the field\'s standard referee for cross data.',
        'Breeding and agriculture: seed companies count segregating progeny with the same arithmetic before releasing a line, separating real ratios from sampling luck.',
        'Quality control: chi-square checks flag scoring errors and viability surprises early — a rejected model is usually a discovery, not a failure.',
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Penetrance measures:',
          options: ['how severe a phenotype is in one individual', 'the proportion of genotype-carriers that show the phenotype', 'the frequency of the allele in the population', 'the number of phenotypic classes in a cross'],
          answer: 1,
          explain: 'Penetrance is the fraction of individuals with a given genotype that display its phenotype — a population-level percentage, distinct from expressivity (how MUCH those who show it vary).',
        },
        {
          q: 'A 3:1 cross yields chi-squared 2.67 on df = 1 (critical value 3.84). The conclusion is:',
          options: ['the model is refuted — find the mechanism', 'the deviation is consistent with sampling; fail to reject the model', 'the test proves the model is true', 'the degrees of freedom were miscalculated'],
          answer: 1,
          explain: 'Below the critical value the deviation fits ordinary sampling luck, so the model stands. A pass never PROVES a model — it only fails to refute it; rejecting is what forces a hunt for viability, penetrance or linkage.',
        },
        {
          q: 'Members of one family carry the same dominant genotype; some show the trait severely, others mildly, all show it. This is:',
          options: ['incomplete penetrance', 'broad expressivity', 'recessive epistasis', 'a sampling effect'],
          answer: 1,
          explain: 'Everyone expresses (penetrance is complete) but severity varies widely — broad expressivity, driven by chance, environment and modifier genes.',
        },
        {
          q: 'Testing observed counts against a 9:3:3:1 expectation uses how many degrees of freedom?',
          options: ['1', '2', '3', '4'],
          answer: 2,
          explain: 'Four phenotypic classes minus one gives df = 3, whose p = 0.05 critical value is 7.81 — more classes, more room for wobble, higher bar before rejecting.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'path',
        text: 'Grounding: "Introduction to Genetics" (LibreTexts OER compilation remixed by Ying Liu, CCSF, compiled 2026) — Section 4.14 "Phenotypes May Not Be As Expected from the Genotype" and Section 4.15 "Phenotypic Ratios May Not Be As Expected" (Nickle & Barrette-Ng, CC BY-SA; penetrance/expressivity figure logic after Locke). The beyond-Mendel lesson (1.3) owns categorical environment-phenotype rewrites and lethal-allele ratios; the population lessons (Chapter 4) own frequency-level thinking and the chi-square\'s cousin role in equilibrium testing; the meiosis lesson (1.2) owns the sampling logic that recombination data inherits.',
      },
    ],
  },
]
