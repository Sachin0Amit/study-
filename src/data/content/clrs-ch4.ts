import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition. Chapter 4: Divide-and-
// Conquer. Sections 4.1 (maximum subarray) – 4.6 (proof of the master
// theorem). All worked-example arithmetic verified in /home/z/tmp-14a2.
// ============================================================================

export const clrsCh4Content: SectionContent[] = [
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: "clrs-ch4-s1",
    readingTime: 7,
    intro: "Divide-and-conquer is easiest to appreciate on a problem with an obvious quadratic solution. The maximum-subarray problem — find the contiguous run of numbers with the largest sum — models the investor's question of when to buy and sell one share of stock. Brute force checks every buy/sell pair; divide and conquer wins by noticing that a subarray either avoids the midpoint or crosses it, and that the crossing case can be settled in a single linear scan.",
    objectives: [
      "Transform the buy/sell problem into the maximum-subarray problem on daily price changes",
      "Explain why every subarray is a left-only, right-only, or crossing case, and why only the crossing case needs new machinery",
      "State the FIND-MAX-CROSSING-SUBARRAY procedure and derive the $\\Theta(n \\lg n)$ running time",
    ],
    concepts: [
      {
        term: "From stock prices to maximum subarrays",
        kind: "insight",
        statement: "Suppose we may buy one share on one day and sell it on a later day; a **maximum subarray** of the array $A$ of daily price *changes* identifies the best trading window: buying at the end of day $i$ and selling at the end of day $j$ earns $\\sum_{k=i+1}^{j} A[k]$. The maximum subarray problem: given $A[1 \\ldots n]$ of (positive and negative) numbers, find indices $i \\le j$ maximizing that sum.",
        detail: "Formally the maximum subarray is a nonempty, **contiguous** run $A[i \\ldots j]$. The transformation is legal because selling and re-buying on the same day nets zero, so no optimal strategy needs more than one buy/sell interval — the book's 17-day example reduces to 16 daily changes.",
      },
      {
        term: "The brute-force baseline",
        kind: "method",
        statement: "Try every pair $(i, j)$ with $i \\le j$ — that is $\\binom{n}{2} + n = \\Theta(n^2)$ windows — computing each sum incrementally in $\\Theta(1)$ per extension. Total: $\\Theta(n^2)$. For the book's $n = 16$ example that is already $136$ windows; for a year of trading days ($n = 250$) it is $31{,}375$.",
        detail: "The quadratic baseline is what we must beat: any algorithm doing asymptotically fewer than $\\Theta(n^2)$ window evaluations needs a structural insight, and the midpoint split is the one that works.",
      },
      {
        term: "The three-case divide",
        kind: "insight",
        statement: "Take $A[low \\ldots high]$ and let $mid = \\lfloor (low + high)/2 \\rfloor$. Every subarray of $A[low \\ldots high]$ is in exactly one of three cases: it lies **entirely in** $A[low \\ldots mid]$, entirely in $A[mid+1 \\ldots high]$, or it **crosses the midpoint** (its left end is $\\le mid$ and its right end is $\\ge mid+1$). The first two cases are smaller instances of the same problem; only the third is new.",
        detail: "This trichotomy is complete because position relative to the midpoint is exhaustive: left of it, right of it, or straddling it. A crossing subarray $A[i \\ldots j]$ decomposes as $A[i \\ldots mid]$ glued to $A[mid+1 \\ldots j]$, with *both* pieces nonempty — the decomposition that makes the crossing case tractable.",
      },
      {
        term: "FIND-MAX-CROSSING-SUBARRAY",
        kind: "method",
        statement: "The best crossing subarray is the sum of the **best left suffix** (a run ending exactly at $mid$) and the **best right prefix** (a run starting exactly at $mid+1$). Find each by a single linear scan outward from the midpoint: leftward from $mid$ tracking $left\\text{-}sum$, and rightward from $mid+1$ tracking $right\\text{-}sum$; return the maximizing pair plus the total. Cost: $\\Theta(high - low + 1) = \\Theta(n)$.",
        detail: "Pseudocode shape: `FIND-MAX-CROSSING-SUBARRAY(A, low, mid, high)` keeps `left-sum = -∞`, accumulates `sum` from `i = mid` down to `low`, records `max-left` at the maximum, and symmetrically for the right half; it returns `(max-left, max-right, left-sum + right-sum)`. Then `FIND-MAXIMUM-SUBARRAY` recurses on both halves, calls the crossing routine, and returns the largest of the three sums — three-way max of $(left\\text{-}low, left\\text{-}high, left\\text{-}sum)$, $(right\\text{-}low, \\ldots)$, $(cross\\text{-}low, \\ldots)$.",
      },
      {
        term: "The running time",
        kind: "theorem",
        statement: "The two recursive calls cost $T(\\lfloor n/2 \\rfloor) + T(\\lceil n/2 \\rceil)$ each on half the elements, and the crossing scan plus the three-way max cost $\\Theta(n)$, so $T(n) = 2T(n/2) + \\Theta(n)$, with $T(1) = \\Theta(1)$. Section 4.5 (master theorem, case 2) resolves this to $T(n) = \\Theta(n \\lg n)$.",
        detail: "The recursion bottoms out at size-1 arrays, which are their own maximum subarrays. Exercise 4.1-5 shows an even better *non-divide-and-conquer* solution: a single left-to-right scan keeping the best subarray ending at the current position runs in $\\Theta(n)$ — but the D&C version is the template the chapter is teaching.",
      },
    ],
    figures: [
      {
        caption: "**The crossing case.** Bars are the 16 daily changes of the book's stock example; the dashed line is the midpoint split. The crossing subarray must contain both $A[mid]$ and $A[mid+1]$: the algorithm finds the best left suffix ($A[8..8] = 18$) and the best right prefix ($A[9..11] = 25$) in two linear scans, and their sum $43$ beats the left-only best ($20$) and the right-only best ($25$).",
        svg: `<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="Maximum subarray crossing the midpoint" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><rect x="0" y="0" width="720" height="330" fill="none"/><line x1="30" y1="150" x2="690" y2="150" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="359" y1="34" x2="359" y2="268" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.55"/><text x="343" y="28" font-size="11" fill="currentColor" opacity="0.75">mid</text><text x="180" y="28" font-size="11" fill="currentColor" opacity="0.75">left half A[1..8]</text><text x="470" y="28" font-size="11" fill="currentColor" opacity="0.75">right half A[9..16]</text><rect x="321" y="40" width="155" height="228" fill="currentColor" opacity="0.06"/><g fill="currentColor"><rect x="52" y="91.5" width="30" height="58.5" opacity="0.14"/><rect x="91" y="136.5" width="30" height="13.5" opacity="0.14"/><rect x="130" y="150" width="30" height="112.5" opacity="0.14"/><rect x="169" y="60" width="30" height="90" opacity="0.14"/><rect x="208" y="136.5" width="30" height="13.5" opacity="0.14"/><rect x="247" y="150" width="30" height="72" opacity="0.14"/><rect x="286" y="150" width="30" height="103.5" opacity="0.14"/><rect x="325" y="69" width="30" height="81" opacity="0.4"/><rect x="364" y="60" width="30" height="90" opacity="0.4"/><rect x="403" y="118.5" width="30" height="31.5" opacity="0.4"/><rect x="442" y="96" width="30" height="54" opacity="0.4"/><rect x="481" y="150" width="30" height="22.5" opacity="0.14"/><rect x="520" y="118.5" width="30" height="31.5" opacity="0.14"/><rect x="559" y="82.5" width="30" height="67.5" opacity="0.14"/><rect x="598" y="136.5" width="30" height="13.5" opacity="0.14"/><rect x="637" y="118.5" width="30" height="31.5" opacity="0.14"/></g><g font-size="10" fill="currentColor" text-anchor="middle"><text x="67" y="86">13</text><text x="106" y="168">−3</text><text x="145" y="267">−25</text><text x="184" y="55">20</text><text x="223" y="168">−3</text><text x="262" y="226">−16</text><text x="301" y="258">−23</text><text x="340" y="64">18</text><text x="379" y="55">20</text><text x="418" y="113">−7</text><text x="457" y="91">12</text><text x="496" y="177">−5</text><text x="535" y="113">−22</text><text x="574" y="78">15</text><text x="613" y="168">−4</text><text x="652" y="113">7</text></g><g stroke="currentColor" stroke-width="1.4" fill="none"><path d="M325 288 L325 296 L355 296 L355 288"/><path d="M364 288 L364 296 L472 296 L472 288"/></g><text x="340" y="308" font-size="10.5" fill="currentColor" text-anchor="middle">A[8..8]=18</text><text x="418" y="308" font-size="10.5" fill="currentColor" text-anchor="middle">A[9..11]=25</text><text x="360" y="326" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">crossing subarray A[8..11]: 18 + 25 = 43</text><text x="160" y="272" font-size="10" fill="currentColor" opacity="0.7">best left suffix</text><text x="520" y="272" font-size="10" fill="currentColor" opacity="0.7">best right prefix</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "The book's 17-day stock example, one level deep",
        problem: "Prices are 100, 113, 110, 85, 105, 102, 86, 63, 81, 101, 94, 106, 101, 79, 94, 90, 97 dollars. Find the maximum subarray of the 16 daily changes by one divide step.",
        steps: [
          { label: "Transform", text: "Daily changes: $A = (13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7)$. We need the contiguous run with the largest sum." },
          { label: "Split at mid = 8", text: "Left half $A[1..8]$, right half $A[9..16]$. Any answer avoids or crosses the boundary between positions 8 and 9." },
          { label: "Left-only best", text: "Scanning $A[1..8]$: the best run is $A[4..4] = 20$ (runs like $A[1..4] = 5$ or $A[4..8] = -4$ lose to it)." },
          { label: "Right-only best", text: "Scanning $A[9..16]$: the best run is $A[9..11] = 20 - 7 + 12 = 25$ (next best: $A[14..16] = 18$)." },
          { label: "Crossing scan", text: "Best left suffix ending at 8: $A[8..8] = 18$ (any earlier start drags in $-23, -16, \\ldots$). Best right prefix from 9: $A[9..11] = 25$. Crossing sum $= 18 + 25 = 43$." },
          { label: "Combine", text: "Three-way maximum of $20$, $25$, $43$: the answer is $A[8..11] = 43$ — buy at the end of day 7, sell at the end of day 11." },
        ],
        result: "The crossing case wins at the top level: $A[8..11]$ with $18 + 20 - 7 + 12 = 43$. Recursing would confirm the sub-answers, but the top split already exhibits every case.",
      },
      {
        title: "How much the $\\Theta(n \\lg n)$ saves",
        problem: "Compare the operation counts of brute force and divide-and-conquer for $n = 2^{20} = 1{,}048{,}576$ daily changes.",
        steps: [
          { label: "Brute force windows", text: "$\\binom{n}{2} + n = n(n+1)/2 \\approx 5.5 \\times 10^{11}$ windows, each a constant-time extension — about 550 billion window evaluations." },
          { label: "Divide-and-conquer", text: "$\\Theta(n \\lg n) \\approx 1{,}048{,}576 \\times 20 \\approx 2.1 \\times 10^{7}$ units of work." },
          { label: "The ratio", text: "Roughly $26{,}000\\times$ fewer operations — the same gap that separates a usable algorithm from an unusable one at this input size." },
        ],
        result: "Quadratic-to-linearithmic speedups compound: each doubling of $n$ doubles the D&C work but *quadruples* the brute-force work.",
      },
    ],
    keyTakeaways: [
      "The buy/sell problem becomes maximum subarray by differencing consecutive prices; the optimum is a contiguous run of changes.",
      "The midpoint trichotomy (left-only, right-only, crossing) reduces the problem to two recursive calls plus a linear crossing scan — only the crossing case is new.",
      "$T(n) = 2T(n/2) + \\Theta(n)$ resolves to $\\Theta(n \\lg n)$; a still simpler $\\Theta(n)$ one-pass algorithm exists (Exercise 4.1-5), but the pattern generalizes where it cannot.",
    ],
    quiz: [
      {
        q: "Why does maximizing the sum of daily price *changes* solve the buy/sell problem?",
        options: [
          "because changes are always positive over the best window",
          "because profit from buying after day $i$ and selling after day $j$ telescopes to $\\sum_{k=i+1}^{j} A[k]$, and re-buying the same day nets zero",
          "because the price array itself is always increasing",
          "because every subarray of changes corresponds to a valid sequence of multiple trades",
        ],
        answer: 1,
        explanation: "The telescoping sum of changes between two days is exactly the trading profit, and same-day sell/re-buy contributes zero, so one interval suffices — no strategy beats the best single interval.",
      },
      {
        q: "In FIND-MAXIMUM-SUBARRAY on $A[low \\ldots high]$ with $mid = \\lfloor(low+high)/2\\rfloor$, a crossing subarray must contain:",
        options: [
          "only elements strictly left of $mid$",
          "the elements $A[mid]$ and $A[mid+1]$",
          "exactly one element",
          "every element between its endpoints except $mid$",
        ],
        answer: 1,
        explanation: "Crossing means the left end $\\le mid$ and the right end $\\ge mid+1$, so both boundary elements are present — which is why the crossing case decomposes into a suffix ending at $mid$ plus a prefix starting at $mid+1$.",
      },
      {
        q: "The crossing scan costs $\\Theta(n)$ because:",
        options: [
          "it must check all $\\Theta(n^2)$ windows that cross the midpoint",
          "it recurses on both halves simultaneously",
          "it is one leftward scan from $mid$ plus one rightward scan from $mid+1$, each touching each element once",
          "the midpoint is found by sorting the array first",
        ],
        answer: 2,
        explanation: "Only two maximal runs are needed — the best suffix ending at $mid$ and the best prefix starting at $mid+1$ — and each is found by a single accumulation sweep, linear in the segment length.",
      },
      {
        q: "For the book's 16-element change array with midpoint after position 8, the three competing values at the top level are:",
        options: [
          "left $13$, crossing $43$, right $7$",
          "left $20$, right $25$, crossing $43$",
          "left $25$, right $20$, crossing $18$",
          "left $43$, right $20$, crossing $25$",
        ],
        answer: 1,
        explanation: "Left-only best is $A[4..4] = 20$; right-only best is $A[9..11] = 25$; the crossing candidate is $18 + 25 = 43$, which wins.",
      },
    ],
  },

  // ---------------------------------------------------------------- 4.2
  {
    sectionId: "clrs-ch4-s2",
    readingTime: 8,
    intro: "Matrix multiplication looks irreducibly cubic: each of the $n^2$ entries of $C = AB$ seems to need $n$ multiply-adds. The obvious divide-and-conquer — split into quadrants, multiply the eight pairs of half-size blocks — is still $\\Theta(n^3)$, because the exponent $\\log_2 8 = 3$ exactly restores the cubic. Strassen's 1969 insight is that eight block products are algebraically wasteful: seven suffice, shaving the exponent to $\\lg 7 \\approx 2.807$ and opening the door to half a century of sub-cubic matrix algorithms.",
    objectives: [
      "Derive the block-recurrence for straightforward divide-and-conquer multiplication and see why it gains nothing",
      "Write out Strassen's ten sums $S_1 \\ldots S_{10}$, seven products $P_1 \\ldots P_7$, and the assembly of the four quadrants of $C$",
      "Analyze $T(n) = 7T(n/2) + \\Theta(n^2)$ and explain the practical crossover behavior",
    ],
    concepts: [
      {
        term: "The Θ(n³) baseline",
        kind: "method",
        statement: "By definition $C_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$ for $i, j = 1, \\ldots, n$. SQUARE-MATRIX-MULTIPLY computes all $n^2$ entries, each a dot product of length $n$: $\\Theta(n^3)$ scalar multiplications and additions. This is the classical algorithm everyone executes by hand.",
        detail: "The output alone has $n^2$ entries, so any algorithm is $\\Omega(n^2)$ — the cubic baseline leaves an enormous gap between what is written and what must be written, which is precisely the gap Strassen attacks.",
      },
      {
        term: "A straightforward divide-and-conquer (that fails)",
        kind: "method",
        statement: "View $A, B, C$ as $2 \\times 2$ block matrices with $(n/2) \\times (n/2)$ blocks. The block identities hold exactly: $C_{11} = A_{11}B_{11} + A_{12}B_{21}$, $C_{12} = A_{11}B_{12} + A_{12}B_{22}$, $C_{21} = A_{21}B_{11} + A_{22}B_{21}$, $C_{22} = A_{21}B_{12} + A_{22}B_{22}$. That is **8 recursive multiplications** plus $\\Theta(n^2)$ block additions, giving $T(n) = 8T(n/2) + \\Theta(n^2) = \\Theta(n^{\\lg 8}) = \\Theta(n^3)$.",
        detail: "Since $\\lg 8 = 3$ exactly, the recurrence's leaf count $8^{\\lg n} = n^3$ matches the classical count: the split merely reshuffles the same cubic work. A divide-and-conquer helps only if the *number of recursive multiplications* drops below $b^{\\omega}$ where $\\omega$ is the target exponent.",
      },
      {
        term: "Strassen's step: trade multiplies for adds",
        kind: "insight",
        statement: "Strassen replaces the 8 products by **7**, paying with 10 half-size matrix additions/subtractions and 8 more to assemble $C$. Because additions cost only $\\Theta(n^2)$ — a factor $n$ cheaper than multiplications at scale — the trade is asymptotically worth it: $T(n) = 7T(n/2) + \\Theta(n^2)$, and since $\\lg 7 \\approx 2.807 < 2 + \\varepsilon$-worth of room below 3, the additions are absorbed.",
        detail: "The block identities above are not the only way to combine products: matrix multiplication has algebraic slack, exactly as integer multiplication does for Karatsuba's trick (which drops $4$ sub-products to $3$). Strassen's formulas are one particular non-obvious regrouping that provably works.",
      },
      {
        term: "The Strassen recipe",
        kind: "method",
        statement: "Form ten $(n/2) \\times (n/2)$ sums: $S_1 = B_{12} - B_{22}$, $S_2 = A_{11} + A_{12}$, $S_3 = A_{21} + A_{22}$, $S_4 = B_{21} - B_{11}$, $S_5 = A_{11} + A_{22}$, $S_6 = B_{11} + B_{22}$, $S_7 = A_{12} - A_{22}$, $S_8 = B_{21} + B_{22}$, $S_9 = A_{11} - A_{21}$, $S_{10} = B_{11} + B_{12}$. Multiply seven pairs: $P_1 = A_{11}S_1$, $P_2 = S_2 B_{22}$, $P_3 = S_3 B_{11}$, $P_4 = A_{22}S_4$, $P_5 = S_5 S_6$, $P_6 = S_7 S_8$, $P_7 = S_9 S_{10}$. Then $C_{11} = P_5 + P_4 - P_2 + P_6$, $C_{12} = P_1 + P_2$, $C_{21} = P_3 + P_4$, $C_{22} = P_5 + P_1 - P_3 - P_7$.",
        detail: "Each $P_k$ is one recursive multiplication of $(n/2) \\times (n/2)$ matrices; the $S$'s and the final assembly are $\\Theta(n^2)$ additions/subtractions. The four identities for the quadrants of $C$ can be checked by expanding — see the worked example, which verifies all four on a concrete $2 \\times 2$ instance.",
      },
      {
        term: "Analysis and the practical crossover",
        kind: "theorem",
        statement: "$T(n) = 7T(n/2) + \\Theta(n^2)$ solves (master theorem, case 1: $n^{\\lg 7}$ dominates $n^2$ since $\\lg 7 \\approx 2.807 > 2$) to $T(n) = \\Theta(n^{\\lg 7}) \\approx \\Theta(n^{2.807})$. For $n = 1024$: $1024^3 \\approx 1.07 \\times 10^9$ versus $1024^{\\lg 7} \\approx 2.82 \\times 10^8$ multiplications — a factor of $3.8$; for $n = 2^{20}$ the factor is about $14.4$.",
        detail: "In practice Strassen only wins beyond a crossover size (often $n$ in the tens to hundreds on real hardware) because of constants, memory traffic, and numerical stability — implementations switch to the classical method below a threshold $n_0$ (Exercise 4.2-2 asks how to keep the method working for odd $n$ by padding). The best known exponents keep dropping: $\\omega < 2.373$ today, against the trivial lower bound $\\Omega(n^2)$ — where the true barrier sits is an open problem.",
      },
    ],
    figures: [
      {
        caption: "**Strassen's split.** $A$ and $B$ are viewed as $2\\times2$ block matrices; ten half-size sums $S_1\\ldots S_{10}$ feed **seven** recursive products $P_1\\ldots P_7$ (each a multiplication of $(n/2)\\times(n/2)$ matrices), and eight additions/subtractions assemble the four quadrants of $C$. The count $8 \\to 7$ is the entire asymptotic gain: $T(n) = 7T(n/2) + \\Theta(n^2) = \\Theta(n^{\\lg 7}) \\approx \\Theta(n^{2.81})$.",
        svg: `<svg viewBox="0 0 720 440" width="100%" role="img" aria-label="Strassen 7-product block decomposition" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><text x="95" y="42" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">A</text><g stroke="currentColor" stroke-width="1.4" fill="currentColor"><rect x="36" y="52" width="56" height="56" fill="none"/><rect x="98" y="52" width="56" height="56" fill="none"/><rect x="36" y="114" width="56" height="56" fill="none"/><rect x="98" y="114" width="56" height="56" fill="none"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="64" y="84">A₁₁</text><text x="126" y="84">A₁₂</text><text x="64" y="146">A₂₁</text><text x="126" y="146">A₂₂</text></g><text x="95" y="242" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">B</text><g stroke="currentColor" stroke-width="1.4" fill="none"><rect x="36" y="252" width="56" height="56"/><rect x="98" y="252" width="56" height="56"/><rect x="36" y="314" width="56" height="56"/><rect x="98" y="314" width="56" height="56"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="64" y="284">B₁₁</text><text x="126" y="284">B₁₂</text><text x="64" y="346">B₂₁</text><text x="126" y="346">B₂₂</text></g><path d="M162 130 L214 130" stroke="currentColor" stroke-width="1.3" opacity="0.6"/><path d="M162 330 L214 330" stroke="currentColor" stroke-width="1.3" opacity="0.6"/><text x="188" y="122" font-size="10" fill="currentColor" opacity="0.75" text-anchor="middle">10 sums</text><text x="188" y="348" font-size="10" fill="currentColor" opacity="0.75" text-anchor="middle">S₁…S₁₀</text><g stroke="currentColor" stroke-width="1.1" fill="currentColor" opacity="0.9"><rect x="220" y="30" width="250" height="40" rx="7" fill="currentColor" fill-opacity="0.05"/><rect x="220" y="86" width="250" height="40" rx="7" fill="currentColor" fill-opacity="0.05"/><rect x="220" y="142" width="250" height="40" rx="7" fill="currentColor" fill-opacity="0.05"/><rect x="220" y="198" width="250" height="40" rx="7" fill="currentColor" fill-opacity="0.05"/><rect x="220" y="254" width="250" height="40" rx="7" fill="currentColor" fill-opacity="0.05"/><rect x="220" y="310" width="250" height="40" rx="7" fill="currentColor" fill-opacity="0.05"/><rect x="220" y="366" width="250" height="40" rx="7" fill="currentColor" fill-opacity="0.05"/></g><g font-size="11.5" fill="currentColor"><text x="232" y="55">P₁ = A₁₁·(B₁₂ − B₂₂)</text><text x="232" y="111">P₂ = (A₁₁ + A₁₂)·B₂₂</text><text x="232" y="167">P₃ = (A₂₁ + A₂₂)·B₁₁</text><text x="232" y="223">P₄ = A₂₂·(B₂₁ − B₁₁)</text><text x="232" y="279">P₅ = (A₁₁ + A₂₂)·(B₁₁ + B₂₂)</text><text x="232" y="335">P₆ = (A₁₂ − A₂₂)·(B₂₁ + B₂₂)</text><text x="232" y="391">P₇ = (A₁₁ − A₂₁)·(B₁₁ + B₁₂)</text></g><path d="M476 218 L532 218" stroke="currentColor" stroke-width="1.3" opacity="0.6"/><text x="504" y="206" font-size="10" fill="currentColor" opacity="0.75" text-anchor="middle">8 adds</text><text x="616" y="140" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">C</text><g stroke="currentColor" stroke-width="1.4" fill="none"><rect x="540" y="150" width="72" height="64"/><rect x="620" y="150" width="72" height="64"/><rect x="540" y="222" width="72" height="64"/><rect x="620" y="222" width="72" height="64"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="576" y="178">C₁₁ = P₅+P₄</text><text x="576" y="194">−P₂+P₆</text><text x="656" y="178">C₁₂ = P₁+P₂</text><text x="576" y="250">C₂₁ = P₃+P₄</text><text x="656" y="242">C₂₂ = P₅+P₁</text><text x="656" y="258">−P₃−P₇</text></g><text x="360" y="428" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">7 recursive multiplications of half-size blocks + Θ(n²) additions</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Verifying Strassen on a 2×2 instance",
        problem: "Multiply $A = \\begin{pmatrix} 1 & 3 \\\\ 7 & 5 \\end{pmatrix}$ by $B = \\begin{pmatrix} 6 & 8 \\\\ 4 & 2 \\end{pmatrix}$ with Strassen's formulas and check against the definition.",
        steps: [
          { label: "The ten sums", text: "$S_1 = 8 - 2 = 6$; $S_2 = 1 + 3 = 4$; $S_3 = 7 + 5 = 12$; $S_4 = 4 - 6 = -2$; $S_5 = 1 + 5 = 6$; $S_6 = 6 + 2 = 8$; $S_7 = 3 - 5 = -2$; $S_8 = 4 + 2 = 6$; $S_9 = 1 - 7 = -6$; $S_{10} = 6 + 8 = 14$." },
          { label: "The seven products", text: "$P_1 = 1 \\cdot 6 = 6$; $P_2 = 4 \\cdot 2 = 8$; $P_3 = 12 \\cdot 6 = 72$; $P_4 = 5 \\cdot (-2) = -10$; $P_5 = 6 \\cdot 8 = 48$; $P_6 = (-2) \\cdot 6 = -12$; $P_7 = (-6) \\cdot 14 = -84$. Seven scalar multiplications — one fewer than the classical eight." },
          { label: "Assemble C", text: "$C_{11} = 48 + (-10) - 8 + (-12) = 18$; $C_{12} = 6 + 8 = 14$; $C_{21} = 72 + (-10) = 62$; $C_{22} = 48 + 6 - 72 - (-84) = 66$." },
          { label: "Check by the definition", text: "$C_{11} = 1\\cdot6 + 3\\cdot4 = 18$; $C_{12} = 1\\cdot8 + 3\\cdot2 = 14$; $C_{21} = 7\\cdot6 + 5\\cdot4 = 62$; $C_{22} = 7\\cdot8 + 5\\cdot2 = 66$. All four quadrants agree." },
        ],
        result: "$C = \\begin{pmatrix} 18 & 14 \\\\ 62 & 66 \\end{pmatrix}$ — the seven-product schedule reproduces the classical product exactly. (On this tiny instance the classical method does *less* total arithmetic: the win is asymptotic, not constant-factor.)",
      },
      {
        title: "Counting the asymptotic win",
        problem: "How many scalar multiplications does Strassen's recursion perform for $n = 2^{10}$ and $n = 2^{20}$, against the classical $n^3$?",
        steps: [
          { label: "Classical", text: "$(2^{10})^3 = 2^{30} \\approx 1.074 \\times 10^9$; $(2^{20})^3 = 2^{60} \\approx 1.153 \\times 10^{18}$." },
          { label: "Strassen's leaf count", text: "$T(n) = 7T(n/2) + \\Theta(n^2)$ has $7^{\\lg n} = n^{\\lg 7}$ leaf multiplications: $2^{10 \\cdot 2.807} \\approx 2.82 \\times 10^8$ and $2^{56.15} \\approx 7.99 \\times 10^{16}$." },
          { label: "Ratios", text: "About $3.8\\times$ fewer at $n = 1024$ and $14.4\\times$ fewer at $n \\approx 10^6$ — every doubling of $n$ multiplies Strassen's advantage by $2^{3 - \\lg 7} \\approx 1.48$." },
        ],
        result: "The exponent gap $3 - \\lg 7 \\approx 0.19$ compounds exponentially: shaving a recurrence's branching factor is worth far more than any constant-factor tuning.",
      },
    ],
    keyTakeaways: [
      "Straightforward block recursion does $8$ half-size multiplications, giving $T(n) = 8T(n/2) + \\Theta(n^2) = \\Theta(n^3)$ — no asymptotic gain, because $\\lg 8 = 3$.",
      "Strassen's ten sums and seven products compute $C$ with $T(n) = 7T(n/2) + \\Theta(n^2) = \\Theta(n^{\\lg 7}) \\approx \\Theta(n^{2.81})$; the $\\Theta(n^2)$ addition overhead is absorbed by the case-1 domination of $n^{\\lg 7}$.",
      "The win is asymptotic: below a machine-dependent crossover, classical multiplication is faster, and implementations hybridize (padding to even sizes where needed).",
    ],
    quiz: [
      {
        q: "For the straightforward divide-and-conquer matrix multiply, $T(n) = 8T(n/2) + \\Theta(n^2)$ resolves to:",
        options: [
          "$\\Theta(n^2 \\lg n)$",
          "$\\Theta(n^3)$, because $\\lg 8 = 3$",
          "$\\Theta(n^{\\lg 7})$",
          "$\\Theta(n^4)$",
        ],
        answer: 1,
        explanation: "Case 1 of the master theorem: $n^{\\lg 8} = n^3$ dominates $n^2$, so the recursion is $\\Theta(n^3)$ — the block split only redistributes the classical cubic work.",
      },
      {
        q: "In Strassen's method, the product $P_5$ is defined as:",
        options: [
          "$(A_{12} - A_{22})(B_{21} + B_{22})$",
          "$(A_{11} - A_{21})(B_{11} + B_{12})$",
          "$(A_{11} + A_{22})(B_{11} + B_{22})$",
          "$A_{22}(B_{21} - B_{11})$",
        ],
        answer: 2,
        explanation: "$P_5 = S_5 S_6$ with $S_5 = A_{11} + A_{22}$ and $S_6 = B_{11} + B_{22}$ — the only product built from two sum-matrices on both sides; option (a) is $P_6$, (b) is $P_7$, (d) is $P_4$.",
      },
      {
        q: "The quadrant of $C$ assembled as $P_5 + P_1 - P_3 - P_7$ is:",
        options: [
          "$C_{11}$",
          "$C_{12}$",
          "$C_{21}$",
          "$C_{22}$",
        ],
        answer: 3,
        explanation: "$C_{22} = P_5 + P_1 - P_3 - P_7$. Contrast $C_{11} = P_5 + P_4 - P_2 + P_6$ — the only quadrant needing four products.",
      },
      {
        q: "Why do Strassen's extra additions not spoil the speedup?",
        options: [
          "they are done on scalars, not matrices",
          "there are only $O(\\lg n)$ of them per level",
          "they total $\\Theta(n^2)$ per level, and $n^2 = O(n^{\\lg 7 - \\varepsilon})$ since $\\lg 7 \\approx 2.807 > 2$",
          "matrix addition is $\\Theta(1)$",
        ],
        answer: 2,
        explanation: "Each level's 18 additions of half-size blocks cost $\\Theta(n^2)$, polynomially smaller than $n^{\\lg 7}$ — case 1 of the master theorem absorbs them into $\\Theta(n^{\\lg 7})$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 4.3
  {
    sectionId: "clrs-ch4-s3",
    readingTime: 7,
    intro: "The substitution method solves a recurrence by pure induction: guess a form, then verify it with explicit constants. Its power is that it needs no structure beyond the recurrence itself — but its dangers are equally famous. A guess that is too weak makes the induction 'slip' by a lower-order term; asymptotic notation smuggles in constants that vary with $n$; and some recurrences only yield after a change of variables or after the guess is deliberately strengthened. Mastering these repairs is the real content of this section.",
    objectives: [
      "Execute the guess–verify–adjust loop of the substitution method with explicit constants",
      "Diagnose a slipping induction and repair it by strengthening the inductive hypothesis",
      "Solve recurrences with non-polynomial subproblem sizes, such as $T(n) = 2T(\\sqrt{n}) + \\lg n$, by changing variables",
    ],
    concepts: [
      {
        term: "The substitution method",
        kind: "method",
        statement: "**Guess** the form of the solution, then **verify by induction**: show $T(n) \\le c\\,g(n)$ for all $n \\ge n_0$ by substituting the inductive hypothesis $T(\\lfloor n/b \\rfloor) \\le c\\,g(\\lfloor n/b \\rfloor)$ into the recurrence. The constants $c, n_0$ are chosen *after* the algebra — exactly the shape of an $O$-bound proof from Chapter 3, but applied to a recursively defined function.",
        detail: "Strengths: it works on recurrences no other method touches, and once the guess is right the proof is routine. Weaknesses: no general procedure for finding the guess — similarity to known recurrences, recursion trees (Section 4.4), and loose upper bounds to start all help.",
      },
      {
        term: "When the induction slips",
        kind: "insight",
        statement: "Try to prove $T(n) = 2T(\\lfloor n/2 \\rfloor) + n = O(n)$: the hypothesis gives $T(n) \\le 2c\\lfloor n/2 \\rfloor + n \\le cn + n$ — the bound slips by an extra $+n$ that no choice of $c$ absorbs. **The slip is genuine**: the recurrence's true growth is $\\Theta(n \\lg n)$, so $O(n)$ is simply false. A failed induction is evidence the guess is too small.",
        detail: "This is not a proof technique failing; it is a proof technique *reporting* that the claim is wrong. When the residual is a lower-order term, the standard repair is the next concept; when the residual is same-order, the guess was wrong outright.",
      },
      {
        term: "Strengthen the inductive hypothesis",
        kind: "method",
        statement: "The repair: prove something *stronger* that closes the algebraic gap — e.g. $T(n) \\le c n \\lg n$: then $T(n) \\le 2c\\tfrac{n}{2}\\lg\\tfrac{n}{2} + n = cn\\lg n - cn + n \\le cn\\lg n$ exactly when $c \\ge 1$. Paradoxically, proving a stronger statement can be *easier*, because the inductive hypothesis you get to use is stronger too.",
        detail: "A complementary trick for guesses that slip by a constant: subtract a low-order term from the guess, e.g. prove $T(n) \\le c_1 n^2 - c_2 n$; the $-c_2 n$ headroom absorbs exactly the kind of additive residual that broke the plain $c_1 n^2$ guess. The book's moral: whenever the induction won't close, make the hypothesis do more work, not less.",
      },
      {
        term: "Changing variables",
        kind: "method",
        statement: "Recurrences with non-polynomial arguments succumb to renaming. For $T(n) = 2T(\\sqrt{n}) + \\lg n$, set $m = \\lg n$ and define $S(m) = T(2^m)$: since $\\sqrt{n} = 2^{m/2}$ and $\\lg n = m$, the recurrence becomes $S(m) = 2S(m/2) + m$ — the merge-sort shape! So $S(m) = O(m \\lg m)$, and translating back, $T(n) = O(\\lg n \\cdot \\lg \\lg n)$.",
        detail: "The rename must be *invertible* ($n \\leftrightarrow 2^m$ covers exactly the same instances when $n$ is a power of 2, with rounding handled by monotonicity). This trick converts wild-looking recurrences into canonical ones the chapter already knows.",
      },
      {
        term: "The asymptotic-notation trap",
        kind: "insight",
        statement: "Never induct through anonymous $O$-terms: writing `$T(n) \\le 2 \\cdot O(n/2) + n = O(n)$` is meaningless, because the hidden constant in $O(n/2)$ may depend on $n$ exactly where the proof needs it fixed. Substitution proofs must carry **explicit constants** $c$ and $n_0$, verifying the boundary cases $T(n_0), T(n_0+1)$ directly rather than waving at 'small $n$'.",
        detail: "This is the same discipline as Chapter 3's warning that each anonymous function symbol denotes one function: inside an induction the constant must stay constant across every use of the hypothesis, for all $n \\ge n_0$ simultaneously.",
      },
    ],
    examples: [
      {
        title: "A complete substitution proof: $T(n) = 2T(n/2) + n$",
        problem: "Let $T(n) = 2T(n/2) + n$ for powers of 2, with $T(1) = 1$. Prove $T(n) \\le 2n \\lg n$ for all $n \\ge 2$.",
        steps: [
          { label: "Guess and choose constants", text: "Guess $O(n \\lg n)$ with the explicit form $T(n) \\le c\\,n\\lg n$. The inductive step (below) forces $c \\ge 1$; the base case $n = 2$: $T(2) = 2T(1) + 2 = 4$ needs $4 \\le c \\cdot 2 \\cdot 1$, i.e. $c \\ge 2$. Take $c = 2$, $n_0 = 2$." },
          { label: "Inductive step", text: "For $n \\ge 4$ even, $T(n) = 2T(n/2) + n \\le 2c\\tfrac{n}{2}\\lg\\tfrac{n}{2} + n = cn(\\lg n - 1) + n = cn\\lg n - (c - 1)n \\le cn\\lg n$ since $c \\ge 1$." },
          { label: "Numeric spot-check", text: "The recurrence itself yields $T(2) = 4$, $T(4) = 12$, $T(8) = 32$, $T(16) = 80$; the bound $2n\\lg n$ gives $4, 16, 48, 128$ — valid at every power of 2, tight at $n = 2$." },
          { label: "Why the stronger guess", text: "The naive $O(n)$ guess gives $T(n) \\le 2c\\tfrac{n}{2} + n = (c+1)n$ — never $\\le cn$. The multiplicative $\\lg n$ is exactly what the recurrence manufactures; the proof confirms it." },
        ],
        result: "$T(n) = O(n \\lg n)$ with witnesses $c = 2$, $n_0 = 2$; the same induction with floors ($2T(\\lfloor n/2 \\rfloor) + n$) goes through because $\\lfloor n/2 \\rfloor \\le n/2$ only *shrinks* the hypothesis usage.",
      },
      {
        title: "Change of variables, verified numerically",
        problem: "Estimate $T(n) = 2T(\\sqrt{n}) + \\lg n$ (powers of 4, $T(2) = 1$) at $n = 65536$ and confirm the $O(\\lg n \\lg \\lg n)$ analysis.",
        steps: [
          { label: "Rename", text: "With $m = \\lg n$, $S(m) = 2S(m/2) + m$ — merge-sort shape — so $S(m) = O(m \\lg m)$, i.e. $T(n) = O(\\lg n \\cdot \\lg \\lg n)$." },
          { label: "Unroll exactly", text: "$T(4) = 2T(2) + 2 = 4$; $T(16) = 2T(4) + 4 = 12$; $T(256) = 2T(16) + 8 = 32$; $T(65536) = 2T(256) + 16 = 80$." },
          { label: "Compare with the bound", text: "At $n = 65536$: $\\lg n = 16$, $\\lg \\lg n = 4$, so the bound's shape gives $16 \\cdot 4 = 64$ — the true value $80$ fits with constant $c = 2$ ($128 \\ge 80$)." },
        ],
        result: "$T(n) = \\Theta(\\lg n \\lg \\lg n)$: the square-root recursion is dramatically shallower than a halving recursion — only $\\lg \\lg n$ levels deep.",
      },
    ],
    keyTakeaways: [
      "Substitution = guess + induction with explicit constants; the guess comes from heuristics (known recurrences, trees), the verification is pure algebra.",
      "A slipping induction signals a wrong (too weak) guess; repair by strengthening the hypothesis or subtracting a low-order term — stronger hypotheses give you more to work with, not less.",
      "Change of variables ($m = \\lg n$) turns $\\sqrt{n}$-recurrences into ordinary halving recurrences; never carry anonymous $O$-constants through an induction.",
    ],
    quiz: [
      {
        q: "In the inductive step for $T(n) = 2T(n/2) + n \\le cn\\lg n$, the algebra reduces to requiring:",
        options: [
          "$c \\ge 2$ only",
          "$c \\ge 1$, since $cn\\lg n - cn + n \\le cn\\lg n$ exactly when $n \\le cn$",
          "$n_0 \\ge 4$ only",
          "no condition at all",
        ],
        answer: 1,
        explanation: "After substituting, the residual is $-(c-1)n$: it is nonpositive iff $c \\ge 1$. The separate base-case check may still force a larger $c$ (here $c = 2$ from $T(2)$).",
      },
      {
        q: "The guess $T(n) = O(n)$ for $T(n) = 2T(\\lfloor n/2 \\rfloor) + n$ fails because:",
        options: [
          "the floor function makes the recurrence undefined",
          "substitution yields $T(n) \\le cn + n$, a residual no constant absorbs — and indeed $T(n) = \\Omega(n \\lg n)$",
          "$O(n)$ guesses are never correct for divide-and-conquer",
          "the induction is on the wrong variable",
        ],
        answer: 1,
        explanation: "The residual $+n$ is same-order, so the guess cannot close; it is genuinely false, since the recurrence produces the extra $\\lg n$ factor of merge sort.",
      },
      {
        q: "The change of variable that tames $T(n) = 2T(\\sqrt{n}) + \\lg n$ is:",
        options: [
          "$m = \\sqrt{n}$, giving $S(m) = 2S(m/2) + m$",
          "$m = \\lg n$, giving $S(m) = 2S(m/2) + m$",
          "$m = n/2$, giving $S(m) = 2S(\\sqrt{m}) + \\lg m$",
          "$m = \\lg \\lg n$, giving $S(m) = 2S(m-1) + 2^m$",
        ],
        answer: 1,
        explanation: "Writing $n = 2^m$ turns $\\sqrt{n} = 2^{m/2}$ into a halving of $m$ and $\\lg n$ into $m$: the canonical $S(m) = 2S(m/2) + m$, solved by $\\Theta(m \\lg m)$, i.e. $\\Theta(\\lg n \\lg \\lg n)$.",
      },
      {
        q: "Which practice is *forbidden* in a substitution proof?",
        options: [
          "choosing $c$ larger to satisfy base cases",
          "strengthening the inductive hypothesis to $T(n) \\le c_1 n^2 - c_2 n$",
          "writing $T(n) \\le 2 \\cdot O(n/2) + n = O(n)$ with anonymous constants inside the induction",
          "proving the bound only for $n \\ge n_0$ and checking smaller $n$ by hand",
        ],
        answer: 2,
        explanation: "Anonymous $O$-constants may depend on $n$, which is precisely what an induction cannot tolerate — every use of the hypothesis needs one fixed $c$ for all $n \\ge n_0$.",
      },
      // PYQ-pattern — substitution recurrence evaluated (rephrased, values changed)
      {
        q: "Let $T(1) = 1$ and $T(n) = 2T(\\frac{n}{2}) + n$ for exact powers of two. Then $T(8)$ equals:",
        options: ["$32$", "$24$", "$40$", "$16$"],
        answer: 0,
        explanation: "Step 1 — Given: base $T(1) = 1$ and $T(n) = 2T(\\frac{n}{2}) + n$. Step 2 — Governing method: unroll level by level, the substitution guess $O(n\\lg n)$ made exact at $n = 8$. Step 3 — Computation: $T(2) = 2 \\times 1 + 2 = 4$; $T(4) = 2 \\times 4 + 4 = 12$; $T(8) = 2 \\times 12 + 8 = 32$. Step 4 — Sanity check: the three internal depths cost $8$, $8$ and $8$ while the eight leaves add $8$, totalling $32 = 8 \\times 3 + 8$, matching $n\\lg n + n$. Step 5 — Distractor analysis: $24$ is $n\\lg n$ alone without the additive $n$, $16$ is $2n$, and $40$ adds an extra level. Step 6 — Conclude: $T(8) = 32$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 4.4
  {
    sectionId: "clrs-ch4-s4",
    readingTime: 7,
    intro: "The recursion-tree method turns a recurrence into a picture: each node is the cost of one subproblem, each level of the tree is summed, and the total is read off as a sum over levels. It is the intuition engine of recurrence solving — it produces the guesses the substitution method then proves, and it handles lopsided recurrences like $T(n) = T(n/3) + T(2n/3) + n$ that the master theorem refuses to touch.",
    objectives: [
      "Construct a recursion tree with per-node cost, node count, and per-level total for a given recurrence",
      "Sum levels of geometrically decaying trees such as $T(n) = 3T(n/4) + cn^2$",
      "Analyze uneven trees where subproblems shrink at different rates, and state when the tree needs substitution as a backstop",
    ],
    concepts: [
      {
        term: "The recursion tree",
        kind: "method",
        statement: "A recursion tree for $T(n) = aT(n/b) + f(n)$ has a root costing $f(n)$; each of the $a$ children is the tree of $T(n/b)$, so **depth $i$ holds $a^i$ nodes of cost $f(n/b^i)$** (in the balanced case). The method sums three columns per level — per-node cost, node count, and per-level total — then adds the level totals plus the leaves: $T(n) = \\sum_i (\\text{level-}i\\text{ total}) + (\\text{leaf costs})$.",
        detail: "For $T(n) = 2T(n/2) + cn$ every level totals $2^i \\cdot c\\,n/2^i = cn$ for $\\lg n$ levels, giving $\\Theta(n \\lg n)$ — the tree makes the source of the log factor visible: a *constant* per-level cost times a logarithmic number of levels.",
      },
      {
        term: "A geometric tree: $T(n) = 3T(n/4) + cn^2$",
        kind: "method",
        statement: "Depth $i$ has $3^i$ nodes of cost $c(n/4^i)^2$, so level $i$ totals $3^i \\cdot c\\,n^2/16^i = (3/16)^i cn^2$ — a **geometrically decaying** profile. The internal cost sums to $cn^2 \\sum_{i \\ge 0} (3/16)^i = \\tfrac{16}{13}cn^2 \\approx 1.23\\,cn^2$; the $3^{\\lg_4 n} = n^{\\lg_4 3} \\approx n^{0.79}$ leaves add only $O(n^{0.79})$. Hence $T(n) = \\Theta(n^2)$.",
        detail: "Level 1 alone is $\\tfrac{3}{16}cn^2 \\approx 0.19\\,cn^2$, level 2 is $(\\tfrac{3}{16})^2 cn^2 = \\tfrac{9}{256}cn^2 \\approx 0.035\\,cn^2$: each level is $16/3$ times cheaper than its parent — the root dwarfs everything below, and the root's cost $cn^2$ is a witness for the $\\Omega$ side.",
      },
      {
        term: "An uneven tree: $T(n) = T(n/3) + T(2n/3) + n$",
        kind: "insight",
        statement: "Here children shrink at different rates, so leaves appear at different depths — from $\\lg_3 n$ (leftmost path) to $\\lg_{3/2} n$ (rightmost). But **every level's node sizes still sum to exactly $n$** (each split sends $n/3 + 2n/3 = n$ downward), so every level above the first leaves costs exactly $cn$, and there are $\\Theta(\\lg n)$ such levels: $T(n) = \\Theta(n \\lg n)$.",
        detail: "The upper bound uses the deepest possible level $\\lg_{3/2} n$ with per-level cost $\\le n$; the lower bound uses the first $\\lg_3 n$ complete levels with per-level cost exactly $n$. For $n = 729 = 3^6$: $7n \\le T(n) \\le 17.3n$ — the constant gap is wide but the log shape is pinned from both sides. The master theorem cannot express this recurrence at all (uneven splits), which is exactly when the tree method earns its keep.",
      },
      {
        term: "From tree to theorem",
        kind: "insight",
        statement: "The recursion tree is a *bookkeeping device*, not automatically a proof: for balanced recurrences over exact powers of $b$ the level-by-level accounting is rigorous; for ragged trees (floors, uneven splits) the picture suggests the answer, and the substitution method converts the suggestion into an induction. The book's workflow: **tree for the guess, substitution for the proof**.",
        detail: "Where trees mislead, it is usually through ignoring that costs concentrate at unexpected depths — e.g. in $T(n) = 2T(n/2) + n/\\lg n$ the per-level cost *grows* as you descend ($n/\\lg(n/2^i)$ increases as the argument shrinks toward 2), and the correct total $\\Theta(n \\lg \\lg n)$ comes only from summing the harmonic series over levels.",
      },
      {
        term: "When levels grow instead of shrink",
        kind: "insight",
        statement: "Not every tree decays: for $T(n) = 2T(n/2) + n/\\lg n$ depth $i$ costs $n/\\lg(n/2^i)$, which grows as the argument shrinks, and the total $\\sum_{i=0}^{\\lg n -1} n/(\\lg n - i) = n H_{\\lg n} = \\Theta(n \\lg \\lg n)$ comes only from summing the harmonic series over levels.",
        detail: "The picture still helps, but the answer is no longer readable from the root or the leaves alone: the dominant contribution sits in the middle depths, which is why the book insists the tree suggests and substitution proves.",
      },
    ],
    figures: [
      {
        caption: "**The recursion tree of $T(n) = 2T(n/2) + n$.** Depth $i$ holds $2^i$ nodes of cost $n/2^i$, so every level costs exactly $n$; the tree has height $\\lg n$, so the total is $n \\cdot \\lg n + \\Theta(n)$ from the $n$ leaves of size 1 — merge sort's $\\Theta(n \\lg n)$ made geometrically obvious.",
        svg: `<svg viewBox="0 0 720 350" width="100%" role="img" aria-label="Recursion tree for T of n equals 2 T of n over 2 plus n" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><g stroke="currentColor" stroke-width="1.2" opacity="0.55"><line x1="360" y1="54" x2="200" y2="96"/><line x1="360" y1="54" x2="520" y2="96"/><line x1="200" y1="126" x2="120" y2="168"/><line x1="200" y1="126" x2="280" y2="168"/><line x1="520" y1="126" x2="440" y2="168"/><line x1="520" y1="126" x2="600" y2="168"/><line x1="120" y1="198" x2="80" y2="240"/><line x1="120" y1="198" x2="160" y2="240"/><line x1="280" y1="198" x2="240" y2="240"/><line x1="280" y1="198" x2="320" y2="240"/><line x1="440" y1="198" x2="400" y2="240"/><line x1="440" y1="198" x2="480" y2="240"/><line x1="600" y1="198" x2="560" y2="240"/><line x1="600" y1="198" x2="640" y2="240"/></g><g stroke="currentColor" stroke-width="1.4"><rect x="322" y="24" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="162" y="96" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="482" y="96" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="82" y="168" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="242" y="168" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="402" y="168" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="562" y="168" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="42" y="240" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="122" y="240" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="202" y="240" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="282" y="240" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="362" y="240" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="442" y="240" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="522" y="240" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/><rect x="602" y="240" width="76" height="30" rx="6" fill="currentColor" fill-opacity="0.08"/></g><g font-size="12.5" fill="currentColor" text-anchor="middle"><text x="360" y="43">cn</text><text x="200" y="115">cn/2</text><text x="520" y="115">cn/2</text><text x="120" y="187">cn/4</text><text x="280" y="187">cn/4</text><text x="440" y="187">cn/4</text><text x="600" y="187">cn/4</text><text x="80" y="259">cn/8</text><text x="160" y="259">cn/8</text><text x="240" y="259">cn/8</text><text x="320" y="259">cn/8</text><text x="400" y="259">cn/8</text><text x="480" y="259">cn/8</text><text x="560" y="259">cn/8</text><text x="640" y="259">cn/8</text></g><text x="676" y="43" font-size="11.5" fill="currentColor" text-anchor="end" opacity="0.8">Σ = cn</text><text x="676" y="115" font-size="11.5" fill="currentColor" text-anchor="end" opacity="0.8">Σ = cn</text><text x="676" y="187" font-size="11.5" fill="currentColor" text-anchor="end" opacity="0.8">Σ = cn</text><text x="676" y="259" font-size="11.5" fill="currentColor" text-anchor="end" opacity="0.8">Σ = cn</text><line x1="688" y1="30" x2="688" y2="268" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.4"/><g font-size="11" fill="currentColor" opacity="0.8"><text x="26" y="43">level 0</text><text x="26" y="115">level 1</text><text x="26" y="187">level 2</text><text x="26" y="259">level 3</text></g><text x="360" y="306" font-size="12" fill="currentColor" text-anchor="middle">2ⁱ nodes × n/2ⁱ cost per level ⇒ every level totals n; height lg n</text><text x="360" y="326" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">T(n) = n·lg n + Θ(n) = Θ(n lg n)</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Level-by-level analysis of $T(n) = 3T(n/4) + cn^2$",
        problem: "Use a recursion tree to show $T(n) = \\Theta(n^2)$, tracking the geometric decay and the leaf contribution.",
        steps: [
          { label: "Level profile", text: "Depth $i$: $3^i$ nodes, each $c(n/4^i)^2$. Level total $= 3^i c n^2 / 16^i = (3/16)^i cn^2$." },
          { label: "Numeric levels", text: "Level 0: $cn^2$; level 1: $\\tfrac{3}{16}cn^2 = 0.1875\\,cn^2$; level 2: $\\tfrac{9}{256}cn^2 \\approx 0.035\\,cn^2$; each level is $\\tfrac{3}{16}$ of the one above." },
          { label: "Sum the internal levels", text: "Geometric series: $cn^2 \\sum_{i\\ge0} (3/16)^i = \\tfrac{1}{1-3/16} cn^2 = \\tfrac{16}{13}cn^2 \\approx 1.23\\,cn^2$." },
          { label: "Add the leaves", text: "Depth $\\lg_4 n$ holds $3^{\\lg_4 n} = n^{\\lg_4 3} \\approx n^{0.79}$ leaves of $\\Theta(1)$: $O(n^{0.79})$, negligible against $n^2$." },
          { label: "Both sides", text: "The root alone gives $T(n) \\ge cn^2$; the total sum gives $T(n) \\le \\tfrac{16}{13}cn^2 + O(n^{0.79})$. Together: $T(n) = \\Theta(n^2)$." },
        ],
        result: "$T(n) = \\Theta(n^2)$: when per-level costs decay geometrically, the *root* dominates and the recurrence inherits the driver's order — the visual signature of master-theorem case 3.",
      },
      {
        title: "The uneven tree $T(n) = T(n/3) + T(2n/3) + n$ at a concrete size",
        problem: "Bound $T(729)$ from above and below using the tree's two extremal path lengths.",
        steps: [
          { label: "Level sums", text: "Every node splits its size $s$ into $s/3 + 2s/3 = s$, so by induction each level's node sizes sum to exactly $729$ — every nonempty level costs exactly $729$ (plus one).", },
          { label: "Shallowest leaves", text: "The leftmost path shrinks fastest: it terminates after $\\lg_3 729 = 6$ levels. Levels 0–6 all cost $729$, giving $T(729) \\ge 7 \\cdot 729 = 5103$." },
          { label: "Deepest leaves", text: "The rightmost path shrinks slowest: it lasts $\\lg_{3/2} 729 \\approx 16.3$ levels. Levels beyond 6 cost $\\le 729$ each, so $T(729) \\le 17.3 \\cdot 729 \\approx 12{,}600$ plus leaf costs." },
          { label: "Conclusion", text: "Both bounds are constant multiples of $n \\lg n$ at $n = 729$ ($\\lg 729 \\approx 9.55$), and the argument works at every size: $T(n) = \\Theta(n \\lg n)$." },
        ],
        result: "Uneven splits keep per-level costs flat while stretching the height between $\\lg_3 n$ and $\\lg_{3/2} n$ — still $\\Theta(\\lg n)$, so still $\\Theta(n \\lg n)$, but provable only by the tree, not by the master theorem.",
      },
    ],
    keyTakeaways: [
      "A recursion tree totals three columns per level — per-node cost, node count, per-level sum — then adds levels and leaves.",
      "Geometrically decaying levels ($3T(n/4) + cn^2$: ratio $3/16$ per level) make the root dominate: total $\\tfrac{16}{13}$ of the root cost, $\\Theta(n^2)$ overall.",
      "Uneven splits like $T(n/3) + T(2n/3) + n$ have ragged trees but level sums still exactly $n$ — the tree handles what the master theorem cannot; use substitution to certify whatever the tree merely suggests.",
    ],
    quiz: [
      {
        q: "In the recursion tree for $T(n) = 3T(n/4) + cn^2$, the total cost of depth $i$ is:",
        options: [
          "$(3/4)^i cn^2$",
          "$(3/16)^i cn^2$",
          "$3^i cn^2$",
          "$cn^2$ exactly, at every depth",
        ],
        answer: 1,
        explanation: "Depth $i$ has $3^i$ nodes of cost $c(n/4^i)^2 = cn^2/16^i$; multiplying gives the ratio $3/16 < 1$ per level — geometric decay totaling $\\tfrac{16}{13}cn^2$.",
      },
      {
        q: "For $T(n) = T(n/3) + T(2n/3) + n$, each level of the tree costs:",
        options: [
          "exactly $n$ (node sizes at a level sum to $n$), for all levels above the first leaves",
          "$n/3$ on the left half and $2n/3$ on the right, decaying",
          "$n \\lg n$",
          "geometrically less as you descend, ratio $2/9$",
        ],
        answer: 0,
        explanation: "Each split preserves the parent's size ($s/3 + 2s/3 = s$), so by induction every level's sizes — hence costs, since $f(n) = n$ — sum to exactly $n$.",
      },
      {
        q: "The tree for $T(n) = 3T(n/4) + cn^2$ has how many leaves, and why does this not change the answer?",
        options: [
          "$4^{\\lg_3 n}$ leaves, which dominate",
          "$3^{\\lg_4 n} = n^{\\lg_4 3} \\approx n^{0.79}$ leaves, subdominant against the root's $n^2$",
          "exactly $n$ leaves always",
          "$n^2$ leaves, matching the driver",
        ],
        answer: 1,
        explanation: "Leaves appear at depth $\\lg_4 n$ and number $3^{\\lg_4 n} = n^{\\log_4 3}$; since $0.79 < 2$, the leaf mass is polynomially below the root cost $cn^2$ that already fixes $\\Theta(n^2)$.",
      },
      {
        q: "Which recurrence's recursion tree has leaves at *different* depths?",
        options: [
          "$T(n) = 4T(n/2) + n$",
          "$T(n) = 2T(n/2) + n$",
          "$T(n) = T(n/3) + T(2n/3) + n$",
          "$T(n) = T(n/2) + 1$",
        ],
        answer: 2,
        explanation: "Only the uneven split sends children down at different rates: leftmost leaves appear at depth $\\lg_3 n$, rightmost at $\\lg_{3/2} n$ — a ragged tree, invisible to the master theorem.",
      },
      // PYQ-pattern — lopsided recursion-tree depth (rephrased, values changed)
      {
        q: "For $T(n) = T(\\frac{n}{3}) + T(\\frac{2n}{3}) + n$, the depth of the longest root-to-leaf path is:",
        options: ["$\\log_{2}n$", "$\\log_{3}n$", "$\\log_{4}n$", "$\\log_{\\frac{3}{2}}n$"],
        answer: 3,
        explanation: "Step 1 — Given: uneven split into $\\frac{n}{3}$ and $\\frac{2n}{3}$ plus a linear driving term. Step 2 — Governing picture: each root-to-leaf path multiplies sizes by $\\frac{1}{3}$ or $\\frac{2}{3}$ per level until reaching $1$. Step 3 — Derivation: the longest path always takes the two-thirds branch, so $(\\frac{2}{3})^d n = 1$ gives $d = \\log_{\\frac{3}{2}}n$, while the shortest path has depth $\\log_{3}n$. Step 4 — Sanity check: the two-thirds logarithm exceeds $\\log_{3}n$ as the slower shrink demands, each level still costs at most $n$, and the total is $\\Theta(n\\lg n)$. Step 5 — Distractor analysis: $\\log_{2}n$ assumes halving, $\\log_{3}n$ is the shortest path, and $\\log_{4}n$ assumes quartering. Step 6 — Conclude: the longest depth is $\\log_{\\frac{3}{2}}n$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 4.5
  {
    sectionId: "clrs-ch4-s5",
    readingTime: 7,
    intro: "The master method converts a whole family of recurrences into a three-way lookup. For $T(n) = aT(n/b) + f(n)$ with $a \\ge 1$, $b > 1$, the answer is decided by a single comparison: is the driver $f(n)$ polynomially smaller than, equal to, or polynomially larger than the leaf mass $n^{\\log_b a}$? One exponent and three cases cover merge sort, Strassen, and almost every balanced divide-and-conquer algorithm in this book.",
    objectives: [
      "State the master theorem precisely, including the regularity condition of case 3",
      "Classify given recurrences into the correct case by comparing $f(n)$ with $n^{\\log_b a}$",
      "Recognize the gaps the master method leaves — gray-zone drivers and uneven splits — and name the fallback tools",
    ],
    concepts: [
      {
        term: "The master theorem",
        kind: "theorem",
        statement: "Let $a \\ge 1$ and $b > 1$ be constants, $T(n) = aT(n/b) + f(n)$ with $T(n)$ asymptotically nondecreasing; compare $f(n)$ with $n^{\\log_b a}$: **Case 1** — if $f(n) = O(n^{\\log_b a - \\varepsilon})$ for some $\\varepsilon > 0$, then $T(n) = \\Theta(n^{\\log_b a})$. **Case 2** — if $f(n) = \\Theta(n^{\\log_b a} \\lg^k n)$ for some $k \\ge 0$, then $T(n) = \\Theta(n^{\\log_b a} \\lg^{k+1} n)$. **Case 3** — if $f(n) = \\Omega(n^{\\log_b a + \\varepsilon})$ for some $\\varepsilon > 0$, *and* the regularity condition $a f(n/b) \\le c f(n)$ holds for some $c < 1$ and all large $n$, then $T(n) = \\Theta(f(n))$.",
        detail: "The three cases are a contest: leaves ($n^{\\log_b a}$) versus root/driver ($f$). Case 1: leaves win by a polynomial gap. Case 2: a tie up to logarithms, resolved by the log factor. Case 3: the driver wins by a polynomial gap — provided it stays a driver all the way down (regularity: the recursive calls' drivers shrink geometrically).",
      },
      {
        term: "The contest intuition",
        kind: "insight",
        statement: "$n^{\\log_b a}$ counts the leaf mass: the tree has $\\log_b n$ levels and $a^{\\log_b n} = n^{\\log_b a}$ leaves. If level costs decay toward the leaves (Case 1), the leaves carry the answer; if they are constant (Case 2), every level contributes and the count of levels is the extra $\\lg$; if they decay from the top (Case 3), the root's family of costs dominates and $f(n)$ sets the answer.",
        detail: "For $T(n) = 2T(n/2) + n$: $n^{\\log_2 2} = n$ and $f = n$ — a perfect tie, Case 2 with $k = 0$ — merge sort's $\\Theta(n \\lg n)$ is literally 'the same work $n$ at each of $\\lg n$ levels'.",
      },
      {
        term: "Applying the method",
        kind: "method",
        statement: "Recipe: (1) read off $a$, $b$; (2) compute $n^{\\log_b a}$; (3) compare $f$ against it looking for a *polynomial* gap $\\pm\\varepsilon$; (4) check regularity if you are in Case 3. For $T(n) = 4T(n/2) + n$: $\\log_2 4 = 2$, and $n = O(n^{2 - \\varepsilon})$ with $\\varepsilon = 1$ — Case 1, $T(n) = \\Theta(n^2)$. For $4T(n/2) + n^2$: Case 2 with $k = 0$, $\\Theta(n^2 \\lg n)$. For $4T(n/2) + n^3$: Case 3 with regularity $4(n/2)^3 = \\tfrac12 n^3 \\le \\tfrac12 f(n)$, so $\\Theta(n^3)$.",
        detail: "For $T(n) = 3T(n/4) + cn^2$: $\\log_4 3 \\approx 0.79$; $n^2$ exceeds it with room to spare ($\\varepsilon$ can be up to $1.21$), regularity $3c(n/4)^2 = \\tfrac{3}{16}cn^2 \\le \\tfrac{3}{16} f(n)$ holds — Case 3, $\\Theta(n^2)$, matching the tree of Section 4.4.",
      },
      {
        term: "What the master method cannot do",
        kind: "insight",
        statement: "Three families escape it. **Gray-zone drivers**: $T(n) = 2T(n/2) + n/\\lg n$ satisfies no case — $n/\\lg n$ is not $O(n^{1-\\varepsilon})$ (any $n^{\\varepsilon}$ eventually beats $\\lg n$), not $\\Theta(n \\lg^k n)$ with $k \\ge 0$ (it is $n$ times a *negative* log power), not $\\Omega(n^{1+\\varepsilon})$. **Uneven splits**: $T(n) = T(n/3) + T(2n/3) + n$ has two different subproblem sizes. **Non-constant parameters**: $a$ or $b$ varying with $n$, or additive shifts such as $T(n) = 2T(n/2 + 17) + n$ (Exercise 4.4-? territory). For these, recursion trees plus substitution are the tools.",
        detail: "The gray-zone example resolves by tree: levels cost $n/(\\lg n - i)$ for level $i$, so $T(n) = n \\sum_{j=1}^{\\lg n} \\frac{1}{j} = n H_{\\lg n} = \\Theta(n \\lg \\lg n)$ — the harmonic number resurfaces (Chapter 5 makes $H_m = \\Theta(\\lg m)$ a household tool).",
      },
      {
        term: "Reading $n^{\\log_b a}$ as the leaf mass",
        kind: "insight",
        statement: "In $T(n) = aT(n/b) + f(n)$ the quantity $n^{\\log_b a} = a^{\\log_b n}$ is exactly the number of leaves times $\\Theta(1)$: it is what the recurrence would cost if the driver $f(n)$ were free. The master theorem is therefore a contest between leaf mass and driver mass at the root.",
        detail: "Case 1: leaves win. Case 2: the race is tied level by level, so the $\\lg n$ levels accumulate. Case 3: the root driver dwarfs the leaves, provided regularity keeps the driver dominant all the way down.",
      },
    ],
    examples: [
      {
        title: "Four recurrences through the three cases",
        problem: "Classify $T_1(n) = 4T(n/2) + n$, $T_2(n) = 4T(n/2) + n^2$, $T_3(n) = 4T(n/2) + n^3$, and $T_4(n) = 3T(n/4) + cn^2$.",
        steps: [
          { label: "Common exponent for the 4/2 family", text: "$a = 4$, $b = 2$: $n^{\\log_2 4} = n^2$ — the leaf mass in all three of $T_1, T_2, T_3$." },
          { label: "$T_1$: driver loses", text: "$f = n = O(n^{2-1})$ — Case 1 with $\\varepsilon = 1$: $T_1(n) = \\Theta(n^2)$, leaf-dominated." },
          { label: "$T_2$: tie", text: "$f = n^2 = \\Theta(n^2 \\lg^0 n)$ — Case 2 with $k = 0$: $T_2(n) = \\Theta(n^2 \\lg n)$; the log is the level count." },
          { label: "$T_3$: driver wins", text: "$f = n^3 = \\Omega(n^{2+1/2})$ (say), and regularity: $a f(n/b) = 4(n/2)^3 = n^3/2 \\le \\tfrac12 f(n)$ with $c = 1/2 < 1$ — Case 3: $T_3(n) = \\Theta(n^3)$." },
          { label: "$T_4$: different balance point", text: "$a = 3$, $b = 4$: $n^{\\log_4 3} \\approx n^{0.79}$; $cn^2$ wins by a huge polynomial gap, regularity gives ratio $3/16 < 1$ — Case 3: $T_4(n) = \\Theta(n^2)$ (the Section 4.4 tree)." },
        ],
        result: "$\\Theta(n^2)$, $\\Theta(n^2 \\lg n)$, $\\Theta(n^3)$, $\\Theta(n^2)$ — one exponent comparison each; note how the *same* $a, b$ family flips case purely through $f$.",
      },
      {
        title: "A gray-zone recurrence the master theorem rejects",
        problem: "Solve $T(n) = 2T(n/2) + n/\\lg n$ and verify at $n = 1024$.",
        steps: [
          { label: "No case applies", text: "$n^{\\log_2 2} = n$; $n/\\lg n$ is asymptotically below $n$ but not polynomially below (no $\\varepsilon$ works since $\\lg n < n^{\\varepsilon}$ eventually), and it is not $\\Omega(n^{1+\\varepsilon})$. The theorem is silent." },
          { label: "Tree it", text: "Level $i$ costs $2^i \\cdot \\frac{n/2^i}{\\lg(n/2^i)} = \\frac{n}{\\lg n - i}$ — level costs *grow* on the way down." },
          { label: "Sum the harmonic series", text: "$T(n) = \\sum_{i=0}^{\\lg n - 1} \\frac{n}{\\lg n - i} = n \\sum_{j=1}^{\\lg n} \\frac1j = n H_{\\lg n} = \\Theta(n \\lg \\lg n)$." },
          { label: "Check at n = 1024", text: "$\\lg n = 10$: $n H_{10} = 1024 \\cdot 2.929 \\approx 2999$, versus the bound's shape $n \\lg \\lg n = 1024 \\cdot 3.32 \\approx 3402$ — within a factor of 1.14, exactly the $c \\approx 1$ regime." },
        ],
        result: "$T(n) = \\Theta(n \\lg \\lg n)$: a driver only a logarithm shy of the tie still loses a full $\\lg$, but gains a $\\lg \\lg$ — the boundary behavior Case 2 cannot express.",
      },
    ],
    keyTakeaways: [
      "Compare $f(n)$ against $n^{\\log_b a}$ with a polynomial gap $\\pm\\varepsilon$: below → Case 1 ($\\Theta(n^{\\log_b a})$), tied up to $\\lg^k n$ → Case 2 ($\\Theta(n^{\\log_b a}\\lg^{k+1} n)$), above + regularity → Case 3 ($\\Theta(f(n))$).",
      "Case 3's regularity condition ($a f(n/b) \\le c f(n)$, $c < 1$) certifies the driver dominates at *every* level, not just the root; it holds for all polynomial drivers encountered in practice.",
      "Gray-zone drivers ($n/\\lg n$), uneven splits, and $n$-dependent $a, b$ defeat the master method — recursion tree for the guess, substitution for the proof.",
    ],
    quiz: [
      {
        q: "$T(n) = 9T(n/3) + n$ falls into which case, and what is the solution?",
        options: [
          "Case 2: $\\Theta(n^2 \\lg n)$",
          "Case 1: $\\Theta(n^2)$, since $\\log_3 9 = 2$ and $n = O(n^{2-\\varepsilon})$",
          "Case 3: $\\Theta(n)$",
          "Case 1: $\\Theta(n^2 \\lg n)$",
        ],
        answer: 1,
        explanation: "The leaf mass is $n^{\\log_3 9} = n^2$; the linear driver is polynomially smaller ($\\varepsilon = 1$ works), so Case 1 makes the leaves decide: $\\Theta(n^2)$ — no log factor appears in Case 1.",
      },
      {
        q: "The regularity condition $a f(n/b) \\le c f(n)$ with $c < 1$ guarantees:",
        options: [
          "that $f$ is nonnegative",
          "that the level costs decay geometrically as you descend, so the driver's family, not the leaves, dominates the sum",
          "that $a < b$",
          "that $T(n) = O(f(n) \\lg n)$",
        ],
        answer: 1,
        explanation: "Iterating the inequality $i$ times gives $a^i f(n/b^i) \\le c^i f(n)$ — each level's driver cost is a $c$-fraction of the one above, so the total internal cost is at most $f(n)/(1-c)$.",
      },
      {
        q: "For $T(n) = 2T(n/2) + n \\lg n$, the master theorem gives:",
        options: [
          "Case 1: $\\Theta(n)$",
          "Case 2 with $k = 1$: $\\Theta(n \\lg^2 n)$",
          "Case 3: $\\Theta(n \\lg n)$",
          "no case applies",
        ],
        answer: 1,
        explanation: "$f = n\\lg n = \\Theta(n^{\\log_2 2} \\lg^1 n)$ fits Case 2 with $k = 1$, and the answer tacks on one more log: $\\Theta(n \\lg^2 n)$.",
      },
      {
        q: "Which recurrence does the master theorem NOT apply to?",
        options: [
          "$T(n) = 7T(n/2) + n^2$ (Strassen)",
          "$T(n) = 2T(n/2) + n$ (merge sort)",
          "$T(n) = T(n/3) + T(2n/3) + n$",
          "$T(n) = 4T(n/2) + n^3$",
        ],
        answer: 2,
        explanation: "The master theorem requires a single split ratio: all $a$ subproblems must have size $n/b$. Two different sizes ($n/3$ and $2n/3$) fall outside its hypotheses — use a recursion tree instead ($\\Theta(n \\lg n)$).",
      },
      // PYQ-pattern — Master case with equal exponent (rephrased, values changed)
      {
        q: "For $T(n) = 4T(\\frac{n}{2}) + n^2$, the master method gives:",
        options: ["$T(n) = \\Theta(n^2\\lg n)$", "$T(n) = \\Theta(n^2)$", "$T(n) = \\Theta(n^3)$", "$T(n) = \\Theta(n\\lg n)$"],
        answer: 0,
        explanation: "Step 1 — Given: $a = 4$, $b = 2$, driver $f(n) = n^2$. Step 2 — Governing comparison: leaf-mass exponent $\\log_{b}a = \\log_{2}4 = 2$ against the driver. Step 3 — Case analysis: $f(n) = \\Theta(n^{\\log_{b}a})$ exactly, the equal-exponent case, so an extra logarithmic factor appears and $T(n) = \\Theta(n^2\\lg n)$. Step 4 — Sanity check: level costs are flat at $n^2$ across $\\lg n + 1$ levels, leaves also total $\\Theta(n^2)$, and the sum over levels supplies the logarithm. Step 5 — Distractor analysis: $\\Theta(n^2)$ forgets the level count, $\\Theta(n^3)$ misreads the exponent as $3$, and $\\Theta(n\\lg n)$ solves the mergesort recurrence instead. Step 6 — Conclude: $\\Theta(n^2\\lg n)$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 4.6
  {
    sectionId: "clrs-ch4-s6",
    readingTime: 8,
    intro: "The master theorem is worth proving carefully because the proof is not a bag of tricks — it is one recursion tree, drawn once, whose level costs are then estimated in three increasingly honest ways. Assuming $n$ is an exact power of $b$, the tree is perfect: $a^i$ nodes at depth $i$ of size $n/b^i$, all leaves at one depth. The three cases fall out of how the driver behaves along that descent, and the floors and ceilings of real recurrences are repaired by monotonicity at the end.",
    objectives: [
      "Draw the equal-powers recursion tree and prove the level-count facts ($a^i$ nodes of size $n/b^i$, $a^{\\log_b n}$ leaves)",
      "Derive the master-theorem identity $T(n) = \\Theta(n^{\\log_b a}) + \\sum_i a^i f(n/b^i)$ and explain where each case's estimate lives inside it",
      "Explain why the polynomial gap $\\varepsilon$ is essential and how floors/ceilings are absorbed",
    ],
    concepts: [
      {
        term: "The plan: assume exact powers of b",
        kind: "method",
        statement: "The proof first assumes $n = b^m$ for integer $m$, so every subproblem size divides out exactly and **every leaf sits at the same depth** $m = \\log_b n$. Under this assumption the recursion tree is *perfect*: by induction on $i$, depth $i$ contains exactly $a^i$ nodes, each a subproblem of size $n/b^i$, each costing $f(n/b^i)$.",
        detail: "The restriction is honest bookkeeping, not a loss of generality: Section 4.6's final remark (and Exercise 4.6-? style arguments) extends the result to floors and ceilings by monotonicity — see the last concept. The book also assumes $T(n)$ is eventually nondecreasing for this purpose.",
      },
      {
        term: "The level-cost identity",
        kind: "theorem",
        statement: "Summing the tree level by level gives $T(n) = \\Theta(n^{\\log_b a}) + \\sum_{i=0}^{\\log_b n - 1} a^i f(n/b^i)$. The first term is the leaf mass — $a^{\\log_b n} = n^{\\log_b a}$ leaves of $\\Theta(1)$ each — and the second term $g(n) = \\sum_i a^i f(n/b^i)$ is the total cost of all **internal** levels. Everything the proof does is estimate $g(n)$ under each case's hypothesis.",
        detail: "This is Lemma 4.4 in spirit: the identity converts a recursive object into one explicit sum. Note the two competitors meet only through $g$: the leaves are fixed by $a, b$ alone; the driver shapes the internal sum. (The book also needs $f$ asymptotically positive so that 'cost' is meaningful.)",
      },
      {
        term: "Why exactly three cases",
        kind: "insight",
        statement: "Look at the ratio of consecutive level costs: $\\frac{a^{i+1} f(n/b^{i+1})}{a^i f(n/b^i)} = a \\cdot \\frac{f(n/b^{i+1})}{f(n/b^i)}$. For $f(n) \\approx n^{\\log_b a \\pm \\varepsilon}$ this ratio is $\\approx b^{\\pm\\varepsilon}$: **Case 1: ratio $> 1$** — costs *grow* toward the leaves but only for $\\log_b n$ levels, so the geometric sum is capped by the leaf scale. **Case 2: ratio $= 1$** — flat costs, $\\log_b n$ of them. **Case 3: ratio $< 1$** — geometric decay from the root, sum dominated by $f(n)$.",
        detail: "The polynomial gap $\\varepsilon$ is exactly what pins the ratio uniformly away from 1 in Cases 1 and 3 — without it (the $n/\\lg n$ gray zone) the ratio drifts toward 1 as $i$ grows, the sums are no longer clean geometric series, and the theorem's clean trichotomy breaks.",
      },
      {
        term: "Floors and ceilings",
        kind: "insight",
        statement: "Real recurrences write $T(\\lfloor n/b \\rfloor)$ or $T(\\lceil n/b \\rceil)$. The theorem survives: one shows the rounded recurrence is squeezed between two exact-power recurrences (using $T$ nondecreasing and bounds like $\\lfloor n/b \\rfloor \\ge n/b - 1$), and both bounds land in the same case. The result also extends to mixes such as $T(\\lceil n/2 \\rceil) + T(\\lfloor n/2 \\rfloor)$.",
        detail: "This tolerance is why the book can apply the master theorem throughout to recurrences whose pseudocode obviously produces non-integer subproblem sizes — the polynomial-gap hypotheses have enough slack to absorb $\\pm 1$ shifts in the argument of $T$.",
      },
      {
        term: "The polynomial gap $\\varepsilon$",
        kind: "notation",
        statement: "Cases 1 and 3 require a polynomial gap: $f(n) = O(n^{\\log_b a - \\varepsilon})$ or $f(n) = \\Omega(n^{\\log_b a + \\varepsilon})$ for some fixed $\\varepsilon > 0$. A merely polylogarithmic gap such as $f(n) = n^{\\log_b a} \\lg n$ falls in the cracks and the theorem says nothing.",
        detail: "The gap is what the geometric-series estimates need: without it the ratio between successive levels tends to $1$ and the sum over $\\lg n$ levels cannot be bounded by a constant multiple of either endpoint.",
      },
    ],
    examples: [
      {
        title: "The identity in action: $T(n) = 4T(n/2) + n$ at $n = 8$",
        problem: "Verify the level-cost identity $T(n) = \\Theta(n^{\\log_b a}) + \\sum_i a^i f(n/b^i)$ on a fully unrolled small instance.",
        steps: [
          { label: "Unroll exactly", text: "$T(1) = 1$; $T(2) = 4T(1) + 2 = 6$; $T(4) = 4T(2) + 4 = 28$; $T(8) = 4T(4) + 8 = 120$." },
          { label: "Internal levels", text: "Depth 0: $8$; depth 1: $4$ nodes × $4 = 16$; depth 2: $16$ nodes × $2 = 32$. Internal sum $= 56$, matching the closed form $\\sum_i 4^i (n/2^i) = n(2^{\\lg n} - 1) = 8 \\cdot 7 = 56$." },
          { label: "Leaves", text: "Depth $\\lg 8 = 3$: $4^3 = 64$ leaves of $1$ — and indeed $64 = 120 - 56$. The identity is an exact bookkeeping split." },
          { label: "Case check", text: "$n^{\\log_2 4} = n^2$: internal $56 = O(n^2)$ (Case 1's geometric cap, here $\\approx 0.875\\,n^2$), leaves $64 = n^2$. Total $\\Theta(n^2)$, dominated — as Case 1 predicts — by the leaf mass." },
        ],
        result: "$T(8) = 120 = 56 + 64$: every step of the proof's bookkeeping is visible at this size, and the $\\Theta(n^2)$ verdict of Case 1 is the asymptotic shadow of this exact arithmetic.",
      },
      {
        title: "Case 3's regularity, tested",
        problem: "Check the regularity condition $a f(n/b) \\le c f(n)$, $c < 1$, for $f(n) = n^3$ with $a = 4$, $b = 2$, and for $f(n) = cn^2$ with $a = 3$, $b = 4$.",
        steps: [
          { label: "Cubic driver", text: "$a f(n/b) = 4(n/2)^3 = n^3 / 2$ — regularity holds with $c = 1/2$: each level's driver costs half the one above." },
          { label: "Quadratic driver, deeper split", text: "$3 c(n/4)^2 = \\tfrac{3}{16} cn^2 \\le \\tfrac{3}{16} f(n)$: ratio $3/16 < 1$, geometric decay by factor $\\approx 5.3$ per level." },
          { label: "Read the consequence", text: "Iterating, level $i$'s driver contributes $\\le c^i f(n)$; summing the geometric series, $g(n) \\le f(n)/(1 - c)$ — e.g. $2 f(n)$ for the cubic case, $\\tfrac{16}{13} f(n)$ for the quadratic one: the Section 4.4 constants fall out of the same algebra." },
        ],
        result: "Regularity is the license to sum a geometric series over levels; both drivers satisfy it with room to spare, which is typical — failure requires a driver that oscillates or grows erratically by factors near $a$.",
      },
    ],
    keyTakeaways: [
      "For $n$ an exact power of $b$, the tree is perfect: $a^i$ nodes at depth $i$, all of size $n/b^i$, $n^{\\log_b a}$ leaves at one common depth — provable by a two-line induction.",
      "The proof's central identity $T(n) = \\Theta(n^{\\log_b a}) + \\sum_{i=0}^{\\log_b n - 1} a^i f(n/b^i)$ reduces the theorem to estimating one explicit sum; the three cases are the three qualitative behaviors of that sum (leaf-capped growth, flat, root-dominated decay).",
      "The $\\varepsilon$-gap keeps consecutive level-cost ratios bounded away from 1 — the geometric-series step needs it; floors, ceilings, and mixed splits are absorbed afterward by monotonicity squeezing.",
    ],
    quiz: [
      {
        q: "In the proof's recursion tree (with $n = b^m$), the number of nodes at depth $i$ and their subproblem sizes are:",
        options: [
          "$b^i$ nodes of size $n/a^i$",
          "$a^i$ nodes of size $n/b^i$",
          "$a^i$ nodes of size $n/a^i$",
          "$(ab)^i$ nodes of size $n/(ab)^i$",
        ],
        answer: 1,
        explanation: "Each node spawns $a$ children and each child's size divides by $b$: induction on $i$ gives $a^i$ nodes of size $n/b^i$; at depth $m$ that is $a^{\\log_b n} = n^{\\log_b a}$ size-1 leaves.",
      },
      {
        q: "The identity $T(n) = \\Theta(n^{\\log_b a}) + \\sum_{i=0}^{\\log_b n - 1} a^i f(n/b^i)$ splits the total cost into:",
        options: [
          "root cost plus everything else, both of order $f(n)$",
          "leaf mass (fixed by $a, b$) plus the summed internal-level driver costs $g(n)$",
          "left subtree plus right subtree",
          "the three cases of the theorem",
        ],
        answer: 1,
        explanation: "Leaves contribute $a^{\\log_b n} \\cdot \\Theta(1) = \\Theta(n^{\\log_b a})$ regardless of $f$; all of the theorem's work is estimating the internal sum $g(n)$, whose behavior differs case by case.",
      },
      {
        q: "For $T(n) = 4T(n/2) + n$ with $n = 8$, the internal sum and the leaf mass are:",
        options: [
          "$56$ and $64$ respectively — the leaves carry more, consistent with Case 1",
          "$64$ and $56$ respectively — the driver dominates",
          "$28$ and $120$ respectively",
          "both equal to $60$",
        ],
        answer: 0,
        explanation: "Internal levels cost $8 + 16 + 32 = 56 = n(2^{\\lg n} - 1)$; leaves number $4^3 = 64 = n^2$. The leaf mass wins — the exact small-scale signature of Case 1's $\\Theta(n^2)$.",
      },
      {
        q: "Why does the proof first assume $n$ is an exact power of $b$?",
        options: [
          "because otherwise $T$ is not well-defined",
          "to make every leaf the same depth, giving clean level counts $a^i$ and the explicit sum, before extending to floors/ceilings by monotonicity",
          "because the master theorem is false for floors",
          "to guarantee $f$ is polynomial",
        ],
        answer: 1,
        explanation: "Exact powers give a *perfect* tree with a single leaf depth — the bookkeeping becomes one summable series; the floor/ceiling cases are then squeezed between two exact-power bounds and land in the same case.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "The master theorem, proved completely",
        blocks: [
          {
            kind: "para",
            body: "The full proof is one recursion tree plus three estimates of a single sum — worth knowing line by line, because the same skeleton (count leaves exactly, sum internal levels geometrically) reappears in every advanced algorithm analysis you will meet. Throughout, $a \\ge 1$, $b > 1$ are integers, $f$ is asymptotically positive, $T$ is asymptotically nondecreasing, $n = b^m$ is an exact power, and $T(n) = aT(n/b) + f(n)$ with $T(1) = \\Theta(1)$.",
          },
          {
            kind: "theorem",
            heading: "Master theorem (Theorem 4.1)",
            body: "Let $T(n) = aT(n/b) + f(n)$. If $f(n) = O(n^{\\log_b a - \\varepsilon})$ for some $\\varepsilon > 0$, then $T(n) = \\Theta(n^{\\log_b a})$. If $f(n) = \\Theta(n^{\\log_b a}\\lg^k n)$ for $k \\ge 0$, then $T(n) = \\Theta(n^{\\log_b a}\\lg^{k+1} n)$. If $f(n) = \\Omega(n^{\\log_b a + \\varepsilon})$ for some $\\varepsilon > 0$ and $a f(n/b) \\le c f(n)$ for some constant $c < 1$ and all large $n$, then $T(n) = \\Theta(f(n))$.",
          },
          {
            kind: "proof",
            heading: "The tree and the identity",
            body: "**Tree shape.** By induction on $i$: depth $i$ has exactly $a^i$ nodes, each a problem of size $n/b^i$ (base $i = 0$: the root, size $n$; step: each of the $a^i$ nodes spawns $a$ children of size $(n/b^i)/b$). Sizes reach 1 exactly at depth $m = \\log_b n$, so all leaves share one depth and there are $a^m = a^{\\log_b n} = n^{\\log_b a}$ of them, each $\\Theta(1)$. **The identity.** Cost of depth $i$ is $a^i f(n/b^i)$; summing over internal depths $0 \\le i \\le m - 1$ and adding the leaves: $T(n) = \\sum_{i=0}^{m-1} a^i f(n/b^i) + \\Theta(n^{\\log_b a}) = g(n) + \\Theta(n^{\\log_b a})$. The whole theorem is the analysis of $g(n)$.",
          },
          {
            kind: "derivation",
            heading: "Case 1: leaves win",
            body: "Suppose $f(n) \\le c\\,n^{\\log_b a - \\varepsilon}$. Then each level costs $a^i f(n/b^i) \\le c\\,a^i (n/b^i)^{\\log_b a - \\varepsilon} = c\\,n^{\\log_b a - \\varepsilon}\\, a^i b^{i\\varepsilon} \\cdot a^{-i} a^{i} \\ldots$ — expanding cleanly: $a^i (n/b^i)^{\\log_b a} = n^{\\log_b a}$ (the powers of $a$ and $b$ cancel: $a^i b^{-i \\log_b a} = a^i a^{-i} = 1$), so $a^i f(n/b^i) \\le c\\,n^{\\log_b a - \\varepsilon} b^{\\varepsilon i}$. The level costs *grow* by the factor $b^{\\varepsilon}$ each step, but only for $m = \\log_b n$ levels: $\\sum_{i=0}^{m-1} b^{\\varepsilon i} \\le \\frac{b^{\\varepsilon m}}{1 - b^{-\\varepsilon}} = \\frac{n^{\\varepsilon}}{1 - b^{-\\varepsilon}}$. Hence $g(n) \\le \\frac{c}{1 - b^{-\\varepsilon}} n^{\\log_b a}$, and with the root's own $f(n) \\le c\\,n^{\\log_b a - \\varepsilon} \\le c'\\,n^{\\log_b a}$ for the lower side ($T(n) \\ge$ the leaf term): $T(n) = \\Theta(n^{\\log_b a})$.",
          },
          {
            kind: "derivation",
            heading: "Case 2: the tie, and its k > 0 extension",
            body: "With $f(n) = \\Theta(n^{\\log_b a}\\lg^k n)$, each level satisfies $a^i f(n/b^i) = \\Theta\\big(a^i (n/b^i)^{\\log_b a} \\lg^k(n/b^i)\\big) = \\Theta\\big(n^{\\log_b a} \\lg^k(n/b^i)\\big)$ — the polynomial part is *level-invariant*. For $k = 0$: all $m + 1 = \\log_b n + 1$ levels cost $\\Theta(n^{\\log_b a})$, so $T(n) = \\Theta(n^{\\log_b a} \\log_b n) = \\Theta(n^{\\log_b a} \\lg n)$. For $k > 0$ (Exercise 4.6-2): $g(n) = \\Theta\\big(n^{\\log_b a} \\sum_{i=0}^{m-1} \\lg^k(n/b^i)\\big)$; substituting $j = m - i$ and $\\lg(n/b^i) = (m-i)\\lg b = j \\lg b$, the sum is $(\\lg b)^k \\sum_{j=1}^{m} j^k = \\Theta\\big((\\lg b)^k m^{k+1}\\big) = \\Theta(\\lg^{k+1} n)$, since $m = \\lg n / \\lg b$. Each power of $\\lg$ in the driver buys exactly one power of $\\lg$ in the answer.",
          },
          {
            kind: "derivation",
            heading: "Case 3: the driver wins — via regularity",
            body: "The lower bound is free: $T(n) \\ge f(n) = \\Omega(n^{\\log_b a + \\varepsilon})$, which also shows the leaf term $\\Theta(n^{\\log_b a})$ is $O(f(n))$ (indeed $n^{\\log_b a} \\le c_1 f(n)/n^{\\varepsilon}$ for large $n$). For the upper bound, iterate regularity $a f(n/b) \\le c f(n)$ by induction on $i$: $a^i f(n/b^i) \\le c^i f(n)$. Then $g(n) \\le \\sum_{i=0}^{m-1} c^i f(n) \\le \\frac{f(n)}{1 - c}$ — the internal mass is at most a constant multiple of the *root's* driver, the constant $1/(1-c)$ depending only on the decay ratio. Hence $T(n) \\le \\frac{1}{1-c} f(n) + O(f(n)) = \\Theta(f(n))$. Regularity is exactly the license to treat the levels as a decaying geometric series; it fails only for pathological $f$ that oscillate or spike by factors approaching $a$.",
          },
          {
            kind: "remark",
            heading: "Where the proof's slack lives",
            body: "Three honest footnotes. (1) The polynomial gap $\\pm\\varepsilon$ is what keeps consecutive level-cost ratios ($\\approx b^{\\pm\\varepsilon}$ or $1$) uniformly away from 1; the gray zone $f(n) = n^{\\log_b a}/\\lg n$ has ratios drifting to 1 and indeed escapes all three cases ($T(n) = \\Theta(n^{\\log_b a} \\lg\\lg n)$ by the tree). (2) Floors and ceilings are repaired by monotonicity: the rounded recurrence is squeezed between two exact-power recurrences that land in the same case — the book proves the master theorem *with* floors this way. (3) Beyond the theorem: unequal splits such as $T(n/3) + T(2n/3) + n$ need the tree method, and the far-reaching generalization (unequal splits with weights, the Akra–Bazzi theorem) is the graduate successor to this proof.",
          },
        ],
      },
    ],
  },
]
