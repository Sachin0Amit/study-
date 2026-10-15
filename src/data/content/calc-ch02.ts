import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 2: Limits and Derivatives (Sections 2.1 – 2.8)
// Master study content. Worked examples track the book’s own exercises and
// solution-manual style (9e solutions, Ch 2 spans PDF pp. 74–151).
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh2Content: SectionContent[] = [
  // ------------------------------------------------------------------ 2.1
  {
    sectionId: 'calc-ch2-s1',
    readingTime: 8,
    prerequisites: [
      'Algebraic functions and Cartesian coordinate geometry: points $(x, f(x))$ and curve graphs',
      'Slope of a secant line through two points: $m = \\frac{y_2 - y_1}{x_2 - x_1}$',
      'Polynomial expansion, binomial identities, and factoring of rational expressions',
    ],
    intro: 'Chapter 2 opens with two ancient problems that elementary algebra cannot solve: finding the tangent line to a curve at a point, and finding the instantaneous velocity of a moving object. Both are answered the same way — compute an easy average quantity over a shrinking window and watch where it settles. That settling behavior is the limit, and this section builds the intuition before the formal definition arrives in Section 2.4.',
    objectives: [
      'Compute slopes of secant lines through a fixed point $P$ and nearby points $Q$',
      'Interpret average velocity as the slope of a secant line of the position curve',
      'Estimate instantaneous velocity and tangent slope from tables of secant values',
      'Set up and simplify the $h$-form difference quotient for a position function',
    ],
    concepts: [
      {
        term: 'The tangent problem',
        kind: 'insight',
        statement: 'The **tangent line** to a curve at a point $P$ is the limit of secant lines through $P$ and nearby points $Q$: as $Q$ slides toward $P$ along the curve, the secant lines turn and settle onto the tangent.',
        detail: 'Euclid’s circles have tangents from classical geometry, but an arbitrary curve has no obvious tangent construction. The insight — due to Fermat and systematized by Newton and Leibniz — is to define the tangent slope as a limit of secant slopes rather than construct it directly. Zooming into a smooth curve, it looks more and more like its tangent line — the property of **local linearity** that makes derivatives useful for approximation (Section 3.10).',
      },
      {
        term: 'Slope of a secant line',
        kind: 'notation',
        statement: 'For a point $P(a, f(a))$ and a nearby point $Q(x, f(x))$ on the graph, the slope of the **secant line** $PQ$ is $$m_{PQ} = \\frac{f(x) - f(a)}{x - a}.$$ It is the average rate of change of $f$ between $a$ and $x$.',
        detail: 'The formula is just “rise over run,” but writing it as $\\frac{\\Delta y}{\\Delta x}$ reveals its role: the change in output divided by the change in input over a window. The solution manual computes such slopes directly from data points — for instance secant slopes near a point $P(15, 250)$ equal to $-44.4$, $-38.8$, $-27.8$, $-22.2$ and $-16.6$, homing in on the tangent slope.',
      },
      {
        term: 'Average velocity',
        kind: 'definition',
        statement: 'If $s(t)$ is a **position function**, the average velocity over the time interval $[a, a + h]$ is $$\\frac{\\text{displacement}}{\\text{elapsed time}} = \\frac{s(a + h) - s(a)}{h}.$$',
        detail: 'This is the same difference quotient with time as the input: the slope of the secant line of the position curve. The manual’s falling-object example makes the algebra explicit: for $y = 275 - 16t^2$ at $t = 4$, the average velocity over the next $h$ seconds simplifies to $\\frac{-128h - 16h^2}{h} = -128 - 16h$ for $h \\ne 0$ — a linear function of the window width.',
      },
      {
        term: 'Instantaneous velocity',
        kind: 'definition',
        statement: 'The **instantaneous velocity** at time $a$ is the value the average velocities approach as the time interval $h$ shrinks to 0: $$v(a) = \\lim_{h \\to 0} \\frac{s(a + h) - s(a)}{h}.$$',
        detail: 'No division by zero ever occurs — we observe averages over shorter and shorter windows and identify the trend. In the falling-object example the averages $-129.6$, $-128.8$ and $-128.16$ ft/s (for $h = 0.1$, $0.05$, $0.01$) squeeze down on $-128$ ft/s, which is the instantaneous velocity. The velocity is negative because height is decreasing.',
      },
      {
        term: 'The $h$-form of the difference quotient',
        kind: 'method',
        statement: 'Writing the second point as $x = a + h$ turns the secant slope into $$m = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h},$$ the form used throughout the rest of the book.',
        detail: 'The two forms are interchangeable — $x = a + h$ with $x \\to a$ is the same limit as $h \\to 0$ — but the $h$-form is the one that generalizes cleanly to the derivative of a function in Section 2.7. The solution manual works the same tangent problem both ways: with $f(x) = x^2 + 3x$ at $P(-1, -2)$, the $x$-form factors as $\\frac{(x + 2)(x + 1)}{x + 1}$, while the $h$-form factors as $\\frac{h(h + 1)}{h}$ — both collapse to $h + 1 \\to 1$.',
      },
      {
        term: 'Estimating from tables and graphs',
        kind: 'method',
        statement: 'To estimate a tangent slope or instantaneous velocity: compute the secant quantity for points approaching $P$ from **both sides**, and watch for a common settling value; averaging the two nearest secant slopes from either side is a quick graphical estimate.',
        detail: 'The manual does exactly this with a walking-pace example: secant slopes of $106.3$ steps/min just before $t = 20$ and $91.4$ just after average to about $98.85$, and a graph confirms the tangent slope there. Symmetric averaging cancels the curvature error to first order — the idea behind the symmetric difference quotient that calculators use.',
      },
    ],
    figures: [
      {
        caption: 'Secant lines through $Q_1$, $Q_2$, $Q_3$ swing onto the tangent at $P$ as $Q$ slides toward $P$ along the curve. Each secant slope $\\frac{f(x)-f(a)}{x-a}$ is an average rate of change over a window of width $h = x - a$; the tangent slope is its limit as $h \\to 0$ — here the slopes run $0.6 \\to 0.5 \\to 0.45 \\to 0.4$.',
        svg: '<svg viewBox="0 0 720 340" width="100%" role="img" aria-label="Secant lines through a curve turning onto the tangent line at a point P"><line x1="96" y1="78" x2="118" y2="78" stroke="#f59e0b" stroke-width="1.5"/><text x="124" y="82" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">secant lines</text><line x1="96" y1="98" x2="118" y2="98" stroke="#10b981" stroke-width="2"/><text x="124" y="102" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">tangent at P</text><line x1="235.3" y1="300" x2="690" y2="97.6" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.55"/><line x1="218.8" y1="300" x2="690" y2="125.2" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.75"/><line x1="207.8" y1="300" x2="690" y2="139" stroke="#f59e0b" stroke-width="1.5"/><line x1="194" y1="300" x2="690" y2="152.8" stroke="#10b981" stroke-width="2"/><path d="M318,263.2 L504,263.2 L504,208" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.55"/><line x1="70" y1="300" x2="700" y2="300" stroke="currentColor" stroke-width="1.5"/><polygon points="710,300 698,295.5 698,304.5" fill="currentColor"/><line x1="70" y1="300" x2="70" y2="64" stroke="currentColor" stroke-width="1.5"/><polygon points="70,54 65.5,66 74.5,66" fill="currentColor"/><text x="708" y="322" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">x</text><text x="54" y="68" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">y</text><polyline points="70,300 85.5,299.9 101,299.4 116.5,298.7 132,297.7 147.5,296.4 163,294.8 178.5,293 194,290.8 209.5,288.4 225,285.6 240.5,282.6 256,279.3 271.5,275.7 287,271.8 302.5,267.7 318,263.2 333.5,258.5 349,253.4 364.5,248.1 380,242.5 395.5,236.6 411,230.4 426.5,224 442,217.2 457.5,210.2 473,202.8 488.5,195.2 504,187.3 519.5,179.1 535,170.6 550.5,161.9 566,152.8 581.5,143.5 597,133.8 612.5,123.9 628,113.7 643.5,103.2 659,92.4 674.5,81.4 690,70" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><text x="668" y="62" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end" font-style="italic">y = f(x)</text><circle cx="566" cy="152.8" r="3" fill="#f59e0b"/><circle cx="442" cy="217.2" r="3" fill="#f59e0b"/><circle cx="380" cy="242.5" r="3" fill="#f59e0b"/><circle cx="318" cy="263.2" r="3.5" fill="#10b981"/><text x="554" y="138" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">Q₁</text><text x="430" y="200" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">Q₂</text><text x="368" y="226" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">Q₃</text><text x="306" y="287" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">P</text><text x="411" y="281" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">h</text></svg>',
        afterConcept: 2,
      },
    ],
    derivations: [
      {
        title: 'Instantaneous Tangent Slope from the Difference Quotient',
        statement: 'For the parabolic curve $f(x) = x^2$, the slope of the tangent line at any point $x$ is given by the derivative limit: $$ f\\prime(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h} = 2x $$',
        prerequisites: [
          'Difference quotient definition of secant slope $m_{\\text{sec}} = \\frac{\\Delta y}{\\Delta x}$',
          'Binomial expansion of $(x + h)^2 = x^2 + 2xh + h^2$',
          'Algebraic limit cancellation of indeterminate forms $\\left[\\frac{0}{0}\\right]$',
        ],
        steps: [
          {
            label: 'Step 1: Difference quotient setup across window h',
            formula: `$$ m_{\\text{sec}}(h) = \\frac{f(x + h) - f(x)}{h} = \\frac{(x + h)^2 - x^2}{h} $$`,
            explanation: 'We select a fixed anchor point $P(x, x^2)$ on the parabola and a variable secondary point $Q(x + h, (x + h)^2)$ separated by a horizontal displacement $h \\ne 0$. The slope of the straight secant line passing through $P$ and $Q$ is the ratio of vertical rise to horizontal run.',
          },
          {
            label: 'Step 2: Binomial expansion of the numerator',
            formula: `$$ (x + h)^2 - x^2 = (x^2 + 2xh + h^2) - x^2 = 2xh + h^2 $$`,
            explanation: 'Expanding $(x + h)^2$ yields three terms: the original squared term $x^2$, the linear cross-term $2xh$, and the second-order perturbation $h^2$. Subtracting $f(x) = x^2$ cancels the leading term completely, leaving only terms possessing at least one factor of $h$.',
          },
          {
            label: 'Step 3: Factoring and cancelling the zero-divisor factor h',
            formula: `$$ \\frac{2xh + h^2}{h} = \\frac{h(2x + h)}{h} = 2x + h \\quad (h \\ne 0) $$`,
            explanation: 'Directly substituting $h = 0$ into the original quotient would produce the undefined arithmetic form $0/0$. However, because secant slopes are evaluated for $Q \\ne P$ where $h \\ne 0$, dividing through by $h$ is mathematically rigorous, simplifying the difference quotient to the affine linear function $2x + h$.',
          },
          {
            label: 'Step 4: Evaluating the limit as window width h shrinks to zero',
            formula: `$$ f\\prime(x) = \\lim_{h \\to 0} (2x + h) = 2x + 0 = 2x $$`,
            explanation: 'As $Q$ slides continuously along the parabola toward $P$, the increment $h$ approaches 0. The second-order term $h$ vanishes, leaving the exact invariant value $2x$.',
          },
        ],
        result: 'The tangent slope at any point $(x, x^2)$ on the parabola is identically $2x$. For instance, at $x = 1$, the tangent line has slope $m = 2$; at $x = 3$, $m = 6$; and at the vertex $x = 0$, $m = 0$ (a horizontal tangent). This fundamental derivation overcomes the paradox of instantaneous rate of change that baffled ancient mathematicians, demonstrating that a limit of valid finite averages $\\frac{\\Delta y}{\\Delta x}$ yields the exact instantaneous velocity.',
      },
    ],
    examples: [
      {
        title: 'Secant slopes converging to a tangent (Exercise 3 style)',
        problem: 'The curve $y = \\frac{1}{1 - x}$ passes through $P(2, -1)$. Compute the slopes of secant lines through $P$ and $Q$ for $x = 1.5$, $1.9$, $1.99$ and $2.5$, guess the tangent slope, and write the tangent line.',
        steps: [
          { label: 'Step 1: Tabulate the nearby points', text: 'Each $x$ gives $Q\\left(x, \\frac{1}{1 - x}\\right)$: at $x = 1.5$ the point is $(1.5, -2)$; at $x = 1.9$ it is $(1.9, -1.111)$; at $x = 1.99$ it is $(1.99, -1.010)$.' },
          { label: 'Step 2: Compute each secant slope', text: '$m_{PQ} = \\frac{f(x) - f(2)}{x - 2}$. For $x = 1.5$: $\\frac{-2 - (-1)}{1.5 - 2} = \\frac{-1}{-0.5} = 2$. For $x = 1.9$: $\\frac{-0.111}{-0.1} \\approx 1.111$; for $x = 1.99$: $\\approx 1.010$. From the right, $x = 2.5$ gives $\\frac{-0.667 + 1}{0.5} \\approx 0.667$.' },
          { label: 'Step 3: Guess the tangent slope', text: 'As $Q$ approaches $P$ from the left the secant slopes run $2 \\to 1.111 \\to 1.010$, and from the right $0.667 \\to$ (values approaching 1). Both sides settle at slope $1$.' },
          { label: 'Step 4: Write the tangent line', text: 'Through $P(2, -1)$ with slope 1: $y - (-1) = 1(x - 2)$, that is $y = x - 3$.' },
        ],
        result: 'Secant slopes from both sides converge to 1, so the tangent line is $y = x - 3$. The tangent is defined as the limit of the secants, not by any single secant.',
      },
      {
        title: 'Falling object: average to instantaneous velocity (Exercise 5 style)',
        problem: 'An object falls from height $y = 275 - 16t^2$ feet, $t$ seconds after release. Find the average velocity over $[4, 4 + h]$ for $h = 0.1$, $0.05$, $0.01$, and the instantaneous velocity at $t = 4$.',
        steps: [
          { label: 'Step 1: Anchor the point', text: 'At $t = 4$: $y = 275 - 16(16) = 275 - 256 = 19$ feet — the object still has 19 feet to fall.' },
          { label: 'Step 2: Build the average velocity', text: '$v_{\\text{avg}} = \\frac{(275 - 16(4 + h)^2) - 19}{h} = \\frac{275 - 256 - 128h - 16h^2 - 19}{h} = \\frac{-128h - 16h^2}{h} = -128 - 16h$ for $h \\ne 0$.' },
          { label: 'Step 3: Evaluate the shrinking windows', text: '$h = 0.1$: $-129.6$ ft/s; $h = 0.05$: $-128.8$ ft/s; $h = 0.01$: $-128.16$ ft/s. The averages march toward $-128$ as the window closes.' },
          { label: 'Step 4: Conclude the instantaneous velocity', text: 'Letting $h \\to 0$ in $-128 - 16h$ gives $-128$ ft/s — about 87 mi/h downward. The negative sign encodes direction: height is decreasing.' },
        ],
        result: 'The instantaneous velocity at $t = 4$ is $-128$ ft/s. The average velocities are honest, computable numbers; the instantaneous velocity is their limit.',
      },
      {
        title: 'A rock on Mars (Exercise 6 style)',
        problem: 'A rock thrown straight up on Mars has height $s(t) = 10t - 1.86t^2$ meters after $t$ seconds (Mars gravity pulls it down at about $3.72\\ \\text{m/s}^2$). Estimate and then confirm its velocity at $t = 1$.',
        steps: [
          { label: 'Step 1: Anchor the position', text: 'At $t = 1$: $s(1) = 10 - 1.86 = 8.14$ m. The rock is still rising at this moment — its velocity only reaches zero at the peak, $t_{\\text{peak}} = 10/3.72 \\approx 2.69$ s.' },
          { label: 'Step 2: Average velocities over shrinking windows', text: '$v_{\\text{avg}} = \\frac{s(1 + h) - s(1)}{h} = \\frac{10h - 1.86(2h + h^2)}{h} = 10 - 3.72 - 1.86h = 6.28 - 1.86h$. Over $[1, 2]$: $4.42$ m/s; $[1, 1.5]$: $5.35$; $[1, 1.1]$: $6.094$; $[1, 1.01]$: $6.2614$.' },
          { label: 'Step 3: Read off the limit', text: 'The averages approach $6.28$ m/s as $h \\to 0$: the rock is rising at $6.28$ m/s one second after release.' },
          { label: 'Step 4: Sanity-check with physics', text: 'Mars surface gravity $g \\approx 3.72\\ \\text{m/s}^2$ strips speed at rate $g$: after one second, $v = 10 - 3.72 = 6.28$ m/s — exactly the value the table converged to. The derivative machinery reproduces the physics formula $v = v_0 - gt$.' },
        ],
        result: 'The rock’s velocity at $t = 1$ is $6.28$ m/s upward. One difference quotient, $6.28 - 1.86h$, contains the whole story — its value at $h = 0$ is the instantaneous velocity, and its rate of change in $h$ is the (constant) gravity.',
      },
    ],
    keyTakeaways: [
      'The tangent slope at $P$ is the limiting value of secant slopes $m_{PQ}$ as $Q$ approaches $P$ along the curve.',
      'Average velocity over $[a, a+h]$ is the difference quotient $\\frac{s(a+h) - s(a)}{h}$ — the slope of a secant line of the position graph.',
      'Instantaneous velocity is the limit of average velocities; it is never computed at a single instant, only approached.',
      'Both problems share one algebraic object, the difference quotient, in either the $x$-form $\\frac{f(x) - f(a)}{x - a}$ or the $h$-form $\\frac{f(a+h) - f(a)}{h}$.',
      'Numerical strategy: approach the point from both sides; if the secant values settle to the same number, that number is the limit — if they settle to different numbers, the limit does not exist.',
      'Zooming in on a smooth curve makes it look straight — the tangent line is the line the curve impersonates up close, which is why derivatives power approximation later in the course.',
    ],
    quiz: [
      {
        q: 'The slope of the secant line through $P(a, f(a))$ and $Q(x, f(x))$ is:',
        options: [`$\\frac{f(x) + f(a)}{x + a}$`, `$\\frac{f(x) - f(a)}{x - a}$`, `$f(x) - f(a)$`, `$\\frac{x - a}{f(x) - f(a)}$`],
        answer: 1,
        explanation: 'Slope is rise over run: the change in outputs $f(x) - f(a)$ divided by the change in inputs $x - a$ — the average rate of change of $f$ over that window.',
      },
      {
        q: 'Average velocities for $h = 0.1$, $0.05$, $0.01$ come out $-129.6$, $-128.8$, $-128.16$ ft/s. The best estimate of the instantaneous velocity is:',
        options: ['About $-129.6$ ft/s', 'About $-128$ ft/s', 'The average of the three, about $-128.85$ ft/s', 'Undefined, since $h$ never equals 0'],
        answer: 1,
        explanation: 'The averages converge to $-128$ ft/s (the limit of $-128 - 16h$ as $h \\to 0$). The limit is defined by approach, not by plugging in $h = 0$.',
      },
      {
        q: 'For the falling object $y = 275 - 16t^2$ at $t = 4$, the average velocity over $[4, 4+h]$ simplifies to:',
        options: [`$-128 - 16h$`, `$-128 + 16h$`, `$-16h$`, `$19 - 128h$`],
        answer: 0,
        explanation: 'Expanding: $\\frac{(275 - 16(4+h)^2) - 19}{h} = \\frac{-128h - 16h^2}{h} = -128 - 16h$ for $h \\ne 0$; the division by $h$ is legal because averages only use $h > 0$.',
      },
      {
        q: 'Why does the tangent problem require a limiting process rather than plain algebra?',
        options: ['Because two points determine a line but one point does not, and the second point must be allowed to merge with the first', 'Because tangent lines have irrational slopes', 'Because curves are not functions', 'Because secant lines do not exist for curves'],
        answer: 0,
        explanation: 'A line through two points is elementary; the tangent is what that line becomes when the second point collapses onto the first — a limit of secants.',
      },
      {
        q: 'A walking-rate example gives secant slopes $106.3$ steps/min just before $t = 20$ and $91.4$ just after. The symmetric estimate of the tangent slope at $t = 20$ is:',
        options: [`$106.3$`, `$91.4$`, `$\\frac{106.3 + 91.4}{2} \\approx 98.9$`, `$106.3 - 91.4 = 14.9$`],
        answer: 2,
        explanation: 'Averaging the flanking secant slopes cancels the leading curvature error — the solution manual’s own graphical technique, confirmed against the tangent line.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.2
  {
    sectionId: 'calc-ch2-s2',
    readingTime: 9,
    intro: 'Section 2.2 makes the word “limit” precise enough to compute with — first intuitively, by reading graphs and tables — and immediately broadens the idea in two directions: one-sided limits (what the function does as you approach from one side only) and infinite limits (what happens near a vertical asymptote). The central lesson is that a limit is about the values a function is heading toward, not the value it happens to attain: a limit can exist where the function does not, and a function value can disagree with its limit.',
    objectives: [
      'Estimate limits from graphs and from tables of values',
      'Compute one-sided limits and use the criterion that a two-sided limit exists exactly when both one-sided limits exist and agree',
      'Distinguish a function’s limit from its value at a point',
      'Recognize infinite limits and identify vertical asymptotes',
      'Understand the language of “arbitrarily close” and “sufficiently close”',
    ],
    concepts: [
      {
        term: 'Intuitive definition of limit',
        kind: 'definition',
        statement: '$\\lim_{x \\to a} f(x) = L$ means: the values of $f(x)$ can be made as close to $L$ **as we like** by taking $x$ sufficiently close to $a$ — but not equal to $a$.',
        detail: 'The solution manual phrases it exactly this way: “the values of $f(x)$ can be made as close to 5 as we like by taking $x$ sufficiently close to 2 (but $x \\ne 2$).” Two clauses matter: the tolerance is ours to choose (any closeness), and the point $x = a$ itself is excluded — $f(a)$ may be wrong, different, or missing entirely without disturbing the limit. Section 2.4 turns this sentence into the ε–δ definition.',
      },
      {
        term: 'One-sided limits',
        kind: 'definition',
        statement: 'The **left-hand limit** $\\lim_{x \\to a^-} f(x)$ restricts $x$ to approach $a$ through values less than $a$; the **right-hand limit** $\\lim_{x \\to a^+} f(x)$ uses values greater than $a$.',
        detail: 'One-sided limits are the right tool whenever a function behaves differently on the two sides of a point — piecewise functions and jump behavior. The manual reads them off graphs all section: approaching 2 from the left the values approach 3, from the right they approach 1, so the two one-sided limits are $\\lim_{x \\to 2^-} f(x) = 3$ and $\\lim_{x \\to 2^+} f(x) = 1$.',
      },
      {
        term: 'The existence criterion',
        kind: 'theorem',
        statement: '$\\lim_{x \\to a} f(x)$ **exists if and only if** both one-sided limits exist and are equal: $$\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x).$$ If they differ, the two-sided limit does not exist — the graph has a jump.',
        detail: 'The manual applies this instantly: “$\\lim_{x \\to 2} f(x)$ does not exist since the left-hand limit does not equal the right-hand limit.” Note that a jump kills the two-sided limit even though each one-sided limit is perfectly respectable — “does not exist” is a precise verdict, not an admission of defeat.',
      },
      {
        term: 'A limit is not a value',
        kind: 'insight',
        statement: 'The limit of $f$ at $a$ is about the **neighborhood** of $a$, not the point itself: the graph may have a hole at $(2, 5)$ with $f(2) = 3$, and still $\\lim_{x \\to 2} f(x) = 5$.',
        detail: 'The solution manual’s opening exercise: “As $x$ approaches 2, $f(x)$ approaches 5 — and yes, the graph could have a hole at $(2, 5)$ and define $f(2) = 3$.” Its Exercise 4 runs the contrast in reverse: $\\lim_{x \\to 4} f(x) = 4$ even though $f(4)$ does not exist at all. Redefining a single point changes no limit — the fact that makes “removable discontinuities” removable in Section 2.5.',
      },
      {
        term: 'Infinite limits',
        kind: 'definition',
        statement: '$\\lim_{x \\to a} f(x) = \\infty$ means the values of $f(x)$ can be made **arbitrarily large** by taking $x$ sufficiently close to $a$. Similarly $\\lim_{x \\to a} f(x) = -\\infty$ for arbitrarily large negative values. Infinite limits are a way of saying a limit **does not** exist, with extra information about how.',
        detail: 'The manual’s phrasing: “$\\lim_{x \\to -3} f(x) = \\infty$ means the values of $f(x)$ can be made arbitrarily large by taking $x$ sufficiently close to $-3$,” and for the one-sided version “$\\lim_{x \\to 4^+} f(x) = -\\infty$ … through values larger than 4.” Infinity is not a number here — the notation describes unbounded growth, and the limit still does not exist.',
      },
      {
        term: 'Vertical asymptotes',
        kind: 'definition',
        statement: 'The line $x = a$ is a **vertical asymptote** of $f$ if at least one of the one-sided limits at $a$ is $\\infty$ or $-\\infty$. The graph climbs or dives without bound near the line without ever touching it.',
        detail: 'The classic producer is division by shrinking denominators: for $f(x) = \\frac{1}{x^2}$, the values explode to $+\\infty$ from both sides of 0, so $x = 0$ is a vertical asymptote. For $f(x) = \\frac{1}{x}$ the one-sided limits disagree in sign: $\\infty$ from the right, $-\\infty$ from the left. Graph-reading exercises in the manual identify vertical asymptotes at $x = 1$ and $x = 3$ (with horizontal asymptotes $y = -2$ and $y = 2$) from the picture alone.',
      },
      {
        term: 'Guessing limits numerically',
        kind: 'method',
        statement: 'To guess $\\lim_{x \\to a} f(x)$, evaluate $f$ at a sequence of inputs marching toward $a$ from both sides and watch the outputs settle; verify the guess with algebra (Section 2.3) before trusting it.',
        detail: 'The book’s own example, $f(x) = \\frac{x - 1}{x^2 - 1}$ near $x = 1$, gives values $0, 0.333, 0.392, 0.399, 0.3999$ from the left and $0.6, 0.426, 0.402, 0.4002$ from the right — both sides converge to $\\tfrac{1}{2}$. A calculator table can mislead when the function oscillates or the values underflow, which is why numerical guessing is a heuristic and the limit laws of Section 2.3 are the proof.',
      },
    ],
    examples: [
      {
        title: 'Reading limits off a graph (Exercise 4 style)',
        problem: 'From the graph of $f$: as $x \\to 2^-$ the values approach 3; as $x \\to 2^+$ the values approach 1; the point $(2, 3)$ is on the graph; as $x \\to 4$ the values approach 4 but $f(4)$ is undefined. Determine $\\lim_{x \\to 2^-} f(x)$, $\\lim_{x \\to 2^+} f(x)$, $\\lim_{x \\to 2} f(x)$, $f(2)$, $\\lim_{x \\to 4} f(x)$ and $f(4)$.',
        steps: [
          { label: 'Step 1: Record the one-sided limits at 2', text: 'From the graph: $\\lim_{x \\to 2^-} f(x) = 3$ and $\\lim_{x \\to 2^+} f(x) = 1$ — the heights the graph is heading toward on each side.' },
          { label: 'Step 2: Rule on the two-sided limit', text: 'Because $3 \\ne 1$, the one-sided limits disagree, so $\\lim_{x \\to 2} f(x)$ **does not exist** — the graph jumps at $x = 2$.' },
          { label: 'Step 3: Separate the value from the limit', text: 'The solid dot at $(2, 3)$ says $f(2) = 3$. Note the coincidence with the left-hand limit is an accident of the drawing: at $x = 4$ the limit is 4 while $f(4)$ does not exist — the open circle contributes nothing.' },
          { label: 'Step 4: Summarize the taxonomy', text: 'Limits: $3$, $1$, DNE, then $4$. Values: $f(2) = 3$, $f(4)$ undefined. Every combination of “limit exists / value exists / they agree” occurs somewhere on this graph — which is exactly why continuity (Section 2.5) is defined as agreement.' },
        ],
        result: '$\\lim_{x \\to 2} f(x)$ does not exist (jump); $\\lim_{x \\to 4} f(x) = 4$ even though $f(4)$ is undefined. Limits read the trend; values read the dot.',
      },
      {
        title: 'Guessing a limit from a table (book Example 2 style)',
        problem: 'Guess $\\lim_{x \\to 1} \\frac{x - 1}{x^2 - 1}$ from a table of values, then confirm the guess with algebra.',
        steps: [
          { label: 'Step 1: March in from the left', text: 'At $x = 0.5$: $f = \frac{-0.5}{-0.75} = 0.6667$; at $x = 0.9$: $\frac{-0.1}{-0.19} = 0.5263$; at $x = 0.99$: $0.5025$; at $x = 0.999$: $0.5003$ — pressing against $0.5$.', },
          { label: 'Step 2: March in from the right', text: 'At $x = 1.5$: $f = 0.4$; at $x = 1.1$: $0.4762$; at $x = 1.01$: $0.4975$; at $x = 1.001$: $0.4998$ — converging to the same value from below. Both sides agree: the guess is $\\tfrac{1}{2}$.', },
          { label: 'Step 3: Confirm with algebra', text: 'For $x \\ne 1$, factor the denominator: $\\frac{x - 1}{x^2 - 1} = \\frac{x - 1}{(x - 1)(x + 1)} = \\frac{1}{x + 1}$. The hole in the domain at $x = 1$ is gone from the simplified form.' },
          { label: 'Step 4: Evaluate the clean form', text: 'As $x \\to 1$, $\\frac{1}{x + 1} \\to \\frac{1}{1 + 1} = \\frac{1}{2}$ — confirming the table. This cancellation move is the first limit technique of Section 2.3.' },
        ],
        result: '$\\lim_{x \\to 1} \\frac{x - 1}{x^2 - 1} = \\frac{1}{2}$: guessed numerically, proved algebraically. The function is undefined at $x = 1$, and the limit does not care.',
      },
      {
        title: 'Infinite limits and the vertical asymptote of $\\frac{1}{x}$',
        problem: 'Analyze the behavior of $f(x) = \\frac{1}{x}$ as $x \\to 0$ from the left and from the right, and identify the vertical asymptote.',
        steps: [
          { label: 'Step 1: Approach 0 from the right', text: 'For small positive $x$ — take $x = 0.1, 0.01, 0.001$ — the reciprocals are $10, 100, 1000$: growing without bound. So $\\lim_{x \\to 0^+} \\frac{1}{x} = \\infty$.' },
          { label: 'Step 2: Approach 0 from the left', text: 'For small negative $x$ — $-0.1, -0.01, -0.001$ — the reciprocals are $-10, -100, -1000$: plunging without bound. So $\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty$.' },
          { label: 'Step 3: Rule on the two-sided limit', text: 'The one-sided limits are infinite (and of opposite sign), so $\\lim_{x \\to 0} \\frac{1}{x}$ does not exist. Dividing 1 by numbers arbitrarily close to 0 has no limiting value — the magnitudes explode.' },
          { label: 'Step 4: Name the asymptote', text: 'Because at least one one-sided limit at 0 is infinite, the line $x = 0$ (the $y$-axis) is a vertical asymptote of $f(x) = \\frac{1}{x}$; the hyperbola clings to it without crossing.' },
        ],
        result: '$\\lim_{x \\to 0^+} \\frac{1}{x} = \\infty$, $\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty$, the two-sided limit does not exist, and $x = 0$ is a vertical asymptote. Shrinking denominators are the standard engine of infinite limits.',
      },
    ],
    keyTakeaways: [
      '$\\lim_{x \\to a} f(x) = L$: values of $f$ get as close to $L$ as desired whenever $x$ is close enough to $a$ (with $x \\ne a$) — the behavior near a point, not at it.',
      'The two-sided limit exists exactly when both one-sided limits exist and agree; a jump is a failed limit.',
      'A limit can exist where the function is undefined, and a defined value can disagree with the limit — holes and open circles do not affect limits.',
      '$\\lim_{x \\to a} f(x) = \\infty$ (or $-\\infty$) describes unbounded growth near $a$; it is a refined way for a limit not to exist.',
      'A vertical asymptote occurs at $x = a$ whenever a one-sided limit there is infinite; division by vanishing denominators is the usual cause.',
      'Numerical tables suggest limits; algebraic laws and techniques prove them.',
    ],
    quiz: [
      {
        q: 'If $\\lim_{x \\to 3^-} f(x) = 1$ and $\\lim_{x \\to 3^+} f(x) = 4$, what is $\\lim_{x \\to 3} f(x)$?',
        options: [`$1$`, `$4$`, `$\\frac{5}{2}$`, 'It does not exist'],
        answer: 3,
        explanation: 'The two-sided limit exists only when both one-sided limits exist and are equal. Here they disagree, so the limit does not exist — the graph jumps from height 1 to height 4.',
      },
      {
        q: 'A graph has a hole at $(2, 5)$ but a solid dot at $(2, 3)$. What is $\\lim_{x \\to 2} f(x)$?',
        options: [`$3$`, `$5$`, 'It does not exist', 'Both 3 and 5'],
        answer: 1,
        explanation: 'The limit reads the trend of nearby values, which head to the hole’s height 5; the redefined value $f(2) = 3$ at the single point is invisible to the limit.',
      },
      {
        q: 'The statement $\\lim_{x \\to a^+} f(x) = -\\infty$ means:',
        options: ['The limit exists and equals a large negative number', 'The values of $f(x)$ can be made arbitrarily large negative by taking $x$ sufficiently close to $a$ through values larger than $a$', '$f(a)$ is a very negative number', 'The function has a horizontal asymptote'],
        answer: 1,
        explanation: 'Infinite one-sided limits describe unbounded behavior from that side — negative without bound here. Infinity is a description, not a number the limit equals.',
      },
      {
        q: 'For $f(x) = \\frac{1}{x^2}$ near $x = 0$, the one-sided limits are:',
        options: ['$\\infty$ from the left, $-\\infty$ from the right', '$-\\infty$ from the left, $\\infty$ from the right', '$\\infty$ from both sides', '$0$ from both sides'],
        answer: 2,
        explanation: 'Squaring makes every nearby value positive, so the reciprocals blow up to $+\\infty$ from both sides — the two-sided limit is still “infinite,” meaning it does not exist as a number, and $x = 0$ is a vertical asymptote.',
      },
      {
        q: 'Which statement about limits is FALSE?',
        options: ['A limit can exist even when $f(a)$ is undefined', `$f(a)$ can differ from $\\lim_{x \\to a} f(x)$`, 'If $\\lim_{x \\to a} f(x) = L$ exists, then $f(a) = L$', 'The value $f(a)$ has no bearing on whether $\\lim_{x \\to a} f(x)$ exists'],
        answer: 2,
        explanation: 'Nothing forces $f(a)$ to match the limit — that agreement is precisely the definition of continuity, a special condition studied in Section 2.5, not a consequence of limits.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.3
  {
    sectionId: 'calc-ch2-s3',
    readingTime: 10,
    intro: 'Graph-reading is a fine way to guess a limit, but calculus needs limits that are computed and proved. Section 2.3 supplies the eleven limit laws — algebra for limits that mirrors algebra for numbers — plus the direct substitution property that makes polynomials and rational functions effortless. When direct substitution fails (the famous 0/0 form), the section teaches the three algebraic repairs: factor and cancel, rationalize with a conjugate, combine over a common denominator. It closes with the Squeeze Theorem, the tool that will pin down the most important limit in trigonometry: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.',
    objectives: [
      'State and apply the limit laws for sums, differences, products, quotients, powers and roots',
      'Use direct substitution for polynomials and rational functions (where the denominator limit is nonzero)',
      'Resolve 0/0 forms by factoring, rationalizing or finding a common denominator',
      'Apply the Squeeze Theorem to functions trapped between two functions with a common limit',
      'Present the geometric squeeze argument for $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$',
    ],
    concepts: [
      {
        term: 'The limit laws',
        kind: 'law',
        statement: 'If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$ both exist, then: $$\\lim [f \\pm g] = L \\pm M, \\quad \\lim [c f] = cL, \\quad \\lim [f g] = LM, \\quad \\lim \\frac{f}{g} = \\frac{L}{M} \\ (M \\ne 0),$$ and $\\lim [f(x)]^n = L^n$ and $\\lim \\sqrt[n]{f(x)} = \\sqrt[n]{L}$ (for even $n$, $L > 0$).',
        detail: 'Limits pass through sums, products, constant multiples, quotients (when the denominator limit is nonzero), powers and roots. The solution manual annotates every step of a calculation with the law used, e.g. $\\lim_{x \\to 2} [f(x) + 5g(x)] = \\lim f(x) + 5\\lim g(x) = 4 + 5(-2) = -6$, citing Laws 1 and 3. The fine print matters: the quotient law needs $M \\ne 0$; the root law for even roots needs a nonnegative limit; and each law presupposes that the constituent limits exist.',
      },
      {
        term: 'Direct substitution property',
        kind: 'theorem',
        statement: 'Polynomials and rational functions are **continuous** wherever they are defined, so their limits can be evaluated by **direct substitution**: $\\lim_{x \\to a} P(x) = P(a)$, and $\\lim_{x \\to a} \\frac{P(x)}{Q(x)} = \\frac{P(a)}{Q(a)}$ whenever $Q(a) \\ne 0$.',
        detail: 'The manual computes $\\lim_{x \\to 5} (4x^2 - 5x) = 75$ and $\\lim_{x \\to -3} (2x^3 + 6x^2 - 9) = -9$ line by line with the laws, then observes the shortcut: if the function is a polynomial, just plug in. The word “continuous” is formally defined in Section 2.5 — direct substitution is its practical reward.',
      },
      {
        term: 'The 0/0 indeterminate form',
        kind: 'insight',
        statement: 'If blind substitution produces $\\frac{0}{0}$, the limit is **indeterminate** — it may exist and equal anything, or not exist. The value is hidden by a factor of $(x - a)$ that must be canceled or exposed before the limit can be read.',
        detail: 'The quotient law does not apply when the denominator tends to 0, but that does not mean the limit fails — it means algebra must intervene first. The manual’s warning example: if $\\lim g(x) = 0$ while the numerator tends to a nonzero number, then $\\frac{f}{g}$ genuinely has no limit (one-sided limits become infinite); but if both tend to 0, anything can happen and the factor causing the vanishing must be found.',
      },
      {
        term: 'Factor and cancel',
        kind: 'method',
        statement: 'For a rational function in a 0/0 situation at $x = a$: factor numerator and denominator, cancel the common factor $(x - a)$, and then substitute. Example: $$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3} = \\lim_{x \\to 3} (x + 3) = 6.$$',
        detail: 'The cancellation is legal for every $x \\ne 3$ — and limits never look at $x = a$ itself, so the simplified function has the same limit. This single move resolves every 0/0 problem with polynomial structure: the goal is to expose the surviving factor and evaluate it at $a$.',
      },
      {
        term: 'Rationalize with the conjugate',
        kind: 'method',
        statement: 'When radicals cause the 0/0, multiply numerator and denominator by the **conjugate**: $$\\lim_{x \\to 0} \\frac{\\sqrt{x^2 + 9} - 3}{x} = \\lim_{x \\to 0} \\frac{x^2}{x\\left(\\sqrt{x^2 + 9} + 3\\right)} = \\lim_{x \\to 0} \\frac{x}{\\sqrt{x^2 + 9} + 3} = \\frac{0}{6} = 0.$$',
        detail: 'The conjugate $\\sqrt{x^2 + 9} + 3$ turns the numerator into $(x^2 + 9) - 9 = x^2$ via the difference of squares $(a - b)(a + b) = a^2 - b^2$. The factor of $x$ that must be canceled now appears in the numerator. The technique is the same game as factoring — manufacture and cancel the vanishing factor — just with radicals.',
      },
      {
        term: 'Common denominators for differences of fractions',
        kind: 'method',
        statement: 'For limits of the form $\\lim_{x \\to a} \\left[\\frac{f}{g} - \\frac{h}{k}\\right]$ that produce $\\frac{c}{0}$ or $\\frac{0}{0}$: combine over a common denominator first, then factor and cancel as usual.',
        detail: 'The difference of two fractions each defined at $a$ may combine into an expression whose numerator vanishes there; rewriting as one fraction exposes the $(x - a)$ factor. This is the standard opening for limits like $\\lim_{x \\to 4} \\left(\\frac{1}{x - 4} - \\frac{5}{x^2 - 16}\\right)$ and it foreshadows the derivative computations of Section 2.7, where difference quotients $\\frac{f(x) - f(a)}{x - a}$ are exactly this shape.',
      },
      {
        term: 'The Squeeze Theorem',
        kind: 'theorem',
        statement: 'If $f(x) \\le g(x) \\le h(x)$ near $a$ (except possibly at $a$), and $\\lim_{x \\to a} f(x) = \\lim_{x \\to a} h(x) = L$, then $\\lim_{x \\to a} g(x) = L$ — the trapped function is squeezed to the same limit.',
        detail: 'The manual’s applications: since $-1 \\le \\sin(\\pi/x) \\le 1$, multiplying by $x^2$ gives $-x^3 + x^2 \\le x^3 + x^2 \\sin(\\pi/x) \\le x^3 + x^2$, and both bounds tend to 0, so $\\lim_{x \\to 0} \\left[x^3 + x^2 \\sin(\\pi/x)\\right] = 0$. The bounded-but-oscillating factor contributes nothing because it is crushed between functions whose limits are forced.',
      },
      {
        term: 'The fundamental trigonometric limit',
        kind: 'theorem',
        statement: '$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1,$$ where $x$ is measured in **radians**. Geometrically, the sector of the unit circle is squeezed between two triangles whose areas both approach $\\tfrac{1}{2}x$.',
        detail: 'The squeeze proof (worked in the example below) compares three areas on the unit circle for $0 < x < \\pi/2$: the small triangle of area $\\tfrac{1}{2}\\sin x$, the sector of area $\\tfrac{1}{2}x$, and the large triangle of area $\\tfrac{1}{2}\\tan x$. Dividing through by $\\tfrac{1}{2}\\sin x$ and taking reciprocals yields $\\cos x \\le \\frac{\\sin x}{x} \\le \\frac{1}{\\cos x}$, and both bounds squeeze to 1 as $x \\to 0^+$ (the left-hand limit follows by symmetry since both $\\sin x$ and $x$ are odd). Radians are essential — the sector formula $\\tfrac{1}{2}x$ is what ties the angle to the arc length. This limit is the engine of every trigonometric derivative in Section 3.3.',
      },
    ],
    examples: [
      {
        title: 'Evaluating limits with the laws (Exercises 3–6 style)',
        problem: 'Evaluate (a) $\\lim_{x \\to 5} (4x^2 - 5x)$ and (b) $\\lim_{t \\to 7} \\frac{3t^2 + 1}{t^2 - 5t + 2}$, citing the laws used.',
        steps: [
          { label: 'Step 1: Split the polynomial', text: '(a) By the difference law and constant multiple law: $\\lim_{x \\to 5} (4x^2 - 5x) = 4\\lim_{x \\to 5} x^2 - 5\\lim_{x \\to 5} x = 4(25) - 5(5) = 75$ — the manual’s own line-by-line computation, each step tagged with its law.' },
          { label: 'Step 2: Recognize the shortcut', text: 'The function is a polynomial, so direct substitution gives the same answer instantly: $4(5)^2 - 5(5) = 75$. The laws justify the shortcut.' },
          { label: 'Step 3: Check the quotient’s denominator first', text: '(b) At $t = 7$ the denominator is $49 - 35 + 2 = 16 \\ne 0$, so the quotient law applies: $\\lim_{t \\to 7} \\frac{3t^2 + 1}{t^2 - 5t + 2} = \\frac{3(49) + 1}{16} = \\frac{148}{16} = \\frac{37}{4}$.' },
          { label: 'Step 4: State the general principle', text: 'If substitution gives a number over a nonzero number, that number is the limit. If it gives $\\frac{0}{0}$, algebra must intervene — and if it gives nonzero over 0, the limit does not exist (one-sided limits are infinite).' },
        ],
        result: '(a) $75$; (b) $\\frac{37}{4}$. The limit laws reduce polynomial and rational limits to arithmetic — with the 0/0 exception that launches the next example.',
      },
      {
        title: 'Escaping 0/0: factoring and rationalizing',
        problem: 'Evaluate (a) $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ and (b) $\\lim_{x \\to 0} \\frac{\\sqrt{x^2 + 9} - 3}{x}$.',
        steps: [
          { label: 'Step 1: Diagnose (a) as 0/0', text: 'Substituting $x = 3$: numerator $9 - 9 = 0$, denominator $3 - 3 = 0$. Indeterminate — the factor $(x - 3)$ is hiding in the numerator.' },
          { label: 'Step 2: Factor and cancel', text: '$\\frac{x^2 - 9}{x - 3} = \\frac{(x - 3)(x + 3)}{x - 3} = x + 3$ for $x \\ne 3$, so the limit is $\\lim_{x \\to 3} (x + 3) = 6$.' },
          { label: 'Step 3: Diagnose (b) as 0/0', text: 'Substituting $x = 0$: $\\sqrt{9} - 3 = 0$ over 0. The vanishing factor is entangled with the radical, so multiply by the conjugate $\\sqrt{x^2 + 9} + 3$.' },
          { label: 'Step 4: Rationalize and simplify', text: '$\\frac{\\sqrt{x^2 + 9} - 3}{x} \\cdot \\frac{\\sqrt{x^2 + 9} + 3}{\\sqrt{x^2 + 9} + 3} = \\frac{x^2 + 9 - 9}{x\\left(\\sqrt{x^2 + 9} + 3\\right)} = \\frac{x}{\\sqrt{x^2 + 9} + 3}$ for $x \\ne 0$.' },
          { label: 'Step 5: Substitute into the clean form', text: 'Now direct substitution works: $\\frac{0}{\\sqrt{9} + 3} = \\frac{0}{6} = 0$. The limit exists and equals 0 despite the original 0/0 appearance.' },
        ],
        result: '(a) $6$ by factoring; (b) $0$ by rationalizing. Every 0/0 rescue is the same plot: manufacture the vanishing factor, cancel it, substitute.',
      },
      {
        title: 'The squeeze proof that $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$',
        problem: 'Show that $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ by squeezing, using areas on the unit circle.',
        steps: [
          { label: 'Step 1: Set up the geometry', text: 'On the unit circle, let $x$ be the angle (in radians) at the center, $0 < x < \\tfrac{\\pi}{2}$. Three regions share the vertex: the small triangle with base 1 and height $\\sin x$; the circular sector of angle $x$; and the large triangle with base 1 and height $\\tan x$.' },
          { label: 'Step 2: Write the three areas', text: 'Small triangle: $\\tfrac{1}{2} \\sin x$ (area $\\tfrac{1}{2} \\cdot 1 \\cdot \\sin x$). Sector: $\\tfrac{1}{2} x$ (a fraction $\\frac{x}{2\\pi}$ of the circle’s area $\\pi$). Large triangle: $\\tfrac{1}{2} \\tan x$. Nesting gives $$\\tfrac{1}{2}\\sin x \\; \\le \\; \\tfrac{1}{2} x \\; \\le \\; \\tfrac{1}{2}\\tan x.$$' },
          { label: 'Step 3: Rearrange into a squeeze on $\\frac{\\sin x}{x}$', text: 'Multiply through by $\\frac{2}{\\sin x}$: $1 \\le \\frac{x}{\\sin x} \\le \\frac{1}{\\cos x}$. Taking reciprocals (all positive, so inequalities flip): $$\\cos x \\; \\le \\; \\frac{\\sin x}{x} \\; \\le \\; \\frac{1}{\\cos x}.$$' },
          { label: 'Step 4: Take the limit of the bounds', text: 'As $x \\to 0^+$, both $\\cos x \\to 1$ and $\\frac{1}{\\cos x} \\to 1$. The Squeeze Theorem forces $\\lim_{x \\to 0^+} \\frac{\\sin x}{x} = 1$.' },
          { label: 'Step 5: Handle the left side and conclude', text: 'Both $\\sin x$ and $x$ are odd, so $\\frac{\\sin(-x)}{-x} = \\frac{\\sin x}{x}$: the function is even and the left-hand limit equals the right-hand limit. Hence $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ — the derivative of every trig function in Section 3.3 flows from this one squeeze.' },
        ],
        result: 'Triangles below and above the sector squeeze $\\cos x \\le \\frac{\\sin x}{x} \\le \\frac{1}{\\cos x}$, and both bounds tend to 1. The ratio of arc to chord vanishes — the sine and its argument become indistinguishable near 0.',
      },
    ],
    keyTakeaways: [
      'The limit laws let limits pass through sums, differences, products, constant multiples, powers, roots and quotients (nonzero denominator) — provided each constituent limit exists.',
      'Polynomials and rational functions (where defined) submit to direct substitution: plug in and read.',
      'A 0/0 result is a signal, not an answer: factor and cancel, rationalize with a conjugate, or combine over a common denominator to expose the vanishing factor.',
      'If the numerator tends to a nonzero number while the denominator tends to 0, the limit does not exist — the one-sided limits are infinite.',
      'The Squeeze Theorem: a function trapped between two functions with a common limit $L$ has limit $L$ — the tool for taming bounded oscillators like $x^2 \\sin(\\pi/x)$ near 0.',
      '$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ (radians!) — proved by squeezing the unit-circle sector between two triangles; it powers every trigonometric derivative.',
    ],
    quiz: [
      {
        q: 'Which law justifies $\\lim_{x \\to 2} [f(x) \\cdot g(x)] = \\left(\\lim_{x \\to 2} f(x)\\right)\\left(\\lim_{x \\to 2} g(x)\\right)$?',
        options: ['The sum law', 'The product law', 'The quotient law', 'The root law'],
        answer: 1,
        explanation: 'The product law says the limit of a product is the product of the limits — provided both limits on the right exist. The manual cites it step by step in its Law 4 annotations.',
      },
      {
        q: 'Evaluating $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ by direct substitution gives $\\frac{0}{0}$. The correct next move is to:',
        options: ['Conclude the limit is 0', 'Conclude the limit is 1', 'Factor and cancel the common factor $(x - 3)$, then substitute', 'Conclude the limit does not exist'],
        answer: 2,
        explanation: '0/0 is indeterminate: canceling $\\frac{(x-3)(x+3)}{x-3}$ to $x + 3$ gives the limit 6. Only if the numerator stayed nonzero while the denominator vanished would the limit fail to exist.',
      },
      {
        q: 'Evaluate $\\lim_{x \\to 0} x^2 \\sin\\!\\left(\\frac{\\pi}{x}\\right)$.',
        options: ['It does not exist because $\\sin(\\pi/x)$ oscillates', `$1$`, '$0$, by the Squeeze Theorem', `$\\pi$`],
        answer: 2,
        explanation: 'Since $-1 \\le \\sin(\\pi/x) \\le 1$, we get $-x^2 \\le x^2 \\sin(\\pi/x) \\le x^2$, and both bounds tend to 0. The oscillation is crushed between two vanishing functions — exactly the manual’s Exercise-39 reasoning.',
      },
      {
        q: 'The value of $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ is:',
        options: [`$0$`, '$1$, provided $x$ is measured in radians', `$\\infty$`, 'It does not exist'],
        answer: 1,
        explanation: 'The geometric squeeze gives $\\cos x \\le \\frac{\\sin x}{x} \\le \\frac{1}{\\cos x}$ and both bounds tend to 1. Radians are load-bearing: the sector area $\\tfrac{1}{2}x$ is what ties angle to arc.',
      },
      {
        q: 'If $\\lim_{x \\to a} f(x) = 5$ and $\\lim_{x \\to a} g(x) = 0$, what can be said about $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$?',
        options: ['It equals $\\frac{5}{0} = 0$', 'It equals 5', 'It does not exist (the one-sided limits are infinite)', 'The quotient law gives $\\frac{5}{0}$, which is fine'],
        answer: 2,
        explanation: 'A nonzero numerator over a vanishing denominator grows without bound — the quotient law explicitly requires a nonzero denominator limit, and the manual flags this exact case as “does not exist.”',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.4
  {
    sectionId: 'calc-ch2-s4',
    readingTime: 11,
    intro: 'The intuitive limit of Section 2.2 says “as close as we like,” and this section converts that phrase into a two-quantifier challenge the whole world can play: for every tolerance ε, there must exist a response window δ. The ε–δ definition is what makes limits provable rather than plausible, and this section teaches both directions — reading δ off graphs for a given ε, and writing complete proofs for linear and quadratic limits, including the bounding trick that makes quadratics tractable.',
    objectives: [
      'State the precise (ε–δ) definition of a limit and explain the role and order of its quantifiers',
      'Read a δ off a graph for a given ε as the more restrictive of the two side-distances',
      'Prove limits of linear functions with the choice $\\delta = \\varepsilon/|m|$',
      'Prove a quadratic limit by first bounding the variable factor (the $\\min(1, \\varepsilon/M)$ technique)',
      'Interpret ε–δ as a tolerance game: error tolerance ε on the output, control window δ on the input',
    ],
    concepts: [
      {
        term: 'The ε–δ definition of a limit',
        kind: 'definition',
        statement: `$\\lim_{x \\to a} f(x) = L$ means: for **every** $\\varepsilon > 0$ there exists a $\\delta > 0$ such that $$0 < |x - a| < \\delta \\quad \\Longrightarrow \\quad |f(x) - L| < \\varepsilon.$$`,
        detail: 'Read it as a challenge–response protocol: an adversary names an output tolerance ε (how close $f(x)$ must stay to $L$); you must answer with an input window δ (how close $x$ must stay to $a$) that guarantees it. The definition quantifies “as close as we like” with the universal quantifier on ε and “sufficiently close” with the existential quantifier on δ — and the order of the quantifiers is what makes δ allowed to depend on ε. The punctured condition $0 < |x - a|$ excludes $x = a$ itself, honoring the principle that limits ignore the point.',
      },
      {
        term: 'Reading δ from a graph',
        kind: 'method',
        statement: 'For a given ε, draw the band $L - \\varepsilon < y < L + \\varepsilon$; project the part of the graph inside the band down to the $x$-axis; the resulting interval around $a$ has endpoints $a - \\delta_1$ and $a + \\delta_2$, and any $\\delta \\le \\min(\\delta_1, \\delta_2)$ works.',
        detail: 'The solution manual’s Exercise 1: if $|f(x) - 1| < 0.2$ holds for $0.7 < x < 1.1$ near $a = 1$, then $\\delta = \\min\\{1 - 0.7,\\ 1.1 - 1\\} = \\min\\{0.3, 0.1\\} = 0.1$ — “or any smaller positive number.” Taking the minimum is the rule because the window must work on both sides simultaneously, and asymmetric graphs (like $y = x^2$ at $x = 2$, where the manual finds $\\delta = 1.44$ from an asymmetric band) make the asymmetry visible.',
      },
      {
        term: 'Why ε comes first',
        kind: 'insight',
        statement: 'The quantifier order — **for all ε, there exists δ** — means δ is a function of ε. Shrinking the demanded accuracy typically shrinks the usable window; but no single δ must work for every ε.',
        detail: 'Reversing the quantifiers (“there exists a δ that works for every ε”) would force $f$ to be constant near $a$. The manual’s linear examples make the dependence explicit and linear: for $\\lim_{x \\to 2}(5x - 7) = 3$ the winning choice is $\\delta = \\varepsilon/5$, so ε = 0.1 demands δ = 0.02, ε = 0.01 demands δ = 0.002 — halving the tolerance halves the window.',
      },
      {
        term: 'The machinist’s tolerance',
        kind: 'insight',
        statement: 'A manufacturing reading of the definition: the machinist must hit a target output $L$ (area 1000 cm²) within tolerance ε (5 cm²); the ε–δ statement guarantees this is achievable by controlling the input (radius) within some window δ of the target input.',
        detail: 'The manual’s disk-area example: a disk of radius $r$ has area $A = \\pi r^2$; the target $A = 1000$ cm² requires $r = \\sqrt{1000/\\pi} \\approx 17.8412$ cm; the tolerance $|A - 1000| \\le 5$ is achieved exactly when $17.7966 \\le r \\le 17.8858$, i.e. within about 0.0445 cm of the target radius. Here $x$ is the radius, $f(x)$ the area, $a$ the target radius, $L$ the target area, ε the area tolerance and δ the radius tolerance — the definition as a quality-control contract.',
      },
      {
        term: 'Proof strategy for linear functions',
        kind: 'method',
        statement: 'To prove $\\lim_{x \\to a} (mx + b) = L$: work backward from the target inequality. Factor $|(mx + b) - L| = |m| \\cdot |x - a|$; then $|(mx+b) - L| < \\varepsilon$ is guaranteed by $|x - a| < \\frac{\\varepsilon}{|m|}$, so choose $\\delta = \\frac{\\varepsilon}{|m|}$ and verify.',
        detail: 'The manual proves exactly this shape three times: $\\lim_{x \\to 1} (4x + 3) = 7$ with $\\delta = \\varepsilon/4$; $\\lim_{x \\to 2} (5x - 7) = 3$ with $\\delta = \\varepsilon/5$; and $\\lim_{x \\to 2} (2 - 3x) = -4$ with $\\delta = \\varepsilon/3$. The scratch work (discovering δ) and the proof (verifying it) are separate activities — the proof only needs the verification direction, run forward.',
      },
      {
        term: 'The bounding trick for nonlinear functions',
        kind: 'method',
        statement: 'When the factor multiplying $|x - a|$ is itself variable, **bound it first**: restrict $\\delta \\le 1$ to confine $x$ to a known interval, bound the variable factor by a constant $M$ there, then choose $\\delta = \\min\\{1, \\varepsilon/M\\}$.',
        detail: 'The classic target is $\\lim_{x \\to 3} x^2 = 9$: $|x^2 - 9| = |x + 3|\\,|x - 3|$. If $\\delta \\le 1$ then $|x - 3| < 1$ forces $2 < x < 4$, so $|x + 3| < 7$; hence $|x^2 - 9| < 7\\,|x - 3| < 7\\delta$, and $\\delta = \\min\\{1, \\varepsilon/7\\}$ makes the product less than ε. The trick trades precision (a slightly smaller δ) for the luxury of a constant coefficient.',
      },
    ],
    figures: [
      {
        caption: 'The $\\varepsilon$–$\\delta$ picture: given the output tolerance band $L-\\varepsilon < y < L+\\varepsilon$ (amber), the definition demands an input window $a-\\delta < x < a+\\delta$ (teal) whose image stays inside the band — the darker lens where the bands overlap is exactly what the definition guarantees, and the usable $\\delta$ is the smaller of the two side-distances.',
        svg: '<svg viewBox="0 0 720 360" width="100%" role="img" aria-label="Epsilon-delta band picture: a horizontal band about L and a vertical band about a whose intersection the curve must thread"><rect x="76" y="164" width="624" height="88" fill="#f59e0b" fill-opacity="0.1"/><line x1="76" y1="164" x2="700" y2="164" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.8"/><line x1="76" y1="252" x2="700" y2="252" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.8"/><rect x="331.4" y="52" width="161.2" height="268" fill="#14b8a6" fill-opacity="0.1"/><line x1="331.4" y1="52" x2="331.4" y2="320" stroke="#14b8a6" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.8"/><line x1="492.6" y1="52" x2="492.6" y2="320" stroke="#14b8a6" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.8"/><line x1="412" y1="320" x2="412" y2="208" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.5"/><line x1="76" y1="208" x2="412" y2="208" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.5"/><line x1="76" y1="320" x2="706" y2="320" stroke="currentColor" stroke-width="1.5"/><polygon points="716,320 704,315.5 704,324.5" fill="currentColor"/><line x1="76" y1="320" x2="76" y2="52" stroke="currentColor" stroke-width="1.5"/><polygon points="76,42 71.5,53 80.5,53" fill="currentColor"/><polyline points="76,288 84.4,288 92.8,287.8 101.2,287.6 109.6,287.2 118,286.8 126.4,286.2 134.8,285.6 143.2,284.8 151.6,284 160,283 168.4,282 176.8,280.8 185.2,279.6 193.6,278.2 202,276.8 210.4,275.2 218.8,273.5 227.2,271.8 235.6,270 244,268 252.4,266 260.8,263.8 269.2,261.5 277.6,259.2 286,256.8 294.4,254.2 302.8,251.6 311.2,248.8 319.6,245.9 328,243 336.4,239.9 344.8,236.8 353.2,233.5 361.6,230.2 370,226.7 378.4,223.2 386.8,219.5 395.2,215.8 403.6,211.9 412,208 420.4,203.9 428.8,199.8 437.2,195.5 445.6,191.2 454,186.8 462.4,182.2 470.8,177.6 479.2,172.8 487.6,168 496,163 504.4,158 512.8,152.8 521.2,147.6 529.6,142.2 538,136.8 546.4,131.2 554.8,125.6 563.2,119.8 571.6,114 580,108 588.4,102 596.8,95.8 605.2,89.6 613.6,83.2 622,76.8 630.4,70.2 638.8,63.6 647.2,56.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="412" cy="208" r="3.5" fill="currentColor"/><line x1="341" y1="310" x2="483" y2="310" stroke="currentColor" stroke-width="1.5"/><polygon points="335,310 341,306.5 341,313.5" fill="currentColor"/><polygon points="489,310 483,306.5 483,313.5" fill="currentColor"/><text x="331.4" y="340" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">a−δ</text><text x="412" y="340" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">a</text><text x="492.6" y="340" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">a+δ</text><text x="68" y="212" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end" font-style="italic">L</text><text x="68" y="168" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end" font-style="italic">L+ε</text><text x="68" y="256" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end" font-style="italic">L−ε</text><text x="438" y="305" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">δ</text><text x="648" y="44" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end" font-style="italic">y = f(x)</text><text x="712" y="338" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">x</text><text x="60" y="58" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">y</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Reading a δ off a graph (Exercise 1 style)',
        problem: 'From the graph of $f$ near $a = 1$ with $L = 1$: the inequality $|f(x) - 1| < 0.2$ holds exactly when $0.7 < x < 1.1$. Find a valid δ.',
        steps: [
          { label: 'Step 1: Translate ε into an output band', text: '$|f(x) - 1| < 0.2$ means $-0.2 < f(x) - 1 < 0.2$, i.e. the band $0.8 < f(x) < 1.2$ — ε measures how far the output may wander from $L$.' },
          { label: 'Step 2: Project the band onto the $x$-axis', text: 'Reading the graph, the curve stays inside the band precisely for $0.7 < x < 1.1$ — an asymmetric window around $a = 1$ (note $x = 1$ excluded, per $0 < |x - a|$).' },
          { label: 'Step 3: Take the more restrictive side', text: 'Left distance: $1 - 0.7 = 0.3$; right distance: $1.1 - 1 = 0.1$. The window must fit both sides, so $\\delta = \\min\\{0.3, 0.1\\} = 0.1$.' },
          { label: 'Step 4: State the conclusion in ε–δ language', text: 'If $0 < |x - 1| < 0.1$, then $|f(x) - 1| < 0.2$ — and any smaller positive δ works too, since shrinking the window never expels points that were already inside.' },
        ],
        result: '$\\delta = 0.1$ (or any smaller positive number). The minimum of the two side-distances is always the safe choice — the graph, not the formula, sets the geometry here.',
      },
      {
        title: 'A full ε–δ proof for a linear limit (Exercise 14 style)',
        problem: 'Prove that $\\lim_{x \\to 2} (5x - 7) = 3$ using the ε–δ definition. Then write down the δ that works for ε = 0.1.',
        steps: [
          { label: 'Step 1: Set up the target inequality', text: 'We must show: for every ε > 0 there is a δ > 0 with $0 < |x - 2| < \\delta \\Rightarrow |(5x - 7) - 3| < \\varepsilon$.' },
          { label: 'Step 2: Do the backward scratch work', text: 'Simplify the target quantity: $|(5x - 7) - 3| = |5x - 10| = |5(x - 2)| = 5\\,|x - 2|$. The error in the output is exactly five times the error in the input.' },
          { label: 'Step 3: Solve the inequality for the window', text: 'We need $5|x - 2| < \\varepsilon$, which is the same as $|x - 2| < \\frac{\\varepsilon}{5}$. So the choice $\\delta = \\frac{\\varepsilon}{5}$ suggests itself.' },
          { label: 'Step 4: Run the proof forward', text: 'Given any ε > 0, choose δ = ε/5 > 0. If $0 < |x - 2| < \\delta$, then $|(5x - 7) - 3| = 5|x - 2| < 5\\delta = 5 \\cdot \\frac{\\varepsilon}{5} = \\varepsilon$. This proves $\\lim_{x \\to 2}(5x - 7) = 3$. ∎' },
          { label: 'Step 5: Read off specific tolerances', text: 'For ε = 0.1: δ = 0.02; for ε = 0.05: δ = 0.01; for ε = 0.01: δ = 0.002 — the manual’s own table. The same pattern proves $\\lim_{x \\to 2}(3x - 5) = 1$ with $\\delta = \\varepsilon/3$, and in general linear maps rescale tolerances by the slope.' },
        ],
        result: 'The proof succeeds with $\\delta = \\varepsilon/5$. Linear functions are ε–δ-transparent: the input window is the output tolerance divided by the absolute slope.',
      },
      {
        title: 'A quadratic limit: $\\lim_{x \\to 3} x^2 = 9$',
        problem: 'Prove that $\\lim_{x \\to 3} x^2 = 9$ with the ε–δ definition.',
        steps: [
          { label: 'Step 1: Factor the error', text: 'The target quantity is $|x^2 - 9| = |x + 3|\\, |x - 3|$. Unlike the linear case, the coefficient $|x + 3|$ varies with $x$ — it cannot simply be divided out.' },
          { label: 'Step 2: Bound the variable factor', text: 'Insist on δ ≤ 1 for starters. Then $|x - 3| < 1$ implies $2 < x < 4$, so $5 < x + 3 < 7$ and in particular $|x + 3| < 7$. On this restricted window, $|x^2 - 9| < 7\\,|x - 3|$.' },
          { label: 'Step 3: Choose δ as a minimum', text: 'Now demand $|x - 3| < \\frac{\\varepsilon}{7}$ as well: taking $\\delta = \\min\\{1, \\frac{\\varepsilon}{7}\\}$ enforces both $|x - 3| < 1$ (so the bound 7 is valid) and $|x - 3| < \\frac{\\varepsilon}{7}$.' },
          { label: 'Step 4: Verify forward', text: 'If $0 < |x - 3| < \\delta$, then $|x^2 - 9| = |x + 3|\\,|x - 3| < 7 \\cdot \\frac{\\varepsilon}{7} = \\varepsilon$. Hence for every ε > 0 this δ works, proving $\\lim_{x \\to 3} x^2 = 9$. ∎' },
          { label: 'Step 5: Sanity-check a number', text: 'For ε = 0.1: δ = min{1, 0.1/7} ≈ 0.0143. Test $x = 3.01$: $|x - 3| = 0.01 < 0.0143$ and indeed $|x^2 - 9| = |9.0601 - 9| = 0.0601 < 0.1$ ✓.' },
        ],
        result: 'The quadratic limit holds with $\\delta = \\min\\{1, \\varepsilon/7\\}$ — the bounding trick converts the variable slope of a curve into a constant the linear machinery can handle.',
      },
    ],
    keyTakeaways: [
      '$\\lim_{x \\to a} f(x) = L$: for every ε > 0 there exists δ > 0 such that $0 < |x - a| < \\delta$ implies $|f(x) - L| < \\varepsilon$ — a challenge (ε) and a response (δ).',
      'The order of quantifiers is the content: δ may depend on ε, and the game must be winnable for every ε, however small.',
      'The condition $0 < |x - a|$ excludes the point itself: the limit is a statement about the punctured neighborhood of $a$.',
      'Graphically, δ is the smaller of the two side-distances that keep the graph inside the ε-band about $L$.',
      'Linear proofs: factor $|(mx + b) - L| = |m|\\,|x - a|$ and choose $\\delta = \\varepsilon/|m|$; the manual’s pattern for $4x + 3$, $5x - 7$ and $2 - 3x$.',
      'Nonlinear proofs: restrict δ ≤ 1 to bound the variable factor by a constant $M$, then take $\\delta = \\min\\{1, \\varepsilon/M\\}$ — the technique that tamed $x^2 \\to 9$.',
      'The definition doubles as engineering: output tolerance ε is met by controlling the input within δ — the machinist’s disk and the power-temperature examples from the manual.',
    ],
    quiz: [
      {
        q: 'In the ε–δ definition, why must δ be chosen after ε?',
        options: ['Alphabetical order in the Greek alphabet', 'Because δ is allowed to depend on ε: each output tolerance may need a different input window', 'Because ε must be an integer', 'Because δ is always larger than ε'],
        answer: 1,
        explanation: 'The quantifiers read “for every ε > 0 there exists δ > 0”: the responder sees the challenge before answering. If one fixed δ had to serve all ε, only constant functions could pass.',
      },
      {
        q: 'For $\\lim_{x \\to 2}(5x - 7) = 3$ and $\\varepsilon = 0.1$, the proof’s choice of δ is:',
        options: [`$0.1$`, `$0.5$`, `$0.02$`, `$5$`],
        answer: 2,
        explanation: 'The scratch work gives $|(5x - 7) - 3| = 5|x - 2| < \\varepsilon$ exactly when $|x - 2| < \\varepsilon/5 = 0.02$ — the input tolerance is the output tolerance divided by the slope.',
      },
      {
        q: 'The condition $0 < |x - a|$ in the definition exists to:',
        options: ['Prevent division by zero in the proof', 'Exclude the point $a$ itself, since a limit describes behavior near — not at — $a$', 'Ensure $f$ is defined at $a$', 'Make δ positive'],
        answer: 1,
        explanation: 'Limits are punctured-neighborhood statements: $f(a)$ may be wrong, different or missing. Even a function with a hole at $(a, L)$ satisfies the definition.',
      },
      {
        q: 'A graph stays within the band $0.8 < f(x) < 1.2$ exactly for $0.7 < x < 1.1$. For $\\lim_{x \\to 1} f(x) = 1$ with ε = 0.2, a valid δ is:',
        options: [`$0.3$`, `$0.1$`, `$0.4$`, 'Any positive number'],
        answer: 1,
        explanation: 'The window must fit inside $(0.7, 1.1)$ on both sides of 1: the left slack is 0.3 and the right slack is 0.1, and δ must respect the smaller: δ = 0.1 (or less).',
      },
      {
        q: 'In proving $\\lim_{x \\to 3} x^2 = 9$, why does one assume δ ≤ 1 at the start?',
        options: ['Because ε is always at least 1', 'To confine $x$ near 3 so that the variable factor $|x + 3|$ can be bounded by the constant 7', 'To make the graph symmetric', 'Because $x^2$ is not defined at 3'],
        answer: 1,
        explanation: 'The error factors as $|x + 3|\\,|x - 3|$, and $|x + 3|$ varies with $x$. Restricting δ ≤ 1 forces $2 < x < 4$, so $|x + 3| < 7$ — a constant the linear argument can use, with δ = min{1, ε/7}.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.5
  {
    sectionId: 'calc-ch2-s5',
    readingTime: 11,
    intro: 'Continuity is the formal name for what most people intuitively mean by an unbroken graph: at every point, the value the function is heading toward and the value it assigns must agree. Section 2.5 turns that agreement into three checkable conditions, classifies the ways it can fail (removable, jump and infinite discontinuities), certifies that all the familiar function families are continuous on their domains, and then cashes the whole account in for a theorem with real computational teeth: the Intermediate Value Theorem, which locates roots of equations that algebra cannot solve.',
    objectives: [
      'State the three conditions for continuity at a point and check them for specific functions',
      'Define continuity on an interval, including one-sided continuity at endpoints',
      'Classify discontinuities as removable, jump or infinite',
      'Use the continuity theorems: combinations, compositions, and the standard families on their domains',
      'Apply the Intermediate Value Theorem to prove roots exist, and locate them by bisection',
    ],
    concepts: [
      {
        term: 'Continuity at a point',
        kind: 'definition',
        statement: 'A function $f$ is **continuous** at a number $a$ if $$\\lim_{x \\to a} f(x) = f(a).$$ Unpacked, three conditions must all hold: (1) $f(a)$ is defined; (2) $\\lim_{x \\to a} f(x)$ exists; (3) the two agree.',
        detail: 'The definition is the limit machinery of Sections 2.2–2.4 pointed at one specific question: does the graph pass through where it is heading? The solution manual proves continuity by computing: for $f(x) = 3x^2 + (x + 2)^5$ at $a = -1$, the limit laws give $\\lim_{x \\to -1} f(x) = 3(-1)^2 + 1 = 4 = f(-1)$, so $f$ is continuous there. Each of the three conditions can fail independently — and each failure mode gets its own name below.',
      },
      {
        term: 'Continuity on an interval; one-sided at endpoints',
        kind: 'definition',
        statement: 'A function is **continuous on an interval** if it is continuous at every interior point; at an endpoint of a closed interval, the one-sided limits are used: continuous from the right at the left endpoint, from the left at the right endpoint.',
        detail: 'For instance, $f(x) = \\sqrt{x}$ is continuous on $[0, \\infty)$ — at 0 it is continuous from the right because $\\lim_{x \\to 0^+} \\sqrt{x} = 0 = f(0)$. The manual works this pattern for $f(x) = x + \\sqrt{x - 4}$, continuous on $[4, \\infty)$ via right-continuity at 4.',
      },
      {
        term: 'Removable discontinuity',
        kind: 'definition',
        statement: 'A discontinuity at $a$ is **removable** if $\\lim_{x \\to a} f(x)$ exists but fails to equal $f(a)$ (or $f(a)$ does not exist) — a hole. Redefining (or defining) $f(a) := \\lim_{x \\to a} f(x)$ repairs it.',
        detail: 'The manual’s example: $f(x) = \\frac{x^4 - 1}{x - 1} = (x^2 + 1)(x + 1)$ for $x \\ne 1$ has a removable discontinuity at 1; the function $g(x) = x^3 + x^2 + x + 1$ (the same formula with the hole filled in) is continuous on all of $\\mathbb{R}$. Removable discontinuities are “clerical errors” — the limit exists and merely needs to be assigned.',
      },
      {
        term: 'Jump and infinite discontinuities',
        kind: 'definition',
        statement: 'A **jump discontinuity** occurs when both one-sided limits exist but differ; an **infinite discontinuity** occurs when a one-sided limit is $\\pm\\infty$ (typically a vertical asymptote). Neither can be repaired by redefining one point.',
        detail: 'The manual’s toll-road example is the canonical jump: a $5 toll outside rush hours and $7 between 7–10 am and 4–7 pm has jumps at $t = 7, 10, 16, 19$ — the price never passes through intermediate values, so drivers time their crossings. For an infinite case, $f(x) = \\frac{1}{x + 2}$ has an infinite discontinuity at $x = -2$ where $f(-2)$ is undefined and the one-sided limits are $\\mp\\infty$.',
      },
      {
        term: 'Which functions are continuous',
        kind: 'theorem',
        statement: 'Polynomials are continuous **everywhere**; rational functions, root functions, trigonometric functions, exponentials and logarithms are continuous **on their domains**. Moreover, sums, differences, products, quotients (nonzero denominator) and compositions of continuous functions are continuous.',
        detail: 'The composition clause is the powerhouse: it certifies in one stroke monsters like $h(x) = e^{\\sin(x^2)}$ wherever built. Domain caveats travel with the parts — a quotient is continuous only where its denominator is nonzero, and the manual checks, for example, that $g(x) = \\frac{x - 1}{3x + 6}$ is continuous on its whole domain $(-\\infty, -2) \\cup (-2, \\infty)$ even though it has an infinite discontinuity at $x = -2$. “Continuous on its domain” does not mean “no vertical asymptotes.”',
      },
      {
        term: 'The Intermediate Value Theorem',
        kind: 'theorem',
        statement: 'If $f$ is continuous on the closed interval $[a, b]$ and $N$ is any number between $f(a)$ and $f(b)$ (with $f(a) \\ne f(b)$), then there exists a number $c \\in (a, b)$ such that $f(c) = N$. A continuous function on a closed interval attains every intermediate value.',
        detail: 'Intuitively: a graph that starts below a horizontal line and ends above it must cross it somewhere — no teleporting allowed. The proof is subtle (it depends on the completeness of the reals) but the use is mechanical: show $f$ is continuous, evaluate at the endpoints, and check the sign change. The manual’s example: $f(x) = -x^3 + 4x + 1$ on $[-1, 0]$ has $f(-1) = -2 < 0 < 1 = f(0)$, so a root of $-x^3 + 4x + 1 = 0$ lies in $(-1, 0)$.',
      },
      {
        term: 'Root localization by sign change',
        kind: 'method',
        statement: 'To show an equation has a root in $(a, b)$: set $f = $ (left side) − (right side), verify $f$ is continuous on $[a, b]$, and check that $f(a)$ and $f(b)$ have opposite signs. The IVT then guarantees some $c$ in $(a, b)$ with $f(c) = 0$.',
        detail: 'The manual runs this on five different equations, among them $\\ln x = \\sqrt{x} - x$ on $[2, 3]$ (where $f(2) \\approx 0.107 > 0 > -0.169 \\approx f(3)$) and $\\cos x = x^3$ on $[0, 1]$ (where $f(0) = 1$ and $f(1) = \\cos 1 - 1 \\approx -0.46$). The IVT proves existence, never uniqueness — locating or counting roots needs more work.',
      },
      {
        term: 'The bisection method',
        kind: 'method',
        statement: 'Once a sign change is found on $[a, b]$, test the midpoint $m = \\frac{a + b}{2}$: if $f(m) = 0$, done; if $f(m)$ has the sign of $f(a)$, the root is in $[m, b]$, otherwise in $[a, m]$. Each halving traps the root in an interval half as long, so $n$ bisections pin it within $(b - a)/2^n$.',
        detail: 'The manual applies it to $\\cos x = x^3$: after proving the root lies in $(0, 1)$, testing midpoints gives $f(0.86) \\approx 0.016 > 0$ and $f(0.87) \\approx -0.014 < 0$, so the root lies in $(0.86, 0.87)$ — eight decimal digits of interval for two extra evaluations. Bisection is slow but unstoppable: it always converges for continuous functions, and it is the reliability benchmark against which faster root-finders (Newton’s Method, Section 4.7) are measured.',
      },
      {
        term: 'Continuity from data and graphs',
        kind: 'insight',
        statement: 'Continuity is an idealization of physical smoothness — but real phenomena can be genuinely discontinuous: taxi fares jump at thresholds, currents jump when switches close, and postal costs jump at each ounce.',
        detail: 'The manual’s “real-world continuity” exercise classifies: temperature versus time is continuous; altitude versus distance west of New York City jumps at cliffs; a taxi fare jumps with each increment — and electric current arguably jumps when a light switches on. Discontinuities are not failures of the theory; they are its honest description of threshold behavior.',
      },
    ],
    examples: [
      {
        title: 'Checking continuity and repairing a hole (Exercises 13 and 51 style)',
        problem: '(a) Show that $f(x) = 3x^2 + (x + 2)^5$ is continuous at $a = -1$. (b) The function $g(x) = \\frac{x^3 - x^2 - 2x}{x - 2}$ has a discontinuity at $x = 2$; classify it and construct a continuous function agreeing with $g$ wherever $g$ is defined.',
        steps: [
          { label: 'Step 1: Compute the limit for (a)', text: 'By the limit laws (sum, power, constant multiple — all legal for polynomials): $\\lim_{x \\to -1} f(x) = 3(-1)^2 + (-1 + 2)^5 = 3 + 1 = 4$.' },
          { label: 'Step 2: Compare with the value', text: '$f(-1) = 3(1) + (1)^5 = 4$. Since $\\lim_{x \\to -1} f(x) = 4 = f(-1)$, all three conditions hold and $f$ is continuous at $-1$. (Polynomials pass this test at every $a$ — that is the direct substitution property in action.)' },
          { label: 'Step 3: Diagnose the discontinuity in (b)', text: 'At $x = 2$ the denominator vanishes, so $g(2)$ is undefined — condition (1) fails. Factor the numerator: $x^3 - x^2 - 2x = x(x - 2)(x + 1)$, so for $x \\ne 2$, $g(x) = x(x + 1) = x^2 + x$.' },
          { label: 'Step 4: Classify and repair', text: 'Since $\\lim_{x \\to 2} g(x) = \\lim_{x \\to 2} (x^2 + x) = 6$ exists, the discontinuity is **removable**. Define $G(x) = x^2 + x$ for all $x$: it agrees with $g$ everywhere $g$ is defined and is continuous on $\\mathbb{R}$ — the hole is filled by assigning the limiting value.' },
        ],
        result: '(a) $f$ is continuous at $-1$ because the limit and the value both equal 4. (b) A removable discontinuity, repaired by $G(x) = x^2 + x$. Holes are cosmetic; jumps and asymptotes are structural.',
      },
      {
        title: 'A jump discontinuity with real teeth: the toll function (Exercise 11 style)',
        problem: 'A toll road charges $5 except between 7:00–10:00 am and 4:00–7:00 pm, when it charges $7. Model the toll $T$ as a function of time $t$ (in hours after midnight) and identify the discontinuities and their significance.',
        steps: [
          { label: 'Step 1: Write the piecewise model', text: '$$T(t) = \\begin{cases} 7 & 7 < t < 10 \\\\ 5 & \\text{otherwise,} \\end{cases}$$ a step function of the hour of the day.' },
          { label: 'Step 2: Probe the transition times', text: 'At $t = 7$: the left-hand limit is 5 (night rate), the right-hand limit is 7 (rush rate), and $T(7) = 5$. Both one-sided limits exist but differ — a **jump discontinuity** at each of $t = 7, 10, 16, 19$.' },
          { label: 'Step 3: Check continuity elsewhere', text: 'On every open interval between the transition times the function is constant, and constants are continuous. So the toll function is continuous except at the four rush-hour boundaries.' },
          { label: 'Step 4: Interpret', text: 'The jumps are the point: the toll never takes an intermediate value like $6, so crossing one minute before 7 am instead of one minute after saves $2 — drivers rationally time their crossings to exploit the discontinuity.' },
        ],
        result: 'Jump discontinuities at $t = 7, 10, 16, 19$. The graph of a step function is a staircase, and the vertical risers are exactly where the money is.',
      },
      {
        title: 'IVT plus bisection: a root of $x^3 + x - 1 = 0$ in $(0, 1)$',
        problem: 'Show that $x^3 + x - 1 = 0$ has a root in $(0, 1)$, then trap it by repeated bisection.',
        steps: [
          { label: 'Step 1: Name the function and check hypotheses', text: 'Let $f(x) = x^3 + x - 1$, a polynomial — continuous on all of $[0, 1]$. Both IVT hypotheses (closed interval, continuity) are satisfied.' },
          { label: 'Step 2: Find the sign change', text: '$f(0) = -1 < 0$ and $f(1) = 1 + 1 - 1 = 1 > 0$. Since 0 lies between $-1$ and 1, the IVT guarantees a $c \\in (0, 1)$ with $f(c) = 0$.' },
          { label: 'Step 3: First bisection', text: 'Midpoint $m = 0.5$: $f(0.5) = 0.125 + 0.5 - 1 = -0.375 < 0$, same sign as $f(0)$. The root lies in $(0.5, 1)$.' },
          { label: 'Step 4: Second and third bisections', text: 'Midpoint $0.75$: $f(0.75) = 0.421875 + 0.75 - 1 = 0.172 > 0$, so the root is in $(0.5, 0.75)$. Midpoint $0.625$: $f(0.625) \approx -0.131 < 0$, so the root is in $(0.625, 0.75)$.', },
          { label: 'Step 5: Fourth bisection and the pattern', text: 'Midpoint $0.6875$: $f(0.6875) \\approx 0.325 + 0.6875 - 1 = 0.0124 > 0$, so the root is in $(0.625, 0.6875)$ — already trapped in an interval of length 0.0625. The true root is $c \\approx 0.6823$, and each further bisection halves the uncertainty.' },
        ],
        result: 'The IVT proves existence; bisection manufactures precision: after $n$ halvings the root is pinned inside an interval of length $2^{-n}$. The same procedure gave the manual a root of $\\cos x = x^3$ inside $(0.86, 0.87)$ in two extra evaluations.',
      },
    ],
    keyTakeaways: [
      'Continuity at $a$ is the triple contract: $f(a)$ defined, the limit exists, and they are equal — “the graph goes where it is going.”',
      'On closed intervals, endpoints use one-sided continuity; $\\sqrt{x}$ is continuous on $[0, \\infty)$.',
      'Removable discontinuities are holes (fill by redefining one point); jump discontinuities have mismatched one-sided limits; infinite discontinuities are vertical asymptotes.',
      'Polynomials are continuous everywhere; rationals, roots, trig, exponential and log functions are continuous on their domains; and continuity is preserved by arithmetic and composition.',
      'The IVT: a continuous function on $[a, b]$ attains every value between $f(a)$ and $f(b)$ — the existence theorem behind root-finding.',
      'Sign change at the endpoints of a continuous function forces a root inside; bisection halves the search interval each step, converging to the root with machine-like reliability.',
      'Real quantities can be honestly discontinuous — fares, postage and switched currents all jump; the model, not the math, decides.',
    ],
    quiz: [
      {
        q: 'Which condition is NOT part of the definition of continuity at $a$?',
        options: ['$f(a)$ is defined', '$\\lim_{x \\to a} f(x)$ exists', `$f$ is differentiable at $a$`, `$\\lim_{x \\to a} f(x) = f(a)$`],
        answer: 2,
        explanation: 'Continuity needs only defined value, existing limit, and agreement. Differentiability is strictly stronger — $|x|$ is continuous at 0 but not differentiable there (Section 2.8).',
      },
      {
        q: 'The function $f(x) = \\frac{x^4 - 1}{x - 1}$ has what kind of discontinuity at $x = 1$?',
        options: ['Jump', 'Infinite', 'Removable, since the limit exists and equals 4', 'None — it is continuous everywhere'],
        answer: 2,
        explanation: 'For $x \\ne 1$ the function equals $(x^2 + 1)(x + 1)$, whose limit at 1 is 4; the hole can be filled by redefining $f(1) = 4$ — a removable discontinuity, the manual’s own Exercise 51.',
      },
      {
        q: 'The Intermediate Value Theorem guarantees a root of $f(x) = \\cos x - x^3$ in $(0, 1)$ because:',
        options: [`$f$ is differentiable on $(0, 1)$`, `$f$ is continuous on $[0, 1]$ with $f(0) = 1 > 0$ and $f(1) \\approx -0.46 < 0$`, '$f(0)$ and $f(1)$ are both positive', 'The graph is symmetric'],
        answer: 1,
        explanation: 'Continuity on the closed interval plus a sign change: 0 lies between $f(0)$ and $f(1)$, so some $c \\in (0, 1)$ satisfies $f(c) = 0$. The manual then bisects down to the root in $(0.86, 0.87)$.',
      },
      {
        q: 'In bisection, $f(0.5) < 0$ has the same sign as $f(0)$, and $f(1) > 0$. The root must lie in:',
        options: [`$(0, 0.5)$`, `$[0.5, 1)$`, 'Exactly at 0.5', 'It cannot be determined'],
        answer: 1,
        explanation: 'The sign change must happen between the last negative point and the first positive one: since $f(0.5)$ is negative like $f(0)$, the crossing is in $(0.5, 1)$, and the next midpoint to test is 0.75.',
      },
      {
        q: 'Which statement about “continuous on its domain” is correct?',
        options: ['It implies the function has no vertical asymptotes', 'It rules out jump discontinuities everywhere', 'A rational function can be continuous on its domain even though it blows up at a point outside that domain', 'It is equivalent to being continuous on all of $\\mathbb{R}$'],
        answer: 2,
        explanation: 'Continuity is a pointwise property evaluated only where the function lives: $\\frac{x-1}{3x+6}$ is continuous at every point of its domain $(-\\infty, -2) \\cup (-2, \\infty)$ despite the infinite discontinuity at $x = -2$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.6
  {
    sectionId: 'calc-ch2-s6',
    readingTime: 9,
    intro: 'Limits at infinity ask a different question than limits at a point: not “what does $f$ approach as $x$ homes in on $a$,” but “what does $f$ approach as $x$ grows without bound?” The answers are the horizontal asymptotes — the altitudes a graph levels off to at the far left and far right. Rational functions surrender these limits to one mechanical rule (divide by the highest power), while the transcendental functions $e^x$ and $\\ln x$ supply the extreme cases: explosive growth in one direction, slow unbounded creep in the other.',
    objectives: [
      'Define $\\lim_{x \\to \\infty} f(x) = L$ and connect it to horizontal asymptotes',
      'Evaluate limits of rational functions by dividing numerator and denominator by the highest power of $x$',
      'Classify the three cases by comparing degrees of numerator and denominator',
      'Handle square roots at infinity (where dividing by $x$ requires a sign check)',
      'State the behavior of $e^x$, $e^{-x}$ and $\\ln x$ at $\\pm\\infty$, including the slow growth of logarithms',
    ],
    concepts: [
      {
        term: 'Limit at infinity',
        kind: 'definition',
        statement: '$\\lim_{x \\to \\infty} f(x) = L$ means the values of $f(x)$ can be made as close to $L$ **as we like** by taking $x$ sufficiently large. The definition with $x \\to -\\infty$ (sufficiently large negative) is analogous.',
        detail: 'The structure mirrors the limit at a point — closeness guaranteed by confinement — but the confinement is now “large” rather than “near.” Note that $\\infty$ is not a number and never a location: the notation describes behavior over an unbounded tail of the axis. The solution manual reads it off graphs: “as $x$ becomes large, the values of $f(x)$ approach 5; as $x$ becomes large negative, they approach 3.”',
      },
      {
        term: 'Horizontal asymptotes',
        kind: 'definition',
        statement: 'The line $y = L$ is a **horizontal asymptote** of the curve $y = f(x)$ if $$\\lim_{x \\to \\infty} f(x) = L \\quad \\text{or} \\quad \\lim_{x \\to -\\infty} f(x) = L.$$ A graph can have zero, one or two horizontal asymptotes — but never more than two.',
        detail: 'An asymptote is a direction the graph settles toward, not a boundary: the manual’s Exercise 2 draws a curve that **crosses its horizontal asymptote infinitely many times** while still converging to it — oscillations must decay, but need not stay on one side. Contrast with vertical asymptotes, which a graph can meet but not cross.',
      },
      {
        term: 'The base limit: $1/x \\to 0$',
        kind: 'law',
        statement: '$$\\lim_{x \\to \\pm\\infty} \\frac{1}{x} = 0, \\qquad \\text{and more generally} \\qquad \\lim_{x \\to \\pm\\infty} \\frac{1}{x^n} = 0 \\ (n > 0).$$ Every limit-at-infinity computation reduces to this limit via the laws.',
        detail: 'The reciprocal of an enormous number is nearly zero, and the sign of infinity is irrelevant to the size. This is the atom from which all rational-function limits are built: after dividing by the highest power, every surviving term is a constant plus multiples of $1/x^k$, and those vanish one by one.',
      },
      {
        term: 'Divide by the highest power',
        kind: 'method',
        statement: 'For $\\lim_{x \\to \\infty} \\frac{P(x)}{Q(x)}$: divide numerator and denominator by the highest power of $x$ that appears in the denominator, then evaluate term by term — each $\\frac{c}{x^k} \\to 0$, leaving only the ratios of leading coefficients.',
        detail: 'The manual’s worked pattern: $\\lim_{x \\to \\infty} \\frac{2x^2 - 7}{5x^2 + x - 3} = \\lim_{x \\to \\infty} \\frac{2 - 7/x^2}{5 + 1/x - 3/x^2} = \\frac{2 - 0}{5 + 0 - 0} = \\frac{2}{5}$, with the limit laws cited at each step (quotient law, then Law 8 with $1/x^k \\to 0$).',
      },
      {
        term: 'The three degree cases',
        kind: 'insight',
        statement: 'For $\\lim_{x \\to \\infty} \\frac{\\text{polynomial}}{\\text{polynomial}}$: **degree of numerator < degree of denominator** gives limit 0; **equal degrees** give the ratio of leading coefficients; **numerator degree larger** gives $\\pm\\infty$ (no horizontal asymptote).',
        detail: 'All three are consequences of the divide-by-highest-power rule, and the manual exercises each: $\\frac{-2}{3x + 7} \\to 0$ (smaller top), $\\frac{4x + 3}{5x - 1} \\to \\frac{4}{5}$ (equal), and $\\frac{x^7 + 2x}{\\text{lower degree}} \\to \\pm\\infty$ (bigger top, sign from the leading terms and the direction of $x$). When the top wins, the values eventually blow past every bound — an **infinite limit at infinity**.',
      },
      {
        term: 'Square roots at infinity',
        kind: 'method',
        statement: 'With $\\sqrt{\\;}$ over a polynomial, factor the highest power **out of the radicand**, keeping the sign straight: for $x > 0$, $\\sqrt{x^2} = x$; for $x < 0$, $\\sqrt{x^2} = -x$. Then divide and evaluate as usual.',
        detail: 'The manual’s Example: $\\lim_{x \\to \\infty} \\frac{\\sqrt{x + 3x^2}}{4x - 1} = \\lim_{x \\to \\infty} \\frac{\\sqrt{x^2\\left(\\frac{1}{x} + 3\\right)}}{x\\left(4 - \\frac{1}{x}\\right)} = \\lim_{x \\to \\infty} \\frac{\\sqrt{\\frac{1}{x} + 3}}{4 - \\frac{1}{x}} = \\frac{\\sqrt{3}}{4}$, using $\\sqrt{x^2} = x$ validly because $x \\to +\\infty$. The identical limit with $x \\to -\\infty$ would need $\\sqrt{x^2} = -x$ and flips the answer’s sign.',
      },
      {
        term: 'Exponentials and logarithms at infinity',
        kind: 'insight',
        statement: 'As $x \\to \\infty$: $e^x \\to \\infty$ explosively, $e^{-x} \\to 0$, and $\\ln x \\to \\infty$ but **slower than any positive power** of $x$. As $x \\to 0^+$, $\\ln x \\to -\\infty$. Exponential decay crushes polynomial growth toward 0, and oscillation does not survive against decay.',
        detail: 'The manual quantifies the exponential’s dominance — a table for $\\frac{x^2}{2^x}$ reads $0.098, 0.00038, 2.2 \\times 10^{-12}, 7.9 \\times 10^{-27}$ at $x = 10, 20, 50, 100$, so $\\lim_{x \\to \\infty} \\frac{x^2}{2^x} = 0$. It also notes that $\\lim_{x \\to \\infty} (e^{-x} + 2\\cos 3x)$ **does not exist**: the decaying term vanishes but the oscillation persists; while $e^{-2x}\\cos x \\to 0$ because the decay factor squeezes the oscillation — a squeeze theorem at infinity.',
      },
      {
        term: 'Compound-interest teaser: $\\left(1 + \\frac{r}{x}\\right)^x$',
        kind: 'insight',
        statement: 'Values of $\\left(1 - \\frac{2}{x}\\right)^x$ approach approximately $0.1353$ as $x \\to \\infty$ — a number that Chapter 3 will reveal as $e^{-2}$. Limits of the shape $\\left(1 + \\frac{r}{x}\\right)^x \\to e^r$ are the bridge between discrete and continuous compounding.',
        detail: 'The manual’s numerical investigation: graphing and then tabulating $f(x) = \\left(1 - \\frac{2}{x}\\right)^x$ at $x = 10{,}000, 100{,}000, 1{,}000, 000$ gives $0.135308, 0.135333, 0.135335$ — four-decimal stability at $0.1353$. The recognition $0.1353 \\approx e^{-2} = 1/e^2$ is the chapter’s cliffhanger, made rigorous by logarithmic differentiation in Section 3.6 and L’Hôpital’s Rule in Section 4.4.',
      },
    ],
    examples: [
      {
        title: 'Equal degrees: $\\lim_{x \\to \\infty} \\frac{2x^2 - 7}{5x^2 + x - 3}$ (Exercise 13 style)',
        problem: 'Evaluate $\\lim_{x \\to \\infty} \\frac{2x^2 - 7}{5x^2 + x - 3}$ and identify the horizontal asymptote.',
        steps: [
          { label: 'Step 1: Divide by the highest power', text: 'The highest power of $x$ in the denominator is $x^2$. Divide numerator and denominator by $x^2$: $\\frac{2x^2 - 7}{5x^2 + x - 3} = \\frac{2 - \\frac{7}{x^2}}{5 + \\frac{1}{x} - \\frac{3}{x^2}}$.' },
          { label: 'Step 2: Kill the vanishing terms', text: 'As $x \\to \\infty$, each of $\\frac{7}{x^2}, \\frac{1}{x}, \\frac{3}{x^2}$ tends to 0 — the base limit applied three times.' },
          { label: 'Step 3: Evaluate the surviving ratio', text: 'The limit is $\\frac{2 - 0}{5 + 0 - 0} = \\frac{2}{5}$. Only the leading coefficients survived; the lower-order terms were asymptotically irrelevant.' },
          { label: 'Step 4: State the asymptote', text: 'Since the limit exists and equals $\\frac{2}{5}$, the line $y = \\frac{2}{5}$ is a horizontal asymptote as $x \\to \\infty$. (The same division shows the limit as $x \\to -\\infty$ is also $\\frac{2}{5}$, because $x^2$ is positive on both tails.)' },
        ],
        result: 'The limit is $\\frac{2}{5}$: equal degrees always collapse to the ratio of leading coefficients, and the graph levels off to $y = \\frac{2}{5}$ in both directions.',
      },
      {
        title: 'All three cases and a square root (Exercises 16 and 23 style)',
        problem: 'Evaluate (a) $\\lim_{x \\to \\infty} \\frac{-2}{3x + 7}$; (b) $\\lim_{x \\to \\infty} \\frac{\\sqrt{x + 3x^2}}{4x - 1}$; (c) $\\lim_{x \\to \\infty} \\frac{x^7 + 2x}{\\text{(degree-6 denominator)}}$ conceptually.',
        steps: [
          { label: 'Step 1: Smaller numerator (a)', text: 'Divide by $x$: $\\frac{-2/x}{3 + 7/x} \\to \\frac{0}{3} = 0$. Numerator degree 0 below denominator degree 1 — the graph’s right tail hugs the $x$-axis.' },
          { label: 'Step 2: Factor the highest power out of the root (b)', text: 'For $x > 0$: $\\sqrt{x + 3x^2} = \\sqrt{x^2\\left(\\frac{1}{x} + 3\\right)} = x\\sqrt{\\frac{1}{x} + 3}$ (valid since $\\sqrt{x^2} = x$ for positive $x$). So $\\frac{\\sqrt{x + 3x^2}}{4x - 1} = \\frac{x\\sqrt{\\frac{1}{x} + 3}}{x\\left(4 - \\frac{1}{x}\\right)} = \\frac{\\sqrt{\\frac{1}{x} + 3}}{4 - \\frac{1}{x}}$.' },
          { label: 'Step 3: Evaluate (b)', text: 'As $x \\to \\infty$: $\\sqrt{\\frac{1}{x} + 3} \\to \\sqrt{3}$ and the denominator $\\to 4$, so the limit is $\\frac{\\sqrt{3}}{4}$. The effective degrees match after pulling $x$ out of the radical.' },
          { label: 'Step 4: Larger numerator (c)', text: 'With degree 7 over degree 6, dividing by the denominator’s top power leaves an unbounded $x$ on top: the expression grows without bound (sign set by the leading coefficients and the tail direction) — an infinite limit at infinity, hence no horizontal asymptote.' },
        ],
        result: '(a) $0$; (b) $\\frac{\\sqrt{3}}{4}$; (c) $\\pm\\infty$. The degree comparison predicts the answer before any algebra, and radicals only require pulling the top power out — carefully.',
      },
      {
        title: 'The transcendentals: $e^x$ and $\\ln x$ at the extremes',
        problem: 'Evaluate (a) $\\lim_{x \\to -\\infty} e^x$; (b) $\\lim_{x \\to 0^+} \\ln x$; (c) $\\lim_{x \\to \\infty} e^{-2x} \\cos x$; and (d) describe $\\lim_{x \\to \\infty} \\left(e^{-x} + 2\\cos 3x\\right)$.',
        steps: [
          { label: 'Step 1: Exponential decay toward the left', text: '(a) As $x \\to -\\infty$, $e^x = \\frac{1}{e^{-x}}$ where $e^{-x} \\to \\infty$: reciprocals of unbounded numbers tend to 0. So $\\lim_{x \\to -\\infty} e^x = 0$ — the $x$-axis is a one-sided horizontal asymptote.' },
          { label: 'Step 2: Logarithm at the wall', text: '(b) As $x \\to 0^+$, $\\ln x \\to -\\infty$: to make $e^y$ tiny you need $y$ hugely negative, and $\\ln$ records the exponent. The $y$-axis is a vertical asymptote of $\\ln x$.' },
          { label: 'Step 3: Decay squeezes oscillation', text: '(c) Since $-e^{-2x} \\le e^{-2x}\\cos x \\le e^{-2x}$ and both bounds $\\to 0$, the Squeeze Theorem gives $\\lim_{x \\to \\infty} e^{-2x}\\cos x = 0$ — the oscillation is amplitude-modulated into extinction. (This is the manual’s Exercise 35.)' },
          { label: 'Step 4: Persistent oscillation kills the limit', text: '(d) The term $e^{-x} \\to 0$, but $2\\cos 3x$ keeps oscillating between $-2$ and $2$ forever, so the sum never settles: the limit **does not exist**. Decay plus oscillation squeezes to 0; oscillation alone never converges. (The manual’s Exercise 34.)' },
        ],
        result: '(a) $0$; (b) $-\\infty$; (c) $0$ by squeezing; (d) does not exist. Exponentials own the extremes: they die to 0 in one direction and overwhelm every polynomial in the other, while $\\ln x$ creeps to infinity slower than any power.',
      },
    ],
    keyTakeaways: [
      '$\\lim_{x \\to \\infty} f(x) = L$ means the values get as close to $L$ as desired once $x$ is large enough — and $y = L$ is then a horizontal asymptote.',
      'Compute rational limits at infinity by dividing numerator and denominator by the highest power of $x$ in the denominator, then letting every $1/x^k$ vanish.',
      'Degree rules: smaller numerator $\\to 0$; equal degrees $\\to$ ratio of leading coefficients; larger numerator $\\to \\pm\\infty$ (no horizontal asymptote).',
      'A graph may cross its horizontal asymptote — even infinitely often — as long as it settles toward it asymptotically.',
      'With radicals, pull the highest power out of the radicand and mind the sign: $\\sqrt{x^2} = x$ for $x > 0$ but $-x$ for $x < 0$.',
      '$e^x \\to \\infty$ and $\\ln x \\to \\infty$ as $x \\to \\infty$, but the exponential is in another league: $\\frac{x^2}{2^x} \\to 0$, and more generally every exponential dominates every power.',
      'Decay factors squeeze oscillations to 0 ($e^{-2x}\\cos x \\to 0$), but oscillation without decay has no limit.',
    ],
    quiz: [
      {
        q: 'Evaluate $\\lim_{x \\to \\infty} \\frac{4x + 3}{5x - 1}$.',
        options: [`$0$`, `$\\frac{4}{5}$`, `$\\frac{3}{-1} = -3$`, `$\\infty$`],
        answer: 1,
        explanation: 'Equal degrees (1 and 1) give the ratio of leading coefficients: divide by $x$ to get $\\frac{4 + 3/x}{5 - 1/x} \\to \\frac{4}{5}$.',
      },
      {
        q: '$\\lim_{x \\to \\infty} \\frac{x^2 + 5x}{3 - x^4}$ is best described as:',
        options: ['Diverging to $\\infty$ because the numerator grows', 'Equal to $\\frac{1}{1} = 1$', 'Equal to 0, since the denominator has the larger degree', 'Nonexistent because of the negative constant'],
        answer: 2,
        explanation: 'Degree 4 below beats degree 2 on top: after dividing by $x^4$, the numerator’s terms both die and the limit is $\\frac{0}{-1} = 0$.',
      },
      {
        q: 'As $x \\to -\\infty$, the values of $f(x) = e^x$ behave how?',
        options: ['They grow without bound', 'They approach 0, so the $x$-axis is a horizontal asymptote on the left', 'They oscillate', 'They approach 1'],
        answer: 1,
        explanation: '$e^x$ is the reciprocal of $e^{|x|}$ on the left tail, and reciprocals of unbounded numbers shrink to 0: $\\lim_{x \\to -\\infty} e^x = 0$.',
      },
      {
        q: 'Which is TRUE of horizontal asymptotes?',
        options: ['A graph can never touch its horizontal asymptote', 'A graph can cross its horizontal asymptote, even infinitely many times', 'Every function has exactly one horizontal asymptote', 'Horizontal and vertical asymptotes obey the same crossing rules'],
        answer: 1,
        explanation: 'Crossing is allowed — what matters is convergence. The solution manual’s Exercise 2 sketches a curve weaving through its asymptote infinitely often while still approaching it; vertical asymptotes, by contrast, are lines the graph cannot cross.',
      },
      {
        q: 'Evaluate $\\lim_{x \\to \\infty} e^{-2x} \\cos x$.',
        options: ['It does not exist because $\\cos x$ oscillates', `$1$`, '$0$, because the decaying factor squeezes the oscillation', `$-2$`],
        answer: 2,
        explanation: '$-e^{-2x} \\le e^{-2x}\\cos x \\le e^{-2x}$ and both bounds tend to 0 — the Squeeze Theorem applies at infinity exactly as at a point, the manual’s Exercise 35.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.7
  {
    sectionId: 'calc-ch2-s7',
    readingTime: 10,
    intro: 'Section 2.7 names and formalizes what Section 2.1 rehearsed: the derivative of $f$ at $a$ is the limit of its secant slopes, and it measures the instantaneous rate of change of $f$ exactly as velocity measures the instantaneous rate of change of position. The section’s two difference-quotient forms, its tangent-line formula and its interpretation of the derivative as a rate with units are the load-bearing walls of all of Chapters 3 and 4.',
    objectives: [
      'State the derivative at a point in both the $h$-form and the $x$-form, and explain their equivalence',
      'Compute derivatives from the definition for polynomial, rational and root functions',
      'Write the equation of the tangent line to a curve at a point',
      'Interpret $f’(a)$ as an instantaneous rate of change in physics, biology and economics contexts',
      'Track units through difference quotients and their limits',
    ],
    concepts: [
      {
        term: 'The derivative at a point',
        kind: 'definition',
        statement: 'The **derivative** of $f$ at $a$ is $$f’(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h},$$ provided this limit exists. It is the slope of the tangent line to $y = f(x)$ at the point $(a, f(a))$.',
        detail: 'The quotient is exactly the average rate of change over a window of width $h$, and the limit is the instant the window closes. Equivalently the $x$-form replaces $a + h$ by a variable $x$ tending to $a$: $f’(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$. The manual’s Exercise 1 asks you to recognize both: the secant slope $\\frac{f(x) - f(3)}{x - 3}$ and its limit as the tangent slope.',
      },
      {
        term: 'The tangent line equation',
        kind: 'method',
        statement: 'The tangent line to $y = f(x)$ at $(a, f(a))$ is the line through that point with slope $f’(a)$: $$y = f(a) + f’(a)\\,(x - a).$$',
        detail: 'Point-slope form with the derivative supplying the slope. The manual’s worked pair: for $f(x) = x^2 + 3x$ at $P(-1, -2)$ with $f’(-1) = 1$ the tangent is $y = x - 1$; for $f(x) = 2x^2 - 5x + 1$ at $P(3, 4)$ with $f’(3) = 7$ it is $y = 7x - 17$. Zooming into the curve, tangent and curve become indistinguishable — the picture behind linear approximation (Section 3.10).',
      },
      {
        term: 'Velocity and position',
        kind: 'definition',
        statement: 'If $s(t)$ is position, the **velocity** is the derivative of position: $$v(t) = s’(t) = \\lim_{h \\to 0} \\frac{s(t + h) - s(t)}{h}.$$ Positive velocity means motion in the positive direction; speed is $|v|$.',
        detail: 'The Mars rock of Section 2.1 closes here: $s(t) = 10t - 1.86t^2$ gives $v(t) = \\lim_{h \\to 0} \\frac{10h - 3.72th - 1.86h^2}{h} = 10 - 3.72t$, so $v(1) = 6.28$ m/s — the number the secant table was hunting. Differentiating position one more time gives acceleration (Section 2.8).',
      },
      {
        term: 'Instantaneous rate of change',
        kind: 'insight',
        statement: 'For any quantity $y = f(x)$, the derivative $f’(a)$ is the **instantaneous rate of change** of $y$ with respect to $x$ at $a$ — the output units per input unit.',
        detail: 'The interpretation travels: position per time (velocity), population per time (growth rate), cost per item (marginal cost), temperature per distance (gradient steepness). The manual’s biology example reads $C’(t)$ as “the instantaneous rate of change of percentage of full capacity with respect to elapsed time in hours,” and its fuel-economy example notes $F’(v) = 0$ near $v = 50$ mi/h — the speed at which mileage is optimized.',
      },
      {
        term: 'Units of a derivative',
        kind: 'notation',
        statement: 'The units of $f’$ are the units of the output divided by the units of the input: if $s$ is meters and $t$ is seconds, $s’(t)$ is m/s; if $C$ is dollars and $q$ is items, $C’$ is dollars per item.',
        detail: 'The difference quotient carries the units through the division, and the limiting process does not change them — the secant slopes m/s simply settle on a specific m/s value. Keeping units attached is the fastest sanity check on any applied derivative problem, and the fastest way to see that acceleration (Section 2.8) is m/s per s.',
      },
      {
        term: 'When the quotient fails: reading $f’$ from estimates',
        kind: 'method',
        statement: 'When $f$ is given only by a graph or a table, estimate $f’(a)$ by secant slopes between neighboring data points on either side of $a$; symmetric differences $\\frac{f(a + h) - f(a - h)}{2h}$ are especially accurate.',
        detail: 'The manual’s estimates: zooming on a curve gives $f’(0) = \\tfrac{1}{2}$, $f’(1) = 1$, $f’(2) = 4$ and so on, from which a formula is guessed and then verified from the definition — the discovery pattern for $f’(x) = e^x$ in Section 2.8. Numerics first, definition second, rules third.',
      },
      {
        term: 'Different meanings, one number',
        kind: 'insight',
        statement: 'One number $f’(a)$ answers three questions at once: the slope of the tangent line at $(a, f(a))$, the instantaneous rate of change at $a$, and the best constant by which to scale small input changes near $a$.',
        detail: 'This triple identity — geometric, physical and algebraic — is why derivatives run the sciences. The manual’s yeast-culture reading: the graph of the population’s derivative peaks at about 6 hours, meaning growth is fastest then and declines after — biology read off a slope graph without any formula.',
      },
    ],
    examples: [
      {
        title: 'Both forms of the derivative at a point (Exercise 3 style)',
        problem: 'Find the slope of the tangent line to $y = x^2 + 3x$ at $P(-1, -2)$ using (i) the $x$-form and (ii) the $h$-form, and write the tangent line.',
        steps: [
          { label: 'Step 1: Set up the $x$-form', text: '$m = \\lim_{x \\to -1} \\frac{f(x) - f(-1)}{x - (-1)} = \\lim_{x \\to -1} \\frac{(x^2 + 3x) - (-2)}{x + 1} = \\lim_{x \\to -1} \\frac{x^2 + 3x + 2}{x + 1}$.' },
          { label: 'Step 2: Factor and cancel', text: 'The numerator factors: $x^2 + 3x + 2 = (x + 2)(x + 1)$, so the quotient is $x + 2$ for $x \\ne -1$. Hence $m = \\lim_{x \\to -1} (x + 2) = 1$.' },
          { label: 'Step 3: Set up the $h$-form', text: '$m = \\lim_{h \\to 0} \\frac{f(-1 + h) - f(-1)}{h} = \\lim_{h \\to 0} \\frac{(-1 + h)^2 + 3(-1 + h) + 2}{h} = \\lim_{h \\to 0} \\frac{h^2 + h}{h}$ after expanding: $1 - 2h + h^2 - 3 + 3h + 2 = h^2 + h$.' },
          { label: 'Step 4: Cancel and evaluate', text: '$\\lim_{h \\to 0} \\frac{h(h + 1)}{h} = \\lim_{h \\to 0} (h + 1) = 1$ — agreeing with the $x$-form, as it must.' },
          { label: 'Step 5: Write the tangent line', text: 'Through $(-1, -2)$ with slope 1: $y - (-2) = 1(x - (-1))$, i.e. $y = x - 1$. Zooming in near $P$, the parabola and this line become indistinguishable.' },
        ],
        result: 'Both forms give slope 1 and the tangent line $y = x - 1$. The two difference quotients are the same limit in different clothes — choose whichever factors more kindly.',
      },
      {
        title: 'A rational function’s tangent (Exercise 7 style)',
        problem: 'Find the equation of the tangent line to $y = \\frac{x + 2}{x - 3}$ at the point $P(2, -4)$.',
        steps: [
          { label: 'Step 1: Assemble the difference quotient', text: '$m = \\lim_{x \\to 2} \\frac{\\frac{x+2}{x-3} - (-4)}{x - 2} = \\lim_{x \\to 2} \\frac{\\frac{x + 2 + 4(x - 3)}{x - 3}}{x - 2} = \\lim_{x \\to 2} \\frac{\\frac{5x - 10}{x - 3}}{x - 2}$.' },
          { label: 'Step 2: Simplify the complex fraction', text: 'Dividing by $(x - 2)$ multiplies by its reciprocal: $m = \\lim_{x \\to 2} \\frac{5x - 10}{(x - 2)(x - 3)} = \\lim_{x \\to 2} \\frac{5(x - 2)}{(x - 2)(x - 3)}$.' },
          { label: 'Step 3: Cancel and substitute', text: 'For $x \\ne 2$ the quotient is $\\frac{5}{x - 3}$, so $m = \\frac{5}{2 - 3} = -5$.' },
          { label: 'Step 4: Write the line', text: 'Through $(2, -4)$ with slope $-5$: $y - (-4) = -5(x - 2)$, i.e. $y = -5x + 6$. Rational functions differentiate by exactly this clear-the-denominator algebra — the Quotient Rule of Section 3.2 systematizes it.' },
        ],
        result: 'Tangent line $y = -5x + 6$. Even when $f$ is a quotient, the definition reduces the problem to one careful cancellation.',
      },
      {
        title: 'Instantaneous velocity from the definition',
        problem: 'A rock thrown upward on Mars has height $s(t) = 10t - 1.86t^2$ meters. Use the definition of the derivative to find its velocity function $v(t)$ and its velocity at $t = 1$.',
        steps: [
          { label: 'Step 1: Write the difference quotient at time $t$', text: '$v(t) = \\lim_{h \\to 0} \\frac{s(t + h) - s(t)}{h} = \\lim_{h \\to 0} \\frac{\\left[10(t + h) - 1.86(t + h)^2\\right] - \\left[10t - 1.86t^2\\right]}{h}$.' },
          { label: 'Step 2: Expand the numerator', text: '$10t + 10h - 1.86t^2 - 3.72th - 1.86h^2 - 10t + 1.86t^2 = 10h - 3.72th - 1.86h^2$ — everything in $t$ alone cancels, leaving pure $h$-terms.' },
          { label: 'Step 3: Divide and take the limit', text: '$v(t) = \\lim_{h \\to 0} \\frac{h(10 - 3.72t - 1.86h)}{h} = \\lim_{h \\to 0} (10 - 3.72t - 1.86h) = 10 - 3.72t$.' },
          { label: 'Step 4: Interpret', text: 'At $t = 1$: $v(1) = 10 - 3.72 = 6.28$ m/s — confirming the Section 2.1 secant table. The velocity decreases at the constant rate 3.72 m/s per second (Mars gravity), reaching 0 at $t = \\frac{10}{3.72} \\approx 2.69$ s, the peak of the flight.' },
        ],
        result: '$v(t) = 10 - 3.72t$ m/s and $v(1) = 6.28$ m/s. The definition turns a position formula into a velocity formula in three moves: expand, cancel, limit.',
      },
    ],
    keyTakeaways: [
      'The derivative at $a$ is the limit of secant slopes: $f’(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$, equivalently $\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$.',
      'The tangent line at $(a, f(a))$ is $y = f(a) + f’(a)(x - a)$ — the line the curve impersonates under zoom.',
      'Velocity is the derivative of position; $v(t) = s’(t)$, with sign giving direction and $|v|$ giving speed.',
      'Every derivative is a rate: output units per input unit, attached to whatever the variables measure.',
      'Computing from the definition always follows the same arc — assemble, expand, cancel the vanishing factor, evaluate.',
      'When formulas are absent, estimate derivatives from secant slopes of nearby data; symmetric differences are the most accurate quick estimate.',
      'One number, three readings: tangent slope, instantaneous rate, and local scaling factor — the geometric, physical and algebraic faces of the derivative.',
    ],
    quiz: [
      {
        q: 'The derivative $f’(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$ is best described as:',
        options: ['The average rate of change of $f$ over $[a, a + h]$', 'The slope of the tangent line to $f$ at $x = a$', 'The value $f(a + 1) - f(a)$', 'The area under the graph near $a$'],
        answer: 1,
        explanation: 'The quotient itself is the average rate (a secant slope); its limit as $h \\to 0$ is the instantaneous rate — the tangent slope at the point.',
      },
      {
        q: 'For $f(x) = x^2$, what is $f’(3)$?',
        options: [`$6$`, `$9$`, `$3$`, `$0$`],
        answer: 0,
        explanation: '$f’(3) = \\lim_{h \\to 0} \\frac{(3 + h)^2 - 9}{h} = \\lim_{h \\to 0} (6 + h) = 6$ — the derivative of $x^2$ is $2x$, evaluated at 3.',
      },
      {
        q: 'A particle has position $s(t)$ in meters, $t$ in seconds. The units of $s’(t)$ are:',
        options: ['meters', 'seconds per meter', 'meters per second', 'meters times seconds'],
        answer: 2,
        explanation: 'The difference quotient divides a displacement in meters by an elapsed time in seconds; the limit keeps those units — velocity in m/s.',
      },
      {
        q: 'The tangent line to $y = 2x^2 - 5x + 1$ at $P(3, 4)$ has slope 7 (computed from the definition). Its equation is:',
        options: [`$y = 7x$`, `$y - 4 = 7(x - 3)$, i.e. $y = 7x - 17$`, `$y = 4x - 7$`, `$y - 3 = 7(x - 4)$`],
        answer: 1,
        explanation: 'Point-slope form with the point $(3, 4)$ and slope $f’(3) = 7$: $y = 4 + 7(x - 3) = 7x - 17$ — the manual’s own Exercise 5.',
      },
      {
        q: 'A fuel-economy curve $F(v)$ satisfies $F’(50) = 0$ with $F’ > 0$ before 50 and $F’ < 0$ after. What does this mean?',
        options: ['The car uses no fuel at 50 mi/h', 'Fuel economy is maximized at about 50 mi/h', 'Velocity is maximized at 50 mi/h', 'The graph has a discontinuity at 50'],
        answer: 1,
        explanation: 'The derivative is the instantaneous rate of change of mileage with speed: positive rate means mileage still improving, negative means worsening — so the peak economy sits where $F’$ crosses 0, near 50 mi/h (the manual’s Exercise 14).',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.8
  {
    sectionId: 'calc-ch2-s8',
    readingTime: 11,
    intro: 'The derivative so far lives at a single point; Section 2.8 promotes it to a function — a new function $f’$ whose input is $x$ and whose output is the slope of $f$ there. This promotion makes differentiation an operation on functions and sets up the entire computational theory of Chapters 3 and 4. The section also draws the precise boundary between differentiability and continuity (continuous is strictly weaker — corners and vertical tangents break derivatives but not graphs), and introduces the second derivative, the derivative of the derivative, which reads concavity the way the first derivative reads direction.',
    objectives: [
      'Compute the derivative function $f’$ from the definition for polynomials and simple rational and root functions',
      'Read the graph of $f’$ from the graph of $f$ (slopes become heights)',
      'Explain the three ways differentiability can fail: corners, discontinuities and vertical tangent lines',
      'Prove and apply the theorem that differentiability implies continuity — and understand why the converse fails',
      'Compute and interpret the second derivative, including concavity and acceleration',
    ],
    concepts: [
      {
        term: 'The derivative as a function',
        kind: 'definition',
        statement: 'The **derivative** of $f$ is the function $f’$ defined by $$f’(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$$ for each $x$ where the limit exists. The domain of $f’$ is the set of differentiability of $f$.',
        detail: 'The variable $x$ now plays both roles: it anchors the point and slides along the curve. The manual’s ground-zero computation: for $f(x) = x^2$, expanding gives $\\lim_{h \\to 0} \\frac{2xh + h^2}{h} = \\lim_{h \\to 0} (2x + h) = 2x$ — the derivative function is $f’(x) = 2x$, confirmed by the slope estimates $f’(0) = 0$, $f’(1) = 2$, $f’(2) = 4$. Similarly $f(x) = x^3$ yields $f’(x) = 3x^2$.',
      },
      {
        term: 'Notation for derivatives',
        kind: 'notation',
        statement: 'The derivative is written $f’(x)$ (Lagrange), $\\frac{dy}{dx}$ or $\\frac{df}{dx}$ (Leibniz), or $D_x f$; the operation of computing it is **differentiation**. A function is differentiable at $a$ if $f’(a)$ exists, and differentiable on an interval if it is differentiable at every point of the interval.',
        detail: 'Leibniz’s $\\frac{dy}{dx}$ encodes the limiting process $\\frac{\\Delta y}{\\Delta x}$ with the $d$’s hinting at infinitesimal changes — notation so good it survives every later generalization (partial derivatives, chain rule, differential equations). The manual computes, for instance, $f’(t) = 5t + 6$ for $f(t) = 2.5t^2 + 6t$ and $A’(r) = 12r^2 + 3$ for $A(r) = 4r^3 + 3r$, each time noting that the domain of $f’$ equals the domain of $f$ for polynomials.',
      },
      {
        term: 'Reading $f’$ from the graph of $f$',
        kind: 'method',
        statement: 'To sketch $f’$: draw tangent lines on the graph of $f$ at many points and plot their slopes as heights. Horizontal tangents of $f$ become **zeros** of $f’$; intervals where $f$ rises give $f’ > 0$; intervals where $f$ falls give $f’ < 0$; linear pieces of $f$ give constant pieces of $f’$; corners of $f$ become jumps in $f’$.',
        detail: 'The manual’s matching exercise is the classic drill: a curve whose slopes run “negative, then zero, then positive, then zero, then negative” is paired with the derivative graph tracing exactly that sign pattern. Its hint list is worth memorizing: “First plot $x$-intercepts on the graph of $f’$ for any horizontal tangents on the graph of $f$. Look for any corners on the graph of $f$ — there will be a discontinuity on the graph of $f’$.”',
      },
      {
        term: 'How differentiability fails',
        kind: 'theorem',
        statement: 'A function fails to be differentiable at $a$ for exactly three geometric reasons: a **corner** (one-sided slopes disagree, as in $|x|$ at 0), a **discontinuity** (the secant slopes cannot settle, as at a jump or asymptote), or a **vertical tangent line** (the slopes blow up to $\\pm\\infty$).',
        detail: 'The prototype corner: for $f(x) = |x|$ at 0, the difference quotient equals $\\frac{|h|}{h}$, which is $-1$ from the left and $+1$ from the right — a genuine two-sided limit failure at a point where the function is perfectly continuous. Vertical tangents: $y = \\sqrt[3]{x}$ at the origin has tangent slopes exploding (the derivative $\\frac{1}{3}x^{-2/3} \\to \\infty$), so the tangent line $x = 0$ exists but the derivative does not.',
      },
      {
        term: 'Differentiability implies continuity',
        kind: 'theorem',
        statement: 'If $f$ is differentiable at $a$, then $f$ is continuous at $a$. The converse is false: $|x|$ is continuous at 0 but not differentiable there.',
        detail: 'The proof is a one-liner once you see the factorization: $f(x) - f(a) = \\frac{f(x) - f(a)}{x - a} \\cdot (x - a)$, and both factors on the right have limits ($f’(a)$ and 0), so the product tends to 0 — hence $\\lim_{x \\to a} f(x) = f(a)$. The contrapositive is a practical shortcut: **discontinuous implies nondifferentiable** — checking continuity first eliminates the hopeless cases before any difference-quotient work.',
      },
      {
        term: 'The second derivative',
        kind: 'definition',
        statement: 'The **second derivative** of $f$ is the derivative of $f’$: $$f’’(x) = \\lim_{h \\to 0} \\frac{f’(x + h) - f’(x)}{h},$$ written $\\frac{d^2y}{dx^2}$. For a position function, the second derivative is the **acceleration**.',
        detail: 'The Mars rock again: $s(t) = 10t - 1.86t^2$ has $v(t) = s’(t) = 10 - 3.72t$ and $a(t) = s’’(t) = -3.72$ m/s² — the constant downward acceleration of Mars gravity, the very number hidden in the coefficient 1.86. Notation stacks: $f’’’$, then $f^{(4)}$, and Leibniz $\\frac{d^2 y}{dx^2}$, $\\frac{d^n y}{dx^n}$.',
      },
      {
        term: 'Concavity',
        kind: 'definition',
        statement: 'A curve is **concave upward** on an interval if it lies above its tangent lines there (equivalently, $f’$ is increasing, i.e. $f’’ > 0$); it is **concave downward** if it lies below its tangents ($f’$ decreasing, $f’’ < 0$). A point where concavity changes is an **inflection point**.',
        detail: 'First derivative answers “rising or falling”; second derivative answers “bending which way.” For $f(x) = x^3$: $f’(x) = 3x^2 \\ge 0$ everywhere (never falls), while $f’’(x) = 6x$ is negative for $x < 0$ and positive for $x > 0$ — concave down then up, with an inflection point at the origin. The full test suite — First and Second Derivative Tests — arrives in Section 4.3.',
      },
      {
        term: 'Higher derivatives and the family of curves',
        kind: 'insight',
        statement: 'Each derivative strips one layer of behavior: $f$ is position, $f’$ direction, $f’’$ curvature of motion, $f’’’$ jerk. Conversely, recovering $f$ from $f’$ — antidifferentiation — is the subject of Section 4.8 and the engine of Chapter 5.',
        detail: 'The manual’s yeast-culture exercise reads the story in one graph: the population curve’s slopes are always positive, reach a maximum at about 6 hours and then decline toward zero — so the culture grows fastest at 6 hours and saturates after. Slope-reading of the first derivative is qualitative differentiation, the skill every graph-interpretation question in Chapters 3–4 presupposes.',
      },
    ],
    examples: [
      {
        title: 'Differentiating from the definition (Exercises 21–24 style)',
        problem: 'Differentiate from the definition: (a) $f(x) = 4 + 8x - 5x^2$; (b) $f(t) = 2.5t^2 + 6t$; and state the domain of each derivative.',
        steps: [
          { label: 'Step 1: Assemble the quotient for (a)', text: '$f’(x) = \\lim_{h \\to 0} \\frac{\\left[4 + 8(x + h) - 5(x + h)^2\\right] - \\left[4 + 8x - 5x^2\\right]}{h}$.' },
          { label: 'Step 2: Expand and cancel', text: 'The numerator: $4 + 8x + 8h - 5(x^2 + 2xh + h^2) - 4 - 8x + 5x^2 = 8h - 10xh - 5h^2 = h(8 - 10x - 5h)$. Dividing by $h$ (legal for $h \\ne 0$): $f’(x) = \\lim_{h \\to 0} (8 - 10x - 5h) = 8 - 10x$.' },
          { label: 'Step 3: Differentiate (b) the same way', text: 'Numerator: $2.5(t^2 + 2th + h^2) + 6t + 6h - 2.5t^2 - 6t = 5th + 2.5h^2 + 6h = h(5t + 2.5h + 6)$, so $f’(t) = \\lim_{h \\to 0} (5t + 2.5h + 6) = 5t + 6$.' },
          { label: 'Step 4: Compare with the pattern', text: 'Both fit the emerging power rule (Section 3.1): the derivative of $ax^2 + bx + c$ is $2ax + b$. Domains: both $f$ and $f’$ are defined on all of $\\mathbb{R}$ — polynomials differentiate to polynomials.' },
        ],
        result: '(a) $f’(x) = 8 - 10x$; (b) $f’(t) = 5t + 6$. The definition’s expand–factor–cancel–evaluate ritual is the same for every polynomial — and the pattern it reveals becomes the Power Rule.',
      },
      {
        title: 'The absolute value: continuous, but not differentiable at 0',
        problem: 'Show that $f(x) = |x|$ is continuous at 0 but fails to be differentiable there, by computing the one-sided difference quotients.',
        steps: [
          { label: 'Step 1: Write the difference quotient at 0', text: '$\\frac{f(0 + h) - f(0)}{h} = \\frac{|h| - 0}{h} = \\frac{|h|}{h}$. The quotient depends only on the sign of $h$.' },
          { label: 'Step 2: Evaluate from the right', text: 'For $h > 0$: $|h| = h$, so the quotient is $\\frac{h}{h} = 1$ — every right secant has slope 1 (the graph is the line $y = x$ there).' },
          { label: 'Step 3: Evaluate from the left', text: 'For $h < 0$: $|h| = -h$, so the quotient is $\\frac{-h}{h} = -1$ — every left secant has slope $-1$ (the graph is the line $y = -x$ there).' },
          { label: 'Step 4: Rule on the two-sided limit', text: 'The one-sided limits of the difference quotient are $1$ and $-1$ — different, so $f’(0)$ does not exist. The graph has a **corner**: no single line is the tangent.' },
          { label: 'Step 5: Confirm continuity', text: 'Meanwhile $\\lim_{x \\to 0} |x| = 0 = |0|$ (squeezed between 0 and... simply, $|x| \\to 0$ from both sides), so $f$ is continuous at 0. Differentiability implies continuity; this example shows continuity does not imply differentiability.' },
        ],
        result: '$|x|$ is continuous at 0 yet $f’(0)$ does not exist — the corner is the visible fingerprint of a derivative killed by disagreeing one-sided slopes. Away from 0, $f’(x) = 1$ for $x > 0$ and $-1$ for $x < 0$: the derivative is the sign function.',
      },
      {
        title: 'First and second derivatives: acceleration and concavity',
        problem: 'For the Mars rock $s(t) = 10t - 1.86t^2$: find $v(t)$ and $a(t)$, and interpret. Then for $f(x) = x^3$: find $f’$ and $f’’$ and determine the concavity on each side of the origin.',
        steps: [
          { label: 'Step 1: First derivative of position', text: 'From the definition (Section 2.7’s computation): $v(t) = s’(t) = 10 - 3.72t$ m/s — velocity decreasing linearly in time.' },
          { label: 'Step 2: Second derivative', text: '$a(t) = v’(t) = s’’(t) = -3.72$ m/s², constant — the derivative of a linear function is its slope. The negative value is Mars gravity pulling the rock down throughout the flight.' },
          { label: 'Step 3: First derivative of the cubic', text: '$f’(x) = \\lim_{h \\to 0} \\frac{(x + h)^3 - x^3}{h} = \\lim_{h \\to 0} \\frac{3x^2h + 3xh^2 + h^3}{h} = \\lim_{h \\to 0} (3x^2 + 3xh + h^2) = 3x^2$.' },
          { label: 'Step 4: Second derivative of the cubic', text: '$f’’(x) = \\lim_{h \\to 0} \\frac{3(x + h)^2 - 3x^2}{h} = \\lim_{h \\to 0} (6x + 3h) = 6x$ — negative for $x < 0$, positive for $x > 0$, zero at 0.' },
          { label: 'Step 5: Read concavity', text: '$f’’ < 0$ on $(-\\infty, 0)$: the cubic is concave down (falls like a ceiling, its tangents above it). $f’’ > 0$ on $(0, \\infty)$: concave up (bowl). The origin, where concavity flips, is an inflection point — and there the tangent $y = 0$ slices through the curve.' },
        ],
        result: 'Rock: $v(t) = 10 - 3.72t$, $a(t) = -3.72$ m/s² (Mars gravity itself). Cubic: $f’(x) = 3x^2 \\ge 0$, $f’’(x) = 6x$ — down then up with an inflection at 0. The first derivative reads direction, the second reads bend.',
      },
    ],
    keyTakeaways: [
      'The derivative function $f’(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$ assigns to each $x$ the tangent slope there; its domain can be smaller than that of $f$.',
      'To sketch $f’$ from $f$: horizontal tangents become zeros of $f’$; rising intervals give $f’ > 0$; falling give $f’ < 0$; corners become jumps in $f’$.',
      'Differentiability fails at corners, at discontinuities, and at vertical tangent lines — the three geometric obstructions.',
      'Differentiability implies continuity (via $f(x) - f(a) = \\frac{f(x) - f(a)}{x - a}(x - a)$), but continuity does not imply differentiability: $|x|$ at 0 is the canonical counterexample.',
      'The second derivative $f’’ = (f’)’$ measures the rate of change of the slope: for motion, acceleration; for graphs, concavity.',
      'Concave up means $f’$ increasing ($f’’ > 0$, tangents below the curve); concave down means $f’$ decreasing ($f’’ < 0$); a concavity flip is an inflection point.',
      'Derivatives stack: $f^{(n)}$, with Leibniz notation $\\frac{d^n y}{dx^n}$ — and running the machinery backward (recovering $f$ from $f’$) is the business of antiderivatives in Section 4.8.',
    ],
    quiz: [
      {
        q: 'Differentiate $f(x) = 4 + 8x - 5x^2$ from the definition. The result is:',
        options: [`$4 + 8x - 5x^2$`, `$8 - 10x$`, `$8x - 10x^2$`, `$-10$`],
        answer: 1,
        explanation: 'The difference quotient simplifies to $8 - 10x - 5h$, whose limit is $8 - 10x$ — the manual’s Exercise 24; note the domain of $f’$ equals that of $f$: all reals.',
      },
      {
        q: 'The function $f(x) = |x|$ at $x = 0$ is:',
        options: ['Discontinuous and nondifferentiable', 'Continuous but not differentiable, because the one-sided slopes are $-1$ and $+1$', 'Differentiable but not continuous', 'Both continuous and differentiable'],
        answer: 1,
        explanation: 'The difference quotient $\\frac{|h|}{h}$ is $-1$ from the left and $+1$ from the right, so the two-sided limit fails — a corner. Continuity survives, since $\\lim_{x \\to 0}|x| = 0 = |0|$.',
      },
      {
        q: 'If a graph has a corner at $x = c$, the graph of $f’$ has:',
        options: ['A zero at $c$', 'A vertical asymptote at $c$', 'A jump discontinuity at $c$', 'The same corner'],
        answer: 2,
        explanation: 'Slopes jump abruptly from the left-hand value to the right-hand value at a corner — the manual’s own hint: “Look for any corners on the graph of $f$ — there will be a discontinuity on the graph of $f’$.”',
      },
      {
        q: 'For a position function $s(t)$, the second derivative $s’’(t)$ measures:',
        options: ['Total distance traveled', 'Velocity', 'Acceleration — the instantaneous rate of change of velocity', 'The average speed'],
        answer: 2,
        explanation: 'Differentiating once gives velocity; differentiating velocity gives its rate of change, the acceleration. For the Mars rock $s(t) = 10t - 1.86t^2$, $s’’(t) = -3.72$ m/s² — gravity.',
      },
      {
        q: 'On an interval where $f’’(x) < 0$, the graph of $f$ is:',
        options: ['Increasing', 'Concave downward — lying below its tangent lines', 'Concave upward', 'Constant'],
        answer: 1,
        explanation: 'Negative second derivative means $f’$ is decreasing — the slope relaxes, and the curve bends downward, lying below every tangent line. ($f$ itself may still be rising: concave down does not mean falling.)',
      },
      // PYQ-pattern — differentiability implies continuity (rephrased, values changed)
      {
        q: 'If $f$ is differentiable at $x = a$, then:',
        options: [`$f$ is continuous at $x = a$`, `$f$ must have a corner at $x = a$`, `$f^{\\prime}(a) = 0$`, `$f$ is discontinuous at $x = a$`],
        answer: 0,
        explanation: 'Step 1: Restate differentiability as existence of $f^{\\prime}(a) = \\lim_{h \\to 0}\\frac{f(a+h) - f(a)}{h}$. Step 2: Recall the key theorem that differentiability implies continuity, proved by writing $f(a+h) - f(a) = h \\cdot \\frac{f(a+h)-f(a)}{h}$ and letting $h \\to 0$. Step 3: The product tends to $0 \\times f^{\\prime}(a) = 0$, so $\\lim_{h \\to 0}f(a+h) = f(a)$. Step 4: Conclude continuity holds at $a$. Step 5: The distractors fail since corners and discontinuities violate differentiability, and the derivative need not vanish. Step 6: Hence differentiability at $a$ forces continuity at $a$, while the converse is false.'
      },
      // PYQ-pattern — vertical tangent and non-differentiability (rephrased, values changed)
      {
        q: 'For $f(x) = x^{\\frac{1}{3}}$, what happens at $x = 0$?',
        options: [`$f$ is differentiable at $0$ with derivative $0$`, `$f$ is discontinuous at $0$`, `$f$ is differentiable at $0$ with derivative $1$`, 'Continuous at $0$ but not differentiable there, with a vertical tangent'],
        answer: 3,
        explanation: 'Step 1: Restate the question as continuity plus existence of $\\lim_{h \\to 0}\\frac{h^{\\frac{1}{3}} - 0}{h}$. Step 2: Recall the key criterion that a vertical tangent $\\frac{dy}{dx} \\to \\pm\\infty$ breaks differentiability but not continuity. Step 3: Continuity holds since $\\lim_{x \\to 0}x^{\\frac{1}{3}} = 0 = f(0)$. Step 4: Compute the quotient as $h^{\\frac{1}{3} - 1} = h^{-\\frac{2}{3}} = \\frac{1}{h^{\\frac{2}{3}}}$, which grows without bound as $h \\to 0$. Step 5: The distractors fail since the function is unbroken at $0$ and no finite derivative exists there. Step 6: Therefore $f$ is continuous yet non-differentiable at $0$ with a vertical tangent.'
      },
    ],
  },
]
