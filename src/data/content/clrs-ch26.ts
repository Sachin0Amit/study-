import type { SectionContent } from '../library'

// ============================================================================
// Cormen, Leiserson, Rivest, Stein — Introduction to Algorithms, 3rd Edition
// Chapter 26: Maximum Flow (Sections 26.1 – 26.5)
// Master study content.
// ============================================================================

export const clrsCh26Content: SectionContent[] = [
  // ---------------------------------------------------------------- 26.1
  {
    sectionId: "clrs-ch26-s1",
    readingTime: 6,
    intro: "Pipelines, traffic grids, freight lines — all reduce to one abstraction: a capacitated directed graph with a single source and a single sink, and one question, how much can be shipped from source to sink. This section fixes the three properties that make an assignment of numbers to edges a genuine flow, defines the value $|f|$ being maximized, and shows how to bend nonstandard situations (many sources, antiparallel pipes) into the standard shape. The six-vertex network introduced in the worked example here runs through the entire chapter.",
    objectives: [
      "Define flow networks and flows with all three properties: capacity constraint, skew symmetry, conservation",
      "Verify a candidate flow edge by edge and compute its value two ways (out of $s$, into $t$)",
      "Reduce multiple sources/sinks and antiparallel edges to the standard single-source, single-sink form"
    ],
    concepts: [
      {
        term: "Flow network",
        kind: "definition",
        statement: "A **flow network** $G = (V, E)$ is a directed graph in which each edge $(u, v) \\in E$ carries a nonnegative **capacity** $c(u, v) \\ge 0$, and we set $c(u,v) = 0$ for every ordered pair with $(u,v) \\notin E$. CLRS additionally assumes **no antiparallel pairs** — never both $(u,v)$ and $(v,u)$ in $E$ — exactly one **source** $s$ and one **sink** $t$, and that every vertex lies on some $s$-$t$ path.",
        detail: "The last assumption lets us discard irrelevant vertices, and it also justifies deleting self-loops $(u,u)$: by skew symmetry below they can carry no net flow, and they can never lie on a simple augmenting path."
      },
      {
        term: "Flow",
        kind: "definition",
        statement: "A **flow** is a function $f : V \\times V \\to \\mathbb{R}$ defined on *all* ordered pairs of vertices and satisfying three properties: **capacity constraint** $f(u,v) \\le c(u,v)$ for all $u, v \\in V$; **skew symmetry** $f(u,v) = -f(v,u)$; and **flow conservation** $\\sum_{v \\in V} f(u,v) = 0$ for every $u \\in V - \\{s, t\\}$.",
        detail: "Skew symmetry encodes *net* flow: $f(u,v) = -3$ on a pair simply means 3 units travel $v \\to u$. Combining the two constraints pins the net on any pair to $-c(v,u) \\le f(u,v) \\le c(u,v)$. The 2nd edition instead defined $f$ only on edges with equal in- and outflows; the 3rd edition's net-flow convention is what makes the cut arithmetic of Section 26.2 collapse into a single clean sum."
      },
      {
        term: "Value of a flow",
        kind: "notation",
        statement: "The **value** of a flow is the net amount it ships out of the source: $|f| = \\sum_{v \\in V} f(s, v)$. By conservation and skew symmetry the same number is the net amount entering the sink, $|f| = \\sum_{v \\in V} f(v, t)$. The **maximum-flow problem** is to find a flow of largest value.",
        detail: "The value could in principle be negative — if some edge pushes flow *into* $s$ — but a maximizing flow never chooses that. Note there is no single 'flow on edge $(u,v)$' bookkeeping limit beyond the capacity constraint; everything is net."
      },
      {
        term: "Modeling devices: supersource and subdivision",
        kind: "method",
        statement: "Nonstandard networks reduce to the standard form. **Multiple sources and sinks**: add a supersource $s$ with an edge $s \\to s_i$ of capacity equal to the supply $d_i$ at each source $s_i$ (or $\\infty$ if unbounded), and symmetric edges into a supersink. **Antiparallel edges** $(u,v)$ and $(v,u)$: subdivide one of them — replace $(v,u)$ by $(v,x)$ and $(x,u)$ with the *same* capacity $c(v,u)$ at a new vertex $x$.",
        detail: "Subdivision preserves the flow space exactly (any unit using $v \\to u$ now routes through $x$), which is why CLRS uses it — merging the pair into one edge of capacity $c(u,v) + c(v,u)$ does *not* work, since it would let the net flow in one direction exceed that direction's true capacity. CLRS Figure 26.2 runs this transformation on a street-network example; banning antiparallel pairs up front keeps the residual network of Section 26.2 unambiguous."
      },
      {
        term: "Skew symmetry $f(u,v) = -f(v,u)$",
        kind: "notation",
        statement: "Flow is antisymmetric: sending $5$ units $u \\to v$ is recorded as $f(u,v) = 5$ and $f(v,u) = -5$. Net flow aggregates both directions, so cancelling $3$ units is adding $-3$ to $f(u,v)$ (equivalently $+3$ to $f(v,u)$).",
        detail: "Skew symmetry makes conservation $\\sum_v f(u,v) = 0$ (for $u \\ne s,t$) a single equation covering in- and out-flow: inflow is negative outflow. Residual capacity $c_f(u,v) = c(u,v)-f(u,v)$ then automatically accounts for cancellations.",
      },
    ],
    examples: [
      {
        title: "Certifying a flow of value 19",
        problem: "The chapter's running network has edges and capacities $s \\to v_1$ (16), $s \\to v_2$ (13), $v_1 \\to v_3$ (12), $v_2 \\to v_1$ (4), $v_2 \\to v_4$ (14), $v_3 \\to v_2$ (9), $v_3 \\to t$ (20), $v_4 \\to v_3$ (7), $v_4 \\to t$ (4). A candidate assigns $f(s,v_1) = 10$, $f(s,v_2) = 9$, $f(v_1,v_3) = 10$, $f(v_2,v_4) = 9$, $f(v_4,v_3) = 5$, $f(v_4,t) = 4$, $f(v_3,t) = 15$, and 0 on the remaining two edges. Is this a legal flow, and what is its value?",
        steps: [
          { label: "Step 1: Capacity constraints", text: "Compare each edge against its capacity: $10 \\le 16$, $9 \\le 13$, $10 \\le 12$, $0 \\le 4$, $9 \\le 14$, $0 \\le 9$, $5 \\le 7$, $4 \\le 4$, $15 \\le 20$ — all pass. (The reverse pairs hold automatically: skew symmetry makes them the negatives, and $-x \\le 0 = c$.)" },
          { label: "Step 2: Conservation at $v_1$", text: "Inflow $f(s,v_1) + f(v_2,v_1) = 10 + 0$; outflow $f(v_1,v_3) = 10$. Net $\\sum_v f(v_1,v) = 10 - 10 = 0$. ✓" },
          { label: "Step 3: Conservation at $v_2$, $v_3$, $v_4$", text: "$v_2$: in $9 + 0$, out $0 + 9 = 0$ net ✓. $v_4$: in $9$, out $5 + 4 = 9$ ✓. $v_3$: in $10 + 5 + 0$, out $15$ ✓. Every internal vertex balances." },
          { label: "Step 4: The value, computed twice", text: "Out of the source: $|f| = f(s,v_1) + f(s,v_2) = 10 + 9 = 19$. Into the sink: $f(v_3,t) + f(v_4,t) = 15 + 4 = 19$. The two agree, as they must — this is the cut identity of Lemma 26.4 with $S = V - \\{t\\}$." }
        ],
        result: "A legal flow with $|f| = 19$. Whether 19 is the best possible is exactly the question Section 26.2 answers — and certifies."
      },
      {
        title: "Collapsing many sources and sinks with a supersource",
        problem: "Two factories ship through pipes to two depots: $s_1$ has supply 15, $s_2$ supply 10; depot $t_1$ demands 12, $t_2$ demands 13; pipes $s_1 \\to t_1$ (9), $s_1 \\to t_2$ (8), $s_2 \\to t_1$ (7), $s_2 \\to t_2$ (6). Reduce to the standard form and find the maximum shipment.",
        steps: [
          { label: "Step 1: Add the supersource and supersink", text: "Create $s$ with $c(s, s_1) = 15$ and $c(s, s_2) = 10$ — each new edge's capacity is its factory's supply — and $t$ with $c(t_1, t) = 12$ and $c(t_2, t) = 13$, the depots' demands. Shipment schedules obeying the supplies and demands now correspond exactly to flows in the extended network, with $|f| =$ total shipped." },
          { label: "Step 2: Solve the standard problem", text: "Push $f(s_1,t_1) = 7$ and $f(s_1,t_2) = 8$ (factory $s_1$ ships its full 15), $f(s_2,t_1) = 5$ and $f(s_2,t_2) = 5$ (factory $s_2$ its full 10). Depots receive $7+5 = 12$ and $8+5 = 13$ — exactly their demands — and every pipe stays within capacity." },
          { label: "Step 3: Certify with a cut", text: "The cut $(\\{s\\}, V - \\{s\\})$ has capacity $15 + 10 = 25 = |f|$, so the flow is maximum: no schedule ships more than the factories can produce. Here the demand side binds equally — total demand is $12 + 13 = 25$." }
        ],
        result: "25 units shipped — both factories at full supply, both depots at full demand. The reduction is lossless: every feasible multi-source schedule *is* a flow in the extended network, and conversely."
      }
    ],
    keyTakeaways: [
      "A flow is a net-flow function on all vertex pairs: capacity $f(u,v) \\le c(u,v)$, skew symmetry $f(u,v) = -f(v,u)$, and conservation at every vertex except $s$ and $t$.",
      "The value $|f| = \\sum_v f(s,v)$ is measurable at either end of the network — net out of the source equals net into the sink.",
      "Multiple sources/sinks collapse via a supersource with supply capacities; antiparallel pairs collapse via edge subdivision with unchanged capacity — never by merging."
    ],
    quiz: [
      {
        q: "The 3rd edition defines flows on all ordered pairs with skew symmetry $f(u,v) = -f(v,u)$. What does $f(u,v) = -3$ mean?",
        options: ["3 units flow from $u$ to $v$", "3 units flow from $v$ to $u$", "the pair is saturated", "conservation is violated at $u$"],
        answer: 1,
        explanation: "Negative net flow on $(u,v)$ is flow in the other direction; by skew symmetry $f(v,u) = 3$. This is exactly the bookkeeping that makes back edges first-class citizens."
      },
      {
        q: "The value of a flow is $|f| = \\sum_{v \\in V} f(s,v)$. This same quantity also equals:",
        options: ["$\\sum_{v \\in V} f(v,t)$, the net flow into the sink", "$\\sum_{v \\in V} c(s,v)$, the total source capacity", "the flow on the largest edge leaving $s$", "$\\sum_{u \\in V}\\sum_{v \\in V} f(u,v)$, all flow everywhere"],
        answer: 0,
        explanation: "Conservation forces whatever leaves $s$ to arrive at $t$ (net); summing conservation over all internal vertices kills every intermediate term, leaving source outflow = sink inflow."
      },
      {
        q: "A pipeline has sources $s_1, s_2$ with supplies $d_1, d_2$ and two sinks. The standard reduction adds a supersource $s$ with:",
        options: ["edges $s \\to s_i$ of capacity $d_i$ (and matching supersink edges)", "one edge $s \\to s_1$ of capacity $\\infty$", "edges $s_i \\to s$ of capacity 1", "no edges — the supersource is implicit"],
        answer: 0,
        explanation: "Each source's supply caps what it may emit, which is exactly a capacity $d_i$ on the new edge; unbounded supplies use $\\infty$. Flows in the extended network correspond exactly to feasible multi-source shipments."
      },
      {
        q: "The book's standing assumption forbids antiparallel pairs $(u,v)$ and $(v,u)$. To handle a network that violates it:",
        options: ["delete whichever edge has smaller capacity", "subdivide one edge: replace $(v,u)$ by $(v,x)$ and $(x,u)$, both of capacity $c(v,u)$", "merge the pair into one edge of capacity $c(u,v) + c(v,u)$", "reverse the direction of one edge"],
        answer: 1,
        explanation: "Subdivision preserves the flow space exactly. Merging is unsound: a single edge of capacity $c(u,v)+c(v,u)$ would allow net flow in one direction to exceed that direction's true capacity."
      }
    ]
  },

  // ---------------------------------------------------------------- 26.2
  {
    sectionId: "clrs-ch26-s2",
    readingTime: 9,
    intro: "The Ford-Fulkerson method improves a flow by repeatedly pushing along an augmenting path in the residual network — the network of remaining possibilities, in which yesterday's decisions can still be canceled along backward edges. Its correctness rests on the chapter's great theorem: when no augmenting path remains, a cut proves that nothing more can ever be shipped. This is the densest section of the chapter — the two figures (a residual network with a backward edge, and a flow pinned against its minimum cut) are worth as much study as the text.",
    objectives: [
      "Compute residual capacities in both directions and construct the residual network $G_f$",
      "Run the Ford-Fulkerson method by hand, including augmentations that traverse backward edges",
      "State the max-flow min-cut theorem and certify optimality with a saturated cut"
    ],
    concepts: [
      {
        term: "Residual network",
        kind: "definition",
        statement: "Given a flow $f$, the **residual network** is $G_f = (V, E_f)$ where $E_f = \\{(u,v) : c_f(u,v) > 0\\}$ and the **residual capacity** is $c_f(u,v) = c(u,v) - f(u,v)$. An edge is residual exactly when it can carry *more* net flow in that direction — including pairs absent from $E$: if 4 units flow $v_2 \\to v_1$, then $c_f(v_1, v_2) = 0 - (-4) = 4$.",
        detail: "The two directions trade off: $c_f(u,v) + c_f(v,u) = c(u,v) + c(v,u)$ — pushing a unit along $(u,v)$ empties $(v,u)$ at the same rate. And if $f'$ is any flow in $G_f$, the combination $f \\uparrow f'$ with $f \\uparrow f'(u,v) = f(u,v) + f'(u,v) - f'(v,u)$ is a flow in $G$ of value $|f| + |f'|$ (CLRS Lemma 26.1) — the algebraic license for augmentation."
      },
      {
        term: "Augmenting path",
        kind: "definition",
        statement: "An **augmenting path** is a simple path from $s$ to $t$ in $G_f$. Its **residual capacity** is the bottleneck $c_f(p) = \\min_{(u,v) \\in p} c_f(u,v) > 0$. Rerouting $c_f(p)$ units along $p$ — adding on forward edges, canceling on backward edges — produces a flow of value exactly $|f| + c_f(p)$ (Lemma 26.2).",
        detail: "The **Ford-Fulkerson method** is one sentence: while an augmenting path exists, push along it. CLRS calls it a *method*, not an algorithm, because the path choice is unspecified: DFS paths give $O(E |f^*|)$ with integer capacities; BFS by edge count — the **Edmonds-Karp algorithm** — gives $O(VE^2)$; and with pathological irrational capacities the process can fail ever to terminate, converging to the wrong value instead."
      },
      {
        term: "Cut of a flow network",
        kind: "definition",
        statement: "A **cut** of $(G, s, t)$ is a partition $(S, T)$ of $V$ with $s \\in S$ and $t \\in T$. Its **capacity** is $c(S,T) = \\sum_{u \\in S}\\sum_{v \\in T} c(u,v)$, and the **net flow across it** is $f(S,T) = \\sum_{u \\in S}\\sum_{v \\in T} f(u,v)$ — a single sum in which skew symmetry counts forward edges positively and back edges negatively. **Lemma 26.4**: for *every* cut, $|f| = f(S,T) \\le c(S,T)$.",
        detail: "A **minimum cut** has the least capacity among all cuts. The lemma is weak duality: whatever a flow does internally, it ships exactly $f(S,T)$ across any cut, and no cut of capacity $c(S,T)$ can ever carry more — every cut upper-bounds every flow."
      },
      {
        term: "Max-flow min-cut theorem",
        kind: "theorem",
        statement: "**Theorem 26.6.** The following are equivalent: (1) $f$ is a maximum flow; (2) $G_f$ contains no augmenting path; (3) some cut $(S,T)$ has $|f| = c(S,T)$. When (3) holds, $(S,T)$ is a minimum cut — and the canonical construction is $S = $ the vertices reachable from $s$ in $G_f$ (Corollary 26.7).",
        detail: "The full proof — three implications, each with its own idea (augmentation, reachability, weak duality) — is developed in the Going Deeper tier below. It is the chapter's centerpiece and the prototype of combinatorial duality arguments."
      },
      {
        term: "Cancelling flow on backward edges",
        kind: "insight",
        statement: "Residual backward edges $(v,u)$ with capacity $f(u,v)$ exist precisely to undo prior decisions: augmenting along a path that traverses $(v,u)$ reduces flow on $(u,v)$. Ford-Fulkerson therefore never commits irreversibly; every augmentation is revisable by a later one.",
        detail: "The section's five-augmentation example needs this once: an early augmentation saturates a shared edge the wrong way, and a later augmenting path sends flow backward along it to reroute. Without backward edges the method could jam below optimal.",
      },
    ],
    figures: [
      {
        caption: "The chapter's running network at its maximum flow, $|f^*| = 23$, pinned against the minimum cut $(S,T)$ with $S = \\{s, v_1, v_2, v_4\\}$ (dashed curve). Every edge crossing $S \\to T$ is saturated: $c(v_1,v_3) + c(v_4,v_3) + c(v_4,t) = 12 + 7 + 4 = 23$, and the one back edge $v_3 \\to v_2$ carries 0 — so $f(S,T) = c(S,T) = |f|$.",
        afterConcept: 3,
        svg: `<svg viewBox="0 0 720 312" width="100%" role="img" aria-label="Flow network with minimum cut" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><defs><marker id="fa-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="currentColor"/></marker></defs><path d="M 470,14 C 455,64 486,104 470,152 C 454,200 486,240 470,296" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.8"/><text x="155" y="34" text-anchor="middle" font-size="14" font-weight="700">S = {s, v₁, v₂, v₄}</text><text x="588" y="34" text-anchor="middle" font-size="14" font-weight="700">T = {v₃, t}</text><line x1="84" y1="141" x2="225" y2="85" stroke="currentColor" stroke-width="1.6" opacity="0.65" marker-end="url(#fa-arrow)"/><line x1="84" y1="159" x2="225" y2="215" stroke="currentColor" stroke-width="3" opacity="0.95" marker-end="url(#fa-arrow)"/><line x1="274" y1="75" x2="496" y2="75" stroke="currentColor" stroke-width="3" opacity="0.95" marker-end="url(#fa-arrow)"/><line x1="250" y1="201" x2="250" y2="99" stroke="currentColor" stroke-width="1.6" opacity="0.65" marker-end="url(#fa-arrow)"/><line x1="274" y1="229" x2="396" y2="246" stroke="currentColor" stroke-width="1.6" opacity="0.65" marker-end="url(#fa-arrow)"/><line x1="432" y1="229" x2="508" y2="96" stroke="currentColor" stroke-width="3" opacity="0.95" marker-end="url(#fa-arrow)"/><line x1="443" y1="242" x2="639" y2="169" stroke="currentColor" stroke-width="3" opacity="0.95" marker-end="url(#fa-arrow)"/><line x1="541" y1="87" x2="644" y2="140" stroke="currentColor" stroke-width="1.6" opacity="0.65" marker-end="url(#fa-arrow)"/><line x1="499" y1="87" x2="271" y2="213" stroke="currentColor" stroke-width="1.3" opacity="0.45" marker-end="url(#fa-arrow)"/><g font-size="13" text-anchor="middle" fill="currentColor" opacity="0.9"><text x="143" y="101">10/16</text><text x="137" y="207">13/13</text><text x="385" y="64">12/12</text><text x="263" y="152" text-anchor="start">2/4</text><text x="333" y="223">11/14</text><text x="449" y="168">7/7</text><text x="543" y="222">4/4</text><text x="604" y="104">19/20</text><text x="373" y="137">0/9</text></g><circle cx="60" cy="150" r="21" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="60" y="155" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">s</text><circle cx="250" cy="75" r="21" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="250" y="80" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">v₁</text><circle cx="250" cy="225" r="21" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="250" y="230" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">v₂</text><circle cx="420" cy="250" r="21" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="420" y="255" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">v₄</text><circle cx="520" cy="75" r="21" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="520" y="80" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">v₃</text><circle cx="665" cy="160" r="21" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="665" y="165" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">t</text><text x="665" y="198" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">|f| = 23</text><text x="62" y="307" font-size="12" opacity="0.65">bold = saturated edge (f = c)</text><text x="400" y="307" font-size="12" opacity="0.65">dashed curve = the cut (S, T), c(S, T) = 23</text></svg>`
      },
      {
        caption: "The residual network $G_f$ after four augmentations ($|f| = 21$). Dashed edges point backward — each exists only to cancel flow already pushed. The bold path $s \\to v_1 \\to v_2 \\to v_4 \\to v_3 \\to t$ has bottleneck $c_f(p) = \\min(8, 4, 5, 2, 3) = 2$; its second edge is the backward residual $v_1 \\to v_2$, whose capacity $c_f = 0 - (-4) = 4$ is pure cancellation of the flow on $v_2 \\to v_1$. Pushing along it is the final step to the maximum flow of 23.",
        afterConcept: 1,
        svg: `<svg viewBox="0 0 720 325" width="100%" role="img" aria-label="Residual network with backward edge" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><defs><marker id="fb-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="currentColor"/></marker></defs><line x1="84" y1="141" x2="225" y2="85" stroke="currentColor" stroke-width="3" opacity="1" marker-end="url(#fb-arrow)"/><line x1="250" y1="99" x2="250" y2="201" stroke="currentColor" stroke-width="3" stroke-dasharray="7 5" opacity="1" marker-end="url(#fb-arrow)"/><line x1="274" y1="229" x2="396" y2="246" stroke="currentColor" stroke-width="3" opacity="1" marker-end="url(#fb-arrow)"/><line x1="432" y1="229" x2="508" y2="96" stroke="currentColor" stroke-width="3" opacity="1" marker-end="url(#fb-arrow)"/><line x1="541" y1="87" x2="644" y2="140" stroke="currentColor" stroke-width="3" opacity="1" marker-end="url(#fb-arrow)"/><line x1="499" y1="87" x2="271" y2="213" stroke="currentColor" stroke-width="1.6" opacity="0.5" marker-end="url(#fb-arrow)"/><path d="M 225,85 C 195,135 140,160 84,141" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4" opacity="0.5" marker-end="url(#fb-arrow)"/><line x1="225" y1="215" x2="84" y2="159" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4" opacity="0.5" marker-end="url(#fb-arrow)"/><line x1="496" y1="75" x2="274" y2="75" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4" opacity="0.5" marker-end="url(#fb-arrow)"/><path d="M 396,246 C 350,270 300,258 274,229" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4" opacity="0.5" marker-end="url(#fb-arrow)"/><path d="M 508,96 C 545,150 545,190 432,229" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4" opacity="0.5" marker-end="url(#fb-arrow)"/><line x1="643" y1="168" x2="443" y2="242" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4" opacity="0.5" marker-end="url(#fb-arrow)"/><path d="M 644,148 Q 598,152 541,87" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4" opacity="0.5" marker-end="url(#fb-arrow)"/><g font-size="13" text-anchor="middle" fill="currentColor" opacity="0.95"><text x="143" y="101" font-weight="700">8</text><text x="263" y="143" text-anchor="start" font-weight="700">4</text><text x="263" y="159" text-anchor="start" font-size="11" font-style="italic" opacity="0.8">backward</text><text x="333" y="223" font-weight="700">5</text><text x="449" y="168" font-weight="700">2</text><text x="604" y="104" font-weight="700">3</text></g><g font-size="13" text-anchor="middle" fill="currentColor" opacity="0.6"><text x="373" y="137">9</text><text x="168" y="130">8</text><text x="140" y="200">13</text><text x="385" y="64">12</text><text x="335" y="262">9</text><text x="540" y="166">5</text><text x="548" y="218">4</text><text x="612" y="140">17</text></g><circle cx="60" cy="150" r="21" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="60" y="155" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">s</text><circle cx="250" cy="75" r="21" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="250" y="80" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">v₁</text><circle cx="250" cy="225" r="21" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="250" y="230" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">v₂</text><circle cx="420" cy="250" r="21" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="420" y="255" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">v₄</text><circle cx="520" cy="75" r="21" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="520" y="80" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">v₃</text><circle cx="665" cy="160" r="21" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="665" y="165" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">t</text><text x="62" y="307" font-size="12" opacity="0.65">solid = forward residual (add flow) · dashed = backward residual (cancel flow)</text><text x="62" y="322" font-size="12" opacity="0.65">bold = the augmenting path, bottleneck 2</text></svg>`
      }
    ],
    examples: [
      {
        title: "Five augmentations, one backward edge, one saturated cut",
        problem: "Run the Ford-Fulkerson method by hand on the chapter network (capacities as in Section 26.1) from the zero flow. A poor early path choice gets repaired by a backward edge; then certify the answer with a cut.",
        steps: [
          { label: "Augment 1", text: "Path $s \\to v_2 \\to v_1 \\to v_3 \\to t$; residuals $13, 4, 12, 20$ — bottleneck 4. Value $= 4$. The cross edge $v_2 \\to v_1$ is convenient now and awkward later." },
          { label: "Augment 2", text: "$s \\to v_1 \\to v_3 \\to t$: residuals $16,\\ 12 - 4 = 8,\\ 20 - 4 = 16$ — bottleneck 8. Value $= 12$; $v_1 \\to v_3$ is saturated at 12." },
          { label: "Augment 3", text: "$s \\to v_2 \\to v_4 \\to t$; residuals $13 - 4 = 9, 14, 4$ — bottleneck 4. Value $= 16$." },
          { label: "Augment 4", text: "$s \\to v_2 \\to v_4 \\to v_3 \\to t$; residuals $9 - 4 = 5, 14 - 4 = 10, 7, 16 - 8 = 8$ — bottleneck 5. Value $= 21$. Both $s \\to v_2$ (13/13) and $v_2 \\to v_1$ (4/4) are now saturated — this is the state drawn in the residual-network figure." },
          { label: "Augment 5 — the repair", text: "Exactly one augmenting path remains: $s \\to v_1 \\to v_2 \\to v_4 \\to v_3 \\to t$. Its second edge is *backward*: $c_f(v_1,v_2) = 0 - f(v_1,v_2) = 0 - (-4) = 4$. Bottleneck $\\min(8, 4, 5, 2, 3) = 2$: push 2, canceling $f(v_2,v_1)$ down to 2 and redirecting those units through $v_2 \\to v_4 \\to v_3 \\to t$. Value $= 23$." },
          { label: "Stop and certify", text: "From $s$ in $G_f$ we reach $v_1$ ($s \\to v_1$ has 6 left), $v_2$ (via backward $v_1 \\to v_2$, 2 left), and $v_4$ (3 left on $v_2 \\to v_4$) — but $v_4$'s exits $v_4 \\to v_3$ and $v_4 \\to t$ are both saturated, so $t$ is unreachable. Thus $S = \\{s, v_1, v_2, v_4\\}$ and $c(S,T) = c(v_1,v_3) + c(v_4,v_3) + c(v_4,t) = 12 + 7 + 4 = 23 = |f|$." }
        ],
        result: "Maximum flow 23, certified by the minimum cut $(\\{s, v_1, v_2, v_4\\}, \\{v_3, t\\})$ of capacity 23 — flow equals cut, so neither can improve (Theorem 26.6). The final flow: $f(s,v_1) = 10$, $f(s,v_2) = 13$, $f(v_2,v_1) = 2$, $f(v_1,v_3) = 12$, $f(v_2,v_4) = 11$, $f(v_4,v_3) = 7$, $f(v_4,t) = 4$, $f(v_3,t) = 19$, $f(v_3,v_2) = 0$."
      },
      {
        title: "Augmenting through a backward edge",
        problem: "Network $s \\to a(3)$, $s \\to b(3)$, $a \\to t(3)$, $b \\to t(3)$, $a \\to b(2)$. After pushing $3$ on $s-a-b-t$, show the next augmentation uses $(b,a)$ backward? Actually trace the textbook reroute.",
        steps: [
          { label: "First push", text: "Path $s \\to a \\to b \\to t$ bottleneck $2$? Capacities $3,2,3$: push $2$: $f(s,a) = 2$, $f(a,b) = 2$, $f(b,t) = 2$." },
          { label: "Residual", text: "Backward capacities $2$ on $(a,s),(b,a),(t,b)$ appear; forward $s \\to a$ remains $1$, $b \\to t$ remains $1$." },
          { label: "Second push", text: "Path $s \\to a \\to t$ ($1$ left) plus $s \\to b \\to t$ ($1$ left): push $1+1 = 2$ more: total $4$? Optimal is $6$: further augmentations $s \\to a \\to t$? Systematically Ford-Fulkerson reaches $6$ by also using $a \\to b$ forward then cancelling if needed." },
          { label: "Lesson", text: "Backward edge $(b,a)$ would carry flow if early pushes oversubscribed $a \\to b$: augmenting $s \\to b \\to a \\to t$ cancels $1$ unit of $a \\to b$ to rebalance toward the $3+3$ optimum." },
        ],
        result: "Residual backward edges make every push revisable; max flow $6$ needs the $a \\to b$ capacity plus its backward undo, certified by the $\\{s\\}$ cut $3+3$.",
      },
    ],
    keyTakeaways: [
      "The residual network is the search space: its $s$-$t$ paths are exactly the remaining improvements, and backward edges are how the method repairs earlier routing mistakes.",
      "Lemma 26.4 — $|f| = f(S,T) \\le c(S,T)$ for every cut — is weak duality: no flow beats any cut.",
      "Max flow = min cut: when Ford-Fulkerson halts, the set reachable from $s$ in $G_f$ yields a saturated cut, a cheaply checkable certificate that the flow is optimal."
    ],
    quiz: [
      {
        q: "A pair with no edge — $c(u,v) = 0$ — has $f(u,v) = -4$ (4 units net $v \\to u$). What is the residual capacity $c_f(u,v)$?",
        options: ["0", "4", "-4", "undefined, since $(u,v) \\notin E$"],
        answer: 1,
        explanation: "$c_f(u,v) = c(u,v) - f(u,v) = 0 - (-4) = 4$: a backward residual edge exists purely to cancel those 4 units. Residual capacity is defined on all pairs, not just edges."
      },
      {
        q: "Ford-Fulkerson is called a method rather than an algorithm because:",
        options: ["it may fail to terminate on irrational capacities", "the choice of augmenting path is left unspecified, and different choices yield different algorithms and running times", "it requires integer capacities to be well defined", "it only computes an approximate maximum flow"],
        answer: 1,
        explanation: "The sentence 'while an augmenting path exists, push along it' fixes no path-selection rule; DFS-style paths give $O(E|f^*|)$, BFS gives Edmonds-Karp's $O(VE^2)$. (Irrational capacities can indeed cause non-termination — but that is a consequence of the freedom, not the reason for the name.)"
      },
      {
        q: "For a flow $f$ and an arbitrary cut $(S,T)$, which identity always holds?",
        options: ["$|f| = c(S,T)$", "$|f| = f(S,T) \\le c(S,T)$", "$f(S,T) = c(S,T)$", "$|f| \\ge f(S,T)$"],
        answer: 1,
        explanation: "Lemma 26.4: the value equals the net flow across every cut and is bounded by that cut's capacity. Equality with $c(S,T)$ holds only when $f$ is maximum and $(S,T)$ is minimum."
      },
      {
        q: "The Edmonds-Karp algorithm selects augmenting paths by BFS (fewest edges) and runs in time:",
        options: ["$O(E|f^*|)$", "$O(VE^2)$", "$O(V^2 E^2)$", "$O(V^3)$"],
        answer: 1,
        explanation: "Shortest augmenting paths make each pair of vertices' distance labels monotone, so each edge becomes critical only $O(V)$ times — $O(VE)$ augmentations over $O(E)$-length paths: $O(VE^2)$, polynomial independent of capacity magnitudes."
      },
      // PYQ-pattern: GATE 2019 — max-flow min-cut value (rephrased, values changed)
      {
        q: "Capacities: $s\\to a:10, s\\to b:8, a\\to b:3, a\\to t:7, b\\to t:12$. The maximum $s$-$t$ flow value is:",
        options: ["15", "17", "18", "20"],
        answer: 2,
        explanation: "Step 1 — Given: five directed capacities, source $s$, sink $t$. Step 2 — Governing duality: flow value is capped by every $s$-$t$ cut and equals the minimum one. Step 3 — Augmentation: push $7$ on $s\\to a\\to t$, $8$ on $s\\to b\\to t$, then $3$ on $s\\to a\\to b\\to t$ (using $b\\to t$ residual $4$); total $18$; cut $({s,a},{b,t})$ has $8 + 7 + 3 = 18$, certifying optimality. Step 4 — Sanity check: $18$ respects out-of-$s$ ($18$) and into-$t$ ($19$) caps, residuals show no augmenting path left, and backward edges were available throughout. Step 5 — Distractor analysis: $15$ misses the cross edge, $17$ leaves one unit unpushed, and $20$ exceeds the source cap. Step 6 — Conclude: maximum flow $18$.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "The max-flow min-cut theorem, proved completely",
        blocks: [
          {
            kind: "para",
            body: "Every duality theorem in combinatorial optimization traces its lineage to this one. The theorem couples three a priori unrelated statements — an optimization claim (some flow is best), an algorithmic claim (a search space is exhausted), and a certificate claim (a cut is tight) — and proves them equivalent. The proof is three implications, and each carries an idea worth stealing: **augmentation** (contrapositive), **reachability** (construction), and **weak duality** (bookkeeping). Throughout, $f$ is a flow in $G = (V, E)$ and $G_f$ its residual network."
          },
          {
            kind: "theorem",
            heading: "Theorem (CLRS Theorem 26.6)",
            body: "The following are equivalent: (1) $f$ is a maximum flow; (2) $G_f$ contains no augmenting path; (3) there exists a cut $(S, T)$ with $|f| = c(S, T)$. Moreover, in that case $(S,T)$ is a minimum cut; and for *every* maximum flow $f^*$ and minimum cut $(S^*, T^*)$, $|f^*| = c(S^*, T^*)$."
          },
          {
            kind: "proof",
            heading: "(1) ⇒ (2): an augmenting path is a certificate of suboptimality",
            body: "We prove the contrapositive. Let $p = \\langle s = v_0, v_1, \\dots, v_k = t \\rangle$ be a simple path in $G_f$ and $c_f(p) = \\min_{0 \\le i < k} c_f(v_i, v_{i+1}) > 0$. Define a function on $G_f$'s pairs by $f'(v_i, v_{i+1}) = c_f(p)$ along path edges, $f'(v_{i+1}, v_i) = -c_f(p)$, and $0$ elsewhere. It is a flow in $G_f$: capacity holds because $c_f(p) \\le c_f(v_i, v_{i+1})$ on every path edge (and the negative entries sit at or below 0); skew symmetry is built in; and conservation holds at each internal $v_i$ because the simple path gives it exactly one edge in and one out, netting $c_f(p) - c_f(p) = 0$. Its value is $|f'| = c_f(p) > 0$. Now combine: $f \\uparrow f'$, defined by $f(u,v) + f'(u,v) - f'(v,u)$, is a flow in $G$ of value $|f| + c_f(p)$ (the combination lemma). So $f$ was not maximum."
          },
          {
            kind: "proof",
            heading: "(2) ⇒ (3): the cut hiding in the residual network",
            body: "Suppose $G_f$ has no $s$-$t$ path. Let $S = \\{v : v \\text{ reachable from } s \\text{ in } G_f\\}$ and $T = V - S$, so $s \\in S$, $t \\in T$. Claim: $c_f(u,v) = 0$ for every $u \\in S, v \\in T$ — otherwise the residual edge $(u,v)$ would make $v$ reachable. Unpack that as $c(u,v) - f(u,v) = 0$, i.e. $f(u,v) = c(u,v)$ for *every* ordered pair crossing from $S$ to $T$: crossing edges are saturated, and pairs with no edge carry $0 = 0$. Skew symmetry has already folded the backward direction into the same statement — a positive $f(v,u)$ with $v \\in T, u \\in S$ would give $c_f(u,v) = c(u,v) + f(v,u) > 0$, contradicting the claim. Summing over all crossing pairs and applying the cut identity of Lemma 26.4: $|f| = f(S,T) = \\sum_{u \\in S, v \\in T} f(u,v) = \\sum_{u \\in S, v \\in T} c(u,v) = c(S,T)$."
          },
          {
            kind: "derivation",
            heading: "Lemma 26.4: every cut sees the same value (weak duality)",
            body: "For an arbitrary cut $(S,T)$, expand $f(S,V) = \\sum_{u \\in S}\\sum_{v \\in V} f(u,v)$ by the second coordinate: $f(S,V) = f(S,S) + f(S,T)$. The internal term vanishes — $f(S,S) = \\sum_{u, v \\in S} f(u,v) = 0$ — because skew symmetry cancels each ordered pair against its reverse. Evaluate the left side vertex by vertex instead: for each $u \\in S - \\{s\\}$ (note $t \\notin S$), conservation gives $\\sum_v f(u,v) = 0$, so only $u = s$ survives, contributing $\\sum_v f(s,v) = |f|$. Chaining the three displays: $|f| = f(S,T)$ for *every* cut. Finally the capacity constraint gives the termwise bound $f(u,v) \\le c(u,v)$, so $|f| = f(S,T) \\le c(S,T)$ — every flow's value is at most every cut's capacity. This single inequality is all the geometry the theorem needs."
          },
          {
            kind: "proof",
            heading: "(3) ⇒ (1): tightness spreads in both directions",
            body: "Suppose $|f| = c(S,T)$ for some cut. For any flow $f'$, weak duality gives $|f'| \\le c(S,T) = |f|$, so $f$ is a maximum flow. Symmetrically, for any cut $(S', T')$, $c(S',T') \\ge |f| = c(S,T)$, so $(S,T)$ is a minimum cut. The three statements now collapse into one: (1) ⇒ (2) ⇒ (3) ⇒ (1). Note also *where* the minimum cut came from in the second implication — the set reachable from $s$ in $G_f$ — which is why any run of Ford-Fulkerson that halts hands you the cut for free (Corollary 26.7)."
          },
          {
            kind: "remark",
            heading: "Certificates, integrality, and the LP view",
            body: "Three consequences deserve a flag. **Certificates**: a max flow plus its saturated cut is a pair of efficiently checkable witnesses — 'here is a good flow' and 'here is why nothing better exists' — making maximum flow a rare optimization problem with fully checkable optimality proofs. **Integrality**: if all capacities are integers, every augmentation adds an integer, so Ford-Fulkerson terminates at an *integral* maximum flow; that fact is exactly what makes the bipartite-matching reduction of Section 26.3 sound. **Linear programming**: maximizing $|f|$ subject to the flow constraints is a linear program, and cuts correspond to feasible solutions of its dual — max-flow min-cut is LP strong duality in combinatorial clothing, a special case of the general duality theory CLRS develops in Chapter 29."
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------- 26.3
  {
    sectionId: "clrs-ch26-s3",
    readingTime: 6,
    intro: "Here is the payoff: a purely combinatorial question — pair up as many left vertices with right vertices as possible, no vertex used twice — becomes a maximum-flow instance by directing every edge and giving everything unit capacity. The reduction is the chapter's first showcase of its power, and it comes with a bonus: König's theorem, one of graph theory's classic dualities, falls out of max-flow min-cut for free.",
    objectives: [
      "Define matchings, maximum matchings and perfect matchings in bipartite graphs",
      "Build the unit-capacity flow model and explain the matching-flow correspondence",
      "Derive König's theorem from the minimum cut and bound the running time"
    ],
    concepts: [
      {
        term: "Matching",
        kind: "definition",
        statement: "In an undirected graph $G = (V, E)$, a **matching** is a subset $M \\subseteq E$ no two of whose edges share an endpoint. A **maximum matching** has the largest cardinality among all matchings; a **perfect matching** covers every vertex of the graph. In a **bipartite graph** $G = (L \\cup R, E)$, every edge joins a vertex of $L$ to a vertex of $R$.",
        detail: "Typical instances: assigning workers to shifts, courses to rooms, or processes to machines — two parties, and each pairing consumes one member of each side."
      },
      {
        term: "The flow model of a matching instance",
        kind: "method",
        statement: "Given bipartite $G$, direct every edge from $L$ toward $R$, add an edge $s \\to l$ for each $l \\in L$ and $r \\to t$ for each $r \\in R$, and give **every edge capacity 1**. Then matchings in $G$ correspond exactly to flows in the model that take only the values 0 and 1, with $|M| = |f|$.",
        detail: "Why capacity 1 everywhere: $s \\to l$ caps how many matches $l$ can hold, $r \\to t$ caps $r$, and the middle edge *is* the match. The direction that needs a theorem is the converse — that a maximum flow may be taken integral — which is where integrality does the work."
      },
      {
        term: "Integrality and running time",
        kind: "insight",
        statement: "Ford-Fulkerson with integer capacities terminates with an integral maximum flow, so applied to the unit-capacity model it outputs a **maximum matching**. Each augmenting path has bottleneck exactly 1 (every path edge has capacity 1) and $|f^*| \\le \\min(|L|, |R|)$, so the method uses $O(V)$ augmentations of $O(E)$ work each: **maximum bipartite matching in $O(VE)$ time**.",
        detail: "The $O(VE)$ bound is CLRS's stated result for the reduction with a plain augmenting-path search. Faster dedicated algorithms exist (Hopcroft-Karp at $O(E\\sqrt{V})$), but the point here is the reduction's cleanliness."
      },
      {
        term: "König's theorem",
        kind: "theorem",
        statement: "In any bipartite graph, the maximum size of a matching equals the minimum size of a **vertex cover** — a set of vertices touching every edge: $\\max |M| = \\min |C|$.",
        detail: "Read it off the residual-reachable minimum cut ($S$ = the vertices reachable from $s$ in $G_{f^*}$): $C = (L \\cap T) \\cup (R \\cap S)$ is a minimum vertex cover. No $L \\to R$ edge can cross from $S$ to $T$ — an unsaturated one would make its right endpoint reachable in the residual, and a saturated one would demand more than $s \\to l$'s single unit of supply through its left endpoint — so $C$ touches every edge, and $|C| = c(S,T) = |f^*| = |M^*|$."
      },
      {
        term: "Maximum versus maximal matching",
        kind: "definition",
        statement: "Maximal means no edge can be added without sharing a vertex (greedy achieves it); maximum means no larger matching exists (needs augmenting paths / flow). Every maximum matching is maximal, but maximal can be half the size of maximum.",
        detail: "The section's repair example is a maximal-but-not-maximum matching: one alternating path augments it by $1$. Bipartite maximum matching is maximum flow with unit capacities, so Ford-Fulkerson's augmentations are exactly matching augmentations.",
      },
    ],
    examples: [
      {
        title: "When greedy needs a repair",
        problem: "Left vertices $l_1, \\dots, l_4$; right vertices $r_1, \\dots, r_4$; edges $l_1$–$r_1$, $l_1$–$r_2$, $l_2$–$r_1$, $l_3$–$r_2$, $l_3$–$r_3$, $l_4$–$r_3$, $l_4$–$r_4$. Greedy, taking $l_1$–$r_1$ first, gets stuck at a matching of size 3. Run the flow model instead.",
        steps: [
          { label: "Step 1: Greedy's dead end", text: "Matching $\\{l_1\\text{-}r_1, l_3\\text{-}r_2, l_4\\text{-}r_3\\}$ blocks $l_2$, whose only neighbor $r_1$ is taken. Size 3 — one short." },
          { label: "Step 2: First augmentation", text: "Path $s \\to l_1 \\to r_1 \\to t$, bottleneck 1. Flow value 1: matching $\\{l_1\\text{-}r_1\\}$." },
          { label: "Step 3: The repair, via a backward edge", text: "From $l_2$, the residual path $s \\to l_2 \\to r_1 \\to l_1 \\to r_2 \\to t$ runs through the *backward* edge $r_1 \\to l_1$ (it cancels the match $l_1$–$r_1$). Augmenting by 1 re-matches $l_1$–$r_2$ and frees $r_1$ for $l_2$: matching $\\{l_1\\text{-}r_2, l_2\\text{-}r_1\\}$, value 2. Greedy's mistake was repairable, not fatal." },
          { label: "Step 4: Finish", text: "$s \\to l_3 \\to r_3 \\to t$ and $s \\to l_4 \\to r_4 \\to t$, each bottleneck 1. Value 4: the perfect matching $\\{l_1\\text{-}r_2,\\ l_2\\text{-}r_1,\\ l_3\\text{-}r_3,\\ l_4\\text{-}r_4\\}$." },
          { label: "Step 5: König check", text: "All four edges into $t$ are saturated, so the residual-reachable set is just $S = \\{s\\}$, giving the cover $(L \\cap T) \\cup (R \\cap S) = \\{l_1, l_2, l_3, l_4\\}$ of size 4. No smaller cover can exist, since the four matching edges are pairwise disjoint and each needs its own covering vertex." }
        ],
        result: "A maximum (here perfect) matching of size 4, certified by König: a disjoint-edge argument shows no cover is smaller than the matching, and the flow's saturated cut exhibits a cover of exactly that size."
      },
      {
        title: "Reading a minimum vertex cover off the residual reachability",
        problem: "Bipartite graph with $L = \\{l_1, l_2, l_3, l_4\\}$, $R = \\{r_1, r_2, r_3\\}$ and edges $l_1$–$r_1$, $l_2$–$r_1$, $l_2$–$r_2$, $l_3$–$r_2$, $l_3$–$r_3$, $l_4$–$r_3$ — four left vertices but only three right ones. Extract König's minimum vertex cover from the minimum cut.",
        steps: [
          { label: "Step 1: A maximum matching and its flow", text: "The matching $\\{l_1\\text{-}r_1,\\ l_2\\text{-}r_2,\\ l_3\\text{-}r_3\\}$ has size 3, and $l_4$ is left over — it must be, since only three right vertices exist. In the flow model, $s \\to l_4$ carries 0 while every $r_j \\to t$ is saturated at 1. No augmenting path survives, because any one must exit through some $r_j \\to t$ and all are full." },
          { label: "Step 2: The reachability cascade", text: "Compute $S$ = vertices reachable from $s$ in $G_f$: the leftover capacity on $s \\to l_4$ admits $l_4$; the unsaturated $l_4 \\to r_3$ admits $r_3$; the saturated match $l_3$–$r_3$ contributes the backward edge $r_3 \\to l_3$, admitting $l_3$; then the unsaturated $l_3 \\to r_2$ admits $r_2$; its match drags in $l_2$; then $l_2 \\to r_1$ admits $r_1$; and finally the match on $l_1$–$r_1$ admits $l_1$. Every vertex except $t$ is reachable: $S = V - \\{t\\}$." },
          { label: "Step 3: The cut and the cover", text: "The cut $(S, \\{t\\})$ has capacity $c(r_1,t) + c(r_2,t) + c(r_3,t) = 3 = |f^*|$ — minimum, exactly as Theorem 26.6 demands. König's cover is $C = (L \\cap T) \\cup (R \\cap S) = \\emptyset \\cup \\{r_1, r_2, r_3\\}$: all of $R$." },
          { label: "Step 4: Check the cover", text: "Every edge has its right endpoint in $C$: $l_1$–$r_1$, $l_2$–$r_1$, $l_2$–$r_2$, $l_3$–$r_2$, $l_3$–$r_3$, $l_4$–$r_3$ — all covered. And no cover can be smaller: the three matching edges are pairwise disjoint, so any cover needs one vertex per edge. Maximum matching = minimum cover = 3." }
        ],
        result: "König's theorem made concrete: the alternating cascade of Step 2 — forward along an unsaturated edge, backward along a saturated match — is precisely the alternating-path structure of the classical proof, and it terminates in a cover of size exactly $|M^*|$."
      }
    ],
    keyTakeaways: [
      "Unit capacities turn matching into flow: integral maximum flows are exactly matchings, with $|M| = |f|$, found in $O(VE)$ augmentations of bottleneck 1.",
      "Backward residual edges *are* re-matching: an augmenting path through $r \\to l$ un-assigns one pair to create a better one — greedy choices are repairable.",
      "König's theorem (max matching = min vertex cover in bipartite graphs) is max-flow min-cut in disguise: the cover is $(L \\cap T) \\cup (R \\cap S)$."
    ],
    quiz: [
      {
        q: "In the flow model of bipartite matching, an augmenting path that traverses a backward edge $r \\to l$ corresponds to:",
        options: ["assigning a second partner to some vertex", "re-matching: canceling one match to enable a better one", "an edge that violates bipartiteness", "doubling the flow value in one step"],
        answer: 1,
        explanation: "The backward edge cancels the existing match on $l$–$r$; the path then re-routes $l$ to another right vertex, freeing $r$ for the left vertex where the path started."
      },
      {
        q: "Why can Ford-Fulkerson's output on the unit-capacity model be interpreted as a matching?",
        options: ["integrality: every augmentation adds an integer, and unit capacities force each flow value to 0 or 1", "the residual network of a bipartite graph is bipartite", "every augmenting path alternates left-right", "because the source has unbounded capacity"],
        answer: 0,
        explanation: "With integer (unit) capacities, augmentations preserve integrality — the flow on each edge stays in $\\{0,1\\}$ — and such flows are precisely matchings."
      },
      {
        q: "The running time CLRS gives for maximum bipartite matching via the Ford-Fulkerson reduction is:",
        options: ["$O(VE)$", "$O(V^2 E)$", "$O(VE^2)$", "$O(2^V)$"],
        answer: 0,
        explanation: "Every augmenting path has bottleneck exactly 1, at most $\\min(|L|,|R|) \\le |V|$ augmentations are needed, and each costs $O(E)$: $O(VE)$ total."
      },
      {
        q: "König's theorem — maximum matching equals minimum vertex cover — holds:",
        options: ["in all undirected graphs", "in bipartite graphs; it can fail on graphs with odd cycles", "only in regular bipartite graphs", "only when a perfect matching exists"],
        answer: 1,
        explanation: "The 5-cycle $C_5$ has maximum matching 2 but needs 3 vertices to cover all 5 edges; the min cut of the flow model, which produces the cover, exists only for bipartite instances."
      }
    ]
  },

  // ---------------------------------------------------------------- 26.4
  {
    sectionId: "clrs-ch26-s4",
    readingTime: 7,
    intro: "Ford-Fulkerson improves a flow only along whole $s$-$t$ paths — a global detour for every unit of progress. Push-relabel (Goldberg and Tarjan, 1988) works locally instead: flood a preflow through the network, letting vertices hold excess, then let each overflowing vertex push its excess one step downhill or raise its own height when nothing is downhill. The plumbing picture is honest — fill the pipes beyond capacity, then let the surplus drain toward the sink or bubble back to the source.",
    objectives: [
      "Distinguish a preflow from a flow via the excess $e(u)$",
      "Apply PUSH and RELABEL with their exact applicability conditions",
      "Summarize the $O(V^2 E)$ analysis: relabels, saturating pushes, nonsaturating pushes"
    ],
    concepts: [
      {
        term: "Preflow and excess",
        kind: "definition",
        statement: "A **preflow** satisfies the capacity constraint and skew symmetry but relaxes conservation to $\\sum_{v \\in V} f(v,u) \\ge 0$ for $u \\in V - \\{s,t\\}$. The surplus is the **excess** $e(u) = \\sum_{v \\in V} f(v,u)$ — flow that entered $u$ and has not yet left. A vertex with $e(u) > 0$ is **overflowing**; a preflow with no overflowing vertex is an ordinary flow.",
        detail: "Push-relabel floods first and drains later. The initialization itself creates excess: saturate every edge out of $s$, and let the interior vertices hold what they receive until heights route it onward."
      },
      {
        term: "Valid labeling",
        kind: "definition",
        statement: "A **labeling** is a function $h : V \\to \\mathbb{N}$ with $h(s) = |V|$, $h(t) = 0$, and $h(u) \\le h(v) + 1$ for every residual edge $(u,v) \\in E_f$. Flow moves only *downhill, one step at a time*: a push from $u$ to $v$ requires exactly $h(u) = h(v) + 1$.",
        detail: "The invariant means each residual edge drops height by at most 1, so $h(u)$ never exceeds the residual distance from $u$ to $t$ while that distance is finite. Once $t$ is unreachable, relabels inflate the label toward $2|V| - 1$ — at which point the height is really measuring the climb back to $s$."
      },
      {
        term: "Push and relabel",
        kind: "method",
        statement: "**PUSH$(u,v)$** applies when $u$ is overflowing, $c_f(u,v) > 0$, and $h(u) = h(v) + 1$; it moves $\\delta = \\min(e(u), c_f(u,v))$ units from $u$ to $v$, decreasing $e(u)$ by $\\delta$ and increasing $e(v)$ by $\\delta$. It is **saturating** if $\\delta = c_f(u,v)$, **nonsaturating** otherwise. **RELABEL$(u)$** applies when $u$ is overflowing but has no admissible outgoing edge; it sets $h(u) = 1 + \\min\\{h(v) : (u,v) \\in E_f\\}$ — the smallest height that creates one.",
        detail: "Heights only ever increase. Pushes to $t$ absorb the excess into the sink; pushes back to $s$ (possible once $h(u)$ climbs to $h(s)+1$) return it to the source — both are how the algorithm terminates with all excess gone."
      },
      {
        term: "The generic algorithm and its $O(V^2 E)$ bound",
        kind: "insight",
        statement: "**GENERIC-PUSH-RELABEL**: while some vertex overflows, apply any applicable push or relabel. Every execution terminates with a maximum flow in $O(V^2 E)$ time. The three ingredients: each vertex relabels at most $2|V| - 1$ times (heights never exceed $2|V|-1$ — reachable-$t$ vertices are capped by their distance, unreachable ones by the climb back to $s$); each edge endures at most $2|V|$ saturating pushes ($O(VE)$ total); and a potential argument caps nonsaturating pushes at $O(V^2 E)$ — the hard part of the analysis.",
        detail: "The local moves are the point: no $s$-$t$ path is ever searched for. With practical heuristics (highest-label selection, gap relabeling), push-relabel descendants remain the standard heavy-duty max-flow codes used in vision and scheduling applications."
      },
      {
        term: "The $2|V|-1$ height cap",
        kind: "theorem",
        statement: "Valid labels satisfy $h(s) = |V|$, $h(t) = 0$, $h(u) \\le h(v)+1$ for every residual edge $(u,v)$; heights only rise and RELABEL raises $u$ to $1+\\min h(v)$ over residual neighbours, so $h(u) \\le 2|V|-1$ always (a simple path to $s$ or $t$ has $< |V|$ edges).",
        detail: "The cap bounds relabels at $O(V^2)$ ($|V|$ vertices $\\times$ $2|V|$ heights) and saturating pushes at $O(VE)$: the two easy thirds of the $O(V^2E)$ generic bound. Nonsaturating pushes need the potential argument.",
      },
    ],
    examples: [
      {
        title: "Push, relabel, and one trip home to the source",
        problem: "Vertices $\\{s, u, v, t\\}$; edges $s \\to u$ (10), $u \\to t$ (8), $u \\to v$ (4), $v \\to t$ (1). Initialize $h(s) = |V| = 4$, $h = 0$ elsewhere, and saturate the source edge: $f(s,u) = 10$, so $e(u) = 10$. Discharge overflowing vertices as they come.",
        steps: [
          { label: "Step 1: Flood", text: "After initialization only $u$ overflows: $e(u) = 10$; heights are $h(s) = 4$, everything else 0." },
          { label: "Step 2: Discharge $u$ (h: 0 → 1)", text: "No edge out of $u$ is admissible at $h(u) = 0$, so RELABEL: $h(u) = 1 + \\min\\{h(t), h(v), h(s)\\} = 1$. Then PUSH $u \\to t$: $\\delta = \\min(10, 8) = 8$ (saturating). PUSH $u \\to v$: $\\delta = \\min(2, 4) = 2$ (nonsaturating). Now $e(u) = 0$, $e(v) = 2$." },
          { label: "Step 3: Discharge $v$ (h: 0 → 1 → 2)", text: "RELABEL $h(v) = 1$; PUSH $v \\to t$: $\\delta = \\min(2,1) = 1$ (saturating). Stuck — $v \\to t$ is full — so RELABEL $h(v) = 2 = h(u)+1$; PUSH $v \\to u$ on the *backward* residual edge: $\\delta = \\min(1, 2) = 1$. This cancels one unit of $f(u,v)$, returning it as excess: $e(v) = 0$, $e(u) = 1$, $f(u,v) = 1$." },
          { label: "Step 4: The excess bounces", text: "Now a pattern: $u$ relabels up by 2 (to 3, then 5) and pushes its single unit to $v$; $v$ relabels up by 2 (to 4, then 6) and pushes it back. Four relabels and four pushes later: $e(u) = 1$ with $h(u) = 5$, $h(v) = 6$, $f(u,v) = 1$ still. Heights stay below $2|V| - 1 = 7$, as the bound promises." },
          { label: "Step 5: Home to the source", text: "At $h(u) = 5 = h(s) + 1$, the backward residual edge $u \\to s$ finally becomes admissible, with $c_f(u,s) = 0 - f(u,s) = 10$. PUSH $u \\to s$: $\\delta = 1$ — the last unit of excess returns to the source, $f(s,u) = 9$." },
          { label: "Step 6: Read off the answer", text: "No vertex overflows, so the preflow is a flow: $f(s,u) = 9$, $f(u,t) = 8$, $f(u,v) = 1$, $f(v,t) = 1$, and $|f| = 9$. The cut $(\\{s,u,v\\}, \\{t\\})$ has capacity $8 + 1 = 9$ — maximum, certified." }
        ],
        result: "Maximum flow 9, using 10 pushes (one of them the initializing saturating push from $s$) and 7 relabels. The ping-pong of Step 4 — excess climbing two height units per bounce with nothing but local moves — is exactly the behavior the $O(V^2 E)$ analysis must tame."
      },
      {
        title: "Push then relabel on three vertices",
        problem: "Preflow $s \\to a(3)$ saturated, $h(s) = 3$, $h(a) = 0$, $h(t) = 0$, edge $a \\to t(2)$. Discharge $a$ with excess $3$.",
        steps: [
          { label: "Push $a \\to t$", text: "Admissible? Needs $h(a) = h(t)+1$: $0 = 1$? No: $a \\to t$ not admissible (equal heights). No push." },
          { label: "Relabel $a$", text: "Residual neighbours $t(0)$, $s(3)$? $(a,s)$ residual $3$ (backward): $\\min = 0$: $h(a) = 1$." },
          { label: "Push $a \\to t$", text: "Now $1 = 0+1$ admissible: push $\\min(3, 2) = 2$ (saturating): $e(a) = 1$, $e(t) = 2$." },
          { label: "Push $a \\to s$?", text: "$h(a) = 1$, $h(s) = 3$: $1 = 4$? No: must relabel $a$ to $4$ before pushing home: heights ratchet, never fall." },
        ],
        result: "One relabel ($0 \\to 1$) enabled one saturating push of $2$; excess $1$ waits for the next relabel: heights gate pushes.",
      },
    ],
    keyTakeaways: [
      "Preflow = flood now, drain later: conservation is repaired rather than assumed, with $e(u)$ tracking each vertex's debt.",
      "Pushes move excess one downhill step ($h(u) = h(v)+1$); relabels raise the ground when nothing is downhill; heights only rise, bounded by $2|V| - 1$.",
      "$O(V^2 E)$ total: $O(V^2)$ relabels, $O(VE)$ saturating pushes, and the hard-won $O(V^2 E)$ bound on nonsaturating pushes — all without any global path search."
    ],
    quiz: [
      {
        q: "A preflow relaxes flow conservation to:",
        options: ["$\\sum_{v \\in V} f(v,u) \\ge 0$ — vertices may hold excess (inflow exceeding outflow)", "capacities may be exceeded on edges out of $s$", "skew symmetry is dropped", "flow may also leave the sink $t$"],
        answer: 0,
        explanation: "Only internal vertices' conservation is relaxed, and only in one direction: $e(u) = \\sum_v f(v,u) \\ge 0$. Capacity and skew symmetry stay in force."
      },
      {
        q: "PUSH$(u,v)$ requires $u$ overflowing, $c_f(u,v) > 0$, and:",
        options: ["$h(u) > h(v)$", "$h(u) = h(v) + 1$", "$h(u) \\le h(v)$", "$h(u) = h(v)$"],
        answer: 1,
        explanation: "Flow moves exactly one label downhill — the admissibility condition of valid labelings. A mere height advantage is not enough; the drop must be exactly one step."
      },
      {
        q: "Why is the source initialized with $h(s) = |V|$?",
        options: ["to make relabeling $s$ possible later", "so the source sits above every vertex — excess that cannot reach $t$ can always climb back to $s$ along admissible edges", "to bound the number of edges at $s$", "purely a convention with no effect on correctness"],
        answer: 1,
        explanation: "Any simple residual path has fewer than $|V|$ edges, so $h(s) = |V|$ starts the source above the whole network. Vertices whose height climbs to $h(s)+1$ can push excess back home — the algorithm's escape hatch."
      },
      {
        q: "The generic push-relabel algorithm terminates in:",
        options: ["$O(E|f^*|)$", "$O(VE^2)$", "$O(V^2 E)$", "$O(V \\lg V)$"],
        answer: 2,
        explanation: "Relabels contribute $O(V^2)$, saturating pushes $O(VE)$, and nonsaturating pushes $O(V^2 E)$ — the last term dominates. Note the bound is independent of capacity magnitudes, unlike plain Ford-Fulkerson."
      }
    ]
  },

  // ---------------------------------------------------------------- 26.5
  {
    sectionId: "clrs-ch26-s5",
    readingTime: 7,
    intro: "The generic push-relabel method leaves the *order* of operations free, and a bad order wastes pushes on vertices that were about to become pushable anyway. Relabel-to-front imposes one: keep the nonsource, nonsink vertices in a list, discharge each vertex completely before moving on, and move any vertex that relabeled to the front. That single scheduling heuristic tightens the running time from $O(V^2 E)$ to $O(V^3)$.",
    objectives: [
      "Define admissible edges and explain why the admissible network is acyclic",
      "Execute DISCHARGE with current pointers and trace a full relabel-to-front run",
      "State the $O(V^3)$ bound and identify which cost it improves"
    ],
    concepts: [
      {
        term: "Admissible network",
        kind: "definition",
        statement: "A residual edge $(u,v)$ is **admissible** if $c_f(u,v) > 0$ and $h(u) = h(v) + 1$. The **admissible network** $G_A = (V, E_A)$ contains exactly the admissible edges, and it is **acyclic**: every admissible edge strictly decreases $h$, so a directed cycle would have to return $h$ to its starting value.",
        detail: "Pushes travel only on admissible edges, so following them from any vertex must terminate. A relabel of $u$ is precisely the event that creates new admissible edges *out of* $u$ — the moment the schedule should revisit it."
      },
      {
        term: "Discharge",
        kind: "method",
        statement: "**DISCHARGE$(u)$** processes all of $u$'s excess at once: scan $u$'s edge list with a persistent **current** pointer; push along each admissible edge until it saturates or the excess runs out; when the list is exhausted, RELABEL $u$ and restart the pointer. Each neighbor is examined at most once between two relabels of $u$.",
        detail: "The current pointer is the amortization device: between relabels, a discharge sweeps $u$'s edge list once, costing $O(\\deg u)$; over the whole run the scanning totals $O(VE)$ since each vertex relabels $O(V)$ times."
      },
      {
        term: "Move-to-front scheduling",
        kind: "method",
        statement: "**RELABEL-TO-FRONT** maintains a list $L$ of the vertices $V - \\{s, t\\}$ (any initial order) and scans it: discharge the vertex under the scan; if its height increased during that discharge, move it to the *front* of $L$; continue with the vertex that follows it in the (possibly just rearranged) list. When the scan runs off the end, the algorithm terminates with a maximum flow.",
        detail: "The heuristic is greed: a vertex that relabeled is 'hot' — it just gained height, and new admissible edges around it may let its neighbors push back — so it is processed again soon rather than after a full pass."
      },
      {
        term: "The $O(V^3)$ bound",
        kind: "theorem",
        statement: "**Relabel-to-front runs in $O(V^3)$** — better than the generic $O(V^2 E)$ whenever the graph is dense (since $E \\le V^2$). The improvement is entirely in the nonsaturating pushes: CLRS proves at most $4V^3$ of them, exploiting that the admissible network is acyclic and each discharge either empties its vertex or relabels it. All other costs are smaller: $O(V^2)$ relabels, $O(VE)$ saturating pushes, $O(VE)$ current-pointer scanning.",
        detail: "The FIFO preflow-push variant achieves the same $O(V^3)$; highest-label selection with gap and global relabeling heuristics is what fast practical codes use. The relabel-to-front list is the simplest schedule that gets the bound."
      },
      {
        term: "Current-edge pointer",
        kind: "method",
        statement: "DISCHARGE scans $u$'s adjacency once via $u.current$: each neighbour is examined until it becomes inadmissible or a saturating push exhausts it, and the pointer only advances (wrapping on relabel). Total neighbour scans are $O(VE)$ across the whole run, not $O(VE)$ per discharge.",
        detail: "Without the pointer each discharge would rescan all $\\deg(u)$ neighbours after every nonsaturating push; with it each $(u,v)$ pair is scanned $O(V)$ times (once per height of $u$), giving the $O(V^3)$ bound's discharge term.",
      },
    ],
    examples: [
      {
        title: "The same run, scheduled by a list",
        problem: "Run RELABEL-TO-FRONT on the network of Section 26.4's example — $s \\to u$ (10), $u \\to t$ (8), $u \\to v$ (4), $v \\to t$ (1) — with the initial list $L = \\langle u, v \\rangle$ and both current pointers at the heads of their edge lists.",
        steps: [
          { label: "Step 1: Initialize", text: "Saturate $s \\to u$: $e(u) = 10$, $h(s) = 4$, all other heights 0. The scan starts at the head of $L$." },
          { label: "Step 2: Discharge $u$ (h: 0 → 1)", text: "Relabel $u$ to 1; push 8 to $t$ (saturating) and 2 to $v$. The height increased, so $u$ moves to the front — a no-op at the front. The scan advances to $v$." },
          { label: "Step 3: Discharge $v$ (h: 0 → 1 → 2)", text: "Relabel $v$ to 1, push 1 to $t$ (saturating); relabel $v$ to 2, push 1 back to $u$ on the backward edge. Height increased → $v$ moves to the front: $L = \\langle v, u \\rangle$, and the scan continues with $u$ (now the front's successor)." },
          { label: "Step 4: Ping-pong under move-to-front", text: "The discharges alternate: $u$ relabels 1 → 3 and pushes its unit to $v$ (moves to front, $L = \\langle u, v\\rangle$); $v$ relabels 2 → 4 and pushes it back ($L = \\langle v, u \\rangle$); $u$ relabels 3 → 5 and pushes ($L = \\langle u, v\\rangle$); $v$ relabels 4 → 6 and pushes back ($L = \\langle v, u\\rangle$). Each move-to-front naturally bounces the scan between the two hot vertices — exactly where the action is." },
          { label: "Step 5: Last discharge — no relabel, no move", text: "With $h(u) = 5 = h(s) + 1$, discharging $u$ finds the backward edge $u \\to s$ admissible immediately and pushes the final unit home ($f(s,u) = 9$, $e(u) = 0$). No relabel occurred, so the move-to-front rule correctly does *not* fire, and the scan proceeds." },
          { label: "Step 6: Terminate", text: "The scan visits $v$ (no excess — discharge is a no-op) and runs off the end of $L$. No vertex overflows: the preflow is the same maximum flow as before, $|f| = 9$, with $h(u) = 5$, $h(v) = 6$." }
        ],
        result: "The same maximum flow of value 9 as the generic run — 10 pushes and 7 relabels — but with a deterministic schedule: the list flip-flops six times, and each flip is the heuristic saying 'this vertex just changed the landscape; look at it first.'"
      },
      {
        title: "Move-to-front on two vertices",
        problem: "List $[a, b]$, both with excess. $a$ discharges cleanly, $b$ relabels. Show the list move.",
        steps: [
          { label: "Discharge $a$", text: "Push excess downstream, no relabel: $a$ stays, advance to $b$." },
          { label: "Discharge $b$", text: "Push, then relabel $b$ ($h$ rises): move $b$ to front: list $[b, a]$." },
          { label: "Rescan", text: "Restart after $b$ (now front): discharge $b$ again (now higher, may push back to $a$), then $a$." },
          { label: "Bound", text: "Each relabel moves its vertex front ($O(V)$ relabels $\\times$ $O(V)$ scans); nonsaturating pushes between relabels are $O(1)$ per discharge: total $O(V^3)$." },
        ],
        result: "List $[b,a]$ after $b$'s relabel; move-to-front revisits relabeled vertices first, the scheduling that tightens $O(V^2E)$ to $O(V^3)$.",
      },
    ],
    keyTakeaways: [
      "Admissible = residual and exactly one step downhill; the admissible network is acyclic because heights strictly decrease along its edges.",
      "Discharge bundles all of a vertex's work between relabels, and the persistent current pointer amortizes edge scanning down to $O(VE)$.",
      "Move-to-front is the scheduling heuristic that cuts nonsaturating pushes to $O(V^3)$ — the whole content of the $O(V^3)$ theorem, since every other cost is smaller."
    ],
    quiz: [
      {
        q: "An admissible edge is a residual edge $(u,v)$ with:",
        options: ["$c_f(u,v) > 0$ only", "$h(u) = h(v) + 1$ and $c_f(u,v) > 0$", "$h(u) \\ge h(v) + 2$", "$h(u) < h(v)$"],
        answer: 1,
        explanation: "Both conditions: enough residual capacity, and the height drop of exactly one label. Pushes travel only on admissible edges."
      },
      {
        q: "The admissible network $G_A$ is guaranteed to be:",
        options: ["connected", "acyclic", "bipartite", "a spanning tree"],
        answer: 1,
        explanation: "Every admissible edge drops $h$ by exactly 1, so along any directed cycle the height would have to end strictly below where it started — impossible."
      },
      {
        q: "In RELABEL-TO-FRONT, vertex $u$ is moved to the front of the list $L$ whenever:",
        options: ["$u$ gains excess during another vertex's discharge", "the discharge of $u$ increased $h(u)$ — a relabel occurred", "a push from $u$ saturates an edge", "the scan reaches the end of $L$"],
        answer: 1,
        explanation: "The test compares $h(u)$ before and after DISCHARGE$(u)$: only a relabel (new admissible edges out of $u$) justifies immediate reprocessing. Gaining excess alone does not move a vertex."
      },
      {
        q: "Relabel-to-front runs in time:",
        options: ["$O(VE^2)$", "$O(V^2 E)$", "$O(V^3)$", "$O(V^2)$"],
        answer: 2,
        explanation: "The move-to-front schedule bounds nonsaturating pushes by $4V^3$; relabels ($O(V^2)$), saturating pushes and scanning ($O(VE)$) are dominated since $E \\le V^2$."
      }
    ]
  }
]
