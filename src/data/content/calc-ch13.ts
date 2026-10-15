import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 13: Vector Functions (Sections 13.1 – 13.4)
// Master study content. Worked-example numbers are the book’s own or are
// fully verified by direct computation. Math is LaTeX rendered by KaTeX via
// the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh13Content: SectionContent[] = [
  // ------------------------------------------------------------------ 13.1
  {
    sectionId: 'calc-ch13-s1',
    readingTime: 7,
    intro: 'A plane curve, studied in Chapter 10 as a pair of parametric equations $x = f(t)$, $y = g(t)$, becomes far more powerful in space: a vector function $\\mathbf{r}(t)$ bundles three component functions into a single moving arrow whose tip traces a **space curve**. This section defines vector functions, their domains and limits, and trains the eye on the most important example of the chapter — the circular helix — before the calculus machinery arrives in 13.2.',
    objectives: [
      'Write a vector function in component form $\\mathbf{r}(t) = f(t)\\,\\mathbf{i} + g(t)\\,\\mathbf{j} + h(t)\\,\\mathbf{k}$ and find its domain',
      'Sketch the space curve traced by a vector function, including the circular helix',
      'Compute the limit of a vector function component by component',
      'Parametrize the curve of intersection of two surfaces, such as a cylinder cut by an oblique plane',
      'Connect space curves to the plane curves of Chapter 10 and the vectors of Chapter 12',
    ],
    concepts: [
      {
        term: 'Vector function',
        kind: 'definition',
        statement: 'A **vector function** on a domain set $D$ assigns to each $t$ in $D$ a vector $\\mathbf{r}(t)$. In component form, $$\\mathbf{r}(t) = f(t)\\,\\mathbf{i} + g(t)\\,\\mathbf{j} + h(t)\\,\\mathbf{k} = \\langle f(t),\\ g(t),\\ h(t)\\rangle,$$ where $f$, $g$ and $h$ are real-valued component functions of the parameter $t$.',
        detail: 'Vector functions are the natural language of motion: if a particle sits at the point $(x, y, z)$ at time $t$, the arrow from the origin to the particle is exactly $\\mathbf{r}(t)$. Everything from Chapter 12 about vectors — addition, dot and cross products, length — applies to these moving vectors at each fixed $t$.',
      },
      {
        term: 'Space curve',
        kind: 'definition',
        statement: 'The **space curve** traced by $\\mathbf{r}$ is the set of all points $(f(t), g(t), h(t))$ obtained by pinning the tail of $\\mathbf{r}(t)$ at the origin and following its tip as $t$ runs through $D$. The equations $x = f(t)$, $y = g(t)$, $z = h(t)$ are its **parametric equations**.',
        detail: 'Every curve in this chapter arises this way, and projecting the curve onto the coordinate planes (setting one coordinate to zero) is the standard trick for visualizing it: the projection shows the shadow, while the remaining coordinate shows how the curve lifts off that plane.',
      },
      {
        term: 'The circular helix',
        kind: 'insight',
        statement: 'The prototype space curve is $$\\mathbf{r}(t) = \\cos t\\,\\mathbf{i} + \\sin t\\,\\mathbf{j} + t\\,\\mathbf{k},$$ a **circular helix**: its projection onto the $xy$-plane is the unit circle $x^2 + y^2 = 1$, while the height $z = t$ rises at a constant rate, so the curve coils around the cylinder $x^2 + y^2 = 1$.',
        detail: 'Each time $t$ increases by $2\\pi$ the point completes one turn and climbs $2\\pi$ units — the **pitch** of the helix. DNA’s double helix, a spiral staircase and the thread of a screw all follow this family: $\\mathbf{r}(t) = \\langle a\\cos t, a\\sin t, bt\\rangle$ has radius $a$ and pitch $2\\pi b$. In the book’s DNA exercise the radius is 10 angstroms and each turn rises 34 angstroms.',
      },
      {
        term: 'Domain of a vector function',
        kind: 'method',
        statement: 'The **domain** of $\\mathbf{r}(t) = \\langle f(t), g(t), h(t)\\rangle$ is the intersection of the domains of $f$, $g$ and $h$: every component must be defined simultaneously.',
        detail: 'For example, $\\mathbf{r}(t) = \\langle \\ln(1 - t),\\ \\sqrt{1 + t},\\ 1/t\\rangle$ requires $t < 1$ (logarithm), $t \\ge -1$ (square root) and $t \\ne 0$ (reciprocal), so the domain is $[-1, 0) \\cup (0, 1)$ — exactly the same bookkeeping as for single-variable functions in Chapter 1.',
      },
      {
        term: 'Limits and continuity of vector functions',
        kind: 'definition',
        statement: 'If $\\lim_{t \\to a} f(t) = L_1$, $\\lim_{t \\to a} g(t) = L_2$ and $\\lim_{t \\to a} h(t) = L_3$, then $$\\lim_{t \\to a} \\mathbf{r}(t) = \\langle L_1, L_2, L_3\\rangle.$$ The limit exists exactly when all three component limits exist.',
        detail: 'Because everything is componentwise, $\\mathbf{r}$ is continuous at $a$ precisely when $f$, $g$ and $h$ are, and the limit laws (sum, product with a scalar, dot and cross product) carry over from Chapter 12 vector algebra unchanged.',
      },
      {
        term: 'Curves of intersection of two surfaces',
        kind: 'method',
        statement: 'To parametrize the **intersection of two surfaces**, parametrize one surface and use the other equation to eliminate a variable: for the cylinder $x^2 + y^2 = 1$ cut by the plane $y + z = 2$, put $x = \\cos t$, $y = \\sin t$ (the cylinder) and $z = 2 - \\sin t$ (the plane), giving $\\mathbf{r}(t) = \\langle \\cos t, \\sin t, 2 - \\sin t\\rangle$.',
        detail: 'This is the book’s standard technique (Stewart’s Section 13.1 worked example): one surface supplies a two-parameter description, the other cuts it down to one. Here the result is an ellipse wrapped around the cylinder — squashing that ellipse flat would leave the unit circle as its shadow.',
      },
    ],
    examples: [
      {
        title: 'Analyzing a circular helix',
        problem: 'Sketch the curve traced by $\\mathbf{r}(t) = \\cos t\\,\\mathbf{i} + \\sin t\\,\\mathbf{j} + t\\,\\mathbf{k}$ and describe how it lies relative to the cylinder $x^2 + y^2 = 1$.',
        steps: [
          { label: 'Step 1: Read off the parametric equations', text: 'The components are $x = \\cos t$, $y = \\sin t$ and $z = t$, so as $t$ flows the point circles in $x$ and $y$ while climbing steadily in $z$.' },
          { label: 'Step 2: Project onto the $xy$-plane', text: 'Because $x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$, the shadow of the curve is the unit circle: the curve lies on the cylinder of radius 1 about the $z$-axis, the way a thread lies on a spool.' },
          { label: 'Step 3: Watch the height', text: 'The height $z = t$ increases at the constant rate of one unit per unit of $t$, so instead of closing up like the circle, the curve spirals upward forever.' },
          { label: 'Step 4: Measure one revolution', text: 'As $t$ runs from $0$ to $2\\pi$ the point starts at $(1, 0, 0)$, makes exactly one full revolution, and ends at $(1, 0, 2\\pi)$: the climb per turn (the pitch) is $2\\pi$.' },
        ],
        result: 'The curve is a circular helix coiling around the cylinder $x^2 + y^2 = 1$, rising $2\\pi$ units per revolution — the book’s defining picture of a space curve.',
      },
      {
        title: 'Finding the domain of a vector function',
        problem: 'Find the domain of $\\mathbf{r}(t) = \\left\\langle \\ln(1 - t),\\ \\sqrt{1 + t},\\ \\dfrac{1}{t} \\right\\rangle$.',
        steps: [
          { label: 'Step 1: First component', text: '$\\ln(1 - t)$ is defined only when $1 - t > 0$, that is $t < 1$.' },
          { label: 'Step 2: Second component', text: '$\\sqrt{1 + t}$ requires $1 + t \\ge 0$, that is $t \\ge -1$.' },
          { label: 'Step 3: Third component', text: '$1/t$ requires $t \\ne 0$.' },
          { label: 'Step 4: Intersect', text: 'All three conditions must hold at once: $t \\ge -1$ and $t < 1$ give $[-1, 1)$, and removing $t = 0$ splits this into two intervals.' },
        ],
        result: 'The domain is $[-1, 0) \\cup (0, 1)$: a union of two intervals, exactly as domains of single-variable functions behaved in Chapter 1.',
      },
      {
        title: 'Parametrizing a curve of intersection',
        problem: 'The cylinder $x^2 + y^2 = 1$ intersects the plane $y + z = 2$ in a curve $C$. Find a vector function that traces $C$.',
        steps: [
          { label: 'Step 1: Parametrize the cylinder', text: 'Every point of the cylinder has $x = \\cos t$, $y = \\sin t$ for some $t$, with $0 \\le t \\le 2\\pi$ covering it once.' },
          { label: 'Step 2: Use the plane', text: 'Points of $C$ must also satisfy $y + z = 2$, so $z = 2 - y = 2 - \\sin t$.' },
          { label: 'Step 3: Assemble and verify', text: 'Take $\\mathbf{r}(t) = \\langle \\cos t, \\sin t, 2 - \\sin t\\rangle$. Check: $x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$ and $y + z = \\sin t + 2 - \\sin t = 2$, so the curve lies on both surfaces.' },
          { label: 'Step 4: Identify the shape', text: 'Projected onto the $yz$-plane the curve satisfies $z = 2 - y$ (a segment), so $C$ is an ellipse wrapped around the cylinder — a slanted slice of a circular tube.' },
        ],
        result: '$\\mathbf{r}(t) = \\cos t\\,\\mathbf{i} + \\sin t\\,\\mathbf{j} + (2 - \\sin t)\\,\\mathbf{k}$, $0 \\le t \\le 2\\pi$, traces the ellipse once.',
      },
    ],
    keyTakeaways: [
      'A vector function $\\mathbf{r}(t) = \\langle f(t), g(t), h(t)\\rangle$ packages three parametric equations into one object; its domain is the intersection of the component domains.',
      'Pinning the tail of $\\mathbf{r}(t)$ at the origin, its tip traces the space curve; projections onto the coordinate planes are the key visualization tool.',
      'The circular helix $\\langle \\cos t, \\sin t, t\\rangle$ winds around the cylinder $x^2 + y^2 = 1$ with pitch $2\\pi$.',
      'Limits — and therefore continuity — of vector functions are computed componentwise and exist exactly when all three component limits exist.',
      'To parametrize the intersection of two surfaces, parametrize one surface and eliminate a variable with the other equation.',
    ],
    quiz: [
      {
        q: 'The curve traced by $\\mathbf{r}(t) = \\langle \\cos t, \\sin t, 3t\\rangle$ lies on which surface?',
        options: ['The sphere $x^2 + y^2 + z^2 = 1$', 'The cylinder $x^2 + y^2 = 1$', 'The plane $z = 3y$', 'The cone $z^2 = 9(x^2 + y^2)$'],
        answer: 1,
        explanation: 'The $x$ and $y$ components satisfy $x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$, so the curve coils around the cylinder of radius 1, climbing $6\\pi$ units per revolution.',
      },
      {
        q: 'What is the domain of $\\mathbf{r}(t) = \\left\\langle \\sqrt{4 - t^2},\\ \\ln(t + 1) \\right\\rangle$?',
        options: [`$[-2, 2]$`, `$(-1, 2]$`, `$(-1, 2)$`, `$[-1, 2]$`],
        answer: 1,
        explanation: 'The square root needs $|t| \\le 2$, the logarithm needs $t > -1$; the intersection is $-1 < t \\le 2$, written $(-1, 2]$.',
      },
      {
        q: 'Which vector function parametrizes the curve of intersection of the cylinder $x^2 + y^2 = 4$ and the plane $z = y + 1$?',
        options: [`$\\langle \\cos t, \\sin t, \\sin t + 1\\rangle$`, `$\\langle 2\\cos t, 2\\sin t, \\cos t + 1\\rangle$`, `$\\langle 2\\cos t, 2\\sin t, 2\\sin t + 1\\rangle$`, `$\\langle 2\\cos t, 2\\sin t, 1 - 2\\sin t\\rangle$`],
        answer: 2,
        explanation: 'The cylinder of radius 2 forces $x = 2\\cos t$, $y = 2\\sin t$; the plane then gives $z = y + 1 = 2\\sin t + 1$. Only the third option satisfies both equations.',
      },
      {
        q: 'The limit $\\lim_{t \\to a} \\mathbf{r}(t)$ exists precisely when:',
        options: ['At least one of the component limits exists', 'All three component limits exist', 'The limit of the length $|\\mathbf{r}(t)|$ exists', 'Each component function is continuous at $a$'],
        answer: 1,
        explanation: 'Limits are computed componentwise: $\\mathbf{r}(t) \\to \\langle L_1, L_2, L_3\\rangle$ exactly when each of the three component functions approaches a (finite) limit. Existence of $|\\mathbf{r}(t)|$ alone does not pin down a direction.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.2
  {
    sectionId: 'calc-ch13-s2',
    readingTime: 8,
    intro: 'Differentiating a vector function is done componentwise — but the geometry is new: the derivative is a **tangent vector** pointing in the direction of travel, with length equal to the speed. This section builds the calculus of $\\mathbf{r}(t)$: the derivative and its limit definition, the algebra rules (including product rules for the dot and cross products), integrals, and the smoothness condition that makes the geometry well behaved.',
    objectives: [
      'Compute the derivative of a vector function from the limit definition or componentwise',
      'Interpret $\\mathbf{r}\'(t)$ as a tangent vector and find tangent lines to space curves',
      'Form the unit tangent vector $\\mathbf{T}(t) = \\mathbf{r}\'(t)/|\\mathbf{r}\'(t)|$',
      'Apply the differentiation rules for sums, dot products, cross products and chains',
      'Evaluate definite and indefinite integrals of vector functions and define smooth curves',
    ],
    concepts: [
      {
        term: 'Derivative of a vector function',
        kind: 'definition',
        statement: 'The derivative of $\\mathbf{r}$ is $$\\mathbf{r}\'(t) = \\lim_{h \\to 0} \\frac{\\mathbf{r}(t + h) - \\mathbf{r}(t)}{h}$$ provided the limit exists; in components, $\\mathbf{r}\'(t) = \\langle f\'(t), g\'(t), h\'(t)\\rangle$ — differentiate each component.',
        detail: 'The quotient is the displacement $\\mathbf{r}(t + h) - \\mathbf{r}(t)$ divided by the elapsed time, so it is an average velocity vector; the limit is instantaneous velocity. Geometrically the difference quotient is a secant vector, and its limit points along the tangent — the same picture as the tangent problem of Section 2.1, now in space.',
      },
      {
        term: 'Tangent vector and tangent line',
        kind: 'insight',
        statement: 'If a point moves along a curve $C$ with position $\\mathbf{r}(t)$, then $\\mathbf{r}\'(t)$ is a **tangent vector** to $C$ at the point $\\mathbf{r}(t)$, pointing in the direction of increasing $t$. The tangent line at $t = t_0$ is the line through the tip of $\\mathbf{r}(t_0)$ with direction $\\mathbf{r}\'(t_0)$: $\\mathbf{L}(s) = \\mathbf{r}(t_0) + s\\,\\mathbf{r}\'(t_0)$.',
        detail: 'The tangent vector only defines a line through the point when $\\mathbf{r}\'(t_0) \\ne \\mathbf{0}$; at points where the derivative vanishes the curve can have a cusp or a corner and the tangent machinery breaks down — this is why smoothness (below) matters.',
      },
      {
        term: 'Unit tangent vector',
        kind: 'notation',
        statement: 'The **unit tangent vector** is the direction of motion with the speed divided out: $$\\mathbf{T}(t) = \\frac{\\mathbf{r}\'(t)}{|\\mathbf{r}\'(t)|}, \\qquad |\\mathbf{T}(t)| = 1.$$',
        detail: 'The direction of travel and the rate of travel are separated: $\\mathbf{r}\'(t) = |\\mathbf{r}\'(t)|\\,\\mathbf{T}(t)$, length times direction, exactly as a vector was decomposed in Chapter 12. The unit tangent is the backbone of the curvature theory in Section 13.3.',
      },
      {
        term: 'Differentiation rules',
        kind: 'theorem',
        statement: 'If $\\mathbf{u}$ and $\\mathbf{v}$ are differentiable vector functions and $c$ is a scalar, then: $(\\mathbf{u} + \\mathbf{v})\' = \\mathbf{u}\' + \\mathbf{v}\'$, $(c\\,\\mathbf{u})\' = c\\,\\mathbf{u}\'$, $$\\frac{d}{dt}\\bigl[\\mathbf{u}(t) \\cdot \\mathbf{v}(t)\\bigr] = \\mathbf{u}\'(t) \\cdot \\mathbf{v}(t) + \\mathbf{u}(t) \\cdot \\mathbf{v}\'(t),$$ $$\\frac{d}{dt}\\bigl[\\mathbf{u}(t) \\times \\mathbf{v}(t)\\bigr] = \\mathbf{u}\'(t) \\times \\mathbf{v}(t) + \\mathbf{u}(t) \\times \\mathbf{v}\'(t),$$ and $\\frac{d}{dt}\\,\\mathbf{u}(f(t)) = f\'(t)\\,\\mathbf{u}\'(f(t))$.',
        detail: 'The dot-product rule looks exactly like the scalar product rule of Section 3.2. The cross-product rule also has two terms — but the order of the factors must be preserved, because the cross product is not commutative. Writing $\\mathbf{v}\' \\times \\mathbf{u} + \\mathbf{v} \\times \\mathbf{u}\'$ instead gives a different (wrong) vector.',
      },
      {
        term: 'Integrals of vector functions',
        kind: 'method',
        statement: 'Indefinite integral: $\\int \\mathbf{r}(t)\\,dt = \\left\\langle \\int f(t)\\,dt,\\ \\int g(t)\\,dt,\\ \\int h(t)\\,dt \\right\\rangle$ where the three constants of integration combine into one constant vector $\\mathbf{C}$. Definite integral: $\\int_a^b \\mathbf{r}(t)\\,dt = \\left\\langle \\int_a^b f,\\ \\int_a^b g,\\ \\int_a^b h \\right\\rangle$.',
        detail: 'The Fundamental Theorem of Calculus applies componentwise: if $\\mathbf{R}\'(t) = \\mathbf{r}(t)$ then $\\int_a^b \\mathbf{r}(t)\\,dt = \\mathbf{R}(b) - \\mathbf{R}(a)$. This is the tool for reconstructing position from acceleration in Section 13.4.',
      },
      {
        term: 'Smooth curve',
        kind: 'definition',
        statement: 'A curve $C$ traced by $\\mathbf{r}$ is **smooth** on an interval if $\\mathbf{r}\'$ is continuous and $\\mathbf{r}\'(t) \\ne \\mathbf{0}$ there. A **piecewise-smooth** curve is a finite union of smooth pieces joined end to end.',
        detail: 'Smooth means the curve has a continuously turning unit tangent — no corners, no cusps. A polygon, for example, is piecewise smooth but not smooth at its vertices; the arc length and curvature machinery is applied to such curves one piece at a time.',
      },
    ],
    examples: [
      {
        title: 'Derivatives of the helix and its unit tangent',
        problem: 'For $\\mathbf{r}(t) = \\cos t\\,\\mathbf{i} + \\sin t\\,\\mathbf{j} + t\\,\\mathbf{k}$, find $\\mathbf{r}\'(t)$, $\\mathbf{r}\'\'(t)$, the speed $|\\mathbf{r}\'(t)|$, and the unit tangent vector at $t = 0$.',
        steps: [
          { label: 'Step 1: Differentiate componentwise', text: '$\\mathbf{r}\'(t) = \\langle -\\sin t, \\cos t, 1\\rangle$ and $\\mathbf{r}\'\'(t) = \\langle -\\cos t, -\\sin t, 0\\rangle$.' },
          { label: 'Step 2: Compute the speed', text: '$|\\mathbf{r}\'(t)| = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt{2}$, constant: the point moves along the helix at constant speed even though it constantly changes direction.' },
          { label: 'Step 3: Evaluate at $t = 0$', text: 'The point is $\\mathbf{r}(0) = \\langle 1, 0, 0\\rangle$ and the tangent vector is $\\mathbf{r}\'(0) = \\langle 0, 1, 1\\rangle$.' },
          { label: 'Step 4: Normalize', text: '$\\mathbf{T}(0) = \\mathbf{r}\'(0)/|\\mathbf{r}\'(0)| = \\frac{1}{\\sqrt{2}}\\langle 0, 1, 1\\rangle$, a unit vector halfway between the $y$- and $z$-directions — up and around at once, as a helix demands.' },
        ],
        result: '$\\mathbf{r}\'(t) = \\langle -\\sin t, \\cos t, 1\\rangle$, $\\mathbf{r}\'\'(t) = \\langle -\\cos t, -\\sin t, 0\\rangle$, speed $\\sqrt{2}$, and $\\mathbf{T}(0) = \\frac{1}{\\sqrt{2}}\\langle 0, 1, 1\\rangle$.',
      },
      {
        title: 'Tangent line to a helix at a point',
        problem: 'Find parametric equations for the tangent line to the helix $x = 2\\cos t$, $y = \\sin t$, $z = t$ at the point $\\left(-\\sqrt{3},\\ \\frac{1}{2},\\ \\frac{5\\pi}{6}\\right)$.',
        steps: [
          { label: 'Step 1: Locate the parameter value', text: 'The given point must be on the curve: $2\\cos t = -\\sqrt{3}$ and $\\sin t = \\frac{1}{2}$ give $t = \\frac{5\\pi}{6}$, which also matches $z = t$.' },
          { label: 'Step 2: Differentiate the components', text: '$x\'(t) = -2\\sin t$, $y\'(t) = \\cos t$, $z\'(t) = 1$, so $\\mathbf{r}\'(t) = \\langle -2\\sin t, \\cos t, 1\\rangle$ is the tangent direction.' },
          { label: 'Step 3: Evaluate at $t_0 = \\frac{5\\pi}{6}$', text: '$\\mathbf{r}\'\\!\\left(\\frac{5\\pi}{6}\\right) = \\left\\langle -1,\\ -\\frac{\\sqrt{3}}{2},\\ 1 \\right\\rangle$, using $\\sin\\frac{5\\pi}{6} = \\frac{1}{2}$ and $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$.' },
          { label: 'Step 4: Write the line', text: 'The line through $\\left(-\\sqrt{3}, \\frac{1}{2}, \\frac{5\\pi}{6}\\right)$ with that direction: $x = -\\sqrt{3} - s$, $y = \\frac{1}{2} - \\frac{\\sqrt{3}}{2}s$, $z = \\frac{5\\pi}{6} + s$.' },
        ],
        result: '$\\mathbf{L}(s) = \\left\\langle -\\sqrt{3} - s,\\ \\frac{1}{2} - \\frac{\\sqrt{3}}{2}s,\\ \\frac{5\\pi}{6} + s \\right\\rangle$ — the line that the helix hugs for an instant before curving away.',
      },
      {
        title: 'A definite integral of a vector function',
        problem: 'Evaluate $\\displaystyle\\int_0^{\\pi/4} \\left\\langle 3t^2,\\ \\sec^2 t,\\ \\cos 2t \\right\\rangle\\,dt$.',
        steps: [
          { label: 'Step 1: Integrate each component', text: 'The antiderivative is $\\left\\langle t^3,\\ \\tan t,\\ \\frac{1}{2}\\sin 2t \\right\\rangle$, since $\\frac{d}{dt}t^3 = 3t^2$, $\\frac{d}{dt}\\tan t = \\sec^2 t$ and $\\frac{d}{dt}\\left(\\frac{1}{2}\\sin 2t\\right) = \\cos 2t$.' },
          { label: 'Step 2: Evaluate the first component', text: '$\\left[t^3\\right]_0^{\\pi/4} = \\left(\\frac{\\pi}{4}\\right)^3 = \\frac{\\pi^3}{64}$.' },
          { label: 'Step 3: Evaluate the second and third', text: '$\\left[\\tan t\\right]_0^{\\pi/4} = 1 - 0 = 1$ and $\\left[\\frac{1}{2}\\sin 2t\\right]_0^{\\pi/4} = \\frac{1}{2}\\sin\\frac{\\pi}{2} = \\frac{1}{2}$.' },
          { label: 'Step 4: Assemble the vector', text: 'The integral is the vector whose components are the three numbers just computed.' },
        ],
        result: '$\\displaystyle\\int_0^{\\pi/4} \\left\\langle 3t^2, \\sec^2 t, \\cos 2t \\right\\rangle dt = \\left\\langle \\frac{\\pi^3}{64},\\ 1,\\ \\frac{1}{2} \\right\\rangle$.',
      },
    ],
    keyTakeaways: [
      'The derivative of a vector function is the limit of difference quotients and is computed componentwise: $\\mathbf{r}\'(t) = \\langle f\'(t), g\'(t), h\'(t)\\rangle$.',
      '$\\mathbf{r}\'(t)$ is a tangent vector pointing in the direction of travel; its length $|\\mathbf{r}\'(t)|$ is the speed.',
      'The unit tangent vector is $\\mathbf{T}(t) = \\mathbf{r}\'(t)/|\\mathbf{r}\'(t)|$; the tangent line at $t_0$ is $\\mathbf{L}(s) = \\mathbf{r}(t_0) + s\\,\\mathbf{r}\'(t_0)$.',
      'Dot and cross products satisfy product rules with two terms; for the cross product the order of factors must be preserved.',
      'Integrals of vector functions are evaluated componentwise, with one constant vector $\\mathbf{C}$ for indefinite integrals.',
      'A smooth curve has continuous, nonzero $\\mathbf{r}\'$; corners and cusps only arise where this fails.',
    ],
    quiz: [
      {
        q: 'If $\\mathbf{r}(t) = \\left\\langle t^2,\\ \\dfrac{1}{t},\\ \\sqrt{t} \\right\\rangle$, then $\\mathbf{r}\'(t)$ is:',
        options: [`$\\langle 2t,\\ -\\frac{1}{t^2},\\ \\frac{1}{2\\sqrt{t}}\\rangle$`, `$\\langle 2t,\\ \\ln t,\\ \\frac{1}{2\\sqrt{t}}\\rangle$`, `$\\langle t,\\ \\frac{1}{t^2},\\ \\frac{2}{\\sqrt{t}}\\rangle$`, `$\\langle 2t,\\ -\\frac{1}{t^2},\\ 2\\sqrt{t}\\rangle$`],
        answer: 0,
        explanation: 'Differentiate componentwise: the derivative of $t^2$ is $2t$, of $1/t = t^{-1}$ is $-t^{-2}$, and of $\\sqrt{t} = t^{1/2}$ is $\\frac{1}{2}t^{-1/2}$.',
      },
      {
        q: 'If $\\mathbf{r}\'(t_0) = \\langle 2, -1, 2\\rangle$, the unit tangent vector $\\mathbf{T}(t_0)$ is:',
        options: [`$\\langle 2, -1, 2\\rangle$`, `$\\frac{1}{9}\\langle 2, -1, 2\\rangle$`, `$\\frac{1}{3}\\langle 2, -1, 2\\rangle$`, `$\\frac{1}{3}\\langle 2, 1, 2\\rangle$`],
        answer: 2,
        explanation: '$|\\langle 2, -1, 2\\rangle| = \\sqrt{4 + 1 + 4} = 3$, so dividing by the length gives $\\mathbf{T} = \\frac{1}{3}\\langle 2, -1, 2\\rangle$. The unit tangent always has length exactly 1.',
      },
      {
        q: 'Which identity is correct for differentiable vector functions $\\mathbf{u}$ and $\\mathbf{v}$?',
        options: ['$(\\mathbf{u} \\times \\mathbf{v})\' = \\mathbf{u}\' \\times \\mathbf{v} + \\mathbf{v}\' \\times \\mathbf{u}\'$', '$(\\mathbf{u} \\times \\mathbf{v})\' = \\mathbf{u}\' \\times \\mathbf{v} + \\mathbf{u} \\times \\mathbf{v}\'$', '$(\\mathbf{u} \\times \\mathbf{v})\' = \\mathbf{u}\' \\times \\mathbf{v}\'$', '$(\\mathbf{u} \\times \\mathbf{v})\' = \\mathbf{v}\' \\times \\mathbf{u} + \\mathbf{v} \\times \\mathbf{u}\'$'],
        answer: 1,
        explanation: 'The product rule holds for the cross product, but the order of factors in each term must be preserved: $\\mathbf{u}\' \\times \\mathbf{v} + \\mathbf{u} \\times \\mathbf{v}\'$. Options that swap the order in one term are wrong because the cross product is not commutative.',
      },
      {
        q: 'Evaluate $\\displaystyle\\int_0^1 \\langle t,\\ 1,\\ 3t^2\\rangle\\,dt$.',
        options: [`$\\left\\langle \\frac{1}{2},\\ 1,\\ 1 \\right\\rangle$`, `$\\langle 1, 1, 1\\rangle$`, `$\\left\\langle \\frac{1}{2},\\ 1,\\ \\frac{3}{2} \\right\\rangle$`, `$\\left\\langle 1,\\ 1,\\ \\frac{1}{2} \\right\\rangle$`],
        answer: 0,
        explanation: 'Componentwise: $\\int_0^1 t\\,dt = \\frac{1}{2}$, $\\int_0^1 1\\,dt = 1$ and $\\int_0^1 3t^2\\,dt = \\left[t^3\\right]_0^1 = 1$, giving $\\langle \\frac{1}{2}, 1, 1\\rangle$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.3
  {
    sectionId: 'calc-ch13-s3',
    readingTime: 9,
    intro: 'How long is a space curve, and how sharply does it bend? Arc length generalizes the Chapter 8 formula by replacing $\\sqrt{1 + (dy/dx)^2}$ with the speed $|\\mathbf{r}\'(t)|$. **Curvature** measures the rate of change of direction per unit of arc length and comes with three interchangeable formulas, and the moving triad $\\mathbf{T}$, $\\mathbf{N}$, $\\mathbf{B}$ builds a coordinate frame that travels with the curve. The section ends with the osculating circle — the circle that best hugs the curve at each point.',
    objectives: [
      'Set up and evaluate arc length integrals for space curves',
      'Define curvature as $\\kappa = |d\\mathbf{T}/ds|$ and compute it with $\\kappa = \\frac{|\\mathbf{r}\' \\times \\mathbf{r}\'\'}{|\\mathbf{r}\'|^3}$',
      'Use the plane-curve formula $\\kappa = \\frac{|y\'\'}{[1 + (y\')^2]^{3/2}}$',
      'Compute the principal unit normal and binormal vectors, and the TNB frame',
      'Find the osculating circle (radius, center, plane) at a point of a curve',
    ],
    concepts: [
      {
        term: 'Arc length of a space curve',
        kind: 'theorem',
        statement: 'If $\\mathbf{r}\'$ is continuous on $[a, b]$, the length of the curve is $$L = \\int_a^b |\\mathbf{r}\'(t)|\\,dt = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2 + \\left(\\frac{dz}{dt}\\right)^2}\\,\\,dt.$$',
        detail: 'The formula is the limit of the lengths of inscribed polygonal approximations — and in the plane, substituting $\\mathbf{r}(t) = \\langle t, f(t)\\rangle$ recovers the Section 8.1 formula $L = \\int\\sqrt{1 + (y\')^2}\\,dx$ exactly. The integrand is the speed, so distance traveled is the integral of speed — Chapter 5’s net change theorem, now in space.',
      },
      {
        term: 'Arc length parametrization',
        kind: 'notation',
        statement: 'The **arc length function** $s(t) = \\int_{t_0}^{t} |\\mathbf{r}\'(u)|\\,du$ measures distance traveled from the starting point. If $\\mathbf{r}$ is reparametrized by $s$ itself, then $|d\\mathbf{r}/ds| = 1$: the point moves one unit of distance per unit of parameter.',
        detail: 'Arc length parametrizations are the natural ones for defining curvature, because then $\\mathbf{T}(s) = d\\mathbf{r}/ds$ changes only in direction, not length. They are rarely pleasant to compute explicitly — the helix is one of the few friendly cases — but they are the conceptual anchor.',
      },
      {
        term: 'Curvature',
        kind: 'definition',
        statement: 'The **curvature** of a curve is the magnitude of the rate of change of the unit tangent with respect to arc length: $$\\kappa = \\left|\\frac{d\\mathbf{T}}{ds}\\right|.$$',
        detail: 'Curvature measures how fast the direction of travel turns per unit distance — not how fast the point moves. A straight line has $\\kappa = 0$ everywhere; a circle of radius $a$ has $\\kappa = 1/a$ everywhere, small circles bending more than large ones. Curvature has units of inverse length, which is why the reciprocal $1/\\kappa$ is a radius.',
      },
      {
        term: 'Computational formulas for curvature',
        kind: 'theorem',
        statement: 'For a twice-differentiable curve, $$\\kappa(t) = \\frac{|\\mathbf{T}\'(t)|}{|\\mathbf{r}\'(t)|} = \\frac{|\\mathbf{r}\'(t) \\times \\mathbf{r}\'\'(t)|}{|\\mathbf{r}\'(t)|^3}$$ and, for a plane curve $y = f(x)$ with two derivatives, $$\\kappa = \\frac{|y\'\'}{\\left[1 + (y\')^2\\right]^{3/2}}.$$',
        detail: 'The cross-product form is the workhorse for space curves because it needs only first and second derivatives. The plane formula comes from parametrizing $y = f(x)$ as $\\mathbf{r}(x) = \\langle x, f(x)\\rangle$ and simplifying the cross product — it reproduces the familiar fact that the curvature of a circle of radius $a$ is $1/a$, since the center of curvature stays at constant distance.',
      },
      {
        term: 'Principal unit normal vector',
        kind: 'definition',
        statement: 'The **principal unit normal** is $$\\mathbf{N}(t) = \\frac{\\mathbf{T}\'(t)}{|\\mathbf{T}\'(t)|},$$ the unit vector in the direction the tangent is turning; it is perpendicular to $\\mathbf{T}$ and points toward the concave side of the curve.',
        detail: 'Because $|\\mathbf{T}| = 1$ identically, $\\mathbf{T}$ is perpendicular to $\\mathbf{T}\'$ (differentiate $\\mathbf{T} \\cdot \\mathbf{T} = 1$), so normalizing $\\mathbf{T}\'$ really does produce a vector orthogonal to the tangent. A car driving along the curve feels pushed toward $\\mathbf{N}$.',
      },
      {
        term: 'Binormal vector and the TNB frame',
        kind: 'notation',
        statement: 'The **binormal vector** is $\\mathbf{B}(t) = \\mathbf{T}(t) \\times \\mathbf{N}(t)$. The orthonormal triple $\\mathbf{T}$, $\\mathbf{N}$, $\\mathbf{B}$ is the **TNB frame** (moving trihedron); the plane spanned by $\\mathbf{T}$ and $\\mathbf{N}$ is the **osculating plane**, that spanned by $\\mathbf{N}$ and $\\mathbf{B}$ the **normal plane**, and that spanned by $\\mathbf{T}$ and $\\mathbf{B}$ the **rectifying plane**.',
        detail: 'The osculating plane is the plane the curve most nearly lies in near the point — the limit of the planes through three nearby points of the curve. The TNB frame is the backbone of the Frenet formulas used throughout computer graphics, robotics and flight dynamics to describe rotation along a path.',
      },
      {
        term: 'Osculating circle',
        kind: 'definition',
        statement: 'The **osculating circle** of a curve at a point with curvature $\\kappa > 0$ is the circle of radius $1/\\kappa$ (the **radius of curvature**) centered at $\\mathbf{r}(t) + \\frac{1}{\\kappa}\\mathbf{N}(t)$, lying in the osculating plane. It shares the curve’s tangent line and curvature at the point.',
        detail: 'The osculating circle is the circle that best matches the curve — the same philosophy that made the tangent line the best linear approximation in Chapter 2. A line is a circle of infinite radius of curvature; a circle is its own osculating circle at every point, with center offset $\\frac{1}{\\kappa}\\mathbf{N}$ pointing inward.',
      },
    ],
    examples: [
      {
        title: 'Arc length of a helix',
        problem: 'Find the length of one full turn of the helix $\\mathbf{r}(t) = \\cos t\\,\\mathbf{i} + \\sin t\\,\\mathbf{j} + t\\,\\mathbf{k}$, $0 \\le t \\le 2\\pi$.',
        steps: [
          { label: 'Step 1: Compute the derivative', text: '$\\mathbf{r}\'(t) = \\langle -\\sin t, \\cos t, 1\\rangle$.' },
          { label: 'Step 2: Compute the speed', text: '$|\\mathbf{r}\'(t)| = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt{2}$, constant along the curve.' },
          { label: 'Step 3: Set up the arc length integral', text: '$L = \\int_0^{2\\pi} |\\mathbf{r}\'(t)|\\,dt = \\int_0^{2\\pi} \\sqrt{2}\\,dt$.' },
          { label: 'Step 4: Evaluate', text: '$L = \\sqrt{2} \\cdot 2\\pi = 2\\sqrt{2}\\,\\pi \\approx 8.89$ — longer than the shadow circle’s circumference $2\\pi \\approx 6.28$ because the helix also climbs.' },
        ],
        result: 'One turn of the helix has length $2\\sqrt{2}\\,\\pi \\approx 8.89$: the circle stretched by the factor $\\sqrt{2}$ that measures its slant.',
      },
      {
        title: 'Curvature of a helix, two ways',
        problem: 'Find the curvature of $\\mathbf{r}(t) = \\cos t\\,\\mathbf{i} + \\sin t\\,\\mathbf{j} + t\\,\\mathbf{k}$ using the cross-product formula, and confirm it with $\\kappa = |\\mathbf{T}\'|/|\\mathbf{r}\'|$.',
        steps: [
          { label: 'Step 1: Gather the derivatives', text: '$\\mathbf{r}\'(t) = \\langle -\\sin t, \\cos t, 1\\rangle$ and $\\mathbf{r}\'\'(t) = \\langle -\\cos t, -\\sin t, 0\\rangle$, with $|\\mathbf{r}\'| = \\sqrt{2}$.' },
          { label: 'Step 2: Cross product', text: '$\\mathbf{r}\' \\times \\mathbf{r}\'\' = \\langle \\sin t,\\ -\\cos t,\\ \\sin^2 t + \\cos^2 t \\rangle = \\langle \\sin t,\\ -\\cos t,\\ 1\\rangle$, so $|\\mathbf{r}\' \\times \\mathbf{r}\'\'| = \\sqrt{2}$.' },
          { label: 'Step 3: Apply the formula', text: '$\\kappa = \\dfrac{|\\mathbf{r}\' \\times \\mathbf{r}\'\'}{|\\mathbf{r}\'|^3} = \\dfrac{\\sqrt{2}}{(\\sqrt{2})^3} = \\dfrac{\\sqrt{2}}{2\\sqrt{2}} = \\dfrac{1}{2}$.' },
          { label: 'Step 4: Check with the unit tangent', text: '$\\mathbf{T}(t) = \\frac{1}{\\sqrt{2}}\\langle -\\sin t, \\cos t, 1\\rangle$, so $\\mathbf{T}\'(t) = \\frac{1}{\\sqrt{2}}\\langle -\\cos t, -\\sin t, 0\\rangle$ and $|\\mathbf{T}\'| = \\frac{1}{\\sqrt{2}}$; then $\\kappa = \\frac{1/\\sqrt{2}}{\\sqrt{2}} = \\frac{1}{2}$ ✓.' },
        ],
        result: 'The helix has constant curvature $\\kappa = \\frac{1}{2}$ — as expected, it bends like a circle of radius $2$.',
      },
      {
        title: 'Curvature of a parabola, and the osculating circle of the helix',
        problem: 'Part (a): find the curvature of $y = x^2$ at the origin. Part (b): for the helix of the previous examples at $t = 0$, find $\\mathbf{N}$, $\\mathbf{B}$ and the osculating circle.',
        steps: [
          { label: 'Step 1 (a): Plane-curve formula', text: 'With $y\' = 2x$ and $y\'\' = 2$, the curvature is $\\kappa = \\frac{2}{(1 + 4x^2)^{3/2}}$.' },
          { label: 'Step 2 (a): Evaluate at the origin', text: 'At $x = 0$: $\\kappa = \\frac{2}{1^{3/2}} = 2$, so the parabola bends at the origin like a circle of radius $\\frac{1}{2}$ — the curvature decreases to $0$ as $|x| \\to \\infty$ because the parabola flattens out.' },
          { label: 'Step 3 (b): Normal and binormal at $t = 0$', text: 'From the previous example $\\mathbf{T}(0) = \\frac{1}{\\sqrt{2}}\\langle 0, 1, 1\\rangle$ and $\\mathbf{T}\'(0) = \\frac{1}{\\sqrt{2}}\\langle -1, 0, 0\\rangle$, so $\\mathbf{N}(0) = \\langle -1, 0, 0\\rangle$ and $\\mathbf{B}(0) = \\mathbf{T}(0) \\times \\mathbf{N}(0) = \\frac{1}{\\sqrt{2}}\\langle 0, -1, 1\\rangle$.' },
          { label: 'Step 4 (b): The circle', text: 'With $\\kappa = \\frac{1}{2}$ the radius is $2$ and the center is $\\mathbf{r}(0) + \\frac{1}{\\kappa}\\mathbf{N}(0) = \\langle 1, 0, 0\\rangle + 2\\langle -1, 0, 0\\rangle = \\langle -1, 0, 0\\rangle$, in the osculating plane spanned by $\\mathbf{T}(0)$ and $\\mathbf{N}(0)$.' },
        ],
        result: '(a) The parabola has curvature $2$ at the origin. (b) The helix’s osculating circle at $(1, 0, 0)$ has radius $2$, center $(-1, 0, 0)$ and lies in the plane through $(1,0,0)$ spanned by $\\langle 0, 1, 1\\rangle$ and $\\langle 1, 0, 0\\rangle$.',
      },
    ],
    keyTakeaways: [
      'Arc length is $L = \\int_a^b |\\mathbf{r}\'(t)|\\,dt$ — the integral of speed, reducing to the Chapter 8 formula in the plane.',
      'Curvature is $\\kappa = \\left|d\\mathbf{T}/ds\\right|$: turning of direction per unit distance; lines have $\\kappa = 0$ and circles of radius $a$ have $\\kappa = 1/a$.',
      'The workhorse formulas are $\\kappa = \\frac{|\\mathbf{r}\' \\times \\mathbf{r}\'\'}{|\\mathbf{r}\'|^3}$ for space curves and $\\kappa = \\frac{|y\'\'}{[1 + (y\')^2]^{3/2}}$ for plane curves.',
      'The principal normal $\\mathbf{N} = \\mathbf{T}\'/|\\mathbf{T}\'|$ points toward the concave side; the binormal $\\mathbf{B} = \\mathbf{T} \\times \\mathbf{N}$ completes the orthonormal TNB frame.',
      'The osculating circle has radius $1/\\kappa$ and center $\\mathbf{r} + \\frac{1}{\\kappa}\\mathbf{N}$; it matches the curve’s tangent and curvature at the point.',
      'The helix $\\langle \\cos t, \\sin t, t\\rangle$ has constant speed $\\sqrt{2}$ and constant curvature $\\frac{1}{2}$.',
    ],
    quiz: [
      {
        q: 'A curve satisfies $|\\mathbf{r}\'(t)| = 1 + t^2$ for $0 \\le t \\le 1$. Its length is:',
        options: [`$\\int_0^1 (1 + t^2)\\,dt = \\frac{4}{3}$`, `$\\int_0^1 (1 + t)^2\\,dt = \\frac{7}{3}$`, `$\\int_0^1 (1 + t^2)^2\\,dt = \\frac{28}{15}$`, 'It cannot be found from the speed alone'],
        answer: 0,
        explanation: 'Arc length is the integral of speed: $L = \\int_0^1 (1 + t^2)\\,dt = 1 + \\frac{1}{3} = \\frac{4}{3}$. Speed determines length; direction is irrelevant.',
      },
      {
        q: 'The curvature of a straight line is, at every point:',
        options: [`$1$`, `$\\frac{1}{a}$ for some radius $a$`, `$0$`, 'Undefined'],
        answer: 2,
        explanation: 'Along a line the unit tangent never changes direction, so $\\kappa = |d\\mathbf{T}/ds| = 0$ everywhere — a line is a circle of infinite radius.',
      },
      {
        q: 'For the parabola $y = x^2$, the curvature at the origin is:',
        options: [`$0$`, `$1$`, `$2$`, `$\\frac{1}{2}$`],
        answer: 2,
        explanation: 'With $y\' = 2x = 0$ and $y\'\' = 2$ at the origin: $\\kappa = \\frac{|y\'\'}{[1 + (y\')^2]^{3/2}} = \\frac{2}{1} = 2$ — the parabola turns as sharply as a circle of radius $\\frac{1}{2}$.',
      },
      {
        q: 'If a curve has curvature $\\kappa = \\frac{1}{4}$ at a point, its osculating circle there has radius:',
        options: [`$\\frac{1}{4}$`, `$4$`, `$\\frac{1}{2}$`, `$16$`],
        answer: 1,
        explanation: 'The radius of curvature is the reciprocal: $\\frac{1}{\\kappa} = 4$, and the circle’s center sits at $\\mathbf{r} + \\frac{1}{\\kappa}\\mathbf{N}$, four units away along the normal direction.',
      },
      {
        q: 'The principal unit normal vector $\\mathbf{N}(t)$:',
        options: ['Points in the direction of travel', 'Is always parallel to $\\mathbf{r}\'(t)$', 'Points toward the concave side of the curve, perpendicular to $\\mathbf{T}$', 'Coincides with the binormal $\\mathbf{B}$'],
        answer: 2,
        explanation: 'Since $|\\mathbf{T}| = 1$, the vector $\\mathbf{T}\'$ is perpendicular to $\\mathbf{T}$, and normalizing it gives $\\mathbf{N}$ — the direction in which the curve is bending (the concave side).',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.4
  {
    sectionId: 'calc-ch13-s4',
    readingTime: 9,
    intro: 'Mechanics becomes calculus: velocity is $\\mathbf{r}\'$, acceleration is $\\mathbf{r}\'\'$, and Newton’s second law $\\mathbf{F} = m\\mathbf{a}$ is a vector equation whose direction — not just magnitude — shapes the trajectory. This section splits acceleration into a tangential component (changing speed) and a normal component (changing direction), works the projectile-motion problem in full, and shows why a force perpendicular to velocity bends the path without speeding the particle up.',
    objectives: [
      'Compute position, velocity, acceleration and speed from $\\mathbf{r}(t)$, and reconstruct $\\mathbf{r}$ from $\\mathbf{a}$ and initial conditions',
      'Resolve acceleration into tangential and normal components $a_T$ and $a_N$',
      'Derive and use the projectile-motion equations: trajectory, flight time, range, maximum height',
      'Explain geometrically why a force perpendicular to velocity changes direction but not speed',
      'Connect the theory to Kepler’s laws of planetary motion',
    ],
    concepts: [
      {
        term: 'Position, velocity, acceleration, speed',
        kind: 'definition',
        statement: 'For a particle moving in space with position $\\mathbf{r}(t)$: the **velocity** is $\\mathbf{v}(t) = \\mathbf{r}\'(t)$, the **speed** is $|\\mathbf{v}(t)| = |\\mathbf{r}\'(t)|$, and the **acceleration** is $\\mathbf{a}(t) = \\mathbf{r}\'\'(t) = \\mathbf{v}\'(t)$.',
        detail: 'Conversely, position is recovered from acceleration by integrating twice, each time paying one constant vector of integration fixed by initial position and velocity. The displacement over $[t_1, t_2]$ is $\\int_{t_1}^{t_2}\\mathbf{v}(t)\\,dt$ — a vector, generally unlike the scalar distance traveled.',
      },
      {
        term: 'Newton’s second law as a vector equation',
        kind: 'law',
        statement: '$$\\mathbf{F} = m\\mathbf{a} = m\\,\\mathbf{r}\'\'(t).$$ The acceleration points in the direction of the net force, with magnitude $|\\mathbf{F}|/m$.',
        detail: 'Because force is a vector, its alignment with velocity matters: a force parallel to $\\mathbf{v}$ changes only the speed, a force perpendicular to $\\mathbf{v}$ changes only the direction, and the general case does both. Newton used precisely this machinery to derive Kepler’s laws from the inverse-square attraction — the historic triumph that sold the world on calculus.',
      },
      {
        term: 'Tangential and normal components of acceleration',
        kind: 'theorem',
        statement: 'Acceleration decomposes in the TNB frame as $$\\mathbf{a} = a_T\\mathbf{T} + a_N\\mathbf{N}, \\qquad a_T = \\frac{\\mathbf{v} \\cdot \\mathbf{a}}{|\\mathbf{v}|} = \\frac{d|\\mathbf{v}|}{dt}, \\qquad a_N = \\kappa\\,|\\mathbf{v}|^2 = \\frac{|\\mathbf{v} \\times \\mathbf{a}|}{|\\mathbf{v}|}.$$',
        detail: '$a_T$ is the rate of change of speed — the part of acceleration along the motion. $a_N = \\kappa v^2$ is the centripetal part, pointing toward the center of bending; for circular motion of radius $a$ it reduces to the familiar $v^2/a$. A particle moving at constant speed has $a_T = 0$ and $\\mathbf{a} \\perp \\mathbf{v}$: all acceleration is steering. Also $|\\mathbf{a}|^2 = a_T^2 + a_N^2$, a useful check.',
      },
      {
        term: 'Projectile motion',
        kind: 'method',
        statement: 'A projectile launched from the origin at angle $\\alpha$ with speed $v_0$, under gravity $g$ and ignoring air resistance, has $$\\mathbf{r}(t) = v_0\\cos\\alpha\\,t\\,\\mathbf{i} + \\left(v_0\\sin\\alpha\\,t - \\tfrac{1}{2}gt^2\\right)\\mathbf{j}.$$ The path is the parabola $y = (\\tan\\alpha)x - \\dfrac{g\\sec^2\\alpha}{2v_0^2}\\,x^2$; on flat ground the range is $\\dfrac{v_0^2\\sin 2\\alpha}{g}$ and the maximum height is $\\dfrac{v_0^2\\sin^2\\alpha}{2g}$.',
        detail: 'Integrate the constant acceleration $-g\\,\\mathbf{j}$ twice with initial velocity $v_0\\cos\\alpha\\,\\mathbf{i} + v_0\\sin\\alpha\\,\\mathbf{j}$. The horizontal component of velocity never changes (no horizontal force), so range is horizontal speed times flight time. The range is maximized at $\\alpha = 45^\\circ$ and is symmetric under $\\alpha \\mapsto 90^\\circ - \\alpha$.',
      },
      {
        term: 'Perpendicular force and constant speed',
        kind: 'insight',
        statement: 'If a particle moves with constant speed, then $\\mathbf{v} \\cdot \\mathbf{a} = 0$ at every instant: velocity and acceleration are perpendicular.',
        detail: 'Differentiate $|\\mathbf{v}|^2 = \\mathbf{v} \\cdot \\mathbf{v}$ to get $2\\mathbf{v} \\cdot \\mathbf{v}\' = 2\\mathbf{v} \\cdot \\mathbf{a}$; if the speed is constant the left side is the derivative of a constant, hence zero. This one line of vector calculus is why magnetic forces (always perpendicular to velocity) do no work, and why uniform circular motion has acceleration pointing strictly inward.',
      },
      {
        term: 'Kepler’s laws',
        kind: 'insight',
        statement: 'Newton showed that a planet attracted by the inverse-square force toward the sun moves on the ellipse Kepler observed, sweeping equal areas in equal times, with period proportional to the $\\frac{3}{2}$ power of the orbit’s semimajor axis.',
        detail: 'The proof is a triumph of vector calculus: the force is always parallel to the position vector, so $\\mathbf{r} \\times \\mathbf{a} = \\mathbf{0}$, which forces the motion to stay in a plane and makes the area rate $\\frac{1}{2}|\\mathbf{r} \\times \\mathbf{v}|$ constant. This material is the historical climax of the chapter — Stewart devotes Discovery Project discussion to it.',
      },
    ],
    examples: [
      {
        title: 'Projectile motion, worked in full',
        problem: 'A projectile is fired with muzzle speed $150$ m/s and angle of elevation $45^\\circ$ from a position $10$ m above the ground. Where does it land, how high does it rise, and how fast is it moving on impact? (Use $g = 9.8$ m/s².)',
        steps: [
          { label: 'Step 1: Initial velocity components', text: 'With $v_0 = 150$ and $\\alpha = 45^\\circ$: horizontal $v_0\\cos\\alpha = \\frac{150}{\\sqrt{2}} = 75\\sqrt{2} \\approx 106.07$ m/s, and the same vertically: $75\\sqrt{2} \\approx 106.07$ m/s.' },
          { label: 'Step 2: Equations of motion', text: '$x(t) = 75\\sqrt{2}\\,t$ and $y(t) = 10 + 75\\sqrt{2}\\,t - 4.9t^2$, with $\\mathbf{v}(t) = \\langle 75\\sqrt{2},\\ 75\\sqrt{2} - 9.8t\\rangle$.' },
          { label: 'Step 3: Time of flight', text: 'Landing means $y = 0$: $4.9t^2 - 75\\sqrt{2}\\,t - 10 = 0$, so $t = \\frac{75\\sqrt{2} + \\sqrt{(75\\sqrt{2})^2 + 4(4.9)(10)}}{9.8} = \\frac{106.07 + \\sqrt{11446}}{9.8} \\approx \\frac{106.07 + 106.99}{9.8} \\approx 21.74$ s.' },
          { label: 'Step 4: Range', text: '$x(21.74) = 75\\sqrt{2} \\times 21.74 \\approx 2306$ m — the shell lands about $2.3$ km downrange.' },
          { label: 'Step 5: Maximum height', text: 'The peak is where the vertical velocity vanishes: $t = \\frac{75\\sqrt{2}}{9.8} \\approx 10.82$ s, giving $y \\approx 10 + 106.07(10.82) - 4.9(10.82)^2 \\approx 584$ m.' },
          { label: 'Step 6: Impact velocity', text: '$\\mathbf{v}(21.74) = \\langle 106.07,\\ 106.07 - 9.8(21.74)\\rangle = \\langle 106.07, -106.99\\rangle$, whose length is $\\sqrt{106.07^2 + 106.99^2} \\approx 150.7$ m/s, angled about $45.2^\\circ$ below horizontal — slightly faster than launch speed, because it fell a net $10$ m.' },
        ],
        result: 'The projectile flies about $2.3$ km in $21.7$ s, peaks at roughly $584$ m, and strikes the ground at about $151$ m/s, half a degree steeper below horizontal than its launch angle was above it.',
      },
      {
        title: 'Tangential and normal components of acceleration',
        problem: 'A particle moves along the curve $\\mathbf{r}(t) = \\langle t,\\ t^2,\\ t^3\\rangle$. Find the tangential and normal components of acceleration at $t = 1$.',
        steps: [
          { label: 'Step 1: Velocity and acceleration', text: '$\\mathbf{v}(t) = \\langle 1, 2t, 3t^2\\rangle$ and $\\mathbf{a}(t) = \\langle 0, 2, 6t\\rangle$, so at $t = 1$: $\\mathbf{v} = \\langle 1, 2, 3\\rangle$ with $|\\mathbf{v}| = \\sqrt{14}$, and $\\mathbf{a} = \\langle 0, 2, 6\\rangle$ with $|\\mathbf{a}| = \\sqrt{40}$.' },
          { label: 'Step 2: Tangential component', text: '$a_T = \\frac{\\mathbf{v} \\cdot \\mathbf{a}}{|\\mathbf{v}|} = \\frac{0 + 4 + 18}{\\sqrt{14}} = \\frac{22}{\\sqrt{14}} \\approx 5.88$ — positive, so the particle is speeding up.' },
          { label: 'Step 3: Cross product for the normal component', text: '$\\mathbf{v} \\times \\mathbf{a} = \\langle (2)(6) - (3)(2),\\ (3)(0) - (1)(6),\\ (1)(2) - (2)(0)\\rangle = \\langle 6, -6, 2\\rangle$, so $|\\mathbf{v} \\times \\mathbf{a}| = \\sqrt{76} = 2\\sqrt{19}$.' },
          { label: 'Step 4: Normal component', text: '$a_N = \\frac{|\\mathbf{v} \\times \\mathbf{a}|}{|\\mathbf{v}|} = \\frac{2\\sqrt{19}}{\\sqrt{14}} = \\sqrt{\\frac{38}{7}} \\approx 2.33$.' },
          { label: 'Step 5: Check the Pythagorean identity', text: '$a_T^2 + a_N^2 = \\frac{484}{14} + \\frac{76}{14} = \\frac{560}{14} = 40 = |\\mathbf{a}|^2$ ✓ — the components really do split the acceleration orthogonally.' },
        ],
        result: 'At $t = 1$: $a_T = \\frac{22}{\\sqrt{14}} \\approx 5.88$ and $a_N = 2\\sqrt{\\frac{19}{14}} \\approx 2.33$; most of the acceleration is spent speeding the particle up, the rest on bending the path.',
      },
      {
        title: 'Why constant speed forces acceleration ⊥ velocity',
        problem: 'Prove: if a particle moves with constant speed, then its velocity and acceleration vectors are perpendicular at every instant.',
        steps: [
          { label: 'Step 1: Square the speed', text: 'Constant speed means $|\\mathbf{v}(t)|^2$ is constant, and $|\\mathbf{v}|^2 = \\mathbf{v} \\cdot \\mathbf{v}$.' },
          { label: 'Step 2: Differentiate', text: '$\\frac{d}{dt}\\bigl(\\mathbf{v} \\cdot \\mathbf{v}\\bigr) = \\mathbf{v}\' \\cdot \\mathbf{v} + \\mathbf{v} \\cdot \\mathbf{v}\' = 2\\,\\mathbf{v} \\cdot \\mathbf{a}$, using the dot-product rule from Section 13.2.' },
          { label: 'Step 3: Conclude', text: 'A constant has derivative zero, so $\\mathbf{v} \\cdot \\mathbf{a} = 0$ wherever $\\mathbf{v} \\ne \\mathbf{0}$: the acceleration is perpendicular to the velocity, exactly as in uniform circular motion.' },
        ],
        result: 'Constant speed ⟹ $\\mathbf{v} \\cdot \\mathbf{a} = 0$: all acceleration is normal — pure steering. This is why a planet at the ends of its elliptical orbit (where speed momentarily stops changing) feels acceleration straight toward the sun.',
      },
    ],
    keyTakeaways: [
      'Velocity is $\\mathbf{r}\'$, speed is $|\\mathbf{r}\'|$, acceleration is $\\mathbf{r}\'\'$; position is recovered by integrating acceleration twice with initial conditions.',
      'Newton’s law $\\mathbf{F} = m\\mathbf{a}$ is a vector equation: forces parallel to velocity change speed, forces perpendicular change direction.',
      'Acceleration splits as $\\mathbf{a} = a_T\\mathbf{T} + a_N\\mathbf{N}$ with $a_T = \\frac{\\mathbf{v}\\cdot\\mathbf{a}}{|\\mathbf{v}|}$ and $a_N = \\kappa v^2 = \\frac{|\\mathbf{v}\\times\\mathbf{a}|}{|\\mathbf{v}|}$, and $|\\mathbf{a}|^2 = a_T^2 + a_N^2$.',
      'Projectile paths are parabolas: $\\mathbf{r}(t) = v_0\\cos\\alpha\\,t\\,\\mathbf{i} + (v_0\\sin\\alpha\\,t - \\tfrac{1}{2}gt^2)\\mathbf{j}$, with range $\\frac{v_0^2\\sin 2\\alpha}{g}$ on flat ground.',
      'Constant speed forces $\\mathbf{v} \\cdot \\mathbf{a} = 0$ — acceleration purely in the normal, steering direction.',
      'Newton’s derivation of Kepler’s laws from the inverse-square force is the historical payoff of this chapter’s tools.',
    ],
    quiz: [
      {
        q: 'A particle moves with constant speed along a curved path. What can be said about its acceleration?',
        options: ['It is always zero', 'It is perpendicular to the velocity', 'It is parallel to the velocity', 'It points along the tangent direction'],
        answer: 1,
        explanation: 'Differentiating $|\\mathbf{v}|^2 = \\mathbf{v} \\cdot \\mathbf{v}$ gives $2\\mathbf{v}\\cdot\\mathbf{a} = 0$, so acceleration is perpendicular to velocity — all of it is the normal (steering) component $a_N$.',
      },
      {
        q: 'The speed of a particle with $\\mathbf{r}(t) = \\langle 3\\cos t,\\ 3\\sin t,\\ 4t\\rangle$ is:',
        options: [`$5$ for all $t$`, `$\\sqrt{9 + 16t^2}$`, `$3 + 4t$`, 'It depends on $t$ through $\\sin t$ and $\\cos t$'],
        answer: 0,
        explanation: '$\\mathbf{v} = \\langle -3\\sin t, 3\\cos t, 4\\rangle$ and $|\\mathbf{v}| = \\sqrt{9(\\sin^2 t + \\cos^2 t) + 16} = 5$ — constant: this particle rides a helix at constant speed 5.',
      },
      {
        q: 'For uniform circular motion of radius $a$, the normal component of acceleration is:',
        options: [`$a_N = 0$`, `$a_N = \\frac{v^2}{a}$`, `$a_N = \\frac{a}{v^2}$`, `$a_N = v$`],
        answer: 1,
        explanation: 'A circle has curvature $\\kappa = 1/a$, so $a_N = \\kappa v^2 = v^2/a$ — the centripetal acceleration of elementary physics, pointing toward the center.',
      },
      {
        q: 'Neglecting air resistance, if a projectile’s launch speed $v_0$ is doubled (same angle, flat ground), the range is multiplied by:',
        options: [`$2$`, `$4$`, `$\\sqrt{2}$`, `$8$`],
        answer: 1,
        explanation: 'Range is $\\frac{v_0^2 \\sin 2\\alpha}{g}$ — quadratic in $v_0$, so doubling the launch speed quadruples the range.',
      },
      {
        q: 'A projectile is launched at $45^\\circ$ over flat ground with no air resistance. Its trajectory is:',
        options: ['A circle', 'A parabola', 'A straight line', 'A hyperbola'],
        answer: 1,
        explanation: 'Eliminating $t$ between $x = v_0\\cos\\alpha\\,t$ and $y = v_0\\sin\\alpha\\,t - \\frac{1}{2}gt^2$ gives a quadratic function of $x$: a parabola.',
      },
      // PYQ-pattern — launch angle maximizing projectile range (rephrased, values changed)
      {
        q: 'Over flat ground with fixed launch speed and no air resistance, the launch angle maximizing horizontal range is:',
        options: [`$45^{\\circ}$`, `$30^{\\circ}$`, `$60^{\\circ}$`, `$90^{\\circ}$`],
        answer: 0,
        explanation: 'Step 1: Restate range as $R(\\alpha) = \\frac{v_{0}^{2}\\sin 2\\alpha}{g}$ for $0 \\leq \\alpha \\leq \\frac{\\pi}{2}$. Step 2: Recall the key factor $\\sin 2\\alpha$ carries all angle dependence. Step 3: Maximize $\\sin 2\\alpha$ at $2\\alpha = \\frac{\\pi}{2}$, giving $\\alpha = \\frac{\\pi}{4}$. Step 4: Convert to degrees as $45^{\\circ}$ with $R_{\\max} = \\frac{v_{0}^{2}}{g}$. Step 5: The distractors fail since $30^{\\circ}$ and $60^{\\circ}$ give $\\sin 60^{\\circ} < 1$ and $90^{\\circ}$ fires straight up with zero range. Step 6: Hence $45^{\\circ}$ maximizes the range.'
      },
    ],
  },
]
