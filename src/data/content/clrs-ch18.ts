import type { SectionContent } from '../library'

// ============================================================================
// Cormen, Leiserson, Rivest, Stein — Introduction to Algorithms, 3rd Edition
// Chapter 18: B-Trees (Sections 18.1 – 18.3)
// Study content. Minimum degree t, height bound, split/insert, deletion.
// ============================================================================

export const clrsCh18Content: SectionContent[] = [
  // ---------------------------------------------------------------- 18.1
  {
    sectionId: "clrs-ch18-s1",
    readingTime: 6,
    intro: "Binary search trees make one comparison and follow one pointer per level, which is fine in RAM and catastrophic on disk, where every pointer dereference is a page fetch costing milliseconds. B-trees (Bayer and McCreight, 1972) fix this by making nodes huge: a node is sized to a disk page and holds hundreds of keys, so a search touches few pages even for billions of keys. The whole chapter hangs on one parameter — the minimum degree $t$ — and one theorem: the height is at most $\\log_t((n+1)/2)$.",
    objectives: [
      "State all four structural invariants of a B-tree with minimum degree $t$",
      "Prove the height bound $h \\le \\log_t((n+1)/2)$ and the occupancy range $2t^h - 1 \\le n \\le (2t)^h - 1$",
      "Compute page sizes and search depths for concrete $t$ and $n$",
    ],
    concepts: [
      {
        term: "B-tree",
        kind: "definition",
        statement: "A **B-tree** with minimum degree $t \\ge 2$ is a rooted tree storing keys (and satellite data) such that: every node $x$ holds $x.n$ keys in **nondecreasing** order $x.key_1 \\le x.key_2 \\le \\dots \\le x.key_{x.n}$; if $x$ is internal it has exactly $x.n + 1$ children $x.c_1, \\dots, x.c_{x.n+1}$; the keys of $x.c_i$ all lie in the interval $(x.key_{i-1}, x.key_i)$, which partitions the key space down the tree; and **all leaves have the same depth**.",
        detail: "A search therefore descends exactly one root-to-leaf path: at each node, the $n$ keys split the node's key range into $n+1$ subranges, and exactly one child's range contains the query.",
      },
      {
        term: "Minimum degree constraints",
        kind: "law",
        statement: "Besides the ordering invariants, a B-tree of minimum degree $t$ must satisfy: every node except the root holds **at least $t - 1$ and at most $2t - 1$ keys**; the root, if the tree is nonempty, holds **at least 1 and at most $2t - 1$ keys**. A node is **full** when it holds exactly $2t - 1$ keys.",
        detail: "So every internal node has between $t$ and $2t$ children (the root at least 2), and $t = 2$ gives the familiar 2-3-4 tree, where nodes hold 1 to 3 keys.",
      },
      {
        term: "Height bound",
        kind: "theorem",
        statement: "**If $n \\ge 1$, any $n$-key B-tree of height $h$ and minimum degree $t \\ge 2$ satisfies $h \\le \\log_t \\frac{n+1}{2}$.** *Proof sketch:* the sparsest tree has a 1-key root with 2 children, each depth-$i$ level having $\\ge 2t^{i-1}$ nodes with $\\ge t-1$ keys, so $n \\ge 1 + (t-1)\\sum_{i=1}^{h} 2t^{i-1} = 2t^h - 1$.",
        detail: "Solving $2t^h - 1 \\le n$ for $h$ gives the bound. The densest tree (every node full) holds exactly $(2t)^h - 1$ keys, so in general $2t^h - 1 \\le n \\le (2t)^h - 1$: B-trees are always at least half full, which is what makes the logarithm's base $t$ instead of 2.",
      },
      {
        term: "What the bound buys on disk",
        kind: "insight",
        statement: "A B-tree search reads $O(\\log_t n)$ pages and spends $O(t \\log_t n)$ CPU time (linear scan per node; $O(\\lg n)$ total if each node is binary-searched). Since $\\log_t n = \\lg n / \\lg t$, **each factor of $t$ shaves a proportional factor off the page count** — the trade RAM comparisons for disk seeks.",
        detail: "A red-black tree over $n = 2^{40}$ keys needs up to 40 page reads; a B-tree with $t = 256$ needs at most 5.",
      },
      {
        term: "Sizing $t$ to the disk page",
        kind: "method",
        statement: "Choose $t$ so a full node fills one page: with $2t-1$ keys and $2t$ pointers of 8 bytes each, a node holds $4t-1$ eight-byte slots, so an 8 KiB page fits $t = 256$ (511 keys, 512 pointers: $8184 \\le 8192$ bytes).",
        detail: "Databases and file systems (ext4, Btrfs, Postgres indexes) pick $t$ exactly this way; the tree shape is dictated by the hardware's page size.",
      },
    ],
    figures: [
      {
        caption: "A B-tree with minimum degree $t = 3$ and $n = 16$ keys. Non-root nodes hold between $t-1 = 2$ and $2t-1 = 5$ keys; the amber node is full. The height bound gives $h \\le \\log_3\\frac{n+1}{2} = \\log_3 8.5 \\approx 1.95$, and indeed $h = 1$: every internal-node key range $(x.key_{i-1}, x.key_i)$ partitions the children's keys.",
        svg: '<svg viewBox="0 0 720 300" width="100%" role="img" aria-label="A B-tree with minimum degree 3, a root with three keys and four children of varying key counts"><text x="360" y="18" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">root: 3 keys ⇒ 4 children</text><rect x="265" y="26" width="190" height="46" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="277" y="33" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><rect x="323" y="33" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><rect x="369" y="33" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><text x="295" y="54" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">10</text><text x="341" y="54" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">20</text><text x="387" y="54" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">30</text><line x1="291" y1="72" x2="100" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="337" y1="72" x2="248" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="383" y1="72" x2="390" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="429" y1="72" x2="602" y2="170" stroke="currentColor" stroke-width="1.5"/><rect x="30" y="170" width="140" height="44" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="52" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">2</text><text x="96" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">5</text><text x="140" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">8</text><rect x="200" y="170" width="96" height="44" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="226" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">12</text><text x="270" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">15</text><rect x="320" y="170" width="140" height="44" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="342" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">22</text><text x="386" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">25</text><text x="430" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">28</text><rect x="488" y="170" width="228" height="44" rx="7" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1.5"/><rect x="496" y="176" width="36" height="32" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1"/><rect x="540" y="176" width="36" height="32" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1"/><rect x="584" y="176" width="36" height="32" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1"/><rect x="628" y="176" width="36" height="32" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1"/><rect x="672" y="176" width="36" height="32" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1"/><text x="514" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">32</text><text x="558" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">35</text><text x="602" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">38</text><text x="646" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">40</text><text x="690" y="197" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">44</text><text x="100" y="234" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">3 keys</text><text x="248" y="234" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">2 keys</text><text x="390" y="234" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">3 keys</text><text x="602" y="234" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="#f59e0b" text-anchor="middle">full: 2t−1 = 5 keys</text><text x="26" y="266" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">t = 3 ⇒ every non-root node holds t−1 = 2 … 2t−1 = 5 keys; all leaves sit at depth 1 (h = 1).</text><text x="26" y="286" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">Occupancy: 2tʰ − 1 = 17 ≥ n = 16 ≥ 6 = 2tʰ⁻¹ − 1 … here a height-1 tree is exactly right.</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Verifying the invariants on the $t = 3$ tree above",
        problem: "Check every structural invariant for the tree in Figure 1 (root keys 10, 20, 30; children [2, 5, 8], [12, 15], [22, 25, 28], [32, 35, 38, 40, 44]) and compute the height bound.",
        steps: [
          { label: "Step 1: Key counts", text: "Non-root nodes hold 3, 2, 3, and 5 keys — each between $t-1 = 2$ and $2t-1 = 5$ ✓. The root holds 3 keys, between 1 and 5 ✓." },
          { label: "Step 2: Children counts", text: "The root has $3 + 1 = 4$ children, exactly as an internal node with 3 keys must; leaves have no children ✓." },
          { label: "Step 3: Range partition", text: "Child keys respect the separators: $2, 5, 8 < 10$; $12, 15 \\in (10, 20)$; $22, 25, 28 \\in (20, 30)$; $32, \\dots, 44 > 30$ ✓." },
          { label: "Step 4: Height bound", text: "$n = 3 + 3 + 2 + 3 + 5 = 16$ keys, so $h \\le \\log_3\\frac{16+1}{2} = \\log_3 8.5 \\approx 1.95$. The tree's height is $h = 1$ ✓, and the occupancy range $2t^h - 1 \\le n \\le (2t)^h - 1$ reads $5 \\le 16 \\le 35$ for $h = 1$ — so height 1 is both legal and necessary." },
        ],
        result: "The tree is a valid B-tree with $t = 3$; the bound predicts height $\\le 1$, matching the drawing.",
      },
      {
        title: "A trillion keys in five page reads",
        problem: "Size a B-tree for $n = 2^{40}$ keys with 8-byte keys and pointers on 8 KiB pages, and bound its height.",
        steps: [
          { label: "Step 1: Choose $t$", text: "A full node stores $2t-1$ keys plus $2t$ pointers $= (4t-1)$ eight-byte slots. For $t = 256$: $(4 \\cdot 256 - 1) \\cdot 8 = 8184 \\le 8192$ bytes — one page exactly." },
          { label: "Step 2: Apply the height bound", text: "$h \\le \\log_{256}\\frac{2^{40}+1}{2} \\approx \\log_{256} 2^{39} = \\frac{39}{8} = 4.875$, so $h \\le 4$." },
          { label: "Step 3: Confirm feasibility", text: "A height-4 tree holds between $2 \\cdot 256^4 - 1 = 8{,}589{,}934{,}591$ and $(2 \\cdot 256)^4 - 1 = 2^{32} - 1 \\approx 4.3$ billion keys. Since $2^{40} \\approx 1.1$ trillion exceeds $2^{32} - 1$, height 4 is not just permitted but forced." },
          { label: "Step 4: Count page reads", text: "A search touches $h + 1 = 5$ nodes; with the root pinned in the buffer pool, 4 disk reads suffice — against up to 40 for a binary tree." },
        ],
        result: "$t = 256$ (one 8 KiB page per node), height exactly 4, and at most 5 page reads per search for a trillion keys.",
      },
    ],
    keyTakeaways: [
      "A B-tree of minimum degree $t$ keeps every non-root node between half full ($t-1$ keys) and full ($2t-1$ keys), with all leaves at equal depth.",
      "The height satisfies $h \\le \\log_t\\frac{n+1}{2}$ because the sparsest legal tree still holds $n \\ge 2t^h - 1$ keys.",
      "B-trees trade RAM comparisons for disk seeks: matching node size to the page makes $t$ large and the height tiny.",
    ],
    quiz: [
      {
        q: "In a B-tree with minimum degree $t = 4$, what is the maximum number of keys in a non-root node?",
        options: ["4", "7", "8", "3"],
        answer: 1,
        explanation: "Non-root nodes hold at most $2t - 1 = 7$ keys; the maximum of 8 would be the child count $2t$, not the key count.",
      },
      {
        q: "Every non-root node of a B-tree with minimum degree $t$ holds at least how many keys?",
        options: ["$2t-1$", "$t$", "$\\lceil t/2 \\rceil$", "$t-1$"],
        answer: 3,
        explanation: "The minimum-degree constraint is $t - 1 \\le x.n \\le 2t - 1$ for non-root nodes — the lower bound gives the invariant name.",
      },
      {
        q: "A B-tree with $t = 3$ and $n = 100$ keys has height at most:",
        options: ["$\\log_3 100 \\approx 4.2$", "$\\log_3 50.5 \\approx 3.6$", "$\\log_6 50 \\approx 2.2$", "$\\lg 100 \\approx 6.6$"],
        answer: 1,
        explanation: "The theorem gives $h \\le \\log_t\\frac{n+1}{2} = \\log_3 50.5 \\approx 3.6$; since $n = 100 \\ge 2 \\cdot 3^2 - 1 = 17$, a height-3 tree can indeed hold 100 keys.",
      },
      {
        q: "Why do disk-bound indexes use large minimum degrees?",
        options: ["It keeps every node exactly half full, balancing space", "It reduces the number of page accesses per search by lowering the height", "It guarantees O(1) updates", "It turns the B-tree into a B+-tree"],
        answer: 1,
        explanation: "$\\log_t n = \\lg n / \\lg t$: a bigger $t$ means fewer levels, and each level costs one disk page. Space is only guaranteed to be at least half used, not exactly half.",
      },
      // PYQ-pattern — B-tree height bound (rephrased, values changed)
      {
        q: "A B-tree of minimum degree $t = 50$ stores $n = 1000000$ keys. Its height $h$ is at most:",
        options: ["2", "3", "5", "50"],
        answer: 1,
        explanation: "Step 1 — Given: $t = 50$, $n = 10^6$. Step 2 — Governing bound: $h \\le \\log_{t}\\frac{n+1}{2}$, since each level below the root at least multiplies the node count by $t$. Step 3 — Arithmetic: $\\frac{n+1}{2} \\approx 500000$; $\\ln 500000 \\approx 13.12$ and $\\ln 50 \\approx 3.91$, ratio $\\approx 3.36$, so integer $h \\le 3$. Step 4 — Sanity check: height $3$ means at most $4$ disk reads per operation, the fat node is exactly what keeps disk seeks logarithmic with a huge base. Step 5 — Distractor analysis: $2$ rounds the logarithm down past the true value, $5$ assumes binary height, and $50$ quotes the degree itself. Step 6 — Conclude: $h \\le 3$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 18.2
  {
    sectionId: "clrs-ch18-s2",
    readingTime: 7,
    intro: "Insertion into a B-tree faces a dilemma: pushing a new key into a leaf may overflow it, and fixing an overflow after the fact means climbing back up. CLRS's design avoids backtracking entirely — it splits any full node on the way down, before entering it, so the parent is always guaranteed to have room for a promoted key. The price is that splits can happen slightly earlier than necessary; the payoff is a clean single-pass descent with the tree growing only at the root.",
    objectives: [
      "Execute B-TREE-SPLIT-CHILD on a full child and track which key moves where",
      "Run B-TREE-INSERT with pre-emptive splitting, including the root-split that grows the tree",
      "Account for CPU time $O(t \\log_t n)$ and page accesses $O(\\log_t n)$",
    ],
    concepts: [
      {
        term: "B-TREE-SEARCH and B-TREE-CREATE",
        kind: "method",
        statement: "`B-TREE-SEARCH(T, k)` compares $k$ linearly (or by binary search) against a node's keys and recurses into the unique child whose range contains $k$: $O(t)$ work per node over $h+1$ nodes. `B-TREE-CREATE` allocates an empty root leaf — one page allocation and one disk write.",
        detail: "Disk accounting: the search touches $O(\\log_t n)$ pages; CPU is $O(t \\log_t n)$, or $O(\\lg n)$ with binary search inside nodes since $\\lg t \\cdot \\log_t n = \\lg n$.",
      },
      {
        term: "B-TREE-SPLIT-CHILD(x, i)",
        kind: "method",
        statement: "Splits a **full** child $y = x.c_i$ (exactly $2t-1$ keys) in $O(t)$ time: the median key $y.key_t$ moves up into $x$; $y$ keeps keys $1..t-1$ and children $1..t$; a **new node $z$** receives keys $t+1..2t-1$ and children $t+1..2t$. Node $x$ gains one key and one child.",
        detail: "Precondition: $x$ must be **non-full** (at most $2t-2$ keys) so it can absorb the median. I/O: read $y$, write the two halves — a constant number of page accesses.",
      },
      {
        term: "B-TREE-INSERT with pre-emptive splits",
        kind: "method",
        statement: "Insert in one top-down pass: if the **root is full, split it first** (creating a new root above — the only way height grows); then descend, and **whenever the child you are about to enter is full, split it before descending**. Arrive at a leaf that is guaranteed non-full, and simply insert the key.",
        detail: "Because a node is split only when its parent is non-full, the promotion always has somewhere to land. Insertion does $O(\\log_t n)$ page accesses and $O(t \\log_t n)$ CPU work.",
      },
      {
        term: "Growth at the root",
        kind: "insight",
        statement: "A B-tree **grows at the top**: height increases only when the root splits, by allocating a fresh root whose single child is the old root. Leaves never change depth, which is why the equal-depth invariant survives every insertion.",
        detail: "Contrast with binary search trees, which grow at the leaves. Splitting the root is also why a root may legally hold as few as one key.",
      },
      {
        term: "Amortized split count",
        kind: "theorem",
        statement: "Over any sequence of $n$ insertions into an initially empty B-tree, the total number of splits is $O(n)$ — amortized $O(1)$ per insertion — since each split creates exactly one node and the tree never loses nodes during insertions.",
        detail: "The worst single insertion still performs up to $h$ splits along one path, but long runs of cheap insertions pay for the occasional cascade.",
      },
    ],
    figures: [
      {
        caption: "B-TREE-SPLIT-CHILD with $t = 3$: a full child $y$ holding $2t-1 = 5$ keys splits around its median $y.key_t = 15$. The median is promoted into the parent $x$; $y$ keeps $t-1 = 2$ keys and the new right sibling $z$ receives $t-1 = 2$ keys — after which $x$ has one more key and one more child, ready to guide a descent into $z$.",
        svg: '<svg viewBox="0 0 720 395" width="100%" role="img" aria-label="Before and after diagram of splitting a full five-key child of a B-tree node, median key promoted to the parent"><text x="26" y="20" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" font-weight="600">before — child y is full</text><rect x="270" y="38" width="148" height="42" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="280" y="44" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><rect x="326" y="44" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><rect x="372" y="44" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><text x="298" y="65" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">10</text><text x="344" y="65" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">20</text><text x="390" y="65" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">30</text><line x1="330" y1="80" x2="359" y2="124" stroke="currentColor" stroke-width="1.5"/><text x="326" y="106" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">x, i</text><rect x="245" y="124" width="228" height="42" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="253" y="130" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><rect x="297" y="130" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><rect x="341" y="130" width="36" height="30" rx="4" fill="#f59e0b" fill-opacity="0.25" stroke="#f59e0b" stroke-width="1.5"/><rect x="385" y="130" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><rect x="429" y="130" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><text x="271" y="151" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">12</text><text x="315" y="151" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">13</text><text x="359" y="151" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">15</text><text x="403" y="151" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">16</text><text x="447" y="151" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">17</text><text x="359" y="185" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">y: 2t−1 = 5 keys — cannot absorb anything</text><path d="M 359 160 C 420 196, 420 210, 396 232" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 4"/><polygon points="400,236 388,234 396,244" fill="#f59e0b"/><text x="470" y="215" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="#f59e0b">median y.key<tspan baseline-shift="sub" font-size="9">t</tspan> = 15 promoted</text><text x="26" y="240" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" font-weight="600">after — B-TREE-SPLIT-CHILD(x, 1)</text><rect x="250" y="254" width="184" height="42" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="258" y="260" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><rect x="306" y="260" width="36" height="30" rx="4" fill="#f59e0b" fill-opacity="0.25" stroke="#f59e0b" stroke-width="1.5"/><rect x="354" y="260" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><rect x="402" y="260" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><text x="276" y="281" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">10</text><text x="324" y="281" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">15</text><text x="372" y="281" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">20</text><text x="420" y="281" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">30</text><line x1="266" y1="296" x2="218" y2="324" stroke="currentColor" stroke-width="1.5"/><line x1="428" y1="296" x2="418" y2="324" stroke="currentColor" stroke-width="1.5"/><text x="322" y="316" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" opacity="0.5">⋯ other children ⋯</text><rect x="170" y="324" width="96" height="42" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="178" y="330" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><rect x="222" y="330" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1"/><text x="196" y="351" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">12</text><text x="240" y="351" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">13</text><text x="218" y="386" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">y keeps t−1 = 2</text><rect x="370" y="324" width="96" height="42" rx="7" fill="#14b8a6" fill-opacity="0.1" stroke="#14b8a6" stroke-width="1.5"/><rect x="378" y="330" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><rect x="422" y="330" width="36" height="30" rx="4" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="396" y="351" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">16</text><text x="440" y="351" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">17</text><text x="418" y="386" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="#14b8a6" text-anchor="middle">z is new: t−1 = 2</text><text x="560" y="290" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">x gains one key</text><text x="560" y="308" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">and one child slot</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Inserting 13, 16, 17, then 18 into the $t = 3$ tree",
        problem: "Starting from the tree of Figure 1 (root [10, 20, 30], second child [12, 15]), insert 13, 16, 17, and 18 in order, showing where the first split happens.",
        steps: [
          { label: "Step 1: Insert 13", text: "Descend: $13 \\in (10, 20)$, so enter child [12, 15]. It is not full (2 keys < 5), so insert in place: [12, 13, 15]. No split." },
          { label: "Step 2: Insert 16", text: "Same leaf: [12, 13, 15] → [12, 13, 15, 16]. Still not full — 4 keys < $2t-1 = 5$." },
          { label: "Step 3: Insert 17", text: "The leaf becomes [12, 13, 15, 16, 17] — exactly 5 keys, **full**, but the insertion itself still fits, so nothing splits yet." },
          { label: "Step 4: Insert 18 — the split", text: "Before descending into the full child, the root splits it: median $y.key_3 = 15$ (the $t$-th key) is promoted; the left half keeps [12, 13]; the new node $z$ gets [16, 17]. The root becomes [10, 15, 20, 30] with 5 children. Now descend into $z$ (since $18 \\in (15, 20)$) and insert: $z$ = [16, 17, 18]." },
        ],
        result: "Final root [10, 15, 20, 30]; children [2, 5, 8], [12, 13], [16, 17, 18], [22, 25, 28], [32, 35, 38, 40, 44] — a valid $t = 3$ tree, after exactly one split for four insertions.",
      },
      {
        title: "When does the tree grow?",
        problem: "Continue inserting into the root [10, 15, 20, 30] until the height increases, and explain what triggers it.",
        steps: [
          { label: "Step 1: Fill the root", text: "Inserting keys in (8, 10) splits the first child and promotes, then keys in (10, 15), (15, 20) promote more medians: the root reaches 5 keys = $2t-1$ — full." },
          { label: "Step 2: The next insertion", text: "With a full root, `B-TREE-INSERT` first splits the root itself: a new root [15] (say) is allocated with the old root as its only child, and height becomes 2. Only then does the descent continue, splitting a full child on the way down." },
          { label: "Step 3: Observe the invariant", text: "Every leaf is still at depth 2 — the new level appeared above everyone at once, not below a single leaf." },
        ],
        result: "Height grows only at the root split; that is why all leaves stay at one common depth without any rebalancing pass.",
      },
    ],
    keyTakeaways: [
      "Splitting a full child of $2t-1$ keys promotes the median $y.key_t$ and leaves two nodes of $t-1$ keys each — the parent must be non-full to receive it.",
      "Pre-emptive splitting on the way down means insertion never backtracks: one root-to-leaf pass, $O(t \\log_t n)$ CPU, $O(\\log_t n)$ page accesses.",
      "The tree grows only when the root splits: height increases at the top, preserving the equal-depth property.",
    ],
    quiz: [
      {
        q: "B-TREE-SPLIT-CHILD(x, i) may be invoked only when:",
        options: ["$x.c_i$ is full, regardless of $x$", "$x$ is full and $x.c_i$ is full", "$x$ is non-full and $x.c_i$ is full", "$x.c_i$ has exactly $t-1$ keys"],
        answer: 2,
        explanation: "The parent must have room ($\\le 2t-2$ keys) to absorb the promoted median, and the child must be full ($2t-1$ keys) for a split to be warranted.",
      },
      {
        q: "After splitting a full child, the two resulting nodes each hold how many keys?",
        options: ["$t$ each", "$t-1$ each", "$2t-1$ and $0$", "$t+1$ and $t-2$"],
        answer: 1,
        explanation: "Of the $2t-1$ keys, one (the median) leaves upward: $(2t-1-1)/2 = t-1$ remain in each half — the legal minimum occupancy.",
      },
      {
        q: "The height of a B-tree increases by one exactly when:",
        options: ["a leaf splits", "any internal node splits", "the root is split during an insertion", "two leaves merge"],
        answer: 2,
        explanation: "Only the root split allocates a new root above the old one; leaf and internal splits keep the height fixed.",
      },
      {
        q: "Pre-emptive splitting (splitting a full child before descending into it) guarantees:",
        options: ["nodes are always at least half full", "insertion needs only one downward pass with no backtracking", "no node ever splits", "the tree height never changes"],
        answer: 1,
        explanation: "Because you never enter a full node, the parent of any node you might split is guaranteed non-full — so the algorithm never has to climb back up to make room.",
      },
    ],
  },

  // ---------------------------------------------------------------- 18.3
  {
    sectionId: "clrs-ch18-s3",
    readingTime: 6,
    intro: "Deletion is the mirror image of insertion, and CLRS leaves the full pseudocode as an exercise — the interesting content is the design of the cases. The rule of the game: never descend into a node holding only $t-1$ keys, because a deletion there would leave it underfull with no cheap repair from a leaf. So on the way down we top up any minimal node by borrowing from a rich sibling or merging with a poor one, and internal keys are replaced by their predecessor or successor before being discarded.",
    objectives: [
      "Execute the three deletion cases: leaf keys, internal keys, and the descent into minimal nodes",
      "Choose correctly between borrowing from a sibling and merging with one",
      "Explain why height can only decrease at the root and why merges are amortized O(1) per operation",
    ],
    concepts: [
      {
        term: "The descent invariant",
        kind: "method",
        statement: "`B-TREE-DELETE` maintains the invariant that **every node it enters (except the root) holds at least $t$ keys** — one more than the minimum. Repair happens before descending: if the child about to be entered has $t-1$ keys, borrow or merge so it has $t$.",
        detail: "With this invariant, deleting from the leaf where the key actually lives can never push it below $t-1$ keys, so no underflow repair ever happens at the bottom of the tree.",
      },
      {
        term: "Case 1: the key is in a leaf",
        kind: "method",
        statement: "If the node holds more than $t-1$ keys, simply remove the key. Otherwise — already handled by the descent invariant, which ensured at least $t$ keys on entry — removal still leaves $t-1$, the legal minimum.",
        detail: "This is the payoff of pre-emptive repairs: the leaf case itself is trivial.",
      },
      {
        term: "Case 2: the key is in an internal node",
        kind: "method",
        statement: "Let the key sit between children $y$ (before) and $z$ (after). If $y$ has $\\ge t$ keys, replace the key by its **predecessor** — the maximum key of $y$'s subtree — and recursively delete the predecessor from $y$. Symmetrically use the **successor** (minimum of $z$'s subtree) if $z$ has $\\ge t$ keys. If both are minimal ($t-1$ keys), **merge** the key, $y$, and $z$ into one node of $(t-1) + 1 + (t-1) = 2t-1$ keys and recursively delete from that node.",
        detail: "The merge is legal precisely because $2t-1$ is the maximum occupancy — the merged node is instantly full but valid.",
      },
      {
        term: "Case 3: repairing a minimal child before descent",
        kind: "method",
        statement: "To enter a child with $t-1$ keys, first give it a $t$-th key: if an adjacent **sibling has $\\ge t$ keys, rotate** — pull the separating parent key down into the child and push the sibling's nearest key up to replace it (a two-key move that shifts one key sideways). If both siblings are minimal, **merge** the child, the separator, and a sibling into one $2t-1$-key node, which costs the parent one key.",
        detail: "The merge may leave the parent at $t-1$ keys — harmless, since the invariant applies to the node being *entered*, and by the time we enter the parent's children again it will itself be repaired.",
      },
      {
        term: "Height decrease and amortization",
        kind: "insight",
        statement: "Height drops only when the **root ends up with 0 keys**: if it has one child, that child becomes the new root; if the tree is empty, the root becomes a childless leaf. Each merge destroys one node and each split creates one, so intermixed sequences of insertions and deletions perform $O(1)$ structural changes per operation amortized.",
        detail: "A single deletion costs $O(t \\log_t n)$ CPU and $O(\\log_t n)$ page accesses — the same shape as insertion.",
      },
    ],
    examples: [
      {
        title: "Deleting 20, then 16, then 17 from the $t = 3$ tree",
        problem: "Start from root [10, 15, 20, 30] with children [2, 5, 8], [12, 13], [16, 17, 18], [22, 25, 28], [32, 35, 38, 40, 44]. Delete 20, then 16, then 17, naming the case used each time.",
        steps: [
          { label: "Step 1: DELETE 20 — internal key, rich child", text: "20 sits in the root. The preceding child [16, 17, 18] has $3 \\ge t = 3$ keys, so use its predecessor: the subtree maximum 18. The root becomes [10, 15, 18, 30]; recursively delete 18 from the leaf, leaving [16, 17] — still $\\ge t-1 = 2$ ✓." },
          { label: "Step 2: DELETE 16 — minimal leaf, rich sibling", text: "The leaf [16, 17] has $t - 1 = 2$ keys, so before entering it, repair: the right sibling [22, 25, 28] has $3 > t-1$ keys — **rotate**. The separator 18 comes down into the child ([16, 17, 18]); the sibling's first key 22 goes up to the root. Now the child holds 3 keys; delete 16: [17, 18] ✓." },
          { label: "Step 3: DELETE 17 — minimal leaf, minimal siblings", text: "The leaf [17, 18] is minimal again. Its left sibling [12, 13] has $t-1 = 2$ keys and the right sibling [25, 28] also has 2 — nobody can lend. **Merge**: left sibling + separator 15 + the node = [12, 13, 15, 17, 18], a full $2t-1$-key node; the root loses key 15: [10, 22, 30] (still $\\ge 1$ ✓). Delete 17: [12, 13, 15, 18] ✓." },
        ],
        result: "Root [10, 22, 30] with children [2, 5], [12, 13, 15, 18], [25, 28], [32, 35, 38, 40, 44] — one predecessor-replacement, one rotation, and one merge, exactly one per case.",
      },
      {
        title: "A rotation in slow motion, and when the tree shrinks",
        problem: "From root [10, 22, 30] with children [2, 5], [12, 13, 15, 18], [25, 28], [32, 35, 38, 40, 44], delete 5 — a key sitting in a minimal leaf — and then say when the height would ever decrease.",
        steps: [
          { label: "Step 1: Spot the minimal leaf", text: "5 sits in child [2, 5], which holds only $t - 1 = 2$ keys. The algorithm may not enter it yet, so it repairs first." },
          { label: "Step 2: Rotate through the parent", text: "The right sibling [12, 13, 15, 18] has $4 \\ge t$ keys — rich. The separator 10 moves down into the minimal child, making [2, 5, 10]; the sibling's nearest key 12 moves up, giving root [12, 22, 30] and sibling [13, 15, 18]. Every range stays consistent: the child now owns keys below 12, the sibling keys in $(12, 22)$." },
          { label: "Step 3: Delete", text: "Now enter the 3-key child and remove 5, leaving [2, 10] — exactly the legal minimum $t - 1$." },
          { label: "Step 4: When does height drop?", text: "Only when merges cascade up to the root and leave it with 0 keys: its lone child is then promoted and $h$ decreases by one. Since each merge destroys one node and each split creates one, mixed sequences perform $O(1)$ structural changes per operation amortized." },
        ],
        result: "Root [12, 22, 30] with children [2, 10], [13, 15, 18], [25, 28], [32, 35, 38, 40, 44]; the rotation cost two pointer moves and one key swap — no nodes were created or destroyed.",
      },
    ],
    keyTakeaways: [
      "Never descend into a node with $t-1$ keys: borrow from a sibling with $\\ge t$ keys, or merge with a minimal sibling around the separating key.",
      "An internal key is replaced by its predecessor or successor (recursively deleted), or absorbed into a merge of its two adjacent children.",
      "Merging child + separator + sibling yields exactly $2t-1$ keys; height decreases only when an empty root is discarded.",
    ],
    quiz: [
      {
        q: "During B-TREE-DELETE's descent, every node the algorithm enters (other than the root) is guaranteed to hold at least how many keys?",
        options: ["$t-1$", "$t$", "$2t-1$", "$\\lceil t/2 \\rceil$"],
        answer: 1,
        explanation: "The descent invariant keeps one key of slack ($\\ge t$ on entry), so the deletion at the leaf cannot push it below the legal minimum of $t-1$.",
      },
      {
        q: "A node has $t-1$ keys and both adjacent siblings have $t-1$ keys. The repair is:",
        options: ["a borrow from the parent", "a merge of the node, the separating parent key, and a sibling into one $2t-1$-key node", "allocating a new root", "splitting the node"],
        answer: 1,
        explanation: "With no rich sibling to lend, the only move is the merge: $(t-1) + 1 + (t-1) = 2t-1$ keys — exactly full, and the parent loses one key.",
      },
      {
        q: "During a deletion the root ends up with 0 keys and one child. What happens?",
        options: ["The tree becomes invalid", "The root keeps 0 keys until the next insert", "Its lone child becomes the new root and the height drops by one", "The tree is rebuilt from scratch"],
        answer: 2,
        explanation: "A merge consumed the root's only key; the child is promoted and the tree gets shallower — the mirror of the insertion-time root split.",
      },
      {
        q: "Deleting a key found in an internal node when the following child $z$ has $\\ge t$ keys is done by:",
        options: ["replacing it with the predecessor from the preceding child", "replacing it with the successor — the minimum of $z$'s subtree — and recursively deleting that", "merging both children", "promoting any leaf key"],
        answer: 1,
        explanation: "A rich following child can afford to give up its minimum; the symmetric predecessor rule applies when the *preceding* child is the rich one.",
      },
    ],
  },
]
