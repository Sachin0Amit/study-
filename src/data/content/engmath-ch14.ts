import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 14: Graphs & Combinatorial Optimization
// (Kreyszig 10e, Part F, Chapter 23).
// Sections 14.1 – 14.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh14Content: SectionContent[] = [
  // ---------------------------------------------------------------- 14.1
  {
    sectionId: 'engmath-ch14-s1',
    readingTime: 9,
    intro: 'Shortest-path problems ask for the cheapest route through a weighted network, from road maps to packet routing. Dijkstra method settles vertices in order of distance while Bellman-Ford relaxes every edge repeatedly to survive negative weights. This section states the optimality principle behind both, runs each algorithm by hand, and compares their costs and limits.',
    objectives: [
      'Run Dijkstra method on small graphs and state its nonnegative-weight requirement',
      'Run Bellman-Ford relaxation passes and detect negative cycles from them',
      'Quote both running times and choose the right algorithm for the edge signs'
    ],
    concepts: [
      {
        term: 'Paths, weights and distances',
        kind: 'definition',
        statement: 'A **path length** is the sum of its edge weights, and the **distance** between two vertices is the minimum length over all connecting paths, infinite when disconnected, in the `dist` vocabulary. Negative edges model refunds or time gains, while negative cycles make distances unbounded by looping forever. Directed edges restrict travel to one way, so digraph distances need not be symmetric.',
        detail: 'Zero-weight edges are harmless for Dijkstra but demand care in correctness proofs, since ties let many vertices share one distance.'
      },
      {
        term: 'Dijkstra greedy with a priority queue',
        kind: 'method',
        statement: '**Dijkstra method** repeatedly extracts the unsettled vertex of smallest tentative distance and relaxes its outgoing edges, settling each vertex exactly once when all weights are nonnegative in the `pq` implementation. The priority queue delivers each extraction in logarithmic time for a total of `$O(m \\log n)$` on `$n$` vertices and `$m$` edges. One negative edge breaks the settling logic, because a later path can still undercut an extracted distance.',
        detail: 'With a binary heap the bound is `$O((n + m) \\log n)$`, and dense graphs may prefer the array version at `$O(n^{2})$`.'
      },
      {
        term: 'Bellman-Ford relaxation and negative cycles',
        kind: 'method',
        statement: '**Bellman-Ford** relaxes every edge `$n - 1$` times, propagating improvements along paths of growing edge count through the `relax` passes. A further pass that still improves a distance proves a reachable **negative cycle**, turning detection into a feature rather than a crash. The price is `$O(nm)$` time, affordable for moderate graphs and mandatory whenever negative weights appear.',
        detail: 'Initializing all distances to zero with a super-source exposes negative cycles anywhere in the graph, not just downstream of one start.'
      },
      {
        term: 'Bellman principle of optimality',
        kind: 'theorem',
        statement: '**Optimal substructure** says every subpath of a shortest path is itself shortest between its endpoints, the `opt` principle that lets both algorithms extend confirmed prefixes safely. Dijkstra settles a vertex because any alternative must leave through an edge of nonnegative extra cost, while Bellman-Ford trusts that `$n - 1$` edges suffice for a simple shortest path. Without this nesting property, greedy extension would have no foundation at all.',
        detail: 'Negative cycles violate the premise by offering ever-shorter non-simple paths, which is exactly why distances become undefined there.'
      },
      {
        term: 'Choosing by density and edge signs',
        kind: 'insight',
        statement: 'Nonnegative weights point to **Dijkstra**, negative edges force **Bellman-Ford**, and dense graphs shift the balance toward array Dijkstra in the `bigO` decision table. Running Bellman-Ford on thousand-vertex sparse graphs wastes the speed Dijkstra offers, while running Dijkstra past negative edges produces confidently wrong answers. Reading the edge signs first is the entire selection procedure.',
        detail: 'Johnson reweighting runs Bellman-Ford once to permit Dijkstra from every source, the standard all-pairs pipeline on sparse signed graphs.'
      }
    ],
    figures: [
      {
        caption: 'Shortest route $A \\to D$: edge weights in boxes, settled distances in circles, and the winning path $A \\to C \\to B \\to D$ of length $8$ drawn bold against the direct $9$ alternative.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Weighted digraph with Dijkstra shortest path highlighted"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Dijkstra settles A, C, B, D</text><circle cx="120" cy="200" r="26" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="120" y="207" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><circle cx="320" cy="110" r="26" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="320" y="117" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><circle cx="320" cy="280" r="26" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="320" y="287" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">B</text><circle cx="560" cy="200" r="26" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="560" y="207" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">D</text><line x1="144" y1="188" x2="296" y2="122" stroke="currentColor" stroke-width="3"/><polygon points="296,122 284,126 290,134" fill="currentColor"/><line x1="144" y1="212" x2="296" y2="272" stroke="currentColor" stroke-width="1.5"/><polygon points="296,272 284,268 290,260" fill="currentColor"/><line x1="320" y1="136" x2="320" y2="248" stroke="currentColor" stroke-width="3"/><polygon points="320,254 314,242 326,242" fill="currentColor"/><line x1="344" y1="272" x2="536" y2="208" stroke="currentColor" stroke-width="3"/><polygon points="536,208 524,212 530,220" fill="currentColor"/><line x1="344" y1="118" x2="536" y2="192" stroke="currentColor" stroke-width="1.5"/><polygon points="536,192 524,188 530,180" fill="currentColor"/><text x="215" y="140" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">2</text><text x="215" y="265" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">4</text><text x="336" y="200" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">1</text><text x="440" y="255" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">5</text><text x="440" y="145" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">8</text><text x="360" y="330" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">bold path totals 2 plus 1 plus 5</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Dijkstra from A to D by hand',
        problem: 'Find the shortest `$A \\to D$` distances in the figured graph with edges `$A \\to C = 2$`, `$A \\to B = 4$`, `$C \\to B = 1$`, `$B \\to D = 5$`, `$C \\to D = 8$`.',
        steps: [
          { label: 'Step 1: Settle A then C', text: 'Start with distance `$0$` at `$A$`; relaxing gives `$C = 2$` and `$B = 4$`. Extract `$C$` next since `$2$` is smallest, relaxing `$B$` down to `$2 + 1 = 3$` and `$D$` to `$2 + 8 = 10$`.' },
          { label: 'Step 2: Settle B then D', text: 'Extract `$B$` at `$3$` and relax `$D$` down to `$3 + 5 = 8$`, beating the `$10$` through `$C$` directly. Finally extract `$D$` at `$8$`, and no unsettled vertex can undercut a settled one under nonnegative weights.' },
          { label: 'Step 3: Read the route', text: 'Parent pointers give `$A \\to C \\to B \\to D$` with length `$2 + 1 + 5 = 8$`, shorter than the direct-looking `$A \\to B \\to D$` at `$9$`. Greedy settling never revisits `$B$` after extraction, which is valid only because no edge is negative.' }
        ],
        result: 'Distances `$A = 0$`, `$C = 2$`, `$B = 3$`, `$D = 8$` with path `$A \\to C \\to B \\to D$`.'
      },
      {
        title: 'Bellman-Ford absorbs a negative edge',
        problem: 'Add a negative edge by changing `$C \\to D$` to `$-2$` with all else fixed, and recompute `$A \\to D$` with relaxation passes plus a script check.',
        steps: [
          { label: 'Step 1: Relax systematically', text: 'Initialize `$A = 0$` and the rest infinite. Pass one yields `$C = 2$`, `$B = 4$` then `$B = 3$` via `$C$`, and `$D = 0$` via `$C \\to D = -2$`. Pass two changes nothing, and with `$n = 4$` the `$n - 1 = 3$` passes guarantee optimality on simple paths.' },
          { label: 'Step 2: Confirm and test cycles in code', text: '```python\nedges = [("A","C",2),("A","B",4),("C","B",1),("B","D",5),("C","D",-2)]\nd = {"A":0,"C":9e9,"B":9e9,"D":9e9}\nfor _ in range(3):\n    for u,v,w in edges:\n        d[v] = min(d[v], d[u] + w)\nprint(d)  # A 0, C 2, B 3, D 0\n```\nThe script prints `D 0`: the route `$A \\to C \\to D$` costs `$2 - 2 = 0$`, which Dijkstra would have missed after settling `$D$` early.' },
          { label: 'Step 3: Cycle verdict', text: 'A fourth pass improves nothing, so no negative cycle is reachable and distance `$0$` is official. Had the fourth pass moved a distance, that movement itself would name a negative cycle.' }
        ],
        result: 'With the `$-2$` edge the shortest `$A \\to D$` distance is `$0$` via `$C$`, and no negative cycle exists.'
      }
    ],
    keyTakeaways: [
      'Dijkstra settles vertices in distance order with a priority queue but requires nonnegative weights.',
      'Bellman-Ford relaxes all edges `$n - 1$` times, tolerates negative edges, and flags negative cycles.',
      'The optimality principle makes subpaths of shortest paths shortest, licensing greedy extension.',
      'Choose Dijkstra for nonnegative sparse graphs and Bellman-Ford whenever negative edges may appear.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2012 — Dijkstra behavior on signed weights (rephrased)
      {
        q: 'Dijkstra method is run on a graph containing one negative edge but no negative cycle. What can happen?',
        options: ['It always still succeeds', 'It may settle a vertex with a wrong distance', 'It always detects the negative edge', 'It runs faster than usual'],
        answer: 1,
        explanation: 'Step 1: Dijkstra never revisits extracted vertices. Step 2: A negative edge can later undercut a settled distance. Step 3: The worked example showed D stuck at 8 while 0 was reachable. Step 4: Detection needs the extra Bellman-Ford pass, which Dijkstra lacks.'
      },
      {
        q: 'Bellman-Ford on `$n$` vertices runs how many relaxation passes to guarantee shortest simple paths?',
        options: ['$n$ passes', 'One pass', 'Until the queue empties, which is always one pass', '`$n - 1$` passes'],
        answer: 3,
        explanation: 'Step 1: A simple shortest path uses at most n minus 1 edges. Step 2: Each pass extends confirmed reach by one more edge. Step 3: Hence n minus 1 passes cover every simple path. Step 4: The optional nth pass serves only cycle detection.'
      },
      {
        q: 'In the figured graph, why is `$A \\to C \\to B \\to D$` preferred over `$A \\to B \\to D$`?',
        options: ['Its total 8 beats 9', 'It uses more edges', 'Dijkstra prefers longer vertex lists', 'Direct edges are ignored by definition'],
        answer: 0,
        explanation: 'Step 1: Add the indirect route: 2 plus 1 plus 5 gives 8. Step 2: Add the direct-looking route: 4 plus 5 gives 9. Step 3: Distance minimizes total weight, not edge count. Step 4: Hence the three-hop path wins by 1.'
      },
      {
        q: 'Sparse nonnegative graph with `$10000$` vertices and `$30000$` edges needs single-source distances. What is the standard choice?',
        options: ['Bellman-Ford at O(nm)', 'Array Dijkstra at O(n squared)', 'Heap Dijkstra at O(m log n)', 'Repeated DFS'],
        answer: 2,
        explanation: 'Step 1: Nonnegative weights admit Dijkstra settling. Step 2: Sparsity favors the heap over the array version. Step 3: Heap cost scales with m log n, near 30000 times 14 here. Step 4: Bellman-Ford would cost n times m, hundreds of times more.'
      }
    ]
  },
  // ---------------------------------------------------------------- 14.2
  {
    sectionId: 'engmath-ch14-s2',
    readingTime: 8,
    intro: 'Spanning trees connect every vertex with the fewest possible edges, and minimum spanning trees do it most cheaply. Kruskal sorts edges globally while Prim grows one tree outward, yet both rest on the same cut property. This section proves that property in working form, runs both algorithms, and notes what is unique about the answer.',
    objectives: [
      'State the cut property and use it to justify greedy edge choices',
      'Build minimum spanning trees with Kruskal and Prim methods by hand',
      'Count tree edges and explain uniqueness of weight versus tree'
    ],
    concepts: [
      {
        term: 'Spanning trees and the cut property',
        kind: 'theorem',
        statement: 'A **spanning tree** connects all `$n$` vertices with exactly `$n - 1$` cycle-free edges, and the **cut property** says the cheapest edge crossing any vertex partition belongs to some minimum `cut` spanning tree. Every greedy MST choice is one such crossing edge, so the property certifies each pick the moment it is made. Cuts and cycles are dual viewpoints: the cheapest crossing edge is safe while the costliest cycle edge is disposable.',
        detail: 'A single-vertex cut makes the cheapest incident edge of any vertex automatically safe, which is how Prim starts anywhere.'
      },
      {
        term: 'Kruskal with union-find',
        kind: 'method',
        statement: '**Kruskal method** sorts all edges by weight and takes each edge whose endpoints sit in different components, skipping cycle-makers via the `union` find structure. Sorting dominates the cost at `$O(m \\log m)$`, while nearly-constant union-find operations keep the selection phase light. The forest merges piece by piece until one tree spans everything, independent of any start vertex.',
        detail: 'Equal-weight ties may be taken in any order, which is exactly how different minimum trees arise from one sorted list.'
      },
      {
        term: 'Prim from a growing fringe',
        kind: 'method',
        statement: '**Prim method** grows one tree from a root, always attaching the cheapest edge from the tree to the outside through the `fringe` priority queue. With a heap it matches Dijkstra-like `$O(m \\log n)$` behavior, and on dense graphs the array version runs `$O(n^{2})$`. The tree never breaks into pieces, so partial results are always connected, unlike Kruskal intermediate forests.',
        detail: 'Starting vertex never affects the final weight, though it can change which minimum tree appears under ties.'
      },
      {
        term: 'Weight is unique, the tree need not be',
        kind: 'insight',
        statement: 'All minimum spanning trees of a graph share one **total weight**, even when distinct edge sets achieve it under tied weights in the `unique` sense. Reporting the weight is therefore canonical while reporting edges needs a tie-breaking note. Distinct weights, in contrast, force a single unique tree, since no swap can preserve the total.',
        detail: 'Swapping two equal-weight crossing edges converts one minimum tree into another without changing the sum, the standard multiplicity mechanism.'
      },
      {
        term: 'Greedy works here because cuts nest',
        kind: 'insight',
        statement: 'Both algorithms are **greedy**, taking the locally cheapest safe edge every round, and the cut property is precisely why greed never regrets in the `greedy` MST setting. Shortest paths admit one greedy algorithm under sign restrictions, but spanning trees admit two unconditionally. Recognizing matroid structure behind the scenes predicts exactly these greed-friendly problems.',
        detail: 'Maximum spanning trees follow by negating weights or flipping comparisons, reusing every argument verbatim.'
      }
    ],
    figures: [
      {
        caption: 'Minimum spanning tree of weight $7$: taken edges $AB$, $BC$, $AD$ bold against rejected $AC$ and $CD$, with the cut around $\\{A, B, C\\}$ showing $AD$ as its cheapest crossing.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Minimum spanning tree with cut and rejected edges"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">MST weight 7 from four vertices</text><ellipse cx="250" cy="200" rx="150" ry="120" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><text x="250" y="70" font-family="sans-serif" font-size="12" font-style="italic" text-anchor="middle" fill="currentColor">cut: A B C inside</text><circle cx="160" cy="140" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="160" y="147" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><circle cx="330" cy="140" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="330" y="147" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">B</text><circle cx="245" cy="280" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="245" y="287" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><circle cx="540" cy="200" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="540" y="207" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">D</text><line x1="184" y1="140" x2="306" y2="140" stroke="currentColor" stroke-width="3"/><line x1="310" y1="160" x2="262" y2="260" stroke="currentColor" stroke-width="3"/><line x1="180" y1="158" x2="340" y2="230" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="182" y1="150" x2="516" y2="196" stroke="currentColor" stroke-width="3"/><line x1="268" y1="288" x2="516" y2="210" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><text x="245" y="128" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">1</text><text x="300" y="225" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">2</text><text x="260" y="185" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">3 skip</text><text x="350" y="160" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">4</text><text x="400" y="270" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">5 skip</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Kruskal on four vertices and five edges',
        problem: 'Find the MST weight with edges `$AB = 1$`, `$BC = 2$`, `$AC = 3$`, `$AD = 4$`, `$CD = 5$`.',
        steps: [
          { label: 'Step 1: Sort and take light edges', text: 'Sorted order is `$1, 2, 3, 4, 5$`. Take `$AB = 1$` merging `$A$` with `$B$`, then `$BC = 2$` merging `$C$` into that component. Both picks are cut-certified the instant they are taken.' },
          { label: 'Step 2: Skip the cycle-maker', text: 'Edge `$AC = 3$` joins vertices already connected through `$B$`, so union-find rejects it as a cycle edge. Skipping is not hesitation but the algorithm protecting acyclicity.' },
          { label: 'Step 3: Connect D and total', text: 'Take `$AD = 4$` to attach `$D$`, reaching `$n - 1 = 3$` edges and stopping. Total `$1 + 2 + 4 = 7$`, with `$CD = 5$` never examined as a candidate.' }
        ],
        result: 'MST edges `$AB, BC, AD$` with total weight `$7$`.'
      },
      {
        title: 'Prim growing from A confirms the same weight',
        problem: 'Grow a Prim tree from `$A$` on the same graph and verify the weight with a script.',
        steps: [
          { label: 'Step 1: Attach B then C', text: 'Fringe from `$A$` offers `$AB = 1$` against `$AC = 3$` and `$AD = 4$`, so attach `$B$`. Fringe from `$\\{A, B\\}$` offers `$BC = 2$` as cheapest, attaching `$C$` for running total `$3$`.' },
          { label: 'Step 2: Attach D and check in code', text: '```python\ntaken = [("A","B",1),("B","C",2),("A","D",4)]\nprint(sum(w for _,_,w in taken))  # 7\n```\nFringe from `$\\{A, B, C\\}$` offers `$AD = 4$` against `$CD = 5$`, attaching `$D$` via `$A$`, and the script prints total `7`.' },
          { label: 'Step 3: Compare the trees', text: 'Both methods agree on weight `$7$` and here on edges too, though ties elsewhere could split their choices. Weight agreement is guaranteed; edge agreement is a bonus.' }
        ],
        result: 'Prim tree `$AB, BC, AD$` with weight `$7$`, matching Kruskal.'
      }
    ],
    keyTakeaways: [
      'The cut property certifies the cheapest crossing edge of every partition as MST-safe.',
      'Kruskal sorts edges and merges components with union-find, skipping cycle-makers.',
      'Prim grows one connected tree through the cheapest fringe edge at each round.',
      'MST weight is unique while the achieving tree may vary under tied weights.'
    ],
    quiz: [
      {
        q: 'A cut separates `$\\{A, B\\}$` from the rest with crossing weights `$5, 9, 12$`. Which edge is guaranteed MST-safe?',
        options: ['The weight-9 edge', 'The weight-12 edge', 'The weight-5 edge', 'None without running full Kruskal'],
        answer: 2,
        explanation: 'Step 1: Apply the cut property to this exact partition. Step 2: It names the cheapest crossing edge as safe. Step 3: The cheapest crossing weight here is 5. Step 4: No global computation can overrule that local certificate.'
      },
      {
        q: 'A spanning tree of a `$7$-vertex` connected graph has how many edges?',
        options: [`$6$`, `$7$`, `$8$`, 'At least 12'],
        answer: 0,
        explanation: 'Step 1: Recall trees on n vertices carry n minus 1 edges. Step 2: Insert n equal to 7. Step 3: The count is 6. Step 4: Fewer edges would disconnect and more would cycle.'
      },
      {
        q: 'Kruskal examines an edge whose endpoints are already connected. What does it do?',
        options: ['Takes it to strengthen the tree', 'Restarts the sort', 'Splits the component', 'Skips it as a cycle-maker'],
        answer: 3,
        explanation: 'Step 1: Connected endpoints mean a path already joins them. Step 2: Adding the edge would close a cycle. Step 3: Trees forbid cycles by definition. Step 4: Hence the edge is skipped permanently.'
      },
      {
        q: 'Two different MSTs of one graph are found with weights `$31$` and `$32$`. What follows?',
        options: ['Both are minimum', 'The weight-31 tree is minimum and 32 is a computation error', 'The heavier tree is preferred', 'Weights are irrelevant'],
        answer: 1,
        explanation: 'Step 1: Invoke weight uniqueness across all minimum trees. Step 2: Two minimum weights cannot differ. Step 3: The lighter value 31 is the true optimum. Step 4: The 32 tree must contain a non-certified pick.'
      }
    ]
  },
  // ---------------------------------------------------------------- 14.3
  {
    sectionId: 'engmath-ch14-s3',
    readingTime: 9,
    intro: 'Flow networks move stuff from a source to a sink through capacitated pipes, from traffic to data to assignments. Augmenting-path methods push flow along leftover capacity until no route remains. This section defines feasible flows, builds residual graphs, runs Ford-Fulkerson, proves optimality through the max-flow min-cut theorem, and reduces bipartite matching to flow.',
    objectives: [
      'State flow conservation and capacity rules and verify small feasible flows',
      'Push augmenting paths on residual graphs to raise flow value',
      'Apply max-flow min-cut to certify optimality and model bipartite matching'
    ],
    concepts: [
      {
        term: 'Feasible flows with conservation',
        kind: 'definition',
        statement: 'A **feasible flow** respects every capacity `$0 \\le f \\le c$` and conserves flow at each interior vertex, inflow equaling outflow, while the source emits and the sink absorbs the `cap` value. The flow value is the net outflow of the source, the single number every augmentation raises. Skew symmetry `$f(u,v) = -f(v,u)$` keeps the bookkeeping consistent when flow is cancelled back.',
        detail: 'Verifying feasibility means checking capacities edge by edge plus one balance equation per interior vertex.'
      },
      {
        term: 'Residual graphs and bottlenecks',
        kind: 'method',
        statement: 'The **residual graph** records remaining forward room `$c - f$` plus backward room `$f$` for cancellation, and an **augmenting path** is any source-sink route through positive `resid` residual. Pushing the path **bottleneck**, its smallest residual, raises the flow while preserving feasibility on every edge. Backward edges are the undo buttons that let later paths reroute earlier mistakes.',
        detail: 'A bottleneck of zero means no augmenting path uses that edge, so path search ignores saturated edges automatically.'
      },
      {
        term: 'Ford-Fulkerson augmentation loop',
        kind: 'method',
        statement: '**Ford-Fulkerson** repeats route-and-push until the sink is unreachable in the residual graph, each round strictly increasing integer flows toward the optimum in the `augment` loop. With BFS path choice it becomes Edmonds-Karp at `$O(nm^{2})$`, sidestepping the slow zigzag of adversarial DFS paths. Irrational capacities can theoretically stall naive variants, which is why BFS discipline matters in libraries.',
        detail: 'Integer capacities guarantee termination with an integer maximum flow, since every bottleneck is a positive integer.'
      },
      {
        term: 'Max-flow min-cut theorem',
        kind: 'theorem',
        statement: 'The **max-flow min-cut theorem** equates the maximum flow value with the minimum cut capacity over all source-sink partitions, so every flow is certified by a matching `mincut` cut. No flow can exceed any cut it must cross, and the residual-reachable set at termination attains equality. Exhibiting the cut is the optimality proof that bare flow values alone cannot supply.',
        detail: 'At termination the vertices reachable from the source in the residual graph define a cut whose capacity exactly equals the flow pushed.'
      },
      {
        term: 'Bipartite matching as unit flow',
        kind: 'insight',
        statement: '**Bipartite matching** reduces to flow by hanging applicants and posts off a source and sink with unit-capacity edges through the `match` construction. Integer max flow then selects the largest set of vertex-disjoint pairs, with flow value equaling matching size. Job assignment, dating-style pairing and resource allocation all inherit flow algorithms through this one reduction.',
        detail: 'Unit capacities keep every augmentation at bottleneck one, so the flow value simply counts matched pairs.'
      }
    ],
    figures: [
      {
        caption: 'Flow network of value $5$: paired labels such as $3$ of $3$ read flow beside capacity, and the dashed cut around $\\{s\\}$ has capacity $3 + 2 = 5$, certifying optimality by max-flow min-cut.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow network with saturated cut"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Flow 5 meets cut 5</text><ellipse cx="150" cy="200" rx="80" ry="110" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><text x="150" y="80" font-family="sans-serif" font-size="12" font-style="italic" text-anchor="middle" fill="currentColor">source side of cut</text><circle cx="110" cy="200" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="110" y="207" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">s</text><circle cx="330" cy="120" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="330" y="127" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">a</text><circle cx="330" cy="280" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="330" y="287" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">b</text><circle cx="560" cy="200" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="560" y="207" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">t</text><line x1="134" y1="190" x2="308" y2="130" stroke="currentColor" stroke-width="2"/><line x1="134" y1="210" x2="308" y2="270" stroke="currentColor" stroke-width="2"/><line x1="352" y1="128" x2="538" y2="192" stroke="currentColor" stroke-width="2"/><line x1="352" y1="272" x2="538" y2="208" stroke="currentColor" stroke-width="2"/><line x1="330" y1="144" x2="330" y2="256" stroke="currentColor" stroke-width="1.5"/><text x="215" y="145" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">3 of 3</text><text x="215" y="260" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">2 of 2</text><text x="450" y="145" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">2 of 2</text><text x="450" y="262" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">3 of 3</text><text x="348" y="205" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">1 of 1</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Three pushes reach the maximum flow',
        problem: 'Push max flow from `$s$` to `$t$` with `$s \\to a = 3$`, `$s \\to b = 2$`, `$a \\to t = 2$`, `$b \\to t = 3$`, `$a \\to b = 1$`.',
        steps: [
          { label: 'Step 1: Direct path s-a-t', text: 'Bottleneck `$\\min(3, 2) = 2$` flows along `$s \\to a \\to t$`, saturating `$a \\to t$`. Flow value `$2$` with `$s \\to a$` residual `$1$` left.' },
          { label: 'Step 2: Diagonal path s-a-b-t', text: 'Residuals `$s \\to a = 1$`, `$a \\to b = 1$`, `$b \\to t = 3$` admit bottleneck `$1$`, rerouting one unit through `$b$`. Flow value `$3$`, and the backward edge `$b \\to a$` now offers cancellation room.' },
          { label: 'Step 3: Final path s-b-t', text: 'Residuals `$s \\to b = 2$` and `$b \\to t = 2$` admit bottleneck `$2$`, saturating both. Flow value `$5$` with the sink unreachable afterward, and cut `$\\{s\\}$` at `$3 + 2 = 5$` certifies optimality.' }
        ],
        result: 'Maximum flow `$5$` via pushes `$2, 1, 2$`, certified by the cut of capacity `$5$`.'
      },
      {
        title: 'Read the certificate from the cut',
        problem: 'Verify optimality of the `$5$` flow above by cut arithmetic and a scripted check.',
        steps: [
          { label: 'Step 1: Candidate cut capacity', text: 'Partition `$\\{s\\}$` against the rest crosses `$s \\to a$` at `$3$` and `$s \\to b$` at `$2$`, totaling `$5$`. Since no flow can exceed any cut it crosses, `$5$` is an upper bound on all flows.' },
          { label: 'Step 2: Match flow to bound in code', text: '```python\nflow_value = 2 + 1 + 2\ncut_cap = 3 + 2\nprint(flow_value, cut_cap, flow_value == cut_cap)\n# 5 5 True\n```\nThe script prints `5 5 True`: achieved flow meets the universal ceiling, which only optima do.' },
          { label: 'Step 3: State the theorem payoff', text: 'Equality of a flow value with any cut capacity proves both maximum simultaneously. No further augmentation search is needed once the numbers shake hands.' }
        ],
        result: 'Flow `$5$` equals cut capacity `$5$`, hence maximum by the theorem.'
      }
    ],
    keyTakeaways: [
      'Feasible flows obey capacities plus interior conservation, with value measured at the source.',
      'Residual graphs expose forward room and backward cancellation, and bottlenecks size each push.',
      'Ford-Fulkerson with BFS choice terminates efficiently on integer capacities.',
      'Max-flow min-cut certifies optima, and bipartite matching is unit-capacity flow in disguise.'
    ],
    quiz: [
      {
        q: 'An interior vertex receives `$7$` units and forwards `$4$` plus `$3$` along two edges. Which rule is satisfied?',
        options: ['Capacity only', 'The cut bound', 'Unlimited rerouting', 'Flow conservation'],
        answer: 3,
        explanation: 'Step 1: Add the outflows: 4 plus 3 gives 7. Step 2: Compare with the inflow of 7. Step 3: Equality is exactly conservation at interior vertices. Step 4: Capacities would need edge limits, unstated here.'
      },
      {
        q: 'A residual path has leftover rooms `$4, 1, 6$`. How much can it push?',
        options: [`$11$`, `$6$`, `$1$`, `$4$`],
        answer: 2,
        explanation: 'Step 1: The push cannot exceed the tightest edge. Step 2: The minimum of 4, 1 and 6 is 1. Step 3: Pushing 1 saturates the middle edge. Step 4: Larger pushes would violate that edge residual.'
      },
      {
        q: 'A flow of value `$9$` coexists with a cut of capacity `$9$`. What follows?',
        options: ['The flow is maximum and the cut minimum', 'Both are suboptimal', 'The cut must be enlarged', 'The flow must be reduced'],
        answer: 0,
        explanation: 'Step 1: No flow can exceed any cut capacity. Step 2: Here the flow already attains the cut ceiling. Step 3: Attainment forces both extremes at once. Step 4: That equality is the max-flow min-cut certificate.'
      },
      {
        q: 'Bipartite job matching with `$6$` workers and `$6$` posts becomes a flow network. What does flow value `$5$` mean?',
        options: ['Five workers stay unmatched regardless', 'At most five pairs can match, and five do', 'Five edges are saturated illegally', 'The network needs five more vertices'],
        answer: 1,
        explanation: 'Step 1: Unit capacities make each flow unit one pair. Step 2: Flow value therefore counts matched pairs. Step 3: Maximum flow 5 means five pairs achieved. Step 4: One worker and one post stay unmatched in every optimum.'
      }
    ]
  },
  // ---------------------------------------------------------------- 14.4
  {
    sectionId: 'engmath-ch14-s4',
    readingTime: 8,
    intro: 'Assignment and scheduling problems match agents to tasks under cost or time constraints. Bipartite graphs model who can do what, the Hungarian method finds minimum-cost perfect matchings, and greedy rules settle interval scheduling. This section connects matching theory with the flow machinery of the previous section and contrasts greedy with optimal strategies.',
    objectives: [
      'Model task allocation as bipartite matching and test bipartiteness',
      'Reduce assignment rows and columns in the Hungarian style toward zero covers',
      'Apply greedy earliest-finish scheduling and know when greedy is optimal'
    ],
    concepts: [
      {
        term: 'Bipartite graphs split vertices in two',
        kind: 'definition',
        statement: 'A **bipartite** graph colors vertices red and blue so every edge joins opposite colors, equivalently it contains no odd cycle, in the `bipart` characterization. Applicants versus posts and workers versus machines are the canonical splits. Two-coloring by BFS both tests bipartiteness and produces the sides in linear time.',
        detail: 'Odd cycles need three or more colors somewhere, so their presence is the exact obstruction to a two-sided split.'
      },
      {
        term: 'Assignment as minimum perfect matching',
        kind: 'definition',
        statement: 'The **assignment problem** pairs each of `$n$` agents with a distinct task minimizing total cost, a minimum-weight perfect matching in the complete `assign` bipartite graph. Square cost matrices with one entry per agent-task pair are the standard input. Brute force over `$n!$` permutations collapses immediately, which is why polynomial methods matter.',
        detail: 'Maximization variants flip signs or subtract from a large constant, reusing the identical minimization machinery.'
      },
      {
        term: 'Hungarian row and column reductions',
        kind: 'method',
        statement: 'The **Hungarian method** subtracts each row minimum then each column minimum, creating zeros without changing the optimal assignment, and covers all zeros with the fewest lines in the `hung` tableau. Fewer lines than `$n$` trigger matrix adjustment by the smallest uncovered value; exactly `$n$` lines expose an optimal zero assignment. Each phase preserves optimality while manufacturing the zeros that reveal it.',
        detail: 'Row minima of `$9, 2, 7$` style rows become zero anchors, and the covering-line count is computed by a small matching subproblem.'
      },
      {
        term: 'Greedy earliest-finish interval scheduling',
        kind: 'method',
        statement: '**Earliest-finish greedy** sorts activities by end time and takes each compatible one, maximizing the count of non-overlapping intervals in the `sched` classic. Exchange arguments prove no optimal schedule beats greedy activity by activity, so the simple rule is exactly optimal for unweighted counts. Weighted profits break greediness and call for dynamic programming instead.',
        detail: 'Sorting by start time instead can trap greedy into one long activity blocking many short ones, the standard counterexample.'
      },
      {
        term: 'Konig balance and Hall feasibility',
        kind: 'theorem',
        statement: '**Konig theorem** equates maximum matching size with minimum vertex-cover size in bipartite graphs, while the **Hall condition** demands every applicant subset touch at least as many posts for a full matching in the `hall` duality. Together they certify both optimality and feasibility: covers bound matchings above and Hall sets explain shortfalls. A deficient applicant group names precisely why someone must stay unmatched.',
        detail: 'Three applicants sharing only two reachable posts violate Hall immediately, capping every matching at the two posts plus outside pairs.'
      }
    ],
    figures: [
      {
        caption: 'Assignment $3 \\times 3$: agents $L$ left and tasks $R$ right, optimal pairs $(1,2)$, $(2,1)$, $(3,3)$ bold at total cost $2 + 6 + 1 = 9$ against rejected gray options.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bipartite assignment with optimal matching"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Agents left, tasks right</text><circle cx="180" cy="110" r="22" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="180" y="117" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">1</text><circle cx="180" cy="200" r="22" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="180" y="207" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">2</text><circle cx="180" cy="290" r="22" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="180" y="297" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">3</text><circle cx="540" cy="110" r="22" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="540" y="117" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><circle cx="540" cy="200" r="22" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="540" y="207" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">B</text><circle cx="540" cy="290" r="22" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="540" y="297" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><line x1="202" y1="110" x2="518" y2="200" stroke="currentColor" stroke-width="3"/><line x1="202" y1="200" x2="518" y2="110" stroke="currentColor" stroke-width="3"/><line x1="202" y1="290" x2="518" y2="290" stroke="currentColor" stroke-width="3"/><line x1="202" y1="118" x2="518" y2="112" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/><line x1="202" y1="282" x2="518" y2="208" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/><text x="360" y="140" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">2 and 6</text><text x="360" y="305" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">1</text><text x="360" y="330" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">bold pairs cost 9, minimum possible</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Hungarian reduction on a three-by-three matrix',
        problem: 'Start the Hungarian method on costs `$(9, 2, 7)$`, `$(6, 4, 3)$`, `$(5, 8, 1)$` with row and column reductions.',
        steps: [
          { label: 'Step 1: Row minima out', text: 'Row minima are `$2, 3, 1$`, leaving rows `$(7, 0, 5)$`, `$(3, 1, 0)$`, `$(4, 7, 0)$`. Every row now owns a zero, and the optimum shifts by the constant `$2 + 3 + 1 = 6$`.' },
          { label: 'Step 2: Column minima out', text: 'Column minima `$3, 0, 0$` give `$(4, 0, 5)$`, `$(0, 1, 0)$`, `$(1, 7, 0)$`. Zeros sit at `$(1,2), (2,1), (2,3), (3,3)$`, and three covering lines exist, so an optimal zero assignment is already exposed.' },
          { label: 'Step 3: Read the assignment', text: 'Zeros admit `$1 \\to 2$`, `$2 \\to 1$`, `$3 \\to 3$` with original costs `$2 + 6 + 1 = 9$`. No adjustment phase is needed since the line count already equals `$n = 3$`.' }
        ],
        result: 'Optimal assignment `$1 \\to 2$`, `$2 \\to 1$`, `$3 \\to 3$` at total cost `$9$`.'
      },
      {
        title: 'Earliest-finish scheduling picks three talks',
        problem: 'Schedule maximum talks from `$(1, 4), (3, 5), (0, 6), (5, 7), (8, 9)$` given as start-finish pairs, and verify with code.',
        steps: [
          { label: 'Step 1: Sort by finish', text: 'Finish order is `$(1, 4), (3, 5), (0, 6), (5, 7), (8, 9)$`. Greedy takes `$(1, 4)$` first as the earliest finisher, discarding overlapping `$(3, 5)$` and `$(0, 6)$`.' },
          { label: 'Step 2: Continue greedily in code', text: '```python\nacts = [(1,4),(3,5),(0,6),(5,7),(8,9)]\nacts.sort(key=lambda a: a[1])\npicked, last_end = [], -1\nfor s, f in acts:\n    if s >= last_end:\n        picked.append((s, f)); last_end = f\nprint(picked)  # [(1, 4), (5, 7), (8, 9)]\n```\nThe script prints three talks `$(1, 4), (5, 7), (8, 9)$`, each starting after the last ends.' },
          { label: 'Step 3: Argue optimality', text: 'Any optimal schedule can swap its first talk for `$(1, 4)$` without losing count, and induction extends the argument down the sorted list. Three is therefore the maximum, not merely a good score.' }
        ],
        result: 'Greedy picks three talks `$(1, 4), (5, 7), (8, 9)$`, provably maximum.'
      }
    ],
    keyTakeaways: [
      'Bipartite graphs split vertices so every edge crosses sides, testable by two-coloring BFS.',
      'Assignment seeks the minimum perfect matching, with factorial brute force replaced by Hungarian phases.',
      'Hungarian reductions preserve optima while zero covers reveal the optimal pairing.',
      'Earliest-finish greedy is optimal for unweighted intervals but not for weighted profits.'
    ],
    quiz: [
      {
        q: 'A triangle graph with three mutually joined vertices is tested for bipartiteness. What results?',
        options: ['Bipartite with sides 1 and 2 vertices', 'Not bipartite because of the odd cycle', 'Bipartite after deleting any edge weight', 'Bipartite only with directed edges'],
        answer: 1,
        explanation: 'Step 1: Attempt two-coloring from any vertex. Step 2: The third vertex neighbors both colors. Step 3: That forced conflict is the odd-cycle obstruction. Step 4: Hence no two-sided split exists.'
      },
      {
        q: 'After Hungarian reductions, zeros can be covered with `$2$` lines on a `$4 \\times 4$` matrix. What follows?',
        options: ['The optimal assignment is already exposed', 'The problem is infeasible', 'Adjust the matrix by the smallest uncovered value and repeat', 'Greedy scheduling must take over'],
        answer: 2,
        explanation: 'Step 1: Compare the line count 2 against n equal to 4. Step 2: Fewer lines than n means no full zero assignment yet. Step 3: Adjustment manufactures fresh zeros while preserving optima. Step 4: Exposure at n lines ends the method.'
      },
      {
        q: 'Earliest-finish greedy on four compatible-separated intervals picks how relative to optimum?',
        options: ['Exactly optimum count', 'One fewer than optimum always', 'Twice the optimum', 'Nothing guaranteed'],
        answer: 0,
        explanation: 'Step 1: Recall the exchange argument for unweighted intervals. Step 2: Greedy first pick fits inside some optimum. Step 3: Induction extends equality through the sorted list. Step 4: Hence greedy count equals the true maximum.'
      },
      {
        q: 'Four applicants reach only three posts collectively. What does Hall condition say?',
        options: ['A full four-matching exists anyway', 'Adding costs fixes the shortfall', 'Directed edges would fix it', 'No matching covers all four applicants'],
        answer: 3,
        explanation: 'Step 1: Hall demands every applicant set touch enough posts. Step 2: Here four applicants touch three posts. Step 3: The inequality fails for that subset. Step 4: Therefore full matching is impossible regardless of algorithm.'
      }
    ]
  }
]
