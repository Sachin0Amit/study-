import type { SectionContent } from "../library"

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition (Cormen, Leiserson, Rivest
// & Stein, MIT Press 2009). Chapter 12: Binary Search Trees (12.1 – 12.4).
// Master study content.
// ============================================================================

export const clrsCh12Content: SectionContent[] = [
  // ---------------------------------------------------------------- 12.1
  {
    sectionId: "clrs-ch12-s1",
    readingTime: 5,
    intro: "A binary search tree is a linked structure whose shape is dictated by insertion order but whose content obeys one powerful invariant: everything in the left subtree is smaller, everything in the right subtree is larger. This section defines the invariant, the representation, and the inorder tree walk — the traversal that quietly turns a tree into a sorted list.",
    objectives: [
      "State the binary-search-tree property precisely and test a given tree against it",
      "Implement and analyze the inorder tree walk, including its correctness argument",
      "Distinguish inorder, preorder and postorder walks and their uses"
    ],
    concepts: [
      {
        term: "The binary-search-tree property",
        kind: "definition",
        statement: "For every node $x$: the keys in the **left subtree** of $x$ are at most $x.key$, and the keys in the **right subtree** are at least $x.key$. Equivalently, every key in the subtree rooted at $x$ lies between the keys on the path bounding it — the property is inherited down entire subtrees, not just parent–child pairs.",
        detail: "The property forces the minimum key to the leftmost node and the maximum to the rightmost node of the whole tree."
      },
      {
        term: "Representation",
        kind: "notation",
        statement: "Each node $x$ stores its key and satellite data plus three pointers: $x.left$, $x.right$ and $x.p$ (the parent); absent children and the parent of the root are **NIL**. The tree is identified by its root pointer, and if $x.p =$ NIL then $x$ is the root.",
        detail: "The minimum node is found by following left children from the root until NIL; the maximum symmetrically with right children."
      },
      {
        term: "Inorder tree walk",
        kind: "method",
        statement: "**INORDER-TREE-WALK**$(x)$: if $x \\ne$ NIL, walk $x.left$, print $x.key$, then walk $x.right$. On any binary search tree this prints the keys **in sorted order**, and it costs $\\Theta(n)$ for a tree with $n$ nodes — every node is visited once, with constant overhead per visit.",
        detail: "Correctness is a loop-invariant argument: the walk on a subtree rooted at x prints exactly its keys, left subtree before x before right subtree — which sorted order demands by the BST property."
      },
      {
        term: "Preorder and postorder walks",
        kind: "method",
        statement: "**Preorder** prints the node before its subtrees; **postorder** prints it after. The three walks differ only in where the print statement sits relative to the two recursive calls, and each runs in $\\Theta(n)$.",
        detail: "Preorder is the natural order for copying a tree (a node must exist before its children attach); postorder for freeing one (children must be released first)."
      },
      {
        term: "The sorted-sequence equivalence",
        kind: "theorem",
        statement: "Inorder tree walk prints keys in nondecreasing order if and only if the binary-search-tree property holds at every node. The walk is therefore both a correctness test and the definition's operational meaning.",
        detail: "Theorem 12.1: the walk takes $\\Theta(n)$ time for $n$ nodes. Preorder ($root$, left, right) records structure for copying; postorder (left, right, $root$) suits deletion; only inorder is sorted.",
      },
    ],
    figures: [
      {
        caption: "A binary search tree on the keys $\\{15, 6, 18, 3, 7, 17, 20, 2, 4\\}$. The green badges record the inorder walk's visiting order — $2, 3, 4, 6, 7, 15, 17, 18, 20$ — which is exactly the sorted key sequence, whatever the tree's shape.",
        svg: '<svg viewBox="0 0 720 315" width="100%" role="img" aria-label="A binary search tree with inorder visiting order numbered on the nodes"><text x="360" y="22" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">green badges: the order in which the inorder walk visits the nodes</text><line x1="360" y1="50" x2="230" y2="125" stroke="currentColor" stroke-width="1.6"/><line x1="360" y1="50" x2="500" y2="125" stroke="currentColor" stroke-width="1.6"/><line x1="230" y1="125" x2="140" y2="200" stroke="currentColor" stroke-width="1.6"/><line x1="230" y1="125" x2="300" y2="200" stroke="currentColor" stroke-width="1.6"/><line x1="500" y1="125" x2="445" y2="200" stroke="currentColor" stroke-width="1.6"/><line x1="500" y1="125" x2="580" y2="200" stroke="currentColor" stroke-width="1.6"/><line x1="140" y1="200" x2="75" y2="275" stroke="currentColor" stroke-width="1.6"/><line x1="140" y1="200" x2="205" y2="275" stroke="currentColor" stroke-width="1.6"/><circle cx="360" cy="50" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="360" y="55" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">15</text><circle cx="230" cy="125" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="230" y="130" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">6</text><circle cx="500" cy="125" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="500" y="130" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">18</text><circle cx="140" cy="200" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="140" y="205" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">3</text><circle cx="300" cy="200" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="300" y="205" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">7</text><circle cx="445" cy="200" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="445" y="205" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">17</text><circle cx="580" cy="200" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="580" y="205" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">20</text><circle cx="75" cy="275" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="75" y="280" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">2</text><circle cx="205" cy="275" r="17" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="205" y="280" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">4</text><circle cx="58" cy="262" r="8.5" fill="#10b981"/><text x="58" y="265.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="#ffffff">1</text><circle cx="123" cy="187" r="8.5" fill="#10b981"/><text x="123" y="190.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="#ffffff">2</text><circle cx="188" cy="262" r="8.5" fill="#10b981"/><text x="188" y="265.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="#ffffff">3</text><circle cx="213" cy="112" r="8.5" fill="#10b981"/><text x="213" y="115.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="#ffffff">4</text><circle cx="283" cy="187" r="8.5" fill="#10b981"/><text x="283" y="190.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="#ffffff">5</text><circle cx="343" cy="37" r="8.5" fill="#10b981"/><text x="343" y="40.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="#ffffff">6</text><circle cx="428" cy="187" r="8.5" fill="#10b981"/><text x="428" y="190.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="#ffffff">7</text><circle cx="483" cy="112" r="8.5" fill="#10b981"/><text x="483" y="115.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="#ffffff">8</text><circle cx="563" cy="187" r="8.5" fill="#10b981"/><text x="563" y="190.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="#ffffff">9</text><text x="360" y="307" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.85">INORDER-TREE-WALK prints 2 · 3 · 4 · 6 · 7 · 15 · 17 · 18 · 20 — sorted, always, in Θ(n)</text></svg>',
        afterConcept: 3,
      }
    ],
    examples: [
      {
        title: "Spotting a fake BST",
        problem: "A tree has root 15 with left child 6; node 6 has left child 3 and right child 20. Every parent–child pair is correctly ordered. Is this a valid binary search tree?",
        steps: [
          { label: "Step 1: Check parent–child pairs only", text: "Each edge looks fine: $6 < 15$, $3 < 6$, $20 > 6$. A hasty check stops here and says yes." },
          { label: "Step 2: Apply the full property", text: "The BST property speaks about **subtrees**: every key in 15's left subtree must be at most 15. But 20 sits in 15's left subtree (via 6's right child) and $20 > 15$ — violation." },
          { label: "Step 3: Cross-check with the inorder walk", text: "An inorder walk prints $3, 6, 20, 15$ — the sequence is not sorted, which is the giveaway: a tree is a BST **if and only if** its inorder walk is sorted." },
          { label: "Step 4: Repair", text: "Moving 20 into the right subtree of 15 (say as 18's child) restores the invariant: the walk then prints $3, 6, 15, 18, 20$ sorted." }
        ],
        result: "Invalid — the BST property constrains whole subtrees, so a node deep on the left must still respect every ancestor above it, not just its parent."
      },
      {
        title: "Inorder on five keys",
        problem: "Inorder-walk the BST with root $4$, left child $2$ (children $1,3$), right child $5$. List the output and the visit order.",
        steps: [
          { label: "Left subtree", text: "Walk $2$: walk $1$ (print $1$), print $2$, walk $3$ (print $3$): yields $1,2,3$." },
          { label: "Root", text: "Print $4$: sequence $1,2,3,4$." },
          { label: "Right", text: "Walk $5$: print $5$: final $1,2,3,4,5$: sorted, confirming the BST property." },
          { label: "Cost", text: "Each edge traversed twice (down and up): $2(n-1)$ edge steps plus $n$ prints $= \\Theta(n)$." },
        ],
        result: "Output $1,2,3,4,5$ in $\\Theta(5)$ time; any BST-property violation would surface as an inversion in this list.",
      },
    ],
    keyTakeaways: [
      "The BST property orders whole subtrees: left keys ≤ node key ≤ right keys, recursively — a single deep misplaced node breaks it.",
      "The inorder tree walk (left, node, right) prints the keys in sorted order in $\\Theta(n)$, and this characterizes BSTs.",
      "Preorder and postorder visit every node too ($\\Theta(n)$); their positions relative to the recursive calls suit copying and deleting trees respectively."
    ],
    quiz: [
      {
        q: "Which traversal of a binary search tree outputs keys in sorted order?",
        options: ["Preorder walk", "Postorder walk", "Inorder walk", "Level-order walk"],
        answer: 2,
        explanation: "Inorder (left subtree, node, right subtree) matches sorted order exactly because of the BST property — the left keys are smaller, the right keys larger."
      },
      {
        q: "A node with key 8 sits as the right child of a node with key 5, which is the left child of the root 20. Is the tree necessarily invalid?",
        options: [
          "No — 8 > 5 satisfies the local ordering",
          "Yes — 8 > 5 but the pair sits in the root's left subtree, so 8 must be ≤ 20, which holds; more information is needed",
          "Yes — right children must have keys larger than the root",
          "No — only the root's direct children matter"
        ],
        answer: 1,
        explanation: "Being in the left subtree of 20 forces key ≤ 20; 8 ≤ 20 is fine and 8 > 5 satisfies its parent. With only these three keys the tree is valid — the constraint to check was ≤ 20, not ≤ 5."
      },
      {
        q: "How much time does INORDER-TREE-WALK take on a tree with n nodes, regardless of its shape?",
        options: ["Θ(lg n)", "Θ(n)", "Θ(h), the tree's height", "Θ(n lg n) because it sorts"],
        answer: 1,
        explanation: "Every node is visited exactly once with constant work per visit — Θ(n) whether the tree is balanced or a chain. No sorting machinery is invoked; sorted output is a free consequence of the walk order."
      },
      {
        q: "Where is the minimum key of any binary search tree?",
        options: [
          "At the root",
          "At the leftmost node, reached by following left children from the root",
          "At the rightmost node",
          "At whichever leaf was inserted first"
        ],
        answer: 1,
        explanation: "Following left children strictly decreases keys and must terminate at the leftmost node; every other node has some key ≤ it to its left by the subtree property."
      }
    ]
  },

  // ---------------------------------------------------------------- 12.2
  {
    sectionId: "clrs-ch12-s2",
    readingTime: 6,
    intro: "The BST property makes searching feel like binary search, and it makes minima, maxima, successors and predecessors follow simple pointer rules. Every one of these queries runs in time proportional to the tree's height h — which is why h, and everything that controls it, will dominate this entire chapter.",
    objectives: [
      "Implement TREE-SEARCH, MINIMUM and MAXIMUM and argue the O(h) bound",
      "Execute the two cases of TREE-SUCCESSOR by hand, including the ancestor-climb case",
      "Explain why height is the governing resource and how badly it can degrade"
    ],
    concepts: [
      {
        term: "TREE-SEARCH",
        kind: "method",
        statement: "To search for a key $k$: start at the root; if $k <$ node key go left, if $k >$ node key go right, and stop at a match or at NIL. The recursive and iterative forms are equivalent, and the search path traces a single **root-to-node path**, so the cost is $O(h)$.",
        detail: "Each comparison discards an entire subtree — exactly the binary-search move, but along pointers instead of array halves."
      },
      {
        term: "MINIMUM and MAXIMUM",
        kind: "method",
        statement: "TREE-MINIMUM$(x)$: while $x.left \\ne$ NIL, set $x = x.left$; return $x$. TREE-MAXIMUM symmetrically follows right children. Both walk a single descending path and cost $O(h)$.",
        detail: "They also form the base case of the successor computation — the successor uses the minimum of a right subtree."
      },
      {
        term: "TREE-SUCCESSOR",
        kind: "theorem",
        statement: "The successor of node $x$ (the smallest key greater than $x.key$) is found in two mutually exclusive cases: **(a)** if $x$ has a right subtree, the successor is the **minimum of that right subtree**; **(b)** otherwise, it is the **lowest ancestor of $x$ whose left child is also an ancestor of $x$** (walk up while taking right-child edges; the first left turn's parent is it). The successor of the maximum is NIL.",
        detail: "PREDECESSOR is the mirror image: maximum of the left subtree, else the lowest ancestor approached from the right."
      },
      {
        term: "Height is the resource",
        kind: "insight",
        statement: "SEARCH, MINIMUM, MAXIMUM, SUCCESSOR and PREDECESSOR all run in $O(h)$, where $h$ ranges from $\\lfloor \\lg n \\rfloor$ (perfectly balanced) up to $n - 1$ (a chain built by inserting sorted keys). The same tree can therefore support $\\Theta(\\lg n)$ or $\\Theta(n)$ searches depending purely on insertion order.",
        detail: "Sorting n keys by inserting them into a BST and then walking inorder costs Θ(nh) — Θ(n lg n) only when the tree is balanced; this is exactly the gap Chapter 13's red-black trees close."
      },
      {
        term: "Iterative TREE-SEARCH",
        kind: "method",
        statement: "Starting at the root, while $x \\ne \\mathrm{NIL}$ and $k \\ne x.key$, go left if $k < x.key$ else right. Same $O(h)$ bound as recursion with $O(1)$ extra space: the loop follows one root-to-leaf path.",
        detail: "Recursion depth equals height $h$; iteration removes the call stack. MINIMUM/MAXIMUM are the same loop driven to the extreme child.",
      },
    ],
    examples: [
      {
        title: "Both successor cases on one tree",
        problem: "On the BST with keys $\\{15, 6, 18, 3, 7, 17, 20, 2, 4\\}$ (root 15; 6 has children 3 and 7; 18 has children 17 and 20; 3 has children 2 and 4), find the successor of 7 and of 4.",
        steps: [
          { label: "Step 1: Successor of 7 — check the right subtree", text: "Node 7 has **no right child**, so case (a) does not apply; the answer is above 7, not below it." },
          { label: "Step 2: Climb from 7", text: "Walk up: 7 is the **right child** of 6 — keep climbing, it cannot be the answer (6 < 7). Next, 6 is the **left child** of 15 — stop. The successor of 7 is $15$." },
          { label: "Step 3: Verify with sorted order", text: "Sorted: $2, 3, 4, 6, 7, 15, 17, 18, 20$ — indeed 15 directly follows 7." },
          { label: "Step 4: Successor of 4 — again no right child", text: "Node 4 is the right child of 3 — climb. Node 3 is the **left child** of 6 — stop: successor of 4 is $6$, which the sorted list confirms." },
          { label: "Step 5: Contrast the easy case", text: "For 18, which **has** a right subtree, the successor is simply the minimum of that subtree: leftmost from 20 is $20$ itself. Case (a), one descending walk." }
        ],
        result: "With a right child: descend to that subtree's minimum. Without: climb until the path takes a left turn — the turn's parent is the successor."
      },
      {
        title: "Predecessor when left subtree exists",
        problem: "Find TREE-PREDECESSOR of node $15$ whose left child $10$ has right subtree $10 \\to 12 \\to 14$.",
        steps: [
          { label: "Rule", text: "With a left subtree, predecessor is MAXIMUM of that subtree: go left once, then right until $\\mathrm{NIL}$." },
          { label: "Walk", text: "$15 \\to 10$ (left), $10 \\to 12$ (right), $12 \\to 14$ (right), $14.right = \\mathrm{NIL}$: stop at $14$." },
          { label: "Check", text: "$14$ is the largest key below $15$: inorder neighbours are $\\ldots, 14, 15, \\ldots$." },
          { label: "Other case", text: "Without a left subtree the answer would be the lowest ancestor whose right child is also an ancestor: the climb case covered in the section's first example." },
        ],
        result: "Predecessor is $14$ after one left step and two right steps: $O(h)$ with $h = 3$ here.",
      },
    ],
    keyTakeaways: [
      "All BST queries — SEARCH, MINIMUM, MAXIMUM, SUCCESSOR, PREDECESSOR — follow a single path and cost $O(h)$.",
      "SUCCESSOR has two cases: minimum of the right subtree if it exists, otherwise the lowest ancestor whose left child is also an ancestor.",
      "Height ranges from $\\lg n$ to $n-1$ depending on insertion order; unbalanced BSTs degrade to linked lists — the motivation for Chapter 13."
    ],
    quiz: [
      {
        q: "Node x has no right subtree. Its successor is:",
        options: [
          "NIL, because only leaves have successors",
          "The lowest ancestor of x whose left child is also an ancestor of x",
          "Its parent, always",
          "The minimum of the left subtree"
        ],
        answer: 1,
        explanation: "Climb from x while you arrived from a right child; the first ancestor you approach from its left child is the smallest key above x. The parent is the answer only in that special case."
      },
      {
        q: "Which statement about the time bounds of the BST queries is correct?",
        options: [
          "SEARCH is O(lg n) always, the others are O(n)",
          "All of SEARCH, MINIMUM, MAXIMUM, SUCCESSOR run in O(h), and h can be n − 1",
          "SUCCESSOR alone runs in O(1)",
          "MINIMUM runs in O(lg n) always because it is a binary search"
        ],
        answer: 1,
        explanation: "Every query follows one root-to-node or node-to-root path of length at most h. In a chain h = n − 1, so all queries degrade to Θ(n) — no query has an unconditional O(lg n) bound."
      },
      {
        q: "In the tree of the worked example, TREE-SUCCESSOR of 3 is:",
        options: ["6", "4", "2", "15"],
        answer: 1,
        explanation: "Node 3 has a right subtree (containing 4), so case (a) applies: the successor is its minimum, the leftmost node there — 4 itself."
      },
      {
        q: "Keys 1, 2, 3, 4, 5 are inserted in order into an empty BST. What is the cost of a subsequent unsuccessful search?",
        options: ["Θ(1)", "Θ(lg n)", "Θ(n) — the tree is a right-leaning chain", "Θ(n lg n)"],
        answer: 2,
        explanation: "Sorted insertion builds a chain of height n − 1 = 4; searching for 6 walks all five nodes. Only random or balanced insertion orders keep the tree short."
      }
    ]
  },

  // ---------------------------------------------------------------- 12.3
  {
    sectionId: "clrs-ch12-s3",
    readingTime: 7,
    intro: "Insertion is a walk down to a leaf plus one pointer change. Deletion is the intricate half of the chapter: three structurally different cases, unified by a small pointer-surgery helper called TRANSPLANT. Getting the two-children case right — splice the successor — is the classic exam skill this section drills.",
    objectives: [
      "Insert a new key as a leaf with TREE-INSERT and account for its O(h) cost",
      "Explain TRANSPLANT as pure subtree replacement",
      "Execute all three deletion cases, including the deep-successor case"
    ],
    concepts: [
      {
        term: "TREE-INSERT",
        kind: "method",
        statement: "To insert key $k$: descend from the root as a search would, carrying a trailing parent pointer, until hitting NIL; attach the new node (with key $k$, children NIL) as that parent's left or right child. Cost $O(h)$, and the new node always enters as a **leaf**.",
        detail: "Insertion never rearranges existing nodes — which is precisely why a bad insertion order produces a lopsided tree."
      },
      {
        term: "TRANSPLANT",
        kind: "method",
        statement: "**TRANSPLANT**$(T, u, v)$ replaces the **subtree rooted at $u$** by the **subtree rooted at $v$**: it updates $u$'s parent to point at $v$ and sets $v.p = u.p$ (handling root and NIL cases). It is blind to keys — pure pointer surgery, $O(1)$.",
        detail: "TRANSPLANT never touches the children of u or v; it only rewires the single edge that hangs the subtree."
      },
      {
        term: "The three deletion cases",
        kind: "method",
        statement: "Deleting node $z$: **(1) no children** — TRANSPLANT$(z, \\mathrm{NIL})$; **(2) one child** — TRANSPLANT$(z, z$'s child$)$, splicing $z$ out; **(3) two children** — find $y = $ TREE-MINIMUM$(z.right)$, the successor; if $y \\ne z.right$, first TRANSPLANT$(y, y.right)$ to slide $y$'s right subtree up, then TRANSPLANT$(z, y)$ and give $y$ both of $z$'s old subtrees.",
        detail: "In case (3) the key that physically moves is z's successor — the smallest key of the right subtree, which by construction has no left child."
      },
      {
        term: "Analysis and caution",
        kind: "insight",
        statement: "Insertion and deletion both run in $O(h)$ time on a BST of height $h$ — and both can change the tree's height. Deletion in particular can silently make a tree **more** lopsided over time, which is why the balanced-tree machinery of the next chapter exists.",
        detail: "CLRS's warning: as a rule, the height of a BST over a sequence of operations is the adversary's plaything — an alternating pattern of inserts and deletes can leave the tree much taller than n would suggest."
      },
      {
        term: "Deleting the root",
        kind: "method",
        statement: "Deleting the root uses the same three cases with $parent = \\mathrm{NIL}$: TRANSPLANT updates the tree's $root$ pointer instead of a parent's child field. The deep-successor case still splices $y$ out of its old parent before moving it to the root.",
        detail: "Root deletion is the stress test for TRANSPLANT: no parent exists, so the procedure's first branch ($u.p = \\mathrm{NIL}$) is the only one exercised, and the successor's original parent must still be rewired.",
      },
    ],
    figures: [
      {
        caption: "The three deletion cases. Case 1: a childless $z$ is replaced by NIL. Case 2: $z$'s single child $c$ is spliced directly into $z$'s place. Case 3: with two children, the successor $y$ = MINIMUM(right($z$)) rises into $z$'s slot while its own right subtree ($x$) slides under $r$; every key remains inorder-sorted.",
        svg: '<svg viewBox="0 0 740 340" width="100%" role="img" aria-label="Three before-and-after panels showing the BST deletion cases"><text x="120" y="24" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.85" font-weight="600">z has no children</text><text x="370" y="24" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.85" font-weight="600">z has one child</text><text x="620" y="24" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.85" font-weight="600">z has two children</text><line x1="58" y1="100" x2="105" y2="170" stroke="currentColor" stroke-width="1.6"/><circle cx="58" cy="100" r="13" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="58" y="104.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">p</text><circle cx="105" cy="170" r="13" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="2"/><text x="105" y="174.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">z</text><text x="81" y="215" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.55">before</text><line x1="128" y1="135" x2="152" y2="135" stroke="currentColor" stroke-width="1.4"/><polygon points="160,135 150,130.5 150,139.5" fill="currentColor"/><circle cx="185" cy="100" r="13" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="185" y="104.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">p</text><line x1="185" y1="113" x2="185" y2="160" stroke="currentColor" stroke-width="1.4" opacity="0.5"/><rect x="179" y="160" width="12" height="12" fill="currentColor" opacity="0.5"/><text x="202" y="171" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.55">nil</text><text x="185" y="215" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.55">after</text><text x="120" y="245" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.75">TRANSPLANT(T, z, nil)</text><line x1="308" y1="100" x2="355" y2="170" stroke="currentColor" stroke-width="1.6"/><line x1="355" y1="170" x2="308" y2="240" stroke="currentColor" stroke-width="1.6"/><circle cx="308" cy="100" r="13" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="308" y="104.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">p</text><circle cx="355" cy="170" r="13" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="2"/><text x="355" y="174.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">z</text><circle cx="308" cy="240" r="13" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="308" y="244.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">c</text><text x="331" y="278" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.55">before</text><line x1="382" y1="140" x2="406" y2="140" stroke="currentColor" stroke-width="1.4"/><polygon points="412,140 402,135.5 402,144.5" fill="currentColor"/><line x1="430" y1="100" x2="430" y2="157" stroke="currentColor" stroke-width="1.6"/><circle cx="430" cy="100" r="13" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="430" y="104.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">p</text><circle cx="430" cy="170" r="13" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="430" y="174.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">c</text><text x="470" y="278" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.55">after</text><text x="370" y="298" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.75">TRANSPLANT(T, z, c)</text><line x1="515" y1="105" x2="465" y2="175" stroke="currentColor" stroke-width="1.6"/><line x1="515" y1="105" x2="565" y2="175" stroke="currentColor" stroke-width="1.6"/><line x1="565" y1="175" x2="545" y2="240" stroke="currentColor" stroke-width="1.6"/><line x1="545" y1="240" x2="585" y2="295" stroke="currentColor" stroke-width="1.6"/><circle cx="515" cy="105" r="12" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="2"/><text x="515" y="109.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">z</text><circle cx="465" cy="175" r="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="465" y="179.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.85">l</text><circle cx="565" cy="175" r="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="565" y="179.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.85">r</text><circle cx="545" cy="240" r="12" fill="#10b981" fill-opacity="0.14" stroke="#10b981" stroke-width="2"/><text x="545" y="244.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">y</text><circle cx="585" cy="295" r="11" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6" stroke-dasharray="3 2"/><text x="585" y="299" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">x</text><text x="518" y="322" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.55">before</text><line x1="600" y1="215" x2="618" y2="215" stroke="currentColor" stroke-width="1.4"/><polygon points="626,215 616,210.5 616,219.5" fill="currentColor"/><line x1="660" y1="105" x2="610" y2="175" stroke="currentColor" stroke-width="1.6"/><line x1="660" y1="105" x2="710" y2="175" stroke="currentColor" stroke-width="1.6"/><line x1="710" y1="175" x2="688" y2="240" stroke="currentColor" stroke-width="1.6"/><circle cx="660" cy="105" r="12" fill="#10b981" fill-opacity="0.14" stroke="#10b981" stroke-width="2"/><text x="660" y="109.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">y</text><circle cx="610" cy="175" r="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="610" y="179.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.85">l</text><circle cx="710" cy="175" r="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="710" y="179.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.85">r</text><circle cx="688" cy="240" r="11" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6" stroke-dasharray="3 2"/><text x="688" y="244" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">x</text><text x="672" y="322" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.55">after</text><text x="620" y="334" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.75">y rises; x slides under r</text></svg>',
        afterConcept: 3,
      }
    ],
    examples: [
      {
        title: "Deleting three nodes from the running tree",
        problem: "Starting from the BST with keys $\\{15, 6, 18, 3, 7, 17, 20, 2, 4\\}$ (root 15; 6 has children 3, 7; 18 has children 17, 20; 3 has children 2, 4), delete key 3, then the root 15. Show every pointer change.",
        steps: [
          { label: "Step 1: Delete 3 — two children", text: "$z = 3$ with left child 2 and right child 4. The successor is $y = $ MINIMUM(right subtree) $= 4$, which happens to be $z$'s own right child. Case: TRANSPLANT$(z, y)$ directly — 4 rises into 3's place keeping left child 2." },
          { label: "Step 2: Tree after step 1", text: "Node 6 now has left child 4, and 4 has left child 2: subtree $6 (4 (2, \\cdot), 7)$ — inorder $2, 4, 6, 7$ still sorted." },
          { label: "Step 3: Delete the root 15 — two children again", text: "$z = 15$ with left subtree rooted at 6 and right subtree rooted at 18. Successor $y = $ MINIMUM$(18, \\ldots) = 17$. Here $y \\ne z.right$: 17 is 18's left child." },
          { label: "Step 4: Slide y's right subtree up", text: "$y = 17$ has no right child, so TRANSPLANT$(y, y.right)=$ TRANSPLANT$(17, \\mathrm{NIL})$: 18's left child becomes NIL." },
          { label: "Step 5: Move y into z's place", text: "TRANSPLANT$(15, 17)$: 17 becomes the root; its left child is set to 6, its right child to 18. Final tree: root 17 with left subtree $6 (4 (2, \\cdot), 7)$ and right subtree $18 (\\cdot, 20)$." },
          { label: "Step 6: Verify", text: "Inorder walk of the result: $2, 4, 6, 7, 17, 18, 20$ — exactly the original sorted order minus the deleted keys." }
        ],
        result: "Key insight: when the successor is not z's right child, its own right subtree is first lifted out (TRANSPLANT(y, y.right)) and only then does y take z's place."
      },
      {
        title: "Deleting a node whose successor is deep",
        problem: "Delete $z = 15$ with right child $20$ whose left spine is $20 \\to 17 \\to 16$. Show the two transplants.",
        steps: [
          { label: "Successor", text: "$y = 16$ (minimum of right subtree), $y.p = 17 \\ne z$: deep case." },
          { label: "Splice $y$ out", text: "TRANSPLANT($y$, $y.right = \\mathrm{NIL}$): $17.left = \\mathrm{NIL}$; attach $y.right = 20$'s left? Precisely: $y$ leaves, $20$'s left spine shortens." },
          { label: "Replace $z$", text: "TRANSPLANT($z$, $y$): $y$ takes $15$'s position with $y.left = 15.left$, $y.right = 15.right = 20$." },
          { label: "Verify", text: "BST property holds: $y = 16$ exceeds all of $15$'s left subtree and precedes everything else in $15$'s right subtree." },
        ],
        result: "Two TRANSPLANTs and $O(h)$ pointer writes; the deep case costs one extra splice versus successor-is-child.",
      },
    ],
    keyTakeaways: [
      "TREE-INSERT walks one root-to-leaf path and attaches the new key as a leaf in $O(h)$ — no existing node moves.",
      "TRANSPLANT(T, u, v) is the O(1) primitive that replaces one subtree with another; all deletion cases are combinations of it.",
      "Two-children deletion promotes the successor $y = $ MINIMUM(z.right): if $y \\ne$ z.right, first lift $y$'s right subtree, then transplant $y$ into $z$'s position."
    ],
    quiz: [
      {
        q: "Deleting a node z that has two children: which node's key ends up in z's structural position?",
        options: [
          "z's parent's key",
          "The successor of z — the minimum of z's right subtree",
          "The predecessor of z",
          "The largest key of the left subtree"
        ],
        answer: 1,
        explanation: "The successor is the smallest key above z.key, so it can legally replace z; and because it is the minimum of the right subtree it has no left child, making the splice simple."
      },
      {
        q: "What does TRANSPLANT(T, u, v) do?",
        options: [
          "Copies v's key into u and deletes v",
          "Replaces the subtree rooted at u with the subtree rooted at v, updating only the parent pointers involved",
          "Swaps the subtrees of u and v",
          "Rebalances the path from the root to u"
        ],
        answer: 1,
        explanation: "TRANSPLANT rewires one edge: u's parent comes to point at v, and v.p is set to u.p. Keys, children of u, and children of v are untouched."
      },
      {
        q: "In the worked example, after deleting 3 and then the root 15, which key is the new root?",
        options: ["6", "17", "18", "20"],
        answer: 1,
        explanation: "17 is the successor of 15 and moves into the root slot, with 6's subtree on the left and 18's on the right — the inorder sequence stays sorted."
      },
      {
        q: "Why does CLRS warn that deletion can make a BST lopsided over time?",
        options: [
          "Deletion always removes nodes near the root",
          "Asymmetry of the case analysis: deleting nodes from one side can leave a tall, thin remainder whose height is no longer governed by n",
          "TRANSPLANT reverses the BST property",
          "Deletion doubles the number of NIL leaves"
        ],
        answer: 1,
        explanation: "Nothing in ordinary BST deletion maintains balance: repeated deletes can strip one side of the tree, raising h. Red-black trees (Chapter 13) add exactly the machinery to prevent this."
      },
      // PYQ-pattern — BST deletion by successor (rephrased, values changed)
      {
        q: "Keys $[8, 3, 10, 1, 6, 14, 4, 7, 13]$ are inserted into an empty binary search tree in that order. Deleting key $3$ (which has two children) puts which key in its place?",
        options: ["4", "1", "6", "8"],
        answer: 0,
        explanation: "Step 1 — Given insertion order, node $3$ has left child $1$ and right subtree rooted at $6$ holding ${4, 6, 7}$. Step 2 — Governing rule: a two-child deletion splices in the successor, the minimum of the right subtree, via TRANSPLANT pointer surgery. Step 3 — Trace: successor of $3$ is $\\min({4, 6, 7}) = 4$; node $4$ (a leaf) lifts into position $3$, keeping $1$ left and $6$ right with $7$ still under $6$. Step 4 — Sanity check: inorder before deletion reads $1, 3, 4, 6, 7, 8, 10, 13, 14$ and after reads the same minus $3$, so the property holds. Step 5 — Distractor analysis: $1$ is the predecessor-side minimum, $6$ is the right child but not its minimum, and $8$ is the uninvolved root. Step 6 — Conclude: key $4$ replaces key $3$.",
      },
    ]
  },

  // ---------------------------------------------------------------- 12.4
  {
    sectionId: "clrs-ch12-s4",
    readingTime: 5,
    intro: "Since a BST's shape depends on insertion order, the honest question is: what shape do we get on average? The answer — a height of O(lg n) in expectation — is the guarantee that plain BSTs actually deliver logarithmic behavior when built from random data, and it foreshadows the worst-case guarantees red-black trees will buy with color discipline.",
    objectives: [
      "Define a randomly built binary search tree and relate it to random insertion permutations",
      "State the expected-height theorem and the exponential-height technique behind its proof",
      "Connect random BSTs to randomized quicksort's analysis",
    ],
    concepts: [
      {
        term: "Randomly built BST",
        kind: "definition",
        statement: "A **randomly built binary search tree** on $n$ keys is what results from inserting those keys in an order chosen **uniformly at random** — equivalently, each of the $n!$ insertion permutations is equally likely. Equivalently one may randomize the algorithm itself (insert keys after a random shuffle).",
        detail: "The randomness is over insertion orders, not over the set of keys; the same fixed key set gives many possible trees."
      },
      {
        term: "Expected height is logarithmic",
        kind: "theorem",
        statement: "**Theorem 12.4 (CLRS):** the expected height $\\mathrm{E}[X_n]$ of a randomly built BST on $n$ keys is $O(\\lg n)$ — even though the worst case (a sorted insertion order) is $n - 1$. Randomization converts an adversarial worst case into an average case.",
        detail: "E.g. for n = 3 the six permutations give heights 1, 1, 2, 2, 2, 2 — expectation 5/3, already suggesting the log."
      },
      {
        term: "The exponential-height technique",
        kind: "insight",
        statement: "The proof works on the **exponential height** $Y_n = 2^{X_n}$ instead of $X_n$ itself: one shows $\\mathrm{E}[Y_n] = O(n^3)$ by exploiting that a subtree's height sits below the max of two smaller subproblems, and then applies Jensen's inequality to the concave logarithm: $\\mathrm{E}[X_n] = \\mathrm{E}[\\lg Y_n] \\le \\lg \\mathrm{E}[Y_n] = O(\\lg n)$.",
        detail: "Squaring the problem into an exponential random variable is CLRS's signature move here: sums are easier to take expectations of than maxima."
      },
      {
        term: "The quicksort correspondence",
        kind: "insight",
        statement: "A randomly built BST is structurally the **recursion tree of randomized quicksort** on the same keys: the first inserted key (the root) plays the pivot, its left and right subtrees are the two partitions. Hence BST search cost relates directly to quicksort comparison counts, and both enjoy $O(n \\lg n)$ expected behavior.",
        detail: "This is why randomizing insertion order is the same defensive trick as randomizing the pivot — it prevents the sorted-input worst case."
      },
      {
        term: "Insertion permutation versus key permutation",
        kind: "insight",
        statement: "A randomly built BST from distinct keys $k_1 < \\cdots < k_n$ has the same distribution as inserting the keys in uniformly random order. The shape depends only on relative rank order of arrival, never on key values themselves.",
        detail: "Hence the analysis may fix sorted keys $z_1 < \\cdots < z_n$ and randomize the permutation: identical to RANDOMIZED-QUICKSORT's random-permutation view, which is why both share the $O(n \\lg n)$ expectation and the quicksort correspondence.",
      },
    ],
    examples: [
      {
        title: "Every three-key BST and the expected height",
        problem: "Compute the expected height of a randomly built BST on the keys {1, 2, 3}, where height counts edges on the longest root-to-leaf path.",
        steps: [
          { label: "Step 1: Enumerate the permutations", text: "Insertion orders: $(1,2,3)$, $(1,3,2)$, $(2,1,3)$, $(2,3,1)$, $(3,1,2)$, $(3,2,1)$ — each with probability $1/6$." },
          { label: "Step 2: Build each tree", text: "$(1,2,3)$: 1 at root, 2 its right child, 3 below — a right chain, height 2. $(1,3,2)$: root 1, right child 3 with left child 2 — height 2. $(3,2,1)$ and $(3,1,2)$: mirror chains, height 2." },
          { label: "Step 3: The balanced orders", text: "$(2,1,3)$ and $(2,3,1)$: 2 lands at the root with 1 and 3 as children — a perfect tree of height 1." },
          { label: "Step 4: Average", text: "$\\mathrm{E}[X_3] = \\frac{2+2+1+1+2+2}{6} = \\frac{10}{6} = \\frac{5}{3} \\approx 1.67$ — comfortably below the worst case 2 and already close to $\\lg 3 \\approx 1.58$." }
        ],
        result: "E[height] = 5/3 for n = 3: the average tree is nearly balanced even though one third of the orders build chains."
      },
      {
        title: "Height 3 on four keys is rare",
        problem: "With keys $1,2,3,4$ inserted in random order, what is the probability the BST has height $3$ (a chain)?",
        steps: [
          { label: "Chains", text: "Height $3$ needs sorted or reverse-sorted arrival: $1,2,3,4$ or $4,3,2,1$: $2$ of $4! = 24$ permutations." },
          { label: "Probability", text: "$2/24 = 1/12 \\approx 0.083$: chains are rare; expected height is $O(\\lg n)$ because balanced arrivals dominate." },
          { label: "Typical", text: "Median-first arrivals (e.g. $2$ or $3$ first) give height $2$: $16/24$ of permutations yield the minimum height." },
          { label: "Moral", text: "Random order makes degenerate shapes exponentially unlikely, the same mathematics that makes quicksort's worst case unlikely under random pivots." },
        ],
        result: "Chain probability $1/12$ on $n = 4$; random BSTs are balanced with high probability, height $O(\\lg n)$ in expectation.",
      },
    ],
    keyTakeaways: [
      "A randomly built BST comes from a uniformly random insertion order — n! equally likely shapes for a fixed key set.",
      "Expected height is $O(\\lg n)$ though the worst case is $n-1$; the proof studies $Y_n = 2^{X_n}$, bounds $\\mathrm{E}[Y_n] = O(n^3)$, and applies Jensen's inequality.",
      "Random BSTs are the recursion trees of randomized quicksort — randomization defends against adversarial input in both."
    ],
    quiz: [
      {
        q: "What exactly is “randomly built” in a randomly built binary search tree?",
        options: [
          "Each node is assigned a random key",
          "The insertion order is a uniformly random permutation of the keys",
          "The tree is balanced with random tie-breaking",
          "Each pointer is rewired at random after construction"
        ],
        answer: 1,
        explanation: "The randomness is the choice among the n! insertion orders; the key set itself is fixed. Each order yields one deterministic tree shape."
      },
      {
        q: "For keys {1, 2, 3}, the expected height of a randomly built BST is:",
        options: ["1", "5/3", "2", "lg 3 ≈ 1.58"],
        answer: 1,
        explanation: "Two of the six permutations give the balanced tree of height 1, the other four give chains of height 2: E[X₃] = (2·1 + 4·2)/6 = 10/6 = 5/3."
      },
      {
        q: "Why does the CLRS proof analyze Y_n = 2^{X_n} instead of the height X_n directly?",
        options: [
          "Because heights must be integers",
          "Because E[max of subtrees] is unwieldy while E of a sum like 2·(Y_left + Y_right) is tractable, and Jensen then converts back: E[lg Y] ≤ lg E[Y]",
          "Because binary trees store powers of 2",
          "To avoid using the BST property"
        ],
        answer: 1,
        explanation: "Exponentiating turns the max in the height recurrence into an additive bound (max ≤ sum), giving E[Y_n] = O(n³); concavity of lg then yields E[X_n] ≤ lg E[Y_n] = O(lg n)."
      },
      {
        q: "The deep connection between randomly built BSTs and randomized quicksort is that:",
        options: [
          "Both were invented by the same authors",
          "The BST root plays the pivot: the tree is quicksort's recursion tree, so insertion order ↔ pivot choice and both analyses share structure",
          "Both run in O(n) expected time",
          "Both require balanced merge steps"
        ],
        answer: 1,
        explanation: "First-inserted key = first pivot partitions the remaining keys the same way; the subtrees are the partitions. Randomization defends both against sorted inputs."
      }
    ]
  }
]
