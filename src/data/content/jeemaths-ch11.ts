import type { SectionContent } from '../library'

// ============================================================================
// Higher Algebra companion — Chapter 11: Theory of Equations
// Hall and Knight Chapters XXXIV-XXXV: Vieta, transformations, Descartes rule.
// ============================================================================

export const jeemathsCh11Content: SectionContent[] = [
  // ---------------------------------------------------------------- 11.1
  {
    sectionId: 'jeemaths-ch11-s1',
    readingTime: 9,
    intro: 'A polynomial of degree $n$ carries exactly $n$ roots when counted with multiplicity over the complex numbers, so coefficients and roots constrain each other tightly. Vieta relations turn those constraints into symmetric sums that can be read directly from coefficients. This section builds Vieta in full generality with power sums and the remainder factor toolkit.',
    objectives: [
      'State degree plus root count with multiplicity and apply remainder factor relations',
      'Write Vieta sums for quadratics, cubics and general degree $n$ from coefficients',
      'Evaluate symmetric and power sums such as $\\alpha^2 + \\beta^2 + \\gamma^2$ without solving'
    ],
    concepts: [
      {
        term: 'Degree and root count',
        kind: 'definition',
        statement: 'A **degree $n$ polynomial** `degree-n` $P(x) = a_{n}x^{n} + a_{n-1}x^{n-1} + \\cdots + a_{0}$ with $a_{n} \\ne 0$ has exactly $n$ complex roots counted with multiplicity.',
        detail: 'If $r$ is a root then $(x-r)$ is a factor, and repeated division gives $P(x) = a_{n}(x-r_{1})\\cdots(x-r_{n})$. A real polynomial of odd degree has at least one real root since complex roots occur in conjugate pairs.'
      },
      {
        term: 'Remainder and factor theorems',
        kind: 'theorem',
        statement: 'The **remainder theorem** `remainder-theorem` says $P$ divided by $(x-a)$ leaves remainder $P(a)$, so $(x-a)$ is a factor exactly when $P(a) = 0$.',
        detail: 'Synthetic division by detached coefficients gives quotient plus remainder in one row. The test $P(a) = 0$ is the practical way to discover linear factors before attempting Vieta or transformations.'
      },
      {
        term: 'Vieta for quadratics and cubics',
        kind: 'theorem',
        statement: 'For **Vieta sums** `vieta-sums` $ax^2+bx+c = 0$ gives $\\alpha+\\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$, while $ax^3+bx^2+cx+d = 0$ gives $\\sum\\alpha = -\\frac{b}{a}$ and $\\sum\\alpha\\beta = \\frac{c}{a}$ with $\\alpha\\beta\\gamma = -\\frac{d}{a}$.',
        detail: 'Signs alternate with $(-1)^{k}$. For the cubic, $\\alpha+\\beta+\\gamma$ uses $-b$ over $a$, pairwise sum uses $+c$ over $a$, and product uses $-d$ over $a$. These three relations solve many root framing tasks without finding roots.'
      },
      {
        term: 'Elementary symmetric sums',
        kind: 'notation',
        statement: 'The **elementary symmetric sums** `symmetric-sums` $e_{1} = \\sum r_{i}$ and $e_{2} = \\sum_{i<j} r_{i}r_{j}$ continue to $e_{n} = r_{1}\\cdots r_{n}$ with $e_{k} = (-1)^{k}\\frac{a_{n-k}}{a_{n}}$.',
        detail: 'Every symmetric polynomial in roots can be expressed through $e_{1}, \\ldots, e_{n}$. Standard conversions include $\\sum r_{i}^{2} = e_{1}^{2} - 2e_{2}$ and $\\sum r_{i}^{3} = e_{1}^{3} - 3e_{1}e_{2} + 3e_{3}$ for three variables.'
      },
      {
        term: 'Power sums preview',
        kind: 'method',
        statement: 'The **power sum method** `power-sum` $p_{k} = r_{1}^{k} + \\cdots + r_{n}^{k}$ obeys Newton recurrences linking $p_{k}$ to coefficients, starting with $p_{1} - e_{1} = 0$ for monic quadratics.',
        detail: 'For a monic cubic $x^3 + bx^2 + cx + d$, the first recurrences are $p_{1} + b = 0$ and $p_{2} + bp_{1} + 2c = 0$. This computes sums of squares and cubes directly from $b, c, d$ with no root finding.'
      }
    ],
    figures: [
      {
        caption: 'A cubic $y = P(x)$ with three real zeros $r_{1} < r_{2} < r_{3}$; Vieta sums $e_{1}$, $e_{2}$, $e_{3}$ are read from the coefficients while the graph shows sign changes across each simple root.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Cubic curve crossing the horizontal axis at three marked roots"><line x1="60" y1="300" x2="700" y2="300" stroke="currentColor" stroke-width="1.5"/><polygon points="710,300 698,295.5 698,304.5" fill="currentColor"/><line x1="80" y1="320" x2="80" y2="40" stroke="currentColor" stroke-width="1.5"/><polygon points="80,30 75.5,42 84.5,42" fill="currentColor"/><path d="M100,120 C220,140 260,260 340,265 C420,270 460,120 620,100" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="210" cy="213" r="4" fill="currentColor"/><circle cx="340" cy="265" r="4" fill="currentColor"/><circle cx="500" cy="178" r="4" fill="currentColor"/><line x1="210" y1="213" x2="210" y2="300" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" opacity="0.6"/><line x1="340" y1="265" x2="340" y2="300" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" opacity="0.6"/><line x1="500" y1="178" x2="500" y2="300" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" opacity="0.6"/><text x="210" y="322" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">r1</text><text x="340" y="322" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">r2</text><text x="500" y="322" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">r3</text><text x="640" y="90" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">y equals P of x</text><text x="95" y="60" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">y</text><text x="690" y="322" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">x</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Vieta plus power sum for a cubic',
        problem: 'The cubic $x^3 - 6x^2 + 11x - 6 = 0$ has roots $\\alpha, \\beta, \\gamma$. Find $\\alpha+\\beta+\\gamma$, $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha$, $\\alpha\\beta\\gamma$ and $\\alpha^2+\\beta^2+\\gamma^2$.',
        steps: [
          { label: 'Step 1', text: 'Read Vieta directly:\n```text\nsum = 6, pair sum = 11, product = 6\n```\nHere $e_{1} = 6$ and $e_{2} = 11$ with $e_{3} = 6$ since signs are $-b$, $+c$, $-d$ for the monic form.' },
          { label: 'Step 2', text: 'Convert the power sum with $\\sum \\alpha^2 = e_{1}^{2} - 2e_{2} = 36 - 22 = 14$. No root needs to be found since symmetry does the work.' },
          { label: 'Step 3', text: 'Check against known roots $1$, $2$, $3$: sums are $6$ and $11$ with product $6$, while squares sum to $1 + 4 + 9 = 14$, confirming the algebra.' }
        ],
        result: '$\\sum\\alpha = 6$, $\\sum\\alpha\\beta = 11$, $\\alpha\\beta\\gamma = 6$ and $\\sum\\alpha^2 = 14$.'
      },
      {
        title: 'Framing an equation from symmetric data',
        problem: 'Form the monic cubic whose roots are the squares of the roots of $x^3 - 5x^2 + 6x - 1 = 0$.',
        steps: [
          { label: 'Step 1', text: 'Let roots be $r_{i}$ with $e_{1} = 5$ and $e_{2} = 6$ and $e_{3} = 1$. Wanted sums for $s_{i} = r_{i}^{2}$ are $\\sum s_{i} = e_{1}^{2}-2e_{2} = 25-12 = 13$.' },
          { label: 'Step 2', text: 'Pairwise product $\\sum s_{i}s_{j} = e_{2}^{2} - 2e_{1}e_{3} = 36 - 10 = 26$ and product $s_{1}s_{2}s_{3} = e_{3}^{2} = 1$ by squaring each relation.' },
          { label: 'Step 3', text: 'Hence the monic cubic in $y$ is $y^3 - 13y^2 + 26y - 1 = 0$, with each coefficient $(-1)^{k}$ times the matching symmetric sum.' }
        ],
        result: 'Required equation $y^3 - 13y^2 + 26y - 1 = 0$.'
      }
    ],
    keyTakeaways: [
      'Degree $n$ gives $n$ complex roots with multiplicity and factor form $a_{n}(x-r_{1})\\cdots(x-r_{n})$.',
      'Vieta reads $e_{k} = (-1)^{k}\\frac{a_{n-k}}{a_{n}}$ directly from coefficients.',
      'Symmetric sums reduce to $e_{k}$: $\\sum r_{i}^{2} = e_{1}^{2}-2e_{2}$ is the workhorse.',
      'Remainder test $P(a) = 0$ detects linear factors before symmetric machinery.'
    ],
    quiz: [
      {
        q: 'For $2x^2 + 5x + 2 = 0$ with roots $\\alpha, \\beta$, the sum $\\alpha+\\beta$ equals',
        options: [`$\\frac{5}{2}$`, `$-\\frac{5}{2}$`, `$1$`, `$-1$`],
        answer: 1,
        explanation: 'Step 1: Use $\\alpha+\\beta = -b$ over $a$. Step 2: Here $b = 5$ and $a = 2$. Step 3: Hence the sum is $-5$ over $2$. Step 4: The second option matches.'
      },
      {
        q: 'If $x^3 - 7x + 6 = 0$ has roots $\\alpha, \\beta, \\gamma$, then $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha$ equals',
        options: [`$7$`, `$-7$`, `$6$`, `$-6$`],
        answer: 1,
        explanation: 'Step 1: Missing $x^2$ means $b = 0$. Step 2: Pairwise sum equals $c$ over $a$. Step 3: Here $c = -7$. Step 4: Hence the value is $-7$, the second option.'
      },
      // PYQ-pattern: sum of squares via Vieta without solving
      {
        q: 'Roots of $x^2 - 4x + 1 = 0$ satisfy $\\alpha^2+\\beta^2$ equal to',
        options: [`$16$`, `$12$`, `$14$`, `$10$`],
        answer: 2,
        explanation: 'Step 1: Sum is $4$ and product is $1$. Step 2: Use $\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta$. Step 3: Compute $16 - 2 = 14$. Step 4: The third option matches.'
      },
      {
        q: 'A real polynomial of degree $5$ must have at least',
        options: ['no real root', 'one real root', 'five distinct roots', 'all roots equal'],
        answer: 1,
        explanation: 'Step 1: Complex roots occur in conjugate pairs. Step 2: Pairs consume an even count. Step 3: Odd degree $5$ leaves at least one unpaired root. Step 4: Hence at least one real root.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Vieta power sums and symmetric polynomials',
        blocks: [
          {
            kind: 'theorem',
            body: 'For monic $x^{n} - e_{1}x^{n-1} + e_{2}x^{n-2} - \\cdots + (-1)^{n}e_{n} = \\prod_{i=1}^{n}(x - r_{i})$ the **Vieta relations** state that $e_{k}$ is the sum of all products of $k$ distinct roots. Power sums $p_{k} = \\sum_{i} r_{i}^{k}$ then obey the Newton identities $p_{k} - e_{1}p_{k-1} + \\cdots + (-1)^{k-1}e_{k-1}p_{1} + (-1)^{k}ke_{k} = 0$ for $1 \\le k \\le n$. Every symmetric polynomial in the roots is uniquely a polynomial in $e_{1}, \\ldots, e_{n}$, so all symmetric root functions reduce to coefficients. The extremal case of equal roots makes all inequalities into equalities and marks multiple roots.'
          },
          {
            kind: 'proof',
            body: 'Expand $\\prod_{i}(x - r_{i})$ and collect powers of $x$; the coefficient of $x^{n-k}$ is $(-1)^{k}$ times the sum over $k$ element subsets, which is Vieta by definition. Differentiate $\\prod_{i}(x - r_{i})$ logarithmically to get $P^{\\prime}(x)/P(x) = \\sum_{i} 1/(x - r_{i})$, expand each fraction as $\\sum_{k \\ge 0} r_{i}^{k}/x^{k+1}$ for large $|x|$, and match coefficients with the expansion from the $e_{k}$ side to obtain Newton identities. The fundamental theorem follows by lexicographic induction: kill the leading monomial $r_{1}^{a_{1}} \\cdots r_{n}^{a_{n}}$ with a matching monomial in the $e_{k}$ and descend, terminating because exponents strictly decrease.'
          },
          {
            kind: 'example',
            heading: 'Quadratic power sum without solving',
            body: 'For $x^{2} - 4x + 1 = 0$ with roots $\\alpha$ and $\\beta$, Vieta gives $e_{1} = 4$ and $e_{2} = 1$. Newton with $k = 2$ reads $p_{2} - e_{1}p_{1} + 2e_{2} = 0$ with $p_{1} = e_{1} = 4$, hence $p_{2} = 16 - 2 = 14$, so $\\alpha^{2} + \\beta^{2} = 14$. Higher powers iterate the same recurrence: $p_{3} = e_{1}p_{2} - e_{2}p_{1} = 52$. Thus the full moment sequence of the roots flows from two coefficients, and the growth rate of $p_{k}$ is governed by the larger root, a first taste of root dominance in analysis.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 11.2
  {
    sectionId: 'jeemaths-ch11-s2',
    readingTime: 8,
    intro: 'Reciprocal equations read the same forwards and backwards, so roots pair as $r$ with $\\frac{1}{r}$ and the degree can be halved by a standard substitution. Shifting and scaling transformations reshape any polynomial while tracking how roots move. This section practises those classical reductions on cubics and quartics.',
    objectives: [
      'Recognise palindromic reciprocal forms and halve degree with $z = x + \\frac{1}{x}$',
      'Depress cubics by $x = y - \\frac{b}{3a}$ to remove the quadratic term',
      'Track root maps under $y = x-k$, $y = kx$ and reciprocal transforms'
    ],
    concepts: [
      {
        term: 'Reciprocal equation form',
        kind: 'definition',
        statement: 'A **reciprocal equation** `reciprocal-form` has coefficients reading the same forwards and backwards, so $a_{k} = a_{n-k}$ and roots occur in pairs $r$ with $\\frac{1}{r}$.',
        detail: 'If $r$ is a root then $\\frac{1}{r}$ is also a root, with the same multiplicity. Odd degree reciprocal equations always carry $x = 1$ or $x = -1$ as a root, which lowers the degree at once.'
      },
      {
        term: 'Halving by division',
        kind: 'method',
        statement: 'The **halving substitution** `halving-z` divides by the middle power $x^{2}$ and sets $z = x + \\frac{1}{x}$ to reduce a quartic reciprocal to a quadratic in $z$.',
        detail: 'Since $x^2 + \\frac{1}{x^2} = z^2 - 2$, each symmetric pair collapses to one $z$ value. Solve for $z$ first, then solve $x + \\frac{1}{x} = z$ which is $x^2 - zx + 1 = 0$.'
      },
      {
        term: 'Depressing the cubic',
        kind: 'method',
        statement: 'The shift **depresses the cubic** `depress-cubic` via $x = y - \\frac{b}{3a}$, removing the $y^2$ term and leaving $y^3 + py + q = 0$.',
        detail: 'The shift centres the polynomial at its point of symmetry. The reduced form exposes the discriminant $\\Delta = -(4p^3+27q^2)$ and prepares Cardano style solution.'
      },
      {
        term: 'Root transformation maps',
        kind: 'theorem',
        statement: 'Under **root maps** `root-maps` the equation for $y = x - k$ is $P(y+k) = 0$, for $y = kx$ it is $P(\\frac{y}{k}) = 0$, and for $y = \\frac{1}{x}$ it is $x^{n}P(\\frac{1}{x}) = 0$.',
        detail: 'Translation shifts every root by $k$ while scaling multiplies every root by $k$. The reciprocal map inverts every root, turning sums into harmonic style relations.'
      },
      {
        term: 'Rational root screen',
        kind: 'method',
        statement: 'A **rational root screen** `rational-screen` tests $\\frac{p}{q}$ with $p$ dividing $a_{0}$ and $q$ dividing $a_{n}$ for integer coefficient polynomials.',
        detail: 'List all factor pairs before dividing. Each confirmed root supplies a linear factor, and the remaining cofactor is then handled by Vieta or reciprocal reduction.'
      }
    ],
    figures: [
      {
        caption: 'Roots $r$ and $\\frac{1}{r}$ pair across the unit circle $|z| = 1$; reciprocal symmetry sends outer roots inside and inner roots outside while roots on the circle stay fixed as a set.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Unit circle with reciprocal root pairs inside and outside"><line x1="60" y1="180" x2="680" y2="180" stroke="currentColor" stroke-width="1.2"/><line x1="360" y1="30" x2="360" y2="330" stroke="currentColor" stroke-width="1.2"/><circle cx="360" cy="180" r="100" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="490" cy="120" r="4" fill="currentColor"/><circle cx="300" cy="205" r="4" fill="currentColor"/><circle cx="440" cy="250" r="4" fill="currentColor"/><circle cx="320" cy="155" r="4" fill="currentColor"/><line x1="360" y1="180" x2="490" y2="120" stroke="currentColor" stroke-width="1.1" stroke-dasharray="5 4" opacity="0.7"/><line x1="360" y1="180" x2="300" y2="205" stroke="currentColor" stroke-width="1.1" stroke-dasharray="5 4" opacity="0.7"/><text x="498" y="110" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">r</text><text x="272" y="222" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">1 over r</text><text x="470" y="200" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">unit circle</text><text x="360" y="342" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">real axis</text><text x="372" y="50" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">imaginary axis</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Halving a reciprocal quartic',
        problem: 'Solve $6x^4 + 5x^3 - 38x^2 + 5x + 6 = 0$ by reciprocal reduction.',
        steps: [
          { label: 'Step 1', text: 'Coefficients read $6, 5, -38, 5, 6$, so divide by $x^{2}$:\n```text\n6(z^2 - 2) + 5 z - 38 = 0 with z = x + 1 over x\n```\nThis uses $x^2 + \\frac{1}{x^2} = z^2 - 2$.' },
          { label: 'Step 2', text: 'Simplify to $6z^2 + 5z - 50 = 0$, giving $(3z+10)(2z-5) = 0$ so $z = -\\frac{10}{3}$ or $z = \\frac{5}{2}$.' },
          { label: 'Step 3', text: 'Solve $x + \\frac{1}{x} = z$ in each case: $2x^2 - 5x + 2 = 0$ gives $x = 2$ or $x = \\frac{1}{2}$, while $3x^2 + 10x + 3 = 0$ gives $x = -3$ or $x = -\\frac{1}{3}$.' }
        ],
        result: 'Roots $2$, $\\frac{1}{2}$, $-3$, $-\\frac{1}{3}$ in reciprocal pairs.'
      },
      {
        title: 'Depressing a cubic',
        problem: 'Remove the quadratic term from $x^3 + 9x^2 + 24x + 20 = 0$ and solve the depressed cubic.',
        steps: [
          { label: 'Step 1', text: 'Shift by $-b$ over $3a = -3$: set $x = y - 3$. Expansion gives $y^3 - 3y + 2 = 0$ with no $y^2$ term.' },
          { label: 'Step 2', text: 'Factor the depressed cubic as $(y-1)^2(y+2) = 0$, so $y = 1$ twice or $y = -2$.' },
          { label: 'Step 3', text: 'Shift back with $x = y-3$ to get $x = -2$ twice or $x = -5$, and check sums against Vieta $-9$.' }
        ],
        result: 'Depressed form $y^3 - 3y + 2 = 0$ with original roots $-2$ twice and $-5$.'
      }
    ],
    keyTakeaways: [
      'Palindromic coefficients imply $r$ pairs with $\\frac{1}{r}$ and allow halving.',
      'Division by $x^{2}$ plus $z = x+\\frac{1}{x}$ turns quartic reciprocal into quadratic.',
      'Shift $x = y-\\frac{b}{3a}$ depresses every cubic to $y^3+py+q = 0$.',
      'Maps $P(y+k)$, $P(\\frac{y}{k})$, $x^{n}P(\\frac{1}{x})$ track translated scaled inverted roots.'
    ],
    quiz: [
      {
        q: 'Which equation is reciprocal?',
        options: [`$x^4 + 2x^3 + 3x^2 + 4x + 5 = 0$`, `$6x^4 + 5x^3 - 38x^2 + 5x + 6 = 0$`, `$x^4 + x^3 + x + 1 = 0$`, `$x^3 + 2x^2 + 3x + 4 = 0$`],
        answer: 1,
        explanation: 'Step 1: Check symmetry $a_{k} = a_{n-k}$. Step 2: Only the second list reads $6, 5, -38, 5, 6$. Step 3: Outer and inner pairs match. Step 4: Hence the second option is reciprocal.'
      },
      // PYQ-pattern: reciprocal quartic halving substitution
      {
        q: 'For reciprocal $ax^4+bx^3+cx^2+bx+a = 0$ with $x \\ne 0$, the correct first step is',
        options: ['divide by $x$ and set $z = x^2$', 'divide by $x^{2}$ and set $z = x+\\frac{1}{x}$', 'set $x = y-\\frac{b}{4a}$ only', 'differentiate and set to zero'],
        answer: 1,
        explanation: 'Step 1: Symmetry centres on $x^{2}$. Step 2: Dividing gives $a(x^2+\\frac{1}{x^2}) + b(x+\\frac{1}{x}) + c = 0$. Step 3: Put $z = x+\\frac{1}{x}$. Step 4: This yields a quadratic in $z$.'
      },
      {
        q: 'To depress $x^3 + 6x^2 + 9x + 1 = 0$, substitute',
        options: [`$x = y+2$`, `$x = y-2$`, `$x = y+6$`, `$x = 3y$`],
        answer: 1,
        explanation: 'Step 1: Shift is $-b$ over $3a$. Step 2: Here $b = 6$ and $a = 1$. Step 3: Shift equals $-2$. Step 4: So $x = y-2$, the second option.'
      },
      {
        q: 'If $r$ is a root of a reciprocal equation, which is also a root?',
        options: [`$-r$`, `$r^{2}$`, `$\\frac{1}{r}$`, `$r+1$`],
        answer: 2,
        explanation: 'Step 1: Palindromic coefficients reverse the polynomial. Step 2: Reversal maps $r$ to $\\frac{1}{r}$. Step 3: Multiplicity is preserved. Step 4: Hence the third option holds.'
      }
    ]
  },
  // ---------------------------------------------------------------- 11.3
  {
    sectionId: 'jeemaths-ch11-s3',
    readingTime: 8,
    intro: 'Descartes rule of signs bounds the number of positive and negative real roots by counting sign changes in the coefficient sequence. Simple rational bounds then trap all real roots inside an explicit interval. This section turns those two tools into fast root isolation.',
    objectives: [
      'Count sign variations to bound positive and negative real roots',
      'Apply $1+M$ over $|a_{n}|$ style bounds to trap real roots',
      'Isolate roots by sign checks on intervals and integer screens'
    ],
    concepts: [
      {
        term: 'Sign variation count',
        kind: 'definition',
        statement: 'The **variation count** `variation-count` $V(P)$ is the number of sign changes between consecutive nonzero coefficients of $P$.',
        detail: 'Zero coefficients are skipped, so $x^4 - 3x^2 + x - 5$ has signs $+,-,+,-$ giving $V = 3$. Only the order of coefficients matters, not the size of exponents gaps.'
      },
      {
        term: 'Descartes rule of signs',
        kind: 'theorem',
        statement: 'The **Descartes bound** `descartes-bound` says the number of positive real roots counted with multiplicity equals $V(P)$ minus an even number, hence never exceeds $V(P)$.',
        detail: 'Apply to $P(-x)$ for negative roots. The gap $V - r$ is even because complex pairs remove two variations at a time. A count of $1$ forces exactly one positive root.'
      },
      {
        term: 'Cauchy root bound',
        kind: 'theorem',
        statement: 'Every **root bound** `cauchy-bound` $|x| < 1 + \\frac{M}{|a_{n}|}$ traps all zeros, where $M$ is the largest absolute value among the remaining coefficients.',
        detail: 'A cruder but instant bound is $1$ plus the ratio of the largest coefficient magnitude to $|a_{n}|$. All real and complex roots lie inside this disc, so integer screens need only run over this range.'
      },
      {
        term: 'Location by sign change',
        kind: 'method',
        statement: 'An **isolation interval** `isolation-interval` $(a,b)$ with $P(a)P(b) < 0$ must contain an odd number of real roots counting multiplicity.',
        detail: 'Continuity forces a crossing between opposite signs. Narrowing by bisection plus integer checks $P(k)$ separates distinct real roots before refining with further tests.'
      },
      {
        term: 'Multiplicity and touching',
        kind: 'insight',
        statement: 'Even multiplicity roots **touch without crossing** `touch-rule`, so they do not change the sign of $P$ and can hide from simple sign hunts.',
        detail: 'A double root keeps the same sign on both sides, while a triple root crosses like a simple root. Descartes counts multiplicity, so touching roots still consume the even gap.'
      }
    ],
    figures: [
      {
        caption: 'Sign chart for $P$ with $V = 2$: the graph can cross the positive axis twice, touch once with multiplicity two, or miss with a complex pair, matching the $2$ or $0$ count.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Three sign possibilities for variation count two"><line x1="60" y1="280" x2="700" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="120" y1="280" x2="120" y2="40" stroke="currentColor" stroke-width="1.1" opacity="0.6"/><line x1="360" y1="280" x2="360" y2="40" stroke="currentColor" stroke-width="1.1" opacity="0.6"/><line x1="580" y1="280" x2="580" y2="40" stroke="currentColor" stroke-width="1.1" opacity="0.6"/><path d="M40,120 C90,140 100,240 120,260 C140,280 150,200 200,180" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M280,200 C320,240 340,280 360,280 C380,280 400,240 440,200" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M500,160 C540,200 560,240 580,250 C600,260 620,240 660,200" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="120" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">two crossings</text><text x="360" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">one touch</text><text x="580" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">no crossing</text><text x="120" y="60" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">V equals 2</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Descartes count for a quartic',
        problem: 'Use Descartes rule on $P(x) = x^4 - 5x^3 + 6x^2 + 4x - 8$ to bound positive and negative real roots.',
        steps: [
          { label: 'Step 1', text: 'Signs of $P$ are $+,-,+,-,-$:\n```text\nchanges: + to - (1), - to + (2), + to - (3)\n```\nSkipping no zeros gives $V(P) = 3$, so positive roots are $3$ or $1$.' },
          { label: 'Step 2', text: 'Form $P(-x) = x^4 + 5x^3 + 6x^2 - 4x - 8$ with signs $+,+,+,-,-$, giving one change, so exactly one negative root.' },
          { label: 'Step 3', text: 'Total real roots are therefore $4$ or $2$: either three positive plus one negative, or one positive plus one negative with a complex pair.' }
        ],
        result: 'Positive count $3$ or $1$ with exactly one negative root.'
      },
      {
        title: 'Bounding and isolating integer roots',
        problem: 'Bound all roots of $x^3 - 4x^2 - 7x + 10 = 0$ and isolate them.',
        steps: [
          { label: 'Step 1', text: 'Cauchy bound gives $|x| < 1 + \\frac{10}{1} = 11$, so integer screening over $-10$ to $10$ is more than enough.' },
          { label: 'Step 2', text: 'Test divisors of $10$: $P(1) = 0$ and $P(5) = 0$ with $P(-2) = 0$, giving three linear factors.' },
          { label: 'Step 3', text: 'Hence $P(x) = (x-1)(x-5)(x+2)$ with isolation intervals $(0,2)$, $(4,6)$, $(-3,-1)$ each holding one root.' }
        ],
        result: 'Roots $1$, $5$, $-2$ inside $|x| < 11$.'
      }
    ],
    keyTakeaways: [
      'Variation count $V$ skips zero coefficients and caps positive roots.',
      'Positive roots equal $V$ minus an even number; $P(-x)$ handles negatives.',
      'Cauchy trap $|x| < 1+\\frac{M}{|a_{n}|}$ limits every search interval.',
      'Sign change $P(a)P(b) < 0$ forces an odd root count inside $(a,b)$.'
    ],
    quiz: [
      {
        q: 'For $P(x) = x^3 - 3x^2 + 2x - 1$, the variation count $V(P)$ is',
        options: [`$1$`, `$2$`, `$3$`, `$0$`],
        answer: 2,
        explanation: 'Step 1: Signs are $+,-,+,-$. Step 2: Count $+$ to $-$, $-$ to $+$, $+$ to $-$. Step 3: Total is $3$. Step 4: Hence the third option holds.'
      },
      {
        q: 'If $V(P) = 1$ then the number of positive real roots is',
        options: ['zero', 'exactly one', 'two or zero', 'three or one'],
        answer: 1,
        explanation: 'Step 1: Count equals $V$ minus an even number. Step 2: Only $1 - 0 = 1$ is possible. Step 3: Zero would need an odd gap. Step 4: Hence exactly one root.'
      },
      {
        q: 'For $x^4 + 3x^2 - 4x + 7$, a valid Cauchy bound is',
        options: [`$|x| < 4$`, `$|x| < 8$`, `$|x| < 12$`, `$|x| < 2$`],
        answer: 1,
        explanation: 'Step 1: Leading $|a_{n}| = 1$. Step 2: Largest other magnitude is $7$. Step 3: Bound is $1 + 7 = 8$. Step 4: So $|x| < 8$, the second option.'
      },
      // PYQ-pattern: Descartes negative root count via P(-x)
      {
        q: '$P(x) = x^3 + 2x^2 - 5x + 1$ has $P(-x)$ signs $-,+,-,-$. Negative roots are',
        options: ['two or zero', 'exactly one', 'three or one', 'zero only'],
        answer: 0,
        explanation: 'Step 1: Signs of $P(-x)$ are $-,+,-,-$. Step 2: Changes are $-$ to $+$ and $+$ to $-$, so $V = 2$. Step 3: Negative count is $2$ or $0$. Step 4: Hence the first option holds.'
      }
    ]
  },
  // ---------------------------------------------------------------- 11.4
  {
    sectionId: 'jeemaths-ch11-s4',
    readingTime: 9,
    intro: 'Cubics and quartics admit classical closed forms built from depressed equations and resolvent quadratics. The discriminant reads the root pattern at a glance without solving. This section surveys the Cardano and Ferrari ideas plus fast discriminant use.',
    objectives: [
      'Reduce cubics to $y^3+py+q = 0$ and state the Cardano expression',
      'Outline Ferrari reduction of quartics to a resolvent cubic',
      'Read real root patterns from cubic and biquadratic discriminants'
    ],
    concepts: [
      {
        term: 'Depressed cubic target',
        kind: 'definition',
        statement: 'Every cubic reduces to the **depressed form** `depressed-target` $y^3 + py + q = 0$ after the shift $x = y-\\frac{b}{3a}$.',
        detail: 'The two numbers $p$ and $q$ carry all shape information. The turning values and discriminant follow from $p$ and $q$ alone.'
      },
      {
        term: 'Cardano expression',
        kind: 'theorem',
        statement: 'The **Cardano formula** `cardano-form` gives $y = \\sqrt[3]{-\\frac{q}{2}+\\sqrt{D}} + \\sqrt[3]{-\\frac{q}{2}-\\sqrt{D}}$ with $D = (\\frac{q}{2})^2 + (\\frac{p}{3})^3$.',
        detail: 'The two cube roots must be chosen with product $-\\frac{p}{3}$. When $D < 0$ all three roots are real but the expression passes through complex numbers, the irreducible case.'
      },
      {
        term: 'Cubic discriminant reading',
        kind: 'theorem',
        statement: 'The **cubic discriminant** `cubic-disc` $\\Delta = -(4p^3+27q^2)$ gives three distinct real roots when $\\Delta > 0$, a multiple root when $\\Delta = 0$, and one real plus a pair when $\\Delta < 0$.',
        detail: 'For $ax^3+bx^2+cx+d$ the same sign test applies after depression. The zero case splits into double versus triple by checking whether $p = q = 0$.'
      },
      {
        term: 'Ferrari resolvent idea',
        kind: 'method',
        statement: 'The **Ferrari method** `ferrari-idea` completes the square on a depressed quartic to introduce a parameter whose correct value makes both sides perfect squares.',
        detail: 'That parameter satisfies a resolvent cubic. Solving the cubic supplies the completion, after which the quartic splits into two quadratics.'
      },
      {
        term: 'Biquadratic special form',
        kind: 'definition',
        statement: 'A **biquadratic** `biquadratic-form` $ax^4+bx^2+c = 0$ is quadratic in $u = x^2$, giving $x = \\pm\\sqrt{u}$ from each $u$ root.',
        detail: 'Signs of $u$ roots decide reality: two positive $u$ values give four real $x$ values, mixed signs give two real, and negative or complex $u$ values give fewer real $x$ values.'
      }
    ],
    figures: [
      {
        caption: 'Discriminant sign and the cubic graph: $\\Delta > 0$ shows two turns crossing three times, $\\Delta = 0$ touches once, and $\\Delta < 0$ climbs once.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Three cubic shapes for positive zero and negative discriminant"><line x1="40" y1="250" x2="700" y2="250" stroke="currentColor" stroke-width="1.4"/><path d="M60,120 C140,140 160,300 240,300 C320,300 340,200 420,200" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M460,180 C500,220 520,250 560,250 C600,250 620,220 660,180" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M480,120 C540,180 560,280 640,320" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="200" y="330" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">delta positive</text><text x="560" y="330" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">delta zero and negative</text><text x="400" y="60" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">three cubic patterns</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Cardano on a depressed cubic',
        problem: 'Solve $y^3 - 6y + 4 = 0$ by Cardano form and read the discriminant.',
        steps: [
          { label: 'Step 1', text: 'Here $p = -6$ and $q = 4$, so:\n```text\nD = (q over 2)^2 + (p over 3)^3 = 4 - 8 = -4\n```\nIn symbols $D = (\\frac{q}{2})^2 + (\\frac{p}{3})^3 = -4$.' },
          { label: 'Step 2', text: 'Cardano gives $y = \\sqrt[3]{-2+2i} + \\sqrt[3]{-2-2i}$ with paired cube roots, and $\\Delta = -(4p^3+27q^2) = 432 > 0$.' },
          { label: 'Step 3', text: 'Positive $\\Delta$ predicts three distinct real roots, which indeed are $2\\cos$ style values near $-2.7$, $0.7$, $2.0$ summing to $0$.' }
        ],
        result: 'Cardano form above with $\\Delta > 0$ giving three real roots.'
      },
      {
        title: 'Biquadratic plus resolvent reading',
        problem: 'Solve $x^4 - 5x^2 + 4 = 0$ and state how Ferrari would treat a full quartic.',
        steps: [
          { label: 'Step 1', text: 'Put $u = x^2$ to get $u^2 - 5u + 4 = 0$, so $u = 1$ or $u = 4$.' },
          { label: 'Step 2', text: 'Hence $x = \\pm 1$ or $x = \\pm 2$, four real roots from two positive $u$ values.' },
          { label: 'Step 3', text: 'A full quartic $x^4+bx^3+cx^2+dx+e$ would first depress to remove $x^3$, then complete squares with a resolvent cubic before splitting into quadratics.' }
        ],
        result: 'Roots $1, -1, 2, -2$; general quartics reduce via resolvent cubic.'
      }
    ],
    keyTakeaways: [
      'Depressed $y^3+py+q = 0$ is the gateway to every cubic formula.',
      'Cardano uses $D = (\\frac{q}{2})^2+(\\frac{p}{3})^3$ with paired cube roots.',
      'Sign of $\\Delta = -(4p^3+27q^2)$ classifies one versus three real roots.',
      'Ferrari turns quartics into a resolvent cubic plus two quadratics.'
    ],
    quiz: [
      {
        q: 'Depressed form of $x^3 + 3x^2 + 3x + 1 = 0$ is',
        options: [`$y^3 = 0$`, `$y^3 + 1 = 0$`, `$y^3 + 3y = 0$`, `$y^3 - 3y = 0$`],
        answer: 0,
        explanation: 'Step 1: Shift is $-b$ over $3a = -1$. Step 2: Put $x = y-1$. Step 3: Then $(y-1+1)^3 = y^3 = 0$. Step 4: Hence the first option holds.'
      },
      {
        q: 'If cubic discriminant $\\Delta > 0$ then roots are',
        options: ['one real plus complex pair', 'three distinct real', 'triple root', 'no roots'],
        answer: 1,
        explanation: 'Step 1: Positive discriminant means two distinct turns straddling the axis. Step 2: The graph must cross three times. Step 3: No multiple root occurs. Step 4: Hence three distinct real roots.'
      },
      // PYQ-pattern: biquadratic in x squared
      {
        q: 'Roots of $x^4 - 13x^2 + 36 = 0$ are',
        options: [`$\\pm 1, \\pm 2$`, `$\\pm 2, \\pm 3$`, `$\\pm 1, \\pm 6$`, `$\\pm 3, \\pm 4$`],
        answer: 1,
        explanation: 'Step 1: Put $u = x^2$. Step 2: Then $u^2-13u+36 = 0$. Step 3: Factor as $(u-4)(u-9) = 0$. Step 4: Hence $x = \\pm 2, \\pm 3$.'
      },
      {
        q: 'Ferrari resolvent for a quartic is a',
        options: ['linear equation', 'quadratic equation', 'cubic equation', 'quintic equation'],
        answer: 2,
        explanation: 'Step 1: Completion introduces one parameter. Step 2: Perfect square condition is cubic in that parameter. Step 3: Solving it unlocks the split. Step 4: Hence a cubic equation.'
      }
    ]
  }
]
