import type { SectionContent } from "../library"

// ============================================================================
// Cormen, Leiserson, Rivest, Stein — Introduction to Algorithms, 3rd Edition
// Chapter 24: Single-Source Shortest Paths (Sections 24.1 – 24.5)
// Master study content.
// ============================================================================

export const clrsCh24Content: SectionContent[] = [
  // ---------------------------------------------------------------- 24.1
  {
    sectionId: "clrs-ch24-s1",
    readingTime: 7,
    intro: "Shortest paths are the mathematics behind route planning, packet routing, and currency arbitrage — and arbitrage is exactly why this chapter exists: real edge weights can be negative. The Bellman-Ford algorithm is the one single-source method that tolerates negative weights, and it doubles as a detector for the negative-weight cycles that make the problem ill-posed.",
    objectives: [
      "State the single-source shortest-paths problem and the role of the edge-relaxation primitive",
      "Execute the Bellman-Ford algorithm and explain why $|V| - 1$ passes suffice",
      "Show how the final pass detects negative-weight cycles reachable from the source",
    ],
    concepts: [
      {
        term: "The single-source shortest-paths problem",
        kind: "definition",
        statement: "Given a weighted, directed graph $G = (V, E)$ with weight function $w: E \\to \\mathbb{R}$ and a source $s$, find for every $v \\in V$ the **shortest-path weight** $\\delta(s, v) = \\min \\{ w(p) : p$ a path from $s$ to $v \\}$, with $\\delta(s, v) = \\infty$ if no such path exists.",
        detail: "Negative edges are permitted, but if a **negative-weight cycle** is reachable from $s$, then $\\delta(s, v) = -\\infty$ for every $v$ reachable from that cycle, so the answer is undefined — a correct algorithm must detect this and report it rather than loop forever.",
      },
      {
        term: "Edge relaxation",
        kind: "method",
        statement: "**Relaxing** an edge $(u, v)$ tests whether the shortest path to $v$ found so far can be improved by going through $u$: if $d[v] > d[u] + w(u, v)$, set $d[v] = d[u] + w(u, v)$ and record the predecessor $\\pi[v] = u$. If $d[v] \\le d[u] + w(u, v)$, nothing changes.",
        detail: "Every algorithm in this chapter — Bellman-Ford, DAG relaxation, Dijkstra — is nothing more than a cleverly ordered sequence of these one-line relaxations; the entire theory of the chapter is about *which orders converge, and how fast*.",
      },
      {
        term: "The Bellman-Ford algorithm",
        kind: "method",
        statement: "**`BELLMAN-FORD(G, w, s)`** first runs `INIT-SINGLE-SOURCE` ($d[s] = 0$, $d[v] = \\infty$ for the rest, all $\\pi = \\mathrm{NIL}$), then makes **$|V| - 1$ passes in which every one of the $|E|$ edges is relaxed**, and finally scans all edges once more: if some edge $(u, v)$ still satisfies $d[v] > d[u] + w(u, v)$ it returns FALSE (negative cycle reachable from $s$); otherwise it returns TRUE and the $d$-values are the shortest-path weights.",
        detail: "The running time is $O(VE)$: $|V| - 1$ passes over all $E$ edges, plus the final check. The passes need no particular edge order — any fixed order repeated $|V| - 1$ times works, which is precisely what makes the algorithm so robust (and distributable).",
      },
      {
        term: "Pass lemma and cycle detection",
        kind: "theorem",
        statement: "After the $k$-th pass over all edges, every vertex $v$ satisfies $d[v] \\le$ (minimum weight of any path from $s$ to $v$ using **at most $k$ edges**). Consequently, since any shortest path (when no negative cycle is reachable) is simple and uses at most $|V| - 1$ edges, after $|V| - 1$ passes $d[v] = \\delta(s, v)$ for all $v$.",
        detail: "The final scan works in both directions: if no edge can be relaxed, no negative cycle is reachable from $s$; if an edge $(u,v)$ can still be relaxed after $|V| - 1$ passes, then $d[u]$ was still improving, which forces a reachable negative-weight cycle.",
      },
      {
        term: "No path versus infinite distance",
        kind: "definition",
        statement: "If $v$ is unreachable from $s$, $\\delta(s,v) = \\infty$ and $d[v]$ stays $\\infty$ through every relaxation ($\\infty$ plus any weight is $\\infty$). Bellman-Ford's final scan reports reachability as well as distances: finite $d$ iff a path exists and no negative cycle intervenes.",
        detail: "Initialization sets $d[s] = 0$, $d[\\ne s] = \\infty$: the $\\infty$ values are not large numbers but the absence of any path, which is why RELAX tests $d[v] > d[u]+w$ rather than computing minima over empty sets.",
      },
    ],
    examples: [
      {
        title: "Bellman-Ford on the five-vertex graph with a negative edge",
        problem: "Run Bellman-Ford from $s$ on the graph with vertices $s, t, x, y, z$ and edges (relaxed in this fixed order each pass): $(t,x)=5$, $(t,y)=8$, $(t,z)=-4$, $(x,t)=-2$, $(y,x)=-3$, $(y,z)=9$, $(z,s)=2$, $(z,x)=7$, $(s,t)=6$, $(s,y)=7$. Weights here are $w(u,v)$ for each directed edge.",
        steps: [
          { label: "Initialize", text: "$d[s] = 0$ and $d[t] = d[x] = d[y] = d[z] = \\infty$, all predecessors NIL." },
          { label: "Pass 1", text: "The two edges out of $s$ come last in the order, so early relaxations see infinite heads: only $(s,t)$ and $(s,y)$ fire, giving $d[t] = 6$, $d[y] = 7$; $x$ and $z$ stay $\\infty$." },
          { label: "Pass 2", text: "$(t,x)$: $6 + 5 = 11$, so $d[x] = 11$; $(t,z)$: $6 - 4 = 2$, so $d[z] = 2$; then $(y,x)$ cuts $d[x]$ to $7 - 3 = 4$. After the pass: $t = 6$, $x = 4$, $y = 7$, $z = 2$." },
          { label: "Pass 3", text: "$(x,t)$: $4 - 2 = 2 < 6$, so $d[t] = 2$ — the detour through $y$ and $x$ beats the direct edge. Everything else holds." },
          { label: "Pass 4", text: "$(t,z)$: $2 - 4 = -2 < 2$, so $d[z] = -2$. No other edge fires; a hypothetical pass 5 changes nothing." },
          { label: "Final check", text: "One more scan of all ten edges: no edge satisfies $d[v] > d[u] + w(u,v)$, so Bellman-Ford returns TRUE — no negative cycle is reachable from $s$." },
        ],
        result: "Final estimates $(d[s], d[t], d[x], d[y], d[z]) = (0, 2, 4, 7, -2)$, all provably tight: $\\delta(s,t) = 2$ via $s \\to y \\to x \\to t$, and $\\delta(s,z) = -2$ by extending that path through $(t,z)$. Exactly $|V| - 1 = 4$ passes were available, and the last improving relaxation happened on the final pass.",
      },
      {
        title: "One negative edge, no cycle",
        problem: "Edges $s \\to a(4)$, $s \\to b(5)$, $a \\to b(-3)$. Bellman-Ford from $s$: how does $b$ settle below its direct edge?",
        steps: [
          { label: "Init", text: "$d[s] = 0$, $d[a] = d[b] = \\infty$." },
          { label: "Pass 1", text: "Relax $s \\to a$: $d[a] = 4$. Relax $s \\to b$: $d[b] = 5$. Relax $a \\to b$: $d[b] > 4-3 = 1$: $d[b] = 1$, $\\pi[b] = a$." },
          { label: "Passes 2-3", text: "$|V|-1 = 2$ passes? $V = 3$: $2$ passes, no change second pass: distances $0,4,1$ = $\\delta$." },
          { label: "Cycle test", text: "Final scan: no edge relaxes: no negative cycle reachable. Path $s \\to a \\to b$ weight $1$ beats direct $5$." },
        ],
        result: "$d = [0,4,1]$: negative edge exploited in one relaxation; extra passes confirm stability, final scan confirms no cycle.",
      },
    ],
    keyTakeaways: [
      "Bellman-Ford costs $O(VE)$ and handles negative weights, but only detects — it cannot solve — instances with reachable negative-weight cycles.",
      "After $k$ full passes, all shortest paths of at most $k$ edges are found; $|V| - 1$ passes therefore always suffice because shortest paths are simple.",
      "The algorithm is edge-order agnostic, which is why it survives asynchronous, distributed implementations such as distance-vector routing.",
    ],
    quiz: [
      {
        q: "After Bellman-Ford completes $k$ full passes over all edges, $d[v]$ equals the minimum weight over paths from $s$ to $v$ that use at most how many edges?",
        options: ["$k - 1$ edges", "$k$ edges", "$k + 1$ edges", "$|V| - 1$ edges regardless of $k$"],
        answer: 1,
        explanation: "This is the pass lemma: pass $k$ completes all paths of at most $k$ edges. The bound $|V|-1$ only kicks in at the final pass.",
      },
      {
        q: "Bellman-Ford returns FALSE precisely when which condition holds?",
        options: ["The graph contains any negative-weight edge", "A negative-weight cycle is reachable from $s$", "A negative-weight cycle exists somewhere in $G$, even unreachable from $s$", "The graph is not strongly connected"],
        answer: 1,
        explanation: "Only cycles reachable from the source can corrupt the estimates. An unreachable negative cycle never affects any $d$-value, and the final scan will still find no relaxable edge.",
      },
      {
        q: "What is the total running time of Bellman-Ford?",
        options: ["$O(V^2)$", "$O(VE)$", "$O(E \\lg V)$", "$O((V + E) \\lg V)$"],
        answer: 1,
        explanation: "$|V| - 1$ passes, each relaxing all $E$ edges, plus one final scan: $O(VE)$ — the price paid for negative-weight tolerance.",
      },
      {
        q: "In the worked five-vertex example, after which pass had every $d$-value reached its final value?",
        options: ["Pass 2", "Pass 3", "Pass 4", "Only during the final verification scan"],
        answer: 2,
        explanation: "The last improvement, $d[z] = -2$ via $(t,z)$, happens in pass 4 — the final allowed pass, since $|V|-1 = 4$.",
      },
      // PYQ-pattern — Bellman-Ford negative cycle (rephrased, values changed)
      {
        q: "Edges are $s\\to a:2, a\\to b:2, b\\to a:-5$. Bellman-Ford from $s$ reports what?",
        options: ["Final distances $a = 2, b = 4$ with no negative cycle", "A reachable negative-weight cycle", "Stable distances after a single pass", "That Dijkstra must be used instead"],
        answer: 1,
        explanation: "Step 1 — Given: three edges, cycle $a\\to b\\to a$ totalling $2 - 5 = -3$. Step 2 — Governing test: relax $|V| - 1$ passes, then one check pass; any further improvement proves a reachable negative cycle. Step 3 — Trace: estimates keep dropping each tour of the cycle ($a$: $2, -1, -4, \\ldots$), so the check pass still relaxes $b\\to a$. Step 4 — Sanity check: negativity is reachable from $s$, shortest simple-path distances are undefined here, and non-negative weights would instead settle quietly. Step 5 — Distractor analysis: fixed distances ignore the looping improvement, one pass contradicts path-length reasoning, and Dijkstra is invalid under negative weights. Step 6 — Conclude: a reachable negative-weight cycle.",
      },
    ],
  },

  // ---------------------------------------------------------------- 24.2
  {
    sectionId: "clrs-ch24-s2",
    readingTime: 6,
    intro: "Directed acyclic graphs are the one family where shortest paths are almost free: process the vertices in topological order, relax each vertex's outgoing edges once, and you are done in linear time. No priority queue, no repeated passes — and negative weights cost nothing at all, because a DAG cannot contain the negative cycles that make them dangerous.",
    objectives: [
      "Execute DAG-SHORTEST-PATHS on a given DAG and source",
      "Prove by induction on topological order that a single pass settles every vertex",
      "Reduce longest paths in a DAG to shortest paths by weight negation",
    ],
    concepts: [
      {
        term: "DAG-SHORTEST-PATHS",
        kind: "method",
        statement: "First **topologically sort** the DAG, then run `INIT-SINGLE-SOURCE`, then march through the vertices in topological order and, for each vertex $u$ taken in that order, **relax every edge leaving $u$**. When the march ends, $d[v] = \\delta(s, v)$ for every vertex.",
        detail: "The total cost is $\\Theta(V + E)$: a topological sort (by DFS, Chapter 22) plus one pass touching each edge exactly once — asymptotically optimal, since every edge must at least be read.",
      },
      {
        term: "Why one pass suffices",
        kind: "theorem",
        statement: "In topological order, every predecessor of a vertex $v$ on any path from $s$ appears **before $v$**. By induction along the order, when vertex $u$'s edges are relaxed, $d[u]$ already equals $\\delta(s, u)$; relaxing $(u, v)$ therefore installs $\\delta(s, v)$ whenever $(u,v)$ is the last edge of a shortest path to $v$.",
        detail: "This is the path-relaxation property (Section 24.5) applied to a topologically ordered shortest path: its edges are necessarily relaxed in path order, so the destination is guaranteed correct when the march reaches it.",
      },
      {
        term: "Negative weights for free",
        kind: "insight",
        statement: "A DAG has **no cycles at all**, hence no negative-weight cycles — the only obstruction that breaks shortest paths. Every edge weight, however negative, is harmless, and correctness never inspects the sign of anything.",
        detail: "Contrast with Dijkstra (Section 24.3), where a single negative edge can corrupt the answer, and with general graphs, where negative edges force the $O(VE)$ Bellman-Ford machinery.",
      },
      {
        term: "Longest paths by sign flip",
        kind: "method",
        statement: "A longest path in a DAG is a shortest path after **negating every weight**: run DAG-SHORTEST-PATHS on $w'(u,v) = -w(u,v)$ and negate the results. This solves **critical-path / PERT scheduling** in $\\Theta(V + E)$ time.",
        detail: "In general directed graphs the longest simple path problem is NP-hard — the sign-flip trick fails there because a negated graph may develop negative cycles. Acyclicity is exactly what makes it safe, and it is what makes the critical path of a project schedule computable in linear time.",
      },
      {
        term: "Relaxation order matters",
        kind: "insight",
        statement: "DAG-SHORTEST-PATHS relaxes vertices in topological order, so each edge $(u,v)$ is relaxed after $u$ is final: one pass suffices. Any other order may need many passes (Bellman-Ford's $|V|-1$) because $u$ might settle after $(u,v)$ was last relaxed.",
        detail: "Topological order is a linear extension of path order: every $s \\leadsto v$ path visits vertices in topological order, so induction along that order proves $d[v] = \\delta(s,v)$ after the single sweep.",
      },
    ],
    examples: [
      {
        title: "One linear pass through a six-vertex DAG",
        problem: "A DAG has vertices $r, s, t, x, y, z$ (this is already a topological order — every edge goes left to right) with edges: $r \\to s$ (5), $r \\to t$ (3), $s \\to t$ (2), $s \\to x$ (6), $t \\to x$ (7), $t \\to y$ (4), $t \\to z$ (2), $x \\to y$ ($-1$), $x \\to z$ (1), $y \\to z$ ($-2$). Compute shortest paths from $s$.",
        steps: [
          { label: "Topological order", text: "The given order $r, s, t, x, y, z$ is topological: check that each of the ten edges points forward — it does, so the single-pass guarantee applies." },
          { label: "Initialize", text: "$d[s] = 0$; every other vertex, including the unreachable $r$, starts at $\\infty$." },
          { label: "Process $r$, then $s$", text: "$r$ has $d[r] = \\infty$, so its edges relax nothing. From $s$: $(s,t)$ gives $d[t] = 2$ and $(s,x)$ gives $d[x] = 6$." },
          { label: "Process $t$", text: "$(t,x)$: $2 + 7 = 9 \\ge 6$, no improvement; $(t,y)$: $d[y] = 2 + 4 = 6$; $(t,z)$: $d[z] = 2 + 2 = 4$." },
          { label: "Process $x$", text: "$(x,y)$: $6 + (-1) = 5 < 6$, so $d[y] = 5$ — the negative edge improves the path; $(x,z)$: $6 + 1 = 7 \\ge 4$, no change." },
          { label: "Process $y$", text: "$(y,z)$: $5 + (-2) = 3 < 4$, so $d[z] = 3$. Vertex $z$ has no outgoing edges; the pass is over." },
        ],
        result: "In a single $\\Theta(V + E)$ sweep: $\\delta(s,t) = 2$, $\\delta(s,x) = 6$, $\\delta(s,y) = 5$, $\\delta(s,z) = 3$ via $s \\to x \\to y \\to z$, and $d[r] = \\infty$ because $r$ is unreachable from $s$. Each value was final the moment its vertex was processed — no vertex ever needs revisiting.",
      },
      {
        title: "Topological order saves $|V|-2$ passes",
        problem: "Chain DAG $s \\to a \\to b \\to c$ weights $2,2,2$ plus shortcut $s \\to c(10)$. Compare Bellman-Ford order vs topological order.",
        steps: [
          { label: "Topological", text: "Order $s,a,b,c$: relax $s \\to a(2)$, $s \\to c(10)$; $a \\to b$: $d[b] = 4$; $b \\to c$: $d[c] > 4+2 = 6$: $d[c] = 6$. One pass, distances $0,2,4,6$." },
          { label: "Bad order", text: "Relax $b \\to c$ first ($d[b] = \\infty$, no-op), then $a \\to b$, then $s \\to a$: needs $3$ passes for $c$ to learn $6$ via the chain." },
          { label: "Negative weights", text: "Change weights to $-2$: same one pass gives $0,-2,-4,-6$: DAGs ignore sign, since no cycle can amplify negativity." },
          { label: "Longest path", text: "Negate again for longest: DAG longest is shortest on $-w$: same linear pass, impossible with cycles." },
        ],
        result: "Topological pass $0,2,4,6$ in $\\Theta(V+E)$; arbitrary order needs up to $|V|-1$ passes for the same chain.",
      },
    ],
    keyTakeaways: [
      "Topological order turns shortest paths into a one-pass, $\\Theta(V + E)$ computation — optimal, and by far the fastest method in the chapter.",
      "DAGs cannot host negative cycles, so arbitrary negative weights are free; this is the only setting in the chapter where that is true without Bellman-Ford.",
      "Longest paths (critical paths, PERT) in a DAG reduce to shortest paths by negating weights — the trick that fails, and becomes NP-hard, on general graphs.",
    ],
    quiz: [
      {
        q: "What is the total asymptotic running time of DAG-SHORTEST-PATHS, including the sort?",
        options: ["$\\Theta(V \\lg V)$", "$\\Theta(V + E)$", "$\\Theta(VE)$", "$\\Theta(V^2)$"],
        answer: 1,
        explanation: "A DFS topological sort plus one sweep that relaxes each edge exactly once — both are linear.",
      },
      {
        q: "Why does relaxing edges only once, in topological order, produce exact answers?",
        options: [
          "Because topological order sorts edges by weight",
          "Because every predecessor of $v$ on any $s$-to-$v$ path is processed before $v$, so $d[v]$ is final when $v$ is processed",
          "Because DAGs cannot have negative weights",
          "Because each vertex has at most one incoming edge in a DAG",
        ],
        answer: 1,
        explanation: "Induction on the order: when the march reaches $u$, all of $u$'s own predecessors are already correct, so $d[u] = \\delta(s,u)$ before its out-edges fire. Weights of any sign are irrelevant; DAGs may have arbitrary weights.",
      },
      {
        q: "You need the longest path between two vertices in a DAG with weights $w$. What do you run?",
        options: [
          "Dijkstra on the original weights — longest and shortest coincide on DAGs",
          "DAG-SHORTEST-PATHS with weights $-w(u,v)$, then negate the results",
          "Bellman-Ford with $|V|-1$ reversed passes",
          "A modified DFS that tracks the maximum path so far",
        ],
        answer: 1,
        explanation: "Negation swaps minima and maxima, and a DAG has no cycles, so no negative cycle can appear. The greedy DFS heuristic does not work — a locally longer prefix can lead to a dead end.",
      },
      {
        q: "In the worked example, which vertex keeps $d = \\infty$ after the pass, and why?",
        options: ["$t$, because it precedes $s$", "$r$, because no path from $s$ reaches it", "$z$, because it has no outgoing edges", "None — every vertex is reachable from $s$"],
        answer: 1,
        explanation: "$r$ lies upstream of $s$ in the topological order; all edges point forward, so nothing flows backward to $r$. Having no outgoing edges (like $z$) affects only $r$'s role as a predecessor, not its reachability.",
      },
    ],
  },

  // ---------------------------------------------------------------- 24.3
  {
    sectionId: "clrs-ch24-s3",
    readingTime: 8,
    intro: "Dijkstra's algorithm is the greedy member of the family: grow a cloud of settled vertices by always extracting the unsettled vertex with the smallest estimate, and relax its outgoing edges. The price of that greed is a hard requirement — all edge weights must be non-negative — and the reward is spectacular running times with the right priority queue.",
    objectives: [
      "Execute Dijkstra's algorithm with a priority queue and track the extraction order",
      "Explain precisely why non-negative weights are required for correctness",
      "Compare the $\\Theta(V^2)$ array, $O((V+E)\\lg V)$ binary-heap, and $O(E + V\\lg V)$ Fibonacci-heap variants",
    ],
    concepts: [
      {
        term: "The greedy invariant",
        kind: "method",
        statement: "Dijkstra maintains a set $S$ of vertices that have been **extracted from the priority queue and are settled**: for each of them $d[u] = \\delta(s, u)$ permanently. Each iteration performs `EXTRACT-MIN` on the remaining vertices, adds the extracted $u$ to $S$, and **relaxes every edge leaving $u$**. The loop runs until the queue is empty.",
        detail: "The estimate $d[v]$ always equals the weight of some path from $s$ to $v$ using only settled intermediate vertices — the greedy choice is safe because, with non-negative weights, no path can ever dip below a vertex that already sits at the minimum.",
      },
      {
        term: "Why weights must be non-negative",
        kind: "theorem",
        statement: "If some $w(u, v) < 0$, the extracted vertex $u$ may be settled with $d[u] > \\delta(s, u)$: a shorter route through a not-yet-extracted vertex can later plunge below $d[u]$ using the negative edge. Formally, the greedy step needs $\\delta(s, y) \\le \\delta(s, u)$ for the first unsettled vertex $y$ on a shortest path to $u$ — which follows only when the remaining path weight $y \\leadsto u$ is $\\ge 0$.",
        detail: "Concrete failure: edges $s \\to a$ (3), $s \\to b$ (4), $b \\to a$ ($-2$). Dijkstra extracts $a$ at $d = 3$ and settles it, but the true value is $\\delta(s,a) = 4 - 2 = 2$. The algorithm still terminates — it just returns a wrong answer.",
      },
      {
        term: "Running-time tradeoffs",
        kind: "theorem",
        statement: "Dijkstra's time is the cost of $|V|$ `EXTRACT-MIN` and $|E|$ `DECREASE-KEY` operations: **$\\Theta(V^2)$** with a plain array, **$O((V + E) \\lg V)$** with a binary heap and adjacency lists, and **$O(E + V \\lg V)$** with a Fibonacci heap, since `DECREASE-KEY` amortizes to $O(1)$ there.",
        detail: "The array wins for dense graphs ($E = \\Theta(V^2)$: array $\\Theta(V^2)$ vs heap $O(V^2 \\lg V)$); the heap wins for sparse ones. This is the same priority-queue analysis studied for Prim's algorithm in Chapter 23.",
      },
      {
        term: "BFS and Prim as relatives",
        kind: "insight",
        statement: "With **unit weights**, Dijkstra's priority queue degenerates into a FIFO queue and the algorithm becomes exactly breadth-first search — extraction order is BFS layer order, and $d = \\delta$ counts edges. **Prim\'s algorithm** is the same code with a different key: Prim extracts by minimum edge weight into the tree, Dijkstra by total distance from the source.",
        detail: "Both are greedy 'grow a cloud' schemes whose correctness rests on a cut argument; the difference is only what the key measures, which is also why Prim tolerates negative weights (locally minimal spanning structure) while Dijkstra does not (globally minimal path totals).",
      },
      {
        term: "Dijkstra's $S$ invariant",
        kind: "insight",
        statement: "Let $S$ be extracted vertices. Invariant: $d[v] = \\delta(s,v)$ for $v \\in S$, and for $v \\notin S$, $d[v]$ is the shortest $s \\leadsto v$ path with all intermediates in $S$. EXTRACT-MIN moves the minimum-$d$ vertex into $S$ permanently, which is safe iff weights are nonnegative.",
        detail: "Nonnegativity keeps $S$'s frontier honest: any alternative path to the extracted $u$ must leave $S$ through an edge of nonnegative weight, so it cannot beat $d[u]$. One negative edge breaks the argument.",
      },
    ],
    figures: [
      {
        caption: "Dijkstra's algorithm on the classic five-vertex example (the graph of CLRS Figure 24.6). Each vertex carries its final, settled estimate — exactly $\\delta(s, v)$ — and the vertices leave the priority queue in the order $s \\to y \\to z \\to t \\to x$ with estimates $0, 5, 7, 8, 9$. Notice how the final answer for $t$ uses the cheap $y \\to t$ edge (weight 3) instead of the direct $s \\to t$ edge (weight 10), and how $x$ is reached most cheaply as $s \\to y \\to t \\to x$ with total weight $5 + 3 + 1 = 9$.",
        svg: `<svg viewBox="0 0 720 320" width="100%" role="img" aria-label="Five-vertex directed graph with final Dijkstra d-values and edge weights"><defs><marker id="d24a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><text x="360" y="26" font-family="ui-sans-serif, system-ui" font-size="13.5" fill="currentColor" text-anchor="middle" font-weight="600">Dijkstra from s — final estimates d = δ(s, v)</text><text x="360" y="46" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" fill-opacity="0.85">extraction order s → y → z → t → x with d-values 0, 5, 7, 8, 9 — a settled value never changes</text><line x1="115.3" y1="220.3" x2="264.7" y2="259.7" stroke="currentColor" stroke-width="1.7" marker-end="url(#d24a)"/><line x1="112.8" y1="205.8" x2="292.2" y2="114.2" stroke="currentColor" stroke-width="1.7" marker-end="url(#d24a)"/><line x1="306.0" y1="264.2" x2="534.0" y2="255.8" stroke="currentColor" stroke-width="1.7" marker-end="url(#d24a)"/><line x1="283.2" y1="244.4" x2="302.0" y2="124.0" stroke="currentColor" stroke-width="1.7" marker-end="url(#d24a)"/><line x1="311.8" y1="125.6" x2="293.0" y2="246.0" stroke="currentColor" stroke-width="1.7" marker-end="url(#d24a)"/><line x1="547.4" y1="235.9" x2="532.6" y2="125.5" stroke="currentColor" stroke-width="1.7" marker-end="url(#d24a)"/><line x1="542.6" y1="124.1" x2="557.4" y2="234.5" stroke="currentColor" stroke-width="1.7" marker-end="url(#d24a)"/><line x1="327.1" y1="115.5" x2="537.9" y2="244.5" stroke="currentColor" stroke-width="1.7" marker-end="url(#d24a)"/><line x1="330" y1="105" x2="515" y2="105" stroke="currentColor" stroke-width="1.7" marker-end="url(#d24a)"/><line x1="514.6" y1="110.1" x2="115.4" y2="209.9" stroke="currentColor" stroke-width="1.7" marker-end="url(#d24a)"/><text x="178" y="252" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">10</text><text x="196" y="150" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">5</text><text x="418" y="251" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">1</text><text x="274" y="192" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">2</text><text x="322" y="192" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">3</text><text x="521" y="185" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">4</text><text x="572" y="182" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">6</text><text x="427" y="196" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">9</text><text x="420" y="93" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">2</text><text x="330" y="148" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">7</text><circle cx="95" cy="215" r="20" fill="currentColor" fill-opacity="0.14"/><circle cx="95" cy="215" r="20" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="95" y="220" font-family="ui-sans-serif, system-ui" font-size="14" fill="currentColor" text-anchor="middle" font-weight="600" font-style="italic">s</text><circle cx="310" cy="105" r="20" fill="currentColor" fill-opacity="0.08"/><circle cx="310" cy="105" r="20" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="310" y="110" font-family="ui-sans-serif, system-ui" font-size="14" fill="currentColor" text-anchor="middle" font-weight="600" font-style="italic">y</text><circle cx="285" cy="265" r="20" fill="currentColor" fill-opacity="0.08"/><circle cx="285" cy="265" r="20" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="285" y="270" font-family="ui-sans-serif, system-ui" font-size="14" fill="currentColor" text-anchor="middle" font-weight="600" font-style="italic">t</text><circle cx="535" cy="105" r="20" fill="currentColor" fill-opacity="0.08"/><circle cx="535" cy="105" r="20" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="535" y="110" font-family="ui-sans-serif, system-ui" font-size="14" fill="currentColor" text-anchor="middle" font-weight="600" font-style="italic">z</text><circle cx="555" cy="255" r="20" fill="currentColor" fill-opacity="0.08"/><circle cx="555" cy="255" r="20" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="555" y="260" font-family="ui-sans-serif, system-ui" font-size="14" fill="currentColor" text-anchor="middle" font-weight="600" font-style="italic">x</text><rect x="67" y="242" width="56" height="20" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.1" stroke-opacity="0.5"/><text x="95" y="256" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">d = 0</text><rect x="282" y="50" width="56" height="20" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.1" stroke-opacity="0.5"/><text x="310" y="64" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">d = 5</text><rect x="507" y="50" width="56" height="20" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.1" stroke-opacity="0.5"/><text x="535" y="64" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">d = 7</text><rect x="257" y="290" width="56" height="20" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.1" stroke-opacity="0.5"/><text x="285" y="304" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">d = 8</text><rect x="527" y="282" width="56" height="20" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.1" stroke-opacity="0.5"/><text x="555" y="296" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">d = 9</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Dijkstra with a priority queue: the full trace",
        problem: "Run Dijkstra from $s$ on the graph of the figure: edges $s \\to t$ (10), $s \\to y$ (5), $t \\to x$ (1), $t \\to y$ (2), $x \\to z$ (4), $y \\to t$ (3), $y \\to x$ (9), $y \\to z$ (2), $z \\to x$ (6), $z \\to s$ (7). All weights are non-negative, so the greedy invariant applies.",
        steps: [
          { label: "Initialize", text: "$d[s] = 0$, all others $\\infty$; the priority queue holds $s, t, x, y, z$." },
          { label: "Extract $s$ (d = 0)", text: "Relax $(s,t)$: $d[t] = 10$. Relax $(s,y)$: $d[y] = 5$. Queue keys: $y = 5$, $t = 10$." },
          { label: "Extract $y$ (d = 5)", text: "$(y,t)$: $5 + 3 = 8 < 10$, so $d[t] = 8$. $(y,x)$: $d[x] = 14$. $(y,z)$: $d[z] = 5 + 2 = 7$. Queue: $z = 7$, $t = 8$, $x = 14$." },
          { label: "Extract $z$ (d = 7)", text: "$(z,x)$: $7 + 6 = 13 < 14$, so $d[x] = 13$. $(z,s)$: $7 + 7 = 14 \\ge 0$. Queue: $t = 8$, $x = 13$." },
          { label: "Extract $t$ (d = 8)", text: "$(t,x)$: $8 + 1 = 9 < 13$, so $d[x] = 9$. $(t,y)$: $8 + 2 = 10 \\ge 5$. Queue: $x = 9$." },
          { label: "Extract $x$ (d = 9)", text: "$(x,z)$: $9 + 4 = 13 \\ge 7$ — settled values never move. The queue is empty." },
        ],
        result: "Extraction order $s, y, z, t, x$ with final estimates $\\delta(s,t) = 8$ (via $s \\to y \\to t$), $\\delta(s,x) = 9$ (via $s \\to y \\to t \\to x$), $\\delta(s,y) = 5$, $\\delta(s,z) = 7$ (via $s \\to y \\to z$). Note how each of $t$ and $x$ abandons its expensive direct route for a cheaper detour — the essence of relaxation.",
      },
      {
        title: "Negative edge breaks Dijkstra",
        problem: "Graph $s \\to a(3)$, $s \\to b(5)$, $a \\to b(-4)$. Dijkstra from $s$ fails; Bellman-Ford succeeds. Show the wrong extraction.",
        steps: [
          { label: "Init", text: "$d[s] = 0$, $d[a] = 3$? After relaxing from $s$: $d[a] = 3$, $d[b] = 5$. Queue $[a(3), b(5)]$." },
          { label: "Extract $a$", text: "Extract $a(3)$ into $S$: relax $a \\to b$: $d[b] = \\min(5, 3-4 = -1) = -1$, decrease-key $b$ to $-1$." },
          { label: "Extract $b$?", text: "If $b$ was extracted before the decrease (order $a$ then $b$ with stale $5$?), Dijkstra may finalize $b = 5$ then later find $-1$: $S$ invariant violated because the $-4$ edge undercuts the extracted minimum." },
          { label: "Correct", text: "Bellman-Ford gives $\\delta(s,b) = -1$ via $s \\to a \\to b$: Dijkstra's greed needs $w \\ge 0$ to freeze vertices in order." },
        ],
        result: "Dijkstra can finalize $b = 5$ before learning $-1$; Bellman-Ford's $|V|-1$ passes propagate the $-4$ edge correctly.",
      },
    ],
    keyTakeaways: [
      "Dijkstra = repeated extract-min + relax-out-edges; it is correct if and only if all weights are non-negative.",
      "One negative edge can silently produce a wrong (too large) answer — the algorithm does not crash, it just lies.",
      "Choose the queue to match the density: array $\\Theta(V^2)$ for dense, binary heap $O((V+E)\\lg V)$ or Fibonacci heap $O(E + V\\lg V)$ for sparse graphs.",
    ],
    quiz: [
      {
        q: "Which precondition does Dijkstra's correctness require?",
        options: ["The graph must be a DAG", "All edge weights must be non-negative", "All edge weights must be positive (no zeros)", "The source must have the smallest-weight outgoing edge"],
        answer: 1,
        explanation: "Non-negativity is exactly what makes the extracted minimum final: zero-weight edges are fine, since a path through them never dips below an already-extracted estimate.",
      },
      {
        q: "Edges $s \\to a$ (3), $s \\to b$ (4), $b \\to a$ ($-2$). Dijkstra runs from $s$. What estimate for $a$ does it settle, and what is the truth?",
        options: ["Settles 2, which is correct", "Settles 3, but $\\delta(s,a) = 2$", "Settles 4, but $\\delta(s,a) = 2$", "Dijkstra never terminates on this input"],
        answer: 1,
        explanation: "$a$ (key 3) is extracted before $b$ (key 4), so the improving edge $b \\to a$ is never applied. The true shortest path $s \\to b \\to a$ has weight $4 - 2 = 2$. The algorithm halts — with a wrong answer.",
      },
      {
        q: "Using a binary min-heap with adjacency lists, Dijkstra runs in time:",
        options: ["$\\Theta(V^2)$ regardless of $E$", "$O((V + E) \\lg V)$", "$O(E + V \\lg V)$", "$O(V \\lg V)$"],
        answer: 1,
        explanation: "$V$ extract-mins and up to $E$ decrease-keys, each $O(\\lg V)$ amortized in a binary heap. The Fibonacci heap shaves decrease-key to $O(1)$ amortized, giving the third bound.",
      },
      {
        q: "When all edge weights equal 1, Dijkstra's algorithm behaves exactly like which algorithm?",
        options: ["Depth-first search", "Breadth-first search", "Kruskal's algorithm", "Bellman-Ford with early termination"],
        answer: 1,
        explanation: "The priority queue becomes a FIFO queue: vertices are extracted in nondecreasing distance order, which is exactly BFS level order, and the d-values are edge counts.",
      },
      // PYQ-pattern — Dijkstra trace (rephrased, values changed)
      {
        q: "Non-negative edges: $s\\to a:4, s\\to b:2, b\\to a:1, a\\to c:5, b\\to c:8$. Dijkstra from $s$ settles distance to $c$ as:",
        options: ["6", "7", "8", "10"],
        answer: 2,
        explanation: "Step 1 — Given: five non-negative edges, source $s$. Step 2 — Governing invariant: each extracted vertex carries its final shortest distance, then relaxes outgoing edges. Step 3 — Trace: extract $s(0)$: $a = 4, b = 2$; extract $b(2)$: $a = 3, c = 10$; extract $a(3)$: $c = \\min(10, 3 + 5) = 8$; extract $c(8)$. Step 4 — Sanity check: realized path $s\\to b\\to a\\to c$ costs $2 + 1 + 5 = 8$, all weights non-negative so greed is legal, and extraction order $s, b, a, c$ is increasing. Step 5 — Distractor analysis: $10$ predates the $a$-relaxation, $6$ and $7$ undercut every $s$-to-$c$ route. Step 6 — Conclude: distance $8$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 24.4
  {
    sectionId: "clrs-ch24-s4",
    readingTime: 7,
    intro: "A system of difference constraints — each inequality says one unknown exceeds another by at most a constant — looks like linear programming, but it is shortest paths in disguise. Build the right graph, run Bellman-Ford once, and you either get a solution or a proof that none exists. This is the classic bridge between constraint solving and graph algorithms.",
    objectives: [
      "Translate a system of difference constraints into its constraint graph",
      "State and apply the feasibility theorem: solvable if and only if no negative-weight cycle",
      "Explain why the Bellman-Ford solution is the pointwise maximum solution",
    ],
    concepts: [
      {
        term: "Systems of difference constraints",
        kind: "definition",
        statement: "A **system of difference constraints** is a linear program $Ax \\le b$ in $n$ unknowns $x_1, \\dots, x_n$ where each row of $A$ contains exactly one $1$, one $-1$, and zeros elsewhere — i.e. every constraint has the form $x_j - x_i \\le b_k$. A system of $m$ constraints on $n$ unknowns gives an $n \\times m$ constraint matrix.",
        detail: "Geometrically each constraint is a half-space between the parallel hyperplanes $x_j - x_i = b_k$; the feasible region is their intersection, a (possibly empty, possibly unbounded) polyhedron. Scheduling start times subject to separation constraints is the canonical application: $x_j - x_i \\le b$ reads as 'job $j$ starts at most $b$ time units after job $i$.'",
      },
      {
        term: "The constraint graph",
        kind: "method",
        statement: "Build the graph $G = (V, E)$ on vertices $v_0, v_1, \\dots, v_n$: for each constraint $x_j - x_i \\le b_k$, add the **edge $(v_i, v_j)$ with weight $b_k$**; additionally add a zero-weight edge $(v_0, v_j)$ for every $j$. Then run **Bellman-Ford from $v_0$**. If it returns TRUE, the numbers $x_j = \\delta(v_0, v_j)$ solve the system.",
        detail: "The correspondence is exact because relaxing edge $(v_i, v_j)$ enforces precisely the inequality $x_j \\le x_i + b_k$: shortest-path constraints are telescoped sums of difference constraints along paths — with $n$ extra variables of freedom removed by fixing $x_0 = 0$ through the source edges.",
      },
      {
        term: "Feasibility theorem",
        kind: "theorem",
        statement: "The system $Ax \\le b$ of difference constraints is **feasible if and only if the constraint graph contains no negative-weight cycle**. If no such cycle exists, $x_j = \\delta(v_0, v_j)$ is a solution; if the cycle exists, summing the inequalities around it yields $0 \\le$ (a negative number), a contradiction — no assignment can satisfy it.",
        detail: "Sufficiency: for each edge $(v_i, v_j)$ on any $v_0 \\leadsto v_j$ shortest path, $\\delta(v_0, v_j) \\le \\delta(v_0, v_i) + w(v_i, v_j)$, which is exactly $x_j - x_i \\le w(v_i, v_j)$; the shortest-path property therefore certifies every constraint simultaneously.",
      },
      {
        term: "The lattice of solutions",
        kind: "insight",
        statement: "The solution set is closed under adding a common constant and under **componentwise minimum**: if $x$ and $x'$ are solutions, so is $\\min(x, x')_i$ taken per coordinate. Among all solutions, the Bellman-Ford solution $x_j = \\delta(v_0, v_j)$ is the **pointwise maximum** — every feasible $x$ satisfies $x_j \\le \\delta(v_0, v_j)$ after normalizing $x_0 = 0$.",
        detail: "For scheduling this maximum is the natural goal: 'latest possible start times' that still meet every deadline. The interplay of componentwise min and max makes the feasible region a distributive lattice with the shortest-path solution at its top.",
      },
      {
        term: "Adding $s_0$ with zero edges",
        kind: "method",
        statement: "Add super-source $s_0$ with $0$-weight edges to every vertex, then run Bellman-Ford from $s_0$: $d[v] = $ shortest $s_0 \\leadsto v$ distance (hence $\\le 0$) is a feasible potential, or a negative cycle (hence infeasible system) is reported. $s_0$ is discarded after.",
        detail: "Zero edges make every vertex reachable so Bellman-Ford sees every cycle; they add $0$ to every path, so they bias distances nonpositively without changing cycle weights.",
      },
    ],
    examples: [
      {
        title: "Solving six constraints with one Bellman-Ford run",
        problem: "Determine whether the following system is feasible and, if so, produce the maximum solution: (1) $x_2 - x_1 \\le 3$; (2) $x_3 - x_2 \\le -2$; (3) $x_4 - x_3 \\le 5$; (4) $x_1 - x_4 \\le -6$; (5) $x_5 - x_2 \\le -1$; (6) $x_3 - x_5 \\le 2$.",
        steps: [
          { label: "Build the graph", text: "Constraint (1) becomes edge $(v_1, v_2)$ with weight 3; (2) gives $(v_2, v_3)$ weight $-2$; (3) gives $(v_3, v_4)$ weight 5; (4) gives $(v_4, v_1)$ weight $-6$; (5) gives $(v_2, v_5)$ weight $-1$; (6) gives $(v_5, v_3)$ weight 2. Add zero-weight edges $v_0 \\to v_j$ for $j = 1..5$: the graph has 6 vertices and 11 edges, so Bellman-Ford performs up to 5 passes." },
          { label: "Pass 1", text: "The source edges set all $d$-values to 0. Then $(v_2, v_3)$: $d_3 = -2$; $(v_4, v_1)$: $d_1 = 0 - 6 = -6$; $(v_2, v_5)$: $d_5 = -1$. After the pass: $(x_1, \\dots, x_5) = (-6, 0, -2, 0, -1)$." },
          { label: "Pass 2", text: "$(v_1, v_2)$: $-6 + 3 = -3$, so $d_2 = -3$; $(v_2, v_3)$: $-3 - 2 = -5$, so $d_3 = -5$; $(v_2, v_5)$: $-3 - 1 = -4$, so $d_5 = -4$; $(v_3, v_4)$: $-5 + 5 = 0$, no change. After the pass: $(-6, -3, -5, 0, -4)$." },
          { label: "Pass 3", text: "No edge fires — every inequality is tight or slack. The cycle $v_1 \\to v_2 \\to v_3 \\to v_4 \\to v_1$ has total weight $3 - 2 + 5 - 6 = 0$: exactly zero, so the system is feasible but its constraints cannot all be strict." },
          { label: "Verify the candidate", text: "Check $x = (-6, -3, -5, 0, -4)$: (1) $-3 - (-6) = 3 \\le 3$ tight; (2) $-5 - (-3) = -2 \\le -2$ tight; (3) $0 - (-5) = 5 \\le 5$ tight; (4) $-6 - 0 = -6 \\le -6$ tight; (5) $-4 - (-3) = -1 \\le -1$ tight; (6) $-5 - (-4) = -1 \\le 2$, slack by 3." },
        ],
        result: "Feasible, with maximum solution $x = (-6, -3, -5, 0, -4)$. Adding any constant preserves feasibility: $x + 6 = (0, 3, 1, 6, 2)$ is a valid all-nonnegative schedule in which event 4 happens last, at time 6. Five of the six constraints are tight, reflecting the zero-weight cycle; only constraint (6) has slack, and the maximum solution spends that slack as late as it can.",
      },
      {
        title: "Three constraints, one Bellman-Ford",
        problem: "Constraints $x_2 - x_1 \\le 3$, $x_1 - x_3 \\le -2$, $x_3 - x_2 \\le 1$. Build the graph and solve.",
        steps: [
          { label: "Edges", text: "$1 \\to 2(3)$, $3 \\to 1(-2)$, $2 \\to 3(1)$: edge $(i \\to j, b)$ encodes $x_j - x_i \\le b$." },
          { label: "Super-source", text: "Add $s_0 \\to 1,2,3(0)$: $d = [0,0,0,0]$. Relax $|V| = 4$ times? $|V_{graph}| = 4$ with $s_0$: $3$ passes over $6$ edges." },
          { label: "Distances", text: "Shortest: $d[1] = -2$? Via $s_0 \\to 3(0) \\to 1(-2)$: $-2$; $d[2] = 1$? Via $1$: $-2+3 = 1$; $d[3] = 0$? Via $s_0$: $0$ (or $1+1 = 2$ worse). Solution $x = (-2,1,0)$." },
          { label: "Check", text: "$1-(-2) = 3 \\le 3$ ✓; $-2-0 = -2 \\le -2$ ✓; $0-1 = -1 \\le 1$ ✓. No negative cycle, so feasible; $x$ is the pointwise maximum feasible (Bellman-Ford's $d$)." },
        ],
        result: "Feasible $x = (-2,1,0)$; negative cycle would have meant contradictory bounds (e.g. $x_2-x_1 \\le 1$ plus $x_1-x_2 \\le -2$).",
      },
    ],
    keyTakeaways: [
      "Difference constraints $x_j - x_i \\le b$ correspond one-to-one with edges $(v_i, v_j)$ of weight $b$; solving the system = one Bellman-Ford run from the extra source $v_0$.",
      "The system is feasible exactly when the constraint graph has no negative-weight cycle — cycle sums and constraint sums are the same arithmetic.",
      "Bellman-Ford returns the pointwise maximum solution: latest feasible event times, the natural target in scheduling applications.",
    ],
    quiz: [
      {
        q: "The constraint $x_4 - x_2 \\le 7$ becomes which edge in the constraint graph?",
        options: ["$(v_4, v_2)$ with weight 7", "$(v_2, v_4)$ with weight 7", "$(v_2, v_4)$ with weight $-7$", "A zero-weight edge from $v_0$ to $v_4$"],
        answer: 1,
        explanation: "Constraint $x_j - x_i \\le b$ maps to edge $(v_i, v_j)$ of weight $b$: here $i = 2$, $j = 4$. Relaxing that edge propagates the bound $x_4 \\le x_2 + 7$.",
      },
      {
        q: "A system of difference constraints is infeasible precisely when:",
        options: ["Some $b_k$ is negative", "The constraint graph contains a negative-weight cycle", "The constraint graph is disconnected", "Two constraints share the same variable"],
        answer: 1,
        explanation: "Summing the constraints around a cycle of total weight $< 0$ yields $0 \\le$ negative — impossible. Negative single weights are harmless; only negative cycle totals kill feasibility.",
      },
      {
        q: "Bellman-Ford on the constraint graph returns TRUE. The solution $x_j = \\delta(v_0, v_j)$ is which solution of the system?",
        options: ["The unique solution", "The pointwise minimum solution", "The pointwise maximum solution (after fixing $x_0 = 0$)", "An arbitrary interior point of the feasible region"],
        answer: 2,
        explanation: "Any feasible $x$ with $x_0 = 0$ obeys every path inequality, so $x_j$ is bounded above by every $v_0 \\leadsto v_j$ path weight — hence by the minimum of them, $\\delta(v_0, v_j)$. Uniqueness fails in general: shifting by a constant gives another solution.",
      },
      {
        q: "How many passes does the Bellman-Ford run on a constraint graph built from $n$ unknowns and $m$ constraints perform?",
        options: ["$m$ passes over $n$ edges", "$n$ passes over $m$ edges", "$n$ passes over $m + n$ edges (the graph has $n + 1$ vertices)", "A single pass — constraint graphs are always acyclic"],
        answer: 2,
        explanation: "The graph has $|V| = n + 1$ vertices ($v_0$ plus one per unknown) and $|E| = m + n$ edges, so Bellman-Ford runs $|V| - 1 = n$ passes over all $m + n$ edges, for $O(n(m+n))$ total. Constraint graphs absolutely can have cycles — that is how infeasibility is detected.",
      },
    ],
  },

  // ---------------------------------------------------------------- 24.5
  {
    sectionId: "clrs-ch24-s5",
    readingTime: 8,
    intro: "This section is the chapter's engine room: the handful of lemmas — triangle inequality, upper-bound, convergence, path-relaxation — from which the correctness of every algorithm above flows. The proofs are short because relaxation has such a simple structure: estimates only decrease, never below the truth, and settle permanently once they hit it.",
    objectives: [
      "Prove the triangle inequality and the upper-bound property of relaxation",
      "Apply the convergence and path-relaxation properties to certify Bellman-Ford and Dijkstra",
      "Show that the predecessor subgraph is a shortest-paths tree when no negative cycle is reachable",
    ],
    concepts: [
      {
        term: "Triangle inequality",
        kind: "law",
        statement: "For every edge $(u, v) \\in E$: $$\\delta(s, v) \\;\\le\\; \\delta(s, u) + w(u, v).$$ If $u$ is unreachable from $s$ the right side is $\\infty$ and the claim is vacuous; otherwise splice the edge onto a shortest $s \\leadsto u$ path.",
        detail: "Proof: take a shortest path $p$ from $s$ to $u$; the path $p$ followed by edge $(u,v)$ is an $s \\leadsto v$ path of weight $\\delta(s,u) + w(u,v)$, and $\\delta(s,v)$ is a minimum over all such paths. This is the subpath-substitution idea of optimal substructure in one line — and the analog of the triangle inequality for a metric, without needing symmetry.",
      },
      {
        term: "Upper-bound property",
        kind: "theorem",
        statement: "At every moment of every relaxation-based algorithm, $d[v] \\ge \\delta(s, v)$ — and once equality holds, it **persists forever**, since relaxation can only decrease $d[v]$ and never below $\\delta$.",
        detail: "Induction over relaxation steps: initially $d[v] \\in \\{0, \\infty\\}$, both $\\ge \\delta$. A relaxation sets $d[v] = d[u] + w(u,v) \\ge \\delta(s,u) + w(u,v) \\ge \\delta(s,v)$, using the inductive hypothesis for $u$ and then the triangle inequality. So the estimates form a contracting envelope that can never overshoot the truth.",
      },
      {
        term: "Convergence and no-path properties",
        kind: "theorem",
        statement: "**Convergence:** if at some moment $d[u] = \\delta(s, u)$ and $(u, v)$ is the last edge of some shortest path to $v$, then relaxing $(u,v)$ — now or ever after — leaves $d[v] = \\delta(s, v)$ permanently. **No-path:** if no path from $s$ to $v$ exists, then $d[v] = \\infty$ always.",
        detail: "For convergence: after the relaxation $d[v] \\le \\delta(s,u) + w(u,v) = \\delta(s,v)$, and the upper-bound property supplies the reverse inequality — a squeeze. No-path holds because $d[v]$ only ever becomes finite by relaxing an edge $(u,v)$ with $d[u]$ finite, which inductively requires an actual $s \\leadsto v$ path.",
      },
      {
        term: "The predecessor subgraph is a shortest-paths tree",
        kind: "theorem",
        statement: "Let $G_\\pi = (V_\\pi, E_\\pi)$ have the vertices with finite $d$ and the edges $(\\pi[v], v)$. If no negative-weight cycle is reachable from $s$ and the algorithm ran to completion, then $G_\\pi$ is **acyclic**: a cycle in $G_\\pi$ would force a negative-weight cycle in $G$. Being acyclic, rooted at $s$, and containing a shortest path to every reachable vertex, it is a **shortest-paths tree**.",
        detail: "Cycle forcing: around a predecessor cycle $v_0 \\to v_1 \\to \\dots \\to v_k = v_0$, each edge was set by a relaxation that has held since, so summing $d[v_i] \\ge d[v_{i-1}] + w(v_{i-1}, v_i)$ around the cycle gives $0 \\ge$ the cycle weight — the estimates could only have kept shrinking if the total were negative.",
      },
      {
        term: "Predecessor pointers $\\pi$",
        kind: "notation",
        statement: "RELAX($u,v,w$) sets $\\pi[v] = u$ exactly when it lowers $d[v]$: $\\pi$ always points along the current best-known path. With no negative cycle reachable, the $\\pi$ edges form a shortest-paths tree rooted at $s$ (Theorem 24.7): every $v$'s tree path weighs $d[v] = \\delta(s,v)$.",
        detail: "INITIALIZE-SINGLE-SOURCE sets $\\pi[\\cdot] = \\mathrm{NIL}$; each successful relaxation rewires one $\\pi$. The tree is the certificate Bellman-Ford and Dijkstra return alongside distances.",
      },
    ],
    examples: [
      {
        title: "Watching the lemmas fire in the Bellman-Ford trace",
        problem: "Re-analyze the Section 24.1 run (vertices $s,t,x,y,z$, final $\\delta = (0, 2, 4, 7, -2)$) and identify each lemma at work.",
        steps: [
          { label: "Upper bound at birth", text: "Initially $d = (0, \\infty, \\infty, \\infty, \\infty)$ — both values allowed. The estimate sequence for $x$ is $\\infty \\to 11 \\to 4$: it only ever decreases and never dips below $\\delta(s,x) = 4$, exactly as the upper-bound property demands." },
          { label: "Triangle inequality bounds the drop", text: "The pass-2 relaxation of $(t,x)$ writes $d[x] = d[t] + w(t,x) = 6 + 5 = 11$: since $d[t] \\ge \\delta(s,t) = 2$ and $\\delta(s,x) \\le \\delta(s,t) + 5 = 7$, every value ever written for $x$ lies in $[4, 11]$ until it settles." },
          { label: "Convergence fixes $x$ and $t$", text: "In pass 2, when $(y,x)$ fires, $d[y] = 7 = \\delta(s,y)$ and $(y,x)$ is the last edge of the shortest path to $x$: convergence fires, $d[x] = 4$ permanently. Likewise in pass 3, $(x,t)$ fires with $d[x] = 4 = \\delta(s,x)$, and $d[t]$ converges to 2 forever." },
          { label: "Path-relaxation delivers $z$", text: "The four edges of the shortest path $s \\to y \\to x \\to t \\to z$ are relaxed in path order across the passes — $(s,y)$ in pass 1, $(y,x)$ in pass 2, $(x,t)$ in pass 3, $(t,z)$ in pass 4 — with all manner of unrelated relaxations interleaved. The path-relaxation property guarantees the outcome regardless: after pass 4, $d[z] = -2 = \\delta(s,z)$." },
          { label: "The tree falls out", text: "Predecessors are $\\pi(y) = s$, $\\pi(x) = y$, $\\pi(t) = x$, $\\pi(z) = t$: a single chain — an acyclic predecessor subgraph containing one shortest path per vertex, i.e. a shortest-paths tree. Had $G_\\pi$ contained a cycle, the summation argument would exhibit a negative-weight cycle, contradicting the TRUE verdict." },
        ],
        result: "The four lemmas are not decoration — each one is visible at a specific timestamp of the trace. Together they prove: relaxation never undershoots (upper bound), never needs to revisit settled vertices (convergence), discovers paths edge-by-edge in any interleaved order (path-relaxation), and assembles the results into a tree (predecessor subgraph).",
      },
      {
        title: "Predecessors freeze along the shortest path",
        problem: "Chain $s \\to a(2) \\to b(2)$: trace $d$ and $\\pi$ through two Bellman-Ford passes.",
        steps: [
          { label: "Init", text: "$d = [0,\\infty,\\infty]$, $\\pi = [nil,nil,nil]$." },
          { label: "Pass 1, edge order $s\\to a$, $a\\to b$", text: "Relax $s \\to a$: $d[a] = 2$, $\\pi[a] = s$. Relax $a \\to b$: $d[b] = 4$, $\\pi[b] = a$. Triangle inequality $d[b] \\le d[a]+2$ tight." },
          { label: "Pass 2", text: "No relaxation succeeds: upper-bound property ($d \\ge \\delta$ always) plus convergence ($d[a] = \\delta$ keeps $d[b]$ at $\\delta$)." },
          { label: "Tree", text: "$\\pi$: $s \\leftarrow a \\leftarrow b$: path weights $0,2,4 = \\delta$: predecessor subgraph is a shortest-paths tree." },
        ],
        result: "$d = [0,2,4]$, $\\pi = [nil,s,a]$: $\\pi$ traces each vertex's shortest path back to $s$.",
      },
    ],
    keyTakeaways: [
      "The triangle inequality plus induction over relaxations yields the upper-bound property: $d[v] \\ge \\delta(s,v)$ always, with equality permanent once reached.",
      "Path-relaxation is the workhorse: shortest-path edges relaxed in order (amid any interleaving) always deliver $\\delta$ — this single lemma powers both Bellman-Ford and Dijkstra.",
      "Predecessor pointers can only form cycles over negative-weight cycles; with none reachable, the $\\pi$-subgraph is a tree holding one shortest path to every reachable vertex.",
    ],
    quiz: [
      {
        q: "The triangle inequality of shortest paths states that for every edge $(u, v)$:",
        options: ["$\\delta(s,u) \\le \\delta(s,v) + w(u,v)$", "$\\delta(s,v) \\le \\delta(s,u) + w(u,v)$", "$|\\delta(s,u) - \\delta(s,v)| \\le w(u,v)$", "$\\delta(u,v) \\le \\delta(u,s) + \\delta(s,v)$"],
        answer: 1,
        explanation: "A shortest $s \\leadsto u$ path plus the edge $(u,v)$ is one candidate $s \\leadsto v$ path, so the optimum $\\delta(s,v)$ is no larger than its weight. Option 3 would additionally need symmetry — directed weights need not have it.",
      },
      {
        q: "During any relaxation-based run, which inequality holds for every vertex $v$ at every moment?",
        options: ["$d[v] \\le \\delta(s, v)$", "$d[v] \\ge \\delta(s, v)$", "$d[v] = \\delta(s, v)$ after each full pass", "$d[v] \\le d[u] + w(u,v)$ for every edge $(u,v)$ into $v$"],
        answer: 1,
        explanation: "The upper-bound property: relaxation writes $d[u] + w(u,v)$, which by hypothesis plus the triangle inequality is $\\ge \\delta(s,v)$. Estimates approach the truth only from above — which is exactly why a negative cycle (truth at $-\\infty$) makes them chase forever.",
      },
      {
        q: "Suppose $d[u] = \\delta(s, u)$ holds and edge $(u, v)$ is the last edge of a shortest path from $s$ to $v$. Relaxing $(u, v)$ (now or at any later time) has what effect?",
        options: ["Sets $d[v] = \\delta(s,v)$, permanently", "May lower $d[v]$ below $\\delta(s,v)$ temporarily", "Has no effect, since $d[v]$ was already $\\delta(s,v)$", "Sets $d[v] = d[u] + w(u,v)$, which may still be improved later"],
        answer: 0,
        explanation: "This is the convergence property: after the relaxation $d[v] \\le \\delta(s,v)$, the upper-bound property forces $d[v] \\ge \\delta(s,v)$ — equality, and by the same squeeze it survives every later relaxation.",
      },
      {
        q: "If the predecessor subgraph $G_\\pi$ of a completed run contains a cycle, what follows?",
        options: ["The cycle must consist of zero-weight edges only", "The graph $G$ contains a negative-weight cycle reachable from $s$", "The source was extracted twice", "Nothing — cycles in $G_\\pi$ are normal even with all-nonnegative weights"],
        answer: 1,
        explanation: "Summing the inequalities that held when each predecessor pointer was last written telescopes to $0 \\ge$ cycle weight; a strict cycle needs strictly negative total weight to keep the estimates shrinking. With all weights non-negative, $G_\\pi$ is provably a tree.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "The path-relaxation lemma, proved completely",
        blocks: [
          {
            kind: "theorem",
            heading: "Path-relaxation property",
            body: "Let $G = (V, E)$ be a weighted digraph with source $s$, and let $p = \\langle v_0, v_1, \\dots, v_k \\rangle$ be a shortest path from $s = v_0$ to $v_k$ (so $v_0 = s$, and $k$ may be 0). Suppose that at some times during a run of any relaxation-based algorithm the edges are relaxed in the order $(v_0, v_1), (v_1, v_2), \\dots, (v_{k-1}, v_k)$ — with **arbitrary other relaxations interleaved arbitrarily** between them. Then after the edge $(v_{k-1}, v_k)$ is relaxed, $d[v_k] = \\delta(s, v_k)$.",
          },
          {
            kind: "proof",
            heading: "Induction along the path",
            body: "We prove by induction on $i = 0, 1, \\dots, k$ that immediately after $(v_{i-1}, v_i)$ is relaxed, $d[v_i] = \\delta(s, v_i)$ — and that this value is permanent from that moment on.\n\n**Base ($i = 0$):** $v_0 = s$ and $d[s] = 0 = \\delta(s, s)$ from initialization; the upper-bound property keeps it there, since relaxation changes $d[s]$ only if some finite estimate improves it, which cannot happen without a negative cycle through $s$.\n\n**Inductive step:** assume $d[v_{i-1}] = \\delta(s, v_{i-1})$ has held since its own relaxation, and consider the moment $(v_{i-1}, v_i)$ is relaxed. The relaxation sets $d[v_i] = \\min(d[v_i], d[v_{i-1}] + w(v_{i-1}, v_i)) = \\min(d[v_i], \\delta(s, v_{i-1}) + w(v_{i-1}, v_i))$. By the triangle inequality $\\delta(s, v_i) \\le \\delta(s, v_{i-1}) + w(v_{i-1}, v_i)$, so the written value is $\\ge \\delta(s, v_i)$; by the upper-bound property every value $d[v_i]$ has ever held is $\\ge \\delta(s, v_i)$, so the minimum is too. Squeezed from both sides, $d[v_i] = \\delta(s, v_i)$ the instant the edge fires. Permanence is the same squeeze: later relaxations only offer values $\\ge \\delta(s, v_i)$, so the estimate can never leave the truth once it arrives. Notice what the proof never used: any property of the interleaved relaxations. That indifference to scheduling is the entire strength of the lemma.",
          },
          {
            kind: "derivation",
            heading: "Corollary: why $|V| - 1$ passes are enough",
            body: "Take Bellman-Ford and any shortest path $p$ from $s$ to any $v$; because shortest paths are simple when no negative cycle is reachable, $p$ has $k \\le |V| - 1$ edges. Each pass relaxes every edge, so in pass $i$ the edge $(v_{i-1}, v_i)$ is relaxed at some point. The path's edges are therefore relaxed in path order across the passes — pass 1 handles $(v_0, v_1)$, pass 2 handles $(v_1, v_2)$, and so on — and the interleaved relaxations within each pass are exactly the 'arbitrary interleavings' the lemma tolerates. After pass $k \\le |V| - 1$, $d[v_k] = \\delta(s, v_k)$. Since $v$ was arbitrary, $|V| - 1$ passes finish every vertex simultaneously, and the final scan simply checks whether any estimate would still move — the fingerprint of a reachable negative cycle, where the path whose edges are being chased in order never terminates.",
          },
          {
            kind: "application",
            heading: "Dijkstra's extraction, certified",
            body: "Dijkstra's greedy step is the lemma plus non-negativity. Suppose the first vertex $u$ extracted with $d[u] > \\delta(s, u)$, and let $p$ be a shortest $s \\leadsto u$ path; let $y$ be the first vertex of $p$ not yet settled when $u$ is extracted, with predecessor $x$ on $p$ already settled. When $x$ was extracted, its out-edges were relaxed, so by the convergence property $d[y] = \\delta(s, y)$ at that moment — and permanently. Now the suffix $y \\leadsto u$ of $p$ has weight $\\ge 0$ (here, and only here, non-negativity enters), so $\\delta(s, y) \\le \\delta(s, u) < d[u]$, i.e. $d[y] \\le \\delta(s, y) \\le \\delta(s,u) < d[u]$: the queue held $y$ with a strictly smaller key than $u$, contradicting the extract-min choice of $u$. Hence no such 'first wrong extraction' exists.",
          },
          {
            kind: "remark",
            heading: "Why the lemma matters beyond the classroom",
            body: "Because the order of the interleaved relaxations is irrelevant, Bellman-Ford remains correct in **asynchronous, distributed** form: each node updates its own estimate whenever a neighbor's message arrives, and the path edges of every shortest path still get relaxed in order eventually. This is precisely the mathematics underlying distance-vector routing protocols (the original ARPANET algorithm and RIP), where 'relax whenever a message arrives' is not a convenience but the only available semantics — and a reachable negative cycle is exactly the count-to-infinity pathology those protocols must guard against.",
          },
        ],
      },
    ],
  },
]
