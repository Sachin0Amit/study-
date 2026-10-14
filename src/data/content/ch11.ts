import type { SectionContent } from '../library'

// ============================================================
// Rosen — Discrete Mathematics and Its Applications, 8th Ed
// Chapter 11: Trees — master study content (5 sections)
// ============================================================

export const ch11Content: SectionContent[] = [
  // ---------- 11.1 Introduction to Trees ----------
  {
    sectionId: 'rosen-ch11-s1',
    readingTime: 12,
    intro:
      'Delete edges from a connected graph until every last cycle is gone and what remains is a tree — the leanest structure that still holds everything together. Trees are the shape of hierarchy, of recursive computation, and of every efficient index from file systems to databases; this section builds their vocabulary and proves their central identities.',
    objectives: [
      'Define trees and forests, and prove the equivalence: connected acyclic ⇔ unique simple paths',
      'Master rooted-tree terminology: root, parent, child, sibling, ancestor, descendant, leaf, internal vertex, subtree',
      'Classify m-ary, full m-ary and complete m-ary trees, and define level and height',
      'Apply the counting identities n = i + l, n = mi + 1, l = (m − 1)i + 1 and the logarithmic height bounds',
    ],
    concepts: [
      {
        term: 'Tree',
        kind: 'definition',
        statement:
          'A **tree** is a connected undirected graph with **no simple circuits** (acyclic). A **forest** is an undirected acyclic graph — a disjoint union of trees.',
        detail:
          'Equivalences worth internalizing: a tree with n vertices has exactly n − 1 edges; every edge of a tree is a bridge (removing any one disconnects it); adding any new edge between two nonadjacent vertices creates exactly one circuit.',
      },
      {
        term: 'The unique-path characterization',
        kind: 'theorem',
        statement:
          'An undirected graph is a tree **if and only if there is a unique simple path between every two vertices**.',
        detail:
          'If two different simple paths joined u and v, splicing them would yield a circuit — contradiction. Conversely, in a graph with cycles, the two arcs around any cycle give two different simple paths between its vertices. This theorem is often the fastest way to prove something is (or is not) a tree.',
      },
      {
        term: 'Rooted trees',
        kind: 'definition',
        statement:
          'A **rooted tree** is a tree in which one vertex is designated the **root**. The choice of root induces a natural orientation of every edge away from the root, turning the tree into a directed graph of ancestry.',
        detail:
          'The same unrooted tree can be rooted at different vertices, producing different hierarchies — organization charts, file systems, and parsed programs are rooted trees where the root choice carries meaning.',
      },
      {
        term: 'Ancestry terminology',
        kind: 'definition',
        statement:
          'In a rooted tree, the **parent** of v is the vertex adjacent to v on the path to the root; v is the parent’s **child**. Vertices with the same parent are **siblings**. The **ancestors** of v are all vertices on the path from v to the root (excluding v); its **descendants** are all vertices having v as an ancestor. A **leaf** has no children; an **internal vertex** has at least one child. The **subtree rooted at v** is the tree induced by v and all its descendants.',
        detail:
          'The root is the only vertex with no parent; every other vertex has exactly one parent — the structural fingerprint of hierarchy. Genealogy, HTML/XML nesting and class inheritance all speak this exact language.',
      },
      {
        term: 'm-ary, full and complete m-ary trees',
        kind: 'definition',
        statement:
          'A rooted tree is **m-ary** when every internal vertex has **at most m** children, and **full m-ary** when every internal vertex has **exactly m** children. m = 2 gives (full) **binary trees**; m = 3 gives ternary trees. A **complete** m-ary tree is balanced: all leaves at levels h or h − 1.',
        detail:
          'The phrase full binary tree means every internal vertex branches exactly twice — the workhorse shape of binary search trees, Huffman coding and expression trees in the next sections.',
      },
      {
        term: 'Level and height',
        kind: 'definition',
        statement:
          'The **level** of a vertex is the length of the unique simple path from the root to it (root at level 0). The **height** h of the tree is the maximum level of any vertex — equivalently the length of the longest path from root to leaf.',
        detail:
          'Height is the tree’s depth of nesting and directly measures worst-case search cost: searching a balanced binary tree costs O(height) = O(log n) comparisons.',
      },
      {
        term: 'Counting identities for full m-ary trees',
        kind: 'theorem',
        statement:
          'A full m-ary tree with n vertices, i internal vertices and l leaves satisfies **n = i + l**, **n = mi + 1** and **l = (m − 1)i + 1**. Every non-root vertex is a child, and children point from the mi slots provided by the i internal vertices.',
        detail:
          'For full binary trees: n = 2i + 1 (always odd!) and l = i + 1 (leaves = internal + 1). These instantly answer questions like: 100 leaves ⇒ i = 99 ⇒ n = 199 vertices.',
      },
      {
        term: 'Level bounds',
        kind: 'theorem',
        statement:
          'An m-ary tree of height h has **at most mᵏ vertices at level k** and at most **(mʰ⁺¹ − 1)/(m − 1) vertices in total** (m + m² + … + mʰ for the non-root levels). Consequently an m-ary tree with **l leaves** has **height ≥** $\\lceil \\log_m l \\rceil$, and one with n vertices has height ≥ $\\lceil \\log_m(n(m-1)+1) \\rceil - 1$ — in either case height is forced to grow logarithmically with size.',
        detail:
          'A binary tree with l leaves cannot be shorter than log₂ l — exponential branching is the reason binary search halves the problem at every step. A balanced tree attains the bound: height ⌈log₂ l⌉, so searching a balanced binary tree costs O(log n) comparisons.',
      },
      {
        term: 'Why trees matter everywhere',
        kind: 'insight',
        statement:
          'Trees are simultaneously the minimal connected structure (n − 1 edges), the maximal acyclic structure (add any edge, make a cycle), the shape of hierarchy (rooted), and the shape of divide-and-conquer (recursion trees, decision trees).',
        detail:
          'Whenever an optimization forces connectivity with fewest edges — or acyclicity with most edges — the answer is a tree, and spanning trees in Sections 11.4–11.5 make this a working algorithmic principle.',
      },
    ],
    examples: [
      {
        title: 'Is this graph a tree?',
        problem:
          'A graph has vertices {a, b, c, d, e, f, g} and edges {a,b}, {a,c}, {b,d}, {b,e}, {c,f}, {c,g} — 7 vertices, 6 edges. Verify it is a tree in two different ways.',
        steps: [
          {
            label: 'Count check',
            text: 'It is connected (start at a and reach d, e, f, g through b or c) and has 6 = 7 − 1 edges — consistent with being a tree.',
          },
          {
            label: 'Acyclicity check',
            text: 'Any circuit would need to reuse a vertex, but from any vertex the path back toward a is forced and unique; no cycle can close.',
          },
          {
            label: 'Unique paths',
            text: 'By the characterization theorem, verify: the path from d to g is d — b — a — c — g, and it is unique — no alternative route exists because there is exactly one path from any vertex to the root a.',
          },
          {
            label: 'Read it as a rooted tree',
            text: 'Rooted at a: a has children b, c; b has children d, e; c has children f, g. Leaves {d, e, f, g}, internal vertices {a, b, c}; it is a full binary tree of height 2.',
          },
        ],
        result:
          'Yes — connected and acyclic, with unique simple paths; rooted at a it is a full binary tree with i = 3 internal vertices and l = 4 leaves.',
      },
      {
        title: 'Counting vertices, internal vertices and leaves',
        problem:
          'A full binary tree has 1001 vertices. How many internal vertices and how many leaves does it have? Can a full binary tree have exactly 1000 vertices?',
        steps: [
          {
            label: 'Pick the right identity',
            text: 'For a full binary (full 2-ary) tree, n = 2i + 1 — solve for i: i = (n − 1)/2.',
          },
          {
            label: 'Compute',
            text: 'i = (1001 − 1)/2 = 500 internal vertices; then l = n − i = 1001 − 500 = 501 leaves (check: l = i + 1 ✓).',
          },
          {
            label: 'Test the even case',
            text: 'For n = 1000, i = (1000 − 1)/2 = 499.5 is not an integer — no full binary tree with an even number of vertices can exist.',
          },
          {
            label: 'Explain the parity',
            text: 'Each internal vertex contributes exactly 2 children plus the root contributes itself: n = 2i + 1 is always odd, so even n is impossible by the identity itself.',
          },
        ],
        result: '1001 vertices ⇒ 500 internal, 501 leaves; 1000 vertices is impossible since n = 2i + 1 is always odd.',
      },
      {
        title: 'Height lower bounds',
        problem:
          'A 3-ary tree has 100 leaves. Prove its height is at least 5, and show a tree that achieves it.',
        steps: [
          {
            label: 'Apply the level bound',
            text: 'A 3-ary tree of height h has at most 3ʰ leaves, so h ≥ ⌈log₃ 100⌉.',
          },
          {
            label: 'Evaluate the logarithm',
            text: '3⁴ = 81 < 100 ≤ 243 = 3⁵, so log₃ 100 is between 4 and 5, and the ceiling is 5.',
          },
          {
            label: 'Construct a witness',
            text: 'A height-5 tree exists: start from the full 3-ary tree of height 4 (81 leaves) and extend 9 of its leaves with 3 children each (+18 leaves net) plus 1 more leaf with 2 children (+1 net), giving 81 + 18 + 1 = 100 leaves at height exactly 5 — m-ary trees allow any number of children up to m.',
          },
          {
            label: 'Conclude the bound',
            text: 'No 3-ary tree of height 4 can hold 100 leaves (max 81), so every 3-ary tree with 100 leaves has height ≥ 5 — and 5 is attainable.',
          },
        ],
        result:
          'h ≥ ⌈log₃ 100⌉ = 5 — exponential branching caps the leaves at 3ʰ, forcing logarithmic height.',
      },
    ],
    keyTakeaways: [
      'Tree = connected + acyclic; forest = acyclic (each component a tree)',
      'G is a tree ⇔ unique simple path between any two vertices ⇔ connected with n − 1 edges',
      'Rooted trees speak ancestry: parent, child, sibling, ancestor, descendant, leaf, internal vertex, subtree',
      'Full m-ary tree: n = mi + 1 = i + l, and l = (m − 1)i + 1; full binary trees always have an odd number of vertices and leaves = internal + 1',
      'Level k holds ≤ mᵏ vertices; l leaves force height ≥ $\\lceil \\log_m l \\rceil$ — exponential branching is why balanced search is logarithmic',
      'Balanced trees achieve the logarithmic bound — the structural reason binary search runs in O(log n)',
    ],
    quiz: [
      {
        q: 'Which statement about trees is FALSE?',
        options: [
          'A tree with n vertices has exactly n − 1 edges',
          'Between any two vertices of a tree there is a unique simple path',
          'Every vertex of a tree with n ≥ 2 vertices has degree at least 2',
          'Removing any edge from a tree disconnects it',
        ],
        answer: 2,
        explanation:
          'Every tree with at least two vertices has at least two leaves — vertices of degree 1 — so degree ≥ 2 everywhere is impossible. The other three statements are standard characterizations of trees.',
      },
      {
        q: 'A full 3-ary tree has 10 internal vertices. How many leaves does it have?',
        options: ['30', '21', '20', '11'],
        answer: 1,
        explanation:
          'l = (m − 1)i + 1 = 2·10 + 1 = 21 leaves. Check with n = mi + 1 = 31 vertices: 31 = 10 + 21 ✓.',
      },
      {
        q: 'Why can no full binary tree have exactly 1000 vertices?',
        options: [
          'Because 1000 is too large for a binary tree',
          'Because n = 2i + 1 forces n to be odd',
          'Because binary trees must be complete',
          'Because full binary trees must have a power-of-two number of vertices',
        ],
        answer: 1,
        explanation:
          'Counting children: each of the i internal vertices supplies exactly 2 children, and the root is the only vertex that is nobody’s child, so n = 2i + 1 — an odd number, never 1000.',
      },
      {
        q: 'A 3-ary tree has 100 leaves. What is the minimum possible height it can have?',
        options: [
          '4, because the tree can be complete',
          '5, because a 3-ary tree of height h has at most 3ʰ leaves and 3⁴ = 81 < 100 ≤ 243 = 3⁵',
          '7, because every level triples and the root is at level 0',
          'No bound exists — a 3-ary tree with 100 leaves can have any height',
        ],
        answer: 1,
        explanation:
          'Level h holds at most 3ʰ leaves, so a height-4 tree accommodates at most 3⁴ = 81 leaves — too few. Height 5 can hold up to 243 leaves, and a tree with exactly 100 leaves and height 5 exists, so the minimum possible height is exactly 5.',
      },
    ],
  },

  // ---------- 11.2 Applications of Trees ----------
  {
    sectionId: 'rosen-ch11-s2',
    readingTime: 13,
    intro:
      'Trees earn their keep by organizing decisions: binary search trees locate items by asking one yes/no question per level, decision trees prove that some puzzles cannot be solved faster than logarithmically, and Huffman trees turn symbol frequencies into the shortest possible prefix-free codes. One data structure, three industries.',
    objectives: [
      'Build and search binary search trees and analyze their complexity from height',
      'Model yes/no or multi-outcome decision processes as trees and derive information-theoretic lower bounds',
      'Define prefix codes and explain why they decode unambiguously',
      'Run the Huffman coding algorithm by hand and compute the resulting bit count',
      'Understand game trees and minimax evaluation of two-player games',
    ],
    concepts: [
      {
        term: 'Binary search tree',
        kind: 'definition',
        statement:
          'A **binary search tree (BST)** for a set of keys is a binary tree in which each vertex v with key k(v) satisfies: every key in v’s **left subtree is < k(v)**, every key in the **right subtree is > k(v)** — and this holds recursively at every vertex.',
        detail:
          'The BST property is local but its effect is global: from any vertex, the search space halves at each comparison — every vertex discards the entire subtree on the side the target cannot be in.',
      },
      {
        term: 'Building and searching a BST',
        kind: 'method',
        statement:
          '**Insert** keys one at a time: start at the root and compare; go left if smaller, right if larger, and attach the new key as a leaf where no child exists. **Search** follows the identical walk and succeeds iff it lands on the key.',
        detail:
          'Insertion order shapes the tree: sorted input builds a degenerate path (height n − 1), random input builds a tree with expected height Θ(log n). Balanced insertion/rebalancing (AVL, red-black) guarantees O(log n) worst case — the standard dictionary structure of every major library.',
      },
      {
        term: 'Decision trees',
        kind: 'definition',
        statement:
          'A **decision tree** models a procedure of successive tests: internal vertices are tests, each branch is one possible outcome, and each **leaf is a final conclusion**. The **complexity of the procedure is the height of the tree** — the number of tests in the worst case.',
        detail:
          'Lower-bound principle: a tree with height h and branching factor b (b outcomes per test) has at most bʰ leaves, so distinguishing N conclusions needs **h ≥** $\\lceil \\log_b N \\rceil$ tests. This single observation proves logarithmic lower bounds for sorting, searching and coin-weighing puzzles all at once.',
      },
      {
        term: 'The sorting lower bound',
        kind: 'theorem',
        statement:
          'A comparison-based sort of n items has at most **n!** possible input orders, so its decision tree has ≥ n! leaves and height ≥ **⌈log₂ n!⌉ = Ω(n log n)** — no comparison sort can beat n log n comparisons in the worst case.',
        detail:
          'Stirling’s formula gives log₂(n!) ≈ n log₂ n − 1.44n, so merge sort’s O(n log n) is asymptotically optimal among comparison sorts. Non-comparison sorts (radix, counting) escape the bound by not using binary-outcome comparisons.',
      },
      {
        term: 'Prefix codes',
        kind: 'definition',
        statement:
          'A **prefix code** for an alphabet is a set of binary codewords in which **no codeword is the prefix of another** — equivalently, the codewords are the labels of the leaves of a binary tree. Encoding replaces each symbol by its codeword; decoding reads left to right, cutting off at each complete codeword.',
        detail:
          'The prefix property is exactly what makes decoding instantaneous and unambiguous: as soon as the bits read so far match a leaf, that symbol is certain — no lookahead or backtracking is ever needed. Fixed-length codes (like ASCII) are trivially prefix codes; Huffman’s variable-length codes are the optimal ones.',
      },
      {
        term: 'Huffman coding',
        kind: 'method',
        statement:
          'Given symbol frequencies w₁, …, wₙ: repeatedly take the two trees of **smallest total weight** and merge them under a new root (weight = sum), until one tree remains. Label left edges 0 and right edges 1; the codeword of a symbol is its path from the root. The total encoded length is **∑ (frequency × depth of symbol’s leaf)** — provably minimal among prefix codes.',
        detail:
          'Greedy logic: the two least frequent symbols should sit deepest (they cost the least to lengthen) — hence merge first what you will pay for last. Huffman is optimal among all prefix codes for the given frequencies, though not necessarily among all uniquely decodable codes.',
      },
      {
        term: 'Game trees',
        kind: 'insight',
        statement:
          'A **game tree** for a two-player game has positions as vertices and legal moves as edges, alternating levels for the two players. **Minimax** assigns each leaf a value (win/lose or numeric payoff) and backs values up the tree: your levels take the max, the opponent’s take the min.',
        detail:
          'Game trees explain strategy: tic-tac-toe has fewer than 9! ≈ 362,880 leaves and is a draw with perfect play; chess is far too deep to exhaust, so programs search to a depth cutoff and score leaves heuristically — with alpha–beta pruning discarding provably irrelevant branches.',
      },
    ],
    examples: [
      {
        title: 'Building a binary search tree',
        problem:
          'Insert the keys 14, 12, 3, 21, 17, 25, 8, 6, 15 into an empty BST in this order, then trace the search for 15.',
        steps: [
          {
            label: 'Insert 14, 12, 3',
            text: '14 becomes the root. 12 < 14 → left child. 3 < 14 → left; 3 < 12 → left child of 12.',
          },
          {
            label: 'Insert 21, 17, 25',
            text: '21 > 14 → right child of 14. 17 > 14 → right, 17 < 21 → left child of 21. 25 > 14 → right, 25 > 21 → right child of 21.',
          },
          {
            label: 'Insert 8, 6, 15',
            text: '8 < 14, 8 < 12, 8 > 3 → right child of 3. 6 < 14, 6 < 12, 6 > 3, 6 < 8 → left child of 8. 15 > 14, 15 < 21, 15 < 17 → left child of 17.',
          },
          {
            label: 'Search for 15',
            text: 'Start at 14: 15 > 14 go right; at 21: 15 < 21 go left; at 17: 15 < 17 go left; at 15: found — 3 comparisons, one per level of descent.',
          },
        ],
        result:
          'A height-4 BST with 9 nodes; searching 15 costs 3 comparisons — roughly log₂ 9 ≈ 3.2, the balanced-tree promise.',
      },
      {
        title: 'The eight-coin puzzle and its bound',
        problem:
          'You have 8 coins, one of which is counterfeit and slightly heavier. A balance scale compares two subsets per weighing. Show that 2 weighings suffice and prove 1 cannot.',
        steps: [
          {
            label: 'Count the conclusions',
            text: 'The answer must name which of the 8 coins is heavy: 8 possible conclusions, so a decision tree needs at least 8 leaves.',
          },
          {
            label: 'Apply the branching bound',
            text: 'Each weighing has 3 outcomes (left heavy, right heavy, balance), so w weighings distinguish at most 3ʷ conclusions. With w = 1: 3 < 8 — impossible.',
          },
          {
            label: 'Check w = 2',
            text: '3² = 9 ≥ 8, so the counting bound permits two weighings — and a concrete scheme exists (weigh 1,2,3 vs 4,5,6; the outcome narrows to ≤ 3 suspects, then weigh one against one to finish).',
          },
          {
            label: 'Read off the general law',
            text: 'Coins known only to be heavier-or-lighter: distinguishing n suspects needs ⌈log₃ n⌉ weighings — 12 coins (24 possibilities heavy/light) famously need 3 since 3² = 9 < 24 ≤ 27 = 3³.',
          },
        ],
        result:
          'Two weighings suffice and one is impossible: the information-theoretic bound ⌈log₃ 8⌉ = 2 is tight here.',
      },
      {
        title: 'Huffman coding step by step',
        problem:
          'Symbols a, b, c, d, e occur with frequencies 45, 16, 12, 9, 5. Build the Huffman code and compute the total encoded length.',
        steps: [
          {
            label: 'Merge the two smallest (d, e)',
            text: 'd(5) + e(9) → node of weight 14. Remaining trees: a45, b16, c12, de14.',
          },
          {
            label: 'Merge c with de',
            text: 'Smallest two are c(12) and de(14) → node of weight 26. Remaining: a45, b16, cde26.',
          },
          {
            label: 'Merge b with cde',
            text: 'Smallest two are b(16) and cde(26) → node of weight 42. Remaining: a45, bcde42.',
          },
          {
            label: 'Final merge',
            text: 'a(45) + bcde(42) → root 87. Label every left edge 0, right edge 1, with a as the right child.',
          },
          {
            label: 'Read the codewords',
            text: 'a = 1 (depth 1); b = 00 (depth 2); c = 010 (depth 3); d = 0110 (depth 4); e = 0111 (depth 4). No codeword prefixes another — prefix property holds.',
          },
          {
            label: 'Total bits',
            text: '45·1 + 16·2 + 12·3 + 9·4 + 5·4 = 45 + 32 + 36 + 36 + 20 = 169 bits for 87 symbols ≈ 1.94 bits per symbol — versus 261 bits with a fixed 3-bit code for the 5 symbols, a saving of 92 bits.',
          },
        ],
        result:
          'Codes: a→1, b→00, c→010, d→0110, e→0111, total 169 bits — the most frequent symbol got the shortest codeword, as optimality demands.',
      },
    ],
    keyTakeaways: [
      'BST property: left subtree < vertex < right subtree, recursively — one comparison per level discards half the candidates',
      'Search/insert cost = height: Θ(log n) balanced, Θ(n) degenerate; random insertion order gives Θ(log n) expected height',
      'Decision tree bound: b-way tests distinguishing N outcomes need height ≥ $\\lceil \\log_b N \\rceil$ — the master lower-bound template that yields the Ω(n log n) comparison-sort bound from n! leaves',
      'Prefix codes = leaf labels of a binary tree: no codeword is a prefix of another, so decoding is instantaneous',
      'Huffman: repeatedly merge the two least-frequent trees; total bits = ∑ frequency × depth, optimal among prefix codes',
      'Game trees + minimax: take max on your moves, min on the opponent’s; alpha–beta prunes without changing the result',
    ],
    quiz: [
      {
        q: 'Keys 1, 2, 3, 4, 5 are inserted into an empty BST in sorted order. What is the resulting height (root at level 0), and what is the worst-case search cost?',
        options: [
          'Height 2, worst search 2 comparisons',
          'Height 4, worst search 5 comparisons — the tree degenerates into a path',
          'Height 4, worst search 4 comparisons',
          'Height 2, worst search 3 comparisons',
        ],
        answer: 1,
        explanation:
          'Each new key is larger than all previous, so every insertion goes right, producing a chain 1→2→3→4→5 of height 4. Searching for the deepest key (or a missing key near it) touches all 5 vertices. Sorted input is the BST’s worst enemy.',
      },
      {
        q: 'Which of the following is a prefix (prefix-free) code?',
        options: [
          '{0, 01, 011, 0111}',
          '{1, 10, 100, 1000}',
          '{0, 10, 110, 111}',
          '{00, 001, 01, 10}',
        ],
        answer: 2,
        explanation:
          'In {0, 10, 110, 111} no codeword starts another one: 0 is not a prefix of 10, and 110, 111 differ in the last bit. The other sets each contain a codeword that begins another (e.g. 0 prefixes 01), making decoding ambiguous.',
      },
      {
        q: 'In Huffman coding, which two symbols are merged into one subtree first?',
        options: [
          'The two most frequent symbols',
          'The two least frequent symbols',
          'The two symbols with the longest desired codewords',
          'The two lexicographically adjacent symbols',
        ],
        answer: 1,
        explanation:
          'Huffman always merges the two trees of smallest total weight first — the rarest symbols are pushed deepest, where extra depth costs the fewest total bits.',
      },
      {
        q: 'A balance scale has 3 outcomes per weighing. What is the minimum number of weighings guaranteed by the counting bound to determine which of 27 coins is heavy (heavy known in advance)?',
        options: ['2', '3', '4', '27'],
        answer: 1,
        explanation:
          'There are 27 possible conclusions and at most 3ʷ distinguishable outcomes after w weighings; 3² = 9 < 27 ≤ 81 = 3³, so ⌈log₃ 27⌉ = 3 weighings are necessary — and a divide-into-threes strategy achieves exactly 3.',
      },
    ],
  },

  // ---------- 11.3 Tree Traversal ----------
  {
    sectionId: 'rosen-ch11-s3',
    readingTime: 10,
    intro:
      'A tree stores a hierarchy — but algorithms need a linear order. The three systematic traversals (preorder, inorder, postorder) each convert a tree into a list, and each matches a classic notation: Polish, infix and reverse Polish. Compilers, calculators and tree-sort all live off this one idea.',
    objectives: [
      'Execute preorder, inorder and postorder traversals on any rooted tree, including forests',
      'Build and read expression trees, converting between infix, prefix (Polish) and postfix (reverse Polish) notations',
      'Explain why infix notation needs parentheses while pre/postfix do not',
      'Use inorder traversal of a binary search tree to produce sorted output',
      'Work with universal address systems and lexicographic order',
    ],
    concepts: [
      {
        term: 'Preorder traversal',
        kind: 'method',
        statement:
          '**Preorder**: visit the root, then traverse each subtree left to right (recursively). For a forest, preorder each tree in turn. It produces the **prefix (Polish) notation** of an expression tree.',
        detail:
          'Preorder lists each parent before all of its descendants — the natural order for copying a tree, serializing a file system, or numbering a table of contents (1, 1.1, 1.1.1, …).',
      },
      {
        term: 'Inorder traversal',
        kind: 'method',
        statement:
          '**Inorder** (for binary trees): traverse the left subtree, visit the root, traverse the right subtree. On an expression tree it produces the familiar **infix notation** — which needs parentheses to be unambiguous.',
        detail:
          'Inorder is only defined naturally for binary (ordered, two-child) trees. Its celebrity role: inorder of a binary search tree emits the keys in **sorted order** — tree-sort in one traversal.',
      },
      {
        term: 'Postorder traversal',
        kind: 'method',
        statement:
          '**Postorder**: traverse each subtree left to right, then visit the root last. On an expression tree it yields **postfix (reverse Polish) notation**, which evaluates with a plain stack and needs no parentheses.',
        detail:
          'Children before parents: postorder is the order of dependency — evaluate operands before operators, free memory after children, compute subtree sizes bottom-up. Compilers generate postfix-style intermediate code for exactly this reason.',
      },
      {
        term: 'Expression trees',
        kind: 'definition',
        statement:
          'An **expression tree** represents a compound expression: **leaves hold operands (numbers, variables), internal vertices hold operators**; an internal vertex with k children is a k-ary operation on its subtrees. The three traversals produce the infix, prefix and postfix forms of the expression.',
        detail:
          'The tree makes precedence and associativity visible as geometry: in ((a + b) · c) − d the − sits at the root, · below it, + at the lowest internal level — structure replaces punctuation.',
      },
      {
        term: 'Inorder of a BST gives sorted output',
        kind: 'theorem',
        statement:
          'The **inorder traversal of a binary search tree lists its keys in increasing order**.',
        detail:
          'Proof by the BST property: when we visit a vertex, its entire left subtree (all smaller keys) has already been listed, and its right subtree (all larger) is listed after. This is the tree-sort algorithm: build a BST (O(n log n) average), traverse inorder (O(n)), receive sorted output.',
      },
      {
        term: 'Universal address systems',
        kind: 'notation',
        statement:
          'In the **universal address system**, the root is 1, and the children of the vertex labeled v are v.1, v.2, v.3, … in order. The **lexicographic order** of the labels lists an ancestor before its descendants and equals the **preorder traversal** sequence.',
        detail:
          'Book chapters use exactly this system (Section 11.3 is 3.1.3): sorting the addresses as strings reproduces the preorder walk — sorting a hierarchy and traversing it are the same thing.',
      },
      {
        term: 'Why infix needs parentheses',
        kind: 'insight',
        statement:
          'Infix notation inherits ambiguity from flattening a tree: a + b · c could come from (a + b) · c or a + (b · c). Conventional precedence/associativity rules — or explicit parentheses — restore the missing structure. Prefix and postfix are prefix-free/suffix-free enough that **no parentheses are ever needed**.',
        detail:
          'Depth-first traversal encodes the tree shape into symbol order itself: in + a b, the operator claims the next two sub-expressions; there is exactly one way to parse, so the linear form is unambiguous by construction.',
      },
    ],
    examples: [
      {
        title: 'Three traversals of one expression tree',
        problem:
          'Build the expression tree for the fully parenthesized expression ((a + b) · c) − d and write its preorder, inorder and postorder listings.',
        steps: [
          {
            label: 'Construct the tree',
            text: 'The outermost operation is −: root = − with left child the · subtree and right child the leaf d. The · has left child + (leaves a, b) and right child the leaf c.',
          },
          {
            label: 'Preorder (root first)',
            text: 'Visit −, then preorder(·): visit ·, preorder(+): visit +, a, b, then c; finally d. Result: − · + a b c d — prefix notation.',
          },
          {
            label: 'Inorder (root middle)',
            text: 'Inorder(·) first: a + b · c; then root, then d. Result: a + b · c − d — infix, which is ambiguous without parentheses (the true reading is ((a + b) · c) − d).',
          },
          {
            label: 'Postorder (root last)',
            text: 'Postorder of ·’s children first: a b + c ·, then d, then the root. Result: a b + c · d − — reverse Polish notation.',
          },
        ],
        result:
          'Preorder: − · + a b c d; Inorder: a + b · c − d (needs parentheses); Postorder: a b + c · d − (paren-free).',
      },
      {
        title: 'Evaluating postfix with a stack',
        problem:
          'Evaluate the postfix expression a b + c · d − for a = 2, b = 3, c = 4, d = 1, showing the stack after each symbol.',
        steps: [
          {
            label: 'Push operands',
            text: 'Read a = 2 → stack [2]. Read b = 3 → stack [2, 3].',
          },
          {
            label: 'Apply +',
            text: 'Pop 3 and 2, push 2 + 3 = 5 → stack [5].',
          },
          {
            label: 'Push c',
            text: 'Read c = 4 → stack [5, 4].',
          },
          {
            label: 'Apply ·',
            text: 'Pop 4 and 5, push 5 · 4 = 20 → stack [20].',
          },
          {
            label: 'Push d, apply −',
            text: 'Read d = 1 → stack [20, 1]. Read −: pop 1 and 20, push 20 − 1 = 19 → stack [19]. End of input.',
          },
        ],
        result:
          'The value is 19 = ((2 + 3) · 4) − 1 — one left-to-right pass, no parentheses, no precedence rules.',
      },
      {
        title: 'Tree-sort via inorder',
        problem:
          'Insert 14, 12, 3, 21, 17, 25, 8, 6, 15 into a BST and produce the sorted list by inorder traversal.',
        steps: [
          {
            label: 'Build the BST',
            text: 'Insert in the given order: root 14; 12 left of 14; 3 left of 12; 21 right of 14; 17 left of 21; 25 right of 21; 8 right of 3; 6 left of 8; 15 left of 17.',
          },
          {
            label: 'Run inorder',
            text: 'Left of 14 first: inorder at 12 → its left is 3 → 3’s left is empty, visit 3; 3’s right is 8 → 8’s left is 6 → visit 6, visit 8; back up: visit 12; right of 12 empty. Now visit 14. Then the right subtree: 15, 17, 21, 25.',
          },
          {
            label: 'Assemble the output',
            text: '3, 6, 8, 12, 14, 15, 17, 21, 25 — the nine keys in increasing order.',
          },
        ],
        result:
          'Inorder emits exactly the sorted sequence — tree-sort costs n insertions (O(n log n) average) plus one O(n) traversal.',
      },
    ],
    keyTakeaways: [
      'Preorder = root, then subtrees left to right → prefix (Polish) notation; the order of table-of-contents numbering and serialization',
      'Inorder = left, root, right → infix notation; on a BST it emits keys in sorted order (tree-sort)',
      'Postorder = subtrees, then root → postfix (reverse Polish); children before parents, ideal for evaluation and teardown',
      'Expression trees: leaves = operands, internal vertices = operators — one tree, three notations',
      'Infix needs parentheses (or precedence rules); prefix and postfix encode the structure in symbol order alone',
      'Postfix evaluates with one left-to-right stack pass — operands push, operators pop-apply-push',
    ],
    quiz: [
      {
        q: 'An expression tree has root +, left child · (leaves a, b), right child leaf c. What is its postorder traversal?',
        options: ['+ · a b c', 'a b · c +', 'a + b · c', 'a b + c ·'],
        answer: 1,
        explanation:
          'Postorder = children first, root last: left subtree yields a b ·, then the right leaf c, then the root +, giving a b · c + — the reverse Polish form of a · b + c.',
      },
      {
        q: 'Which of the three standard traversals of a binary search tree produces the keys in ascending sorted order?',
        options: ['Preorder', 'Inorder', 'Postorder', 'All three'],
        answer: 1,
        explanation:
          'Inorder visits the left (smaller) subtree, then the vertex, then the right (larger) subtree — the BST property turns this local rule into a global sorted listing.',
      },
      {
        q: 'Why can the infix form a + b · c not be read unambiguously without precedence rules or parentheses?',
        options: [
          'Because infix traversal is not well defined on binary trees',
          'Because both ((a + b) · c) and (a + (b · c)) flatten to the same infix string a + b · c',
          'Because · is not a valid operator in an expression tree',
          'Because operands must be visited before operators',
        ],
        answer: 1,
        explanation:
          'Two different trees — (+ (· a b) c) and (· a (+ b c)) — share the same inorder sequence a + b · c; parentheses or precedence conventions select the intended tree. Prefix (+ · a b c vs · a + b c) and postfix (a b · c + vs a b c + ·) differ and need no help.',
      },
      {
        q: 'In the universal address system, vertices receive labels like 1, 1.1, 1.2, 1.2.1. Sorting these labels lexicographically produces which traversal?',
        options: ['Inorder', 'Postorder', 'Preorder', 'Level-order (breadth-first)'],
        answer: 2,
        explanation:
          'Every ancestor’s label is a prefix of its descendants’ labels and sorts before them, and older siblings sort before younger ones — exactly the visit rule of preorder traversal.',
      },
    ],
  },

  // ---------- 11.4 Spanning Trees ----------
  {
    sectionId: 'rosen-ch11-s4',
    readingTime: 10,
    intro:
      'Take any connected graph and delete edges — carefully, never breaking connectivity — until no circuit survives: what is left is a spanning tree, a skeleton that reaches every vertex with the minimum possible skeleton of n − 1 edges. Two classic searches, depth-first and breadth-first, build such skeletons automatically and power everything from maze exploration to web crawling.',
    objectives: [
      'Define spanning trees and prove that every connected graph has one',
      'Construct spanning trees by deleting circuit edges, and count how many edges must go',
      'Execute depth-first search (DFS) and breadth-first search (BFS) to build spanning trees',
      'Understand backtracking as DFS with undo, and state Cayley’s count nⁿ⁻² of spanning trees of Kₙ',
    ],
    concepts: [
      {
        term: 'Spanning tree',
        kind: 'definition',
        statement:
          'A **spanning tree** of a simple graph G is a subgraph of G that is a tree and **contains every vertex of G**. A spanning forest plays the same role for a disconnected graph — one spanning tree per component.',
        detail:
          'Spanning = touches all vertices; tree = acyclic and connected. With n vertices it has exactly n − 1 edges, the least any connected subgraph on all of G can have.',
      },
      {
        term: 'Existence of spanning trees',
        kind: 'theorem',
        statement:
          'A graph is **connected if and only if it has a spanning tree**. Constructively: as long as the graph contains a circuit, delete one edge of that circuit; deleting a circuit edge never disconnects a graph, so the process terminates at a connected, acyclic spanning subgraph.',
        detail:
          'The algorithm implicit in the proof also counts the deletions: a connected graph with n vertices and m edges must lose exactly m − n + 1 edges — the dimension of its cycle space.',
      },
      {
        term: 'Depth-first search (DFS)',
        kind: 'method',
        statement:
          '**DFS**: start at a root, follow edges to unvisited vertices as far as possible, and **backtrack** only when stuck; the edges used to first reach each vertex form a **depth-first spanning tree**. With vertices ordered alphabetically, always try the smallest unvisited neighbor next.',
        detail:
          'DFS dives deep before widening — a last-in-first-out (stack/LIFO) discipline. Applications: maze solving, detecting circuits and cut vertices, topological sorting, and backtracking search (graph coloring, n-queens, sudoku) where exploring one branch fully before the next is the whole point.',
      },
      {
        term: 'Breadth-first search (BFS)',
        kind: 'method',
        statement:
          '**BFS**: visit the root, then all vertices at distance 1, then all at distance 2, and so on — a **first-in-first-out (queue)** discipline. The tree edges used to first reach each vertex form a **breadth-first spanning tree whose paths from the root are shortest possible in edge count**.',
        detail:
          'BFS is level-by-level exploration — the unweighted ancestor of Dijkstra’s algorithm. It gives the fewest-edges route from the root to every vertex, which is exactly what makes it the core of shortest paths in unweighted networks and of web crawlers.',
      },
      {
        term: 'Backtracking',
        kind: 'insight',
        statement:
          '**Backtracking** solves constraint problems by DFS over a space of partial solutions: extend the partial solution as far as possible; when it violates a constraint, **undo the last choice and try the next alternative**. The DFS tree of choices is searched systematically, with pruning cutting hopeless branches.',
        detail:
          'Graph coloring, sum-of-subsets, the n-queens puzzle and Hamilton-circuit search are all backtracking: build a tree of choices depth-first, retreat when a branch dies. Spanning trees are literally the infrastructure of this search strategy.',
      },
      {
        term: 'Cayley’s theorem on spanning trees',
        kind: 'theorem',
        statement:
          'The complete graph **Kₙ has exactly nⁿ⁻² spanning trees** (Cayley’s formula). For example K₃ has 3, K₄ has 16, K₅ has 125, K₆ has 1296.',
        detail:
          'nⁿ⁻² grows explosively: an 8-city network has 8⁶ = 262,144 spanning trees — far too many to enumerate, which is why the MST algorithms of the next section find the best one without listing any. (Kirchhoff’s matrix-tree theorem generalizes the count to arbitrary graphs.)',
      },
    ],
    examples: [
      {
        title: 'Spanning tree by circuit breaking',
        problem:
          'A connected graph has n = 8 vertices and m = 12 edges. How many edges must be removed to reach a spanning tree, and why is it safe to remove them?',
        steps: [
          {
            label: 'Target edge count',
            text: 'A spanning tree on 8 vertices has n − 1 = 7 edges.',
          },
          {
            label: 'Count the deletions',
            text: 'Remove m − (n − 1) = 12 − 7 = 5 edges — always exactly five, no matter which spanning tree you reach.',
          },
          {
            label: 'Justify safety',
            text: 'Remove only edges lying on circuits: deleting a circuit edge leaves every vertex still reachable (go around the circuit the other way), so connectivity never breaks.',
          },
          {
            label: 'Know when to stop',
            text: 'Once no circuits remain, the graph is acyclic and still connected — a spanning tree; deleting anything more would disconnect it.',
          },
        ],
        result: 'Exactly 5 edges removed; each chosen from a circuit, leaving a 7-edge spanning tree.',
      },
      {
        title: 'DFS versus BFS on the same graph',
        problem:
          'Graph G: vertices a, b, c, d, e, f; edges {a,b}, {a,c}, {b,d}, {c,e}, {d,e}, {d,f}. Build the depth-first and breadth-first spanning trees rooted at a (alphabetical tie-breaking), and compare their shapes.',
        steps: [
          {
            label: 'Run DFS from a',
            text: 'Visit a → smallest unvisited neighbor b → from b, neighbor d (a visited) → from d, smallest unvisited neighbor e → from e, neighbor c (d visited) → c’s neighbors a, e are visited, backtrack to d → visit f. Tree edges: a–b, b–d, d–e, e–c, d–f.',
          },
          {
            label: 'Read the DFS tree',
            text: 'The DFS tree is one deep path a–b–d–e–c with side branch d–f — depth before breadth; edge a–c exists in G but is not a tree edge.',
          },
          {
            label: 'Run BFS from a',
            text: 'Queue = [a]; visit a, enqueue b, c (tree edges a–b, a–c). Pop b: enqueue d (edge b–d). Pop c: enqueue e (edge c–e). Pop d: enqueue f (edge d–f). Pop e: nothing new. Tree edges: a–b, a–c, b–d, c–e, d–f.',
          },
          {
            label: 'Read the BFS tree and compare',
            text: 'Levels: a alone; then b, c; then d, e; then f. The BFS tree is shallow and records shortest edge-count routes (e.g., a → c → e is a 2-edge path); the DFS tree reaches e only on the fourth level via its long path.',
          },
        ],
        result:
          'DFS tree: {a–b, b–d, d–e, e–c, d–f} (deep); BFS tree: {a–b, a–c, b–d, c–e, d–f} (level-by-level, shortest paths from a).',
      },
      {
        title: 'Counting what you cannot list',
        problem:
          'How many edges must be removed from K₅ to obtain a spanning tree, and how many different spanning trees does K₅ have?',
        steps: [
          {
            label: 'Edge budget',
            text: 'K₅ has C(5, 2) = 10 edges; a spanning tree on 5 vertices needs 4 edges, so exactly 10 − 4 = 6 edges are deleted — every deletion coming off some circuit.',
          },
          {
            label: 'Apply Cayley’s formula',
            text: 'The number of spanning trees of K₅ is $5^{5-2} = 5^{3} = 125$.',
          },
          {
            label: 'Sanity-check a small case',
            text: 'For K₃: three edges, spanning tree uses 2, and exactly 3 choices exist — matching $3^{3-2} = 3^{1} = 3$.',
          },
          {
            label: 'Appreciate the growth',
            text: 'K₈ has 8⁶ = 262,144 spanning trees — enumeration is hopeless, so finding a best one requires the greedy algorithms of the next section.',
          },
        ],
        result: 'Remove exactly 6 edges from K₅; there are 125 = 5³ distinct spanning trees to choose among.',
      },
    ],
    keyTakeaways: [
      'Spanning tree = tree subgraph containing every vertex; exactly n − 1 edges in an n-vertex graph',
      'G is connected ⇔ G has a spanning tree — proved by repeatedly deleting circuit edges',
      'A connected graph with m edges and n vertices needs exactly m − n + 1 deletions to reach any spanning tree',
      'DFS builds a deep spanning tree using backtracking (stack discipline); BFS builds a shallow one via a queue, giving fewest-edge paths from the root',
      'Backtracking = DFS over the tree of partial solutions, pruning branches that violate constraints',
      'Cayley: Kₙ has nⁿ⁻² spanning trees — too many to enumerate, motivating the greedy MST algorithms',
    ],
    quiz: [
      {
        q: 'A connected graph has 8 vertices and 12 edges. How many edges must you delete to obtain a spanning tree?',
        options: ['3', '4', '5', '12'],
        answer: 2,
        explanation:
          'A spanning tree on 8 vertices has 8 − 1 = 7 edges, so 12 − 7 = 5 edges must go — each one taken from a circuit so connectivity survives.',
      },
      {
        q: 'What property do the root-to-vertex paths of a breadth-first spanning tree have?',
        options: [
          'They are the shortest possible paths in the whole graph in terms of total edge weight',
          'They use the fewest edges among all paths from the root in the unweighted sense',
          'They are always the longest paths found by DFS',
          'They always pass through every vertex',
        ],
        answer: 1,
        explanation:
          'BFS visits vertices level by level, so each vertex enters the tree via a path with the minimum number of edges from the root. (Minimum total weight is Dijkstra’s job, not BFS.)',
      },
      {
        q: 'Which data-structure discipline matches each search?',
        options: [
          'DFS: queue; BFS: stack',
          'DFS: stack (LIFO, backtrack); BFS: queue (FIFO, level order)',
          'Both use queues',
          'DFS: priority queue; BFS: stack',
        ],
        answer: 1,
        explanation:
          'DFS pushes choices on a stack and pops (backtracks) when stuck — LIFO. BFS processes vertices in arrival order — FIFO — which is what makes it level-by-level.',
      },
      {
        q: 'By Cayley’s theorem, how many spanning trees does the complete graph K₆ have?',
        options: ['6⁶ = 46656', '6⁵ = 7776', '6⁴ = 1296', '6! = 720'],
        answer: 2,
        explanation:
          'Kₙ has $n^{n-2}$ spanning trees, so K₆ has 6⁴ = 1296. (Confusing nⁿ⁻² with n! or nⁿ is the classic slip — check with K₃: 3¹ = 3, not 3! = 6.)',
      },
    ],
  },

  // ---------- 11.5 Minimum Spanning Trees ----------
  {
    sectionId: 'rosen-ch11-s5',
    readingTime: 9,
    intro:
      'Now make every edge cost money. A spanning tree is the cheapest way to connect everything with no redundancy — but which of the astronomically many spanning trees is cheapest? Two greedy algorithms, Prim’s and Kruskal’s, find it in polynomial time, and a single exchange argument explains why greed works at all.',
    objectives: [
      'Define the minimum spanning tree problem on connected weighted graphs',
      'Execute Prim’s algorithm (grow one tree) and Kruskal’s algorithm (merge a forest) by hand',
      'Explain the cut/exchange argument that certifies both algorithms’ correctness',
      'Recognize MST applications in network design and know when the MST is unique',
    ],
    concepts: [
      {
        term: 'Minimum spanning tree',
        kind: 'definition',
        statement:
          'A **minimum spanning tree (MST)** of a connected weighted graph is a spanning tree whose **total edge weight is minimum** among all spanning trees. It always exists, since a connected finite graph has finitely many spanning trees.',
        detail:
          'The MST connects everything at least cost — n − 1 links chosen from possibly thousands. If all edge weights are distinct, the MST is unique; with ties, several minimum trees may coexist (the set of chosen weights is still the same).',
      },
      {
        term: 'Prim’s algorithm',
        kind: 'method',
        statement:
          '**Prim**: start with a single vertex (and an empty tree); repeatedly **add the cheapest edge with one endpoint inside the tree and the other outside**; stop when all vertices are included. The growing structure is always one tree.',
        detail:
          'Growth by nearest neighbor of the whole tree. A straightforward implementation rescans all edges incident to the tree each round, giving O(n²)-style behavior — the same profile as Dijkstra, and in fact the two algorithms are structural twins.',
      },
      {
        term: 'Kruskal’s algorithm',
        kind: 'method',
        statement:
          '**Kruskal**: sort all edges by weight; scan in increasing order and **add each edge unless it forms a circuit with the edges already chosen**; stop after n − 1 edges. The growing structure is a forest whose components repeatedly merge.',
        detail:
          'Globally cheapest edges first, circuits vetoed. Circuit detection is maintained efficiently with a disjoint-set (union–find) structure, and the sort dominates: O(e log e) overall — excellent for sparse graphs.',
      },
      {
        term: 'Why greedy is safe',
        kind: 'insight',
        statement:
          '**Cut argument**: for any partition of the vertices, the cheapest edge crossing the cut belongs to some MST — if an MST T omitted it, adding the edge would create a cycle that crosses the cut a second time, and swapping in the cheap edge cannot raise the total. Prim applies this to the cut around its tree at every step; Kruskal applies it to the cut between the components its edge would join.',
        detail:
          'This exchange (swap heavier for lighter, keep a spanning tree) is the certificate of optimality: neither algorithm ever makes a choice that some MST could not contain, so both terminate with a genuine MST. It also proves uniqueness: with distinct weights, every cut has a single cheapest crossing edge, so every MST is forced to make the same choices.',
      },
      {
        term: 'MSTs in the wild',
        kind: 'insight',
        statement:
          'MSTs design least-cost networks — electrical grids, pipelines, telecommunication backbones, road and sewer systems — and underlie **single-linkage clustering** (stop Kruskal early and read off the components) and approximation algorithms for harder problems like the TSP.',
        detail:
          'Any situation of the form connect everything, pay per link, no redundancy needed is an MST. Where redundancy matters (survivability), Steiner trees and survivable-network design take over — the MST is the polynomial baseline they build upon.',
      },
    ],
    examples: [
      {
        title: 'Prim’s algorithm, full trace',
        problem:
          'Weighted graph on vertices a, b, c, d, e, f with edges: a–b (1), b–c (2), a–c (5), b–e (3), c–d (4), c–e (6), d–e (3), d–f (8), e–f (4), b–d (7). Run Prim’s algorithm from a and total the result.',
        steps: [
          {
            label: 'Start the tree at a',
            text: 'Tree = {a}. Crossing edges: a–b (1) and a–c (5) — cheapest is a–b.',
          },
          {
            label: 'Grow to b, then c',
            text: 'Add a–b (1). Tree = {a, b}: cheapest crossing edge is b–c (2) (beating b–e (3), b–d (7), a–c (5)). Add b–c.',
          },
          {
            label: 'Grow to e',
            text: 'Tree = {a, b, c}: crossing candidates include b–e (3), c–d (4), c–e (6), a–c now internal — cheapest is b–e (3). Add b–e.',
          },
          {
            label: 'Grow to d',
            text: 'Tree = {a, b, c, e}: cheapest crossing edge is d–e (3) (vs c–d (4), e–f (4)). Add d–e.',
          },
          {
            label: 'Finish with f',
            text: 'Tree = {a, b, c, d, e}: cheapest crossing edge to f is e–f (4) (vs d–f (8)). Add e–f — all six vertices are in.',
          },
          {
            label: 'Total and verify',
            text: 'Edges: a–b (1), b–c (2), b–e (3), d–e (3), e–f (4): five edges = n − 1, total weight 1 + 2 + 3 + 3 + 4 = 13.',
          },
        ],
        result:
          'Prim’s MST: {a–b, b–c, b–e, d–e, e–f} with total weight 13 — one tree growing by its cheapest boundary edge at each step.',
      },
      {
        title: 'Kruskal’s algorithm, with a cycle rejection',
        problem:
          'Run Kruskal’s algorithm on the same weighted graph and show which edge is rejected for creating a circuit.',
        steps: [
          {
            label: 'Sort the edges',
            text: 'Increasing order: a–b (1), b–c (2), b–e (3), d–e (3), c–d (4), e–f (4), a–c (5), c–e (6), b–d (7), d–f (8).',
          },
          {
            label: 'Take the first three',
            text: 'a–b (1) ✓, b–c (2) ✓, b–e (3) ✓ — none creates a circuit; forest = {a,b,c} ∪ {e} merged stepwise.',
          },
          {
            label: 'Continue and hit the veto',
            text: 'd–e (3) ✓ joins d. Next c–d (4): c and d are already connected (c–b–e–d), so c–d would close the circuit c–b–e–d–c — REJECT. Take e–f (4) instead ✓.',
          },
          {
            label: 'Stop at n − 1 edges',
            text: 'Five accepted edges {a–b, b–c, b–e, d–e, e–f} connect all six vertices — the algorithm stops.',
          },
          {
            label: 'Compare with Prim',
            text: 'Total weight 1 + 2 + 3 + 3 + 4 = 13 — identical tree to Prim’s, reached from the opposite philosophy (global cheapest edges vs local tree growth).',
          },
        ],
        result:
          'Kruskal’s MST: {a–b, b–c, b–e, d–e, e–f}, weight 13; c–d (4) was rejected for creating the circuit c–b–e–d–c.',
      },
      {
        title: 'The exchange argument on one edge',
        problem:
          'Prove: the cheapest edge e crossing any cut (a partition of the vertices into S and V − S) belongs to some minimum spanning tree.',
        steps: [
          {
            label: 'Suppose an MST omits e',
            text: 'Let T be an MST with e = {u, v} not in T, where u ∈ S and v ∉ S.',
          },
          {
            label: 'Force a cycle',
            text: 'T is a tree, so a path from u to v exists inside T; adding e to T creates a unique circuit containing e.',
          },
          {
            label: 'Find a second crossing edge',
            text: 'That circuit starts at u ∈ S, crosses to v ∉ S via e, and must return to u — so it uses another edge f ≠ e crossing the cut.',
          },
          {
            label: 'Exchange',
            text: 'Build T′ = T − f + e: still a spanning tree (the cycle is broken, connectivity preserved), with weight w(T′) = w(T) − w(f) + w(e) ≤ w(T) because w(e) ≤ w(f).',
          },
          {
            label: 'Conclude',
            text: 'T′ is an MST containing e — so the cheapest crossing edge is always safe. Prim and Kruskal never paint themselves into a corner.',
          },
        ],
        result:
          'Every cheapest cut-crossing edge lies in some MST — the one-sentence correctness proof of both greedy algorithms.',
      },
    ],
    keyTakeaways: [
      'MST = spanning tree of minimum total weight; exists for every connected weighted graph, unique when all weights are distinct',
      'Prim: grow one tree by repeatedly adding the cheapest edge leaving it — a Dijkstra-shaped O(n²)-style greedy',
      'Kruskal: sort all edges, take cheapest-first unless it forms a circuit — O(e log e) with union–find for cycle checks',
      'Correctness: cheapest edge across any cut is exchange-safe — add it, swap out a heavier crossing edge, never lose minimality',
      'Both are greedy, both provably optimal, and on the same graph they can return the same MST from opposite strategies',
      'Applications: least-cost utility/communication networks, clustering (early-stopped Kruskal), TSP approximations',
    ],
    quiz: [
      {
        q: 'Prim’s algorithm is growing the tree on vertices {a, b, c}. Crossing edges available: c–d (4), b–e (3), a–d (6), b–d (5). Which edge does Prim add?',
        options: ['c–d (4)', 'b–e (3)', 'a–d (6)', 'b–d (5)'],
        answer: 1,
        explanation:
          'Prim adds the cheapest edge with exactly one endpoint in the tree — that is b–e (3), regardless of which tree vertex it touches. Cost matters, not which vertex extends.',
      },
      {
        q: 'During Kruskal’s algorithm, when is an edge rejected?',
        options: [
          'When its weight is larger than the average edge weight',
          'When adding it would create a circuit with the already-chosen edges',
          'When it is incident to a vertex of degree 1',
          'When it is the last edge in the sorted order',
        ],
        answer: 1,
        explanation:
          'Kruskal’s sole veto is cyclicity: an edge joining two vertices already connected by the chosen forest would create a circuit — and a tree can never contain one.',
      },
      {
        q: 'A weighted graph on 4 vertices has edges a–b (2), a–c (4), b–c (1), b–d (5), c–d (3). What is the weight of its minimum spanning tree?',
        options: ['6', '7', '8', '10'],
        answer: 0,
        explanation:
          'Kruskal: take b–c (1) and a–b (2); reject nothing yet; take c–d (3) — b–d (5) and a–c (4) now create circuits. Total = 1 + 2 + 3 = 6 with the required n − 1 = 3 edges.',
      },
      {
        q: 'If all edge weights of a connected graph are distinct, what can you say about its minimum spanning tree?',
        options: [
          'There are at least two different MSTs',
          'The MST is unique — every cut has a single cheapest crossing edge, forcing every MST to make identical choices',
          'The MST may not exist',
          'The MST must be a path',
        ],
        answer: 1,
        explanation:
          'By the cut argument, every cut’s unique cheapest edge must appear in every MST; with distinct weights all cuts have unique cheapest edges, so all MSTs coincide — there is exactly one.',
      },
      // PYQ-pattern: GATE 2011 — Kruskal MST weight computation (rephrased, values changed)
      {
        q: 'A connected weighted graph has vertices $p, q, r, s$ with edges $p$–$q$ $(3)$, $p$–$r$ $(1)$, $q$–$r$ $(2)$, $q$–$s$ $(4)$, $r$–$s$ $(5)$. The weight of its minimum spanning tree equals:',
        options: [`$6$`, `$7$`, `$8$`, `$10$`],
        answer: 1,
        explanation:
          'Step 1: Restate the task as selecting $n - 1 = 3$ cheapest edges that connect all vertices without a circuit. Step 2: Recall the key Kruskal rule of scanning edges in increasing weight and keeping an edge exactly when it joins two different components. Step 3: Take $p$–$r$ $(1)$ and then $q$–$r$ $(2)$, merging $\\{p, r, q\\}$ into one component. Step 4: Reject $p$–$q$ $(3)$ since its endpoints already connect through $r$, then take $q$–$s$ $(4)$ to attach $s$. Step 5: The distractor $6$ drops a needed unit, $8$ keeps the cyclic edge instead of the cheapest link, and $10$ adds an extra edge. Step 6: Hence the total is $1 + 2 + 4 = 7$.',
      },
    ],
  },
]
