import type { SectionContent } from '../library'

// ============================================================================
// Mathematics Companion — Chapter 8: Parabola, Ellipse & Hyperbola
// Master study content (sections 8.1 - 8.4).
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const mathCompanionCh08Content: SectionContent[] = [
  // ---------------------------------------------------------------- 8.1
  {
    sectionId: 'math-a9-s1',
    readingTime: 9,
    intro: 'The parabola is the locus of points equidistant from a focus and a directrix, and its standard form $y^{2} = 4ax$ concentrates focal, parametric and tangent properties in one parameter. Focal chords, the parametric point $(at^{2}, 2at)$ and the tangent-normal duality drive most problem solving. This section develops those tools from the definition outward.',
    objectives: [
      'Use $y^{2} = 4ax$ with focus, directrix, axis and latus rectum for coordinates and lengths',
      'Parametrize points as $(at^{2}, 2at)$ and chords with $t_{1}t_{2} = -1$ for focal cases',
      'Write tangents $ty = x + at^{2}$, normals and chord-of-contact forms for computations'
    ],
    concepts: [
      {
        term: 'Standard parabola and focal data',
        kind: 'definition',
        statement: 'The **standard parabola** $y^{2} = 4ax$ with $a > 0$ has focus `focus-point` $(a, 0)$, directrix $x = -a$, axis the $x$-axis and latus rectum $4a$.',
        detail: 'Vertex at origin. Focal distance of $(x_{1}, y_{1})$ on the curve is $x_{1} + a$. Other orientations rotate these data: $y^{2} = -4ax$ opens left, $x^{2} = 4ay$ opens up, $x^{2} = -4ay$ opens down.'
      },
      {
        term: 'Parametric point and focal chord',
        kind: 'theorem',
        statement: 'Every point can be written as the **parametric point** $(at^{2}, 2at)$, and the `focal-condition` chord joining $t_{1}, t_{2}$ passes through the focus exactly when $t_{1}t_{2} = -1$.',
        detail: 'Chord joining $t_{1}, t_{2}$: $t_{1}t_{2}y - 2x(t_{1}+t_{2})$ in rearranged linear form $T(t_{1}+t_{2})$-style; equation is $2x - (t_{1}+t_{2})y + 2at_{1}t_{2} = 0$? Standard chord: $(t_{1}+t_{2})y = 2x + 2at_{1}t_{2}$. Length of focal chord with parameter $t$ is $a(t+1/t)^{2}$.'
      },
      {
        term: 'Tangent in point and parametric forms',
        kind: 'theorem',
        statement: 'The **tangent** at $(x_{1}, y_{1})$ is $yy_{1} = 2a(x+x_{1})$, and at parameter `tangent-t` $t$ it is $ty = x + at^{2}$.',
        detail: 'Point of intersection of tangents at $t_{1}, t_{2}$ is $(at_{1}t_{2}, a(t_{1}+t_{2}))$. If the intersection lies on the directrix, the chord is focal. Condition for $y = mx + c$ to touch: $c = \\frac{a}{m}$.'
      },
      {
        term: 'Normal and co-normal points',
        kind: 'theorem',
        statement: 'The **normal** at $(at^{2}, 2at)$ is $y + tx = 2at + at^{3}$ with `normal-slope` $-t$, and normals at distinct $t_{1}, t_{2}, t_{3}$ are concurrent under $t_{1}t_{2}+t_{2}t_{3}+t_{3}t_{1} + 2 = 0$ in special configurations.',
        detail: 'Co-normal points from a given $(x_{1}, y_{1})$ satisfy the cubic $at^{3} + (2a-x_{1})t - y_{1} = 0$; sum of roots is zero, so $t_{1}+t_{2}+t_{3} = 0$. Foot of normal from focus-related data simplifies via $t^{2} = \\frac{x_{1}}{a} - 2$.'
      },
      {
        term: 'Chord of contact and polar',
        kind: 'theorem',
        statement: 'From $(x_{1}, y_{1})$ outside, the **contact chord** is $yy_{1} - 2a(x+x_{1}) = 0$ in `T-form` $T = 0$, and the chord with midpoint $(x_{1}, y_{1})$ is $T = S_{1}$.',
        detail: 'Here $S = y^{2}-4ax$, $T = yy_{1}-2a(x+x_{1})$, $S_{1} = y_{1}^{2}-4ax_{1}$. Pair of tangents is $T^{2} = SS_{1}$. Director locus (perpendicular tangents) is the directrix $x + a = 0$.'
      }
    ],
    examples: [
      {
        title: 'Focal chord length from a parameter',
        problem: 'A focal chord of $y^{2} = 8x$ makes angle $60^{\\circ}$ with the axis. Find its length and endpoints.',
        steps: [
          { label: 'Step 1', text: 'Here $4a = 8$ so $a = 2$. Focal chord length formula:\n```tex\nL = 4a cosec^2(theta) = 8 cosec^2(60°)\n```\nSince $\\sin 60^{\\circ} = \\frac{\\sqrt{3}}{2}$, $\\csc^{2} = \\frac{4}{3}$.' },
          { label: 'Step 2', text: 'Hence $L = 8 \\cdot \\frac{4}{3} = \\frac{32}{3}$. The chord passes through focus $(2, 0)$ with slope $\\tan 60^{\\circ} = \\sqrt{3}$.' },
          { label: 'Step 3', text: 'Line $y = \\sqrt{3}(x-2)$ meets $y^{2} = 8x$: $3(x-2)^{2} = 8x$, so $3x^{2} - 20x + 12 = 0$, giving $x = 6$ and $x = \\frac{2}{3}$ with $y = 4\\sqrt{3}$ and $y = -\\frac{4}{\\sqrt{3}}$.' }
        ],
        result: 'Length $\\frac{32}{3}$ with endpoints $(6, 4\\sqrt{3})$ and $\\left(\\frac{2}{3}, -\\frac{4}{\\sqrt{3}}\\right)$.'
      },
      {
        title: 'Tangents from directrix are perpendicular',
        problem: 'Show that tangents drawn from any point on the directrix of $y^{2} = 4ax$ to the parabola are perpendicular.',
        steps: [
          { label: 'Step 1', text: 'Take point $(-a, k)$ on directrix $x = -a$. Chord of contact is $ky - 2a(x - a) = 0$? Using $T = 0$: $ky = 2a(x - a)$ rearranged.' },
          { label: 'Step 2', text: 'Joint equation of the two tangents from $(-a, k)$ is $T^{2} = SS_{1}$ with $S_{1} = k^{2} + 4a^{2}$. Coefficient sum $A + B$ of $x^{2}$ and $y^{2}$ vanishes, the perpendicularity certificate.' },
          { label: 'Step 3', text: 'Explicitly, tangents $ty = x + at^{2}$ through $(-a,k)$ give $at^{2} - kt - a = 0$ with product $t_{1}t_{2} = -1$, so slopes $\\frac{1}{t_{1}}, \\frac{1}{t_{2}}$ multiply to $-1$.' }
        ],
        result: 'Product of tangent slopes is $-1$, so the pair is perpendicular with the chord through focus.'
      }
    ],
    keyTakeaways: [
      '$y^{2} = 4ax$ packs focus $(a,0)$, directrix $x = -a$ and latus rectum $4a$ into one parameter.',
      'Parametrize as $(at^{2}, 2at)$; focal chords satisfy $t_{1}t_{2} = -1$ with length $a(t+1/t)^{2}$.',
      'Tangent $ty = x + at^{2}$ and touch condition $c = \\frac{a}{m}$ convert tangency into algebra.',
      '$T = 0$ and $T = S_{1}$ handle contact and midpoint chords; perpendicular tangents meet on the directrix.'
    ],
    quiz: [
      {
        q: 'Focus and directrix of $y^{2} = 12x$ are:',
        options: [`$(3, 0)$ and $x = -3$`, `$(0, 3)$ and $y = -3$`, `$(12, 0)$ and $x = -12$`, `$(6, 0)$ and $x = -6$`],
        answer: 0,
        explanation: 'Step 1: Compare with $y^{2} = 4ax$ to get $4a = 12$. Step 2: So $a = 3$. Step 3: Focus is $(a, 0) = (3, 0)$. Step 4: Directrix is $x = -a = -3$.'
      },
      // PYQ-pattern: focal chord length via latus rectum and angle
      {
        q: 'Length of focal chord of $y^{2} = 4ax$ inclined at angle $\\theta$ to the axis is:',
        options: [`$4a\\sin^{2}\\theta$`, `$4a\\csc^{2}\\theta$`, `$2a\\sec^{2}\\theta$`, `$a\\csc\\theta$`],
        answer: 1,
        explanation: 'Step 1: Parametrize endpoints with $t$ and $-1/t$. Step 2: Distance simplifies to $a(t+1/t)^{2}$. Step 3: Relate $t = \\tan\\left(\\frac{\\pi}{2}-\\theta\\right)$-style to get $\\csc^{2}\\theta$. Step 4: Result is $4a\\csc^{2}\\theta$, minimum $4a$ when transverse.'
      },
      {
        q: 'Point of intersection of tangents at $t_{1}, t_{2}$ on $y^{2} = 4ax$ is:',
        options: [`$(at_{1}t_{2}, a(t_{1}+t_{2}))$`, `$(a(t_{1}+t_{2}), at_{1}t_{2})$`, `$(at_{1}^{2}, 2at_{2})$`, `$(0, a(t_{1}+t_{2}))$`],
        answer: 0,
        explanation: 'Step 1: Write tangents $t_{1}y = x + at_{1}^{2}$ and $t_{2}y = x + at_{2}^{2}$. Step 2: Subtract to get $y = a(t_{1}+t_{2})$. Step 3: Substitute back for $x = at_{1}t_{2}$. Step 4: First option matches.'
      },
      {
        q: 'Condition for $y = mx + c$ to touch $y^{2} = 4ax$ is:',
        options: [`$c = am$`, `$c = \\frac{a}{m}$`, `$c^{2} = 4am$`, `$m = ac$`],
        answer: 1,
        explanation: 'Step 1: Substitute to get $m^{2}x^{2} + 2(mc-2a)x + c^{2} = 0$. Step 2: Set discriminant to zero. Step 3: Obtain $(mc-2a)^{2} - m^{2}c^{2} = 0$. Step 4: Simplify to $c = \\frac{a}{m}$.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Parabola as extremal curve and reflective property',
        blocks: [
          {
            kind: 'theorem',
            body: 'The parabola $y^{2} = 4ax$ with $a > 0$ is the locus of points equidistant from the focus $(a,0)$ and the directrix $x = -a$. Its **reflective property** states that the tangent at any point bisects the angle between the focal radius and the horizontal ray through the point, so rays parallel to the axis reflect through the focus. The latus rectum through the focus has length $4a$ and is the shortest focal chord: every other focal chord has length $a(t - 1/t)^{2} + 4a \\ge 4a$ in the parametric form with parameters $t$ and $-1/t$ at its ends.'
          },
          {
            kind: 'proof',
            body: 'At $P = (at^{2}, 2at)$ the tangent is $ty = x + at^{2}$ with slope $1/t$, while the focal vector $P - (a,0) = (a(t^{2}-1), 2at)$ has angle whose bisector computation gives equal incidence angles with the horizontal. Analytically, the unit tangent direction $u$ satisfies $(u \\cdot v_{1})/(|u||v_{1}|) = (u \\cdot v_{2})/(|u||v_{2}|)$ for $v_{1}$ toward the focus and $v_{2} = (1,0)$, verified by substituting $u = (t,1)$ up to scale. Focal chords correspond to parameter pairs with product $-1$, and distance between $(at_{1}^{2},2at_{1})$ and $(at_{2}^{2},2at_{2})$ under $t_{1}t_{2} = -1$ simplifies to $a(t_{1} + 1/t_{1})^{2} \\ge 4a$.'
          },
          {
            kind: 'example',
            heading: 'Tangency condition and extremal chord',
            body: 'The line $y = mx + c$ meets $y^{2} = 4ax$ in a quadratic with discriminant $4(mc-2a)^{2} - 4m^{2}c^{2}$, so tangency holds exactly when $c = a/m$. Each slope $m \\ne 0$ therefore owns one tangent, and the point of contact moves to infinity as $m \\to 0$, reflecting that the axis direction is asymptotic. Among focal chords, $t = 1$ gives endpoints $(a,2a)$ and $(a,-2a)$ with minimal length $4a$, while $|t| \\to 0$ or $\\infty$ sends the other endpoint far away and the length to infinity. Hence the latus rectum is the unique length minimizer.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 8.2
  {
    sectionId: 'math-a9-s2',
    readingTime: 9,
    intro: 'The ellipse $\\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1$ generalizes the circle with two foci whose distances sum to a constant $2a$. Eccentricity, latus rectum, auxiliary circle and director circle organize its metric properties. This section builds the standard toolkit including parametric points and tangent forms.',
    objectives: [
      'Relate $a$, $b$, $c$ and $e$ with foci, vertices, latus rectum and focal distances',
      'Use $(a\\cos\\theta, b\\sin\\theta)$ and the auxiliary circle for parametric tasks',
      'Write tangents, normals, director circle and chord-with-midpoint equations'
    ],
    concepts: [
      {
        term: 'Standard ellipse and eccentricity',
        kind: 'definition',
        statement: 'The **standard ellipse** $\\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1$ with $a > b$ has `focus-pair` $(\\pm ae, 0)$ where $b^{2} = a^{2}(1-e^{2})$ and $e < 1$.',
        detail: 'Vertices $(\\pm a, 0)$, co-vertices $(0, \\pm b)$. Major axis $2a$, minor axis $2b$. Focal distances of $(x_{1}, y_{1})$: $a - ex_{1}$ and $a + ex_{1}$, summing to $2a$. Latus rectum $\\frac{2b^{2}}{a}$.'
      },
      {
        term: 'Parametric point and auxiliary circle',
        kind: 'theorem',
        statement: 'Points take the **eccentric-angle form** $(a\\cos\\theta, b\\sin\\theta)$, where `auxiliary-map` $\\theta$ is read off the auxiliary circle $x^{2} + y^{2} = a^{2}$.',
        detail: 'Draw the vertical line through $(a\\cos\\theta, 0)$ up to the auxiliary circle, then project horizontally onto the ellipse. Area $\\pi ab$ follows by scaling the circle area $\\pi a^{2}$ by $\\frac{b}{a}$.'
      },
      {
        term: 'Tangent and normal forms',
        kind: 'theorem',
        statement: 'The **tangent** at $(x_{1}, y_{1})$ is $\\frac{xx_{1}}{a^{2}} + \\frac{yy_{1}}{b^{2}} = 1$, and the `slope-form` $y = mx + \\sqrt{a^{2}m^{2}+b^{2}}$ touches with $c^{2} = a^{2}m^{2}+b^{2}$.',
        detail: 'Parametric tangent at $\\theta$: $\\frac{x\\cos\\theta}{a} + \\frac{y\\sin\\theta}{b} = 1$. Normal at $(x_{1}, y_{1})$: $\\frac{a^{2}x}{x_{1}} - \\frac{b^{2}y}{y_{1}} = a^{2}-b^{2}$. Chord of contact from outside is the same $T = 0$ pattern.'
      },
      {
        term: 'Director circle',
        kind: 'theorem',
        statement: 'The **director locus** of perpendicular tangents to the ellipse is the `director-form` $x^{2} + y^{2} = a^{2} + b^{2}$.',
        detail: 'Derive by eliminating $m$ between $y = mx + \\sqrt{a^{2}m^{2}+b^{2}}$ and its perpendicular counterpart with slope $-1/m$. For a circle ($a = b$) this reduces to radius $a\\sqrt{2}$, matching the parabola-style director idea.'
      },
      {
        term: 'Chords with midpoint and pole-polar',
        kind: 'theorem',
        statement: 'With $S = \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} - 1$, the chord with **midpoint** $(x_{1}, y_{1})$ is `midpoint-form` $T = S_{1}$ where $T = \\frac{xx_{1}}{a^{2}} + \\frac{yy_{1}}{b^{2}} - 1$.',
        detail: 'Chord of contact and polar share $T = 0$. Pair of tangents is $T^{2} = SS_{1}$. Equal-chord properties and bisected-chord loci reduce to equating $T - S_{1}$ coefficients.'
      }
    ],
    examples: [
      {
        title: 'Foci and latus rectum from an equation',
        problem: 'For $9x^{2} + 25y^{2} = 225$, find $a, b, e$, foci and latus rectum.',
        steps: [
          { label: 'Step 1', text: 'Divide by $225$:\n```tex\nx^2/25 + y^2/9 = 1\n```\nSo $a^{2} = 25$, $b^{2} = 9$, $a = 5$, $b = 3$.' },
          { label: 'Step 2', text: 'Eccentricity: $e = \\sqrt{1-\\frac{9}{25}} = \\frac{4}{5}$. Foci $(\\pm ae, 0) = (\\pm 4, 0)$.' },
          { label: 'Step 3', text: 'Latus rectum $\\frac{2b^{2}}{a} = \\frac{18}{5}$. Focal distances of vertex $(5,0)$ are $a-ae = 1$ and $a+ae = 9$, summing to $10 = 2a$.' }
        ],
        result: '$a = 5$, $b = 3$, $e = \\frac{4}{5}$, foci $(\\pm 4, 0)$, latus rectum $\\frac{18}{5}$.'
      },
      {
        title: 'Tangent with a prescribed slope',
        problem: 'Find tangents to $\\frac{x^{2}}{9} + \\frac{y^{2}}{4} = 1$ with slope $2$.',
        steps: [
          { label: 'Step 1', text: 'Use $y = mx + \\sqrt{a^{2}m^{2}+b^{2}}$ with $a^{2} = 9$, $b^{2} = 4$, $m = 2$: $c = \\pm\\sqrt{36+4} = \\pm\\sqrt{40} = \\pm 2\\sqrt{10}$.' },
          { label: 'Step 2', text: 'Lines: $y = 2x + 2\\sqrt{10}$ and $y = 2x - 2\\sqrt{10}$.' },
          { label: 'Step 3', text: 'Verify contact by substitution discriminant; each meets once because $c^{2} = a^{2}m^{2}+b^{2}$ holds by construction.' }
        ],
        result: 'Two parallel tangents $y = 2x \\pm 2\\sqrt{10}$.'
      }
    ],
    keyTakeaways: [
      '$b^{2} = a^{2}(1-e^{2})$ binds axes to eccentricity; foci at $(\\pm ae, 0)$ with focal sum $2a$.',
      'Parametrize as $(a\\cos\\theta, b\\sin\\theta)$ via the auxiliary circle $x^{2}+y^{2} = a^{2}$.',
      'Tangent $\\frac{xx_{1}}{a^{2}}+\\frac{yy_{1}}{b^{2}} = 1$ and touch condition $c^{2} = a^{2}m^{2}+b^{2}$ handle tangency.',
      'Perpendicular tangents meet on $x^{2}+y^{2} = a^{2}+b^{2}$; midpoint chords follow $T = S_{1}$.'
    ],
    quiz: [
      {
        q: 'For $\\frac{x^{2}}{25} + \\frac{y^{2}}{9} = 1$, eccentricity equals:',
        options: [`$\\frac{3}{5}$`, `$\\frac{4}{5}$`, `$\\frac{5}{4}$`, `$\\frac{4}{3}$`],
        answer: 1,
        explanation: 'Step 1: Identify $a^{2} = 25$, $b^{2} = 9$. Step 2: Use $e = \\sqrt{1-b^{2}/a^{2}}$. Step 3: Compute $1-\\frac{9}{25} = \\frac{16}{25}$. Step 4: Square root gives $\\frac{4}{5}$.'
      },
      {
        q: 'Director circle of $\\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1$ is:',
        options: [`$x^{2} + y^{2} = a^{2} - b^{2}$`, `$x^{2} + y^{2} = a^{2} + b^{2}$`, `$\\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 2$`, `$x^{2} + y^{2} = ab$`],
        answer: 1,
        explanation: 'Step 1: Start from tangent $y = mx+c$ with $c^{2} = a^{2}m^{2}+b^{2}$. Step 2: Impose perpendicular pair through $(x_{1}, y_{1})$. Step 3: Eliminate $m$ to get $x_{1}^{2}+y_{1}^{2} = a^{2}+b^{2}$. Step 4: Second option matches.'
      },
      // PYQ-pattern: tangent slope form with c-squared condition
      {
        q: 'Number of tangents to the ellipse $\\frac{x^{2}}{9}+\\frac{y^{2}}{4} = 1$ with slope $2$ is:',
        options: [`$0$`, `$1$`, `$2$`, 'Infinitely many'],
        answer: 2,
        explanation: 'Step 1: Touch condition gives $c = \\pm\\sqrt{9(4)+4}$. Step 2: Both signs give real $c$. Step 3: Hence two distinct parallel lines. Step 4: So count is $2$.'
      },
      {
        q: 'Latus rectum of $\\frac{x^{2}}{16} + \\frac{y^{2}}{9} = 1$ equals:',
        options: [`$\\frac{9}{2}$`, `$\\frac{9}{4}$`, `$\\frac{9}{8}$`, `$8$`],
        answer: 0,
        explanation: 'Step 1: Read $b^{2} = 9$, $a = 4$. Step 2: Formula is $\\frac{2b^{2}}{a}$. Step 3: Compute $\\frac{18}{4} = \\frac{9}{2}$. Step 4: First option matches.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.3
  {
    sectionId: 'math-a9-s6',
    readingTime: 9,
    intro: 'The hyperbola $\\frac{x^{2}}{a^{2}} - \\frac{y^{2}}{b^{2}} = 1$ is the difference-of-distances twin of the ellipse, with eccentricity above one and a pair of asymptotes that control its far-field shape. Conjugate axis, transverse axis and rectangular specializations complete the picture. This section develops asymptotes, parametric points and tangent conditions in parallel with the ellipse.',
    objectives: [
      'Identify transverse axis, conjugate axis, foci and $b^{2} = a^{2}(e^{2}-1)$ for standard hyperbolas',
      'Write asymptotes, their angle and the rectangular-hyperbola specialization',
      'Parametrize as $(a\\sec\\theta, b\\tan\\theta)$ and apply tangent and chord forms'
    ],
    concepts: [
      {
        term: 'Standard hyperbola and eccentricity',
        kind: 'definition',
        statement: 'The **transverse hyperbola** $\\frac{x^{2}}{a^{2}} - \\frac{y^{2}}{b^{2}} = 1$ has `focus-pair` $(\\pm ae, 0)$ with $b^{2} = a^{2}(e^{2}-1)$ and $e > 1$.',
        detail: 'Transverse axis $2a$ along $x$; conjugate axis $2b$ along $y$. Vertices $(\\pm a, 0)$. Focal difference $|PF_{1}-PF_{2}| = 2a$. Latus rectum $\\frac{2b^{2}}{a}$ as for ellipse.'
      },
      {
        term: 'Asymptotes and rectangular hyperbola',
        kind: 'theorem',
        statement: 'The **asymptote pair** is $y = \\pm\\frac{b}{a}x$, equivalently the `asymptote-form` $\\frac{x^{2}}{a^{2}} - \\frac{y^{2}}{b^{2}} = 0$, approached as $|x| \\to \\infty$.',
        detail: 'Angle between asymptotes: $2\\tan^{-1}(b/a)$. Rectangular hyperbola has $a = b$ ($e = \\sqrt{2}$) with perpendicular asymptotes; rotated form $xy = c^{2}$ has axes as asymptotes.'
      },
      {
        term: 'Parametric point',
        kind: 'notation',
        statement: 'Points take the **secant-tangent form** $(a\\sec\\theta, b\\tan\\theta)$, with `rational-branch` alternative $\\left(a\\frac{1+t^{2}}{1-t^{2}}, b\\frac{2t}{1-t^{2}}\\right)$ covering one branch at a time.',
        detail: 'Also $(\\pm a\\cosh u, b\\sinh u)$ via hyperbolic functions. Each branch needs its own parameter range; $\\theta = \\frac{\\pi}{2}$ is excluded where secant is undefined.'
      },
      {
        term: 'Tangent and normal conditions',
        kind: 'theorem',
        statement: 'The **tangent** at $(x_{1}, y_{1})$ is $\\frac{xx_{1}}{a^{2}} - \\frac{yy_{1}}{b^{2}} = 1$, and `slope-touch` $y = mx + c$ touches exactly when $c^{2} = a^{2}m^{2} - b^{2}$.',
        detail: 'Asymptotes are the tangents at infinity. Normal: $\\frac{a^{2}x}{x_{1}} + \\frac{b^{2}y}{y_{1}} = a^{2}+b^{2}$. Chord of contact from outside follows $T = 0$ with minus sign in $T$.'
      },
      {
        term: 'Director circle of hyperbola',
        kind: 'theorem',
        statement: 'Perpendicular tangents to the hyperbola meet on the **director circle** $x^{2} + y^{2} = a^{2} - b^{2}$, real only when the `reality-check` $a > b$ holds.',
        detail: 'If $a = b$ (rectangular), director collapses to the centre point. If $a < b$, no real point admits perpendicular tangents. Midpoint chords again follow $T = S_{1}$ with $S = \\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}}-1$.'
      }
    ],
    examples: [
      {
        title: 'Asymptotes and eccentricity',
        problem: 'Find asymptotes, eccentricity and foci of $4x^{2} - 9y^{2} = 36$.',
        steps: [
          { label: 'Step 1', text: 'Divide by $36$:\n```tex\nx^2/9 - y^2/4 = 1\n```\nSo $a^{2} = 9$, $b^{2} = 4$.' },
          { label: 'Step 2', text: 'Asymptotes $y = \\pm\\frac{b}{a}x = \\pm\\frac{2}{3}x$. Eccentricity $e = \\sqrt{1+\\frac{4}{9}} = \\frac{\\sqrt{13}}{3}$.' },
          { label: 'Step 3', text: 'Foci $(\\pm ae, 0) = (\\pm\\sqrt{13}, 0)$. Latus rectum $\\frac{2b^{2}}{a} = \\frac{8}{3}$.' }
        ],
        result: 'Asymptotes $y = \\pm\\frac{2}{3}x$, $e = \\frac{\\sqrt{13}}{3}$, foci $(\\pm\\sqrt{13}, 0)$.'
      },
      {
        title: 'Tangent parallel to an asymptote test',
        problem: 'Show no tangent to $\\frac{x^{2}}{9} - \\frac{y^{2}}{4} = 1$ is parallel to its asymptote $y = \\frac{2}{3}x$, and find tangents with slope $1$.',
        steps: [
          { label: 'Step 1', text: 'Touch condition $c^{2} = 9m^{2} - 4$. For $m = \\frac{2}{3}$: $c^{2} = 9\\cdot\\frac{4}{9} - 4 = 0$, so $c = 0$ gives the asymptote itself, not a proper tangent.' },
          { label: 'Step 2', text: 'For $m = 1$: $c^{2} = 9 - 4 = 5$, so $c = \\pm\\sqrt{5}$.' },
          { label: 'Step 3', text: 'Tangents $y = x \\pm \\sqrt{5}$ each meet once by discriminant-zero construction.' }
        ],
        result: 'Asymptote slope admits no proper tangent; slope $1$ gives $y = x \\pm \\sqrt{5}$.'
      }
    ],
    keyTakeaways: [
      '$\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}} = 1$ has $b^{2} = a^{2}(e^{2}-1)$, foci $(\\pm ae, 0)$, difference of focal distances $2a$.',
      'Asymptotes $y = \\pm\\frac{b}{a}x$ govern far-field direction; $xy = c^{2}$ is the rotated rectangular form.',
      'Parametrize as $(a\\sec\\theta, b\\tan\\theta)$; tangent $\\frac{xx_{1}}{a^{2}}-\\frac{yy_{1}}{b^{2}} = 1$ with $c^{2} = a^{2}m^{2}-b^{2}$.',
      'Director $x^{2}+y^{2} = a^{2}-b^{2}$ is real only for $a > b$.'
    ],
    quiz: [
      {
        q: 'Eccentricity of $\\frac{x^{2}}{9} - \\frac{y^{2}}{16} = 1$ is:',
        options: [`$\\frac{5}{3}$`, `$\\frac{5}{4}$`, `$\\frac{4}{3}$`, `$\\frac{3}{5}$`],
        answer: 0,
        explanation: 'Step 1: Read $a^{2} = 9$, $b^{2} = 16$. Step 2: Use $e = \\sqrt{1+b^{2}/a^{2}}$. Step 3: Compute $1+\\frac{16}{9} = \\frac{25}{9}$. Step 4: Root is $\\frac{5}{3}$.'
      },
      {
        q: 'Asymptotes of $\\frac{x^{2}}{4} - \\frac{y^{2}}{9} = 1$ are:',
        options: [`$y = \\pm\\frac{2}{3}x$`, `$y = \\pm\\frac{3}{2}x$`, `$y = \\pm\\frac{4}{9}x$`, `$x = \\pm\\frac{2}{3}$`],
        answer: 1,
        explanation: 'Step 1: Read $a = 2$, $b = 3$. Step 2: Asymptotes are $y = \\pm(b/a)x$. Step 3: Ratio is $\\frac{3}{2}$. Step 4: Hence $y = \\pm\\frac{3}{2}x$.'
      },
      // PYQ-pattern: touch condition c-squared equals a-squared m-squared minus b-squared
      {
        q: 'For $y = mx + c$ to touch $\\frac{x^{2}}{4} - \\frac{y^{2}}{9} = 1$, the condition is:',
        options: [`$c^{2} = 4m^{2} + 9$`, `$c^{2} = 4m^{2} - 9$`, `$c^{2} = 9m^{2} - 4$`, `$c = 2m - 3$`],
        answer: 1,
        explanation: 'Step 1: Substitute into hyperbola to get a quadratic in $x$. Step 2: Set discriminant to zero. Step 3: Obtain $c^{2} = a^{2}m^{2}-b^{2} = 4m^{2}-9$. Step 4: Need also $4m^{2} \\ge 9$ for real $c$.'
      },
      {
        q: 'Rectangular hyperbola $xy = 8$ has eccentricity:',
        options: [`$\\sqrt{2}$`, `$2$`, `$1$`, `$\\frac{1}{\\sqrt{2}}$`],
        answer: 0,
        explanation: 'Step 1: Rectangular means $a = b$. Step 2: Then $e = \\sqrt{1+1}$. Step 3: So $e = \\sqrt{2}$ regardless of $c^{2}$. Step 4: First option matches.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Hyperbola asymptotes and inversion geometry',
        blocks: [
          {
            kind: 'theorem',
            body: 'The hyperbola $x^{2}/a^{2} - y^{2}/b^{2} = 1$ has **asymptotes** $y = \\pm (b/a)x$ which it approaches at infinity, eccentricity $e = \\sqrt{1 + b^{2}/a^{2}} > 1$, and foci at $(\\pm ae, 0)$. Inversion in the auxiliary circle exchanges the branches with a lemniscate type curve, while the rectangular case $a = b$ gives $e = \\sqrt{2}$ with perpendicular asymptotes. The tangent condition $c^{2} = a^{2}m^{2} - b^{2}$ with $a^{2}m^{2} \\ge b^{2}$ is sharp: equality gives tangency and violation gives a line missing the curve entirely.'
          },
          {
            kind: 'remark',
            body: 'Far from the origin the constant $1$ on the right becomes negligible, so $x^{2}/a^{2} - y^{2}/b^{2} = 0$ governs the far field and factors as the asymptote pair. This is linearization at infinity: the hyperbola is a bounded deformation of its asymptotic cone. The conjugate hyperbola $x^{2}/a^{2} - y^{2}/b^{2} = -1$ fills the complementary angular sectors with the same asymptotes, and together the pair exhibits the extremal gap $2b$ between vertices along the conjugate axis. Eccentricity measures how open the branches are, with $e \\to 1$ flattening onto the transverse axis and $e \\to \\infty$ opening toward the conjugate direction.'
          },
          {
            kind: 'example',
            heading: 'Touching condition from the discriminant',
            body: 'Insert $y = mx + c$ into $x^{2}/4 - y^{2}/9 = 1$ to get a quadratic whose discriminant vanishes exactly when $c^{2} = 4m^{2} - 9$. Hence slopes with $|m| < 3/2$ admit no real tangent from infinity direction, while $|m| > 3/2$ admit two symmetric intercepts $c = \\pm\\sqrt{4m^{2}-9}$. The boundary $|m| = 3/2$ recovers the asymptotes $y = \\pm (3/2)x$, which meet the curve only at infinity. Thus the algebraic inequality $4m^{2} \\ge 9$ is the geometric statement that non asymptotic directions cut or touch while sub asymptotic ones miss.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 8.4
  {
    sectionId: 'math-a9-s7',
    readingTime: 10,
    intro: 'Common tangents and chord techniques unite all three conics under the $T$, $S_{1}$ and $SS_{1}$ machinery. The chord with midpoint $T = S_{1}$, the pair of tangents $T^{2} = SS_{1}$ and the common-tangent discriminant apply verbatim after adjusting $S$ for each conic. This section trains cross-conic problem solving with those shared forms.',
    objectives: [
      'Write $T = 0$, $T = S_{1}$ and $T^{2} = SS_{1}$ for parabola, ellipse and hyperbola',
      'Impose common-tangent conditions between two conics via slope-form equating',
      'Solve chord-bisector loci and tangent-count tasks with discriminants'
    ],
    concepts: [
      {
        term: 'Unified T-S1 dictionary',
        kind: 'notation',
        statement: 'The **unified dictionary** sets $S = y^{2}-4ax$ or $\\frac{x^{2}}{a^{2}} \\pm \\frac{y^{2}}{b^{2}}-1$ with matching `T-form` $T = yy_{1}-2a(x+x_{1})$ or $\\frac{xx_{1}}{a^{2}} \\pm \\frac{yy_{1}}{b^{2}}-1$.',
        detail: 'Then $T = 0$ is tangent on the conic and chord of contact outside; $T = S_{1}$ is chord with midpoint $(x_{1}, y_{1})$; $T^{2} = SS_{1}$ is the tangent pair. One memory covers three conics.'
      },
      {
        term: 'Common tangents between conics',
        kind: 'method',
        statement: 'A **common tangent** $y = mx + c$ must satisfy both `slope-conditions` simultaneously, e.g. $c = \\frac{a}{m}$ for $y^{2} = 4ax$ and $c^{2} = a^{2}m^{2}+b^{2}$ for an ellipse.',
        detail: 'Equate the two expressions for $c$ (up to sign) and solve for $m$. Up to four common tangents exist for two ellipses; parabola-ellipse pairs give up to three. Verify $m \\ne 0$ when the parabola form $c = a/m$ is used.'
      },
      {
        term: 'Chord of contact across conics',
        kind: 'theorem',
        statement: 'From $(x_{1}, y_{1})$ outside any conic, the **contact chord** is `contact-form` $T = 0$ with the matching $T$.',
        detail: 'If two contact chords coincide, the point lies on the common chord of the conics. For confocal or coaxial arrangements this locates poles without solving quartics.'
      },
      {
        term: 'Locus of midpoints',
        kind: 'method',
        statement: 'The **midpoint locus** of chords through a fixed $(h, k)$ or with fixed slope $m$ comes from `bisector-condition` $T = S_{1}$ with $(x_{1}, y_{1})$ variable on the chord.',
        detail: 'For $y^{2} = 4ax$ with slope $m$, locus is $y = \\frac{2a}{m}$ (horizontal line). For central conics the locus is a diameter: a line through the centre. Eliminate the midpoint parameters to get the locus equation.'
      },
      {
        term: 'Director and envelope view',
        kind: 'insight',
        statement: 'Each conic owns a **director envelope**: directrix for parabola, circle $x^{2}+y^{2} = a^{2}+b^{2}$ for ellipse, circle `director-form` $x^{2}+y^{2} = a^{2}-b^{2}$ for hyperbola.',
        detail: 'These are envelopes of perpendicular-tangent intersections. Orthogonal-tangent tasks reduce to checking membership in the director locus rather than solving tangent pairs.'
      }
    ],
    examples: [
      {
        title: 'Common tangent to parabola and ellipse',
        problem: 'Find a common tangent to $y^{2} = 4x$ and $\\frac{x^{2}}{9} + \\frac{y^{2}}{4} = 1$ of the form $y = mx + c$.',
        steps: [
          { label: 'Step 1', text: 'Parabola condition with $a = 1$:\n```tex\nc = 1/m,  m != 0\n```\nEllipse condition: $c^{2} = 9m^{2} + 4$.' },
          { label: 'Step 2', text: 'Substitute: $\\frac{1}{m^{2}} = 9m^{2} + 4$. Multiply: $1 = 9m^{4} + 4m^{2}$. Set $u = m^{2}$: $9u^{2} + 4u - 1 = 0$.' },
          { label: 'Step 3', text: 'Solve: $u = \\frac{-4 + \\sqrt{16+36}}{18} = \\frac{-4+\\sqrt{52}}{18} = \\frac{-2+\\sqrt{13}}{9}$. Hence $m = \\pm\\sqrt{u}$ with $c = 1/m$ gives two symmetric common tangents.' }
        ],
        result: 'Common slopes $m = \\pm\\sqrt{\\frac{-2+\\sqrt{13}}{9}}$ with $c = 1/m$; two symmetric tangents.'
      },
      {
        title: 'Midpoint chord on a parabola',
        problem: 'Find the chord of $y^{2} = 4x$ whose midpoint is $(2, 1)$.',
        steps: [
          { label: 'Step 1', text: 'Form $T = y(1) - 2(x+2) = y - 2x - 4$ and $S_{1} = 1 - 8 = -7$.' },
          { label: 'Step 2', text: 'Set $T = S_{1}$: $y - 2x - 4 = -7$, so $y - 2x + 3 = 0$.' },
          { label: 'Step 3', text: 'Check midpoint inside: $S_{1} = -7 < 0$ confirms a real chord. Endpoints solve $y = 2x - 3$ with $(2x-3)^{2} = 4x$.' }
        ],
        result: 'Required chord is $2x - y - 3 = 0$, bisected at $(2, 1)$.'
      }
    ],
    keyTakeaways: [
      'One dictionary $T = 0$, $T = S_{1}$, $T^{2} = SS_{1}$ serves parabola, ellipse and hyperbola.',
      'Common tangents equate slope-form $c$ conditions from both conics and solve for $m$.',
      'Midpoint-chord loci are diameters: $y = \\frac{2a}{m}$ for parabola, centre lines for central conics.',
      'Perpendicular-tangent questions reduce to director-locus membership checks.'
    ],
    quiz: [
      {
        q: 'Chord of $y^{2} = 4x$ with midpoint $(2, 1)$ is:',
        options: [`$y - 2x + 3 = 0$`, `$y - 2x - 3 = 0$`, `$2y - x + 3 = 0$`, `$x + y = 3$`],
        answer: 0,
        explanation: 'Step 1: Compute $T = y - 2x - 4$. Step 2: Compute $S_{1} = -7$. Step 3: Set $T = S_{1}$ to get $y - 2x + 3 = 0$. Step 4: First option matches.'
      },
      // PYQ-pattern: common tangent slope between parabola and ellipse
      {
        q: 'A line $y = mx + c$ touches $y^{2} = 4x$. Then $c$ equals:',
        options: [`$m$`, `$\\frac{1}{m}$`, `$4m$`, `$\\frac{m}{4}$`],
        answer: 1,
        explanation: 'Step 1: Substitute to get $m^{2}x^{2} + 2(mc-2)x + c^{2} = 0$. Step 2: Discriminant zero gives $(mc-2)^{2} = m^{2}c^{2}$. Step 3: Simplify to $mc = 1$. Step 4: Hence $c = 1/m$.'
      },
      {
        q: 'Pair of tangents from $(x_{1}, y_{1})$ to any conic $S = 0$ is:',
        options: [`$T = S_{1}$`, `$T = 0$`, `$T^{2} = SS_{1}$`, `$S = S_{1}$`],
        answer: 2,
        explanation: 'Step 1: $T = 0$ is a single line (contact). Step 2: $T = S_{1}$ is midpoint chord. Step 3: Degree-two locus needs $T^{2} = SS_{1}$. Step 4: Third option is the pair.'
      },
      {
        q: 'Director locus of $y^{2} = 4ax$ is:',
        options: [`$x + a = 0$`, `$x - a = 0$`, `$x^{2} + y^{2} = 2a^{2}$`, `$y = 0$`],
        answer: 0,
        explanation: 'Step 1: Tangents $ty = x + at^{2}$ through $(x_{1}, y_{1})$ give quadratic in $t$. Step 2: Perpendicular slopes $1/t_{1}, 1/t_{2}$ need $t_{1}t_{2} = -1$. Step 3: Product from quadratic is $-(x_{1}+a)/a$? Solve to get $x_{1} = -a$. Step 4: Locus is directrix $x + a = 0$.'
      }
    ]
  }
]
