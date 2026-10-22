import type { KnowledgeTopic } from '../types'

/** Expansion pass X25 (2026-10-23): the applied-skills & institutions sweep.
 *  After the X17–X24 passes drove the exam-coverage audit to 99%
 *  (2260/2286), 26 syllabus topics remained unmapped. Each candidate below
 *  was cross-checked against coverage/coverage.json (4,451 sections across
 *  197 subjects), the 433-topic knowledge index and the dedup ledger before
 *  authoring — and against the masters volumes, which already own the
 *  abstract theory (Rosen owns graph theory; Stewart owns calculus), so
 *  nothing here re-teaches what a masters section already teaches:
 *  1. math-games-tournaments-tactics — fixture arithmetic for knockout and
 *     round-robin formats, points tables and team-selection counting. Zero
 *     overlap: no "tournament"/"fixture"/"knockout"/"round-robin" section
 *     exists anywhere in coverage.json (verified grep). Rosen ch 10 owns
 *     abstract graph theory (Euler/Hamilton/trees) and states the
 *     complete-graph edge count as a terminology fact; this lesson owns the
 *     applied schedule arithmetic built on it. Closes cat "Games and
 *     Tournaments" + "Team Selection and Distribution".
 *  2. math-formulating-real-life-problems — the translation skill that turns
 *     a word problem into an equation before any solving begins. Zero
 *     overlap: the masters algebra chapters teach solving procedures
 *     ("Linear Equations in One Variable", "Systems of Two Linear
 *     Equations"); coverage.json has no "word problem"/"formulation"
 *     section (verified grep). Closes bitsat "Formulation" + "Formulation
 *     of Real-Life Problems".
 *  3. reason-coded-inequalities — decoding symbol-substituted order
 *     statements into valid conclusions. Zero overlap: every "inequality"
 *     section in coverage.json is mathematical inequality-solving; no
 *     lesson teaches coded order-reasoning. The transitivity core cites
 *     discrete-math order relations; the coded format is new here. Closes
 *     ibps-po "Inequality".
 *  4. civ-india-defence-organisation — the constitutional command frame,
 *     the five defence departments, the CDS/DMA/IDS reform layer, the
 *     service commands and the production-research ecosystem. Zero overlap:
 *     the only defence-flavoured section in coverage.json ("Defence &
 *     Security: Defence-Research Missions, Labs & Products") owns missions,
 *     labs and products — not organisation (verified: no "command"/"CDS"/
 *     "armed forces organisation" section). Closes cds "Indian Armed Forces
 *     and Defence Organisation".
 *  Sources read while writing (legally open):
 *  - OpenStax, Contemporary Mathematics, section 12.2 "Graph Structures",
 *    openstax.org (CC BY) — complete-graph definition, degree n-1, edge
 *    count 1+2+...+(n-1) = n(n-1)/2, and the n-strangers meeting example;
 *    section 7.3 "Combinations" — C(n,k) = n!/(k!(n-k)!) for selections.
 *  - OpenStax, Elementary Algebra 2e, section 3.1 "Use a Problem-Solving
 *    Strategy", openstax.org (CC BY) — the read-identify-name-translate-
 *    solve-check-answer strategy and the consecutive-integers worked
 *    example; section 3.3 "Solve Mixture Applications" — concentration ×
 *    volume framing.
 *  - SATHEE (IIT Kanpur, Ministry of Education initiative),
 *    "Inequality (Coded Inequalities) — Theory & Concepts",
 *    sathee.iitk.ac.in — symbol-decoding method, transitive chains, the
 *    direction-reversal rule, ≥ handling and the either-or complementary
 *    pairs.
 *  - H. Kwong, A Spiral Workbook for Discrete Mathematics, section 7.4
 *    "Partial and Total Ordering", math.libretexts.org (CC BY-NC-SA) —
 *    reflexive/antisymmetric/transitive properties underlying chains.
 *  - Government of India open sources: dmamod.gov.in (Department of
 *    Military Affairs — created December 2019 with the CDS post),
 *    static.pib.gov.in CDS background note (first CDS appointed 31 Dec
 *    2019), IDSA Journal of Defence Studies 13.3 "HQ Integrated Defence
 *    Staff in the National Security Structure" (idsa.in — HQ IDS raised
 *    after the 1999 Kargil conflict), and the Indian Armed Forces
 *    reference summary (en.wikipedia.org/wiki/Indian_Armed_Forces) —
 *    five MoD departments, service command lists (Army 6 operational + 1
 *    training; Navy 3; Air Force 5 operational + training + maintenance),
 *    ~1.43 million active personnel, supreme command vested in the
 *    President. */

