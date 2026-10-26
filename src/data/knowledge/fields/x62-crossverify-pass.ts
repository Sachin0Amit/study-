import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X62 pass (2026-10-26): CROSSVERIFY-20261026-7 — Evolutionary       */
/*  Biology cross-verified vs Charles Darwin, "On the Origin of        */
/*  Species by Means of Natural Selection" (John Murray, London,       */
/*  1859 — FIRST EDITION, 247 pp. PDF). Sourcing path: the most        */
/*  popular modern evolution textbooks (Futuyma & Kirkpatrick 5e,      */
/*  Bergstrom & Dugatkin 3e, Herron & Freeman 5e, Zimmer & Emlen 3e)   */
/*  have no freely accessible legal full PDF (publisher demo chapters  */
/*  only; a full-PDF hit for the Princeton Guide to Evolution was a    */
/*  pirated upload and was REFUSED per policy). The next most popular  */
/*  title by every historical measure — the single most-cited,         */
/*  most-read book in the field's history (45k+ citations) — is        */
/*  Darwin's Origin, public domain, and was downloaded from an         */
/*  official research-institution host (VLIZ, Flanders Marine          */
/*  Institute, vliz.be/docs/Zeecijfers/Origin_of_Species.pdf); a       */
/*  GitHub public-repo mirror (manjunath5496/Books book3.pdf) was      */
/*  also verified as a backup source per the user amendment. The FULL  */
/*  1859 text (154,653 words) was extracted with pdftotext and the     */
/*  in-scope chapters read in full: Ch II-IV (variation, struggle,     */
/*  selection incl. the Sexual Selection section), Ch VI-VII           */
/*  (difficulties, instinct/neuter insects), Ch VIII (hybridism),      */
/*  Ch IX-XIV skimmed for in-scope argument, Ch XI-XIII in full        */
/*  (geographical distribution; mutual affinities/morphology/          */
/*  embryology/rudimentary organs).                                    */
/*                                                                     */
/*  VERDICT: ZERO factual corrections needed across the 5 existing     */
/*  lessons — the 1858 Darwin-Wallace proposal, artificial selection   */
/*  as proof of principle, fitness-as-reproductive-success,            */
/*  Hardy-Weinberg algebra, the byproduct account of hybrid sterility  */
/*  (Darwin Ch VIII: sterility "is incidental on other acquired        */
/*  differences"), bread-wheat polyploidy (42/28 chromosomes), and     */
/*  the homology/fossil/molecular evidence triad all AGREE with the    */
/*  book. Human evolution and plant kingdom lessons are outside the    */
/*  book's scope (Darwin deliberately deferred the origin of man to a  */
/*  later work; the one-sentence promise is in Ch XIV).                */
/*                                                                     */
/*  4 MISSING IN-SCOPE TOPIC AREAS added as this pass, each WITH a     */
/*  4-question quiz incl. explanations per the user's explicit         */
/*  requirement (all book-grounded; all carved):                       */
/*  1. bio-sexual-selection-darwin — Ch IV's Sexual Selection section  */
/*     (law of battle + female choice, sex-limited inheritance, the    */
/*     polygamy-weapons correlation); 'sexual selection'/'intersexual' */
/*     had ZERO live hits. Carved against the animal-behavior lesson   */
/*     (life-sciences.ts ~3060) which OWNS Zahavi's handicap principle */
/*     and mating-system economics (peacock's tail, stotting) — this   */
/*     lesson defers honest-cost signaling there in one line.          */
/*  2. bio-darwin-difficulties — Ch VI-VII's own hardest objections    */
/*     (transitional varieties, organs of extreme perfection/the eye,  */
/*     organs of little importance, nothing-for-another's-good,        */
/*     neuter insects) and Darwin's answers; 'organs of extreme        */
/*     perfection'/'family selection' zero live hits; Tiktaalik fresh  */
/*     (0 hits). Whale-series and feathered-dinosaur fossils are       */
/*     owned by bio-evolution-natural-selection — deferred one line.   */
/*  3. bio-biogeography-darwin — Ch XI-XII (barriers over conditions,  */
/*     single centre of origin, the mammal test, oceanic-island        */
/*     rosters: no Batrachians/terrestrial mammals but bats, glacial   */
/*     dispersal, freshwater wide ranges); 'oceanic island' zero live  */
/*     hits. Carved against environment.ts (which OWNS MacArthur-      */
/*     Wilson island biogeography and reserve design — deferred in     */
/*     one line) and against bio-human-evolution (which owns out-of-  */
/*     -Africa hominin migration — different question).                */
/*  4. bio-classification-common-descent — Ch XIII (classification as  */
/*     genealogy, subordination of characters, trifling characters +   */
/*     Linnaeus's dictum, analogy vs homology, extinction defines      */
/*     groups, rudimentary organs + the letters-in-a-word metaphor);   */
/*     'unity of type'/'stamp of inutility' zero live hits. Carved     */
/*     against bio-classification-five-kingdoms (OWNS the hierarchy    */
/*     mechanics: binomials, Whittaker, domains — this lesson owns the */
/*     EVOLUTIONARY INTERPRETATION), against bio-evolution-natural-    */
/*     -selection (OWNS homology-as-evidence forelimb argument —       */
/*     one-line cross-ref), and against the developmental-biology book */
/*     (OWNS von Baer/recapitulation critique — embryology deferred in */
/*     one line).                                                      */
/* ------------------------------------------------------------------ */

