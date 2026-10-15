import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 3: First-Order Differential Equations
// Sections 3.1 – 3.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh03Content: SectionContent[] = [
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: 'engmath-ch3-s1',
    readingTime: 8,
    intro: 'First-order equations relate a function to its first derivative, and the separable and homogeneous classes solve by direct integration after the right rearrangement. This section builds the separation move, the `$y = vx$` substitution for homogeneous forms, and the handling of initial data and lost constant solutions. Recognizing these two forms on sight is the fastest skill in the differential-equations toolkit.',
    objectives: [
      'Solve separable equations by `$\\int \\frac{dy}{g(y)} = \\int f(x)\\,dx$` including initial-value problems',
      'Detect homogeneous `$F(y/x)$` forms and apply `$y = vx$` to separate them',
      'Recover constant solutions lost during division and validate answers by substitution'
    ],
    concepts: [
      {
        term: 'Separable equations',
        kind: 'method',
        statement: 'An equation is **separable** when it factors as `$\\frac{dy}{dx} = f(x)g(y)$`, so dividing by `$g(y)$` and integrating gives `$\\int \\frac{dy}{g(y)} = \\int f(x)\\,dx + C$`. The `separable` move treats `$\\frac{dy}{dx}$` as a ratio of differentials, collects `$y$` terms left and `$x$` terms right, then integrates each side independently. Absolute values from `$\\int \\frac{dy}{y} = \\ln|y|$` merge into the constant `$C$` or a positive factor `$C_1 = e^C$`.',
        detail: 'Always record zeros of `$g(y)$` first: each root `$y = c$` with `$g(c) = 0$` is a constant solution that division by `$g(y)$` would erase.'
      },
      {
        term: 'Homogeneous first-order form',
        kind: 'definition',
        statement: 'An equation is **homogeneous** of degree zero when the right side depends only on the ratio `$v = \\frac{y}{x}$`, i.e. `$\\frac{dy}{dx} = F\\left(\\frac{y}{x}\\right)$`, equivalently when `$M$` and `$N$` in `$M\\,dx + N\\,dy = 0$` are homogeneous of the same degree. The `homogeneous` test rescales: `$M(tx, ty) = t^n M(x, y)$` and `$N(tx, ty) = t^n N(x, y)$` with a shared `$n$`. Sums like `$x^2 + xy + y^2$` pass with `$n = 2$`, while `$x^2 + y$` mixes degrees and fails.',
        detail: 'Every term must carry the same total power of `$x$` and `$y$`; constants and mixed-degree sums break homogeneity.'
      },
      {
        term: 'Substitution y = vx',
        kind: 'method',
        statement: 'Setting `$y = vx$` with `$\\frac{dy}{dx} = v + x\\frac{dv}{dx}$` converts every homogeneous equation into the **separable** form `$x\\frac{dv}{dx} = F(v) - v$`. The `substitution` trades the ratio structure for a product structure, and separation `$\\int \\frac{dv}{F(v) - v} = \\int \\frac{dx}{x}$` finishes the work. Back-substitution `$v = \\frac{y}{x}$` restores the answer to `$x$` and `$y$`.',
        detail: 'The companion `$x = uy$` suits equations cleaner in `$\\frac{dx}{dy}$`, chosen whenever `$N$` is simpler than `$M$`.'
      },
      {
        term: 'General, particular and singular solutions',
        kind: 'notation',
        statement: 'The **general solution** carries one arbitrary constant `$C$` for a first-order equation, a **particular solution** fixes `$C$` from initial data `$y(x_0) = y_0$`, and a **singular solution** meets the equation but lies outside the general family. The `particular` value follows from substituting `$x_0, y_0$` into the general form and solving for `$C$`. Singular cases typically arise as envelopes or as the divided-out zeros `$g(c) = 0$` from separation.',
        detail: 'Existence and uniqueness hold near `$x_0$` when `$f$` and `$\\frac{\\partial f}{\\partial y}$` are continuous there, so a crossing of two solutions signals a continuity failure.'
      },
      {
        term: 'Division audit before separating',
        kind: 'insight',
        statement: 'Every division by a **variable expression** risks deleting solutions, so the audit habit is: list zeros first, divide second, reattach lost constants third. The `audit` also covers logarithms, which demand positive arguments handled by `$|y|$` or piecewise signs. A final substitution check of the answer into the original equation catches sign and constant slips in one pass.',
        detail: 'Writing `$\\ln|y| = x + C$` as `$y = \\pm e^C e^x$` and folding `$\\pm e^C$` into a nonzero `$C_1$` keeps the family complete including sign flips.'
      }
    ],
    examples: [
      {
        title: 'Separable equation with initial data',
        problem: 'Solve `$\\frac{dy}{dx} = \\frac{2x}{y}$` with `$y(0) = 3$`.',
        steps: [
          { label: 'Step 1: Audit and separate', text: '```text\nNo zeros of g(y) = 1/y at finite y; y = 0 excluded from domain\nMultiply: y dy = 2x dx\nIntegrate: y^2 over 2 = x^2 + C\n```\nNo constant solution is lost since `$\\frac{1}{y}$` vanishes nowhere, and the `separable` split `$y\\,dy = 2x\\,dx$` is valid for `$y \\ne 0$`.' },
          { label: 'Step 2: General solution', text: 'Integration gives `$\\frac{y^2}{2} = x^2 + C$`, or `$y^2 = 2x^2 + C_1$` with `$C_1 = 2C$`. Taking roots yields `$y = \\pm\\sqrt{2x^2 + C_1}$`, two branches of one family.' },
          { label: 'Step 3: Particular branch', text: 'Data `$y(0) = 3 > 0$` selects the positive branch with `$9 = C_1$`, so `$y = \\sqrt{2x^2 + 9}$`. Differentiation confirms `$\\frac{dy}{dx} = \\frac{2x}{\\sqrt{2x^2+9}} = \\frac{2x}{y}$`.' }
        ],
        result: 'General `$y^2 = 2x^2 + C_1$`; particular `$y = \\sqrt{2x^2 + 9}$`.'
      },
      {
        title: 'Homogeneous equation via y = vx',
        problem: 'Solve `$\\frac{dy}{dx} = \\frac{x^2 + y^2}{xy}$` for `$x > 0$`.',
        steps: [
          { label: 'Step 1: Confirm homogeneity', text: '```text\nNumerator x^2 + y^2 has degree 2; denominator xy has degree 2\nRight side = x/y + y/x = 1/v + v with v = y/x\nHomogeneous degree zero confirmed\n```\nBoth numerator and denominator are degree $2$, so the ratio depends only on `$v = \\frac{y}{x}$`.' },
          { label: 'Step 2: Substitute and separate', text: 'With `$y = vx$`, `$v + x\\frac{dv}{dx} = \\frac{1}{v} + v$`, so `$x\\frac{dv}{dx} = \\frac{1}{v}$`. The `substitution` cancels `$v$` on both sides, leaving `$v\\,dv = \\frac{dx}{x}$`, which integrates to `$\\frac{v^2}{2} = \\ln x + C$`.' },
          { label: 'Step 3: Return to x and y', text: 'Back-substitution gives `$\\frac{y^2}{2x^2} = \\ln x + C$`, or `$y^2 = 2x^2(\\ln x + C)$`. The candidate `$y = 0$` meets the original equation only at isolated points, so no global constant solution was lost.' }
        ],
        result: '`$y^2 = 2x^2(\\ln x + C)$` for `$x > 0$`.'
      }
    ],
    keyTakeaways: [
      'Separate as `$\\int dy/g(y) = \\int f(x)\\,dx$`, but list zeros of `$g$` before dividing.',
      'Homogeneous means `$dy/dx = F(y/x)$`; `$y = vx$` gives `$x\\,dv/dx = F(v) - v$`.',
      'Initial data selects branch and constant; verify by substituting back.',
      'Continuity of `$f$` and `$\\partial f/\\partial y$` governs uniqueness near `$x_0$`.'
    ],
    quiz: [
      // PYQ-pattern — separable equation general solution (rephrased)
      {
        q: 'The general solution of `$\\frac{dy}{dx} = \\frac{2x}{y}$` is:',
        options: [`$y^2 = 2x^2 + C$`, `$y = 2x^2 + C$`, '$\\ln y = x^2 + C$ only, with no other branch', `$y^2 = x + C$`],
        answer: 0,
        explanation: 'First separate as `$y\\,dy = 2x\\,dx$` for `$y \\ne 0$`. Next integrate to `$\\frac{y^2}{2} = x^2 + C$`. Then clear denominators to `$y^2 = 2x^2 + C_1$`. Finally absorb `$2$` into the constant, matching the first option.'
      },
      {
        q: 'Which equation is homogeneous of degree zero?',
        options: [`$\\frac{dy}{dx} = \\frac{x + y^2}{x}$`, `$\\frac{dy}{dx} = \\frac{x^2 + y^2}{xy}$`, `$\\frac{dy}{dx} = x + y + 1$`, `$\\frac{dy}{dx} = \\frac{x}{y} + x$`],
        answer: 1,
        explanation: 'First test each right side under scaling `$(x, y) \\to (tx, ty)$`. Next only the second is unchanged since numerator and denominator are both degree `$2$`. Then the others mix degrees or carry constants. Finally write it as `$\\frac{1}{v} + v$` with `$v = \\frac{y}{x}$`.'
      },
      // PYQ-pattern — substitution y = vx (rephrased)
      {
        q: 'Under $y = vx$, the equation `$\\frac{dy}{dx} = \\frac{y}{x} + \\left(\\frac{y}{x}\\right)^2$` becomes:',
        options: [`$x\\frac{dv}{dx} = v^2$`, `$x\\frac{dv}{dx} = v + v^2$`, `$\\frac{dv}{dx} = v^2$`, `$v + x\\frac{dv}{dx} = v^2$`],
        answer: 0,
        explanation: 'First substitute `$\\frac{dy}{dx} = v + x\\frac{dv}{dx}$` and `$\\frac{y}{x} = v$`. Next the equation reads `$v + x\\frac{dv}{dx} = v + v^2$`. Then cancel `$v$` from both sides. Finally $x\\frac{dv}{dx} = v^2$, separable in `$v$` and `$x$`.'
      },
      {
        q: 'Solving `$\\frac{dy}{dx} = y^2$` by separation, which constant solution must be reattached alongside the general family?',
        options: [`$y = 1$`, `$y = 0$`, `$y = -1$`, 'None: division by `$y^2$` loses nothing'],
        answer: 1,
        explanation: 'First note `$g(y) = y^2$` has zero `$y = 0$`. Next division by `$y^2$` assumes `$y \\ne 0$`. Then `$y = 0$` meets `$\\frac{dy}{dx} = y^2$` since both sides vanish. Finally the general `$y = \\frac{-1}{x + C}$` never takes the value zero, so it must be listed separately.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.2
  {
    sectionId: 'engmath-ch3-s2',
    readingTime: 9,
    intro: 'Linear first-order equations add a `$y$` term to the derivative, and the integrating factor collapses the left side into a single product derivative. Bernoulli equations look nonlinear but linearize under `$z = y^{1-n}$`. This section turns both classes into routine quadrature with careful attention to the standard form and the `$n = 0, 1$` edge cases.',
    objectives: [
      'Rewrite equations in standard form `$\\frac{dy}{dx} + P(x)y = Q(x)$` and compute `$\\mu = e^{\\int P\\,dx}$`',
      'Solve linear equations completely via `$\\frac{d}{dx}(\\mu y) = \\mu Q$` plus initial data',
      'Reduce Bernoulli equations with `$z = y^{1-n}$` and handle `$n = 0, 1$` directly'
    ],
    concepts: [
      {
        term: 'Standard linear form',
        kind: 'definition',
        statement: 'A first-order equation is **linear** when it fits `$\\frac{dy}{dx} + P(x)y = Q(x)$` with `$y$` and `$\\frac{dy}{dx}$` to the first power and no products `$y\\frac{dy}{dx}$`. The `standard` form demands coefficient `$1$` on `$\\frac{dy}{dx}$`, so dividing by the leading coefficient is step zero. Terms like `$y^2$`, `$\\sin y$`, or `$y\\frac{dy}{dx}$` immediately disqualify linearity.',
        detail: 'Bernoulli equations `$\\frac{dy}{dx} + P(x)y = Q(x)y^n$` are the near-linear neighbors, linear exactly when `$n = 0$` or `$n = 1$`.'
      },
      {
        term: 'Integrating factor',
        kind: 'theorem',
        statement: 'Multiplying by `$\\mu(x) = e^{\\int P(x)\\,dx}$` turns the left side into an exact derivative: `$\\frac{d}{dx}(\\mu y) = \\mu Q$`. The **integrating factor** is never unique, since any nonzero constant multiple works, and the simplest choice drops the constant of integration inside the exponent. The `integrating` identity follows from `$\\frac{d}{dx}(\\mu y) = \\mu\\frac{dy}{dx} + y\\frac{d\\mu}{dx}$` with `$\\frac{d\\mu}{dx} = \\mu P$` by construction.',
        detail: 'For constant $P(x) = a$, the factor is `$e^{ax}$`, and for `$P(x) = \\frac{k}{x}$` it is `$x^k$`, two instances worth memorizing.'
      },
      {
        term: 'Linear solution pipeline',
        kind: 'method',
        statement: 'The pipeline is: divide into **standard form**, compute `$\\mu$`, multiply through, collapse to `$\\frac{d}{dx}(\\mu y) = \\mu Q$`, and integrate `$y = \\frac{1}{\\mu}\\left(\\int \\mu Q\\,dx + C\\right)$`. The `pipeline` fails loudly if `$P$` or `$Q$` blow up at the initial point, signaling a restricted interval of validity. Initial data `$y(x_0) = y_0$` applied after integration selects the single curve through that point.',
        detail: 'Definite integration from `$x_0$` to `$x$` bakes the initial value in directly and avoids a separate constant-solving round.'
      },
      {
        term: 'Bernoulli reduction',
        kind: 'method',
        statement: 'For `$\\frac{dy}{dx} + P(x)y = Q(x)y^n$` with $n \\ne 0, 1$, dividing by `$y^n$` and setting `$z = y^{1-n}$` yields a **linear** equation `$\\frac{dz}{dx} + (1-n)P(x)z = (1-n)Q(x)$`. The `Bernoulli` substitution differentiates as `$\\frac{dz}{dx} = (1-n)y^{-n}\\frac{dy}{dx}$`, which is exactly the combination produced by division. Constant solutions `$y = 0$` (for `$n > 0$) may be lost in division and need reattachment.',
        detail: 'The values `$n = 0$` and `$n = 1$` need no substitution: they are already linear and separable-linear respectively.'
      },
      {
        term: 'Domain follows the coefficients',
        kind: 'insight',
        statement: 'The solution is valid on intervals where `$P$` and `$Q$` stay **continuous**, with division points and zeros of `$\\mu$` excluded. The `domain` containing `$x_0$` and bounded by the nearest discontinuity is the guaranteed interval from the existence theorem. Extending formulas across a singular point without fresh constants manufactures false global solutions.',
        detail: 'Factors like `$x^k$` from `$P = \\frac{k}{x}$` split the line into `$x > 0$` and $x < 0$, each carrying its own constant.'
      }
    ],
    derivations: [
      {
        title: 'Integrating-Factor Solution of Linear First-Order Equations',
        statement: 'Derivation of $y = \\frac{1}{\\mu}\\left(\\int \\mu Q \\, dx + C\\right)$ with $\\mu = e^{\\int P \\, dx}$ for $\\frac{dy}{dx} + P(x)y = Q(x)$',
        prerequisites: [
          'Product rule $\\frac{d}{dx}(\\mu y) = \\mu \\frac{dy}{dx} + y \\frac{d\\mu}{dx}$',
          'Exponential derivative $\\frac{d}{dx}e^{A(x)} = A^{\\prime}(x)e^{A(x)}$',
          'Standard linear form $\\frac{dy}{dx} + P(x)y = Q(x)$',
        ],
        steps: [
          {
            label: 'Step 1: Demand a product derivative',
            formula: '$$\\mu(x) = e^{\\int P(x) \\, dx}$$',
            explanation: 'Seek a positive multiplier $\\mu$ such that $\\mu P$ equals $\\frac{d\\mu}{dx}$, because then the left side matches the product-rule expansion of $\\frac{d}{dx}(\\mu y)$. This requirement works since it is a separable equation for $\\mu$ whose solution is the exponential of the integral of $P$. Any nonzero constant multiple would also work, so the simplest choice drops the constant.',
          },
          {
            label: 'Step 2: Multiply and collapse the left side',
            formula: '$$\\frac{d}{dx}(\\mu y) = \\mu \\frac{dy}{dx} + \\mu P y = \\mu Q$$',
            explanation: 'Multiplying the standard form by $\\mu$ gives $\\mu \\frac{dy}{dx} + \\mu P y = \\mu Q$. The left side is exactly $\\frac{d}{dx}(\\mu y)$ by the product rule plus the defining property of $\\mu$ from the previous step. This collapse works because $\\mu$ was engineered to supply the missing $y \\frac{d\\mu}{dx}$ piece.',
          },
          {
            label: 'Step 3: Integrate the collapsed equation',
            formula: '$$\\mu y = \\int \\mu Q \\, dx + C$$',
            explanation: 'Integrate both sides with respect to $x$, which inverts the outer derivative on the left by the fundamental theorem of calculus. This works because $\\mu Q$ is assumed continuous on the interval of interest, so its antiderivative exists. The constant $C$ records the one degree of freedom of a first-order equation.',
          },
          {
            label: 'Step 4: Divide by the nonzero factor',
            formula: '$$y = \\frac{1}{\\mu}\\left(\\int \\mu Q \\, dx + C\\right)$$',
            explanation: 'Since $\\mu$ is an exponential it never vanishes, so division by $\\mu$ is safe on the whole interval. This final division works because it isolates $y$ while preserving equality, converting quadrature into an explicit solution. The formula separates the forced response from the homogeneous term $\\frac{C}{\\mu}$.',
          },
        ],
        result: 'With $\\mu = e^{\\int P \\, dx}$, $y = \\frac{1}{\\mu}\\left(\\int \\mu Q \\, dx + C\\right)$, meaning the linear equation reduces to one quadrature after the product-derivative collapse.',
      },
    ],
    examples: [
      {
        title: 'Linear equation with polynomial factor',
        problem: 'Solve `$\\frac{dy}{dx} + \\frac{2}{x}y = x^2$` for `$x > 0$`.',
        steps: [
          { label: 'Step 1: Read P and build mu', text: '```text\nStandard form already (coeff 1 on dy/dx)\nP(x) = 2 over x,  Q(x) = x^2\nmu = exp(int 2 over x dx) = exp(2 ln x) = x^2\n```\nThe equation is already `standard`, and `$P(x) = \\frac{2}{x}$` integrates to `$2\\ln x = \\ln(x^2)$`, so `$\\mu = x^2$`.' },
          { label: 'Step 2: Collapse and integrate', text: 'Multiply: `$x^2\\frac{dy}{dx} + 2xy = x^4$`, left side `$\\frac{d}{dx}(x^2 y) = x^4$`. Integration gives `$x^2 y = \\frac{x^5}{5} + C$`.' },
          { label: 'Step 3: Isolate y', text: 'Division by `$x^2$` yields `$y = \\frac{x^3}{5} + \\frac{C}{x^2}$`. The homogeneous part `$\\frac{C}{x^2}$` decays while `$\\frac{x^3}{5}$` tracks the forcing `$x^2$`.' }
        ],
        result: '`$y = \\frac{x^3}{5} + Cx^{-2}$` on `$x > 0$`.'
      },
      {
        title: 'Bernoulli equation linearized',
        problem: 'Solve `$\\frac{dy}{dx} + y = xy^3$`.',
        steps: [
          { label: 'Step 1: Identify n and substitute', text: '```text\nBernoulli with n = 3 (P = 1, Q = x)\nDivide by y^3 (y nonzero); z = y^(1-3) = y^(-2)\ndz/dx = -2 y^(-3) dy/dx\n```\nDivision assumes $y \\ne 0$, and `$y = 0$` is checked separately: it meets the equation, so it joins the answer list.' },
          { label: 'Step 2: Linear equation for z', text: 'The substitution produces `$\\frac{dz}{dx} - 2z = -2x$`, linear with `$P_z = -2$` and factor `$e^{-2x}$`. Then `$\\frac{d}{dx}(ze^{-2x}) = -2xe^{-2x}$` integrates by parts to `$ze^{-2x} = xe^{-2x} + \\frac{e^{-2x}}{2} + C$`.' },
          { label: 'Step 3: Return to y', text: 'Thus `$z = x + \\frac{1}{2} + Ce^{2x}$`, and `$y^{-2} = x + \\frac{1}{2} + Ce^{2x}$` gives `$y = \\pm\\left(x + \\frac{1}{2} + Ce^{2x}\\right)^{-1/2}$` plus `$y = 0$`.' }
        ],
        result: '`$y^{-2} = x + \\frac{1}{2} + Ce^{2x}$`, plus the constant solution `$y = 0$`.'
      }
    ],
    keyTakeaways: [
      'Standardize to `$\\frac{dy}{dx} + Py = Q$` first; `$\\mu = e^{\\int P\\,dx}$` collapses the left to `$\\frac{d}{dx}(\\mu y) = \\mu Q$`.',
      'Answer `$y = \\mu^{-1}(\\int \\mu Q\\,dx + C)$`, valid where `$P, Q$` are continuous.',
      'Bernoulli `$\\frac{dy}{dx} + Py = Qy^n$` linearizes via `$z = y^{1-n}$` for `$n \\ne 0,1$`.',
      'Reattach divided-out zeros such as `$y = 0$`, and keep one constant per connected interval.'
    ],
    quiz: [
      // PYQ-pattern — integrating factor (rephrased)
      {
        q: 'The integrating factor of `$\\frac{dy}{dx} + \\frac{2}{x}y = x^2$` is:',
        options: [`$e^{2x}$`, `$x^2$`, `$2\\ln x$`, `$\\frac{1}{x^2}$`],
        answer: 1,
        explanation: 'First read `$P(x) = \\frac{2}{x}$` from standard form. Next integrate `$\\int \\frac{2}{x}\\,dx = 2\\ln x$`. Then exponentiate `$e^{2\\ln x} = x^2$`. Finally any constant multiple works, so `$x^2$` is the simplest choice.'
      },
      {
        q: 'After multiplying `$\\frac{dy}{dx} + P(x)y = Q(x)$` by `$\\mu = e^{\\int P\\,dx}$`, the left side becomes:',
        options: [`$\\mu \\frac{d^2y}{dx^2}$`, `$\\frac{d}{dx}(\\mu y)$`, `$\\mu Q + P$`, '$y\\frac{d\\mu}{dx}$ alone'],
        answer: 1,
        explanation: 'First expand `$\\frac{d}{dx}(\\mu y) = \\mu\\frac{dy}{dx} + y\\frac{d\\mu}{dx}$`. Next `$\\frac{d\\mu}{dx} = \\mu P$` by construction of `$\\mu$`. Then the expansion matches `$\\mu\\frac{dy}{dx} + \\mu P y$`. Finally the equation reads `$\\frac{d}{dx}(\\mu y) = \\mu Q$`.'
      },
      // PYQ-pattern — Bernoulli substitution (rephrased)
      {
        q: 'The substitution linearizing `$\\frac{dy}{dx} + y = xy^3$` is:',
        options: [`$z = y^3$`, `$z = y^2$`, `$z = y^{-2}$`, `$z = e^y$`],
        answer: 2,
        explanation: 'First identify Bernoulli exponent `$n = 3$`. Next the rule is `$z = y^{1-n}$`. Then `$1 - 3 = -2$` gives `$z = y^{-2}$`. Finally `$\\frac{dz}{dx} = -2y^{-3}\\frac{dy}{dx}$` matches the divided equation.'
      },
      {
        q: 'The solution interval for `$\\frac{dy}{dx} + \\frac{2}{x}y = x^2$` with `$y(1) = 0$` is contained in:',
        options: [`$x > 0$`, 'The whole real line', `$x < 0$`, 'Only the single point `$x = 1$`'],
        answer: 0,
        explanation: 'First `$P(x) = \\frac{2}{x}$` is discontinuous at `$x = 0$`. Next the existence theorem guarantees an interval holding `$x_0 = 1$` free of discontinuities. Then `$x > 0$` is that maximal connected piece. Finally crossing `$x = 0$` would need a fresh constant.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.3
  {
    sectionId: 'engmath-ch3-s3',
    readingTime: 9,
    intro: 'Exact equations store the solution implicitly as level curves `$\\Psi(x, y) = C$` of a potential function, with the test `$M_y = N_x$` deciding exactness. When the test fails, special integrating factors depending on one variable can restore it. This section drills the test, the reconstruction, and the grouped-term inspection tricks.',
    objectives: [
      'Apply `$M_y = N_x$` to certify exactness on a simply connected domain',
      'Reconstruct `$\\Psi(x, y) = C$` by partial integration with `$h(y)$` completion',
      'Find one-variable integrating factors `$\\mu(x)$` or `$\\mu(y)$` when the test fails'
    ],
    concepts: [
      {
        term: 'Exactness test',
        kind: 'theorem',
        statement: 'The form `$M(x, y)\\,dx + N(x, y)\\,dy = 0$` is **exact** on a simply connected domain exactly when `$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$` there. The `exact` condition says `$M\\,dx + N\\,dy$` is the total differential `$d\\Psi = \\Psi_x\\,dx + \\Psi_y\\,dy$` of some potential `$\\Psi$`. Equality of mixed partials `$\\Psi_{xy} = \\Psi_{yx}$` makes the test necessary, and simple connectivity makes it sufficient.',
        detail: 'Test failure is not the end: it routes the problem to integrating factors or pattern regrouping below.'
      },
      {
        term: 'Reconstruction of the potential',
        kind: 'method',
        statement: 'Integrate `$M$` in `$x$` holding `$y$` fixed to get `$\\Psi = \\int M\\,dx + h(y)$`, then differentiate in `$y$` and match `$\\Psi_y = N$` to find `$h^{\\prime}(y)$`. The `potential` assembly ends with `$\\Psi(x, y) = C$`, whose total differential reproduces the equation. Starting from `$N$` instead is equivalent and preferable when `$N$` integrates more cleanly.',
        detail: 'Any purely `$x$` terms appearing in the `$\\Psi_y = N$` match signal an arithmetic slip, since `$h$` depends only on `$y$`.'
      },
      {
        term: 'Integrating factors in one variable',
        kind: 'method',
        statement: 'If `$\\frac{M_y - N_x}{N}$` is a function `$R(x)$` of `$x$` alone, then `$\\mu(x) = e^{\\int R\\,dx}$` makes `$\\mu M\\,dx + \\mu N\\,dy = 0$` **exact**. Symmetrically, if `$\\frac{N_x - M_y}{M} = S(y)$`, then `$\\mu(y) = e^{\\int S\\,dy}$` restores exactness. The `factor` formulas are worth memorizing because they convert large families of non-exact problems in one line.',
        detail: 'When both quotients mix variables, these shortcuts do not apply and inspection or regrouping is tried instead.'
      },
      {
        term: 'Grouping by known differentials',
        kind: 'method',
        statement: 'Many equations split into **recognizable totals** such as `$d(xy) = x\\,dy + y\\,dx$`, `$d\\left(\\frac{y}{x}\\right) = \\frac{x\\,dy - y\\,dx}{x^2}$`, and `$d(\\arctan\\frac{y}{x}) = \\frac{x\\,dy - y\\,dx}{x^2+y^2}$`. The `grouping` strategy rewrites the equation as a sum of such blocks, each integrating at once. Spotting `$x\\,dy + y\\,dx$` or `$x\\,dy - y\\,dx$` is the trigger for this route.',
        detail: 'The blocks `$d(x^2 + y^2) = 2x\\,dx + 2y\\,dy$` and `$d(\\ln\\frac{y}{x})$` complete the high-frequency recognition set.'
      },
      {
        term: 'Simply connected is part of the hypothesis',
        kind: 'insight',
        statement: 'The test `$M_y = N_x$` guarantees a potential only on domains **without holes**; punctured domains admit counterexamples where the test passes yet no single `$\\Psi$` exists globally. The `domain` caveat matters for factors like `$\\frac{1}{x^2+y^2}$` centered at the missing origin. In practice, work on rectangles avoiding singular points and the sufficiency holds.',
        detail: 'Solutions may still exist piecewise across holes, but each connected piece carries its own constant.'
      }
    ],
    examples: [
      {
        title: 'Exact equation solved by reconstruction',
        problem: 'Solve `$(2xy + 1)\\,dx + (x^2 + 3y^2)\\,dy = 0$`.',
        steps: [
          { label: 'Step 1: Test exactness', text: '```text\nM = 2xy + 1,  N = x^2 + 3y^2\nM_y = 2x,  N_x = 2x  -> equal, exact\nDomain: whole plane (simply connected)\n```\nEquality `$M_y = N_x = 2x$` certifies an **exact** form, so a global `potential` `$\\Psi$` exists.' },
          { label: 'Step 2: Integrate M in x', text: 'Holding `$y$` fixed, `$\\int (2xy + 1)\\,dx = x^2 y + x + h(y)$`. Differentiation gives `$\\Psi_y = x^2 + h prime(y)$`, matched against `$N = x^2 + 3y^2$` to read `$h prime(y) = 3y^2$`, hence `$h(y) = y^3$`.' },
          { label: 'Step 3: Level curves', text: 'The implicit solution is `$x^2 y + x + y^3 = C$`. Differentiation of the left side reproduces `$M\\,dx + N\\,dy$`, closing the loop.' }
        ],
        result: '`$x^2 y + x + y^3 = C$`.'
      },
      {
        title: 'Non-exact equation rescued by mu of x',
        problem: 'Solve `$(2y + 3)\\,dx + x\\,dy = 0$` via an integrating factor.',
        steps: [
          { label: 'Step 1: Test and form the quotient', text: '```text\nM = 2y + 3, N = x\nM_y = 2, N_x = 1 -> not exact\n(M_y - N_x) over N = (2-1) over x = 1 over x = R(x)\nmu(x) = exp(int dx over x) = x\n```\nThe quotient depends only on $x$, so `$\\mu(x) = x$` will restore exactness.' },
          { label: 'Step 2: Multiply and retest', text: 'The new form `$x(2y+3)\\,dx + x^2\\,dy = 0$` has $M_y = 2x = N_x$, now **exact**. Reconstruction: `$\\int x(2y+3)\\,dx = x^2 y + \\frac{3x^2}{2} + h(y)$`, and `$\\Psi_y = x^2$` matches `$N = x^2$` with `$h$` constant.' },
          { label: 'Step 3: Solution', text: 'Level curves `$x^2 y + \\frac{3x^2}{2} = C$`, equivalently `$x^2(2y + 3) = C_1$`. The factor `$x$` excludes `$x = 0$` from the domain, so each half-plane carries its own constant.' }
        ],
        result: '`$x^2(2y + 3) = C_1$` for `$x \\ne 0$`.'
      }
    ],
    keyTakeaways: [
      'Exact iff `$M_y = N_x$` on a simply connected domain; solution `$\\Psi(x,y) = C$`.',
      'Rebuild via `$\\int M\\,dx + h(y)$`, then fix `$h$` from `$\\Psi_y = N$`.',
      'One-variable rescue: `$\\mu(x) = e^{\\int (M_y-N_x)/N\\,dx}$` or the mirror in `$y$`.',
      'Regroup known totals `$d(xy)$`, `$d(y/x)$`, `$d(\\arctan y/x)$` before heavy machinery.'
    ],
    quiz: [
      // PYQ-pattern — exactness test (rephrased)
      {
        q: 'The form `$(2xy + 1)\\,dx + (x^2 + 3y^2)\\,dy = 0$` is exact because:',
        options: [`$M_y = 2y$ and $N_x = 2x$`, `$M_y = N_x = 2x$`, '$M = N$ as functions', 'Both `$M$` and `$N$` are polynomials'],
        answer: 1,
        explanation: 'First compute `$M_y = 2x$` holding `$x$` fixed. Next compute `$N_x = 2x$` holding `$y$` fixed. Then equality on the connected plane certifies exactness. Finally polynomial shape alone never suffices.'
      },
      {
        q: 'For `$M\\,dx + N\\,dy = 0$` with `$\\frac{M_y - N_x}{N} = \\frac{1}{x}$`, a valid integrating factor is:',
        options: [`$e^x$`, `$x$`, `$\\frac{1}{x}$`, `$y$`],
        answer: 1,
        explanation: 'First the quotient is `$R(x) = \\frac{1}{x}$` of `$x$` alone. Next `$\\mu(x) = e^{\\int R\\,dx} = e^{\\ln x}$`. Then `$e^{\\ln x} = x$`. Finally multiplication by `$x$` equalizes the mixed partials.'
      },
      // PYQ-pattern — potential reconstruction (rephrased)
      {
        q: 'If `$\\Psi_x = 2xy + 1$` and $\\Psi_y = x^2 + 3y^2$, then `$\\Psi(x,y)$` (up to a constant) is:',
        options: [`$x^2 y + x + y^3$`, `$x^2 y + 3y^2$`, `$2xy + x^2$`, `$xy + y^3$`],
        answer: 0,
        explanation: 'First integrate `$\\Psi_x$` in `$x$` to get `$x^2 y + x + h(y)$`. Next differentiate in `$y$`: `$x^2 + h prime(y)$`. Then match `$x^2 + 3y^2$` to get `$h(y) = y^3$`. Finally only the first option differentiates back correctly.'
      },
      {
        q: 'Which differential block equals `$x\\,dy + y\\,dx$`?',
        options: [`$d\\left(\\frac{y}{x}\\right)$`, `$d(xy)$`, `$d(x^2 + y^2)$`, `$d\\left(\\arctan\\frac{y}{x}\\right)$`],
        answer: 1,
        explanation: 'First apply the product rule to `$xy$`. Next `$d(xy) = x\\,dy + y\\,dx$` matches exactly. Then `$d(y/x)$` carries a minus sign and denominator. Finally the arctan block divides by `$x^2 + y^2$`.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Exactness as closed forms and potentials',
        blocks: [
          {
            kind: 'theorem',
            body: 'On an open simply connected domain $D$, the form $M(x,y) \\, dx + N(x,y) \\, dy$ with continuously differentiable coefficients is **exact**, meaning $M \\, dx + N \\, dy = d\\Psi$ for some $\\Psi$, exactly when $M_{y} = N_{x}$ throughout $D$. The potential is then recovered by $\\Psi(x,y) = \\int_{x_{0}}^{x} M(t,y) \\, dt + \\int_{y_{0}}^{y} N(x_{0},s) \\, ds$ up to a constant, and level curves $\\Psi(x,y) = C$ give implicit solutions. Simple connectedness is load bearing: closedness $M_{y} = N_{x}$ implies exactness only when every loop bounds, which is the one dimensional Poincare lemma.'
          },
          {
            kind: 'derivation',
            body: 'Suppose $(M_{y} - N_{x}) / N = h(x)$ depends only on $x$. Seek $\\mu(x)$ with $(\\mu M)_{y} = (\\mu N)_{x}$, so $\\mu M_{y} = \\mu^{{\\prime}} N + \\mu N_{x}$. Cancelling $\\mu$ gives $\\mu^{{\\prime}} / \\mu = (M_{y} - N_{x}) / N = h(x)$, hence $\\mu(x) = \\exp(\\int h(x) \\, dx)$. The symmetric case $(N_{x} - M_{y}) / M = k(y)$ yields $\\mu(y) = \\exp(\\int k(y) \\, dy)$. Grouping by known differentials $d(xy) = x \\, dy + y \\, dx$ and $d(y/x)$ often spots $\\mu$ faster than the formula, but the formula certifies existence whenever the ratio collapses to one variable.'
          },
          {
            kind: 'example',
            heading: 'A closed form with no global potential',
            body: 'On the punctured plane consider $\\omega = (-y \\, dx + x \\, dy)/(x^{2} + y^{2})$. Away from the origin $M_{y} = N_{x} = (y^{2} - x^{2})/(x^{2} + y^{2})^{2}$, so $\\omega$ is closed, yet $\\oint_{x^{2}+y^{2}=1} \\omega = 2\\pi \\neq 0$, while $d\\Psi$ always integrates to zero over loops. Hence no single valued $\\Psi$ exists globally; locally $\\Psi$ is the polar angle $\\theta$. The obstruction is topological de Rham cohomology, not analytic regularity, and it previews why simply connected hypotheses cannot be dropped.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 3.4
  {
    sectionId: 'engmath-ch3-s4',
    readingTime: 8,
    intro: 'Differential equations earn their keep in models of growth, cooling, drainage and curve families, where the equation is built from a physical balance and then solved by the methods of the previous sections. Orthogonal trajectories add a geometric construction: the family cutting a given family everywhere at right angles. This section practices model assembly, parameter elimination, and the slope-reciprocal move.',
    objectives: [
      'Assemble `$dx/dt = kx$` and Newton cooling models and solve them with data',
      'Eliminate the parameter of a curve family to obtain its differential equation',
      'Construct orthogonal trajectories via `$m_1 m_2 = -1$` slope replacement'
    ],
    concepts: [
      {
        term: 'Exponential growth and decay',
        kind: 'law',
        statement: 'When the rate is proportional to the amount, `$\\frac{dx}{dt} = kx$`, the solution is the **exponential** `$x(t) = x_0 e^{kt}$` with `$k > 0$` for growth and `$k < 0$` for decay. The `exponential` constant `$k$` is fixed by one data point, and doubling or half-life times follow from `$e^{kT} = 2$` or `$\\frac{1}{2}$`. Linearity in `$\\ln x$` makes log-scale plots the diagnostic check.',
        detail: 'Unlimited exponentials model early phases only; saturation effects demand logistic refinements beyond this section.'
      },
      {
        term: 'Newton law of cooling',
        kind: 'law',
        statement: 'A body approaches ambient temperature `$T_s$` at a rate proportional to the gap: `$\\frac{dT}{dt} = -k(T - T_s)$` with `$k > 0$`. Shifting `$u = T - T_s$` reduces it to `$\\frac{du}{dt} = -ku$`, giving `$T(t) = T_s + (T_0 - T_s)e^{-kt}$`. The `cooling` curve is monotone toward `$T_s$`, steep first and flat later, and `$k$` is calibrated from two timed readings.',
        detail: 'The same mathematics governs capacitor discharge and radioactive chains with one decaying compartment.'
      },
      {
        term: 'Family equation by elimination',
        kind: 'method',
        statement: 'A one-parameter family `$F(x, y, c) = 0$` yields its differential equation by differentiating once and **eliminating** `$c$` between the two relations. The `elimination` step differentiates `$F = 0$` to get `$F_x + F_y\\frac{dy}{dx} = 0$`, then solves for `$c$` and substitutes back. Two parameters need two differentiations and elimination of both constants.',
        detail: 'The order of the resulting equation equals the number of essential parameters eliminated.'
      },
      {
        term: 'Orthogonal trajectories',
        kind: 'method',
        statement: 'If a family has slope `$m_1 = \\frac{dy}{dx} = f(x, y)$`, the everywhere-perpendicular family obeys `$m_2 = -\\frac{1}{f(x, y)}$`, the negative reciprocal from `$m_1 m_2 = -1$`. The `orthogonal` construction therefore replaces `$\\frac{dy}{dx}$` by `$-\\frac{dx}{dy}$` in the family equation and solves the new equation. Circles through the origin and lines through the origin interchange under this move, the classical illustration.',
        detail: 'Where `$f = 0$` the trajectories run vertical, and where `$f$` blows up they run horizontal, handled by writing the equation in differential form.'
      },
      {
        term: 'Isogonal generalization and model limits',
        kind: 'insight',
        statement: 'Cutting at a fixed angle `$\\alpha$` instead of `$90$ degrees$` gives **isogonal** trajectories via the tangent addition rule, with orthogonal as the special right-angle case. The `isogonal` formula needs `$\\tan\\alpha$` finite and nonzero, degenerating cleanly to the original family at `$0$ degrees$`. Every model here assumes smooth curves and constant surroundings, so kinks, switching laws, or moving ambients need piecewise treatment.',
        detail: 'Always state the assumed quadrant and sign regime: trajectory formulas derived for `$x > 0$` may need mirror branches elsewhere.'
      }
    ],
    examples: [
      {
        title: 'Cooling curve calibrated from two readings',
        problem: 'A body at `$80$ degrees` cools in surroundings of `$20$ degrees$` to `$50$ degrees$` in `$10$ minutes`. Find `$k$` and the time to reach `$30$ degrees`.',
        steps: [
          { label: 'Step 1: Model and general solution', text: '```text\nT(t) = Ts + (T0 - Ts) exp(-k t)\nTs = 20, T0 = 80 -> T(t) = 20 + 60 exp(-k t)\nData: T(10) = 50\n```\nNewton `cooling` with constant surroundings gives the shifted **exponential** above, monotone from `$80$` toward `$20$`.' },
          { label: 'Step 2: Calibrate k', text: 'Insert `$50 = 20 + 60e^{-10k}$`, so `$e^{-10k} = \\frac{1}{2}$` and `$k = \\frac{\\ln 2}{10} \\approx 0.0693$` per minute. The half-gap time is exactly the `$10$` minutes observed.' },
          { label: 'Step 3: Predict', text: 'Set `$30 = 20 + 60e^{-kt}$`, giving `$e^{-kt} = \\frac{1}{6}$` and `$t = \\frac{\\ln 6}{k} = 10\\frac{\\ln 6}{\\ln 2} \\approx 25.8$` minutes. The curve flattens as it nears ambient, so the last `$20$ degrees` cost more than the first `$30$`.' }
        ],
        result: '`$k = \\frac{\\ln 2}{10}$` per minute; `$30$ degrees` at about `$25.8$` minutes.'
      },
      {
        title: 'Orthogonal trajectories of coaxial parabolas',
        problem: 'Find the orthogonal trajectories of `$y = cx^2$`.',
        steps: [
          { label: 'Step 1: Family equation', text: '```text\nFamily: y = c x^2 (one parameter c)\nDifferentiate: dy/dx = 2 c x\nEliminate c = y over x^2 -> dy/dx = 2y over x\n```\nOne parameter needs one differentiation plus `elimination`, yielding slope `$m_1 = \\frac{2y}{x}$`.' },
          { label: 'Step 2: Reciprocal slope', text: 'Perpendicular slopes obey `$m_2 = -\\frac{x}{2y}$`, so the trajectory equation is `$\\frac{dy}{dx} = -\\frac{x}{2y}$`. In differentials `$2y\\,dy + x\\,dx = 0$`, separable at once.' },
          { label: 'Step 3: Integrate', text: 'Integration gives `$y^2 + \\frac{x^2}{2} = C$`, a family of ellipses centered at the origin. Each ellipse meets each parabola at right angles where both are smooth.' }
        ],
        result: 'Trajectories `$\\frac{x^2}{2} + y^2 = C$`: coaxial ellipses.'
      }
    ],
    keyTakeaways: [
      'Growth and cooling share `$\\frac{du}{dt} = \\pm ku$`; calibrate `$k$` from timed data, watch the asymptote.',
      'Differentiate a family once per parameter, then eliminate constants to get its equation.',
      'Orthogonal means `$dy/dx$ goes to $-dx/dy$`; solve the replaced equation.',
      'State domains and angle regimes; vertical and horizontal crossings need differential form.'
    ],
    quiz: [
      // PYQ-pattern — Newton cooling curve (rephrased)
      {
        q: 'A body cools from `$80$ degrees` to `$50$ degrees` in `$10$ minutes` with surroundings at `$20$ degrees`. The constant `$k$` in `$T(t) = 20 + 60e^{-kt}$` is:',
        options: ['$\\frac{\\ln 2}{10}$ per minute', '$\\frac{\\ln 3}{10}$ per minute', '$\\frac{1}{10}$ per minute', '$\\ln 2$ per minute'],
        answer: 0,
        explanation: 'First insert `$50 = 20 + 60e^{-10k}$`. Next simplify to `$e^{-10k} = \\frac{1}{2}$`. Then take logarithms `$10k = \\ln 2$`. Finally `$k = \\frac{\\ln 2}{10}$` per minute.'
      },
      {
        q: 'Eliminating `$c$` from `$y = cx^2$` gives the family equation:',
        options: [`$\\frac{dy}{dx} = 2xy$`, `$\\frac{dy}{dx} = \\frac{2y}{x}$`, `$\\frac{dy}{dx} = cx$`, `$y = 2x\\frac{dy}{dx}$`],
        answer: 1,
        explanation: 'First differentiate: `$\\frac{dy}{dx} = 2cx$`. Next solve `$c = \\frac{y}{x^2}$` from the family. Then substitute to remove `$c$`. Finally `$\\frac{dy}{dx} = \\frac{2y}{x}$`.'
      },
      // PYQ-pattern — orthogonal trajectories (rephrased)
      {
        q: 'Orthogonal trajectories of `$y = cx^2$` satisfy:',
        options: [`$\\frac{dy}{dx} = \\frac{2y}{x}$`, `$\\frac{dy}{dx} = -\\frac{x}{2y}$`, `$\\frac{dy}{dx} = \\frac{x}{2y}$`, `$2y\\,dy - x\\,dx = 0$`],
        answer: 1,
        explanation: 'First the family slope is `$m_1 = \\frac{2y}{x}$`. Next perpendicular slopes obey `$m_2 = -\\frac{1}{m_1}$`. Then `$m_2 = -\\frac{x}{2y}$`. Finally integration yields ellipses `$\\frac{x^2}{2} + y^2 = C$`.'
      },
      {
        q: 'Bacteria double every `$3$ hours` from `$500$`. The count after `$9$ hours` is:',
        options: [`$1500$`, `$4000$`, `$4500$`, `$6000$`],
        answer: 1,
        explanation: 'First `$9$ hours` holds three doubling periods of `$3$ hours`. Next growth multiplies by `$2^3 = 8$`. Then `$500 \\cdot 8 = 4000$`. Finally the exponential `$x = 500e^{kt}$` with `$k = \\frac{\\ln 2}{3}$` agrees.'
      }
    ]
  }
]
