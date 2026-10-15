import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition (Cormen, Leiserson, Rivest,
// & Stein). Chapter 23: Minimum Spanning Trees (Sections 23.1 – 23.2).
// Master study content.
// ============================================================================

export const clrsCh23Content: SectionContent[] = [
  // ---------------------------------------------------------------- 23.1
  {
    sectionId: "clrs-ch23-s1",
    readingTime: 7,
    intro: "A minimum spanning tree threads the cheapest possible connected skeleton through a weighted undirected graph. The entire theory collapses into one short statement — the cut property — and every MST algorithm in existence is a strategy for exploiting it.",
    objectives: [
      "Define cuts, crossing edges, and what it means for a set to respect a cut",
      "State and prove the cut property (Theorem 23.1) via the exchange argument",
      "Use the generic MST method to certify each edge added as safe"
    ],
    concepts: [
      {
        term: "Minimum spanning tree",
        kind: "definition",
        statement: "Given a connected undirected graph $G = (V, E)$ with weight $w : E \\to \\mathbb{R}$, a **spanning tree** is an acyclic subset $T \\subseteq E$ with $|T| = |V| - 1$ that connects all vertices. A **minimum spanning tree (MST)** is one of minimum total weight $w(T) = \\sum_{e \\in T} w(e)$.",
        detail: "If all edge weights are **distinct**, the MST is unique. The MST need not minimize the weight of each individual vertex-to-vertex path — that is the shortest-path problem; it minimizes the whole tree."
      },
      {
        term: "Cuts, crossing, and respect",
        kind: "definition",
        statement: "A **cut** $(S, V - S)$ of $G$ is a partition of $V$ into two nonempty parts. An edge **crosses** the cut if it has one endpoint in each part. A set $A$ of edges **respects** the cut if no edge of $A$ crosses it.",
        detail: "Cuts are the observer's tool: we get to choose any partition of the vertices, and the cut property then names an edge that every reasonable algorithm may safely add."
      },
      {
        term: "Light edge and safe edge",
        kind: "definition",
        statement: "An edge crossing a cut is a **light edge** if its weight is minimum among all crossing edges (ties give several light edges). Given $A$ that is a subset of some MST, an edge $(u,v)$ is **safe** for $A$ if $A \\cup \\{(u,v)\\}$ is still a subset of some MST.",
        detail: "Safety is about preserving extendability toward *some* MST — not necessarily the same MST at every step. The generic method maintains exactly this invariant."
      },
      {
        term: "The cut property (Theorem 23.1)",
        kind: "theorem",
        statement: "Let $G$ be connected and undirected with weights, and let $A$ be a subset of some MST. Let $(S, V-S)$ be any cut that $A$ respects, and let $(u, v)$ be a **light edge** crossing that cut. Then $(u, v)$ is **safe** for $A$.",
        detail: "**Proof (exchange argument).** Take any MST $T$ containing $A$. If $(u,v) \\in T$ we are done. Otherwise $T \\cup \\{(u,v)\\}$ contains a cycle that must cross the cut back and forth — so it contains another edge $(x, y) \\neq (u, v)$ crossing the cut, and $(x,y) \\notin A$ (since $A$ respects the cut). Removing $(x,y)$ from the cycle leaves a spanning tree $T' = T - \\{(x,y)\\} \\cup \\{(u,v)\\}$ with $w(T') = w(T) - w(x,y) + w(u,v) \\le w(T)$, since $(u,v)$ is light. $T'$ is an MST containing $A \\cup \\{(u,v)\\}$. $\\blacksquare$"
      },
      {
        term: "The generic MST method",
        kind: "method",
        statement: "**GENERIC-MST:** start with $A = \\emptyset$; while $A$ does not yet span, find a cut that $A$ respects, take a light edge crossing it, and add it to $A$. The cut property guarantees every added edge is safe, so the invariant 'A is contained in some MST' holds until $A$ itself is an MST.",
        detail: "Kruskal and Prim are the two classical instantiations of this loop — they differ only in which cut they (implicitly) use and how they find the light edge."
      }
    ],
    figures: [
      {
        caption: "The cut property on a six-vertex graph. The dashed curve is the cut $(S, V - S)$ with $S = \\{r, s, t\\}$; three edges cross it, with weights $5$, $8$, $10$, and the light edge $s\\text{–}u$ of weight $5$ is drawn bold teal. Any set $A$ of solid edges inside $S$ respects this cut, so $A \\cup \\{su\\}$ is contained in some MST — no algorithm that wants a minimum tree can be punished for taking the weight-5 edge across this line.",
        svg: `<svg viewBox="0 0 700 370" width="100%" role="img" aria-label="A graph with a cut and its light crossing edge highlighted"><text x="120" y="30" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">S</text><text x="530" y="30" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">V − S</text><path d="M 320,25 C 350,120 290,240 325,345" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5" opacity="0.6"/><line x1="94.5" y1="141.1" x2="195.5" y2="78.9" stroke="currentColor" stroke-width="1.8"/><text x="128" y="98" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><line x1="94.5" y1="158.9" x2="195.5" y2="221.1" stroke="currentColor" stroke-width="1.8"/><text x="128" y="200" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><line x1="210" y1="87" x2="210" y2="213" stroke="currentColor" stroke-width="1.8"/><text x="198" y="153" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">1</text><line x1="226.7" y1="73" x2="413.3" y2="117" stroke="#10b981" stroke-width="4"/><text x="320" y="62" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981" text-anchor="middle" font-weight="700">5 — the light edge</text><line x1="224.9" y1="221.9" x2="415.1" y2="118.1" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/><text x="288" y="178" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">8</text><line x1="226.6" y1="233.5" x2="433.4" y2="266.5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/><text x="295" y="252" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">10</text><line x1="432" y1="126.9" x2="448" y2="263.1" stroke="currentColor" stroke-width="1.8"/><text x="462" y="197" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="start">2</text><line x1="445.4" y1="117.3" x2="602.6" y2="192.7" stroke="currentColor" stroke-width="1.8"/><text x="528" y="140" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">6</text><line x1="465.4" y1="272.8" x2="604.6" y2="207.2" stroke="currentColor" stroke-width="1.8"/><text x="538" y="255" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">3</text><circle cx="80" cy="150" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="80" cy="150" r="17" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="80" y="155" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">r</text><circle cx="210" cy="70" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="210" cy="70" r="17" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="210" y="75" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">s</text><circle cx="210" cy="230" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="210" cy="230" r="17" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="210" y="235" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">t</text><circle cx="430" cy="110" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="430" cy="110" r="17" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="430" y="115" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">u</text><circle cx="450" cy="280" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="450" cy="280" r="17" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="450" y="285" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">v</text><circle cx="620" cy="200" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="620" cy="200" r="17" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="620" y="205" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">w</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Certifying a safe edge with a cut",
        problem: "In the figure's graph, suppose a partial solution $A = \\{s\\text{–}t\\}$ (the weight-1 edge) is already built. Use the cut $S = \\{r, s, t\\}$ to certify a safe edge for $A$.",
        steps: [
          { label: "Step 1: Check the hypotheses", text: "$A$ must be contained in some MST — plausible, since $s\\text{–}t$ is the globally lightest edge (weight 1) and can be exchanged into any tree. (Formally: apply the cut $(\\{s,t,\\dots\\}, \\dots)$ or take it on the invariant of the generic method.)" },
          { label: "Step 2: Find a respecting cut", text: "Does $A$ respect $S = \\{r,s,t\\}$? The only edge of $A$, $s\\text{–}t$, has both endpoints in $S$ — it does not cross. Hypothesis satisfied." },
          { label: "Step 3: Identify the light edge", text: "The crossing edges are $s\\text{–}u$ (5), $t\\text{–}u$ (8), $t\\text{–}v$ (10). The light edge is $s\\text{–}u$ with weight 5." },
          { label: "Step 4: Conclude safety", text: "By Theorem 23.1, $A \\cup \\{s\\text{–}u\\}$ is contained in some MST. Indeed the full MST of this graph is $\\{s\\text{–}t, r\\text{–}t, u\\text{–}v, v\\text{–}w, s\\text{–}u\\}$ with total weight $1 + 2 + 2 + 3 + 5 = 13$ — the certified edge is in it." }
        ],
        result: "The cut property upgrades the partial solution $\\{s\\text{–}t\\}$ to $\\{s\\text{–}t, s\\text{–}u\\}$ with a one-line certificate — no global reasoning about the whole tree needed."
      },
      {
        title: "Cut that respects two tree edges",
        problem: "Triangle $a-b$ weight $1$, $b-c$ $2$, $a-c$ $3$. MST is $\\{1,2\\}$. Exhibit a cut respecting both MST edges at once.",
        steps: [
          { label: "Cut", text: "Cut $(\\{a\\}, \\{b,c\\})$: crossing edges $a-b(1)$, $a-c(3)$: light edge $a-b$ is in MST ✓." },
          { label: "Second cut", text: "Cut $(\\{a,b\\}, \\{c\\})$: crossing $b-c(2)$, $a-c(3)$: light edge $b-c$ in MST ✓." },
          { label: "Respect", text: "Set $A = \\{a-b\\}$ respects first cut (no crossing edge of $A$? $a-b$ crosses? Actually $A$ has $a-b$ crossing first cut? A cut respected means no edge of $A$ crosses it: $A = \\emptyset$ respects every cut; growing $A$ keeps respect by adding only safe edges." },
          { label: "Safe", text: "Each light edge is safe for every $A$ respecting its cut: generic method may add $a-b$ then $b-c$ in either order, both safe." },
        ],
        result: "Cuts $(\\{a\\}|rest)$ and $(\\{a,b\\}|\\{c\\})$ certify $a-b$ and $b-c$ safe; MST weight $3$ minimal by cut-property exchange.",
      },
    ],
    keyTakeaways: [
      "A cut is any vertex partition; light edges are the cheapest crossing edges; a set respects a cut if none of its edges cross it.",
      "Theorem 23.1: a light edge across any cut respected by $A$ is safe for $A$ — proved by the exchange argument (swap the crossing edge out of an MST).",
      "Every MST algorithm is the generic method: repeatedly find a respecting cut and take a light edge across it."
    ],
    quiz: [
      {
        q: "In the cut property, the hypothesis that $A$ **respects** the cut $(S, V - S)$ means:",
        options: ["every edge of $A$ crosses the cut", "no edge of $A$ crosses the cut", "$A$ contains at least one light edge", "every vertex of $S$ is an endpoint of some edge of $A$"],
        answer: 1,
        explanation: "Respecting the cut means $A$ stays entirely on the two 'shores' without bridging them — so the light crossing edge is genuinely new material, not a duplicate or cycle-closer of $A$."
      },
      {
        q: "The exchange argument in the proof of Theorem 23.1 derives the inequality $w(T') \\le w(T)$ from:",
        options: ["the triangle inequality on path weights", "$w(u,v) \\le w(x,y)$ because $(u,v)$ is a light edge", "the assumption that all edge weights are positive", "the fact that removing an edge from a cycle keeps the graph connected"],
        answer: 1,
        explanation: "$T' = T - \\{(x,y)\\} + \\{(u,v)\\}$ swaps one crossing edge for the light one, so $w(T') = w(T) + w(u,v) - w(x,y) \\le w(T)$. (That removing $(x,y)$ from the cycle keeps $T'$ connected is the *other* ingredient, but the inequality itself is the light-edge comparison.)"
      },
      {
        q: "Suppose all edge weights of a connected graph are distinct. How many MSTs can it have?",
        options: ["exactly one", "at least two", "none — distinct weights make the MST ill-defined", "exactly $|V| - 1$"],
        answer: 0,
        explanation: "With distinct weights every cut has a unique light edge, and the exchange argument becomes strict: any two spanning trees would have to differ by swappable edges with unequal weights, forcing one to be cheaper. Ties are exactly what allow multiple MSTs."
      },
      {
        q: "Which statement about the generic MST method is correct?",
        options: ["it maintains the invariant that $A$ is contained in some MST", "it requires all weights to be distinct", "it greedily adds the globally cheapest edge each round", "it only works on complete graphs"],
        answer: 0,
        explanation: "The loop invariant is exactly '$A$ is a subset of some MST', preserved by adding safe edges (Theorem 23.1). Adding the globally cheapest edge is Kruskal's *strategy*, not the generic method's requirement — Prim, for instance, adds edges that are only locally light."
      }
    ]
  },

  // ---------------------------------------------------------------- 23.2
  {
    sectionId: "clrs-ch23-s2",
    readingTime: 8,
    intro: "Kruskal and Prim grow a minimum spanning tree from the same theorem by opposite strategies: Kruskal sorts all edges once and lets a disjoint-set union weld a forest of small trees together; Prim keeps one tree and lets a priority queue pull it toward the cheapest frontier vertex. Both are the generic method in different disguises.",
    objectives: [
      "Execute Kruskal with the union-find structure and Prim with a priority queue",
      "Attach the cut property to each algorithm's greedy choice",
      "Compare running times and pick by graph density"
    ],
    concepts: [
      {
        term: "Kruskal's algorithm",
        kind: "method",
        statement: "**KRUSKAL:** sort all edges by weight nondecreasing; scan them in order and add each edge $(u, v)$ to the forest $A$ **unless it would form a cycle** — concretely, unless $u$ and $v$ are already in the same tree, which the disjoint-set structure tests with `FIND-SET`. Accepted edges are merged with `UNION`.",
        detail: "Cut-property reading: when the algorithm considers the cheapest remaining edge, take the cut whose two shores are the connected components formed so far with $u$ on one side and everything else appropriately split — the cheapest edge across the relevant cut is exactly the one being scanned, so every accepted edge is safe. Kruskal **grows a forest**: many trees that merge over time."
      },
      {
        term: "Disjoint-set union-find",
        kind: "method",
        statement: "The forest of components is maintained by a **disjoint-set** structure with two heuristics — **union by rank** (attach the shallower tree under the deeper) and **path compression** (point every visited node directly at the root). A sequence of $m$ operations on $n$ elements costs $O(m\\, \\alpha(n))$, where $\\alpha$ is the inverse Ackermann function — effectively constant per operation.",
        detail: "$\\alpha(n) \\le 5$ for any $n$ bounded by the number of atoms in the universe; the analysis is one of CLRS's tour de forces (Chapter 21). This near-constant union/find is what makes Kruskal\'s edge test cheap."
      },
      {
        term: "Prim's algorithm",
        kind: "method",
        statement: "**PRIM:** grow a single tree from a root $r$. Keep every vertex $v$ outside the tree with a **key** $= \\infty$ initially (key $[r] = 0$), stored in a priority queue. Repeatedly `EXTRACT-MIN` a vertex $u$ into the tree and **relax** each crossing edge: for a neighbor $v$ still in the queue, if $w(u,v) < key[v]$, set $key[v] = w(u,v)$ and $\\pi[v] = u$.",
        detail: "The key of $v$ is the cheapest single edge connecting $v$ to the current tree — the light edge across the cut (tree, rest). Prim **grows one tree** from the root, and the $\\pi$ pointers form the MST itself."
      },
      {
        term: "Running times",
        kind: "insight",
        statement: "Kruskal: sorting dominates at $O(E \\lg E) = O(E \\lg V)$, plus near-linear union-find — total $O(E \\lg V)$. Prim: $\\Theta(V^2)$ with an unsorted array (best when dense), $O(E \\lg V)$ with a binary heap (decrease-key costs $\\lg V$ per edge), $O(E + V \\lg V)$ with a Fibonacci heap.",
        detail: "For a dense graph $E = \\Theta(V^2)$, Prim-with-array at $\\Theta(V^2)$ beats the heap versions ($V^2 \\lg V$); for sparse graphs the heap versions win. If edge weights are small integers, Kruskal's sort can even be replaced by counting sort for $O(E + V \\lg V)$."
      },
      {
        term: "Forest versus tree",
        kind: "insight",
        statement: "The two algorithms exhibit opposite growth patterns: **Kruskal grows a forest** — up to $V$ separate fragments that merge through their cheapest inter-fragment edges — while **Prim grows one tree** that eats the cheapest adjacent vertex over and over. Both stop after $V - 1$ edges.",
        detail: "The contrast mirrors their cut choices: Kruskal's cuts are between whole components; Prim\'s cut is always (current tree, everything else). Same theorem, different geometry."
      }
    ],
    figures: [
      {
        caption: "The same graph, mid-run in both algorithms. Left — Kruskal after sorting ($1, 2, 2, 3, 4, 5, 6, 8, 10$) has accepted $s\\text{–}t\\,(1)$, $r\\text{–}t\\,(2)$, $u\\text{–}v\\,(2)$, $v\\text{–}w\\,(3)$ and just **rejected** $r\\text{–}s\\,(4)$ — both endpoints lie in one component (a cycle). Right — Prim from $r$ has grown $\\{r, t, s, u\\}$ via edges $2, 1, 5$; the priority queue holds $v$ with key 2 and $w$ with key 6, both about to be pulled in through $u$. Both runs end at the same MST of total weight $1+2+2+3+5 = 13$.",
        svg: `<svg viewBox="0 0 720 300" width="100%" role="img" aria-label="Kruskal growing a forest versus Prim growing a single tree on the same graph"><text x="195" y="22" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Kruskal — grows a forest</text><ellipse cx="118" cy="115" rx="86" ry="82" fill="#10b981" fill-opacity="0.06"/><ellipse cx="290" cy="168" rx="82" ry="88" fill="#10b981" fill-opacity="0.06"/><line x1="65.5" y1="122.7" x2="139.5" y2="177.3" stroke="#10b981" stroke-width="3"/><line x1="65.5" y1="107.3" x2="139.5" y2="52.7" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/><line x1="150" y1="58" x2="150" y2="172" stroke="#10b981" stroke-width="3"/><line x1="260.4" y1="103" x2="264.6" y2="227" stroke="#10b981" stroke-width="3"/><line x1="274.9" y1="231.5" x2="325.1" y2="188.5" stroke="#10b981" stroke-width="3"/><line x1="159.8" y1="176.5" x2="250.2" y2="98.5" stroke="currentColor" stroke-width="1.4" opacity="0.35"/><line x1="161.7" y1="190.6" x2="253.3" y2="234.4" stroke="currentColor" stroke-width="1.4" opacity="0.35"/><line x1="268.3" y1="100" x2="326.7" y2="190" stroke="currentColor" stroke-width="1.4" opacity="0.35"/><line x1="162" y1="49.9" x2="248" y2="84.1" stroke="#10b981" stroke-width="2.5" stroke-dasharray="2 3"/><text x="84" y="152" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">2</text><text x="84" y="80" font-family="ui-sans-serif, system-ui" font-size="12" fill="#f59e0b" text-anchor="middle">4 ✗</text><text x="162" y="118" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="start">1</text><text x="276" y="168" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="start">2</text><text x="300" y="222" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">3</text><text x="200" y="132" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.6">8</text><text x="192" y="220" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.6">10</text><text x="302" y="146" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.6">6</text><text x="210" y="58" font-family="ui-sans-serif, system-ui" font-size="12" fill="#10b981" text-anchor="middle">5 — next merge</text><circle cx="55" cy="115" r="13" fill="currentColor" fill-opacity="0.06"/><circle cx="55" cy="115" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="55" y="119.5" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">r</text><circle cx="150" cy="45" r="13" fill="currentColor" fill-opacity="0.06"/><circle cx="150" cy="45" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="49.5" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">s</text><circle cx="150" cy="185" r="13" fill="currentColor" fill-opacity="0.06"/><circle cx="150" cy="185" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="189.5" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">t</text><circle cx="260" cy="90" r="13" fill="currentColor" fill-opacity="0.06"/><circle cx="260" cy="90" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="260" y="94.5" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">u</text><circle cx="265" cy="240" r="13" fill="currentColor" fill-opacity="0.06"/><circle cx="265" cy="240" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="265" y="244.5" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">v</text><circle cx="335" cy="180" r="13" fill="currentColor" fill-opacity="0.06"/><circle cx="335" cy="180" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="335" y="184.5" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">w</text><text x="555" y="22" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Prim — grows one tree from r</text><ellipse cx="514" cy="112" rx="122" ry="86" fill="#10b981" fill-opacity="0.06"/><line x1="425.5" y1="122.7" x2="499.5" y2="177.3" stroke="#10b981" stroke-width="3"/><line x1="425.5" y1="107.3" x2="499.5" y2="52.7" stroke="currentColor" stroke-width="1.4" opacity="0.35"/><line x1="510" y1="58" x2="510" y2="172" stroke="#10b981" stroke-width="3"/><line x1="620.4" y1="103" x2="620.6" y2="227" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/><line x1="628.9" y1="244.5" x2="679.1" y2="201.5" stroke="currentColor" stroke-width="1.4" opacity="0.35"/><line x1="519.8" y1="176.5" x2="610.2" y2="98.5" stroke="currentColor" stroke-width="1.4" opacity="0.35"/><line x1="521.7" y1="190.6" x2="613.3" y2="234.4" stroke="currentColor" stroke-width="1.4" opacity="0.35"/><line x1="628.3" y1="100" x2="686.7" y2="190" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/><line x1="522" y1="49.9" x2="608" y2="84.1" stroke="#10b981" stroke-width="3"/><text x="444" y="152" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">2</text><text x="444" y="80" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.6">4</text><text x="522" y="118" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="start">1</text><text x="636" y="168" font-family="ui-sans-serif, system-ui" font-size="12" fill="#f59e0b" text-anchor="start">2</text><text x="662" y="222" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.6">3</text><text x="560" y="132" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.6">8</text><text x="552" y="220" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.6">10</text><text x="662" y="146" font-family="ui-sans-serif, system-ui" font-size="12" fill="#f59e0b" text-anchor="middle">6</text><text x="572" y="58" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">5</text><circle cx="415" cy="115" r="13" fill="#10b981" fill-opacity="0.12"/><circle cx="415" cy="115" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="415" y="119.5" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">r</text><circle cx="510" cy="45" r="13" fill="#10b981" fill-opacity="0.12"/><circle cx="510" cy="45" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="510" y="49.5" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">s</text><circle cx="510" cy="185" r="13" fill="#10b981" fill-opacity="0.12"/><circle cx="510" cy="185" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="510" y="189.5" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">t</text><circle cx="620" cy="90" r="13" fill="#10b981" fill-opacity="0.12"/><circle cx="620" cy="90" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="620" y="94.5" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">u</text><circle cx="625" cy="240" r="13" fill="currentColor" fill-opacity="0.06"/><circle cx="625" cy="240" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="625" y="244.5" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">v</text><text x="625" y="270" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">key = 2</text><circle cx="695" cy="180" r="13" fill="currentColor" fill-opacity="0.06"/><circle cx="695" cy="180" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="695" y="184.5" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">w</text><text x="695" y="210" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">key = 6</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Running Kruskal and Prim on the same graph",
        problem: "Find the MST of the graph with vertices $\\{r, s, t, u, v, w\\}$ and weighted edges $rs{=}4, rt{=}2, st{=}1, su{=}5, tu{=}8, tv{=}10, uv{=}2, uw{=}6, vw{=}3$ — once by Kruskal, once by Prim from $r$.",
        steps: [
          { label: "Step 1: Kruskal sorts", text: "Edge order by weight: $st(1), rt(2), uv(2), vw(3), rs(4), su(5), uw(6), tu(8), tv(10)$." },
          { label: "Step 2: Kruskal accepts and rejects", text: "Take $st$ ✓, $rt$ ✓ (forest $\\{r,s,t\\}$), $uv$ ✓, $vw$ ✓ (forest $\\{u,v,w\\}$). Now $rs$ ✗ — $r$ and $s$ are in one component, edge would close a cycle. Take $su(5)$ ✓ — the two forests merge. $|A| = 5 = |V| - 1$: stop." },
          { label: "Step 3: Prim from r", text: "Extract $r$ (key 0); neighbors get keys $s{:}4, t{:}2$. Extract $t$ (2); $s$'s key improves $4 \\to 1$ via $st$, $u{:}8$, $v{:}10$. Extract $s$ (1); $u$ improves $8 \\to 5$ via $su$. Extract $u$ (5); $v$ improves $10 \\to 2$ via $uv$, $w{:}6$. Extract $v$ (2); $w$ improves $6 \\to 3$ via $vw$. Extract $w$ (3). Done." },
          { label: "Step 4: Read off the tree", text: "Prim's $\\pi$ pointers give edges $rt(2), ts(1), su(5), uv(2), vw(3)$ — the same five edges Kruskal accepted." }
        ],
        result: "Both algorithms produce the MST $\\{st, rt, su, uv, vw\\}$ with total weight $1 + 2 + 5 + 2 + 3 = 13$. Note Prim's extraction order $r(0), t(2), s(1), \\dots$ — keys can go down before extraction; only the extracted values are final."
      },
      {
        title: "Kruskal skips a cycle edge",
        problem: "Same triangle weights $1,2,3$. Run Kruskal sorted $1,2,3$ with union-find.",
        steps: [
          { label: "Sort", text: "Edges $a-b(1)$, $b-c(2)$, $a-c(3)$." },
          { label: "Take 1,2", text: "$a-b$: FIND differ, UNION. $b-c$: FIND differ ($\\{a,b\\}$ vs $\\{c\\}$), UNION: forest $\\{a,b,c\\}$ weight $3$." },
          { label: "Skip 3", text: "$a-c$: FIND same set: skip (would form cycle $a-b-c-a$). Kruskal examines $3$ edges, takes $2 = V-1$." },
          { label: "Prim contrast", text: "Prim from $a$: frontier $a-b(1)$, $a-c(3)$: take $1$; frontier $b-c(2)$, $a-c(3)$: take $2$: same MST, different order (vertex-greedy vs edge-greedy)." },
        ],
        result: "Kruskal takes $1,2$ skips $3$; Prim takes $1$ then $2$: both $\\{a-b,b-c\\}$ weight $3$ via the cut property.",
      },
    ],
    keyTakeaways: [
      "Kruskal sorts edges and unions components — $O(E \\lg V)$ total, dominated by the sort; the union-find structure makes each cycle test near-constant.",
      "Prim grows one tree with a priority queue of keys; $\\Theta(V^2)$ with an array (dense graphs), $O(E \\lg V)$ with a binary heap, $O(E + V \\lg V)$ with a Fibonacci heap.",
      "Both are the cut property in action: Kruskal's cuts separate whole components, Prim\'s cut separates the tree from the rest."
    ],
    quiz: [
      {
        q: "Kruskal scans an edge $(u, v)$ of weight 4 and rejects it. The reason must be:",
        options: ["its weight is larger than some already-accepted edge", "$u$ and $v$ already lie in the same component — the edge would close a cycle", "the edge is a bridge", "Prim's algorithm would have rejected it too"],
        answer: 1,
        explanation: "Kruskal's only rejection rule is the cycle test, implemented as `FIND-SET(u) = FIND-SET(v)`. Weight comparisons never cause rejection — every edge gets its turn in sorted order."
      },
      {
        q: "In Prim's algorithm, when is a vertex's key updated?",
        options: ["every time one of its edges is scanned, to the edge weight", "when an extracted tree vertex $u$ offers a strictly cheaper edge $w(u,v)$ than the current key", "when the vertex is extracted from the queue", "keys are fixed when vertices first enter the queue and never change"],
        answer: 1,
        explanation: "Prim relaxes across the cut: only tree-to-queue edges can improve a key, and only strict improvements count — exactly Dijkstra-style relaxation with edge weights in place of path lengths."
      },
      {
        q: "For a dense graph with $E = \\Theta(V^2)$, the asymptotically fastest of the four implementations discussed is:",
        options: ["Kruskal at $O(E \\lg V)$", "Prim with a binary heap at $O(E \\lg V)$", "Prim with a plain array at $\\Theta(V^2)$", "Prim with a Fibonacci heap at $O(E + V \\lg V)$"],
        answer: 2,
        explanation: "With $E = \\Theta(V^2)$: array-Prim costs $V^2$; the heap versions cost $V^2 \\lg V$; Kruskal costs $V^2 \\lg V$. The humble quadratic array wins for dense inputs — one of the rare times the simplest structure is asymptotically best."
      },
      {
        q: "The amortized cost of a sequence of $m$ disjoint-set operations (union by rank + path compression) on $n$ elements is:",
        options: ["$\\Theta(m \\lg n)$", "$O(m \\, \\alpha(n))$ with inverse Ackermann $\\alpha$", "$\\Theta(m \\sqrt{n})$", "$\\Theta(mn)$"],
        answer: 1,
        explanation: "Union by rank plus path compression gives $O(m\\,\\alpha(n))$ — for all physically meaningful $n$, $\\alpha(n) \\le 5$, so each operation is effectively constant. This is what keeps Kruskal's cycle tests from dominating its running time."
      },
      // PYQ-pattern — Kruskal MST weight (rephrased, values changed)
      {
        q: "Edges with weights $ab:1, bc:2, ac:3, cd:4, de:5, ce:6$ span vertices ${a,b,c,d,e}$. Kruskal algorithm MST weight is:",
        options: ["10", "11", "12", "14"],
        answer: 2,
        explanation: "Step 1 — Given six weighted edges on five vertices. Step 2 — Governing rule: scan edges ascending, keep one that joins two different union-find sets (the cut property). Step 3 — Trace: $ab:1$ kept; $bc:2$ kept; $ac:3$ rejected (all in ${a,b,c}$); $cd:4$ kept; $de:5$ kept; four edges reach $|V| - 1$, halt; total $1 + 2 + 4 + 5 = 12$. Step 4 — Sanity check: four edges for five vertices, heaviest kept is $5$ while $6$ never needed, and any spanning tree needs at least this cut-certified weight. Step 5 — Distractor analysis: $10$ drops a required edge, $11$ swaps in $3$ for $4$, and $14$ keeps the cyclic $3$. Step 6 — Conclude: weight $12$.",
      },
    ]
  }
]
