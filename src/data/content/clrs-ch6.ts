import type { SectionContent } from "../library"

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Chapter 6: Heapsort (Sections 6.1 – 6.5)
// ============================================================================

export const clrsCh6Content: SectionContent[] = [
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: "clrs-ch6-s1",
    readingTime: 6,
    intro: "The heapsort algorithm sits on a data structure that costs nothing to store: an array viewed as a binary tree. This section defines the (binary) heap, the heap property that makes the maximum instantly available at the root, and the index arithmetic that lets parent and child find each other with one multiplication and one shift.",
    objectives: [
      "Define the array representation of a binary heap and derive the PARENT/LEFT/RIGHT index formulas",
      "State the max-heap and min-heap properties and check them on concrete arrays",
      "Compute node heights, the heap height, and identify the leaf region of the array",
    ],
    concepts: [
      {
        term: "The (binary) heap as an array",
        kind: "definition",
        statement: "A **binary heap** is an array $A[1 \\ldots n]$ interpreted as a **nearly complete binary tree**: node $i$ has children at $2i$ and $2i+1$ and parent at $\\lfloor i/2 \\rfloor$, with the tree filled level by level, left to right.",
        detail: "The tree interpretation is pure convention — no pointers exist. `PARENT(i) = ⌊i/2⌋`, `LEFT(i) = 2i`, `RIGHT(i) = 2i + 1`, each computed in $O(1)$ by a shift or one subtraction. Everything in this chapter is built from these three formulas.",
      },
      {
        term: "The heap property",
        kind: "definition",
        statement: "A **max-heap** satisfies $A[\\text{PARENT}(i)] \\ge A[i]$ for every node $i \\ge 2$: every parent dominates (is at least as large as) its children. A **min-heap** reverses the inequality to $A[\\text{PARENT}(i)] \\le A[i]$. A valid heap enforces this along **every** root-to-leaf path.",
        detail: "The property constrains only vertical pairs, never siblings: in a max-heap the left child may be larger or smaller than the right child. Consequently heapsort's tree is *not* a binary search tree — the array of a heap is generally not sorted in any interval sense.",
      },
      {
        term: "Height of a node and of the heap",
        kind: "notation",
        statement: "The **height of a node** is the number of edges on the longest simple downward path to a leaf; the **height of the heap** is the height of its root, which for $n$ elements is $\\lfloor \\lg n \\rfloor$.",
        detail: "Because the tree is nearly complete, heights collapse logarithmically: an operation that walks one root-to-leaf path, like MAX-HEAPIFY, therefore costs $O(\\lg n)$. The book measures height in edges, so a one-node heap has height 0.",
      },
      {
        term: "Half the array is leaves",
        kind: "insight",
        statement: "In a heap of $n$ elements, the nodes $A[\\lfloor n/2 \\rfloor + 1 \\ldots n]$ are exactly the leaves — that is, the leaves are the **last $\\lceil n/2 \\rceil$ array positions**.",
        detail: "This single fact drives both BUILD-MAX-HEAP's starting point (heapify only the first $\\lfloor n/2 \\rfloor$ positions) and the tight linear build-time analysis of Section 6.3, because the cheap, height-0 nodes are precisely the half of the array that never gets a heapify call.",
      },
      {
        term: "Level order is array order",
        kind: "insight",
        statement: "Reading $A[1..n]$ left to right visits the tree in breadth-first (level) order: $A[1]$ is the root, $A[2..3]$ the second level, $A[4..7]$ the third, and so on. The nearly complete shape is exactly what makes this layout possible with no gaps before position $n$.",
        detail: "Consequence: any complete level $d$ occupies the contiguous slice $A[2^d .. \\min(2^{d+1}-1, n)]$. Heapsort's cache behavior follows from this layout: level-order neighbours are adjacent in memory, but parent-child pairs at depth $d$ sit $2^d$ apart.",
      },
    ],
    figures: [
      {
        caption: "A max-heap of $n = 10$ elements stored in $A[1 \\ldots 10]$ — drawn as a binary tree (node indices in gray) and as the array itself. Node $i$'s children sit at $2i$ and $2i+1$; the tree fills levels left to right, which is why the array lays out the tree level by level.",
        afterConcept: 2,
        svg: `<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="A ten-element max-heap drawn as a binary tree with node indices, and below it the same heap as a ten-cell array with an index ruler"><line x1="360" y1="55" x2="280" y2="79" stroke="currentColor" stroke-width="1.5"/><line x1="360" y1="55" x2="440" y2="79" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="113" x2="240" y2="137" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="113" x2="320" y2="137" stroke="currentColor" stroke-width="1.5"/><line x1="440" y1="113" x2="400" y2="137" stroke="currentColor" stroke-width="1.5"/><line x1="440" y1="113" x2="480" y2="137" stroke="currentColor" stroke-width="1.5"/><line x1="240" y1="171" x2="200" y2="195" stroke="currentColor" stroke-width="1.5"/><line x1="240" y1="171" x2="280" y2="195" stroke="currentColor" stroke-width="1.5"/><line x1="320" y1="171" x2="360" y2="195" stroke="currentColor" stroke-width="1.5"/><circle cx="360" cy="38" r="17" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><circle cx="280" cy="96" r="17" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><circle cx="440" cy="96" r="17" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><circle cx="240" cy="154" r="17" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><circle cx="320" cy="154" r="17" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><circle cx="400" cy="154" r="17" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><circle cx="480" cy="154" r="17" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><circle cx="200" cy="212" r="17" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><circle cx="280" cy="212" r="17" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><circle cx="360" cy="212" r="17" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="360" y="43" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">23</text><text x="280" y="101" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">17</text><text x="440" y="101" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">14</text><text x="240" y="159" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">6</text><text x="320" y="159" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">13</text><text x="400" y="159" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">10</text><text x="480" y="159" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">1</text><text x="200" y="217" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">5</text><text x="280" y="217" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">7</text><text x="360" y="217" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">12</text><text x="384" y="24" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65">1</text><text x="302" y="82" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65">2</text><text x="462" y="82" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65">3</text><text x="258" y="140" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65">4</text><text x="338" y="140" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65">5</text><text x="418" y="140" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65">6</text><text x="498" y="140" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65">7</text><text x="218" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65">8</text><text x="298" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65">9</text><text x="378" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65">10</text><text x="46" y="282" font-family="ui-sans-serif, system-ui" font-size="13" font-style="italic" fill="currentColor">A =</text><g stroke="currentColor" stroke-width="1.5"><rect x="64" y="256" width="44" height="38" fill="currentColor" fill-opacity="0.12"/><rect x="120" y="256" width="44" height="38" fill="currentColor" fill-opacity="0.12"/><rect x="176" y="256" width="44" height="38" fill="currentColor" fill-opacity="0.12"/><rect x="232" y="256" width="44" height="38" fill="currentColor" fill-opacity="0.12"/><rect x="288" y="256" width="44" height="38" fill="currentColor" fill-opacity="0.12"/><rect x="344" y="256" width="44" height="38" fill="currentColor" fill-opacity="0.12"/><rect x="400" y="256" width="44" height="38" fill="currentColor" fill-opacity="0.12"/><rect x="456" y="256" width="44" height="38" fill="currentColor" fill-opacity="0.12"/><rect x="512" y="256" width="44" height="38" fill="currentColor" fill-opacity="0.12"/><rect x="568" y="256" width="44" height="38" fill="currentColor" fill-opacity="0.12"/></g><text x="86" y="280" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">23</text><text x="142" y="280" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">17</text><text x="198" y="280" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">14</text><text x="254" y="280" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">6</text><text x="310" y="280" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">13</text><text x="366" y="280" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">10</text><text x="422" y="280" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">1</text><text x="478" y="280" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">5</text><text x="534" y="280" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">7</text><text x="590" y="280" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">12</text><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65" text-anchor="middle"><text x="86" y="310">1</text><text x="142" y="310">2</text><text x="198" y="310">3</text><text x="254" y="310">4</text><text x="310" y="310">5</text><text x="366" y="310">6</text><text x="422" y="310">7</text><text x="478" y="310">8</text><text x="534" y="310">9</text><text x="590" y="310">10</text></g></svg>`,
      },
    ],
    examples: [
      {
        title: "Index arithmetic on a real heap",
        problem: "For the heap $A = \\langle 23, 17, 14, 6, 13, 10, 1, 5, 7, 12 \\rangle$ of $n = 10$ elements, locate the relatives of node 4, find the leaf region, and compute the heap height.",
        steps: [
          { label: "Step 1", text: "Children of node 4: $\\text{LEFT}(4) = 8$ and $\\text{RIGHT}(4) = 9$, so its children are $A[8] = 5$ and $A[9] = 7$. Both are $\\le A[4] = 6$, as the max-heap property demands." },
          { label: "Step 2", text: "Parent of node 4: $\\lfloor 4/2 \\rfloor = 2$, and indeed $A[2] = 17 \\ge 6$. Running upward, $\\lfloor 2/2 \\rfloor = 1$, the root $23$." },
          { label: "Step 3", text: "Leaves: positions $\\lfloor 10/2 \\rfloor + 1 = 6$ through $10$, i.e. the values $10, 1, 5, 7, 12$ — five leaves, half the array." },
          { label: "Step 4", text: "Height: $\\lfloor \\lg 10 \\rfloor = 3$ edges. Node 10 (value 12, child of node 5) has height 0; the path $23 \\to 17 \\to 6 \\to 7$ realizes the height 3." },
        ],
        result: "Node 4's subtree is $\{6, 5, 7\}$ of height 1; the array is a valid max-heap with height 3 and exactly 5 leaves in positions 6–10.",
      },
      {
        title: "A near-miss: is this a heap?",
        problem: "Check whether $A = \\langle 5, 9, 4, 3, 2 \\rangle$ is a max-heap, and if not, identify every violated pair.",
        steps: [
          { label: "Step 1", text: "Parent–child pairs to check: $(1,2)$, $(1,3)$, $(2,4)$, $(2,5)$. Pairs involving node 3's children do not exist since $\\text{LEFT}(3) = 6 > n$." },
          { label: "Step 2", text: "$(1,2)$: $A[1] = 5 \\ge A[2] = 9$ fails — the root is smaller than its left child. This single violation already disqualifies the array." },
          { label: "Step 3", text: "The others happen to hold: $5 \\ge 4$, $9 \\ge 3$, $9 \\ge 2$. So exactly one vertical pair is out of order, at the very top." },
          { label: "Step 4", text: "A MAX-HEAPIFY call at the root (Section 6.2) would repair it by sifting 5 down: swap with 9, giving $\\langle 9, 5, 4, 3, 2 \\rangle$, which is a valid max-heap." },
        ],
        result: "Not a heap — one bad pair $(A[1], A[2])$; after one swap the array becomes a max-heap.",
      },
    ],
    keyTakeaways: [
      "A binary heap is an array read as a nearly complete binary tree: children of $i$ at $2i$, $2i+1$, parent at $\\lfloor i/2 \\rfloor$ — no pointers, all $O(1)$ arithmetic.",
      "The heap property is vertical only: in a max-heap every parent $\\ge$ its children; siblings are unordered, so the array itself is not sorted.",
      "The heap height is $\\lfloor \\lg n \\rfloor$, and the leaves occupy exactly the last $\\lceil n/2 \\rceil$ positions $A[\\lfloor n/2 \\rfloor + 1 \\ldots n]$.",
    ],
    quiz: [
      {
        q: "In a 1-indexed array heap, the children of node $i$ are stored at:",
        options: ["$2i+1$ and $2i+2$", "$2i$ and $2i+1$", "$i+1$ and $i+2$", "$\\lfloor i/2 \\rfloor$ and $\\lfloor i/2 \\rfloor + 1$"],
        answer: 1,
        explanation: "LEFT(i) = 2i and RIGHT(i) = 2i + 1 hold exactly when the root sits at index 1; the parent is then ⌊i/2⌋. The off-by-one alternatives belong to 0-indexed variants.",
      },
      {
        q: "A heap contains $n = 100$ elements. Its height is:",
        options: ["100", "50", "$\\lfloor \\lg 100 \\rfloor = 6$", "$\\lceil \\lg 100 \\rceil = 7$"],
        answer: 2,
        explanation: "Height counts edges on the longest root-to-leaf path; a nearly complete tree with 100 nodes has 7 levels of nodes, hence 6 edges. Levels 0..6 hold at most 1+2+4+8+16+32+64 = 127 ≥ 100 nodes.",
      },
      {
        q: "Which array positions hold the leaves of a heap with $n = 10$?",
        options: ["positions 1–5", "positions 5–10", "positions 6–10", "positions 4–10"],
        answer: 2,
        explanation: "Leaves are positions ⌊n/2⌋ + 1 through n. For n = 10 that is 6..10: LEFT(6) = 12 > 10, so node 6 has no children, and node 5 still has LEFT(5) = 10 ≤ 10.",
      },
      {
        q: "Which statement about the max-heap property is correct?",
        options: ["Every parent is $\\ge$ its children, but siblings are unconstrained", "The left child always exceeds the right child", "The array must be sorted in nonincreasing order", "Every node exceeds all nodes of smaller index"],
        answer: 0,
        explanation: "The constraint A[PARENT(i)] ≥ A[i] links only vertical pairs. A sorted nonincreasing array is a max-heap, but a very special one; heaps tolerate any sibling order.",
      },
    ],
  },

  // ---------------------------------------------------------------- 6.2
  {
    sectionId: "clrs-ch6-s2",
    readingTime: 6,
    intro: "MAX-HEAPIFY is the single repair tool from which everything else in the chapter is assembled: given a node whose two subtrees are already valid heaps, it pushes the node's value down until it dominates its subtree. The procedure costs time proportional to the height of the node it fixes — and the worst case, counterintuitively, recurses into a subtree holding two thirds of the elements.",
    objectives: [
      "Trace MAX-HEAPIFY on concrete arrays, swap by swap",
      "Prove the recurrence $T(n) \\le T(2n/3) + \\Theta(1)$ and derive the $O(\\lg n)$ bound",
      "Explain why the precondition — subtrees already heaps — is essential",
    ],
    concepts: [
      {
        term: "MAX-HEAPIFY",
        kind: "method",
        statement: "**`MAX-HEAPIFY(A, i)`** assumes the binary trees rooted at $\\text{LEFT}(i)$ and $\\text{RIGHT}(i)$ are max-heaps but $A[i]$ may be small. Compare $A[i]$ with its children; if the largest of the three is a child, swap $A[i]$ with it and recurse on that child's position.",
        detail: "Pseudocode: `largest = i; if LEFT(i) ≤ A.heap-size and A[LEFT(i)] > A[largest] then largest = LEFT(i); if RIGHT(i) ≤ A.heap-size and A[RIGHT(i)] > A[largest] then largest = RIGHT(i); if largest ≠ i then swap A[i], A[largest]; MAX-HEAPIFY(A, largest)` — two comparisons, then at most one recursive call.",
      },
      {
        term: "Correctness as a descent argument",
        kind: "theorem",
        statement: "If both subtrees of $i$ are max-heaps, then after `MAX-HEAPIFY(A, i)` finishes, the whole subtree rooted at $i$ is a max-heap.",
        detail: "The exchange step promotes a subtree maximum into the vacated slot, so every ancestor–descendant violation can only occur below the swapped position; the recursion applies exactly the same argument one level down, terminating at a leaf in $O(h)$ steps. Values only ever move **down** along a single path.",
      },
      {
        term: "Running time and the $2n/3$ recurrence",
        kind: "theorem",
        statement: "MAX-HEAPIFY costs $T(n) \\le T(2n/3) + \\Theta(1)$ on a subtree of $n$ nodes, which solves to $T(n) = O(\\lg n)$ — linear in the node's height.",
        detail: "The worst case packs the subtree's last level entirely into the **left** child's subtree (the left subtree can hold the deepest level while the right one stops one level earlier), making the recursed side hold up to $2n/3$ of the nodes. By the master theorem, $a=1$, $b=3/2$, $f(n)=\\Theta(1)=n^{\\log_{3/2}1}$ gives Case 2: $T(n)=\\Theta(\\lg n)$.",
      },
      {
        term: "The precondition is not negotiable",
        kind: "insight",
        statement: "`MAX-HEAPIFY` **repairs one node**, not an arbitrary array: if the subtrees are not already heaps, one pass down a single path cannot notice violations living off that path.",
        detail: "Example: on $\\langle 1, 9, 4, 8, 5, 6 \\rangle$ the subtrees of the root are already heaps, so a call at the root sifts 1 down through 9, giving $\\langle 9, 1, 4, 8, 5, 6 \\rangle$, then through 8 — a single path repair. But if the *subtree* rooted at node 2 held $\\langle 9, 8, 5 \\rangle$ with a violation deep inside it, a root-level call would still only touch one path and the violation would survive: heapify trusts, it does not audit.",
      },
      {
        term: "MIN-HEAPIFY by symmetry",
        kind: "method",
        statement: "Reversing every comparison turns MAX-HEAPIFY into MIN-HEAPIFY: at node $i$ pick the smallest of $A[i], A[\\mathrm{LEFT}(i)], A[\\mathrm{RIGHT}(i)]$, swap downward if needed, and recurse. The $T(n) \\le T(2n/3) + \\Theta(1) = O(\\lg n)$ bound and the one-path descent argument are unchanged.",
        detail: "Dijkstra's and Prim's priority queues in Chapters 23-24 are min-heap clients: every MAX-HEAP operation in this chapter has a min twin obtained by swapping $\\ge$ with $\\le$ and $\\infty$ with $-\\infty$.",
      },
    ],
    figures: [
      {
        caption: "The action of `MAX-HEAPIFY(A, 2)` on $A = \\langle 16, 4, 10, 14, 7, 9, 3, 2, 8, 1 \\rangle$ (amber nodes mark the value 4 on its descent). The value 4 loses to its larger child 14, swaps down, then loses to 8 — two exchanges, and the heap property is restored everywhere above the path it touched.",
        afterConcept: 1,
        svg: `<svg viewBox="0 0 720 250" width="100%" role="img" aria-label="Three tree snapshots of MAX-HEAPIFY repairing a heap: the value 4 cascades down by swapping with 14 and then 8"><g stroke="currentColor" stroke-width="1.5"><line x1="125" y1="44" x2="85" y2="72"/><line x1="125" y1="44" x2="165" y2="72"/><line x1="85" y1="100" x2="65" y2="128"/><line x1="85" y1="100" x2="105" y2="128"/><line x1="165" y1="100" x2="145" y2="128"/><line x1="165" y1="100" x2="185" y2="128"/><line x1="65" y1="156" x2="45" y2="184"/><line x1="65" y1="156" x2="85" y2="184"/><line x1="105" y1="156" x2="165" y2="184"/></g><circle cx="125" cy="30" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="125" y="35" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">16</text><circle cx="85" cy="86" r="14" fill="#f59e0b" fill-opacity="0.28" stroke="#f59e0b" stroke-width="2"/><text x="85" y="91" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><circle cx="165" cy="86" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="165" y="91" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">10</text><circle cx="65" cy="142" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="65" y="147" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">14</text><circle cx="105" cy="142" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="105" y="147" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">7</text><circle cx="145" cy="142" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="145" y="147" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">9</text><circle cx="185" cy="142" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="185" y="147" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">3</text><circle cx="45" cy="198" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="45" y="203" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><circle cx="85" cy="198" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="85" y="203" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">8</text><circle cx="165" cy="198" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="165" y="203" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">1</text><line x1="208" y1="115" x2="248" y2="115" stroke="currentColor" stroke-width="1.5"/><polygon points="256,115 244,110.5 244,119.5" fill="currentColor"/><g stroke="currentColor" stroke-width="1.5"><line x1="365" y1="44" x2="325" y2="72"/><line x1="365" y1="44" x2="405" y2="72"/><line x1="325" y1="100" x2="305" y2="128"/><line x1="325" y1="100" x2="345" y2="128"/><line x1="405" y1="100" x2="385" y2="128"/><line x1="405" y1="100" x2="425" y2="128"/><line x1="305" y1="156" x2="285" y2="184"/><line x1="305" y1="156" x2="325" y2="184"/><line x1="345" y1="156" x2="405" y2="184"/></g><circle cx="365" cy="30" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="365" y="35" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">16</text><circle cx="325" cy="86" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="325" y="91" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">14</text><circle cx="405" cy="86" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="405" y="91" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">10</text><circle cx="305" cy="142" r="14" fill="#f59e0b" fill-opacity="0.28" stroke="#f59e0b" stroke-width="2"/><text x="305" y="147" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><circle cx="345" cy="142" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="345" y="147" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">7</text><circle cx="385" cy="142" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="385" y="147" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">9</text><circle cx="425" cy="142" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="425" y="147" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">3</text><circle cx="285" cy="198" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="285" y="203" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><circle cx="325" cy="198" r="14" fill="#f59e0b" fill-opacity="0.28" stroke="#f59e0b" stroke-width="2"/><text x="325" y="203" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">8</text><circle cx="405" cy="198" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="405" y="203" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">1</text><line x1="448" y1="115" x2="488" y2="115" stroke="currentColor" stroke-width="1.5"/><polygon points="496,115 484,110.5 484,119.5" fill="currentColor"/><g stroke="currentColor" stroke-width="1.5"><line x1="605" y1="44" x2="565" y2="72"/><line x1="605" y1="44" x2="645" y2="72"/><line x1="565" y1="100" x2="545" y2="128"/><line x1="565" y1="100" x2="585" y2="128"/><line x1="645" y1="100" x2="625" y2="128"/><line x1="645" y1="100" x2="665" y2="128"/><line x1="545" y1="156" x2="525" y2="184"/><line x1="545" y1="156" x2="565" y2="184"/><line x1="585" y1="156" x2="645" y2="184"/></g><circle cx="605" cy="30" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="605" y="35" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">16</text><circle cx="565" cy="86" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="565" y="91" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">14</text><circle cx="645" cy="86" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="645" y="91" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">10</text><circle cx="545" cy="142" r="14" fill="#f59e0b" fill-opacity="0.28" stroke="#f59e0b" stroke-width="2"/><text x="545" y="147" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">8</text><circle cx="585" cy="142" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="585" y="147" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">7</text><circle cx="625" cy="142" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="625" y="147" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">9</text><circle cx="665" cy="142" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="665" y="147" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">3</text><circle cx="525" cy="198" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="525" y="203" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><circle cx="565" cy="198" r="14" fill="#f59e0b" fill-opacity="0.28" stroke="#f59e0b" stroke-width="2"/><text x="565" y="203" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><circle cx="645" cy="198" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="645" y="203" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">1</text><g font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle"><text x="125" y="236">(a) call at i = 2</text><text x="365" y="236">(b) after swap 4 ↔ 14</text><text x="605" y="236">(c) after swap 4 ↔ 8</text></g></svg>`,
      },
    ],
    examples: [
      {
        title: "A full MAX-HEAPIFY trace",
        problem: "Run `MAX-HEAPIFY(A, 2)` on $A = \\langle 16, 4, 10, 14, 7, 9, 3, 2, 8, 1 \\rangle$ ($n = 10$), listing every comparison and swap.",
        steps: [
          { label: "Step 1", text: "At $i = 2$: value 4; children $A[4] = 14$ (LEFT) and $A[5] = 7$ (RIGHT). Largest of $\{4, 14, 7\}$ is 14 at LEFT — swap $A[2] \\leftrightarrow A[4]$: $A = \\langle 16, 14, 10, 4, 7, 9, 3, 2, 8, 1 \\rangle$." },
          { label: "Step 2", text: "Recurse at $i = 4$: value 4; children $A[8] = 2$ and $A[9] = 8$. Largest is 8 at RIGHT — swap $A[4] \\leftrightarrow A[9]$: $A = \\langle 16, 14, 10, 8, 7, 9, 3, 2, 4, 1 \\rangle$." },
          { label: "Step 3", text: "Recurse at $i = 9$: $\\text{LEFT}(9) = 18 > 10$, so node 9 is a leaf — the recursion stops. Total: 2 swap steps, 4 key comparisons (two per visited node).", },
          { label: "Step 4", text: "Verify: $14 \\ge 8, 7$ at node 2; $8 \\ge 2, 4$ at node 4 — every pair on the touched path now satisfies the max-heap property, and untouched pairs were valid before." },
        ],
        result: "Final array $\\langle 16, 14, 10, 8, 7, 9, 3, 2, 4, 1 \\rangle$ — a valid max-heap, reached with 2 exchanges along a single root-to-leaf path of the subtree.",
      },
      {
        title: "Where the $2n/3$ comes from",
        problem: "Exhibit a heap of $n$ nodes where MAX-HEAPIFY at the root recurses into a subtree holding as close to $2n/3$ of the nodes as possible.",
        steps: [
          { label: "Step 1", text: "Take a perfect heap of height $h$ and delete the entire last level of the **right** subtree, leaving the left subtree perfect of height $h-1$ and the right subtree perfect of height $h-2$." },
          { label: "Step 2", text: "Sizes: left $= 2^h - 1$, right $= 2^{h-1} - 1$, root $= 1$, so $n = 3 \\cdot 2^{h-1} - 1$ and the recursed (left) side has $2^h - 1$ nodes." },
          { label: "Step 3", text: "Ratio: $(2^h - 1)/(3 \\cdot 2^{h-1} - 1) \\approx 2^{h}/(3 \\cdot 2^{h-1}) = 2/3$. For $h = 4$: left $= 15$, right $= 7$, $n = 23$, ratio $15/23 \\approx 0.65$ and it creeps toward $2/3$ as $h$ grows." },
          { label: "Step 4", text: "Hence the recurrence charges each level of the descent $\\Theta(1)$ work while the problem shrinks by the factor $2/3$ at worst: $T(n) \\le T(2n/3) + \\Theta(1) = O(\\lg n)$." },
        ],
        result: "The bottom-heavy complete tree is exactly the shape that makes MAX-HEAPIFY as expensive as its $O(\\lg n)$ bound allows.",
      },
    ],
    keyTakeaways: [
      "MAX-HEAPIFY fixes a single node in $O(\\lg n)$: two comparisons plus at most one recursive call, following one path down the tree.",
      "Its precondition — both subtrees already valid heaps — is what makes the one-path repair sufficient; BUILD-MAX-HEAP manufactures this precondition from the bottom up.",
      "The worst-case recurrence is $T(n) \\le T(2n/3) + \\Theta(1)$ because the left subtree can absorb the entire last level, not because heaps are left-heavy by rule.",
    ],
    quiz: [
      {
        q: "The precondition of `MAX-HEAPIFY(A, i)` is:",
        options: ["the whole array is a max-heap", "the subtrees rooted at LEFT(i) and RIGHT(i) are max-heaps", "i is a leaf", "all keys are distinct"],
        answer: 1,
        explanation: "The procedure repairs only the node i by descending a single path; it can never detect violations off that path, so it needs the subtrees to be heaps already.",
      },
      {
        q: "The worst-case running time of MAX-HEAPIFY on a subtree of $n$ nodes is:",
        options: ["$\\Theta(1)$", "$\\Theta(n)$", "$\\Theta(\\lg n)$", "$\\Theta(n \\lg n)$"],
        answer: 2,
        explanation: "Each step does constant work and descends one level, so the cost is O(height) = O(lg n). Formally T(n) ≤ T(2n/3) + Θ(1), which the master theorem resolves to Θ(lg n).",
      },
      {
        q: "In the recurrence $T(n) \\le T(2n/3) + \\Theta(1)$, the fraction $2/3$ arises because:",
        options: ["the array is two-thirds full by definition", "in the worst case the deepest level is filled entirely inside the left subtree, which then holds up to $2n/3$ nodes", "two of every three nodes are leaves", "each node has at most three children"],
        answer: 1,
        explanation: "The tree must stay nearly complete, so the last level can only be lopsided to the left; a perfect left subtree of the same height as the right one minus one holds 2/3 of all nodes in the limit.",
      },
      {
        q: "On $A = \\langle 16, 4, 10, 14, 7, 9, 3, 2, 8, 1 \\rangle$, how many element exchanges does `MAX-HEAPIFY(A, 2)` perform?",
        options: ["0", "1", "2", "3"],
        answer: 2,
        explanation: "The value 4 swaps with 14, then with 8, and stops at the leaf: two exchanges — the descent length of the node.",
      },
      // PYQ-pattern — MAX-HEAPIFY trace (rephrased, values changed)
      {
        q: "MAX-HEAPIFY is called on index $2$ of $A = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]$ (1-indexed), where both subtrees of node $2$ are already max-heaps. The resulting array is:",
        options: ["$[16, 14, 10, 8, 7, 9, 3, 2, 4, 1]$", "$[16, 14, 10, 4, 7, 9, 3, 2, 8, 1]$", "$[16, 7, 10, 14, 4, 9, 3, 2, 8, 1]$", "$[4, 14, 10, 16, 7, 9, 3, 2, 8, 1]$"],
        answer: 0,
        explanation: "Step 1 — Given: $A[2] = 4$ with children $A[4] = 14$ and $A[5] = 7$, heap size $10$. Step 2 — Governing rule: compare the node with both children, swap with the largest if it exceeds the node, then recurse at the swapped position. Step 3 — Trace: largest of ${4, 14, 7}$ is $14$ at index $4$, swap to get $[16, 14, 10, 4, 7, 9, 3, 2, 8, 1]$; at index $4$ the children are $2$ and $8$, largest is $8$ at index $9$, swap to get $[16, 14, 10, 8, 7, 9, 3, 2, 4, 1]$; index $9$ is a leaf, halt. Step 4 — Sanity check: every parent now dominates its children, only the path $2 \\to 4 \\to 9$ moved, and cost is bounded by height $O(\\lg n)$. Step 5 — Distractor analysis: the second option stops after one swap leaving $4$ above $8$, the third swaps with the smaller child, and the fourth moves the root illegally. Step 6 — Conclude: $[16, 14, 10, 8, 7, 9, 3, 2, 4, 1]$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 6.3
  {
    sectionId: "clrs-ch6-s3",
    readingTime: 6,
    intro: "Building a heap looks like it should cost $n$ heapifies times $O(\\lg n)$ — but that bound is a factor of $\\lg n$ too pessimistic. The nodes that are expensive to fix are exponentially rare: half the array never gets a call at all, and only one node has the full height. Charging each node by its height makes the arithmetic collapse to a geometric sum.",
    objectives: [
      "Execute BUILD-MAX-HEAP and justify its ⌊n/2⌋ starting point",
      "Prove the tight $O(n)$ bound via the height-sum $\\sum_h \\lceil n/2^{h+1} \\rceil \\cdot O(h)$",
      "Contrast the loose $O(n \\lg n)$ argument and see exactly where it overcharges",
    ],
    concepts: [
      {
        term: "BUILD-MAX-HEAP",
        kind: "method",
        statement: "**`BUILD-MAX-HEAP(A)`** sets `A.heap-size = n` and runs `MAX-HEAPIFY(A, i)` for $i = \\lfloor n/2 \\rfloor, \\lfloor n/2 \\rfloor - 1, \\ldots, 1$.",
        detail: "Running **bottom-up** guarantees the loop invariant: when `MAX-HEAPIFY(A, i)` is called, both subtrees of $i$ have already been heapified (or are leaves), so the precondition of Section 6.2 holds by construction. Positions after $\\lfloor n/2 \\rfloor$ are leaves and need no call at all.",
      },
      {
        term: "The loose bound and why it fails",
        kind: "insight",
        statement: "Each of the $\\lfloor n/2 \\rfloor$ heapify calls costs $O(\\lg n)$, giving $O(n \\lg n)$ — a correct but **loose** bound, because it charges every node the *maximum* height as if it were the root.",
        detail: "The root is the only node of height $\\lfloor \\lg n \\rfloor$; half the nodes are leaves with height 0 and cost $O(1)$. An analysis that ignores where nodes live in the tree throws away exactly the structure that makes the algorithm fast.",
      },
      {
        term: "Counting nodes by height",
        kind: "notation",
        statement: "A heap of $n$ elements contains **at most $\\lceil n/2^{h+1} \\rceil$ nodes of height $h$**, for every $h$ from 0 to $\\lfloor \\lg n \\rfloor$.",
        detail: "Nodes of height $h$ sit at depth at most $\\lfloor \\lg n \\rfloor - h$, and any two of them at the *same* depth root disjoint subtrees; each such subtree contains at least $2^{h+1} - 1$ nodes, which the book rounds conservatively to the usable bound $\\lceil n/2^{h+1} \\rceil$. Fewer than one in $2^{h+1}$ positions can afford such a tall subtree.",
      },
      {
        term: "The tight linear bound",
        kind: "theorem",
        statement: "BUILD-MAX-HEAP runs in $O(n)$: $\\sum_{h=0}^{\\lfloor \\lg n \\rfloor} \\lceil n/2^{h+1} \\rceil \\cdot O(h) = O\\!\\left(n \\sum_{h=0}^{\\infty} \\frac{h}{2^{h+1}}\\right) = O(2n) = O(n)$.",
        detail: "The series $\\sum_{h \\ge 0} h/2^{h+1} = \\tfrac{1}{2} \\sum h/2^h = 1$ (since $\\sum_{h \\ge 0} h x^h = x/(1-x)^2$ at $x = 1/2$ gives 2). Doubling the count of height-$h$ nodes for the ceiling, the total charge is bounded by a constant times $n$ — the heights form a converging geometric weight, so the cheap bottom dominates.",
      },
      {
        term: "Why $\\sum h/2^h$ converges",
        kind: "theorem",
        statement: "For $|x| < 1$, $\\sum_{h \\ge 0} h x^h = x/(1-x)^2$; at $x = 1/2$ the sum is $2$. Hence $\\sum_h \\lceil n/2^{h+1} \\rceil \\cdot O(h) = O(n \\sum_h h/2^h) = O(n)$: halving of node counts beats linear growth of heights.",
        detail: "Differentiate $\\sum_{h \\ge 0} x^h = 1/(1-x)$ term by term and multiply by $x$. The same series bounds BUILD-MAX-HEAP, the linear-time heapify of Exercise 6.3-3 variants, and the $O(n)$ bound for building a heap bottom-up in any $d$-ary heap.",
      },
    ],
    examples: [
      {
        title: "Build a heap by hand",
        problem: "Run BUILD-MAX-HEAP on $A = \\langle 5, 3, 17, 10, 84, 19, 6, 22, 9 \\rangle$ ($n = 9$).",
        steps: [
          { label: "Step 1", text: "$\\lfloor 9/2 \\rfloor = 4$, so heapify $i = 4, 3, 2, 1$. At $i = 4$: value 10, children $A[8] = 22$, $A[9] = 9$ — 22 wins, swap: $\\langle 5, 3, 17, 22, 84, 19, 6, 10, 9 \\rangle$." },
          { label: "Step 2", text: "$i = 3$: value 17, children $A[6] = 19$, $A[7] = 6$ — 19 wins, swap: $\\langle 5, 3, 19, 22, 84, 17, 6, 10, 9 \\rangle$; node 6 is a leaf, so the recursion stops." },
          { label: "Step 3", text: "$i = 2$: value 3, children 22 and 84 — 84 wins, swap: $\\langle 5, 84, 19, 22, 3, 17, 6, 10, 9 \\rangle$; recursion at node 5 stops (its children $\\text{LEFT}(5) = 10 > 9$)." },
          { label: "Step 4", text: "$i = 1$: value 5 — 84 wins (swap), then at node 2: 22 wins (swap), then at node 4: 10 wins (swap). Result: $\\langle 84, 22, 19, 10, 3, 17, 6, 5, 9 \\rangle$." },
        ],
        result: "A valid max-heap in 6 exchanges total. Note the calls at $i = 4, 3$ cost one swap each, $i = 2$ cost one, and only the root cascaded three levels deep — the bottom-heavy cost profile the $O(n)$ analysis formalizes.",
      },
      {
        title: "The height census for $n = 16$",
        problem: "For a heap with $n = 16$ elements, tabulate the number of nodes of each height and the total heapify work they represent.",
        steps: [
          { label: "Step 1", text: "By the census bound: height 0 (leaves) at most $\\lceil 16/2 \\rceil = 8$ nodes; height 1: $\\lceil 16/4 \\rceil = 4$; height 2: $\\lceil 16/8 \\rceil = 2$; height 3: $\\lceil 16/16 \\rceil = 1$; height 4 (the root): $\\lceil 16/32 \\rceil = 1$ — and $\\lfloor \\lg 16 \\rfloor = 4$ exactly, since the tree is perfect." },

          { label: "Step 2", text: "Check: $8 + 4 + 2 + 1 + 1 = 16$ nodes — the census is exact for this shape." },
          { label: "Step 3", text: "Work charged: $\\sum \\lceil n/2^{h+1} \\rceil \\cdot h = 8 \\cdot 0 + 4 \\cdot 1 + 2 \\cdot 2 + 1 \\cdot 3 + 1 \\cdot 4 = 0 + 4 + 4 + 3 + 4 = 15$ units." },
          { label: "Step 4", text: "Compare the loose bound: $16 \\cdot \\lg 16 = 64$ units — more than four times the honest charge, and the gap widens to a full factor $\\lg n$ in general." },
        ],
        result: "Total charge 15 units versus the geometric bound $\\sum_h h/2^{h+1} \\cdot n \\cdot O(1) \\le 2n = 32$: the linear bound holds with room to spare.",
      },
    ],
    keyTakeaways: [
      "BUILD-MAX-HEAP heapifies nodes $\\lfloor n/2 \\rfloor$ down to 1 — bottom-up, so every call's precondition (heaped subtrees) is already true.",
      "At most $\\lceil n/2^{h+1} \\rceil$ nodes have height $h$; since a height-$h$ node costs $O(h)$, the total is $O(n \\sum_h h/2^{h+1}) = O(n)$.",
      "The $O(n \\lg n)$ bound is correct but loose by a logarithmic factor — a reminder to charge algorithms by what they actually touch, not by the worst node.",
    ],
    quiz: [
      {
        q: "BUILD-MAX-HEAP calls MAX-HEAPIFY for which indices (root at 1, size $n$)?",
        options: ["$1$ to $n$", "$n$ down to 1", "$\\lfloor n/2 \\rfloor$ down to 1", "$\\lfloor n/2 \\rfloor + 1$ down to $n$"],
        answer: 2,
        explanation: "Positions ⌊n/2⌋+1..n are leaves — trivially heaps — so the loop starts at the last internal node ⌊n/2⌋ and walks down to the root, ensuring subtrees are heapified before each call.",
      },
      {
        q: "The tight asymptotic running time of BUILD-MAX-HEAP is:",
        options: ["$\\Theta(n \\lg n)$", "$\\Theta(n)$", "$\\Theta(\\lg n)$", "$\\Theta(n^2)$"],
        answer: 1,
        explanation: "Charging each node by its height: Σ ⌈n/2^(h+1)⌉·O(h) ≤ O(n Σ h/2^h) = O(n). The n lg n estimate overcharges every node the root's height.",
      },
      {
        q: "For $n = 16$, how many nodes have height exactly 1?",
        options: ["8", "4", "2", "1"],
        answer: 1,
        explanation: "At most ⌈n/2^(h+1)⌉ = ⌈16/4⌉ = 4 nodes of height 1: for a full 16-node heap these are positions 5–8, the nodes whose children are leaves but whose grandchildren do not exist (node 8 has just the one child at position 16).",
      },
      {
        q: "The geometric series powering the linear bound is $\\sum_{h \\ge 0} h/2^h$, which equals:",
        options: ["1", "2", "$\\lg n$", "it diverges"],
        answer: 1,
        explanation: "From Σ h·x^h = x/(1−x)² at x = 1/2. The halving of node counts per level beats the linear growth of heights, so the series converges to 2 and the build cost is O(n).",
      },
    ],
  },

  // ---------------------------------------------------------------- 6.4
  {
    sectionId: "clrs-ch6-s4",
    readingTime: 6,
    intro: "With a heap in hand, sorting becomes an exchange routine: the maximum is always parked at $A[1]$, so swap it to the back, shrink the heap by one, and repair the root. Heapsort thereby achieves $\\Theta(n \\lg n)$ in the worst case using $O(1)$ extra space — the same asymptotic guarantee as merge sort with none of its auxiliary array.",
    objectives: [
      "Execute heapsort on a full example, separating the build phase from the extraction loop",
      "Establish the $O(n \\lg n)$ worst-case bound and the in-place property",
      "Compare heapsort's guarantees with merge sort, quicksort and insertion sort",
    ],
    concepts: [
      {
        term: "The HEAPSORT procedure",
        kind: "method",
        statement: "**`HEAPSORT(A)`**: first `BUILD-MAX-HEAP(A)`; then for $i = n$ down to 2: swap $A[1] \\leftrightarrow A[i]$, decrement `A.heap-size`, and call `MAX-HEAPIFY(A, 1)`.",
        detail: "After the swap, the old maximum sits at position $i$ and is **frozen**: the heap-size has shrunk past it, so no later operation can touch it. Each iteration thus retires one element to its final sorted position, from the end of the array backward.",
      },
      {
        term: "Correctness by frozen suffix",
        kind: "theorem",
        statement: "At the start of each loop iteration, $A[1 \\ldots \\text{heap-size}]$ is a max-heap containing the smallest $\\text{heap-size}$ values, and $A[\\text{heap-size}+1 \\ldots n]$ holds the largest $n - \\text{heap-size}$ values already in sorted order.",
        detail: "The invariant holds initially (the build makes $A[1..n]$ a heap) and is preserved: extracting the root removes the largest remaining element, and the MAX-HEAPIFY call restores the heap property for the shortened array. When heap-size reaches 1, the whole array is sorted.",
      },
      {
        term: "The running time and space",
        kind: "theorem",
        statement: "HEAPSORT runs in $O(n \\lg n)$ worst case — $O(n)$ for the build plus $n - 1$ heapify calls at $O(\\lg n)$ each — using **$O(1)$ auxiliary space** beyond a constant number of variables.",
        detail: "The bound holds for *every* input: there is no quicksort-style bad pivot, because the heap shape forces the maximum to the root in $O(\\lg n)$ regardless of key order. This is why heapsort is the standard worst-case backstop (and, folded with a depth cap, the fallback of introsort).",
      },
      {
        term: "Heapsort among the sorts",
        kind: "insight",
        statement: "Heapsort is **in-place and $\\Theta(n \\lg n)$ worst case** — but its memory access pattern (tree jumps of stride $2i$) is far less local than merge sort's sequential sweeps or insertion sort's short shifts, so on real machines it often loses despite better asymptotics than quicksort's $\\Theta(n^2)$ corner.",
        detail: "Insertion sort wins on nearly-sorted inputs ($O(n + \\text{inversions})$), merge sort is stable with sequential access but pays $\\Theta(n)$ space, quicksort is the fastest in practice but quadratic in the worst case, heapsort is the safe all-rounder. Chapter 8 shows $\\Omega(n \\lg n)$ is optimal for comparison sorts — so no comparison sort can asymptotically beat these.",
      },
      {
        term: "Heapsort is not stable",
        kind: "insight",
        statement: "Equal keys can reverse their relative order: the long-distance swap $A[1] \\leftrightarrow A[i]$ throws a duplicate maximum past equal keys sitting in the suffix, and no later step remembers which copy came first. Stability must be bought with satellite sequence numbers if it is needed.",
        detail: "Example: $\\langle 2_a, 2_b, 1 \\rangle$ builds to $\\langle 2_a, 2_b, 1 \\rangle$, swaps $2_a$ to the end, and finishes $\\langle 1, 2_b, 2_a \\rangle$. Merge sort keeps the order; heapsort does not promise it.",
      },
    ],
    examples: [
      {
        title: "Heapsort, two phases",
        problem: "Sort $A = \\langle 5, 13, 2, 25, 7, 17, 20, 8, 4 \\rangle$ ($n = 9$) with heapsort, showing the build and the first two extractions.",
        steps: [
          { label: "Step 1 (build)", text: "BUILD-MAX-HEAP heapifies $i = 4 \\ldots 1$. $i{=}4$: value 25 beats children 8, 4 — no swap. $i{=}3$: value 2, children 17, 20 — 20 wins: $\\langle 5,13,20,25,7,17,2,8,4\\rangle$. $i{=}2$: value 13, children $A[4] = 25$ and $A[5] = 7$ — 25 wins, swap, then 13 beats children 8, 4 and stops: $\\langle 5,25,20,13,7,17,2,8,4\\rangle$." },
          { label: "Step 2 (build, root)", text: "$i{=}1$: value 5, children 25, 20 — 25 wins, swap; recurse at node 2: children 13, 7 — 13 wins, swap; recurse at node 4: children 8, 4 — 8 wins, swap. Built heap: $\\langle 25,13,20,8,7,17,2,5,4\\rangle$." },
          { label: "Step 3 (extract 1)", text: "Swap $A[1] \\leftrightarrow A[9]$: $\\langle 4, 13, 20, 8, 7, 17, 2, 5, \\mathbf{25} \\rangle$, heap-size 8, heapify root: 4 swaps with 20, then with 17: $\\langle 20, 13, 17, 8, 7, 4, 2, 5 \\rangle$." },
          { label: "Step 4 (extract 2)", text: "Swap $A[1] \\leftrightarrow A[8]$: the array becomes $\\langle 5, 13, 17, 8, 7, 4, 2, 25 \\rangle$ with 25 frozen at position 8; heap-size 7, heapify root: 5 loses to 17, swaps down to node 3, then stops since $5 \\ge$ children 4, 2: $\\langle 17, 13, 5, 8, 7, 4, 2 \\rangle$." },
          { label: "Step 5", text: "Continuing: extract 17, 13, 8, 7, 5, 4, 2 — the sorted output is $\\langle 2, 4, 5, 7, 8, 13, 17, 20, 25 \\rangle$." },
        ],
        result: "Build cost ≈ 6 exchanges; the eight extractions cascade progressively shorter paths — total $\\Theta(n \\lg n)$ with zero auxiliary arrays.",
      },
      {
        title: "Heapsort's final three extractions",
        problem: "Finish heapsort on the heap $A = \\langle 4, 3, 2, 1 \\rangle$ with heap-size $4$, showing how the frozen suffix grows.",
        steps: [
          { label: "Extract 4", text: "Swap $A[1] \\leftrightarrow A[4]$: $\\langle 1, 3, 2, \\mathbf{4} \\rangle$, heap-size $3$, heapify root: $1$ loses to $\\max(3,2) = 3$, swap: $\\langle 3, 1, 2 \\rangle$; at node $2$, $1$ is a leaf, stop." },
          { label: "Extract 3", text: "Swap $A[1] \\leftrightarrow A[3]$: $\\langle 2, 1, \\mathbf{3}, \\mathbf{4} \\rangle$, heap-size $2$, heapify root: $2 \\ge 1$, no swap." },
          { label: "Extract 2", text: "Swap $A[1] \\leftrightarrow A[2]$: $\\langle 1, \\mathbf{2}, \\mathbf{3}, \\mathbf{4} \\rangle$, heap-size $1$, done. Sorted: $\\langle 1, 2, 3, 4 \\rangle$." },
          { label: "Count", text: "Three extractions, one exchange in the first, none after: the paths shorten as the heap shrinks, which is why the extraction phase totals $\\sum_{i=2}^{n} O(\\lg i) = O(n \\lg n)$ and not $n$ times the maximum height." },
        ],
        result: "Final array $\\langle 1, 2, 3, 4 \\rangle$; the suffix $\\mathbf{2}, \\mathbf{3}, \\mathbf{4}$ froze in decreasing extraction order, each in its final sorted position.",
      },
    ],
    keyTakeaways: [
      "Heapsort = build a max-heap in $O(n)$, then repeatedly swap the root maximum to the shrinking suffix and heapify in $O(\\lg n)$.",
      "Its frozen-suffix loop invariant makes correctness a two-line induction; each iteration fixes one final array position.",
      "Worst case $\\Theta(n \\lg n)$, in-place $O(1)$ extra space, not stable — the same asymptotics as merge sort at a fraction of the memory.",
    ],
    quiz: [
      {
        q: "HEAPSORT's worst-case running time on $n$ elements is:",
        options: ["$\\Theta(n)$", "$\\Theta(n \\lg n)$", "$\\Theta(n^2)$", "$\\Theta(\\lg n)$"],
        answer: 1,
        explanation: "The O(n) build plus n−1 root heapifies at O(lg n) each gives Θ(n lg n) — and unlike quicksort there is no input that degrades it.",
      },
      {
        q: "At the start of each iteration of the extraction loop, where is the largest remaining heap element?",
        options: ["at $A[n]$", "at $A[1]$", "in the left subtree", "at $A[\\lfloor n/2 \\rfloor]$"],
        answer: 1,
        explanation: "The heap property parks the maximum at the root A[1]; the iteration's first move swaps it into its final position at the end of the current array prefix.",
      },
      {
        q: "How much auxiliary storage does heapsort require beyond the input array?",
        options: ["$\\Theta(n)$ for the output array", "$O(1)$ — it is in-place", "$\\Theta(n \\lg n)$ for the recursion", "$\\lg n$ bits per element"],
        answer: 1,
        explanation: "Heapsort rearranges the array itself with a constant number of extra variables; the heapify recursion follows one path and is trivially made iterative, so the book classifies heapsort as in-place.",
      },
      {
        q: "Immediately after the swap $A[1] \\leftrightarrow A[i]$, the algorithm:",
        options: ["calls BUILD-MAX-HEAP again", "calls MAX-HEAPIFY(A, 1) with heap-size $i-1$", "inserts $A[i]$ into the sorted suffix by shifting", "partitions around $A[1]$"],
        answer: 1,
        explanation: "The swapped-down value may violate the property only at the root, and only within the shrunken heap — exactly the situation one root heapify repairs.",
      },
      // PYQ-pattern — BUILD-MAX-HEAP tight bound (rephrased, values changed)
      {
        q: "BUILD-MAX-HEAP on an $n$-element array runs in:",
        options: ["$\\Theta(n^2)$ time", "$\\Theta(\\lg n)$ time", "$\\Theta(n)$ time", "$\\Theta(n\\lg n)$ time"],
        answer: 2,
        explanation: "Step 1 — Given: $n$ leaves-to-root heapify calls, node at height $h$ costs $O(h)$. Step 2 — Governing count: at most $\\lceil\\frac{n}{2^{h+1}}\\rceil$ nodes have height $h$, so total cost is bounded by $\\sum_{h} \\frac{n}{2^{h+1}} O(h)$. Step 3 — Summation: $n\\sum_{h \\ge 0} \\frac{h}{2^{h+1}} = O(n)$ since $\\sum_{h} \\frac{h}{2^h} = 2$, a convergent geometric-arithmetic series. Step 4 — Sanity check: half the array (leaves) costs nothing, only the root pays full height, and the bound is tight as shown by a full tree. Step 5 — Distractor analysis: $\\Theta(n\\lg n)$ multiplies worst height by $n$ ignoring rarity, $\\Theta(n^2)$ has no basis, and $\\Theta(\\lg n)$ is one call, not $n$. Step 6 — Conclude: $\\Theta(n)$ time.",
      },
    ],
  },

  // ---------------------------------------------------------------- 6.5
  {
    sectionId: "clrs-ch6-s5",
    readingTime: 7,
    intro: "A heap quietly keeps the maximum available at all times — which is precisely the contract of a priority queue. This section turns the heap into a data structure supporting insert, peek, extract and increase-key, all in logarithmic time, and shows why event-driven simulators, schedulers and shortest-path algorithms are all heap clients underneath.",
    objectives: [
      "Define the priority queue ADT and its four operations on a max-heap",
      "Trace HEAP-EXTRACT-MAX and HEAP-INCREASE-KEY on real numbers",
      "Connect the bubbling-up of INCREASE-KEY to MAX-HEAPIFY's trickling-down symmetry",
    ],
    concepts: [
      {
        term: "Priority queue",
        kind: "definition",
        statement: "A **priority queue** maintains a set $S$ of elements, each with a **key** (priority) plus satellite data, supporting: `INSERT(S, x)`, `MAXIMUM(S)` (peek without removal), `EXTRACT-MAX(S)`, and `INCREASE-KEY(S, x, k)` (raise $x$'s key to $k \\ge$ old key).",
        detail: "It is the 'queue' where service order is by key, not arrival. A max-heap implements it in $O(\\lg n)$ per mutating operation and $O(1)$ for MAXIMUM; min-versions (or negated keys) serve symmetric needs — Dijkstra's frontier, for instance, uses a min-priority queue on tentative distances.",
      },
      {
        term: "HEAP-EXTRACT-MAX",
        kind: "method",
        statement: "Return $A[1]$; move the last element $A[\\text{heap-size}]$ to the root; decrement heap-size; `MAX-HEAPIFY(A, 1)`. Total $O(\\lg n)$.",
        detail: "Deleting the root leaves a hole — the cheapest legal filler is the last leaf, which by position is the least-committed value in the structure. The root then trickles down a single path, exactly the Section 6.2 machinery.",
      },
      {
        term: "MAX-HEAP-INSERT and HEAP-INCREASE-KEY",
        kind: "method",
        statement: "`MAX-HEAP-INSERT` appends the element with key $-\\infty$, increments heap-size, then calls `HEAP-INCREASE-KEY` to raise it to the true key: while $i > 1$ and $A[\\text{PARENT}(i)] < A[i]$, swap and continue at the parent. Both run in $O(\\lg n)$.",
        detail: "INCREASE-KEY is MAX-HEAPIFY upside down: the heap property can break only on the *upward* chain of the promoted element, so the fix is a single climb toward the root. The $-\\infty$ sentinel append is the trick that lets one procedure handle insertion of any key.",
      },
      {
        term: "Heaps under the hood of real systems",
        kind: "insight",
        statement: "Discrete-event simulators store events keyed by time and always need the soonest; operating-system schedulers pick the highest-priority runnable task; Dijkstra's and Prim\'s algorithms repeatedly extract the minimum-key frontier node — all are priority queues in disguise.",
        detail: "The book also derives a converse application: given $n$ sorted lists, merging them into one sorted stream is $n$ simultaneous insert/extract operations on a min-queue. When the number of lists is modest, this beats concatenating and re-sorting from scratch.",
      },
      {
        term: "HEAP-MAXIMUM in $\\Theta(1)$",
        kind: "method",
        statement: "`HEAP-MAXIMUM(A)` returns $A[1]$ without modifying the heap: $\\Theta(1)$ time, since the max-heap property parks the maximum at the root. Every other priority-queue operation pays $O(\\lg n)$ precisely because it must restore what this peek does not disturb.",
        detail: "The min twin `HEAP-MINIMUM` is symmetric. Peeks never change `heap-size`, so a sequence of $k$ peeks costs $\\Theta(k)$ while $k$ extracts cost $\\Theta(k \\lg n)$.",
      },
    ],
    examples: [
      {
        title: "Extract then insert",
        problem: "Start from the heap $A = \\langle 16, 14, 10, 8, 7, 9, 3, 2, 4, 1 \\rangle$ ($n = 10$). Perform HEAP-EXTRACT-MAX, then MAX-HEAP-INSERT a new element with key 15.",
        steps: [
          { label: "Step 1", text: "EXTRACT-MAX returns 16. Move the last leaf to the root and shrink: $A = \\langle 1, 14, 10, 8, 7, 9, 3, 2, 4 \\rangle$, $n = 9$." },
          { label: "Step 2", text: "Heapify the root: 1 loses to $\\max(14, 10) = 14$ — swap; then at node 2, 1 loses to $\\max(8, 7) = 8$ — swap; then at node 4, 1 loses to $\\max(2, 4) = 4$ — swap. Result: $\\langle 14, 8, 10, 4, 7, 9, 3, 2, 1 \\rangle$." },
          { label: "Step 3", text: "Insert 15: append $-\\infty$ at position 10, $n = 10$: $\\langle 14, 8, 10, 4, 7, 9, 3, 2, 1, -\\infty \\rangle$; raise it to 15." },
          { label: "Step 4", text: "The climb: parent $A[5] = 7 < 15$ — swap up; parent $A[2] = 8 < 15$ — swap up; parent $A[1] = 14 < 15$ — swap to the root. Final heap: $\\langle 15, 14, 10, 4, 8, 9, 3, 2, 1, 7 \\rangle$ — verify: $15 \\ge 14, 10$; $14 \\ge 4, 8$; $10 \\ge 9, 3$; $4 \\ge 2, 1$." },
        ],
        result: "After extraction the max is 14; after inserting 15 the heap is $\\langle 15, 14, 10, 4, 8, 9, 3, 2, 1, 7 \\rangle$ — both operations touched only one root-to-leaf path each.",
      },
      {
        title: "A priority queue as an event loop",
        problem: "A simulator holds events keyed by time: (7, 'msg'), (3, 'ack'), (9, 'close'), (1, 'open'). Show the heap states as it runs the four events in order.",
        steps: [
          { label: "Step 1", text: "Insert keys 7, 3, 9 into a min-heap (soonest first): after three inserts, $A = \\langle 3, 7, 9 \\rangle$ with satellite data riding along." },
          { label: "Step 2", text: "Insert key 1: append, then climb past 3 to the root: $A = \\langle 1, 3, 9, 7 \\rangle$." },
          { label: "Step 3", text: "Extract-min → key 1 ('open'). Last leaf 7 moves to the root, sinks below 3: $A = \\langle 3, 7, 9 \\rangle$." },
          { label: "Step 4", text: "Extract-min → 3 ('ack') — heap $\\langle 7, 9 \\rangle$; then insert 5 ('ping') → climbs to root: $\\langle 5, 9, 7 \\rangle$; extract-min → 5, then 7, then 9 ('close')." },
        ],
        result: "Output order: open(1), ack(3), ping(5), 7, close(9) — every operation $O(\\lg 4)$ steps, and the queue never held more than 4 events.",
      },
    ],
    keyTakeaways: [
      "A heap implements the priority queue ADT: MAXIMUM in $O(1)$; INSERT, EXTRACT-MAX and INCREASE-KEY in $O(\\lg n)$.",
      "EXTRACT-MAX plants the last leaf at the root and trickles down; INCREASE-KEY bubbles a raised key up — the two repairs are vertical mirror images.",
      "Min-heaps serve selection workloads (Dijkstra, event simulation) either by symmetric code or by storing negated keys in a max-heap.",
    ],
    quiz: [
      {
        q: "The running time of HEAP-EXTRACT-MAX on a heap of $n$ elements is:",
        options: ["$\\Theta(1)$", "$\\Theta(\\lg n)$", "$\\Theta(n)$", "$\\Theta(n \\lg n)$"],
        answer: 1,
        explanation: "One root heapify after the swap: a single path down the tree, O(lg n) — the O(1) return of the root itself is only half the operation.",
      },
      {
        q: "MAX-HEAP-INSERT places a new element by:",
        options: ["heapifying the whole array", "appending key $-\\infty$ and raising it with INCREASE-KEY, bubbling up while the parent is smaller", "swapping with the root immediately", "binary searching for its position"],
        answer: 1,
        explanation: "The −∞ sentinel append keeps the shape valid instantly; INCREASE-KEY then climbs the single parent chain the new key can violate, in O(lg n).",
      },
      {
        q: "HEAP-INCREASE-KEY raises $A[i]$ from 9 to 15, where the parent holds 12. What happens?",
        options: ["nothing — the heap property is intact since $12 \\ge 9$", "the element swaps with its parent and keeps climbing while the parent is smaller", "the element is sifted down by MAX-HEAPIFY", "the whole heap is rebuilt in $O(n)$"],
        answer: 1,
        explanation: "What matters is the *new* key: 15 > 12 violates the property, so the element swaps with its parent and continues upward. The 'does nothing' option applies only when the new key stays at or below the parent — raising 9 to 10 would indeed be free.",
      },
      {
        q: "Which application is a direct client of a (min-)priority queue?",
        options: ["reversing an array", "a discrete-event simulation keyed by event time", "balancing parentheses", "counting distinct keys"],
        answer: 1,
        explanation: "The simulator must repeatedly retrieve the soonest event — extract-min on a time key — exactly the ADT a heap implements; Dijkstra's algorithm is the other canonical client.",
      },
    ],
  },
]
