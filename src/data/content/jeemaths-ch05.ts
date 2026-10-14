import type { SectionContent } from '../library'

// ============================================================================
// Mathematics Companion — Sequences and Series (5.1 - 5.4)
// Master study content. AP-GP formulae, AM-GM-HM chain, special finite sums,
// telescoping and AGP summation.
// ============================================================================

export const jeemathsCh05Content: SectionContent[] = [
  // ---------------------------------------------------------------- 5.1
  {
    sectionId: 'jeemaths-ch5-s1',
    readingTime: 8,
    intro: 'An arithmetic progression adds a fixed $d$ while a geometric progression multiplies by a fixed $r$. Their $n$-th terms and sums $S_n$ answer almost every finite-series question once $a$, $d$ and $r$ are identified. This section locks the four formulae and their mean insertions.',
    objectives: [
      'Write $a_n = a + (n-1)d$ and $S_n = \\frac{n}{2}(2a + (n-1)d)$ for AP and $a_n = ar^{n-1}$ with geometric sums',
      'Insert $k$ arithmetic or geometric means and recover $d$ or $r$ from endpoints',
      'Solve mixed AP-GP conditions via $S_n$, $a_n$ and common-difference-ratio systems'
    ],
    concepts: [
      {
        term: 'AP term and sum',
        kind: 'theorem',
        statement: 'An AP has **$a_n = a + (n-1)d$** with `difference d` and sum $S_n = \\frac{n}{2}(2a + (n-1)d) = \\frac{n}{2}(a + l)$.',
        detail: 'Last-term form uses $l = a_n$. Differences of consecutive sums recover terms: $a_n = S_n - S_{n-1}$. Linear $S_n$ in $n^2$ characterises AP sequences.'
      },
      {
        term: 'GP term and finite sum',
        kind: 'theorem',
        statement: 'A GP has **$a_n = ar^{n-1}$** with `ratio r` and $S_n = a\\frac{1-r^n}{1-r} = a\\frac{r^n-1}{r-1}$ for $r \\ne 1$.',
        detail: 'For $r = 1$ the sum is $na$. Derivation multiplies $S_n$ by $r$ and subtracts. Sign and magnitude of $r$ control alternation and growth.'
      },
      {
        term: 'Arithmetic means',
        kind: 'method',
        statement: 'Inserting $k$ means between $a$ and $b$ gives **$d = \\frac{b-a}{k+1}$** with `k + 2 terms total` and means $a+d, \\ldots, b-d$.',
        detail: 'Endpoints plus $k$ means form an AP of $k+2$ terms. Single mean between $a, b$ is $\\frac{a+b}{2}$, the familiar average.'
      },
      {
        term: 'Geometric means',
        kind: 'method',
        statement: 'Inserting $k$ means between $a$ and $b$ gives **$r^{k+1} = \\frac{b}{a}$** with `ratio power k+1` and means $ar, \\ldots, ar^k$.',
        detail: 'Single geometric mean of positive $a, b$ is $\\sqrt{ab}$. Real $r$ exists for odd $k+1$ always; for even $k+1$ it needs $\\frac{b}{a} > 0$.'
      },
      {
        term: 'AP-GP link trap',
        kind: 'insight',
        statement: 'Three numbers in both AP and GP must be **constant or zero-inclusive edge cases**: `equal numbers` is the only positive common triple.',
        detail: 'If $a-d, a, a+d$ are also geometric with positive terms, then $d = 0$. Mixed conditions usually force solving $2b = a+c$ together with $b^2 = ac$.'
      }
    ],
    examples: [
      {
        title: 'AP sum from endpoints',
        problem: 'Find the sum of the first $40$ terms of $3, 7, 11, \\ldots$.',
        steps: [
          { label: 'Step 1', text: '```text\na = 3, d = 4, n = 40; S = n/2 (2a + (n-1)d)\n```\nIdentify $a = 3$, $d = 4$, $n = 40$.' },
          { label: 'Step 2', text: 'Then $S_{40} = \\frac{40}{2}(6 + 39 \\cdot 4) = 20(6 + 156) = 20 \\cdot 162$.' },
          { label: 'Step 3', text: 'Product $20 \\cdot 162 = 3240$. Check last term $a_{40} = 3 + 39 \\cdot 4 = 159$, and $\\frac{40}{2}(3+159) = 3240$ agrees.' }
        ],
        result: '$S_{40} = 3240$.'
      },
      {
        title: 'GP means insertion',
        problem: 'Insert two geometric means between $4$ and $32$.',
        steps: [
          { label: 'Step 1', text: '```text\na = 4, a r^3 = 32  =>  r^3 = 8\n```\nFour terms $4, 4r, 4r^2, 32$ with $4r^3 = 32$.' },
          { label: 'Step 2', text: 'Thus $r^3 = 8$ and real $r = 2$. Means are $8$ and $16$.' },
          { label: 'Step 3', text: 'Sequence $4, 8, 16, 32$ has ratio $2$ throughout. Complex $r$ alternatives exist but real insertion is unique.' }
        ],
        result: 'Means $8$ and $16$.'
      }
    ],
    keyTakeaways: [
      'AP: $a_n = a+(n-1)d$ and $S_n = \\frac{n}{2}(2a+(n-1)d) = \\frac{n}{2}(a+l)$.',
      'GP: $a_n = ar^{n-1}$ and $S_n = a\\frac{1-r^n}{1-r}$ for $r \\ne 1$.',
      '$k$ arithmetic means use $d = \\frac{b-a}{k+1}$; geometric use $r^{k+1} = \\frac{b}{a}$.',
      'Mixed AP-GP triples solve $2b = a+c$ with $b^2 = ac$ together.'
    ],
    quiz: [
      {
        q: 'Tenth term of $5, 9, 13, \\ldots$ is',
        options: [`$37$`, `$41$`, `$45$`, `$36$`],
        answer: 1,
        explanation: 'Step 1: $a = 5$, $d = 4$. Step 2: $a_{10} = 5 + 9 \\cdot 4 = 41$. Step 3: Counting starts at $n = 1$, not $0$. Step 4: Value $37$ is the ninth term.'
      },
      {
        q: 'Sum $1 + 2 + \\cdots + 100$ equals',
        options: [`$5000$`, `$5050$`, `$5100$`, `$4950$`],
        answer: 1,
        explanation: 'Step 1: AP with $n = 100$, $a = 1$, $l = 100$. Step 2: $S = \\frac{100}{2}(101) = 5050$. Step 3: Pairing $k + (101-k)$ gives fifty $101$ pairs. Step 4: Value $5000$ is $50 \\times 100$ without the pairing offset.'
      },
      // PYQ-pattern: GP finite-sum evaluation
      {
        q: 'Sum $2 + 6 + 18 + \\cdots$ to $5$ terms equals',
        options: [`$242$`, `$240$`, `$244$`, `$182$`],
        answer: 0,
        explanation: 'Step 1: $a = 2$, $r = 3$, $n = 5$. Step 2: $S = 2\\frac{3^5-1}{2} = 3^5 - 1$. Step 3: $243 - 1 = 242$. Step 4: Partial sums $182$ stop at four terms.'
      },
      {
        q: 'Single geometric mean of $4$ and $16$ (positive) is',
        options: [`$10$`, `$8$`, `$6$`, `$12$`],
        answer: 1,
        explanation: 'Step 1: Mean $= \\sqrt{4 \\cdot 16}$. Step 2: Product $64$. Step 3: Root $8$. Step 4: Value $10$ is the arithmetic mean instead.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.2
  {
    sectionId: 'jeemaths-ch5-s2',
    readingTime: 8,
    intro: 'For positive numbers the chain $AM \\ge GM \\ge HM$ orders the three means with equality only at constancy. Harmonic progressions are arithmetic in reciprocal, so every HP question inverts first. This section applies the chain to minima, maxima and HP term recovery.',
    objectives: [
      'State $\\frac{a+b}{2} \\ge \\sqrt{ab} \\ge \\frac{2ab}{a+b}$ with equality at $a = b$',
      'Prove and use $AM \\ge GM$ for $n$ variables to bound sums and products',
      'Convert HP by $\\frac{1}{a_n}$ arithmetic and find $n$-th terms and means'
    ],
    concepts: [
      {
        term: 'Two-variable chain',
        kind: 'theorem',
        statement: 'For $a, b > 0$, **$AM \\ge GM \\ge HM$** with `AM = (a+b)/2`, $GM = \\sqrt{ab}$ and $HM = \\frac{2ab}{a+b}$.',
        detail: 'Proof from $(\\sqrt{a}-\\sqrt{b})^2 \\ge 0$ gives $AM \\ge GM$; applying it to $\\frac{1}{a}, \\frac{1}{b}$ gives $GM \\ge HM$. Equality throughout exactly when $a = b$.'
      },
      {
        term: 'General AM-GM',
        kind: 'theorem',
        statement: 'For $x_i > 0$, **$\\frac{\\sum x_i}{n} \\ge (\\prod x_i)^{1/n}$** with `equality at all equal`, the $n$-variable AM-GM.',
        detail: 'It bounds sums below by products and products above by sums. Weighted and rearranged forms extend it, but the equal-weights version handles most optimisation questions.'
      },
      {
        term: 'Optimization use',
        kind: 'method',
        statement: 'Fixed product minimises sum and fixed sum maximises product **at equality**: `all variables equal` is the extremal point.',
        detail: 'For instance with $x + y = 10$ fixed, $xy \\le 25$ at $x = y = 5$. With $xy = 36$ fixed, $x + y \\ge 12$. Positivity is essential; AM-GM never applies to mixed-sign data.'
      },
      {
        term: 'Harmonic progression',
        kind: 'definition',
        statement: 'Sequence $a_n$ is **HP iff `1/a_n` is AP**, so $a_n = \\frac{1}{A + (n-1)D}$ for reciprocal AP parameters.',
        detail: 'No closed $S_n$ exists for general HP; questions target terms, means or reciprocal sums. Single harmonic mean of $a, b$ is $\\frac{2ab}{a+b}$.'
      },
      {
        term: 'HM insertion',
        kind: 'method',
        statement: 'Insert harmonic means by **inverting to AP means then inverting back** with `reciprocal round-trip`.',
        detail: 'Between $a$ and $b$: invert to $\\frac{1}{a}, \\frac{1}{b}$, insert AP means with $D = \\frac{1/(b)-1/(a)}{k+1}$, then take reciprocals. Direct averaging of HP terms is meaningless.'
      }
    ],
    derivations: [
      {
        title: 'Two-Variable AM-GM Inequality from a Square',
        statement: 'Derivation of $\\frac{a+b}{2} \\ge \\sqrt{ab}$ for $a, b > 0$ with equality exactly when $a = b$',
        prerequisites: [
          'Square of any real number is nonnegative $t^{2} \\ge 0$',
          'Square roots preserve order for $a, b > 0$',
          'Equality case of a squared difference forces zero difference',
        ],
        steps: [
          {
            label: 'Step 1: Start from a nonnegative square',
            formula: '$$(\\sqrt{a} - \\sqrt{b})^{2} \\ge 0$$',
            explanation: 'Use the root difference $\\sqrt{a} - \\sqrt{b}$, which is real exactly because $a$ and $b$ are positive. This starting point works because every real square is nonnegative, giving a free true inequality. Positivity is essential here so the square roots exist as reals.',
          },
          {
            label: 'Step 2: Expand the square',
            formula: '$$a - 2\\sqrt{ab} + b \\ge 0$$',
            explanation: 'Expand with $(u-v)^{2} = u^{2} - 2uv + v^{2}$ and simplify $(\\sqrt{a})^{2} = a$ with $(\\sqrt{b})^{2} = b$. This works because the cross term $2\\sqrt{a}\\sqrt{b}$ equals $2\\sqrt{ab}$ for positive inputs. The inequality now links the sum $a+b$ to the product term $\\sqrt{ab}$.',
          },
          {
            label: 'Step 3: Rearrange into mean form',
            formula: '$$\\frac{a+b}{2} \\ge \\sqrt{ab}$$',
            explanation: 'Add $2\\sqrt{ab}$ to both sides and divide by $2$, both order-preserving moves for positive divisors. This works because adding equals and dividing by a positive constant keep the inequality direction. The left side is now the arithmetic mean and the right side the geometric mean.',
          },
          {
            label: 'Step 4: Read the equality condition',
            formula: '$$\\frac{a+b}{2} = \\sqrt{ab} \\iff a = b$$',
            explanation: 'Equality holds exactly when the opening square is zero, namely $\\sqrt{a} = \\sqrt{b}$. This works because a square vanishes only at zero, and squaring is injective on nonnegative inputs so $a = b$ follows. Hence the two means coincide only for constant pairs.',
          },
        ],
        result: 'For $a, b > 0$, $\\frac{a+b}{2} \\ge \\sqrt{ab}$ with equality only at $a = b$, meaning the arithmetic mean dominates the geometric mean except on constant pairs.',
      },
    ],
    examples: [
      {
        title: 'Minimum via AM-GM',
        problem: 'For $x > 0$, find the minimum of $x + \\frac{9}{x}$.',
        steps: [
          { label: 'Step 1', text: '```text\nAM >= GM on (x, 9/x): sum/2 >= sqrt(9) = 3\n```\nApply AM-GM to $x$ and $\\frac{9}{x}$: $\\frac{x + 9/x}{2} \\ge \\sqrt{x \\cdot \\frac{9}{x}} = 3$.' },
          { label: 'Step 2', text: 'Hence $x + \\frac{9}{x} \\ge 6$. Equality when $x = \\frac{9}{x}$, i.e. $x = 3 > 0$.' },
          { label: 'Step 3', text: 'Value at $x = 3$ is $3 + 3 = 6$, attaining the bound. For $x < 0$ the bound reverses and no such minimum exists.' }
        ],
        result: 'Minimum $6$ at $x = 3$.'
      },
      {
        title: 'HP term from reciprocal AP',
        problem: 'If $2, x, 8$ (in order) are in HP, find $x$.',
        steps: [
          { label: 'Step 1', text: '```text\n1/2, 1/x, 1/8 in AP  =>  2/x = 1/2 + 1/8\n```\nInvert: $\\frac{1}{2}, \\frac{1}{x}, \\frac{1}{8}$ in AP.' },
          { label: 'Step 2', text: 'Middle is average: $\\frac{2}{x} = \\frac{1}{2} + \\frac{1}{8} = \\frac{5}{8}$.' },
          { label: 'Step 3', text: 'Thus $x = \\frac{16}{5} = 3.2$. Check: reciprocals $0.5, 0.3125, 0.125$ differ by $-0.1875$ evenly.' }
        ],
        result: '$x = \\frac{16}{5}$.'
      }
    ],
    keyTakeaways: [
      '$AM \\ge GM \\ge HM$ for positives with equality exactly at $a = b$.',
      'Fixed sum maximises product and fixed product minimises sum at equal variables.',
      'HP inverts to AP: work with $\\frac{1}{a_n}$ for terms and means.',
      'AM-GM needs strict positivity; sign-mixed data invalidates every bound.'
    ],
    quiz: [
      {
        q: 'For $a, b > 0$ with $a \\ne b$, which holds?',
        options: [`$\\frac{a+b}{2} < \\sqrt{ab}$`, `$\\frac{a+b}{2} > \\sqrt{ab}$`, `$\\frac{a+b}{2} = \\sqrt{ab}$`, `$\\sqrt{ab} < 0$`],
        answer: 1,
        explanation: 'Step 1: $(\\sqrt{a}-\\sqrt{b})^2 > 0$ for distinct positives. Step 2: Expanding gives $a + b > 2\\sqrt{ab}$. Step 3: Halving yields strict $AM > GM$. Step 4: Equality needs $a = b$.'
      },
      // PYQ-pattern: AM-GM minimum-value optimisation
      {
        q: 'Minimum of $x + \\frac{4}{x}$ for $x > 0$ is',
        options: [`$2$`, `$4$`, `$8$`, `$1$`],
        answer: 1,
        explanation: 'Step 1: AM-GM gives $\\frac{x+4/x}{2} \\ge 2$. Step 2: Hence sum $\\ge 4$. Step 3: Equality at $x = 2$. Step 4: Value $2$ is the $GM$, not the sum.'
      },
      {
        q: 'If $6, x, 3$ are in HP, then $x$ equals',
        options: [`$4$`, `$\\frac{9}{2}$`, `$5$`, `$3$`],
        answer: 0,
        explanation: 'Step 1: Reciprocals $\\frac{1}{6}, \\frac{1}{x}, \\frac{1}{3}$ in AP. Step 2: So $\\frac{2}{x} = \\frac{1}{6}+\\frac{1}{3} = \\frac{1}{2}$. Step 3: Hence $x = 4$. Step 4: Direct average $4.5$ is the AP mean, not HP.'
      },
      {
        q: 'Harmonic mean of $2$ and $6$ is',
        options: [`$4$`, `$\\sqrt{12}$`, `$3$`, `$8$`],
        answer: 2,
        explanation: 'Step 1: Formula $HM = \\frac{2ab}{a+b}$. Step 2: Numerator $24$, denominator $8$. Step 3: Value $3$. Step 4: Options $4$ and $\\sqrt{12}$ are $AM$ and $GM$.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Sharp mean inequalities and equality cases',
        blocks: [
          {
            kind: 'theorem',
            body: 'For positive $x_{1}, \\ldots, x_{n}$ the **mean chain** states $HM \\le GM \\le AM \\le QM$, where $AM = (\\sum x_{i})/n$, $GM = (\\prod x_{i})^{1/n}$, $HM = n/(\\sum 1/x_{i})$ and $QM = (\\sqrt{\\sum x_{i}^{2}/n})$. Equality holds in any link exactly when all $x_{i}$ are equal. The weighted form $\\sum w_{i} x_{i} \\ge \\prod x_{i}^{w_{i}}$ for weights $w_{i} > 0$ summing to $1$ is sharp in the same constant case. Thus each mean is extremal: $AM$ is the smallest constant majorant stable under averaging, while $GM$ is the largest geometric minorant.'
          },
          {
            kind: 'proof',
            body: 'Concavity of $\\log$ gives the weighted AM GM inequality by Jensen: $\\log(\\sum w_{i} x_{i}) \\ge \\sum w_{i} \\log x_{i} = \\log(\\prod x_{i}^{w_{i}})$, with strict inequality unless all $x_{i}$ with positive weight coincide, since $\\log$ is strictly concave. The HM GM link follows by applying AM GM to the reciprocals $1/x_{i}$. The AM QM link is Cauchy Schwarz applied to $(1,\\ldots,1)$ and $(x_{1},\\ldots,x_{n})$. Equality analysis in each step needs constancy, so the full chain collapses to equality only for constant lists, which is why extremal problems resolve at symmetry.'
          },
          {
            kind: 'example',
            heading: 'Fixed product forces minimal sum at constancy',
            body: 'Fix $xy = 12$ with $x > 0$ and $y > 0$ and minimize $x + y$. AM GM gives $(x+y)/2 \\ge \\sqrt{xy} = \\sqrt{12}$, so $x + y \\ge 2\\sqrt{12}$ with equality at $x = y = \\sqrt{12}$. Any asymmetric pair such as $x = 2$ and $y = 6$ gives sum $8 > 2\\sqrt{12}$, strictly larger. The harmonic mean $2xy/(x+y)$ is then maximized at the same constant point, illustrating the duality that constancy simultaneously minimizes the arithmetic side and maximizes the harmonic side under a fixed geometric mean.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 5.3
  {
    sectionId: 'jeemaths-ch5-s3',
    readingTime: 9,
    intro: 'Sums of $k$, $k^2$ and $k^3$ have closed polynomial forms that evaluate any polynomial series by linearity. When terms are differences $f(k+1) - f(k)$, the sum telescopes to endpoints. This section pairs power-sum formulae with difference recognition.',
    objectives: [
      'Quote $\\sum k = \\frac{n(n+1)}{2}$, $\\sum k^2 = \\frac{n(n+1)(2n+1)}{6}$ and $\\sum k^3 = [\\frac{n(n+1)}{2}]^2$',
      'Reduce polynomial sums by expanding $(ak^2+bk+c)$ and summing piece by piece',
      'Collapse telescoping forms via partial fractions and rationalization'
    ],
    concepts: [
      {
        term: 'Power sums',
        kind: 'theorem',
        statement: 'Standard sums are **$\\sum k$, $\\sum k^2$, $\\sum k^3$** with `closed polynomials`: $\\frac{n(n+1)}{2}$, $\\frac{n(n+1)(2n+1)}{6}$ and $[\\frac{n(n+1)}{2}]^2$.',
        detail: 'They follow by induction or hockey-stick identities. Every polynomial sum $\\sum (ak^2+bk+c)$ is a linear combination of these three plus $n$.'
      },
      {
        term: 'Polynomial reduction',
        kind: 'method',
        statement: 'Expand first, then **sum piece by piece** with `linearity of Sigma`: $\\sum (2k^2+3k+1) = 2\\sum k^2 + 3\\sum k + n$.',
        detail: 'Products like $k(k+1)$ must be expanded to $k^2+k$ before the formulae apply. Forgetting the $+n$ from constant terms undercounts by $n$.'
      },
      {
        term: 'Telescoping difference',
        kind: 'method',
        statement: 'If $t_k = $ **$f(k+1) - f(k)$** with `difference form`, then $\\sum_{k=1}^n t_k = f(n+1) - f(1)$.',
        detail: 'Interior values cancel pairwise. Recognising $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$ and $\\sqrt{k+1}-\\sqrt{k}$ rationalizations are the core moves.'
      },
      {
        term: 'Partial-fraction split',
        kind: 'method',
        statement: 'Write **$\\frac{1}{(ak+b)(ak+c)}$** with `split into A/(ak+b) + B/(ak+c)` to expose telescoping after scaling.',
        detail: 'For gap $d = c - b$: $\\frac{1}{(ak+b)(ak+b+d)} = \\frac{1}{d}(\\frac{1}{ak+b} - \\frac{1}{ak+b+d})$. The outer $\\frac{1}{d}$ must not be dropped.'
      },
      {
        term: 'Shift-index check',
        kind: 'insight',
        statement: 'Telescoping bounds are **$f(n+1) - f(1)$** with `upper shifted by one`: off-by-one endpoints are the frequent slip.',
        detail: 'Write two rows (first three and last three terms) to confirm which $f$ values survive. Starting index $k = 0$ instead shifts to $f(n+1) - f(0)$.'
      }
    ],
    examples: [
      {
        title: 'Polynomial sum',
        problem: 'Compute $\\sum_{k=1}^{n} k(k+1)$.',
        steps: [
          { label: 'Step 1', text: '```text\nk(k+1) = k^2 + k; sum = sum k^2 + sum k\n```\nExpand $k(k+1) = k^2 + k$.' },
          { label: 'Step 2', text: 'Apply forms: $\\sum k^2 = \\frac{n(n+1)(2n+1)}{6}$ and $\\sum k = \\frac{n(n+1)}{2}$. Sum is $\\frac{n(n+1)(2n+1)}{6} + \\frac{n(n+1)}{2}$.' },
          { label: 'Step 3', text: 'Factor $\\frac{n(n+1)}{6}$: $\\frac{n(n+1)}{6}(2n+1+3) = \\frac{n(n+1)(n+2)}{3}$. Check $n = 1$: $\\frac{6}{3} = 2 = 1 \\cdot 2$.' }
        ],
        result: '$\\frac{n(n+1)(n+2)}{3}$.'
      },
      {
        title: 'Telescoping fraction sum',
        problem: 'Compute $\\sum_{k=1}^{n} \\frac{1}{k(k+1)}$.',
        steps: [
          { label: 'Step 1', text: '```text\n1/(k(k+1)) = 1/k - 1/(k+1); write S = (1 - 1/2) + ...\n```\nSplit $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$.' },
          { label: 'Step 2', text: 'Sum: $(1-\\frac{1}{2}) + (\\frac{1}{2}-\\frac{1}{3}) + \\cdots + (\\frac{1}{n}-\\frac{1}{n+1})$. All interior fractions cancel.' },
          { label: 'Step 3', text: 'Survivors $1 - \\frac{1}{n+1} = \\frac{n}{n+1}$. Limit as $n \\to \\infty$ is $1$, consistent with tail decay.' }
        ],
        result: '$\\frac{n}{n+1}$ with infinite sum $1$.'
      }
    ],
    keyTakeaways: [
      'Memorise $\\sum k$, $\\sum k^2$, $\\sum k^3$ and combine linearly for polynomial series.',
      'Expand products to powers before applying power sums; include the constant $n$ term.',
      'Telescoping needs $f(k+1)-f(k)$ form: partial fractions and rationalization expose it.',
      'Verify surviving endpoints by writing head and tail rows to fix off-by-one slips.'
    ],
    quiz: [
      {
        q: '$\\sum_{k=1}^{n} k$ equals',
        options: [`$\\frac{n(n+1)}{2}$`, `$\\frac{n^2+1}{2}$`, `$n(n+1)$`, `$\\frac{n(n-1)}{2}$`],
        answer: 0,
        explanation: 'Step 1: Pair $k$ with $n+1-k$. Step 2: Each pair sums to $n+1$. Step 3: With $\\frac{n}{2}$ pairs total $\\frac{n(n+1)}{2}$. Step 4: Missing half gives the third distractor.'
      },
      {
        q: '$\\sum_{k=1}^{10} k^2$ equals',
        options: [`$380$`, `$375$`, `$385$`, `$55$`],
        answer: 2,
        explanation: 'Step 1: Formula $\\frac{n(n+1)(2n+1)}{6}$. Step 2: Substitute $n = 10$: $\\frac{10 \\cdot 11 \\cdot 21}{6}$. Step 3: Compute $385$. Step 4: Value $55$ is $\\sum k$ instead.'
      },
      // PYQ-pattern: telescoping partial-fraction collapse
      {
        q: '$\\sum_{k=1}^{n} \\frac{1}{k(k+1)}$ equals',
        options: [`$\\frac{n-1}{n}$`, `$\\frac{n}{n+1}$`, `$\\frac{n+1}{n}$`, `$1$`],
        answer: 1,
        explanation: 'Step 1: Split as $\\frac{1}{k} - \\frac{1}{k+1}$. Step 2: Cancel interior terms. Step 3: Keep $1 - \\frac{1}{n+1} = \\frac{n}{n+1}$. Step 4: Value $1$ is the infinite limit, not the finite sum.'
      },
      {
        q: '$1^3 + 2^3 + \\cdots + n^3$ equals',
        options: [`$[\\frac{n(n+1)}{2}]^2$`, `$\\frac{n(n+1)(2n+1)}{6}$`, `$\\frac{n(n+1)}{2}$`, `$n^3$`],
        answer: 0,
        explanation: 'Step 1: Cube sum is the square of the linear sum. Step 2: Linear sum is $\\frac{n(n+1)}{2}$. Step 3: Squaring gives the result. Step 4: Option with $2n+1$ is the square sum instead.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.4
  {
    sectionId: 'jeemaths-ch5-s4',
    readingTime: 9,
    intro: 'An arithmetico-geometric series multiplies an AP by a GP termwise, and the multiply-subtract trick collapses its finite sum. Letting $n \\to \\infty$ with $|r| < 1$ kills the geometric tail and leaves a clean limit. This section handles both finite AGP sums and infinite tails.',
    objectives: [
      'Sum finite AGP $\\sum (a + (k-1)d)r^{k-1}$ by the $S - rS$ subtraction method',
      'Evaluate infinite AGP $\\frac{a}{1-r} + \\frac{dr}{(1-r)^2}$ for $|r| < 1$ and test convergence',
      'Sum infinite GP tails $\\frac{a}{1-r}$ and diagnose divergence for $|r| \\ge 1$'
    ],
    concepts: [
      {
        term: 'AGP form',
        kind: 'definition',
        statement: 'An AGP term is **$(a+(k-1)d)r^{k-1}$** with `AP times GP`: arithmetic part $a+(k-1)d$ times geometric $r^{k-1}$.',
        detail: 'Pure AP is $r = 1$; pure GP is $d = 0$. Recognising the product structure selects the subtraction method over plain AP or GP formulae.'
      },
      {
        term: 'Finite AGP sum',
        kind: 'method',
        statement: 'Compute **$S - rS$** with `shift and subtract`: $rS_n$ shifts indices so AP parts difference to constant $d$.',
        detail: 'Steps: write $S_n$, write $rS_n$ aligned one place right, subtract to get a GP plus boundary terms, then divide by $1-r$. For $r = 1$ the series is plain AP instead.'
      },
      {
        term: 'Infinite AGP sum',
        kind: 'theorem',
        statement: 'For **$|r| < 1$**, `infinite AGP` sums to $S_\\infty = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2}$.',
        detail: 'Boundary terms $nr^n$ vanish as $n \\to \\infty$ exactly when $|r| < 1$. The first fraction is the GP part; the second is the AP-drift contribution.'
      },
      {
        term: 'Infinite GP and convergence',
        kind: 'theorem',
        statement: 'Infinite GP converges iff **$|r| < 1$** with `ratio magnitude below 1`, to $S_\\infty = \\frac{a}{1-r}$.',
        detail: 'If $|r| \\ge 1$ with $a \\ne 0$, terms do not tend to $0$ and the series diverges (oscillating for $r = -1$). Always check $|r| < 1$ before quoting a limit.'
      },
      {
        term: 'Remainder tail bound',
        kind: 'insight',
        statement: 'Truncation error after $n$ terms behaves like **$nr^n$** with `linear times geometric`: geometric decay dominates eventually.',
        detail: 'Hence $|r|$ closer to $1$ converges slower. This estimate justifies dropping $n^kr^n$ boundary terms in the infinite limit.'
      }
    ],
    examples: [
      {
        title: 'Infinite AGP evaluation',
        problem: 'Compute $1 + 2x + 3x^2 + \\cdots$ to infinity for $|x| < 1$, then at $x = \\frac{1}{2}$.',
        steps: [
          { label: 'Step 1', text: '```text\nS = 1 + 2x + 3x^2 + ...; xS = x + 2x^2 + ...; S - xS = 1 + x + ...\n```\nLet $S = \\sum_{k\\ge1} kx^{k-1}$. Then $xS = \\sum_{k\\ge1} kx^k$.' },
          { label: 'Step 2', text: 'Subtract: $S - xS = 1 + x + x^2 + \\cdots = \\frac{1}{1-x}$ for $|x| < 1$. Hence $S = \\frac{1}{(1-x)^2}$.' },
          { label: 'Step 3', text: 'At $x = \\frac{1}{2}$: $S = \\frac{1}{(1/2)^2} = 4$. Partial sums $1, 2, 2.75$ rise toward $4$ as expected.' }
        ],
        result: '$S = \\frac{1}{(1-x)^2}$ for $|x| < 1$; value $4$ at $x = \\frac{1}{2}$.'
      },
      {
        title: 'Convergence diagnosis',
        problem: 'Decide convergence of $3 + 6 + 12 + \\cdots$ and $4 - 2 + 1 - \\frac{1}{2} + \\cdots$.',
        steps: [
          { label: 'Step 1', text: '```text\nfirst GP r = 2 (|r| >= 1 diverge); second GP r = -1/2 (|r| < 1 converge)\n```\nFirst has $a = 3$, $r = 2$ with $|r| = 2 \\ge 1$.' },
          { label: 'Step 2', text: 'Terms grow, so the first diverges (partial sums $3, 9, 21$). No finite limit exists.' },
          { label: 'Step 3', text: 'Second has $a = 4$, $r = -\\frac{1}{2}$ with $|r| < 1$, so $S = \\frac{4}{1+1/2} = \\frac{8}{3}$. Alternation is fine since magnitude decays.' }
        ],
        result: 'First diverges; second converges to $\\frac{8}{3}$.'
      }
    ],
    keyTakeaways: [
      'AGP $(a+(k-1)d)r^{k-1}$ sums by $S - rS$ shift-subtract, not by AP or GP alone.',
      'Infinite AGP for $|r| < 1$ is $\\frac{a}{1-r} + \\frac{dr}{(1-r)^2}$.',
      'Infinite GP is $\\frac{a}{1-r}$ exactly when $|r| < 1$; otherwise it diverges.',
      'Tail terms like $nr^n \\to 0$ only under $|r| < 1$; check magnitude first.'
    ],
    quiz: [
      {
        q: '$1 + 2x + 3x^2 + \\cdots$ to infinity ($|x| < 1$) sums to',
        options: [`$\\frac{1}{1-x}$`, `$\\frac{1}{(1-x)^2}$`, `$\\frac{x}{(1-x)^2}$`, `$1 + x$`],
        answer: 1,
        explanation: 'Step 1: $S - xS = 1 + x + x^2 + \\cdots$. Step 2: Right side is $\\frac{1}{1-x}$. Step 3: Divide to $S = \\frac{1}{(1-x)^2}$. Step 4: Single power suits plain GP, not AGP.'
      },
      {
        q: 'Infinite sum $1 + \\frac{1}{2} + \\frac{1}{4} + \\cdots$ equals',
        options: [`$1$`, `$\\frac{3}{2}$`, `$2$`, `$\\infty$`],
        answer: 2,
        explanation: 'Step 1: GP with $a = 1$, $r = \\frac{1}{2}$. Step 2: $|r| < 1$ so $S = \\frac{1}{1-1/2}$. Step 3: Value $2$. Step 4: Partial sums $1, 1.5, 1.75$ approach it.'
      },
      // PYQ-pattern: infinite-GP convergence check
      {
        q: '$2 + 4 + 8 + \\cdots$ to infinity',
        options: [`$\\text{diverges}$`, `$\\text{converges to } 2$`, `$\\text{converges to } 1$`, `$\\text{converges to } 0$`],
        answer: 0,
        explanation: 'Step 1: Ratio $r = 2$. Step 2: $|r| = 2 \\ge 1$. Step 3: Terms do not tend to zero. Step 4: Hence no finite sum exists.'
      },
      {
        q: 'For $|r| < 1$, $a + (a+d)r + (a+2d)r^2 + \\cdots$ to infinity equals',
        options: [`$\\frac{a}{1-r}$`, `$\\frac{a}{1-r} + \\frac{dr}{(1-r)^2}$`, `$\\frac{a+dr}{1-r}$`, `$a + dr$`],
        answer: 1,
        explanation: 'Step 1: Split into GP part and drift part. Step 2: GP contributes $\\frac{a}{1-r}$. Step 3: Arithmetic drift contributes $\\frac{dr}{(1-r)^2}$. Step 4: Omitting the squared denominator misses the drift accumulation.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Arithmetico-geometric summation and analytic tails',
        blocks: [
          {
            kind: 'derivation',
            body: 'Let $S_{n} = \\sum_{k=0}^{n-1} (a + kd) r^{k}$ with $r \\ne 1$. Subtracting $rS_{n}$ telescopes the arithmetic drift: $S_{n} - rS_{n} = a + dr(1 + r + \\cdots + r^{n-2}) - (a + (n-1)d)r^{n} + dr^{n-1}$ after alignment, which simplifies via the geometric sum to $S_{n} = (a/(1-r)) + dr(1 - r^{n-1})/((1-r)^{2}) - (a + (n-1)d)r^{n}/(1-r)$. For $|r| < 1$ the terms $r^{n}$ and $nr^{n}$ tend to $0$, leaving the sharp infinite sum $S = a/(1-r) + dr/((1-r)^{2})$. The squared denominator records accumulated drift, and the formula is best possible since termwise limits cannot be improved.'
          },
          {
            kind: 'remark',
            body: 'Differentiating $\\sum_{k \\ge 0} r^{k} = 1/(1-r)$ termwise for $|r| < 1$ gives $\\sum_{k \\ge 1} k r^{k-1} = 1/((1-r)^{2})$, so arithmetico geometric series are derivatives of geometric series. This analytic viewpoint explains convergence: inside the disc $|r| < 1$ summation and differentiation commute, while at $|r| \\ge 1$ terms fail to vanish and no sum exists. The extremal tail behavior $nr^{n} \\to 0$ for $|r| < 1$ versus divergence otherwise marks the unit circle as the natural boundary, a first glimpse of radius of convergence in analysis.'
          },
          {
            kind: 'example',
            heading: 'Summing a linear times geometric tail',
            body: 'Evaluate $T = \\sum_{k \\ge 1} k (1/2)^{k-1}$. Recognize $k$ as arithmetic with $d = 1$ and ratio $r = 1/2$, so the derivative identity gives $T = 1/((1-1/2)^{2}) = 4$. Truncating after $n$ terms leaves error $(n+1)(1/2)^{n-1} + n(1/2)^{n}$ up to constants, which decays geometrically and is sharp. By contrast $\\sum k 2^{k-1}$ diverges since $|r| = 2 \\ge 1$ and terms grow without bound. Thus the single condition $|r| < 1$ separates summable drift from explosive growth.'
          }
        ]
      }
    ]
  }
]
