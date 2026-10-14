import type { SectionContent } from '../library'

// ============================================================
// Rosen — Discrete Mathematics and Its Applications, 8th Ed
// Chapter 10: Graphs — master study content (8 sections)
// ============================================================

export const ch10Content: SectionContent[] = [
  // ---------- 10.1 Graphs and Graph Models ----------
  {
    sectionId: 'rosen-ch10-s1',
    readingTime: 10,
    intro:
      "Graphs are the mathematics of connection: who knows whom, which wires link which machines, which tasks must precede which. A graph strips away everything except objects and a relation between them, which is exactly why the same tiny theory powers social networks, chip design, ecology and the web.",
    objectives: [
      'Define graphs precisely as G = (V, E) and distinguish simple graphs, directed graphs, multigraphs and pseudographs',
      'Translate real situations into vertex-and-edge models and justify your modeling choices',
      'Recognize the classic graph models: acquaintanceship, influence, collaboration, the Hollywood graph, telephone networks, the web graph, precedence graphs and niche overlap graphs',
      'Explain why modeling decisions (directed vs. undirected, simple vs. multi) are forced by the nature of the underlying relation',
    ],
    concepts: [
      {
        term: 'Graph',
        kind: 'definition',
        statement:
          'A **graph** G = (V, E) consists of a nonempty finite set V of **vertices** (nodes) and a finite set E of **edges**, where each edge is an unordered pair {u, v} of distinct vertices. In a **simple graph**, at most one edge joins any pair of vertices and no edge joins a vertex to itself.',
        detail:
          'Nothing about the drawing matters — only which vertices are paired with which. Two graphs with the same incidence structure are the same graph, no matter how differently they are drawn.',
      },
      {
        term: 'Adjacency and incidence',
        kind: 'definition',
        statement:
          'Vertices u and v are **adjacent** (neighbors) when {u, v} ∈ E. The edge e = {u, v} is **incident** with u and with v, and u, v are the **endpoints** of e. The set of neighbors of v is its neighborhood N(v).',
        detail:
          'Adjacent describes vertices; incident pairs a vertex with an edge. Keeping the two words straight prevents most early confusion in graph theory.',
      },
      {
        term: 'Directed graph',
        kind: 'definition',
        statement:
          'A **directed graph** (digraph) G = (V, E) has each edge an ordered pair (u, v) — an edge from u (the **initial endpoint**) to v (the **terminal endpoint**), drawn with an arrowhead at v.',
        detail:
          'Use digraphs when the relation is asymmetric: u influences v without v influencing u, or task u must finish before task v starts.',
      },
      {
        term: 'Multigraphs and pseudographs',
        kind: 'definition',
        statement:
          'A **multigraph** permits **multiple edges** (parallel edges) joining the same pair of distinct vertices. A **pseudograph** also permits **loops** — edges of the form {v, v} that begin and end at the same vertex.',
        detail:
          'A telephone network needs multiple edges because several calls can connect the same two phones; the web graph is a directed pseudograph because a page may link to another page and to itself.',
      },
      {
        term: 'The graph-modeling discipline',
        kind: 'method',
        statement:
          'To model a situation as a graph, answer two questions: (1) **what are the vertices?** — the objects of interest; (2) **what relation do edges encode?** Then choose undirected edges if the relation is symmetric (mutual), directed if not, multiple edges if parallel instances matter, and loops if self-relations matter.',
        detail:
          'Getting this mapping right is the whole skill of applying graphs: the mathematics that follows only sees vertices, edges and directions.',
      },
      {
        term: 'Social network models',
        kind: 'insight',
        statement:
          'The **acquaintanceship graph** (vertices = people, edges between people who know each other) is undirected and enormous. The **influence graph** is directed: u → v means u influences v. The **collaboration graph** connects researchers who co-authored a paper — path length to Erdős defines the famous Erdős number.',
        detail:
          'The conjecture that every two people on earth are linked by a chain of at most six acquaintances is purely a statement about distances in this graph.',
      },
      {
        term: 'Infrastructure and information models',
        kind: 'insight',
        statement:
          'The **telephone network** is a multigraph (parallel lines, loops for calls within an exchange). The **web graph** is a directed pseudograph whose trillion-plus edges are hyperlinks. The **Hollywood graph** joins two actors when they have appeared in a film together; the **round-robin tournament graph** has one directed edge between every pair of contestants, from winner to loser.',
        detail:
          'In the Hollywood graph an edge between two actors is exactly the Kevin Bacon idea — path length to Bacon is the Bacon number, a second instance of the same distance machinery as Erdős numbers.',
      },
      {
        term: 'Precedence and niche overlap models',
        kind: 'insight',
        statement:
          'A **precedence graph** is a directed acyclic graph whose vertices are tasks (or circuit components) with an edge u → v when u must be completed before v — used to schedule jobs and lay out circuits. A **niche overlap graph** is undirected: vertices are species, and an edge joins two species that share a food source in their diets.',
        detail:
          'Precedence graphs can never contain directed circuits, since a circular chain of prerequisites is impossible to carry out — this foreshadows topological sorting in Chapter 9 and job scheduling later in this chapter.',
      },
    ],
    examples: [
      {
        title: 'Reading a social model',
        problem:
          'In the acquaintanceship graph of the world, what does a path of length 3 from Alice to Ben mean, and what claim is made by the saying that everyone is at most six degrees of separation from everyone else?',
        steps: [
          {
            label: 'Identify vertices and edges',
            text: 'Vertices are people; an undirected edge joins two people who know each other, because knowing is mutual.',
          },
          {
            label: 'Interpret a path',
            text: 'A path of length 3 is a chain Alice — p₁ — p₂ — Ben of three edges: Alice knows p₁, p₁ knows p₂, and p₂ knows Ben.',
          },
          {
            label: 'Translate the slogan',
            text: 'Six degrees of separation claims the distance between any two vertices is at most 6 — every pair of people is joined by a path of at most six edges.',
          },
        ],
        result:
          'Social questions like small-world phenomena become quantitative questions about path lengths and distances in a graph.',
      },
      {
        title: 'Building a precedence graph',
        problem:
          'A computer build has tasks: A install power supply, B install motherboard, C install CPU (after B), D install RAM (after C), E mount GPU (after B), F close case (after A, D, E). Build the precedence graph and explain why it has no directed circuits.',
        steps: [
          {
            label: 'Place a vertex per task',
            text: 'Vertices = {A, B, C, D, E, F} — each task is a vertex.',
          },
          {
            label: 'Draw a directed edge per prerequisite',
            text: 'B → C and B → E; C → D; A → F, D → F, E → F. Arrows point from prerequisite to dependent task.',
          },
          {
            label: 'Check for circuits',
            text: 'Following any chain of prerequisites strictly increases order of installation (A/B come first, F comes last), so no directed circuit can exist.',
          },
        ],
        result:
          'A directed acyclic graph whose topological order — for instance A, B, C, D, E, F — is any valid installation schedule.',
      },
      {
        title: 'Ecology with edges',
        problem:
          'Species: hawk, owl, fox, snake, rabbit, mouse. Diets: hawk eats rabbit and mouse; owl eats mouse; fox eats rabbit; snake eats mouse; rabbit and mouse eat grass. Build the niche overlap graph and interpret the neighborhoods.',
        steps: [
          {
            label: 'List shared food sources',
            text: 'Hawk and owl share mouse; hawk and fox share rabbit; hawk and snake share mouse; owl and snake share mouse; fox and snake share nothing (rabbit vs. mouse); rabbit and mouse share grass.',
          },
          {
            label: 'Draw undirected edges',
            text: 'Edges: hawk–owl, hawk–fox, hawk–snake, owl–snake, rabbit–mouse. No loops or directions — sharing food is a symmetric relation.',
          },
          {
            label: 'Read the structure',
            text: 'N(hawk) = {owl, fox, snake} — the hawk competes most broadly. Fox and snake are not adjacent: they exploit different resources and do not compete directly.',
          },
        ],
        result:
          'Ecological competition becomes adjacency: two species interact through exactly the food sources they share.',
      },
    ],
    keyTakeaways: [
      'A graph G = (V, E) is pure incidence structure — drawing, distance and edge shape carry no information',
      'Choose directed edges for asymmetric relations (influence, prerequisites, hyperlinks) and undirected edges for symmetric ones (acquaintance, co-authorship, shared food)',
      'Multiple edges model parallel connections such as separate phone calls or cables; loops model self-relations such as a page linking to itself',
      'Vertices do not have to be people: tasks, species, web pages, molecules and bit strings all make fine vertices',
      'The same analysis tool — path and distance — powers Erdős numbers, Bacon numbers and six degrees of separation',
      'A precedence graph must be acyclic; a round-robin tournament digraph must have an edge between every pair of vertices',
    ],
    quiz: [
      {
        q: 'Which situation should be modeled with a directed graph rather than a simple undirected graph?',
        options: [
          'Two people being acquaintances of each other',
          'A web page placing a hyperlink to another web page',
          'Two actors appearing in the same film',
          'Two species sharing a common food source',
        ],
        answer: 1,
        explanation:
          'A hyperlink runs from one page to another without the reverse link necessarily existing, so the relation is asymmetric and needs ordered pairs. Acquaintance, co-appearance and shared food are all symmetric relations.',
      },
      {
        q: 'In the niche overlap graph of an ecosystem, an edge joins two species exactly when they do what?',
        options: [
          'One preys on the other',
          'They share a food source in their diets',
          'They live in the same habitat',
          'They have a predator–prey reversal',
        ],
        answer: 1,
        explanation:
          'The niche overlap graph is undirected precisely because sharing food sources is symmetric: predator–prey relations would instead require a directed graph.',
      },
      {
        q: 'A round-robin tournament is represented by a digraph in which every pair of distinct vertices is joined by exactly one directed edge. What does the underlying undirected graph look like?',
        options: [
          'A complete graph Kₙ with one orientation chosen for each edge',
          'A bipartite graph between winners and losers',
          'A cycle Cₙ with alternating directions',
          'A wheel Wₙ centered on the champion',
        ],
        answer: 0,
        explanation:
          'Every pair plays, so if arrowheads are dropped the graph becomes Kₙ; the digraph is exactly an orientation of a complete graph, sometimes called a tournament.',
      },
      {
        q: 'In the collaboration graph of mathematicians, your Erdős number is 3. What does this say?',
        options: [
          'You wrote 3 papers with Paul Erdős',
          'A chain of 3 co-authorship edges joins you to Erdős, and no shorter chain exists',
          'You have 3 co-authors who each wrote with Erdős',
          'You are 3 citations away from Erdős',
        ],
        answer: 1,
        explanation:
          'The Erdős number is the graph distance to Erdős in the collaboration graph: the length of the shortest path of co-authorship edges, so 3 means a 3-edge chain exists and none shorter.',
      },
    ],
  },

  // ---------- 10.2 Graph Terminology and Special Types of Graphs ----------
  {
    sectionId: 'rosen-ch10-s2',
    readingTime: 12,
    intro:
      'This section arms you with the working vocabulary of graph theory — degrees, neighborhoods, and the celebrity families Kₙ, Cₙ, Wₙ, Qₙ and Kₘ,ₙ — plus two results you will use for the rest of the book: the Handshaking Theorem (∑ deg v = 2|E|) and the odd-cycle characterization of bipartite graphs.',
    objectives: [
      'Compute vertex degrees and apply the Handshaking Theorem ∑deg(v) = 2|E|',
      'Know the vertex and edge counts of complete graphs Kₙ, cycles Cₙ, wheels Wₙ, n-cubes Qₙ and complete bipartite graphs Kₘ,ₙ',
      'Define bipartite graphs and test bipartiteness using the odd-cycle theorem or a 2-coloring',
      'Construct new graphs from old: subgraphs, unions and regular graphs',
    ],
    concepts: [
      {
        term: 'Degree of a vertex',
        kind: 'definition',
        statement:
          'The **degree** of vertex v, written deg(v), is the number of edges incident with v, with each loop counting twice. The neighborhood N(v) is the set of vertices adjacent to v, so in a simple graph deg(v) = |N(v)|. A vertex of degree 0 is **isolated**; degree 1 is a **pendant** vertex.',
        detail:
          'A loop contributes 2 to the degree because both of its endpoints are the same vertex — this convention is chosen exactly so the Handshaking Theorem stays true for pseudographs.',
      },
      {
        term: 'The Handshaking Theorem',
        kind: 'theorem',
        statement:
          'If G = (V, E) is an undirected graph (or multigraph) with m = |E| edges, then **∑ᵥ deg(v) = 2m** — the sum of the degrees of all vertices equals twice the number of edges.',
        detail:
          'Each edge contributes exactly 1 to the degree of each of its two endpoints, so it contributes 2 to the total sum. At a party, the total number of handshakes counted from each person’s side is twice the number of handshakes.',
      },
      {
        term: 'Even number of odd-degree vertices',
        kind: 'theorem',
        statement:
          'An undirected graph has an **even number of vertices of odd degree**.',
        detail:
          'Since ∑deg(v) = 2|E| is even, the sum of the degrees of the odd-degree vertices must itself be even, which is only possible when there is an even number of them. This is the classic parity argument: it is why you cannot design a network with exactly one vertex of odd degree.',
      },
      {
        term: 'Complete graphs Kₙ',
        kind: 'notation',
        statement:
          'The **complete graph** Kₙ on n vertices has an edge between every pair of distinct vertices. It has **n(n − 1)/2 edges** and is (n − 1)-regular.',
        detail:
          'The edge count is the number of 2-element subsets of an n-element set — C(n, 2). Kₙ is the densest simple graph on n vertices, so it is the standard worst-case test case.',
      },
      {
        term: 'Cycles Cₙ and wheels Wₙ',
        kind: 'notation',
        statement:
          'The **cycle** Cₙ (n ≥ 3) consists of n vertices v₁, …, vₙ with edges {v₁,v₂}, …, {vₙ₋₁,vₙ}, {vₙ,v₁}: n vertices, n edges, every degree 2. The **wheel** Wₙ is obtained from Cₙ by adding one new vertex adjacent to all n cycle vertices: n + 1 vertices and **2n edges**.',
        detail:
          'The extra hub vertex of Wₙ has degree n while the rim vertices have degree 3, so wheels show that a single high-degree vertex coexists with a rigid cycle structure.',
      },
      {
        term: 'n-dimensional cubes Qₙ',
        kind: 'notation',
        statement:
          'The **n-cube** (hypercube) Qₙ has as vertices all 2ⁿ bit strings of length n, with an edge between two strings exactly when they differ in one bit. Qₙ has **2ⁿ vertices**, **n·2ⁿ⁻¹ edges**, and is n-regular and bipartite.',
        detail:
          'Qₙ is built from two copies of Qₙ₋₁ joined by matching corresponding vertices — the architecture of parallel computers. Degrees are all n because each bit position can be flipped once.',
      },
      {
        term: 'Bipartite and complete bipartite graphs',
        kind: 'definition',
        statement:
          'A graph G = (V, E) is **bipartite** if V = V₁ ∪ V₂ (disjoint nonempty parts) and every edge has one endpoint in V₁ and one in V₂; the pair V₁, V₂ is a **bipartition**. The **complete bipartite graph** Kₘ,ₙ has all m·n possible cross edges between parts of sizes m and n.',
        detail:
          'Bipartite graphs model two-type matching situations: jobs and workers, students and courses, brides and grooms. Kₘ,ₙ has m + n vertices, mn edges and is the bipartite analogue of a complete graph.',
      },
      {
        term: 'Odd-cycle characterization of bipartite graphs',
        kind: 'theorem',
        statement:
          'A graph is bipartite **if and only if it has no circuit of odd length** (in particular, no triangle). Equivalently, a graph is bipartite iff its vertices can be 2-colored so that every edge joins different colors.',
        detail:
          'To test bipartiteness, run a 2-coloring from any vertex of each component: color levels alternately. If an edge ever joins same-colored vertices, you have found an odd circuit and the graph is not bipartite — C₅ fails, C₆ passes.',
      },
      {
        term: 'Regular graphs, subgraphs and unions',
        kind: 'definition',
        statement:
          'A graph is **regular of degree k** if every vertex has degree k. A **subgraph** of G = (V, E) is a graph (V′, E′) with V′ ⊆ V and E′ ⊆ E (edges keeping their endpoints). The **union** G₁ ∪ G₂ has vertex set V₁ ∪ V₂ and edge set E₁ ∪ E₂.',
        detail:
          'Every cycle is 2-regular, Kₙ is (n−1)-regular, Qₙ is n-regular. Bipartite k-regular graphs with parts of size m must satisfy m = n because counting edges from each side gives km = kn — a one-line argument worth remembering.',
      },
    ],
    examples: [
      {
        title: 'Counting edges from degrees',
        problem:
          'A graph has degree sequence (4, 4, 3, 3, 3, 3, 2, 2). How many edges does it have, and how many vertices of odd degree?',
        steps: [
          {
            label: 'Sum the degrees',
            text: '4 + 4 + 3 + 3 + 3 + 3 + 2 + 2 = 24.',
          },
          {
            label: 'Apply the Handshaking Theorem',
            text: 'Since ∑deg(v) = 2|E|, we get |E| = 24/2 = 12 edges.',
          },
          {
            label: 'Count odd-degree vertices',
            text: 'Four vertices have degree 3 — an even count, exactly as the parity theorem guarantees.',
          },
        ],
        result: 'The graph has 12 edges and 4 odd-degree vertices; any degree sequence with an odd sum (like four 3s and a 5) would be impossible.',
      },
      {
        title: 'Edge counts of the famous families',
        problem:
          'Compute the number of edges of K₁₀, W₇, Q₄ and K₄,₃ without drawing anything.',
        steps: [
          {
            label: 'Complete graph',
            text: 'K₁₀ has one edge per pair of vertices: C(10, 2) = 10·9/2 = 45 edges.',
          },
          {
            label: 'Wheel',
            text: 'W₇ is C₇ plus a hub adjacent to all 7 rim vertices: 7 + 7 = 14 edges (in general Wₙ has 2n edges).',
          },
          {
            label: 'Hypercube',
            text: 'Q₄ has 16 vertices (all 4-bit strings) and each of the 16 vertices has degree 4, so ∑deg = 64 and |E| = 64/2 = 32 edges — matching n·2ⁿ⁻¹ = 4·8 = 32.',
          },
          {
            label: 'Complete bipartite graph',
            text: 'K₄,₃ has every one of its 4 left vertices adjacent to every one of its 3 right vertices: 4·3 = 12 edges.',
          },
        ],
        result: 'K₁₀: 45 edges, W₇: 14 edges, Q₄: 32 edges, K₄,₃: 12 edges — all from formulas, no pictures needed.',
      },
      {
        title: 'The odd-cycle test in action',
        problem:
          'Determine whether C₆ and C₅ are bipartite, and give a bipartition for whichever one is.',
        steps: [
          {
            label: 'Try to 2-color C₆',
            text: 'Label the cycle v₁…v₆ and color v₁ red; then v₂ blue, v₃ red, v₄ blue, v₅ red, v₆ blue. The closing edge {v₆, v₁} joins blue to red — a valid 2-coloring.',
          },
          {
            label: 'Write the bipartition',
          text: 'V₁ = {v₁, v₃, v₅} (red), V₂ = {v₂, v₄, v₆} (blue): every edge runs across the two parts, so C₆ is bipartite (in fact it is K₂,₂,₂? No — it is the 6-cycle, a bipartite graph whose parts have size 3).',
          },
          {
            label: 'Try to 2-color C₅',
            text: 'Color v₁ red, v₂ blue, v₃ red, v₄ blue, v₅ red — but now the closing edge {v₅, v₁} joins red to red. Every alternating attempt fails the same way.',
          },
          {
            label: 'Conclude via the theorem',
            text: 'C₅ is a circuit of odd length 5, so by the characterization it is not bipartite. Any cycle Cₙ is bipartite exactly when n is even.',
          },
        ],
        result: 'C₆ is bipartite; C₅ is not — parity of the cycle length decides, and even cycles are always bipartite.',
      },
    ],
    keyTakeaways: [
      '∑deg(v) = 2|E| — the single most used counting identity in graph theory; edges are counted twice, once per endpoint',
      'Every graph has an even number of odd-degree vertices: a parity constraint that instantly rules out many degree sequences',
      'Edge counts to memorize: Kₙ has n(n−1)/2, Wₙ has 2n, Qₙ has n·2ⁿ⁻¹, Kₘ,ₙ has mn',
      'Bipartite ⇔ no odd circuit ⇔ 2-colorable — three interchangeable tests of the same property',
      'Qₙ is the graph of bit strings differing in one bit; it is n-regular, bipartite and built recursively from two Qₙ₋₁',
      'Subgraphs and unions let you assemble and dissect graphs; a k-regular bipartite graph with parts V₁, V₂ forces |V₁| = |V₂|',
    ],
    quiz: [
      {
        q: 'A graph has 9 vertices and the sum of all degrees is 36. How many edges does it have?',
        options: ['18', '36', '72', 'Cannot be determined from the sum alone'],
        answer: 0,
        explanation:
          'By the Handshaking Theorem ∑deg(v) = 2|E|, so |E| = 36/2 = 18. The theorem converts a degree sum into an edge count with one division.',
      },
      {
        q: 'Which of the following degree sequences is impossible for a simple graph, purely by parity?',
        options: [
          '(3, 3, 2, 2, 2)',
          '(4, 4, 4, 2, 2)',
          '(3, 3, 3, 3, 3)',
          '(5, 4, 3, 2, 2)',
        ],
        answer: 2,
        explanation:
          '(3, 3, 3, 3, 3) has five odd degrees — an odd number of odd-degree vertices, which the Handshaking Theorem forbids. The other sequences have 2, 2 and 4 odd entries respectively.',
      },
      {
        q: 'Why must every graph have an even number of vertices of odd degree?',
        options: [
          'Because odd-degree vertices always come in adjacent pairs',
          'Because ∑deg(v) = 2|E| is even, and an odd number of odd summands would make the total odd',
          'Because every graph contains an Euler circuit',
          'Because degrees are bounded by the number of vertices',
        ],
        answer: 1,
        explanation:
          'The full degree sum equals 2|E|, which is even. The even-degree vertices contribute an even amount, so the odd-degree vertices must also contribute an even total — possible only if there is an even number of them.',
      },
      {
        q: 'Which graph is bipartite?',
        options: ['C₇', 'K₅', 'Q₄', 'W₆'],
        answer: 2,
        explanation:
          'Q₄ is bipartite: partition its vertices by the parity of the number of 1s in each bit string; flipping one bit always changes parity. C₇ has odd length, K₅ contains triangles, and W₆ contains triangles formed by the hub and adjacent rim vertices.',
      },
    ],
  },

  // ---------- 10.3 Representing Graphs and Graph Isomorphism ----------
  {
    sectionId: 'rosen-ch10-s3',
    readingTime: 10,
    intro:
      'Computers cannot store drawings, so graphs live in memory as adjacency lists, adjacency matrices or incidence matrices. The same representations power the deepest theoretical question of the section: when are two seemingly different graphs secretly the same object? That question — isomorphism — is answered with invariants.',
    objectives: [
      'Represent graphs with adjacency lists, adjacency matrices and incidence matrices, and know when each is preferred',
      'Read graph properties directly from these matrix representations',
      'Define graph isomorphism as an adjacency-preserving bijection between vertex sets',
      'Use invariants — vertex count, edge count, degree sequence, cycle structure — to prove graphs non-isomorphic, and construct explicit isomorphisms when they exist',
    ],
    concepts: [
      {
        term: 'Adjacency lists',
        kind: 'method',
        statement:
          'An **adjacency list** stores, for each vertex, the list of vertices adjacent to it. A simple undirected graph needs 2|E| list entries total; a directed graph stores, for each vertex, the terminals of edges leaving it (|E| entries).',
        detail:
          'Adjacency lists are the representation of choice for sparse graphs (few edges), since space is proportional to |V| + 2|E| rather than |V|².',
      },
      {
        term: 'Adjacency matrix',
        kind: 'definition',
        statement:
          'With vertices ordered v₁, …, vₙ, the **adjacency matrix** A is the n × n zero–one matrix with aᵢⱼ = 1 when {vᵢ, vⱼ} (or (vᵢ, vⱼ) for digraphs) is an edge, and 0 otherwise. For an undirected graph A is **symmetric** (aᵢⱼ = aⱼᵢ); a simple graph has all zeros on the diagonal.',
        detail:
          'Row i of A is the adjacency list of vᵢ in matrix clothing: the degree of vᵢ is the sum of row i (in a simple graph). Multigraphs use entry counts instead of 1s for parallel edges; loops appear as diagonal entries.',
      },
      {
        term: 'Choosing a representation',
        kind: 'insight',
        statement:
          'An adjacency matrix uses |V|² space and answers is-there-an-edge in O(1) time; adjacency lists use Θ(|V| + |E|) space but need a search through a list to test an edge. **Sparse graphs → lists; dense graphs or constant-time edge queries → matrices.**',
        detail:
          'This trade-off mirrors the big-array-versus-linked-list decision in data structures: the right answer depends on how dense the graph is and which operations dominate.',
      },
      {
        term: 'Incidence matrix',
        kind: 'definition',
        statement:
          'The **incidence matrix** M of G with vertices v₁, …, vₙ and edges e₁, …, eₘ is the n × m zero–one matrix with mᵢⱼ = 1 when vertex vᵢ is an endpoint of edge eⱼ (a loop at vᵢ makes that entry 2). Each column of a simple graph contains exactly two 1s — one per endpoint.',
        detail:
          'Where the adjacency matrix relates vertices to vertices, the incidence matrix relates vertices to edges — useful whenever the edges themselves carry meaning, as in network flow or circuit problems.',
      },
      {
        term: 'Graph isomorphism',
        kind: 'definition',
        statement:
          'Simple graphs G₁ = (V₁, E₁) and G₂ = (V₂, E₂) are **isomorphic**, written G₁ ≅ G₂, when there is a bijection f: V₁ → V₂ such that {u, v} ∈ E₁ **if and only if** {f(u), f(v)} ∈ E₂. The function f is an **isomorphism**.',
        detail:
          'An isomorphism is a relabeling: it must preserve adjacency AND non-adjacency. A useful viewpoint: G₁ and G₂ are isomorphic exactly when their adjacency matrices become equal after the same reordering of rows and columns.',
      },
      {
        term: 'Isomorphism invariants',
        kind: 'method',
        statement:
          'A property is an **isomorphism invariant** if isomorphic graphs necessarily share it: the number of vertices, the number of edges, the degree sequence (sorted), the number of circuits of each length, being bipartite, connected, regular or planar. **If any invariant differs, the graphs are not isomorphic.**',
        detail:
          'Invariants prove non-isomorphism only. Matching invariants never proves isomorphism — you must still exhibit the bijection f, which is the hard part.',
      },
      {
        term: 'Isomorphism testing is hard in general',
        kind: 'insight',
        statement:
          'No efficient (polynomial-time) algorithm is known for deciding graph isomorphism in general, yet the problem is also not believed to be NP-complete — it sits in a rare complexity class of its own. Practical solvers use invariants plus backtracking refinement.',
        detail:
          'This is why textbook problems stay small: you rule candidates out with invariants, then either find the bijection by pattern-matching vertices of distinctive degrees or show one cannot exist.',
      },
    ],
    examples: [
      {
        title: 'Writing the adjacency matrix',
        problem:
          'Vertices in order a, b, c, d; edges {a,b}, {a,c}, {b,c}, {c,d}. Write the adjacency matrix A, verify symmetry, and read off all degrees.',
        steps: [
          {
            label: 'Fill in entries row by row',
            text: 'Row a: adjacent to b and c → 0 1 1 0. Row b: adjacent to a and c → 1 0 1 0. Row c: adjacent to a, b, d → 1 1 0 1. Row d: adjacent to c → 0 0 1 0.',
          },
          {
            label: 'Assemble and check symmetry',
            text: 'A = [[0,1,1,0],[1,0,1,0],[1,1,0,1],[0,0,1,0]]. Every entry equals its mirror image across the diagonal — as required for any undirected graph.',
          },
          {
            label: 'Read degrees from row sums',
            text: 'deg(a) = 2, deg(b) = 2, deg(c) = 3, deg(d) = 1 — each row sum counts that vertex’s incident edges.',
          },
        ],
        result:
          'A is symmetric with zero diagonal (no loops), and row sums give the degree sequence (3, 2, 2, 1) up to sorting.',
      },
      {
        title: 'Invariants versus proof: C₆ and K₃ ∪ K₃',
        problem:
          'Show that C₆ and the disjoint union K₃ ∪ K₃ are NOT isomorphic, even though they agree on vertices, edges and degrees.',
        steps: [
          {
            label: 'Compare the easy invariants',
            text: 'Both graphs have 6 vertices and 6 edges, and every vertex has degree 2 in both — degree sequences match perfectly, so degree arguments are useless here.',
          },
          {
            label: 'Examine circuits of length 3',
            text: 'K₃ ∪ K₃ contains two triangles (3-cycles). C₆ is a single circuit of length 6 and contains no triangle at all.',
          },
          {
            label: 'Apply the invariant',
            text: 'The number of circuits of length 3 is an isomorphism invariant; since 2 ≠ 0, no bijection can preserve adjacency.',
          },
          {
            label: 'Alternative: connectivity',
            text: 'C₆ is connected while K₃ ∪ K₃ has two connected components — connectedness is itself an invariant, so the graphs cannot be isomorphic either way.',
          },
        ],
        result:
          'Non-isomorphic — connectivity (or triangle count) separates them where vertices, edges and degrees could not.',
      },
      {
        title: 'Exhibiting an isomorphism',
        problem:
          'Graph G has vertices {1, 2, 3, 4} and edges {1,2}, {2,3}, {3,4}, {1,4}, {1,3}; graph H has vertices {a, b, c, d} and edges {a,b}, {b,c}, {c,d}, {a,d}, {b,d}. Prove G ≅ H by constructing an isomorphism.',
        steps: [
          {
            label: 'Match the distinctive vertex',
            text: 'In G, vertex 1 has degree 3 (adjacent to 2, 3, 4) and the other vertices have degree 2. In H, vertex b is the unique degree-3 vertex (adjacent to a, c, d). Any isomorphism must send 1 ↦ b.',
          },
          {
            label: 'Propose the bijection',
            text: 'Try f(1) = b, f(2) = a, f(3) = d, f(4) = c.',
          },
          {
            label: 'Check every edge of G',
            text: '{1,2} ↦ {b,a} ✓ is an edge of H; {2,3} ↦ {a,d}? — a is adjacent to b and d? H’s edges are ab, bc, cd, ad, bd: yes {a,d} ✓; {3,4} ↦ {d,c} ✓; {1,4} ↦ {b,c} ✓; {1,3} ↦ {b,d} ✓.',
          },
          {
            label: 'Check non-edges and conclude',
            text: 'The remaining pair {2,4} ↦ {a,c}, which is a non-edge of H, matching the fact that {2,4} is a non-edge of G. Since G and H have 5 of 6 possible edges, preserving edges automatically preserves the single non-edge.',
          },
        ],
        result: 'f = (1→b, 2→a, 3→d, 4→c) is an isomorphism, so G ≅ H — both are K₄ minus one edge.',
      },
    ],
    keyTakeaways: [
      'Adjacency matrix: n × n, symmetric for undirected graphs, aᵢⱼ = 1 iff {vᵢ, vⱼ} is an edge; row sums give degrees',
      'Incidence matrix: n × m, one column per edge with exactly two 1s in a simple graph (a loop gives a 2)',
      'Sparse graphs prefer adjacency lists (Θ(|V| + |E|) space); dense graphs and constant-time edge tests prefer matrices',
      'Isomorphism = bijection preserving adjacency and non-adjacency; equivalently, identical adjacency matrices up to simultaneous row/column reordering',
      'Invariants (degree sequence, cycle counts, connectivity, bipartiteness) prove graphs NON-isomorphic but never prove them isomorphic',
      'Graph isomorphism has no known polynomial-time algorithm and is not believed NP-complete — a genuinely mysterious complexity class',
    ],
    quiz: [
      {
        q: 'Why is the adjacency matrix of every undirected graph symmetric?',
        options: [
          'Because undirected graphs must be regular',
          'Because {u, v} ∈ E exactly when {v, u} ∈ E, so aᵢⱼ and aⱼᵢ record the same edge',
          'Because every undirected graph has an even number of edges',
          'Because loops appear on the diagonal',
        ],
        answer: 1,
        explanation:
          'An undirected edge is a single unordered pair {u, v}; it forces both aᵢⱼ = 1 and aⱼᵢ = 1 simultaneously. Asymmetry of A is a dead giveaway that the graph is directed.',
      },
      {
        q: 'In the adjacency matrix of a simple undirected graph, what does the sum of the entries in row i equal?',
        options: [
          'The number of edges of the graph',
          'The degree of vertex vᵢ',
          'The number of circuits through vᵢ',
          'Twice the degree of vertex vᵢ',
        ],
        answer: 1,
        explanation:
          'Row i has a 1 in column j exactly when vᵢ is adjacent to vⱼ, so the row sum counts vᵢ’s neighbors — which is deg(vᵢ) in a simple graph.',
      },
      {
        q: 'Two graphs both have 8 vertices, 10 edges and degree sequence (4, 3, 3, 3, 2, 2, 2, 1). What can you conclude?',
        options: [
          'They are isomorphic because all invariants match',
          'They are not isomorphic because the degree sequences are equal',
          'Nothing — matching these invariants does not settle isomorphism; you must either find an adjacency-preserving bijection or find an invariant on which they differ',
          'They must both be bipartite',
        ],
        answer: 2,
        explanation:
          'Vertex count, edge count and degree sequence are invariants: equal values are necessary for isomorphism but not sufficient. Only a differing invariant or a constructed isomorphism settles the question.',
      },
      {
        q: 'In the incidence matrix of a simple graph, each column contains exactly two 1s. Why?',
        options: [
          'Because every vertex has even degree',
          'Because each edge has exactly two endpoints, and it is incident with precisely those two vertices',
          'Because simple graphs are 2-regular',
          'Because every edge joins two connected components',
        ],
        answer: 1,
        explanation:
          'Columns correspond to edges: the two 1s mark the edge’s two distinct endpoints. A loop would break the pattern — which is why pseudographs use the entry 2 for loops.',
      },
    ],
  },

  // ---------- 10.4 Connectivity ----------
  {
    sectionId: 'rosen-ch10-s4',
    readingTime: 11,
    intro:
      'How hard is it to get from here to there? Connectivity makes that question precise: paths, circuits, and their directed counterparts. The payoffs are practical — counting routes with adjacency-matrix powers, finding single points of failure (cut vertices and bridges), and Menger’s remarkable theorem linking redundancy to disjoint paths.',
    objectives: [
      'Distinguish paths, simple paths and circuits, and bound simple path lengths',
      'Determine connectedness and find connected components',
      'Identify cut vertices and bridges — the single points of failure in a network',
      'Count paths of length r between two vertices using powers of the adjacency matrix',
      'Classify directed graphs as strongly or weakly connected and appreciate Menger’s theorem',
    ],
    concepts: [
      {
        term: 'Paths, simple paths and circuits',
        kind: 'definition',
        statement:
          'A **path of length n** from u to v is a sequence of n edges starting at u and ending at v; the path is **simple** if it does not repeat any vertex, and **closed** if it starts and ends at the same vertex. A **circuit** is a path that begins and ends at the same vertex with no other repeated edges; a **simple circuit** repeats no vertex except that start = end.',
        detail:
          'Rosen calls an edge sequence with no repeated edge a path, and a path with no repeated vertices simple. A simple path in a graph with n vertices has length at most n − 1, and a simple circuit at most n — the pigeonhole principle forces a repeat otherwise.',
      },
      {
        term: 'Connected graphs and components',
        kind: 'definition',
        statement:
          'An undirected graph is **connected** when every pair of vertices is joined by a path. A **connected component** is a maximal connected subgraph — connected, and not contained in any larger connected subgraph. The **connectedness** relation (existence of a path) is an equivalence relation whose classes are the components.',
        detail:
          'Isolated vertices form singleton components. Every graph decomposes uniquely into components, which is why connectivity questions reduce component by component.',
      },
      {
        term: 'Cut vertices and bridges',
        kind: 'definition',
        statement:
          'A **cut vertex** (articulation point) is a vertex whose removal increases the number of components; a **bridge** (cut edge) is an edge with the same property. A graph with no cut vertices is **nonseparable**.',
        detail:
          'Cut vertices and bridges are the single points of failure of a network: communication networks and the internet backbone are deliberately designed with redundancy to eliminate them. In any connected graph, a pendant vertex’s single incident edge is always a bridge.',
      },
      {
        term: 'Counting paths with matrix powers',
        kind: 'theorem',
        statement:
          'Let A be the adjacency matrix of a graph (or digraph) with ordered vertices v₁, …, vₙ. The (i, j) entry of **Aʳ** equals the **number of paths of length r from vᵢ to vⱼ** (edge sequences of length r, vertices allowed to repeat).',
        detail:
          'Proof by induction: paths of length r + 1 from i to j end with an edge (vₖ, vⱼ) preceded by a length-r path from i to vₖ, giving the matrix multiplication (Aʳ⁺¹)ᵢⱼ = ∑ₖ (Aʳ)ᵢₖ·aₖⱼ. Each product counts paths through a specific penultimate vertex k.',
      },
      {
        term: 'Paths in directed graphs',
        kind: 'definition',
        statement:
          'A **directed path** follows edges only in their arrow directions: a sequence (v₀, v₁), (v₁, v₂), … of directed edges. Vertex u **reaches** v when a directed path from u to v exists; reachability is reflexive and transitive but generally not symmetric.',
        detail:
          'The reachability relation is the directed analogue of connectedness — but one-way streets make it asymmetric, which is why directed graphs need their own definitions of connectivity.',
      },
      {
        term: 'Strongly and weakly connected digraphs',
        kind: 'definition',
        statement:
          'A directed graph is **strongly connected** when every pair of vertices is mutually reachable by directed paths (u reaches v AND v reaches u). It is **weakly connected** when the **underlying undirected graph** (all arrowheads deleted) is connected. Every strongly connected digraph is weakly connected, never conversely.',
        detail:
          'A one-way traffic system is strongly connected if you can drive from anywhere to anywhere following the arrows. The **strong components** — maximal strongly connected subgraphs — partition the vertices of any digraph.',
      },
      {
        term: 'Menger’s theorem',
        kind: 'theorem',
        statement:
          'For nonadjacent vertices u and v: the **minimum number of vertices whose removal disconnects u from v equals the maximum number of pairwise internally vertex-disjoint u–v paths**. The edge version holds identically: minimum size of an edge cut = maximum number of edge-disjoint u–v paths.',
        detail:
          'Destruction and redundancy are two sides of one quantity: to separate u from v you must break every disjoint path. This is the ancestor of the max-flow/min-cut theorem and the theory of network reliability.',
      },
    ],
    examples: [
      {
        title: 'Counting paths with A²',
        problem:
          'A directed graph has vertices a, b, c, d and edges (a,b), (b,a), (b,c), (c,d), (d,b). How many paths of length 2 go from a to c? From a to a? From a to d?',
        steps: [
          {
            label: 'Write the adjacency matrix',
            text: 'Ordering (a, b, c, d): A has a row of out-neighbors — row a: 0 1 0 0; row b: 1 0 1 0; row c: 0 0 0 1; row d: 0 1 0 0.',
          },
          {
            label: 'Compute A²',
            text: 'Multiplying: (A²)ₐc = ∑ₖ aₐk·aₖc = aₐb·a_bc = 1·1 = 1; (A²)ₐa = aₐb·a_ba = 1; (A²)ₐd = aₐb·a_bd + aₐc·a_cd = 0 + 0 = 0.',
          },
          {
            label: 'Interpret each entry',
            text: 'One path of length 2 from a to c (a → b → c); one closed path a → b → a; none of length 2 from a to d (the trip a → b → c → d needs length 3).',
          },
          {
            label: 'Verify by inspection',
            text: 'The graph is a single 4-cycle a → b → c → d → b with the return edge b → a; enumerating two-step walks confirms exactly the three counts above.',
          },
        ],
        result:
          'Matrix powers count routes: (A²)ₐc = 1, (A²)ₐa = 1, (A²)ₐd = 0 — no drawing or searching required.',
      },
      {
        title: 'Hunting cut vertices and bridges',
        problem:
          'Find all cut vertices and bridges in the graph formed by two triangles sharing exactly one vertex w, with a pendant path w – x – y attached to w.',
        steps: [
          {
            label: 'Test the shared vertex',
            text: 'Removing w separates the surviving four triangle vertices (two in each triangle) plus x and y into three pieces: two edges and the piece x – y. The component count rises, so w is a cut vertex.',
          },
          {
            label: 'Test the path vertices',
            text: 'Removing x isolates y but leaves the two triangles joined through w — component count goes from 1 to 2, so x is also a cut vertex. Removing y (a pendant) changes nothing structurally: y is not a cut vertex.',
          },
          {
            label: 'Test triangle edges',
            text: 'Deleting any edge of either triangle leaves the triangle as a path — still connected through w. So no triangle edge is a bridge.',
          },
          {
            label: 'Test the path edges',
            text: 'Deleting {w, x} isolates the piece x – y, and deleting {x, y} isolates y: both {w, x} and {x, y} are bridges — as expected, the edges of a pendant path.',
          },
        ],
        result:
          'Cut vertices: w and x. Bridges: {w, x} and {x, y}. Vertices inside cycles are protected; attachments to trees create fragility.',
      },
      {
        title: 'Strongly versus weakly connected',
        problem:
          'A city’s one-way street digraph has vertices N, E, S, W and edges N→E, E→S, S→W, W→N, plus a one-way bypass S→N. Is it strongly connected, weakly connected, or both/neither?',
        steps: [
          {
            label: 'Check strong connectivity',
            text: 'From any vertex, following the cycle returns home (e.g., N→E→S→W→N), and S can also reach N via the bypass. Every pair is mutually reachable: strongly connected.',
          },
          {
            label: 'Check weak connectivity as a sanity check',
            text: 'Ignoring all arrows leaves the 4-cycle plus chord S–N: connected. This is automatic here — strong implies weak.',
          },
          {
            label: 'Feel the contrast',
            text: 'Had the bypass been N→S instead, then W could not reach E... in fact every vertex still reaches E via the cycle and E reaches everyone via E→S→W→N — still strongly connected. Replace the cycle edge E→S by S→E, however, and E can reach no one: strongly connected fails while weak connectivity survives.',
          },
        ],
        result:
          'The digraph is strongly connected (hence also weakly). The moral: deleting or reversing one arrow can destroy strong but never weak connectivity.',
      },
    ],
    keyTakeaways: [
      'Simple paths have length at most n − 1 in an n-vertex graph — pigeonhole forces repeats beyond that',
      'Connectivity is an equivalence-like relation on vertices; its classes are exactly the connected components',
      'Cut vertices and bridges are the single points of failure; cycles provide redundancy that protects against them',
      'The (i, j) entry of Aʳ counts the paths of length r from vᵢ to vⱼ — linear algebra answers a routing question',
      'Strongly connected requires mutual reachability in the directed sense; weakly connected only requires connectivity after deleting arrowheads',
      'Menger’s theorem: the fewest vertices (or edges) needed to separate u from v equals the most pairwise disjoint u–v paths you can build',
    ],
    quiz: [
      {
        q: 'A simple graph has 7 vertices. What is the maximum possible length of a simple path in it?',
        options: ['6', '7', '8', 'Unbounded'],
        answer: 0,
        explanation:
          'A simple path repeats no vertex, so it can use at most all 7 vertices — that is 7 − 1 = 6 edges. A seventh edge would have to revisit a vertex, by the pigeonhole principle.',
      },
      {
        q: 'In a directed graph, the (2, 5) entry of A³ is 4. What does that tell you?',
        options: [
          'Vertex 5 has 4 paths of length 2 to vertex 2',
          'There are exactly 4 directed paths of length 3 from vertex 2 to vertex 5',
          'The shortest path from 2 to 5 has length 4',
          'Vertices 2 and 5 are in the same strong component',
        ],
        answer: 1,
        explanation:
          'By the matrix-power theorem, (A³)₂₅ counts exactly the directed edge-sequences of length 3 beginning at v₂ and ending at v₅ — four of them.',
      },
      {
        q: 'A directed graph is weakly connected but NOT strongly connected. Which statement must be true?',
        options: [
          'Every pair of vertices is mutually reachable',
          'The underlying undirected graph is connected, but some pair of vertices has no directed path in at least one direction',
          'The graph has no directed circuits',
          'The graph has exactly one strong component',
        ],
        answer: 1,
        explanation:
          'Weak connectivity is defined by the underlying undirected graph being connected. The failure of strong connectivity means some pair lacks a directed path (at least one way), even though they would be connected if directions were ignored.',
      },
      {
        q: 'Which edge is guaranteed to be a bridge in any connected graph that has one?',
        options: [
          'Any edge lying on a cycle',
          'The edge incident to a pendant (degree-1) vertex',
          'Any edge whose endpoints both have degree at least 2',
          'The edge of maximum weight',
        ],
        answer: 1,
        explanation:
          'A pendant vertex v with sole neighbor u is reachable only via edge {u, v}; deleting it isolates v. By contrast, an edge on a cycle always has an alternate route around the cycle, so it can never be a bridge.',
      },
    ],
  },

  // ---------- 10.5 Euler and Hamilton Paths ----------
  {
    sectionId: 'rosen-ch10-s5',
    readingTime: 13,
    intro:
      'Two mathematicians, two tours, two very different destinies. Euler circuits — use every edge exactly once — are completely characterized by degrees. Hamilton circuits — visit every vertex exactly once — resist every such characterization, and their optimization version is the traveling salesperson problem, one of the hardest in all of computing.',
    objectives: [
      'State and apply the exact degree conditions for Euler circuits and Euler paths',
      'Understand why those conditions work (the in/out pairing argument at each vertex)',
      'Define Hamilton paths and circuits, and apply Dirac’s and Ore’s sufficient conditions',
      'Explain why the traveling salesperson problem is computationally hard and what that means in practice',
    ],
    concepts: [
      {
        term: 'Euler circuit and Euler path',
        kind: 'definition',
        statement:
          'An **Euler circuit** in a graph (or multigraph) G is a **simple circuit containing every edge of G exactly once**; an **Euler path** is a simple path containing every edge exactly once. A graph that has an Euler circuit is called **traversable** — one continuous trip covers every edge.',
        detail:
          'Vertices may be (and must be) revisited in an Euler tour; the scarce resource being spent is edges, not vertices. The 1736 Königsberg bridges problem of exactly this form founded graph theory.',
      },
      {
        term: 'Euler circuit theorem',
        kind: 'theorem',
        statement:
          'A connected multigraph has an **Euler circuit if and only if every vertex has even degree**.',
        detail:
          'Why even: each time a tour passes through a vertex it consumes two incident edges (in and out), so every vertex entered must be leavable — pairing entries with exits forces even degree. The converse builds the circuit by splicing closed sub-tours together. For disconnected graphs every edge must live in one component containing all non-isolated vertices.',
      },
      {
        term: 'Euler path theorem',
        kind: 'theorem',
        statement:
          'A connected multigraph has an **Euler path but no Euler circuit if and only if exactly two vertices have odd degree** — and every Euler path must begin at one of them and end at the other.',
        detail:
          'Start and end vertices are the only ones where an edge is used once without a partner, producing odd degree exactly there. Any other parity pattern (0 odd → circuit; 2 odd → open path; 4, 6, … odd → neither) makes the tour impossible.',
      },
      {
        term: 'Hamilton path and Hamilton circuit',
        kind: 'definition',
        statement:
          'A **Hamilton path** in a graph G is a simple path that passes through **every vertex exactly once**; a **Hamilton circuit** is a simple circuit through every vertex exactly once. (By convention, the start vertex is not counted twice.)',
        detail:
          'Now vertices are the scarce resource and edges may be skipped. The duality with Euler is the great trap of the topic: for Euler the criterion is degrees and it is exact; for Hamilton no comparable exact condition exists.',
      },
      {
        term: 'Dirac’s theorem',
        kind: 'theorem',
        statement:
          'If G is a simple graph with n ≥ 3 vertices and **every vertex has degree at least n/2**, then G has a Hamilton circuit.',
        detail:
          'A density guarantee: with that many edges available everywhere, a longest path can be closed and then converted into a spanning cycle by a rotation argument. Sufficient, not necessary — C₅ has all degrees 2 < 5/2 yet is itself a Hamilton circuit.',
      },
      {
        term: 'Ore’s theorem',
        kind: 'theorem',
        statement:
          'If G is a simple graph with n ≥ 3 vertices and **deg(u) + deg(v) ≥ n for every pair of nonadjacent vertices u, v**, then G has a Hamilton circuit.',
        detail:
          'Ore generalizes Dirac: instead of every degree individually ≥ n/2, only the sums across missing edges must be large. Dirac’s condition implies Ore’s, so Ore’s conclusion holds for strictly more graphs.',
      },
      {
        term: 'Why Hamilton is hard',
        kind: 'insight',
        statement:
          'No known simple necessary-and-sufficient condition characterizes Hamiltonian graphs, and deciding whether a Hamilton circuit exists is NP-complete. Even-degree gives Euler circuits but guarantees nothing here: bipartite graphs Kₘ,ₙ with m ≠ n have no Hamilton circuit regardless of degrees, while the Petersen graph fails despite being 3-regular.',
        detail:
          'A useful necessary fact: in a bipartite graph any circuit alternates between the parts, so a Hamilton circuit can exist only when the two parts have equal size — one-line proof, frequently exam-tested.',
      },
      {
        term: 'The traveling salesperson problem',
        kind: 'insight',
        statement:
          'The **TSP** asks for a Hamilton circuit of minimum total weight in a complete weighted graph. Brute force inspects (n − 1)!/2 distinct circuits — astronomically many for n beyond ~20 — and TSP is NP-hard, so exact large instances are out of reach. Heuristics such as nearest-neighbor or 2-opt tours trade optimality for speed.',
        detail:
          'n = 15 already gives roughly 43.6 billion directed orderings (about 21.8 billion circuits after symmetry). Real logistics, chip layout and DNA sequencing live here — Hamilton’s icosian game of 1857 was the puzzle’s playful origin.',
      },
    ],
    examples: [
      {
        title: 'The bridges of Königsberg',
        problem:
          'The city had four land masses A, B, C, D joined by seven bridges; the resulting multigraph has degrees deg(A) = 5, deg(B) = 3, deg(C) = 3, deg(D) = 3. Can a walker cross every bridge exactly once?',
        steps: [
          {
            label: 'Model as a multigraph',
            text: 'Vertices = land masses, edges = bridges (multiple edges because several bridges join the same pair — this is a multigraph, not a simple graph).',
          },
          {
            label: 'Count odd degrees',
            text: 'A has degree 5 and B, C, D each have degree 3: four vertices of odd degree (even in number, as the parity theorem demands).',
          },
          {
            label: 'Apply the Euler theorems',
            text: 'An Euler circuit needs all degrees even — fails. An Euler path needs exactly two odd vertices — fails with four.',
          },
          {
            label: 'Conclude',
            text: 'No walk crosses every bridge exactly once, whether or not the walker must return to the start. Euler’s 1736 negative answer created graph theory.',
          },
        ],
        result: 'Impossible — four odd-degree vertices block both an Euler circuit and an Euler path.',
      },
      {
        title: 'One missing edge changes everything',
        problem:
          'Take K₅ (five vertices, all ten edges) and delete one edge {a, b}. Does the resulting graph have an Euler circuit, an Euler path, or neither? What about a Hamilton circuit?',
        steps: [
          {
            label: 'Recompute degrees',
          text: 'In K₅ every degree is 4. Deleting {a, b} leaves deg(a) = deg(b) = 3 while the other three vertices keep degree 4.',
          },
          {
            label: 'Classify the Euler situation',
            text: 'Exactly two vertices have odd degree (a and b), all edges are in one connected component, so there is an Euler path — it must start at a and end at b — but no Euler circuit.',
          },
          {
            label: 'Check Hamiltonicity',
            text: 'Deleting one edge from K₅ still leaves deg(v) ≥ 3 > 5/2 = n/2 for every vertex, so Dirac’s theorem guarantees a Hamilton circuit (indeed a → c → d → e → b → a works, avoiding only the missing edge).',
          },
        ],
        result:
          'Euler path yes (from a to b), Euler circuit no; Hamilton circuit yes — Euler and Hamilton answer to different masters.',
      },
      {
        title: 'Bipartite roadblock to Hamilton circuits',
        problem:
          'Does K₃,₅ have a Hamilton circuit? Does K₄,₄? Does K₃,₅ at least have a Hamilton path?',
        steps: [
          {
            label: 'Set up the alternation argument',
            text: 'Every circuit in a bipartite graph alternates between the two parts V₁, V₂, returning to its start: visits to V₁ and V₂ must alternate and balance exactly.',
          },
          {
            label: 'Analyze K₃,₅',
          text: 'Parts have sizes 3 and 5. A circuit must alternate, so the numbers of V₁-visits and V₂-visits must be equal — impossible when the tour must cover all 8 vertices (3 ≠ 5). No Hamilton circuit.',
          },
          {
            label: 'Analyze K₄,₄',
          text: 'Parts are balanced (4 = 4), so alternation around an 8-cycle is possible: e.g. v₁w₁v₂w₂v₃w₃v₄w₄v₁ — a Hamilton circuit exists.',
          },
          {
            label: 'Recover a Hamilton path for K₃,₅',
          text: 'A path does not need to return, so sizes may differ by one: starting in the larger part, alternate v₁w₁v₂w₂v₃w₃w₄? — no: alternate as w₁v₁w₂v₂w₃v₃w₄w₅ fails at the end; the correct chain is v₁w₁v₂w₂v₃w₃w₄w₅ only if consecutive w’s were adjacent, which they are not. In fact the best possible is a path of 7 vertices: w₁v₁w₂v₂w₃v₃w₄ — K₃,₅ has no Hamilton path either, since |5 − 3| = 2 > 1.',
          },
        ],
        result:
          'K₄,₄ has a Hamilton circuit; K₃,₅ has neither a Hamilton circuit nor a Hamilton path — unbalanced bipartition is a structural obstruction no degree condition can override.',
      },
    ],
    keyTakeaways: [
      'Euler circuit ⇔ connected (on non-isolated vertices) + all degrees even; Euler path ⇔ connected + exactly two odd degrees',
      'The parity pairing of entries and exits at each vertex is the whole idea behind the Euler theorems',
      'Hamilton circuits trade the edge constraint for a vertex constraint — and lose the clean characterization',
      'Dirac: all degrees ≥ n/2 ⇒ Hamilton circuit; Ore: deg(u) + deg(v) ≥ n across nonadjacent pairs ⇒ Hamilton circuit (Ore generalizes Dirac)',
      'Bipartite graphs admit Hamilton circuits only with equal parts (|V₁| = |V₂|), and Hamilton paths only when parts differ by at most one',
      'TSP = minimum-weight Hamilton circuit: brute force is factorial, the problem is NP-hard, and heuristics are the practical answer',
    ],
    quiz: [
      {
        q: 'A connected multigraph has vertices with degrees 4, 4, 2, 4, 2, 4. Which statement is true?',
        options: [
          'It has an Euler circuit and an Euler path',
          'It has an Euler circuit but no open Euler path is needed to cover all edges',
          'It has an Euler path between the two degree-2 vertices but no Euler circuit',
          'It has neither an Euler path nor an Euler circuit',
        ],
        answer: 1,
        explanation:
          'All degrees are even, so the graph has an Euler circuit. (Every graph with an Euler circuit can be traversed edge-by-edge; a special open Euler path adds nothing new here — the even-degree condition is exactly the circuit condition.)',
      },
      {
        q: 'A connected graph has exactly two vertices of odd degree, p and q. Which tour is possible?',
        options: [
          'An Euler circuit starting anywhere',
          'An Euler path that must start at p and end at q (or vice versa)',
          'An Euler path that may start at any vertex',
          'No Euler path exists',
        ],
        answer: 1,
        explanation:
          'Each interior vertex of the walk pairs entries with exits; only the endpoints of the walk get an unpaired edge. Hence the walk must begin and end at the two odd-degree vertices p and q.',
      },
      {
        q: 'A simple graph has 10 vertices, and every vertex has degree at least 5. What can you conclude?',
        options: [
          'It has an Euler circuit',
          'It has a Hamilton circuit, by Dirac’s theorem',
          'It has a Hamilton circuit, by Ore’s theorem only',
          'It must be the complete graph K₁₀',
        ],
        answer: 1,
        explanation:
          'deg(v) ≥ 5 = n/2 for every vertex is exactly Dirac’s condition, which guarantees a Hamilton circuit. Euler requires even degrees, which are not given; the graph need not be complete.',
      },
      {
        q: 'Which is the best reason that K₃,₅ has no Hamilton circuit?',
        options: [
          'It is not connected',
          'Some vertex has odd degree',
          'Every circuit in a bipartite graph alternates between the parts, so a circuit covering all vertices needs |V₁| = |V₂|, but 3 ≠ 5',
          'It violates Euler’s condition for even degrees',
        ],
        answer: 2,
        explanation:
          'Alternation forces a bipartite circuit to spend visits to both parts equally; with parts of sizes 3 and 5 no closed tour can include all eight vertices. (Degree parity governs Euler tours, not Hamilton ones.)',
      },
    ],
  },

  // ---------- 10.6 Shortest-Path Problems ----------
  {
    sectionId: 'rosen-ch10-s6',
    readingTime: 11,
    intro:
      'Give every edge a length and suddenly the question changes from can I get there? to what is the cheapest way? Dijkstra’s 1959 algorithm answers it with one of the most elegant greedy arguments in computer science — and at O(n²) cost it is fast enough to route packets and plan your road trip.',
    objectives: [
      'Model transportation, communication and dependency problems as weighted graphs',
      'Execute Dijkstra’s algorithm by hand on small graphs, maintaining tentative distances correctly',
      'Explain why once a vertex is added to the found set its distance is provably final',
      'State the O(n²) complexity of Dijkstra’s algorithm and what drives it',
    ],
    concepts: [
      {
        term: 'Weighted graphs and path length',
        kind: 'definition',
        statement:
          'A **weighted graph** assigns each edge e a positive number w(e), its **weight** (length, cost, time). The **length of a path** is the sum of the weights of its edges, and the **distance** between two vertices is the minimum length of any path joining them.',
        detail:
          'Weights let one graph encode geography (miles), money (tolls), latency (milliseconds) or risk. Distances respect the triangle-type inequality automatically because they are minima over paths.',
      },
      {
        term: 'Dijkstra’s algorithm',
        kind: 'method',
        statement:
          'Find shortest paths from a start a to all vertices: maintain a tentative distance d(v) (initially d(a) = 0, all others ∞) and a set S of solved vertices (initially {a}). **Repeat n − 1 times: add to S the vertex u ∉ S of smallest d(u), then relax every edge {u, v}: set d(v) = min(d(v), d(u) + w(u, v)).** Recording the second-to-last vertex on each path lets you recover the actual routes.',
        detail:
          'Each pass finalizes one vertex — the closest unsolved one — and pushes its knowledge outward through edge relaxations. Think of a wave of certainty expanding from the start.',
      },
      {
        term: 'Why the greedy choice is safe',
        kind: 'insight',
        statement:
          'When u enters S it has the smallest tentative distance among unsolved vertices. Any alternative path to u must leave S through some other unsolved vertex x, whose tentative distance is already ≥ d(u) — and with **nonnegative weights** the path can only grow afterward. So no route can beat d(u): the value is final.',
        detail:
          'This proof is exactly why Dijkstra **requires nonnegative weights**: with a negative edge, the path through x could later shrink below d(u) and invalidate the finality. (Negative weights call for the Bellman–Ford algorithm instead.)',
      },
      {
        term: 'Complexity of Dijkstra’s algorithm',
        kind: 'theorem',
        statement:
          'With n vertices, Dijkstra’s algorithm performs n − 1 selection passes and relaxes each edge once overall in the straightforward implementation, giving **O(n²)** time with an adjacency matrix — quadratic and fully adequate for dense graphs.',
        detail:
          'With binary heaps and adjacency lists the bound improves to O(|E| log |V|); comparing the two shows the classical data-structures lesson of matching the representation to the graph density.',
      },
      {
        term: 'The Dijkstra / TSP contrast',
        kind: 'insight',
        statement:
          'Shortest path from a to b (Dijkstra) and the shortest tour visiting every vertex (TSP) sound alike but differ utterly: Dijkstra is polynomial — O(n²) — while TSP is NP-hard with factorial brute force. Requiring the trip to be a single closed tour visiting each vertex once is what makes TSP intractable.',
        detail:
          'The moral of the chapter: tiny changes in a graph problem’s phrasing can move the answer from centuries-fast to (probably) forever-slow.',
      },
      {
        term: 'Where shortest paths run the world',
        kind: 'insight',
        statement:
          'Dijkstra-style computation is the engine of GPS navigation, OSPF routing inside the internet (routers exchange link weights and compute shortest-path trees), network latency optimization, robot motion planning and currency/payment routing.',
        detail:
          'In OSPF every router runs Dijkstra with itself as the source — the algorithm’s result is a shortest-path tree, which is precisely the forwarding table.',
      },
    ],
    examples: [
      {
        title: 'Dijkstra’s algorithm, full trace',
        problem:
          'Directed graph: vertices a, b, c, d, e, f with edges a→b (4), a→c (2), c→b (1), b→d (5), c→d (8), c→e (10), d→e (2), d→f (6), e→f (3). Find the shortest distance from a to every vertex and a shortest route from a to f.',
        steps: [
          {
            label: 'Initialize',
            text: 'd(a) = 0, d(b) = d(c) = d(d) = d(e) = d(f) = ∞, S = {a}.',
          },
          {
            label: 'Round 1 — add c (d = 2)',
            text: 'Relax c’s out-edges: d(b) = min(4, 2 + 1) = 3; d(d) = 2 + 8 = 10; d(e) = 2 + 10 = 12.',
          },
          {
            label: 'Round 2 — add b (d = 3)',
            text: 'Relax b → d: d(d) = min(10, 3 + 5) = 8. Nothing else touches.',
          },
          {
            label: 'Round 3 — add d (d = 8)',
            text: 'Relax d’s out-edges: d(e) = min(12, 8 + 2) = 10; d(f) = 8 + 6 = 14.',
          },
          {
            label: 'Round 4 — add e (d = 10)',
            text: 'Relax e → f: d(f) = min(14, 10 + 3) = 13.',
          },
          {
            label: 'Round 5 — add f (d = 13)',
            text: 'All vertices solved. Recover the route to f by tracing back through the relaxing vertex: f ← e ← d ← b ← c ← a.',
          },
        ],
        result:
          'Distances: a 0, c 2, b 3, d 8, e 10, f 13. Shortest route to f: a → c → b → d → e → f with total 2 + 1 + 5 + 2 + 3 = 13.',
      },
      {
        title: 'Greedy means global, not local',
        problem:
          'Undirected edges: a–b with weight 7, a–c with weight 3, c–b with weight 2. Show that Dijkstra correctly prefers the two-hop route a → c → b over the direct edge, and explain the failure mode of a naive nearest-neighbor tour builder.',
        steps: [
          {
            label: 'Run the algorithm',
            text: 'd(a) = 0; smallest tentative is c with d = 3, so c is solved first; relaxing c–b gives d(b) = min(7, 3 + 2) = 5; then b is solved with 5.',
          },
          {
            label: 'Compare routes',
            text: 'The direct edge a–b costs 7, but the detour through c costs only 5 — the algorithm keeps the cheaper, longer-hop-count route.',
          },
          {
            label: 'Note the contrast',
            text: 'Dijkstra is greedy only about which vertex to finalize, never about which edge to take; that is why it finds true minima while nearest-neighbor heuristics (always drive to the closest unvisited city) can be led badly astray on the TSP.',
          },
        ],
        result:
          'Shortest a-to-b distance is 5 via c. Greedy per-vertex selection = optimal paths; greedy per-edge selection = merely approximate tours.',
      },
    ],
    keyTakeaways: [
      'Path length in a weighted graph = sum of edge weights; distance = minimum over all paths',
      'Dijkstra: repeatedly finalize the closest unsolved vertex, then relax its incident edges — d(v) = min(d(v), d(u) + w(u, v))',
      'Once a vertex joins S its distance never changes; the argument uses nonnegative weights essentially',
      'Straightforward Dijkstra is O(n²); with heaps and adjacency lists it becomes O(|E| log |V|)',
      'Negative weights break Dijkstra’s finality argument — use Bellman–Ford in that setting',
      'Shortest paths are polynomial; shortest Hamilton tours (TSP) are NP-hard — do not confuse the two problems',
    ],
    quiz: [
      {
        q: 'In Dijkstra’s algorithm, why is the tentative distance d(u) of the newly added vertex u guaranteed to be its true shortest distance?',
        options: [
          'Because d(u) was computed using every edge of the graph',
          'Because any other path to u must leave the solved set through an unsolved vertex whose tentative distance is already ≥ d(u), and nonnegative weights cannot shrink it below d(u)',
          'Because the algorithm tries all permutations of vertices',
          'Because u is adjacent to the start vertex',
        ],
        answer: 1,
        explanation:
          'Every alternative route must exit S at some unsolved vertex x with d(x) ≥ d(u); from there, nonnegative edge weights can only add cost. This is the greedy-exchange heart of the correctness proof.',
      },
      {
        q: 'What is the worst-case time complexity of the standard implementation of Dijkstra’s algorithm on a graph with n vertices?',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
        answer: 2,
        explanation:
          'The textbook implementation scans all n vertices at each of the n − 1 iterations to find the minimum tentative distance, plus linear relaxation work, giving O(n²). (Heap-based variants reach O(|E| log |V|).)',
      },
      {
        q: 'Edges: a–b weight 7, a–c weight 3, b–c weight 2. After the first relaxation round of Dijkstra from a, what is d(b)?',
        options: ['7', '5', '3', '2'],
        answer: 1,
        explanation:
          'From a, tentative distances are d(b) = 7 via the direct edge and d(c) = 3. Vertex c is solved first (smallest d), and relaxing c–b updates d(b) = 3 + 2 = 5 < 7.',
      },
      {
        q: 'Which assumption about edge weights is essential for Dijkstra’s algorithm to be correct?',
        options: [
          'All weights must be distinct',
          'All weights must be nonnegative',
          'All weights must be integers',
          'The graph must be directed',
        ],
        answer: 1,
        explanation:
          'The finality argument needs weights that never reduce a path’s cost after leaving the solved set. A negative edge could make a later route cheaper, invalidating a vertex already finalized — integer or distinct weights are irrelevant.',
      },
    ],
  },

  // ---------- 10.7 Planar Graphs ----------
  {
    sectionId: 'rosen-ch10-s7',
    readingTime: 10,
    intro:
      'Can a graph be drawn on paper with no crossing edges? Planarity is the question that makes graph theory feel like geometry: Euler’s formula r = e − v + 2 ties vertices, edges and regions into one equation, and from it flow the impossibility results — K₅ and K₃,₃ cannot be drawn flat, and Kuratowski says they are the only obstacles.',
    objectives: [
      'Define planar graphs and planar representations, and count regions in a planar drawing',
      'Prove and apply Euler’s formula r = e − v + 2 for connected planar graphs',
      'Derive the corollaries e ≤ 3v − 6 and (for triangle-free graphs) e ≤ 2v − 4, and use them to prove K₅ and K₃,₃ nonplanar',
      'State Kuratowski’s theorem and recognize subdivisions of K₅ and K₃,₃',
    ],
    concepts: [
      {
        term: 'Planar graph',
        kind: 'definition',
        statement:
          'A graph is **planar** if it can be drawn in the plane with no two edges crossing; such a drawing is a **planar representation**. A drawing partitions the plane into **regions** (faces) — one bounded region per enclosed area, plus the unbounded exterior region.',
        detail:
          'Crossing at a point is a property of a drawing, not of the graph: planarity asserts that SOME crossing-free drawing exists. Circuit boards and road maps must be planar — or need layers/overpasses.',
      },
      {
        term: 'Euler’s formula for planar graphs',
        kind: 'theorem',
        statement:
          'If G is a connected planar graph with v vertices, e edges and r regions, then **r = e − v + 2** (equivalently v − e + r = 2).',
        detail:
          'Proof sketch: take a spanning tree of G (v vertices, v − 1 edges, r = 1 region) and add the remaining e − (v − 1) edges one at a time — each added edge splits an existing region in two, raising r by exactly 1. The tetrahedron K₄ checks out: 4 − 6 + 4 = 2.',
      },
      {
        term: 'The 3v − 6 corollary',
        kind: 'theorem',
        statement:
          'If G is a connected simple planar graph with v ≥ 3 vertices and e edges, then **e ≤ 3v − 6**.',
        detail:
          'In a simple planar graph each region is bounded by at least 3 edge-sides, so 2e ≥ 3r; substituting r = e − v + 2 gives 2e ≥ 3(e − v + 2), i.e. e ≤ 3v − 6. Edge-sides count double because each edge borders at most two regions.',
      },
      {
        term: 'The 2v − 4 corollary',
        kind: 'theorem',
        statement:
          'If G is a connected simple planar graph with v ≥ 3 vertices that is **bipartite** (equivalently, triangle-free), then **e ≤ 2v − 4**.',
        detail:
          'With no 3-cycles every region needs at least 4 edge-sides: 2e ≥ 4r, and Euler’s formula yields e ≤ 2v − 4. This stronger bound is exactly what kills K₃,₃.',
      },
      {
        term: 'K₅ is nonplanar',
        kind: 'theorem',
        statement:
          'The complete graph **K₅ is not planar**: it has v = 5, e = 10, and 10 > 3·5 − 6 = 9 violates the corollary.',
        detail:
          'One edge too many: the densest possible planar graph on five vertices (a triangulation) has 9 edges. No amount of redrawing can rescue the tenth — the obstruction is combinatorial, not artistic.',
      },
      {
        term: 'K₃,₃ is nonplanar',
        kind: 'theorem',
        statement:
          'The complete bipartite graph **K₃,₃ is not planar**: it is triangle-free with v = 6, e = 9, and 9 > 2·6 − 4 = 8 violates the bipartite corollary.',
        detail:
          'The utilities puzzle — three houses each connected to gas, water and electricity without pipe crossings — is exactly K₃,₃ and is unsolvable for this reason.',
      },
      {
        term: 'Kuratowski’s theorem',
        kind: 'theorem',
        statement:
          'A graph is planar **if and only if it contains no subgraph homeomorphic to K₅ or K₃,₃** — that is, no subgraph obtainable from K₅ or K₃,₃ by inserting vertices of degree 2 into edges (subdividing edges) and taking subgraphs.',
        detail:
          'Two obstructions generate all nonplanarity: the density obstruction (K₅ — too many edges) and the bipartite obstruction (K₃,₃ — a cyclic-crossing pattern). Kuratowski (1930) says nothing else can go wrong. The equivalent minor version is Wagner’s theorem.',
      },
      {
        term: 'Every planar graph has a small-degree vertex',
        kind: 'theorem',
        statement:
          'Every planar simple graph with v ≥ 2 vertices has a **vertex of degree at most 5**.',
        detail:
          'If all degrees were ≥ 6 then 2e = ∑deg ≥ 6v, so e ≥ 3v, contradicting e ≤ 3v − 6. This lemma is the engine of the 6-color and 5-color theorems — and hence of the four color saga in the next section.',
      },
    ],
    examples: [
      {
        title: 'Verifying Euler’s formula on polyhedra',
        problem:
          'Check Euler’s formula for the graph of the cube (v = 8, e = 12) and for K₄ (v = 4, e = 6).',
        steps: [
          {
            label: 'Cube as a planar graph',
            text: 'Flatten the wireframe of a cube: vertices project to 8 points, edges to 12 non-crossing curves, and the plane is divided into 6 regions — 5 squares visible plus the unbounded exterior.',
          },
          {
            label: 'Compute',
            text: 'r = e − v + 2 gives 6 = 12 − 8 + 2 ✓.',
          },
          {
            label: 'K₄ as the tetrahedron',
            text: 'Draw K₄ with one vertex inside a triangle: r = 6 − 4 + 2 = 4 regions — three bounded triangles plus the outside.',
          },
          {
            label: 'Interpret',
            text: 'Polyhedra give the formula its original home: for convex polyhedra, v − e + f = 2 is Euler’s polyhedron formula — the cube has 8 − 12 + 6 = 2.',
          },
        ],
        result: 'Cube: 6 = 12 − 8 + 2 ✓; K₄: 4 = 6 − 4 + 2 ✓ — planar drawings always balance the books.',
      },
      {
        title: 'Impossibility proof by edge counting',
        problem:
          'Use the corollaries of Euler’s formula to prove that K₅ and K₃,₃ are both nonplanar.',
        steps: [
          {
            label: 'Set up K₅',
            text: 'K₅ is simple and connected with v = 5 vertices and e = 10 edges.',
          },
          {
            label: 'Apply e ≤ 3v − 6',
            text: 'If K₅ were planar, the general corollary would force 10 ≤ 3·5 − 6 = 9 — false. So K₅ is nonplanar.',
          },
          {
            label: 'Set up K₃,₃',
            text: 'K₃,₃ is simple, connected and bipartite with v = 6, e = 9 — but the general bound gives only 9 ≤ 12, which does not yet contradict.',
          },
          {
            label: 'Apply the stronger bound',
            text: 'Bipartite graphs have no triangles, so each region needs ≥ 4 edge-sides: e ≤ 2v − 4 = 8. But e = 9 > 8 — contradiction. K₃,₃ is nonplanar.',
          },
        ],
        result:
          'K₅ fails the general bound (10 > 9); K₃,₃ fails the triangle-free bound (9 > 8). Two one-line impossibility proofs, no drawing required.',
      },
      {
        title: 'Petersen graph via girth counting',
        problem:
          'The Petersen graph has v = 10, e = 15 and shortest cycle length (girth) 5. Prove it is nonplanar using Euler’s formula with a region-bound argument.',
        steps: [
          {
            label: 'Bound region sizes by girth',
            text: 'Since there are no 3- or 4-cycles, every region in any planar drawing would be bounded by at least 5 edge-sides: 2e ≥ 5r.',
          },
          {
            label: 'Insert Euler’s formula',
            text: 'r = e − v + 2, so 2e ≥ 5(e − v + 2), which rearranges to 3e ≤ 5v − 10.',
          },
          {
            label: 'Plug in the numbers',
            text: '3·15 = 45 ≤ 5·10 − 10 = 40 is false — the inequality fails by 5.',
          },
          {
            label: 'Conclude and connect to Kuratowski',
            text: 'No planar representation exists; in fact the Petersen graph contains a subgraph homeomorphic to K₃,₃, which is Kuratowski’s structural explanation of the same fact.',
          },
        ],
        result:
          'Nonplanar by a sharpened edge count — the general e ≤ 3v − 6 = 24 is far too weak here, but the girth-5 refinement pins it down.',
      },
    ],
    keyTakeaways: [
      'Planar = admits SOME crossing-free drawing; region count r includes the unbounded outside region',
      'Euler’s formula: v − e + r = 2 for every connected planar graph — verifiable on any polyhedron',
      'Corollaries: e ≤ 3v − 6 for simple planar graphs; e ≤ 2v − 4 when the graph is triangle-free/bipartite',
      'K₅ (10 > 9) and K₃,₃ (9 > 8) are nonplanar by edge counting alone',
      'Kuratowski: planar ⇔ no subgraph homeomorphic to K₅ or K₃,₃ — subdivisions preserve the obstruction',
      'Every planar graph has a vertex of degree ≤ 5, the key step toward the 5- and 4-color theorems',
    ],
    quiz: [
      {
        q: 'A connected planar graph has 6 vertices and 12 edges. How many regions does a planar drawing have?',
        options: ['6', '7', '8', '9'],
        answer: 2,
        explanation:
          'Euler’s formula: r = e − v + 2 = 12 − 6 + 2 = 8 regions, counting the unbounded one. (Such a graph is a triangulation — it meets the bound e = 3v − 6 exactly.)',
      },
      {
        q: 'Which is the cleanest proof that K₅ is nonplanar?',
        options: [
          'K₅ has vertices of even degree',
          'K₅ would need 10 edges but e ≤ 3v − 6 = 9 for any simple planar graph on 5 vertices',
          'K₅ is not bipartite',
          'K₅ has no Euler circuit',
        ],
        answer: 1,
        explanation:
          'The corollary of Euler’s formula caps simple planar graphs at 3v − 6 edges; K₅ exceeds the cap by exactly one edge, so no crossing-free drawing exists.',
      },
      {
        q: 'A graph contains a vertex of degree 2 in the middle of an edge of a K₅ — i.e., a subdivided K₅. Is the graph planar?',
        options: [
          'Yes — subdivision removes the crossing',
          'No — subdivisions of K₅ remain nonplanar by Kuratowski’s theorem',
          'Only if the degree-2 vertex is removed again',
          'It depends on where the vertex is placed in the drawing',
        ],
        answer: 1,
        explanation:
          'Smoothing out degree-2 vertices recovers K₅, and planarity is preserved by subdivision (and its reverse), so any graph containing a subdivided K₅ is nonplanar.',
      },
      {
        q: 'Why does the bound e ≤ 2v − 4 apply to K₃,₃ but not to all planar graphs?',
        options: [
          'Because K₃,₃ is regular',
          'Because bipartite graphs have no triangles, so every region in a planar drawing needs at least 4 edge-sides rather than 3',
          'Because K₃,₃ has an Euler path',
          'Because 2v − 4 is always larger than 3v − 6',
        ],
        answer: 1,
        explanation:
          'Region-bound counting gives 2e ≥ 3r in general (each region has ≥ 3 sides) but improves to 2e ≥ 4r when no triangles exist — bipartiteness is exactly the no-triangle condition, and 9 > 2·6 − 4 = 8 condemns K₃,₃.',
      },
    ],
  },

  // ---------- 10.8 Graph Coloring ----------
  {
    sectionId: 'rosen-ch10-s8',
    readingTime: 9,
    intro:
      'Coloring is the art of conflict-free separation: assign colors to vertices so no edge joins equals, and use as few colors as possible. From final-exam schedules to radio frequencies to register allocation, the chromatic number measures how irreconcilable a conflict structure really is — and for planar graphs the answer is at most four, the most famous theorem in the history of the subject.',
    objectives: [
      'Define proper colorings and the chromatic number χ(G)',
      'Compute chromatic numbers of the standard families: Kₙ, Cₙ, bipartite graphs, wheels',
      'State the four color theorem and the elementary 6- and 5-color results',
      'Model scheduling, frequency assignment and resource allocation problems as graph coloring',
    ],
    concepts: [
      {
        term: 'Colorings and the chromatic number',
        kind: 'definition',
        statement:
          'A **proper k-coloring** of a graph is an assignment of one of k colors to each vertex such that **no edge joins two vertices of the same color**. A graph is k-colorable when such a coloring exists; its **chromatic number χ(G)** is the least such k.',
        detail:
          'A proper coloring partitions the vertices into k **independent sets** (sets with no internal edges). Since a k-clique needs k distinct colors, χ(G) ≥ clique number; and choosing distinct colors for all n vertices shows χ(G) ≤ |V| always.',
      },
      {
        term: 'Chromatic numbers of the families',
        kind: 'notation',
        statement:
          '**χ(Kₙ) = n** (every pair conflicts). **χ(Cₙ) = 2 if n is even, 3 if n is odd.** A nonempty bipartite graph has **χ = 2**; a graph with at least one edge needs χ ≥ 2; trees have χ = 2 (or 1 if edgeless); Kₘ,ₙ has χ = 2.',
        detail:
          'Even cycles alternate two colors; odd cycles alternate successfully all the way around until the closing edge forces a third. The odd cycle is the unique obstruction to 2-colorability — this is precisely the bipartite characterization of Section 10.2 returning in new clothes.',
      },
      {
        term: 'The four color theorem',
        kind: 'theorem',
        statement:
          '**Every planar graph is 4-colorable**: the regions of any map (equivalently, the vertices of any planar graph) can be colored with four colors so that adjacent regions receive different colors.',
        detail:
          'Conjectured by Guthrie in 1852, attacked by Kempe’s flawed 1879 proof (whose chain ideas survived), finally proved by Appel and Haken in 1976 with over 1900 computer-checked configurations — the first major computer-assisted proof, still philosophically debated. Robertson, Sanders, Seymour and Thomas simplified it in 1997, and Gonthier formalized it in a proof assistant in 2005.',
      },
      {
        term: 'The five and six color theorems',
        kind: 'theorem',
        statement:
          'Every planar graph is **6-colorable** (easy induction using the degree-≤ 5 vertex lemma) and **5-colorable** (Heawood’s 1890 argument using Kempe chain switching). Both are stepping stones toward the 4-color theorem.',
        detail:
          'The 6-color proof: remove a vertex of degree ≤ 5, color the rest by induction, reinsert and pick a spare color. The 5-color proof adds the observation that among 5 neighbors two can be recolored by swapping two alternating color classes (Kempe chains). The jump to 4 colors is where everything breaks and computers enter.',
      },
      {
        term: 'Modeling conflicts as colorings',
        kind: 'method',
        statement:
          'To solve a separation problem: make each item a vertex, add an edge between every pair of items that conflict, then a proper coloring with k colors = a partition into **k conflict-free groups**. The chromatic number is the minimum number of groups — time slots, frequencies or registers needed.',
        detail:
          'The modeling step is the whole skill: exams that share students must not share a slot; transmitters within range must not share a channel; variables live at the same time must not share a register.',
      },
      {
        term: 'Coloring in practice',
        kind: 'insight',
        statement:
          'Final-exam scheduling (edge = shared student), frequency assignment for cell towers and broadcast stations, register allocation in compilers, timetable construction, and the original map-coloring problem are all chromatic number computations — mostly on graphs whose structure keeps χ small.',
        detail:
          'Computing χ(G) exactly is NP-hard in general, but real conflict graphs are often planar, interval-based or near-bipartite, which is why practical systems can color them well — and why the four color theorem matters far beyond cartography.',
      },
    ],
    examples: [
      {
        title: 'Scheduling final exams',
        problem:
          'Seven courses must be scheduled in the fewest possible exam slots. Courses share students exactly for these pairs: (1,2), (1,3), (1,4), (2,3), (2,4), (3,4), (3,5), (4,6), (5,6), (5,7), (6,7). Find the chromatic number and exhibit a schedule.',
        steps: [
          {
            label: 'Find the clique lower bound',
            text: 'Courses 1, 2, 3, 4 are pairwise adjacent — a K₄ — so at least 4 colors (slots) are necessary.',
          },
          {
            label: 'Color greedily',
            text: 'Course 1 → color A; 2 → B; 3 → C; 4 → D (each conflicts with all previously colored); 5 conflicts only with 3 → A; 6 conflicts with 4 and 5 → B works (4 is D, 5 is A); 7 conflicts with 5 (A) and 6 (B) → C.',
          },
          {
            label: 'Verify the coloring',
            text: 'Slots: A = {1, 5}, B = {2, 6}, C = {3, 7}, D = {4}. Checking every conflict pair shows no slot contains a clashing pair.',
          },
          {
            label: 'Conclude',
            text: 'Four slots suffice and three are impossible (the K₄ forces four), so the chromatic number is exactly 4.',
          },
        ],
        result:
          'χ = 4: exam slots A = {1, 5}, B = {2, 6}, C = {3, 7}, D = {4} — the clique number and the coloring meet exactly.',
      },
      {
        title: 'Chromatic number of cycles',
        problem:
          'Determine χ(Cₙ) for every n ≥ 3, with the reasoning.',
        steps: [
          {
            label: 'Even n: alternate',
            text: 'Walk around the cycle coloring vertices alternately red, blue, red, blue. With an even number of vertices, the sequence closes consistently — the closing edge joins blue to red.',
          },
          {
            label: 'Even n: cannot use one color',
            text: 'A cycle has edges, so χ ≥ 2; hence χ(C_even) = 2.',
          },
          {
            label: 'Odd n: the closing edge breaks',
            text: 'Alternating around an odd cycle returns to the start with the same color as the first vertex, so 2 colors fail on the closing edge — χ ≥ 3. Coloring the vertices around the cycle as 1, 2, 3, 1, 2, 3, … uses 3 colors properly.',
          },
          {
            label: 'Unify',
            text: 'χ(Cₙ) = 2 when n is even and 3 when n is odd — the smallest graphs showing that chromatic number does not require density.',
          },
        ],
        result:
          'Even cycles are bipartite (χ = 2); odd cycles are the minimal 3-chromatic graphs.',
      },
      {
        title: 'Map coloring as graph coloring',
        problem:
          'Explain how coloring a map of countries becomes graph coloring, and why four colors always suffice.',
        steps: [
          {
            label: 'Dualize the map',
            text: 'Place one vertex in each country; join two vertices when their countries share a border segment (not merely a point). Edges = adjacency of regions.',
          },
          {
            label: 'Recognize planarity',
            text: 'Draw each vertex inside its country and route each edge across the shared border: the resulting graph is planar by construction.',
          },
          {
            label: 'Apply the four color theorem',
            text: 'Every planar graph is 4-colorable, so four colors distinguish all neighboring countries — no fifth color is ever needed, however intricate the map.',
          },
          {
            label: 'Note the fine print',
            text: 'Countries must be contiguous (no exclave split into pieces), and meeting at a single point does not count as adjacency — otherwise more colors may be required.',
          },
        ],
        result:
          'Map coloring = coloring the planar dual graph; the four color theorem guarantees 4 colors always suffice.',
      },
    ],
    keyTakeaways: [
      'A proper coloring assigns colors so that every edge joins different colors — a partition into independent sets',
      'χ(Kₙ) = n, χ(Cₙ) = 2 (even n) or 3 (odd n), and bipartite graphs with edges have χ = 2',
      'A k-clique forces χ ≥ k, giving the standard lower bound; greedy coloring gives practical upper bounds',
      'Four color theorem: every planar graph is 4-colorable — proved in 1976 by computer-assisted case analysis',
      'The 6- and 5-color theorems have short elementary proofs using the degree-≤ 5 vertex lemma',
      'Exam scheduling, frequency assignment and register allocation are all chromatic number problems in disguise',
    ],
    quiz: [
      {
        q: 'What is χ(C₇), the chromatic number of the 7-cycle?',
        options: ['2', '3', '4', '7'],
        answer: 1,
        explanation:
          'Two colors alternate 1, 2, 1, 2, 1, 2, 1 — but the seventh vertex is color 1, and the closing edge then joins two color-1 vertices, so 2 fails; 3 colors work as 1, 2, 3, 1, 2, 3, 1. Odd cycles always need exactly 3.',
      },
      {
        q: 'Which graph has chromatic number exactly 5?',
        options: ['K₅', 'The Petersen graph', 'K₅,₅', 'The cube graph Q₃'],
        answer: 0,
        explanation:
          'K₅ needs five colors (a 5-clique forces five distinct colors) and five always suffice — χ(Kₙ) = n. The Petersen graph has χ = 3, K₅,₅ is bipartite with χ = 2, and Q₃ is bipartite with χ = 2.',
      },
      {
        q: 'The four color theorem states that every planar graph can be colored with 4 colors. Why does K₅ not contradict it?',
        options: [
          'K₅ can actually be 4-colored',
          'K₅ is not planar, so the theorem does not apply to it',
          'The theorem applies only to bipartite graphs',
          'K₅ has no proper coloring at all',
        ],
        answer: 1,
        explanation:
          'K₅ is nonplanar (it violates e ≤ 3v − 6), so the four color theorem makes no claim about it — and indeed χ(K₅) = 5. The tension is resolved by planarity, exactly as in Section 10.7.',
      },
      {
        q: 'A university builds a graph whose vertices are courses, with an edge between two courses sharing at least one student. What do the colors in a proper coloring represent?',
        options: [
          'Buildings where exams are held',
          'Exam time slots — every pair in the same slot has no shared students',
          'Instructors assigned to proctor',
          'The number of students in each course',
        ],
        answer: 1,
        explanation:
          'A proper coloring makes each color class an independent set — no conflicts inside a slot — so each color is exactly one conflict-free exam period. The minimum number of colors is the minimum number of slots.',
      },
      // PYQ-pattern: GATE 2013 — chromatic number of an odd cycle (rephrased, values changed)
      {
        q: 'What is the chromatic number $\\chi(C_{5})$ of the cycle on $5$ vertices?',
        options: [`$2$`, `$5$`, `$3$`, `$4$`],
        answer: 2,
        explanation:
          'Step 1: Restate $\\chi(C_{5})$ as the smallest $k$ admitting a proper coloring with $k$ colors. Step 2: Recall the key theorem that a cycle is bipartite exactly when its length is even, so $C_{5}$ needs more than $2$ colors. Step 3: Exhibit a $3$-coloring by coloring consecutive vertices $1, 2, 1, 2, 3$ around the ring, with adjacent vertices always differing. Step 4: Argue $2$ colors fail since alternating $1, 2, 1, 2$ forces the fifth vertex to touch both $1$ and $2$. Step 5: The distractors fail since $5$ counts vertices rather than colors, $4$ invokes a bound that is not tight here, and $2$ ignores oddness. Step 6: Hence $\\chi(C_{5}) = 3$.',
      },
    ],
  },
]
