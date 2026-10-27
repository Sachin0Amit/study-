import type { KnowledgeTopic } from '../types'

/** CROSS-VERIFY PASS X66 (2026-10-28): Genetics & Heredity (book 5,
 *  ku-genetics-heredity) cross-verified against T. Timothy Nickle &
 *  Michael J. Barrette-Ng, "Online Open Genetics" (LibreTexts edition,
 *  CC BY-NC-SA 3.0) — the most-adopted OPEN genetics textbook (a
 *  complete 13-chapter genetics course text; official free hosting at
 *  bio.libretexts.org/Bookshelves/Genetics). THE WHOLE BOOK was read in
 *  full this run (13 chapters / 93 sections, ~69,000 words walked via
 *  LibreTexts chapter pages into tmp-books/oog-full.txt): Ch1
 *  Overview-DNA-Genes; Ch2 Chromosomes-Mitosis-Meiosis; Ch3 Genetic
 *  Analysis of Single Genes; Ch4 Mutation and Variation (complementation);
 *  Ch5 Pedigrees and Populations; Ch6 Genetic Analysis of Multiple Genes;
 *  Ch7 Linkage and Mapping; Ch8 Techniques of Molecular Genetics; Ch9
 *  Changes in Chromosome Number and Structure; Ch10 Molecular Markers and
 *  Quantitative Traits; Ch11 'Omics; Ch12 Regulation (owned by the Cell &
 *  Molecular Biology book — skimmed); Ch13 Cancer Genetics (owned by
 *  health-understanding-cancer — skimmed for carving only).
 *
 *  CONVERGENCE RESOLVED per the 6aaf804/385cf03 precedent: while this run
 *  walked the book, three parallel remote sessions had already
 *  cross-verified this same subject and landed most of the same gaps —
 *  322e1a9/d661dcf (IGA 8e run: concepts-label realignment, lambda/Chakrabarty
 *  fixes, Hardy-Weinberg 1908, +5 quiz questions, honest word counts),
 *  the remote X60 OOG-remix run (bio-chromosome-number-structure,
 *  bio-alleles-mullers-morphs, bio-penetrance-expressivity with the
 *  chi-square test built in, and the new Cytogenetics & Allelic Analysis
 *  chapter), and the remote X61 run (bio-markers-qtl-mapping). Per the
 *  zero-repetition rule THIS pass therefore DROPS four of its six drafted
 *  lessons that remote already owns — the penetrance/expressivity lesson
 *  (remote X60's bio-penetrance-expressivity covers penetrance,
 *  expressivity AND the chi-square goodness-of-fit test), the
 *  chi-square-and-complementation analysis-tools lesson (remote X60's
 *  alleles/Muller lesson owns complementation; its penetrance lesson owns
 *  chi-square), the chromosome-structure-rearrangements lesson (remote
 *  X60's bio-chromosome-number-structure covers NHEJ misrepair, the four
 *  rearrangement types, deletion loops, inversion loops, alternate-vs-
 *  adjacent segregation, inv(9), cri-du-chat/CTNND2, and the Down/
 *  Turner/Klinefelter catalogue), and the molecular-markers-QTL lesson
 *  (remote X61's bio-markers-qtl-mapping) — and KEEPS the two subtopics
 *  no remote run touched:
 *
 *  1. bio-pedigree-mode-inference — book §5.2-5.5: pedigree notation
 *     (proband/propositus, half-filled known-carrier symbols, double-line
 *     consanguinity), the five modes (AD, AR, XD, XR, Y-linked) with
 *     their signatures and definitive discriminators (affected father→son
 *     excludes XD; affected daughter from unaffected parents excludes XR;
 *     father→all-sons Y-linked with the Genghis-Khan Y-lineage figure;
 *     mitochondrial maternal-only), and probability chaining through
 *     pedigrees (the 2/3 carrier rule, one-in-sixteen worked product).
 *     Grep-verified: "proband" had ZERO live hits; remote lessons state
 *     X-linked-dominant and Y-linked PATTERNS (beyond-Mendel) but own no
 *     pedigree-inference discipline. Carved against bio-genetics-mendel
 *     (owns square-circle-shading notation basics and the CF 25%
 *     counseling example), bio-beyond-mendel-extensions (owns the
 *     transmission patterns incl. XD rickets and holandric traits), and
 *     the remote X60 penetrance lesson (owns the incomplete-penetrance
 *     caveat this lesson cites).
 *  2. bio-sex-determination-systems — book §3.5: sex as a phenotype; the
 *     variety of chromosomal systems (mammal TDF-Y single-switch,
 *     Drosophila X-to-autosome ratio with the Y irrelevant, XX/XO
 *     grasshoppers, ZW/ZZ birds reversed, haplodiploid bees),
 *     environmental sex determination (alligator temperature, reef-fish
 *     social change), hormonal vs cell-autonomous execution (freemartin
 *     chimeras, gynandromorph mosaics), and the two dosage-compensation
 *     strategies (Drosophila male-X hypertranscription vs mammalian X
 *     inactivation with Barr bodies, plus the Z-linked turkey asymmetry).
 *     Grep-verified: "sex determination", "freemartin", "gynandromorph",
 *     "TDF-Y", "X:A ratio" all had ZERO live hits. Carved against
 *     bio-beyond-mendel-extensions (owns X-linked INHERITANCE patterns
 *     and the calico/X-inactivation phenotype consequence — this lesson
 *     owns the SYSTEMS and the compensation strategies; the passing
 *     "dosage compensation" mention there is forward-referenced here),
 *     the remote X60 karyotype lesson (owns the aneuploidy outcomes this
 *     lesson's switch logic explains), and the evolutionary-biology
 *     kin-selection lesson (owns haplodiploid relatedness arithmetic).
 *
 *  ENRICHMENTS re-applied on the merged (remote-updated) lessons,
 *  book-sourced: bio-meiosis-linkage-inheritance gains coupling-cis vs
 *  repulsion-trans phase vocabulary, the 50% recombination ceiling with
 *  the >30 cM correction caveat, and the syntenic term (book §7.3-7.4);
 *  bio-beyond-mendel-extensions gains the tortoiseshell-vs-calico
 *  piebald distinction and the W_ white-masking dominant epistasis (book
 *  §6.3) — grep-verified absent from the merged state before re-applying.
 *
 *  Word counts verified by scripts/count-topic-words-exact.ts (declared
 *  == actual, tolerance 25). 4-question quizzes with explanations and
 *  worked examples in both lessons.
 */
