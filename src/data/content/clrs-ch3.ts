import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition. Chapter 3: Growth of
// Functions. Sections 3.1 (asymptotic notation) – 3.2 (standard notations
// and common functions). Figures F4/F5 generated & verified in /home/z/tmp-14a.
// ============================================================================

export const clrsCh3Content: SectionContent[] = [
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: "clrs-ch3-s1",
    readingTime: 8,
    intro: "Chapter 2 ended by throwing away constants — this chapter builds the machinery that makes that legal. Asymptotic notation treats functions as members of sets: $O(g)$ collects everything that grows no faster than $g$ up to a constant, $\\Omega(g)$ everything that grows at least as fast, and $\\Theta$ their intersection. Because the definitions quantify over *all sufficiently large* $n$, they turn messy running times into a small algebra of growth rates.",
    objectives: [
      "State the formal set-builder definitions of $O$, $\\Omega$, $\\Theta$, $o$ and $\\omega$ and what each quantifier contributes",
      "Prove asymptotic relations from the definitions by exhibiting witnesses $c$ and $n_0$",
      "Use the transitivity/symmetry/duality properties and read the standard notational abuses correctly",
    ],
    concepts: [
      {
        term: "O-notation (upper bound)",
        kind: "notation",
        statement: "$O(g(n)) = \\{ f(n) : \\text{there exist positive constants } c \\text{ and } n_0 \\text{ such that } 0 \\le f(n) \\le c\\,g(n) \\text{ for all } n \\ge n_0 \\}$. Read: '$f(n)$ is **at most a constant multiple of** $g(n)$, eventually.' The phrase 'for all $n \\ge n_0$' is the *asymptotic* part; the constant $c$ is what lets us ignore machine speed.",
        detail: "Example: $2n^2 = O(n^2)$ with $c = 2$, any $n_0$; also $2n^2 = O(n^3)$ — an upper bound need not be tight. The $0 \\le f(n)$ clause matters: these are *nonnegative* functions; Chapter 3 restricts to asymptotically nonnegative functions throughout.",
      },
      {
        term: "Ω-notation (lower bound)",
        kind: "notation",
        statement: "$\\Omega(g(n)) = \\{ f(n) : \\text{there exist positive constants } c \\text{ and } n_0 \\text{ such that } 0 \\le c\\,g(n) \\le f(n) \\text{ for all } n \\ge n_0 \\}$. Read: '$f$ is **at least a constant multiple of** $g$, eventually.' It is the mirror image of $O$: $f = \\Omega(g)$ exactly when $g = O(f)$.",
        detail: "Example: $\\sqrt{n} = \\Omega(\\lg n)$ — take $c = 1$ and $n_0 = 16$, since $\\lg n \\le \\sqrt{n}$ from $n = 16$ on. For *best-case* running times one writes things like 'insertion sort's best case is $\\Omega(n)$' — a lower bound on the fastest possible input.",
      },
      {
        term: "Θ-notation (tight bound)",
        kind: "notation",
        statement: "$\\Theta(g(n)) = \\{ f(n) : \\text{there exist positive constants } c_1, c_2, n_0 \\text{ such that } 0 \\le c_1 g(n) \\le f(n) \\le c_2 g(n) \\text{ for all } n \\ge n_0 \\}$. **Theorem 3.1:** $f(n) = \\Theta(g(n))$ **if and only if** $f(n) = O(g(n))$ and $f(n) = \\Omega(g(n))$.",
        detail: "So $\\Theta(g) = O(g) \\cap \\Omega(g)$: the sandwich must hold from both sides with *possibly different* constants ($c_1 \\le c_2$ may be assumed WLOG). Theorem 3.1 is why a tight bound can be certified by two separate one-sided proofs — a habit used constantly in Chapter 4.",
      },
      {
        term: "o-notation and ω-notation (non-tight)",
        kind: "notation",
        statement: "$o(g(n)) = \\{ f(n) : \\text{for **every** positive constant } c \\text{ there is } n_0 \\text{ with } 0 \\le f(n) < c\\,g(n) \\text{ for all } n \\ge n_0 \\}$, and symmetrically $\\omega(g) = \\{f : g = o(f)\\}$ demands $0 \\le c\\,g(n) < f(n)$ eventually for *every* $c$. When the limits exist: $f = o(g) \\iff \\lim_{n\\to\\infty} f(n)/g(n) = 0$ and $f = \\omega(g) \\iff \\lim f(n)/g(n) = \\infty$.",
        detail: "The change from $O$'s *existential* $c$ to a *universal* $c$ is the whole difference between 'at most as fast' and 'strictly slower': $2n^2 = O(n^2)$ but $2n^2 \\ne o(n^2)$, since no $c < 2$ ever works; yet $2n = o(n^2)$, because $2n/n^2 = 2/n \\to 0$ beats every $c$.",
      },
      {
        term: "The analogy with numbers",
        kind: "insight",
        statement: "The five relations behave like comparisons on numbers: $O \\sim \\le$, $\\Omega \\sim \\ge$, $\\Theta \\sim =$, $o \\sim <$, $\\omega \\sim >$. All five are **transitive**; $\\Theta$ is **symmetric** ($f = \\Theta(g) \\Rightarrow g = \\Theta(f)$); $O$ and $\\Omega$ are reflexive; and $f = o(g)$ implies $f = O(g)$ but not conversely. **Duality:** $f = O(g) \\iff g = \\Omega(f)$, and $f = o(g) \\iff g = \\omega(f)$.",
        detail: "One disanalogy to remember: the 'equality' $\\Theta$ is an equivalence relation, so the analogy is with comparison, not arithmetic — you cannot subtract $\\Theta$-classes, and trichotomy fails (two functions can be asymptotically *incomparable*, oscillating past each other).",
      },
      {
        term: "How to read the '=' abuse",
        kind: "insight",
        statement: "When we write $f(n) = O(g(n))$, the '=' really means **set membership** $f(n) \\in O(g(n))$; the direction is one-way, so $n^2 = O(n^2)$ and $O(n^2) = n^2$ are *not* interchangeable. In chains such as $2n^2 + 3n + 1 = 2n^2 + \\Theta(n)$, the anonymous function symbol ($O$, $\\Theta$, …) stands for a *single* function from the set, chosen to make the equation true.",
        detail: "Number of anonymous functions per equation: exactly one — $2n^2 + \\Theta(n) = \\Theta(n^2)$ says 'for some $h \\in \\Theta(n)$, the left side is $2n^2 + h$, which lies in $\\Theta(n^2)$'. Common correct idioms: `$2n^2 + 3n + 1 = 2n^2 + \\Theta(n)$` and `$2n^2 + \\Theta(n) = \\Theta(n^2)$`; the backward chain $O(g) = f$ is never used.",
      },
    ],
    figures: [
      {
        caption: "**$f(n) = \\Theta(g(n))$ as a picture.** For all $n \\ge n_0$, the curve $f$ is trapped in the wedge between $c_1 g(n)$ and $c_2 g(n)$ (shaded). Before $n_0$, $f$ may do anything — the definition is indifferent to finite prefixes, which is exactly why initialization constants and small-input effects never matter asymptotically.",
        svg: '<svg viewBox="0 0 720 345" width="100%" role="img" aria-label="Theta notation: f trapped between c1 g and c2 g for all n beyond n naught"><line x1="90" y1="290" x2="660" y2="290" stroke="currentColor" stroke-width="1.6"/><line x1="90" y1="290" x2="90" y2="40" stroke="currentColor" stroke-width="1.6"/><text x="660" y="308" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">n</text><text x="70" y="45" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">values</text><polygon points="269.143,216.667 660,56.6667 660,173.333 269.143,253.333" fill="currentColor" fill-opacity="0.07" stroke="none"/><polyline points="269.143,253.333 285.429,250 301.714,246.667 318,243.333 334.286,240 350.571,236.667 366.857,233.333 383.143,230 399.429,226.667 415.714,223.333 432,220 448.286,216.667 464.571,213.333 480.857,210 497.143,206.667 513.429,203.333 529.714,200 546,196.667 562.286,193.333 578.571,190 594.857,186.667 611.143,183.333 627.429,180 643.714,176.667 660,173.333" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="269.143,216.667 285.429,210 301.714,203.333 318,196.667 334.286,190 350.571,183.333 366.857,176.667 383.143,170 399.429,163.333 415.714,156.667 432,150 448.286,143.333 464.571,136.667 480.857,130 497.143,123.333 513.429,116.667 529.714,110 546,103.333 562.286,96.6667 578.571,90 594.857,83.3333 611.143,76.6667 627.429,70 643.714,63.3333 660,56.6667" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="269.143,228.158 285.429,222.106 301.714,220.291 318,221.42 334.286,222.94 350.571,222.131 366.857,217.268 383.143,208.366 399.429,197.165 415.714,186.394 432,178.594 448.286,175.036 464.571,175.174 480.857,176.879 497.143,177.351 513.429,174.318 529.714,167.01 546,156.485 562.286,145.182 578.571,135.871 594.857,130.468 611.143,129.219 627.429,130.589 643.714,131.92 660,130.573" fill="none" stroke="#f59e0b" stroke-width="2.4"/><line x1="269.143" y1="290" x2="269.143" y2="60" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><text x="269.143" y="308" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">n₀</text><text x="513.429" y="90" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">c₂g(n)</text><text x="513.429" y="223.333" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">c₁g(n)</text><text x="456.429" y="156.667" font-family="ui-sans-serif, system-ui" font-size="12" fill="#f59e0b">f(n)</text><text x="400" y="322" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">before n₀: anything goes · after n₀: trapped in the wedge</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Proving a Θ bound from the definition",
        problem: "Prove that $\\frac{1}{2}n^2 - 3n = \\Theta(n^2)$ by exhibiting explicit constants.",
        steps: [
          { label: "Upper bound", text: "For $n \\ge 1$: $\\frac12 n^2 - 3n \\le \\frac12 n^2$ since $-3n \\le 0$. So $c_2 = \\tfrac12$, $n_0 = 1$ certifies membership in $O(n^2)$." },
          { label: "Lower bound, cleanly", text: "Rewrite $\\tfrac12 n^2 - 3n = (\\tfrac12 - \\tfrac{3}{n})n^2$; whenever $n \\ge 12$ the factor is at least $\\tfrac12 - \\tfrac14 = \\tfrac14$, so $\\tfrac12 n^2 - 3n \\ge \\tfrac14 n^2$." },
          { label: "Combine", text: "With $c_1 = \\tfrac14$, $c_2 = \\tfrac12$, $n_0 = 12$: $\\tfrac14 n^2 \\le \\tfrac12 n^2 - 3n \\le \\tfrac12 n^2$ for all $n \\ge 12$ — the sandwich definition of $\\Theta(n^2)$ holds." },
          { label: "Check the boundary", text: "At $n = 12$: $\\tfrac12 \\cdot 144 - 36 = 36 = \\tfrac14 \\cdot 144$ — tight on the nose, confirming $n_0$ was not chosen one step too early." },
        ],
        result: "$\\frac{1}{2}n^2 - 3n = \\Theta(n^2)$ with witnesses $(c_1, c_2, n_0) = (\\tfrac14, \\tfrac12, 12)$ — any constants that work are fine; the definition only demands existence.",
      },
      {
        title: "Two exponentials that look alike",
        problem: "Show that $2^{n+1} = O(2^n)$ but $2^{2n} \\ne O(2^n)$, and decide whether $n^2 = o(2^n)$.",
        steps: [
          { label: "The constant-factor shift", text: "$2^{n+1} = 2 \\cdot 2^n$, so $c = 2$, any $n_0$: membership in $O(2^n)$ holds. A *fixed* exponent shift is only a constant factor." },
          { label: "The growing gap", text: "$2^{2n}/2^n = 2^n \\to \\infty$: for every proposed $c$, choose $n_0 > \\lg c$ and the inequality $2^{2n} \\le c\\,2^n$ fails beyond it. So $2^{2n} \\notin O(2^n)$ — the exponent's *coefficient* is what asymptotics feel." },
          { label: "Strict smallness via the limit", text: "$\\lim_{n\\to\\infty} n^2/2^n = 0$ (each doubling of $n$ doubles the numerator but squares the denominator's advantage), hence $n^2 = o(2^n)$ — *strictly* slower, by the universal-$c$ definition as much as by the limit." },
        ],
        result: "$2^{n+1} = O(2^n)$, $2^{2n} \\ne O(2^n)$, and $n^2 = o(2^n)$: bases matter, exponent coefficients matter, exponent *offsets* do not.",
      },
    ],
    keyTakeaways: [
      "$O$, $\\Omega$, $\\Theta$ are sets of functions defined by constant-factor bounds valid *for all $n \\ge n_0$*; proving membership means exhibiting witnesses $c$ and $n_0$.",
      "Theorem 3.1 splits tightness into two one-sided proofs: $f = \\Theta(g) \\iff f = O(g)$ and $f = \\Omega(g)$; $o$/$\\omega$ upgrade 'some $c$' to 'every $c$', i.e. strict domination.",
      "The '=' in $f(n) = O(g(n))$ is membership; each anonymous symbol in an equation chain denotes one function from its set, which is what makes $2n^2 + 3n + 1 = 2n^2 + \\Theta(n)$ legal and its reverse illegal.",
    ],
    quiz: [
      {
        q: "The definition of $O(g(n))$ requires constants $c > 0$, $n_0 > 0$ such that:",
        options: [
          "$0 \\le c\\,g(n) \\le f(n)$ for all $n \\ge n_0$",
          "$0 \\le f(n) \\le c\\,g(n)$ for all $n \\ge n_0$",
          "$0 \\le f(n) \\le c\\,g(n)$ for all $n \\le n_0$",
          "$f(n) \\le c\\,g(n)$ for infinitely many $n$",
        ],
        answer: 1,
        explanation: "Upper bound: eventually $f$ is sandwiched at a constant multiple from above. Option (a) is $\\Omega$; (c) has the quantifier backwards; (d) has no 'eventually for all' at all.",
      },
      {
        q: "By Theorem 3.1, $f(n) = \\Theta(g(n))$ if and only if:",
        options: [
          "$f = o(g)$ and $f = O(g)$",
          "$f = O(g)$ and $f = \\Omega(g)$",
          "$f = \\omega(g)$ and $f = O(g)$",
          "$g = O(f)$ and $g = \\omega(f)$",
        ],
        answer: 1,
        explanation: "Tightness is the intersection of the one-sided bounds: the two-constant sandwich $c_1 g \\le f \\le c_2 g$ is equivalent to the pair of memberships.",
      },
      {
        q: "Which relation between $o$ and $O$ is correct?",
        options: [
          "$f = o(g)$ implies $f = O(g)$, but not conversely",
          "$f = O(g)$ implies $f = o(g)$, but not conversely",
          "they are the same relation",
          "neither implies the other",
        ],
        answer: 0,
        explanation: "Beating $g$ by *every* constant multiple eventually (universal $c$) certainly beats it by *some* (existential $c$). $2n^2 = O(n^2)$ but $2n^2 \\neq o(n^2)$ shows the converse fails.",
      },
      {
        q: "In the (legal) chain $2n^2 + 3n + 1 = 2n^2 + \\Theta(n) = \\Theta(n^2)$, the symbol $\\Theta(n)$ stands for:",
        options: [
          "the set of all linear functions simultaneously",
          "one particular function from the set $\\Theta(n)$, chosen so the equation holds",
          "any function that is $o(n^2)$",
          "an error term that is zero for large n",
        ],
        answer: 1,
        explanation: "Each anonymous function symbol in an equation denotes a single member of its set — here the function $h(n) = 3n + 1 \\in \\Theta(n)$, making the first '=' honest; one anonymous function per occurrence of '='.",
      },
      // PYQ-pattern — Theta witness constants (rephrased, values changed)
      {
        q: "For $f(n) = 3n^2 + 5n + 7$, which triple $(c_{1}, c_{2}, n_{0})$ witnesses $f(n) = \\Theta(n^2)$?",
        options: ["$c_{1} = 4, c_{2} = 5, n_{0} = 1$", "$c_{1} = 1, c_{2} = 2, n_{0} = 100$", "$c_{1} = 5, c_{2} = 6, n_{0} = 1$", "$c_{1} = 3, c_{2} = 4, n_{0} = 12$"],
        answer: 3,
        explanation: "Step 1 — Given: $f(n) = 3n^2 + 5n + 7$ and target $g(n) = n^2$. Step 2 — Governing definition: need $c_{1}g(n) \\le f(n) \\le c_{2}g(n)$ for all $n \\ge n_{0}$ with positive constants. Step 3 — Verification: lower $3n^2 \\le f(n)$ holds for every $n \\ge 1$; upper $3n^2 + 5n + 7 \\le 4n^2$ rearranges to $n^2 - 5n - 7 \\ge 0$, true from $n \\approx 6.14$ onward, hence certainly for $n_{0} = 12$. Step 4 — Sanity check: leading coefficient $3$ pins $c_{1} \\le 3 \\le c_{2}$, and pushing $n_{0}$ out absorbs the lower-order terms. Step 5 — Distractor analysis: any $c_{1} > 3$ eventually fails below since $f(n)$ divided by $n^2$ tends to $3$, and $c_{2} = 2$ fails above for the same reason. Step 6 — Conclude: $(3, 4, 12)$ is a valid witness.",
      },
    ],
  },

  // ---------------------------------------------------------------- 3.2
  {
    sectionId: "clrs-ch3-s2",
    readingTime: 7,
    intro: "Asymptotic comparisons only work if you know how the standard functions actually behave relative to each other. This section is the toolbox: monotonicity and floor/ceiling identities, modular arithmetic, the polynomials–exponentials–logarithms hierarchy, Stirling's formula for factorials (which immediately implies the comparison-sorting lower bound), the unbelievably slow iterated logarithm, and the Fibonacci numbers with their golden-ratio growth.",
    objectives: [
      "Manipulate floors, ceilings and modular arithmetic using the book's standard identities",
      "Rank the common growth classes — logarithms, polynomials, factorials, exponentials — and apply Stirling's approximation",
      "Compute iterated logarithms and Fibonacci numbers from their definitions and closed forms",
    ],
    concepts: [
      {
        term: "Monotonicity, floors and ceilings",
        kind: "notation",
        statement: "$f$ is **monotonically increasing** if $m \\le n \\Rightarrow f(m) \\le f(n)$, and **strictly** so when the inequality is strict. For floors and ceilings, $\\lfloor x \\rfloor \\le x \\le \\lceil x \\rceil$, and the workhorse identities: $\\lceil n/2 \\rceil + \\lfloor n/2 \\rfloor = n$; $\\lceil n/2 \\rceil = \\lfloor (n+1)/2 \\rfloor$; and for positive integers $a, b$: $\\lceil \\lceil n/a \\rceil / b \\rceil = \\lceil n/(ab) \\rceil$.",
        detail: "These identities are what let recurrences ignore rounding: splitting $n$ elements as $\\lfloor n/2 \\rfloor$ and $\\lceil n/2 \\rceil$ reconstitutes $n$ exactly, and iterating the division of $n$ by $b$ commutes with one division by $b^k$ — both used repeatedly in Chapter 4's analyses of floors and ceilings.",
      },
      {
        term: "Modular arithmetic",
        kind: "definition",
        statement: "For $a$ and a positive integer $n$: $a \\bmod n$ is the remainder $r$ with $a = qn + r$ and $0 \\le r < n$; equivalently $a \\bmod n = a - n\\lfloor a/n \\rfloor$. And $a \\equiv b \\pmod{n}$ means $n$ divides $a - b$. Under $\\bmod\\ n$, the set $\\mathbb{Z}_n = \\{0, 1, \\ldots, n-1\\}$ forms an **abelian group under addition**, with identity 0; multiplication behaves well too, and $a$ has a multiplicative inverse modulo $n$ **iff $\\gcd(a, n) = 1$**.",
        detail: "The group structure (associativity, identity, inverses) is exploited by hash functions, random number generators and primality tests in later chapters. A useful consequence: the values $ka \\bmod n$ for $k = 0, 1, \\ldots$ cycle through a subgroup of size $n / \\gcd(a, n)$ — the period structure behind Chapter 31's modular arithmetic.",
      },
      {
        term: "Polynomials, exponentials, logarithms",
        kind: "notation",
        statement: "A **polynomial** $p(n) = \\sum_{i=0}^{d} a_i n^i$ of degree $d$ has $p(n) = \\Theta(n^d)$ (positive leading coefficient). For exponentials, all bases relate to $e$: $a^x = e^{x \\ln a}$, so polynomials of $a$ differ from $a^n$ by constant powers — e.g. $2^{2n} = 4^n$. **Every exponential dominates every polynomial**: $n^b = o(a^n)$ for any $b$ and any $a > 1$. Logarithms: $\\lg n = \\log_2 n$, $\\ln n = \\log_e n$; they differ by constant factors, so $O$-classes are base-independent.",
        detail: "Two traps. First, exponent arithmetic: $\\lg(n^k) = k \\lg n$ but $\\lg^k n = (\\lg n)^k$ — both are $\\Theta((\\lg n)^k)$. Second, the logarithm's slow growth is *very* slow: $\\lg(n!) = \\Theta(n \\lg n)$ means even the factorial is only 'a bit more than linear' on the log scale, while $2^{\\lg n} = n$ quietly converts between the two worlds.",
      },
      {
        term: "Factorials and Stirling's approximation",
        kind: "theorem",
        statement: "$n! = n \\cdot (n-1) \\cdots 1$ obeys $n! \\le n^n$ and **Stirling's approximation**\n$$n! = \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^{n}\\left(1 + \\Theta(\\tfrac{1}{n})\\right),$$\nfrom which $n! = \\omega(n^d)$ for every fixed $d$, $n! = o(n^n)$, and — taking logarithms — $\\lg(n!) = \\Theta(n \\lg n)$, the fact behind the $\\Omega(n \\lg n)$ lower bound for comparison sorting in Chapter 8.",
        detail: "The weak bound $n! \\le n^n$ is already enough for some purposes, but Stirling gets constants: $\\lg n! = n \\lg n - (\\lg e)n + \\Theta(\\lg n) = n\\lg n - 1.443n + \\Theta(\\lg n)$, so $\\lg(10!) \\approx 21.8$ while $10 \\lg 10 \\approx 33.2$ — the linear correction is far from negligible.",
      },
      {
        term: "Iterated functions, lg* and Fibonacci",
        kind: "definition",
        statement: "The $i$-fold composition is written $f^{(i)}(n)$ — $f$ applied $i$ times. The **iterated logarithm** $\\lg^* n$ is the least $k$ with $\\lg^{(k)} n \\le 1$; it is the number of times you must take $\\log_2$ before the value drops to 1. The **Fibonacci numbers** are $F_0 = 0$, $F_1 = 1$, $F_i = F_{i-1} + F_{i-2}$, and Binet's closed form gives $F_n = \\lfloor \\varphi^n/\\sqrt{5} + \\tfrac12 \\rfloor$ where $\\varphi = (1+\\sqrt5)/2 \\approx 1.618$ is the golden ratio — so **Fibonacci grows like $\\varphi^n$**.",
        detail: "How slow is $\\lg^*$? $\\lg^* 2 = 1$, $\\lg^* 4 = 2$, $\\lg^* 16 = 3$, $\\lg^* 65536 = 4$, $\\lg^*(2^{65536}) = 5$: a tower of astronomically many bits still has $\\lg^* \\le 5$-ish. It appears in Chapter 21's union-find analysis, one of the most startling results in the book — an algorithm whose running time is *effectively constant* per operation.",
      },
    ],
    figures: [
      {
        caption: "The standard functions on a **logarithmic value axis, linear $n$ axis** ($n$ up to 64, values up to $10^4$). Reading order bottom-to-top: $\\lg n$, $n$, $n \\lg n$, $n^2$ — and $2^n$, the only straight line on this axis, which has already left the frame at $n \\approx 13$. (Between $\\lg n$ and $n$ sit $\\lg \\lg n$, $\\lg^* n$ and $\\sqrt n$.) The picture *is* the chapter's hierarchy: exponential ≫ polynomial ≫ polylogarithmic.",
        svg: '<svg viewBox="0 0 720 355" width="100%" role="img" aria-label="Growth hierarchy on a log value axis: log n, n, n log n, n squared, and 2 to the n leaving the frame near 13"><line x1="80" y1="300" x2="680" y2="300" stroke="currentColor" stroke-width="1" opacity="0.3"/><text x="72" y="304" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">1</text><line x1="80" y1="237.209" x2="680" y2="237.209" stroke="currentColor" stroke-width="1" opacity="0.3"/><text x="72" y="241.209" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">10</text><line x1="80" y1="174.419" x2="680" y2="174.419" stroke="currentColor" stroke-width="1" opacity="0.3"/><text x="72" y="178.419" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">10²</text><line x1="80" y1="111.628" x2="680" y2="111.628" stroke="currentColor" stroke-width="1" opacity="0.3"/><text x="72" y="115.628" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">10³</text><line x1="80" y1="48.8372" x2="680" y2="48.8372" stroke="currentColor" stroke-width="1" opacity="0.3"/><text x="72" y="52.8372" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">10⁴</text><text x="80" y="318" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">0</text><text x="230" y="318" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">16</text><text x="380" y="318" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">32</text><text x="530" y="318" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">48</text><text x="680" y="318" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">64</text><line x1="80" y1="300" x2="680" y2="300" stroke="currentColor" stroke-width="1.6"/><line x1="80" y1="300" x2="80" y2="30" stroke="currentColor" stroke-width="1.6"/><text x="680" y="336" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">n (linear)</text><text x="40" y="40" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">value (log)</text><polyline points="89.375,300 98.75,300 108.125,287.441 117.5,281.098 126.875,277.028 136.25,274.102 145.625,271.851 155,270.041 164.375,268.539 173.75,267.262 183.125,266.156 192.5,265.184 201.875,264.319 211.25,263.542 220.625,262.839 230,262.196 239.375,261.606 248.75,261.062 258.125,260.556 267.5,260.085 276.875,259.645 286.25,259.231 295.625,258.842 305,258.474 314.375,258.126 323.75,257.796 333.125,257.482 342.5,257.183 351.875,256.897 361.25,256.624 370.625,256.362 380,256.111 389.375,255.87 398.75,255.638 408.125,255.415 417.5,255.2 426.875,254.992 436.25,254.791 445.625,254.597 455,254.41 464.375,254.228 473.75,254.051 483.125,253.88 492.5,253.714 501.875,253.553 511.25,253.396 520.625,253.243 530,253.094 539.375,252.949 548.75,252.808 558.125,252.67 567.5,252.536 576.875,252.405 586.25,252.277 595.625,252.152 605,252.029 614.375,251.91 623.75,251.793 633.125,251.678 642.5,251.566 651.875,251.456 661.25,251.348 670.625,251.243 680,251.139" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="688" y="251.139" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">lg n</text><polyline points="89.375,300 98.75,281.098 108.125,270.041 117.5,262.196 126.875,256.111 136.25,251.139 145.625,246.936 155,243.294 164.375,240.082 173.75,237.209 183.125,234.61 192.5,232.237 201.875,230.055 211.25,228.034 220.625,226.152 230,224.392 239.375,222.739 248.75,221.181 258.125,219.706 267.5,218.307 276.875,216.977 286.25,215.708 295.625,214.496 305,213.336 314.375,212.222 323.75,211.153 333.125,210.124 342.5,209.132 351.875,208.175 361.25,207.251 370.625,206.356 380,205.491 389.375,204.651 398.75,203.837 408.125,203.047 417.5,202.279 426.875,201.532 436.25,200.804 445.625,200.096 455,199.406 464.375,198.732 473.75,198.075 483.125,197.433 492.5,196.806 501.875,196.194 511.25,195.594 520.625,195.008 530,194.434 539.375,193.871 548.75,193.32 558.125,192.78 567.5,192.251 576.875,191.732 586.25,191.222 595.625,190.721 605,190.23 614.375,189.747 623.75,189.273 633.125,188.807 642.5,188.349 651.875,187.898 661.25,187.454 670.625,187.018 680,186.589" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="688" y="186.589" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">n</text><polyline points="89.375,300 98.75,281.098 108.125,257.482 117.5,243.294 126.875,233.139 136.25,225.241 145.625,218.787 155,213.336 164.375,208.621 173.75,204.471 183.125,200.766 192.5,197.421 201.875,194.374 211.25,191.576 220.625,188.991 230,186.589 239.375,184.346 248.75,182.242 258.125,180.262 267.5,178.393 276.875,176.622 286.25,174.94 295.625,173.338 305,171.81 314.375,170.349 323.75,168.949 333.125,167.606 342.5,166.315 351.875,165.072 361.25,163.874 370.625,162.719 380,161.602 389.375,160.522 398.75,159.476 408.125,158.462 417.5,157.479 426.875,156.524 436.25,155.596 445.625,154.693 455,153.815 464.375,152.96 473.75,152.126 483.125,151.314 492.5,150.52 501.875,149.746 511.25,148.99 520.625,148.251 530,147.528 539.375,146.821 548.75,146.129 558.125,145.451 567.5,144.787 576.875,144.136 586.25,143.499 595.625,142.873 605,142.259 614.375,141.657 623.75,141.066 633.125,140.485 642.5,139.914 651.875,139.354 661.25,138.803 670.625,138.261 680,137.728" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="688" y="137.728" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">n lg n</text><polyline points="89.375,300 98.75,262.196 108.125,240.082 117.5,224.392 126.875,212.222 136.25,202.279 145.625,193.871 155,186.589 164.375,180.165 173.75,174.419 183.125,169.22 192.5,164.475 201.875,160.109 211.25,156.068 220.625,152.305 230,148.785 239.375,145.479 248.75,142.361 258.125,139.412 267.5,136.615 276.875,133.954 286.25,131.417 295.625,128.992 305,126.671 314.375,124.445 323.75,122.306 333.125,120.247 342.5,118.264 351.875,116.35 361.25,114.501 370.625,112.713 380,110.981 389.375,109.303 398.75,107.675 408.125,106.094 417.5,104.557 426.875,103.063 436.25,101.609 445.625,100.192 455,98.8111 464.375,97.4644 473.75,96.1501 483.125,94.8668 492.5,93.6129 501.875,92.3873 511.25,91.1886 520.625,90.0156 530,88.8674 539.375,87.7428 548.75,86.641 558.125,85.561 567.5,84.5019 576.875,83.463 586.25,82.4436 595.625,81.4428 605,80.4601 614.375,79.4948 623.75,78.5463 633.125,77.6139 642.5,76.6973 651.875,75.7958 661.25,74.909 670.625,74.0363 680,73.1774" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="688" y="73.1774" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">n²</text><line x1="80" y1="300" x2="204.688" y2="30" stroke="#f43f5e" stroke-width="2.2"/><text x="212.688" y="48.8372" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="#f43f5e">2ⁿ exits ≈13</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Stirling's approximation, checked to the digit",
        problem: "Estimate $\\lg(10!)$ two ways and explain what it implies about sorting 10 elements by comparisons.",
        steps: [
          { label: "Exact value", text: "$10! = 3{,}628{,}800$, and $2^{21} = 2{,}097{,}152 < 3{,}628{,}800 < 2^{22} = 4{,}194{,}304$, so $\\lg(10!) \\approx 21.79$ — a real number, not an integer bound." },
          { label: "Stirling", text: "$\\lg n! = \\lg\\sqrt{2\\pi n} + n \\lg(n/e)$: here $\\lg\\sqrt{20\\pi} \\approx \\lg 7.93 \\approx 2.99$ and $10 \\lg(10/e) = 10 \\lg 3.679 \\approx 18.79$, giving $2.99 + 18.79 = 21.78$ — off by 0.01 from exact." },
          { label: "The naive leading term", text: "$n \\lg n$ alone gives $10 \\cdot 3.322 = 33.2$, an overestimate by $11.4$ — the $-1.443n$ correction is what makes Stirling tight: $33.2 - 14.4 = 18.8$." },
          { label: "The sorting consequence", text: "A comparison sort on 10 elements is a decision tree with at least $10!$ leaves; a binary tree of height $h$ has $\\le 2^h$ leaves, so $h \\ge \\lceil 21.79 \\rceil = 22$ comparisons are needed in the worst case — versus $10 \\lg 10 \\approx 33$ for the crude bound." },
        ],
        result: "$\\lg(10!) \\approx 21.79$ (Stirling: 21.78): every comparison-based sort needs at least 22 comparisons to sort 10 items — an instance of the general $\\Omega(n \\lg n)$ lower bound.",
      },
      {
        title: "lg* and Fibonacci, computed honestly",
        problem: "Compute $\\lg^*(2^{65536})$ and $F_{20}$, each from the definition and the closed form.",
        steps: [
          { label: "Peel the tower", text: "Apply $\\lg$ repeatedly: $2^{65536} \\to 65536 \\to 16 \\to 4 \\to 2 \\to 1$. That is five applications, so $\\lg^*(2^{65536}) = 5$ — while $n$ itself would take $10^{19{,}728}$ digits to write down." },
          { label: "Fibonacci by recurrence", text: "$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765$: the recurrence gives $F_{20} = 6765$." },
          { label: "Fibonacci by Binet", text: "$\\varphi = 1.6180\\ldots$, $\\sqrt5 = 2.2361\\ldots$: $\\varphi^{20}/\\sqrt{5} = 15126.9997/2.2361 = 6765.000$; since $|\\hat\\psi^{20}/\\sqrt 5| < \\tfrac12$ where $\\hat\\psi = (1-\\sqrt5)/2 \\approx -0.618$, the nearest integer is exactly $F_{20}$." },
          { label: "Growth check", text: "$F_{n+1}/F_n \\to \\varphi = 1.618$: e.g. $6765/4181 = 1.61803$ — exponential growth with base strictly between 1 and 2, which is why Fibonacci recurrences resolve to $\\Theta(\\varphi^n)$ in Chapter 4's exercises." },
        ],
        result: "$\\lg^*(2^{65536}) = 5$ and $F_{20} = 6765 = \\lfloor \\varphi^{20}/\\sqrt5 + \\tfrac12 \\rfloor$: two functions of utterly different temperaments — one slower than any log, one exponential.",
      },
    ],
    keyTakeaways: [
      "Floors and ceilings obey the book's identities ($\\lceil n/2 \\rceil + \\lfloor n/2 \\rfloor = n$, $\\lceil\\lceil n/a\\rceil/b\\rceil = \\lceil n/ab\\rceil$); $\\mathbb{Z}_n$ is an abelian group under addition mod $n$, with multiplicative inverses exactly for $\\gcd(a,n) = 1$.",
      "The hierarchy is strict: $\\lg^* n \\ll \\lg\\lg n \\ll \\lg n \\ll \\sqrt n \\ll n \\ll n \\lg n \\ll n^2 \\ll n^3 \\ll 2^n$, and every exponential dominates every polynomial; Stirling gives $\\lg(n!) = n\\lg n - 1.443n + \\Theta(\\lg n)$ — the comparison-sorting lower bound.",
      "$\\lg^* n$ counts how many logs reduce $n$ to 1 (still 5 for $n = 2^{65536}$); Fibonacci grows as $\\varphi^n = \\Theta(1.618^n)$, exactly captured by rounding $\\varphi^n/\\sqrt5 + \\tfrac12$.",
    ],
    quiz: [
      {
        q: "The identity $\\lceil n/2 \\rceil + \\lfloor n/2 \\rfloor = n$ for odd $n$ equals:",
        options: ["$n$ exactly, one part being $(n+1)/2$ and the other $(n-1)/2$", "$n+1$", "$n-1$", "$n$ only for even $n$; it fails for odd $n$"],
        answer: 0,
        explanation: "For odd $n$, the ceiling takes the extra half: $\\lceil n/2\\rceil = (n+1)/2$ and $\\lfloor n/2\\rfloor = (n-1)/2$, which sum to $n$ — the reason split-based recursions never lose or duplicate an element.",
      },
      {
        q: "By Stirling's approximation, $\\lg(n!)$ is closest to:",
        options: ["$\\Theta(n)$", "$\\Theta(n \\lg n)$", "$\\Theta(n^2)$", "$\\Theta(\\lg n)$"],
        answer: 1,
        explanation: "Taking logs of $n! \\approx \\sqrt{2\\pi n}(n/e)^n$ gives $\\lg(n!) = n\\lg n - (\\lg e)n + \\Theta(\\lg n) = \\Theta(n \\lg n)$ — the fact that forces every comparison sort to take $\\Omega(n \\lg n)$ time.",
      },
      {
        q: "The value of $\\lg^*(2^{65536})$ is:",
        options: ["16", "65536", "5", "$2^{65536}$"],
        answer: 2,
        explanation: "Peel: $\\lg 2^{65536} = 65536$, $\\lg 65536 = 16$, $\\lg 16 = 4$, $\\lg 4 = 2$, $\\lg 2 = 1$ — five logs to reach 1, for an input whose decimal expansion has about 19,729 digits.",
      },
      {
        q: "Which statement about Fibonacci numbers is correct?",
        options: [
          "$F_n = \\Theta(n^2)$",
          "$F_n = \\Theta(\\varphi^n)$ with $\\varphi = (1+\\sqrt5)/2$, and $F_n = \\lfloor \\varphi^n/\\sqrt5 + \\tfrac12 \\rfloor$",
          "$F_n = \\Theta(2^n)$",
          "$F_n = O(\\lg n)$",
        ],
        answer: 1,
        explanation: "Binet's formula gives exact integer values via rounding because the conjugate term decays; the growth rate is the golden ratio, strictly between 1 and 2 — a recurrence Chapter 4 will solve by the methods of this part.",
      },
      // PYQ-pattern — Stirling growth of log factorial (rephrased, values changed)
      {
        q: "Which function grows as $\\Theta(n\\lg n)$?",
        options: ["$\\lg(n!)$", "$n$", "$2^n$", "$\\lg\\lg n$"],
        answer: 0,
        explanation: "Step 1 — Given candidates $\\lg(n!)$, $n$, $2^n$, $\\lg\\lg n$. Step 2 — Governing tool: Stirling formula $n! \\approx \\sqrt{2\\pi n}(\\frac{n}{e})^n$ turns products into sums under the logarithm. Step 3 — Derivation: $\\lg(n!) = n\\lg n - n\\lg e + O(\\log n)$, whose leading term $n\\lg n$ dominates the linear correction, pinning $\\Theta(n\\lg n)$. Step 4 — Sanity check: at $n = 100$ the formula gives about $520$ against the true $524$, and the same $\\Theta(n\\lg n)$ lower bound powers the comparison-sorting barrier. Step 5 — Distractor analysis: $n$ misses the logarithmic factor, $2^n$ is exponentially larger, and $\\lg\\lg n$ is doubly logarithmic, smaller than every other option. Step 6 — Conclude: $\\lg(n!)$ is the $\\Theta(n\\lg n)$ member.",
      },
    ],
  },
]
