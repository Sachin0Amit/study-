import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 4: Higher-Order Linear Differential Eqs
// Sections 4.1 – 4.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh04Content: SectionContent[] = [
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: 'engmath-ch4-s1',
    readingTime: 9,
    intro: 'Constant-coefficient operators factor like polynomials, and each factor contributes a known block to the complementary function. This section builds the auxiliary equation, the three root patterns (distinct, repeated, complex), and the superposition structure `$y = y_c + y_p$`. Reading the complementary function directly off the roots is the core fluency of the chapter.',
    objectives: [
      'Form the auxiliary equation `$f(m) = 0$` and classify its roots',
      'Write `$y_c$` for distinct, repeated and complex-conjugate root patterns',
      'Assemble `$y = y_c + y_p$` and apply initial data to fix constants'
    ],
    concepts: [
      {
        term: 'Operator form and auxiliary equation',
        kind: 'definition',
        statement: 'Writing `$D = \\frac{d}{dx}$`, a constant-coefficient equation becomes **operator form** `$f(D)y = R(x)$` with polynomial `$f(D) = a_n D^n + \\cdots + a_0$`. The `auxiliary` equation `$f(m) = 0$` replaces `$D$` by `$m$`, and its `$n$` roots (counted with multiplicity) generate the complementary function. Operators with constant coefficients commute and factor exactly like polynomials, so `$f(D) = (D - m_1)(D - m_2)$` acts as successive first-order stages.',
        detail: 'The leading coefficient must be nonzero for genuine order `$n$`; a vanishing `$a_n$` silently drops the order and the root count.'
      },
      {
        term: 'Distinct real roots',
        kind: 'method',
        statement: 'Distinct real roots `$m_1 \\ne m_2$` contribute independent exponentials, so for `$m_1, m_2$` the block is `$y = C_1 e^{m_1 x} + C_2 e^{m_2 x}$`. The `distinct` case needs no extra factors because each first-order stage `$(D - m_i)$` integrates independently. Independence follows from a nonzero Wronskian proportional to `$e^{(m_1+m_2)x}$`.',
        detail: 'For order `$n$` with all roots distinct, `$y_c$` is the sum of `$n$` exponentials, one per root.'
      },
      {
        term: 'Repeated roots gain polynomial factors',
        kind: 'method',
        statement: 'A root `$m$` of multiplicity `$r$` contributes the block `$(C_1 + C_2 x + \\cdots + C_r x^{r-1})e^{mx}$`, with **powers of `$x$`** restoring the missing independent solutions. The `repeated` rule reflects that `$(D - m)^r$` annihilates `$x^k e^{mx}$` for `$k < r$`. Omitting the `$x$` factors is the classic blunder, collapsing `$r$` constants into one.',
        detail: 'A triple root `$m = 2$` gives `$(C_1 + C_2 x + C_3 x^2)e^{2x}$`, three constants for multiplicity three.'
      },
      {
        term: 'Complex pairs become damped oscillations',
        kind: 'method',
        statement: 'Conjugate roots `$\\alpha \\pm i\\beta$` combine via Euler formula into the real block `$e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$`. The **real form** keeps all constants and values real, with `$\\alpha$` setting growth or decay and `$\\beta$` setting frequency. The `complex` pair counts as two roots toward the total `$n$`, and repeated pairs gain `$x$` factors exactly like repeated reals.',
        detail: 'Pure imaginary `$\\pm i\\beta$` gives undamped `$C_1\\cos\\beta x + C_2\\sin\\beta x$`, the simple-harmonic signature.'
      },
      {
        term: 'Complementary plus particular structure',
        kind: 'theorem',
        statement: 'The general solution is the **sum** `$y = y_c + y_p$` where `$f(D)y_c = 0$` and `$f(D)y_p = R(x)$`, with `$y_c$` carrying all `$n$` arbitrary constants. The `superposition` principle adds homogeneous solutions freely: differences of any two full solutions obey the homogeneous equation. Initial data of `$y, \\frac{dy}{dx}, \\dots$` up to order `$n-1$` then fix the constants uniquely.',
        detail: 'Any `$y_p$` works, since adding homogeneous pieces absorbs the difference between two valid particular choices.'
      }
    ],
    examples: [
      {
        title: 'Complementary function with mixed root types',
        problem: 'Find `$y_c$` for `$(D^3 - 3D^2 + 4D - 12)y = 0$`.',
        steps: [
          { label: 'Step 1: Auxiliary equation', text: '```text\nf(m) = m^3 - 3m^2 + 4m - 12\nGroup: m^2(m - 3) + 4(m - 3) = (m - 3)(m^2 + 4)\nRoots: m = 3, m = +2i, m = -2i\n```\nFactoring by grouping exposes one real root and a pure-imaginary `complex` pair.' },
          { label: 'Step 2: Real root block', text: 'The root `$m = 3$` contributes `$C_1 e^{3x}$`. This single exponential carries one of the three required constants.' },
          { label: 'Step 3: Complex pair block', text: 'Roots `$\\pm 2i$` have `$\\alpha = 0$`, `$\\beta = 2$`, giving `$C_2\\cos 2x + C_3\\sin 2x$`. Together `$y_c = C_1 e^{3x} + C_2\\cos 2x + C_3\\sin 2x$`.' }
        ],
        result: '`$y_c = C_1 e^{3x} + C_2\\cos 2x + C_3\\sin 2x$`.'
      },
      {
        title: 'Repeated root with initial data',
        problem: 'Solve `$(D - 1)^2 y = 0$` with `$y(0) = 2$`, `$\\frac{dy}{dx}(0) = 5$`.',
        steps: [
          { label: 'Step 1: Root pattern', text: '```text\nAuxiliary: (m - 1)^2 = 0 -> m = 1 twice\nMultiplicity 2 -> block (C1 + C2 x) e^x\ny = (C1 + C2 x) e^x\n```\nThe double root demands the **linear `$x$` factor**; `$C_1 e^x + C_2 e^x$` would merge into one constant.' },
          { label: 'Step 2: Differentiate', text: 'Product rule gives `$\\frac{dy}{dx} = C_2 e^x + (C_1 + C_2 x)e^x = (C_1 + C_2 + C_2 x)e^x$`. Both `$y$` and `$\\frac{dy}{dx}$` share the `$e^x$` envelope with polynomial coefficients.' },
          { label: 'Step 3: Apply data', text: 'At `$x = 0$`: `$y(0) = C_1 = 2$` and `$\\frac{dy}{dx}(0) = C_1 + C_2 = 5$`, so `$C_2 = 3$`. The solution is `$y = (2 + 3x)e^x$`.' }
        ],
        result: '`$y = (2 + 3x)e^x$`.'
      }
    ],
    keyTakeaways: [
      'Factor `$f(D)$` and read roots of `$f(m) = 0$`; each root pattern owns a fixed `$y_c$` block.',
      'Distinct reals give exponentials; multiplicity `$r$` multiplies by `$1, x, \\dots, x^{r-1}$`.',
      'Pairs `$\\alpha \\pm i\\beta$` give `$e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$`.',
      'General `$y = y_c + y_p$`; `$n$` initial values fix `$n$` constants.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2004 — complementary function for distinct roots (rephrased)
      {
        q: 'The complementary function of `$(D^2 - 5D + 6)y = 0$` is:',
        options: [`$C_1 e^{2x} + C_2 e^{3x}$`, `$(C_1 + C_2 x)e^{2x}$`, `$C_1\\cos 2x + C_2\\sin 3x$`, `$C_1 e^{-2x} + C_2 e^{-3x}$`],
        answer: 0,
        explanation: 'First solve `$m^2 - 5m + 6 = (m - 2)(m - 3) = 0$`. Next roots `$m = 2, 3$` are real and distinct. Then each contributes a plain exponential. Finally the sum carries two constants.'
      },
      {
        q: 'For auxiliary root `$m = -1$` of multiplicity `$3$, the `$y_c$` block is:',
        options: [`$C_1 e^{-x}$`, `$(C_1 + C_2 x)e^{-x}$`, `$(C_1 + C_2 x + C_3 x^2)e^{-x}$`, `$C_1 e^{-x} + C_2 e^{x} + C_3 e^{2x}$`],
        answer: 2,
        explanation: 'First multiplicity `$3$` needs three constants. Next polynomial factors run `$1, x, x^2$`. Then the shared envelope is `$e^{-x}$`. Finally only the third option has the full quadratic factor.'
      },
      // PYQ-pattern: GATE 2010 — complex roots complementary function (rephrased)
      {
        q: 'Roots `$2 \\pm 3i$` contribute which real block to `$y_c$`?',
        options: [`$e^{2x}(C_1\\cos 3x + C_2\\sin 3x)$`, `$C_1 e^{2x} + C_2 e^{3x}$`, `$(C_1 + C_2 x)e^{2x}$`, `$C_1\\cos 2x + C_2\\sin 3x$`],
        answer: 0,
        explanation: 'First read `$\\alpha = 2$` and `$\\beta = 3$`. Next the envelope is `$e^{2x}$` with oscillation `$3x$`. Then real form needs both cosine and sine. Finally Euler pairing confirms the first option.'
      },
      {
        q: 'If `$y_1, y_2$` both obey `$f(D)y = R$`, then `$y_1 - y_2$` obeys:',
        options: [`$f(D)y = 2R$`, `$f(D)y = R^2$`, `$f(D)y = 0$`, `$f(D)y = 1$`],
        answer: 2,
        explanation: 'First apply linearity `$f(D)(y_1 - y_2) = f(D)y_1 - f(D)y_2$`. Next each term equals `$R$`. Then `$R - R = 0$`. Finally differences of full solutions are homogeneous solutions.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Operator calculus and the annihilator method',
        blocks: [
          {
            kind: 'theorem',
            body: 'Write $D = d/dx$ and $L = a_{n} D^{n} + \\cdots + a_{1} D + a_{0}$ with $a_{n} \\neq 0$. If the auxiliary polynomial $p(r) = a_{n} r^{n} + \\cdots + a_{0}$ factors as $a_{n} \\prod_{k} (r - r_{k})^{m_{k}}$, then $L = a_{n} \\prod_{k} (D - r_{k})^{m_{k}}$ as operators and $\\ker L$ has dimension $n$ with basis $x^{j} e^{r_{k} x}$ for $0 \\leq j < m_{k}$, plus $x^{j} e^{\\alpha x} \\cos(\\beta x)$ and $x^{j} e^{\\alpha x} \\sin(\\beta x)$ for conjugate pairs $\\alpha \\pm i\\beta$. Operator factors commute in the constant coefficient case, so the order of solution blocks is irrelevant.'
          },
          {
            kind: 'derivation',
            body: 'Repeated roots arise by differentiating in the parameter. Since $(D - r) e^{r x} = 0$ and $D$ commutes with $\\partial / \\partial r$, apply $(D - r)$ to $x e^{r x} = \\partial_{r} e^{r x}$ to get $(D - r)^{2} x e^{r x} = 0$ by the product rule in $r$. Induction gives $(D - r)^{m} x^{j} e^{r x} = 0$ for $j < m$. Equivalently, reduction of order on $(D - r)^{m} y = 0$ with $y = u(x) e^{r x}$ collapses to $u^{(m)} = 0$, so $u$ is a polynomial of degree below $m$. The limit $(e^{(r+\\epsilon)x} - e^{r x})/\\epsilon \\to x e^{r x}$ exhibits the extra solution as coalescing exponentials.'
          },
          {
            kind: 'remark',
            body: 'The **annihilator method** systematizes particular integrals: if forcing $R$ satisfies $A(D) R = 0$ for some constant coefficient $A$, then $A(D) L(D) y = 0$ determines the trial space, and resonance $A$ sharing a factor $(D - r)^{s}$ with $L$ forces multiplication of the naive trial by $x^{s}$. First order systems $Y^{{\\prime}} = B Y + F$ subsume the theory with $e^{B x}$ and Jordan chains replacing scalar blocks. Variable coefficients break commutativity $(xD) D \\neq D (xD)$, which is why Euler equations need separate treatment.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 4.2
  {
    sectionId: 'engmath-ch4-s2',
    readingTime: 10,
    intro: 'Particular integrals answer the forcing `$R(x)$` with trial functions matched to exponentials, sinusoids and polynomials. Resonance, when the forcing duplicates a homogeneous root, multiplies the trial by `$x^s$`. This section systematizes the trial table, the operator shortcuts `$1/f(a)$` and `$D^2 \\to -a^2$`, and the polynomial expansion route.',
    objectives: [
      'Select undetermined-coefficient trials for `$e^{ax}$`, trig and polynomial forcing',
      'Apply the `$x^s$` resonance correction when forcing overlaps `$y_c$`',
      'Evaluate `$1/f(D)$` shortcuts for exponential, sine-cosine and polynomial cases'
    ],
    concepts: [
      {
        term: 'Undetermined coefficients table',
        kind: 'method',
        statement: 'Each forcing family owns a **trial shape**: `$e^{ax}$` tries `$Ae^{ax}$`, `$\\sin bx$` or `$\\cos bx$` tries `$A\\cos bx + B\\sin bx$`, and degree-`$d$` polynomials try full degree-`$d$` polynomials. The `trial` coefficients are fixed by substituting into `$f(D)y = R$` and matching like terms. Trying a narrower shape than the family, such as only sine for sine forcing, starves the match because derivatives mix the pair.',
        detail: 'Products like `$xe^{ax}$` try the product of shapes, and sums split into separate trials added together.'
      },
      {
        term: 'Resonance correction x^s',
        kind: 'law',
        statement: 'When the forcing term already appears in `$y_c$`, multiply the trial by **`$x^s$`** where `$s$` is the multiplicity of the overlap: `$s = 1$` for a simple-root clash, `$s = 2$` for a double-root clash. The `resonance` factor restores independence from the homogeneous solutions, since unmodified trials vanish into `$y_c$` under `$f(D)$`. Testing the trial against `$y_c$` before substituting is the mandatory first move.',
        detail: 'Forcing `$e^{2x}$` against `$y_c$` holding `$e^{2x}$` tries `$Axe^{2x}$`; against `$(C_1 + C_2x)e^{2x}$` it tries `$Ax^2e^{2x}$`.'
      },
      {
        term: 'Exponential shortcut 1 over f(a)',
        kind: 'method',
        statement: 'For `$R(x) = e^{ax}$` with `$f(a) \\ne 0$`, the particular integral is **`$y_p = \\frac{e^{ax}}{f(a)}$`**, since `$f(D)e^{ax} = f(a)e^{ax}$`. The `exponential` shortcut replaces operator action by polynomial evaluation at `$a$`. When `$f(a) = 0$` with multiplicity `$s$`, differentiate instead: `$y_p = \\frac{x^s e^{ax}}{f^{(s)}(a)}$`.',
        detail: 'The shifted form `$e^{ax}V(x)$` obeys `$\\frac{1}{f(D)}e^{ax}V = e^{ax}\\frac{1}{f(D+a)}V$`, moving the exponential through the operator.'
      },
      {
        term: 'Sinusoid shortcut with D^2 to -a^2',
        kind: 'method',
        statement: 'For `$\\sin ax$` or `$\\cos ax$`, replace every `$D^2$` by **`$-a^2$`** to reduce `$1/f(D)$` to first order in `$D$`, then rationalize. The `sinusoid` rule works because `$D^2\\sin ax = -a^2\\sin ax$` and likewise for cosine. If substitution zeroes the denominator, multiply by `$x$` and retry, the harmonic-resonance case.',
        detail: 'Alternating `$\\sin \\leftrightarrow \\cos$` under `$D$` is why trials must always carry both parts together.'
      },
      {
        term: 'Polynomial forcing by ascending expansion',
        kind: 'insight',
        statement: 'For polynomial `$R$`, expand `$\\frac{1}{f(D)} = \\frac{1}{a_0}(1 + \\frac{a_1}{a_0}D + \\cdots)^{-1}$` in **ascending powers** of `$D$` and truncate beyond the degree of `$R$`, since higher derivatives of `$R$` vanish. The `ascending` expansion needs `$a_0 = f(0) \\ne 0$`; a zero constant term means `$D^s$` factors out first and the trial gains `$x^s$`. Binomial-type series to two or three terms cover most timed problems.',
        detail: 'With `$f(D) = 1 + D$`, `$\\frac{1}{1+D} \\approx 1 - D + D^2$` acting on quadratics gives exact `$y_p$` after truncation.'
      }
    ],
    examples: [
      {
        title: 'Resonant exponential forcing',
        problem: 'Find `$y_p$` for `$(D^2 - 3D + 2)y = 5e^{2x}$`.',
        steps: [
          { label: 'Step 1: Homogeneous roots and clash test', text: '```text\nf(m) = m^2 - 3m + 2 = (m-1)(m-2)\nyc holds e^x and e^(2x)\nForcing e^(2x) clashes with simple root m = 2 -> s = 1\n```\nThe forcing duplicates a **simple homogeneous root**, so the naive trial `$Ae^{2x}$` would be annihilated and the `resonance` factor `$x^1$` is required.' },
          { label: 'Step 2: Trial and substitution', text: 'Try `$y_p = Axe^{2x}$`: then `$\\frac{dy_p}{dx} = Ae^{2x}(1 + 2x)$` and `$\\frac{d^2y_p}{dx^2} = Ae^{2x}(4 + 4x)$`. Inserting into `$\\frac{d^2y_p}{dx^2} - 3\\frac{dy_p}{dx} + 2y_p = 5e^{2x}$` collapses the `$x$` terms, leaving `$Ae^{2x} = 5e^{2x}$`.' },
          { label: 'Step 3: Coefficient', text: 'Matching gives `$A = 5$`, so `$y_p = 5xe^{2x}$`. The operator shortcut agrees: `$f^{\\prime}(2) = 1$` in the form `$\\frac{x e^{2x}}{f^{\\prime}(2)}$` with `$f^{\\prime}(m) = 2m - 3$`, giving `$\\frac{xe^{2x}}{1} = xe^{2x}$` per unit forcing, scaled by `$5$`.' }
        ],
        result: '`$y_p = 5xe^{2x}$`.'
      },
      {
        title: 'Sinusoidal forcing via D^2 replacement',
        problem: 'Find `$y_p$` for `$(D^2 + 4)y = 3\\cos 3x$`.',
        steps: [
          { label: 'Step 1: Check resonance', text: '```text\nf(m) = m^2 + 4 -> roots +2i, -2i\nyc holds cos 2x, sin 2x\nForcing cos 3x is fresh (3 != 2) -> no resonance\n```\nThe forcing frequency `$3$` differs from the natural $2$, so direct replacement applies with no `$x$` factor.' },
          { label: 'Step 2: Replace D^2', text: 'Formally `$y_p = \\frac{3\\cos 3x}{D^2 + 4}$`; setting `$D^2 \\to -9$` gives `$y_p = \\frac{3\\cos 3x}{-9 + 4} = \\frac{3\\cos 3x}{-5}$`. The `sinusoid` shortcut evaluates the operator as the number `$-5$`.' },
          { label: 'Step 3: Answer', text: 'Hence `$y_p = -\\frac{3}{5}\\cos 3x$`. Substitution check: `$\\frac{d^2y_p}{dx^2} = \\frac{27}{5}\\cos 3x$`, and `$\\frac{27}{5} - \\frac{12}{5} = 3$` recovers the forcing.' }
        ],
        result: '`$y_p = -\\frac{3}{5}\\cos 3x$`.'
      }
    ],
    keyTakeaways: [
      'Match trials to forcing families; trig trials always carry sine plus cosine.',
      'Overlap with `$y_c$` of multiplicity `$s$` multiplies the trial by `$x^s$`.',
      'Non-resonant `$e^{ax}$` gives `$e^{ax}/f(a)$`; `$D^2 \\to -a^2$` handles sinusoids.',
      'Polynomials use ascending `$1/f(D)$` expansion truncated past the degree of `$R$`.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2009 — resonance trial selection (rephrased)
      {
        q: 'For `$(D^2 - 3D + 2)y = 5e^{2x}$`, the correct trial for `$y_p$` is:',
        options: [`$Ae^{2x}$`, `$Axe^{2x}$`, `$Ax^2e^{2x}$`, `$A\\cos 2x + B\\sin 2x$`],
        answer: 1,
        explanation: 'First roots are `$m = 1, 2$` so `$e^{2x}$` sits in `$y_c$`. Next the clash has multiplicity `$s = 1$`. Then the trial gains one factor `$x$`. Finally `$Axe^{2x}$` survives `$f(D)$` while `$Ae^{2x}$` is annihilated.'
      },
      {
        q: 'With $f(D) = D^2 + 4$, `$y_p$` for `$3\\cos 3x$` equals:',
        options: [`$\\frac{3\\cos 3x}{13}$`, `$-\\frac{3}{5}\\cos 3x$`, `$\\frac{3}{5}\\cos 3x$`, `$3x\\cos 3x$`],
        answer: 1,
        explanation: 'First no resonance since natural frequency is `$2$`. Next replace `$D^2$` by `$-9$`. Then denominator is `$-9 + 4 = -5$`. Finally `$\\frac{3}{-5}\\cos 3x$` matches the second option.'
      },
      // PYQ-pattern: GATE 2015 — particular integral of polynomial forcing (rephrased)
      {
        q: 'For `$(D + 1)y = x^2$`, the polynomial trial should be:',
        options: [`$Ax^2$`, `$Ax^2 + Bx + C$`, `$A + Bx$`, `$Ae^{x}$`],
        answer: 1,
        explanation: 'First forcing is degree `$2$`. Next the trial must span the full degree-`$2$` space. Then `$D$` lowers degree, mixing all three coefficients. Finally only the complete quadratic determines `$A, B, C$`.'
      },
      {
        q: 'If `$f(a) = 0$` simply (`$f^{\\prime}(a) \\ne 0$`) for forcing `$e^{ax}$`, then `$y_p$` is:',
        options: [`$\\frac{e^{ax}}{f(a)}$`, `$\\frac{xe^{ax}}{f^{\\prime}(a)}$`, 'Always zero', `$\\frac{e^{ax}}{f^{\\prime\\prime}(a)}$`],
        answer: 1,
        explanation: 'First direct division fails since `$f(a) = 0$`. Next simple zero means multiplicity `$s = 1$`. Then the rule gives `$\\frac{x^1 e^{ax}}{f^{\\prime}(a)}$`. Finally the `$x$` factor marks first-order resonance.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.3
  {
    sectionId: 'engmath-ch4-s3',
    readingTime: 10,
    intro: 'Variation of parameters handles arbitrary right-hand sides by letting the homogeneous constants vary with `$x$`. The Wronskian measures independence of the base solutions and appears in the denominator of the parameter integrals. This section derives the Wronskian test, Abel identity, the two-function formulas, and the standard-form discipline that makes them work.',
    objectives: [
      'Compute Wronskians and apply Abel `$W = Ce^{-\\int P\\,dx}$` for second order',
      'Derive and use `$\\frac{du_1}{dx} = -y_2R/W$`, `$\\frac{du_2}{dx} = y_1R/W$` for `$\\frac{d^2y}{dx^2} + P\\frac{dy}{dx} + Qy = R$`',
      'Reduce `$y_p$` to quadrature and verify it meets the equation'
    ],
    concepts: [
      {
        term: 'Wronskian and independence test',
        kind: 'theorem',
        statement: 'The **Wronskian** `$W = y_1 \\frac{dy_2}{dx} - y_2 \\frac{dy_1}{dx}$` written `$W = y_1\\frac{dy_2}{dx} - y_2\\frac{dy_1}{dx}$` vanishes identically when `$y_1, y_2$` are dependent, and stays nonzero everywhere when they are independent solutions of a linear equation with continuous coefficients. The `Wronskian` therefore certifies a fundamental pair in one determinant. A single zero crossing of `$W$` is impossible for such solution pairs: either always zero or never zero.',
        detail: 'For `$e^{m_1x}, e^{m_2x}$` the Wronskian is `$(m_2 - m_1)e^{(m_1+m_2)x}$`, nonzero exactly for distinct roots.'
      },
      {
        term: 'Abel identity',
        kind: 'theorem',
        statement: 'For `$\\frac{d^2y}{dx^2} + P(x)\\frac{dy}{dx} + Q(x)y = 0$`, the Wronskian obeys **Abel** `$W(x) = C e^{-\\int P(x)\\,dx}$`, so `$W$` is known up to a constant without solving the equation. The `Abel` formula differentiates `$W$` and uses the equation to cancel `$Q$`, leaving `$\\frac{dW}{dx} = -PW$`. Constant-coefficient `$P = a$` gives exponential `$W = Ce^{-ax}$` at once.',
        detail: 'Abel also runs backward: one solution plus `$W$` yields the second via `$y_2 = y_1\\int \\frac{W}{y_1^2}\\,dx$`, the reduction-of-order route.'
      },
      {
        term: 'Variation of parameters formulas',
        kind: 'method',
        statement: 'With `$y_c = C_1 y_1 + C_2 y_2$`, setting `$y_p = u_1 y_1 + u_2 y_2$` and imposing `$\\frac{du_1}{dx} y_1 + \\frac{du_2}{dx} y_2 = 0$` gives **parameter derivatives** `$\\frac{du_1}{dx} = -\\frac{y_2 R}{W}$` and `$\\frac{du_2}{dx} = \\frac{y_1 R}{W}$`. The `parameters` `$u_1, u_2$` follow by integration, and `$y_p$` assembles with no undetermined-coefficient guessing. The constraint kills second derivatives of `$u_i$`, keeping the system first order.',
        detail: 'Constants of integration in `$u_i$` merge into $y_c$, so they are set to zero when only one `$y_p$` is wanted.'
      },
      {
        term: 'Standard form is mandatory',
        kind: 'law',
        statement: 'The formulas require the **standard form** with leading coefficient `$1$`: divide `$a(x)\\frac{d^2y}{dx^2} + b(x)\\frac{dy}{dx} + c(x)y = F(x)$` through by `$a(x)$` so that `$R(x) = \\frac{F(x)}{a(x)}$`. The `standard` division rescales both `$R$` and the Wronskian consistently, and skipping it multiplies every parameter integral by the wrong factor. Points where `$a(x) = 0$` split the domain into separate validity intervals.',
        detail: 'Undetermined coefficients needs no such division, which is why mixing the two methods causes the most VOP sign errors.'
      },
      {
        term: 'When VOP beats guessing',
        kind: 'insight',
        statement: 'Variation of parameters is the **universal fallback**: it integrates any continuous `$R(x)$` such as `$\\sec x$`, `$\\ln x$` or piecewise forcing that no trial table covers. The `universal` price is quadrature that may leave non-elementary integrals, plus more algebra than a well-chosen trial. Prefer trials for exponential, trig and polynomial forcing; deploy VOP for everything else.',
        detail: 'Resonance needs no special casing here: the Wronskian denominator automatically produces the `$x$` factors through integration.'
      }
    ],
    examples: [
      {
        title: 'Wronskian and Abel check',
        problem: 'For `$\\frac{d^2y}{dx^2} - 3\\frac{dy}{dx} + 2y = 0$` stated as `$\\frac{d^2y}{dx^2} - 3\\frac{dy}{dx} + 2y = 0$` with base `$y_1 = e^x$`, `$y_2 = e^{2x}$`, compute `$W$` directly and via Abel.',
        steps: [
          { label: 'Step 1: Direct determinant', text: '```text\nW = y1*y2prime - y2*y1prime\ny1 = e^x, y1prime = e^x; y2 = e^(2x), y2prime = 2e^(2x)\nW = e^x*2e^(2x) - e^(2x)*e^x = e^(3x)\n```\nThe determinant simplifies to `$W = e^{3x}$`, never zero, confirming an **independent** pair.' },
          { label: 'Step 2: Abel prediction', text: 'Standard form has `$P(x) = -3$`, so `$W = Ce^{-\\int(-3)\\,dx} = Ce^{3x}$`. Matching `$C = 1$` reproduces the direct computation, and the `Abel` exponential structure is verified.' },
          { label: 'Step 3: Meaning', text: 'Nonzero `$W$` licenses the VOP denominator `$1/W = e^{-3x}$` everywhere. Any `$R(x)$` can now be processed by quadrature with this pair.' }
        ],
        result: '`$W = e^{3x}$` by both routes; `$y_1, y_2$` independent.'
      },
      {
        title: 'VOP for tangent-like forcing',
        problem: 'Find `$y_p$` for `$\\frac{d^2y}{dx^2} + y = \\sec x$` given `$\\frac{d^2y}{dx^2} + y = \\sec x$` on `$(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$`.',
        steps: [
          { label: 'Step 1: Base and Wronskian', text: '```text\nHomogeneous: m^2 + 1 = 0 -> y1 = cos x, y2 = sin x\nW = cos x * cos x - sin x * (-sin x) = 1\nR(x) = sec x (leading coeff already 1)\n```\nThe pair is **independent** with constant `Wronskian` `$W = 1$`, and the equation is already `standard`.' },
          { label: 'Step 2: Parameter integrals', text: 'Formulas give `$\\frac{du_1}{dx} = -\\frac{\\sin x \\sec x}{1} = -\\tan x$` and `$\\frac{du_2}{dx} = \\frac{\\cos x \\sec x}{1} = 1$`. Integration yields `$u_1 = \\ln|\\cos x|$` and `$u_2 = x$` up to homogeneous constants.' },
          { label: 'Step 3: Assemble', text: 'Thus `$y_p = u_1 y_1 + u_2 y_2 = \\cos x\\,\\ln|\\cos x| + x\\sin x$`. No trial table holds $\\sec x$, so the `universal` method earns its keep; differentiation verifies `$\\frac{d^2y_p}{dx^2} + y_p = \\sec x$` in `$\\frac{d^2}{dx^2}$` form.' }
        ],
        result: '`$y_p = x\\sin x + \\cos x\\,\\ln|\\cos x|$`.'
      }
    ],
    keyTakeaways: [
      'Wronskian `$W = y_1\\frac{dy_2}{dx} - y_2\\frac{dy_1}{dx}$` tests independence; nonzero everywhere for fundamental pairs.',
      'Abel `$W = Ce^{-\\int P\\,dx}$` gives `$W$` from `$P$` alone in second order.',
      'VOP: `$\\frac{du_1}{dx} = -y_2R/W$`, `$\\frac{du_2}{dx} = y_1R/W$`, then `$y_p = u_1y_1 + u_2y_2$`.',
      'Divide to leading-coefficient `$1$` first; VOP covers forcing no trial can touch.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2008 — Wronskian of exponential pair (rephrased)
      {
        q: 'The Wronskian of `$y_1 = e^x$`, `$y_2 = e^{2x}$` is:',
        options: [`$e^{3x}$`, `$e^{2x}$`, `$1$`, `$0$`],
        answer: 0,
        explanation: 'First `$W = y_1\\frac{dy_2}{dx} - y_2\\frac{dy_1}{dx}$` in derivative form. Next `$\\frac{dy_1}{dx} = e^x$` and `$\\frac{dy_2}{dx} = 2e^{2x}$`. Then `$W = 2e^{3x} - e^{3x} = e^{3x}$`. Finally nonzero `$W$` confirms independence.'
      },
      {
        q: 'For `$\\frac{d^2y}{dx^2} + P\\frac{dy}{dx} + Qy = 0$`, Abel gives `$W$` proportional to:',
        options: [`$e^{\\int P\\,dx}$`, `$e^{-\\int P\\,dx}$`, `$e^{\\int Q\\,dx}$`, 'A constant always'],
        answer: 1,
        explanation: 'First differentiate `$W$` and substitute the equation. Next `$Q$` terms cancel leaving `$\\frac{dW}{dx} = -PW$`. Then separation gives `$\\ln|W| = -\\int P\\,dx + C$`. Finally `$W = Ce^{-\\int P\\,dx}$`.'
      },
      // PYQ-pattern: GATE 2016 — variation of parameters setup (rephrased)
      {
        q: 'In VOP with `$y_p = u_1y_1 + u_2y_2$`, the standard constraint imposed is:',
        options: [`$u_1 y_1 + u_2 y_2 = 0$`, `$\\frac{du_1}{dx} y_1 + \\frac{du_2}{dx} y_2 = 0$`, `$u_1 + u_2 = 0$`, `$W = 0$`],
        answer: 1,
        explanation: 'First `$\\frac{dy_p}{dx}$` would spawn second derivatives of `$u_i$`. Next setting `$\\frac{du_1}{dx} y_1 + \\frac{du_2}{dx} y_2 = 0$` removes them. Then the remaining system solves for `$\\frac{du_1}{dx}, \\frac{du_2}{dx}$`. Finally `$W \\ne 0$` guarantees a unique solution.'
      },
      {
        q: 'Before applying VOP to `$x^2\\frac{d^2y}{dx^2} + x\\frac{dy}{dx} + y = \\ln x$`, the correct `$R(x)$` is:',
        options: [`$\\ln x$`, `$\\frac{\\ln x}{x^2}$`, `$x^2\\ln x$`, `$0$`],
        answer: 1,
        explanation: 'First VOP needs leading coefficient `$1$`. Next divide the whole equation by `$x^2$`. Then the right side becomes `$\\frac{\\ln x}{x^2}$`. Finally `$x = 0$` is excluded from the domain.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Wronskian geometry and variation of parameters',
        blocks: [
          {
            kind: 'theorem',
            body: 'For $y^{{\\prime\\prime}} + P(x) y^{{\\prime}} + Q(x) y = 0$ with continuous coefficients on an interval $I$, the **Abel identity** states $W(x) = C \\exp(-\\int P(x) \\, dx)$ where $W = y_{1} y_{2}^{{\\prime}} - y_{2} y_{1}^{{\\prime}}$. Hence either $W$ vanishes identically and $y_{1}, y_{2}$ are dependent, or $W$ never vanishes on $I$ and the pair is a fundamental system. Zeros of $W$ cannot be isolated without degeneracy of the equation: vanishing at one point forces $C = 0$ and dependence everywhere. The formula generalizes to $W^{{\\prime}} = -\\mathrm{tr}(B) W$ for systems $Y^{{\\prime}} = B Y$.'
          },
          {
            kind: 'proof',
            body: 'Differentiate the determinant: $W^{{\\prime}} = y_{1} y_{2}^{{\\prime\\prime}} - y_{2} y_{1}^{{\\prime\\prime}}$ since the $y_{1}^{{\\prime}} y_{2}^{{\\prime}}$ terms cancel. Substitute $y_{k}^{{\\prime\\prime}} = -P y_{k}^{{\\prime}} - Q y_{k}$ for each solution; the $Q$ terms cancel and $W^{{\\prime}} = -P (y_{1} y_{2}^{{\\prime}} - y_{2} y_{1}^{{\\prime}}) = -P W$. This linear equation integrates to the exponential form. If $W(x_{0}) = 0$ then $C = 0$, so $W \\equiv 0$, and the columns $(y_{k}(x_{0}), y_{k}^{{\\prime}}(x_{0}))^{T}$ are dependent, giving constants $c_{1}, c_{2}$ whose combination has zero Cauchy data and hence vanishes by uniqueness.'
          },
          {
            kind: 'application',
            body: 'With $W \\neq 0$ and equation in standard form $y^{{\\prime\\prime}} + P y^{{\\prime}} + Q y = R$, set $y_{p} = u_{1} y_{1} + u_{2} y_{2}$ with $u_{1}^{{\\prime}} = -y_{2} R / W$ and $u_{2}^{{\\prime}} = y_{1} R / W$. Integration gives $y_{p}(x) = \\int_{x_{0}}^{x} G(x,s) R(s) \\, ds$ with Green kernel $G(x,s) = (y_{1}(s) y_{2}(x) - y_{1}(x) y_{2}(s)) / W(s)$. The same kernel inverts $L$ with homogeneous boundary data, so variation of parameters is the one dimensional Green function. Standard form is mandatory: dividing by the leading coefficient first is the most common error.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 4.4
  {
    sectionId: 'engmath-ch4-s4',
    readingTime: 8,
    intro: 'Cauchy-Euler equations carry variable coefficients `$x^k$` matched to derivatives of matching order, and the exponential change `$x = e^z$` converts them to constant-coefficient form. This section derives the `$xD = \\theta$` operator dictionary, the `$m(m-1)\\cdots$` auxiliary pattern, and the logarithmic factors for repeated and complex `$m$`.',
    objectives: [
      'Recognize equidimensional form `$x^2\\frac{d^2y}{dx^2} + ax\\frac{dy}{dx} + by = R$` and substitute `$x = e^z$`',
      'Build the `$m$`-auxiliary equation and translate its roots into `$x^m$`, `$\\ln x$` and oscillatory blocks',
      'Solve full equations by constant-coefficient methods in `$z$` and return to `$x$`'
    ],
    concepts: [
      {
        term: 'Equidimensional form and substitution',
        kind: 'definition',
        statement: 'A **Cauchy-Euler** equation matches each derivative order with the same power of `$x$`: `$x^n y^{(n)} + \\cdots + a_1 x\\frac{dy}{dx} + a_0 y = R(x)$`. The `equidimensional` balance means scaling `$x \\to tx$` preserves the shape, and `$x = e^z$` (so `$z = \\ln x$`) converts every `$x^k y^{(k)}$` to constant-coefficient `$\\theta$` derivatives. The domain excludes `$x = 0$`, with `$x > 0$` standard and `$|x|$` extensions by symmetry.',
        detail: 'Legendre linear equations `$(ax + b)$`-versions reduce the same way with `$ax + b = e^z$`.'
      },
      {
        term: 'Operator dictionary xD = theta',
        kind: 'theorem',
        statement: 'With `$\\theta = \\frac{d}{dz}$`, the dictionary reads **`$xD = \\theta$`** and `$x^2 D^2 = \\theta(\\theta - 1)$`, extending to `$x^n D^n = \\theta(\\theta-1)\\cdots(\\theta-n+1)$`. The `dictionary` follows from `$\\frac{dy}{dx} = \\frac{1}{x}\\frac{dy}{dz}$` by the chain rule applied repeatedly. Substitution therefore maps `$x^2\\frac{d^2y}{dx^2} + ax\\frac{dy}{dx} + by$` to `$[\\theta(\\theta-1) + a\\theta + b]y$` with constant coefficients.',
        detail: 'First-order `$x\\frac{dy}{dx} + ay = R$` maps to `$\\frac{dy}{dz} + ay = R(e^z)$`, linear in `$z$` at once.'
      },
      {
        term: 'Auxiliary equation in m',
        kind: 'method',
        statement: 'Trial `$y = x^m$` in the homogeneous equation gives a polynomial for **`$m$`** directly: for second order `$m(m-1) + am + b = 0$`. The `power` trial works because each `$x^k D^k$` contributes one falling-factorial factor. Distinct `$m_1 \\ne m_2$` give `$C_1 x^{m_1} + C_2 x^{m_2}$`, the exact image of distinct exponentials under `$x = e^z$`.',
        detail: 'Trying `$e^{mx}$` here is the signature error: the natural trial is a power `$x^m$`, not an exponential.'
      },
      {
        term: 'Repeated and complex m',
        kind: 'method',
        statement: 'Repeated `$m$` of multiplicity `$r$` contributes **`$(\\ln x)$` factors**: `$x^m(C_1 + C_2\\ln x + \\cdots)$`, the image of `$x$`-factors under `$z = \\ln x$`. Complex `$m = \\alpha \\pm i\\beta$` gives `$x^\\alpha(C_1\\cos(\\beta\\ln x) + C_2\\sin(\\beta\\ln x))$`, oscillations in `$\\ln x$` with envelope `$x^\\alpha$`. The `logarithmic` factors vanish at `$x = 1$`, pinning repeated-root solutions there regardless of constants.',
        detail: 'Double `$m = 1$` yields `$C_1 x + C_2 x\\ln x$`, the most-queried repeated case.'
      },
      {
        term: 'Right-hand side travels with the substitution',
        kind: 'insight',
        statement: 'The forcing becomes **`$R(e^z)$`** in the `$z$` equation, so familiar trials apply in `$z$` before translating back. Polynomial `$R(x) = x^k$` turns into exponential `$e^{kz}$`, exactly the resonant family when `$k$` matches a root. The `forcing` dictionary means every constant-coefficient tool (trials, resonance, VOP) transfers wholesale, with `$z$` answers converted by `$z = \\ln x$`.',
        detail: 'Forcing `$\\ln x$` becomes `$z$` itself, a polynomial trial in the `$z$` world.'
      }
    ],
    examples: [
      {
        title: 'Homogeneous Cauchy-Euler with real roots',
        problem: 'Solve `$x^2\\frac{d^2y}{dx^2} - 2x\\frac{dy}{dx} - 4y = 0$` for `$x > 0$`.',
        steps: [
          { label: 'Step 1: Power trial', text: '```text\nTry y = x^m\nyprime = m x^(m-1), ydoubleprime = m(m-1) x^(m-2)\nSubstitute: [m(m-1) - 2m - 4] x^m = 0\nAuxiliary: m^2 - 3m - 4 = 0\n```\nEach `$x^2$` cancels against `$x^{m-2}$`, leaving the **quadratic** `$m^2 - 3m - 4 = (m-4)(m+1)$`.' },
          { label: 'Step 2: Roots', text: 'Roots `$m = 4$` and `$m = -1$` are real and distinct, giving `$y = C_1 x^4 + C_2 x^{-1}$`. The `power` pair replaces the exponential pair of constant-coefficient theory.' },
          { label: 'Step 3: Operator cross-check', text: 'Via `$x = e^z$`, `$\\theta(\\theta-1) - 2\\theta - 4 = \\theta^2 - 3\\theta - 4$` with the same roots, and `$e^{4z} = x^4$`, `$e^{-z} = x^{-1}$` match. Both routes agree.' }
        ],
        result: '`$y = C_1 x^4 + C_2/x$` for `$x > 0$`.'
      },
      {
        title: 'Repeated root gives logarithm',
        problem: 'Solve `$x^2\\frac{d^2y}{dx^2} - x\\frac{dy}{dx} + y = 0$` for `$x > 0$`.',
        steps: [
          { label: 'Step 1: Auxiliary', text: '```text\nPower trial y = x^m gives m(m-1) - m + 1 = 0\nSimplify: m^2 - 2m + 1 = (m-1)^2 = 0\nDouble root m = 1\n```\nMultiplicity two in `$m$` mirrors repeated exponential roots in `$z$`, demanding a **logarithmic** second solution.' },
          { label: 'Step 2: Build the pair', text: 'First solution `$y_1 = x^1 = x$`; second gains `$\\ln x$` to give `$y_2 = x\\ln x$`. Since `$\\frac{dy_1}{dx} = 1$` and `$\\frac{dy_2}{dx} = \\ln x + 1$`, the Wronskian is `$W = x(\\ln x + 1) - x\\ln x = x \\ne 0$` for `$x > 0$`.' },
          { label: 'Step 3: General solution', text: 'Hence `$y = C_1 x + C_2 x\\ln x$`. At `$x = 1$` the logarithm vanishes, so `$y(1) = C_1$` reads the first constant directly.' }
        ],
        result: '`$y = x(C_1 + C_2\\ln x)$` for `$x > 0$`.'
      }
    ],
    keyTakeaways: [
      'Match powers to orders; `$x = e^z$` converts to constant coefficients via `$xD = \\theta$`.',
      'Power trial `$x^m$` gives `$m(m-1) + am + b = 0$` in second order.',
      'Repeated `$m$` appends `$\\ln x$` factors; complex `$\\alpha \\pm i\\beta$` gives `$x^\\alpha$` times trig in `$\\beta\\ln x$`.',
      'Forcing travels as `$R(e^z)$`; solve in `$z$`, return with `$z = \\ln x$`.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2011 — Cauchy-Euler auxiliary roots (rephrased)
      {
        q: 'Trying `$y = x^m$` in `$x^2\\frac{d^2y}{dx^2} - 2x\\frac{dy}{dx} - 4y = 0$` (derivatives in `$x$) gives:',
        options: [`$m^2 - 3m - 4 = 0$`, `$m^2 - 2m - 4 = 0$`, `$m^2 - 3m + 4 = 0$`, `$m^2 + 3m + 4 = 0$`],
        answer: 0,
        explanation: 'First `$x^2 \\cdot m(m-1)x^{m-2} = m(m-1)x^m$`. Next `$x \\cdot mx^{m-1} = mx^m$` with coefficient `$-2$`. Then divide `$x^m$: `$m(m-1) - 2m - 4 = 0$`. Finally expand to `$m^2 - 3m - 4 = 0$`.'
      },
      {
        q: 'Under $x = e^z$, `$x\\frac{dy}{dx}$` equals:',
        options: [`$\\frac{d^2y}{dz^2}$`, `$\\frac{dy}{dz}$`, `$e^z\\frac{dy}{dz}$`, '$\\frac{dy}{dx}$ unchanged'],
        answer: 1,
        explanation: 'First chain rule: `$\\frac{dy}{dx} = \\frac{dy}{dz}\\frac{dz}{dx}$`. Next `$z = \\ln x$` gives `$\\frac{dz}{dx} = \\frac{1}{x}$`. Then `$\\frac{dy}{dx} = \\frac{1}{x}\\frac{dy}{dz}$`. Finally multiply by `$x$` to get `$\\theta y$`.'
      },
      // PYQ-pattern: GATE 2017 — repeated root logarithmic solution (rephrased)
      {
        q: 'If the Cauchy-Euler auxiliary has double root `$m = 1$, the solution pair is:',
        options: [`$x$ and $x^2$`, `$x$ and $x\\ln x$`, `$1$ and $\\ln x$`, '$e^x$ and `$xe^x$`'],
        answer: 1,
        explanation: 'First one solution is `$x^1 = x$`. Next multiplicity two needs a second independent shape. Then the `$z$`-world `$x$`-factor becomes `$\\ln x$` since `$z = \\ln x$`. Finally `$x$` and `$x\\ln x$` have nonzero Wronskian `$x$`.'
      },
      {
        q: 'For `$m = 2 \\pm 3i$` in a Cauchy-Euler problem, the real solution block is:',
        options: [`$x^2(C_1\\cos(3\\ln x) + C_2\\sin(3\\ln x))$`, `$e^{2x}(C_1\\cos 3x + C_2\\sin 3x)$`, `$(C_1 + C_2\\ln x)x^2$`, `$C_1x^2 + C_2x^3$`],
        answer: 0,
        explanation: 'First envelope `$x^\\alpha = x^2$` from `$e^{2z}$`. Next oscillation runs in `$z = \\ln x$` at frequency `$3$`. Then real form needs cosine plus sine of `$3\\ln x$`. Finally exponentials `$e^{2x}$` belong to constant-coefficient problems, not here.'
      }
    ]
  }
]
