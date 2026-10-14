import type { SectionContent } from '../library'

// ============================================================================
// Cormen, Leiserson, Rivest, Stein — Introduction to Algorithms, 3rd Edition
// Chapter 35: Approximation Algorithms (Sections 35.1 – 35.5)
// ============================================================================

export const clrsCh35Content: SectionContent[] = [
  // ---------------------------------------------------------------- 35.1
  {
    sectionId: "clrs-ch35-s1",
    readingTime: 6,
    intro: "When exact optimality is provably out of reach, the honest engineering question becomes: how close can we get, and can we prove it? This section defines the approximation ratio, introduces the vocabulary of approximation schemes, and opens the chapter with its canonical result — a maximal matching gives a 2-approximation for vertex cover, with a two-line proof worth memorizing.",
    objectives: [
      "Define the approximation ratio and distinguish PTAS from FPTAS",
      "Run APPROX-VERTEX-COVER and prove its ratio 2 via the matching lower bound",
      "Recognize when the factor 2 is tight and why fancier greedy rules do not beat it"
    ],
    concepts: [
      {
        term: "Approximation ratio",
        kind: "definition",
        statement: "An algorithm for a minimization problem has **approximation ratio** $\\rho(n) \\geq 1$ if for every input $I$ of size $n$, $$\\text{cost}(A(I)) \\leq \\rho(n) \\cdot \\text{cost}^*(I),$$ where $\\text{cost}^*$ is the optimal cost. For maximization problems the inequality inverts: $\\text{cost}(A(I)) \\geq \\text{cost}^*(I) / \\rho(n)$. A $\\rho(n)$-**approximation algorithm** is one with this guarantee; the closer $\\rho$ is to 1, the better the approximation.",
        detail: "The ratio is a worst-case guarantee over all inputs of size n — an algorithm may be optimal on most instances and still carry ratio 2, just as APPROX-VERTEX-COVER is optimal on triangles and factor-2 off on stars."
      },
      {
        term: "Approximation schemes: PTAS and FPTAS",
        kind: "definition",
        statement: "An **approximation scheme** takes a parameter $\\varepsilon > 0$ and returns a solution within ratio $1 + \\varepsilon$. It is a **PTAS** (polynomial-time approximation scheme) if for each fixed $\\varepsilon$ the running time is polynomial in $n$; it is an **FPTAS** (fully polynomial-time approximation scheme) if the running time is polynomial in both $n$ and $1/\\varepsilon$.",
        detail: "The distinction bites when ε shrinks: a PTAS may run in $O(n^{1/\\varepsilon})$ — hopeless for ε = 0.01 — while an FPTAS such as the subset-sum scheme of Section 35.5 stays practical. The strongest result an NP-hard optimization problem can hope for is an FPTAS."
      },
      {
        term: "APPROX-VERTEX-COVER",
        kind: "method",
        statement: "Repeatedly pick **any** remaining edge $(u, v)$, add **both** endpoints $u, v$ to the cover $C$, and delete every edge incident to $u$ or $v$. When no edges remain, return $C$. Each iteration deletes at least one edge, so the loop runs at most $|E|$ times and the algorithm is $O(E)$ with adjacency lists.",
        detail: "The deliberate naivety — any edge, not a smartest edge — is the point: the analysis never depends on which edge was picked, so no adversary can steer the algorithm wrong. The chosen edges are exactly a maximal matching built edge by edge."
      },
      {
        term: "The 2-approximation theorem",
        kind: "theorem",
        statement: "APPROX-VERTEX-COVER returns a vertex cover with $|C| \\leq 2 \\cdot \\text{OPT}$. **Proof.** The loop halts only when no edge survives, so $C$ is a cover. The chosen edges form a **matching** $M$: once $(u,v)$ is picked, all incident edges are deleted, so no later edge touches $u$ or $v$; hence $|C| = 2|M|$. Every vertex cover — the optimal one included — must contain at least one endpoint of each edge of $M$, and the matching’s edges share no endpoints, so $\\text{OPT} \\geq |M|$. Chaining: $|C| = 2|M| \\leq 2 \\cdot \\text{OPT}$. $\\blacksquare$",
        detail: "The proof is a template for every matching-based approximation: pick disjoint objects, pay a constant per object, and charge the optimum once per object. Nothing about the instance’s structure is assumed."
      },
      {
        term: "Tightness — and the greedy trap",
        kind: "insight",
        statement: "The factor 2 is tight. On the star $K_{1,n}$ the optimum is the center alone (cost 1), yet the first chosen edge pulls in a leaf and the center (cost 2). On $K_{n,n}$ with a perfect matching chosen, the algorithm takes $2n$ vertices against an optimal $n$. Replacing ‘any edge’ by the edge whose endpoints cover the most remaining edges does not help — such heuristics can still be forced to $\\Omega(\\lg n)$-type losses.",
        detail: "Whether any polynomial-time $(2 - \\varepsilon)$-approximation for vertex cover exists is a famous open question (conjectured impossible under the unique-games conjecture). The linear-programming rounding of Section 35.4 also achieves 2 — for the weighted version — by a completely different route."
      }
    ],
    figures: [
      {
        caption: "The matching bound. Four disjoint matching edges (green) are chosen; the algorithm buys all $2|M| = 8$ endpoints (filled), while any cover — optimal included — must buy at least one endpoint per matching edge: $\\text{OPT} \\geq |M| = 4$ (rings). Hence $|C| = 2|M| \\leq 2 \\cdot \\text{OPT}$.",
        svg: `<svg viewBox="0 0 700 300" width="100%" role="img" aria-label="Eight vertices in two rows joined by four bold matching edges and faint diagonals; all vertices filled as the algorithm's cover, top vertices ringed as the optimal cover"><text x="350" y="26" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">the chosen edges are a matching M — the algorithm’s cover is all 2|M| endpoints</text><line x1="137" y1="102" x2="263" y2="198" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.4"/><line x1="297" y1="102" x2="423" y2="198" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.4"/><line x1="457" y1="102" x2="583" y2="198" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.4"/><line x1="583" y1="102" x2="457" y2="198" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.4"/><line x1="120" y1="112" x2="120" y2="188" stroke="#10b981" stroke-width="4"/><line x1="280" y1="112" x2="280" y2="188" stroke="#10b981" stroke-width="4"/><line x1="440" y1="112" x2="440" y2="188" stroke="#10b981" stroke-width="4"/><line x1="600" y1="112" x2="600" y2="188" stroke="#10b981" stroke-width="4"/><circle cx="120" cy="90" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.8"/><circle cx="120" cy="90" r="28" fill="none" stroke="#10b981" stroke-width="1.4" stroke-dasharray="4 4"/><text x="120" y="95" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">u₁</text><circle cx="280" cy="90" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.8"/><circle cx="280" cy="90" r="28" fill="none" stroke="#10b981" stroke-width="1.4" stroke-dasharray="4 4"/><text x="280" y="95" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">u₂</text><circle cx="440" cy="90" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.8"/><circle cx="440" cy="90" r="28" fill="none" stroke="#10b981" stroke-width="1.4" stroke-dasharray="4 4"/><text x="440" y="95" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">u₃</text><circle cx="600" cy="90" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.8"/><circle cx="600" cy="90" r="28" fill="none" stroke="#10b981" stroke-width="1.4" stroke-dasharray="4 4"/><text x="600" y="95" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">u₄</text><circle cx="120" cy="210" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.8"/><text x="120" y="215" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">v₁</text><circle cx="280" cy="210" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.8"/><text x="280" y="215" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">v₂</text><circle cx="440" cy="210" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.8"/><text x="440" y="215" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">v₃</text><circle cx="600" cy="210" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.8"/><text x="600" y="215" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">v₄</text><text x="350" y="272" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" opacity="0.75" font-style="italic">rings mark one endpoint per matching edge — a valid cover of size |M|</text><text x="350" y="292" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" opacity="0.75" font-style="italic">so OPT ≥ |M| = 4 while the algorithm pays |C| = 2|M| = 8</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "A path where the algorithm is off by exactly a factor of 2",
        problem: "Run APPROX-VERTEX-COVER on the path a—b—c—d—e and compare with the optimum.",
        steps: [
          { label: "Step 1 — first pick", text: "Any edge may be chosen; say (b, c). Add b and c to C; delete ab, bc, cd. Remaining edge: de." },
          { label: "Step 2 — second pick", text: "Pick (d, e): add d and e to C; delete de. No edges remain: $C = \\{b, c, d, e\\}$, $|C| = 4$." },
          { label: "Step 3 — the optimum", text: "OPT $= \\{b, d\\}$: b touches ab, bc and d touches cd, de — a cover of size 2." },
          { label: "Step 4 — the bound in action", text: "The chosen edges $M = \\{(b,c), (d,e)\\}$ are disjoint, so any cover needs $\\geq |M| = 2$ vertices; the algorithm bought exactly $2|M| = 4 = 2 \\cdot \\text{OPT}$." }
        ],
        result: "Ratio exactly 2 — the worst case of the theorem, on a five-vertex path."
      },
      {
        title: "A triangle: the algorithm is optimal",
        problem: "Run APPROX-VERTEX-COVER on the triangle u—v—w.",
        steps: [
          { label: "Step 1", text: "Pick, say, (u, v); add both to C; delete all three edges (each is incident to u or v)." },
          { label: "Step 2", text: "The loop ends: $C = \\{u, v\\}$, $|C| = 2$." },
          { label: "Step 3", text: "No two vertices miss an edge, so OPT $= 2$ as well — the algorithm happened to be optimal." }
        ],
        result: "Ratio 1: the guarantee 2 is a worst-case bound, not a typical one — a point worth remembering when benchmarking heuristics."
      }
    ],
    keyTakeaways: [
      "The ratio ρ(n) is a worst-case multiplicative guarantee; ρ = 1 means exact optimization.",
      "The chosen edges form a matching M, giving |C| = 2|M| ≤ 2·OPT — the whole proof in one line.",
      "The factor is tight (stars, complete bipartite graphs), and beating 2 for vertex cover is a major open problem."
    ],
    quiz: [
      {
        q: "The edges chosen by APPROX-VERTEX-COVER always form a matching because…",
        options: [
          "each chosen edge is the heaviest remaining edge",
          "choosing (u, v) deletes every edge incident to u or v, so no later edge can share an endpoint",
          "the graph is assumed bipartite",
          "a maximum matching is computed first"
        ],
        answer: 1,
        explanation: "Deletion of all incident edges is exactly what prevents a second chosen edge from touching u or v — disjointness by construction."
      },
      {
        q: "Why is OPT ≥ |M| for the chosen matching M?",
        options: [
          "every vertex cover must contain at least one endpoint of each edge of M, and matching edges have no endpoints in common",
          "M is a maximum matching",
          "the vertices are weighted equally",
          "the cover returned is minimal"
        ],
        answer: 0,
        explanation: "Each matching edge demands its own endpoint inside any cover, and since the demands are on disjoint pairs they add up: |M| distinct vertices at least."
      },
      {
        q: "The approximation ratio of APPROX-VERTEX-COVER is…",
        options: ["1", "3/2", "2", "ln n"],
        answer: 2,
        explanation: "|C| = 2|M| and OPT ≥ |M| give exactly factor 2 — and Section 35.4’s LP rounding will match it on the weighted version."
      },
      {
        q: "An FPTAS, unlike a PTAS, must run in time polynomial in…",
        options: ["n only", "1/ε only", "both n and 1/ε", "the optimum value"],
        answer: 2,
        explanation: "A PTAS may blow up as ε shrinks (e.g. n^(1/ε)); the F in FPTAS demands polynomial dependence on 1/ε as well — Section 35.5 delivers one for subset sum."
      }
    ]
  },

  // ---------------------------------------------------------------- 35.2
  {
    sectionId: "clrs-ch35-s2",
    readingTime: 7,
    intro: "The traveling-salesman problem splits complexity theory in two. With the triangle inequality, doubling a minimum spanning tree yields a tour provably within twice the optimum. Without it, no polynomial-time algorithm can approximate TSP within any polynomially bounded factor at all — unless P = NP. One inequality, and the whole approximation landscape changes.",
    objectives: [
      "Run APPROX-TSP-TOUR: MST, doubled Eulerian walk, shortcutting",
      "Prove the chain w(tour) ≤ 2w(MST) ≤ 2·OPT on triangle-inequality instances",
      "Reproduce the non-approximability reduction from HAM-CYCLE for general TSP"
    ],
    concepts: [
      {
        term: "The traveling-salesman problem",
        kind: "definition",
        statement: "**TSP**: given a complete graph $G = (V, E)$ with integer weight $c(u, v) > 0$ on every edge, find a Hamiltonian cycle of minimum total weight. NP-hard by Chapter 34’s reduction, it is the classic stand-in for every routing problem — and the approximation question must be asked per instance class.",
        detail: "The complete graph is no restriction: any graph can be completed, and the interesting distinction is whether the weights behave like distances."
      },
      {
        term: "The triangle inequality",
        kind: "definition",
        statement: "An instance is **metric** when $$c(u, v) \\leq c(u, w) + c(w, v) \\quad \\text{for all vertices } u, w, v.$$ Euclidean distances satisfy it, as do shortest-path metrics. It says: never pay more to go directly than a detour would cost — and it is the entire license for shortcutting.",
        detail: "Metric TSP models physical travel; the general case allows arbitrary weights, even ones that reward strange detours. The two cases have completely different approximation theories, as this section shows."
      },
      {
        term: "APPROX-TSP-TOUR",
        kind: "method",
        statement: "1. Compute a **minimum spanning tree** $T$. 2. **Double** every edge of $T$: every vertex degree becomes even, so the multigraph is Eulerian — take an Euler tour of weight exactly $2w(T)$ (equivalently: run DFS from a root $r$ and list vertices in **preorder**, visiting each tree edge twice). 3. **Shortcut**: read the walk and skip vertices already visited, jumping straight to the next new one — a Hamiltonian cycle. Total time $O(n^2)$.",
        detail: "The preorder view makes the algorithm concrete: preorder listing h, a₁, a₂, b, c₁, c₂, d of the DFS tree, then close the cycle back to h. Every jump between non-consecutive tree vertices is a shortcut paid for by the triangle inequality."
      },
      {
        term: "The 2-approximation theorem (metric TSP)",
        kind: "theorem",
        statement: "On triangle-inequality instances, APPROX-TSP-TOUR returns a tour of weight $\\leq 2 \\cdot \\text{OPT}$, via a three-link chain: **(i)** deleting any edge from the optimal tour leaves a spanning tree, so $w(T) \\leq \\text{OPT}$; **(ii)** the doubled walk weighs $2w(T) \\leq 2 \\cdot \\text{OPT}$; **(iii)** shortcutting replaces each sub-walk between consecutive new vertices by a single edge, which the triangle inequality certifies costs no more than the sub-walk it replaces.",
        detail: "Link (iii) is where the hypothesis enters — remove the triangle inequality and shortcuts can be arbitrarily expensive, and with them the entire proof. The same three-link chain, with matching replacing MST, proved Section 35.1 — comparing the two proofs is the fastest way to internalize the pattern."
      },
      {
        term: "General TSP is unapproximable",
        kind: "theorem",
        statement: "Without the triangle inequality, no polynomial-time $\\rho(n)$-approximation exists for TSP for any polynomially bounded $\\rho$ — unless $P = NP$. Proof by reduction from HAM-CYCLE: given $G$ with $n$ vertices, form the complete graph with $c(u, v) = 1$ on edges of $G$ and $c(u, v) = n \\rho(n) + 1$ otherwise. If $G$ is Hamiltonian, OPT $= n$; if not, every tour uses at least one non-edge of $G$ and costs $\\geq (n-1) + n\\rho(n) + 1 > \\rho(n) \\cdot n$. So the approximation algorithm returns a tour of weight $\\leq \\rho(n) \\cdot n$ exactly when $G$ is Hamiltonian — a polynomial-time decision of an NP-complete problem.",
        detail: "The construction is why ‘just try to approximate it’ can be provably hopeless: a good-enough approximate answer would still be an exact oracle for Hamiltonicity. CLRS’s notes also mention Christofides’ algorithm: combining the MST with a minimum-weight perfect matching on odd-degree vertices improves the metric guarantee to 3/2."
      }
    ],
    figures: [
      {
        caption: "The 2-approximation on a tree instance. Left: the MST, each edge doubled (dashed copy) — an Eulerian walk of weight $2w(T)$. Right: the preorder shortcut tour; the marked jumps skip the hub, each bounded by the path it replaces via the triangle inequality. Together: $w(\\text{tour}) \\leq 2w(T) \\leq 2\\cdot\\text{OPT}$.",
        svg: `<svg viewBox="0 0 720 360" width="100%" role="img" aria-label="Two panels: a doubled minimum spanning tree walked as an Euler tour, and the shortcut Hamiltonian tour derived from it"><text x="185" y="26" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">double the MST → Eulerian walk</text><line x1="355" y1="14" x2="355" y2="346" stroke="currentColor" stroke-width="1" stroke-dasharray="5 5" opacity="0.35"/><path d="M 180,190 L 120,120" stroke="currentColor" stroke-width="2"/><path d="M 185.3,185.4 L 125.3,115.4" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.55"/><path d="M 120,120 L 70,60" stroke="currentColor" stroke-width="2"/><path d="M 125.4,115.5 L 75.4,55.5" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.55"/><path d="M 180,190 L 250,110" stroke="currentColor" stroke-width="2"/><path d="M 185.3,194.6 L 255.3,114.6" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.55"/><path d="M 180,190 L 255,250" stroke="currentColor" stroke-width="2"/><path d="M 175.6,195.5 L 250.6,255.5" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.55"/><path d="M 255,250 L 305,300" stroke="currentColor" stroke-width="2"/><path d="M 250.1,254.9 L 300.1,304.9" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.55"/><path d="M 180,190 L 105,265" stroke="currentColor" stroke-width="2"/><path d="M 175.1,185.1 L 100.1,260.1" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.55"/><circle cx="180" cy="190" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="180" y="195" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">h</text><circle cx="120" cy="120" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="120" y="125" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">a₁</text><circle cx="70" cy="60" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="70" y="65" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">a₂</text><circle cx="250" cy="110" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="250" y="115" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">b</text><circle cx="255" cy="250" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="255" y="255" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">c₁</text><circle cx="305" cy="300" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="305" y="305" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">c₂</text><circle cx="105" cy="265" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="105" y="270" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">d</text><text x="185" y="336" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" opacity="0.75" font-style="italic">each tree edge is walked twice — weight 2w(T)</text><text x="545" y="26" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">shortcut → Hamiltonian tour</text><path d="M 540,190 L 480,120" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.4"/><path d="M 480,120 L 430,60" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.4"/><path d="M 540,190 L 610,110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.4"/><path d="M 540,190 L 615,250" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.4"/><path d="M 615,250 L 665,300" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.4"/><path d="M 540,190 L 465,265" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.4"/><polygon points="540,190 480,120 430,60 610,110 615,250 665,300 465,265" fill="#10b981" fill-opacity="0.05" stroke="#10b981" stroke-width="2.5" stroke-linejoin="round"/><text x="521" y="76" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">shortcut</text><text x="648" y="176" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">shortcut</text><text x="556" y="290" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">shortcut</text><circle cx="540" cy="190" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="540" y="195" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">h</text><circle cx="480" cy="120" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="480" y="125" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">a₁</text><circle cx="430" cy="60" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="430" y="65" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">a₂</text><circle cx="610" cy="110" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="610" y="115" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">b</text><circle cx="615" cy="250" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="615" y="255" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">c₁</text><circle cx="665" cy="300" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="665" y="305" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">c₂</text><circle cx="465" cy="265" r="13" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.7"/><text x="465" y="270" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">d</text><text x="545" y="336" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" opacity="0.75" font-style="italic">w(tour) ≤ 2·w(MST) ≤ 2·OPT</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "A four-arm star metric, by the numbers",
        problem: "Five cities: a hub h and four tips t₁ … t₄, with c(h, tᵢ) = 1 and c(tᵢ, tⱼ) = 2 for i ≠ j (a genuine metric: 2 ≤ 1 + 1). Run APPROX-TSP-TOUR.",
        steps: [
          { label: "Step 1 — MST", text: "The four spokes form the minimum spanning tree: $w(T) = 4$." },
          { label: "Step 2 — double", text: "The Euler walk h → t₁ → h → t₂ → h → t₃ → h → t₄ → h traverses each spoke twice: weight $2w(T) = 8$." },
          { label: "Step 3 — shortcut", text: "Skipping the repeated h: the tour t₁ → t₂ → t₃ → t₄ → t₁ makes four tip-to-tip jumps of cost 2: weight 8." },
          { label: "Step 4 — the chain", text: "Output $8 \\leq 2w(T) = 8 \\leq 2 \\cdot \\text{OPT} = 16$; in fact OPT = 8 here — every tour must link the four tips, and each link costs 2 whichever way it is routed." }
        ],
        result: "Weight-8 tour; the algorithm is actually optimal on this instance, and the first inequality of the chain was tight while the second had slack."
      },
      {
        title: "The unapproximability machine on four vertices",
        problem: "Let ρ(n) = 2 and n = 4. Apply the non-approximability construction to G₁ = the 4-cycle a–b–c–d–a and to G₂ = the star centered at a with leaves b, c, d.",
        steps: [
          { label: "Step 1 — weights", text: "Complete each graph, giving weight 1 to its edges and weight $n\\rho(n) + 1 = 9$ to the other pairs." },
          { label: "Step 2 — Hamiltonian case", text: "G₁: the tour a→b→c→d→a costs 4 = n. Any tour containing a weight-9 edge costs ≥ 3 + 9 = 12 > ρ(n)·n = 8, so a 2-approximation must return a tour of weight ≤ 8 — necessarily a Hamiltonian cycle of G₁." },
          { label: "Step 3 — non-Hamiltonian case", text: "G₂: b, c, d are pairwise non-adjacent, so every tour uses a weight-9 edge: every tour costs ≥ 12 > 8 = ρ(n)·n." },
          { label: "Step 4 — decide", text: "Run the alleged 2-approximation and compare its output to 8: at most 8 answers ‘Hamiltonian’, more answers ‘not’ — HAM-CYCLE decided in polynomial time." }
        ],
        result: "A polynomial 2-approximation for general TSP would decide Hamiltonicity — so none exists unless P = NP."
      }
    ],
    keyTakeaways: [
      "Metric TSP: MST → double → shortcut gives a 2-approximation in O(n²) time.",
      "The proof chain w(tour) ≤ 2w(T) ≤ 2·OPT uses the triangle inequality exactly once — at the shortcut step.",
      "General TSP is approximable within no polynomial factor unless P = NP — approximation quality can be as hard as exact solution."
    ],
    quiz: [
      {
        q: "Why is w(MST) ≤ OPT for TSP?",
        options: [
          "the MST is a subgraph of the optimal tour",
          "MSTs are always cheap",
          "the triangle inequality compares them directly",
          "deleting any edge from an optimal tour leaves a spanning tree, and the MST is minimum among spanning trees"
        ],
        answer: 3,
        explanation: "The tour minus one edge spans the graph and costs OPT − (one edge); the MST, being minimum, costs no more than any spanning tree."
      },
      {
        q: "Shortcutting never increases the tour length because…",
        options: [
          "all weights are 1",
          "the MST has n − 1 edges",
          "each shortcut edge is bounded by the sub-walk it replaces via the triangle inequality",
          "Euler tours are minimal"
        ],
        answer: 2,
        explanation: "A jump from u to v replaces the walked path u → … → v, and the triangle inequality bounds the direct edge by any path between its ends."
      },
      {
        q: "For general TSP, a polynomial α(n)-approximation with polynomially bounded α would let you…",
        options: [
          "approximate HAM-CYCLE within α",
          "decide HAM-CYCLE in polynomial time, by weighting G’s edges 1, non-edges n·α(n)+1, and comparing the output against α(n)·n",
          "prove the triangle inequality",
          "solve SAT exactly"
        ],
        answer: 1,
        explanation: "The huge non-edge weights make any tour that uses them exceed the approximation bound — so the algorithm’s output reveals whether a Hamiltonian cycle exists."
      },
      {
        q: "On the star metric (spokes of weight 1, tip-to-tip 2), the MST has weight 4 and the algorithm returns a tour of weight…",
        options: ["4", "6", "8", "16"],
        answer: 2,
        explanation: "The shortcut tour makes four jumps of cost 2: weight 8 — which equals 2w(T) and also happens to be OPT on that instance."
      }
    ]
  },

  // ---------------------------------------------------------------- 35.3
  {
    sectionId: "clrs-ch35-s3",
    readingTime: 9,
    intro: "Set covering is the problem of hiring the fewest experts whose combined skills cover a project. The greedy algorithm — always take whoever adds the most missing skills — is within a harmonic factor of optimal, and the harmonic bound is essentially the best any polynomial algorithm can achieve. The proof, a charging argument that prices each chosen set against the optimum, is this chapter’s analytical centerpiece.",
    objectives: [
      "Formulate SET-COVER and run the greedy heuristic with its price accounting",
      "State the H(d) ≤ ln d + 1 guarantee and verify it numerically on small instances",
      "Understand why the logarithm is intrinsic: lower bounds and the LP integrality gap"
    ],
    concepts: [
      {
        term: "The set-covering problem",
        kind: "definition",
        statement: "Given a finite **universe** $X$ and a family $F \\subseteq 2^X$ of sets whose union is $X$ — every element coverable — find a minimum-size subfamily $C \\subseteq F$ with $\\bigcup_{S \\in C} S = X$. The expert-hiring model: $X$ is the skill set a project needs, each $S \\in F$ is the skill set of one candidate, and the goal is the smallest team covering every skill.",
        detail: "SET-COVER is NP-hard (it generalizes vertex cover: sets = vertex neighborhoods). Yet it is ubiquitous — facility location, test-case selection, boolean logic minimization — which is why its approximation theory is so thoroughly mapped."
      },
      {
        term: "GREEDY-SET-COVER",
        kind: "method",
        statement: "While uncovered elements remain, pick the set in $F$ containing the **most uncovered elements**. Each pass scans the family — $O(|X| \\cdot |F|)$ work to recompute coverages — and each pass covers at least one new element, so there are at most $\\min(|X|, |F|)$ passes.",
        detail: "The greedy is oblivious to the future: it maximizes immediate coverage. That myopia is exactly what the harmonic analysis prices — and, remarkably, almost nothing better is possible."
      },
      {
        term: "The price function φ",
        kind: "method",
        statement: "Give every set the greedy picks a **price of 1**. When the chosen set $S$ covers $k \\geq 1$ previously uncovered elements, charge each of those elements $1/k$. The prices telescope onto the output: $$\\sum_{x \\in X} \\varphi(x) = \\text{number of sets chosen}.$$ Prices are per-element bookkeeping for the same total cost.",
        detail: "The later an element is covered, the more it tends to pay: an element grabbed alone in the final round is charged a full 1; one swept up in a mass purchase pays only a small fraction. The proof lives entirely in this accounting."
      },
      {
        term: "The H(d)-approximation theorem",
        kind: "theorem",
        statement: "GREEDY-SET-COVER returns a cover $C$ with $$|C| \\leq H(d) \\cdot \\text{OPT}, \\qquad H(d) = \\sum_{j=1}^{d} \\frac{1}{j} \\leq \\ln d + 1,$$ where $d = \\max_{S \\in F} |S|$ is the size of the largest set. The proof (masters tier below) charges each element’s price to an optimal set containing it and sums harmonic series within each such set.",
        detail: "With $d = |X|$ the bound reads $H(|X|) \\cdot \\text{OPT}$; the stated $H(d)$ form is far stronger when sets are small relative to the universe — say $H(10) \\approx 2.93$ against $H(10^6) \\approx 14.4$."
      },
      {
        term: "Is the logarithm forced?",
        kind: "insight",
        statement: "Essentially yes, on three fronts. The greedy itself: Slavík pinned its exact worst-case ratio at $\\ln n - \\ln \\ln n + \\Theta(1)$, so the harmonic analysis is tight for the algorithm. All polynomial algorithms: Feige proved that no polynomial-time algorithm achieves $(1 - \\varepsilon) \\ln n$ unless P = NP. And the LP relaxation of Section 35.4 has integrality gap $(1 - o(1)) \\ln n$ — even knowing the fractional optimum cannot beat the logarithm.",
        detail: "This triple wall is what makes set cover the moral center of approximation theory: the greedy is within lower-order terms of the best possible — a statement almost no other NP-hard problem can match."
      }
    ],
    examples: [
      {
        title: "Greedy versus optimum, with prices on the table",
        problem: "Let X = {1, 2, …, 8}, F = {A, O₁, O₂} with A = {1, 2, 3, 4, 5, 6}, O₁ = {1, 2, 3, 7}, O₂ = {4, 5, 6, 8}. Run the greedy, price every element, and check the harmonic accounting.",
        steps: [
          { label: "Step 1 — pass 1", text: "A covers 6 uncovered elements — more than O₁ (3) or O₂ (3). Pick A; each of 1…6 is charged $\\varphi = 1/6$." },
          { label: "Step 2 — pass 2", text: "Remaining: {7, 8}. O₁ covers one new element (7), O₂ covers one (8). Pick O₁; $\\varphi(7) = 1$." },
          { label: "Step 3 — pass 3", text: "Remaining: {8}. Pick O₂; $\\varphi(8) = 1$. Total sets: 3, and indeed $\\sum \\varphi = 6 \\cdot \\tfrac{1}{6} + 1 + 1 = 3$." },
          { label: "Step 4 — compare", text: "OPT = {O₁, O₂} covers X with 2 sets. Ratio 3/2 ≤ H(6) = 49/20 = 2.45." },
          { label: "Step 5 — charging check", text: "Elements 1, 2, 3, 7 (those of O₁): $3 \\cdot \\tfrac{1}{6} + 1 = 1.5 \\leq H(4) = 25/12 \\approx 2.08$; likewise for O₂. Total $3 \\leq 2 \\cdot H(4) \\approx 4.17$ — every inequality of the theorem is visible." }
        ],
        result: "Greedy 3 versus OPT 2: the mass purchase A was a 50% overshoot, priced out element by element."
      },
      {
        title: "Tight example for greedy set cover",
        problem: "Universe $\\{1,2,3,4\\}$, sets $A = \\{1,2\\}$, $B = \\{3,4\\}$, $C = \\{1,2,3,4\\}$ with unit costs. Greedy can pick $2$ sets vs optimum $1$? Show harmonic pricing.",
        steps: [
          { label: "Greedy", text: "All sets cost $1$: first pick covers most uncovered: $C$ covers $4$ (price $1/4$ each) vs $A,B$ cover $2$ (price $1/2$): greedy picks $C$ (optimal here). Tight example needs staggered costs (text's $H(d)$ family)." },
          { label: "Harmonic", text: "With $|X| = 4$, $H(4) = 1+1/2+1/3+1/4 \\approx 2.08$: greedy $\\le 2.08 \\times$ OPT. Here $1 \\le 2.08$ ✓." },
          { label: "Tight family", text: "Text's $n = 2^k-1$ construction forces greedy through $k$ layers paying $H(n)$: logarithm unavoidable (Feige's $\\ln n$ hardness)." },
          { label: "Price view", text: "Element priced $1/|new|$ when covered: $\\sum$ prices $=$ greedy sets; each OPT set's elements cost $\\le H(d)$: charging proves the ratio." },
        ],
        result: "Greedy $1$ vs OPT $1$ here, ratio $1 \\le H(4) \\approx 2.08$; staggered families attain $H(d)$, so the logarithm is tight.",
      },
    ],
    keyTakeaways: [
      "Greedy = maximum new coverage per pass; its cost is exactly the sum of per-element prices.",
      "The guarantee is H(d) ≤ ln d + 1 where d is the largest set size — proved by charging prices to optimal sets.",
      "The logarithm is intrinsic: tight for greedy, and (1 − ε) ln n is impossible for any polynomial algorithm unless P = NP."
    ],
    quiz: [
      {
        q: "When the greedy picks a set covering k previously uncovered elements, each of those elements is charged…",
        options: ["1", "k", "1/k", "OPT/k"],
        answer: 2,
        explanation: "The set’s price of 1 is split evenly over its k new elements — the only accounting choice for which the prices sum to the number of sets."
      },
      {
        q: "At the moment an element is covered, r elements are still uncovered. Some single optimal set covers at least…",
        options: ["r of them", "r/OPT of them", "OPT/r of them", "all of them"],
        answer: 1,
        explanation: "The OPT sets jointly cover the r remaining elements, so their average — and hence the maximum — coverage is at least r/OPT; the greedy picks no less."
      },
      {
        q: "H(6) equals…",
        options: ["2", "3", "ln 6 ≈ 1.79", "49/20 = 2.45"],
        answer: 3,
        explanation: "1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6 = 147/60 = 49/20 = 2.45 — and it already sits well below 1 + ln 6 ≈ 2.79."
      },
      {
        q: "The harmonic guarantee H(d)·OPT uses d = …",
        options: ["|X|, the universe size", "OPT, the optimal number of sets", "the size of the largest set in F", "the number of sets the greedy chose"],
        answer: 2,
        explanation: "Each optimal set contains at most d elements, so its charged prices sum to at most H(d) — that is where d enters the proof."
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "The harmonic analysis: charging greedy to the optimum",
        blocks: [
          {
            kind: "para",
            body: "The logarithmic guarantee of GREEDY-SET-COVER is CLRS’s most instructive approximation proof, because the loss it measures is not an artifact of one analysis — it is the true price of covering. The instrument is a charging argument: one unit of cost per chosen set, distributed over the elements that set newly covers, then accounted against the optimal cover. The sum that emerges is a harmonic series, and the harmonic numbers are exactly the right currency."
          },
          {
            kind: "theorem",
            heading: "Theorem — greedy is an H(d)-approximation",
            body: "For a set-cover instance with maximum set size $d = \\max_{S \\in F} |S|$ and optimal cover $C^*$, the greedy algorithm returns a cover $C$ with $$|C| \\;\\leq\\; H(d) \\cdot |C^*|, \\qquad H(d) = \\sum_{j=1}^{d} \\frac{1}{j} \\leq \\ln d + 1.$$"
          },
          {
            kind: "proof",
            heading: "Proof — charge each element to an optimal set containing it",
            body: "Give every set the greedy picks a price of 1. When the picked set covers $k \\geq 1$ previously uncovered elements, each of those elements is charged $1/k$; the prices over all elements sum exactly to the number of sets picked. Now fix one optimal set $S^* \\in C^*$ and assign to it every element it contains — each element is assigned to one optimal set containing it, so nothing is double-counted. List $S^*$’s elements $e_1, e_2, \\dots, e_m$ ($m = |S^*| \\leq d$) in the order in which the greedy covered them. At the moment $e_j$ is covered, the elements $e_j, e_{j+1}, \\dots, e_m$ of $S^*$ are still uncovered — that is $m - j + 1$ elements — and the single set $S^*$ covers all of them. The greedy maximizes newly covered elements, so its chosen set covers at least $|S^* \\cap \\text{uncovered}| \\geq m - j + 1$ new elements, whence $$\\varphi(e_j) \\;\\leq\\; \\frac{1}{m - j + 1}.$$ Summing over $S^*$’s elements: $$\\sum_{j=1}^{m} \\varphi(e_j) \\;\\leq\\; \\sum_{j=1}^{m} \\frac{1}{m - j + 1} \\;=\\; \\sum_{i=1}^{m} \\frac{1}{i} \\;=\\; H(m) \\;\\leq\\; H(d).$$ Summing over the $|C^*|$ optimal sets — whose assigned elements partition $X$ — gives $|C| = \\sum_{x \\in X} \\varphi(x) \\leq |C^*| \\cdot H(d)$. $\\blacksquare$"
          },
          {
            kind: "derivation",
            heading: "The coarser H(|X|) bound, and when to prefer which",
            body: "An alternative slices time instead of optimal sets. Order all elements $x_1, \\dots, x_c$ of $X$ ($c = |X|$) by coverage time. When $x_i$ is covered, $c - i + 1$ elements remain, and the $|C^*|$ optimal sets together cover them all; one of those sets therefore covers at least $(c - i + 1)/|C^*|$ of them, and the greedy’s set covers at least that many new elements: $\\varphi(x_i) \\leq |C^*| / (c - i + 1)$. Summing, $$|C| \\leq |C^*| \\sum_{i=1}^{c} \\frac{1}{c - i + 1} = |C^*| \\cdot H(|X|).$$ The two bounds trade roles with the shape of the instance: many small sets over a huge universe favors $H(d)$; a few giant sets makes them nearly equal. CLRS states the $H(d)$ form — the stronger one in the regime that matters."
          },
          {
            kind: "para",
            body: "**The harmonic numbers themselves.** $H(d) = \\ln d + \\gamma + \\tfrac{1}{2d} - O(1/d^2)$ with the Euler–Mascheroni constant $\\gamma \\approx 0.5772$. For computation: $H(3) = 11/6 \\approx 1.83$, $H(4) = 25/12 \\approx 2.08$, $H(6) = 49/20 = 2.45$, $H(100) \\approx 5.19$. The integral comparison $\\int_1^{d+1} \\frac{dt}{t} \\geq \\sum_{j=2}^{d} \\frac{1}{j}$ gives the handy bound $H(d) \\leq 1 + \\ln d$ used in the theorem statement — logarithmic growth, which is why set cover is called ‘log-approximable’."
          },
          {
            kind: "remark",
            heading: "Is the logarithm forced? Yes — three times over",
            body: "Slavík (1996) determined the exact worst-case ratio of the greedy: $\\ln n - \\ln \\ln n + \\Theta(1)$, so the harmonic analysis is tight for the algorithm itself, up to the double log. Feige (1998) showed that no polynomial-time algorithm achieves $(1 - \\varepsilon) \\ln n$ for set cover unless P = NP — the approximation threshold sits at the harmonic bound. And the linear-programming relaxation that Section 35.4 rounds has integrality gap $(1 - o(1)) \\ln n$: instances exist where OPT is a factor $\\ln n$ above the fractional optimum, so even perfect rounding of that LP cannot beat the logarithm. Greedy is thus within lower-order terms of the best achievable by any method — among the strongest statements complexity theory can make about an approximation algorithm."
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------- 35.4
  {
    sectionId: "clrs-ch35-s4",
    readingTime: 8,
    intro: "Two further design principles complete the toolbox: relax integrality and solve the linear program, or flip coins with the fractional solution as probabilities. Vertex cover yields to the first — a 2-approximation, now for weights — and set cover to the second, an O(lg n) guarantee in expectation. Between them sits the integrality gap: the unavoidable distance between what a relaxation promises and what an integer solution costs.",
    objectives: [
      "Write the ILP for weighted vertex cover, relax it, and round the fractional optimum into a 2-approximation",
      "Analyze randomized rounding for set cover: probabilities, failure bounds via (1 − p) ≤ e−p, union bound",
      "Define the integrality gap and compute it on the triangle instance"
    ],
    concepts: [
      {
        term: "Integer linear programming formulations",
        kind: "method",
        statement: "Weighted vertex cover as an ILP: minimize $\\sum_{v} w_v x_v$ subject to $x_u + x_v \\geq 1$ for every edge $(u, v) \\in E$ and $x_v \\in \\{0, 1\\}$ — an indicator per vertex, every edge demanding a unit of coverage from its endpoints. Set cover’s ILP: minimize $\\sum_S w_S x_S$ subject to $\\sum_{S \\ni e} x_S \\geq 1$ for every element $e$.",
        detail: "Both express covering constraints exactly; solving ILPs is itself NP-hard, which is why the next move is to relax them."
      },
      {
        term: "LP relaxation",
        kind: "method",
        statement: "Replace the integrality $x_v \\in \\{0,1\\}$ by $0 \\leq x_v \\leq 1$. The feasible region becomes a polytope over which the linear objective can be **minimized in polynomial time** — by the ellipsoid method or interior-point methods. Every integer solution is still feasible, so the LP optimum is a **lower bound on OPT** for minimization problems.",
        detail: "The relaxation is where approximation is purchased: the LP sees fractional covers no integer solution can realize, and the gap between the two optima — the integrality gap — prices the purchase."
      },
      {
        term: "Threshold rounding: a 2-approximation for weighted vertex cover",
        kind: "theorem",
        statement: "Solve the relaxed vertex-cover LP, then include every vertex with $x_v \\geq 1/2$. **Every edge is covered:** $x_u + x_v \\geq 1$ forces $\\max(x_u, x_v) \\geq 1/2$, so one endpoint is always chosen. **The cost doubles at most:** every chosen $v$ has $1 \\leq 2 x_v$, so $$\\sum_{v \\in C} w_v \\;\\leq\\; \\sum_{v \\in C} 2 x_v w_v \\;\\leq\\; 2 \\sum_{v} x_v w_v \\;=\\; 2 \\cdot \\text{LP} \\;\\leq\\; 2 \\cdot \\text{OPT}.$$",
        detail: "Note the improvement over Section 35.1: the same ratio 2, but for arbitrary vertex weights, and with a certificate — the LP optimum — proving the instance’s optimum is at least LP. Nemhauser–Trotter’s theorem even shows the LP always has a half-integral optimum ($x_v \\in \\{0, \\tfrac12, 1\\}$), which is why the 1/2 threshold is the natural cut."
      },
      {
        term: "Randomized rounding",
        kind: "method",
        statement: "Read the fractional solution as probabilities. For set cover: solve the LP relaxation, then include each set $S$ **independently** with probability $\\min\\{1,\\ c \\cdot x_S \\ln |X|\\}$. Linearity of expectation gives expected cost at most $c \\ln |X| \\cdot \\text{LP}$. The probability that a fixed element $e$ (with $\\sum_{S \\ni e} x_S \\geq 1$) survives every flip is at most $e^{-c \\ln |X|} = |X|^{-c}$, using $(1 - p) \\leq e^{-p}$; a union bound over all elements makes the failure probability at most $|X|^{1-c}$ — negligible for $c \\approx 2$.",
        detail: "The same random-assignment idea solves MAX-3-CNF-SAT: a uniformly random assignment satisfies each 3-literal clause with probability 7/8, so expectation alone gives a 8/7-approximation, and the method of conditional expectation derandomizes it into a deterministic algorithm."
      },
      {
        term: "The integrality gap",
        kind: "insight",
        statement: "The LP optimum can be strictly below OPT, and the worst-case ratio $\\text{OPT}/\\text{LP}$ — the **integrality gap** of the relaxation — is the price any rounding of that LP must pay. Vertex cover’s gap is below 2 (half-integrality again); set cover’s gap is $\\Theta(\\ln n)$: instances exist where the fractional optimum is a $\\ln n$ factor too optimistic.",
        detail: "The gap explains why Section 35.3’s logarithm is not an artifact of greediness: no rounding — however clever — of the standard set-cover LP beats it. Changing the relaxation itself, not the rounding, is the open frontier."
      }
    ],
    examples: [
      {
        title: "A triangle with weights 2, 3, 4 — solved fractionally",
        problem: "Vertices v₁, v₂, v₃ with weights 2, 3, 4 form a triangle. Solve the LP relaxation, round, and compare with OPT.",
        steps: [
          { label: "Step 1 — the LP", text: "Minimize $2x_1 + 3x_2 + 4x_3$ subject to $x_1 + x_2 \\geq 1$, $x_2 + x_3 \\geq 1$, $x_1 + x_3 \\geq 1$, with $0 \\leq x_v \\leq 1$." },
          { label: "Step 2 — a feasible point", text: "$x = (\\tfrac12, \\tfrac12, \\tfrac12)$: all three edge constraints hold with equality; cost $(2 + 3 + 4)/2 = 4.5$." },
          { label: "Step 3 — optimality certified", text: "Dual multipliers $y_{12} = \\tfrac12, y_{13} = \\tfrac32, y_{23} = \\tfrac52$ satisfy the dual constraints ($\\tfrac12 + \\tfrac32 = 2$, $\\tfrac12 + \\tfrac52 = 3$, $\\tfrac32 + \\tfrac52 = 4$) and sum to $\\tfrac12 + \\tfrac32 + \\tfrac52 = 4.5$ — matching the primal cost, so both are optimal." },
          { label: "Step 4 — round", text: "All three vertices have $x_v = \\tfrac12 \\geq \\tfrac12$: take them all, cost $2 + 3 + 4 = 9 = 2 \\cdot 4.5$ — the rounding bound is tight here." },
          { label: "Step 5 — compare", text: "OPT is the integer cover $\\{v_1, v_2\\}$ with cost 5 (it covers all three edges). Ratio $9/5 = 1.8 \\leq 2$; and LP $= 4.5 < 5 = \\text{OPT}$ displays the integrality gap on a triangle." }
        ],
        result: "A 2-approximation with fully certified arithmetic: LP 4.5, rounded cost 9, integer optimum 5."
      },
      {
        title: "Coin flips that (almost surely) cover",
        problem: "An LP solution assigns x_S = 1/10 to each of 10 sets that cover element e, and |X| = 100. Randomized rounding with c = 2 picks each set with probability min{1, 2·(1/10)·ln 100}. Estimate the chance e is missed, and the chance any element is missed.",
        steps: [
          { label: "Step 1 — the probability", text: "$\\ln 100 \\approx 4.605$, so $p_S = 2 \\cdot 0.1 \\cdot 4.605 = 0.921$ for each of the 10 sets." },
          { label: "Step 2 — one element", text: "$P[e\\ \\text{missed}] = (1 - 0.921)^{10} = 0.079^{10} \\approx 9.5 \\times 10^{-12}$ — the bound $e^{-c \\ln |X|} = 100^{-2} = 10^{-4}$ is far looser." },
          { label: "Step 3 — union bound", text: "P[some element missed] ≤ 100 × 9.5 × 10⁻¹² ≈ 10⁻⁹ — the flips produce a genuine cover with overwhelming probability." },
          { label: "Step 4 — cost", text: "Expected cost ≤ $\\sum_S p_S w_S \\leq 2 \\ln 100 \\cdot \\text{LP} \\approx 9.21 \\cdot \\text{LP} \\leq 9.21 \\cdot \\text{OPT}$." }
        ],
        result: "With probability 1 − 10⁻⁹ the random picks form a cover of expected cost within 9.21·OPT — the O(lg n) guarantee, made concrete."
      }
    ],
    keyTakeaways: [
      "Relax integrality, solve the LP in polynomial time, then round — the LP optimum certifies a lower bound on OPT.",
      "Vertex cover at threshold 1/2: edges are covered because x_u + x_v ≥ 1, and cost at most doubles because 1 ≤ 2x_v on chosen vertices.",
      "Randomized rounding reads x as probability; (1 − p) ≤ e−p plus the union bound turns fractional coverage into an almost-sure cover at O(lg n) cost."
    ],
    quiz: [
      {
        q: "In the relaxed vertex-cover LP, the constraint x_u + x_v ≥ 1 implies for each edge that…",
        options: [
          "both endpoints have x = 1",
          "at least one endpoint has x ≥ 1/2",
          "at least one endpoint has x ≤ 1/2",
          "the edge must be deleted"
        ],
        answer: 1,
        explanation: "If both were below 1/2 the sum would be below 1; hence max(x_u, x_v) ≥ 1/2 and threshold rounding at 1/2 covers the edge."
      },
      {
        q: "The rounding step bounds the cover’s weight by 2·LP because…",
        options: [
          "every chosen vertex satisfies w_v ≤ 2 w_v x_v, since x_v ≥ 1/2",
          "w_v ≤ w_v x_v always",
          "LP = OPT for vertex cover",
          "weights are integers"
        ],
        answer: 0,
        explanation: "Chosen means x_v ≥ 1/2, i.e. 1 ≤ 2x_v; multiplying by w_v and summing gives w(C) ≤ 2 Σ w_v x_v = 2·LP ≤ 2·OPT."
      },
      {
        q: "The probability that randomized rounding misses a fixed element is at most…",
        options: [
          "e^{−Σ p_S} over all sets",
          "|X|",
          "e^{−c ln |X|} = |X|^{−c}, using (1 − p) ≤ e^{−p} on the sets containing it",
          "exactly 1/2"
        ],
        answer: 2,
        explanation: "Independence multiplies the miss probabilities, and (1 − p) ≤ e^{−p} converts the product into e^{−Σp} ≤ e^{−c ln|X|}, since the element’s sets carry fractional mass ≥ 1."
      },
      {
        q: "The integrality gap of a relaxation is…",
        options: [
          "the gap between the greedy output and OPT",
          "the worst-case ratio OPT/LP — the price any rounding of that LP must pay",
          "the duality gap of the LP",
          "always equal to 1"
        ],
        answer: 1,
        explanation: "It measures how far the polytope’s optimum sits below the integer optimum: vertex cover < 2, set cover Θ(ln n) — rounding cannot beat it."
      }
    ]
  },

  // ---------------------------------------------------------------- 35.5
  {
    sectionId: "clrs-ch35-s5",
    readingTime: 8,
    intro: "Subset sum closes the chapter with the strongest result an NP-hard problem can offer: a fully polynomial approximation scheme. The exact algorithm enumerates exponentially many sums; trimming the list at a relative error of ε/(2n) each round collapses the explosion, and the per-round errors compound to at most 1 + ε. The construction is also a lesson in why strong NP-completeness would have made it impossible.",
    objectives: [
      "Run EXACT-SUBSET-SUM on list-based subset sums and observe the exponential growth",
      "Define TRIM and prove the representative property y/(1+δ) ≤ z ≤ y",
      "Assemble the FPTAS: error compounding, list-size bound, and the weak-versus-strong NP-completeness moral"
    ],
    concepts: [
      {
        term: "The optimization version of subset sum",
        kind: "definition",
        statement: "Given positive integers $x_1, \\dots, x_n$ and a target $t$, find the subset $I$ maximizing $\\sum_{i \\in I} x_i$ subject to being $\\leq t$. The decision version — does some subset sum to exactly $t$? — is NP-complete by Chapter 34’s digit-column reduction, but only **weakly**: the problem has pseudo-polynomial algorithms, and that weakness is precisely what an FPTAS exploits.",
        detail: "Optimization and decision differ here: the optimization version always has an answer (possibly the empty subset), and approximation means finding a sum within a factor of the best."
      },
      {
        term: "EXACT-SUBSET-SUM",
        kind: "method",
        statement: "Maintain $L_i$ = the sorted list of all subset sums of $x_1, \\dots, x_i$ that do not exceed $t$: $L_0 = \\langle 0 \\rangle$ and $L_i = \\text{MERGE}(L_{i-1},\\ L_{i-1} + x_i)$ with sums above $t$ removed. The answer is the largest entry of $L_n$. Correct by construction — but $|L_i|$ can double every round (up to $2^i$), so the algorithm is exponential in the worst case.",
        detail: "This is the pseudo-polynomial dynamic program in disguise: with unary-encoded inputs the lists cannot exceed $t + 1$ entries; with binary encoding they can be exponentially long relative to the input size."
      },
      {
        term: "TRIM: relative-error deduplication",
        kind: "method",
        statement: "TRIM($L$, $\\delta$) scans the sorted list and keeps $z$ only if $z$ exceeds $(1 + \\delta)$ times the last kept value. Every discarded $y$ has a **representative** — the last kept $z$ — with $$\\frac{y}{1+\\delta} \\leq z \\leq y:$$ no information is lost beyond a factor $(1 + \\delta)$. Since kept values are pairwise more than a factor $(1 + \\delta)$ apart, a list within $[0, t]$ shrinks to at most $\\log_{1+\\delta} t + 2 \\approx (\\ln t)/\\delta$ entries.",
        detail: "The threshold is relative, not absolute — that is the entire trick. An absolute cutoff would lose too much on small sums and keep too much on large ones; multiplicative slack scales with the numbers."
      },
      {
        term: "APPROX-SUBSET-SUM",
        kind: "method",
        statement: "Run the exact algorithm, but after each merge, trim the list with $\\delta = \\varepsilon / (2n)$ and drop entries above $t$; return the largest surviving value $z$. List length stays $O((n \\lg t)/\\varepsilon)$, each merge costs that much, so the total is polynomial in $n$, $\\lg t$ and $1/\\varepsilon$.",
        detail: "The division by 2n is not decoration: it leaves room for the per-round errors to compound across all n rounds while staying within 1 + ε overall — the quiz below probes exactly this."
      },
      {
        term: "The FPTAS theorem",
        kind: "theorem",
        statement: "For $0 < \\varepsilon \\leq 1$, APPROX-SUBSET-SUM returns $z$ with $$\\frac{\\text{OPT}}{1 + \\varepsilon} \\;\\leq\\; z \\;\\leq\\; \\text{OPT}.$$ By induction on $i$: every true subset sum $y \\leq t$ of $x_1 \\dots x_i$ has a representative in $L_i$ with $y / (1 + \\delta)^i \\leq z \\leq y$. At $i = n$ the factor is $(1 + \\tfrac{\\varepsilon}{2n})^n \\leq e^{\\varepsilon/2} \\leq 1 + \\varepsilon$. No strongly NP-complete problem admits an FPTAS unless P = NP — a small enough ε would turn the scheme into an exact pseudo-polynomial algorithm, contradicting strong NP-completeness.",
        detail: "The final chain is worth savoring: each of the n rounds damages the representative by at most a factor (1 + ε/2n), and the compounding stays under e^{ε/2}, which for ε ≤ 1 sits below 1 + ε. Exponentials convert additive slack into multiplicative slack — the same calculus as compound interest."
      }
    ],
    figures: [
      {
        caption: "APPROX-SUBSET-SUM on $\\langle 100, 103, 206 \\rangle$ with $t = 206$, $\\delta = \\varepsilon/(2n) = 0.05$: 103 is trimmed because $103 \\leq 1.05 \\cdot 100$, and in the last round the optimum 206 itself is trimmed to 203, while 306 and 409 are dropped for exceeding $t$. The output 203 is within a factor 1.015 of OPT = 206.",
        svg: `<svg viewBox="0 0 720 310" width="100%" role="img" aria-label="Four rows of boxes showing the growing trimmed lists of subset sums, with trimmed and dropped entries marked"><text x="360" y="22" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">APPROX-SUBSET-SUM on ⟨100, 103, 206⟩, t = 206, δ = 0.05</text><text x="45" y="71" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600" font-style="italic">L₀</text><text x="45" y="131" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600" font-style="italic">L₁</text><text x="45" y="196" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600" font-style="italic">L₂</text><text x="45" y="266" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600" font-style="italic">L₃</text><rect x="90" y="50" width="56" height="34" rx="7" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="118" y="71" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">0</text><path d="M 118,88 L 118,104" stroke="currentColor" stroke-width="1.3"/><path d="M 118,104 L 114,97 M 118,104 L 122,97" stroke="currentColor" stroke-width="1.3" fill="none"/><text x="130" y="100" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.7">+ x₁ = 100 · merge · trim</text><rect x="90" y="110" width="56" height="34" rx="7" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="118" y="131" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">0</text><rect x="158" y="110" width="56" height="34" rx="7" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="186" y="131" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">100</text><path d="M 118,148 L 118,164" stroke="currentColor" stroke-width="1.3"/><path d="M 118,164 L 114,157 M 118,164 L 122,157" stroke="currentColor" stroke-width="1.3" fill="none"/><text x="130" y="160" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.7">+ x₂ = 103 · merge · trim</text><rect x="90" y="170" width="56" height="34" rx="7" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="118" y="191" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">0</text><rect x="158" y="170" width="56" height="34" rx="7" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="186" y="191" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">100</text><rect x="226" y="170" width="56" height="34" rx="7" fill="none" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="4 3"/><text x="254" y="191" font-family="ui-sans-serif, system-ui" font-size="13" fill="#f59e0b" text-anchor="middle">103</text><path d="M 230,204 L 278,174" stroke="#f59e0b" stroke-width="1.4"/><rect x="294" y="170" width="56" height="34" rx="7" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="322" y="191" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">203</text><text x="254" y="222" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">103 ≤ 1.05 · 100 — trimmed</text><path d="M 118,208 L 118,236" stroke="currentColor" stroke-width="1.3"/><path d="M 118,236 L 114,229 M 118,236 L 122,229" stroke="currentColor" stroke-width="1.3" fill="none"/><text x="130" y="228" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.7">+ x₃ = 206 · merge · drop &gt; t · trim</text><rect x="90" y="240" width="56" height="34" rx="7" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="118" y="261" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">0</text><rect x="158" y="240" width="56" height="34" rx="7" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="186" y="261" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">100</text><rect x="226" y="240" width="56" height="34" rx="7" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="254" y="261" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">203</text><rect x="294" y="240" width="56" height="34" rx="7" fill="none" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="4 3"/><text x="322" y="261" font-family="ui-sans-serif, system-ui" font-size="13" fill="#f59e0b" text-anchor="middle">206</text><path d="M 298,274 L 346,244" stroke="#f59e0b" stroke-width="1.4"/><rect x="362" y="240" width="56" height="34" rx="7" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.4"/><text x="390" y="261" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" opacity="0.45">306</text><rect x="430" y="240" width="56" height="34" rx="7" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.4"/><text x="458" y="261" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" opacity="0.45">409</text><text x="322" y="296" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">206 ≤ 1.05 · 203 — trimmed</text><text x="430" y="296" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.55">dropped: &gt; t = 206</text><path d="M 350,257 L 496,257" stroke="currentColor" stroke-width="1.3"/><path d="M 496,257 L 488,253 M 496,257 L 488,261" stroke="currentColor" stroke-width="1.3" fill="none"/><text x="560" y="261" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">return max L₃ = 203</text><text x="560" y="281" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="#10b981" text-anchor="middle">OPT = 206 · ratio 1.015 ≤ 1 + ε = 1.3</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "The optimum itself gets trimmed — and that is fine",
        problem: "Run APPROX-SUBSET-SUM on S = ⟨100, 103, 206⟩ with t = 206 and ε = 0.3, so δ = ε/(2n) = 0.3/6 = 0.05. Verify the guarantee.",
        steps: [
          { label: "Round 1", text: "$L_0 = \\langle 0 \\rangle$; merge with $L_0 + 100$: $\\langle 0, 100 \\rangle$. Nothing is within 5% of a larger kept value: $L_1 = \\langle 0, 100 \\rangle$." },
          { label: "Round 2", text: "Merge: $\\langle 0, 100, 103, 203 \\rangle$ — the exact sums of {100, 103}. Trim: $103 \\leq 1.05 \\cdot 100 = 105$, so 103 goes (represented by 100): $L_2 = \\langle 0, 100, 203 \\rangle$." },
          { label: "Round 3", text: "Merge $L_2$ with $L_2 + 206$: $\\langle 0, 100, 203, 206, 306, 409 \\rangle$. Drop 306, 409 (above $t$). Trim: $206 \\leq 1.05 \\cdot 203 = 213.15$, so the optimum 206 itself is trimmed: $L_3 = \\langle 0, 100, 203 \\rangle$." },
          { label: "Guarantee check", text: "Return $z = 203$. OPT $= 206$ (the single item 206; note $100 + 103 = 203$ too). Ratio $206/203 \\approx 1.015 \\leq 1 + \\varepsilon = 1.3$ — and the true (untrimmed) list would have held 5 sums: 0, 100, 103, 203, 206; trimming kept 3." }
        ],
        result: "z = 203, within 1.5% of the optimum — the guaranteed 30% slack was barely needed."
      },
      {
        title: "Trimming $[0..10]$ with $\\delta = 0.1$",
        problem: "List $L = [0,2,4,6,8,10]$, $\\delta = 0.1$. TRIM it and bound the error.",
        steps: [
          { label: "Keep 0", text: "Keep $0$; last $= 0$." },
          { label: "Scan", text: "$2 > 0\\cdot 1.1 = 0$: keep $2$, last $= 2$. $4 > 2.2$: keep $4$. $6 > 4.4$: keep $6$. $8 > 6.6$: keep $8$. $10 > 8.8$: keep $10$: no trim (gaps exceed $10\\%$)." },
          { label: "Dense case", text: "Had $L = [8,8.1,8.5,9]$: $8.1 \\le 8.8$ dropped (represented by $8$ within $10\\%$), $8.5$ kept? $8.5 \\le 8.8$ dropped, $9 > 8.8$ kept: $[8,9]$." },
          { label: "Error", text: "Each dropped $y$ has kept $z$ with $y/(1+\\delta) \\le z \\le y$: per-round $10\\%$ compounds over $n$ rounds to $(1+\\varepsilon)$ via $\\delta = \\varepsilon/2n$." },
        ],
        result: "$[0,2,4,6,8,10]$ untrimmed (all gaps $> 10\\%$); dense lists collapse to $O(\\log t/\\delta)$ representatives with relative error $\\delta$ per round.",
      },
    ],
    keyTakeaways: [
      "The exact list algorithm is exponential only because sums proliferate; each is a genuine subset value.",
      "Trimming deletes a value only when a representative within a factor (1 + δ) survives — relative error, compounding over n rounds to at most 1 + ε with δ = ε/(2n).",
      "The result is an FPTAS: polynomial in n, lg t and 1/ε — possible exactly because SUBSET-SUM is only weakly NP-complete."
    ],
    quiz: [
      {
        q: "TRIM keeps z and discards a later y when y ≤ (1 + δ)·z. The discarded y is then represented in the sense that…",
        options: [
          "z ≤ y ≤ (1 + δ)z",
          "y ≤ z ≤ (1 + δ)y",
          "z = y exactly",
          "y is lost with no representative"
        ],
        answer: 0,
        explanation: "The kept z is at most y (it came earlier in sorted order) and y is at most (1+δ)z by the discard rule — a two-sided relative-error guarantee."
      },
      {
        q: "Why trim with δ = ε/(2n) rather than ε?",
        options: [
          "to keep the lists sorted",
          "because per-round errors compound multiplicatively: (1 + δ)ⁿ over n rounds must still be ≤ 1 + ε",
          "because δ must be rational",
          "to make the merge step faster"
        ],
        answer: 1,
        explanation: "Each of the n rounds multiplies the worst-case relative error by (1 + δ); choosing δ = ε/(2n) keeps the compound product under e^{ε/2} ≤ 1 + ε."
      },
      {
        q: "After trimming, the list length inside [0, t] is bounded by about…",
        options: ["n²", "t", "(ln t)/δ + 2", "2ⁿ"],
        answer: 2,
        explanation: "Kept values are pairwise more than a factor (1 + δ) apart, and within a factor t of the smallest value, so at most log base (1+δ) of t ≈ (ln t)/δ of them fit."
      },
      {
        q: "A strongly NP-complete problem cannot admit an FPTAS (unless P = NP) because…",
        options: [
          "an FPTAS with ε small enough would act as a polynomial-time exact algorithm even when the numbers are polynomially bounded",
          "strongly NP-complete problems have no optima",
          "FPTASs require unary input encoding",
          "trimming fails on short lists"
        ],
        answer: 0,
        explanation: "With polynomially bounded numbers, OPT/(1+ε) and OPT differ by less than 1 for tiny ε, so the ‘approximate’ answer is exact — contradicting strong NP-completeness."
      }
    ]
  }
]
