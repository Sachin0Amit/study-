import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 9: Laplace Transforms
// Sections 9.1 – 9.4. Master study content.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh09Content: SectionContent[] = [
  // ---------------------------------------------------------------- 9.1
  {
    sectionId: 'engmath-ch9-s1',
    readingTime: 8,
    intro: 'Laplace transformation converts differentiation in time into multiplication in a complex frequency variable, turning differential equations into algebra. The integral defining it converges only for functions of exponential order. This section states the definition, the existence condition and the core table of pairs.',
    objectives: [
      'State $\\mathcal{L}\\{f\\}(s) = \\int_{0}^{\\infty} e^{-st}f(t)\\,dt$ and its domain of convergence',
      'Test exponential order and read off the abscissa of convergence',
      'Recall standard pairs for exponentials, powers, sinusoids and impulses'
    ],
    concepts: [
      {
        term: 'Laplace integral definition',
        kind: 'definition',
        statement: 'The **Laplace** transform $\\mathcal{L}\\{f(t)\\}(s) = \\int_{0}^{\\infty} e^{-st}f(t)\\,dt$ integrates $f$ against a decaying exponential kernel `exp(-s*t)`. It is defined where the improper integral converges absolutely. Linearity $\\mathcal{L}\\{af + bg\\} = a\\mathcal{L}\\{f\\} + b\\mathcal{L}\\{g\\}$ follows from integral linearity.',
        detail: 'The lower limit $0$ builds in causality: only $t \\ge 0$ matters, with $f(t)$ multiplied by the unit step implicitly. Two functions differing only for $t < 0$ share the same transform. The variable $s$ is generally complex with $\\Re s$ large.'
      },
      {
        term: 'Exponential order and existence',
        kind: 'theorem',
        statement: 'A function is of **exponential order** when $|f(t)| \\le Me^{ct}$ for some $M$ and $c$ beyond a point, checked by `bound_M_exp_ct`. Then $\\mathcal{L}\\{f\\}$ exists for $\\Re s > c$. Piecewise continuity plus exponential order is sufficient. Growth like $e^{t^{2}}$ admits no Laplace transform.',
        detail: 'The constant $c$ is the abscissa of convergence: larger $\\Re s$ strengthens $e^{-st}$ enough to dominate $f$. Bounded sinusoids have $c = 0$, while $e^{at}$ has $c = a$. Discontinuities at finitely many jumps per finite interval remain harmless.'
      },
      {
        term: 'Standard transform pairs',
        kind: 'notation',
        statement: 'Core **pairs** include $\\mathcal{L}\\{1\\} = 1/s$, $\\mathcal{L}\\{t^{n}\\} = n!/s^{n+1}$, $\\mathcal{L}\\{e^{at}\\} = 1/(s - a)$ and $\\mathcal{L}\\{\\sin at\\} = a/(s^{2} + a^{2})$ with entries coded as `L_pair`. Cosine gives $s/(s^{2} + a^{2})$ and the Dirac impulse gives $1$. Each pair carries its convergence half-plane.',
        detail: 'All follow from elementary integration or Euler splitting of $e^{iat}$. The power formula extends to $n = 0$ consistently. Hyperbolic sine and cosine follow by sign flips in the denominator constant.'
      },
      {
        term: 'Heaviside step and Dirac impulse',
        kind: 'definition',
        statement: 'The **unit step** $u(t - a)$ shifts activation to $t = a$ with transform $e^{-as}/s$ via `step_shift`. The **impulse** $\\delta(t - a)$ sifts values with $\\int_{0}^{\\infty} \\delta(t - a)f(t)\\,dt = f(a)$ and transform $e^{-as}$. Both model switching and hammer blows in circuits.',
        detail: 'Steps build piecewise inputs by adding delayed copies, while impulses model idealized kicks of unit area. Sifting holds only when $a > 0$ lies inside integration range. Step differentiation yields the impulse in the distribution sense.'
      },
      {
        term: 'Linearity and uniqueness',
        kind: 'insight',
        statement: 'Linearity lets tables attack sums term by term through **superposition** with `aF_plus_bG`. Lerch uniqueness guarantees distinct continuous originals have distinct transforms. Partial-fraction splitting therefore inverts by matching table entries exactly.',
        detail: 'Uniqueness fails only at isolated points where values do not affect integrals. In practice this means time functions are recovered up to point values. Every inversion strategy leans on rewriting $F(s)$ as a sum of recognized pairs.'
      }
    ],
    examples: [
      {
        title: 'Transform of a damped sinusoid from first principles',
        problem: 'Compute $\\mathcal{L}\\{e^{-2t}\\sin 3t\\}$ for $t \\ge 0$ using the definition and table logic.',
        steps: [
          { label: 'Step 1', text: 'Write $\\sin 3t = (e^{i3t} - e^{-i3t})/(2i)$, so $e^{-2t}\\sin 3t$ is a combination of $e^{(-2 + 3i)t}$ and $e^{(-2 - 3i)t}$.\n```text\nsin 3t via Euler; combine with e^{-2t} -> two exponentials\n```' },
          { label: 'Step 2', text: 'Each exponential transforms as $1/(s - a)$ with $a = -2 \\pm 3i$, valid for $\\Re s > -2$. Linearity gives $\\frac{1}{2i}[1/(s + 2 - 3i) - 1/(s + 2 + 3i)]$.' },
          { label: 'Step 3', text: 'Combine over $(s + 2)^{2} + 9$ to get $3/[(s + 2)^{2} + 9]$. Exponential order $c = -2$ sets convergence for $\\Re s > -2$.' }
        ],
        result: '$\\mathcal{L}\\{e^{-2t}\\sin 3t\\} = 3/[(s + 2)^{2} + 9]$ for $\\Re s > -2$.'
      },
      {
        title: 'Exponential order test and abscissa',
        problem: 'Determine whether $f(t) = t^{2}e^{3t}$ and $g(t) = e^{t^{2}}$ admit Laplace transforms and state convergence regions.',
        steps: [
          { label: 'Step 1', text: 'For $f$, bound $|t^{2}e^{3t}| \\le Me^{(3 + \\epsilon)t}$ for any $\\epsilon > 0$ beyond large $t$, since polynomial growth is absorbed by an arbitrarily small exponential rate.' },
          { label: 'Step 2', text: 'Hence $f$ is of exponential order with abscissa $c = 3$, and $\\mathcal{L}\\{f\\} = 2/(s - 3)^{3}$ converges for $\\Re s > 3$.' },
          { label: 'Step 3', text: 'For $g$, $e^{t^{2}}$ outgrows every $Me^{ct}$, so no $c$ works and the Laplace integral diverges for all $s$.\n```text\nt^2 e^{3t}: order c=3, ROC Re s>3; e^{t^2}: no order, diverges\n```' }
        ],
        result: '$f$ transforms with $\\Re s > 3$ while $g(t) = e^{t^{2}}$ owns no Laplace transform anywhere.'
      }
    ],
    keyTakeaways: [
      'Definition $\\mathcal{L}\\{f\\}(s) = \\int_{0}^{\\infty} e^{-st}f(t)\\,dt$ plus linearity drives all table use.',
      'Exponential order $|f| \\le Me^{ct}$ guarantees existence for $\\Re s > c$.',
      'Pairs $1/s$, $n!/s^{n+1}$, $1/(s-a)$, $a/(s^{2}+a^{2})$ and $s/(s^{2}+a^{2})$ cover most items.',
      'Steps give $e^{-as}/s$ and impulses give $e^{-as}$, modeling delayed switching and kicks.'
    ],
    quiz: [
      {
        q: '$\\mathcal{L}\\{e^{4t}\\}$ for $t \\ge 0$ equals:',
        options: [`$1/(s + 4)$ for all $s$`, `$s/(s^{2} + 16)$`, `$4/(s^{2} + 16)$`, `$1/(s - 4)$ for $\\Re s > 4$`],
        answer: 3,
        explanation: 'Step 1: Integrate $\\int_{0}^{\\infty} e^{-(s-4)t}\\,dt = 1/(s-4)$. Step 2: Require $\\Re(s - 4) > 0$ for decay at infinity. Step 3: Reject the sinusoid pairs, which carry quadratic denominators.'
      },
      {
        q: 'Which function is NOT of exponential order?',
        options: [`$e^{t^{2}}$`, `$t^{5}$`, `$e^{3t}\\cos 2t$`, `$\\sin 7t$`],
        answer: 0,
        explanation: 'Step 1: Bound polynomials and modulated exponentials by $Me^{ct}$ with suitable $c$. Step 2: Show $e^{t^{2}}/e^{ct} \\to \\infty$ for every fixed $c$. Step 3: Conclude no abscissa can dominate doubly exponential growth.'
      },
      {
        // PYQ-pattern: GATE 2015 — Laplace of a power times exponential (rephrased, values changed)
        q: '$\\mathcal{L}\\{t^{2}e^{-t}\\}$ equals:',
        options: [`$1/(s+1)^{2}$`, `$2/(s-1)^{3}$`, `$2/(s+1)^{3}$`, `$1/s^{3}$`],
        answer: 2,
        explanation: 'Step 1: Start from $\\mathcal{L}\\{t^{2}\\} = 2/s^{3}$. Step 2: Apply frequency shift $s \\to s + 1$ for multiplication by $e^{-t}$. Step 3: Obtain $2/(s+1)^{3}$ valid for $\\Re s > -1$.'
      },
      {
        q: '$\\mathcal{L}\\{\\delta(t - 2)\\}$ with unit impulse at $t = 2$ equals:',
        options: [`$1$`, `$e^{-2s}$`, `$e^{2s}$`, `$1/s$`],
        answer: 1,
        explanation: 'Step 1: Apply sifting $\\int_{0}^{\\infty} \\delta(t-2)e^{-st}\\,dt = e^{-2s}$. Step 2: Note delay $a = 2$ becomes exponential $e^{-as}$ in $s$. Step 3: Distinguish from the step transform $e^{-2s}/s$ by the missing $1/s$ factor.'
      }
    ]
  },
  // ---------------------------------------------------------------- 9.2
  {
    sectionId: 'engmath-ch9-s2',
    readingTime: 9,
    intro: 'Operational rules move work from calculus to algebra: shifting in one domain becomes exponential weighting in the other, while differentiation becomes multiplication. Integration, periodic repetition and t-weighting each own a compact image. This section collects first and second shifting, derivative, integral, multiplication-by-t and periodic formulas.',
    objectives: [
      'Apply first shifting $e^{at}f(t) \\leftrightarrow F(s-a)$ and second shifting for delayed steps',
      'Transform derivatives, integrals and $t^{n}f(t)$ without re-integrating',
      'Handle periodic waveforms via one-period transforms'
    ],
    concepts: [
      {
        term: 'First shifting in s',
        kind: 'theorem',
        statement: 'The **first shifting** rule $\\mathcal{L}\\{e^{at}f(t)\\} = F(s - a)$ moves the image sideways, coded as `F_shift_a`. It turns damped sinusoids into shifted rational pairs. Convergence shifts by the same $a$ to $\\Re s > c + a$.',
        detail: 'Factor $e^{-(s-a)t} = e^{-st}e^{at}$ inside the integral to see the mechanism. Completing the square $(s + 2)^{2} + 9$ reverses the process during inversion. Every $e^{at}$ factor in time is a horizontal slide in $s$.'
      },
      {
        term: 'Second shifting in time',
        kind: 'theorem',
        statement: 'Delayed activation obeys **$\\mathcal{L}\\{f(t - a)u(t - a)\\} = e^{-as}F(s)$** with unit step `u_delay_a`. The exponential $e^{-as}$ encodes pure delay. Forgetting to shift $f$ itself alongside the step is the classic slip.',
        detail: 'Write the integral with $\\tau = t - a$ to expose $e^{-as}$ times the unshifted transform. Pulse inputs decompose into $u(t - a) - u(t - b)$ pairs. Each delayed copy contributes its own $e^{-as}$ factor.'
      },
      {
        term: 'Derivatives and integrals',
        kind: 'theorem',
        statement: 'Time **derivatives** give $\\mathcal{L}\\{f^{\\prime}\\} = sF(s) - f(0)$ and $\\mathcal{L}\\{f^{\\prime\\prime}\\} = s^{2}F(s) - sf(0) - f^{\\prime}(0)$ via `sF_minus_init`. Time integrals give $\\mathcal{L}\\{\\int_{0}^{t} f\\} = F(s)/s$. Initial data enter algebraically, which is why Laplace suits initial-value problems.',
        detail: 'Integration by parts produces the $s$-multiplication plus initial subtraction. Higher derivatives iterate the pattern with a triangular array of initial values. Division by $s$ smooths, matching integration in time.'
      },
      {
        term: 'Multiplication and division by t',
        kind: 'theorem',
        statement: 'Weighting by $t$ becomes **$\\mathcal{L}\\{t f(t)\\} = -F^{\\prime}(s)$** and division gives $\\mathcal{L}\\{f(t)/t\\} = \\int_{s}^{\\infty} F(\\sigma)\\,d\\sigma$, coded as `neg_dF_ds`. These trade awkward time factors for $s$-differentiation or integration. They invert powers into logarithms and conversely.',
        detail: 'Differentiating $F(s) = \\int e^{-st}f(t)\\,dt$ in $s$ pulls down $-t$. The division rule needs $f(t)/t$ to remain well behaved at $0$. Both directions avoid partial fractions when $t$-factors appear.'
      },
      {
        term: 'Periodic functions',
        kind: 'theorem',
        statement: 'For $T$-periodic $f$, the **periodic** formula $\\mathcal{L}\\{f\\} = \\frac{1}{1 - e^{-sT}}\\int_{0}^{T} e^{-st}f(t)\\,dt$ sums one period geometrically via `one_period_over`. Only the first hump needs integration. Square, sawtooth and rectified sine waves all submit to this single-period reduction.',
        detail: 'Splitting $[0, \\infty)$ into $[nT, (n+1)T]$ factors $e^{-nsT}$ from each block, leaving a geometric series in $e^{-sT}$. Convergence needs $\\Re s > 0$ for the series sum. Duty-cycle pulses follow by integrating a constant over the on-interval only.'
      }
    ],
    examples: [
      {
        title: 'Derivative rule on a second-order equation setup',
        problem: 'If $\\mathcal{L}\\{y(t)\\} = Y(s)$ with $y(0) = 1$ and $y^{\\prime}(0) = 0$, write $\\mathcal{L}\\{y^{\\prime\\prime} + 3y^{\\prime} + 2y\\}$ in terms of $Y(s)$.',
        steps: [
          { label: 'Step 1', text: 'Transform term by term: $\\mathcal{L}\\{y^{\\prime\\prime}\\} = s^{2}Y - s\\cdot 1 - 0$ and $\\mathcal{L}\\{y^{\\prime}\\} = sY - 1$.\n```text\nL{ypp} = s^2 Y - s; L{yp} = sY - 1\n```' },
          { label: 'Step 2', text: 'Add $3(sY - 1) + 2Y$ for the remaining terms. Collect $Y$ coefficients: $s^{2} + 3s + 2$.' },
          { label: 'Step 3', text: 'Combine constants $-s - 3$. Result $(s^{2} + 3s + 2)Y(s) - s - 3$ is ready for algebraic solution of $Y$.' }
        ],
        result: '$\\mathcal{L}\\{y^{\\prime\\prime} + 3y^{\\prime} + 2y\\} = (s^{2} + 3s + 2)Y(s) - s - 3$.'
      },
      {
        title: 'Periodic square wave via one period',
        problem: 'Find $\\mathcal{L}\\{f\\}$ for the $2$-periodic square wave with $f(t) = 1$ on $[0, 1)$ and $0$ on $[1, 2)$.',
        steps: [
          { label: 'Step 1', text: 'One-period integral is $\\int_{0}^{1} e^{-st}\\,dt = (1 - e^{-s})/s$. Period $T = 2$ gives denominator $1 - e^{-2s}$.' },
          { label: 'Step 2', text: 'Divide to get $F(s) = (1 - e^{-s})/[s(1 - e^{-2s})]$. Factor $1 - e^{-2s} = (1 - e^{-s})(1 + e^{-s})$.' },
          { label: 'Step 3', text: 'Cancel $(1 - e^{-s})$ to leave $F(s) = 1/[s(1 + e^{-s})]$. The compact form reveals alternating echoes in time.\n```text\none period (1-e^-s)/s; divide by (1-e^{-2s}) -> 1/[s(1+e^-s)]\n```' }
        ],
        result: '$F(s) = 1/[s(1 + e^{-s})]$ for $\\Re s > 0$. Expansion in $e^{-s}$ recovers the on-off pulse train.'
      }
    ],
    keyTakeaways: [
      'First shift $e^{at}f(t) \\leftrightarrow F(s - a)$ slides the image horizontally.',
      'Second shift $f(t-a)u(t-a) \\leftrightarrow e^{-as}F(s)$ encodes pure delay.',
      'Derivatives give $sF - f(0)$ patterns while integrals give $F(s)/s$.',
      'Weights $t f \\leftrightarrow -F^{\\prime}(s)$ and $T$-periodic $F = (\\int_{0}^{T} e^{-st}f)/(1 - e^{-sT})$ complete the toolkit.'
    ],
    quiz: [
      {
        q: 'If $\\mathcal{L}\\{f(t)\\} = F(s)$, then $\\mathcal{L}\\{e^{3t}f(t)\\}$ equals:',
        options: [`$F(s + 3)$`, `$e^{-3s}F(s)$`, `$F(s - 3)$`, `$F(3s)$`],
        answer: 2,
        explanation: 'Step 1: Absorb $e^{3t}$ into $e^{-st}$ to get $e^{-(s-3)t}$. Step 2: Recognize the integral as $F$ evaluated at $s - 3$. Step 3: Distinguish from delay $e^{-as}F(s)$, which shifts in time instead.'
      },
      {
        // PYQ-pattern: GATE 2018 — Laplace of a delayed step function (rephrased, values changed)
        q: '$\\mathcal{L}\\{u(t - 2)\\}$ with unit step delayed by $2$ equals:',
        options: [`$1/s$`, `$e^{-2s}/s$`, `$e^{2s}/s$`, `$e^{-2s}$`],
        answer: 1,
        explanation: 'Step 1: Write the integral $\\int_{2}^{\\infty} e^{-st}\\,dt = e^{-2s}/s$. Step 2: Identify the $e^{-as}$ delay factor with $a = 2$. Step 3: Keep the $1/s$ of the unshifted step alongside the exponential.'
      },
      {
        q: 'If $Y(s) = \\mathcal{L}\\{y\\}$ with $y(0) = 2$, then $\\mathcal{L}\\{y^{\\prime}\\}$ equals:',
        options: [`$sY(s) + 2$`, `$Y(s)/s$`, `$s^{2}Y(s) - 2$`, `$sY(s) - 2$`],
        answer: 3,
        explanation: 'Step 1: Recall $\\mathcal{L}\\{y^{\\prime}\\} = sY(s) - y(0)$. Step 2: Substitute $y(0) = 2$ with the minus sign intact. Step 3: Reject division and second-order forms as mismatched to first derivatives.'
      },
      {
        q: 'For $1$-periodic $f$ with $\\int_{0}^{1} e^{-st}f(t)\\,dt = 1/(s+1)$, $\\mathcal{L}\\{f\\}$ equals:',
        options: [`$1/[(s+1)(1 - e^{-s})]$`, '$1/(s+1)$ alone', `$e^{-s}/(s+1)$`, `$(1 - e^{-s})/(s+1)$`],
        answer: 0,
        explanation: 'Step 1: Divide the one-period integral by $1 - e^{-sT}$ with $T = 1$. Step 2: Preserve the $1/(s+1)$ block untouched in the numerator. Step 3: Confirm the denominator accounts for infinite periodic repetition.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Operational calculus as algebra of exponential order',
        blocks: [
          {
            kind: 'theorem',
            body: 'If $|f(t)| \\leq M e^{c t}$ for $t \\geq 0$ and $F(s) = \\int_{0}^{\\infty} e^{-s t} f(t) \\, dt$ converges for $\\Re(s) > c$, then $\\mathcal{L}[f^{{\\prime}}] = s F(s) - f(0)$ and $\\mathcal{L}[f^{{\\prime\\prime}}] = s^{2} F(s) - s f(0) - f^{{\\prime}}(0)$. More generally $\\mathcal{L}[f^{(n)}] = s^{n} F(s) - \\sum_{k=0}^{n-1} s^{n-1-k} f^{(k)}(0)$. Integration in time divides by $s$: $\\mathcal{L}[\\int_{0}^{t} f(\\tau) \\, d\\tau] = F(s)/s$. The abscissa $c$ bounds growth: differentiation in time is multiplication by $s$ modulo initial data, the engine of the method.'
          },
          {
            kind: 'derivation',
            body: 'The first shift $\\mathcal{L}[e^{a t} f(t)] = F(s-a)$ follows by absorbing $e^{a t}$ into $e^{-s t}$. The second shift $\\mathcal{L}[u(t-a) f(t-a)] = e^{-a s} F(s)$ with Heaviside $u$ follows from $\\tau = t - a$. Multiplication by $t$ differentiates in $s$: $\\mathcal{L}[t^{n} f(t)] = (-1)^{n} F^{(n)}(s)$ by differentiating $e^{-s t}$ under the integral, justified by exponential domination. Dually $\\mathcal{L}[f(t)/t] = \\int_{s}^{\\infty} F(\\sigma) \\, d\\sigma$. Each rule trades calculus in one domain for algebra in the other.'
          },
          {
            kind: 'remark',
            body: 'Periodic $f$ with period $T$ sums geometrically: $\\mathcal{L}[f] = (1 - e^{-T s})^{-1} \\int_{0}^{T} e^{-s t} f(t) \\, dt$. The initial value theorem $\\lim_{t \\to 0^{+}} f(t) = \\lim_{s \\to \\infty} s F(s)$ and final value theorem $\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0^{+}} s F(s)$ are Tauberian: they require existence of the time limits plus pole location hypotheses, since $F(s) = 1/(s^{2}+1)$ gives a nonexistent $\\lim_{s \\to 0} s F(s)$ oscillation. Impulses $\\delta$ and doublets fit via distributions with $\\mathcal{L}[\\delta] = 1$.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 9.3
  {
    sectionId: 'engmath-ch9-s3',
    readingTime: 8,
    intro: 'Inversion returns from the $s$-domain to time, mostly by rewriting $F(s)$ as a sum of table entries through partial fractions. Products in $s$ correspond to convolution in time, which handles repeated kernels without factorization heroics. This section covers partial-fraction inversion and the convolution theorem with its integral.',
    objectives: [
      'Invert rational $F(s)$ by partial fractions including repeated and quadratic factors',
      'State $(f * g)(t) = \\int_{0}^{t} f(\\tau)g(t - \\tau)\\,d\\tau$ and $\\mathcal{L}\\{f * g\\} = F(s)G(s)$',
      'Choose between partial fractions and convolution for products in $s$'
    ],
    concepts: [
      {
        term: 'Partial-fraction inversion',
        kind: 'method',
        statement: 'Decompose rational $F(s)$ into **first-order** $A/(s - a)$, repeated $B/(s - a)^{k}$ and quadratic $(Cs + D)/(s^{2} + bs + c)$ blocks via `apart_F`. Each block inverts from the table directly. Cover-up finds $A$ for distinct poles in one substitution.',
        detail: 'Repeated roots need the full chain down to power $1$, while irreducible quadratics complete the square toward shifted sine-cosine pairs. Always verify by recombining over the common denominator. Improper $F(s)$ first divides out a polynomial.'
      },
      {
        term: 'Repeated and quadratic factors',
        kind: 'insight',
        statement: 'Powers $(s - a)^{-k}$ invert to **$t^{k-1}e^{at}/(k-1)!$** through `t_power_times_exp`. Quadratics $(s + \\alpha)^{2} + \\beta^{2}$ invert to shifted $e^{-\\alpha t}\\cos\\beta t$ and $e^{-\\alpha t}\\sin\\beta t$. Matching numerator degree to denominator structure selects the split.',
        detail: 'The factorial normalizes repeated integration of the exponential. Damping $\\alpha$ and frequency $\\beta$ read from completed squares. A linear numerator over a quadratic splits into cosine-type and sine-type pieces.'
      },
      {
        term: 'Convolution integral',
        kind: 'definition',
        statement: 'The **convolution** $(f * g)(t) = \\int_{0}^{t} f(\\tau)g(t - \\tau)\\,d\\tau$ blends two causal signals with sliding weight `slide_tau`. It is commutative, associative and distributive over addition. Unit-step factors enforce the $0$ to $t$ limits automatically.',
        detail: 'At each $t$ the integral weights $f(\\tau)$ by the reversed $g(t - \\tau)$. Graphically one waveform sweeps past the other accumulating overlap area. Zero initial rest makes the finite limits exact.'
      },
      {
        term: 'Convolution theorem',
        kind: 'theorem',
        statement: 'The **theorem** $\\mathcal{L}\\{f * g\\} = F(s)G(s)$ turns $s$-products into time convolutions, applied as `product_to_convolution`. It inverts $1/[(s - a)(s - b)]$ as an exponential convolution without solving linear systems. Dually, time products have no such simple image.',
        detail: 'Swapping integration order proves the factorization. The result shines for repeated identical factors like $1/(s^{2} + 1)^{2}$ where partial fractions tangle. Recognizing $F(s)G(s)$ structure is the trigger to switch routes.'
      },
      {
        term: 'Route selection',
        kind: 'method',
        statement: 'Choose **partial fractions** for plain rational $F(s)$ with factorable denominators via `prefer_apart`, and **convolution** for products involving nonrational $F(s)$ or repeated oscillatory kernels. Shifting rules compose with either route. A quick degree and factor scan decides in seconds.',
        detail: 'If $F(s)$ splits into table entries, fractions are fastest. If one factor inverts to a messy special function, convolution keeps it inside an integral instead. Mixed strategies shift first, then split or convolve.'
      }
    ],
    derivations: [
      {
        title: 'Laplace Convolution Theorem for Causal Signals',
        statement: 'Derivation sketch of $\\mathcal{L}\\{f \\ast g\\} = F(s)G(s)$ with $(f \\ast g)(t) = \\int_{0}^{t}f(\\tau)g(t - \\tau) \\, d\\tau$',
        prerequisites: [
          'Laplace integral $F(s) = \\int_{0}^{\\infty}e^{-st}f(t) \\, dt$ for exponential order',
          'Causal signals vanish for $t < 0$ via unit-step factors',
          'Double integrals swap order under absolute convergence',
        ],
        steps: [
          {
            label: 'Step 1: Insert the convolution into the Laplace integral',
            formula: '$$\\int_{0}^{\\infty}e^{-st}\\int_{0}^{t}f(\\tau)g(t-\\tau) \\, d\\tau \\, dt$$',
            explanation: 'Start from the definition of the transform applied to $f \\ast g$, which nests the finite convolution integral inside the semi-infinite Laplace integral. This substitution works because both $f$ and $g$ are causal, so the $0$ to $t$ limits are exact. The resulting triangle region $0 \\le \\tau \\le t < \\infty$ sets up the swap.',
          },
          {
            label: 'Step 2: Swap the order of integration',
            formula: '$$\\int_{0}^{\\infty}f(\\tau)\\int_{\\tau}^{\\infty}e^{-st}g(t-\\tau) \\, dt \\, d\\tau$$',
            explanation: 'Exchange the integrals so $\\tau$ becomes outer and $t$ runs from $\\tau$ to infinity. This swap works because exponential-order bounds make the double integral absolutely convergent for large $\\Re(s)$, which justifies the Fubini move. The triangle is now read vertically instead of horizontally.',
          },
          {
            label: 'Step 3: Shift the inner variable to factor the exponential',
            formula: '$$\\int_{\\tau}^{\\infty}e^{-st}g(t-\\tau) \\, dt = e^{-s\\tau}G(s)$$',
            explanation: 'Substitute $u = t - \\tau$ in the inner integral, so $e^{-st}$ splits as $e^{-s\\tau}e^{-su}$ while $g(t - \\tau)$ becomes $g(u)$. This shift works because $du = dt$ translates the $\\tau$-delayed window back to the origin. The inner integral is then exactly $e^{-s\\tau}$ times $G(s)$.',
          },
          {
            label: 'Step 4: Collect the remaining outer integral',
            formula: '$$\\mathcal{L}\\{f \\ast g\\} = F(s)G(s)$$',
            explanation: 'Factor the constant $G(s)$ out of the $\\tau$ integral, leaving $\\int_{0}^{\\infty}e^{-s\\tau}f(\\tau) \\, d\\tau$ which is $F(s)$. This factorisation works because the shift removed all $t$ dependence except the exponential $e^{-s\\tau}$. Hence an $s$-domain product inverts as a time convolution.',
          },
        ],
        result: '$\\mathcal{L}\\{f \\ast g\\} = F(s)G(s)$, meaning products in $s$ invert as sliding-overlap integrals in time without partial fractions.',
      },
    ],
    examples: [
      {
        title: 'Invert a distinct-pole rational function',
        problem: 'Find $\\mathcal{L}^{-1}\\{ (3s + 2)/[(s - 1)(s + 2)] \\}$.',
        steps: [
          { label: 'Step 1', text: 'Seek $A/(s - 1) + B/(s + 2)$. Cover-up at $s = 1$ gives $A = (3 + 2)/3 = 5/3$; at $s = -2$ gives $B = (-6 + 2)/(-3) = 4/3$.\n```text\nA = $5/3$ at s=1; B = $4/3$ at s=-2\n```' },
          { label: 'Step 2', text: 'Thus $F(s) = (5/3)/(s - 1) + (4/3)/(s + 2)$. Each term matches $1/(s - a)$.' },
          { label: 'Step 3', text: 'Invert termwise to $(5/3)e^{t} + (4/3)e^{-2t}$ for $t \\ge 0$. Differentiation in $s$ is unnecessary here.' }
        ],
        result: '$f(t) = (5/3)e^{t} + (4/3)e^{-2t}$ for $t \\ge 0$, zero for $t < 0$.'
      },
      {
        title: 'Product in s via convolution',
        problem: 'Find $\\mathcal{L}^{-1}\\{ 1/[s(s^{2} + 1)] \\}$ by convolution.',
        steps: [
          { label: 'Step 1', text: 'Recognize $F(s) = 1/s$ with $f(t) = 1$ and $G(s) = 1/(s^{2} + 1)$ with $g(t) = \\sin t$. Product structure invites $f * g$.' },
          { label: 'Step 2', text: 'Form $(1 * \\sin)(t) = \\int_{0}^{t} 1 \\cdot \\sin(t - \\tau)\\,d\\tau = \\int_{0}^{t} \\sin u\\,du$ with $u = t - \\tau$.' },
          { label: 'Step 3', text: 'Evaluate $1 - \\cos t$. Partial fractions on $1/[s(s^{2}+1)] = 1/s - s/(s^{2}+1)$ confirms the same result.\n```text\n(1 * sin)(t) = integral_0^t sin(t-tau) dtau = 1 - cos t\n```' }
        ],
        result: '$f(t) = 1 - \\cos t$ for $t \\ge 0$. Convolution avoided solving for three fraction constants from scratch.'
      }
    ],
    keyTakeaways: [
      'Partial fractions $A/(s-a)$, $B/(s-a)^{k}$ and $(Cs+D)/(quadratic)$ reduce inversion to table lookup.',
      'Repeated $(s-a)^{-k} \\leftrightarrow t^{k-1}e^{at}/(k-1)!$ and shifted quadratics give damped sinusoids.',
      'Convolution $(f*g)(t) = \\int_{0}^{t} f(\\tau)g(t-\\tau)\\,d\\tau$ is commutative and causal.',
      'Theorem $\\mathcal{L}\\{f*g\\} = F(s)G(s)$ inverts $s$-products as time integrals.'
    ],
    quiz: [
      {
        q: '$\\mathcal{L}^{-1}\\{1/(s - 5)\\}$ for $t \\ge 0$ equals:',
        options: [`$e^{-5t}$`, `$e^{5t}$`, `$5$`, `$t e^{5t}$`],
        answer: 1,
        explanation: 'Step 1: Match $1/(s - a)$ with $a = 5$ in the table. Step 2: Read the original $e^{at}$ directly. Step 3: Reject the $t$-weighted form, which belongs to $1/(s-5)^{2}$.'
      },
      {
        // PYQ-pattern: GATE 2012 — inverse Laplace by partial fractions (rephrased, values changed)
        q: '$\\mathcal{L}^{-1}\\{(3s+2)/[(s-1)(s+2)]\\}$ for $t \\ge 0$ equals:',
        options: [`$(5/3)e^{-t} + (4/3)e^{2t}$`, `$3e^{t} + 2e^{-2t}$`, `$e^{t} + e^{-2t}$`, `$(5/3)e^{t} + (4/3)e^{-2t}$`],
        answer: 3,
        explanation: 'Step 1: Split into $A/(s-1) + B/(s+2)$ with $A = 5/3$ and $B = 4/3$ by cover-up. Step 2: Invert each $1/(s-a)$ to $e^{at}$. Step 3: Combine with the computed constants to obtain the stated sum.'
      },
      {
        q: 'The convolution $(f * g)(t)$ for causal $f$ and $g$ equals:',
        options: [`$\\int_{0}^{t} f(\\tau)g(t - \\tau)\\,d\\tau$`, '$f(t)g(t)$ pointwise', `$\\int_{0}^{\\infty} f(\\tau)g(\\tau)\\,d\\tau$`, '$F(s) + G(s)$ in time'],
        answer: 0,
        explanation: 'Step 1: Slide $g$ past $f$ with lag $\\tau$ from $0$ to $t$. Step 2: Integrate the overlap product over the causal window. Step 3: Distinguish from pointwise multiplication, which has product $F*G$ nowhere simple.'
      },
      {
        q: '$\\mathcal{L}\\{f * g\\}$ equals:',
        options: [`$F(s) + G(s)$`, `$F(s)/G(s)$`, `$F(s)G(s)$`, `$-d/ds[F(s)G(s)]$`],
        answer: 2,
        explanation: 'Step 1: Write the double integral for $\\int_{0}^{\\infty} e^{-st}(f*g)(t)\\,dt$. Step 2: Swap order to factor $F(s)$ times $G(s)$. Step 3: Use the factorization to invert $s$-products as convolutions.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Bromwich inversion and convolution algebra',
        blocks: [
          {
            kind: 'theorem',
            body: 'Products in $s$ are convolutions in time: if $F = \\mathcal{L}[f]$ and $G = \\mathcal{L}[g]$ with exponential order, then $\\mathcal{L}[(f \\ast g)(t)] = F(s) G(s)$ where $(f \\ast g)(t) = \\int_{0}^{t} f(\\tau) g(t-\\tau) \\, d\\tau$. Inversion by partial fractions writes proper rational $F(s)$ as sums of $(s-a)^{-k}$ and $((s-\\alpha)^{2} + \\beta^{2})^{-1}$ terms read from tables. The Bromwich integral $f(t) = (2\\pi i)^{-1} \\int_{c-i\\infty}^{c+i\\infty} e^{s t} F(s) \\, ds$ inverts generally by residues, closing left for $t > 0$. Uniqueness holds up to null functions by Lerch.'
          },
          {
            kind: 'proof',
            body: 'Absolute convergence for $\\Re(s) > c$ justifies Fubini: $\\int_{0}^{\\infty} e^{-s t} \\int_{0}^{t} f(\\tau) g(t-\\tau) \\, d\\tau \\, dt = \\int_{0}^{\\infty} \\int_{\\tau}^{\\infty} e^{-s t} f(\\tau) g(t-\\tau) \\, dt \\, d\\tau$. With $u = t - \\tau$ the inner integral is $e^{-s\\tau} f(\\tau) G(s)$, and integrating in $\\tau$ gives $F(s) G(s)$. Exponential bounds $M_{1} e^{c_{1} t}$, $M_{2} e^{c_{2} t}$ dominate $|f(\\tau) g(t-\\tau)|$ by $M_{1} M_{2} e^{\\max(c_{1},c_{2}) t}$, so all swaps are legitimate. Commutativity, associativity and distributivity make $(\\ast, +)$ a commutative algebra with Dirac $\\delta$ as unit.'
          },
          {
            kind: 'example',
            heading: 'A product in s done two ways',
            body: 'Invert $F(s) = 1/(s(s+1))$. Partial fractions give $1/s - 1/(s+1)$, hence $f(t) = 1 - e^{-t}$ for $t \\geq 0$. Convolution agrees: $1 \\ast e^{-t} = \\int_{0}^{t} e^{-(t-\\tau)} \\, d\\tau = e^{-t} \\int_{0}^{t} e^{\\tau} \\, d\\tau = 1 - e^{-t}$. The first route is faster for rational $F$, while convolution handles nonrational $G$ and forcing integrals $y = h \\ast r$ where $h$ is the impulse response. Duhamel principle extends the pattern to time varying systems.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 9.4
  {
    sectionId: 'engmath-ch9-s4',
    readingTime: 9,
    intro: 'Laplace machinery pays off on initial-value problems and linear circuits: differentiate in time, solve algebraically in $s$, invert once. Transfer functions summarize input-output behavior while step responses reveal transient plus steady parts. This section solves ODEs and RL, RC and RLC responses end to end.',
    objectives: [
      'Solve constant-coefficient initial-value problems via $Y(s)$ algebra',
      'Read transfer functions $H(s) = Y(s)/X(s)$ for zero-state systems',
      'Predict RL, RC and RLC step responses including damping regimes'
    ],
    concepts: [
      {
        term: 'ODE solution pipeline',
        kind: 'method',
        statement: 'The **pipeline** transforms the equation, inserts $y(0)$ and $y^{\\prime}(0)$, solves $(polynomial)\\,Y(s) = F(s) + init$ coded as `solve_Y_algebra`, then inverts $Y$. Constant coefficients keep the $s$-polynomial fixed across forcing terms. Nonzero initial data appear only in the $init$ block.',
        detail: 'For $ay^{\\prime\\prime} + by^{\\prime} + cy = f(t)$ the image is $(as^{2} + bs + c)Y - a(sy(0) + y^{\\prime}(0)) - by(0) = F(s)$. One algebraic division isolates $Y$. Inversion splits into forced plus homogeneous pieces.'
      },
      {
        term: 'Transfer function',
        kind: 'definition',
        statement: 'With zero initial rest, the **transfer** ratio $H(s) = Y(s)/X(s)$ depends only on the system via `Y_over_X`. Poles of $H$ are natural frequencies, while zeros block transmission. Frequency response follows as $H(i\\omega)$ for sinusoidal drive.',
        detail: 'For $y^{\\prime\\prime} + 3y^{\\prime} + 2y = x(t)$ one gets $H(s) = 1/(s^{2} + 3s + 2)$. Partial fractions of $H(s)X(s)$ separate system modes from input shape. Stability needs all poles with $\\Re s < 0$.'
      },
      {
        term: 'RL and RC first-order responses',
        kind: 'insight',
        statement: 'Series **RL** and **RC** circuits give $\\tau = L/R$ and $\\tau = RC$ with step form $1 - e^{-t/\\tau}$, coded as `one_minus_exp`. Inductor current and capacitor voltage cannot jump, fixing initial values. Larger $\\tau$ stretches the transient tail.',
        detail: 'Loop $Ldi/dt + Ri = V_{0}u(t)$ transforms to $(Ls + R)I = V_{0}/s$, so $i(t) = (V_{0}/R)(1 - e^{-Rt/L})$. Dual RC analysis swaps charge and current roles. Initial inductor opens and capacitors shorts complement the rule set at $t = 0^{+}$.'
      },
      {
        term: 'RLC second-order regimes',
        kind: 'theorem',
        statement: 'Series **RLC** with $s^{2} + 2\\zeta\\omega_{n}s + \\omega_{n}^{2} = 0$ distinguishes overdamped $\\zeta > 1$, critically damped $\\zeta = 1$ and underdamped $\\zeta < 1$ via `zeta_class`. Underdamped steps ring as $e^{-\\zeta\\omega_{n}t}\\sin(\\omega_{d}t + \\phi)$ with $\\omega_{d} = \\omega_{n}\\sqrt{1 - \\zeta^{2}}$. Component values set $\\zeta$ and $\\omega_{n}$.',
        detail: 'Roots $s = -\\zeta\\omega_{n} \\pm \\omega_{n}\\sqrt{\\zeta^{2} - 1}$ move from real to complex as $\\zeta$ drops through $1$. Critical damping returns fastest without overshoot. Quality factor $Q = 1/(2\\zeta)$ measures resonance sharpness.'
      },
      {
        term: 'Steady state from final-value',
        kind: 'method',
        statement: 'When all poles of $sY(s)$ lie left of the axis, the **final-value** limit $\\lim_{t \\to \\infty} y(t) = \\lim_{s \\to 0} sY(s)$ reads the settled level via `sY_at_zero`. It bypasses full inversion for settled DC gain. Oscillatory or unstable poles void the shortcut.',
        detail: 'For a stable step response $sY(s) \\to$ DC gain as $s \\to 0$. Initial-value $\\lim_{t \\to 0^{+}} y = \\lim_{s \\to \\infty} sY(s)$ similarly reads jumps. Both need pole checks first, since right-half poles make limits meaningless.'
      }
    ],
    examples: [
      {
        title: 'Initial-value problem with exponential forcing',
        problem: 'Solve $y^{\\prime\\prime} + 3y^{\\prime} + 2y = e^{t}$ with $y(0) = 0$ and $y^{\\prime}(0) = 0$.',
        steps: [
          { label: 'Step 1', text: 'Transform: $(s^{2} + 3s + 2)Y = 1/(s - 1)$ since initial terms vanish. Thus $Y(s) = 1/[(s - 1)(s + 1)(s + 2)]$.\n```text\n(s^2+3s+2)Y = 1/(s-1) -> Y = 1/[(s-1)(s+1)(s+2)]\n```' },
          { label: 'Step 2', text: 'Partial fractions give $Y = (1/6)/(s - 1) - (1/2)/(s + 1) + (1/3)/(s + 2)$ after cover-up at each pole.' },
          { label: 'Step 3', text: 'Invert termwise to $y(t) = (1/6)e^{t} - (1/2)e^{-t} + (1/3)e^{-2t}$ for $t \\ge 0$. Initial values check to zero.' }
        ],
        result: '$y(t) = (1/6)e^{t} - (1/2)e^{-t} + (1/3)e^{-2t}$ for $t \\ge 0$. Forced $e^{t}$ plus two decaying natural modes appear.'
      },
      {
        title: 'RC charging response to a step',
        problem: 'A series RC circuit with $R = 2$, $C = 1/2$ and zero initial charge is driven by $v_{s}(t) = 10u(t)$. Find capacitor voltage $v_{c}(t)$.',
        steps: [
          { label: 'Step 1', text: 'Loop $Ri + v_{c} = v_{s}$ with $i = Cdv_{c}/dt$ gives $dv_{c}/dt + v_{c} = 5u(t)$ since $RC = 1$. Transform with $v_{c}(0) = 0$: $(s + 1)V_{c} = 5/s$.' },
          { label: 'Step 2', text: 'Thus $V_{c}(s) = 5/[s(s + 1)] = 5/s - 5/(s + 1)$ by splitting.' },
          { label: 'Step 3', text: 'Invert to $v_{c}(t) = 5(1 - e^{-t})$ for $t \\ge 0$. Time constant $\\tau = 1$ sets the charging speed.\n```text\nVc = 5/s - 5/(s+1) -> vc = 5(1 - e^-t), tau = 1\n```' }
        ],
        result: '$v_{c}(t) = 5(1 - e^{-t})$ for $t \\ge 0$, rising from $0$ toward $5$ with $\\tau = RC = 1$.'
      }
    ],
    keyTakeaways: [
      'Pipeline $(as^{2} + bs + c)Y = F + init$ solves constant-coefficient initial-value problems algebraically.',
      'Transfer $H(s) = Y/X$ with zero rest encodes poles, zeros and $H(i\\omega)$ response.',
      'RL and RC steps follow $1 - e^{-t/\\tau}$ with $\\tau = L/R$ or $RC$.',
      'RLC damping $\\zeta$ selects overdamped, critical or ringing $e^{-\\zeta\\omega_{n}t}\\sin(\\omega_{d}t + \\phi)$ forms.'
    ],
    quiz: [
      {
        q: 'For $y^{\\prime\\prime} + 3y^{\\prime} + 2y = f(t)$ with zero initial data, $Y(s)$ equals:',
        options: [`$F(s)/(s^{2} + 3s + 2)$`, `$F(s)(s^{2} + 3s + 2)$`, `$F(s) + s^{2} + 3s + 2$`, `$1/(s^{2} + 3s + 2)$ regardless of $f$`],
        answer: 0,
        explanation: 'Step 1: Transform derivatives to $(s^{2} + 3s + 2)Y = F(s)$ with no $init$ block. Step 2: Divide by the characteristic polynomial. Step 3: Keep $F(s)$ in the numerator since forcing shapes the response.'
      },
      {
        // PYQ-pattern: GATE 2019 — transfer function of a second-order system (rephrased, values changed)
        q: 'Zero-state system $y^{\\prime\\prime} + 3y^{\\prime} + 2y = x(t)$ has transfer $H(s)$ equal to:',
        options: [`$s^{2} + 3s + 2$`, '$1/(s + 1)$ only', `$1/(s^{2} + 3s + 2)$`, `$s/(s^{2} + 3s + 2)$`],
        answer: 2,
        explanation: 'Step 1: Transform with zero rest to $(s^{2} + 3s + 2)Y = X$. Step 2: Form $H = Y/X$ by division. Step 3: Retain the full quadratic since both poles govern the dynamics.'
      },
      {
        q: 'Series RC with $R = 2$ and $C = 1/2$ driven by a step has time constant:',
        options: [`$4$`, `$1$`, `$2$`, `$1/4$`],
        answer: 1,
        explanation: 'Step 1: Recall $\\tau = RC$ for charging transients. Step 2: Multiply $2 \\cdot 1/2 = 1$. Step 3: Place $\\tau$ in $1 - e^{-t/\\tau}$ to set settling speed.'
      },
      {
        q: 'Series RLC with $\\zeta = 0.3$ and $\\omega_{n} = 10$ exhibits:',
        options: ['Overdamped monotone return', 'Critically damped fastest return', 'Unstable growth', 'Underdamped ringing with $\\omega_{d} = 10\\sqrt{1 - 0.09}$'],
        answer: 3,
        explanation: 'Step 1: Compare $\\zeta = 0.3 < 1$ to select underdamped ringing. Step 2: Compute $\\omega_{d} = \\omega_{n}\\sqrt{1 - \\zeta^{2}}$. Step 3: Reject overdamped and unstable labels, which need $\\zeta > 1$ or right-half poles.'
      }
    ]
  }
]
