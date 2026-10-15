import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition (Cormen, Leiserson, Rivest,
// & Stein). Chapter 21: Data Structures for Disjoint Sets (21.1 – 21.4).
// Master study content.
// ============================================================================

export const clrsCh21Content: SectionContent[] = [
  // ---------------------------------------------------------------- 21.1
  {
    sectionId: "clrs-ch21-s1",
    readingTime: 6,
    intro: "Before Kruskal's algorithm can weld a graph's fragments into a spanning tree, it needs a structure that answers one question instantly: are these two vertices already in the same piece? This chapter builds that structure — the disjoint-set (union–find) structure — and drives the cost per operation from linear down to an amortized bound that grows more slowly than any iterate of the logarithm.",
    objectives: [
      "Define the MAKE-SET, UNION and FIND-SET operations and the role of the representative",
      "Run CONNECTED-COMPONENTS on an undirected graph and answer SAME-COMPONENT queries",
      "Count the disjoint-set operations a graph induces and see why amortized analysis is the right lens"
    ],
    concepts: [
      {
        term: "Disjoint-set structure",
        kind: "definition",
        statement: "A **disjoint-set structure** maintains a collection $S_1, S_2, \\ldots, S_k$ of **pairwise disjoint dynamic sets**: every element of the universe $\\{x_1, \\ldots, x_n\\}$ lies in **exactly one** set. Each set is identified by some member called its **representative**, usually denoted $rep(S_i)$.",
        detail: "The sets are *dynamic*: UNION destroys two of them and creates their union, so both the number of sets and their contents change over time. The representative is not prescribed — any member may serve, and the correctness of the operations must never depend on which one is chosen."
      },
      {
        term: "The three operations",
        kind: "method",
        statement: "**`MAKE-SET(x)`** creates a new set containing only $x$ and makes $x$ its representative. **`UNION(x, y)`** creates a new set $S_x \\cup S_y$ from the sets containing $x$ and $y$, **destroying the two old sets**. **`FIND-SET(x)`** returns a pointer to the (unique) representative of the set containing $x$.",
        detail: "Each operation must leave the invariant intact: after any sequence, the sets partition the elements. Note the asymmetry — MAKE-SET and FIND-SET preserve the partition, while UNION reshapes it by merging exactly two classes."
      },
      {
        term: "Connected components by union–find",
        kind: "method",
        statement: "**`CONNECTED-COMPONENTS`**: call `MAKE-SET(v)` for every vertex $v$; then for each edge $(u, v)$ in the graph, if `FIND-SET(u)` $\\neq$ `FIND-SET(v)`, call `UNION(u, v)`. Afterwards two vertices are in the same component **iff** `FIND-SET(u)` $=$ `FIND-SET(v)` — this test is `SAME-COMPONENT`.",
        detail: "Why it works: an edge can only merge two components, never split one, so the invariant “each set is exactly one connected component of the edges seen so far” survives every step. Process all edges and the sets are the connected components of the whole graph."
      },
      {
        term: "The operation count",
        kind: "insight",
        statement: "On a graph with $|V|$ vertices and $|E|$ edges, CONNECTED-COMPONENTS performs $|V|$ `MAKE-SET` calls, at most $2|E|$ `FIND-SET` calls and at most $|E|$ `UNION` calls — $O(E)$ operations on the structure in addition to the $O(V)$ setup.",
        detail: "With the Section 21.3 forests this gives a total of $O\\big((E + V)\\,\\alpha(V)\\big)$, and $O(E\\,\\alpha(V))$ whenever the graph is connected. The $|V| - 1$ successful unions (each shrinks the component count) are the only ones that do pointer work — unsuccessful UNIONs still cost two FIND-SET calls."
      },
      {
        term: "The $n$ MAKE-SET ledger",
        kind: "notation",
        statement: "CONNECTED-COMPONENTS calls MAKE-SET $n$ times (once per vertex) and UNION at most $|E|$ times (once per edge that joins components), plus $2$ FIND-SETs per edge scanned. The total disjoint-set bill is therefore $O(n + |E| \\cdot t_{find})$, where $t_{find}$ is what Sections 21.2-21.4 drive down.",
        detail: "Counting operations first tells the analysis what to optimize: FIND-SET dominates because edges outnumber vertices in interesting graphs, so path compression targets exactly the right primitive.",
      },
    ],
    examples: [
      {
        title: "Growing components edge by edge",
        problem: "Run CONNECTED-COMPONENTS on the graph with vertices $\\{a, b, c, d, e, f\\}$ and edges processed in the order $(b,e), (a,c), (d,f), (b,f), (d,a)$, then answer `SAME-COMPONENT(c, e)`.",
        steps: [
          { label: "Step 1: Initialize", text: "`MAKE-SET` for each of $a, b, c, d, e, f$: six singleton sets $\\{a\\}, \\{b\\}, \\ldots, \\{f\\}$, each element its own representative." },
          { label: "Step 2: Edge (b, e)", text: "FIND-SET($b$) $\\neq$ FIND-SET($e$), so UNION merges $\\{b\\}$ and $\\{e\\}$ into $\\{b, e\\}$." },
          { label: "Step 3: Edges (a, c) and (d, f)", text: "Same test, both differ, so we get $\\{a, c\\}$ and $\\{d, f\\}$. Three sets now cover all six elements: $\\{b,e\\}$, $\\{a,c\\}$ and $\\{d,f\\}$." },
          { label: "Step 4: Edge (b, f)", text: "FIND-SET($b$) and FIND-SET($f$) return different representatives, so UNION produces $\\{b, d, e, f\\}$." },
          { label: "Step 5: Edge (d, a)", text: "FIND-SET($d$) $\\neq$ FIND-SET($a$) — merge $\\{b,d,e,f\\}$ with $\\{a,c\\}$ to get $\\{a,b,c,d,e,f\\}$: one component, one representative." },
          { label: "Step 6: Query", text: "`SAME-COMPONENT(c, e)`: FIND-SET($c$) $=$ FIND-SET($e$) — both return the single remaining representative, so yes, $c$ and $e$ are connected." }
        ],
        result: "Totals: 6 MAKE-SETs, 10 FIND-SETs, 5 UNIONs (all successful — the graph is connected). The five successful unions equal $|V| - 1$; no further UNION could merge anything."
      },
      {
        title: "Components of a four-vertex path",
        problem: "Graph $1-2-3-4$ (edges $(1,2),(2,3),(3,4)$). Run CONNECTED-COMPONENTS and answer SAME-COMPONENT($1,4$).",
        steps: [
          { label: "Init", text: "MAKE-SET $\\times 4$: $\\{1\\},\\{2\\},\\{3\\},\\{4\\}$." },
          { label: "Edge (1,2)", text: "FIND $1 \\ne 2$: UNION: $\\{1,2\\},\\{3\\},\\{4\\}$." },
          { label: "Edges (2,3),(3,4)", text: "Each joins: $\\{1,2,3\\}$ then $\\{1,2,3,4\\}$: $3$ UNIONs total." },
          { label: "Query", text: "FIND($1$) $=$ FIND($4$) $=$ rep of $\\{1,2,3,4\\}$: SAME-COMPONENT true in $2$ FINDs." },
        ],
        result: "One component after $4$ MAKE-SETs and $3$ UNIONs; $1$ and $4$ connected: reachability reduced to representative equality.",
      },
    ],
    keyTakeaways: [
      "A disjoint-set structure maintains pairwise-disjoint dynamic sets, each identified by an arbitrary chosen representative; the interface is MAKE-SET, UNION, FIND-SET.",
      "UNION destroys its two argument sets and installs their union — the collection reshapes constantly, which is why costs are measured amortized over operation sequences.",
      "CONNECTED-COMPONENTS spends $O(E)$ structure operations ($|V|$ MAKE-SETs, $\\le 2|E|$ FIND-SETs, $\\le |E|$ UNIONs); SAME-COMPONENT is a pair of FIND-SET calls."
    ],
    quiz: [
      {
        q: "Which statement about the UNION operation is FALSE?",
        options: [
          "it destroys the two sets that contained its arguments",
          "it creates a new set equal to the union of those two sets",
          "it keeps the two old sets and adds a third one alongside them",
          "the representative of the result may differ from both old representatives"
        ],
        answer: 2,
        explanation: "UNION is destructive: the two old sets disappear and are replaced by their union. This destruction is exactly why the structure is a family of *dynamic* sets and why per-operation worst cases must be amortized."
      },
      {
        q: "In CONNECTED-COMPONENTS, how many UNION calls can actually merge two different sets?",
        options: ["at most $|E|$", "at most $|V| - 1$", "at most $|V|$", "exactly $|E| - |V| + 1$"],
        answer: 1,
        explanation: "Every successful UNION reduces the number of sets by one, and the count starts at $|V|$ and never drops below 1 — so at most $|V| - 1$ merges succeed. The remaining UNION calls (if the code makes them) still spend two FIND-SETs each."
      },
      {
        q: "FIND-SET(x) returns:",
        options: [
          "the element $x$ itself",
          "a pointer to the representative of the unique set containing $x$",
          "the list of all members of the set containing $x$",
          "the number of sets in the collection"
        ],
        answer: 1,
        explanation: "FIND-SET returns the set's *representative* — which may or may not be $x$. Correct algorithms may only compare FIND-SET pointers for equality, never depend on which member was chosen."
      },
      {
        q: "The total number of disjoint-set operations CONNECTED-COMPONENTS performs on a graph with $v$ vertices and $e$ edges is:",
        options: ["$\\Theta(v)$", "$\\Theta(e)$ for connected graphs, $\\Theta(v + e)$ in general", "$\\Theta(v \\cdot e)$", "$\\Theta(e^2)$"],
        answer: 1,
        explanation: "Count them: $v$ MAKE-SETs, at most $2e$ FIND-SETs, at most $e$ UNIONs. For a connected graph $e \\ge v - 1$ hides the $v$ term; in general the count is $\\Theta(v + e)$."
      }
    ]
  },

  // ---------------------------------------------------------------- 21.2
  {
    sectionId: "clrs-ch21-s2",
    readingTime: 7,
    intro: "The simplest representation of each set is a linked list threaded through the members. MAKE-SET and FIND-SET become trivially constant time, but UNION must splice one list into another and rewrite back-pointers — and the difference between splicing the longer or the shorter list is the difference between $\\Theta(n^2)$ and $\\Theta(n \\lg n)$ total work.",
    objectives: [
      "Draw the linked-list representation and its set objects, head and tail pointers",
      "Explain why splicing the longer list leads to a quadratic adversarial sequence",
      "Prove the weighted-union bound of $\\Theta(m + n \\lg n)$ via the doubling argument"
    ],
    concepts: [
      {
        term: "The linked-list representation",
        kind: "definition",
        statement: "Each set is kept as a **singly linked list**. Every member object $x$ holds a **next pointer** and a pointer **back to its set object**; the set object holds the list's **head** and **tail**. All members of a set point to the same set object, and the representative is the head.",
        detail: "The back-pointer is what makes FIND-SET fast: from any element, one hop reaches the set object, which names the representative. The cost of UNION is paid entirely in back-pointer rewrites."
      },
      {
        term: "MAKE-SET and FIND-SET in $O(1)$",
        kind: "method",
        statement: "`MAKE-SET(x)` builds a one-element list: a fresh set object with $head = tail = x$. `FIND-SET(x)` follows $x$'s back-pointer to the set object and returns its head. Both take **constant time**.",
        detail: "The asymmetry is stark: the two “read” operations never touch more than two objects, no matter how large the set; only UNION inspects list structure."
      },
      {
        term: "UNION as splicing",
        kind: "method",
        statement: "`UNION(x, y)` splices one list into the other: insert $x$'s entire list **in front of** $y$'s (from tail of $x$'s list to head of $y$'s), then **rewrite the set-object pointers of every spliced member** to point at $y$'s set object. The cost is $\\Theta$ of the length of the spliced list.",
        detail: "The head/tail pointers are patched in $O(1)$; the dominating cost is the back-pointer rewrite of each spliced member. Which list gets spliced is an implementation choice — the operation's result does not depend on it, but its cost does."
      },
      {
        term: "The adversarial quadratic sequence",
        kind: "insight",
        statement: "If UNION always splices the **longer** list in front, an adversary forces $\\Theta(n^2)$ total work from $n$ MAKE-SETs followed by $n - 1$ UNIONs: splice the length-1 list in front of a singleton (cost 1), then the length-2 list in front of the next singleton (cost 2), then length 3 (cost 3), and so on — the total is $1 + 2 + \\cdots + (n-1) = \\frac{n(n-1)}{2}$ pointer rewrites.",
        detail: "The same arithmetic in reverse: after $k$ unions the list has $k + 1$ members, and the adversary always makes the algorithm rewrite all of them. No single operation exceeds $\\Theta(n)$, but the sum is quadratic — a classic amortized-analysis trap."
      },
      {
        term: "Weighted-union heuristic (Theorem 21.1)",
        kind: "theorem",
        statement: "The **weighted-union heuristic** always splices the **shorter** list in front of the longer. **Theorem 21.1:** with weighted union, a sequence of $m$ operations of which $n$ are MAKE-SET operations takes $\\Theta(m + n \\lg n)$ time.",
        detail: "**Proof idea.** A member's back-pointer is rewritten only when its list is spliced in front of another at least as long — so the list containing it at least **doubles** with each rewrite of its pointer. No list exceeds $n$ members, so each element is rewritten at most $\\lceil \\lg n \\rceil$ times; total rewrites $\\le n \\lceil \\lg n \\rceil$, and all other work is $O(1)$ per operation. $\\blacksquare$"
      }
    ],
    figures: [
      {
        caption: "Weighted union in the linked-list representation. Lists $A$ (5 objects) and $B$ (2 objects) are merged by splicing the **shorter** list in front, and only the 2 spliced objects $q$ and $p$ need their set-object back-pointers rewritten — $\\Theta(\\min(|A|, |B|))$ work. Each rewritten object has just seen its list at least **double**, so no object can be rewritten more than $\\lceil \\lg n \\rceil$ times over the whole run: that single observation is the entire proof of the $\\Theta(m + n \\lg n)$ bound.",
        svg: '<svg viewBox="0 0 720 310" width="100%" role="img" aria-label="Weighted union: two-object list B spliced in front of five-object list A, only q and p rewritten"><text x="360" y="24" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">Weighted union: splice shorter B in front of longer A</text><rect x="200" y="90" width="48" height="34" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/><text x="224" y="112" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">A1</text><line x1="248" y1="107" x2="256" y2="107" stroke="currentColor" stroke-width="1.5"/><polygon points="256,107 248,103 248,111" fill="currentColor"/><rect x="256" y="90" width="48" height="34" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/><text x="280" y="112" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">A2</text><line x1="304" y1="107" x2="312" y2="107" stroke="currentColor" stroke-width="1.5"/><polygon points="312,107 304,103 304,111" fill="currentColor"/><rect x="312" y="90" width="48" height="34" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/><text x="336" y="112" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">A3</text><line x1="360" y1="107" x2="368" y2="107" stroke="currentColor" stroke-width="1.5"/><polygon points="368,107 360,103 360,111" fill="currentColor"/><rect x="368" y="90" width="48" height="34" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/><text x="392" y="112" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">A4</text><line x1="416" y1="107" x2="424" y2="107" stroke="currentColor" stroke-width="1.5"/><polygon points="424,107 416,103 416,111" fill="currentColor"/><rect x="424" y="90" width="48" height="34" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/><text x="448" y="112" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">A5</text><text x="150" y="112" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">head[A]</text><text x="492" y="112" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">tail[A]</text><text x="310" y="70" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">5 objects</text><rect x="290" y="190" width="48" height="34" fill="none" stroke="#f59e0b" stroke-width="2"/><text x="314" y="212" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">q</text><rect x="346" y="190" width="48" height="34" fill="none" stroke="#f59e0b" stroke-width="2"/><text x="370" y="212" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">p</text><text x="240" y="212" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">head[B]</text><text x="400" y="212" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">tail[B]</text><text x="310" y="250" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">2 objects q, p: only these rewrite back-pointers</text><line x1="394" y1="190" x2="394" y2="150" stroke="#10b981" stroke-width="1.6" stroke-dasharray="5 4"/><line x1="394" y1="150" x2="208" y2="150" stroke="#10b981" stroke-width="1.6" stroke-dasharray="5 4"/><polygon points="208,150 218,146 218,154" fill="#10b981"/><text x="400" y="168" font-family="ui-sans-serif, system-ui" font-size="11" fill="#10b981">splice</text><text x="360" y="292" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">work = Θ(min(|A|,|B|)) = Θ(2): each rewrite at least doubles its list</text></svg>',
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "Doubling bookkeeping on 8 elements",
        problem: "Start from 8 singleton lists and merge into one 8-element list by weighted union, in the order: $\\{x_1,x_2\\}$, $\\{x_3,x_4\\}$, $\\{x_5,x_6\\}$, $\\{x_7,x_8\\}$, then $\\{x_1..x_4\\}$, $\\{x_5..x_8\\}$, then the final merge. Count the back-pointer rewrites and compare with the adversarial order.",
        steps: [
          { label: "Step 1: Pairs", text: "Each 2-element merge splices a singleton (cost 1): four merges, 4 rewrites total." },
          { label: "Step 2: Quads", text: "Merging two 2-lists splices one of them: cost 2. Two such merges: 4 more rewrites. Now lists $\\{x_1..x_4\\}$ and $\\{x_5..x_8\\}$." },
          { label: "Step 3: The final merge", text: "Both lists have length 4; splice either one in front: cost 4 rewrites." },
          { label: "Step 4: The count", text: "Total rewrites: $4 + 4 + 4 = 12$ — and $n \\lceil \\lg n \\rceil = 8 \\cdot 3 = 24$ is the proven ceiling. Element $x_1$ was rewritten exactly $3 = \\lg 8$ times: once as a singleton, once inside its 2-list, once inside its 4-list." },
          { label: "Step 5: The adversarial comparison", text: "The unweighted bad order ($1 + 2 + \\cdots + 7$) needs $28$ rewrites to reach the same 8-element list — and the gap grows to $\\Theta(n^2)$ versus $\\Theta(n \\lg n)$ in general." }
        ],
        result: "12 rewrites under weighted union versus 28 under the adversarial order for the same final list — the doubling argument is what turns “splice the shorter side” into a logarithmic per-element budget."
      },
      {
        title: "Doubling bookkeeping on 8 elements",
        problem: "Weighted union builds $8$ singletons by always splicing smaller into larger. Show no element moves more than $3$ times.",
        steps: [
          { label: "Pairs", text: "Four UNIONs of $1+1$: $4$ sets of $2$; each member moved $1$ time (size doubled $1 \\to 2$)." },
          { label: "Quads", text: "Two UNIONs of $2+2$: $2$ sets of $4$; members of smaller side move again (size $2 \\to 4$): $2$ moves so far." },
          { label: "Final", text: "One UNION of $4+4$: $1$ set of $8$; smaller side moves third time ($4 \\to 8$)." },
          { label: "Bound", text: "Each move at least doubles the member's set size, so $k$ moves implies size $\\ge 2^k$: $k \\le \\lg 8 = 3$. Total moves $\\le n \\lg n = 24$." },
        ],
        result: "Max $3$ moves per element, $\\le 24$ total: weighted union's $O(n \\lg n)$ from the doubling invariant.",
      },
    ],
    keyTakeaways: [
      "Linked lists make MAKE-SET and FIND-SET $O(1)$; UNION costs $\\Theta$(length of the spliced list) in back-pointer rewrites.",
      "Splicing the longer list admits a $\\Theta(n^2)$ adversarial sequence: $1 + 2 + \\cdots + (n-1)$ rewrites.",
      "Weighted union (splice the shorter) gives $\\Theta(m + n \\lg n)$ total (Theorem 21.1): every rewrite of an element's pointer witnesses its list doubling, so each element pays at most $\\lceil \\lg n \\rceil$ rewrites."
    ],
    quiz: [
      {
        q: "In the linked-list representation, what does each member object keep besides its next pointer?",
        options: [
          "a pointer to the representative element itself",
          "a pointer to its set object, which holds the head and tail of its list",
          "an integer rank",
          "the size of its list"
        ],
        answer: 1,
        explanation: "The back-pointer to the set object is what FIND-SET follows in $O(1)$. Rewriting these back-pointers is exactly the cost of UNION — the set object is shared bookkeeping for the whole list."
      },
      {
        q: "Under the weighted-union heuristic, an element's set-object pointer is rewritten only when:",
        options: [
          "its list is spliced in front of a list at least as long as it",
          "its list receives a splice from a shorter list",
          "any UNION involving its set occurs",
          "its list has odd length"
        ],
        answer: 0,
        explanation: "The heuristic splices the *shorter* list in front, and the rewrites fall on the spliced members. Being spliced means your list had length at most the other's — so the merged list containing you is at least twice your old one."
      },
      {
        q: "The $n \\lg n$ term in Theorem 21.1 accounts for:",
        options: [
          "the $n$ MAKE-SET operations, each costing $\\lg n$",
          "the total back-pointer rewrites, at most $\\lceil \\lg n \\rceil$ per element",
          "sorting the elements first",
          "the FIND-SET calls, each costing $\\lg n$"
        ],
        answer: 1,
        explanation: "Every rewrite witnesses a doubling of the containing list, and a list can double only $\\lceil \\lg n \\rceil$ times before reaching size $n$. The $m$ term absorbs all constant-time operations."
      },
      {
        q: "With the plain (unweighted) UNION, $n$ MAKE-SETs followed by $n - 1$ UNIONs can be forced to cost:",
        options: ["$\\Theta(n)$", "$\\Theta(n \\lg n)$", "$\\Theta(n^2)$", "$\\Theta(n \\lg^2 n)$"],
        answer: 2,
        explanation: "Always splicing the longer list in front yields rewrite costs $1 + 2 + \\cdots + (n-1) = \\frac{n(n-1)}{2} = \\Theta(n^2)$ — the motivation for the weighted-union heuristic."
      }
    ]
  },

  // ---------------------------------------------------------------- 21.3
  {
    sectionId: "clrs-ch21-s3",
    readingTime: 7,
    intro: "Faster still: represent each set by a rooted tree in which every node points to its parent and the root is the representative. Left alone this can degenerate into a chain as bad as a linked list — but two heuristics, union by rank and path compression, cooperate so well that $m$ operations on $n$ elements take $O(m\\,\\alpha(n))$ time.",
    objectives: [
      "Implement MAKE-SET, UNION, LINK and FIND-SET on disjoint-set forests",
      "Apply union by rank and path compression and explain what each buys alone",
      "Establish the rank lemmas: rank $k$ forces $2^k$ descendants and rank $\\le \\lfloor \\lg n \\rfloor$"
    ],
    concepts: [
      {
        term: "Disjoint-set forest",
        kind: "definition",
        statement: "Each set is a **rooted tree**: every node stores only a pointer to its **parent** (the root points to itself), and the **root is the representative** of the set. `FIND-SET(x)` follows parent pointers up to the root; `UNION(x, y)` makes one root point to the other.",
        detail: "The forest stores no child lists and no sibling structure — one pointer per element. All the intelligence lives in *how* the two heuristics below choose parent pointers, because a badly chosen UNION can leave find paths as long as $n - 1$."
      },
      {
        term: "The naive degeneration",
        kind: "insight",
        statement: "If UNION simply points one root at the other with no rule, an adversarial sequence builds a **chain**: $n$ singletons merged one under the next produce a tree that is a path of $n - 1$ edges, so every FIND-SET on the deepest node costs $\\Theta(n)$.",
        detail: "This is precisely the linked-list behavior of Section 21.2 in disguise — the tree version of splicing the longer list in front. Both heuristics below exist to break this chain."
      },
      {
        term: "Union by rank",
        kind: "method",
        statement: "Give each node a **rank**, an upper bound on its height as a root. `MAKE-SET(x)` sets $rank[x] = 0$. `LINK(x, y)` makes the **smaller-rank root point to the larger-rank root**; on a tie, either direction is chosen and the new root's rank increases by 1.",
        detail: "Ranks mimic the height: a root of rank $k$ has height at most $k$. Crucially, **a node's rank never changes once it stops being a root** — ranks are historical records of how the tree was assembled, not descriptions of its current shape."
      },
      {
        term: "Path compression",
        kind: "method",
        statement: "`FIND-SET(x)` makes **every node on the find path point directly to the root** it finds — a two-pass or recursive procedure: walk to the root, then walk back re-pointing each visited node at the root.",
        detail: "Compression never updates ranks: they keep recording the tree's history, not its flattened present. The flattening is permanent — the next FIND on any of those nodes is a single hop — and it is this *memory* that the $\\alpha(n)$ analysis charges."
      },
      {
        term: "The rank lemmas",
        kind: "theorem",
        statement: "With union by rank: (1) ranks **strictly increase** along any path from a node up to its root; (2) whenever a node's rank becomes $k$, its subtree contains **at least $2^k$ nodes**; (3) so ranks never exceed $\\lfloor \\lg n \\rfloor$, and **at most $n/2^k$ nodes ever reach rank $k$**.",
        detail: "Induction on LINK: two rank-$k$ roots merging put at least $2^k + 2^k = 2^{k+1}$ nodes under the new rank-$(k{+}1)$ root. Path compression only removes nodes from *non-root* subtrees and adds them to roots, so roots' subtree counts never shrink and the counting survives compression. Alone, union by rank makes every FIND cost $O(\\lg n)$; with path compression the pair yields the $O(m\\,\\alpha(n))$ of Section 21.4."
      }
    ],
    figures: [
      {
        caption: "Path compression flattens the walked path. Left: FIND-SET($a$) walks the chain $a \\to b \\to c \\to d \\to e \\to f$ — five hops to reach the representative $f$. Right: the same tree after the operation — every visited node now points **directly at the root**, so the next FIND-SET on $a$, $b$, $c$, $d$ or $e$ costs one hop. The one expensive walk has paid for all the cheap ones that follow; the Section 21.4 analysis makes this exchange quantitative.",
        svg: '<svg viewBox="0 0 720 310" width="100%" role="img" aria-label="Path compression: chain of six nodes flattened so all point directly at root f"><text x="360" y="24" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">Path compression: FIND-SET(a) flattens a→b→c→d→e→f</text><circle cx="200" cy="60" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="65" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">a</text><line x1="200" y1="75" x2="200" y2="81" stroke="currentColor" stroke-width="1.5"/><polygon points="200,81 196,73 204,73" fill="currentColor"/><circle cx="200" cy="96" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="101" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">b</text><line x1="200" y1="111" x2="200" y2="117" stroke="currentColor" stroke-width="1.5"/><polygon points="200,117 196,109 204,109" fill="currentColor"/><circle cx="200" cy="132" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="137" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">c</text><line x1="200" y1="147" x2="200" y2="153" stroke="currentColor" stroke-width="1.5"/><polygon points="200,153 196,145 204,145" fill="currentColor"/><circle cx="200" cy="168" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="173" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">d</text><line x1="200" y1="183" x2="200" y2="189" stroke="currentColor" stroke-width="1.5"/><polygon points="200,189 196,181 204,181" fill="currentColor"/><circle cx="200" cy="204" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="209" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">e</text><line x1="200" y1="219" x2="200" y2="225" stroke="currentColor" stroke-width="1.5"/><polygon points="200,225 196,217 204,217" fill="currentColor"/><circle cx="200" cy="240" r="15" fill="currentColor" stroke="currentColor" stroke-width="1.6"/><circle cx="200" cy="240" r="20" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="245" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">f</text><text x="200" y="292" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">before: 5 hops</text><circle cx="400" cy="120" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="400" y="125" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">a</text><line x1="400" y1="135" x2="505" y2="228" stroke="currentColor" stroke-width="1.5"/><circle cx="456" cy="120" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="456" y="125" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">b</text><line x1="456" y1="135" x2="505" y2="228" stroke="currentColor" stroke-width="1.5"/><circle cx="512" cy="120" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="512" y="125" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">c</text><line x1="512" y1="135" x2="505" y2="228" stroke="currentColor" stroke-width="1.5"/><circle cx="568" cy="120" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="568" y="125" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">d</text><line x1="568" y1="135" x2="505" y2="228" stroke="currentColor" stroke-width="1.5"/><circle cx="624" cy="120" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="624" y="125" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">e</text><line x1="624" y1="135" x2="505" y2="228" stroke="currentColor" stroke-width="1.5"/><circle cx="510" cy="240" r="15" fill="currentColor" stroke="currentColor" stroke-width="1.6"/><circle cx="510" cy="240" r="20" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="510" y="245" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">f</text><text x="485" y="292" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">after: 1 hop each</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Seven elements, both heuristics",
        problem: "Run MAKE-SET on $a, b, c, d, e, f, g$, then UNION($c,d$), UNION($e,f$), UNION($c,e$), UNION($a,b$), UNION($a,c$), UNION($g,a$), and finally FIND-SET($f$). Track the ranks and the effect of compression.",
        steps: [
          { label: "Step 1: Two balanced merges", text: "UNION($c,d$): equal rank 0, so $c$ wins, $rank[c] = 1$, $d$ points to $c$. UNION($e,f$): $e$ wins, $rank[e] = 1$, $f$ points to $e$." },
          { label: "Step 2: Rank tie again", text: "UNION($c,e$): both roots have rank 1, so $c$ wins, $rank[c] = 2$. Tree under $c$: $d$ and $e$ (with $f$ under $e$)." },
          { label: "Step 3: Unequal ranks", text: "UNION($a,b$): $rank[a] = 1$. Then UNION($a,c$): rank 1 versus 2, the smaller root loses — $a$ (with $b$ under it) points to $c$; $rank[c]$ stays 2." },
          { label: "Step 4: A singleton joins", text: "UNION($g,a$): FIND-SET($g$) $= g$ (rank 0) versus FIND-SET($a$) $= c$ (rank 2): $g$ points to $c$. Ranks: $c\\!:\\!2$, $a\\!:\\!1$, all others frozen at 0." },
          { label: "Step 5: The compressing find", text: "FIND-SET($f$) walks $f \\to e \\to c$ and returns $c$; path compression points $f$ and $e$ **directly at $c$**. The tree rooted at $c$ now has children $d, e, a, g, f$ (with $b$ still under $a$)." },
          { label: "Step 6: Read off the lesson", text: "The next FIND-SET($f$) is one hop instead of two — and even in this tiny example the path from $f$ halved. On long chains the same step turns depth $\\ell$ into depth 1 for every visited node." }
        ],
        result: "Final forest: one tree rooted at $c$ (rank 2) with children $a, d, e, f, g$, and $b$ under $a$ — plus frozen ranks $rank[a] = 1$ everywhere else 0, illustrating both the rank rule and compression's flattening."
      },
      {
        title: "Seven elements, both heuristics",
        problem: "Forest: $1$ rank $2$ (children $2$ rank $1$ with child $4$, and $3$ rank $0$), plus singletons $5,6,7$. FIND($4$) with path compression, then UNION($1,5$) by rank.",
        steps: [
          { label: "FIND(4)", text: "Path $4 \\to 2 \\to 1$: return $1$; compress: $4.p = 1$, $2.p = 1$ (two pointers halved). Ranks unchanged (compression never changes rank)." },
          { label: "UNION(1,5)", text: "$rank[1] = 2 > rank[5] = 0$: $5.p = 1$ (no rank change; rank rises only on equal-rank link)." },
          { label: "Height", text: "Tree height $\\le 2$ after compression though $n = 8$: union by rank capped height at $\\lg n$, compression flattened the queried path." },
          { label: "Lemmas", text: "Rank $2$ node $1$ has $\\ge 2^2 = 4$ descendants ✓ ($1,2,3,4,5$); ranks along any root path strictly increase, so height $\\le$ max rank $\\le \\lfloor \\lg n \\rfloor$." },
        ],
        result: "Path $4$ compressed to direct child of $1$; $5$ attached by rank: both heuristics cooperate, height stays logarithmic.",
      },
    ],
    keyTakeaways: [
      "A disjoint-set forest stores one parent pointer per element; the root is the representative and FIND walks up.",
      "Union by rank keeps trees shallow ($rank \\le \\lfloor \\lg n \\rfloor$, a rank-$k$ root owns $\\ge 2^k$ nodes); path compression flattens every path it walks — and neither updates the other's bookkeeping.",
      "Either heuristic alone gives $O(m \\lg n)$ total; together they give $O(m\\,\\alpha(n))$ — the subject of Section 21.4."
    ],
    quiz: [
      {
        q: "In a disjoint-set forest, the representative of a set is:",
        options: ["the most recently added member", "the root of the set's tree", "the member of smallest rank", "any leaf of the tree"],
        answer: 1,
        explanation: "FIND-SET returns the root it reaches by following parent pointers. Everything else — ranks, heights, history — is internal bookkeeping invisible to the interface."
      },
      {
        q: "Under union by rank, when the two roots have EQUAL ranks, the LINK:",
        options: [
          "refuses the union and retries",
          "makes either root the child of the other and increases the winner's rank by 1",
          "swaps the two subtrees every time",
          "leaves both nodes as roots of one set"
        ],
        answer: 1,
        explanation: "On a tie the merged tree's height genuinely grows: the new root's height bound improves from $k$ to $k+1$, so its rank increments. Unequal ties attach the smaller-rank root without any rank change."
      },
      {
        q: "Path compression changes which of the following?",
        options: [
          "the rank of every node on the find path",
          "only the parent pointers of nodes on the find path",
          "the parent of the root",
          "the representative of the set"
        ],
        answer: 1,
        explanation: "Compression re-points each visited node (except the root) directly at the root. Ranks are deliberately untouched — they record how the tree was built and remain valid upper bounds for the analysis."
      },
      {
        q: "A node stops having its rank change:",
        options: [
          "whenever path compression runs on it",
          "once it is no longer a root",
          "never — ranks always track current height",
          "when its subtree reaches size 16"
        ],
        answer: 1,
        explanation: "Ranks only move while a node is a root losing or winning links. After a node becomes a child, its rank is frozen forever — even as path compression rearranges the tree above it."
      },
      // PYQ-pattern — union-by-rank bound (rephrased, values changed)
      {
        q: "With union by rank alone on $16$ elements, the maximum rank of any node is at most:",
        options: ["2", "8", "4", "16"],
        answer: 2,
        explanation: "Step 1 — Given: $n = 16$, union by rank, path compression possibly present but rank-bounded regardless. Step 2 — Governing invariant: a node of rank $r$ roots a tree of at least $2^r$ nodes, since rank grows only by uniting equal ranks. Step 3 — Bound: $2^r \\le 16$ gives $r \\le \\lg 16 = 4$. Step 4 — Sanity check: ranks grow logarithmically while sizes grow exponentially, path compression never raises rank, and the bound underpins the near-constant amortized cost. Step 5 — Distractor analysis: $2$ halves the logarithm, $8$ halves the elements instead, and $16$ is the chain the heuristic prevents. Step 6 — Conclude: rank at most $4$.",
      },
    ]
  },

  // ---------------------------------------------------------------- 21.4
  {
    sectionId: "clrs-ch21-s4",
    readingTime: 8,
    intro: "The chapter's climax is a bound so slow-growing it is indistinguishable from a constant in practice yet provably not one: with union by rank and path compression together, $m$ operations on $n$ elements take $\\Theta(m\\,\\alpha(n))$ time, where $\\alpha$ is the inverse Ackermann function. The proof is an amortized tour de force — this section unpacks its machinery honestly.",
    objectives: [
      "Define the Ackermann hierarchy $A_k$ and the inverse $\\alpha(n)$ with concrete thresholds",
      "Carry the rank lemmas through: $2^k$ descendants, $n/2^k$ counting, rank $\\le \\lfloor \\lg n \\rfloor$",
      "Outline the amortized charging argument and state the matching lower bound",
    ],
    concepts: [
      {
        term: "The main theorem",
        kind: "theorem",
        statement: "A sequence of $m$ disjoint-set operations on $n$ elements (of which $n$ are MAKE-SET and $m \\ge n$), performed on forests with **union by rank and path compression**, runs in $O(m\\,\\alpha(n))$ total time — and this is tight: no pointer-machine implementation does better.",
        detail: "Since a single operation can walk a path of length $n - 1$, the worst case per operation is $\\Theta(n)$; only the *total* is small. The amortized cost per operation is $\\Theta(\\alpha(n))$ — for every input size you will ever meet, at most 4 units."
      },
      {
        term: "The Ackermann hierarchy",
        kind: "definition",
        statement: "Define $A_1(j) = 2j$ for $j \\ge 1$, $A_k(1) = A_{k-1}(2)$ for $k \\ge 2$, and $A_k(j) = A_{k-1}\\big(A_k(j-1)\\big)$ for $k \\ge 2, j \\ge 2$. The functions stack: $A_2(j) = 2^{j+1}$, $A_3(1) = 8$, $A_3(2) = 512$, $A_4(1) = 512$, and $A_4(2)$ is already a tower of 512 twos.",
        detail: "Each level iterates the previous one: $A_1$ doubles, $A_2$ exponentiates, $A_3$ towers, $A_4$ towers-of-towers. The hierarchy is the finest-grained scale of “how slowly does this grow” that the rank structure can exploit."
      },
      {
        term: "The inverse Ackermann function",
        kind: "definition",
        statement: "$$\\alpha(n) = \\min\\{k : A_k(1) > \\lg n\\}.$$ Reading the thresholds: $\\alpha(n) \\le 3$ for all $n < 256$; $\\alpha(n) = 4$ for $256 \\le n < 2^{512}$; it first reaches 5 only at $n \\ge 2^{512}$.",
        detail: "Since the observable universe holds far fewer than $2^{512}$ atoms, $\\alpha(n) \\le 4$ for every conceivably realizable input — yet $\\alpha$ is an unbounded function, and the theorem's bound genuinely depends on it. It is the canonical example of a “nonconstant constant”."
      },
      {
        term: "Where the $\\alpha$ comes from",
        kind: "insight",
        statement: "The proof groups ranks into **classes** whose boundaries follow the Ackermann hierarchy, then charges each FIND-SET a constant for itself plus one unit per **class transition** along the walked path — at most $\\alpha(n)$ of them, because ranks strictly increase toward the root. Nodes charged to their own accounts are charged only while their parent's rank climbs within one class, and the class widths are exactly the $A_k$ towers.",
        detail: "The telescoping of “class widths against class populations” across all levels is the technical heart of the book's pp. 573–578 argument. The masters section below proves the easy $O(m + n\\lg n)$ bound completely and then sketches how the class machinery sharpens it to $\\alpha$."
      },
      {
        term: "Tightness — the lower bound",
        kind: "insight",
        statement: "Tarjan (1975) proved an $\\Omega(m\\,\\alpha(n))$ **lower bound** on pointer machines: any implementation of union–find in which each operation follows pointers must take amortized $\\Omega(\\alpha(n))$ per operation on some sequences. Fredman and Saks (1989) extended matching lower bounds to the cell-probe model.",
        detail: "So $\\Theta(m\\,\\alpha(n))$ is not an artifact of forests — it is the intrinsic complexity of the problem on the machines we use. Faster is possible only by changing the game (word-parallel tricks, batching, randomization against weaker adversaries)."
      }
    ],
    examples: [
      {
        title: "Computing $\\alpha$ at three scales",
        problem: "Evaluate $\\alpha(n)$ for $n = 100$, $n = 2^{64}$ and $n = 2^{600}$ using the definition $\\alpha(n) = \\min\\{k : A_k(1) > \\lg n\\}$.",
        steps: [
          { label: "Step 1: The hierarchy's first column", text: "$A_1(1) = 2$, $A_2(1) = 4$, $A_3(1) = 8$, $A_4(1) = 512$. These are the only values needed — $\\alpha$ compares $\\lg n$ against the first column." },
          { label: "Step 2: $n = 100$", text: "$\\lg n \\approx 6.6$. Check: $A_3(1) = 8 > 6.6$, and $A_2(1) = 4 \\le 6.6$, so the minimum $k$ with $A_k(1) > \\lg n$ is $k = 3$: $\\alpha(100) = 3$." },
          { label: "Step 3: $n = 2^{64}$", text: "$\\lg n = 64$. Now $A_3(1) = 8 \\le 64$ but $A_4(1) = 512 > 64$, so $\\alpha(2^{64}) = 4$ — a 64-bit universe already needs the fourth Ackermann level." },
          { label: "Step 4: $n = 2^{600}$", text: "$\\lg n = 600 > 512 = A_4(1)$: even the fourth level fails, so $\\alpha(2^{600}) = 5$ — the first territory where the bound grows again." }
        ],
        result: "$\\alpha(100) = 3$, $\\alpha(2^{64}) = 4$, $\\alpha(2^{600}) = 5$: the function sits at 4 across sixty orders of magnitude, which is why the $O(m\\,\\alpha(n))$ bound behaves like $O(m)$ in every practical setting."
      },
      {
        title: "Computing $\\alpha$ at three scales",
        problem: "Evaluate $\\alpha(n)$ for $n = 5$, $n = 10^6$ (atoms in a ӏine of code? no, a million keys), and $n = 10^{80}$ (atoms in the universe).",
        steps: [
          { label: "$n = 5$", text: "$A_1(1) = 3$? Levels: $A_0(j) = j+1$, $A_1(j) = 2j+1$? Precisely $\\alpha(5) = 3$? Small $n$ still needs level $3$: $\\alpha \\le 3$ for $n \\le 7$? Book: $\\alpha(n) = \\min\\{k : A_k(1) \\ge n\\}$ with $A_2(1) = 7$, so $\\alpha(5) = 2$." },
          { label: "$n = 10^6$", text: "$A_3(1) = 2047$? Actually $A_3(1) = A_2(A_3(0))$ towers: $A_3(1) = 2047$, $A_4(1)$ is $2^{2048}$-scale: $10^6 < A_4(1)$, and $10^6 > A_3(1)$, so $\\alpha(10^6) = 4$." },
          { label: "$n = 10^{80}$", text: "$A_4(1) = 2^{2^{\\cdot^{\\cdot^{2}}}}$ ($2048$ twos) dwarfs $10^{80}$: still $\\alpha = 4$. Even atoms-in-universe inputs need level $4$." },
          { label: "Moral", text: "$\\alpha(n) \\le 4$ for every physically storable $n$; $\\alpha$ hits $5$ only past $A_4(1)$, a tower no machine will ever index. Hence $O(m\\alpha(n))$ is $O(m)$ for all practical purposes." },
        ],
        result: "$\\alpha(5) = 2$, $\\alpha(10^6) = \\alpha(10^{80}) = 4$: inverse Ackermann is $\\le 4$ on every input that fits in the universe.",
      },
    ],
    keyTakeaways: [
      "With both heuristics, $m$ operations on $n$ elements take $\\Theta(m\\,\\alpha(n))$ — amortized, not per-operation; single finds can still walk $\\Theta(n)$ paths.",
      "$\\alpha(n) \\le 4$ for all $n < 2^{512}$ (and $\\le 3$ below 256), yet $\\alpha$ is unbounded — the slowest-growing function that arises naturally in algorithm analysis.",
      "The bound is optimal for pointer machines (Tarjan 1975) and for cell-probe implementations (Fredman–Saks 1989): union–find genuinely lives at $\\alpha$."
    ],
    quiz: [
      {
        q: "Using $A_1(j) = 2j$ and $A_k(1) = A_{k-1}(2)$, the value $A_2(j)$ equals:",
        options: ["$2j$", "$2^j$", "$2^{j+1}$", "$j^2$"],
        answer: 2,
        explanation: "$A_2(1) = A_1(2) = 4$ and $A_2(j) = A_1(A_2(j-1)) = 2 A_2(j-1)$, so $A_2(j) = 2^{j+1}$: 4, 8, 16, 32, ... — the second level already exponentiates."
      },
      {
        q: "For $n = 2^{64}$ (a 64-bit address space), $\\alpha(n)$ equals:",
        options: ["2", "3", "4", "5"],
        answer: 2,
        explanation: "$\\lg n = 64$. Since $A_3(1) = 8 \\le 64 < 512 = A_4(1)$, the smallest $k$ with $A_k(1) > \\lg n$ is 4. Even a universe of $2^{64}$ elements never pushes $\\alpha$ past 4."
      },
      {
        q: "A node whose rank has just become $k$ has at least how many nodes in its subtree?",
        options: ["$k$", "$2k$", "$2^k$", "$k^2$"],
        answer: 2,
        explanation: "Rank is earned by merging: two rank-$k$ roots together control $\\ge 2^k + 2^k = 2^{k+1}$ nodes, and the rank-0 base case has $1 = 2^0$. This is why rank $\\le \\lfloor \\lg n \\rfloor$ and why at most $n/2^k$ nodes ever reach rank $k$."
      },
      {
        q: "The total running time of $m$ operations ($n$ MAKE-SETs, $m \\ge n$) using union by rank with path compression is:",
        options: ["$\\Theta(m \\lg n)$", "$\\Theta(m + n \\lg n)$", "$\\Theta(m\\,\\alpha(n))$", "$\\Theta(m \\lg^* n)$"],
        answer: 2,
        explanation: "Both heuristics together give the chapter's main theorem, $\\Theta(m\\,\\alpha(n))$ — strictly better than the single-heuristic $\\Theta(m \\lg n)$ and than the intermediate $\\lg^*$-type bounds that the same proof technique passes through."
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "The inverse-Ackermann analysis, sketched honestly",
        blocks: [
          {
            kind: "para",
            body: "Why amortized? Because the two heuristics spend and save in a pattern no single operation reveals: a FIND-SET that walks a chain of length $n-1$ leaves a **star** behind — every node one hop from the root — so the very operation that was expensive made all its successors cheap. The proof must trade present cost against future savings, and CLRS does this with a direct *charging* argument over rank classes rather than a potential function. Below we prove the easy $O(m + n \\lg n)$ bound completely (it needs nothing but a depth potential), derive the rank lemmas in full, and then sketch how replacing “count depth” by the Ackermann class machinery sharpens $\\lg n$ down to $\\alpha(n)$."
          },
          {
            kind: "theorem",
            heading: "Rank lemmas",
            body: "With union by rank, at all times: (1) if $x$ is not a root then $rank[x] < rank[parent[x]]$ — ranks strictly increase toward the root; (2) when a node's rank is set to $k$, its subtree contains at least $2^k$ nodes; (3) consequently $rank \\le \\lfloor \\lg n \\rfloor$ and at most $n / 2^k$ nodes ever reach rank $k$."
          },
          {
            kind: "proof",
            heading: "Proof of the rank lemmas",
            body: "For (2), induct on links. A fresh root has rank 0 and one node $= 2^0$. When LINK joins roots of ranks $a \\le b$, the new root's subtree holds at least $2^a + 2^b \\ge 2^{b} + 2^{b} = 2^{b+1}$ nodes if $a = b$ (rank rises to $b+1$), and at least $2^b \\ge 2^b$ if $a < b$ (rank stays $b$) — either way rank $k$ certifies $\\ge 2^k$ nodes. Path compression never violates this: it only moves nodes *up* into the root's subtree, so root subtrees never shrink, and non-root ranks are frozen. For (1): when $x$ acquires a parent — by LINK (it was the losing root, of strictly smaller-or-equal rank, and on ties the winner's rank then increments past it) or by compression (the new parent is the root, of strictly larger rank than any strict ancestor below it) — the parent's rank strictly exceeds $rank[x]$, and both facts only strengthen over time. (3) The nodes that ever reach rank $k$ can be injected into disjoint witness sets of $2^k$ nodes, so there are at most $n / 2^k$ of them, and no rank exceeds $\\lfloor \\lg n \\rfloor$. $\\blacksquare$"
          },
          {
            kind: "theorem",
            heading: "The easy bound: $O(m + n \\lg n)$",
            body: "Union by rank with path compression answers any $m$ operations ($n$ MAKE-SETs) on $n$ elements in $O(m + n \\lg n)$ total time — provably, with a two-line potential."
          },
          {
            kind: "proof",
            heading: "A complete potential-function proof",
            body: "Let $\\Phi = \\sum_x depth(x)$, the total depth of all nodes; $\\Phi$ starts at 0 and never goes negative. A UNION raises $\\Phi$ only through the losing root's subtree gaining one level of depth — and by the rank lemmas, a node's depth increases only when its tree's root-rank strictly rises, which can happen at most $\\lfloor \\lg n \\rfloor$ times per node: all unions together raise $\\Phi$ by at most $n \\lg n$. A FIND that walks a path $x_1, x_2, \\ldots, x_r$ costs $2r$ pointer reads/writes but re-parents every non-root node on the path directly to $x_r$: node $x_i$'s depth drops from $r - i$ to 1, so $\\Phi$ falls by $\\sum_{i=1}^{r-1}(r - i - 1) = \\frac{(r-1)(r-2)}{2}$, which exceeds $2r$ for all $r \\ge 7$ and is nonnegative otherwise — every find has amortized cost $O(1)$. Summing, the total actual cost is at most the total amortized cost plus the total potential *increase*: $O(m) + O(n \\lg n)$. $\\blacksquare$ — The bound is honest but loose: it counts depth, when the fine currency of the problem is *rank*."
          },
          {
            kind: "derivation",
            heading: "From $\\lg n$ to $\\alpha(n)$: the class-charging sketch",
            body: "The book's argument replaces the depth potential by a two-tier charging of each find path $x_1, \\ldots, x_r$. **Tier 1 — the operation pays:** a constant for the find itself, plus one unit for each path position where the *rank class* changes, where the classes chop the rank scale $0, 1, \\ldots, \\lfloor \\lg n \\rfloor$ into intervals whose endpoints follow the Ackermann hierarchy — class boundaries near $A_1$, then $A_2$, then $A_3$ towers. Because ranks strictly increase toward the root (rank lemma 1), the class along the path is monotone, so it can change at most $\\alpha(n)$ times per find: this is where the per-find $\\alpha$ appears. **Tier 2 — the node pays:** every other node $x_i$ on the path is charged to its own account, and this charge is *safe* because the compression gives $x_i$ a new parent of strictly larger rank; while $x_i$'s parent-rank keeps climbing inside one class, each charge consumes one of the class's rank values, and a class-$\\ell$ rung contains at most $A_{\\ell}$-many values — the tower widths. Summing node accounts over all elements now telescopes: high classes are astronomically wide but reach vanishingly few nodes (at most $n/2^k$ nodes ever reach rank $k$), and the trade “width against population” across the $\\alpha(n)$ classes collapses to $O(n\\,\\alpha(n))$. Total: $O(m\\,\\alpha(n))$. The full telescoping identity is the technical heart of CLRS pp. 573–578; what this sketch preserves is the load-bearing structure: *monotone ranks bound the per-find charges, and tower-widths-against-rarity bounds the per-node ones*."
          },
          {
            kind: "remark",
            heading: "Reading the numbers",
            body: "The machinery is calibrated so that the levels first matter at astronomical sizes: $A_3(1) = 8$ and $A_4(1) = 512$ straddle $\\lg n$ for every $n$ from 256 to $2^{512}$. That is why $\\alpha(n) = 4$ across sixty orders of magnitude and why practitioners write $O(m\\,\\alpha(n)) \\approx O(m)$ without fear — the approximation fails only for inputs that cannot exist. But the bound is not a constant: it genuinely grows, and Tarjan's lower bound proves every pointer-machine implementation must pay for that growth. The inverse Ackermann function is thus the purest known instance of a bound that is *theoretically unbounded and practically flat*."
          },
          {
            kind: "application",
            heading: "What near-linearity buys",
            body: "Plugged into Kruskal's algorithm, the $O(m\\,\\alpha(n))$ bound makes the union–find work $O(E\\,\\alpha(V))$ — asymptotically invisible next to the $O(E \\lg E)$ edge sort, and near-linear when edges arrive sorted or by counting sort. The same structure decides undirected connectivity, offline bipartiteness tests per batch, and (with the offline LCA technique) lowest common ancestors in $\\alpha$-time per query. In each case the whole graph can be processed for the price of reading it — the disjoint-set forest is what makes “almost linear” a theorem rather than a hope."
          },
          {
            kind: "open",
            heading: "The frontier: dynamics and parallelism",
            body: "Union–find is a *incremental* structure: unions only. The natural extensions remain open or expensive: union–find with **deletions** (or backtracking) has no known $\\alpha$-type bound, and fully dynamic connectivity — edges also disappearing — needs the polylogarithmic Holm–de Lichtenberg–Thorup machinery instead. **Parallel** union–find, central to Borůvka-style MST on GPUs, trades the pointer-machine lower bound for memory-contention bounds that are still being mapped. And whether the painful analysis is *necessary* — whether a different algorithm with a simple proof also achieves optimality — is the standing challenge Tarjan himself posed: the gap between the two-page proof above and the six-page tight one is, in a precise sense, the price of the last $\\lg n \\to \\alpha(n)$."
          }
        ]
      }
    ]
  }
]
