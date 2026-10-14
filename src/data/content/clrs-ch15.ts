import type { SectionContent } from '../library'

// ============================================================================
// Cormen, Leiserson, Rivest, Stein — Introduction to Algorithms, 3rd Edition
// Chapter 15: Dynamic Programming (Sections 15.1 – 15.5)
// ============================================================================

export const clrsCh15Content: SectionContent[] = [
  // ---------------------------------------------------------------- 15.1
  {
    sectionId: "clrs-ch15-s1",
    readingTime: 6,
    intro: "Serling Enterprises buys long steel rods and sells them cut into shorter pieces, and the price of a piece is not proportional to its length — so how you cut determines what you earn. This innocent optimization is the book's laboratory for the whole chapter: it exposes an exponential recursion, shows that the recursion re-solves the same lengths over and over, and then fixes it twice — top-down with memoization and bottom-up with a table.",
    objectives: [
      "State the rod-cutting problem and derive the optimal-revenue recurrence $r_n = \\max_{1 \\le i \\le n}(p_i + r_{n-i})$",
      "Explain why naive recursion takes $\\Theta(2^n)$ time and how overlapping subproblems make the problem tractable",
      "Trace the memoized and bottom-up algorithms and reconstruct the optimal cut list from the $s$ table",
    ],
    concepts: [
      {
        term: "The rod-cutting problem",
        kind: "definition",
        statement: "Given a rod of length $n$ and a price table $p_1, \\dots, p_n$ (with $p_0 = 0$), **find the maximum revenue $r_n$ obtainable by cutting the rod into integer-length pieces and selling them all**. Cutting is free, any number of cuts (including none) is allowed, and a piece of length $i$ sells for $p_i$.",
        detail: "The search space is the set of all compositions (ordered cut lists) of $n$ — there are $2^{n-1}$ of them — so brute-force enumeration is exponential in $n$.",
      },
      {
        term: "Optimal-revenue recurrence",
        kind: "theorem",
        statement: "For $n \\ge 1$, $$r_n = \\max_{1 \\le i \\le n}\\,(p_i + r_{n-i}), \\qquad r_0 = 0.$$ An optimal solution either sells the rod whole ($i = n$, using $r_0 = 0$) or cuts a first piece of length $i$ and then cuts the remaining length $n - i$ optimally.",
        detail: "Once the first piece is fixed, the rest of an optimal solution must itself be optimal for the remainder — otherwise pasting in a better remainder would improve the whole. This is the cut-and-paste argument in its simplest habitat.",
      },
      {
        term: "Memoization (top-down DP)",
        kind: "method",
        statement: "MEMOIZED-CUT-ROD writes the natural recursion but **stores each computed value $r[j]$ in a table, initializing entries to $-\\infty$, and returns immediately on any repeat call**. Each of the $n$ subproblems is solved once, and subproblem $j$ scans up to $j$ first-piece choices, for $\\Theta(n^2)$ total time and $\\Theta(n)$ space.",
        detail: "Memoization preserves the shape of the recursion while collapsing its tree to the subproblem graph; it pays off most when many subproblems are never reached.",
      },
      {
        term: "Bottom-up filling and reconstruction",
        kind: "method",
        statement: "EXTENDED-BOTTOM-UP-CUT-ROD fills $r[1..n]$ in increasing order of length — a valid order because $r[j]$ depends only on strictly smaller lengths — and records $s[j]$, **the length of the first piece in an optimal first cut of a rod of length $j$**. The optimal cut list is read off by repeatedly taking $s[j]$ and setting $j \\gets j - s[j]$.",
        detail: "The value table gives the optimum's revenue; the choice table $s$ is what lets you hand the customer an actual cutting plan. Bottom-up and memoized versions share the same $\\Theta(n^2)$ asymptotics; the bottom-up loop wins on constant factors.",
      },
      {
        term: "Reconstruction from $s$",
        kind: "method",
        statement: "Store $s[j] = $ first-cut length attaining $r_j$; PRINT-CUT-SOLUTION prints $s[n]$, then recurses on $n - s[n]$. The $r$ table gives the value, the $s$ table gives the cuts: together they turn an optimum value into an optimum solution in $O(n)$.",
        detail: "Memoized top-down keeps the same $s$ writes as bottom-up; without $s$ (length only) reconstruction needs re-solving each prefix, costing $O(n^2)$ extra.",
      },
    ],
    figures: [
      {
        caption: "Left: the book's sample price table ($p_1, \\dots, p_{10} = 1, 5, 8, 9, 10, 17, 17, 20, 24, 30$); a rod of length 4 is optimally split $2 + 2$ for revenue $r_4 = p_2 + p_2 = 5 + 5 = 10$. Right: the subproblem graph for $n = 4$ — an edge from $r_j$ to $r_{j-i}$ encodes the choice of a first piece of length $i$, and the $2^{n-1} = 8$ paths from $r_4$ down to $r_0$ are exactly the 8 cut lists that naive recursion walks in full.",
        svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rod cutting price table and subproblem graph"><defs><marker id="clrs15ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs><text x="20" y="20" font-size="12" font-weight="600" fill="currentColor">sample prices p[i]</text><path d="M 14 235 H 270" stroke="currentColor" stroke-width="1" opacity="0.45" fill="none"/><g fill="currentColor"><rect x="20" y="230" width="20" height="5" opacity="0.22"/><rect x="45" y="210" width="20" height="25" opacity="0.6"/><rect x="70" y="195" width="20" height="40" opacity="0.22"/><rect x="95" y="190" width="20" height="45" opacity="0.22"/><rect x="120" y="185" width="20" height="50" opacity="0.22"/><rect x="145" y="150" width="20" height="85" opacity="0.22"/><rect x="170" y="150" width="20" height="85" opacity="0.22"/><rect x="195" y="135" width="20" height="100" opacity="0.22"/><rect x="220" y="115" width="20" height="120" opacity="0.22"/><rect x="245" y="85" width="20" height="150" opacity="0.22"/></g><g font-size="9" fill="currentColor" text-anchor="middle"><text x="30" y="226">1</text><text x="55" y="206">5</text><text x="80" y="191">8</text><text x="105" y="186">9</text><text x="130" y="181">10</text><text x="155" y="146">17</text><text x="180" y="146">17</text><text x="205" y="131">20</text><text x="230" y="111">24</text><text x="255" y="81">30</text></g><g font-size="10" fill="currentColor" text-anchor="middle" opacity="0.7"><text x="30" y="252">1</text><text x="55" y="252">2</text><text x="80" y="252">3</text><text x="105" y="252">4</text><text x="130" y="252">5</text><text x="155" y="252">6</text><text x="180" y="252">7</text><text x="205" y="252">8</text><text x="230" y="252">9</text><text x="255" y="252">10</text></g><text x="20" y="270" font-size="11" fill="currentColor">optimal r₄ = 10 = p₂ + p₂: two rods of length 2</text><text x="330" y="20" font-size="12" font-weight="600" fill="currentColor">subproblem graph for n = 4</text><g stroke="currentColor" stroke-width="1.4" fill="none" opacity="0.8"><path d="M 447 70.5 L 378 124.5" marker-end="url(#clrs15ah)"/><path d="M 460 77 L 460 118" marker-end="url(#clrs15ah)"/><path d="M 473 70.5 L 542 124.5" marker-end="url(#clrs15ah)"/><path d="M 460 77 Q 545 150 460 228" marker-end="url(#clrs15ah)"/><path d="M 382 135 L 443 135" marker-end="url(#clrs15ah)"/><path d="M 382 141 Q 460 185 538 141" marker-end="url(#clrs15ah)"/><path d="M 376 148 L 449 232" marker-end="url(#clrs15ah)"/><path d="M 477 135 L 538 135" marker-end="url(#clrs15ah)"/><path d="M 460 152 L 460 228" marker-end="url(#clrs15ah)"/><path d="M 544 148 L 471 232" marker-end="url(#clrs15ah)"/></g><g font-size="10" fill="currentColor" opacity="0.85"><text x="401" y="96" text-anchor="end">i = 1</text><text x="470" y="100">i = 2</text><text x="517" y="96">i = 3</text><text x="512" y="157">i = 4</text></g><g stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.12"><circle cx="460" cy="60" r="17"/><circle cx="365" cy="135" r="17"/><circle cx="460" cy="135" r="17"/><circle cx="555" cy="135" r="17"/><circle cx="460" cy="245" r="17"/></g><g font-size="12" font-weight="600" fill="currentColor" text-anchor="middle"><text x="460" y="64.5">r₄</text><text x="365" y="139.5">r₃</text><text x="460" y="139.5">r₂</text><text x="555" y="139.5">r₁</text><text x="460" y="249.5">r₀</text></g><text x="330" y="276" font-size="11" fill="currentColor" opacity="0.85">edge r[j] → r[j-i] means cutting a first piece of length i;</text><text x="330" y="291" font-size="11" fill="currentColor" opacity="0.85">the 8 paths from r₄ to r₀ are the 8 cut lists, all walked by naive recursion</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Cutting a rod of length 4, bottom-up",
        problem: "Using the book's sample prices $p_1, \\dots, p_{10} = 1, 5, 8, 9, 10, 17, 17, 20, 24, 30$, compute $r_4$ with EXTENDED-BOTTOM-UP-CUT-ROD and recover the optimal cut list.",
        steps: [
          { label: "Base", text: "$r_0 = 0$: a rod of length 0 earns nothing." },
          { label: "j = 1", text: "Only one first piece: $r_1 = p_1 + r_0 = 1 + 0 = 1$, so $s_1 = 1$." },
          { label: "j = 2", text: "Candidates: $i=1$: $p_1 + r_1 = 1 + 1 = 2$; $i=2$: $p_2 + r_0 = 5 + 0 = 5$. So $r_2 = 5$, $s_2 = 2$." },
          { label: "j = 3", text: "Candidates: $1 + r_2 = 6$; $5 + r_1 = 6$; $8 + r_0 = 8$. So $r_3 = 8$, $s_3 = 3$." },
          { label: "j = 4", text: "Candidates: $i=1$: $1 + 8 = 9$; $i=2$: $5 + 5 = 10$; $i=3$: $8 + 1 = 9$; $i=4$: $9 + 0 = 9$. So $r_4 = 10$ with $s_4 = 2$." },
          { label: "Reconstruct", text: "$s_4 = 2$: cut a piece of length 2 (revenue 5), leaving length 2; $s_2 = 2$: cut another piece of length 2 (revenue 5), leaving 0. Cut list: $2 + 2$." },
        ],
        result: "$r_4 = 10$, achieved by two pieces of length 2. Enumeration confirms it: the alternatives give $p_4 = 9$, $1 + r_3 = 9$, $1 + 1 + 2 = 7$, $1 + 1 + 1 + 1 = 4$ — all beaten by $5 + 5 = 10$. The same table keeps going: $r_5 = 13$, $r_6 = 17$, $r_7 = 18$, $r_8 = 22$, $r_9 = 25$, $r_{10} = 30$.",
      },
      {
        title: "First cut for length 7",
        problem: "Prices $p = [1,5,8,9,10,17,17,20,24,30]$ ($p_1..p_{10}$). Compute $r_7$ and $s_7$ bottom-up through $7$.",
        steps: [
          { label: "Base", text: "$r_0 = 0$. $r_1 = 1$ ($s_1 = 1$); $r_2 = 5$ ($s_2 = 2$); $r_3 = 8$ ($s_3 = 3$); $r_4 = 10$ ($2+2$, $s_4 = 2$); $r_5 = 13$ ($2+3$, $s_5 = 2$); $r_6 = 17$ ($s_6 = 6$)." },
          { label: "$r_7$", text: "$\\max_{1 \\le i \\le 7}(p_i + r_{7-i})$: $1+17=18$, $5+13=18$, $8+10=18$, $9+8=17$, $10+5=15$, $17+1=18$, $17+0=17$: $r_7 = 18$ ($s_7 = 1$, ties broken to smallest $i$)." },
          { label: "Reconstruct", text: "Cuts: $1$ + optimal for $6$ ($6$ whole): $1+6$: value $1+17 = 18$." },
          { label: "Check", text: "No-cut price $p_7 = 17 < 18$: cutting beats selling whole, the non-proportional pricing that makes the problem interesting." },
        ],
        result: "$r_7 = 18$ via $1+6$ ($s_7 = 1$); the $s$ table turns the value recurrence into cut instructions.",
      },
    ],
    keyTakeaways: [
      "Dynamic programming is careful brute force: guess the first cut, recurse on the remainder, and tabulate the overlapping subproblems instead of re-solving them.",
      "Naive CUT-ROD is $\\Theta(2^n)$ because each length is re-solved exponentially often; the table versions solve $n$ subproblems with at most $n$ choices each — $\\Theta(n^2)$.",
      "Store choices ($s[j]$), not just values ($r[j]$), so the optimal solution itself can be reconstructed after the fact.",
    ],
    quiz: [
      {
        q: "Counting the initial call, how many times is the naive recursive CUT-ROD invoked in total for $n = 4$?",
        options: ["5", "8", "16", "24"],
        answer: 2,
        explanation: "With $T(0) = 1$ and $T(n) = 1 + \\sum_{j=0}^{n-1} T(j)$ the totals are $1, 2, 4, 8, 16$ — exactly $T(n) = 2^n$. The 5 subproblems $r_0, \\dots, r_4$ are solved 16 times over.",
      },
      {
        q: "With the book's price table, what is $r_7$, the best revenue from a rod of length 7?",
        options: ["17", "18", "20", "22"],
        answer: 1,
        explanation: "Three first cuts tie at 18: $1 + r_6 = 1 + 17$, $2 + r_5 = 5 + 13$, $3 + r_4 = 8 + 10$. Selling the rod whole gives only $p_7 = 17$.",
      },
      {
        q: "MEMOIZED-CUT-ROD runs in $\\Theta(n^2)$ time because:",
        options: [
          "each of the $n$ subproblems is solved once, and subproblem $j$ scans up to $j$ first-piece choices",
          "the price table has $n$ entries and each is examined twice",
          "memoization converts the recursion tree into a balanced binary tree of depth $n$",
          "every call runs in constant time and there happen to be $n^2$ calls",
        ],
        answer: 0,
        explanation: "There are $n$ distinct subproblems $r_1, \\dots, r_n$; solving $r_j$ requires $O(j)$ work, giving $\\sum_j O(j) = O(n^2)$.",
      },
      {
        q: "In EXTENDED-BOTTOM-UP-CUT-ROD, the auxiliary entry $s[j]$ stores:",
        options: [
          "the revenue of the best first piece",
          "the length of the first piece cut from an optimal solution for a rod of length $j$",
          "the total number of pieces in an optimal solution for length $j$",
          "the index in the price table of the largest price",
        ],
        answer: 1,
        explanation: "$s[j]$ is the optimal first-piece size; following $j \\gets j - s[j]$ until reaching 0 emits the full cutting plan.",
      },
      // PYQ-pattern: GATE 2017 — rod-cutting optimum (rephrased, values changed)
      {
        q: "Prices for lengths $1$ to $4$ are $1, 5, 8, 9$. The optimal revenue for a rod of length $4$ is:",
        options: ["9 without cutting", "10 by cutting $2 + 2$", "11 by cutting $3 + 1$", "12 by cutting $1 + 1 + 1 + 1$"],
        answer: 1,
        explanation: "Step 1 — Given: $p = [1, 5, 8, 9]$, rod length $4$. Step 2 — Governing recurrence: $r_{0} = 0$ and $r_{n} = \\max_{1 \\le i \\le n}(p_{i} + r_{n-i})$, optimal substructure over the first cut. Step 3 — Enumeration: no cut $9$; $1 + 3$: $1 + 8 = 9$; $2 + 2$: $5 + 5 = 10$; $3 + 1$: $8 + 1 = 9$; four ones: $4$; maximum $10$. Step 4 — Sanity check: $10$ beats the uncut price because pricing is not proportional, bottom-up fills $r = [0, 1, 5, 8, 10]$, and overlapping subproblems keep it linear. Step 5 — Distractor analysis: $9$ ignores the better split, $11$ and $12$ exceed every combination sum. Step 6 — Conclude: $10$ via $2 + 2$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 15.2
  {
    sectionId: "clrs-ch15-s2",
    readingTime: 7,
    intro: "Matrix multiplication is associative — $(AB)C = A(BC)$ — but the two groupings need wildly different numbers of scalar multiplications. The matrix-chain multiplication problem asks for the cheapest full parenthesization of a product $A_1 A_2 \\cdots A_n$, and it delivers the chapter's second lesson: an exponential space of parenthesizations collapses to $\\Theta(n^2)$ subchains once you notice that the optimal grouping of any subchain must itself be optimal.",
    objectives: [
      "Compute the scalar-multiplication cost of a given parenthesization of a matrix chain",
      "Show that the number of parenthesizations is the Catalan number $C_{n-1} = \\Omega(2^n)$",
      "Derive the $m$ and $s$ recurrences and fill the tables by increasing chain length in $\\Theta(n^3)$ time",
    ],
    concepts: [
      {
        term: "Cost of one matrix multiplication",
        kind: "notation",
        statement: "Multiplying a $p \\times q$ matrix by a $q \\times r$ matrix with the standard algorithm costs $p q r$ scalar multiplications and yields a $p \\times r$ matrix. A chain $A_1 A_2 \\cdots A_n$ is specified by the dimension vector $p_0, p_1, \\dots, p_n$, where $A_i$ is $p_{i-1} \\times p_i$.",
        detail: "Any compatible chain can be multiplied in any grouping — the question is not whether the product exists but which of the exponentially many groupings is cheapest.",
      },
      {
        term: "Counting parenthesizations",
        kind: "theorem",
        statement: "Let $P(n)$ be the number of ways to fully parenthesize $n$ matrices. Then $P(1) = 1$ and $$P(n) = \\sum_{k=1}^{n-1} P(k)\\,P(n-k) \\quad (n \\ge 2),$$ whose solution is the Catalan number $$P(n) = C_{n-1} = \\frac{1}{n}\\binom{2n-2}{n-1} = \\Omega(2^n)$$ (indeed $\\Theta(4^n / n^{3/2})$).",
        detail: "The recurrence splits on the position $k$ of the outermost, final multiplication: the left $k$ matrices and the right $n-k$ matrices are parenthesized independently, and their counts multiply.",
      },
      {
        term: "Optimal substructure of matrix chains",
        kind: "theorem",
        statement: "If an optimal parenthesization of $A_i \\cdots A_j$ splits between $A_k$ and $A_{k+1}$, then the parenthesization used inside for the subchain $A_i \\cdots A_k$ must be an optimal parenthesization of that subchain, and likewise for $A_{k+1} \\cdots A_j$.",
        detail: "Cut-and-paste: swapping in a cheaper grouping for either subchain cuts the total cost by the same amount without affecting the other subchain or the final $p_{i-1} p_k p_j$ multiplication — contradicting optimality. The subchains are independent because they involve disjoint sets of matrices.",
      },
      {
        term: "The $m$ table and diagonal fill order",
        kind: "method",
        statement: "Let $m[i,j]$ be the minimum cost of computing $A_i \\cdots A_j$. Then $$m[i,j] = \\begin{cases} 0 & i = j \\\\ \\min_{i \\le k < j} \\big(m[i,k] + m[k{+}1,j] + p_{i-1}\\, p_k\\, p_j\\big) & i < j \\end{cases}$$ MATRIX-CHAIN-ORDER fills the table by chain length $\\ell = 2, 3, \\dots, n$ — one diagonal at a time — while storing the minimizing split in $s[i,j]$; the run is $\\Theta(n^3)$ time and $\\Theta(n^2)$ space, and PRINT-OPTIMAL-PARENS unwinds $s$ into the parenthesization.",
        detail: "Length order is not a convention but an invariant: $m[i,j]$ consults only strictly shorter chains, so every dependency is filled before it is read.",
      },
      {
        term: "Reconstruction from $s$ table",
        kind: "method",
        statement: "PRINT-OPTIMAL-PARENS($s, i, j$) prints $s[i,j]$'s split: recurse on $(i, s[i,j])$ and $(s[i,j]+1, j)$ with parentheses around each non-singleton. Filling $s$ alongside $m$ costs no extra asymptotics.",
        detail: "Without $s$, recovering the split needs re-scanning $k$ at each level ($O(n)$ per level); with $s$ each split is $O(1)$, so printing is $O(n)$.",
      },
    ],
    examples: [
      {
        title: "Where you put the parentheses matters — by a factor of 10",
        problem: "A chain of three matrices has dimension vector $p = \\langle 10, 100, 5, 50 \\rangle$: $A_1$ is $10 \\times 100$, $A_2$ is $100 \\times 5$, $A_3$ is $5 \\times 50$. Evaluate both parenthesizations and check the $m$-table recurrences.",
        steps: [
          { label: "Option 1", text: "$(A_1 A_2) A_3$: computing $A_1 A_2$ costs $10 \\cdot 100 \\cdot 5 = 5000$ and yields a $10 \\times 5$ matrix; multiplying that by $A_3$ costs $10 \\cdot 5 \\cdot 50 = 2500$. Total $5000 + 2500 = 7500$." },
          { label: "Option 2", text: "$A_1 (A_2 A_3)$: computing $A_2 A_3$ costs $100 \\cdot 5 \\cdot 50 = 25000$ and yields a $100 \\times 50$ matrix; multiplying $A_1$ by it costs $10 \\cdot 100 \\cdot 50 = 50000$. Total $25000 + 50000 = 75000$." },
          { label: "The $m$ table", text: "$m[1,1] = m[2,2] = m[3,3] = 0$; $m[1,2] = 5000$ and $m[2,3] = 25000$ on the length-2 diagonal. Then $m[1,3] = \\min(m[1,1] + m[2,3] + p_0 p_1 p_3,\\; m[1,2] + m[3,3] + p_0 p_2 p_3) = \\min(0 + 25000 + 50000,\\; 5000 + 0 + 2500) = 7500$, with $s[1,3] = 2$." },
          { label: "Scale check", text: "For the book's six-matrix chain $p = \\langle 30, 35, 15, 5, 10, 20, 25 \\rangle$ the same algorithm returns $m[1,6] = 15125$ with $((A_1(A_2 A_3))((A_4 A_5) A_6))$: the left subchain costs $2625 + 5250 = 7875$, the right costs $1000 + 2500 = 3500$, and the final $30 \\times 5$ by $5 \\times 25$ multiplication adds $30 \\cdot 5 \\cdot 25 = 3750$: $7875 + 3500 + 3750 = 15125$." },
        ],
        result: "Same matrices, same product, costs 7500 versus 75000 — a factor of ten from parentheses alone. The recurrence's two candidate splits for $m[1,3]$ are exactly the two possible parenthesizations, and the minimization picks the cheap one.",
      },
      {
        title: "Three matrices, two parenthesizations",
        problem: "Dims $10 \\times 30$, $30 \\times 5$, $5 \\times 60$. Compare $(A_1A_2)A_3$ vs $A_1(A_2A_3)$.",
        steps: [
          { label: "Left", text: "$(A_1A_2)$: $10 \\cdot 30 \\cdot 5 = 1500$; result $10 \\times 5$ times $A_3$: $10 \\cdot 5 \\cdot 60 = 3000$; total $4500$." },
          { label: "Right", text: "$(A_2A_3)$: $30 \\cdot 5 \\cdot 60 = 9000$; $A_1$ times it: $10 \\cdot 30 \\cdot 60 = 18000$; total $27000$." },
          { label: "Ratio", text: "$27000/4500 = 6\\times$: parenthesization changes cost by a factor $6$ on three matrices; on six it can exceed $10\\times$ (section's example)." },
          { label: "DP choice", text: "$m[1,3] = \\min(4500, 27000) = 4500$ with $s[1,3] = 2$: the table records both value and split." },
        ],
        result: "$(A_1A_2)A_3$ costs $4500$ vs $27000$: the DP picks the $6\\times$ cheaper grouping and $s[1,3] = 2$ remembers it.",
      },
    ],
    keyTakeaways: [
      "Matrix multiplication is associative but not cost-free: the parenthesization changes the scalar-multiplication count by orders of magnitude.",
      "Exponential search space, polynomial algorithm: $C_{n-1}$ parenthesizations are explored through $\\Theta(n^2)$ subchains in $\\Theta(n^3)$ time.",
      "The final multiplication always combines an $i..k$ product with a $k{+}1..j$ product at cost $p_{i-1} p_k p_j$ — that term is where the optimal substructure lives.",
    ],
    quiz: [
      {
        q: "How many full parenthesizations does a product of 4 matrices have?",
        options: ["4", "5", "8", "14"],
        answer: 1,
        explanation: "$P(4) = C_3 = 5$: the Catalan numbers $C_0, C_1, C_2, C_3, \\dots$ run $1, 1, 2, 5, 14, 42$, and $P(n) = C_{n-1}$.",
      },
      {
        q: "For $p = \\langle 10, 100, 5, 50 \\rangle$, the total cost of computing $A_1 (A_2 A_3)$ is:",
        options: ["7500", "25000", "75000", "50000"],
        answer: 2,
        explanation: "$A_2 A_3$ costs $100 \\cdot 5 \\cdot 50 = 25000$ and leaves a $100 \\times 50$ matrix; multiplying $A_1$ by it costs $10 \\cdot 100 \\cdot 50 = 50000$, for a total of 75000.",
      },
      {
        q: "When MATRIX-CHAIN-ORDER fills $m[i,j]$, the entries it reads are:",
        options: [
          "strictly shorter chains, computed on earlier diagonals",
          "entries in the same row and column, filled earlier",
          "only the diagonal entries $m[k,k]$",
          "the last row and the last column",
        ],
        answer: 0,
        explanation: "Both $m[i,k]$ and $m[k{+}1,j]$ span strictly fewer matrices than $m[i,j]$, which is why filling by increasing chain length guarantees every dependency is ready.",
      },
      {
        q: "The recurrence charges $p_{i-1} p_k p_j$ for the final multiplication because at that point the two sub-products have shapes:",
        options: [
          "$p_{i-1} \\times p_k$ and $p_k \\times p_j$",
          "$p_i \\times p_k$ and $p_{k+1} \\times p_j$",
          "$p_{i-1} \\times p_{k+1}$ and $p_k \\times p_j$",
          "$p_i \\times p_j$ and $p_k \\times p_k$",
        ],
        answer: 0,
        explanation: "The product $A_i \\cdots A_k$ is always $p_{i-1} \\times p_k$ and $A_{k+1} \\cdots A_j$ is always $p_k \\times p_j$, regardless of how each was internally grouped — so the final multiplication's cost depends only on the split point $k$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 15.3
  {
    sectionId: "clrs-ch15-s3",
    readingTime: 8,
    intro: "Having solved two problems by a shared recipe, the book stops to name the ingredients. Dynamic programming applies when an optimization problem has optimal substructure — optima are built from optima of smaller instances — and overlapping subproblems — the recursion keeps landing on the same small set of instances. This section makes both notions precise, exhibits a famous problem where they fail, and introduces the subproblem graph, the single diagram from which the running time of any DP can be read off.",
    objectives: [
      "State the four-step DP methodology and apply it to new optimization problems",
      "Characterize optimal substructure and overlapping subproblems, and recognize when they fail (longest simple paths)",
      "Use the subproblem graph to predict running time and to compare memoized and bottom-up implementations",
    ],
    concepts: [
      {
        term: "The four steps of dynamic programming",
        kind: "method",
        statement: "1. **Characterize the structure of an optimal solution.** 2. **Recursively define the value of an optimal solution.** 3. **Compute the value bottom up** (or memoized, top down). 4. **Construct an optimal solution from the computed information.**",
        detail: "Steps 1–2 are design, steps 3–4 are implementation. Applied in order, they turn the case studies of rod cutting and matrix chains into reusable muscle memory.",
      },
      {
        term: "Optimal substructure",
        kind: "definition",
        statement: "A problem exhibits **optimal substructure** when an optimal solution contains within it optimal solutions to subproblems, chosen from only polynomially many subproblem instances. The **cut-and-paste technique** proves it: if the contained sub-solution were suboptimal, cutting it out and pasting in a better one would improve the whole — contradicting the optimality of what you started with.",
        detail: "Ask two design questions: how many subproblems does an optimal solution use, and how many choices determine which subproblems those are? The product of the answers drives the running time.",
      },
      {
        term: "Overlapping subproblems",
        kind: "definition",
        statement: "A recursive algorithm has **overlapping subproblems** when the recursion solves the same subproblems over and over — the number of *distinct* subproblems is polynomially small even though the recursion tree is exponentially large.",
        detail: "Rod cutting with $n = 10$: 1024 naive calls, but only 11 distinct lengths. Memoization or bottom-up order collapses the tree onto its distinct subproblems. Divide-and-conquer algorithms like merge sort lack this property — their subproblems essentially never overlap — which is exactly why they are not dynamic programs.",
      },
      {
        term: "The subproblem graph",
        kind: "definition",
        statement: "Build a directed graph whose vertices are the distinct subproblems, with an edge from a subproblem to each subproblem it consults. The result is a DAG: **memoization is a depth-first search of it, bottom-up evaluation fills it in reverse topological order**, and the running time of either is proportional to the number of vertices plus edges (subproblems plus choices), assuming constant work per edge.",
        detail: "Rod cutting: $\\Theta(n)$ vertices and $\\Theta(n^2)$ edges, giving $\\Theta(n^2)$; the matrix chain: $\\Theta(n^2)$ vertices and $\\Theta(n^3)$ edges, giving $\\Theta(n^3)$. The LCS table of the next section is literally the subproblem graph drawn as a grid.",
      },
      {
        term: "Longest simple path has no optimal substructure",
        kind: "insight",
        statement: "Longest simple paths defeat DP: optimal $u \\leadsto v$ paths need not contain optimal $u \\leadsto w$ subpaths, because the subpath optimum may reuse vertices the full path needs elsewhere. Independence of subproblems fails even though subproblems overlap.",
        detail: "Contrast shortest paths (independent: subpaths of shortest paths are shortest) and LCS (prefix optima compose). Optimal substructure needs both optimal-subproblem composition and independence; longest simple path lacks the second.",
      },
    ],
    examples: [
      {
        title: "Counting the waste: $2^n$ calls for $n + 1$ subproblems",
        problem: "Quantify how badly the naive rod-cutting recursion overlaps, then do the same accounting for a six-matrix chain.",
        steps: [
          { label: "A recurrence for the call count", text: "Every call to CUT-ROD with a positive argument spawns one sub-call for each remainder $n - i$, so with $T(0) = 1$: $T(n) = 1 + \\sum_{j=0}^{n-1} T(j)$." },
          { label: "Unroll", text: "$T(1) = 2$, $T(2) = 4$, $T(3) = 8$, $T(4) = 16$ — exactly $T(n) = 2^n$. For $n = 10$ that is 1024 calls, all to answer a question about 11 possible rod lengths." },
          { label: "What the table methods do", text: "BOTTOM-UP-CUT-ROD and MEMOIZED-CUT-ROD each solve every length exactly once: 5 subproblems for $n = 4$ and 11 for $n = 10$, with at most $n$ first-piece choices examined per subproblem — $\\Theta(n^2)$ total." },
          { label: "Same accounting for the chain", text: "For $n = 6$ matrices there are $P(6) = C_5 = 42$ parenthesizations, but the DP touches only the $\\binom{6}{2} + 6 = 21$ entries $m[i,j]$ with $i \\le j$, and the split-trials total $5 + 8 + 9 + 8 + 5 = 35$ — not 42 whole trees." },
        ],
        result: "Overlapping subproblems shrink an exponential tree to a polynomial DAG: $16 \\to 5$ calls, $1024 \\to 11$, $42 \\to 21$. That collapse — not the recurrences themselves — is what the words dynamic programming buy you.",
      },
      {
        title: "Memoized FIB versus rod cutting",
        problem: "Compare subproblem graphs: FIB($5$) naive versus rod-cutting $n = 4$ memoized. Count distinct subproblems.",
        steps: [
          { label: "FIB naive", text: "Calls: $F_5 \\to F_4,F_3$; $F_4 \\to F_3,F_2$; $\\ldots$: $2^5$ leaves but only $6$ distinct $F_0..F_5$: massive overlap, tiny graph." },
          { label: "Rod $n=4$", text: "Subproblems $r_0..r_4$: $5$ nodes; naive recursion tries $2^{n-1} = 8$ cut patterns for $5$ nodes: same overlap shape." },
          { label: "Time rule", text: "DP time $=$ vertices $\\times$ cost per vertex: FIB $\\Theta(n)$, rod $\\Theta(n^2)$ ($n$ choices per $r_j$). Graph size predicts time." },
          { label: "Bottom-up order", text: "Topological order $0..n$ fills parents after children: memoization discovers it lazily, bottom-up walks it explicitly." },
        ],
        result: "Both have $\\Theta(n)$ distinct subproblems under exponential call trees; overlapping subproblems are what make memoization pay.",
      },
    ],
    keyTakeaways: [
      "The four steps — structure, recurrence, bottom-up value, reconstruction — are a checklist that transfers to any optimization problem you can decompose.",
      "Optimal substructure is proved by cut-and-paste; it fails when sub-solutions share resources, as in the longest simple path problem.",
      "The subproblem graph is the master diagram: its vertices and edges count the work of both the memoized and the bottom-up version.",
    ],
    quiz: [
      {
        q: "Which property disqualifies the longest simple path problem from the DP framework?",
        options: [
          "its subproblems share resources (vertices), so pasting optimal pieces together can break simplicity",
          "its recursion tree is too shallow to benefit from memoization",
          "it has no polynomial-time solution for a single instance",
          "it would require memoizing edges rather than vertices",
        ],
        answer: 0,
        explanation: "Even if each piece were solved optimally, concatenating a best prefix and a best suffix can repeat a vertex, destroying the simple-path constraint — the paste step itself is illegal.",
      },
      {
        q: "In the subproblem graph, the running time of a DP (memoized or bottom-up) is proportional to:",
        options: ["the number of vertices only", "the number of edges only", "the number of vertices plus edges", "the depth of the graph times its width"],
        answer: 2,
        explanation: "Each vertex is solved once and each edge (choice) is examined a constant number of times, so $\\Theta(|V| + |E|)$ — for example $\\Theta(n^2)$ for rod cutting and $\\Theta(n^3)$ for matrix chains.",
      },
      {
        q: "In the four-step methodology, the step that immediately follows 'recursively define the value of an optimal solution' is:",
        options: [
          "characterize the structure of an optimal solution",
          "compute the value of an optimal solution, bottom-up or memoized",
          "construct an optimal solution from the computed information",
          "prove the recurrence correct by induction on the subproblem order",
        ],
        answer: 1,
        explanation: "Order: characterize the structure, define the value recursively, compute the value bottom-up (with memoization as an alternative), then construct an optimal solution from the stored choices.",
      },
      {
        q: "Memoized versus bottom-up rod cutting — which statement is true?",
        options: [
          "memoization is asymptotically faster on every instance",
          "bottom-up may compute subproblems that are never needed, while memoization computes only reachable ones",
          "memoization requires the subproblem graph to be a tree",
          "bottom-up cannot be used when reconstruction is required",
        ],
        answer: 1,
        explanation: "Both share the same worst-case $\\Theta(n^2)$; memoization does a DFS that visits only reachable subproblems, bottom-up sweeps a topological order of all of them. Both can record choices for reconstruction.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "Optimal substructure made precise — and where it dies",
        blocks: [
          {
            kind: "para",
            body: "The phrase 'an optimal solution contains optimal solutions to subproblems' does more work than it appears to, and deserves a precise statement. Say an optimization problem has a **decomposition** if every solution to an instance $x$ can be written as a choice $c$ from a finite set $C(x)$ together with solutions to induced subinstances $x_1(c), \\dots, x_k(c)$, its value being $\\mathrm{val}(c, s_1, \\dots, s_k)$ for a function **monotone in each $s_i$** (for a minimization problem, flip signs; nothing else changes). The problem has **optimal substructure** when for every optimal solution $(c, S_1, \\dots, S_k)$, each $S_i$ is an optimal solution to its subinstance. Dynamic programming is the exploitation of this property precisely when the decomposition generates only polynomially many distinct subinstances — the overlapping-subproblems condition, which is a statement about the instance space, not about any particular solution.",
          },
          {
            kind: "theorem",
            heading: "Cut-and-paste (exchange argument)",
            body: "Under a decomposition with monotone value, every optimal solution uses optimal sub-solutions. If some $S_i$ were suboptimal for $x_i(c)$, replacing it with a strictly better $S_i^{*}$ would change the total in the improving direction by monotonicity, contradicting the optimality of the whole — so each $S_i$ must already be optimal. The name comes from the mental image: cut out the offending piece, paste in the better one, and stare at the contradiction.",
          },
          {
            kind: "proof",
            heading: "What the one-line proof silently requires",
            body: "Two hypotheses hide in the sketch, and each is a genuine failure point. **(1) Feasibility of the paste.** Replacing $S_i$ by $S_i^{*}$ must leave a legal solution of $x$. In rod cutting, matrix chains, LCS and optimal BSTs this is immediate, because the sub-solutions occupy disjoint parts of the solution — different rod remainders, disjoint subchains, prefixes of $X$ versus prefixes of $Y$, disjoint subtrees. It fails for the longest simple path: a better prefix may use vertices the suffix also needs, and the concatenation repeats a vertex — the paste destroys feasibility rather than merely improving cost. **(2) Monotone separation.** The value must decompose so that swapping $S_i$ for $S_i^{*}$ moves the total by exactly the amount it moves the piece, with no side effects on the rest. The matrix-chain recurrence exhibits the ideal form, $m[i,k] + m[k{+}1,j] + p_{i-1}\\,p_k\\,p_j$: the coupling term depends only on the split point $k$, never on the internal groupings. Whenever a hidden coupling exists — say cache or communication costs between the two halves — the textbook recurrence is simply the wrong model of the machine.",
          },
          {
            kind: "example",
            heading: "The standard counterexample: longest simple paths",
            body: "Take the undirected 4-cycle on $\\{q, r, s, t\\}$ with edges $\\{q,r\\}, \\{q,s\\}, \\{r,t\\}, \\{s,t\\}$. Both longest simple paths from $q$ to $t$ — $q, r, t$ and $q, s, t$ — have length 2. Look at the prefix $q, r$ of the first: its length is 1, yet the longest simple path from $q$ to $r$ is $q, s, t, r$ of length 3. So **the prefix of a longest path is not a longest path** — the projection onto the subinstance is not optimal, and cut-and-paste cannot even get started. Worse, the subinstances 'longest $q \\to r$ path' and 'longest $r \\to t$ path' share the very resource the constraint protects — vertices — so their optima cannot be pasted together at all. Contrast shortest paths, where subpaths of shortest paths are shortest (cut-and-paste succeeds: a shorter subpath would shorten the whole). That is exactly why shortest-path DPs — Dijkstra, Bellman–Ford, Floyd–Warshall — exist, while longest simple paths are NP-hard on general graphs and fall to DP only on DAGs, where the vertex order itself forbids the concatenation from repeating anything.",
          },
          {
            kind: "remark",
            heading: "From structure to running time: the subproblem graph calculus",
            body: "Once optimal substructure holds, the running time of both DP styles reads straight off the decomposition: roughly **(number of distinct subproblems) × (choices per subproblem) × (work per choice)**. Rod cutting: $n$ subproblems, at most $n$ choices, $O(1)$ each — $\\Theta(n^2)$. Matrix chain: $\\Theta(n^2)$ subchains, at most $n - 1$ splits — $\\Theta(n^3)$. LCS: $mn$ prefix pairs, two candidates — $\\Theta(mn)$. Optimal BST: $\\Theta(n^2)$ subtrees, up to $n$ roots — $\\Theta(n^3)$, which Knuth's monotone-root restriction sharpens to $\\Theta(n^2)$ by cutting the *choices*, not the subproblems. The subproblem graph makes all of this exact: memoization is a DFS that touches exactly the reachable vertices and pays once per edge; the bottom-up sweep is a topological order that touches them all; both cost $\\Theta(|V| + |E|)$ when a subproblem's work is proportional to its out-degree. Memoization wins when many subproblems are unreachable; bottom-up wins on constant factors, memory locality, and the absence of recursion-depth limits.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- 15.4
  {
    sectionId: "clrs-ch15-s4",
    readingTime: 7,
    intro: "Given two symbol strings — two DNA strands, two source files, two revisions of a document — the longest common subsequence is the longest sequence that appears in both with order preserved but not necessarily contiguously. It is the model problem for diff tools and sequence alignment. The DP is a two-dimensional table $c[i,j]$ over prefixes, and its most distinctive feature is the arrow field $b[i,j]$, which turns the final cell into a machine for printing an actual LCS backwards.",
    objectives: [
      "State the prefix-decomposition theorem (Theorem 15.1) that justifies the LCS recurrence",
      "Fill the $c$ and $b$ tables for two concrete strings and trace an LCS backwards through the arrows",
      "Analyze the $\\Theta(mn)$ time and space, and reduce space when only the length is needed",
    ],
    concepts: [
      {
        term: "Subsequences and the LCS problem",
        kind: "definition",
        statement: "A **subsequence** of $X = \\langle x_1, \\dots, x_m \\rangle$ is any sequence obtained by deleting zero or more symbols, preserving the order of the rest. $Z$ is a **common subsequence** of $X$ and $Y$ if it is a subsequence of both; the **longest common subsequence problem** asks for one of maximum length.",
        detail: "Do not confuse subsequences with substrings, which must occupy consecutive positions: $\\langle B, D, A \\rangle$ is a subsequence of $\\langle A, B, C, B, D, A, B \\rangle$ but not a substring of it.",
      },
      {
        term: "Theorem 15.1 — optimal substructure of the LCS",
        kind: "theorem",
        statement: "Let $Z = \\langle z_1, \\dots, z_k \\rangle$ be any LCS of $X_m$ and $Y_n$. **(a)** If $x_m = y_n$, then $z_k = x_m = y_n$ and $Z_{k-1}$ is an LCS of $X_{m-1}$ and $Y_{n-1}$. **(b)** If $x_m \\ne y_n$ and $z_k \\ne x_m$, then $Z$ is an LCS of $X_{m-1}$ and $Y_n$. **(c)** If $x_m \\ne y_n$ and $z_k \\ne y_n$, then $Z$ is an LCS of $X_m$ and $Y_{n-1}$.",
        detail: "The three cases are exhaustive: whatever the last symbols do, an LCS is an LCS of one of the three smaller prefix pairs. No guessing about which symbols an optimal answer keeps — the structure theorem settles it.",
      },
      {
        term: "The $c$ and $b$ recurrences",
        kind: "method",
        statement: "$$c[i,j] = \\begin{cases} 0 & i = 0 \\text{ or } j = 0 \\\\ c[i-1, j-1] + 1 & x_i = y_j \\\\ \\max(c[i-1, j],\\; c[i, j-1]) & x_i \\ne y_j \\end{cases}$$ LCS-LENGTH fills row by row in $\\Theta(mn)$ time and $\\Theta(mn)$ space, recording in $b[i,j]$ which case fired; PRINT-LCS then follows the arrows from $b[m,n]$ back to the first row, emitting a symbol at every diagonal step.",
        detail: "The code's tie-break — take the left entry when $c[i, j-1] \\ge c[i-1, j]$ — decides *which* LCS is printed, but never its length.",
      },
      {
        term: "Space and the length-only variant",
        kind: "insight",
        statement: "Row $i$ of the $c$ table depends only on row $i-1$, so **computing the length of an LCS needs just two rows — $\\Theta(\\min(m,n))$ space** if you always iterate over the shorter string. Recovering a specific LCS needs the arrows: either keep the full $b$ table, or recompute subproblems on demand in linear space at a constant-factor time cost.",
        detail: "This is the classic practical trade-off of the LCS world: the length is cheap; the witness is what costs memory.",
      },
      {
        term: "All LCSs versus one LCS",
        kind: "insight",
        statement: "The $b$ arrows encode all LCSs: ties ($c[i-1,j] = c[i,j-1]$) branch, so the table holds exponentially many distinct LCSs in the worst case. PRINT-LCS follows one arbitrary branch ($\\uparrow$ on ties); enumerating all needs exponential time.",
        detail: "Length $c[m,n]$ is unique; the sequence is not. Diff tools break ties toward deletions or insertions to match user expectations, not mathematics.",
      },
    ],
    figures: [
      {
        caption: "The $c$ table produced by LCS-LENGTH for $X = \\langle A, B, C, B, D, A, B \\rangle$ and $Y = \\langle B, D, C, A, B, A \\rangle$. Each cell shows its value and the arrow recorded in $b$: ↖ means $x_i = y_j$ (emit the symbol), ← and ↑ come from the max branch. The shaded cells trace the backtrace from $c[7,6] = 4$, emitting $B, A, D, B$ — read in reverse, the LCS $\\langle B, D, A, B \\rangle$.",
        svg: '<svg viewBox="0 0 480 418" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LCS dynamic programming table with backtrace arrows"><text x="88" y="38" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">Y</text><g font-size="13" font-weight="700" text-anchor="middle" fill="currentColor"><text x="144" y="38">B</text><text x="200" y="38">D</text><text x="256" y="38">C</text><text x="312" y="38">A</text><text x="368" y="38">B</text><text x="424" y="38">A</text></g><g font-size="9" text-anchor="middle" fill="currentColor" opacity="0.6"><text x="88" y="53">0</text><text x="144" y="53">1</text><text x="200" y="53">2</text><text x="256" y="53">3</text><text x="312" y="53">4</text><text x="368" y="53">5</text><text x="424" y="53">6</text></g><text x="50" y="38" font-size="13" font-weight="700" text-anchor="end" fill="currentColor">X</text><g font-size="9" text-anchor="middle" fill="currentColor" opacity="0.6"><text x="30" y="84">0</text><text x="30" y="124">1</text><text x="30" y="164">2</text><text x="30" y="204">3</text><text x="30" y="244">4</text><text x="30" y="284">5</text><text x="30" y="324">6</text><text x="30" y="364">7</text></g><g font-size="13" font-weight="700" text-anchor="end" fill="currentColor"><text x="50" y="124">A</text><text x="50" y="164">B</text><text x="50" y="204">C</text><text x="50" y="244">B</text><text x="50" y="284">D</text><text x="50" y="324">A</text><text x="50" y="364">B</text></g><g fill="currentColor"><rect x="396" y="340" width="56" height="40" opacity="0.12"/><rect x="340" y="340" width="56" height="40" opacity="0.12"/><rect x="284" y="300" width="56" height="40" opacity="0.12"/><rect x="228" y="260" width="56" height="40" opacity="0.12"/><rect x="172" y="260" width="56" height="40" opacity="0.12"/><rect x="116" y="220" width="56" height="40" opacity="0.12"/><rect x="340" y="340" width="56" height="40" opacity="0.24"/><rect x="284" y="300" width="56" height="40" opacity="0.24"/><rect x="172" y="260" width="56" height="40" opacity="0.24"/><rect x="116" y="220" width="56" height="40" opacity="0.24"/></g><path d="M 60 60 V 380 M 116 60 V 380 M 172 60 V 380 M 228 60 V 380 M 284 60 V 380 M 340 60 V 380 M 396 60 V 380 M 452 60 V 380 M 60 60 H 452 M 60 100 H 452 M 60 140 H 452 M 60 180 H 452 M 60 220 H 452 M 60 260 H 452 M 60 300 H 452 M 60 340 H 452 M 60 380 H 452" stroke="currentColor" stroke-width="1" opacity="0.35" fill="none"/><g font-size="13" text-anchor="middle" fill="currentColor"><text x="88" y="84">0</text><text x="144" y="84">0</text><text x="200" y="84">0</text><text x="256" y="84">0</text><text x="312" y="84">0</text><text x="368" y="84">0</text><text x="424" y="84">0</text><text x="88" y="124">0</text><text x="144" y="124">0</text><text x="200" y="124">0</text><text x="256" y="124">0</text><text x="312" y="124">1 ↖</text><text x="368" y="124">1 ←</text><text x="424" y="124">1 ↖</text><text x="88" y="164">0</text><text x="144" y="164">1 ↖</text><text x="200" y="164">1 ←</text><text x="256" y="164">1 ←</text><text x="312" y="164">1 ←</text><text x="368" y="164">2 ↖</text><text x="424" y="164">2 ←</text><text x="88" y="204">0</text><text x="144" y="204">1 ↑</text><text x="200" y="204">1 ←</text><text x="256" y="204">2 ↖</text><text x="312" y="204">2 ←</text><text x="368" y="204">2 ←</text><text x="424" y="204">2 ←</text><text x="88" y="244">0</text><text x="144" y="244">1 ↖</text><text x="200" y="244">1 ←</text><text x="256" y="244">2 ↑</text><text x="312" y="244">2 ←</text><text x="368" y="244">3 ↖</text><text x="424" y="244">3 ←</text><text x="88" y="284">0</text><text x="144" y="284">1 ↑</text><text x="200" y="284">2 ↖</text><text x="256" y="284">2 ←</text><text x="312" y="284">2 ←</text><text x="368" y="284">3 ↑</text><text x="424" y="284">3 ←</text><text x="88" y="324">0</text><text x="144" y="324">1 ↑</text><text x="200" y="324">2 ↑</text><text x="256" y="324">2 ←</text><text x="312" y="324">3 ↖</text><text x="368" y="324">3 ←</text><text x="424" y="324">4 ↖</text><text x="88" y="364">0</text><text x="144" y="364">1 ↖</text><text x="200" y="364">2 ↑</text><text x="256" y="364">2 ←</text><text x="312" y="364">3 ↑</text><text x="368" y="364">4 ↖</text><text x="424" y="364">4 ←</text></g><g font-size="11" fill="currentColor" opacity="0.85"><text x="8" y="400">↖ = match (x[i] = y[j]) · ← = from c[i, j-1] · ↑ = from c[i-1, j]</text><text x="8" y="416">Shaded cells trace one optimal backtrace, emitting B, D, A, B — an LCS of length 4.</text></g></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "LCS of ⟨A,B,C,B,D,A,B⟩ and ⟨B,D,C,A,B,A⟩",
        problem: "Run LCS-LENGTH on $X = \\langle A, B, C, B, D, A, B \\rangle$ ($m = 7$) and $Y = \\langle B, D, C, A, B, A \\rangle$ ($n = 6$), then print an LCS from the $b$ table.",
        steps: [
          { label: "Row 1 (x₁ = A)", text: "No match in columns $B, D, C$; at $y_4 = A$, $c[1,4] = c[0,3] + 1 = 1$ (↖), and the value carries right: row 1 is $(0, 0, 0, 1, 1, 1)$." },
          { label: "Row 2 (x₂ = B)", text: "$c[2,1] = c[1,0] + 1 = 1$ (↖ at $y_1 = B$); the 1 carries to $(1,1,1,1)$; at $y_5 = B$, $c[2,5] = c[1,4] + 1 = 2$ (↖); then $c[2,6] = 2$. Row 2: $(1, 1, 1, 1, 2, 2)$." },
          { label: "Rows 3–5", text: "$x_3 = C$: $(1, 1, 2, 2, 2, 2)$ — match ↖ at $j = 3$. $x_4 = B$: $(1, 1, 2, 2, 3, 3)$ — matches at $j = 1$ and $j = 5$, with $c[4,5] = c[3,4] + 1 = 3$. $x_5 = D$: $(1, 2, 2, 2, 3, 3)$ — match ↖ at $j = 2$." },
          { label: "Rows 6–7", text: "$x_6 = A$: $(1, 2, 2, 3, 3, 4)$ — matches at $j = 4$ and $j = 6$, in particular $c[6,6] = c[5,5] + 1 = 4$. $x_7 = B$: $(1, 2, 2, 3, 4, 4)$ — match ↖ at $j = 5$ gives $c[7,5] = c[6,4] + 1 = 4$, and $c[7,6] = \\max(4, 4) = 4$." },
          { label: "Backtrack", text: "From $b[7,6]$: ← to $(7,5)$; there $x_7 = B = y_5$, so emit $B$ and jump to $(6,4)$; there $x_6 = A = y_4$, emit $A$, jump to $(5,3)$; ← to $(5,2)$; there $x_5 = D = y_2$, emit $D$, jump to $(4,1)$; there $x_4 = B = y_1$, emit $B$, jump to $(3,0)$ — column 0, stop. Emission order: $B, A, D, B$." },
        ],
        result: "The LCS length is $c[7,6] = 4$, and reversing the emissions yields $\\langle B, D, A, B \\rangle$. With the opposite tie-break in the mismatch case, the same numbers yield the alternative optimum $\\langle B, C, B, A \\rangle$ — the table's value is unique, the witness is not.",
      },
      {
        title: "Length-only LCS in two rows",
        problem: "Compute LCS length of $X = \\langle A,B,C \\rangle$, $Y = \\langle B,A,C \\rangle$ keeping only two rows of $c$.",
        steps: [
          { label: "Row 0", text: "$c[0,*] = 0$: empty prefix matches nothing." },
          { label: "Row A", text: "Vs $B,A,C$: $0,1,1$: $A$ matches $Y_2$." },
          { label: "Row B", text: "Vs $B,A,C$: $1,1,1$: $B$ matches $Y_1$, ties keep $1$." },
          { label: "Row C", text: "Vs $B,A,C$: $1,1,2$: $C$ matches $Y_3$, length $2$ ($\\langle A,C \\rangle$ or $\\langle B,C \\rangle$). Only prev+curr rows stored: $\\Theta(\\min(m,n))$ space." },
        ],
        result: "Length $2$ with $2 \\times 4$ cells instead of $4 \\times 4$; arrows (and the sequence) need the full table, length does not.",
      },
    ],
    keyTakeaways: [
      "Theorem 15.1 reduces each prefix pair to one smaller pair (on a match) or two competing pairs (on a mismatch), which is precisely the $c[i,j]$ recurrence and its $\\Theta(mn)$ row-by-row fill.",
      "The $b$ table is a recipe: ↖ emits a matching symbol, ← and ↑ just walk; tracing from $(m,n)$ reads an LCS backwards.",
      "The numbers in the table are canonical, but the LCS itself may not be — tie-breaking in the max case selects among optimal witnesses.",
    ],
    quiz: [
      {
        q: "In the $c$ table above, the entry $c[4,5]$ equals:",
        options: ["2", "3", "4", "5"],
        answer: 1,
        explanation: "Row 4 ($x_4 = B$) is $(1,1,2,2,3,3)$: the match $x_4 = y_5 = B$ sets $c[4,5] = c[3,4] + 1 = 2 + 1 = 3$.",
      },
      {
        q: "When $x_i \\ne y_j$, the recurrence sets $c[i,j]$ to:",
        options: ["$c[i-1, j-1] + 1$", "$\\max(c[i-1, j],\\; c[i, j-1])$", "$\\min(c[i-1, j],\\; c[i, j-1])$", "$c[i-1, j-1]$"],
        answer: 1,
        explanation: "By Theorem 15.1(b)–(c), an LCS of the prefixes is the longer of an LCS of $X_{i-1}, Y$ and an LCS of $X, Y_{j-1}$ — those lengths sit in the cell above and the cell to the left.",
      },
      {
        q: "Theorem 15.1(a) states that when $x_m = y_n$:",
        options: [
          "there is an LCS ending in $x_m$, and cutting its last symbol leaves an LCS of $X_{m-1}$ and $Y_{n-1}$",
          "every common subsequence must end in $x_m$",
          "no LCS can end in $x_m$ or in $y_n$",
          "the LCS length is the sum of the two preceding table entries",
        ],
        answer: 0,
        explanation: "The theorem says $z_k = x_m = y_n$ for any LCS $Z$ and $Z_{k-1}$ is an LCS of the shorter prefixes — matching last symbols can always be taken as the final symbol of some optimum.",
      },
      {
        q: "To compute only the *length* of an LCS, the space requirement can be cut to:",
        options: ["$\\Theta(1)$", "$\\Theta(\\min(m, n))$", "$\\Theta(\\max(m, n))$", "$\\Theta(mn)$, always"],
        answer: 1,
        explanation: "Each row of $c$ depends only on the previous row, so two rows suffice — and iterating over the shorter string makes each of them length $\\min(m,n) + 1$.",
      },
      // PYQ-pattern: ISRO 2016 — LCS length (rephrased, values changed)
      {
        q: "For $X = ABCBDAB$ and $Y = BDCABA$, the length of a longest common subsequence is:",
        options: ["2", "3", "4", "5"],
        answer: 2,
        explanation: "Step 1 — Given: $|X| = 7$, $|Y| = 6$. Step 2 — Governing recurrence: $c[i,j] = c[i-1,j-1] + 1$ on match else $\\max(c[i-1,j], c[i,j-1])$, over all prefix pairs. Step 3 — Table result: the filled table ends at $c[7,6] = 4$, witnessed by $BCBA$ (also $BDAB$), while no length-$5$ common subsequence exists by pigeonhole over the six columns. Step 4 — Sanity check: $4 \\le \\min(7, 6)$, arrows trace back through two diagonal matches, and the bound is tight since $BCBA$ attains it. Step 5 — Distractor analysis: $5$ exceeds the shorter string capacity argument here, $3$ stops one match early, and $2$ counts only a prefix. Step 6 — Conclude: length $4$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 15.5
  {
    sectionId: "clrs-ch15-s5",
    readingTime: 7,
    intro: "A binary search tree is judged not by its shape but by how often each key — and each gap between keys — is searched. Optimal BSTs minimize the expected search cost over a known probability distribution, counting both successful searches at internal nodes and unsuccessful searches that fall through to dummy leaves. The result is the chapter's last DP: subtrees over contiguous key ranges, a recurrence whose extra weight term $w(i,j)$ has a beautiful one-line meaning, and a table of roots from which the tree is read directly.",
    objectives: [
      "Write the expected search cost of a BST given hit probabilities $p_i$ and miss probabilities $q_i$",
      "Derive and fill the $e$, $w$ and $root$ tables with OPTIMAL-BST, and reconstruct the tree",
      "Justify the $w(i,j)$ term and state Knuth's monotone-root improvement to $\\Theta(n^2)$",
    ],
    concepts: [
      {
        term: "The optimal BST problem",
        kind: "definition",
        statement: "Given keys $k_1 < k_2 < \\dots < k_n$ with search probabilities $p_1, \\dots, p_n$ (hits) and $q_0, \\dots, q_n$ (misses in the $n+1$ gaps, stored at dummy leaves $d_0, \\dots, d_n$), with $\\sum_i p_i + \\sum_i q_i = 1$, **find the BST minimizing the expected search cost** $$E = \\sum_{i=1}^{n} p_i\\,(\\mathrm{depth}(k_i) + 1) + \\sum_{i=0}^{n} q_i\\,(\\mathrm{depth}(d_i) + 1),$$ where the root has depth 0.",
        detail: "Misses matter as much as hits: a failed search for a key between $k_i$ and $k_{i+1}$ ends at the dummy leaf $d_i$, and its probability $q_i$ is charged at that leaf's depth. Since comparisons dominate search time, cost is counted as the number of nodes examined.",
      },
      {
        term: "The $e$, $w$ and $root$ recurrences",
        kind: "method",
        statement: "For $1 \\le i \\le j \\le n$ define the weight of a key range and the optimal cost $$w(i,j) = \\sum_{l=i}^{j} p_l + \\sum_{l=i-1}^{j} q_l, \\qquad e[i,j] = \\min_{i \\le r \\le j} \\big( e[i, r-1] + e[r+1, j] + w(i,j) \\big),$$ with the empty-tree base case $e[i, i-1] = q_{i-1}$ and $root[i,j]$ the minimizing $r$. OPTIMAL-BST fills by increasing chain length in $\\Theta(n^3)$ time and $\\Theta(n^2)$ space, and the tree is grown top-down from $root[1, n]$.",
        detail: "The base case is where misses enter: a tree with no keys consists of a single dummy leaf $d_{i-1}$, so its entire expected cost is that leaf's probability $q_{i-1}$.",
      },
      {
        term: "Why $w(i,j)$ appears: moving down a level",
        kind: "insight",
        statement: "When the optimal left and right subtrees are hung beneath a new root $r$, **every node in them moves one level deeper, adding exactly 1 to each of its search costs**. The total surcharge is therefore the probability mass of the entire range — $w(i,j)$ — and the recurrence simply charges that rent at the split where the subtrees attach.",
        detail: "This is the chapter's quiet algebraic move: a subtree's cost relative to its own root plus the mass above it telescopes into its cost relative to any ancestor — the same bookkeeping that makes prefix sums work.",
      },
      {
        term: "Knuth's root monotonicity",
        kind: "insight",
        statement: "The optimal root satisfies $root[i, j-1] \\le root[i,j] \\le root[i+1, j]$: as a key range grows, its optimal root can only slide rightward. Restricting the trial roots for $[i,j]$ to the interval between the roots of the two smaller ranges — Knuth's 1971 observation — preserves optimality and drops the total work to $\\Theta(n^2)$.",
        detail: "The book's OPTIMAL-BST scans all $j - i + 1$ candidates; the monotonicity cuts the *choices* per subproblem from $\\Theta(n)$ to an amortized constant — the same quadrangle-inequality phenomenon that speeds up several other DPs.",
      },
      {
        term: "Dummy keys $d_0..d_n$",
        kind: "definition",
        statement: "Dummy key $d_i$ represents all unsuccessful searches falling between $k_i$ and $k_{i+1}$ (with $d_0$ below $k_1$, $d_n$ above $k_n$), searched with probability $q_i$. A subtree over $k_{i+1}..k_j$ holds dummies $d_i..d_j$, so $w(i,j) = \\sum_{l=i+1}^{j} p_l + \\sum_{l=i}^{j} q_l$.",
        detail: "Without dummies the cost model ignores misses; with them $e[i,j]$ counts both hits (depth+1 times $p$) and misses (depth times $q$), which is why $w$ appears in the recurrence.",
      },
    ],
    examples: [
      {
        title: "The five-key dictionary from the text",
        problem: "Keys $k_1 < \\dots < k_5$ have hit probabilities $p = (0.15, 0.10, 0.05, 0.10, 0.20)$ and miss probabilities $q = (0.05, 0.10, 0.05, 0.05, 0.05, 0.10)$, with $\\sum p + \\sum q = 0.60 + 0.40 = 1$. Fill the tables and read off the optimal tree.",
        steps: [
          { label: "Length 1", text: "A single key $k_i$ carries both its gaps down one level, so $e[i,i] = p_i + 2q_{i-1} + 2q_i$: $e[1,1] = 0.15 + 0.10 + 0.20 = 0.45$, $e[2,2] = 0.40$, $e[3,3] = 0.25$, $e[4,4] = 0.30$, $e[5,5] = 0.50$." },
          { label: "Length 2", text: "With $w(1,2) = p_1 + p_2 + q_0 + q_1 + q_2 = 0.45$: $e[1,2] = \\min(q_0 + e[2,2],\\; e[1,1] + q_2) + w(1,2) = \\min(0.45, 0.50) + 0.45 = 0.90$, root $k_1$. Likewise $e[2,3] = 0.70$ (root $k_2$), $e[3,4] = 0.60$ (root $k_4$), $e[4,5] = 0.90$ (root $k_5$)." },
          { label: "Lengths 3–4", text: "$e[1,3] = 1.25$ (root $k_2$: $e[1,1] + e[3,3] + w(1,3) = 0.45 + 0.25 + 0.55$), $e[2,4] = 1.20$ (root $k_2$, tying $k_3$), $e[3,5] = 1.30$ (root $k_5$: $e[3,4] + q_5 + w(3,5) = 0.60 + 0.10 + 0.60$); then $e[1,4] = 1.75$ (root $k_2$) and $e[2,5] = 2.00$ (root $k_4$)." },
          { label: "Length 5 — the answer", text: "$w(1,5) = 1.00$ and the trial roots give $r{=}1$: $0.05 + 2.00 + 1.00 = 3.05$; $r{=}2$: $0.45 + 1.30 + 1.00 = 2.75$; $r{=}3$: $0.90 + 0.90 + 1.00 = 2.80$; $r{=}4$: $1.25 + 0.50 + 1.00 = 2.75$; $r{=}5$: $1.75 + 0.10 + 1.00 = 2.85$. So $e[1,5] = 2.75$, and the scan keeps the smallest minimizing root: $root[1,5] = k_2$." },
          { label: "Read the tree", text: "Root $k_2$; its left child is $root[1,1] = k_1$; its right child is $root[3,5] = k_5$, whose left child is $root[3,4] = k_4$, whose left child is $k_3$. Dummies fill the gaps: $d_0, d_1$ under $k_1$; $d_2, d_3$ under $k_3$; $d_4$ as $k_4$'s right child; $d_5$ as $k_5$'s right child." },
          { label: "Verify from depths", text: "Internal: $2(0.15) + 1(0.10) + 4(0.05) + 3(0.10) + 2(0.20) = 0.30 + 0.10 + 0.20 + 0.30 + 0.40 = 1.30$. External: $3(0.05) + 3(0.10) + 5(0.05) + 5(0.05) + 4(0.05) + 3(0.10) = 0.15 + 0.30 + 0.25 + 0.25 + 0.20 + 0.30 = 1.45$. Total $1.30 + 1.45 = 2.75$." },
        ],
        result: "The optimal BST has expected cost $e[1,5] = 2.75$, rooted at $k_2$ with a right-leaning structure $k_2$, right child $k_5$, then $k_4$ and $k_3$ descending to the left. Note the greedy trap: the most probable key, $k_5$ with $p_5 = 0.20$, does not sit at the root.",
      },
      {
        title: "Two keys, three dummies",
        problem: "Keys $k_1,k_2$ with $p_1 = 0.3, p_2 = 0.4$, $q_0 = q_1 = q_2 = 0.1$. Compare root $k_1$ vs $k_2$.",
        steps: [
          { label: "Weights", text: "$w(0,2) = 0.3+0.4+0.3 = 1.0$: every search lands somewhere, as probabilities must sum to $1$." },
          { label: "Root $k_1$", text: "Left: $d_0$ at depth $1$: $0.1$. Right subtree over $k_2$ with $d_1,d_2$: $e = w + p_2 + 2q$? Compute $e = 0.1 + (0.4+0.1+0.1+1.0?) $: systematically $e = 1.0 + e_{left} + e_{right} = 1.0 + 0.1 + (0.4+0.2) = 1.7$." },
          { label: "Root $k_2$", text: "Symmetric: $e = 1.0 + (0.3+0.2) + 0.1 = 1.6$: root $k_2$ (higher $p$) wins by $0.1$." },
          { label: "Read $root$", text: "$root[0,2] = 2$: higher-probability key nearer the root, the BST analogue of Huffman greed (but DP-optimal, not greedy)." },
        ],
        result: "Root $k_2$ costs $1.6$ vs $1.7$: $root[0,2] = 2$; dummies contribute $0.3$ of every candidate's cost through $w$.",
      },
    ],
    keyTakeaways: [
      "Optimal BST is a DP over contiguous key ranges: $e[i,j]$ minimizes over roots $r$, and the tree is reconstructed top-down from the $root$ table.",
      "The weight term has a meaning, not just a form: hanging a subtree one level deeper adds 1 to each search in it, totalling its probability mass $w(i,j)$.",
      "Greedy fails — the highest-probability key need not be the root — and Knuth's monotone-root restriction improves the $\\Theta(n^3)$ algorithm to $\\Theta(n^2)$.",
    ],
    quiz: [
      {
        q: "The base case of OPTIMAL-BST is:",
        options: ["$e[i,i] = p_i$", "$e[i, i-1] = q_{i-1}$", "$e[i,i] = 1$", "$e[1,n] = 1$"],
        answer: 1,
        explanation: "A range with no keys is a single dummy leaf $d_{i-1}$; searching it always costs one comparison, so its expected cost is exactly the miss probability $q_{i-1}$.",
      },
      {
        q: "The recurrence adds $w(i,j)$ (not $w$ of the subranges) because:",
        options: [
          "it is the cost of comparing against the root",
          "attaching the subtrees one level deeper adds 1 to the cost of every search inside them, totalling their probability mass",
          "it renormalizes the probabilities to sum to 1",
          "it accounts only for the miss probability at the root itself",
        ],
        answer: 1,
        explanation: "Whether a search in the subtree hits a key or a dummy, it passes through the new root, so each of the range's probabilities — keys and gaps alike — is charged once more. That sum is $w(i,j)$.",
      },
      {
        q: "For the five-key example in the text, the expected cost of the optimal BST is:",
        options: ["2.55", "2.70", "2.75", "2.85"],
        answer: 2,
        explanation: "$e[1,5] = 2.75$, achieved by rooting the tree at $k_2$: $e[1,1] + e[3,5] + w(1,5) = 0.45 + 1.30 + 1.00$. The depth check confirms it: 1.30 internal + 1.45 external.",
      },
      {
        q: "Knuth's monotone-root restriction changes the running time of the optimal-BST DP from $\\Theta(n^3)$ to:",
        options: ["$\\Theta(n^2)$", "$\\Theta(n \\lg n)$", "$\\Theta(n)$", "$\\Theta(n^2 \\lg n)$"],
        answer: 0,
        explanation: "Because $root[i, j-1] \\le root[i,j] \\le root[i+1, j]$, the total interval of trial roots across all ranges telescopes to $O(n^2)$, even though a single range may still scan many candidates.",
      },
    ],
  },
]
