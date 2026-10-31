/**
 * Knowledge Universe — Genetics & Heredity — Chapter 04: Genes in Populations
 * 3 lessons · ~4,188 words
 * field: Genetics & Heredity
 * legacy sources: life-sciences.ts, x35-nsw-hsc-pass.ts, x71-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Population Genetics, Genes in Populations]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 bio-population-inheritance-frequencies — Inheritance in Populations: Allele Frequencies and Population Patterns
 *   04.2 bio-population-genetics — Population Genetics: Genes Drifting Through Time
 *   04.3 bio-inbreeding-mutation-balance — Inbreeding, Consanguinity and the Mutation-Selection Balance
 */
import type { KnowledgeTopic } from '../../types'

export const geneticsHeredityCh04: KnowledgeTopic[] = [
  {
    id: 'bio-population-inheritance-frequencies',
    title: 'Inheritance in Populations: Allele Frequencies and Population Patterns',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Population Genetics',
    tier: 'intermediate',
    concepts: [
      'From individual crosses to population-scale inheritance',
      'Counting alleles: gene-pool arithmetic from genotype data',
      'Random mating and the population model',
      'Polyallelic traits across a population (the ABO example)',
      'Polygenic variation as a population distribution',
      'Environmental effects on population-wide expression',
    ],
    words: 1422,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      { kind: 'heading', text: 'From crosses to populations' },
      {
        kind: 'para',
        text:
          "Mendelian genetics answers a question about families: given these two parents, what can their children inherit? Punnett squares, test crosses and pedigree charts — the machinery of individual inheritance — are the right tools for that question, and the earlier lessons in this library teach them in full. But a second question sits one level up, and it is the one population genetics exists to answer: given this whole group of interbreeding organisms, what is the state of its gene pool, and how do the proportions in that pool behave over generations? The shift sounds small and is enormous. A Punnett square tracks probabilities for one mating; a population model tracks frequencies across hundreds of matings, where the rules are different and the surprises are bigger.",
      },
      {
        kind: 'para',
        text:
          "The key conceptual move is this: a population does not inherit anything. Individuals inherit alleles from their parents; the population merely holds them, and the collection of alleles across all individuals — the gene pool — is where patterns become visible. A trait can vanish from every individual pedigree in the group while its allele sits quietly in heterozygotes, unseen and unharmmed, waiting. Frequency, not presence, is the property that matters at this scale, and frequency is something you can count, model and predict — which makes population inheritance the most quantitative corner of the genetics course.",
      },
      { kind: 'heading', text: 'Counting alleles: the gene-pool arithmetic' },
      {
        kind: 'para',
        text:
          "Everything begins with the count. In a diploid population of N individuals there are 2N allele copies for a given gene, and the frequency of an allele is simply the number of copies of it divided by 2N. Genotype data converts directly: each homozygote for the allele contributes two copies, each heterozygote contributes one. So if 40 individuals are AA, 40 are Aa and 20 are aa, the a-frequency is (40 + 40) / 200 = 0.4, and the A-frequency must be 0.6, because the two frequencies sum to one. Notice what the arithmetic quietly assumes: you can only do it if you can see the genotypes. A dominant phenotype hides a heterozygote, which is why frequency work usually leans on traits where the genotypes show, or on estimates from the population model below.",
      },
      {
        kind: 'para',
        text:
          "Once frequencies exist, the model question follows: what should the next generation look like? If mating is random, every individual is equally likely to pair with every other, and allele frequencies — not genotype frequencies — are what pass through the shuffle. Imagine the gene pool as a barrel of beans: every gamete produced is one bean drawn at random, and a new individual is two draws. The population model predicts offspring genotype proportions from parent allele frequencies by exactly that draw logic: p squared, two p q, q squared for a two-allele gene. When a real population's counts match the prediction, the shuffle is behaving; when they diverge, something in the shuffle — selection, migration, drift, non-random mating — has intervened, and the gap between predicted and observed is the clue.",
      },
      {
        kind: 'example',
        title: 'Allele frequencies from classroom data',
        steps: [
          'Collect a single-gene dataset where genotypes are visible — for example, a two-allele trait scored in 100 students: 49 AA, 42 Aa, 9 aa.',
          'Count the a-alleles: heterozygotes contribute 42, homozygotes 18, total 60 copies out of 200 — a-frequency = 0.3, A-frequency = 0.7.',
          'Predict the next generation under random mating: A A = 0.49, A a = 0.42, a a = 0.09 — compare with the observed 0.49, 0.42, 0.09.',
          'Interpret: near-equality says the class is behaving like a random-mating population for this gene; a real divergence would send you hunting for the mechanism.',
        ],
      },
      {
        kind: 'callout',
        title: 'Frequency is a property of populations, not people',
        tone: 'insight',
        text:
          "No individual is 0.3 albino or 0.6 resistant — an allele frequency describes the pool, not any member of it. Exam questions exploit this constantly: a statement about one organism's genotype can never confirm or refute a statement about the population's frequencies. Always check which level the question is really on.",
      },
      { kind: 'heading', text: 'Polyallelic and polygenic patterns in populations' },
      {
        kind: 'para',
        text:
          "Most textbook genetics uses two alleles because two is teachable, but real genes often run to whole allelic series — and the population is where the full series shows. The classic case is the ABO blood-group system: three alleles, one dominant pair and one recessive, producing four phenotypes across the population. From a population's phenotype counts and a knowledge of the mating rules, the frequencies of all three alleles can be estimated — a direct extension of the two-allele arithmetic, and a standard examination exercise. The earlier transmission-genetics lesson owns the individual-cross consequences of multiple-allele series; this lesson owns reading the series across a whole population, where each phenotype's share is a window into its alleles' frequencies.",
      },
      {
        kind: 'para',
        text:
          "Polygenic traits behave differently again: instead of a handful of discrete categories, they yield a continuous spread. Height, skin tone, blood pressure — each is the summed output of several genes plus environmental contribution, and across a population the phenotypes pile into the familiar bell shape: most people near the middle, fewer at each extreme. The bell is itself information — its width reflects how many genes contribute and how much variation the environment injects, and its shape is why no single Punnett square could ever predict a population's heights. When an examination shows a frequency histogram of a quantitative trait, it is showing polygenic inheritance at population scale, and the reading skill is distributional, not categorical.",
      },
      { kind: 'heading', text: 'Environment and expression' },
      {
        kind: 'para',
        text:
          "Populations also expose what individual crosses hide: the environment's hand in expression. The same genotype can reach different heights, colours or yields in different conditions, and at population scale those differences assemble into patterned variation — sun-exposed versus shaded slopes, well-fed versus underfed cohorts. The exam-level skill is to attribute variation honestly: a phenotype distribution usually carries both genetic and environmental components, and questions ask you to reason about which portion of the observed pattern a genotype model could explain. Where the earlier lessons own the mechanics of inheritance, this one closes the loop: genotype frequencies set what is possible, environment sets what is realised, and a population is where the two meet.",
      },
      {
        kind: 'terms',
        items: [
          { term: 'gene pool', def: "The total collection of alleles across all individuals in an interbreeding population — the pool that frequencies describe." },
          { term: 'allele frequency', def: "The share of a given allele among all copies of its gene in the population; each homozygote contributes two copies, each heterozygote one." },
          { term: 'random mating', def: "The model condition in which pairings form without regard to the trait; the null assumption against which real populations are compared." },
          { term: 'polyallelic', def: "A gene with more than two allelic forms in the population, such as the three-allele ABO series." },
          { term: 'polygenic', def: "A trait controlled by several genes acting together, producing continuous population-wide variation." },
          { term: 'genetic drift', def: "Random change in allele frequencies, strongest in small populations — one mechanism that breaks the random-mating prediction." },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A population of 100 individuals has 49 AA, 42 Aa and 9 aa. The frequency of allele a is:',
            options: ['0.09', '0.30', '0.42', '0.60'],
            answer: 1,
            explain:
              'a-copies = one per heterozygote (42) plus two per homozygote (18) = 60 of 200 copies = 0.30; the A-frequency is the complement, 0.70.',
          },
          {
            q: 'Under random mating with a-frequency 0.3, the predicted proportion of homozygous aa individuals in the next generation is:',
            options: ['0.09', '0.30', '0.42', '0.21'],
            answer: 0,
            explain:
              'Two independent draws each with probability 0.3: 0.3 × 0.3 = 0.09 — the draw logic behind the population model.',
          },
          {
            q: 'A population histogram of adult height shows a smooth bell curve. This pattern is best explained by:',
            options: [
              'a single gene with two alleles',
              'polygenic inheritance plus environmental contribution',
              'a sex-linked trait',
              'complete dominance',
            ],
            answer: 1,
            explain:
              'Continuous population-wide variation arises when several genes sum their effects and the environment contributes — the polygenic signature.',
          },
          {
            q: 'Which observation could NOT, by itself, tell you an allele\'s frequency in the population?',
            options: [
              'genotype counts from a visible-polymorphism survey',
              'one individual\'s genotype',
              'phenotype counts of a polyallelic system like ABO',
              'the full genotype distribution of a sample',
            ],
            answer: 1,
            explain:
              'Frequencies are population-level properties; a single genotype is one data point and can neither establish nor refute a frequency claim.',
          },
        ],
      },
      { kind: 'heading', text: 'Key takeaways' },
      {
        kind: 'list',
        items: [
          'Population inheritance asks about frequencies in the gene pool, not genotypes in families — check which level the question is on.',
          'Allele frequency is copy-counting: two per homozygote, one per heterozygote, over 2N total copies.',
          'The random-mating model predicts genotype proportions from allele frequencies; observed gaps point to selection, migration, drift or non-random mating.',
          'Polyallelic series (ABO) and polygenic traits (bell curves) are population-scale signatures — read distributions, not single crosses.',
          'Genotype sets what is possible; environment sets what is realised — populations are where the two become visible together.',
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: "bio-population-genetics",
    title: "Population Genetics: Genes Drifting Through Time",
    domain: "Life Sciences",
    field: "Genetics & Heredity",
    branch: "Genes in Populations",
    tier: "advanced",
    concepts: [
      "Gene pools and allele frequencies",
      "Hardy-Weinberg: the null model",
      "Selection: directional, stabilizing, disruptive",
      "Drift, bottlenecks, founder effects",
      "Gene flow between populations",
      "Coalescence: tracing genes backward",
    ],
    words: 1261,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Mendel's peas showed how genes pass from two parents to their offspring. Population genetics zooms out to the whole species and asks a colder question: how common is each allele, and why does that number move? The gene pool is the sum of every allele in every breeding individual, and shifts in its proportions — driven by selection, drift, mutation, and migration — are precisely what evolution is at the genetic scale. Its founding move was odd: work out what happens when nothing happens.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Population genetics converts family histories into public-health numbers — how many silent cystic fibrosis carriers exist — explains why cheetahs nearly vanished in one bottleneck, and sets the math behind farm resistance management and zoo breeding.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Start with counting. In a diploid population of N individuals there are 2N copies of each gene; an allele's frequency — call the common one p and the rare one q, with p + q = 1 — is its share of those copies. Allele frequency is not genotype frequency — 100 people can carry the same alleles rearranged into different homozygotes and heterozygotes — and Mendelian inheritance alone does not change allele frequencies, the quiet surprise the field begins from.",
      },
      {
        kind: "para",
        text: "That surprise is the Hardy-Weinberg equilibrium — worked out independently in 1908 by G. H. Hardy, a mathematician, and Wilhelm Weinberg, a physician, with a third independent discovery by the Russian geneticist Sergei Chetverikov. In a large, randomly mating population free of selection, mutation, migration, and drift, one round of mating settles genotype frequencies at p squared, 2pq, and q squared — and they stay there. This null model predicts that a dominant allele will not sweep through just by being dominant, and that rare recessive alleles can hide almost indefinitely inside heterozygotes. Real populations deviate slightly, and the deviations are the discoveries.",
      },
      {
        kind: "para",
        text: "Selection is the directed force, in three modes. Directional selection pushes a trait toward one extreme, as industrial soot darkened peppered moths and antibiotics enrich resistance genes. Stabilizing selection prunes both extremes and holds the mean, the classic case being human birth weight, where babies at both extremes fare worse. Disruptive selection favors both extremes over the middle, as when a finch population splits between soft-seed and hard-seed specialists. In every mode, fitness means reproductive success in context, not strength.",
      },
      {
        kind: "para",
        text: "Drift is the undirected force: pure sampling error, strongest in small populations. As coin flips often land 7-3, an allele can lurch toward fixation or loss by luck alone. Bottlenecks compress drift's power: cheetahs passed through a narrow squeeze near the end of the last ice age and remain so uniform that unrelated individuals accept each other's skin grafts, and northern elephant seals, hunted to perhaps a few dozen by 1890, carry almost no variation today. The founder effect is a bottleneck in miniature: Pennsylvania's Amish descend from a small immigrant group, and one rare allele they carried now explains most of the world's Ellis-van Creveld dwarfism.",
      },
      {
        kind: "para",
        text: "Gene flow is movement of alleles between populations — migration followed by mating. It homogenizes: islands near a mainland stay similar to it, while isolated populations drift apart into distinct races or species. It can swamp local adaptation, the conservation worry about farmed salmon breeding with wild runs, yet it also rescues inbred populations with fresh variation — why managers moved Texas cougars into Florida's dwindling panthers in 1995.",
      },
      {
        kind: "para",
        text: "Finally, run the film backward. Trace any two gene copies of today's population and their lineages coalesce at a shared ancestor so many generations back; average those meetings over the pool and you have the coalescent, the backbone of modern genomics. Coalescent logic is why all human mitochondrial DNA traces to one woman who lived in Africa roughly 150,000 to 200,000 years ago — and why that confuses people: she was not the only woman alive, only the one whose line never died out, like the last of many surnames.",
      },
      {
        kind: "formula",
        name: "Hardy-Weinberg equilibrium",
        latex: "p^2 + 2pq + q^2 = 1",
        meaning: "Under the null conditions, genotype frequencies are the square of allele frequencies: p squared homozygotes, 2pq heterozygotes, q squared recessive homozygotes, stable generation after generation.",
      },
      {
        kind: "formula",
        name: "Carrier frequency for a rare recessive disease",
        latex: "2pq \\approx 2\\sqrt{q^2}",
        meaning: "When q is small, p is near 1, so the carrier rate is roughly twice the square root of the disease incidence — the shortcut genetic counselors use daily.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: how many people carry one copy of the cystic fibrosis allele when about 1 in 2,500 European-descended births is affected.",
          "Recall the model: affected children are q squared, so the incidence equals q squared = 1/2500.",
          "Apply: take the square root — q = 1/50 = 0.02 — then p = 1 - 0.02 = 0.98, and carriers are 2pq = 2 times 0.98 times 0.02 = 0.0392, about 3.9 percent.",
          "Check the loop: two carriers meet at random with probability about 1/25 times 1/25, and one quarter of their children are affected, giving 1/2500 again — the equilibrium closes on itself.",
          "State the result: roughly 1 person in 25 is a silent carrier, about 100 times more common than the disease — which is why recessive alleles persist and why screening exists.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Carrier screening panels tell couples their recessive-disease risks before pregnancy, using exactly this arithmetic.",
          "Refuge strips planted beside Bt corn keep susceptible pest alleles common, so resistance stays rare and recessive.",
          "Florida panthers were genetically rescued in 1995 with eight Texas cougars; inbreeding depression fell and numbers recovered.",
          "Forensic rarity estimates multiply population allele frequencies, correcting for related subpopulations.",
          "Coalescent methods date viral outbreaks and power the ancestry estimates behind consumer genome tests.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Hardy-Weinberg is a measuring stick, not a description — real populations deviate slightly, and that is the point. Do not mix levels: p is an allele frequency, p squared a genotype frequency. Selection cannot simply purge a harmful recessive, because heterozygote carriers shield it; that is why cystic fibrosis still exists. And mitochondrial Eve was one lineage's luckiest survivor, not the only woman of her era.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Gene pool", def: "The complete set of alleles present in a breeding population." },
          { term: "Allele frequency", def: "An allele's share of the 2N gene copies in a diploid population." },
          { term: "Hardy-Weinberg equilibrium", def: "The null model in which genotype frequencies stay at p squared, 2pq, q squared across generations." },
          { term: "Genetic drift", def: "Random change in allele frequencies, strongest in small populations." },
          { term: "Bottleneck", def: "A sharp population squeeze that strips variation and amplifies drift." },
          { term: "Gene flow", def: "Movement of alleles between populations by migration and mating." },
          { term: "Coalescence", def: "The backward-traced point at which two gene lineages meet a common ancestor." },
        ],
      },
      {
        kind: "quiz",
        items: [
          {
            q: "In Hardy-Weinberg equilibrium, the frequency of heterozygotes is:",
            options: ["p squared", "q squared", "2pq", "p plus q"],
            answer: 2,
            explain: "Heterozygotes arise from two ordered unions, p from one parent and q from the other: 2pq.",
          },
          {
            q: "Northern elephant seals show almost no genetic variation because of:",
            options: ["strong selection", "a historical population bottleneck", "excess gene flow", "high mutation"],
            answer: 1,
            explain: "Hunting cut them to a few dozen around 1890; the survivors' limited alleles are all that remain.",
          },
          {
            q: "A harmful recessive allele persists for generations mainly because:",
            options: ["mutation keeps recreating it constantly", "heterozygous carriers are shielded from selection", "it drifts faster than selection", "it becomes dominant over time"],
            answer: 1,
            explain: "Carriers with one copy often show no disease, so selection cannot see the allele to remove it.",
          },
          {
            q: "Coalescent reasoning says mitochondrial Eve was:",
            options: ["the first human ever", "the only woman of her generation", "the woman whose mitochondrial lineage happened to survive to today", "a hybrid of humans and Neanderthals"],
            answer: 2,
            explain: "Many women lived then; only her unbroken matrilineal chain reaches everyone alive now, like a surviving surname.",
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
