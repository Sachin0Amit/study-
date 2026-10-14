import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition (Cormen, Leiserson, Rivest,
// & Stein). Chapter 22: Elementary Graph Algorithms (Sections 22.1 – 22.5).
// Master study content.
// ============================================================================

export const clrsCh22Content: SectionContent[] = [
  // ---------------------------------------------------------------- 22.1
  {
    sectionId: "clrs-ch22-s1",
    readingTime: 5,
    intro: "A graph is the book's model for any network — road systems, the web, dependency trees, social ties. Before any traversal can run, we must commit to a data structure, and the two standard encodings trade exactly the things algorithms care about: total space against the cost of one edge query.",
    objectives: [
      "State the graph formalism and the handshaking lemma for undirected graphs",
      "Build both the adjacency-list and adjacency-matrix representations of a given graph",
      "Choose a representation from graph density and the edge-query pattern"
    ],
    concepts: [
      {
        term: "Graphs, directed and undirected",
        kind: "definition",
        statement: "A **graph** is a pair $G = (V, E)$ where $V$ is a finite set of **vertices** and $E$ is a set of **edges**, each an unordered pair (undirected graph) or ordered pair (directed graph, or **digraph**). If $(u, v) \\in E$ we say $v$ is **adjacent to** $u$; in an undirected graph adjacency is symmetric.",
        detail: "The **degree** $\\deg(u)$ counts edges incident to $u$ (in a digraph: indegree and outdegree). For undirected $G$ the **handshaking lemma** holds: $\\sum_{u \\in V} \\deg(u) = 2|E|$ — every edge is counted from both ends, so a graph with an odd number of odd-degree vertices cannot exist."
      },
      {
        term: "Adjacency-list representation",
        kind: "method",
        statement: "An **adjacency list** is an array $Adj$ of $|V|$ lists: $Adj[u]$ holds every vertex $v$ with $(u,v) \\in E$ (in an undirected graph, $u$ appears in $Adj[v]$ and $v$ in $Adj[u]$). Total storage is $\\Theta(V + E)$.",
        detail: "The sum of all list lengths is $|E|$ for a digraph and $2|E|$ for an undirected graph — the handshaking lemma again. Listing the neighbors of $u$ costs $\\Theta(1 + \\deg(u))$, but testing whether a specific edge $(u,v)$ exists costs $O(\\deg(u))$."
      },
      {
        term: "Adjacency-matrix representation",
        kind: "definition",
        statement: "An **adjacency matrix** is a $|V| \\times |V|$ matrix with $a_{ij} = 1$ if $(v_i, v_j) \\in E$ and $a_{ij} = 0$ otherwise. It stores $\\Theta(V^2)$ entries **regardless of how many edges the graph has**.",
        detail: "For an undirected graph the matrix is **symmetric** ($a_{ij} = a_{ji}$), and the $i$-th row (or column) sum is $\\deg(v_i)$. The edge query is $\\Theta(1)$, but listing the neighbors of $u$ costs $\\Theta(V)$ since all $|V|$ entries must be inspected."
      },
      {
        term: "The tradeoff",
        kind: "insight",
        statement: "The two representations trade space and query cost. The list uses $\\Theta(V + E)$ — proportional to the actual graph — while the matrix always pays $\\Theta(V^2)$; so for **sparse** graphs ($|E| \\ll |V|^2$) the list is the CLRS default, and the matrix wins only when the graph is **dense** or when a constant-time edge test is required.",
        detail: "Asymptotically, $\\Theta(V + E)$ can never beat $\\Theta(V^2)$ when $|E| = \\Theta(V^2)$, so the choice is about the regime: an algorithm whose inner loop asks *is this an edge?* wants the matrix; one that iterates over adjacency lists (BFS, DFS, Dijkstra) wants the list."
      },
      {
        term: "Edge weights as attributes",
        kind: "notation",
        statement: "A **weighted** graph carries a function $w : E \\to \\mathbb{R}$. With adjacency lists the weight is stored as an **attribute of the edge object** inside the list; with a matrix the weight itself is stored in $a_{ij}$ (a non-edge being representable by $\\infty$, and $a_{ii} = 0$).",
        detail: "Storing weights in a matrix forces a sentinel for 'no edge': $\\infty$ for non-edges and $0$ on the diagonal is the CLRS convention, since real weights may be $0$ or negative."
      }
    ],
    figures: [
      {
        caption: "One undirected graph ($V = \\{u,v,w,x\\}$, $E = \\{uv, uw, vw, wx\\}$), two encodings. The adjacency list uses $|V| + 2|E| = 12$ cells — exactly the handshaking lemma — while the matrix always occupies $|V|^2 = 16$ cells. Note the matrix is symmetric, and that finding out *whether* $u$ and $w$ are adjacent is one array probe on the right but a walk down $Adj[u]$ on the middle.",
        svg: `<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="A small four-vertex graph shown with its adjacency list and its adjacency matrix side by side"><text x="130" y="30" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">the graph G</text><line x1="96.8" y1="92.4" x2="170" y2="82" stroke="currentColor" stroke-width="1.8"/><line x1="76.9" y1="108.6" x2="103.1" y2="170.4" stroke="currentColor" stroke-width="1.8"/><line x1="178.8" y1="89.9" x2="116.2" y2="180.1" stroke="currentColor" stroke-width="1.8"/><line x1="131.8" y1="202" x2="182.5" y2="224" stroke="currentColor" stroke-width="1.8"/><circle cx="80" cy="100" r="16" fill="currentColor" fill-opacity="0.08"/><circle cx="80" cy="100" r="16" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="80" y="105" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">u</text><circle cx="190" cy="80" r="16" fill="currentColor" fill-opacity="0.08"/><circle cx="190" cy="80" r="16" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="190" y="85" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">v</text><circle cx="100" cy="190" r="16" fill="currentColor" fill-opacity="0.08"/><circle cx="100" cy="190" r="16" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="100" y="195" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">w</text><circle cx="190" cy="230" r="16" fill="currentColor" fill-opacity="0.08"/><circle cx="190" cy="230" r="16" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="190" y="235" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">x</text><text x="310" y="30" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">adjacency lists — Θ(V + E)</text><rect x="240" y="46" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="257" y="64" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">u</text><rect x="278" y="46" width="34" height="26" fill="#10b981" fill-opacity="0.15"/><rect x="278" y="46" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="295" y="64" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">v</text><rect x="316" y="46" width="34" height="26" fill="#10b981" fill-opacity="0.15"/><rect x="316" y="46" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="333" y="64" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">w</text><rect x="354" y="46" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><text x="371" y="64" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">∅</text><rect x="240" y="106" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="257" y="124" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">v</text><rect x="278" y="106" width="34" height="26" fill="#10b981" fill-opacity="0.15"/><rect x="278" y="106" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="295" y="124" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">u</text><rect x="316" y="106" width="34" height="26" fill="#10b981" fill-opacity="0.15"/><rect x="316" y="106" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="333" y="124" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">w</text><rect x="354" y="106" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><text x="371" y="124" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">∅</text><rect x="240" y="166" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="257" y="184" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">w</text><rect x="278" y="166" width="34" height="26" fill="#10b981" fill-opacity="0.15"/><rect x="278" y="166" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="295" y="184" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">u</text><rect x="316" y="166" width="34" height="26" fill="#10b981" fill-opacity="0.15"/><rect x="316" y="166" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="333" y="184" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">v</text><rect x="354" y="166" width="34" height="26" fill="#10b981" fill-opacity="0.15"/><rect x="354" y="166" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="371" y="184" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">x</text><rect x="392" y="166" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><text x="409" y="184" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">∅</text><rect x="240" y="226" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="257" y="244" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">x</text><rect x="278" y="226" width="34" height="26" fill="#10b981" fill-opacity="0.15"/><rect x="278" y="226" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="295" y="244" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">w</text><rect x="316" y="226" width="34" height="26" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><text x="333" y="244" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">∅</text><text x="582" y="30" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">adjacency matrix — Θ(V²)</text><text x="551" y="52" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-style="italic">u</text><text x="587" y="52" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-style="italic">v</text><text x="623" y="52" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-style="italic">w</text><text x="659" y="52" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-style="italic">x</text><text x="533" y="72" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-style="italic">u</text><text x="533" y="102" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-style="italic">v</text><text x="533" y="132" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-style="italic">w</text><text x="533" y="162" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-style="italic">x</text><line x1="541" y1="58" x2="677" y2="58" stroke="currentColor" stroke-width="1"/><line x1="541" y1="58" x2="541" y2="172" stroke="currentColor" stroke-width="1"/><rect x="551" y="80" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="569" y="97" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">0</text><rect x="587" y="80" width="36" height="24" fill="#10b981" fill-opacity="0.18"/><rect x="587" y="80" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="605" y="97" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">1</text><rect x="623" y="80" width="36" height="24" fill="#10b981" fill-opacity="0.18"/><rect x="623" y="80" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="641" y="97" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">1</text><rect x="659" y="80" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="677" y="97" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">0</text><rect x="551" y="110" width="36" height="24" fill="#10b981" fill-opacity="0.18"/><rect x="551" y="110" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="569" y="127" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">1</text><rect x="587" y="110" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="605" y="127" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">0</text><rect x="623" y="110" width="36" height="24" fill="#10b981" fill-opacity="0.18"/><rect x="623" y="110" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="641" y="127" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">1</text><rect x="659" y="110" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="677" y="127" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">0</text><rect x="551" y="140" width="36" height="24" fill="#10b981" fill-opacity="0.18"/><rect x="551" y="140" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="569" y="157" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">1</text><rect x="587" y="140" width="36" height="24" fill="#10b981" fill-opacity="0.18"/><rect x="587" y="140" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="605" y="157" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">1</text><rect x="623" y="140" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="641" y="157" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">0</text><rect x="659" y="140" width="36" height="24" fill="#10b981" fill-opacity="0.18"/><rect x="659" y="140" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="677" y="157" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">1</text><rect x="551" y="170" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="569" y="187" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">0</text><rect x="587" y="170" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="605" y="187" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">0</text><rect x="623" y="170" width="36" height="24" fill="#10b981" fill-opacity="0.18"/><rect x="623" y="170" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="641" y="187" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">1</text><rect x="659" y="170" width="36" height="24" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="677" y="187" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">0</text><text x="609" y="228" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">symmetric: a(ij) = a(ji)</text><text x="609" y="246" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.75">row sums = degrees</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Costing both encodings of the same graph",
        problem: "The undirected graph above has $|V| = 4$ vertices and $|E| = 4$ edges. Compute the storage of each representation and the cost of two queries: 'list the neighbors of $w$' and 'is $(u, x)$ an edge?'",
        steps: [
          { label: "Step 1: List storage", text: "Adjacency lists: $|V|$ headers plus $2|E| = 8$ list cells — 12 cells total, $\\Theta(V + E)$." },
          { label: "Step 2: Matrix storage", text: "The adjacency matrix is $4 \\times 4 = 16$ cells, $\\Theta(V^2)$ — already larger here, and the gap explodes: at $|V| = 10^6$ the matrix is $10^{12}$ cells." },
          { label: "Step 3: Neighbor query", text: "In the list, $Adj[w] = (u, v, x)$: answer in $\\Theta(1 + \\deg(w)) = \\Theta(3)$. In the matrix we must scan row $w$ across all 4 columns: $\\Theta(V)$." },
          { label: "Step 4: Edge membership", text: "In the matrix, read $a_{ux} = 0$ directly: $\\Theta(1)$. In the list we walk $Adj[u] = (v, w)$ and find no $x$: $O(\\deg(u)) = O(2)$ — asymptotically $O(V)$ in the worst case." }
        ],
        result: "The list wins on space for sparse graphs and on neighbor iteration; the matrix wins on the single-cell edge test — the exact trade CLRS asks you to weigh."
      },
      {
        title: "Costing both encodings of the same graph",
        problem: "Undirected graph $V = 5$, $E = 4$ (a tree) versus dense $V = 5$, $E = 10$ (complete). Compare list vs matrix space and edge query.",
        steps: [
          { label: "Sparse tree", text: "Lists: $\\Theta(V+E) = \\Theta(9)$ cells. Matrix: $\\Theta(V^2) = 25$ bits/words: $\\approx 3\\times$ larger." },
          { label: "Dense complete", text: "Lists: $\\Theta(5+10) = 15$ plus pointers. Matrix: $25$: comparable; matrix edge query $O(1)$ vs list $O(\\mathrm{degree}) = O(4)$." },
          { label: "Query", text: "Is $(u,v)$ an edge? Matrix: one array read. Lists: scan $Adj[u]$ ($\\le$ degree steps). Dense graphs favor matrices for queries." },
          { label: "Rule", text: "Sparse ($E = o(V^2)$): lists. Dense ($E = \\Theta(V^2)$): matrix wins on simplicity and $O(1)$ queries for similar space." },
        ],
        result: "Tree: lists $9$ vs matrix $25$; complete: $15$ vs $25$: density decides, queries cost $O(1)$ vs $O(degree)$.",
      },
    ],
    keyTakeaways: [
      "Adjacency lists cost $\\Theta(V + E)$ and are the default for sparse graphs; the matrix costs $\\Theta(V^2)$ no matter what and suits dense graphs.",
      "Edge membership is $\\Theta(1)$ in a matrix but $O(\\deg(u))$ in a list; neighbor iteration is $\\Theta(V)$ in a matrix but proportional to the degree in a list.",
      "In an undirected graph every edge appears in two lists ($\\sum \\deg = 2|E|$) and the adjacency matrix is symmetric."
    ],
    quiz: [
      {
        q: "The total length of all adjacency lists of an undirected graph with $n$ vertices and $m$ edges is:",
        options: ["$m$", "$2m$", "$n + 2m$", "$n^2$"],
        answer: 1,
        explanation: "Each undirected edge $(u,v)$ is stored twice — once in $Adj[u]$ and once in $Adj[v]$. The handshaking lemma $\\sum \\deg(u) = 2m$ is exactly this count. (The $|V|$ headers are separate; the cell count asked about is $2m$.)"
      },
      {
        q: "You must repeatedly answer 'is $(u, v)$ an edge?' in $\\Theta(1)$ time per query. Which representation do you pick?",
        options: ["adjacency lists, always", "adjacency matrix", "either — both give $\\Theta(1)$ edge tests", "neither — the test is $\\Theta(\\log E)$ in both"],
        answer: 1,
        explanation: "The matrix answers with one array probe $a_{uv}$. In a list the test degenerates to a scan of $Adj[u]$, which is $O(\\deg(u))$ and can be $\\Theta(V)$."
      },
      {
        q: "A graph is called sparse when:",
        options: ["$|E| \\approx |V|^2$", "$|E| \\ll |V|^2$", "it has no isolated vertices", "every vertex has even degree"],
        answer: 1,
        explanation: "Sparsity is measured against the quadratic maximum: sparse means the edge count is far below $|V|^2$, which is exactly the regime where the $\\Theta(V+E)$ list beats the $\\Theta(V^2)$ matrix."
      },
      {
        q: "In the adjacency matrix of an undirected graph, the sum of the entries in row $i$ equals:",
        options: ["the number of vertices", "$2|E|$", "the degree of vertex $i$", "the number of connected components"],
        answer: 2,
        explanation: "Row $i$ has a 1 exactly for each neighbor of $v_i$, so its sum is $\\deg(v_i)$. The sum of ALL entries is $2|E|$ — the matrix form of the handshaking lemma."
      }
    ]
  },

  // ---------------------------------------------------------------- 22.2
  {
    sectionId: "clrs-ch22-s2",
    readingTime: 7,
    intro: "Breadth-first search answers the most basic navigation question — what is closest? — by exploring a graph in layers: the source, then everything one hop away, then two hops, and so on. A single FIFO queue holds the frontier, and when the dust settles each vertex carries the minimum number of edges from the source.",
    objectives: [
      "Run BFS by hand, tracking colors, the queue, and d-values",
      "Prove that BFS terminates with d[v] = δ(s, v) for every vertex",
      "Analyze BFS to O(V + E) with the aggregate argument"
    ],
    concepts: [
      {
        term: "Shortest-path distance in edges",
        kind: "definition",
        statement: "The **shortest-path distance** $\\delta(s, v)$ from $s$ to $v$ is the minimum number of edges on any path from $s$ to $v$; if no path exists, $\\delta(s, v) = \\infty$.",
        detail: "This is the *unweighted* notion — BFS minimizes edge count, not total weight; weighted distances are the business of Chapter 24."
      },
      {
        term: "Breadth-first search",
        kind: "method",
        statement: "**BFS** takes a source $s$ and colors every vertex white (undiscovered), then gray (discovered, not finished), then black (finished). It enqueues $s$ with $d[s] = 0$ and repeatedly **dequeues** $u$, scans $Adj[u]$, and for each still-white neighbor $v$ sets $d[v] = d[u] + 1$, records $\\pi[v] = u$, colors $v$ gray, and **enqueues** $v$.",
        detail: "The FIFO discipline is the whole algorithm: vertices enter the queue in nondecreasing order of their $d$-values, which is why layers are discovered in order. Each vertex is enqueued at most once — the color test is the guard."
      },
      {
        term: "BFS computes shortest paths",
        kind: "theorem",
        statement: "**Correctness.** When BFS terminates, $d[v] = \\delta(s, v)$ for every vertex $v \\in V$. Moreover the predecessor subgraph $G_\\pi$ — the vertices reachable from $s$ with their $\\pi$ edges — is a **breadth-first tree** in which the tree path from $s$ to $v$ is a shortest path.",
        detail: "The proof is an induction on the finite distance $\\delta$: when a vertex $u$ with $d[u] = k$ is dequeued, any white neighbor learns $d = k + 1$, and no vertex can be discovered with a $d$-value smaller than its true layer."
      },
      {
        term: "The queue invariant",
        kind: "insight",
        statement: "At every moment the queue holds vertices with **at most two distinct $d$-values**, $k$ and $k + 1$, with all $k$'s in front of all $k+1$'s — the queue always holds one or two consecutive frontier layers, never a mix of distant layers.",
        detail: "This is what makes BFS a *breadth-first* machine: the head of the queue is the closest unfinished frontier vertex, so exploration can never dive before finishing a layer (that would be DFS)."
      },
      {
        term: "Running time",
        kind: "insight",
        statement: "With adjacency lists, BFS runs in $O(V + E)$ time — **linear in the size of the input graph**. Each vertex is enqueued and dequeued at most once ($O(V)$), and every adjacency list is scanned at most once (each edge examined once in a digraph, twice in an undirected graph, for $O(E)$).",
        detail: "This aggregate argument — charging edge scans to the lists rather than to the loops — is the standard tool for every traversal analysis in this chapter. With an adjacency matrix the scan of each row costs $\\Theta(V)$, giving $O(V^2)$."
      }
    ],
    figures: [
      {
        caption: "BFS on a $4 \\times 4$ grid graph from the corner $s$. Each vertex shows its BFS distance $d = \\delta(s,v)$ — the Manhattan distance $i + j$. Solid teal edges form one valid BFS tree (every vertex was discovered from its left neighbor, or from above in the left column); dashed edges are non-tree edges, and every one connects levels $k$ and $k + 1$, never two vertices of the same level. The far corner, at $d = 6$, is reached by $\\binom{6}{3} = 20$ distinct shortest paths — all of them BFS-tree material.",
        svg: `<svg viewBox="0 0 700 430" width="100%" role="img" aria-label="Breadth-first search on a four by four grid graph with distances and a breadth-first tree"><text x="130" y="42" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">s</text><text x="130" y="60" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">source</text><line x1="147" y1="80" x2="253" y2="80" stroke="#10b981" stroke-width="2.5"/><line x1="287" y1="80" x2="393" y2="80" stroke="#10b981" stroke-width="2.5"/><line x1="427" y1="80" x2="533" y2="80" stroke="#10b981" stroke-width="2.5"/><line x1="147" y1="170" x2="253" y2="170" stroke="#10b981" stroke-width="2.5"/><line x1="287" y1="170" x2="393" y2="170" stroke="#10b981" stroke-width="2.5"/><line x1="427" y1="170" x2="533" y2="170" stroke="#10b981" stroke-width="2.5"/><line x1="147" y1="260" x2="253" y2="260" stroke="#10b981" stroke-width="2.5"/><line x1="287" y1="260" x2="393" y2="260" stroke="#10b981" stroke-width="2.5"/><line x1="427" y1="260" x2="533" y2="260" stroke="#10b981" stroke-width="2.5"/><line x1="147" y1="350" x2="253" y2="350" stroke="#10b981" stroke-width="2.5"/><line x1="287" y1="350" x2="393" y2="350" stroke="#10b981" stroke-width="2.5"/><line x1="427" y1="350" x2="533" y2="350" stroke="#10b981" stroke-width="2.5"/><line x1="130" y1="97" x2="130" y2="153" stroke="#10b981" stroke-width="2.5"/><line x1="130" y1="187" x2="130" y2="243" stroke="#10b981" stroke-width="2.5"/><line x1="130" y1="277" x2="130" y2="333" stroke="#10b981" stroke-width="2.5"/><line x1="270" y1="97" x2="270" y2="153" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.45"/><line x1="270" y1="187" x2="270" y2="243" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.45"/><line x1="270" y1="277" x2="270" y2="333" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.45"/><line x1="410" y1="97" x2="410" y2="153" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.45"/><line x1="410" y1="187" x2="410" y2="243" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.45"/><line x1="410" y1="277" x2="410" y2="333" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.45"/><line x1="550" y1="97" x2="550" y2="153" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.45"/><line x1="550" y1="187" x2="550" y2="243" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.45"/><line x1="550" y1="277" x2="550" y2="333" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.45"/><circle cx="130" cy="80" r="17" fill="#10b981" fill-opacity="0.2"/><circle cx="130" cy="80" r="17" fill="none" stroke="#10b981" stroke-width="2"/><text x="130" y="85" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">0</text><circle cx="270" cy="80" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="270" cy="80" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="270" y="85" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">1</text><circle cx="410" cy="80" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="410" cy="80" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="410" y="85" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">2</text><circle cx="550" cy="80" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="550" cy="80" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="550" y="85" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">3</text><circle cx="130" cy="170" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="130" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="130" y="175" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">1</text><circle cx="270" cy="170" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="270" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="270" y="175" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">2</text><circle cx="410" cy="170" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="410" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="410" y="175" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">3</text><circle cx="550" cy="170" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="550" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="550" y="175" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">4</text><circle cx="130" cy="260" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="130" cy="260" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="130" y="265" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">2</text><circle cx="270" cy="260" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="270" cy="260" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="270" y="265" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">3</text><circle cx="410" cy="260" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="410" cy="260" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="410" y="265" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">4</text><circle cx="550" cy="260" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="550" cy="260" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="550" y="265" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">5</text><circle cx="130" cy="350" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="130" cy="350" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="130" y="355" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">3</text><circle cx="270" cy="350" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="270" cy="350" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="270" y="355" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">4</text><circle cx="410" cy="350" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="410" cy="350" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="410" y="355" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">5</text><circle cx="550" cy="350" r="17" fill="#10b981" fill-opacity="0.12"/><circle cx="550" cy="350" r="17" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="550" y="355" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">6</text><text x="597" y="342" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.75">20 shortest</text><text x="597" y="356" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.75">paths end here</text><text x="620" y="80" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.7">level d = 3</text><text x="620" y="260" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.7">level d = 5</text><text x="210" y="418" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="#10b981">— tree edge</text><text x="330" y="418" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.6">– – non-tree edge (levels differ by 1)</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "BFS by hand on a six-vertex graph",
        problem: "Run BFS from $s$ on the undirected graph with $V = \\{s, a, b, c, d, e\\}$ and edges $sa, sb, ac, bc, bd, ce, de$. Track the queue, the distances, and the BFS tree.",
        steps: [
          { label: "Step 1: Initialize", text: "All vertices white. Enqueue $s$ with $d[s] = 0$; queue $= [s]$." },
          { label: "Step 2: Dequeue s", text: "Scan $Adj[s] = (a, b)$: both white. $d[a] = d[b] = 1$, $\\pi[a] = \\pi[b] = s$; enqueue both. Queue $= [a, b]$ — one layer." },
          { label: "Step 3: Dequeue a", text: "$Adj[a] = (s, c)$: $s$ is black; $c$ is white → $d[c] = 2$, $\\pi[c] = a$, enqueue. Queue $= [b, c]$ — still at most two distinct $d$-values ($1$ and $2$)." },
          { label: "Step 4: Dequeue b", text: "$Adj[b] = (s, c, d)$: $c$ is now gray (skip), $d$ is white → $d[d] = 2$, $\\pi[d] = b$. Queue $= [c, d]$." },
          { label: "Step 5: Dequeue c, then d, then e", text: "From $c$: $e$ white → $d[e] = 3$, $\\pi[e] = c$. From $d$: neighbors $c, e$ already discovered. Dequeue $e$: nothing white. Queue empties." }
        ],
        result: "Distances $d = (s{:}0,\\ a{:}1,\\ b{:}1,\\ c{:}2,\\ d{:}2,\\ e{:}3)$; the BFS tree is $\\{sa, sb, ac, bd, ce\\}$, and every path in it from $s$ is a shortest path. Total work: 6 enqueues and 14 adjacency scans — $O(V + E)$."
      },
      {
        title: "BFS layers on a diamond",
        problem: "Graph $s$ connected to $a,b$; $a,b$ both to $t$; no edge $a-b$. BFS from $s$:give $d$ and $\\pi$.",
        steps: [
          { label: "Layer 0-1", text: "Queue $[s]$: dequeue $s$, $d[s] = 0$; discover $a,b$: $d = 1$, $\\pi = s$; queue $[a,b]$." },
          { label: "Layer 2", text: "Dequeue $a$: neighbours $s$ (gray/black, skip), $t$ (white): $d[t] = 2$, $\\pi[t] = a$; queue $[b,t]$. Dequeue $b$: $t$ already gray, no update (BFS keeps first parent)." },
          { label: "Layer 3", text: "Dequeue $t$: neighbours $a,b$ visited. Queue empties. Distances $0,1,1,2$ = $\\delta(s,\\cdot)$." },
          { label: "Tree", text: "BFS tree edges $(s,a),(s,b),(a,t)$: $t$ has two shortest paths of length $2$; BFS records one ($\\pi[t] = a$)." },
        ],
        result: "$d = [0,1,1,2]$, $\\pi[t] = a$: BFS layers are shortest-path distances in edges, $O(V+E)$ total.",
      },
    ],
    keyTakeaways: [
      "BFS explores in layers and terminates with $d[v] = \\delta(s,v)$ — the minimum number of edges from the source.",
      "The FIFO queue holds at most two consecutive layers, which is exactly why discovery proceeds breadth-first.",
      "With adjacency lists BFS is $O(V + E)$; with a matrix it is $O(V^2)$."
    ],
    quiz: [
      {
        q: "BFS from $s$ computes, for every vertex $v$:",
        options: ["the minimum total edge weight from $s$ to $v$", "the minimum number of edges on a path from $s$ to $v$", "the number of distinct paths from $s$ to $v$", "the length of the DFS path from $s$ to $v$"],
        answer: 1,
        explanation: "BFS minimizes edge count — the unweighted distance $\\delta(s,v)$. Weighted distances need the algorithms of Chapter 24 (Bellman-Ford, Dijkstra)."
      },
      {
        q: "At any moment during BFS, the queue contains:",
        options: ["only black vertices", "vertices with at most two distinct d-values, the smaller ones in front", "every vertex of the current layer and all earlier layers", "only white vertices"],
        answer: 1,
        explanation: "The FIFO discipline keeps the queue holding one or two consecutive layers: the head carries distance $k$, and new discoveries (distance $k+1$) join at the back. This invariant is the engine of the correctness proof."
      },
      {
        q: "In an undirected graph, an edge that is NOT a BFS tree edge connects two vertices whose distances differ by:",
        options: ["exactly 2 or more", "at most 1", "exactly 0", "an arbitrary amount"],
        answer: 1,
        explanation: "When the endpoint with the smaller $d$ is dequeued, the other endpoint is either white (and it becomes a tree edge) or already discovered at $d + 1$ — same-level non-tree edges are impossible: the first of the two to be dequeued would have claimed the other as a child."
      },
      {
        q: "The running time of BFS with adjacency lists is:",
        options: ["$O(V^2)$", "$O(V + E)$", "$O(E \\lg V)$", "$O(VE)$"],
        answer: 1,
        explanation: "Each vertex is enqueued/dequeued at most once ($O(V)$) and each edge is scanned once per direction ($O(E)$) — the aggregate argument. $O(V^2)$ is the matrix-based running time."
      },
      // PYQ-pattern: GATE 2018 — BFS layer distances (rephrased, values changed)
      {
        q: "Undirected edges are $s-a, s-b, a-c, b-c, c-d$. Breadth-first search from $s$ assigns what distance to $d$?",
        options: ["2", "3", "4", "1"],
        answer: 1,
        explanation: "Step 1 — Given: five edges, source $s$. Step 2 — Governing order: FIFO layers, each vertex records fewest edges from $s$, every edge joins same or adjacent layers. Step 3 — Trace: layer $0$: ${s}$; layer $1$: ${a, b}$; layer $2$: ${c}$ via either side; layer $3$: ${d}$ via $c$; so $d.s = 3$ with parent $c$. Step 4 — Sanity check: $a$ and $b$ tie at $1$, the $a-c-b$ triangle sits in layers $1$–$2$ legally, and no shortcut to $d$ exists. Step 5 — Distractor analysis: $2$ stops at $c$, $4$ double-counts the triangle, and $1$ claims adjacency that is absent. Step 6 — Conclude: distance $3$.",
      },
    ]
  },

  // ---------------------------------------------------------------- 22.3
  {
    sectionId: "clrs-ch22-s3",
    readingTime: 8,
    intro: "Depth-first search goes the other way: it chases edges as deep as possible before backtracking. The payoff is not distances but structure — two timestamps per vertex that nest like parentheses, an edge taxonomy that reveals cycles, and the machinery on which topological sort and strongly connected components are built.",
    objectives: [
      "Execute DFS and compute discovery and finish times",
      "Apply the parenthesis theorem to reason about intervals",
      "Classify every edge as tree, back, forward, or cross using the timestamps",
    ],
    concepts: [
      {
        term: "Depth-first search",
        kind: "method",
        statement: "**DFS** stamps each vertex $u$ with a **discovery time** $d[u]$ when it is first reached and a **finish time** $f[u]$ when its adjacency list is exhausted and the recursion unwinds. It keeps a global clock that ticks once per stamp, so all $2|V|$ timestamps are the distinct integers $1, \\dots, 2|V|$; always $d[u] < f[u]$.",
        detail: "White vertices are undiscovered, gray vertices are on the current recursion stack, black vertices are finished. DFS is typically run over all vertices (starting a new root whenever the forest is not yet exhausted), producing a **depth-first forest** of trees plus, in a digraph, the other edge kinds below."
      },
      {
        term: "The parenthesis theorem",
        kind: "theorem",
        statement: "For any two vertices $u, v$, the intervals $[d[u], f[u]]$ and $[d[v], f[v]]$ are either **disjoint** or **one contains the other** — never partially overlapping. $u$ is a descendant of $v$ in the DFS forest iff $[d[u], f[u]] \\subseteq [d[v], f[v]]$.",
        detail: "Read the discovery/finish stamps as parentheses: an execution trace prints `( u ( v ( w w ) v ) u )` — properly nested, with descendants nested inside ancestors and unrelated vertices side by side. Any claimed DFS output that is not a valid parenthesis string is wrong."
      },
      {
        term: "The white-path theorem",
        kind: "theorem",
        statement: "Vertex $v$ is a descendant of $u$ in the DFS forest **iff** at time $d[u]$ there exists a path from $u$ to $v$ consisting entirely of then-white vertices.",
        detail: "This is the bridge from graph reachability to forest structure: what DFS can possibly reach through fresh vertices, it does reach, as descendants."
      },
      {
        term: "Edge classification",
        kind: "definition",
        statement: "DFS colors every edge of a digraph as exactly one of: **tree edge** ($v$ white when $(u,v)$ is explored — it creates the child), **back edge** ($v$ gray — $v$ is an ancestor of $u$; self-loops count as back edges), **forward edge** ($v$ black and $d[u] < d[v]$ — to a descendant), **cross edge** ($v$ black and $d[v] < d[u]$ — to a previously finished vertex).",
        detail: "In an **undirected** graph only tree and back edges can occur: any edge that would classify as forward or cross is seen from the other endpoint first, while that endpoint is still gray, and thus counts as back. Cross edges always point from a later-discovered vertex to an earlier-finished one."
      },
      {
        term: "Back edges characterize acyclicity",
        kind: "theorem",
        statement: "A directed graph $G$ is **acyclic iff a DFS of $G$ produces no back edges**.",
        detail: "A back edge $(u, v)$ with $v$ an ancestor closes a cycle along tree path $v \\leadsto u$ plus the edge. Conversely, if a cycle exists, let $v$ be its first-discovered vertex: the entire rest of the cycle is white at time $d[v]$ (white-path theorem), so DFS reaches the cycle edge back into $v$ while $v$ is still gray. This test is the heart of topological sort in the next section. Total DFS cost: $\\Theta(V + E)$."
      }
    ],
    figures: [
      {
        caption: "One DFS over a digraph, showing discovery/finish stamps and all four edge types. Edges are explored in adjacency-list order: $u$ discovers $v$, which discovers $y$, which discovers $x$; $x \\to v$ finds $v$ still gray — a **back edge** closing the cycle $v \\to y \\to x \\to v$. Later $u \\to x$ finds $x$ black with $d[u] < d[x]$ — a **forward edge** — and the fresh root $w$ points at the long-finished $y$ ($f[y] = 6 < d[w] = 9$) — a **cross edge**. The parenthesis string $(u\\,(v\\,(y\\,(x\\,x)\\,y)\\,v)\\,u)\\,(w\\,(z\\,z)\\,w)$ is properly nested.",
        svg: `<svg viewBox="0 0 720 460" width="100%" role="img" aria-label="A directed graph after DFS with discovery and finish times and tree, back, forward, and cross edges distinguished"><line x1="124.6" y1="181.4" x2="265.4" y2="98.6" stroke="#10b981" stroke-width="2.5"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(265.4,98.6) rotate(-30.5)"/><line x1="297" y1="90" x2="463" y2="90" stroke="#10b981" stroke-width="2.5"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(463,90) rotate(0)"/><line x1="480" y1="107" x2="480" y2="223" stroke="#10b981" stroke-width="2.5"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(480,223) rotate(90)"/><path d="M 495.2,232.4 Q 630,165 296.6,93.6" fill="none" stroke="#f59e0b" stroke-width="2.5"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#f59e0b" transform="translate(296.6,93.6) rotate(-167.9)"/><path d="M 126.9,192.3 Q 300,262 463.2,237.7" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(463.2,237.7) rotate(-8.5)"/><line x1="124.1" y1="330.5" x2="465.9" y2="99.5" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 4" opacity="0.55"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="currentColor" transform="translate(465.9,99.5) rotate(-34.1)" opacity="0.75"/><line x1="126.4" y1="344.5" x2="313.6" y2="395.5" stroke="#10b981" stroke-width="2.5"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(313.6,395.5) rotate(15.3)"/><circle cx="110" cy="190" r="17" fill="#10b981" fill-opacity="0.08"/><circle cx="110" cy="190" r="17" fill="none" stroke="#10b981" stroke-width="2"/><text x="110" y="195" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">u</text><text x="110" y="164" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">1/8</text><circle cx="280" cy="90" r="17" fill="#10b981" fill-opacity="0.08"/><circle cx="280" cy="90" r="17" fill="none" stroke="#10b981" stroke-width="2"/><text x="280" y="95" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">v</text><text x="280" y="64" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">2/7</text><circle cx="480" cy="90" r="17" fill="#10b981" fill-opacity="0.08"/><circle cx="480" cy="90" r="17" fill="none" stroke="#10b981" stroke-width="2"/><text x="480" y="95" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">y</text><text x="480" y="64" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">3/6</text><circle cx="480" cy="240" r="17" fill="#10b981" fill-opacity="0.08"/><circle cx="480" cy="240" r="17" fill="none" stroke="#10b981" stroke-width="2"/><text x="480" y="245" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">x</text><text x="514" y="245" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="start">4/5</text><circle cx="110" cy="340" r="17" fill="#10b981" fill-opacity="0.08"/><circle cx="110" cy="340" r="17" fill="none" stroke="#10b981" stroke-width="2"/><text x="110" y="345" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">w</text><text x="82" y="375" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">9/12</text><circle cx="330" cy="400" r="17" fill="#10b981" fill-opacity="0.08"/><circle cx="330" cy="400" r="17" fill="none" stroke="#10b981" stroke-width="2"/><text x="330" y="405" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">z</text><text x="330" y="433" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">10/11</text><line x1="560" y1="46" x2="584" y2="46" stroke="#10b981" stroke-width="2.5"/><text x="590" y="50" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">tree</text><line x1="560" y1="70" x2="584" y2="70" stroke="#f59e0b" stroke-width="2.5"/><text x="590" y="74" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">back — a cycle!</text><line x1="560" y1="94" x2="584" y2="94" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4"/><text x="590" y="98" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">forward</text><line x1="560" y1="118" x2="584" y2="118" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 4" opacity="0.55"/><text x="590" y="122" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">cross</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Stamps and classifications on a six-vertex digraph",
        problem: "Run DFS on the digraph with adjacency lists $u{:}(v,x)$, $v{:}(y)$, $y{:}(x)$, $x{:}(v)$, $w{:}(y,z)$, $z{:}()$, starting at $u$ then restarting at $w$. Give every timestamp and classify all seven edges.",
        steps: [
          { label: "Step 1: The deep dive", text: "$d[u]=1$; explore $u \\to v$: $d[v]=2$; $v \\to y$: $d[y]=3$; $y \\to x$: $d[x]=4$. Now $x$'s neighbor $v$ is gray → **back edge** $x \\to v$; $f[x]=5$, $f[y]=6$, $f[v]=7$." },
          { label: "Step 2: Close the first tree", text: "Back in $u$'s list, the next neighbor $x$ is black with $d[u]=1 < d[x]=4$ → **forward edge** $u \\to x$. Then $f[u]=8$." },
          { label: "Step 3: A fresh root", text: "$w$ is still white: $d[w]=9$. Its neighbor $y$ is black with $f[y]=6 < d[w]$ — $y$ finished before $w$ even started → **cross edge** $w \\to y$." },
          { label: "Step 4: Finish the forest", text: "$w \\to z$: $z$ is white → **tree edge**; $d[z]=10$, $f[z]=11$, $f[w]=12$. All 12 stamps are distinct, as they must be." }
        ],
        result: "Stamps $u{:}1/8$, $v{:}2/7$, $y{:}3/6$, $x{:}4/5$, $w{:}9/12$, $z{:}10/11$. Tree edges $uv, vy, yx, wz$; back edge $xv$ (the graph has exactly one cycle, $v \\to y \\to x \\to v$); forward edge $ux$; cross edge $wy$. Intervals: $[1,8] \\supset [2,7] \\supset [3,6] \\supset [4,5]$, and $[9,12] \\supset [10,11]$ — the parenthesis theorem verified."
      },
      {
        title: "Forward edge that is not tree",
        problem: "DFS on $1 \\to 2 \\to 3$ plus edge $1 \\to 3$. Classify $1 \\to 3$ with timestamps.",
        steps: [
          { label: "DFS", text: "Discover $1$ at $1$; discover $2$ at $2$; discover $3$ at $3$; finish $3$ at $4$; finish $2$ at $5$; edge $1 \\to 3$ examined when $3$ already finished? Order matters: adjacency order $2$ before $3$ means $1 \\to 3$ is examined after returning from $2$'s subtree, so $3$ is finished (black)." },
          { label: "Classify", text: "$d[1] = 1 < d[3] = 3 < f[3] = 4 < f[1] = 6$: $3$ is a descendant finished before $1$: forward edge (downward, non-tree)." },
          { label: "Versus cross", text: "In undirected DFS every non-tree edge is a back edge; directed forward edges need the descendant interval strictly inside the ancestor's: $d[u] < d[v] < f[v] < f[u]$." },
          { label: "Acyclicity", text: "No back edge appears, so the graph is acyclic despite two paths to $3$: forward edges do not create cycles." },
        ],
        result: "$1 \\to 3$ is forward (intervals $[1,6] \\supset [3,4]$); DFS edge taxonomy distinguishes tree/forward/back/cross from timestamps alone.",
      },
    ],
    keyTakeaways: [
      "DFS stamps discovery/finish times $1..2|V|$; intervals nest (ancestor/descendant) or are disjoint, never partially overlapping.",
      "Edge type is readable from the stamps: tree (child white), back (to a gray ancestor — this is the cycle detector), forward (to a black descendant), cross (to a vertex already finished).",
      "A digraph is acyclic iff DFS yields no back edges; in undirected graphs only tree and back edges ever appear."
    ],
    quiz: [
      {
        q: "During DFS, an edge $(u, v)$ is a **back edge** precisely when:",
        options: ["$v$ is white when the edge is explored", "$v$ is gray when the edge is explored", "$v$ is black and $d[u] < d[v]$", "$v$ is black and $f[v] < d[u]$"],
        answer: 1,
        explanation: "Gray means $v$ sits on the current recursion stack — an ancestor of $u$ — so $(u,v)$ closes a cycle through the tree path from $v$ to $u$. White gives a tree edge; black splits into forward or cross by comparing timestamps."
      },
      {
        q: "A classmate reports a DFS in which $d[u]=3, f[u]=12$, $d[v]=5, f[v]=8$, $d[w]=10, f[w]=14$, all in one tree. What does the parenthesis theorem let you conclude?",
        options: ["valid: $u$, $v$, $w$ can all nest in one tree", "invalid: the intervals $[3,12]$ and $[10,14]$ partially overlap, which the theorem forbids", "valid: $w$ is an ancestor of $u$", "invalid: discovery times must be consecutive integers"],
        answer: 1,
        explanation: "The stamps for $u$ and $v$ are fine — $[5,8] \\subset [3,12]$ nests. But $[3,12]$ and $[10,14]$ partially overlap: $w$ is discovered inside $u$'s interval yet finishes after it. Intervals must be nested or disjoint, so no DFS can produce these stamps."
      },
      {
        q: "Which edge types can appear in a DFS of an **undirected** graph?",
        options: ["all four types", "tree, back, and cross only", "tree and forward only", "tree and back only"],
        answer: 3,
        explanation: "Whatever would have been a forward or cross edge in the directed reading is encountered from the other endpoint while that endpoint is still gray, so it registers as back. Self-loops also classify as back edges."
      },
      {
        q: "You must decide whether a large directed graph has a cycle. The cheapest correct method is:",
        options: ["run BFS from every vertex and check reachability", "run one DFS and check for back edges", "sort the vertices by degree and inspect the top ones", "compute the transpose and compare edge counts"],
        answer: 1,
        explanation: "A digraph is acyclic iff DFS produces no back edges — one $\\Theta(V+E)$ traversal decides it. BFS says nothing about cycles, and per-vertex reachability is quadratic."
      }
    ]
  },

  // ---------------------------------------------------------------- 22.4
  {
    sectionId: "clrs-ch22-s4",
    readingTime: 6,
    intro: "A topological sort orders a directed acyclic graph so every edge points forward — the order in which dependency-structured work may actually be done. Remarkably, DFS already computes it: list the vertices as they finish, and the reverse finishing order is a valid topological order.",
    objectives: [
      "Define topological order and prove it exists exactly for DAGs",
      "Produce a topological sort by listing vertices in decreasing finish time",
      "Explain why every edge (u, v) forces f[v] < f[u]"
    ],
    concepts: [
      {
        term: "Topological sort",
        kind: "definition",
        statement: "A **topological sort** of a dag $G = (V, E)$ is a linear ordering of its vertices such that for every edge $(u, v) \\in E$, $u$ appears **before** $v$ in the ordering. It is the dependency order: if $u$ must precede $v$, then $u$ comes first in the list.",
        detail: "The output is generally not unique — a DAG can have many topological orders. Cycles destroy the notion entirely: no linear order can put every vertex of a cycle before its own successor."
      },
      {
        term: "Existence theorem",
        kind: "theorem",
        statement: "A directed graph has a topological sort **iff it is a DAG**. Every DAG has at least one source and at least one sink, and an ordering can be peeled off from sources — or produced wholesale by DFS.",
        detail: "This is why acyclicity (tested by DFS back edges in $\\Theta(V+E)$) is a precondition: a graph with a cycle admits no topological order at all."
      },
      {
        term: "The DFS finishing-time algorithm",
        kind: "method",
        statement: "**TOPOLOGICAL-SORT:** run DFS on $G$; as each vertex finishes, insert it onto the **front** of a linked list. The final list is a topological order — equivalently, **sort the vertices by decreasing finish time**.",
        detail: "The entire algorithm is DFS plus $O(1)$ work per vertex, so it runs in $\\Theta(V + E)$. Note it is finish time, not discovery time, that orders the vertices — the counterintuitive heart of the method."
      },
      {
        term: "Why finish times work",
        kind: "insight",
        statement: "For every edge $(u, v)$ of a DAG, $f[v] < f[u]$ — **the head of every edge finishes before its tail**. Case analysis at discovery: if $v$ is white, it becomes a descendant and finishes first; if $v$ is gray, $(u,v)$ is a back edge, impossible in a DAG; if $v$ is black, it has already finished before $u$ does.",
        detail: "So sorting by decreasing $f$ places $u$ before $v$ along every edge. The gray case is exactly where acyclicity is used — one hypothesis, one case, the whole proof."
      },
      {
        term: "Kahn's indegree method",
        kind: "method",
        statement: "Repeatedly emit a vertex of indegree $0$ and delete it (decrementing successors' indegrees) with a queue. Same $\\Theta(V+E)$ bound as DFS-finish-time order, but produces the lexicographically smallest order when the queue is a min-heap and exposes the DAG test: leftover vertices iff a cycle exists.",
        detail: "DFS method is recursive and needs finish times; Kahn is iterative and needs indegrees. Both are $\\Theta(V+E)$; Kahn is often simpler to implement and to parallelize by levels.",
      },
    ],
    examples: [
      {
        title: "Ordering a six-vertex DAG by finish time",
        problem: "Run DFS on the DAG with edges $a{\\to}b$, $a{\\to}c$, $b{\\to}d$, $c{\\to}d$, $d{\\to}e$, $c{\\to}f$, $e{\\to}f$ (adjacency in alphabetical order, roots alphabetical) and produce the topological order.",
        steps: [
          { label: "Step 1: DFS from a", text: "$d[a]=1$; then $b$: $d[b]=2$; then $d$: $d[d]=3$; then $e$: $d[e]=4$; then $f$: $d[f]=5$, $f[f]=6$ (no neighbors). Unwind: $f[e]=7$, $f[d]=8$, $f[b]=9$." },
          { label: "Step 2: Second subtree of a", text: "Back at $a$, explore $c$: $d[c]=10$. Its targets $d$ and $f$ are already black — both are **cross edges** here ($f[d]=8$ and $f[f]=6$ both precede $d[c]$). $f[c]=11$, then $f[a]=12$." },
          { label: "Step 3: Sort by decreasing finish", text: "Finish times: $a{=}12,\\ c{=}11,\\ b{=}9,\\ d{=}8,\\ e{=}7,\\ f{=}6$. Decreasing order gives $a, c, b, d, e, f$." },
          { label: "Step 4: Verify every edge", text: "Check positions: $a(1) \\to b(3)$ ✓, $a(1) \\to c(2)$ ✓, $b(3) \\to d(4)$ ✓, $c(2) \\to d(4)$ ✓, $d(4) \\to e(5)$ ✓, $c(2) \\to f(6)$ ✓, $e(5) \\to f(6)$ ✓ — all seven edges point forward." }
        ],
        result: "Topological order $a, c, b, d, e, f$. Note $c$ precedes $b$ even though DFS discovered $b$ first — discovery order would give a wrong answer ($a, b, c, \\dots$ also happens to work here, but only finish time is guaranteed in general)."
      },
      {
        title: "Two valid orders, one DFS finish list",
        problem: "DAG: $a \\to b$, $a \\to c$, $b \\to d$, $c \\to d$. DFS from $a$ (adjacency $b$ before $c$) gives finish order; list two topological sorts.",
        steps: [
          { label: "DFS finishes", text: "Discover $a(1)$, $b(2)$, $d(3)$, finish $d(4)$, finish $b(5)$, discover $c(6)$, finish $c(7)$, finish $a(8)$: decreasing $f$: $a(8), c(7), b(5), d(4)$: order $a,c,b,d$." },
          { label: "Valid?", text: "Check $a$ before $b,c$ ✓, $b,c$ before $d$ ✓: $a,c,b,d$ is topological though DFS explored $b$ first." },
          { label: "Another", text: "$a,b,c,d$ is also topological (swap incomparable $b,c$): DAGs have many orders; DFS returns one arbitrarily." },
          { label: "Edge rule", text: "Every edge $u \\to v$ satisfies $f[v] < f[u]$ ($d:4 < b:5 < a:8$ and $d:4 < c:7 < a:8$): finish-time order reversed is always topological." },
        ],
        result: "$a,c,b,d$ (DFS) and $a,b,c,d$ both valid; decreasing finish times $8,7,5,4$ certify each edge goes forward.",
      },
    ],
    keyTakeaways: [
      "A topological order exists iff the digraph is acyclic; every edge must point from an earlier vertex to a later one.",
      "DFS computes it for free: order vertices by decreasing finish time, i.e., insert each vertex at the head of a list as it finishes.",
      "Correctness rests on $f[v] < f[u]$ for every edge $(u,v)$ — the gray-vertex case is precisely where acyclicity is invoked. Cost: $\\Theta(V + E)$."
    ],
    quiz: [
      {
        q: "TOPOLOGICAL-SORT outputs the vertices of a DAG in:",
        options: ["increasing discovery time", "decreasing finish time", "increasing degree order", "the order in which they turn gray"],
        answer: 1,
        explanation: "Each vertex is pushed onto the front of a list when it finishes, so the list reads in decreasing finish time. Discovery order has no such guarantee — this section's own example discovers $b$ before $c$ yet the valid output places $c$ first."
      },
      {
        q: "The proof that every edge $(u,v)$ satisfies $f[v] < f[u]$ breaks into cases on the color of $v$ when $(u,v)$ is explored. Which case does the DAG hypothesis eliminate?",
        options: ["$v$ white — the tree-edge case", "$v$ gray — the back-edge case", "$v$ black — the already-finished case", "none; all three cases are fine in a DAG"],
        answer: 1,
        explanation: "A gray $v$ would make $(u,v)$ a back edge, i.e., a cycle — impossible in a DAG. The white case finishes $v$ as a descendant of $u$; the black case has $v$ already finished. Both yield $f[v] < f[u]$."
      },
      {
        q: "Your task manager must schedule jobs with precedence constraints, but the constraint graph contains a cycle. What does that mean?",
        options: ["the jobs should be scheduled by decreasing finish time anyway", "no valid schedule exists — the constraints are contradictory", "run BFS instead of DFS to repair the order", "the cycle can be broken by reversing one edge"],
        answer: 1,
        explanation: "A cycle in the dependency digraph is mutual precedence — each job must precede the next around the loop — so no linear order satisfies the constraints. The system is infeasible; detecting the cycle (DFS back edge) is the diagnostic."
      },
      {
        q: "The total running time of TOPOLOGICAL-SORT (including the DFS) on $G = (V, E)$ with adjacency lists is:",
        options: ["$\\Theta(V)$", "$\\Theta(V + E)$", "$\\Theta(V \\lg V)$", "$\\Theta(VE)$"],
        answer: 1,
        explanation: "DFS costs $\\Theta(V+E)$ and each list insertion is $O(1)$ per vertex — the ordering is a by-product of the traversal, not an extra sort."
      }
    ]
  },

  // ---------------------------------------------------------------- 22.5
  {
    sectionId: "clrs-ch22-s5",
    readingTime: 7,
    intro: "Strongly connected components collapse a digraph into its irreversible pieces: within a component everything reaches everything; between components the reachability is one-way only. The CLRS algorithm finds all components with two DFS passes — one on the graph, one on its transpose — in linear time.",
    objectives: [
      "Define strong connectivity and the component (condensation) graph",
      "Run the two-pass transpose-graph algorithm on a small digraph",
      "Explain why pass 2 on the transpose harvests exactly one component per tree"
    ],
    concepts: [
      {
        term: "Strongly connected components",
        kind: "definition",
        statement: "Vertices $u, v$ are **strongly connected** if each is reachable from the other ($u \\leadsto v$ and $v \\leadsto u$; every vertex is strongly connected to itself). A **strongly connected component (SCC)** is a maximal set of mutually reachable vertices.",
        detail: "The SCCs partition $V$. A digraph is strongly connected iff it has a single component. Cycles are the mechanism: any directed cycle's vertices all land in one component, and merging overlapping cycles merges components."
      },
      {
        term: "The component graph",
        kind: "definition",
        statement: "Contract every SCC to a single node; the result $G^{SCC}$ — the **component graph** or condensation — is always a **DAG**. An edge runs from component $A$ to component $B$ whenever some edge of $G$ crosses from a vertex of $A$ to a vertex of $B$.",
        detail: "It must be acyclic: a cycle among components would merge them into one SCC, contradicting maximality. Topologically ordering the condensation is exactly what the second pass of the algorithm does implicitly."
      },
      {
        term: "The transpose graph",
        kind: "notation",
        statement: "The **transpose** $G^T$ is $G$ with every edge reversed: $(u,v) \\in E$ iff $(v,u) \\in E^T$. It takes $\\Theta(V + E)$ to build, and crucially $G$ and $G^T$ have **exactly the same SCCs** — mutual reachability is a symmetric relation.",
        detail: "The component graph of $G^T$ is the transpose of the component graph of $G$: sources and sinks swap. That swap is the hinge of the algorithm — what was a source in one condensation is a sink in the other."
      },
      {
        term: "The two-pass algorithm",
        kind: "method",
        statement: "**STRONGLY-CONNECTED-COMPONENTS:** (1) run DFS on $G$, computing finish times; (2) compute $G^T$; (3) run DFS on $G^T$, but process the roots of the main loop in **decreasing finish time** from pass 1. Each DFS tree of pass 2 is exactly **one SCC**, and the trees come out in topological order of the condensation.",
        detail: "Total: $\\Theta(V + E)$. Intuition: the vertex with the highest finish time lies in a **source** component of $G$'s condensation; in $G^T$ that component is a **sink**, so the DFS started there cannot escape it — one tree, one component. Repeating on the remaining highest-finish vertex harvests components in topological order."
      },
      {
        term: "Condensation is a DAG",
        kind: "theorem",
        statement: "Contracting each strongly connected component to one node yields the component graph $G^{SCC}$, which is always a directed acyclic graph: a directed cycle among components would merge them into one component.",
        detail: "Hence $G^{SCC}$ has a topological order, and the second DFS pass processes components in reverse topological order of $G^T$ (topological order of $G$): each tree it grows is exactly one SCC.",
      },
    ],
    figures: [
      {
        caption: "Pass 1 stamps finish times $f$ on $G$ (small gray labels). Pass 2 runs DFS on the transpose $G^T$, taking roots in decreasing $f$ — here $p(16), q(15), r(14), s(13), \\dots$ — and each tree it grows is exactly one SCC: $A = \\{p,q,r\\}$, then $B = \\{s,t,u\\}$, then $C = \\{v,w\\}$, i.e., in topological order of the condensation on the right. The edges $r \\to s$ and $u \\to v$ are the only inter-component edges — any path from $C$ back to $A$ or $B$ would have closed a bigger cycle.",
        svg: `<svg viewBox="0 0 720 440" width="100%" role="img" aria-label="A directed graph with three strongly connected components and its condensation directed acyclic graph"><text x="230" y="28" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">G with pass-1 finish times</text><line x1="124.3" y1="105.6" x2="225.7" y2="74.4" stroke="#10b981" stroke-width="1.8"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(225.7,74.4) rotate(-17.1)"/><line x1="233.1" y1="83.3" x2="181.9" y2="181.7" stroke="#10b981" stroke-width="1.8"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(181.9,181.7) rotate(117.5)"/><line x1="165.9" y1="183.1" x2="119.1" y2="121.9" stroke="#10b981" stroke-width="1.8"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(119.1,121.9) rotate(-127.4)"/><line x1="168.5" y1="208.5" x2="126.5" y2="296.5" stroke="currentColor" stroke-width="1.6"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="currentColor" transform="translate(126.5,296.5) rotate(115.6)"/><line x1="134.6" y1="306.6" x2="235.4" y2="283.4" stroke="#10b981" stroke-width="1.8"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(235.4,283.4) rotate(-13)"/><line x1="241.5" y1="292.4" x2="193.5" y2="362.6" stroke="#10b981" stroke-width="1.8"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(193.5,362.6) rotate(124.4)"/><line x1="174.4" y1="364.4" x2="130.6" y2="320.6" stroke="#10b981" stroke-width="1.8"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(130.6,320.6) rotate(-135)"/><line x1="198.8" y1="369.1" x2="346.2" y2="305.9" stroke="currentColor" stroke-width="1.6"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="currentColor" transform="translate(346.2,305.9) rotate(-23.2)"/><path d="M 374.9,299 Q 435,295 455.3,355.8" fill="none" stroke="#10b981" stroke-width="1.8"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(455.3,355.8) rotate(71.6)"/><path d="M 445,371 Q 385,375 364.7,314.2" fill="none" stroke="#10b981" stroke-width="1.8"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(364.7,314.2) rotate(-108.4)"/><circle cx="110" cy="110" r="15" fill="currentColor" fill-opacity="0.06"/><circle cx="110" cy="110" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="110" y="115" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">p</text><text x="110" y="88" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7">f 16</text><circle cx="240" cy="70" r="15" fill="currentColor" fill-opacity="0.06"/><circle cx="240" cy="70" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="240" y="75" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">q</text><text x="240" y="48" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7">f 15</text><circle cx="175" cy="195" r="15" fill="currentColor" fill-opacity="0.06"/><circle cx="175" cy="195" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="175" y="200" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">r</text><text x="210" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="start" opacity="0.7">f 14</text><circle cx="120" cy="310" r="15" fill="currentColor" fill-opacity="0.06"/><circle cx="120" cy="310" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="120" y="315" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">s</text><text x="82" y="308" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.7">f 13</text><circle cx="250" cy="280" r="15" fill="currentColor" fill-opacity="0.06"/><circle cx="250" cy="280" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="250" y="285" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">t</text><text x="256" y="260" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="start" opacity="0.7">f 12</text><circle cx="185" cy="375" r="15" fill="currentColor" fill-opacity="0.06"/><circle cx="185" cy="375" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="185" y="380" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">u</text><text x="185" y="404" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7">f 11</text><circle cx="360" cy="300" r="15" fill="currentColor" fill-opacity="0.06"/><circle cx="360" cy="300" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="360" y="305" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">v</text><text x="354" y="335" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.7">f 10</text><circle cx="460" cy="370" r="15" fill="currentColor" fill-opacity="0.06"/><circle cx="460" cy="370" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="460" y="375" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">w</text><text x="460" y="348" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7">f 9</text><text x="610" y="28" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">component graph (a DAG)</text><rect x="540" y="46" width="145" height="52" rx="10" fill="#10b981" fill-opacity="0.08"/><rect x="540" y="46" width="145" height="52" rx="10" fill="none" stroke="#10b981" stroke-width="1.5"/><text x="612" y="68" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">A = {p, q, r}</text><text x="612" y="86" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7">discovered 1st in pass 2</text><line x1="612" y1="98" x2="612" y2="152" stroke="#10b981" stroke-width="2"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(612,152) rotate(90)"/><rect x="540" y="156" width="145" height="52" rx="10" fill="#10b981" fill-opacity="0.08"/><rect x="540" y="156" width="145" height="52" rx="10" fill="none" stroke="#10b981" stroke-width="1.5"/><text x="612" y="178" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">B = {s, t, u}</text><text x="612" y="196" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7">discovered 2nd</text><line x1="612" y1="208" x2="612" y2="262" stroke="#10b981" stroke-width="2"/><polygon points="-8,-4.2 0,0 -8,4.2" fill="#10b981" transform="translate(612,262) rotate(90)"/><rect x="540" y="266" width="145" height="52" rx="10" fill="#10b981" fill-opacity="0.08"/><rect x="540" y="266" width="145" height="52" rx="10" fill="none" stroke="#10b981" stroke-width="1.5"/><text x="612" y="288" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">C = {v, w}</text><text x="612" y="306" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7">discovered 3rd</text><text x="612" y="348" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.75">topological order A → B → C</text><text x="612" y="366" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.75">(sources first, sinks last)</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Two passes, three components",
        problem: "Find the SCCs of the digraph $p{\\to}q{\\to}r{\\to}p$, $r{\\to}s$, $s{\\to}t{\\to}u{\\to}s$, $u{\\to}v$, $v{\\to}w{\\to}v$ (adjacency lists as written, roots alphabetical) using the two-pass algorithm.",
        steps: [
          { label: "Step 1: DFS on G", text: "From $p$: the walk $p, q, r, s, t, u, v, w$ dives through everything, hitting gray hits $r{\\to}p$, $u{\\to}s$, $w{\\to}v$ (back edges in this tree). Unwinding gives finish order $w(9), v(10), u(11), t(12), s(13), r(14), q(15), p(16)$." },
          { label: "Step 2: Transpose", text: "Build $G^T$: every arrow reverses, so $q{\\to}p$, $r{\\to}q$, $p{\\to}r$, $s{\\to}r$, $t{\\to}s$, $u{\\to}t$, $s{\\to}u$, $v{\\to}u$, $w{\\to}v$, $v{\\to}w$." },
          { label: "Step 3: Pass 2, roots by decreasing finish", text: "Start at $p$ (largest $f = 16$): in $G^T$, $p \\to r \\to q$ and back to $p$ — tree dies out at $\\{p, q, r\\}$ since $r$ has no other transpose edges. Component $A = \\{p, q, r\\}$." },
          { label: "Step 4: Continue", text: "Next unvisited root by finish: $s(13)$: $s \\to t \\to u$ (and $s \\to u$) — $B = \\{s, t, u\\}$. Then $v(10)$: $v \\to u$? visited; $v \\to w$ — $C = \\{v, w\\}$. All 8 vertices boxed." }
        ],
        result: "Components $\\{p,q,r\\}$, $\\{s,t,u\\}$, $\\{v,w\\}$, found in exactly the topological order of the condensation $A \\to B \\to C$ (the inter-component edges are $r{\\to}s$ and $u{\\to}v$). Total cost $2 \\times \\Theta(V+E)$."
      },
      {
        title: "Transpose flips, components stay",
        problem: "Digraph $1 \\to 2 \\to 3 \\to 1$ (SCC $\\{1,2,3\\}$) plus $3 \\to 4$ (singleton). Show $G^T$ keeps SCCs and reverses the component edge.",
        steps: [
          { label: "Transpose", text: "Edges become $2 \\to 1$, $3 \\to 2$, $1 \\to 3$, $4 \\to 3$: cycle $1 \\leftrightarrow 3 \\leftrightarrow 2$ persists (SCC unchanged), bridge becomes $4 \\to 3$ (was $3 \\to 4$)." },
          { label: "Pass 1", text: "DFS on $G$: finish $4$ first? From $1$: reach $2,3,4$: finishes $4 > 3 > 2 > 1$? Order $f$: $4$ largest? Actually $4$ finishes before backtrack, so decreasing $f$ starts with $1$ (the source SCC)." },
          { label: "Pass 2 on $G^T$", text: "Start at $1$ in $G^T$: reaches $3,2$ but not $4$ (edge $4 \\to 3$ points the wrong way): first tree $\\{1,2,3\\}$ = SCC. Then $4$ alone." },
          { label: "Why", text: "Processing decreasing $f$ on $G^T$ visits sink SCCs of $G$ (sources of $G^T$) last? Precisely: $f$ orders components topologically, transpose reverses edges, so first unvisited in $G^T$ is a sink of $G^T$ = source of $G$? The text's lemma makes it a whole SCC each time." },
        ],
        result: "SCCs $\\{1,2,3\\},\\{4\\}$ identical in $G$ and $G^T$; two-pass order isolates each in $\\Theta(V+E)$.",
      },
    ],
    keyTakeaways: [
      "SCCs are the maximal mutually-reachable sets; contracting them yields the condensation, which is always a DAG.",
      "The algorithm is two DFS passes — finish times on $G$, then trees on $G^T$ with roots in decreasing finish order — in total $\\Theta(V+E)$.",
      "Each pass-2 tree is exactly one SCC because reversing edges turns source components into sinks that no traversal can leave."
    ],
    quiz: [
      {
        q: "$G^T$ is the transpose of $G$. Which of the following is true?",
        options: ["$G$ and $G^T$ generally have different SCCs", "the SCCs of $G$ and $G^T$ are identical, but their condensations differ by reversal", "the condensations of $G$ and $G^T$ are identical DAGs", "$G^T$ of a DAG always contains a cycle"],
        answer: 1,
        explanation: "Mutual reachability is symmetric, so reversal changes no component — but every inter-component edge flips direction, transposing the condensation: sources and sinks swap. That reversal is what traps the pass-2 DFS inside one component."
      },
      {
        q: "In pass 2, roots are processed in decreasing finish time from pass 1. The vertex with the highest finish time is guaranteed to lie in:",
        options: ["a sink component of $G$'s condensation", "a source component of $G$'s condensation", "the largest component", "a component with no incoming transpose edges in $G^T$"],
        answer: 1,
        explanation: "A DFS that starts in a component finishes it only after finishing everything it can reach — so the top finisher belongs to a component from which the traversal reached deepest, a source. In $G^T$ that component is a sink, so pass 2 stays inside it."
      },
      {
        q: "A single directed cycle of $k$ vertices (and no other edges) has how many strongly connected components?",
        options: ["$k$", "1", "0", "$k-1$"],
        answer: 1,
        explanation: "Every vertex reaches every other around the cycle, so all $k$ are mutually reachable — one maximal component. The condensation is a single node."
      },
      {
        q: "The total running time of STRONGLY-CONNECTED-COMPONENTS is:",
        options: ["$\\Theta(V^2)$", "$\\Theta(V + E)$", "$\\Theta((V+E) \\lg V)$", "$\\Theta(VE)$"],
        answer: 1,
        explanation: "Two DFS traversals plus building the transpose — each $\\Theta(V+E)$, and constants add, not multiply."
      },
      // PYQ-pattern: ISRO 2019 — strongly connected components count (rephrased, values changed)
      {
        q: "Directed edges are $1\\to2, 2\\to3, 3\\to1, 3\\to4, 4\\to5, 5\\to4$. How many strongly connected components does the digraph have?",
        options: ["1", "2", "3", "5"],
        answer: 1,
        explanation: "Step 1 — Given six directed edges on vertices ${1, \\ldots, 5}$. Step 2 — Governing method: two depth-first passes (graph, then transpose in decreasing finish order); each tree of the second pass is one component. Step 3 — Analysis: ${1, 2, 3}$ reach each other cyclically; ${4, 5}$ reach each other; the bridge $3\\to4$ goes one way only, so no larger mutual set exists: $2$ components. Step 4 — Sanity check: components partition the five vertices ($3 + 2$), condensation ${C_{1}}\\to{C_{2}}$ is acyclic, and transpose reverses only the bridge. Step 5 — Distractor analysis: $1$ ignores the one-way bridge, $3$ splits a genuine cycle, and $5$ treats every vertex as isolated. Step 6 — Conclude: $2$ components.",
      },
    ]
  }
]
