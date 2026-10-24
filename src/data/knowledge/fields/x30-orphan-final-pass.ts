import type { KnowledgeTopic } from '../types'

/** Expansion pass X30 (2026-10-24): the final-orphan sweep. After X29 the
 *  audit stood at 2418/2427 with 9 unmapped topics, every one a single-topic
 *  cluster; this pass closes five of them with honest, textbook-grounded
 *  lessons. Each candidate was cross-checked against the dedup ledger,
 *  coverage.json and greps of all field files before authoring:
 *  1. math-graphical-linear-programming — the CUET 'Graphical Solution of
 *     LPPs' gap: objective function and constraints, half-plane intersection,
 *     the feasible region, the corner-point (Fundamental) theorem, vertex
 *     evaluation versus the iso-profit line, infeasible/unbounded outcomes.
 *     Zero overlap: grep 'feasible region|corner point|objective function'
 *     across fields returns nothing; the linear-algebra volumes own systems
 *     of equations, not optimization over inequalities.
 *  2. chem-chemicals-medicine-food — the BITSAT 'Chemicals in Medicine,
 *     Health-Care and Food' gap: drug classification (pharmacological effect,
 *     action, structure, molecular target), enzyme/receptor interactions,
 *     antacids, antihistamines, analgesics, antibiotics, antiseptics versus
 *     disinfectants; preservatives, antioxidants (BHA/BHT), artificial
 *     sweeteners, color additives, emulsifiers. Zero overlap: the organic
 *     and biochemistry lessons own reaction mechanisms and metabolism, not
 *     the applied classification survey; grep 'aspirin|aspartame|antacid'
 *     shows only passing mentions.
 *  3. manuf-welding-joining — the GATE-ME 'Joining' gap: welding versus
 *     brazing versus soldering, oxy-fuel and arc processes (SMAW, GMAW,
 *     GTAW), resistance spot welding, shielding, joint types, heat-affected
 *     zone, defects, weldability, safety. Zero overlap: the materials and
 *     structures lessons teach how parts fail, not how they are joined.
 *  4. eng-spelling-rules-patterns — the SSC-CGL 'Spelling' gap: the i-before-e
 *     rule and its exceptions, doubling, drop-e, -y to -ies, plural -es after
 *     sibilants, -f to -ves, irregular plurals, British/American conventions,
 *     confusables, and a spotting strategy. Zero overlap: the punctuation and
 *     vocabulary lessons own mechanics and word meaning, not orthography.
 *  5. hist-twentieth-century — the gaokao 'The twentieth century' gap: the
 *     century as a political-economic arc — world-war aftermath, the Russian
 *     Revolution, interwar crises, the Cold War order (containment, Marshall
 *     Plan, NATO/Warsaw Pact, proxy wars, MAD), decolonization and
 *     non-alignment, 1989-91, multipolarisation and globalisation. Carved
 *     against hist-world-wars (owns the two wars' military course) and
 *     hist-peoples-republic-china (owns China since 1949): this lesson is the
 *     systemic century survey neither provides.
 *  Sources read while writing (legally open):
 *  - LibreTexts, Math 101 Finite Mathematics (University of St. Thomas) §7.2
 *    'Maximization Applications' (math.libretexts.org, CC BY-NC-SA) — the
 *    Fundamental Theorem of Linear Programming, the six-step graphical
 *    procedure, and the Niki two-jobs worked example (I = 40x + 30y,
 *    x + y <= 12, 2x + y <= 16, corner points (0,0), (0,12), (4,8), (8,0),
 *    optimum $400 at (4,8)) used here.
 *  - LibreTexts, Science of Food (Russel) §10.4 'Other Food Additives'
 *    (chem.libretexts.org, CC BY-NC-SA) — the additive-purpose table
 *    (preservatives, sweeteners, colors, emulsifiers, stabilizers, pH
 *    control), antioxidants BHA/BHT/TBHQ, certified FD&C dyes versus
 *    exempt natural colors, MSG and flavor enhancers.
 *  - LibreTexts, Chemistry and Global Awareness (Shasta College) ch.10
 *    'Pharmaceuticals' — analgesic survey (acetaminophen/paracetamol,
 *    acetylsalicylic acid), OTC selection logic; LibreTexts, Pharmacology
 *    (Moraine Valley) §1.8 'Drug Classifications' — therapeutic classes
 *    (antacids, antihypertensives) and classification axes.
 *  - Wikibooks, 'Welding' (en.wikibooks.org, CC BY-SA) — welding as fusion
 *    joining, the process families (SMAW, oxy-fuel, GTAW) and the safety
 *    chapter framing.
 *  - LibreTexts, Modern World History (Alloso and Williford) §1.12 'Cold
 *    War' and §1.11 'Decolonization' (human.libretexts.org, CC BY-NC-SA) —
 *    Yalta, iron curtain, containment and the Truman Doctrine, Greece,
 *    Marshall Plan, the 1949 Berlin/Germany split, NATO, Korea and Vietnam,
 *    MAD, peaceful coexistence, Warsaw Pact, Hungary 1956.
 *  - How to Spell (J. Pattison) '7 Plural Spelling Rules' and Wikipedia,
 *    'English orthography' — the plural rule set (s/-es after sibilants,
 *    -ves, y-to-ies, vowel-o endings, invariants) and the deep
 *    sound-spelling mismatch that makes English orthography non-phonetic.
 */

