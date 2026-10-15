import type { SectionContent } from '../library'

// ============================================================================
// Mathematics Companion — Chapter 7: Straight Lines & Circles
// Master study content (sections 7.1 - 7.4).
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const mathCompanionCh07Content: SectionContent[] = [
  // ---------------------------------------------------------------- 7.1
  {
    sectionId: 'math-a8-s7',
    readingTime: 8,
    intro: 'Every straight line can be written in slope, intercept, normal and parametric costumes, and fluency means switching costumes to suit the data. The combined pair equation $ax^{2} + 2hxy + by^{2} = 0$ extends the story to two lines through the origin and their angle. This section fixes the forms and the pair-of-lines toolkit used throughout coordinate geometry.',
    objectives: [
      'Convert among slope-intercept, point-slope, two-point, intercept and normal forms of a line',
      'Analyze the homogeneous pair $ax^{2} + 2hxy + by^{2} = 0$ for reality, angle and bisectors',
      'Test parallelism, perpendicularity and concurrency with slopes and determinants'
    ],
    concepts: [
      {
        term: 'Standard forms of a line',
        kind: 'notation',
        statement: 'A **line form** packages the same locus as `slope-data` $y = mx + c$, point-slope $y - y_{1} = m(x - x_{1})$, two-point $y - y_{1} = \\frac{y_{2}-y_{1}}{x_{2}-x_{1}}(x - x_{1})$, or intercept form $\\frac{x}{a} + \\frac{y}{b} = 1$.',
        detail: 'Normal form: $x\\cos\\alpha + y\\sin\\alpha = p$ with $p \\ge 0$ the distance from origin. Parametric form: $\\frac{x-x_{1}}{\\cos\\theta} = \\frac{y-y_{1}}{\\sin\\theta} = r$ gives signed distance $r$ along direction $\\theta$. General form $ax + by + c = 0$ covers vertical lines where slope forms fail.'
      },
      {
        term: 'Slope conditions for parallel and perpendicular lines',
        kind: 'theorem',
        statement: 'Two non-vertical lines are **parallel** exactly when $m_{1} = m_{2}$ and **perpendicular** exactly when `slope-product` $m_{1}m_{2} = -1$.',
        detail: 'For general forms $a_{1}x + b_{1}y + c_{1} = 0$ and $a_{2}x + b_{2}y + c_{2} = 0$: parallel when $\\frac{a_{1}}{a_{2}} = \\frac{b_{1}}{b_{2}} \\ne \\frac{c_{1}}{c_{2}}$, coincident when all three ratios match, perpendicular when $a_{1}a_{2} + b_{1}b_{2} = 0$.'
      },
      {
        term: 'Homogeneous pair through the origin',
        kind: 'theorem',
        statement: 'The **homogeneous pair** $ax^{2} + 2hxy + by^{2} = 0$ represents two `origin-lines` whose slopes $m_{1}, m_{2}$ satisfy $m_{1}+m_{2} = -\\frac{2h}{b}$ and $m_{1}m_{2} = \\frac{a}{b}$.',
        detail: 'Reality condition: $h^{2} \\ge ab$ for real lines; $h^{2} < ab$ gives only the origin as real point. If $a + b = 0$ the lines are perpendicular. Factor by treating as quadratic in $\\frac{y}{x}$ or $\\frac{x}{y}$.'
      },
      {
        term: 'Angle between pair lines and bisectors',
        kind: 'theorem',
        statement: 'The **pair angle** $\\theta$ obeys $\\tan\\theta = \\frac{2\\sqrt{h^{2}-ab}}{|a+b|}$, and the `bisector-pair` of the angle between them is $\\frac{x^{2}-y^{2}}{a-b} = \\frac{xy}{h}$.',
        detail: 'Bisector formula comes from equating perpendicular distances to the two lines. The bisectors are perpendicular to each other. When $a = b$, bisectors simplify to $xy = 0$ after rotation analysis.'
      },
      {
        term: 'General second-degree pair and concurrency',
        kind: 'method',
        statement: 'The **general pair** $ax^{2} + 2hxy + by^{2} + 2gx + 2fy + c = 0$ represents two lines exactly when the `pair-determinant` $$\\begin{vmatrix} a & h & g \\\\ h & b & f \\\\ g & f & c \\end{vmatrix} = 0$$.',
        detail: 'Three lines $L_{1} = 0$, $L_{2} = 0$, $L_{3} = 0$ are concurrent when the determinant of their coefficients vanishes. Homogenize with a third variable to move between origin-pairs and general pairs.'
      }
    ],
    examples: [
      {
        title: 'Splitting a homogeneous pair into lines',
        problem: 'Factor $6x^{2} - 5xy - 6y^{2} = 0$ into two lines and find the acute angle between them.',
        steps: [
          { label: 'Step 1', text: 'Divide by $x^{2}$ and set $m = \\frac{y}{x}$:\n```tex\n6 - 5m - 6m^2 = 0  =>  6m^2 + 5m - 6 = 0\n```\nFactor: $(3m - 2)(2m + 3) = 0$, so $m = \\frac{2}{3}$ and $m = -\\frac{3}{2}$.' },
          { label: 'Step 2', text: 'Restore lines: $y = \\frac{2}{3}x$ and $y = -\\frac{3}{2}x$, i.e. $2x - 3y = 0$ and $3x + 2y = 0$. Product of slopes is $-1$, so the lines are perpendicular.' },
          { label: 'Step 3', text: 'Acute angle between perpendicular lines is $\\frac{\\pi}{2}$. Confirm with $a + b = 6 - 6 = 0$, the perpendicularity certificate for a pair.' }
        ],
        result: 'The pair splits as $(2x-3y)(3x+2y) = 0$ with perpendicular lines meeting at $\\frac{\\pi}{2}$.'
      },
      {
        title: 'Normal form from general data',
        problem: 'Write $\\sqrt{3}x + y - 4 = 0$ in normal form $x\\cos\\alpha + y\\sin\\alpha = p$ and read off $p$ and $\\alpha$.',
        steps: [
          { label: 'Step 1', text: 'Move constant: $\\sqrt{3}x + y = 4$. Divide by $\\sqrt{(\\sqrt{3})^{2}+1^{2}} = 2$ to normalize coefficients.' },
          { label: 'Step 2', text: 'Obtain $\\frac{\\sqrt{3}}{2}x + \\frac{1}{2}y = 2$. Hence $\\cos\\alpha = \\frac{\\sqrt{3}}{2}$ and $\\sin\\alpha = \\frac{1}{2}$.' },
          { label: 'Step 3', text: 'Therefore $p = 2$ and $\\alpha = \\frac{\\pi}{6}$. The line is at distance $2$ from the origin along direction $30^{\\circ}$.' }
        ],
        result: 'Normal form is $x\\cos\\frac{\\pi}{6} + y\\sin\\frac{\\pi}{6} = 2$ with $p = 2$.'
      }
    ],
    keyTakeaways: [
      'Choose the line form matching the data: slope, point, intercepts, normal distance or parametric distance.',
      '$ax^{2} + 2hxy + by^{2} = 0$ gives real lines iff $h^{2} \\ge ab$, with $m_{1}+m_{2} = -\\frac{2h}{b}$.',
      'Pair angle follows $\\tan\\theta = \\frac{2\\sqrt{h^{2}-ab}}{|a+b|}$; bisectors follow $\\frac{x^{2}-y^{2}}{a-b} = \\frac{xy}{h}$.',
      'A general second-degree equation is a line-pair iff its $3 \\times 3$ coefficient determinant vanishes.'
    ],
    quiz: [
      {
        q: 'The lines $y = 2x + 1$ and $2x - y + 5 = 0$ are:',
        options: ['Perpendicular', 'Parallel and distinct', 'Coincident', 'Intersecting but not perpendicular'],
        answer: 1,
        explanation: 'Step 1: Both have slope $2$. Step 2: Intercepts $1$ and $5$ differ. Step 3: Equal slopes with different intercepts mean parallel. Step 4: Hence parallel and distinct.'
      },
      // PYQ-pattern: factoring a homogeneous pair and testing perpendicularity
      {
        q: 'The pair $x^{2} - 3xy + 2y^{2} = 0$ represents lines with slopes:',
        options: [`$1$ and $\\frac{1}{2}$`, `$1$ and $2$`, `$-1$ and $-2$`, `$2$ and $-1$`],
        answer: 0,
        explanation: 'Step 1: Divide by $x^{2}$ and set $m = \\frac{y}{x}$ to get $2m^{2} - 3m + 1 = 0$. Step 2: Factor as $(2m-1)(m-1) = 0$. Step 3: Roots are $m = 1$ and $m = \\frac{1}{2}$. Step 4: The first option lists both roots.'
      },
      {
        q: 'For $ax^{2} + 2hxy + by^{2} = 0$ to be perpendicular lines, the condition is:',
        options: [`$h = 0$`, `$h^{2} = ab$`, `$a + b = 0$`, `$a = b$`],
        answer: 2,
        explanation: 'Step 1: Slopes satisfy $m_{1}m_{2} = \\frac{a}{b}$. Step 2: Perpendicularity needs $m_{1}m_{2} = -1$. Step 3: Hence $\\frac{a}{b} = -1$. Step 4: So $a + b = 0$, the third option.'
      },
      {
        q: 'Normal form of $x + y = 2$ has $p$ equal to:',
        options: [`$2$`, `$1$`, `$2\\sqrt{2}$`, `$\\sqrt{2}$`],
        answer: 3,
        explanation: 'Step 1: Divide by $\\sqrt{1^{2}+1^{2}} = \\sqrt{2}$. Step 2: Get $\\frac{x}{\\sqrt{2}} + \\frac{y}{\\sqrt{2}} = \\frac{2}{\\sqrt{2}}$. Step 3: Simplify right side to $\\sqrt{2}$. Step 4: Hence $p = \\sqrt{2}$, the fourth option.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Pairs of lines and degenerate conic pencils',
        blocks: [
          {
            kind: 'theorem',
            body: 'The homogeneous equation $ax^{2} + 2hxy + by^{2} = 0$ represents **two lines through the origin**, real and distinct when $h^{2} > ab$, coincident when $h^{2} = ab$, and imaginary when $h^{2} < ab$. The acute angle $\\theta$ between them satisfies $\\tan\\theta = 2\\sqrt{h^{2}-ab}/|a+b|$ whenever $a + b \\ne 0$. The lines are perpendicular exactly when $a + b = 0$ and coincident with the axes bisectors in the extremal discriminant zero case. Thus the single number $h^{2} - ab$ plays the role of a discriminant for direction splitting.'
          },
          {
            kind: 'derivation',
            body: 'Divide by $x^{2}$ and set $m = y/x$ to obtain $bm^{2} + 2hm + a = 0$, so slopes $m_{1}$ and $m_{2}$ satisfy $m_{1} + m_{2} = -2h/b$ and $m_{1}m_{2} = a/b$ when $b \\ne 0$. Then $\\tan\\theta = |(m_{1}-m_{2})/(1+m_{1}m_{2})| = 2\\sqrt{h^{2}-ab}/|a+b|$. Perpendicularity $m_{1}m_{2} = -1$ forces $a/b = -1$, namely $a + b = 0$. The symmetric case $b = 0$ is handled by swapping roles, and $a = b = 0$ with $h \\ne 0$ gives the coordinate axes pair $xy = 0$. Hence every degenerate conic through the origin is classified by these symmetric functions of the slopes.'
          },
          {
            kind: 'example',
            heading: 'Reading perpendicular lines from coefficients',
            body: 'Consider $x^{2} + 2hxy - y^{2} = 0$ with $a = 1$ and $b = -1$, so $a + b = 0$ for every $h$. The slope equation $-m^{2} + 2hm + 1 = 0$ has product $m_{1}m_{2} = -1$, confirming perpendicularity for all $h$, while $h^{2} - ab = h^{2} + 1 > 0$ guarantees reality. When $h = 0$ the pair is $x^{2} = y^{2}$, the two diagonals at $45$ degrees. Varying $h$ rotates the pair rigidly while preserving the right angle, illustrating that $a + b$ controls orthogonality and $h^{2} - ab$ controls reality and separation.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 7.2
  {
    sectionId: 'math-a8-s8',
    readingTime: 8,
    intro: 'Distance formulas turn geometric closeness into algebra, while angle bisectors split the angle between two lines into internal and external loci. Families of lines through a fixed point or through the intersection of two lines compress infinitely many cases into one parameter. This section unifies these tools for foot, reflection and concurrency tasks.',
    objectives: [
      'Compute point-line and parallel-line distances and areas via base-height logic',
      'Write internal and external bisectors and identify which is acute versus obtuse',
      'Parametrize lines through a point and through $L_{1} + \\lambda L_{2} = 0$ for constraints'
    ],
    concepts: [
      {
        term: 'Point-to-line distance',
        kind: 'theorem',
        statement: 'The **perpendicular distance** from $(x_{1}, y_{1})$ to $ax + by + c = 0$ is $d = \\frac{|ax_{1}+by_{1}+c|}{\\sqrt{a^{2}+b^{2}}}$, with `signed-distance` $\\frac{ax_{1}+by_{1}+c}{\\sqrt{a^{2}+b^{2}}}$ carrying the side information.',
        detail: 'Distance between parallel lines $ax + by + c_{1} = 0$ and $ax + by + c_{2} = 0$ is $\\frac{|c_{1}-c_{2}|}{\\sqrt{a^{2}+b^{2}}}$. Area of a triangle with vertices $(x_{i}, y_{i})$ follows from base times this height.'
      },
      {
        term: 'Foot and mirror image on a line',
        kind: 'method',
        statement: 'The **foot formula** for $(x_{1}, y_{1})$ on $ax + by + c = 0$ is `foot-ratio` $\\frac{x-x_{1}}{a} = \\frac{y-y_{1}}{b} = -\\frac{ax_{1}+by_{1}+c}{a^{2}+b^{2}}$.',
        detail: 'Doubling the displacement gives the mirror image: replace the right side by $-\\frac{2(ax_{1}+by_{1}+c)}{a^{2}+b^{2}}$. The foot divides the segment from point to image in ratio $1:1$. Verify by checking the foot satisfies the line equation.'
      },
      {
        term: 'Angle bisectors of two lines',
        kind: 'theorem',
        statement: 'The **bisector locus** of $a_{1}x + b_{1}y + c_{1} = 0$ and $a_{2}x + b_{2}y + c_{2} = 0$ is `equidistant-pair` $\\frac{|a_{1}x+b_{1}y+c_{1}|}{\\sqrt{a_{1}^{2}+b_{1}^{2}}} = \\frac{|a_{2}x+b_{2}y+c_{2}|}{\\sqrt{a_{2}^{2}+b_{2}^{2}}}$.',
        detail: 'Removing moduli gives two perpendicular lines: one internal, one external. If $c_{1}, c_{2}$ have the same sign pattern after normalization, the $+$ sign gives the bisector containing the origin region. Acute versus obtuse is decided by the sign of $a_{1}a_{2} + b_{1}b_{2}$.'
      },
      {
        term: 'Acute versus obtuse bisector test',
        kind: 'method',
        statement: 'Normalize so constants are positive, then the **acute-bisector rule** says the `sign-test` $a_{1}a_{2} + b_{1}b_{2} < 0$ makes the $+$ bisector acute, while $> 0$ makes the $-$ bisector acute.',
        detail: 'Equivalently, compute the angle $\\theta$ between the lines: the bisector with $\\tan(\\theta/2)$ slope behavior near the smaller angle is acute. Always sketch or test a point to confirm which locus the task requests.'
      },
      {
        term: 'Families of lines',
        kind: 'method',
        statement: 'All lines through $(x_{1}, y_{1})$ form the **pencil** $y - y_{1} = m(x - x_{1})$, and all through $L_{1} \\cap L_{2}$ form the `intersection-family` $L_{1} + \\lambda L_{2} = 0$.',
        detail: 'Use the pencil when the pivot point is known; use $L_{1} + \\lambda L_{2} = 0$ when only the intersection is known. Impose parallelism, perpendicularity or distance conditions to fix $m$ or $\\lambda$. The single missing member is $L_{2} = 0$ itself when written in this one-parameter form.'
      }
    ],
    examples: [
      {
        title: 'Foot and image across a line',
        problem: 'Find the foot of perpendicular from $(2, 3)$ to $3x + 4y - 5 = 0$ and hence the mirror image of the point.',
        steps: [
          { label: 'Step 1', text: 'Apply the foot formula with $a = 3$, $b = 4$, $c = -5$:\n```tex\n(x-2)/3 = (y-3)/4 = -(3*2+4*3-5)/(9+16) = -13/25\n```\nSo $x = 2 - \\frac{39}{25} = \\frac{11}{25}$ and $y = 3 - \\frac{52}{25} = \\frac{23}{25}$.' },
          { label: 'Step 2', text: 'Double the displacement for the image: $x^{\\prime} = 2 - \\frac{78}{25} = -\\frac{28}{25}$ and $y^{\\prime} = 3 - \\frac{104}{25} = -\\frac{29}{25}$.' },
          { label: 'Step 3', text: 'Verify the midpoint $\\left(\\frac{11}{25}, \\frac{23}{25}\\right)$ satisfies $3x + 4y - 5 = 0$: $\\frac{33+92-125}{25} = 0$. The segment is perpendicular since its direction $(3,4)$ is the line normal.' }
        ],
        result: 'Foot $\\left(\\frac{11}{25}, \\frac{23}{25}\\right)$ and image $\\left(-\\frac{28}{25}, -\\frac{29}{25}\\right)$.'
      },
      {
        title: 'Line through an intersection with a distance condition',
        problem: 'Find the lines through the intersection of $x + y - 1 = 0$ and $2x - y + 4 = 0$ that are at distance $1$ from $(0, 0)$.',
        steps: [
          { label: 'Step 1', text: 'Write the family $(x + y - 1) + \\lambda(2x - y + 4) = 0$, i.e. $(1+2\\lambda)x + (1-\\lambda)y + (-1+4\\lambda) = 0$.' },
          { label: 'Step 2', text: 'Distance from origin is $\\frac{|-1+4\\lambda|}{\\sqrt{(1+2\\lambda)^{2}+(1-\\lambda)^{2}}} = 1$. Square: $(-1+4\\lambda)^{2} = (1+2\\lambda)^{2} + (1-\\lambda)^{2}$.' },
          { label: 'Step 3', text: 'Expand: $1 - 8\\lambda + 16\\lambda^{2} = 2 + 2\\lambda + 5\\lambda^{2}$, so $11\\lambda^{2} - 10\\lambda - 1 = 0$, giving $\\lambda = 1$ and $\\lambda = -\\frac{1}{11}$. Substitute back for the two lines.' }
        ],
        result: 'The two lines are $3x + 3 = 0$ (i.e. $x = -1$) for $\\lambda = 1$ and $9x + 12y - 15 = 0$ for $\\lambda = -\\frac{1}{11}$.'
      }
    ],
    keyTakeaways: [
      'Distance $\\frac{|ax_{1}+by_{1}+c|}{\\sqrt{a^{2}+b^{2}}}$ and its parallel-line twin handle all closeness tasks.',
      'Foot uses $\\frac{x-x_{1}}{a} = \\frac{y-y_{1}}{b}$ once; image doubles the same ratio.',
      'Bisectors come from equating normalized distances; the sign of $a_{1}a_{2}+b_{1}b_{2}$ selects acute versus obtuse.',
      '$L_{1} + \\lambda L_{2} = 0$ captures every line through an intersection except $L_{2}$ itself.'
    ],
    quiz: [
      {
        q: 'Distance from $(1, 2)$ to $3x + 4y - 10 = 0$ is:',
        options: [`$1$`, `$\\frac{1}{5}$`, `$2$`, `$\\frac{3}{5}$`],
        answer: 1,
        explanation: 'Step 1: Numerator is $|3(1) + 4(2) - 10| = |3 + 8 - 10| = 1$. Step 2: Denominator is $\\sqrt{9+16} = 5$. Step 3: Ratio is $\\frac{1}{5}$. Step 4: Hence the second option is correct.'
      },
      {
        q: 'The bisectors of two intersecting lines are always:',
        options: ['Parallel', 'Perpendicular', 'Coincident', 'Skew'],
        answer: 1,
        explanation: 'Step 1: Internal bisector halves one angle. Step 2: External bisector halves the supplementary angle. Step 3: Half of supplementary angles differ by $\\frac{\\pi}{2}$. Step 4: Hence the bisectors are perpendicular.'
      },
      // PYQ-pattern: image of a point in a coordinate line
      {
        q: 'Mirror image of $(a, b)$ in the line $y = x$ is:',
        options: [`$(b, a)$`, `$(-a, -b)$`, `$(a, -b)$`, `$(-b, a)$`],
        answer: 0,
        explanation: 'Step 1: The line $y = x$ swaps coordinates. Step 2: Foot of $(a,b)$ is $\\left(\\frac{a+b}{2}, \\frac{a+b}{2}\\right)$. Step 3: Doubling from $(a,b)$ through the foot swaps entries. Step 4: Image is $(b, a)$.'
      },
      {
        q: 'Family $L_{1} + \\lambda L_{2} = 0$ fails to represent directly:',
        options: [`$L_{1} = 0$`, `$L_{2} = 0$`, 'The angle bisectors', 'Lines through the intersection'],
        answer: 1,
        explanation: 'Step 1: Finite $\\lambda$ always keeps an $L_{1}$ component. Step 2: No finite $\\lambda$ kills $L_{1}$ entirely. Step 3: $L_{2} = 0$ needs the limit $|\\lambda| \\to \\infty$. Step 4: So $L_{2}$ is the missing member.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.3
  {
    sectionId: 'math-a8-s9',
    readingTime: 8,
    intro: 'A circle is the locus of points at fixed distance from a centre, and its equation adapts to centre-radius, diameter-endpoint and general-form data. Position tests for points and lines decide inside, on and outside without drawing. This section also introduces coaxial intuition that prepares radical-axis work.',
    objectives: [
      'Write circle equations in centre-radius, diameter and general forms and convert among them',
      'Test positions of points and lines relative to a circle via power and discriminant logic',
      'Find centres, radii and intercepts from general equations by completing the square'
    ],
    concepts: [
      {
        term: 'Centre-radius and general forms',
        kind: 'definition',
        statement: 'A **circle equation** with centre $(h, k)$ and radius $r$ is $(x-h)^{2} + (y-k)^{2} = r^{2}$, equivalently the `general-form` $x^{2} + y^{2} + 2gx + 2fy + c = 0$ with centre $(-g, -f)$.',
        detail: 'Radius from general form: $r = \\sqrt{g^{2}+f^{2}-c}$. Reality needs $g^{2}+f^{2} > c$; equality gives a point circle; inequality reversed gives no real locus. Coefficients of $x^{2}$ and $y^{2}$ must be equal and the $xy$ term absent.'
      },
      {
        term: 'Diameter form',
        kind: 'theorem',
        statement: 'The circle on **diameter endpoints** $(x_{1}, y_{1})$ and $(x_{2}, y_{2})$ is $(x-x_{1})(x-x_{2}) + (y-y_{1})(y-y_{2}) = 0$, the `right-angle` locus of points subtending a right angle.',
        detail: 'Expand to read centre as midpoint and radius as half the endpoint distance. If the endpoints share an $x$ or $y$ coordinate, the equation simplifies without cross terms. Verify by checking both endpoints satisfy it with zero factors.'
      },
      {
        term: 'Position of a point and power',
        kind: 'theorem',
        statement: 'For $S = x^{2} + y^{2} + 2gx + 2fy + c$, the **power test** says point $P$ is inside when `power-sign` $S_{1} < 0$, on when $S_{1} = 0$, outside when $S_{1} > 0$.',
        detail: 'Power magnitude $|S_{1}|$ equals (tangent length)$^{2}$ for outside points. Position of origin is decided by sign of $c$: $c < 0$ means origin inside. Concentric circles share $(-g,-f)$ with different $c$.'
      },
      {
        term: 'Line-circle intersection',
        kind: 'method',
        statement: 'A line meets a circle in **zero, one or two points** according as the `distance-compare` $d > r$, $d = r$ or $d < r$, where $d$ is the centre-to-line distance.',
        detail: 'Algebraically, substitute the line into the circle and inspect the quadratic discriminant. Length of chord with perpendicular distance $d$ is $2\\sqrt{r^{2}-d^{2}}$. Tangent condition $d = r$ reproduces the discriminant-zero case.'
      },
      {
        term: 'Intercepts and coaxial hint',
        kind: 'insight',
        statement: 'A circle cuts **coordinate intercepts** $x = -g \\pm \\sqrt{g^{2}-c}$ on $y = 0$ and `intercept-pair` $y = -f \\pm \\sqrt{f^{2}-c}$ on $x = 0$, real exactly when the radicands are nonnegative.',
        detail: 'Circles $S_{1} + \\lambda S_{2} = 0$ and $S + \\lambda L = 0$ generate coaxial families through common points. Touching both axes with centre $(-g,-f)$ needs $|g| = |f| = r$. These families lead directly to the radical axis.'
      }
    ],
    examples: [
      {
        title: 'Circle from diameter endpoints',
        problem: 'Find the equation, centre and radius of the circle with diameter endpoints $(1, 2)$ and $(5, 6)$.',
        steps: [
          { label: 'Step 1', text: 'Diameter form:\n```tex\n(x-1)(x-5) + (y-2)(y-6) = 0\n```\nExpand: $x^{2} - 6x + 5 + y^{2} - 8y + 12 = 0$.' },
          { label: 'Step 2', text: 'Simplify to $x^{2} + y^{2} - 6x - 8y + 17 = 0$. Complete squares: $(x-3)^{2} + (y-4)^{2} = 9 + 16 - 17 = 8$.' },
          { label: 'Step 3', text: 'Centre $(3, 4)$ is the midpoint; radius $\\sqrt{8} = 2\\sqrt{2}$ is half the endpoint distance $\\sqrt{32}/2$.' }
        ],
        result: 'Circle $(x-3)^{2} + (y-4)^{2} = 8$ with centre $(3,4)$ and radius $2\\sqrt{2}$.'
      },
      {
        title: 'Testing line-circle position',
        problem: 'Determine whether $x + y = 3$ meets $x^{2} + y^{2} - 4x - 4y + 4 = 0$, and find intersection points if any.',
        steps: [
          { label: 'Step 1', text: 'Centre $(2, 2)$, radius $r = \\sqrt{4+4-4} = 2$. Distance from centre to line $x + y - 3 = 0$ is $d = \\frac{|2+2-3|}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}} < 2$.' },
          { label: 'Step 2', text: 'Since $d < r$, the line is a secant with two points. Substitute $y = 3 - x$: $x^{2} + (3-x)^{2} - 4x - 4(3-x) + 4 = 0$.' },
          { label: 'Step 3', text: 'Simplify to $2x^{2} - 6x + 5 = 0$? Expand: $x^{2} + 9 - 6x + x^{2} - 4x - 12 + 4x + 4 = 2x^{2} - 6x + 1 = 0$. Solve: $x = \\frac{3 \\pm \\sqrt{7}}{2}$ with matching $y$.' }
        ],
        result: 'Secant line cutting the circle at $\\left(\\frac{3+\\sqrt{7}}{2}, \\frac{3-\\sqrt{7}}{2}\\right)$ and its swap.'
      }
    ],
    keyTakeaways: [
      'Centre $(-g,-f)$ and $r = \\sqrt{g^{2}+f^{2}-c}$ come from completing the square; need $g^{2}+f^{2} > c$.',
      'Diameter form $(x-x_{1})(x-x_{2}) + (y-y_{1})(y-y_{2}) = 0$ encodes the right-angle locus.',
      'Point position follows sign of $S_{1}$; tangent-length squared equals $S_{1}$ outside.',
      'Compare centre-line distance $d$ with $r$ to classify secant, tangent or non-meeting lines.'
    ],
    quiz: [
      {
        q: 'Centre and radius of $x^{2} + y^{2} + 4x - 6y + 4 = 0$ are:',
        options: [`$(2, -3)$, $3$`, `$(-2, 3)$, $3$`, `$(-2, 3)$, $\\sqrt{17}$`, `$(2, 3)$, $3$`],
        answer: 1,
        explanation: 'Step 1: Centre is $(-g, -f) = (-2, 3)$. Step 2: Radius is $\\sqrt{4+9-4} = 3$. Step 3: Check $g^{2}+f^{2}-c = 9 > 0$. Step 4: Only the second option matches both.'
      },
      {
        q: 'Point $(1, 1)$ relative to $x^{2} + y^{2} - 2x - 2y - 2 = 0$ is:',
        options: ['Outside', 'On the circle', 'Inside', 'At the centre'],
        answer: 2,
        explanation: 'Step 1: Compute $S_{1} = 1+1-2-2-2 = -4$. Step 2: Negative sign means inside. Step 3: Centre is $(1,1)$? Indeed centre is $(1,1)$, so the point is the centre. Step 4: Centre of a real circle is inside it.'
      },
      // PYQ-pattern: diameter-form circle from endpoints
      {
        q: 'Circle with diameter endpoints $(0, 0)$ and $(4, 3)$ has equation:',
        options: [`$x^{2} + y^{2} - 4x - 3y = 0$`, `$x^{2} + y^{2} + 4x + 3y = 0$`, `$(x-4)^{2} + (y-3)^{2} = 25$`, `$x^{2} + y^{2} = 25$`],
        answer: 0,
        explanation: 'Step 1: Diameter form gives $x(x-4) + y(y-3) = 0$. Step 2: Expand to $x^{2} + y^{2} - 4x - 3y = 0$. Step 3: Centre is $(2, 1.5)$ with radius $2.5$. Step 4: First option matches.'
      },
      {
        q: 'Line $y = x$ meets $x^{2} + y^{2} = 2$ in:',
        options: ['No real points', 'One tangent point', 'Two points $(1,1)$ and $(-1,-1)$', 'Two points $(2,2)$ and $(-2,-2)$'],
        answer: 2,
        explanation: 'Step 1: Substitute to get $2x^{2} = 2$. Step 2: So $x = \\pm 1$. Step 3: Points are $(1,1)$ and $(-1,-1)$. Step 4: Distance $d = 0 < r$ confirms secant.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.4
  {
    sectionId: 'math-a8-s10',
    readingTime: 10,
    intro: 'Tangents, chords and the radical axis form the computational heart of circle geometry. The single expression $T = 0$ writes tangents from a point, chord of contact and polar in one stroke, while $T = S_{1}$ and $T^{2} = SS_{1}$ handle midpoints and tangent pairs. This section assembles these formulas with the director circle and coaxial radical axis.',
    objectives: [
      'Write tangents via $T = 0$, chord of contact, chord with midpoint and pair $T^{2} = SS_{1}$',
      'Compute chord lengths, director-circle locus and angle between tangents',
      'Find radical axis $S_{1} - S_{2} = 0$ and use it for common tangents and coaxial points'
    ],
    concepts: [
      {
        term: 'Tangent and chord-of-contact T formula',
        kind: 'theorem',
        statement: 'For $S = 0$, define **T-expression** $T = xx_{1} + yy_{1} + g(x+x_{1}) + f(y+y_{1}) + c$; the `T-zero` equation $T = 0$ is the tangent at $(x_{1}, y_{1})$ on the circle and the chord of contact from outside $(x_{1}, y_{1})$.',
        detail: 'Use $T = 0$ as tangent only when $(x_{1}, y_{1})$ satisfies $S_{1} = 0$; use it as chord of contact when $S_{1} > 0$. Length of chord of contact from $(x_{1}, y_{1})$ is $\\frac{2\\sqrt{S_{1}(g^{2}+f^{2}-c)}}{\\sqrt{(x_{1}+g)^{2}+(y_{1}+f)^{2}}}$? Simpler via right triangle: $\\frac{2r\\sqrt{S_{1}}}{\\sqrt{S_{1}+r^{2}}}$.'
      },
      {
        term: 'Chord with given midpoint',
        kind: 'theorem',
        statement: 'The chord of $S = 0$ with **midpoint** $(x_{1}, y_{1})$ is $T = S_{1}$, where `midpoint-form` $S_{1} = x_{1}^{2}+y_{1}^{2}+2gx_{1}+2fy_{1}+c$.',
        detail: 'If $S_{1} = 0$ the midpoint is on the circle and $T = S_{1}$ reduces to the tangent. If $S_{1} > 0$ the point is outside and cannot bisect a real chord — the equation then has no real locus. Midpoint must satisfy $S_{1} < 0$ for a genuine chord.'
      },
      {
        term: 'Pair of tangents from an exterior point',
        kind: 'theorem',
        statement: 'From $(x_{1}, y_{1})$ outside, the **tangent pair** is $SS_{1} = T^{2}$ (equivalently `pair-form` $T^{2} = SS_{1}$), whose two linear factors are the individual tangents.',
        detail: 'Tangent length is $\\sqrt{S_{1}}$. Angle $\\theta$ between tangents satisfies $\\sin\\left(\\frac{\\theta}{2}\\right) = \\frac{r}{\\sqrt{S_{1}+r^{2}}}$ and $\\tan\\left(\\frac{\\theta}{2}\\right) = \\frac{r}{\\sqrt{S_{1}}}$. Discriminant of the pair confirms two real lines iff $S_{1} > 0$.'
      },
      {
        term: 'Director circle and orthogonal circles',
        kind: 'theorem',
        statement: 'The **director locus** of points from which tangents to $x^{2}+y^{2} = a^{2}$ are perpendicular is the `director-form` $x^{2} + y^{2} = 2a^{2}$.',
        detail: 'Two circles $S_{1} = 0$, $S_{2} = 0$ cut orthogonally when $2g_{1}g_{2} + 2f_{1}f_{2} = c_{1} + c_{2}$. Director generalizes: replace $a^{2}$ by $g^{2}+f^{2}-c$ for shifted centres.'
      },
      {
        term: 'Radical axis and coaxial family',
        kind: 'theorem',
        statement: 'For two non-concentric circles, the **radical axis** $S_{1} - S_{2} = 0$ is the straight `equal-power` line of points with equal tangent lengths to both.',
        detail: 'It is perpendicular to the centre line. For intersecting circles it is their common chord; for touching circles their common tangent at the contact. Family $S_{1} + \\lambda(S_{1}-S_{2}) = 0$ (or $S_{1} + \\lambda L = 0$) spans the coaxial pencil.'
      }
    ],
    examples: [
      {
        title: 'Chord of contact and its length',
        problem: 'From $(4, 1)$ draw contact chords to $x^{2} + y^{2} - 2x - 4y + 1 = 0$. Write the chord equation and its length.',
        steps: [
          { label: 'Step 1', text: 'Compute $S_{1} = 16 + 1 - 8 - 4 + 1 = 6 > 0$, so two tangents exist. Form $T$:\n```tex\nT = x*4 + y*1 -1*(x+4) -2*(y+1) + 1 = 3x - y - 5\n```\nChord of contact: $3x - y - 5 = 0$.' },
          { label: 'Step 2', text: 'Centre $(1, 2)$, radius $r = \\sqrt{1+4-1} = 2$. Tangent length $\\sqrt{S_{1}} = \\sqrt{6}$. Distance from centre to chord: $d = \\frac{|3-2-5|}{\\sqrt{10}} = \\frac{4}{\\sqrt{10}}$.' },
          { label: 'Step 3', text: 'Chord length $= \\frac{2r\\sqrt{S_{1}}}{\\sqrt{S_{1}+r^{2}}} = \\frac{2 \\cdot 2\\sqrt{6}}{\\sqrt{10}} = \\frac{4\\sqrt{6}}{\\sqrt{10}} = \\frac{4\\sqrt{15}}{5}$.' }
        ],
        result: 'Chord $3x - y - 5 = 0$ with length $\\frac{4\\sqrt{15}}{5}$.'
      },
      {
        title: 'Radical axis of two circles',
        problem: 'Find the radical axis of $x^{2}+y^{2}+2x+2y+1 = 0$ and $x^{2}+y^{2}-2x-2y+1 = 0$, and show it is perpendicular to the centre line.',
        steps: [
          { label: 'Step 1', text: 'Subtract: $(2x+2x) + (2y+2y) = 4x + 4y = 0$, so $x + y = 0$.' },
          { label: 'Step 2', text: 'Centres are $(-1,-1)$ and $(1,1)$; centre line has slope $1$, radical axis has slope $-1$. Product $-1$ proves perpendicularity.' },
          { label: 'Step 3', text: 'Any point on $x + y = 0$, e.g. $(1,-1)$, gives equal $S_{1} = S_{2} = 1+1+2-2+1 = 3$, confirming equal powers.' }
        ],
        result: 'Radical axis $x + y = 0$, perpendicular to the centre line $y = x$.'
      }
    ],
    keyTakeaways: [
      '$T = 0$ is tangent on the circle and chord of contact outside; $T = S_{1}$ is the chord bisected at the given point.',
      '$T^{2} = SS_{1}$ packages both tangents with length $\\sqrt{S_{1}}$ and angle from $\\tan\\left(\\frac{\\theta}{2}\\right) = \\frac{r}{\\sqrt{S_{1}}}$.',
      'Perpendicular-tangent locus is the director circle $x^{2}+y^{2} = 2a^{2}$ for centre at origin.',
      '$S_{1}-S_{2} = 0$ is the equal-power line: common chord, common tangent or non-meeting axis.'
    ],
    quiz: [
      // PYQ-pattern: chord of contact via T = 0 from an exterior point
      {
        q: 'Chord of contact from $(5, 5)$ to $x^{2} + y^{2} - 4x - 6y + 9 = 0$ is:',
        options: [`$3x + 2y - 16 = 0$`, `$x + y - 9 = 0$`, `$5x + 5y - 16 = 0$`, `$2x + 3y - 16 = 0$`],
        answer: 0,
        explanation: 'Step 1: Here $g = -2$, $f = -3$, $c = 9$ with $S_{1} = 25 + 25 - 20 - 30 + 9 = 9 > 0$. Step 2: Form $T = 5x + 5y - 2(x+5) - 3(y+5) + 9$. Step 3: Expand to $3x + 2y - 16$. Step 4: Set $T = 0$ for the contact chord.'
      },
      {
        q: 'Chord with midpoint $(1, 1)$ on $x^{2} + y^{2} - 4x - 2y + 1 = 0$ is:',
        options: [`$x + y = 2$`, `$-x + 0y + 1 = 0$`, `$-x + y = 0$`, `$2x + 2y = 4$`],
        answer: 1,
        explanation: 'Step 1: Compute $T = x(1)+y(1)-2(x+1)-(y+1)+1 = -x+0y-2$. Step 2: Compute $S_{1} = 1+1-4-2+1 = -3$. Step 3: Set $T = S_{1}$: $-x-2 = -3$. Step 4: Hence $-x+1 = 0$, i.e. $x = 1$, the second option.'
      },
      {
        q: 'Director circle of $x^{2} + y^{2} = 9$ is:',
        options: [`$x^{2} + y^{2} = 3$`, `$x^{2} + y^{2} = 81$`, `$x^{2} + y^{2} = 18$`, `$x^{2} + y^{2} = 6$`],
        answer: 2,
        explanation: 'Step 1: Director radius is $a\\sqrt{2}$. Step 2: Here $a = 3$. Step 3: Square to get $18$. Step 4: Locus is $x^{2}+y^{2} = 18$, the third option.'
      },
      {
        q: 'Radical axis of $S_{1} = x^{2}+y^{2}+2x-2y+1$ and $S_{2} = x^{2}+y^{2}-2x+2y+1$ is:',
        options: [`$x + y = 0$`, `$2x + y = 0$`, `$y = 0$`, `$x - y = 0$`],
        answer: 3,
        explanation: 'Step 1: Subtract $S_{1}-S_{2} = 4x-4y$. Step 2: Set equal to zero. Step 3: Divide by $4$ to get $x-y = 0$. Step 4: This is the fourth option, perpendicular to the centre join.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Pole polar duality and power of a point',
        blocks: [
          {
            kind: 'theorem',
            body: 'For the circle $S = x^{2} + y^{2} + 2gx + 2fy + c = 0$ and point $(x_{1},y_{1})$, the expression $T = xx_{1} + yy_{1} + g(x+x_{1}) + f(y+y_{1}) + c$ gives the **chord of contact** $T = 0$ when the point is outside, the tangent at the point when it lies on the circle, and the polar otherwise. The number $S_{1} = x_{1}^{2} + y_{1}^{2} + 2gx_{1} + 2fy_{1} + c$ is the power of the point: positive outside, zero on, negative inside. The pair of tangents has combined equation $T^{2} = SS_{1}$, and the chord with midpoint $(x_{1},y_{1})$ is $T = S_{1}$.'
          },
          {
            kind: 'proof',
            body: 'Implicit differentiation of $S = 0$ gives slope $-(x+g)/(y+f)$ at a contact point, and clearing denominators yields $T = 0$ for the tangent there. If tangents from $(x_{1},y_{1})$ touch at $P$ and $Q$, both $P$ and $Q$ satisfy $T = 0$ with $(x_{1},y_{1})$ as pole, so $T = 0$ is the line $PQ$. The midpoint formula follows by shifting the centre to the origin, where symmetry forces the chord with midpoint $u$ to satisfy $u \\cdot x = |u|^{2} + (S_{1} - S(0))/2$, which translates back to $T = S_{1}$. Subtracting two circle equations cancels the quadratic terms and leaves the radical axis $S_{1} - S_{2} = 0$, the locus of equal powers.'
          },
          {
            kind: 'example',
            heading: 'Director circle as an orthogonal extremal locus',
            body: 'For $x^{2} + y^{2} = 9$ the condition that tangents from $(x_{1},y_{1})$ be perpendicular forces $x_{1}^{2} + y_{1}^{2} = 18$ via $T^{2} = SS_{1}$ with perpendicular slope product $-1$. Hence the director circle has radius $3\\sqrt{2}$, the extremal locus where the viewing angle is exactly a right angle. Points inside see the circle under an obtuse angle and points outside under an acute one, so power $S_{1} = x_{1}^{2} + y_{1}^{2} - 9$ orders the viewing geometry: $S_{1} = 9$ is the right angle threshold, larger values narrow the angle toward $0$ and smaller positive values widen it toward $\\pi$.'
          }
        ]
      }
    ]
  }
]
