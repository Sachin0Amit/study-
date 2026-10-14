import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Appendix A (Chapter 36): Summations (Sections A.1 – A.2)
// Master study content.
// ============================================================================

export const clrsCh36Content: SectionContent[] = [
  // ------------------------------------------------------------- 36.1
  {
    sectionId: "clrs-ch36-s1",
    readingTime: 6,
    intro: "Every running-time analysis in this book eventually produces a sum: a loop contributes one term per iteration, a recursion tree one term per level, a probability argument one term per outcome. Appendix A collects the closed forms and the algebra for turning those sums into answers. The two skills to master are linearity — carving a complicated sum into standard pieces — and telescoping, the canceling pattern behind half the derivations in the book.",
    objectives: [
      "Manipulate summations using linearity, dummy variables and nested double sums",
      "Apply the standard closed forms for linear, quadratic, cubic, geometric and harmonic series",
      "Evaluate sums by telescoping and by the subtract-off technique"
    ],
    concepts: [
      {
        term: "Summation notation and linearity",
        kind: "notation",
        statement: "The expression $\\sum_{k=m}^{n} a_k$ denotes the finite sum $a_m + a_{m+1} + \\cdots + a_n$; the index $k$ is a **dummy variable**, so $\\sum_{k=m}^{n} a_k = \\sum_{i=m}^{n} a_i$. Summation is **linear**: $$\\sum_{k=m}^{n} (c\\,a_k + d\\,b_k) \\;=\\; c\\sum_{k=m}^{n} a_k \\;+\\; d\\sum_{k=m}^{n} b_k.$$ The bounds extend and split freely: $\\sum_{k=m}^{n} = \\sum_{k=m}^{p} + \\sum_{k=p+1}^{n}$ for $m \\le p < n$.",
        detail: "Nested sums multiply the work of indexing, not of adding: $\\sum_{i=1}^{n}\\sum_{j=1}^{n} a_{ij}$ visits the $n^2$ pairs $(i,j)$, and when every $a_{ij} \\ge 0$ the order of the two summation signs may be exchanged — the identity behind several double-counting arguments in the analysis chapters."
      },
      {
        term: "Closed forms for polynomial sums",
        kind: "theorem",
        statement: "For every $n \\ge 0$: $$\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}, \\qquad \\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}, \\qquad \\sum_{k=1}^{n} k^3 = \\frac{n^2(n+1)^2}{4}.$$ The last one is the square of the first: the sum of the first $n$ cubes is exactly $\\left(\\frac{n(n+1)}{2}\\right)^{2}$ — and the sum of the first $n$ odd integers is $n^2$.",
        detail: "Gauss's pairing argument proves the first: write $1 + 2 + \\cdots + n$, write it again reversed, and add column by column — every column gives $n+1$, and there are $n$ columns, so $2\\sum k = n(n+1)$."
      },
      {
        term: "Geometric series",
        kind: "theorem",
        statement: "For $x \\ne 1$ and $n \\ge 0$: $$\\sum_{k=0}^{n} x^{k} = \\frac{x^{n+1} - 1}{x - 1}.$$ When $|x| < 1$ the infinite series converges to $\\frac{1}{1-x}$. The special case $x = 2$ gives $\\sum_{k=0}^{n} 2^{k} = 2^{n+1} - 1$, the count of nodes in a complete binary tree of height $n$.",
        detail: "Proof by the subtract-off technique: let $S = \\sum_{k=0}^{n} x^k$; then $xS = S + x^{n+1} - 1$, and solving for $S$ gives the formula. Geometric growth is why balanced divide-and-conquer trees cost $O(n)$ per level while unbalanced ones do not."
      },
      {
        term: "Harmonic series",
        kind: "definition",
        statement: "The $n$-th **harmonic number** is $$H_n \\;=\\; \\sum_{k=1}^{n} \\frac{1}{k} \\;=\\; 1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots + \\frac{1}{n}.$$ The series diverges — $H_n$ grows without bound — but only logarithmically: $H_n = \\ln n + O(1)$. CLRS writes this as $H_n = \\ln n + \\Theta(1)$ and uses it for quickselect, random search trees, and coupon-collector-style analyses.",
        detail: "The hidden constant is the **Euler–Mascheroni constant** $\\gamma \\approx 0.5772$: $H_n = \\ln n + \\gamma + o(1)$. For a quick feel: $H_8 = \\frac{761}{280} \\approx 2.718$ while $\\ln 8 \\approx 2.079$."
      },
      {
        term: "Telescoping series",
        kind: "method",
        statement: "If each term can be written as a difference of consecutive values of a sequence, the sum **collapses**: $$\\sum_{k=1}^{n} (a_k - a_{k-1}) \\;=\\; a_n - a_0,$$ because every intermediate value appears once with a plus and once with a minus. The workhorse instance: $k \\cdot k! = (k+1)! - k!$, so $\\sum_{k=1}^{n} k \\cdot k! = (n+1)! - 1$.",
        detail: "The same cancellation drives recurrence unrolling (Chapter 4 style): writing $T(k) - T(k-1)$ and summing telescopes the whole stack into $T(n) - T(0)$. Partial fractions feed this machine — e.g. $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$, so $\\sum_{k=1}^{n} \\frac{1}{k(k+1)} = 1 - \\frac{1}{n+1}$."
      }
    ],
    figures: [
      {
        caption: "Gauss's staircase. The dark staircase piles up $1 + 2 + 3 + 4 + 5$ unit squares — one column of height $k$ for each term — and the light copy, rotated $180°$, interlocks with it to tile a $5 \\times 6$ rectangle exactly. So $2(1 + 2 + 3 + 4 + 5) = 5 \\cdot 6$, i.e. $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$: the sum is precisely half of an $n \\times (n+1)$ box.",
        svg: '<svg viewBox="0 0 720 360" width="100%" role="img" aria-label="Two staircase shapes of unit squares interlocking to tile a five by six rectangle, illustrating that twice the sum of one through five equals thirty."><text x="360" y="34" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">two staircases tile a 5 × 6 rectangle — so the sum is half of it</text><rect x="120" y="96" width="170" height="204" fill="none" stroke="currentColor" stroke-width="2"/><line x1="120" y1="300" x2="120" y2="88" stroke="currentColor" stroke-width="1.5"/><line x1="108" y1="300" x2="300" y2="300" stroke="currentColor" stroke-width="1.5"/><polygon points="120,82 115.5,94 124.5,94" fill="currentColor"/><polygon points="306,300 294,295.5 294,304.5" fill="currentColor"/><rect x="120" y="266" width="34" height="34" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/><rect x="154" y="232" width="34" height="68" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/><rect x="188" y="198" width="34" height="102" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/><rect x="222" y="164" width="34" height="136" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/><rect x="256" y="130" width="34" height="170" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/><text x="137" y="288" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="700">1</text><text x="171" y="254" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="700">2</text><text x="205" y="220" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="700">3</text><text x="239" y="186" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="700">4</text><text x="273" y="152" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="700">5</text><rect x="120" y="96" width="34" height="170" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.55"/><rect x="154" y="96" width="34" height="136" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.55"/><rect x="188" y="96" width="34" height="102" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.55"/><rect x="222" y="96" width="34" height="68" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.55"/><rect x="256" y="96" width="34" height="34" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.55"/><text x="137" y="117" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.7" text-anchor="middle">5</text><text x="171" y="117" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.7" text-anchor="middle">4</text><text x="205" y="117" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.7" text-anchor="middle">3</text><text x="239" y="117" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.7" text-anchor="middle">2</text><text x="273" y="117" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.7" text-anchor="middle">1</text><line x1="108" y1="96" x2="120" y2="96" stroke="currentColor" stroke-width="1.2"/><line x1="108" y1="164" x2="120" y2="164" stroke="currentColor" stroke-width="1.2"/><line x1="108" y1="232" x2="120" y2="232" stroke="currentColor" stroke-width="1.2"/><line x1="108" y1="300" x2="120" y2="300" stroke="currentColor" stroke-width="1.2"/><text x="100" y="100" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">6</text><text x="100" y="168" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">4</text><text x="100" y="236" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">2</text><text x="100" y="304" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">0</text><text x="120" y="322" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">1</text><text x="154" y="322" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><text x="188" y="322" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">3</text><text x="222" y="322" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><text x="256" y="322" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">5</text><text x="380" y="190" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">dark + light = 5 × 6 = 30</text><text x="380" y="212" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">so 1+2+3+4+5 = 30 / 2 = 15</text><text x="380" y="246" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.7">in general: 2·(1+2+⋯+n) = n·(n+1)</text><text x="380" y="268" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.7">hence Σk = n(n+1)/2</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "A polynomial sum by linearity",
        problem: "Evaluate $\\sum_{k=1}^{100} (3k^{2} - 2k + 1)$ exactly.",
        steps: [
          { label: "Step 1: Split by linearity", text: "$\\sum_{k=1}^{100} (3k^{2} - 2k + 1) = 3\\sum_{k=1}^{100} k^{2} - 2\\sum_{k=1}^{100} k + \\sum_{k=1}^{100} 1$ — constants pull through the summation sign, and sums subtract termwise." },
          { label: "Step 2: Apply the closed forms", text: "$\\sum_{k=1}^{100} k^{2} = \\frac{100 \\cdot 101 \\cdot 201}{6} = 338{,}350$ and $\\sum_{k=1}^{100} k = \\frac{100 \\cdot 101}{2} = 5050$, while $\\sum_{k=1}^{100} 1 = 100$." },
          { label: "Step 3: Combine", text: "$3 \\cdot 338{,}350 - 2 \\cdot 5050 + 100 = 1{,}015{,}050 - 10{,}100 + 100$." },
          { label: "Step 4: Sanity-check the leading term", text: "The dominant term $3\\sum k^{2} \\approx \\frac{n^{3}}{2} = 500{,}000$ for $n = 100$; the answer $1{,}005{,}050 \\approx n^{3}$ is consistent with $\\int_{0}^{n} 3x^{2}\\,dx = n^{3}$." }
        ],
        result: "$\\sum_{k=1}^{100} (3k^{2} - 2k + 1) = 1{,}005{,}050$ — no term-by-term addition needed."
      },
      {
        title: "Telescoping a factorial sum",
        problem: "Evaluate $\\sum_{k=1}^{5} k \\cdot k!$ and prove the general identity.",
        steps: [
          { label: "Step 1: Rewrite each term as a difference", text: "Since $k \\cdot k! = k \\cdot k \\cdot (k-1)! \\cdots$ more usefully: $(k+1)! = (k+1) \\cdot k! = k \\cdot k! + k!$, so $k \\cdot k! = (k+1)! - k!$." },
          { label: "Step 2: Watch the collapse", text: "$\\sum_{k=1}^{5} \\big((k+1)! - k!\\big) = (2! - 1!) + (3! - 2!) + \\cdots + (6! - 5!)$ — each intermediate factorial appears once positive and once negative." },
          { label: "Step 3: Only the endpoints survive", text: "The sum telescopes to $6! - 1! = 720 - 1 = 719$." },
          { label: "Step 4: Verify directly", text: "$1 \\cdot 1! + 2 \\cdot 2! + 3 \\cdot 3! + 4 \\cdot 4! + 5 \\cdot 5! = 1 + 4 + 18 + 96 + 600 = 719$ ✓. In general $\\sum_{k=1}^{n} k \\cdot k! = (n+1)! - 1$." }
        ],
        result: "$719$, an instance of $\\sum_{k=1}^{n} k \\cdot k! = (n+1)! - 1$ — telescoping in one line."
      }
    ],
    keyTakeaways: [
      "Summation is linear: constants factor out and sums add termwise, so any polynomial sum decomposes into the standard closed forms $\\sum k = \\frac{n(n+1)}{2}$, $\\sum k^{2} = \\frac{n(n+1)(2n+1)}{6}$, $\\sum k^{3} = \\left(\\frac{n(n+1)}{2}\\right)^{2}$.",
      "Geometric sums have the closed form $\\sum_{k=0}^{n} x^{k} = \\frac{x^{n+1}-1}{x-1}$ (finite) and $\\frac{1}{1-x}$ when $|x| < 1$; the harmonic numbers satisfy no rational closed form but obey $H_n = \\ln n + O(1)$.",
      "Telescoping — writing $a_k$ as $b_k - b_{k-1}$ so that $\\sum (b_k - b_{k-1}) = b_n - b_0$ — evaluates whole families of sums (like $\\sum k \\cdot k! = (n+1)! - 1$) in a single cancellation."
    ],
    quiz: [
      {
        q: "Using linearity, $\\sum_{k=1}^{n} (2a_k - 3b_k)$ equals:",
        options: [
          "$2\\sum a_k \\cdot 3\\sum b_k$",
          "$2\\sum_{k=1}^{n} a_k - 3\\sum_{k=1}^{n} b_k$",
          "$(2 - 3)\\sum_{k=1}^{n} a_k b_k$",
          "$\\sum_{k=1}^{n} a_k - \\sum_{k=1}^{n} b_k$"
        ],
        answer: 1,
        explanation: "Constants distribute over the sum and sums add and subtract termwise: linearity means $\\sum (c\\,a_k + d\\,b_k) = c\\sum a_k + d\\sum b_k$. Multiplying the two sums (option A) or the summands (option C) is a different, nonlinear object."
      },
      {
        q: "The value of $\\sum_{k=1}^{n} k^{3}$ is:",
        options: [
          "$\\frac{n(n+1)(2n+1)}{6}$",
          "$\\frac{n^2(n+1)^2}{4}$ — the square of $\\sum_{k=1}^{n} k$",
          "$\\left(\\frac{n(n+1)(2n+1)}{6}\\right)^{2}$",
          "$\\frac{n(n+1)}{2}$"
        ],
        answer: 1,
        explanation: "The sum of the first $n$ cubes is the square of the triangular number: $\\sum_{k=1}^{n} k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$. Option A is $\\sum k^2$; squaring it (option C) is the classic distractor."
      },
      {
        q: "$\\sum_{k=0}^{n} 2^{k}$ equals:",
        options: [
          "$2^{n}$",
          "$2^{n+1} - 1$",
          "$2^{n+1} - 2$",
          "$\\frac{2^{n}-1}{2}$"
        ],
        answer: 1,
        explanation: "Geometric series with $x = 2$: $\\frac{2^{n+1} - 1}{2 - 1} = 2^{n+1} - 1$. This exact count is the number of nodes in a complete binary tree with $n$ levels below the root."
      },
      {
        q: "Which statement about the harmonic numbers $H_n = \\sum_{k=1}^{n} 1/k$ is true?",
        options: [
          "$H_n$ stays below $1.5$ for all $n$, since the terms shrink geometrically",
          "$H_n = \\Theta(\\lg n)$",
          "$H_n = \\ln n + O(1)$ — it diverges, but only logarithmically",
          "$H_n$ converges to Euler's constant $\\gamma \\approx 0.5772$"
        ],
        answer: 2,
        explanation: "The terms shrink only like $1/k$, not geometrically, so the series diverges; the integral comparison gives $\\ln(n+1) \\le H_n \\le 1 + \\ln n$, i.e. $H_n = \\ln n + O(1)$. Note $\\lg n = \\ln n / \\ln 2$ differs from $\\ln n$ by a constant factor, so option B claims the same growth — but option C is the sharper, book-standard statement of the same fact including the divergence."
      }
    ]
  },

  // ------------------------------------------------------------- 36.2
  {
    sectionId: "clrs-ch36-s2",
    readingTime: 7,
    intro: "Most sums that arise in analyzing algorithms have no closed form — $\\sum_{k=1}^{n} \\lg k$ and $\\sum k \\lg k$ are typical. What the analysis chapters need is not an exact value but a tight asymptotic sandwich. Appendix A's toolkit for that has four moves: bound the number of terms times the largest term, compare the sum with an integral, split the range and bound each piece, and approximate by integrals to extract the leading constant.",
    objectives: [
      "Apply the term-count-times-maximum bound and the integral bounds for monotone summands",
      "Prove the harmonic sandwich $\\ln(n+1) \\le H_n \\le 1 + \\ln n$",
      "Bound sums by splitting the range, and approximate sums by integrals including Stirling's formula"
    ],
    concepts: [
      {
        term: "The linear bound: n terms times the maximum",
        kind: "method",
        statement: "For any sum of $n$ terms, $$\\sum_{k=1}^{n} a_k \\;\\le\\; n \\cdot \\max_{1 \\le k \\le n} a_k.$$ Applied to $\\sum_{k=1}^{n} k \\lg k$: each term is at most $n \\lg n$, so the sum is at most $n \\cdot n \\lg n = O(n^{2}\\lg n)$ — instant, but blind to the distribution of term sizes.",
        detail: "This is the fallback when nothing else is known; it is tight when all terms are comparable (like $\\sum k$) and loose when they vary wildly (like $\\sum 2^{k}$, where it overshoots by a factor of $n$ — the last term alone is half the geometric sum)."
      },
      {
        term: "Bounding summations by integrals",
        kind: "theorem",
        statement: "If $f$ is **monotonically increasing**, then $$\\int_{m-1}^{n} f(x)\\,dx \\;\\le\\; \\sum_{k=m}^{n} f(k) \\;\\le\\; \\int_{m}^{n+1} f(x)\\,dx.$$ If $f$ is **monotonically decreasing**, the inequalities reverse: $$\\int_{m}^{n+1} f(x)\\,dx \\;\\le\\; \\sum_{k=m}^{n} f(k) \\;\\le\\; \\int_{m-1}^{n} f(x)\\,dx.$$ The picture: rectangles of width 1 and height $f(k)$ either contain the curve or sit inside it, depending on which side of the curve the sample point lands.",
        detail: "Why it works: for increasing $f$, the rectangle on $[k-1, k]$ with height $f(k)$ contains the graph, and the rectangle on $[k, k+1]$ with height $f(k)$ sits below it. Summing rectangle areas versus areas under the curve gives both inequalities. The decreasing case is the mirror image — the essential tool for $f(x) = 1/x$."
      },
      {
        term: "The harmonic sandwich",
        kind: "law",
        statement: "Applying the decreasing-case integral bound to $f(x) = 1/x$ over $[1, n]$: $$\\ln(n+1) \\;\\le\\; H_n \\;\\le\\; 1 + \\ln n.$$ Hence $H_n = \\ln n + \\Theta(1)$: the harmonic series diverges, but so slowly that $H_{1{,}000{,}000} \\approx 14.39$.",
        detail: "Check it at $n = 8$: $\\ln 9 \\approx 2.197 \\le H_8 = \\frac{761}{280} \\approx 2.718 \\le 1 + \\ln 8 \\approx 3.079$. This sandwich is the engine behind the $\\Theta(n \\lg n)$ average-case analyses of quicksort and random search trees, where the $i$-th comparison probability contributes $1/i$-type terms."
      },
      {
        term: "Splitting summations",
        kind: "method",
        statement: "Split the range of the index and bound each piece by its own best method. For the running example $\\sum_{k=1}^{n} k \\lg k$: the upper bound $O(n^{2}\\lg n)$ is the max bound, while the lower bound **discards** the first half of the range: $$\\sum_{k=1}^{n} k \\lg k \\;\\ge\\; \\sum_{k=\\lceil n/2 \\rceil}^{n} k \\lg k \\;\\ge\\; \\frac{n}{2} \\cdot \\frac{n}{2} \\lg \\frac{n}{2} \\;=\\; \\Omega(n^{2}\\lg n).$$ Hence $\\sum_{k=1}^{n} k \\lg k = \\Theta(n^{2} \\lg n)$.",
        detail: "Each kept term has $k \\ge n/2$ and $\\lg k \\ge \\lg(n/2)$, and there are $n/2$ such terms; for $n \\ge 4$, $\\lg(n/2) \\ge \\frac{1}{2}\\lg n$. Splitting is how one handles sums whose summands change character across the range — e.g. $\\sum \\lg k$ handled on dyadic blocks $[2^{i}, 2^{i+1})$."
      },
      {
        term: "Approximation by integrals and Stirling's formula",
        kind: "method",
        statement: "When a monotone summand has no closed form, the integral is a faithful proxy: $\\sum_{k=1}^{n} f(k) = \\int_{1}^{n} f(x)\\,dx \\pm (\\text{boundary terms})$, with error at most $|f(1)| + |f(n)|$ for monotone $f$. The flagship instance is $\\sum_{k=1}^{n} \\lg k = \\lg(n!)$, for which **Stirling's approximation** gives $$n! \\;=\\; \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^{n}\\left(1 + \\Theta\\!\\left(\\frac{1}{n}\\right)\\right), \\qquad \\text{so} \\qquad \\lg(n!) = n\\lg n - \\Theta(n).$$",
        detail: "For $n = 10$: $10! = 3{,}628{,}800$ and Stirling's leading factor gives $\\sqrt{20\\pi}\\,(10/e)^{10} \\approx 3{,}598{,}696$ — within 1%. The identity $\\lg(n!) = n \\lg n - \\Theta(n)$ is quoted throughout the sorting lower bound: comparison sorting needs $\\lg(n!) = \\Theta(n \\lg n)$ comparisons in the worst case."
      }
    ],
    figures: [
      {
        caption: "The integral sandwich under the harmonic series. Filled rectangles of width 1 and height $1/k$ on $[k, k+1]$ sit **under** the curve $y = 1/x$ (their total area is exactly $H_8 = \\frac{761}{280} \\approx 2.718$), while the dashed rectangles of height $1/k$ on $[k-1, k]$, drawn for $k = 2, \\ldots, 9$, sit **over** it (total $H_9 - 1 \\approx 1.829$). The area under the curve itself is $\\int_{1}^{9} \\frac{dx}{x} = \\ln 9 \\approx 2.197$, trapped between the two staircase totals: $H_9 - 1 \\le \\ln 9 \\le H_8$, i.e. $\\ln(n+1) \\le H_n \\le 1 + \\ln n$.",
        svg: '<svg viewBox="0 0 720 380" width="100%" role="img" aria-label="Bar staircase rectangles under and over the curve y equals one over x, showing that the harmonic sum is sandwiched by natural logarithms."><text x="70" y="34" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" font-weight="700">bounding H₈ by the area under y = 1/x</text><text x="592" y="34" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" font-style="italic">y = 1/x</text><rect x="70" y="60" width="58" height="240" fill="currentColor" fill-opacity="0.13"/><rect x="128" y="180" width="58" height="120" fill="currentColor" fill-opacity="0.13"/><rect x="186" y="220" width="58" height="80" fill="currentColor" fill-opacity="0.13"/><rect x="244" y="240" width="58" height="60" fill="currentColor" fill-opacity="0.13"/><rect x="302" y="252" width="58" height="48" fill="currentColor" fill-opacity="0.13"/><rect x="360" y="260" width="58" height="40" fill="currentColor" fill-opacity="0.13"/><rect x="418" y="265.71" width="58" height="34.29" fill="currentColor" fill-opacity="0.13"/><rect x="476" y="270" width="58" height="30" fill="currentColor" fill-opacity="0.13"/><rect x="70" y="180" width="58" height="120" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.6"/><rect x="128" y="220" width="58" height="80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.6"/><rect x="186" y="240" width="58" height="60" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.6"/><rect x="244" y="252" width="58" height="48" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.6"/><rect x="302" y="260" width="58" height="40" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.6"/><rect x="360" y="265.71" width="58" height="34.29" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.6"/><rect x="418" y="270" width="58" height="30" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.6"/><rect x="476" y="273.33" width="58" height="26.67" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.6"/><polyline points="70,60 72.9,71.4 75.8,81.8 78.7,91.3 81.6,100 84.5,108 87.4,115.4 90.3,122.2 93.2,128.6 96.1,134.5 99,140 101.9,145.2 104.8,150 107.7,154.5 110.6,158.8 113.5,162.9 116.4,166.7 119.3,170.3 122.2,173.7 125.1,176.9 128,180 130.9,182.9 133.8,185.7 136.7,188.4 139.6,190.9 142.5,193.3 145.4,195.7 148.3,197.9 151.2,200 154.1,202 157,204 159.9,205.9 162.8,207.7 165.7,209.4 168.6,211.1 171.5,212.7 174.4,214.3 177.3,215.8 180.2,217.2 183.1,218.6 186,220 188.9,221.3 191.8,222.6 194.7,223.8 197.6,225 200.5,226.2 203.4,227.3 206.3,228.4 209.2,229.4 212.1,230.4 215,231.4 217.9,232.4 220.8,233.3 223.7,234.2 226.6,235.1 229.5,236 232.4,236.8 235.3,237.7 238.2,238.5 241.1,239.2 244,240 246.9,240.7 249.8,241.5 252.7,242.2 255.6,242.9 258.5,243.5 261.4,244.2 264.3,244.8 267.2,245.5 270.1,246.1 273,246.7 275.9,247.3 278.8,247.8 281.7,248.4 284.6,248.9 287.5,249.5 290.4,250 293.3,250.5 296.2,251 299.1,251.5 302,252 304.9,252.5 307.8,252.9 310.7,253.4 313.6,253.8 316.5,254.3 319.4,254.7 322.3,255.1 325.2,255.6 328.1,256 331,256.4 333.9,256.8 336.8,257.1 339.7,257.5 342.6,257.9 345.5,258.3 348.4,258.6 351.3,259 354.2,259.3 357.1,259.7 360,260 362.9,260.3 365.8,260.7 368.7,261 371.6,261.3 374.5,261.6 377.4,261.9 380.3,262.2 383.2,262.5 386.1,262.8 389,263.1 391.9,263.4 394.8,263.6 397.7,263.9 400.6,264.2 403.5,264.4 406.4,264.7 409.3,265 412.2,265.2 415.1,265.5 418,265.7 420.9,266 423.8,266.2 426.7,266.4 429.6,266.7 432.5,266.9 435.4,267.1 438.3,267.3 441.2,267.6 444.1,267.8 447,268 449.9,268.2 452.8,268.4 455.7,268.6 458.6,268.8 461.5,269 464.4,269.2 467.3,269.4 470.2,269.6 473.1,269.8 476,270 478.9,270.2 481.8,270.4 484.7,270.6 487.6,270.7 490.5,270.9 493.4,271.1 496.3,271.3 499.2,271.4 502.1,271.6 505,271.8 507.9,271.9 510.8,272.1 513.7,272.3 516.6,272.4 519.5,272.6 522.4,272.7 525.3,272.9 528.2,273 531.1,273.2 534,273.3 536.9,273.5 539.8,273.6 542.7,273.8 545.6,273.9 548.5,274.1 551.4,274.2 554.3,274.3 557.2,274.5 560.1,274.6 563,274.7 565.9,274.9 568.8,275 571.7,275.1 574.6,275.3 577.5,275.4 580.4,275.5 583.3,275.6 586.2,275.8 589.1,275.9 592,276" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="70" y1="300" x2="70" y2="52" stroke="currentColor" stroke-width="1.5"/><line x1="70" y1="300" x2="600" y2="300" stroke="currentColor" stroke-width="1.5"/><polygon points="70,46 65.5,58 74.5,58" fill="currentColor"/><polygon points="606,300 594,295.5 594,304.5" fill="currentColor"/><line x1="70" y1="60" x2="64" y2="60" stroke="currentColor" stroke-width="1.2"/><line x1="70" y1="180" x2="64" y2="180" stroke="currentColor" stroke-width="1.2"/><line x1="70" y1="220" x2="64" y2="220" stroke="currentColor" stroke-width="1.2"/><text x="58" y="64" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">1</text><text x="58" y="184" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">1/2</text><text x="58" y="224" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">1/3</text><line x1="70" y1="294" x2="70" y2="300" stroke="currentColor" stroke-width="1.2"/><line x1="186" y1="294" x2="186" y2="300" stroke="currentColor" stroke-width="1.2"/><line x1="302" y1="294" x2="302" y2="300" stroke="currentColor" stroke-width="1.2"/><line x1="418" y1="294" x2="418" y2="300" stroke="currentColor" stroke-width="1.2"/><line x1="534" y1="294" x2="534" y2="300" stroke="currentColor" stroke-width="1.2"/><text x="70" y="316" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">1</text><text x="186" y="316" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">3</text><text x="302" y="316" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">5</text><text x="418" y="316" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">7</text><text x="534" y="316" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">9</text><text x="606" y="316" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" font-style="italic">x</text><line x1="70" y1="120" x2="592" y2="276" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><text x="384" y="338" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">filled bars: area H₈ = 761/280 ≈ 2.718 — under the curve, so H₈ ≥ ln 9</text><text x="384" y="358" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">dashed bars: area H₉ − 1 ≈ 1.829 — over the curve, so H₉ − 1 ≤ ln 9 ≈ 2.197</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Sandwiching a harmonic number",
        problem: "Bound $H_{8}$ from both sides using the integral method, and compare with the exact value.",
        steps: [
          { label: "Step 1: State the decreasing-case bounds", text: "Since $f(x) = 1/x$ is decreasing, the sandwich $\\int_{m}^{n+1} f \\le \\sum_{k=m}^{n} f(k) \\le \\int_{m-1}^{n} f$ applies with $m = 1$ for the left side. For the right side the rectangles sit on $[k-1, k]$ and need $k \\ge 2$ to avoid the pole at $0$, so the first term is split off: $H_n \\le 1 + \\int_{1}^{n} \\frac{dx}{x}$." },
          { label: "Step 2: Evaluate the integrals", text: "$\\int \\frac{dx}{x} = \\ln x$, so with $n = 8$: lower $= \\ln 9 \\approx 2.197$ and upper $= 1 + \\ln 8 \\approx 3.079$." },
          { label: "Step 3: Compute the exact value", text: "$H_8 = 1 + \\frac{1}{2} + \\cdots + \\frac{1}{8} = \\frac{840 + 420 + 280 + 210 + 168 + 140 + 120 + 105}{840} = \\frac{761}{280} \\approx 2.718$." },
          { label: "Step 4: Check the sandwich", text: "$2.197 \\le 2.718 \\le 3.079$ ✓ — the true value sits comfortably inside, and the gap between the bounds is the constant $1$." }
        ],
        result: "$\\ln 9 \\approx 2.197 \\le H_8 = 2.718 \\le 1 + \\ln 8 \\approx 3.079$: the integral method pins $H_8$ to within a constant of $\\ln 8 \\approx 2.079$, and the error never grows with $n$."
      },
      {
        title: "Splitting a sum for a tight lower bound",
        problem: "Show that $\\sum_{k=1}^{n} k \\lg k = \\Theta(n^{2} \\lg n)$ by splitting, and check the numerics at $n = 8$.",
        steps: [
          { label: "Step 1: Upper bound by max × count", text: "Every term satisfies $k \\lg k \\le n \\lg n$, so $\\sum_{k=1}^{n} k \\lg k \\le n \\cdot n \\lg n = O(n^{2}\\lg n)$." },
          { label: "Step 2: Split the range at n/2", text: "Keep only $k \\in [\\lceil n/2 \\rceil, n]$: there are $n/2$ such terms, each with $k \\ge n/2$ and $\\lg k \\ge \\lg(n/2)$, giving $\\sum \\ge \\frac{n}{2} \\cdot \\frac{n}{2} \\lg\\frac{n}{2}$." },
          { label: "Step 3: Simplify the lower bound", text: "For $n \\ge 4$: $\\lg\\frac{n}{2} = \\lg n - 1 \\ge \\frac{1}{2}\\lg n$, so the kept part is at least $\\frac{n^{2}}{8}\\lg n = \\Omega(n^{2}\\lg n)$." },
          { label: "Step 4: Numerical check at n = 8", text: "Exact: $\\sum_{k=1}^{8} k \\lg k = 0 + 2 + 4.755 + 8 + 11.61 + 15.51 + 19.65 + 24 \\approx 85.53$. Upper bound: $\\lg 8 \\cdot \\frac{8 \\cdot 9}{2} = 108$. Kept-piece bound: terms $k = 5, \\ldots, 8$ sum to $70.77 \\ge 26 \\cdot \\lg 5 \\approx 60.4$ ✓." }
        ],
        result: "$\\Theta(n^{2}\\lg n)$ confirmed: at $n = 8$ the true value $85.53$ lies between the split lower bound $60.4$ and the max upper bound $108$."
      }
    ],
    keyTakeaways: [
      "Integral bounds: for increasing $f$, $\\int_{m-1}^{n} f \\le \\sum_{k=m}^{n} f(k) \\le \\int_{m}^{n+1} f$; for decreasing $f$ the inequalities reverse — rectangles of width 1 either contain the curve or are contained by it.",
      "The harmonic sandwich $\\ln(n+1) \\le H_n \\le 1 + \\ln n$ gives $H_n = \\ln n + \\Theta(1)$, the key fact behind $\\Theta(n \\lg n)$ average-case analyses; Stirling's formula gives the companion fact $\\lg(n!) = n \\lg n - \\Theta(n)$ behind the comparison-sorting lower bound.",
      "Splitting a sum — keeping only the range where terms are large — turns crude bounds into tight ones: discarding $k < n/2$ yields the $\\Omega(n^{2} \\lg n)$ lower bound for $\\sum k \\lg k$, matching the $n$-terms-times-max upper bound."
    ],
    quiz: [
      {
        q: "Let $f$ be monotonically decreasing and positive. Which inequality always holds for $m \\ge 2$?",
        options: [
          "$\\sum_{k=m}^{n} f(k) \\le \\int_{m}^{n} f(x)\\,dx$",
          "$\\sum_{k=m}^{n} f(k) \\le \\int_{m-1}^{n} f(x)\\,dx$",
          "$\\sum_{k=m}^{n} f(k) \\ge \\int_{m-1}^{n} f(x)\\,dx$",
          "$\\sum_{k=m}^{n} f(k) = \\int_{m}^{n} f(x)\\,dx$"
        ],
        answer: 1,
        explanation: "For decreasing $f$ and $x \\in [k-1, k]$, monotonicity gives $f(x) \\ge f(k)$: the curve lies above the rectangle of height $f(k)$, so that rectangle's area is at most the integral over $[k-1, k]$. Summing over $k = m, \\ldots, n$ yields $\\sum f(k) \\le \\int_{m-1}^{n} f$; option C states the reverse. The companion lower bound samples from the other side of each sample point: $\\sum_{k=m}^{n} f(k) \\ge \\int_{m}^{n+1} f$."
      },
      {
        q: "Which of these is a valid sandwich for the harmonic numbers?",
        options: [
          "$\\ln n \\le H_n \\le \\ln(n+1)$",
          "$\\ln(n+1) \\le H_n \\le 1 + \\ln n$",
          "$\\frac{n}{2} \\le H_n \\le n$",
          "$1 \\le H_n \\le \\lg n + 1$"
        ],
        answer: 1,
        explanation: "Both integrals sandwich $H_n$ within an additive constant of $\\ln n$: the filled lower staircase has area $H_n \\ge \\int_{1}^{n+1} dx/x = \\ln(n+1)$ and the dashed upper staircase gives $H_n \\le 1 + \\int_{1}^{n} dx/x = 1 + \\ln n$. Option A has the gap on the wrong side; option C ignores that the terms decay; option D would make $H_n$ bounded, contradicting divergence."
      },
      {
        q: "In bounding $\\sum_{k=1}^{n} k \\lg k$, splitting the range at $n/2$ is done in order to:",
        options: [
          "make the sum telescope, like $\\sum k \\cdot k!$",
          "obtain a lower bound: on $[n/2, n]$ every term is at least $(n/2)\\lg(n/2)$, giving $\\Omega(n^{2}\\lg n)$",
          "reduce the number of terms so the sum is easier to compute exactly",
          "convert the sum into an integral that can be evaluated in closed form"
        ],
        answer: 1,
        explanation: "The upper bound $O(n^{2}\\lg n)$ is immediate from $n$ terms times the max $n\\lg n$; the matching lower bound comes from keeping only the upper half of the range, where all $n/2$ surviving terms are simultaneously large — that is the essence of the splitting technique."
      },
      {
        q: "Stirling's approximation yields, for the base-2 logarithm of $n!$:",
        options: [
          "$\\lg(n!) = \\Theta(n \\lg n)$ with leading term $n \\lg n$ and error $-\\Theta(n)$",
          "$\\lg(n!) = n \\lg n$ exactly",
          "$\\lg(n!) = \\Theta(n)$",
          "$\\lg(n!) = \\frac{n(n+1)}{2}$"
        ],
        answer: 0,
        explanation: "$n! = \\sqrt{2\\pi n}(n/e)^{n}(1 + \\Theta(1/n))$, so $\\lg(n!) = n\\lg n - n\\lg e + \\Theta(\\lg n) = n \\lg n - \\Theta(n)$. The linear correction term is what separates the true count from the crude $n$-terms-times-max bound, and it is why the comparison-sorting lower bound is stated as $\\Theta(n \\lg n)$."
      }
    ]
  }
]
