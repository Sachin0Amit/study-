import type { KnowledgeTopic } from '../types'

/**
 * CROSS-VERIFY PASS X71 (2026-10-29): Genetics & Heredity (book 5,
 * ku-genetics-heredity) — CONVERGENCE RESOLUTION for the 03:25
 * CROSS-VERIFY run against MIT OpenCourseWare 7.03 "Genetics" (Fall 2004;
 * Kaiser/Fink/Samson, CC BY-NC-SA; all 24 in-scope lecture PDFs downloaded
 * from ocw.mit.edu and read) plus the publisher's OFFICIAL 28-page preview
 * of Klug/Cummings/Spencer/Palladino/Killian, "Concepts of Genetics" 12e
 * Global Edition (complete detailed TOC used for coverage cross-checking;
 * commercial full-text PDFs of Klug/Pierce/Griffiths circulate only on
 * unauthorised mirrors and were refused per the sourcing rules).
 *
 * CONVERGENCE: this run was authored against a stale sandbox whose git was
 * pinned at the Oct 26 merge-base, and it independently re-derived content
 * the parallel sessions had already merged. Rebasing onto origin/main and
 * diffing against the X60/X61/X66 genetics passes (commit messages
 * CROSSVERIFY-20261026-6, 20261027-1, 20261028-6 — the same book verified
 * four times against "Introduction to Genetics" LibreTexts, Griffiths IGA
 * 8e, and Nickle & Barrette-Ng's Online Open Genetics) resolved the run to
 * its uniquely-owned residue, per the X67/X68/X69 merge-carve precedent:
 *
 *  DROPPED as near-duplicates of already-merged ownership:
 *  - bio-chi-square-genetic-ratios (drafted here vs MIT L4's chi-square
 *    lecture) -> x60's bio-penetrance-expressivity owns the
 *    goodness-of-fit test on Mendelian ratios and x66's
 *    bio-pedigree-mode-inference owns the pedigree conditional-probability
 *    arithmetic (the 2/3 carrier rule and 1-in-9 chain included).
 *  - bio-chromosome-rearrangements (drafted here vs MIT L32 + Klug Ch6:
 *    deletion/cri-du-chat, duplication/Bar, inversions as crossover
 *    suppressors, reciprocal translocations/Philadelphia/Robertsonian) ->
 *    x60's bio-chromosome-number-structure owns the four rearrangements,
 *    balanced-vs-unbalanced and FISH inside the Cytogenetics & Allelic
 *    Analysis chapter.
 *  - bio-sex-determination-systems (drafted here vs MIT L32's
 *    sex-determining-signal table + Klug Ch5: SRY/SOX9, X:A genic balance,
 *    ZW/DMRT1, X0, temperature-dependent, X/Y decay) -> x66 already merged
 *    a lesson with the IDENTICAL id and scope.
 *  The corresponding structural fixes drafted here are ALSO already
 *  merged: Chapter 1 renders Mendel first (the 2026-10-26 convergence fix
 *  moved the Mendel lesson above the X14 spread), and the concept-label
 *  shifts in the meiosis/beyond-Mendel/rDNA/genomics lessons were repaired
 *  by X66 with additional labels plus coupling/repulsion-phase, 50-percent
 *  RF-ceiling, syntenic and tortoiseshell-vs-calico enrichments.
 *
 *  KEPT as uniquely-owned (grep-verified zero live hits on origin/main for
 *  "three-factor cross", "coefficient of coincidence", "crossover
 *  interference", "inbreeding coefficient", "homozygous by descent",
 *  "mutation-selection balance"):
 *
 *  1. bio-gene-mapping-three-point — MIT L6-L7 + Klug Ch7: the classical
 *     three-factor cross WORKFLOW (eight gamete classes, parentals, the
 *     rarest double-crossover pair revealing the middle gene, the add-back
 *     rule for interval distances, coefficient of coincidence and
 *     interference, map expansion by chained short intervals, genetic =
 *     physical x recombination rate). Carved against the meiosis lesson
 *     (which owns the RF/cM definitions AND, since X66, the phase/ceiling
 *     explanation), x60's bio-chromosome-number-structure (which owns the
 *     cytogenetic VIEW), and x61's bio-markers-qtl-mapping (which owns the
 *     MODERN marker-based mapping this classical arithmetic precedes).
 *  2. bio-inbreeding-mutation-balance — MIT L26-L27 + Klug Ch26: the
 *     inbreeding coefficient F (homozygosity by descent, 1/4 sib-sib and
 *     1/16 first-cousin chains), F-augmented genotype frequencies, the
 *     consanguinity risk arithmetic (rare allele q = 10^-4: random-mating
 *     q^2 = 10^-8 versus first-cousin Fq = 6.3 x 10^-6, six hundredfold;
 *     the U.S. one-third attribution), and mutation-selection balance
 *     (recessive q-hat = sqrt(mu/S), dominant mu/S) with the albinism
 *     >99-percent-carrier calculation. Carved against the
 *     population-genetics lesson (owns Hardy-Weinberg, selection modes,
 *     drift, gene flow, coalescence) and the
 *     population-inheritance-frequencies lesson (owns gene-pool counting).
 *
 *  Word counts verified by scripts/count-topic-words-exact.ts.
 */
