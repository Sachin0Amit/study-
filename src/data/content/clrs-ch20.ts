import type { SectionContent } from '../library'

// ============================================================================
// Cormen, Leiserson, Rivest, Stein — Introduction to Algorithms, 3rd Edition
// Chapter 20: van Emde Boas Trees (Sections 20.1 – 20.3)
// Bit vectors + superimposed trees, the recursive proto-vEB structure,
// and the O(lg lg u) van Emde Boas tree with clusters and summaries.
// ============================================================================

export const clrsCh20Content: SectionContent[] = [
  // ---------------------------------------------------------------- 20.1
  {
    sectionId: "clrs-ch20-s1",
    readingTime: 6,
    intro: "Binary search trees answer dictionary queries in $O(\\lg n)$, where $n$ is the number of keys stored — but when the keys come from a small universe $\\{0, \\dots, u-1\\}$, the universe itself can be the data structure: a bit vector answers INSERT and MEMBER in $O(1)$, at the price of $\\Theta(u)$ scans for MINIMUM and SUCCESSOR. This section builds the two ideas that shrink that price: superimpose a tree of summary bits over the array, then make the tree short and fat ($\\sqrt u$ branching) and apply the trick to itself. The recurrence $T(u) = T(\\sqrt u) + O(1)$ emerges, and its solution $O(\\lg \\lg u)$ is the van Emde Boas idea.",
    objectives: [
      "Analyze the plain bit vector: O(1) INSERT/DELETE/MEMBER versus Θ(u) MIN/MAX/SUCCESSOR/PREDECESSOR",
      "Explain the superimposed binary tree and then the two-level √u structure with its O(√u) successor bound",
      "Derive the recurrence T(u) = T(√u) + O(1) = O(lg lg u) that motivates the whole chapter",
    ],
    concepts: [
      {
        term: "The bit-vector structure",
        kind: "definition",
        statement: "Maintain an array $A[0..u-1]$ of bits with $A[x] = 1$ iff $x$ is in the set $S$. **INSERT, DELETE and MEMBER take $O(1)$** — one array access — but **MINIMUM, MAXIMUM, SUCCESSOR and PREDECESSOR take $\\Theta(u)$ in the worst case**, because finding the next set bit after $x$ may require scanning the whole array. Space is $\\Theta(u)$.",
        detail: "The vector is attractive when $u$ is small or dense (a bitmap allocator); it fails exactly when the *ordering* queries matter — order lives in position, and positions must be walked.",
      },
      {
        term: "Superimposing a binary tree",
        kind: "method",
        statement: "Overlay a binary tree on the array: leaf $i$ is bit $A[i]$, and each internal node stores the **OR of its children's bits** (1 iff some descendant leaf is set). Then MINIMUM, MAXIMUM, SUCCESSOR and PREDECESSOR each walk down or up at most one root-to-leaf path — $O(\\lg u)$ — by descending through the leftmost 1-subtree, or climbing from $x$'s leaf to the lowest ancestor whose right side contains a 1. The cost: INSERT and DELETE now update $\\lg u$ ancestor bits, and space remains $\\Theta(u)$.",
        detail: "The summary bits convert *position scanning* into *tree walking* — every operation becomes $O(\\lg u)$, no better than a balanced BST on $n$ keys, but independent of $n$: the bounds depend on the universe $u$ alone.",
      },
      {
        term: "The √u trick: a two-level structure",
        kind: "method",
        statement: "Make the superimposed tree short and fat: a root with $\\sqrt u$ children, each covering $\\sqrt u$ consecutive bits. The root holds a **summary bit-vector of $\\sqrt u$ bits** — bit $i$ set iff group $i$ contains a set bit. SUCCESSOR($x$): scan the remainder of $x$'s group ($\\le \\sqrt u$ bits); if that fails, scan the summary for the next nonempty group ($\\le \\sqrt u$), then scan that group from its start ($\\le \\sqrt u$) — **$O(\\sqrt u)$ total**. INSERT, DELETE, MEMBER return to $O(1)$ since only one group bit and the summary bit of that group change.",
        detail: "Trade height for width: height 2 instead of $\\lg u$, at the price of $\\sqrt u$-wide scans. The next idea is to recurse the trade.",
      },
      {
        term: "The recursive leap to lg lg u",
        kind: "insight",
        statement: "Now treat the summary bit-vector — and each group — as **smaller instances of the same structure**, recursively. Each level of recursion cuts the universe to its square root, and one query makes $O(1)$ work per level, giving $$T(u) = T(\\sqrt u) + O(1) = O(\\lg \\lg u).$$ This double-logarithmic bound is the van Emde Boas idea (van Emde Boas, 1975–77): universe size, not element count, drives the height.",
        detail: "The chapter assumes $u = 2^{2^k}$ (2, 4, 16, 256, 65536, …) so that $\\sqrt u$ is an exact integer power of 2 at every level; general $u$ rounds up to the next such value.",
      },
      {
        term: "Storing $\\min$ and $\\max$ separately",
        kind: "insight",
        statement: "Full van Emde Boas trees keep $min$ and $max$ outside the recursive structure: MINIMUM/MAXIMUM then cost $O(1)$ and deletions avoid recursing for the extremes. The preliminary structures of this section pay $\\Theta(\\sqrt u)$ or $O(\\lg \\lg u)$ for the same queries because they store everything uniformly.",
        detail: "Foreshadowing: Section 20.3's $min$/$max$ fields also let INSERT skip recursion when the new key is a new extreme, and let SUCCESSOR return $max$ without descending. The idea is born from the preliminary structures' weakness.",
      },
    ],
    examples: [
      {
        title: "Three structures, one universe: $u = 2^{32}$",
        problem: "Compare worst-case SUCCESSOR times on the universe $\{0, \\dots, 2^{32}-1\}$ (4,294,967,296 elements) for the three structures of this section.",
        steps: [
          { label: "Step 1: The bit vector", text: "One scan can visit every bit: $\\Theta(u) = \\Theta(2^{32}) \\approx 4.3$ billion steps in the worst case — although INSERT/MEMBER stay $O(1)$." },
          { label: "Step 2: The two-level √u structure", text: "$\\sqrt{2^{32}} = 2^{16} = 65{,}536$, so SUCCESSOR costs at most about $3\\sqrt u \\approx 196{,}608$ bit inspections — better by four orders of magnitude, still not logarithmic." },
          { label: "Step 3: The recursive structure", text: "Each level squares-roots the universe: $2^{32} \\to 2^{16} \\to 2^8 \\to 2^4 \\to 2^2 \\to 2$. That is $\\lg \\lg u = \\lg 32 = 5$ levels of $O(1)$ work — SUCCESSOR in 5 steps, whatever $n$ is." },
          { label: "Step 4: The catch", text: "The recursion needs space proportional to $u$ at every level (Section 20.2 counts it) — the price of a universe-indexed structure rather than an element-indexed one." },
        ],
        result: "Bit vector $\\Theta(u)$, two-level $O(\\sqrt u) = 65{,}536$-ish, recursive $O(\\lg \\lg u) = 5$: each idea buys a double exponent, and the last buys two logs.",
      },
      {
        title: "SUCCESSOR(80) in the two-level structure, counted exactly",
        problem: "Universe $u = 256$ with $\\sqrt u = 16$ groups of 16 bits, holding $S = \\{3, 70, 200\\}$. Count the bit inspections of SUCCESSOR(80).",
        steps: [
          { label: "Step 1: Finish x's group", text: "80 lies in group 5 (bits 80–95). Scanning bits 81 through 95 — the group is empty — costs 15 inspections." },
          { label: "Step 2: Search the summary", text: "Scan summary bits for groups 6, 7, …: groups 6 through 11 are empty, group 12 (bits 192–207) is the next with a set bit — 7 more inspections." },
          { label: "Step 3: Enter the new group", text: "Scan group 12 from bit 192: 192, …, 200 — the 9th inspection finds the set bit. Answer: SUCCESSOR(80) = 200." },
          { label: "Step 4: Compare with the bound", text: "Total $15 + 7 + 9 = 31$ inspections, within $3\\sqrt u = 48$ and of course far below the bit vector's possible 255. Each of the three scans is capped by $\\sqrt u = 16$." },
        ],
        result: "31 bit inspections — $O(\\sqrt u)$, and the reason to recurse is visible: the *scans themselves* are the problem the next level of structure will solve.",
      },
    ],
    keyTakeaways: [
      "A u-bit array gives O(1) insert/member but Θ(u) order statistics; order queries are the bottleneck.",
      "Superimposed summary bits turn scans into walks: a binary tree gives O(lg u) for everything, a height-2 √u-branching tree gives O(√u) successors with O(1) inserts.",
      "Recursing the √u split yields T(u) = T(√u) + O(1) = O(lg lg u) — the van Emde Boas idea, assuming u = 2^2^k.",
    ],
    quiz: [
      {
        q: "In a plain bit vector over a universe of size $u$, the worst-case cost of MINIMUM is:",
        options: ["$O(1)$", "$O(\\lg u)$", "$O(\\sqrt u)$", "$\\Theta(u)$"],
        answer: 3,
        explanation: "The minimum is the first set bit, which may sit at the very end of the array — a full scan. INSERT and MEMBER are the O(1) operations; the four order queries are the Θ(u) ones.",
      },
      {
        q: "With the two-level structure (a $\\sqrt u$-bit summary plus $\\sqrt u$ groups of $\\sqrt u$ bits), SUCCESSOR costs:",
        options: ["$O(1)$", "$O(\\sqrt u)$", "$O(\\lg u)$", "$O(\\lg \\lg u)$"],
        answer: 1,
        explanation: "Three capped scans: the rest of x's group, the summary, and the next nonempty group — each at most $\\sqrt u$ bit inspections. The $\\lg \\lg u$ bound needs the fully recursive structure.",
      },
      {
        q: "The recurrence $T(u) = T(\\sqrt u) + O(1)$ solves to:",
        options: ["$O(\\lg \\lg u)$", "$O(\\lg u)$", "$O(\\sqrt u)$", "$O(u)$"],
        answer: 0,
        explanation: "Writing $u = 2^{2^k}$, each level decrements $k$: $2^{2^k} \\to 2^{2^{k-1}} \\to \\dots \\to 2$, so there are $\lg \lg u$ levels of constant work.",
      },
      {
        q: "Why does superimposing a full binary tree of height $\\lg u$ over the bit vector fail to give $O(1)$ operations?",
        options: [
          "It uses too much space",
          "INSERT and DELETE must update the $\\lg u$ ancestor bits on the leaf's path, and searches still walk $O(\\lg u)$ levels",
          "It cannot represent the empty set",
          "It violates the heap property",
        ],
        answer: 1,
        explanation: "Every set/unset of a leaf flips a bit on every level up to the root, and each order query descends or climbs a full path — all operations become $O(\\lg u)$, the balanced-BST bound. Space stays Θ(u), so nothing is lost there.",
      },
    ],
  },

  // ---------------------------------------------------------------- 20.2
  {
    sectionId: "clrs-ch20-s2",
    readingTime: 7,
    intro: "The recursive idea deserves a concrete implementation before the final tree, and that implementation — the proto-vEB structure — is the chapter's honest laboratory: it achieves the double logarithm exactly where the two-calls-per-level branching allows, and falls back to $O(\\lg u)$ precisely where it does not. MEMBER descends one cluster per level, $O(\\lg \\lg u)$; but MINIMUM, SUCCESSOR and INSERT must consult *both* a cluster and the summary, the branching doubles at each of the $\\lg \\lg u$ levels, and $2^{\\lg \\lg u} = \\lg u$ — no better than a binary search tree. Section 20.3 fixes the branching; this section shows why the fix is needed.",
    objectives: [
      "Define the proto-vEB structure recursively, including the base case, and the high/low/index decomposition",
      "Trace MEMBER, MINIMUM, SUCCESSOR and INSERT on a concrete proto-vEB(16), and state their recurrences",
      "Explain why the two-recursive-calls branching gives Θ(lg u) and why proto-vEB uses Θ(u) space",
    ],
    concepts: [
      {
        term: "proto-vEB: the structure",
        kind: "definition",
        statement: "Assuming $u = 2^{2^k}$, a **proto-vEB$(u)$** structure holds: a **summary** — a pointer to a proto-vEB$(\\sqrt u)$ — and an **array cluster$[0..\\sqrt u - 1]$** of pointers, each to a proto-vEB$(\\sqrt u)$. The **base case** $u = 2$ drops both and stores just a two-bit array $A[0..1]$. The element $x$ lives in **cluster$[\\mathrm{high}(x)]$** at position $\\mathrm{low}(x)$; cluster $i$ is nonempty iff $i$ is in the summary.",
        detail: "The figure below draws a full proto-vEB(16): five proto-vEB(4) boxes and fifteen proto-vEB(2) pills — $u - 1$ leaves in all.",
      },
      {
        term: "high, low, index",
        kind: "notation",
        statement: "For a proto-vEB$(u)$ structure, split $x$ by its top half bits: $$\\mathrm{high}(x) = \\lfloor x / \\sqrt u \\rfloor, \\qquad \\mathrm{low}(x) = x \\bmod \\sqrt u, \\qquad \\mathrm{index}(i, j) = i\\sqrt u + j.$$ So $x$'s cluster is $\\mathrm{high}(x)$ and its position within that cluster is $\\mathrm{low}(x)$ — the same split at every level, with $\\sqrt u$ shrinking each time.",
        detail: "For $u = 16$: high and low are the two nibbles of a 4-bit key ($x = 4 \\cdot \\mathrm{high} + \\mathrm{low}$); one level down, $u = 4$ splits by $\\lfloor x/2 \\rfloor$ and $x \\bmod 2$.",
      },
      {
        term: "proto-vEB operations and costs",
        kind: "theorem",
        statement: "With one recursive call per level: **MEMBER is $O(\\lg \\lg u)$** — $T(u) = T(\\sqrt u) + O(1)$. With two recursive calls (cluster, then summary): **MINIMUM, MAXIMUM, SUCCESSOR, PREDECESSOR, INSERT and DELETE are all $O(\\lg u)$** — $T(u) = 2T(\\sqrt u) + O(1)$, and $2^{\\lg \\lg u} = \\lg u$ call instances.",
        detail: "proto-vEB-INSERT inserts unconditionally into *both* the cluster and the summary; SUCCESSOR tries the cluster first and, on failure, the summary plus a MINIMUM. Every one of them branches.",
      },
      {
        term: "Space: Θ(u)",
        kind: "theorem",
        statement: "Let $S(u)$ be the space of a proto-vEB$(u)$: one summary plus $\\sqrt u$ clusters gives $S(u) = (\\sqrt u + 1)S(\\sqrt u) + O(1)$, which solves to $\\Theta(u)$. Concretely, a proto-vEB(16) contains $1 + 5 \\cdot 4 = 21$ structures whose $u - 1 = 15$ base-case pills hold $2(u-1) = 30$ bits; a proto-vEB(256) contains $1 + 17 \\cdot 21 = 358$ structures with 255 pills (510 bits).",
        detail: "The recursion tree has exactly $u - 1$ leaves: a full binary split of the universe's bits, which is why the space tracks the universe, not the number of stored keys.",
      },
      {
        term: "Where proto-vEB disappoints — and why",
        kind: "insight",
        statement: "The branching is the whole story. MEMBER never needs to ask two questions, so it rides the $\\lg \\lg u$ depth directly; but SUCCESSOR must ask *is there anything above $x$ in x's cluster?* — a question that itself costs a recursive call — and INSERT must maintain two structures. The remedy (Section 20.3): **store the minimum and maximum of every structure**, so the in-cluster question is answered in $O(1)$ by one comparison, leaving at most one recursive call per level.",
        detail: "The fix must also dodge a subtlety: storing min/max in every node naively doubles the space; the min-outside-the-clusters convention of the real vEB tree is what keeps space at $O(u)$.",
      },
    ],
    figures: [
      {
        caption: "The proto-vEB structure over the universe $\\{0, \\dots, 15\\}$ holding $S = \\{1, 6, 8, 9, 15\\}$. The top structure splits each key with $\\mathrm{high}(x) = \\lfloor x/4 \\rfloor$ and $\\mathrm{low}(x) = x \\bmod 4$; each box is a proto-vEB(4) with its own summary pill and two cluster pills; each pill is a proto-vEB(2) — two bits, no recursion. The amber path is MEMBER(9): into cluster[2] (since $\\mathrm{high}(9) = 2$), then into its cluster[0] (since within that structure $\\mathrm{high}(1) = 0$), then read bit $A[1] = 1$ — one recursive call per level, $O(\\lg \\lg u)$.",
        svg: '<svg viewBox="0 0 720 350" width="100%" role="img" aria-label="A proto-vEB structure over universe 0 to 15 showing the summary and four clusters, with the membership path for 9 highlighted"><rect x="16" y="22" width="688" height="36" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="28" y="45" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor">V = proto-vEB(16): universe {0,…,15}</text><text x="692" y="45" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="end">S = {1, 6, 8, 9, 15}</text><line x1="80" y1="58" x2="80" y2="93" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><polygon points="80,99 77,92 83,92" fill="currentColor" opacity="0.6"/><line x1="220" y1="58" x2="220" y2="93" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><polygon points="220,99 217,92 223,92" fill="currentColor" opacity="0.6"/><line x1="360" y1="58" x2="360" y2="93" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><polygon points="360,99 357,92 363,92" fill="currentColor" opacity="0.6"/><line x1="500" y1="58" x2="500" y2="93" stroke="#f59e0b" stroke-width="1.8"/><polygon points="500,99 497,92 503,92" fill="#f59e0b"/><line x1="640" y1="58" x2="640" y2="93" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><polygon points="640,99 637,92 643,92" fill="currentColor" opacity="0.6"/><text x="490" y="74" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="600" fill="#f59e0b" text-anchor="end">MEMBER(9):</text><text x="490" y="88" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="#f59e0b" text-anchor="end">high(9) = ⌊9/4⌋ = 2</text><rect x="16" y="100" width="128" height="92" rx="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/><text x="80" y="118" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">summary of V</text><text x="80" y="133" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" text-anchor="middle">proto-vEB(4) = {0,1,2,3}</text><rect x="25" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="33.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><line x1="42" y1="146" x2="42" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="50.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><rect x="63" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="71.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><line x1="80" y1="146" x2="80" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="88.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><rect x="101" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="109.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><line x1="118" y1="146" x2="118" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="126.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><text x="42" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">sum</text><text x="80" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">c0</text><text x="118" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">c1</text><rect x="156" y="100" width="128" height="92" rx="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/><text x="220" y="118" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">V.cluster[0]</text><text x="220" y="133" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" text-anchor="middle">{0…3} → lows {1}</text><rect x="165" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="173.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><line x1="182" y1="146" x2="182" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="190.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><rect x="203" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="211.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><line x1="220" y1="146" x2="220" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="228.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><rect x="241" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="249.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><line x1="258" y1="146" x2="258" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="266.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><text x="182" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">sum</text><text x="220" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">c0</text><text x="258" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">c1</text><rect x="296" y="100" width="128" height="92" rx="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/><text x="360" y="118" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">V.cluster[1]</text><text x="360" y="133" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" text-anchor="middle">{4…7} → lows {2}</text><rect x="305" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="313.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><line x1="322" y1="146" x2="322" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="330.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><rect x="343" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="351.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><line x1="360" y1="146" x2="360" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="368.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><rect x="381" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="389.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><line x1="398" y1="146" x2="398" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="406.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><text x="322" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">sum</text><text x="360" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">c0</text><text x="398" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">c1</text><rect x="436" y="100" width="128" height="92" rx="6" fill="#f59e0b" fill-opacity="0.06" stroke="#f59e0b" stroke-width="1.5"/><text x="500" y="118" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">V.cluster[2]</text><text x="500" y="133" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" text-anchor="middle">{8…11} → lows {0,1}</text><rect x="445" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="453.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><line x1="462" y1="146" x2="462" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="470.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><rect x="483" y="144" width="34" height="18" rx="3" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1.2"/><text x="491.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="#f59e0b" text-anchor="middle">1</text><line x1="500" y1="146" x2="500" y2="160" stroke="#f59e0b" stroke-width="0.75" opacity="0.7"/><text x="508.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="#f59e0b" text-anchor="middle">1</text><rect x="521" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="529.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><line x1="538" y1="146" x2="538" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="546.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><text x="462" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">sum</text><text x="500" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="#f59e0b" font-weight="600" text-anchor="middle">c0</text><text x="538" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">c1</text><rect x="576" y="100" width="128" height="92" rx="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/><text x="640" y="118" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">V.cluster[3]</text><text x="640" y="133" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" text-anchor="middle">{12…15} → lows {3}</text><rect x="585" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="593.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><line x1="602" y1="146" x2="602" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="610.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><rect x="623" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="631.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><line x1="640" y1="146" x2="640" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="648.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><rect x="661" y="144" width="34" height="18" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="669.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">0</text><line x1="678" y1="146" x2="678" y2="160" stroke="currentColor" stroke-width="0.75" opacity="0.5"/><text x="686.5" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">1</text><text x="602" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">sum</text><text x="640" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">c0</text><text x="678" y="176" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">c1</text><line x1="500" y1="192" x2="500" y2="240" stroke="#f59e0b" stroke-width="1.8"/><polygon points="500,246 497,239 503,239" fill="#f59e0b"/><text x="494" y="208" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="#f59e0b" text-anchor="end">inside: 1 = (high 0, low 1)</text><text x="494" y="222" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="#f59e0b" text-anchor="end">→ its cluster[0], bit A[1]</text><text x="16" y="210" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">cluster[i] of V holds low(x) for every x ∈ S with high(x) = i;</text><text x="16" y="226" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">the summary of V holds {0,1,2,3} — all four clusters nonempty.</text><text x="16" y="242" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">Each pill is a proto-vEB(2): two bits A[0], A[1] and no recursion.</text><rect x="432" y="248" width="140" height="30" rx="4" fill="#f59e0b" fill-opacity="0.06" stroke="#f59e0b" stroke-width="1.5"/><line x1="502" y1="250" x2="502" y2="276" stroke="#f59e0b" stroke-width="1"/><text x="467" y="268" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">A[0] = 1</text><text x="537" y="268" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="700" fill="#f59e0b" text-anchor="middle">A[1] = 1</text><text x="502" y="296" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">V.cluster[2].cluster[0] — the proto-vEB(2) read: A[1] = 1 ⇒ 9 ∈ S</text><text x="360" y="326" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">One recursive call per level: MEMBER takes O(lg lg u) time — here lg lg 16 = 2 levels.</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "MEMBER on the figure: a hit and a miss",
        problem: "Run MEMBER(9) and MEMBER(5) on the proto-vEB(16) of the figure ($S = \\{1, 6, 8, 9, 15\\}$) and count the recursive calls.",
        steps: [
          { label: "Step 1: MEMBER(9) — the first split", text: "$\\mathrm{high}(9) = \\lfloor 9/4 \\rfloor = 2$, $\\mathrm{low}(9) = 1$: recurse into V.cluster[2], asking MEMBER(1) of that proto-vEB(4)." },
          { label: "Step 2: MEMBER(9) — the second split", text: "Inside cluster[2]: $\\mathrm{high}(1) = 0$, $\\mathrm{low}(1) = 1$: recurse into its cluster[0], a proto-vEB(2), asking for bit $A[1]$." },
          { label: "Step 3: MEMBER(9) — the base", text: "$A[1] = 1$ (the amber pill, set because both 8 and 9 live in cluster[2]) — return TRUE after exactly $\\lg \\lg u = 2$ recursive calls." },
          { label: "Step 4: MEMBER(5) — the miss", text: "$\\mathrm{high}(5) = 1$, $\\mathrm{low}(5) = 1$: into V.cluster[1] (which holds only low 2, from the element 6); there $\\mathrm{high}(1) = 0$, $\\mathrm{low}(1) = 1$: its cluster[0] pill reads $A[1] = 0$ — return FALSE, again 2 calls." },
        ],
        result: "Both queries take one call per level — $O(\\lg \\lg u)$ — because MEMBER never needs the summary: the cluster to descend into is read off the key itself.",
      },
      {
        title: "Counting the cost at $u = 256$: MEMBER versus SUCCESSOR",
        problem: "A proto-vEB over $u = 256$. Count worst-case recursive calls for MEMBER and for SUCCESSOR, and count the structures used.",
        steps: [
          { label: "Step 1: The levels", text: "$256 \\to 16 \\to 4 \\to 2$: three recursive steps to the base case — indeed $\\lg \\lg 256 = \\lg 8 = 3$ levels below the root, so MEMBER makes 3 recursive calls." },
          { label: "Step 2: SUCCESSOR branches", text: "Each SUCCESSOR invocation can call SUCCESSOR on a cluster *and* on the summary — two children per node of the recursion tree. With depth 3, the tree has up to $2^3 = 8$ call instances — and $\\lg u = \\lg 256 = 8$: the branching exactly cancels the double logarithm, leaving $O(\\lg u)$." },
          { label: "Step 3: Space", text: "Structure count: $N(256) = 1 + 17 \\cdot N(16)$ and $N(16) = 1 + 5 \\cdot N(4)$, $N(4) = 1 + 3 \\cdot 1 = 4$: so $N(16) = 21$ and $N(256) = 1 + 17 \\cdot 21 = 358$ structures — with $u - 1 = 255$ base-case pills holding $2 \\cdot 255 = 510 = 2(u-1)$ bits, $\\Theta(u)$ overall." },
          { label: "Step 4: The verdict", text: "MEMBER at $O(\\lg \\lg u)$ is genuinely double-logarithmic, but every operation that must look at the summary too is $\\lg u$ — the proto structure realizes the idea only halfway." },
        ],
        result: "MEMBER: 3 calls. SUCCESSOR: up to 8. Space: $\\Theta(u)$ — 358 structures for 256 elements of universe.",
      },
    ],
    keyTakeaways: [
      "proto-vEB(u) = a summary proto-vEB(√u) + √u cluster proto-vEB(√u)s, with a 2-bit array at u = 2; high/low split each key level by level.",
      "MEMBER is O(lg lg u) — one recursive call per level — but MINIMUM, SUCCESSOR and INSERT are O(lg u), because each branches into both a cluster and the summary: 2^(lg lg u) = lg u.",
      "Space is Θ(u): the recursion tree has exactly u − 1 leaves, one per bit-pair of the universe.",
    ],
    quiz: [
      {
        q: "Which proto-vEB operation runs in $O(\\lg \\lg u)$ time?",
        options: ["MEMBER", "MINIMUM", "SUCCESSOR", "INSERT"],
        answer: 0,
        explanation: "MEMBER descends into the single cluster named by high(x) at each level — one recursive call per level, $T(u) = T(\\sqrt u) + O(1)$. The others must also consult the summary and so branch.",
      },
      {
        q: "proto-vEB-SUCCESSOR costs $\\Theta(\\lg u)$ rather than $O(\\lg \\lg u)$ because:",
        options: [
          "each level scans $\\sqrt u$ bits of the array",
          "it can make two recursive calls per level — into the cluster and into the summary — so the call tree doubles at each of the $\\lg \\lg u$ levels: $2^{\\lg \\lg u} = \\lg u$",
          "the base case reads both bits A[0] and A[1]",
          "it must call proto-vEB-INSERT first",
        ],
        answer: 1,
        explanation: "The doubling per level exactly cancels the halving of depth: $\\lg \\lg u$ levels of branching give $\\lg u$ total call instances — the same order as walking a balanced binary search tree.",
      },
      {
        q: "The space used by a proto-vEB structure over universe $\{0, \\dots, u-1\}$ is:",
        options: ["$\\Theta(u)$", "$\\Theta(u \\lg u)$", "$\\Theta(\\sqrt u)$", "$\\Theta(n)$ for $n$ stored keys"],
        answer: 0,
        explanation: "$S(u) = (\\sqrt u + 1)S(\\sqrt u) + O(1)$ — one summary plus √u clusters at every level — which solves to Θ(u): the structure indexes the universe, not the stored set. (Θ(n) is the tempting wrong answer for any universe-indexed structure.)",
      },
      {
        q: "MEMBER(x) on a proto-vEB over $u = 65536$ makes how many recursive calls?",
        options: ["3", "4", "16", "$65536$"],
        answer: 1,
        explanation: "$u = 2^{16}$, so $\\lg \\lg u = \\lg 16 = 4$: the chain $65536 \\to 256 \\to 16 \\to 4 \\to 2$ has four steps. SUCCESSOR, by contrast, could make up to $2^4 = 16 = \\lg u$ calls on the same structure.",
      },
    ],
  },

  // ---------------------------------------------------------------- 20.3
  {
    sectionId: "clrs-ch20-s3",
    readingTime: 8,
    intro: "The van Emde Boas tree fixes proto-vEB's one flaw with two stored numbers. Every structure keeps its **minimum and maximum** in $V.min$ and $V.max$: the minimum is stored *only* there — never in a cluster — which both saves space and makes every emptiness question an $O(1)$ comparison. Suddenly the branching question 'is there anything above $x$ inside x's cluster?' is answered by comparing $\\mathrm{low}(x)$ with the cluster's stored maximum, and each operation makes **at most one recursive call per level**: $T(u) = T(\\sqrt u) + O(1) = O(\\lg \\lg u)$ for the full repertoire — INSERT, MEMBER, MINIMUM, MAXIMUM, SUCCESSOR, PREDECESSOR — over a universe of fixed size $u$.",
    objectives: [
      "Define the vEB tree with its min/max fields, summary, and clusters, including the invariant that V.min is stored outside every cluster",
      "Trace SUCCESSOR and INSERT on a concrete vEB(16), including the min-swap on inserting a new minimum",
      "Prove the O(lg lg u) time bound and the O(u) space bound via the telescoping product identity",
    ],
    concepts: [
      {
        term: "The van Emde Boas tree",
        kind: "definition",
        statement: "A **vEB tree** $V$ over $\\{0, \\dots, u-1\\}$ with $u = 2^{2^k}$ stores: $V.min$ and $V.max$ (elements, not pointers), a **summary** — a vEB tree over $\\{0, \\dots, \\sqrt u - 1\\}$ — and an **array cluster$[0..\\sqrt u - 1]$** of vEB trees over $\\sqrt u$ elements each. For $u = 2$ only $min$ and $max$ are stored. **Invariant: $V.min = \\text{NIL}$ iff the set is empty; the minimum is stored in $V.min$ and in *no* cluster; the maximum is stored in $V.max$ *and* in its cluster.**",
        detail: "The min-outside-the-clusters convention is the linchpin: it prevents double storage at every level, keeping the space at $O(u)$ instead of $O(u \\lg u)$, and it gives every recursion an $O(1)$ early exit.",
      },
      {
        term: "O(1) emptiness, minimum, maximum",
        kind: "insight",
        statement: "Testing whether $V$ holds any element is comparing $V.min$ with NIL; MINIMUM and MAXIMUM read $V.min$ and $V.max$. No recursion at all — the stored endpoints are the answer, for any $u$.",
        detail: "Contrast proto-vEB, where MINIMUM had to recurse into the summary to find the first nonempty cluster and then into that cluster: two calls per level because nothing was cached.",
      },
      {
        term: "SUCCESSOR in O(lg lg u)",
        kind: "method",
        statement: "`vEB-TREE-SUCCESSOR(V, x)`: if $u = 2$, answer from the two stored values; if $x < V.min$, return $V.min$ (the successor hides below the stored minimum); otherwise compute $\\text{max-low} = V.cluster[\\mathrm{high}(x)].max$ **in $O(1)$** — if $\\mathrm{low}(x) < \\text{max-low}$, recurse once into that cluster; else recurse once into the summary to find the next nonempty cluster $j$ and return $\\mathrm{index}(j, V.cluster[j].min)$. **One recursive call per level: $T(u) = T(\\sqrt u) + O(1) = O(\\lg \\lg u)$.**",
        detail: "PREDECESSOR is symmetric, comparing $\\mathrm{low}(x)$ with the cluster's stored minimum. MEMBER also enjoys the endpoints: if $x$ equals $V.min$ or $V.max$, answer immediately.",
      },
      {
        term: "INSERT with the min-swap",
        kind: "method",
        statement: "`vEB-TREE-INSERT(V, x)`: if $V$ is empty, store $x$ in both fields ($O(1)$). Else if $x < V.min$, **exchange $x$ with $V.min$** — the new element becomes the stored minimum and the *old minimum* descends into the clusters (it was never there). If $u > 2$: if cluster$[\\mathrm{high}(x)]$ is empty, set it up in $O(1)$ and recurse into the **summary**; otherwise recurse into the **cluster**. Update $V.max$ if $x$ exceeds it. Either way, exactly **one** recursive call per level.",
        detail: "The swap is what keeps the minimum out of the clusters without losing it — and it can cascade: the displaced minimum provokes an insertion one level down, possibly swapping again.",
      },
      {
        term: "Space: O(u), not O(u lg u)",
        kind: "theorem",
        statement: "A vEB$(u)$ has one summary plus $\\sqrt u$ clusters, each vEB$(\\sqrt u)$: $$S(u) = (\\sqrt u + 1)\\,S(\\sqrt u) + O(1) = O(u).$$ Writing $u = 2^{2^k}$, the product of the multiplicative factors telescopes: $\\prod_{i=1}^{k}\\left(2^{2^{i-1}} + 1\\right) \\le 2^{2^k - 1} \\cdot \\prod_{j \\ge 0}\\left(1 + 2^{-2^j}\\right) = \\tfrac{u}{2} \\cdot \\frac{1}{1 - 1/2} = u$, using the identity $\\prod_{j \\ge 0}(1 + x^{2^j}) = \\frac{1}{1-x}$ at $x = 1/2$.",
        detail: "The naive bound — multiplying out all $(\\sqrt u + 1)$ factors as if each were $\\sqrt u$-ish — would suggest $O(u \\lg u)$; the $+1$s are what the identity harvests. For universes not of the form $2^{2^k}$, round up (at worst squaring the universe, still $O(u)$).",
      },
      {
        term: "When a vEB tree is the right tool",
        kind: "insight",
        statement: "All bounds are in $u$, not $n$. The tree wins when the universe is **polynomial in $n$** — say $u \\le n^2$, as when keys are pairs or coordinates — because then $\\lg \\lg u \\le \\lg \\lg n^2 = O(\\lg \\lg n)$ beats a balanced tree's $O(\\lg n)$, and the $O(u)$ space is $O(n^2)$ or better. Applications: priority queues with small integer keys, IP routing tables, and geometric sweeping over grid coordinates.",
        detail: "For huge universes with sparse keys, hashing ($O(1)$ expected insert/member but no order queries) or trees ($O(\\lg n)$ everything) remain the tools of choice.",
      },
    ],
    figures: [
      {
        caption: "The van Emde Boas tree over $\\{0, \\dots, 15\\}$ holding $S = \\{1, 6, 8, 9, 15\\}$: the top structure's fields are its stored minimum 1 (amber — stored *only* here, never in a cluster), its maximum 15 (also present inside cluster[3]), the summary, and four clusters. The numbered amber path is SUCCESSOR($V$, 7): (1) cluster[1] has $\\max = 2 < \\mathrm{low}(7) = 3$, so no successor there; (2)–(3) the summary $\{1,2,3\}$ answers 'successor of 1' $= 2$; (4) cluster[2]'s minimum is 0; (5) the answer is $2 \\cdot 4 + 0 = 8$. One recursive call per level: $O(\\lg \\lg u)$.",
        svg: '<svg viewBox="0 0 720 332" width="100%" role="img" aria-label="A van Emde Boas tree over universe 16 with stored min and max, a summary, four clusters, and the successor path from 7 highlighted"><rect x="16" y="22" width="688" height="82" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="360" y="40" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor" text-anchor="middle">V = van Emde Boas tree over u = 16 — S = {1, 6, 8, 9, 15}</text><rect x="28" y="48" width="88" height="32" rx="4" fill="#f59e0b" fill-opacity="0.10" stroke="#f59e0b" stroke-width="1.5"/><text x="72" y="68" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="#f59e0b" text-anchor="middle">min = 1</text><text x="72" y="99" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="#f59e0b" text-anchor="middle">stored only here</text><rect x="124" y="48" width="88" height="32" rx="4" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.2"/><text x="168" y="68" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">max = 15</text><text x="168" y="99" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.75">also in cluster[3]</text><rect x="220" y="48" width="88" height="32" rx="4" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.2"/><text x="264" y="68" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">cluster[0]</text><rect x="316" y="48" width="88" height="32" rx="4" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.2"/><text x="360" y="68" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">cluster[1]</text><rect x="412" y="48" width="88" height="32" rx="4" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.2"/><text x="456" y="68" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">summary</text><rect x="508" y="48" width="88" height="32" rx="4" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.2"/><text x="552" y="68" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">cluster[2]</text><rect x="604" y="48" width="88" height="32" rx="4" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.2"/><text x="648" y="68" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">cluster[3]</text><line x1="264" y1="80" x2="76" y2="137.5" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><polygon points="72,140 78.7,134.7 80.5,140.5" fill="currentColor" opacity="0.6"/><line x1="360" y1="80" x2="219" y2="139" stroke="#f59e0b" stroke-width="1.8"/><polygon points="216,140 222.3,134.2 224.5,139.8" fill="#f59e0b"/><circle cx="288" cy="110" r="9" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1.2"/><text x="288" y="113.5" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="700" fill="#f59e0b" text-anchor="middle">1</text><line x1="456" y1="80" x2="363" y2="136" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><polygon points="360,140 365.2,132.3 368.4,139.2" fill="currentColor" opacity="0.6"/><line x1="552" y1="80" x2="506" y2="134" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><polygon points="504,140 506.7,129.9 511.3,136.9" fill="currentColor" opacity="0.6"/><line x1="648" y1="80" x2="648" y2="133" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><polygon points="648,140 645,132 651,132" fill="currentColor" opacity="0.6"/><rect x="13" y="140" width="118" height="90" rx="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/><text x="72" y="158" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">V.cluster[0]</text><text x="72" y="173" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">vEB(4): ∅</text><rect x="21" y="184" width="48" height="20" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="45" y="198" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">min NIL</text><rect x="75" y="184" width="48" height="20" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="99" y="198" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle">max NIL</text><text x="72" y="222" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.75">1 = V.min is not here</text><rect x="157" y="140" width="118" height="90" rx="6" fill="#f59e0b" fill-opacity="0.06" stroke="#f59e0b" stroke-width="1.5"/><text x="216" y="158" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">V.cluster[1]</text><text x="216" y="173" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">vEB(4) = {2} — from 6</text><rect x="165" y="184" width="48" height="20" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="189" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">min 2</text><rect x="219" y="184" width="48" height="20" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="243" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">max 2</text><text x="216" y="222" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.75">min = max: single element</text><rect x="301" y="140" width="118" height="90" rx="6" fill="#f59e0b" fill-opacity="0.06" stroke="#f59e0b" stroke-width="1.5"/><text x="360" y="158" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">summary of V</text><text x="360" y="173" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">vEB(4) = {1,2,3}</text><rect x="309" y="184" width="48" height="20" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="333" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">min 1</text><rect x="363" y="184" width="48" height="20" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="387" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">max 3</text><text x="360" y="222" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.75">successor of 1 is 2</text><rect x="445" y="140" width="118" height="90" rx="6" fill="#f59e0b" fill-opacity="0.06" stroke="#f59e0b" stroke-width="1.5"/><text x="504" y="158" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">V.cluster[2]</text><text x="504" y="173" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">vEB(4) = {0,1} — from 8, 9</text><rect x="453" y="184" width="48" height="20" rx="3" fill="#f59e0b" fill-opacity="0.14" stroke="#f59e0b" stroke-width="1.2"/><text x="477" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="700" fill="#f59e0b" text-anchor="middle">min 0</text><rect x="507" y="184" width="48" height="20" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="531" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">max 1</text><circle cx="477" cy="218" r="9" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1.2"/><text x="477" y="221.5" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="700" fill="#f59e0b" text-anchor="middle">4</text><rect x="589" y="140" width="118" height="90" rx="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/><text x="648" y="158" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">V.cluster[3]</text><text x="648" y="173" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">vEB(4) = {3} — from 15</text><rect x="597" y="184" width="48" height="20" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="621" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">min 3</text><rect x="651" y="184" width="48" height="20" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/><text x="675" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">max 3</text><text x="648" y="222" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.75">15 = V.max also here</text><line x1="277" y1="185" x2="296" y2="185" stroke="#f59e0b" stroke-width="1.8"/><polygon points="300,185 292,181.5 292,188.5" fill="#f59e0b"/><circle cx="288" cy="163" r="9" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1.2"/><text x="288" y="166.5" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="700" fill="#f59e0b" text-anchor="middle">2</text><line x1="421" y1="185" x2="440" y2="185" stroke="#f59e0b" stroke-width="1.8"/><polygon points="444,185 436,181.5 436,188.5" fill="#f59e0b"/><circle cx="432" cy="163" r="9" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1.2"/><text x="432" y="166.5" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="700" fill="#f59e0b" text-anchor="middle">3</text><text x="360" y="252" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">SUCCESSOR(V, 7): (1) low(7) = 3 &gt; cluster[1].max = 2 — no successor inside cluster[1];</text><text x="360" y="268" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">(2)–(3) ask the summary for the successor of high(7) = 1 — it answers 2; (4) take cluster[2].min = 0;</text><text x="360" y="284" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">(5) return index(2, 0) = 2·4 + 0 = 8 — the next element of 7 in S.</text><text x="360" y="304" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">At most one recursive call per level: T(u) = T(√u) + O(1) = O(lg lg u).</text><text x="360" y="320" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">Space: S(u) = (√u + 1)·S(√u) + O(1) = O(u); V.min = 1 sits outside every cluster, V.max = 15 inside cluster[3].</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "SUCCESSOR(V, 7) = 8, step by step",
        problem: "On the vEB(16) of the figure, $S = \\{1, 6, 8, 9, 15\\}$: find the successor of 7.",
        steps: [
          { label: "Step 1: Inside 7's cluster", text: "$\\mathrm{high}(7) = 1$, $\\mathrm{low}(7) = 3$. Cluster[1] (holding 6) has stored maximum 2. Since $3 > 2$, nothing in cluster[1] exceeds 7 — decided by one comparison, no recursion." },
          { label: "Step 2: Ask the summary", text: "Recurse: SUCCESSOR(summary, 1) where the summary holds $\\{1, 2, 3\\}$. Within it, 1's cluster (holding 2) has maximum 2 $\\ge$ low — the answer inside is 2, i.e. cluster index 2." },
          { label: "Step 3: Take the new cluster's minimum", text: "Cluster[2] (holding lows 0 and 1, from 8 and 9) has stored minimum 0 — read in $O(1)$, not by recursion." },
          { label: "Step 4: Recombine", text: "Answer $= \\mathrm{index}(2, 0) = 2 \\cdot 4 + 0 = 8$ ✓ — indeed the next element of $S$ above 7. Two levels of recursion, each doing constant work: the $O(\\lg \\lg 16) = O(2)$ bound in action." },
        ],
        result: "SUCCESSOR(7) = 8, with the branchy proto-vEB question 'anything above x in its cluster?' reduced to the single comparison $3 > 2$.",
      },
      {
        title: "INSERT(V, 0): the min-swap cascade",
        problem: "Insert 0 into the same tree ($V.min = 1$, $V.max = 15$, $S = \\{1, 6, 8, 9, 15\\}$).",
        steps: [
          { label: "Step 1: The swap", text: "0 < V.min = 1, so exchange: now $V.min = 0$, and the value to place into the clusters is 1 — the displaced old minimum, which has never been inside a cluster." },
          { label: "Step 2: Its cluster is empty", text: "$\\mathrm{high}(1) = 0$: cluster[0] has $min = \\text{NIL}$ (it was empty precisely because 1 lived only in $V.min$). So store $\\mathrm{low}(1) = 1$ there in $O(1)$ — $cluster[0].min = cluster[0].max = 1$ — and recurse into the **summary** to record that cluster 0 became nonempty." },
          { label: "Step 3: The summary recursion", text: "The summary (a vEB(4) holding $\\{1,2,3\\}$) inserts 0: again $0 < min = 1$, so swap — the summary's minimum becomes 0 and 1 descends into *its* cluster[0] the same way. One more level down the structure bottoms out at $u = 2$." },
          { label: "Step 4: The maximum", text: "0 < 15, so $V.max$ is untouched. Final set: $\\{0, 1, 6, 8, 9, 15\\}$, with summary $\\{0,1,2,3\\}$ — and MINIMUM now returns 0 in $O(1)$." },
        ],
        result: "The insertion performs one recursive call per level and demonstrates the design's core move: the stored minimum is a *slot*, and a new smallest element pushes the old one into the clusters rather than duplicating it.",
      },
    ],
    keyTakeaways: [
      "Every vEB structure stores its min and max; V.min lives outside all clusters (emptiness test, MINIMUM and MAXIMUM in O(1)), while V.max is duplicated inside a cluster.",
      "The stored cluster maximum turns SUCCESSOR's in-cluster question into one comparison, leaving at most one recursive call per level: T(u) = T(√u) + O(1) = O(lg lg u) for the whole repertoire.",
      "S(u) = (√u + 1)·S(√u) + O(1) = O(u) — the +1 factors telescope via ∏(1 + 2^-2^j) = 2 — and the structure pays off when the universe is polynomial in the key count.",
    ],
    quiz: [
      {
        q: "In a vEB tree, where does the minimum of structure $V$ live?",
        options: [
          "in $V.min$ only — never inside any cluster",
          "duplicated into every cluster",
          "in cluster[0] only",
          "it must be found by recursion into the summary",
        ],
        answer: 0,
        explanation: "The minimum is stored once, in the structure's own min field — saving space at every level and making the emptiness test and MINIMUM O(1). The *maximum*, in contrast, is stored both as V.max and inside its cluster.",
      },
      {
        q: "SUCCESSOR's question 'is there anything above $x$ within x's own cluster?' costs $O(1)$ because:",
        options: [
          "each cluster has at most two elements",
          "each cluster stores its maximum, so comparing $\\mathrm{low}(x)$ with $V.cluster[\\mathrm{high}(x)].max$ settles it without any recursion",
          "the summary bit of the cluster answers directly",
          "successors are cached after each insert",
        ],
        answer: 1,
        explanation: "This single stored number is what proto-vEB lacked: its version of the question cost a recursive MINIMUM call, doubling the branching and degrading the bound from $O(\\lg \\lg u)$ to $O(\\lg u)$.",
      },
      {
        q: "The space recurrence $S(u) = (\\sqrt u + 1) \\cdot S(\\sqrt u) + O(1)$ solves to:",
        options: ["$O(u \\lg u)$", "$O(u)$", "$O(u \\lg \\lg u)$", "$O(u^2)$"],
        answer: 1,
        explanation: "The multiplicative factors telescope: for $u = 2^{2^k}$, $\\prod_{i=1}^{k}(2^{2^{i-1}} + 1) \\le \\frac{u}{2} \\cdot \\prod_{j \\ge 0}(1 + 2^{-2^j}) = \\frac{u}{2} \\cdot 2 = u$. The tempting $O(u \\lg u)$ double-counts the $+1$s.",
      },
      {
        q: "A vEB tree over $u = 65536$: the worst case for SUCCESSOR visits how many levels of structure?",
        options: ["16", "8", "4", "65536"],
        answer: 2,
        explanation: "$O(\\lg \\lg u)$ with $\\lg \\lg 65536 = \\lg 16 = 4$: the chain $65536 \\to 256 \\to 16 \\to 4 \\to 2$ — a constant! The value 16 is what proto-vEB's branching ($\\lg u$) would have cost.",
      },
    ],
  },
]
