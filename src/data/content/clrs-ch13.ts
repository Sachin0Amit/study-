import type { SectionContent } from "../library"

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition (Cormen, Leiserson, Rivest
// & Stein, MIT Press 2009). Chapter 13: Red-Black Trees (13.1 – 13.4).
// Master study content.
// ============================================================================

export const clrsCh13Content: SectionContent[] = [
  // ---------------------------------------------------------------- 13.1
  {
    sectionId: "clrs-ch13-s1",
    readingTime: 8,
    intro: "A red-black tree is a binary search tree with one extra bit of storage per node — its color — and five simple counting rules that together cap the tree's height at $2\\lg(n+1)$. This section defines the invariant, introduces black-height as the counting tool, and establishes the logarithmic height bound that makes every dynamic-set operation run in $O(\\lg n)$ worst-case time.",
    objectives: [
      "State all five red-black properties and check a concrete tree against them",
      "Compute the black-height of every node in a red-black tree",
      "Apply the height bound $h \\le 2\\lg(n+1)$ and explain why it makes searches logarithmic"
    ],
    concepts: [
      {
        term: "The red-black properties",
        kind: "definition",
        statement: "A **red-black tree** is a binary search tree in which each node stores a color field $x.color \\in \\{\\text{RED}, \\text{BLACK}\\}$ and the tree obeys: (1) every node is either red or black; (2) the root is black; (3) every leaf (the NIL sentinel) is black; (4) if a node is red, **both** of its children are black — no two reds in a row on any path; (5) for each node, all simple paths from the node down to descendant leaves contain the **same number of black nodes**.",
        detail: "Properties 4 and 5 do the balancing: 4 limits how densely reds can crowd a path, while 5 forces equal black depth everywhere in the tree."
      },
      {
        term: "Black-height",
        kind: "definition",
        statement: "The **black-height** $bh(x)$ of a node $x$ is the number of black nodes on any simple path from, **but not including**, $x$ down to a descendant leaf (NIL included in the count). Property 5 guarantees the number is identical on every such path, so $bh$ is well defined; $bh(\\text{NIL}) = 0$.",
        detail: "A red node and its black children can share the same black-height — red nodes are free riders that never raise the black count of a path."
      },
      {
        term: "Lemma 13.1 — the height bound",
        kind: "theorem",
        statement: "A red-black tree with $n$ internal nodes has height at most $2\\lg(n+1)$. Consequently SEARCH, MINIMUM, MAXIMUM, SUCCESSOR and PREDECESSOR — all $O(h)$ operations on binary search trees by Chapter 12 — run in $O(\\lg n)$ worst-case time, and so (after Sections 13.3 and 13.4) do INSERT and DELETE.",
        detail: "The proof rests on two facts: the subtree rooted at any node $x$ contains at least $2^{bh(x)} - 1$ internal nodes, and the root's black-height is at least $h/2$. Both are proved in full in the deeper tier below."
      },
      {
        term: "The sentinel T.nil",
        kind: "insight",
        statement: "CLRS implements all NILs as **one shared sentinel node** $T.nil$: a black node whose color may be read but never written, playing every NIL leaf and the root's parent simultaneously. All algorithms treat it as an ordinary child pointer.",
        detail: "The sentinel removes hundreds of NIL tests — for example the uncle in RB-INSERT-FIXUP may be the sentinel, whose color BLACK is exactly what the case analysis needs to see."
      },
      {
        term: "Balanced by counting colors",
        kind: "insight",
        statement: "A red-black tree stores no heights and no balance factors. One global counting invariant — equal blacks on every root-to-leaf path, reds never adjacent — is enough to cap the height at twice the ideal. Updates maintain the count with recolorings (cheap, $O(\\lg n)$ of them) and a constant number of rotations: at most 2 per insertion and 3 per deletion.",
        detail: "This makes red-black trees cheaper to update than height-balanced AVL trees, which is why C++ `std::map`, Java's `TreeMap` and the Linux scheduler's rbtree-based run queue are all red-black trees."
      }
    ],
    figures: [
      {
        caption: "A red-black tree on $n = 7$ internal keys with black-heights in green. Red nodes 3 and 10 sit directly under the black root; every root-to-NIL path passes exactly two black nodes besides the root (counting the black NIL). The height is $h = 3$ while $2\\lg(n+1) = 2\\lg 8 = 6$ — the bound holds with room to spare, because this tree is far more balanced than the worst case CLRS allows.",
        svg: '<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="A red-black tree on seven keys with black-height labels and black NIL leaves"><text x="500" y="24" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor"><tspan>legend:</tspan></text><rect x="546" y="15" width="11" height="11" fill="#ef4444"/><text x="561" y="24" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">red</text><rect x="600" y="15" width="11" height="11" fill="#0f172a" stroke="currentColor" stroke-width="1"/><text x="615" y="24" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">black</text><line x1="360" y1="60" x2="225" y2="130" stroke="currentColor" stroke-width="1.6"/><line x1="360" y1="60" x2="495" y2="130" stroke="currentColor" stroke-width="1.6"/><line x1="225" y1="130" x2="150" y2="205" stroke="currentColor" stroke-width="1.6"/><line x1="225" y1="130" x2="300" y2="205" stroke="currentColor" stroke-width="1.6"/><line x1="495" y1="130" x2="430" y2="205" stroke="currentColor" stroke-width="1.6"/><line x1="495" y1="130" x2="575" y2="205" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="205" x2="124" y2="285" stroke="currentColor" stroke-width="1.2" opacity="0.4"/><line x1="150" y1="205" x2="176" y2="285" stroke="currentColor" stroke-width="1.2" opacity="0.4"/><line x1="300" y1="205" x2="274" y2="285" stroke="currentColor" stroke-width="1.2" opacity="0.4"/><line x1="300" y1="205" x2="326" y2="285" stroke="currentColor" stroke-width="1.2" opacity="0.4"/><line x1="430" y1="205" x2="404" y2="285" stroke="currentColor" stroke-width="1.2" opacity="0.4"/><line x1="430" y1="205" x2="456" y2="285" stroke="currentColor" stroke-width="1.2" opacity="0.4"/><line x1="575" y1="205" x2="549" y2="285" stroke="currentColor" stroke-width="1.2" opacity="0.4"/><line x1="575" y1="205" x2="601" y2="285" stroke="currentColor" stroke-width="1.2" opacity="0.4"/><circle cx="360" cy="60" r="17" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="360" y="65" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">7</text><circle cx="225" cy="130" r="17" fill="#ef4444"/><text x="225" y="135" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">3</text><circle cx="495" cy="130" r="17" fill="#ef4444"/><text x="495" y="135" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">10</text><circle cx="150" cy="205" r="17" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="150" y="210" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">1</text><circle cx="300" cy="205" r="17" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="300" y="210" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">5</text><circle cx="430" cy="205" r="17" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="430" y="210" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">8</text><circle cx="575" cy="205" r="17" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="575" y="210" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#f8fafc">12</text><text x="360" y="92" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">bh 2</text><text x="225" y="162" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">bh 2</text><text x="495" y="162" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">bh 2</text><text x="150" y="237" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">bh 1</text><text x="300" y="237" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">bh 1</text><text x="430" y="237" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">bh 1</text><text x="575" y="237" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#10b981">bh 1</text><rect x="118" y="279" width="12" height="12" fill="#0f172a" stroke="currentColor" stroke-width="1"/><rect x="170" y="279" width="12" height="12" fill="#0f172a" stroke="currentColor" stroke-width="1"/><rect x="268" y="279" width="12" height="12" fill="#0f172a" stroke="currentColor" stroke-width="1"/><rect x="320" y="279" width="12" height="12" fill="#0f172a" stroke="currentColor" stroke-width="1"/><rect x="398" y="279" width="12" height="12" fill="#0f172a" stroke="currentColor" stroke-width="1"/><rect x="450" y="279" width="12" height="12" fill="#0f172a" stroke="currentColor" stroke-width="1"/><rect x="543" y="279" width="12" height="12" fill="#0f172a" stroke="currentColor" stroke-width="1"/><rect x="595" y="279" width="12" height="12" fill="#0f172a" stroke="currentColor" stroke-width="1"/><text x="124" y="305" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-weight="700" fill="#10b981" opacity="0.85">bh 0</text><text x="360" y="325" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.85">every NIL leaf is black with bh = 0 · n = 7 internal nodes, height h = 3, and 3 ≤ 2 lg 8 = 6</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Auditing a red-black tree",
        problem: "Verify that the tree of the figure — root 7 black; red children 3 and 10; black grandchildren 1, 5, 8, 12 — is a legal red-black tree, and check the height bound.",
        steps: [
          { label: "Step 1: Properties 1–3", text: "Every node carries a color; the root 7 is black; the eight NIL leaves (drawn as small squares) are black. All three structural color rules hold." },
          { label: "Step 2: Property 4 — no red-red pairs", text: "The only red nodes are 3 and 10, and each has exclusively black children: 3 has 1 and 5; 10 has 8 and 12. No red node sits under another red node." },
          { label: "Step 3: Property 5 — equal black depth", text: "Each of the four root-to-NIL paths, such as $7 \\to 3 \\to 1 \\to \\text{NIL}$ and $7 \\to 10 \\to 12 \\to \\text{NIL}$, crosses exactly two black nodes besides the root — the grandchild and the NIL. So every path agrees: $bh(7) = 2$, and the tree is a valid red-black tree." },
          { label: "Step 4: The height bound", text: "The longest path (say $7 \\to 3 \\to 1 \\to \\text{NIL}$) has $h = 3$ edges. Lemma 13.1 allows up to $2\\lg(n+1) = 2\\lg 8 = 6$: the bound is satisfied with slack, since this tree is better balanced than the worst case." }
        ],
        result: "All five properties hold, so the tree is a red-black tree; its height 3 respects the $2\\lg(n+1) = 6$ guarantee."
      },
      {
        title: "Black-height audit on five nodes",
        problem: "Tree: black root $7$, red children $3, 11$, black leaves $1, 5$ under $3$. Verify all five properties and compute $bh$.",
        steps: [
          { label: "Properties 1-2", text: "Every node red or black ✓; root $7$ black ✓." },
          { label: "Properties 3-4", text: "Leaves $T.nil$ black ✓; red nodes $3, 11$ have black children ($1,5$ black, $nil$ black) ✓." },
          { label: "Property 5", text: "Paths from $7$: $7 \\to 3 \\to 1 \\to nil$ has blacks $7,1,nil = 3$; $7 \\to 3 \\to 5 \\to nil$ also $3$; $7 \\to 11 \\to nil$ has $7,nil = 2$? Violation unless $11$'s missing children count: $11$ is red with black $nil$ children, path $7 \\to 11 \\to nil$ has blacks $7,nil = 2 \\ne 3$: not a valid red-black tree." },
          { label: "Repair", text: "Recolor $11$ black or restructure: black-height must agree on every root-to-leaf path. Here $bh(7)$ is undefined, which is exactly what Lemma 13.1's hypothesis excludes." },
        ],
        result: "Fails property $5$: black counts $3$ vs $2$. A valid tree needs uniform black-height; the audit catches it by counting.",
      },
    ],
    keyTakeaways: [
      "Five properties: every node colored, black root, black NILs, red nodes have black children, and all paths from a node down to leaves carry the same number of blacks.",
      "Black-height $bh(x)$ counts the black nodes strictly below $x$ on any path to a leaf; property 5 makes the count path-independent.",
      "$h \\le 2\\lg(n+1)$ turns every Chapter 12 operation into an $O(\\lg n)$ worst-case guarantee — the entire point of the coloring."
    ],
    quiz: [
      {
        q: "A colleague recolors the root of an otherwise valid red-black tree red, leaving all other nodes alone. Which property is necessarily violated?",
        options: ["Property 4 only", "Property 2 only", "Properties 2 and 4", "Property 5"],
        answer: 1,
        explanation: "Property 2 demands a black root. Property 4 constrains the children of a red node — if the root's children happen to be black, that property still holds; and no black count changes, so property 5 is safe."
      },
      {
        q: "A red-black tree has $n = 100$ internal nodes. Its height is at most:",
        options: ["$\\lg 101 \\approx 6.7$", "$2\\lg 101 \\approx 13.3$", "$50$", "$101$"],
        answer: 1,
        explanation: "Lemma 13.1: $h \\le 2\\lg(n+1) = 2\\lg 101 \\approx 13.3$, so the integer height is at most 13. The tighter $\\lg 101$ is what a perfectly balanced tree would achieve — the red-black guarantee pays for itself with a factor of only 2."
      },
      {
        q: "The black-height $bh(x)$ of a node $x$ is:",
        options: ["the number of black nodes on a path from the root down to $x$", "the number of black nodes on any path from $x$, excluding $x$ itself, down to a descendant leaf", "the number of black nodes on a path from $x$, including $x$, down to a leaf", "the total number of black nodes in the tree"],
        answer: 1,
        explanation: "The definition excludes $x$ itself and counts every black node below it on the path, NIL included. Property 5 guarantees the same answer on every path."
      },
      {
        q: "A subtree is rooted at a node $x$ with $bh(x) = 4$. At minimum, how many internal nodes does that subtree contain?",
        options: ["4", "8", "$2^4 - 1 = 15$", "$4^2 = 16$"],
        answer: 2,
        explanation: "The first half of Lemma 13.1's proof: a subtree of black-height $b$ contains at least $2^b - 1$ internal nodes, here $2^4 - 1 = 15$."
      },
      // PYQ-pattern — red-black height bound (rephrased, values changed)
      {
        q: "A red-black tree stores $15$ internal nodes. Its height is at most:",
        options: ["4", "6", "8", "16"],
        answer: 2,
        explanation: "Step 1 — Given: $n = 15$ internal nodes, red-black properties enforced. Step 2 — Governing bound: black-height at least halves the height, giving $h \\le 2\\lg(n + 1)$. Step 3 — Arithmetic: $n + 1 = 16$, $\\lg 16 = 4$, so $h \\le 8$. Step 4 — Sanity check: $8$ is logarithmic against $15$ linear, a plain BST could degenerate to $15$ while coloring forbids it, and the bound is tight up to constants. Step 5 — Distractor analysis: $4$ is the black-height alone, $6$ interleaves incorrectly, and $16$ is the degenerate chain the colors prevent. Step 6 — Conclude: height at most $8$.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "The height bound, proved in full: h ≤ 2 lg(n + 1)",
        blocks: [
          {
            kind: "theorem",
            heading: "Lemma 13.1 (CLRS)",
            body: "A red-black tree with $n$ internal nodes has height at most $2\\lg(n+1)$."
          },
          {
            kind: "proof",
            heading: "Part 1 — subtree size from black-height",
            body: "We first show that the subtree rooted at any node $x$ contains at least $2^{bh(x)} - 1$ internal nodes, by induction on the height of $x$. **Base case** ($x = \\text{NIL}$, a leaf): $bh(x) = 0$ and the subtree contains exactly $2^0 - 1 = 0$ internal nodes. **Inductive step** ($x$ internal): both children of $x$ have smaller height, so the induction hypothesis applies to them. A child's black-height is either $bh(x)$ — when the child is **red**, since red nodes are never counted — or $bh(x) - 1$ — when the child is **black**. Either way each child's subtree holds at least $2^{bh(x)-1} - 1$ internal nodes, and counting $x$ itself gives $$\\text{subtree}(x) \\;\\ge\\; 1 + 2\\,\\bigl(2^{bh(x)-1} - 1\\bigr) \\;=\\; 2^{bh(x)} - 1,$$ completing the induction."
          },
          {
            kind: "proof",
            heading: "Part 2 — the root's black-height is at least half the height",
            body: "Take a longest root-to-leaf path — it has $h$ edges, the tree's height — and consider the $h$ nodes on it strictly below the root, the black NIL at the bottom included. **Charge every red node on the path to its child on the path.** By property 4 a red node's children are black, so every charge lands on a black node; and since each node on a path has exactly one successor node, distinct reds charge to distinct children — an injection from the red nodes into the black nodes of those $h$. Therefore at most half of them are red, at least half are black, and all of these black nodes lie below the root: $$bh(\\text{root}) \\;\\ge\\; h/2, \\qquad \\text{that is,} \\quad h \\le 2\\,bh(\\text{root}).$$"
          },
          {
            kind: "derivation",
            heading: "Combining the halves",
            body: "Apply Part 1 at the root and insert Part 2: $$n \\;\\ge\\; 2^{bh(\\text{root})} - 1 \\;\\ge\\; 2^{h/2} - 1.$$ Add 1 and take logarithms: $n + 1 \\ge 2^{h/2}$, so $\\lg(n+1) \\ge h/2$, i.e. $$h \\;\\le\\; 2\\lg(n+1).$$ Since $h$ bounds every root-to-leaf path, the $O(h)$ operations of Chapter 12 become $O(\\lg n)$ worst-case — and, once Sections 13.3 and 13.4 are done, so do INSERT and DELETE."
          },
          {
            kind: "remark",
            body: "The factor 2 is honest, not slack: a tree whose every path alternates black-red-black-red below a black root attains $h = 2\\,bh(\\text{root})$, so the bound is tight up to lower-order terms. Height-balanced **AVL trees** do better — $h \\le 1.4405\\lg n$ — but they pay on updates: an AVL insertion can rotate at every level of the tree, while a red-black insertion rotates at most twice and a deletion at most three times. That trade — a slightly taller tree for far cheaper updates — is exactly why red-black trees dominate systems practice."
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------- 13.2
  {
    sectionId: "clrs-ch13-s2",
    readingTime: 5,
    intro: "Rebalancing needs a primitive that restructures a binary search tree locally without breaking the search-tree property. Rotation is that primitive: it rehangs two nodes and three subtrees with a constant number of pointer writes, preserves the inorder key sequence exactly, and costs $\\Theta(1)$. The fixup procedures of the next two sections will change the tree with nothing but recolorings and rotations.",
    objectives: [
      "Execute LEFT-ROTATE and RIGHT-ROTATE by hand, listing every pointer that changes",
      "Prove that a rotation preserves the binary-search-tree property",
      "Explain why rotations cost Θ(1) and how few of them the fixups ever need"
    ],
    concepts: [
      {
        term: "Rotation",
        kind: "definition",
        statement: "**LEFT-ROTATE**$(T, x)$ — which requires $x.right \\ne$ NIL — promotes $x$'s right child $y$: $y$ takes $x$'s place in the tree, $x$ becomes $y$'s **left** child, and $y$'s old left subtree $\\beta$ is rehung as $x$'s new right subtree. **RIGHT-ROTATE** is the mirror image, and the two operations are inverses of each other.",
        detail: "Only the parentage of $x$, $y$ and the root of $\\beta$ changes — every other node keeps its parent, its children, its color and its key."
      },
      {
        term: "The code",
        kind: "method",
        statement: "`LEFT-ROTATE(T, x)`: set `y = x.right`; set `x.right = y.left` (y's left subtree becomes x's right); if `y.left ≠ T.nil`, set `y.left.p = x`; set `y.p = x.p` (link x's parent to y — the root case, the left-child case, or the right-child case); finally `y.left = x` and `x.p = y`. Six pointer writes in total.",
        detail: "The three-way parent test (root / left child / right child) is the only case analysis. Forgetting the `y.left.p = x` write leaves a stale parent pointer — the classic rotation bug."
      },
      {
        term: "Rotations preserve the BST property",
        kind: "theorem",
        statement: "Read the keys around the rotated pair and both subtrees: the inorder sequence is $\\alpha, x, \\beta, y, \\gamma$ **before** the rotation and $\\alpha, x, \\beta, y, \\gamma$ **after** it. Since the inorder sequence is untouched and no node outside the pair moves, the binary-search-tree property survives every rotation.",
        detail: "This is why fixups may rotate freely — no key comparison ever needs rechecking, and rotations are the only structural changes they make."
      },
      {
        term: "Cost and rotation budgets",
        kind: "insight",
        statement: "A rotation is $\\Theta(1)$: a fixed handful of pointer writes, no key moves, no traversal. RB-INSERT-FIXUP performs **at most 2 rotations** in total (both while converting case 2 into case 3) and RB-DELETE-FIXUP **at most 3**; everything else the fixups do is recoloring.",
        detail: "Colors ride along through a rotation untouched — rotation changes parentage, never colors. When a fixup wants colors changed, it recolors explicitly before or after rotating."
      },
      {
        term: "RIGHT-ROTATE mirrors LEFT-ROTATE",
        kind: "method",
        statement: "RIGHT-ROTATE($y$) with left child $x$ sets $y.left = x.right$, $x.right = y$, rewiring parents symmetrically to LEFT-ROTATE. Same $\\Theta(1)$ pointer count, same BST-preservation proof with $\\le$ and $\\ge$ swapped.",
        detail: "Fixups call whichever direction the violation leans: insertion cases 2-3 use one of each, deletion uses both across its four cases. Implementing one rotation and mirroring $left \\leftrightarrow right$ yields the other.",
      },
    ],
    figures: [
      {
        caption: "The two rotations, with red-black colors riding along. LEFT-ROTATE$(T, x)$ promotes $x$'s right child $y$: $x$ drops to become $y$'s left child, and $y$'s old left subtree $\\beta$ moves to $x$'s right — the inorder sequence $\\alpha, x, \\beta, y, \\gamma$ is identical before and after, so the search-tree property is preserved. RIGHT-ROTATE$(T, y)$ is the exact inverse: read the figure right to left. Colors never change during the rotation itself: $x$ stays black, $y$ stays red.",
        svg: '<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="Left rotation of a red-black tree fragment, shown before and after with node colors"><text x="180" y="24" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.75">before</text><line x1="150" y1="85" x2="262" y2="158" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="85" x2="58" y2="210" stroke="currentColor" stroke-width="1.6"/><line x1="262" y1="158" x2="213" y2="220" stroke="currentColor" stroke-width="1.6"/><line x1="262" y1="158" x2="325" y2="213" stroke="currentColor" stroke-width="1.6"/><polygon points="58,210 34,246 82,246" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><polygon points="213,220 189,256 237,256" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><polygon points="325,213 301,249 349,249" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><text x="58" y="239" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">α</text><text x="213" y="249" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">β</text><text x="325" y="242" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">γ</text><circle cx="150" cy="85" r="16" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="150" y="90" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="700" fill="#f8fafc">x</text><circle cx="262" cy="158" r="16" fill="#ef4444"/><text x="262" y="163" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="700" fill="#f8fafc">y</text><text x="368" y="104" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">LEFT-ROTATE(T, x)</text><text x="368" y="136" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.7">RIGHT-ROTATE(T, y) undoes it</text><line x1="345" y1="118" x2="387" y2="118" stroke="currentColor" stroke-width="1.8"/><polygon points="387,112 399,118 387,124" fill="currentColor"/><text x="545" y="24" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.75">after</text><line x1="552" y1="85" x2="440" y2="158" stroke="currentColor" stroke-width="1.6"/><line x1="552" y1="85" x2="655" y2="215" stroke="currentColor" stroke-width="1.6"/><line x1="440" y1="158" x2="395" y2="222" stroke="currentColor" stroke-width="1.6"/><line x1="440" y1="158" x2="500" y2="222" stroke="currentColor" stroke-width="1.6"/><polygon points="395,222 371,258 419,258" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><polygon points="500,222 476,258 524,258" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><polygon points="655,215 631,251 679,251" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><text x="395" y="251" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">α</text><text x="500" y="251" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">β</text><text x="655" y="244" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">γ</text><circle cx="552" cy="85" r="16" fill="#ef4444"/><text x="552" y="90" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="700" fill="#f8fafc">y</text><circle cx="440" cy="158" r="16" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="440" y="163" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="700" fill="#f8fafc">x</text><rect x="250" y="300" width="12" height="12" fill="#ef4444"/><text x="268" y="310" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">red node</text><rect x="355" y="300" width="12" height="12" fill="#0f172a" stroke="currentColor" stroke-width="1"/><text x="373" y="310" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">black node</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Rotating a three-node subtree by hand",
        problem: "A BST has root 7 with right child 15, and 15 has left child 11 and right child 22 (all other children NIL). Perform LEFT-ROTATE(T, 7) and verify that the search-tree property survives.",
        steps: [
          { label: "Step 1: Precondition and setup", text: "LEFT-ROTATE requires $7.right \\ne$ NIL — it is 15, so set $y = 15$." },
          { label: "Step 2: Move β = 11", text: "Set $7.right = 11$ and $11.p = 7$: the subtree rooted at 11 moves from 15's left to 7's right." },
          { label: "Step 3: Rehang the pair", text: "Set $15.p = 7.p = \\text{NIL}$, so 15 becomes the root; then $15.left = 7$ and $7.p = 15$. Node 22 stays 15's right child untouched." },
          { label: "Step 4: Verify", text: "The result has root 15 with left child 7 (whose right child is 11) and right child 22. Inorder before: $7, 11, 15, 22$; inorder after: $7, 11, 15, 22$ — identical, so the BST property is preserved." }
        ],
        result: "Left-rotating about 7 swaps the pair (7, 15) into (15, 7) and rehangs β = 11, using six pointer writes; the inorder sequence — hence the search-tree property — is untouched."
      },
      {
        title: "Inorder preserved through rotation",
        problem: "LEFT-ROTATE on $x = 10$ with right child $y = 15$ ($y.left = 12$). List inorder before and after.",
        steps: [
          { label: "Before", text: "Subtree inorder: $10, 12, 15$ (plus $x.left$ before $10$ and $y.right$ after $15$)." },
          { label: "Rotate", text: "$y$ becomes subtree root; $x.right = 12$, $12.p = x$; $y.left$ was $12$, now $x$ is $y.left$." },
          { label: "After", text: "Subtree inorder: $10, 12, 15$ unchanged: $x$, then $y.left = 12$, then $y$. Only parentage moved." },
          { label: "Keys outside", text: "Nodes outside the $x$-$y$ pair keep their relative order: rotation is a local rehang of three subtrees $\\alpha = x.left$, $\\beta = y.left$, $\\gamma = y.right$." },
        ],
        result: "Inorder $10, 12, 15$ before and after: rotations restructure without reordering, the invariant fixups rely on.",
      },
    ],
    keyTakeaways: [
      "LEFT-ROTATE(T, x) promotes x's right child y, demotes x to y's left child, and rehangs y's old left subtree as x's right; RIGHT-ROTATE is its inverse.",
      "A rotation is Θ(1) pointer writes and preserves the inorder sequence α, x, β, y, γ — hence the BST property and all colors.",
      "The fixups need remarkably few rotations — at most 2 per insertion and 3 per deletion; all other repair work is recoloring."
    ],
    quiz: [
      {
        q: "LEFT-ROTATE(T, x) can be legally called whenever:",
        options: ["x is the root of the tree", "x.right ≠ T.nil", "x is a black node", "x has two non-NIL children"],
        answer: 1,
        explanation: "The single precondition is a non-NIL right child — the node being promoted must exist. Color, rootness, and the left child are all irrelevant."
      },
      {
        q: "In LEFT-ROTATE(T, x), the subtree β rooted at y's old left child ends up as:",
        options: ["x's left subtree", "x's right subtree", "y's right subtree", "the new root of the whole tree"],
        answer: 1,
        explanation: "β holds keys between x and y, so it must sit between them after the swap: it becomes x's new right subtree (equivalently, it keeps its inorder position)."
      },
      {
        q: "Which of the following does a rotation preserve?",
        options: ["The BST property only", "The BST property and every node's color", "The BST property and every node's depth", "Nothing — the fixup must recheck the tree"],
        answer: 1,
        explanation: "Keys, subtree contents and colors all ride along untouched. Node depths do change — x drops one level and y rises one — which is exactly the rebalancing effect."
      },
      {
        q: "Across an entire RB-INSERT, including the fixup, how many rotations can occur at most?",
        options: ["O(1) — at most 2", "Θ(lg n) — one per level", "Exactly 1", "Unbounded — case 1 can rotate repeatedly"],
        answer: 0,
        explanation: "Case 1 never rotates (it iterates by recoloring); cases 2 and 3 together perform at most 2 rotations and then terminate the loop."
      }
    ]
  },

  // ---------------------------------------------------------------- 13.3
  {
    sectionId: "clrs-ch13-s3",
    readingTime: 7,
    intro: "Insertion splices a new red node z into the tree with an ordinary BST insert, then repairs whatever the splice broke. Because z starts red, only two properties can possibly fail — the black-root rule and the no-red-parent rule — and RB-INSERT-FIXUP chases the red-red violation up the tree, trading recolorings for at most two rotations before settling.",
    objectives: [
      "Explain why the new node is colored red and which two properties can be violated",
      "Apply cases 1, 2 and 3 of RB-INSERT-FIXUP, including their mirror images",
      "Show that the fixup terminates in O(lg n) with at most two rotations"
    ],
    concepts: [
      {
        term: "RB-INSERT",
        kind: "method",
        statement: "Insert $z$ exactly as TREE-INSERT from Chapter 12 — descend from the root comparing keys, splice $z$ in as the appropriate child with both pointers set to $T.nil$ — then set $z.color = \\text{RED}$ and call **RB-INSERT-FIXUP**$(T, z)$.",
        detail: "The BST property is intact by construction; only colors can now be wrong."
      },
      {
        term: "Why red — and what can break",
        kind: "insight",
        statement: "A red leaf changes no black count on any path — property 5 cannot be violated — and property 3 is untouched. Only **property 2** (if $z$ becomes the new root) and **property 4** (if $z$ and $z.p$ are both red) can fail. RB-INSERT-FIXUP maintains the loop invariant that these are the only violations present.",
        detail: "That invariant is why the loop condition simply tests the parent's color: while $z.p$ is red, property 4 is broken at $z$, and nothing else is wrong."
      },
      {
        term: "Case 1 — the uncle is red",
        kind: "method",
        statement: "Let $y$ be $z$'s uncle (the sibling of $z.p$). If $y$ is **red**, recolor $z.p$ and $y$ black and the grandparent $z.p.p$ red, then set $z = z.p.p$ and continue the loop. Every path through the grandparent still sees one black among $\\{z.p, y\\}$ where it used to see the grandparent's black, so black-heights survive.",
        detail: "Case 1 is the only case that iterates — the red-red violation climbs two levels per step, so the loop runs at most $O(\\lg n)$ times, performing no rotations at all."
      },
      {
        term: "Case 2 — black uncle, z a right child",
        kind: "method",
        statement: "If the uncle is **black** and $z$ is a **right** child (with $z.p$ a left child; the mirror cases swap left and right), set $z = z.p$ and LEFT-ROTATE$(T, z)$: the configuration becomes case 3 with the labels of $z$ and its old parent exchanged.",
        detail: "Case 2 performs no recoloring — it merely straightens the zig-zag into a straight line so that case 3 can finish the job."
      },
      {
        term: "Case 3 — black uncle, z a left child",
        kind: "method",
        statement: "Recolor $z.p$ black and $z.p.p$ red, then RIGHT-ROTATE$(T, z.p.p)$. The rotation leaves a black node above the red pair, no red-red violation anywhere, and every root-to-leaf black count restored — the loop terminates, and its final line forces the root black (repairing property 2 if needed).",
        detail: "Cases 2 and 3 always run as a pair and end the fixup: one or two rotations in total, then done."
      }
    ],
    figures: [
      {
        caption: "Insertion fixup **case 3** — the terminal case (uncle black, $z$ a left child, shown for $z.p$ a left child; mirror images swap left and right). The parent B (= $z.p$) and grandparent C swap colors, then RIGHT-ROTATE(C) promotes B. Every path through the fragment sees exactly one black among B and C, before and after — the swap preserves all black-heights — and the red pair B–z is destroyed because B is now black. In the after-tree every red node has a black parent. Case 2 (z a right child) first left-rotates the same configuration into this shape, which is why the two cases share a rotation budget of 2.",
        svg: '<svg viewBox="0 0 720 360" width="100%" role="img" aria-label="Insertion fixup case 3 before and after: recolor the parent and grandparent, then rotate right about the grandparent"><text x="180" y="24" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">Case 3 — before (black uncle, z a left child)</text><line x1="150" y1="78" x2="85" y2="152" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="78" x2="228" y2="150" stroke="currentColor" stroke-width="1.6"/><line x1="85" y1="152" x2="55" y2="226" stroke="currentColor" stroke-width="1.6"/><line x1="85" y1="152" x2="148" y2="222" stroke="currentColor" stroke-width="1.6"/><line x1="55" y1="226" x2="35" y2="290" stroke="currentColor" stroke-width="1.6"/><line x1="55" y1="226" x2="105" y2="290" stroke="currentColor" stroke-width="1.6"/><polygon points="148,222 126,256 170,256" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><polygon points="35,290 14,322 56,322" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><polygon points="105,290 84,322 126,322" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><polygon points="228,150 204,186 252,186" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="228" y="176" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="700" fill="#f8fafc">δ</text><text x="228" y="202" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.8">black uncle</text><text x="148" y="248" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">γ</text><text x="35" y="312" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">α</text><text x="105" y="312" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">β</text><circle cx="150" cy="78" r="15" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="150" y="83" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="700" fill="#f8fafc">C</text><circle cx="85" cy="152" r="15" fill="#ef4444"/><text x="85" y="157" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="700" fill="#f8fafc">B</text><circle cx="55" cy="226" r="15" fill="#ef4444"/><text x="55" y="231" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="700" fill="#f8fafc">z</text><text x="363" y="106" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor">recolor + rotate</text><line x1="342" y1="120" x2="384" y2="120" stroke="currentColor" stroke-width="1.8"/><polygon points="384,114 396,120 384,126" fill="currentColor"/><text x="545" y="24" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">after — the loop exits</text><line x1="520" y1="78" x2="450" y2="152" stroke="currentColor" stroke-width="1.6"/><line x1="520" y1="78" x2="610" y2="152" stroke="currentColor" stroke-width="1.6"/><line x1="450" y1="152" x2="405" y2="225" stroke="currentColor" stroke-width="1.6"/><line x1="450" y1="152" x2="495" y2="225" stroke="currentColor" stroke-width="1.6"/><line x1="610" y1="152" x2="570" y2="225" stroke="currentColor" stroke-width="1.6"/><line x1="610" y1="152" x2="670" y2="225" stroke="currentColor" stroke-width="1.6"/><polygon points="405,225 385,258 425,258" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><polygon points="495,225 475,258 515,258" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><polygon points="570,225 550,258 590,258" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><polygon points="670,225 650,258 690,258" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><text x="405" y="250" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">α</text><text x="495" y="250" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">β</text><text x="570" y="250" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">γ</text><text x="670" y="250" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor">δ</text><circle cx="520" cy="78" r="15" fill="#0f172a" stroke="currentColor" stroke-width="1.5"/><text x="520" y="83" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="700" fill="#f8fafc">B</text><circle cx="450" cy="152" r="15" fill="#ef4444"/><text x="450" y="157" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="700" fill="#f8fafc">z</text><circle cx="610" cy="152" r="15" fill="#ef4444"/><text x="610" y="157" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="700" fill="#f8fafc">C</text><rect x="250" y="338" width="12" height="12" fill="#ef4444"/><text x="268" y="348" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">red node</text><rect x="355" y="338" width="12" height="12" fill="#0f172a" stroke="currentColor" stroke-width="1"/><text x="373" y="348" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">black node</text></svg>',
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "Growing a red-black tree: 41, 38, 31, 12",
        problem: "Starting from an empty red-black tree, insert the keys 41, 38, 31 and 12 in order, showing which fixup case fires at each step.",
        steps: [
          { label: "Step 1: Insert 41", text: "41 is spliced in as the root and colored red — property 2 is violated, so the fixup's final line recolors the root black. Tree: 41 (black)." },
          { label: "Step 2: Insert 38", text: "38 becomes the red left child of 41. Its parent is black, so no property is violated and the fixup loop never runs." },
          { label: "Step 3: Insert 31 — Case 3", text: "31 is the red left child of 38, which is red: property 4 is violated. The uncle is 41's right child — the black sentinel — and $z = 31$ is a left child, so **case 3** fires: color 38 black and 41 red, then RIGHT-ROTATE(41). The tree becomes 38 (black) with red children 31 and 41 — one rotation, done." },
          { label: "Step 4: Insert 12 — Case 1", text: "12 is the red left child of 31 (red) — red-red again. The uncle is 41, which is **red**: **case 1** fires. Recolor 31 and 41 black, recolor the grandparent 38 red, and set $z = 38$. Since $z$ is now the root, the loop exits and the final line makes 38 black again." }
        ],
        result: "Final tree: 38 (black) root with black children 31 and 41, and 12 red under 31. Every root-to-NIL path crosses exactly two black nodes besides the root — valid, built with one rotation and one recoloring cascade."
      },
      {
        title: "Uncle-red chain of two levels",
        problem: "Insert $12$ then $5$ into red-black tree $41(B), 38(R, left of 41), 31(B, left of 38)$ style chain to force two successive case-1 recolorings.",
        steps: [
          { label: "Insert 12 red", text: "Parent $31$ red, uncle (right child of $38$) black? To force case 1 need red uncle: use tree where $38$ has red sibling: recolor parent+uncle black, grandparent red, move $z$ to grandparent." },
          { label: "Propagate", text: "$z$ rises two levels per case-1: each absorbs one black-height unit upward with no rotations." },
          { label: "Terminate", text: "Chain ends at red root (recolor black, height $+1$) or at a black-uncle case 2/3 (at most $2$ rotations). Hence $O(\\lg n)$ recolorings, $\\le 2$ rotations." },
          { label: "Count", text: "Two case-1 steps plus one case-2/3 pair is the worst insertion pattern: $O(\\lg n)$ time, constant rotations." },
        ],
        result: "Case 1 propagates red-red upward; at most $2$ rotations ever close it: insertion is $O(\\lg n)$ with $O(1)$ structural changes.",
      },
    ],
    keyTakeaways: [
      "Insert the new node red: a red leaf cannot disturb any black count, so only the black-root rule (property 2) and the no-adjacent-reds rule (property 4) can break.",
      "Case 1 (red uncle) recolors and climbs two levels; case 2 (black uncle, zig-zag) rotates into case 3; case 3 (black uncle, straight line) recolors and rotates once, ending the loop.",
      "The fixup runs in O(lg n) — only case 1 iterates, moving the violation up two levels at a time — and performs at most 2 rotations."
    ],
    quiz: [
      {
        q: "Right after the plain insertion of a red node z into a red-black tree, which properties can be violated?",
        options: ["Any of the five", "Only property 5", "Only properties 2 and 4", "Only properties 2 and 3"],
        answer: 2,
        explanation: "A red leaf leaves every black count intact (property 5 safe) and NILs untouched (property 3 safe); only the root's color (property 2) and a possible red parent (property 4) can be wrong."
      },
      {
        q: "RB-INSERT-FIXUP case 1 (red uncle) resolves the local violation by:",
        options: ["rotating the grandparent and recoloring", "recoloring the parent and uncle black, the grandparent red, then moving z to the grandparent", "recoloring z itself black", "performing two rotations immediately"],
        answer: 1,
        explanation: "The recoloring fixes the red-red pair at z but may create a new one two levels up — hence z = z.p.p and the loop continues. No rotation happens in case 1."
      },
      {
        q: "Why is the newly inserted node colored red rather than black?",
        options: ["red nodes are faster to search through", "a red leaf changes no black count on any path, so property 5 cannot be violated", "property 1 requires every new node to be red", "black would always violate property 4"],
        answer: 1,
        explanation: "Inserting black would add one black to exactly the paths through the new node, breaking property 5 everywhere; red is the only safe initial color."
      },
      {
        q: "During a single execution of RB-INSERT-FIXUP, the case that can repeat is:",
        options: ["case 1", "case 2", "case 3", "all three repeat"],
        answer: 0,
        explanation: "Only case 1 iterates (the violation climbs to the grandparent); case 2 converts to case 3, and case 3 terminates the loop — so at most 2 rotations overall."
      }
    ]
  },

  // ---------------------------------------------------------------- 13.4
  {
    sectionId: "clrs-ch13-s4",
    readingTime: 7,
    intro: "Deletion is where red-black trees earn their keep. Removing a black node shortens the black count of every path that used to pass through it, so RB-DELETE-FIXUP does not patch a violated rule directly — it pushes a conceptual extra black up the tree until a rotation absorbs it or a red node soaks it up. The case analysis is longer than insertion's, but the machinery is identical: recolor, rotate, terminate.",
    objectives: [
      "Trace RB-DELETE, including when and why RB-DELETE-FIXUP is invoked",
      "Interpret the extra black and apply the four sibling cases and their mirrors",
      "Bound the work: O(lg n) time and at most 3 rotations per deletion"
    ],
    concepts: [
      {
        term: "RB-DELETE",
        kind: "method",
        statement: "Delete as in an ordinary BST, with RB-TRANSPLANT doing the splicing and $T.nil$ standing in for absent children: if $z$ has fewer than two children, $z$ itself is removed; otherwise $z$'s successor $y$ is moved into $z$'s place. Record **y-original-color** — the color of the node that was removed or moved. Call **RB-DELETE-FIXUP**$(T, x)$ exactly when that color was **black**, where $x$ is the node (possibly the sentinel) that took $y$'s place.",
        detail: "When the successor is used, the algorithm first unhooks $y$ from its parent and later colors it with $z$'s old color, so the only color actually lost from the tree is y-original-color."
      },
      {
        term: "The extra black",
        kind: "definition",
        statement: "If the removed or moved node was black, one black node is now missing from every path that passed through the spot $x$ occupies. CLRS models this by saying $x$ carries an **extra black**: $x$ is *doubly black* (its blackness counts twice) or *red-and-black* if $x$ happens to be red. The fixup must push this extra black up the tree until it vanishes — into a rotation, or into a red node turning black.",
        detail: "The extra black is conceptual bookkeeping: it explains how property 5 gets restored, while the observable violations the loop tests for are black-height imbalance and, occasionally, a red root."
      },
      {
        term: "Case 1 — the sibling w is red",
        kind: "method",
        statement: "If $x$'s sibling $w$ is **red**, then $w$'s children must be black. Recolor $w$ black and $x.p$ red, then rotate $x.p$ so that $w$ becomes $x$'s new sibling — which is black. Case 1 costs one rotation and cannot recur; it merely converts the configuration into one of cases 2, 3 or 4.",
        detail: "The rotation moves $x$ under a red parent with a black sibling — the same shape the black-sibling cases know how to finish."
      },
      {
        term: "Cases 2–4 — the sibling w is black",
        kind: "method",
        statement: "**Case 2** (both of $w$'s children black): take one black off $x$ and one off $w$ — recolor $w$ red — and pass the extra black to $x.p$, then iterate. **Case 3** ($w$'s near child red, far child black): one rotation and recoloring converts it to case 4. **Case 4** ($w$'s far child red): recolor and rotate so the extra black is absorbed into the new parent; the tree is valid and the loop ends.",
        detail: "Case 2 is the only case that iterates — and if $x.p$ was red, the extra black immediately soaks into it and the loop exits after recoloring it black."
      },
      {
        term: "Cost of deletion",
        kind: "insight",
        statement: "Case 1 occurs at most once, cases 3 and 4 always finish, and only case 2 climbs — so RB-DELETE-FIXUP performs **at most 3 rotations** and $O(\\lg n)$ recolorings. Deletion, like every other operation, runs in $O(\\lg n)$.",
        detail: "As with insertion, the mirror cases (x a right child) simply exchange left and right throughout the analysis."
      }
    ],
    examples: [
      {
        title: "Shrinking a red-black tree by three deletions",
        problem: "Start from the Section 13.1 tree: root 7 black; red children 3 and 10; black grandchildren 1, 5, 8, 12. Delete 1, then 12, then 5.",
        steps: [
          { label: "Step 1: Delete 1 — a black leaf", text: "The sentinel moves into 1's place carrying the extra black ($x$ is doubly black). Its sibling is 5 — black with two black NIL children — so **case 2** fires: recolor 5 red and push the extra black to the parent 3. Node 3 is red-and-black, so the loop exits and 3 becomes plain black." },
          { label: "Step 2: Check the state", text: "Tree: 7 black; 3 black with red right child 5; 10 red with black children 8 and 12. Every root-to-NIL path again crosses exactly two black nodes besides the root — property 5 restored with zero rotations." },
          { label: "Step 3: Delete 12 — case 2 again", text: "12 is a black leaf; its sibling 8 is black with two black NIL children: **case 2** recolors 8 red and lifts the extra black to 10, which is red — so 10 turns black. Tree: 7 black; 3 black (child 5 red); 10 black (child 8 red)." },
          { label: "Step 4: Delete 5 — a red leaf", text: "The removed node is red: no black count changes on any path, so no fixup is invoked at all. The red node simply vanishes." }
        ],
        result: "Final tree: 7 black with children 3 (black) and 10 (black, with red child 8) — still a valid red-black tree. Two case-2 absorptions, one free red deletion, and not a single rotation."
      },
      {
        title: "Deleting a red leaf needs no fixup",
        problem: "Delete red leaf $12$ from a valid red-black tree. Show RB-DELETE skips FIXUP.",
        steps: [
          { label: "Color check", text: "Removed node $z = 12$ red: no black-height on any path changes, since red nodes contribute $0$ to the count." },
          { label: "Transplant", text: "Replace $12$ by $T.nil$ (black leaf): all root-to-leaf black counts unchanged." },
          { label: "No extra black", text: "FIXUP runs only when the removed node was black; here $y$'s original color was red, so RB-DELETE returns immediately." },
          { label: "Contrast", text: "Deleting a black leaf creates the double-black that cases 1-4 chase: color, not position, decides whether fixup runs." },
        ],
        result: "Red-leaf deletion is $O(\\lg n)$ search plus $O(1)$ splice with no fixup; black deletions pay the $O(\\lg n)$ four-case repair.",
      },
    ],
    keyTakeaways: [
      "The fixup runs exactly when the removed or moved node was black; deleting a red node never disturbs a black count.",
      "The extra black rides up through case 2, gets re-aimed by case 3, and is absorbed by case 4's recolor-and-rotate — or simply soaks into any red node it lands on.",
      "Deletion costs O(lg n) with at most 3 rotations; the mirror-image cases swap left and right throughout."
    ],
    quiz: [
      {
        q: "RB-DELETE-FIXUP is invoked exactly when:",
        options: ["every deletion calls it", "the node that was removed or moved had black as its original color", "the deleted key z was red", "the root is the node being deleted"],
        answer: 1,
        explanation: "Only losing a black node can change black counts (property 5). A red removal leaves every path's black count alone, so no repair is needed."
      },
      {
        q: "In case 2 (black sibling, both of its children black), the fixup:",
        options: ["performs two rotations and stops", "recolors the sibling red and pushes the extra black to the parent, possibly iterating", "recolors the sibling red and stops immediately", "swaps the colors of x and x.p"],
        answer: 1,
        explanation: "Stripping one black from both x and the sibling keeps those paths balanced; the parent inherits the extra black, and the loop continues — ending at once if the parent was red."
      },
      {
        q: "Which case ends the fixup by rotating so that the extra black is fully absorbed into the tree?",
        options: ["case 1", "case 2", "case 4", "the case where x is the root"],
        answer: 2,
        explanation: "Case 4 exploits the sibling's red far child: after recoloring and one rotation, the black that was missing is restored on every path and the loop terminates with a valid tree."
      },
      {
        q: "Across a full RB-DELETE, including the fixup, the maximum number of rotations is:",
        options: ["1", "2", "3", "Θ(lg n)"],
        answer: 2,
        explanation: "Case 1 can happen at most once (1 rotation), then case 3 (1 rotation) followed by case 4 (1 rotation) — never more than 3 in total."
      }
    ]
  }
]