export const x71CrossverifyGeneticsTopics: KnowledgeTopic[] = [
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
    id: 'bio-inbreeding-mutation-balance',
    title: 'Inbreeding, Consanguinity and the Mutation-Selection Balance',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Population Genetics',
    tier: 'advanced',
    concepts: [
      'The inbreeding coefficient F: homozygosity by descent',
      'F rewrites genotype frequencies: p^2(1-F) + Fp',
      'Consanguinity risk: rare alleles and the six-hundredfold jump',
      'Mutation-selection balance: q-hat = sqrt(mu/S)',
      'Rare mutant alleles hide in healthy heterozygotes',
    ],
    words: 1506,
    readMins: 8,
    addedOn: '2026-10-29',
    blocks: [
      {
        kind: 'para',
        text: 'The population-genetics lesson owns the Hardy-Weinberg law and the forces that move allele frequencies — selection, drift, gene flow, coalescence. This lesson owns two refinements that clinical genetics and conservation breeding run on daily: what happens to genotype frequencies when mates are RELATED, and where the equilibrium of a deleterious allele actually sits when mutation keeps supplying it and selection keeps pruning it. MIT\'s genetics course devotes a full lecture to inbreeding\'s arithmetic and another to mutation-selection balance; the standard textbooks give each a chapter section, because together they answer the two questions families and breeders actually ask: "how much risk in a cousin marriage?" and "why hasn\'t selection removed this disease allele already?"',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The inbreeding coefficient turns a family tree into a number, and that number times an allele frequency turns into a counseling risk. Mutation-selection balance explains why rare recessive disease persists everywhere at steady frequencies — and why the overwhelming majority of dangerous alleles ride inside healthy carriers, which is exactly what carrier screening hunts for.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Inbreeding is mating between relatives, and its cost is measured by the inbreeding coefficient F: the probability that the two alleles at a locus in one individual are identical by descent — both copies inherited from the very same ancestral copy. The derivation is a chain of one-half probabilities down the pedigree. For a child of full siblings, the child\'s two alleles can each trace to one grandparent\'s copy: each homozygous-by-descent event has probability one half times one half times one quarter, four grandparents give four chances, and F comes to one quarter. For first cousins, the shared ancestry runs through the common grandparents with an extra generational hop in the chain, and F lands at one sixteenth — the two numbers every genetics course memorizes, because they price the risk of every consanguineous marriage.',
      },
      {
        kind: 'para',
        text: 'F rewrites the Hardy-Weinberg genotype frequencies by pulling heterozygotes toward homozygotes. With F between zero and one, the frequencies become: AA at p-squared plus F times p times q — precisely, p²(1−F) + Fp; Aa at 2pq(1−F); aa at q²(1−F) + Fq. The algebra says exactly what the pedigree says: inbreeding does not change ALLELE frequencies (p and q still sum to one), but it converts heterozygote frequency into homozygote frequency at rate F. For a dominant or neutral trait nothing changes visibly; for a recessive, the disease class swells from q² toward q as F grows — which is the whole clinical story of consanguinity.',
      },
      {
        kind: 'formula',
        name: 'Genotype frequencies under inbreeding',
        latex: 'f(AA) = p^{2}(1 - F) + Fp,\\quad f(Aa) = 2pq(1 - F),\\quad f(aa) = q^{2}(1 - F) + Fq',
        meaning: 'F is the fraction of loci autozygous (homozygous by descent); on those, genotype frequencies follow the allele frequencies directly (p and q) instead of the Hardy-Weinberg squares.',
      },
      {
        kind: 'para',
        text: 'The consanguinity arithmetic shows why the risk concentrates on RARE alleles. Take a recessive allele at frequency q = 10^-4. Under random mating, an affected child needs two independent draws: q² = 10^-8 — one in a hundred million. Under obligate first-cousin mating, homozygosity by descent supplies both copies from one ancestor: F times q = one sixteenth times 10^-4, about 6.3 x 10^-6 — roughly six hundred times the random-mating risk. Whether that matters for a population depends on how often cousins actually marry: at the U.S. frequency of about one in a thousand marriages, the population-level contribution of cousin matings to rare-recessive disease comes to about one third of cases — the rare allele\'s cases concentrate inside cousin families even though cousin marriages are rare overall. MIT\'s notes put the punchline in one line: the rarer the allele, the likelier an affected child\'s parents are related.',
      },
      {
        kind: 'para',
        text: 'Mutation-selection balance is the equilibrium story. Mutation supplies new copies of a deleterious allele at rate mu — per generation, typically between 10^-4 and 10^-8 per gene. Selection removes them: with selective disadvantage S (fitness 1−S), the homozygote-recessive frequency shrinks by S times q² per generation. Setting supply equal to removal gives the steady state. For a fully recessive allele, mu = S q², so the equilibrium frequency is q-hat = the square root of mu over S — a recessive allele at S = 1 (lethal) with mu = 10^-6 equilibrates at q = 10^-3. For a dominant allele, selection sees the heterozygote directly and removal runs at S times q, so q-hat is mu over S — the equilibrium sits thousands of times lower, which is why dominantly inherited lethal diseases are vanishingly rare while recessive ones persist at carrier frequencies no selection can touch.',
      },
      {
        kind: 'para',
        text: 'The human payoff of the recessive equilibrium is the carrier calculation. Albinism affects about one in twenty thousand births, so q² = 5 x 10^-5 and q is about 7 x 10^-3. The carrier frequency is 2q, about 1.4 percent — one in seventy people. Now count where the mutant ALLELES actually live: homozygotes hold 2 q² of them per person, heterozygotes hold 2q; the ratio simplifies to q, so barely 0.7 percent of albino alleles sit inside affected individuals — more than 99 percent ride inside healthy carriers. That single calculation, MIT\'s notes derive it in three lines, is the founding logic of carrier screening: the disease you never see and the allele that is everywhere are the same allele.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Pricing a Cousin Marriage',
        steps: [
          'The question: a couple are first cousins; a rare recessive condition in the family has allele frequency q = 10^-4. What is their child\'s affected risk compared with random mating?',
          'Compute F: the cousins share one pair of grandparents; each identity-by-descent chain runs four meioses to the common ancestor and then a 1/4 test, giving F = 1/16.',
          'Run the arithmetic: homozygous-by-descent risk = F x q = (1/16) x 10^-4, about 6.3 x 10^-6; add the random-mating background q² = 10^-8 — the descent term dominates by six hundredfold.',
          'State the counseling result: the child\'s risk is roughly one in 160,000 from this locus — versus one in a hundred million for unrelated parents; multiply across the family\'s known loci, then fold in the population-wide fraction (about one third of rare-recessive cases arise in cousin marriages at U.S. marriage frequencies).',
          'Close the loop: the same F enters the genotype-frequency formulas — the cousins\' children also show slightly elevated homozygosity genome-wide, which is why consanguinity raises risks for EVERY rare recessive the family happens to carry, not one.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Genetic-counseling clinics convert consanguinity into F and F into per-locus risk before any test is ordered; the cousin-marriage fraction of a population shapes its recessive-disease spectrum.',
          'Endogamous communities (Finland\'s disease heritage, Amish and Ashkenazi panels) are inbreeding at population scale — founder alleles plus cultural homogamy create the carrier panels that screening targets.',
          'Zoos and conservation breeders manage F with studbooks: mating plans minimize kinship coefficients because raised homozygosity costs fitness (inbreeding depression) even without any disease allele.',
          'Assortative mating — like inherited deafness raising assortative marriage — shifts genotype frequencies for THOSE loci while Hardy-Weinberg holds elsewhere, a standing exception every population survey checks.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Inbreeding coefficient (F)', def: 'The probability that an individual\'s two alleles at a locus are identical by descent; sib-sib 1/4, first cousins 1/16.' },
          { term: 'Identity by descent', def: 'Two alleles that are copies of one ancestral copy — the unit inbreeding counts.' },
          { term: 'Autozygous', def: 'A locus homozygous by descent; its genotype frequencies follow p and q directly, not the squares.' },
          { term: 'Consanguinity', def: 'Mating between relatives; converts hidden recessives into homozygotes at rate F.' },
          { term: 'Mutation rate (mu)', def: 'New mutant alleles per gene per generation, typically 10^-4 to 10^-8.' },
          { term: 'Selective disadvantage (S)', def: 'The fitness cost of a genotype; fitness is 1 - S.' },
          { term: 'Mutation-selection balance', def: 'The equilibrium where mutation supply equals selection removal: q-hat = sqrt(mu/S) for recessives, mu/S for dominants.' },
          { term: 'Assortative mating', def: 'Preferential mating between like individuals, as in inherited deafness; bends genotype frequencies for the loci involved.' },
          { term: 'Inbreeding depression', def: 'The fitness cost of raised genome-wide homozygosity, the conservation breeder\'s constant worry.' },
        ],
      },
      { kind: 'heading', text: 'Self-Check Quiz' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The inbreeding coefficient F for the child of first cousins is:',
            options: ['1/4', '1/8', '1/16', '1/32'],
            answer: 2,
            explain: 'Each identity-by-descent chain runs through the shared grandparents with an extra hop versus a sib-sib mating: four chains of (1/2)^4 x 1/4 give F = 1/16.',
          },
          {
            q: 'Inbreeding changes genotype frequencies by:',
            options: [
              'lowering allele frequencies',
              'converting heterozygotes into homozygotes at rate F without touching p and q',
              'raising mutation rates',
              'eliminating dominant alleles',
            ],
            answer: 1,
            explain: 'Allele frequencies stay put; the F-augmented formulas move mass from 2pq into the homozygote classes — the recessive class gains q(1 - q)F worth of frequency.',
          },
          {
            q: 'For a fully recessive lethal allele with mutation rate mu = 10^-6, the mutation-selection equilibrium frequency is:',
            options: ['10^-6', '10^-3', '3 x 10^-3', '10^-12'],
            answer: 1,
            explain: 'Recessive equilibrium: q-hat = sqrt(mu/S) = sqrt(10^-6 / 1) = 10^-3 — the square root is why recessive alleles persist a thousandfold above dominant ones.',
          },
          {
            q: 'Albinism affects 1 in 20,000 births. Roughly what fraction of albino alleles ride inside healthy heterozygous carriers?',
            options: ['about 50 percent', 'about 90 percent', 'more than 99 percent', 'about 1.4 percent'],
            answer: 2,
            explain: 'The allele fraction in homozygotes equals q (about 0.007), so over 99 percent of copies sit in the roughly 1-in-70 carriers — the founding logic of carrier screening.',
          },
        ],
      },
    ],
  },
]
