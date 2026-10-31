/**
 * Knowledge Universe — Mathematics — Chapter 05: Discrete Mathematics
 * 2 lessons · ~3,137 words
 * field: Discrete Mathematics
 * legacy sources: mathematics.ts, x25-tournament-reasoning-civics-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Discrete Mathematics]
 *
 * Lessons (snapshot at reorganization):
 *   05.1 math-games-tournaments-tactics — Tournament Formats and Fixture Arithmetic: Knockouts, Round-Robins and Points Tables
 *   05.2 math-graph-theory-bridges — Graph Theory: From Königsberg to Networks
 */
import type { KnowledgeTopic } from '../../types'

export const mathematicsUnifiedCh05: KnowledgeTopic[] = [
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
  // ------------------------------------------------------------------
  {
    id: 'math-graph-theory-bridges',
    title: 'Graph Theory: From Königsberg to Networks',
    domain: 'Mathematics',
    field: 'Discrete Mathematics',
    branch: 'Graph Theory',
    tier: 'intermediate',
    concepts: [
      'Vertices, edges, and the abstraction of connection',
      'Degree and the handshake lemma',
      'Euler paths and the Königsberg criterion',
      'Hamiltonian cycles and the traveling salesperson problem',
      'Trees, spanning structure, and shortest paths',
      'Graph coloring and the four-color theorem',
    ],
    words: 1182,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'In 1736 the citizens of Königsberg asked whether a Sunday stroll could cross each of the city\u2019s seven bridges exactly once. Euler\u2019s answer — no, and here is exactly why — discarded streets, distances, and scenery, keeping only landmasses and the connections between them. That act of ruthless abstraction founded graph theory, today the mathematics of networks: the internet, power grids, social platforms, supply chains, and the wiring of brains and molecules.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Whenever a question is about connection rather than distance — who talks to whom, which roads join which cities, which tasks block which — a graph is the honest model, and three centuries of theorems apply on contact. Route planning, epidemic forecasting, chip design, and friend-of-friend recommendations are all graphs in costume.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A graph G = (V, E) is a set of vertices together with a set of edges, each joining a pair of vertices. Drawings are conveniences, not definitions — the Königsberg graph is the same object however it is scribbled. Edges may be undirected, like bridges, or directed like one-way streets, and may carry weights such as distances, costs, or capacities. Graph theory studies what survives the abstraction: connectivity, cycles, reachability, and flow.',
      },
      {
        kind: 'para',
        text: 'The degree of a vertex counts the edges touching it, and the handshake lemma totals them: the degrees of all vertices sum to exactly twice the number of edges, since every edge is counted once at each endpoint. Two consequences cost nothing to derive — the number of odd-degree vertices is always even, and a graph\u2019s edge count is pinned down by its vertex count and average degree. These are structural facts that require no drawing at all.',
      },
      {
        kind: 'para',
        text: 'An Euler path traverses every edge exactly once; if it returns to its start it is an Euler circuit. Euler\u2019s criterion is complete: a connected graph has an Euler circuit exactly when every vertex has even degree — each arrival must be matched by a departure — and an open Euler path exactly when precisely two vertices have odd degree. Königsberg\u2019s four landmasses had degrees 5, 3, 3, and 3, so its famous walk was doomed from the outset.',
      },
      {
        kind: 'para',
        text: 'A Hamiltonian cycle instead visits every vertex exactly once — a sibling question with a savage difference: no clean criterion is known, and the problem is NP-complete. It is the traveling salesperson problem in disguise: find the cheapest tour through every city. Entire industries ride on heuristics and branch-and-bound methods that tame it in practice, while worst cases remain firmly out of reach.',
      },
      {
        kind: 'para',
        text: 'A tree is a connected graph with no cycles, and every connected graph contains a spanning tree: a subgraph reaching all vertices with no redundant edge. Trees on n vertices always have exactly n − 1 edges. They are the skeleton of efficient networks — Dijkstra\u2019s algorithm grows a tree of cheapest routes from a source, and minimum spanning trees wire cities or chips together at least total cost.',
      },
      {
        kind: 'para',
        text: 'A coloring assigns colors to vertices so that adjacent ones differ; the fewest colors that suffice is the chromatic number. The four-color theorem — proved in 1976 only with substantial computer assistance — says every planar graph needs at most four. Coloring is scheduling in disguise: tasks sharing a resource, or transmitters sharing a frequency, become graphs whose chromatic number sets the minimum number of slots.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Handshake lemma',
        latex: '\\sum_{v \\in V} \\deg(v) = 2\\,|E|',
        meaning: 'Total degree counts every edge twice, once per endpoint — so odd-degree vertices come in pairs.',
      },
      {
        kind: 'formula',
        name: 'Euler\u2019s criterion',
        latex: '\\text{Euler circuit} \\iff \\deg(v) \\text{ even for every } v',
        meaning: 'A connected graph admits a closed walk using each edge exactly once precisely when no vertex has odd degree.',
      },
      {
        kind: 'formula',
        name: 'Tree edge count',
        latex: '\\text{connected and acyclic} \\implies |E| = |V| - 1',
        meaning: 'Every tree on n vertices has exactly n − 1 edges; one more edge forces a cycle.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: whether Königsberg\u2019s seven bridges admit a walk crossing every bridge exactly once, returning or not.',
          'Recall the governing idea: an Euler path exists only in a connected graph with exactly 0 or 2 odd-degree vertices, since mid-walk every arrival at a vertex must be matched by a departure.',
          'Apply: model the four landmasses as vertices and the seven bridges as edges; their degrees are 5, 3, 3, and 3, giving four odd-degree vertices — two more than the criterion allows.',
          'State the result: the walk is impossible; Euler\u2019s criterion fails, and covering every bridge exactly once would require at least two separate strolls.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Navigation apps compute fastest routes on road networks with Dijkstra-style shortest-path searches.',
          'Social platforms mine degrees, communities, and paths — the anatomy of influence and six-degrees effects.',
          'Chip design places millions of components and routes their connections under crossing constraints.',
          'Epidemiologists simulate contagion across contact graphs to find the links most worth cutting.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Confusing Euler with Hamilton is the classic slip: Euler uses every edge once (a clean degree criterion), Hamilton every vertex once (NP-complete in general). Do not trust a drawing — edges crossing in a sketch do not make a graph non-planar, and isomorphic graphs can look utterly different. Finally, the handshake lemma is necessary, not sufficient: an even count of odd-degree vertices does not by itself guarantee an Euler circuit.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Vertex', def: 'A node of a graph — one of the objects being connected.' },
          { term: 'Edge', def: 'A link joining two vertices; it may be directed or weighted.' },
          { term: 'Degree', def: 'The number of edge-ends incident to a vertex.' },
          { term: 'Euler path', def: 'A walk that uses every edge of the graph exactly once.' },
          { term: 'Hamiltonian cycle', def: 'A closed walk that visits every vertex exactly once.' },
          { term: 'Spanning tree', def: 'A cycle-free subgraph that connects every vertex — the minimum skeleton of a network.' },
          { term: 'Chromatic number', def: 'The fewest colors needed so that adjacent vertices always differ.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Königsberg\u2019s bridge walk was impossible because:',
            options: ['The graph was disconnected', 'Four vertices had odd degree', 'The bridges were too far apart', 'Seven is an odd number of edges'],
            answer: 1,
            explain: 'An Euler path needs exactly 0 or 2 odd-degree vertices; Königsberg had four, with degrees 5, 3, 3, and 3.',
          },
          {
            q: 'In any graph, the sum of all vertex degrees equals:',
            options: ['Twice the number of edges', 'The number of edges', 'Twice the number of vertices', 'The number of odd-degree vertices'],
            answer: 0,
            explain: 'Every edge contributes 1 to the degree of each of its two endpoints — the handshake lemma.',
          },
          {
            q: 'A connected acyclic graph on 10 vertices has how many edges?',
            options: ['10', '9', '11', 'It depends on the branching shape'],
            answer: 1,
            explain: 'Every tree on n vertices has exactly n − 1 edges, no matter how it branches.',
          },
          {
            q: 'The four-color theorem states that:',
            options: ['Complete graphs need only four colors', 'Every planar graph can be colored with at most four colors', 'All graphs have chromatic number four', 'Maps need five colors in the worst case'],
            answer: 1,
            explain: 'Planarity is essential — the theorem concerns graphs drawable without edge crossings and was the first major proof delivered with computer assistance.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: sets, induction, and proof by contradiction. Follow with shortest-path and minimum-spanning-tree algorithms, network flow and matching, spectral graph theory — where eigenvalues of adjacency matrices expose community structure — and computational complexity, where the traveling salesperson problem makes P versus NP visible.',
        tone: 'path',
      },
    ],
  },
]