export const x66CrossverifyTopics: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
{
    id: 'bio-pedigree-mode-inference',
    title: 'Pedigree Analysis: Inferring the Mode of Inheritance',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Classical Genetics',
    tier: 'core',
    concepts: [
      'Pedigree notation: proband, carriers, consanguinity',
      'Autosomal dominant signatures',
      'X-linked dominant signatures',
      'Autosomal recessive signatures',
      'X-linked recessive signatures',
      'Y-linked and mitochondrial transmission',
      'Definitive discriminators between modes',
      'Probability chaining through a pedigree',
    ],
    words: 1582,
    readMins: 8,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: "Human genetics cannot run test crosses — no ethicist would approve prescribed matings — so the family tree itself becomes the experiment. A pedigree chart shows the phenotypes of a single trait across all the available relatives of one family, and pedigree analysis is the inference discipline built on it: determine which modes of inheritance are possible, which is most likely, and what probability of appearance follows for the next child. Genetic counseling, basic research, and the hunt for disease genes all run through this skill. The book warns up front that real pedigrees carry noise — information can be wrong because it rests on family recollections or clinical error, and complications like incomplete penetrance and variable expressivity blur the patterns — so the clean examples analyzed here presume accurate, fully penetrant data.",
      },
      {
        kind: 'para',
        text: "The notation is a visual grammar. Circles represent females and squares males; a horizontal line joining them is a mating; children hang below on a vertical sibship line, in birth order left to right. A filled symbol marks an affected individual; a half-filled symbol marks a KNOWN carrier — someone without symptoms who has passed the allele on. The affected individual who first brings a family to a geneticist's attention is called the proband (or propositus), and the pedigree is effectively the story of everyone the proband's diagnosis managed to reach. Two parallel lines mark a consanguineous mating between close relatives, which matters because it raises the odds that both parents inherited the same rare recessive allele from a shared ancestor.",
      },
      {
        kind: 'para',
        text: "The book organizes inference around five major modes. Autosomal dominant (AD): every affected individual must have an affected parent, so the trait appears in every generation, and because AD diseases are usually rare, affected people are typically heterozygotes — which also means an affected parent can, by chance, have entirely unaffected children in small families. Achondroplastic dwarfism and polydactyly are the standard human examples. X-linked dominant (XD): the allele sits on the X and dominates in females, so females tend to be affected more frequently than males; the discriminators that separate XD from AD become decisive in a moment. Autosomal recessive (AR): both parents of an affected individual must carry the allele, many relatives are unknowing carriers, fewer individuals are affected, and the trait skips generations — the defining signature being UNAFFECTED parents producing affected children. Phenylketonuria and most inborn errors of metabolism follow it.",
      },
      {
        kind: 'para',
        text: "X-linked recessive (XR): any male inheriting the allele is affected because he has only the one X, so males are affected more often than females — though the book cautions that small human family samples often cannot prove a sex bias on their own. Y-linked inheritance is the easiest to identify and among the rarest: only males affected, every affected father transmitting to ALL his sons and NO daughters, because there are so few genes on the Y. The hairy-ear-rim trait seen in some Indian families is the book's example, and the Y's gene-poor character is why Y polymorphisms make such clean paternal-lineage markers — the male-line descendants of Genghis Khan's family still account for about 8% of the Y lineages of men in parts of Asia, roughly 0.5% worldwide. Mitochondrial inheritance completes the set: mutations in mitochondrial DNA pass from mothers to all children, affect both sexes, and can never be transmitted by males, since sperm contribute no mitochondria to the embryo.",
      },
      {
        kind: 'para',
        text: "Because several modes can look alike in a small family, the power of pedigree analysis lives in its definitive discriminators — single observations that exclude a mode entirely. An affected father passing the disease to a son excludes X-linked dominant inheritance outright: a son gets his father's Y, never his X. An affected DAUGHTER born to unaffected parents excludes X-linked recessive inheritance: she would have needed an affected father, since she must inherit the mutant X from him. Father-to-all-sons-with-no-daughters points straight at the Y. Maternal transmission to every child with no paternal cases ever points at the mitochondria. Whenever reciprocal patterns differ between the sexes — daughters of affected fathers versus sons of affected fathers — sex linkage is the usual explanation, and the mode falls out of who transmitted to whom.",
      },
      {
        kind: 'para',
        text: "Once the mode is inferred, probability chaining computes concrete risks by multiplying the chances along the family paths. The method: assign genotypes to every person the pedigree constrains, then multiply independent probabilities down each path and sum over alternatives. The book's worked logic in miniature: the unaffected sibling of an AR patient has a known two-thirds chance of being a carrier (three unaffected genotypes out of four Mendelian boxes, one of which is the non-carrier); if that sibling's spouse is also a known carrier, each child faces the carrier-product one half times one half times the affected fraction one quarter — a one-in-sixteen affected risk. Every risk statement in a counseling session is some such product, which is why mode inference comes first: an inference error of one mode multiplies into every downstream number.",
      },
      { kind: 'example', title: 'Worked Example: Mode Inference from a Textbook Pedigree', steps: [
        'Problem: a pedigree shows affected individuals in every generation; an affected father has an unaffected son, an affected daughter, and an affected son who has an affected son of his own. Females outnumber males among the affected. Infer the mode.',
        'Every generation affected, affected individuals in both sexes: dominant or X-linked dominant — recessive modes would show unaffected parents with affected children.',
        'Affected father to affected SON: this excludes X-linked dominant inheritance, because a son receives no X from his father.',
        'Females affected more frequently than males, transmission father-to-daughter but never father-to-son: the signature of X-linked dominant inheritance (the son affected through his MOTHER would be consistent too).',
        'Conclusion: X-linked dominant — and each daughter of the affected father faces a one-half risk of inheriting the allele, while no son of his ever does.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Four traps recur. Reading every-generation appearance as proof of dominance: an X-linked recessive can imitate it in small families when carrier mothers happen to keep having affected sons. Forgetting that AD affected individuals are usually heterozygotes, so an affected parent with a few unaffected children is normal chance, not proof against the mode. Confusing a half-filled carrier symbol with a mildly affected person: the half-filled symbol means KNOWN heterozygote, unaffected by assumption. And over-trusting the pedigree itself — recollection errors, misdiagnoses, incomplete penetrance and late age of onset all quietly corrupt the tree, which is why counselors verify affected status clinically before believing a skipped generation.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Proband (propositus)', def: 'The affected individual who brings a family to genetic attention; the pedigree is built outward from them.' },
        { term: 'Carrier', def: 'A heterozygote without symptoms who can pass a recessive allele on; marked with a half-filled symbol when known.' },
        { term: 'Consanguineous mating', def: 'A mating between close relatives, drawn as a double line — it raises recessive-disease risk by gathering shared ancestral alleles.' },
        { term: 'Autosomal dominant (AD)', def: 'One allele suffices; every affected person has an affected parent; affected individuals are usually heterozygotes.' },
        { term: 'X-linked dominant (XD)', def: 'Dominant allele on the X; females more often affected; an affected father can never pass it to a son.' },
        { term: 'X-linked recessive (XR)', def: 'Males affected far more often; an affected daughter from an unaffected father-and-mother pair is impossible.' },
        { term: 'Y-linked', def: 'Father-to-all-sons, never to daughters; rare because the Y carries few genes.' },
        { term: 'Mitochondrial inheritance', def: 'Maternal transmission to all children; males cannot pass it on because sperm contribute no mitochondria.' },
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Genetic counseling clinics: mode inference is the first step of every appointment — it converts a drawn family into numbered risks per pregnancy.',
        'Gene discovery: classical linkage studies tracked marker alleles through large pedigrees to locate disease genes before sequencing; a good pedigree was the raw material for finding the Huntington and cystic-fibrosis genes.',
        'Ancestry and forensics: Y-chromosome and mitochondrial polymorphisms follow exactly the paternal-only and maternal-only transmission this lesson formalizes.',
        'Population screening: communities with known founder alleles use consanguinity-aware pedigree counseling to estimate carrier rates before marriages are arranged.',
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A pedigree shows an affected father with an affected son. Which mode does this observation exclude?',
          options: ['autosomal dominant', 'X-linked dominant', 'autosomal recessive', 'mitochondrial'],
          answer: 1,
          explain: 'A son inherits his father\'s Y, never his X — so father-to-son transmission is impossible for an X-linked allele and rules out X-linked dominance.',
        },
        {
          q: 'The strongest pedigree signature of autosomal recessive inheritance is:',
          options: ['affected individuals in every generation', 'unaffected parents having an affected child', 'only males affected', 'father-to-all-sons transmission'],
          answer: 1,
          explain: 'Recessive alleles hide in unaffected carriers; unaffected parents producing affected children is the AR hallmark and the definition of a skipped generation.',
        },
        {
          q: 'The unaffected sibling of a person with an autosomal recessive disease has what chance of being a carrier (both parents carriers)?',
          options: ['1/4', '1/2', '2/3', '1/3'],
          answer: 2,
          explain: 'The carrier cross yields 1 affected : 2 carriers : 1 non-carrier; excluding the known-affected sibling, two of the three remaining outcomes are carriers — 2/3.',
        },
        {
          q: 'A trait appears only in males, in every generation, with each affected man passing it to all his sons and no daughters. The mode is:',
          options: ['X-linked recessive', 'autosomal dominant with sex limitation', 'Y-linked', 'mitochondrial'],
          answer: 2,
          explain: 'Father-to-all-sons and never-to-daughters is the Y-linked signature; the mode is rare because the Y carries very few genes.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'path',
        text: 'Grounding: T. T. Nickle & M. J. Barrette-Ng, Online Open Genetics (LibreTexts, CC BY-NC-SA), sections 5.2 "Pedigree Analysis" through 5.5 "Calculating Probabilities". The Mendel\'s-laws lesson owns the notation basics and the carrier-counseling arithmetic; the penetrance lesson explains the skipped generations this lesson must sometimes excuse; and the molecular-markers lesson shows what replaced pedigree-only gene hunting when marker maps matured.',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-sex-determination-systems',
    title: 'Sex Determination Across Species: X, Y, Z, W and the Alternatives',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Classical Genetics',
    tier: 'intermediate',
    concepts: [
      'Sex itself is a phenotype',
      'XX/XY mammals and the TDF-Y switch gene',
      'Drosophila counts X-to-autosome ratio',
      'ZW/ZZ birds: the reversed system',
      'XX/XO and haplodiploid systems',
      'Environmental sex determination',
      'Hormonal versus cell-autonomous mechanisms',
      'Two dosage-compensation strategies',
    ],
    words: 1685,
    readMins: 8,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: "Sex is a phenotype. Like hair color or wing shape, it is a set of anatomical and physiological characteristics produced by genes, environment, or both — a framing the book insists on because it dissolves the temptation to treat sex determination as somehow outside ordinary genetics. Most species carry several characteristics that distinguish males from females beyond the sex organs, and some species are normally hermaphroditic, with both sex organs in one individual. The question for a geneticist is mechanical: for each species, what sets the initial sex decision, and how do the organism's cells carry it out? The answers turn out to be gloriously non-uniform — there is no single genetic switch that all animals share.",
      },
      {
        kind: 'para',
        text: "In humans and other mammals the XX-XY chromosome system rules, and the entire decision hangs on one gene: the TDF-Y gene on the Y chromosome. Its presence and expression dictate a male; its absence leaves the default developmental path to female. That single-switch logic explains otherwise strange human karyotypes — an embryo with a Y develops male regardless of how many X chromosomes ride along, which is why XXY and XYY embryos are male. Drosophila carries visibly similar XX-XY chromosomes but uses a completely different rule: the ratio of X chromosomes to autosome sets. Two autosome sets with two X chromosomes (2A:2X) produce a female; two autosome sets with a single X (2A:1X) produce a male. The presence or absence of the Y and its genes is simply not consulted — a fact students meet with shock and flies demonstrate routinely.",
      },
      {
        kind: 'para',
        text: "Other systems invert or abandon the familiar pattern. Birds, moths and butterflies use ZW-ZZ: females are the heterogametic sex (ZW) and males the homogametic (ZZ) — the reverse of mammals, with the W playing the Y's role of found-in-one-sex-only. Grasshoppers run an XX-XO system, where males simply lack the second sex chromosome altogether. Bees, ants and wasps go by chromosome set number: typically haploid males and diploid females, so a fertilized egg can develop either way while an unfertilized one is male by default. And beyond chromosomes, the environment itself decides in many species: in alligators and some other reptiles the temperature of egg development dictates sex, while in many reef fish the population's social sex ratio triggers individual sex change. Sex determination is a trait like any other, and evolution has tried every mechanism.",
      },
      {
        kind: 'para',
        text: "Whatever the initial choice, two different execution mechanisms carry it to the tissues. The hormonal mechanism, used by mammals, first builds a sexually undifferentiated embryo that could become either sex; the genital ridge cells then differentiate into testes or ovaries, and the hormones they release — testosterone, estrogen — circulate through the whole body telling every tissue which sex to become. One remarkable consequence: the freemartin, a cattle chimera that originates as a genetically female (XX) embryo but acquires male (XY) cells from a male twin through shared placental circulation; the male twin's anti-Müllerian hormone alters her reproductive development, leaving an externally female but infertile animal with masculinized behavior. The cell-autonomous mechanism, used by birds and insects, sets each cell's sex individually — every cell knows its own sex with no circulating hormone required, which is why sexual gynandromorphs exist: rare mosaics, typically split down the midline, one half male and one half female, thought to arise when an early embryonic cell loses a sex chromosome and its descendants follow the other fate.",
      },
      {
        kind: 'para',
        text: "The sex chromosomes raise a bookkeeping problem the autosomes never face: dosage. The X and Y were once similar, but the Y (or W) has degenerated over evolutionary time — slowly mutating and losing most of its loci — so the chromosome found in both sexes (X or Z) retained its genes while the single-sex chromosome lost nearly all of them. The consequence is a gene-dose imbalance: XX females carry two doses of every X-linked gene while XY males carry one. Compensation is required, and two major strategies evolved. Drosophila doubles the transcription rate of the male's single X, restoring the protein balance between X-linked and autosomal genes. Mammals instead silence: in each XX embryo cell, one X is randomly chosen and inactivated, becoming the Xi that replicates and transmits normally but keeps most genes permanently off; it condenses into a visible interphase mass called the Barr body. The random choice makes every mammalian female a mosaic of two cell populations — the mechanism the beyond-Mendel lesson exploits to explain the calico cat, and the reason most heterozygous carriers of X-linked recessive diseases, like women carrying one mutant Factor VIII allele, are healthy: the half of their liver cells running the working X produce enough clotting protein for the whole body.",
      },
      {
        kind: 'para',
        text: "The Z system runs its own compensation with a telling asymmetry: birds use a dosage system closer to Drosophila's than to mammals', so a male turkey heterozygous at a Z-linked feather-color locus shows uniform bronze rather than a mosaic — both Z chromosomes stay active and the dominant allele simply wins. The comparison sharpened the field's understanding: dosage compensation is not one mechanism but a repeated evolutionary answer to a repeated arithmetic problem, solved at least two different ways in two independently evolved XY systems and differently again in ZW.",
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Three confusions recur. Assuming the Y always determines maleness: in Drosophila the Y is dispensable for sex — the X-to-autosome ratio decides, and the Y's genes matter only for fertility. Assuming the homogametic sex is always female: in birds it is the male (ZZ), and sex-linked inheritance patterns therefore reverse, with Z-linked recessives showing criss-cross from hens to sons. And treating X-inactivation as the universal dosage fix — Drosophila and mammals converge on the same balanced outcome by opposite routes (hypertranscription versus inactivation), and confusing them breaks predictions about carrier mosaicism.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'TDF-Y', def: 'The single Y-linked gene whose presence and expression dictate male development in mammals.' },
        { term: 'X-to-autosome ratio', def: 'Drosophila\'s sex rule: two X chromosomes per two autosome sets yield female, one X per two sets yield male — the Y irrelevant.' },
        { term: 'ZW-ZZ system', def: 'The reversed bird system: females heterogametic (ZW), males homogametic (ZZ).' },
        { term: 'Haplodiploidy', def: 'The bee-ant-wasp system: haploid males from unfertilized eggs, diploid females from fertilized ones.' },
        { term: 'Environmental sex determination', def: 'Sex set by external conditions — egg temperature in alligators, social cues in reef fish.' },
        { term: 'Hormonal mechanism', def: 'Sex executed by circulating gonadal hormones that instruct all tissues — the mammalian route (freemartins ride it).' },
        { term: 'Cell-autonomous mechanism', def: 'Each cell determines its own sex independently — the bird and insect route, visible in gynandromorphs.' },
        { term: 'Gynandromorph', def: 'A sexual mosaic split between male and female tissue, usually midline, from early sex-chromosome loss.' },
        { term: 'Barr body', def: 'The condensed inactive X chromosome visible in interphase nuclei of mammalian cells with more than one X.' },
        { term: 'Dosage compensation', def: 'Any mechanism restoring X-linked gene-product balance between the sexes — doubling in Drosophila, inactivation in mammals.' },
      ] },
      { kind: 'example', title: 'Worked Example: Predicting Sex and Mosaicism', steps: [
        'Problem: an XX embryo loses the TDF-Y-bearing Y early in development (Turner-style 45,X); an XY embryo carries a mutation destroying TDF-Y function. A Drosophila embryo is XXY with two autosome sets. Predict each outcome.',
        'Mammal case one: the 45,X embryo has no Y, so no TDF-Y signal — the developmental default runs female, and the resulting individual is phenotypically female with the Turner-syndrome health profile.',
        'Mammal case two: the Y is present but its switch gene is nonfunctional — TDF-Y expression, not Y presence alone, makes male. The embryo develops as female despite the XY karyotype.',
        'Drosophila case: sex follows the X-to-autosome ratio — two X chromosomes over two autosome sets gives 2A:2X, a female. The Y chromosome plays no role in the decision.',
        'Lesson: three different arithmetic problems, three different answers — the switch gene (mammals), the ratio (flies), and the single-switch failure mode that uncouples karyotype from phenotype.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Clinical genetics: karyotype-to-phenotype counseling for sex-chromosome aneuploidies depends on knowing that TDF-Y presence, not X count, drives male development.',
        'Livestock management: freemartin diagnosis matters in twin calving — the co-twin of a bull calf is routinely infertile through shared-placenta hormone exposure.',
        'Poultry breeding: the ZW system lets breeders build sex-linked feather-color crosses that separate male and female chicks at hatch.',
        'Developmental biology: gynandromorph insects are natural experiments proving cell-autonomous sex determination — each cell commits without hormonal instruction.',
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'What determines sex in Drosophila?',
          options: ['the presence of the Y chromosome', 'the ratio of X chromosomes to autosome sets', 'egg incubation temperature', 'a single dominant gene on chromosome 3'],
          answer: 1,
          explain: 'Flies count: 2A:2X gives female, 2A:1X gives male — the Y and its genes are not consulted for the sex decision.',
        },
        {
          q: 'In birds (ZW-ZZ), which sex is heterogametic?',
          options: ['the male, XY', 'the female, ZW', 'the male, ZZ', 'neither — both are ZZ'],
          answer: 1,
          explain: 'Birds reverse the mammal pattern: the female is ZW and produces two kinds of eggs, while the male is homogametic ZZ.',
        },
        {
          q: 'A freemartin calf results when:',
          options: ['a mutation deletes the TDF-Y gene', 'a female twin acquires male cells and anti-Müllerian hormone from a male twin in utero', 'egg temperature exceeds a threshold during incubation', 'an X chromosome fails to inactivate'],
          answer: 1,
          explain: 'Shared placental circulation lets the male twin\'s hormones and cells alter the XX twin\'s reproductive development — the hormonal mechanism running amok.',
        },
        {
          q: 'Why are most women heterozygous for X-linked recessive disease alleles healthy?',
          options: ['because the mutant X is always inactivated preferentially', 'because X-inactivation is random, so roughly half their cells run the working X, and that half suffices', 'because recessive alleles never act in females', 'because their single Barr body compensates for the Y they lack'],
          answer: 1,
          explain: 'Random inactivation makes carriers mosaics; in the Factor VIII example the half of liver cells expressing the functional allele exports enough clotting protein for the body.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'path',
        text: 'Grounding: T. T. Nickle & M. J. Barrette-Ng, Online Open Genetics (LibreTexts, CC BY-NC-SA), section 3.5 "Sex-Linkage — An Exception to Mendel\'s First Law". The beyond-Mendel lesson owns the inheritance PATTERNS of X-linked alleles including the calico phenotype; the chromosome-structure lesson next in this chapter returns to the Y\'s gene-poor anatomy when explaining why XYY and Turner karyotypes survive at all; and the kin-selection lesson in the evolutionary book works the haplodiploid relatedness arithmetic.',
      },
    ],
  }
  // ------------------------------------------------------------------
]