export const x62CrossverifyEvolutionPassTopics: KnowledgeTopic[] = [
  {
    id: 'bio-sexual-selection-darwin',
    title: 'Sexual Selection: Weapons, Displays and the Struggle for Mates',
    domain: 'Life Sciences',
    field: 'Evolutionary Biology',
    branch: 'Evolution',
    tier: 'core',
    concepts: [
      'Sexual selection: a struggle for mates, not for existence',
      'The law of battle: weapons of the males',
      'Female choice: singing, displaying and being chosen',
      'Less rigorous than natural selection: losers live on',
      'Sex-limited inheritance builds dimorphism',
      'Not every sexual difference is sexual selection',
      'The polygamy-weapons correlation',
      'Modern sharpening: preference and ornament coevolve',
    ],
    words: 1555,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'Natural selection, as the natural-selection lesson established, is a struggle for existence: differential survival. Reading the animal kingdom, Darwin saw a second struggle running alongside it — one that costs the loser nothing in life but everything in legacy. In the Origin\u2019s fourth chapter he named it: sexual selection "depends, not on a struggle for existence, but on a struggle between the males for possession of the females; the result is not death to the unsuccessful competitor, but few or no offspring." A hornless stag or a spurless cock, he noted, "would have a poor chance of leaving offspring" — yet it lives. This lesson builds that second engine of evolution, its two modes, and the extravagant traits only it can explain.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Sexual selection explains what survival selection cannot: weapons, songs, displays and dimorphisms that burn resources and invite predators. It runs the breeding programs behind half our livestock and poultry, sets the mating signals field biologists use to tell cryptic species apart, and shapes how conservationists manage captive breeding. Any trait that looks like a survival mistake is a candidate for this mechanism.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The first mode is combat — Darwin\u2019s examples run from stags and gamecocks downward. Male alligators have been seen "fighting, bellowing, and whirling round… for the possession of the females"; male salmon fight all day; stag-beetles carry wounds from rivals\u2019 mandibles. Victory depends "not on general vigour, but on having special weapons, confined to the male sex" — and sexual selection, "by always allowing the victor to breed," can lengthen spurs and strengthen wing-strikes exactly as the cock-fighter improves his breed by selecting the best cocks. Darwin added a defensive half the folklore usually drops: "the shield may be as important for victory, as the sword or spear" — the lion\u2019s mane and the boar\u2019s shoulder-pad are armour, not just advertisement. Modern texts label this mode intrasexual selection: competition within one sex.',
      },
      {
        kind: 'para',
        text: 'The second mode is choice, and among birds "the contest is often of a more peaceful character." Males of many species rival each other "to attract by singing the females"; the rock-thrush of Guiana and the birds of paradise congregate, successive males display their plumage and perform "strange antics," and the females, "standing by as spectators, at last choose the most attractive partner." Darwin recorded Sir R. Heron\u2019s observation that one pied peacock was "eminently attractive to all his hen birds," and he pressed the parallel with artificial selection: if man can give "elegant carriage and beauty to his bantams, according to his standard of beauty," female birds selecting "according to their standard of beauty" through thousands of generations can do the same. Modern texts call this intersexual selection: choice between the sexes.',
      },
      {
        kind: 'para',
        text: 'Why is this engine "less rigorous" than natural selection? Because its penalty is reproductive, not lethal. The beaten stag keeps his territories and his health; he simply fails to mate. That softer screen lets traits survive that survival selection would cull — and lets them escalate. Dimorphism then follows the inheritance rule Darwin observed under domestication: "peculiarities often appear… in one sex and become hereditarily attached to that sex," so weapons and ornaments accumulate in males while females stay plain. Sex-limited inheritance is the transmission rule; sexual selection is the sculptor.',
      },
      {
        kind: 'para',
        text: 'Darwin was careful with his own mechanism. "I would not wish to attribute all such sexual differences to this agency": the wattle of male carriers and the tuft of hair on the turkey-cock\u2019s breast are "neither useful… in battle, nor attractive to the females" — had they appeared under domestication, "it would have been called a monstrosity." Not every male-female difference tells a selection story; some are developmental noise attached to one sex. The modern sharpening keeps his two modes and adds the population genetics: alleles for a preference and alleles for an ornament co-inherit when choosy females\u2019 sons carry both, a feedback that can run a display far past survival-optimal size until natural selection reins it in. How costly displays stay honest signals is the animal-behavior lesson\u2019s territory — that lesson owns the handicap principle.',
      },
      {
        kind: 'para',
        text: 'Darwin closed the section with a correlation every field naturalist uses: "the war is, perhaps, severest between the males of polygamous animals, and these seem oftenest provided with special weapons." Where one male can monopolise many females, the spread between winner and loser in offspring is enormous, and the prize for winning is correspondingly valuable; where pairs bond for a season, both sexes win what the other wins, and dimorphism stays modest. Mating system, in short, predicts the intensity of sexual selection.',
      },
      {
        kind: 'example',
        title: 'Worked Example — reading dimorphism backward to mating system',
        steps: [
          'Identify what is asked: two antelope species are equally matched in body size and ecology, but species A males carry massive horns and outweigh females by half, while species B males are hornless and match females. What mating systems are implied?',
          'Apply the polygamy-weapons correlation: species A\u2019s male armament and size dimorphism signal intense male-male competition — a harem or lek system in which one male can fertilise many females in a season.',
          'Make the gradient quantitative: if a winning male of species A sires 24 of a cohort\u2019s 40 calves while a monogamous male of species B sires 2, the reproductive spread among A males is 12-fold against a 1-fold spread in B — selection on male competitive traits in A runs on a gradient an order of magnitude steeper.',
          'Check the converse prediction: species B\u2019s near-zero dimorphism implies pair-bonded biparental care, where a male\u2019s best strategy is staying with one mate rather than fighting for ten.',
          'Interpret: the dimorphism is not decoration — it is a readable record of the mating system, the same logic Darwin used to read combat, display and polygamy across the animal kingdom.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Livestock and poultry breeding still runs Darwin\u2019s parallel: sires are chosen the way the cock-fighter chose his best cocks, and mate performance is part of the selection metric',
          'Captive-breeding programs in conservation monitor mate choice — animals that refuse chosen pairings waste breeding seasons, so choice is accommodated rather than overridden',
          'Field guides and acoustic surveys use species-specific songs and plumage as identification keys — mating signals are taxonomy\u2019s practical handle on cryptic species',
          'Fisheries management accounts for trophy harvest removing the largest, most ornamented males — distorting a sexual-selection gradient humans did not design',
          'Pest-species risk: introduced gamebirds and deer, selected for armament and display, repeatedly outcompete native congeners for matings',
          'Evolutionary literacy: sexual selection is the standard reply to the puzzle of why animals carry traits that survival selection alone cannot explain',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Sexual selection does not kill the loser — it just leaves him unbred, which is why it can build traits survival selection would tear down. Do not read every dimorphism as sexual selection; Darwin himself excluded the turkey\u2019s tuft and the carrier\u2019s wattle. A female\u2019s "standard of beauty" is inherited preference, not conscious aesthetics. And the two engines stack, not oppose: a trait can be shaped by sexual selection while survival selection limits how far it goes.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Sexual selection', def: 'Selection arising from competition for mates — Darwin\u2019s "struggle between the males for possession of the females," with few or no offspring as the loser\u2019s cost.' },
          { term: 'Intrasexual selection', def: 'The modern label for the law of battle: same-sex combat over access to mates, favouring weapons and armour.' },
          { term: 'Intersexual selection', def: 'The modern label for mate choice: one sex (often females) choosing among displayers, favouring song, plumage and performance.' },
          { term: 'Secondary sexual character', def: 'A trait distinguishing the sexes beyond the reproductive organs themselves — antlers, spurs, manes, songs.' },
          { term: 'Sexual dimorphism', def: 'Systematic male-female difference in structure, size or ornament within a species.' },
          { term: 'Sex-limited inheritance', def: 'Variation expressed in one sex and hereditarily attached to it — the transmission rule that lets male-only traits accumulate.' },
          { term: 'Polygyny', def: 'A mating system in which one male mates with many females — Darwin\u2019s "polygamous animals," the ones most often armed.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Sexual selection differs from natural selection chiefly in that the unsuccessful competitor:',
            options: [
              'dies immediately',
              'survives but leaves few or no offspring',
              'mutates into a new species',
              'is expelled from the population',
            ],
            answer: 1,
            explain: 'Darwin\u2019s own distinction: the result "is not death to the unsuccessful competitor, but few or no offspring" — which is why the mechanism is less rigorous than natural selection.',
          },
          {
            q: 'Stag antlers and cock spurs, used in male-male combat, illustrate which mode of sexual selection?',
            options: [
              'intersexual selection by mate choice',
              'intrasexual selection — the law of battle',
              'stabilizing selection',
              'genetic drift in small herds',
            ],
            answer: 1,
            explain: 'Weapons used against rivals of the SAME sex are the law of battle — Darwin\u2019s hornless stag "would have a poor chance of leaving offspring."',
          },
          {
            q: 'Male birds of paradise displaying to females who "stand by as spectators" and choose illustrate:',
            options: [
              'intersexual selection — mate choice',
              'the law of battle',
              'artificial selection by human fanciers',
              'kin selection within the flock',
            ],
            answer: 0,
            explain: 'Peaceful display before choosing females is Darwin\u2019s second mode — attraction rather than combat, the modern intersexual selection.',
          },
          {
            q: 'Why is sexual selection "less rigorous" than natural selection?',
            options: [
              'it acts only on plants',
              'it requires geographic isolation first',
              'its penalty is reproductive failure rather than death, so it can build traits survival selection would remove',
              'it only affects domesticated species',
            ],
            answer: 2,
            explain: 'Loser survives, winner breeds — the softer screen lets extravagance escalate where the life-or-death screen of natural selection would cull it.',
          },
        ],
      },
    ],
  },
  {
    id: 'bio-darwin-difficulties',
    title: 'Difficulties on Theory: The Eye, Missing Links and Sterile Workers',
    domain: 'Life Sciences',
    field: 'Evolutionary Biology',
    branch: 'Evolution',
    tier: 'advanced',
    concepts: [
      'A theory that names its own hardest cases',
      'Where are the innumerable transitional forms?',
      'Organs of extreme perfection: the eye\u2019s gradations',
      'Organs of little apparent importance and inheritance',
      'Nothing exists for another species\u2019 exclusive good',
      'Neuter insects: selection applied to the family',
      'Family selection versus individual sterility',
      'How the record\u2019s imperfection reframes the gaps',
    ],
    words: 1769,
    readMins: 9,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'A confident theory hides its anomalies; Darwin\u2019s sixth chapter walks straight at them. "Long before having arrived at this part of my work, a crowd of difficulties will have occurred to the reader," he opens — "some of them are so serious that to this day I can hardly reflect on them without being staggered; but, to the best of my judgment, the greater number are only apparent." The chapter that follows names the five hardest objections to natural selection and answers each from the theory\u2019s own logic. This lesson reads that chapter as its author intended: not as damage control, but as the strongest demonstration that the theory had been thought through.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The same objections are still raised today — missing links, irreducible complexity, sterile workers — and Darwin\u2019s answers remain the template every modern reply is built on. Reading the original teaches a transferable skill: how a mature scientific theory handles its hardest cases, and how to tell a real anomaly from an apparent one.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Difficulty one: "as by this theory innumerable transitional forms must have existed, why do we not find them embedded in countless numbers in the crust of the earth?" Darwin\u2019s answer has three moving parts. First, divergence plus extinction deletes the rungs: the modified descendants of one progenitor "supplant and exterminate" their less-divergent relatives, so the living world shows separate tips, not a continuum. Second, transitional varieties are inherently scarce — they arise in small, confined populations and are exterminated as their descendants spread. Third, the geological record is far thinner than it looks, preserving only exceptional episodes in exceptional places (the imperfection-of-the-record chapters carry that load). And the links are not all dead: closely graded living varieties — the intergrading forms taxonomists already rank inside species — are today\u2019s visible transitions.',
      },
      {
        kind: 'para',
        text: 'The modern record has since vindicated the strategy of prediction: paleontologists have gone to rocks of the right age and environment and recovered graded series — Tiktaalik, the fish-to-tetrapod transitional genus, was found in 2004 precisely where its predicted Devonian habitat put it. The fossil evidence Darwin could only argue for statistically is now itemized; the whale series and feathered dinosaurs the natural-selection lesson already owns are the flagship cases, and this lesson defers to them there.',
      },
      {
        kind: 'para',
        text: 'Difficulty two: organs of extreme perfection. "To suppose that the eye, with all its inimitable contrivances for adjusting the focus to different distances, for admitting different amounts of light, and for the correction of spherical and chromatic aberration, could have been formed by natural selection, seems, I freely confess, absurd in the highest possible degree." Then the turn: "Yet reason tells me, that if numerous gradations from a perfect and complex eye to one very imperfect and simple, each grade being useful to its possessor, can be shown to exist… then the difficulty of believing that a perfect and complex eye could be formed by natural selection, though insuperable by our imagination, can hardly be considered real." Darwin then produced the gradations: in the Articulata the series opens with "an optic nerve merely coated with pigment, and without any other mechanism," and crustaceans supply step after step — double corneas, faceted inner layers, lens-shaped swellings, transparent pigment-coated cones — up to "a moderately high stage of perfection." Add the premise that "any sensitive nerve may be rendered sensitive to light," and the ladder from pigment patch to camera eye is continuous, each rung occupied and each rung useful.',
      },
      {
        kind: 'para',
        text: 'Difficulty three: organs of little apparent importance. If selection acts by life and death, why does it sculpt trivia? Darwin\u2019s answer is inheritance and correlation of growth: "the chief part of the organisation of every being is simply due to inheritance." The webbed feet of the upland goose and the frigate-bird are "of no special use" to those birds — they were useful to aquatic ancestors and ride along; effects of sexual selection are "useful only in a rather forced sense"; most structures are either current adaptations, ancestral holdovers, or correlated consequences of change elsewhere. (The shared-forelimb-skeleton homology this chapter leans on is owned by the natural-selection lesson.)',
      },
      {
        kind: 'para',
        text: 'Difficulty four: altruism across species. "Natural selection cannot possibly produce any modification in any one species exclusively for the good of another species" — yet nature teems with apparent service. Darwin\u2019s resolution: one species constantly "takes advantage of, and profits by, the structure of another," and selection can and does produce structures for the direct INJURY of others — "the fang of the adder, and in the ovipositor of the ichneumon" — but a structure maintained purely for a neighbour\u2019s benefit has no route to fixation. Apparent altruism must trace to self-interest, family interest, or misreading.',
      },
      {
        kind: 'para',
        text: 'Difficulty five, which Darwin called the most "special and hardest": the neuter insects. Worker ants and bees are sterile — "these neuters often differ widely in instinct and in structure from both the males and fertile females, and yet, from being sterile, they cannot propagate their kind." Worse, castes differ from EACH OTHER "as distinct from each other, as are any two species of the same genus": Eciton has working and soldier neuters with jaws and instincts "extraordinarily different"; Cryptocerus workers carry shield-like head growths; the Mexican Myrmecocystus has a caste that never leaves the nest, its abdomen swollen into a honey cask. How can selection favor what cannot breed? Darwin\u2019s answer is the chapter\u2019s masterstroke: "selection may be applied to the family, as well as to the individual." The horticulturist cooks the individual plant and sows seeds of the same stock; the cattle breeder culls the ox yet breeds from its family to lengthen horns "and yet no one ox could ever have propagated its kind." A worker\u2019s sterile trait, if advantageous to the colony, is transmitted by the fertile members that carry its tendency — the family is the unit of selection, and the caste differences accumulate across generations of families.',
      },
      {
        kind: 'example',
        title: 'Worked Example — family selection arithmetic',
        steps: [
          'Identify what is asked: a hive-level trait (faster brood hygiene) is expressed only in sterile workers. Can it spread if no worker ever reproduces?',
          'Set the mechanism: the trait\u2019s tendency rides in the colony\u2019s fertile males and females, exactly as the breeder\u2019s long-horned ox trait rides in the slaughtered animal\u2019s family line.',
          'Apply colony-level fitness: queens heading trait-carrying colonies rear 15 daughter queens per season against 10 for ordinary colonies — a 1.5-fold family advantage each generation.',
          'Compound it: over 12 seasons the carrier families\u2019 advantage is 1.5 to the 12th power, roughly 130-fold — the trait\u2019s carriers need not be the individuals expressing it.',
          'Interpret: individual sterility blocks individual selection but not family selection; the caste that cannot breed is bred for by the success of the family that produces it. Modern kin selection formalizes exactly this logic.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'The gradation argument is the standard reply to irreducible-complexity claims: show intermediates that each pay their way and "absurd" collapses into plausible',
          'Honeybee breeding for hygienic behavior — selecting colonies whose workers uncap and remove diseased brood — is family selection run as agriculture, a decades-old success',
          'Paleontological prediction: transitional-form hunting targets rocks of the right age and depositional setting, the strategy that has repeatedly succeeded since',
          'Objection triage in science: Darwin\u2019s pattern — name the hardest case, show what the theory predicts about it, then check the record — is a reusable template for evaluating challenges to established theories',
          'Social-insect pest management benefits from the same logic: colony-level traits, not individual fitness, determine how infestations establish and spread',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The "staggered" line is candor, not doubt — read the next clause before quoting it. The eye quote is routinely truncated: "absurd in the highest possible degree" is the setup, "Yet reason tells me…" is the argument. Sterile workers are family selection, not "group selection" in the modern sense of competing whole species. And remember Darwin\u2019s heredity was pre-genetics: his answers were right in structure, but it took the modern synthesis to fill in the mechanism of inheritance that made family selection fully rigorous.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Transitional form', def: 'A form intermediate between ancestor and descendant lineages — expected by the theory, scarce in the record because divergence and extinction delete the rungs.' },
          { term: 'Organs of extreme perfection', def: 'Darwin\u2019s label for structures like the eye whose complexity seems to defy gradual origin — answered by graded series each useful to its possessor.' },
          { term: 'Imperfection of the geological record', def: 'The documented thinness of fossil preservation — exceptional conditions, discontinuous strata — that makes gaps in the record expected rather than damning.' },
          { term: 'Correlation of growth', def: 'Change in one structure dragging changes in another during development — Darwin\u2019s route to explaining traits selection never directly targeted.' },
          { term: 'Neuter (sterile) caste', def: 'A worker class that cannot reproduce yet differs structurally from both fertile sexes — the hardest case for selection of individuals.' },
          { term: 'Family selection', def: 'Darwin\u2019s answer to neuters: selection applied to the family as well as the individual, so a sterile worker\u2019s useful trait spreads through fertile relatives that carry it.' },
          { term: 'Kin selection', def: 'The modern formalization of family selection — traits favored when their benefit to relatives outweighs their cost to the individual carrying the tendency.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Darwin\u2019s answer to "why don\u2019t we find countless transitional forms embedded in the earth" includes all EXCEPT:',
            options: [
              'divergence plus extinction deletes intermediate rungs',
              'the geological record preserves only exceptional episodes',
              'transitional varieties arise in small, confined populations',
              'transitional forms are prevented by natural laws from fossilizing',
            ],
            answer: 3,
            explain: 'Darwin argued scarcity and record-thinness, never a law against fossilization — the links are rare, local and easily erased, not magically preserved.',
          },
          {
            q: 'In the eye\u2019s gradation series, Darwin\u2019s opening rung is:',
            options: [
              'a lens of crystalline protein',
              'an optic nerve merely coated with pigment',
              'a camera-type eye with adjustable focus',
              'a mirror chamber like a scallop\u2019s',
            ],
            answer: 1,
            explain: 'The Articulata series starts with a pigmented nerve without other mechanism — and every added step, from pigment to facets to lenses, is useful to its possessor.',
          },
          {
            q: 'The sterile-worker difficulty is answered by:',
            options: [
              'workers secretly reproducing',
              'selection applied to the family, so fertile relatives transmit the trait',
              'mutations introducing workers each generation',
              'workers being a separate species from their parents',
            ],
            answer: 1,
            explain: 'Darwin\u2019s horticulturist analogy: the individual is culled but the family breeds — "selection may be applied to the family, as well as to the individual."',
          },
          {
            q: 'Natural selection CAN produce structures for the direct injury of other species — Darwin\u2019s examples are:',
            options: [
              'the adder\u2019s fang and the ichneumon\u2019s ovipositor',
              'the lion\u2019s mane and boar\u2019s shoulder-pad',
              'the goose\u2019s webbed feet',
              'the turkey-cock\u2019s breast tuft',
            ],
            answer: 0,
            explain: 'Injury structures serve the injurer\u2019s own success and are favored; what selection cannot produce is a modification exclusively for ANOTHER species\u2019 good.',
          },
        ],
      },
    ],
  },
  {
    id: 'bio-biogeography-darwin',
    title: 'The Geography of Life: Barriers, Oceanic Islands and Dispersal',
    domain: 'Life Sciences',
    field: 'Evolutionary Biology',
    branch: 'Evolution',
    tier: 'core',
    concepts: [
      'Physical conditions do not explain distribution',
      'Barriers: obstacles to free migration matter most',
      'One species, one centre of origin, then migration',
      'The mammal test and naturalisation of introduced species',
      'Oceanic islands: rosters written by dispersal',
      'The frog test: absence means arrival failure',
      'Freshwater species and their wide ranges',
      'Glacial dispersal: a climate window on the world',
    ],
    words: 1690,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'If each species were designed for its habitat, the map of life should track the map of climate. Darwin opens the distribution chapters with exactly this test — and it fails. The American continent runs "from the central parts of the United States to its extreme southern point" through "the most humid districts, arid deserts, lofty mountains, grassy plains, forests, marshes, lakes, and great rivers" under almost every temperature, yet its productions differ wholesale from the Old World\u2019s. In the southern hemisphere, Australia, South Africa and western South America between latitudes 25 and 35 degrees are "extremely similar in all their conditions, yet it would not be possible to point out three faunas and floras more utterly dissimilar" — while South America north and south of those latitudes, under DIFFERENT climates, shares close relatives. Distribution, Darwin concluded, is not a story about conditions. It is a story about history and movement.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The dispersal logic behind this chapter is why border biosecurity works, why conservationists can translocate species into habitats they never reached, and why endemism concentrates where barriers concentrate. Reading an island\u2019s roster like Darwin reads it is a working skill in ecology, invasion biology and biogeography — and it remains among the most persuasive arguments for common descent.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The first great fact is that conditions fail; the second is that barriers succeed. "Barriers of any kind, or obstacles to free migration," Darwin wrote, "are related in a close and important manner to the differences between the productions of various regions." The New and Old Worlds differ in nearly all terrestrial productions — except the north, "where the land almost joins," and where free migration under a slightly different climate is possible, as it now is for strictly arctic forms. The sea limits "terrestrial mammals… more distinctly… than perhaps in any other organic beings," and accordingly "we find no inexplicable cases of the same mammal inhabiting distant points of the world." Where a barrier runs, life histories diverge on either side; where it fails, species match.',
      },
      {
        kind: 'para',
        text: 'Darwin\u2019s positive thesis is single-origin plus migration: "each species having been produced in one area alone, and having subsequently migrated from that area as far as its powers of migration and subsistence… permitted." A broken range needs no double creation — extinction in the middle explains it. His anomaly argument is the clincher: it "would be a strange anomaly" if species alone arose twice while every higher rank stayed local — "some few families, many sub-families, very many genera… are confined to a single region," and the most natural genera are the most local. Creation twice over for species but once for genera is a pattern only common descent plus dispersal predicts.',
      },
      {
        kind: 'para',
        text: 'The mammal test makes it concrete. Not a single mammal is common to Europe and Australia or South America — yet "a multitude of European animals and plants have become naturalised in America and Australia," proving the conditions are perfectly suitable. Britain, formerly united to Europe, "possessing the same quadrupeds," shows what a land bridge does. The inference Darwin drew: "the great and striking influence which barriers of every kind have had on distribution, is intelligible only on the view that the great majority of species have been produced on one side alone, and have not been able to migrate to the other side." The limit is dispersal, not tolerance.',
      },
      {
        kind: 'para',
        text: 'Oceanic islands are the showcase, and their rosters read like a dispersal filter\u2019s output. "Batrachians (frogs, toads, newts) have never been found on any of the many islands with which the great oceans are studded," Darwin reports after taking pains to verify the claim — the one class whose adults and spawn "are known to be immediately killed by sea-water." Terrestrial mammals are likewise absent; in their places stand what CAN arrive — "in the Galapagos Islands reptiles, and in New Zealand gigantic wingless birds, take the place of mammals." Meanwhile "aerial mammals do occur on almost every island": New Zealand\u2019s two peculiar bats, and bats on Norfolk Island, the Viti Archipelago, the Bonins, the Carolines, the Marianes and Mauritius. And the decisive experiment has been run: frogs introduced into Madeira, the Azores and Mauritius "have multiplied so as to become a nuisance" — "this general absence of frogs, toads, and newts on so many oceanic islands cannot be accounted for by their physical conditions." Absence means arrival failure, not intolerance. Even the flora remembers the journey: "in certain islands not tenanted by mammals, some of the endemic plants have beautifully hooked seeds" — hooks built for continental mammal fur, carried faithfully to islands without any mammal to catch them.',
      },
      {
        kind: 'para',
        text: 'The exceptions agree with the rule. Freshwater species, though lakes are land-locked and the sea "apparently… a still more impassable barrier," range enormously — because pond-to-pond short migrations are frequent: whirlwinds drop live fish in India, land-level changes knit river systems together, and Darwin\u2019s own freshwater collections in Brazil surprised him with their similarity to Britain\u2019s while the surrounding terrestrial faunas differed. The Glacial period was a world-wide dispersal window: arctic forms circled the pole, temperate plants descended to the plains and re-climbed mountains on warming, leaving disjunct populations on summits — "how potent has been the influence of the Glacial period on the distribution both of the same and of representative species throughout the world." (The ecological theory of island colonization and reserve design that grew from these observations is the environment book\u2019s island-biogeography lesson; this lesson owns the evolutionary argument.)',
      },
      {
        kind: 'example',
        title: 'Worked Example — diagnose an island from its roster',
        steps: [
          'Identify what is asked: a volcanic island 500 km from the nearest mainland has two endemic bats, lizards, seabirds, no frogs, no native terrestrial mammals, and endemic plants with hooked seeds. What does the roster say about the island\u2019s history?',
          'Classify the island: volcanic and never connected — an oceanic island, so its species all arrived by crossing water.',
          'Read the filter: bats (flight), birds (flight), lizards (rafting on storm debris) are present — arrival modes with sea-crossing capacity are exactly the classes present.',
          'Run the frog test: frogs are absent despite proven tolerance — their introduction elsewhere on comparable islands thrives — so absence records a failure of ARRIVAL, matching the one class whose eggs and larvae die in salt water.',
          'Read the seed hooks: hooked seeds on a mammal-free island are inherited continental luggage, evidence of origin where mammals exist — the nearest mainland, whose relatives the endemic birds should and do most resemble.',
          'Verdict: colonization from the nearest source, filtered by dispersal capacity, followed by local modification — the oceanic-island signature Darwin used as one of his strongest arguments for descent with modification.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Border biosecurity is applied barrier logic: inspection regimes work because dispersal limitation is real and breachable at human speeds',
          'Invasion-risk screening assumes the Europe-to-Australia naturalisation precedent — a species that crosses the barrier usually finds suitable conditions waiting',
          'Conservation translocations are feasible because absence rarely means intolerance — the Madeira frog result generalizes',
          'Endemism hotspots sit where barriers are old and sharp — a first-order screen for protected-area siting (the ecology of reserve design is the environment book\u2019s lesson)',
          'Phylogeography operationalizes centre-of-origin thinking: DNA divergence patterns now locate the source populations Darwin could only infer',
          'Evolution education still uses the island rosters as the cleanest single-argument case for common descent',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Conditions matter for survival — they just do not EXPLAIN the map; that is barriers and history. Distinguish oceanic from continental islands: Britain joined Europe and shares its quadrupeds; a volcanic atoll never did. Bats are mammals — the flying exception that proves the rule, since the rule is about crossing water, not taxonomy. And never read absence as intolerance: the introduced frogs of Madeira settle that.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Biogeography', def: 'The study of where species live and why — the distribution argument\u2019s home field.' },
          { term: 'Barrier', def: 'Any obstacle to free migration — sea, desert, mountain, climate — whose position maps onto the discontinuities of life.' },
          { term: 'Oceanic island', def: 'An island never connected to a continent, whose native roster is entirely the product of over-water colonization.' },
          { term: 'Continental island', def: 'An island formerly united to a mainland, which inherits the mainland\u2019s fauna — Britain and its European quadrupeds.' },
          { term: 'Endemic', def: 'Native to and restricted to one place — the status of most oceanic-island species after local modification of colonists.' },
          { term: 'Naturalisation', def: 'An introduced species establishing itself in the wild — the proof that absence reflected barriers, not conditions.' },
          { term: 'Centre of origin', def: 'Darwin\u2019s "one area alone" from which a species migrated as far as its powers permitted.' },
          { term: 'Dispersal', def: 'Movement of individuals or propagules across space — wind, water, carriers, wings — the mechanism that turns origin into distribution.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Darwin\u2019s first "great fact" of distribution is that similarity and dissimilarity of inhabitants:',
            options: [
              'track temperature gradients faithfully',
              'cannot be accounted for by physical conditions alone',
              'follow soil chemistry',
              'match ocean currents everywhere',
            ],
            answer: 1,
            explain: 'Climatically parallel regions host utterly different faunas and floras — Australia, South Africa and western South America at the same latitudes — so conditions do not explain the pattern.',
          },
          {
            q: 'The decisive "frog test" on oceanic islands shows that frog absence reflects:',
            options: [
              'island climates unsuitable for amphibians',
              'competition from lizards',
              'a failure of arrival — their eggs and larvae die in salt water',
              'deliberate exclusion by colonial settlers',
            ],
            answer: 2,
            explain: 'Frogs introduced to Madeira thrive, so conditions are fine; the one class that cannot cross sea water is the one class absent — arrival failure, not intolerance.',
          },
          {
            q: 'Bats occur on almost every oceanic island while terrestrial mammals do not, because:',
            options: [
              'bats are smaller',
              'bats arrived by flight — the aerial route crosses the barrier',
              'islanders exterminated other mammals',
              'terrestrial mammals never evolved',
            ],
            answer: 1,
            explain: 'The rule is about crossing water: aerial mammals fly over it, terrestrial mammals cannot — New Zealand\u2019s peculiar bats are Darwin\u2019s own example.',
          },
          {
            q: 'Endemic plants on mammal-free islands bearing "beautifully hooked seeds" indicate, on Darwin\u2019s reading:',
            options: [
              'a local mutation for hooklessness',
              'inheritance from continental ancestors whose fur-bearers the hooks served',
              'wind as the seed\u2019s disperser',
              'recent introduction by birds',
            ],
            answer: 1,
            explain: 'The hooks are continental luggage — useful where mammals catch them, faithfully inherited where none exist, tracing the colonists to a mainland source.',
          },
        ],
      },
    ],
  },
  {
    id: 'bio-classification-common-descent',
    title: 'Classification as Genealogy: Homology, Analogy and Rudimentary Organs',
    domain: 'Life Sciences',
    field: 'Evolutionary Biology',
    branch: 'Systematics',
    tier: 'core',
    concepts: [
      'Groups subordinate to groups are not arbitrary',
      'Descent with modification predicts the hierarchy',
      'Subordination of characters: what ranks highest',
      'Trifling characters, aggregates and Linnaeus\u2019s dictum',
      'Analogy misleads; homology reveals affinity',
      'Extinction separates and defines groups',
      'Embryology: the young outrank the adult',
      'Rudimentary organs: the stamp of inutility',
    ],
    words: 1801,
    readMins: 9,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The classification lesson in this chapter owns the filing cabinet: binomial names, the taxonomic hierarchy, Whittaker\u2019s kingdoms, the three domains. Darwin\u2019s thirteenth chapter asks the deeper question — why is the filing cabinet possible at all? "From the first dawn of life, all organic beings are found to resemble each other in descending degrees, so that they can be classed in groups under groups. This classification is evidently not arbitrary like the grouping of the stars in constellations." Descent with modification is the only known process that PREDICTS a nested hierarchy: diverging lineages inherit what their progenitor had, sub-groups share more recent ancestors than the whole, and extinction erases the intermediates between them. The natural system, on Darwin\u2019s reading, is literally genealogy — a family tree mistaken for centuries for a filing convention.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every identification key, DNA-barcode database, phylogenetic tree and clinical microbiology report leans on classification tracking ancestry. Knowing why the hierarchy works — and where it reliably fails — is what separates reading a tree from being fooled by one. It is also the discipline behind modern systematics: aggregate the characters, distrust the convenient look-alike, and hunt the rudiments.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Darwin\u2019s branching diagram makes the logic visible: the modified descendants of one progenitor become "broken up into groups subordinate to groups" — genera within sub-families within families — precisely because each fork\u2019s descendants "have inherited something in common" from their shared ancestor, and the closer the fork, the more they share. His summary is the chapter\u2019s thesis: "all true classification is genealogical; that community of descent is the hidden bond which naturalists have been unconsciously seeking, and not some unknown plan of creation." And descent was already the systematists\u2019 working tool: "As descent has universally been used in classing together the individuals of the same species, though the males and females and larvae are sometimes extremely different," he reasoned — and likewise in classing modified varieties — "may not this same element of descent have been unconsciously used in grouping species under genera, and genera under higher groups?" His answer: it has, and only on that reading do the systematists\u2019 own rules make sense.',
      },
      {
        kind: 'para',
        text: 'Which characters count? Adaptive ones — the parts shaped by habitat — are treacherous, because similar conditions build similar outsides on different stocks. What guides affinity is "general structure": the unity of type that lets a naturalist rank the duck-billed platypus (Ornithorhynchus) even while its bill and webbed feet mimic a bird\u2019s and an otter\u2019s. Darwin\u2019s example cuts close: "If the Ornithorhynchus had been covered with feathers instead of hair, this external and trifling character would… have been considered by naturalists as important an aid in determining the degree of affinity of this strange creature to birds and reptiles." Hair and milk, not the bill, place it — reproductive and structural fundamentals rank above adaptive outsides. That ranking is the subordination of characters.',
      },
      {
        kind: 'para',
        text: 'Yet trifling characters often decide cases — "the nature of the dermal covering, as hair or feathers," "mere colour in certain Algae," "mere pubescence on parts of the flower in grasses" — and Darwin explains why: their importance "mainly depends on their being correlated with several other characters." No single character carries a classification: "a classification founded on any single character, however important that may be, has always failed; for no part of the organisation is universally constant." Hence Linnaeus\u2019s dictum, "the characters do not give the genus, but the genus gives the characters," and Darwin\u2019s botanical showcase: certain Malpighiaceae bear "perfect and degraded flowers," and in the degraded state "the greater number of the characters proper to the species, to the genus, to the family, to the class, disappear, and thus laugh at our classification" — yet Aspicarpa, producing only degraded flowers in France for years, kept its family rank because the aggregate of characters still told the story.',
      },
      {
        kind: 'para',
        text: 'Analogy is the standing trap. Analogical resemblances — similar function built on different construction, like insect wings and bird wings — have "little… value" for affinity; homologous structures — the same parts turned to different uses — are its true currency. The natural-selection lesson owns the forelimb-homology evidence argument; the systematics discipline is the pairing here: before ranking anything by resemblance, ask whether the resemblance is the same plan reused or the same job re-solved. Modern convergent evolution is the systematic name for the trap, and the aggregate rule is the escape.',
      },
      {
        kind: 'para',
        text: 'Extinction is what makes the hierarchy look neat. "Extinction separates and defines groups": the living world feels discrete because the connecting grades are dead, and the fossil record — where they survive — fills the valleys between the ranges. This is the companion to the speciation lesson\u2019s observation that species boundaries run through gray zones of partial interbreeding: the crispness is partly real, partly the shadow of what was lost. Embryology supplies a second depth gauge: the young of a group resemble each other more than the adults do, because modifications that accumulate late in life are inherited at a corresponding late age — so "the embryo rises greatly in interest… as a picture, more or less obscured, of the common parent-form of each great class of animals." (The developmental-biology book owns von Baer\u2019s laws and the critique of recapitulation; this lesson uses the result only as evidence of descent.)',
      },
      {
        kind: 'para',
        text: 'Rudimentary organs are the least deniable of all. Organs "in this strange condition, bearing the stamp of inutility, are extremely common": rudimentary mammae in male mammals; the bastard-wing digit of birds; one lung-lobe rudimentary in many snakes; pelvis and hind-limb rudiments in others; "the presence of teeth in foetal whales, which when grown up have not a tooth in their heads, and the presence of teeth, which never cut through the gums, in the upper jaws of our unborn calves"; beetle wings "so reduced in size as to be utterly incapable of flight… lying under wing-cases, firmly soldered together." Their meaning, Darwin wrote, "is often quite unmistakeable" — same-genus beetles, one flying, one with "mere rudiments of membrane," make it "impossible to doubt, that the rudiments represent wings." And his metaphor for what rudiments are: "compared with the letters in a word, still retained in the spelling, but become useless in the pronunciation, but which serve as a clue in seeking for its derivation." Inutility itself is the datum: a designer wastes nothing; inheritance forgets nothing.',
      },
      {
        kind: 'example',
        title: 'Worked Example — diagnose affinity with aggregates and rudiments',
        steps: [
          'Identify what is asked: a fossil marine animal shows hair, milk-giving, three ear bones, a foetal tooth row that is resorbed before birth, and two small detached pelvis bones. Where does it belong?',
          'Apply the aggregate rule first: no single character decides — hair alone could mislead — but hair + milk + three ear bones is an aggregate no fish or reptile presents: the animal is a mammal.',
          'Weigh the adaptive characters last: the streamlined body and finlike limbs are habitat-made (analogy-prone) — the classification lesson\u2019s trap — and rank below the structural aggregate.',
          'Read the rudiments: foetal teeth and pelvis vestiges are letters retained in the spelling — evidence of ancestors that walked and chewed.',
          'Verdict: a mammal of terrestrial ancestry adapted to sea life — genealogy over habitat, exactly the discipline Darwin\u2019s chapter teaches; the modern whale fossil series confirmed the diagnosis the rudiments already implied.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Genomic supermatrices are Linnaeus\u2019s aggregate rule at industrial scale — hundreds of loci, so no single character\u2019s failure deranks a group',
          'Molecular homology finds gene families by sequence similarity even when function diverged — Darwin\u2019s same-plan-different-use discipline, run on DNA',
          'Clinical microbiology keys and barcode databases assume tree-shaped classification; misreading analogical similarity mislabels pathogens',
          'Convergent-look-alike checks are standard in ecology and taxonomy before any claim of close relationship from appearance alone',
          'Vestigial structures remain working evidence in anatomy and paleontology — whale pelvis rudiments led the diagnosis decades before the fossil series arrived',
          'Tree-thinking curricula descend directly from the branching diagram Darwin drew to explain groups subordinate to groups',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Analogy is the most punished error in systematics: same job does not mean same stock. Rudimentary does not mean useless to ANCESTORS — it means useless now and inherited. Classification long predates Darwin; descent did not invent the hierarchy, it explained why the hierarchy works. And the natural system is a tested hypothesis, not a filing convention: every well-placed species is a confirmation, every misfiled one a revision in progress.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Natural system', def: 'The classification that arranges organisms by true affinity — genealogy, on Darwin\u2019s reading, rather than convenience.' },
          { term: 'Subordination of characters', def: 'The ranking principle that structural and reproductive fundamentals outweigh adaptive outsides when placing a species.' },
          { term: 'Analogy', def: 'Similar function on different construction — adaptive resemblance of little classificatory value; the trap convergence sets.' },
          { term: 'Homology', def: 'The same structural plan turned to different uses — the currency of affinity (its evidence role is owned by the natural-selection lesson).' },
          { term: 'Unity of type', def: 'The shared architectural plan across a class — why the platypus\u2019s bill cannot buy it out of the mammals.' },
          { term: 'Rudimentary organ', def: 'A reduced, functionless remnant of an ancestral organ — "the stamp of inutility" and a clue to derivation.' },
          { term: 'Aggregate of characters', def: 'The rule that classification rests on many characters jointly — "the characters do not give the genus, but the genus gives the characters."' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Darwin says the natural system of classification is unlike "the grouping of the stars in constellations" because it is:',
            options: [
              'based on habitat similarity',
              'rooted in real genealogy — groups nest because ancestors differ in age',
              'an arbitrary human convention',
              'derived from naming priority rules',
            ],
            answer: 1,
            explain: 'Descent with modification predicts nested groups: each fork\u2019s descendants inherit what their common progenitor had, and closer forks share more.',
          },
          {
            q: 'A duck-billed, web-footed, egg-laying animal is nonetheless ranked as a mammal because:',
            options: [
              'adaptive characters like the bill always decide',
              'subordinated structural characters — hair, milk — outrank the adaptive bill',
              'it lives on land',
              'its embryos breathe air',
            ],
            answer: 1,
            explain: 'Darwin\u2019s Ornithorhynchus example: fundamentals rank above adaptive resemblance — and had it worn feathers, that trifling external character would still mislead.',
          },
          {
            q: 'Linnaeus\u2019s dictum "the characters do not give the genus, but the genus gives the characters" means:',
            options: [
              'genera are named before characters are examined',
              'a group\u2019s definition rests on the aggregate of correlated characters, not any single one',
              'characters are unimportant in classification',
              'genera and characters are unrelated',
            ],
            answer: 1,
            explain: 'Darwin\u2019s reading: many slight correlations carry the classification — no single character is universally constant, so single-character systems have always failed.',
          },
          {
            q: 'Rudimentary organs — foetal whale teeth, snakes\u2019 pelvis vestiges, soldered beetle wings — are evidence of:',
            options: [
              'design economy',
              'inheritance from ancestors in which the organs functioned',
              'disease in the individual',
              'recent mutation events',
            ],
            answer: 1,
            explain: 'Darwin\u2019s letters-in-a-word metaphor: useless letters retained in spelling serve "as a clue in seeking for its derivation" — inutility is the datum, ancestry is the meaning.',
          },
        ],
      },
    ],
  },
]
