import type { SectionContent } from '../library'

// ============================================================================
// Mathematics Companion — Quadratic Equations and Expressions (2.1 - 2.4)
// Master study content. Discriminant, Vieta maps, range bounds, shared roots
// and interval location of roots.
// ============================================================================

export const mathCompanionCh02Content: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: 'math-a2-s11',
    readingTime: 7,
    intro: 'The discriminant $D = b^2 - 4ac$ decides the nature of the roots of $ax^2 + bx + c = 0$ at a glance. Its sign separates real distinct, real equal and nonreal conjugate pairs, while its perfect-square character controls rationality. This section turns $D$ into a reliable first move for every quadratic question.',
    objectives: [
      'Classify roots from $D = b^2 - 4ac$ and write the quadratic formula with the correct square-root branch',
      'Distinguish real, equal, rational and nonreal cases including the $a = 0$ linear degeneration',
      'Read the sign of $a$ and $D$ from a parabola sketch and bound roots between integers'
    ],
    concepts: [
      {
        term: 'Quadratic formula',
        kind: 'theorem',
        statement: 'For $a \\ne 0$, the **roots** are `x = (-b +- sqrt(D)) / (2a)` with $D = b^2 - 4ac$, namely $x = \\frac{-b \\pm \\sqrt{D}}{2a}$.',
        detail: 'Completing the square gives $a(x + \\frac{b}{2a})^2 = \\frac{D}{4a}$. When $D < 0$ the square root is imaginary and the two roots are conjugates $\\alpha \\pm i\\beta$.'
      },
      {
        term: 'Discriminant trichotomy',
        kind: 'law',
        statement: 'With real coefficients, **$D > 0$** gives `two distinct real roots`, **$D = 0$** gives `one repeated real root`, and **$D < 0$** gives `a nonreal conjugate pair`.',
        detail: 'Repeated root equals $-\\frac{b}{2a}$ with multiplicity two. The nonreal case never meets the $x$-axis, so the quadratic keeps one strict sign throughout.'
      },
      {
        term: 'Rationality via square discriminant',
        kind: 'insight',
        statement: 'Real roots are **rational iff** `D is a nonnegative perfect square` up to a rational factor, for rational $a, b, c$.',
        detail: 'For integer coefficients, $D = k^2$ with integer $k \\ge 0$ makes both roots rational; otherwise an irrational $\\sqrt{D}$ survives. Equal rational roots correspond to $D = 0$.'
      },
      {
        term: 'Linear degeneration',
        kind: 'law',
        statement: 'If **$a = 0$** then `ax^2 + bx + c = 0` is not quadratic: $bx + c = 0$ has one root $x = -\\frac{c}{b}$ for $b \\ne 0$.',
        detail: 'For parameter problems always split cases $a = 0$ and $a \\ne 0$ first. Ignoring the linear branch loses solutions, while $a = b = 0$ leaves either no solution or an identity depending on $c$.'
      },
      {
        term: 'Graphical reading',
        kind: 'insight',
        statement: 'The parabola **opens upward for `a > 0`** and downward for `a < 0`, meeting the axis twice, once or never exactly as $D > 0$, $D = 0$ or $D < 0$.',
        detail: 'Vertex at $x = -\\frac{b}{2a}$ with value $-\\frac{D}{4a}$. Hence $a > 0$ with $D < 0$ means the expression is always positive, and $a < 0$ with $D < 0$ means always negative.'
      }
    ],
    derivations: [
      {
        title: 'Quadratic Formula by Completing the Square',
        statement: 'Derivation of $x = \\frac{-b \\pm \\sqrt{b^{2}-4ac}}{2a}$ for $ax^{2} + bx + c = 0$ with $a \\ne 0$',
        prerequisites: [
          'Division by nonzero $a$ preserves the solution set',
          'Square identity $\\left(x + k\\right)^{2} = x^{2} + 2kx + k^{2}$',
          'Square roots of both sides introduce $\\pm$ branches',
        ],
        steps: [
          {
            label: 'Step 1: Normalise the leading coefficient',
            formula: '$$x^{2} + \\frac{b}{a}x + \\frac{c}{a} = 0$$',
            explanation: 'Divide every term by $a$, which is legal exactly because $a \\ne 0$ is assumed. This works because scaling an equation by a nonzero constant neither creates nor destroys solutions. The monic form isolates the $x^{2} + 2kx$ pattern needed next.',
          },
          {
            label: 'Step 2: Complete the square in $x$',
            formula: '$$\\left(x + \\frac{b}{2a}\\right)^{2} = \\frac{b^{2} - 4ac}{4a^{2}}$$',
            explanation: 'Add and subtract $\\left(\\frac{b}{2a}\\right)^{2}$ so the $x$ terms fold into a single squared bracket, then move constants right. This works because the square identity runs reversibly, turning a sum into one perfect square plus a remainder. The discriminant $D = b^{2} - 4ac$ emerges as the numerator on the right.',
          },
          {
            label: 'Step 3: Take square roots with both signs',
            formula: '$$x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^{2}-4ac}}{2a}$$',
            explanation: 'Apply the square root to both sides, keeping both $+$ and $-$ branches since both square to the same value. This works because $u^{2} = v$ forces $u = \\pm \\sqrt{v}$ over complex numbers, with the sign of $a$ absorbed into the denominator. Dropping either sign would lose half the solutions.',
          },
          {
            label: 'Step 4: Isolate $x$ to read the formula',
            formula: '$$x = \\frac{-b \\pm \\sqrt{b^{2}-4ac}}{2a}$$',
            explanation: 'Subtract $\\frac{b}{2a}$ from both sides, which shifts the centred variable back to $x$. This works because translation preserves the two-branch structure while exposing the familiar $-b$ lead. The result expresses both roots directly from the coefficients $a$ and $b$ and $c$.',
          },
        ],
        result: 'For $a \\ne 0$, $x = \\frac{-b \\pm \\sqrt{b^{2}-4ac}}{2a}$, meaning completing the square converts any quadratic into a directly readable shifted square.',
      },
    ],
    examples: [
      {
        title: 'Parameter for equal roots',
        problem: 'Find $k$ such that $x^2 + (k+1)x + 9 = 0$ has equal roots, and write the root.',
        steps: [
          { label: 'Step 1', text: '```text\nD = (k+1)^2 - 36 = 0  =>  k+1 = +-6\n```\nEqual roots need $D = 0$: $(k+1)^2 - 4 \\cdot 1 \\cdot 9 = 0$, so $(k+1)^2 = 36$.' },
          { label: 'Step 2', text: 'Thus $k + 1 = 6$ or $k + 1 = -6$, giving $k = 5$ or $k = -7$. Both keep $a = 1 \\ne 0$, so no linear branch intrudes.' },
          { label: 'Step 3', text: 'Repeated root is $x = -\\frac{b}{2a} = -\\frac{k+1}{2}$. For $k = 5$ this is $x = -3$; for $k = -7$ it is $x = 3$. Each indeed solves $(x+3)^2 = 0$ or $(x-3)^2 = 0$.' }
        ],
        result: '$k = 5$ with double root $-3$, or $k = -7$ with double root $3$.'
      },
      {
        title: 'Nonreal pair and its modulus',
        problem: 'Show $x^2 + x + 1 = 0$ has nonreal roots and find $|x|$ for each root.',
        steps: [
          { label: 'Step 1', text: '```text\nD = 1 - 4 = -3 < 0  => conjugate pair, product = c/a = 1\n```\nDiscriminant $D = 1 - 4 = -3 < 0$, so roots are conjugates $\\frac{-1 \\pm i\\sqrt{3}}{2}$.' },
          { label: 'Step 2', text: 'Product of roots is $\\frac{c}{a} = 1$. For conjugates $z, \\bar{z}$ the product is $|z|^2$, so $|z|^2 = 1$.' },
          { label: 'Step 3', text: 'Hence each root has modulus $1$. Indeed these are the nonreal cube roots of unity $\\omega, \\omega^2$, with $|\\omega| = 1$.' }
        ],
        result: 'Roots $\\frac{-1 \\pm i\\sqrt{3}}{2}$ with $|x| = 1$ each.'
      }
    ],
    keyTakeaways: [
      '$D = b^2 - 4ac$ gives two, one or no real roots as $D > 0$, $D = 0$ or $D < 0$.',
      'Rational coefficients give rational roots exactly when $D$ is a nonnegative square.',
      'Always test $a = 0$ separately: the equation can collapse to linear.',
      'Sign of $a$ plus sign of $D$ fixes the parabola position and the sign of the expression.'
    ],
    quiz: [
      {
        q: 'Roots of $2x^2 + 3x + 4 = 0$ are',
        options: [`$\\text{real and distinct}$`, `$\\text{real and equal}$`, `$\\text{nonreal conjugates}$`, `$\\text{one real, one nonreal}$`],
        answer: 2,
        explanation: 'Step 1: Compute $D = 9 - 32 = -23 < 0$. Step 2: Negative discriminant with real coefficients forces a conjugate pair. Step 3: Mixed real-nonreal cannot occur for real quadratics. Step 4: Equal roots would need $D = 0$.'
      },
      {
        q: 'For rational coefficients, both roots rational exactly when',
        options: [`$D > 0$`, '$D \\ge 0$ and $D$ is a perfect square', `$D < 0$`, `$a$ divides $c$`],
        answer: 1,
        explanation: 'Step 1: The formula has $\\sqrt{D}$ over $2a$. Step 2: Rationality needs $\\sqrt{D}$ rational, hence $D$ a nonnegative square. Step 3: Positive but nonsquare $D$ gives irrational conjugate surds. Step 4: Divisibility of $c$ by $a$ governs integer-root tests, not rationality alone.'
      },
      // PYQ-pattern: discriminant-sign classification drill
      {
        q: 'If $a > 0$ and $D < 0$, then $ax^2 + bx + c$ is',
        options: [`$\\text{always negative}$`, `$\\text{always positive}$`, `$\\text{zero for two } x$`, `$\\text{zero for one } x$`],
        answer: 1,
        explanation: 'Step 1: $D < 0$ means no real zeros, so the graph never touches the axis. Step 2: Upward opening $a > 0$ places the vertex above the axis. Step 3: Hence every value is positive. Step 4: Zeros would require $D \\ge 0$.'
      },
      {
        q: '$x^2 + kx + 4 = 0$ has equal roots. Possible $k$ values are',
        options: ['$4$ only', '$-4$ only', `$4$ or $-4$`, `$0$`],
        answer: 2,
        explanation: 'Step 1: Set $D = k^2 - 16 = 0$. Step 2: Then $k^2 = 16$. Step 3: So $k = 4$ or $k = -4$. Step 4: Both give valid quadratics with double roots $-2$ and $2$ respectively.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Discriminants resultants and root separation',
        blocks: [
          {
            kind: 'theorem',
            body: 'For $f(x) = ax^{2} + bx + c$ with $a \\ne 0$ and roots $r_{1}$ and $r_{2}$, the **discriminant** satisfies $D = b^{2} - 4ac = a^{2}(r_{1} - r_{2})^{2}$. Hence $D > 0$ gives two distinct real roots, $D = 0$ gives a double real root, and $D < 0$ gives a nonreal conjugate pair. At the graduate level $D$ is the resultant of $f$ and its derivative up to a factor, namely $D = -(1/a)\\mathrm{Res}(f, f^{\\prime})$, so vanishing of $D$ is exactly the condition that $f$ and $f^{\\prime}$ share a root. The sign of $D$ therefore controls root separation $|r_{1} - r_{2}| = \\sqrt{|D|}/|a|$.'
          },
          {
            kind: 'proof',
            body: 'Write $f(x) = a(x - r_{1})(x - r_{2})$ so $b = -a(r_{1} + r_{2})$ and $c = ar_{1}r_{2}$. Direct expansion gives $b^{2} - 4ac = a^{2}(r_{1} + r_{2})^{2} - 4a^{2}r_{1}r_{2} = a^{2}(r_{1} - r_{2})^{2}$. Since $f^{\\prime}(x) = 2ax + b$ vanishes at the midpoint $m = (r_{1} + r_{2})/2$, the shared root condition $f(m) = 0$ forces $r_{1} = r_{2}$, equivalently $D = 0$. For real coefficients nonreal roots conjugate, so $(r_{1} - r_{2})^{2}$ is negative exactly when the pair is nonreal, giving the sign dictionary. The separation formula follows by taking square roots.'
          },
          {
            kind: 'example',
            heading: 'Repeated root detected without solving',
            body: 'Consider $f(x) = x^{2} + kx + 4$ with parameter $k$. Instead of solving, compute $D = k^{2} - 16 = (k-4)(k+4)$. The resultant reading says $f$ and $f^{\\prime}(x) = 2x + k$ share a root exactly at $k = 4$ or $k = -4$, with shared roots $x = -2$ and $x = 2$ respectively. For $|k| > 4$ the separation is $\\sqrt{k^{2}-16}$, which grows linearly in $|k|$ for large $|k|$, while for $|k| < 4$ the two roots form a conjugate pair symmetric about $-k/2$. Thus the single number $D$ determines existence, multiplicity and geometric spacing of the roots.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 2.2
  {
    sectionId: 'math-a2-s12',
    readingTime: 8,
    intro: 'Vieta relations bind the sum and product of roots to the coefficients: $\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$. Symmetric functions of roots then reduce to these two numbers without solving. This section builds equations from root data and evaluates symmetric sums directly.',
    objectives: [
      'Write $\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$ and recover $a, b, c$ ratios from root data',
      'Evaluate $\\alpha^2 + \\beta^2$, $\\alpha^3 + \\beta^3$ and $|\\alpha - \\beta|$ via $(\\alpha+\\beta)^2 - 4\\alpha\\beta$',
      'Frame a new quadratic from transformed roots such as $2\\alpha + 1$ or $\\frac{1}{\\alpha}$'
    ],
    concepts: [
      {
        term: 'Vieta sum and product',
        kind: 'theorem',
        statement: 'For $ax^2+bx+c = 0$ with roots **$\\alpha, \\beta$**, `sum = -b/a` and `product = c/a` give $\\alpha+\\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$.',
        detail: 'These follow from $a(x-\\alpha)(x-\\beta) = ax^2 - a(\\alpha+\\beta)x + a\\alpha\\beta$. Signs are the main trap: the sum carries the minus sign.'
      },
      {
        term: 'Framing from roots',
        kind: 'method',
        statement: 'Roots $\\alpha, \\beta$ give the **equation** `x^2 - S x + P = 0` where $S = \\alpha+\\beta$ and $P = \\alpha\\beta$.',
        detail: 'Any nonzero multiple is the same equation: $x^2 - Sx + P = 0$ is monic, while $a \\ne 0$ arbitrary gives $ax^2 - aSx + aP = 0$. Use this to build equations with roots $\\alpha+1$, $2\\alpha$ or $\\frac{1}{\\alpha}$ by computing the new $S$ and $P$.'
      },
      {
        term: 'Power sums',
        kind: 'method',
        statement: 'Higher sums reduce via **$S$ and $P$**: `alpha^2 + beta^2 = S^2 - 2P` so $\\alpha^2+\\beta^2 = S^2 - 2P$ and $\\alpha^3+\\beta^3 = S^3 - 3SP$.',
        detail: 'Also $\\frac{1}{\\alpha}+\\frac{1}{\\beta} = \\frac{S}{P}$ and $\\alpha^2\\beta + \\alpha\\beta^2 = SP$. Never solve for $\\alpha, \\beta$ individually when only a symmetric combination is wanted.'
      },
      {
        term: 'Difference and its modulus',
        kind: 'theorem',
        statement: 'The squared difference is **$(\\alpha-\\beta)^2 = S^2-4P$** with `|alpha - beta| = sqrt(D)/|a|`, since $S^2 - 4P = \\frac{D}{a^2}$.',
        detail: 'Hence $|\\alpha-\\beta| = \\frac{\\sqrt{D}}{|a|}$ for $D \\ge 0$. The sign of $\\alpha - \\beta$ needs ordering (say $\\alpha > \\beta$); the modulus form avoids the choice.'
      },
      {
        term: 'Sign reading from Vieta',
        kind: 'insight',
        statement: 'For real roots, **$P < 0$** with `product negative` forces opposite signs, while $P > 0$ with `S > 0` forces both positive.',
        detail: 'Precisely: $P < 0$ gives one positive and one negative root; $P = 0$ gives a zero root; $P > 0, S > 0, D \\ge 0$ gives two positive roots; $P > 0, S < 0, D \\ge 0$ gives two negative roots.'
      }
    ],
    examples: [
      {
        title: 'Symmetric sum without solving',
        problem: 'Roots of $x^2 - 5x + 6 = 0$ are $\\alpha, \\beta$. Find $\\alpha^2 + \\beta^2$ and $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$.',
        steps: [
          { label: 'Step 1', text: '```text\nS = 5, P = 6 from x^2 - S x + P comparison\n```\nRead $S = 5$ and $P = 6$ directly from Vieta without factoring.' },
          { label: 'Step 2', text: 'Then $\\alpha^2+\\beta^2 = S^2 - 2P = 25 - 12 = 13$. Separately $\\frac{1}{\\alpha}+\\frac{1}{\\beta} = \\frac{\\alpha+\\beta}{\\alpha\\beta} = \\frac{S}{P} = \\frac{5}{6}$.' },
          { label: 'Step 3', text: 'Check by actual roots $2, 3$: $4 + 9 = 13$ and $\\frac{1}{2}+\\frac{1}{3} = \\frac{5}{6}$. Solving was unnecessary but confirms the reduction.' }
        ],
        result: '$\\alpha^2+\\beta^2 = 13$ and reciprocal sum $\\frac{5}{6}$.'
      },
      {
        title: 'New equation from shifted roots',
        problem: 'Frame the quadratic whose roots are $\\alpha+1$ and $\\beta+1$, where $\\alpha, \\beta$ are roots of $x^2 - 3x + 2 = 0$.',
        steps: [
          { label: 'Step 1', text: '```text\nnew S = (a+1)+(b+1) = S_old + 2; new P = P_old + S_old + 1\n```\nOld $S = 3$, $P = 2$. New sum $S_1 = (\\alpha+1)+(\\beta+1) = S + 2 = 5$.' },
          { label: 'Step 2', text: 'New product $P_1 = (\\alpha+1)(\\beta+1) = P + S + 1 = 2 + 3 + 1 = 6$.' },
          { label: 'Step 3', text: 'Hence $x^2 - S_1x + P_1 = x^2 - 5x + 6 = 0$. Roots check: old roots $1, 2$ shift to $2, 3$, which indeed solve the new equation.' }
        ],
        result: '$x^2 - 5x + 6 = 0$ with roots $2$ and $3$.'
      }
    ],
    keyTakeaways: [
      '$\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$ carry all symmetric data of the pair.',
      'Every symmetric polynomial in $\\alpha, \\beta$ is a polynomial in $S$ and $P$ alone.',
      '$|\\alpha - \\beta| = \\frac{\\sqrt{D}}{|a|}$ links Vieta to the discriminant directly.',
      'Sign of $P$ splits opposite-sign from same-sign pairs; sign of $S$ then fixes all-positive versus all-negative.'
    ],
    quiz: [
      {
        q: 'Roots of $3x^2 - 5x + 2 = 0$ have sum and product',
        options: [`$S = 5, P = 2$`, `$S = \\frac{5}{3}, P = \\frac{2}{3}$`, `$S = -\\frac{5}{3}, P = \\frac{2}{3}$`, `$S = \\frac{5}{3}, P = -\\frac{2}{3}$`],
        answer: 1,
        explanation: 'Step 1: $S = -\\frac{b}{a} = \\frac{5}{3}$. Step 2: $P = \\frac{c}{a} = \\frac{2}{3}$. Step 3: The sign trap is dropping the minus in $-\\frac{b}{a}$. Step 4: Numerator-denominator swaps give the remaining distractors.'
      },
      // PYQ-pattern: symmetric-sum reduction drill
      {
        q: 'If $\\alpha + \\beta = 4$ and $\\alpha\\beta = 3$, then $\\alpha^2 + \\beta^2$ equals',
        options: [`$10$`, `$7$`, `$16$`, `$13$`],
        answer: 0,
        explanation: 'Step 1: Recall $\\alpha^2+\\beta^2 = S^2-2P$. Step 2: Substitute $S = 4$, $P = 3$. Step 3: Get $16 - 6 = 10$. Step 4: Option $7$ is $S^2-P$ and $13$ is $S^2-2$ style slips.'
      },
      {
        q: 'Quadratic with roots $5$ and $-2$ is',
        options: [`$x^2 - 3x - 10 = 0$`, `$x^2 + 3x - 10 = 0$`, `$x^2 - 3x + 10 = 0$`, `$x^2 + 3x + 10 = 0$`],
        answer: 0,
        explanation: 'Step 1: Sum $S = 3$, product $P = -10$. Step 2: Monic form $x^2 - Sx + P = 0$. Step 3: Hence $x^2 - 3x - 10 = 0$. Step 4: Flipped signs give the other three options.'
      },
      {
        q: 'If $\\alpha, \\beta$ are real with $\\alpha\\beta < 0$, then',
        options: [`$\\text{both positive}$`, `$\\text{both negative}$`, `$\\text{opposite signs}$`, `$\\text{both zero}$`],
        answer: 2,
        explanation: 'Step 1: Product negative means the factors have unlike signs. Step 2: So one root is positive and one negative. Step 3: Zero product would be needed for a zero root. Step 4: Same-sign pairs always give $P > 0$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.3
  {
    sectionId: 'math-a2-s13',
    readingTime: 8,
    intro: 'Completing the square rewrites $ax^2+bx+c$ as $a(x-h)^2 + k$ with vertex $(h,k)$ read off directly. That vertex is the global maximum or minimum, and its value decides the sign of the expression for all $x$. This section converts range questions into vertex evaluations.',
    objectives: [
      'Complete the square to $a(x + \\frac{b}{2a})^2 + (c - \\frac{b^2}{4a})$ and locate the vertex',
      'Decide when $ax^2+bx+c > 0$ or $< 0$ for all real $x$ via $a$ and $D$',
      'Find maxima, minima and ranges on intervals including restricted domains'
    ],
    concepts: [
      {
        term: 'Completed square',
        kind: 'method',
        statement: 'Every quadratic is **$a(x-h)^2 + k$** with `h = -b/(2a)` and $k = c - \\frac{b^2}{4a} = -\\frac{D}{4a}$.',
        detail: 'Derivation: $ax^2+bx+c = a(x+\\frac{b}{2a})^2 + c-\\frac{b^2}{4a}$. The vertex $(h,k)$ is the turning point, and the axis is the vertical line $x = h$.'
      },
      {
        term: 'Vertex extremum',
        kind: 'theorem',
        statement: 'For $a > 0$ the vertex is the **global minimum** `min = k`, and for $a < 0$ it is the **global maximum** `max = k`.',
        detail: 'Since $(x-h)^2 \\ge 0$, multiplying by $a$ preserves or reverses the inequality according to the sign of $a$. No other critical point exists for a quadratic.'
      },
      {
        term: 'Always-positive test',
        kind: 'law',
        statement: 'The expression keeps **one sign for all $x$ iff `D < 0`**, positive when `a > 0, D < 0` and negative when `a < 0, D < 0`.',
        detail: 'If $D \\ge 0$ there is at least one real zero, so the sign must change or touch zero. The pair $(a, D)$ is therefore the complete sign certificate.'
      },
      {
        term: 'Range on an interval',
        kind: 'method',
        statement: 'On $[p,q]$, candidates are **$f(p)$, $f(q)$ and `f(h)` if $h$ lies inside**, with the largest as maximum and smallest as minimum.',
        detail: 'Monotonicity holds on each side of $h$, so interior extrema can only occur at $h$. Forgetting to test $h$ when it lies inside is the standard range slip.'
      },
      {
        term: 'Bounding by discriminant',
        kind: 'insight',
        statement: 'Requiring $y = f(x)$ attainable leads to **$D_y \\ge 0$** with `discriminant in x nonnegative`, a second route to the range of rational functions of quadratics.',
        detail: 'For instance $y = \\frac{x^2+1}{x^2+x+1}$ cross-multiplied gives a quadratic in $x$ whose discriminant in $x$ must be nonnegative, cutting out the exact $y$-interval.'
      }
    ],
    examples: [
      {
        title: 'Minimum and always-positive check',
        problem: 'Find the minimum of $2x^2 - 8x + 11$ and decide its sign for all real $x$.',
        steps: [
          { label: 'Step 1', text: '```text\n2x^2 - 8x + 11 = 2(x - 2)^2 + 3; D = 64 - 88 < 0\n```\nComplete: $2(x^2-4x) + 11 = 2(x-2)^2 - 8 + 11 = 2(x-2)^2 + 3$.' },
          { label: 'Step 2', text: 'Since $a = 2 > 0$, the vertex $(2,3)$ is the global minimum with value $3$. Equivalently $D = 64 - 88 = -24 < 0$ with $a > 0$.' },
          { label: 'Step 3', text: 'Minimum $3 > 0$ forces the expression always positive. The equation $2x^2-8x+11 = 0$ has no real solution, consistent with $D < 0$.' }
        ],
        result: 'Minimum $3$ at $x = 2$; expression positive for every real $x$.'
      },
      {
        title: 'Range on a closed interval',
        problem: 'Find the range of $f(x) = -x^2 + 4x + 1$ on $[0, 5]$.',
        steps: [
          { label: 'Step 1', text: '```text\nvertex h = 2 inside [0,5]; candidates f(0), f(2), f(5)\n```\nVertex $h = -\\frac{4}{2(-1)} = 2$ lies inside, with $f(2) = -4 + 8 + 1 = 5$.' },
          { label: 'Step 2', text: 'Endpoints: $f(0) = 1$ and $f(5) = -25 + 20 + 1 = -4$. Since $a < 0$, the vertex is the maximum.' },
          { label: 'Step 3', text: 'Hence maximum $5$, minimum $-4$, and by continuity every intermediate value occurs. Range is $[-4, 5]$.' }
        ],
        result: 'Maximum $5$ at $x = 2$, minimum $-4$ at $x = 5$; range $[-4,5]$.'
      }
    ],
    keyTakeaways: [
      '$ax^2+bx+c = a(x+\\frac{b}{2a})^2 - \\frac{D}{4a}$ exposes vertex and extremum together.',
      'Global minimum for $a > 0$, global maximum for $a < 0$, at $x = -\\frac{b}{2a}$.',
      'One strict sign for all $x$ exactly when $D < 0$, with the sign equal to the sign of $a$.',
      'On $[p,q]$ compare $f(p)$, $f(q)$ and $f(h)$ when $h$ falls inside; continuity fills the rest.'
    ],
    quiz: [
      {
        q: 'Minimum of $x^2 - 6x + 11$ is',
        options: [`$11$`, `$3$`, `$2$`, `$0$`],
        answer: 2,
        explanation: 'Step 1: Complete to $(x-3)^2 + 2$. Step 2: Vertex at $x = 3$ with value $2$. Step 3: Since $a > 0$ this is the global minimum. Step 4: Option $3$ is the $x$-coordinate, not the value.'
      },
      {
        q: '$3x^2 + 2x + 5$ for all real $x$ is',
        options: [`$\\text{always negative}$`, `$\\text{always positive}$`, `$\\text{sometimes zero}$`, `$\\text{zero for two } x$`],
        answer: 1,
        explanation: 'Step 1: $D = 4 - 60 = -56 < 0$. Step 2: No real zeros exist. Step 3: Leading $a = 3 > 0$ opens upward. Step 4: Hence always positive.'
      },
      // PYQ-pattern: interval-range vertex check
      {
        q: 'Maximum of $-2x^2 + 8x - 3$ occurs at',
        options: [`$x = -2$`, `$x = 2$`, `$x = 4$`, `$x = 8$`],
        answer: 1,
        explanation: 'Step 1: Vertex $h = -\\frac{8}{2(-2)} = 2$. Step 2: Since $a < 0$ this is the maximum point. Step 3: Value there is $-8 + 16 - 3 = 5$. Step 4: Other options are axis reflections or coefficient slips.'
      },
      {
        q: 'On $[1,4]$, $f(x) = x^2 - 2x + 2$ has minimum',
        options: [`$2$`, `$1$`, `$10$`, `$5$`],
        answer: 1,
        explanation: 'Step 1: Vertex $h = 1$ lies at the left endpoint. Step 2: Values $f(1) = 1$ and $f(4) = 10$. Step 3: Parabola rises for $x > 1$, so minimum is $f(1) = 1$. Step 4: Global vertex value and endpoint value coincide here.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Completing squares and extremal quadratic forms',
        blocks: [
          {
            kind: 'theorem',
            body: 'Every real quadratic admits the **vertex form** $ax^{2} + bx + c = a(x - h)^{2} + k$ with $h = -b/(2a)$ and $k = c - b^{2}/(4a)$. When $a > 0$ the value $k$ is the sharp global minimum and when $a < 0$ it is the sharp global maximum, attained uniquely at $x = h$. Moreover $ax^{2} + bx + c \\ge 0$ for all real $x$ exactly when $a > 0$ and $b^{2} - 4ac \\le 0$. The constant $k$ is therefore best possible: no larger lower bound works for $a > 0$, and the extremal case $D = 0$ gives a perfect square touching zero at $h$.'
          },
          {
            kind: 'derivation',
            body: 'Factor $a$ and complete the square inside: $ax^{2} + bx + c = a(x^{2} + (b/a)x) + c = a(x + b/(2a))^{2} - b^{2}/(4a) + c$. The squared term is always nonnegative, so its minimum $0$ at $x = -b/(2a)$ forces the extremum $k = c - b^{2}/(4a)$. On a closed interval $[p, q]$ the same formula localizes the minimum: if $h$ lies inside then the minimum is $k$, otherwise the quadratic is monotone on the interval and the minimum sits at whichever endpoint is closer to $h$. This is the one dimensional prototype of positive definite forms attaining their extrema at critical points.'
          },
          {
            kind: 'example',
            heading: 'Constrained minimum with vertex outside the interval',
            body: 'Minimize $f(x) = x^{2} - 2x + 2$ on $[1, 4]$. Vertex form gives $f(x) = (x-1)^{2} + 1$ with global minimizer $h = 1$ and sharp value $k = 1$. Since $h$ is the left endpoint, $f$ increases for $x > 1$ and the constrained minimum $1$ coincides with the global one, while the maximum $10$ occurs at $x = 4$. Shifting the interval to $[2, 4]$ would move the minimum to $f(2) = 2$ at the nearer endpoint, illustrating the general rule that the vertex governs interior extrema and distance to the vertex governs boundary extrema.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 2.4
  {
    sectionId: 'math-a2-s14',
    readingTime: 9,
    intro: 'Two quadratics share a root exactly when their resultant vanishes, and a single quadratic keeps its roots on prescribed sides of given numbers under explicit inequality systems. These are the common-root and location-of-roots problems. This section states each condition sharply and shows how to avoid extraneous candidates.',
    objectives: [
      'Apply the common-root condition via subtraction and verify candidates in both equations',
      'Write location conditions with $D$, $af(k)$ and vertex position for roots relative to $k$ or $[k_1,k_2]$',
      'Handle edge cases of equal roots, zero leading coefficients and boundary equality'
    ],
    concepts: [
      {
        term: 'Common root by subtraction',
        kind: 'method',
        statement: 'If $\\alpha$ is **common** to `f1 = 0` and `f2 = 0`, then it meets any combination $f_1 - f_2 = 0$, usually linear, whose value is then tested back.',
        detail: 'Subtract to kill $x^2$ and solve the linear remainder for $\\alpha$, then substitute into either original. Unverified linear values can be extraneous when the subtraction is identically zero (proportional equations).'
      },
      {
        term: 'Resultant condition',
        kind: 'theorem',
        statement: 'Quadratics $a_1x^2+b_1x+c_1$ and $a_2x^2+b_2x+c_2$ share a root iff **$(a_1c_2-a_2c_1)^2 = (a_1b_2-a_2b_1)(b_1c_2-b_2c_1)$** with `not all differences zero`.',
        detail: 'This determinant-style condition is efficient for parameters. When all three differences vanish the equations are proportional with two shared roots (or none if inconsistent constants).'
      },
      {
        term: 'Both roots on one side',
        kind: 'law',
        statement: 'Roots of $f$ both exceed $k$ iff **`D \\ge 0`, $h > k$ and `a f(k) > 0`** hold together.',
        detail: 'Here $h = -\\frac{b}{2a}$ is the axis. The three clauses are independent: $D$ gives reality, $h$ centres correctly, and $af(k) > 0$ puts $k$ outside the interval between roots on the right side.'
      },
      {
        term: 'Roots straddling a number',
        kind: 'law',
        statement: 'The number $k$ lies **strictly between the roots iff `a f(k) < 0`**, with no need for $D$ or $h$.',
        detail: 'Since $f(k)$ and $a$ have opposite signs, the parabola must cross the axis on both sides of $k$. Non-strict $af(k) \\le 0$ allows $k$ itself as a root.'
      },
      {
        term: 'Roots inside an interval',
        kind: 'law',
        statement: 'Both roots in $(k_1,k_2)$ iff **`D \\ge 0`, $k_1 < h < k_2$, `a f(k_1) > 0` and `a f(k_2) > 0`** all hold.',
        detail: 'Each endpoint must lie outside on the correct side while the axis stays inside. For exactly one root in $(k_1,k_2)$ the single condition $f(k_1)f(k_2) < 0$ suffices.'
      }
    ],
    examples: [
      {
        title: 'Shared root of two quadratics',
        problem: 'Find $k$ if $x^2 + 2x + k = 0$ and $x^2 + x + 1 = 0$ cannot share, then if $x^2 + kx + 1 = 0$ and $x^2 + x + k = 0$ share a real root.',
        steps: [
          { label: 'Step 1', text: '```text\nsubtract: (k-1) x + (1-k) = 0  =>  (k-1)(x-1) = 0\n```\nFor the second pair, subtract: $(k-1)x + (1-k) = 0$, so $(k-1)(x-1) = 0$.' },
          { label: 'Step 2', text: 'If $k \\ne 1$, then $x = 1$. Put $x = 1$ in $x^2+x+k = 0$ to get $k = -2$. Check in the other: $1 - 2 + 1 = 0$ holds.' },
          { label: 'Step 3', text: 'If $k = 1$, both equations are $x^2+x+1 = 0$ with $D < 0$ and no real root. Hence the only real common-root case is $k = -2$ with shared root $1$.' }
        ],
        result: 'Real shared root only for $k = -2$ (root $1$); $k = 1$ gives identical equations with no real roots.'
      },
      {
        title: 'Roots on one side of a number',
        problem: 'Find $m$ such that both roots of $x^2 - 2mx + m^2 - 1 = 0$ exceed $1$.',
        steps: [
          { label: 'Step 1', text: '```text\nD/4 = 1 > 0; h = m; f(1) = m^2 - 2m = m(m-2)\n```\nHere $D = 4m^2 - 4(m^2-1) = 4 > 0$ always, and axis $h = m$.' },
          { label: 'Step 2', text: 'Need $h > 1$ so $m > 1$, and $af(1) > 0$ with $a = 1$: $f(1) = 1 - 2m + m^2 - 1 = m(m-2) > 0$.' },
          { label: 'Step 3', text: 'With $m > 1$, inequality $m(m-2) > 0$ forces $m > 2$. Both roots are $m \\pm 1$, indeed above $1$ exactly then.' }
        ],
        result: '$m > 2$; roots $m-1$ and $m+1$ both exceed $1$ precisely in that range.'
      }
    ],
    keyTakeaways: [
      'Subtract shared-root pairs to a linear equation, then verify the candidate in an original.',
      'Resultant $(a_1c_2-a_2c_1)^2 = (a_1b_2-a_2b_1)(b_1c_2-b_2c_1)$ handles parameters compactly.',
      'Both roots beyond $k$ need $D \\ge 0$, axis beyond $k$ and $af(k) > 0$ together.',
      '$k$ between roots is simply $af(k) < 0$; one root in $(k_1,k_2)$ is $f(k_1)f(k_2) < 0$.'
    ],
    quiz: [
      {
        q: 'If $x = 2$ meets both $x^2 + ax - 6 = 0$ and $x^2 + 2x + b = 0$, then $a + b$ equals',
        options: [`$-5$`, `$-3$`, `$-7$`, `$3$`],
        answer: 2,
        explanation: 'Step 1: Put $x = 2$ in the first equation to get $4 + 2a - 6 = 0$, so $a = 1$. Step 2: Put $x = 2$ in the second to get $4 + 4 + b = 0$, so $b = -8$. Step 3: Adding gives $a + b = 1 - 8 = -7$. Step 4: Each candidate must be checked in its own equation, which both values pass.'
      },
      {
        q: '$k$ lies strictly between the roots of $f(x) = ax^2+bx+c$ exactly when',
        options: [`$af(k) > 0$`, `$af(k) < 0$`, `$D > 0$`, `$f(k) = 0$`],
        answer: 1,
        explanation: 'Step 1: Opposite signs of $a$ and $f(k)$ force crossings on both sides. Step 2: Hence $af(k) < 0$ is necessary and sufficient. Step 3: $D > 0$ alone does not place $k$ between roots. Step 4: Equality $f(k) = 0$ makes $k$ itself a root, the boundary case.'
      },
      // PYQ-pattern: location-of-roots inequality system
      {
        q: 'Both roots of $x^2 - 4x + m = 0$ exceed $2$. Then $m$ meets',
        options: [`$m > 4$`, `$m = 4$`, `$m < 0$`, `$m < 4$`],
        answer: 0,
        explanation: 'Step 1: $D \\ge 0$ gives $16 - 4m \\ge 0$, so $m \\le 4$. Step 2: Axis $h = 2$ is not $> 2$, it equals $2$. Step 3: Strict both-exceed fails; with $m = 4$ the double root is $2$. Step 4: Among options the boundary $m = 4$ is the only attainable case, showing strict exceedance is impossible here.'
      },
      {
        q: 'Exactly one root of $f$ lies in $(1,3)$ whenever',
        options: [`$f(1) = f(3)$`, `$f(1)f(3) < 0$`, `$D = 0$`, `$af(1) > 0$ and $af(3) > 0$`],
        answer: 1,
        explanation: 'Step 1: Opposite signs at endpoints force an odd number of crossings. Step 2: A quadratic can cross once inside, so $f(1)f(3) < 0$ suffices. Step 3: Equal endpoint values give no positional data. Step 4: Both $af > 0$ holds when the interval lies outside the roots.'
      }
    ]
  }
]
