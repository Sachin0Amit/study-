/**
 * Knowledge Universe — Genetics & Heredity — Chapter 01: Classical & Transmission Genetics
 * 7 lessons · ~13,224 words
 * field: Genetics & Heredity
 * legacy sources: life-sciences.ts, x14-heredity-biotech.ts, x60-crossverify-pass.ts, x66-crossverify-pass.ts, x71-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Classical Genetics, Transmission Genetics]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 bio-genetics-mendel — Mendel's Laws: How Traits Travel Between Generations
 *   01.2 bio-meiosis-linkage-inheritance — Meiosis, Linkage and the Chromosomal Theory of Inheritance
 *   01.3 bio-beyond-mendel-extensions — Beyond Mendel: Epistasis, Sex Linkage and Polygenic Traits
 *   01.4 bio-pedigree-mode-inference — Pedigree Analysis: Inferring the Mode of Inheritance
 *   01.5 bio-sex-determination-systems — Sex Determination Across Species: X, Y, Z, W and the Alternatives
 *   01.6 bio-gene-mapping-three-point — Three-Point Crosses: Gene Order, Interference and the Architecture of Maps
 *   01.7 bio-penetrance-expressivity — When Genes Do Not Follow the Script: Penetrance, Expressivity and the Chi-Square Test
 */
import type { KnowledgeTopic } from '../../types'

