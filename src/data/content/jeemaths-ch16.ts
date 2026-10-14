import type { SectionContent } from '../library'

// ============================================================================
// Higher Algebra companion — Chapter 16: Inequalities Limits Convergence
// Hall and Knight Chapters XIX-XXI plus VII-VIII: classical bounds.
// ============================================================================

export const jeemathsCh16Content: SectionContent[] = [
  // ---------------------------------------------------------------- 16.1
  {
    sectionId: 'advmath-ch16-s1',
    readingTime: 9,
    intro: 'Classical inequalities order arithmetic, geometric and quadratic means and bound sums by Cauchy Schwarz forms. Chebyshev and rearrangement extend the same idea to similarly sorted lists. This section proves the chain with equality cases.',
    objectives: [
      'Prove $AM \\ge GM \\ge HM$ with equality exactly for equal variables',
      'Apply Cauchy Schwarz and Titu forms to sums and fractions',
      'Use Chebyshev plus rearrangement for sorted sequences'
    ],
    concepts: [
      {
        term: 'AM GM pair',
        kind: 'theorem',
        statement: 'For positives, the **AM GM bound** `am-gm` $\\frac{x+y}{2} \\ge \\sqrt{xy}$ holds with equality exactly when $x = y$.',
        detail: 'Proof from $(\\sqrt{x}-\\sqrt{y})^2 \\ge 0$ expands to $x+y-2\\sqrt{xy} \\ge 0$. Induction extends to $n$ variables with equality for all equal.'
      },
      {
        term: 'AM GM HM chain',
        kind: 'theorem',
        statement: 'Three means obey the **mean chain** `mean-chain` $\\frac{x+y}{2} \\ge \\sqrt{xy} \\ge \\frac{2}{\\frac{1}{x}+\\frac{1}{y}}$ for positive $x$ and $y$.',
        detail: 'Harmonic part follows by applying AM GM to reciprocals. For $n$ positives the chain extends with the same equality case of all variables equal.'
      },
      {
        term: 'Cauchy Schwarz form',
        kind: 'theorem',
        statement: 'Sums obey **Cauchy Schwarz** `cauchy-schwarz` $(a_{1}^{2}+a_{2}^{2})(b_{1}^{2}+b_{2}^{2}) \\ge (a_{1}b_{1}+a_{2}b_{2})^{2}$ with equality for proportional vectors.',
        detail: 'Proof from $\\sum(a_{i}t-b_{i})^{2} \\ge 0$ as a quadratic in $t$ with nonpositive discriminant. Titu form $\\sum\\frac{x_{i}^{2}}{y_{i}} \\ge \\frac{(\\sum x_{i})^{2}}{\\sum y_{i}}$ follows for $y_{i} > 0$.'
      },
      {
        term: 'Chebyshev sum bound',
        kind: 'theorem',
        statement: 'Similarly sorted lists satisfy **Chebyshev** `chebyshev-bound` $\\frac{1}{n}\\sum a_{i}b_{i} \\ge (\\frac{1}{n}\\sum a_{i})(\\frac{1}{n}\\sum b_{i})$.',
        detail: 'Opposite sorting reverses the sign. Proof averages $(a_{i}-a_{j})(b_{i}-b_{j}) \\ge 0$ over all pairs, which is nonnegative exactly for similar order.'
      },
      {
        term: 'Rearrangement maximum',
        kind: 'insight',
        statement: 'The **rearrangement rule** `rearrangement-rule` says similar sorting maximises $\\sum a_{i}b_{\\sigma(i)}$ while opposite sorting minimises it.',
        detail: 'Swapping two mismatched pairs increases the sum, so the maximum pairs largest with largest. This proves Chebyshev and many assignment bounds at once.'
      }
    ],
    figures: [
      {
        caption: 'Squares of side $x$ and $y$ with $\\sqrt{xy}$ geometric square between them; area comparison shows $\\frac{x+y}{2} \\ge \\sqrt{xy}$ with equality only for equal sides.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Area picture for AM GM"><rect x="100" y="120" width="100" height="100" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="220" y="140" width="60" height="80" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><rect x="300" y="120" width="80" height="100" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="245" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">x square</text><text x="250" y="245" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">mean</text><text x="340" y="245" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">y square</text><text x="360" y="80" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">AM GM areas</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'AM GM minimum',
        problem: 'For $x > 0$, find the minimum of $x+\\frac{9}{x}$ by AM GM.',
        steps: [
          { label: 'Step 1', text: 'Apply AM GM:\n```text\n(x + 9 over x) over 2 >= sqrt(9) = 3\n```\nIn symbols $\\frac{x+\\frac{9}{x}}{2} \\ge \\sqrt{9} = 3$.' },
          { label: 'Step 2', text: 'Hence $x+\\frac{9}{x} \\ge 6$ for all positive $x$.' },
          { label: 'Step 3', text: 'Equality when $x = \\frac{9}{x}$, so $x = 3$ gives the minimum $6$.' }
        ],
        result: 'Minimum $6$ at $x = 3$.'
      },
      {
        title: 'Cauchy sum bound',
        problem: 'Prove $(1+2+3)^{2} \\le 3(1+4+9)$ by Cauchy Schwarz.',
        steps: [
          { label: 'Step 1', text: 'Take $a = (1,1,1)$ and $b = (1,2,3)$ in $(\\sum a_{i}b_{i})^{2} \\le (\\sum a_{i}^{2})(\\sum b_{i}^{2})$.' },
          { label: 'Step 2', text: 'Left is $36$ while right is $3 \\cdot 14 = 42$, so $36 \\le 42$ holds.' },
          { label: 'Step 3', text: 'Equality would need $b$ proportional to $a$, which fails here, so the bound is strict.' }
        ],
        result: '$36 \\le 42$ confirming Cauchy with strict inequality.'
      }
    ],
    keyTakeaways: [
      '$\\frac{x+y}{2} \\ge \\sqrt{xy}$ from $(\\sqrt{x}-\\sqrt{y})^{2} \\ge 0$.',
      'Mean chain extends to $n$ variables with all equal case.',
      'Cauchy $(\\sum a_{i}^{2})(\\sum b_{i}^{2}) \\ge (\\sum a_{i}b_{i})^{2}$ handles sums.',
      'Similar sorting maximises pair sums; opposite minimises.'
    ],
    quiz: [
      {
        q: 'Minimum of $x+\\frac{4}{x}$ for $x > 0$ is',
        options: [`$2$`, `$4$`, `$8$`, `$1$`],
        answer: 1,
        explanation: 'Step 1: AM GM gives $\\frac{x+\\frac{4}{x}}{2} \\ge 2$. Step 2: Multiply to $x+\\frac{4}{x} \\ge 4$. Step 3: Equality at $x = 2$. Step 4: Hence minimum $4$.'
      },
      {
        q: 'Equality in AM GM holds when',
        options: ['variables are equal', 'one variable zero', 'variables differ', 'always strict'],
        answer: 0,
        explanation: 'Step 1: Proof uses $(\\sqrt{x}-\\sqrt{y})^{2} \\ge 0$. Step 2: Zero exactly when roots match. Step 3: Hence $x = y$. Step 4: So equal variables.'
      },
      // PYQ-pattern: Cauchy Titu form
      {
        q: '$\\frac{x^{2}}{1}+\\frac{y^{2}}{2} \\ge$ what by Titu',
        options: [`$\\frac{(x+y)^{2}}{3}$`, `$xy$`, `$0$ only`, `$x+y$`],
        answer: 0,
        explanation: 'Step 1: Titu gives $\\sum\\frac{x_{i}^{2}}{y_{i}} \\ge \\frac{(\\sum x_{i})^{2}}{\\sum y_{i}}$. Step 2: Here denominators sum to $3$. Step 3: Numerator is $(x+y)^{2}$. Step 4: Hence the first option holds.'
      },
      {
        q: 'Chebyshev needs sequences',
        options: ['similarly sorted', 'opposite always', 'random', 'constant only'],
        answer: 0,
        explanation: 'Step 1: Proof averages $(a_{i}-a_{j})(b_{i}-b_{j})$. Step 2: Nonnegative exactly for similar order. Step 3: Opposite order reverses sign. Step 4: Hence similarly sorted.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Cauchy Schwarz equality and extremal vectors',
        blocks: [
          {
            kind: 'theorem',
            body: 'For real $x_{i}$ and $y_{i}$ the **Cauchy Schwarz inequality** states $(\\sum x_{i}y_{i})^{2} \\le (\\sum x_{i}^{2})(\\sum y_{i}^{2})$ with equality exactly when the vectors are proportional. The Engel form known as Titu lemma gives $\\sum x_{i}^{2}/y_{i} \\ge (\\sum x_{i})^{2}/(\\sum y_{i})$ for $y_{i} > 0$, again sharp for proportional $x_{i}/y_{i}$. Quadratic mean dominates arithmetic mean as a corollary. Geometrically Cauchy Schwarz says $|\\cos\\theta| \\le 1$ for the angle between vectors, with extremal alignment at $\\theta = 0$ or $\\pi$.'
          },
          {
            kind: 'proof',
            body: 'Consider $f(t) = \\sum (x_{i} + ty_{i})^{2} \\ge 0$ as a quadratic in $t$. Its discriminant must be nonpositive, which is exactly Cauchy Schwarz. Equality needs $f(t) = 0$ for some $t$, forcing $x_{i} + ty_{i} = 0$ for all $i$, namely proportionality. Titu follows by setting $a_{i} = x_{i}/\\sqrt{y_{i}}$ and $b_{i} = \\sqrt{y_{i}}$ in Cauchy Schwarz, then dividing by $\\sum y_{i}$. The Chebyshev sum inequality for similarly sorted lists follows by averaging $(a_{i}-a_{j})(b_{i}-b_{j}) \\ge 0$ over all pairs, with reversal for oppositely sorted lists marking the extremal orderings.'
          },
          {
            kind: 'example',
            heading: 'Least squares line from orthogonal projection',
            body: 'Minimize $x^{2} + y^{2}$ subject to $x + y = s$. Cauchy Schwarz with vectors $(x,y)$ and $(1,1)$ gives $(x+y)^{2} \\le 2(x^{2}+y^{2})$, so $x^{2} + y^{2} \\ge s^{2}/2$ with equality at $x = y = s/2$ by proportionality. Titu gives the same bound as $x^{2}/1 + y^{2}/1 \\ge (x+y)^{2}/2$. The constant vector $(1,1)$ is the extremal direction: the minimum occurs where $(x,y)$ aligns with it. Any asymmetric split increases the sum of squares quadratically in the deviation, illustrating sharp stability of the equality case.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 16.2
  {
    sectionId: 'advmath-ch16-s2',
    readingTime: 9,
    intro: 'Limits of vanishing fractions are resolved by cancelling common factors, rationalising surds or applying standard forms. The exponential limit $(1+\\frac{1}{n})^{n} \\to e$ and sine limit $\\frac{\\sin x}{x} \\to 1$ anchor many evaluations. This section builds indeterminate form discipline.',
    objectives: [
      'Evaluate $\\frac{0}{0}$ forms by factor cancellation and rationalisation',
      'Apply $\\frac{\\sin x}{x} \\to 1$ and $(1+\\frac{1}{n})^{n} \\to e$ standards',
      'Use series expansion plus rule based checks for remaining forms'
    ],
    concepts: [
      {
        term: 'Limit definition',
        kind: 'definition',
        statement: 'A **limit** `limit-def` $\\lim_{x \\to a}f(x) = L$ means $f(x)$ can be made arbitrarily close to $L$ by taking $x$ close to $a$.',
        detail: 'The value at $a$ need not equal $L$; vanishing fractions lack values at $a$ but have limits by nearby values.'
      },
      {
        term: 'Cancellation method',
        kind: 'method',
        statement: 'Common factors **cancel first** `cancel-first` such as $\\frac{x^2-a^2}{x-a} = x+a \\to 2a$ as $x \\to a$.',
        detail: 'Factor numerator and denominator before substituting. Surd forms rationalise: multiply by conjugates to expose cancellable polynomial factors.'
      },
      {
        term: 'Sine standard limit',
        kind: 'theorem',
        statement: 'The **sine standard** `sine-standard` $\\lim_{x \\to 0}\\frac{\\sin x}{x} = 1$ in radians controls all small angle trig limits.',
        detail: 'Consequences include $\\frac{\\tan x}{x} \\to 1$ and $\\frac{1-\\cos x}{x^2} \\to \\frac{1}{2}$. Degrees would change the value, so radians are required.'
      },
      {
        term: 'Exponential standard',
        kind: 'theorem',
        statement: 'Growth is anchored by **exponential standards** `exp-standards` $\\lim_{n \\to \\infty}(1+\\frac{1}{n})^{n} = e$ and $\\lim_{x \\to 0}\\frac{e^{x}-1}{x} = 1$.',
        detail: 'Variants include $(1+x)^{\\frac{1}{x}} \\to e$ and $\\frac{\\log(1+x)}{x} \\to 1$. These resolve $1^{\\infty}$ and $\\frac{0}{0}$ exponential forms.'
      },
      {
        term: 'Series evaluation',
        kind: 'method',
        statement: 'Series expansion **resolves indeterminate** `series-resolve` $\\frac{\\sin x-x+\\frac{x^3}{6}}{x^5}$ style forms term by term without repeated differentiation.',
        detail: 'Expand numerator to the first nonzero power and read the ratio. This avoids differentiation chains and shows the rate at which the fraction vanishes.'
      }
    ],
    figures: [
      {
        caption: 'Pinched $\\frac{\\sin x}{x} \\to 1$: the curve $y = \\frac{\\sin x}{x}$ squeezes to $1$ between $y = 1$ and $y = \\cos x$ near $0$.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Squeeze picture for sine over x"><line x1="60" y1="250" x2="700" y2="250" stroke="currentColor" stroke-width="1.2"/><line x1="360" y1="250" x2="360" y2="40" stroke="currentColor" stroke-width="1.1"/><path d="M200,250 C280,250 320,150 360,140 C400,150 440,250 520,250" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="200" y1="140" x2="520" y2="140" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/><text x="530" y="130" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">y equals 1</text><text x="360" y="280" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">0</text><text x="440" y="220" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">pinched curve</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Rationalising a surd limit',
        problem: 'Evaluate $\\lim_{x \\to 0}\\frac{\\sqrt{1+x}-1}{x}$.',
        steps: [
          { label: 'Step 1', text: 'Multiply by conjugate:\n```text\n((sqrt(1+x)-1)(sqrt(1+x)+1)) over (x(sqrt(1+x)+1)) = x over (x(sqrt+1))\n```\nIn symbols $\\frac{x}{x(\\sqrt{1+x}+1)}$.' },
          { label: 'Step 2', text: 'Cancel $x$ to get $\\frac{1}{\\sqrt{1+x}+1}$ for $x \\ne 0$.' },
          { label: 'Step 3', text: 'Let $x \\to 0$ to get $\\frac{1}{2}$.' }
        ],
        result: 'Limit equals $\\frac{1}{2}$.'
      },
      {
        title: 'Exponential one to infinity',
        problem: 'Evaluate $\\lim_{n \\to \\infty}(1+\\frac{3}{n})^{n}$.',
        steps: [
          { label: 'Step 1', text: 'Write as $((1+\\frac{3}{n})^{\\frac{n}{3}})^{3}$ with inner base tending to $e$.' },
          { label: 'Step 2', text: 'Inner limit is $e$ by $(1+\\frac{1}{m})^{m} \\to e$ with $m = \\frac{n}{3}$.' },
          { label: 'Step 3', text: 'Outer power gives $e^{3}$ by continuity of cubing.' }
        ],
        result: 'Limit equals $e^{3}$.'
      }
    ],
    keyTakeaways: [
      'Cancel common factors before substituting $x = a$.',
      '$\\frac{\\sin x}{x} \\to 1$ needs radians and seeds trig limits.',
      '$(1+\\frac{1}{n})^{n} \\to e$ resolves $1^{\\infty}$ growth.',
      'Series to first nonzero term reads indeterminate ratios.'
    ],
    quiz: [
      {
        q: '$\\lim_{x \\to a}\\frac{x^{2}-a^{2}}{x-a}$ equals',
        options: [`$0$`, `$2a$`, `$a^{2}$`, 'does not exist'],
        answer: 1,
        explanation: 'Step 1: Factor numerator as $(x-a)(x+a)$. Step 2: Cancel $(x-a)$ for $x \\ne a$. Step 3: Remaining $x+a \\to 2a$. Step 4: Hence the second option holds.'
      },
      {
        q: '$\\lim_{x \\to 0}\\frac{\\sin 5x}{x}$ equals',
        options: [`$5$`, `$1$`, `$0$`, `$\\frac{1}{5}$`],
        answer: 0,
        explanation: 'Step 1: Write as $5\\cdot\\frac{\\sin 5x}{5x}$. Step 2: Inner ratio tends to $1$. Step 3: Multiply by $5$. Step 4: Hence $5$.'
      },
      // PYQ-pattern: exponential standard limit
      {
        q: '$\\lim_{n \\to \\infty}(1+\\frac{2}{n})^{n}$ equals',
        options: [`$e$`, `$e^{2}$`, `$1$`, `$0$`],
        answer: 1,
        explanation: 'Step 1: Set $m = \\frac{n}{2}$. Step 2: Base becomes $(1+\\frac{1}{m})^{2m}$. Step 3: Inner tends to $e$ squared. Step 4: Hence $e^{2}$.'
      },
      {
        q: '$\\lim_{x \\to 0}\\frac{1-\\cos x}{x^{2}}$ equals',
        options: [`$0$`, `$\\frac{1}{2}$`, `$1$`, `$2$`],
        answer: 1,
        explanation: 'Step 1: Use $1-\\cos x = 2\\sin^{2}\\frac{x}{2}$. Step 2: Ratio becomes $\\frac{1}{2}(\\frac{\\sin\\frac{x}{2}}{\\frac{x}{2}})^{2}$. Step 3: Inner tends to $1$. Step 4: Hence $\\frac{1}{2}$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 16.3
  {
    sectionId: 'advmath-ch16-s3',
    readingTime: 9,
    intro: 'Infinite series converge when partial sums settle, tested by comparison, ratio, root and integral tools. Borderline $p$ series $\\sum\\frac{1}{n^{p}}$ separate convergence from divergence. This section applies each test with boundary care.',
    objectives: [
      'Test with comparison and limit comparison against $p$ series',
      'Apply ratio and root tests with $1$ as inconclusive boundary',
      'Use integral test plus alternating remainder bounds'
    ],
    concepts: [
      {
        term: 'P series benchmark',
        kind: 'theorem',
        statement: 'The **p series** `p-series` $\\sum\\frac{1}{n^{p}}$ converges exactly when $p > 1$ and diverges for $p \\le 1$.',
        detail: 'Harmonic $p = 1$ diverges by grouping, while $p = 2$ converges to $\\frac{\\pi^{2}}{6}$. Every comparison test measures against this scale.'
      },
      {
        term: 'Comparison test',
        kind: 'theorem',
        statement: 'Direct **comparison** `comparison-test` says $0 \\le a_{n} \\le b_{n}$ with $\\sum b_{n}$ convergent forces $\\sum a_{n}$ convergent.',
        detail: 'Limit form uses $\\frac{a_{n}}{b_{n}} \\to L > 0$ to transfer behaviour. Choose $b_{n}$ as the dominant power of $a_{n}$ for rational terms.'
      },
      {
        term: 'Ratio test',
        kind: 'theorem',
        statement: 'The **ratio test** `ratio-test` computes $L = \\lim\\frac{a_{n+1}}{a_{n}}$: convergence for $L < 1$ and divergence for $L > 1$.',
        detail: 'Factorials and exponentials suit ratios since cancellations simplify. When $L = 1$ the test says nothing and comparison or integral decides.'
      },
      {
        term: 'Root test',
        kind: 'theorem',
        statement: 'The **root test** `root-test` computes $L = \\lim a_{n}^{\\frac{1}{n}}$ with the same $1$ boundary as ratios.',
        detail: 'Powers $n$ in exponents suit roots. Again $L = 1$ is inconclusive, common for rational and $p$ series terms.'
      },
      {
        term: 'Integral and alternating',
        kind: 'theorem',
        statement: 'Decreasing positive $f$ gives **integral plus alternating** `integral-alternating` convergence of $\\sum f(n)$ exactly with $\\int f$, while $\\sum(-1)^{n}b_{n}$ converges for $b_{n}$ decreasing to $0$.',
        detail: 'Alternating remainder is below the first omitted $b_{n+1}$. Absolute convergence implies convergence, but conditional cases like $\\sum\\frac{(-1)^{n}}{n}$ need the alternating test.'
      }
    ],
    figures: [
      {
        caption: 'Terms $a_{n} = \\frac{1}{n^{2}}$ stack under $y = \\frac{1}{x^{2}}$; finite integral area traps the tail sum, proving convergence by the integral test.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Integral test bars under curve"><line x1="60" y1="300" x2="700" y2="300" stroke="currentColor" stroke-width="1.3"/><line x1="80" y1="300" x2="80" y2="40" stroke="currentColor" stroke-width="1.2"/><path d="M100,120 C220,160 340,220 620,270" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="150" y="150" width="40" height="150" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="200" y="170" width="40" height="130" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="250" y="185" width="40" height="115" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="400" y="150" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">curve plus bars</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Ratio test on factorial',
        problem: 'Test $\\sum\\frac{2^{n}}{n!}$ for convergence.',
        steps: [
          { label: 'Step 1', text: 'Form ratio:\n```text\n((2^(n+1) over (n+1)!) ) divided by (2^n over n!) = 2 over (n+1)\n```\nIn symbols $\\frac{a_{n+1}}{a_{n}} = \\frac{2}{n+1}$.' },
          { label: 'Step 2', text: 'Limit is $0 < 1$, so the series converges absolutely.' },
          { label: 'Step 3', text: 'Sum is $e^{2}-1$ style exponential, confirming finite value.' }
        ],
        result: 'Convergent by ratio with limit $0$.'
      },
      {
        title: 'Borderline p comparison',
        problem: 'Test $\\sum\\frac{n+1}{n^{3}+2}$ for convergence.',
        steps: [
          { label: 'Step 1', text: 'Dominant power is $\\frac{1}{n^{2}}$, convergent $p = 2$ series.' },
          { label: 'Step 2', text: 'Limit comparison $\\frac{a_{n}}{1 over n^{2}} \\to 1$ transfers convergence.' },
          { label: 'Step 3', text: 'Hence the given series converges; ratio test would give inconclusive $1$.' }
        ],
        result: 'Convergent by limit comparison with $p = 2$.'
      }
    ],
    keyTakeaways: [
      '$p > 1$ converges; $p \\le 1$ diverges as benchmark.',
      'Comparison transfers behaviour from dominant powers.',
      'Ratio and root decide for $L \\ne 1$ and stall at $1$.',
      'Integral matches $\\sum f(n)$ with $\\int f$; alternating needs decrease to $0$.'
    ],
    quiz: [
      {
        q: '$\\sum\\frac{1}{n^{3}}$',
        options: ['diverges', 'converges', 'oscillates', 'needs ratio only'],
        answer: 1,
        explanation: 'Step 1: This is $p$ series with $p = 3$. Step 2: Since $3 > 1$ it converges. Step 3: Integral $\\int\\frac{dx}{x^{3}}$ is finite. Step 4: Hence converges.'
      },
      {
        q: 'Ratio limit $L < 1$ implies',
        options: ['divergence', 'convergence', 'inconclusive', 'conditional only'],
        answer: 1,
        explanation: 'Step 1: Terms eventually shrink geometrically. Step 2: Dominated by convergent geometric series. Step 3: Hence absolute convergence. Step 4: So convergence.'
      },
      {
        q: 'Ratio limit $L = 1$ means',
        options: ['converges', 'diverges', 'inconclusive, try comparison', 'zero sum'],
        answer: 2,
        explanation: 'Step 1: Both $p = 1$ and $p = 2$ give $L = 1$. Step 2: One diverges, one converges. Step 3: Ratio cannot separate them. Step 4: Hence inconclusive.'
      },
      // PYQ-pattern: alternating harmonic conditional
      {
        q: '$\\sum\\frac{(-1)^{n}}{n}$',
        options: ['diverges to infinity', 'converges conditionally', 'converges absolutely', 'has zero terms'],
        answer: 1,
        explanation: 'Step 1: Absolute series is harmonic divergent. Step 2: Terms $\\frac{1}{n}$ decrease to $0$. Step 3: Alternating test gives convergence. Step 4: Hence conditional convergence.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Convergence hierarchies and borderline series',
        blocks: [
          {
            kind: 'theorem',
            body: 'A series $\\sum a_{n}$ converges absolutely when $\\sum |a_{n}|$ converges, which implies ordinary convergence. The **$p$ series** $\\sum 1/n^{p}$ converges exactly when $p > 1$ and diverges for $p \\le 1$, forming the borderline hierarchy. Comparison, ratio and root tests locate most series relative to geometric or $p$ benchmarks, but ratio limit $1$ is inconclusive since both $p = 1$ and $p = 2$ give limit $1$. The alternating Leibniz test rescues conditional convergence when $|a_{n}|$ decreases monotonically to $0$, with remainder bounded by the first omitted term.'
          },
          {
            kind: 'proof',
            body: 'Cauchy condensation compares $\\sum 1/n^{p}$ with $\\sum 2^{k}(1/2^{kp}) = \\sum (2^{1-p})^{k}$, a geometric series converging exactly when $2^{1-p} < 1$, namely $p > 1$. The integral test gives the same threshold by $\\int_{1}^{\\infty} dx/x^{p}$. Ratio and root tests measure exponential growth against geometric benchmarks, so polynomial borderlines like $p$ series escape them with limit $1$. For alternating series with decreasing magnitudes, partial sums oscillate in nested intervals whose lengths tend to $0$, forcing convergence by completeness, and the limit lies within one step of every partial sum, giving the sharp remainder bound.'
          },
          {
            kind: 'example',
            heading: 'Alternating harmonic series converges conditionally',
            body: 'The series $\\sum (-1)^{n}/n$ has absolute version $\\sum 1/n$, the divergent harmonic $p = 1$ case, so absolute convergence fails. Magnitudes $1/n$ decrease to $0$, hence Leibniz gives convergence, and the remainder after $N$ terms is at most $1/(N+1)$. Rearrangement can change its sum, unlike absolutely convergent series, which marks conditional convergence as fragile. Truncating at $N = 100$ already pins the limit within $0.01$, illustrating how the alternating structure extracts cancellation from a borderline divergent magnitude sequence.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 16.4
  {
    sectionId: 'advmath-ch16-s4',
    readingTime: 7,
    intro: 'Scales of notation write numbers in any base $r$ with digit values below $r$, while surds are cleared by rationalising factors. Binomial approximations then estimate roots and powers to any order. This section unites base arithmetic with approximation.',
    objectives: [
      'Convert integers and fractions between base $10$ and base $r$',
      'Rationalise $\\sqrt{a}+\\sqrt{b}$ style denominators with conjugates',
      'Approximate $(1+x)^{n}$ and $\\sqrt{a^{2}+h}$ to second order'
    ],
    concepts: [
      {
        term: 'Base representation',
        kind: 'definition',
        statement: 'In base $r$, the **place value** `place-value` $N = d_{k}r^{k}+\\cdots+d_{0}$ uses digits $0 \\le d_{i} < r$.',
        detail: 'Repeated division by $r$ yields digits from least significant upward. Fractions expand by repeated multiplication by $r$, giving terminating or recurring radix parts.'
      },
      {
        term: 'Casting nines check',
        kind: 'method',
        statement: 'Digit sums give the **nines check** `nines-check`: $N$ modulo $r-1$ equals the sum of its base $r$ digits modulo $r-1$.',
        detail: 'In base $10$ this is casting out nines for addition and multiplication checks. A mismatch proves arithmetic error, while a match only suggests correctness.'
      },
      {
        term: 'Surd conjugate',
        kind: 'method',
        statement: 'Binomial surds rationalise by **conjugates** `surd-conjugate` $(\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b}) = a-b$.',
        detail: 'Multiply numerator and denominator by the conjugate sign form. Trinomial $\\sqrt{a}+\\sqrt{b}+\\sqrt{c}$ needs two rounds, isolating one surd first.'
      },
      {
        term: 'Square root of surd binomial',
        kind: 'method',
        statement: 'Nested $\\sqrt{a+\\sqrt{b}}$ splits as **surd split** `surd-split` $\\sqrt{x}+\\sqrt{y}$ when $a^{2}-b$ is a perfect square, solved by $x+y = a$ and $4xy = b$.',
        detail: 'Assume $\\sqrt{a+\\sqrt{b}} = \\sqrt{x}+\\sqrt{y}$ and square to match rational plus surd parts. If $a^{2}-b$ is not square, the form does not denest over rationals.'
      },
      {
        term: 'Binomial approximation',
        kind: 'method',
        statement: 'Small increments use **binomial estimates** `binomial-estimate` $\\sqrt{a^{2}+h} \\approx a+\\frac{h}{2a}$ with second correction $-\\frac{h^{2}}{8a^{3}}$.',
        detail: 'Factor $a$ to $(1+\\frac{h}{a^{2}})^{\\frac{1}{2}}$ and expand. The linear term suffices for three place mental work when $h$ is small against $a^{2}$.'
      }
    ],
    figures: [
      {
        caption: 'Place values $r^{2}$, $r^{1}$, $r^{0}$ stack as digit blocks; repeated division peels the least significant digit first while remainders build the base $r$ expansion.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Place value blocks for base r"><rect x="120" y="150" width="140" height="100" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="280" y="180" width="90" height="70" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="390" y="200" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="190" y="205" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">r squared</text><text x="325" y="220" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">r one</text><text x="415" y="230" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">r zero</text><text x="360" y="300" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">base r digits</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Base conversion drill',
        problem: 'Convert $45$ to base $2$ and $0.625$ to binary.',
        steps: [
          { label: 'Step 1', text: 'Repeated division:\n```text\n45 -> 22 r1, 22 -> 11 r0, 11 -> 5 r1, 5 -> 2 r1, 2 -> 1 r0, 1 -> 0 r1\n```\nReading remainders upward gives $101101$.' },
          { label: 'Step 2', text: 'Fraction by doubling: $0.625 \\cdot 2 = 1.25$, $0.25 \\cdot 2 = 0.5$, $0.5 \\cdot 2 = 1.0$, giving $0.101$.' },
          { label: 'Step 3', text: 'Check: $32+8+4+1 = 45$ and $\\frac{1}{2}+\\frac{1}{8} = 0.625$.' }
        ],
        result: '$45 = 101101_{2}$ and $0.625 = 0.101_{2}$.'
      },
      {
        title: 'Surd rationalisation plus estimate',
        problem: 'Rationalise $\\frac{1}{\\sqrt{5}-\\sqrt{3}}$ and estimate $\\sqrt{101}$.',
        steps: [
          { label: 'Step 1', text: 'Multiply by $\\sqrt{5}+\\sqrt{3}$ to get $\\frac{\\sqrt{5}+\\sqrt{3}}{2}$.' },
          { label: 'Step 2', text: 'For $\\sqrt{101} = 10\\sqrt{1+\\frac{1}{100}} \\approx 10(1+\\frac{1}{200}) = 10.05$.' },
          { label: 'Step 3', text: 'Second correction $-\\frac{1}{8000}$ refines to $10.0499$, matching true $10.0499$.' }
        ],
        result: 'Rationalised $\\frac{\\sqrt{5}+\\sqrt{3}}{2}$ with $\\sqrt{101} \\approx 10.05$.'
      }
    ],
    keyTakeaways: [
      'Base $r$ digits satisfy $0 \\le d_{i} < r$ with division conversion.',
      'Digit sum modulo $r-1$ checks arithmetic by nines style.',
      'Conjugates clear $\\sqrt{a}\\pm\\sqrt{b}$ in one multiply.',
      '$\\sqrt{a^{2}+h} \\approx a+\\frac{h}{2a}$ estimates roots fast.'
    ],
    quiz: [
      {
        q: '$13$ in binary equals',
        options: [`$1101$`, `$1011$`, `$1111$`, `$1001$`],
        answer: 0,
        explanation: 'Step 1: Divide $13$ by $2$ repeatedly. Step 2: Remainders are $1, 0, 1, 1$. Step 3: Read upward to $1101$. Step 4: Hence the first option holds.'
      },
      {
        q: 'Conjugate of $\\sqrt{7}-\\sqrt{2}$ is',
        options: [`$\\sqrt{7}-\\sqrt{2}$`, `$7+2$`, `$\\sqrt{7}+\\sqrt{2}$`, 'zero'],
        answer: 2,
        explanation: 'Step 1: Flip the middle sign. Step 2: Product gives $7-2 = 5$. Step 3: Surds clear to rational. Step 4: Hence the third option holds.'
      },
      // PYQ-pattern: denesting condition
      {
        q: '$\\sqrt{5+\\sqrt{24}}$ denests because',
        options: ['always denests', `$25-24 = 1$ is square`, 'never denests', 'needs logs'],
        answer: 1,
        explanation: 'Step 1: Check $a^{2}-b = 25-24$. Step 2: Value $1$ is a perfect square. Step 3: Hence split $\\sqrt{x}+\\sqrt{y}$ exists. Step 4: So the second option holds.'
      },
      {
        q: '$\\sqrt{82}$ linear estimate via $9+\\frac{1}{18}$ is',
        options: [`$9.5$`, `$8$`, `$10$`, `$9.06$`],
        answer: 3,
        explanation: 'Step 1: Write $82 = 81+1$. Step 2: Apply $a+\\frac{h}{2a} = 9+\\frac{1}{18}$. Step 3: Value about $9.06$. Step 4: Hence the fourth option holds.'
      }
    ]
  }
]
