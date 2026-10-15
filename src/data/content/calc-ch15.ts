import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 15: Multiple Integrals (Sections 15.1 – 15.10)
// Master study content. Worked examples follow the book’s own problems
// (16 − x² − 2y² over [0, 2] × [0, 2], sin(y²), the parabolas y = 2x² and
// y = 1 + x², the line y = x − 1 with y² = 2x + 6, the cardioid, the
// ice-cream-cone region, cos((x − y)/(x + y))) and every number is verified
// by direct computation. Math is LaTeX rendered by KaTeX.
// ============================================================================

export const calcCh15Content: SectionContent[] = [
  // ------------------------------------------------------------------ 15.1
  {
    sectionId: 'calc-ch15-s1',
    readingTime: 8,
    intro: 'A definite integral chopped a planar region into strips; a double integral chops it into a grid. For a positive function on a rectangle the integral tallies the volume of the solid underneath its graph — the exact three-dimensional analog of the area under a curve. This section builds the double integral from double Riemann sums, estimates it with the Midpoint Rule, and then lets Fubini’s Theorem collapse one hard two-dimensional limit into two ordinary integrals from Chapter 5.',
    objectives: [
      'Set up double Riemann sums over a rectangle and compute Midpoint Rule estimates of volume',
      'Interpret the double integral as the volume of the solid under a graph, and as a signed volume in general',
      'State Fubini’s Theorem and use it to evaluate a double integral as an iterated integral',
      'Use the linearity, additivity and comparison properties of double integrals',
      'Compute the average value of a function over a rectangle',
    ],
    concepts: [
      {
        term: 'The double integral over a rectangle',
        kind: 'definition',
        statement: 'For $R = [a, b] \\times [c, d]$, partition $R$ into subrectangles $R_{ij}$ of area $\\Delta A = \\Delta x_i\\,\\Delta y_j$, pick a sample point $(x_{ij}^{*}, y_{ij}^{*})$ in each, and define $$\\iint_R f(x, y)\\,dA = \\lim_{m, n \\to \\infty} \\sum_{i=1}^{m} \\sum_{j=1}^{n} f(x_{ij}^{*}, y_{ij}^{*})\\,\\Delta A.$$ For continuous $f$ the limit exists and is the same for every choice of sample points.',
        detail: 'Every ingredient of Chapter 5.2 survives with one more summation sign: subintervals become subrectangles, lengths become areas, and one limit becomes a double limit. Continuity of $f$ on the closed rectangle is the standard hypothesis that guarantees the limit exists.',
      },
      {
        term: 'Volume interpretation',
        kind: 'insight',
        statement: 'If $f(x, y) \\ge 0$ on $R$, then $\\iint_R f(x, y)\\,dA$ is the **volume of the solid** that lies above the rectangle $R$ and below the surface $z = f(x, y)$. Each summand $f(x_{ij}^{*}, y_{ij}^{*})\\,\\Delta A$ is the volume of a thin box of base $\\Delta A$ and height $f$.',
        detail: 'If $f$ takes both signs the integral adds the volume above the $xy$-plane and subtracts the volume below it — a signed volume, exactly as in the one-variable theory of Section 5.2.',
      },
      {
        term: 'The Midpoint Rule for double integrals',
        kind: 'method',
        statement: 'Choose each sample point as the center $(\\bar{x}_i, \\bar{y}_j)$ of its subrectangle: $$\\iint_R f\\,dA \\approx \\sum_{i=1}^{m} \\sum_{j=1}^{n} f(\\bar{x}_i, \\bar{y}_j)\\,\\Delta A.$$ Midpoint samples usually beat corner samples for smooth functions at the same grid size.',
        detail: 'This is the two-dimensional sibling of the Midpoint Rule of Section 7.7 and inherits its $O(1/m^{2} + 1/n^{2})$ accuracy: doubling both $m$ and $n$ cuts the error by roughly a factor of four.',
      },
      {
        term: 'Fubini’s Theorem',
        kind: 'theorem',
        statement: 'If $f$ is continuous on the rectangle $R = [a, b] \\times [c, d]$, then $$\\iint_R f(x, y)\\,dA = \\int_{a}^{b} \\int_{c}^{d} f(x, y)\\,dy\\,dx = \\int_{c}^{d} \\int_{a}^{b} f(x, y)\\,dx\\,dy.$$ The double integral equals either iterated integral, in either order.',
        detail: 'Fubini (1907) is the workhorse of the chapter: a genuine 2-D limit is replaced by two one-dimensional integrations, each handled by the Fundamental Theorem of Calculus. The proof slices the solid by vertical planes — the inner integral $\\int_{c}^{d} f(x, y)\\,dy$ is the cross-sectional area $A(x)$, and the outer integral stacks the slices, $V = \\int_{a}^{b} A(x)\\,dx$, exactly as in the slicing method of Section 6.2.',
      },
      {
        term: 'Average value over a rectangle',
        kind: 'definition',
        statement: 'The **average value** of $f$ on $R$ is $$f_{\\text{ave}} = \\frac{1}{A(R)} \\iint_R f(x, y)\\,dA,$$ where $A(R)$ is the area of the rectangle.',
        detail: 'The integral total divided by the base area — the height of the flat rectangle that has the same volume as the solid under the graph. The Riemann lab visualizes exactly this averaging as the grid refines.',
      },
      {
        term: 'Properties of the double integral',
        kind: 'law',
        statement: 'Double integrals inherit the familiar laws: linearity $\\iint_R (\\alpha f + \\beta g)\\,dA = \\alpha \\iint_R f\\,dA + \\beta \\iint_R g\\,dA$, the comparison fact $f \\le g \\Rightarrow \\iint_R f\\,dA \\le \\iint_R g\\,dA$, and $\\left|\\iint_R f\\,dA\\right| \\le \\iint_R |f|\\,dA$.',
        detail: 'Splitting also works: if $R$ is a union of non-overlapping rectangles, the integral over $R$ is the sum of the integrals over the pieces — the seed of the general regions in Section 15.3.',
      },
      {
        term: 'Estimating before computing',
        kind: 'method',
        statement: 'A practical loop: sketch the surface, run a coarse Midpoint Rule to get a ballpark number, then evaluate exactly by Fubini and compare. The estimate certifies the exact answer against arithmetic slips.',
        detail: 'In the example below the 2 × 2 midpoint estimate overshoots the exact volume by one unit — about a 2% error from just four function evaluations, which is why practitioners trust the rule for quick checks.',
      },
    ],
    examples: [
      {
        title: 'Midpoint Rule estimate of a volume',
        problem: 'Estimate the volume of the solid that lies above the square $R = [0, 2] \\times [0, 2]$ and below the elliptic paraboloid $z = 16 - x^{2} - 2y^{2}$, using the Midpoint Rule with $m = n = 2$.',
        steps: [
          { label: 'Step 1: Divide the rectangle', text: 'Cut each side of $R$ into $2$ equal parts, producing four unit squares with $\\Delta A = 1 \\cdot 1 = 1$ and midpoints $(\\frac{1}{2}, \\frac{1}{2})$, $(\\frac{3}{2}, \\frac{1}{2})$, $(\\frac{1}{2}, \\frac{3}{2})$, $(\\frac{3}{2}, \\frac{3}{2})$.' },
          { label: 'Step 2: Evaluate the function at the midpoints', text: '$f(\\frac{1}{2}, \\frac{1}{2}) = 16 - \\frac{1}{4} - \\frac{1}{2} = \\frac{61}{4}$, $\\;f(\\frac{3}{2}, \\frac{1}{2}) = \\frac{53}{4}$, $\\;f(\\frac{1}{2}, \\frac{3}{2}) = \\frac{45}{4}$, $\\;f(\\frac{3}{2}, \\frac{3}{2}) = \\frac{37}{4}$.' },
          { label: 'Step 3: Form the double Riemann sum', text: '$V \\approx \\sum f(\\bar{x}, \\bar{y})\\,\\Delta A = \\frac{61 + 53 + 45 + 37}{4} \\cdot 1 = \\frac{196}{4} = 49$.' },
          { label: 'Step 4: Interpret the estimate', text: 'Each term is the volume of a box of base area $1$ and height $f$ over one sub-square, so the solid has volume approximately $49$ cubic units.' },
        ],
        result: 'The Midpoint Rule with four sample points gives $V \\approx 49$. The exact value is $48$ (next example), so the estimate is off by only about $2\\%$.',
      },
      {
        title: 'Exact volume by Fubini’s Theorem',
        problem: 'Evaluate $\\displaystyle\\iint_R (16 - x^{2} - 2y^{2})\\,dA$ on the square $R = [0, 2] \\times [0, 2]$ exactly.',
        steps: [
          { label: 'Step 1: Invoke Fubini', text: 'The integrand is a polynomial, hence continuous on $R$, so the double integral equals the iterated integral with either variable first. Integrate with respect to $x$ first, treating $y$ as a constant.' },
          { label: 'Step 2: Inner integral', text: '$\\int_{0}^{2} (16 - x^{2} - 2y^{2})\\,dx = \\Big[16x - \\tfrac{x^{3}}{3} - 2y^{2}x\\Big]_{0}^{2} = 32 - \\tfrac{8}{3} - 4y^{2} = \\tfrac{88}{3} - 4y^{2}$.' },
          { label: 'Step 3: Outer integral', text: '$\\int_{0}^{2} \\Big(\\tfrac{88}{3} - 4y^{2}\\Big)\\,dy = \\tfrac{88}{3} \\cdot 2 - 4 \\cdot \\tfrac{8}{3} = \\tfrac{176}{3} - \\tfrac{32}{3} = \\tfrac{144}{3} = 48$.' },
          { label: 'Step 4: Compare with the estimate', text: 'The exact volume is $48$, confirming that the midpoint estimate $49$ from the previous example was within $1$ unit — the sign of the error is typical too: midpoints slightly overestimate where the surface is concave down.' },
        ],
        result: 'The volume is exactly $48$, and the whole computation used nothing beyond Chapter 5 — which is precisely the power of Fubini’s Theorem.',
      },
    ],
    keyTakeaways: [
      'A double integral is a limit of double Riemann sums; for continuous $f$ on a closed rectangle the limit always exists.',
      'For $f \\ge 0$ the integral is the volume under the graph; in general it is a signed volume.',
      'The Midpoint Rule gives quick, surprisingly accurate estimates with a handful of evaluations.',
      'Fubini’s Theorem converts the double integral into an iterated integral, in either order, for continuous integrands on rectangles.',
      'The average value is the integral divided by the area of the rectangle — the height of the equivalent flat lid.',
      'Linearity, comparison and additivity all carry over from one-variable integrals unchanged.',
    ],
    quiz: [
      {
        q: 'When $f(x, y) \\ge 0$ on the rectangle $R$, the double integral $\\iint_R f\\,dA$ represents:',
        options: ['The area of $R$', 'The volume of the solid between the graph of $f$ and the $xy$-plane, over $R$', 'The arc length of the boundary of $R$', 'The average value of $f$'],
        answer: 1,
        explanation: 'Each summand $f\\,\\Delta A$ is a thin box volume; the limit piles them into the volume under the surface.',
      },
      {
        q: 'With the Midpoint Rule ($m = n = 2$) on $R = [0, 2] \\times [0, 2]$, the sample points are:',
        options: [`$(0, 0)$, $(2, 0)$, $(0, 2)$, $(2, 2)$`, `$(\\frac{1}{2}, \\frac{1}{2})$, $(\\frac{3}{2}, \\frac{1}{2})$, $(\\frac{1}{2}, \\frac{3}{2})$, $(\\frac{3}{2}, \\frac{3}{2})$`, `$(1, 0)$, $(2, 1)$, $(1, 2)$, $(0, 1)$`, 'All four equal to $(1, 1)$'],
        answer: 1,
        explanation: 'Each unit sub-square contributes its center; midpoint samples generally track a smooth surface better than corners do.',
      },
      {
        q: 'Fubini’s Theorem guarantees $\\iint_R f\\,dA = \\int_{a}^{b}\\int_{c}^{d} f\\,dy\\,dx$ provided:',
        options: [`$f$ is continuous on the rectangle $R$`, `$f \\ge 0$ on $R$`, '$f$ has continuous second partial derivatives', '$R$ is a square, not just a rectangle'],
        answer: 0,
        explanation: 'Continuity on the closed rectangle is the hypothesis; the theorem handles negative values as signed volume without any positivity assumption.',
      },
      {
        q: 'If $R = [0, 2] \\times [1, 5]$, then $\\iint_R 3\\,dA$ equals:',
        options: [`$24$`, `$8$`, `$48$`, `$6$`],
        answer: 0,
        explanation: 'A constant integrates to the constant times the area: $3 \\times (2 \\cdot 4) = 24$.',
      },
      {
        q: 'A double integral over $R = [0, 1] \\times [0, 2]$ has value $6$. The average value of $f$ on $R$ is:',
        options: [`$3$`, `$6$`, `$12$`, `$\\frac{1}{3}$`],
        answer: 0,
        explanation: 'Divide by the area $A(R) = 2$: $f_{\\text{ave}} = 6/2 = 3$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.2
  {
    sectionId: 'calc-ch15-s2',
    readingTime: 7,
    intro: 'Fubini’s Theorem says a double integral may be computed as an iterated integral: integrate with respect to one variable while holding the other frozen, then integrate the result. This section drills the mechanics and then flips the order of integration — sometimes a bookkeeping trick, but sometimes the only way to an answer in elementary terms, as when the inner antiderivative does not exist.',
    objectives: [
      'Evaluate iterated integrals over rectangles, one variable at a time',
      'View the inner integral as a cross-sectional function of the outer variable',
      'Reverse the order of integration and verify that both orders agree',
      'Recognize integrands for which one order fails and the other succeeds',
    ],
    concepts: [
      {
        term: 'Iterated integrals',
        kind: 'notation',
        statement: 'The notation $\\int_{a}^{b} \\int_{c}^{d} f(x, y)\\,dy\\,dx$ means: first integrate with respect to $y$ (the inner differential, with limits $c$ to $d$), treating $x$ as constant; then integrate the resulting function of $x$ from $a$ to $b$.',
        detail: 'Work from the inside out, and match each differential to its own limits — a mismatch between a differential and the variable in its limits is the most common bookkeeping error of the chapter.',
      },
      {
        term: 'The inner integral is a function',
        kind: 'insight',
        statement: 'The inner integral $\\int_{c}^{d} f(x, y)\\,dy = A(x)$ is a **one-variable function** of the outer variable $x$ — geometrically the area of the cross-section of the solid cut by the plane through $x$ parallel to the $yz$-plane.',
        detail: 'Then $\\iint_R f\\,dA = \\int_{a}^{b} A(x)\\,dx$ is exactly the slicing formula of Section 6.2: stack the cross-sectional areas. This picture is the proof-sketch of Fubini and the best sanity check while computing.',
      },
      {
        term: 'Reversing the order on a rectangle',
        kind: 'method',
        statement: 'Over a rectangle the swap is free: $\\int_{a}^{b}\\int_{c}^{d} f\\,dy\\,dx = \\int_{c}^{d}\\int_{a}^{b} f\\,dx\\,dy$. Over a general region (Section 15.3) the limits must be rebuilt from a sketch of the region — never just swap the symbols.',
        detail: 'Choosing the friendlier order first is a real skill: one direction may leave an easy polynomial while the other demands integration by parts or worse.',
      },
      {
        term: 'When one order fails',
        kind: 'insight',
        statement: 'Integrands such as $\\sin(y^{2})$, $e^{y^{2}}$, $\\cos(x^{2})$ and $e^{1/x}$ have **no elementary antiderivative** with respect to the inner variable — yet the other order can succeed, because the surviving factor can pair with a substitution.',
        detail: 'This is the signature move of the section: if the inner integral is impossible, do not conclude the double integral is impossible — reverse the order and try again. The region sketch tells you the new limits.',
      },
      {
        term: 'Both orders as a check',
        kind: 'method',
        statement: 'Computing the same double integral in both orders and getting the same number is a strong self-check; disagreeing results mean a limit or an antiderivative is wrong, because Fubini guarantees agreement for continuous integrands.',
        detail: 'In applications to mass and probability later in the chapter, this cross-check habit saves real debugging time.',
      },
    ],
    examples: [
      {
        title: 'A straightforward iterated integral',
        problem: 'Evaluate $\\displaystyle\\int_{0}^{3} \\int_{1}^{2} (x + 3y^{2})\\,dx\\,dy$.',
        steps: [
          { label: 'Step 1: Inner integral in $x$', text: 'Hold $y$ constant: $\\int_{1}^{2} (x + 3y^{2})\\,dx = \\Big[\\tfrac{x^{2}}{2} + 3y^{2}x\\Big]_{1}^{2} = (2 + 6y^{2}) - (\\tfrac{1}{2} + 3y^{2}) = \\tfrac{3}{2} + 3y^{2}$.' },
          { label: 'Step 2: Outer integral in $y$', text: 'Now integrate the resulting function of $y$: $\\int_{0}^{3} \\Big(\\tfrac{3}{2} + 3y^{2}\\Big)\\,dy = \\tfrac{3}{2} \\cdot 3 + 3 \\cdot \\tfrac{27}{3} = \\tfrac{9}{2} + 27 = \\tfrac{63}{2}$.' },
          { label: 'Step 3: Sanity check by symmetry of work', text: 'Reversing the order gives $\\int_{1}^{2} \\int_{0}^{3} (x + 3y^{2})\\,dy\\,dx = \\int_{1}^{2} (3x + 27)\\,dx = \\Big[\\tfrac{3x^{2}}{2} + 27x\\Big]_{1}^{2} = (6 + 54) - (\\tfrac{3}{2} + 27) = \\tfrac{63}{2}$ — the same value.' },
        ],
        result: 'The iterated integral equals $\\tfrac{63}{2}$, and either order of integration produces it.',
      },
      {
        title: 'Reversing the order: the sin(y²) integral',
        problem: 'Evaluate $\\displaystyle\\int_{0}^{1} \\int_{x}^{1} \\sin(y^{2})\\,dy\\,dx$.',
        steps: [
          { label: 'Step 1: Diagnose the inner integral', text: 'There is no elementary antiderivative of $\\sin(y^{2})$ with respect to $y$, so the integral as written is a dead end — reverse the order instead.' },
          { label: 'Step 2: Sketch the region', text: 'The limits read $0 \\le x \\le 1$ and $x \\le y \\le 1$: the triangle above the line $y = x$, below $y = 1$, right of the $y$-axis. Described with $y$ on the outside: $0 \\le y \\le 1$ and $0 \\le x \\le y$.' },
          { label: 'Step 3: Write the reversed integral', text: '$\\int_{0}^{1} \\int_{0}^{y} \\sin(y^{2})\\,dx\\,dy$ — now $\\sin(y^{2})$ is a constant for the inner integration in $x$.' },
          { label: 'Step 4: Inner integral', text: '$\\int_{0}^{y} \\sin(y^{2})\\,dx = y\\sin(y^{2})$.' },
          { label: 'Step 5: Finish with a substitution', text: 'Let $u = y^{2}$, so $du = 2y\\,dy$: $\\int_{0}^{1} y \\sin(y^{2})\\,dy = \\tfrac{1}{2}\\int_{0}^{1} \\sin u\\,du = \\tfrac{1}{2}\\Big(1 - \\cos 1\\Big) \\approx 0.230$.' },
        ],
        result: 'Reversing the order turns an impossible integral into $\\frac{1 - \\cos 1}{2} \\approx 0.230$ — the single most useful trick in this section.',
      },
      {
        title: 'The same integral in both orders',
        problem: 'Evaluate $\\displaystyle\\iint_{D} (2x + y)\\,dA$ where $D$ lies between the parabola $y = x^{2}$ and the line $y = x$ for $0 \\le x \\le 1$, first as a Type I region and then with the order reversed.',
        steps: [
          { label: 'Step 1: Integrate $dy$ first', text: 'For each $x$ the region runs from the parabola up to the line: $\\int_{0}^{1} \\int_{x^{2}}^{x} (2x + y)\\,dy\\,dx$. The inner integral is $\\Big[2xy + \\tfrac{y^{2}}{2}\\Big]_{x^{2}}^{x} = \\tfrac{5}{2}x^{2} - 2x^{3} - \\tfrac{x^{4}}{2}$.' },
          { label: 'Step 2: Outer integral', text: '$\\int_{0}^{1} \\Big(\\tfrac{5}{2}x^{2} - 2x^{3} - \\tfrac{x^{4}}{2}\\Big)\\,dx = \\tfrac{5}{6} - \\tfrac{1}{2} - \\tfrac{1}{10} = \\tfrac{7}{30}$.' },
          { label: 'Step 3: Describe the region the other way', text: 'Solving the boundary equations for $x$ gives $x = \\sqrt{y}$ and $x = y$ with $0 \\le y \\le 1$: $\\int_{0}^{1} \\int_{y}^{\\sqrt{y}} (2x + y)\\,dx\\,dy$.' },
          { label: 'Step 4: Evaluate and compare', text: 'The inner integral is $\\Big[x^{2} + xy\\Big]_{y}^{\\sqrt{y}} = y + y^{3/2} - 2y^{2}$, and $\\int_{0}^{1} (y + y^{3/2} - 2y^{2})\\,dy = \\tfrac{1}{2} + \\tfrac{2}{5} - \\tfrac{2}{3} = \\tfrac{7}{30}$ — identical.' },
        ],
        result: 'Both orders give $\\frac{7}{30}$, as Fubini promises; the second description cost more algebra because the boundary needed solving for $x$.',
      },
    ],
    keyTakeaways: [
      'Evaluate iterated integrals from the inside out, matching each differential with limits in the same variable.',
      'The inner integral is the cross-sectional area $A(x)$ — the slicing picture from Chapter 6.',
      'On rectangles the order of integration may be swapped freely for continuous integrands.',
      'If the inner antiderivative is not elementary ($\\sin(y^{2})$, $e^{y^{2}}$), reverse the order before giving up.',
      'Reversing over a non-rectangular region means re-deriving limits from a sketch — never swapping symbols blindly.',
      'Computing in both orders is a cheap and effective self-check.',
    ],
    quiz: [
      {
        q: 'Evaluate $\\displaystyle\\int_{0}^{1} \\int_{0}^{2} x y\\,dy\\,dx$.',
        options: [`$1$`, `$2$`, `$\\frac{1}{2}$`, `$4$`],
        answer: 0,
        explanation: 'The inner integral is $2x$; then $\\int_{0}^{1} 2x\\,dx = 1$.',
      },
      {
        q: 'The region of integration of $\\displaystyle\\int_{0}^{1} \\int_{x}^{1} f(x, y)\\,dy\\,dx$ is:',
        options: ['The square $[0, 1] \\times [0, 1]$', 'The triangle with $0 \\le x \\le y \\le 1$', 'The triangle with $0 \\le y \\le x \\le 1$', 'The region below the parabola $y = x^{2}$'],
        answer: 1,
        explanation: 'For each $x$ in $[0, 1]$, $y$ runs from the line $y = x$ up to $1$ — the triangle under the diagonal edge above the line $y = x$.',
      },
      {
        q: 'The integral $\\int_{0}^{1} \\int_{x}^{1} \\sin(y^{2})\\,dy\\,dx$ is evaluated by reversing the order because:',
        options: [`$\\sin(y^{2})$ has no elementary antiderivative in $y$`, 'The region of integration is not a rectangle', 'Fubini’s Theorem fails for trigonometric functions', 'The order $dy\\,dx$ is forbidden notation'],
        answer: 0,
        explanation: 'After reversing, the inner integration in $x$ is trivial and the surviving factor $y$ pairs with $\\sin(y^{2})$ for a substitution.',
      },
      {
        q: 'Evaluate $\\displaystyle\\int_{-1}^{1} \\int_{0}^{1} (x^{3} + y)\\,dy\\,dx$.',
        options: [`$1$`, `$0$`, `$2$`, `$\\frac{1}{2}$`],
        answer: 0,
        explanation: 'The inner integral is $x^{3} + \\frac{1}{2}$; the odd term integrates to $0$ over $[-1, 1]$, leaving $\\int_{-1}^{1} \\frac{1}{2}\\,dx = 1$.',
      },
      {
        q: 'For a continuous function on a rectangle, the two iterated integrals (order $dy\\,dx$ versus order $dx\\,dy$):',
        options: ['Always give the same value', 'Agree only when $f \\ge 0$', 'Agree only for polynomial integrands', 'Differ by a factor of $2$'],
        answer: 0,
        explanation: 'Equality of the two orders for continuous integrands on a rectangle is exactly the statement of Fubini’s Theorem.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.3
  {
    sectionId: 'calc-ch15-s3',
    readingTime: 8,
    intro: 'Most solids do not sit over rectangles. A double integral over a general region is computed by sweeping the region one variable at a time: if vertical slices cut it cleanly it is a Type I region, and if horizontal slices do, it is Type II. The whole skill of this section is reading a region off its boundary curves, writing the matching iterated integral, and knowing when to switch types — or to split the region into pieces.',
    objectives: [
      'Describe Type I and Type II regions and write the matching iterated integrals',
      'Choose the more convenient type for a given boundary description',
      'Split regions that are neither type into pieces and add the integrals',
      'Use the double integral for area and for the volume between two surfaces',
    ],
    concepts: [
      {
        term: 'Type I regions',
        kind: 'definition',
        statement: 'A plane region $D$ is **Type I** if it lies between the graphs of two continuous functions of $x$: $$D = \\{(x, y) : a \\le x \\le b,\\; g_{1}(x) \\le y \\le g_{2}(x)\\}.$$ Then $\\iint_{D} f\\,dA = \\int_{a}^{b} \\int_{g_{1}(x)}^{g_{2}(x)} f(x, y)\\,dy\\,dx$.',
        detail: 'Geometric test: every vertical line meets the region in a single segment (or misses it). The inner limits are functions of the outer variable $x$; the outer limits are pure constants.',
      },
      {
        term: 'Type II regions',
        kind: 'definition',
        statement: 'A plane region $D$ is **Type II** if it lies between the graphs of two continuous functions of $y$: $$D = \\{(x, y) : c \\le y \\le d,\\; h_{1}(y) \\le x \\le h_{2}(y)\\}.$$ Then $\\iint_{D} f\\,dA = \\int_{c}^{d} \\int_{h_{1}(y)}^{h_{2}(y)} f(x, y)\\,dx\\,dy$.',
        detail: 'The horizontal-line test: every horizontal line cuts the region in one segment. A region can be both types (a disk), exactly one, or neither without splitting.',
      },
      {
        term: 'Inner limits track the outer variable',
        kind: 'insight',
        statement: 'In $\\int_{a}^{b} \\int_{g_{1}(x)}^{g_{2}(x)} f\\,dy\\,dx$ the bounds $g_{1}$ and $g_{2}$ may involve $x$ but never $y$: by the time $y$ starts running, $x$ is already fixed. The outer limits must be constants.',
        detail: 'If you find yourself wanting a $y$ inside a $y$-limit — or a variable in the outer limits — the region description is wrong and a sketch will repair it.',
      },
      {
        term: 'Choosing and switching types',
        kind: 'method',
        statement: 'Pick the type that keeps the boundary curves single-valued and the limits simple. When boundaries are given as $x$ in terms of $y$ (parabolas opening sideways, pairs of curves), Type II is usually the natural choice.',
        detail: 'A region failing both line tests (for example a horseshoe or a four-petal rose) is split into Type I or Type II pieces, and the integrals are added — valid by the additivity of the integral over subregions.',
      },
      {
        term: 'Area and volume over general regions',
        kind: 'law',
        statement: 'Taking $f = 1$ recovers the area: $A(D) = \\iint_{D} 1\\,dA$. The volume of the solid between $z = u_{2}(x, y)$ (top) and $z = u_{1}(x, y)$ (bottom) over $D$ is $$V = \\iint_{D} \\left[u_{2}(x, y) - u_{1}(x, y)\\right] dA.$$',
        detail: 'This generalizes the area-between-curves formula of Section 6.1 by one dimension, and the washer idea of Section 6.2 by skipping the revolution: the integrand is simply top minus bottom.',
      },
      {
        term: 'Reversing the order over general regions',
        kind: 'method',
        statement: 'To reverse, re-derive the limits from the geometry: sketch $D$, find the intersections of the boundary curves, and re-express the slice in the other direction. The two answers must agree for continuous $f$.',
        detail: 'This pairs with Section 15.2: rectangles swap for free, general regions swap only through the sketch. Exam problems love a Type I description whose inner antiderivative is impossible — the fix is always the picture.',
      },
    ],
    examples: [
      {
        title: 'A Type I integral between two parabolas',
        problem: 'Evaluate $\\displaystyle\\iint_{D} (x + 2y)\\,dA$ where $D$ is the region bounded by the parabolas $y = 2x^{2}$ and $y = 1 + x^{2}$.',
        steps: [
          { label: 'Step 1: Find the intersections', text: 'Set $2x^{2} = 1 + x^{2}$, so $x^{2} = 1$ and $x = \\pm 1$. The curves cross at $(-1, 2)$ and $(1, 2)$.' },
          { label: 'Step 2: Classify the region', text: 'Every vertical line between the crossings cuts the region once, with the parabola $y = 1 + x^{2}$ on top and $y = 2x^{2}$ below: a Type I region with $-1 \\le x \\le 1$.' },
          { label: 'Step 3: Inner integral in $y$', text: '$\\int_{2x^{2}}^{1 + x^{2}} (x + 2y)\\,dy = \\Big[xy + y^{2}\\Big]_{2x^{2}}^{1 + x^{2}} = 1 + x + 2x^{2} - x^{3} - 3x^{4}$.' },
          { label: 'Step 4: Outer integral', text: 'The odd terms integrate to zero over $[-1, 1]$: $\\int_{-1}^{1} (1 + 2x^{2} - 3x^{4})\\,dx = 2\\Big(1 + \\tfrac{2}{3} - \\tfrac{3}{5}\\Big) = 2 \\cdot \\tfrac{16}{15} = \\tfrac{32}{15}$.' },
        ],
        result: 'The integral equals $\\frac{32}{15}$ — with the bonus symmetry lesson that odd powers quietly cancel over symmetric $x$-limits.',
      },
      {
        title: 'Choosing Type II: a line meets a sideways parabola',
        problem: 'Evaluate $\\displaystyle\\iint_{D} x y\\,dA$ where $D$ is the region bounded by the line $y = x - 1$ and the parabola $y^{2} = 2x + 6$.',
        steps: [
          { label: 'Step 1: Intersections', text: 'Substitute $x = y + 1$ into the parabola: $y^{2} = 2y + 8$, so $y^{2} - 2y - 8 = 0$ and $y = 4$ or $y = -2$. The curves meet at $(-1, -2)$ and $(3, 4)$.' },
          { label: 'Step 2: Type I would need splitting', text: 'Vertical lines through the region cross the parabola twice on part of the region and the line twice elsewhere — so the Type I description needs pieces. Try Type II.' },
          { label: 'Step 3: Describe as Type II', text: 'With $y$ outer, the region is $-2 \\le y \\le 4$ with left boundary the parabola $x = \\frac{y^{2} - 6}{2}$ and right boundary the line $x = y + 1$.' },
          { label: 'Step 4: Inner integral in $x$', text: '$\\int_{(y^{2}-6)/2}^{y+1} x y\\,dx = \\tfrac{y}{2}\\Big[(y + 1)^{2} - \\tfrac{(y^{2} - 6)^{2}}{4}\\Big] = -\\tfrac{y^{5}}{8} + 2y^{3} + y^{2} - 4y$.' },
          { label: 'Step 5: Outer integral', text: 'An antiderivative is $-\\tfrac{y^{6}}{48} + \\tfrac{y^{4}}{2} + \\tfrac{y^{3}}{3} - 2y^{2}$, which equals $32$ at $y = 4$ and $-4$ at $y = -2$, giving $32 - (-4) = 36$.' },
        ],
        result: 'The integral is $36$ — one clean Type II computation instead of multiple Type I pieces.',
      },
      {
        title: 'A quick Type II with lateral parabolas',
        problem: 'Evaluate $\\displaystyle\\iint_{D} x\\,dA$ where $D$ is bounded by the parabolas $x = y^{2}$ and $x = 2 - y^{2}$.',
        steps: [
          { label: 'Step 1: Intersections', text: '$y^{2} = 2 - y^{2}$ gives $y = \\pm 1$, at the points $(1, 1)$ and $(1, -1)$.' },
          { label: 'Step 2: Set up Type II', text: 'Both boundaries are functions of $y$: $-1 \\le y \\le 1$ and $y^{2} \\le x \\le 2 - y^{2}$.' },
          { label: 'Step 3: Integrate', text: '$\\int_{-1}^{1} \\int_{y^{2}}^{2 - y^{2}} x\\,dx\\,dy = \\int_{-1}^{1} \\tfrac{1}{2}\\Big[(2 - y^{2})^{2} - y^{4}\\Big] dy = \\tfrac{1}{2}\\int_{-1}^{1} (4 - 4y^{2})\\,dy = \\tfrac{1}{2}\\Big(8 - \\tfrac{8}{3}\\Big) = \\tfrac{8}{3}$.' },
          { label: 'Step 4: Check the geometry', text: 'The integrand $x$ is positive and the region leans right of the $y$-axis, so a positive answer with magnitude comparable to the region area $\\frac{8}{3}$ is exactly as expected.' },
        ],
        result: 'The integral equals $\\frac{8}{3}$; as a bonus the same computation with integrand $1$ gives the area of the region.',
      },
    ],
    keyTakeaways: [
      'Type I: vertical slices, $y$ runs between two functions of $x$; Type II: horizontal slices, $x$ between two functions of $y$.',
      'Inner limits may depend on the outer variable; outer limits are constants.',
      'Choose the type that matches how the boundary curves are given — solving for the wrong variable can force splitting into pieces.',
      'Regions failing both line tests are split into Type I or Type II pieces whose integrals add.',
      '$\\iint_{D} 1\\,dA$ is the area; the volume between surfaces is the integral of top minus bottom.',
      'Reversing the order over a general region requires re-deriving the limits from a sketch.',
    ],
    quiz: [
      {
        q: 'A **Type I** region has the form:',
        options: [`$D = \\{(x, y) : a \\le x \\le b,\\; g_{1}(x) \\le y \\le g_{2}(x)\\}$`, `$D = \\{(x, y) : c \\le y \\le d,\\; h_{1}(y) \\le x \\le h_{2}(y)\\}$`, '$D = \\{(x, y) : x^{2} + y^{2} \\le 1\\}$ with no limits written', 'Any region bounded by exactly one closed curve'],
        answer: 0,
        explanation: 'Type I slices vertically: $x$ between constants, $y$ between two functions of $x$; the second option is Type II.',
      },
      {
        q: 'The region between $y = x^{2}$ and $y = x$ for $0 \\le x \\le 1$ is described as Type I by:',
        options: [`$\\int_{0}^{1} \\int_{x^{2}}^{x} f\\,dy\\,dx$`, `$\\int_{0}^{1} \\int_{x}^{x^{2}} f\\,dy\\,dx$`, `$\\int_{0}^{1} \\int_{y}^{\\sqrt{y}} f\\,dx\\,dy$`, `$\\int_{0}^{1} \\int_{-x}^{x} f\\,dy\\,dx$`],
        answer: 0,
        explanation: 'On $[0, 1]$ the line $y = x$ lies above the parabola $y = x^{2}$, so the lower inner limit is $x^{2}$; the third option is the Type II description.',
      },
      {
        q: 'The region bounded by the parabola $x = y^{2}$ and the line $x = y + 2$ is handled most cleanly as:',
        options: ['Type II with $-1 \\le y \\le 2$ and $y^{2} \\le x \\le y + 2$', 'Type I with a single pair of curves', 'Type I, but split into three separate integrals', 'A region on which double integrals are not defined'],
        answer: 0,
        explanation: 'Solving $y^{2} = y + 2$ gives $y = -1, 2$; with $y$ outside, both boundaries are single functions of $y$ and no splitting is needed.',
      },
      {
        q: 'The area between $y = x$ and $y = x^{2}$ equals $\\int_{0}^{1} \\int_{x^{2}}^{x} dy\\,dx =$:',
        options: [`$\\frac{1}{6}$`, `$\\frac{1}{3}$`, `$\\frac{1}{2}$`, `$1$`],
        answer: 0,
        explanation: 'The inner integral is $x - x^{2}$, and $\\int_{0}^{1} (x - x^{2})\\,dx = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.',
      },
      {
        q: 'In the integral $\\int_{a}^{b} \\int_{g_{1}(x)}^{g_{2}(x)} f\\,dy\\,dx$, the inner limits $g_{1}$ and $g_{2}$:',
        options: ['May depend on $x$ but never on $y$', 'May depend on both $x$ and $y$', 'Must be constants', 'May depend on $y$ but never on $x$'],
        answer: 0,
        explanation: 'The inner variable runs between bounds determined by the already-fixed outer variable; after the inner integration only $x$ remains.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.4
  {
    sectionId: 'calc-ch15-s4',
    readingTime: 8,
    intro: 'When the region is a disk, a wedge, or the domain of a cardioid, rectangular grids fight the geometry. Polar coordinates replace the grid with rings and sectors, and the area element becomes $r\\,dr\\,d\\theta$ — the small extra factor $r$ that remembers that outer arcs are longer than inner ones. This section converts double integrals to polar form, recovers the polar area formula of Section 10.4, and works the classic circular regions: disks, cardioids and limaçons.',
    objectives: [
      'Convert a double integral over a circular region to polar coordinates, including the factor $r$',
      'Describe disks, wedges, cardioids and limaçons as polar regions with $r$ and $\\theta$ limits',
      'Recognize Cartesian integrands and regions that polar coordinates simplify',
      'Compute areas and volumes in polar form and connect them to Section 10.4',
    ],
    concepts: [
      {
        term: 'The polar element of area',
        kind: 'law',
        statement: 'In polar coordinates the area element is $$dA = r\\,dr\\,d\\theta,$$ because a polar grid cell at radius $r$ is approximately a rectangle with sides $dr$ and $r\\,d\\theta$ (arc length $=$ radius times angle).',
        detail: 'Forgetting the factor $r$ is the classic error of the section. It is not an arbitrary patch: $r$ is exactly the Jacobian $\\frac{\\partial(x, y)}{\\partial(r, \\theta)}$ of the polar map, as Section 15.10 will confirm from first principles.',
      },
      {
        term: 'Double integrals in polar coordinates',
        kind: 'theorem',
        statement: 'If $f$ is continuous on the polar region $$D = \\{(r, \\theta) : \\alpha \\le \\theta \\le \\beta,\\; r_{1}(\\theta) \\le r \\le r_{2}(\\theta)\\},$$ then $$\\iint_{D} f(x, y)\\,dA = \\int_{\\alpha}^{\\beta} \\int_{r_{1}(\\theta)}^{r_{2}(\\theta)} f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta.$$',
        detail: 'Substitute $x = r\\cos\\theta$, $y = r\\sin\\theta$ everywhere in the integrand, replace $dA$ by $r\\,dr\\,d\\theta$, and rebuild the limits by sweeping rays out from the origin between the extreme angles $\\alpha$ and $\\beta$.',
      },
      {
        term: 'Describing regions in polar form',
        kind: 'method',
        statement: 'Read the region radially: for each angle $\\theta$, ask where the ray from the origin enters and exits the region — those radii are $r_{1}(\\theta)$ and $r_{2}(\\theta)$. A disk centered at the origin is $0 \\le r \\le a$; a disk $x^{2} + y^{2} \\le 2ax$ becomes $0 \\le r \\le 2a\\cos\\theta$ with $-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}$.',
        detail: 'Completing the square in $x^{2} + y^{2} \\le 2ax$ reveals a disk of radius $a$ centered at $(a, 0)$; substituting $x = r\\cos\\theta$ cancels one $r$ and yields the clean radial bound. Off-center disks always trade constants for trigonometric $r$-limits.',
      },
      {
        term: 'When to switch to polar coordinates',
        kind: 'insight',
        statement: 'Polar coordinates pay off when (1) the integrand depends on $x^{2} + y^{2}$, or $\\arctan(y/x)$, or (2) the boundary is circular, a sector, a rose, a cardioid or a limaçon. If both hold, the integral usually collapses to a product of one-dimensional integrals.',
        detail: 'The expression $x^{2} + y^{2}$ should trigger a polar reflex: it becomes the perfect square $r^{2}$, which is precisely why $e^{x^{2} + y^{2}}$ — impossible in Cartesian order — integrates in closed form in polar.',
      },
      {
        term: 'Area and volume in polar form',
        kind: 'law',
        statement: 'Taking $f = 1$ gives the polar area formula of Section 10.4: $$A = \\iint_{D} dA = \\frac{1}{2} \\int_{\\alpha}^{\\beta} \\left[r(\\theta)\\right]^{2} d\\theta.$$ For volumes, the surface $z = f(x, y)$ simply becomes $z = f(r\\cos\\theta, r\\sin\\theta)$ while the region converts underneath it.',
        detail: 'The old formula is not new mathematics — it is the double integral of $1$ with the $r$ already integrated out: $\\int_{0}^{r(\\theta)} r\\,dr = \\frac{1}{2}r(\\theta)^{2}$.',
      },
      {
        term: 'Cardioids and limaçons',
        kind: 'notation',
        statement: 'The curves $r = a \\pm b\\cos\\theta$ and $r = a \\pm b\\sin\\theta$ are **limaçons**; when $a = b$ the curve is a **cardioid**. For $b > a$ the curve has an inner loop traced over a sub-interval of $\\theta$ where $r < 0$.',
        detail: 'Inner-loop areas are the delicate case: first find the $\\theta$-interval on which the radius returns to $0$ (solve $r(\\theta) = 0$), then integrate $\\frac{1}{2}r^{2}$ over exactly that interval — the rest of the curve sweeps the outer loop instead.',
      },
    ],
    examples: [
      {
        title: 'A polar rescue: an impossible exponential',
        problem: 'Evaluate $\\displaystyle\\int_{0}^{1} \\int_{0}^{\\sqrt{1 - x^{2}}} e^{x^{2} + y^{2}}\\,dy\\,dx$.',
        steps: [
          { label: 'Step 1: Identify the region', text: 'The limits describe the quarter of the unit disk in the first quadrant: $x \\ge 0$, $y \\ge 0$, $x^{2} + y^{2} \\le 1$.' },
          { label: 'Step 2: Convert to polar', text: 'The region is $0 \\le \\theta \\le \\frac{\\pi}{2}$, $0 \\le r \\le 1$, and the integrand $e^{x^{2} + y^{2}}$ becomes $e^{r^{2}}$.' },
          { label: 'Step 3: Write the polar integral', text: '$\\int_{0}^{\\pi/2} \\int_{0}^{1} e^{r^{2}}\\,r\\,dr\\,d\\theta$ — the factor $r$ from $dA = r\\,dr\\,d\\theta$ is exactly the missing derivative of the exponent.' },
          { label: 'Step 4: Inner integral by substitution', text: 'With $u = r^{2}$, $\\int_{0}^{1} r e^{r^{2}}\\,dr = \\frac{1}{2}\\left[e^{u}\\right]_{0}^{1} = \\frac{e - 1}{2}$.' },
          { label: 'Step 5: Outer integral', text: 'The integrand no longer depends on $\\theta$: $\\int_{0}^{\\pi/2} \\frac{e - 1}{2}\\,d\\theta = \\frac{\\pi}{2} \\cdot \\frac{e - 1}{2} = \\frac{\\pi(e - 1)}{4} \\approx 1.344$.' },
        ],
        result: 'The integral equals $\\frac{\\pi(e - 1)}{4} \\approx 1.344$ — a clean closed form for an integral with no elementary antiderivative in Cartesian order.',
      },
      {
        title: 'Area inside a cardioid',
        problem: 'Find the area enclosed by the cardioid $r = 1 + \\cos\\theta$.',
        steps: [
          { label: 'Step 1: Set up the area integral', text: 'The cardioid is traced once for $0 \\le \\theta \\le 2\\pi$, with the ray at each angle running from the origin out to $r = 1 + \\cos\\theta$: $A = \\int_{0}^{2\\pi} \\int_{0}^{1 + \\cos\\theta} r\\,dr\\,d\\theta$.' },
          { label: 'Step 2: Inner integral', text: '$\\int_{0}^{1 + \\cos\\theta} r\\,dr = \\frac{1}{2}(1 + \\cos\\theta)^{2}$, recovering the sector formula $A = \\frac{1}{2}\\int r^{2}\\,d\\theta$.' },
          { label: 'Step 3: Expand the square', text: '$\\frac{1}{2}\\int_{0}^{2\\pi} (1 + 2\\cos\\theta + \\cos^{2}\\theta)\\,d\\theta = \\frac{1}{2}\\left(2\\pi + 0 + \\pi\\right)$, using $\\int_{0}^{2\\pi}\\cos\\theta\\,d\\theta = 0$ and $\\int_{0}^{2\\pi}\\cos^{2}\\theta\\,d\\theta = \\pi$.' },
          { label: 'Step 4: Conclude', text: '$A = \\frac{3\\pi}{2} \\approx 4.71$ — half again the area $\\pi$ of the unit circle, the cardioid’s maximal reach being $2$.' },
        ],
        result: 'The area inside $r = 1 + \\cos\\theta$ is $\\frac{3\\pi}{2}$.',
      },
      {
        title: 'The inner loop of a limaçon',
        problem: 'Find the area of the region enclosed by the inner loop of the limaçon $r = 1 + 2\\cos\\theta$.',
        steps: [
          { label: 'Step 1: Find where the loop closes', text: 'The inner loop is traced where $r \\le 0$: solve $1 + 2\\cos\\theta = 0$, so $\\cos\\theta = -\\frac{1}{2}$ and $\\theta = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$. The inner loop is swept for $\\frac{2\\pi}{3} \\le \\theta \\le \\frac{4\\pi}{3}$.' },
          { label: 'Step 2: Set up the sector integral', text: '$A = \\frac{1}{2} \\int_{2\\pi/3}^{4\\pi/3} (1 + 2\\cos\\theta)^{2}\\,d\\theta$.' },
          { label: 'Step 3: Expand', text: '$\\frac{1}{2}\\int (1 + 4\\cos\\theta + 4\\cos^{2}\\theta)\\,d\\theta$ over the loop interval.' },
          { label: 'Step 4: Evaluate the three pieces', text: 'The constant term contributes $\\frac{1}{2} \\cdot \\frac{2\\pi}{3} = \\frac{\\pi}{3}$. The cosine term gives $\\frac{1}{2} \\cdot 4\\Big[\\sin\\theta\\Big]_{2\\pi/3}^{4\\pi/3} = 2\\left(-\\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{3}}{2}\\right) = -2\\sqrt{3}$. For the squared term, $\\int_{2\\pi/3}^{4\\pi/3}\\cos^{2}\\theta\\,d\\theta = \\Big[\\tfrac{\\theta}{2} + \\tfrac{\\sin 2\\theta}{4}\\Big] = \\frac{\\pi}{3} + \\frac{\\sqrt{3}}{4}$, which contributes $\\frac{1}{2} \\cdot 4\\left(\\frac{\\pi}{3} + \\frac{\\sqrt{3}}{4}\\right) = \\frac{2\\pi}{3} + \\frac{\\sqrt{3}}{2}$.' },
          { label: 'Step 5: Combine', text: 'Adding the pieces: $\\left(\\frac{\\pi}{3} + \\frac{2\\pi}{3}\\right) + \\left(\\frac{\\sqrt{3}}{2} - 2\\sqrt{3}\\right) = \\pi - \\frac{3\\sqrt{3}}{2} \\approx 0.544$.' },
        ],
        result: 'The inner loop has area $\\pi - \\frac{3\\sqrt{3}}{2} \\approx 0.544$, a small pocket inside a curve whose outer loop dwarfs it.',
      },
    ],
    keyTakeaways: [
      'The polar area element is $dA = r\\,dr\\,d\\theta$ — never drop the factor $r$.',
      'Convert the integrand by substituting $x = r\\cos\\theta$, $y = r\\sin\\theta$; $x^{2} + y^{2}$ becomes the perfect square $r^{2}$.',
      'Describe the region by asking where each ray from the origin enters and exits it.',
      'Off-center disks convert to trigonometric radial bounds like $r \\le 2a\\cos\\theta$.',
      'The sector area formula $\\frac{1}{2}\\int r^{2}\\,d\\theta$ of Section 10.4 is just the $r$-integration done first.',
      'For inner loops of limaçons, first solve $r(\\theta) = 0$ to find the $\\theta$-interval that sweeps exactly the loop.',
    ],
    quiz: [
      {
        q: 'The polar element of area is:',
        options: [`$r\\,dr\\,d\\theta$`, `$dr\\,d\\theta$`, `$r^{2}\\,dr\\,d\\theta$`, `$\\frac{1}{2}r^{2}\\,dr\\,d\\theta$`],
        answer: 0,
        explanation: 'A polar grid cell is nearly a rectangle with sides $dr$ and $r\\,d\\theta$; the arc side grows with the radius.',
      },
      {
        q: 'Evaluate $\\displaystyle\\int_{0}^{2\\pi} \\int_{0}^{1} r\\,dr\\,d\\theta$.',
        options: [`$\\pi$`, `$2\\pi$`, `$1$`, `$\\frac{\\pi}{2}$`],
        answer: 0,
        explanation: 'The inner integral is $\\frac{1}{2}$, and multiplying by $2\\pi$ gives $\\pi$ — the area of the unit disk, as it must be.',
      },
      {
        q: 'The area enclosed by the cardioid $r = 1 + \\cos\\theta$ is:',
        options: [`$\\frac{3\\pi}{2}$`, `$\\pi$`, `$2\\pi$`, `$\\frac{\\pi}{2}$`],
        answer: 0,
        explanation: '$\\frac{1}{2}\\int_{0}^{2\\pi}(1 + \\cos\\theta)^{2} d\\theta = \\frac{1}{2}(2\\pi + 0 + \\pi) = \\frac{3\\pi}{2}$.',
      },
      {
        q: 'The disk $x^{2} + y^{2} \\le 2x$ becomes which polar region?',
        options: [`$-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}$, $0 \\le r \\le 2\\cos\\theta$`, `$0 \\le \\theta \\le 2\\pi$, $0 \\le r \\le 2$`, `$0 \\le \\theta \\le \\pi$, $0 \\le r \\le 2\\sin\\theta$`, 'The single equation $r = 2$ for all $\\theta$'],
        answer: 0,
        explanation: 'Substituting gives $r^{2} \\le 2r\\cos\\theta$, hence $r \\le 2\\cos\\theta$, which requires $\\cos\\theta \\ge 0$ — the right half-plane of angles.',
      },
      {
        q: 'Over the disk of radius $2$ centered at the origin, $\\iint e^{x^{2} + y^{2}}\\,dA$ equals:',
        options: [`$\\pi(e^{4} - 1)$`, `$e^{4} - 1$`, `$2\\pi(e^{4} - 1)$`, 'It cannot be evaluated in elementary terms'],
        answer: 0,
        explanation: 'In polar: $\\int_{0}^{2\\pi}\\int_{0}^{2} e^{r^{2}} r\\,dr\\,d\\theta = 2\\pi \\cdot \\frac{e^{4} - 1}{2} = \\pi(e^{4} - 1)$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.5
  {
    sectionId: 'calc-ch15-s5',
    readingTime: 8,
    intro: 'If a flat plate has non-uniform thickness or composition, its density varies from point to point, and totals become integrals: total mass, balance point, and resistance to rotation. This section defines density and mass for a lamina, computes moments and the center of mass, and extends the same pattern to charge, moments of inertia and radii of gyration — every formula is just a double integral with the right integrand.',
    objectives: [
      'Compute the mass of a lamina from a variable density function',
      'Compute moments and locate the center of mass of a lamina',
      'Exploit symmetry of region and density to pin down the center of mass',
      'Set up moments of inertia about the axes and the origin, and radii of gyration',
    ],
    concepts: [
      {
        term: 'Density and mass',
        kind: 'definition',
        statement: 'A **lamina** occupying a region $D$ with **density** $\\rho(x, y)$ (mass per unit area) has $$m = \\iint_{D} \\rho(x, y)\\,dA.$$ A small patch of area $dA$ carries mass $\\rho(x, y)\\,dA$, and the integral sums the patches.',
        detail: 'Constant density reduces to $m = \\rho_{0} A(D)$; the interesting cases are densities such as $\\rho = x + y$, $\\rho = ky$, or $\\rho = k\\sqrt{x^{2} + y^{2}}$ that weight one side of the plate more heavily.',
      },
      {
        term: 'Moments and the center of mass',
        kind: 'definition',
        statement: 'The **moments** of the lamina about the coordinate axes are $$M_{y} = \\iint_{D} x\\,\\rho(x, y)\\,dA, \\qquad M_{x} = \\iint_{D} y\\,\\rho(x, y)\\,dA,$$ and the **center of mass** is $$\\left(\\bar{x}, \\bar{y}\\right) = \\left(\\frac{M_{y}}{m}, \\; \\frac{M_{x}}{m}\\right).$$',
        detail: 'The subscripts are the trap: $M_{y}$, the moment about the $y$-axis, is weighted by $x$ and produces $\\bar{x}$. Physically the plate balances on a pin placed at the center of mass.',
      },
      {
        term: 'Electric charge',
        kind: 'insight',
        statement: 'Total charge is the same pattern with **charge density** $\\sigma(x, y)$: $Q = \\iint_{D} \\sigma(x, y)\\,dA$. Mass and charge are interchangeable templates — pick the density, integrate over the region.',
        detail: 'This is the bridge to electromagnetism texts: surface integrals of Chapter 16 are exactly this construction with the density replaced by a field component.',
      },
      {
        term: 'Moments of inertia',
        kind: 'definition',
        statement: 'The **moments of inertia** about the axes and the origin are $$I_{x} = \\iint_{D} y^{2}\\,\\rho\\,dA, \\qquad I_{y} = \\iint_{D} x^{2}\\,\\rho\\,dA, \\qquad I_{0} = \\iint_{D} (x^{2} + y^{2})\\,\\rho\\,dA.$$',
        detail: 'Each is mass times squared distance to the rotation axis, summed continuously. Squared distance is why rotating about a far axis is disproportionately expensive — the same law that makes figure skaters pull their arms in.',
      },
      {
        term: 'The polar moment adds up',
        kind: 'law',
        statement: 'Because $x^{2} + y^{2}$ splits, $$I_{0} = I_{x} + I_{y}$$ for every lamina, whatever the density or region.',
        detail: 'Rotational kinetic energy about a perpendicular axis through the origin is $\\frac{1}{2}I_{0}\\omega^{2}$, so $I_{0}$ is the object’s rotational mass for spinning in the plane.',
      },
      {
        term: 'Radius of gyration and symmetry',
        kind: 'insight',
        statement: 'The **radius of gyration** $R = \\sqrt{I/m}$ is the distance at which all the mass could be concentrated with the same moment of inertia. And if both the region and the density are symmetric about a line, the center of mass lies on that line.',
        detail: 'Symmetry arguments eliminate half the computation before any integral is written — for a uniform disk, $\\bar{x} = \\bar{y} = 0$ by inspection, and only the inertia integrals need work.',
      },
    ],
    examples: [
      {
        title: 'Mass and center of mass of a triangular lamina',
        problem: 'A lamina occupies the triangle $D$ with vertices $(0, 0)$, $(1, 0)$ and $(0, 1)$ and has density $\\rho(x, y) = x y$. Find its mass and center of mass.',
        steps: [
          { label: 'Step 1: Mass', text: 'The region is $0 \\le x \\le 1$, $0 \\le y \\le 1 - x$. Then $m = \\int_{0}^{1} \\int_{0}^{1 - x} x y\\,dy\\,dx = \\int_{0}^{1} \\frac{x(1 - x)^{2}}{2}\\,dx = \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{2}{3} + \\frac{1}{4}\\right) = \\frac{1}{24}$.' },
          { label: 'Step 2: Moment about the $y$-axis', text: '$M_{y} = \\int_{0}^{1} \\int_{0}^{1 - x} x \\cdot x y\\,dy\\,dx = \\int_{0}^{1} \\frac{x^{2}(1 - x)^{2}}{2}\\,dx = \\frac{1}{2}\\left(\\frac{1}{3} - \\frac{1}{2} + \\frac{1}{5}\\right) = \\frac{1}{60}$.' },
          { label: 'Step 3: Moment about the $x$-axis', text: 'Both the triangle and the density $xy$ are symmetric under swapping $x$ and $y$, so $M_{x} = M_{y} = \\frac{1}{60}$ — no second integral required.' },
          { label: 'Step 4: Center of mass', text: '$\\bar{x} = \\frac{M_{y}}{m} = \\frac{1/60}{1/24} = \\frac{2}{5}$ and likewise $\\bar{y} = \\frac{2}{5}$.' },
          { label: 'Step 5: Sanity check', text: 'A uniform triangle of this shape would balance at $\\left(\\frac{1}{3}, \\frac{1}{3}\\right)$; the density $xy$ piles mass toward the $(1, 1)$ corner of the plane, dragging the balance point up the hypotenuse direction to $\\left(\\frac{2}{5}, \\frac{2}{5}\\right)$.' },
        ],
        result: 'The lamina has mass $\\frac{1}{24}$ and center of mass $\\left(\\frac{2}{5}, \\frac{2}{5}\\right)$.',
      },
      {
        title: 'Moments of inertia of a uniform disk',
        problem: 'Find the moments of inertia $I_{x}$, $I_{y}$ and $I_{0}$ of a lamina with constant density $\\rho_{0}$ occupying the disk $x^{2} + y^{2} \\le R^{2}$.',
        steps: [
          { label: 'Step 1: Set up $I_{x}$ in polar coordinates', text: 'Since $y^{2} = r^{2}\\sin^{2}\\theta$, $$I_{x} = \\iint y^{2}\\rho_{0}\\,dA = \\rho_{0} \\int_{0}^{2\\pi} \\int_{0}^{R} r^{2}\\sin^{2}\\theta\\,\\cdot r\\,dr\\,d\\theta.$$' },
          { label: 'Step 2: Separate the integrals', text: 'The integrand factors: $I_{x} = \\rho_{0}\\left(\\int_{0}^{R} r^{3}\\,dr\\right)\\left(\\int_{0}^{2\\pi} \\sin^{2}\\theta\\,d\\theta\\right) = \\rho_{0} \\cdot \\frac{R^{4}}{4} \\cdot \\pi$.' },
          { label: 'Step 3: Conclude $I_{x} = I_{y}$', text: '$I_{x} = \\frac{\\pi\\rho_{0}R^{4}}{4}$, and by the rotational symmetry of the disk $I_{y} = I_{x}$ — the cosine integral gives the same value.' },
          { label: 'Step 4: Mass and the clean form', text: 'The mass is $m = \\rho_{0}\\pi R^{2}$, so $I_{x} = I_{y} = \\frac{1}{4}mR^{2}$.' },
          { label: 'Step 5: The polar moment', text: '$I_{0} = I_{x} + I_{y} = \\frac{1}{2}mR^{2}$, with radius of gyration $\\sqrt{I_{0}/m} = \\frac{R}{\\sqrt{2}} \\approx 0.707R$ — as if the mass of the disk were squeezed onto a ring at seventy percent of the radius.' },
        ],
        result: 'For the uniform disk: $I_{x} = I_{y} = \\frac{1}{4}mR^{2}$ and $I_{0} = \\frac{1}{2}mR^{2}$ — the standard engineering numbers for a flywheel.',
      },
    ],
    keyTakeaways: [
      'Mass is the integral of density: $m = \\iint_{D} \\rho\\,dA$; charge uses the identical template with charge density.',
      'Moments are coordinate-weighted masses: $M_{y} = \\iint x\\rho\\,dA$, $M_{x} = \\iint y\\rho\\,dA$.',
      'The center of mass is $(M_{y}/m, M_{x}/m)$ — keep the axis subscripts straight.',
      'Symmetry of region and density together force the center of mass onto the symmetry line.',
      'Moments of inertia use squared distances: $I_{x} = \\iint y^{2}\\rho\\,dA$, $I_{y} = \\iint x^{2}\\rho\\,dA$.',
      '$I_{0} = I_{x} + I_{y}$ always; the radius of gyration $\\sqrt{I/m}$ is the equivalent concentrated ring radius.',
    ],
    quiz: [
      {
        q: 'The mass of a lamina with density $\\rho(x, y)$ occupying $D$ is:',
        options: [`$m = \\iint_{D} \\rho(x, y)\\,dA$`, `$m = \\iint_{D} \\frac{1}{\\rho(x, y)}\\,dA$`, '$m = \\rho(x, y) \\cdot A(D)$ for variable density', `$m = \\iint_{D} x\\,y\\,\\rho(x, y)\\,dA$`],
        answer: 0,
        explanation: 'Sum mass-per-area times area over every patch; the third option is only valid for constant density.',
      },
      {
        q: 'The $x$-coordinate of the center of mass is:',
        options: [`$\\bar{x} = \\frac{1}{m}\\iint_{D} x\\,\\rho\\,dA$`, `$\\bar{x} = \\frac{1}{m}\\iint_{D} y\\,\\rho\\,dA$`, `$\\bar{x} = \\iint_{D} x\\,dA$`, `$\\bar{x} = \\frac{1}{A(D)}\\iint_{D} x\\,\\rho\\,dA$`],
        answer: 0,
        explanation: 'Divide the moment about the $y$-axis by the mass — the density-weighted average of $x$; the $y$-weighted integral gives $\\bar{y}$ instead.',
      },
      {
        q: 'A uniform lamina occupies the half-disk $x^{2} + y^{2} \\le 1$, $y \\ge 0$. Its center of mass:',
        options: ['Lies on the $y$-axis, by symmetry', 'Lies on the $x$-axis, by symmetry', 'Is exactly at the origin', 'Cannot be located without full computation'],
        answer: 0,
        explanation: 'Region and density are unchanged under $x \\mapsto -x$, so $\\bar{x} = 0$; the balance point is on the $y$-axis (in fact at $\\bar{y} = \\frac{4}{3\\pi}$).',
      },
      {
        q: 'The moment of inertia of a lamina about the $x$-axis is:',
        options: [`$I_{x} = \\iint_{D} y^{2}\\rho\\,dA$`, `$I_{x} = \\iint_{D} x^{2}\\rho\\,dA$`, `$I_{x} = \\iint_{D} y\\,\\rho\\,dA$`, `$I_{x} = \\iint_{D} (x^{2} + y^{2})\\rho\\,dA$`],
        answer: 0,
        explanation: 'Squared distance to the $x$-axis is $y^{2}$; the last option is $I_{0}$, about the origin.',
      },
      {
        q: 'For any lamina whatsoever, $I_{0} =$:',
        options: [`$I_{x} + I_{y}$`, `$I_{x} - I_{y}$`, `$\\sqrt{I_{x} I_{y}}$`, `$\\frac{1}{2}(I_{x} + I_{y})$`],
        answer: 0,
        explanation: 'Since $x^{2} + y^{2}$ splits across the two integrands, the polar moment is always the sum of the axial moments.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.6
  {
    sectionId: 'calc-ch15-s6',
    readingTime: 7,
    intro: 'Curved roofs cost more material than flat ones, and the surcharge is exactly a distortion factor built from the partial derivatives. The area of a graph $z = f(x, y)$ over a region is the double integral of $\\sqrt{1 + f_{x}^{2} + f_{y}^{2}}$ — the direct two-dimensional descendant of the arc length integral $\\sqrt{1 + (f^\\prime)^{2}}$ from Section 8.1. This section derives the formula from tangent-plane patches and computes it for planes, paraboloids and spheres.',
    objectives: [
      'State the surface area formula for the graph of a function of two variables',
      'Explain how tangent-plane approximation and the cross product generate the root factor',
      'Compute surface areas of graphs over disks, triangles and other regions',
      'Choose polar coordinates for the region when the integrand depends on $x^{2} + y^{2}$',
    ],
    concepts: [
      {
        term: 'The surface area formula',
        kind: 'theorem',
        statement: 'If $f$ has continuous partial derivatives on a region $D$, the area of the part of the graph $z = f(x, y)$ above $D$ is $$A(S) = \\iint_{D} \\sqrt{1 + f_{x}^{2} + f_{y}^{2}}\\;dA.$$',
        detail: 'For a flat lid ($f_{x} = f_{y} = 0$) the integrand is $1$ and the formula returns the area of $D$; steeper surfaces stretch the integrand without bound, which is why vertical tangent planes signal possible infinite area.',
      },
      {
        term: 'Where the root factor comes from',
        kind: 'insight',
        statement: 'Over each small patch $\\Delta A$ the surface is nearly a piece of its **tangent plane**. The tangent vectors $\\mathbf{i} + f_{x}\\mathbf{k}$ and $\\mathbf{j} + f_{y}\\mathbf{k}$ span a small parallelogram on that plane whose area, per unit of shadow area $\\Delta A$, is exactly $\\sqrt{1 + f_{x}^{2} + f_{y}^{2}}$.',
        detail: 'The tiny patch on the surface projects to $\\Delta A$ on the floor; tilting by the steepest slopes multiplies its true area by the root factor. Chapter 16.6 generalizes this cross-product argument to parametrized surfaces — a sphere or a torus that is not a graph over a nice domain.',
      },
      {
        term: 'The arc length analogy',
        kind: 'insight',
        statement: 'Every structure matches Section 8.1 one dimension up: curve length $\\int \\sqrt{1 + (f^\\prime)^{2}}\\,dx$ becomes surface area $\\iint \\sqrt{1 + f_{x}^{2} + f_{y}^{2}}\\,dA$, and the Pythagorean addition of small legs becomes addition of small parallelograms.',
        detail: 'Also inherited: the integral is usually harder than the geometry suggests. Most surface area integrals have no elementary antiderivative — numerically they are handled exactly like Section 7.7 approximations, and the Riemann lab double-integral mode builds the same intuition.',
      },
      {
        term: 'Computational strategy',
        kind: 'method',
        statement: 'Compute $f_{x}$ and $f_{y}$, add $1$ plus the sum of their squares, take the square root, and integrate over the shadow region $D$. If $f$ depends on $x$ and $y$ through $x^{2} + y^{2}$ and $D$ is a disk, switch the outer structure to polar coordinates immediately.',
        detail: 'Watch for the pleasant special case of a plane: $f = ax + by + c$ makes the integrand the constant $\\sqrt{1 + a^{2} + b^{2}}$, so the surface area is that factor times the area of the shadow.',
      },
      {
        term: 'Surfaces that are not graphs',
        kind: 'notation',
        statement: 'A complete sphere is not the graph of one function of two variables — it needs top and bottom hemispheres $z = \\pm\\sqrt{a^{2} - x^{2} - y^{2}}$, each handled by this formula, or the full parametric machinery of Section 16.6.',
        detail: 'Summing the two hemispheres by this formula recovers $4\\pi a^{2}$, a strong cross-check that the formula is consistent with classical geometry.',
      },
    ],
    examples: [
      {
        title: 'Surface area of a plane region',
        problem: 'Find the area of the part of the plane $z = 4 - x - 2y$ that lies above the triangle $D$ with vertices $(0, 0)$, $(4, 0)$ and $(0, 2)$.',
        steps: [
          { label: 'Step 1: Compute the partials', text: '$f_{x} = -1$ and $f_{y} = -2$, so the integrand is the constant $\\sqrt{1 + 1 + 4} = \\sqrt{6}$.' },
          { label: 'Step 2: Recognize the simplification', text: 'A constant integrand pulls out of the integral: $A(S) = \\sqrt{6} \\cdot A(D)$, the area of the shadow times the tilt factor.' },
          { label: 'Step 3: Compute the shadow area', text: 'The triangle with legs $4$ (along the $x$-axis) and $2$ (along the $y$-axis) has area $\\frac{1}{2} \\cdot 4 \\cdot 2 = 4$.' },
          { label: 'Step 4: Conclude', text: '$A(S) = 4\\sqrt{6} \\approx 9.80$ — about $22.5\\%$ more than the flat shadow, the price of the tilt.' },
        ],
        result: 'The piece of plane has area $4\\sqrt{6} \\approx 9.8$.',
      },
      {
        title: 'Surface area of a paraboloid cap',
        problem: 'Find the area of the part of the paraboloid $z = x^{2} + y^{2}$ that lies under the plane $z = 9$.',
        steps: [
          { label: 'Step 1: Identify the shadow region', text: 'The cap sits above the disk $x^{2} + y^{2} \\le 9$ of radius $3$ in the $xy$-plane.' },
          { label: 'Step 2: Compute the integrand', text: '$f_{x} = 2x$ and $f_{y} = 2y$, so $\\sqrt{1 + f_{x}^{2} + f_{y}^{2}} = \\sqrt{1 + 4x^{2} + 4y^{2}} = \\sqrt{1 + 4r^{2}}$ in polar coordinates.' },
          { label: 'Step 3: Convert the integral to polar', text: '$A(S) = \\int_{0}^{2\\pi} \\int_{0}^{3} \\sqrt{1 + 4r^{2}}\\; r\\,dr\\,d\\theta$ — the extra $r$ from the polar element sets up a substitution.' },
          { label: 'Step 4: Inner integral by substitution', text: 'With $u = 1 + 4r^{2}$, $du = 8r\\,dr$: $\\int_{0}^{3} r\\sqrt{1 + 4r^{2}}\\,dr = \\frac{1}{12}\\left[(1 + 4r^{2})^{3/2}\\right]_{0}^{3} = \\frac{37\\sqrt{37} - 1}{12}$.' },
          { label: 'Step 5: Outer integral', text: 'The integrand is independent of $\\theta$: $A(S) = 2\\pi \\cdot \\frac{37\\sqrt{37} - 1}{12} = \\frac{\\pi}{6}\\left(37\\sqrt{37} - 1\\right) \\approx 117.3$.' },
          { label: 'Step 6: Compare with the shadow', text: 'The flat disk of radius $3$ has area $9\\pi \\approx 28.3$; the curved bowl is more than four times larger because the paraboloid climbs steeply toward its rim.' },
        ],
        result: 'The cap has area $\\frac{\\pi}{6}(37\\sqrt{37} - 1) \\approx 117.3$.',
      },
    ],
    keyTakeaways: [
      'Surface area of a graph: $A(S) = \\iint_{D}\\sqrt{1 + f_{x}^{2} + f_{y}^{2}}\\,dA$ over the shadow region $D$.',
      'The root factor is the tilt: it is $1$ for a flat lid and grows with the slopes of the surface.',
      'For planes the integrand is constant and the area is a multiple of the shadow area.',
      'When $f$ involves $x^{2} + y^{2}$ and $D$ is circular, switch to polar immediately — the $r$ then pairs with the root for a substitution.',
      'The formula is the two-dimensional continuation of the arc length integral of Section 8.1.',
      'Surfaces that fold over themselves (full spheres) are split into graph pieces or deferred to the parametric surfaces of Section 16.6.',
    ],
    quiz: [
      {
        q: 'The surface area of the part of the graph $z = f(x, y)$ lying over $D$ is:',
        options: [`$\\iint_{D} \\sqrt{1 + f_{x}^{2} + f_{y}^{2}}\\;dA$`, `$\\iint_{D} (1 + f_{x}^{2} + f_{y}^{2})\\,dA$`, `$\\iint_{D} \\sqrt{f_{x}^{2} + f_{y}^{2}}\\;dA$`, `$\\iint_{D} f(x, y)\\,dA$`],
        answer: 0,
        explanation: 'The square root of one plus the sum of the squared slopes is the tilt stretch factor; without the $1$ the formula would vanish for flat surfaces.',
      },
      {
        q: 'For the plane $z = 4 - x - 2y$ over a region $D$ of area $3$, the surface area is:',
        options: [`$3\\sqrt{6}$`, `$3$`, `$6\\sqrt{3}$`, `$18$`],
        answer: 0,
        explanation: 'Here $f_{x} = -1$ and $f_{y} = -2$ make the integrand the constant $\\sqrt{6}$, so the area is $\\sqrt{6} \\times 3$.',
      },
      {
        q: 'The surface area of a graph over $D$ is always at least:',
        options: ['The area of $D$', 'The volume under the graph', 'The arc length of the boundary of $D$', 'Twice the area of $D$'],
        answer: 0,
        explanation: 'Since $\\sqrt{1 + f_{x}^{2} + f_{y}^{2}} \\ge 1$, projecting a surface onto the floor only shrinks it; equality exactly for flat lids.',
      },
      {
        q: 'For the paraboloid $z = x^{2} + y^{2}$ over $x^{2} + y^{2} \\le 9$, the best setup is:',
        options: [`$\\int_{0}^{2\\pi} \\int_{0}^{3} \\sqrt{1 + 4r^{2}}\\; r\\,dr\\,d\\theta$`, `$\\int_{0}^{2\\pi} \\int_{0}^{3} \\sqrt{1 + 4r^{2}}\\; dr\\,d\\theta$`, `$\\int_{-3}^{3} \\int_{-3}^{3} \\sqrt{1 + 4x^{2} + 4y^{2}}\\; dy\\,dx$`, `$\\int_{0}^{2\\pi} \\int_{0}^{3} (1 + 4r^{2})\\,r\\,dr\\,d\\theta$`],
        answer: 0,
        explanation: 'The integrand depends on $r$ alone; both the square root and the polar factor $r$ must appear — dropping $r$ or the root are the two standard errors.',
      },
      {
        q: 'If the partial derivatives of $f$ blow up along a curve in $D$, then:',
        options: ['The surface area may be infinite — the integral can diverge', 'The formula still always gives a finite number', 'The surface must be a plane', 'The shadow region must be a disk'],
        answer: 0,
        explanation: 'A vertical tangent plane stretches the root factor without bound, mirroring how a cusp can have infinite arc length.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.7
  {
    sectionId: 'calc-ch15-s7',
    readingTime: 8,
    intro: 'One more variable, one more integral sign. Triple integrals add up a quantity spread through a solid — mass of a 3-D object, total charge in a volume, or simply volume itself — by sweeping space with planes instead of strips. Fubini extends verbatim: integrate in any of the six possible orders, project the solid to set the limits, and choose the order that avoids splitting the region.',
    objectives: [
      'Evaluate triple integrals over boxes and z-simple regions as iterated integrals',
      'Describe a solid as a region between two surfaces over a shadow plane region',
      'Use the triple integral to compute volume and average value of a function in space',
      'Choose strategically among the six orders of integration',
    ],
    concepts: [
      {
        term: 'The triple integral',
        kind: 'definition',
        statement: 'For a function $f$ continuous on a solid box $B = [a, b] \\times [c, d] \\times [r, s]$, the **triple integral** is the limit of triple Riemann sums, and Fubini’s Theorem extends: $$\\iiint_{B} f\\,dV = \\int_{r}^{s} \\int_{c}^{d} \\int_{a}^{b} f\\,dx\\,dy\\,dz,$$ with equality for any of the six orders.',
        detail: 'The volume element is $dV = dx\\,dy\\,dz$; on a box all limits are constants and the order genuinely does not matter — pick the most convenient one.',
      },
      {
        term: 'z-simple regions and projection',
        kind: 'method',
        statement: 'A solid $E$ is **z-simple** if it lies between an upper surface $z = u_{2}(x, y)$ and a lower surface $z = u_{1}(x, y)$ over a shadow region $D$ in the $xy$-plane: $$\\iiint_{E} f\\,dV = \\iint_{D} \\left[\\int_{u_{1}(x, y)}^{u_{2}(x, y)} f\\,dz\\right] dA.$$',
        detail: 'The recipe: slice vertically first (between the surfaces), then handle the shadow $D$ by the Type I / Type II machinery of Section 15.3. The innermost limits may involve both outer variables.',
      },
      {
        term: 'Volume as a triple integral',
        kind: 'law',
        statement: 'Taking the integrand $1$ gives the volume of a solid: $$V(E) = \\iiint_{E} 1\\,dV.$$ Applied between $z = u_{1}$ and $z = u_{2}$ over $D$ it reduces to the double integral $\\iint_{D}(u_{2} - u_{1})\\,dA$ of Section 15.3.',
        detail: 'Three nested integrations of $1$ also build a fast sanity check: for a tetrahedron with intercepts $a, b, c$ the triple integral gives the classical $\\frac{abc}{6}$, as the worked example verifies.',
      },
      {
        term: 'Average value in space',
        kind: 'definition',
        statement: 'The **average value** of $f$ over a solid $E$ of volume $V$ is $$f_{\\text{ave}} = \\frac{1}{V} \\iiint_{E} f\\,dV.$$',
        detail: 'If $f$ is a temperature distribution, this is the mean temperature of the object; if $f$ is density, the average is $m/V$ — the ordinary bulk density.',
      },
      {
        term: 'Six orders of integration',
        kind: 'insight',
        statement: 'A triple integral can be written with $dx$, $dy$ or $dz$ innermost, and the limits change accordingly — six arrangements total. The order is chosen to keep the shadow region simple and to keep the boundary surfaces single-valued.',
        detail: 'The same solid may need one integral in the order $dz\\,dy\\,dx$ but three pieces in the order $dy\\,dx\\,dz$. Sketching the solid and its three coordinate shadows before writing limits is the professional habit; Section 15.2’s reversal trick now has two extra directions to exploit.',
      },
      {
        term: 'From boxes to general solids',
        kind: 'method',
        statement: 'Additivity holds as before: solids that are not simple in any direction are split into pieces that are, and the integrals over the pieces are summed.',
        detail: 'The coming coordinate systems — cylindrical in Section 15.8 and spherical in Section 15.9 — exist precisely to make the common curved solids (paraboloid bowls, balls, cones) simple without splitting.',
      },
    ],
    examples: [
      {
        title: 'A triple integral over a box',
        problem: 'Evaluate $\\displaystyle\\int_{0}^{1} \\int_{0}^{2} \\int_{0}^{3} x y z\\; dz\\,dy\\,dx$.',
        steps: [
          { label: 'Step 1: Innermost integral in $z$', text: 'Treat $x$ and $y$ as constants: $\\int_{0}^{3} x y z\\,dz = \\Big[\\tfrac{x y z^{2}}{2}\\Big]_{0}^{3} = \\tfrac{9}{2}x y$.' },
          { label: 'Step 2: Middle integral in $y$', text: '$\\int_{0}^{2} \\tfrac{9}{2} x y\\,dy = \\tfrac{9}{2} x \\cdot \\tfrac{4}{2} = 9x$.' },
          { label: 'Step 3: Outer integral in $x$', text: '$\\int_{0}^{1} 9x\\,dx = \\tfrac{9}{2}$.' },
          { label: 'Step 4: Observe the factorization', text: 'Since the integrand is a product $x \\cdot y \\cdot z$ and the box has constant limits, the whole integral is the product $\\left(\\int_{0}^{1} x\\,dx\\right)\\left(\\int_{0}^{2} y\\,dy\\right)\\left(\\int_{0}^{3} z\\,dz\\right) = \\frac{1}{2} \\cdot 2 \\cdot \\frac{9}{2} = \\frac{9}{2}$ — a shortcut worth knowing on boxes.' },
        ],
        result: 'The integral equals $\\frac{9}{2}$.',
      },
      {
        title: 'Volume of a tetrahedron',
        problem: 'Find the volume of the tetrahedron $T$ bounded by the coordinate planes and the plane $6x + 3y + 2z = 6$.',
        steps: [
          { label: 'Step 1: Find the shadow region', text: 'Setting $z = 0$ gives the slanted edge $6x + 3y = 6$, that is $y = 2 - 2x$ for $0 \\le x \\le 1$; the shadow $D$ is the triangle with vertices $(0, 0)$, $(1, 0)$ and $(0, 2)$.' },
          { label: 'Step 2: Determine the $z$-limits', text: 'Solving the plane equation for $z$ gives the top surface $z = 3 - 3x - \\frac{3}{2}y$, and the bottom is the floor $z = 0$.' },
          { label: 'Step 3: Set up the triple integral', text: '$V = \\int_{0}^{1} \\int_{0}^{2 - 2x} \\int_{0}^{3 - 3x - (3/2)y} dz\\,dy\\,dx$.' },
          { label: 'Step 4: Inner integral, then the $y$ integral', text: 'The inner integral is $3 - 3x - \\frac{3}{2}y$; integrating in $y$ produces $\\Big[3y - 3xy - \\tfrac{3}{4}y^{2}\\Big]_{0}^{2 - 2x} = 3 - 6x + 3x^{2}$.' },
          { label: 'Step 5: Outer integral', text: '$\\int_{0}^{1} (3 - 6x + 3x^{2})\\,dx = 3 - 3 + 1 = 1$.' },
          { label: 'Step 6: Cross-check with intercepts', text: 'The plane meets the axes at $1$, $2$ and $3$, and the classical formula for the tetrahedron cut by $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$ gives $V = \\frac{1 \\cdot 2 \\cdot 3}{6} = 1$ — matching.' },
        ],
        result: 'The tetrahedron has volume $1$, agreeing with the intercept formula $V = \\frac{abc}{6}$.',
      },
      {
        title: 'Average value over a box',
        problem: 'Find the average value of $f(x, y, z) = x y z$ over the unit cube $[0, 1] \\times [0, 1] \\times [0, 1]$.',
        steps: [
          { label: 'Step 1: Compute the integral', text: 'By the product structure and constant limits, $\\iiint x y z\\,dV = \\left(\\int_{0}^{1} x\\,dx\\right)^{3} = \\left(\\frac{1}{2}\\right)^{3} = \\frac{1}{8}$.' },
          { label: 'Step 2: Compute the volume', text: 'The unit cube has $V = 1 \\cdot 1 \\cdot 1 = 1$.' },
          { label: 'Step 3: Divide', text: '$f_{\\text{ave}} = \\frac{1/8}{1} = \\frac{1}{8}$ — the geometric mean of the variables over the cube, as expected by symmetry among $x$, $y$ and $z$.' },
        ],
        result: 'The average value of $xyz$ on the unit cube is $\\frac{1}{8}$.',
      },
    ],
    keyTakeaways: [
      'A triple integral over a box factors into three one-dimensional integrations in any order.',
      'For a z-simple solid, integrate between the bottom and top surfaces first, then over the shadow with Type I / Type II methods.',
      'Volume is the triple integral of $1$; the tetrahedron with intercepts $a, b, c$ has volume $\\frac{abc}{6}$.',
      'Average value in space is the integral divided by the volume of the solid.',
      'Six orders of integration are available; choose the one that keeps shadows simple and surfaces single-valued.',
      'Solids that are not simple in any direction are split into pieces and the integrals added.',
    ],
    quiz: [
      {
        q: 'For a solid region $E$, the volume is:',
        options: [`$\\iiint_{E} 1\\,dV$`, `$\\iiint_{E} x\\,y\\,z\\,dV$`, `$\\iint_{D} f(x, y)\\,dA$ for any $f$`, 'Undefined without a density'],
        answer: 0,
        explanation: 'Summing the volume elements $dV$ over the solid is the direct analog of $\\iint 1\\,dA$ giving area.',
      },
      {
        q: 'The tetrahedron cut from the first octant by $6x + 3y + 2z = 6$ has volume:',
        options: [`$1$`, `$6$`, `$3$`, `$\\frac{1}{2}$`],
        answer: 0,
        explanation: 'Intercepts $1$, $2$, $3$ give $V = \\frac{abc}{6} = \\frac{1 \\cdot 2 \\cdot 3}{6} = 1$.',
      },
      {
        q: 'In the iterated integral $\\int_{a}^{b} \\int_{g_{1}(x)}^{g_{2}(x)} \\int_{u_{1}(x, y)}^{u_{2}(x, y)} f\\; dz\\,dy\\,dx$, the innermost integration is with respect to:',
        options: [`$z$`, `$y$`, `$x$`, 'All three variables at once'],
        answer: 0,
        explanation: 'Read differentials inside-out: $z$ runs first, and its limits may involve both surviving variables $x$ and $y$.',
      },
      {
        q: 'The average value of $f$ over a solid $E$ of volume $V$ is:',
        options: [`$\\frac{1}{V} \\iiint_{E} f\\,dV$`, `$\\iiint_{E} f\\,dV$`, `$\\frac{1}{A(D)} \\iint_{D} f\\,dA$`, 'The value of $f$ at the centroid of $E$'],
        answer: 0,
        explanation: 'Total divided by volume — the value of $f$ at the centroid is generally different from the average of $f$.',
      },
      {
        q: 'If $f(x, y, z) = 1$ on the box $[0, 2] \\times [0, 3] \\times [0, 4]$, then $\\iiint f\\,dV =$:',
        options: [`$24$`, `$9$`, `$12$`, `$2$`],
        answer: 0,
        explanation: 'Integrating $1$ over the box returns its volume: $2 \\cdot 3 \\cdot 4 = 24$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.8
  {
    sectionId: 'calc-ch15-s8',
    readingTime: 7,
    intro: 'Cylindrical coordinates bolt ordinary rectangular height onto the polar coordinates of the plane: $(r, \\theta, z)$. The volume element inherits the polar factor, $dV = r\\,dz\\,dr\\,d\\theta$, and solids organized around an axis — cylinders, paraboloid bowls, cones and wedges — become trivial to describe. This section converts triple integrals to cylindrical form and works the classic volumes and moments.',
    objectives: [
      'Convert points and equations between Cartesian and cylindrical coordinates',
      'Set up triple integrals in cylindrical coordinates with correct $r$-factor',
      'Describe axis-aligned solids (cylinders, paraboloids, cones) as cylindrical regions',
      'Compute volumes and moments of inertia of solids of revolution',
    ],
    concepts: [
      {
        term: 'Cylindrical coordinates',
        kind: 'definition',
        statement: '**Cylindrical coordinates** $(r, \\theta, z)$ locate a point by polar coordinates in the $xy$-plane plus ordinary height: $$x = r\\cos\\theta, \\qquad y = r\\sin\\theta, \\qquad z = z, \\qquad r^{2} = x^{2} + y^{2}.$$',
        detail: 'Cylinders around the $z$-axis are the coordinate surfaces $r = $ constant; half-planes through the axis are $\\theta = $ constant; horizontal planes are $z = $ constant. Any solid with a rotational axis becomes a rectangle in $(r, \\theta, z)$-space.',
      },
      {
        term: 'The cylindrical volume element',
        kind: 'law',
        statement: 'The volume element in cylindrical coordinates is $$dV = r\\; dz\\, dr\\, d\\theta,$$ carrying over the polar factor $r$ from Section 15.4 — arc length around the axis grows with radius.',
        detail: 'The factor $r$ is the Jacobian of the map $(r, \\theta, z) \\mapsto (x, y, z)$, and it multiplies whatever integrand is present. Dropping it is the most common cylindrical-coordinates error, and it silently shrinks answers near the axis.',
      },
      {
        term: 'Converting a triple integral',
        kind: 'method',
        statement: 'If $E$ is described as $\\alpha \\le \\theta \\le \\beta$, $r_{1}(\\theta) \\le r \\le r_{2}(\\theta)$, $z_{1}(r, \\theta) \\le z \\le z_{2}(r, \\theta)$, then $$\\iiint_{E} f(x, y, z)\\,dV = \\int_{\\alpha}^{\\beta} \\int_{r_{1}}^{r_{2}} \\int_{z_{1}}^{z_{2}} f(r\\cos\\theta, r\\sin\\theta, z)\\; r\\, dz\\, dr\\, d\\theta.$$',
        detail: 'Recipe: substitute into the integrand, append the factor $r$, then describe the region — usually top surface minus bottom surface for $z$, then a polar description of the footprint in the $xy$-plane.',
      },
      {
        term: 'When to use cylindrical coordinates',
        kind: 'insight',
        statement: 'Cylindrical coordinates are the tool of choice when the solid is organized around the $z$-axis: circular cylinders, paraboloids $z = x^{2} + y^{2}$, cones $z = \\sqrt{x^{2} + y^{2}}$, and wedges between half-planes, or when the integrand involves $x^{2} + y^{2}$.',
        detail: 'A cone has the beautiful one-line description $z = r$; a paraboloid cap over a disk becomes constant limits $0 \\le z \\le 4 - r^{2}$, $0 \\le r \\le 2$ — no splitting, no square roots.',
      },
      {
        term: 'Moments about the axis',
        kind: 'method',
        statement: 'For the moment of inertia about the $z$-axis, the squared distance $x^{2} + y^{2}$ becomes simply $r^{2}$, so $$I_{z} = \\iiint_{E} r^{2}\\,\\rho\\; r\\, dz\\, dr\\, d\\theta$$ with an overall integrand of $\\rho\\, r^{3}$.',
        detail: 'This is where the coordinate system earns its keep: the axis-distance function that is awkward in Cartesian is a coordinate in cylindrical. The $\\frac{1}{2}mR^{2}$ of a solid cylinder falls out in four lines, as the worked example shows.',
      },
    ],
    examples: [
      {
        title: 'Volume of a paraboloid bowl',
        problem: 'Find the volume of the solid bounded below by the $xy$-plane and above by the paraboloid $z = 4 - x^{2} - y^{2}$.',
        steps: [
          { label: 'Step 1: Describe the solid in cylindrical coordinates', text: 'The paraboloid is $z = 4 - r^{2}$ and meets the floor where $r = 2$. The solid is $0 \\le z \\le 4 - r^{2}$, $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$.' },
          { label: 'Step 2: Write the integral', text: '$V = \\int_{0}^{2\\pi} \\int_{0}^{2} \\int_{0}^{4 - r^{2}} r\\; dz\\, dr\\, d\\theta$.' },
          { label: 'Step 3: Inner integral in $z$', text: 'The inner integral is $r(4 - r^{2})$.' },
          { label: 'Step 4: Middle integral in $r$', text: '$\\int_{0}^{2} (4r - r^{3})\\,dr = \\Big[2r^{2} - \\tfrac{r^{4}}{4}\\Big]_{0}^{2} = 8 - 4 = 4$.' },
          { label: 'Step 5: Outer integral in $\\theta$', text: '$V = 2\\pi \\cdot 4 = 8\\pi \\approx 25.1$ — half the volume of the enclosing cylinder of radius $2$ and height $4$, a classical ratio.' },
        ],
        result: 'The bowl has volume $8\\pi$.',
      },
      {
        title: 'Moment of inertia of a solid cylinder',
        problem: 'Find the moment of inertia about its axis for a uniform solid cylinder of radius $R$, height $h$ and constant density $\\rho_{0}$.',
        steps: [
          { label: 'Step 1: Set up the region', text: 'The cylinder is $0 \\le r \\le R$, $0 \\le z \\le h$, $0 \\le \\theta \\le 2\\pi$, with the $z$-axis as its central axis.' },
          { label: 'Step 2: Write the inertia integral', text: 'The squared distance to the axis is $x^{2} + y^{2} = r^{2}$, so $I_{z} = \\int_{0}^{2\\pi} \\int_{0}^{R} \\int_{0}^{h} r^{2}\\,\\rho_{0}\\; r\\,dz\\,dr\\,d\\theta$.' },
          { label: 'Step 3: Integrate in $z$ and $r$', text: 'The $z$ integral contributes $h$; then $\\int_{0}^{R} r^{3}\\,dr = \\frac{R^{4}}{4}$, so $I_{z} = \\rho_{0} h \\frac{R^{4}}{4} \\cdot 2\\pi = \\frac{1}{2}\\pi\\rho_{0} h R^{4}$.' },
          { label: 'Step 4: Express through the mass', text: 'The mass is $m = \\rho_{0}\\pi R^{2}h$, so $I_{z} = \\frac{\\pi\\rho_{0} h R^{4}}{2} = \\frac{1}{2}mR^{2}$.' },
          { label: 'Step 5: Interpret', text: 'The height cancels completely — for axial rotation only the radial distribution of mass matters, which is why long pipes and short disks of equal radius and mass spin the same way.' },
        ],
        result: 'The solid cylinder has $I_{z} = \\frac{1}{2}mR^{2}$ about its axis, independent of its height.',
      },
      {
        title: 'Converting a Cartesian integral to cylindrical',
        problem: 'Evaluate $\\displaystyle\\iiint_{E} \\sqrt{x^{2} + y^{2}}\\; dV$ where $E$ is the region inside the cylinder $x^{2} + y^{2} = 4$ between $z = 0$ and $z = 1$.',
        steps: [
          { label: 'Step 1: Convert the region', text: 'The cylinder is $0 \\le r \\le 2$ with $0 \\le \\theta \\le 2\\pi$, and the slab gives $0 \\le z \\le 1$ — a rectangular box in cylindrical coordinates.' },
          { label: 'Step 2: Convert the integrand', text: '$\\sqrt{x^{2} + y^{2}} = r$, and multiplying by the volume element contributes another factor $r$: the integrand becomes $r^{2}$.' },
          { label: 'Step 3: Write the integral', text: '$\\int_{0}^{2\\pi} \\int_{0}^{2} \\int_{0}^{1} r^{2}\\; dz\\, dr\\, d\\theta$.' },
          { label: 'Step 4: Evaluate', text: 'The $z$ integral gives $1$; $\\int_{0}^{2} r^{2}\\,dr = \\frac{8}{3}$; times $2\\pi$ gives $\\frac{16\\pi}{3} \\approx 16.8$.' },
        ],
        result: 'The integral equals $\\frac{16\\pi}{3}$, with the region and integrand both simplified by the change of coordinates.',
      },
    ],
    keyTakeaways: [
      'Cylindrical coordinates are polar coordinates plus ordinary height: $x = r\\cos\\theta$, $y = r\\sin\\theta$, $z = z$.',
      'The volume element is $dV = r\\,dz\\,dr\\,d\\theta$ — the polar factor rides along.',
      'Paraboloids become $z = 4 - r^{2}$-style top surfaces; cones become $z = r$; cylinders become $r = $ constant.',
      'Choose cylindrical when the solid or integrand is organized around an axis or involves $x^{2} + y^{2}$.',
      'The distance to the $z$-axis is the coordinate $r$ itself, making axial moments of inertia natural: $I_{z}$ has integrand $\\rho\\,r^{3}$.',
      'The solid cylinder has $I_{z} = \\frac{1}{2}mR^{2}$, independent of height.',
    ],
    quiz: [
      {
        q: 'The cylindrical volume element is:',
        options: [`$dV = r\\,dz\\,dr\\,d\\theta$`, `$dV = dz\\,dr\\,d\\theta$`, `$dV = r^{2}\\,dz\\,dr\\,d\\theta$`, `$dV = \\rho^{2}\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$`],
        answer: 0,
        explanation: 'The polar factor $r$ carries into the volume element; the last option is the spherical element of Section 15.9.',
      },
      {
        q: 'The solid bounded by the paraboloid $z = 4 - x^{2} - y^{2}$ and the $xy$-plane is described in cylindrical coordinates as:',
        options: [`$0 \\le z \\le 4 - r^{2}$, $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$`, `$0 \\le z \\le 4$, $0 \\le r \\le 4$`, `$0 \\le z \\le r^{2}$, $0 \\le r \\le 2$`, 'It has no cylindrical description because it is curved'],
        answer: 0,
        explanation: 'The paraboloid is $z = 4 - r^{2}$ and hits $z = 0$ exactly at $r = 2$; $z$ runs from the floor up to the paraboloid.',
      },
      {
        q: 'The extra factor $r$ in cylindrical volume elements exists because:',
        options: ['Arc length around the axis grows with radius', 'The $z$-direction is stretched', 'Angles must be normalized', 'Density varies with depth'],
        answer: 0,
        explanation: 'Equal angular wedges sweep more area farther from the axis — circumference $2\\pi r$ — so the volume element grows with $r$.',
      },
      {
        q: 'The moment of inertia about its axis of a uniform solid cylinder of mass $m$ and radius $R$ is:',
        options: [`$\\frac{1}{2}mR^{2}$`, `$mR^{2}$`, `$\\frac{1}{4}mR^{2}$`, `$\\frac{2}{5}mR^{2}$`],
        answer: 0,
        explanation: 'The triple integral collapses to $\\frac{1}{2}mR^{2}$; the $\\frac{1}{4}$ belongs to a disk about a diameter and the $\\frac{2}{5}$ to a solid ball (Section 15.9).',
      },
      {
        q: 'In cylindrical coordinates, the integrand (before the $r$ of $dV$) for $I_{z}$ of a solid with density $1$ is:',
        options: [`$r^{2}$`, `$r$`, `$z^{2}$`, `$\\rho^{2}\\sin^{2}\\phi$`],
        answer: 0,
        explanation: 'Squared distance to the $z$-axis is $r^{2}$; the volume element then multiplies in one more $r$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.9
  {
    sectionId: 'calc-ch15-s9',
    readingTime: 8,
    intro: 'Spherical coordinates measure everything from the origin: distance $\\rho$, longitude $\\theta$, and colatitude $\\phi$ down from the north pole. The volume element becomes $\\rho^{2}\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$ — the extra factors remembering that shells farther out are bigger, and that rings shrink toward the poles. Balls, ice-cream-cone regions and sphere caps turn into rectangular boxes in $(\\rho, \\theta, \\phi)$-space.',
    objectives: [
      'Convert points and equations between Cartesian, cylindrical and spherical coordinates',
      'State the spherical volume element and where each factor comes from',
      'Describe balls, half-balls, cones and ice-cream-cone regions in spherical coordinates',
      'Compute volumes and moments of inertia of balls and spherical sectors',
    ],
    concepts: [
      {
        term: 'Spherical coordinates',
        kind: 'definition',
        statement: '**Spherical coordinates** $(\\rho, \\theta, \\phi)$ locate a point by its distance from the origin, its longitude, and its angle down from the positive $z$-axis: $$x = \\rho\\sin\\phi\\cos\\theta, \\quad y = \\rho\\sin\\phi\\sin\\theta, \\quad z = \\rho\\cos\\phi, \\quad \\rho^{2} = x^{2} + y^{2} + z^{2}.$$',
        detail: 'Note the two different angles: $\\theta$ is the same azimuthal angle as in cylindrical and polar coordinates (longitude), while $\\phi$ is the colatitude measured from the north pole — a frequent source of swapped limits, so always ask which angle sweeps which way.',
      },
      {
        term: 'Spherical versus cylindrical',
        kind: 'notation',
        statement: 'The systems share the azimuth: cylindrical $r$ and spherical $\\rho, \\phi$ satisfy $$r = \\rho\\sin\\phi, \\qquad z = \\rho\\cos\\phi, \\qquad \\rho^{2} = r^{2} + z^{2}.$$',
        detail: 'A sphere is $\\rho = $ constant (a coordinate surface!); a cone around the $z$-axis is $\\phi = $ constant; a half-plane is $\\theta = $ constant. Regions bounded by these surfaces become boxes in spherical coordinates.',
      },
      {
        term: 'The spherical volume element',
        kind: 'law',
        statement: 'The volume element in spherical coordinates is $$dV = \\rho^{2}\\sin\\phi\\; d\\rho\\, d\\phi\\, d\\theta.$$ A small spherical box has sides $d\\rho$, $\\rho\\,d\\phi$ (meridian arc) and $\\rho\\sin\\phi\\,d\\theta$ (parallel arc), and the product of the last two carries the $\\rho^{2}\\sin\\phi$.',
        detail: 'The factor $\\sin\\phi$ shrinks boxes near the poles, where the longitude lines converge — exactly as meridians meet at the north pole on a globe. Section 15.10 will re-derive this element as the Jacobian of the spherical map, unifying all the coordinate systems in one theorem.',
      },
      {
        term: 'Describing regions in spherical coordinates',
        kind: 'method',
        statement: 'A ball of radius $a$ is $0 \\le \\rho \\le a$, $0 \\le \\phi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$. The upper half-ball adds $0 \\le \\phi \\le \\frac{\\pi}{2}$; an ice-cream-cone region bounded by a cone $\\phi = \\phi_{0}$ and a sphere $\\rho = a$ is a rectangular box of parameters.',
        detail: 'Cones through the origin are constant-$\\phi$ surfaces: $z = \\sqrt{x^{2} + y^{2}}$ rearranges to $\\tan\\phi = 1$, that is $\\phi = \\frac{\\pi}{4}$. Reading a cone as a constant $\\phi$ is the single biggest simplification spherical coordinates offers.',
      },
      {
        term: 'When to use spherical coordinates',
        kind: 'insight',
        statement: 'Use spherical coordinates when the region or the integrand involves $x^{2} + y^{2} + z^{2}$ (distances from the origin), or is bounded by spheres centered at the origin and cones with apex at the origin.',
        detail: 'The substitution $x^{2} + y^{2} + z^{2} \\to \\rho^{2}$ is the spherical signature move, just as $x^{2} + y^{2} \\to r^{2}$ was for polar and cylindrical. For off-center spheres, translate first or stay Cartesian.',
      },
    ],
    examples: [
      {
        title: 'Volume of a ball',
        problem: 'Use a triple integral in spherical coordinates to derive the volume of a ball of radius $R$.',
        steps: [
          { label: 'Step 1: Describe the ball', text: 'The ball is the box $0 \\le \\rho \\le R$, $0 \\le \\phi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$ in spherical coordinates — every parameter sweeps its full range.' },
          { label: 'Step 2: Write the integral', text: '$V = \\int_{0}^{2\\pi} \\int_{0}^{\\pi} \\int_{0}^{R} \\rho^{2}\\sin\\phi\\; d\\rho\\, d\\phi\\, d\\theta$.' },
          { label: 'Step 3: Inner integral in $\\rho$', text: '$\\int_{0}^{R} \\rho^{2}\\,d\\rho = \\frac{R^{3}}{3}$.' },
          { label: 'Step 4: Middle integral in $\\phi$', text: '$\\int_{0}^{\\pi} \\sin\\phi\\,d\\phi = \\Big[-\\cos\\phi\\Big]_{0}^{\\pi} = 1 - (-1) = 2$.' },
          { label: 'Step 5: Outer integral in $\\theta$', text: '$V = \\frac{R^{3}}{3} \\cdot 2 \\cdot 2\\pi = \\frac{4\\pi R^{3}}{3}$ — the classical formula, in three one-line integrations.' },
        ],
        result: 'The ball has volume $\\frac{4\\pi R^{3}}{3}$, recovered with no geometry beyond the volume element.',
      },
      {
        title: 'An ice-cream-cone region',
        problem: 'Find the volume of the solid that lies within the sphere $x^{2} + y^{2} + z^{2} = 4$, above the $xy$-plane, and below the cone $z = \\sqrt{x^{2} + y^{2}}$.',
        steps: [
          { label: 'Step 1: Translate the cone', text: 'The cone $z = \\sqrt{x^{2} + y^{2}}$ means $\\rho\\cos\\phi = \\rho\\sin\\phi$, hence $\\phi = \\frac{\\pi}{4}$: the region sits below the cone, between $\\phi = \\frac{\\pi}{4}$ and the floor.' },
          { label: 'Step 2: Translate the remaining surfaces', text: 'The sphere is $\\rho = 2$; the $xy$-plane is $\\phi = \\frac{\\pi}{2}$ (the equator). So the region is $0 \\le \\rho \\le 2$, $\\frac{\\pi}{4} \\le \\phi \\le \\frac{\\pi}{2}$, $0 \\le \\theta \\le 2\\pi$ — a perfect spherical box.' },
          { label: 'Step 3: Write the integral', text: '$V = \\int_{0}^{2\\pi} \\int_{\\pi/4}^{\\pi/2} \\int_{0}^{2} \\rho^{2}\\sin\\phi\\; d\\rho\\, d\\phi\\, d\\theta$.' },
          { label: 'Step 4: Integrate in $\\rho$', text: '$\\int_{0}^{2} \\rho^{2}\\,d\\rho = \\frac{8}{3}$.' },
          { label: 'Step 5: Integrate in $\\phi$', text: '$\\int_{\\pi/4}^{\\pi/2} \\sin\\phi\\,d\\phi = \\Big[-\\cos\\phi\\Big]_{\\pi/4}^{\\pi/2} = 0 + \\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$.' },
          { label: 'Step 6: Integrate in $\\theta$', text: '$V = \\frac{8}{3} \\cdot \\frac{\\sqrt{2}}{2} \\cdot 2\\pi = \\frac{8\\sqrt{2}\\,\\pi}{3} \\approx 11.85$.' },
        ],
        result: 'The region has volume $\\frac{8\\sqrt{2}\\pi}{3} \\approx 11.85$ — about $70\\%$ of the enclosing half-ball of volume $\\frac{16\\pi}{3}$.',
      },
      {
        title: 'Moment of inertia of a solid ball',
        problem: 'Find the moment of inertia about the $z$-axis of a uniform solid ball $\\rho \\le R$ with constant density $\\rho_{0}$.',
        steps: [
          { label: 'Step 1: Convert the distance function', text: 'The squared distance to the $z$-axis is $x^{2} + y^{2} = \\rho^{2}\\sin^{2}\\phi$ — the cylindrical radius is $r = \\rho\\sin\\phi$.' },
          { label: 'Step 2: Write the integral', text: '$I_{z} = \\int_{0}^{2\\pi} \\int_{0}^{\\pi} \\int_{0}^{R} \\rho^{2}\\sin^{2}\\phi\\;\\rho_{0}\\;\\rho^{2}\\sin\\phi\\; d\\rho\\, d\\phi\\, d\\theta = \\rho_{0}\\int_{0}^{2\\pi}\\int_{0}^{\\pi}\\int_{0}^{R} \\rho^{4}\\sin^{3}\\phi\\; d\\rho\\, d\\phi\\, d\\theta$.' },
          { label: 'Step 3: Integrate in $\\rho$', text: '$\\int_{0}^{R} \\rho^{4}\\,d\\rho = \\frac{R^{5}}{5}$.' },
          { label: 'Step 4: Integrate in $\\phi$', text: '$\\int_{0}^{\\pi} \\sin^{3}\\phi\\,d\\phi = \\int_{0}^{\\pi}(1 - \\cos^{2}\\phi)\\sin\\phi\\,d\\phi = \\Big[-\\cos\\phi + \\tfrac{\\cos^{3}\\phi}{3}\\Big]_{0}^{\\pi} = \\frac{4}{3}$.' },
          { label: 'Step 5: Combine and express through mass', text: '$I_{z} = \\rho_{0} \\cdot 2\\pi \\cdot \\frac{4}{3} \\cdot \\frac{R^{5}}{5} = \\frac{8\\pi\\rho_{0}R^{5}}{15}$. With $m = \\frac{4}{3}\\pi\\rho_{0}R^{3}$, this is $I_{z} = \\frac{2}{5}mR^{2}$.' },
        ],
        result: 'A solid ball has $I_{z} = \\frac{2}{5}mR^{2}$ about any diameter — the canonical physics number for planets and flywheels.',
      },
    ],
    keyTakeaways: [
      'Spherical coordinates: $x = \\rho\\sin\\phi\\cos\\theta$, $y = \\rho\\sin\\phi\\sin\\theta$, $z = \\rho\\cos\\phi$, with $\\phi$ measured down from the positive $z$-axis.',
      'The volume element is $dV = \\rho^{2}\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$ — two powers of $\\rho$ and one $\\sin\\phi$.',
      'Spheres centered at the origin are $\\rho = $ constant; cones with apex at the origin are $\\phi = $ constant; half-planes are $\\theta = $ constant.',
      'Balls and ice-cream-cone regions become rectangular parameter boxes, with every integral elementary.',
      '$x^{2} + y^{2} + z^{2}$ becomes $\\rho^{2}$ — the spherical signature simplification.',
      'The solid ball has $I = \\frac{2}{5}mR^{2}$ about a diameter, versus $\\frac{1}{2}mR^{2}$ for the solid cylinder.',
    ],
    quiz: [
      {
        q: 'The spherical volume element is:',
        options: [`$\\rho^{2}\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$`, `$\\rho\\,d\\rho\\,d\\phi\\,d\\theta$`, `$\\rho^{2}\\,d\\rho\\,d\\phi\\,d\\theta$`, `$\\rho^{2}\\cos\\phi\\,d\\rho\\,d\\phi\\,d\\theta$`],
        answer: 0,
        explanation: 'The small box has sides $d\\rho$, $\\rho\\,d\\phi$ and $\\rho\\sin\\phi\\,d\\theta$; only the last is shortened near the poles.',
      },
      {
        q: 'In spherical coordinates, the angle $\\phi$ measures:',
        options: ['The angle down from the positive $z$-axis', 'The angle around the $z$-axis in the $xy$-plane', 'The distance from the origin', 'The angle up from the $xy$-plane'],
        answer: 0,
        explanation: '$\\theta$ is the longitude (azimuth in the $xy$-plane), $\\rho$ the distance, and $\\phi$ the colatitude from the north pole.',
      },
      {
        q: 'The conversions $z = \\rho\\cos\\phi$ and $r = \\rho\\sin\\phi$ (cylindrical $r$) together imply:',
        options: [`$x^{2} + y^{2} + z^{2} = \\rho^{2}$`, '$x^{2} + y^{2} = \\rho^{2}$ always', `$z = \\rho^{2}$`, `$\\phi = z / \\rho$`],
        answer: 0,
        explanation: 'Adding the squares of all three component conversions collapses to $\\rho^{2}$ — distance from the origin is the coordinate.',
      },
      {
        q: 'The volume of the ball $\\rho \\le a$ is:',
        options: [`$\\frac{4\\pi a^{3}}{3}$`, `$\\frac{2\\pi a^{3}}{3}$`, `$4\\pi a^{2}$`, `$\\pi a^{3}$`],
        answer: 0,
        explanation: 'Integrating the element over the full parameter box: $\\frac{a^{3}}{3} \\cdot 2 \\cdot 2\\pi = \\frac{4\\pi a^{3}}{3}$.',
      },
      {
        q: 'The upper half of the ball $\\rho \\le 1$ (where $z \\ge 0$) has $\\phi$-limits:',
        options: [`$0 \\le \\phi \\le \\frac{\\pi}{2}$`, `$0 \\le \\phi \\le \\pi$`, `$\\frac{\\pi}{2} \\le \\phi \\le \\pi$`, `$0 \\le \\phi \\le \\frac{\\pi}{4}$`],
        answer: 0,
        explanation: 'The condition $z = \\rho\\cos\\phi \\ge 0$ means $\\cos\\phi \\ge 0$, so $\\phi$ stops at the equator $\\frac{\\pi}{2}$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.10
  {
    sectionId: 'calc-ch15-s10',
    readingTime: 9,
    intro: 'Substitution — the single most useful trick of Chapter 5 — has an exact analog for double and triple integrals: change both variables at once, and pay for it with a determinant called the Jacobian that measures how the transformation stretches area locally. Every coordinate system in this chapter now falls out of one theorem: polar, cylindrical and spherical elements are just Jacobians, and genuinely new substitutions crack integrals no standard system touches.',
    objectives: [
      'Define the Jacobian of a transformation and compute it as a determinant',
      'State and apply the change of variables theorem for double integrals',
      'Use the inverse Jacobian relation to simplify computations',
      'Verify the polar and spherical volume elements as Jacobians',
      'Apply linear and ratio substitutions to parallelogram and trapezoid regions',
    ],
    concepts: [
      {
        term: 'Why substitution generalizes',
        kind: 'insight',
        statement: 'The one-dimensional rule $\\int f(g(x))g^{\\prime}(x)\\,dx = \\int f(u)\\,du$ charges a **derivative factor** for re-labeling. In two dimensions the local stretch of a transformation is an area scale, and area scaling in two directions is measured by a **determinant**.',
        detail: 'A small $du \\times dv$ rectangle maps to a tiny parallelogram in the $xy$-plane whose area is $\\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right| du\\,dv$ — the absolute determinant of the linear map that best approximates the transformation at the point.',
      },
      {
        term: 'Transformations',
        kind: 'definition',
        statement: 'A **transformation** $T$ maps a region $S$ in the $uv$-plane to a region $R = T(S)$ in the $xy$-plane by $$T(u, v) = (x, y), \\qquad x = x(u, v), \\quad y = y(u, v).$$ It is **one-to-one** on the interior of $S$ if distinct points map to distinct points, so no two pieces of the region overlap.',
        detail: 'One-to-one matters for counting: an overlapping transformation would sweep parts of $R$ multiple times and over-count the integral. Polar coordinates fail one-to-one at the origin ($r = 0$ collapses all $\\theta$), but a single boundary curve of zero area does no harm — that is why the theorem tolerates exceptions on boundary sets.',
      },
      {
        term: 'The Jacobian',
        kind: 'definition',
        statement: 'The **Jacobian** of $T$ is the determinant of the matrix of first partial derivatives: $$\\frac{\\partial(x, y)}{\\partial(u, v)} = \\begin{vmatrix} \\dfrac{\\partial x}{\\partial u} & \\dfrac{\\partial x}{\\partial v} \\\\[6pt] \\dfrac{\\partial y}{\\partial u} & \\dfrac{\\partial y}{\\partial v} \\end{vmatrix}.$$',
        detail: 'Its absolute value at a point is the local area multiplier: areas of small regions scale by $|J|$ there. A zero Jacobian means the transformation collapses a direction — precisely where one-to-one fails.',
      },
      {
        term: 'The change of variables theorem',
        kind: 'theorem',
        statement: 'If $T$ is a one-to-one transformation (with nonzero Jacobian on the interior) from $S$ onto $R$, then $$\\iint_{R} f(x, y)\\,dA = \\iint_{S} f\\big(x(u, v), y(u, v)\\big) \\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right| du\\,dv.$$',
        detail: 'Change the integrand by substitution, multiply by the absolute Jacobian, and rebuild the limits on the new region $S$. For triple integrals the identical statement holds with a $3 \\times 3$ determinant.',
      },
      {
        term: 'The inverse Jacobian relation',
        kind: 'method',
        statement: 'Forward and backward Jacobians are reciprocals: $$\\frac{\\partial(x, y)}{\\partial(u, v)} = \\frac{1}{\\dfrac{\\partial(u, v)}{\\partial(x, y)}}.$$ Computing $\\frac{\\partial(u, v)}{\\partial(x, y)}$ from the substitution and inverting is often far easier than solving for $x$ and $y$ first.',
        detail: 'This mirrors the one-dimensional feel of $\\frac{du}{dx} = 1 / \\frac{dx}{du}$, and it is the practical shortcut whenever the substitution is given but inverting it is algebraically unpleasant.',
      },
      {
        term: 'All coordinate systems as Jacobians',
        kind: 'notation',
        statement: 'The theorem subsumes the whole chapter: $\\left|\\frac{\\partial(x, y)}{\\partial(r, \\theta)}\\right| = r$ gives polar area, $\\left|\\frac{\\partial(x, y, z)}{\\partial(r, \\theta, z)}\\right| = r$ gives cylindrical volume, and $\\left|\\frac{\\partial(x, y, z)}{\\partial(\\rho, \\theta, \\phi)}\\right| = \\rho^{2}\\sin\\phi$ gives spherical volume.',
        detail: 'So the mysterious factors accumulated across Sections 15.4, 15.8 and 15.9 were never ad-hoc patches — they are three instances of a single determinant, computed once and for all by this section.',
      },
    ],
    examples: [
      {
        title: 'The polar Jacobian check',
        problem: 'Verify that the Jacobian of the polar transformation $x = r\\cos\\theta$, $y = r\\sin\\theta$ is $\\frac{\\partial(x, y)}{\\partial(r, \\theta)} = r$, recovering the polar area element.',
        steps: [
          { label: 'Step 1: Compute the four partials', text: '$\\frac{\\partial x}{\\partial r} = \\cos\\theta$, $\\frac{\\partial x}{\\partial \\theta} = -r\\sin\\theta$, $\\frac{\\partial y}{\\partial r} = \\sin\\theta$, $\\frac{\\partial y}{\\partial \\theta} = r\\cos\\theta$.' },
          { label: 'Step 2: Form the determinant', text: '$\\frac{\\partial(x, y)}{\\partial(r, \\theta)} = \\begin{vmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{vmatrix} = (r\\cos\\theta)(\\cos\\theta) - (-r\\sin\\theta)(\\sin\\theta)$.' },
          { label: 'Step 3: Simplify with the Pythagorean identity', text: '$= r\\cos^{2}\\theta + r\\sin^{2}\\theta = r(\\cos^{2}\\theta + \\sin^{2}\\theta) = r$.' },
          { label: 'Step 4: Interpret', text: 'Since $r \\ge 0$, the absolute Jacobian is $r$ itself — the polar element $dA = r\\,dr\\,d\\theta$ of Section 15.4 is exactly this determinant, and area stretching by $r$ is now a theorem rather than a geometric aside.' },
        ],
        result: 'The Jacobian is $r$, as promised; one determinant unifies the polar, cylindrical ($r$) and spherical ($\\rho^{2}\\sin\\phi$) elements.',
      },
      {
        title: 'A linear change of variables',
        problem: 'Evaluate $\\displaystyle\\iint_{R} (x + y)^{2}\\,dA$ where $R$ is the parallelogram bounded by the lines $x + y = 1$, $x + y = 2$, $x - y = 0$ and $x - y = 2$.',
        steps: [
          { label: 'Step 1: Choose the substitution from the boundary', text: 'The boundary lines scream for $u = x + y$ and $v = x - y$: the region becomes the rectangle $1 \\le u \\le 2$, $0 \\le v \\le 2$.' },
          { label: 'Step 2: Invert the transformation', text: 'Adding and subtracting the defining equations gives $x = \\frac{u + v}{2}$ and $y = \\frac{u - v}{2}$.' },
          { label: 'Step 3: Compute the Jacobian', text: '$\\frac{\\partial(x, y)}{\\partial(u, v)} = \\begin{vmatrix} \\frac{1}{2} & \\frac{1}{2} \\\\ \\frac{1}{2} & -\\frac{1}{2} \\end{vmatrix} = -\\frac{1}{4} - \\frac{1}{4} = -\\frac{1}{2}$, so the absolute value is $\\frac{1}{2}$ — the parallelogram is half as wide per unit of the new coordinates.' },
          { label: 'Step 4: Transform the integral', text: 'The integrand is already $u^{2}$, so $\\iint_{R} (x + y)^{2}\\,dA = \\int_{1}^{2} \\int_{0}^{2} u^{2} \\cdot \\frac{1}{2}\\; dv\\, du$.' },
          { label: 'Step 5: Evaluate on the rectangle', text: '$\\frac{1}{2} \\cdot \\left(\\int_{0}^{2} dv\\right) \\cdot \\left(\\int_{1}^{2} u^{2}\\,du\\right) = \\frac{1}{2} \\cdot 2 \\cdot \\frac{7}{3} = \\frac{7}{3}$.' },
        ],
        result: 'The integral over the parallelogram is $\\frac{7}{3}$ — a slanted region tamed into a rectangle by reading its boundary equations.',
      },
      {
        title: 'A ratio substitution: cos((x − y)/(x + y))',
        problem: 'Evaluate $\\displaystyle\\iint_{R} \\cos\\!\\left(\\frac{x - y}{x + y}\\right) dA$ where $R$ is the trapezoid with vertices $(1, 0)$, $(2, 0)$, $(0, 2)$ and $(0, 1)$.',
        steps: [
          { label: 'Step 1: Choose the substitution', text: 'The integrand dictates $u = \\frac{x - y}{x + y}$ and $v = x + y$. The four sides of the trapezoid are $x + y = 1$, $x + y = 2$ and the coordinate axes (where $u = 1$ and $u = -1$ respectively).' },
          { label: 'Step 2: Map the corners', text: 'The corners map as $(1, 0) \\to (u, v) = (1, 1)$, $(2, 0) \\to (1, 2)$, $(0, 1) \\to (-1, 1)$ and $(0, 2) \\to (-1, 2)$ — the trapezoid becomes the rectangle $-1 \\le u \\le 1$, $1 \\le v \\le 2$.' },
          { label: 'Step 3: Invert the transformation', text: 'From $u v = x - y$ and $v = x + y$: $x = \\frac{v(1 + u)}{2}$ and $y = \\frac{v(1 - u)}{2}$.' },
          { label: 'Step 4: Compute the Jacobian', text: '$\\frac{\\partial(x, y)}{\\partial(u, v)} = \\begin{vmatrix} \\frac{v}{2} & \\frac{1 + u}{2} \\\\ -\\frac{v}{2} & \\frac{1 - u}{2} \\end{vmatrix} = \\frac{v(1 - u)}{4} + \\frac{v(1 + u)}{4} = \\frac{v}{2} > 0$ on the region.' },
          { label: 'Step 5: Transform the integral', text: '$\\iint_{R} \\cos\\!\\left(\\frac{x - y}{x + y}\\right) dA = \\int_{1}^{2} \\int_{-1}^{1} \\cos(u) \\cdot \\frac{v}{2}\\; du\\, dv$.' },
          { label: 'Step 6: Evaluate on the rectangle', text: 'The integral factors: $\\left(\\int_{1}^{2} \\frac{v}{2}\\,dv\\right)\\left(\\int_{-1}^{1} \\cos u\\,du\\right) = \\frac{3}{4} \\cdot 2\\sin 1 = \\frac{3}{2}\\sin 1 \\approx 1.262$.' },
        ],
        result: 'The integral equals $\\frac{3}{2}\\sin 1 \\approx 1.262$ — a substitution no standard coordinate system would ever suggest, discovered by staring at the integrand.',
      },
    ],
    keyTakeaways: [
      'A change of variables re-labels a region; the price of re-labeling area is the absolute Jacobian determinant.',
      'The Jacobian is the determinant of first partials $\\frac{\\partial(x, y)}{\\partial(u, v)}$; it vanishes exactly where the transformation collapses.',
      'The theorem: replace the integrand by substitution, multiply by $|J|$, and rebuild limits on the new region.',
      'Forward and backward Jacobians are reciprocals — compute whichever is easier and invert.',
      'Boundary equations name the substitution: lines $x \\pm y = $ constant beg for $u = x + y$, $v = x - y$.',
      'Polar ($r$), cylindrical ($r$) and spherical ($\\rho^{2}\\sin\\phi$) elements are all Jacobians — one theorem rules the chapter.',
    ],
    quiz: [
      {
        q: 'The Jacobian $\\frac{\\partial(x, y)}{\\partial(u, v)}$ is:',
        options: ['The determinant of the matrix of the four first partial derivatives', 'The trace of the matrix of first partials', 'The product $\\frac{\\partial x}{\\partial u} \\cdot \\frac{\\partial y}{\\partial v}$ only', 'Always equal to $1$ for linear maps'],
        answer: 0,
        explanation: 'It is the full $2 \\times 2$ determinant — it measures the local area stretch of the transformation.',
      },
      {
        q: 'For $x = r\\cos\\theta$, $y = r\\sin\\theta$, the absolute Jacobian $\\left|\\frac{\\partial(x, y)}{\\partial(r, \\theta)}\\right|$ equals:',
        options: [`$r$`, `$1$`, `$r^{2}$`, `$\\frac{1}{r}$`],
        answer: 0,
        explanation: 'The determinant expands to $r\\cos^{2}\\theta + r\\sin^{2}\\theta = r$ — exactly the factor in polar integrals.',
      },
      {
        q: 'If $\\left|\\frac{\\partial(u, v)}{\\partial(x, y)}\\right| = 4$ everywhere (nonzero), then $\\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right| =$:',
        options: [`$\\frac{1}{4}$`, `$4$`, `$-4$`, `$16$`],
        answer: 0,
        explanation: 'Forward and backward Jacobians are reciprocals, the two-dimensional version of inverting a derivative.',
      },
      {
        q: 'A transformation maps a region $S$ onto $R$ with constant $|J| = 3$. If $S$ has area $5$, the area of $R$ is:',
        options: [`$15$`, `$5$`, `$\\frac{5}{3}$`, `$8$`],
        answer: 0,
        explanation: 'Areas scale locally by the absolute Jacobian; with $J$ constant, area of $R = 3 \\times 5 = 15$.',
      },
      {
        q: 'The spherical volume element $\\rho^{2}\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$ is, in the language of this section:',
        options: ['The absolute Jacobian of the spherical map $(\\rho, \\theta, \\phi) \\mapsto (x, y, z)$', 'An approximation valid only near the origin', 'A convention with no derivation', 'The polar element with $r$ replaced by $\\rho$'],
        answer: 0,
        explanation: 'Section 15.9’s element is exactly $\\left|\\frac{\\partial(x, y, z)}{\\partial(\\rho, \\theta, \\phi)}\\right|$, computed as a $3 \\times 3$ determinant.',
      },
      // PYQ-pattern — Jacobian of a linear map (rephrased, values changed)
      {
        q: 'For $x = u + v$ and $y = u - v$, the absolute Jacobian $\\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right|$ equals:',
        options: [`$0$`, `$1$`, `$4$`, `$2$`],
        answer: 3,
        explanation: 'Step 1: Restate the Jacobian as the determinant $\\begin{vmatrix} x_{u} & x_{v} \\\\ y_{u} & y_{v} \\end{vmatrix}$. Step 2: Recall the key formula $J = x_{u}y_{v} - x_{v}y_{u}$. Step 3: Compute partials as $x_{u} = 1$, $x_{v} = 1$, $y_{u} = 1$, $y_{v} = -1$. Step 4: Evaluate $J = (1)(-1) - (1)(1) = -2$, so $|J| = 2$. Step 5: The distractors fail since $0$ would mean a collapsing map, $1$ ignores the shear, and $4$ squares the factor. Step 6: Hence the absolute Jacobian is $2$.'
      },
    ],
  },
]
