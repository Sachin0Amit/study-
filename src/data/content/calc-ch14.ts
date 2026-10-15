import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 14: Partial Derivatives (Sections 14.1 – 14.8)
// Master study content. Worked-example numbers are the book’s own or are
// fully verified by direct computation. Math is LaTeX rendered by KaTeX.
// ============================================================================

export const calcCh14Content: SectionContent[] = [
  // ------------------------------------------------------------------ 14.1
  {
    sectionId: 'calc-ch14-s1',
    readingTime: 8,
    intro: 'Functions until now have eaten one number and produced another. From here to the end of the book the inputs are points in the plane or in space: the temperature at a location, the pressure at an altitude, the output of an economy given labor and capital. This section defines **functions of several variables**, their domains and ranges, their graphs — which are surfaces — and the level curves that turn three-dimensional surfaces into readable two-dimensional contour maps.',
    objectives: [
      'Evaluate and interpret functions of two and three variables, and find their domains and ranges',
      'Visualize a graph $z = f(x, y)$ as a surface above the domain in the $xy$-plane',
      'Sketch and read level curves, and level surfaces for functions of three variables',
      'Recognize level curves in the wild: topographic contours, weather isotherms and isobars',
      'Interpret the Cobb–Douglas production function and its isoquants',
    ],
    concepts: [
      {
        term: 'Function of two variables',
        kind: 'definition',
        statement: 'A **function of two variables** is a rule that assigns to each ordered pair $(x, y)$ in a set $D$ of points in the plane a unique real number $f(x, y)$. The set $D$ is the **domain** and the set of values is the **range**; $x$ and $y$ are the independent variables and $z = f(x, y)$ the dependent variable.',
        detail: 'Exactly as in Chapter 1, the domain is the largest set of inputs for which the rule makes sense unless a physical context restricts it: denominators must be nonzero, even roots need nonnegative radicands, logarithms need positive arguments.',
      },
      {
        term: 'Graph of a function of two variables',
        kind: 'definition',
        statement: 'The **graph** of $f$ is the surface in $\\mathbb{R}^3$ consisting of all points $(x, y, z)$ with $z = f(x, y)$ and $(x, y)$ in the domain. Each vertical line over the domain meets the surface at most once.',
        detail: 'Plane curves from Chapter 1 become surfaces: $z = x^2 + y^2$ is a paraboloid opening upward, $z = y^2 - x^2$ a hyperbolic paraboloid (saddle), and the sphere $x^2 + y^2 + z^2 = a^2$ is not the graph of a function of two variables at all — the top and bottom hemispheres are the graphs of $z = \\sqrt{a^2 - x^2 - y^2}$ and $z = -\\sqrt{a^2 - x^2 - y^2}$ separately.',
      },
      {
        term: 'Level curves',
        kind: 'definition',
        statement: 'The **level curve** (contour) of $f$ with value $k$ is the set of points in the domain where $f(x, y) = k$. A family of level curves for evenly spaced values of $k$ is a **contour map** of the surface.',
        detail: 'Level curves are the tool that flattens a surface onto a page. For $f(x, y) = x^2 + y^2$ the level curves are circles $x^2 + y^2 = k$; for $f(x, y) = x^2 - y^2$ they are hyperbolas. Where contours crowd together the surface is steep; where they are far apart it is nearly flat. A hiker’s topographic map, a weather map’s isotherms and isobars, and a surveyor’s elevation map are all level curve families.',
      },
      {
        term: 'Functions of three variables and level surfaces',
        kind: 'definition',
        statement: 'A function of three variables $f(x, y, z)$ assigns a number to each point of space; its graph lives in four dimensions, so it is studied through its **level surfaces** $f(x, y, z) = k$. For example, the level surfaces of $f(x, y, z) = x^2 + y^2 + z^2$ are concentric spheres.',
        detail: 'Physical fields are usually three-variable functions: the temperature in a room $T(x, y, z)$, or the electrostatic potential around a charge. The level surfaces $T = k$ are called isotherms in space; heat flows from one isotherm to another in the direction of fastest change — the gradient of Section 14.6.',
      },
      {
        term: 'Cobb–Douglas production function',
        kind: 'insight',
        statement: 'Economists model total production as a function of the labor force $L$ and capital investment $K$ by the **Cobb–Douglas** form $$P = b\\,L^{\\alpha}K^{1 - \\alpha}, \\quad 0 < \\alpha < 1,$$ the book’s example being $P = 1.01\\,L^{0.75}K^{0.25}$.',
        detail: 'Its level curves $P = k$ are called isoquants: the combinations of labor and capital that yield the same output. The exponents measure how production responds to each input — they are exactly the partial derivatives of Section 14.3 in percentage terms, which is why economists were among the first customers for multivariable calculus.',
      },
      {
        term: 'Reading surfaces through traces and contours',
        kind: 'method',
        statement: 'To visualize $z = f(x, y)$: (1) intersect the surface with the vertical planes $x = a$ and $y = b$ to get **traces** — the cross-section curves; and (2) drop the level curves $f = k$ into the $xy$-plane to see where the surface is high, low, steep or flat.',
        detail: 'The two views are complementary: a trace shows the height profile along one line of sight, a contour map shows the shape at constant height. Computer graphing packages do exactly this internally, and the trace idea becomes the geometric interpretation of partial derivatives in the next sections.',
      },
    ],
    examples: [
      {
        title: 'Domain, range and graph of a hemisphere',
        problem: 'For $f(x, y) = \\sqrt{9 - x^2 - y^2}$, find the domain and range, describe the graph, and sketch the level curves.',
        steps: [
          { label: 'Step 1: Domain', text: 'The square root requires $9 - x^2 - y^2 \\ge 0$, that is $x^2 + y^2 \\le 9$: the closed disk of radius $3$ centered at the origin.' },
          { label: 'Step 2: Range', text: 'On that disk the radicand runs from $9$ down to $0$, so $f$ takes every value from $3$ down to $0$: the range is $[0, 3]$.' },
          { label: 'Step 3: Graph', text: 'Squaring $z = \\sqrt{9 - x^2 - y^2}$ gives $x^2 + y^2 + z^2 = 9$ with $z \\ge 0$: the graph is the upper hemisphere of the sphere of radius $3$.' },
          { label: 'Step 4: Level curves', text: 'Setting $f = k$ gives $x^2 + y^2 = 9 - k^2$ for $0 \\le k \\le 3$: circles of radius $\\sqrt{9 - k^2}$ shrinking from the rim circle of radius $3$ (at $k = 0$) to the single point $(0, 0)$ at the top (at $k = 3$).' },
        ],
        result: 'Domain: the disk $x^2 + y^2 \\le 9$; range: $[0, 3]$; graph: upper hemisphere; level curves: concentric circles that tighten toward the pole — the classic dome contour map.',
      },
      {
        title: 'Level curves of a downward paraboloid',
        problem: 'Sketch the level curves of $f(x, y) = 6 - x^2 - y^2$ for $k = 6, 2, -1$ and describe the surface.',
        steps: [
          { label: 'Step 1: Set up the level curve equation', text: '$6 - x^2 - y^2 = k$ rearranges to $x^2 + y^2 = 6 - k$.' },
          { label: 'Step 2: Plug in the values', text: '$k = 6$ gives the single point $(0, 0)$; $k = 2$ gives the circle of radius $\\sqrt{4} = 2$; $k = -1$ gives the circle of radius $\\sqrt{7}$.' },
          { label: 'Step 3: Watch the spacing', text: 'Equal steps in $k$ (of size $4$, then $3$) produce radii $0, 2, \\sqrt{7} \\approx 2.65$: the crowding circles show the bowl getting steeper as you move outward — the surface falls away faster and faster.' },
          { label: 'Step 4: Name the surface', text: 'The graph $z = 6 - x^2 - y^2$ is a circular paraboloid opening downward with vertex at $(0, 0, 6)$; the level curves are its constant-height slices.' },
        ],
        result: 'Level curves: a point at the origin and circles of radii $2$ and $\\sqrt{7}$ for $k = 2, -1$ — the contour signature of a downward-opening paraboloid.',
      },
      {
        title: 'Level curves of f(x, y) = xy',
        problem: 'Describe the level curves of $f(x, y) = xy$ and use them to predict the shape of the surface $z = xy$.',
        steps: [
          { label: 'Step 1: The level curve equation', text: '$xy = k$ is a hyperbola for each $k \\ne 0$: branches in the first and third quadrants when $k > 0$, in the second and fourth when $k < 0$.' },
          { label: 'Step 2: The special level $k = 0$', text: '$xy = 0$ is the pair of coordinate axes — the level curve through the origin degenerates into two crossing lines.' },
          { label: 'Step 3: Read the surface', text: 'The surface rises to $+\\infty$ along the diagonal $y = x$ and falls to $-\\infty$ along $y = -x$, while staying at height $0$ along both axes: it curves up in two opposite quadrants and down in the other two.' },
          { label: 'Step 4: Identify it', text: 'This is a hyperbolic paraboloid — the saddle — the same shape as $z = y^2 - x^2$ rotated $45^\\circ$. The origin is a saddle point, the star witness of Section 14.7.' },
        ],
        result: 'Level curves of $xy$: hyperbolas asymptotic to the axes, with the axes themselves as the $k = 0$ level — a contour map that warns of a saddle at the origin.',
      },
    ],
    keyTakeaways: [
      'A function of two variables assigns a number to each point of a plane domain; its graph is a surface $z = f(x, y)$.',
      'Domains are found with the same inequalities as in Chapter 1: protect denominators, even roots and logarithms.',
      'Level curves $f(x, y) = k$ flatten a surface into a contour map; tight spacing means steep terrain.',
      'Functions of three variables are studied through level surfaces $f(x, y, z) = k$, such as the concentric spheres of $x^2 + y^2 + z^2$.',
      'The Cobb–Douglas function $P = bL^{\\alpha}K^{1-\\alpha}$ turns production into calculus; its level curves are isoquants.',
      'The level curves of $xy$ are hyperbolas; the surface is a saddle — foreshadowing the critical point theory of Section 14.7.',
    ],
    quiz: [
      {
        q: 'The domain of $f(x, y) = \\ln(9 - x^2 - y^2)$ is:',
        options: ['The closed disk $x^2 + y^2 \\le 9$', 'The open disk $x^2 + y^2 < 9$', 'All of $\\mathbb{R}^2$', 'The circle $x^2 + y^2 = 9$'],
        answer: 1,
        explanation: 'The logarithm needs a positive argument: $9 - x^2 - y^2 > 0$, the strict inequality giving the open disk. On the boundary circle the argument would be $0$ and $\\ln 0$ is undefined.',
      },
      {
        q: 'The level curves of $f(x, y) = x^2 + y^2$ are:',
        options: ['Parallel lines', 'Hyperbolas', 'Circles centered at the origin', 'Parabolas'],
        answer: 2,
        explanation: '$x^2 + y^2 = k$ is a circle of radius $\\sqrt{k}$ for $k > 0$; the levels shrink to the origin as $k \\to 0$, matching the bowl shape of the paraboloid $z = x^2 + y^2$.',
      },
      {
        q: 'On a contour map of a smooth surface, level curves that are crowded close together indicate:',
        options: ['A nearly flat region', 'A steep region', 'A local maximum exactly at the curve', 'That the function is constant there'],
        answer: 1,
        explanation: 'Crowded contours mean a large change in height over a short horizontal distance — steep terrain. Widely spaced contours mean the surface is nearly flat.',
      },
      {
        q: 'The level surfaces of $f(x, y, z) = x^2 + y^2 + z^2$ are:',
        options: ['Planes', 'Cones', 'Spheres centered at the origin', 'Cylinders around the $z$-axis'],
        answer: 2,
        explanation: '$x^2 + y^2 + z^2 = k$ is a sphere of radius $\\sqrt{k}$: the farther the surface is from the origin in value, the larger the sphere — distance itself is the function.',
      },
      {
        q: 'In the Cobb–Douglas model $P = 1.01\\,L^{0.75}K^{0.25}$, the level curve $P = c$ represents:',
        options: ['Combinations of $L$ and $K$ yielding equal production $c$', 'The profit-maximizing $L$', 'Points where production is zero', 'The boundary of the domain of $P$'],
        answer: 0,
        explanation: 'A level curve (isoquant) of the production function collects all input mixes $(L, K)$ that produce the same output $c$ — the economist’s indifference-curve analog.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.2
  {
    sectionId: 'calc-ch14-s2',
    readingTime: 7,
    intro: 'A limit for a function of one variable worries about two directions of approach — left and right. In the plane a point can be approached along infinitely many paths, and the limit exists only if all of them agree. This makes failure easy to prove — find two disagreeing paths — and success hard: agreeing on every straight line still is not enough. This section builds that two-path test, the squeeze arguments that prove limits exist, and the definition of continuity.',
    objectives: [
      'State the $\\varepsilon$–$\\delta$ definition of $\\lim_{(x,y) \\to (a,b)} f(x, y) = L$',
      'Use the two-path test to prove that limits do not exist',
      'Prove limits exist using inequalities (the squeeze idea)',
      'Define continuity for functions of several variables and combine continuous functions',
      'Explain why path agreement on straight lines does not yet prove a limit exists',
    ],
    concepts: [
      {
        term: 'Limit of a function of two variables',
        kind: 'definition',
        statement: '$\\lim_{(x, y) \\to (a, b)} f(x, y) = L$ means: for every $\\varepsilon > 0$ there is a $\\delta > 0$ such that $|f(x, y) - L| < \\varepsilon$ whenever $(x, y)$ is in the domain and $0 < \\sqrt{(x - a)^2 + (y - b)^2} < \\delta$.',
        detail: 'The distance $\\sqrt{(x-a)^2 + (y-b)^2}$ replaces $|x - a|$: the point must be close to $(a, b)$ in the plane, from any direction. This single geometric change is the source of everything subtle in multivariable limits.',
      },
      {
        term: 'The two-path test',
        kind: 'method',
        statement: 'If $f(x, y)$ approaches two **different values** along two different paths approaching $(a, b)$, then $\\lim_{(x, y) \\to (a, b)} f(x, y)$ does not exist.',
        detail: 'The workhorse counterexample is $f(x, y) = \\frac{x^2}{x^2 + y^2}$: along the $x$-axis ($y = 0$) the value is $\\frac{x^2}{x^2} = 1$ for every $x \\ne 0$, while along the $y$-axis ($x = 0$) it is $0$. Approaching the origin on the two axes gives $1$ and $0$ — the limit cannot exist.',
      },
      {
        term: 'Continuity',
        kind: 'definition',
        statement: 'A function $f$ is **continuous at $(a, b)$** if $\\lim_{(x, y) \\to (a, b)} f(x, y) = f(a, b)$; it is continuous on a domain $D$ if this holds at every point, including one-sided limits at boundary points.',
        detail: 'Polynomial functions of several variables are continuous everywhere; rational functions are continuous on their domains (where denominators are nonzero); roots, exponentials, logarithms and trigonometric functions are continuous on their natural domains. Composites of continuous functions are continuous — so $\\sin(x^2 + y^2)$ and $e^{xy}$ are continuous everywhere.',
      },
      {
        term: 'Proving limits exist: squeeze with polar distance',
        kind: 'method',
        statement: 'To show $f(x, y) \\to 0$, bound $|f(x, y)| \\le g(y)$ or $\\le h\\left(\\sqrt{x^2 + y^2}\\right)$ by a function that visibly tends to $0$; the squeeze then forces $f \\to 0$.',
        detail: 'Example: for $f(x, y) = \\frac{3x^2 y}{x^2 + y^2}$, the inequality $3x^2 \\le 3(x^2 + y^2)$ gives $\\left|\\frac{3x^2 y}{x^2 + y^2}\\right| \\le 3|y|$, which shrinks to $0$ as $(x, y) \\to (0, 0)$ — a genuine proof, valid for all paths at once.',
      },
      {
        term: 'Why two-variable limits are harder',
        kind: 'insight',
        statement: 'For one-variable limits, testing the two sides suffices to suspect a limit; in the plane, agreeing along $y = mx$ for every slope $m$ — even along every straight line — still does not prove the limit exists, because curved paths can behave differently.',
        detail: 'The classic trap is $\\frac{x y^2}{x^2 + y^4}$: along every line $y = mx$ it tends to $0$, yet along the parabola $x = y^2$ it equals $\\frac{1}{2}$ identically. Only an inequality (squeeze) argument, or the $\\varepsilon$–$\\delta$ definition itself, certifies existence.',
      },
      {
        term: 'Functions of three variables',
        kind: 'notation',
        statement: 'The definitions transfer verbatim to $\\lim_{(x, y, z) \\to (a, b, c)} f(x, y, z)$: approach in space, two-path test in space, continuity componentwise through formulas built from continuous pieces.',
        detail: 'Nothing new is needed — the distance is now $\\sqrt{(x-a)^2 + (y-b)^2 + (z-c)^2}$. Stewart closes the section by using continuity to evaluate limits like $\\lim_{(x,y,z)\\to(1,2,3)} \\frac{x y^2 z}{x + y + z}$ by direct substitution, since the rational function is continuous where the denominator is nonzero.',
      },
    ],
    examples: [
      {
        title: 'A limit that fails the two-path test',
        problem: 'Show that $\\displaystyle\\lim_{(x, y) \\to (0, 0)} \\frac{x^2}{x^2 + y^2}$ does not exist.',
        steps: [
          { label: 'Step 1: Approach along the $x$-axis', text: 'Set $y = 0$: the function becomes $\\frac{x^2}{x^2 + 0} = 1$ for all $x \\ne 0$, so along this path the limit is $1$.' },
          { label: 'Step 2: Approach along the $y$-axis', text: 'Set $x = 0$: the function becomes $\\frac{0}{0 + y^2} = 0$ for all $y \\ne 0$, so along this path the limit is $0$.' },
          { label: 'Step 3: Compare', text: 'The same limit would have to equal both $1$ and $0$, which is impossible — two paths disagree.' },
          { label: 'Step 4: Extra evidence along the diagonal', text: 'Along $y = x$ the value is $\\frac{x^2}{2x^2} = \\frac{1}{2}$: every line $y = mx$ yields the different constant $\\frac{1}{1 + m^2}$, a whole spectrum of disagreements.' },
        ],
        result: 'The limit does not exist: the function remembers the direction of approach even as the distance to the origin shrinks to zero.',
      },
      {
        title: 'A limit that exists, by squeeze',
        problem: 'Evaluate $\\displaystyle\\lim_{(x, y) \\to (0, 0)} \\frac{3x^2 y}{x^2 + y^2}$.',
        steps: [
          { label: 'Step 1: Try paths first', text: 'Along $y = 0$ the expression is $0$; along $x = 0$ it is $0$; along $y = mx$ it is $\\frac{3m x^3}{x^2 + m^2 x^2} = \\frac{3m x}{1 + m^2} \\to 0$. Every line points to $0$ — so the answer is probably $0$, but this is not yet a proof.' },
          { label: 'Step 2: Build the inequality', text: 'Since $x^2 \\le x^2 + y^2$, we get $3x^2|y| \\le 3(x^2 + y^2)|y|$, and dividing by the positive quantity $x^2 + y^2$ gives $\\left|\\frac{3x^2 y}{x^2 + y^2}\\right| \\le 3|y|$.' },
          { label: 'Step 3: Squeeze', text: 'As $(x, y) \\to (0, 0)$, certainly $3|y| \\to 0$, so the absolute value of the function is trapped between $0$ and something tending to $0$.' },
          { label: 'Step 4: Conclude', text: 'By the squeeze, $\\frac{3x^2 y}{x^2 + y^2} \\to 0$ — now proven for every possible path at once.' },
        ],
        result: 'The limit is $0$: the quadratic growth of the denominator swamps the numerator in every direction simultaneously.',
      },
      {
        title: 'Path dependence along a one-parameter family',
        problem: 'Show that $\\displaystyle\\lim_{(x, y) \\to (0, 0)} \\frac{xy}{x^2 + y^2}$ does not exist by examining approaches along the lines $y = mx$.',
        steps: [
          { label: 'Step 1: Substitute the path', text: 'On $y = mx$ (with $m \\ne 0$), the function equals $\\frac{x \\cdot mx}{x^2 + m^2 x^2} = \\frac{m}{1 + m^2}$ — a constant that depends on the slope $m$.' },
          { label: 'Step 2: Evaluate two members of the family', text: 'Along $y = x$ ($m = 1$) the limit is $\\frac{1}{2}$; along $y = 2x$ ($m = 2$) it is $\\frac{2}{5}$. Along the axes ($m$ effectively $0$ or infinite) it is $0$.' },
          { label: 'Step 3: Conclude nonexistence', text: 'Different slopes give different limiting constants, so no single number can serve as the limit.' },
          { label: 'Step 4: Moral', text: 'The factor $\\frac{m}{1 + m^2}$ is the function’s direction-dependent signature at the origin — the exact opposite of a limit, which must be direction-blind.' },
        ],
        result: 'The limit does not exist; along $y = mx$ the function freezes at the path-dependent value $\\frac{m}{1 + m^2}$.',
      },
    ],
    keyTakeaways: [
      'A two-variable limit must be path-blind: the same value $L$ from every direction of approach within distance $\\delta$ of the point.',
      'Two disagreeing paths — e.g. $\\frac{x^2}{x^2 + y^2}$ along the two axes — instantly disprove existence.',
      'Agreement along every straight line is still not a proof; curved paths can disagree (the $\\frac{xy^2}{x^2 + y^4}$ trap).',
      'Existence is proven by inequalities: bounding $|f|$ by a quantity that visibly vanishes (squeeze).',
      'Polynomials, rational functions on their domains, and composites built from $\\sin$, $\\cos$, $e^x$, $\\ln$ are continuous; limits of such functions can be found by substitution.',
      'Everything carries over to functions of three variables with the spatial distance formula.',
    ],
    quiz: [
      {
        q: 'Along which path does $f(x, y) = \\frac{x^2}{x^2 + y^2}$ approach the value $1$ as $(x, y) \\to (0, 0)$?',
        options: [`$x = 0$`, `$y = 0$`, `$y = x$`, `$y = x^2$`],
        answer: 1,
        explanation: 'On the $x$-axis ($y = 0$) the function is identically $\\frac{x^2}{x^2} = 1$. The $y$-axis gives $0$ and the diagonal gives $\\frac{1}{2}$, so the full limit does not exist.',
      },
      {
        q: 'If two different paths toward $(a, b)$ give two different limiting values, then:',
        options: ['The limit exists and equals the average of the two values', 'The limit does not exist', 'The limit exists but is infinite', 'Nothing can be concluded'],
        answer: 1,
        explanation: 'A limit is a single number $L$ serving all approaches; two different forced values contradict the definition, so the limit fails to exist — this is the two-path test.',
      },
      {
        q: 'Evaluate $\\displaystyle\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y^2}{x^2 + y^2}$.',
        options: ['Does not exist', `$1$`, `$\\frac{1}{2}$`, `$0$`],
        answer: 3,
        explanation: 'Since $x^2 y^2 \\le \\frac{1}{4}(x^2 + y^2)^2$, the quotient satisfies $\\left|\\frac{x^2 y^2}{x^2 + y^2}\\right| \\le \\frac{1}{4}(x^2 + y^2) \\to 0$; the squeeze proves the limit is $0$.',
      },
      {
        q: 'The function $f(x, y) = e^{xy}\\sin(x^2 + y^2)$ is continuous:',
        options: ['Only at the origin', 'Everywhere except the origin', 'Everywhere in $\\mathbb{R}^2$', 'Wherever $x > 0$'],
        answer: 2,
        explanation: 'It is a composite of the polynomial $xy$ and $x^2 + y^2$ with the everywhere-continuous exponential and sine; composites of continuous functions are continuous, so $f$ is continuous on all of $\\mathbb{R}^2$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.3
  {
    sectionId: 'calc-ch14-s3',
    readingTime: 8,
    intro: 'Hold one variable frozen and differentiate in the other: that is the whole idea of a **partial derivative**. Each partial is an ordinary derivative of a cross-section — the slope of the curve where a vertical plane slices the surface. This section develops the notation, the geometry, Clairaut’s theorem that the mixed partials agree, higher derivatives, and a first meeting with partial differential equations, the equations that govern heat, waves and gravitation.',
    objectives: [
      'Compute partial derivatives from the limit definition and by the freeze-a-variable technique',
      'Interpret $f_x$ and $f_y$ geometrically as slopes of traces and physically as rates of change',
      'Use the partial derivative notations $f_x$, $\\frac{\\partial f}{\\partial x}$, $f_{xy}$ and their kin',
      'Apply Clairaut’s theorem on the equality of mixed partials',
      'Verify solutions of partial differential equations such as the Laplace equation',
    ],
    concepts: [
      {
        term: 'Partial derivatives',
        kind: 'definition',
        statement: 'The partial derivatives of $f(x, y)$ are $$f_x(x, y) = \\lim_{h \\to 0} \\frac{f(x + h,\\ y) - f(x, y)}{h} \\qquad \\text{and} \\qquad f_y(x, y) = \\lim_{h \\to 0} \\frac{f(x,\\ y + h) - f(x, y)}{h},$$ provided the limits exist.',
        detail: 'Only one variable moves at a time: $f_x$ is the ordinary derivative of the slice $g(x) = f(x, b)$ with $y$ frozen at $b$, and $f_y$ likewise freezes $x$. This is exactly the Chapter 2 derivative applied to a cross-section of the surface.',
      },
      {
        term: 'Notation for partial derivatives',
        kind: 'notation',
        statement: 'Write $f_x = \\frac{\\partial f}{\\partial x} = \\frac{\\partial z}{\\partial x} = D_x f = f_1$ and $f_y = \\frac{\\partial f}{\\partial y} = \\frac{\\partial z}{\\partial y} = D_y f = f_2$. Second derivatives: $f_{xx} = \\frac{\\partial^2 f}{\\partial x^2}$, $f_{xy} = \\frac{\\partial}{\\partial y}\\!\\left(\\frac{\\partial f}{\\partial x}\\right)$, and so on.',
        detail: 'The rounded $\\partial$ (introduced by Legendre) signals that other variables are being held fixed — a partial, not total, rate of change. The subscript order matters in $f_{xy}$: differentiate with respect to $x$ first, then $y$; Clairaut’s theorem below makes the order harmless for nice functions.',
      },
      {
        term: 'Computing partial derivatives',
        kind: 'method',
        statement: 'To find $f_x$: treat $y$ as a constant and differentiate with respect to $x$ by the single-variable rules of Chapter 3. To find $f_y$: treat $x$ as a constant and differentiate with respect to $y$.',
        detail: 'For $f(x, y) = x^3 y^2 + 2x\\sin y$: freezing $y$ gives $f_x = 3x^2 y^2 + 2\\sin y$ (the $y$-factor is a constant coefficient, and $\\sin y$ a constant term); freezing $x$ gives $f_y = 2x^3 y + 2x\\cos y$ (product rule on $2x \\cdot \\sin y$ with $2x$ constant).',
      },
      {
        term: 'Geometric interpretation',
        kind: 'insight',
        statement: 'If $z = f(x, y)$, then $f_x(a, b)$ is the slope at $x = a$ of the trace curve cut from the surface by the vertical plane $y = b$, and $f_y(a, b)$ is the slope at $y = b$ of the trace cut by the plane $x = a$.',
        detail: 'The two traces through a surface point $P$ have their own tangent lines at $P$ — with slopes $f_x$ and $f_y$ — and those two lines determine the tangent plane of Section 14.4. Physically, $f_x$ answers: if I walk due east across a hill, how fast do I rise per meter walked? The answer depends on the direction — the full story is the gradient of Section 14.6.',
      },
      {
        term: 'Clairaut’s theorem',
        kind: 'theorem',
        statement: 'If $f_{xy}$ and $f_{yx}$ are both **continuous** on an open disk containing $(a, b)$, then $$f_{xy}(a, b) = f_{yx}(a, b).$$',
        detail: 'For $f(x, y) = x^3 y^2 + 2x\\sin y$: $f_{xy} = 6x^2 y + 2\\cos y$ and $f_{yx} = 6x^2 y + 2\\cos y$ — the mixed partials agree, as they do for every function met in practice. The hypothesis matters: the book exhibits a piecewise function whose mixed partials at the origin disagree precisely because they are not continuous there.',
      },
      {
        term: 'Partial differential equations',
        kind: 'insight',
        statement: 'A **partial differential equation** relates the partial derivatives of an unknown function of several variables. The Laplace equation is $$\\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0,$$ and its solutions are called harmonic functions.',
        detail: 'Laplace’s equation governs steady-state temperature, electrostatic potential in a charge-free region and incompressible irrotational fluid flow — the same equation resurfaces in Chapters 15 and 16 (Green’s theorem links the double integral of the Laplacian to boundary flux). The wave equation $u_{tt} = c^2 u_{xx}$ and the heat equation are its time-dependent cousins.',
      },
      {
        term: 'Rates of change interpretation',
        kind: 'insight',
        statement: 'A partial derivative is a rate of change with the other inputs clamped: for a production function, $\\frac{\\partial P}{\\partial L}$ is the marginal productivity of labor — extra output per unit of extra labor, at fixed capital.',
        detail: 'This is how partial derivatives are read in economics, biology and engineering: each input gets its own sensitivity dial. The Cobb–Douglas function $P = bL^{\\alpha}K^{1-\\alpha}$ has $\\frac{\\partial P}{\\partial L} = \\alpha\\,\\frac{P}{L}$: the exponent is literally the elasticity of output with respect to that input.',
      },
    ],
    examples: [
      {
        title: 'Partial derivatives, checked against Clairaut',
        problem: 'For $f(x, y) = x^3 y^2 + 2x\\sin y$, compute $f_x$, $f_y$, both mixed second partials, and verify Clairaut’s theorem.',
        steps: [
          { label: 'Step 1: Freeze $y$, differentiate in $x$', text: 'Treating $y$ (and $\\sin y$) as constants: $f_x = 3x^2 y^2 + 2\\sin y$.' },
          { label: 'Step 2: Freeze $x$, differentiate in $y$', text: 'Now $x$ is the constant: $f_y = 2x^3 y + 2x\\cos y$, using the product rule on $2x \\cdot \\sin y$.' },
          { label: 'Step 3: The mixed partials', text: 'Differentiate $f_x$ in $y$: $f_{xy} = 6x^2 y + 2\\cos y$. Differentiate $f_y$ in $x$: $f_{yx} = 6x^2 y + 2\\cos y$.' },
          { label: 'Step 4: Compare and conclude', text: 'The two mixed partials are identical functions, continuous everywhere — Clairaut’s theorem confirms the agreement that the computation already showed.' },
        ],
        result: '$f_x = 3x^2 y^2 + 2\\sin y$, $f_y = 2x^3 y + 2x\\cos y$, and $f_{xy} = f_{yx} = 6x^2 y + 2\\cos y$.',
      },
      {
        title: 'Tangent lines to traces on a surface',
        problem: 'Find the slopes of the tangent lines at $(1, 1, 1)$ to the traces of the surface $z = 4 - x^2 - 2y^2$ cut by the planes $y = 1$ and $x = 1$, and write parametric equations for both lines.',
        steps: [
          { label: 'Step 1: Partial derivatives', text: '$z_x = -2x$ and $z_y = -4y$, so at $(1, 1)$: $z_x = -2$ and $z_y = -4$.' },
          { label: 'Step 2: Interpret the numbers', text: 'In the plane $y = 1$ the surface slices to the parabola $z = 4 - x^2 - 2$, whose slope at $x = 1$ is $-2$; in the plane $x = 1$ the slice $z = 4 - 1 - 2y^2$ has slope $-4$ at $y = 1$ — steeper, because the bowl is narrower in the $y$-direction.' },
          { label: 'Step 3: First tangent line', text: 'Through $(1, 1, 1)$ with slope $-2$ in the $x$-direction: $\\mathbf{r}_1(t) = \\langle 1 + t,\\ 1,\\ 1 - 2t\\rangle$.' },
          { label: 'Step 4: Second tangent line', text: 'Through $(1, 1, 1)$ with slope $-4$ in the $y$-direction: $\\mathbf{r}_2(t) = \\langle 1,\\ 1 + t,\\ 1 - 4t\\rangle$. These two lines span the tangent plane constructed in Section 14.4.' },
        ],
        result: 'Slopes $-2$ (in $x$) and $-4$ (in $y$); lines $\\langle 1 + t, 1, 1 - 2t\\rangle$ and $\\langle 1, 1 + t, 1 - 4t\\rangle$ through the point of tangency.',
      },
      {
        title: 'Verifying a solution of Laplace’s equation',
        problem: 'Show that $u(x, y) = e^x \\sin y$ is a harmonic function, that is, a solution of $u_{xx} + u_{yy} = 0$.',
        steps: [
          { label: 'Step 1: First partials', text: '$u_x = e^x \\sin y$ (the $\\sin y$ factor is constant in $x$) and $u_y = e^x \\cos y$ (the $e^x$ factor is constant in $y$).' },
          { label: 'Step 2: Second partials', text: 'Differentiating again: $u_{xx} = e^x \\sin y$ and $u_{yy} = -e^x \\sin y$ — the $y$-derivative flips sign because $\\frac{d}{dy}\\cos y = -\\sin y$.' },
          { label: 'Step 3: Add', text: '$u_{xx} + u_{yy} = e^x \\sin y - e^x \\sin y = 0$ for every $(x, y)$.' },
          { label: 'Step 4: Interpret', text: 'The surface $z = e^x \\sin y$ has the property that its $x$-curvature exactly cancels its $y$-curvature at every point — the signature of harmonic functions, which have no interior peaks or dips.' },
        ],
        result: '$u = e^x \\sin y$ satisfies Laplace’s equation identically — the imaginary part of the complex exponential, and one of the most important harmonic functions.',
      },
    ],
    keyTakeaways: [
      'Partial derivatives freeze one variable and differentiate in the other: $f_x$ from $\\lim_{h \\to 0}\\frac{f(x+h, y) - f(x, y)}{h}$.',
      'Geometrically, $f_x(a, b)$ is the slope of the trace in the plane $y = b$, and $f_y(a, b)$ the slope of the trace in the plane $x = a$.',
      'Clairaut’s theorem: when the mixed partials are continuous, $f_{xy} = f_{yx}$ — order does not matter.',
      'The $\\partial$ notation flags which variable moves and which are frozen; $f_{xy}$ differentiates in $x$ first, then $y$.',
      'The Laplace equation $u_{xx} + u_{yy} = 0$ has solutions like $e^x\\sin y$ and $x^2 - y^2$; these harmonic functions have no interior maxima or minima.',
      'In applications each partial is a sensitivity: marginal productivity, marginal cost, a directional rate of change along an axis.',
    ],
    quiz: [
      {
        q: 'If $f(x, y) = x^2 y^3$, then $f_x(x, y)$ is:',
        options: [`$2xy^3$`, `$3x^2y^2$`, `$x^3 y^2$`, `$6xy^2$`],
        answer: 0,
        explanation: 'Freeze $y$ (so $y^3$ is a constant coefficient) and differentiate $x^2$: $f_x = 2x y^3$. Differentiating in $y$ instead would give $3x^2y^2$ — that is $f_y$.',
      },
      {
        q: 'Geometrically, $f_x(a, b)$ is the slope at $x = a$ of:',
        options: ['The level curve $f(x, y) = f(a, b)$', 'The trace of the surface in the vertical plane $y = b$', 'The projection of the surface onto the $xy$-plane', 'The tangent plane at $(a, b, f(a,b))$'],
        answer: 1,
        explanation: 'Slicing the surface $z = f(x, y)$ with the plane $y = b$ leaves a plane curve whose ordinary slope at $x = a$ is exactly $f_x(a, b)$. Level curves lie in the horizontal plane, and a plane is not a slope.',
      },
      {
        q: 'For $f(x, y) = \\sin(xy)$, the partial derivative $f_y$ is:',
        options: [`$\\cos(xy)$`, `$y\\cos(xy)$`, `$x\\cos(xy)$`, `$-x\\sin(xy)$`],
        answer: 2,
        explanation: 'Freezing $x$ makes $u = xy$ a linear function of $y$ with slope $x$; the chain rule gives $f_y = \\cos(xy) \\cdot x = x\\cos(xy)$.',
      },
      {
        q: 'Clairaut’s theorem states that $f_{xy} = f_{yx}$ at a point provided:',
        options: ['$f$ itself is a polynomial', 'Both mixed partials are continuous near the point', 'Both $f_x$ and $f_y$ are positive there', 'The point is the origin'],
        answer: 1,
        explanation: 'Continuity of the mixed second partials on a disk around the point is the hypothesis; under it the order of differentiation is interchangeable. Without it, the book’s pathological example shows the equality can fail.',
      },
      {
        q: 'Which of these functions satisfies Laplace’s equation $u_{xx} + u_{yy} = 0$?',
        options: [`$u = x^2 + y^2$`, `$u = x^3$`, `$u = x^2 y^3$`, `$u = e^x \\sin y$`],
        answer: 3,
        explanation: 'For $e^x\\sin y$: $u_{xx} = e^x\\sin y$ and $u_{yy} = -e^x\\sin y$, summing to zero. For the others the sum is $4$, $6x$ and $2y^3 + 6x^2 y$ respectively — nonzero.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.4
  {
    sectionId: 'calc-ch14-s4',
    readingTime: 8,
    intro: 'Zoom in on a smooth surface and it flattens: locally, the tangent plane replaces the graph the way the tangent line replaced plane curves in Chapter 2. The tangent plane gives the **linearization** $L(x, y)$, the **differential** $dz$ estimates the change $\\Delta z$, and the standard engineering question — how measurement errors propagate through a formula — becomes a two-line computation.',
    objectives: [
      'Write the equation of the tangent plane to $z = f(x, y)$ at a point',
      'Form the linearization $L(x, y)$ and use it to approximate nearby values',
      'Compute the total differential $dz = f_x\\,dx + f_y\\,dy$ and interpret $\\Delta z \\approx dz$',
      'Estimate propagated errors and relative errors in formulas from measured inputs',
      'State what differentiability means for a function of two variables and how it relates to continuity',
    ],
    concepts: [
      {
        term: 'Tangent plane',
        kind: 'theorem',
        statement: 'If $f_x$ and $f_y$ exist near $(a, b)$ and are continuous at $(a, b)$, the surface $z = f(x, y)$ has a tangent plane at $P_0 = (a, b, f(a, b))$: $$z - z_0 = f_x(a, b)(x - a) + f_y(a, b)(y - b).$$',
        detail: 'The plane contains both tangent lines to the traces (slopes $f_x$ and $f_y$ from Section 14.3), and those two directions span it. Continuity of the partials is what makes the plane genuinely tangent rather than just touching along two lines.',
      },
      {
        term: 'Linearization and linear approximation',
        kind: 'definition',
        statement: 'The **linearization** of $f$ at $(a, b)$ is $$L(x, y) = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b),$$ and the **linear approximation** is $f(x, y) \\approx L(x, y)$ for $(x, y)$ near $(a, b)$.',
        detail: 'The graph of $L$ is exactly the tangent plane, so approximating $f$ by $L$ means replacing the surface by its tangent plane near the point of tangency — the two-variable twin of $f(x) \\approx f(a) + f\'(a)(x - a)$ from Section 3.10.',
      },
      {
        term: 'Total differential',
        kind: 'notation',
        statement: 'The (total) **differential** is $$dz = f_x(x, y)\\,dx + f_y(x, y)\\,dy,$$ where $dx$ and $dy$ are small independent changes. If $dx = \\Delta x$ and $dy = \\Delta y$ are the actual changes in the inputs, then $\\Delta z = f(x + \\Delta x, y + \\Delta y) - f(x, y)$ is approximated by $dz$.',
        detail: 'The differential is the linearization in disguise: the change of $L$ under the displacement $(dx, dy)$. Its quality is controlled by differentiability: the error $\\Delta z - dz$ is small even compared with $\\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$ as the displacement shrinks.',
      },
      {
        term: 'Differentiability',
        kind: 'definition',
        statement: '$f$ is **differentiable at $(a, b)$** if $\\Delta z$ can be written as $$\\Delta z = f_x(a, b)\\,\\Delta x + f_y(a, b)\\,\\Delta y + \\varepsilon_1 \\Delta x + \\varepsilon_2 \\Delta y$$ with $\\varepsilon_1, \\varepsilon_2 \\to 0$ as $(\\Delta x, \\Delta y) \\to (0, 0)$.',
        detail: 'Differentiability is the property that makes the tangent plane approximation honest. Two theorems bracket it: differentiable implies continuous, and continuous partials imply differentiable — the sufficient condition satisfied by essentially every function in this book.',
      },
      {
        term: 'Error propagation',
        kind: 'method',
        statement: 'If $w = f(x, y)$ is computed from measured inputs $x$ and $y$ with errors $dx$, $dy$, the **propagated error** is estimated by $dw = f_x\\,dx + f_y\\,dy$, and the **relative error** is $\\dfrac{dw}{w}$.',
        detail: 'This is the differential doing its job: in the book’s cone example a $2.4\\%$ relative error in the inputs produces a $2.4\\%$ error in volume — computed in two lines instead of a painful exact recomputation. The same scheme extends verbatim to any number of inputs.',
      },
      {
        term: 'Functions of three variables',
        kind: 'notation',
        statement: 'For $w = f(x, y, z)$: linearization $L = f(a, b, c) + f_x\\,(x - a) + f_y\\,(y - b) + f_z\\,(z - c)$ and differential $dw = f_x\\,dx + f_y\\,dy + f_z\\,dz$.',
        detail: 'One term per input. The pattern — base value plus one sensitivity-times-displacement per direction — is the universal shape of first-order approximation, and it is exactly the expression that reappears as the directional derivative of Section 14.6.',
      },
    ],
    examples: [
      {
        title: 'Tangent plane and linearization of a saddle',
        problem: 'Find the tangent plane and the linearization of $f(x, y) = y^2 - x^2$ at $(1, -1)$, and use $L$ to estimate $f(1.05,\\ -1.02)$.',
        steps: [
          { label: 'Step 1: The partials', text: '$f_x = -2x$ and $f_y = 2y$, so at $(1, -1)$: $f_x = -2$, $f_y = -2$, and $f(1, -1) = 1 - 1 = 0$.' },
          { label: 'Step 2: Tangent plane', text: '$z - 0 = -2(x - 1) - 2(y + 1)$, which simplifies to $z = -2x - 2y$. Check the point: $-2(1) - 2(-1) = 0$ ✓.' },
          { label: 'Step 3: Linearization', text: '$L(x, y) = -2x - 2y$ — the tangent plane function itself.' },
          { label: 'Step 4: Approximate nearby', text: '$L(1.05, -1.02) = -2.10 + 2.04 = -0.06$, while the true value is $(1.02)^2 - (1.05)^2 = 1.0404 - 1.1025 = -0.0621$: off by about $0.002$ for a $0.05$-sized step — the quadratic error in the step size, exactly as in the one-variable theory.' },
        ],
        result: 'Tangent plane $z = -2x - 2y$; linearization $L = -2x - 2y$; estimate $-0.06$ versus true $-0.0621$.',
      },
      {
        title: 'Error propagation in the volume of a cone',
        problem: 'The base radius and height of a right circular cone are measured as $r = 10$ cm and $h = 25$ cm with a possible error of $0.1$ cm each. Estimate the resulting error in the computed volume, and the relative error.',
        steps: [
          { label: 'Step 1: The formula', text: '$V = \\frac{1}{3}\\pi r^2 h$ — a function of two measured inputs.' },
          { label: 'Step 2: The differential of $V$', text: '$\\frac{\\partial V}{\\partial r} = \\frac{2}{3}\\pi r h$ and $\\frac{\\partial V}{\\partial h} = \\frac{1}{3}\\pi r^2$, so $dV = \\frac{\\pi}{3}\\left(2rh\\,dr + r^2\\,dh\\right)$.' },
          { label: 'Step 3: Insert the numbers', text: 'With $dr = dh = 0.1$: $dV = \\frac{\\pi}{3}\\left(2 \\cdot 10 \\cdot 25 \\cdot 0.1 + 10^2 \\cdot 0.1\\right) = \\frac{\\pi}{3}(50 + 10) = 20\\pi \\approx 62.8$ cm³.' },
          { label: 'Step 4: Relative error', text: 'The computed volume is $V = \\frac{2500\\pi}{3} \\approx 2618$ cm³, so the relative error is $\\frac{62.8}{2618} \\approx 0.024$ — about $2.4\\%$.' },
        ],
        result: 'The volume may be off by roughly $20\\pi \\approx 63$ cm³, a relative error of about $2.4\\%$.',
      },
      {
        title: 'Tin needed for a closed can',
        problem: 'Use differentials to estimate the amount of tin in a closed cylindrical can with diameter $8$ cm and height $12$ cm if the tin is $0.04$ cm thick.',
        steps: [
          { label: 'Step 1: Model the metal as the error', text: 'The tin occupies the thin shell between the can made to radius $r = 4$ cm, height $h = 12$ cm and the slightly larger can with $r + 0.04$, $h + 0.08$ (two lids, top and bottom, contribute to the height). So estimate $\\Delta V$ with $dr = 0.04$ and $dh = 0.08$.' },
          { label: 'Step 2: Differential of the volume', text: 'For $V = \\pi r^2 h$: $dV = 2\\pi r h\\,dr + \\pi r^2\\,dh$.' },
          { label: 'Step 3: Insert the numbers', text: '$dV = 2\\pi(4)(12)(0.04) + \\pi(16)(0.08) = 3.84\\pi + 1.28\\pi = 5.12\\pi \\approx 16.1$ cm³.' },
          { label: 'Step 4: Interpret', text: 'About $16$ cm³ of tin — the exact value would require subtracting volumes of cans with and without the shell, but the differential gives the same first-order answer instantly.' },
        ],
        result: 'Approximately $5.12\\pi \\approx 16.1$ cm³ of tin is needed — the book’s classic differential-at-work example.',
      },
    ],
    keyTakeaways: [
      'The tangent plane at $(a, b)$ is $z - z_0 = f_x(a, b)(x - a) + f_y(a, b)(y - b)$; it contains the two trace tangent lines.',
      'The linearization $L(x, y) = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b)$ turns the plane into an approximation machine.',
      'The total differential $dz = f_x\\,dx + f_y\\,dy$ approximates the true change $\\Delta z$; relative error is $dw/w$.',
      'Error propagation: measured errors $dx$, $dy$ produce an estimated output error $dw$ — two lines instead of a recomputation.',
      'Differentiable implies continuous; continuous partials imply differentiable — the condition behind every tangent plane in this book.',
      'The same pattern works for functions of three or more variables: one term per input.',
    ],
    quiz: [
      {
        q: 'The tangent plane to $z = x^2 + y^2$ at the point $(1, 1, 2)$ is:',
        options: [`$z = 2 + 2(x - 1) + 2(y - 1)$`, `$z = 2 + (x - 1) + (y - 1)$`, `$z = x + y$`, `$z = 2 - 2x - 2y$`],
        answer: 0,
        explanation: '$z_x = 2x = 2$ and $z_y = 2y = 2$ at $(1, 1)$, so $z - 2 = 2(x - 1) + 2(y - 1)$. The other options use wrong slopes or wrong anchoring at the point.',
      },
      {
        q: 'For $f(x, y) = x^2 y$, the total differential $dz$ is:',
        options: [`$2xy\\,dx + x^2\\,dy$`, `$xy\\,dx + x^2\\,dy$`, `$2x\\,dx + y\\,dy$`, `$x^2\\,dx + 2xy\\,dy$`],
        answer: 0,
        explanation: 'Freeze $y$ for $f_x = 2xy$ and freeze $x$ for $f_y = x^2$, then combine as $dz = f_x\\,dx + f_y\\,dy = 2xy\\,dx + x^2\\,dy$.',
      },
      {
        q: 'Which implication is correct?',
        options: ['Continuous implies differentiable', 'Differentiable implies the partials are continuous', 'Continuous partials imply differentiable, and differentiable implies continuous', 'None of these implications hold for functions of two variables'],
        answer: 2,
        explanation: 'The chain is: continuous partials ⟹ differentiable ⟹ continuous. Neither arrow reverses in general — a differentiable function can have discontinuous partials, and continuity alone does not give differentiability.',
      },
      {
        q: 'A cylinder’s radius and height are both measured with $1\\%$ relative error. Using differentials, the estimated relative error in the volume $V = \\pi r^2 h$ is:',
        options: [`$1\\%$`, `$2\\%$`, `$3\\%$`, `$\\frac{1}{3}\\%$`],
        answer: 2,
        explanation: '$\\frac{dV}{V} = 2\\frac{dr}{r} + \\frac{dh}{h} = 2(1\\%) + 1(1\\%) = 3\\%$: the exponent of each factor counts how many times its relative error enters.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.5
  {
    sectionId: 'calc-ch14-s5',
    readingTime: 8,
    intro: 'When $z$ depends on $x$ and $y$, and each of $x$ and $y$ depends on $t$, then $z$ reaches back to $t$ through two channels at once. The multivariable chain rule adds the contributions of every path through the dependency **tree diagram** — the pattern $\\frac{\\partial z}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial z}{\\partial y}\\frac{dy}{dt}$. Applied to $F(x, y) = 0$, the same machinery yields implicit differentiation formulas for free.',
    objectives: [
      'Apply the chain rule (Case 1) when the intermediates depend on one variable',
      'Apply the chain rule (Case 2) with two independent variables and use tree diagrams',
      'Use the implicit differentiation formulas $\\frac{dy}{dx} = -\\frac{F_x}{F_y}$ and $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$',
      'Choose the version of the chain rule that matches the dependency structure of a problem',
    ],
    concepts: [
      {
        term: 'Chain rule, Case 1 (one independent variable)',
        kind: 'theorem',
        statement: 'If $z = f(x, y)$ where $x = g(t)$ and $y = h(t)$, with $g$, $h$ differentiable and the partials of $f$ continuous, then $$\\frac{dz}{dt} = \\frac{\\partial z}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial z}{\\partial y}\\frac{dy}{dt}.$$',
        detail: 'The derivative is a sum over the two paths from $z$ to $t$: through $x$ and through $y$. If $x$ and $y$ were both increasing at unit rate in a way that cancels — one pulling $z$ up, the other down — the sum sees the cancellation, which a single partial never would.',
      },
      {
        term: 'Chain rule, Case 2 (two independent variables)',
        kind: 'theorem',
        statement: 'If $z = f(x, y)$ where $x = g(s, t)$ and $y = h(s, t)$, then $$\\frac{\\partial z}{\\partial s} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial s}, \\qquad \\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t}.$$',
        detail: 'The symbol is now $\\partial$ rather than $d$ because $z$ depends on $s$ and $t$ simultaneously: each equation freezes the other independent variable. The two formulas are Case 1 applied twice — once per independent variable.',
      },
      {
        term: 'Tree diagrams',
        kind: 'method',
        statement: 'Draw the dependency tree: an arrow from each variable into the variables it depends on. **Multiply derivatives along each branch, add the results across branches** — this generates the correct chain rule formula for any number of variables.',
        detail: 'For $z \\to \\{x, y\\}$, $\\{x, y\\} \\to \\{s, t\\}$, the two branches into $s$ give $\\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial s}$ and $\\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial s}$, and their sum is $\\frac{\\partial z}{\\partial s}$. The book extends the diagram to $z$ depending on three intermediates and to explicit functions like $w = f(x, y, z)$ with $z$ in the chain — the recipe never changes.',
      },
      {
        term: 'Implicit differentiation, one equation',
        kind: 'theorem',
        statement: 'If the equation $F(x, y) = 0$ defines $y$ implicitly as a differentiable function of $x$ and $F_y \\ne 0$, then $$\\frac{dy}{dx} = -\\frac{F_x}{F_y}.$$ Likewise, if $F(x, y, z) = 0$ defines $z$ as a function of $(x, y)$ and $F_z \\ne 0$, then $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$ and $\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$.',
        detail: 'Set $z = F(x, y(x))$ and differentiate with the chain rule: $F_x + F_y \\frac{dy}{dx} = 0$, then solve. This reproduces the implicit differentiation of Section 3.5 — for the circle $x^2 + y^2 = 25$ it gives $\\frac{dy}{dx} = -\\frac{x}{y}$, i.e. $-\\frac{3}{4}$ at $(3, 4)$ — but now it scales effortlessly to variables that cannot be solved for explicitly.',
      },
      {
        term: 'Choosing the right form',
        kind: 'insight',
        statement: 'Read the dependency structure first: how many independent variables (time? space?), how many intermediates, which are explicit. The chain rule is then dictated by the tree — there is nothing to memorize beyond multiply-along-branches, add-across-branches.',
        detail: 'In related-rates problems — a weather balloon expanding while rising — each geometric relation is a branch; the total rate of change of any quantity is the sum over the paths through its dependencies. Stewart’s examples of changing pressure/temperature along a flight path are exactly this bookkeeping.',
      },
    ],
    examples: [
      {
        title: 'Chain rule along a parametrized path',
        problem: 'If $z = x^2 y + 3xy^4$, where $x = \\sin 2t$ and $y = \\cos t$, find $\\frac{dz}{dt}$ when $t = 0$.',
        steps: [
          { label: 'Step 1: The partials of $z$', text: 'Freezing $y$: $\\frac{\\partial z}{\\partial x} = 2xy + 3y^4$. Freezing $x$: $\\frac{\\partial z}{\\partial y} = x^2 + 12xy^3$.' },
          { label: 'Step 2: The derivatives of the intermediates', text: '$\\frac{dx}{dt} = 2\\cos 2t$ and $\\frac{dy}{dt} = -\\sin t$.' },
          { label: 'Step 3: Assemble the chain rule', text: '$\\frac{dz}{dt} = (2xy + 3y^4)(2\\cos 2t) + (x^2 + 12xy^3)(-\\sin t)$.' },
          { label: 'Step 4: Evaluate at $t = 0$', text: 'At $t = 0$: $x = \\sin 0 = 0$, $y = \\cos 0 = 1$, so the first factor is $(0 + 3)(2) = 6$ and the second is $(0 + 0)(0) = 0$.' },
        ],
        result: '$\\frac{dz}{dt} = 6$ at $t = 0$: at that instant the point $(x, y) = (0, 1)$ is moving through the $xy$-plane in a way that increases $z$ at rate $6$.',
      },
      {
        title: 'Two independent variables with a tree diagram',
        problem: 'If $z = e^x \\sin y$, where $x = st^2$ and $y = s^2 t$, find $\\frac{\\partial z}{\\partial s}$ and $\\frac{\\partial z}{\\partial t}$.',
        steps: [
          { label: 'Step 1: Draw the tree', text: 'From $z$ there are two branches to intermediates $x$ and $y$, and from each of them two branches to $s$ and $t$. For $\\frac{\\partial z}{\\partial s}$, follow the two paths ending at $s$.' },
          { label: 'Step 2: The building blocks', text: '$\\frac{\\partial z}{\\partial x} = e^x \\sin y$, $\\frac{\\partial z}{\\partial y} = e^x \\cos y$, $\\frac{\\partial x}{\\partial s} = t^2$, $\\frac{\\partial y}{\\partial s} = 2st$, $\\frac{\\partial x}{\\partial t} = 2st$, $\\frac{\\partial y}{\\partial t} = s^2$.' },
          { label: 'Step 3: Multiply along branches and add', text: '$\\frac{\\partial z}{\\partial s} = e^x \\sin y \\cdot t^2 + e^x \\cos y \\cdot 2st$ and $\\frac{\\partial z}{\\partial t} = e^x \\sin y \\cdot 2st + e^x \\cos y \\cdot s^2$.' },
          { label: 'Step 4: Substitute the intermediates', text: 'With $x = st^2$ and $y = s^2t$: $\\frac{\\partial z}{\\partial s} = e^{st^2}\\bigl(t^2\\sin(s^2 t) + 2st\\cos(s^2 t)\\bigr)$ and $\\frac{\\partial z}{\\partial t} = e^{st^2}\\bigl(2st\\sin(s^2 t) + s^2\\cos(s^2 t)\\bigr)$.' },
        ],
        result: 'Both partials factor as $e^{st^2}$ times a bracket of sine and cosine terms — the tree diagram delivered the full expansion with no guesswork.',
      },
      {
        title: 'Implicit differentiation by formula: the folium of Descartes',
        problem: 'The folium of Descartes is the curve $x^3 + y^3 = 6xy$. Find $\\frac{dy}{dx}$ and evaluate it at the point $(3, 3)$.',
        steps: [
          { label: 'Step 1: Write the curve as $F = 0$', text: '$F(x, y) = x^3 + y^3 - 6xy$, so the curve is the level set $F = 0$.' },
          { label: 'Step 2: Compute the partials of $F$', text: '$F_x = 3x^2 - 6y$ and $F_y = 3y^2 - 6x$.' },
          { label: 'Step 3: Apply the formula', text: '$\\frac{dy}{dx} = -\\frac{F_x}{F_y} = -\\frac{3x^2 - 6y}{3y^2 - 6x} = \\frac{2y - x^2}{y^2 - 2x}$, valid where $y^2 \\ne 2x$.' },
          { label: 'Step 4: Evaluate at $(3, 3)$', text: '$\\frac{dy}{dx} = \\frac{6 - 9}{9 - 6} = \\frac{-3}{3} = -1$: the folium crosses the diagonal at $45^\\circ$, exactly as its symmetric loop requires.' },
        ],
        result: '$\\frac{dy}{dx} = \\frac{2y - x^2}{y^2 - 2x}$, equal to $-1$ at $(3, 3)$ — no solving for $y$ needed, which is fortunate since no closed form is pleasant here.',
      },
    ],
    keyTakeaways: [
      'Case 1: $\\frac{dz}{dt} = \\frac{\\partial z}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial z}{\\partial y}\\frac{dy}{dt}$ — a sum over the paths through the intermediates.',
      'Case 2 adds an equation per independent variable, with $\\partial$ replacing $d$.',
      'Tree diagrams generate the correct formula in any setup: multiply along branches, add across branches.',
      'Implicit differentiation: $\\frac{dy}{dx} = -\\frac{F_x}{F_y}$ from $F(x, y) = 0$; $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$ from $F(x, y, z) = 0$.',
      'The folium slope at $(3, 3)$ is $-1$, recovered instantly from partials of $F$.',
    ],
    quiz: [
      {
        q: 'If $z = f(x, y)$ with $x = g(t)$ and $y = h(t)$, then $\\frac{dz}{dt}$ equals:',
        options: ['$\\frac{\\partial z}{\\partial x}\\frac{dx}{dt}$ only', `$\\frac{\\partial z}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial z}{\\partial y}\\frac{dy}{dt}$`, `$\\frac{\\partial z}{\\partial x}\\frac{\\partial y}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial x}{\\partial t}$`, `$\\frac{\\partial^2 z}{\\partial x \\partial y}$`],
        answer: 1,
        explanation: 'Both paths from $z$ to $t$ contribute: through $x$ and through $y$, each partial times the rate of its intermediate. Swapping the pairing (option 3) crosses the branches of the tree.',
      },
      {
        q: 'For $z = f(x, y)$, $x = g(s, t)$, $y = h(s, t)$, how many terms does $\\frac{\\partial z}{\\partial s}$ have?',
        options: ['One', 'Two', 'Three', 'Four'],
        answer: 1,
        explanation: 'There are exactly two intermediates ($x$ and $y$), so two paths reach $s$: $\\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial s}$. One term per intermediate.',
      },
      {
        q: 'The circle $x^2 + y^2 = 25$ is the level set $F = x^2 + y^2 - 25 = 0$. At the point $(3, 4)$, $\\frac{dy}{dx}$ equals:',
        options: [`$\\frac{3}{4}$`, `$-\\frac{3}{4}$`, `$-\\frac{4}{3}$`, `$\\frac{4}{3}$`],
        answer: 1,
        explanation: '$\\frac{dy}{dx} = -\\frac{F_x}{F_y} = -\\frac{2x}{2y} = -\\frac{x}{y} = -\\frac{3}{4}$ at $(3, 4)$ — the slope is negative on the rising quarter of the circle.',
      },
      {
        q: 'If $z = x^2 y$ with $x = e^t$ and $y = t$, then $\\frac{dz}{dt}$ is:',
        options: [`$2xy e^t + x^2$`, `$2xy + x^2 t$`, `$2xy\\,t + x^2 e^t$`, `$x^2 y e^t$`],
        answer: 0,
        explanation: 'Chain rule: $\\frac{\\partial z}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial z}{\\partial y}\\frac{dy}{dt} = 2xy \\cdot e^t + x^2 \\cdot 1$. The intermediate rates ($e^t$ and $1$) pair with their own partials.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.6
  {
    sectionId: 'calc-ch14-s6',
    readingTime: 9,
    intro: 'Partial derivatives measure rates of change along the coordinate axes only. The **directional derivative** measures the rate of change in any direction at all — and packages all of those directions into a single vector: the **gradient**. The gradient points uphill as steeply as possible, its length is the steepness, and it is perpendicular to the level curves. It is the single most useful object of multivariable calculus, from weather forecasting to gradient descent in machine learning.',
    objectives: [
      'Define the directional derivative $D_\\mathbf{u} f$ and compute it from the limit and from the gradient',
      'Compute the gradient vector $\\nabla f$ and interpret its magnitude and direction',
      'State and use the maximization theorem for $D_\\mathbf{u} f$',
      'Explain why the gradient is perpendicular to level curves (and level surfaces)',
      'Write the tangent plane to a level surface $F(x, y, z) = k$ using $\\nabla F$',
    ],
    concepts: [
      {
        term: 'Directional derivative',
        kind: 'definition',
        statement: 'The **directional derivative** of $f$ at $(x_0, y_0)$ in the direction of a unit vector $\\mathbf{u} = \\langle a, b\\rangle$ is $$D_\\mathbf{u} f(x_0, y_0) = \\lim_{h \\to 0} \\frac{f(x_0 + ha,\\ y_0 + hb) - f(x_0, y_0)}{h}.$$ It is the slope of the surface in the direction of $\\mathbf{u}$: with $\\mathbf{u} = \\mathbf{i}$ it is $f_x$, and with $\\mathbf{u} = \\mathbf{j}$ it is $f_y$.',
        detail: 'The direction must be a unit vector — the formula measures rise per unit distance walked in direction $\\mathbf{u}$, and a non-unit vector would distort the scale. To differentiate along $\\langle 3, 4\\rangle$, first normalize to $\\frac{1}{5}\\langle 3, 4\\rangle$.',
      },
      {
        term: 'The gradient vector',
        kind: 'notation',
        statement: 'The **gradient** of $f$ is the vector of its partials: $$\\nabla f(x, y) = \\left\\langle \\frac{\\partial f}{\\partial x},\\ \\frac{\\partial f}{\\partial y} \\right\\rangle = \\frac{\\partial f}{\\partial x}\\mathbf{i} + \\frac{\\partial f}{\\partial y}\\mathbf{j}.$$ For $f(x, y, z)$ it gains the third partial $\\frac{\\partial f}{\\partial z}$.',
        detail: 'The symbol $\\nabla$ (nabla, named after a harp) reads “del” or “grad”. The gradient lives in the input space — at each point of the domain it plants one arrow. It is not a direction on the surface; it is a compass in the $xy$-plane.',
      },
      {
        term: 'Computing directional derivatives',
        kind: 'theorem',
        statement: 'If $f$ is a differentiable function of $x$ and $y$, then $$D_\\mathbf{u} f(x, y) = \\nabla f(x, y) \\cdot \\mathbf{u}$$ for every unit vector $\\mathbf{u}$.',
        detail: 'One dot product replaces a limit per direction: compute the gradient once, then project it onto any direction wanted. The formula also reveals the extreme values, because a dot product $\\nabla f \\cdot \\mathbf{u}$ is largest when $\\mathbf{u}$ aligns with $\\nabla f$.',
      },
      {
        term: 'Maximizing the directional derivative',
        kind: 'theorem',
        statement: 'As $\\mathbf{u}$ ranges over all unit vectors: $D_\\mathbf{u} f$ is **largest**, equal to $|\\nabla f|$, when $\\mathbf{u}$ points along $\\nabla f$; **smallest**, equal to $-|\\nabla f|$, when $\\mathbf{u}$ points against it; and **zero** when $\\mathbf{u}$ is perpendicular to $\\nabla f$.',
        detail: 'So the gradient is the direction of steepest ascent, its length is the maximum rate of climb, and the level direction is the walk that changes $f$ not at all. A hiker following $\\nabla f$ climbs straight up the fall line; a contour walker moves at constant elevation.',
      },
      {
        term: 'Gradient is perpendicular to level curves',
        kind: 'theorem',
        statement: 'The gradient $\\nabla f(a, b)$ is perpendicular to the level curve $f(x, y) = k$ passing through $(a, b)$, and points in the direction of increasing $f$. For a function of three variables, $\\nabla F(a, b, c)$ is normal to the level surface $F = k$, giving the tangent plane $$F_x(x_0, y_0, z_0)(x - x_0) + F_y(x_0, y_0, z_0)(y - y_0) + F_z(x_0, y_0, z_0)(z - z_0) = 0.$$',
        detail: 'Along a level curve $f$ is constant, so the directional derivative along the tangent direction is $0 = \\nabla f \\cdot \\mathbf{t}$ — the gradient must be perpendicular to every level direction. This is why heat flows, and water runs, straight across the contour lines: perpendicular to level curves, in the direction of $\\nabla f$.',
      },
      {
        term: 'Significance: from topography to machine learning',
        kind: 'insight',
        statement: 'The gradient is the master direction: uphill for altitude, into warmer air for temperature, toward higher pressure for weather systems. Reversed, it is the direction of steepest **descent** — the update rule of gradient descent, the optimization algorithm that trains modern neural networks by walking a loss surface downhill.',
        detail: 'Machine learning minimizes a loss $L(w_1, \\ldots, w_n)$ over millions of weights; each step moves the weights by a small multiple of $-\\nabla L$. The stopping test — $\\nabla L = \\mathbf{0}$ — is exactly the critical point condition of the next section, scaled up to a million dimensions.',
      },
    ],
    examples: [
      {
        title: 'Directional derivative and steepest ascent',
        problem: 'For $f(x, y) = x^3 - 3xy + 4y^2$ at the point $(1, 2)$: (a) find the rate of change of $f$ at $(1, 2)$ in the direction toward the point $(2, 3)$; (b) in which direction does $f$ increase fastest at $(1, 2)$, and how fast?',
        steps: [
          { label: 'Step 1: The gradient', text: '$\\nabla f = \\langle 3x^2 - 3y,\\ -3x + 8y\\rangle$, so $\\nabla f(1, 2) = \\langle 3 - 6,\\ -3 + 16\\rangle = \\langle -3,\\ 13\\rangle$.' },
          { label: 'Step 2: Normalize the direction', text: 'The direction from $(1, 2)$ toward $(2, 3)$ is $\\langle 1, 1\\rangle$, whose length is $\\sqrt{2}$; the unit vector is $\\mathbf{u} = \\frac{1}{\\sqrt{2}}\\langle 1, 1\\rangle$.' },
          { label: 'Step 3: Project', text: '$D_\\mathbf{u} f(1, 2) = \\nabla f \\cdot \\mathbf{u} = \\frac{-3 + 13}{\\sqrt{2}} = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.07$: walking that way, the surface rises about $7$ units per unit traveled.' },
          { label: 'Step 4: Steepest direction', text: 'The maximum rate is $|\\nabla f| = \\sqrt{9 + 169} = \\sqrt{178} \\approx 13.3$, achieved in the direction $\\frac{1}{\\sqrt{178}}\\langle -3, 13\\rangle$ — mostly north, slightly west.' },
        ],
        result: '(a) $D_\\mathbf{u} f(1, 2) = 5\\sqrt{2} \\approx 7.07$; (b) fastest increase in the direction of $\\nabla f(1, 2) = \\langle -3, 13\\rangle$, at rate $\\sqrt{178} \\approx 13.3$.',
      },
      {
        title: 'The gradient is perpendicular to the level curve',
        problem: 'For $f(x, y) = 9 - x^2 - y^2$, verify directly that $\\nabla f(1, 2)$ is perpendicular to the level curve through $(1, 2)$, and interpret the direction geometrically.',
        steps: [
          { label: 'Step 1: Identify the level curve', text: '$f(1, 2) = 9 - 1 - 4 = 4$, so the level curve is the circle $x^2 + y^2 = 5$, of radius $\\sqrt{5}$.' },
          { label: 'Step 2: Compute the gradient', text: '$\\nabla f = \\langle -2x, -2y\\rangle$, so $\\nabla f(1, 2) = \\langle -2, -4\\rangle = -2\\langle 1, 2\\rangle$.' },
          { label: 'Step 3: A tangent vector to the circle', text: 'The radius vector at $(1, 2)$ is $\\langle 1, 2\\rangle$, so a tangent direction to the circle there is $\\mathbf{t} = \\langle 2, -1\\rangle$ (rotating the radius by $90^\\circ$).' },
          { label: 'Step 4: Dot product check', text: '$\\nabla f(1, 2) \\cdot \\mathbf{t} = (-2)(2) + (-4)(-1) = -4 + 4 = 0$ ✓ — the gradient is perpendicular to the level curve, pointing radially inward toward the hilltop at $(0, 0, 9)$, the direction of increase.' },
        ],
        result: '$\\nabla f(1, 2) = \\langle -2, -4\\rangle$ is radial — straight toward the top of the dome — and orthogonal to every walking direction that keeps $f = 4$.',
      },
      {
        title: 'Tangent plane to a level surface via the gradient',
        problem: 'Find the tangent plane to the sphere $x^2 + y^2 + z^2 = 14$ at the point $(1, 2, 3)$.',
        steps: [
          { label: 'Step 1: Level-surface form', text: 'Write the sphere as the level surface $F(x, y, z) = x^2 + y^2 + z^2 = 14$.' },
          { label: 'Step 2: The normal vector', text: '$\\nabla F = \\langle 2x, 2y, 2z\\rangle$, so $\\nabla F(1, 2, 3) = \\langle 2, 4, 6\\rangle$ — the outward radial normal, as expected for a sphere.' },
          { label: 'Step 3: The plane equation', text: '$2(x - 1) + 4(y - 2) + 6(z - 3) = 0$, which simplifies (dividing by 2) to $x + 2y + 3z = 14$.' },
          { label: 'Step 4: Sanity check', text: 'The point satisfies it: $1 + 4 + 9 = 14$ ✓; the constant equals the sphere’s constant because the radial position vector $\\langle 1, 2, 3\\rangle$ is itself normal to the sphere — the plane is perpendicular to the radius at the point of tangency.' },
        ],
        result: 'The tangent plane is $x + 2y + 3z = 14$ — the gradient delivered the normal vector instantly.',
      },
    ],
    keyTakeaways: [
      'The directional derivative in the unit direction $\\mathbf{u}$ is $D_\\mathbf{u} f = \\nabla f \\cdot \\mathbf{u}$; the direction vector must have length $1$.',
      'The gradient $\\nabla f = \\langle f_x, f_y\\rangle$ points in the direction of maximum increase, with steepness $|\\nabla f|$.',
      '$D_\\mathbf{u} f = 0$ exactly along level directions: walking a level curve changes $f$ not at all.',
      'The gradient is perpendicular to the level curves of $f$ (and normal to the level surfaces of a three-variable function).',
      'The tangent plane to $F(x, y, z) = k$ uses $\\nabla F$ as its normal vector.',
      'Gradient descent — the training algorithm of machine learning — is iteration against the gradient of a loss surface; its fixed points are the critical points of the next section.',
    ],
    quiz: [
      {
        q: 'The gradient of $f(x, y) = x^2 y^3$ at the point $(1, 2)$ is:',
        options: [`$\\langle 2, 12\\rangle$`, `$\\langle 16, 12\\rangle$`, `$\\langle 12, 16\\rangle$`, `$\\langle 4, 6\\rangle$`],
        answer: 1,
        explanation: '$\\nabla f = \\langle 2xy^3, 3x^2y^2\\rangle = \\langle 2(1)(8), 3(1)(4)\\rangle = \\langle 16, 12\\rangle$.',
      },
      {
        q: 'At a point where $|\\nabla f| = 7$, the maximum possible value of $D_\\mathbf{u} f$ over all unit vectors $\\mathbf{u}$ is:',
        options: [`$7$`, `$49$`, `$\\frac{1}{7}$`, 'Unbounded'],
        answer: 0,
        explanation: 'The dot product $\\nabla f \\cdot \\mathbf{u}$ is at most $|\\nabla f|\\,|\\mathbf{u}| = 7 \\cdot 1$, with equality when $\\mathbf{u}$ points along the gradient — steepest ascent at rate $7$.',
      },
      {
        q: 'The rate of change of $f(x, y) = xy$ at $(1, 2)$ in the direction of $\\langle 3, 4\\rangle$ is:',
        options: [`$10$`, `$\\frac{11}{5}$`, `$2$`, `$\\frac{2}{5}$`],
        answer: 1,
        explanation: 'Normalize: $\\mathbf{u} = \\frac{1}{5}\\langle 3, 4\\rangle$. Then $D_\\mathbf{u} f = \\nabla f \\cdot \\mathbf{u}$ with $\\nabla f(1,2) = \\langle 2, 1\\rangle$, giving $\\frac{6 + 4}{5} = \\frac{11}{5}$.',
      },
      {
        q: 'If you walk along a level curve of $f$, the value of $f$:',
        options: ['Increases as fast as possible', 'Decreases as fast as possible', 'Stays constant', 'Changes at rate $|\\nabla f|$'],
        answer: 2,
        explanation: 'Level directions are perpendicular to the gradient, so $D_\\mathbf{u} f = \\nabla f \\cdot \\mathbf{u} = 0$: walking the contour line, you neither climb nor descend.',
      },
      {
        q: 'The tangent plane to the level surface $F(x, y, z) = k$ at a point $P$ has normal vector:',
        options: [`$\\nabla F$ at $P$`, '$\\nabla f$ of any level curve', 'The position vector of $P$', 'Any tangent vector to the surface at $P$'],
        answer: 0,
        explanation: 'The gradient of $F$ is normal to every level direction, so it is the normal vector of the tangent plane $F_x(x - x_0) + F_y(y - y_0) + F_z(z - z_0) = 0$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.7
  {
    sectionId: 'calc-ch14-s7',
    readingTime: 10,
    intro: 'Optimization arrives: where do surfaces peak, dip, or pass through in between? The candidates are **critical points** — where the gradient vanishes — and the **second derivatives test**, built from the discriminant $D = f_{xx}f_{yy} - (f_{xy})^2$, separates peaks and bowls from the genuinely new phenomenon of the **saddle point**. On closed bounded regions the Extreme Value Theorem guarantees absolute winners, but they can hide on the boundary, where a separate search is required.',
    objectives: [
      'Define local maxima, local minima and saddle points for functions of two variables',
      'Find critical points by solving $f_x = 0$ and $f_y = 0$ simultaneously',
      'Apply the second derivatives test with $D = f_{xx}f_{yy} - (f_{xy})^2$, including the inconclusive case',
      'Locate absolute extrema on closed bounded regions by combining interior critical points with boundary analysis',
    ],
    concepts: [
      {
        term: 'Local extrema',
        kind: 'definition',
        statement: 'A function $f$ has a **local maximum** at $(a, b)$ if $f(x, y) \\le f(a, b)$ when $(x, y)$ is near $(a, b)$, and a **local minimum** if $f(x, y) \\ge f(a, b)$ near $(a, b)$. If the inequality holds for every $(x, y)$ in the domain, the extremum is absolute.',
        detail: 'Geometrically the surface has a summit or a basin near the point. A local extremum that is neither — a critical point where the surface rises in some directions and falls in others — is a saddle, defined below.',
      },
      {
        term: 'Critical points',
        kind: 'theorem',
        statement: 'If $f$ has a local maximum or minimum at $(a, b)$ and the first partial derivatives exist there, then $$f_x(a, b) = 0 \\quad \\text{and} \\quad f_y(a, b) = 0.$$ Points where both partials vanish (or one fails to exist) are **critical points** — the only candidates for interior extrema.',
        detail: 'In gradient language: $\\nabla f = \\mathbf{0}$. The converse fails — critical points can be saddles — so finding candidates is only step one; classification is step two. This is Fermat’s theorem of Section 4.1, upgraded to two variables.',
      },
      {
        term: 'Second derivatives test',
        kind: 'theorem',
        statement: 'Suppose $f_{xx}$, $f_{yy}$ and $f_{xy}$ are continuous near a critical point $(a, b)$ and let $$D = D(a, b) = f_{xx}(a, b)\\,f_{yy}(a, b) - \\bigl[f_{xy}(a, b)\\bigr]^2.$$ Then: if $D > 0$ and $f_{xx} > 0$, local minimum; if $D > 0$ and $f_{xx} < 0$, local maximum; if $D < 0$, a saddle point; if $D = 0$, the test gives no information.',
        detail: '$D$ compares the bending ($f_{xx}f_{yy}$, the product of curvatures in the two axis directions) against the twisting ($(f_{xy})^2$): a true bowl or dome must bend the same way in every direction, so bending must dominate twisting. When $D = 0$ every behavior is possible — the book’s examples range from a maximum to a “monkey saddle”.',
      },
      {
        term: 'Saddle point',
        kind: 'definition',
        statement: 'A **saddle point** is a critical point that is not a local extremum: every neighborhood contains both higher and lower values. The prototype is the origin on $z = y^2 - x^2$ — up along the $y$-axis, down along the $x$-axis.',
        detail: 'The saddle of Section 14.1 ($z = xy$, hyperbolic level curves) reappears here as the generic outcome when $D < 0$. Saddles are why multivariable optimization is genuinely harder than the one-variable story: vanishing derivatives no longer promise an extremum.',
      },
      {
        term: 'Extreme Value Theorem',
        kind: 'theorem',
        statement: 'If $f$ is continuous on a closed, bounded set $D$ in $\\mathbb{R}^2$, then $f$ attains an **absolute maximum** and an **absolute minimum** value somewhere on $D$.',
        detail: 'To find them: (1) list the interior critical points with their values; (2) find the extreme values on the boundary — by parametrizing the boundary curve as in Section 10.2 (or with Lagrange multipliers, next section); (3) compare all candidates. The winner is the largest or smallest on the list.',
      },
      {
        term: 'Boundary analysis by parametrization',
        kind: 'method',
        statement: 'On a boundary curve given parametrically, a function of two variables becomes a function of one variable: substitute the parametrization and optimize with the Chapter 4 toolkit on the parameter interval.',
        detail: 'For a circular boundary $x = \\cos t$, $y = \\sin t$, the composite $g(t) = f(\\cos t, \\sin t)$ is a one-variable function to be maximized over $0 \\le t \\le 2\\pi$ — endpoints included, since the interval is closed too.',
      },
    ],
    examples: [
      {
        title: 'Classifying critical points, saddle included',
        problem: 'Find and classify the critical points of $f(x, y) = x^4 + y^4 - 4xy + 1$.',
        steps: [
          { label: 'Step 1: Find the critical points', text: '$f_x = 4x^3 - 4y = 0$ gives $y = x^3$; $f_y = 4y^3 - 4x = 0$ gives $x = y^3$. Substituting: $x = x^9$, so $x = 0$ or $x^8 = 1$, i.e. $x = \\pm 1$.' },
          { label: 'Step 2: List the candidates', text: 'The critical points are $(0, 0)$, $(1, 1)$ and $(-1, -1)$ — three points to classify.' },
          { label: 'Step 3: The second derivatives', text: '$f_{xx} = 12x^2$, $f_{yy} = 12y^2$ and $f_{xy} = -4$, so $D = 144x^2y^2 - 16$.' },
          { label: 'Step 4: Classify the origin', text: 'At $(0, 0)$: $D = 0 - 16 = -16 < 0$ — a **saddle**. Indeed $f = 1$ there but $f(x, 0) = x^4 + 1 > 1$ while $f(x, x) = 2x^4 - 4x^2 + 1 < 1$ for small $x \\ne 0$: up one road, down the other.' },
          { label: 'Step 5: Classify the other two', text: 'At $(\\pm 1, \\pm 1)$: $D = 144 - 16 = 128 > 0$ with $f_{xx} = 12 > 0$ — local minima, with value $1 + 1 - 4 + 1 = -1$.' },
        ],
        result: 'A saddle at the origin; local minima of $-1$ at $(1, 1)$ and $(-1, -1)$ — the surface dips into two symmetric basins separated by a pass at the center.',
      },
      {
        title: 'Closest point on a plane (a minimum in action)',
        problem: 'Find the shortest distance from the point $(1, 0, -2)$ to the plane $x + 2y + z = 4$.',
        steps: [
          { label: 'Step 1: Reduce to an unconstrained problem', text: 'Points on the plane have $z = 4 - x - 2y$, so the squared distance from $(1, 0, -2)$ is $$D(x, y) = (x - 1)^2 + y^2 + (6 - x - 2y)^2,$$ and minimizing distance is minimizing $D$.' },
          { label: 'Step 2: Critical point equations', text: '$D_x = 2(x - 1) - 2(6 - x - 2y) = 4x + 4y - 14$ and $D_y = 2y - 4(6 - x - 2y) = 4x + 10y - 24$. Setting both to zero: $4x + 4y = 14$ and $4x + 10y = 24$.' },
          { label: 'Step 3: Solve', text: 'Subtracting gives $6y = 10$, so $y = \\frac{5}{3}$ and $x = \\frac{14 - 20/3}{4} = \\frac{11}{6}$; the closest point on the plane is $\\left(\\frac{11}{6}, \\frac{5}{3}, -\\frac{7}{6}\\right)$.' },
          { label: 'Step 4: Second derivatives test', text: '$D_{xx} = 4$, $D_{yy} = 10$, $D_{xy} = 4$, so the discriminant is $40 - 16 = 24 > 0$ with $D_{xx} > 0$: a genuine local (here absolute) minimum.' },
          { label: 'Step 5: The distance', text: '$D = \\left(\\frac{5}{6}\\right)^2 + \\left(\\frac{5}{3}\\right)^2 + \\left(\\frac{5}{6}\\right)^2 = \\frac{25}{36} + \\frac{100}{36} + \\frac{25}{36} = \\frac{25}{6}$, so the distance is $\\sqrt{\\frac{25}{6}} = \\frac{5}{\\sqrt{6}} \\approx 2.04$ — matching the point-to-plane distance formula $\\frac{|1 + 0 - 2 - 4|}{\\sqrt{1 + 4 + 1}} = \\frac{5}{\\sqrt{6}}$ ✓.' },
        ],
        result: 'The closest point is $\\left(\\frac{11}{6}, \\frac{5}{3}, -\\frac{7}{6}\\right)$ at distance $\\frac{5\\sqrt{6}}{6} \\approx 2.04$ — calculus and the vector formula agree.',
      },
      {
        title: 'Absolute extrema on a closed disk',
        problem: 'Find the absolute maximum and minimum of $f(x, y) = x^2 + 2y^2 - x$ on the disk $x^2 + y^2 \\le 1$.',
        steps: [
          { label: 'Step 1: Interior critical points', text: '$f_x = 2x - 1 = 0$ and $f_y = 4y = 0$ give the single interior candidate $(x, y) = \\left(\\frac{1}{2}, 0\\right)$, with value $f = \\frac{1}{4} - \\frac{1}{2} = -\\frac{1}{4}$.' },
          { label: 'Step 2: Parametrize the boundary', text: 'On the circle $x = \\cos t$, $y = \\sin t$: $g(t) = \\cos^2 t + 2\\sin^2 t - \\cos t = 1 + \\sin^2 t - \\cos t$.' },
          { label: 'Step 3: Optimize on the boundary', text: '$g\'(t) = 2\\sin t\\cos t + \\sin t = \\sin t\\,(2\\cos t + 1)$, zero when $t = 0, \\pi$ or $\\cos t = -\\frac{1}{2}$ ($t = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$).' },
          { label: 'Step 4: Boundary values', text: '$t = 0$: point $(1, 0)$, $f = 0$. $t = \\pi$: point $(-1, 0)$, $f = 2$. $t = \\frac{2\\pi}{3}$ or $\\frac{4\\pi}{3}$: points $\\left(-\\frac{1}{2}, \\pm\\frac{\\sqrt{3}}{2}\\right)$, $f = \\frac{1}{4} + \\frac{3}{2} + \\frac{1}{2} = \\frac{9}{4}$.' },
          { label: 'Step 5: Compare all candidates', text: 'Candidates: $-\\frac{1}{4}$ (interior), $0$, $2$, $\\frac{9}{4}$, $\\frac{9}{4}$ (boundary). Absolute minimum $-\\frac{1}{4}$ at $\\left(\\frac{1}{2}, 0\\right)$; absolute maximum $\\frac{9}{4}$ at $\\left(-\\frac{1}{2}, \\pm\\frac{\\sqrt{3}}{2}\\right)$.' },
        ],
        result: 'Absolute minimum $-\\frac{1}{4}$ at $\\left(\\frac{1}{2}, 0\\right)$; absolute maximum $\\frac{9}{4}$ at the two boundary points $\\left(-\\frac{1}{2}, \\pm\\frac{\\sqrt{3}}{2}\\right)$ — the winners both needed different tools.',
      },
    ],
    keyTakeaways: [
      'Interior extrema can only occur at critical points ($f_x = f_y = 0$, or a partial fails to exist).',
      'The discriminant $D = f_{xx}f_{yy} - (f_{xy})^2$ decides: $D > 0$ with $f_{xx} > 0$ minimum, $D > 0$ with $f_{xx} < 0$ maximum, $D < 0$ saddle, $D = 0$ inconclusive.',
      'A saddle point rises in some directions and falls in others — e.g. the origin of $y^2 - x^2$ and of $x^4 + y^4 - 4xy + 1$.',
      'Continuous functions on closed bounded sets always attain absolute extrema; find them by comparing interior critical values with boundary values.',
      'Boundary extrema reduce to one-variable optimization by parametrizing the boundary curve.',
      'Distance-to-surface problems become ordinary critical point problems after substituting the surface equation.',
    ],
    quiz: [
      {
        q: 'At a critical point, $D = f_{xx}f_{yy} - (f_{xy})^2$ is positive and $f_{xx}$ is negative. The point is:',
        options: ['A saddle point', 'A local minimum', 'A local maximum', 'Undecidable without more information'],
        answer: 2,
        explanation: 'Positive $D$ means the surface bends the same way in every direction, and $f_{xx} < 0$ says that way is down: a local maximum.',
      },
      {
        q: 'For $f(x, y) = x^4 + y^4 - 4xy + 1$, the second derivatives test at the origin gives:',
        options: ['$D > 0$, local minimum', '$D > 0$, local maximum', '$D < 0$, saddle point', '$D = 0$, inconclusive'],
        answer: 2,
        explanation: '$f_{xx} = f_{yy} = 0$ and $f_{xy} = -4$ at the origin, so $D = 0 - 16 < 0$: a saddle — the surface rises along the axes and dips along the diagonal.',
      },
      {
        q: 'The critical points of $f(x, y) = x^2 + y^2 - 2x + 4y$ include:',
        options: ['$(2, -4)$ with $f = -5$, a minimum', `$(-1, 2)$ with $f = 0$`, '$(1, -2)$ with $f = -5$, a minimum', 'No critical points exist'],
        answer: 2,
        explanation: '$f_x = 2x - 2 = 0$ gives $x = 1$; $f_y = 2y + 4 = 0$ gives $y = -2$. Then $f(1, -2) = 1 + 4 - 2 - 8 = -5$, a minimum since $f$ is a sum of squares shifted to that vertex.',
      },
      {
        q: 'The Extreme Value Theorem guarantees absolute extrema for a function that is:',
        options: ['Differentiable on all of $\\mathbb{R}^2$', 'Continuous on a closed, bounded region', 'Polynomial of degree at most 2', 'Positive everywhere'],
        answer: 1,
        explanation: 'Continuity plus a closed, bounded domain is exactly the hypothesis: the values must attain a largest and smallest somewhere. Differentiability alone on an unbounded domain promises nothing ($f = x$ never peaks).',
      },
      {
        q: 'To find the absolute maximum of a continuous $f$ on a closed disk, you must compare values at:',
        options: ['Interior critical points only', 'Boundary points only', 'Interior critical points and boundary extrema', 'The center of the disk only'],
        answer: 2,
        explanation: 'The Extreme Value Theorem says the winners exist; the search protocol is: interior candidates from $f_x = f_y = 0$, boundary candidates from a parametrized (or Lagrange) analysis, then compare them all.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.8
  {
    sectionId: 'calc-ch14-s8',
    readingTime: 9,
    intro: 'The most elegant optimization technique in multivariable calculus: instead of eliminating the constraint by substitution, carry it as a **shadow price**. At a constrained optimum the level curve of $f$ just grazes the constraint curve — their gradients align — so one vector equation $\\nabla f = \\lambda \\nabla g$ replaces the messy algebra. Two constraints simply stack two gradients with two multipliers.',
    objectives: [
      'Set up and solve Lagrange multiplier systems $\\nabla f = \\lambda\\nabla g$ for one constraint',
      'Explain the geometry: level curves tangent to the constraint curve at optimum points',
      'Handle two constraints with $\\nabla f = \\lambda\\nabla g + \\mu\\nabla h$',
      'Solve classic constrained optimization problems: boxes from limited material, boxes under a plane',
      'Interpret the multiplier $\\lambda$ as the marginal value of relaxing the constraint',
    ],
    concepts: [
      {
        term: 'The method of Lagrange multipliers',
        kind: 'method',
        statement: 'To find the extreme values of $f(x, y, z)$ subject to the constraint $g(x, y, z) = k$: look for values of $\\lambda$ and points satisfying $$\\nabla f = \\lambda\\,\\nabla g \\quad \\text{together with} \\quad g(x, y, z) = k,$$ then evaluate $f$ at each solution and compare.',
        detail: 'The recipe converts constrained optimization into a system of equations — four equations (three from the gradient match, one the constraint) in four unknowns $x, y, z, \\lambda$. The multiplier itself usually needs no interpretation for the answer, but the book shows how to solve systems efficiently by dividing equations in pairs.',
      },
      {
        term: 'Why it works: tangent level curves',
        kind: 'insight',
        statement: 'At an extreme of $f$ along the curve $g = k$, the level curve $f = c$ is tangent to the constraint curve. Since $\\nabla f$ is perpendicular to level curves of $f$ and $\\nabla g$ to those of $g$, both gradients must be **parallel**: $\\nabla f = \\lambda\\nabla g$.',
        detail: 'If the curves crossed transversally instead, one could slide along the constraint from one side of the level curve to the other — increasing $f$ one way, decreasing it the other — so the point was not extreme. Only tangency pins $f$ down, and tangency is parallel gradients.',
      },
      {
        term: 'Two constraints',
        kind: 'method',
        statement: 'To optimize $f$ subject to two simultaneous constraints $g(x, y, z) = k$ and $h(x, y, z) = c$, solve $$\\nabla f = \\lambda\\,\\nabla g + \\mu\\,\\nabla h, \\qquad g = k, \\qquad h = c.$$ The feasible set is typically a curve — the intersection of the two constraint surfaces.',
        detail: 'Geometrically $\\nabla f$ must lie in the plane spanned by $\\nabla g$ and $\\nabla h$: any component of $\\nabla f$ outside that plane could be exploited by sliding along the intersection curve. The equations are five in five unknowns $x, y, z, \\lambda, \\mu$.',
      },
      {
        term: 'Interpreting the multiplier',
        kind: 'insight',
        statement: 'The number $\\lambda$ measures the sensitivity of the optimal value to the constraint level: $\\lambda \\approx \\frac{\\Delta\\!\\left(\\text{optimal } f\\right)}{\\Delta k}$. Economists call it the **shadow price** of the constraint.',
        detail: 'If a materials budget of $12$ m² yields a best box of volume $V$ with multiplier $\\lambda$, then one extra square meter of material would raise the achievable volume by roughly $\\lambda$ cubic meters — the multiplier prices the resource. This reading makes Lagrange multipliers the backbone of constrained optimization in economics and operations research.',
      },
      {
        term: 'Lagrange versus substitution',
        kind: 'insight',
        statement: 'When the constraint can be solved for one variable, direct substitution (reduce to Section 14.7) always works — but Lagrange multipliers avoid the algebra and, more importantly, survive when solving the constraint is impossible or ugly.',
        detail: 'The method also generalizes unchanged to any number of variables and constraints, which is why industrial optimizers, flight planners and machine learning libraries implement exactly this system (in its KKT form) rather than substitution.',
      },
    ],
    examples: [
      {
        title: 'The lidless box of maximum volume',
        problem: 'A rectangular box without a lid is to be made from $12$ m² of cardboard. Find the maximum volume of such a box.',
        steps: [
          { label: 'Step 1: Name the variables', text: 'Let the base be $x \\times y$ and the height $z$. The box has no lid, so the material constraint is $g(x, y, z) = xy + 2xz + 2yz = 12$ (base plus two sides of each orientation), and the objective is $V = xyz$.' },
          { label: 'Step 2: The Lagrange equations', text: '$\\nabla V = \\lambda\\nabla g$ reads $\\langle yz, xz, xy\\rangle = \\lambda\\langle y + 2z,\\ x + 2z,\\ 2x + 2y\\rangle$ — three equations plus the constraint.' },
          { label: 'Step 3: Exploit the symmetry', text: 'The first two equations are symmetric in $x$ and $y$; subtracting $yz(y + 2z)$-type cross-combinations shows $x = y$ (the optimum must have a square base). Writing $x = y$, the third equation gives $x^2 = \\lambda(4x)$, so $\\lambda = \\frac{x}{4}$.' },
          { label: 'Step 4: Solve the system', text: 'Substituting $\\lambda = \\frac{x}{4}$ into the first equation: $xz = \\frac{x}{4}(x + 2z)$, so $4xz = x^2 + 2xz$, giving $x^2 = 2xz$ and thus $z = \\frac{x}{2}$.' },
          { label: 'Step 5: Use the constraint', text: '$xy + 2xz + 2yz = x^2 + 2x \\cdot \\frac{x}{2} + 2x \\cdot \\frac{x}{2} = 3x^2 = 12$, so $x = 2$, $y = 2$ and $z = 1$.' },
          { label: 'Step 6: The volume', text: '$V = 2 \\cdot 2 \\cdot 1 = 4$ m³. Since pushing material into the base or sides sends volume toward zero at the boundary of the feasible set, this interior critical point is the maximum.' },
        ],
        result: 'The best lidless box from $12$ m² of cardboard has a $2 \\times 2$ m base, height $1$ m, and volume $4$ m³.',
      },
      {
        title: 'Largest box under a plane (the box-on-plane problem)',
        problem: 'Find the dimensions of the rectangular box of largest volume that has three faces in the coordinate planes and one vertex in the plane $x + 2y + 3z = 6$, in the first octant.',
        steps: [
          { label: 'Step 1: Objective and constraint', text: 'Maximize $V = xyz$ subject to $x + 2y + 3z = 6$ with $x, y, z > 0$ — the box’s outer vertex lies on the plane, its edges along the axes.' },
          { label: 'Step 2: The Lagrange system', text: '$\\langle yz, xz, xy\\rangle = \\lambda\\langle 1, 2, 3\\rangle$, that is $yz = \\lambda$, $xz = 2\\lambda$, $xy = 3\\lambda$, together with $x + 2y + 3z = 6$.' },
          { label: 'Step 3: Divide equations in pairs', text: 'Dividing the second by the first: $\\frac{x}{y} = 2$, so $x = 2y$. Dividing the third by the second: $\\frac{y}{z} = \\frac{3}{2}$, so $y = \\frac{3}{2}z$ and therefore $x = 3z$.' },
          { label: 'Step 4: Impose the constraint', text: '$3z + 2\\left(\\frac{3}{2}z\\right) + 3z = 3z + 3z + 3z = 9z = 6$, giving $z = \\frac{2}{3}$, $y = 1$ and $x = 2$.' },
          { label: 'Step 5: The volume', text: '$V = 2 \\cdot 1 \\cdot \\frac{2}{3} = \\frac{4}{3}$ — the box is $2 \\times 1 \\times \\frac{2}{3}$, and the boundary cases (a face shrinking to zero) give volume $0$, so this critical point is the maximum.' },
        ],
        result: 'The largest such box has dimensions $2 \\times 1 \\times \\frac{2}{3}$ and volume $\\frac{4}{3}$, with its outer vertex at $\\left(2, 1, \\frac{2}{3}\\right)$ on the plane.',
      },
      {
        title: 'Two constraints: closest point to a line of intersection',
        problem: 'Find the point on the line of intersection of the planes $x + y = 2$ and $y + z = 3$ that is closest to the origin, and the distance to it.',
        steps: [
          { label: 'Step 1: Objective and constraints', text: 'Minimize $f = x^2 + y^2 + z^2$ (squared distance) subject to $g_1 = x + y - 2 = 0$ and $g_2 = y + z - 3 = 0$.' },
          { label: 'Step 2: The two-constraint system', text: '$\\nabla f = \\lambda\\nabla g_1 + \\mu\\nabla g_2$ becomes $\\langle 2x, 2y, 2z\\rangle = \\lambda\\langle 1, 1, 0\\rangle + \\mu\\langle 0, 1, 1\\rangle$, i.e. $2x = \\lambda$, $2y = \\lambda + \\mu$, $2z = \\mu$, plus the two plane equations.' },
          { label: 'Step 3: Express in terms of the multipliers', text: '$x = \\frac{\\lambda}{2}$, $y = \\frac{\\lambda + \\mu}{2}$, $z = \\frac{\\mu}{2}$. The constraints become $\\frac{2\\lambda + \\mu}{2} = 2$ and $\\frac{\\lambda + 2\\mu}{2} = 3$, i.e. $2\\lambda + \\mu = 4$ and $\\lambda + 2\\mu = 6$.' },
          { label: 'Step 4: Solve for the multipliers', text: 'Doubling the first and subtracting the second: $3\\lambda = 2$, so $\\lambda = \\frac{2}{3}$ and $\\mu = 4 - 2 \\cdot \\frac{2}{3} = \\frac{8}{3}$.' },
          { label: 'Step 5: Recover the point', text: '$x = \\frac{1}{3}$, $y = \\frac{\\frac{2}{3} + \\frac{8}{3}}{2} = \\frac{5}{3}$, $z = \\frac{4}{3}$. Check both planes: $\\frac{1}{3} + \\frac{5}{3} = 2$ ✓ and $\\frac{5}{3} + \\frac{4}{3} = 3$ ✓.' },
          { label: 'Step 6: The distance', text: '$f = \\frac{1}{9} + \\frac{25}{9} + \\frac{16}{9} = \\frac{42}{9} = \\frac{14}{3}$, so the closest point is at distance $\\sqrt{\\frac{14}{3}} \\approx 2.16$ from the origin — and since the line recedes to infinity both ways, this critical point is the absolute minimum.' },
        ],
        result: 'The closest point is $\\left(\\frac{1}{3}, \\frac{5}{3}, \\frac{4}{3}\\right)$ at distance $\\sqrt{\\frac{14}{3}} \\approx 2.16$: five equations, five unknowns, solved cleanly by the two-multiplier recipe.',
      },
    ],
    keyTakeaways: [
      'One constraint: solve $\\nabla f = \\lambda\\nabla g$ together with $g = k$, then compare values of $f$ at the solutions.',
      'The geometry: at a constrained extreme, the level curve of $f$ is tangent to the constraint — gradients parallel.',
      'Two constraints: $\\nabla f = \\lambda\\nabla g + \\mu\\nabla h$ with both constraints; the feasible set is typically a curve.',
      'Dividing Lagrange equations in pairs is the standard trick for exploiting symmetry (e.g. square bases).',
      'The multiplier $\\lambda$ is the shadow price: the marginal gain in the optimum per unit of relaxed constraint.',
      'The lidless-box problem ($2 \\times 2 \\times 1$, volume $4$ m³ from $12$ m²) and the box-on-plane problem ($\\frac{4}{3}$ under $x + 2y + 3z = 6$) are the canonical worked cases.',
    ],
    quiz: [
      {
        q: 'To maximize $V = xyz$ subject to $x + 2y + 3z = 6$, the correct Lagrange system begins:',
        options: [`$\\langle yz, xz, xy\\rangle = \\lambda\\langle 1, 2, 3\\rangle$`, `$\\langle yz, xz, xy\\rangle = \\lambda\\langle 1, 1, 1\\rangle$`, `$\\langle x, 2y, 3z\\rangle = \\lambda\\langle yz, xz, xy\\rangle$`, `$\\langle yz, 2xz, 3xy\\rangle = \\lambda\\langle 1, 1, 1\\rangle$`],
        answer: 0,
        explanation: 'The gradient of the objective is $\\langle yz, xz, xy\\rangle$ and the gradient of the constraint function $x + 2y + 3z$ is $\\langle 1, 2, 3\\rangle$; the multiplier matches them componentwise.',
      },
      {
        q: 'At a point where $f$ is extreme subject to $g = k$, the level curve of $f$ and the constraint curve are:',
        options: ['Perpendicular', 'Tangent', 'Identical circles', 'Related by a factor of $\\lambda$ in radius'],
        answer: 1,
        explanation: 'If the curves crossed at an angle, one could slide along the constraint to a higher level of $f$; only tangency — hence parallel gradients $\\nabla f = \\lambda\\nabla g$ — pins down the extreme.',
      },
      {
        q: 'With two constraints, the Lagrange condition is:',
        options: [`$\\nabla f = \\lambda\\nabla g$ and $\\nabla g = \\mu\\nabla h$`, `$\\nabla f = \\lambda\\nabla g + \\mu\\nabla h$`, `$\\nabla f = \\lambda\\nabla g \\cdot \\nabla h$`, `$\\nabla f = \\lambda\\mu\\nabla g$`],
        answer: 1,
        explanation: 'The gradient of $f$ must lie in the plane spanned by the two constraint gradients, so it is a linear combination of them with two multipliers $\\lambda$ and $\\mu$.',
      },
      {
        q: 'A lidless box made from $12$ m² of cardboard has maximum volume:',
        options: ['$3$ m³', '$4$ m³', '$6$ m³', '$8$ m³'],
        answer: 1,
        explanation: 'With material $xy + 2xz + 2yz = 12$, the Lagrange solution is a $2 \\times 2 \\times 1$ box: $V = 4$ m³ — square base, half-height, the book’s worked answer.',
      },
      // PYQ-pattern — Lagrange maximum on a circle (rephrased, values changed)
      {
        q: 'The maximum of $f(x, y) = x + 2y$ subject to $x^{2} + y^{2} = 5$ equals:',
        options: [`$-5$`, `$0$`, `$5$`, `$10$`],
        answer: 2,
        explanation: 'Step 1: Restate the constrained optimum via $\\nabla f = \\lambda \\nabla g$ with $g(x, y) = x^{2} + y^{2}$. Step 2: Recall the key system $1 = 2\\lambda x$ and $2 = 2\\lambda y$ together with $x^{2} + y^{2} = 5$. Step 3: Solve as $x = \\frac{1}{2\\lambda}$ and $y = \\frac{1}{\\lambda}$, then substitute to get $\\frac{5}{4\\lambda^{2}} = 5$. Step 4: Obtain $\\lambda = \\pm\\frac{1}{2}$, giving $(1, 2)$ with $f = 5$ and $(-1, -2)$ with $f = -5$. Step 5: The distractors fail since $-5$ is the minimum, $0$ is a non-extremal value on the circle (for example at $(-2, 1)$), and $10$ doubles the true peak. Step 6: Hence the constrained maximum is $5$.'
      },
    ],
  },
]
