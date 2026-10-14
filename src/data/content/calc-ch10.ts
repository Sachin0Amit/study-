import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 10: Parametric Equations and Polar Coordinates (Sections 10.1 – 10.6)
// Master study content. Worked-example numbers follow the book’s own style.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh10Content: SectionContent[] = [
  // ------------------------------------------------------------------ 10.1
  {
    sectionId: 'calc-ch10-s1',
    readingTime: 8,
    intro: 'A single equation $y = f(x)$ can only describe curves that pass the vertical line test, but many of the most important curves in mathematics and physics — a point tracing a circle, a planet in orbit, a bead of light on a rolling wheel — fail that test. Parametric equations solve the problem by making both coordinates functions of a third variable, the parameter, which usually represents time.',
    objectives: [
      'Define parametric equations, the parameter, and a plane curve, and sketch curves by plotting points for selected values of the parameter',
      'Eliminate the parameter by substitution or by a trigonometric identity and interpret the resulting Cartesian equation',
      'Explain what information is lost when the parameter is eliminated, including restricted parameter intervals',
      'Write standard parametrizations of circles, ellipses and projectile paths and control the direction of travel',
      'Describe the cycloid traced by a point on the rim of a rolling circle',
    ],
    concepts: [
      {
        term: 'Parametric equations and plane curves',
        kind: 'definition',
        statement: 'If $f$ and $g$ are continuous functions of a variable $t$ on an interval $I$, then the set of points $(x, y) = (f(t), g(t))$ is a **plane curve** parametrized by the equations $x = f(t)$, $y = g(t)$; the variable $t$ is the **parameter**.',
        detail: 'Think of a particle moving in the plane: at each time $t$ it occupies exactly one position $(f(t), g(t))$, so the parameter plays the role of time and the curve is the trail the particle leaves behind. This is why parametric description is the natural language for motion problems — and why every curve in Chapter 13 (vector functions and space curves) is built on this section.',
      },
      {
        term: 'Orientation of a curve',
        kind: 'notation',
        statement: 'As $t$ increases, the point $(f(t), g(t))$ moves through the curve in a definite direction called the **orientation** (or direction of travel); a parametric sketch should always be marked with arrows showing it.',
        detail: 'For example, $x = \\cos t$, $y = \\sin t$ for $0 \\le t \\le 2\\pi$ traverses the unit circle counterclockwise, starting and ending at $(1, 0)$. Replacing $t$ by $-t$ (or swapping equations) reverses the orientation while tracing exactly the same set of points — a first hint that the parameter carries information the curve itself does not.',
      },
      {
        term: 'Eliminating the parameter',
        kind: 'method',
        statement: 'To convert a parametric description into a single Cartesian equation: (1) **solve one equation for $t$** in terms of $x$ or $y$ and substitute into the other, or (2) **combine the equations** using a trigonometric identity such as $\\cos^2 t + \\sin^2 t = 1$.',
        detail: 'Substitution works whenever one of $f$, $g$ is one-to-one on the parameter interval; trigonometric identities handle the circle and ellipse cases where neither is. The Cartesian equation is usually the most compact way to identify what a curve is — but it forgets both the orientation and the portion of the curve actually traced.',
      },
      {
        term: 'Restricted parameter intervals',
        kind: 'insight',
        statement: 'The parametric curve may be only **part of the Cartesian curve** obtained by eliminating the parameter, because the parameter range limits which points are ever visited.',
        detail: 'The classic example is $x = \\sin t$, $y = \\sin^2 t$: eliminating gives the parabola $y = x^2$, but since $-1 \\le \\sin t \\le 1$ only the arc with $-1 \\le x \\le 1$ is traced, back and forth, forever. Always record the parameter interval alongside the Cartesian equation.',
      },
      {
        term: 'Standard parametrizations',
        kind: 'method',
        statement: 'Circle of radius $a$ centered at the origin: $x = a\\cos t$, $y = a\\sin t$ (counterclockwise, $0 \\le t \\le 2\\pi$). Ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$: $x = a\\cos t$, $y = b\\sin t$.',
        detail: 'Line segments have a useful parametrization too: the segment from $(x_0, y_0)$ to $(x_1, y_1)$ is $x = x_0 + t(x_1 - x_0)$, $y = y_0 + t(y_1 - y_0)$ with $0 \\le t \\le 1$. Changing the interval (or the trigonometric functions) changes which part of the curve you get and in which direction — sketching a parametric curve always means deciding where the particle starts and where it stops.',
      },
      {
        term: 'Projectile motion',
        kind: 'insight',
        statement: 'A projectile launched from the origin at angle $\\alpha$ with speed $v_0$ follows the parametric path $x = (v_0\\cos\\alpha)\\,t$, $y = (v_0\\sin\\alpha)\\,t - \\frac{1}{2}gt^2$, where $g \\approx 9.8\\ \\text{m/s}^2$ is the gravitational constant.',
        detail: 'Here the parameter genuinely is time. Eliminating $t$ (substitute $t = x/(v_0\\cos\\alpha)$) yields a parabola $y = x\\tan\\alpha - \\frac{g}{2v_0^2\\cos^2\\alpha}x^2$, confirming Galileo’s observation that projectiles travel in parabolic arcs — a fact he established by studying curves parametrized by time.',
      },
      {
        term: 'The cycloid',
        kind: 'definition',
        statement: 'The path traced by a point $P$ on the rim of a circle of radius $r$ rolling without slipping along a straight line is the **cycloid**, parametrized by $x = r(\\theta - \\sin\\theta)$, $y = r(1 - \\cos\\theta)$.',
        detail: 'The parameter $\\theta$ is the angle through which the circle has rotated. The curve is a succession of arches with **cusps** (sharp corners) where the tracing point touches the line, at $\\theta = 0, \\pm 2\\pi, \\pm 4\\pi, \\ldots$ Each arch spans $2\\pi r$ horizontally and rises to height $2r$. Galileo named the curve and tried to compute its area; it later became central to the tautochrone and brachistochrone problems solved by Huygens and the Bernoullis.',
      },
    ],
    examples: [
      {
        title: 'Sketching a parabola parametrically',
        problem: 'Sketch the curve defined by the parametric equations $x = t^2 - 2t$, $y = t + 1$, and find a Cartesian equation for it.',
        steps: [
          { label: 'Step 1: Tabulate points', text: 'Choose a few parameter values and compute $(x, y)$: $t = -1$ gives $(3, 0)$; $t = 0$ gives $(0, 1)$; $t = 1$ gives $(-1, 2)$; $t = 2$ gives $(0, 3)$; $t = 3$ gives $(3, 4)$. Plotting them shows a curve dipping to its leftmost point near $t = 1$ and opening to the right.' },
          { label: 'Step 2: Note the orientation', text: 'As $t$ runs from $-\\infty$ to $\\infty$, $y = t + 1$ increases steadily, so the particle travels upward through the plotted points — mark the arrows accordingly.' },
          { label: 'Step 3: Eliminate the parameter', text: 'The $y$-equation is easy to invert: $t = y - 1$. Substitute into the $x$-equation: $x = (y-1)^2 - 2(y-1) = y^2 - 2y + 1 - 2y + 2 = y^2 - 4y + 3$.' },
          { label: 'Step 4: Identify the curve', text: 'Completing the square gives $x = (y - 2)^2 - 1$: a parabola opening to the right with vertex at $(-1, 2)$ — matching the tabulated points.' },
        ],
        result: 'The parametric curve is the entire parabola $x = (y-2)^2 - 1$, traced from bottom to top as $t$ increases; if the parameter were restricted to $t \\ge 0$ only the half with $y \\ge 1$ would be traced.',
      },
      {
        title: 'An ellipse with a truncated parameter interval',
        problem: 'Describe the curve $x = 4\\sin t$, $y = 2\\cos t$ for (a) $0 \\le t \\le 2\\pi$ and (b) $0 \\le t \\le \\pi$.',
        steps: [
          { label: 'Step 1: Eliminate via a trig identity', text: 'Since $\\frac{x}{4} = \\sin t$ and $\\frac{y}{2} = \\cos t$, squaring and adding eliminates the parameter: $\\frac{x^2}{16} + \\frac{y^2}{4} = 1$, an ellipse centered at the origin with intercepts $(\\pm 4, 0)$ and $(0, \\pm 2)$.' },
          { label: 'Step 2: Track the full traversal', text: 'For $0 \\le t \\le 2\\pi$ the point starts at $(0, 2)$, moves to $(4, 0)$ at $t = \\frac{\\pi}{2}$, reaches $(0, -2)$ at $t = \\pi$ and $(-4, 0)$ at $t = \\frac{3\\pi}{2}$ — a complete clockwise circuit of the ellipse.' },
          { label: 'Step 3: Truncate the interval', text: 'For $0 \\le t \\le \\pi$ we have $\\sin t \\ge 0$, so $x = 4\\sin t \\ge 0$: only the right half of the ellipse is traced, from $(0, 2)$ down to $(0, -2)$ through $(4, 0)$.' },
          { label: 'Step 4: State the caveat', text: 'The Cartesian equation alone cannot distinguish the two answers — the parameter interval is an essential part of the description.' },
        ],
        result: 'The full ellipse $\\frac{x^2}{16} + \\frac{y^2}{4} = 1$ is traversed clockwise; restricting $0 \\le t \\le \\pi$ yields only its right half.',
      },
      {
        title: 'Deriving the cycloid',
        problem: 'A wheel of radius $r$ rolls along the $x$-axis. Show that the point on the rim that starts at the origin follows the cycloid $x = r(\\theta - \\sin\\theta)$, $y = r(1 - \\cos\\theta)$.',
        steps: [
          { label: 'Step 1: Set up the rolling constraint', text: 'If the wheel has rotated through angle $\\theta$, its center has moved forward by the arc length rolled out: $OT = r\\theta$, where $O$ is the starting point of contact and $T$ the current contact point. So the center sits at $(r\\theta, r)$.' },
          { label: 'Step 2: Locate the tracing point by vectors', text: 'The vector from the center $C = (r\\theta, r)$ to the tracing point $P$ has length $r$ and, measured from the downward vertical, has rotated through angle $\\theta$. Its components are $(-r\\sin\\theta, -r\\cos\\theta)$.' },
          { label: 'Step 3: Add the components', text: 'Therefore $P = C + (-r\\sin\\theta, -r\\cos\\theta)$, which gives $x = r\\theta - r\\sin\\theta$ and $y = r - r\\cos\\theta$ — that is, $x = r(\\theta - \\sin\\theta)$, $y = r(1 - \\cos\\theta)$.' },
          { label: 'Step 4: Verify the cusps', text: 'At $\\theta = 0$ and $\\theta = 2\\pi$ we get $(0, 0)$ and $(2\\pi r, 0)$: the point returns to the line, and both $x\'(\\theta) = r(1 - \\cos\\theta)$ and $y\'(\\theta) = r\\sin\\theta$ vanish at $\\theta = 0, 2\\pi$ — the cusps of the arch.' },
        ],
        result: 'One arch of the cycloid spans $2\\pi r$ horizontally and reaches its maximum height $2r$ when $\\theta = \\pi$. Its remarkable properties — a bead sliding down an inverted cycloid takes the same time to reach the bottom regardless of its starting point — made it the most studied curve of the seventeenth century.',
      },
    ],
    keyTakeaways: [
      'A parametric curve is a set of points $(f(t), g(t))$; the parameter $t$ usually represents time and determines an orientation with arrows.',
      'Eliminate the parameter by back-substitution when one equation is invertible, or by a trig identity such as $\\cos^2 t + \\sin^2 t = 1$ for circles and ellipses.',
      'The Cartesian equation forgets the parameter interval, so a parametric curve can be only a piece of it — and the same Cartesian curve admits infinitely many parametrizations, with different speeds and directions.',
      'Standard building blocks: $x = a\\cos t$, $y = b\\sin t$ for ellipses, and the segment parametrization between two points with $0 \\le t \\le 1$.',
      'Projectile motion is naturally parametric in time and traces a parabola.',
      'The cycloid $x = r(\\theta - \\sin\\theta)$, $y = r(1 - \\cos\\theta)$ is the curve of a rolling wheel rim point, with cusps at every multiple of $2\\pi r$.',
    ],
    quiz: [
      {
        q: 'The curve $x = \\cos t$, $y = \\sin t$ with $0 \\le t \\le \\frac{3\\pi}{2}$ is:',
        options: ['The full unit circle, clockwise', 'Three quarters of the unit circle, counterclockwise, ending at $(0, -1)$', 'The full unit circle, counterclockwise', 'Three quarters of the unit circle, clockwise, starting at $(0, -1)$'],
        answer: 1,
        explanation: 'Starting at $(1, 0)$ and moving counterclockwise for $\\frac{3\\pi}{2}$ radians ends at $(0, -1)$; the quarter around $-\\frac{\\pi}{2}$ to $0$ is never visited.',
      },
      {
        q: 'Eliminating the parameter in $x = e^t$, $y = e^{2t}$ yields:',
        options: [`$y = x^2$ for all real $x$`, `$y = x^2$ restricted to $x > 0$`, `$y = 2x$ for $x > 0$`, 'A circle of radius $e$'],
        answer: 1,
        explanation: 'Since $y = (e^t)^2 = x^2$ but $x = e^t > 0$, only the right half of the parabola is traced — a classic illustration that elimination forgets the range.',
      },
      {
        q: 'The cycloid $x = r(\\theta - \\sin\\theta)$, $y = r(1 - \\cos\\theta)$ has cusps where the tracing point:',
        options: ['Is at maximum height $2r$', 'Touches the rolling line, at $\\theta = 0, \\pm 2\\pi, \\pm 4\\pi, \\ldots$', 'Is directly above the wheel’s center', 'Crosses the $y$-axis'],
        answer: 1,
        explanation: 'At $\\theta = 2\\pi k$ both $x\'$ and $y\'$ vanish and $y = 0$: the point is instantaneously at rest on the line, producing a sharp cusp.',
      },
      {
        q: 'Which of these curves cannot be represented as a single function $y = f(x)$ but is easily described parametrically?',
        options: ['A line with nonzero slope', 'A parabola opening upward', 'A circle centered at the origin', 'An exponential growth curve'],
        answer: 2,
        explanation: 'A circle fails the vertical line test — every interior $x$ corresponds to two $y$ values — yet $x = a\\cos t$, $y = a\\sin t$ describes it effortlessly.',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.2
  {
    sectionId: 'calc-ch10-s2',
    readingTime: 9,
    intro: 'Once a curve is described by a parameter, all of single-variable calculus comes along for the ride — but through the chain rule, since $x$ and $y$ both depend on $t$. This section develops slopes and concavity for parametric curves, then recovers the three geometric quantities from Chapters 6–8: area under a curve, arc length, and surface area of revolution.',
    objectives: [
      'Compute first and second derivatives $\\frac{dy}{dx}$ and $\\frac{d^2y}{dx^2}$ of a parametric curve',
      'Find tangent lines and locate horizontal and vertical tangents',
      'Set up and evaluate areas under parametric curves using $A = \\int_\\alpha^\\beta y\\,dx$',
      'Compute arc length and surface area for parametric curves',
    ],
    concepts: [
      {
        term: 'First derivative of a parametric curve',
        kind: 'theorem',
        statement: 'If $f$ and $g$ are differentiable and $y$ is a differentiable function of $x$ through the parameter, then $$\\frac{dy}{dx} = \\frac{\\ \\frac{dy}{dt}\\ }{\\ \\frac{dx}{dt}\\ } = \\frac{g\'(t)}{f\'(t)}, \\quad \\text{where } f\'(t) \\ne 0.$$',
        detail: 'This is the Chain Rule in disguise: write $\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}$ and divide. The formula fails at parameter values where $f\'(t) = 0$ — there the tangent is vertical (or does not exist, as at a cycloid cusp where both derivatives vanish).',
      },
      {
        term: 'Second derivative of a parametric curve',
        kind: 'method',
        statement: 'The second derivative is the derivative of the first derivative with respect to $t$, divided once more by $\\frac{dx}{dt}$: $$\\frac{d^2y}{dx^2} = \\frac{\\ \\frac{d}{dt}\\!\\left(\\frac{dy}{dx}\\right)\\ }{\\frac{dx}{dt}}.$$',
        detail: 'The most common error in this section is forgetting the extra division by $\\frac{dx}{dt}$: $\\frac{d^2y}{dx^2}$ is **not** simply $\\frac{g\'\'(t)}{f\'\'(t)}$. The sign of the second derivative determines concavity exactly as in Chapter 4.',
      },
      {
        term: 'Horizontal and vertical tangents',
        kind: 'method',
        statement: 'A parametric curve has a **horizontal tangent** where $\\frac{dy}{dt} = 0$ and $\\frac{dx}{dt} \\ne 0$, and a **vertical tangent** where $\\frac{dx}{dt} = 0$ and $\\frac{dy}{dt} \\ne 0$.',
        detail: 'If both derivatives vanish simultaneously, no conclusion can be drawn without closer analysis — the point may be a cusp (as on the cycloid), a smooth point with a perfectly well-defined tangent, or a corner.',
      },
      {
        term: 'Area under a parametric curve',
        kind: 'theorem',
        statement: 'If a parametric curve is traversed exactly once, left to right, as $t$ increases from $\\alpha$ to $\\beta$, the area under the curve and above the $x$-axis is $$A = \\int_\\alpha^\\beta y\\,dx = \\int_\\alpha^\\beta g(t)\\,f\'(t)\\,dt.$$',
        detail: 'This is the substitution rule applied to the familiar area integral from Chapter 6, replacing $dx$ with $f\'(t)\\,dt$. **Direction matters**: if the curve is traversed from right to left, the integral comes out negative and the limits must be swapped — the formula assumes increasing $x$ along the traversal.',
      },
      {
        term: 'Arc length of a parametric curve',
        kind: 'theorem',
        statement: 'If a curve is traversed exactly once as $t$ goes from $\\alpha$ to $\\beta$ by $x = f(t)$, $y = g(t)$, with $f\'$ and $g\'$ continuous, its length is $$L = \\int_\\alpha^\\beta \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt.$$',
        detail: 'The formula comes from the polygonal approximation of Section 8.1 applied to parameter increments: a small piece of curve has length $\\sqrt{\\Delta x^2 + \\Delta y^2} \\approx \\sqrt{f\'(t)^2 + g\'(t)^2}\\,\\Delta t$, and the Riemann sum limit gives the integral. Unlike the area formula, this one is unaffected by the direction of travel, since the integrand involves squares.',
      },
      {
        term: 'Surface area of revolution',
        kind: 'theorem',
        statement: 'Rotating a parametric curve about the $x$-axis gives surface area $$S = \\int_\\alpha^\\beta 2\\pi y\\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt;$$ about the $y$-axis the factor becomes $2\\pi x$.',
        detail: 'This is the surface-of-revolution formula $S = \\int 2\\pi y\\,ds$ from Section 8.2 with the arc length element $ds$ expressed in terms of the parameter. The factor $2\\pi y$ (or $2\\pi x$) is the circumference of the circle swept by the revolving point — the band of surface generated by a tiny arc of length $ds$.',
      },
    ],
    examples: [
      {
        title: 'A tangent line from parametric derivatives',
        problem: 'The curve $x = e^t\\sin t$, $y = e^{2t}$ passes through a point corresponding to $t = 0$. Find an equation of the tangent line there, and the value of $\\frac{d^2y}{dx^2}$.',
        steps: [
          { label: 'Step 1: Compute the component derivatives', text: '$\\frac{dy}{dt} = 2e^{2t}$ and, by the product rule, $\\frac{dx}{dt} = e^t(\\cos t + \\sin t)$.' },
          { label: 'Step 2: Form the slope quotient', text: '$\\frac{dy}{dx} = \\frac{2e^{2t}}{e^t(\\cos t + \\sin t)} = \\frac{2e^t}{\\cos t + \\sin t}$, valid where $\\cos t + \\sin t \\ne 0$.' },
          { label: 'Step 3: Evaluate at the point', text: 'At $t = 0$ the curve is at $(x, y) = (0, 1)$ and the slope is $\\frac{2e^0}{\\cos 0 + \\sin 0} = \\frac{2}{1} = 2$.' },
          { label: 'Step 4: Write the tangent line', text: 'Point-slope form with slope $2$ through $(0, 1)$: $y = 2x + 1$.' },
          { label: 'Step 5: Second derivative', text: 'Differentiate the slope with respect to $t$ and divide by $\\frac{dx}{dt}$: $\\frac{d}{dt}\\left(\\frac{2e^t}{\\cos t + \\sin t}\\right) = \\frac{2e^t(\\cos t + \\sin t) - 2e^t(-\\sin t + \\cos t)}{(\\cos t + \\sin t)^2} = \\frac{4e^t\\sin t}{(\\cos t + \\sin t)^2}$, so $\\frac{d^2y}{dx^2} = \\frac{4e^t\\sin t}{(\\cos t + \\sin t)^2} \\cdot \\frac{1}{e^t(\\cos t + \\sin t)} = \\frac{4\\sin t}{(\\cos t + \\sin t)^3}$, which equals $0$ at $t = 0$.' },
        ],
        result: 'The tangent line at $(0, 1)$ is $y = 2x + 1$, and the second derivative $\\frac{4\\sin t}{(\\cos t + \\sin t)^3}$ is $0$ there, so the curve is momentarily neither concave up nor down at the point.',
      },
      {
        title: 'Area under one arch of the cycloid',
        problem: 'Find the area under one arch of the cycloid $x = r(\\theta - \\sin\\theta)$, $y = r(1 - \\cos\\theta)$, $0 \\le \\theta \\le 2\\pi$.',
        steps: [
          { label: 'Step 1: Set up the parametric area integral', text: 'One arch is traversed left to right as $\\theta$ goes from $0$ to $2\\pi$ (since $\\frac{dx}{d\\theta} = r(1 - \\cos\\theta) \\ge 0$), so $A = \\int_0^{2\\pi} y\\,\\frac{dx}{d\\theta}\\,d\\theta = \\int_0^{2\\pi} r(1-\\cos\\theta)\\cdot r(1-\\cos\\theta)\\,d\\theta$.' },
          { label: 'Step 2: Expand the integrand', text: '$A = r^2\\int_0^{2\\pi}(1 - \\cos\\theta)^2 d\\theta = r^2\\int_0^{2\\pi}\\left(1 - 2\\cos\\theta + \\cos^2\\theta\\right)d\\theta$.' },
          { label: 'Step 3: Integrate term by term', text: 'Using the half-angle identity $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$: $\\int_0^{2\\pi} 1\\,d\\theta = 2\\pi$, $\\int_0^{2\\pi}\\cos\\theta\\,d\\theta = 0$, and $\\int_0^{2\\pi}\\cos^2\\theta\\,d\\theta = \\pi$, so $A = r^2(2\\pi - 0 + \\pi) = 3\\pi r^2$.' },
          { label: 'Step 4: Interpret the result', text: 'The area under one arch is exactly three times the area $\\pi r^2$ of the generating circle — a fact Galileo suspected by weighing paper cutouts of the curve.' },
        ],
        result: '$A = 3\\pi r^2$: three rolling circles’ worth of area fits under each arch.',
      },
      {
        title: 'Arc length of one arch of the cycloid',
        problem: 'Find the length of one arch of the cycloid $x = r(\\theta - \\sin\\theta)$, $y = r(1 - \\cos\\theta)$.',
        steps: [
          { label: 'Step 1: Compute the component derivatives', text: '$\\frac{dx}{d\\theta} = r(1 - \\cos\\theta)$ and $\\frac{dy}{d\\theta} = r\\sin\\theta$.' },
          { label: 'Step 2: Form the arc length integrand', text: '$\\left(\\frac{dx}{d\\theta}\\right)^2 + \\left(\\frac{dy}{d\\theta}\\right)^2 = r^2\\left[(1-\\cos\\theta)^2 + \\sin^2\\theta\\right] = r^2\\left[2 - 2\\cos\\theta\\right]$.' },
          { label: 'Step 3: Use the half-angle identity', text: 'Since $1 - \\cos\\theta = 2\\sin^2\\!\\frac{\\theta}{2}$, the square root becomes $\\sqrt{4r^2\\sin^2\\!\\frac{\\theta}{2}} = 2r\\sin\\!\\frac{\\theta}{2}$, which is nonnegative on $0 \\le \\theta \\le 2\\pi$ — no absolute value issues.' },
          { label: 'Step 4: Integrate', text: '$L = \\int_0^{2\\pi} 2r\\sin\\!\\frac{\\theta}{2}\\,d\\theta = 2r\\left[-2\\cos\\!\\frac{\\theta}{2}\\right]_0^{2\\pi} = 2r\\left[-2\\cos\\pi + 2\\cos 0\\right] = 2r(2 + 2) = 8r$.' },
        ],
        result: 'One arch of the cycloid has length exactly $8r$ — four diameters of the rolling circle, a result first proved by Christopher Wren in 1658.',
      },
    ],
    keyTakeaways: [
      'Slopes come from the parameter through the Chain Rule: $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$; a second division by $\\frac{dx}{dt}$ produces $\\frac{d^2y}{dx^2}$.',
      'Horizontal tangents occur where $\\frac{dy}{dt} = 0$ with $\\frac{dx}{dt} \\ne 0$; vertical tangents where $\\frac{dx}{dt} = 0$ with $\\frac{dy}{dt} \\ne 0$; if both vanish, investigate the point directly.',
      'Area requires tracking the traversal direction: $A = \\int_\\alpha^\\beta y(t)\\,x\'(t)\\,dt$ for a left-to-right trace, with limits swapped otherwise.',
      'Arc length $L = \\int_\\alpha^\\beta \\sqrt{x\'(t)^2 + y\'(t)^2}\\,dt$ and surface area $S = \\int 2\\pi y\\,ds$ (or $2\\pi x\\,ds$) transfer to parametric curves by substituting $ds = \\sqrt{x\'(t)^2 + y\'(t)^2}\\,dt$.',
      'The cycloid is the benchmark example: area $3\\pi r^2$ and length $8r$ under (and along) each arch.',
      'Every formula here is a preview of Chapter 13, where space curves $\\mathbf{r}(t) = \\langle f(t), g(t), h(t)\\rangle$ are differentiated and integrated componentwise.',
    ],
    quiz: [
      {
        q: 'For a parametric curve $x = f(t)$, $y = g(t)$, the slope $\\frac{dy}{dx}$ equals:',
        options: ['$\\frac{f\'(t)}{g\'(t)}$', '$\\frac{g\'(t)}{f\'(t)}$', '$g\'(t)f\'(t)$', '$\\frac{g\'\'(t)}{f\'\'(t)}$'],
        answer: 1,
        explanation: 'By the Chain Rule $\\frac{dy}{dt} = \\frac{dy}{dx}\\frac{dx}{dt}$, so $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{g\'(t)}{f\'(t)}$ — the $y$-derivative on top.',
      },
      {
        q: 'A parametric curve can have a vertical tangent line at a parameter value $t_0$ where:',
        options: [`$\\frac{dy}{dt} = 0$ and $\\frac{dx}{dt} \\ne 0$`, `$\\frac{dx}{dt} = 0$ and $\\frac{dy}{dt} \\ne 0$`, 'Both $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$ are nonzero', 'Both $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$ equal zero'],
        answer: 1,
        explanation: 'The slope $\\frac{g\'}{f\'}$ grows without bound when the denominator vanishes while the numerator stays nonzero — a vertical tangent.',
      },
      {
        q: 'The area under one arch of the cycloid generated by a circle of radius $r$ equals:',
        options: [`$\\pi r^2$`, `$2\\pi r^2$`, `$3\\pi r^2$`, `$8r$`],
        answer: 2,
        explanation: 'Computing $A = \\int_0^{2\\pi} r^2(1-\\cos\\theta)^2 d\\theta$ gives $3\\pi r^2$ — exactly three times the rolling circle’s area. ($8r$ is the arch length, not its area.)',
      },
      {
        q: 'When a parametric curve is traversed from right to left as $t$ increases from $\\alpha$ to $\\beta$, the integral $\\int_\\alpha^\\beta y(t)\\,x\'(t)\\,dt$ computes:',
        options: ['The area under the curve directly', 'The negative of the area, so the limits must be swapped', 'The arc length of the curve', 'Zero, always'],
        answer: 1,
        explanation: 'The area formula assumes increasing $x$; tracing backwards makes $dx$ negative and the integral comes out with the opposite sign, so swap the limits to recover the geometric area.',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.3
  {
    sectionId: 'calc-ch10-s3',
    readingTime: 8,
    intro: 'Some of the most beautiful curves in mathematics — cardioids, limaçons, rose curves — are almost impossible to write as $y = f(x)$, yet have one-line descriptions in polar coordinates, where a point is located by distance and direction from a fixed pole. This section builds fluency in plotting, converting, and exploiting the symmetry of polar curves.',
    objectives: [
      'Define polar coordinates, including negative radii, and explain why a point has infinitely many polar representations',
      'Convert points and equations between polar and rectangular coordinates',
      'Use the three symmetry tests to streamline curve sketching',
      'Recognize and sketch the standard families: circles, cardioids, limaçons, rose curves and spirals',
    ],
    concepts: [
      {
        term: 'Polar coordinates',
        kind: 'definition',
        statement: 'A point $P$ in the plane is located by a directed distance $r$ from a fixed point $O$ (the **pole**, or origin) and an angle $\\theta$ measured from a fixed ray (the **polar axis**, drawn to the right), written $(r, \\theta)$.',
        detail: 'Conventionally $r \\ge 0$ and $0 \\le \\theta < 2\\pi$, but every ordered pair works: a **negative $r$** places the point $|r|$ units in the direction opposite to $\\theta$, that is, at angle $\\theta + \\pi$. This is the source of polar curves’ most counterintuitive behavior.',
      },
      {
        term: 'Multiple representations of one point',
        kind: 'insight',
        statement: 'Every point has infinitely many polar representations: $(r, \\theta) = (r, \\theta + 2\\pi n) = (-r, \\theta + \\pi + 2\\pi n)$ for any integer $n$; the pole has coordinates $(0, \\theta)$ for **every** angle $\\theta$.',
        detail: 'This redundancy is the price of the system’s simplicity, and it is why polar curves often trace over themselves — the cardioid with a cusp at the pole, or the circle $r = 2\\cos\\theta$ traced twice as $\\theta$ runs from $0$ to $2\\pi$. Plotting software and area formulas must both account for it.',
      },
      {
        term: 'Conversion between coordinate systems',
        kind: 'law',
        statement: 'To convert polar to rectangular: $x = r\\cos\\theta$ and $y = r\\sin\\theta$. To convert rectangular to polar: $r^2 = x^2 + y^2$ and $\\tan\\theta = \\frac{y}{x}$ (with the quadrant of $\\theta$ chosen to match the signs of $x$ and $y$).',
        detail: 'The first pair is just the definition of cosine and sine in a right triangle with legs $x$ and $y$ and hypotenuse $r$. Going backwards, $\\tan\\theta = \\frac{y}{x}$ determines $\\theta$ only up to $\\pi$, so always check that the point $(x, y)$ lies in the direction you claim — for instance $(1, -1)$ has $\\theta = -\\frac{\\pi}{4}$, not $\\frac{3\\pi}{4}$.',
      },
      {
        term: 'Symmetry tests for polar curves',
        kind: 'theorem',
        statement: 'A polar curve is symmetric about: the **polar axis** ($\\theta = 0$) if the equation is unchanged under $\\theta \\to -\\theta$ or $\\theta \\to \\pi - \\theta$ with $r \\to -r$; the line $\\theta = \\frac{\\pi}{2}$ if unchanged under $\\theta \\to \\pi - \\theta$ or $\\theta \\to -\\theta$ with $r \\to -r$; the **pole** if unchanged under $r \\to -r$ or $\\theta \\to \\theta + \\pi$.',
        detail: 'Unlike the rectangular symmetry tests, these conditions are sufficient but **not necessary** — a curve can be symmetric even when every test fails, because of the multiple representations of each point. When one test succeeds, use it to plot only half the curve and reflect.',
      },
      {
        term: 'Rose curves',
        kind: 'definition',
        statement: 'A **rose** has equation $r = a\\cos n\\theta$ or $r = a\\sin n\\theta$ with $n$ a positive integer: if $n$ is **odd** the curve has $n$ petals; if $n$ is **even** it has $2n$ petals. All petals have length $|a|$.',
        detail: 'The parity effect comes from how often the radius returns to zero: for odd $n$ a full rotation traces each petal exactly once, while for even $n$ the first half rotation lays down all $2n$ petals and the second half retraces them. The pole-to-petal pattern makes roses the standard example for polar area computations in Section 10.4.',
      },
      {
        term: 'Limaçons',
        kind: 'definition',
        statement: 'A **limaçon** has equation $r = a \\pm b\\cos\\theta$ or $r = a \\pm b\\sin\\theta$. Its shape is decided by the ratio $\\left|\\frac{a}{b}\\right|$: greater than $2$ — convex; between $1$ and $2$ — dimpled; equal to $1$ — **cardioid** (one cusp); less than $1$ — inner loop.',
        detail: 'The cardioid $r = a(1 + \\cos\\theta)$ is the most famous member: it is also the path of a point on a circle rolling around an equal circle, and its maximum radius is $2a$ while it cusps at the pole. Limaçons with inner loops are traced by radius functions that go negative — plotting software must handle this, and humans must remember the $\\theta + \\pi$ rule.',
      },
      {
        term: 'Circles, lines and spirals',
        kind: 'method',
        statement: '$r = a$ is a circle of radius $|a|$ centered at the pole; $\\theta = c$ is a line through the pole; $r = 2a\\cos\\theta$ and $r = 2a\\sin\\theta$ are circles of radius $|a|$ through the pole with centers $(a, 0)$ and $(0, a)$; $r = \\theta$ is the Archimedean spiral, $r = e^{c\\theta}$ the logarithmic spiral.',
        detail: 'The circles through the pole are worth verifying once by multiplying by $r$: $r^2 = 2ar\\cos\\theta$ becomes $x^2 + y^2 = 2ax$, that is, $(x - a)^2 + y^2 = a^2$. A **spiral** is any curve whose radius changes monotonically with the angle — impossible to describe as a single function of $x$, and trivial in polar form.',
      },
    ],
    examples: [
      {
        title: 'Converting points between systems',
        problem: '(a) Convert the rectangular point $(1, -1)$ to polar coordinates. (b) Convert the polar point $\\left(2, \\frac{5\\pi}{6}\\right)$ to rectangular coordinates.',
        steps: [
          { label: 'Step 1: Radius from Pythagoras', text: 'For $(1, -1)$: $r = \\sqrt{x^2 + y^2} = \\sqrt{1 + 1} = \\sqrt{2}$.' },
          { label: 'Step 2: Angle with quadrant check', text: '$\\tan\\theta = \\frac{-1}{1} = -1$, and the point lies in the fourth quadrant, so $\\theta = -\\frac{\\pi}{4}$ (equivalently $\\frac{7\\pi}{4}$): the polar form is $\\left(\\sqrt{2}, -\\frac{\\pi}{4}\\right)$.' },
          { label: 'Step 3: Polar to rectangular setup', text: 'For $\\left(2, \\frac{5\\pi}{6}\\right)$ use $x = r\\cos\\theta$, $y = r\\sin\\theta$ with $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$ and $\\sin\\frac{5\\pi}{6} = \\frac{1}{2}$.' },
          { label: 'Step 4: Multiply out', text: '$x = 2\\left(-\\frac{\\sqrt{3}}{2}\\right) = -\\sqrt{3}$ and $y = 2\\left(\\frac{1}{2}\\right) = 1$, so the rectangular point is $(-\\sqrt{3}, 1)$.' },
        ],
        result: '$(1, -1) = \\left(\\sqrt{2}, -\\frac{\\pi}{4}\\right)$ and $\\left(2, \\frac{5\\pi}{6}\\right) = (-\\sqrt{3}, 1)$; drawing both checks confirms each angle points into the correct quadrant.',
      },
      {
        title: 'Sketching a cardioid',
        problem: 'Sketch the curve $r = 1 + \\sin\\theta$.',
        steps: [
          { label: 'Step 1: Test for symmetry', text: 'Replacing $\\theta$ by $\\pi - \\theta$ changes $\\sin\\theta$ to $\\sin\\theta$, so the equation is unchanged — the curve is symmetric about the line $\\theta = \\frac{\\pi}{2}$ (the vertical axis). Plot the right... rather, the upper half first.' },
          { label: 'Step 2: Tabulate key angles', text: '$\\theta = 0$: $r = 1$; $\\theta = \\frac{\\pi}{2}$: $r = 2$; $\\theta = \\pi$: $r = 1$; $\\theta = \\frac{3\\pi}{2}$: $r = 0$. The radius also passes through $r = \\frac{3}{2}$ at $\\theta = \\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$.' },
          { label: 'Step 3: Assemble the shape', text: 'Starting at $(1, 0)$ on the polar axis, the radius swells to its maximum $2$ at $\\theta = \\frac{\\pi}{2}$ (top of the curve), shrinks back to $1$ at $\\theta = \\pi$, and collapses to $r = 0$ at $\\theta = \\frac{3\\pi}{2}$ — a cusp at the pole.' },
          { label: 'Step 4: Identify the family', text: 'With $a = b = 1$ the ratio $\\left|\\frac{a}{b}\\right|$ equals $1$: this is a **cardioid**, heart-shaped, bulging upward with its cusp at the pole, and symmetric about the vertical axis.' },
        ],
        result: 'The cardioid $r = 1 + \\sin\\theta$ has maximum radius $2$ at the top, passes through $(1, 0)$ and $(-1, \\pi)$, and cusps at the pole at $\\theta = \\frac{3\\pi}{2}$.',
      },
      {
        title: 'Sketching a four-petaled rose',
        problem: 'Sketch the curve $r = \\cos 2\\theta$.',
        steps: [
          { label: 'Step 1: Count the petals', text: 'The coefficient $n = 2$ is even, so the rose has $2n = 4$ petals, each of length $a = 1$.' },
          { label: 'Step 2: Find where petals meet', text: 'The radius vanishes where $\\cos 2\\theta = 0$: $\\theta = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$. These four directions are the gaps between petals.' },
          { label: 'Step 3: Locate the petal tips', text: 'The radius is maximal ($r = 1$) when $2\\theta = k\\pi$, i.e. $\\theta = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$: petal tips at the four cardinal points $(1, 0)$, $(0, 1)$, $(-1, 0)$, $(0, -1)$.' },
          { label: 'Step 4: Watch for negative radii', text: 'On $\\frac{\\pi}{4} < \\theta < \\frac{3\\pi}{4}$ the factor $\\cos 2\\theta$ is negative, plotting points across the pole — this is precisely what fills in the left and bottom petals, and it is why the full curve already appears by $\\theta = \\pi$.' },
        ],
        result: 'Four petals of length $1$ along the coordinate axes, meeting at the pole in gaps of $45°$; the curve is symmetric about both the polar axis and the line $\\theta = \\frac{\\pi}{2}$.',
      },
    ],
    keyTakeaways: [
      'A point is located by $(r, \\theta)$: directed distance from the pole and angle from the polar axis; negative $r$ means go the opposite way.',
      'Conversion runs through $x = r\\cos\\theta$, $y = r\\sin\\theta$ and $r^2 = x^2 + y^2$, $\\tan\\theta = \\frac{y}{x}$ — always verify the quadrant of $\\theta$.',
      'The polar symmetry tests (polar axis, line $\\theta = \\frac{\\pi}{2}$, pole) are sufficient but not necessary: failing them does not disprove symmetry.',
      'Roses $r = a\\cos n\\theta$ have $n$ petals for odd $n$ and $2n$ for even $n$; limaçons $r = a \\pm b\\sin\\theta$ run from convex ($\\frac{a}{b} > 2$) through dimpled to cardioid ($\\frac{a}{b} = 1$) to looped ($\\frac{a}{b} < 1$).',
      '$r = 2a\\cos\\theta$ and $r = 2a\\sin\\theta$ are circles through the pole — convert once by multiplying by $r$ and completing the square.',
      'Sketching strategy: symmetry test first, then a short table at multiples of $\\frac{\\pi}{6}$ or $\\frac{\\pi}{4}$, marking where $r$ hits $0$ and its extreme values.',
    ],
    quiz: [
      {
        q: 'The rectangular point $(-1, \\sqrt{3})$ has polar coordinates:',
        options: [`$\\left(2, \\frac{2\\pi}{3}\\right)$`, `$\\left(2, \\frac{4\\pi}{3}\\right)$`, `$\\left(\\sqrt{2}, \\frac{3\\pi}{4}\\right)$`, `$\\left(2, \\frac{5\\pi}{3}\\right)$`],
        answer: 0,
        explanation: '$r = \\sqrt{1 + 3} = 2$ and the point is in the second quadrant, where $\\tan\\theta = -\\sqrt{3}$ gives $\\theta = \\frac{2\\pi}{3}$: indeed $2\\cos\\frac{2\\pi}{3} = -1$ and $2\\sin\\frac{2\\pi}{3} = \\sqrt{3}$.',
      },
      {
        q: 'The polar curve $r = 3\\cos 5\\theta$ is a rose with how many petals?',
        options: ['5 petals of length 3', '10 petals of length 3', '5 petals of length 5', '3 petals of length 5'],
        answer: 0,
        explanation: 'For $r = a\\cos n\\theta$ with $n$ odd, the rose has exactly $n$ petals of length $|a|$ — here $5$ petals of length $3$.',
      },
      {
        q: 'The limaçon $r = 2 + 4\\cos\\theta$ (ratio $\\frac{a}{b} = \\frac{1}{2}$) has:',
        options: ['A dimple', 'A convex shape', 'A cusp at the pole', 'An inner loop'],
        answer: 3,
        explanation: 'When $\\left|\\frac{a}{b}\\right| < 1$ the radius changes sign, and the curve loops back inside itself — an inner loop, traced over the interval where $2 + 4\\cos\\theta < 0$.',
      },
      {
        q: 'The curve $r = 4\\sin\\theta$ is:',
        options: ['A line through the pole', 'A circle of radius $2$ centered on the vertical axis, passing through the pole', 'A four-petaled rose', 'A cardioid'],
        answer: 1,
        explanation: 'Multiply by $r$: $r^2 = 4r\\sin\\theta$ becomes $x^2 + y^2 = 4y$, that is, $x^2 + (y-2)^2 = 4$ — a circle of radius $2$ centered at $(0, 2)$ through the pole.',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.4
  {
    sectionId: 'calc-ch10-s4',
    readingTime: 8,
    intro: 'Polar curves enclose regions shaped like fans and petals, for which rectangular slicing is clumsy and radial slicing is perfect. Subdividing into thin circular sectors leads in one step to the polar area formula, and the same setup converts the arc length formula of Section 10.2 to polar form.',
    objectives: [
      'Derive the polar area formula $A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta$ from circular sectors',
      'Compute areas enclosed by cardioids, roses and other polar curves, using symmetry where it helps',
      'Compute areas between two polar curves',
      'Compute arc length in polar coordinates',
    ],
    concepts: [
      {
        term: 'Area of a circular sector',
        kind: 'insight',
        statement: 'A wedge of a circle of radius $r$ cut by angle $\\Delta\\theta$ (in radians) has area $\\frac{1}{2}r^2\\Delta\\theta$ — the fraction $\\frac{\\Delta\\theta}{2\\pi}$ of the whole circle’s area $\\pi r^2$.',
        detail: 'This is the geometric atom of the whole section: a region bounded by a polar curve is sliced into thin sectors of angle $d\\theta$ and radius approximately $f(\\theta)$, each contributing $\\frac{1}{2}f(\\theta)^2 d\\theta$. The formula that follows is the limit of these Riemann sums, in exactly the spirit of the Riemann lab’s slice-and-sum pictures.',
      },
      {
        term: 'Area in polar coordinates',
        kind: 'theorem',
        statement: 'The area of the region bounded by the polar curve $r = f(\\theta)$ and the rays $\\theta = \\alpha$ and $\\theta = \\beta$ is $$A = \\int_\\alpha^\\beta \\frac{1}{2}\\left[f(\\theta)\\right]^2 d\\theta = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta,$$ where $0 \\le \\beta - \\alpha \\le 2\\pi$ and $f$ is nonnegative on $[\\alpha, \\beta]$.',
        detail: 'Compare with the rectangular formula $A = \\int y\\,dx$: the $\\frac{1}{2}$ and the square appear because sectors, not rectangles, are the basic slice. The restriction $\\beta - \\alpha \\le 2\\pi$ prevents counting overlapping regions more than once when a curve is retraced.',
      },
      {
        term: 'Area between polar curves',
        kind: 'method',
        statement: 'The area between an outer curve $r = f(\\theta)$ and an inner curve $r = g(\\theta)$ over $\\alpha \\le \\theta \\le \\beta$ is $$A = \\frac{1}{2}\\int_\\alpha^\\beta \\left(\\left[f(\\theta)\\right]^2 - \\left[g(\\theta)\\right]^2\\right) d\\theta,$$ with the curves identified so that $f(\\theta) \\ge g(\\theta) \\ge 0$.',
        detail: 'Each thin sector now has a bite taken out of it: outer radius $f(\\theta)$, inner radius $g(\\theta)$, contributing $\\frac{1}{2}\\left(f^2 - g^2\\right)d\\theta$. Finding where the curves intersect determines $\\alpha$ and $\\beta$ — set the two radii equal, and beware of intersections that occur at the pole or at different angles.',
      },
      {
        term: 'Finding limits from pole crossings',
        kind: 'method',
        statement: 'To find the natural bounds of a single petal or loop, solve $f(\\theta) = 0$: consecutive zeros of the radius bracket exactly one petal of a rose or one loop of a limaçon.',
        detail: 'For example, the petal of $r = \\cos 2\\theta$ pointing along $\\theta = 0$ is traced for $-\\frac{\\pi}{4} \\le \\theta \\le \\frac{\\pi}{4}$, the angles between the two nearest zeros. For an inner loop of a limaçon, solve $f(\\theta) = 0$ to find where the loop detaches from the pole and integrate over just that interval.',
      },
      {
        term: 'Arc length in polar coordinates',
        kind: 'theorem',
        statement: 'The length of the polar curve $r = f(\\theta)$, $\\alpha \\le \\theta \\le \\beta$, is $$L = \\int_\\alpha^\\beta \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta.$$',
        detail: 'Treat the curve as parametric with $x = r\\cos\\theta$, $y = r\\sin\\theta$: the product rule gives $\\frac{dx}{d\\theta} = \\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta$ and similarly for $y$, and adding the squares collapses (via $\\cos^2 + \\sin^2 = 1$) to $r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2$. Polar arc length is a parametric arc length in disguise.',
      },
      {
        term: 'The double-tracing pitfall',
        kind: 'insight',
        statement: 'If a polar curve is traced more than once on the integration interval, the area integral double-counts: integrate over the smallest interval that traces each piece of boundary exactly once.',
        detail: 'The circle $r = 2a\\cos\\theta$ is fully traced as $\\theta$ runs from $-\\frac{\\pi}{2}$ to $\\frac{\\pi}{2}$; integrating from $0$ to $2\\pi$ would count its area twice. Similarly, an even rose needs only a half rotation, while a limaçon’s inner and outer loops need separate intervals.',
      },
    ],
    examples: [
      {
        title: 'Area enclosed by a cardioid',
        problem: 'Find the area enclosed by the cardioid $r = 1 + \\cos\\theta$.',
        steps: [
          { label: 'Step 1: Use symmetry', text: 'The curve is symmetric about the polar axis, so compute the area for $0 \\le \\theta \\le \\pi$ and double it: $A = 2 \\cdot \\frac{1}{2}\\int_0^\\pi (1+\\cos\\theta)^2 d\\theta = \\int_0^\\pi (1+\\cos\\theta)^2 d\\theta$.' },
          { label: 'Step 2: Expand the integrand', text: '$(1 + \\cos\\theta)^2 = 1 + 2\\cos\\theta + \\cos^2\\theta = 1 + 2\\cos\\theta + \\frac{1 + \\cos 2\\theta}{2}$.' },
          { label: 'Step 3: Integrate', text: '$\\int_0^\\pi\\left(\\frac{3}{2} + 2\\cos\\theta + \\frac{1}{2}\\cos 2\\theta\\right) d\\theta = \\left[\\frac{3\\theta}{2} + 2\\sin\\theta + \\frac{\\sin 2\\theta}{4}\\right]_0^\\pi = \\frac{3\\pi}{2} + 0 + 0 = \\frac{3\\pi}{2}$.' },
          { label: 'Step 4: Generalize', text: 'Scaling $r = a(1 + \\cos\\theta)$ multiplies areas by $a^2$, so the general cardioid encloses $\\frac{3\\pi a^2}{2}$ — six times the area of the circle of diameter $a$ that generates it.' },
        ],
        result: 'The cardioid $r = 1 + \\cos\\theta$ encloses area $\\frac{3\\pi}{2}$; in general $r = a(1+\\cos\\theta)$ encloses $\\frac{3\\pi a^2}{2}$.',
      },
      {
        title: 'Area of one petal of a rose',
        problem: 'Find the area of one petal of the rose $r = \\cos 2\\theta$, and confirm the total area of all four petals.',
        steps: [
          { label: 'Step 1: Bracket one petal', text: 'The radius vanishes where $\\cos 2\\theta = 0$. The petal along the polar axis is traced for $-\\frac{\\pi}{4} \\le \\theta \\le \\frac{\\pi}{4}$.' },
          { label: 'Step 2: Set up the sector integral', text: '$A = \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4} \\cos^2 2\\theta\\,d\\theta$. By symmetry about $\\theta = 0$ (the integrand is even), this is $\\int_0^{\\pi/4}\\cos^2 2\\theta\\,d\\theta$.' },
          { label: 'Step 3: Integrate with the half-angle identity', text: 'With $u = 2\\theta$: $\\int \\cos^2 2\\theta\\,d\\theta = \\frac{\\theta}{2} + \\frac{\\sin 4\\theta}{8}$. Evaluated from $0$ to $\\frac{\\pi}{4}$: $\\frac{\\pi}{8} + \\frac{\\sin\\pi}{8} - 0 = \\frac{\\pi}{8}$.' },
          { label: 'Step 4: Scale to the whole rose', text: 'One petal has area $\\frac{\\pi}{8}$; the four congruent petals give a total area of $4 \\cdot \\frac{\\pi}{8} = \\frac{\\pi}{2}$. Note that integrating over $0 \\le \\theta \\le 2\\pi$ blindly would give $\\pi$ — the rose is traced twice on that interval.' },
        ],
        result: 'Each petal has area $\\frac{\\pi}{8}$ and the entire rose $r = \\cos 2\\theta$ encloses $\\frac{\\pi}{2}$.',
      },
      {
        title: 'Arc length of a cardioid',
        problem: 'Find the length of the cardioid $r = 1 + \\cos\\theta$.',
        steps: [
          { label: 'Step 1: Compute $\\frac{dr}{d\\theta}$', text: 'Differentiating, $\\frac{dr}{d\\theta} = -\\sin\\theta$.' },
          { label: 'Step 2: Assemble the integrand', text: '$r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2 = (1 + \\cos\\theta)^2 + \\sin^2\\theta = 1 + 2\\cos\\theta + \\cos^2\\theta + \\sin^2\\theta = 2 + 2\\cos\\theta$.' },
          { label: 'Step 3: Simplify with a half-angle identity', text: '$2 + 2\\cos\\theta = 4\\cos^2\\!\\frac{\\theta}{2}$, so the square root is $2\\left|\\cos\\frac{\\theta}{2}\\right|$; on $0 \\le \\theta \\le 2\\pi$ the cosine of $\\frac{\\theta}{2}$ is nonnegative, dropping the absolute value.' },
          { label: 'Step 4: Integrate', text: '$L = \\int_0^{2\\pi} 2\\cos\\frac{\\theta}{2}\\,d\\theta = 2\\left[2\\sin\\frac{\\theta}{2}\\right]_0^{2\\pi} = 4(\\sin\\pi - \\sin 0) = 8$.' },
        ],
        result: 'The unit cardioid $r = 1 + \\cos\\theta$ has perimeter exactly $8$ — the same number as the cycloid arch of Section 10.2, a pleasant coincidence of the half-angle identity.',
      },
    ],
    keyTakeaways: [
      'Polar area comes from circular sectors: $A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta$, where $[\\alpha, \\beta]$ traces the boundary exactly once.',
      'Solve $r = 0$ to find the angles that bracket one petal or one loop; multiply by the number of congruent pieces instead of integrating over a retraced interval.',
      'Areas between polar curves subtract sector from sector: $\\frac{1}{2}\\int\\left(r_{\\text{outer}}^2 - r_{\\text{inner}}^2\\right)d\\theta$.',
      'Polar arc length is $L = \\int\\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta$ — derived by parametrizing with $x = r\\cos\\theta$, $y = r\\sin\\theta$.',
      'Benchmark results: cardioid $r = a(1+\\cos\\theta)$ has area $\\frac{3\\pi a^2}{2}$ and perimeter $8a$; the rose $r = \\cos 2\\theta$ has four petals each of area $\\frac{\\pi}{8}$ (for $a = 1$).',
      'The $\\frac{1}{2}$ and the square are the fingerprint of radial slicing; if a polar area problem lacks them, the setup is probably a rectangular one in disguise.',
    ],
    quiz: [
      {
        q: 'The area enclosed by the cardioid $r = 2(1 + \\cos\\theta)$ is:',
        options: [`$3\\pi$`, `$6\\pi$`, `$\\frac{3\\pi}{2}$`, `$8\\pi$`],
        answer: 1,
        explanation: 'With $a = 2$, the area is $\\frac{3\\pi a^2}{2} = \\frac{3\\pi \\cdot 4}{2} = 6\\pi$ — areas scale with the square of the radius.',
      },
      {
        q: 'To find the area of a single petal of the rose $r = \\sin 3\\theta$, the correct integration interval is:',
        options: [`$0 \\le \\theta \\le 2\\pi$`, `$0 \\le \\theta \\le \\frac{\\pi}{3}$`, `$0 \\le \\theta \\le \\pi$`, `$0 \\le \\theta \\le \\frac{\\pi}{6}$`],
        answer: 1,
        explanation: 'Zeros of $\\sin 3\\theta$ occur at $\\theta = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\ldots$; consecutive zeros bracket one petal, so $\\left[0, \\frac{\\pi}{3}\\right]$ traces exactly one petal.',
      },
      {
        q: 'In the polar arc length formula $L = \\int_\\alpha^\\beta \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta$, the term $r^2$ comes from:',
        options: ['The area of the circular sectors', 'The angular component of the motion, $d(r\\theta)$', 'The radial direction of motion being perpendicular to the tangential direction', 'The Chain Rule applied to $\\tan\\theta$'],
        answer: 2,
        explanation: 'Moving through angle $d\\theta$ at radius $r$ travels distance $r\\,d\\theta$ perpendicular to any radial motion $dr$, so the Pythagorean sum gives $ds^2 = r^2 d\\theta^2 + dr^2$ — exactly the integrand.',
      },
      {
        q: 'A region is bounded inside the circle $r = 3$ and outside the cardioid $r = 1 + \\cos\\theta$. Its area is computed by:',
        options: [`$\\frac{1}{2}\\int_0^{2\\pi}\\left[9 - (1+\\cos\\theta)^2\\right]d\\theta$`, `$\\frac{1}{2}\\int_0^{2\\pi}\\left[(1+\\cos\\theta)^2 - 9\\right]d\\theta$`, `$\\int_0^{2\\pi}\\left(3 - (1+\\cos\\theta)\\right)d\\theta$`, `$\\frac{1}{2}\\int_0^{2\\pi}\\left[3 - (1+\\cos\\theta)\\right]^2 d\\theta$`],
        answer: 0,
        explanation: 'Subtract sector from sector, in the order outer minus inner, with each radius squared: $\\frac{1}{2}\\int\\left(r_{\\text{outer}}^2 - r_{\\text{inner}}^2\\right)d\\theta$ with $r_{\\text{outer}} = 3$ and $r_{\\text{inner}} = 1 + \\cos\\theta$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.5
  {
    sectionId: 'calc-ch10-s5',
    readingTime: 9,
    intro: 'The conic sections — parabola, ellipse, hyperbola — were studied by the ancient Greeks as slices of a cone, and two thousand years later they became the curves of the heavens: Kepler showed the planets travel ellipses with the sun at a focus. Each conic has a purely geometric description in terms of foci and directrices, and every one has a standard algebraic form that completing the square will always reveal.',
    objectives: [
      'Define each conic geometrically: focus and directrix for the parabola, two foci for the ellipse and hyperbola',
      'Derive and use the standard-form equations and identify vertices, foci, axes and asymptotes',
      'Compute eccentricity for ellipses and hyperbolas and interpret it geometrically',
      'Shift conics by completing the square and exploit their reflection properties',
    ],
    concepts: [
      {
        term: 'Conic sections',
        kind: 'definition',
        statement: 'A **conic** is the curve obtained by intersecting a double (right circular) cone with a plane that does not pass through the vertex: a circle or ellipse if the plane cuts one nappe at a closed angle, a parabola if the plane is parallel to exactly one generating line, and a hyperbola if it cuts both nappes.',
        detail: 'Degenerate cases occur when the plane passes through the vertex: a point, a line, or a pair of intersecting lines. The Greeks studied these curves for their own beauty; Kepler and Newton then found them governing planetary orbits, and today every satellite dish exploits them.',
      },
      {
        term: 'Parabola',
        kind: 'definition',
        statement: 'A **parabola** is the set of points equidistant from a fixed point $F$ (the **focus**) and a fixed line (the **directrix**). With vertex at the origin it has equation $y^2 = 4px$ (opening toward $(p, 0)$) or $x^2 = 4py$, where $p$ is the directed distance from vertex to focus.',
        detail: 'The derivation is a one-line distance equality: $\\sqrt{(x-p)^2 + y^2} = |x + p|$ squares to $y^2 = 4px$ — the focus is $(p, 0)$ and the directrix is $x = -p$. The **focal chord** perpendicular to the axis through the focus (the latus rectum) has length $|4p|$ and is a quick check on sketches: it is the width of the parabola at the focus.',
      },
      {
        term: 'Ellipse',
        kind: 'definition',
        statement: 'An **ellipse** is the set of points where the sum of distances to two foci $F_1, F_2$ is a constant $2a$ (with $a$ larger than half the focal separation). With foci $(\\pm c, 0)$ its standard form is $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ with $b^2 = a^2 - c^2$, vertices $(\\pm a, 0)$, and eccentricity $e = \\frac{c}{a} < 1$.',
        detail: 'The derivation adds the distances $\\sqrt{(x+c)^2 + y^2} + \\sqrt{(x-c)^2 + y^2} = 2a$ and simplifies; the key byproduct is $c^2 = a^2 - b^2$. The eccentricity measures shape: $e$ near $0$ is nearly circular, and $e$ near $1$ is long and thin. A circle is the special case $c = 0$ (foci coincident, $a = b$).',
      },
      {
        term: 'Hyperbola',
        kind: 'definition',
        statement: 'A **hyperbola** is the set of points where the **difference** of distances to two foci is a constant $2a$. With foci $(\\pm c, 0)$ its standard form is $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ with $c^2 = a^2 + b^2$, and it approaches the **asymptotes** $y = \\pm\\frac{b}{a}x$; eccentricity $e = \\frac{c}{a} > 1$.',
        detail: 'The sign flip in $c^2 = a^2 + b^2$ versus the ellipse’s $c^2 = a^2 - b^2$ is worth internalizing. To sketch: draw the central $2a$-by-$2b$ box, run the asymptotes through its diagonals, and open the branches from the vertices $(\\pm a, 0)$ toward the asymptotes. Applications include LORAN navigation and the long-range navigation of signals that arrive with a constant time difference.',
      },
      {
        term: 'Shifted conics',
        kind: 'method',
        statement: 'A conic centered or vertexed at $(h, k)$ appears when $x$ is replaced by $x - h$ and $y$ by $y - k$: for example $\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$. **Completing the square** in both variables converts any quadratic equation with equal coefficients on $x^2$ and $y^2$ (no $xy$ term) to one of these forms.',
        detail: 'The absence of an $xy$ term is the signature of an unrotated conic; if an $xy$ term appears, the axes of the conic are rotated relative to the coordinate axes and the classification is done after a rotation of coordinates.',
      },
      {
        term: 'Reflection properties',
        kind: 'insight',
        statement: 'Rays emitted from one focus of an ellipse reflect to the other focus; rays parallel to a parabola’s axis reflect through its focus; rays aimed at one focus of a hyperbola reflect as if from the other.',
        detail: 'These facts all follow from the equal-angle law of reflection and the geometric definitions. They explain whispering galleries (elliptical ceilings where a whisper at one focus is heard at the other), satellite dishes and telescope mirrors (parabolic), and Cassegrain telescopes that combine a parabolic primary with a hyperbolic secondary to fold the light path.',
      },
    ],
    examples: [
      {
        title: 'Finding the focus and directrix of a parabola',
        problem: 'Find the focus and directrix of the parabola $y^2 + 10x = 0$ and sketch it.',
        steps: [
          { label: 'Step 1: Put in standard form', text: 'Solve for the squared variable: $y^2 = -10x$, which matches $y^2 = 4px$ with $4p = -10$, so $p = -\\frac{5}{2}$.' },
          { label: 'Step 2: Read off the focus', text: 'Because $p < 0$ the parabola opens to the left, with focus $\\left(-\\frac{5}{2}, 0\\right)$ and directrix $x = \\frac{5}{2}$.' },
          { label: 'Step 3: Check with the latus rectum', text: 'The focal chord has length $|4p| = 10$, so the parabola is 10 units wide where it crosses the line $x = -\\frac{5}{2}$: points $\\left(-\\frac{5}{2}, \\pm 5\\right)$ lie on it, since $5^2 = -10\\left(-\\frac{5}{2}\\right)$.' },
          { label: 'Step 4: Sketch', text: 'Plot vertex $(0, 0)$, focus, directrix and the two latus rectum endpoints, then draw the parabola opening leftward from the vertex through those endpoints.' },
        ],
        result: 'Focus $\\left(-\\frac{5}{2}, 0\\right)$, directrix $x = \\frac{5}{2}$, opening left; the curve passes through $\\left(-\\frac{5}{2}, \\pm 5\\right)$.',
      },
      {
        title: 'Analyzing an ellipse',
        problem: 'Sketch $9x^2 + 16y^2 = 144$ and find its vertices, foci and eccentricity.',
        steps: [
          { label: 'Step 1: Normalize to standard form', text: 'Divide by $144$: $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$, so $a^2 = 16$, $b^2 = 9$ with $a = 4 > b = 3$ — the major axis is horizontal.' },
          { label: 'Step 2: Locate vertices and axes', text: 'Vertices $(\\pm 4, 0)$, co-vertices $(0, \\pm 3)$, major axis of length $8$ and minor axis of length $6$.' },
          { label: 'Step 3: Compute the focal distance', text: '$c^2 = a^2 - b^2 = 16 - 9 = 7$, so $c = \\sqrt{7}$ and the foci are $(\\pm\\sqrt{7}, 0)$, inside the ellipse on the major axis.' },
          { label: 'Step 4: Eccentricity', text: '$e = \\frac{c}{a} = \\frac{\\sqrt{7}}{4} \\approx 0.66$ — moderately elongated: the distance between the foci is about two-thirds of the major semi-axis.' },
        ],
        result: 'Vertices $(\\pm 4, 0)$, foci $(\\pm\\sqrt{7}, 0)$, eccentricity $\\frac{\\sqrt{7}}{4}$; every point on the ellipse has distances to the two foci summing to $2a = 8$.',
      },
      {
        title: 'Analyzing a hyperbola',
        problem: 'Sketch $9x^2 - 16y^2 = 144$ and find its vertices, foci and asymptotes.',
        steps: [
          { label: 'Step 1: Normalize', text: 'Divide by $144$: $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ with $a = 4$, $b = 3$ — branches open left and right.' },
          { label: 'Step 2: Vertices and the central box', text: 'Vertices at $(\\pm 4, 0)$; the guiding rectangle has corners $(\\pm 4, \\pm 3)$, half-width $a = 4$ and half-height $b = 3$.' },
          { label: 'Step 3: Asymptotes', text: 'The diagonals of the box give $y = \\pm\\frac{b}{a}x = \\pm\\frac{3}{4}x$. The hyperbola approaches these lines as $|x| \\to \\infty$, which is what makes sketching easy: draw the box, the asymptotes, then the branches hugging them.' },
          { label: 'Step 4: Foci', text: 'Here $c^2 = a^2 + b^2 = 16 + 9 = 25$, so $c = 5$: the foci are $(\\pm 5, 0)$, and the eccentricity is $e = \\frac{5}{4} > 1$.' },
        ],
        result: 'Vertices $(\\pm 4, 0)$, foci $(\\pm 5, 0)$, asymptotes $y = \\pm\\frac{3}{4}x$ — a 3-4-5 hyperbola; each point satisfies $|d_1 - d_2| = 2a = 8$ for its distances to the two foci.',
      },
    ],
    keyTakeaways: [
      'Parabola: points equidistant from focus and directrix; $y^2 = 4px$ places the focus at $(p, 0)$ and the directrix at $x = -p$.',
      'Ellipse: constant sum $2a$ of focal distances; $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ with $c^2 = a^2 - b^2$ and eccentricity $e = \\frac{c}{a} < 1$.',
      'Hyperbola: constant difference $2a$; $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ with $c^2 = a^2 + b^2$, asymptotes $y = \\pm\\frac{b}{a}x$, eccentricity $e = \\frac{c}{a} > 1$.',
      'Eccentricity measures shape: near $0$ nearly circular, growing toward $1$ more elongated, above $1$ a hyperbola.',
      'No $xy$ term means the axes are parallel to the coordinate axes, and completing the square in $x$ and $y$ reveals the center or vertex.',
      'Reflection properties drive the technology: parabolic dishes focus parallel rays, elliptical whispering galleries pass sound between foci, hyperbolic mirrors fold telescope paths.',
    ],
    quiz: [
      {
        q: 'The parabola $x^2 = -12y$ has focus and directrix:',
        options: ['Focus $(0, -3)$, directrix $y = 3$', 'Focus $(0, 3)$, directrix $y = -3$', 'Focus $(-3, 0)$, directrix $x = 3$', 'Focus $(0, -12)$, directrix $y = 12$'],
        answer: 0,
        explanation: 'With $4p = -12$, $p = -3$: the parabola opens downward, focus at $(p) = (0, -3)$ and directrix $y = -p = 3$.',
      },
      {
        q: 'For the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$, the foci are:',
        options: [`$(\\pm 5, 0)$`, `$(\\pm 4, 0)$`, `$(\\pm 3, 0)$`, `$(0, \\pm 3)$`],
        answer: 2,
        explanation: '$a = 5$, $b = 4$, so $c = \\sqrt{25 - 16} = 3$; the major axis is the $x$-axis, putting the foci at $(\\pm 3, 0)$.',
      },
      {
        q: 'Which relation between $a$, $b$, $c$ holds for every hyperbola?',
        options: [`$c^2 = a^2 - b^2$`, `$c^2 = a^2 + b^2$`, `$b^2 = a^2 + c^2$`, `$a^2 = b^2 + c^2$`],
        answer: 1,
        explanation: 'For hyperbolas the focal distance combines the two semi-axes additively: $c^2 = a^2 + b^2$. (The ellipse’s version subtracts: $c^2 = a^2 - b^2$.)',
      },
      {
        q: 'A satellite dish is shaped like a paraboloid so that incoming parallel signals are concentrated at one point. This works because:',
        options: ['All points of a parabola are equidistant from focus and directrix, making the path lengths equal', 'Parabolas have eccentricity exactly $1$', 'The sum of focal distances is constant', 'The reflection angle equals the incidence angle, and the geometry sends every horizontal ray to the focus'],
        answer: 3,
        explanation: 'The reflection law (angle in equals angle out) plus the focus–directrix definition forces every ray parallel to the axis to reflect through the focus — the parabola’s defining property in reverse.',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.6
  {
    sectionId: 'calc-ch10-s6',
    readingTime: 7,
    intro: 'Polar coordinates and conic sections meet in a single elegant theorem: if a conic is defined by a focus and a directrix, and the focus sits at the pole, the conic’s equation collapses to one line. Even better, the eccentricity that distinguishes parabola, ellipse and hyperbola appears directly as a coefficient — which is why astronomers describe every orbit, from circle to comet, with one formula.',
    objectives: [
      'State the focus–directrix definition of a conic with eccentricity $e$',
      'Derive the polar equation $r = \\frac{ed}{1 \\pm e\\cos\\theta}$ (and its sine variants)',
      'Classify a conic from its polar equation and compute its vertices, center and directrix',
      'Connect eccentricity to planetary and cometary orbits',
    ],
    concepts: [
      {
        term: 'Unified focus–directrix definition',
        kind: 'definition',
        statement: 'Let $F$ be a point (the **focus**), $l$ a line not containing $F$ (the **directrix**), and $e$ a positive constant (the **eccentricity**). The conic with focus $F$ and directrix $l$ is the set of points $P$ with $$\\frac{|PF|}{|Pl|} = e,$$ that is, distance to focus equals $e$ times distance to directrix.',
        detail: 'The single number $e$ selects the type: $e = 1$ gives a **parabola**, $e < 1$ an **ellipse**, and $e > 1$ a **hyperbola**. This definition reproduces the earlier ones as special cases and, remarkably, is the shape that gravity enforces on orbits: two bodies interacting by an inverse-square force always move along a conic with the attracting body at the focus.',
      },
      {
        term: 'The polar equation of a conic',
        kind: 'theorem',
        statement: 'With the focus at the pole and the directrix the vertical line $x = d > 0$, the conic of eccentricity $e$ is $$r = \\frac{ed}{1 + e\\cos\\theta}.$$ If the directrix is $x = -d$ the sign flips to $1 - e\\cos\\theta$; with a horizontal directrix $y = \\pm d$ the cosine becomes $\\pm e\\sin\\theta$.',
        detail: 'The derivation takes two lines: a point with polar coordinates $(r, \\theta)$ has distance to focus $|PF| = |r|$ and distance to the directrix $x = d$ equal to $d - r\\cos\\theta$ (for points left of the line), so $r = e(d - r\\cos\\theta)$, and solving for $r$ gives $r(1 + e\\cos\\theta) = ed$. The variable in the denominator tells you the axis: cosine pairs with a vertical directrix, sine with a horizontal one.',
      },
      {
        term: 'Reading eccentricity from the equation',
        kind: 'method',
        statement: 'To classify $r = \\frac{A}{B + C\\cos\\theta}$, divide numerator and denominator by $B$: $r = \\frac{A/B}{1 + (C/B)\\cos\\theta}$, so $e = \\left|\\frac{C}{B}\\right|$ and $ed = \\frac{A}{B}$, giving $d = \\frac{A}{|C|}$.',
        detail: 'For instance $r = \\frac{8}{4 + 3\\cos\\theta}$ becomes $r = \\frac{2}{1 + \\frac{3}{4}\\cos\\theta}$: an ellipse ($e = \\frac{3}{4} < 1$) with directrix $x = \\frac{8}{3}$. If $|C| > |B|$ the denominator can vanish — the signature of a hyperbola, whose two branches correspond to $r$ blowing up near the asymptote directions.',
      },
      {
        term: 'Vertices and shape from the polar form',
        kind: 'method',
        statement: 'The vertices on the focal axis sit at $\\theta = 0$ and $\\theta = \\pi$: $r = \\frac{ed}{1 \\pm e}$. Their sum (ellipse) or difference (hyperbola) gives $2a$, the semi-major axis; for an ellipse the center is halfway between the vertices and $c = ae$, $b = a\\sqrt{1 - e^2}$.',
        detail: 'This makes sketching a polar conic systematic: evaluate $r$ at $\\theta = 0$ and $\\pi$ to anchor the axis, note that the maximum radius on the minor axis is $r = \\frac{ed}{\\sqrt{1 - e^2}}$ at $\\theta = \\pm\\frac{\\pi}{2}$ (ellipse), and fill in the oval.',
      },
      {
        term: 'Conics in the heavens',
        kind: 'insight',
        statement: 'Kepler’s first law says each planet moves in an ellipse with the sun at one focus; comets follow more eccentric orbits — near-parabolic ellipses or hyperbolas that leave the solar system — and the eccentricity in the polar equation $r = \\frac{ed}{1 + e\\cos\\theta}$ is the orbit’s eccentricity.',
        detail: 'Halley’s comet, for example, has $e \\approx 0.967$: its distance from the sun varies enormously between perihelion and aphelion, exactly as the polar equation predicts through the factor $1 + e\\cos\\theta$ in the denominator. The perihelion ($\\theta = 0$, $r = \\frac{ed}{1+e}$) and aphelion ($\\theta = \\pi$, $r = \\frac{ed}{1-e}$) distances are read directly off the equation.',
      },
    ],
    examples: [
      {
        title: 'Classifying and converting a polar conic',
        problem: 'Identify the conic $r = \\frac{1}{1 + \\cos\\theta}$, convert it to rectangular coordinates, and find its vertex, focus and directrix.',
        steps: [
          { label: 'Step 1: Read the eccentricity', text: 'The equation is already in the form $r = \\frac{ed}{1 + e\\cos\\theta}$ with $ed = 1$ and $e = 1$: a **parabola** with focus at the pole and vertical directrix $d = \\frac{ed}{e} = 1$ to the right, i.e. $x = 1$.' },
          { label: 'Step 2: Clear the fraction', text: 'Multiply both sides by $(1 + \\cos\\theta)$: $r + r\\cos\\theta = 1$. Using $r\\cos\\theta = x$, this reads $r = 1 - x$.' },
          { label: 'Step 3: Square to rectangular form', text: 'Squaring $\\sqrt{x^2 + y^2} = 1 - x$ (valid since the right side is positive on the curve) gives $x^2 + y^2 = 1 - 2x + x^2$, so $y^2 = 1 - 2x$.' },
          { label: 'Step 4: Identify the parabola', text: 'Write $y^2 = -2\\left(x - \\frac{1}{2}\\right)$: a parabola opening left with vertex $\\left(\\frac{1}{2}, 0\\right)$, focus at the pole $(0, 0)$ and directrix $x = 1$ — consistent with Section 10.5, where $4p = -2$ means $p = -\\frac{1}{2}$.' },
        ],
        result: 'A parabola: vertex $\\left(\\frac{1}{2}, 0\\right)$, focus at the origin, directrix $x = 1$, rectangular equation $y^2 = 1 - 2x$.',
      },
      {
        title: 'Building and analyzing a polar ellipse',
        problem: 'Find a polar equation of the conic with focus at the origin, eccentricity $e = \\frac{1}{2}$, and directrix $x = 4$. Then locate its vertices and compute $a$, $b$ and $c$.',
        steps: [
          { label: 'Step 1: Assemble the equation', text: 'With $e = \\frac{1}{2}$ and $d = 4$: $ed = 2$, so $r = \\frac{2}{1 + \\frac{1}{2}\\cos\\theta} = \\frac{4}{2 + \\cos\\theta}$.' },
          { label: 'Step 2: Find the axis vertices', text: 'At $\\theta = 0$: $r = \\frac{4}{3}$. At $\\theta = \\pi$: $r = \\frac{4}{1} = 4$. Both radii are positive, confirming an ellipse whose closest approach is $\\frac{4}{3}$ and farthest is $4$.' },
          { label: 'Step 3: Recover the geometry', text: 'The semi-major axis is $a = \\frac{1}{2}\\left(\\frac{4}{3} + 4\\right) = \\frac{8}{3}$. The focus is at the pole, so $c = ae = \\frac{4}{3}$, and the center is $\\left(-\\frac{4}{3}, 0\\right)$ (a distance $c$ from the pole toward the far vertex). Then $b = a\\sqrt{1 - e^2} = \\frac{8}{3}\\cdot\\frac{\\sqrt{3}}{2} = \\frac{4\\sqrt{3}}{3}$.' },
          { label: 'Step 4: Write the rectangular check', text: 'Multiplying $r(2 + \\cos\\theta) = 4$ by $r$ and substituting gives $2x^2 + 2y^2 + rx = 4r$... a messy radical equation — best simplified by isolating $r$ first and squaring once. The polar form is dramatically cleaner, which is the entire point of the method.' },
        ],
        result: 'The ellipse $r = \\frac{4}{2 + \\cos\\theta}$ has vertices $\\left(\\frac{4}{3}, 0\\right)$ and $(-4, 0)$, center $\\left(-\\frac{4}{3}, 0\\right)$, $a = \\frac{8}{3}$, $c = \\frac{4}{3}$, $b = \\frac{4\\sqrt{3}}{3}$ — the sun (focus) sits well off-center, as in a real orbit.',
      },
    ],
    keyTakeaways: [
      'One definition rules them all: a conic is the set of points whose distance to the focus equals $e$ times the distance to the directrix.',
      'With focus at the pole and vertical directrix $x = d$: $r = \\frac{ed}{1 + e\\cos\\theta}$; the sign of the cosine term and the directrix placement vary together, and sine swaps the axis to horizontal.',
      '$e < 1$ ellipse, $e = 1$ parabola, $e > 1$ hyperbola; to read $e$ from $r = \\frac{A}{B + C\\cos\\theta}$, divide through by $B$ and match coefficients.',
      'Vertices come from $\\theta = 0$ and $\\theta = \\pi$ via $r = \\frac{ed}{1 \\pm e}$, from which $a$, $c$, $b$ and the center follow exactly as in Section 10.5.',
      'Orbits are polar conics with the attracting body at the focus: perihelion and aphelion distances are $\\frac{ed}{1 + e}$ and $\\frac{ed}{1 - e}$.',
      'Polar form beats rectangular form for any conic described relative to its focus — which is precisely how nature describes orbits.',
    ],
    quiz: [
      {
        q: 'The conic $r = \\frac{10}{2 + 3\\sin\\theta}$ is:',
        options: ['A parabola with horizontal directrix', 'A hyperbola, since $e = \\frac{3}{2} > 1$', 'An ellipse with $e = \\frac{3}{2}$', 'A circle of radius $5$'],
        answer: 1,
        explanation: 'Dividing by $2$ gives $r = \\frac{5}{1 + \\frac{3}{2}\\sin\\theta}$, so $e = \\frac{3}{2} > 1$: a hyperbola with a horizontal directrix above the pole.',
      },
      {
        q: 'In the polar equation $r = \\frac{ed}{1 + e\\cos\\theta}$, the role of $d$ is:',
        options: ['The distance from the focus to the center', 'The distance from the focus (pole) to the directrix', 'The semi-major axis of the conic', 'The distance between the vertices'],
        answer: 1,
        explanation: '$d$ measures how far the directrix sits from the focus: the equation is derived from $r = e(d - r\\cos\\theta)$, the focus–directrix distance relation.',
      },
      {
        q: 'A comet follows $r = \\frac{ed}{1 + e\\cos\\theta}$ with $e$ slightly less than $1$. Its point of closest approach to the sun (at the pole) occurs at:',
        options: [`$\\theta = 0$ with $r = \\frac{ed}{1 + e}$`, `$\\theta = \\frac{\\pi}{2}$ with $r = ed$`, `$\\theta = \\pi$ with $r = \\frac{ed}{1 - e}$`, 'Anywhere, since $e < 1$ makes the orbit circular'],
        answer: 0,
        explanation: 'The denominator $1 + e\\cos\\theta$ is largest at $\\theta = 0$, making $r$ smallest — perihelion at $\\frac{ed}{1+e}$; the farthest point is at $\\theta = \\pi$. Only $e = 0$ would give a circle.',
      },
      {
        q: 'Suppose a conic has focus at the origin, eccentricity $e = 2$ and directrix $y = -3$. Its polar equation is:',
        options: [`$r = \\frac{6}{1 + 2\\cos\\theta}$`, `$r = \\frac{6}{1 - 2\\sin\\theta}$`, `$r = \\frac{6}{1 + 2\\sin\\theta}$`, `$r = \\frac{3}{1 - 2\\sin\\theta}$`],
        answer: 2,
        explanation: 'A horizontal directrix below the pole pairs with the **plus sine** form: $r = \\frac{ed}{1 + e\\sin\\theta}$, and $ed = 2 \\cdot 3 = 6$.',
      },
      // PYQ-pattern: JEE Mains 2020 — eccentricity and type from polar form (rephrased, values changed)
      {
        q: 'The conic $r = \\frac{6}{2 - \\sin\\theta}$ has eccentricity and type:',
        options: ['Parabola with $e = 1$', 'Hyperbola with $e = 2$', 'Circle with $e = 0$', 'Ellipse with $e = \\frac{1}{2}$'],
        answer: 3,
        explanation: 'Step 1: Restate the standard form as $r = \\frac{ed}{1 \\pm e\\cos\\theta}$ or $r = \\frac{ed}{1 \\pm e\\sin\\theta}$. Step 2: Recall the key move of dividing numerator and denominator by the constant term to expose $e$. Step 3: Divide by $2$ to get $r = \\frac{3}{1 - \\frac{1}{2}\\sin\\theta}$, so $e = \\frac{1}{2}$. Step 4: Classify by $e$: $e < 1$ gives an ellipse, $e = 1$ a parabola, $e > 1$ a hyperbola. Step 5: The distractors misread the coefficient, confuse the minus sign with hyperbolas, or claim circularity which needs $e = 0$. Step 6: Hence the curve is an ellipse with $e = \\frac{1}{2}$.'
      },
    ],
  },
]