export const x30OrphanFinalPassTopics: KnowledgeTopic[] = [
  {
    id: 'math-graphical-linear-programming',
    title: 'Linear Programming by Graph: Feasible Regions and Corner Points',
    domain: 'Mathematics',
    field: 'Applied & Finite Mathematics',
    branch: 'Linear Programming',
    tier: 'intermediate',
    concepts: [
      'Objective function and decision variables',
      'Constraints, including non-negativity',
      'Half-planes and their intersection',
      'The feasible region',
      'Corner points and the Fundamental Theorem of Linear Programming',
      'Vertex evaluation versus the iso-profit line',
      'Infeasible and unbounded outcomes',
      'Modelling word problems as LPs',
    ],
    words: 1624,
    readMins: 8,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Business, logistics and economics constantly ask the same shaped question: given limited resources, what choice maximizes profit or minimizes cost? A factory with machine-hours and labour hours must decide how many units of each product to run; a diet planner must meet nutrient floors at minimum cost. Linear programming (LP) is the standard machine for such decisions when both the goal and the restrictions are linear, and the graphical method — the subject of this lesson — makes the whole machinery visible in two dimensions. Exam questions reward exactly two skills: translating a story into an objective function plus constraints, and walking the graphical procedure to the optimal corner.',
      },
      {
        kind: 'para',
        text: 'The deep surprise of the subject is how little searching the optimum requires. A feasible region has infinitely many points, yet the best one always sits at a corner. That fact — the Fundamental Theorem of Linear Programming — converts an infinite search into a four-corner table, and it is the reason the method generalizes, far beyond what any picture can show, to the simplex algorithm running on thousands of variables. Understand the picture honestly and the algebra of industrial optimization becomes an obvious extension.',
      },
      { kind: 'heading', text: 'The anatomy of a linear programme' },
      {
        kind: 'para',
        text: 'Every LP problem has three parts. First, decision variables: the quantities you control, named explicitly — let x be the hours assigned to job one, let y the hours for job two. Second, an objective function: a linear expression to maximize or minimize, such as income I = 40x + 30y. Third, constraints: linear inequalities bounding the variables, always including the non-negativity pair x \u2265 0, y \u2265 0, since no real job takes negative hours. A standard maximization problem writes every constraint as ax + by \u2264 c with c non-negative.',
      },
      {
        kind: 'para',
        text: 'Translation from words is where marks are lost, so be mechanical. Each stated limit becomes one inequality; each per-unit contribution becomes a coefficient in the objective. Keep a small ledger while reading the story: what is limited (hours, money, material), what earns or costs (per-unit values), what is asked (maximize or minimize). The ledger fills the three parts without guesswork, and the non-negativity pair — so easy to forget — is what keeps the region in the first quadrant where the story actually lives.',
      },
      { kind: 'heading', text: 'Half-planes and the feasible region' },
      {
        kind: 'para',
        text: 'A linear inequality such as x + y \u2264 12 cuts the plane in two: the boundary line x + y = 12 and one of the two half-planes either side of it. Graph the boundary by its intercepts (set x = 0, then y = 0), draw it solid when the inequality is \u2264 or \u2265 and dashed when it is strict, then test one easy point — the origin unless the line passes through it — to learn which side satisfies the inequality. Each constraint contributes one shaded half-plane.',
      },
      {
        kind: 'para',
        text: 'The feasible region is the intersection of all the half-planes at once: the set of points satisfying every constraint simultaneously. Geometrically it is a convex polygon (possibly unbounded, possibly empty), and every point inside it is a feasible solution — a legal schedule of the decision variables. Convexity matters: the region never has dents, because the intersection of half-planes cannot create one. When you shade the region you are drawing the complete list of choices the world allows, before any talk of what is best.',
      },
      { kind: 'heading', text: 'The corner point theorem' },
      {
        kind: 'para',
        text: 'The Fundamental Theorem of Linear Programming states that the maximum or minimum value of the objective function, if it exists, occurs at a vertex — a corner point — of the feasible region. Corners are where boundary lines cross, so they are found by solving small pairs of simultaneous equations: intersect each boundary with each other and with the axes, and keep the crossing points that satisfy all constraints. A bounded region with five sides has at most five candidates.',
      },
      {
        kind: 'para',
        text: 'Why should the optimum be a corner? Picture the objective as a family of parallel lines, one for each fixed value of I; increasing I slides the line across the plane. The largest value the region can reach is reached where the sliding line is about to leave the region entirely — and for a convex polygon that last touch is at a vertex. The theorem turns optimization into bookkeeping: list the corners, evaluate the objective at each, circle the winner. Two honest exceptions complete the theory: if the constraints contradict, the region is empty and the problem is infeasible; if the region is unbounded in the improving direction, no maximum exists and the problem is unbounded.',
      },
      { kind: 'heading', text: 'Two equivalent readings of the optimum' },
      {
        kind: 'para',
        text: 'The evaluation method and the sliding-line method answer the same question and checking one against the other catches slips. In the evaluation method you compute the objective at every corner and compare. In the iso-profit (sliding-line) method you draw the objective line for some convenient value, then move it parallel to itself — up and to the right for maximization — until it last touches the region; the corner where it leaves is the optimum. The sliding line is also the fastest visual answer to "which constraint is binding": the optimal corner is the intersection of the two boundary lines that the objective line meets last, and those constraints are the ones the solution exhausts.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Niki\u2019s two jobs (LibreTexts, Math 101 §7.2.1)',
        steps: [
          'Story: Niki works two part-time jobs. She wants at most 12 total hours a week; job I needs 2 hours of preparation per working hour and job II needs 1, with at most 16 preparation hours available; job I pays $40 per hour and job II $30. Maximize income.',
          'Variables and objective: let x = hours at job I, y = hours at job II; maximize I = 40x + 30y.',
          'Constraints: x + y \u2264 12 (total hours); 2x + y \u2264 16 (preparation); x \u2265 0, y \u2265 0 (non-negativity).',
          'Feasible region: graph both boundary lines and keep the first-quadrant side of each; the region is a quadrilateral with corner points (0, 0), (0, 12), (4, 8) and (8, 0). The corner (4, 8) is the crossing of the two boundary lines, found by solving x + y = 12 and 2x + y = 16 simultaneously.',
          'Evaluate the objective at every corner: I(0,0) = $0; I(0,12) = $360; I(4,8) = 40(4) + 30(8) = $400; I(8,0) = $320. The maximum is $400 at (4, 8): work 4 hours at job I and 8 at job II.',
          'Cross-check by sliding line: the line 40x + 30y = k, moved parallel outward, last touches the region at (4, 8) — both binding constraints meet there, so the schedule uses all 12 work hours and all 16 preparation hours.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Where does the Fundamental Theorem of Linear Programming place the optimal value?',
            options: [
              'at the centre of the feasible region',
              'at a corner point (vertex) of the feasible region',
              'anywhere on the boundary line of the first constraint',
              'at the origin always',
            ],
            answer: 1,
            explain: 'The optimum, if it exists, always occurs at a vertex of the feasibility region — the fact that makes the vertex table a complete search.',
          },
          {
            q: 'In the Niki example, which point maximizes I = 40x + 30y?',
            options: ['(0, 12)', '(8, 0)', '(4, 8)', '(0, 0)'],
            answer: 2,
            explain: 'I(4,8) = $400 beats $360, $320 and $0; the job-I-heavy corners lose because preparation time binds.',
          },
          {
            q: 'A feasible region for a maximization problem extends infinitely upward and the objective grows in that direction. The problem is:',
            options: ['infeasible', 'unbounded — no maximum exists', 'degenerate but solvable', 'still solved at (0, 0)'],
            answer: 1,
            explain: 'When the region is unbounded in the improving direction the objective can grow forever; the theorem\u2019s guarantee applies only when a bounded optimum exists.',
          },
          {
            q: 'Why are the non-negativity constraints x \u2265 0, y \u2265 0 included in word problems?',
            options: [
              'to make the region convex',
              'because decision variables cannot take negative values in the story',
              'because examiners deduct marks otherwise',
              'to guarantee the region has corners',
            ],
            answer: 1,
            explain: 'Hours produced, shipped or worked cannot be negative; the pair also anchors the region in the first quadrant where the graph is read.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Translating carelessly — every stated limit is one inequality, and a missed limit shifts the whole region. Forgetting the non-negativity pair and shading into negative quadrants. Treating a dashed-boundary strict inequality as inclusive at the exam\u2019s cost. Reading corners off the picture instead of solving the two-line systems algebraically — an eyeballed (4.2, 7.8) earns nothing. Evaluating the objective at interior points "near" the best corner: the theorem needs corners only. Declaring "maximum" for a region unbounded in the improving direction, or "minimum" for one unbounded downward. And checking feasibility of a corner after evaluating it — test every candidate against all constraints first; a crossing of two boundaries can still violate a third.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: graphing linear equations and solving two-line systems (the linear-algebra volumes). This lesson is the geometric ground floor of operations research: the simplex algorithm runs the same vertex logic in n dimensions, and the transport, assignment and diet problems are standard LP formulations. Primary reading: LibreTexts, Math 101 Finite Mathematics (University of St. Thomas) §7.2 "Maximization Applications" (math.libretexts.org, CC BY-NC-SA) — the Fundamental Theorem, the six-step procedure and the Niki example used here.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'An LP has three parts: decision variables, a linear objective, linear constraints including x \u2265 0, y \u2265 0.',
        'Each inequality is a half-plane; the feasible region is the intersection — a convex polygon.',
        'Fundamental Theorem: the optimum, if it exists, sits at a corner point.',
        'Procedure: graph constraints, shade the region, list corners, evaluate the objective at each.',
        'The iso-profit line gives the same corner by sliding; binding constraints meet there.',
        'Empty region = infeasible; unbounded in the improving direction = no maximum.',
      ] },
    ],
  },
  {
    id: 'chem-chemicals-medicine-food',
    title: 'Chemicals in Medicine and Food: Drugs and Additives by Class',
    domain: 'Physical Sciences',
    field: 'Chemistry',
    branch: 'Chemistry in Everyday Life',
    tier: 'core',
    concepts: [
      'Drugs classified by effect, action, structure and target',
      'Enzymes and receptors as molecular drug targets',
      'Antacids and antihistamines',
      'Analgesics: aspirin and paracetamol',
      'Antibiotics and antimicrobial action',
      'Antiseptics versus disinfectants',
      'Preservatives and antioxidants (BHA, BHT)',
      'Artificial sweeteners: saccharin, aspartame, sucralose',
      'Color additives: certified dyes versus exempt natural colors',
      'Emulsifiers, stabilizers and texture',
    ],
    words: 1492,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Most chemistry examinations reserve a section for the subject\u2019s most personal applications: the molecules we swallow as medicine and eat as food. The material is classification-heavy — the examiner names a use and expects the class, or names a class and expects an example with its common chemical name. The payoff for learning the map is practical too: reading a medicine packet or an ingredient list becomes a live quiz, and the safety reasoning behind dosing, preservation and additive approval stops being abstract. This lesson walks the two halves — drug classes, then food additive classes — with the naming conventions each demands.',
      },
      {
        kind: 'para',
        text: 'Both halves share one organizing idea: classification axes. A single drug can be described by its pharmacological effect (what it treats), its action on the body (how it intervenes), its chemical structure (what family it belongs to) and its molecular target (what it binds). The same multi-axis habit organizes food additives by function: preservative, sweetener, color, emulsifier, nutrient. Two axes per molecule — memorize the pairings and the section answers itself.',
      },
      { kind: 'heading', text: 'How drugs are classified and how they act' },
      {
        kind: 'para',
        text: 'Therapeutic classification names drugs by what they are used for: antacids reduce stomach acid, antihypertensives lower blood pressure, analgesics relieve pain, antipyretics lower fever, antibiotics treat bacterial infection. Mechanistically, most drugs work at molecular targets: enzymes, whose active sites a drug can block competitively, and receptors, the protein switches that receive the body\u2019s chemical signals. A drug that binds a receptor and switches it on is an agonist; one that binds without activating — merely occupying the site so the genuine signal cannot — is an antagonist. This targeting is why drugs are selective: the fit between molecule and site, not the disease, decides the effect.',
      },
      {
        kind: 'para',
        text: 'The everyday classes follow directly. Antacids are mild bases — aluminium and magnesium hydroxides, sodium bicarbonate — that neutralize excess gastric acid where overproduction burns the stomach lining. Antihistamines such as cetirizine block the H1 receptor so histamine cannot trigger its allergy cascade; the drowsiness of older antihistamines showed what happens when the same blocker also reaches receptors in the brain. Analgesics kill pain: paracetamol (acetaminophen) acts centrally to dull pain and lower fever, while aspirin — acetylsalicylic acid — adds anti-inflammatory action by disabling the enzyme that makes prostaglandin inflammation messengers, which is also why it thins blood and irritates the stomach.',
      },
      {
        kind: 'para',
        text: 'Two safety-facing classes complete the drug map. Antibiotics — chloramphenicol, tetracycline, penicillin families — are selective poisons for bacteria: they attack bacterial ribosomes or cell-wall chemistry that human cells lack, which is exactly why completing the prescribed course matters; stopped early, the survivors are the resistant ones. Antiseptics and disinfectants share chemistry (boric acid, iodoform, phenol derivatives, chlorine compounds) but differ by target tissue: antiseptics are mild enough for living skin, disinfectants are harsher and confined to surfaces and instruments. The distinction is a standard one-mark question because it encodes the dose-toxicity principle — the same molecule is a healer or a hazard depending on concentration and contact.',
      },
      { kind: 'heading', text: 'Chemicals in food: the additive classes' },
      {
        kind: 'para',
        text: 'Additives exist because consumers expect food to survive storage, transport and time. Preservatives slow spoilage by microbes or chemistry: sodium benzoate and potassium sorbate check moulds and yeasts in acidic drinks and jellies; sodium nitrite keeps cured meats pink and blocks the bacterium that causes botulism; calcium propionate stops bread mould. A special sub-class guards against oxidation rather than microbes: antioxidants — ascorbic acid (vitamin C), the tocopherols (vitamin E) and the synthetic BHA, BHT and TBHQ — donate hydrogen to the free radicals that would otherwise turn fats and oils rancid, which is why they appear wherever oil meets a long shelf life.',
      },
      {
        kind: 'para',
        text: 'Sweeteners and colors carry the naming conventions examiners love. Artificial sweeteners deliver sweetness with little or no energy: saccharin (the oldest), aspartame (roughly as sweet as sugar by weight in the hundreds, and metabolized like a small protein — hence the phenylalanine warning), sucralose (chlorinated sucrose, stable to heat), acesulfame-K. Color additives split into certified synthetic dyes — the FD&C numbering in the United States, E numbers in Europe: tartrazine (Yellow 5), Allura Red (Red 40), Brilliant Blue — and colors exempt from certification because they come from natural sources: annatto, caramel, carmine from cochineal insects, beta-carotene, beet and turmeric extracts. Certified dyes win on intensity, uniformity and cost; natural dyes can carry flavors of their own and fade sooner.',
      },
      {
        kind: 'para',
        text: 'Texture and stability are chemical jobs too. Emulsifiers let oil and water coexist: lecithin (from soy or egg yolk), mono- and diglycerides and polysorbates sandwich the two phases so mayonnaise, chocolate and margarine stay smooth instead of separating. Stabilizers and thickeners — gelatin, pectin, guar and xanthan gums, carrageenan — set and hold texture; humectants such as glycerin keep soft candies soft; anti-caking agents like calcium silicate keep salt and powdered sugar flowing. Nutrition additives close the loop: iodized salt, fortified flour with thiamine, niacin and folic acid, vitamin-D milk — the enrichment programs that largely erased deficiency diseases wherever they were adopted. Every class answers the same three purposes the regulators list: maintain safety and freshness, improve or maintain nutritional value, improve taste, texture and appearance.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Name that molecule (class from clue)',
        steps: [
          'Clue: "a mild base taken when the stomach burns." Base = neutralizes acid; the antacid class — aluminium hydroxide, magnesium hydroxide, sodium bicarbonate.',
          'Clue: "blocks the H1 receptor; older members caused drowsiness." Receptor blockade = antagonist action; the antihistamine class (e.g. cetirizine).',
          'Clue: "acetylsalicylic acid; relieves pain, lowers fever, thins blood." The analgesic aspirin — its enzyme block also explains the stomach irritation.',
          'Clue: "donates hydrogen to free radicals, keeps oil from going rancid." Antioxidant preservative — ascorbic acid, tocopherols, BHA/BHT.',
          'Clue: "sweetness without calories; metabolized to phenylalanine." Aspartame — the artificial-sweetener class with the PKU warning.',
          'Recipe: extract the functional clue (base, blocker, radical-scavenger, non-caloric sweet), name the class, then attach one member with its common chemical name. Two facts per class — role and example — is the exam-ready core.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which pair correctly matches an antiseptic distinction?',
            options: [
              'antiseptics are used on living tissue; disinfectants on surfaces',
              'antiseptics kill bacteria only; disinfectants kill viruses only',
              'antiseptics are always synthetic; disinfectants are natural',
              'there is no difference — the words are interchangeable',
            ],
            answer: 0,
            explain: 'The classes share chemistry; the difference is target tissue and concentration — antiseptics are mild enough for skin, disinfectants too harsh.',
          },
          {
            q: 'Aspirin\u2019s stomach irritation follows directly from which mechanism?',
            options: [
              'it neutralizes stomach acid completely',
              'it blocks the enzyme that produces prostaglandins, which also protect the stomach lining',
              'it is a strong base attacking the mucosa',
              'it binds iron in the gut',
            ],
            answer: 1,
            explain: 'Acetylsalicylic acid disables prostaglandin synthesis everywhere; removing prostaglandins helps inflammation but withdraws the stomach\u2019s own protection — one target, two consequences.',
          },
          {
            q: 'Why does aspartame carry a phenylalanine warning on the label?',
            options: [
              'it is itself phenylalanine',
              'it is metabolized in part to phenylalanine, harmful to people with phenylketonuria',
              'it prevents absorption of other amino acids',
              'the warning is a leftover of an old ban',
            ],
            answer: 1,
            explain: 'Aspartame breaks down to phenylalanine, aspartate and methanol; the rare metabolic disorder PKU makes phenylalanine accumulation dangerous.',
          },
          {
            q: 'Carmine, annatto and beta-carotene belong to which group of color additives?',
            options: [
              'certified synthetic dyes (FD&C numbers)',
              'colors exempt from certification — natural sources',
              'flavor enhancers',
              'preservatives',
            ],
            answer: 1,
            explain: 'All three derive from natural sources (cochineal insects, achiote seeds, carrots), placing them in the exempt-from-certification category — unlike FD&C Red 40 or Yellow 5.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Swapping agonist and antagonist — the antagonist occupies the site without switching it on. Treating "antibiotic" as antiviral: antibiotics target bacteria, and using them against viruses breeds resistance. Confusing antiseptic with disinfectant — tissue versus surface. Saying "all additives are synthetic" — caramel, carmine and tocopherols are natural, and certification tracks origin, not safety. Matching aspartame\u2019s warning to sucralose, or saccharin\u2019s age to modern approval history. Assuming "preservative" means antimicrobial only — antioxidants preserve against oxidation, a chemical route to spoilage. And quoting brand names where chemical names are asked: paracetamol, not its packaging.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: acids and bases for the antacid chemistry; enzyme basics for target binding. Follow with the organic-chemistry volumes for structure families, and the food-science track for nutrition and spoilage in depth. Primary reading: LibreTexts, Science of Food (Russel) §10.4 "Other Food Additives — Beneficial or Dangerous" (chem.libretexts.org, CC BY-NC-SA) for the additive table and antioxidant chemistry; LibreTexts, Chemistry and Global Awareness (Shasta College) ch.10 "Pharmaceuticals" for the analgesics; LibreTexts, Pharmacology (Moraine Valley) §1.8 "Drug Classifications" for the therapeutic-classification axes used here.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Drugs classify four ways: effect, action, structure, molecular target; targets are enzymes and receptors.',
        'Agonist switches the receptor on; antagonist occupies it without activating.',
        'Antacids neutralize acid; antihistamines block H1; analgesics (aspirin, paracetamol) kill pain.',
        'Antibiotics poison bacteria selectively; antiseptics treat tissue, disinfectants treat surfaces.',
        'Preservatives: sodium benzoate, nitrite, sorbate; antioxidants BHA/BHT fight rancidity.',
        'Sweeteners: saccharin, aspartame (PKU warning), sucralose; colors: certified FD&C versus exempt natural.',
        'Emulsifiers (lecithin) and stabilizers (pectin, gums) hold texture; fortification restores nutrients.',
      ] },
    ],
  },
  {
    id: 'manuf-welding-joining',
    title: 'Joining Processes: Welding, Brazing and Soldering',
    domain: 'Technology & Applied Science',
    field: 'Manufacturing & Materials',
    branch: 'Joining Processes',
    tier: 'intermediate',
    concepts: [
      'Joining taxonomy: permanent versus temporary',
      'Fusion welding versus pressure welding',
      'Oxy-fuel (gas) welding',
      'Shielded metal arc welding (SMAW)',
      'Gas metal arc welding (GMAW/MIG)',
      'Gas tungsten arc welding (GTAW/TIG)',
      'Resistance spot welding',
      'Shielding: flux and inert gas',
      'Brazing and soldering versus welding',
      'Joint types: butt, lap, tee, corner, edge',
      'Heat-affected zone and weld defects',
      'Weldability and process selection',
    ],
    words: 1499,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Almost every engineered product — a ship, a pipeline, a car body, a circuit board — is an assembly, and the joints are where engineering honesty is tested: a structure fails at its connections long before it fails in its members. Joining processes divide by how they make two solids one. Welding fuses the base metals themselves, melting the parts (with or without added filler) into a single continuous solid — the strongest and most permanent family. Brazing and soldering also bond metal to metal, but with a filler alloy that melts while the parts stay solid. Mechanical fasteners and adhesives complete the taxonomy as removable or bonded non-fusion options. Examiners test the family boundaries and the process logic; practice does the rest.',
      },
      {
        kind: 'para',
        text: 'The core trade-off is heat. Heat is what fuses metal — but heat is also what damages it: it oxidizes the melt, distorts the part and alters the microstructure beside the weld. Every process in this lesson is best read as an answer to one question: where does the heat come from, and how is the hot metal protected from the air?',
      },
      { kind: 'heading', text: 'The fusion-welding families' },
      {
        kind: 'para',
        text: 'Gas (oxy-fuel) welding burns acetylene in oxygen; the flame reaches roughly 3100 \u00b0C and can melt steel directly, with a filler rod supplying the extra metal and the flame\u2019s chemistry providing some shielding. It is portable, cheap and slow — the traditional choice for repair work and thin sections, and the family that also cuts steel when the flame is switched to excess oxygen. Arc welding replaces the flame with an electric arc between an electrode and the work: a plasma at several thousand degrees that melts metal almost on contact.',
      },
      {
        kind: 'para',
        text: 'The arc family separates by electrode and shielding. Shielded metal arc welding (SMAW, stick) uses a consumable flux-coated rod: the coating burns to make a protective gas, forms a slag blanket over the cooling bead, and stabilizes the arc — simple, rugged, everywhere, but slower and stop-start as rods are replaced. Gas metal arc welding (GMAW, MIG) feeds a continuously spooled consumable wire with an inert or active gas (argon mixtures, carbon dioxide) flowing from the nozzle — fast, clean and the workhorse of fabrication shops, since the welder only steers the gun. Gas tungsten arc welding (GTAW, TIG) uses a non-consumable tungsten electrode with argon shielding and a separately fed filler: the slowest and hardest of the three, but also the most precise, which is why aerospace, bicycle frames and pipework demand it. Resistance spot welding works differently again: copper electrodes clamp overlapping sheets and pass thousands of amperes; the interface\u2019s resistance heats a nugget of metal through its melting point in a fraction of a second — no filler, no shielding gas, and seconds per spot, which is exactly why car bodies, with thousands of spots, are built this way.',
      },
      { kind: 'heading', text: 'Brazing, soldering and the joint map' },
      {
        kind: 'para',
        text: 'The non-fusion families keep the base metals solid. Brazing joins with a filler alloy that melts above 450 \u00b0C but below the parts\u2019 melting points — brass or silver-alloy fillers drawn into a close-fitting gap by capillary action; the joint is strong and the parts barely distort, making brazing the choice for frames, tools and heat exchangers. Soldering is the same idea below 450 \u00b0C with tin-based alloys — structurally weak but perfect for electrical joints, where the solder\u2019s job is connection and corrosion protection, not load. The exam line is the temperature boundary plus the melt question: in both processes the parent metal never melts; only the filler does — that single sentence separates the whole family from welding.',
      },
      {
        kind: 'para',
        text: 'Joints are named by how the parts meet: butt (edge to edge), lap (overlapping), tee (perpendicular), corner and edge. Fillet welds serve lap, tee and corner joints with a triangular cross-section; groove welds serve butt joints in thicker sections. Beside geometry sits metallurgy: the fusion zone melted and refroze as cast metal, and around it the heat-affected zone (HAZ) — metal that never melted but was hot enough for its microstructure to change, often the true weak link in high-strength steels. Defects follow from process care: porosity from gas trapped by bad shielding, undercut from too much current, slag inclusion from careless cleaning between passes, cracks from hydrogen or restraint, and distortion from unbalanced shrinkage. Weldability summarizes all of it — plain carbon steels weld easily; high-carbon and alloy steels need preheat and care; cast iron and aluminium test every parameter at once. Safety is part of the craft: the arc emits intense ultraviolet light (arc eye and skin burns), fumes demand ventilation, and hot metal spatters — helmet with the correct shade, gloves, and no flux-core excuses.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Choose the process',
        steps: [
          'Task: joint two sheets of mild steel in a car-body line, thousands of joints per vehicle, seconds per joint. Answer: resistance spot welding — no filler or gas, cycle time in fractions of a second, robotic-friendly; the entire automotive industry is the witness.',
          'Task: an aluminium bicycle frame, visible seams, full penetration, low distortion. Answer: GTAW (TIG) — non-consumable tungsten, argon shielding, separate filler; slowest but cleanest and most controllable.',
          'Task: field repair of a farm implement, no gas bottles, wind, dirt. Answer: SMAW (stick) — flux-coated rods carry their own shielding, kit is portable, wind does not blow away a flux as it can a gas.',
          'Task: connect components on a printed circuit board without heat damage. Answer: soldering — tin alloy below 450 \u00b0C, parent metal never melts, joint designed for connection rather than strength.',
          'Task: join steel frame tubes with minimal distortion and a strong, neat joint. Answer: brazing — silver or brass filler above 450 \u00b0C, parts stay solid, capillary action fills the gap.',
          'Recipe: read the requirements as constraints (speed, precision, portability, heat budget, load), then match them to the process\u2019s signature: filler or none, flux or gas, consumable electrode or not, parent metal melted or not.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'What distinguishes brazing and soldering from welding?',
            options: [
              'they use no filler metal',
              'the base metals never melt — only the filler alloy does',
              'they require an electric arc',
              'they are only for aluminium',
            ],
            answer: 1,
            explain: 'Welding fuses the parent metals themselves; brazing (above 450 \u00b0C) and soldering (below) join with a melted filler while the parts stay solid.',
          },
          {
            q: 'In GTAW (TIG) welding the electrode is:',
            options: [
              'consumable steel wire',
              'non-consumable tungsten with separately fed filler',
              'a carbon rod dipped in flux',
              'the workpiece itself',
            ],
            answer: 1,
            explain: 'TIG\u2019s tungsten electrode only makes the arc under argon shielding; filler, if needed, is fed by hand — the source of the process\u2019s precision.',
          },
          {
            q: 'Why does resistance spot welding dominate car-body assembly?',
            options: [
              'it produces the strongest possible joints of any process',
              'it needs no filler or shielding and completes a spot in a fraction of a second',
              'it welds any metal pair equally well',
              'it leaves no heat-affected zone',
            ],
            answer: 1,
            explain: 'Thousands of amps through clamped overlapping sheets make a weld nugget almost instantly; speed and automation, not ultimate strength, won the automotive line.',
          },
          {
            q: 'The heat-affected zone (HAZ) is:',
            options: [
              'the melted and refrozen weld pool',
              'metal that never melted but whose microstructure changed from welding heat',
              'the flux blanket over the bead',
              'the gap between the parts being joined',
            ],
            answer: 1,
            explain: 'The HAZ sits beside the fusion zone — solid metal whose grain structure heat has altered; in many steels it, not the weld, is where failure starts.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling soldering "weak brazing" — the 450 \u00b0C boundary and the application (electrical versus structural) define the two. Saying MIG and TIG differ only in gas: the electrode does — consumable spooled wire versus non-consumable tungsten. Blaming porosity on the base metal when the cause is shielding: gas plus flux keep the air out of the melt. Forgetting that slag must be chipped between SMAW passes — inclusion defects follow. Assuming a weld is always stronger than the parent metal: the HAZ can be the weakest link, which is why preheat and post-weld heat treatment exist. And treating safety as an afterthought: arc radiation, fumes and spatter are process realities, not optional cautions.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: basic metallurgy (iron-carbon phases, grain structure) and electricity (current, resistance heating). Follow with the materials-failure topics (fatigue, fracture) to see why weld details decide service life, and the metrology topics for inspection of finished joints. Primary reading: Wikibooks, "Welding" (en.wikibooks.org, CC BY-SA) — the fusion-joining definition, the SMAW, oxy-fuel and GTAW process chapters and the safety framing used here.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Joining families: welding (parent metal fuses), brazing/soldering (only filler melts), fasteners and adhesives.',
        'Gas welding burns acetylene in oxygen; arc welding uses an electric plasma arc.',
        'SMAW: flux-coated stick, self-shielding slag; GMAW/MIG: spooled wire plus gas; GTAW/TIG: tungsten electrode, argon, precision.',
        'Resistance spot welding: clamp, thousands of amps, nugget in seconds — the car-body process.',
        'Joints: butt, lap, tee, corner, edge; fillet versus groove welds; the HAZ is the metallurgical weak link.',
        'Defects: porosity, undercut, slag inclusion, cracks, distortion — each traces to a process parameter.',
        'Brazing above 450 \u00b0C, soldering below; neither melts the parent metal.',
      ] },
    ],
  },
  {
    id: 'eng-spelling-rules-patterns',
    title: 'English Spelling: Rules, Patterns and the Words That Break Them',
    domain: 'Languages & World Literature',
    field: 'Academic English Skills',
    branch: 'Orthography and Spelling',
    tier: 'core',
    concepts: [
      'Why English spelling is non-phonetic',
      'i before e except after c — and its exceptions',
      'The doubling rule (one syllable, one vowel, one consonant)',
      'Dropping final e before vowel suffixes',
      'y to i before suffixes',
      'Plural rules: -s, -es after sibilants, -f to -ves',
      'Irregular plurals and invariants',
      'British versus American conventions',
      'Confusables and memory strategies',
      'Spotting misspellings under exam time',
    ],
    words: 1283,
    readMins: 6,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'English spelling looks like chaos because it records three things at once: sound, history and meaning. Six centuries of sound change, borrowed vocabulary from Latin, French and Greek, and a printing-press freeze have left a writing system in which the same sound — the "sh" of ship — can be spelled a dozen ways, and the same letters read differently in tough, though, through and thought. Yet the system is far more rule-governed than it feels: a small set of patterns covers the overwhelming majority of words, and the celebrated exceptions cluster in a few high-frequency families that can simply be learned. For error-spotting papers the strategy is exactly this: apply the rules first, then check the known-exception lists, then trust the ear for what remains.',
      },
      {
        kind: 'para',
        text: 'A useful mindset shift: spellers do not memorize words so much as memorize rules plus a short exception ledger. Every rule below earns marks by itself, and each has a known quota of rebels — learn the rebels by name and the language stops feeling arbitrary.',
      },
      { kind: 'heading', text: 'The vowel-pattern rules' },
      {
        kind: 'para',
        text: 'The famous rule runs: write i before e, except after c, or when it sounds like "ay" as in neighbour and weigh. It delivers believe, relieve, field, chief and — after c — receive, ceiling, deceive; the "ay" clause handles eight, weigh, vein. But the rule\u2019s honest form includes its rebels: seize, weird, protein, science, ancient, conscience and leisure all break it, and error-spotting papers know it. Treat i/e order as a default with a named exception list, not a law.',
      },
      {
        kind: 'para',
        text: 'Two suffix rules do heavier lifting than any other. The doubling rule: a one-syllable word ending consonant-vowel-consonant doubles its final consonant before a vowel suffix — run becomes running, stop becomes stopped, big becomes biggest — and the same pattern governs stressed final syllables in longer words (begin → beginning, but open → opening, unstressed). The drop-e rule: a silent final e disappears before a vowel suffix — make → making, hope → hoped — but survives before consonant suffixes — hope → hopeful, like → likeness. Finally, y converts to i before most suffixes when a consonant precedes it (country → countries, happy → happiness) but stays when a vowel precedes it (play → played, journey → journeys). These three rules generate correct spellings for thousands of words without any memorization at all.',
      },
      { kind: 'heading', text: 'Plurals, confusables and the two standards' },
      {
        kind: 'para',
        text: 'The plural system is a rule set. Regular nouns add -s. Nouns ending in -s, -sh, -ch, -x or -z add -es (buses, wishes, boxes, quizzes) because English refuses the unpronounceable consonant pile-up. Some -f and -fe nouns switch to -ves (knife → knives, life → lives, shelf → shelves) while others stay regular (roofs, chiefs, proofs) — a learned split. Consonant-plus-y goes to -ies (baby → babies); vowel-plus-y just adds -s (boys, keys). A tail of -o words splits between -os (photos, pianos, radios) and -oes (heroes, potatoes, tomatoes) by usage. And a hard core of irregulars must simply be known: man → men, woman → women, child → children, foot → feet, tooth → teeth, mouse → mice, person → people — with invariants like sheep, series, aircraft and deer taking no change at all.',
      },
      {
        kind: 'para',
        text: 'Two further layers complete the pattern map. British and American standards differ in predictable places: -our versus -or (colour/color), -re versus -er (centre/center), -ise versus -ize (organise/organize, with -ize acceptable in both but -ise exclusively British), and doubled l before suffixes in British travel → travelling against American traveling. Within one answer script, pick a standard and hold it. The confusables — the words misspelt precisely because they are common — follow their own logic: separate hides "part" in its middle; definitely is finite at its core; accommodation is doubly roomy (double c, double m); embarrass double-r double-s; maintenance has the -ance ending; occasion two c\u2019s one s; necessary one c two s\u2019s with the collar-and-sleeves memory (one c like a collar, two s like sleeves). Exam technique fuses everything: read the word aloud — mispronunciation drives most misspelling; isolate the suffix and check the three suffix rules; check the ending against the -es/-ies plural set; and when all rules pass, consult the exception ledger, where seive lies in wait for the overconfident.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Correct or incriminate',
        steps: [
          '"reciept": i before e fails after c — the c demands "ei": receipt. (And note the silent p, from Latin receptum.)',
          '"runing": one syllable, consonant-vowel-consonant, vowel suffix — the doubling rule fires: running.',
          '"hopeful" versus "hoping": e survives before the consonant suffix -ful, drops before the vowel suffix -ing. Both spellings in one word-pair — the drop-e rule decides each.',
          '"citys": consonant-plus-y goes to -ies — cities. "monkeys": vowel-plus-y just adds -s.',
          '"roofes": the -f nouns that stay regular take plain -s — roofs (alongside chiefs, proofs); only the learned -ves set (knives, wolves, shelves) switches.',
          '"accomodation": count the rooms — double c, double m, accommodation. The confusables ledger settles what no rule reaches.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which word is spelled correctly?',
            options: ['weird', 'wierd', 'wierde', 'weired'],
            answer: 0,
            explain: 'Weird is the classic rebel against i-before-e — the e comes first despite no preceding c; it lives on the exception ledger.',
          },
          {
            q: 'A one-syllable word ending consonant-vowel-consonant takes a vowel suffix. What happens?',
            options: [
              'the final consonant doubles: stop → stopped',
              'a final e appears: stope',
              'the vowel changes: staop',
              'nothing: stoped is correct',
            ],
            answer: 0,
            explain: 'The doubling rule (one syllable, one vowel, final consonant) doubles the consonant before vowel suffixes — running, stopped, biggest.',
          },
          {
            q: 'Which pair follows the y-to-i rule correctly?',
            options: [
              'citys / journeys',
              'cities / journeys',
              'citys / journeyes',
              'cities / journeyies',
            ],
            answer: 1,
            explain: 'Consonant + y → -ies (cities); vowel + y keeps the y and adds plain -s (journeys).',
          },
          {
            q: 'In British spelling, which convention holds?',
            options: [
              'traveling with one l',
              'colour spelled color',
              'organise with -ise, centre with -re',
              'program always spelled programme in every sense',
            ],
            answer: 2,
            explain: 'British English doubles the l (travelling), keeps -our (colour), prefers -ise and -re; American English standardizes or/er/ize.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Applying i-before-e without the exception ledger — seize, weird, leisure, science, ancient break it. Doubling where the word is unstressed or already two syllables deep (opening never becomes openning; visited has no double t). Dropping e before consonant suffixes (hopeful, not hopful) or keeping it before vowel ones (hoping, not hopeing). Writing -s where a sibilant demands -es (bushes, boxes, churches) or -ves where the f-family stays regular (roofs, chiefs). Mixing standards mid-script — organise beside color in one sentence reads as an error even if each is "a" spelling. And trusting the ear alone: English spelling records history as much as sound, which is why pronunciation habits (say "separate" with its hidden a\u2019s) work better than guessing.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. Pair with the punctuation-and-mechanics lesson for the other half of surface accuracy, and with the vocabulary topics for morphology — prefixes and suffixes explain many spellings (definite from finite). Primary reading: How to Spell (J. Pattison), "7 Plural Spelling Rules" (howtospell.co.uk) for the plural rule set used here, and Wikipedia, "English orthography" for the sound-spelling mismatch and the deep patterns behind doubling and y-to-i.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'English spelling records sound, history and meaning — rules cover most words; exceptions have names.',
        'i before e except after c or when it sounds "ay" — with rebels: seize, weird, leisure, science.',
        'Doubling rule: 1 syllable + 1 vowel + final consonant doubles before vowel suffixes.',
        'Drop e before vowel suffixes (making), keep it before consonant ones (hopeful).',
        'Consonant + y → -ies; vowel + y adds -s; sibilants take -es; some f-nouns go -ves, others stay -s.',
        'Irregulars: men, women, children, feet, teeth, mice, people; invariants: sheep, series, aircraft.',
        'British -our/-re/-ise/-ll versus American -or/-er/-ize/-l; pick one standard and hold it.',
      ] },
    ],
  },
  {
    id: 'hist-twentieth-century',
    title: 'The Twentieth Century: Revolution, Cold War Order and Globalisation',
    domain: 'Humanities',
    field: 'World History',
    branch: 'The Modern Age',
    tier: 'intermediate',
    concepts: [
      'The century as a unit: acceleration and total war',
      'World War I aftermath and the Russian Revolution',
      'Interwar crises and the Great Depression',
      'World War II and the bipolar settlement',
      'Yalta, the iron curtain and containment',
      'Truman Doctrine, Marshall Plan and the division of Germany',
      'NATO and the Warsaw Pact',
      'Proxy wars: Korea and Vietnam',
      'The arms race and mutually assured destruction',
      'Decolonization and the Non-Aligned Movement',
      'Détente and peaceful coexistence',
      '1989-1991 and the end of the Cold War',
      'Multipolarisation and economic globalisation',
    ],
    words: 1778,
    readMins: 9,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'No century compressed change so violently as the twentieth. It opened with empires, steam and telegraph; it closed with the internet, a global trading system and more sovereign states than it began with. The wars are the century\u2019s punctuation — two world conflicts that mobilized whole societies, killed in the tens of millions and broke the European order twice — but the deeper story runs between them: revolution in Russia founding the first state built on Marxist ideology; an interwar decade of depression that discredited capitalism\u2019s laissez-faire form; and after 1945 a forty-five-year standoff that organized the entire planet into two camps. This lesson treats the century as one connected arc — the syllabus\u2019s own list: world wars, Russian Revolution, interwar crises, Cold War order, multipolarisation, globalisation — with the military course of the wars carried by the world-wars lesson and China\u2019s internal story by the modern-China lesson.',
      },
      {
        kind: 'para',
        text: 'The examination framing rewards structure over anecdote. One arc: bipolarity replaced multipolarity, then itself dissolved into an American moment that never quite became unipolar. One engine: ideology — liberal capitalism against communism — drove alliances, proxy wars and the division of Germany, Korea and Vietnam alike. One close: when the Soviet system lost economic legitimacy, the whole architecture came down in three years. Hold those threads and every date has a place to live.',
      },
      { kind: 'heading', text: 'Revolution and interwar crisis, 1917-1939' },
      {
        kind: 'para',
        text: 'The First World War destroyed four empires — Russian, German, Austro-Hungarian and Ottoman — and bred the century\u2019s first systemic alternative. Russia\u2019s 1917 February Revolution toppled the Tsar; the October Revolution brought the Bolsheviks to power, and after a civil war the Soviet Union emerged in 1922 as a state openly organized against the capitalist order. The peace itself stored future crises: the Treaty of Versailles attached war guilt and reparations to a Weimar Germany too weak to carry them, and the new map of Europe stranded minorities inside new borders.',
      },
      {
        kind: 'para',
        text: 'The interwar years turned economic failure into political poison. The Wall Street crash of 1929 cascaded into the Great Depression: world trade collapsed, unemployment reached a third of the workforce in some economies, and the democratic center gave ground everywhere — to the New Deal\u2019s managed capitalism in America, to authoritarian and fascist solutions in Germany, Italy, Spain and Japan. The league-system\u2019s failure to restrain Japan in Manchuria, Italy in Abyssinia or Germany in the Rhineland taught aggressors that the costs of expansion were bearable. The decade\u2019s lesson, absorbed by every postwar planner afterwards: economic collapse is a security problem, and unemployment can be as destabilizing as any army.',
      },
      { kind: 'heading', text: 'The Cold War order, 1945-1991' },
      {
        kind: 'para',
        text: 'The Second World War ended with one alliance and two worlds. At Yalta in February 1945 Stalin, Roosevelt and Churchill divided the postwar settlement in advance: Soviet occupation of Eastern Europe traded against Stalin\u2019s entry into the war against Japan. By 1946 Churchill could describe an iron curtain running through Europe, and the United States answered with the doctrine that named the era: containment — meeting Soviet expansion wherever it appeared outside the already-communist bloc. Its first test was Greece\u2019s civil war, won by the monarchy with British and American backing by 1947; its economic arm was the Marshall Plan of 1948, some fifteen billion dollars rebuilding Western Europe — part relief, part insurance against socialist drift, part market-opening.',
      },
      {
        kind: 'para',
        text: 'Germany became the stand\u2019s emblem: four occupation sectors hardened into a federal West Germany (the BRD, founded October 1949) against a one-party communist East (the DDR), with divided Berlin an island inside the Soviet zone until the Wall answered the bleeding in 1961. Alliances froze the map: NATO in April 1949 bound the United States and Canada to Western Europe; the Warsaw Pact answered it in 1955 under Khrushchev\u2019s "peaceful coexistence" — a thaw that still sent tanks into Budapest when Hungary\u2019s 1956 reforms threatened the bloc. The nuclear monopoly broke in 1949 with the Soviet atomic bomb, and the race that followed built missiles, bombers and submarines into a doctrine of mutual assured destruction: security through the certainty of retaliation, which is precisely why the cold war stayed cold.',
      },
      {
        kind: 'para',
        text: 'The periphery burned instead. Korea, divided at the thirty-eighth parallel, was invaded from the north in June 1950; the U.N. counter-offensive reached the Chinese border and China\u2019s intervention pushed the war back to a stalemate that killed nearly three million Koreans before an armistice — never a peace treaty — froze it where it began. Vietnam ran longer: after France\u2019s defeat at Dien Bien Phu in 1954, the American commitment grew from advisers through the 1965 escalation into a war of half a million troops, withdrawn in 1973 at the cost of 58,000 American and more than a million Vietnamese lives, with unification under Hanoi following in 1975. Both conflicts show the era\u2019s logic: the superpowers never fought each other directly, but fought through proxies to hold the perimeter of their blocs.',
      },
      { kind: 'heading', text: 'Decolonization, 1989 and the globalised close' },
      {
        kind: 'para',
        text: 'While the blocs confronted each other, the colonial world was exiting history\u2019s stage. The war had exhausted Britain, France and the Netherlands; independence movements — armed as in Algeria and Vietnam, negotiated as in India and much of Africa — redrew the political map so that by the 1960s dozens of new states sat in the U.N. General Assembly. Many refused both camps: the Non-Aligned Movement, with Yugoslavia\u2019s Tito among its architects, claimed a third path, and the superpowers competed for the new nations\u2019 alignment with aid and arms in equal measure. Decolonization and the Cold War are one story, not two: each new state became a board on which the bipolar game could be played.',
      },
      {
        kind: 'para',
        text: 'The end came with startling speed. Gorbachev\u2019s reforms — perestroika restructuring the economy, glasnost opening speech — were meant to save the Soviet system and instead removed its fear; the Eastern European satellites dissolved their regimes through 1989, the Berlin Wall fell that November, and the Soviet Union itself broke apart in 1991, its nuclear arsenal scattered among successor states (Kazakhstan\u2019s was the largest inherited stock after Russia\u2019s, and became the first any nation voluntarily surrendered). What followed was not a stable American century but a re-multipolarising world: a unified Europe, a rising China, regional powers and a trading system binding them all — globalisation as the century\u2019s final architecture, with supply chains and capital flows doing what armies once had. The century\u2019s exam-ready summary: total war broke the old order; ideology split the new one; economics outlasted them both.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Explain a turning point in one paragraph',
        steps: [
          'Question: why did the wartime alliance collapse by 1949?',
          'Step 1 — interests: the alliance was always against Hitler, not for a shared postwar vision; with Germany defeated, the ideological gap (liberal capitalism versus communism) had no enemy left to suppress it.',
          'Step 2 — facts: Yalta\u2019s occupation zones hardened; Churchill named the iron curtain in 1946; the Truman Doctrine (1947) committed the U.S. to containment; the Marshall Plan (1948) rebuilt the West; the Berlin crisis and the 1949 founding of NATO and the two Germanies institutionalized the split; the Soviet bomb (1949) completed the symmetry.',
          'Step 3 — consequence: Europe left the era of balance-of-power alliances for fixed bipolar blocs, and competition moved to the periphery — Korea within a year.',
          'Recipe: turning-point answers have three moves — the underlying interests, the dated facts, the structural consequence. Dates without structure read as a list; structure without dates reads as opinion.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The Truman Doctrine of 1947 established which policy?',
            options: [
              'massive nuclear retaliation against the USSR',
              'containing communist expansion outside the already-communist bloc',
              'reunifying Germany under free elections',
              'joint administration of colonial empires',
            ],
            answer: 1,
            explain: 'Containment — first tested in Greece\u2019s civil war — committed the United States to blocking further Soviet expansion, and it organized four decades of American strategy.',
          },
          {
            q: 'The Marshall Plan is best described as:',
            options: [
              'a military alliance against the Warsaw Pact',
              'about fifteen billion dollars of U.S. aid rebuilding Western Europe after 1948',
              'the division of Berlin into four sectors',
              'the U.N. armistice framework in Korea',
            ],
            answer: 1,
            explain: 'The Marshall Plan\u2019s money rebuilt Western economies — relief, insurance against socialist drift, and market-opening in one program.',
          },
          {
            q: 'Why did the Cold War stay "cold" between the superpowers?',
            options: [
              'both economies were too weak for war',
              'mutually assured destruction made direct war suicidal',
              'the United Nations outlawed superpower war',
              'proxy wars satisfied all territorial aims',
            ],
            answer: 1,
            explain: 'After 1949 both sides held nuclear arsenals deliverable by missile, bomber and submarine; retaliation was certain, so competition moved to proxies and peripheries.',
          },
          {
            q: 'Which sequence best fits the Cold War\u2019s end?',
            options: [
              'Soviet atomic bomb → Berlin Wall → perestroika',
              'Gorbachev\u2019s reforms → Eastern European regimes dissolve (1989) → Wall falls → USSR dissolves (1991)',
              'Hungary 1956 → détente → Marshall Plan',
              'Vietnam unification → Gorbachev → Korean armistice',
            ],
            answer: 1,
            explain: 'Perestroika and glasnost loosened the system, the satellites left in 1989, the Wall fell that November, and the Union itself dissolved in 1991.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Treating the world wars as separate events rather than one European-order breakdown in two acts — the Versailles settlement is the hinge. Calling the Russian Revolution a single event: February toppled the Tsar, October brought the Bolsheviks, the civil war made the state. Reversing the founding sequence: containment and the Truman Doctrine (1947) precede the Marshall Plan (1948), which precedes NATO (1949). Saying the Cold War was fought in Europe — Europe was the standoff; the fighting was peripheral (Korea, Vietnam, Afghanistan, Africa). Conflating peaceful coexistence (Khrushchev, 1950s) with the end of the Cold War (Gorbachev, 1980s) — a thirty-year gap. And forgetting decolonization\u2019s agency: new nations were not merely Cold War prizes; they organized a movement of their own.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the world-wars lesson (the military course of 1914-18 and 1939-45) and the nineteenth-century imperialism background. Follow with the modern-China lesson for the largest single-country story inside this arc, and the contemporary-world-order topics for the post-1991 system. Primary reading: LibreTexts, Modern World History (Alloso and Williford) §1.12 "Cold War" and §1.11 "Decolonization" (human.libretexts.org, CC BY-NC-SA) — Yalta, iron curtain, containment, the Marshall Plan, the 1949 German settlement, NATO, Korea, Vietnam, MAD, peaceful coexistence and the Non-Aligned framing used here.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'One arc: multipolar empires → bipolar blocs → re-multipolarising globalisation.',
        '1917: February ends the Tsar, October brings the Bolsheviks; Versailles stores the interwar grievance.',
        '1929-33: the Depression discredits laissez-faire and feeds authoritarianism.',
        '1947-49: Truman Doctrine, Marshall Plan, two Germanies, NATO, Soviet bomb — the bipolar map fixed.',
        'Korea (1950-53) and Vietnam (to 1975): proxy wars on the bloc perimeters; MAD keeps the centers cold.',
        'Decolonization and the Non-Aligned Movement add a third world between the camps.',
        '1989-91: perestroika and glasnost, the Wall falls, the USSR dissolves; globalisation becomes the new order.',
      ] },
    ],
  },
]
