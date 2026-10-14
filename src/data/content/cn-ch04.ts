import type { SectionContent } from '../library'

// ============================================================================
// Computer Networks — Chapter 4: Network Layer Routing Algorithms
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const cnCh04Content: SectionContent[] = [
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: 'cn-ch4-s1',
    readingTime: 8,
    intro: 'Shortest-path routing turns the network into a weighted graph and runs a greedy search that locks in the nearest unsettled node first. Flooding takes the opposite approach and copies every packet everywhere with hop limits to cap the storm. This section practices Dijkstra by hand and shows when blind flooding still makes sense.',
    objectives: [
      'Run Dijkstra to completion with settled and tentative sets',
      'Trace controlled flooding with hop counts and duplicate suppression',
      'Compare optimality and overhead of both approaches'
    ],
    concepts: [
      {
        term: 'Graph cost model',
        kind: 'definition',
        statement: 'Nodes are routers `R` and edges carry **nonnegative cost** `COST` such as delay or hops. Path cost is the **sum** `SUM` along edges with $$\\text{cost}(P) = \\sum COST.$$',
        detail: 'Negative costs are excluded so greedy choice stays safe. Equal-cost paths allow load sharing with tie rules.'
      },
      {
        term: 'Dijkstra greedy settlement',
        kind: 'method',
        statement: 'Repeatedly settle the **smallest tentative** node `MIN` then relax its edges with **relaxation** `RELAX`. Settled distance satisfies $$D(v) = \\min_{u} (D(u) + COST(u,v)).$$',
        detail: 'With source distances 0, 4, 2, the node at 2 settles before 4. Each relaxation may lower a neighbor from infinity to a finite value.'
      },
      {
        term: 'Predecessor and next-hop tables',
        kind: 'notation',
        statement: 'Each settlement records a **predecessor** `PREV` that built the best path. Forwarding uses **next hop** `NEXT` derived by walking `PREV` back to source.',
        detail: 'Chain A to C through B gives PREV of C as B. Source A forwards toward C via NEXT equal to B.'
      },
      {
        term: 'Controlled flooding rules',
        kind: 'method',
        statement: 'Each packet carries a **hop limit** `TTL` decremented per router plus a **seen identifier** `SEQ` cache. Copies arriving already **seen** are `dropped`.',
        detail: 'Limit 3 reaches three hops then dies. Sequence cache of source plus number suppresses second arrivals on the same link.'
      },
      {
        term: 'When flooding wins',
        kind: 'insight',
        statement: 'Flooding suits **tiny or volatile** nets `SMALL` where tables cost more than copies. It also implements **broadcast** `BCAST` and route discovery probes.',
        detail: 'Link-state updates flood reliably to synchronize maps. Data traffic uses unicast paths once discovery completes.'
      }
    ],
    examples: [
      {
        title: 'Dijkstra on four nodes',
        problem: 'Source A links: A-B 4, A-C 2, B-C 1, B-D 5, C-D 8. Find shortest distances and paths to all nodes.',
        steps: [
          { label: 'Step 1', text: 'Init distances A 0 others infinity. Settle `A` then relax to B 4 and C 2.\n```text\nsettled {A:0} tentative B=4 C=2 D=inf -> pick C\n```' },
          { label: 'Step 2', text: 'Settle `C` at 2, relax B to min of 4 and 3 giving 3, D to min of infinity and 10 giving 10. Pick `B` at 3.' },
          { label: 'Step 3', text: 'Settle `B` at 3, relax D to min of 10 and 8 giving 8. Settle `D` at 8 via B. Paths are A-C, A-C-B, A-C-B-D.' }
        ],
        result: 'Distances A 0, C 2, B 3, D 8 with predecessor chain through C and B.'
      },
      {
        title: 'Flood with hop limit three',
        problem: 'Line A-B-C-D, source A floods with limit 3. Show arrivals and where copies die.',
        steps: [
          { label: 'Step 1', text: 'A sends to `B` with limit 3. B decrements to 2 and forwards to `C`.' },
          { label: 'Step 2', text: 'C decrements to 1 and forwards to `D`. D decrements to 0 and stops, covering 3 hops.' },
          { label: 'Step 3', text: 'Duplicate arriving back on seen `SEQ` is dropped. Limit prevents endless circulation on richer meshes.' }
        ],
        result: 'Packet reaches D in three hops and expires exactly there.'
      }
    ],
    keyTakeaways: [
      'Dijkstra settles smallest tentative nodes and relaxes neighbors greedily.',
      'Predecessors chain into next-hop forwarding entries.',
      'Flooding needs hop limits plus seen caches to terminate.',
      'Flooding serves discovery and broadcast while unicast uses computed paths.'
    ],
    quiz: [
      // PYQ-pattern: Dijkstra settlement order and distance update
      {
        q: 'After settling A with edges A-B 4 and A-C 2, next settled is:',
        options: ['B at 4', 'D at infinity', 'C at 2', 'A again'],
        answer: 2,
        explanation: 'Step 1: Tentative values are B 4 and C 2. Step 2: Minimum is 2 at C. Step 3: Settle C before B. Step 4: Infinity never settles first.'
      },
      {
        q: 'Relaxation through C with edge C-B 1 updates B to:',
        options: ['3 via C', '4 unchanged', '2 via C', '5 via D'],
        answer: 0,
        explanation: 'Step 1: Old B is 4 direct. Step 2: New candidate is 2 plus 1 which is 3. Step 3: Minimum of 4 and 3 is 3. Step 4: Predecessor becomes C.'
      },
      {
        q: 'Flooding hop limit 3 on line A-B-C-D-E reaches:',
        options: ['B only', 'up to E', 'all forever', 'up to D'],
        answer: 3,
        explanation: 'Step 1: Start 3 at A. Step 2: B holds 2, C holds 1, D holds 0. Step 3: D stops forwarding. Step 4: E at fourth hop is never reached.'
      },
      {
        q: 'Seen cache in flooding prevents:',
        options: ['first delivery', 'duplicate rebroadcast storms', 'address assignment', 'checksum errors'],
        answer: 1,
        explanation: 'Step 1: Mesh returns copies via cycles. Step 2: Identifier source plus sequence marks seen. Step 3: Second arrival drops. Step 4: First delivery still proceeds.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.2
  {
    sectionId: 'cn-ch4-s2',
    depth: [
      {
        tier: 'masters',
        title: 'Distance-vector convergence and count-to-infinity',
        blocks: [
          {
            kind: 'para',
            body: 'Distance-vector routing distributes the **Bellman-Ford** iteration: each router $i$ keeps estimates $D_i(y)$ for every destination $y$ and updates by $$D_i(y) = \\min_{v} \\{c(i,v) + D_v(y)\\}$$ over neighbors $v$ with link cost $c(i,v)$. Good news travels fast because a lowered cost propagates one hop per exchange, but bad news travels slowly because routers quote each other’s stale routes back. The graduate phenomenon is **count-to-infinity**: after a link cost increase or failure, two routers incrementally raise their estimates by looping rumors through each other, converging only after many rounds or never under failures.'
          },
          {
            kind: 'theorem',
            body: 'With static costs, distributed Bellman-Ford converges to true shortest paths in at most $N-1$ exchanges for $N$ routers, regardless of initialization, provided updates are eventually delivered. After a single link-cost increase of size $\\Delta$, however, the two routers adjacent to the change may require $\\Theta(\\Delta)$ rounds to converge when split horizon is absent, and under link failure with a loop the count proceeds unboundedly. **Split horizon with poison reverse** prevents two-node loops but does not eliminate all multi-node counting scenarios.'
          },
          {
            kind: 'proof',
            body: 'Convergence under static costs follows the centralized argument applied asynchronously: after $k$ exchanges each router knows paths of at most $k$ hops, so $N-1$ rounds suffice for simple paths. For the bad-news lower bound, consider routers $A$ and $B$ reaching destination $d$ via each other with initial distance $2$. When the true path of length $1$ fails, $A$ hears $B$ advertising $2$ and updates to $3$, then $B$ hears $3$ and updates to $4$, alternating upward by $1$ per round — the classic two-node loop. Poison reverse breaks this pair by having $B$ advertise infinity back to the neighbor it routes through, but a three-node cycle $A \\to B \\to C \\to A$ can still rotate stale information because no single advertisement reveals the full loop. Hence local fixes bound small loops while only link-state flooding or path vectors remove the problem structurally.'
          },
          {
            kind: 'application',
            body: 'Production distance-vector protocols combine three mitigations suggested directly by the proof: **triggered updates** that advertise increases immediately rather than on timers, **hold-downs** that freeze routes during suspected loops, and **split horizon with poison reverse** as the default two-node guard. Link-state designs choose a different trade by flooding $c(i,v)$ values so every router computes on the same map, while path-vector designs advertise full paths to expose loops explicitly. The graduate decision rule is quantitative: when $\\Delta$ is small and topology is a tree, distance vectors converge quickly and cheaply; when loops and large cost shifts dominate, the flooding or path cost pays for itself in stability.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Distance-vector routers know only what neighbors tell them and add their link cost to each rumor. That simplicity converges fine on good news yet loops slowly on bad news as routers count upward together. This section replays the count-to-infinity trap and the split-horizon fixes that contain it.',
    objectives: [
      'Apply Bellman-Ford update to neighbor vectors',
      'Replay count-to-infinity after a link cost rise or loss',
      'Apply split horizon and poison reverse to break loops'
    ],
    concepts: [
      {
        term: 'Bellman-Ford local update',
        kind: 'theorem',
        statement: 'Each router sets distance by **best neighbor plus link** using `DV`, namely $$D_{x}(y) = \\min_{v} (c(x,v) + D_{v}(y)).$$ Next hop is the **argmin** `NEXT` achieving the minimum.',
        detail: 'Router X with neighbor costs 2 and 7 and neighbor distances 3 and 1 computes candidates 5 and 8, picking 5. Vectors exchange periodically and on change.'
      },
      {
        term: 'Good news travels fast',
        kind: 'insight',
        statement: 'A **cost drop** `DOWN` propagates one hop per exchange with immediate adoption. Neighbors switch to the **better** offer in `one` round.',
        detail: 'Link improving from 10 to 1 spreads in as many rounds as hops. No loop forms because the new path is genuinely shorter.'
      },
      {
        term: 'Count-to-infinity trap',
        kind: 'theorem',
        statement: 'After a **rise or loss** `UP`, two routers can point at each other and **increment together** by `loop`. Each round adds the inter-router cost as $$D_{new} = D_{old} + c_{loop}.$$',
        detail: 'X through Y and Y through X each add 2 per cycle, climbing 4, 6, 8 toward 16. Convergence takes many rounds or hits an infinity cap.'
      },
      {
        term: 'Split horizon rule',
        kind: 'method',
        statement: 'Never advertise a route **back to its next hop** via `HORZ`. If X uses Y for destination D, X tells Y its distance is **unreachable** or silent.',
        detail: 'Two-node loops break because the false back-route never returns. Larger loops with three or more nodes can still circle.'
      },
      {
        term: 'Poison reverse and caps',
        kind: 'method',
        statement: 'Actively report the withheld route as **infinity** `INF` to force alternate choices. Define infinity small such as **16** `CAP` to bound `counting`.',
        detail: 'Infinity 16 converts slow climb into quick cutoff after a few exchanges. Triggered updates send changes immediately rather than waiting for timers.'
      }
    ],
    examples: [
      {
        title: 'Two-node count to sixteen',
        problem: 'X-Y cost 2, Y to destination cost 1, X via Y distance 3. Y to destination link rises to 60. Show first three counts with cap 16? Use small rise to 7 for illustration then note cap.',
        steps: [
          { label: 'Step 1', text: 'Before change vectors are X 3 via Y and Y 1 direct. Link Y destination becomes costly, Y adopts X route at $3 + 2 = 5$.\n```text\nY:1->5 via X; X:3->7 via Y; Y:5->9 via X\n```' },
          { label: 'Step 2', text: 'X hears Y 5 and rises to $5 + 2 = 7$ via `DV`. Y hears X 7 and rises to $7 + 2 = 9$.' },
          { label: 'Step 3', text: 'Pattern adds $2$ each full cycle toward `CAP` 16. Split horizon would have hidden the back routes and stopped the loop.' }
        ],
        result: 'Distances climb 3, 5, 7, 9 upward together until the infinity cap ends the loop.'
      },
      {
        title: 'Poison reverse breaks the pair',
        problem: 'Same topology with poison reverse active. Show advertisements after the cost rise.',
        steps: [
          { label: 'Step 1', text: 'X via Y poisons back to Y as `INF` 16. Y via direct does not poison to X before failure.' },
          { label: 'Step 2', text: 'After rise Y cannot adopt X poisoned route at $16 + 2$. Y keeps true high cost instead of looping.' },
          { label: 'Step 3', text: 'X then hears true cost and recomputes without mutual increment. Loop of two is fully suppressed.' }
        ],
        result: 'Poisoned back announcements stop two-node counting immediately.'
      }
    ],
    keyTakeaways: [
      'Update adds neighbor distance to link cost and keeps the minimum.',
      'Drops propagate fast while rises can loop and climb slowly.',
      'Split horizon withholds routes from the next hop.',
      'Poison reverse advertises infinity back plus caps and triggered updates speed fix.'
    ],
    quiz: [
      {
        q: 'X with neighbor costs 2 and 7 and neighbor distances 3 and 1 computes:',
        options: ['min 8 via second', 'sum 13', 'max 8', 'min 5 via first'],
        answer: 3,
        explanation: 'Step 1: Candidate one is 2 plus 3 which is 5. Step 2: Candidate two is 7 plus 1 which is 8. Step 3: Minimum is 5. Step 4: Next hop is the first neighbor.'
      },
      // PYQ-pattern: count-to-infinity iteration after cost increase
      {
        q: 'After a cost rise with X via Y and Y via X, distances:',
        options: ['drop instantly', 'climb together by loop cost each cycle', 'freeze forever', 'alternate randomly'],
        answer: 1,
        explanation: 'Step 1: Y adopts X old value plus 2. Step 2: X adopts Y new value plus 2. Step 3: Each cycle adds 2 per router pair. Step 4: Climb continues to cap 16.'
      },
      {
        q: 'Split horizon states:',
        options: ['never advertise a destination back to its next hop', 'always poison all routes', 'flood link states', 'advertise all routes everywhere'],
        answer: 0,
        explanation: 'Step 1: X routes via Y. Step 2: X withholds that destination from Y. Step 3: False back path never forms. Step 4: Two-node loops break.'
      },
      {
        q: 'Infinity cap 16 helps by:',
        options: ['raising capacity', 'encrypting vectors', 'bounding the climb to quick cutoff', 'shortening headers'],
        answer: 2,
        explanation: 'Step 1: Counting would run to 60 otherwise. Step 2: Cap declares 16 unreachable. Step 3: Routers stop after few steps near 16. Step 4: Triggered updates then install true paths.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.3
  {
    sectionId: 'cn-ch4-s3',
    readingTime: 8,
    intro: 'Link-state routers flood the cost of each local link until every member holds the same map of the domain. Each router then runs Dijkstra locally to derive identical shortest paths from different roots. Hierarchy through areas keeps flooding and computation bounded as the domain grows.',
    objectives: [
      'Trace link-state flooding and database synchronization',
      'Run per-router Dijkstra from the shared map',
      'Explain area hierarchy and border summarization'
    ],
    concepts: [
      {
        term: 'Link-state packet contents',
        kind: 'definition',
        statement: 'Each announcement carries **origin** `ORIG`, **neighbor costs** `COST` and **sequence** `SEQ` for freshness. Age `AGE` discards **stale** copies.',
        detail: 'Router A advertises links to B cost 2 and C cost 5 with sequence 41. Newer sequence replaces older across the domain.'
      },
      {
        term: 'Reliable flooding of LSPs',
        kind: 'method',
        statement: 'Arriving packets are **forwarded everywhere** `FLOOD` except arrival and **acked** `ACK` by neighbors. Duplicates by `SEQ` are `dropped`.',
        detail: 'One transmission per link suffices with retransmission on loss. All routers converge to one shared database.'
      },
      {
        term: 'Local Dijkstra on shared map',
        kind: 'theorem',
        statement: 'With one map every router computes the **same tree** `TREE` rooted locally via $$D(v) = \\min_{u} (D(u) + COST(u,v)).$$ No **loops** persist because `roots` agree on costs.',
        detail: 'Router A and B run the same algorithm from different starts. Forwarding tables match along shortest paths in both directions.'
      },
      {
        term: 'Area hierarchy and borders',
        kind: 'method',
        statement: 'Domains split into **areas** `AREA` with a **backbone** `BB` interconnecting them. Border routers advertise **summaries** `SUMM` instead of full `detail`.',
        detail: 'Area 1 floods internally and hides its mesh behind one cost to the backbone. Databases shrink from thousands to hundreds of entries.'
      },
      {
        term: 'Failure handling speed',
        kind: 'insight',
        statement: 'A failed link triggers a fresh **LSP** `NEW` flooded at once, so reconvergence needs one **flood plus compute** cycle `FAST`. No **counting** loop forms.',
        detail: 'Detection plus flood plus Dijkstra completes in seconds. Alternative paths appear directly from the updated map.'
      }
    ],
    examples: [
      {
        title: 'Flood then compute on three routers',
        problem: 'Triangle A-B 2, B-C 3, A-C 10. A floods its links. Show database and A routing table.',
        steps: [
          { label: 'Step 1', text: 'A packet lists `ORIG` A with neighbors B 2 and C 10 plus `SEQ`.\n```text\nLSP A: B2 C10 seq41 -> flood to B,C -> DB sync\n```' },
          { label: 'Step 2', text: 'All hold full triangle after exchange with `COST` values 2, 3, 10. B and C packets complete the map.' },
          { label: 'Step 3', text: 'A runs Dijkstra: direct C 10 versus via B $2 + 3 = 5$, so choose via `NEXT` B. Table is B direct, C via B.' }
        ],
        result: 'Shared map yields A to C via B at cost 5, not direct at 10.'
      },
      {
        title: 'Summarize an area at its border',
        problem: 'Area 1 has 40 routers behind border R. Show what R advertises to backbone instead of 40 packets.',
        steps: [
          { label: 'Step 1', text: 'R computes internal shortest costs to each subnet in `AREA` 1. Backbone needs only reachability plus cost.' },
          { label: 'Step 2', text: 'R advertises one `SUMM` per prefix with aggregated cost. Forty internal links collapse to a few summaries.' },
          { label: 'Step 3', text: 'Backbone routes to R then R expands the final hop internally. Flooding stays inside the area.' }
        ],
        result: 'Hierarchy trades optimal detail for bounded flood and compute scope.'
      }
    ],
    keyTakeaways: [
      'Announcements carry origin, neighbor costs, sequence and age.',
      'Reliable flooding synchronizes one shared database everywhere.',
      'Each router runs Dijkstra locally from its own root.',
      'Areas summarize at borders to bound flood and compute load.'
    ],
    quiz: [
      {
        q: 'Link-state database convergence means:',
        options: ['all routers hold the same map', 'no flooding occurs', 'each router holds different costs', 'vectors are exchanged'],
        answer: 0,
        explanation: 'Step 1: Each LSP floods reliably. Step 2: Sequence resolves duplicates. Step 3: Every member collects all announcements. Step 4: Maps match before compute.'
      },
      // PYQ-pattern: Dijkstra on flooded map versus vector counting
      {
        q: 'Triangle A-B 2, B-C 3, A-C 10 gives A to C cost:',
        options: ['2 via B', '10 direct', '5 via B', '15 via B'],
        answer: 2,
        explanation: 'Step 1: Direct is 10. Step 2: Via B is 2 plus 3 which is 5. Step 3: Minimum of 10 and 5 is 5. Step 4: Next hop is B.'
      },
      {
        q: 'Areas primarily limit:',
        options: ['address length', 'flood scope and compute size', 'port range', 'frame size'],
        answer: 1,
        explanation: 'Step 1: Full flood grows with router count. Step 2: Areas confine detailed flood inside. Step 3: Borders send summaries only. Step 4: Dijkstra runs on smaller maps.'
      },
      {
        q: 'After a link failure, link-state recovers by:',
        options: ['counting to infinity', 'dropping all tables', 'manual reboot', 'one fresh flood plus local recompute'],
        answer: 3,
        explanation: 'Step 1: Origin issues new LSP with higher sequence. Step 2: Flood updates every database. Step 3: Each router reruns Dijkstra. Step 4: No mutual increment loop forms.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.4
  {
    sectionId: 'cn-ch4-s4',
    readingTime: 7,
    intro: 'Interior protocols optimize paths inside one administration while exterior protocols enforce policy between administrations. Distance-vector heritage, link-state design and path-vector rules each fit one of those jobs. This section places three well-known protocols on that map without memorizing port trivia.',
    objectives: [
      'Separate interior optimization from exterior policy duties',
      'Place three protocols by algorithm family and scope',
      'Predict path choice when policy overrides shortest cost'
    ],
    concepts: [
      {
        term: 'Interior versus exterior scope',
        kind: 'definition',
        statement: 'Inside one domain **optimization** `INT` seeks lowest cost while between domains **policy** `EXT` controls who transits for whom. Borders enforce `policy` over pure `shortest`.',
        detail: 'One company minimizes delay internally yet refuses to carry rival traffic externally. Different protocols serve the two goals.'
      },
      {
        term: 'Distance-vector interior heritage',
        kind: 'definition',
        statement: 'A classic interior protocol uses **vectors** `DV` with hop caps and timers for small nets. Simplicity matters more than **scale** `SCALE`.',
        detail: 'Hop cap 15 bounds diameter and periodic exchange suits stable small topologies. Larger nets outgrow its chatter and slow fix.'
      },
      {
        term: 'Link-state interior design',
        kind: 'definition',
        statement: 'A modern interior protocol floods **states** `LS` and runs Dijkstra with **areas** `AREA`. Fast flood plus `hierarchy` supports **large** domains.',
        detail: 'Hello messages track neighbors while areas bound databases. Convergence takes seconds with full maps at each router.'
      },
      {
        term: 'Path-vector exterior rules',
        kind: 'definition',
        statement: 'Exterior announcements carry the full **AS path** `ASPATH` plus **attributes** `ATTR` for preference. Loop check drops any path containing **own number** `SELF`.',
        detail: 'Path 100, 200, 300 reaching 100 again is discarded. Local preference and length together steer choice under policy.'
      },
      {
        term: 'Policy over shortest illustration',
        kind: 'insight',
        statement: 'A **shorter AS path** `SHORT` can lose to a **preferred neighbor** `PREF` when contracts forbid transit. Choice follows $$\\text{choice} = f(\\text{policy}, \\text{path}, \\text{cost})$$ with `policy` first.',
        detail: 'Two-hop path through a competitor loses to three-hop path through a customer. Money and control outweigh raw hop count between domains.'
      }
    ],
    examples: [
      {
        title: 'Sort three protocols by job',
        problem: 'Protocols P1 vector with hop cap 15, P2 link-state with areas, P3 path-vector with AS paths. Assign interior small, interior large, exterior.',
        steps: [
          { label: 'Step 1', text: 'Cap $15$ plus `DV` timers mark P1 as small interior heritage.\n```text\nP1 DV cap15 -> small interior; P2 LS areas -> large interior\nP3 ASPATH -> exterior policy\n```' },
          { label: 'Step 2', text: 'Flood plus `AREA` hierarchy marks P2 as large interior design. Fast recompute fits hundreds of routers.' },
          { label: 'Step 3', text: 'Full `ASPATH` plus policy attributes mark P3 as exterior. Loop avoidance uses path inspection, not hop math.' }
        ],
        result: 'P1 small interior, P2 large interior, P3 exterior policy.'
      },
      {
        title: 'Policy beats shorter path',
        problem: 'Border sees path via customer length 3 and via competitor length 2. Contracts forbid helping the competitor gain transit. Choose.',
        steps: [
          { label: 'Step 1', text: 'Shortest by hops is length $2$ through `SHORT` competitor. Policy prefers customer `PREF` even at length $3$.' },
          { label: 'Step 2', text: 'Local preference ranks customer above competitor regardless of `ASPATH` length. Choice function puts policy first.' },
          { label: 'Step 3', text: 'Forward via customer path and announce accordingly. Extra hop cost is accepted for contract compliance.' }
        ],
        result: 'Three-hop customer path wins over two-hop competitor path under policy.'
      }
    ],
    keyTakeaways: [
      'Interior seeks lowest cost while exterior enforces transit policy.',
      'Vector with hop caps suits small interiors only.',
      'Link-state with areas scales interiors through hierarchy.',
      'Path-vector carries AS paths and lets policy override length.'
    ],
    quiz: [
      {
        q: 'Hop cap 15 with vectors best fits:',
        options: ['large interior', 'small interior', 'data link framing', 'exterior policy'],
        answer: 1,
        explanation: 'Step 1: Cap bounds diameter at 15. Step 2: Periodic vectors suit small nets. Step 3: Large nets need hierarchy. Step 4: Exterior needs AS paths.'
      },
      {
        q: 'Areas with Dijkstra flooding best fits:',
        options: ['transport ports', 'small vector interior', 'exterior with AS path', 'large link-state interior'],
        answer: 3,
        explanation: 'Step 1: Flooding shares full maps. Step 2: Areas bound scope. Step 3: Local Dijkstra gives fast fix. Step 4: Exterior adds policy attributes instead.'
      },
      // PYQ-pattern: exterior path-vector policy versus shortest path
      {
        q: 'Exterior loop avoidance primarily uses:',
        options: ['hop cap 15', 'checksum', 'AS path containing own number', 'slot time'],
        answer: 2,
        explanation: 'Step 1: Announcements list AS numbers. Step 2: Receiver scans for its own value. Step 3: Match means loop so drop. Step 4: Hop caps belong to vector interiors.'
      },
      {
        q: 'Customer path length 3 beats competitor length 2 because:',
        options: ['policy ranks customer transit above raw length', '3 is shorter', 'checksums differ', 'ports differ'],
        answer: 0,
        explanation: 'Step 1: Length favors competitor 2 versus 3. Step 2: Contract forbids aiding competitor transit. Step 3: Preference overrides length. Step 4: Choice follows policy first.'
      }
    ]
  }
]
