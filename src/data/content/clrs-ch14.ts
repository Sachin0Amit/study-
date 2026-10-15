import type { SectionContent } from "../library"

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition (Cormen, Leiserson, Rivest
// & Stein, MIT Press 2009). Chapter 14: Augmenting Data Structures
// (14.1 – 14.3). Master study content.
// ============================================================================

export const clrsCh14Content: SectionContent[] = [
  // ---------------------------------------------------------------- 14.1
  {
    sectionId: "clrs-ch14-s1",
    readingTime: 6,
    intro: "Chapter 12 answered order queries — what is the $i$-th smallest key? — with an $\\Theta(n)$ scan, because a plain BST stores no order information beyond its shape. Augment every node of a red-black tree with the size of its subtree and both directions of the query collapse to $O(\\lg n)$: OS-SELECT consumes ranks while descending the tree, and OS-RANK produces them while climbing back up.",
    objectives: [
      "Define the order-statistic tree and its size field, including the sentinel's value",
      "Execute OS-SELECT and OS-RANK step by step with real subtree sizes",
      "Explain how insertions, deletions and rotations maintain the size field in O(lg n)"
    ],
    concepts: [
      {
        term: "Order-statistic tree",
        kind: "definition",
        statement: "An **order-statistic tree** is a red-black tree in which each node $x$ stores an extra field $x.size$: the number of internal nodes in the subtree rooted at $x$, **including $x$ itself**. The sentinel satisfies $T.nil.size = 0$, so the identity $x.size = x.left.size + x.right.size + 1$ holds at every node.",
        detail: "Nothing else changes: the tree still obeys all five red-black properties, and the size field is carried through every update — the machinery of Section 14.2."
      },
      {
        term: "OS-SELECT",
        kind: "method",
        statement: "**OS-SELECT**$(x, i)$ returns the node with the $i$-th smallest key in the subtree rooted at $x$: let $r = x.left.size + 1$ — the rank of $x$ **within its own subtree**. If $i = r$, return $x$. If $i < r$, recurse into the left subtree with the same $i$. If $i > r$, recurse into the right subtree with $i - r$.",
        detail: "Each level does $O(1)$ work, so on a red-black tree (height $O(\\lg n)$ by Lemma 13.1) OS-SELECT runs in $O(\\lg n)$."
      },
      {
        term: "OS-RANK",
        kind: "method",
        statement: "**OS-RANK**$(T, x)$ computes the rank of node $x$ among all keys: initialize $r = x.left.size + 1$ and $y = x$; while $y \\ne T.root$, if $y$ is a **right** child, add $y.p.left.size + 1$ to $r$ (that whole subtree precedes $y$), then set $y = y.p$. Return $r$.",
        detail: "Each iteration climbs one level, so OS-RANK is also $O(\\lg n)$. A left child adds nothing: its parent precedes it, but so does everything the loop already counted."
      },
      {
        term: "Maintaining sizes through updates",
        kind: "insight",
        statement: "On **insertion**, increment the size of every node on the descent path before splicing the new node in — $O(\\lg n)$ writes — and give each of the fixup's at most 2 rotations its $O(1)$ size fix. On **deletion**, sizes change only for nodes on the path from the root to the physically removed node, plus $O(1)$ nodes per rotation (at most 3) — again $O(\\lg n)$.",
        detail: "Either operation keeps the $O(\\lg n)$ running time: the maintenance work rides along the path the algorithm already walks."
      },
      {
        term: "Rank and select are inverses",
        kind: "insight",
        statement: "$\\text{OS-SELECT}(T, \\text{OS-RANK}(T, x)) = x$: the two procedures read the same size bookkeeping from opposite directions — select spends ranks going down, rank collects them coming up. Together they make the tree a **dynamic sorted array**: insert, delete, locate the $i$-th smallest, and rank any key, all in $O(\\lg n)$.",
        detail: "This is the first payoff of augmentation: an operation Chapter 12 could not do faster than $\\Theta(n)$ now costs one root-to-node walk."
      }
    ],
    figures: [
      {
        caption: "An order-statistic tree on the keys $\\{14, 17, 21, 26, 30, 41, 47\\}$ — a red-black tree with one extra field: the subtree size (green badges), with $T.nil.size = 0$. OS-SELECT$(T, 5)$ descends 26 → 41 → 30: at the root, 26's own rank is $3 + 1 = 4 < 5$, so the search continues into the right subtree for the $(5 - 4)$-th = 1st key; at 41, the rank $r = 1 + 1 = 2 > 1$ sends the search left to 30, where $r = 0 + 1 = 1 = i$ and 30 is returned. OS-RANK(30) climbs the reverse path — 30 → 41 → 26 — adding $26.left.size + 1 = 4$ when it passes 41 as a right child, giving rank 5.",
        svg: '<svg viewBox="0 0 720 295" width="100%" role="img" aria-label="An order-statistic tree on seven keys with subtree sizes shown as green badges"><text x="520" y="24" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor"><tspan>legend:</tspan></text><rect x="566" y="15" width="11" height="11" fill="#ef4444"/><text x="581" y="24" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">red</text><rect x="620" y="15" width="11" height="11" fill="#0f172a" stroke="currentColor" stroke-width="1"/><text x="635" y="24" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">black</text><line x1="360" y1="60" x2="195" y2="140" stroke="currentColor" stroke-width="1.6"/><line x1="360" y1="60" x2="525" y2="140" stroke="currentColor" stroke-width="1.6"/><line x1="195" y1="140" x2="110" y2="220" stroke="currentColor" stroke-width="1.6"/><line x1="195" y1="140" x2="280" y2="220" stroke="currentColor" stroke-width="1.6"/><line x1="525" y1="140" x2="450" y2="220" stroke="currentColor" stroke-width="1.6"/><line x1="525" y1="140" x2="620" y2="220" stroke="currentColor" stroke-width="1.6"/><circle cx="360" cy="60" r="17" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="360" y="65" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">26</text><circle cx="195" cy="140" r="17" fill="#ef4444"/><text x="195" y="145" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">17</text><circle cx="525" cy="140" r="17" fill="#ef4444"/><text x="525" y="145" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">41</text><circle cx="110" cy="220" r="17" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="110" y="225" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">14</text><circle cx="280" cy="220" r="17" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="280" y="225" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">21</text><circle cx="450" cy="220" r="17" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="450" y="225" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">30</text><circle cx="620" cy="220" r="17" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="620" y="225" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">47</text><text x="390" y="68" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">size 7</text><text x="219" y="148" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">size 3</text><text x="549" y="148" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">size 3</text><text x="134" y="228" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">size 1</text><text x="304" y="228" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">size 1</text><text x="474" y="228" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">size 1</text><text x="644" y="228" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">size 1</text><text x="360" y="270" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.85">OS-SELECT(T, 5) walks 26 → 41 → 30 · OS-RANK(30) climbs back 30 → 41 → 26</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Select and rank on seven keys",
        problem: "The order-statistic tree of the figure has root 26 (size 7), left child 17 (size 3) with children 14 and 21 (size 1 each), and right child 41 (size 3) with children 30 and 47 (size 1 each). Find the 5th smallest key, then compute the rank of key 30.",
        steps: [
          { label: "Step 1: OS-SELECT at the root", text: "At 26: $r = 26.left.size + 1 = 17.size + 1 = 3 + 1 = 4$. Since $i = 5 > 4$, the answer lies in the right subtree with the adjusted order statistic $i - r = 1$ — the smallest key of 41's subtree." },
          { label: "Step 2: OS-SELECT at 41", text: "At 41: $r = 41.left.size + 1 = 30.size + 1 = 1 + 1 = 2$. Since $i = 1 < 2$, the 1st smallest key of this subtree lies in 41's left subtree — descend to 30." },
          { label: "Step 3: OS-SELECT at 30", text: "At 30: $r = 30.left.size + 1 = 0 + 1 = 1$, which equals $i$ — return 30. The key 41 itself was never even tested as a candidate: its rank 2 within its own subtree already overshoots $i = 1$." },
          { label: "Step 4: OS-RANK of 30 — the climb", text: "Start $r = 30.left.size + 1 = 1$, $y = 30$. Node 30 is a left child of 41 — nothing added. Node 41 is a right child of the root 26, so add $26.left.size + 1 = 3 + 1 = 4$: $r = 1 + 4 = 5$. The climb ends at the root." }
        ],
        result: "The 5th smallest key is 30 — and the rank of 30 is 5, since the sorted order is 14, 17, 21, 26, 30, 41, 47. Select and rank agree, as inverses must."
      },
      {
        title: "Maintaining size through insertion",
        problem: "Insert key $8$ into order-statistic tree with root $10$ ($size = 7$). Update sizes on the descent.",
        steps: [
          { label: "Descend", text: "$8 < 10$: go left, increment $10.size$ to $8$ on the way down (every ancestor's subtree gains one node)." },
          { label: "Continue", text: "At node $5$ ($size = 3$): $8 > 5$, go right, increment $5.size$ to $4$." },
          { label: "Insert", text: "At $nil$ under $9$: splice red node $8$ with $size = 1$; $T.nil.size = 0$ by definition." },
          { label: "Rotations", text: "If FIXUP rotates, recompute the two rotated nodes' sizes from children ($size[x] = size[left]+size[right]+1$): $O(1)$ per rotation, $O(\\lg n)$ total." },
        ],
        result: "Sizes on the $10 \\to 5 \\to 9$ path each $+1$; rotations repair locally: augmentation costs $O(\\lg n)$ per update.",
      },
    ],
    keyTakeaways: [
      "An order-statistic tree is a red-black tree with one extra field per node: x.size, the internal-node count of its subtree, with T.nil.size = 0.",
      "OS-SELECT descends comparing i with r = left.size + 1; OS-RANK climbs adding left.size + 1 at each right-child edge — both O(lg n).",
      "Sizes ride through updates in O(lg n): one increment or decrement per level of the search path plus O(1) work per rotation."
    ],
    quiz: [
      {
        q: "In an order-statistic tree, the size field of an internal node whose two children are both the NIL sentinel equals:",
        options: ["0", "1", "2, counting the two NILs", "its key's rank in the tree"],
        answer: 1,
        explanation: "size counts internal nodes only — the node itself — while both NIL children contribute $T.nil.size = 0$. The rank is a global notion; size is purely local to the subtree."
      },
      {
        q: "OS-SELECT(x, i) computes r = x.left.size + 1 at each node because:",
        options: ["the left subtree contains exactly r nodes", "x's rank within its own subtree is r: all left.size nodes precede it, then x itself", "the right subtree always contains r − 1 nodes", "sizes exclude the node itself"],
        answer: 1,
        explanation: "Within the subtree rooted at x, exactly x.left.size keys are smaller than x's key — so x occupies position left.size + 1, the pivot the comparison against i needs."
      },
      {
        q: "While OS-RANK climbs from a node toward the root, when does it add to the running rank r?",
        options: ["at every ancestor it passes", "when y is a left child", "when y is a right child — the parent's entire left subtree plus the parent precede y", "only at the root, all at once"],
        answer: 2,
        explanation: "When y is a right child, everything in y.p's left subtree and y.p itself come before y in sorted order — contributing y.p.left.size + 1 to the rank."
      },
      {
        q: "To maintain size fields during an insertion, the nodes whose sizes must change are:",
        options: ["all n nodes of the tree", "the nodes on the path from the root down to the new node — each incremented by 1", "only the new node and its parent", "none — sizes recompute themselves lazily"],
        answer: 1,
        explanation: "Exactly the ancestors of the inserted node gain one internal descendant — the O(lg n)-long search path — plus O(1) rotated nodes if the fixup rotates."
      },
      // PYQ-pattern — order-statistic selection step (rephrased, values changed)
      {
        q: "In OS-SELECT at node $x$ with $x.left.size = 7$, searching for rank $i = 8$ does what?",
        options: ["Descends to the left child", "Returns the minimum of the right subtree", "Returns the successor of $x$", "Returns $x$ itself"],
        answer: 3,
        explanation: "Step 1 — Given: subtree sizes maintained, $x.left.size = 7$, target rank $i = 8$. Step 2 — Governing rank: $r = x.left.size + 1$ counts keys preceding $x$ within its subtree. Step 3 — Comparison: $r = 7 + 1 = 8 = i$, the exact-hit case, so the procedure returns $x$ itself. Step 4 — Sanity check: $i < r$ would descend left with unchanged $i$, $i > r$ would descend right with $i - r$, and the three cases partition all ranks. Step 5 — Distractor analysis: descending left suits $i \\le 7$, the minimum suits $i = 9$ only when the right child is a leaf path, and the successor belongs to a different query. Step 6 — Conclude: return $x$.",
      },
    ]
  },

  // ---------------------------------------------------------------- 14.2
  {
    sectionId: "clrs-ch14-s2",
    readingTime: 5,
    intro: "The size field of Section 14.1 was not luck — it is an instance of a general method. CLRS distills augmenting a data structure into a four-step recipe, and Theorem 14.1 identifies exactly when an augmented red-black tree maintains itself for free: whenever each node's new field can be recomputed from the node and its two children alone.",
    objectives: [
      "List and apply the four steps of the augmentation recipe",
      "State Theorem 14.1 and sketch why rotations are the only structural obstacle",
      "Recognize fields the theorem does not cover — and why they break",
    ],
    concepts: [
      {
        term: "The four-step recipe",
        kind: "method",
        statement: "To augment a data structure: (1) **choose** an underlying data structure (a red-black tree, here); (2) **augment** it — add the field you want (size, max, height, …); (3) **maintain** the field through every modifying operation without changing the operation's asymptotic running time; (4) **use** it — design the new operations the field enables (OS-SELECT, OS-RANK, INTERVAL-SEARCH).",
        detail: "CLRS warns the steps are not a one-shot pipeline: expect to iterate when step 3 or 4 exposes a poor choice made in step 2."
      },
      {
        term: "Theorem 14.1 — augmenting red-black trees",
        kind: "theorem",
        statement: "Suppose a field $f$ of a red-black tree node can be computed, for every node $x$, from the information stored in $x$, $x.left$ and $x.right$ — including their $f$ fields — in $O(1)$ time, and does not depend on colors. Then red-black trees maintain $f$ through insertion and deletion with $O(1)$ extra work per rotation and $O(1)$ work per node on the search path: the $O(\\lg n)$ running times are unchanged.",
        detail: "Subtree size qualifies ($x.size = x.left.size + x.right.size + 1$); so do subtree maximum, subtree height, and the max endpoint of Section 14.3."
      },
      {
        term: "Why the proof works",
        kind: "insight",
        statement: "Insertion and deletion change tree **structure** only through rotations — at most 2 per insert, 3 per delete — and each rotation re-parents only $O(1)$ nodes, whose $f$ values are recomputed in $O(1)$ from their new children. The $O(\\lg n)$ nodes on the search path whose subtrees gained or lost a node are updated in $O(1)$ each as the algorithm already walks past them. The $O(\\lg n)$ **color flips** of the fixups never touch $f$ — that is where the color-independence hypothesis earns its keep.",
        detail: "This is the deeper reason Section 13's analysis was done so carefully: the rotation budget of the fixups is exactly the maintenance budget of any augmentation."
      },
      {
        term: "When the recipe breaks",
        kind: "insight",
        statement: "The hypothesis is local: $f(x)$ may look at $x$ and its children **only**. The **depth** of a node depends on its ancestors — one insertion can invalidate $\\Theta(n)$ stored depths at once. **Black-height** fails more subtly: $bh(x)$ is computable from a child's $bh$, but a single color flip changes the black-height of **every ancestor** of the recolored node, so the fixups' $O(\\lg n)$ recolorings ripple upward and the proof's color-independence is lost.",
        detail: "For fields outside Theorem 14.1, one changes the data structure, stores a different field, or pays for the maintenance explicitly — never assume augmentation is free."
      },
      {
        term: "Minimum augmentation as second example",
        kind: "method",
        statement: "Store $min[x] = \\min(x.key, min[x.left], min[x.right])$ with $min[T.nil] = \\infty$: recomputable from children in $O(1)$, hence maintainable through rotations by Theorem 14.1. Supports SUBTREE-MINIMUM queries in $O(\\lg n)$.",
        detail: "Same recipe as size: choose field ($min$), define from children, verify rotations touch only $O(1)$ nodes. Max, sum and height all qualify; depth and inorder rank do not, since they depend on ancestors, not children.",
      },
    ],
    examples: [
      {
        title: "Two writes maintain size through a rotation",
        problem: "A fragment of an order-statistic tree has node x with left subtree α of 4 internal nodes, and right child y whose subtrees are β (3 internal nodes) and γ (5 internal nodes). Show that LEFT-ROTATE(x) preserves every size in the fragment.",
        steps: [
          { label: "Step 1: Sizes before", text: "$y.size = 3 + 5 + 1 = 9$ (β + γ + y itself). $x.size = 4 + 9 + 1 = 14$ — x roots the whole fragment, which holds $4 + 3 + 5 + 2 = 14$ internal nodes." },
          { label: "Step 2: The rotation moves β", text: "After LEFT-ROTATE(x), x's children are α and β, and y's children are x and γ. No subtree's contents change — only parentage." },
          { label: "Step 3: Recompute, in order", text: "First $x.size = 4 + 3 + 1 = 8$ (α + β + x); then $y.size = x.size + 5 + 1 = 8 + 5 + 1 = 14$ — y now roots the same 14-node fragment. The order matters: y's update must read x's **new** size." },
          { label: "Step 4: Nobody else changes", text: "Every other node of the tree has the same subtree as before — ancestors of the fragment kept all their descendants, so their sizes remain correct." }
        ],
        result: "Exactly two O(1) writes re-establish every size in the rotated fragment — precisely what Theorem 14.1 promises for any field, on any rotation."
      },
      {
        title: "Augmenting with subtree minima",
        problem: "After LEFT-ROTATE on $x$ with $y = x.right$, recompute $min$ for $x$ then $y$.",
        steps: [
          { label: "Before", text: "$min[x]$ and $min[y]$ covered old subtrees; rotation rehangs $y.left = \\beta$ to $x.right$." },
          { label: "Fix $x$ first", text: "$min[x] = \\min(x.key, min[x.left], min[\\beta])$: $x$'s children are final, so $x$ is final." },
          { label: "Fix $y$", text: "$min[y] = \\min(y.key, min[x], min[y.right])$: uses the fresh $min[x]$." },
          { label: "Order matters", text: "Bottom-up ($x$ before $y$) is forced: $y$'s field depends on $x$'s. Same two-write pattern as size maintenance." },
        ],
        result: "Two $O(1)$ recomputations restore $min$ after any rotation; the recipe generalizes to any child-computable field.",
      },
    ],
    keyTakeaways: [
      "Recipe: choose the structure, add the field, maintain it through the modifying operations, then exploit it with new operations — iterating as needed.",
      "Theorem 14.1: fields computable in O(1) from node + children (colors excluded) ride along for free — O(1) per rotation and O(1) per search-path node.",
      "Locality is the whole game: depth fails because it looks at ancestors, and black-height fails because color flips ripple upward through ancestors."
    ],
    quiz: [
      {
        q: "The four-step augmentation recipe, in order, is:",
        options: ["augment, choose, use, maintain", "choose, augment, maintain, use", "use, maintain, augment, choose", "maintain, choose, use, augment"],
        answer: 1,
        explanation: "Choose an underlying structure, add the field, keep it maintained through updates without asymptotic cost, then build the new operations that exploit it."
      },
      {
        q: "Theorem 14.1 guarantees maintenance for a field f when:",
        options: ["f changes only O(1) values per insertion", "f can be computed from the node and its two children in O(1) time", "f is monotone along root-to-leaf paths", "f depends only on the node's key"],
        answer: 1,
        explanation: "Locality of computation — from x, x.left and x.right (colors aside) — is the hypothesis; then rotations cost O(1) each and the search path O(lg n) total, both absorbed."
      },
      {
        q: "Which field does the recipe NOT cover, and for what reason?",
        options: ["subtree size — too many nodes change per insert", "subtree maximum — it needs a full subtree scan", "node depth — one insertion can change Θ(n) stored depths", "number of NIL leaves below a node — not locally computable"],
        answer: 2,
        explanation: "Depth depends on ancestors: deepening one internal edge invalidates every descendant's stored depth — Θ(n) of them — so the locality hypothesis fails. (Leaf counts, like sizes, are locally computable.)"
      },
      {
        q: "During RB-INSERT-FIXUP, the structural events that require augmented-field updates are:",
        options: ["the O(lg n) color flips", "at most 2 rotations", "the NIL sentinel comparisons", "the final root recoloring"],
        answer: 1,
        explanation: "Color flips are invisible to any field that satisfies Theorem 14.1's hypothesis; only the constant number of rotations re-parent nodes, each fixable in O(1)."
      }
    ]
  },

  // ---------------------------------------------------------------- 14.3
  {
    sectionId: "clrs-ch14-s3",
    readingTime: 7,
    intro: "An interval tree answers whether anything overlaps $[a, b]$ in logarithmic time by keying a red-black tree on each interval's left endpoint and augmenting each node with the maximum right endpoint in its subtree. The overlap relation splits into exactly three exhaustive cases — the interval trichotomy — and the max field is precisely what lets the search prune one child at every step.",
    objectives: [
      "Apply the closed-interval overlap test and state the interval trichotomy",
      "Define the max augmentation and verify it on a concrete tree",
      "Trace INTERVAL-SEARCH and explain why each turn it takes is safe"
    ],
    concepts: [
      {
        term: "Intervals and overlap",
        kind: "definition",
        statement: "A **closed interval** is a pair $[a, b]$ with $a \\le b$. Two intervals $i = [i.low, i.high]$ and $i' = [i'.low, i'.high]$ **overlap** exactly when $i.low \\le i'.high$ **and** $i'.low \\le i.high$ — each starts no later than the other ends.",
        detail: "Closed endpoints make single-point sharing count as overlap: $[3, 7]$ and $[7, 9]$ overlap at 7."
      },
      {
        term: "The interval trichotomy",
        kind: "law",
        statement: "For any two closed intervals, **exactly one** of three relations holds: (1) they overlap; (2) $i$ lies strictly left of $i'$, meaning $i.high < i'.low$; (3) $i$ lies strictly right of $i'$, meaning $i'.high < i.low$. No fourth possibility exists.",
        detail: "The trichotomy is the decision backbone of every interval algorithm — overlap tests, sweep-line event ordering, and the search below all branch on it."
      },
      {
        term: "The max augmentation",
        kind: "notation",
        statement: "An **interval tree** is a red-black tree keyed by the low endpoint $x.int.low$, in which each node also stores $x.max = \\max(x.int.high,\\; x.left.max,\\; x.right.max)$ with $T.nil.max = -\\infty$: the largest right endpoint anywhere in $x$'s subtree. By Theorem 14.1 the field survives insertion and deletion in $O(\\lg n)$.",
        detail: "Note that x.max can come entirely from the left subtree — a node's own interval is only one candidate among the max, not its source."
      },
      {
        term: "INTERVAL-SEARCH",
        kind: "method",
        statement: "To find one interval overlapping $i$: start at the root $x$; while $x \\ne$ NIL and $x.int$ does not overlap $i$: if $x.left \\ne$ NIL and $x.left.max \\ge i.low$, set $x = x.left$ — the left subtree might contain an interval reaching far enough to the right — otherwise set $x = x.right$. Return $x$ (NIL means no interval in the tree overlaps $i$). The loop invariant: if the tree contains an overlap for $i$, the subtree rooted at $x$ contains one.",
        detail: "Each iteration is $O(1)$, so the search is $O(\\lg n)$ — the height bound of Chapter 13 again doing the work."
      },
      {
        term: "Why each turn is safe — and listing all overlaps",
        kind: "insight",
        statement: "**Going right is safe**: $x.left.max < i.low$ means every interval in the left subtree ends strictly left of $i$ — trichotomy case 2, no overlap there. **Going left is safe**: suppose an overlapping interval $j$ hides in the right subtree; then $j.low \\ge x.int.low$ and the overlap force $i.high \\ge j.low \\ge x.int.low$. Now let $t$ be the interval achieving $x.left.max \\ge i.low$: if $t$ did not overlap $i$, then $t.low > i.high \\ge x.int.low$, contradicting $t$ lying in the **left** subtree (where all lows are $\\le x.int.low$). So the left subtree contains an overlap. To list **all** $k$ overlaps: search, report, delete, and repeat, then reinsert — $O(k \\lg n)$.",
        detail: "The proof of the left turn is the subtle half of the chapter: it needs the full strength of both the max field and the search-tree keying."
      }
    ],
    figures: [
      {
        caption: "An interval tree keyed by low endpoints, each node's $\\max$ field in green. The bars place all seven intervals on a common axis; the query $i = [22, 25]$ is dashed in green. INTERVAL-SEARCH starts at the root $[16, 21]$: no overlap since $21 < 22$, and it goes **left** because the left child's $max = 23 \\ge i.low = 22$. At $[8, 9]$ there is again no overlap, and the left child's $max = 8 < 22$ forces a step right to $[15, 23]$, which overlaps $i$ (highlighted). Note that $[8, 9]$'s $\\max$ of 23 comes entirely from its right subtree — not from its own endpoint — which is exactly what makes the left turn at the root correct.",
        svg: '<svg viewBox="0 0 720 455" width="100%" role="img" aria-label="An interval tree with max-endpoint annotations above a bar chart of the intervals and the query interval"><text x="463" y="48" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">query i = [22, 25]</text><rect x="436" y="54" width="54" height="9" fill="#10b981" fill-opacity="0.25" stroke="#10b981" stroke-width="1" stroke-dasharray="4 3"/><line x1="40" y1="78" x2="690" y2="78" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><line x1="40" y1="74" x2="40" y2="82" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><line x1="130" y1="74" x2="130" y2="82" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><line x1="220" y1="74" x2="220" y2="82" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><line x1="310" y1="74" x2="310" y2="82" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><line x1="400" y1="74" x2="400" y2="82" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><line x1="490" y1="74" x2="490" y2="82" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><line x1="580" y1="74" x2="580" y2="82" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><line x1="670" y1="74" x2="670" y2="82" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><text x="40" y="95" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.7">0</text><text x="130" y="95" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.7">5</text><text x="220" y="95" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.7">10</text><text x="310" y="95" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.7">15</text><text x="400" y="95" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.7">20</text><text x="490" y="95" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.7">25</text><text x="580" y="95" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.7">30</text><text x="670" y="95" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.7">35</text><rect x="130" y="104" width="54" height="10" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="157" y="112" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor">[5, 8]</text><rect x="310" y="104" width="144" height="10" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="382" y="112" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor">[15, 23]</text><rect x="490" y="104" width="90" height="10" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="535" y="112" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor">[25, 30]</text><rect x="184" y="126" width="18" height="10" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="180" y="134" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor">[8, 9]</text><rect x="328" y="126" width="90" height="10" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="373" y="134" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor">[16, 21]</text><circle cx="508" cy="131" r="4.5" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="517" y="135" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor">[26, 26]</text><rect x="346" y="148" width="36" height="10" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="364" y="156" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="8.5" fill="currentColor">[17, 19]</text><line x1="360" y1="210" x2="195" y2="290" stroke="currentColor" stroke-width="1.6"/><line x1="360" y1="210" x2="525" y2="290" stroke="currentColor" stroke-width="1.6"/><line x1="195" y1="290" x2="110" y2="370" stroke="currentColor" stroke-width="1.6"/><line x1="195" y1="290" x2="280" y2="370" stroke="currentColor" stroke-width="1.6"/><line x1="525" y1="290" x2="450" y2="370" stroke="currentColor" stroke-width="1.6"/><line x1="525" y1="290" x2="620" y2="370" stroke="currentColor" stroke-width="1.6"/><rect x="321" y="195" width="78" height="30" rx="8" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="360" y="214" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="700" fill="#f8fafc">[16, 21]</text><rect x="156" y="275" width="78" height="30" rx="8" fill="#ef4444"/><text x="195" y="294" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="700" fill="#f8fafc">[8, 9]</text><rect x="486" y="275" width="78" height="30" rx="8" fill="#ef4444"/><text x="525" y="294" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="700" fill="#f8fafc">[25, 30]</text><rect x="71" y="355" width="78" height="30" rx="8" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="110" y="374" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="700" fill="#f8fafc">[5, 8]</text><rect x="241" y="355" width="78" height="30" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2.5"/><text x="280" y="374" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="700" fill="#f8fafc">[15, 23]</text><rect x="411" y="355" width="78" height="30" rx="8" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="450" y="374" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="700" fill="#f8fafc">[17, 19]</text><rect x="581" y="355" width="78" height="30" rx="8" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="620" y="374" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="700" fill="#f8fafc">[26, 26]</text><text x="409" y="214" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">max 30</text><text x="244" y="294" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">max 23</text><text x="574" y="294" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">max 30</text><text x="158" y="374" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">max 8</text><text x="328" y="374" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">max 23</text><text x="498" y="374" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">max 19</text><text x="668" y="374" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">max 26</text><rect x="170" y="424" width="12" height="12" fill="#ef4444"/><text x="188" y="434" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">red node</text><rect x="275" y="424" width="12" height="12" fill="#0f172a" stroke="currentColor" stroke-width="1"/><text x="293" y="434" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">black node</text><rect x="400" y="424" width="12" height="12" fill="#10b981" fill-opacity="0.25" stroke="#10b981" stroke-width="1"/><text x="418" y="434" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">max field</text><text x="360" y="450" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.75">x.max = max(x.int.high, x.left.max, x.right.max) · key = low endpoint · T.nil.max = −∞</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Searching for [22, 25]",
        problem: "Using the interval tree of the figure — root [16, 21] with max 30; left child [8, 9] with max 23; right child [25, 30] with max 30; leaves [5, 8] (max 8), [15, 23] (max 23), [17, 19] (max 19), [26, 26] (max 26) — trace INTERVAL-SEARCH for the query $i = [22, 25]$.",
        steps: [
          { label: "Step 1: Test the root", text: "$x = [16, 21]$: does it overlap $i$? Check $16 \\le 25$ — yes — and $22 \\le 21$ — no. The overlap test fails ($21 < 22$: the root ends strictly left of the query), so the search continues." },
          { label: "Step 2: Decide the turn", text: "$x.left = [8, 9]$ is not NIL and $x.left.max = 23 \\ge i.low = 22$ — the left subtree contains an interval reaching at least to 22 — so the search goes left." },
          { label: "Step 3: Test [8, 9]", text: "$8 \\le 25$ but $22 \\le 9$ fails: no overlap. Its left child $[5, 8]$ has $max = 8 < 22$, so no interval in that whole subtree can reach the query — the search must go right." },
          { label: "Step 4: Arrive at [15, 23]", text: "$x = [15, 23]$: $15 \\le 25$ and $22 \\le 23$ — both hold, so $[15, 23]$ overlaps the query. Return it." }
        ],
        result: "INTERVAL-SEARCH returns [15, 23] after three node visits. (The tree also holds another overlapping interval, [25, 30], which shares the point 25 with the query — the procedure returns some overlap, not all of them; listing all k overlaps by search-delete-repeat costs $O(k \\lg n)$.)"
      },
      {
        title: "No overlap: search exits at leaf",
        problem: "INTERVAL-SEARCH for $[22, 25]$ in tree where root $[16,21]$ has $max = 21$ in its left subtree path. Show the early exit.",
        steps: [
          { label: "Root", text: "$[16,21]$ vs $[22,25]$: $16 > 25$? No. $21 < 22$? Yes: no overlap ($b < c$ trichotomy case)." },
          { label: "Go right?", text: "Left child's $max = 10 < 22$: no interval left can overlap (all end before $22$ starts). Go right." },
          { label: "Right child $[25,30]$", text: "Overlap? $25 \\le 25$ and $22 \\le 30$: yes, return $[25,30]$. Had right been $nil$, search would report no overlap in $O(\\lg n)$." },
          { label: "Miss case", text: "Searching $[30,35]$ instead would descend to $nil$: each step prunes one child via $max$, so at most $h$ steps." },
        ],
        result: "Found $[25,30]$ overlapping $[22,25]$ in $O(h)$ steps; a miss would reach $nil$ after pruning with $max$ at each level.",
      },
    ],
    keyTakeaways: [
      "Closed intervals overlap iff i.low ≤ i'.high and i'.low ≤ i.high; the trichotomy — overlap, strictly left, strictly right — is exhaustive and exclusive.",
      "Key by low endpoint and store x.max = max of high endpoints in the subtree; Theorem 14.1 maintains it in O(1) per rotation.",
      "INTERVAL-SEARCH prunes with the max field and runs in O(lg n), returning one overlapping interval or NIL; enumerating all k overlaps costs O(k lg n)."
    ],
    quiz: [
      {
        q: "The intervals [3, 7] and [7, 9] (closed) stand in which trichotomy relation?",
        options: ["overlap — they share the point 7", "strictly left — [3, 7] ends before [7, 9] begins", "strictly right — [3, 7] starts after [7, 9] ends", "none of the three — closed intervals need a fourth case"],
        answer: 0,
        explanation: "The overlap test gives $3 \\le 9$ and $7 \\le 7$: both hold, so they overlap at exactly the point 7. Strictly-left would require $7 < 7$."
      },
      {
        q: "In an interval tree, the field x.max stores:",
        options: ["the maximum low endpoint in the subtree", "the maximum high endpoint anywhere in the subtree, including x's own interval", "the high endpoint of the subtree's rightmost interval", "the number of intervals in the subtree"],
        answer: 1,
        explanation: "$x.max = \\max(x.int.high, x.left.max, x.right.max)$ — the largest right endpoint in the whole subtree; the node's own interval is only one of the candidates."
      },
      {
        q: "INTERVAL-SEARCH(T, i) descends into the left child of x exactly when:",
        options: ["i overlaps x's own interval", "x.left ≠ NIL and x.left.max ≥ i.low", "x.left.max < i.low", "x.int.high < i.low"],
        answer: 1,
        explanation: "The left subtree might contain an interval whose high endpoint reaches the query's low endpoint — that is exactly $x.left.max \\ge i.low$. Overlap with x itself would have ended the loop."
      },
      {
        q: "To enumerate all k intervals that overlap a query interval, CLRS suggests:",
        options: ["a full Θ(n) inorder scan", "repeatedly search, report and delete, then reinsert the deleted intervals — O(k lg n)", "augmenting each node with the list of its overlaps", "rebuilding the tree for each query"],
        answer: 1,
        explanation: "Each of the k rounds costs one $O(\\lg n)$ search plus the delete and later reinsert — $O(k \\lg n)$ total, which is optimal up to the sorting bound for outputting k intervals."
      }
    ]
  }
]
