import type { SectionContent } from '../library'

// ============================================================================
// JEE Mathematics Companion — Chapter 9: Vector Algebra & 3D Geometry
// Master study content (sections 9.1 - 9.4).
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const jeemathsCh09Content: SectionContent[] = [
  // ---------------------------------------------------------------- 9.1
  {
    sectionId: 'advmath-ch9-s1',
    readingTime: 8,
    intro: 'Dot and cross products convert geometric relations such as projection, area and Volume into algebraic computation. The scalar triple product tests coplanarity and measures parallelepiped Volume in one determinant. This section builds those products with their geometric meanings and standard identities.',
    objectives: [
      'Compute dot products for projection, angle and perpendicularity tests',
      'Compute cross products for area, unit normals and collinearity checks',
      'Evaluate scalar triple products for Volume and coplanarity decisions'
    ],
    concepts: [
      {
        term: 'Dot product and projection',
        kind: 'definition',
        statement: 'The **dot product** $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$ measures alignment, with `projection-form` projection of $\\vec{a}$ on $\\vec{b}$ equal to $\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|}$.',
        detail: 'Orthogonality test: $\\vec{a}\\cdot\\vec{b} = 0$ for nonzero vectors. Component form: $(a_{1},a_{2},a_{3})\\cdot(b_{1},b_{2},b_{3}) = a_{1}b_{1}+a_{2}b_{2}+a_{3}b_{3}$. Cauchy bound $|\\vec{a}\\cdot\\vec{b}| \\le |\\vec{a}||\\vec{b}|$.'
      },
      {
        term: 'Cross product and area',
        kind: 'definition',
        statement: 'The **cross product** $\\vec{a} \\times \\vec{b} = |\\vec{a}||\\vec{b}|\\sin\\theta\\,\\hat{n}$ has magnitude equal to the `area-form` parallelogram area and direction by the right-hand rule.',
        detail: 'Component determinant: $\\vec{a}\\times\\vec{b} = (a_{2}b_{3}-a_{3}b_{2}, a_{3}b_{1}-a_{1}b_{3}, a_{1}b_{2}-a_{2}b_{1})$. Triangle area is half this magnitude. Parallel vectors give zero cross product.'
      },
      {
        term: 'Scalar triple product and Volume',
        kind: 'theorem',
        statement: 'The **scalar triple product** $[\\vec{a}\\,\\vec{b}\\,\\vec{c}] = \\vec{a}\\cdot(\\vec{b}\\times\\vec{c})$ equals the `volume-det` determinant of components and the signed parallelepiped Volume.',
        detail: 'Cyclic symmetry: $[abc] = [bca] = [cab]$; swap changes sign. Coplanarity test: $[abc] = 0$. Tetrahedron Volume is $\\frac{1}{6}|[abc]|$. If any two vectors match, the product is zero.'
      },
      {
        term: 'Vector triple product expansion',
        kind: 'theorem',
        statement: 'The **BAC-CAB rule** $\\vec{a}\\times(\\vec{b}\\times\\vec{c}) = (\\vec{a}\\cdot\\vec{c})\\vec{b} - (\\vec{a}\\cdot\\vec{b})\\vec{c}$ expands any `triple-cross` into a plane combination.',
        detail: 'Lagrange identity: $|\\vec{a}\\times\\vec{b}|^{2} = |\\vec{a}|^{2}|\\vec{b}|^{2} - (\\vec{a}\\cdot\\vec{b})^{2}$. Use BAC-CAB to resolve nested crosses in line-plane and moment tasks.'
      },
      {
        term: 'Linear dependence and section formula',
        kind: 'method',
        statement: 'Vectors are **linearly dependent** in the plane for three vectors and in space for four, with the `section-form` point dividing $AB$ in ratio $m:n$ at $\\frac{n\\vec{a}+m\\vec{b}}{m+n}$ internally.',
        detail: 'Test dependence in space with scalar triple product of three, or rank of coordinates for four. Externally: $\\frac{-n\\vec{a}+m\\vec{b}}{m-n}$. Centroid of triangle: $\\frac{\\vec{a}+\\vec{b}+\\vec{c}}{3}$.'
      }
    ],
    examples: [
      {
        title: 'Projection and angle between vectors',
        problem: 'Given $\\vec{a} = (2, -1, 2)$ and $\\vec{b} = (1, 2, -2)$, find the projection of $\\vec{a}$ on $\\vec{b}$ and the cosine of the angle between them.',
        steps: [
          { label: 'Step 1', text: 'Dot product:\n```tex\na.b = 2*1 + (-1)*2 + 2*(-2) = 2 - 2 - 4 = -4\n```\nMagnitudes: $|\\vec{a}| = 3$, $|\\vec{b}| = 3$.' },
          { label: 'Step 2', text: 'Projection length $= \\frac{-4}{3}$. Vector projection $= \\frac{-4}{9}(1, 2, -2)$. Negative sign means obtuse alignment.' },
          { label: 'Step 3', text: 'Cosine $= \\frac{-4}{9}$, so angle $\\theta = \\cos^{-1}\\left(-\\frac{4}{9}\\right)$, obtuse as expected.' }
        ],
        result: 'Scalar projection $-\\frac{4}{3}$ and $\\cos\\theta = -\\frac{4}{9}$.'
      },
      {
        title: 'Tetrahedron Volume via triple product',
        problem: 'Find the Volume of the tetrahedron with vertices at origin $O$ and $A(1,2,3)$, $B(2,1,0)$, $C(0,1,2)$.',
        steps: [
          { label: 'Step 1', text: 'Form edge vectors $\\vec{OA}, \\vec{OB}, \\vec{OC}$ and their determinant: $\\begin{vmatrix} 1 & 2 & 3 \\\\ 2 & 1 & 0 \\\\ 0 & 1 & 2 \\end{vmatrix} = 1(2-0) - 2(4-0) + 3(2-0) = 2 - 8 + 6 = 0$? Recompute: second term $2(4-0) = 8$; third $3(2-0) = 6$; total $0$.' },
          { label: 'Step 2', text: 'Zero determinant signals coplanar points, hence zero Volume. Verify by finding plane: points satisfy $x + z = 2y$? Check $A$: $1+3 = 4 = 2(2)$; $B$: $2+0 = 2 = 2(1)$; $C$: $0+2 = 2 = 2(1)$.' },
          { label: 'Step 3', text: 'Since all satisfy one linear relation, they are coplanar with $O$? Check $O$: $0 = 0$ holds. Volume is $0$, a degenerate tetrahedron.' }
        ],
        result: 'Scalar triple product $0$; points are coplanar so Volume is $0$.'
      }
    ],
    keyTakeaways: [
      '$\\vec{a}\\cdot\\vec{b} = |a||b|\\cos\\theta$ gives projection $\\frac{\\vec{a}\\cdot\\vec{b}}{|b|}$ and the orthogonality test.',
      '$|\\vec{a}\\times\\vec{b}|$ is parallelogram area; half gives triangle area with direction by right-hand rule.',
      '$[abc]$ is parallelepiped Volume; zero means coplanar; $\\frac{1}{6}|[abc]|$ is tetrahedron Volume.',
      'BAC-CAB and section formula $\\frac{n\\vec{a}+m\\vec{b}}{m+n}$ resolve nested and division tasks.'
    ],
    quiz: [
      {
        q: 'If $\\vec{a}\\cdot\\vec{b} = 0$ with both nonzero, the vectors are:',
        options: ['Parallel', 'Perpendicular', 'Equal', 'Zero'],
        answer: 1,
        explanation: 'Step 1: Dot formula gives $|a||b|\\cos\\theta = 0$. Step 2: Magnitudes are nonzero. Step 3: Hence $\\cos\\theta = 0$. Step 4: So $\\theta = \\frac{\\pi}{2}$.'
      },
      {
        q: 'Area of triangle with adjacent sides $\\vec{a}, \\vec{b}$ equals:',
        options: [`$|\\vec{a}\\times\\vec{b}|$`, `$\\frac{1}{2}|\\vec{a}\\times\\vec{b}|$`, `$|\\vec{a}\\cdot\\vec{b}|$`, `$\\frac{1}{2}|\\vec{a}\\cdot\\vec{b}|$`],
        answer: 1,
        explanation: 'Step 1: Parallelogram area is $|a||b|\\sin\\theta$. Step 2: Cross magnitude equals that. Step 3: Triangle is half the parallelogram. Step 4: Hence half the cross magnitude.'
      },
      // PYQ-pattern: scalar triple product zero test for coplanarity
      {
        q: 'Vectors $(1, 0, 0)$, $(0, 1, 0)$, $(1, 1, 0)$ are:',
        options: ['Coplanar', 'Non-coplanar', 'Mutually perpendicular', 'Linearly independent in space'],
        answer: 0,
        explanation: 'Step 1: Form the $3 \\times 3$ determinant. Step 2: Third row is the sum of the first two. Step 3: Determinant is $0$. Step 4: Zero triple product means coplanar.'
      },
      {
        q: 'Projection of $(3, 4, 0)$ on $(1, 0, 0)$ has length:',
        options: [`$3$`, `$4$`, `$5$`, `$0$`],
        answer: 0,
        explanation: 'Step 1: Dot product is $3$. Step 2: Divisor magnitude is $1$. Step 3: Ratio is $3$. Step 4: First option matches.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Triple products and vector identities in space',
        blocks: [
          {
            kind: 'theorem',
            body: 'For vectors $a$, $b$ and $c$ in space the **scalar triple product** $[a \\; b \\; c] = a \\cdot (b \\times c)$ equals the signed volume of the spanned parallelepiped and vanishes exactly for coplanar vectors. Lagrange identity states $|a \\times b|^{2} = |a|^{2}|b|^{2} - (a \\cdot b)^{2}$, so $|a \\times b| = |a||b||\\sin\\theta|$. The vector triple product expands as $a \\times (b \\times c) = (a \\cdot c)b - (a \\cdot b)c$, known as the BAC CAB rule, and the scalar triple product is cyclic: $a \\cdot (b \\times c) = b \\cdot (c \\times a) = c \\cdot (a \\times b)$.'
          },
          {
            kind: 'proof',
            body: 'Write the triple product as a $3 \\times 3$ determinant in coordinates; swapping two rows flips the sign while cyclic permutation preserves it, giving antisymmetry and cyclicity at once. Expanding $|a \\times b|^{2}$ via $(a_{2}b_{3} - a_{3}b_{2})^{2} + (a_{3}b_{1} - a_{1}b_{3})^{2} + (a_{1}b_{2} - a_{2}b_{1})^{2}$ and comparing with $|a|^{2}|b|^{2} - (a \\cdot b)^{2}$ shows termwise equality after completing squares. The BAC CAB rule follows by checking that both sides are linear in each argument and agree on basis triples, or directly by noting that $a \\times (b \\times c)$ lies in the plane of $b$ and $c$ and is orthogonal to $a$ exactly as the stated combination.'
          },
          {
            kind: 'example',
            heading: 'Coplanarity read from a determinant',
            body: 'Vectors $(1,0,0)$, $(0,1,0)$ and $(1,1,0)$ have triple product $0$ because the third is the sum of the first two, so the determinant with those rows vanishes and the three are coplanar. Geometrically the spanned volume collapses since all three lie in the plane $z = 0$. By contrast $(1,0,0)$, $(0,1,0)$ and $(0,0,1)$ give triple product $1$, the unit cube volume, and are maximally independent. Thus the single number $[a \\; b \\; c]$ grades independence: zero means flat, small means nearly flat and extremal, and large means robustly three dimensional.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 9.2
  {
    sectionId: 'advmath-ch9-s2',
    readingTime: 9,
    intro: 'Lines in space need vector or symmetric Cartesian forms because a single Cartesian equation cannot capture a line in three dimensions. Direction cosines, angle between lines and the skew-line shortest distance form the core toolkit. This section develops those forms with intersection and coplanarity tests.',
    objectives: [
      'Write vector, symmetric and two-point forms of lines with direction ratios',
      'Compute angle between lines and test intersection versus skewness',
      'Apply the skew-line shortest-distance formula and its parallel-line reduction'
    ],
    concepts: [
      {
        term: 'Vector and symmetric forms of a line',
        kind: 'definition',
        statement: 'A line through $\\vec{a}$ along $\\vec{b}$ is the **vector line** $\\vec{r} = \\vec{a} + \\lambda\\vec{b}$, equivalently the `symmetric-form` $\\frac{x-x_{1}}{l} = \\frac{y-y_{1}}{m} = \\frac{z-z_{1}}{n}$.',
        detail: 'Direction ratios $(l,m,n)$ are proportional to direction cosines. Two-point form uses $\\vec{b} = \\vec{p}_{2}-\\vec{p}_{1}$. If a ratio is zero, its numerator is fixed (line parallel to a coordinate plane).'
      },
      {
        term: 'Angle between two lines',
        kind: 'theorem',
        statement: 'The **inter-line angle** $\\theta$ satisfies $\\cos\\theta = \\frac{|\\vec{b}_{1}\\cdot\\vec{b}_{2}|}{|\\vec{b}_{1}||\\vec{b}_{2}|}$ via the `direction-dot` of their direction vectors.',
        detail: 'Perpendicular when the dot is zero; parallel when directions are proportional. Direction cosines satisfy $l^{2}+m^{2}+n^{2} = 1$ and fix orientation uniquely up to sign.'
      },
      {
        term: 'Skew lines and coplanarity test',
        kind: 'theorem',
        statement: 'Two lines are **skew** when they are neither parallel nor intersecting, detected by the `coplanarity-det` $[(\\vec{a}_{2}-\\vec{a}_{1})\\,\\vec{b}_{1}\\,\\vec{b}_{2}] \\ne 0$.',
        detail: 'Zero means coplanar (intersecting or parallel). Skew lines admit a unique common perpendicular meeting both. Parallel distinct lines are coplanar with no meeting point.'
      },
      {
        term: 'Shortest distance between skew lines',
        kind: 'theorem',
        statement: 'The **skew distance** is $d = \\frac{|(\\vec{a}_{2}-\\vec{a}_{1})\\cdot(\\vec{b}_{1}\\times\\vec{b}_{2})|}{|\\vec{b}_{1}\\times\\vec{b}_{2}|}$, the `projection-volume` of the joining vector on the common normal.',
        detail: 'Numerator is the scalar triple product (parallelepiped Volume); denominator is the base parallelogram area. For parallel lines reduce to $d = \\frac{|\\vec{b}\\times(\\vec{a}_{2}-\\vec{a}_{1})|}{|\\vec{b}|}$. For intersecting lines the distance is zero.'
      },
      {
        term: 'Foot of common perpendicular',
        kind: 'method',
        statement: 'Feet of the **common perpendicular** are found by minimizing `distance-squared` $|(\\vec{a}_{1}+\\lambda\\vec{b}_{1}) - (\\vec{a}_{2}+\\mu\\vec{b}_{2})|^{2}$ in $\\lambda, \\mu$.',
        detail: 'Set partial derivatives to zero, equivalently require the join to be orthogonal to both $\\vec{b}_{1}$ and $\\vec{b}_{2}$. Solve the resulting two linear equations for $\\lambda, \\mu$ and substitute back.'
      }
    ],
    examples: [
      {
        title: 'Shortest distance between skew lines',
        problem: 'Find the shortest distance between $\\vec{r} = (1, 1, 0) + \\lambda(1, 0, 1)$ and $\\vec{r} = (2, 0, 1) + \\mu(0, 1, 1)$.',
        steps: [
          { label: 'Step 1', text: 'Joining data:\n```tex\na2-a1 = (1,-1,1), b1=(1,0,1), b2=(0,1,1)\n```\nCross: $\\vec{b}_{1}\\times\\vec{b}_{2} = (-1, -1, 1)$.' },
          { label: 'Step 2', text: 'Triple numerator: $(1,-1,1)\\cdot(-1,-1,1) = -1 + 1 + 1 = 1$. Absolute value $1$.' },
          { label: 'Step 3', text: 'Denominator $|(-1,-1,1)| = \\sqrt{3}$. Hence $d = \\frac{1}{\\sqrt{3}}$. Nonzero triple confirms skewness.' }
        ],
        result: 'Shortest distance $\\frac{1}{\\sqrt{3}}$ with unique common perpendicular.'
      },
      {
        title: 'Testing intersection of two lines',
        problem: 'Do $\\frac{x-1}{2} = \\frac{y-2}{3} = \\frac{z-3}{4}$ and $\\frac{x-2}{3} = \\frac{y-4}{4} = \\frac{z-5}{5}$ intersect?',
        steps: [
          { label: 'Step 1', text: 'Points $(1,2,3)$, $(2,4,5)$; directions $(2,3,4)$, $(3,4,5)$. Join $(1,2,2)$.' },
          { label: 'Step 2', text: 'Triple product $\\begin{vmatrix} 1 & 2 & 2 \\\\ 2 & 3 & 4 \\\\ 3 & 4 & 5 \\end{vmatrix} = 1(15-16) - 2(10-12) + 2(8-9) = -1 + 4 - 2 = 1 \\ne 0$.' },
          { label: 'Step 3', text: 'Nonzero means skew, hence no intersection. Directions are not proportional so not parallel either.' }
        ],
        result: 'Lines are skew with nonzero triple product, so they do not meet.'
      }
    ],
    keyTakeaways: [
      'Use $\\vec{r} = \\vec{a}+\\lambda\\vec{b}$ and $\\frac{x-x_{1}}{l} = \\frac{y-y_{1}}{m} = \\frac{z-z_{1}}{n}$ interchangeably.',
      'Angle follows $\\cos\\theta = \\frac{|b_{1}\\cdot b_{2}|}{|b_{1}||b_{2}|}$; zero dot means perpendicular.',
      'Coplanarity is $[(a_{2}-a_{1})\\,b_{1}\\,b_{2}] = 0$; nonzero means skew.',
      'Skew distance is triple-product magnitude over $|b_{1}\\times b_{2}|$; parallel case reduces to one cross.'
    ],
    quiz: [
      {
        q: 'Direction ratios of the line through $(1, 2, 3)$ and $(4, 5, 6)$ are:',
        options: [`$(3, 3, 3)$`, `$(1, 2, 3)$`, `$(4, 5, 6)$`, `$(5, 7, 9)$`],
        answer: 0,
        explanation: 'Step 1: Subtract to get $(3, 3, 3)$. Step 2: Any nonzero multiple is valid. Step 3: Simplest reduced form is $(1, 1, 1)$. Step 4: First option is the unreduced correct triple.'
      },
      // PYQ-pattern: shortest distance between skew lines via triple product
      {
        q: 'Shortest distance between $\\vec{r} = \\vec{a}_{1}+\\lambda\\vec{b}_{1}$ and $\\vec{r} = \\vec{a}_{2}+\\mu\\vec{b}_{2}$ equals:',
        options: [`$\\frac{|(a_{2}-a_{1})\\cdot(b_{1}\\times b_{2})|}{|b_{1}\\times b_{2}|}$`, `$|(a_{2}-a_{1})\\cdot(b_{1}\\times b_{2})|$`, `$\\frac{|b_{1}\\cdot b_{2}|}{|b_{1}||b_{2}|}$`, `$|a_{2}-a_{1}|$`],
        answer: 0,
        explanation: 'Step 1: Common normal is $b_{1} \\times b_{2}$. Step 2: Project the joining vector onto its unit form. Step 3: Numerator is the triple-product magnitude. Step 4: Denominator normalizes by $|b_{1} \\times b_{2}|$.'
      },
      {
        q: 'Lines with directions $(1, 2, 3)$ and $(2, 4, 6)$ are:',
        options: ['Perpendicular', 'Parallel', 'Skew always', 'Intersecting at origin'],
        answer: 1,
        explanation: 'Step 1: Second direction is twice the first. Step 2: Proportional directions mean parallel. Step 3: Skew needs nonparallel directions. Step 4: Hence parallel (coincident or distinct).'
      },
      {
        q: 'If $[(a_{2}-a_{1})\\,b_{1}\\,b_{2}] = 0$ with nonparallel directions, the lines:',
        options: ['Are skew', 'Intersect (coplanar)', 'Are parallel', 'Coincide necessarily'],
        answer: 1,
        explanation: 'Step 1: Zero triple means the three vectors are coplanar. Step 2: Nonparallel coplanar lines in space must meet. Step 3: Skew is the nonzero case. Step 4: So they intersect.'
      }
    ]
  },
  // ---------------------------------------------------------------- 9.3
  {
    sectionId: 'advmath-ch9-s3',
    readingTime: 8,
    intro: 'Planes are specified by a normal vector plus one point, and the normal form $ax + by + cz + d = 0$ encodes orientation and offset together. Angles between planes, families through a line and bisector planes extend line-geometry ideas one dimension up. This section systematizes those plane tools.',
    objectives: [
      'Write normal, intercept and three-point forms of a plane and convert among them',
      'Compute angle between planes and between a line and a plane',
      'Use families $P_{1} + \\lambda P_{2} = 0$ and bisector planes for constraints'
    ],
    concepts: [
      {
        term: 'Normal form of a plane',
        kind: 'definition',
        statement: 'A plane through $\\vec{a}$ with **normal** $\\vec{n}$ is $(\\vec{r}-\\vec{a})\\cdot\\vec{n} = 0$, equivalently the `cartesian-plane` $ax + by + cz + d = 0$.',
        detail: 'Normalized: $lx + my + nz = p$ with $l^{2}+m^{2}+n^{2} = 1$ gives distance $p$ from origin. Intercept form: $\\frac{x}{a}+\\frac{y}{b}+\\frac{z}{c} = 1$. Three non-collinear points fix $\\vec{n} = \\vec{AB}\\times\\vec{AC}$.'
      },
      {
        term: 'Angle between planes and line-plane angle',
        kind: 'theorem',
        statement: 'The **inter-plane angle** satisfies $\\cos\\theta = \\frac{|\\vec{n}_{1}\\cdot\\vec{n}_{2}|}{|\\vec{n}_{1}||\\vec{n}_{2}|}$, while the `line-plane` angle $\\phi$ with direction $\\vec{b}$ satisfies $\\sin\\phi = \\frac{|\\vec{b}\\cdot\\vec{n}|}{|\\vec{b}||\\vec{n}|}$.',
        detail: 'Perpendicular planes have orthogonal normals; parallel planes have proportional $(a,b,c)$. A line lies in a plane when its point satisfies it and $\\vec{b}\\cdot\\vec{n} = 0$.'
      },
      {
        term: 'Family of planes through a line',
        kind: 'method',
        statement: 'All planes through the intersection line of $P_{1} = 0$ and $P_{2} = 0$ form the **pencil** $P_{1} + \\lambda P_{2} = 0$ with `pencil-param` $\\lambda$.',
        detail: 'Impose passing through a point, perpendicularity to a plane, or a distance condition to fix $\\lambda$. The member $P_{2} = 0$ itself needs the infinite-parameter limit.'
      },
      {
        term: 'Bisector planes',
        kind: 'theorem',
        statement: 'The **bisector planes** of $P_{1} = 0$ and $P_{2} = 0$ are $\\frac{|P_{1}|}{\\sqrt{a_{1}^{2}+b_{1}^{2}+c_{1}^{2}}} = \\frac{|P_{2}|}{\\sqrt{a_{2}^{2}+b_{2}^{2}+c_{2}^{2}}}$ in `normalized-pair` form.',
        detail: 'One bisects the acute dihedral angle, the other the obtuse. Origin-containing versus origin-free selection follows the signs of $d_{1}, d_{2}$ after normalization.'
      },
      {
        term: 'Coplanarity of lines via planes',
        kind: 'method',
        statement: 'Two lines are **coplanar** exactly when some `containing-plane` $ax+by+cz+d = 0$ contains both, equivalently the triple-product test of Section 9.2 vanishes.',
        detail: 'Construct the plane through one line plus a point of the other using $\\vec{n} = \\vec{b}_{1}\\times(\\vec{a}_{2}-\\vec{a}_{1})$, then verify the second direction is orthogonal to $\\vec{n}$.'
      }
    ],
    examples: [
      {
        title: 'Plane through three points',
        problem: 'Find the plane through $(1, 0, 0)$, $(0, 1, 0)$, $(0, 0, 1)$.',
        steps: [
          { label: 'Step 1', text: 'Edges $\\vec{AB} = (-1, 1, 0)$, $\\vec{AC} = (-1, 0, 1)$. Normal:\n```tex\nn = AB x AC = (1, 1, 1)\n```\nCompute: $(1(1)-0(0), 0(-1)-(-1)(1), (-1)(0)-1(-1)) = (1,1,1)$.' },
          { label: 'Step 2', text: 'Equation $(x-1) + y + z = 0$, i.e. $x + y + z = 1$.' },
          { label: 'Step 3', text: 'Intercept form confirms unit intercepts on all axes; distance from origin $\\frac{1}{\\sqrt{3}}$.' }
        ],
        result: 'Plane $x + y + z = 1$ with normal $(1,1,1)$.'
      },
      {
        title: 'Line-plane angle and piercing point',
        problem: 'Find the angle between line $\\frac{x-1}{1} = \\frac{y}{2} = \\frac{z-1}{2}$ and plane $2x - y + 2z = 6$, plus the piercing point.',
        steps: [
          { label: 'Step 1', text: 'Direction $\\vec{b} = (1,2,2)$, normal $\\vec{n} = (2,-1,2)$. Compute $\\vec{b}\\cdot\\vec{n} = 2-2+4 = 4$; $|b| = 3$, $|n| = 3$.' },
          { label: 'Step 2', text: '$\\sin\\phi = \\frac{4}{9}$, so $\\phi = \\sin^{-1}\\left(\\frac{4}{9}\\right)$.' },
          { label: 'Step 3', text: 'Parametrize $(1+t, 2t, 1+2t)$ into plane: $2(1+t) - 2t + 2(1+2t) = 6$ gives $4 + 4t = 6$, so $t = \\frac{1}{2}$ and point $(1.5, 1, 2)$.' }
        ],
        result: 'Angle $\\sin^{-1}\\left(\\frac{4}{9}\\right)$ with piercing point $\\left(\\frac{3}{2}, 1, 2\\right)$.'
      }
    ],
    keyTakeaways: [
      '$(\\vec{r}-\\vec{a})\\cdot\\vec{n} = 0$ and $ax+by+cz+d = 0$ encode a plane by orientation plus offset.',
      'Plane-plane angle uses $\\cos\\theta$ of normals; line-plane uses $\\sin\\phi$ of direction with normal.',
      '$P_{1}+\\lambda P_{2} = 0$ spans planes through an edge line for point and angle constraints.',
      'Bisector planes equate normalized $|P_{1}|, |P_{2}|$ for acute versus obtuse dihedral halves.'
    ],
    quiz: [
      {
        q: 'Normal to the plane through $(1,0,0)$, $(0,1,0)$, $(0,0,1)$ is parallel to:',
        options: [`$(1, 1, 1)$`, `$(1, 0, 0)$`, `$(1, 1, 0)$`, `$(0, 0, 1)$`],
        answer: 0,
        explanation: 'Step 1: Edge vectors are $(-1,1,0)$ and $(-1,0,1)$. Step 2: Cross product is $(1,1,1)$. Step 3: Plane is $x+y+z = 1$. Step 4: Normal direction is $(1,1,1)$.'
      },
      {
        q: 'Angle $\\phi$ between line with direction $\\vec{b}$ and plane with normal $\\vec{n}$ satisfies:',
        options: [`$\\cos\\phi = \\frac{|b\\cdot n|}{|b||n|}$`, `$\\sin\\phi = \\frac{|b\\cdot n|}{|b||n|}$`, `$\\tan\\phi = \\frac{|b\\cdot n|}{|b||n|}$`, '$\\phi = 0$ always'],
        answer: 1,
        explanation: 'Step 1: $\\vec{b}\\cdot\\vec{n}$ measures against the normal. Step 2: Complement relates normal-angle to plane-angle. Step 3: Hence sine, not cosine. Step 4: Second option is correct.'
      },
      // PYQ-pattern: pencil of planes through an edge line
      {
        q: 'Planes through the line $x + y = 1, z = 0$ have form:',
        options: [`$(x+y-1) + \\lambda z = 0$`, `$x + y + z = 1$`, '$z = \\lambda$ only', `$x = \\lambda, y = 1-\\lambda$`],
        answer: 0,
        explanation: 'Step 1: Line is $P_{1} = x+y-1 = 0$ with $P_{2} = z = 0$. Step 2: Pencil is $P_{1}+\\lambda P_{2} = 0$. Step 3: This spans all planes through the edge. Step 4: First option matches.'
      },
      {
        q: 'Intercept form of $2x + 3y + 6z = 12$ is:',
        options: [`$\\frac{x}{6}+\\frac{y}{4}+\\frac{z}{2} = 1$`, `$\\frac{x}{2}+\\frac{y}{3}+\\frac{z}{6} = 1$`, `$x + y + z = 12$`, `$\\frac{x}{12}+\\frac{y}{12}+\\frac{z}{12} = 1$`],
        answer: 0,
        explanation: 'Step 1: Divide by $12$. Step 2: Get $\\frac{2x}{12}+\\frac{3y}{12}+\\frac{6z}{12} = 1$. Step 3: Simplify to $\\frac{x}{6}+\\frac{y}{4}+\\frac{z}{2} = 1$. Step 4: First option matches.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Planes as linear functionals and duality',
        blocks: [
          {
            kind: 'theorem',
            body: 'A plane $ax + by + cz + d = 0$ with normal $n = (a,b,c) \\ne 0$ is a level set of the **linear functional** $f(x) = n \\cdot x + d$. The signed distance from $x_{0}$ to the plane is $(n \\cdot x_{0} + d)/|n|$, with absolute value for distance. The family through the line $P_{1} = 0$ and $P_{2} = 0$ is exactly the pencil $P_{1} + \\lambda P_{2} = 0$ together with $P_{2} = 0$. Angle $\\phi$ between planes with normals $n_{1}$ and $n_{2}$ satisfies $\\cos\\phi = |n_{1} \\cdot n_{2}|/(|n_{1}||n_{2}|)$, extremal at $0$ for parallel and $\\pi/2$ for perpendicular planes.'
          },
          {
            kind: 'derivation',
            body: 'Decompose $x_{0} - q$ along $n$ and across the plane, where $q$ is any point on the plane with $n \\cdot q + d = 0$. The across component is annihilated by $n$, leaving $n \\cdot (x_{0} - q) = n \\cdot x_{0} + d$. Dividing by $|n|$ projects onto the unit normal and yields the signed distance formula. Doubling the displacement gives the reflection $x_{0}^{\\prime} = x_{0} - 2((n \\cdot x_{0} + d)/|n|^{2})n$, and halving toward the plane gives the foot. The pencil claim follows because $P_{1} + \\lambda P_{2}$ vanishes wherever both $P_{1}$ and $P_{2}$ vanish, and every plane through their intersection has normal in the span of $n_{1}$ and $n_{2}$.'
          },
          {
            kind: 'example',
            heading: 'Pencil through an edge and intercept scaling',
            body: 'The edge $x + y = 1$ with $z = 0$ is $P_{1} = x + y - 1 = 0$ and $P_{2} = z = 0$, so all planes through it are $(x+y-1) + \\lambda z = 0$. Varying $\\lambda$ rotates about the edge from the horizontal table $z = 0$ toward the vertical wall $x + y = 1$. Dividing $2x + 3y + 6z = 12$ by $12$ gives $x/6 + y/4 + z/2 = 1$, exposing intercepts $6$, $4$ and $2$ directly. The normal $(2,3,6)$ has length $7$, so distance from the origin is $12/7$, the sharp constant by the projection formula.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 9.4
  {
    sectionId: 'advmath-ch9-s4',
    readingTime: 9,
    intro: 'Distance from a point to a plane, foot of perpendicular and mirror image are one formula family with single and doubled displacements. The same projection logic gives line-to-plane distance for parallel cases. This section fixes those image-foot formulas with verification habits.',
    objectives: [
      'Compute point-to-plane distance with the normalized $|ax_{1}+by_{1}+cz_{1}+d|$ form',
      'Find foot $(x, y, z)$ via the proportional-displacement formula along the normal',
      'Reflect points and lines across planes by doubling the foot displacement'
    ],
    concepts: [
      {
        term: 'Point-to-plane distance',
        kind: 'theorem',
        statement: 'Distance from $(x_{1}, y_{1}, z_{1})$ to the **plane** $ax+by+cz+d = 0$ is $d = \\frac{|ax_{1}+by_{1}+cz_{1}+d|}{\\sqrt{a^{2}+b^{2}+c^{2}}}$ with `signed-form` carrying the side.',
        detail: 'Parallel planes $ax+by+cz+d_{1} = 0$ and $ax+by+cz+d_{2} = 0$ are $|d_{1}-d_{2}|/\\sqrt{a^{2}+b^{2}+c^{2}}$ apart. Origin distance is $|d|/\\sqrt{a^{2}+b^{2}+c^{2}}$.'
      },
      {
        term: 'Foot of perpendicular',
        kind: 'theorem',
        statement: 'The **foot** $Q$ of $P(x_{1}, y_{1}, z_{1})$ on the plane satisfies the `foot-ratio` $\\frac{x-x_{1}}{a} = \\frac{y-y_{1}}{b} = \\frac{z-z_{1}}{c} = -\\frac{ax_{1}+by_{1}+cz_{1}+d}{a^{2}+b^{2}+c^{2}}$.',
        detail: 'Geometrically move from $P$ along $\\pm(a,b,c)$ until the plane equation is satisfied. Check $Q$ in the plane equation to catch arithmetic slips.'
      },
      {
        term: 'Mirror image across a plane',
        kind: 'theorem',
        statement: 'The **mirror image** $P^{\\prime}$ doubles the foot displacement: `image-form` $\\frac{x-x_{1}}{a} = \\frac{y-y_{1}}{b} = \\frac{z-z_{1}}{c} = -\\frac{2(ax_{1}+by_{1}+cz_{1}+d)}{a^{2}+b^{2}+c^{2}}$.',
        detail: 'Midpoint of $P$ and $P^{\\prime}$ is the foot. Image of a line: reflect two of its points (or its piercing point plus one more) and join. Symmetric points preserve distance to the plane.'
      },
      {
        term: 'Distance from a line to a parallel plane',
        kind: 'method',
        statement: 'When $\\vec{b}\\cdot\\vec{n} = 0$, the line is **parallel** to the plane and the `point-pick` distance from any line point to the plane is the line-plane distance.',
        detail: 'If $\\vec{b}\\cdot\\vec{n} \\ne 0$, the line pierces the plane at one point (zero distance). Skew concepts do not apply to line-plane pairs.'
      },
      {
        term: 'Plane through foot-image checks',
        kind: 'insight',
        statement: 'Every **verification** substitutes the foot back into the plane and checks `midpoint-test` that $P$-to-foot equals foot-to-image in length and opposite in direction.',
        detail: 'Also verify the join $PP^{\\prime}$ is parallel to $(a,b,c)$. These two checks catch sign errors in the displacement ratio, the most common slip.'
      }
    ],
    examples: [
      {
        title: 'Foot and image across a coordinate plane blend',
        problem: 'Find the foot and mirror image of $(1, 2, 3)$ in the plane $x + 2y + 2z = 12$.',
        steps: [
          { label: 'Step 1', text: 'Evaluate $S = 1 + 4 + 6 - 12 = -1$. Ratio base:\n```tex\n(x-1)/1 = (y-2)/2 = (z-3)/2 = -S/9 = 1/9\n```\nSince $a^{2}+b^{2}+c^{2} = 9$.' },
          { label: 'Step 2', text: 'Foot: $x = 1 + \\frac{1}{9} = \\frac{10}{9}$, $y = 2 + \\frac{2}{9} = \\frac{20}{9}$, $z = 3 + \\frac{2}{9} = \\frac{29}{9}$. Check: $\\frac{10+40+58}{9} = \\frac{108}{9} = 12$.' },
          { label: 'Step 3', text: 'Double for image: $x = 1 + \\frac{2}{9} = \\frac{11}{9}$, $y = 2 + \\frac{4}{9} = \\frac{22}{9}$, $z = 3 + \\frac{4}{9} = \\frac{31}{9}$. Midpoint is the foot.' }
        ],
        result: 'Foot $\\left(\\frac{10}{9}, \\frac{20}{9}, \\frac{29}{9}\\right)$; image $\\left(\\frac{11}{9}, \\frac{22}{9}, \\frac{31}{9}\\right)$.'
      },
      {
        title: 'Distance between parallel planes',
        problem: 'Find the distance between $2x - y + 2z = 4$ and $2x - y + 2z = 10$.',
        steps: [
          { label: 'Step 1', text: 'Normals match $(2,-1,2)$, so planes are parallel. Use $|d_{1}-d_{2}|/\\sqrt{a^{2}+b^{2}+c^{2}}$ with $d_{1} = -4$, $d_{2} = -10$.' },
          { label: 'Step 2', text: 'Numerator $|{-4}-({-10})| = 6$. Denominator $\\sqrt{4+1+4} = 3$.' },
          { label: 'Step 3', text: 'Distance $= \\frac{6}{3} = 2$. Any point e.g. $(2,0,0)$ on the first gives the same via point-plane formula.' }
        ],
        result: 'Parallel planes are $2$ units apart.'
      }
    ],
    keyTakeaways: [
      'Point-plane distance is $\\frac{|ax_{1}+by_{1}+cz_{1}+d|}{\\sqrt{a^{2}+b^{2}+c^{2}}}$; parallel planes use $|d_{1}-d_{2}|$ on top.',
      'Foot moves once along $(a,b,c)$ by $-S/(a^{2}+b^{2}+c^{2})$; image moves twice as far.',
      'Line parallel to plane ($b\\cdot n = 0$) uses any line point for distance; otherwise it pierces.',
      'Verify feet in the plane equation and check midpoint and parallelism for images.'
    ],
    quiz: [
      {
        q: 'Distance from $(1, 1, 1)$ to $x + 2y + 2z - 6 = 0$ is:',
        options: [`$\\frac{1}{3}$`, `$1$`, `$\\frac{5}{3}$`, `$3$`],
        answer: 0,
        explanation: 'Step 1: Numerator is $|1+2+2-6| = 1$. Step 2: Denominator is $\\sqrt{1+4+4} = 3$. Step 3: Ratio is $\\frac{1}{3}$. Step 4: First option matches.'
      },
      // PYQ-pattern: foot of perpendicular from origin onto a plane
      {
        q: 'Foot of perpendicular from origin onto $x + y + z = 3$ is:',
        options: [`$(1, 1, 1)$`, `$(3, 0, 0)$`, `$(0, 0, 3)$`, `$(0, 1, 2)$`],
        answer: 0,
        explanation: 'Step 1: Line is $(t, t, t)$. Step 2: Plane gives $3t = 3$. Step 3: So $t = 1$. Step 4: Foot is $(1, 1, 1)$.'
      },
      {
        q: 'Image of $(0, 0, 0)$ in $x + y + z = 1$ is:',
        options: [`$(1, 1, 1)$`, `$(\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3})$`, `$(2, 0, 0)$`, `$(0, 1, 0)$`],
        answer: 1,
        explanation: 'Step 1: Foot from origin is $(\\frac{1}{3}, \\frac{1}{3}, \\frac{1}{3})$. Step 2: Doubling gives $(\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3})$. Step 3: Check midpoint satisfies plane: sum $= 1$. Step 4: Second option matches.'
      },
      {
        q: 'Distance between $x + 2y + 2z = 5$ and $x + 2y + 2z = 11$ is:',
        options: [`$6$`, `$2$`, `$3$`, `$\\frac{11}{5}$`],
        answer: 1,
        explanation: 'Step 1: Numerator is $|5-11| = 6$. Step 2: Denominator is $3$. Step 3: Ratio is $2$. Step 4: Second option matches.'
      }
    ]
  }
]
