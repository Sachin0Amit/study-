import type { SectionContent } from '../library'

// ============================================================================
// Cormen, Leiserson, Rivest, Stein — Introduction to Algorithms, 3rd Edition
// Chapter 19: Fibonacci Heaps (Sections 19.1 – 19.4)
// Root lists, mark bits, mergeable-heap operations with amortized bounds,
// cascading cuts, and the D(n) = O(lg n) degree bound from Fibonacci numbers.
// ============================================================================

export const clrsCh19Content: SectionContent[] = [
  // ---------------------------------------------------------------- 19.1
  {
    sectionId: "clrs-ch19-s1",
    readingTime: 6,
    intro: "Binomial heaps merge two heaps in $O(\\lg n)$ but charge every insertion for keeping the trees tidy. Fibonacci heaps (Fredman and Tarjan, 1987) take the opposite bargain: let the collection of trees grow ragged, never tidy up until forced to, and pay for the deferred work out of a banked potential. The admission price is pure bookkeeping — a circular root list and one mark bit per node — and the payoff is $O(1)$ amortized INSERT, UNION and DECREASE-KEY, exactly what Dijkstra needs to run in $O(V \\lg V + E)$. This section defines the structure; the next two make the amortized bounds precise.",
    objectives: [
      "Define a Fibonacci heap: a collection of min-heap-ordered trees threaded into a circular, doubly linked root list, with degree and mark fields on every node",
      "State precisely when a node's mark bit is set and cleared, and why roots are never marked",
      "Compute the potential $\\Phi(H) = t(H) + 2m(H)$ for a concrete heap and explain why marks are weighted double",
    ],
    concepts: [
      {
        term: "Fibonacci heap",
        kind: "definition",
        statement: "A **Fibonacci heap** is a collection of **min-heap-ordered** trees — every node's key is less than or equal to each of its children's keys — that need not be binomial: the trees may have arbitrary shapes, and several trees may even share a degree. The heap keeps a pointer $H.min$ to the root with the overall minimum key, and the roots of all trees are threaded into a **circular, doubly linked list** called the **root list**.",
        detail: "Heap order must hold within each tree; across trees there is no order at all, which is why the minimum has to be tracked explicitly in $H.min$ rather than found by walking the root list.",
      },
      {
        term: "Node fields and the circular lists",
        kind: "notation",
        statement: "Each node stores its key, a parent pointer $x.p$, a pointer $x.child$ to *one* of its children, and sibling pointers $x.left$, $x.right$, plus two integers: $x.degree$ (number of children) and $x.mark$ (a boolean). The children of any node also form a **circular, doubly linked list**, so any node can be spliced into or out of a sibling list, or into the root list, with $O(1)$ pointer updates.",
        detail: "This is the structural fact behind every $O(1)$ bound in the chapter: circularity removes end-cases, and double linkage removes the need to search for a predecessor.",
      },
      {
        term: "The mark bit",
        kind: "law",
        statement: "**A node is marked iff, being a non-root, it has lost one child since the last time it was linked to its current parent.** The bit is set when an unmarked node loses a child; it is cleared when the node is linked as a child of another node or when it becomes a root. A **root is never marked**, and a marked node that loses a second child is immediately cut from its parent and sent to the root list (Section 19.3).",
        detail: "The mark is a promise the heap makes to its own analysis: no non-root node ever loses more than one child — the invariant that the degree bound of Section 19.4 silently relies on.",
      },
      {
        term: "The potential function",
        kind: "definition",
        statement: "For a heap $H$, let $t(H)$ be the number of trees in the root list and $m(H)$ the number of marked nodes. The potential is $$\\Phi(H) = t(H) + 2\\,m(H),$$ with $\\Phi$ of an empty heap $= 0$. Each root-list tree banks **1 unit** (it must eventually be consolidated away) and each marked node banks **2 units** (its mark hides a future cut).",
        detail: "Since $\\Phi \\ge 0$ always, any sequence of operations costs at most its total amortized charges — the potential method of Chapter 17, applied to a pointer machine.",
      },
      {
        term: "The lazy-merge philosophy",
        kind: "insight",
        statement: "UNION does no tree merging at all — it just splices two root lists together, $O(1)$ actual work. A binomial heap instead must combine equal-degree trees at merge time, costing $\\Theta(\\lg n)$. The deferred work stays bounded only because the **maximum degree** $D(n)$ of any node in an $n$-node Fibonacci heap is $O(\\lg n)$ — the theorem Section 19.4 finally proves — so consolidation is never expensive.",
        detail: "Laziness is the design principle: every operation does the minimum now and leaves a mess that a bounded, pre-paid cleanup absorbs later.",
      },
    ],
    figures: [
      {
        caption: "A Fibonacci heap of $n = 10$ nodes: three min-heap-ordered trees rooted at 7, 38 and 55, joined in a circular, doubly linked root list (double arrows carry both next and prev; the arc shows the wrap-around $55 \\to 7$). Node 17 carries the mark ✱ — it has lost a child since 7 linked it, so one further loss sends it to the root list. The potential is $\\Phi = t + 2m = 3 + 2 \\cdot 1 = 5$.",
        svg: '<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="A Fibonacci heap with three trees in a circular root list and one marked child node"><text x="390" y="30" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">root list wraps around: 55.next = 7, 7.prev = 55</text><path d="M 580 40 C 580 8, 200 8, 200 40" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><polygon points="200,43 196.5,34 203.5,34" fill="currentColor" opacity="0.55"/><text x="66" y="64" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor" text-anchor="middle">H.min</text><line x1="94" y1="60" x2="176" y2="60" stroke="currentColor" stroke-width="1.5"/><polygon points="183,60 175,56.5 175,63.5" fill="currentColor"/><line x1="219" y1="60" x2="381" y2="60" stroke="currentColor" stroke-width="1.5"/><polygon points="219,60 227,56.5 227,63.5" fill="currentColor"/><polygon points="381,60 373,56.5 373,63.5" fill="currentColor"/><line x1="419" y1="60" x2="561" y2="60" stroke="currentColor" stroke-width="1.5"/><polygon points="419,60 427,56.5 427,63.5" fill="currentColor"/><polygon points="561,60 553,56.5 553,63.5" fill="currentColor"/><line x1="189" y1="73" x2="131" y2="137" stroke="currentColor" stroke-width="1.5" opacity="0.8"/><line x1="200" y1="77" x2="200" y2="133" stroke="currentColor" stroke-width="1.5" opacity="0.8"/><line x1="211" y1="73" x2="269" y2="137" stroke="currentColor" stroke-width="1.5" opacity="0.8"/><line x1="120" y1="167" x2="120" y2="223" stroke="currentColor" stroke-width="1.5" opacity="0.8"/><line x1="395" y1="76" x2="375" y2="134" stroke="currentColor" stroke-width="1.5" opacity="0.8"/><line x1="408" y1="75" x2="442" y2="135" stroke="currentColor" stroke-width="1.5" opacity="0.8"/><circle cx="200" cy="60" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="200" y="64.5" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor" text-anchor="middle">7</text><circle cx="400" cy="60" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="400" y="64.5" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor" text-anchor="middle">38</text><circle cx="580" cy="60" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="580" y="64.5" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor" text-anchor="middle">55</text><circle cx="120" cy="150" r="17" fill="#f59e0b" fill-opacity="0.10" stroke="#f59e0b" stroke-width="1.5"/><text x="120" y="154.5" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="#f59e0b" text-anchor="middle">17</text><text x="140" y="142" font-family="ui-sans-serif, system-ui" font-size="15" font-weight="700" fill="#f59e0b">✱</text><circle cx="200" cy="150" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="200" y="154.5" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor" text-anchor="middle">23</text><circle cx="280" cy="150" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="280" y="154.5" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor" text-anchor="middle">24</text><circle cx="120" cy="240" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="120" y="244.5" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor" text-anchor="middle">30</text><circle cx="370" cy="150" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="370" y="154.5" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor" text-anchor="middle">41</text><circle cx="450" cy="150" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="450" y="154.5" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor" text-anchor="middle">52</text><text x="16" y="282" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="#f59e0b">✱ 17 is marked: it has lost a child since</text><text x="16" y="296" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="#f59e0b">7 linked it — one more loss and 17 is cut</text><text x="16" y="310" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="#f59e0b">out and joins the root list, unmarked.</text><text x="240" y="296" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">t = 3 trees in the root list, m = 1 marked node ⇒ Φ = t + 2m = 5</text><text x="240" y="314" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">degrees: deg(7) = 3, deg(38) = 2, deg(55) = 0; every parent ≤ every child</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Reading the heap of Figure 1",
        problem: "For the heap in the figure (roots 7, 38, 55; 7 has children 17, 23, 24; 17 has child 30 and is marked; 38 has children 41, 52), verify every structural invariant and compute the potential.",
        steps: [
          { label: "Step 1: Heap order", text: "Check each tree: $7 \\le 17, 23, 24$; $17 \\le 30$; $38 \\le 41, 52$ ✓. Nothing constrains 7 against 38 or 55 — across trees, only $H.min$ matters, and it correctly points at 7." },
          { label: "Step 2: Mark", text: "17 is marked and is a non-root ✓ (roots are never marked). Its mark records a past child loss: 17 once had two children, so its current degree 1 plus one remembered loss is consistent." },
          { label: "Step 3: Degrees", text: "$\\deg(7) = 3$ (children 17, 23, 24), $\\deg(38) = 2$, $\\deg(55) = 0$, $\\deg(17) = 1$. All are at most $D(n)$; for $n = 10$, Section 19.4 gives $D(10) \\le \\lfloor \\log_\\varphi 10 \\rfloor = \\lfloor 4.78 \\rfloor = 4$ ✓." },
          { label: "Step 4: Potential", text: "$t = 3$ trees in the root list, $m = 1$ marked node, so $\\Phi = t + 2m = 3 + 2 = 5$." },
        ],
        result: "The heap is structurally legal, and its banked potential is $\\Phi = 5$ units — 3 for the trees that consolidation must one day merge, 2 for the cut that 17's mark has pre-paid.",
      },
      {
        title: "UNION adds nothing but potential",
        problem: "Union the heap of Figure 1 ($t = 3$, $m = 1$) with a second Fibonacci heap of two singleton roots 100 and 200 ($t = 2$, $m = 0$). Compare with the binomial-heap alternative.",
        steps: [
          { label: "Step 1: Splice", text: "Concatenate the two circular root lists — 4 pointer updates — and point $H.min$ at 7, the smaller of the two minima. $O(1)$ actual work, no keys touched." },
          { label: "Step 2: Potential adds", text: "$\\Phi$ of the union is $t = 5$ trees and $m = 1$ mark: $\\Phi = 5 + 2 = 7 = \\Phi(H_1) + \\Phi(H_2) = 5 + 2$. Potentials are additive, so the union banks exactly what its inputs banked — the amortized cost is $O(1)$." },
          { label: "Step 3: The binomial comparison", text: "A binomial heap union must interleave two sorted-by-degree root lists and combine every colliding pair, $\\Theta(\\lg n)$ work on the spot — it cannot defer, because its invariant (at most one tree per degree) would break." },
        ],
        result: "Fibonacci UNION is $O(1)$ amortized precisely because the structure tolerates duplicate degrees; the debt is recorded in $t$ and collected later by CONSOLIDATE.",
      },
    ],
    keyTakeaways: [
      "A Fibonacci heap is a loose collection of min-heap-ordered trees with a circular, doubly linked root list and a pointer to the minimum — shape discipline is deliberately absent.",
      "The mark bit guarantees every non-root node has lost at most one child since its last link; roots are never marked.",
      "The potential $\\Phi = t + 2m$ prices both kinds of deferred work: root-list trees (1 unit each) and hidden cuts (2 units per mark).",
    ],
    quiz: [
      {
        q: "Why is the root list kept as a circular, doubly linked list?",
        options: [
          "So that heap order can be checked in $O(1)$ at the roots",
          "So that UNION can splice two root lists together with $O(1)$ pointer updates",
          "To keep the roots sorted by key for MINIMUM",
          "To bound every node's degree by $D(n)$",
        ],
        answer: 1,
        explanation: "Splicing two circular doubly linked lists is a constant number of pointer updates — the shape that makes lazy merging free. Heap order is never checked at roots, MINIMUM reads $H.min$, and the degree bound comes from Section 19.4's analysis, not the list shape.",
      },
      {
        q: "A marked non-root node loses a second child. What must happen?",
        options: [
          "Nothing — the mark is only bookkeeping",
          "The node is cut from its parent, spliced into the root list, and unmarked",
          "The whole tree is rebuilt by CONSOLIDATE",
          "Its parent is marked instead, and the node keeps its mark",
        ],
        answer: 1,
        explanation: "The mark is a one-strike counter: the second loss triggers a cut of the node itself (Section 19.3's cascading cut), and marks are always cleared when a node becomes a root.",
      },
      {
        q: "A heap has $t = 6$ trees in its root list and $m = 4$ marked nodes. Its potential is:",
        options: ["$10$", "$12$", "$14$", "$24$"],
        answer: 2,
        explanation: "$\\Phi = t + 2m = 6 + 2 \\cdot 4 = 14$. The factor 2 on marks is what makes each future cascading cut self-funding.",
      },
      {
        q: "Why are marked nodes charged 2 potential units in $\\Phi = t + 2m$?",
        options: [
          "To keep $\\Phi$ nonnegative after UNION",
          "Because a marked node has at most two children left",
          "So that unmarking during a cascading cut releases 2 units — one pays for the new root, and the profit funds the cut itself",
          "Because marks double the actual cost of DECREASE-KEY",
        ],
        answer: 2,
        explanation: "Cutting a marked node to the root list adds a tree ($+1$) but clears the mark ($-2$), a net release of 1 unit — exactly the budget an $O(1)$ cut consumes. This is the accounting trick behind decrease-key's $O(1)$ amortized bound.",
      },
    ],
  },

  // ---------------------------------------------------------------- 19.2
  {
    sectionId: "clrs-ch19-s2",
    readingTime: 7,
    intro: "This section builds the mergeable-heap operations and prices them. MAKE-HEAP, INSERT, MINIMUM and UNION each do a few pointer updates and are $O(1)$ amortized by inspection. EXTRACT-MIN is where the laziness bill comes due: it removes the minimum, splices the minimum's children into the root list, and then — only then — tidies up, running CONSOLIDATE to merge equal-degree roots until at most one root of each degree remains. The potential $\\Phi = t + 2m$ pays the bill: every tree that leaves the root list releases one banked unit, so the amortized cost comes out $O(D(n))$, which Section 19.4 shows is $O(\\lg n)$.",
    objectives: [
      "Execute INSERT, MINIMUM and UNION and verify their $O(1)$ amortized costs from the potential",
      "Trace EXTRACT-MIN and CONSOLIDATE on a concrete root list, including equal-degree linking",
      "Show why the amortized cost of EXTRACT-MIN is $O(D(n))$ even though the actual work is $O(t + D(n))$",
    ],
    concepts: [
      {
        term: "The mergeable-heap repertoire",
        kind: "definition",
        statement: "A mergeable heap supports MAKE-HEAP, INSERT, MINIMUM, EXTRACT-MIN and UNION; with DECREASE-KEY and DELETE it becomes a priority queue. Fibonacci-heap amortized costs versus binary heaps: **INSERT $O(1)$ vs $O(\\lg n)$; MINIMUM $O(1)$ vs $O(1)$; UNION $O(1)$ vs $\\Theta(n)$; EXTRACT-MIN $O(\\lg n)$ vs $O(\\lg n)$; DECREASE-KEY $O(1)$ vs $\\Theta(\\lg n)$; DELETE $O(\\lg n)$ vs $\\Theta(\\lg n)$**.",
        detail: "The one-row summary: everything a binary heap does in $O(\\lg n)$ that does not have to — inserting, merging, decreasing — becomes $O(1)$. That is what drops Dijkstra to $O(V \\lg V + E)$.",
      },
      {
        term: "The O(1) quartet: make-heap, insert, minimum, union",
        kind: "method",
        statement: "`FIB-HEAP-INSERT(H, x)` makes $x$ a singleton tree and splices it into the root list, updating $H.min$ if $x$ is smaller — $O(1)$ actual, and $\\Delta\\Phi = +1$ (one new tree). `FIB-HEAP-MINIMUM(H)` returns $H.min$ — $O(1)$, $\\Delta\\Phi = 0$. `FIB-HEAP-UNION(H1, H2)` concatenates the root lists and keeps the smaller minimum — $O(1)$ actual, and $\\Phi(H) = \\Phi(H_1) + \\Phi(H_2)$, so the amortized cost is $O(1)$.",
        detail: "No keys are compared except against the minima, and no tree is ever re-shaped. Laziness in its purest form.",
      },
      {
        term: "EXTRACT-MIN",
        kind: "method",
        statement: "Save the minimum $z$; splice each child of $z$ into the root list (clearing its mark — roots are never marked); remove $z$; if the root list is now empty set $H.min = \\text{NIL}$; otherwise run **CONSOLIDATE** and then set $H.min$ to the smallest remaining root. Actual cost: $O(D(n) + t)$, where $t$ is the number of roots before consolidating and $D(n)$ bounds both the children spliced and the array walk.",
        detail: "Extracting the minimum is the only operation that is ever *allowed* to be slow — it is the designated cleanup moment for all the laziness that came before.",
      },
      {
        term: "CONSOLIDATE",
        kind: "method",
        statement: "Maintain an array $A[0..D(n)]$ with at most one root per degree. Walk the root list; for each root $w$ of degree $d$: while $A[d]$ already holds a root $y$, **link** the two — the smaller-keyed root stays in the list and the other becomes its child (its mark cleared, its degree incremented) — and $d$ increments; finally store $w$ in $A[d]$. At the end, rebuild the root list from $A$, which now has at most one root per degree $0, \\dots, D(n)$.",
        detail: "The result is binomial-like shape *at the roots only* — a snapshot of tidiness that the next O(1) operations immediately begin to soil again.",
      },
      {
        term: "The amortized ledger of EXTRACT-MIN",
        kind: "theorem",
        statement: "**The amortized cost of EXTRACT-MIN is $O(D(n))$.** The actual cost is $O(D(n) + t)$, and the potential change is $\\Delta\\Phi = t' + 2m' - (t + 2m) \\le (D(n) + 1) - t$: at most $D(n)+1$ trees survive consolidation and marks only decrease (new roots are unmarked). Each of the $t$ disappearing trees releases a unit, so the merging work is paid for by the potential drop: amortized $=$ actual $+ \\Delta\\Phi = O(D(n))$.",
        detail: "Units are scaled so one potential unit pays one pointer update — the standard license of the potential method. With $D(n) = O(\\lg n)$ (Section 19.4), EXTRACT-MIN is $O(\\lg n)$ amortized.",
      },
    ],
    examples: [
      {
        title: "Consolidating after EXTRACT-MIN",
        problem: "Extract the minimum from the heap of Figure 1 (Section 19.1). The minimum 7 has children 17 (marked), 23, 24, so the root list becomes, in order: 38 (degree 2), 55 (degree 0), 17 (degree 1, now a root and unmarked), 23 (degree 0), 24 (degree 0). Run CONSOLIDATE.",
        steps: [
          { label: "Step 1: Roots in place", text: "$t = 5$ roots with degrees $[2, 0, 1, 0, 0]$. Array $A$ starts empty ($D(10) \\le 4$, so $A[0..4]$)." },
          { label: "Step 2: 38, 55, 17", text: "Store $A[2] = 38$, $A[0] = 55$, $A[1] = 17$ — no collisions yet." },
          { label: "Step 3: 23 (degree 0)", text: "$A[0] = 55$ collides: $23 < 55$, so 55 becomes 23's child (23 now degree 1). $A[1] = 17$ collides: $17 < 23$, so 23 (with 55 beneath it) becomes 17's child (17 now degree 2). $A[2] = 38$ collides: $17 < 38$, so 38 (with children 41, 52) becomes 17's child — 17 now has degree 3. Store $A[3] = 17$." },
          { label: "Step 4: 24 (degree 0)", text: "$A[0]$ is empty now, so store $A[0] = 24$." },
          { label: "Step 5: Rebuild", text: "Root list $= \\{17, 24\\}$: 17 with children 30, 23, 38 (degrees $3$), and singleton 24. $H.min = 17$ ✓ — heap order held throughout because every link put the smaller key on top." },
        ],
        result: "Three links; the root list shrinks from 5 trees to 2, and $\\Phi$ falls from $t = 5, m = 0 \\Rightarrow 5$ (the mark on 17 was cleared when it became a root) to $t = 2 \\Rightarrow \\Phi = 2$.",
      },
      {
        title: "The ledger: why the amortized cost is $O(D(n))$",
        problem: "Account for the same EXTRACT-MIN with actual cost versus potential change.",
        steps: [
          { label: "Step 1: Actual work", text: "Remove 7 (1), splice 3 children (3), walk 5 roots (5), perform 3 links (3), write/rebuild from $A$ (≈4) — roughly 16 pointer-level units, i.e. $\\Theta(t + D(n))$ with $t = 5$, $D(10) \\le 4$." },
          { label: "Step 2: Potential change", text: "Before: $\\Phi = 3 + 2 \\cdot 1 = 5$. After: $\\Phi = 2 + 0 = 2$. So $\\Delta\\Phi = -3$: each of the 3 links dissolved a root-list tree, and the mark on 17 evaporated." },
          { label: "Step 3: Amortized", text: "Amortized cost $=$ actual $+ \\Delta\\Phi \\approx 16 - 3 = 13$ units. Formally the bound $\\Delta\\Phi \\le (D(n)+1) - t = 5 - 5 = 0$ absorbs the entire per-root traversal: the $t$ term of the actual cost is paid by the trees' own banked units as they leave the list." },
          { label: "Step 4: The regime check", text: "Whatever $t$ is — it can be as large as $n$ after many lazy inserts — each disappearing root releases one unit, so the amortized cost stays $O(D(n)) = O(\\lg n)$, never $O(t)$." },
        ],
        result: "A long-suffering extract-min collects exactly the debt the previous cheap operations ran up — no more.",
      },
    ],
    keyTakeaways: [
      "INSERT, MINIMUM and UNION are $O(1)$ amortized: pure pointer splicing, with each insert banking exactly one potential unit.",
      "EXTRACT-MIN consolidates equal-degree roots until at most one root per degree remains; linking always makes the smaller key the parent.",
      "The potential drop $\\Delta\\Phi \\le (D(n)+1) - t$ converts the actual $O(t + D(n))$ work into an amortized $O(D(n)) = O(\\lg n)$.",
    ],
    quiz: [
      {
        q: "Which operation has amortized cost $O(\\lg n)$ rather than $O(1)$ in a Fibonacci heap?",
        options: ["INSERT", "UNION", "EXTRACT-MIN", "MINIMUM"],
        answer: 2,
        explanation: "EXTRACT-MIN (and DELETE, which uses it) pays $O(D(n)) = O(\\lg n)$ amortized; insert, union and minimum are $O(1)$ amortized — the entire point of the structure.",
      },
      {
        q: "After EXTRACT-MIN leaves roots with degrees, in processing order, $[2, 2, 0, 0]$, how many FIB-HEAP-LINK calls does CONSOLIDATE make?",
        options: ["0", "1", "2", "3"],
        answer: 2,
        explanation: "First two degree-2 roots collide and link into a degree-3 root; the two degree-0 roots collide and link into a degree-1 root. Two links, and the final list has degrees $[3, 1]$ — one root per degree.",
      },
      {
        q: "FIB-HEAP-LINK(H, y, x) during consolidation:",
        options: [
          "makes $x$ a child of $y$ whenever their degrees match",
          "makes $y$ a child of $x$ (the smaller-keyed root), clears $y$'s mark, and increments $x.degree$",
          "merges the two root lists",
          "swaps the keys of $x$ and $y$",
        ],
        answer: 1,
        explanation: "CONSOLIDATE first exchanges the names so that $x$ carries the smaller key; then $y$ leaves the root list to become $x$'s newest child — marks are cleared on linking, which is why newly linked roots start unmarked.",
      },
      {
        q: "The amortized cost of EXTRACT-MIN is $O(D(n))$ rather than $O(t + D(n))$ because:",
        options: [
          "every root is marked before consolidation begins",
          "each tree that leaves the root list during consolidation releases one potential unit, so the $t$ merging operations are paid by the potential drop",
          "$t$ is always at most $D(n)$ in a Fibonacci heap",
          "consolidation is skipped whenever $t > D(n)$",
        ],
        answer: 1,
        explanation: "$\\Delta\\Phi \\le (D(n) + 1) - t$: the surviving roots number at most $D(n)+1$ and marks only fall, so the $t$ roots that vanish each hand back one banked unit — the cleanup is pre-paid by the operations that dirtied the heap.",
      },
    ],
  },

  // ---------------------------------------------------------------- 19.3
  {
    sectionId: "clrs-ch19-s3",
    readingTime: 7,
    intro: "DECREASE-KEY is the operation that earned Fibonacci heaps their fame, and the one binary heaps cannot cheapen. The plan: if the new key violates heap order with the node's parent, cut the node loose and make it a root — but cutting makes trees thin, and thin trees would break the degree bound that EXTRACT-MIN's cost rests on. The mark bit is the escape: a node that has already lost a child gets cut as well when it loses a second, cascading up the tree. One operation can therefore cascade $\\Theta(n)$ cuts, yet the potential $\\Phi = t + 2m$ refunds one unit per cascading cut, and the amortized cost is $O(1)$.",
    objectives: [
      "Execute DECREASE-KEY with CUT and CASCADING-CUT, including exactly when marks are set and cleared",
      "Prove the $O(1)$ amortized bound: actual $O(c)$ versus $\\Delta\\Phi \\le 4 - c$",
      "Implement DELETE as decrease-to-$-\\infty$ plus EXTRACT-MIN, at $O(\\lg n)$ amortized",
    ],
    concepts: [
      {
        term: "DECREASE-KEY",
        kind: "method",
        statement: "`FIB-HEAP-DECREASE-KEY(H, x, k)` errors if $k > x.key$; otherwise it sets $x.key = k$, and if $x$ is not a root and the new key is smaller than $x.p.key$, it cuts $x$ from its parent (`CUT`) and runs `CASCADING-CUT(H, x.p)`. Finally $H.min$ is updated if $x$ is now the smallest root.",
        detail: "If heap order survives the decrease, nothing structural happens at all — the cheap case is genuinely $O(1)$ actual.",
      },
      {
        term: "CUT and CASCADING-CUT",
        kind: "method",
        statement: "`CUT(H, x, y)` removes $x$ from the child list of its parent $y$ (decrementing $y.degree$), splices $x$ into the root list, sets $x.p = \\text{NIL}$ and $x.mark = \\text{FALSE}$. `CASCADING-CUT(H, y)` examines $z = y.p$: if $z$ is NIL, stop; if $y$ is unmarked, set $y.mark = \\text{TRUE}$ and stop; if $y$ is marked, `CUT` it and recurse on $z$.",
        detail: "The cascade walks strictly up the ancestor chain, so its length is bounded by the tree height — but each step unmarks one node, and unmarking is where the refund comes from.",
      },
      {
        term: "What the mark bit buys",
        kind: "insight",
        statement: "Cascading cuts enforce the invariant that **every non-root node has lost at most one child since it was linked to its parent**. Without it, a node of degree $d$ could be stripped of $d - 1$ children while keeping a high degree, and the minimum subtree size for degree $d$ could fall below the Fibonacci number $F_{d+2}$ — destroying the $D(n) = O(\\lg n)$ bound of Section 19.4 and with it the $O(\\lg n)$ extract-min.",
        detail: "This is the chapter's central trade: DECREASE-KEY pays for its $O(1)$ bound by promising, via marks, that trees stay Fibonacci-fat even under arbitrary cutting.",
      },
      {
        term: "The amortized O(1) bound",
        kind: "theorem",
        statement: "**A DECREASE-KEY that performs $c$ cuts costs $O(1)$ amortized.** The actual cost is $O(c)$ — each cut is constant pointer work. If $c$ cuts occur, the root list gains $c$ trees ($+c$); the $c-1$ intermediate ancestors that were cut had their marks cleared ($-2$ each) and at most one new mark is set on the parent where the cascade stops, so $\\Delta\\Phi \\le c + 2(-(c-1) + 1) = 4 - c$. Amortized cost $= O(c) + (4 - c) = O(1)$.",
        detail: "Read the inequality as an exchange rate: every cascading cut beyond the first arrives with a $-1$ net potential attached, which exactly covers its constant work. The worst single case, $c = \\Theta(n)$, is fully pre-paid by $\\Theta(n)$ marks banked earlier.",
      },
      {
        term: "DELETE",
        kind: "method",
        statement: "`FIB-HEAP-DELETE(H, x)` runs DECREASE-KEY with $k = -\\infty$ — making $x$ the minimum, cut loose from its parent in $O(1)$ amortized — and then EXTRACT-MIN to remove it. Total amortized cost: $O(1) + O(D(n)) = O(\\lg n)$.",
        detail: "No Fibonacci-heap operation ever finds nodes by key; DELETE assumes the caller already holds a pointer to $x$.",
      },
    ],
    figures: [
      {
        caption: "Path compression on a disjoint-set chain — the potential method's other showcase. A FIND-SET on the 9-node chain at left walks 8 parent pointers, then re-points every node on the walked path directly at the root, producing the star at right. The amortized philosophy is identical to this chapter's: an occasionally expensive restructuring ($\\Theta(n)$ pointers here, $\\Theta(n)$ cuts in a cascade) is paid for by potential banked in the structure — $\\Phi = t + 2m$ for Fibonacci heaps, a rank-based potential in Chapter 21.",
        svg: '<svg viewBox="0 0 720 364" width="100%" role="img" aria-label="A disjoint-set chain of nine nodes before a find, and the flattened star after path compression"><text x="110" y="26" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">before — a 9-node chain</text><text x="585" y="40" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">after — every node points at 1</text><text x="94" y="54" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="end">root</text><line x1="110" y1="61" x2="110" y2="65.5" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="110,61 107,68.5 113,68.5" fill="currentColor"/><line x1="110" y1="95" x2="110" y2="99.5" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="110,95 107,102.5 113,102.5" fill="currentColor"/><line x1="110" y1="129" x2="110" y2="133.5" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="110,129 107,136.5 113,136.5" fill="currentColor"/><line x1="110" y1="163" x2="110" y2="167.5" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="110,163 107,170.5 113,170.5" fill="currentColor"/><line x1="110" y1="197" x2="110" y2="201.5" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="110,197 107,204.5 113,204.5" fill="currentColor"/><line x1="110" y1="231" x2="110" y2="235.5" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="110,231 107,238.5 113,238.5" fill="currentColor"/><line x1="110" y1="265" x2="110" y2="269.5" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="110,265 107,272.5 113,272.5" fill="currentColor"/><line x1="110" y1="299" x2="110" y2="303.5" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="110,299 107,306.5 113,306.5" fill="currentColor"/><circle cx="110" cy="50" r="11" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="110" y="54" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><circle cx="110" cy="84" r="11" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="110" y="88" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">2</text><circle cx="110" cy="118" r="11" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="110" y="122" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">3</text><circle cx="110" cy="152" r="11" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="110" y="156" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">4</text><circle cx="110" cy="186" r="11" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="110" y="190" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">5</text><circle cx="110" cy="220" r="11" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="110" y="224" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">6</text><circle cx="110" cy="254" r="11" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="110" y="258" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">7</text><circle cx="110" cy="288" r="11" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="110" y="292" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">8</text><circle cx="110" cy="322" r="11" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="110" y="326" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">9</text><text x="130" y="326" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="#f59e0b">FIND-SET(9): 8 hops up</text><line x1="160" y1="186" x2="483" y2="186" stroke="#f59e0b" stroke-width="2"/><polygon points="490,186 482,182.5 482,189.5" fill="#f59e0b"/><text x="320" y="174" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="#f59e0b" text-anchor="middle">path compression</text><line x1="538.2" y1="88.8" x2="522.5" y2="167.2" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="522.5,167.2 521,159.7 526.8,160.9" fill="currentColor"/><line x1="571.7" y1="102.7" x2="527.2" y2="169.2" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="527.2,169.2 528.6,161.7 533.6,165.1" fill="currentColor"/><line x1="597.3" y1="128.3" x2="530.8" y2="172.8" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="530.8,172.8 535,166.4 538.2,171.4" fill="currentColor"/><line x1="611.2" y1="161.8" x2="532.8" y2="177.5" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="532.8,177.5 539.1,173.2 540.3,179" fill="currentColor"/><line x1="611.2" y1="198.2" x2="532.8" y2="182.5" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="532.8,182.5 540.3,181 539.1,186.8" fill="currentColor"/><line x1="597.3" y1="231.7" x2="530.8" y2="187.2" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="530.8,187.2 538.2,188.6 535,193.6" fill="currentColor"/><line x1="571.7" y1="257.3" x2="527.2" y2="190.8" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="527.2,190.8 533.6,193.9 528.6,198.3" fill="currentColor"/><line x1="538.2" y1="271.2" x2="522.5" y2="192.8" stroke="currentColor" stroke-width="1.2" opacity="0.8"/><polygon points="522.5,192.8 526.8,198.8 521,200.2" fill="currentColor"/><circle cx="540.5" cy="77" r="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="540.5" y="81" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">2</text><circle cx="578.4" cy="92.7" r="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="578.4" y="96.7" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">3</text><circle cx="607.3" cy="121.6" r="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="607.3" y="125.6" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">4</text><circle cx="623" cy="159.5" r="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="623" y="163.5" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">5</text><circle cx="623" cy="200.5" r="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="623" y="204.5" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">6</text><circle cx="607.3" cy="238.4" r="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="607.3" y="242.4" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">7</text><circle cx="578.4" cy="267.3" r="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="578.4" y="271.3" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">8</text><circle cx="540.5" cy="283" r="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="540.5" y="287" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">9</text><circle cx="520" cy="180" r="13" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="2"/><text x="520" y="184.5" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor" text-anchor="middle">1</text><text x="360" y="352" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">Amortized by the same potential method that prices Fibonacci-heap cuts (Φ = t + 2m here; ranks in Chapter 21).</text></svg>',
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "A cascade of four cuts, fully accounted",
        problem: "A Fibonacci heap has roots 7, 38, 55 ($t = 3$) and a chain $7 \\to 17 \\to 30 \\to 42 \\to 50$ of marked nodes 17, 30, 42 ($m = 3$; each has previously lost a child). Run DECREASE-KEY(50, 4) and account for it.",
        steps: [
          { label: "Step 1: The violation", text: "$4 < 42 = $ parent's key, so 50 must be cut. Heap order on the chain held until now: $7 < 17 < 30 < 42 < 50$ ✓." },
          { label: "Step 2: The cascade", text: "Cut 50 to the root list (unmarked, as all roots are). Its parent 42 is marked — cut it too, unmark. Then 30 is marked — cut it. Then 17 is marked — cut it. Now the walk reaches 7, a root: roots are never marked, so the cascade stops. Total $c = 4$ cuts (nodes 50, 42, 30, 17)." },
          { label: "Step 3: The heap after", text: "Root list: 7, 38, 55, 50, 42, 30, 17 — seven trees, all unmarked. The chain below 7 is gone; $t = 7$, $m = 0$." },
          { label: "Step 4: The ledger", text: "Actual cost $O(c) = O(4)$ pointer updates. Potential: before $\\Phi = 3 + 2 \\cdot 3 = 9$; after $\\Phi = 7 + 0 = 7$; so $\\Delta\\Phi = -2$. Check against the bound $\\Delta\\Phi \\le 4 - c = 0$ ✓ (the actual drop beats the bound). Amortized cost $= O(4) - 2 = O(1)$: cuts 2–4 each brought a $-1$ net refund (new root $+1$, unmark $-2$), paying for their own constant work." },
        ],
        result: "Four cuts — potentially $\\Theta(n)$ in general — priced at $O(1)$ amortized because three banked marks plus the structure of $\\Phi$ absorbed the cascade.",
      },
      {
        title: "DELETE via decrease-to-$-\\infty$",
        problem: "Delete node 41 from the heap of Figure 1 (Section 19.1): roots 7, 38, 55; 38 has children 41, 52; 17 is marked.",
        steps: [
          { label: "Step 1: Decrease 41 to $-\\infty$", text: "Heap order with parent 38 is violated, so CUT moves 41 to the root list; 38 was unmarked, so it becomes marked and the cascade stops after one cut. Roots: 7, 38, 55, 41 with $-\\infty$; $\\Phi$ moves from $3 + 2 = 5$ to $4 + 2 \\cdot 2 = 8$ — an $O(1)$ amortized step (it banked a mark)." },
          { label: "Step 2: EXTRACT-MIN", text: "The minimum is the $-\\infty$ node 41; it has no children. Root list to consolidate: 7 (degree 3), 38 (degree 1 — it just lost 41), 55 (degree 0). No degrees collide, so CONSOLIDATE makes no links: the final root list is exactly $\\{7, 38, 55\\}$ with $H.min = 7$." },
          { label: "Step 3: The result", text: "41 is gone; $\\Phi$ ends at $3 + 2 \\cdot 2 = 7$. The delete consumed its $O(\\lg n)$ amortized budget on the extraction, as designed." },
        ],
        result: "DELETE = one $O(1)$ amortized decrease-key plus one $O(\\lg n)$ amortized extract-min — $O(\\lg n)$ amortized overall, with the node never searched for.",
      },
    ],
    keyTakeaways: [
      "DECREASE-KEY cuts the node when heap order with its parent breaks, then lets CASCADING-CUT walk up the ancestor chain, cutting every already-marked ancestor.",
      "The mark discipline guarantees every non-root node has lost at most one child since its last link — the structural invariant behind Section 19.4's degree bound.",
      "$\\Delta\\Phi \\le 4 - c$ against actual cost $O(c)$ gives amortized $O(1)$; DELETE is decrease-to-$-\\infty$ plus EXTRACT-MIN, $O(\\lg n)$ amortized.",
    ],
    quiz: [
      {
        q: "A cascade of cuts triggered by DECREASE-KEY ends when:",
        options: [
          "the heap has no marked nodes left",
          "the walk upward reaches an unmarked ancestor — which gets marked — or reaches a root",
          "the decreased node becomes the minimum",
          "every ancestor has lost two children",
        ],
        answer: 1,
        explanation: "CASCADING-CUT marks an unmarked ancestor and stops there; if the ancestor was already marked it is cut and the walk continues; roots are never marked, so reaching one also stops the cascade.",
      },
      {
        q: "A single DECREASE-KEY can cascade $c = \\Theta(n)$ cuts, yet its amortized cost is $O(1)$ because:",
        options: [
          "long cascades are so rare they can be ignored",
          "each cascading cut unmarks a node — $-2$ potential against $+1$ for the new root — so every cut after the first releases a unit that pays for its own constant work",
          "cuts cost nothing in the potential method",
          "the mark bits are all cleared by the next EXTRACT-MIN anyway",
        ],
        explanation: "The refund is exact bookkeeping: $\\Delta\\Phi \\le 4 - c$ while the actual cost is $O(c)$, and the two cancel. The marks being cleared later by extract-min is precisely what keeps $\\Phi$ from running the refund twice.",
        answer: 1,
      },
      {
        q: "The mark discipline guarantees the structural fact that Section 19.4 needs:",
        options: [
          "every tree is binomial",
          "every non-root node has lost at most one child since it was linked to its parent",
          "marked nodes have degree at least 2",
          "the root list is sorted by degree",
        ],
        answer: 1,
        explanation: "This one-loss invariant is what forces subtrees to stay Fibonacci-fat: it enters the proof of $y_i.degree \\ge i - 2$ and hence the whole $D(n) = O(\\lg n)$ bound.",
      },
      {
        q: "The amortized cost of FIB-HEAP-DELETE is:",
        options: ["$O(1)$", "$O(\\lg \\lg n)$", "$O(\\lg n)$ — a decrease-key to $-\\infty$ plus an extract-min", "$\\Theta(n)$"],
        answer: 2,
        explanation: "The decrease-key is $O(1)$ amortized and only makes the node the minimum; actually removing it requires EXTRACT-MIN at $O(D(n)) = O(\\lg n)$ amortized.",
      },
    ],
  },

  // ---------------------------------------------------------------- 19.4
  {
    sectionId: "clrs-ch19-s4",
    readingTime: 6,
    intro: "Everything in this chapter has leaned on one unproven quantity: $D(n)$, the maximum degree of any node in an $n$-node Fibonacci heap. EXTRACT-MIN is $O(D(n))$ amortized, so the whole structure is only as good as $D(n)$. The name of the chapter is this section's punchline: the smallest possible subtree rooted at a node of degree $d$ has $F_{d+2}$ nodes — a Fibonacci number — because the mark bit stops trees from getting thin. Since Fibonacci numbers grow like $\\varphi^d$ with the golden ratio $\\varphi \\approx 1.618$, an $n$-node heap caps degrees at $D(n) \\le \\lfloor \\log_\\varphi n \\rfloor \\approx 1.4404 \\lg n$.",
    objectives: [
      "State the Fibonacci recurrence and the golden-ratio growth $F_k \\ge \\varphi^{k-2}$",
      "Prove the linking-order lemma $y_i.degree \\ge i - 2$ and the size bound $N(x) \\ge F_{degree(x)+2}$",
      "Derive $D(n) \\le \\lfloor \\log_\\varphi n \\rfloor = 1.4404 \\lg n$ and evaluate it for concrete $n$",
    ],
    concepts: [
      {
        term: "Fibonacci numbers",
        kind: "definition",
        statement: "The Fibonacci sequence is defined by $F_0 = 0$, $F_1 = 1$, and $F_k = F_{k-1} + F_{k-2}$ for $k \\ge 2$: $$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, \\dots$$ Key values: $F_{10} = 55$, $F_{12} = 144$, $F_{16} = 987$, $F_{17} = 1597$.",
        detail: "Growth is geometric: $F_k = \\Theta(\\varphi^k)$ — each term is about 1.618 times its predecessor, which is why degrees are only logarithmic in subtree size.",
      },
      {
        term: "The golden ratio",
        kind: "notation",
        statement: "$\\varphi = \\frac{1 + \\sqrt 5}{2} \\approx 1.61803$ satisfies $\\varphi^2 = \\varphi + 1$, and its conjugate $\\hat\\psi = \\frac{1 - \\sqrt 5}{2} = -1/\\varphi \\approx -0.61803$ satisfies $|\\hat\\psi| < 1$. Binet's formula: $F_k = \\frac{\\varphi^k - \\hat\\psi^k}{\\sqrt 5}$, and since the second term is smaller than $1/2$ in absolute value, $F_k = \\lfloor \\varphi^k / \\sqrt 5 + 1/2 \\rfloor$.",
        detail: "The identity $\\varphi^2 = \\varphi + 1$ is the engine of every induction below; note also $\\log_\\varphi n = \\lg n / \\lg \\varphi \\approx 1.4404 \\lg n$.",
      },
      {
        term: "The linking-order lemma",
        kind: "theorem",
        statement: "Let $x$ be any node of degree $d$ with children $y_1, y_2, \\dots, y_d$ in the order in which they were linked to $x$. Then $y_i.degree \\ge i - 2$ — the children cannot be too thin, because at linking time $y_i$'s degree matched $x$'s (which was at least $i - 1$), and **the mark bit ensures $y_i$ has lost at most one child since**.",
        detail: "This lemma is where the mark bit cashes in: delete the one-loss invariant and a stripped node of degree 5 could have children of degrees $0,0,0,0,0$, breaking everything downstream.",
      },
      {
        term: "The Fibonacci size bound",
        kind: "theorem",
        statement: "If $N(x)$ is the number of nodes in the subtree rooted at $x$ (including $x$), then $$N(x) \\ge F_{x.degree + 2}.$$ A degree-0 node holds $\\ge F_2 = 1$ node; degree 3 forces at least $F_5 = 5$ nodes; degree 8 forces at least $F_{10} = 55$.",
        detail: "The minimal trees are literally built by the Fibonacci recurrence: link a degree-0, a degree-0, then degrees $1, 2, 3, \\dots$ beneath a fresh root and the sizes come out $1, 2, 3, 5, 8, 13, \\dots$",
      },
      {
        term: "The maximum degree D(n)",
        kind: "theorem",
        statement: "**For any node $x$ in an $n$-node Fibonacci heap, $n \\ge N(x) \\ge F_{degree(x)+2} \\ge \\varphi^{degree(x)}$, so $degree(x) \\le \\log_\\varphi n$ and** $$D(n) \\le \\lfloor \\log_\\varphi n \\rfloor = \\frac{\\lg n}{\\lg \\varphi} \\approx 1.4404 \\lg n = O(\\lg n).$$ This closes the loop: EXTRACT-MIN is $O(\\lg n)$ amortized after all.",
        detail: "Numbers: $n = 10 \\Rightarrow D \\le 4$; $n = 1000 \\Rightarrow D \\le 14$; $n = 2^{32} \\Rightarrow D \\le 46$ — versus 32 for a perfectly binomial structure. The 44% slack is the price of laziness.",
      },
    ],
    examples: [
      {
        title: "The minimal degree-3 tree is Fibonacci-sized",
        problem: "Construct the smallest subtree that can sit under a node $x$ of degree 3, and verify $N(x) \\ge F_5 = 5$.",
        steps: [
          { label: "Step 1: Apply the lemma", text: "Children in link order $y_1, y_2, y_3$ need degrees $\\ge 0, 0, 1$ respectively — so the third child cannot be a leaf." },
          { label: "Step 2: Build minimally", text: "Give $y_1$ and $y_2$ degree 0 (single nodes), and $y_3$ degree 1 (itself plus one leaf child). Total: $1 + 1 + 1 + 2 = 5$ nodes — a root with three children, one of which has a baby." },
          { label: "Step 3: Check the bound", text: "$F_{3+2} = F_5 = 5$ ✓ — the construction is tight. For degree 4 the same build gives $5 + F_4 = 5 + 3 = 8 = F_6$; for degree 5, $8 + F_5 = 13 = F_7$: the minimal sizes follow the Fibonacci recurrence exactly." },
        ],
        result: "Minimal sizes by degree: $1, 2, 3, 5, 8, 13, 21, 34, 55, \\dots$ — the Fibonacci sequence shifted, which is where the heap's name comes from.",
      },
      {
        title: "Capping degrees at $n = 1000$",
        problem: "An $n = 1000$ node Fibonacci heap: what is the largest degree any node can carry?",
        steps: [
          { label: "Step 1: Translate to Fibonacci", text: "A degree-$d$ node needs $n \\ge F_{d+2}$. Compute: $F_{15} = 610$, $F_{16} = 987$, $F_{17} = 1597$." },
          { label: "Step 2: Solve", text: "$F_{16} = 987 \\le 1000$ permits $d + 2 = 16$, i.e. $d = 14$; $F_{17} = 1597 > 1000$ forbids $d = 15$." },
          { label: "Step 3: Cross-check the closed form", text: "$\\log_\\varphi 1000 = \\ln 1000 / \\ln \\varphi = 6.9078 / 0.4812 = 14.36$, and $\\lfloor 14.36 \\rfloor = 14$ ✓ — the table and the logarithm agree exactly." },
          { label: "Step 4: The extract-min bill", text: "CONSOLIDATE needs an array of size $D(n) + 1 = 15$ and does $O(t + 14)$ work — a very small constant in front of the $\\lg n$." },
        ],
        result: "$D(1000) = 14$; any node claiming degree 15 would need at least $F_{17} = 1597 > 1000$ nodes beneath it.",
      },
    ],
    keyTakeaways: [
      "The linking-order lemma ($y_i.degree \\ge i - 2$) holds because consolidation links equal-degree roots and the mark bit limits each child to one loss since linking.",
      "A degree-$d$ node anchors at least $F_{d+2}$ nodes — Fibonacci-fat trees are the mark bit's structural dividend.",
      "$D(n) \\le \\lfloor \\log_\\varphi n \\rfloor \\approx 1.4404 \\lg n$ completes the analysis: EXTRACT-MIN and DELETE are $O(\\lg n)$ amortized.",
    ],
    quiz: [
      {
        q: "The smallest possible number of nodes in the subtree rooted at a degree-8 node is:",
        options: ["$34$", "$46$", "$55$", "$21$"],
        answer: 2,
        explanation: "$N(x) \\ge F_{8+2} = F_{10} = 55$. The distractors are $F_9 = 34$ (off by one index), the degree bound for $2^{32}$ nodes, and $F_8 = 21$.",
      },
      {
        q: "The lemma $y_i.degree \\ge i - 2$ for the $i$-th-linked child relies on which two facts?",
        options: [
          "that Fibonacci-heap trees are binomial, and keys are distinct",
          "that consolidation links equal-degree roots — so $y_i$ had degree $\\ge i-1$ when linked — and the mark bit ensures it lost at most one child since",
          "that the root list is circular, and $H.min$ is always correct",
          "that cascading cuts stop at roots, and marks are cleared by UNION",
        ],
        answer: 1,
        explanation: "Equal degrees at link time give $y_i$ degree $\\ge i - 1$; the one-loss mark invariant shaves at most 1, leaving $\\ge i - 2$. Remove either fact and the lemma — and the whole degree bound — collapses.",
      },
      {
        q: "For $n = 2^{32}$ nodes, the maximum degree is at most:",
        options: ["$32$", "$46$", "$64$", "$16$"],
        answer: 1,
        explanation: "$D(n) \\le 1.4404 \\lg n = 1.4404 \\cdot 32 = 46.09$, so $D \\le 46$. The answer 32 is the binomial-heap value — laziness costs 44% more degree.",
      },
      {
        q: "The structure is called a Fibonacci heap because:",
        options: [
          "Fibonacci invented mergeable heaps",
          "the minimum subtree sizes follow the Fibonacci recurrence — a degree-$d$ node needs at least $F_{d+2}$ nodes",
          "the number of trees after consolidation is always $F_n$",
          "the potential function sums Fibonacci numbers",
        ],
        answer: 1,
        explanation: "The size lemma $N(x) \\ge F_{degree(x)+2}$ is the namesake: the laziest legal trees are exactly Fibonacci-sized, which is what keeps degrees logarithmic despite arbitrary cutting.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "The D(n) = O(lg n) degree bound, proved from the golden ratio",
        blocks: [
          {
            kind: "para",
            body: "The chapter has promised $D(n) = O(\\lg n)$ since Section 19.2, and everything now hangs on delivering it: EXTRACT-MIN is $O(D(n))$ amortized, and CONSOLIDATE allocates an array of size $D(n)+1$. The proof is a chain of four links: **equal-degree linking** (from CONSOLIDATE), **one loss per child** (from the mark bit), **Fibonacci-size subtrees** (by induction), and **golden-ratio growth** (Binet). Here is the whole chain, with nothing borrowed.",
          },
          {
            kind: "theorem",
            heading: "Linking-order lemma",
            body: "Let $x$ be any node of a Fibonacci heap, and let $y_1, y_2, \\dots, y_d$ be the children of $x$ in the order in which they were linked to $x$, from earliest to latest. Then $y_i.degree \\ge i - 2$ for all $i$.",
          },
          {
            kind: "proof",
            heading: "Why the children stay fat",
            body: "When $y_i$ was linked to $x$, FIB-HEAP-LINK had just merged two roots of equal degree, so at that moment $y_i.degree = x.degree$ exactly. And $x$ already had children $y_1, \\dots, y_{i-1}$ — at least $i - 1$ children — so $y_i.degree \\ge i - 1$ at link time. Since then, $y_i$ has lost at most one child: a first loss sets $y_i.mark$, and a *second* loss would have cut $y_i$ off $x$ entirely (CASCADING-CUT), contradicting that it is still a child. Hence $y_i.degree \\ge (i-1) - 1 = i - 2$. $\\square$ — Observe where the mark bit enters: it is the entire content of the second sentence. Without it, an adversary could strip $y_d$ down to degree 0 and the analysis dies; with it, every child carries $i-2$ degrees of obligation.",
          },
          {
            kind: "theorem",
            heading: "Fibonacci size lemma",
            body: "For every node $x$ in a Fibonacci heap, $N(x) \\ge F_{x.degree + 2}$, where $N(x)$ counts the nodes in the subtree rooted at $x$.",
          },
          {
            kind: "proof",
            heading: "Induction on the degree",
            body: "For $d = 0, 1, 2$ the claim reads $N \\ge F_2, F_3, F_4 = 1, 2, 3$: a degree-$d$ node has $d$ children plus itself, and $1 + d \\ge F_{d+2}$ for $d \\le 2$ ✓. For $d \\ge 3$, write the children in link order. By the lemma $y_i.degree \\ge \\max(i - 2, 0)$, so by induction $N(y_i) \\ge F_{\\max(i-2,0) + 2}$: that is $F_2 = 1$ for $i = 1, 2$ and $F_i$ for $i \\ge 3$. Summing, $$N(x) \\;=\\; 1 + \\sum_{i=1}^{d} N(y_i) \\;\\ge\\; 1 + F_2 + F_2 + \\sum_{i=3}^{d} F_i.$$ Now use the Fibonacci telescoping identity $\\sum_{i=1}^{d} F_i = F_{d+2} - 1$, i.e. $\\sum_{i=3}^{d} F_i = F_{d+2} - 1 - F_1 - F_2 = F_{d+2} - 3$. Then $N(x) \\ge 1 + 1 + 1 + (F_{d+2} - 3) = F_{d+2}$. $\\square$",
          },
          {
            kind: "derivation",
            heading: "From Binet to the 1.4404 constant",
            body: "First, $F_k \\ge \\varphi^{k-2}$ for $k \\ge 2$, by induction: the bases are $F_2 = 1 = \\varphi^0$ and $F_3 = 2 > \\varphi$, and the step is the golden-ratio identity itself: $F_{k+1} = F_k + F_{k-1} \\ge \\varphi^{k-2} + \\varphi^{k-3} = \\varphi^{k-3}(1 + \\varphi) = \\varphi^{k-3} \\cdot \\varphi^2 = \\varphi^{k-1}$. (The same identity explains Binet's formula $F_k = (\\varphi^k - \\hat\\psi^k)/\\sqrt 5$: the sequences $\\varphi^k$ and $\\hat\\psi^k$ both satisfy $s_k = s_{k-1} + s_{k-2}$.) Now let $x$ be any node of an $n$-node heap with $d = x.degree$: $$n \\;\\ge\\; N(x) \\;\\ge\\; F_{d+2} \\;\\ge\\; \\varphi^{d} \\quad\\Longrightarrow\\quad d \\;\\le\\; \\log_\\varphi n.$$ Converting bases, $\\log_\\varphi n = \\lg n / \\lg \\varphi$ and $\\lg \\varphi = \\ln \\varphi / \\ln 2 = 0.4812 / 0.6931 = 0.6942$, so $D(n) \\le \\lfloor \\log_\\varphi n \\rfloor = 1.4404 \\lg n$. Spot checks: $n = 10$: $1.4404 \\cdot 3.32 = 4.78 \\to 4$; $n = 10^3$: $14.36 \\to 14$ (matching $F_{16} = 987 \\le 1000 < F_{17}$); $n = 2^{32}$: $46.09 \\to 46$.",
          },
          {
            kind: "example",
            heading: "The minimal trees, degree by degree",
            body: "The bound is tight in shape: build a root, link children of degrees $0, 0, 1, 2, 3, \\dots$ beneath it (each new child needs degree $i-2$, and linking it raises the root's degree to $i$). The resulting minimal subtree sizes are exactly $1, 2, 3, 5, 8, 13, 21, 34, 55$ for degrees $0$ through $8$ — the Fibonacci sequence with $F_{d+2}$ nodes at degree $d$. Such *Fibonacci trees* are what the mark bit forces every heap to imitate: an adversary may cut, but only once per child, and the recurrence rebuilds itself from the wreckage.",
          },
          {
            kind: "remark",
            body: "Two historical notes. First, the 1.4404 constant is the visible price of laziness: a binomial heap of $n$ nodes caps degrees at $\\lfloor \\lg n \\rfloor$, while a Fibonacci heap pays a 44% premium for its $O(1)$ decrease-key — a trade overwhelmingly worth making in Dijkstra ($O(V \\lg V + E)$ instead of $O(E \\lg V)$) and Prim. Second, the structure is Fredman and Tarjan's (1987), and its name records exactly this section: heaps whose worst-case trees are Fibonacci trees. Their practical cousin, the **pairing heap**, achieves similar performance with simpler code, but to this day no $O(1)$ amortized decrease-key bound has been proved for it — Fibonacci heaps remain the canonical structure with the guarantee.",
          },
        ],
      },
    ],
  },
]
