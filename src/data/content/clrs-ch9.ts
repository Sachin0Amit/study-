import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Chapter 9: Medians and Order Statistics (Sections 9.1 – 9.3)
// ============================================================================

export const clrsCh9Content: SectionContent[] = [
  // ---------------------------------------------------------------- 9.1
  {
    sectionId: "clrs-ch9-s1",
    readingTime: 6,
    intro: "Selection problems ask for the $i$th smallest element — minimum, maximum, median — without the obligation to sort. The first surprise is how cheap extrema are: $n - 1$ comparisons for one, and both together in only $3\\lfloor n/2 \\rfloor$ comparisons, using a pairing trick that makes every comparison pull double duty.",
    objectives: [
      "Define order statistics and the two median positions",
      "Prove the $n - 1$ lower bound for finding a single extremum via the tournament argument",
      "Execute the pair-processing min-and-max method and count its $3\\lfloor n/2 \\rfloor$ comparisons",
    ],
    concepts: [
      {
        term: "Order statistics and medians",
        kind: "definition",
        statement: "The **$i$th order statistic** of a set of $n$ elements is the $i$th smallest element. The **minimum** is the 1st, the **maximum** the $n$th. Informally, the median is the 'halfway' element: for odd $n$ it is the unique element at $i = (n+1)/2$; for even $n$ there are two, at $i = n/2$ (lower) and $i = n/2 + 1$ (upper) — CLRS uses $i = \\lceil n/2 \\rceil$ for 'the' median.",
        detail: "Unlike sorting, selection need not commit to a total order: it must merely separate the $i-1$ smaller elements from the $i-1$ larger ones. That weaker goal is what the algorithms of this chapter exploit.",
      },
      {
        term: "Finding the minimum: $n - 1$ comparisons",
        kind: "method",
        statement: "Walk the array keeping a champion: compare each element once against the current minimum. After $n - 1$ comparisons the champion is the minimum — and this is optimal.",
        detail: "**Tournament argument.** Every element except the winner must lose a comparison to be ruled out, and each comparison produces exactly one loss: fewer than $n - 1$ comparisons leave at least two never-defeated candidates, so the minimum is not yet determined. The same holds symmetrically for the maximum.",
      },
      {
        term: "Min and max together in $3\\lfloor n/2 \\rfloor$ comparisons",
        kind: "method",
        statement: "Process the elements in **pairs**: compare the two elements of a pair with each other (1 comparison), then compare the smaller against the running min and the larger against the running max (2 more) — at most **3 comparisons per 2 elements**, i.e. at most $3\\lfloor n/2 \\rfloor$ comparisons total.",
        detail: "For odd $n$, initialize with the first element as both min and max, then pair the remaining $n - 1$ elements. Naively running two independent scans costs $2(n-1)$; the pair method wins because the intra-pair comparison simultaneously nominates a min-candidate and a max-candidate — a loss in the pair can never be the global minimum's last hope.",
      },
      {
        term: "Why $3n/2 - 2$ is the true worst case",
        kind: "insight",
        statement: "With first-pair initialization the exact count for even $n$ is $3n/2 - 2$: the first pair costs 1 comparison (it sets both extrema) and each remaining pair costs 3, giving $1 + 3(n-2)/2$. An adversary argument shows no algorithm beats $\\lceil 3n/2 \\rceil - 2$: every element needs both a win and a loss on its record, and comparisons between two winless or two lossless elements waste half their power.",
        detail: "The bookkeeping: each element must lose once (ruling out max-hood) and win once (ruling out min-hood). A comparison can contribute one loss and one win only when it pits a winless element against a lossless one — any other pairing provably stretches the total. Pairing large-versus-small from the start is the optimal schedule.",
      },
      {
        term: "The tournament lower bound",
        kind: "theorem",
        statement: "Any comparison algorithm needs at least $n-1$ comparisons to find the minimum: view each comparison as a match whose loser can never be the minimum, so $n-1$ elements must each lose at least once. The linear scan attains it, hence is optimal.",
        detail: "Adversary argument: until $n-1$ losers exist, two never-compared unbeaten elements remain and the adversary keeps both viable as minima. The same counting gives $\\lceil \\lg n \\rceil - 1$ extra comparisons to find the second smallest (Exercise 9.1-1).",
      },
    ],
    examples: [
      {
        title: "Both extrema of six elements in 7 comparisons",
        problem: "Find the minimum and maximum of $A = \\langle 5, 3, 8, 9, 1, 7 \\rangle$ by the pair method, and compare with the naive $2(n-1) = 10$.",
        steps: [
          { label: "Pair 1: (5, 3)", text: "$5 > 3$, so 3 is the pair-min candidate and 5 the pair-max candidate. Initialize $min = 3$, $max = 5$. Cost: 1 comparison (no further comparisons needed for the first pair)." },
          { label: "Pair 2: (8, 9)", text: "$8 < 9$; compare 8 against $min = 3$ (3 stays) and 9 against $max = 5$ ($max = 9$). Cost: 3, running total 4." },
          { label: "Pair 3: (1, 7)", text: "$1 < 7$; compare 1 against $min = 3$ ($min = 1$) and 7 against $max = 9$ (9 stays). Cost: 3, running total 7." },
          { label: "Verify the count", text: "$3n/2 - 2 = 9 - 2 = 7$ for $n = 6$ — exactly the comparisons spent, against 10 for two independent scans." },
        ],
        result: "Minimum $= 1$, maximum $= 9$, in 7 comparisons; the intra-pair comparisons never had to be re-checked against both extrema, which is where the three saved comparisons come from.",
      },
      {
        title: "Second smallest in $n + \\lceil \\lg n \\rceil - 2$ comparisons",
        problem: "Find the second smallest of $\\langle 5, 3, 8, 9, 1, 7, 2, 6 \\rangle$ ($n = 8$) via a knockout tournament.",
        steps: [
          { label: "Tournament (7 = n − 1 comparisons)", text: "First round: $3$ beats 5, $8$ beats 9, $1$ beats 7, $2$ beats 6. Semifinals: $3$ beats 8, $1$ beats 2. Final: $1$ beats 3. Champion: 1." },
          { label: "Who can be second?", text: "The second smallest must have lost **directly to the champion** — every other element lost to something that is not the minimum. The champions' victims: $7$ (round 1), $2$ (semifinal), $3$ (final)." },
          { label: "Scan the victims (2 = ⌈lg 8⌉ − 1 comparisons)", text: "$\\min(7, 2) = 2$, then $\\min(2, 3) = 2$." },
          { label: "Total", text: "$7 + 2 = 9 = n + \\lceil \\lg n \\rceil - 2 = 8 + 3 - 2$." },
        ],
        result: "Second smallest $= 2$ (sorted prefix: $1, 2, 3, \\ldots$). The knockout tree is depth-optimal: a champion of a balanced tournament has beaten exactly $\\lceil \\lg n \\rceil$ elements, so the runner-up search is nearly free once the tree is shallow.",
      },
    ],
    keyTakeaways: [
      "Selection is strictly easier than sorting: the minimum costs exactly $n - 1$ comparisons — the tournament argument (every non-winner must lose once) proves this optimal.",
      "Pair processing finds both extrema in at most $3\\lfloor n/2 \\rfloor$ comparisons ($3n/2 - 2$ exactly, with first-pair initialization), beating two scans by a factor of 1.5.",
      "Comparison counts are a designable resource: pairing, tournaments and victim-lists are the elementary bookkeeping tools that the rest of this chapter scales up to selection in general.",
    ],
    quiz: [
      {
        q: "Finding the minimum alone requires $n - 1$ comparisons because:",
        options: [
          "every element except the smallest must lose at least one comparison, and each comparison produces exactly one loss",
          "the array must be scanned twice to confirm the result",
          "comparison sorting has an $\\Omega(n \\lg n)$ lower bound",
          "the adversary can hide the minimum in the last position",
        ],
        answer: 0,
        explanation: "With fewer than n − 1 comparisons, at least two elements have never lost, so either could still be the minimum — no algorithm can certify the answer sooner.",
      },
      {
        q: "The pair-processing strategy finds both the minimum and maximum using at most:",
        options: [
          "$2n - 3$ comparisons",
          "$3\\lfloor n/2 \\rfloor$ comparisons",
          "$n \\lceil \\lg n \\rceil$ comparisons",
          "$n + 1$ comparisons",
        ],
        answer: 1,
        explanation: "One intra-pair comparison nominates a min-candidate and a max-candidate at once; the two extremum updates bring each pair to 3 comparisons per 2 elements.",
      },
      {
        q: "For $n = 6$ elements, how many comparisons does an optimized pair method actually use?",
        options: [
          "6",
          "7 — the first pair costs 1 (it initializes both extrema), each remaining pair costs 3",
          "9 — every pair costs 3, including the first",
          "10 — the same as two independent scans",
        ],
        answer: 1,
        explanation: "1 + 3·(n−2)/2 = 3n/2 − 2 = 7 for n = 6. Only pairs after the first need both extremum comparisons; the book's 3⌊n/2⌋ = 9 is an upper bound, not the tight count.",
      },
      {
        q: "The second smallest of $n$ elements can be found with $n + \\lceil \\lg n \\rceil - 2$ comparisons because:",
        options: [
          "two linear scans suffice",
          "the knockout champion beat exactly $\\lceil \\lg n \\rceil$ elements in a balanced tournament, and the runner-up is the smallest of those victims",
          "binary search locates the minimum in logarithmic time",
          "the adversary must reveal the two smallest elements early",
        ],
        answer: 1,
        explanation: "Any element that lost to a non-champion cannot be second smallest, so only the champion's ⌈lg n⌉ direct victims need a small follow-up scan: (n − 1) + (⌈lg n⌉ − 1) total.",
      },
      // PYQ-pattern — simultaneous minimum and maximum (rephrased, values changed)
      {
        q: "The optimal pairwise method finds both the minimum and maximum of $7$ distinct keys using how many comparisons?",
        options: ["7", "12", "9", "14"],
        answer: 2,
        explanation: "Step 1 — Given: $n = 7$ distinct keys, odd count. Step 2 — Governing scheme: compare disjoint pairs first, then feed winners toward maximum and losers toward minimum, costing $3\\lfloor\\frac{n}{2}\\rfloor$. Step 3 — Count: initialize both extrema to the first key with no comparison; the remaining $6$ keys form $3$ pairs, each pair costing $3$ (one within-pair comparison plus two against the running extrema), total $3 \\times 3 = 9 = 3\\lfloor\\frac{7}{2}\\rfloor$. Step 4 — Sanity check: $9$ beats $2n - 2 = 12$ independent searches, each comparison serves two purposes, and the bound is tight. Step 5 — Distractor analysis: $7$ counts pairs only, $12$ runs two separate searches, and $14$ doubles everything. Step 6 — Conclude: $9$ comparisons.",
      },
    ],
  },

  // ---------------------------------------------------------------- 9.2
  {
    sectionId: "clrs-ch9-s2",
    readingTime: 7,
    intro: "RANDOMIZED-SELECT — Hoare's 1961 FIND — runs quicksort's partition but then recurses into only one side of the split: the side containing the desired rank. That single change drops the expected cost from $\\Theta(n \\lg n)$ to $\\Theta(n)$, because the subproblem sizes form an expected geometric series rather than a full recursion tree.",
    objectives: [
      "Execute RANDOMIZED-SELECT and track ranks correctly across recursions",
      "Explain the one-sided-recursion intuition and why it beats quicksort's expected $\\Theta(n \\lg n)$",
      "Follow the indicator-based expectation argument to $E[T(n)] \\le cn$",
    ],
    concepts: [
      {
        term: "The RANDOMIZED-SELECT procedure",
        kind: "method",
        statement: "**`RANDOMIZED-SELECT(A, p, r, i)`** returns the $i$th smallest of $A[p..r]$: if $p = r$, return $A[p]$. Otherwise run `RANDOMIZED-PARTITION` to get pivot position $q$; the pivot's rank is $k = q - p + 1$. If $i = k$ return $A[q]$; if $i < k$ recurse on $A[p..q-1]$ (same $i$); else recurse on $A[q+1..r]$ with rank $i - k$.",
        detail: "The rank arithmetic is the only delicate part: the desired order statistic is the $i$th smallest of the current subarray, so after discarding the pivot and everything left of it, the target becomes the $(i - k)$th of the right side. One pivot choice, one partition, one recursive call.",
      },
      {
        term: "One-sided recursion",
        kind: "insight",
        statement: "Quicksort recurses on **both** sides of the pivot and pays $\\Theta(n \\lg n)$; RANDOMIZED-SELECT recurses into **only the side containing the answer**, discarding the other entirely. Its worst case is still $\\Theta(n^2)$ (a $0 : n-1$ split at every level), but the expected cost is $\\Theta(n)$.",
        detail: "Geometric intuition: a uniformly random pivot leaves at most $3n/4$ elements on average — the larger side $\\max(q-1, n-q)$ averages $3n/4$. A sequence shrinking by a constant factor in expectation sums to $n \\cdot \\frac{1}{1 - 3/4} = O(n)$... the rigorous version is the indicator argument below. In-place and with tiny constants, this is the selection algorithm used in practice.",
      },
      {
        term: "The expectation analysis",
        kind: "theorem",
        statement: "Define $T(n)$ as an upper bound on the expected running time on any subarray of size $n$. A random pivot has uniformly distributed rank $q \\in \\{1, \\ldots, n\\}$, so $$E[T(n)] \\le \\frac{1}{n} \\sum_{q=1}^{n} \\big( T(\\max(q-1,\\, n-q)) + O(n) \\big).$$ Since $\\sum_{q=1}^{n} \\max(q-1, n-q) \\le 2 \\sum_{q=\\lceil n/2 \\rceil}^{n-1} q \\le \\tfrac{3}{4}n^2$, assuming $T(m) \\le cm$ for $m < n$ gives $E[T(n)] \\le \\tfrac{3}{4} cn + O(n) \\le cn$ for $c$ chosen large enough.",
        detail: "The sum $\\sum_q \\max(q-1, n-q)$ runs over all possible pivot ranks; the larger-side sizes climb from $\\lceil n/2 \\rceil$ to $n - 1$ twice. Defining $T$ as a bound over all subarrays of a given size — not one fixed input — is what licenses using the inductive hypothesis inside the expectation; CLRS is explicit about this subtlety.",
      },
      {
        term: "Worst case and contrast with Section 9.3",
        kind: "insight",
        statement: "The pivot sequence that always splits $0 : n - 1$ drives RANDOMIZED-SELECT to $\\Theta(n^2)$: costs $n + (n-1) + \\cdots$. Probability zero on any fixed input, but possible — deterministic data (say an adversary feeding pivot-choices) makes it real.",
        detail: "The next section removes the randomness and the risk together: choosing the pivot as the median of group medians guarantees every split discards a constant fraction of the elements, at a substantial cost in constant factors — the classical trade of expected-case practicality for worst-case certainty.",
      },
      {
        term: "Lucky versus unlucky pivots",
        kind: "insight",
        statement: "Call a pivot lucky if it lands in the middle half (ranks $n/4..3n/4$): probability $1/2$, and the subproblem shrinks to at most $3n/4$. Unlucky pivots cost one linear partition and leave the size almost unchanged, but a lucky pivot arrives every two tries in expectation, so sizes decay geometrically.",
        detail: "This is the intuition behind $E[T(n)] \\le cn$: charge each level's linear work to the lucky step that ends it. RANDOMIZED-SELECT needs only one lucky chain, while quicksort needs the whole tree to be lucky.",
      },
    ],
    examples: [
      {
        title: "A complete RANDOMIZED-SELECT trace",
        problem: "Find the 3rd smallest element of $A = \\langle 7, 2, 9, 4, 8, 1 \\rangle$ (indices 1–6). Suppose the random pivots chosen are $A[6] = 1$, then $A[6] = 7$, then $A[3] = 4$.",
        steps: [
          { label: "Partition 1 (pivot 1)", text: "`PARTITION` compares 1 against $\\langle 7,2,9,4,8 \\rangle$ — all larger — and swaps it into place: $A = \\langle 1, 2, 9, 4, 8, 7 \\rangle$, $q = 1$, $k = 1$. Since $i = 3 > k$, recurse right on positions 2–6 seeking rank $i - k = 2$." },
          { label: "Partition 2 (pivot 7)", text: "On $\\langle 2, 9, 4, 8, 7 \\rangle$: $2 \\le 7$ (self-swap), $9 > 7$, $4 \\le 7$ — swap 9 ↔ 4 giving $\\langle 2, 4, 9, 8, 7 \\rangle$ — then $8 > 7$; final swap seats the pivot: $A = \\langle 1, 2, 4, 7, 8, 9 \\rangle$ locally, $q = 4$, $k = 3$. Now $i = 2 < k$: recurse left on positions 2–3, rank still 2." },
          { label: "Partition 3 (pivot 4)", text: "On $\\langle 2, 4 \\rangle$: $2 \\le 4$, self-swap, pivot already last: $q = 3$, $k = 2$. Now $i = k$: return $A[3] = 4$." },
          { label: "The bill", text: "Comparisons: $5 + 4 + 1 = 10$ for three partitions. Subproblem sizes $6 \\to 5 \\to 2$: each level costs only the current side's length, and the untouched sides cost nothing ever again." },
        ],
        result: "The 3rd smallest is $4$ (sorted: $\\langle 1, 2, 4, 7, 8, 9 \\rangle$). Quicksorting the whole array would have made $\\Theta(n \\lg n)$ comparisons; selecting needed 10.",
      },
      {
        title: "Ranks across a partition",
        problem: "RANDOMIZED-SELECT seeks rank $i = 3$ in $A = \\langle 7, 1, 5, 3, 6, 2, 4 \\rangle$; pivot $5$ is chosen. Compute the new rank for the recursion.",
        steps: [
          { label: "Partition", text: "PARTITION around $5$: $\\langle 1, 3, 2, 4, 5, 6, 7 \\rangle$ with pivot at $q = 5$ (1-indexed). Left side $k = q-p = 4$ elements $\\le 5$." },
          { label: "Compare", text: "Sought $i = 3$ versus $k = 4$: $i < k$, so the answer lies left of the pivot." },
          { label: "Recurse", text: "Recurse on $A[1..4] = \\langle 1, 3, 2, 4 \\rangle$ with unchanged rank $i = 3$. Had $i$ exceeded $k$, the new rank would be $i-k$ on the right side." },
          { label: "Cost", text: "One $\\Theta(7)$ partition plus one subproblem of size $4 \\le 3n/4$: a lucky pivot, exactly the event the expectation analysis charges $1/2$ probability." },
        ],
        result: "Recurse left with $i = 3$ on $4$ elements; the rank arithmetic $i$ vs $k$ is the only bookkeeping RANDOMIZED-SELECT adds to PARTITION.",
      },
    ],
    keyTakeaways: [
      "RANDOMIZED-SELECT is quicksort's partition with one-sided recursion: recurse only into the side holding the desired rank, adjusting $i$ by the discarded elements.",
      "Expected running time $\\Theta(n)$: pivot ranks are uniform, the average larger side is $3n/4$, and the expectation analysis turns that into $E[T(n)] \\le \\tfrac34 cn + O(n) \\le cn$.",
      "Worst case $\\Theta(n^2)$ from persistently terrible pivots — accepted in practice for the tiny constants; the next section buys a worst-case guarantee deterministically.",
    ],
    quiz: [
      {
        q: "RANDOMIZED-SELECT differs from quicksort's recursion in that it:",
        options: [
          "always recurses on both sides of the partition",
          "recurses only into the side containing the desired rank — which is why its expected time is linear rather than $\\Theta(n \\lg n)$",
          "uses a three-way partition to handle equal keys",
          "sorts the array completely as a side effect",
        ],
        answer: 1,
        explanation: "Discarding one side at every level makes the subproblem sizes a (random) shrinking sequence whose expected total is linear; quicksort must pay for both sides, giving n lg n.",
      },
      {
        q: "If `RANDOMIZED-PARTITION` returns position $q$ and the target is the $i$th smallest of $A[p..r]$, the algorithm recurses to the right side when:",
        options: [
          "$i < k$, where $k = q - p + 1$",
          "$i = k$ — the pivot itself is the answer",
          "$i > k$, recursing on $A[q+1..r]$ with adjusted rank $i - k$",
          "always — the right side is larger in expectation",
        ],
        answer: 2,
        explanation: "The pivot is the kth smallest of the subarray; a larger target rank must live to its right, renumbered as rank i − k after discarding the k smaller elements (pivot included).",
      },
      {
        q: "The worst-case running time of RANDOMIZED-SELECT is:",
        options: [
          "$\\Theta(n)$ — linearity is guaranteed",
          "$\\Theta(n \\lg n)$",
          "$\\Theta(n^2)$ — an unlucky pivot sequence can yield $0 : n-1$ splits at every level",
          "$O(1)$ when $i = 1$",
        ],
        answer: 2,
        explanation: "Costs n + (n−1) + ⋯ + 1 arise if each random pivot is an extremum of its subarray. Randomization makes this vanishingly unlikely on any fixed input, but the worst case exists.",
      },
      {
        q: "In the expectation analysis, $\\sum_{q=1}^{n} \\max(q-1, n-q) \\le \\tfrac34 n^2$. This sum governs the recursion because:",
        options: [
          "the larger side must be sorted first",
          "each pivot rank $q$ is equally likely, and the surviving subproblem has at most $\\max(q-1, n-q)$ elements",
          "partitions cost proportional to their larger side",
          "the smaller side is always discarded",
        ],
        answer: 1,
        explanation: "Conditioning on the pivot's rank q, the algorithm continues in the side containing the target — at most the larger side, max(q−1, n−q) elements. Averaging the resulting costs over the n equally likely ranks produces the sum.",
      },
    ],
  },

  // ---------------------------------------------------------------- 9.3
  {
    sectionId: "clrs-ch9-s3",
    readingTime: 8,
    intro: "Can selection be linear in the worst case? Yes — but the pivot must be chosen deterministically well, and the trick is to spend a recursion on a much smaller problem to get one. SELECT partitions around the median of group medians (the median-of-medians), a pivot guaranteed to sit between the 30th and 70th percentiles of the data, so every recursion provably discards at least $3n/10$ elements. The full substitution proof that this yields $\\Theta(n)$ — including the famous 'why groups of 5, not 3' — is the masters tier below.",
    objectives: [
      "Execute the SELECT algorithm's five steps and trace the median-of-medians computation",
      "Prove the $3n/10 - 6$ discard guarantee and derive the recurrence",
      "Understand why the two recursive fractions $1/5 + 7/10$ must — and do — sum below 1",
    ],
    concepts: [
      {
        term: "The SELECT algorithm",
        kind: "method",
        statement: "**`SELECT(i)`** on $n$ elements: (1) divide the $n$ elements into $\\lfloor n/5 \\rfloor$ groups of 5 plus one group of the remaining $n \\bmod 5$; (2) find each group's median (insertion sort each 5-element group, $O(1)$ per group); (3) recursively `SELECT` the median $x$ of these $\\lceil n/5 \\rceil$ medians; (4) partition around $x$, letting $k$ be its rank; (5) if $i = k$ return $x$, else recurse on the side containing the target rank.",
        detail: "Step 3 is the heart: the pivot is not a sample but a recursively certified median of medians. The structure is self-similar — SELECT calls itself on a smaller instance to manufacture a good pivot, then calls itself once more on the pruned data.",
      },
      {
        term: "The guaranteed discard",
        kind: "theorem",
        statement: "At least $3n/10 - 6$ elements are $\\ge x$, and at least $3n/10 - 6$ are $\\le x$. Hence the step-5 recursion operates on at most $n - (3n/10 - 6) = 7n/10 + 6$ elements.",
        detail: "At least half of the $\\lceil n/5 \\rceil$ group medians are $\\ge x$. Setting aside the group containing $x$ and the possibly-short final group, at least $\\lceil \\lfloor n/5 \\rfloor / 2 \\rceil - 2 \\ge n/10 - 2$ medians remain, and each drags its two larger group-mates with it — three elements per median, so $3(n/10 - 2) = 3n/10 - 6$.",
      },
      {
        term: "The recurrence",
        kind: "law",
        statement: "SELECT's running time satisfies $$T(n) \\le T(\\lceil n/5 \\rceil) + T(7n/10 + 6) + O(n),$$ where the first term finds the median of medians, the second is the pruned recursion, and the $O(n)$ covers grouping, insertion-sorting the groups and partitioning. This recurrence solves to $T(n) = \\Theta(n)$.",
        detail: "The master theorem does not apply — the two subproblems have different sizes, neither of the form $n/b$. Linearity is proved by substitution (see the masters tier): the two subproblem sizes sum to $(1/5 + 7/10)n + 6 = 9n/10 + 6 < n$, and that 10% slack absorbs the linear toll.",
      },
      {
        term: "Engineering notes",
        kind: "insight",
        statement: "The group size 5 is the smallest odd choice that works: with groups of 3 the fractions would be $1/3 + 2/3 = 1$ and the induction collapses. Larger groups (7, 9, …) also work but each group's median costs more comparisons. In practice RANDOMIZED-SELECT wins on constants — SELECT's value is the worst-case guarantee.",
        detail: "Odd group sizes make the median split its group into equal halves (two above, two below), which is what makes the 'three elements per median' count exact. This is the BFPRT algorithm — Blum, Floyd, Pratt, Rivest and Tarjan (1973) — and it remains the canonical example of a deterministic guaranteed-linear selection method.",
      },
      {
        term: "Why groups of 3 fail",
        kind: "theorem",
        statement: "With groups of $3$, the median-of-medians guarantees discarding only $2 \\lceil n/6 \\rceil \\approx n/3$ elements, giving $T(n) \\le T(n/3) + T(2n/3) + O(n) = \\Omega(n \\lg n)$: the two fractions $1/3+2/3 = 1$ do not sum below $1$, so substitution cannot close linearly.",
        detail: "Groups of $5$ give $3n/10$ discarded and fractions $1/5+7/10 = 9/10 < 1$, which is why the linear bound needs odd groups of at least $5$ (even groups need $6$ or more; Exercise 9.3-2).",
      },
    ],
    figures: [
      {
        caption: "Why discarding works: 45 elements in 9 groups of 5, each column sorted with its median in the third row (columns are permuted so the medians appear sorted — the algorithm never permutes; SELECT simply finds their median recursively). The pivot $x$ is the median of the 9 medians. In every column whose median is $\\ge x$ — the shaded five columns — that median and its two larger group-mates are all $\\ge x$: fifteen elements, $3n/10$ of the input, guaranteed above $x$ (and symmetrically below it). Each side of $x$ therefore holds at most $45 - 14 = 31 \\le 7n/10 + 6$ elements: a constant fraction of the data is gone for good at every level of the recursion.",
        afterConcept: 2,
        svg: `<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="A 5 by 9 grid of squares representing groups of five sorted elements; the shaded upper-right quadrant of fifteen squares is guaranteed to be at least the median-of-medians pivot x"><text x="60" y="42" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.8">n = 45 elements in ⌊45/5⌋ = 9 groups of 5 — each column sorted, largest on top</text><g stroke="#14b8a6" stroke-width="1.8"><rect x="244" y="60" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/><rect x="290" y="60" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/><rect x="336" y="60" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/><rect x="382" y="60" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/><rect x="428" y="60" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/><rect x="244" y="106" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/><rect x="290" y="106" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/><rect x="336" y="106" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/><rect x="382" y="106" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/><rect x="428" y="106" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/></g><rect x="244" y="152" width="36" height="36" fill="#14b8a6" fill-opacity="0.55" stroke="#14b8a6" stroke-width="2.5"/><text x="262" y="176" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle">x</text><g stroke="#14b8a6" stroke-width="1.8"><rect x="290" y="152" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/><rect x="336" y="152" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/><rect x="382" y="152" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/><rect x="428" y="152" width="36" height="36" fill="#14b8a6" fill-opacity="0.3"/></g><g stroke="currentColor" stroke-width="1.5"><rect x="60" y="60" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="106" y="60" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="152" y="60" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="198" y="60" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="60" y="106" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="106" y="106" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="152" y="106" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="198" y="106" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="60" y="152" width="36" height="36" fill="currentColor" fill-opacity="0.4"/><rect x="106" y="152" width="36" height="36" fill="currentColor" fill-opacity="0.4"/><rect x="152" y="152" width="36" height="36" fill="currentColor" fill-opacity="0.4"/><rect x="198" y="152" width="36" height="36" fill="currentColor" fill-opacity="0.4"/><rect x="60" y="198" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="106" y="198" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="152" y="198" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="198" y="198" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="244" y="198" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="290" y="198" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="336" y="198" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="382" y="198" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="428" y="198" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="60" y="244" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="106" y="244" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="152" y="244" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="198" y="244" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="244" y="244" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="290" y="244" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="336" y="244" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="382" y="244" width="36" height="36" fill="currentColor" fill-opacity="0.05"/><rect x="428" y="244" width="36" height="36" fill="currentColor" fill-opacity="0.05"/></g><path d="M 480 60 L 474 60 L 474 188 L 480 188" stroke="currentColor" stroke-width="1.5" fill="none"/><text x="492" y="108" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">guaranteed ≥ x:</text><text x="492" y="126" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">3 per column × 5 columns = 15</text><text x="492" y="166" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">the 9 group medians (sorted here</text><text x="492" y="184" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">for the picture); x is their median</text><text x="60" y="308" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8">each side of x holds at most 45 − 14 = 31 ≤ 7n/10 + 6 elements — a constant fraction discarded forever</text></svg>`,
      },
    ],
    examples: [
      {
        title: "SELECT finds the median of 15 elements",
        problem: "Run SELECT for the median ($i = 8$) of $A = \\langle 22, 9, 31, 4, 17, 28, 6, 35, 12, 41, 8, 25, 19, 33, 15 \\rangle$.",
        steps: [
          { label: "Groups and their medians", text: "Contiguous groups of 5: $\\langle 22, 9, 31, 4, 17 \\rangle$ sorts to $\\langle 4, 9, 17, 22, 31 \\rangle$, median 17; $\\langle 28, 6, 35, 12, 41 \\rangle$ sorts to $\\langle 6, 12, 28, 35, 41 \\rangle$, median 28; $\\langle 8, 25, 19, 33, 15 \\rangle$ sorts to $\\langle 8, 15, 19, 25, 33 \\rangle$, median 19." },
          { label: "Median of medians", text: "Recursively SELECT the median of $\\langle 17, 28, 19 \\rangle$ — one group of 3, whose median is 19 — so the pivot is $x = 19$." },
          { label: "Partition around x = 19", text: "Smaller: $\\langle 22? \\, \\dots \\rangle$ — precisely $\\{4, 6, 8, 9, 12, 15, 17\\}$, seven elements; larger: $\\{22, 25, 28, 31, 33, 35, 41\\}$, seven elements; $k = 8$." },
          { label: "Hit the target", text: "$i = 8 = k$: return $x = 19$. (Had we sought $i = 5$, the recursion would continue on the seven smaller elements — each of which is $< 19$.)" },
        ],
        result: "The median of 15 is 19 — verify: sorted, $A = \\langle 4, 6, 8, 9, 12, 15, 17, 19, 22, 25, 28, 31, 33, 35, 41 \\rangle$, and the 8th element is 19. The medians-recursion touched only 3 elements, then 1: $15 \\to 3$ is the $\\lceil n/5 \\rceil$ shrink.",
      },
      {
        title: "Discarding $3n/10$ on 25 elements",
        problem: "SELECT on $n = 25$ (five groups of $5$) guarantees how many elements are discarded, and what are the two recursive sizes?",
        steps: [
          { label: "Medians", text: "Five group medians; $x$ = median of medians. At least $3$ medians are $\\ge x$ (the median's half plus itself), each contributing $3$ elements $\\ge x$: at least $9$ elements $\\ge x$ (similarly $\\le x$)." },
          { label: "Discard", text: "Excluding $x$ itself and the group containing $x$, at least $3n/10 - 6 = 1.5$ rounds to $6$ elements on each side are provably on one side: the recursion keeps at most $25-6 = 19$? Sharply the text bounds the larger side by $7n/10+6 = 23$ for small $n$, tightening to $7n/10$ asymptotically." },
          { label: "Recurrence", text: "Sizes: $\\lceil 25/5 \\rceil = 5$ for the medians recursion and at most $19$ for the selection recursion: $T(25) \\le T(5) + T(19) + O(25)$." },
          { label: "Fractions", text: "$5/25 + 19/25 = 24/25 < 1$: the fractions sum below $1$, so the substitution $T(n) \\le cn$ closes. With groups of $3$ the second term would be $2n/3$ and the sum would hit $1$." },
        ],
        result: "At least $6$ elements discarded per side on $n = 25$; recursions on $5$ and $\\le 19$ keep the fraction sum $9/10 < 1$, the algebraic source of linearity.",
      },
    ],
    keyTakeaways: [
      "SELECT manufactures a good pivot by recursion: the median of the $\\lceil n/5 \\rceil$ group medians lies between the 30th and 70th percentiles of the whole input.",
      "At least $3n/10 - 6$ elements are guaranteed on each side of that pivot, so the main recursion gets at most $7n/10 + 6$ elements — the recurrence $T(n) \\le T(\\lceil n/5 \\rceil) + T(7n/10 + 6) + O(n)$.",
      "The two recursive fractions $1/5 + 7/10 = 9/10 < 1$ are the whole secret — groups of 3 would give $1/3 + 2/3 = 1$ and no linear bound; the full substitution proof is the masters tier below.",
    ],
    quiz: [
      {
        q: "In SELECT, the pivot around which the input is partitioned is:",
        options: [
          "the first element of the array",
          "a uniformly random element",
          "the median of the $\\lceil n/5 \\rceil$ group medians, found recursively",
          "the average of all keys",
        ],
        answer: 2,
        explanation: "Sorting each group of 5 gives ⌈n/5⌉ medians; SELECT is called recursively on just those medians, and their median becomes the pivot x.",
      },
      {
        q: "The guarantee that drives the analysis is that at least $3n/10 - 6$ elements are $\\ge$ the pivot (and as many are $\\le$). Where does the factor 3 come from?",
        options: [
          "groups of 3 elements each",
          "each median that is $\\ge x$ contributes itself plus its two larger group-mates — three elements per median",
          "the three recursive calls of the algorithm",
          "the median of 5 sits three positions from the top of its column",
        ],
        answer: 1,
        explanation: "A group of 5 is internally sorted, so its median has two elements above it: whenever that median is ≥ x, so are its two group-mates — 3 guaranteed elements per qualifying column.",
      },
      {
        q: "Why doesn't the master theorem resolve $T(n) \\le T(\\lceil n/5 \\rceil) + T(7n/10 + 6) + O(n)$?",
        options: [
          "the toll function is not positive",
          "the two subproblems have different sizes — neither is $n/b$ for a single branching factor $b$",
          "the subproblems overlap",
          "SELECT is not a recursive algorithm",
        ],
        answer: 1,
        explanation: "The master theorem's case analysis assumes all subproblems have equal size n/b; unequal recursive sizes require a direct substitution argument instead.",
      },
      {
        q: "If the group size were 3 instead of 5, the two recursive fractions would be $1/3 + 2/3 = 1$. The consequence:",
        options: [
          "the algorithm would still be linear with a worse constant",
          "the substitution fails — $cn/3 + 2cn/3 + an = cn + an$ can never be $\\le cn$",
          "the master theorem would then apply",
          "nothing changes — only the additive 6 in the recurrence grows",
        ],
        answer: 1,
        explanation: "The subproblem sizes must sum to strictly less than n for the linear toll to be absorbed; with fractions summing exactly to 1, no choice of constant c can close the induction.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "The full analysis: why the median of 5 guarantees Θ(n)",
        blocks: [
          {
            kind: "para",
            body: "The recurrence $T(n) \\le T(\\lceil n/5 \\rceil) + T(7n/10 + 6) + O(n)$ is the gateway to one of the most instructive proofs in the book. The master theorem cannot touch it, because the two subproblems have different sizes — neither is $n/b$. What settles it is a **substitution argument with deliberately chosen slack**: guess $T(n) \\le cn$, verify the induction with enough room to absorb both the ceiling on $n/5$ and the additive 6. The proof is worth mastering as a template: it is how analyses of pruned recursions (and later, of many randomized algorithms) are actually written.",
          },
          {
            kind: "theorem",
            heading: "Linearity of SELECT",
            body: "There exist constants $c$ and $n_0$ such that $T(n) \\le cn$ for all $n \\ge 1$, where $T(n) \\le T(\\lceil n/5 \\rceil) + T(7n/10 + 6) + an$ with $an$ the grouping/partitioning toll. Concretely, $c \\ge 20a$ together with $n_0 = 140$ works: for $n \\ge 140$, $T(n) \\le cn$ follows from the induction hypothesis on all smaller arguments.",
          },
          {
            kind: "proof",
            heading: "The discard count: from medians to $7n/10 + 6$",
            body: "Why does the second recursion receive at most $7n/10 + 6$ elements? At least half of the $\\lceil n/5 \\rceil$ group medians are $\\ge x$ (that is what being their median means), so at least $\\lceil \\lfloor n/5 \\rfloor / 2 \\rceil$ of the $\\lfloor n/5 \\rfloor$ full groups have a median $\\ge x$. Two of those groups are discounted — the one containing $x$ itself and the possibly-short final group — leaving at least $\\lceil \\lfloor n/5 \\rfloor / 2 \\rceil - 2 \\ge n/10 - 2$ medians. Each of these has, within its sorted group of 5, two elements $\\ge$ it, hence $\\ge x$: that is $3(n/10 - 2) = 3n/10 - 6$ elements $\\ge x$, strictly greater than $x$ except for ties. By symmetry the same count holds for $\\le x$. The step-5 recursion survives on at most $n - (3n/10 - 6) = 7n/10 + 6$ elements — and CLRS's count is deliberately conservative; the exact integer bookkeeping only improves the constant.",
          },
          {
            kind: "derivation",
            heading: "Choosing $c$ and the magic 140",
            body: "Assume $T(m) \\le cm$ for every $m < n$ and write the toll as $an$. Then\n$$T(n) \\le c\\lceil n/5 \\rceil + c\\,\\Big(\\tfrac{7n}{10} + 6\\Big) + an \\le c\\Big(\\tfrac{n}{5} + 1\\Big) + c\\Big(\\tfrac{7n}{10} + 6\\Big) + an = \\tfrac{9}{10}cn + 7c + an.$$\nThe goal $T(n) \\le cn$ now reduces to the single inequality $7c + an \\le cn/10$, i.e. $c(n/10 - 7) \\ge an$. Two obligations appear: $n > 70$ for the left side to be positive, and $c \\ge 10an/(n - 70)$. The second is most demanding when $n$ is smallest, so take $n \\ge 140$, where it reads $c \\ge 20a$. For the base of the induction, every $n < 140$ is handled by brute force (say insertion sort) at a cost bounded by some constant $d \\cdot 139^2$ — also $\\le cn$ once $c \\ge 139^2 d$. Taking $c$ the maximum of these finitely many requirements completes the induction: **selection is linear in the worst case**, deterministically. The ceiling on $n/5$ cost the $+c$ term, the $+6$ cost another $6c$ — this is precisely why the argument needs $c$ with room to spare, and why the fractions below 1 matter more than any constant.",
          },
          {
            kind: "remark",
            heading: "Why 5 and not 3 or 7",
            body: "The group size $g$ produces fractions $1/g$ (the medians recursion) and $(3g-1)/(4g)$ (the pruned recursion — half of the $n/g$ groups qualify, and each qualifying group quarantines $(g+1)/2$ elements: its median plus everything above it). The induction survives exactly when the two fractions sum below 1. For $g = 3$: $1/3 + 2/3 = 1$ — the toll $an$ has nowhere to hide, and no constant $c$ closes the gap; the recurrence becomes $T(n) \\le T(n/3) + T(2n/3) + \\Theta(n)$, which solves to $\\Theta(n \\lg n)$, so deterministic linear selection with groups of 3 is impossible by this scheme. For $g = 5$: $1/5 + 7/10 = 9/10$ — a 10% margin. For $g = 7$: $1/7 + 5/7 = 6/7$ — an even wider margin, but each group now costs more comparisons to median, so the constant in the toll grows. Five is the smallest **odd** group size that works, and oddness matters: a group of even size has no middle element splitting it into equal halves, weakening the per-median count.",
          },
          {
            kind: "application",
            heading: "The lineage: BFPRT and the comparison-count frontier",
            body: "This algorithm is **BFPRT** — Blum, Floyd, Pratt, Rivest and Tarjan (1973), the paper that introduced both this selection method and the recurrence-splitting style of analysis above. It settled the asymptotic question: selection is linear, deterministically. The *exact* comparison count is a different, still-open frontier: the median of $n$ elements is known to require at least $2n - o(n)$ comparisons (adversary arguments), while the best constructions use about $2.95n$ — BFPRT itself spends roughly $5.4n$. In practice the guarantee is rarely worth its constant: RANDOMIZED-SELECT's expected cost has a tiny constant and its failure probability decays faster than any polynomial, so real libraries ship the randomized (or introspective hybrid) versions. BFPRT earns its keep the other way — as the canonical exhibit that a cleverly manufactured pivot can make a worst-case linear guarantee cheap enough to be real.",
          },
        ],
      },
    ],
  },
]
