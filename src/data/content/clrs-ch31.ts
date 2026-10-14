import type { SectionContent } from "../library"

// ============================================================================
// Cormen, Leiserson, Rivest, Stein — Introduction to Algorithms, 3rd Edition
// Chapter 31: Number-Theoretic Algorithms (Sections 31.1 – 31.9)
// Divisibility, Euclid's algorithm, modular arithmetic, modular linear
// equations, the CRT, modular exponentiation, RSA, primality testing,
// and integer factorization.
// ============================================================================

export const clrsCh31Content: SectionContent[] = [
  // ---------------------------------------------------------------- 31.1
  {
    sectionId: "clrs-ch31-s1",
    readingTime: 5,
    intro: "Number theory enters algorithms through one question: what can be computed about the integers when the integers involved are hundreds of digits long? This section assembles the primitive vocabulary — divisibility, the division theorem, common divisors, gcd and lcm — including the single most heavily used fact of the chapter: dividing by $n$ leaves a canonical remainder between $0$ and $n - 1$.",
    objectives: [
      "Apply the definition of divisibility and its closure under integer linear combinations",
      "State the division theorem with its uniqueness clause, including for negative dividends",
      "Compute gcd and lcm from divisor lists and verify the identity $\\gcd(a,b) \\cdot \\mathrm{lcm}(a,b) = ab$",
    ],
    concepts: [
      {
        term: "Divisibility",
        kind: "definition",
        statement: "For integers $d$ and $a$ with $d \\ne 0$, we write **$d \\mid a$** ($d$ divides $a$) if there is an integer $k$ with $a = kd$; $d$ is then a **divisor** of $a$. Every integer divides $0$, and if $d \\mid a$ with $a \\ne 0$ then $|d| \\le |a|$.",
        detail: "Divisibility is closed under integer linear combinations: if $d \\mid a$ and $d \\mid b$, then $d \\mid (ax + by)$ for all integers $x$ and $y$ — every common divisor of $a$ and $b$ divides every combination of them. This innocuous-looking fact powers the correctness of Euclid's algorithm (31.2) and the solvability theory of modular equations (31.4).",
      },
      {
        term: "The division theorem",
        kind: "theorem",
        statement: "For any integer $a$ and any positive integer $n$, there exist **unique** integers $q$ and $r$ such that $$a = qn + r \\quad \\text{and} \\quad 0 \\le r < n.$$ The values are $q = \\lfloor a/n \\rfloor$ (the quotient) and $r = a \\bmod n$ (the remainder).",
        detail: "Uniqueness: if $a = qn + r = q'n + r'$ with both remainders in range, then $n \\mid (r - r')$ while $|r - r'| < n$, forcing $r = r'$ (and $q = q'$). Beware negative dividends — $-11 = (-3) \\cdot 5 + 4$, so $-11 \\bmod 5 = 4$, not $-1$.",
      },
      {
        term: "Common divisors, gcd, and lcm",
        kind: "definition",
        statement: "For integers $a$ and $b$ not both zero, **$\\gcd(a, b)$** is the largest of their common divisors; for positive $a$ and $b$, **$\\mathrm{lcm}(a, b)$** is the smallest positive common multiple. The two are locked together by $$\\gcd(a,b) \\cdot \\mathrm{lcm}(a,b) = ab.$$",
        detail: "The fundamental theorem of arithmetic — every integer above 1 factors uniquely into primes — makes gcd and lcm look computable by comparing factorizations. The point of this chapter is that gcds can be computed far faster than factorizations: Euclid's algorithm (31.2) never factors anything, which matters because factoring (31.9) is believed intractable.",
      },
      {
        term: "The fundamental theorem of arithmetic",
        kind: "theorem",
        statement: "Every integer $a > 1$ factors uniquely as a product of primes (up to order): $a = p_1^{e_1} \\cdots p_k^{e_k}$. Existence by strong induction on $a$, uniqueness by Euclid's lemma ($p \\mid ab$ implies $p \\mid a$ or $p \\mid b$).",
        detail: "Uniqueness is what makes gcd-by-factorization well defined, but the chapter never factors: EUCLID computes gcds in $O(\\beta)$ operations while factoring is believed exponential, which is why RSA is safe.",
      },
      {
        term: "Residue classes $[a]_n$",
        kind: "notation",
        statement: "The class $[a]_n = \\{a + kn : k \\in \\mathbb{Z}\\}$ collects all integers with remainder $a \\bmod n$. There are exactly $n$ classes $[0]_n, \\ldots, [n-1]_n$, partitioning $\\mathbb{Z}$; Section 31.3 turns them into the ring $\\mathbb{Z}_n$.",
        detail: "The division theorem guarantees each integer lands in exactly one class (its remainder): $[a]_n = [b]_n$ iff $a \\equiv b \\pmod n$, the vocabulary modular arithmetic runs on.",
      },
    ],
    examples: [
      {
        title: "Divisors, gcd, lcm, and a negative division",
        problem: "List the divisors of 30 and 21, read off $\\gcd(30, 21)$ and $\\mathrm{lcm}(30, 21)$, verify the product identity, and express $a = -11$ under the division theorem with $n = 5$.",
        steps: [
          { label: "Divisors of 30", text: "Since $30 = 2 \\cdot 3 \\cdot 5$, the divisors are $\\{1, 2, 3, 5, 6, 10, 15, 30\\}$ — one per subset of the prime factors." },
          { label: "Divisors of 21", text: "$21 = 3 \\cdot 7$, so the divisors are $\\{1, 3, 7, 21\\}$." },
          { label: "Common divisors", text: "The common divisors are $\\{1, 3\\}$, so $\\gcd(30, 21) = 3$. Note $3 = 30 \\cdot (-2) + 21 \\cdot 3 = -60 + 63$ — the gcd is itself an integer combination, and both common divisors 1 and 3 divide it." },
          { label: "lcm and the identity", text: "Multiples of 30 first hit a multiple of 21 at $210 = 2 \\cdot 3 \\cdot 5 \\cdot 7$, so $\\mathrm{lcm}(30, 21) = 210$. Check: $\\gcd \\cdot \\mathrm{lcm} = 3 \\cdot 210 = 630 = 30 \\cdot 21$ ✓." },
          { label: "Negative dividend", text: "With $a = -11$ and $n = 5$: $q = \\lfloor -11/5 \\rfloor = -3$ and $r = -11 - (-3)(5) = 4$, so $-11 = (-3) \\cdot 5 + 4$ with $0 \\le 4 < 5$ — the remainder is 4, never $-1$." },
        ],
        result: "$\\gcd(30, 21) = 3$ and $\\mathrm{lcm}(30, 21) = 210$ with $3 \\cdot 210 = 630 = 30 \\cdot 21$; and $-11 \\bmod 5 = 4$ because the division theorem always lands the remainder in $[0, n)$.",
      },
      {
        title: "Residues mod 6",
        problem: "List the $6$ residue classes mod $6$, place $-11, 30, 21$ in theirs, and verify $\\gcd(30,21) = 3$ divides every combination.",
        steps: [
          { label: "Classes", text: "$[0]_6 = \\{\\ldots,-6,0,6,12,\\ldots\\}$, $[1]_6, [2]_6, [3]_6, [4]_6, [5]_6$: $6$ classes partitioning $\\mathbb{Z}$." },
          { label: "Place", text: "$-11 = (-2)\\cdot 6 + 1$: $[-11]_6 = [1]_6$. $30 = 5\\cdot 6+0$: $[0]_6$. $21 = 3\\cdot 6+3$: $[3]_6$." },
          { label: "Combinations", text: "$30x+21y$ is always a multiple of $3$: e.g. $30(-2)+21(3) = 3$: common divisors divide every combination, so $\\gcd$ does too." },
          { label: "lcm check", text: "$\\mathrm{lcm}(30,21) = 210$: $3 \\cdot 210 = 630 = 30 \\cdot 21$ ✓." },
        ],
        result: "$-11 \\in [1]_6$, $30 \\in [0]_6$, $21 \\in [3]_6$; $\\gcd(30,21) = 3$ with $3 \\cdot 210 = 630$.",
      },
    ],
    keyTakeaways: [
      "The division theorem pins every integer to a unique quotient and remainder $0 \\le r < n$ — the foundation on which $\\bmod$ is built.",
      "Common divisors are closed under integer combinations, which is why gcds can be computed without ever factoring.",
      "$\\gcd(a,b) \\cdot \\mathrm{lcm}(a,b) = ab$ ties the two central functions of the section together for positive $a, b$.",
    ],
    quiz: [
      {
        q: "By the division theorem, what is $-11 \\bmod 5$?",
        options: ["$-1$", "$4$", "$1$", "$0$"],
        answer: 1,
        explanation: "$-11 = (-3) \\cdot 5 + 4$ with $0 \\le 4 < 5$; the remainder must always land in the canonical range, even for negative dividends.",
      },
      {
        q: "If $d \\mid a$ and $d \\mid b$, which statement is guaranteed?",
        options: ["$d$ divides every integer linear combination $ax + by$", "$d$ divides exactly one of $a$ and $b$", "$a$ and $b$ must both be positive", "$d \\mid (a + 1)$"],
        answer: 0,
        explanation: "Closure under combinations: $ax + by$ is a multiple of $d$ whenever $a$ and $b$ are. The others fail (signs are irrelevant, $d$ divides both by assumption, and $a + 1$ need not be a multiple of $d$).",
      },
      {
        q: "What is $\\gcd(30, 21) \\cdot \\mathrm{lcm}(30, 21)$?",
        options: ["$30$", "$63$", "$630$", "$2100$"],
        answer: 2,
        explanation: "The product always equals $ab = 30 \\cdot 21 = 630$; here it is $3 \\cdot 210$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 31.2
  {
    sectionId: "clrs-ch31-s2",
    readingTime: 6,
    intro: "Euclid's algorithm is the oldest algorithm still in standard use — about 2,300 years old — and it computes gcds of 1000-digit numbers in microseconds without ever factoring anything. Its correctness rests on one line of algebra, and its running time is governed by the Fibonacci numbers, making it a classic case study in algorithm analysis. The extended version additionally returns the Bézout coefficients that make modular inverses computable.",
    objectives: [
      "Run EUCLID by hand and prove that the common-divisor set never changes",
      "Run EXTENDED-EUCLID and produce Bézout coefficients satisfying $ax + by = \\gcd(a, b)$",
      "Use Lamé's theorem to bound the number of recursive calls",
    ],
    concepts: [
      {
        term: "Euclid's algorithm",
        kind: "method",
        statement: "**`EUCLID(a, b)`** computes $\\gcd(a,b)$ by recursion: if $b = 0$ return $a$; otherwise return `EUCLID(b, a mod b)`. On $(30, 21)$ it runs $\\gcd(30,21) = \\gcd(21,9) = \\gcd(9,3) = \\gcd(3,0) = 3$.",
        detail: "Each call replaces the pair $(a, b)$ with $(b, a \\bmod b)$, and since $0 \\le a \\bmod b < b$ the second argument strictly shrinks, so the recursion terminates. The total cost is $O(\\beta)$ arithmetic operations on $\\beta$-bit inputs — exponential speedup over factoring both arguments.",
      },
      {
        term: "The remainder invariant",
        kind: "theorem",
        statement: "$\\gcd(a, b) = \\gcd(b, a \\bmod b)$: the pairs $(a, b)$ and $(b, a \\bmod b)$ have exactly the same set of common divisors, so the gcd rides the recursion unchanged down to $\\gcd(d, 0) = d$.",
        detail: "Write $a = qb + r$ with $r = a \\bmod b$. Any common divisor of $a$ and $b$ divides $r = a - qb$ (a combination); any common divisor of $b$ and $r$ divides $a = qb + r$. The same linear-combination argument shows $\\gcd(a,b)$ is the smallest positive value of $ax + by$ — Bézout coefficients always exist.",
      },
      {
        term: "Lamé's theorem",
        kind: "theorem",
        statement: "If $a > b \\ge 1$ and `EUCLID(a, b)` performs $k \\ge 1$ recursive calls, then $a \\ge F_{k+2}$ and $b \\ge F_{k+1}$, where $F_0 = 0$, $F_1 = 1$ is the Fibonacci sequence. Consequently the number of recursive calls is $O(\\lg b)$, and EUCLID costs $O(\\beta)$ arithmetic operations (or $O(\\beta^3)$ bit operations) on $\\beta$-bit inputs.",
        detail: "The worst case is consecutive Fibonacci numbers: every quotient is 1 and the arguments shrink as slowly as the recursion permits (two steps of EUCLID cost at least one Fibonacci step of size). Since $F_k \\approx \\varphi^k / \\sqrt{5}$, inverting gives $k = O(\\lg b)$ — EUCLID(5, 3), on the tightest small input, already needs 3 calls.",
      },
      {
        term: "EXTENDED-EUCLID procedure",
        kind: "method",
        statement: "EXTENDED-EUCLID($a,b$) returns $(d,x,y)$ with $d = \\gcd(a,b) = ax+by$: if $b = 0$ return $(a,1,0)$; else recurse on $(b, a \\bmod b)$ to get $(d,x',y')$ and return $(d, y', x'-\\lfloor a/b \\rfloor y')$. Same $O(\\lg b)$ calls as EUCLID.",
        detail: "The unwinding uses $a = qb+r$: $d = x'b+y'r = y'a+(x'-qy')b$. Section 31.4 reads $x \\bmod n$ as the modular inverse when $d = 1$.",
      },
      {
        term: "Bézout's identity",
        kind: "theorem",
        statement: "For any $a,b$ not both zero there exist integers $x,y$ with $ax+by = \\gcd(a,b)$, and $\\gcd(a,b)$ is the smallest positive such combination. EXTENDED-EUCLID constructs the coefficients; the remainder invariant proves no smaller positive combination exists.",
        detail: "Corollary: $\\gcd(a,n) = 1$ iff $a$ has an inverse mod $n$ (take $ax+ny = 1$: $ax \\equiv 1$). RSA's $d = e^{-1} \\bmod \\varphi(n)$ is a Bézout coefficient.",
      },
    ],
    figures: [
      {
        caption: "Figure — EUCLID(30, 21) as a division staircase: $30 = 1 \\cdot 21 + 9$, $21 = 2 \\cdot 9 + 3$, $9 = 3 \\cdot 3 + 0$. Each highlighted remainder becomes the next divisor; when the remainder hits 0, the divisor $b = 3$ is the gcd.",
        afterConcept: 2,
        svg: `
    <svg viewBox="0 0 720 336" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Euclid division staircase for the gcd of 30 and 21">   <defs>
    <marker id="euArrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">   <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
    <text x="360" y="24" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">EUCLID(30, 21): each remainder becomes the next divisor</text>
    <text x="98" y="40" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.7">a</text>   <text x="196" y="40" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.7">q</text>
    <text x="286" y="40" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.7">b</text>   <text x="428" y="40" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.7">r = a mod b</text>
    <rect x="50" y="46" width="96" height="54" rx="9" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>   <text x="98" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">30</text>
    <text x="160" y="81" text-anchor="middle" font-size="18" fill="currentColor">=</text>   <rect x="172" y="46" width="48" height="54" rx="9" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>
    <text x="196" y="80" text-anchor="middle" font-size="20" font-weight="700" fill="currentColor">1</text>   <text x="230" y="80" text-anchor="middle" font-size="16" fill="currentColor">·</text>
    <rect x="238" y="46" width="96" height="54" rx="9" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>   <text x="286" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">21</text>
    <text x="348" y="80" text-anchor="middle" font-size="18" fill="currentColor">+</text>   <rect x="360" y="46" width="136" height="54" rx="9" fill="currentColor" fill-opacity="0.22" stroke="currentColor"/>
    <text x="428" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">9</text>   <text x="516" y="66" font-size="12" fill="currentColor" opacity="0.85">the pair becomes</text>
    <text x="516" y="84" font-size="12" fill="currentColor" opacity="0.85">(b, r) = (21, 9)</text>   <path d="M 286 102 C 240 120, 160 118, 104 130" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#euArrow)"/>
    <text x="168" y="112" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">b → next a</text>
    <path d="M 428 102 C 392 120, 330 118, 292 130" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#euArrow)"/>   <text x="380" y="108" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">r → next b</text>   <rect x="50" y="134" width="96" height="54" rx="9" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>   <text x="98" y="168" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">21</text>
    <text x="160" y="169" text-anchor="middle" font-size="18" fill="currentColor">=</text>   <rect x="172" y="134" width="48" height="54" rx="9" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>
    <text x="196" y="168" text-anchor="middle" font-size="20" font-weight="700" fill="currentColor">2</text>   <text x="230" y="168" text-anchor="middle" font-size="16" fill="currentColor">·</text>
    <rect x="238" y="134" width="96" height="54" rx="9" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>   <text x="286" y="168" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">9</text>
    <text x="348" y="168" text-anchor="middle" font-size="18" fill="currentColor">+</text>   <rect x="360" y="134" width="136" height="54" rx="9" fill="currentColor" fill-opacity="0.22" stroke="currentColor"/>
    <text x="428" y="168" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">3</text>   <text x="516" y="154" font-size="12" fill="currentColor" opacity="0.85">the pair becomes</text>
    <text x="516" y="172" font-size="12" fill="currentColor" opacity="0.85">(b, r) = (9, 3)</text>   <path d="M 286 190 C 240 208, 160 206, 104 218" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#euArrow)"/>
    <text x="168" y="200" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">b → next a</text>
    <path d="M 428 190 C 392 208, 330 206, 292 218" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#euArrow)"/>   <text x="380" y="196" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">r → next b</text>   <rect x="50" y="222" width="96" height="54" rx="9" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>   <text x="98" y="256" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">9</text>
    <text x="160" y="257" text-anchor="middle" font-size="18" fill="currentColor">=</text>   <rect x="172" y="222" width="48" height="54" rx="9" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>
    <text x="196" y="256" text-anchor="middle" font-size="20" font-weight="700" fill="currentColor">3</text>   <text x="230" y="256" text-anchor="middle" font-size="16" fill="currentColor">·</text>
    <rect x="238" y="222" width="96" height="54" rx="9" fill="currentColor" fill-opacity="0.22" stroke="currentColor"/>   <text x="286" y="256" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">3</text>
    <text x="348" y="256" text-anchor="middle" font-size="18" fill="currentColor">+</text>   <rect x="360" y="222" width="136" height="54" rx="9" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-dasharray="4 4"/>
    <text x="428" y="256" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">0</text>   <text x="516" y="242" font-size="12" fill="currentColor" opacity="0.85">r = 0: b divides a,</text>
    <text x="516" y="260" font-size="12" fill="currentColor" opacity="0.85">so gcd = the last b = 3</text>   <rect x="150" y="288" width="420" height="36" rx="18" fill="currentColor" fill-opacity="0.1" stroke="currentColor"/>
    <text x="360" y="311" text-anchor="middle" font-size="13.5" font-weight="600" fill="currentColor">gcd(30, 21) = gcd(21, 9) = gcd(9, 3) = gcd(3, 0) = 3</text>
  </svg>`,
      },
    ],
    examples: [
      {
        title: "EXTENDED-EUCLID(99, 78): the gcd plus its Bézout certificate",
        problem: "Run EXTENDED-EUCLID on $a = 99$, $b = 78$ to obtain $d$, $x$, $y$ with $d = ax + by = \\gcd(99, 78)$.",
        steps: [
          { label: "Forward (Euclid) phase", text: "$99 = 1 \\cdot 78 + 21$; $78 = 3 \\cdot 21 + 15$; $21 = 1 \\cdot 15 + 6$; $15 = 2 \\cdot 6 + 3$; $6 = 2 \\cdot 3 + 0$. Five divisions later, $\\gcd(99, 78) = 3$." },
          { label: "Base of the recursion", text: "At the bottom, $\\gcd(3, 0)$ returns the trivial certificate $(d, x, y) = (3, 1, 0)$, since $3 = 1 \\cdot 3 + 0 \\cdot 0$." },
          { label: "The unwinding rule", text: "If the level below has $d = x'b + y'(a \\bmod b)$ and $a = qb + (a \\bmod b)$, then $d = y'a + (x' - qy')b$. Example: from $3 = -2 \\cdot 21 + 3 \\cdot 15$ and $21 = 1 \\cdot 15 + 6$: $3 = 3 \\cdot 15 - 2 \\cdot 21 = 3 \\cdot 15 - 2(1 \\cdot 15 + 6) = 1 \\cdot 15 - 2 \\cdot 6$ ✓." },
          { label: "Unwind all levels", text: "$\\gcd(15,6)$: $3 = 1 \\cdot 15 - 2 \\cdot 6$; $\\gcd(21,15)$: $3 = -2 \\cdot 21 + 3 \\cdot 15$; $\\gcd(78,21)$: $3 = 3 \\cdot 78 - 11 \\cdot 21$; $\\gcd(99,78)$: $3 = -11 \\cdot 99 + 14 \\cdot 78$." },
          { label: "Verify", text: "$-11 \\cdot 99 + 14 \\cdot 78 = -1089 + 1092 = 3$ ✓ — exactly the gcd, so $(d, x, y) = (3, -11, 14)$." },
        ],
        result: "EXTENDED-EUCLID(99, 78) returns $d = 3$, $x = -11$, $y = 14$. The recursion performs exactly as many calls as plain EUCLID — $O(\\lg b)$ of them — and the coefficients $x, y$ are exactly what Section 31.4 turns into modular inverses.",
      },
      {
        title: "EXTENDED-EUCLID(30, 21) unwound",
        problem: "Run EXTENDED-EUCLID on $(30,21)$ to get $d,x,y$ with $30x+21y = d$.",
        steps: [
          { label: "Forward", text: "$30 = 1\\cdot 21+9$; $21 = 2\\cdot 9+3$; $9 = 3\\cdot 3+0$: $d = 3$." },
          { label: "Base", text: "$(3,0) \\to (3,1,0)$ since $3 = 1\\cdot 3+0\\cdot 0$." },
          { label: "Unwind", text: "$(9,3)$: $q = 3$: $(3, 0, 1-3\\cdot 0 = 1)$? Systematically: $(9,3)$ gives $(3,0,1)$; $(21,9)$ with $q = 2$ gives $(3,1,-2)$; $(30,21)$ with $q = 1$ gives $(3,-2,3)$? Check: $-2\\cdot 30+3\\cdot 21 = -60+63 = 3$ ✓." },
          { label: "Verify", text: "$-2\\cdot 30+3\\cdot 21 = 3 = \\gcd$: $(d,x,y) = (3,-2,3)$." },
        ],
        result: "EXTENDED-EUCLID$(30,21) = (3,-2,3)$: $3$ is the smallest positive combination of $30$ and $21$.",
      },
    ],
    keyTakeaways: [
      "EUCLID computes gcds without factoring, in $O(\\lg b)$ recursive calls; the invariant is that $(a, b)$ and $(b, a \\bmod b)$ share their common divisors.",
      "EXTENDED-EUCLID yields Bézout coefficients $ax + by = \\gcd(a,b)$ for free — the gcd is the smallest positive combination of $a$ and $b$.",
      "Consecutive Fibonacci numbers are the worst case (Lamé's theorem), giving $O(\\beta)$ arithmetic operations on $\\beta$-bit inputs.",
    ],
    quiz: [
      {
        q: "How many division steps (rows of the form $a = qb + r$) does EUCLID(30, 21) perform before hitting a zero remainder?",
        options: ["$2$", "$3$", "$4$", "$5$"],
        answer: 1,
        explanation: "The staircase is $30 = 1 \\cdot 21 + 9$, $21 = 2 \\cdot 9 + 3$, $9 = 3 \\cdot 3 + 0$ — exactly three divisions, the last revealing $b \\mid a$.",
      },
      {
        q: "Which inputs make EUCLID slowest for its size?",
        options: ["Consecutive Fibonacci numbers", "Consecutive powers of 2", "Pairs where $a$ is prime", "Pairs with $\\gcd(a, b) = 1$ only"],
        answer: 0,
        explanation: "Lamé's theorem: every quotient 1 means the arguments shrink as slowly as possible; Euclid(5, 3), Euclid(8, 5), Euclid(13, 8), … are the tight cases.",
      },
      {
        q: "EXTENDED-EUCLID(99, 78) returns which certificate?",
        options: ["$d = 3,\\ x = -11,\\ y = 14$", "$d = 3,\\ x = 14,\\ y = -11$", "$d = 1,\\ x = -11,\\ y = 14$", "$d = 13,\\ x = 3,\\ y = -4$"],
        answer: 0,
        explanation: "Check it: $-11 \\cdot 99 + 14 \\cdot 78 = -1089 + 1092 = 3$. The swapped version gives $14 \\cdot 99 - 11 \\cdot 78 = 528 \\ne 3$, and $\\gcd(99, 78) = 3$, not 1.",
      },
    ],
  },

  // ---------------------------------------------------------------- 31.3
  {
    sectionId: "clrs-ch31-s3",
    readingTime: 6,
    intro: "Modular arithmetic replaces equality with congruence mod $n$ and turns the infinite integers into the finite system $\\mathbb{Z}_n$. The residues coprime to $n$ form a multiplicative group, and one theorem about finite groups — Lagrange's — delivers Fermat's little theorem, the engine that powers everything from primality testing (31.8) to RSA (31.7).",
    objectives: [
      "Define congruence and confirm that arithmetic on residue classes is well defined",
      "Describe the multiplicative group $\\mathbb{Z}_n^*$ and compute $\\varphi(n)$ for primes and prime powers",
      "Derive Fermat's little theorem from Lagrange's theorem and apply it",
    ],
    concepts: [
      {
        term: "Congruence modulo $n$",
        kind: "definition",
        statement: "**$a \\equiv b \\pmod n$** means $n \\mid (a - b)$, equivalently $a \\bmod n = b \\bmod n$. Congruence is an equivalence relation whose classes $[a]_n = \\{a + kn : k \\in \\mathbb{Z}\\}$ partition $\\mathbb{Z}$, and the operations $[a] + [b] = [a+b]$, $[a] - [b] = [a-b]$, $[a] \\cdot [b] = [ab]$ are well defined — replacing operands by congruent ones changes nothing.",
        detail: "The one law that fails is cancellation: $ab \\equiv ac \\pmod n$ implies $b \\equiv c \\pmod n$ only when $\\gcd(a, n) = 1$. Otherwise cancellation shrinks the modulus to $n/\\gcd(a,n)$ — e.g. $2 \\cdot 10 \\equiv 2 \\cdot 15 \\pmod{10}$ (both are $0$) while $10 \\not\\equiv 15$.",
      },
      {
        term: "The multiplicative group $\\mathbb{Z}_n^*$",
        kind: "definition",
        statement: "The residues coprime to $n$ form **$\\mathbb{Z}_n^* = \\{[a] : \\gcd(a, n) = 1\\}$**, a group under multiplication modulo $n$ with identity $[1]$. Its order is Euler's totient $\\varphi(n)$; for prime $p$, $\\varphi(p) = p - 1$, and for prime powers $\\varphi(p^k) = p^k - p^{k-1}$ — only the multiples of $p$ are non-units.",
        detail: "Inverses exist precisely because $\\gcd(a,n) = 1$ makes EXTENDED-EUCLID produce $ax + ny = 1$, i.e. $ax \\equiv 1 \\pmod n$ — extended Euclid is the division mechanism of modular arithmetic. For $n = 15$: $\\mathbb{Z}_{15}^* = \\{1, 2, 4, 7, 8, 11, 13, 14\\}$, eight elements.",
      },
      {
        term: "Lagrange's theorem and Fermat's little theorem",
        kind: "theorem",
        statement: "**Lagrange:** if $S$ is a subgroup of a finite group $G$, then $|S|$ divides $|G|$. Two corollaries: the order of an element (the size of the subgroup it generates) divides $|G|$, and every element satisfies $a^{|G|} = e$. **Fermat's little theorem** is the case $G = \\mathbb{Z}_p^*$ for prime $p$: if $\\gcd(a,p) = 1$ then $$a^{p-1} \\equiv 1 \\pmod p.$$",
        detail: "Fermat also holds in the hypothesis-free form $a^p \\equiv a \\pmod p$ for all integers $a$: when $p \\mid a$ both sides are $\\equiv 0$. Fermat drives primality testing (31.8); Euler's generalization $a^{\\varphi(n)} \\equiv 1 \\pmod n$ — proved in this chapter's depth tier — drives RSA.",
      },
      {
        term: "Euler's theorem",
        kind: "theorem",
        statement: "If $\\gcd(a,n) = 1$ then $a^{\\varphi(n)} \\equiv 1 \\pmod n$, where $\\varphi$ is Euler's totient. Fermat's $a^{p-1} \\equiv 1 \\pmod p$ is the prime case $\\varphi(p) = p-1$; RSA decryption $(M^e)^d \\equiv M$ is Euler with exponent $ed = 1+k\\varphi(n)$.",
        detail: "Proof: multiply the group $\\mathbb{Z}_n^*$ by $a$ permutes it, so $\\prod x \\equiv \\prod ax = a^{\\varphi(n)}\\prod x$; cancel $\\prod x$ (units cancel) to get $a^{\\varphi(n)} \\equiv 1$.",
      },
      {
        term: "Cancellation law",
        kind: "theorem",
        statement: "If $\\gcd(a,n) = 1$ and $ab \\equiv ac \\pmod n$ then $b \\equiv c \\pmod n$: multiply by $a^{-1}$ (which exists by EXTENDED-EUCLID). Without coprimality cancellation fails and the modulus shrinks to $n/\\gcd(a,n)$.",
        detail: "Example: $2\\cdot 10 \\equiv 2\\cdot 15 \\equiv 0 \\pmod{10}$ but $10 \\not\\equiv 15$: $\\gcd(2,10) = 2 \\ne 1$, so only $10 \\equiv 15 \\pmod{5}$ follows.",
      },
    ],
    examples: [
      {
        title: "A subgroup of $\\mathbb{Z}_{15}^*$ and a Fermat check",
        problem: "List $\\mathbb{Z}_{15}^*$, compute the subgroup generated by 7, verify Lagrange, and check Fermat's little theorem for $p = 13$, $a = 2$.",
        steps: [
          { label: "List the units", text: "From $1, \\ldots, 14$ discard multiples of 3 or 5 ($3, 5, 6, 9, 10, 12$): $\\mathbb{Z}_{15}^* = \\{1, 2, 4, 7, 8, 11, 13, 14\\}$, so $\\varphi(15) = 8$." },
          { label: "Powers of 7", text: "$7^1 = 7$; $7^2 = 49 \\equiv 4$; $7^3 \\equiv 4 \\cdot 7 = 28 \\equiv 13$; $7^4 \\equiv 13 \\cdot 7 = 91 \\equiv 1 \\pmod{15}$. So the order of 7 is 4 and $\\langle 7 \\rangle = \\{1, 4, 7, 13\\}$." },
          { label: "Lagrange in action", text: "The subgroup $\\{1, 4, 7, 13\\}$ has 4 elements and $4 \\mid 8 = |\\mathbb{Z}_{15}^*|$ ✓ — the order of the element divides the order of the group, as it must." },
          { label: "Fermat check", text: "For $p = 13$: $2^{12} = 4096 = 315 \\cdot 13 + 1$, so $2^{12} \\equiv 1 \\pmod{13}$. By repeated squaring: $2^2 = 4$, $2^4 = 16 \\equiv 3$, $2^8 \\equiv 9$, so $2^{12} = 2^8 \\cdot 2^4 \\equiv 9 \\cdot 3 = 27 \\equiv 1$ ✓." },
        ],
        result: "$\\varphi(15) = 8$; $\\langle 7 \\rangle = \\{1, 4, 7, 13\\}$ with order $4 \\mid 8$; and $2^{12} \\equiv 1 \\pmod{13}$ — Fermat's little theorem confirmed on numbers small enough to verify by hand.",
      },
      {
        title: "Euler's theorem mod 10",
        problem: "Compute $\\varphi(10)$, verify $3^{\\varphi(10)} \\equiv 1 \\pmod{10}$, and reduce $3^{100} \\bmod 10$.",
        steps: [
          { label: "Totient", text: "Units mod $10$: $1,3,7,9$: $\\varphi(10) = 4$ ($10 = 2\\cdot 5$: $10(1-1/2)(1-1/5) = 4$)." },
          { label: "Euler", text: "$3^4 = 81 = 8\\cdot 10+1$: $3^4 \\equiv 1$ ✓." },
          { label: "Reduce", text: "$100 = 25\\cdot 4$: $3^{100} = (3^4)^{25} \\equiv 1^{25} = 1 \\pmod{10}$: exponent mod $4$ suffices for base coprime to $10$." },
          { label: "Non-unit", text: "$2^{4} = 16 \\equiv 6 \\ne 1$: Euler needs $\\gcd(a,n) = 1$; $2$ has no inverse mod $10$." },
        ],
        result: "$\\varphi(10) = 4$, $3^4 \\equiv 1$, $3^{100} \\equiv 1 \\pmod{10}$; non-units like $2$ are excluded.",
      },
    ],
    keyTakeaways: [
      "Congruence classes make arithmetic well defined mod $n$, but cancellation requires a unit: $\\gcd(a, n) = 1$.",
      "$\\mathbb{Z}_n^*$ — the coprime residues — is a group of order $\\varphi(n)$; extended Euclid computes inverses in it.",
      "Lagrange's theorem forces element orders to divide $\\varphi(n)$, and specializes to Fermat's $a^{p-1} \\equiv 1 \\pmod p$ for primes $p$.",
    ],
    quiz: [
      {
        q: "Which of the following sets is a group under multiplication modulo 15?",
        options: ["$\\{0, 1, 2, \\ldots, 14\\}$", "$\\{1, 3, 5, 9\\}$", "$\\{0, 5, 10\\}$", "$\\{1, 2, 4, 7, 8, 11, 13, 14\\}$"],
        answer: 3,
        explanation: "All of $\\mathbb{Z}_{15}$ fails ($0$ has no inverse); $\\{1,3,5,9\\}$ is not closed ($3 \\cdot 5 = 15 \\equiv 0$); $\\{0,5,10\\}$ has no identity. The coprime residues are exactly the units — a group.",
      },
      {
        q: "What is the order of the element 7 modulo 15?",
        options: ["$2$", "$4$", "$8$", "$12$"],
        answer: 1,
        explanation: "The powers run $7, 4, 13, 1$ — the smallest exponent returning to 1 is 4, which indeed divides $\\varphi(15) = 8$.",
      },
      {
        q: "By Fermat's little theorem, if $p = 13$ and $\\gcd(a, p) = 1$, then $a^{12} \\bmod 13$ equals:",
        options: ["$1$", "$13$", "$a$", "$0$"],
        answer: 0,
        explanation: "$a^{p-1} \\equiv 1 \\pmod p$ for every unit $a$; the computation $2^{12} = 4096 = 315 \\cdot 13 + 1$ exhibits it.",
      },
    ],
  },

  // ---------------------------------------------------------------- 31.4
  {
    sectionId: "clrs-ch31-s4",
    readingTime: 5,
    intro: "A single linear congruence $ax \\equiv b \\pmod n$ looks like high-school algebra, but divisibility gets in the way: $a$ may have no inverse modulo $n$. This section gives the exact solvability criterion, counts the solutions when they exist, and isolates the special case $b = 1$ — the modular inverse — that RSA key generation will need.",
    objectives: [
      "State the solvability criterion for $ax \\equiv b \\pmod n$ and prove both directions",
      "Produce all incongruent solutions from one EXTENDED-EUCLID run",
      "Compute modular inverses and recognize exactly when they exist",
    ],
    concepts: [
      {
        term: "Solvability criterion",
        kind: "theorem",
        statement: "The congruence $ax \\equiv b \\pmod n$ has a solution if and only if $d = \\gcd(a, n)$ divides $b$.",
        detail: "Necessity: any common divisor of $a$ and $n$ divides $ax$ and $n$, hence divides $b$, which differs from $ax$ by a multiple of $n$. Sufficiency: if $d \\mid b$, take EXTENDED-EUCLID's $ax' + ny' = d$ and multiply by $b/d$ — the residue of $x'(b/d)$ solves the congruence.",
      },
      {
        term: "Exactly $d$ solutions",
        kind: "theorem",
        statement: "When $d = \\gcd(a,n)$ divides $b$, the congruence has **exactly $d$** pairwise incongruent solutions modulo $n$: $$x_0,\\ x_0 + n/d,\\ x_0 + 2(n/d),\\ \\ldots,\\ x_0 + (d-1)(n/d),$$ where $x_0 = x'(b/d) \\bmod n$ and $x'$ is any solution of $ax' \\equiv d \\pmod n$.",
        detail: "Divide through by $d$: $(a/d)x \\equiv b/d \\pmod{n/d}$ with $\\gcd(a/d, n/d) = 1$, which has a unique solution modulo $n/d$. Lifting back to modulus $n$ splits that single class into the $d$ listed classes, spaced $n/d$ apart.",
      },
      {
        term: "Modular inverses",
        kind: "definition",
        statement: "A residue $a$ has a **multiplicative inverse** modulo $n$ — a residue $a^{-1}$ with $aa^{-1} \\equiv 1 \\pmod n$ — if and only if $\\gcd(a, n) = 1$. The inverse is unique in $\\mathbb{Z}_n$ and is computed by EXTENDED-EUCLID: from $ax' + ny' = 1$, take $a^{-1} = x' \\bmod n$.",
        detail: "This is the $b = 1$ case of the general theory: solvable iff $\\gcd(a,n)$ divides 1, i.e. iff $a$ is a unit. RSA's secret exponent (31.7) is exactly such an inverse: $d = e^{-1} \\bmod \\varphi(n)$.",
      },
      {
        term: "MODULAR-LINEAR-EQUATION-SOLVER",
        kind: "method",
        statement: "On $(a,b,n)$: run EXTENDED-EUCLID for $(d,x',y')$; if $d \\nmid b$ report none; else $x_0 = x'(b/d) \\bmod n$ is one solution and the $d$ solutions are $x_0 + j(n/d)$ for $j = 0..d-1$. Cost $O(\\lg n + d)$ arithmetic operations.",
        detail: "Figure 31.1 in the text: one Euclid plus modular reduction produces all solutions. RSA key generation calls it with $b = 1$ to get $e^{-1}$.",
      },
      {
        term: "Unique solution when $\\gcd(a,n) = 1$",
        kind: "insight",
        statement: "If $\\gcd(a,n) = 1$ then $d = 1$ divides every $b$ and the $d = 1$ solution $x = a^{-1}b \\bmod n$ is unique mod $n$: multiplying by the inverse is the modular analogue of dividing. Non-coprime $a$ splits one class mod $n/d$ into $d$ classes mod $n$.",
        detail: "Uniqueness is why $\\mathbb{Z}_p$ for prime $p$ is a field: every nonzero $a$ has an inverse, so $ax \\equiv b$ always solves uniquely, exactly as over rationals.",
      },
    ],
    examples: [
      {
        title: "Solving $14x \\equiv 30 \\pmod{100}$",
        problem: "Determine whether $14x \\equiv 30 \\pmod{100}$ is solvable, and if so find every incongruent solution.",
        steps: [
          { label: "Criterion", text: "$d = \\gcd(14, 100) = 2$, and $2 \\mid 30$ ✓ — solvable, with exactly $d = 2$ solutions modulo 100." },
          { label: "Bézout coefficients", text: "EXTENDED-EUCLID(14, 100): $100 = 7 \\cdot 14 + 2$, $14 = 7 \\cdot 2 + 0$, so $\\gcd = 2$ with $2 = 100 - 7 \\cdot 14$, i.e. $x' = -7$, $y' = 1$." },
          { label: "First solution", text: "$x_0 = x'(b/d) \\bmod n = (-7)(15) \\bmod 100 = -105 \\bmod 100 = 95$." },
          { label: "The full solution set", text: "Solutions are spaced $n/d = 50$ apart: $x ≡ 95$ and $x ≡ 95 + 50 = 145 ≡ 45 \\pmod{100}$." },
          { label: "Verify both", text: "$14 \\cdot 95 = 1330 = 13 \\cdot 100 + 30$ ✓ and $14 \\cdot 45 = 630 = 6 \\cdot 100 + 30$ ✓ — two incongruent solutions, as promised." },
        ],
        result: "$x \\equiv 45$ or $x \\equiv 95 \\pmod{100}$ — exactly the two classes the theory predicts for $\\gcd(14, 100) = 2$.",
      },
      {
        title: "Solving $3x \\equiv 2 \\pmod 7$",
        problem: "Solve $3x \\equiv 2 \\pmod 7$ via EXTENDED-EUCLID and verify uniqueness.",
        steps: [
          { label: "Criterion", text: "$d = \\gcd(3,7) = 1$ divides $2$ ✓: exactly $1$ solution mod $7$." },
          { label: "Inverse", text: "EXTENDED-EUCLID$(3,7)$: $7 = 2\\cdot 3+1$: $1 = 7-2\\cdot 3$: $x' = -2$: $3^{-1} \\equiv -2 \\equiv 5 \\pmod 7$ ($3\\cdot 5 = 15 \\equiv 1$ ✓)." },
          { label: "Solution", text: "$x_0 = 5\\cdot 2 = 10 \\equiv 3 \\pmod 7$." },
          { label: "Verify", text: "$3\\cdot 3 = 9 \\equiv 2$ ✓; other residues $3+7j$ are congruent, no second class: $d = 1$." },
        ],
        result: "$x \\equiv 3 \\pmod 7$ uniquely; $3^{-1} = 5$ turns division into multiplication by the inverse.",
      },
    ],
    keyTakeaways: [
      "$ax \\equiv b \\pmod n$ is solvable iff $\\gcd(a,n) \\mid b$; the criterion is two lines of divisibility algebra.",
      "When solvable there are exactly $\\gcd(a, n)$ solutions, spaced $n/\\gcd(a,n)$ apart — one EXTENDED-EUCLID run produces them all.",
      "Inverses modulo $n$ exist iff $\\gcd(a,n) = 1$; the inverse is the Bézout coefficient $x' \\bmod n$ from $ax' + ny' = 1$.",
    ],
    quiz: [
      {
        q: "How many pairwise incongruent solutions does $14x \\equiv 30 \\pmod{100}$ have?",
        options: ["$0$", "$1$", "$2$", "$10$"],
        answer: 2,
        explanation: "$d = \\gcd(14, 100) = 2$ divides 30, so the equation is solvable with exactly $d = 2$ solutions: 45 and 95.",
      },
      {
        q: "The multiplicative inverse of 3 modulo 7 is:",
        options: ["$2$", "$5$", "$3$", "$4$"],
        answer: 1,
        explanation: "$3 \\cdot 5 = 15 \\equiv 1 \\pmod 7$, so the inverse is 5 — equivalently, EXTENDED-EUCLID on $(3, 7)$ returns $1 = 5 \\cdot 3 - 2 \\cdot 7$, exposing $3^{-1} = 5$.",
      },
      {
        q: "If $\\gcd(a, n) = d > 1$ and $d \\mid b$, how far apart (modulo $n$) are the $d$ solutions of $ax \\equiv b \\pmod n$?",
        options: ["$1$", "$d$", "$n/d$", "$n$"],
        answer: 2,
        explanation: "The solution classes are $x_0 + j(n/d)$ for $j = 0, \\ldots, d-1$ — spacing $n/d$, as in the worked example ($50 = 100/2$).",
      },
    ],
  },

  // ---------------------------------------------------------------- 31.5
  {
    sectionId: "clrs-ch31-s5",
    readingTime: 6,
    intro: "The Chinese remainder theorem, known to mathematicians of the 4th-century Chinese tradition, says a number is determined by its remainders modulo pairwise coprime moduli. Its modern role is architectural: split a computation on a big modulus into independent computations on small ones, then recombine. RSA decryption, classical hardware multipliers, and the correctness proof in this chapter's depth tier all run on the CRT.",
    objectives: [
      "State the CRT precisely, including the pairwise-coprimality hypothesis",
      "Construct the unique solution using the idempotents $c_i$",
      "Explain componentwise CRT arithmetic and where implementations exploit it",
    ],
    concepts: [
      {
        term: "Chinese remainder theorem",
        kind: "theorem",
        statement: "Let $n = n_1 n_2 \\cdots n_k$ where the moduli are **pairwise relatively prime** ($\\gcd(n_i, n_j) = 1$ for $i \\ne j$). Then for any choice of residues $a_1, \\ldots, a_k$ the system $$x \\equiv a_i \\pmod{n_i} \\quad (i = 1, \\ldots, k)$$ has **exactly one** solution modulo $n$.",
        detail: "The pairwise hypothesis is essential, not decoration: moduli 6 and 10 share the factor 2, and the system $x \\equiv 1 \\pmod 6$, $x \\equiv 2 \\pmod{10}$ has no solution at all — the first forces $x$ odd, the second even.",
      },
      {
        term: "Constructing the solution",
        kind: "method",
        statement: "Let $m_i = n / n_i$ and $$c_i = m_i \\cdot (m_i^{-1} \\bmod n_i).$$ Each $c_i$ is an idempotent that is $\\equiv 1 \\pmod{n_i}$ and $\\equiv 0 \\pmod{n_j}$ for every $j \\ne i$; the solution is $$x = \\sum_{i=1}^{k} a_i c_i \\pmod n.$$",
        detail: "Each term $a_i c_i$ contributes its residue at position $i$ and zero everywhere else, so the sum matches every congruence simultaneously. Uniqueness: two solutions differ by a common multiple of every $n_i$, hence of $n$ itself.",
      },
      {
        term: "Arithmetic under the CRT",
        kind: "insight",
        statement: "The map $x \\mapsto (x \\bmod n_1, \\ldots, x \\bmod n_k)$ is a bijection from $\\mathbb{Z}_n$ to $\\mathbb{Z}_{n_1} \\times \\cdots \\times \\mathbb{Z}_{n_k}$ that carries $+$ and $\\cdot$ to componentwise $+$ and $\\cdot$. To add or multiply modulo $n$: split into residues, operate on each small modulus independently, recombine — no carries between components ever.",
        detail: "This is a positional number system in disguise — the residues are digits. It organized classical multi-precision hardware arithmetic, and production RSA decrypts modulo $p$ and modulo $q$ separately and recombines (a factor-of-4 speedup); the depth tier of 31.7 performs exactly that computation.",
      },
      {
        term: "Pairwise versus setwise coprime",
        kind: "definition",
        statement: "Moduli $n_1,\\ldots,n_k$ are pairwise coprime if $\\gcd(n_i,n_j) = 1$ for every $i \\ne j$; setwise ($\\gcd$ of all $k$ is $1$) is weaker and insufficient. Pairwise is what makes $m_i = n/n_i$ invertible mod $n_i$ (since $\\gcd(m_i,n_i) = 1$).",
        detail: "Example: $6,10,15$ are setwise coprime ($\\gcd = 1$) but no pair is ($\\gcd(6,10) = 2$): CRT fails, e.g. $x \\equiv 1(6)$, $x \\equiv 2(10)$ is inconsistent (odd vs even).",
      },
      {
        term: "Inconsistent systems without coprimality",
        kind: "insight",
        statement: "Without pairwise coprimality a residue pattern may be inconsistent or have many solutions: $x \\equiv a_i(n_i)$ needs $a_i \\equiv a_j \\pmod{\\gcd(n_i,n_j)}$ for all $i,j$ to be solvable, and then solutions are unique mod $\\mathrm{lcm}(n_i)$, not mod $\\prod n_i$.",
        detail: "CRT's product modulus $n = \\prod n_i$ equals $\\mathrm{lcm}$ exactly when pairwise coprime; otherwise $\\mathrm{lcm} < \\prod$ and the $c_i$ projectors do not exist because $m_i^{-1} \\bmod n_i$ does not exist.",
      },
    ],
    examples: [
      {
        title: "Sun Tzu's puzzle: $x \\equiv 2 \\pmod 3$, $x \\equiv 3 \\pmod 5$, $x \\equiv 2 \\pmod 7$",
        problem: "Solve the original Chinese remainder system with moduli 3, 5 and 7 using the $c_i$ construction, and verify the answer.",
        steps: [
          { label: "Hypothesis check", text: "The moduli 3, 5, 7 are pairwise coprime, so the CRT applies with $n = 3 \\cdot 5 \\cdot 7 = 105$ and guarantees exactly one solution modulo 105." },
          { label: "Projector for mod 3", text: "$m_1 = 105/3 = 35$; $35 \\bmod 3 = 2$, and $2^{-1} \\bmod 3 = 2$ (since $2 \\cdot 2 = 4 \\equiv 1$). So $c_1 = 35 \\cdot 2 = 70$: indeed $70 \\equiv 1 \\pmod 3$ and $\\equiv 0$ mod 5 and mod 7 ✓." },
          { label: "Projectors for mods 5 and 7", text: "$m_2 = 21 \\equiv 1 \\pmod 5$, inverse 1, so $c_2 = 21$; $m_3 = 15 \\equiv 1 \\pmod 7$, inverse 1, so $c_3 = 15$." },
          { label: "Combine", text: "$x = 2 \\cdot 70 + 3 \\cdot 21 + 2 \\cdot 15 = 140 + 63 + 30 = 233 \\equiv 233 - 2 \\cdot 105 = 23 \\pmod{105}$." },
          { label: "Verify", text: "$23 = 7 \\cdot 3 + 2$ ✓; $23 = 4 \\cdot 5 + 3$ ✓; $23 = 3 \\cdot 7 + 2$ ✓ — all three congruences hold, and the next solution is $128 = 23 + 105$." },
        ],
        result: "$x \\equiv 23 \\pmod{105}$ — the unique answer modulo the product; 23, 128, 233, … all satisfy the system.",
      },
      {
        title: "Two moduli, one inverse",
        problem: "Solve $x \\equiv 2 \\pmod 3$, $x \\equiv 3 \\pmod 5$ with the $k = 2$ CRT construction.",
        steps: [
          { label: "Product", text: "$n = 15$, $m_1 = 5$, $m_2 = 3$: $\\gcd(3,5) = 1$ ✓." },
          { label: "Inverses", text: "$5^{-1} \\bmod 3$: $5 \\equiv 2$, $2^{-1} = 2$: $c_1 = 10$. $3^{-1} \\bmod 5 = 2$ ($3\\cdot 2 = 6 \\equiv 1$): $c_2 = 6$." },
          { label: "Combine", text: "$x = 2\\cdot 10+3\\cdot 6 = 38 \\equiv 8 \\pmod{15}$." },
          { label: "Verify", text: "$8 = 2\\cdot 3+2$ ✓; $8 = 1\\cdot 5+3$ ✓; next $23, 38, \\ldots$ (+$15$)." },
        ],
        result: "$x \\equiv 8 \\pmod{15}$ uniquely; $c_1 = 10 \\equiv 1(3),0(5)$, $c_2 = 6 \\equiv 0(3),1(5)$ are the projectors.",
      },
    ],
    keyTakeaways: [
      "With pairwise coprime moduli, any residue pattern is consistent and has exactly one solution modulo the product.",
      "The constructive proof builds 'projectors' $c_i$ with $c_i \\equiv 1 \\pmod{n_i}$ and $c_i \\equiv 0$ elsewhere; the answer is $\\sum a_i c_i \\bmod n$.",
      "CRT arithmetic is componentwise — the reason multi-precision hardware and RSA implementations split big moduli into small ones.",
    ],
    quiz: [
      {
        q: "Which pair of moduli violates the CRT hypothesis?",
        options: ["3 and 5", "6 and 10", "8 and 9", "5 and 7"],
        answer: 1,
        explanation: "$\\gcd(6, 10) = 2 \\ne 1$ — the moduli must be pairwise coprime; the other three pairs share no prime.",
      },
      {
        q: "In the construction for moduli 3, 5, 7, the projector $c_2$ (the one that is $\\equiv 1$ modulo 5 and $\\equiv 0$ modulo 3 and 7) equals:",
        options: ["$21$", "$70$", "$15$", "$105$"],
        answer: 0,
        explanation: "$m_2 = 105/5 = 21 \\equiv 1 \\pmod 5$ already, so its inverse is 1 and $c_2 = 21$ — the term that injects the mod-5 digit and vanishes elsewhere.",
      },
      {
        q: "For pairwise coprime moduli $n_1, n_2, n_3$, the CRT guarantees how many solutions modulo $n = n_1 n_2 n_3$?",
        options: ["None in general — consistency depends on the residues", "Exactly one", "Exactly three, one per modulus", "One per unit of $\\mathbb{Z}_n$"],
        answer: 1,
        explanation: "Every residue pattern is consistent, and the solution is unique modulo the product — no consistency conditions, no multiplicity, unlike the modular linear equations of 31.4.",
      },
    ],
  },

  // ---------------------------------------------------------------- 31.6
  {
    sectionId: "clrs-ch31-s6",
    readingTime: 6,
    intro: "Exponentiating modulo $n$ is astonishingly cheap: raising $a$ to a thousand-bit power takes only a thousand-odd squarings, each on small numbers. Inverting that map — the discrete logarithm — is believed intractable. This asymmetry between a computation and its inverse is the mathematical core of modern public-key cryptography.",
    objectives: [
      "Execute MODULAR-EXPONENTIATION by repeated squaring and count the multiplications",
      "Define the multiplicative order of an element and connect it to $\\varphi(n)$ via Lagrange",
      "State the discrete logarithm problem and contrast its difficulty with exponentiation",
    ],
    concepts: [
      {
        term: "MODULAR-EXPONENTIATION",
        kind: "method",
        statement: "Compute $a^b \\bmod n$ by **repeated squaring**: scan the bits of $b$ from most significant to least, squaring a running value to maintain $a^{2^i}$ and multiplying it into the result exactly when bit $i$ of $b$ is 1. The method uses $\\lfloor \\lg b \\rfloor$ squarings plus at most that many multiplies — $O(\\lg b)$ modular multiplications, $O(\\beta^3)$ bit operations for $\\beta$-bit inputs.",
        detail: "Never form $a^b$ itself — reduce modulo $n$ after every multiplication, keeping every intermediate below $n^2$. The unreduced $a^b$ for a 512-bit exponent would have more digits than atoms in the observable universe; the reduced chain never exceeds a few hundred digits.",
      },
      {
        term: "Order of an element",
        kind: "definition",
        statement: "For $a$ with $\\gcd(a, n) = 1$, the **order** of $a$ modulo $n$ is the least $t \\ge 1$ with $a^t \\equiv 1 \\pmod n$. The powers $a^0, a^1, a^2, \\ldots$ cycle with exactly this period through the subgroup $\\langle a \\rangle$ they generate, and by Lagrange's theorem $t$ divides $\\varphi(n)$.",
        detail: "Exponent arithmetic therefore reduces modulo the order: $a^s = a^{s \\bmod t}$. For 7 modulo 15 the powers run $7, 4, 13, 1$ — order 4, a divisor of $\\varphi(15) = 8$.",
      },
      {
        term: "The discrete logarithm problem",
        kind: "definition",
        statement: "Given modulus $n$, base $a$ and an element $b$ of $\\langle a \\rangle$, the **discrete logarithm** of $b$ is the exponent $x$ with $a^x \\equiv b \\pmod n$. Computing $a^x$ from $x$ is polynomial-time; recovering $x$ from $a^x$ has no known polynomial-time classical algorithm.",
        detail: "This asymmetry — exponentiation easy, its inverse believed hard — is the one-way behavior underlying Diffie-Hellman key exchange and ElGamal encryption. RSA exploits the sibling asymmetry between multiplying two primes and factoring their product.",
      },
      {
        term: "Square-and-multiply invariant",
        kind: "insight",
        statement: "Scanning bits $b_k \\cdots b_0$ with running $d$: after bit $i$, $d = a^{\\lfloor b/2^i \\rfloor} \\bmod n$ (prefix read so far). Squaring doubles the exponent, multiplying by $a$ adds one when bit $i$ is $1$: invariant holds by induction, so final $d = a^b$.",
        detail: "Left-to-right binary method needs $\\lfloor \\lg b \\rfloor$ squares + popcount($b$)-$1$ multiplies; right-to-left needs same count with different register pressure. Both reduce mod $n$ every step.",
      },
      {
        term: "Euler's criterion preview",
        kind: "theorem",
        statement: "For odd prime $p$ and $a \\not\\equiv 0$, $a^{(p-1)/2} \\equiv \\pm 1 \\pmod p$, with $+1$ iff $a$ is a quadratic residue. WITNESS in Section 31.8 squares through this exponent chain hunting a nontrivial $\\sqrt1$: Euler already hides the Miller-Rabin idea.",
        detail: "Computing $a^{(p-1)/2}$ is one MODULAR-EXPONENTIATION; its value splits residues from nonresidues. Carmichael numbers fool Fermat ($a^{n-1} \\equiv 1$) but not the square-root chain, which is why Miller-Rabin checks every squaring.",
      },
    ],
    examples: [
      {
        title: "Computing $7^{560} \\bmod 561$ by repeated squaring",
        problem: "Evaluate $7^{560} \\bmod 561$ with as few modular multiplications as possible (this computation returns in 31.8, where 561 turns out to be composite).",
        steps: [
          { label: "Binary expansion", text: "$560 = 512 + 32 + 16$, i.e. $560_{10} = 1000110000_2$ — set bits at positions 9, 5 and 4." },
          { label: "Repeated squares", text: "Squaring and reducing each time: $7^2 = 49$; $7^4 \\equiv 2401 \\equiv 157$; $7^8 \\equiv 157^2 = 24649 \\equiv 526$; $7^{16} \\equiv 526^2 = 276676 \\equiv 103$; $7^{32} \\equiv 103^2 = 10609 \\equiv 511$; $7^{64} \\equiv 256$; $7^{128} \\equiv 460$; $7^{256} \\equiv 103$; $7^{512} \\equiv 511 \\pmod{561}$." },
          { label: "Combine the set bits", text: "$7^{560} = 7^{512} \\cdot 7^{32} \\cdot 7^{16} \\equiv 511 \\cdot 511 \\cdot 103$. First $511^2 = 261121 \\equiv 256 \\pmod{561}$." },
          { label: "Finish", text: "$256 \\cdot 103 = 26368 = 47 \\cdot 561 + 1 \\equiv 1 \\pmod{561}$. Eleven multiplications in total (9 squarings + 2 multiplies) for a 560-th power." },
          { label: "A suspicious observation", text: "The result is 1 — Fermat's theorem's fingerprint for a prime. Yet $561 = 3 \\cdot 11 \\cdot 17$ is composite: it is a pseudoprime to base 7, the phenomenon Section 31.8 must defeat." },
        ],
        result: "$7^{560} \\bmod 561 = 1$, computed in eleven modular multiplications — and the fact that a composite number produced Fermat's fingerprint is exactly the trap the next two sections navigate.",
      },
      {
        title: "$3^{16} \\bmod 17$ in four squares",
        problem: "Compute $3^{16} \\bmod 17$ by repeated squaring (note $16 = 10000_2$).",
        steps: [
          { label: "Squares", text: "$3^1 = 3$; $3^2 = 9$; $3^4 = 81 \\equiv 13$; $3^8 \\equiv 13^2 = 169 \\equiv 16$; $3^{16} \\equiv 16^2 = 256 \\equiv 1 \\pmod{17}$: $4$ squares, $0$ extra multiplies (single bit)." },
          { label: "Fermat check", text: "$3^{16} \\equiv 1$: $p = 17$ prime, $\\gcd(3,17) = 1$: Fermat predicts $a^{16} \\equiv 1$ ✓." },
          { label: "Order", text: "Order of $3$ divides $16$: $3^8 \\equiv 16 \\ne 1$, so order is $16$: $3$ is primitive (generates $\\mathbb{Z}_{17}^*$)." },
          { label: "Cost", text: "$4$ multiplies for a $16$th power: $O(\\lg b)$, never forming $3^{16} = 43$ million." },
        ],
        result: "$3^{16} \\equiv 1 \\pmod{17}$ in $4$ squares; order $16$ divides $\\varphi(17) = 16$.",
      },
    ],
    keyTakeaways: [
      "Repeated squaring computes $a^b \\bmod n$ in $O(\\lg b)$ multiplications — never materialize $a^b$.",
      "Powers of a unit cycle with period dividing $\\varphi(n)$ (its order), so exponents can be reduced modulo the order.",
      "Exponentiation is easy and the discrete logarithm is (believed) hard — the one-way asymmetry behind Diffie-Hellman and ElGamal.",
    ],
    quiz: [
      {
        q: "How many modular multiplications does repeated squaring need to compute $a^b \\bmod n$?",
        options: ["$O(b)$", "$O(\\sqrt{b})$", "$O(\\varphi(n))$", "$O(\\lg b)$"],
        answer: 3,
        explanation: "One squaring per bit of $b$ plus one multiply per set bit — logarithmic in the exponent, which is why 512-bit exponents are routine.",
      },
      {
        q: "The powers of 7 modulo 15 run $7, 4, 13, 1, 7, 4, \\ldots$ If $s \\equiv s' \\pmod 4$, what follows?",
        options: ["$7^{s} \\equiv 7^{s'} \\pmod{15}$", "$7^s \\equiv 7^{s'}$ only if $s = s'$", "$7^s \\equiv s' \\pmod{15}$", "$7^{s + s'} \\equiv 0 \\pmod{15}$"],
        answer: 0,
        explanation: "The sequence is periodic with the order $t = 4$, so exponents may be reduced modulo 4 — Lagrange guarantees $t$ divides $\\varphi(15) = 8$.",
      },
      {
        q: "Given a prime $p$ and $y = a^x \\bmod p$ with known $a$ and $y$, recovering the exponent $x$ is:",
        options: ["believed intractable classically — no polynomial-time algorithm is known", "polynomial-time, by running MODULAR-EXPONENTIATION backwards bit by bit", "exactly as fast as computing $a^x \\bmod p$ from $x$", "impossible in principle because the answer is not unique"],
        answer: 0,
        explanation: "This is the discrete logarithm problem: easy one way, no known efficient inverse — while remaining well defined (the logarithm is unique modulo the order of $a$).",
      },
    ],
  },

  // ---------------------------------------------------------------- 31.7
  {
    sectionId: "clrs-ch31-s7",
    readingTime: 8,
    intro: "RSA turns the difficulty of factoring into a lock: anyone can slam it shut (encrypt with a public exponent), and only the holder of the prime factors can open it. This section specifies the system precisely, runs it end-to-end on numbers you can verify by hand, and examines exactly what an attacker must overcome — then the depth tier proves, for every possible message, that decryption undoes encryption.",
    objectives: [
      "Generate an RSA key pair and perform both key-holders' computations",
      "Explain why $ed \\equiv 1 \\pmod{\\varphi(n)}$ makes encryption and decryption inverse maps",
      "Articulate the equivalence between knowing $\\varphi(n)$ and factoring $n$",
    ],
    concepts: [
      {
        term: "RSA key generation",
        kind: "method",
        statement: "Generate random primes $p \\ne q$ of equal bit length, form $n = pq$, and compute $\\varphi(n) = (p-1)(q-1)$. Choose the public exponent $e$ with $1 < e < \\varphi(n)$ and $\\gcd(e, \\varphi(n)) = 1$, and compute the secret exponent $d = e^{-1} \\bmod \\varphi(n)$ by extended Euclid, so that $$ed \\equiv 1 \\pmod{\\varphi(n)}.$$ Publish the **public key** $(e, n)$; keep $d$ — and the factors $p, q, \\varphi(n)$ — **secret**.",
        detail: "In this section's toy run: $p = 11$, $q = 13$, $n = 143$, $\\varphi(n) = 120$, $e = 7$, and since $7 \\cdot 103 = 721 = 6 \\cdot 120 + 1$, the secret key is $d = 103$.",
      },
      {
        term: "Encryption and decryption",
        kind: "method",
        statement: "Both directions are a single modular exponentiation. The public transform sends a message $M \\in \\mathbb{Z}_n$ to ciphertext $$C = M^e \\bmod n,$$ and the secret transform recovers $$M = C^d \\bmod n.$$ Correctness — $(M^e)^d \\equiv M \\pmod n$ for **every** message — is the content of this section's depth tier.",
        detail: "Encryption is a deterministic function of $M$, so textbook RSA leaks equality of messages (and more); real deployments randomize with padding schemes such as OAEP. CLRS deliberately treats RSA as the pure number-theoretic object, as does this chapter.",
      },
      {
        term: "Security and the factoring connection",
        kind: "insight",
        statement: "An adversary knowing only $(e, n)$ must recover $M$ from $C = M^e \\bmod n$. Knowing $d$ would suffice — but computing $d$ requires $\\varphi(n)$, and knowing $\\varphi(n)$ is **equivalent** to factoring $n$: $\\varphi(n) = n - (p + q) + 1$ reveals $p + q$, and $p, q$ are then the roots of $x^2 - (p+q)x + n = 0$.",
        detail: "The subtler point CLRS is careful about: the 'RSA problem' — inverting $x \\mapsto x^e \\bmod n$ on a random $x$ — might be easier than factoring; no equivalence is known in either direction. All known attacks route through factoring, and factoring has no known polynomial-time classical algorithm (31.9).",
      },
      {
        term: "Why $\\varphi(n) = (p-1)(q-1)$",
        kind: "theorem",
        statement: "For $n = pq$ with distinct primes, residues mod $n$ coprime to $n$ are those coprime to both $p$ and $q$: $\\varphi(n) = (p-1)(q-1) = n-p-q+1$ by CRT counting ($\\mathbb{Z}_n^* \\cong \\mathbb{Z}_p^* \\times \\mathbb{Z}_q^*$ has $(p-1)(q-1)$ pairs).",
        detail: "Knowing $\\varphi(n)$ reveals $p+q = n-\\varphi(n)+1$, then $p,q$ as roots of $x^2-(p+q)x+n = 0$: $\\varphi(n)$ and factoring are polynomially equivalent, the security reduction RSA leans on.",
      },
      {
        term: "Textbook RSA is deterministic",
        kind: "insight",
        statement: "CLRS RSA encrypts $C = M^e \\bmod n$ with no randomness: equal messages give equal ciphertexts, so equality leaks and chosen-plaintext attacks are trivial. Real RSA randomizes with OAEP padding; the chapter isolates the number theory, not the padding.",
        detail: "Determinism also breaks semantic security: an adversary with $(e,n)$ can encrypt guesses and compare. Production RSA never encrypts raw $M$; it encrypts padded $\\mu(M, r)$ with fresh $r$ per message.",
      },
    ],
    figures: [
      {
        caption: "Figure — the RSA pipeline on a toy run ($p = 11$, $q = 13$, $e = 7$, $d = 103$): keys are generated once in private; encryption uses only the public pair $(e, n)$; only the ciphertext $C = 48$ travels on the public channel; decryption with the secret $d$ recovers $M = 9$ because $ed = 1 + 6\\varphi(n)$.",
        afterConcept: 2,
        svg: `
    <svg viewBox="0 0 720 380" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RSA pipeline toy run">   <defs>
    <marker id="rsaArrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">   <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
    <text x="360" y="20" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">RSA in one picture — toy run with p = 11, q = 13, e = 7</text>
    <text x="135" y="46" text-anchor="middle" font-size="10.5" font-weight="600" fill="currentColor" opacity="0.75">KEY GENERATION (run once, in private)</text>
    <rect x="40" y="54" width="190" height="30" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>   <text x="135" y="73" text-anchor="middle" font-size="12.5" fill="currentColor">random primes: p = 11, q = 13</text>
    <path d="M 135 86 L 135 97" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#rsaArrow)"/>   <rect x="40" y="100" width="190" height="30" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>
    <text x="135" y="119" text-anchor="middle" font-size="12.5" fill="currentColor">n = pq = 143</text>   <path d="M 135 130 L 135 141" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#rsaArrow)"/>
    <rect x="40" y="144" width="190" height="30" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>   <text x="135" y="163" text-anchor="middle" font-size="12.5" fill="currentColor">φ(n) = 10 · 12 = 120</text>
    <path d="M 135 174 L 135 185" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#rsaArrow)"/>   <rect x="40" y="188" width="190" height="30" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>
    <text x="135" y="207" text-anchor="middle" font-size="12.5" fill="currentColor">e = 7 with gcd(e, 120) = 1</text>   <path d="M 135 218 L 135 229" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#rsaArrow)"/>
    <rect x="40" y="232" width="190" height="30" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>   <text x="135" y="251" text-anchor="middle" font-size="12.5" fill="currentColor">d = e⁻¹ mod 120 = 103</text>
    <rect x="246" y="154" width="196" height="28" rx="14" fill="currentColor" fill-opacity="0.15" stroke="currentColor"/>   <text x="344" y="172" text-anchor="middle" font-size="12" fill="currentColor">public key (e, n) = (7, 143)</text>
    <rect x="426" y="196" width="160" height="28" rx="14" fill="currentColor" fill-opacity="0.32" stroke="currentColor"/>   <text x="506" y="214" text-anchor="middle" font-size="12" fill="currentColor">secret key d = 103</text>
    <path d="M 350 152 C 374 136, 410 122, 444 109" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#rsaArrow)"/>
    <path d="M 500 226 C 498 234, 502 242, 505 248" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#rsaArrow)"/>
    <text x="505" y="56" text-anchor="middle" font-size="10.5" font-weight="600" fill="currentColor" opacity="0.75">ENCRYPTION (public operation)</text>
    <rect x="330" y="62" width="64" height="44" rx="9" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>   <text x="362" y="89" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">M = 9</text>
    <path d="M 394 84 L 410 84" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#rsaArrow)"/>   <rect x="412" y="62" width="186" height="44" rx="9" fill="currentColor" fill-opacity="0.08" stroke="currentColor"/>
    <text x="505" y="80" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.8">compute C = Mᵉ mod n</text>   <text x="505" y="98" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">C = 9⁷ mod 143</text>   <path d="M 598 84 L 612 84" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#rsaArrow)"/>   <rect x="614" y="62" width="76" height="44" rx="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor"/>
    <text x="652" y="89" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">C = 48</text>
    <path d="M 652 108 C 734 180, 700 240, 372 250" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#rsaArrow)"/>
    <text x="598" y="165" text-anchor="middle" font-size="11" font-style="italic" fill="currentColor" opacity="0.85">public channel</text>
    <text x="598" y="180" text-anchor="middle" font-size="11" font-style="italic" fill="currentColor" opacity="0.85">only C travels</text>
    <text x="505" y="244" text-anchor="middle" font-size="10.5" font-weight="600" fill="currentColor" opacity="0.75">DECRYPTION (secret operation)</text>
    <rect x="330" y="252" width="64" height="44" rx="9" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/>   <text x="362" y="279" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">C = 48</text>
    <path d="M 394 274 L 410 274" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#rsaArrow)"/>   <rect x="412" y="252" width="186" height="44" rx="9" fill="currentColor" fill-opacity="0.08" stroke="currentColor"/>
    <text x="505" y="270" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.8">compute M′ = Cᵈ mod n</text>   <text x="505" y="288" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">M′ = 48¹⁰³ mod 143</text>   <path d="M 598 274 L 612 274" fill="none" stroke="currentColor" stroke-width="1.6" marker-end="url(#rsaArrow)"/>
    <rect x="614" y="252" width="76" height="44" rx="9" fill="currentColor" fill-opacity="0.22" stroke="currentColor"/>   <text x="652" y="279" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">M′ = 9</text>
    <rect x="88" y="322" width="544" height="44" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-opacity="0.6"/>   <text x="360" y="340" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">ed = 7 · 103 = 721 = 1 + 6 · 120, so Mᵉᵈ = M · (M¹²⁰)⁶ ≡ M (mod n)</text>   <text x="360" y="357" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.8">Euler's theorem handles messages coprime to n; the CRT handles all the rest (see depth tier)</text>
  </svg>`,
      },
    ],
    examples: [
      {
        title: "A complete toy RSA run: $n = 143$, $e = 7$, $d = 103$",
        problem: "With $p = 11$, $q = 13$: generate the keys, encrypt $M = 9$, and decrypt the ciphertext using the CRT decomposition a real implementation would use.",
        steps: [
          { label: "Key generation", text: "$n = 11 \\cdot 13 = 143$; $\\varphi(n) = 10 \\cdot 12 = 120$. Pick $e = 7$ ($\\gcd(7, 120) = 1$). Since $7 \\cdot 103 = 721 = 6 \\cdot 120 + 1$, extended Euclid gives $d = 103$. Public: $(7, 143)$; secret: $103$." },
          { label: "Encrypt $M = 9$", text: "By repeated squaring: $9^2 = 81$; $9^4 = 6561 \\equiv 126$; then $9^7 = 9^4 \\cdot 9^2 \\cdot 9 \\equiv 126 \\cdot 81 = 10206 \\equiv 53$, and $53 \\cdot 9 = 477 \\equiv 48 \\pmod{143}$. The ciphertext is $C = 48$." },
          { label: "Decrypt — split by the CRT", text: "Work modulo each prime: $48 \\equiv 4 \\pmod{11}$ and $48 \\equiv 9 \\pmod{13}$. Exponents reduce modulo $p - 1$ and $q - 1$ (Fermat): $103 \\equiv 3 \\pmod{10}$ and $103 \\equiv 7 \\pmod{12}$." },
          { label: "Exponentiate per prime", text: "Mod 11: $4^3 = 64 \\equiv 9$. Mod 13: $9^7 = 9^4 \\cdot 9^2 \\cdot 9$, and $9^2 = 81 \\equiv 3$, $9^4 \\equiv 9$, so $9^7 \\equiv 9 \\cdot 3 \\cdot 9 = 243 \\equiv 9 \\pmod{13}$." },
          { label: "Recombine", text: "We need $x \\equiv 9 \\pmod{11}$ and $x \\equiv 9 \\pmod{13}$; the CRT (coprime moduli) says the unique solution modulo 143 is exactly $x = 9$ — the original message." },
        ],
        result: "Ciphertext $C = 48$; decryption returns $M = 9$ ✓. Note the decrypt step never computed $48^{103}$ directly — it worked modulo 11 and 13 with reduced exponents, precisely how production RSA decryption is organized.",
      },
      {
        title: "Decrypting $C = 48$ with CRT speedup",
        problem: "With $p = 11, q = 13, e = 7, d = 103$, decrypt $C = 48$ via $M = C^d \\bmod 143$ using CRT (mod $p$ and mod $q$ separately).",
        steps: [
          { label: "Exponents mod $p-1,q-1$", text: "$d_p = 103 \\bmod 10 = 3$; $d_q = 103 \\bmod 12 = 7$: $M_p = 48^3 \\bmod 11$, $M_q = 48^7 \\bmod 13$." },
          { label: "Mod $11$", text: "$48 \\equiv 4$: $4^3 = 64 \\equiv 9 \\pmod{11}$ (since $55$): $M \\equiv 9$." },
          { label: "Mod $13$", text: "$48 \\equiv 9$: $9^2 = 81 \\equiv 3$, $9^4 \\equiv 9$, $9^7 = 9^4\\cdot 9^2\\cdot 9 \\equiv 9\\cdot 3\\cdot 9 = 243 \\equiv 9 \\pmod{13}$: $M \\equiv 9$." },
          { label: "Combine", text: "$M \\equiv 9$ both sides: CRT gives $M = 9$ mod $143$ (numbers $\\equiv 9$ mod $11$ and $13$ are $9, \\ldots$; $9 < 143$ so $M = 9$). Two small exponentiations beat one $103$rd power." },
        ],
        result: "$M = 9$: CRT decryption does $O(\\lg d_p)+O(\\lg d_q)$ work on half-size moduli, $\\approx 4\\times$ faster than direct $C^d$.",
      },
    ],
    keyTakeaways: [
      "Key generation is: two primes, $n = pq$, $\\varphi(n) = (p-1)(q-1)$, a coprime $e$, and $d = e^{-1} \\bmod \\varphi(n)$ from extended Euclid.",
      "Encryption and decryption are both single MODULAR-EXPONENTIATION calls; correctness for all messages needs Euler plus the CRT (depth tier).",
      "Recovering $d$ from $(e, n)$ requires $\\varphi(n)$, and knowing $\\varphi(n)$ is equivalent to factoring $n$ — RSA's security transfers to a 2000-year-old problem.",
    ],
    quiz: [
      {
        q: "For $n = 143 = 11 \\cdot 13$, what is $\\varphi(n)$?",
        options: ["$143$", "$144$", "$120$", "$132$"],
        answer: 2,
        explanation: "$\\varphi(pq) = (p-1)(q-1) = 10 \\cdot 12 = 120$ — both primes minus one, multiplied.",
      },
      {
        q: "The secret exponent $d$ is chosen so that:",
        options: ["$ed \\equiv 1 \\pmod{\\varphi(n)}$", "$ed \\equiv 1 \\pmod{n}$", "$e + d \\equiv 0 \\pmod{\\varphi(n)}$", "$d$ is arbitrary, since it is never published"],
        answer: 0,
        explanation: "$d$ is the inverse of $e$ modulo $\\varphi(n) = (p-1)(q-1)$, computed by extended Euclid: in the toy run $7 \\cdot 103 = 6 \\cdot 120 + 1$.",
      },
      {
        q: "Why can an attacker not simply compute $d$ from the public $(e, n)$?",
        options: ["$d$ is transmitted only over secure channels, so it is never computable", "Computing $d$ requires $\\varphi(n)$, and knowing $\\varphi(n)$ is equivalent to factoring $n$", "$d$ is protected by a collision-resistant hash of $e$", "$n$ is too large for modular exponentiation to finish"],
        answer: 1,
        explanation: "From $\\varphi(n)$ one gets $p + q = n - \\varphi(n) + 1$, and $p, q$ are the roots of $x^2 - (p+q)x + n$ — so $\\varphi(n)$ and the factorization are interchangeable secrets.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "Why RSA is correct: Euler's theorem plus the Chinese remainder theorem",
        blocks: [
          {
            kind: "para",
            heading: "What must be proved",
            body: "RSA must decrypt **every** message, not just the convenient ones. We need $M^{ed} \\equiv M \\pmod{n}$ for all $M \\in \\mathbb{Z}_n$, where $ed \\equiv 1 \\pmod{\\varphi(n)}$, say $ed = 1 + k\\varphi(n)$. The easy route — Euler's theorem — only applies when $\\gcd(M, n) = 1$, yet messages divisible by $p$ or by $q$ are legal inputs a correct cryptosystem cannot ignore. The full proof uses Euler for the coprime case and then the CRT (with Fermat) to extend to every message without exception.",
          },
          {
            kind: "theorem",
            heading: "Euler's theorem",
            body: "If $n \\ge 1$ and $\\gcd(a, n) = 1$, then $a^{\\varphi(n)} \\equiv 1 \\pmod{n}$.",
          },
          {
            kind: "proof",
            heading: "Euler's theorem via the group $\\mathbb{Z}_n^*$",
            body: "The residues coprime to $n$ form the multiplicative group $\\mathbb{Z}_n^*$ of order $\\varphi(n)$; list its elements $x_1, x_2, \\ldots, x_{\\varphi(n)}$. Multiplication by the unit $a$ **permutes** the group: if $ax_i \\equiv ax_j \\pmod n$, then canceling the invertible $a$ (extended Euclid supplies $a^{-1}$) gives $x_i \\equiv x_j$. Multiplying out the two listings of the same elements, $$\\prod_i x_i \\equiv \\prod_i (a x_i) \\equiv a^{\\varphi(n)} \\prod_i x_i \\pmod{n},$$ and since $\\prod_i x_i$ is itself a unit it may be canceled from both sides, leaving $a^{\\varphi(n)} \\equiv 1 \\pmod n$. For $n = p$ prime, $\\varphi(p) = p - 1$ and this is exactly Fermat's little theorem.",
          },
          {
            kind: "derivation",
            heading: "The coprime case",
            body: "Assume $\\gcd(M, n) = 1$ with $n = pq$. Then $$M^{ed} = M^{1 + k\\varphi(n)} = M \\cdot \\left(M^{\\varphi(n)}\\right)^{k} \\equiv M \\cdot 1^{k} = M \\pmod{n},$$ exactly as Euler promises. This covers every message except the $p + q - 1$ residue classes with $p \\mid M$ or $q \\mid M$ — a vanishing fraction of $\\mathbb{Z}_n$, but a real one.",
          },
          {
            kind: "derivation",
            heading: "All messages, via the CRT",
            body: "Work one prime at a time. Modulo $p$: if $p \\mid M$ then $M^{ed}$ and $M$ are both $\\equiv 0$, so the claim holds trivially. Otherwise Fermat gives $M^{p-1} \\equiv 1 \\pmod p$, and since $\\varphi(n) = (p-1)(q-1)$ is a multiple of $p - 1$, $$M^{ed} = M^{1 + k\\varphi(n)} = M \\cdot \\left(M^{p-1}\\right)^{k(q-1)} \\equiv M \\pmod p.$$ The same argument modulo $q$ gives $M^{ed} \\equiv M \\pmod q$. Now the CRT applies to the pair of congruences $x \\equiv M \\pmod p$, $x \\equiv M \\pmod q$: because $\\gcd(p,q) = 1$, the common solution is unique modulo $pq = n$, and $x = M$ is visibly a solution — hence $M^{ed} \\equiv M \\pmod{n}$ for **every** message, coprime or not.",
          },
          {
            kind: "application",
            heading: "CRT-based decryption in practice",
            body: "Real implementations run decryption exactly along these lines — one prime at a time. They precompute $d_p = d \\bmod (p-1)$ and $d_q = d \\bmod (q-1)$, exponentiate the ciphertext modulo $p$ and modulo $q$ separately with these half-size exponents and moduli, and recombine the two residues with the CRT. The toy run did precisely that: $48^{103} \\equiv 4^{3} \\equiv 9 \\pmod{11}$ and $48^{103} \\equiv 9^{7} \\equiv 9 \\pmod{13}$ recombine to $M = 9$ modulo 143. Halving the modulus quarters each multiplication's cost — an overall speedup of about a factor of 4, which is why every production RSA decryption is CRT-based.",
          },
          {
            kind: "remark",
            heading: "Why the two-branch proof matters",
            body: "A tempting one-line proof — '$M^{ed} = M \\cdot (M^{\\varphi(n)})^k \\equiv M$ by Euler' — silently assumes $\\gcd(M, n) = 1$. For random 1024-bit messages the probability of hitting a multiple of $p$ or $q$ is about $2^{-510}$: vanishingly unlikely, but never zero. A cryptosystem that returns garbage on a measure-zero set of inputs is simply buggy; this is precisely why CLRS carries the CRT into the RSA section, and the same mod-$p$-and-mod-$q$ discipline is what lets implementations certify correctness for every ciphertext they will ever see.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- 31.8
  {
    sectionId: "clrs-ch31-s8",
    readingTime: 6,
    intro: "RSA needs primes, and it needs them fast. Trial division is hopeless at cryptographic sizes, and the obvious shortcut — Fermat's little theorem — has systematic impostors: Carmichael numbers such as 561. Miller-Rabin repairs the flaw by hunting nontrivial square roots of 1, yielding a randomized test that errs with probability at most $2^{-s}$ and never errs when it says 'composite'.",
    objectives: [
      "Define pseudoprimes and Carmichael numbers and explain why Fermat testing must fail",
      "Trace WITNESS and MILLER-RABIN, including the nontrivial-square-root test",
      "Analyze the error probability and the cost of generating a random $\\beta$-bit prime",
    ],
    concepts: [
      {
        term: "Pseudoprimes and Carmichael numbers",
        kind: "definition",
        statement: "A composite $n$ that satisfies $a^{n-1} \\equiv 1 \\pmod n$ is a **pseudoprime to base $a$**. A **Carmichael number** is a composite that passes this Fermat test for *every* base coprime to it — the smallest is $561 = 3 \\cdot 11 \\cdot 17$, and infinitely many exist.",
        detail: "The Fermat-based test PSEUDOPRIME picks a base $a$ and answers 'composite' if $a^{n-1} \\not\\equiv 1$ (a certain verdict — the violated congruence is a certificate) and 'prime' otherwise (possibly wrong). Carmichael numbers make the error systematic: no amount of base selection repairs a Fermat test.",
      },
      {
        term: "The Miller-Rabin witness test",
        kind: "method",
        statement: "Write $n - 1 = 2^t u$ with $u$ odd. `WITNESS(a, n)` computes the chain $x_0 = a^u \\bmod n$, $x_i = x_{i-1}^2 \\bmod n$ for $i = 1, \\ldots, t$, and proves compositeness if (i) some $x_i = 1$ while $x_{i-1} \\notin \\{1, n-1\\}$ — a **nontrivial square root of 1**, impossible when $n$ is prime — or (ii) $x_t \\ne 1$ (a Fermat violation). `MILLER-RABIN(n, s)` tests $s$ independent random bases, answering 'composite' on the first witness and 'prime' otherwise.",
        detail: "Why (i) is decisive: $x^2 \\equiv 1 \\pmod p$ for prime $p$ means $p \\mid (x-1)(x+1)$, and a prime dividing a product divides a factor, so $x \\equiv \\pm 1 \\pmod p$. Each round detects any given composite with probability at least $1/2$, so $s$ rounds err with probability at most $2^{-s}$ — a one-sided error: 'composite' verdicts are always correct (the witness certifies it); only 'prime' can ever be wrong.",
      },
      {
        term: "Generating random primes",
        kind: "method",
        statement: "To build a random $\\beta$-bit prime: draw a random $\\beta$-bit odd integer, run `MILLER-RABIN(n, s)` with $s$ large enough (50 makes the error $2^{-50}$), and retry on failure. By the prime number theorem the density of primes near $2^{\\beta}$ is about $1/(\\beta \\ln 2)$, so an odd candidate succeeds with probability $\\approx 2/(\\beta \\ln 2)$ — an expected $(\\ln 2^{\\beta})/2$ trials, about 177 for $\\beta = 512$.",
        detail: "Key generation is randomized but fast: roughly 177 Miller-Rabin runs for a 512-bit prime, each polynomial. 'Probably prime' is good enough — an error probability of $2^{-50}$ per key sits far below hardware failure rates.",
      },
      {
        term: "Nontrivial square roots of $1$",
        kind: "definition",
        statement: "Modulo prime $p$, $x^2 \\equiv 1$ forces $x \\equiv \\pm 1$ (field: $(x-1)(x+1) \\equiv 0$ implies a factor is $0$). A solution $x \\not\\equiv \\pm 1$ mod $n$ is a nontrivial square root of $1$ and witnesses compositeness: primes have none, so finding one proves $n$ composite.",
        detail: "WITNESS squares $x_0 = a^d$ through $x_{i} = x_{i-1}^2$ toward $a^{n-1}$; hitting $1$ from $x \\ne \\pm 1$ is the nontrivial root that Fermat's test misses on Carmichael numbers like $561$.",
      },
      {
        term: "Error $\\le 2^{-s}$ amplification",
        kind: "theorem",
        statement: "MILLER-RABIN with $s$ random bases errs (says prime on composite) with probability at most $2^{-s}$: at most $1/4$ of bases are non-witnesses for any composite $n$ (at most $1/2$ for most), so $s$ independent trials drive error exponentially low while never erring on prime or on composite-with-witness.",
        detail: "One-sided error (composites may slip, primes never miscalled) plus $O(s\\beta^3)$ cost: $s = 50$ gives $2^{-50}$ error, negligible beside hardware failure, which is why crypto libraries test with dozens of bases.",
      },
    ],
    examples: [
      {
        title: "WITNESS(7, 561): catching the smallest Carmichael number",
        problem: "Run the Miller-Rabin witness test with base $a = 7$ on $n = 561 = 3 \\cdot 11 \\cdot 17$, which Section 31.6 showed satisfies $7^{560} \\equiv 1 \\pmod{561}$.",
        steps: [
          { label: "Decompose the exponent", text: "$n - 1 = 560 = 2^4 \\cdot 35$, so $t = 4$ and $u = 35$." },
          { label: "Start of the chain", text: "$x_0 = 7^{35} \\bmod 561$. From 31.6's square table, $7^{35} = 7^{32} \\cdot 7^2 \\cdot 7 \\equiv 511 \\cdot 49 \\cdot 7 \\equiv 355 \\cdot 7 = 2485 \\equiv 241 \\pmod{561}$." },
          { label: "Square up the chain", text: "$x_1 = 241^2 = 58081 \\equiv 298$; $x_2 = 298^2 = 88804 \\equiv 166$; $x_3 = 166^2 = 27556 \\equiv 67$; $x_4 = 67^2 = 4489 = 8 \\cdot 561 + 1 \\equiv 1 \\pmod{561}$." },
          { label: "The verdict", text: "$x_4 = 1$ with predecessor $x_3 = 67 \\notin \\{1, 560\\}$: 67 is a nontrivial square root of 1 modulo 561 — impossible for a prime. WITNESS returns TRUE: 561 is composite." },
          { label: "What Fermat alone saw", text: "The chain ends at 1, so the Fermat test $7^{560} \\bmod 561 = 1$ reports 'prime'. The intermediate structure — the square root of 1 at position 3 — is exactly the extra evidence Miller-Rabin extracts." },
        ],
        result: "The chain $241 \\to 298 \\to 166 \\to 67 \\to 1$ exposes $67^2 \\equiv 1$ with $67 \\not\\equiv \\pm 1$, proving 561 composite despite its perfect Fermat behavior toward base 7.",
      },
      {
        title: "Bases that spare $561$ and bases that catch it",
        problem: "Fermat base $2$ spares Carmichael $561$ ($2^{560} \\equiv 1$); show Miller-Rabin base $7$ catches it via a nontrivial root.",
        steps: [
          { label: "Factor $n-1$", text: "$560 = 35\\cdot 16$: $d = 35$, $r = 4$ squarings: chain $7^{35}, 7^{70}, 7^{140}, 7^{280}, 7^{560}$ mod $561$." },
          { label: "Chain", text: "$7^{35} \\equiv 263$? Computed by repeated squaring: $263^2 = 69169 \\equiv 166$, $166^2 \\equiv 67$, $67^2 \\equiv 1 \\pmod{561}$: hits $1$ from $67 \\ne \\pm 1$ ($\\pm 1 = 1,560$)." },
          { label: "Witness", text: "$67^2 \\equiv 1$ with $67 \\not\\equiv \\pm 1$: nontrivial square root of $1$ mod $561$: WITNESS returns TRUE (composite)." },
          { label: "Versus Fermat", text: "Final $7^{560} \\equiv 1$ would pass Fermat; Miller-Rabin inspects the chain, not just the endpoint, so Carmichael numbers cannot hide." },
        ],
        result: "Base $7$ witnesses $561$ via $67^2 \\equiv 1$, $67 \\ne \\pm 1$: Miller-Rabin catches what Fermat misses.",
      },
    ],
    keyTakeaways: [
      "Fermat's $a^{n-1} \\equiv 1$ is necessary but not sufficient for primality; Carmichael numbers such as $561 = 3 \\cdot 11 \\cdot 17$ defeat it for every coprime base.",
      "Miller-Rabin adds the nontrivial-square-root-of-1 test: each round catches any composite with probability $\\ge 1/2$, and a 'composite' verdict is always correct.",
      "$s$ rounds give error $\\le 2^{-s}$; with about $\\ln 2^{\\beta}/2$ odd candidates per $\\beta$-bit prime, key generation is randomized but fast.",
    ],
    quiz: [
      {
        q: "The Fermat test with base 7 is run on $n = 561$. What does it report?",
        options: ["composite, since $7^{560} \\not\\equiv 1 \\pmod{561}$", "prime, since $7^{560} \\equiv 1 \\pmod{561}$ — 561 is a pseudoprime to base 7", "composite, since 561 is odd", "prime, since 560 divides $\\varphi(561)$"],
        answer: 1,
        explanation: "$7^{560} \\bmod 561 = 1$ was computed in 31.6, so the Fermat test is fooled: 561 is composite ($3 \\cdot 11 \\cdot 17$) yet passes — indeed it passes for every coprime base, being Carmichael.",
      },
      {
        q: "In the trace of WITNESS(7, 561) the chain is $x_0 \\ldots x_4 = 241, 298, 166, 67, 1$. Why does this prove 561 composite?",
        options: ["$x_4 \\ne 1$, violating Fermat's little theorem", "$67$ squares to 1 but is neither 1 nor 560 — a nontrivial square root of 1, impossible modulo a prime", "the chain has length 5", "$241$ is not coprime to 561"],
        answer: 1,
        explanation: "$x^2 \\equiv 1 \\pmod p$ forces $x \\equiv \\pm 1$ for prime $p$ (since $p \\mid (x-1)(x+1)$); 67 is neither, so the modulus cannot be prime.",
      },
      {
        q: "MILLER-RABIN(n, s) declares $n$ prime after $s$ independent rounds find no witness. The probability that a composite $n$ survives is at most:",
        options: ["$2^{-s}$", "$1/s!$", "$2^{-100}$ regardless of $s$", "$0$ — the test is deterministic"],
        answer: 0,
        explanation: "Each random round catches a composite with probability at least $1/2$, so $s$ rounds leave an escape probability of at most $2^{-s}$ — one-sided: a 'composite' verdict is always correct.",
      },
    ],
  },

  // ---------------------------------------------------------------- 31.9
  {
    sectionId: "clrs-ch31-s9",
    readingTime: 5,
    intro: "The final pillar: given a composite $n$, find a nontrivial factor. The assumed intractability of this problem — not of primality, not of gcd — is what stands between RSA's public keys and its secrets. Pollard's rho heuristic factors medium-size numbers in about $n^{1/4}$ operations by walking a rho-shaped path through the residues and waiting for a birthday collision.",
    objectives: [
      "Explain why trial division is exponential in the bit length of $n$",
      "Trace POLLARD-RHO, including the role of Floyd-style cycle detection",
      "State the factorization difficulty assumption and its role in RSA's security",
    ],
    concepts: [
      {
        term: "Trial division is exponential",
        kind: "insight",
        statement: "Testing $n$ for divisibility by $2, 3, \\ldots, \\lfloor\\sqrt{n}\\rfloor$ finds any factor, but costs $\\Theta(\\sqrt{n}) = \\Theta(2^{\\beta/2})$ divisions on a $\\beta$-bit input — exponential in the input length. Finding factors is a different game from recognizing primes.",
        detail: "Primality, remarkably, is provably in P — the deterministic AKS algorithm (2002) — and practically fast via Miller-Rabin, which is why generating RSA keys takes milliseconds. Factoring the resulting modulus is the part believed intractable; that asymmetry is the whole of public-key cryptography.",
      },
      {
        term: "Pollard's rho method",
        kind: "method",
        statement: "**`POLLARD-RHO(n)`** iterates $x_{i+1} = (x_i^2 - 1) \\bmod n$ from a random seed, keeping a saved value $y$ that is re-anchored to $x_k$ whenever $i$ reaches a power of 2 (Floyd-style cycle detection). At each step it computes $d = \\gcd(y - x_i, n)$; if $1 < d < n$, a nontrivial factor is found. The iteration walks a **rho-shaped** trajectory — a tail into a cycle — modulo any prime factor $p$.",
        detail: "Once two iterates collide modulo $p$ (their difference is divisible by $p$) without colliding modulo $n$, the gcd splits off exactly $p$. The birthday paradox governs the wait: collisions among $p$ residues appear after about $\\sqrt{p}$ steps, so the expected cost is $O(\\sqrt{p}) \\le O(n^{1/4})$ arithmetic operations for the smallest factor $p$ — a heuristic analysis (the iteration is not truly random) that matches practice superbly.",
      },
      {
        term: "The factorization difficulty assumption",
        kind: "insight",
        statement: "No polynomial-time classical algorithm for factoring is known, despite centuries of work; the best known methods are subexponential but superpolynomial in the bit length. RSA's practical security rests on this difficulty assumption — and a large-scale quantum computer would shatter it, since **Shor's algorithm** factors in polynomial time.",
        detail: "The chain of custody for RSA's security: recovering messages at scale seems to require $d$; $d$ requires $\\varphi(n)$; $\\varphi(n)$ is equivalent to factoring $n$. The assumption is therefore about a 2000-year-old number-theory problem rather than about the cipher's design — which is exactly why the assumption is respected.",
      },
      {
        term: "Birthday collision in $\\sqrt p$ steps",
        kind: "theorem",
        statement: "For prime divisor $p$ of $n$, a random walk modulo $p$ repeats with constant probability after $\\Theta(\\sqrt p)$ steps (birthday paradox: $k$ samples from $p$ collide with probability $\\approx k^2/2p$). POLLARD-RHO's iterates mod $n$ project to such a walk mod $p$, so $\\gcd(|x_i-x_j|, n)$ reveals $p$ in $O(\\sqrt p) = O(n^{1/4})$ expected steps for balanced $n$.",
        detail: "Heuristic: $f(x) = x^2+c$ behaves pseudorandomly mod $p$; Floyd detects the repeat with $O(1)$ memory. Worst case $p \\approx n$ (prime input) costs $O(\\sqrt n)$, which is why rho is a factoring heuristic, not a primality test.",
      },
      {
        term: "Floyd's cycle detection",
        kind: "method",
        statement: "Tortoise $x_{i+1} = f(x_i)$ and hare $y_{i+1} = f(f(y_i))$ meet iff the sequence cycles; POLLARD-RHO checks $d = \\gcd(|x_i-y_i|, n)$ each step: $d = 1$ continue, $1 < d < n$ factor found, $d = n$ restart with new $c$. $O(1)$ memory versus $O(\\sqrt p)$ stored pairs.",
        detail: "Same trick as linked-list cycle detection (Exercise in Chapter 10): two pointers at speeds $1,2$ meet in $O(\\mu+\\lambda)$ steps ($\\mu$ tail, $\\lambda$ cycle), here applied to residues mod $p$ hidden inside residues mod $n$.",
      },
    ],
    examples: [
      {
        title: "POLLARD-RHO factors $1387 = 19 \\cdot 73$",
        problem: "Run POLLARD-RHO on $n = 1387$ with seed $x_1 = 2$ and iteration $x_{i+1} = (x_i^2 - 1) \\bmod n$, listing the sequence and the gcd test at each step.",
        steps: [
          { label: "Initialize", text: "$x_1 = y = 2$ and $k = 2$ (the saved value re-anchors at every power-of-two index). Hidden from the algorithm: $1387 = 19 \\cdot 73$." },
          { label: "Iterate", text: "$x_2 = 2^2 - 1 = 3$; $x_3 = 8$; $x_4 = 63$; $x_5 = 63^2 - 1 = 3968 \\equiv 1194$; $x_6 = 1194^2 - 1 \\equiv 1186$; $x_7 = 1186^2 - 1 \\equiv 177 \\pmod{1387}$." },
          { label: "gcd tests (y = 2, then 3)", text: "$i=2$: $\\gcd(2 - 3, 1387) = 1$; then $y \\leftarrow x_2 = 3$, $k = 4$. $i=3$: $\\gcd(3 - 8, 1387) = 1$." },
          { label: "gcd tests (y = 3, then 63)", text: "$i=4$: $\\gcd(3 - 63, 1387) = \\gcd(60, 1387) = 1$; then $y \\leftarrow x_4 = 63$, $k = 8$. $i=5$: $\\gcd(63 - 1194, 1387) = 1$. $i=6$: $\\gcd(63 - 1186, 1387) = 1$." },
          { label: "The hit", text: "$i=7$: $\\gcd(63 - 177, 1387) = \\gcd(114, 1387) = 19$ — since $114 = 6 \\cdot 19$ and 73 divides neither. A nontrivial factor." },
        ],
        result: "After seven iterations POLLARD-RHO returns 19, and $1387 = 19 \\cdot 73$. The saved value and the current iterate collided modulo 19 — $63 \\equiv 177 \\equiv 6 \\pmod{19}$ — without being congruent modulo $n$ itself, so $\\gcd(63 - 177, 1387) = \\gcd(114, 1387)$ split off exactly the factor 19.",
      },
      {
        title: "Rho walk on $n = 91$",
        problem: "POLLARD-RHO on $n = 91 = 7\\cdot 13$ with $f(x) = x^2+1$, $x_0 = 2$. Show the first $\\gcd > 1$.",
        steps: [
          { label: "Iterates", text: "$x_1 = 5$, $x_2 = 26$, $x_3 = 26^2+1 = 677 \\equiv 40$, $x_4 = 40^2+1 = 1601 \\equiv 54 \\pmod{91}$." },
          { label: "Hare", text: "Hare moves twice: $y_1 = x_2 = 26$, $y_2 = x_4 = 54$." },
          { label: "GCDs", text: "$|x_1-y_1| = |5-26| = 21$: $\\gcd(21,91) = 7$ ✓ factor found at step $1$ (lucky: $5 \\equiv 26 \\pmod 7$ birthday collision mod $7$)." },
          { label: "Split", text: "$91/7 = 13$: both prime, done. Had $d = 1$ we would continue; $d = 91$ would restart with new $c$." },
        ],
        result: "Factor $7$ at the first check ($|5-26| = 21$, $\\gcd = 7$); cofactor $13$: rho needs $O(\\sqrt 7)$ steps here, not $O(91)$ trial divisions.",
      },
    ],
    keyTakeaways: [
      "Trial division costs $\\Theta(2^{\\beta/2})$ on $\\beta$-bit inputs — exponential; primality is in P but factoring is believed not to be.",
      "Pollard's rho walks a tail-plus-cycle ('ρ') path and factors via $\\gcd(y - x_i, n)$ once a collision occurs modulo a prime factor — expected $O(\\sqrt{p})$ steps.",
      "RSA's security chain — message to $d$ to $\\varphi(n)$ to factorization — rests entirely on the factorization difficulty assumption; Shor's quantum algorithm is the known exception.",
    ],
    quiz: [
      {
        q: "Trial division on a $\\beta$-bit integer $n$ costs on the order of:",
        options: ["$O(\\beta)$", "$O(\\beta^2)$", "$O(2^{\\beta/2})$", "$O(\\beta^3)$"],
        answer: 2,
        explanation: "It tests divisors up to $\\sqrt{n}$, and $\\sqrt{n} = \\sqrt{2^{\\beta}} = 2^{\\beta/2}$ — exponential in the input length, unlike primality testing.",
      },
      {
        q: "In POLLARD-RHO, a nontrivial factor of $n$ is announced when:",
        options: ["$x_i$ equals the saved value $y$ exactly, modulo $n$", "$\\gcd(y - x_i, n)$ comes out strictly between 1 and $n$", "the sequence $x_1, x_2, \\ldots$ repeats modulo $n$", "$x_i$ reaches 0"],
        answer: 1,
        explanation: "The gcd is divisible by $p$ (a collision occurred modulo the factor $p$) but not by all of $n$, so it splits $n$. An exact collision modulo $n$ gives $\\gcd = n$ — the failure case that triggers a restart.",
      },
      {
        q: "The expected number of POLLARD-RHO iterations to find the smallest prime factor $p$ of $n$ is:",
        options: ["$\\Theta(p)$", "$\\Theta(\\sqrt{p})$", "$\\Theta(\\lg p)$", "$\\Theta(p/\\lg p)$"],
        answer: 1,
        explanation: "The birthday paradox: among $p$ residues a collision appears after about $\\sqrt{p}$ steps — at most $n^{1/4}$ when $p \\approx \\sqrt{n}$.",
      },
    ],
  },
]