export const geneticsHeredityCh01: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  // ------------------------------------------------------------------
  {
    id: 'bio-genetics-mendel',
    title: 'Mendel\'s Laws: How Traits Travel Between Generations',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Classical Genetics',
    tier: 'core',
    concepts: [
      'Genes come in pairs, one per parent',
      'The law of segregation',
      'The law of independent assortment',
      'Punnett squares and probability',
      'Dominance and its variants',
      'Reading family pedigrees',
    ],
    words: 975,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Gregor Mendel counted his way to the laws of inheritance: some 28,000 pea plants over eight years in a monastery garden, tracking seed shape, flower color, and stem length across generations. From the ratios alone he deduced that traits are carried by paired factors that separate cleanly into eggs and pollen and recombine at random. Published in 1866 and ignored for 34 years, Mendel\'s laws still anchor genetics — this topic covers the two laws, the square that applies them, and the family trees that extend them.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Genetic counseling for cystic fibrosis, sickle-cell trait, and Huntington\'s disease is applied Mendelism: the same ratios that fell out of monastery peas tell an expecting couple their odds. Punnett-square arithmetic is the working toolkit of clinics, breeding programs, and identity labs alike.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Every gene comes in two copies — alleles — one on each member of a chromosome pair, one inherited from each parent. Mendel saw the logic without ever seeing a chromosome: crossing pure tall with pure short peas gave all tall offspring, yet the short factor had not vanished, for it resurfaced in the grandchildren. The lesson: an organism\'s appearance (phenotype) and its genetic makeup (genotype) are different things.',
      },
      {
        kind: 'para',
        text: 'The law of segregation: during the formation of eggs and sperm, the two alleles of each gene separate, and each gamete receives exactly one. A plant carrying one tall and one short allele makes equal numbers of each type of gamete — the fairness of a coin flip — and at fertilization, chance reassembles the pair.',
      },
      {
        kind: 'para',
        text: 'The law of independent assortment: pairs of alleles for different genes are handed out independently, so the allele a seed gets for height says nothing about its allele for seed color. The independence holds only for genes on different chromosomes, or far apart on the same one — a boundary Mendel could not have known he was brushing against. Where it holds, trait ratios multiply like probabilities.',
      },
      {
        kind: 'para',
        text: 'The Punnett square turns the laws into arithmetic. Cross two heterozygotes (Tt × Tt): the grid yields one TT, two Tt, and one tt — a 3:1 ratio of phenotypes when one allele dominates, and a 1:2:1 ratio of genotypes. Stack two traits and the ratios multiply into the classic 9:3:3:1 dihybrid pattern Mendel tabulated. Probability, not blending, is the grammar of inheritance.',
      },
      {
        kind: 'para',
        text: 'Dominance is a biochemical outcome, not a tug of war. In incomplete dominance, one red and one white allele yield pink flowers; in codominance, both appear separately, as the A and B antigens on AB blood; and a recessive disease allele usually means one working copy is enough for health. Humans carry some 20,000 genes — a slot, in each of them, where alleles can differ.',
      },
      {
        kind: 'para',
        text: 'Pedigrees hang the laws on family trees. Autosomal recessive traits like cystic fibrosis skip generations and can strike two entirely healthy carriers; dominant traits like Huntington\'s disease appear in every generation, each child of an affected parent at 50 percent risk. Squares for males, circles for females, shading for the affected — and behind every pedigree, Mendel\'s ratios at work.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the risk that two unaffected carriers of cystic fibrosis have an affected child.',
          'Recall the governing idea: cystic fibrosis is autosomal recessive — only the double-recessive genotype is affected.',
          'Apply: both carrier parents are Cc. The Cc × Cc Punnett square gives CC, Cc, Cc, and cc — one cc combination in four.',
          'State the result: a 25 percent chance of an affected child per pregnancy, a 50 percent chance of a carrier like the parents, and 25 percent of a non-carrier — Mendel\'s 3:1 arithmetic running in a modern clinic.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Carrier screening for recessive diseases counsels couples with Mendelian odds before pregnancy.',
          'Plant and animal breeding still runs on segregation ratios and selection indices.',
          'DNA paternity and forensic tests track alleles as Mendelian markers across generations.',
          'Classroom corn ears showing 9:3:3:1 kernel ratios demonstrate assortment on a single cob.',
          'The royal hemophilia pedigree traced a recessive X-linked allele across Victorian Europe.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Dominant does not mean common — Huntington\'s is dominant and rare, while type O blood is recessive and everywhere. Recessive does not mean weak: it means the trait shows only in the absence of a working allele. And independent assortment fails for linked genes — neighbors on the same chromosome travel together, the very exception that first let geneticists map genes onto chromosomes.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Allele', def: 'One of the alternative forms a gene can take in a population.' },
          { term: 'Genotype', def: 'The actual pair of alleles an organism carries.' },
          { term: 'Phenotype', def: 'The observable trait, which may mask one of the alleles present.' },
          { term: 'Heterozygous', def: 'Carrying two different alleles of a gene.' },
          { term: 'Law of segregation', def: 'The two alleles of a gene separate into separate gametes, one each.' },
          { term: 'Law of independent assortment', def: 'Allele pairs for different genes are inherited independently — when not linked.' },
          { term: 'Punnett square', def: 'A grid computing the genotypes and ratios expected from a cross.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Two heterozygous parents (Tt × Tt) are crossed. What fraction of offspring shows the recessive phenotype?',
            options: ['none', 'one quarter', 'one half', 'three quarters'],
            answer: 1,
            explain: 'One tt combination in four — the signature 3:1 phenotypic ratio.',
          },
          {
            q: 'Independent assortment fails when two genes:',
            options: ['sit close together on the same chromosome', 'are both dominant', 'affect the same trait', 'are on separate chromosomes'],
            answer: 0,
            explain: 'Linked genes travel together through meiosis — recombination only occasionally breaks the pair.',
          },
          {
            q: 'In codominance, a heterozygote:',
            options: ['resembles one parent only', 'shows a blended intermediate', 'expresses both alleles distinctly, as in AB blood', 'is always infertile'],
            answer: 2,
            explain: 'Both products are made side by side — A and B antigens together, not a blend of them.',
          },
          {
            q: 'A pedigree showing healthy parents with affected siblings, skipping generations, suggests:',
            options: ['autosomal dominant inheritance', 'mitochondrial inheritance', 'autosomal recessive inheritance', 'random chance only'],
            answer: 2,
            explain: 'Unaffected carriers producing affected children is the classic recessive signature.',
          },
        ],
      },
    ],
  },
  {
    id: 'bio-meiosis-linkage-inheritance',
    title: 'Meiosis, Linkage and the Chromosomal Theory of Inheritance',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Transmission Genetics',
    tier: 'core',
    concepts: [
      'The cell cycle: G1, S, G2, M under checkpoint control',
      'Mitosis conserves chromosome number; meiosis halves it',
      'Sutton, Boveri and Morgan\'s white-eyed fly: genes ride chromosomes',
      'Synapsis, crossing over and chiasmata in prophase I',
      'Independent assortment and the 2^n gamete count',
      'Random fertilization: 70 trillion chromosome combinations',
      'Linkage, recombination frequency and centimorgan maps',
      'Sturtevant\'s first chromosome map',
      'Nondisjunction and aneuploid outcomes',
    ],
    words: 2715,
    readMins: 14,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'You began as a single cell, yet the sperm and egg that met to make it were each one of a kind. The division that builds gametes is not a photocopying step but a reshuffling machine: it deals every sperm and every egg a different hand from the same parental deck. Mendel described the dealing without ever seeing the cards; this topic is about the cards themselves. We follow the cell cycle that sets the stage, meiosis in mechanical detail, the pairing and exchange that manufacture variation, the linkage that bends Mendel\'s ratios, the arithmetic that turns crossovers into gene maps, and the errors that leave a chromosome too many or too few.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Aneuploidy — one chromosome too many or too few — is the leading genetic cause of miscarriage and developmental disability, so meiotic mechanics is clinical medicine, not pea-counting algebra. The same crossover machinery is what genetic maps, breeding programs, and modern genome assemblies lean on: measure how often two genes travel together, and you have measured how far apart they sit on a chromosome.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A somatic cell lives on a four-phase cycle. G1 is growth and stockpiling; S is DNA synthesis, when each chromosome is duplicated into two sister chromatids joined at a shared centromere (still counted as one chromosome until the sisters split); G2 is a final interval of growth and error-checking; M is mitosis, when the copied genome is divided between daughter cells. The transitions are policed by checkpoints: G1 confirms size, nutrients, and undamaged DNA before the cell commits to replication; G2 verifies that replication finished cleanly; the spindle-assembly checkpoint at metaphase refuses anaphase until every kinetochore is anchored. Fail-safes matter clinically — a cell that slips through with DNA damage is on the road to cancerous behavior, which is why much cancer therapy targets dividing cells at these stages.',
      },
      {
        kind: 'para',
        text: 'Mitosis and meiosis run on the same spindle hardware but answer different questions. Mitosis is the conservative mode: one division, sister chromatids separated, two genetically identical diploid cells — growth, repair, and replacement. Meiosis is the generative mode: two consecutive divisions after one S phase, with the chromosome number halved from diploid (2n) to haploid (n). The decisive innovation is meiosis I: homologous chromosomes — the maternal and paternal copies of the same type — pair along their lengths, exchange segments, and are pulled to opposite poles, sister chromatids still joined and traveling together. Meiosis II then looks like mitosis on a haploid set: the sisters finally split at their centromeres. The tally is four genetically distinct daughter cells instead of two identical ones. How the division is scheduled into actual gamete production is the reproduction lesson\'s story; this one follows the chromosomes.',
      },
      {
        kind: 'para',
        text: 'By 1900, chromosomes had been watched dividing for two decades. In 1902-1903, Walter Sutton and Theodor Boveri independently noticed that chromosome behavior matches Mendel\'s factors exactly: they come in pairs, one member from each parent; they separate cleanly into gametes; different pairs distribute independently. The chromosomal theory of inheritance follows — genes ride on chromosomes, and Mendel\'s laws are chromosome mechanics. The proof came from Morgan\'s fly room at Columbia. In 1910 a single white-eyed male turned up among red-eyed Drosophila. Crossing it to red-eyed females gave all red-eyed offspring, red being dominant, but the next generation showed a pattern Mendel never produced: white eyes almost exclusively in males. The gene sits on the X chromosome, and a male\'s only X passes to his daughters, never to his sons — so a recessive X allele expresses in every male carrying it and travels through unaffected daughters to grandsons. Gene and chromosome had segregated together.',
      },
      {
        kind: 'para',
        text: 'All the novelty is packed into meiosis I, and within it into prophase I, traditionally sliced into five substages. Leptotene: chromosomes condense into visible threads, each already a pair of sister chromatids. Zygotene: homologs align gene for gene and zip into the synaptonemal complex — the pairing is synapsis, the four-chromatid product a bivalent, or tetrad. Pachytene: crossing over executes. Protein assemblies called recombination nodules appear along the complex, coordinating a programmed double-strand break in one chromatid, invasion of the homologous non-sister chromatid, and the cut-and-rejoin reactions that splice maternal segments into paternal DNA and back. Diplotene: the complex dissolves and homologs pull slightly apart, revealing the chiasmata — the X-shaped crossover sites, now the only physical links holding the pair together. Diakinesis: full condensation, the nuclear envelope breaks down, and tetrads load onto the spindle. At metaphase I each bivalent aligns with one homolog facing each pole; at anaphase I, homologs — not sisters — are dragged apart, exchanged segments and all.',
      },
      {
        kind: 'formula',
        name: 'Independent assortment',
        latex: 'C = 2^{n}',
        meaning: 'A germ cell carrying n pairs of homologs can send either member of each pair into a given gamete, so the number of distinct chromosome combinations is 2^n. For a human (n = 23) that is 2^23 — about 8.4 million genetically different gamete types per individual from assortment alone.',
      },
      {
        kind: 'para',
        text: 'The orientation of each bivalent at metaphase I is a coin toss, independent of every other pair — this physical act is what Mendel\'s second law describes for genes on different chromosomes. Meiosis II then runs like mitosis on a haploid set: no replication precedes it, the spindle reforms, and at anaphase II the sister chromatids finally separate at their centromeres, yielding four haploid products. One clarification worth fixing now: independent assortment names the metaphase I orientation of homolog pairs; crossing over happened earlier, in prophase I. Both shuffle the genome, but they shuffle different units — whole chromosomes versus internal segments.',
      },
      {
        kind: 'para',
        text: 'Stack the three randomizers and individuality is guaranteed. Crossing over rewrites the internal structure of each chromosome, making every chromatid a novel mosaic of the maternal and paternal versions. Independent assortment deals whole chromosomes — 8.4 million combinations in humans. Random fertilization then multiplies the two parental lotteries: any of roughly 8.4 million sperm can meet any of 8.4 million eggs, giving one of about 70 trillion possible chromosome combinations in a zygote, before counting the further variation that crossovers contribute. Except for identical twins, the same genetic individual cannot recur. This reshuffling is the raw feedstock of evolution; what selection does with the feedstock is the evolution lesson\'s half of the story.',
      },
      { kind: 'heading', text: 'Linkage and the First Gene Maps' },
      {
        kind: 'para',
        text: 'Mendel\'s second law quietly assumes every pair of genes makes its decision independently. Genes on the same chromosome cannot — they are physically linked, doomed to travel together unless a crossover physically separates them. William Bateson and Reginald Punnett glimpsed this in sweet peas in 1905, when their dihybrid crosses produced parental combinations in suspicious excess; Morgan\'s Drosophila made it quantitative. Complete linkage — loci so close that essentially no crossover ever lands between them — yields only parental-type gametes. Incomplete linkage, the usual case, yields a large majority of parental gametes plus a minority of recombinants: gametes that exist only because a crossover occurred in the stretch between the two genes. That minority is information. Recombination is not erratic; the farther apart two loci sit, the more often a crossover falls between them, so the frequency of recombinant offspring measures distance. Two vocabulary details complete the toolkit. Phase: a double heterozygote carrying both dominants on one homolog and both recessives on the other is in the coupling (cis) configuration; one dominant paired with the other gene\'s recessive is the repulsion (trans) configuration — same genotype letters, opposite gamete predictions, so phase must be known or inferred from the parents before any cross is read. Ceiling: recombination frequency saturates at 50 percent for loci far apart or on different chromosomes, which is why unlinked loci are defined as those recombinant half the time, why map distances above about 30 centimorgans grow unreliable without correction for undetected double crossovers, and why a chromosome can span more than 100 centimorgans while its end-to-end recombination stays capped. Genes on the same chromosome are syntenic regardless of how tightly they are linked — all linked genes are syntenic, but not all syntenic genes are linked.',
      },
      {
        kind: 'formula',
        name: 'Recombination frequency and map distance',
        latex: '\\text{RF} = \\frac{\\text{recombinant progeny}}{\\text{total progeny}} \\times 100\\%',
        meaning: 'One percent recombinant progeny defines one map unit — one centimorgan (cM). Genes 17 cM apart recombine in about 17 percent of gametes. Values run from near 0 (complete linkage) up to 50 percent, beyond which multiple crossovers make even distant linked genes look unlinked.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Mapping Two Genes with a Test Cross',
        steps: [
          'Set up: the black-body gene b and vestigial-wing gene vg are linked in Drosophila. Cross a coupling heterozygote (b+ vg+ over b vg) with a double-recessive tester (b vg over b vg); the tester contributes only recessive alleles, so each offspring displays the gamete it came from.',
          'Count: among 1,000 progeny, 460 are gray-bodied with normal wings and 440 are black with vestigial wings — the two parental classes, 90 percent together. The remaining 100 split into 52 gray vestigial and 48 black normal — the recombinant classes.',
          'Compute: RF = (52 + 48) / 1,000 times 100 = 10 percent. The two genes lie 10 centimorgans apart.',
          'Extend to three loci: add a third gene and the rarest progeny classes — the double crossovers — reveal gene order, because only the middle gene flips when two exchanges bracket it. Double crossovers also run rarer than the product of the single frequencies, because one exchange interferes with the next — a fact Sturtevant\'s generation quantified and exploited.',
        ],
      },
      {
        kind: 'para',
        text: 'In 1913 Alfred Sturtevant, an undergraduate in Morgan\'s lab, took recombination data home for the night and emerged with the first chromosome map — the Drosophila X, six genes ordered by their crossover frequencies. His insight: RF values behave like distances along a line, addable and orderable like milestones. Industrialized, the same logic still anchors linkage analysis in families and the calibration of genome assemblies. One soft spot: RF saturates near 50 percent, so truly distant genes masquerade as unlinked; distances beyond about 50 cM must be pieced together through intermediate markers.',
      },
      {
        kind: 'para',
        text: 'When homologs fail to disjoin at anaphase I, or sister chromatids fail at anaphase II, gametes arrive with the wrong count — nondisjunction. A meiosis-I failure produces gametes carrying both homologs or neither, so every gamete from that division is affected; a meiosis-II failure follows a normal first division and corrupts only half the products. Fertilization then writes aneuploidy into the zygote. Trisomy 21, the cause of Down syndrome, is the most common autosomal trisomy compatible with survival, and its incidence climbs steeply with maternal age — an oocyte\'s meiosis is arrested for decades, and the spindle\'s grip erodes. Sex-chromosome aneuploidies are comparatively tolerable — Turner (XO), Klinefelter (XXY), XYY — partly because extra X chromosomes get silenced, a mechanism the next lesson unpacks. What aneuploid embryos experience afterward is developmental biology: the reproduction lesson\'s ground.',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Prenatal and preimplantation screening counts chromosomes in embryos and fetuses; most first-trimester miscarriages are aneuploid, often trisomies of the smaller chromosomes.',
          'Classical linkage analysis located the Huntington\'s disease, cystic fibrosis, and BRCA1 genes by tracking marker alleles through families — the same RF arithmetic, decades before sequencing.',
          'Breeders exploit recombination deliberately: crossovers break linkage between a desired gene and a harmful hitchhiker, so large progeny are screened for rare recombinant chromosomes.',
          'Karyotyping — photographing and arranging condensed chromosomes — visualizes nondisjunction products directly; amniocentesis and chorionic-villus sampling supply the cells.',
          'A century of linkage maps became the scaffold that physical genome assemblies later confirmed, gene order for gene order.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three confusions recur. Synapsis pairs homologs, never sister chromatids — sisters align on the metaphase plate in mitosis, but in meiosis I each sister pair partners with its homolog. Students swap stages: crossing over happens in prophase I; independent assortment is the metaphase I orientation — a different unit of shuffling. And 2^n counts gamete chromosome combinations for one parent, not offspring: the other parent adds a second exponent at fertilization.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Homologous chromosomes', def: 'The maternal and paternal copies of the same chromosome type; they pair in meiosis I.' },
          { term: 'Synaptonemal complex', def: 'The protein zipper that aligns homologs gene-for-gene during synapsis.' },
          { term: 'Bivalent (tetrad)', def: 'A pair of synapsed homologs — four chromatids in total.' },
          { term: 'Chiasma', def: 'The visible X-shaped connection between homologs at a crossover site, seen from diplotene onward.' },
          { term: 'Crossing over', def: 'Reciprocal exchange of segments between non-sister chromatids of homologs during prophase I.' },
          { term: 'Independent assortment', def: 'Random orientation of each bivalent at metaphase I, distributing homologs independently.' },
          { term: 'Recombination frequency', def: 'The percentage of progeny that are recombinant; a proxy for the distance between two linked genes.' },
          { term: 'Centimorgan', def: 'One map unit — the distance yielding 1 percent recombination.' },
          { term: 'Nondisjunction', def: 'Failure of homologs (meiosis I) or sister chromatids (meiosis II) to separate, producing gametes with abnormal counts.' },
          { term: 'Aneuploidy', def: 'A chromosome count off by one or more from the normal set, as in trisomy 21.' },
          { term: 'Coupling (cis) configuration', def: 'A double heterozygote with both dominants on one homolog and both recessives on the other — the phase that determines which gametes are parental.' },
          { term: 'Repulsion (trans) configuration', def: 'The alternative phase — each homolog carries one dominant and one recessive; same letters, opposite recombinant classes.' },
          { term: 'Syntenic', def: 'Residing on the same chromosome, whether or not they recombine freely; all linked genes are syntenic, not all syntenic genes are linked.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Crossing over occurs during which stage, and between which chromatids?',
            options: ['Metaphase I, between sister chromatids', 'Pachytene of prophase I, between non-sister chromatids of a homologous pair', 'Prophase II, between homologous chromosomes', 'Anaphase I, between sister chromatids'],
            answer: 1,
            explain: 'Recombination nodules operate during pachytene, splicing segments between non-sister chromatids of paired homologs — never between sisters.',
          },
          {
            q: 'A diploid cell with 2n = 6 enters meiosis. From independent assortment alone, how many chromosome combinations can its gametes carry?',
            options: ['6', '8', '12', '64'],
            answer: 1,
            explain: 'Three homologous pairs give 2^3 = 8 possible combinations of whole chromosomes per gamete.',
          },
          {
            q: 'In a testcross of a double heterozygote, 180 of 1,200 progeny are recombinant. The map distance between the two genes is:',
            options: ['0.15 cM', '1.5 cM', '15 cM', '150 cM'],
            answer: 2,
            explain: 'RF = 180/1,200 times 100 = 15 percent, so the genes sit 15 centimorgans apart.',
          },
          {
            q: 'Nondisjunction at meiosis II typically produces:',
            options: ['gametes all carrying an extra chromosome', 'half normal gametes and half with one extra or missing chromosome', 'gametes missing every chromosome', 'only diploid gametes'],
            answer: 1,
            explain: 'A normal first division precedes it: the nondisjoining cell yields gametes with both sisters or neither, and the other cell\'s products stay normal — half affected, half not.',
          },
          {
            q: 'Genes A and B are 12 cM apart. In a fly of genotype AB/ab (coupling), the expected percentage of recombinant gametes is:',
            options: ['about 6 percent', 'about 12 percent', 'about 24 percent', 'about 50 percent'],
            answer: 1,
            explain: 'Map distance in centimorgans equals the recombination percentage: 12 cM means about 12 percent recombinant gametes — Ab and aB together.',
          },
          {
            q: 'Two linked genes recombine at 48 percent — yet a third gene sits between them at measurable distances from both. What does this reveal about map distances?',
            options: ['The 48 percent figure is the true distance between the outer genes', 'RF saturates near 50 percent, so distant genes must be pieced together through intermediate markers', 'The three genes sit on different chromosomes', 'Recombination has stopped between the outer genes'],
            answer: 1,
            explain: 'Multiple crossovers between far-apart loci restore parental arrangements, capping observable RF near 50 percent — the reason Sturtevant-style maps add short intervals rather than reading long ones directly.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the Mendel\'s Laws lesson for segregation and Punnett-square arithmetic, and the cell-and-biomolecules lesson for chromosome and DNA structure. From here the natural route runs to the extensions of Mendel — sex linkage, epistasis, polygenic traits — and on to the biotechnology lessons. The reproduction lesson owns gamete production timing; the population-genetics lesson owns what recombination does to allele frequencies over generations.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'The cell cycle runs G1, S, G2, M under checkpoint control; S duplicates each chromosome into two sister chromatids.',
          'Meiosis I pairs homologs, crosses them over, and halves the chromosome number; meiosis II splits sister chromatids as mitosis does.',
          'Sutton and Boveri identified Mendel\'s factors with chromosomes; Morgan\'s white-eyed fly proved a gene rides the X.',
          'Crossing over, independent assortment (2^n), and random fertilization stack to roughly 70 trillion zygote combinations.',
          'Linked genes recombine only when a crossover falls between them; 1 percent recombination equals 1 centimorgan of map distance.',
          'Nondisjunction at either division yields aneuploid gametes — the origin of trisomy 21 and the sex-chromosome syndromes.',
        ],
      },
    ],
  },
  {
    id: 'bio-beyond-mendel-extensions',
    title: 'Beyond Mendel: Epistasis, Sex Linkage and Polygenic Traits',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Transmission Genetics',
    tier: 'intermediate',
    concepts: [
      'Epistasis and the 9:3:4, 12:3:1, 9:7 and 15:1 ratios',
      'Dominant, complementary and duplicate gene action',
      'Multiple allele series',
      'Pleiotropy and lethal alleles',
      'X-linked recessives: criss-cross inheritance',
      'X-linked dominant, Y-linked, sex-influenced and sex-limited traits',
      'Barr bodies, X-inactivation and calico mosaics',
      'Cytoplasmic and maternal inheritance',
      'Polygenic traits, heritability and norm of reaction',
      'Environment writing the phenotype: Himalayan rabbit, PKU, hydrangea',
    ],
    words: 2797,
    readMins: 14,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'Mendel\'s framework — allele pairs, dominance, segregation, assortment, Punnett squares, pedigrees — is the grammar of genetics, assumed here rather than re-taught (the Mendel\'s Laws lesson owns every word of it, down to incomplete dominance, codominance, ABO groups, and pedigrees). Real inheritance quickly outgrows that grammar. Genes talk to each other, ride sex chromosomes, switch off wholesale, arrive in the egg\'s cytoplasm, or gang up dozens at a time on one measurable trait. This lesson is the field guide to those extensions: epistasis and its ratios, sex linkage and dosage compensation, cytoplasmic inheritance, and the polygenic arithmetic behind height and skin color.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Most conditions worth counseling about — height, diabetes risk, heart disease — are polygenic or epistatic, not single-gene; textbook 3:1 ratios are the easy minority. Sex-linked recessives trace differently through families and now meet recombinant-factor and gene-therapy medicine. X-inactivation explains why female carriers sometimes show mild symptoms — mosaicism is medicine, not trivia.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Epistasis is gene interaction: the genotype at one locus masks or modifies the phenotype produced by another. The canonical example is Labrador coat color. One gene, B, sets the pigment\'s chemistry — dominant B makes black eumelanin, bb makes the same pigment brown. A second gene, E, decides whether pigment reaches the hair at all: ee animals deposit no coat melanin and are yellow whatever their B genotype. Cross two double heterozygotes (BbEe x BbEe) and each locus still segregates 3:1, but the ee class swallows the B split whole: from sixteen boxes come 9 black (B_E_), 3 brown (bbE_), and 4 yellow (__ee) — recessive epistasis\'s 9:3:4 fingerprint. Whenever a dihybrid ratio collapses away from 9:3:3:1, ask which classes merged and why.',
      },
      {
        kind: 'example',
        title: 'Worked Example: A Labrador Cross',
        steps: [
          'Set the cross: two black Labradors, both BbEe, mate. Each produces four gamete types — BE, Be, bE, be — filling the usual sixteen-box grid.',
          'Sort by the masking gene first: any genotype with ee — four of sixteen boxes — is yellow before its B genotype is even consulted.',
          'Of the remaining twelve, those carrying at least one B (nine) are black and the bb ones (three) are brown.',
          'State the expectation: 9 black, 3 brown, 4 yellow. In a litter of seven, expect roughly four or five black, one brown, and one or two yellow — small samples wobble.',
        ],
      },
      {
        kind: 'para',
        text: 'Other architectures leave different fingerprints. Dominant epistasis: a dominant allele at one locus masks the second gene entirely — in summer squash, W_ fruit is white whatever the Y locus says, wwY_ yellow, wwyy green: 12 white : 3 yellow : 1 green. Complementary gene action: two enzymes in one pathway must both work — sweet peas need functional enzymes at both the C and P loci to build anthocyanin, so only C_P_ flowers are colored: 9 colored : 7 white. Duplicate genes: either of two loci can do the job, common in polyploid-derived wheat, where a dominant allele at either colors the kernel: 15 colored : 1 white. The skill is not memorizing ratios but deriving them — lay out the grid, decide which classes merge, and let the biology explain the merger.',
      },
      {
        kind: 'para',
        text: 'Two alleles per gene is a diploid individual\'s limit, not a population\'s. A locus can carry many alleles in the gene pool — a multiple-allele series, typically ranked in a dominance hierarchy. The rabbit c locus is the textbook case: full color C over chinchilla c^ch over Himalayan c^h over albino c, each genotype expressing its most dominant allele. ABO blood groups, already covered in the Mendel lesson, are the human example. Multiple alleles multiply genotypes: a locus with n alleles admits n(n+1)/2 distinct diploid genotypes.',
      },
      {
        kind: 'para',
        text: 'Pleiotropy is one gene, many effects — the norm, because proteins work inside networks. Marfan syndrome is the vivid case: mutant fibrillin-1, a connective-tissue protein, yields tall stature, long limbs, lens dislocation, and — the dangerous one — aortic root dilation. Sickle-cell disease is one beta-globin point mutation echoing through blood, spleen, kidney, and stroke risk. Some pleiotropic alleles are lethal as homozygotes: the yellow mouse\'s A^Y, dominant for yellow coat, kills the A^Y A^Y embryo. Cross two yellow mice (A^Y a x A^Y a) and the missing class leaves 2 yellow : 1 agouti among the liveborn — a 2:1 phenotypic ratio is the signature of a genotype that never makes it to birth. Achondroplasia works the same way: two mutant alleles make no viable pregnancy, not a more severe dwarf.',
      },
      { kind: 'heading', text: 'Sex Linkage and Dosage Compensation' },
      {
        kind: 'para',
        text: 'Genes on the sex chromosomes follow their own rules because males are hemizygous — one X, one Y, no second copy to mask a recessive. An X-linked recessive therefore expresses in every male who carries it, while a female needs two copies. Red-green color blindness and hemophilia A (factor VIII) are the standard examples; Queen Victoria\'s pedigree carried a clotting defect through Europe\'s royal houses. The pattern is criss-cross inheritance: an affected father passes his X to all his daughters — obligate carriers — and to none of his sons; the carriers\' sons run a 50 percent risk, so the trait zigzags grandfather to grandson through unaffected daughters. Carrier females are mosaics and occasionally show mild symptoms — borderline-low clotting factor — when the wrong X won inactivation in the relevant tissues. The definitive test for sex linkage is the reciprocal cross: repeat the mating with the sexes of the two phenotypes swapped, and if the two F1 generations differ, a sex-chromosome locus is implicated — the test that settled the white gene on the fly X. Not every gene on the X obeys the sex-linked pattern, though: short stretches called pseudoautosomal regions are shared between X and Y, pair and recombine in male meiosis, and the genes inside them are inherited like autosomal genes, two copies in everyone. SHOX, a bone-growth regulator sitting in that region, is the clinical example — one copy (as in Turner syndrome) means short stature, three copies (extra X or Y) means taller than average. On the Y, the sex-determining TDF gene (SRY) anchors the male pathway, and the handful of other Y-linked loci — the hairy-ear-rim trait is the classic curiosity — pass strictly father to son.',
      },
      {
        kind: 'para',
        text: 'X-linked dominant conditions — vitamin D-resistant rickets is the classic — strike every generation and both sexes, with a telltale asymmetry: affected fathers pass the trait to all daughters and no sons, the mirror of criss-cross recessive. Y-linked (holandric) traits travel father to son through the Y\'s small payload, mostly male-fertility genes; pedigrees are all-male vertical lines. Distinguish both from two autosomal categories that lean on hormones. Sex-influenced traits flip dominance by sex: male-pattern baldness is dominant in men, recessive in women. Sex-limited traits appear in one sex only — milk yield, cock feathering — the allele present in both, the hormonal switch not.',
      },
      {
        kind: 'para',
        text: 'Females have two X chromosomes and males one, yet both make roughly the same amount of most X-linked proteins. The equalizer is X-inactivation, proposed by Mary Lyon in 1961: early in development each female cell shuts down one X at random, condensing it into a Barr body, silent in that cell and its descendants (the XIST RNA coats it and recruits the silencing machinery). The female body is thus a mosaic of two cell lines, paternal X and maternal. Calico and tortoiseshell cats make the mosaic visible — the orange and black coat alleles sit on the X, and each colored patch traces one cell\'s decision about which X to keep. Nearly all calicos are female; the rare male is XXY and infertile. Two consequences: carriers of X-linked recessives are usually, not always, unaffected — their mosaic can lean the wrong way; and inactivation resets in the germ line, so every egg leaves with a freshly active X. The cat genome adds two finishing touches that examiners love. First, the distinction the names gloss over: tortoiseshell is the X-inactivation mosaic alone — patches of orange and black — while a CALICO is a tortoiseshell that also carries the piebald-spotting allele (S), which superimposes the white patches; orange, black and white together make the calico pattern, and the white-splotch gene is a plain autosomal one with nothing to do with the X. Second, the whole color scheme can be hidden by a dominant epistatic allele at an entirely different locus: one copy of the white-masking W allele prevents melanocyte development altogether, so a W_ cat is entirely white no matter what its Orange, dilute or piebald genes say — true albinism is much rarer and distinguishable by red eyes, while a masked W_ cat keeps ordinary eye color. Genotype, as ever, runs deeper than the coat shows.',
      },
      {
        kind: 'para',
        text: 'Some traits never touch the nucleus. Mitochondria carry their own small genomes, inherited almost exclusively from the mother because the sperm contributes essentially no mitochondria. Mitochondrial diseases — Leber hereditary optic neuropathy, MELAS — therefore pass from an affected mother to all of her children, never from an affected father: the pedigree signature is unmistakable. Chloroplasts do the same in plants — the variegated four-o\'clock leaf tracks which chloroplast population the egg handed down. The reproduction lesson explains the maternal line in full; the point here is recognizing cytoplasmic inheritance on a pedigree, a corner the Punnett square cannot reach.',
      },
      { kind: 'heading', text: 'Many Genes, One Trait' },
      {
        kind: 'para',
        text: 'Mendel\'s traits were categorical — round or wrinkled. Most of what matters about bodies is continuous: height, skin color, birth weight. Polygenic inheritance explains the continuum: several genes contribute alleles of small, additive effect, and environment smooths the result. Nilsson-Ehle\'s wheat kernels are the clean demonstration — three gene pairs govern red versus white bran color additively, so crossing two triple heterozygotes yields seven color classes in the ratio 1:6:15:20:15:6:1, the binomial edge of a bell curve. Human height behaves the same way across thousands of loci. Heritability quantifies the genetic share of variation in a population — broad-sense for all genetic variance, narrow-sense for the additive portion breeding responds to — but it is a population statistic, not a personal one: where environments are equalized it rises, where they differ it falls. The finer tool is the norm of reaction: the full table of phenotypes one genotype produces across environments. A genotype is a recipe, not a photograph.',
      },
      {
        kind: 'formula',
        name: 'Phenotypic classes in additive polygenic inheritance',
        latex: '\\text{classes} = 2n + 1',
        meaning: 'n heterozygous gene pairs acting additively generate 2n + 1 phenotypic classes — three pairs give seven — with frequencies following the binomial coefficients of (a + b) to the power 2n. More loci flatten each gene\'s contribution toward continuity.',
      },
      {
        kind: 'para',
        text: 'The environment gets the final word on many phenotypes. The Himalayan rabbit carries a temperature-sensitive tyrosinase that works only where skin is cool — ears, nose, feet, tail — so the rabbit is white with black points; shave a flank patch and keep it chilled, and black fur grows in. The genotype specifies a rule; the environment supplies the inputs. Phenylketonuria works the lever from the other end: a missing enzyme that once meant severe intellectual disability is largely neutralized by a low-phenylalanine diet begun at birth — management, not gene change, rescues the phenotype. Hydrangea sepals run blue in acidic soil, where roots take up aluminum, and pink in alkaline. Every trait is genotype times environment; the norm of reaction is the whole table, not one cell of it.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Predicting a Dihybrid Ratio Under Dominant Epistasis',
        steps: [
          'The problem: in summer squash, white fruit (W) dominates any colored fruit; at the second locus yellow (Y) dominates green, but only in ww plants. What ratio emerges from WwYy x WwYy?',
          'Enumerate the grid: the sixteen boxes give the standard 9 W_Y_ : 3 W_yy : 3 wwY_ : 1 wwyy classes.',
          'Apply the interaction: W_ masks the Y locus, so the first two classes — 9 plus 3 — are all white; of the rest, wwY_ is yellow and wwyy green.',
          'State and check: 12 white : 3 yellow : 1 green — dominant epistasis. Yellow requires ww plus Y_, green the double recessive, so the rarest phenotype sits in the rarest genotype, as it must.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Genetic counseling for multifactorial conditions — cleft lip, neural-tube defects, diabetes — uses empirical recurrence-risk tables, because the inheritance is polygenic with environmental input.',
          'Carrier screening for X-linked recessives targets women with affected male relatives, the criss-cross pattern making carrier daughters predictable.',
          'Coat-color genetics is working animal breeding: Labrador and calico expectations predict litter composition, and a male calico is an automatic karyotype question.',
          'Newborn screening for PKU — a heel-prick blood spot — plus dietary management is the model of genetic knowledge changing an outcome: a fully genetic disease, fully treatable by environment.',
          'Norm-of-reaction thinking governs crop variety trials: a genotype is only as good as its fit to local soil and climate, which is why seed lines are regional.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not confuse dominance (between alleles of one gene) with epistasis (between two genes) — a 9:3:4 ratio always implicates two loci. Derive modified ratios from the grid instead of memorizing them; every one is a merger of Mendelian classes. Heritability is not a measure of how genetic one individual\'s trait is, and a high heritability does not make a trait fixed — PKU is fully genetic and fully diet-treatable. And sex-linked (gene on a sex chromosome) and sex-limited (autosome, one-sex expression) are different addresses.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Epistasis', def: 'One locus masking or modifying the phenotype of another.' },
          { term: 'Hypostatic gene', def: 'The masked gene, like the B locus in ee yellow Labradors.' },
          { term: 'Pleiotropy', def: 'One gene influencing multiple traits, as fibrillin-1 does in Marfan syndrome.' },
          { term: 'Lethal allele', def: 'An allele that kills the homozygote, collapsing a monohybrid ratio to 2:1.' },
          { term: 'Criss-cross inheritance', def: 'Father-to-daughter-to-grandson passage of X-linked recessives.' },
          { term: 'Barr body', def: 'The condensed inactive X at the nuclear rim of female cells.' },
          { term: 'Mosaic', def: 'An individual of genetically distinct cell populations, as every female is after X-inactivation.' },
          { term: 'Sex-influenced trait', def: 'Autosomal trait whose dominance flips with sex hormones, like male-pattern baldness.' },
          { term: 'Cytoplasmic inheritance', def: 'Transmission via mitochondria or chloroplasts, nearly always maternal.' },
          { term: 'Heritability', def: 'The share of phenotypic variation in a population attributable to genes.' },
          { term: 'Norm of reaction', def: 'The phenotypes one genotype produces across environments.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Two genes encode successive enzymes in one pigment pathway; only genotypes functional at both loci make pigment. In a dihybrid cross, the colored-to-white ratio is:',
            options: ['9:7', '9:3:4', '12:3:1', '15:1'],
            answer: 0,
            explain: 'Complementary gene action: the three unproductive classes (3 + 3 + 1) merge into white.',
          },
          {
            q: 'A black Labrador (BbEe) is mated with a yellow Labrador (Bbee). What fraction of the pups is expected to be black?',
            options: ['1/4', '3/8', '1/2', '9/16'],
            answer: 1,
            explain: 'Black needs E_ (one-half) and B_ (three-quarters): three-quarters times one-half = 3/8; the rest are brown or yellow.',
          },
          {
            q: 'A man with red-green color blindness has children with a woman homozygous for normal color vision. Their daughters will be:',
            options: ['all color blind', 'all carriers', 'half carriers, half affected', 'unaffected non-carriers'],
            answer: 1,
            explain: 'His only X, carrying the allele, goes to every daughter alongside their mother\'s normal X — all carriers; sons get his Y and are unaffected.',
          },
          {
            q: 'A male calico cat almost certainly has which karyotype?',
            options: ['XY', 'XXY', 'XO', 'YY'],
            answer: 1,
            explain: 'Mosaicism needs two X alleles plus random inactivation; the rare male calico is XXY, feline Klinefelter.',
          },
          {
            q: 'Crossing two yellow mice (A^Y a x A^Y a) yields which ratio among liveborn offspring?',
            options: ['3 yellow : 1 agouti', '2 yellow : 1 agouti', '1 yellow : 2 agouti', 'all yellow'],
            answer: 1,
            explain: 'The A^Y A^Y class dies before birth; survivors are 2 yellow to 1 agouti — the 2:1 ratio that betrays a recessive lethal.',
          },
          {
            q: 'A mother has a mitochondrial disease. Her four children — two sons, two daughters — are born to an unaffected father. How many are expected to inherit the disease?',
            options: ['none — the father must transmit it', 'the two daughters only', 'all four, sons and daughters alike', 'half, regardless of sex'],
            answer: 2,
            explain: 'Mitochondria ride the egg\'s cytoplasm — the sperm contributes essentially none — so an affected mother passes the organelle, and its genome, to every child of either sex.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the Mendel\'s Laws lesson in full, and the meiosis-linkage lesson for the chromosome mechanics underneath sex linkage. The CRISPR lesson picks up gene therapy for hemophilia; the population-genetics lesson does the algebra of heritability; the reproduction lesson traces the maternal mitochondrial line.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Epistasis merges Mendelian classes into modified ratios: 9:3:4 recessive, 12:3:1 dominant, 9:7 complementary, 15:1 duplicate.',
          'Pleiotropy is one gene with many effects; recessive lethals collapse ratios to 2:1 among survivors.',
          'X-linked recessives criss-cross: affected fathers make carrier daughters, whose sons run a 50 percent risk.',
          'Random X-inactivation makes every female a mosaic; the calico cat is the visible proof.',
          'Mitochondrial and chloroplast genes ride the egg\'s cytoplasm — mother to all children, never father to child.',
          'Polygenic traits are additive and continuous; environment — Himalayan rabbit, PKU, hydrangea — writes the final phenotype.',
        ],
      },
    ],
  },
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
    words: 1726,
    readMins: 9,
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
        text: "Once the mode is inferred, probability chaining computes concrete risks by multiplying the chances along the family paths. The method: assign genotypes to every person the pedigree constrains, then multiply independent probabilities down each path and sum over alternatives. The book's worked logic in miniature: the unaffected sibling of an AR patient has a known two-thirds chance of being a carrier (three unaffected genotypes out of four Mendelian boxes, one of which is the non-carrier); if that sibling's spouse is also a known carrier, each child faces the carrier-product one half times one half times the affected fraction one quarter — a one-in-sixteen affected risk. The chains run longer in real trees: if TWO people are each the unaffected sibling of an affected individual (two-thirds carriers apiece), and each marries an unrelated non-carrier, each of their children is a carrier with two-thirds times one-half — one-third; and if those two children (cousins, in effect) marry each other, their own child faces one-third times one-third times one-quarter — one chance in thirty-six, about a hundredfold a rare recessive's population baseline. Every risk statement in a counseling session is some such product, which is why mode inference comes first: an inference error of one mode multiplies into every downstream number. One final caution about family clustering itself: a disease that repeats in a family is not automatically genetic — most amyotrophic lateral sclerosis is sporadic, with only some five to ten percent of cases inherited in an autosomal-dominant pattern, and the familial and sporadic forms turn out to involve different genes — a distinction Stephen Hawking's case illustrates, being sporadic despite the familiar name the disease carries from Lou Gehrig.",
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
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-gene-mapping-three-point',
    title: 'Three-Point Crosses: Gene Order, Interference and the Architecture of Maps',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Transmission Genetics',
    tier: 'advanced',
    concepts: [
      'The three-factor cross scores eight gamete classes',
      'Double crossovers are the rarest pair and reveal the middle gene',
      'Coefficient of coincidence and crossover interference',
      'Map expansion: chaining short intervals into chromosome maps',
    ],
    words: 1518,
    readMins: 8,
    addedOn: '2026-10-29',
    blocks: [
      {
        kind: 'para',
        text: 'The meiosis lesson owns the two-point test cross — count recombinant progeny, call the percentage centimorgans — and, since its phase-and-ceiling enrichment, it also owns WHY recombination percentages saturate near 50. What two-point crosses cannot do is assemble a chromosome: a pair of measurements rarely decides the order, because if A-B is 10 cM and B-C is 8 cM, A-C will be roughly 2 or roughly 18, and a noisy experiment cannot reliably tell which. The classical solution, standardized in Morgan\'s fly room and still taught in every genetics course, follows all three loci in ONE cross: the three-factor (three-point) cross scores all eight gamete classes at once and reads off the gene order, both interval distances, and — the bonus nobody asked for at first — the interference between the two intervals. MIT\'s genetics course devotes two full lectures to recombination mapping; this lesson owns the three-point workflow and its arithmetic, the bridge between the meiosis lesson\'s linkage mechanics and the marker-based mapping the genomics-chapter lesson owns.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every gene assigned to a chromosome before molecular markers was placed by this arithmetic, and the linkage maps it built became the scaffold that genome assemblies later confirmed, gene order for gene order. Interference — one crossover discouraging a second nearby — is a physical property of chromosomes that modern recombination maps rediscover as hotspots and coldspots.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Set the cross exactly as a test cross: an F1 heterozygous for three linked mutations (say A, B, C in coupling with their wild-type alleles) is crossed to the triple recessive, so every progeny\'s phenotype spells out the gamete the F1 parent contributed. Eight gamete classes appear. The two most frequent classes are the PARENTALS — the two chromosome arrangements the F1 inherited. The two least frequent classes are the DOUBLE CROSSOVERS, gametes that needed an exchange in BOTH intervals; double crossovers are rare because each crossover event is itself uncommon and the two events are not independent of each other. The remaining four classes split into two reciprocal pairs of single crossovers, one pair per interval.',
      },
      {
        kind: 'para',
        text: 'The middle gene falls out of the double crossovers by pure bookkeeping. In a double crossover, the two exchanges bracket the middle gene and flip ONLY IT relative to the parental arrangement — the outside genes stay put. So compare each double-crossover class with its matching parental class: the one gene that switched is the middle gene. Once order is fixed, distances follow by the add-back rule: a double crossover contains an exchange in EACH interval, so the interval distance counts the single crossovers in that interval PLUS the double crossovers, which two-point counting silently loses. Forgetting the add-back is the classic three-point error — it always underestimates interval length, and the error grows as intervals widen.',
      },
      {
        kind: 'formula',
        name: 'Interval distance in a three-point cross',
        latex: 'd(A\\text{-}B) = 100 \\times \\frac{\\text{SCO}_{AB} + \\text{DCO}}{N}',
        meaning: 'Single crossovers in the A-B interval plus the double crossovers, divided by total progeny, times 100 — each DCO contributes one crossover to every interval, so it counts in both.',
      },
      {
        kind: 'para',
        text: 'Interference is the refinement that made the three-point cross irreplaceable. If the two intervals\' crossovers were independent, the expected double-crossover frequency would be the product of the two interval frequencies. It rarely is: one exchange physically discourages a second in the neighborhood, an effect measured by the coefficient of coincidence — observed DCO divided by expected DCO — with interference defined as one minus the coefficient. A coefficient of 0.7 means 30 percent interference: crossovers in the first interval blocked 30 percent of the crossovers the second interval would otherwise have hosted. Interference typically strengthens as the intervals shorten, which is why tightly linked genes show fewer double crossovers than the product rule predicts — the product rule\'s measurable failure was itself a discovery about chromosome mechanics.',
      },
      {
        kind: 'para',
        text: 'One cross has a horizon, and the fix is map EXPANSION. Because recombination fractions cap near 50, a single cross can never read a long chromosome directly — but distances from many SHORT intervals chain: measure A-B and B-C in crosses sized so double crossovers stay detectable, then add. Chained interval by interval, linkage maps ran far past the single-cross ceiling (the human male map totals roughly 2,500 cM even though any one distant pair recombines at most 50 percent), and each organism\'s map carries its own conversion rate — genetic distance equals physical distance times the recombination rate, about 1.3 cM per megabase in humans, hundreds in yeast; Drosophila males make no crossovers at all and human females recombine roughly twice as much as males, so the same chromosome carries two maps.',
      },
      {
        kind: 'example',
        title: 'Worked Example: A Complete Three-Factor Cross',
        steps: [
          'Score the eight classes from a test cross of an F1 carrying linked mutations a, b, c (parental chromosomes a b c and A B C): parentals a b c = 900, A B C = 890; single-crossover pairs A b c = 115, a B C = 105 (one interval) and A B c = 42, a b C = 38 (the other); double crossovers A b C = 4, a B c = 4. Total 2,098.',
          'Identify the DCO pair as the rarest classes: A b C and a B c. Compare each with its parental partner (a b c and A B C): the flipped gene is B — so B sits in the MIDDLE and the order is A - B - C.',
          'Add back the DCOs: interval A-B distance = (115 + 105 + 4 + 4)/2,098 x 100 = 228/2,098 x 100, about 10.9 cM; interval B-C distance = (42 + 38 + 4 + 4)/2,098 x 100 = 88/2,098 x 100, about 4.2 cM.',
          'Test for interference: expected DCO = 0.109 x 0.042 x 2,098, about 9.6; observed = 8; coefficient of coincidence = 8/9.6, about 0.83; interference = 0.17 — one crossover in either interval blocks roughly a sixth of the crossovers expected in the other.',
          'Draw the map: A —10.9 cM— B —4.2 cM— C. Extend the chromosome by chaining further crosses, each interval short enough that its double crossovers stay detectable.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Classical linkage analysis of human families — the work that located the Huntington disease, cystic fibrosis and BRCA1 loci — is this arithmetic run on markers instead of visible phenotypes, with hundreds of intervals chained across the genome.',
          'Breeding programs build three-point maps of crop genomes to position resistance genes and tighten marker-assisted selection; the same interference correction keeps long-distance predictions honest.',
          'Genome assemblies were checked against linkage maps for order and spacing — where a scaffold disagreed with an additive map, the map usually won, because recombination distances are direct chromosome measurements.',
          'Modern recombination maps (hotspots and coldspots from population data) rediscover interference at nucleotide resolution — the old three-point observation, now visible as chromosome-wide rate structure.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Three-factor (three-point) cross', def: 'A test cross following three linked loci at once, scoring all eight gamete classes.' },
          { term: 'Parental classes', def: 'The two most frequent gamete classes — the F1\'s own chromosome arrangements.' },
          { term: 'Double crossover (DCO)', def: 'A gamete requiring exchanges in both intervals; rarest pair, flips only the middle gene.' },
          { term: 'Add-back rule', def: 'Interval distance counts single crossovers plus double crossovers, since each DCO carries one exchange per interval.' },
          { term: 'Coefficient of coincidence', def: 'Observed DCO frequency divided by the DCO frequency expected from the two interval distances.' },
          { term: 'Interference', def: 'One minus the coefficient of coincidence — the fraction of second crossovers suppressed by the first.' },
          { term: 'Map expansion', def: 'Building chromosome-length maps by chaining short additive intervals past the single-cross recombination ceiling.' },
          { term: 'Genetic-to-physical ratio', def: 'Genetic distance = physical distance x recombination rate; organism- and sex-specific (about 1.3 cM per megabase in humans).' },
        ],
      },
      { kind: 'heading', text: 'Self-Check Quiz' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In a three-point cross the rarest gamete classes are AbC and aBc while the parentals are ABC and abc. The middle gene is:',
            options: ['A', 'B', 'C', 'undeterminable without a fourth marker'],
            answer: 1,
            explain: 'Compare each DCO with its parental partner: AbC differs from ABC only at gene b, so B flipped and B lies in the middle of the other two.',
          },
          {
            q: 'Interval distances from a three-point cross must ADD BACK the double crossovers because:',
            options: [
              'DCOs are the parental classes',
              'each DCO contains one crossover in every interval and is missed by single-crossover counting',
              'DCOs are genetically lethal',
              'interference creates extra crossovers',
            ],
            answer: 1,
            explain: 'A double crossover exchanges in both intervals at once, so it belongs to the distance of each — omitting it underestimates every interval, increasingly for longer ones.',
          },
          {
            q: 'Observed DCO = 8, interval distances 10.9 cM and 4.2 cM, total progeny 2,098. The coefficient of coincidence is about:',
            options: ['0.17', '0.83', '1.20', '0.42'],
            answer: 1,
            explain: 'Expected DCO = 0.109 x 0.042 x 2,098, roughly 9.6; coincidence = 8/9.6, about 0.83 — so interference is about 0.17.',
          },
          {
            q: 'A chromosome\'s end-to-end recombination reads 50 percent, yet its linkage map spans 120 cM. How?',
            options: [
              'the map is wrong',
              'the total is a chain of short interval measurements, each readable because double crossovers stay rare within it',
              'recombination fractions exceed 50 in some crosses',
              'the chromosome has two centromeres',
            ],
            answer: 1,
            explain: 'Single crosses saturate near 50 for distant pairs, but additive intervals chain into maps well past that ceiling — map expansion, the reason chromosome maps out-measure any one cross.',
          },
        ],
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
