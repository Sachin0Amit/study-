import type { SectionContent } from '../library'

// ============================================================================
// Higher Algebra companion — Chapter 13: Binomial Exponential Log Series
// Hall and Knight Chapters XIII-XVIII plus XXIII-XXV: series craft.
// ============================================================================

export const jeemathsCh13Content: SectionContent[] = [
  // ---------------------------------------------------------------- 13.1
  {
    sectionId: 'jeemaths-ch13-s1',
    readingTime: 9,
    intro: 'Newton general binomial $(1+x)^{n}$ extends beyond positive integers to fractional and negative indices, producing infinite series that converge for $|x| < 1$. The general term carries products $n(n-1)\\cdots$ that encode roots and reciprocals. This section builds expansions with convergence discipline and approximations.',
    objectives: [
      'Write the general term $T_{r+1} = \\binom{n}{r}x^{r}$ for any rational $n$',
      'Expand $(1+x)^{n}$ for negative and fractional $n$ with $|x| < 1$ checks',
      'Approximate roots and reciprocals to first and second order'
    ],
    concepts: [
      {
        term: 'General binomial coefficient',
        kind: 'definition',
        statement: 'The **general coefficient** `general-binom` $\\binom{n}{r} = \\frac{n(n-1)\\cdots(n-r+1)}{r!}$ defines $(1+x)^{n} = \\sum_{r=0}^{\\infty}\\binom{n}{r}x^{r}$ for rational $n$.',
        detail: 'For positive integer $n$ the series terminates at $r = n$. For other $n$ it continues forever and needs $|x| < 1$ for convergence, with endpoint checks by $p$ series comparison.'
      },
      {
        term: 'Negative index expansions',
        kind: 'theorem',
        statement: 'Negative powers give **infinite reciprocal series** `negative-series` $(1+x)^{-1} = 1-x+x^2-\\cdots$ and $(1-x)^{-1} = 1+x+x^2+\\cdots$ for $|x| < 1$.',
        detail: 'More generally $(1+x)^{-n} = \\sum (-1)^{r}\\binom{n+r-1}{r}x^{r}$. The signs alternate for $(1+x)^{-n}$ but stay positive for $(1-x)^{-n}$, a frequent sign trap.'
      },
      {
        term: 'Fractional root series',
        kind: 'method',
        statement: 'Roots use **fractional binomials** `fractional-roots` $\\sqrt{1+x} = 1+\\frac{x}{2}-\\frac{x^2}{8}+\\cdots$ and $\\frac{1}{\\sqrt{1-x}} = 1+\\frac{x}{2}+\\frac{3x^2}{8}+\\cdots$.',
        detail: 'Coefficients follow $\\binom{\\frac{1}{2}}{r}$ patterns with double factorial simplifications. Two terms already give square root approximations correct to order $x^2$.'
      },
      {
        term: 'Convergence condition',
        kind: 'theorem',
        statement: 'The **convergence band** `convergence-band` $|x| < 1$ guarantees absolute convergence of $(1+x)^{n}$ for noninteger $n$, with divergence for $|x| > 1$.',
        detail: 'Ratio test gives limit $|x|$ for the general term quotient. At $|x| = 1$ use alternating or $p$ series tests: $n > 0$ may converge conditionally at $x = -1$ while $n \\le -1$ diverges.'
      },
      {
        term: 'First order approximation',
        kind: 'insight',
        statement: 'For small $x$, the **linear approximation** `linear-approx` $(1+x)^{n} \\approx 1+nx$ with error of order $x^2$ handles roots, powers and percentage changes.',
        detail: 'Second order adds $\\frac{n(n-1)}{2}x^2$ for tighter bounds. The rule underlies interest, error and binomial root estimates when $|nx|$ is small.'
      }
    ],
    figures: [
      {
        caption: 'Partial sums of $(1+x)^{\\frac{1}{2}}$ approach $\\sqrt{1+x}$ inside $|x| < 1$; outside the band the terms grow and the series diverges from the curve.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Series partial sums converging inside a band"><line x1="60" y1="280" x2="700" y2="280" stroke="currentColor" stroke-width="1.4"/><line x1="360" y1="280" x2="360" y2="40" stroke="currentColor" stroke-width="1.2"/><line x1="200" y1="40" x2="200" y2="300" stroke="currentColor" stroke-width="1.1" stroke-dasharray="6 4" opacity="0.7"/><line x1="520" y1="40" x2="520" y2="300" stroke="currentColor" stroke-width="1.1" stroke-dasharray="6 4" opacity="0.7"/><path d="M80,260 C200,240 300,200 360,170 C420,140 520,100 640,60" fill="none" stroke="currentColor" stroke-width="2"/><path d="M200,250 C280,230 330,200 360,170 C390,145 440,120 520,100" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="7 4"/><text x="360" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">0</text><text x="200" y="325" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">minus 1</text><text x="520" y="325" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">plus 1</text><text x="560" y="80" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">true curve</text><text x="450" y="230" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">partial sum</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Fractional expansion to three terms',
        problem: 'Expand $\\frac{1}{\\sqrt{1-4x}}$ to $x^2$ and estimate $\\frac{1}{\\sqrt{0.96}}$ with $x = 0.01$.',
        steps: [
          { label: 'Step 1', text: 'Use $n = -\\frac{1}{2}$ with $X = -4x$:\n```text\ncoeff1 = (-1 over 2)(-4x) = 2x; coeff2 = 6 x^2\n```\nIn symbols $T_{2} = (-\\frac{1}{2})(-4x) = 2x$ and $T_{3} = \\frac{(-\\frac{1}{2})(-\\frac{3}{2})}{2}(16x^2) = 6x^2$.' },
          { label: 'Step 2', text: 'Hence $\\frac{1}{\\sqrt{1-4x}} = 1 + 2x + 6x^2 + \\cdots$ valid for $|4x| < 1$.' },
          { label: 'Step 3', text: 'At $x = 0.01$ the sum is $1 + 0.02 + 0.0006 = 1.0206$, matching $\\frac{1}{\\sqrt{0.96}}$ to four places.' }
        ],
        result: '$1 + 2x + 6x^2 + \\cdots$ giving $1.0206$ at $x = 0.01$.'
      },
      {
        title: 'Cube root approximation',
        problem: 'Find $\\sqrt[3]{28}$ to two decimal places with $(27+1)^{\\frac{1}{3}}$.',
        steps: [
          { label: 'Step 1', text: 'Factor $27$: $\\sqrt[3]{28} = 3(1+\\frac{1}{27})^{\\frac{1}{3}}$ with $|x| = \\frac{1}{27} < 1$.' },
          { label: 'Step 2', text: 'Expand to second order: $1 + \\frac{1}{3}\\cdot\\frac{1}{27} - \\frac{1}{9}\\cdot\\frac{1}{729} \\approx 1.01222$.' },
          { label: 'Step 3', text: 'Multiply by $3$ to get $3.03666$, correct against $3.03659$ to four places.' }
        ],
        result: '$\\sqrt[3]{28} \\approx 3.04$ from two binomial terms.'
      }
    ],
    keyTakeaways: [
      'General $\\binom{n}{r} = \\frac{n(n-1)\\cdots(n-r+1)}{r!}$ extends binomial to any rational $n$.',
      '$(1+x)^{-1}$ and $(1-x)^{-1}$ are alternating versus positive geometric series.',
      'Noninteger $n$ needs $|x| < 1$ with endpoint $p$ series checks.',
      'Linear $1+nx$ plus $\\frac{n(n-1)}{2}x^2$ approximates roots fast.'
    ],
    quiz: [
      {
        q: 'General term of $(1+x)^{-2}$ is',
        options: [`$(-1)^{r}(r+1)x^{r}$`, `$(r+1)x^{r}$`, `$(-x)^{2r}$`, `$x^{r}$`],
        answer: 0,
        explanation: 'Step 1: Use $\\binom{-2}{r} = (-1)^{r}(r+1)$. Step 2: Multiply by $x^{r}$. Step 3: Signs alternate. Step 4: Hence the first option holds.'
      },
      // PYQ-pattern: square root binomial coefficients
      {
        q: 'Coefficient of $x^2$ in $\\sqrt{1+x}$ equals',
        options: [`$\\frac{1}{2}$`, `$-\\frac{1}{8}$`, `$\\frac{3}{8}$`, `$1$`],
        answer: 1,
        explanation: 'Step 1: Coefficient is $\\binom{\\frac{1}{2}}{2}$. Step 2: Compute $\\frac{\\frac{1}{2}(-\\frac{1}{2})}{2}$. Step 3: Value is $-\\frac{1}{8}$. Step 4: Hence the second option holds.'
      },
      {
        q: '$(1+x)^{n}$ for fractional $n$ converges for',
        options: ['all real $x$', `$|x| < 1$`, `$|x| > 1$ only`, 'no $x$'],
        answer: 1,
        explanation: 'Step 1: Ratio test gives limit $|x|$. Step 2: Values below $1$ converge absolutely. Step 3: Values above $1$ diverge. Step 4: Hence $|x| < 1$.'
      },
      {
        q: 'Linear approximation of $(1.02)^{10}$ is',
        options: [`$1.02$`, `$1.2$`, `$2$`, `$1.01$`],
        answer: 1,
        explanation: 'Step 1: Write as $(1+0.02)^{10}$. Step 2: Linear rule gives $1+10(0.02)$. Step 3: Value is $1.2$. Step 4: Hence the second option holds.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'General binomial series and analytic continuation',
        blocks: [
          {
            kind: 'theorem',
            body: 'For any real exponent $\\alpha$ the **general binomial series** $(1+x)^{\\alpha} = \\sum_{k=0}^{\\infty} C(\\alpha,k) x^{k}$ with $C(\\alpha,k) = \\alpha(\\alpha-1)\\cdots(\\alpha-k+1)/k!$ converges absolutely for $|x| < 1$ and diverges for $|x| > 1$ unless $\\alpha$ is a nonnegative integer, in which case it terminates. The radius $1$ is best possible with singularity at $x = -1$. Endpoint behavior is delicate: at $x = 1$ convergence needs $\\alpha > -1$ and at $x = -1$ it needs $\\alpha > 0$. Linear approximation $(1+x)^{\\alpha} = 1 + \\alpha x + R_{2}$ with $|R_{2}| \\le M x^{2}$ near $0$ is the sharp first order Taylor control.'
          },
          {
            kind: 'derivation',
            body: 'The ratio of successive coefficients satisfies $|C(\\alpha,k+1)x^{k+1}/(C(\\alpha,k)x^{k})| = |\\alpha-k||x|/(k+1) \\to |x|$, so the ratio test gives radius $1$. Termwise differentiation yields $\\alpha(1+x)^{\\alpha-1}$ inside the disc, confirming the sum. Taylor remainder in Lagrange form bounds $|R_{2}|$ by the maximum of the second derivative on the segment, giving quadratic error control. For roots such as $\\alpha = 1/2$ this produces convergent approximations of $\\sqrt{1+x}$ with explicit error bars, and analytic continuation past $|x| = 1$ proceeds along paths avoiding the branch cut, a bridge from binomial algebra to complex analysis.'
          },
          {
            kind: 'example',
            heading: 'Linear estimate with quadratic error bar',
            body: 'Estimate $(1.02)^{10}$ with $x = 0.02$ and $\\alpha = 10$. The linear rule gives $1 + 10(0.02) = 1.2$, while the true value is near $1.219$. The gap $0.019$ is captured by the second order term $C(10,2)(0.02)^{2} = 45(0.0004) = 0.018$, showing the error is essentially quadratic as theory predicts. For fractional powers like $(1.02)^{1/2}$ the same method gives $1.00995$ against linear $1.01$, with even smaller remainder. Hence the series grades approximations by order, and the extremal worst case error on $|x| \\le r$ scales as $r^{2}$ for the linear truncation.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 13.2
  {
    sectionId: 'jeemaths-ch13-s2',
    readingTime: 9,
    intro: 'The exponential series $e^{x} = 1+x+\\frac{x^2}{2!}+\\cdots$ converges for every $x$ and defines $e$ as its sum at $x = 1$. Its inverse logarithmic series $\\log(1+x)$ converges for $-1 < x \\le 1$ and powers log table construction. This section builds both with remainder control.',
    objectives: [
      'Sum $e^{x}$ series and evaluate $e$ plus $e^{-1}$ numerically',
      'Expand $\\log(1+x)$ and $\\log\\frac{1+x}{1-x}$ with interval checks',
      'Compute logs and exponentials to required accuracy with remainders'
    ],
    concepts: [
      {
        term: 'Exponential series definition',
        kind: 'definition',
        statement: 'The **exponential series** `exp-series` $e^{x} = \\sum_{n=0}^{\\infty}\\frac{x^{n}}{n!}$ converges absolutely for all real and complex $x$.',
        detail: 'At $x = 1$ it defines $e = 1+1+\\frac{1}{2!}+\\cdots \\approx 2.71828$. Term ratio $\\frac{|x|}{n+1}$ tends to zero, so convergence is rapid for moderate $x$.'
      },
      {
        term: 'Exponential law',
        kind: 'theorem',
        statement: 'Series multiplication proves the **index law** `index-law` $e^{x}e^{y} = e^{x+y}$, hence $e^{-x} = \\frac{1}{e^{x}}$ and $e^{0} = 1$.',
        detail: 'Cauchy product of the two series collects to $\\sum \\frac{(x+y)^{n}}{n!}$ by binomial grouping. The law extends to $a^{x} = e^{x\\log a}$ for $a > 0$.'
      },
      {
        term: 'Logarithmic series',
        kind: 'theorem',
        statement: 'For $-1 < x \\le 1$, the **log series** `log-series` $\\log(1+x) = x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots$ inverts the exponential.',
        detail: 'Integration of $\\frac{1}{1+x} = 1-x+x^2-\\cdots$ term by term gives the result. At $x = 1$ it yields $\\log 2 = 1-\\frac{1}{2}+\\frac{1}{3}-\\cdots$, convergent but slow.'
      },
      {
        term: 'Fast log formula',
        kind: 'method',
        statement: 'Subtracting series gives the **fast log form** `fast-log` $\\log\\frac{1+x}{1-x} = 2(x+\\frac{x^3}{3}+\\frac{x^5}{5}+\\cdots)$ for $|x| < 1$.',
        detail: 'Even powers cancel, leaving only odd terms with doubled coefficients. Putting $\\frac{1+x}{1-x} = \\frac{m+1}{m}$ computes $\\log(m+1)$ from $\\log m$ with small $x = \\frac{1}{2m+1}$.'
      },
      {
        term: 'Remainder control',
        kind: 'insight',
        statement: 'Alternating series with **decreasing remainder** `remainder-control` have error below the first omitted term, guiding how many terms suffice.',
        detail: 'For $e^{x}$ with $x > 0$, Lagrange form $R_{n} \\le \\frac{x^{n+1}}{(n+1)!}e^{x}$ bounds the tail. For log with small $x$, two odd terms often reach four place accuracy.'
      }
    ],
    figures: [
      {
        caption: 'Partial sums $S_{2}$, $S_{4}$, $S_{6}$ of $e^{x}$ hug $y = e^{x}$ near $0$ and peel away farther out; adding terms widens the accurate window symmetrically.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Exponential curve with three partial sum approximations"><line x1="60" y1="300" x2="700" y2="300" stroke="currentColor" stroke-width="1.3"/><line x1="360" y1="300" x2="360" y2="30" stroke="currentColor" stroke-width="1.2"/><path d="M80,290 C200,280 300,240 360,180 C420,120 480,60 620,30" fill="none" stroke="currentColor" stroke-width="2"/><path d="M120,300 C220,290 320,250 360,180 C400,120 460,60 600,20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="7 4"/><path d="M200,295 C280,280 330,230 360,180 C390,130 440,80 540,45" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 4" opacity="0.8"/><text x="600" y="50" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">exp curve</text><text x="520" y="250" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">low order sums</text><text x="360" y="325" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">x</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Computing e to three places',
        problem: 'Sum $e = \\sum \\frac{1}{n!}$ to bound the error below $0.001$.',
        steps: [
          { label: 'Step 1', text: 'Add to $n = 6$:\n```text\nS6 = 1 + 1 + 0.5 + 0.1667 + 0.0417 + 0.0083 + 0.0014 = 2.7181\n```\nIn symbols $S_{6} = \\sum_{n=0}^{6}\\frac{1}{n!} \\approx 2.7181$.' },
          { label: 'Step 2', text: 'Tail below $\\frac{1}{7!}(1+\\frac{1}{8}+\\cdots) < 0.0002$, so $2.718 < e < 2.719$.' },
          { label: 'Step 3', text: 'Hence $e \\approx 2.718$ to three places, with $e^{-1} \\approx 0.368$ by reciprocal.' }
        ],
        result: '$e \\approx 2.718$ with tail below $0.001$.'
      },
      {
        title: 'Fast log of two',
        problem: 'Compute $\\log 2$ with $\\log\\frac{1+x}{1-x}$ form to four places.',
        steps: [
          { label: 'Step 1', text: 'Set $\\frac{1+x}{1-x} = 2$ giving $x = \\frac{1}{3}$.' },
          { label: 'Step 2', text: 'Then $\\log 2 = 2(\\frac{1}{3}+\\frac{1}{81}+\\frac{1}{1215}+\\cdots) \\approx 0.6931$.' },
          { label: 'Step 3', text: 'Three odd terms already give $0.6931$ since the next term is below $0.00002$.' }
        ],
        result: 'Natural $\\log 2 \\approx 0.6931$.'
      }
    ],
    keyTakeaways: [
      '$e^{x} = \\sum \\frac{x^{n}}{n!}$ converges everywhere and defines $e$.',
      'Index law $e^{x}e^{y} = e^{x+y}$ follows from Cauchy product grouping.',
      '$\\log(1+x) = x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots$ for $-1 < x \\le 1$.',
      'Odd only form for $\\log\\frac{1+x}{1-x}$ computes logs rapidly.'
    ],
    quiz: [
      {
        q: 'Value of $e^{0}$ from the series is',
        options: [`$1$`, `$0$`, `$e$`, 'divergent'],
        answer: 0,
        explanation: 'Step 1: Put $x = 0$ in the series. Step 2: All terms with $x^{n}$ vanish for $n \\ge 1$. Step 3: Only $1$ remains. Step 4: Hence the first option holds.'
      },
      {
        q: '$\\log(1+x)$ series converges for',
        options: ['all $x$', '$-1 < x \\le 1$', '$|x| > 1$', '$x > 1$ only'],
        answer: 1,
        explanation: 'Step 1: Derived from $\\frac{1}{1+x}$ expansion. Step 2: Needs $|x| < 1$ plus endpoint $x = 1$. Step 3: At $x \\le -1$ terms do not vanish. Step 4: Hence $-1 < x \\le 1$.'
      },
      // PYQ-pattern: fast log odd terms
      {
        q: 'In $\\log\\frac{1+x}{1-x}$ expansion, surviving powers are',
        options: ['even only', 'all powers', 'odd only', 'no powers'],
        answer: 2,
        explanation: 'Step 1: Subtract $\\log(1-x)$ from $\\log(1+x)$. Step 2: Even powers have same sign and cancel. Step 3: Odd powers double. Step 4: Hence odd only, the third option.'
      },
      {
        q: '$e^{x}e^{-x}$ equals',
        options: [`$e^{2x}$`, `$0$`, `$e$`, `$1$`],
        answer: 3,
        explanation: 'Step 1: Apply index law $e^{x}e^{y} = e^{x+y}$. Step 2: Here $y = -x$. Step 3: Sum is $e^{0} = 1$. Step 4: Hence the fourth option holds.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Exponential logarithm duality and sharp remainders',
        blocks: [
          {
            kind: 'theorem',
            body: 'The **exponential series** $e^{x} = \\sum_{k=0}^{\\infty} x^{k}/k!$ converges for every real and complex $x$ and satisfies $d/dx\\, e^{x} = e^{x}$ with $e^{0} = 1$. Its inverse is $\\log(1+x) = \\sum_{k=1}^{\\infty} (-1)^{k+1}x^{k}/k$ for $-1 < x \\le 1$. Subtracting the series at $x$ and $-x$ cancels even powers and doubles odd ones, giving $\\log((1+x)/(1-x)) = 2(x + x^{3}/3 + x^{5}/5 + \\cdots)$ for $|x| < 1$. The exponential law $e^{x}e^{y} = e^{x+y}$ and the logarithm law $\\log(uv) = \\log u + \\log v$ are therefore power series identities, sharp on their stated domains.'
          },
          {
            kind: 'proof',
            body: 'The ratio $|x|^{k+1}/(k+1)!$ divided by $|x|^{k}/k!$ equals $|x|/(k+1) \\to 0$, so the exponential series converges absolutely everywhere and termwise differentiation is legitimate, yielding the differential equation. Uniqueness for $y^{\\prime} = y$ with $y(0) = 1$ forces the law $e^{x+y} = e^{x}e^{y}$ by fixing $y$ and checking both sides satisfy the same equation in $x$. The logarithm series follows by integrating $1/(1+t) = \\sum (-t)^{k}$ termwise, valid for $|x| < 1$ with Abel continuity at $x = 1$. Odd doubling is immediate subtraction, and remainder after $n$ terms is bounded by the first omitted term for alternating decreasing series.'
          },
          {
            kind: 'example',
            heading: 'Odd only series doubles the survivors',
            body: 'Since $\\log(1+x) = x - x^{2}/2 + x^{3}/3 - \\cdots$ and $\\log(1-x) = -x - x^{2}/2 - x^{3}/3 - \\cdots$, subtraction cancels every even power and doubles every odd one, leaving $\\log((1+x)/(1-x)) = 2(x + x^{3}/3 + x^{5}/5 + \\cdots)$. The identity $e^{x}e^{-x} = e^{0} = 1$ is the exponential counterpart with full cancellation to the constant term. Numerically the odd series converges faster near $0$ because the leading error is cubic rather than quadratic, making it the preferred form for high accuracy logarithm computation with sharp alternating remainder control.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 13.3
  {
    sectionId: 'jeemaths-ch13-s3',
    readingTime: 8,
    intro: 'A recurring series obeys a fixed linear scale of relation, so each term is a combination of predecessors and the $n$th term follows from the generating fraction. Partial fractions split that generating fraction into geometric pieces. This section pairs scale finding with cover up decomposition.',
    objectives: [
      'Find the scale of relation from three consecutive terms',
      'Split proper fractions by cover up plus compare coefficients',
      'Write $n$th terms and sums of recurring series'
    ],
    concepts: [
      {
        term: 'Scale of relation',
        kind: 'definition',
        statement: 'A **scale of relation** `scale-relation` $u_{n} = pu_{n-1}+qu_{n-2}$ fixes every later term from two seeds, with order equal to predecessors used.',
        detail: 'Second order scales come from quadratic denominators $1-px-qx^2$. Higher order adds more predecessors with matching denominator degree.'
      },
      {
        term: 'Generating fraction',
        kind: 'theorem',
        statement: 'The **generating function** `generating-fn` $U(x) = \\sum u_{n}x^{n} = \\frac{P(x)}{1-px-qx^2}$ encodes the whole recurring sequence.',
        detail: 'Numerator $P$ is fixed by seed values. Expanding $U$ by division reproduces $u_{n}$ term by term, linking recurrences to rational functions.'
      },
      {
        term: 'Cover up rule',
        kind: 'method',
        statement: 'For distinct linear factors, the **cover up rule** `cover-up` gives $\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a}+\\frac{B}{x-b}$ with $A$ found by covering $(x-a)$ and putting $x = a$.',
        detail: 'Cover $(x-a)$, substitute $x = a$ in the rest, and $A$ drops out at once. Repeat for each linear factor before handling repeated or quadratic factors.'
      },
      {
        term: 'Repeated and quadratic factors',
        kind: 'method',
        statement: 'Repeated roots need **ascending powers** `repeated-powers` $\\frac{A}{x-a}+\\frac{B}{(x-a)^2}$, while $x^2+bx+c$ needs $\\frac{Mx+N}{x^2+bx+c}$.',
        detail: 'Compare coefficients after clearing denominators to find the extra numerators. Differentiation of the identity in $x$ can shortcut repeated root cases.'
      },
      {
        term: 'Nth term extraction',
        kind: 'method',
        statement: 'Each **partial piece** `nth-extract` $\\frac{A}{1-\\alpha x}$ contributes $A\\alpha^{n}$ to $u_{n}$, so the full $n$th term is a sum of geometric modes.',
        detail: 'Repeated factor $\\frac{1}{(1-\\alpha x)^2}$ contributes $(n+1)\\alpha^{n}$. Summing modes gives closed forms for recurrences like Fibonacci style sequences.'
      }
    ],
    figures: [
      {
        caption: 'A recurring sequence $u_{n} = u_{n-1}+u_{n-2}$ grows as mixed geometric modes $A\\alpha^{n}+B\\beta^{n}$; partial fractions separate the two mode curves whose sum is the sequence.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Recurring sequence as sum of two geometric modes"><line x1="60" y1="300" x2="700" y2="300" stroke="currentColor" stroke-width="1.3"/><line x1="80" y1="300" x2="80" y2="40" stroke="currentColor" stroke-width="1.2"/><circle cx="150" cy="270" r="3" fill="currentColor"/><circle cx="230" cy="250" r="3" fill="currentColor"/><circle cx="310" cy="220" r="3" fill="currentColor"/><circle cx="390" cy="175" r="3" fill="currentColor"/><circle cx="470" cy="120" r="3" fill="currentColor"/><circle cx="550" cy="60" r="3" fill="currentColor"/><path d="M150,270 C250,250 350,200 550,60" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 4"/><text x="560" y="80" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">mode sum</text><text x="150" y="325" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">seeds</text><text x="400" y="325" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">n</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Scale plus nth term',
        problem: 'Terms $2, 6, 16, 42$ begin a second order recurring series. Find the scale and $u_{n}$.',
        steps: [
          { label: 'Step 1', text: 'Assume $u_{3} = pu_{2}+qu_{1}$ and $u_{4} = pu_{3}+qu_{2}$:\n```text\n16 = 6p + 2q and 42 = 16p + 6q gives p = 2, q = 2\n```\nSolving yields $p = 2$ and $q = 2$.' },
          { label: 'Step 2', text: 'Generating denominator is $1-2x-2x^2 = (1-\\alpha x)(1-\\beta x)$ with $\\alpha, \\beta = 1\\pm\\sqrt{3}$.' },
          { label: 'Step 3', text: 'Partial fractions give $u_{n} = A\\alpha^{n}+B\\beta^{n}$ with $A, B$ from $u_{0}, u_{1}$ seeds, matching $2, 6, 16, 42$.' }
        ],
        result: 'Scale $u_{n} = 2u_{n-1}+2u_{n-2}$ with geometric mode sum.'
      },
      {
        title: 'Cover up decomposition',
        problem: 'Split $\\frac{3x+5}{(x-1)(x-2)}$ into partial fractions.',
        steps: [
          { label: 'Step 1', text: 'Write $\\frac{3x+5}{(x-1)(x-2)} = \\frac{A}{x-1}+\\frac{B}{x-2}$.' },
          { label: 'Step 2', text: 'Cover $(x-1)$ and put $x = 1$: $A = \\frac{8}{-1} = -8$. Cover $(x-2)$ and put $x = 2$: $B = \\frac{11}{1} = 11$.' },
          { label: 'Step 3', text: 'Check by recombining: $-8(x-2)+11(x-1) = 3x+5$ over the product.' }
        ],
        result: '$\\frac{-8}{x-1}+\\frac{11}{x-2}$.'
      }
    ],
    keyTakeaways: [
      'Scale $u_{n} = pu_{n-1}+qu_{n-2}$ matches denominator $1-px-qx^2$.',
      'Generating $\\frac{P(x)}{1-px-qx^2}$ stores the whole sequence.',
      'Cover up finds $A$ for distinct linear factors in one substitution.',
      'Repeated factors add ascending powers; quadratics need $Mx+N$.'
    ],
    quiz: [
      {
        q: 'Order of $u_{n} = 3u_{n-1}-2u_{n-2}+u_{n-3}$ is',
        options: [`$1$`, `$2$`, `$3$`, `$0$`],
        answer: 2,
        explanation: 'Step 1: Order counts predecessors used. Step 2: Furthest back is $u_{n-3}$. Step 3: Hence three predecessors. Step 4: So order $3$.'
      },
      {
        q: 'Cover up for $\\frac{5}{(x-1)(x-3)}$ gives $A$ for $\\frac{A}{x-1}$ as',
        options: [`$\\frac{5}{2}$`, `$-\\frac{5}{2}$`, `$5$`, `$-5$`],
        answer: 1,
        explanation: 'Step 1: Cover $(x-1)$. Step 2: Put $x = 1$ in the rest. Step 3: Get $\\frac{5}{1-3} = -\\frac{5}{2}$. Step 4: Hence the second option holds.'
      },
      // PYQ-pattern: nth term from partial fractions
      {
        q: 'If $U = \\frac{1}{1-2x}$ then $u_{n}$ equals',
        options: [`$n$`, `$2^{n}$`, `$n2^{n}$`, `$1$`],
        answer: 1,
        explanation: 'Step 1: Expand as geometric series. Step 2: Coefficient of $x^{n}$ is $2^{n}$. Step 3: Check $n = 0$ gives $1$. Step 4: Hence the second option holds.'
      },
      {
        q: 'Proper fraction for $\\frac{x^2+1}{(x-1)(x-2)}$ needs first',
        options: ['direct cover up', 'division to proper form', 'no split', 'log series'],
        answer: 1,
        explanation: 'Step 1: Numerator degree equals denominator degree. Step 2: Fraction is improper. Step 3: Divide first to get constant plus proper part. Step 4: Hence division first.'
      }
    ]
  },
  // ---------------------------------------------------------------- 13.4
  {
    sectionId: 'jeemaths-ch13-s4',
    readingTime: 7,
    intro: 'Compound interest grows as $(1+r)^{n}$ while annuities sum that growth over many payments. Continued fractions give best rational approximations through convergents. This section computes amounts with binomial help and approximates irrationals.',
    objectives: [
      'Compound principal with $(1+r)^{n}$ and expand by binomial for estimates',
      'Sum annuities as geometric series with present value formulas',
      'Form convergents $\\frac{p_{k}}{q_{k}}$ and bound approximation error'
    ],
    concepts: [
      {
        term: 'Compound amount',
        kind: 'definition',
        statement: 'A principal $P$ at rate $r$ per period grows to the **compound amount** `compound-amount` $A = P(1+r)^{n}$ after $n$ periods.',
        detail: 'Interest each period joins the principal, so growth is geometric. Binomial expansion gives $P(1+nr+\\cdots)$ for quick mental estimates when $r$ is small.'
      },
      {
        term: 'Annuity sum',
        kind: 'theorem',
        statement: 'Payments $R$ each period accumulate to **annuity amount** `annuity-sum` $R\\frac{(1+r)^{n}-1}{r}$ with present value $R\\frac{1-(1+r)^{-n}}{r}$.',
        detail: 'Each payment compounds for its remaining life, forming a geometric series. Present value discounts each future payment by $(1+r)^{-k}$.'
      },
      {
        term: 'Effective rate',
        kind: 'insight',
        statement: 'Nominal rate convertible $m$ times gives **effective growth** `effective-rate` $(1+\\frac{j}{m})^{m}-1$ per unit time.',
        detail: 'More frequent conversion raises the effective rate toward $e^{j}-1$ in the continuous limit. Comparing effective rates ranks competing offers fairly.'
      },
      {
        term: 'Continued fraction form',
        kind: 'definition',
        statement: 'A **continued fraction** `continued-form` $a_{0}+\\frac{1}{a_{1}+\\frac{1}{a_{2}+\\cdots}}$ with positive integers $a_{k}$ represents every real, terminating exactly for rationals.',
        detail: 'Partial quotients come from the Euclidean algorithm on numerator and denominator. Infinite continued fractions represent irrationals, periodic exactly for quadratic surds.'
      },
      {
        term: 'Convergent approximation',
        kind: 'theorem',
        statement: 'Truncations **convergents** `convergent-approx` $\\frac{p_{k}}{q_{k}}$ satisfy $\\left|x-\\frac{p_{k}}{q_{k}}\\right| < \\frac{1}{q_{k}q_{k+1}}$, giving best approximations.',
        detail: 'Convergents alternate around $x$ with growing denominators from $p_{k} = a_{k}p_{k-1}+p_{k-2}$. Each convergent beats every fraction with smaller denominator in closeness.'
      }
    ],
    figures: [
      {
        caption: 'Compound steps $P(1+r)^{n}$ rise geometrically while annuity bars stack discounted payments; convergents $\\frac{p_{k}}{q_{k}}$ bracket $x$ from alternate sides.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Compound growth curve with annuity bars and convergent brackets"><line x1="60" y1="300" x2="700" y2="300" stroke="currentColor" stroke-width="1.3"/><line x1="80" y1="300" x2="80" y2="40" stroke="currentColor" stroke-width="1.2"/><path d="M90,290 C220,280 330,230 450,160 C540,110 600,80 660,60" fill="none" stroke="currentColor" stroke-width="2"/><rect x="150" y="260" width="30" height="40" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="220" y="240" width="30" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="290" y="215" width="30" height="85" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="400" y="120" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">compound curve</text><text x="220" y="325" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">annuity bars</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Amount plus binomial estimate',
        problem: 'Find the amount of $1000$ in $3$ years at $5$ percent compound, with a linear check.',
        steps: [
          { label: 'Step 1', text: 'Exact:\n```text\nA = 1000 times 1.05^3 = 1000 times 1.157625 = 1157.63\n```\nIn symbols $A = 1000(1.05)^3 \\approx 1157.63$.' },
          { label: 'Step 2', text: 'Binomial estimate $1000(1+3(0.05)+3(0.05)^2) = 1157.50$, within cents of exact.' },
          { label: 'Step 3', text: 'Simple interest would give only $1150$, so compounding adds about $7.63$.' }
        ],
        result: 'Amount about $1157.63$.'
      },
      {
        title: 'Convergent for root two',
        problem: 'Give convergents of $\\sqrt{2} = [1;2,2,2,\\ldots]$ to $\\frac{17}{12}$ and bound the error.',
        steps: [
          { label: 'Step 1', text: 'Recurrence gives $\\frac{1}{1}$, $\\frac{3}{2}$, $\\frac{7}{5}$, $\\frac{17}{12}$ in order.' },
          { label: 'Step 2', text: 'Error below $\\frac{1}{12 \\cdot 29} < 0.003$ using next denominator $29$.' },
          { label: 'Step 3', text: 'Indeed $\\frac{17}{12} \\approx 1.4167$ against $1.4142$, inside the bound.' }
        ],
        result: '$\\frac{17}{12}$ approximates $\\sqrt{2}$ within $0.003$.'
      }
    ],
    keyTakeaways: [
      '$A = P(1+r)^{n}$ compounds with binomial estimates for small $r$.',
      'Annuity $R\\frac{(1+r)^{n}-1}{r}$ sums geometric payments.',
      'Effective $(1+\\frac{j}{m})^{m}-1$ compares conversion frequencies.',
      'Convergents obey $|x-\\frac{p_{k}}{q_{k}}| < \\frac{1}{q_{k}q_{k+1}}$.'
    ],
    quiz: [
      {
        q: 'Amount of $P$ at $r$ for $n$ periods is',
        options: [`$P(1+r)^{n}$`, `$P(1+nr)$`, `$P(1-r)^{n}$`, `$Pr^{n}$`],
        answer: 0,
        explanation: 'Step 1: Each period multiplies by $1+r$. Step 2: Repeating $n$ times powers the factor. Step 3: Simple $1+nr$ ignores compounding. Step 4: Hence the first option holds.'
      },
      // PYQ-pattern: annuity present value
      {
        q: 'Present value of $R$ per period for $n$ periods at $r$ is',
        options: [`$R\\frac{(1+r)^{n}-1}{r}$`, `$nR$`, `$R\\frac{1-(1+r)^{-n}}{r}$`, `$R(1+r)^{n}$`],
        answer: 2,
        explanation: 'Step 1: Discount each payment by $(1+r)^{-k}$. Step 2: Sum geometric series to $n$ terms. Step 3: Closed form is $R\\frac{1-(1+r)^{-n}}{r}$. Step 4: Hence the third option holds.'
      },
      {
        q: 'Convergents of a continued fraction',
        options: ['diverge from $x$', 'equal $x$ always', 'ignore denominators', 'give best approximations to $x$'],
        answer: 3,
        explanation: 'Step 1: Truncations approach $x$ alternately. Step 2: Error bound uses $q_{k}q_{k+1}$. Step 3: No smaller denominator beats them. Step 4: Hence best approximations, the fourth option.'
      },
      {
        q: 'Rational numbers have continued fractions that',
        options: ['never terminate', 'need infinite terms', 'use zero quotients', 'terminate'],
        answer: 3,
        explanation: 'Step 1: Euclidean algorithm finishes for integers. Step 2: Quotients become the partial list. Step 3: Hence finite length. Step 4: So they terminate, the fourth option.'
      }
    ]
  }
]
