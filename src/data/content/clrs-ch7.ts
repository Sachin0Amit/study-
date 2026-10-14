import type { SectionContent } from "../library"

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Chapter 7: Quicksort (Sections 7.1 – 7.4)
// ============================================================================

export const clrsCh7Content: SectionContent[] = [
  // ---------------------------------------------------------------- 7.1
  {
    sectionId: "clrs-ch7-s1",
    readingTime: 7,
    intro: "Quicksort inverts mergesort's division of labor: all the work happens in the *divide* step, and the *combine* step does nothing. The PARTITION procedure sweeps the subarray once, groups elements around a pivot value, and drops the pivot into its final sorted position — everything else is two recursive calls on whatever remains.",
    objectives: [
      "State the quicksort recurrence structure and the PARTITION procedure line by line",
      "Prove PARTITION's loop invariant and explain why the pivot lands in its final position",
      "Trace a complete partition on real numbers, region by region",
    ],
    concepts: [
      {
        term: "Quicksort's divide-and-conquer skeleton",
        kind: "method",
        statement: "**`QUICKSORT(A, p, r)`**: if $p < r$, then $q = \\text{PARTITION}(A, p, r)$, followed by `QUICKSORT(A, p, q-1)` and `QUICKSORT(A, q+1, r)` — with **no combine step at all**.",
        detail: "Contrast mergesort: there, dividing is trivial and all work is in the $\\Theta(n)$ merge; here the partition does the sorting work and the recursive calls merely finish. The initial call is `QUICKSORT(A, 1, n)`. Both pivots of the two recursions are disjoint from the pivot position $q$.",
      },
      {
        term: "The PARTITION procedure",
        kind: "method",
        statement: "**`PARTITION(A, p, r)`** chooses the pivot $x = A[r]$, maintains $i = p - 1$, and for $j = p \\ldots r-1$: whenever $A[j] \\le x$, increments $i$ and swaps $A[i] \\leftrightarrow A[j]$. Finally it swaps $A[i+1] \\leftrightarrow A[r]$ and returns $i+1$.",
        detail: "The scan does exactly one comparison per element — $r - p$ comparisons total — plus $O(1)$ bookkeeping, so a partition of an $n$-element subarray costs $\\Theta(n)$ and $\\Theta(n)$ swaps in the worst case, all inside the input array (no auxiliary storage). The pivot is simply the last element here; Section 7.3 randomizes this choice.",
      },
      {
        term: "PARTITION's loop invariant",
        kind: "theorem",
        statement: "At the start of each iteration $j$, the subarray satisfies three regions: **$A[p \\ldots i] \\le x$**, **$A[i+1 \\ldots j-1] > x$**, and **$A[j \\ldots r-1]$ unexamined**, with $A[r] = x$ untouched.",
        detail: "Initialization holds vacuously ($i = p-1$, $j = p$); maintenance moves $A[j]$ into the correct region by the conditional swap; at termination $j = r$ the array is split into $\\le x$ then $> x$. The final swap places $x$ **between** the regions: every element of the left region is $\\le x$ and every element of the right region is $> x$, so $A[q]$ equals its rank — the pivot is in its final sorted position forever.",
      },
      {
        term: "What the pivot buys",
        kind: "insight",
        statement: "Each partition permanently fixes **one** element — the pivot — into its sorted position, and hands back two strictly smaller subproblems whose sizes sum to $n-1$.",
        detail: "The split can be anything from $0 / n-1$ (disaster, Section 7.2) to $\\lfloor (n-1)/2 \\rfloor / \\lceil (n-1)/2 \\rceil$ (ideal). Quicksort's quality is entirely hostage to pivot luck — which is why Section 7.3 randomizes and Section 7.4 analyzes the average.",
      },
      {
        term: "Lomuto versus Hoare partitioning",
        kind: "insight",
        statement: "CLRS uses Lomuto's partition (pivot at $A[r]$, one-directional scan, $\\Theta(n)$ swaps worst case). Hoare's original scheme scans from both ends toward the middle, does fewer swaps on average, and returns a split point that is not the pivot's final home, so the recursion covers $A[p..q]$ and $A[q+1..r]$.",
        detail: "Both are $\\Theta(n)$-time and in-place; Lomuto is chosen for its three-region invariant, which is easier to prove. Production quicksorts often use Hoare or dual-pivot variants for the constant-factor win.",
      },
    ],
    figures: [
      {
        caption: "PARTITION on $A = \\langle 2, 8, 7, 1, 3, 5, 6, 4 \\rangle$ with pivot $x = A[8] = 4$. Row (b) shows the invariant mid-scan at $j = 6$: $A[1..3] \\le x$ (shaded), $A[4..5] > x$, $A[6..7]$ unseen, the $i$ and $j$ pointers below. Row (c) is the final state: the pivot 4 has been swapped into position $q = 4$, splitting the array into $\\{2,1,3\\} \\le 4 < \\{7,5,6,8\\}$ — with 4 in its final sorted position.",
        afterConcept: 3,
        svg: `<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="Three rows of array cells showing PARTITION: the initial array with the pivot marked, a mid-scan state with the two regions and i and j pointers, and the final partitioned array with the pivot in place"><g font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor"><text x="88" y="60" text-anchor="end">(a)</text><text x="88" y="160" text-anchor="end">(b)</text><text x="88" y="260" text-anchor="end">(c)</text></g><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="40" width="56" height="42"/><rect x="156" y="40" width="56" height="42"/><rect x="216" y="40" width="56" height="42"/><rect x="276" y="40" width="56" height="42"/><rect x="336" y="40" width="56" height="42"/><rect x="396" y="40" width="56" height="42"/><rect x="456" y="40" width="56" height="42"/></g><rect x="516" y="40" width="56" height="42" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3"/><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle"><text x="124" y="66">2</text><text x="184" y="66">8</text><text x="244" y="66">7</text><text x="304" y="66">1</text><text x="364" y="66">3</text><text x="424" y="66">5</text><text x="484" y="66">6</text><text x="544" y="66" font-weight="bold">4</text></g><text x="544" y="24" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="#f59e0b" text-anchor="middle">pivot x = A[8]</text><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65" text-anchor="middle"><text x="124" y="94">1</text><text x="184" y="94">2</text><text x="244" y="94">3</text><text x="304" y="94">4</text><text x="364" y="94">5</text><text x="424" y="94">6</text><text x="484" y="94">7</text><text x="544" y="94">8</text></g><g font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle"><text x="184" y="128">≤ x</text><text x="334" y="128">&gt; x</text><text x="454" y="128">not yet seen</text></g><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="140" width="56" height="42" fill="currentColor" fill-opacity="0.16"/><rect x="156" y="140" width="56" height="42" fill="currentColor" fill-opacity="0.16"/><rect x="216" y="140" width="56" height="42" fill="currentColor" fill-opacity="0.16"/><rect x="276" y="140" width="56" height="42" fill="currentColor" fill-opacity="0.05"/><rect x="336" y="140" width="56" height="42" fill="currentColor" fill-opacity="0.05"/><rect x="396" y="140" width="56" height="42" stroke-dasharray="3 3"/><rect x="456" y="140" width="56" height="42" stroke-dasharray="3 3"/></g><rect x="516" y="140" width="56" height="42" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3"/><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle"><text x="124" y="166">2</text><text x="184" y="166">1</text><text x="244" y="166">3</text><text x="304" y="166">8</text><text x="364" y="166">7</text><text x="424" y="166">5</text><text x="484" y="166">6</text><text x="544" y="166" font-weight="bold">4</text></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65" text-anchor="middle"><text x="124" y="194">1</text><text x="184" y="194">2</text><text x="244" y="194">3</text><text x="304" y="194">4</text><text x="364" y="194">5</text><text x="424" y="194">6</text><text x="484" y="194">7</text><text x="544" y="194">8</text></g><line x1="244" y1="200" x2="244" y2="216" stroke="currentColor" stroke-width="1.5"/><polygon points="244,224 239.5,214 248.5,214" fill="currentColor"/><text x="244" y="238" font-family="ui-sans-serif, system-ui" font-size="12.5" font-style="italic" fill="currentColor" text-anchor="middle">i = 3</text><line x1="424" y1="200" x2="424" y2="216" stroke="currentColor" stroke-width="1.5"/><polygon points="424,224 419.5,214 428.5,214" fill="currentColor"/><text x="424" y="238" font-family="ui-sans-serif, system-ui" font-size="12.5" font-style="italic" fill="currentColor" text-anchor="middle">j = 6</text><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="248" width="56" height="42" fill="currentColor" fill-opacity="0.16"/><rect x="156" y="248" width="56" height="42" fill="currentColor" fill-opacity="0.16"/><rect x="216" y="248" width="56" height="42" fill="currentColor" fill-opacity="0.16"/><rect x="276" y="248" width="56" height="42" fill="currentColor" fill-opacity="0.05"/><rect x="336" y="248" width="56" height="42" fill="currentColor" fill-opacity="0.05"/><rect x="396" y="248" width="56" height="42" fill="currentColor" fill-opacity="0.05"/><rect x="456" y="248" width="56" height="42" fill="currentColor" fill-opacity="0.05"/></g><rect x="516" y="248" width="56" height="42" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="216" y="248" width="56" height="42" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2"/><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle"><text x="124" y="274">2</text><text x="184" y="274">1</text><text x="244" y="274">3</text><text x="304" y="274" font-weight="bold">4</text><text x="364" y="274">7</text><text x="424" y="274">5</text><text x="484" y="274">6</text><text x="544" y="274">8</text></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65" text-anchor="middle"><text x="124" y="302">1</text><text x="184" y="302">2</text><text x="244" y="302">3</text><text x="304" y="302">4</text><text x="364" y="302">5</text><text x="424" y="302">6</text><text x="484" y="302">7</text><text x="544" y="302">8</text></g><text x="304" y="242" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f59e0b" text-anchor="middle" font-weight="bold">q = 4</text></svg>`,
      },
    ],
    examples: [
      {
        title: "A complete PARTITION trace",
        problem: "Run `PARTITION(A, 1, 8)` on $A = \\langle 2, 8, 7, 1, 3, 5, 6, 4 \\rangle$, recording the state after each scan step.",
        steps: [
          { label: "Setup", text: "Pivot $x = A[8] = 4$; $i = 0$; the scan runs $j = 1 \\ldots 7$ with the three-region invariant." },
          { label: "j = 1, 2, 3", text: "$A[1] = 2 \\le 4$: $i{=}1$, swap $A[1]$ with itself — no change. $A[2] = 8 > 4$ and $A[3] = 7 > 4$: nothing happens; the $> x$ region grows: $A[2..3] = \\{8, 7\\}$." },
          { label: "j = 4, 5", text: "$A[4] = 1 \\le 4$: $i{=}2$, swap $A[2] \\leftrightarrow A[4]$: $\\langle 2, 1, 7, 8, 3, 5, 6, 4 \\rangle$. $A[5] = 3 \\le 4$: $i{=}3$, swap $A[3] \\leftrightarrow A[5]$: $\\langle 2, 1, 3, 8, 7, 5, 6, 4 \\rangle$." },
          { label: "j = 6, 7", text: "$A[6] = 5 > 4$ and $A[7] = 6 > 4$: nothing; now $A[4..7] = \\{8, 7, 5, 6\\} > x$." },
          { label: "Final swap", text: "Swap $A[i+1] = A[4] \\leftrightarrow A[8]$: $\\langle 2, 1, 3, 4, 7, 5, 6, 8 \\rangle$, and return $q = 4$. Elements $1..3$ are $\\le 4$, elements $5..8$ are $> 4$ — and position 4 holds the 4th smallest value, permanently." },
        ],
        result: "Seven comparisons (one per scanned element), four swaps, and the pivot's final home is index 4: the left subarray $\\langle 2,1,3 \\rangle$ and right subarray $\\langle 7,5,6,8 \\rangle$ remain to be sorted.",
      },
      {
        title: "Partitioning with many equals",
        problem: "Run PARTITION on $A = \\langle 4, 2, 4, 1, 4 \\rangle$ with pivot $x = A[5] = 4$ and count how the $\\le x$ test treats duplicates.",
        steps: [
          { label: "Setup", text: "Pivot $x = 4$, $i = 0$, scan $j = 1..4$. The test is $A[j] \\le 4$, so equal keys join the left region." },
          { label: "Scan", text: "$j=1$: $4 \\le 4$, $i=1$, self-swap. $j=2$: $2 \\le 4$, $i=2$, swap $A[2] \\leftrightarrow A[2]$. $j=3$: $4 \\le 4$, $i=3$, self-swap. $j=4$: $1 \\le 4$, $i=4$, self-swap. Array unchanged: $\\langle 4, 2, 4, 1, 4 \\rangle$ with $i = 4$." },
          { label: "Final swap", text: "Swap $A[5] \\leftrightarrow A[5]$ (self-swap), return $q = 5$. Left region $A[1..4] = \\langle 4, 2, 4, 1 \\rangle \\le 4$, right region empty." },
          { label: "Moral", text: "With all-equal keys Lomuto still splits $n-1:0$ every time, hence $\\Theta(n^2)$ on $n$ equals. Section 7.4's randomized analysis and the three-way partition of Exercise 7.1-2 exist to repair exactly this case." },
        ],
        result: "Pivot lands at $q = 5$ after $4$ comparisons and no effective swaps; duplicates all pile left, so equal keys do not save Lomuto from quadratic behavior.",
      },
    ],
    keyTakeaways: [
      "Quicksort = partition, then recurse on both sides; there is no combine step — PARTITION has already done the sorting work.",
      "PARTITION's invariant keeps $\\le x$ left of $i$, $> x$ between $i+1$ and $j-1$, and unexamined elements from $j$; the final swap seats the pivot in its final sorted position.",
      "One pass, $\\Theta(n)$ time, in-place, one comparison per element — but the split quality is entirely up to the pivot's rank.",
    ],
    quiz: [
      {
        q: "The last action of PARTITION — swapping $A[i+1]$ with $A[r]$ — accomplishes what?",
        options: ["moves the largest element to the end", "places the pivot into its final sorted position, between the ≤ x and > x regions", "sorts the two regions", "selects a new pivot"],
        answer: 1,
        explanation: "After the swap, every element left of position i+1 is ≤ x and every element right of it is > x, so the pivot sits exactly at its sorted rank and is never touched again.",
      },
      {
        q: "During the scan, the region $A[i+1 \\ldots j-1]$ holds exactly the elements that are:",
        options: ["$\\le x$", "$> x$", "unexamined", "equal to the pivot"],
        answer: 1,
        explanation: "The invariant's middle region collects elements that failed the test A[j] ≤ x: they are strictly greater than the pivot and were skipped by the i-pointer.",
      },
      {
        q: "The running time of PARTITION on a subarray of $n$ elements is:",
        options: ["$\\Theta(\\lg n)$", "$\\Theta(n)$ — one comparison per scanned element", "$\\Theta(n \\lg n)$", "$O(1)$"],
        answer: 1,
        explanation: "The loop runs j from p to r−1 with one comparison each, plus constant-time swaps: linear, and no element is compared twice.",
      },
      {
        q: "In this section's version of PARTITION, the pivot value is:",
        options: ["$A[p]$, the first element", "a uniformly random element", "$A[r]$, the last element", "the median of the subarray"],
        answer: 2,
        explanation: "The textbook procedure fixes x = A[r]; its predictability is exactly what Section 7.3's RANDOMIZED-PARTITION removes.",
      },
      // PYQ-pattern: GATE 2019 — Lomuto PARTITION final position (rephrased, values changed)
      {
        q: "Lomuto PARTITION with the last element as pivot runs on $[2, 8, 7, 1, 3, 5, 6, 4]$. The pivot final index (1-indexed) is:",
        options: ["3", "5", "8", "4"],
        answer: 3,
        explanation: "Step 1 — Given: pivot $x = 4$, scan indices $1$ through $7$ with boundary $i = 0$. Step 2 — Governing invariant: entries up to $i$ are at most $x$, entries $i+1$ through $j-1$ exceed $x$. Step 3 — Trace: $2$ swaps into place ($i = 1$); $1$ swaps with $8$ ($i = 2$); $3$ swaps with $7$ ($i = 3$); $5$ and $6$ are skipped; closing exchange puts $4$ at $i + 1 = 4$, giving $[2, 1, 3, 4, 7, 5, 6, 8]$. Step 4 — Sanity check: three keys not exceeding $4$ precede it, larger keys follow, and each key moved at most once. Step 5 — Distractor analysis: $3$ counts only part of the small keys, $5$ includes the pivot among the large ones, and $8$ is the pivot start position. Step 6 — Conclude: index $4$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 7.2
  {
    sectionId: "clrs-ch7-s2",
    readingTime: 6,
    intro: "Quicksort's running time is a function of pivot quality, and pivot quality spans a dangerous range. The worst case — every split as unbalanced as possible — is quadratic; the best case is the familiar $n \\lg n$. The reassuring result of this section is that the boundary between the two is extremely wide: *any* constant split proportion, even 99-to-1, still lands in $\\Theta(n \\lg n)$.",
    objectives: [
      "Derive the worst-case $\\Theta(n^2)$ recurrence and exhibit a triggering input",
      "Derive the best-case $\\Theta(n \\lg n)$ recurrence",
      "Show that any constant-proportion split gives depth $\\Theta(\\lg n)$ — the robustness argument",
    ],
    concepts: [
      {
        term: "The worst case",
        kind: "theorem",
        statement: "If every partition is maximally unbalanced ($0$ and $n-1$ elements), then $T(n) = T(n-1) + T(0) + \\Theta(n) = \\Theta(n^2)$.",
        detail: "Trigger: the pivot is always the smallest or largest element of its subarray — e.g., an **already-sorted array** with the last-element rule (each pivot is the maximum of its range), or an array of $n$ identical keys under this two-region partition. The recursion degenerates into a single chain of $n$ levels costing $n + (n-1) + \\cdots + 1 = \\frac{n(n+1)}{2} = \\Theta(n^2)$ comparisons.",
      },
      {
        term: "The best case",
        kind: "theorem",
        statement: "If every pivot lands in the middle, $T(n) = 2T(n/2) + \\Theta(n)$, which solves to $\\Theta(n \\lg n)$ — quicksort's ideal, matching merge sort.",
        detail: "The split is at best $\\lfloor (n-1)/2 \\rfloor$ and $\\lceil (n-1)/2 \\rceil$ because the pivot itself retires from the subproblems; the master theorem (case 2) or a recursion tree of cost $\\le cn$ per level over $\\lg n$ levels gives the bound.",
      },
      {
        term: "Constant-proportion splits are all fine",
        kind: "insight",
        statement: "A split into fractions $\\alpha$ and $1-\\alpha$ of the array (any fixed $0 < \\alpha < 1$) gives recurrence $T(n) = T(\\alpha n) + T((1-\\alpha) n) + \\Theta(n) = \\Theta(n \\lg n)$ — a 9:1 split only changes the *constant*, by the factor $1 / \\lg(10/9) \\approx 6.6$.",
        detail: "Recursion-tree view: every level costs at most $cn$ (the level's subproblems partition disjoint ranges), and shrinking by factor $10/9$ per level needs $\\log_{10/9} n \\approx 6.6 \\lg n$ levels. Even a pathological 99:1 split yields $\\log_{100/99} n \\approx 69 \\lg n$ levels — still logarithmic, still $\\Theta(n \\lg n)$.",
      },
      {
        term: "Alternating splits average out",
        kind: "insight",
        statement: "Bad and good splits alternate — half the splits $0:(n-1)$, half perfectly balanced — quicksort still runs in $\\Theta(n \\lg n)$, at about twice the best-case constant.",
        detail: "A worst-case split costs $\\Theta(n)$ and leaves one big subproblem; the balanced split that follows costs half that and cuts the problem into quarters. Working the recursion tree, the pair \u2018bad then good\u2019 behaves like a single halving step costing $1.5$-times-n work — so the alternation gives $\\Theta(n \\lg n)$ with about twice the best-case constant. The moral CLRS draws: quicksort's average experience is governed by the mix of splits, and badness must persist to hurt — occasional lopsided splits are amortized by the good ones around them.",
      },
      {
        term: "Recursion depth and stack space",
        kind: "insight",
        statement: "Quicksort's recursion depth equals the longest chain of nested subproblems: $\\Theta(n)$ in the worst case ($0:n-1$ splits) and $\\Theta(\\lg n)$ when every split is a constant proportion. Tail-recursing on the smaller side first caps the stack at $O(\\lg n)$ even when the time is $\\Theta(n^2)$.",
        detail: "Depth and total cost are different resources: depth counts the tallest path, total cost sums every level. A 99:1 split is $69\\times$ deeper than balanced yet still logarithmic, so both its stack and its time stay $\\Theta(\\lg n)$ and $\\Theta(n \\lg n)$.",
      },
    ],
    examples: [
      {
        title: "Depth arithmetic for split ratios",
        problem: "For $n = 10^6$ elements, compare recursion depths for (a) perfectly balanced splits, (b) 9:1 splits every time, (c) 99:1 splits every time.",
        steps: [
          { label: "Balanced", text: "Each level at least halves the largest remaining subproblem: depth $\\approx \\lg 10^6 = 6 \\lg 10 \\approx 19.9$ — call it 20 levels, each costing up to $cn$, for about $20cn$ total work." },
          { label: "9:1 split", text: "The large side keeps $9/10$ of its elements: depth $\\log_{10/9} 10^6 = \\frac{6 \\ln 10}{\\ln(10/9)} = \\frac{13.82}{0.1054} \\approx 131$ levels — $6.6$ times deeper than balanced." },
          { label: "99:1 split", text: "The large side keeps $99/100$: depth $\\frac{13.82}{\\ln(100/99)} = \\frac{13.82}{0.01005} \\approx 1374$ levels — 69 times deeper than balanced, but still $\\Theta(\\lg n)$." },
          { label: "The bill", text: "Every level does at most $cn$ work regardless of shape (subproblems are disjoint), so totals are $\\approx 20cn$, $131cn$ and $1374cn$: the same order $\\Theta(n \\lg n)$, with constants $1 \\times$, $6.6\\times$ and $69\\times$." },
        ],
        result: "All three are $\\Theta(n \\lg n)$; the split ratio only rescales the constant — $1/\\lg(1/(1-\\alpha))$ to be precise. Only a split ratio approaching 1:0 with $n$ (like the $n-1 : 0$ worst case) breaks logarithmic depth.",
      },
      {
        title: "Worst-case chain on five sorted elements",
        problem: "Run deterministic QUICKSORT (pivot $A[r]$) on $\\langle 1, 2, 3, 4, 5 \\rangle$ and sum the partition costs.",
        steps: [
          { label: "Level 1", text: "PARTITION on $1..5$, pivot $5$: $4$ comparisons, split $4:0$, pivot fixed at $5$." },
          { label: "Level 2", text: "PARTITION on $1..4$, pivot $4$: $3$ comparisons, split $3:0$." },
          { label: "Level 3-4", text: "Costs $2$ then $1$ comparisons; the recursion is a chain of depth $5$." },
          { label: "Total", text: "$4+3+2+1 = 10 = 5 \\cdot 4/2 = n(n-1)/2$ comparisons: $\\Theta(n^2)$, with stack depth $n$." },
        ],
        result: "$10$ comparisons on $n = 5$ sorted input; in general $n(n-1)/2 = \\Theta(n^2)$ comparisons and $\\Theta(n)$ stack depth.",
      },
    ],
    keyTakeaways: [
      "Worst case $\\Theta(n^2)$: every split $0 : n-1$ — triggered by sorted input with the last-element pivot rule.",
      "Best case $\\Theta(n \\lg n)$: splits as even as the pivot's removal allows, $T(n) = 2T(n/2) + \\Theta(n)$.",
      "Robustness: any constant split fraction $\\alpha : 1-\\alpha$ keeps quicksort at $\\Theta(n \\lg n)$ with constant inflated by $1/\\lg \\frac{1}{1-\\alpha}$ — even 99:1 costs only a $\\approx 69\\times$ depth constant.",
    ],
    quiz: [
      {
        q: "Quicksort's worst-case running time and a natural triggering input are:",
        options: ["$\\Theta(n \\lg n)$ on sorted input", "$\\Theta(n^2)$ on an already-sorted array when the pivot is the last element", "$\\Theta(n^2)$ only when all keys are random", "$\\Theta(n)$ on reverse-sorted input"],
        answer: 1,
        explanation: "With pivot = A[r] and sorted input, each pivot is the maximum of its range: splits are 0 : n−1, the recursion is a chain, and the level costs sum to n(n+1)/2.",
      },
      {
        q: "The best-case recurrence for quicksort is:",
        options: ["$T(n) = T(n-1) + \\Theta(n)$", "$T(n) = 2T(n/2) + \\Theta(n)$", "$T(n) = T(n/2) + \\Theta(1)$", "$T(n) = 2T(n-1) + \\Theta(n)$"],
        answer: 1,
        explanation: "Central pivots split each subarray into two halves (the pivot itself retires), giving the mergesort recurrence and Θ(n lg n) by the master theorem.",
      },
      {
        q: "If every partition splits the current subarray 9-to-1, the recursion depth is approximately:",
        options: ["$\\lg n$", "$\\log_{10/9} n \\approx 6.6 \\lg n$", "$9 \\lg n$", "$n/9$"],
        answer: 1,
        explanation: "The large subproblem shrinks by the factor 10/9 per level, so depth is log base 10/9 — about 6.6 times the balanced depth, but still Θ(lg n).",
      },
      {
        q: "Why does every recursion level cost at most $cn$ total, regardless of how lopsided the splits are?",
        options: ["because the pivot is always cheap", "because the level's subproblems are disjoint slices of the original array, so their sizes sum to at most n", "because partitioning is O(1)", "because of the master theorem"],
        answer: 1,
        explanation: "Subproblems at one depth partition a subset of the array — sizes add up to ≤ n — and each partition costs linear in its own subarray, giving ≤ cn per level.",
      },
      // PYQ-pattern: GATE 2014 — quicksort worst case on sorted input (rephrased, values changed)
      {
        q: "Quicksort with the last-element pivot sorts the ascending array $[1, 2, 3, 4, 5]$. The number of key comparisons is:",
        options: ["7", "15", "10", "5"],
        answer: 2,
        explanation: "Step 1 — Given: sorted ascending input of size $5$, deterministic last-element pivot. Step 2 — Governing recurrence: worst-case split $0$ against $n - 1$ gives $T(n) = T(n-1) + \\Theta(n)$. Step 3 — Count: partition sizes compare $4 + 3 + 2 + 1 = 10$ keys, since each pivot meets every remaining key once. Step 4 — Sanity check: $10 = \\frac{5 \\times 4}{2}$ matches the triangular number, recursion depth is $5$, and random pivots avoid this trap in expectation. Step 5 — Distractor analysis: $7$ undercounts the shrinking scans, $15$ counts all pairs including symmetric ones, and $5$ counts one scan only. Step 6 — Conclude: $10$ comparisons, the quadratic worst case.",
      },
    ],
  },

  // ---------------------------------------------------------------- 7.3
  {
    sectionId: "clrs-ch7-s3",
    readingTime: 5,
    intro: "The worst case of Section 7.2 comes from an adversary who knows the pivot rule. Randomizing the pivot moves the surprise into the algorithm: no fixed input is systematically bad, because the input cannot know the coin flips. This one-line change converts quicksort from fragile to provably fast in expectation — on every input without exception.",
    objectives: [
      "State RANDOMIZED-PARTITION and its one-line difference from PARTITION",
      "Explain why no single input is bad for randomized quicksort",
      "Classify randomized algorithms: Las Vegas versus Monte Carlo",
    ],
    concepts: [
      {
        term: "RANDOMIZED-PARTITION",
        kind: "method",
        statement: "**`RANDOMIZED-PARTITION(A, p, r)`**: pick $i$ uniformly at random from $\{p, \\ldots, r\\}$ — `i = RANDOM(p, r)` — swap $A[r] \\leftrightarrow A[i]$, then run the ordinary `PARTITION(A, p, r)`.",
        detail: "The whole algorithm changes by one random swap: the pivot is a uniformly random element of the subarray, so its rank is uniform on $\\{1, \\ldots, m\\}$ for subarray size $m$. RANDOMIZED-QUICKSORT is QUICKSORT with this replacement.",
      },
      {
        term: "Why randomization defeats adversaries",
        kind: "insight",
        statement: "For **deterministic** quicksort there exists an input that forces $\\Theta(n^2)$; for **randomized** quicksort, no fixed input forces anything — the expected running time is $O(n \\lg n)$ *for every input*, the average being taken over the algorithm's own random choices.",
        detail: "The sorted array that destroyed the last-element rule now gets a random pivot like any other array: the probability of drawing an extreme rank is $1/n$ per level, not 1. What disappears is the correlation between *input structure* and *pivot quality* — the input cannot predict the coins.",
      },
      {
        term: "Las Vegas algorithms",
        kind: "definition",
        statement: "A **Las Vegas algorithm** always produces the correct answer; only its running time is a random variable. Randomized quicksort is Las Vegas — Monte Carlo algorithms (e.g., primality tests) instead trade a small error probability for guaranteed speed.",
        detail: "For Las Vegas algorithms one analyzes $E[T(n)]$ over the internal coin flips. Quicksort never inspects the outcome of its randomness to decide correctness — the randomness only steers the pivot choice.",
      },
      {
        term: "The two views of the same process",
        kind: "insight",
        statement: "Averaging a deterministic algorithm over uniformly random inputs and averaging a randomized algorithm over its coins on a fixed input are **the same computation** when the randomization is a uniform pivot: randomized quicksort on any array behaves exactly like deterministic quicksort on a uniformly random permutation.",
        detail: "This 'random permutation view' is the bridge used in Section 7.4's analysis: we may fix the elements' sorted order $z_1 < \\cdots < z_n$ and treat every pivot as a uniform draw, because a uniformly random pivot on a fixed array explores the same split statistics as a fixed pivot on a shuffled array.",
      },
      {
        term: "Uniform pivot rank",
        kind: "notation",
        statement: "On a subarray of size $m$, RANDOMIZED-PARTITION makes the pivot's rank uniform on $\\{1, \\ldots, m\\}$: $\\Pr\\{\\mathrm{rank} = k\\} = 1/m$ for every $k$. The split sizes $(k-1, m-k)$ are therefore equally likely over all $m$ possibilities.",
        detail: "Uniformity is what the Section 7.4 analysis consumes: the $2/(j-i+1)$ pair probability is exactly the chance that two fixed elements are the first among their interval to be drawn as a uniform pivot.",
      },
    ],
    examples: [
      {
        title: "How much damage can luck do?",
        problem: "Randomized quicksort runs on the already-sorted array $\\langle 1, 2, 3, 4, 5 \\rangle$. Compute the probability that it degenerates into the $\\Theta(n^2)$ worst case, and the probability of a perfect first split.",
        steps: [
          { label: "Step 1", text: "The worst case needs every pivot to be an extreme element (max or min) of its subarray. First call: the pivot is uniform among ranks $\\{1, \\ldots, 5\\}$; extremes have probability $2/5$." },
          { label: "Step 2", text: "Continuing: the subproblems have sizes 4, 3, 2, each needing an extreme pivot again — with probabilities $2/4$, $2/3$, and the size-2 case is automatically extreme ($1$)." },
          { label: "Step 3", text: "Product: $\\frac{2}{5} \\cdot \\frac{2}{4} \\cdot \\frac{2}{3} \\cdot 1 = \\frac{8}{60} = \\frac{2}{15} \\approx 0.133$ for this particular all-extreme chain — and other worst-case chains give the same order. Deterministic quicksort on this input: probability 1." },
          { label: "Step 4", text: "A perfect first split needs the median (rank 3): probability $1/5$ — versus $0$ for the deterministic version on a bad input. Each rank is equally likely: the expected split quality is the average over all of them." },
        ],
        result: "The catastrophic behavior that deterministic quicksort suffers with certainty happens only with small probability under random pivots — and its complement, the perfect median split, is now reachable at rate $1/n$ per level instead of never.",
      },
      {
        title: "Split distribution on four elements",
        problem: "For RANDOMIZED-PARTITION on $m = 4$ distinct elements, tabulate the split probabilities and the chance of a 1:1-or-better balance.",
        steps: [
          { label: "Ranks", text: "Pivot rank $1,2,3,4$ each with probability $1/4$, giving splits $0:3$, $1:2$, $2:1$, $3:0$." },
          { label: "Balanced outcomes", text: "Ranks $2$ and $3$ are the balanced splits ($1:2$ and $2:1$): total probability $1/2$." },
          { label: "Extremes", text: "Ranks $1$ and $4$ are maximally unbalanced: probability $1/2$. Randomization does not prevent bad splits; it makes them a fair coin flip per level." },
          { label: "Expectation", text: "Expected larger side: $(3+2+2+3)/4 = 2.5 = 0.625m$, a constant fraction below $m$, which is why the expected depth stays logarithmic." },
        ],
        result: "Balanced with probability $1/2$ per level on $m = 4$; the expected larger side is $2.5$ elements, so progress is geometric in expectation.",
      },
    ],
    keyTakeaways: [
      "RANDOMIZED-PARTITION = one uniform random swap of the pivot into the last slot, then ordinary PARTITION.",
      "No input is a guaranteed ambush: the expectation is over the algorithm's coins, and every input enjoys $E[T(n)] = O(n \\lg n)$.",
      "Randomized quicksort is Las Vegas — always correct, randomly timed; and on a fixed array it is statistically identical to deterministic quicksort on a random permutation.",
    ],
    quiz: [
      {
        q: "RANDOMIZED-PARTITION differs from PARTITION by:",
        options: ["choosing the pivot uniformly at random from the subarray and swapping it into the last position", "sorting the subarray first", "using two pivots", "comparing elements pairwise at random"],
        answer: 0,
        explanation: "i = RANDOM(p, r), swap A[r] with A[i], then the standard partition runs — one line of randomness that makes the pivot's rank uniform.",
      },
      {
        q: "For randomized quicksort on a *fixed* input, the statement $E[T(n)] = O(n \\lg n)$ averages over:",
        options: ["all possible inputs", "the algorithm's own random pivot choices", "the worst 1% of runs only", "uniformly random hardware speeds"],
        answer: 1,
        explanation: "The input is fixed and arbitrary; the expectation is over the internal coins. That is what makes the bound input-independent — no distributional assumption on the data.",
      },
      {
        q: "Randomized quicksort is an example of a:",
        options: ["Monte Carlo algorithm — it may mis-sort with small probability", "Las Vegas algorithm — always correct, with randomized running time", "deterministic algorithm with random inputs", "greedy algorithm"],
        answer: 1,
        explanation: "The output is always the sorted array; only the time is random. Monte Carlo algorithms accept an error probability in exchange for time guarantees.",
      },
      {
        q: "The 'random permutation view' says randomized quicksort on a fixed array is equivalent to:",
        options: ["deterministic quicksort on a uniformly random permutation of that array", "heapsort on the same array", "quicksort with the median-of-three pivot", "insertion sort on the sorted output"],
        answer: 0,
        explanation: "Uniform pivot ranks on a fixed array reproduce exactly the split statistics of a fixed pivot rule (last element) on a random shuffle — the view that powers Section 7.4's analysis.",
      },
    ],
  },

  // ---------------------------------------------------------------- 7.4
  {
    sectionId: "clrs-ch7-s4",
    readingTime: 8,
    intro: "The final piece is honest mathematics: proving that the expected running time of randomized quicksort is $\\Theta(n \\lg n)$. The famous subtlety — flagged by the book itself — is that the two recursive calls are *not* independent, so the tempting recurrence $E[T(n)] = 2E[T(n/2)] + \\Theta(n)$ has no legal foundation. The repair is one of the most celebrated arguments in the book: count comparisons pairwise with indicator random variables and let linearity of expectation do all the work.",
    objectives: [
      "Carry out the substitution proof that the worst case is $O(n^2)$",
      "State the expected-comparison theorem and the separation lemma behind it",
      "Compute exact expected comparison counts for small $n$ from the pair-sum formula",
    ],
    concepts: [
      {
        term: "Worst case by substitution",
        kind: "theorem",
        statement: "The worst-case running time of quicksort is $O(n^2)$: with $T(n) \\le \\max_{0 \\le q \\le n-1}\\big(T(q) + T(n-q-1)\\big) + \\Theta(n)$ and the guess $T(n) \\le c n^2$, the inner expression $q^2 + (n-q-1)^2$ is maximized at the endpoints $q = 0$ or $q = n-1$, giving $T(n) \\le c(n-1)^2 + \\Theta(n) \\le c n^2$ for suitable $c$.",
        detail: "Concretely: $c(n-1)^2 + \\Theta(n) = cn^2 - 2cn + c + \\Theta(n) \\le cn^2$ once $c$ is large enough that the linear term is dominated — the quadratic guess holds because the sum of the children's squares is *most dangerous when one child has everything*, exactly the unbalanced split of Section 7.2. (Section 4.3's warning applies: the guess must also be checked against the boundary conditions and small $n$, which the base case $T(n) = O(1)$ for $n \\le n_0$ absorbs.)",
      },
      {
        term: "The independence trap",
        kind: "insight",
        statement: "The naive expectation argument — 'each side is a uniformly random subarray, so $E[T(n)] = 2E[T((n-1)/2)] + \\Theta(n)$' — is **invalid**: given the pivot's rank, the two subarrays' *element compositions* are complementary, and the running times of the two recursive calls are dependent random variables.",
        detail: "CLRS is explicit: conditioning on the first pivot fixes both subproblem sizes simultaneously, so their behaviors are coupled — a huge left subtree means a small right one. Linearity of expectation never needs independence, which is precisely why the correct proof routes every quantity through it.",
      },
      {
        term: "The expected-comparison theorem",
        kind: "theorem",
        statement: "Randomized quicksort on any fixed input performs $E[X] = \\sum_{i=1}^{n-1} \\sum_{j=i+1}^{n} \\Pr\\{z_i \\text{ compared with } z_j\\} = \\sum_{i<j} \\frac{2}{j-i+1} \\le 2n H_n = O(n \\lg n)$ comparisons in expectation, where $z_1 < z_2 < \\cdots < z_n$ are the sorted elements and $H_n$ is the $n$th harmonic number.",
        detail: "The pair probability is exactly $2/(j-i+1)$ — the separation lemma below — and the sharpened evaluation of the same sum gives the exact count $2(n+1)H_n - 4n \\approx 1.39\\, n \\lg n$ comparisons, worked out in the depth section below.",
      },
      {
        term: "The separation lemma",
        kind: "theorem",
        statement: "Elements $z_i$ and $z_j$ ($i < j$) are compared **if and only if** the first pivot ever selected from the closed set $\\{z_i, z_{i+1}, \\ldots, z_j\\}$ is one of the two endpoints $z_i$ or $z_j$ — whence $\\Pr\\{z_i \\text{ vs } z_j\\} = 2/(j-i+1)$.",
        detail: "Pivots chosen from outside the set keep the whole interval together in one subarray (they are all smaller than $z_i$ or all larger than $z_j$). The first pivot from inside the set either is an endpoint — it is compared against every remaining element of the subarray, including the other endpoint, exactly once — or is an interior $z_k$, which permanently splits the interval so $z_i$ and $z_j$ never meet. Each of the $j-i+1$ members is equally likely to be that first pivot.",
      },
      {
        term: "Reading the formula",
        kind: "insight",
        statement: "Nearby elements compare often (adjacent pairs with probability $1$), far-apart elements almost never (extremes with probability $2/n$) — and the sum over all $n(n-1)/2$ pairs still lands at $O(n \\lg n)$ because far pairs are cheap *and* numerous.",
        detail: "This is the payoff of linearity: $E[X] = \\sum_{i<j} E[X_{ij}]$ where $X_{ij}$ is the comparison indicator — no independence among the $X_{ij}$ is required or used, defusing the trap of the naive analysis. The same lemma, read one-sided, is what gives RANDOMIZED-SELECT its $\\Theta(n)$ in Chapter 9.",
      },
    ],
    examples: [
      {
        title: "The exact expectation for $n = 8$",
        problem: "Compute the expected number of comparisons $E[X]$ of randomized quicksort on 8 elements, directly from the pair probabilities, and compare with the worst and best possible runs.",
        steps: [
          { label: "Step 1", text: "Group the $\\binom{8}{2} = 28$ pairs by distance $d = j - i + 1$: there are $n - d + 1$ pairs at each $d$, each comparing with probability $2/d$." },
          { label: "Step 2", text: "Sum: $d{=}2$: $7 \\cdot 1 = 7$; $d{=}3$: $6 \\cdot \\tfrac{2}{3} = 4$; $d{=}4$: $5 \\cdot \\tfrac{1}{2} = 2.5$; $d{=}5$: $4 \\cdot \\tfrac{2}{5} = 1.6$; $d{=}6$: $3 \\cdot \\tfrac{1}{3} = 1$; $d{=}7$: $2 \\cdot \\tfrac{2}{7} \\approx 0.571$; $d{=}8$: $1 \\cdot \\tfrac{1}{4} = 0.25$." },
          { label: "Step 3", text: "Total: $E[X] = 7 + 4 + 2.5 + 1.6 + 1 + 0.571 + 0.25 \\approx 16.92$ comparisons. The sharp closed form $2(n+1)H_n - 4n = 18 \\cdot 2.7179 - 32$ gives the same $16.92$." },
          { label: "Step 4", text: "Context: a perfectly balanced sequence of pivots (ranks 4, then 2, 2, then 1 of the last pair) costs only $7 + 2 + 3 + 1 = 13$ comparisons — the floor, since a run's comparisons equal the sum of depths in its pivot tree. The degenerate chain costs $7 + 6 + \\cdots + 1 = 28 = \\binom{8}{2}$." },
        ],
        result: "Expected $\\approx 16.92$, best 13, worst 28 — and the upper bound $2nH_n = 43.5$ used in the book's proof is honest but loose for small $n$.",
      },
      {
        title: "Sanity-checking the separation lemma",
        problem: "For $n = 4$ elements $z_1 < z_2 < z_3 < z_4$, list each pair, its interval, and its comparison probability.",
        steps: [
          { label: "Adjacent pairs", text: "$(z_1,z_2)$, $(z_2,z_3)$, $(z_3,z_4)$: intervals of size 2 — the first pivot from each interval is an endpoint with probability $2/2 = 1$. Adjacent elements are always compared (whichever becomes pivot first meets the other)." },
          { label: "Distance 2", text: "$(z_1,z_3)$, $(z_2,z_4)$: intervals $\\{z_1,z_2,z_3\\}$ and $\\{z_2,z_3,z_4\\}$ of size 3 — probability $2/3$ each. The enemy is $z_2$ (resp. $z_3$) sneaking in as pivot first and separating them forever." },
          { label: "Extremes", text: "$(z_1,z_4)$: interval of all 4 — probability $2/4 = 1/2$; they meet only if one of them is the very first pivot drawn from the whole array." },
          { label: "Total", text: "$E[X] = 3 \\cdot 1 + 2 \\cdot \\tfrac{2}{3} + 1 \\cdot \\tfrac{1}{2} = 3 + 1.333 + 0.5 = 4.83$ — and the closed form $2(n+1)H_n - 4n = 10 \\cdot 2.0833 - 16$ gives $4.83$. Consistent." },
        ],
        result: "The probability table $1, 1, 1, 2/3, 2/3, 1/2$ over the six pairs is the entire theorem for $n = 4$ — linearity of expectation simply adds these up.",
      },
    ],
    keyTakeaways: [
      "Worst case $O(n^2)$ by substitution: the children's quadratic costs are maximized at extreme splits — the same splits that trigger the disaster.",
      "The naive $2E[T(n/2)]$ analysis is illegal because the two recursive calls are dependent; the indicator-variable proof needs no independence at all.",
      "$z_i$ meets $z_j$ iff an endpoint of their closed interval is the first pivot drawn from it — probability $2/(j-i+1)$ — so $E[X] \\le 2nH_n = O(n \\lg n)$, sharply $2(n+1)H_n - 4n \\approx 1.39 n \\lg n$.",
    ],
    quiz: [
      {
        q: "In the substitution proof that quicksort's worst case is $O(n^2)$, the expression $q^2 + (n-q-1)^2$ is maximized:",
        options: ["at $q = (n-1)/2$, the balanced split", "at the endpoints $q = 0$ or $q = n-1$, the unbalanced splits", "nowhere — it is constant", "only when n is even"],
        answer: 1,
        explanation: "The convex sum of squares is largest when one child takes everything: exactly the 0 : n−1 split, confirming that unbalanced partitions are the worst case.",
      },
      {
        q: "The probability that $z_i$ and $z_j$ (with $i < j$) are compared equals $2/(j-i+1)$ because:",
        options: ["every pair is compared with equal probability", "they are compared exactly when one of them is the first pivot chosen from the closed set $\\{z_i, \\ldots, z_j\\}$", "the pivot is always a median", "quicksort compares all pairs once"],
        answer: 1,
        explanation: "An interior pivot from the set separates them permanently; an endpoint pivot compares them immediately. Each of the j−i+1 members is equally likely to be first.",
      },
      {
        q: "The indicator-variable analysis is immune to the dependence between recursive calls because:",
        options: ["the indicators are independent by construction", "linearity of expectation holds for any dependent random variables", "quicksort's recursion is shallow", "the expectation is conditioned on the pivot"],
        answer: 1,
        explanation: "E[X] = Σ E[X_ij] needs no independence whatsoever — which is exactly why the pair-counting proof succeeds where the naive recurrence-based argument fails.",
      },
      {
        q: "The bound $E[X] \\le 2nH_n$ places randomized quicksort's expected comparisons at:",
        options: ["$\\Theta(n)$", "$\\Theta(n \\lg n)$ — about $2 \\ln 2 \\approx 1.39$ per $n \\lg n$ unit", "$\\Theta(n^2)$ in expectation", "$\\Theta(\\lg n)$"],
        answer: 1,
        explanation: "H_n ≈ ln n, so 2nH_n ≈ 2n ln n = (2 ln 2) n lg n ≈ 1.39 n lg n — quicksort's famous average constant.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "The expected-time theorem in full: linearity of expectation carries the proof",
        blocks: [
          {
            kind: "para",
            body: "The book's warning deserves to be internalized before the proof: if you find yourself writing $E[T(n)] = 2E[T(n/2)] + \\Theta(n)$ for quicksort, you have already made an error. Conditioning on the first pivot's rank $q$ fixes **both** subproblem sizes at once, and the running times of the two recursive calls are dependent — a left call that goes deep forces the right call's input, and vice versa. Worse, within a single recursive call, the subarray is *no longer a uniformly random permutation* of its elements: it is a size-biased survivor of the first partition. The proof that follows succeeds because it never takes a recurrence at all. It counts the only thing quicksort actually does — pairwise comparisons — and lets **linearity of expectation** bypass every dependence question in one stroke.",
          },
          {
            kind: "theorem",
            heading: "Expected comparisons of randomized quicksort",
            body: "Let $z_1 < z_2 < \\cdots < z_n$ be the input elements in sorted order, and let $X$ be the total number of comparisons RANDOMIZED-QUICKSORT performs. Then $$E[X] \\;=\\; \\sum_{i=1}^{n-1} \\sum_{j=i+1}^{n} \\Pr\\{z_i \\text{ compared with } z_j\\} \\;=\\; \\sum_{i<j} \\frac{2}{j-i+1} \\;=\\; 2(n+1)H_n - 4n \\;<\\; 2nH_n,$$ where $H_n = \\sum_{k=1}^{n} 1/k$ is the $n$th harmonic number. In particular $E[X] \\approx 2n \\ln n \\approx 1.386\\, n \\lg n$, so $E[X] = O(n \\lg n)$.",
          },
          {
            kind: "proof",
            heading: "The separation lemma and the sum",
            body: "Define $X_{ij} = 1$ if $z_i$ is ever compared with $z_j$, so $X = \\sum_{i<j} X_{ij}$ and, by linearity, $E[X] = \\sum_{i<j} \\Pr\\{X_{ij} = 1\\}$ — no independence required. **Claim:** $X_{ij} = 1$ iff the first pivot drawn from the closed set $Z_{ij} = \\{z_i, z_{i+1}, \\ldots, z_j\\}$ is $z_i$ or $z_j$. *Why:* a pivot outside $Z_{ij}$ is smaller than every member of $Z_{ij}$ or larger than every member, so the partition keeps the whole set intact inside one child subarray — the interval shrinks around $Z_{ij}$ but never cuts through it. The first pivot $z_k$ taken from $Z_{ij}$ splits it: if $i < k < j$, then $z_i$ goes left and $z_j$ goes right, into subarrays that never interact again — no comparison, ever. But if the first member picked is $z_i$ (or $z_j$), the partition at that instant compares the pivot against **every** other element of the current subarray — which still contains the entire interval — so $z_i$ and $z_j$ are compared exactly once. By symmetry every member of $Z_{ij}$ is equally likely to be that first pivot, so $\\Pr\\{X_{ij}=1\\} = \\frac{2}{|Z_{ij}|} = \\frac{2}{j-i+1}$. Summing over $d = j-i+1$, with $n-d+1$ pairs at each distance $d$: $E[X] = \\sum_{d=2}^{n} \\frac{2(n-d+1)}{d} = 2\\sum_{d=2}^{n}\\left(\\frac{n+1}{d} - 1\\right) = 2(n+1)(H_n - 1) - 2(n-1) = 2(n+1)H_n - 4n$. $\\blacksquare$",
          },
          {
            kind: "derivation",
            heading: "From the exact sum to $O(n \\lg n)$",
            body: "The telescoping in the last step deserves its own line: $\\frac{n-d+1}{d} = \\frac{n+1}{d} - 1$, so the double sum collapses to harmonic numbers minus a linear term. Now bound it: $H_n = 1 + \\frac{1}{2} + \\cdots + \\frac{1}{n} \\le 1 + \\int_1^{n} \\frac{dx}{x} = 1 + \\ln n$, giving $E[X] \\le 2(n+1)(\\ln n + 1) - 4n = 2n\\ln n + O(\\ln n)$. Converting bases, $2\\ln n = 2 \\ln 2 \\cdot \\lg n \\approx 1.386 \\lg n$, which is where quicksort's average constant comes from. For the bound CLRS states, loosen before summing: $E[X] \\le \\sum_{i=1}^{n-1} \\sum_{j=i+1}^{n} \\frac{2}{j-i+1} \\le \\sum_{i=1}^{n-1} \\sum_{k=1}^{n} \\frac{2}{k+1} < 2n \\sum_{k=1}^{n} \\frac{1}{k} = 2nH_n = O(n \\lg n)$ — cruder, but it keeps every step one-line.",
          },
          {
            kind: "remark",
            body: "Notice what the lemma really says: the *only* comparisons quicksort ever performs are pivot-vs-element, so a pair meets iff one member achieves 'local first' status in its interval. Read it again for Chapter 9: in RANDOMIZED-SELECT the recursion is **one-sided**, so an interior pivot $z_k$ still separates $z_i$ from $z_j$, but only the *side containing the target rank* is explored — the same separation lemma, applied to a process that discards half the tree, is what ultimately yields that algorithm's $\\Theta(n)$ expected time. The pair $2/(j-i+1)$ is the atom from which both analyses are built.",
          },
          {
            kind: "example",
            heading: "The theorem on $n = 8$, to three decimals",
            body: "Grouping the 28 pairs by distance $d = j-i+1$: contributions $7(1) + 6(2/3) + 5(1/2) + 4(2/5) + 3(1/3) + 2(2/7) + 1(1/4) = 7 + 4 + 2.5 + 1.6 + 1 + 0.5714 + 0.25 = 16.9214$. The closed form agrees: $2 \\cdot 9 \\cdot H_8 - 32$ with $H_8 = 2.717857\\ldots$ gives $48.9214 - 32 = 16.9214$. The book's looser bound $2nH_n = 43.49$ is off by $2.6\\times$ at this size — asymptotic bounds are honest about order, not constants, and this example measures exactly how much room the constants leave at small $n$.",
          },
        ],
      },
      {
        tier: "phd",
        title: "Beyond the bound: exact constants, introsort and the partition race",
        blocks: [
          {
            kind: "para",
            body: "The exact expectation $E[X] = 2(n+1)H_n - 4n$ (Sedgewick's sharpening of the CLRS sum) is worth expanding to see the machine under the hood: with $H_n = \\ln n + \\gamma + \\tfrac{1}{2n} + O(1/n^2)$, one gets $E[X] = 2n\\ln n + (2\\gamma - 4)n + 2\\ln n + o(n) \\approx 1.386\\, n \\lg n - 1.846\\, n$. Compare the information-theoretic floor $\\lg n! \\approx n \\lg n - 1.443n$: quicksort pays roughly **39% more comparisons than necessary** in the leading term. It wins anyway because comparisons are not the only cost — partition is a single sequential scan with superb cache behavior and trivial constant per element, while comparison-optimal schemes (merge-insertion sort à la Ford–Johnson, optimal for small $n$) pay heavily in data movement and branch misprediction.",
          },
          {
            kind: "application",
            heading: "Introsort: the engineering answer to the worst case",
            body: "Musser's **introsort** (1997) runs quicksort but tracks recursion depth; if it exceeds $c \\cdot \\lg n$ (with $c \\approx 2$), it switches the current subproblem to heapsort — Chapter 6's $\\Theta(n \\lg n)$ worst case with $O(1)$ space. The result inherits quicksort's average speed and heapsort's worst-case guarantee simultaneously: $\\Theta(n \\lg n)$ *always*, with the quicksort constant *usually*. This hybrid is what C++'s `std::sort` has shipped since the SGI STL — the standard mandates $O(n \\lg n)$ worst case, which pure quicksort cannot offer. The depth-cap idea is exactly Section 7.2's robustness observation weaponized: unbalanced splits are fine in moderation; only *persistent* degeneration is fatal, and a depth counter detects persistence in $O(1)$ bookkeeping per level.",
          },
          {
            kind: "para",
            body: "The partition scheme itself remained open ground: Yaroslavskiy's **dual-pivot** partition (2009) splits the array into three regions around two pivots, and both the analysis and the practice surprised the field — it performs *more* comparisons yet *fewer* writes, winning on real Java workloads, and it replaced the classic scheme in `java.util.Arrays.sort` for primitive types in 2011. Wild, Nebel and Neininger's exact analysis of dual-pivot quicksort showed the comparison count constant rises (to about $1.9\\, n\\lg n$) while scan costs drop — a trade invisible to any model that counts only comparisons. The general question '**which partition scheme minimizes total work on a real machine?**' is therefore genuinely open in the sense that its answer is architecture-dependent: cache lines, branch predictors and write bandwidth all vote.",
          },
          {
            kind: "open",
            heading: "What is the true optimum for in-place sorting?",
            body: "Three frontiers remain active. (1) **In-place stability**: quicksort's partition is unstable and no in-place stable variant with quicksort's constant is known; the best in-place stable mergesorts (symmerge, Grail) achieve $O(n \\lg n)$ time and $O(1)$ space but with large constants — closing the gap to unstable speeds is open. (2) **Optimal adaptive sorting**: the comparison count should ideally degrade to $O(n(1 + \\lg(\\text{Inv}/n)))$ for inputs with Inv inversions; formal lower bounds (estimating presortedness) meet algorithms only partially. (3) **Comparison-optimal sorting**: the exact minimal worst-case comparison count is known only for small $n$ via Ford–Johnson-style merge-insertion (e.g., 30 comparisons for $n = 12$, one above the $\\lceil \\lg 12! \\rceil = 29$ bound, and provably optimal there), and merge-insertion is known to fall short of optimal at some larger sizes (first at $n = 15$), while whether it stays asymptotically optimal — within $o(n)$ comparisons of the best possible — remains open. Where quicksort sits relative to a comparison-optimal in-place stable algorithm remains unknown: the 1.386 constant is proven for the scheme, but no one has proved a matching lower bound for *partition-based* methods. The gap between 1.386 and the information floor 1.000 is a territory still being mapped.",
          },
        ],
      },
    ],
  },
]
