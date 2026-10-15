import type { SectionContent } from '../library'

// ============================================================================
// Mathematics Companion — Permutations, Combinations and Binomial (4.1 - 4.4)
// Master study content. Structured counting, binomial terms, coefficient
// sums and multinomial-remainder methods.
// ============================================================================

export const mathCompanionCh04Content: SectionContent[] = [
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: 'math-a4-s9',
    readingTime: 9,
    intro: 'Counting starts from the multiplication principle and branches into permutations with order and combinations without it. Grouping, identical objects and integer distributions each add one correction factor. This section fixes which formula applies before any numbers are substituted.',
    objectives: [
      'Choose $P(n,r) = \\frac{n!}{(n-r)!}$ versus $C(n,r) = \\frac{n!}{r!(n-r)!}$ by testing whether order matters',
      'Count groupings with division by factorial repeats and distributions with stars-and-bars $C(n+k-1,k-1)$',
      'Handle repetitions, identical objects and adjacency restrictions via bundling and gap methods'
    ],
    concepts: [
      {
        term: 'Multiplication principle',
        kind: 'law',
        statement: 'Sequential independent choices **multiply**: `m choices then n choices` give $m \\times n$ outcomes, extended to $n_1n_2\\cdots n_k$ stages.',
        detail: 'Order of stages does not matter for the product, but each stage count must be independent of earlier picks. Addition applies instead for disjoint alternatives.'
      },
      {
        term: 'Permutations versus combinations',
        kind: 'definition',
        statement: 'Ordered selections use **$P(n,r)$** with `P(n,r) = n!/(n-r)!`, while unordered use **$C(n,r)$** with `C(n,r) = n!/(r!(n-r)!)`.',
        detail: 'Relation $P(n,r) = r!C(n,r)$: every unordered set spawns $r!$ orders. Rank, seat and word problems are permutations; committees and subsets are combinations.'
      },
      {
        term: 'Identical-object correction',
        kind: 'method',
        statement: 'With repeats, **divide by repeat factorials**: `n!/(p! q! r!)` for objects with $p, q, r$ identical of each kind.',
        detail: 'Word $MISSISSIPPI$ style counts and identical-ball arrangements use this. Forgetting to divide overcounts each distinct layout by the internal permutations of identical items.'
      },
      {
        term: 'Grouping and division',
        kind: 'method',
        statement: 'Forming unlabeled groups needs **division by group factorial**: `C(n,k)C(n-k,k)/2!` for two unlabeled groups of $k$.',
        detail: 'Labeled teams (Team A versus Team B) keep the product; unlabeled pairs halve it. For three unlabeled triples divide by $3!$. Missing this division is the classic grouping trap.'
      },
      {
        term: 'Stars and bars distribution',
        kind: 'theorem',
        statement: 'Nonnegative integer solutions of **$x_1+\\cdots+x_k = n$** with `identical items` number $C(n+k-1, k-1)$.',
        detail: 'Place $k-1$ dividers among $n+k-1$ slots. For positive ($\\ge 1$) solutions shift $y_i = x_i-1$ to get $C(n-1,k-1)$. Upper bounds need inclusion-exclusion on top.'
      }
    ],
    examples: [
      {
        title: 'Rank with a fixed adjacency',
        problem: 'Five people $A, B, C, D, E$ line up. Count orders with $A$ and $B$ adjacent.',
        steps: [
          { label: 'Step 1', text: '```text\nbundle [AB] as one block; blocks = 4 => 4! orders; inside 2!\n```\nBundle $A, B$ into one block. Blocks are $[AB], C, D, E$: $4$ objects giving $4! = 24$ orders.' },
          { label: 'Step 2', text: 'Inside the block, $A$ and $B$ swap: $2! = 2$ internal orders. Multiply by independence: $24 \\times 2 = 48$.' },
          { label: 'Step 3', text: 'Check complement: total $5! = 120$, non-adjacent $= 120 - 48 = 72$. Adjacency roughly halves the space as expected.' }
        ],
        result: '$48$ orders with $A, B$ together; $72$ with them separated.'
      },
      {
        title: 'Identical distribution',
        problem: 'Distribute $7$ identical pens among $3$ students (any student may get zero). Count ways.',
        steps: [
          { label: 'Step 1', text: '```text\nx1 + x2 + x3 = 7, xi >= 0  =>  C(7+3-1, 3-1)\n```\nModel counts by $x_1+x_2+x_3 = 7$ with $x_i \\ge 0$.' },
          { label: 'Step 2', text: 'Stars-and-bars gives $C(7+3-1, 3-1) = C(9,2) = 36$.' },
          { label: 'Step 3', text: 'If each needed at least one, shift to $y_i = x_i-1$ with sum $4$, giving $C(4+3-1,2) = C(6,2) = 15$. The zero-allowed case is larger, as expected.' }
        ],
        result: '$36$ distributions with zeros allowed; $15$ with each at least one.'
      }
    ],
    keyTakeaways: [
      'Order matters means $P(n,r)$; order ignored means $C(n,r) = \\frac{P(n,r)}{r!}$.',
      'Identical items divide by $p!q!\\cdots$; unlabeled groups divide by group factorial.',
      'Nonnegative $x_1+\\cdots+x_k = n$ has $C(n+k-1,k-1)$ solutions; positive has $C(n-1,k-1)$.',
      'Bundle neighbours and place gaps for adjacency; complement counts the separated cases.'
    ],
    quiz: [
      {
        q: 'Number of ways to arrange $5$ distinct books in a row is',
        options: [`$25$`, `$120$`, `$60$`, `$20$`],
        answer: 1,
        explanation: 'Step 1: Five distinct slots with order mattering. Step 2: Count $5! = 120$. Step 3: Powers $5^2$ style counts allow repeats, which is not the case here. Step 4: Half values arise from fixing one book.'
      },
      {
        q: '$C(10,3)$ equals',
        options: [`$120$`, `$720$`, `$240$`, `$30$`],
        answer: 0,
        explanation: 'Step 1: $C(10,3) = \\frac{10 \\cdot 9 \\cdot 8}{6}$. Step 2: Numerator $720$. Step 3: Divide by $6$ to get $120$. Step 4: Value $720$ is $P(10,3)$ without the division.'
      },
      // PYQ-pattern: stars-and-bars distribution count
      {
        q: 'Nonnegative solutions of $x + y + z = 5$ number',
        options: [`$10$`, `$15$`, `$21$`, `$6$`],
        answer: 2,
        explanation: 'Step 1: Apply $C(n+k-1,k-1)$ with $n = 5$, $k = 3$. Step 2: Get $C(7,2) = 21$. Step 3: Positive-only would be $C(4,2) = 6$. Step 4: Option $10$ is $C(5,3)$ without the bars correction.'
      },
      {
        q: 'Two unlabeled pairs from $6$ people (each pair of $2$, leaving $2$ unused) is counted by',
        options: [`$C(6,2)C(4,2)$`, `$P(6,2)P(4,2)$`, `$6!$`, `$\\frac{C(6,2)C(4,2)}{2!}$`],
        answer: 3,
        explanation: 'Step 1: Pick first pair $C(6,2)$, second $C(4,2)$. Step 2: Swapping the two pair labels double counts. Step 3: Divide by $2!$ for unlabeled pairs. Step 4: Permutation forms overcount orders inside and across pairs.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.2
  {
    sectionId: 'math-a4-s7',
    readingTime: 8,
    intro: 'The binomial expansion $(x+y)^n = \\sum C(n,k)x^{n-k}y^k$ places every term by its index $k$. The general term $T_{r+1} = C(n,r)x^{n-r}y^r$ locates any single term, while parity of $n$ decides whether one or two middle terms appear. This section makes term-hunting mechanical.',
    objectives: [
      'Write $T_{r+1} = C(n,r)x^{n-r}y^r$ for $(x+y)^n$ and adapt it to $(x-y)^n$ and $(ax+b)^n$ forms',
      'Identify middle terms for even versus odd $n$ and solve for independent or constant terms',
      'Find coefficients of $x^m$ by equating exponents in the general term'
    ],
    concepts: [
      {
        term: 'General term',
        kind: 'theorem',
        statement: 'In $(x+y)^n$, term **$T_{r+1} = C(n,r)x^{n-r}y^r$** with `r from 0 to n` enumerates all $n+1$ terms.',
        detail: 'Index shift is the trap: $T_{r+1}$ uses $C(n,r)$, not $C(n,r+1)$. For $(ax + b)^n$ use $x \\to ax$ and $y \\to b$: $T_{r+1} = C(n,r)(ax)^{n-r}b^r$.'
      },
      {
        term: 'Middle terms',
        kind: 'theorem',
        statement: 'Even $n = 2m$ has **one middle $T_{m+1}$** with `single centre`, while odd $n = 2m+1$ has **two middles $T_{m+1}, T_{m+2}$**.',
        detail: 'Total terms $n+1$: even $n$ gives odd count with a unique centre; odd $n$ gives even count with twin centres. Always verify by $n+1$ parity before quoting.'
      },
      {
        term: 'Independent term',
        kind: 'method',
        statement: 'Constant term solves **exponent of $x$ equals $0$**: `set power = 0` in $T_{r+1}$ and solve for $r$.',
        detail: 'For $(x + \\frac{a}{x})^n$ the exponent is $n - 2r$; for $(x^2 + \\frac{1}{x})^n$ it is $2n - 3r$. Non-integer or out-of-range $r$ means no independent term exists.'
      },
      {
        term: 'Coefficient extraction',
        kind: 'method',
        statement: 'Coefficient of **$x^m$** comes from `exponent = m`: equate the $x$-power in $T_{r+1}$ to $m$, solve $r$, then substitute.',
        detail: 'Include all constants: $(ax)^{n-r}$ contributes $a^{n-r}$. Dropping the $a^{n-r}$ factor is the standard coefficient slip.'
      },
      {
        term: 'Sign handling for minus',
        kind: 'insight',
        statement: 'For $(x - y)^n$, term carries **$(-1)^r$** with `alternating sign`: $T_{r+1} = (-1)^rC(n,r)x^{n-r}y^r$.',
        detail: 'Odd $r$ terms are negative. When $y$ itself has a coefficient, $(-y)^r$ must be expanded whole, not just $(-1)^r$ times the rest.'
      }
    ],
    derivations: [
      {
        title: 'General Term of the Binomial Expansion',
        statement: 'Derivation of $T_{r+1} = \\binom{n}{r}x^{n-r}y^{r}$ in $(x+y)^{n} = \\sum_{r=0}^{n}\\binom{n}{r}x^{n-r}y^{r}$',
        prerequisites: [
          'Product $(x+y)^{n}$ as $n$ repeated factors $(x+y)$',
          'Combination count $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$ for choices',
          'Like terms collect by the number of $y$ picks',
        ],
        steps: [
          {
            label: 'Step 1: Expand as a choice from each factor',
            formula: '$$(x+y)^{n} = (x+y)(x+y)\\cdots(x+y)$$',
            explanation: 'Write the power as $n$ brackets multiplied together, so each term of the expansion picks either $x$ or $y$ from every bracket. This viewpoint works because distributivity forces exactly one pick per factor in every product. Counting distinct pick patterns therefore counts expansion terms.',
          },
          {
            label: 'Step 2: Count patterns with exactly $r$ picks of $y$',
            formula: '$$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$',
            explanation: 'Choose which $r$ of the $n$ brackets supply $y$, with the rest supplying $x$. This count works because brackets are distinguishable positions while picks of the same letter are identical, which is precisely what combinations enumerate. Each such pattern yields the same monomial $x^{n-r}y^{r}$.',
          },
          {
            label: 'Step 3: Collect like monomials into one term',
            formula: '$$T_{r+1} = \\binom{n}{r}x^{n-r}y^{r}$$',
            explanation: 'All $\\binom{n}{r}$ patterns with $r$ copies of $y$ are algebraically equal, so they merge into a single term with that coefficient. This grouping works because addition of identical monomials is just multiplication by their count. The index shift $r+1$ records that counting starts at $r = 0$.',
          },
          {
            label: 'Step 4: Range the index over all possibilities',
            formula: '$$(x+y)^{n} = \\sum_{r=0}^{n}\\binom{n}{r}x^{n-r}y^{r}$$',
            explanation: 'Let $r$ run from $0$ to $n$, covering zero $y$ picks up to all $y$ picks with no gaps. This works because every expansion product has some definite count $r$ of $y$ factors between those extremes. Summing the collected terms therefore reproduces the full expansion exactly once.',
          },
        ],
        result: 'The $(r+1)$-th term is $T_{r+1} = \\binom{n}{r}x^{n-r}y^{r}$, meaning the coefficient counts position choices while exponents track how many of each letter were picked.',
      },
    ],
    examples: [
      {
        title: 'Independent term',
        problem: 'Find the term independent of $x$ in $(x + \\frac{2}{x})^{10}$.',
        steps: [
          { label: 'Step 1', text: '```text\nT(r+1) = C(10,r) x^{10-r} (2/x)^r = C(10,r) 2^r x^{10-2r}\n```\nGeneral term $T_{r+1} = C(10,r)x^{10-r}(\\frac{2}{x})^r = C(10,r)2^r x^{10-2r}$.' },
          { label: 'Step 2', text: 'Set exponent $10 - 2r = 0$, so $r = 5$, within $0 \\le r \\le 10$.' },
          { label: 'Step 3', text: 'Value $C(10,5)2^5 = 252 \\cdot 32 = 8064$. No $x$ remains, confirming independence.' }
        ],
        result: 'Independent term $8064$ at $r = 5$.'
      },
      {
        title: 'Middle term of odd power',
        problem: 'Find the middle terms of $(2x - y)^7$.',
        steps: [
          { label: 'Step 1', text: '```text\nn = 7 odd => 8 terms; middles T4 and T5 (r = 3, 4)\n```\n$n = 7$ gives $8$ terms; middles are $T_4$ ($r = 3$) and $T_5$ ($r = 4$).' },
          { label: 'Step 2', text: '$T_4 = C(7,3)(2x)^4(-y)^3 = 35 \\cdot 16x^4 \\cdot (-y^3) = -560x^4y^3$. $T_5 = C(7,4)(2x)^3(-y)^4 = 35 \\cdot 8x^3y^4 = 280x^3y^4$.' },
          { label: 'Step 3', text: 'Signs alternate correctly: $r = 3$ odd gives minus, $r = 4$ even gives plus. Magnitudes match by $C(7,3) = C(7,4)$.' }
        ],
        result: 'Middles $-560x^4y^3$ and $280x^3y^4$.'
      }
    ],
    keyTakeaways: [
      '$T_{r+1} = C(n,r)x^{n-r}y^r$ with $r = 0$ to $n$; watch the $r$ versus $r+1$ shift.',
      'Even $n$ gives one middle, odd $n$ gives two; count $n+1$ terms first.',
      'Independent term sets $x$-exponent to $0$; $x^m$ coefficient sets it to $m$.',
      'Minus forms contribute $(-1)^r$; include every constant factor in the coefficient.'
    ],
    quiz: [
      {
        q: 'In $(x+y)^{10}$, $T_4$ equals',
        options: [`$C(10,4)x^6y^4$`, `$C(10,4)x^4y^6$`, `$C(10,3)x^7y^3$`, `$C(10,3)x^3y^7$`],
        answer: 2,
        explanation: 'Step 1: $T_4$ means $r + 1 = 4$, so $r = 3$. Step 2: Hence $C(10,3)x^7y^3$. Step 3: Option with $C(10,4)$ uses $r = 4$, which is $T_5$. Step 4: Exponents must sum to $10$.'
      },
      // PYQ-pattern: independent-term exponent equation
      {
        q: 'Number of terms in $(2x + 3y)^8$ is',
        options: [`$9$`, `$8$`, `$7$`, `$16$`],
        answer: 0,
        explanation: 'Step 1: Power $n$ gives $n + 1$ terms. Step 2: Here $n = 8$. Step 3: Hence $9$ terms. Step 4: Coefficients $2, 3$ do not alter the count.'
      },
      {
        q: 'Middle term of $(x + y)^6$ is',
        options: [`$C(6,2)x^4y^2$`, `$C(6,3)x^3y^3$`, `$C(6,4)x^2y^4$`, `$C(6,1)x^5y$`],
        answer: 1,
        explanation: 'Step 1: $n = 6 = 2m$ with $m = 3$. Step 2: Single middle $T_{m+1} = T_4$. Step 3: That is $C(6,3)x^3y^3$. Step 4: Neighbouring options are $T_3$ and $T_5$.'
      },
      {
        q: 'Independent term in $(x - \\frac{1}{x^2})^6$ comes from $r$ equal to',
        options: [`$r = 1$`, `$r = 3$`, `$r = 4$`, `$r = 2$`],
        answer: 3,
        explanation: 'Step 1: $T_{r+1} = C(6,r)x^{6-r}(-x^{-2})^r$ with $x$-power $6 - 3r$. Step 2: Set $6 - 3r = 0$. Step 3: Get $r = 2$. Step 4: Value is $C(6,2)(+1) = 15$ since $(-1)^2 = 1$.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Binomial inversions and coefficient extraction',
        blocks: [
          {
            kind: 'theorem',
            body: 'Write $T_{r+1} = C(n,r) x^{n-r} y^{r}$ for the general term of $(x+y)^{n}$. The **binomial inversion** states that sequences $a_{k}$ and $b_{k}$ satisfy $b_{n} = \\sum_{k} C(n,k) a_{k}$ for all $n$ exactly when $a_{n} = \\sum_{k} (-1)^{n-k} C(n,k) b_{k}$. Equivalently, coefficient extraction gives $C(n,r) = [t^{r}](1+t)^{n}$, and convolution of coefficients corresponds to multiplication of polynomials. The Vandermonde identity $C(m+n,k) = \\sum_{j} C(m,j) C(n,k-j)$ is the coefficient reading of $(1+t)^{m}(1+t)^{n} = (1+t)^{m+n}$.'
          },
          {
            kind: 'proof',
            body: 'Expand $(1+t)^{m}(1+t)^{n}$ in two ways. Directly it equals $(1+t)^{m+n}$ with coefficient $C(m+n,k)$ at $t^{k}$. Multiplied out, the coefficient of $t^{k}$ collects $C(m,j) C(n,k-j)$ over all splits $j + (k-j) = k$. Equality of polynomials forces equality of coefficients, proving Vandermonde convolution. Binomial inversion follows by applying the same principle to the lower triangular matrix with entries $C(n,k)$, whose inverse has entries $(-1)^{n-k} C(n,k)$, verified by the identity $\\sum_{k} (-1)^{k} C(r,k) = 0$ for $r > 0$. Thus term hunting is polynomial multiplication in disguise.'
          },
          {
            kind: 'example',
            heading: 'Independent term located by a linear equation',
            body: 'In $(x - x^{-2})^{6}$ the general term carries $x^{6-r}(x^{-2})^{r} = x^{6-3r}$ up to sign. Setting the exponent $6 - 3r = 0$ gives $r = 2$, so the constant term is $C(6,2)(-1)^{2} = 15$. Through the inversion lens, this solves a linear constraint on the exponent lattice: admissible $r$ values are the integer roots of $n - r - 2r = 0$. When no integer root exists there is no constant term, and the nearest exponents give the extremal lowest degree terms. Hence every single term problem is a one variable linear Diophantine condition on $r$.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 4.3
  {
    sectionId: 'math-a4-s10',
    readingTime: 9,
    intro: 'Among the terms $T_r$ the greatest is found by comparing successive ratios $\\frac{T_{r+1}}{T_r}$ against $1$. Coefficient sums come from substituting $x = 1$, while alternating and even-odd splits use $x = -1$ and averaging. This section pairs magnitude comparison with substitution filters.',
    objectives: [
      'Locate the greatest term via $\\frac{T_{r+1}}{T_r} \\ge 1$ and handle near-equal neighbours',
      'Evaluate $\\sum C(n,k)$, alternating and even-odd sums by $x = \\pm 1$ substitutions',
      'Apply roots-of-unity style filters for $C(n,0) + C(n,3) + \\cdots$ selections'
    ],
    concepts: [
      {
        term: 'Greatest-term ratio',
        kind: 'method',
        statement: 'Compare neighbours by **$\\frac{T_{r+1}}{T_r} = \\frac{n-r+1}{r}\\frac{y}{x}$** with `ratio >= 1 while rising` for positive-term $(x+y)^n$.',
        detail: 'Solve $\\frac{n-r+1}{r}\\frac{y}{x} \\ge 1$ for the rising range; the greatest term is at the crossover. With minus signs or complex values compare moduli $|T_r|$ instead.'
      },
      {
        term: 'Total coefficient sum',
        kind: 'theorem',
        statement: 'Putting **$x = 1$** with `all ones` gives $\\sum_{k=0}^n C(n,k) = 2^n$ and weighted variants similarly.',
        detail: 'For $(1+x)^n = \\sum C(n,k)x^k$, $x = 1$ yields $2^n$. For $(ax+b)^n$ style sums, substitute to make each bracket $1$ where possible.'
      },
      {
        term: 'Alternating sum',
        kind: 'theorem',
        statement: 'Putting **$x = -1$** with `sign flip` gives $\\sum (-1)^kC(n,k) = 0$ for $n \\ge 1$.',
        detail: 'From $(1-1)^n = 0$. Hence even-position and odd-position sums are equal, each $2^{n-1}$, the starting point of parity splits.'
      },
      {
        term: 'Even-odd split',
        kind: 'method',
        statement: 'Averaging values at **$1$ and $-1$** with `add and halve` isolates even terms: $E = \\frac{2^n + 0}{2} = 2^{n-1}$.',
        detail: 'Formulas: $E = \\frac{f(1)+f(-1)}{2}$ and $O = \\frac{f(1)-f(-1)}{2}$ for $f(x) = (1+x)^n$. The same averaging with $i$ and $-i$ isolates $4$-step residue classes.'
      },
      {
        term: 'Near-tie behaviour',
        kind: 'insight',
        statement: 'When the ratio equals **$1$ exactly**, `two equal greatest terms` occur at adjacent positions.',
        detail: 'Integer crossover points can tie: if $\\frac{T_{m+1}}{T_m} = 1$ then $T_m = T_{m+1}$ jointly greatest. Always test equality rather than assuming uniqueness.'
      }
    ],
    examples: [
      {
        title: 'Greatest term search',
        problem: 'Find the greatest term in $(1 + 2)^{10}$-style expansion $(3 + 2x)^8$ at $x = 1$, i.e. compare numeric terms of $(3+2)^8$.',
        steps: [
          { label: 'Step 1', text: '```text\nT(r+1) = C(8,r) 3^{8-r} 2^r; ratio = (9-r)/r * 2/3\n```\nTerms $T_{r+1} = C(8,r)3^{8-r}2^r$. Ratio $\\frac{T_{r+1}}{T_r} = \\frac{9-r}{r}\\cdot\\frac{2}{3}$.' },
          { label: 'Step 2', text: 'Rising while $\\frac{9-r}{r}\\cdot\\frac{2}{3} \\ge 1$, i.e. $2(9-r) \\ge 3r$, so $18 \\ge 5r$ and $r \\le 3$. Terms rise through $r = 3$.' },
          { label: 'Step 3', text: 'Greatest at $r = 3$ ($T_4$): $C(8,3)3^5 2^3 = 56 \\cdot 243 \\cdot 8 = 108864$. Neighbours $T_3, T_5$ are smaller on each side.' }
        ],
        result: 'Greatest term $T_4 = 108864$.'
      },
      {
        title: 'Even-term sum',
        problem: 'Compute $S = C(8,0) + C(8,2) + C(8,4) + C(8,6) + C(8,8)$.',
        steps: [
          { label: 'Step 1', text: '```text\nE = (f(1) + f(-1))/2 with f(x) = (1+x)^8\n```\nEven-position sum $E = \\frac{(1+1)^8 + (1-1)^8}{2}$.' },
          { label: 'Step 2', text: 'Numerator $2^8 + 0 = 256$. Halving gives $128$.' },
          { label: 'Step 3', text: 'Check: total $2^8 = 256$ splits equally into even $128$ and odd $128$ since alternating sum is $0$.' }
        ],
        result: '$S = 128 = 2^7$.'
      }
    ],
    keyTakeaways: [
      'Greatest term rises while $\\frac{T_{r+1}}{T_r} \\ge 1$; equality gives twin maxima.',
      '$x = 1$ totals coefficients to $2^n$; $x = -1$ alternates them to $0$.',
      'Even and odd sums are $\\frac{f(1) \\pm f(-1)}{2}$; $4$-step filters use $\\pm i$.',
      'With signs or complex entries, maximise $|T_r|$ rather than signed $T_r$.'
    ],
    quiz: [
      {
        q: '$C(5,0) + C(5,1) + \\cdots + C(5,5)$ equals',
        options: [`$32$`, `$25$`, `$10$`, `$5$`],
        answer: 0,
        explanation: 'Step 1: Recognise $(1+1)^5$. Step 2: Total $2^5 = 32$. Step 3: Power $5$ fixes the base $2$. Step 4: Value $25$ is $5^2$, unrelated.'
      },
      {
        q: '$C(n,0) - C(n,1) + C(n,2) - \\cdots$ for $n \\ge 1$ equals',
        options: [`$2^n$`, `$0$`, `$1$`, `$n$`],
        answer: 1,
        explanation: 'Step 1: Recognise $(1-1)^n$. Step 2: Value $0^n = 0$. Step 3: Needs $n \\ge 1$; for $n = 0$ it is $1$. Step 4: Total $2^n$ is the unsigned sum.'
      },
      // PYQ-pattern: greatest-term ratio crossover
      {
        q: 'Even-position sum $C(6,0)+C(6,2)+C(6,4)+C(6,6)$ equals',
        options: [`$64$`, `$16$`, `$32$`, `$0$`],
        answer: 2,
        explanation: 'Step 1: Use $E = \\frac{2^6 + 0}{2}$. Step 2: Numerator $64$. Step 3: Halving gives $32$. Step 4: Full total $64$ splits evenly.'
      },
      {
        q: 'If $\\frac{T_{4}}{T_3} > 1$ and $\\frac{T_{5}}{T_4} < 1$ in positive terms, the greatest is',
        options: [`$T_3$`, `$T_5$`, `$T_1$`, `$T_4$`],
        answer: 3,
        explanation: 'Step 1: Rising into $T_4$ means $T_4 > T_3$. Step 2: Falling after means $T_4 > T_5$. Step 3: Hence $T_4$ tops both neighbours. Step 4: Monotone ratio behaviour makes it global greatest.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.4
  {
    sectionId: 'math-a4-s11',
    readingTime: 9,
    intro: 'The multinomial theorem extends binomial coefficients to $(x_1+\\cdots+x_m)^n$ with $\\frac{n!}{k_1!\\cdots k_m!}$ weights. The same expansion thinking cracks divisibility: isolate the remainder by expanding $(1 + k)^n$ or grouping into multiples. This section unites counting of terms with remainder extraction.',
    objectives: [
      'Write multinomial terms $\\frac{n!}{k_1!k_2!k_3!}x_1^{k_1}x_2^{k_2}x_3^{k_3}$ with $k_1+k_2+k_3 = n$',
      'Count terms of $(x_1+\\cdots+x_m)^n$ as $C(n+m-1,m-1)$ and extract single coefficients',
      'Find remainders of $a^n$ modulo $m$ by binomial splitting and Fermat-style reduction'
    ],
    concepts: [
      {
        term: 'Multinomial coefficient',
        kind: 'theorem',
        statement: 'Coefficient of **$x_1^{k_1}\\cdots x_m^{k_m}$** is `n!/(k1! ... km!)` with $k_1+\\cdots+k_m = n$.',
        detail: 'It counts orders of a word with $k_i$ copies of letter $i$. For trinomial $(x+y+z)^n$ the coefficient is $\\frac{n!}{a!b!c!}$ with $a+b+c = n$.'
      },
      {
        term: 'Term counting',
        kind: 'theorem',
        statement: 'Number of distinct terms in **$(x_1+\\cdots+x_m)^n$** is `C(n+m-1, m-1)`, the count of exponent solutions.',
        detail: 'Each term matches one nonnegative solution of $k_1+\\cdots+k_m = n$. For trinomials this is $C(n+2,2) = \\frac{(n+1)(n+2)}{2}$.'
      },
      {
        term: 'Coefficient extraction',
        kind: 'method',
        statement: 'To get one coefficient, **solve the exponent system** with `sum = n plus power targets` then evaluate the multinomial weight.',
        detail: 'For instance in $(x + y + z)^5$ the $x^2y^2z$ coefficient solves $a = 2, b = 2, c = 1$: weight $\\frac{120}{2!2!1!} = 30$. Every variable power plus the sum condition must hold together.'
      },
      {
        term: 'Remainder by splitting',
        kind: 'method',
        statement: 'Write **$a = qm + r$** with `small r` then expand $(qm+r)^n$: all but $r^n$ carry factor $m$.',
        detail: 'So $a^n \\equiv r^n \\pmod m$. Choosing $r = \\pm 1, \\pm 2$ keeps powers tiny. Splitting $7 = 8 - 1$ or $10 = 9 + 1$ are the model moves.'
      },
      {
        term: 'Last-digit cycles',
        kind: 'insight',
        statement: 'Powers cycle modulo $10$ with **period at most $4$**: `reduce exponent mod 4` after handling the base residue.',
        detail: 'Bases $0,1,5,6$ are fixed points; $4$ and $9$ have period $2$; $2,3,7,8$ have period $4$. Reducing the exponent modulo the cycle length collapses huge powers.'
      }
    ],
    examples: [
      {
        title: 'Trinomial coefficient',
        problem: 'Find the coefficient of $x^2y^2z$ in $(x + y + z)^5$.',
        steps: [
          { label: 'Step 1', text: '```text\nexponents (2,2,1) sum to 5; weight 5!/(2! 2! 1!)\n```\nExponents must be $(2,2,1)$ in some order; here fixed to $x^2y^2z^1$ with sum $5$.' },
          { label: 'Step 2', text: 'Multinomial weight $\\frac{5!}{2!2!1!} = \\frac{120}{4} = 30$.' },
          { label: 'Step 3', text: 'Hence term $30x^2y^2z$. Total trinomial terms check: $C(7,2) = 21$, of which this is one.' }
        ],
        result: 'Coefficient $30$.'
      },
      {
        title: 'Remainder via binomial split',
        problem: 'Find the remainder when $7^{100}$ is divided by $8$.',
        steps: [
          { label: 'Step 1', text: '```text\n7 = 8 - 1; (8-1)^100 = multiples of 8 + (-1)^100\n```\nWrite $7 = 8 - 1$. Then $(8-1)^{100} = \\sum C(100,k)8^{100-k}(-1)^k$.' },
          { label: 'Step 2', text: 'Every term with a factor $8$ is $0$ modulo $8$. Only $k = 100$ term $(-1)^{100} = 1$ survives.' },
          { label: 'Step 3', text: 'Remainder is $1$. Equivalently $7 \\equiv -1 \\pmod 8$ so $7^{100} \\equiv 1$.' }
        ],
        result: 'Remainder $1$.'
      }
    ],
    keyTakeaways: [
      'Multinomial weight $\\frac{n!}{k_1!\\cdots k_m!}$ with $\\sum k_i = n$ generalises $C(n,k)$.',
      '$(m$-variable$)^n$ has $C(n+m-1,m-1)$ distinct terms; trinomial gives $\\frac{(n+1)(n+2)}{2}$.',
      'Split $a = qm \\pm r$ with tiny $r$ and expand: remainder is $r^n \\bmod m$.',
      'Modulo $10$, reduce exponents by the $2$- or $4$-cycle of the base residue.'
    ],
    quiz: [
      {
        q: 'Coefficient of $x^2y$ in $(x + y)^3$ via multinomial view is',
        options: [`$1$`, `$3$`, `$6$`, `$9$`],
        answer: 1,
        explanation: 'Step 1: Exponents $(2,1)$ sum to $3$. Step 2: Weight $\\frac{6}{2} = 3$. Step 3: Matches $C(3,1) = 3$. Step 4: Value $6$ would suit $(2,1)$ from $4!$ style miscount.'
      },
      {
        q: 'Terms in $(x + y + z)^4$ number',
        options: [`$12$`, `$9$`, `$15$`, `$20$`],
        answer: 2,
        explanation: 'Step 1: Use $C(n+m-1,m-1)$ with $n = 4$, $m = 3$. Step 2: Get $C(6,2) = 15$. Step 3: Formula $\\frac{5 \\cdot 6}{2}$ confirms. Step 4: Value $12$ is $3 \\times 4$ without stars-bars.'
      },
      // PYQ-pattern: binomial-split remainder extraction
      {
        q: 'Remainder of $9^{50}$ upon division by $8$ is',
        options: [`$1$`, `$0$`, `$7$`, `$2$`],
        answer: 0,
        explanation: 'Step 1: Write $9 = 8 + 1$. Step 2: $(8+1)^{50}$ leaves $1^{50} = 1$ modulo $8$. Step 3: All other terms carry factor $8$. Step 4: Hence remainder $1$.'
      },
      {
        q: 'Last digit of $3^{100}$ is',
        options: [`$3$`, `$7$`, `$9$`, `$1$`],
        answer: 3,
        explanation: 'Step 1: Powers of $3$ mod $10$ cycle $3, 9, 7, 1$. Step 2: Period $4$; $100 \\bmod 4 = 0$. Step 3: Fourth position is $1$. Step 4: Other options are earlier cycle slots.'
      }
    ]
  }
]