export const x25TournamentReasoningCivicsPassTopics: KnowledgeTopic[] = [
  {
    id: 'math-games-tournaments-tactics',
    title: 'Tournament Formats and Fixture Arithmetic: Knockouts, Round-Robins and Points Tables',
    domain: 'Mathematics',
    field: 'Discrete Mathematics',
    branch: 'Tournaments & Fixtures',
    tier: 'core',
    concepts: [
      'Knockout brackets and the n−1 match count',
      'Byes and bracket sizes as powers of two',
      'Round-robin as the complete graph K\u2099',
      'The n(n−1)/2 fixture count and degree n−1',
      'Double round-robins and home-and-away fixtures',
      'Points tables and the total-wins invariant',
      'Team selection and distribution counting',
    ],
    words: 1955,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Every sports calendar is a counting argument wearing a jersey. A knockout cup, a league season and a qualifying play-off each fix, in advance, exactly how many matches must be played, how many games each team endures and how many results the points table must absorb — so a surprising share of fixture questions asks you to produce those numbers by reasoning rather than by listing. This lesson builds the three standard formats from first principles, then adds the two counting tools that tournament data questions lean on hardest: bracket sizing with byes, and selection-and-distribution counting for squads and groups. Nothing here needs formula memory: each formula is one sentence of logic you can re-derive at the desk.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Fixture arithmetic rewards derivation over memorisation because the formulas are tiny proofs. Why does a knockout with n entries stage exactly n−1 matches? Because every match eliminates exactly one team, and you must eliminate n−1 teams to leave one champion. Why does a round-robin of n teams need n(n−1)/2 matches? Because each match pairs two teams, and pairing every pair once is precisely the complete graph K\u2099 — the textbook edge count from graph theory. Learn the one-line reasons and you can answer twisted framings (two-legged ties, withdrawn teams, minimum matches to decide a place) without new machinery, and without confusing the two formats that superficially look alike.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Knockout (single elimination)', def: 'A format in which each match eliminates the loser. From n entries the champion emerges after exactly n−1 matches, because n−1 teams must be eliminated and each match removes exactly one.' },
          { term: 'Bye', def: 'An exemption from the first round granted when the number of entries is not a power of two. The bracket is padded up to the next power of two, 2\u1D4F, and the number of byes is 2\u1D4F − n; byes are not matches and their recipients enter the second round directly.' },
          { term: 'Round-robin (league)', def: 'A format in which every pair of teams meets once. This is the complete graph K\u2099: n vertices, each of degree n−1, so each team plays n−1 matches and the total is n(n−1)/2 — the number of edges of K\u2099.' },
          { term: 'Double round-robin', def: 'The two-legged league: every pair meets twice, once at each venue. The fixture count doubles to n(n−1) and each team plays 2(n−1) matches. A k-way round-robin (k meetings per pair) multiplies the base count by k.' },
          { term: 'Points table invariants', def: 'In any league, the sum of all teams’ wins equals the number of matches played (each match produces exactly one win, or two draws count two draw-points). These conservation facts let you validate or finish a half-filled table without being told every result.' },
          { term: 'Selection counting', def: 'Choosing k players from n when order does not matter: C(n,k) = n!/(k!(n−k)!). With constraints (“at least one”, “exactly two”), count the complement or split by cases. Distribution splits a squad into groups: C(n,a) then C(n−a,b), dividing by the number of ways to permute identically-sized unlabeled groups.' },
        ],
      },
      {
        kind: 'para',
        text: 'The knockout is elimination made arithmetic. Suppose n teams enter and the format is win-or-go-home. After the first round some teams are gone; after each subsequent round more are gone; the format ends when exactly one team remains with no loss. Count eliminations instead of matches: to shrink n teams to 1 you must eliminate n−1 teams, and each match eliminates exactly one team, so exactly n−1 matches are played — no matter how the draw is arranged, how many rounds it takes or whether byes appear. The same logic runs in reverse for two-legged knockouts: if every tie is a pair of matches, the tie count is still n/2 per round summed over rounds, but the match count is 2(n−1). And if a third-place play-off is added, one extra match appears for one extra (non-elimination) purpose — the only structural reason a knockout can exceed n−1 matches.',
      },
      {
        kind: 'para',
        text: 'Byes exist because a knockout bracket wants a power-of-two field. A bracket rounds cleanly only when n is 2, 4, 8, 16 …: every round halves the field with no one idle. When n is not a power of two, organisers pad the field up to the next power of two, 2\u1D4F, and grant 2\u1D4F − n teams a bye into round two. A 37-team cup needs a 64 bracket with 27 byes; a 100-player event needs a 128 bracket with 28 byes. Three follow-on facts are worth deriving once: the number of rounds is k (the exponent, since each round halves the bracket); the number of first-round matches is n − (2\u1D4F − n) = 2n − 2\u1D4F; and total matches stay n−1 regardless, because byes eliminate nobody. Seeding — arranging the draw so strong entries cannot meet early — changes pairings, never counts.',
      },
      {
        kind: 'para',
        text: 'The round-robin is the complete graph in sportswear. Put n teams on paper and draw a line for each pair that must meet: every vertex is adjacent to every other, which is exactly the textbook complete graph K\u2099 — each vertex has degree n−1, and the edges total 1 + 2 + … + (n−1) = n(n−1)/2. Translated: each team plays n−1 matches and the league stages n(n−1)/2 matches in total. Ten teams make a 45-match league where each team plays 9; add home-and-away legs and both figures double to 90 and 18. The same pair-counting powers other questions: how many handshakes among n people, how many games a chess club round-robin needs, how many diagonals a fixture matrix can hold. One caution keeps the formula honest: n(n−1)/2 counts pairs meeting once — multiply by the number of meetings, never by n.',
      },
      {
        kind: 'para',
        text: 'Points tables reward conservation bookkeeping. A table row (played, won, drawn, lost, points) hides two invariants. First, total wins across all rows equals total matches played, because every match yields exactly one win (in no-draw sports), and total played counts each match twice — once per team — so the sum of the Played column is twice the number of matches. Second, under the 3-1-0 football convention, points = 3·wins + 1·draws, and under the 2-1-0 convention used in several sports, points = 2·wins + 1·draws; either way a half-filled table can be completed or audited by subtraction: lost = played − won − drawn. Data questions exploit this: given three rows and the match total, the fourth row is forced. Tie-breakers (head-to-head, goal difference, net run rate) decide order within equal points — they change who finishes above whom, not how many matches were played.',
      },
      {
        kind: 'para',
        text: 'Selection and distribution close the counting toolkit. Squad questions ask how many ways k players can be chosen from n: the combination count C(n,k) = n!/(k!(n−k)!), with the complement trick C(n,k) = C(n,n−k) and the case split for “at least one” (all selections minus the none-selection). Distribution questions then divide a squad into groups. For labeled teams of fixed sizes a and b the count is C(n,a)·C(n−a,b); for unlabeled groups of equal sizes, divide by the factorial of the number of groups, because swapping identical groups is not a new arrangement. Fixture questions reuse the same tool vertically: “in how many orders can four teams finish?” is a permutation 4! = 24, while “how many two-team matches” is a combination C(n,2) — the round-robin count again. Keeping selection (order-free) and arrangement (order-bound) separate is the entire game.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Schedule a Mixed Programme from Scratch',
        steps: [
          'Read the format: 37 teams enter a cup (knockout); separately, a 10-team school league follows (round-robin, home-and-away); answer three asks — cup matches, byes, league fixtures.',
          'Cup matches: eliminations govern. n−1 = 36 matches decide the champion, regardless of the draw.',
          'Byes: next power of two above 37 is 64 = 2\u2076. Byes = 64 − 37 = 27; first-round matches = 2·37 − 64 = 10; rounds = 6.',
          'League fixtures: every pair meets twice. Base count n(n−1)/2 = 45 one-leg matches, doubled for two legs: 90 fixtures; each team plays 2(n−1) = 18 matches.',
          'Cross-check by invariants: league Played column must total 180 (each of 90 fixtures counted twice); cup rounds halve the field 64 → 32 → 16 → 8 → 4 → 2 → 1, and 32+16+8+4+2+1 = 63 matches on the padded bracket = 36 real + 27 byes absorbed as empty slots.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A knockout cup starts with 57 teams and no third-place play-off. How many matches decide the champion?',
          options: ['57', '56', '64', '29'],
          answer: 1,
          explain: 'Each match eliminates exactly one team and 56 teams must be eliminated to leave one champion, so the total is n−1 = 56 — the draw shape cannot change this.',
        },
        {
          q: 'A 25-team knockout is drawn on a full bracket. How many teams receive first-round byes?',
          options: ['7', '6', '9', '5'],
          answer: 0,
          explain: 'The next power of two above 25 is 32, so byes = 32 − 25 = 7. Byes are empty slots, not matches, so the match total stays 24.',
        },
        {
          q: 'A state league has 12 clubs and every club meets every other twice, home and away. The total number of fixtures is…',
          options: ['66', '132', '72', '144'],
          answer: 1,
          explain: 'One meeting per pair is C(12,2) = 12·11/2 = 66; two legs double it to 132. Each club plays 22 matches.',
        },
        {
          q: 'In a completed 8-team league (no draws possible), the total number of wins recorded across the whole table must equal…',
          options: ['8', '28', '56', 'it cannot be fixed in advance'],
          answer: 1,
          explain: 'Every one of the C(8,2) = 28 matches produces exactly one win, so the Wins column sums to 28 — the invariant that lets you audit or complete a table.',
        },
        {
          q: 'From a 15-member squad, a coach must pick a labelled pair of teams — a playing XI (11 players) and a stand-by trio (3 players). The number of ways is…',
          options: ['C(15,11) × C(4,3)', 'C(15,11) × C(15,3)', 'C(15,11) + C(11,3)', 'C(15,14) × 2'],
          answer: 0,
          explain: 'Choose the XI first: C(15,11). From the 4 remaining, choose the stand-by trio: C(4,3). Multiplying sequential choices gives C(15,11)·C(4,3).',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Counting n matches in a knockout — the champion is not eliminated, so the count is n−1. Using n² for a round-robin — that double-counts every pair; pairs meeting once give n(n−1)/2, and only the number of meetings multiplies. Treating byes as matches: byes are absent teams, so neither the n−1 total nor the elimination count moves. Swapping selection and arrangement: choosing a squad is C(n,k), but ordering a batting line-up is a permutation — check whether order matters before computing. And auditing a points table by feel instead of invariants: Played sums to twice the match count, Wins sum to the match count, and Lost = Played − Won − Drawn row by row — any table that violates these is impossible, whatever the question implies.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: comfort with multiplication and factorials; no graph theory needed beyond the one complete-graph fact derived here. Follow with the DI chart-reading lesson for tables and combined-source questions, and the combinations material in the counting chapters for constraint selections. Primary reading: OpenStax, Contemporary Mathematics, section 12.2 “Graph Structures” (complete graphs, degree n−1, edge count n(n−1)/2) and section 7.3 “Combinations” (C(n,k) = n!/(k!(n−k)!), selection word problems) — openstax.org, CC BY.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Knockout: each match eliminates one team, so n entries need exactly n−1 matches (plus one play-off match if a third place is awarded).',
        'Byes pad the bracket to the next power of two: byes = 2\u1D4F − n, first-round matches = 2n − 2\u1D4F, rounds = k.',
        'Round-robin = complete graph K\u2099: each team plays n−1, total fixtures n(n−1)/2; a two-legged league doubles both.',
        'Points tables obey conservation: Wins sum to the match count; Played sums to twice it; row-wise Lost = Played − Won − Drawn.',
        'Selections without order: C(n,k) = n!/(k!(n−k)!); constraint questions fall to complements and case splits.',
        'Distributions: multiply sequential choices for labeled groups, divide by group-count factorial for unlabeled equal groups.',
      ] },
    ],
  },
  {
    id: 'math-formulating-real-life-problems',
    title: 'From Words to Equations: Formulating Real-Life Problems',
    domain: 'Mathematics',
    field: 'Everyday Math & Numeracy',
    branch: 'Problem Formulation',
    tier: 'core',
    concepts: [
      'The read–identify–name–translate–solve–check strategy',
      'Choosing and defining the variable',
      'Translation vocabulary: totals, comparisons, consecutive',
      'Age, money and ticket problem setups',
      'Mixture and concentration formulations',
      'Systems from two conditions',
      'Formulating inequalities and quadratics',
    ],
    words: 1901,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'A word problem is a story with a locked door; formulation is the act of finding the lock. Most students lose marks not while solving an equation but before one exists — because the sentence “the sum of two consecutive integers is 47” never became n + (n + 1) = 47 on the page. This lesson drills that first move as a skill of its own: reading a situation, naming the unknown, and translating English into algebra with a small, reliable vocabulary of turns of phrase. The solving techniques themselves live in the algebra chapters; here the equation is the finish line, and checking that the finished model honestly encodes the story is part of the job.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Standard tests increasingly frame questions as scenarios — prices, ages, mixtures, schedules — precisely because formulation separates understanding from pattern-matching. The good news is that the skill is finite: a handful of classic families (age, money, mixture, rate, geometry, two-condition systems) covers nearly every phrasing, and each family has a fixed setup sentence. Learn to write the setup sentence — “let n be the first integer, so the next is n + 1” — and the translation almost writes itself. The five-step strategy below is the open-textbook version of that discipline, and it works identically for linear, quadratic and inequality models; only the translating sentence changes.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'The strategy', def: 'Read the problem until the words and ideas are clear; identify what is being asked; name the unknown with a variable (and a sentence defining it); translate the English sentence into an equation; solve; check the answer against the original story; answer in a complete sentence.' },
          { term: 'Variable definition sentence', def: 'The sentence that gives the variable meaning: “let x be the number of adult tickets, so 2x + 3 is the number of child tickets.” Writing it forces every quantity in the story to be expressed through one unknown — the step that prevents the classic three-variables-one-equation muddle.' },
          { term: 'Translation vocabulary', def: 'The recurring phrase-to-symbol conversions: “is” → =; “total/sum” → addition; “more/greater than” → +; “less/fewer than” → −; “times/of” (after a quantity) → ×; “per” → ÷; “consecutive integers” → n and n + 1 (consecutive even or odd: n and n + 2); “at least” → ≥; “at most/no more than” → ≤.' },
          { term: 'Value = count × denomination', def: 'The money-problem setup: the value of a group of identical items is the count of items times the value of one. Coin, note, ticket and stamp problems all reduce to one linear equation once counts are expressed through a single variable.' },
          { term: 'Mixture setup', def: 'The amount of pure substance equals concentration times volume. Mixing two solutions gives (c\u2081·v\u2081) + (c\u2082·v\u2082) = c_f·(v\u2081 + v\u2082) — one equation built from four parameters and one chosen variable.' },
          { term: 'Two-condition systems', def: 'When a story gives two independent facts about two unknowns (a total and a difference, a price and a quantity), define both variables and translate each fact into one equation — a 2×2 linear system, solved by elimination or substitution.' },
        ],
      },
      {
        kind: 'para',
        text: 'The strategy earns its keep in the first three steps. Read twice: once for the story, once for the numbers and their units. Identify the question — not the quantity mentioned first, but the quantity actually asked for, which word problems regularly separate. Then name: choose the variable to be the smallest quantity every other quantity can be built from. In consecutive-integer problems the smallest integer earns the name (n, n + 1); in ticket problems the count that drives the other counts does (“she bought twice as many child tickets as adult” names adult tickets). The textbook example shows the whole arc: the sum of two consecutive integers is 47 becomes n + (n + 1) = 47, so 2n + 1 = 47, n = 23, the numbers are 23 and 24 — and the check runs the story, not the algebra: 23 + 24 = 47.',
      },
      {
        kind: 'para',
        text: 'Translation is a fixed vocabulary, and most errors are vocabulary errors. “Five more than a number” is n + 5, not 5 − n; “five less than a number” is n − 5; “three times as many X as Y” makes X = 3Y, not Y = 3X. Two habits catch every reversal. First, translate from the noun phrase after the “than”: that item is the reference and sits alone on one side. Second, sanity-test the equation with an easy number: if the club has 12 members, does “three times as many seniors as juniors” produce seniors = 3·juniors or juniors = 3·seniors? One test equation saves the whole model. The same discipline extends to comparison phrases in geometry (“the length is 4 cm more than twice the width” → L = 2W + 4) and to rates (“per” words — km per hour, rupees per kilogram — always announce a division).',
      },
      {
        kind: 'para',
        text: 'The classic families each carry one setup sentence. Age problems: every age shifts by the same amount, so “in 8 years” adds 8 to both sides’ ages, and “was” subtracts — build both ages from the younger person’s variable. Money problems: value = count × denomination, summed to the total (“0.05n + 0.10(2n) = 3.50” for a nickel-and-dime pocket). Mixture problems: concentration × volume of each ingredient sums to the final concentration × final volume, with the volumes themselves often linked (“twice as much of A as B” names v for B). Work-rate problems: one job = rate × time, so combined one-hour rates add — 1/a + 1/b = 1/t. Geometry problems: one perimeter or area equation plus one comparison sentence. Two-condition problems: two facts, two variables, two equations. Every family ends the same way — one equation in one or two unknowns that the solving chapters already know how to finish.',
      },
      {
        kind: 'para',
        text: 'Some stories refuse linear models, and recognising the refusal is the formulation skill. “At least 15”, “cannot exceed”, “no fewer than” — any such phrase formulates as an inequality, and the answer is a range, not a number; solve exactly as an equation, then flip the symbol only if you multiplied or divided by a negative quantity. “The product of two consecutive integers is 306” — a product of two expressions in one variable formulates as a quadratic, n(n + 1) = 306, and the negative root is discarded by feasibility, not by algebra. “One number exceeds another by 4 and their squares sum to 136” formulates as x² + (x + 4)² = 136. The modeler’s test is structural: count the conditions (one equation? two?), count the unknowns (one variable? two?), and match the operations the story names (sum → linear, product → quadratic, bound → inequality).',
      },
      {
        kind: 'example',
        title: 'Worked Example — Formulate, Then Finish: The Ticket Stand',
        steps: [
          'Story: a stall sold 120 tickets; adult tickets cost ₹60, child tickets ₹25; receipts totalled ₹4,875. Asked: how many of each were sold?',
          'Identify: two counts are asked, but one drives the other — name adult tickets.',
          'Name: let a = number of adult tickets; then (120 − a) = child tickets. Write the definition sentence down.',
          'Translate: value equation 60a + 25(120 − a) = 4,875 — adult value plus child value equals total value.',
          'Solve: 60a + 3,000 − 25a = 4,875 → 35a = 1,875 → a ≈ 53.6. Not an integer — so the receipts figure cannot arise from 120 tickets at these prices; the formulation is sound, the story’s numbers are inconsistent.',
          'Check and answer: the check step caught a false premise — with a = 55, receipts would be ₹4,900; no whole-number answer exists. Formulation includes the right to conclude “no solution as stated”.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: '“Five less than twice a number is 27” translates as…',
          options: ['5 − 2n = 27', '2n − 5 = 27', '2(n − 5) = 27', 'n/2 − 5 = 27'],
          answer: 1,
          explain: '“Twice a number” is 2n; “five less than” that is 2n − 5. The phrase after “than” is the base expression.',
        },
        {
          q: 'Ravi is 4 years older than Meena. In 6 years, twice Ravi’s age will equal three times Meena’s. The correct formulation is…',
          options: ['2(x+4) = 3x', '2(x + 4 + 6) = 3(x + 6)', '2(x + 4) + 6 = 3x + 6', '2x + 4 = 3x'],
          answer: 1,
          explain: 'Let Meena be x now. In 6 years both ages shift: Ravi is x + 4 + 6, Meena is x + 6, and the condition compares those future ages.',
        },
        {
          q: 'A 400 ml solution of 20% acid is mixed with v ml of 50% acid to make a 30% mixture. The correct equation is…',
          options: ['0.20(400) + 0.50v = 0.30(400 + v)', '0.20(400) − 0.50v = 0.30·400', '0.50v = 0.30(400)', '20 + 50 = 30(400 + v)'],
          answer: 0,
          explain: 'Pure acid in = pure acid in the mix: 0.20·400 + 0.50·v = 0.30·(400 + v). Always multiply concentration by total final volume on the right.',
        },
        {
          q: '“A hall can seat at most 250 people” formulates as the inequality…',
          options: ['n > 250', 'n ≥ 250', 'n ≤ 250', 'n < 250'],
          answer: 2,
          explain: '“At most” bounds from above and permits equality: n ≤ 250. “At least” is the mirror case n ≥ bound.',
        },
        {
          q: 'The product of two consecutive positive integers is 306. The correct formulation — and feasibility filter — is…',
          options: ['n + (n + 1) = 306, take any root', 'n(n + 1) = 306, keep the positive root only', 'n² = 306, n = 17.5', '2n + 1 = 306'],
          answer: 1,
          explain: '“Product” signals multiplication: n(n + 1) = 306. Solving gives n = 17 (17·18 = 306); the negative root −18 fails the “positive integers” condition.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Naming the wrong quantity as the variable — name the one that builds the rest, and write the definition sentence. Reversing “less than” (5 − n instead of n − 5) and “times as many” (3x for the smaller quantity instead of the larger). Forgetting that time shifts move every age in an age problem — adding years to one side only is the classic error. Building mixtures with percentages added as numbers instead of concentration × volume. Treating “at least” as an equation and reporting one number where a range is asked. Skipping the check against the story: a negative length, a fractional person or non-integer ticket count is not an algebra failure — it is the model correctly reporting that the story is impossible as told.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: linear-equation solving and basic quadratics from the algebra chapters. Follow with the systems-of-equations material for two-variable formulations, and the tournament-arithmetic lesson to see formulation applied to fixture questions. Primary reading: OpenStax, Elementary Algebra 2e, section 3.1 “Use a Problem-Solving Strategy” (the full strategy and worked integer/ticket examples), section 3.3 “Solve Mixture Applications” (concentration × volume setups) — openstax.org, CC BY; the percent and geometry applications in sections 3.2 and 3.4 extend the same five-step frame.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Strategy: read, identify, name, translate, solve, check, answer — the equation is finished only when the story checks.',
        'Name the smallest quantity that builds the rest, and write the definition sentence.',
        'Translation vocabulary: “is” =, totals +, comparisons after “than”, “per” ÷, “at least” ≥, “at most” ≤.',
        'Family setups: ages shift together; money value = count × denomination; mixtures preserve concentration × volume; work rates add.',
        'Two facts about two unknowns → a 2×2 system; a product → quadratic; a bound → inequality.',
        'Feasibility is part of formulation: reject negative lengths and fractional people — or conclude the story is inconsistent.',
      ] },
    ],
  },
  {
    id: 'reason-coded-inequalities',
    title: 'Coded Inequalities: Decoding Order Statements into Valid Conclusions',
    domain: 'Foundation Learning',
    field: 'Logical Reasoning',
    branch: 'Coded Inequalities',
    tier: 'core',
    concepts: [
      'Decoding a symbol-to-meaning map first',
      'Order relations: transitivity and direction',
      'Combining statements into one chain',
      'The direction-reversal breaking point',
      'How ≥ and ≤ change what is definite',
      'Either-or conclusions and complementary pairs',
      'Conclusion validation against the chain',
    ],
    words: 1944,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Coded inequality questions hide a tiny logic engine inside a substitution puzzle: symbols such as @, #, % or & stand in for “greater than”, “less than”, “equal to” and their compound forms, and the task is to decide which conclusions about the underlying order must follow. Nothing in the topic needs speed-reading tricks or lucky guesses — it is the mathematics of order relations dressed in costume. Decode the symbols, lay the statements into a single chain, and test each conclusion against what the chain guarantees. Done in that order, the questions are among the fastest, most reliable marks in any reasoning section; done out of order — reading coded conclusions against coded statements — they become guesswork.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The entire method reduces to one geometric picture: a number line with the elements placed left-to-right, and arrows that must all point the same way for information to travel. Transitivity — if A > B and B > C then A > C — is the property that lets a chain carry a conclusion from end to end; the direction-reversal rule (A > B but C < B) is the property that stops it. Every classification of a conclusion — definitely true, definitely false, cannot say, either-or — falls out of whether the chain connects the two elements with an unbroken same-direction path and whether the connectors are strict (>, <) or generous (≥, ≤). Master the picture once and every question, coded or plain, becomes the same three-step routine.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Decode map', def: 'The legend converting each code symbol to its real meaning (for example @ → >, # → <, $ → =, % → ≥, & → ≤). Always rewrite the statements in standard symbols before thinking; never reason on the codes.' },
          { term: 'Order relation', def: 'A comparison relation between elements. The chains used here are transitive — A > B and B > C force A > C — which is the property that makes chains informative. In formal terms the relations studied are (partial or total) orderings: reflexive or irreflexive variants aside, antisymmetry and transitivity are what give an order its shape.' },
          { term: 'Chain', def: 'The combined picture after decoding: statements joined through shared elements, written as one line such as A > B ≥ C = D < E. A conclusion between two elements is legitimate exactly when a same-direction path joins them.' },
          { term: 'Breaking point', def: 'A position where the direction reverses, as in A > B < C. Information cannot cross it: nothing definite follows between A and C — each of A > C, A < C and A = C remains possible, so any definite claim is wrong.' },
          { term: 'Strict versus generous connectors', def: 'Strict connectors (>, <) pin an order; generous ones (≥, ≤) leave a choice. Chaining through ≥ yields a definite ≥ and nothing sharper: A ≥ B ≥ C guarantees A ≥ C but neither A > C nor A = C alone.' },
          { term: 'Complementary pair (either-or)', def: 'Two conclusions that are individually unprovable but jointly exhaustive — for example “A > B” and “A = B” when the chain guarantees only A ≥ B. Exactly one of them must hold, so the answer is “either I or II follows”. They require the same two elements, and neither may be provable alone.' },
        ],
      },
      {
        kind: 'para',
        text: 'Decode before you think — the rule has no exceptions. Read the legend once and write the meaning of every symbol in the margin; then rewrite all statements in standard notation, checking the direction of each as you go, because coded legends deliberately reverse intuitions (“@ means greater than” on one paper may mean less than on the next). A code for “not equal to” deserves special respect: ≠ gives no direction at all, so a statement P ≠ Q contributes order nothing — it may decorate a conclusion’s options but can never help build a chain. After decoding, the conclusions must be decoded too: a conclusion written in codes is read against the chain only after conversion to standard symbols. Every one of the classic errors — “treating ≥ as >”, “assuming transitivity across disconnected statements”, “reading coded conclusions directly” — is at bottom a decode-order error.',
      },
      {
        kind: 'para',
        text: 'Build the chain next. List the statements, find the shared elements and splice them into one line — P > Q, Q = R, R > S becomes P > Q = R > S. Two kinds of combination are safe. Same-direction transitivity: every strict step compounds, so P > Q > R gives P > R, and any run of ≥ steps gives a definite ≥ across the run. Equality substitution: an = merges its two elements into interchangeable labels, so P > Q = R is exactly P > R with a spare name. One combination is never safe: opposite-facing connectors around a shared element — P > Q alongside R < Q, or P ≥ Q alongside Q < R — leave the outer pair unordered, because concrete numbers make all three outcomes possible (take P = 10, R = 5; P = 5, R = 10; P = R = 7 with suitable Q). The chain line makes the breaking point visible; trust it over any feeling.',
      },
      {
        kind: 'para',
        text: 'Generous connectors demand accounting. Read A ≥ B as a fork: either A > B or A = B, with neither branch guaranteed. Chaining through a fork can only promise the fork’s own generosity: A ≥ B ≥ C guarantees A ≥ C, but the sharper claims A > C and A = C are each merely possible — a case exists for both. A strict step anywhere in the run sharpens everything after it: A > B ≥ C forces A > C (the strictness propagates forward), and A ≥ B > C does too. So the one-line rule: a run of connectors is as strong as its weakest strict member — if any link in the run from X to Y is strict, the conclusion is strict; if all are generous, the conclusion is generous; if a link is equality, elements merge. This single sentence resolves every “definitely” question about ≥ chains without a table.',
      },
      {
        kind: 'para',
        text: 'Conclusions then classify into four verdicts. Definitely true: the chain carries an unbroken same-direction path with the right strength (P > R from P > Q = R > S; P ≥ R from P ≥ Q ≥ R). Definitely false: the chain carries the opposite path — “P < R” is false when P > R is guaranteed. Cannot say: no path joins the pair, or every path crosses a breaking point (P > Q, Q < R leaves P–R open). Either-or: the pair of conclusions uses the same two elements, neither is individually definite, and together they exhaust the guaranteed relation — the canonical case is “P > R” and “P = R” when the chain proves only P ≥ R; the mirror case is “P ≤ R” with “P = R” when only P ≤ R is proved. Mark either-or only when both conditions hold; a conclusion that is outright false cannot join the pair.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One Full Coded Question, Start to Finish',
        steps: [
          'Legend: @ → >, % → ≥, $ → =, # → <. Statements: A % B, B @ C, C $ D, D # E. Conclusions: I. A @ D; II. A @ E; III. C % E.',
          'Decode statements: A ≥ B, B > C, C = D, D < E. Rewrite the chain: A ≥ B > C = D < E.',
          'Mark the breaking point: between D and E the direction flips (< after the descending run) — no definite statement can cross it.',
          'Test I (A > D): path A ≥ B > C = D carries one strict link (B > C), so strictness propagates: A > D. TRUE.',
          'Test II (A > E): every A–E path crosses the D–E breaking point. CANNOT SAY.',
          'Test III (C ≥ E): the only path is C = D < E, which actually proves C < E — the opposite. FALSE. Verdict: only I follows.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Statements: M > N, N > O. Conclusions: I. M > O; II. O < M. Which follows?',
          options: ['Only I', 'Only II', 'Both I and II', 'Neither'],
          answer: 2,
          explain: 'The chain M > N > O proves M > O; conclusion II restates the same fact in reverse wording (O < M ≡ M > O). Both follow.',
        },
        {
          q: 'Statements: P ≥ Q, Q = R. Which single conclusion is definitely true?',
          options: ['P > R', 'P = R', 'P ≥ R', 'P < R'],
          answer: 2,
          explain: 'A ≥ run through an equality keeps only the generous strength: P ≥ R holds in both branches (P > R or P = R), but neither sharper claim is guaranteed.',
        },
        {
          q: 'Statements: X > Y, Z < Y. What can be concluded about X and Z?',
          options: ['X > Z', 'X < Z', 'X = Z', 'No definite relation'],
          answer: 3,
          explain: 'Both statements face Y from opposite directions — a breaking point at Y. X > Z, X < Z and X = Z are all consistent with the data, so nothing definite follows.',
        },
        {
          q: 'Statements: A > B ≥ C. Conclusion: A > C. This conclusion is…',
          options: ['false', 'true, because one strict link sharpens the run', 'cannot say', 'true only if B = C'],
          answer: 1,
          explain: 'A > B is strict and the strictness propagates through the generous B ≥ C, so A > C is definite. Had both links been ≥, only A ≥ C would follow.',
        },
        {
          q: 'A chain guarantees exactly A ≥ B. Conclusions: I. A > B; II. A = B. The correct verdict is…',
          options: ['only I', 'only II', 'either I or II follows', 'both I and II'],
          answer: 2,
          explain: 'Neither branch of the fork is provable alone, but one must hold — same two elements, jointly exhaustive. That is the complementary-pair (either-or) case.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Reading coded conclusions against coded statements — decode everything first, including the conclusions. Crossing a breaking point: A > B < C licenses nothing about A and C, however tempting. Promoting ≥ to >: a generous chain proves only a generous conclusion, and the sharper claim is always a coin-flip case. Reversing a decoded symbol — A > B is B < A, not B > A. Assuming transitivity across statements that share no element, or across a “not equal” code, which carries no direction at all. And awarding either-or when one conclusion is outright false or the two conclusions mention different element pairs — complementarity needs same elements, individual unprovability and joint exhaustiveness, all three.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — the order-relations core is built from scratch here. Follow with the critical-reasoning lesson for conclusion-testing habits in verbal arguments, and the order-and-ranking style puzzles that extend chains with positions. Primary reading: SATHEE, IIT Kanpur (Ministry of Education initiative), “Inequality (Coded Inequalities) — Theory & Concepts”, sathee.iitk.ac.in — the decode-then-chain method, combination rules and either-or conditions; H. Kwong, A Spiral Workbook for Discrete Mathematics, section 7.4 “Partial and Total Ordering”, math.libretexts.org (CC BY-NC-SA) — the reflexive/antisymmetric/transitive properties behind order relations.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Decode first: rewrite statements and conclusions in standard symbols; a “not equal” code contributes no direction.',
        'Splice statements into one chain; the chain is the single source of truth for every verdict.',
        'Same-direction runs compound by transitivity; opposite-facing connectors create a breaking point that nothing definite crosses.',
        'Strictness propagates: one strict link sharpens the whole run; a run of ≥ proves only ≥.',
        'Four verdicts: definitely true, definitely false, cannot say, either-or (complementary pairs on the same two elements).',
        'The routine — decode, chain, test, classify — turns the whole topic into repeatable 60-second questions.',
      ] },
    ],
  },
  {
    id: 'civ-india-defence-organisation',
    title: 'Organisation of the Armed Forces: India’s Defence Establishment',
    domain: 'Social Sciences',
    field: 'Defence Studies',
    branch: 'Organisation of the Armed Forces',
    tier: 'core',
    concepts: [
      'Supreme command vested in the President',
      'The five departments of the Ministry of Defence',
      'Civil control: Defence Secretary versus service chiefs',
      'Chief of Defence Staff and the Department of Military Affairs',
      'HQ Integrated Defence Staff and the Kargil reforms',
      'The Army, Navy and Air Force command structures',
      'Defence production and research: DRDO and the DPSUs',
    ],
    words: 2172,
    readMins: 11,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'A modern armed force is two organisations wearing one uniform: a fighting machine arranged in services, formations and commands, and a civilian establishment that owns budgets, production and policy under a ministry. India’s defence establishment is a study in that duality — constitutional supreme command resting with the President, executive control exercised by the elected government through the Ministry of Defence, and professional leadership exercised by the service chiefs and, since 2020, a Chief of Defence Staff. This lesson maps the whole structure: the constitutional frame, the ministry’s departments, the higher-management reform layer, the three services with their commands, and the production-research ecosystem that feeds them. The names-with-reasons habit applies as much here as in geography — every office exists because of a specific need or a specific lesson of history.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Defence-organisation questions are structure questions, and structure questions reward a frame over a list. The frame has four storeys: who commands (the President), who controls (the ministry and its departments), who manages (the CDS, the chiefs and the integrated staff) and who fields (the services and their commands). Almost every factual question — a headquarters, a creation date, a department’s role — lands on exactly one storey, so attaching the storey to the fact prevents the classic confusions: the Defence Secretary versus the service chief, the CDS versus a service chief, a command versus a formation. Learn the reason each layer was added — especially the post-Kargil reforms — and the dates stop being trivia and become a story.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Supreme Commander', def: 'The President of India, in whom Article 53(2) of the Constitution vests the supreme command of the armed forces; its exercise is regulated by law and routed through the government, which holds executive power for national security.' },
          { term: 'Ministry of Defence (MoD)', def: 'The apex civilian ministry, organised into five departments: Department of Defence; Department of Defence Production; Department of Defence Research and Development (which houses the DRDO); Department of Ex-Servicemen Welfare; and the Department of Military Affairs, created in December 2019.' },
          { term: 'Defence Secretary', def: 'The civil-service head of the Department of Defence, through which civilian control of the military is exercised — budget coordination, defence policy, Parliament accountability — alongside the service chiefs, who are the professional heads of their services.' },
          { term: 'Chief of Defence Staff (CDS)', def: 'The single professional adviser on military matters and the principal military adviser to the Defence Minister, created on 31 December 2019 as part of the higher-defence-management reforms; the CDS heads the Department of Military Affairs and serves (ex officio) as Secretary of the Defence Staff Corps — the first office-holder was General Bipin Rawat.' },
          { term: 'HQ Integrated Defence Staff (HQ IDS)', def: 'The tri-service staff organisation created in 2001 on the recommendation of the Group of Ministers that reviewed the Kargil conflict of 1999; it integrates planning across the services and supports the CDS — the institutional answer to inter-service coordination gaps the war exposed.' },
          { term: 'Operational and training commands', def: 'The field-level organisation of each service: the Army runs six operational commands plus one training command (ARTRAC); the Navy runs three commands; the Air Force runs five operational commands plus training and maintenance commands. A command is a top-level geographic formation; below it come corps, divisions and brigades in the Army.' },
          { term: 'Defence production and research ecosystem', def: 'The Department of Defence Production with its defence public-sector undertakings (HAL, BEL, BDL and others) and the corporatised ordnance factories; the DRDO under the research-and-development department, running the laboratories behind missiles, radars and aircraft programmes.' },
        ],
      },
      {
        kind: 'para',
        text: 'The constitutional storey comes first because everything else hangs from it. Article 53(2) vests the supreme command of the armed forces in the President of India — but as with most constitutional powers, the exercise is regulated by law and operated by the government of the day: executive responsibility for national security sits with the Prime Minister and the Cabinet, and the ministry of the day answers to Parliament for the forces’ employment and their money. The result is the principle of civilian control: no service chief commands the armed forces of the nation in the political sense — each commands a service professionally, while policy, budget and war-direction flow through civilian hands. India’s is among the world’s largest volunteer forces — roughly 1.4 million active personnel, the largest all-volunteer army — which makes the civilian machinery that funds and directs them a substantial administrative state of its own.',
      },
      {
        kind: 'para',
        text: 'The ministry’s five departments divide the paperwork by function, and each has a distinct role worth fixing separately. The Department of Defence is the senior department — it handles defence policy, the defence budget, Parliament work and coordination, headed by the Defence Secretary. The Department of Defence Production runs the manufacturing side: the defence public-sector undertakings that build aircraft, electronics, munitions and ships, plus the ordnance-factory network (corporatised into public-sector entities in 2021). The Department of Defence Research and Development owns the DRDO — the laboratory network behind India’s missiles, radars, electronic warfare systems and indigenous aircraft. The Department of Ex-Servicemen Welfare handles pensions, resettlement and veterans’ matters — a reminder that the establishment’s obligations outlast service. The Department of Military Affairs, the youngest (December 2019), manages the services themselves: their organisation, manpower and — under the CDS — the push toward integration and theatre commands.',
      },
      {
        kind: 'para',
        text: 'The reform layer tells the most examinable story because its dates have reasons. The 1999 Kargil conflict exposed coordination gaps among the services and between intelligence and operations; the review that followed recommended integration, and in 2001 the Headquarters Integrated Defence Staff was raised as a tri-service staff body to plan jointly and serve the Chief of Staffs Committee. The deeper reform waited two decades: on 31 December 2019 the government created the post of Chief of Defence Staff — a four-star officer, first held by General Bipin Rawat — as the single point of military advice to the Defence Minister, and concurrently the Department of Military Affairs under the CDS. The CDS heads the DMA and, ex officio, the military side of HQ IDS; the reform’s stated direction is jointness — common logistics, common doctrine, and eventually integrated theatre commands that cut across service lines. Distinguish the offices carefully: the CDS is not the Army chief and not a service chief at all; the service chiefs remain the professional heads of the Army, Navy and Air Force respectively.',
      },
      {
        kind: 'para',
        text: 'The services organise geography into commands. The Indian Army, the largest service, runs six operational commands — Northern (HQ Udhampur), Western (HQ Chandimandir), South Western (HQ Jaipur), Southern (HQ Pune), Central (HQ Lucknow) and Eastern (HQ Kolkata) — plus the Army Training Command (ARTRAC, HQ Shimla). Below a command sit corps, divisions, brigades and units — the field formations that actually fight. The Indian Navy, organised around fleets, squadrons and bases, runs three commands: Western (HQ Mumbai), Eastern (HQ Visakhapatnam) and Southern (HQ Kochi, the training command; the Navy’s training institution, the Indian Naval Academy, sits at Ezhimala in Kerala). The Indian Air Force runs seven: Western (HQ New Delhi), South Western (HQ Gandhinagar), Central (HQ Prayagraj), Eastern (HQ Shillong), Southern (HQ Thiruvananthapuram), plus a Training Command (HQ Bengaluru) and a Maintenance Command (HQ Nagpur). The mnemonic logic: Army commands align with land frontiers, Navy commands with seaboards, Air Force commands with air sectors — and the headquarters cities are themselves worth pinning, since they are the most-asked single fact.',
      },
      {
        kind: 'para',
        text: 'The production-research storey closes the frame. India’s defence industry is anchored by defence public-sector undertakings — Hindustan Aeronautics Limited (aircraft, from the Tejas programme), Bharat Electronics Limited (radars and electronic systems), Bharat Dynamics Limited (missiles) — coordinated through the Department of Defence Production, alongside the former ordnance factories, corporatised in 2021 into seven public-sector entities. Research sits with the Defence Research and Development Organisation, a network of dozens of laboratories that developed the Agni and Prithvi missile families, the Akash air-defence system, and critical avionics and electronic-warfare systems. The current policy direction ties the establishment together: indigenisation — replacing imports with domestic design and manufacture under initiatives such as positive-indemnity lists and dedicated defence corridors. For structure questions the takeaway is clean: production, research and welfare each have a named department, and every named body answers to a storey of the frame.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Place Any Defence Fact in the Four-Storey Frame',
        steps: [
          'Hear the fact and ask which storey it lives on: command (constitutional), control (ministry), management (CDS/IDS/chiefs), or field (services and commands).',
          '“The President is the supreme commander” — constitutional storey, Article 53(2); exercised through the government.',
          '“DRDO developed the Agni missiles” — control storey: DRDO sits under the Department of Defence Research and Development.',
          '“The CDS heads a department” — management storey: the Department of Military Affairs, created December 2019; first CDS General Bipin Rawat.',
          '“Kochi” — field storey, Navy: Southern Naval Command, the training command; Ezhimala hosts the Naval Academy.',
          'Cross-check by exclusion: a headquarters city (Lucknow, Jaipur, Chandimandir) belongs to an Army command list of seven names — six operational plus ARTRAC — never to the ministry’s departments.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Under the Constitution, the supreme command of India’s armed forces vests in…',
          options: ['the Prime Minister', 'the President', 'the Defence Minister', 'the Chief of Defence Staff'],
          answer: 1,
          explain: 'Article 53(2) vests supreme command in the President; its exercise is regulated by law and operated by the elected government — the civilian-control principle.',
        },
        {
          q: 'Which department of the Ministry of Defence was created in December 2019 alongside the CDS post?',
          options: ['Department of Defence', 'Department of Defence Production', 'Department of Military Affairs', 'Department of Ex-Servicemen Welfare'],
          answer: 2,
          explain: 'The higher-defence-management reforms of December 2019 created both the Chief of Defence Staff post and the Department of Military Affairs, headed by the CDS.',
        },
        {
          q: 'HQ Integrated Defence Staff was raised in 2001 in the aftermath of…',
          options: ['the 1962 war', 'the 1971 war', 'the 1999 Kargil conflict and its review', 'the 2016 Uri incident'],
          answer: 2,
          explain: 'The Group of Ministers’ review after Kargil (1999) recommended integration; HQ IDS was raised in 2001 as the tri-service staff body.',
        },
        {
          q: 'Which pair of Army command headquarters is correct?',
          options: ['Northern — Udhampur; South Western — Jaipur', 'Eastern — Lucknow; Central — Kolkata', 'Western — Pune; Southern — Chandimandir', 'ARTRAC — Dehradun; Northern — Srinagar'],
          answer: 0,
          explain: 'Northern Command is at Udhampur and South Western at Jaipur. Eastern is Kolkata, Central Lucknow, Western Chandimandir, Southern Pune, and ARTRAC is at Shimla.',
        },
        {
          q: 'The Southern Naval Command of the Indian Navy is headquartered at…',
          options: ['Visakhapatnam', 'Mumbai', 'Kochi', 'Kolkata'],
          answer: 2,
          explain: 'The Navy’s three commands: Western at Mumbai, Eastern at Visakhapatnam, Southern at Kochi — the training-oriented command; the Naval Academy is at Ezhimala.',
        },
        {
          q: 'Bharat Electronics Limited and Hindustan Aeronautics Limited function under…',
          options: ['the Department of Military Affairs', 'the Department of Defence Production', 'the DRDO', 'HQ Integrated Defence Staff'],
          answer: 1,
          explain: 'The DPSUs (BEL, HAL, BDL and others) are coordinated by the Department of Defence Production; the DRDO is a research organisation, not their parent.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling the Prime Minister or Defence Minister the supreme commander — that is the President’s constitutional office, exercised through the government. Counting the Army’s commands as six — the Army runs six operational commands plus one training command (ARTRAC), seven in all; the Navy is the three-command service. Confusing the CDS with a service chief — the CDS is the single military adviser who heads the Department of Military Affairs; the chiefs still head their services. Placing DRDO under Military Affairs — it lives under the Department of Defence Research and Development, while production belongs to Defence Production. And dating HQ IDS to the CDS reform — IDS was the 2001, post-Kargil institution; the CDS and DMA are the 2019 layer built on top of it.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — the constitutional frame is introduced here, though the constitutional-law lesson deepens Article 53 and civil-military relations. Follow with the security-policy and current-affairs material for missions, labs and products in the news, and the physical-geography lesson to understand why the command headquarters sit where they do. Primary reading: Government of India open sources — dmamod.gov.in (creation of the Department of Military Affairs, December 2019), the Press Information Bureau’s CDS background note (static.pib.gov.in, first CDS appointed 31 December 2019), and the IDSA Journal of Defence Studies 13.3, “HQ Integrated Defence Staff in the National Security Structure” (idsa.in) — HQ IDS as the post-Kargil integration instrument; the Indian Armed Forces reference summary at en.wikipedia.org for the department and command lists cross-checked against official sites.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Four storeys: command (President, Article 53(2)) → control (five MoD departments) → management (CDS, DMA, HQ IDS, service chiefs) → field (services and commands).',
        'Five departments: Defence (policy/budget), Defence Production (DPSUs), DDR&D (DRDO), Ex-Servicemen Welfare, Military Affairs (2019, under the CDS).',
        'Reform story: Kargil 1999 → review → HQ IDS 2001; CDS + DMA 31 December 2019 (first CDS General Bipin Rawat).',
        'Army: six operational commands (Northern Udhampur, Western Chandimandir, South Western Jaipur, Southern Pune, Central Lucknow, Eastern Kolkata) + ARTRAC Shimla.',
        'Navy: three commands — Western Mumbai, Eastern Visakhapatnam, Southern Kochi. Air Force: five operational + Training (Bengaluru) + Maintenance (Nagpur).',
        'Production-research ecosystem: DRDO labs, DPSUs (HAL, BEL, BDL), corporatised ordnance factories (2021) — the indigenisation direction.',
      ] },
    ],
  },
]
