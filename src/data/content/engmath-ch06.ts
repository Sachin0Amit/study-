import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 6: Vector Calculus
// Sections 6.1 – 6.4. Master study content.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh06Content: SectionContent[] = [
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: 'engmath-ch6-s1',
    readingTime: 9,
    intro: 'Scalar fields assign a number to every point while vector fields assign an arrow, and the three differential operators studied here convert between them. The gradient turns a scalar hill into a vector flow, while divergence and curl extract the outflow density and the swirl density from a vector field. This section builds the operators, their product rules and the twin tests for solenoidal and irrotational fields.',
    objectives: [
      'Compute gradient, divergence and curl in Cartesian form and interpret each geometrically',
      'Apply product and quotient rules for $\\nabla$ and verify the identities $\\nabla \\times (\\nabla f) = \\mathbf{0}$ and $\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$',
      'Classify fields as solenoidal or irrotational and construct potentials where they exist'
    ],
    concepts: [
      {
        term: 'Gradient of a scalar field',
        kind: 'definition',
        statement: 'The **gradient** of a differentiable scalar function $f(x, y, z)$ is the vector field $\\nabla f = f_{x}\\,\\mathbf{i} + f_{y}\\,\\mathbf{j} + f_{z}\\,\\mathbf{k}$ computed in code as `grad(f)`. It points in the direction of fastest increase of $f$ with magnitude equal to that maximal rate. Its direction is everywhere orthogonal to the level surfaces $f(x, y, z) = c$.',
        detail: 'When $f$ measures height or temperature, $\\nabla f$ is the uphill arrow field. The directional derivative along a unit vector $\\mathbf{u}$ is the dot product $D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u}$, so $\\nabla f = \\mathbf{0}$ marks stationary points where all first partials vanish.'
      },
      {
        term: 'Divergence as outflow density',
        kind: 'definition',
        statement: 'The **divergence** of $\\mathbf{F} = P\\,\\mathbf{i} + Q\\,\\mathbf{j} + R\\,\\mathbf{k}$ is the scalar $\\nabla \\cdot \\mathbf{F} = P_{x} + Q_{y} + R_{z}$ computed in code as `div(F)`. It measures net outflow per unit volume at each point. Positive divergence marks a source and negative divergence marks a sink.',
        detail: 'A useful picture is a tiny closed box around the point: $\\nabla \\cdot \\mathbf{F}$ is the limit of outward flux divided by volume as the box shrinks. Constant fields have zero divergence, while the radial field $\\mathbf{F} = x\\,\\mathbf{i} + y\\,\\mathbf{j} + z\\,\\mathbf{k}$ has $\\nabla \\cdot \\mathbf{F} = 3$.'
      },
      {
        term: 'Curl as swirl density',
        kind: 'definition',
        statement: 'The **curl** of $\\mathbf{F} = P\\,\\mathbf{i} + Q\\,\\mathbf{j} + R\\,\\mathbf{k}$ is the vector $\\nabla \\times \\mathbf{F}$ given by the determinant form with rows `i, j, k` on top. It measures local rotation, with direction along the axis of swirl by the right-hand rule. Vanishing curl means the field is locally free of rotation.',
        detail: 'In components $\\nabla \\times \\mathbf{F} = (R_{y} - Q_{z})\\,\\mathbf{i} + (P_{z} - R_{x})\\,\\mathbf{j} + (Q_{x} - P_{y})\\,\\mathbf{k}$. The rotation field $\\mathbf{F} = -y\\,\\mathbf{i} + x\\,\\mathbf{j}$ has curl $2\\,\\mathbf{k}$, twice the angular speed, while every gradient field has identically zero curl.'
      },
      {
        term: 'Product rules and second-order identities',
        kind: 'theorem',
        statement: 'The **product rules** extend the single-variable Leibniz pattern: $\\nabla(fg) = f\\,\\nabla g + g\\,\\nabla f$ and $\\nabla \\cdot (f\\mathbf{F}) = f\\,(\\nabla \\cdot \\mathbf{F}) + \\nabla f \\cdot \\mathbf{F}$ where `f` is scalar and `F` is vector. Two composite identities always vanish: $\\nabla \\times (\\nabla f) = \\mathbf{0}$ and $\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$. The Laplacian is the surviving second-order scalar $\\nabla^{2} f = \\nabla \\cdot (\\nabla f) = f_{xx} + f_{yy} + f_{zz}$.',
        detail: 'These identities follow from equality of mixed partials $f_{xy} = f_{yx}$ for smooth functions. They give fast checks: any field with nonzero curl cannot be a gradient, and any vector with nonzero divergence cannot be a curl. The vector triple identity $\\nabla \\times (\\nabla \\times \\mathbf{F}) = \\nabla(\\nabla \\cdot \\mathbf{F}) - \\nabla^{2}\\mathbf{F}$ completes the set.'
      },
      {
        term: 'Solenoidal and irrotational fields',
        kind: 'method',
        statement: 'A field is called **solenoidal** when $\\nabla \\cdot \\mathbf{F} = 0$ everywhere, tested in code by `div(F) == 0`, and **irrotational** when $\\nabla \\times \\mathbf{F} = \\mathbf{0}$, tested by `curl(F) == 0`. Every curl is solenoidal and every gradient is irrotational by the identities above. On a simply connected domain with no holes, irrotational implies conservative, so $\\mathbf{F} = \\nabla f$ for some potential $f$.',
        detail: 'Magnetic induction with $\\nabla \\cdot \\mathbf{B} = 0$ is the standard solenoidal illustration, while an electrostatic field with $\\nabla \\times \\mathbf{E} = \\mathbf{0}$ is the standard irrotational illustration. The punctured-plane vortex shows why the domain condition matters: it is irrotational where defined yet admits no single-valued potential around the hole.'
      }
    ],
    examples: [
      {
        title: 'Classify and find the potential of a polynomial field',
        problem: 'Consider $\\mathbf{F}(x, y, z) = (2xy + z)\\,\\mathbf{i} + (x^{2} + 2yz)\\,\\mathbf{j} + (y^{2} + x)\\,\\mathbf{k}$. Decide whether $\\mathbf{F}$ is solenoidal or irrotational and find a potential if one exists.',
        steps: [
          { label: 'Step 1', text: 'Compute divergence: $P_{x} = 2y$, $Q_{y} = 2z$, $R_{z} = 0$, so $\\nabla \\cdot \\mathbf{F} = 2y + 2z$, which is not identically zero. Hence $\\mathbf{F}$ is not solenoidal.\n```text\ndiv check: Px = 2y, Qy = 2z, Rz = 0 -> div = 2y + 2z (not zero)\n```' },
          { label: 'Step 2', text: 'Compute curl components: $R_{y} - Q_{z} = 2y - 2y = 0$, $P_{z} - R_{x} = 1 - 1 = 0$, $Q_{x} - P_{y} = 2x - 2x = 0$. Thus $\\nabla \\times \\mathbf{F} = \\mathbf{0}$ and the field is irrotational on all of $\\mathbb{R}^{3}$.' },
          { label: 'Step 3', text: 'Integrate $f_{x} = 2xy + z$ to $f = x^{2}y + xz + g(y, z)$, then $f_{y} = x^{2} + g_{y}$ must equal $x^{2} + 2yz$, so $g_{y} = 2yz$ and $g = y^{2}z + h(z)$. Finally $f_{z} = x + y^{2} + h_{z}$ must equal $y^{2} + x$, so $h_{z} = 0$ and $f(x, y, z) = x^{2}y + xz + y^{2}z + C$.' }
        ],
        result: '$\\nabla \\cdot \\mathbf{F} = 2y + 2z$ so the field is not solenoidal, while $\\nabla \\times \\mathbf{F} = \\mathbf{0}$ so it is irrotational with potential $f(x, y, z) = x^{2}y + xz + y^{2}z + C$.'
      },
      {
        title: 'Verify the curl-of-gradient and div-of-curl identities',
        problem: 'Let $f(x, y, z) = x^{2}y + yz^{2}$ and $\\mathbf{F}(x, y, z) = xz\\,\\mathbf{i} + y^{2}\\,\\mathbf{j} + xy\\,\\mathbf{k}$. Verify that $\\nabla \\times (\\nabla f) = \\mathbf{0}$ and $\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$.',
        steps: [
          { label: 'Step 1', text: 'Form $\\nabla f = 2xy\\,\\mathbf{i} + (x^{2} + z^{2})\\,\\mathbf{j} + 2yz\\,\\mathbf{k}$. Its curl has $x$-component $(2z - 2z) = 0$, $y$-component $(2y - 2y) = 0$ and $z$-component $(2x - 2x) = 0$ by equality of mixed partials.' },
          { label: 'Step 2', text: 'Form $\\nabla \\times \\mathbf{F} = (x - 0)\\,\\mathbf{i} + (x - y)\\,\\mathbf{j} + (0 - x)\\,\\mathbf{k}$ after evaluating $R_{y} - Q_{z}$, $P_{z} - R_{x}$ and $Q_{x} - P_{y}$. Each component is a first-degree polynomial.' },
          { label: 'Step 3', text: 'Take divergence: $\\partial_{x}(x) + \\partial_{y}(x - y) + \\partial_{z}(-x) = 1 - 1 + 0 = 0$. Both identities hold, confirming that no gradient swirls and no curl accumulates.\n```text\ncurl(grad f) = <0,0,0>; div(curl F) = 1 - 1 + 0 = 0\n```' }
        ],
        result: 'Both composite operators vanish identically: $\\nabla \\times (\\nabla f) = \\mathbf{0}$ and $\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$, as predicted for smooth inputs.'
      }
    ],
    keyTakeaways: [
      'Gradient $\\nabla f = \\langle f_{x}, f_{y}, f_{z} \\rangle$ points toward fastest increase and is orthogonal to level surfaces $f = c$.',
      'Divergence $\\nabla \\cdot \\mathbf{F} = P_{x} + Q_{y} + R_{z}$ is outflow per volume; curl $\\nabla \\times \\mathbf{F}$ is swirl per area with axis by the right-hand rule.',
      'Product rules $\\nabla(fg) = f\\,\\nabla g + g\\,\\nabla f$ and $\\nabla \\cdot (f\\mathbf{F}) = f\\,\\nabla \\cdot \\mathbf{F} + \\nabla f \\cdot \\mathbf{F}$ mirror the single-variable Leibniz rule.',
      'Always $\\nabla \\times (\\nabla f) = \\mathbf{0}$ and $\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$; solenoidal means zero divergence and irrotational means zero curl.'
    ],
    quiz: [
      {
        // PYQ-pattern — divergence of a polynomial vector field (rephrased, values changed)
        q: 'For $\\mathbf{F}(x, y, z) = xy\\,\\mathbf{i} + yz\\,\\mathbf{j} + zx\\,\\mathbf{k}$, the divergence $\\nabla \\cdot \\mathbf{F}$ equals:',
        options: [`$xy + yz + zx$`, `$0$`, `$x + y + z$`, `$3$`],
        answer: 2,
        explanation: 'Step 1: Differentiate each component in its own variable to get $P_{x} = y$, $Q_{y} = z$, $R_{z} = x$. Step 2: Add the three partials to obtain $\\nabla \\cdot \\mathbf{F} = y + z + x$. Step 3: Recognize the symmetric sum $x + y + z$ as the correct form with no constant or product structure.'
      },
      {
        q: 'Which statement about $\\mathbf{F}(x, y) = -y\\,\\mathbf{i} + x\\,\\mathbf{j}$ is correct?',
        options: ['It has curl $2\\,\\mathbf{k}$ and is therefore not a gradient field', 'It is irrotational with zero curl', 'It has divergence $2$ and is solenoidal', 'It equals $\\nabla(x^{2} + y^{2})$'],
        answer: 0,
        explanation: 'Step 1: Compute $Q_{x} - P_{y} = 1 - (-1) = 2$, so $\\nabla \\times \\mathbf{F} = 2\\,\\mathbf{k}$. Step 2: Recall that every gradient has zero curl, so nonzero curl rules out any potential. Step 3: Compute $P_{x} + Q_{y} = 0 + 0 = 0$, confirming solenoidal but rotational character.'
      },
      {
        q: 'If $f(x, y, z) = x^{2} + y^{2} + z^{2}$, then $|\\nabla f|$ at $(1, 2, 2)$ equals:',
        options: [`$3$`, `$9$`, `$18$`, `$6$`],
        answer: 3,
        explanation: 'Step 1: Form $\\nabla f = 2x\\,\\mathbf{i} + 2y\\,\\mathbf{j} + 2z\\,\\mathbf{k}$. Step 2: Evaluate at the point to get $\\langle 2, 4, 4 \\rangle$. Step 3: Compute the length $\\sqrt{4 + 16 + 16} = \\sqrt{36} = 6$.'
      },
      {
        // PYQ-pattern — solenoidal and irrotational classification (rephrased, values changed)
        q: 'A smooth field $\\mathbf{F}$ on all of $\\mathbb{R}^{3}$ satisfies $\\nabla \\cdot \\mathbf{F} = 0$ and $\\nabla \\times \\mathbf{F} = \\mathbf{0}$. Which conclusion follows?',
        options: ['No potential can exist because divergence vanishes', 'There exists $f$ with $\\mathbf{F} = \\nabla f$ and moreover $\\nabla^{2} f = 0$', 'There exists $\\mathbf{G}$ with $\\mathbf{F} = \\nabla \\times \\mathbf{G}$ but no scalar potential', 'The field must be identically zero'],
        answer: 1,
        explanation: 'Step 1: Use the simply connected domain result that vanishing curl implies $\\mathbf{F} = \\nabla f$ for some $f$. Step 2: Impose zero divergence to get $0 = \\nabla \\cdot \\nabla f = \\nabla^{2} f$. Step 3: Conclude $f$ is harmonic, while nonzero constant fields show the field need not vanish.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Differential forms unify grad curl div',
        blocks: [
          {
            kind: 'theorem',
            body: 'On open sets in $\\mathbb{R}^{3}$ identify $0$-forms with functions, $1$-forms with fields via $F \\cdot dr = P \\, dx + Q \\, dy + R \\, dz$, $2$-forms with fields via flux, and $3$-forms with densities. Then the exterior derivative $d$ satisfies $d^{2} = 0$, which is simultaneously $\\nabla \\times (\\nabla f) = 0$ and $\\nabla \\cdot (\\nabla \\times F) = 0$. The **Poincare lemma** gives the converse on star shaped domains: irrotational implies $F = \\nabla f$ and solenoidal implies $F = \\nabla \\times G$. Cohomology measures the global failure on domains with holes.'
          },
          {
            kind: 'derivation',
            body: 'For $f$ set $df = f_{x} \\, dx + f_{y} \\, dy + f_{z} \\, dz$, the gradient in covector dress. For $\\omega = P \\, dx + Q \\, dy + R \\, dz$ compute $d\\omega = (R_{y} - Q_{z}) \\, dy \\wedge dz + (P_{z} - R_{x}) \\, dz \\wedge dx + (Q_{x} - P_{y}) \\, dx \\wedge dy$, whose coefficients are exactly $\\nabla \\times F$. The Hodge star $\\star$ with $\\star dx = dy \\wedge dz$ converts between $1$-forms and $2$-forms, so $\\nabla \\cdot F = \\star d \\star (F \\cdot dr)$ and $\\nabla^{2} f = \\star d \\star df$. Equality of mixed partials $f_{xy} = f_{yx}$ is the coordinate root of $d^{2} = 0$.'
          },
          {
            kind: 'remark',
            body: 'The punctured plane vortex $(-y \\, dx + x \\, dy)/(x^{2} + y^{2})$ is closed $d\\omega = 0$ but not exact, representing a nonzero de Rham class whose period $\\oint \\omega = 2\\pi$ counts winding. Physics meets this in the Aharonov Bohm phase and Dirac monopoles. Computation inherits the structure through discrete exterior calculus and mimetic finite differences, which preserve $d^{2} = 0$ at the matrix level so that simulated fields satisfy the identities exactly rather than approximately.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 6.2
  {
    sectionId: 'engmath-ch6-s2',
    readingTime: 8,
    intro: 'Differentiation has a twin operation: integration of fields along curves, over surfaces and through volumes. Line integrals accumulate work or mass along a path, surface integrals accumulate flux through a membrane, and volume integrals accumulate total charge or mass. This section fixes parametrizations, orientation choices and the evaluation pipeline for all three.',
    objectives: [
      'Evaluate scalar and vector line integrals from parametrizations including orientation reversal',
      'Parametrize surfaces and compute flux $\\iint_{S} \\mathbf{F} \\cdot \\mathbf{n}\\,dS$ via $\\mathbf{r}_{u} \\times \\mathbf{r}_{v}$',
      'Reduce volume integrals to iterated integrals and recognize symmetry shortcuts'
    ],
    concepts: [
      {
        term: 'Scalar line integral',
        kind: 'definition',
        statement: 'The **scalar line integral** $\\int_{C} f\\,ds = \\int_{a}^{b} f(\\mathbf{r}(t))\\,|\\mathbf{r}^{\\prime}(t)|\\,dt$ accumulates $f$ along $C$ with arc-length weight `ds`. It is independent of the direction of travel. Setting $f = 1$ returns the arc length of $C$.',
        detail: 'Think of a wire with density $f$: each piece of length $ds$ contributes $f\\,ds$ to the total mass. The speed factor $|\\mathbf{r}^{\\prime}(t)|$ converts parameter increments $dt$ into true length elements.'
      },
      {
        term: 'Vector line integral as work',
        kind: 'definition',
        statement: 'The **work integral** $\\int_{C} \\mathbf{F} \\cdot d\\mathbf{r} = \\int_{a}^{b} \\mathbf{F}(\\mathbf{r}(t)) \\cdot \\mathbf{r}^{\\prime}(t)\\,dt$ sums the tangential component of $\\mathbf{F}$ along $C$ using the differential `dr`. Reversing orientation flips its sign. On a closed loop it is called circulation.',
        detail: 'Only the component along motion counts, matching the physics of work. The equivalent forms $\\int_{C} \\mathbf{F} \\cdot \\mathbf{T}\\,ds$ and $\\int_{C} P\\,dx + Q\\,dy + R\\,dz$ suit different parametrizations, with $\\mathbf{T}$ the unit tangent.'
      },
      {
        term: 'Parametrized surface and normal',
        kind: 'method',
        statement: 'A **parametrized surface** $\\mathbf{r}(u, v)$ carries the tangent vectors $\\mathbf{r}_{u}$ and $\\mathbf{r}_{v}$ whose cross product `ru_cross_rv` gives a normal. The vector area element is $\\mathbf{n}\\,dS = (\\mathbf{r}_{u} \\times \\mathbf{r}_{v})\\,du\\,dv$. Its length $|\\mathbf{r}_{u} \\times \\mathbf{r}_{v}|$ is the scalar area factor.',
        detail: 'For a graph $z = g(x, y)$ the choice $\\mathbf{r}(x, y) = \\langle x, y, g(x, y) \\rangle$ yields $\\mathbf{r}_{x} \\times \\mathbf{r}_{y} = \\langle -g_{x}, -g_{y}, 1 \\rangle$. Spheres, cylinders and cones each have standard angle-based parametrizations with precomputed area factors.'
      },
      {
        term: 'Flux surface integral',
        kind: 'definition',
        statement: 'The **flux** $\\iint_{S} \\mathbf{F} \\cdot \\mathbf{n}\\,dS = \\iint_{D} \\mathbf{F}(\\mathbf{r}(u, v)) \\cdot (\\mathbf{r}_{u} \\times \\mathbf{r}_{v})\\,du\\,dv$ measures net flow of $\\mathbf{F}$ across $S$ through the oriented element `n_dS`. Outward is the default for closed surfaces. Swapping the orientation changes the sign.',
        detail: 'Flux counts field lines crossing the membrane: tangential flow contributes nothing. For a constant field through a flat patch, flux reduces to normal component times area. The scalar surface integral $\\iint_{S} f\\,dS$ uses $|\\mathbf{r}_{u} \\times \\mathbf{r}_{v}|$ instead and ignores orientation.'
      },
      {
        term: 'Volume integral and symmetry',
        kind: 'method',
        statement: 'A **volume integral** $\\iiint_{V} f\\,dV$ adds a density over a solid by iterating one variable at a time with the element `dV`. Order of iteration follows the simplest limits. Odd symmetry over symmetric solids integrates to zero without computation.',
        detail: 'Cylindrical and spherical coordinates absorb round boundaries: $dV = r\\,dr\\,d\\theta\\,dz$ and $dV = \\rho^{2}\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$. Always sketch $V$ first, since limits read directly from the bounding surfaces.'
      }
    ],
    examples: [
      {
        title: 'Work along a helical path',
        problem: 'Evaluate $\\int_{C} \\mathbf{F} \\cdot d\\mathbf{r}$ for $\\mathbf{F}(x, y, z) = y\\,\\mathbf{i} - x\\,\\mathbf{j} + z\\,\\mathbf{k}$ along $\\mathbf{r}(t) = \\langle \\cos t, \\sin t, t \\rangle$ with $0 \\le t \\le \\pi$.',
        steps: [
          { label: 'Step 1', text: 'Evaluate the field on the curve: $\\mathbf{F}(\\mathbf{r}(t)) = \\sin t\\,\\mathbf{i} - \\cos t\\,\\mathbf{j} + t\\,\\mathbf{k}$ and $\\mathbf{r}^{\\prime}(t) = \\langle -\\sin t, \\cos t, 1 \\rangle$.\n```text\nF(r(t)) = <sin t, -cos t, t>; rprime = <-sin t, cos t, 1>\n```' },
          { label: 'Step 2', text: 'Dot the two vectors: $\\mathbf{F} \\cdot \\mathbf{r}^{\\prime} = -\\sin^{2} t - \\cos^{2} t + t = t - 1$. The trigonometric part collapses by $\\sin^{2} t + \\cos^{2} t = 1$.' },
          { label: 'Step 3', text: 'Integrate $\\int_{0}^{\\pi} (t - 1)\\,dt = \\left[\\frac{t^{2}}{2} - t\\right]_{0}^{\\pi} = \\frac{\\pi^{2}}{2} - \\pi$. The negative constant shifts the quadratic growth downward.' }
        ],
        result: '$\\int_{C} \\mathbf{F} \\cdot d\\mathbf{r} = \\frac{\\pi^{2}}{2} - \\pi$. Reversing the helix would change the sign of this work value.'
      },
      {
        title: 'Flux of a radial field through a cylinder side',
        problem: 'Find the outward flux of $\\mathbf{F}(x, y, z) = x\\,\\mathbf{i} + y\\,\\mathbf{j} + z\\,\\mathbf{k}$ through the lateral surface $S$ of the cylinder $x^{2} + y^{2} = 4$ with $0 \\le z \\le 3$, excluding top and bottom.',
        steps: [
          { label: 'Step 1', text: 'Parametrize by $\\mathbf{r}(\\theta, z) = \\langle 2\\cos\\theta, 2\\sin\\theta, z \\rangle$ with $0 \\le \\theta \\le 2\\pi$ and $0 \\le z \\le 3$. Then $\\mathbf{r}_{\\theta} \\times \\mathbf{r}_{z} = \\langle 2\\cos\\theta, 2\\sin\\theta, 0 \\rangle$ points outward.' },
          { label: 'Step 2', text: 'Dot with the field: $\\mathbf{F} \\cdot (\\mathbf{r}_{\\theta} \\times \\mathbf{r}_{z}) = 4\\cos^{2}\\theta + 4\\sin^{2}\\theta = 4$. The $z$-component drops because the side normal has no vertical part.' },
          { label: 'Step 3', text: 'Integrate $\\int_{0}^{3} \\int_{0}^{2\\pi} 4\\,d\\theta\\,dz = 4 \\cdot 2\\pi \\cdot 3 = 24\\pi$. The constant integrand makes the flux equal to density times developed area.\n```text\nflux = integral_0^3 integral_0^{2pi} 4 dtheta dz = 24*pi\n```' }
        ],
        result: 'Outward flux through the lateral surface is $24\\pi$. Including the two disks would add the top and bottom contributions separately.'
      }
    ],
    keyTakeaways: [
      'Scalar line integrals use $\\int_{C} f\\,ds = \\int_{a}^{b} f(\\mathbf{r}(t))\\,|\\mathbf{r}^{\\prime}(t)|\\,dt$ and ignore orientation.',
      'Work integrals $\\int_{C} \\mathbf{F} \\cdot d\\mathbf{r} = \\int_{a}^{b} \\mathbf{F} \\cdot \\mathbf{r}^{\\prime}\\,dt$ flip sign when the path is reversed.',
      'Flux is $\\iint_{S} \\mathbf{F} \\cdot \\mathbf{n}\\,dS = \\iint_{D} \\mathbf{F} \\cdot (\\mathbf{r}_{u} \\times \\mathbf{r}_{v})\\,du\\,dv$ with outward default on closed surfaces.',
      'Volume integrals iterate $\\iiint_{V} f\\,dV$ in the coordinate system matching the symmetry of $V$.'
    ],
    quiz: [
      {
        q: 'The value of $\\int_{C} 1\\,ds$ along a curve $C$ equals:',
        options: [`$0$`, 'The arc length of $C$', 'The curvature of $C$', 'The work of a unit field along $C$'],
        answer: 1,
        explanation: 'Step 1: Substitute $f = 1$ into $\\int_{C} f\\,ds = \\int_{a}^{b} 1 \\cdot |\\mathbf{r}^{\\prime}(t)|\\,dt$. Step 2: Recognize $\\int_{a}^{b} |\\mathbf{r}^{\\prime}(t)|\\,dt$ as the arc-length formula. Step 3: Conclude the integral reports pure geometric length with no density weight.'
      },
      {
        // PYQ-pattern — work integral along a parametrized curve (rephrased, values changed)
        q: 'If $C$ is parametrized by $\\mathbf{r}(t)$ with $0 \\le t \\le 1$ and $-C$ denotes the reversed path, then $\\int_{-C} \\mathbf{F} \\cdot d\\mathbf{r}$ equals:',
        options: [`$\\int_{C} \\mathbf{F} \\cdot d\\mathbf{r}$`, `$0$ for every $\\mathbf{F}$`, `$\\int_{C} |\\mathbf{F}|\\,ds$`, `$-\\int_{C} \\mathbf{F} \\cdot d\\mathbf{r}$`],
        answer: 3,
        explanation: 'Step 1: Reverse the parametrization so the velocity $\\mathbf{r}^{\\prime}$ changes sign at each point. Step 2: Observe the dot product $\\mathbf{F} \\cdot \\mathbf{r}^{\\prime}$ therefore changes sign. Step 3: Conclude the whole integral negates while scalar integrals with $ds$ remain unchanged.'
      },
      {
        q: 'For the graph $z = g(x, y)$, the upward vector area element $(\\mathbf{r}_{x} \\times \\mathbf{r}_{y})\\,dx\\,dy$ equals:',
        options: [`$\\langle -g_{x}, -g_{y}, 1 \\rangle\\,dx\\,dy$`, `$\\langle g_{x}, g_{y}, -1 \\rangle\\,dx\\,dy$`, `$\\langle 1, 1, 1 \\rangle\\,dx\\,dy$`, '$\\langle 0, 0, 1 \\rangle\\,dx\\,dy$ only when $g$ is constant'],
        answer: 0,
        explanation: 'Step 1: Write $\\mathbf{r}_{x} = \\langle 1, 0, g_{x} \\rangle$ and $\\mathbf{r}_{y} = \\langle 0, 1, g_{y} \\rangle$. Step 2: Evaluate the cross product to get $\\langle -g_{x}, -g_{y}, 1 \\rangle$. Step 3: Note the positive $z$-component confirms upward orientation for any smooth $g$.'
      },
      {
        q: 'The outward flux of constant $\\mathbf{F} = \\langle 0, 0, 5 \\rangle$ through the unit sphere centered at the origin equals:',
        options: ['$5$ times the volume of the ball', '$5$ times the area of the sphere', `$0$`, `$5$`],
        answer: 2,
        explanation: 'Step 1: Apply the divergence theorem mentally: $\\nabla \\cdot \\mathbf{F} = 0$ for any constant field. Step 2: Conclude net outward flux through any closed surface vanishes since inflow cancels outflow. Step 3: Distinguish this from flux through an open patch, which can be nonzero and orientation dependent.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.3
  {
    sectionId: 'engmath-ch6-s3',
    readingTime: 8,
    intro: 'Green theorem trades a line integral around a closed plane curve for a double integral over its interior, and back again. One form converts circulation into interior curl, the other converts outward flux into interior divergence. This section states both forms, fixes the positive orientation convention and shows how area drops out as a special case.',
    objectives: [
      'State circulation-curl and flux-divergence forms of Green theorem with hypotheses',
      'Choose the cheaper side: evaluate whichever of line or double integral is simpler',
      'Detect orientation and hole pitfalls that change signs or add boundary pieces'
    ],
    concepts: [
      {
        term: 'Positive orientation',
        kind: 'definition',
        statement: 'A simple closed plane curve is **positively oriented** when its interior remains on the left during traversal, which for one outer loop means `counterclockwise`. Holes carry the opposite clockwise sense so that each region boundary is walked with interior on the left. Reversing all directions negates every circulation integral.',
        detail: 'For an annulus the outer circle runs counterclockwise while the inner circle runs clockwise. Forgetting the inner reversal is the most frequent sign slip. Sketch arrows before computing whenever holes are present.'
      },
      {
        term: 'Circulation-curl form',
        kind: 'theorem',
        statement: 'The **circulation-curl** form states $\\oint_{C} P\\,dx + Q\\,dy = \\iint_{D} (Q_{x} - P_{y})\\,dA$ for positively oriented $C$ bounding $D$, remembered in code as `curl2D = Qx - Py`. It requires $P$ and $Q$ to have continuous partials on all of $D$. The integrand is the scalar curl of the plane field.',
        detail: 'When $Q_{x} - P_{y}$ is constant, the double integral collapses to that constant times area. When the field is conservative with $Q_{x} = P_{y}$, both sides vanish on simply connected $D$. The punctured vortex with $Q_{x} - P_{y} = 0$ away from the origin warns that the hypothesis must hold at every interior point.'
      },
      {
        term: 'Flux-divergence form',
        kind: 'theorem',
        statement: 'The **flux-divergence** form states $\\oint_{C} \\mathbf{F} \\cdot \\mathbf{n}\\,ds = \\oint_{C} P\\,dy - Q\\,dx = \\iint_{D} (P_{x} + Q_{y})\\,dA$ with outward `n` as the normal. It converts outward crossing rate into interior divergence. The two Green forms differ only by rotating the field through a right angle.',
        detail: 'Here $\\mathbf{n}$ is the outward unit normal, not the tangent. For the radial field $\\mathbf{F} = x\\,\\mathbf{i} + y\\,\\mathbf{j}$ the divergence is $2$, so outward flux through any simple loop equals twice the enclosed area. This form is the planar preview of the Gauss divergence theorem.'
      },
      {
        term: 'Area as a line integral',
        kind: 'method',
        statement: 'Setting $Q_{x} - P_{y} = 1$ turns Green theorem into an **area machine**: $A = \\oint_{C} x\\,dy = -\\oint_{C} y\\,dx = \\frac{1}{2}\\oint_{C} (x\\,dy - y\\,dx)$ with the symmetric integrand coded as `area_form`. Any of the three line integrals returns the enclosed area for positively oriented $C$. Clockwise traversal returns the negative of the area.',
        detail: 'The symmetric form is often the most robust because errors in $x\\,dy$ and $y\\,dx$ partly cancel. For polygons the line integral reduces to a shoelace sum over edges. For ellipses $x = a\\cos t$ and $y = b\\sin t$ it returns $\\pi a b$ in one line.'
      },
      {
        term: 'Holes and piecewise boundaries',
        kind: 'insight',
        statement: 'With **holes**, $D$ has several boundary pieces and Green theorem sums over all of them with compatible orientations via `sum_boundaries`. A field undefined at even one interior point cannot use the theorem on the whole $D$. The remedy is to excise the singular point with a small inner circle and apply Green on the holed region.',
        detail: 'The classic illustration punches a tiny disk around the origin for the vortex field: the two boundary circulations differ by the $2\\pi$ trapped at the hole. Piecewise smooth outer boundaries such as rectangles are handled edge by edge, with interior edge cancellations doing the heavy lifting in proofs.'
      }
    ],
    examples: [
      {
        title: 'Circulation two ways for a polynomial field',
        problem: 'Verify Green theorem for $\\mathbf{F}(x, y) = (x^{2} + y)\\,\\mathbf{i} + (2x - y^{2})\\,\\mathbf{j}$ where $C$ is the unit circle traversed counterclockwise.',
        steps: [
          { label: 'Step 1', text: 'Compute $Q_{x} - P_{y} = 2 - 1 = 1$. The double integral over the unit disk is therefore $\\iint_{D} 1\\,dA = \\pi$, the disk area.\n```text\nQx - Py = 2 - 1 = 1 -> double integral = area = pi\n```' },
          { label: 'Step 2', text: 'Parametrize $C$ by $\\mathbf{r}(t) = \\langle \\cos t, \\sin t \\rangle$ with $0 \\le t \\le 2\\pi$. Then $P\\,dx + Q\\,dy$ becomes a trigonometric polynomial in $t$ whose oscillatory terms integrate to zero.' },
          { label: 'Step 3', text: 'Direct line integration leaves $\\int_{0}^{2\\pi} 1\\,dt$ after simplification, giving $\\pi$. Both sides agree, confirming the theorem for this field and domain.' }
        ],
        result: 'Line and double sides both equal $\\pi$: $\\oint_{C} P\\,dx + Q\\,dy = \\iint_{D} 1\\,dA = \\pi$.'
      },
      {
        title: 'Area of an ellipse without a double integral',
        problem: 'Use Green theorem to find the area enclosed by $\\frac{x^{2}}{9} + \\frac{y^{2}}{4} = 1$.',
        steps: [
          { label: 'Step 1', text: 'Parametrize the positively oriented ellipse by $x = 3\\cos t$ and $y = 2\\sin t$ with $0 \\le t \\le 2\\pi$. Then $dx = -3\\sin t\\,dt$ and $dy = 2\\cos t\\,dt$.' },
          { label: 'Step 2', text: 'Apply $A = \\frac{1}{2}\\oint_{C} (x\\,dy - y\\,dx) = \\frac{1}{2}\\int_{0}^{2\\pi} (6\\cos^{2} t + 6\\sin^{2} t)\\,dt$. The bracket collapses to $6$ by the Pythagorean identity.' },
          { label: 'Step 3', text: 'Integrate $\\frac{1}{2} \\cdot 6 \\cdot 2\\pi = 6\\pi$. This matches $\\pi a b$ with $a = 3$ and $b = 2$.\n```text\nA = ($1/2$)*integral_0^{2pi} 6 dt = 6*pi\n```' }
        ],
        result: 'Enclosed area is $6\\pi$. No double integral was needed once the boundary parametrization was in place.'
      }
    ],
    keyTakeaways: [
      'Positively oriented means interior on the left: outer loop counterclockwise and each hole clockwise.',
      'Circulation form $\\oint_{C} P\\,dx + Q\\,dy = \\iint_{D} (Q_{x} - P_{y})\\,dA$ trades boundary work for interior curl.',
      'Flux form $\\oint_{C} P\\,dy - Q\\,dx = \\iint_{D} (P_{x} + Q_{y})\\,dA$ trades outward crossing for interior divergence.',
      'Area options $A = \\oint_{C} x\\,dy = -\\oint_{C} y\\,dx = \\frac{1}{2}\\oint_{C} (x\\,dy - y\\,dx)$ follow by forcing the curl integrand to $1$.'
    ],
    quiz: [
      {
        // PYQ-pattern — circulation via Green theorem (rephrased, values changed)
        q: 'Let $C$ be the positively oriented unit circle and $\\mathbf{F}(x, y) = (x^{2} + y)\\,\\mathbf{i} + (2x - y^{2})\\,\\mathbf{j}$. Then $\\oint_{C} \\mathbf{F} \\cdot d\\mathbf{r}$ equals:',
        options: [`$\\pi$`, `$0$`, `$2\\pi$`, `$-\\pi$`],
        answer: 0,
        explanation: 'Step 1: Compute $Q_{x} - P_{y} = 2 - 1 = 1$ on the whole disk. Step 2: Convert the line integral to $\\iint_{D} 1\\,dA$ by the circulation form. Step 3: Evaluate as the unit-disk area $\\pi$.'
      },
      {
        q: 'Green theorem in flux form equates $\\oint_{C} \\mathbf{F} \\cdot \\mathbf{n}\\,ds$ with:',
        options: [`$\\iint_{D} (Q_{x} - P_{y})\\,dA$`, `$\\iint_{D} (P_{y} - Q_{x})\\,dA$`, `$\\iint_{D} (P_{x} + Q_{y})\\,dA$`, '$0$ for every field'],
        answer: 2,
        explanation: 'Step 1: Recall the outward normal form uses divergence $P_{x} + Q_{y}$, not scalar curl. Step 2: Distinguish it from the circulation form which uses $Q_{x} - P_{y}$. Step 3: Reject the universal-zero option since only divergence-free fields give zero flux.'
      },
      {
        q: 'Using $A = \\frac{1}{2}\\oint_{C} (x\\,dy - y\\,dx)$, the area inside $x = 3\\cos t$, $y = 2\\sin t$ is:',
        options: [`$12\\pi$`, `$6\\pi$`, `$3\\pi$`, `$36\\pi$`],
        answer: 1,
        explanation: 'Step 1: Substitute to get $x\\,dy - y\\,dx = 6(\\cos^{2} t + \\sin^{2} t)\\,dt = 6\\,dt$. Step 2: Integrate $\\frac{1}{2} \\int_{0}^{2\\pi} 6\\,dt = 6\\pi$. Step 3: Confirm against $\\pi a b = \\pi \\cdot 3 \\cdot 2 = 6\\pi$.'
      },
      {
        // PYQ-pattern — Green theorem with a singular point (rephrased, values changed)
        q: 'The field $\\mathbf{F} = \\frac{-y\\,\\mathbf{i} + x\\,\\mathbf{j}}{x^{2} + y^{2}}$ satisfies $Q_{x} - P_{y} = 0$ away from the origin. For $C$ the unit circle around the origin, $\\oint_{C} \\mathbf{F} \\cdot d\\mathbf{r}$ equals:',
        options: ['$0$ by Green theorem applied to the whole disk', '$\\pi$ as the disk area', 'It depends on the radius and cannot be fixed', '$2\\pi$ because the field is undefined at the interior origin'],
        answer: 3,
        explanation: 'Step 1: Check the hypothesis that $P$ and $Q$ be smooth on all of $D$, which fails at the origin. Step 2: Excise the singularity and compute directly with $\\mathbf{r}(t) = \\langle \\cos t, \\sin t \\rangle$ to get $\\int_{0}^{2\\pi} 1\\,dt = 2\\pi$. Step 3: Conclude Green theorem on the full disk does not apply despite zero curl elsewhere.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Green theorem with sharp regularity',
        blocks: [
          {
            kind: 'theorem',
            body: 'Let $D$ be bounded with piecewise smooth positively oriented boundary $\\partial D$ and let $P, Q$ be continuously differentiable on a neighborhood of the closure. Then $\\oint_{\\partial D} P \\, dx + Q \\, dy = \\iint_{D} (Q_{x} - P_{y}) \\, dA$. The circulation form takes $P = F_{1}$, $Q = F_{2}$ to get $\\oint F \\cdot dr = \\iint (\\nabla \\times F) \\cdot k \\, dA$, while the flux form with $P = -F_{2}$, $Q = F_{1}$ gives $\\oint F \\cdot n \\, ds = \\iint \\nabla \\cdot F \\, dA$. Area follows as $\\mathrm{Area}(D) = \\oint x \\, dy = -\\oint y \\, dx = \\frac{1}{2} \\oint (x \\, dy - y \\, dx)$.'
          },
          {
            kind: 'proof',
            body: 'Prove the identity on rectangles by Fubini: $\\iint Q_{x} \\, dA$ integrates in $x$ to boundary fluxes on vertical sides, and $-\\iint P_{y} \\, dA$ to fluxes on horizontal sides. Triangulate or tile a general $D$ by rectangles and small triangles; interior edge contributions cancel in pairs because orientations oppose, leaving only $\\partial D$. Piecewise smoothness lets corners contribute as limits, and $C^{1}$ regularity justifies Fubini plus the fundamental theorem at each step. Multiply connected regions follow by cutting holes to the outer boundary with slits whose contributions cancel.'
          },
          {
            kind: 'example',
            heading: 'A punctured vortex defeats the naive identity',
            body: 'Set $P = -y/(x^{2} + y^{2})$ and $Q = x/(x^{2} + y^{2})$ on $\\mathbb{R}^{2}$ minus the origin. Direct computation gives $Q_{x} - P_{y} = 0$ wherever defined, yet $\\oint_{x^{2}+y^{2}=1} P \\, dx + Q \\, dy = 2\\pi$. The hypothesis fails because $P, Q$ blow up inside the disk, so $D$ is not a valid Green domain. Excising a small disk of radius $\\epsilon$ restores the theorem: the outer $2\\pi$ balances the inner $-2\\pi$. The residue $2\\pi$ is the winding number, a first glimpse of cohomology.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 6.4
  {
    sectionId: 'engmath-ch6-s4',
    readingTime: 9,
    intro: 'Stokes and Gauss lift Green theorem one dimension higher: Stokes equates swirl around a space rim to flux of curl through any cap it bounds, while Gauss equates outward flux through a closed shell to interior divergence. Both let the solver replace a hard integral by an easier one. This section states each theorem, fixes orientation by the right-hand rule and outward normal, and exhibits the cheapest-side strategy.',
    objectives: [
      'State Stokes theorem and Gauss divergence theorem with orientation rules',
      'Convert hard boundary integrals to easy interior ones and conversely',
      'Spot closed-surface and rimless-surface shortcuts that force answers to zero'
    ],
    concepts: [
      {
        term: 'Stokes theorem',
        kind: 'theorem',
        statement: 'The **Stokes** relation $\\oint_{C} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_{S} (\\nabla \\times \\mathbf{F}) \\cdot \\mathbf{n}\\,dS$ holds for any oriented surface $S$ with compatible rim $C$, coded as `curl_flux`. Compatibility follows the right-hand rule: curling fingers along $C$ points the thumb along $\\mathbf{n}$. Any two caps sharing the same rim give the same curl flux.',
        detail: 'Green theorem is the flat special case where $S$ lies in a plane. The power lies in cap choice: replace a wavy soap film by the flat disk it spans whenever the curl is simpler on the flat side. If $\\nabla \\times \\mathbf{F} = \\mathbf{0}$, every rim circulation vanishes.'
      },
      {
        term: 'Gauss divergence theorem',
        kind: 'theorem',
        statement: 'The **Gauss** relation $\\oiint_{S} \\mathbf{F} \\cdot \\mathbf{n}\\,dS = \\iiint_{V} (\\nabla \\cdot \\mathbf{F})\\,dV$ holds for the closed boundary $S$ of a solid $V$ with outward `n_out` as normal. It turns net outward flow into total interior production. Piecewise shells such as boxes and cylinders sum face by face on the left but need only one volume integral on the right.',
        detail: 'For constant divergence the flux is that constant times volume. For divergence-free fields the closed flux is always zero, expressing conservation. The theorem fails if $\\mathbf{F}$ blows up anywhere inside $V$, exactly as in the planar hole warning.'
      },
      {
        term: 'Orientation pitfalls',
        kind: 'insight',
        statement: 'Orientation errors flip signs: Stokes needs the **right-hand** pairing of `C` and `n`, while Gauss needs the **outward** normal on every closed piece. For a cylinder the side, top and bottom each point away from the interior, not all upward. Drawing normals before integrating prevents the most common sign loss.',
        detail: 'A Mobius band admits no consistent normal and cannot serve as a Stokes surface. For open surfaces either normal is legal as long as rim and normal obey the right-hand rule together. Always state the chosen normal explicitly when the surface is not closed.'
      },
      {
        term: 'Cheapest-side strategy',
        kind: 'method',
        statement: 'The **cheapest-side** habit compares the boundary and interior integrals and evaluates the easier one using `min_cost_side`. Constant curl favors the area of $S$, while symmetric divergence favors volume. When both sides look hard, a smarter cap or a divergence-free observation may collapse the work to zero.',
        detail: 'Typical wins: replace circulation around a tilted ellipse by curl flux through its flat disk, or replace flux through six box faces by one triple integral. Pattern recognition starts by computing $\\nabla \\times \\mathbf{F}$ and $\\nabla \\cdot \\mathbf{F}$ first, since zeros and constants dictate the shortcut.'
      },
      {
        term: 'Closed and rimless shortcuts',
        kind: 'insight',
        statement: 'A **closed** surface has no rim, so Stokes gives $\\oiint_{S} (\\nabla \\times \\mathbf{F}) \\cdot \\mathbf{n}\\,dS = 0$ for every smooth $\\mathbf{F}$ via `closed_curl_zero`. Dually, circulation around a rimless loop is meaningless without a cap. These topological zeros answer whole families of items without any integration.',
        detail: 'If $S$ is closed, its rim integral is empty and the curl flux must vanish. If $V$ is symmetric and the divergence integrand is odd, the Gauss volume side vanishes by symmetry. Spotting these configurations first saves the longest computations.'
      }
    ],
    examples: [
      {
        title: 'Stokes shortcut through a flat disk',
        problem: 'Let $\\mathbf{F}(x, y, z) = -y\\,\\mathbf{i} + x\\,\\mathbf{j} + z\\,\\mathbf{k}$ and let $C$ be the circle $x^{2} + y^{2} = 1$ at height $z = 2$, oriented counterclockwise from above. Compute $\\oint_{C} \\mathbf{F} \\cdot d\\mathbf{r}$ via Stokes theorem.',
        steps: [
          { label: 'Step 1', text: 'Compute $\\nabla \\times \\mathbf{F} = 2\\,\\mathbf{k}$. The curl is constant and vertical, so flux through any cap depends only on its projected area.\n```text\ncurl F = <0, 0, 2>; cap = flat disk z = 2, n = +k\n```' },
          { label: 'Step 2', text: 'Choose the flat disk $S$ given by $x^{2} + y^{2} \\le 1$ at $z = 2$ with $\\mathbf{n} = \\mathbf{k}$, compatible with the counterclockwise rim by the right-hand rule.' },
          { label: 'Step 3', text: 'Then $\\iint_{S} 2\\,\\mathbf{k} \\cdot \\mathbf{k}\\,dS = 2 \\cdot (\\text{area } \\pi) = 2\\pi$. Direct rim parametrization gives the same value after the $z$-component drops out.' }
        ],
        result: '$\\oint_{C} \\mathbf{F} \\cdot d\\mathbf{r} = 2\\pi$. The wavy-cap freedom was unused here because the flat disk was already the cheapest cap.'
      },
      {
        title: 'Gauss flux out of a unit cube',
        problem: 'Compute the outward flux of $\\mathbf{F}(x, y, z) = x\\,\\mathbf{i} + y\\,\\mathbf{j} + z\\,\\mathbf{k}$ through the closed surface of the unit cube $0 \\le x, y, z \\le 1$.',
        steps: [
          { label: 'Step 1', text: 'Compute $\\nabla \\cdot \\mathbf{F} = 1 + 1 + 1 = 3$. Constant divergence means flux equals three times volume regardless of shape details.' },
          { label: 'Step 2', text: 'The cube volume is $1$, so $\\iiint_{V} 3\\,dV = 3$. Six separate face integrals would each need their own parametrization and outward normal.' },
          { label: 'Step 3', text: 'Conclude outward flux is $3$. The same reasoning gives $3V$ for any solid, with $V$ its volume.\n```text\ndiv = 3; volume = 1 -> flux = 3*1 = 3\n```' }
        ],
        result: '$\\oiint_{S} \\mathbf{F} \\cdot \\mathbf{n}\\,dS = 3$. Gauss theorem replaced six face integrals by one constant triple integral.'
      }
    ],
    keyTakeaways: [
      'Stokes $\\oint_{C} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_{S} (\\nabla \\times \\mathbf{F}) \\cdot \\mathbf{n}\\,dS$ allows any cap with the right-hand compatible rim.',
      'Gauss $\\oiint_{S} \\mathbf{F} \\cdot \\mathbf{n}\\,dS = \\iiint_{V} (\\nabla \\cdot \\mathbf{F})\\,dV$ uses the outward normal on every piece of a closed shell.',
      'Compute curl and divergence first: constants and zeros reveal the cheapest side or an immediate zero.',
      'Curl flux through any closed surface is zero, and divergence-free fields have zero closed flux.'
    ],
    quiz: [
      {
        q: 'Stokes theorem equates circulation around $C$ with:',
        options: ['Flux of divergence through $S$', 'Volume of the solid under $S$', 'Area of $C$ itself', 'Flux of curl through any oriented $S$ bounded by $C$'],
        answer: 3,
        explanation: 'Step 1: Recall the right side involves $\\nabla \\times \\mathbf{F}$, not divergence. Step 2: Note cap freedom means any $S$ with rim $C$ and compatible orientation works. Step 3: Eliminate volume and area options as dimensionally mismatched to circulation.'
      },
      {
        // PYQ-pattern — flux via divergence theorem (rephrased, values changed)
        q: 'Outward flux of $\\mathbf{F}(x, y, z) = x\\,\\mathbf{i} + y\\,\\mathbf{j} + z\\,\\mathbf{k}$ through the unit sphere equals:',
        options: ['$3$ times the ball volume', `$0$`, `$\\frac{4\\pi}{3}$`, `$4\\pi$`],
        answer: 0,
        explanation: 'Step 1: Compute $\\nabla \\cdot \\mathbf{F} = 3$ everywhere. Step 2: Apply Gauss to get flux $= 3V$ with $V = \\frac{4\\pi}{3}$. Step 3: Report the unsimplified $3V$ form, which equals $4\\pi$ after multiplication.'
      },
      {
        q: 'If $S$ is closed (no rim), then $\\iint_{S} (\\nabla \\times \\mathbf{F}) \\cdot \\mathbf{n}\\,dS$ equals:',
        options: ['The volume enclosed by $S$', `$0$ for every smooth $\\mathbf{F}$`, 'The area of $S$', 'The divergence of $\\mathbf{F}$'],
        answer: 1,
        explanation: 'Step 1: View a closed surface as bounding no rim, so the Stokes rim integral is empty. Step 2: Conclude the curl flux must vanish identically. Step 3: Distinguish this from Gauss flux, which need not vanish unless divergence is zero.'
      },
      {
        q: 'Circle $C$: $x^{2} + y^{2} = 1$ at $z = 2$, counterclockwise from above, with $\\mathbf{F} = -y\\,\\mathbf{i} + x\\,\\mathbf{j} + z\\,\\mathbf{k}$. Then $\\oint_{C} \\mathbf{F} \\cdot d\\mathbf{r}$ equals:',
        options: [`$0$`, `$\\pi$`, `$2\\pi$`, `$2\\pi + 2$`],
        answer: 2,
        explanation: 'Step 1: Compute $\\nabla \\times \\mathbf{F} = 2\\,\\mathbf{k}$ with no $z$ dependence in the relevant component. Step 2: Cap with the flat unit disk and upward normal to get flux $2 \\cdot \\pi$. Step 3: Note the $z\\,\\mathbf{k}$ part contributes nothing on the horizontal rim.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Stokes and Gauss as one Stokes theorem',
        blocks: [
          {
            kind: 'theorem',
            body: 'For an oriented compact surface $S$ with piecewise smooth rim $\\partial S$ and $C^{1}$ field $F$, **Stokes** states $\\oint_{\\partial S} F \\cdot dr = \\iint_{S} (\\nabla \\times F) \\cdot n \\, dS$. For a solid $V$ with closed outer boundary $\\partial V$, **Gauss** states $\\iiint_{V} \\nabla \\cdot F \\, dV = \\iint_{\\partial V} F \\cdot n \\, dS$. Both are $\\int_{M} d\\omega = \\int_{\\partial M} \\omega$ for $1$-forms and $2$-forms. Closed surfaces have no rim so Stokes flux is zero through them for curls, while rimless curves bound no oriented cap without extra topology.'
          },
          {
            kind: 'derivation',
            body: 'Cap independence follows from Gauss applied to curls: if $S_{1}, S_{2}$ share a rim and bound $V$, then $\\iint_{S_{1}} (\\nabla \\times F) \\cdot n \\, dS - \\iint_{S_{2}} (\\nabla \\times F) \\cdot n \\, dS = \\iiint_{V} \\nabla \\cdot (\\nabla \\times F) \\, dV = 0$. Hence any convenient cap, often a flat disk, may replace a curved one. Dually, divergence is flux per volume: $\\nabla \\cdot F(p) = \\lim_{|V| \\to 0} |V|^{-1} \\iint_{\\partial V} F \\cdot n \\, dS$, proved by Taylor expanding $F$ and cancelling odd moments over small balls or cubes. Orientation is the sign: swapping $n$ negates flux.'
          },
          {
            kind: 'application',
            body: 'Maxwell equations live in both forms: Faraday $\\oint E \\cdot dr = -\\frac{d}{dt} \\iint B \\cdot n \\, dS$ and Ampere with displacement are Stokes, while Gauss laws $\\iint E \\cdot n \\, dS = Q/\\epsilon_{0}$ and $\\iint B \\cdot n \\, dS = 0$ are divergence. Conservation $\\partial_{t} \\rho + \\nabla \\cdot J = 0$ integrates to charge balance by Gauss. Finite volume codes discretize exactly this: fluxes through cell faces telescope, so conserved quantities are preserved to machine precision independent of mesh quality.'
          },
        ]
      }
    ],
  }
]
