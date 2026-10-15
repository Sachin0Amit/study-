import type { SectionContent } from "../library"

// ============================================================================
// Cormen, Leiserson, Rivest, Stein — Introduction to Algorithms, 3rd Edition
// Chapter 25: All-Pairs Shortest Paths (Sections 25.1 – 25.3)
// Master study content.
// ============================================================================

export const clrsCh25Content: SectionContent[] = [
  // ---------------------------------------------------------------- 25.1
  {
    sectionId: "clrs-ch25-s1",
    readingTime: 7,
    intro: "All-pairs shortest paths asks for the entire $n \\times n$ distance matrix at once. Running a single-source algorithm from each vertex is a start — $n$ Dijkstra runs are fine on non-negative dense graphs — but the chapter's first idea is stranger and more elegant: shortest paths obey a matrix product, provided we replace multiplication by addition and addition by minimization. The result is a family of $\\Theta(n^3 \\lg n)$ algorithms built from pure linear algebra.",
    objectives: [
      "State the all-pairs problem and explain why $n$ single-source runs are not always the answer",
      "Define the matrices $L^{(m)}$ and derive the min-plus matrix product that extends them",
      "Analyze the repeated-squaring algorithm and its negative-cycle test",
    ],
    concepts: [
      {
        term: "The all-pairs problem",
        kind: "definition",
        statement: "Given a weighted, directed graph $G = (V, E)$ with no negative-weight cycles, produce the **distance matrix** $D = (d_{ij})$ with $d_{ij} = \\delta(i, j)$, together with a **predecessor matrix** $\\Pi = (\\pi_{ij})$ from which the shortest path $i \\leadsto j$ can be reconstructed ($\\pi_{ij}$ is the second-to-last vertex on it).",
        detail: "Running the chapter 24 machinery from every source costs $\\Theta(V^3)$ with array-Dijkstra (dense, non-negative weights) — but with negative edges, $n$ Bellman-Ford runs cost $O(V^2 E)$, which is $O(V^4)$ on dense graphs. The goal of this chapter is $\\Theta(V^3)$ methods that also tolerate negative weights.",
      },
      {
        term: "The $L^{(m)}$ recursion",
        kind: "method",
        statement: "Let $L^{(m)} = (l^{(m)}_{ij})$ where $l^{(m)}_{ij}$ is the minimum weight of any path from $i$ to $j$ that uses **at most $m$ edges**; the base case is $L^{(1)} = W$, the weight matrix itself. Then extending paths by one edge is a **min-plus matrix product**: $$L^{(m)} = W \\odot L^{(m-1)}, \\qquad l^{(m)}_{ij} = \\min_{1 \\le k \\le n} \\{ l^{(m-1)}_{ik} + w_{kj} \\}.$$ Computing $W \\odot L^{(m-1)}$ from scratch costs $\\Theta(n^3)$.",
        detail: "The operation $\\odot$ replaces the ring $(+, \\times)$ of ordinary matrix multiplication with $(\\min, +)$ — the *tropical* or *min-plus semiring*. All the familiar algebra survives: $\\odot$ is associative, and the identity element is the matrix with $0$ on the diagonal and $\\infty$ elsewhere.",
      },
      {
        term: "Why $n - 1$ extensions suffice",
        kind: "theorem",
        statement: "If the graph has no negative-weight cycle, then every shortest path is simple and uses at most $n - 1$ edges, so $L^{(n-1)} = D$. Moreover, once the distances have converged they stay converged: $L^{(n)} = L^{(n-1)}$. Conversely, a negative-weight cycle keeps some entry decreasing forever — in particular some **diagonal entry** $l^{(m)}_{ii}$ eventually goes negative, since a closed walk of at most $n$ edges with negative total weight must contain a negative cycle.",
        detail: "This gives a clean detection rule: compute $L^{(n)}$; if some $l^{(n)}_{ii} < 0$, a negative cycle exists and $D$ is undefined. (Careful: the entries of $L^{(m)}$ are path weights, so the test must be stated over walks of bounded length — the diagonal is exactly where closed walks show up.)",
      },
      {
        term: "Repeated squaring",
        kind: "method",
        statement: "Instead of multiplying by $W$ one edge at a time, square the matrix: $L^{(2m)} = L^{(m)} \\odot L^{(m)}$. Starting from $L^{(1)} = W$, after $\\lceil \\lg (n-1) \\rceil$ products we hold $L^{(2^{\\lceil \\lg (n-1) \\rceil})}$ with exponent at least $n - 1$ — which equals $D$ whenever no negative cycle exists. Total cost: **$\\Theta(n^3 \\lg n)$**.",
        detail: "Squaring is legal precisely because $\\odot$ is associative — the same property that fails for nothing in ordinary algebra but which must be *proved* for min-plus. Each product is still $\\Theta(n^3)$: $n^3$ cells, each a minimum over $n$ candidates.",
      },
      {
        term: "Min-plus algebra",
        kind: "notation",
        statement: "Replace $+$ by $\\min$ and $\\cdot$ by $+$: the min-plus product $(C = A \\odot B)$ has $c_{ij} = \\min_k(a_{ik}+b_{kj})$. Then $L^{(m)} = L^{(m-1)} \\odot W$: extending paths by one edge is matrix multiplication in this semiring, with $\\infty$ as zero and $0$ as one.",
        detail: "Associativity survives ($\\min$ distributes over $+$), so repeated squaring $L^{(2m)} = L^{(m)} \\odot L^{(m)}$ is valid: the same exponentiation-by-squaring as integers, with $\\odot$ for $\\cdot$.",
      },
    ],
    examples: [
      {
        title: "Two min-plus products on a four-vertex graph",
        problem: "A four-vertex digraph has edges $1 \\to 3$ (3), $2 \\to 1$ (2), $3 \\to 2$ (7), $3 \\to 4$ (1), $4 \\to 1$ (6). Its weight matrix is $$W = \\begin{pmatrix} 0 & \\infty & 3 & \\infty \\\\ 2 & 0 & \\infty & \\infty \\\\ \\infty & 7 & 0 & 1 \\\\ 6 & \\infty & \\infty & 0 \\end{pmatrix}.$$ Compute $D$ by matrix extension.",
        steps: [
          { label: "One edge", text: "$L^{(1)} = W$: the best (and only) at-most-1-edge trips are the direct edges; all other entries are $\\infty$." },
          { label: "First product", text: "$L^{(2)} = W \\odot W$. Cell by cell: $l^{(2)}_{14} = \\min(0 + \\infty, \\; \\infty + \\infty, \\; 3 + 1, \\; \\infty + 0) = 4$ — the path $1 \\to 3 \\to 4$. $l^{(2)}_{24} = \\min(2 + \\infty, 0 + \\infty, \\infty + 1, \\infty + 0) = \\infty$: no 2-edge path reaches 4 from 2. $l^{(2)}_{31} = \\min(\\infty, 7 + 2, 0, 1 + 6) = 7$ via $3 \\to 4 \\to 1$." },
          { label: "The matrix after two edges", text: "$$L^{(2)} = \\begin{pmatrix} 0 & 10 & 3 & 4 \\\\ 2 & 0 & 5 & \\infty \\\\ 7 & 7 & 0 & 1 \\\\ 6 & \\infty & 9 & 0 \\end{pmatrix}$$ — for instance $l^{(2)}_{12} = 10$ via $1 \\to 3 \\to 2$ and $l^{(2)}_{43} = 9$ via $4 \\to 1 \\to 3$." },
          { label: "Second product", text: "$L^{(3)} = W \\odot L^{(2)}$. The interesting cells: $l^{(3)}_{24} = \\min(2 + 4, \\; 0 + \\infty, \\; \\infty, \\; \\infty) = 6$ — the three-edge path $2 \\to 1 \\to 3 \\to 4$ — and $l^{(3)}_{42} = \\min(6 + 10, \\; \\infty, \\; \\infty, \\; 0 + \\infty) = 16$ — the path $4 \\to 1 \\to 3 \\to 2$ with $6 + 3 + 7 = 16$." },
          { label: "The matrix after three edges", text: "$$L^{(3)} = \\begin{pmatrix} 0 & 10 & 3 & 4 \\\\ 2 & 0 & 5 & 6 \\\\ 7 & 7 & 0 & 1 \\\\ 6 & 16 & 9 & 0 \\end{pmatrix}$$ Cell $(2,4)$ was the last entry to turn finite — proof that this graph genuinely needs all $n - 1 = 3$ extensions." },
          { label: "Stop at $n - 1 = 3$", text: "With four vertices, simple paths have at most 3 edges, so $D = L^{(3)}$ — and indeed every entry repeats in $L^{(4)}$. The diagonal stays 0, confirming no negative cycles." },
        ],
        result: "$$D = \\begin{pmatrix} 0 & 10 & 3 & 4 \\\\ 2 & 0 & 5 & 6 \\\\ 7 & 7 & 0 & 1 \\\\ 6 & 16 & 9 & 0 \\end{pmatrix}$$ Repeated squaring would get here with just $\\lceil \\lg 3 \\rceil = 2$ products — $L^{(2)} = W \\odot W$, then $L^{(4)} = L^{(2)} \\odot L^{(2)}$ — since $L^{(4)} = L^{(3)} = D$ once converged. Each product is a fixed $\\Theta(4^3)$ amount of work; the recursion tracks *path length in the exponent*, not the graph size.",
      },
      {
        title: "One min-plus product by hand",
        problem: "On $V = \\{1,2\\}$, $W = [[0,3],[\\infty,0]]$. Compute $W \\odot W = L^{(2)}$.",
        steps: [
          { label: "$c_{11}$", text: "$\\min(W_{11}+W_{11}, W_{12}+W_{21}) = \\min(0+0, 3+\\infty) = 0$." },
          { label: "$c_{12}$", text: "$\\min(0+3, 3+0) = 3$: direct $3$ ties two-hop $3$." },
          { label: "$c_{21},c_{22}$", text: "$c_{21} = \\min(\\infty+0, 0+\\infty) = \\infty$ (no path $2 \\leadsto 1$); $c_{22} = \\min(\\infty+3, 0+0) = 0$." },
          { label: "Read", text: "$L^{(2)} = [[0,3],[\\infty,0]] = W$: with $n-1 = 1$ extension needed for $n = 2$, one product already stabilizes: $L^{(1)} = L^{(2)}$." },
        ],
        result: "$W \\odot W = [[0,3],[\\infty,0]]$: min-plus squaring extends path length exactly as $\\cdot$ extends degree.",
      },
    ],
    keyTakeaways: [
      "Path extension is a matrix product over the min-plus semiring: $l^{(m)}_{ij} = \\min_k \\{ l^{(m-1)}_{ik} + w_{kj} \\}$, one $\\Theta(n^3)$ product per added edge.",
      "With no negative cycles, $L^{(n-1)} = D$ and the sequence converges; a negative diagonal entry $l^{(n)}_{ii}$ exposes a negative cycle.",
      "Repeated squaring computes $D$ in $\\Theta(n^3 \\lg n)$ using only associativity of $\\odot$ — but it overshoots the exponent, so the edge-by-edge recursion is the safer cycle detector.",
    ],
    quiz: [
      {
        q: "What does the entry $l^{(m)}_{ij}$ of the matrix $L^{(m)}$ represent?",
        options: [
          "The minimum weight of a path from $i$ to $j$ using exactly $m$ edges",
          "The minimum weight of a path from $i$ to $j$ using at most $m$ edges",
          "The minimum weight of a simple cycle through $i$ and $j$ of length $m$",
          "The number of shortest paths from $i$ to $j$ with $m$ edges",
        ],
        answer: 1,
        explanation: "At most, not exactly: min-plus products can only shorten candidate walks, so $L^{(m)}$ keeps every shorter path found earlier — that monotonicity is what makes $L^{(n-1)} = D$ possible.",
      },
      {
        q: "Ordinary matrix multiplication uses the ring $(+, \\times)$. The shortest-paths version replaces it by which operations?",
        options: ["$(\\max, \\min)$", "$(\\min, +)$", "$(+, \\min)$", "$(\\times, \\min)$"],
        answer: 1,
        explanation: "Additions of weights become the 'multiplication' (combining two path segments) and taking the minimum over intermediate vertices becomes the 'addition' (choosing among candidates): the min-plus or tropical semiring.",
      },
      {
        q: "With repeated squaring, how many min-plus products compute $D$ on an $n$-vertex graph, and at what total cost?",
        options: ["$n - 1$ products, $\\Theta(n^4)$ total", "$\\lceil \\lg (n-1) \\rceil$ products, $\\Theta(n^3 \\lg n)$ total", "$n$ products, $\\Theta(n^4)$ total", "One product, $\\Theta(n^3)$ total"],
        answer: 1,
        explanation: "Each squaring doubles the usable path length: after $k$ products you hold $L^{(2^k)}$, and $2^{\\lceil \\lg (n-1)\\rceil} \\ge n-1$, the maximum length of any simple path.",
      },
      {
        q: "In the worked four-vertex example, the entry $l^{(2)}_{24}$ is still $\\infty$ after two extensions. What exactly does that mean?",
        options: [
          "There is no path at all from vertex 2 to vertex 4",
          "There is no path from 2 to 4 that uses two or fewer edges",
          "Vertex 4 is unreachable from every other vertex",
          "The entry will never become finite, no matter how many products are taken",
        ],
        answer: 1,
        explanation: "$L^{(m)}$ only aggregates paths of at most $m$ edges. The three-edge path $2 \\to 1 \\to 3 \\to 4$ (weight $2 + 3 + 1 = 6$) exists, so $l^{(3)}_{24} = 6$ becomes finite on the very next product — reachability was never in doubt.",
      },
    ],
  },

  // ---------------------------------------------------------------- 25.2
  {
    sectionId: "clrs-ch25-s2",
    readingTime: 8,
    intro: "Floyd-Warshall is the dynamic-programming masterpiece of this chapter: one triple loop, $\\Theta(n^3)$ time, $\\Theta(n^2)$ space, negative weights tolerated. Its insight is to index subproblems by the *set of intermediate vertices* a path may use — and because those sets only grow, the entire computation fits in a single matrix updated in place.",
    objectives: [
      "State the intermediate-vertex recurrence and justify it by subpath optimality",
      "Explain why the in-place triple loop is valid even though $d^{(k)}$ overwrites $d^{(k-1)}$",
      "Use the diagonal to detect negative cycles, and build the transitive closure with the same loop structure",
    ],
    concepts: [
      {
        term: "The intermediate-vertex recurrence",
        kind: "method",
        statement: "Define $d^{(k)}_{ij}$ as the weight of the lightest path from $i$ to $j$ whose **intermediate vertices are all drawn from $\\{1, 2, \\dots, k\\}$** (endpoints excluded). Then $d^{(0)}_{ij} = w_{ij}$ and $$d^{(k)}_{ij} = \\min\\left( d^{(k-1)}_{ij}, \\; d^{(k-1)}_{ik} + d^{(k-1)}_{kj} \\right), \\qquad k = 1, \\dots, n.$$ After the $n$-th round, $d^{(n)}_{ij} = \\delta(i, j)$.",
        detail: "Why the recurrence: a path from $i$ to $j$ using intermediates from $\\{1..k\\}$ either never visits $k$ — weight $d^{(k-1)}_{ij}$ — or visits $k$ **exactly once** (with no negative cycle, visiting twice is never better), splitting into two subpaths whose intermediates come from $\\{1..k-1\\}$. By optimal substructure both are lightest such paths — this is the subpath optimality of Chapter 24 in DP clothing.",
      },
      {
        term: "One array, three loops: the in-place algorithm",
        kind: "method",
        statement: "**FLOYD-WARSHALL** keeps a single matrix $D$ and runs the loops in the order $k$, then $i$, then $j$, executing $d_{ij} \\leftarrow \\min(d_{ij}, d_{ik} + d_{kj})$. The $k$-th outer round implicitly turns $d^{(k-1)}$ into $d^{(k)}$ **in place**, because $d^{(k)}_{ik} = d^{(k-1)}_{ik}$ and $d^{(k)}_{kj} = d^{(k-1)}_{kj}$: reading 'stale' row $k$ and column $k$ is harmless.",
        detail: "The stale-read lemma: a lightest path from $i$ to $k$ whose intermediates lie in $\\{1..k\\}$ cannot gain by using $k$ itself as an intermediate — that would visit $k$ twice, and excising the enclosed cycle never increases the weight (assuming no negative cycles). Time $\\Theta(n^3)$ — just $n^3$ inner iterations, each one comparison and one add — and space $\\Theta(n^2)$.",
      },
      {
        term: "Negative cycles and the predecessor matrix",
        kind: "theorem",
        statement: "Floyd-Warshall is correct with **arbitrary negative edges** provided no negative-weight cycle exists. If a negative cycle exists, then during or after the run some **diagonal entry satisfies $d_{ii} < 0$** — a closed walk from $i$ back to $i$ with negative total — and $D$ must be discarded as meaningless.",
        detail: "The companion $\\Pi$ matrix is maintained in the same sweep: $\\pi^{(0)}_{ij}$ is NIL if $i = j$ or $w_{ij} = \\infty$, else $i$; and whenever the second branch of the min wins ($d_{ik} + d_{kj} < d_{ij}$), set $\\pi_{ij} \\leftarrow \\pi_{kj}$. Reconstructing the path $i \\leadsto j$ then walks the predecessor pointers backwards.",
      },
      {
        term: "Transitive closure",
        kind: "method",
        statement: "Replace the semiring once more — $(\\min, +)$ by $(\\lor, \\land)$ — and the same recurrence computes **reachability**: $t^{(k)}_{ij} = t^{(k-1)}_{ij} \\lor (t^{(k-1)}_{ik} \\land t^{(k-1)}_{kj})$ with $t^{(0)}_{ij}$ the adjacency bit. This is **Warshall's algorithm** for the transitive closure, $\\Theta(n^3)$ bit operations.",
        detail: "Storing rows as machine words makes each inner update a bitwise OR of two AND-ed rows — the practical speedup factor is the machine word size, giving roughly $n^3 / w$ word operations on a $w$-bit architecture.",
      },
      {
        term: "The $k$ loop must be outermost",
        kind: "insight",
        statement: "Floyd-Warshall's $k,i,j$ order is load-bearing: $d^{(k)}[i,j]$ must read $d^{(k-1)}[i,k], d^{(k-1)}[k,j]$ from the previous $k-1$ stage. With $k$ outermost the in-place update is safe ($d[i,k], d[k,j]$ are already $k$-final when used); with $i$ or $j$ outermost it silently computes the wrong recurrence.",
        detail: "Classic bug: swapping loops still typechecks and still runs $\\Theta(n^3)$ but allows intermediate vertices out of order, admitting paths that reuse $k$ inconsistently. The text's in-place correctness proof needs $k$ outermost.",
      },
    ],
    figures: [
      {
        caption: "The fully converged Floyd-Warshall table for the worked example (the five-vertex graph of CLRS Figure 25.1): each cell shows the final $\\delta(i, j)$, and the corner tag names the **last round $k$ whose second branch improved it** — deeper shading means a later $k$. Entries tagged with a dot ($\\cdot$) were already optimal as direct edges. Reading the pattern: row 4 needed only $k = 1$ for entry $(4,5) = -2$ (via $4 \\to 1 \\to 5$) and $k = 3$ for $(4,2) = -1$ (via $4 \\to 3 \\to 2$), while the entire fifth row $5 \\to \\{1,2,3\\}$ had to wait for $k = 4$ (the gateway $5 \\to 4$), and row 1 was finished only by $k = 5$ (the cheap edge $1 \\to 5$). The diagonal is all zeros — no negative cycles.",
        svg: `<svg viewBox="0 0 720 450" width="100%" role="img" aria-label="The final five by five Floyd-Warshall distance matrix; each cell carries its value and a small tag naming the round k that wrote it"><text x="360" y="30" font-family="ui-sans-serif, system-ui" font-size="14" fill="currentColor" text-anchor="middle" font-weight="600">Floyd–Warshall, final matrix — each cell records the k that wrote it</text><text x="360" y="50" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" fill-opacity="0.85">the fully converged table D of the worked example; deeper shading = the value arrived at a later round k</text><text x="343" y="68" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" font-style="italic" fill-opacity="0.75">j</text><text x="90" y="229" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" font-style="italic" fill-opacity="0.75">i</text><rect x="104" y="72" width="34" height="26" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="121" y="89" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" text-anchor="middle" fill-opacity="0.8">i∖j</text><rect x="138" y="72" width="82" height="26" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="179" y="89" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">1</text><rect x="220" y="72" width="82" height="26" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="261" y="89" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">2</text><rect x="302" y="72" width="82" height="26" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="343" y="89" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">3</text><rect x="384" y="72" width="82" height="26" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="425" y="89" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">4</text><rect x="466" y="72" width="82" height="26" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="507" y="89" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">5</text><rect x="104" y="98" width="34" height="52" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="121" y="128" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">1</text><rect x="104" y="150" width="34" height="52" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="121" y="180" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">2</text><rect x="104" y="202" width="34" height="52" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="121" y="232" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">3</text><rect x="104" y="254" width="34" height="52" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="121" y="284" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">4</text><rect x="104" y="306" width="34" height="52" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="121" y="336" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">5</text><rect x="138" y="98" width="82" height="52" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="179" y="129.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">0</text><text x="215" y="112" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">·</text><rect x="220" y="98" width="82" height="52" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="261" y="129.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">1</text><text x="297" y="112" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k5</text><rect x="302" y="98" width="82" height="52" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="343" y="129.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">−3</text><text x="379" y="112" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k5</text><rect x="384" y="98" width="82" height="52" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="425" y="129.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">2</text><text x="461" y="112" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k5</text><rect x="466" y="98" width="82" height="52" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="507" y="129.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">−4</text><text x="543" y="112" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">·</text><rect x="138" y="150" width="82" height="52" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="179" y="181.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">3</text><text x="215" y="164" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k4</text><rect x="220" y="150" width="82" height="52" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="261" y="181.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">0</text><text x="297" y="164" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">·</text><rect x="302" y="150" width="82" height="52" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="343" y="181.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">−4</text><text x="379" y="164" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k4</text><rect x="384" y="150" width="82" height="52" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="425" y="181.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">1</text><text x="461" y="164" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">·</text><rect x="466" y="150" width="82" height="52" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="507" y="181.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">−1</text><text x="543" y="164" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k4</text><rect x="138" y="202" width="82" height="52" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="179" y="233.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">7</text><text x="215" y="216" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k4</text><rect x="220" y="202" width="82" height="52" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="261" y="233.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">4</text><text x="297" y="216" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">·</text><rect x="302" y="202" width="82" height="52" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="343" y="233.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">0</text><text x="379" y="216" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">·</text><rect x="384" y="202" width="82" height="52" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="425" y="233.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">5</text><text x="461" y="216" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k2</text><rect x="466" y="202" width="82" height="52" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="507" y="233.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">3</text><text x="543" y="216" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k4</text><rect x="138" y="254" width="82" height="52" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="179" y="285.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">2</text><text x="215" y="268" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">·</text><rect x="220" y="254" width="82" height="52" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="261" y="285.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">−1</text><text x="297" y="268" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k3</text><rect x="302" y="254" width="82" height="52" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="343" y="285.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">−5</text><text x="379" y="268" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">·</text><rect x="384" y="254" width="82" height="52" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="425" y="285.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">0</text><text x="461" y="268" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">·</text><rect x="466" y="254" width="82" height="52" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="507" y="285.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">−2</text><text x="543" y="268" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k1</text><rect x="138" y="306" width="82" height="52" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="179" y="337.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">8</text><text x="215" y="320" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k4</text><rect x="220" y="306" width="82" height="52" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="261" y="337.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">5</text><text x="297" y="320" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k4</text><rect x="302" y="306" width="82" height="52" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="343" y="337.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">1</text><text x="379" y="320" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">k4</text><rect x="384" y="306" width="82" height="52" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="425" y="337.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">6</text><text x="461" y="320" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">·</text><rect x="466" y="306" width="82" height="52" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/><text x="507" y="337.5" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="600">0</text><text x="543" y="320" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="end" fill-opacity="0.7">·</text><rect x="132" y="378" width="30" height="20" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-width="1"/><text x="147" y="414" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" fill-opacity="0.85">k = 0</text><rect x="190" y="378" width="30" height="20" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.4" stroke-width="1"/><text x="205" y="414" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" fill-opacity="0.85">k = 1</text><rect x="248" y="378" width="30" height="20" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-opacity="0.4" stroke-width="1"/><text x="263" y="414" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" fill-opacity="0.85">k = 2</text><rect x="306" y="378" width="30" height="20" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.4" stroke-width="1"/><text x="321" y="414" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" fill-opacity="0.85">k = 3</text><rect x="364" y="378" width="30" height="20" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-opacity="0.4" stroke-width="1"/><text x="379" y="414" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" fill-opacity="0.85">k = 4</text><rect x="422" y="378" width="30" height="20" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.4" stroke-width="1"/><text x="437" y="414" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" fill-opacity="0.85">k = 5</text><text x="360" y="440" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" fill-opacity="0.85">cell value = δ(i, j); the corner tag names the last round k that improved it — · means the direct edge weight already won</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Floyd-Warshall on the five-vertex graph, round by round",
        problem: "Run Floyd-Warshall on the graph with edges $1 \\to 2$ (3), $1 \\to 3$ (8), $1 \\to 5$ ($-4$), $2 \\to 4$ (1), $2 \\to 5$ (7), $3 \\to 2$ (4), $4 \\to 1$ (2), $4 \\to 3$ ($-5$), $5 \\to 4$ (6): $$D^{(0)} = W = \\begin{pmatrix} 0 & 3 & 8 & \\infty & -4 \\\\ \\infty & 0 & \\infty & 1 & 7 \\\\ \\infty & 4 & 0 & \\infty & \\infty \\\\ 2 & \\infty & -5 & 0 & \\infty \\\\ \\infty & \\infty & \\infty & 6 & 0 \\end{pmatrix}$$",
        steps: [
          { label: "Round k = 1", text: "Only row 4 has a finite entry in column 1 ($d_{41} = 2$), so only paths through vertex 1 matter: $d_{42} \\leftarrow \\min(\\infty, 2 + 3) = 5$ (via $4 \\to 1 \\to 2$) and $d_{45} \\leftarrow \\min(\\infty, 2 - 4) = -2$ (via $4 \\to 1 \\to 5$). Every other cell is untouched." },
          { label: "Round k = 2", text: "Rows with finite column 2: rows 1 ($d_{12} = 3$), 3 ($d_{32} = 4$), 4 ($d_{42} = 5$). Improvements: $d_{14} \\leftarrow 3 + 1 = 4$ (via $1 \\to 2 \\to 4$); $d_{34} \\leftarrow 4 + 1 = 5$ and $d_{35} \\leftarrow 4 + 7 = 11$ (via $3 \\to 2 \\to \\dots$). Row 4 gains nothing: $5 + 1 = 6 > 0$ on the diagonal and $5 + 7 = 12 > -2$." },
          { label: "Checkpoint after k = 2", text: "$$D^{(2)} = \\begin{pmatrix} 0 & 3 & 8 & 4 & -4 \\\\ \\infty & 0 & \\infty & 1 & 7 \\\\ \\infty & 4 & 0 & 5 & 11 \\\\ 2 & 5 & -5 & 0 & -2 \\\\ \\infty & \\infty & \\infty & 6 & 0 \\end{pmatrix}$$ Rows 2 and 5 are still untouched: row 2 holds only the diagonal 0 in columns 1–2, and a zero-cost detour through vertex 2 reproduces exactly what it already has; row 5 is $\\infty$ toward both early transit vertices — it awakens at round 4, when the gateway $5 \\to 4$ becomes usable." },
          { label: "Round k = 3", text: "The star edge is $4 \\to 3$ with weight $-5$: $d_{42} \\leftarrow \\min(5, -5 + 4) = -1$ (via $4 \\to 3 \\to 2$). All other candidates lose or tie; the matrix is now $D^{(3)}$." },
          { label: "Round k = 4", text: "Vertex 4 is the hub: $d_{13} \\leftarrow 4 - 5 = -1$ (via $1 \\to 2 \\to 4 \\to 3$); $d_{21} \\leftarrow 1 + 2 = 3$, $d_{23} \\leftarrow 1 - 5 = -4$, $d_{25} \\leftarrow 1 - 2 = -1$; $d_{31} \\leftarrow 5 + 2 = 7$, $d_{35} \\leftarrow 5 - 2 = 3$; and the whole row 5 lands: $d_{51} \\leftarrow 6 + 2 = 8$, $d_{52} \\leftarrow 6 - 1 = 5$, $d_{53} \\leftarrow 6 - 5 = 1$." },
          { label: "Round k = 5", text: "The cheap edge $1 \\to 5$ finally pays off: $d_{12} \\leftarrow -4 + 5 = 1$, $d_{13} \\leftarrow -4 + 1 = -3$, $d_{14} \\leftarrow -4 + 6 = 2$ — all three via $1 \\to 5 \\to \\dots$. Nothing else improves; $D = D^{(5)}$." },
        ],
        result: "$$D = \\begin{pmatrix} 0 & 1 & -3 & 2 & -4 \\\\ 3 & 0 & -4 & 1 & -1 \\\\ 7 & 4 & 0 & 5 & 3 \\\\ 2 & -1 & -5 & 0 & -2 \\\\ 8 & 5 & 1 & 6 & 0 \\end{pmatrix}$$ For example $\\delta(1,3) = -3$ along $1 \\to 5 \\to 4 \\to 3$ with $-4 + 6 - 5 = -3$, and $\\delta(4,5) = -2$ along $4 \\to 1 \\to 5$. The diagonal is zero throughout — no negative cycle. Total work: $5^3 = 125$ inner steps.",
      },
      {
        title: "Floyd round $k = 1$ on three vertices",
        problem: "Weights: $1 \\to 2(3)$, $2 \\to 3(2)$, $1 \\to 3(10)$. Run $k = 1$ then $k = 2$.",
        steps: [
          { label: "Init $D^{(0)}$", text: "$[[0,3,10],[\\infty,0,2],[\\infty,\\infty,0]]$." },
          { label: "$k = 1$", text: "Via $1$: no improvement ($1$ has no incoming): $D^{(1)} = D^{(0)}$." },
          { label: "$k = 2$", text: "Via $2$: $d[1,3] = \\min(10, 3+2 = 5) = 5$: path $1 \\to 2 \\to 3$ discovered; $\\Pi[1,3] = \\Pi[2,3] = 2$." },
          { label: "$k = 3$", text: "Via $3$: no improvement. Final $[[0,3,5],[\\infty,0,2],[\\infty,\\infty,0]]$: $d[1,3] = 5$." },
        ],
        result: "$D = [[0,3,5],[\\infty,0,2],[\\infty,\\infty,0]]$ after $k = 1,2,3$; the $k = 2$ round is where the two-hop path appears.",
      },
    ],
    keyTakeaways: [
      "The DP state is the *allowed intermediate set* $\\{1..k\\}$; each round admits one more transit vertex, and the min either ignores it or splices two subpaths at it.",
      "In-place execution is safe because $d^{(k)}_{ik} = d^{(k-1)}_{ik}$ and $d^{(k)}_{kj} = d^{(k-1)}_{kj}$ — row $k$ and column $k$ are effectively round-invariant.",
      "Negative edges are fine; a negative cycle betrays itself as a negative diagonal entry, and the same loop skeleton over $(\\lor, \\land)$ computes the transitive closure.",
    ],
    quiz: [
      {
        q: "In the Floyd-Warshall recurrence, $d^{(k)}_{ij}$ is the minimum weight of a path from $i$ to $j$ whose intermediate vertices are drawn from which set?",
        options: ["$\\{1, \\dots, n\\}$ — all vertices", "$\\{1, \\dots, k\\}$", "$\\{k, k+1, \\dots, n\\}$", "$\\{i, j\\}$ only"],
        answer: 1,
        explanation: "The subproblems grow by admitting one new transit vertex per round; the endpoints are always allowed and never counted as intermediates.",
      },
      {
        q: "Why may the algorithm read $d_{ik}$ and $d_{kj}$ from the same array it is writing during round $k$?",
        options: [
          "Because the loops are ordered $i$, then $j$, then $k$",
          "Because a lightest $i \\leadsto k$ path never needs $k$ as an intermediate, so those entries stopped changing at round $k-1$",
          "Because all edge weights are assumed non-negative",
          "Because the matrix is copied at the start of every round",
        ],
        answer: 1,
        explanation: "A path ending at $k$ that visits $k$ in the middle would visit it twice; excising that closed cycle never increases the weight (absent negative cycles), so the round-$k$ values in row $k$ and column $k$ equal the round-$(k-1)$ values. The loop order must be $k$ outermost, and this is also why the algorithm tolerates negative edges but not negative cycles.",
      },
      {
        q: "How does Floyd-Warshall reveal that the input graph contains a negative-weight cycle?",
        options: [
          "It returns a matrix with some $\\infty$ entries",
          "Some diagonal entry satisfies $d_{ii} < 0$ during or after the run",
          "The predecessor pointers form a cycle of length $n$",
          "It fails to terminate within $n$ rounds",
        ],
        answer: 1,
        explanation: "A diagonal entry is a closed walk from a vertex to itself; if its optimum dips below 0, a negative cycle is responsible, and no shortest path exists. The run always terminates — it is a fixed triple loop.",
      },
      {
        q: "To compute the transitive closure instead of distances, which substitutions turn Floyd-Warshall into Warshall's algorithm?",
        options: [
          "Replace $\\min$ by $\\max$ and $+$ by $\\min$",
          "Replace $\\min$ by Boolean OR and $+$ by Boolean AND, on 0/1 matrices",
          "Replace $+$ by multiplication and keep $\\min$",
          "Run Floyd-Warshall and then compare each entry against $\\infty$",
        ],
        answer: 1,
        explanation: "Reachability is shortest paths in the Boolean semiring: concatenating paths is AND, choosing between them is OR. (Comparing entries against $\\infty$ also works, but only when you already ran the arithmetic version — Warshall's bit-parallel version is far cheaper.)",
      },
      // PYQ-pattern — Floyd-Warshall update (rephrased, values changed)
      {
        q: "Initial distances: $w(2,3) = 9, w(2,1) = 3, w(1,3) = 4$. After Floyd-Warshall admits vertex $1$ as intermediate, $d(2,3)$ becomes:",
        options: ["9", "7", "12", "3"],
        answer: 1,
        explanation: "Step 1 — Given: direct $2\\to3$ cost $9$, detour $2\\to1\\to3$ costs $3 + 4$. Step 2 — Governing update: $d^{(k)}[i,j] = \\min(d^{(k-1)}[i,j], d^{(k-1)}[i,k] + d^{(k-1)}[k,j])$ with intermediate set ${1}$. Step 3 — Arithmetic: $\\min(9, 3 + 4) = 7$, so the entry drops to $7$. Step 4 — Sanity check: detour beats direct, in-place order is safe since row and column $k$ are frozen, and no negative cycle interferes. Step 5 — Distractor analysis: $9$ skips the update, $12$ adds without comparing, and $3$ quotes one leg only. Step 6 — Conclude: $7$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 25.3
  {
    sectionId: "clrs-ch25-s3",
    readingTime: 7,
    intro: "Floyd-Warshall's $\\Theta(V^3)$ is unbeatable on dense graphs, but a sparse graph with a few thousand vertices deserves better. Johnson\'s algorithm gets the whole distance matrix in $O(VE + V^2 \\lg V)$ time — Dijkstra's speed, with negative edges allowed — by the oldest trick in physics: a change of potential that makes all weights non-negative while leaving every path comparison untouched.",
    objectives: [
      "Define reweighting by vertex potentials and prove it preserves shortest paths",
      "Show that Bellman-Ford on a super-source either produces a valid potential or exposes a negative cycle",
      "Assemble Johnson's algorithm and compare its running time with Floyd-Warshall\'s on sparse graphs",
    ],
    concepts: [
      {
        term: "Reweighting by vertex potentials",
        kind: "method",
        statement: "Given any function $h: V \\to \\mathbb{R}$, define the **reweighted graph** $\\hat{w}(u, v) = w(u, v) + h(u) - h(v)$. Then every path $p = \\langle v_0, \\dots, v_k \\rangle$ satisfies $\\hat{w}(p) = w(p) + h(v_0) - h(v_k)$ — the intermediate terms **telescope away** — so $p$ is a shortest $u \\leadsto v$ path under $\\hat{w}$ **if and only if** it is one under $w$.",
        detail: "The shift $h(u) - h(v)$ depends only on the endpoints, so it is a constant offset on every $u \\leadsto v$ path: comparisons among those paths are untouched. Distances transform as $\\hat{\\delta}(u, v) = \\delta(u, v) + h(u) - h(v)$, so recovering true distances after running Dijkstra is one subtraction per pair.",
      },
      {
        term: "Existence of a feasible potential",
        kind: "theorem",
        statement: "A potential $h$ with $\\hat{w}(u, v) \\ge 0$ for **every** edge exists if and only if $G$ contains no negative-weight cycle. Construct it by adding a new source $s$ with a zero-weight edge to every vertex and running **Bellman-Ford from $s$**: the distances $h(v) = \\delta(s, v)$ satisfy, for every edge $(u,v)$, $h(v) \\le h(u) + w(u,v)$ — i.e. $\\hat{w}(u,v) = w(u,v) + h(u) - h(v) \\ge 0$. If Bellman-Ford instead reports a negative cycle, no all-pairs answer exists.",
        detail: "The inequality $h(v) \\le h(u) + w(u,v)$ is nothing but the no-relaxation-possible condition of Section 24.1 — the shortest-path optimality certificate of the augmented graph. This is exactly the difference-constraint feasibility theorem of Section 24.4, with the edge requirements $\\hat{w} \\ge 0$ playing the role of the constraint system.",
      },
      {
        term: "The Johnson pipeline",
        kind: "method",
        statement: "**`JOHNSON(G, w)`**: (1) add the super-source and run Bellman-Ford — $O(VE)$; if it finds a negative cycle, report it and stop. (2) Compute $h$ and reweight every edge. (3) Remove $s$ and run **Dijkstra from each of the $n$ vertices** on $\\hat{w}$, obtaining $\\hat{\\delta}(u, \\cdot)$ each time. (4) Convert back: $d_{uv} = \\hat{\\delta}(u, v) + h(v) - h(u)$, and fill the predecessor matrix from the Dijkstra trees.",
        detail: "With binary heaps the total is $O(VE \\lg V)$; with Fibonacci heaps, $O(VE + V^2 \\lg V)$ — the Bellman-Ford pass plus $n$ Dijkstra runs. All of Dijkstra's machinery (Chapter 24) becomes available for the all-pairs problem the moment the weights are cleaned up.",
      },
      {
        term: "When Johnson beats Floyd-Warshall",
        kind: "insight",
        statement: "On **sparse** graphs, $E = O(V)$, Johnson costs $O(V^2 \\lg V)$ against Floyd-Warshall's fixed $\\Theta(V^3)$ — asymptotically better by nearly a factor of $V/\\lg V$. For **dense** graphs, $E = \\Theta(V^2)$, Johnson costs $O(V^3)$-plus-logging-overhead and Floyd-Warshall's simpler constant wins in practice.",
        detail: "Johnson's cost splits cleanly into 'one global negative-weight fix-up' (Bellman-Ford, $O(VE)$) plus 'a Dijkstra per vertex'. If all weights are already non-negative, step 1 can be skipped and $h \\equiv 0$ used — plain $n$-run Dijkstra.",
      },
      {
        term: "Johnson versus Floyd crossover",
        kind: "insight",
        statement: "Johnson costs $O(VE + V^2 \\lg V)$ (binary heap) versus Floyd $\\Theta(V^3)$: Johnson wins when $E = o(V^2/\\lg V)$, i.e. sparse graphs. On dense graphs ($E = \\Theta(V^2)$) Johnson is $O(V^3 \\lg V)$, asymptotically worse than Floyd's tight $\\Theta(V^3)$ with tiny constants.",
        detail: "With Fibonacci heaps Johnson is $O(VE + V^2 \\lg V) \\to O(V^2 \\lg V + VE)$; the textbook comparison assumes binary heaps. Negative edges force Johnson (Dijkstra alone cannot run); nonnegative dense graphs favor Floyd or repeated Dijkstra without reweighting.",
      },
    ],
    examples: [
      {
        title: "Johnson on the five-vertex graph — and a cross-check against Floyd-Warshall",
        problem: "Run Johnson on the same graph as the previous section: edges $1 \\to 2$ (3), $1 \\to 3$ (8), $1 \\to 5$ ($-4$), $2 \\to 4$ (1), $2 \\to 5$ (7), $3 \\to 2$ (4), $4 \\to 1$ (2), $4 \\to 3$ ($-5$), $5 \\to 4$ (6), and confirm the first row of the distance matrix.",
        steps: [
          { label: "Potentials from Bellman-Ford", text: "Add source $s$ with zero-weight edges to all five vertices and run Bellman-Ford. The shortest distances are $h = (h_1, \\dots, h_5) = (0, -1, -5, 0, -4)$: e.g. $h_3 = -5$ via $s \\to 4 \\to 3$ and $h_2 = -1$ via $s \\to 4 \\to 3 \\to 2 = -5 + 4$. Bellman-Ford returns TRUE — feasible, no negative cycle." },
          { label: "Reweight every edge", text: "Compute $\\hat{w} = w + h(u) - h(v)$: $1 \\to 2$: $3 + 0 - (-1) = 4$; $1 \\to 3$: $8 + 5 = 13$; $1 \\to 5$: $-4 + 4 = 0$; $2 \\to 4$: $1 - 1 = 0$; $2 \\to 5$: $7 - 1 + 4 = 10$; $3 \\to 2$: $4 - 5 + 1 = 0$; $4 \\to 1$: $2 + 0 = 2$; $4 \\to 3$: $-5 + 5 = 0$; $5 \\to 4$: $6 - 4 = 2$. All are non-negative — three exactly zero — so Dijkstra is licensed." },
          { label: "Dijkstra from vertex 1", text: "On $\\hat{w}$, extraction order $1, 5, 4, 3, 2$: extract $1$ ($0$): $\\hat{d}_5 = 0$, $\\hat{d}_2 = 4$, $\\hat{d}_3 = 13$; extract $5$: $\\hat{d}_4 = 2$; extract $4$: $\\hat{d}_3 \\leftarrow 2 + 0 = 2$; extract $3$: $\\hat{d}_2 \\leftarrow 2 + 0 = 2$. So $\\hat{\\delta}(1, \\cdot) = (0, 2, 2, 2, 0)$." },
          { label: "Convert back", text: "Since $h_1 = 0$: $d_{1v} = \\hat{\\delta}(1, v) + h(v) - h(1)$, giving $d_{12} = 2 - 1 = 1$, $d_{13} = 2 - 5 = -3$, $d_{14} = 2 + 0 = 2$, $d_{15} = 0 - 4 = -4$." },
          { label: "Cross-check", text: "The Floyd-Warshall result of the previous section has first row $(0, 1, -3, 2, -4)$ — identical. Running Dijkstra from vertices 2 through 5 and converting back fills the remaining rows of the same matrix." },
          { label: "The tree rides along", text: "Dijkstra also produced a shortest-path tree from vertex 1: $\\pi(5) = 1$, $\\pi(4) = 5$, $\\pi(3) = 4$, $\\pi(2) = 3$ — the chain $1 \\to 5 \\to 4 \\to 3 \\to 2$. Its reweighted length is $0 + 2 + 0 + 0 = 2 = \\hat{\\delta}(1,2)$; its true length is $-4 + 6 - 5 + 4 = 1 = d_{12}$. Assembling the $n$ per-source Dijkstra trees is exactly how the predecessor matrix $\\Pi$ gets filled." },
          { label: "The bill", text: "One Bellman-Ford pass over the augmented graph — $O(VE)$ on its $n + 1$ vertices and $m + n$ edges — plus $n$ Dijkstra runs on the cleaned weights. Here that is trivial ($n = 5$, nine edges); asymptotically it is the entire point: $O(VE + V^2 \\lg V)$ with Fibonacci heaps, versus $\\Theta(V^3)$ for Floyd-Warshall." },
        ],
        result: "Johnson reproduces the entire Floyd-Warshall matrix — here verified cell-by-cell on row 1 — at a cost of one $O(VE)$ Bellman-Ford pass plus five Dijkstra runs. On this dense example that is no bargain ($V^3$-ish either way), but with $E = O(V)$ the same work totals $O(V^2 \\lg V)$, crushing $\\Theta(V^3)$ as graphs grow sparse.",
      },
      {
        title: "Reweighting preserves order",
        problem: "Edges $a \\to b(-2)$, $b \\to c(1)$, $a \\to c(2)$. With potentials $h(a) = 0, h(b) = -2, h(c) = -1$ (from Bellman-Ford), compute $\\hat w$ and verify path order.",
        steps: [
          { label: "$\\hat w(a,b)$", text: "$-2 + 0 - (-2) = 0 \\ge 0$ ✓." },
          { label: "$\\hat w(b,c)$", text: "$1 + (-2) - (-1) = 0 \\ge 0$ ✓." },
          { label: "$\\hat w(a,c)$", text: "$2 + 0 - (-1) = 3 \\ge 0$ ✓." },
          { label: "Paths $a \\leadsto c$", text: "Direct $2$ vs via $b$ $-1$: original gap $3$; reweighted $3$ vs $0$: gap $3$ preserved ($\\hat w(p) = w(p) + h[a]-h[c]$ shifts every $a \\leadsto c$ path equally). Dijkstra on $\\hat w$ picks via-$b$, maps back to $-1$." },
        ],
        result: "$\\hat w = [0,0,3]$ all nonnegative; shortest-path order identical, weights shifted by $h[a]-h[c] = 1$.",
      },
    ],
    keyTakeaways: [
      "Reweighting $\\hat{w}(u,v) = w(u,v) + h(u) - h(v)$ shifts every $u \\leadsto v$ path by the same constant $h(u) - h(v)$, so it preserves which paths are shortest.",
      "The needed potential is free: $h = $ Bellman-Ford distances from a zero-edge super-source, computable exactly when no negative cycle exists.",
      "Johnson = one Bellman-Ford + $n$ Dijkstras: $O(VE + V^2 \\lg V)$ with Fibonacci heaps — the sparse-graph champion for all-pairs with negative edges.",
    ],
    quiz: [
      {
        q: "After reweighting with potential $h$, how are the new weights of every edge related to the requirement for running Dijkstra?",
        options: [
          "$\\hat{w}(u,v) = w(u,v) + h(u) - h(v)$ must be non-negative for every edge",
          "$\\hat{w}(u,v) = w(u,v) - h(u) + h(v)$ must be non-negative for every edge",
          "$\\hat{w}(u,v) = w(u,v) \\cdot h(u)/h(v)$ must be an integer",
          "$\\hat{w}(u,v) = w(u,v)$ — potentials may only change estimates, not weights",
        ],
        answer: 0,
        explanation: "The potential adds $h(u)$ at the tail and subtracts $h(v)$ at the head; Bellman-Ford's optimality certificate $h(v) \\le h(u) + w(u,v)$ is precisely the statement that this quantity is $\\ge 0$.",
      },
      {
        q: "A path $p$ from $u$ to $v$ has weight $w(p)$ under $w$. Under the reweighting, its weight $\\hat{w}(p)$ equals:",
        options: ["$w(p)$ exactly", "$w(p) + h(v) - h(u)$", "$w(p) + h(u) - h(v)$", "$w(p) \\cdot h(u) h(v)^{-1}$"],
        answer: 2,
        explanation: "The potential terms telescope: each internal vertex contributes $+h$ once as a head and $-h$ once as a tail, leaving only $+h(u) - h(v)$. The offset depends solely on the endpoints, which is why path comparisons are preserved.",
      },
      {
        q: "Bellman-Ford on the augmented graph (super-source with zero edges) detects a negative cycle. What does Johnson do?",
        options: [
          "Runs Dijkstra anyway and reports approximate distances",
          "Reports that the graph contains a negative-weight cycle and halts",
          "Doubles all weights and retries",
          "Falls back to Floyd-Warshall, which handles negative cycles",
        ],
        answer: 1,
        explanation: "With a negative cycle, shortest paths are $-\\infty$ along the affected vertices and the all-pairs problem has no solution. Floyd-Warshall does not rescue the situation either — it would merely exhibit a negative diagonal entry.",
      },
      {
        q: "For a sparse graph with $E = O(V)$, Johnson with Fibonacci-heap Dijkstra runs in:",
        options: ["$\\Theta(V^3)$, same as Floyd-Warshall", "$O(V^2 \\lg V)$", "$O(VE)$", "$O(V E \\lg V)$"],
        answer: 1,
        explanation: "$O(VE + V^2 \\lg V)$ collapses to $O(V^2 \\lg V)$ when $E = O(V)$ — the sparse-regime win over Floyd-Warshall's unconditional $\\Theta(V^3)$. With binary heaps the bound is the fourth option, which is why the heap choice matters here.",
      },
    ],
  },
]
