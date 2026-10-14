import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Calculus: Early Transcendentals, 9th Edition
// Chapter 6: Applications of Integration (Sections 6.1 – 6.5 as mapped in library.ts)
// Master study content. Worked examples follow the book’s own classics.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh6Content: SectionContent[] = [
  // ------------------------------------------------------------------ 6.1
  {
    sectionId: 'calc-ch6-s1',
    readingTime: 9,
    intro: 'The definite integral was built to measure area under a curve, but most interesting regions lie between two curves rather than under one. The fix is elegant: slice the region into thin vertical strips, each of height equal to the difference of the two functions, and integrate. Choosing whether to slice vertically or horizontally — and finding where the curves cross to obtain the limits — is the whole craft of this section.',
    objectives: [
      'Set up and evaluate the area between two curves that share a common interval',
      'Find the limits of integration by locating intersection points of the boundary curves',
      'Handle curves that cross inside the region by splitting the integral where the top curve changes',
      'Decide when to integrate with respect to $y$ instead of $x$, and set up such integrals correctly',
    ],
    concepts: [
      {
        term: 'Area between curves',
        kind: 'theorem',
        statement: 'If $f$ and $g$ are continuous with $f(x) \\ge g(x)$ on $[a, b]$, then the area of the region bounded by the curves $y = f(x)$, $y = g(x)$, and the vertical lines $x = a$ and $x = b$ is $$A = \\int_a^b \\left[ f(x) - g(x) \\right] dx.$$',
        detail: 'The formula survives even when $g$ dips below the $x$-axis, because the strip height is the difference $f(x) - g(x)$, which stays positive by hypothesis. This is the first payoff of the definite integral beyond area under a single curve, and the pattern — integrate the length of a typical slice — drives every remaining section of this chapter.',
      },
      {
        term: 'Why top minus bottom',
        kind: 'insight',
        statement: 'Partition $[a, b]$ and slice the region into thin vertical rectangles. The rectangle over $[x_{i-1}, x_i]$ has height approximately $f(x_i^*) - g(x_i^*)$, so its area is $\\left[f(x_i^*) - g(x_i^*)\\right]\\Delta x$, and the area of the whole region is the limit of the sums of these — the definite integral.',
        detail: 'Nothing here is new machinery; it is Section 5.2 with a variable roof. If the curves are given as functions of $y$ instead, the identical argument with horizontal strips gives $A = \\int_c^d \\left[ \\text{right}(y) - \\text{left}(y) \\right] dy$.',
      },
      {
        term: 'Intersections are the limits',
        kind: 'method',
        statement: 'For a region enclosed by two curves with no vertical boundary lines given, the limits of integration are the $x$-coordinates of the intersection points. Solve $f(x) = g(x)$ and use the two solutions that bound the region.',
        detail: 'Always sketch first. Intersection points that are not adjacent bound different enclosed pieces, and spurious roots (or missing ones) are the most common setup error in this section. Graphing calculators and the solve feature help, but substituting the found roots back into both curves confirms them.',
      },
      {
        term: 'When curves cross',
        kind: 'insight',
        statement: 'If $f - g$ changes sign inside the region, the integral computes a signed area in which the pieces subtract. To get the total geometric area, split the integral at each crossing $c$ and compute $$A = \\int_a^c \\left[ f - g \\right] dx + \\int_c^b \\left[ g - f \\right] dx,$$ or equivalently integrate $\\left| f - g \\right|$ with splits at the crossings.',
        detail: 'This mirrors the signed-area behavior of Section 5.2 and the displacement-versus-distance distinction of Section 5.4. A quick sketch reveals which curve is on top for each subinterval; testing one sample point per subinterval is the algebraic substitute.',
      },
      {
        term: 'Integrating with respect to $y$',
        kind: 'method',
        statement: 'If the boundary curves are more naturally functions of $y$ — written $x = f(y)$ and $x = g(y)$ with $f(y) \\ge g(y)$ on $[c, d]$ — the area is $$A = \\int_c^d \\left[ f(y) - g(y) \\right] dy,$$ integrating the length of horizontal strips: right curve minus left curve.',
        detail: 'Use $y$-integration when solving for $x$ in terms of $y$ is easy but solving for $y$ in terms of $x$ is hard or produces two branches — a sideways parabola is the canonical example. The lower and upper limits are then $y$-values, and every quantity in the integrand must be expressed in $y$ before integrating.',
      },
      {
        term: 'Choosing the variable',
        kind: 'insight',
        statement: 'Before computing, ask: do the strips run cleanly from one boundary curve to the other without the boundary switching identity? Vertical strips integrate in $x$; horizontal strips integrate in $y$. The choice that avoids splitting the region and avoids square roots is usually best.',
        detail: 'The same region often admits two correct setups — one in $x$ and one in $y$ — with different difficulty. Building both and comparing is excellent practice, and the agreement of the two answers is a strong check. This choose-the-variable discipline returns at full strength for volumes in Sections 6.2 and 6.3.',
      },
    ],
    examples: [
      {
        title: 'A region between two parabolas',
        problem: 'Find the area of the region enclosed by the parabolas $y = x^2$ and $y = 2x - x^2$.',
        steps: [
          { label: 'Step 1: Find the intersections', text: 'Set $x^2 = 2x - x^2$, so $2x^2 - 2x = 0$, giving $2x(x - 1) = 0$ and thus $x = 0$ and $x = 1$. These are the limits of integration.' },
          { label: 'Step 2: Determine which curve is on top', text: 'Test the midpoint $x = \\frac{1}{2}$: the upper parabola gives $2(\\frac{1}{2}) - \\frac{1}{4} = \\frac{3}{4}$, while the lower gives $\\frac{1}{4}$. So $2x - x^2 \\ge x^2$ on $(0, 1)$.' },
          { label: 'Step 3: Set up the integral', text: `$$A = \\int_0^1 \\left[ (2x - x^2) - x^2 \\right] dx = \\int_0^1 (2x - 2x^2)\\,dx.$$` },
          { label: 'Step 4: Evaluate', text: `$$A = \\left[ x^2 - \\frac{2x^3}{3} \\right]_0^1 = 1 - \\frac{2}{3} = \\frac{1}{3}.$$` },
        ],
        result: 'The region between the two parabolas has area exactly $\\frac{1}{3}$.',
      },
      {
        title: 'Area between the sine and cosine curves',
        problem: 'Find the area of the region enclosed by $y = \\sin x$ and $y = \\cos x$ between two consecutive intersection points.',
        steps: [
          { label: 'Step 1: Locate consecutive intersections', text: 'The curves cross where $\\sin x = \\cos x$, that is where $\\tan x = 1$: at $x = \\frac{\\pi}{4} + k\\pi$. Two consecutive crossings are at $x = -\\frac{3\\pi}{4}$ and $x = \\frac{\\pi}{4}$, and they enclose a single lens-shaped region.' },
          { label: 'Step 2: Identify the top curve', text: 'Test $x = 0$ inside the interval: $\\cos 0 = 1$ and $\\sin 0 = 0$, so cosine is the upper curve throughout $\\left( -\\frac{3\\pi}{4}, \\frac{\\pi}{4} \\right)$ — the curves do not cross inside.' },
          { label: 'Step 3: Integrate top minus bottom', text: `$$A = \\int_{-3\\pi/4}^{\\pi/4} \\left( \\cos x - \\sin x \\right) dx = \\left[ \\sin x + \\cos x \\right]_{-3\\pi/4}^{\\pi/4}.$$` },
          { label: 'Step 4: Evaluate at the endpoints', text: 'At $x = \\frac{\\pi}{4}$: $\\sin\\frac{\\pi}{4} + \\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\sqrt{2}$. At $x = -\\frac{3\\pi}{4}$: both $\\sin$ and $\\cos$ equal $-\\frac{\\sqrt{2}}{2}$, giving $-\\sqrt{2}$.' },
          { label: 'Step 5: Conclude', text: `$$A = \\sqrt{2} - \\left( -\\sqrt{2} \\right) = 2\\sqrt{2}.$$` },
        ],
        result: 'The enclosed sliver between sine and cosine has area $2\\sqrt{2} \\approx 2.83$; the same value repeats for every lens between consecutive crossings.',
      },
      {
        title: 'A region that wants $y$-integration',
        problem: 'Find the area of the region bounded by the parabola $x = y^2$ and the line $x = y + 2$.',
        steps: [
          { label: 'Step 1: Find the intersections', text: 'Set $y^2 = y + 2$: then $y^2 - y - 2 = 0$, which factors as $(y - 2)(y + 1) = 0$, so $y = -1$ and $y = 2$. The intersection points are $(1, -1)$ and $(4, 2)$.' },
          { label: 'Step 2: Decide the direction of slicing', text: 'The parabola opens to the right, and solving it for $y$ would give two branches $y = \\pm\\sqrt{x}$. Horizontal strips avoid that: the line is on the right and the parabola on the left throughout the region.' },
          { label: 'Step 3: Set up the $y$-integral', text: 'Each horizontal strip runs from the left curve $x = y^2$ to the right curve $x = y + 2$: $$A = \\int_{-1}^{2} \\left[ (y + 2) - y^2 \\right] dy.$$' },
          { label: 'Step 4: Evaluate', text: `$$A = \\left[ \\frac{y^2}{2} + 2y - \\frac{y^3}{3} \\right]_{-1}^{2} = \\left( 2 + 4 - \\frac{8}{3} \\right) - \\left( \\frac{1}{2} - 2 + \\frac{1}{3} \\right) = \\frac{10}{3} + \\frac{7}{6} = \\frac{27}{6}.$$` },
        ],
        result: 'The area is $\\frac{9}{2}$, computed with one clean $y$-integral where an $x$-integral would have required two pieces and square roots.',
      },
    ],
    keyTakeaways: [
      'The area between curves is $\\int_a^b [f(x) - g(x)]\\,dx$ with the upper curve minus the lower curve — the sign of the strip height must stay nonnegative.',
      'Intersections of the boundary curves are the natural limits of integration.',
      'If the curves cross inside the region, split the integral at each crossing so each piece has a consistent top curve.',
      'Integrating with respect to $y$ uses right curve minus left curve and is the right tool for sideways parabolas and curves best written as $x$ in terms of $y$.',
      'Always sketch the region first: the picture, not the algebra, tells you which curve is on top and which variable to use.',
    ],
    quiz: [
      {
        q: 'The area between $y = f(x)$ and $y = g(x)$ from $x = a$ to $x = b$ with $f(x) \\ge g(x)$ is:',
        options: [`$\\int_a^b \\left[ g(x) - f(x) \\right] dx$`, `$\\int_a^b \\left[ f(x) - g(x) \\right] dx$`, `$\\left| \\int_a^b f(x)\\,dx \\right| - \\left| \\int_a^b g(x)\\,dx \\right|$`, `$\\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx$`],
        answer: 1,
        explanation: 'Each thin strip has height equal to the difference top minus bottom; summing those heights gives the integral of $f(x) - g(x)$, which is nonnegative under the hypothesis.',
      },
      {
        q: 'To set up the area between $y = \\sin x$ and $y = \\cos x$ for one enclosed lens, the limits of integration are best taken as:',
        options: [`$x = 0$ and $x = \\frac{\\pi}{2}$`, 'Two consecutive solutions of $\\sin x = \\cos x$, such as $-\\frac{3\\pi}{4}$ and $\\frac{\\pi}{4}$', `$x = -\\frac{\\pi}{2}$ and $x = \\frac{\\pi}{2}$`, 'Two consecutive solutions of $\\sin x = -\\cos x$'],
        answer: 1,
        explanation: 'The enclosed region is bounded by consecutive crossings; solving $\\tan x = 1$ gives crossings spaced $\\pi$ apart, and one full lens runs from $-\\frac{3\\pi}{4}$ to $\\frac{\\pi}{4}$.',
      },
      {
        q: 'The region bounded by $x = y^2$ and $x = 2 - y$ is best integrated with respect to $y$. What are the limits?',
        options: [`$y = 0$ to $y = 2$`, `$y = -2$ to $y = 1$`, `$y = -1$ to $y = 2$`, `$y = 0$ to $y = 4$`],
        answer: 1,
        explanation: 'Setting $y^2 = 2 - y$ gives $y^2 + y - 2 = 0$, which factors as $(y + 2)(y - 1) = 0$ — the limits are $y = -2$ and $y = 1$.',
      },
      {
        q: 'On the interval $[0, 2]$, curve $g$ lies above curve $f$ on $(0, 1)$ and below on $(1, 2)$. The total area between them is:',
        options: [`$\\int_0^2 [f(x) - g(x)]\\,dx$`, `$\\int_0^1 [g(x) - f(x)]\\,dx - \\int_1^2 [g(x) - f(x)]\\,dx$`, `$\\int_0^1 [g(x) - f(x)]\\,dx + \\int_1^2 [f(x) - g(x)]\\,dx$`, 'Impossible to compute without the formulas for $f$ and $g$'],
        answer: 2,
        explanation: 'Each piece must be integrated with the upper curve minus the lower curve so both pieces contribute positively, exactly as with total distance in Section 5.4.',
      },
    ],
  },

  // ------------------------------------------------------------------ 6.2
  {
    sectionId: 'calc-ch6-s2',
    readingTime: 10,
    intro: 'Rotating a plane region about an axis sweeps a solid of revolution — a sphere, a cone, a vase, a trumpet. Since no classical formula covers a vase, this section returns to the philosophy of Section 5.1: slice the solid into pieces whose volumes are known, sum, and take a limit. The slicing theorem $V = \\int A(x)\\,dx$ generalizes far beyond revolutions, computing volumes of solids defined by any family of cross-sections.',
    objectives: [
      'State and apply the slicing principle $V = \\int_a^b A(x)\\,dx$ for solids with known cross-sections',
      'Set up and evaluate volumes of revolution by the disk method',
      'Carve solids with holes using the washer method, correctly identifying outer and inner radii',
      'Compute volumes of solids with square or triangular cross-sections built on a plane region',
    ],
    concepts: [
      {
        term: 'Volume by slicing',
        kind: 'definition',
        statement: 'Let $S$ be a solid that lies between the planes $x = a$ and $x = b$. If the cross-sectional area of $S$ in the plane perpendicular to the $x$-axis through $x$ is $A(x)$, a continuous function, then the volume is $$V = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} A(x_i^*)\\,\\Delta x = \\int_a^b A(x)\\,dx.$$',
        detail: 'Each slab of thickness $\\Delta x$ has volume approximately $A(x_i^*)\\,\\Delta x$ — the area of its face times its depth — and the Riemann-sum limit is exactly the definite integral. This is the master theorem of the section: disks and washers are just the special cases where the cross-sections are circles or rings.',
      },
      {
        term: 'The disk method',
        kind: 'method',
        statement: 'Revolving the region under a continuous $y = f(x) \\ge 0$ on $[a, b]$ about the $x$-axis produces a solid whose cross-section at $x$ is a disk of radius $f(x)$. Its volume is $$V = \\pi \\int_a^b \\left[ f(x) \\right]^2 dx.$$ Revolution about the $y$-axis uses $y$-sections: $V = \\pi \\int_c^d \\left[ \\text{radius}(y) \\right]^2 dy$.',
        detail: 'The formula is $V = \\int A(x)\\,dx$ with $A(x) = \\pi r^2 = \\pi [f(x)]^2$. Radii are always measured from the axis of revolution — if the axis is a line $y = c$ rather than the $x$-axis, the radius is $f(x) - c$ (assuming $f(x) \\ge c$). Squaring the radius is the single most common algebra slip in this chapter; write the square brackets deliberately.',
      },
      {
        term: 'The washer method',
        kind: 'method',
        statement: 'Revolving the region between two curves $y = f(x) \\ge g(x) \\ge 0$ on $[a, b]$ about the $x$-axis produces a hollow solid whose cross-section is an annulus, so $$V = \\pi \\int_a^b \\left( \\left[ f(x) \\right]^2 - \\left[ g(x) \\right]^2 \\right) dx.$$ Here $R = f(x)$ is the outer radius and $r = g(x)$ is the inner radius.',
        detail: 'A washer is a disk of radius $R$ with a disk of radius $r$ removed, so its area is $\\pi R^2 - \\pi r^2$. It is a square in the radii, not the radii themselves, that subtracts: $\\pi(R^2 - r^2)$ is correct while $\\pi(R - r)^2$ is a classic blunder. The washer method is the default for regions that do not touch the axis.',
      },
      {
        term: 'General cross-sections',
        kind: 'method',
        statement: 'If a solid has a base region in the $xy$-plane and every cross-section perpendicular to the $x$-axis is a shape of known area — a square, an equilateral triangle, a semicircle, a rectangle of fixed proportion — then $V = \\int_a^b A(x)\\,dx$ where $A(x)$ is built from the slice width $w(x) = f(x) - g(x)$. For squares of side $s(x)$: $A = s^2$; for equilateral triangles: $A = \\frac{\\sqrt{3}}{4} s^2$; for semicircles of diameter $s$: $A = \\frac{\\pi}{8} s^2$.',
        detail: 'The slice width between the boundary curves plays the role the radius played for disks: it is the raw geometric ingredient from which the area formula is assembled. These problems test whether the slicing principle, not just the disk formula, is understood.',
      },
      {
        term: 'Choosing the axis strategy',
        kind: 'insight',
        statement: 'Revolution about a horizontal axis pairs naturally with $x$-integration and vertical strips; revolution about a vertical axis pairs with $y$-integration and horizontal strips. The radii in the washer formula are distances from the axis of revolution to the near and far boundaries of the region.',
        detail: 'When the region does not border the axis, both radii are nonzero. When the axis lies to the side of the region, radii are measured with shifts such as $(x + 1)$ for revolution about the line $x = -1$. Section 6.3 offers the alternative — cylindrical shells — that often removes exactly this bookkeeping.',
      },
      {
        term: 'Cavalieri’s principle',
        kind: 'insight',
        statement: 'Two solids with equal cross-sectional areas at every height have equal volumes, even if their shapes differ — solids that are sheared or slanted versions of one another have the same volume as long as every slice matches.',
        detail: 'This 17th-century observation of Bonaventura Cavalieri is the geometric soul of the slicing formula: volume depends only on the profile of areas $A(x)$, not on the lateral shape. The book’s cylinder-minus-cone example illustrates it: removing a cone from a cylinder of the same height leaves a solid whose cross-sections are annuli that grow linearly, exactly like a hemisphere of the same base — hence the hemisphere’s volume can be read off without a single integral.',
      },
    ],
    examples: [
      {
        title: 'A disk-method volume',
        problem: 'Find the volume of the solid obtained by rotating the region under $y = \\sqrt{x}$ on $0 \\le x \\le 4$ about the $x$-axis.',
        steps: [
          { label: 'Step 1: Identify the cross-sections', text: 'Each plane perpendicular to the $x$-axis cuts the solid in a disk of radius $\\sqrt{x}$, so $A(x) = \\pi \\left( \\sqrt{x} \\right)^2 = \\pi x$.' },
          { label: 'Step 2: Write the disk integral', text: `$$V = \\pi \\int_0^4 x\\,dx.$$` },
          { label: 'Step 3: Evaluate', text: `$$V = \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 = 8\\pi.$$` },
          { label: 'Step 4: Sanity check', text: 'The solid is a paraboloid cap of length 4 and end radius 2; a bounding cylinder of radius 2 and length 4 would have volume $16\\pi$, and $8\\pi$ is exactly half of that — plausible for this tapering shape.' },
        ],
        result: 'The volume is $8\\pi \\approx 25.1$ cubic units.',
      },
      {
        title: 'A washer-method volume',
        problem: 'Find the volume of the solid obtained by rotating the region between $y = x$ and $y = \\sqrt{x}$, $0 \\le x \\le 1$, about the $x$-axis.',
        steps: [
          { label: 'Step 1: Picture the washers', text: 'Rotating a vertical strip sweeps a washer: the outer edge follows $y = \\sqrt{x}$ and the inner hole follows $y = x$. On $(0, 1)$, $\\sqrt{x} \\ge x$, so the outer radius is $R = \\sqrt{x}$ and the inner radius is $r = x$.' },
          { label: 'Step 2: Write the washer integral', text: `$$V = \\pi \\int_0^1 \\left( \\left[ \\sqrt{x} \\right]^2 - \\left[ x \\right]^2 \\right) dx = \\pi \\int_0^1 \\left( x - x^2 \\right) dx.$$` },
          { label: 'Step 3: Evaluate', text: `$$V = \\pi \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 = \\pi \\left( \\frac{1}{2} - \\frac{1}{3} \\right) = \\frac{\\pi}{6}.$$` },
          { label: 'Step 4: Guard the classic error', text: 'Note that $\\pi \\int_0^1 (\\sqrt{x} - x)^2 dx$ would be wrong: washers subtract squared radii, not squares of differences. The hole in each washer is a missing disk, removed after squaring.' },
        ],
        result: 'The volume is $\\frac{\\pi}{6}$ cubic units.',
      },
      {
        title: 'Square cross-sections on a curved base',
        problem: 'The base of a solid is the region between $y = \\sqrt{x}$ and $y = x^2$ for $0 \\le x \\le 1$. Cross-sections perpendicular to the $x$-axis are squares. Find the volume.',
        steps: [
          { label: 'Step 1: Find the side length of a typical square', text: 'At position $x$, the base region runs from $x^2$ up to $\\sqrt{x}$, so the side of the square sitting on that base is $s(x) = \\sqrt{x} - x^2$.' },
          { label: 'Step 2: Build the cross-sectional area', text: 'A square of side $s$ has area $s^2$, so $$A(x) = \\left( \\sqrt{x} - x^2 \\right)^2 = x - 2x^{5/2} + x^4,$$ expanding carefully with the cross term $2 \\cdot \\sqrt{x} \\cdot x^2 = 2x^{5/2}$.' },
          { label: 'Step 3: Integrate the areas', text: `$$V = \\int_0^1 \\left( x - 2x^{5/2} + x^4 \\right) dx = \\left[ \\frac{x^2}{2} - \\frac{4}{7} x^{7/2} + \\frac{x^5}{5} \\right]_0^1.$$` },
          { label: 'Step 4: Evaluate', text: `$$V = \\frac{1}{2} - \\frac{4}{7} + \\frac{1}{5} = \\frac{35 - 40 + 14}{70} = \\frac{9}{70}.$$` },
        ],
        result: 'The solid has volume $\\frac{9}{70} \\approx 0.129$ cubic units — thin, because the squares have short sides near both ends of the base.',
      },
    ],
    keyTakeaways: [
      'The slicing principle $V = \\int_a^b A(x)\\,dx$ computes any solid from its cross-sectional area profile.',
      'Disk method: revolving $y = f(x)$ about the $x$-axis gives $V = \\pi \\int_a^b [f(x)]^2 dx$.',
      'Washer method: revolving the region between $f$ and $g$ gives $V = \\pi \\int_a^b \\left( R^2 - r^2 \\right) dx$ — square each radius, then subtract.',
      'Radii are distances from the axis of revolution; shift them when the axis is a line other than the coordinate axes.',
      'For square or triangular cross-sections, the slice width between the boundary curves feeds the area formula for that shape.',
      'Cavalieri’s principle: matching cross-sectional profiles imply equal volumes, whatever the overall shape.',
    ],
    quiz: [
      {
        q: 'Rotating the region under $y = f(x) \\ge 0$ on $[a, b]$ about the $x$-axis, the disk method volume is:',
        options: [`$\\int_a^b f(x)\\,dx$`, `$\\pi \\int_a^b f(x)\\,dx$`, `$\\pi \\int_a^b [f(x)]^2 dx$`, `$\\left( \\int_a^b f(x)\\,dx \\right)^2$`],
        answer: 2,
        explanation: 'Each cross-section is a circle of radius $f(x)$, so its area is $\\pi [f(x)]^2$, and integrating the areas along the axis gives the volume.',
      },
      {
        q: 'The region between $y = \\sqrt{x}$ and $y = x$ on $[0, 1]$ is revolved about the $x$-axis. The correct washer setup is:',
        options: [`$\\pi \\int_0^1 \\left( \\sqrt{x} - x \\right)^2 dx$`, `$\\pi \\int_0^1 \\left( x - x^2 \\right) dx$`, `$\\pi \\int_0^1 \\left( \\sqrt{x} - x^2 \\right) dx$`, `$2\\pi \\int_0^1 x \\left( \\sqrt{x} - x \\right) dx$`],
        answer: 1,
        explanation: 'Outer radius $R = \\sqrt{x}$ and inner radius $r = x$ give squared radii $x$ and $x^2$; subtracting them after squaring yields $x - x^2$. Option D is the shell setup for a different axis.',
      },
      {
        q: 'A solid has a base in the $xy$-plane and cross-sections perpendicular to the $x$-axis that are semicircles with diameter spanning the base. If the base runs from $y = g(x)$ to $y = h(x)$, the slice area is:',
        options: [`$\\pi (h - g)^2$`, `$\\frac{\\pi}{2} (h - g)^2$`, `$\\frac{\\pi}{8} (h - g)^2$`, `$\\frac{1}{2} (h - g)^2$`],
        answer: 2,
        explanation: 'A semicircle with diameter $d = h - g$ has radius $\\frac{h-g}{2}$ and area $\\frac{1}{2}\\pi \\left( \\frac{h-g}{2} \\right)^2 = \\frac{\\pi}{8}(h-g)^2$.',
      },
      {
        q: 'Which statement expresses Cavalieri’s principle?',
        options: ['Solids of revolution always have larger volume than their generating regions', 'Two solids whose cross-sections have equal areas at every height have equal volumes', 'The volume of a solid equals the area of its largest cross-section times its length', 'Every solid can be decomposed into washers'],
        answer: 1,
        explanation: 'Cavalieri’s principle says volume is determined entirely by the profile of slice areas — slanting or reshaping the sides without changing the slice areas does not change the volume.',
      },
    ],
  },

  // ------------------------------------------------------------------ 6.3
  {
    sectionId: 'calc-ch6-s3',
    readingTime: 9,
    intro: 'Slicing a solid of revolution perpendicular to the axis produces disks and washers, but there is a second way to cut: parallel to the axis, producing thin cylindrical shells. Unrolling a shell reveals a thin rectangular slab — circumference times height times thickness — and summing those slabs gives a formula with a signature $2\\pi x$ factor. Shells and washers are rivals for every problem; learning when each wins is the point of this section.',
    objectives: [
      'Derive the shell method formula from the unrolled-shell picture of circumference, height and thickness',
      'Set up shell volumes for revolution about the $y$-axis, the $x$-axis, and shifted axes like $x = c$',
      'Explain when shells beat washers, especially when solving for the other variable is hard or impossible',
      'Cross-check a volume by computing it both ways and confirming agreement',
    ],
    concepts: [
      {
        term: 'The shell method',
        kind: 'method',
        statement: 'Rotating about the $y$-axis the region under $y = f(x) \\ge 0$ on $[a, b]$ with $a \\ge 0$ gives a solid whose volume is $$V = \\int_a^b 2\\pi x\\, f(x)\\,dx.$$ The factor $2\\pi x$ is the circumference of the shell at radius $x$, $f(x)$ its height, and $dx$ its thickness.',
        detail: 'A vertical strip at position $x$, height $f(x)$ and width $dx$, sweeps a cylindrical shell of radius $x$. If the shell were slit vertically and unrolled, it would form a slab of dimensions $2\\pi x$ by $f(x)$ by $dx$ — volume $2\\pi x\\, f(x)\\,dx$. The integral sums the unrolled slabs, and the thinner the shells, the better the approximation.',
      },
      {
        term: 'Radius times height times thickness',
        kind: 'insight',
        statement: 'Every shell volume has the shape $$V = \\int 2\\pi \\left( \\text{radius} \\right) \\left( \\text{height} \\right) \\left( \\text{thickness} \\right),$$ where the radius is the distance from the strip to the axis of revolution and the height is the length of the strip.',
        detail: 'This mnemonic decouples the formula from coordinates. Rotating a horizontal strip about the $x$-axis, the radius is $y$ and the height is the horizontal length of the strip, giving $V = \\int 2\\pi y \\cdot L(y)\\,dy$. Rotating about the line $x = -1$, a vertical strip at $x$ has radius $x - (-1) = x + 1$ — measure from the axis, always.',
      },
      {
        term: 'Shells versus washers',
        kind: 'insight',
        statement: 'For rotation about the $y$-axis using an $x$-integral, shells integrate along the natural variable of the region: washers would require solving the boundary curves for $x$ in terms of $y$. Shells win when that inversion is awkward, produces multiple branches, or is outright impossible. Washers win when the region is described in the variable perpendicular to the axis.',
        detail: 'Rule of thumb: with shells, the integration variable runs parallel to the axis of revolution; with washers, perpendicular. When in doubt, set up both — they must agree, and the mismatch usually exposes a setup error such as forgetting the hole in a washer.',
      },
      {
        term: 'The $2\\pi x$ signature',
        kind: 'notation',
        statement: 'A shell integral about a vertical axis is recognizable by its form $2\\pi \\int x \\cdot h(x)\\,dx$: the radius factor multiplies the height function. About the line $x = c$, the signature becomes $2\\pi \\int (x - c)\\, h(x)\\,dx$ with the radius measured from the line.',
        detail: 'When scanning an integral $2\\pi\\int_0^2 x^3 dx$ or $2\\pi\\int_0^4 x\\sqrt{x}\\,dx$, read off the radius and the height in each factor — this reverse-engineering skill is exactly what exams test, and it also lets you identify axis shifts such as radius $x + 1$ for the axis $x = -1$.',
      },
      {
        term: 'A volume washers cannot touch',
        kind: 'insight',
        statement: 'The region under $y = \\sin(x^2)$ on $[0, \\sqrt{\\pi}]$, rotated about the $y$-axis, is computable by shells — the integral $2\\pi\\int x\\sin(x^2)\\,dx$ yields to the substitution rule of Section 5.5 — but washers would demand $\\int \\sqrt{\\arcsin y}\\;dy$, which has no elementary antiderivative at all.',
        detail: 'This example is the strongest argument for keeping both methods in the toolkit: the choice of slicing direction is not merely a convenience, it can decide whether a problem is solvable. The same phenomenon returns in Chapter 7, where a clever substitution converts an impossible integral into an easy one.',
      },
      {
        term: 'Verifying by double computation',
        kind: 'method',
        statement: 'Whenever a solid admits both a shell and a washer setup, computing the volume both ways and comparing is the strongest available check — two independent derivations of the same number rarely share a mistake.',
        detail: 'For the region under $y = \\sqrt{x}$ on $[0, 4]$ rotated about the $y$-axis, shells give $2\\pi\\int_0^4 x\\sqrt{x}\\,dx = \\frac{128\\pi}{5}$ and washers give $\\pi\\int_0^2 \\left( 16 - y^4 \\right) dy = \\frac{128\\pi}{5}$. The agreement certifies both setups.',
      },
    ],
    examples: [
      {
        title: 'A shell volume, cross-checked by washers',
        problem: 'Find the volume of the solid obtained by rotating the region under $y = \\sqrt{x}$ on $0 \\le x \\le 4$ about the $y$-axis.',
        steps: [
          { label: 'Step 1: Set up shells', text: 'A vertical strip at $x$ has height $\\sqrt{x}$ and spins at radius $x$ about the $y$-axis: $$V = \\int_0^4 2\\pi x \\sqrt{x}\\,dx = 2\\pi \\int_0^4 x^{3/2}\\,dx.$$' },
          { label: 'Step 2: Evaluate the shell integral', text: `$$V = 2\\pi \\left[ \\frac{2}{5} x^{5/2} \\right]_0^4 = 2\\pi \\cdot \\frac{2}{5} \\cdot 32 = \\frac{128\\pi}{5}.$$` },
          { label: 'Step 3: Cross-check with washers', text: 'Solving $y = \\sqrt{x}$ gives $x = y^2$, and $y$ runs from 0 to 2. Each horizontal slice sweeps a washer with outer radius 4 (the right edge of the region) and inner radius $y^2$: $$V = \\pi \\int_0^2 \\left( 16 - y^4 \\right) dy.$$' },
          { label: 'Step 4: Confirm agreement', text: '$$V = \\pi \\left[ 16y - \\frac{y^5}{5} \\right]_0^2 = \\pi \\left( 32 - \\frac{32}{5} \\right) = \\frac{128\\pi}{5}.$$ Both methods give the same volume.' },
        ],
        result: '$V = \\frac{128\\pi}{5} \\approx 80.4$ cubic units, verified by two independent setups.',
      },
      {
        title: 'Shells about a shifted axis',
        problem: 'Find the volume of the solid obtained by rotating the region under $y = x^2$ on $0 \\le x \\le 2$ about the line $x = -1$.',
        steps: [
          { label: 'Step 1: Measure the radius from the axis', text: 'A vertical strip at position $x$ lies a distance $x - (-1) = x + 1$ from the axis of revolution, so the shell radius is $x + 1$, not $x$.' },
          { label: 'Step 2: Write the shell integral', text: 'The height of the strip is $x^2$, so $$V = \\int_0^2 2\\pi (x + 1) x^2\\,dx = 2\\pi \\int_0^2 \\left( x^3 + x^2 \\right) dx.$$' },
          { label: 'Step 3: Evaluate', text: `$$V = 2\\pi \\left[ \\frac{x^4}{4} + \\frac{x^3}{3} \\right]_0^2 = 2\\pi \\left( 4 + \\frac{8}{3} \\right) = 2\\pi \\cdot \\frac{20}{3}.$$` },
          { label: 'Step 4: Conclude', text: '$V = \\frac{40\\pi}{3} \\approx 41.9$ cubic units.' },
        ],
        result: 'The shifted axis changes only the radius factor: $V = \\frac{40\\pi}{3}$, comfortably larger than the $8\\pi$ obtained for the same region about the $y$-axis, since every shell now spins on a longer arm.',
      },
      {
        title: 'A shell integral washers cannot equal',
        problem: 'Find the volume of the solid obtained by rotating the region under $y = \\sin(x^2)$ on $0 \\le x \\le \\sqrt{\\pi}$ about the $y$-axis.',
        steps: [
          { label: 'Step 1: Diagnose why washers fail', text: 'A washer setup needs the boundary as $x$ in terms of $y$: inverting $y = \\sin(x^2)$ gives $x = \\sqrt{\\arcsin y}$, and the resulting integral $\\int \\sqrt{\\arcsin y}\\;dy$ has no elementary antiderivative. Shells, however, keep everything in $x$.' },
          { label: 'Step 2: Set up shells', text: 'A strip at $x$ has height $\\sin(x^2)$ and spins at radius $x$: $$V = \\int_0^{\\sqrt{\\pi}} 2\\pi x \\sin(x^2)\\,dx.$$' },
          { label: 'Step 3: Substitute $u = x^2$', text: 'Then $du = 2x\\,dx$, and when $x$ runs from 0 to $\\sqrt{\\pi}$, $u$ runs from 0 to $\\pi$: $$V = \\pi \\int_0^{\\pi} \\sin u\\,du.$$' },
          { label: 'Step 4: Evaluate', text: `$$V = \\pi \\left[ -\\cos u \\right]_0^{\\pi} = \\pi\\left( -\\cos\\pi + \\cos 0 \\right) = \\pi(1 + 1) = 2\\pi.$$` },
        ],
        result: '$V = 2\\pi \\approx 6.28$ cubic units — shells plus a Section 5.5 substitution succeeded where washers had no elementary path at all.',
      },
    ],
    keyTakeaways: [
      'The shell method rotates strips parallel to the axis: $V = \\int 2\\pi (\\text{radius})(\\text{height})\\,d(\\text{thickness})$.',
      'For rotation about the $y$-axis with vertical strips: $V = 2\\pi \\int_a^b x\\, f(x)\\,dx$.',
      'The radius is always measured from the axis of revolution: about $x = -1$ the radius is $x + 1$.',
      'Shells integrate in the variable parallel to the axis; washers in the variable perpendicular to it.',
      'Shells are the method of choice when inverting the boundary curves is hard, multi-valued, or impossible — as with $y = \\sin(x^2)$.',
      'When both setups are feasible, computing both is a powerful cross-check; they must agree.',
    ],
    quiz: [
      {
        q: 'The region under $y = f(x)$ on $[a, b]$ with $a \\ge 0$ is rotated about the $y$-axis. The shell method volume is:',
        options: [`$\\pi \\int_a^b [f(x)]^2 dx$`, `$2\\pi \\int_a^b x\\, f(x)\\,dx$`, `$\\pi \\int_a^b \\left( [f(x)]^2 - a^2 \\right) dx$`, `$2\\pi \\int_a^b f(x)\\,dx$`],
        answer: 1,
        explanation: 'Each vertical strip sweeps a shell with circumference $2\\pi x$, height $f(x)$ and thickness $dx$; unrolled, it is a slab of volume $2\\pi x f(x)\\,dx$.',
      },
      {
        q: 'Rotating the region under $y = x^2$ on $[0, 2]$ about the line $x = -1$, the shell integrand (before integrating) is:',
        options: [`$2\\pi x \\cdot x^2$`, `$2\\pi (x + 1) x^2$`, `$2\\pi (x - 1) x^2$`, `$\\pi (x + 1)^2 x^2$`],
        answer: 1,
        explanation: 'The radius is the distance from the strip to the axis: $x - (-1) = x + 1$; the height is still $x^2$.',
      },
      {
        q: 'Rotating the region under $y = \\sin(x^2)$ on $[0, \\sqrt{\\pi}]$ about the $y$-axis, shells are preferred because:',
        options: ['Shell formulas never involve trigonometric functions', 'Washers would require $\\sqrt{\\arcsin y}$, an integrand with no elementary antiderivative', 'Shells avoid the factor $2\\pi$', 'The region is symmetric about the $y$-axis'],
        answer: 1,
        explanation: 'Washers must integrate in $y$, forcing the inverse function $\\sqrt{\\arcsin y}$, which cannot be integrated in elementary terms; shells keep the integral in $x$, where a $u$-substitution finishes it.',
      },
      {
        q: 'Which integral gives the volume when the region between $x = y$ and $x = y^2 - 2$ on $-1 \\le y \\le 2$ is rotated about the $x$-axis using horizontal shells?',
        options: [`$\\int_{-1}^{2} 2\\pi y \\left( y - (y^2 - 2) \\right) dy$`, `$\\int_{-1}^{2} \\pi \\left( y^2 - (y^2 - 2)^2 \\right) dy$`, `$\\int_{-1}^{2} 2\\pi y \\left( y^2 - 2 - y \\right) dy$`, `$\\int_{-1}^{2} \\pi \\left[ (y^2 - 2) - y \\right]^2 dy$`],
        answer: 0,
        explanation: 'About the $x$-axis, a horizontal strip at height $y$ spins with radius $y$ and height equal to its length, right boundary minus left boundary: $y - (y^2 - 2)$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 6.4
  {
    sectionId: 'calc-ch6-s4',
    readingTime: 9,
    intro: 'When a force moves an object, physics says work is done, and the constant-force case is simply force times distance. But springs resist more the further they stretch, and the water at the bottom of a tank must climb farther than the water at the top. The integral was made for exactly this: sum force times displacement over infinitesimal pieces, and each layer or each segment contributes its own little product.',
    objectives: [
      'Compute work for constant forces with $W = Fd$, and for variable forces with $W = \\int_a^b F(x)\\,dx$',
      'Apply Hooke’s law $F(x) = kx$ to spring problems, respecting the reference to natural length',
      'Set up pumping problems by slicing liquid into thin layers, combining weight density, volume and lift distance',
      'Compute the work to haul rope or cable problems where the lifted weight itself changes during the process',
    ],
    concepts: [
      {
        term: 'Work by a constant force',
        kind: 'definition',
        statement: 'If a constant force $F$ moves an object a distance $d$ along the line of the force, the **work** done is $$W = F\\,d.$$ In SI units, force in newtons times distance in meters gives work in **joules**; in US units, pounds times feet gives **foot-pounds**.',
        detail: 'Work is energy transferred: lifting a 1-kilogram book one meter against gravity takes about $9.8$ joules. The constant-force formula is the anchor case; every other example in the section is a sum of many small constant-force pieces.',
      },
      {
        term: 'Work by a variable force',
        kind: 'method',
        statement: 'If the force $F(x)$ varies continuously with position along a straight path from $x = a$ to $x = b$, the work is the integral of force with respect to displacement: $$W = \\int_a^b F(x)\\,dx,$$ the limit of sums of $F(x_i^*)\\,\\Delta x$ — small forces acting over small displacements.',
        detail: 'The definition is literally the area under the force-versus-position curve, a third appearance of the accumulation idea after area (5.1) and net change (5.4). Slicing is the universal strategy: partition the displacement, treat the force as constant on each piece, sum, take the limit.',
      },
      {
        term: 'Hooke’s law',
        kind: 'law',
        statement: 'The force needed to hold a spring stretched (or compressed) $x$ units beyond its natural length is proportional to $x$: $$F(x) = k\\,x,$$ where $k$ is the **spring constant**, in newtons per meter (or pounds per foot).',
        detail: 'The reference point matters: $x$ is measured from the natural, unstressed length, not from the wall. A single data point pins down $k$ — a force of $40$ newtons at a stretch of $5$ centimeters gives $k = \\frac{40}{0.05} = 800$ newtons per meter. Hooke’s law is the linear approximation valid for modest stretches; real springs stiffen or yield eventually.',
      },
      {
        term: 'Pumping problems',
        kind: 'method',
        statement: 'To pump liquid out of a tank, slice the liquid into thin horizontal layers. A layer at depth with volume $V_i$, weight density $\\delta$ (weight per unit volume) and lift distance $d_i$ requires work $\\delta V_i d_i$, and $$W = \\int \\delta \\cdot \\left( \\text{layer volume} \\right) \\cdot \\left( \\text{lift distance} \\right).$$',
        detail: 'Water weighs $9800$ newtons per cubic meter in SI units and $62.5$ pounds per cubic foot in US units. The layer volume comes from the tank geometry — typically a disk or rectangle whose size varies with height via similar triangles in conical or spherical tanks. Set up coordinates first and express the lift distance from that coordinate: the discipline is identical to the shell method of Section 6.3.',
      },
      {
        term: 'Weight density',
        kind: 'notation',
        statement: 'The **weight density** $\\delta$ of a liquid is its weight per unit volume, already including gravity: $\\delta = \\rho g$. For water, $\\delta = 9800$ newtons per cubic meter or $62.5$ pounds per cubic foot.',
        detail: 'US units measure force directly in pounds, so $\\delta$ converts volume to weight immediately. In SI units one may instead see mass density $\\rho = 1000$ kilograms per cubic meter, with the factor $g = 9.8$ meters per second squared appearing explicitly: $\\text{weight} = \\rho g \\cdot \\text{volume}$. Both routes give the same $\\delta$.',
      },
      {
        term: 'Rope, cable and chain problems',
        kind: 'insight',
        statement: 'When the object being hauled is itself the weight — a hanging rope wound onto a pulley — each small segment of the rope is lifted through its own distance. If the rope hangs with $y$ measured from the top, the segment at depth $y$ climbs exactly $y$ units, so $W = \\int_0^{L} \\left( \\text{linear weight density} \\right) y\\,dy$ for a rope of length $L$.',
        detail: 'These problems teach the second kind of variability: not only does distance vary, the amount of material still hanging varies too. The same layered thinking computes the work to build a column of water as it fills, or the work to lift a satellite away from Earth, where gravity varies as $\\frac{1}{r^2}$ — the escape-velocity integral of Chapter 7.8.',
      },
    ],
    examples: [
      {
        title: 'Stretching a spring (Hooke’s law)',
        problem: 'A force of 40 newtons is needed to hold a spring stretched from its natural length of 10 centimeters to a length of 15 centimeters. How much work is done in stretching the spring from 15 centimeters to 18 centimeters?',
        steps: [
          { label: 'Step 1: Convert to stretches from natural length', text: 'All distances in Hooke’s law are measured from the natural length of 10 centimeters. Holding at 15 centimeters is a stretch of $x = 0.05$ meters; stretching to 18 centimeters means moving from $x = 0.05$ to $x = 0.08$ meters.' },
          { label: 'Step 2: Find the spring constant', text: 'Hooke’s law with $F = 40$ newtons at $x = 0.05$ meters: $40 = k(0.05)$, so $k = 800$ newtons per meter, giving the force law $F(x) = 800x$.' },
          { label: 'Step 3: Integrate force over displacement', text: 'The work is $$W = \\int_{0.05}^{0.08} 800x\\,dx = \\left[ 400x^2 \\right]_{0.05}^{0.08}.$$' },
          { label: 'Step 4: Evaluate', text: `$$W = 400\\left( 0.0064 - 0.0025 \\right) = 400 \\cdot 0.0039 = 1.56 \\text{ joules}.$$` },
        ],
        result: 'The additional stretch from 15 to 18 centimeters requires $1.56$ joules of work.',
      },
      {
        title: 'Pumping water from a conical tank',
        problem: 'An inverted right circular cone of height 4 meters and base radius 2 meters is full of water. Find the work required to pump all the water up to the level of the top rim.',
        steps: [
          { label: 'Step 1: Set coordinates and slice', text: 'Place the origin at the vertex (bottom point) of the cone with $y$ measured upward, so the water surface is at $y = 4$. Slice the water into thin horizontal disks of thickness $dy$ at height $y$.' },
          { label: 'Step 2: Find the radius of a layer by similar triangles', text: 'The cone tapers linearly from radius 0 at $y = 0$ to radius 2 at $y = 4$, so the layer at height $y$ has radius $\\frac{y}{2}$ and volume $\\pi \\left( \\frac{y}{2} \\right)^2 dy = \\frac{\\pi y^2}{4}\\,dy$.' },
          { label: 'Step 3: Write the work of one layer', text: 'Each layer must rise to the rim, a lift of $(4 - y)$ meters. With water weighing $\\delta = 9800$ newtons per cubic meter, the layer requires $$dW = 9800 \\cdot \\frac{\\pi y^2}{4} (4 - y)\\,dy \\text{ joules}.$$' },
          { label: 'Step 4: Integrate over the tank', text: `$$W = 2450\\pi \\int_0^4 \\left( 4y^2 - y^3 \\right) dy = 2450\\pi \\left[ \\frac{4y^3}{3} - \\frac{y^4}{4} \\right]_0^4 = 2450\\pi \\left( \\frac{256}{3} - 64 \\right).$$` },
          { label: 'Step 5: Compute the number', text: '$W = 2450\\pi \\cdot \\frac{64}{3} = \\frac{156{,}800\\pi}{3} \\approx 1.64 \\times 10^5$ joules — about 164 kilojoules to empty the tank.' },
        ],
        result: 'The pumping work is $\\frac{156{,}800\\pi}{3} \\approx 1.64 \\times 10^5$ joules.',
      },
      {
        title: 'Hauling up a hanging rope',
        problem: 'A 50-foot rope weighing 2 pounds per foot hangs from the roof of a building. How much work is done pulling the entire rope up to the roof?',
        steps: [
          { label: 'Step 1: Slice the rope', text: 'Think of the rope as 50 layers: a segment hanging $y$ feet below the roof must be lifted exactly $y$ feet. Partition the rope into small pieces of length $dy$.' },
          { label: 'Step 2: Weight of one piece', text: 'A piece of length $dy$ weighs $2\\,dy$ pounds, since the rope weighs 2 pounds per foot.' },
          { label: 'Step 3: Work for one piece', text: 'That piece climbs $y$ feet, so $dW = 2y\\,dy$ foot-pounds.' },
          { label: 'Step 4: Integrate from top to bottom', text: `$$W = \\int_0^{50} 2y\\,dy = \\left[ y^2 \\right]_0^{50} = 2500 \\text{ foot-pounds}.$$` },
        ],
        result: 'The rope requires $2500$ foot-pounds of work — as if all 100 pounds were lifted through the average distance of 25 feet.',
      },
    ],
    keyTakeaways: [
      'Constant force: $W = Fd$. Variable force: $W = \\int_a^b F(x)\\,dx$ — work is the area under the force curve.',
      'Hooke’s law $F(x) = kx$ measures the stretch $x$ from the natural length; one data point determines $k$.',
      'Pumping work: $W = \\int \\delta \\cdot (\\text{layer volume}) \\cdot (\\text{lift distance})$, with water weighing $9800$ newtons per cubic meter or $62.5$ pounds per cubic foot.',
      'In conical and spherical tanks, similar triangles give the layer radius as a function of height.',
      'Rope and cable problems integrate weight density times lift distance over the length: each segment climbs its own distance.',
      'Every work problem is the same ritual: choose coordinates, slice, express force and distance per slice in the coordinate, integrate.',
    ],
    quiz: [
      {
        q: 'A force of 30 pounds holds a spring stretched 6 inches beyond its natural length. What is the spring constant $k$?',
        options: ['$k = 5$ pounds per foot', '$k = 30$ pounds per foot', '$k = 60$ pounds per foot', '$k = 180$ pounds per foot'],
        answer: 2,
        explanation: 'Six inches is half a foot; Hooke’s law gives $30 = k \\cdot 0.5$, so $k = 60$ pounds per foot. Units must match before dividing.',
      },
      {
        q: 'In a pumping problem with $y$ measured upward from the bottom of a full tank of height $H$, pumped over the top rim, the lift distance for a layer at height $y$ is:',
        options: [`$y$`, `$H - y$`, `$H + y$`, 'Independent of $y$'],
        answer: 1,
        explanation: 'The layer must climb from its position $y$ to the rim at $H$ — a lift of $H - y$. Layers near the bottom travel farthest, which is why the bottom dominates the total work.',
      },
      {
        q: 'A tank is filled to a height of 4 meters. Which factor appears in the work integrand for pumping the water to the top if the coordinate $y$ starts at the water surface and points downward?',
        options: ['$y$ — the depth below the surface', '$4 - y$ — the remaining height', 'The full height 4 for every layer', '$\\frac{1}{y}$ — the inverse depth'],
        answer: 0,
        explanation: 'With $y$ measured downward from the surface, a layer at depth $y$ must be raised exactly $y$ meters to reach the outlet — the coordinate choice determines which factor appears, but not the physics.',
      },
      {
        q: 'The work integral $W = \\int_a^b F(x)\\,dx$ computes:',
        options: ['The average force over the interval', 'The area under the force-versus-position curve, summing force times displacement', 'The total distance traveled', 'The change in force from $a$ to $b$'],
        answer: 1,
        explanation: 'Each product $F(x)\\,dx$ is a small constant-force work over displacement $dx$; the integral sums them, which is exactly the area under the force curve.',
      },
    ],
  },

  // ------------------------------------------------------------------ 6.5
  {
    sectionId: 'calc-ch6-s5',
    readingTime: 8,
    intro: 'What is the average value of a function over an interval? The discrete average of finitely many numbers divides their sum by the count; for a continuum of values, the sum becomes an integral and the count becomes the length of the interval. The result is a rectangle — the function’s average height — and the Mean Value Theorem for Integrals guarantees the function actually attains that height somewhere.',
    objectives: [
      'Compute the average value of a function on an interval and interpret it as rectangle height',
      'Explain why the definition is the continuous analogue of the discrete mean',
      'State and apply the Mean Value Theorem for Integrals to locate guaranteed points where $f(c) = f_{\\text{ave}}$',
      'Interpret average values of rates: average velocity, average temperature, average current',
    ],
    concepts: [
      {
        term: 'Average value of a function',
        kind: 'definition',
        statement: 'The **average value** of an integrable function $f$ on $[a, b]$ is $$f_{\\text{ave}} = \\frac{1}{b - a} \\int_a^b f(x)\\,dx.$$ For a continuous positive $f$, it is the height of the rectangle over $[a, b]$ whose area equals the area under the curve.',
        detail: 'The definition mirrors the discrete mean $\\frac{1}{n}\\sum a_i$: chop $[a, b]$ into $n$ samples, average them, and let $n$ grow — the Riemann sum divided by $(b - a)$ converges exactly to this quotient. Geometrically, flattening the curve to its average height preserves the enclosed area.',
      },
      {
        term: 'The rectangle picture',
        kind: 'insight',
        statement: 'Multiplying the definition across, $$(b - a)\\, f_{\\text{ave}} = \\int_a^b f(x)\\,dx:$$ the integral — the area under the curve — equals the area of the single rectangle of width $(b - a)$ and height $f_{\\text{ave}}$.',
        detail: 'This picture makes the definition memorable and predicts when averages are surprising: $\\sin x$ on a half-period has average $\\frac{2}{\\pi} \\approx 0.64$, not $\\frac{1}{2}$, because sine spends more time above one half of its maximum than below it.',
      },
      {
        term: 'Mean Value Theorem for Integrals',
        kind: 'theorem',
        statement: 'If $f$ is continuous on $[a, b]$, there exists a number $c$ in $[a, b]$ such that $$f(c) = f_{\\text{ave}} = \\frac{1}{b - a}\\int_a^b f(x)\\,dx.$$',
        detail: 'The proof is one line with the Extreme Value Theorem: $f$ attains a minimum $m$ and maximum $M$, and $m \\le f_{\\text{ave}} \\le M$ because $m(b - a) \\le \\int f \\le M(b - a)$. The Intermediate Value Theorem then places a $c$ with $f(c)$ equal to the average. Like the Mean Value Theorem of Section 4.2, the theorem guarantees existence without locating $c$ — and $c$ need not be unique.',
      },
      {
        term: 'Two Mean Value Theorems',
        kind: 'insight',
        statement: 'The MVT for Integrals is the area-flavored twin of the MVT for Derivatives of Section 4.2: the derivative version promises an instantaneous rate equal to the average rate of change, while the integral version promises an instantaneous value equal to the average value.',
        detail: 'For a velocity function $v(t)$, the derivative MVT finds $c$ with $v(c) = \\frac{s(b) - s(a)}{b - a}$ — average velocity as displacement per time — and the integral MVT finds $c$ with $v(c) = \\frac{1}{b-a}\\int v$, which is the same number, since displacement is the integral of velocity. For position functions the two theorems are secretly the same statement.',
      },
      {
        term: 'Averages of rates',
        kind: 'insight',
        statement: 'If $f$ is a rate of change, $f_{\\text{ave}}$ is the average rate: the constant rate that would accomplish the same net change. Thus average velocity is $\\frac{1}{b-a}\\int_a^b v(t)\\,dt$, which equals $\\frac{\\text{displacement}}{\\text{elapsed time}}$.',
        detail: 'Average speed — the average of $|v|$ — is the different quantity that governs travel time over distance, and mixing the two up is the classic error. Reports of average temperature, average current, average flow rate or average marginal cost all follow the integral definition whenever the underlying quantity varies continuously.',
      },
    ],
    examples: [
      {
        title: 'An average value computation',
        problem: 'Find the average value of $f(x) = 1 + x^2$ on the interval $[-1, 2]$.',
        steps: [
          { label: 'Step 1: Apply the definition', text: `$$f_{\\text{ave}} = \\frac{1}{2 - (-1)} \\int_{-1}^{2} \\left( 1 + x^2 \\right) dx = \\frac{1}{3} \\int_{-1}^{2} \\left( 1 + x^2 \\right) dx.$$` },
          { label: 'Step 2: Antidifferentiate and evaluate', text: `$$\\int_{-1}^{2} \\left( 1 + x^2 \\right) dx = \\left[ x + \\frac{x^3}{3} \\right]_{-1}^{2} = \\left( 2 + \\frac{8}{3} \\right) - \\left( -1 - \\frac{1}{3} \\right) = \\frac{14}{3} + \\frac{4}{3} = 6.$$` },
          { label: 'Step 3: Divide by the interval length', text: `$$f_{\\text{ave}} = \\frac{6}{3} = 2.$$` },
          { label: 'Step 4: Interpret', text: 'Flattened to height 2 over the width-3 interval, the parabola encloses the same area as before: a $3 \\times 2$ rectangle of area 6.' },
        ],
        result: 'The average value of $1 + x^2$ on $[-1, 2]$ is exactly $2$.',
      },
      {
        title: 'Where the average is attained',
        problem: 'For $f(x) = 1 + x^2$ on $[-1, 2]$, the average value is $2$. Find every $c$ guaranteed by the Mean Value Theorem for Integrals, then repeat the analysis for $\\sin x$ on $[0, \\pi]$.',
        steps: [
          { label: 'Step 1: Solve for the first function', text: 'Set $f(c) = 2$: then $1 + c^2 = 2$, so $c^2 = 1$ and $c = \\pm 1$. Both values lie in $[-1, 2]$, so the theorem is satisfied twice — as expected for a U-shaped graph crossing its average height twice.' },
          { label: 'Step 2: Set up the sine average', text: 'For $\\sin x$ on $[0, \\pi]$: $$f_{\\text{ave}} = \\frac{1}{\\pi} \\int_0^{\\pi} \\sin x\\,dx = \\frac{1}{\\pi} \\left[ -\\cos x \\right]_0^{\\pi} = \\frac{2}{\\pi} \\approx 0.637.$$' },
          { label: 'Step 3: Locate the guaranteed point', text: 'Solve $\\sin c = \\frac{2}{\\pi}$: the solutions in $[0, \\pi]$ are $c = \\arcsin\\frac{2}{\\pi} \\approx 0.690$ and its supplement $c = \\pi - 0.690 \\approx 2.452$.' },
          { label: 'Step 4: Interpret', text: 'The sine arch rises through its average height, plateaus near the top, and descends through it again — two crossings, both legitimate witnesses to the theorem, and neither expressible without inverse trig notation.' },
        ],
        result: 'For $1 + x^2$: $c = \\pm 1$. For $\\sin x$ on $[0, \\pi]$: average $\\frac{2}{\\pi}$, attained at $c \\approx 0.690$ and $c \\approx 2.452$.',
      },
    ],
    keyTakeaways: [
      'The average value of $f$ on $[a, b]$ is $f_{\\text{ave}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$.',
      'Geometrically, $f_{\\text{ave}}$ is the height of the rectangle over $[a, b]$ with the same area as the region under the curve.',
      'The Mean Value Theorem for Integrals guarantees at least one $c$ with $f(c) = f_{\\text{ave}}$ when $f$ is continuous — and there may be several.',
      'The theorem follows from the Extreme Value and Intermediate Value Theorems applied to the average-squeezing inequality $m \\le f_{\\text{ave}} \\le M$.',
      'Average velocity is the average of $v$ (a displacement rate); average speed is the average of $|v|$.',
      'The integral MVT and the derivative MVT agree on rates: for velocity both compute displacement divided by elapsed time.',
    ],
    quiz: [
      {
        q: 'The average value of $f(x) = 4 - x^2$ on $[-2, 2]$ is:',
        options: [`$0$`, `$\\frac{8}{3}$`, `$4$`, `$\\frac{4}{3}$`],
        answer: 1,
        explanation: '$f_{\\text{ave}} = \\frac{1}{4}\\int_{-2}^{2}(4 - x^2)\\,dx = \\frac{1}{4}\\left[4x - \\frac{x^3}{3}\\right]_{-2}^{2} = \\frac{1}{4}\\left(\\frac{16}{3} + \\frac{16}{3}\\right) = \\frac{8}{3}$.',
      },
      {
        q: 'The Mean Value Theorem for Integrals states that for $f$ continuous on $[a, b]$ there exists $c$ with:',
        options: ['$f\'(c) = \\frac{f(b) - f(a)}{b - a}$', `$f(c) = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$`, `$f(c) = 0$`, `$f(c) = \\frac{f(a) + f(b)}{2}$`],
        answer: 1,
        explanation: 'The integral version promises a point where the function value equals its average value; option A is the derivative MVT, a different theorem with a different conclusion.',
      },
      {
        q: 'A car travels for 2 hours with velocity $v(t) = 30 + 10\\sin t$ kilometers per hour. Its average velocity over the 2 hours is:',
        options: ['$30 + 10\\sin 1$ kilometers per hour', '$40$ kilometers per hour, the average of the endpoint velocities', '$\\frac{1}{2}\\int_0^2 (30 + 10\\sin t)\\,dt$ kilometers per hour', '$20$ kilometers per hour'],
        answer: 2,
        explanation: 'The average of a rate is the integral of the rate divided by the elapsed time — the net displacement divided by 2 hours. Endpoint velocities do not determine an average for a nonlinear rate.',
      },
      {
        q: 'On which interval does the Mean Value Theorem for Integrals fail to apply to $f(x) = \\frac{1}{x}$?',
        options: [`$[1, 2]$`, `$[-2, -1]$`, `$[-1, 1]$`, `$[0.5, 2]$`],
        answer: 2,
        explanation: 'The theorem requires continuity on the closed interval, and $\\frac{1}{x}$ is discontinuous at $0$, which lies inside $[-1, 1]$; on the other intervals the function is continuous.',
      },
      // PYQ-pattern: JEE Mains 2021 — average value of a power function (rephrased, values changed)
      {
        q: 'The average value of $f(x) = x^{2}$ on $[0, 2]$ equals:',
        options: [`$\\frac{4}{3}$`, `$\\frac{8}{3}$`, `$2$`, `$4$`],
        answer: 0,
        explanation: 'Step 1: Restate average value as **height of the equal-area rectangle** $f_{\\text{ave}} = \\frac{1}{2-0}\\int_{0}^{2}x^{2}\\,dx$. Step 2: Recall the key formula $f_{\\text{ave}} = \\frac{1}{b-a}\\int_{a}^{b}f(x)\\,dx$. Step 3: Integrate to get $\\int_{0}^{2}x^{2}\\,dx = \\left[\\frac{x^{3}}{3}\\right]_{0}^{2} = \\frac{8}{3}$. Step 4: Divide by the length $2$ to obtain $\\frac{1}{2} \\times \\frac{8}{3} = \\frac{4}{3}$. Step 5: The distractor $\\frac{8}{3}$ forgets division by length, $4$ evaluates at the endpoint, and $2$ halves the interval midpoint incorrectly. Step 6: Hence the average value is $\\frac{4}{3}$.'
      },
      // PYQ-pattern: JEE Mains 2019 — point guaranteed by the integral mean value theorem (rephrased, values changed)
      {
        q: 'For $f(x) = x^{2}$ on $[0, 2]$, the number $c$ guaranteed by the Mean Value Theorem for Integrals with $f(c) = f_{\\text{ave}}$ equals:',
        options: [`$1$`, `$0$`, `$2$`, `$\\frac{2\\sqrt{3}}{3}$`],
        answer: 3,
        explanation: 'Step 1: Restate the theorem as existence of $c \\in [0, 2]$ with $f(c)$ equal to the average value $\\frac{4}{3}$. Step 2: Recall the key equation $c^{2} = \\frac{4}{3}$ from the prior average computation. Step 3: Solve to get $c = \\pm\\frac{2}{\\sqrt{3}} = \\pm\\frac{2\\sqrt{3}}{3}$. Step 4: Keep only the point inside $[0, 2]$, namely $c = \\frac{2\\sqrt{3}}{3} \\approx 1.15$. Step 5: The distractors fail since $0$ and $2$ are endpoints with wrong values and $1$ gives $f(1) = 1 \\neq \\frac{4}{3}$. Step 6: Therefore the guaranteed point is $c = \\frac{2\\sqrt{3}}{3}$.'
      },
    ],
  },
]
