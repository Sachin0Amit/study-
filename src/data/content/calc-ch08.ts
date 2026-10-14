import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 8: Further Applications of Integration (Sections 8.1 – 8.5)
// Master study content. Worked-example numbers follow the book: the classic
// in-text Examples plus exercises solved in the Student Solutions Manual.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh8Content: SectionContent[] = [
  // ------------------------------------------------------------------ 8.1
  {
    sectionId: 'calc-ch8-s1',
    readingTime: 9,
    intro: 'A line segment is easy to measure; a curve is not. This section defines what the length of a smooth curve means, approximating the curve by tiny line segments and passing to a limit — a process that produces one of the most useful, and most often intractable, integrals in the whole course.',
    objectives: [
      'Explain how polygonal approximation plus the Mean Value Theorem produce the arc length formula',
      'Set up and evaluate arc length integrals for curves given as $y = f(x)$ or as $x = g(y)$',
      'Recognize the algebraic miracles (perfect squares) that make an arc length integral elementary',
      'Know what to do when the integrand has no elementary antiderivative',
    ],
    concepts: [
      {
        term: 'Smooth curve',
        kind: 'definition',
        statement: 'A curve $y = f(x)$ with $a \\le x \\le b$ is called **smooth** if $f\'$ is continuous, that is, if $f$ has a continuously turning tangent line.',
        detail: 'Smoothness matters because the arc length formula is built from slopes $f\'(x^*)$, and we need the Mean Value Theorem to guarantee such slopes exist on every subinterval.',
      },
      {
        term: 'Polygonal approximation of length',
        kind: 'insight',
        statement: 'Define the length $L$ of a curve as the limit of the total length of an inscribed broken line: subdivide $[a, b]$, join successive points by segments, and let the mesh go to zero.',
        detail: 'By the distance formula the $i$-th segment has length $\\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$. Factoring out $\\Delta x$ and applying the Mean Value Theorem to write $\\Delta y = f\'(x_i^*)\\,\\Delta x$, each segment contributes $\\sqrt{1 + [f\'(x_i^*)]^2}\\,\\Delta x$ — which is exactly a Riemann sum.',
      },
      {
        term: 'The arc length formula',
        kind: 'theorem',
        statement: 'If $f\'$ is continuous on $[a, b]$, the length of the curve $y = f(x)$ from $(a, f(a))$ to $(b, f(b))$ is $$L = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}\\,dx = \\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx.$$',
        detail: 'The integrand is never less than $1$, so a curve is always at least as long as the straight distance between its endpoints — a quick sanity check on any answer.',
      },
      {
        term: 'The $x = g(y)$ form',
        kind: 'theorem',
        statement: 'If a curve is more naturally described as $x = g(y)$ with $g\'$ continuous for $c \\le y \\le d$, then $$L = \\int_c^d \\sqrt{1 + \\left(\\frac{dx}{dy}\\right)^2}\\,dy.$$',
        detail: 'Same formula with the roles of the variables swapped: integrate along the $y$-axis instead of the $x$-axis. Curves that double back on themselves in $x$ but pass the vertical-line test in $y$ must be treated this way.',
      },
      {
        term: 'The arc length element $ds$',
        kind: 'notation',
        statement: 'Write $ds = \\sqrt{1 + (dy/dx)^2}\\,dx$, or symmetrically $ds = \\sqrt{(dx)^2 + (dy)^2}$, so that $L = \\int ds$.',
        detail: 'The $ds$ notation records the Pythagorean theorem at the infinitesimal level: a tiny piece of curve is the hypotenuse of a right triangle with legs $dx$ and $dy$. Chapter 10 reuses $ds$ for parametric and polar curves, and Chapter 13 for space curves, where $ds = |\\mathbf{r}\'(t)|\\,dt$.',
      },
      {
        term: 'When the integral cannot be done',
        kind: 'insight',
        statement: 'Most arc length integrals have **no elementary antiderivative**. For $y = \\sin x$ on $[0, \\pi]$ the integrand $\\sqrt{1 + \\cos^2 x}$ defines an elliptic integral, and the length must be approximated by Simpson’s rule (Section 7.7).',
        detail: 'Even friendly-looking curves resist: $y = x^2$ on $[0, 1]$ gives $\\int_0^1 \\sqrt{1 + 4x^2}\\,dx$, which needs the trigonometric substitution $x = \\frac{1}{2}\\tan\\theta$ from Section 7.3 and evaluates to $\\frac{\\sqrt{5}}{2} + \\frac{1}{4}\\ln(2 + \\sqrt{5}) \\approx 1.4789$. When a problem says “set up, but do not evaluate,” this is why.',
      },
    ],
    examples: [
      {
        title: 'The semicubical parabola (the book’s Example 1)',
        problem: 'Find the length of the arc of the semicubical parabola $y^2 = x^3$ between the points $(1, 1)$ and $(4, 8)$.',
        steps: [
          { label: 'Step 1: Solve for y', text: 'On this arc $y \\ge 0$, so $y = x^{3/2}$ with $1 \\le x \\le 4$.' },
          { label: 'Step 2: Differentiate', text: '$\\frac{dy}{dx} = \\frac{3}{2}x^{1/2}$, so $1 + \\left(\\frac{dy}{dx}\\right)^2 = 1 + \\frac{9}{4}x$.' },
          { label: 'Step 3: Set up the integral', text: '$L = \\int_1^4 \\sqrt{1 + \\frac{9x}{4}}\\,dx$. Writing the integrand as $\\frac{1}{2}\\sqrt{9x + 4}$ makes the substitution obvious.' },
          { label: 'Step 4: Integrate', text: 'With $u = 9x + 4$, $du = 9\\,dx$: $L = \\frac{1}{18}\\int_{13}^{40} \\sqrt{u}\\,du = \\frac{1}{27}\\left[u^{3/2}\\right]_{13}^{40}$.' },
          { label: 'Step 5: Evaluate', text: '$L = \\frac{1}{27}\\left(40^{3/2} - 13^{3/2}\\right) = \\frac{1}{27}\\left(80\\sqrt{10} - 13\\sqrt{13}\\right) \\approx 7.63$.' },
        ],
        result: 'The arc has length $L = \\frac{1}{27}\\left(40^{3/2} - 13^{3/2}\\right) \\approx 7.63$, slightly more than the straight-line distance $\\sqrt{(4-1)^2 + (8-1)^2} = \\sqrt{58} \\approx 7.62$ between the same endpoints — the curve is indeed longer than its chord.',
      },
      {
        title: 'A quarter circle checks out (Exercise 8.1.2)',
        problem: 'Use the arc length formula to find the length of the curve $y = \\sqrt{4 - x^2}$ for $0 \\le x \\le 2$, and confirm the answer with geometry.',
        steps: [
          { label: 'Step 1: Differentiate', text: '$\\frac{dy}{dx} = -\\frac{x}{\\sqrt{4 - x^2}}$, so $1 + \\left(\\frac{dy}{dx}\\right)^2 = 1 + \\frac{x^2}{4 - x^2} = \\frac{4}{4 - x^2}$.' },
          { label: 'Step 2: Integrate', text: '$L = \\int_0^2 \\frac{2}{\\sqrt{4 - x^2}}\\,dx = 2\\sin^{-1}\\!\\left(\\frac{x}{2}\\right)\\Big|_0^2 = 2\\left(\\frac{\\pi}{2} - 0\\right) = \\pi$.' },
          { label: 'Step 3: Check with geometry', text: 'The curve is a quarter of the circle $x^2 + y^2 = 4$ of radius $2$, so its length is one quarter of the circumference: $\\frac{1}{4}(2\\pi \\cdot 2) = \\pi$.' },
        ],
        result: 'Both methods give $L = \\pi$ — the formula reproduces the classical circumference, its first real test.',
      },
      {
        title: 'A perfect square appears (Exercise 8.1.11)',
        problem: 'Find the length of the curve $y = \\frac{2}{3}(1 + x^2)^{3/2}$ for $0 \\le x \\le 1$.',
        steps: [
          { label: 'Step 1: Differentiate', text: '$\\frac{dy}{dx} = 2x(1 + x^2)^{1/2}$, so $1 + \\left(\\frac{dy}{dx}\\right)^2 = 1 + 4x^2(1 + x^2)$.' },
          { label: 'Step 2: Expand and factor', text: '$1 + 4x^2 + 4x^4 = (2x^2 + 1)^2$ — a perfect square, which is the whole point of this curve.' },
          { label: 'Step 3: Take the square root', text: 'Since $2x^2 + 1 > 0$, $\\sqrt{(2x^2 + 1)^2} = 2x^2 + 1$, a polynomial.' },
          { label: 'Step 4: Integrate', text: '$L = \\int_0^1 (2x^2 + 1)\\,dx = \\left[\\frac{2}{3}x^3 + x\\right]_0^1 = \\frac{2}{3} + 1 = \\frac{5}{3}$.' },
        ],
        result: '$L = \\frac{5}{3}$ — clean, because the integrand was secretly a perfect square. When an arc length problem is meant to be done by hand, look for this miracle.',
      },
    ],
    keyTakeaways: [
      'The arc length of a smooth curve is defined as the limit of inscribed polygonal paths, and the Mean Value Theorem converts that limit into an integral.',
      'For $y = f(x)$ use $L = \\int_a^b \\sqrt{1 + (dy/dx)^2}\\,dx$; for $x = g(y)$ use $L = \\int_c^d \\sqrt{1 + (dx/dy)^2}\\,dy$ — choose the variable in which the curve is single-valued.',
      'The element $ds = \\sqrt{(dx)^2 + (dy)^2}$ is the infinitesimal Pythagorean theorem; it returns in parametric, polar and three-dimensional form.',
      'A curve is never shorter than the chord joining its endpoints: $\\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx \\ge b - a$.',
      'Most arc length integrals are non-elementary (for $y = \\sin x$ one meets elliptic integrals); Simpson’s rule from Section 7.7 is the standard fallback.',
    ],
    quiz: [
      {
        q: 'Which integral gives the length of the curve $y = f(x)$, $a \\le x \\le b$, when $f\'$ is continuous?',
        options: [
          `$L = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}\\,dx$`,
          `$L = \\int_a^b \\sqrt{1 + \\left(\\frac{dx}{dy}\\right)^2}\\,dx$`,
          `$L = \\int_a^b \\left(1 + \\left(\\frac{dy}{dx}\\right)^2\\right) dx$`,
          `$L = \\int_a^b \\sqrt{\\left(\\frac{dy}{dx}\\right)^2 - 1}\\,dx$`,
        ],
        answer: 0,
        explanation: 'The polygonal-approximation argument produces $\\sqrt{1 + \\text{slope}^2}$ inside the integral; dropping the square root or swapping $dx/dy$ for $dy/dx$ breaks the derivation.',
      },
      {
        q: 'The arc of the semicubical parabola $y^2 = x^3$ between $(1, 1)$ and $(4, 8)$ has length approximately:',
        options: ['7.63', '9.55', '12.06', '3.00'],
        answer: 0,
        explanation: 'With $y = x^{3/2}$, $L = \\frac{1}{27}\\left(40^{3/2} - 13^{3/2}\\right) \\approx 7.63$ — just above the chord length, as it must be.',
      },
      {
        q: 'A curve is given in the form $x = g(y)$ for $c \\le y \\le d$. Which integral computes its length?',
        options: [
          `$L = \\int_c^d \\sqrt{1 + \\left(\\frac{dx}{dy}\\right)^2}\\,dy$`,
          `$L = \\int_c^d \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}\\,dy$`,
          `$L = \\int_c^d \\sqrt{\\left(\\frac{dx}{dy}\\right)^2 - 1}\\,dy$`,
          `$L = \\int_c^d \\sqrt{1 + \\left(\\frac{dx}{dy}\\right)^2}\\,dx$`,
        ],
        answer: 0,
        explanation: 'Integrate along the variable that sweeps the curve once — here $y$ — and use the derivative of the dependent variable with respect to it.',
      },
      {
        q: 'To find the length of one arch of $y = \\sin x$ you must compute $\\int_0^{\\pi} \\sqrt{1 + \\cos^2 x}\\,dx$. What is true?',
        options: [
          'The integrand has no elementary antiderivative; the length is approximated numerically (for example with Simpson’s rule)',
          'The substitution $u = \\cos x$ evaluates it in closed form',
          'The integral equals exactly $2\\pi$',
          'The integral diverges',
        ],
        answer: 0,
        explanation: 'This is an elliptic integral — a genuinely new transcendental function. Numeric approximation, not antidifferentiation, is the correct tool, exactly as in Section 7.7.',
      },
    ],
  },

  // ------------------------------------------------------------------ 8.2
  {
    sectionId: 'calc-ch8-s2',
    readingTime: 9,
    intro: 'Rotate a curve about an axis and it sweeps out a surface — a sphere from a semicircle, a horn or a bell from other curves. The area of such a surface of revolution is found by slicing it into thin ribbon-like bands; each band is a frustum whose area couples the circumference of revolution with the arc length element $ds$ of Section 8.1.',
    objectives: [
      'Derive the surface area formulas by approximating the surface with frustums of cones',
      'Compute areas of surfaces of revolution about the $x$-axis and the $y$-axis, in both $y = f(x)$ and $x = g(y)$ form',
      'Use the sphere $S = 4\\pi r^2$ and the cylinder $S = 2\\pi r L$ as checks on the formulas',
      'Recognize the substitution patterns that make surface integrals elementary',
    ],
    concepts: [
      {
        term: 'Surface of revolution',
        kind: 'definition',
        statement: 'If a plane curve is rotated about a line in its plane (the **axis of revolution**) that does not meet the curve except possibly at endpoints, it sweeps out a **surface of revolution**.',
        detail: 'Rotating a semicircle about its diameter gives a sphere; rotating a sloping line segment gives a frustum of a cone; rotating a circle about a line outside it gives a torus.',
      },
      {
        term: 'The band (frustum) approximation',
        kind: 'insight',
        statement: 'Slice the surface by planes perpendicular to the axis. A typical band between two nearby planes is approximately a frustum of a cone with average radius $y^*$ and slant height $\\Delta s$, so its lateral area is $2\\pi y^* \\Delta s$.',
        detail: 'The classical formula $2\\pi r_1 l_1 = 2\\pi r_2 l_2$ for a frustum (radii $r_1, r_2$, slant $l$) is equivalent to $2\\pi \\bar{r} l$ with $\\bar{r}$ the average radius. The slant height of a thin band is exactly the piece of arc length from Section 8.1 — which is why $ds$ reappears.',
      },
      {
        term: 'Surface area about the x-axis',
        kind: 'theorem',
        statement: 'If $f(x) \\ge 0$ and $f\'$ is continuous on $[a, b]$, the area of the surface obtained by rotating $y = f(x)$ about the $x$-axis is $$S = \\int_a^b 2\\pi y\\,ds = \\int_a^b 2\\pi f(x)\\sqrt{1 + [f\'(x)]^2}\\,dx.$$',
        detail: 'Radius of revolution times arc length element: the factor $2\\pi y$ is the circumference of the circle traced by the point $(x, y)$. If the curve dips below the axis, replace $y$ by $|y|$ so areas add rather than cancel.',
      },
      {
        term: 'Surface area about the y-axis',
        kind: 'theorem',
        statement: 'The area of the surface obtained by rotating the curve about the $y$-axis is $$S = \\int 2\\pi x\\,ds,$$ where now the radius of revolution is the $x$-coordinate.',
        detail: 'In $x = g(y)$ form for $c \\le y \\le d$: $S = \\int_c^d 2\\pi g(y)\\sqrt{1 + [g\'(y)]^2}\\,dy$. The choice of axis decides whether $2\\pi y$ or $2\\pi x$ multiplies $ds$ — the single most common mistake in these problems.',
      },
      {
        term: 'Sanity checks: cylinder, cone, sphere',
        kind: 'method',
        statement: 'Every formula should reproduce classical geometry: rotating the segment $y = r$, $0 \\le x \\le L$ about the $x$-axis gives $S = 2\\pi r L$ (cylinder); rotating the semicircle $y = \\sqrt{r^2 - x^2}$ gives $S = 4\\pi r^2$ (sphere).',
        detail: 'Chapter 15 generalizes all of this: the area of a graph $z = f(x, y)$ is the double integral $\\iint_D \\sqrt{1 + f_x^2 + f_y^2}\\,dA$ of Section 15.6, and the $ds$ below becomes a surface element $dS$.',
      },
      {
        term: 'Gabriel’s horn perspective',
        kind: 'insight',
        statement: 'Rotating $y = 1/x$ for $1 \\le x \\le \\infty$ about the $x$-axis gives a horn with finite volume $\\pi$ but infinite surface area — one of the striking improper integrals of Section 7.8 meeting geometry.',
        detail: 'Painting the outside of the horn is impossible, yet filling it with paint is not. The exercise set of this section makes you verify both claims with $p$-integrals.',
      },
    ],
    examples: [
      {
        title: 'A parabola about the y-axis (the book’s Example 1)',
        problem: 'The arc of the parabola $y = x^2$ from $(0, 0)$ to $(1, 1)$ is rotated about the $y$-axis. Find the area of the resulting surface.',
        steps: [
          { label: 'Step 1: Pick the right radius', text: 'Rotation about the $y$-axis means the radius of revolution is $x$, so $S = \\int_0^1 2\\pi x\\,ds$.' },
          { label: 'Step 2: Write ds', text: 'With $y\' = 2x$, $ds = \\sqrt{1 + 4x^2}\\,dx$, so $S = 2\\pi\\int_0^1 x\\sqrt{1 + 4x^2}\\,dx$.' },
          { label: 'Step 3: Substitute', text: 'Let $u = 1 + 4x^2$, so $du = 8x\\,dx$ and the limits become $u = 1$ to $u = 5$.' },
          { label: 'Step 4: Integrate', text: '$S = 2\\pi \\cdot \\frac{1}{8}\\int_1^5 \\sqrt{u}\\,du = \\frac{\\pi}{4} \\cdot \\frac{2}{3}\\left[u^{3/2}\\right]_1^5 = \\frac{\\pi}{6}\\left(5\\sqrt{5} - 1\\right)$.' },
          { label: 'Step 5: Numerical value', text: '$S \\approx \\frac{\\pi}{6}(11.180 - 1) \\approx 5.33$.' },
        ],
        result: '$S = \\frac{\\pi}{6}\\left(5\\sqrt{5} - 1\\right) \\approx 5.33$ — a small curved lampshade shape.',
      },
      {
        title: 'The sphere check (the book’s Example 2)',
        problem: 'Show that rotating the semicircle $y = \\sqrt{r^2 - x^2}$, $-r \\le x \\le r$, about the $x$-axis produces area $4\\pi r^2$.',
        steps: [
          { label: 'Step 1: Differentiate', text: '$y\' = -\\frac{x}{\\sqrt{r^2 - x^2}}$, so $1 + (y\')^2 = 1 + \\frac{x^2}{r^2 - x^2} = \\frac{r^2}{r^2 - x^2}$.' },
          { label: 'Step 2: The square root cancels', text: '$\\sqrt{1 + (y\')^2} = \\frac{r}{\\sqrt{r^2 - x^2}}$, and multiplying by the radius $y = \\sqrt{r^2 - x^2}$ of revolution leaves a constant: $y\\,ds = r\\,dx$.' },
          { label: 'Step 3: Integrate', text: '$S = \\int_{-r}^{r} 2\\pi r\\,dx = 2\\pi r \\cdot 2r = 4\\pi r^2$.' },
        ],
        result: 'The formula reproduces the classical surface area of the sphere — the indispensable check that the frustum derivation is right.',
      },
      {
        title: 'A cubic about the x-axis (Exercise 8.2.9)',
        problem: 'Find the area of the surface obtained by rotating $y = x^3$ for $0 \\le x \\le 2$ about the $x$-axis.',
        steps: [
          { label: 'Step 1: Set up', text: 'About the $x$-axis the radius is $y$: $S = 2\\pi\\int_0^2 x^3\\sqrt{1 + 9x^4}\\,dx$.' },
          { label: 'Step 2: Substitute', text: 'Let $u = 1 + 9x^4$, so $du = 36x^3\\,dx$; the limits run from $u = 1$ to $u = 145$.' },
          { label: 'Step 3: Integrate', text: '$S = \\frac{2\\pi}{36}\\int_1^{145} u^{1/2}\\,du = \\frac{\\pi}{27}\\left[u^{3/2}\\right]_1^{145}$.' },
          { label: 'Step 4: Evaluate', text: '$S = \\frac{\\pi}{27}\\left(145\\sqrt{145} - 1\\right) \\approx 203$.' },
        ],
        result: '$S = \\frac{\\pi}{27}\\left(145\\sqrt{145} - 1\\right) \\approx 203$. The pattern $f\'$ appearing inside the root as $1 + [f\'(x)]^2$ with $u = 1 + [f\'(x)]^2$-shaped substitutions recurs throughout the exercise set.',
      },
    ],
    keyTakeaways: [
      'A surface of revolution is approximated by frustums of cones, and each frustum contributes (circumference) $\\times$ (slant height) $\\approx 2\\pi y^* \\Delta s$.',
      'About the $x$-axis: $S = \\int 2\\pi y\\,ds$; about the $y$-axis: $S = \\int 2\\pi x\\,ds$ — the radius of revolution decides the factor.',
      'The arc length element $ds$ carries over unchanged from Section 8.1, in either $dy/dx$ or $dx/dy$ form.',
      'The formulas must reproduce $S = 4\\pi r^2$ for a sphere and $S = 2\\pi r L$ for a cylinder; use these as built-in checks.',
      'Most surface area integrals, like arc length integrals, have no elementary antiderivative and are handled numerically.',
    ],
    quiz: [
      {
        q: 'Rotating $y = f(x)$, $a \\le x \\le b$ (with $f(x) \\ge 0$) about the $x$-axis gives surface area:',
        options: [
          '$S = \\int_a^b 2\\pi f(x)\\sqrt{1 + [f\'(x)]^2}\\,dx$',
          '$S = \\int_a^b 2\\pi x\\sqrt{1 + [f\'(x)]^2}\\,dx$',
          `$S = \\int_a^b \\pi [f(x)]^2\\,dx$`,
          `$S = \\int_a^b 2\\pi f(x)\\,dx$`,
        ],
        answer: 0,
        explanation: 'Radius of revolution $y$ times the arc element $ds = \\sqrt{1 + [f\'(x)]^2}\\,dx$. Option 3 is the disk volume of Section 6.2, and option 4 forgets the $ds$ stretch factor.',
      },
      {
        q: 'The same curve is instead rotated about the $y$-axis. The surface area is:',
        options: [
          `$S = \\int 2\\pi x\\,ds$`,
          `$S = \\int 2\\pi y\\,ds$`,
          `$S = \\int \\pi x^2\\,ds$`,
          `$S = \\int 2\\pi (x + y)\\,ds$`,
        ],
        answer: 0,
        explanation: 'Only the radius of revolution changes: about the $y$-axis each point of the curve traces a circle of radius equal to its $x$-coordinate.',
      },
      {
        q: 'Rotating the semicircle $y = \\sqrt{r^2 - x^2}$ about the $x$-axis yields:',
        options: [`$4\\pi r^2$`, `$2\\pi r^2$`, `$\\frac{4}{3}\\pi r^3$`, `$\\pi r^2$`],
        answer: 0,
        explanation: 'The integrand collapses to the constant $2\\pi r$ because $y\\sqrt{1 + (y\')^2} = r$; integrating over length $2r$ gives $4\\pi r^2$ — the classical sphere area.',
      },
      {
        q: 'Rotating the arc of $y = x^2$ from $(0,0)$ to $(1,1)$ about the $y$-axis gives area:',
        options: [
          `$\\frac{\\pi}{6}\\left(5\\sqrt{5} - 1\\right) \\approx 5.33$`,
          `$\\frac{\\pi}{6}\\left(5\\sqrt{5} + 1\\right) \\approx 6.39$`,
          `$\\frac{\\pi}{2}\\left(5\\sqrt{5} - 1\\right) \\approx 16.0$`,
          `$2\\pi \\approx 6.28$`,
        ],
        answer: 0,
        explanation: 'With radius $x$: $S = 2\\pi\\int_0^1 x\\sqrt{1 + 4x^2}\\,dx = \\frac{\\pi}{6}(5\\sqrt{5} - 1) \\approx 5.33$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 8.3
  {
    sectionId: 'calc-ch8-s3',
    readingTime: 11,
    intro: 'Two classical problems of engineering close out the single integral: hydrostatic force — the total push of water against a dam face or a gate — and moments and centroids, the balance points of flat plates. Both are Riemann sums in disguise: pressure varies with depth, and mass is spread continuously over a region, so summing means integrating.',
    objectives: [
      'Compute hydrostatic pressure and force, including the total force on a vertical dam or gate',
      'Set up and evaluate moments and centers of mass for systems of point masses',
      'Compute the centroid of a flat plate bounded by curves, with the area integrals',
      'Exploit the symmetry principle and (optionally) the Theorem of Pappus to shortcut centroid work',
    ],
    concepts: [
      {
        term: 'Hydrostatic pressure',
        kind: 'law',
        statement: 'At depth $d$ in a fluid of mass density $\\rho$, the (gauge) pressure is $$P = \\rho g d$$ — the weight of the column of fluid above a unit area. Pressure is the same in all directions at a given depth.',
        detail: 'For water in SI units $\\rho = 1000\\ \\text{kg/m}^3$ and $g = 9.8\\ \\text{m/s}^2$, so $\\rho g \\approx 9800\\ \\text{N/m}^3$. In US units one quotes the weight density $w = 62.5\\ \\text{lb/ft}^3$ directly and writes $P = w d$.',
      },
      {
        term: 'Force on a flat horizontal plate',
        kind: 'method',
        statement: 'If the plate is horizontal at depth $d$ with area $A$, the pressure is constant and $$F = P A = \\rho g d\\, A.$$',
        detail: 'This is the easy case: no integration needed, since every point of the plate sits at the same depth. It is the base case that motivates the vertical-plate integral.',
      },
      {
        term: 'Force on a vertical plate',
        kind: 'method',
        statement: 'For a vertical plate, slice it into thin horizontal strips. A strip at depth $h$ with width $w(h)$ and height $\\Delta h$ feels approximately $\\rho g h \\cdot w(h) \\Delta h$, and $$F = \\int_0^{H} \\rho g\\, h\\, w(h)\\,dh.$$',
        detail: 'Depth acts on the strip like the variable in a Riemann sum: pressure is essentially constant across one thin strip but grows linearly with depth across the plate. Getting $w(h)$ from similar triangles (trapezoids, triangles, circles) is the geometric heart of each exercise.',
      },
      {
        term: 'Moments of a system of masses',
        kind: 'definition',
        statement: 'For masses $m_i$ at positions $(x_i, y_i)$, the **moment about the $y$-axis** is $M_y = \\sum m_i x_i$ and the **moment about the $x$-axis** is $M_x = \\sum m_i y_i$; each measures the twisting effect about that axis.',
        detail: 'Moments add the “leverage” of mass times distance; a child far from a seesaw fulcrum balances a heavier adult close to it because their moments match.',
      },
      {
        term: 'Center of mass',
        kind: 'definition',
        statement: 'The balance point of the system is $$\\bar{x} = \\frac{M_y}{m}, \\qquad \\bar{y} = \\frac{M_x}{m},$$ where $m = \\sum m_i$ is the total mass: the point where all the mass could be concentrated without changing the moments.',
        detail: 'Exercise 8.3.23: masses $5$, $8$, $7$ at $(3, 1)$, $(0, 4)$, $(-5, -2)$ give $m = 20$, $M_x = 23$, $M_y = -20$ and center of mass $(-1, \\tfrac{23}{20})$.',
      },
      {
        term: 'Centroid of a plate',
        kind: 'theorem',
        statement: 'For a uniform plate under $y = f(x) \\ge 0$ above $[a, b]$, with area $A = \\int_a^b f(x)\\,dx$, $$\\bar{x} = \\frac{1}{A}\\int_a^b x f(x)\\,dx, \\qquad \\bar{y} = \\frac{1}{A}\\int_a^b \\frac{1}{2}[f(x)]^2\\,dx.$$',
        detail: 'The factor $\\frac{1}{2}[f(x)]^2$ for $\\bar{y}$ is the moment of a thin vertical strip: its own centroid sits halfway up, at height $\\frac{1}{2}f(x)$. For a region between $f$ and $g$ (with $f \\ge g$), replace $f$ by $(f - g)$ in $\\bar{x}$ and by $\\frac{1}{2}(f^2 - g^2)$ in $\\bar{y}$.',
      },
      {
        term: 'The symmetry principle',
        kind: 'insight',
        statement: 'If a plate is symmetric about a line, its **centroid** lies on that line; if it has two lines of symmetry, the centroid is their intersection.',
        detail: 'This single principle kills half the algebra in centroid problems: for the region bounded by $y = x^2$ and $y = x + 2$ the width at $1 - x$ equals the width at $x$, so $\\bar{x} = \\frac{1}{2}$ without any integration — the book’s Example does exactly this.',
      },
      {
        term: 'Theorem of Pappus',
        kind: 'insight',
        statement: 'A plane region rotated about an external axis in its plane sweeps out a solid of volume $$V = 2\\pi d \\cdot A,$$ where $A$ is the area and $d$ is the distance traveled by the centroid.',
        detail: 'Pappus turns volume problems into centroid problems and vice versa; rotating a circle of radius $r$ about an axis $R > r$ away gives the torus volume $2\\pi R \\cdot \\pi r^2$ instantly.',
      },
    ],
    examples: [
      {
        title: 'Balance the masses (Exercise 8.3.23)',
        problem: 'Masses of $5$, $8$ and $7$ are located at $(3, 1)$, $(0, 4)$ and $(-5, -2)$. Find the total mass, both moments, and the center of mass.',
        steps: [
          { label: 'Step 1: Total mass', text: '$m = 5 + 8 + 7 = 20$.' },
          { label: 'Step 2: Moment about the x-axis', text: '$M_x = \\sum m_i y_i = 5(1) + 8(4) + 7(-2) = 5 + 32 - 14 = 23$.' },
          { label: 'Step 3: Moment about the y-axis', text: '$M_y = \\sum m_i x_i = 5(3) + 8(0) + 7(-5) = 15 - 35 = -20$.' },
          { label: 'Step 4: Divide', text: '$\\bar{x} = M_y/m = -20/20 = -1$ and $\\bar{y} = M_x/m = 23/20 = 1.15$.' },
        ],
        result: 'The center of mass is $(-1, \\tfrac{23}{20})$; the negative $\\bar{x}$ reflects the heavy mass sitting far to the left.',
      },
      {
        title: 'Hydrostatic force on a trapezoidal dam (the book’s Example)',
        problem: 'A dam has the shape of a trapezoid of height $20\\ \\text{m}$, with width $50\\ \\text{m}$ at the top and $30\\ \\text{m}$ at the bottom. Find the force on the dam if the water level is $4\\ \\text{m}$ from the top.',
        steps: [
          { label: 'Step 1: Choose coordinates', text: 'Put the origin at the water surface and measure depth $h$ downward. The water is $16\\ \\text{m}$ deep, so $0 \\le h \\le 16$.' },
          { label: 'Step 2: Find the width at depth h', text: 'The trapezoid’s width decreases linearly from $46\\ \\text{m}$ at the surface ($4\\ \\text{m}$ below the top) to $30\\ \\text{m}$ at the bottom: similar triangles give $w(h) = 46 - h$.' },
          { label: 'Step 3: Force on a strip', text: 'A strip at depth $h$ with height $\\Delta h$ feels $\\rho g\\,h\\,(46 - h)\\,\\Delta h$.' },
          { label: 'Step 4: Integrate', text: '$F = \\rho g\\int_0^{16} h(46 - h)\\,dh = \\rho g\\left[23h^2 - \\frac{h^3}{3}\\right]_0^{16} = \\rho g\\left(5888 - \\frac{4096}{3}\\right) \\approx 4522.7\\,\\rho g$.' },
          { label: 'Step 5: Insert water constants', text: 'With $\\rho g = 9800\\ \\text{N/m}^3$: $F \\approx 4.43 \\times 10^7\\ \\text{N}$.' },
        ],
        result: 'The water pushes on the dam with about $F \\approx 4.43 \\times 10^7\\ \\text{N}$ — equivalent to the weight of roughly $4500$ metric tons.',
      },
      {
        title: 'Centroid between a square root and a square (Exercise 8.3.29)',
        problem: 'Find the centroid of the region enclosed by $y = \\sqrt{x}$ and $y = x^2$.',
        steps: [
          { label: 'Step 1: Intersections and area', text: 'The curves meet where $\\sqrt{x} = x^2$, that is $x = 0$ and $x = 1$. The area is $A = \\int_0^1 \\left(x^{1/2} - x^2\\right) dx = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$.' },
          { label: 'Step 2: Moment about the y-axis', text: '$\\int_0^1 x\\left(x^{1/2} - x^2\\right) dx = \\frac{2}{5} - \\frac{1}{4} = \\frac{3}{20}$, so $\\bar{x} = 3 \\cdot \\frac{3}{20} = \\frac{9}{20}$.' },
          { label: 'Step 3: Moment about the x-axis', text: '$\\frac{1}{2}\\int_0^1 \\left[(\\sqrt{x})^2 - (x^2)^2\\right] dx = \\frac{1}{2}\\int_0^1 (x - x^4)\\,dx = \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{5}\\right) = \\frac{3}{20}$, so $\\bar{y} = 3 \\cdot \\frac{3}{20} = \\frac{9}{20}$.' },
          { label: 'Step 4: State and sanity-check', text: 'The centroid is $\\left(\\tfrac{9}{20}, \\tfrac{9}{20}\\right)$, sitting inside the region just above the line $y = x$ — plausible since the region is thicker near the top-right along that diagonal.' },
        ],
        result: 'Centroid $\\left(\\tfrac{9}{20}, \\tfrac{9}{20}\\right) = (0.45, 0.45)$: the two coordinates agree because of the region’s near symmetry about the line $y = x$.',
      },
    ],
    keyTakeaways: [
      'Hydrostatic pressure grows linearly with depth: $P = \\rho g d$, and it pushes equally in all directions.',
      'Force on a horizontal plate is $F = \\rho g d A$; on a vertical plate it is the integral $\\int \\rho g\\, h\\, w(h)\\,dh$ with the width from similar triangles.',
      'Moments sum mass times distance: $M_y = \\sum m_i x_i$ and $M_x = \\sum m_i y_i$; the center of mass is $\\bar{x} = M_y/m$, $\\bar{y} = M_x/m$.',
      'For a plate under $y = f(x)$: $\\bar{x} = \\frac{1}{A}\\int x f(x)\\,dx$ and $\\bar{y} = \\frac{1}{A}\\int \\frac{1}{2}[f(x)]^2\\,dx$ — the $\\frac{1}{2}$ because a strip’s own centroid is halfway up.',
      'Symmetry places a centroid on every line of symmetry — use it before integrating.',
      'Pappus: $V = 2\\pi d A$ converts between volumes of revolution and centroids.',
    ],
    quiz: [
      {
        q: 'At depth $d$ in a fluid of density $\\rho$, the hydrostatic pressure is:',
        options: [`$P = \\rho g d$`, `$P = \\rho g / d$`, `$P = \\frac{1}{2}\\rho g d^2$`, `$P = \\rho g A$`],
        answer: 0,
        explanation: 'Pressure is the weight per area of the fluid column above: density times $g$ times depth — independent of the total volume of fluid or the shape of the container.',
      },
      {
        q: 'Why does computing the force on a vertical dam require an integral?',
        options: [
          'Because the pressure increases linearly with depth, so different strips feel different forces',
          'Because the density of water changes with depth',
          'Because the dam’s area is infinite',
          'Because gravity acts differently on moving water',
        ],
        answer: 0,
        explanation: 'Each horizontal strip sits at its own depth and pressure; summing the strip forces in the limit is exactly a Riemann integral.',
      },
      {
        q: 'The centroid of the region enclosed by $y = \\sqrt{x}$ and $y = x^2$ is:',
        options: [
          `$\\left(\\tfrac{9}{20}, \\tfrac{9}{20}\\right)$`,
          `$\\left(\\tfrac{1}{2}, \\tfrac{1}{2}\\right)$`,
          `$\\left(\\tfrac{1}{3}, \\tfrac{1}{3}\\right)$`,
          `$\\left(\\tfrac{3}{5}, \\tfrac{2}{5}\\right)$`,
        ],
        answer: 0,
        explanation: 'With $A = \\frac{1}{3}$, both moments equal $\\frac{1}{20}\\cdot 9$-scaled: $\\bar{x} = \\bar{y} = 3 \\cdot \\frac{3}{20} = \\frac{9}{20}$.',
      },
      {
        q: 'Masses $5$, $8$, $7$ sit at $(3, 1)$, $(0, 4)$, $(-5, -2)$. The center of mass is:',
        options: [
          `$(-1, \\tfrac{23}{20})$`,
          `$(1, \\tfrac{23}{20})$`,
          `$(-\\tfrac{2}{20}, \\tfrac{3}{20})$`,
          `$(0, 1)$`,
        ],
        answer: 0,
        explanation: '$M_y = 5(3) + 8(0) + 7(-5) = -20$ and $M_x = 5(1) + 8(4) + 7(-2) = 23$ with $m = 20$, giving $(-1, 1.15)$.',
      },
      {
        q: 'A flat region is symmetric about the line $x = 3$. Its centroid:',
        options: [
          'lies on that line, so $\\bar{x} = 3$',
          'always sits at the origin',
          'has $\\bar{y} = 3$',
          'cannot be found without integration',
        ],
        answer: 0,
        explanation: 'Mass mirrored across a line of symmetry balances there: one coordinate is free, and only the other needs an integral.',
      },
    ],
  },

  // ------------------------------------------------------------------ 8.4
  {
    sectionId: 'calc-ch8-s4',
    readingTime: 10,
    intro: 'Economists and biologists integrate, too. Consumers who would happily have paid more than the going price capture a surplus measured by an area under the demand curve; physiologists quantify blood flow with Poiseuille’s law and cardiac output with dye dilution, an integral estimated from measured data. The mathematics is pure Chapter 5 — the skill is entirely in the setup.',
    objectives: [
      'Define consumer and producer surplus as integrals of willingness-to-pay above the market price',
      'Locate market equilibrium by solving demand = supply and compute both surpluses',
      'Use Poiseuille’s law to compute blood (fluid) flow and to reason about how flow scales with radius',
      'Estimate cardiac output from dye-dilution data with Simpson’s rule',
    ],
    concepts: [
      {
        term: 'Cost and marginal cost',
        kind: 'definition',
        statement: 'The **cost function** $C(x)$ is the cost of producing $x$ units; its derivative $C\'(x)$ is the **marginal cost**, the approximate cost of one more unit.',
        detail: 'By the Net Change Theorem, $C(b) - C(a) = \\int_a^b C\'(x)\\,dx$: the integral of a rate of change is the net change (Exercise 8.4.1: $C(4000) = 18{,}000 + \\int_0^{4000} C\'\\,dx = \\$21{,}104$).',
      },
      {
        term: 'Demand curve and willingness to pay',
        kind: 'definition',
        statement: 'The **demand function** $p(x)$ is the price at which exactly $x$ units can be sold; reading it backwards, $p(x)$ is the most a buyer of the $x$-th unit is willing to pay.',
        detail: 'A decreasing demand curve stacks buyers from the most eager (high willingness) to the least. The area under it up to the quantity sold is the total amount buyers would have been willing to spend.',
      },
      {
        term: 'Consumer surplus',
        kind: 'definition',
        statement: 'If the market clears $x^*$ units at price $p^* = p(x^*)$, the **consumer surplus** is $$CS = \\int_0^{x^*} \\left[p(x) - p^*\\right] dx,$$ the money buyers save by paying the single market price instead of their individual maximums.',
        detail: 'Geometrically it is the area between the demand curve and the horizontal line $p = p^*$ — a triangular-ish region for linear demand.',
      },
      {
        term: 'Producer surplus and equilibrium',
        kind: 'definition',
        statement: 'With supply function $p_S(x)$ (the minimum price at which producers offer the $x$-th unit), equilibrium satisfies $p(x^*) = p_S(x^*)$, and the **producer surplus** is $$PS = \\int_0^{x^*} \\left[p^* - p_S(x)\\right] dx.$$',
        detail: 'The maximum total surplus equals $\\int_0^{x^*} [p(x) - p_S(x)]\\,dx$, since the two integrals telescope — a favorite observation in the exercise set.',
      },
      {
        term: 'Poiseuille’s law for blood flow',
        kind: 'law',
        statement: 'For fluid of viscosity $\\eta$ flowing through a cylinder of radius $R$ and length $l$ under pressure difference $P$, the velocity profile and total flux are $$v(r) = \\frac{P}{4\\eta l}\\left(R^2 - r^2\\right), \\qquad F = \\frac{\\pi P R^4}{8 \\eta l}.$$',
        detail: 'The flux grows with the **four power** of the radius: a vessel only modestly wider carries dramatically more blood. Exercise 8.4.21 computes $F = \\frac{\\pi(4000)(0.008)^4}{8(0.027)(2)} \\approx 1.19 \\times 10^{-4}\\ \\text{cm}^3/\\text{s}$; Exercise 8.4.22 shows that shrinking $R$ to $\\frac{3}{4}$ of its size forces $P = (\\tfrac{4}{3})^4 \\approx 3.16$ times the pressure.',
      },
      {
        term: 'Cardiac output by dye dilution',
        kind: 'method',
        statement: 'Inject $A$ mg of dye near the heart and measure the concentration $c(t)$ (mg/L) of dye in the aorta thereafter. If the flow rate (cardiac output) is $F$ L/s, then $$A = F\\int_0^{T} c(t)\\,dt, \\qquad F = \\frac{A}{\\int_0^{T} c(t)\\,dt},$$ where $T$ is the time when the dye has all passed the measurement point.',
        detail: 'The integral of concentration over time times flow must return the injected amount. In practice $c(t)$ is read from a table at equal intervals, and the integral is estimated with Simpson’s rule (Section 7.7) — the book’s Example 2 does exactly this.',
      },
      {
        term: 'Present and future value',
        kind: 'insight',
        statement: 'A continuous income stream $f(t)$ dollars per year for $T$ years at interest rate $r$ has **future value** $\\int_0^{T} f(t)e^{r(T - t)}\\,dt$ and **present value** $\\int_0^{T} f(t)e^{-rt}\\,dt$.',
        detail: 'Money arriving at time $t$ compounds for the remaining $T - t$ years; discounting backwards gives present value. Exercise 8.4.17 computes the future value of $\\$8000$ per year at $6.2\\%$ for 6 years as about $\\$65{,}230$.',
      },
    ],
    examples: [
      {
        title: 'Consumer and producer surplus in the stereo market (Exercise 8.4.13)',
        problem: 'A company wants to know the effect of price on the sales of its stereos. The demand is $p(x) = 228.4 - 18x$ and the supply is $p_S(x) = 27x + 57.4$, where $x$ is in thousands of stereos. Find the equilibrium quantity and price, then both surpluses.',
        steps: [
          { label: 'Step 1: Find equilibrium', text: 'Set demand equal to supply: $228.4 - 18x = 27x + 57.4$ gives $171 = 45x$, so $x^* = 3.8$ (thousand stereos).' },
          { label: 'Step 2: Equilibrium price', text: '$p^* = 228.4 - 18(3.8) = 160$ dollars per stereo.' },
          { label: 'Step 3: Consumer surplus', text: '$CS = \\int_0^{3.8} (228.4 - 18x - 160)\\,dx = \\int_0^{3.8} (68.4 - 18x)\\,dx = 68.4(3.8) - 9(3.8)^2 = 129.96$ (thousand dollars).' },
          { label: 'Step 4: Producer surplus', text: '$PS = \\int_0^{3.8} (160 - 57.4 - 27x)\\,dx = \\int_0^{3.8} (102.6 - 27x)\\,dx = 102.6(3.8) - 13.5(3.8)^2 = 194.94$ (thousand dollars).' },
          { label: 'Step 5: Interpret', text: 'The maximum total surplus is $129.96 + 194.94 = 324.9$ thousand dollars — what a perfectly discriminating market could extract beyond the equilibrium trade.' },
        ],
        result: 'Equilibrium: $3800$ stereos at $\\$160$ each; $CS \\approx \\$129{,}960$ and $PS \\approx \\$194{,}940$.',
      },
      {
        title: 'Cardiac output from dye dilution (Exercise 8.4.24, the book’s Example 2 setup)',
        problem: 'A $5.5$-mg injection of dye is made and the aortic concentration readings (in mg/L) taken every $2$ seconds are $0$, $4.1$, $8.9$, $8.5$, $6.7$, $4.3$, $2.5$, $1.2$, $0.2$ for $t = 0, 2, \\ldots, 16$ s. Estimate the cardiac output.',
        steps: [
          { label: 'Step 1: Plan', text: 'Cardiac output is $F = A / \\int_0^{16} c(t)\\,dt$ with $A = 5.5$ mg; the integral must be estimated numerically from the table.' },
          { label: 'Step 2: Choose Simpson’s rule', text: 'With $8$ subintervals of width $\\Delta t = 2$ (an even number, as Simpson requires), $\\int_0^{16} c(t)\\,dt \\approx \\frac{\\Delta t}{3}\\left[c_0 + 4c_1 + 2c_2 + \\cdots + 4c_7 + c_8\\right]$.' },
          { label: 'Step 3: Plug in the pattern 1-4-2-…-2-4-1', text: '$\\approx \\frac{2}{3}\\left[0 + 4(4.1) + 2(8.9) + 4(8.5) + 2(6.7) + 4(4.3) + 2(2.5) + 4(1.2) + 0.2\\right] = \\frac{2}{3}(108.8)$.' },
          { label: 'Step 4: The integral', text: '$\\int_0^{16} c(t)\\,dt \\approx 72.53\\ \\text{mg} \\cdot \\text{s/L}$.' },
          { label: 'Step 5: Divide', text: '$F \\approx \\frac{5.5}{72.53} \\approx 0.0758\\ \\text{L/s}$, or about $4.55$ L/min.' },
        ],
        result: 'Cardiac output $\\approx 4.55$ L/min — in the healthy resting range of about 5 L/min.',
      },
      {
        title: 'The fourth power of radius (Exercise 8.4.21–22)',
        problem: 'Blood of viscosity $\\eta = 0.027$ flows through a vessel of length $l = 2\\ \\text{cm}$ and radius $R = 0.008\\ \\text{cm}$ under pressure difference $P = 4000$ (dynes/cm$^2$). (a) Find the flow. (b) If the radius narrows to $\\frac{3}{4}$ of its value, by what factor must the pressure rise to keep the same flow?',
        steps: [
          { label: 'Step 1: Apply Poiseuille’s law', text: '$F = \\frac{\\pi P R^4}{8 \\eta l} = \\frac{\\pi(4000)(0.008)^4}{8(0.027)(2)}$.' },
          { label: 'Step 2: Evaluate', text: '$(0.008)^4 = 4.096 \\times 10^{-9}$, so $F \\approx 1.19 \\times 10^{-4}\\ \\text{cm}^3/\\text{s}$.' },
          { label: 'Step 3: Set up the scaling', text: 'Keeping $F$ fixed in $F = \\pi P R^4 / (8\\eta l)$ forces $P R^4$ to be constant.' },
          { label: 'Step 4: Solve the proportion', text: 'With $R = \\frac{3}{4}R_0$: $P = P_0 \\left(\\frac{4}{3}\\right)^4 = \\frac{256}{81} P_0 \\approx 3.16\\,P_0$.' },
        ],
        result: '(a) $F \\approx 1.19 \\times 10^{-4}\\ \\text{cm}^3/\\text{s}$; (b) a $25\\%$ narrowing demands over three times the pressure — the brutal arithmetic of $R^4$ that makes small changes in artery radius matter so much.',
      },
    ],
    keyTakeaways: [
      'Consumer surplus is the area between the demand curve and the market price: $CS = \\int_0^{x^*}[p(x) - p^*]\\,dx$; producer surplus is its mirror for the supply curve.',
      'Equilibrium comes first: solve $p(x) = p_S(x)$ for $x^*$ and $p^*$ before any integral is set up.',
      'Poiseuille’s law $F = \\pi P R^4/(8 \\eta l)$ makes flow scale with the fourth power of the radius — small vessels, big consequences.',
      'Cardiac output is injected dye divided by the time-integral of concentration, and that integral is estimated from data with Simpson’s rule.',
      'Continuous income streams integrate compound interest: future value $\\int_0^T f(t)e^{r(T-t)}dt$, present value $\\int_0^T f(t)e^{-rt}dt$.',
      'Every problem here is a Net Change Theorem problem in costume: identify the rate, integrate it over the interval.',
    ],
    quiz: [
      {
        q: 'Consumer surplus, when the market clears $x^*$ units at price $p^*$, is:',
        options: [
          `$\\int_0^{x^*} [p(x) - p^*]\\,dx$`,
          `$\\int_0^{x^*} [p^* - p(x)]\\,dx$`,
          `$\\int_0^{x^*} p(x)\\,dx$`,
          `$p^* x^*$`,
        ],
        answer: 0,
        explanation: 'Each buyer of the $x$-th unit saves $p(x) - p^*$, the gap between willingness to pay and the market price; adding those gaps gives the area between demand curve and price line.',
      },
      {
        q: 'In the stereo market of Exercise 8.4.13 the equilibrium quantity and price are:',
        options: [
          '$x^* = 3.8$ thousand stereos at $p^* = 160$ dollars',
          '$x^* = 160$ thousand stereos at $p^* = 3.8$ dollars',
          '$x^* = 4.0$ thousand stereos at $p^* = 156$ dollars',
          '$x^* = 3.8$ thousand stereos at $p^* = 228$ dollars',
        ],
        answer: 0,
        explanation: 'Solving $228.4 - 18x = 27x + 57.4$ gives $x = 3.8$, and either curve then gives the price $p = 160$.',
      },
      {
        q: 'Poiseuille’s law says flow $F = \\pi P R^4/(8\\eta l)$. If a vessel’s radius shrinks to half, then (all else fixed) the flow:',
        options: ['drops to one sixteenth', 'drops to one half', 'drops to one quarter', 'is unchanged'],
        answer: 0,
        explanation: 'Flow is proportional to $R^4$, and $\\left(\\tfrac{1}{2}\\right)^4 = \\tfrac{1}{16}$ — the reason circulatory systems defend radius so carefully.',
      },
      {
        q: 'In the dye-dilution method, cardiac output is computed as:',
        options: [
          `$F = A \\big/ \\int_0^{T} c(t)\\,dt$`,
          `$F = A \\cdot \\int_0^{T} c(t)\\,dt$`,
          `$F = \\int_0^{T} c(t)\\,dt \\big/ A$`,
          `$F = A - \\int_0^{T} c(t)\\,dt$`,
        ],
        answer: 0,
        explanation: 'Injected dye $=$ flow $\\times$ time-integral of concentration; divide the known amount $A$ by the (Simpson-estimated) area under the concentration curve.',
      },
    ],
  },

  // ------------------------------------------------------------------ 8.5
  {
    sectionId: 'calc-ch8-s5',
    readingTime: 10,
    intro: 'Probability for a continuous quantity — a lifetime, a waiting time, a measurement — is an integral. A density function spreads total probability 1 over an interval, probabilities become areas, averages become integrals, and the normal distribution makes its entrance as the most famous improper integral in mathematics.',
    objectives: [
      'State the two defining conditions of a probability density function and verify them',
      'Compute probabilities as integrals of a density, including tail probabilities as improper integrals',
      'Compute the mean (expectation) of a continuous random variable',
      'Work with exponential waiting-time densities and the normal distribution',
    ],
    concepts: [
      {
        term: 'Continuous random variable',
        kind: 'definition',
        statement: 'A **random variable** $X$ is continuous if its values form an interval and its behavior is described by a **probability density function** $f$.',
        detail: 'Contrast with discrete probability (Rosen, Chapter 7): there, events are counted and summed; here, events are measured and integrated. The continuous theory is what the discrete theory converges to as the outcome grid gets fine.',
      },
      {
        term: 'Probability density function',
        kind: 'definition',
        statement: 'A function $f$ is a probability density if $$f(x) \\ge 0 \\ \\text{ for all } x \\qquad \\text{and} \\qquad \\int_{-\\infty}^{\\infty} f(x)\\,dx = 1.$$ Then $P(a \\le X \\le b) = \\int_a^b f(x)\\,dx$.',
        detail: 'The density is not itself a probability — it can exceed $1$ — but the area it assigns to any interval is. For a density vanishing outside $[0, 1]$, Exercise 8.5.3 verifies $f(x) = 30x^2(1 - x)^2$ passes both tests since $\\int_0^1 30(x^2 - 2x^3 + x^4)\\,dx = 10 - 15 + 6 = 1$.',
      },
      {
        term: 'Expectation (mean)',
        kind: 'definition',
        statement: 'The **mean** or expected value of $X$ is $$\\mu = E(X) = \\int_{-\\infty}^{\\infty} x\\,f(x)\\,dx,$$ the balance point (centroid!) of the density.',
        detail: 'The analogy with Section 8.3 is exact: mass density $\\leftrightarrow$ probability density, total mass $\\leftrightarrow$ total probability $1$, center of mass $\\leftrightarrow$ expectation. For the density $f(x) = \\tfrac{2}{9}(3x - x^2)$ on $[0, 3]$, $\\mu = \\tfrac{2}{9}\\int_0^3 (3x^2 - x^3)dx = \\tfrac{2}{9}\\left(27 - \\tfrac{81}{4}\\right) = 2$.',
      },
      {
        term: 'Exponential waiting times',
        kind: 'law',
        statement: 'Waiting times with mean $\\mu$ are often modeled by $f(t) = \\frac{1}{\\mu} e^{-t/\\mu}$ for $t \\ge 0$, for which $P(T > s) = e^{-s/\\mu}$ and the distribution is **memoryless**.',
        detail: 'Exercise 8.5.11 (mean $\\mu = 1.6$ s): $P(T < 1) = 1 - e^{-1/1.6} \\approx 0.465$, $P(T > 3) = e^{-3/1.6} \\approx 0.153$, and the time $b$ with $P(T > b) = 0.05$ solves $e^{-b/1.6} = 0.05$, giving $b \\approx 4.79$ s.',
      },
      {
        term: 'The normal distribution',
        kind: 'definition',
        statement: 'A normal random variable with mean $\\mu$ and standard deviation $\\sigma$ has density $$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\, e^{-(x - \\mu)^2/(2\\sigma^2)}, \\qquad -\\infty < x < \\infty,$$ so $P(a \\le X \\le b)$ is an improper integral of a Gaussian.',
        detail: 'The integrand has no elementary antiderivative, so normal probabilities are computed numerically or from tables. The fact that the total area is exactly $1$ rests on the improper integral $\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$, evaluated by polar coordinates in Section 15.4.',
      },
      {
        term: 'Medians and percentiles',
        kind: 'method',
        statement: 'The **median** $m$ of a density satisfies $\\int_{-\\infty}^{m} f(x)\\,dx = \\tfrac{1}{2}$ — the point that splits the area in half.',
        detail: 'Exercise 8.5.9 finds the median of the waiting-time density $f(t) = \\tfrac{1}{5}e^{-t/5}$ as $m = 5\\ln 2 \\approx 3.47$ minutes — below the mean $5$, because the exponential distribution is right-skewed: its long tail pulls the mean above the point that splits the area in half.',
      },
    ],
    examples: [
      {
        title: 'Verifying and using a density',
        problem: 'Let $f(x) = 0.006x(10 - x)$ for $0 \\le x \\le 10$ and $f(x) = 0$ otherwise, a model for the duration in minutes of a customer call. (a) Verify $f$ is a probability density. (b) Find the probability a call lasts between $4$ and $6$ minutes. (c) Find the mean duration.',
        steps: [
          { label: 'Step 1: Nonnegativity', text: 'For $0 \\le x \\le 10$, both factors $x$ and $10 - x$ are nonnegative, so $f(x) \\ge 0$; elsewhere $f$ is $0$.' },
          { label: 'Step 2: Total probability', text: '$\\int_0^{10} 0.006x(10 - x)\\,dx = 0.006\\left[5x^2 - \\tfrac{x^3}{3}\\right]_0^{10} = 0.006\\left(500 - \\tfrac{1000}{3}\\right) = 0.006 \\cdot \\tfrac{500}{3} = 1$.' },
          { label: 'Step 3: A probability as an area', text: '$P(4 \\le X \\le 6) = 0.006\\int_4^6 (10x - x^2)\\,dx = 0.006\\left[5x^2 - \\tfrac{x^3}{3}\\right]_4^6 = 0.006\\left(108 - \\tfrac{176}{3}\\right) \\approx 0.296$.' },
          { label: 'Step 4: The mean', text: '$\\mu = 0.006\\int_0^{10} x^2(10 - x)\\,dx = 0.006\\left[\\tfrac{10}{3}x^3 - \\tfrac{x^4}{4}\\right]_0^{10} = 0.006\\left(\\tfrac{10000}{3} - 2500\\right) = 0.006 \\cdot \\tfrac{2500}{3} = 5$.' },
        ],
        result: '(a) $f$ is a density since $f \\ge 0$ and integrates to $1$; (b) $P(4 \\le X \\le 6) \\approx 0.296$; (c) $\\mu = 5$ minutes, exactly the midpoint — expected from the symmetry of $f$ about $x = 5$.',
      },
      {
        title: 'Finding the constant (Exercise 8.5.6)',
        problem: 'Let $f(x) = k(3x - x^2)$ on $[0, 3]$ and $0$ elsewhere. (a) Find $k$ making $f$ a density. (b) Compute $P(X > 1)$. (c) Find the mean.',
        steps: [
          { label: 'Step 1: Normalize', text: '$\\int_0^3 k(3x - x^2)\\,dx = k\\left[\\tfrac{3}{2}x^2 - \\tfrac{x^3}{3}\\right]_0^3 = k\\left(\\tfrac{27}{2} - 9\\right) = \\tfrac{9}{2}k$; setting this equal to $1$ gives $k = \\tfrac{2}{9}$.' },
          { label: 'Step 2: The tail probability', text: '$P(X > 1) = \\tfrac{2}{9}\\int_1^3 (3x - x^2)\\,dx = \\tfrac{2}{9}\\left[\\tfrac{3}{2}x^2 - \\tfrac{x^3}{3}\\right]_1^3 = \\tfrac{2}{9}\\left(\\tfrac{9}{2} - \\tfrac{7}{6}\\right) = \\tfrac{2}{9} \\cdot \\tfrac{10}{3} = \\tfrac{20}{27}$.' },
          { label: 'Step 3: The mean', text: '$\\mu = \\tfrac{2}{9}\\int_0^3 (3x^2 - x^3)\\,dx = \\tfrac{2}{9}\\left[x^3 - \\tfrac{x^4}{4}\\right]_0^3 = \\tfrac{2}{9}\\left(27 - \\tfrac{81}{4}\\right) = \\tfrac{2}{9} \\cdot \\tfrac{27}{4} = \\tfrac{3}{2}$.' },
          { label: 'Step 4: Confirm by symmetry', text: 'The parabola $3x - x^2 = \\tfrac{9}{4} - (x - \\tfrac{3}{2})^2$ is symmetric about $x = \\tfrac{3}{2}$, so the density balances there — the mean must be $\\tfrac{3}{2}$, as computed.' },
        ],
        result: '(a) $k = \\tfrac{2}{9}$; (b) $P(X > 1) = \\tfrac{20}{27} \\approx 0.741$; (c) $\\mu = \\tfrac{3}{2}$, forced by the symmetry of the density about $x = \\tfrac{3}{2}$ — the same balance-point logic as the centroids of Section 8.3.',
      },
      {
        title: 'Waiting times and tail questions (Exercise 8.5.11)',
        problem: 'The waiting time $T$ for a bank teller has mean $\\mu = 1.6$ seconds and exponential density $f(t) = \\frac{1}{1.6} e^{-t/1.6}$, $t \\ge 0$. Find (a) $P(T < 1)$, (b) $P(T > 3)$, and (c) the waiting time $b$ that is exceeded only $5\\%$ of the time.',
        steps: [
          { label: 'Step 1: A short wait', text: '$P(T < 1) = \\int_0^1 \\tfrac{1}{1.6} e^{-t/1.6}\\,dt = \\left[-e^{-t/1.6}\\right]_0^1 = 1 - e^{-1/1.6} \\approx 0.465$.' },
          { label: 'Step 2: A long wait', text: '$P(T > 3) = \\int_3^{\\infty} \\tfrac{1}{1.6} e^{-t/1.6}\\,dt = \\lim_{s \\to \\infty}\\left[-e^{-t/1.6}\\right]_3^s = e^{-3/1.6} \\approx 0.153$.' },
          { label: 'Step 3: A percentile', text: 'Set $P(T > b) = e^{-b/1.6} = 0.05$ and solve: $-\\tfrac{b}{1.6} = \\ln 0.05$, so $b = -1.6\\ln(0.05) \\approx 4.79$ seconds.' },
          { label: 'Step 4: Interpret', text: 'About $46.5\\%$ of customers are served within a second, and only one in twenty waits longer than about $4.8$ seconds.' },
        ],
        result: '(a) $\\approx 0.465$; (b) $\\approx 0.153$; (c) $b = -1.6\\ln(0.05) \\approx 4.79$ s. Note how the improper integral of $e^{-t/\\mu}$ always collapses to a pure exponential.',
      },
    ],
    keyTakeaways: [
      'A density must satisfy $f \\ge 0$ and $\\int_{-\\infty}^{\\infty} f\\,dx = 1$; every probability is an area $P(a \\le X \\le b) = \\int_a^b f(x)\\,dx$.',
      'The mean is the balance point of the density: $E(X) = \\int x f(x)\\,dx$ — the centroid idea of Section 8.3 with total mass $1$.',
      'Unknown constants in a density are found by normalizing: set the total integral equal to $1$ and solve.',
      'Exponential waiting-time densities give tail probabilities $P(T > s) = e^{-s/\\mu}$, turning tail questions into logarithm questions.',
      'The normal density integrates to $1$ only via the improper integral $\\int_{-\\infty}^{\\infty} e^{-x^2}dx = \\sqrt{\\pi}$ (polar coordinates, Section 15.4); its probabilities have no closed form and come from tables or numerics.',
      'Where Rosen Chapter 7 counts discrete outcomes and sums, continuous probability measures intervals and integrates.',
    ],
    quiz: [
      {
        q: 'Which pair of conditions makes $f$ a probability density function?',
        options: [
          `$f(x) \\ge 0$ for all $x$ and $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$`,
          '$0 \\le f(x) \\le 1$ for all $x$ and $f$ is continuous',
          `$f(x) \\ge 0$ and $f(x) \\le 1$ for all $x$`,
          '$\\int_{-\\infty}^{\\infty} f(x)\\,dx = 0$ and $f$ is increasing',
        ],
        answer: 0,
        explanation: 'Densities may exceed $1$ (a tall thin spike on a short interval is fine); what is required is nonnegativity and total area exactly $1$.',
      },
      {
        q: 'For a continuous random variable with density $f$, $P(a \\le X \\le b)$ equals:',
        options: [
          `$\\int_a^b f(x)\\,dx$`,
          `$f(b) - f(a)$`,
          `$\\int_a^b x f(x)\\,dx$`,
          `$\\frac{1}{b - a}\\int_a^b f(x)\\,dx$`,
        ],
        answer: 0,
        explanation: 'Probability is area under the density. Option 3 is the un-normalized moment, and option 4 is an average value, not a probability.',
      },
      {
        q: 'For the density $f(x) = 0.006x(10 - x)$ on $[0, 10]$, the mean duration is:',
        options: ['5 minutes', '3 minutes', '10 minutes', '7.5 minutes'],
        answer: 0,
        explanation: '$\\mu = 0.006\\int_0^{10} x^2(10 - x)\\,dx = 0.006 \\cdot \\tfrac{2500}{3} = 5$ — as the symmetry about $x = 5$ predicts.',
      },
      {
        q: 'Waiting times are exponential with mean $\\mu = 1.6$ s. Then $P(T > 3)$ equals:',
        options: [
          `$e^{-3/1.6} \\approx 0.153$`,
          `$1 - e^{-3/1.6} \\approx 0.847$`,
          `$3/1.6 \\approx 1.875$`,
          `$e^{-1.6/3} \\approx 0.587$`,
        ],
        answer: 0,
        explanation: 'The tail of an exponential density is itself exponential: $P(T > s) = e^{-s/\\mu}$, here $e^{-1.875} \\approx 0.153$.',
      },
      {
        q: 'Why are normal probabilities computed with tables or numerical methods rather than the Fundamental Theorem?',
        options: [
          'Because $e^{-x^2}$ has no elementary antiderivative',
          'Because the density is not continuous',
          'Because the normal distribution is discrete',
          'Because the integral diverges',
        ],
        answer: 0,
        explanation: 'The Gaussian has no elementary antiderivative (it is why the error function exists), yet its total integral converges to exactly $\\sqrt{2\\pi}\\sigma$ after normalization — proved with polar double integrals in Chapter 15.',
      },
      // PYQ-pattern: JEE Mains 2020 — mean of a continuous density (rephrased, values changed)
      {
        q: 'Let $f(x) = 3x^{2}$ on $[0, 1]$ and $0$ elsewhere. The mean $\\mu = \\int_{-\\infty}^{\\infty} x f(x)\\,dx$ equals:',
        options: [
          `$\\frac{3}{4}$`,
          `$\\frac{1}{2}$`,
          `$1$`,
          `$\\frac{1}{4}$`,
        ],
        answer: 0,
        explanation: 'Step 1: Restate the mean as **first moment** $\\mu = \\int_{0}^{1} x \\cdot 3x^{2}\\,dx$. Step 2: Recall the key density check $\\int_{0}^{1}3x^{2}\\,dx = 1$, so $f$ is legitimate. Step 3: Simplify the moment integrand to $3x^{3}$. Step 4: Integrate to $\\left[\\frac{3x^{4}}{4}\\right]_{0}^{1} = \\frac{3}{4}$. Step 5: The distractors fail since $\\frac{1}{2}$ is the midpoint rather than the tilted mean, $1$ is the total probability, and $\\frac{1}{4}$ integrates $x^{3}$ without the factor $3$. Step 6: Hence $\\mu = \\frac{3}{4}$.'
      },
      // PYQ-pattern: JEE Mains 2022 — exponential probability over an interval (rephrased, values changed)
      {
        q: 'Let $f(x) = e^{-x}$ for $x \\geq 0$ and $0$ otherwise. Then $P(0 \\leq X \\leq 1)$ equals:',
        options: [
          `$e^{-1}$`,
          `$e$`,
          `$1 - e^{-1}$`,
          `$1$`,
        ],
        answer: 2,
        explanation: 'Step 1: Restate the probability as **area under the density** $P(0 \\leq X \\leq 1) = \\int_{0}^{1}e^{-x}\\,dx$. Step 2: Recall the key antiderivative $\\int e^{-x}\\,dx = -e^{-x} + C$. Step 3: Evaluate as $\\left[-e^{-x}\\right]_{0}^{1} = -e^{-1} - (-1)$. Step 4: Simplify to $1 - e^{-1} \\approx 0.632$. Step 5: The distractors fail since $e^{-1}$ is the complementary tail $P(X > 1)$, $e$ inverts the exponent, and $1$ is the total probability over $[0, \\infty)$. Step 6: Therefore $P(0 \\leq X \\leq 1) = 1 - e^{-1}$.'
      },
    ],
  },
]
