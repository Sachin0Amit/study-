import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 16: Vector Calculus (Sections 16.1 – 16.9 as mapped in library.ts)
// Master study content. All worked-example numbers are the book’s own style;
// every computation has been re-derived line by line.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh16Content: SectionContent[] = [
  // ------------------------------------------------------------------ 16.1
  {
    sectionId: 'calc-ch16-s1',
    readingTime: 8,
    intro: 'So far every function in this book took numbers to numbers. A vector field instead attaches a vector to every point of the plane or of space — the mathematical picture of a flowing fluid, a wind map, a magnetic field, or a gravitational pull. This section defines vector fields, tours the three great families (gradient, velocity and force fields), and introduces conservative fields together with their potential functions.',
    objectives: [
      'Define a vector field on a subset of the plane or of space and sketch simple fields by hand',
      'Recognize gradient fields, velocity fields and force fields, and the physical situations that produce them',
      'Define conservative vector fields and potential functions, and verify that a given field is a gradient field',
      'Compute gradient fields of scalar functions, including the inverse-square field of gravitation',
    ],
    concepts: [
      {
        term: 'Vector field',
        kind: 'definition',
        statement: 'A **vector field** on $\\mathbb{R}^2$ assigns to each point $(x, y)$ a two-dimensional vector $\\mathbf{F}(x, y)$, written componentwise as $\\mathbf{F}(x, y) = P(x, y)\\,\\mathbf{i} + Q(x, y)\\,\\mathbf{j}$; on $\\mathbb{R}^3$ a third component gives $\\mathbf{F}(x, y, z) = P\\,\\mathbf{i} + Q\\,\\mathbf{j} + R\\,\\mathbf{k}$, where $P$, $Q$ and $R$ are scalar functions of position.',
        detail: 'The domain is the set of points where all components are defined. Think of the plane (or space) with a vector growing out of every point — like a weather map showing wind velocity at every location. Vector fields are the natural language of fluid flow, electromagnetism, gravitation and heat flow, and the remaining sections of this chapter are all about integrating and differentiating them.',
      },
      {
        term: 'Gradient (vector) fields',
        kind: 'definition',
        statement: 'If $f$ is a differentiable scalar function of two or three variables, its gradient defines a vector field: $\\mathbf{F} = \\nabla f$, that is $\\mathbf{F}(x, y) = f_x(x, y)\\,\\mathbf{i} + f_y(x, y)\\,\\mathbf{j}$ (plus an $f_z\\,\\mathbf{k}$ component in space). A field that equals a gradient for some $f$ is called a **gradient field**.',
        detail: 'This is the first family of vector fields, imported directly from Section 14.6 on directional derivatives: $\\nabla f$ points in the direction of fastest increase of $f$ and is perpendicular to the level curves (or level surfaces) of $f$. So the arrows of a gradient field always cross the level sets of its potential at right angles — the way water flows straight down a contour map of a hillside.',
      },
      {
        term: 'Velocity fields of fluid flow',
        kind: 'insight',
        statement: 'If a fluid flows in a region, the velocity $\\mathbf{V}(x, y)$ of the fluid particle at each point defines a **velocity field**; classic two-dimensional examples are the counterclockwise rotation field $\\mathbf{F}(x, y) = -y\\,\\mathbf{i} + x\\,\\mathbf{j}$ and the radial outflow field $\\mathbf{F}(x, y) = x\\,\\mathbf{i} + y\\,\\mathbf{j}$.',
        detail: 'To sketch a field by hand, evaluate $\\mathbf{F}$ at a grid of sample points and draw each arrow starting at its point. For the rotation field the arrows at $(1, 0)$, $(0, 1)$, $(-1, 0)$ and $(0, -1)$ point up, left, down and right — a fluid spinning counterclockwise about the origin, with speed $|\\mathbf{F}| = \\sqrt{x^2 + y^2}$ growing with distance. For the radial field every arrow points straight away from the origin, again with length $r$ — the pattern of air rushing out of a source. A third classic, $\\mathbf{F} = x\\,\\mathbf{i} - y\\,\\mathbf{j}$, flows outward along one axis and inward along the other (a saddle pattern).',
      },
      {
        term: 'Force fields',
        kind: 'definition',
        statement: 'A **force field** assigns to each point the force that would act on a test object placed there; Newton’s law of gravitation gives $\\mathbf{F} = -\\dfrac{mMG}{|\\mathbf{r}|^{3}}\\,\\mathbf{r}$, a field of vectors pulling every mass toward the origin with magnitude $mMG/|\\mathbf{r}|^{2}$.',
        detail: 'Here $\\mathbf{r} = x\\,\\mathbf{i} + y\\,\\mathbf{j} + z\\,\\mathbf{k}$ is the position vector of the test mass and $M$ sits at the origin. Coulomb’s law for electric charges produces the same shape of field — attractive or repulsive — with charge replacing mass, which is why this inverse-square pattern dominates physics from planetary orbits (Chapter 13) to electronics (the Art of Electronics’ chapters on fields and transmission lines).',
      },
      {
        term: 'Conservative vector field',
        kind: 'definition',
        statement: 'A vector field $\\mathbf{F}$ is **conservative** if it is the gradient of some scalar function $f$, that is $\\mathbf{F} = \\nabla f$; the function $f$ is called a **potential function** for $\\mathbf{F}$.',
        detail: 'The name comes from physics: when a force is a gradient, $\\mathbf{F} = -\\nabla P$ with $P$ the potential energy, the total mechanical energy (kinetic plus potential) is conserved along motion — the entire content of Section 16.3. Gradient fields are exactly the fields for which line integrals become path independent, which makes detecting and constructing them a central skill of this chapter.',
      },
      {
        term: 'Testing and building potential functions',
        kind: 'method',
        statement: 'To show a field is conservative, exhibit a potential: integrate one component, then match the other. For example, if $\\mathbf{F}(x, y) = (y^2 + 2x)\\,\\mathbf{i} + 2xy\\,\\mathbf{j}$, then $f(x, y) = xy^{2} + x^{2}$ satisfies $\\nabla f = \\mathbf{F}$, so $\\mathbf{F}$ is conservative.',
        detail: 'A potential is unique up to an additive constant, because adding $C$ never changes partial derivatives. In two variables there is also a quick necessary test — for a conservative field on the whole plane the cross partials must agree, $\\partial P/\\partial y = \\partial Q/\\partial x$ — which Section 16.3 proves is also sufficient when the domain is simply connected (has no holes).',
      },
      {
        term: 'Not every field is a gradient',
        kind: 'insight',
        statement: 'The rotation field $\\mathbf{F} = -y\\,\\mathbf{i} + x\\,\\mathbf{j}$ is **not** conservative: its components give $\\partial P/\\partial y = -1$ while $\\partial Q/\\partial x = 1$, so no potential function can exist.',
        detail: 'Physically, a swirling field like a whirlpool cannot be the gradient of any height-like function — there is no hillside whose downhill flow goes in circles. The cross-partial mismatch is the algebraic fingerprint of rotation, and it grows into the curl of Section 16.5 and the failure of path independence in Section 16.3.',
      },
    ],
    examples: [
      {
        title: 'Sketching a rotation field and a radial field',
        problem: 'Describe and sketch the vector fields (a) $\\mathbf{F}(x, y) = -y\\,\\mathbf{i} + x\\,\\mathbf{j}$ and (b) $\\mathbf{G}(x, y) = x\\,\\mathbf{i} + y\\,\\mathbf{j}$. What does each one model?',
        steps: [
          { label: 'Step 1: Evaluate (a) at sample points', text: 'At $(1, 0)$ the field is $\\langle 0, 1 \\rangle$ (pointing up); at $(0, 1)$ it is $\\langle -1, 0 \\rangle$ (pointing left); at $(-1, 0)$ it points down; at $(0, -1)$ it points right.' },
          { label: 'Step 2: Interpret (a)', text: 'Every arrow is tangent to the circle through its point and the arrows wrap counterclockwise around the origin — the velocity field of a fluid rotating about the origin. The speed is $|\\mathbf{F}| = \\sqrt{x^{2} + y^{2}}$, so the swirl is fastest far from the center.' },
          { label: 'Step 3: Evaluate (b) at sample points', text: 'At $(1, 0)$ the field is $\\langle 1, 0 \\rangle$; at $(0, 2)$ it is $\\langle 0, 2 \\rangle$; at $(-1, 1)$ it is $\\langle -1, 1 \\rangle$.' },
          { label: 'Step 4: Interpret (b)', text: 'Every arrow points directly away from the origin with length $|\\mathbf{G}| = r$ — the field of a source pushing fluid outward, like air expanding from a pressurized center. Note that $\\mathbf{G} = \\nabla\\!\\left(\\tfrac{1}{2}(x^{2} + y^{2})\\right)$ is a gradient field, while (a) fails the cross-partial test.' },
        ],
        result: 'Field (a) is a counterclockwise rotation about the origin (not conservative); field (b) is a radial outflow that is the gradient of $\\tfrac{1}{2}(x^{2} + y^{2})$ — the two archetypes of every vector-field sketch.',
      },
      {
        title: 'Finding a potential function',
        problem: 'Show that $\\mathbf{F}(x, y) = (y^{2} + 2x)\\,\\mathbf{i} + 2xy\\,\\mathbf{j}$ is conservative by finding a potential function $f$ with $\\nabla f = \\mathbf{F}$.',
        steps: [
          { label: 'Step 1: Set up from the first component', text: 'We need $f_x = y^{2} + 2x$. Integrating with respect to $x$ (treating $y$ as a constant) gives $f(x, y) = x y^{2} + x^{2} + g(y)$, where $g(y)$ is the integration “constant” that may still depend on $y$.' },
          { label: 'Step 2: Match the second component', text: 'Differentiate the candidate with respect to $y$: $f_y = 2xy + g\'(y)$. This must equal $Q(x, y) = 2xy$, so $g\'(y) = 0$.' },
          { label: 'Step 3: Conclude', text: 'Therefore $g$ is a constant $K$, and $f(x, y) = x y^{2} + x^{2} + K$ is a potential for $\\mathbf{F}$. Any value of $K$ works, since constants vanish under partial differentiation.' },
          { label: 'Step 4: Verify', text: 'Check: $f_x = y^{2} + 2x = P$ and $f_y = 2xy = Q$, so indeed $\\nabla f = \\mathbf{F}$. The cross-partial test agrees: $\\partial P/\\partial y = 2y = \\partial Q/\\partial x$.' },
        ],
        result: '$\\mathbf{F}$ is conservative with potential $f(x, y) = x y^{2} + x^{2} + K$ — and every potential differs from this one only by the constant $K$.',
      },
      {
        title: 'The inverse-square field is conservative',
        problem: 'Show that the Newtonian gravitational field $\\mathbf{F} = -\\dfrac{mMG}{|\\mathbf{r}|^{3}}\\,\\mathbf{r}$ is a gradient field by finding its potential.',
        steps: [
          { label: 'Step 1: Write the potential candidate', text: 'Let $r = |\\mathbf{r}| = \\sqrt{x^{2} + y^{2} + z^{2}}$ and try $f(x, y, z) = \\dfrac{mMG}{r}$. Its level surfaces are spheres centered at the origin, matching the spherical symmetry of the field.' },
          { label: 'Step 2: Differentiate', text: 'Since $\\dfrac{\\partial r}{\\partial x} = \\dfrac{x}{r}$, the chain rule gives $\\dfrac{\\partial}{\\partial x}\\left(\\dfrac{mMG}{r}\\right) = -\\dfrac{mMG}{r^{2}} \\cdot \\dfrac{x}{r} = -\\dfrac{mMG\\,x}{r^{3}}$, and similarly for $y$ and $z$.' },
          { label: 'Step 3: Assemble the gradient', text: 'Thus $\\nabla f = -\\dfrac{mMG}{r^{3}}\\left(x\\,\\mathbf{i} + y\\,\\mathbf{j} + z\\,\\mathbf{k}\\right) = -\\dfrac{mMG}{|\\mathbf{r}|^{3}}\\,\\mathbf{r} = \\mathbf{F}$, exactly the gravitational field.' },
          { label: 'Step 4: Interpret', text: 'The gravitational field is the gradient of the scalar potential energy function $mMG/r$ (up to sign conventions physicists use). This is why gravity is called a conservative force — Section 16.3 will turn this potential into path-independent work integrals.' },
        ],
        result: 'The inverse-square field satisfies $\\mathbf{F} = \\nabla(mMG/r)$, so it is conservative — one potential function is $f = mMG/\\sqrt{x^{2} + y^{2} + z^{2}}$.',
      },
    ],
    keyTakeaways: [
      'A vector field assigns a vector to every point: $\\mathbf{F} = P\\,\\mathbf{i} + Q\\,\\mathbf{j} + R\\,\\mathbf{k}$ with scalar component functions.',
      'Every differentiable scalar function generates a gradient field $\\mathbf{F} = \\nabla f$, and gradient fields are exactly the conservative fields.',
      'The rotation field $-y\\,\\mathbf{i} + x\\,\\mathbf{j}$ and the radial field $x\\,\\mathbf{i} + y\\,\\mathbf{j}$ are the two archetypes: swirl and source, with speeds growing linearly as $r$.',
      'Gravitation and electrostatics produce inverse-square fields that point toward (or away from) a central mass or charge.',
      'A conservative field has a potential function, unique up to an additive constant; find it by integrating one component and matching the other.',
      'The cross-partial condition $\\partial P/\\partial y = \\partial Q/\\partial x$ is necessary for conservatism, and the rotation field $\\langle -y, x \\rangle$ fails it, so not every field is a gradient.',
    ],
    quiz: [
      {
        q: 'Which of the following vector fields represents counterclockwise rotation about the origin?',
        options: [`$\\mathbf{F}(x, y) = x\\,\\mathbf{i} + y\\,\\mathbf{j}$`, `$\\mathbf{F}(x, y) = -y\\,\\mathbf{i} + x\\,\\mathbf{j}$`, `$\\mathbf{F}(x, y) = x\\,\\mathbf{i} - y\\,\\mathbf{j}$`, `$\\mathbf{F}(x, y) = \\mathbf{i} + \\mathbf{j}$`],
        answer: 1,
        explanation: 'At $(1, 0)$ the field $\\langle -y, x \\rangle$ points up, and at $(0, 1)$ it points left — arrows tangent to circles, wrapping counterclockwise. The field $x\\,\\mathbf{i} + y\\,\\mathbf{j}$ points radially outward instead.',
      },
      {
        q: 'A vector field $\\mathbf{F}$ is called conservative when:',
        options: ['It is defined on all of $\\mathbb{R}^{3}$', 'Its magnitude never changes', 'There exists a scalar function $f$ with $\\mathbf{F} = \\nabla f$', 'Its components are all negative'],
        answer: 2,
        explanation: 'Conservative means the field is a gradient field: some potential function $f$ has $\\mathbf{F} = \\nabla f$. The name comes from conservation of mechanical energy for forces of this type.',
      },
      {
        q: 'If $f(x, y) = x^{2} y^{3}$, the gradient field $\\mathbf{F} = \\nabla f$ is:',
        options: [`$\\langle 2xy^{3},\\ 3x^{2}y^{2} \\rangle$`, `$\\langle 2xy^{3} + 3x^{2}y^{2},\\ 0 \\rangle$`, `$\\langle 3x^{2}y^{2},\\ 2xy^{3} \\rangle$`, `$\\langle x^{2},\\ y^{3} \\rangle$`],
        answer: 0,
        explanation: '$f_x = 2xy^{3}$ (differentiate $x^{2}$ holding $y$ fixed) and $f_y = 3x^{2}y^{2}$, so $\\nabla f = \\langle 2xy^{3}, 3x^{2}y^{2} \\rangle$.',
      },
      {
        q: 'For the Newtonian field $\\mathbf{F} = -mMG\\,\\mathbf{r}/|\\mathbf{r}|^{3}$, the magnitude of the force at distance $r$ from the origin is:',
        options: [`$mMG/r$`, `$mMG/r^{2}$`, `$mMG/r^{3}$`, `$mMG \\cdot r$`],
        answer: 1,
        explanation: 'The vector $-\\mathbf{r}/|\\mathbf{r}|^{3}$ has length $r/r^{3} = 1/r^{2}$ and points toward the origin, so the field magnitude is $mMG/r^{2}$ — the inverse-square law.',
      },
      {
        q: 'Suppose $\\mathbf{F} = \\nabla f$ for some potential $f$. Which statement about additional potentials is correct?',
        options: ['The potential is unique', 'Any other potential differs from $f$ by a constant', 'Any other potential is a constant multiple of $f$', 'Other potentials exist only in three dimensions'],
        answer: 1,
        explanation: 'If $\\nabla g = \\nabla f$ everywhere on a connected region, then $\\nabla(g - f) = \\mathbf{0}$, which forces $g - f$ to be constant. Potentials are unique exactly up to an additive constant.',
      },
    ],
  },

  // ------------------------------------------------------------------ 16.2
  {
    sectionId: 'calc-ch16-s2',
    readingTime: 9,
    intro: 'Chapter 13 integrated vector functions along curves; now we integrate over curves with a new twist — the integrand can be a scalar field, producing the mass of a bent wire, or a vector field, producing the work done by a force along a path. Both line integrals reduce to ordinary single integrals through a parametrization, and the geometry of $ds$ ties everything back to arc length from Section 8.1.',
    objectives: [
      'Define the line integral of a scalar field along a curve and compute it from a parametrization',
      'Use line integrals to find the mass and center of mass of a thin wire with variable density',
      'Compute line integrals of vector fields in all three equivalent notations',
      'Explain how orientation affects vector line integrals but not scalar ones, and handle piecewise-smooth curves',
    ],
    concepts: [
      {
        term: 'Line integral of a scalar field',
        kind: 'definition',
        statement: 'For $f$ defined on a smooth curve $C$ given by $\\mathbf{r}(t)$, $a \\le t \\le b$, the **line integral of $f$ along $C$** is $$\\int_C f(x, y)\\,ds = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^{*}, y_i^{*})\\,\\Delta s_i = \\int_a^b f(\\mathbf{r}(t))\\,|\\mathbf{r}\';(t)|\\,dt,$$ and in space $\\int_C f(x, y, z)\\,ds = \\int_a^b f(\\mathbf{r}(t))\\,|\\mathbf{r}\';(t)|\\,dt$.',
        detail: 'The construction chops $C$ into short pieces of length $\\Delta s_i$, samples $f$ on each, and sums $f \\cdot \\Delta s$ — exactly the Riemann-sum pattern of Chapter 5, with arc length (Section 8.1) replacing the $x$-axis. The formula converts the sum into an ordinary integral: substitute the parametrization and multiply by the speed $|\\mathbf{r}\';(t)|$, because $ds = |\\mathbf{r}\';(t)|\\,dt$.',
      },
      {
        term: 'Computing with ds',
        kind: 'method',
        statement: 'To evaluate $\\int_C f\\,ds$: (1) parametrize the curve as $\\mathbf{r}(t) = \\langle x(t), y(t) \\rangle$, $a \\le t \\le b$; (2) compute $ds = |\\mathbf{r}\';(t)|\\,dt = \\sqrt{[x\';(t)]^{2} + [y\';(t)]^{2}}\\;dt$; (3) substitute and integrate. For a graph $y = g(x)$ this becomes $ds = \\sqrt{1 + [g\';(x)]^{2}}\\,dx$.',
        detail: 'The graph formula is the arc-length element of Section 8.1 verbatim. A common shortcut: if the curve is a unit circle parametrized by $\\mathbf{r}(t) = \\langle \\cos t, \\sin t \\rangle$, the parametrization has speed $1$, so $ds = dt$ and the line integral is just a plain integral in $t$.',
      },
      {
        term: 'Mass and center of mass of a wire',
        kind: 'insight',
        statement: 'A thin wire shaped like a curve $C$ with linear density $\\rho(x, y)$ (mass per unit length) has mass $$m = \\int_C \\rho(x, y)\\,ds,$$ and center of mass $\\bar{x} = \\frac{1}{m}\\int_C x\\,\\rho\\,ds$, $\\bar{y} = \\frac{1}{m}\\int_C y\\,\\rho\\,ds$ — the wire version of the lamina formulas of Section 15.5.',
        detail: 'This is the physical meaning of the scalar line integral: density times length element gives the mass of each little piece. The same pattern computes total charge on a charged wire ($\\rho$ = charge density) or average temperature along a pipe. When $\\rho = 1$, the integral collapses to the arc length of $C$.',
      },
      {
        term: 'Piecewise-smooth curves',
        kind: 'notation',
        statement: 'If $C = C_1 \\cup C_2 \\cup \\cdots \\cup C_n$ is a finite union of smooth pieces (for example, the boundary of a rectangle), the line integral is the **sum over the pieces**: $\\int_C f\\,ds = \\int_{C_1} f\\,ds + \\cdots + \\int_{C_n} f\\,ds$.',
        detail: 'Each piece gets its own parametrization and its own ordinary integral. This additivity over curves is what lets Green’s theorem and Stokes’ theorem later handle boundaries built from many arcs and line segments.',
      },
      {
        term: 'Line integral of a vector field: work',
        kind: 'definition',
        statement: 'For $\\mathbf{F} = P\\,\\mathbf{i} + Q\\,\\mathbf{j} + R\\,\\mathbf{k}$ along an oriented smooth curve $C$, $$\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_a^b \\mathbf{F}(\\mathbf{r}(t)) \\cdot \\mathbf{r}\';(t)\\,dt = \\int_C P\\,dx + Q\\,dy + R\\,dz.$$ When $\\mathbf{F}$ is a force, this integral is the **work** done by the force on a particle moving along $C$.',
        detail: 'The dot product $\\mathbf{F} \\cdot d\\mathbf{r}$ keeps only the component of force along the motion, matching the work concept of Section 6.4 — but now the force may vary from point to point and the path may be any space curve. If $\\mathbf{F}$ is the velocity field of a fluid and $C$ is closed, the integral is called the **circulation** around $C$, measuring the net swirling of the flow along the loop.',
      },
      {
        term: 'Three equivalent forms',
        kind: 'notation',
        statement: 'Writing $\\mathbf{T} = \\mathbf{r}\';/|\\mathbf{r}\';|$ for the unit tangent, the work integral has three interchangeable shapes: $$\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_C \\mathbf{F} \\cdot \\mathbf{T}\\;ds = \\int_C P\\,dx + Q\\,dy + R\\,dz.$$ Each is just a different bookkeeping of $\\mathbf{F}(\\mathbf{r}(t)) \\cdot \\mathbf{r}\';(t)\\,dt$.',
        detail: 'The middle form displays the physics: force component along the direction of travel, integrated over distance. The last form, the differential form, is the one Green’s theorem addresses in Section 16.4. Fluency in switching between the three is essential, because different problems die to different forms.',
      },
      {
        term: 'Orientation matters — for vector integrals only',
        kind: 'insight',
        statement: 'Reversing the orientation of $C$ changes the sign of a vector line integral, $\\int_{-C} \\mathbf{F} \\cdot d\\mathbf{r} = -\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$, but a scalar line integral does not depend on orientation at all: $\\int_{-C} f\\,ds = \\int_C f\\,ds$.',
        detail: 'For scalar integrals the summand $f\\,\\Delta s$ never references a direction of travel — the mass of a wire is the same whichever end you start from. For vector integrals the parametrization direction enters through $\\mathbf{r}\';(t)$, and reversing the path flips every dot product. When you write $\\oint_C$ for a closed curve, positive orientation (counterclockwise) is the default in this chapter.',
      },
    ],
    examples: [
      {
        title: 'Mass of a wire on a semicircle',
        problem: 'A wire lies along the upper half of the unit circle $x^{2} + y^{2} = 1$, $y \\ge 0$, with linear density $\\rho(x, y) = 2 + x^{2}y$ (grams per centimeter). Find the mass of the wire.',
        steps: [
          { label: 'Step 1: Parametrize', text: 'Use $\\mathbf{r}(t) = \\langle \\cos t, \\sin t \\rangle$ with $0 \\le t \\le \\pi$, which traces the upper semicircle counterclockwise from $(1, 0)$ to $(-1, 0)$.' },
          { label: 'Step 2: Compute the length element', text: 'The speed is $|\\mathbf{r}\';(t)| = |\\langle -\\sin t, \\cos t \\rangle| = \\sqrt{\\sin^{2} t + \\cos^{2} t} = 1$, so $ds = dt$.' },
          { label: 'Step 3: Substitute the density', text: 'Along the wire, $\\rho = 2 + \\cos^{2} t \\sin t$, so $m = \\int_0^{\\pi} \\left(2 + \\cos^{2} t \\sin t\\right) dt$.' },
          { label: 'Step 4: Split the integral', text: 'The first piece is $\\int_0^{\\pi} 2\\,dt = 2\\pi$. For the second, substitute $u = \\cos t$, $du = -\\sin t\\,dt$: $\\int_0^{\\pi} \\cos^{2} t \\sin t\\,dt = \\int_{1}^{-1} -u^{2}\\,du = \\int_{-1}^{1} u^{2}\\,du = \\tfrac{2}{3}$.' },
          { label: 'Step 5: Interpret', text: 'The mass is $m = 2\\pi + \\tfrac{2}{3}$ grams. Note the sanity check: if $\\rho$ were the constant $2$, the mass would be $2 \\times (\\text{arc length } \\pi) = 2\\pi$, and the extra $\\tfrac{2}{3}$ comes from the density bulge where $x^2 y > 0$.' },
        ],
        result: '$m = \\int_C \\rho\\,ds = 2\\pi + \\tfrac{2}{3}$ grams — a scalar line integral reduced to one ordinary integral with the unit-speed parametrization.',
      },
      {
        title: 'Work along a quarter circle',
        problem: 'Evaluate $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$, where $\\mathbf{F}(x, y) = x^{2}\\,\\mathbf{i} - xy\\,\\mathbf{j}$ and $C$ is the quarter of the unit circle $x^{2} + y^{2} = 1$ from $(1, 0)$ to $(0, 1)$.',
        steps: [
          { label: 'Step 1: Parametrize the arc', text: 'Take $\\mathbf{r}(t) = \\langle \\cos t, \\sin t \\rangle$, $0 \\le t \\le \\tfrac{\\pi}{2}$, so that $\\mathbf{r}\';(t) = \\langle -\\sin t, \\cos t \\rangle$.' },
          { label: 'Step 2: Evaluate the field on the curve', text: 'Substituting $x = \\cos t$, $y = \\sin t$ gives $\\mathbf{F}(\\mathbf{r}(t)) = \\cos^{2} t\\,\\mathbf{i} - \\cos t \\sin t\\,\\mathbf{j}$.' },
          { label: 'Step 3: Form the dot product', text: '$\\mathbf{F} \\cdot \\mathbf{r}\'; = \\cos^{2} t\\,(-\\sin t) + (-\\cos t \\sin t)(\\cos t) = -2\\cos^{2} t \\sin t$.' },
          { label: 'Step 4: Integrate', text: 'Let $u = \\cos t$, $du = -\\sin t\\,dt$: $\\int_0^{\\pi/2} -2\\cos^{2} t \\sin t\\,dt = \\int_{1}^{0} 2u^{2}\\,du = \\left[\\tfrac{2}{3}u^{3}\\right]_{1}^{0} = -\\tfrac{2}{3}$.' },
          { label: 'Step 5: Interpret the sign', text: 'The work is negative because on this arc the field generally points against the direction of travel — the force resists the motion, extracting $\\tfrac{2}{3}$ units of energy from the particle. Reversing the path would give $+\\tfrac{2}{3}$.' },
        ],
        result: '$\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = -\\tfrac{2}{3}$: the vector line integral is just an ordinary integral of a dot product once the curve is parametrized.',
      },
      {
        title: 'A line integral over a piecewise-smooth boundary',
        problem: 'Compute $\\oint_C xy\\,ds$, where $C$ is the boundary of the square $0 \\le x \\le 1$, $0 \\le y \\le 1$, traversed counterclockwise.',
        steps: [
          { label: 'Step 1: Split the boundary', text: 'The boundary is four smooth sides $C_1$ (bottom), $C_2$ (right), $C_3$ (top), $C_4$ (left), and the scalar integral adds over pieces: $\\oint_C xy\\,ds = \\sum_{i=1}^{4} \\int_{C_i} xy\\,ds$.' },
          { label: 'Step 2: Bottom and top sides', text: 'On $C_1$ we have $y = 0$, so the integrand $xy = 0$ and the piece contributes $0$. On the top side $C_3$, $y = 1$, $x$ runs from $1$ to $0$, $ds = dx$, and $\\int_{C_3} xy\\,ds = \\int_1^0 x\\,dx = -\\tfrac{1}{2}$… but wait: for a scalar integral orientation is irrelevant, so write it as $\\int_0^1 x\\,dx = \\tfrac{1}{2}$.' },
          { label: 'Step 3: Right side', text: 'On $C_2$, $x = 1$, $y$ from $0$ to $1$, $ds = dy$: $\\int_0^1 (1)y\\,dy = \\tfrac{1}{2}$.' },
          { label: 'Step 4: Left side', text: 'On $C_4$, $x = 0$, so $xy = 0$ and the piece contributes $0$.' },
          { label: 'Step 5: Add', text: 'Total: $0 + \\tfrac{1}{2} + \\tfrac{1}{2} + 0 = 1$.' },
        ],
        result: '$\\oint_C xy\\,ds = 1$. Scalar line integrals ignore orientation — only the geometry and the field values enter, and piecewise curves are handled one segment at a time.',
      },
    ],
    keyTakeaways: [
      'The scalar line integral is $\\int_C f\\,ds = \\int_a^b f(\\mathbf{r}(t))\\,|\\mathbf{r}\';(t)|\\,dt$ — substitute the parametrization, multiply by the speed, integrate.',
      'Mass of a wire is $\\int_C \\rho\\,ds$; with $\\rho = 1$ the integral is the arc length from Section 8.1.',
      'The vector line integral $\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_C P\\,dx + Q\\,dy + R\\,dz = \\int_C \\mathbf{F} \\cdot \\mathbf{T}\\,ds$ computes work (or, on closed curves, circulation).',
      'Unit-circle parametrizations have speed $1$, so $ds = dt$ there — a frequent simplification.',
      'Scalar line integrals are orientation-independent; vector line integrals flip sign when the curve is reversed.',
      'Piecewise-smooth curves are handled by adding the integrals of the smooth pieces.',
    ],
    quiz: [
      {
        q: 'In the definition $\\int_C f\\,ds = \\int_a^b f(\\mathbf{r}(t))\\,|\\mathbf{r}\';(t)|\\,dt$, the factor $|\\mathbf{r}\';(t)|$ appears because:',
        options: ['It converts the parameter $t$ into a speed', 'The curve must be traveled at unit speed', 'It converts a change $dt$ in parameter into the element of arc length: $ds = |\\mathbf{r}\';(t)|\\,dt$', 'It normalizes the field $f$ to have average value 1'],
        answer: 2,
        explanation: 'The length element along the curve is $ds = |\\mathbf{r}\';(t)|\\,dt$ — the speed of the parametrization times the parameter increment. Without it, the value would depend on how fast the parametrization sweeps the curve.',
      },
      {
        q: 'A wire in the shape of a curve $C$ has linear density $\\rho(x, y)$. Its mass is:',
        options: [`$\\int_C \\rho\\,dx$`, `$\\int_C \\rho\\,ds$`, '$\\int_C \\rho\\,|d\\mathbf{r}\';|$', '$\\rho$ times the straight-line distance between the endpoints'],
        answer: 1,
        explanation: 'Density (mass per length) times length element gives mass of each piece; summing gives $m = \\int_C \\rho\\,ds$. Integrating against $dx$ instead would ignore the length contributed by vertical motion.',
      },
      {
        q: 'If $C$ is traversed in the opposite direction, which statement is true?',
        options: ['Both scalar and vector line integrals change sign', 'Neither type changes sign', 'Scalar integrals keep their value but vector integrals change sign', 'Vector integrals keep their value but scalar integrals change sign'],
        answer: 2,
        explanation: 'A scalar integrand like density has no direction of travel in it, so $\\int_{-C} f\\,ds = \\int_C f\\,ds$. The vector integral contains $\\mathbf{r}\';(t)$, which reverses, so $\\int_{-C} \\mathbf{F} \\cdot d\\mathbf{r} = -\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$.',
      },
      {
        q: 'Evaluate $\\int_C x\\,ds$ where $C$ is the line segment from $(0, 0)$ to $(1, 1)$ parametrized by $\\mathbf{r}(t) = \\langle t, t \\rangle$, $0 \\le t \\le 1$.',
        options: [`$\\tfrac{1}{2}$`, `$\\tfrac{\\sqrt{2}}{2}$`, `$\\sqrt{2}$`, `$1$`],
        answer: 1,
        explanation: 'Speed: $|\\mathbf{r}\';(t)| = \\sqrt{1 + 1} = \\sqrt{2}$, so $\\int_0^1 t\\sqrt{2}\\,dt = \\sqrt{2} \\cdot \\tfrac{1}{2}$. The factor $\\sqrt{2}$ is the length of the segment.',
      },
      {
        q: 'The work done by a force field $\\mathbf{F}$ on a particle moving along a smooth curve $C$ is:',
        options: [`$\\int_C |\\mathbf{F}|\\,ds$`, `$\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$`, `$\\int_C |\\mathbf{F} \\times d\\mathbf{r}|$`, '$|\\mathbf{F}|$ times the arc length of $C$ times $\\cos\\theta$ for one fixed angle'],
        answer: 1,
        explanation: 'Work integrates the tangential component of force along the displacement: $\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_C \\mathbf{F} \\cdot \\mathbf{T}\\,ds$. Integrating $|\\mathbf{F}|\\,ds$ instead would ignore whether the force helps or hinders the motion.',
      },
    ],
  },

  // ------------------------------------------------------------------ 16.3
  {
    sectionId: 'calc-ch16-s3',
    readingTime: 9,
    intro: 'The Fundamental Theorem of Calculus says that to integrate a derivative you evaluate an antiderivative at the endpoints. The same miracle happens for line integrals of gradient fields: the work along a path depends only on the potential at the two ends — not on the route taken. This section proves path independence, gives the cross-partial test for conservatism, and shows how to harvest potential functions.',
    objectives: [
      'State the Fundamental Theorem for line integrals and use it to evaluate work integrals without parametrizing',
      'Define path independence and prove its equivalence with conservative fields on connected domains',
      'Apply the cross-partial test on simply-connected domains',
      'Recover potential functions and use them to solve work problems',
    ],
    concepts: [
      {
        term: 'Fundamental Theorem for line integrals',
        kind: 'theorem',
        statement: 'If $C$ is a smooth curve given by $\\mathbf{r}(t)$, $a \\le t \\le b$, and $f$ is a differentiable function whose gradient is continuous on an open region containing $C$, then $$\\int_C \\nabla f \\cdot d\\mathbf{r} = f(\\mathbf{r}(b)) - f(\\mathbf{r}(a)).$$',
        detail: 'The proof is a one-line chain rule computation: $\\int_C \\nabla f \\cdot d\\mathbf{r} = \\int_a^b \\nabla f(\\mathbf{r}(t)) \\cdot \\mathbf{r}\';(t)\\,dt = \\int_a^b \\frac{d}{dt}\\left[f(\\mathbf{r}(t))\\right] dt = f(\\mathbf{r}(b)) - f(\\mathbf{r}(a))$ — the ordinary Fundamental Theorem of Section 5.3 applied to the composite. All the geometry of the path cancels out.',
      },
      {
        term: 'Path independence',
        kind: 'definition',
        statement: 'A line integral $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ is **path independent** in a region $D$ if $\\int_{C_1} \\mathbf{F} \\cdot d\\mathbf{r} = \\int_{C_2} \\mathbf{F} \\cdot d\\mathbf{r}$ whenever $C_1$ and $C_2$ are paths in $D$ with the same initial and terminal points.',
        detail: 'Path independence is the modern form of the physics slogan “gravity is a conservative force”: the work gravity does moving a mass from $A$ to $B$ is the same whether you drop it straight down or slide it along a frictionless roller coaster — energy bookkeeping depends only on the height difference $f(B) - f(A)$.',
      },
      {
        term: 'The equivalence chain',
        kind: 'theorem',
        statement: 'For a continuous vector field $\\mathbf{F}$ on an open connected region $D$, the following are equivalent: (1) $\\mathbf{F}$ is conservative, i.e. $\\mathbf{F} = \\nabla f$ for some $f$ on $D$; (2) $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ is path independent in $D$; (3) $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = 0$ for every closed curve $C$ in $D$.',
        detail: 'The key implication (2) $\\Rightarrow$ (1) builds a potential directly: fix a point $A$ in $D$ and define $f(X) = \\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ along any path from $A$ to $X$ — path independence makes this well defined, and continuity of $\\mathbf{F}$ makes its partial derivatives reproduce the components of $\\mathbf{F}$. The equivalence (2) $\\Leftrightarrow$ (3) follows by concatenating any two paths between the same endpoints into one closed loop.',
      },
      {
        term: 'The cross-partial test',
        kind: 'theorem',
        statement: 'If $\\mathbf{F} = P\\,\\mathbf{i} + Q\\,\\mathbf{j}$ is conservative on an open region $D$ with continuous first partials, then $\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}$. Conversely, if $D$ is **simply-connected** (connected, with no holes) and this cross-partial condition holds throughout $D$, then $\\mathbf{F}$ is conservative on $D$.',
        detail: 'Necessity is Clairaut’s theorem from Section 14.3: if $P = f_x$ and $Q = f_y$, then $P_y = f_{xy} = f_{yx} = Q_x$. The surprise is that the converse needs the no-holes hypothesis — the punctured plane is not simply-connected, and on it the field $\\langle -y, x \\rangle/(x^{2} + y^{2})$ satisfies the cross-partial condition everywhere it is defined yet has $\\oint = 2\\pi \\ne 0$ around the origin (Section 16.4 revisits this famous counterexample).',
      },
      {
        term: 'Simply-connected domains',
        kind: 'definition',
        statement: 'A region $D$ is **simply-connected** if it is connected and every simple closed curve in $D$ encloses only points of $D$ — informally, the region has no holes and nothing is missing from its interior. The plane, disks and the interior of an ellipse are simply-connected; an annulus and the punctured plane are not.',
        detail: 'Why holes matter: a potential is built by integrating along paths, and a hole can support circulation that no height function can encode — a whirlpool around a drain has no potential even though its local cross-partials agree everywhere the water actually is.',
      },
      {
        term: 'Conservation of energy',
        kind: 'law',
        statement: 'For motion $\\mathbf{r}(t)$ under a conservative force $\\mathbf{F} = -\\nabla P$ (with $P$ the potential energy), the quantity $E = \\tfrac{1}{2}m|\\mathbf{v}|^{2} + P(\\mathbf{r})$ stays constant along the trajectory — which is exactly why such fields are called **conservative**.',
        detail: 'By the Fundamental Theorem for line integrals, the work $\\int \\mathbf{F} \\cdot d\\mathbf{r}$ between two points equals $P(A) - P(B)$, the drop in potential energy, regardless of path; that work reappears as kinetic energy. Gravitational and electrostatic forces are conservative; friction is not, because friction always opposes the direction of travel.',
      },
    ],
    examples: [
      {
        title: 'Path independence verified three ways',
        problem: 'Compute $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ for $\\mathbf{F} = y^{2}\\,\\mathbf{i} + 2xy\\,\\mathbf{j}$ from $A = (0, 0)$ to $B = (2, 3)$ along (a) the straight segment, (b) the broken path that goes $\\langle 0,0 \\rangle \\to \\langle 2,0 \\rangle \\to \\langle 2,3 \\rangle$, and (c) by the Fundamental Theorem.',
        steps: [
          { label: 'Step 1: The straight segment', text: 'Parametrize $\\mathbf{r}(t) = \\langle 2t, 3t \\rangle$, $0 \\le t \\le 1$, so $\\mathbf{r}\'; = \\langle 2, 3 \\rangle$. The field along it is $\\mathbf{F} = \\langle 9t^{2}, 12t^{2} \\rangle$, giving $\\mathbf{F} \\cdot \\mathbf{r}\'; = 18t^{2} + 36t^{2} = 54t^{2}$ and $\\int_0^1 54t^{2}\\,dt = 18$.' },
          { label: 'Step 2: The broken path — horizontal piece', text: 'On $y = 0$ the field is $\\mathbf{F} = \\langle 0, 0 \\rangle$, so the first piece contributes $0$.' },
          { label: 'Step 3: The broken path — vertical piece', text: 'On the segment $x = 2$, $y$ from $0$ to $3$, we have $dx = 0$ and $Q = 2xy = 4y$, so the contribution is $\\int_0^3 4y\\,dy = 18$.' },
          { label: 'Step 4: The Fundamental Theorem', text: 'The field is a gradient: $\\mathbf{F} = \\nabla(xy^{2})$, since $(xy^{2})_x = y^{2}$ and $(xy^{2})_y = 2xy$. Therefore $\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = xy^{2}\\Big|_{(0,0)}^{(2,3)} = 2 \\cdot 9 - 0 = 18$.' },
          { label: 'Step 5: Compare', text: 'All three computations give $18$: the integral is path independent, exactly as the Fundamental Theorem predicts whenever $\\mathbf{F} = \\nabla f$.' },
        ],
        result: 'Every route from $(0, 0)$ to $(2, 3)$ gives work $= 18$, and the one-step FTC computation $f(B) - f(A)$ with $f = xy^{2}$ replaces both parametrized calculations.',
      },
      {
        title: 'Testing for a conservative field and finding the potential',
        problem: 'Determine whether $\\mathbf{F} = (3 + 2xy)\\,\\mathbf{i} + (x^{2} - 3)\\,\\mathbf{j}$ is conservative on the plane; if it is, find a potential function and evaluate the work from $(0, 1)$ to $(2, 3)$.',
        steps: [
          { label: 'Step 1: Run the cross-partial test', text: 'Here $P = 3 + 2xy$ and $Q = x^{2} - 3$, so $\\partial P/\\partial y = 2x$ and $\\partial Q/\\partial x = 2x$. They agree on the whole plane, which is simply-connected, so $\\mathbf{F}$ is conservative.' },
          { label: 'Step 2: Integrate the first component', text: 'We need $f_x = 3 + 2xy$. Integrating in $x$: $f = 3x + x^{2}y + g(y)$ for an unknown function $g$.' },
          { label: 'Step 3: Match the second component', text: 'Differentiate: $f_y = x^{2} + g\'(y)$, which must equal $x^{2} - 3$, so $g\'(y) = -3$ and $g(y) = -3y + K$.' },
          { label: 'Step 4: Assemble the potential', text: 'A potential is $f(x, y) = 3x + x^{2}y - 3y + K$; check: $f_x = 3 + 2xy = P$ and $f_y = x^{2} - 3 = Q$.' },
          { label: 'Step 5: Compute the work by endpoints', text: '$\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = f(2, 3) - f(0, 1) = (6 + 12 - 9) - (0 + 0 - 3) = 9 + 3 = 12$, for any path between the points.' },
        ],
        result: '$\\mathbf{F}$ is conservative with potential $f = 3x + x^{2}y - 3y + K$, and the work from $(0, 1)$ to $(2, 3)$ is $12$ along every possible path.',
      },
      {
        title: 'A field that fails the test',
        problem: 'Show that $\\mathbf{F} = -y\\,\\mathbf{i} + x\\,\\mathbf{j}$ is not conservative by testing cross-partials, then compute the work from $(1, 0)$ to $(0, 1)$ along (a) the quarter-circle and (b) the straight segment, and observe that the answers differ.',
        steps: [
          { label: 'Step 1: Cross-partial test', text: '$\\partial P/\\partial y = \\partial(-y)/\\partial y = -1$ while $\\partial Q/\\partial x = \\partial(x)/\\partial x = 1$. Since $-1 \\ne 1$, no potential exists — the plane is simply-connected, so the test is decisive.' },
          { label: 'Step 2: Work along the quarter circle', text: 'Parametrize $\\mathbf{r}(t) = \\langle \\cos t, \\sin t \\rangle$, $0 \\le t \\le \\tfrac{\\pi}{2}$. Then $\\mathbf{F} \\cdot \\mathbf{r}\'; = (-\\sin t)(-\\sin t) + (\\cos t)(\\cos t) = 1$, so the work is $\\int_0^{\\pi/2} 1\\,dt = \\tfrac{\\pi}{2}$.' },
          { label: 'Step 3: Work along the straight segment', text: 'Parametrize $\\mathbf{r}(t) = \\langle 1 - t, t \\rangle$, $0 \\le t \\le 1$: the field is $\\langle -t,\\ 1 - t \\rangle$, the tangent is $\\langle -1, 1 \\rangle$, and $\\mathbf{F} \\cdot \\mathbf{r}\'; = t + (1 - t) = 1$, so the work is $\\int_0^1 1\\,dt = 1$.' },
          { label: 'Step 4: Interpret', text: 'The two paths give $\\tfrac{\\pi}{2} \\ne 1$: the integral is path dependent, confirming non-conservatism. Physically, the swirling field helps you travel counterclockwise — the long way around the arc harvests extra work from the swirl.' },
        ],
        result: 'The cross-partials disagree ($-1$ vs $1$) and the two paths give different work ($\\pi/2$ vs $1$): this rotation field has no potential, the standard hallmark of a non-conservative field.',
      },
    ],
    keyTakeaways: [
      'For a gradient field, $\\int_C \\nabla f \\cdot d\\mathbf{r} = f(\\text{end}) - f(\\text{start})$ — the path drops out entirely.',
      'Conservative, path independent, and zero integral around every closed curve are equivalent properties on a connected region.',
      'The cross-partial test $\\partial P/\\partial y = \\partial Q/\\partial x$ is necessary for conservatism, and it is sufficient on simply-connected regions.',
      'A simply-connected region has no holes; annuli and punctured planes are the standard counterexamples where the test can pass yet no potential exists.',
      'Recover a potential by integrating one component and matching the other; the potential is unique up to a constant.',
      'Conservative forces conserve mechanical energy — the physics behind the name.',
    ],
    quiz: [
      {
        q: 'The Fundamental Theorem for line integrals states that $\\int_C \\nabla f \\cdot d\\mathbf{r}$ equals:',
        options: ['$f$ integrated along the curve', '$f(\\mathbf{r}(b)) - f(\\mathbf{r}(a))$, the potential difference of the endpoints', '$\\nabla f$ evaluated at the midpoint of the curve', 'Zero for every closed curve and every field'],
        answer: 1,
        explanation: 'Exactly as in single-variable calculus, integrating a derivative returns the difference of the antiderivative at the endpoints: $\\int_C \\nabla f \\cdot d\\mathbf{r} = f(\\mathbf{r}(b)) - f(\\mathbf{r}(a))$ regardless of the route.',
      },
      {
        q: 'Which region is NOT simply-connected?',
        options: ['The disk $x^{2} + y^{2} < 1$', 'The annulus $1 < x^{2} + y^{2} < 4$', 'The entire plane $\\mathbb{R}^{2}$', 'The interior of an ellipse'],
        answer: 1,
        explanation: 'An annulus has a hole — a loop around the inner circle encloses points not in the region. Disks, ellipses interiors and the whole plane have no holes, so a potential exists whenever the cross-partials agree.',
      },
      {
        q: 'For $\\mathbf{F} = (3 + 2xy)\\,\\mathbf{i} + (x^{2} - 3)\\,\\mathbf{j}$ on the plane, the cross-partial test gives:',
        options: ['$\\partial P/\\partial y = 2x$ and $\\partial Q/\\partial x = 2x$, so the field is conservative', '$\\partial P/\\partial y = 3$ and $\\partial Q/\\partial x = -3$, so the field is not conservative', '$\\partial P/\\partial y = 2xy$ and $\\partial Q/\\partial x = 2x$, so the field is not conservative', 'The test cannot be applied because one component is constant'],
        answer: 0,
        explanation: 'Differentiating: $\\partial(3 + 2xy)/\\partial y = 2x$ and $\\partial(x^{2} - 3)/\\partial x = 2x$. They agree on the simply-connected plane, so a potential exists — namely $f = 3x + x^{2}y - 3y + K$.',
      },
      {
        q: 'If $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = 0$ for every closed curve in a connected region and $\\mathbf{F}$ is continuous, then:',
        options: ['$\\mathbf{F}$ must be a constant field', '$\\mathbf{F}$ is conservative', '$\\mathbf{F}$ has zero magnitude everywhere', 'Line integrals of $\\mathbf{F}$ cannot be computed'],
        answer: 1,
        explanation: 'Zero circulation around every loop is equivalent to path independence, which is equivalent to $\\mathbf{F}$ being a gradient field. Any two paths between fixed endpoints combine into a closed loop whose integral must vanish.',
      },
      {
        q: 'A particle moves under a conservative force from point $A$ to point $B$ along two very different frictionless paths. The work done is:',
        options: ['Larger along the longer path', 'Larger along the path closer to a straight line', 'The same on both paths', 'Zero on both paths'],
        answer: 2,
        explanation: 'For conservative forces the work is the drop in potential energy, $f(B) - f(A)$, which depends only on the endpoints. This endpoint-only bookkeeping is exactly what the Fundamental Theorem for line integrals guarantees.',
      },
    ],
  },

  // ------------------------------------------------------------------ 16.4
  {
    sectionId: 'calc-ch16-s4',
    readingTime: 9,
    intro: 'Green’s theorem converts a line integral around the boundary of a plane region into a double integral over the region itself — the first of the great “integral over a region equals integral over its boundary” theorems that culminate in Stokes and Gauss. It turns ugly boundary calculations into easy area integrals and vice versa, and its orientation convention is the model for every theorem that follows.',
    objectives: [
      'State Green’s theorem precisely, including the positive-orientation convention',
      'Use Green’s theorem to convert between line integrals and double integrals, choosing the easier side',
      'Handle regions with holes by orienting each boundary piece correctly',
      'Derive and apply the line-integral formulas for area',
    ],
    concepts: [
      {
        term: 'Positive orientation',
        kind: 'definition',
        statement: 'The **positive orientation** of a simple closed curve is the direction for which the enclosed region lies on the **left** as you walk along the curve: counterclockwise for the outer boundary. If a region has holes, its inner boundary curves are oriented **clockwise** — still keeping the region on the left.',
        detail: 'Orientation is the single most common source of sign errors in this chapter. Memory device: walk the boundary so that the material of the region is always on your left; outer edges then go counterclockwise and hole edges go clockwise, and the whole boundary (outer plus holes) is what enters the theorem.',
      },
      {
        term: 'Green’s theorem',
        kind: 'theorem',
        statement: 'Let $C$ be a positively oriented, piecewise-smooth, simple closed curve enclosing a region $D$. If $P$ and $Q$ have continuous partial derivatives on an open region containing $D$, then $$\\oint_C P\\,dx + Q\\,dy = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA.$$',
        detail: 'A proof for rectangles is one integration by parts in each variable; general regions are cut into nearly-rectangular pieces whose interior edge contributions cancel in pairs. The theorem fails if $\\mathbf{F}$ is not defined at even one point of $D$ — the punctured-field example below shows exactly how that failure looks.',
      },
      {
        term: 'Regions with holes',
        kind: 'method',
        statement: 'Green’s theorem extends to regions with holes by orienting the boundary as the **sum of all boundary curves** — outer boundary counterclockwise, each hole clockwise: $\\oint_{\\partial D} = \\oint_{C_\\text{outer}} + \\oint_{C_\\text{hole (clockwise)}}$.',
        detail: 'If a line integral around the outer boundary is hard but the field misbehaves inside, cut out a small hole around the bad point and apply Green to the punctured region: the integral over the outer curve equals the double integral plus the integral around the hole (with opposite orientation). This trick converts the study of singularities into easy small-circle computations.',
      },
      {
        term: 'Area from Green’s theorem',
        kind: 'method',
        statement: 'Choosing integrands with $\\partial Q/\\partial x - \\partial P/\\partial y = 1$ turns Green into area machines: $$A = \\oint_C x\\,dy = -\\oint_C y\\,dx = \\tfrac{1}{2}\\oint_C \\left(x\\,dy - y\\,dx\\right),$$ for positively oriented $C$ enclosing the region.',
        detail: 'For instance $Q = x$, $P = 0$ gives $\\partial Q/\\partial x - \\partial P/\\partial y = 1$, so the boundary integral is exactly $\\iint_D 1\\,dA = A$. This is the classical planimeter principle: an instrument that traces a boundary computes the area purely from the line integral — and it is how areas of regions bounded by parametric curves are computed without any double integral.',
      },
      {
        term: 'Vector forms of Green’s theorem',
        kind: 'theorem',
        statement: 'Writing $\\mathbf{F} = P\\,\\mathbf{i} + Q\\,\\mathbf{j}$ with unit tangent $\\mathbf{T}$ and outward unit normal $\\mathbf{n}$ along $C$: $$\\oint_C \\mathbf{F} \\cdot \\mathbf{T}\\;ds = \\iint_D (\\operatorname{curl}\\mathbf{F}) \\cdot \\mathbf{k}\\;dA, \\qquad \\oint_C \\mathbf{F} \\cdot \\mathbf{n}\\;ds = \\iint_D \\operatorname{div}\\mathbf{F}\\;dA.$$',
        detail: 'The first (tangential) form says circulation equals the total curl — local rotation — accumulated over the region; the second (normal) form says flux out of the boundary equals the total divergence — local expansion. These are precisely the two-dimensional shadows of Stokes’ theorem (Section 16.8) and the divergence theorem (Section 16.9), the two forms in which all of vector calculus is written.',
      },
      {
        term: 'When Green’s theorem cannot be applied',
        kind: 'insight',
        statement: 'Green’s theorem requires $P$ and $Q$ to be defined with continuous partials on **all** of $D$. The field $\\mathbf{F} = \\dfrac{-y\\,\\mathbf{i} + x\\,\\mathbf{j}}{x^{2} + y^{2}}$ satisfies $\\partial P/\\partial y = \\partial Q/\\partial x$ at every point where it is defined, yet $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = 2\\pi$ around any circle enclosing the origin — because the origin is a hole where the field blows up.',
        detail: 'This field is the velocity field of a point vortex at the origin. It warns that “cross-partials agree” is only a local statement; global path independence also needs the domain to be simply-connected (Section 16.3) and Green needs the field defined on the entire region. The workaround — punching a small hole around the singularity — is worked out in the example below.',
      },
    ],
    examples: [
      {
        title: 'Green’s theorem on a circle',
        problem: 'Evaluate $\\oint_C -y\\,dx + x\\,dy$, where $C$ is the unit circle $x^{2} + y^{2} = 1$ traversed counterclockwise, twice: once by direct parametrization and once by Green’s theorem.',
        steps: [
          { label: 'Step 1: Identify the data', text: 'Here $P = -y$ and $Q = x$, and $D$ is the unit disk. Both methods should agree — computing both is the best way to see what the theorem buys you.' },
          { label: 'Step 2: Direct parametrization', text: 'With $x = \\cos t$, $y = \\sin t$, $0 \\le t \\le 2\\pi$, we get $dx = -\\sin t\\,dt$ and $dy = \\cos t\\,dt$. Then $-y\\,dx + x\\,dy = -\\sin t \\cdot (-\\sin t\\,dt) + \\cos t \\cdot (\\cos t\\,dt) = (\\sin^{2} t + \\cos^{2} t)\\,dt = dt$.' },
          { label: 'Step 3: Evaluate the line integral', text: '$\\oint_C -y\\,dx + x\\,dy = \\int_0^{2\\pi} 1\\,dt = 2\\pi$.' },
          { label: 'Step 4: Apply Green’s theorem', text: 'The integrand is $\\partial Q/\\partial x - \\partial P/\\partial y = 1 - (-1) = 2$, so the theorem predicts $\\iint_D 2\\,dA = 2 \\cdot (\\text{area of the unit disk}) = 2\\pi$.' },
          { label: 'Step 5: Interpret', text: 'Both give $2\\pi$. In general the rotation field $\\langle -y, x \\rangle$ gives $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = 2\\,A(D)$ for any region — twice the enclosed area — which is exactly what the constant curl $2$ accumulates over $D$.' },
        ],
        result: 'Both methods give $2\\pi$: direct computation integrates $dt$ around the circle once, and Green converts it to the double integral of the constant curl $2$ over the disk.',
      },
      {
        title: 'A region with holes: the punctured field',
        problem: 'The field $\\mathbf{F} = \\dfrac{-y\\,\\mathbf{i} + x\\,\\mathbf{j}}{x^{2} + y^{2}}$ is defined on the annulus $D$ between the circles $r = 1$ and $r = 2$. Verify Green’s theorem for the positively oriented boundary of $D$.',
        steps: [
          { label: 'Step 1: Check the curl on the annulus', text: 'A quotient-rule computation gives $\\partial P/\\partial y = \\dfrac{y^{2} - x^{2}}{(x^{2} + y^{2})^{2}}$ and $\\partial Q/\\partial x = \\dfrac{y^{2} - x^{2}}{(x^{2} + y^{2})^{2}}$: they agree, so the double integral over the annulus is $\\iint_D 0\\,dA = 0$.' },
          { label: 'Step 2: Orient the boundary', text: 'Positive orientation keeps $D$ on the left: the outer circle $r = 2$ goes counterclockwise, and the inner circle $r = 1$ (the hole) goes clockwise.' },
          { label: 'Step 3: Compute the outer piece directly', text: 'On $x = 2\\cos t$, $y = 2\\sin t$ we have $x^{2} + y^{2} = 4$, $dx = -2\\sin t\\,dt$, $dy = 2\\cos t\\,dt$, so $\\dfrac{-y\\,dx + x\\,dy}{x^{2} + y^{2}} = \\dfrac{4(\\sin^{2} t + \\cos^{2} t)\\,dt}{4} = dt$, and the outer integral is $2\\pi$.' },
          { label: 'Step 4: Compute the inner piece directly', text: 'On the inner circle $x = \\cos t$, $y = \\sin t$ traversed clockwise, the same computation gives integrand $dt$, but the clockwise traversal runs $t$ from $2\\pi$ down to $0$, so the inner integral is $-2\\pi$.' },
          { label: 'Step 5: Verify the theorem', text: 'Total boundary integral: $2\\pi + (-2\\pi) = 0 = \\iint_D 0\\,dA$. Green holds — and it also reveals the punchline: the hole’s clockwise circulation $-2\\pi$ exactly cancels the outer counterclockwise $2\\pi$ that this vortex field always produces around the origin.' },
        ],
        result: 'The boundary integral around the annulus is $2\\pi - 2\\pi = 0$, matching $\\iint_D 0\\,dA$ — Green’s theorem works on holed regions once each boundary piece is oriented with the region on the left.',
      },
      {
        title: 'Area of an ellipse from a boundary integral',
        problem: 'Use Green’s theorem to find the area enclosed by the ellipse $\\dfrac{x^{2}}{a^{2}} + \\dfrac{y^{2}}{b^{2}} = 1$.',
        steps: [
          { label: 'Step 1: Choose an area formula', text: 'Use $A = \\tfrac{1}{2}\\oint_C (x\\,dy - y\\,dx)$, which corresponds to $P = -y/2$, $Q = x/2$, so that $\\partial Q/\\partial x - \\partial P/\\partial y = \\tfrac{1}{2} + \\tfrac{1}{2} = 1$ and the double integral is exactly the area.' },
          { label: 'Step 2: Parametrize the ellipse', text: 'The standard parametrization is $x = a\\cos t$, $y = b\\sin t$, $0 \\le t \\le 2\\pi$, traversed counterclockwise (positive orientation).' },
          { label: 'Step 3: Substitute', text: '$dx = -a\\sin t\\,dt$, $dy = b\\cos t\\,dt$, so $x\\,dy - y\\,dx = (a\\cos t)(b\\cos t)\\,dt - (b\\sin t)(-a\\sin t)\\,dt = ab(\\cos^{2} t + \\sin^{2} t)\\,dt = ab\\,dt$.' },
          { label: 'Step 4: Integrate', text: '$A = \\tfrac{1}{2}\\int_0^{2\\pi} ab\\,dt = \\tfrac{1}{2} \\cdot ab \\cdot 2\\pi = \\pi a b$.' },
          { label: 'Step 5: Sanity check', text: 'With $a = b = r$ this recovers $\\pi r^{2}$ for a circle. The ellipse needed no double integral at all — only a boundary traversal, which is exactly how planimeters and boundary-tracing instruments measure areas.' },
        ],
        result: '$A = \\pi a b$: one quarter of the work was choosing the right integrand, and Green’s theorem guarantees the boundary integral equals the area.',
      },
    ],
    keyTakeaways: [
      'Green’s theorem: $\\oint_C P\\,dx + Q\\,dy = \\iint_D (Q_x - P_y)\\,dA$ for positively oriented boundaries.',
      'Positive orientation keeps the region on the left: counterclockwise on outer boundaries, clockwise around holes.',
      'The theorem trades a boundary integral for a region integral — use whichever side is easier.',
      'Area formulas: $A = \\oint_C x\\,dy = -\\oint_C y\\,dx = \\tfrac{1}{2}\\oint_C (x\\,dy - y\\,dx)$.',
      'The tangential form $\\oint \\mathbf{F} \\cdot \\mathbf{T}\\,ds = \\iint (\\operatorname{curl}\\mathbf{F}) \\cdot \\mathbf{k}\\,dA$ and the normal form $\\oint \\mathbf{F} \\cdot \\mathbf{n}\\,ds = \\iint \\operatorname{div}\\mathbf{F}\\,dA$ are the 2D versions of Stokes and the divergence theorem.',
      'Green’s theorem needs the field defined on all of $D$; the vortex field $\\langle -y, x \\rangle/(x^{2} + y^{2})$ shows how a puncture produces nonzero circulation $2\\pi$.',
    ],
    quiz: [
      {
        q: 'In Green’s theorem, the positive orientation of the boundary of a region means:',
        options: ['Always counterclockwise, including around holes', 'The region lies on the left as you traverse each boundary piece', 'The region lies on the right as you traverse each boundary piece', 'Orientation is irrelevant to Green’s theorem'],
        answer: 1,
        explanation: 'Keep the region on your left: outer boundaries run counterclockwise, but boundary curves around holes run clockwise. Choosing all-counterclockwise is the classic sign error for holed regions.',
      },
      {
        q: 'Green’s theorem converts $\\oint_C P\\,dx + Q\\,dy$ into which double integral?',
        options: [`$\\iint_D (\\partial P/\\partial x - \\partial Q/\\partial y)\\,dA$`, `$\\iint_D (\\partial Q/\\partial x - \\partial P/\\partial y)\\,dA$`, `$\\iint_D (P + Q)\\,dA$`, `$\\iint_D PQ\\,dA$`],
        answer: 1,
        explanation: 'The integrand is $\\partial Q/\\partial x - \\partial P/\\partial y$ — the scalar curl of the field $\\langle P, Q \\rangle$. Reversing the subtraction is the most common formula slip.',
      },
      {
        q: 'Why can Green’s theorem not be applied directly to $\\oint_C \\dfrac{-y\\,dx + x\\,dy}{x^{2} + y^{2}}$ around the unit circle?',
        options: ['The curve is not closed', 'The field is not defined at the origin, which lies inside $C$', 'The integrand has no antiderivative', 'The circle is not smooth enough'],
        answer: 1,
        explanation: 'The components blow up at $(0, 0)$, violating the requirement that $P$ and $Q$ have continuous partials on the whole enclosed region. Punching a hole around the origin restores the theorem — and explains the nonzero circulation $2\\pi$.',
      },
      {
        q: 'Using $A = \\tfrac{1}{2}\\oint_C (x\\,dy - y\\,dx)$, the area enclosed by the ellipse $x = 3\\cos t$, $y = 2\\sin t$ is:',
        options: [`$6\\pi$`, `$5\\pi$`, `$\\tfrac{\\pi}{6}$`, `$12\\pi$`],
        answer: 0,
        explanation: 'Here $a = 3$, $b = 2$, so $x\\,dy - y\\,dx = ab\\,dt = 6\\,dt$ and $A = \\tfrac{1}{2}\\int_0^{2\\pi} 6\\,dt = 6\\pi = \\pi a b$.',
      },
      {
        q: 'The tangential form of Green’s theorem, $\\oint_C \\mathbf{F} \\cdot \\mathbf{T}\\,ds = \\iint_D (\\operatorname{curl}\\mathbf{F}) \\cdot \\mathbf{k}\\,dA$, says that circulation around $C$ equals:',
        options: ['The total flux of $\\mathbf{F}$ out of $C$', 'The total rotation (curl) accumulated over the region', 'The divergence of $\\mathbf{F}$ integrated over the region', 'The average value of $\\mathbf{F}$ on $C$ times its length'],
        answer: 1,
        explanation: 'Circulation is boundary rotation; curl is pointwise rotation density; Green sums the densities. This is the two-dimensional shadow of Stokes’ theorem, where the surface integral of curl replaces the flat double integral.',
      },
    ],
  },

  // ------------------------------------------------------------------ 16.5
  {
    sectionId: 'calc-ch16-s5',
    readingTime: 8,
    intro: 'Curl and divergence are the two differential operators that act on vector fields — one measuring rotation, the other expansion. Written with the del operator $\\nabla$, they compact all of Green’s, Stokes’ and Gauss’s theorems into a single visual pattern, and the identities curl-of-gradient and divergence-of-curl explain the structure of every field in physics.',
    objectives: [
      'Compute curl and divergence in rectangular coordinates from the determinant and dot-product patterns',
      'Interpret curl as rotation (the paddle-wheel test) and divergence as source strength',
      'Recognize the two vector forms of Green’s theorem as curl and divergence statements',
      'Use the identities curl of gradient $= \\mathbf{0}$ and divergence of curl $= 0$, and compute the Laplacian',
    ],
    concepts: [
      {
        term: 'The curl of a vector field',
        kind: 'definition',
        statement: 'If $\\mathbf{F} = P\\,\\mathbf{i} + Q\\,\\mathbf{j} + R\\,\\mathbf{k}$ has continuous partials, its **curl** is the vector field $$\\operatorname{curl}\\mathbf{F} = \\nabla \\times \\mathbf{F} = \\left(\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z}\\right)\\mathbf{i} + \\left(\\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x}\\right)\\mathbf{j} + \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right)\\mathbf{k}.$$',
        detail: 'The memorable form is the determinant $$\\operatorname{curl}\\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}$$ — expand along the first row and the three component formulas above fall out. In two dimensions the only live component is the $\\mathbf{k}$ one, $\\partial Q/\\partial x - \\partial P/\\partial y$: exactly the Green’s theorem integrand.',
      },
      {
        term: 'Curl measures rotation',
        kind: 'insight',
        statement: 'The curl points along the axis of local rotation of the field, and its magnitude is proportional to the angular speed: for the rigid rotation field $\\mathbf{v} = \\omega(-y\\,\\mathbf{i} + x\\,\\mathbf{j})$ one finds $\\operatorname{curl}\\mathbf{v} = 2\\omega\\,\\mathbf{k}$.',
        detail: 'Drop a tiny paddle wheel into the flow at a point: it spins exactly when the curl there is nonzero, with angular velocity half the curl magnitude. The counterclockwise rotation field $\\langle -y, x \\rangle$ has constant curl $2\\,\\mathbf{k}$ — the wheel spins counterclockwise everywhere — while the radial field $\\langle x, y \\rangle$ has zero curl: the wheel drifts outward but never turns. A field with $\\operatorname{curl}\\mathbf{F} = \\mathbf{0}$ everywhere is called **irrotational**.',
      },
      {
        term: 'The divergence of a vector field',
        kind: 'definition',
        statement: 'The **divergence** of $\\mathbf{F} = P\\,\\mathbf{i} + Q\\,\\mathbf{j} + R\\,\\mathbf{k}$ is the scalar field $$\\operatorname{div}\\mathbf{F} = \\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}.$$',
        detail: 'Divergence measures the net outflow rate per unit volume at each point — how much the field expands there. Positive divergence marks a **source** (fluid being created, like water pumped in), negative divergence a **sink** (fluid disappearing), and $\\operatorname{div}\\mathbf{F} = 0$ an **incompressible** field, such as the velocity field of water in a sealed pipe. The radial field $\\langle x, y, z \\rangle$ has divergence $3$ everywhere — a uniform 3D source — while the rotation field $\\langle -y, x, 0 \\rangle$ has divergence $0$: spinning does not expand.',
      },
      {
        term: 'The del operator viewpoint',
        kind: 'notation',
        statement: 'Both operators come from the vector of partial-derivative symbols $\\nabla = \\mathbf{i}\\,\\dfrac{\\partial}{\\partial x} + \\mathbf{j}\\,\\dfrac{\\partial}{\\partial y} + \\mathbf{k}\\,\\dfrac{\\partial}{\\partial z}$: formally, $\\operatorname{grad} f = \\nabla f$, $\\operatorname{div}\\mathbf{F} = \\nabla \\cdot \\mathbf{F}$ (a dot product) and $\\operatorname{curl}\\mathbf{F} = \\nabla \\times \\mathbf{F}$ (a cross product).',
        detail: 'The gradient of Section 14.6, the divergence and the curl are then the three ways a vector differential operator can act — on scalars, dotted with vectors, crossed with vectors. This notation is why physics writes Maxwell’s four equations in two compact curl-and-divergence lines: $\\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0$ and $\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J} + \\mu_0\\varepsilon_0\\,\\partial\\mathbf{E}/\\partial t$ are literally divergence and curl statements.',
      },
      {
        term: 'Green’s theorem in curl and divergence form',
        kind: 'theorem',
        statement: 'For a planar field $\\mathbf{F}$ on a region $D$ with boundary $C$: $$\\oint_C \\mathbf{F} \\cdot \\mathbf{T}\\,ds = \\iint_D (\\operatorname{curl}\\mathbf{F}) \\cdot \\mathbf{k}\\;dA \\quad \\text{(circulation form)}, \\qquad \\oint_C \\mathbf{F} \\cdot \\mathbf{n}\\,ds = \\iint_D \\operatorname{div}\\mathbf{F}\\;dA \\quad \\text{(flux form)}.$$',
        detail: 'The scalar integrand $Q_x - P_y$ of Section 16.4 is nothing but the $\\mathbf{k}$-component of $\\operatorname{curl}\\mathbf{F}$, so Green’s theorem already told us that circulation equals accumulated curl. The flux form is new information in 2D: outflow through a boundary equals total divergence inside — a preview of the divergence theorem of Section 16.9, where the double integral becomes a triple integral.',
      },
      {
        term: 'The two great identities',
        kind: 'theorem',
        statement: 'For scalar $f$ and vector $\\mathbf{F}$ with continuous second partials: $$\\operatorname{curl}(\\nabla f) = \\mathbf{0}, \\qquad \\operatorname{div}(\\operatorname{curl}\\mathbf{F}) = 0.$$',
        detail: 'Both are Clairaut’s theorem in disguise: the cross-partials cancel in each computation. The first identity says every gradient field is irrotational — a conservative force cannot also be a whirlpool, recovering the cross-partial test of Section 16.3. The second says every curl field is incompressible — this is why magnetic fields (which are curls of a vector potential) always have $\\nabla \\cdot \\mathbf{B} = 0$.',
      },
      {
        term: 'The Laplacian',
        kind: 'notation',
        statement: 'The **Laplacian** is the divergence of a gradient: $\\nabla^{2} f = \\operatorname{div}(\\nabla f) = f_{xx} + f_{yy} + f_{zz}$; functions with $\\nabla^{2} f = 0$ are called **harmonic**.',
        detail: 'Laplace’s equation $\\nabla^{2} f = 0$ and its driven form, Poisson’s equation, govern steady-state heat, electrostatic potential (with $\\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0$ and $\\mathbf{E} = -\\nabla f$), fluid potential flow and quantum mechanics. The Laplacian measures how much a function’s value at a point exceeds the average of its neighbors — harmonic functions are exactly those that equal their neighborhood averages.',
      },
    ],
    examples: [
      {
        title: 'Computing curl and divergence',
        problem: 'Compute $\\operatorname{curl}\\mathbf{F}$ and $\\operatorname{div}\\mathbf{F}$ for $\\mathbf{F}(x, y, z) = xy\\,\\mathbf{i} + yz\\,\\mathbf{j} + zx\\,\\mathbf{k}$.',
        steps: [
          { label: 'Step 1: Identify the components', text: 'Here $P = xy$, $Q = yz$, $R = zx$, all with continuous partials everywhere.' },
          { label: 'Step 2: Compute the curl components', text: '$\\dfrac{\\partial R}{\\partial y} - \\dfrac{\\partial Q}{\\partial z} = 0 - y = -y$; $\\dfrac{\\partial P}{\\partial z} - \\dfrac{\\partial R}{\\partial x} = 0 - z = -z$; $\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 0 - x = -x$.' },
          { label: 'Step 3: Assemble the curl', text: '$\\operatorname{curl}\\mathbf{F} = -y\\,\\mathbf{i} - z\\,\\mathbf{j} - x\\,\\mathbf{k}$. Note the pattern: each component is minus the “other” variable of the cyclic product.' },
          { label: 'Step 4: Compute the divergence', text: '$\\operatorname{div}\\mathbf{F} = \\dfrac{\\partial}{\\partial x}(xy) + \\dfrac{\\partial}{\\partial y}(yz) + \\dfrac{\\partial}{\\partial z}(zx) = y + z + x$.' },
          { label: 'Step 5: Cross-check with the identities', text: 'As a consistency check, note that if $\\mathbf{F}$ had been a pure gradient, Step 2 would have produced $\\mathbf{0}$; and if $\\mathbf{F}$ had been a pure curl, Step 4 would have produced $0$. Here both are nonzero, so $\\mathbf{F}$ is neither irrotational nor incompressible.' },
        ],
        result: '$\\operatorname{curl}\\mathbf{F} = -y\\,\\mathbf{i} - z\\,\\mathbf{j} - x\\,\\mathbf{k}$ and $\\operatorname{div}\\mathbf{F} = x + y + z$: a field with both rotation and expansion.',
      },
      {
        title: 'The inverse-square field is curl-free and divergence-free',
        problem: 'For $\\mathbf{F}(x, y, z) = \\dfrac{x\\,\\mathbf{i} + y\\,\\mathbf{j} + z\\,\\mathbf{k}}{\\left(x^{2} + y^{2} + z^{2}\\right)^{3/2}}$, show that $\\operatorname{div}\\mathbf{F} = 0$ and $\\operatorname{curl}\\mathbf{F} = \\mathbf{0}$ at every point other than the origin.',
        steps: [
          { label: 'Step 1: Set up the divergence', text: 'Writing $r^{2} = x^{2} + y^{2} + z^{2}$, the first component is $x\\,r^{-3}$. Its $x$-derivative is $r^{-3} + x \\cdot (-3)r^{-4} \\cdot \\dfrac{\\partial r}{\\partial x} = r^{-3} - 3x^{2}r^{-5}$, using $\\partial r/\\partial x = x/r$.' },
          { label: 'Step 2: Add the three terms', text: 'Summing over $x$, $y$ and $z$: $\\operatorname{div}\\mathbf{F} = 3r^{-3} - 3(x^{2} + y^{2} + z^{2})r^{-5} = 3r^{-3} - 3r^{2}r^{-5} = 0$ for $r \\ne 0$.' },
          { label: 'Step 3: Recognize a gradient', text: 'From Section 16.1, $\\mathbf{F} = \\nabla\\left(-\\dfrac{1}{r}\\right)$ (up to the physical constant), since $\\nabla(1/r) = -\\mathbf{r}/r^{3}$. The identity $\\operatorname{curl}(\\nabla f) = \\mathbf{0}$ then gives $\\operatorname{curl}\\mathbf{F} = \\mathbf{0}$ immediately.' },
          { label: 'Step 4: Interpret physically', text: 'This is the electric field of a point charge (or gravity of a point mass, with a sign). No charge, no divergence: the field lines merely pass through any region not containing the origin. No curl: electrostatics has no swirl. All the “source” concentrates at the singular point $r = 0$, where the field blows up — precisely where Gauss’s law will place the charge in Section 16.9.' },
        ],
        result: 'The inverse-square field has $\\operatorname{div}\\mathbf{F} = 0$ and $\\operatorname{curl}\\mathbf{F} = \\mathbf{0}$ away from the origin — divergence-free, irrotational, with all its physics packed into the singularity.',
      },
    ],
    keyTakeaways: [
      'Curl is $\\nabla \\times \\mathbf{F}$, a vector measuring rotation: $\\operatorname{curl}(\\omega\\langle -y, x, 0 \\rangle) = 2\\omega\\,\\mathbf{k}$.',
      'Divergence is $\\nabla \\cdot \\mathbf{F}$, a scalar measuring expansion: positive at sources, negative at sinks, zero for incompressible flow.',
      'The 2D Green’s integrand $\\partial Q/\\partial x - \\partial P/\\partial y$ is the $\\mathbf{k}$-component of the curl; the flux form of Green integrates the divergence.',
      '$\\operatorname{curl}(\\nabla f) = \\mathbf{0}$ and $\\operatorname{div}(\\operatorname{curl}\\mathbf{F}) = 0$ — Clairaut’s theorem wearing vector clothing.',
      'The inverse-square field is both divergence-free and curl-free away from its source point.',
      'The Laplacian $\\nabla^{2} f = \\operatorname{div}(\\nabla f)$ generates Laplace’s and Poisson’s equations of electrostatics and heat flow.',
      'Maxwell’s equations are literally statements about the divergence and curl of the electric and magnetic fields.',
    ],
    quiz: [
      {
        q: 'The curl of a gradient field is always:',
        options: ['Equal to the Laplacian', 'The zero vector', 'A unit vector', 'Undefined unless the domain is simply-connected'],
        answer: 1,
        explanation: '$\\operatorname{curl}(\\nabla f) = \\mathbf{0}$ by Clairaut’s theorem — the mixed partials cancel in each component. (The converse — every irrotational field on a simply-connected region is a gradient — needs the topology condition.)',
      },
      {
        q: 'A fluid has velocity field $\\mathbf{v}$ with $\\operatorname{div}\\mathbf{v} > 0$ at a point. This means:',
        options: ['The fluid is rotating at that point', 'There is a net outflow — fluid is being created at that point', 'The fluid is incompressible there', 'The flow is faster than at neighboring points'],
        answer: 1,
        explanation: 'Positive divergence marks a source: more fluid leaves a tiny volume around the point than enters it. Rotation is the curl’s business, and $\\operatorname{div}\\mathbf{v} = 0$ would mean incompressibility.',
      },
      {
        q: 'For $\\mathbf{F}(x, y, z) = xy\\,\\mathbf{i} + yz\\,\\mathbf{j} + zx\\,\\mathbf{k}$, the divergence is:',
        options: [`$x + y + z$`, `$-y - z - x$`, `$yz + zx + xy$`, `$0$`],
        answer: 0,
        explanation: '$\\operatorname{div}\\mathbf{F} = \\partial(xy)/\\partial x + \\partial(yz)/\\partial y + \\partial(zx)/\\partial z = y + z + x$. Each derivative picks off the “other” factor of its product.',
      },
      {
        q: 'Which field is incompressible (divergence-free) but not irrotational?',
        options: [`$\\langle x, y, z \\rangle$`, `$\\langle -y, x, 0 \\rangle$`, `$\\nabla f$ for any $f$`, `$\\operatorname{curl}\\mathbf{G}$ for any $\\mathbf{G}$`],
        answer: 1,
        explanation: 'The rotation field $\\langle -y, x, 0 \\rangle$ has $\\operatorname{div} = -0 + 0 + 0 = 0$ but $\\operatorname{curl} = 2\\,\\mathbf{k} \\ne \\mathbf{0}$: spinning without expanding. Note $\\operatorname{curl}\\mathbf{G}$ is ALWAYS divergence-free, and $\\nabla f$ is always curl-free.',
      },
      {
        q: 'The $\\mathbf{k}$-component of $\\operatorname{curl}(P\\,\\mathbf{i} + Q\\,\\mathbf{j})$ is:',
        options: [`$\\partial P/\\partial x + \\partial Q/\\partial y$`, `$\\partial Q/\\partial x - \\partial P/\\partial y$`, `$\\partial P/\\partial y - \\partial Q/\\partial x$`, `$\\partial P/\\partial y + \\partial Q/\\partial x$`],
        answer: 1,
        explanation: 'From the middle row of the determinant pattern, the third component is $\\partial Q/\\partial x - \\partial P/\\partial y$ — the exact integrand that Green’s theorem integrates over the region.',
      },
    ],
  },

  // ------------------------------------------------------------------ 16.6
  {
    sectionId: 'calc-ch16-s6',
    readingTime: 9,
    intro: 'To integrate over a surface the way Chapter 15 integrated over planar regions, surfaces need the same machinery curves had: a parametrization, tangent directions, a length element. A parametric surface is a vector-valued function of two variables; its partial derivatives span the tangent plane, their cross product is the normal vector, and its magnitude replaces “speed” in the surface-area formula.',
    objectives: [
      'Parametrize standard surfaces (spheres, cylinders, cones, graphs, helicoids) and identify a surface from a parametrization',
      'Interpret grid curves and compute the tangent vectors $\\mathbf{r}_u$ and $\\mathbf{r}_v$',
      'Use the cross product $\\mathbf{r}_u \\times \\mathbf{r}_v$ to find tangent planes and normal vectors',
      'Compute surface area from $\\iint_D |\\mathbf{r}_u \\times \\mathbf{r}_v|\\,dA$, including the graph special case',
    ],
    concepts: [
      {
        term: 'Parametric surfaces',
        kind: 'definition',
        statement: 'A **parametric surface** $S$ is the image of a vector function of two variables, $$\\mathbf{r}(u, v) = x(u, v)\\,\\mathbf{i} + y(u, v)\\,\\mathbf{j} + z(u, v)\\,\\mathbf{k}, \\qquad (u, v) \\in D,$$ where $D$ is a region in the $uv$-plane; the surface is smooth when $\\mathbf{r}_u$ and $\\mathbf{r}_v$ are continuous and $\\mathbf{r}_u \\times \\mathbf{r}_v \\ne \\mathbf{0}$.',
        detail: 'This is the two-variable upgrade of the space curves of Section 13.1. Every surface you know is a parametric surface: graphs $z = g(x, y)$ are the case $\\mathbf{r}(x, y) = \\langle x, y, g(x, y) \\rangle$; the sphere of radius $a$ is parametrized by spherical angles; surfaces of revolution sweep a profile curve around an axis.',
      },
      {
        term: 'Grid curves',
        kind: 'notation',
        statement: 'The curves on the surface obtained by holding $u$ fixed ($\\mathbf{r}(u_0, v)$, varying $v$) or holding $v$ fixed ($\\mathbf{r}(u, v_0)$, varying $u$) are the **grid curves** — they weave the coordinate grid of the $uv$-plane onto the surface.',
        detail: 'For a sphere parametrized by longitude and latitude, the grid curves are the meridians and parallels of a globe; for a cylinder $\\mathbf{r}(u, v) = \\langle 2\\cos u, v, 2\\sin u \\rangle$ they are vertical lines ($u$ fixed) and horizontal circles ($v$ fixed). Reading grid curves is the fastest way to identify an unfamiliar parametrization.',
      },
      {
        term: 'Tangent vectors and the tangent plane',
        kind: 'method',
        statement: 'The partial derivatives $\\mathbf{r}_u = \\partial\\mathbf{r}/\\partial u$ and $\\mathbf{r}_v = \\partial\\mathbf{r}/\\partial v$ are tangent vectors to the grid curves through a point; when they are not parallel, the **tangent plane** to $S$ at $\\mathbf{r}(u_0, v_0)$ is the plane through that point with normal vector $\\mathbf{r}_u \\times \\mathbf{r}_v$ (evaluated at $(u_0, v_0)$).',
        detail: 'The tangent-plane equation is $\\left[\\mathbf{r}_u \\times \\mathbf{r}_v\\right] \\cdot \\left(\\langle x, y, z \\rangle - \\mathbf{r}(u_0, v_0)\\right) = 0$. For a graph $z = g(x, y)$, the formula gives normal $\\langle -g_x, -g_y, 1 \\rangle$ — the same vector from Section 14.4, confirming that tangent planes to parametric surfaces generalize tangent planes to level surfaces.',
      },
      {
        term: 'Surface area',
        kind: 'theorem',
        statement: 'If a smooth parametric surface $S$ is given by $\\mathbf{r}(u, v)$ on $D$ and $\\mathbf{r}_u \\times \\mathbf{r}_v \\ne \\mathbf{0}$, its area is $$A(S) = \\iint_D \\left|\\mathbf{r}_u \\times \\mathbf{r}_v\\right| dA.$$ For the graph $z = g(x, y)$ this becomes $A(S) = \\iint_D \\sqrt{1 + g_x^{2} + g_y^{2}}\\;dA$.',
        detail: 'A small rectangle of size $\\Delta u \\times \\Delta v$ in parameter space maps to a tiny parallelogram on the surface spanned by $\\mathbf{r}_u \\Delta u$ and $\\mathbf{r}_v \\Delta v$; its area is the cross-product magnitude $|\\mathbf{r}_u \\times \\mathbf{r}_v|\\,\\Delta u\\,\\Delta v$. Summing gives the double integral. The graph form recovers the surface-area formula of Sections 8.2 and 15.6 — this is its most general home.',
      },
      {
        term: 'Standard parametrizations worth memorizing',
        kind: 'insight',
        statement: 'Cylinder of radius $a$ (axis the $z$-axis): $\\mathbf{r}(u, v) = \\langle a\\cos u, v, a\\sin u \\rangle$. Sphere of radius $a$: $\\mathbf{r}(\\phi, \\theta) = \\langle a\\sin\\phi\\cos\\theta, a\\sin\\phi\\sin\\theta, a\\cos\\phi \\rangle$, $0 \\le \\phi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$. Surface of revolution of $y = g(x)$ about the $x$-axis: $\\mathbf{r}(x, \\theta) = \\langle x, g(x)\\cos\\theta, g(x)\\sin\\theta \\rangle$.',
        detail: 'The helicoid $\\mathbf{r}(u, v) = \\langle u\\cos v, u\\sin v, v \\rangle$ — a spiral ramp like a parking-garage floor — and the Möbius strip are the standard exotic examples: the helicoid is a ruled minimal surface, while the Möbius strip is the canonical example of a **non-orientable** surface, one that has no consistent choice of side (Section 16.7 needs orientation, so Möbius strips are excluded there).',
      },
      {
        term: 'Identifying surfaces from parametrizations',
        kind: 'method',
        statement: 'To identify the surface given by $\\mathbf{r}(u, v)$: write the three component equations, then eliminate $u$ and $v$ to get one Cartesian relation among $x$, $y$, $z$. For $\\mathbf{r}(u, v) = \\langle 2\\cos u, v, 2\\sin u \\rangle$, the relations $x = 2\\cos u$ and $z = 2\\sin u$ give $x^{2} + z^{2} = 4$: a circular cylinder of radius $2$.',
        detail: 'Track the parameter ranges too: if $0 \\le u \\le 2\\pi$ and $0 \\le v \\le 3$, the parametrization covers the finite band of the cylinder between the planes $y = 0$ and $y = 3$. Common targets of elimination: spheres $x^{2} + y^{2} + z^{2} = a^{2}$, cones $z^{2} = x^{2} + y^{2}$, tori, planes and hyperbolic paraboloids.',
      },
    ],
    examples: [
      {
        title: 'Identifying a parametrized surface',
        problem: 'Identify the surface parametrized by $\\mathbf{r}(u, v) = 2\\cos u\\,\\mathbf{i} + v\\,\\mathbf{j} + 2\\sin u\\,\\mathbf{k}$, where $0 \\le u \\le 2\\pi$ and $0 \\le v \\le 3$, and describe its grid curves.',
        steps: [
          { label: 'Step 1: Read off the components', text: 'The surface consists of all points $(x, y, z) = (2\\cos u, v, 2\\sin u)$ with $u$ sweeping a full circle and $v$ running from $0$ to $3$.' },
          { label: 'Step 2: Eliminate the parameters', text: 'Since $x = 2\\cos u$ and $z = 2\\sin u$, we have $x^{2} + z^{2} = 4\\cos^{2} u + 4\\sin^{2} u = 4$ — no $u$ remains, and $y = v$ is free.' },
          { label: 'Step 3: Identify', text: '$x^{2} + z^{2} = 4$ with $0 \\le y \\le 3$ is a circular cylinder of radius $2$ whose axis is the $y$-axis, cut off between the planes $y = 0$ and $y = 3$.' },
          { label: 'Step 4: Describe the grid curves', text: 'Fixing $v = v_0$ gives the circle $(2\\cos u, v_0, 2\\sin u)$: horizontal circles around the cylinder. Fixing $u = u_0$ gives $(2\\cos u_0, v, 2\\sin u_0)$ with only $y$ varying: a vertical line on the cylinder wall.' },
          { label: 'Step 5: Note the tangent vectors', text: '$\\mathbf{r}_u = \\langle -2\\sin u, 0, 2\\cos u \\rangle$ (along the circles) and $\\mathbf{r}_v = \\langle 0, 1, 0 \\rangle$ (along the lines); they are perpendicular and never parallel, so every point has a well-defined tangent plane.' },
        ],
        result: 'The parametrization is a band of the cylinder $x^{2} + z^{2} = 4$ of height $3$, with circular and vertical grid curves — the model for all cylinder computations.',
      },
      {
        title: 'Surface area of a sphere',
        problem: 'Parametrize the sphere of radius $a$ and use the formula $A = \\iint_D |\\mathbf{r}_\\phi \\times \\mathbf{r}_\\theta|\\,dA$ to derive the famous result $A = 4\\pi a^{2}$.',
        steps: [
          { label: 'Step 1: Parametrize with spherical angles', text: 'Use $\\mathbf{r}(\\phi, \\theta) = \\langle a\\sin\\phi\\cos\\theta, a\\sin\\phi\\sin\\theta, a\\cos\\phi \\rangle$ with $0 \\le \\phi \\le \\pi$ (polar angle from the north pole) and $0 \\le \\theta \\le 2\\pi$ (longitude).' },
          { label: 'Step 2: Compute the tangent vectors', text: '$\\mathbf{r}_\\phi = \\langle a\\cos\\phi\\cos\\theta, a\\cos\\phi\\sin\\theta, -a\\sin\\phi \\rangle$ and $\\mathbf{r}_\\theta = \\langle -a\\sin\\phi\\sin\\theta, a\\sin\\phi\\cos\\theta, 0 \\rangle$.' },
          { label: 'Step 3: Take the cross product', text: 'A determinant computation gives $\\mathbf{r}_\\phi \\times \\mathbf{r}_\\theta = a^{2}\\sin\\phi\\,\\langle \\sin\\phi\\cos\\theta, \\sin\\phi\\sin\\theta, \\cos\\phi \\rangle$ — a vector pointing radially outward with length $a^{2}\\sin\\phi$.' },
          { label: 'Step 4: Set up the area integral', text: 'The region in parameter space is the rectangle $[0, \\pi] \\times [0, 2\\pi]$, so $A = \\int_0^{2\\pi}\\!\\int_0^{\\pi} a^{2}\\sin\\phi\\;d\\phi\\,d\\theta$.' },
          { label: 'Step 5: Integrate', text: 'The $\\phi$ integral is $[-\\cos\\phi]_0^{\\pi} = 2$, so $A = a^{2} \\cdot 2 \\cdot 2\\pi = 4\\pi a^{2}$ — and notice the factor $\\sin\\phi$ is exactly the Jacobian of spherical coordinates from Section 15.9.' },
        ],
        result: 'The sphere has area $4\\pi a^{2}$; the area element $dS = a^{2}\\sin\\phi\\,d\\phi\\,d\\theta$ is the same factor that appears in spherical triple integrals.',
      },
      {
        title: 'A tangent plane from a parametrization',
        problem: 'Find the tangent plane to the paraboloid $z = x^{2} + y^{2}$ at the point $(1, 2, 5)$, using the graph parametrization.',
        steps: [
          { label: 'Step 1: Parametrize as a graph', text: 'Take $\\mathbf{r}(x, y) = \\langle x, y, x^{2} + y^{2} \\rangle$, so the point $(1, 2, 5)$ corresponds to the parameter point $(x_0, y_0) = (1, 2)$.' },
          { label: 'Step 2: Compute the tangent vectors', text: '$\\mathbf{r}_x = \\langle 1, 0, 2x \\rangle$ and $\\mathbf{r}_y = \\langle 0, 1, 2y \\rangle$; at $(1, 2)$ these are $\\langle 1, 0, 2 \\rangle$ and $\\langle 0, 1, 4 \\rangle$.' },
          { label: 'Step 3: Compute the normal', text: '$\\mathbf{r}_x \\times \\mathbf{r}_y = \\langle -2x, -2y, 1 \\rangle$; at $(1, 2)$ the normal is $\\langle -2, -4, 1 \\rangle$ — the familiar graph normal $\\langle -g_x, -g_y, 1 \\rangle$.' },
          { label: 'Step 4: Write the plane', text: 'The plane through $(1, 2, 5)$ with normal $\\langle -2, -4, 1 \\rangle$ is $-2(x - 1) - 4(y - 2) + (z - 5) = 0$, which simplifies to $z = 2x + 4y - 5$.' },
          { label: 'Step 5: Verify', text: 'The point $(1, 2, 5)$ satisfies both the surface equation ($5 = 1 + 4$) and the plane equation ($5 = 2 + 8 - 5$), and the normal is exactly the one from Section 14.4’s level-surface method applied to $x^{2} + y^{2} - z = 0$.' },
        ],
        result: 'The tangent plane is $z = 2x + 4y - 5$, obtained from the normal $\\mathbf{r}_x \\times \\mathbf{r}_y = \\langle -2, -4, 1 \\rangle$.',
      },
    ],
    keyTakeaways: [
      'A parametric surface is $\\mathbf{r}(u, v)$ over a region $D$ in the $uv$-plane; grid curves are the images of the lines $u = $ const and $v = $ const.',
      'The tangent vectors $\\mathbf{r}_u$ and $\\mathbf{r}_v$ span the tangent plane, with normal $\\mathbf{r}_u \\times \\mathbf{r}_v$.',
      'Surface area is $\\iint_D |\\mathbf{r}_u \\times \\mathbf{r}_v|\\,dA$; for a graph it reduces to $\\iint \\sqrt{1 + g_x^{2} + g_y^{2}}\\,dA$.',
      'The sphere of radius $a$ has area element $dS = a^{2}\\sin\\phi\\,d\\phi\\,d\\theta$ and total area $4\\pi a^{2}$.',
      'Eliminate the parameters to identify a surface from its parametrization; track parameter ranges for partial surfaces.',
      'Surfaces of revolution, cylinders, spheres and graphs all have standard parametrizations; the Möbius strip is the classic non-orientable exception.',
    ],
    quiz: [
      {
        q: 'The surface parametrized by $\\mathbf{r}(u, v) = \\langle 3\\cos u, 3\\sin u, v \\rangle$, $0 \\le u \\le 2\\pi$, is:',
        options: ['A sphere of radius $3$', 'A circular cylinder of radius $3$ with axis the $z$-axis', 'A cone of height $3$', 'A plane $3$ units from the origin'],
        answer: 1,
        explanation: 'The first two components satisfy $x^{2} + y^{2} = 9$ while $z = v$ is free — a cylinder of radius $3$ around the $z$-axis. If the $v$ had been in the first component instead, the axis would be the $y$-axis.',
      },
      {
        q: 'For the graph $z = g(x, y)$ parametrized by $\\mathbf{r}(x, y) = \\langle x, y, g(x, y) \\rangle$, the length $|\\mathbf{r}_x \\times \\mathbf{r}_y|$ equals:',
        options: [`$\\sqrt{1 + g_x^{2} + g_y^{2}}$`, `$|g_x g_y|$`, `$1 + |g_x| + |g_y|$`, `$\\sqrt{g_x^{2} + g_y^{2}}$`],
        answer: 0,
        explanation: 'The cross product is $\\langle -g_x, -g_y, 1 \\rangle$ with length $\\sqrt{g_x^{2} + g_y^{2} + 1}$ — the surface-area factor from Sections 8.2 and 15.6.',
      },
      {
        q: 'For the sphere parametrization $\\mathbf{r}(\\phi, \\theta)$ of radius $a$, the magnitude $|\\mathbf{r}_\\phi \\times \\mathbf{r}_\\theta|$ is:',
        options: [`$a^{2}$`, `$a^{2}\\sin\\phi$`, `$a^{2}\\cos\\phi$`, `$a\\sin\\phi$`],
        answer: 1,
        explanation: 'The cross product points radially outward with magnitude $a^{2}\\sin\\phi$ — it shrinks to zero at the poles ($\\phi = 0, \\pi$), where the longitude grid collapses. Integrating $a^{2}\\sin\\phi$ over the parameter rectangle gives $4\\pi a^{2}$.',
      },
      {
        q: 'Grid curves on a parametric surface are:',
        options: ['The curves of steepest descent on the surface', 'The images of the lines $u = $ constant and $v = $ constant under the parametrization', 'Level curves of $z$ on the surface', 'The intersections of the surface with the coordinate planes'],
        answer: 1,
        explanation: 'Holding one parameter fixed and letting the other run traces a grid curve — meridians and parallels on a sphere, circles and vertical lines on a cylinder. They visualize how the flat $uv$-domain wraps onto the surface.',
      },
    ],
  },

  // ------------------------------------------------------------------ 16.7
  {
    sectionId: 'calc-ch16-s7',
    readingTime: 10,
    intro: 'Surface integrals do for surfaces what line integrals did for curves: integrate a scalar field (mass of a curved sheet) or, after choosing an orientation, a vector field — the flux, the amount of field passing through. Orientation is the new subtlety: a surface has two sides, and the answer depends on which side you declare to be “out”.',
    objectives: [
      'Define and compute the surface integral of a scalar field over a parametrized surface',
      'Apply surface integrals to mass and charge of curved sheets',
      'Define orientable surfaces and orient a surface with a unit normal field',
      'Compute the flux $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$ for graphs and parametrized surfaces, outward for closed surfaces',
    ],
    concepts: [
      {
        term: 'Surface integral of a scalar field',
        kind: 'definition',
        statement: 'If $S$ is the smooth parametric surface $\\mathbf{r}(u, v)$, $(u, v) \\in D$, and $f$ is defined on $S$, then $$\\iint_S f(x, y, z)\\,dS = \\iint_D f(\\mathbf{r}(u, v))\\,\\left|\\mathbf{r}_u \\times \\mathbf{r}_v\\right| dA.$$ The value does not depend on which parametrization of $S$ is used.',
        detail: 'The proof of parametrization-independence is the same as for arc length: any two parametrizations are related by a change of variables whose Jacobian cancels out — Section 15.10’s change-of-variables theorem in disguise. Physically, if the parametrization changes, the little parallelograms rearrange but the sheet and the function on it do not.',
      },
      {
        term: 'Mass of a curved sheet',
        kind: 'insight',
        statement: 'A thin sheet shaped like $S$ with (surface) density $\\rho(x, y, z)$ (mass per unit area) has mass $$m = \\iint_S \\rho\\,dS,$$ with center of mass $\\bar{x} = \\frac{1}{m}\\iint_S x\\,\\rho\\,dS$ (and cyclically for $\\bar{y}, \\bar{z}$) — the curved-surface version of the lamina and wire formulas.',
        detail: 'The same integral computes total charge on a curved conductor, average temperature across a shell, or moments of inertia of a dome. When $\\rho = 1$, the surface integral collapses to the surface area $\\iint_S dS$ of Section 16.6 — exactly as line integrals with $f = 1$ gave arc length.',
      },
      {
        term: 'Orientable surfaces',
        kind: 'definition',
        statement: 'An **orientable** surface has two distinguishable sides; orienting it means choosing a unit normal $\\mathbf{n}(u, v)$ at every point so that it varies **continuously** over the surface. Equivalently, the surface admits a consistent choice of $\\mathbf{r}_u \\times \\mathbf{r}_v$ direction.',
        detail: 'A Möbius strip has only one side: walking its normal around once returns it flipped, so no continuous orientation exists — surface integrals of vector fields are not defined on it. For a parametrized surface the two possible orientations correspond to $\\mathbf{r}_u \\times \\mathbf{r}_v$ versus $\\mathbf{r}_v \\times \\mathbf{r}_u$; for a graph $z = g(x, y)$ the natural choice $\\langle -g_x, -g_y, 1 \\rangle$ points upward. A **closed** surface (like a sphere) always gets the outward orientation by convention.',
      },
      {
        term: 'The flux integral',
        kind: 'definition',
        statement: 'For a vector field $\\mathbf{F}$ and an oriented surface $S$ with unit normal $\\mathbf{n}$, the (oriented) **surface integral** or **flux** is $$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\;dS = \\iint_D \\mathbf{F}(\\mathbf{r}(u, v)) \\cdot \\left(\\mathbf{r}_u \\times \\mathbf{r}_v\\right) dA.$$',
        detail: 'If $\\mathbf{F}$ is the velocity field of a fluid with density $1$, then $\\mathbf{F} \\cdot \\mathbf{n}\\,dS$ is the volume of fluid crossing the patch $dS$ per unit time (positive with $\\mathbf{n}$, negative against it), so the flux is the net volume-rate of flow through the surface — through a closed surface, the net outflow. This is the quantity the divergence theorem will compute three ways faster.',
      },
      {
        term: 'Flux through a graph',
        kind: 'method',
        statement: 'For $S$ given by $z = g(x, y)$ over a region $D$, oriented upward: $$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_D \\left(-P\\,g_x - Q\\,g_y + R\\right) dA, \\qquad \\mathbf{F} = \\langle P, Q, R \\rangle.$$',
        detail: 'This is just the general formula with $\\mathbf{r}_x \\times \\mathbf{r}_y = \\langle -g_x, -g_y, 1 \\rangle$; flip all three signs to orient downward. It parallels the three-component structure of the scalar graph formula $dS = \\sqrt{1 + g_x^{2} + g_y^{2}}\\,dA$, and it is the workhorse for computing flux through paraboloid caps and hemisphere domes.',
      },
      {
        term: 'Flux through parametrized and closed surfaces',
        kind: 'method',
        statement: 'For a general parametrized surface, orient with $\\mathbf{r}_u \\times \\mathbf{r}_v$ (or its negative) and integrate the dot product over $D$. For a **closed** surface — sphere, box, cylinder-with-caps — the convention is the **outward** normal, and the flux measures net outflow of the field.',
        detail: 'Piecewise-smooth closed surfaces (like a capped paraboloid, which is a curved cap plus a flat disk) split into smooth pieces: total flux is the sum of the fluxes of the pieces, each with its own outward normal. Getting a piece’s normal backwards is the most common flux error — always check that the normal points out of the enclosed solid, not in.',
      },
    ],
    examples: [
      {
        title: 'A scalar surface integral over a hemisphere',
        problem: 'Evaluate $\\iint_S z\\,dS$, where $S$ is the hemisphere $z = \\sqrt{1 - x^{2} - y^{2}}$.',
        steps: [
          { label: 'Step 1: Choose the graph setup', text: 'Here $g(x, y) = \\sqrt{1 - x^{2} - y^{2}}$ over the unit disk $D$: $x^{2} + y^{2} \\le 1$.' },
          { label: 'Step 2: Compute the partials', text: '$g_x = \\dfrac{-x}{\\sqrt{1 - x^{2} - y^{2}}} = -\\dfrac{x}{z}$ and similarly $g_y = -\\dfrac{y}{z}$ on the hemisphere.' },
          { label: 'Step 3: Form the area element', text: '$1 + g_x^{2} + g_y^{2} = 1 + \\dfrac{x^{2} + y^{2}}{z^{2}} = \\dfrac{z^{2} + x^{2} + y^{2}}{z^{2}} = \\dfrac{1}{z^{2}}$, since on $S$ we have $x^{2} + y^{2} + z^{2} = 1$. Hence $dS = \\dfrac{1}{z}\\,dA$ — a delightful simplification.' },
          { label: 'Step 4: Substitute', text: '$\\iint_S z\\,dS = \\iint_D z \\cdot \\dfrac{1}{z}\\,dA = \\iint_D 1\\,dA$ — the integrand collapses to the constant $1$.' },
          { label: 'Step 5: Integrate', text: 'The integral is just the area of the unit disk: $\\pi$. Geometrically, the sphere’s tilt exactly cancels the height factor $z$: the hemisphere, projected flat, has uniform density $z\\,dS = dA$.' },
        ],
        result: '$\\iint_S z\\,dS = \\pi$: the hemisphere is steepest near its rim, and that tilt exactly compensates for the shrinking height $z$, leaving the projected area.',
      },
      {
        title: 'Flux through a paraboloid cap',
        problem: 'Compute the flux of $\\mathbf{F} = y\\,\\mathbf{i} + x\\,\\mathbf{j} + z\\,\\mathbf{k}$ upward through $S$, the part of the paraboloid $z = 4 - x^{2} - y^{2}$ that lies above the $xy$-plane.',
        steps: [
          { label: 'Step 1: Set up the graph formula', text: 'With $g = 4 - x^{2} - y^{2}$, $\\mathbf{r}_x \\times \\mathbf{r}_y = \\langle 2x, 2y, 1 \\rangle$, which points upward (its $\\mathbf{k}$-component is $+1$) — the required orientation.' },
          { label: 'Step 2: Dot the field with the normal', text: '$\\mathbf{F} \\cdot \\langle 2x, 2y, 1 \\rangle = 2xy + 2xy + z = 4xy + 4 - x^{2} - y^{2}$, using $z = 4 - x^{2} - y^{2}$ on the surface.' },
          { label: 'Step 3: Determine the region', text: 'The cap meets $z = 0$ where $x^{2} + y^{2} = 4$, so the projection is the disk $D$: $r \\le 2$ in polar coordinates.' },
          { label: 'Step 4: Integrate in polar coordinates', text: 'The odd term integrates away: $\\iint_D 4xy\\,dA = 0$ by symmetry ($4r^{2}\\cos\\theta\\sin\\theta$ averages to zero over $\\theta$). The rest: $\\int_0^{2\\pi}\\!\\int_0^{2} (4 - r^{2})\\,r\\,dr\\,d\\theta = 2\\pi\\left[2r^{2} - \\tfrac{r^{4}}{4}\\right]_0^{2} = 2\\pi(8 - 4) = 8\\pi$.' },
          { label: 'Step 5: Interpret', text: 'Positive flux $8\\pi$ means net field flows up through the cap — consistent with $\\mathbf{F}$ having a $z$-component equal to the height. Section 16.9 will recover this same $8\\pi$ from a volume integral of the divergence over the solid under the cap, a powerful cross-check.' },
        ],
        result: 'Flux $= 8\\pi$ upward through the paraboloid cap — one dot product, one polar integral, and a symmetry that kills the odd term.',
      },
      {
        title: 'Flux of a radial field through a sphere',
        problem: 'Find the flux of $\\mathbf{F} = x\\,\\mathbf{i} + y\\,\\mathbf{j} + z\\,\\mathbf{k}$ outward through the sphere $x^{2} + y^{2} + z^{2} = a^{2}$.',
        steps: [
          { label: 'Step 1: Find the outward normal', text: 'The outward unit normal on a sphere centered at the origin is $\\mathbf{n} = \\dfrac{\\langle x, y, z \\rangle}{a}$, since the position vector has length $a$ and points radially outward.' },
          { label: 'Step 2: Dot the field with the normal', text: 'Here $\\mathbf{F}$ is exactly the position vector, so $\\mathbf{F} \\cdot \\mathbf{n} = \\dfrac{x^{2} + y^{2} + z^{2}}{a} = \\dfrac{a^{2}}{a} = a$ — a constant on the sphere.' },
          { label: 'Step 3: Integrate the constant', text: 'A constant times the surface area: flux $= a \\cdot 4\\pi a^{2} = 4\\pi a^{3}$.' },
          { label: 'Step 4: Interpret', text: 'The radial field pushes straight out everywhere, with magnitude growing linearly as $r = a$; the flux counts “outflow per unit area” $a$ over all $4\\pi a^{2}$ units of area. Section 16.9 will verify this instantly via $\\operatorname{div}\\mathbf{F} = 3$ and the volume $\\tfrac{4}{3}\\pi a^{3}$.' },
        ],
        result: 'Flux $= 4\\pi a^{3}$, computed with no parametrization at all — the geometry of a radial field on a sphere makes the integrand constant.',
      },
    ],
    keyTakeaways: [
      'The scalar surface integral is $\\iint_S f\\,dS = \\iint_D f(\\mathbf{r}(u, v))|\\mathbf{r}_u \\times \\mathbf{r}_v|\\,dA$, independent of parametrization.',
      'Mass of a curved sheet: $m = \\iint_S \\rho\\,dS$; with $\\rho = 1$ this is the surface area.',
      'Orienting a surface means choosing a continuous unit normal; Möbius strips cannot be oriented, and vector surface integrals require orientation.',
      'Flux: $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_D \\mathbf{F} \\cdot (\\mathbf{r}_u \\times \\mathbf{r}_v)\\,dA$ — dot the field with the chosen normal direction and integrate.',
      'For a graph $z = g(x, y)$ oriented upward: $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_D (-P g_x - Q g_y + R)\\,dA$.',
      'Closed surfaces take the outward normal; their flux is the net outflow and splits additively over smooth pieces.',
      'For the radial field $\\langle x, y, z \\rangle$ on a sphere of radius $a$, the flux is $4\\pi a^{3}$ with essentially no computation.',
    ],
    quiz: [
      {
        q: 'The surface integral of a scalar field satisfies $\\iint_S f\\,dS = \\iint_D f(\\mathbf{r}(u, v))\\,|\\mathbf{r}_u \\times \\mathbf{r}_v|\\,dA$. If you reparametrize $S$ differently, the value:',
        options: ['Changes by the Jacobian of the reparametrization', 'Stays the same', 'Reverses sign', 'Doubles'],
        answer: 1,
        explanation: 'Like arc length and mass, the scalar surface integral depends only on the sheet and the function, not on the coordinates used to describe it. The Jacobians of the two parametrizations cancel by the change-of-variables theorem.',
      },
      {
        q: 'A Möbius strip cannot host vector surface integrals because:',
        options: ['It has no parametrization', 'Its grid curves are not smooth', 'It has only one side — no continuous unit normal exists on it', 'Its area is infinite'],
        answer: 2,
        explanation: 'Flux integrals require an orientation: a continuous choice of unit normal. Walking the normal around a Möbius strip returns it flipped, so the surface is non-orientable and $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$ is not defined on it.',
      },
      {
        q: 'For $S$ the graph $z = g(x, y)$ oriented upward and $\\mathbf{F} = \\langle P, Q, R \\rangle$, the flux equals:',
        options: [`$\\iint_D (P + Q + R)\\,dA$`, `$\\iint_D (-P g_x - Q g_y + R)\\,dA$`, `$\\iint_D (P g_x + Q g_y + R)\\,dA$`, `$\\iint_D \\sqrt{1 + g_x^{2} + g_y^{2}}\\,dA$`],
        answer: 1,
        explanation: 'The upward normal vector is $\\mathbf{r}_x \\times \\mathbf{r}_y = \\langle -g_x, -g_y, 1 \\rangle$, and dotting gives $-P g_x - Q g_y + R$ integrated over the projection $D$. The last option is the SCALAR area formula, not flux.',
      },
      {
        q: 'A closed surface has flux $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} > 0$ (outward orientation). This means:',
        options: ['The field rotates around the surface', 'There is net outflow — more field leaves than enters', 'The field is conservative', 'The surface must be a sphere'],
        answer: 1,
        explanation: 'With the outward convention, positive flux means net outflow through the boundary: the enclosed region acts as a net source of the field. Negative flux would mean net inflow (a sink).',
      },
      {
        q: 'The flux of $\\mathbf{F} = \\langle x, y, z \\rangle$ outward through the sphere of radius $2$ is:',
        options: [`$16\\pi$`, `$8\\pi$`, `$\\tfrac{32\\pi}{3}$`, `$32\\pi$`],
        answer: 3,
        explanation: 'On the sphere, $\\mathbf{F} = \\langle x, y, z \\rangle$ is radial with magnitude $2$, parallel to the outward unit normal, so $\\mathbf{F} \\cdot \\mathbf{n} = 2$ everywhere. Flux $= 2 \\times (4\\pi \\cdot 2^{2}) = 32\\pi$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 16.8
  {
    sectionId: 'calc-ch16-s8',
    readingTime: 9,
    intro: 'Stokes’ theorem is Green’s theorem promoted to space: the circulation of a vector field around a closed curve equals the total flux of its curl through any surface that spans the curve. The orientation rule — right hand along the boundary, thumb along the normal — is the whole contract, and the freedom to choose whichever spanning surface is easiest is the theorem’s superpower.',
    objectives: [
      'State Stokes’ theorem with the correct induced boundary orientation',
      'Verify and apply the theorem by computing both sides for spanning surfaces',
      'Exploit surface-independence to pick the easiest surface with a given boundary',
      'Recognize Green’s theorem as the flat special case and curl as circulation density',
    ],
    concepts: [
      {
        term: 'Stokes’ theorem',
        kind: 'theorem',
        statement: 'Let $S$ be an oriented piecewise-smooth surface bounded by a simple, closed, piecewise-smooth curve $C$ with positive (induced) orientation. If $\\mathbf{F}$ has continuous partials on an open region containing $S$, then $$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\operatorname{curl}\\mathbf{F}) \\cdot d\\mathbf{S}.$$',
        detail: 'Positive orientation of $C$ is the one induced by the orientation of $S$: if you walk along $C$ in the positive direction with the tip of the normal $\\mathbf{n}$ of $S$ grazing your head, the surface lies on your left. The theorem converts a boundary circulation into a surface flux of curl — and it is the master theorem of circulation.',
      },
      {
        term: 'The right-hand orientation rule',
        kind: 'notation',
        statement: 'To match orientations: curl the fingers of your right hand in the direction of travel around $C$; your thumb points in the direction of the normal $\\mathbf{n}$ that $S$ must use. Reversing either the boundary direction or the surface normal — but not both — flips the sign of one side and breaks the equality.',
        detail: 'For the flat disk in the $xy$-plane with upward normal $\\mathbf{k}$, the induced boundary orientation is counterclockwise viewed from above — which is exactly the positive orientation of Green’s theorem. Sign errors from mismatched orientations are the single most common Stokes mistake; when in doubt, check the disk case against Green.',
      },
      {
        term: 'Green’s theorem is the flat case',
        kind: 'insight',
        statement: 'When $S$ is a flat region $D$ of the $xy$-plane with upward normal $\\mathbf{k}$, then $d\\mathbf{S} = \\mathbf{k}\\,dA$ and Stokes reads $$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_D (\\operatorname{curl}\\mathbf{F}) \\cdot \\mathbf{k}\\;dA = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA,$$ precisely Green’s theorem.',
        detail: 'So Section 16.4 was never a separate theorem — it is Stokes on a pancake-flat surface. The same promotion happens again in Section 16.9, where the divergence theorem lifts Green’s flux form to three dimensions. One pattern, three elevations: this is why vector calculus feels like one idea wearing three hats.',
      },
      {
        term: 'Any spanning surface works',
        kind: 'insight',
        statement: 'The right side of Stokes depends only on the boundary curve $C$: if two oriented surfaces $S_1$ and $S_2$ share the same positively oriented boundary, then $$\\iint_{S_1} (\\operatorname{curl}\\mathbf{F}) \\cdot d\\mathbf{S} = \\iint_{S_2} (\\operatorname{curl}\\mathbf{F}) \\cdot d\\mathbf{S}.$$',
        detail: 'The reason is the identity $\\operatorname{div}(\\operatorname{curl}\\mathbf{F}) = 0$ together with the divergence theorem: gluing $S_1$ and $-S_2$ along $C$ creates a closed surface with zero net flux of curl. Practically this means you may replace a curved surface (a hemisphere, a paraboloid cap) by the flat disk it shares a boundary with — often turning a hard integral into a one-line one.',
      },
      {
        term: 'Curl as circulation density',
        kind: 'insight',
        statement: 'Around any tiny loop of area $\\Delta A$ with unit normal $\\mathbf{n}$, the circulation of $\\mathbf{F}$ satisfies $$\\oint_{\\text{tiny loop}} \\mathbf{F} \\cdot d\\mathbf{r} \\approx (\\operatorname{curl}\\mathbf{F}) \\cdot \\mathbf{n}\\;\\Delta A,$$ and Stokes extrapolates this local density to loops of any size.',
        detail: 'This is the differential meaning of curl: circulation per unit area, maximized when $\\mathbf{n}$ points along $\\operatorname{curl}\\mathbf{F}$. Faraday’s law of induction — a changing magnetic flux through a loop drives circulating electric field, $\\oint \\mathbf{E} \\cdot d\\mathbf{r} = -\\frac{d}{dt}\\iint \\mathbf{B} \\cdot d\\mathbf{S}$ — is literally a Stokes statement, which is why the theorem bears the physicist’s name.',
      },
      {
        term: 'A strategy for Stokes problems',
        kind: 'method',
        statement: 'Given a choice between computing $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ and $\\iint_S (\\operatorname{curl}\\mathbf{F}) \\cdot d\\mathbf{S}$: (1) compute the cheaper side; (2) if $C$ is simple but the natural surface is ugly, use the flat disk spanning $C$; (3) if the surface is simple but its boundary is a tangle, apply Stokes to trade for the line integral.',
        detail: 'Also remember the orientation contract first: choose which side of $S$ is positive, then traverse $C$ by the right-hand rule. For closed curves on curved surfaces, sketch the normal before writing a single integral — half of all wrong answers in practice problems are orientation errors, not integration errors.',
      },
    ],
    examples: [
      {
        title: 'Verifying Stokes’ theorem on a hemisphere',
        problem: 'Verify Stokes’ theorem for $\\mathbf{F} = -y^{2}\\,\\mathbf{i} + x\\,\\mathbf{j} + z^{2}\\,\\mathbf{k}$, where $S$ is the hemisphere $x^{2} + y^{2} + z^{2} = 1$, $z \\ge 0$, oriented upward.',
        steps: [
          { label: 'Step 1: Identify the boundary and its orientation', text: 'The boundary is the unit circle $C$ in the plane $z = 0$. Upward normal on the hemisphere induces, by the right-hand rule, counterclockwise traversal viewed from above.' },
          { label: 'Step 2: Compute the line integral directly', text: 'Parametrize $\\mathbf{r}(t) = \\langle \\cos t, \\sin t, 0 \\rangle$, $0 \\le t \\le 2\\pi$. The field on $C$ is $\\langle -\\sin^{2} t, \\cos t, 0 \\rangle$ and $\\mathbf{r}\';(t) = \\langle -\\sin t, \\cos t, 0 \\rangle$, so $\\mathbf{F} \\cdot \\mathbf{r}\'; = \\sin^{3} t + \\cos^{2} t$.' },
          { label: 'Step 3: Evaluate the circulation', text: '$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_0^{2\\pi} \\left(\\sin^{3} t + \\cos^{2} t\\right) dt = 0 + \\pi = \\pi$, since $\\sin^{3}$ integrates to zero over a full period and $\\cos^{2}$ averages to $\\tfrac{1}{2}$.' },
          { label: 'Step 4: Compute the curl', text: 'With $P = -y^{2}$, $Q = x$, $R = z^{2}$: $\\operatorname{curl}\\mathbf{F} = \\langle 0 - 0,\\ 0 - 0,\\ 1 - (-2y) \\rangle = \\langle 0, 0, 1 + 2y \\rangle$ — only the $\\mathbf{k}$-component survives.' },
          { label: 'Step 5: Integrate over the hemisphere', text: 'Using $\\mathbf{r}(\\phi, \\theta) = \\langle \\sin\\phi\\cos\\theta, \\sin\\phi\\sin\\theta, \\cos\\phi \\rangle$, the outward normal $\\mathbf{r}_\\phi \\times \\mathbf{r}_\\theta = \\sin\\phi\\,\\langle \\sin\\phi\\cos\\theta, \\sin\\phi\\sin\\theta, \\cos\\phi \\rangle$, so the integrand is $\\sin\\phi\\cos\\phi\\,(1 + 2\\sin\\phi\\sin\\theta)$ over $0 \\le \\phi \\le \\tfrac{\\pi}{2}$, $0 \\le \\theta \\le 2\\pi$.' },
          { label: 'Step 6: Evaluate', text: 'The cross term contains $\\int_0^{2\\pi} \\sin\\theta\\,d\\theta = 0$, so the flux is $\\int_0^{2\\pi}\\!\\int_0^{\\pi/2} \\sin\\phi\\cos\\phi\\,d\\phi\\,d\\theta = 2\\pi \\cdot \\tfrac{1}{2} = \\pi$ — matching the line integral exactly.' },
        ],
        result: 'Both sides equal $\\pi$: circulation around the equator equals the curl flux through the hemisphere, as Stokes promises.',
      },
      {
        title: 'Choosing the easiest spanning surface',
        problem: 'Compute $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ for $\\mathbf{F} = z\\,\\mathbf{i} + x\\,\\mathbf{j} + y\\,\\mathbf{k}$, where $C$ is the circle $x^{2} + y^{2} = 1$ in the plane $z = 0$, oriented counterclockwise viewed from above.',
        steps: [
          { label: 'Step 1: Pick the surface', text: 'Any surface spanning $C$ works. Skip curved candidates: use the flat disk $D$: $x^{2} + y^{2} \\le 1$, $z = 0$, with upward normal $\\mathbf{n} = \\mathbf{k}$.' },
          { label: 'Step 2: Compute the curl', text: 'For $P = z$, $Q = x$, $R = y$: $\\operatorname{curl}\\mathbf{F} = \\langle \\partial y/\\partial y - 0,\\ \\partial z/\\partial z - \\partial y/\\partial x,\\ \\partial x/\\partial x - \\partial z/\\partial z \\rangle = \\langle 1, 1, 1 \\rangle$.' },
          { label: 'Step 3: Apply Stokes with the flat disk', text: '$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_D (\\operatorname{curl}\\mathbf{F}) \\cdot \\mathbf{k}\\;dA = \\iint_D 1\\,dA = \\pi$, since the disk has area $\\pi$.' },
          { label: 'Step 4: Confirm by direct computation', text: 'On $C$: $\\mathbf{F}(\\mathbf{r}(t)) = \\langle 0, \\cos t, \\sin t \\rangle$ and $\\mathbf{r}\';(t) = \\langle -\\sin t, \\cos t, 0 \\rangle$, so $\\mathbf{F} \\cdot \\mathbf{r}\'; = \\cos^{2} t$ and $\\int_0^{2\\pi} \\cos^{2} t\\,dt = \\pi$. The two routes agree.' },
          { label: 'Step 5: Moral', text: 'A curved spanning surface (say a hemisphere bulging upward, which shares the same boundary circle) would give the same $\\pi$ — but only the flat disk makes the integral a one-liner.' },
        ],
        result: '$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\pi$, computed in one line through the flat disk; the theorem guarantees every other spanning surface gives the same answer.',
      },
    ],
    keyTakeaways: [
      'Stokes: $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\operatorname{curl}\\mathbf{F}) \\cdot d\\mathbf{S}$ — boundary circulation equals curl flux.',
      'Orientation is a contract: right-hand rule — fingers curl along $C$, thumb along $\\mathbf{n}$; mismatched signs are the most common error.',
      'Green’s theorem is Stokes for a flat surface in the $xy$-plane with upward normal.',
      'Any two spanning surfaces with the same boundary give the same curl flux, because $\\operatorname{div}(\\operatorname{curl}\\mathbf{F}) = 0$.',
      'Practical superpower: replace a curved surface by the flat disk spanning its boundary, or an ugly boundary by a nice surface, whichever side is cheaper.',
      'Curl is circulation per unit area; Faraday’s law of induction is Stokes’ theorem in physics clothing.',
    ],
    quiz: [
      {
        q: 'Stokes’ theorem equates the circulation $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ with:',
        options: ['$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$, the flux of the field', '$\\iint_S (\\operatorname{curl}\\mathbf{F}) \\cdot d\\mathbf{S}$, the flux of the curl', `$\\iiint_E \\operatorname{div}\\mathbf{F}\\,dV$`, `$\\iint_S f\\,dS$ for the potential $f$`],
        answer: 1,
        explanation: 'Stokes trades the line integral around the boundary for the surface integral of the CURL through any spanning surface. Flux of the field itself is the divergence theorem’s business.',
      },
      {
        q: 'A surface $S$ is oriented with normal pointing generally upward. Its boundary $C$ must be traversed:',
        options: ['Clockwise when viewed from above', 'Counterclockwise when viewed from above', 'In the direction of $\\operatorname{curl}\\mathbf{F}$', 'Either direction — orientation of $C$ does not matter'],
        answer: 1,
        explanation: 'Right-hand rule: with the thumb along the upward normal, the fingers curl counterclockwise as seen from above. That is the induced positive orientation of the boundary.',
      },
      {
        q: 'Green’s theorem is the special case of Stokes’ theorem in which:',
        options: ['$\\mathbf{F}$ is constant', 'The surface is a flat region in the $xy$-plane', 'The boundary is a circle', 'The field is two-dimensional and has no curl'],
        answer: 1,
        explanation: 'On a flat $xy$-region with upward normal, $d\\mathbf{S} = \\mathbf{k}\\,dA$, and $(\\operatorname{curl}\\mathbf{F}) \\cdot \\mathbf{k} = \\partial Q/\\partial x - \\partial P/\\partial y$ — exactly the Green’s theorem integrand.',
      },
      {
        q: 'You must compute $\\iint_S (\\operatorname{curl}\\mathbf{F}) \\cdot d\\mathbf{S}$ over a curved paraboloid cap whose boundary is the unit circle in the $xy$-plane. Stokes allows you to instead:',
        options: ['Integrate $\\mathbf{F}$ over the paraboloid', 'Compute $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ around the circle, or equivalently use the flat unit disk as $S$', 'Replace the integral by $\\iiint \\operatorname{div}\\mathbf{F}\\,dV$', 'Drop the curl operator from the integrand'],
        answer: 1,
        explanation: 'Because all spanning surfaces give the same curl flux, you may swap the cap for the flat disk (same boundary) — or compute the boundary line integral directly. Choose whichever is least work.',
      },
      {
        q: 'If $\\operatorname{curl}\\mathbf{F} = \\mathbf{0}$ everywhere, Stokes’ theorem implies that for every closed curve $C$ bounding a surface inside the field’s domain:',
        options: [`$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = 0$`, `$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$`, 'The field has zero divergence', '$C$ must be a circle'],
        answer: 0,
        explanation: 'Zero curl makes the surface integral vanish, so the circulation vanishes too: $\\mathbf{F}$ is irrotational and (on simply-connected domains) conservative — re-deriving Section 16.3’s equivalence chain.',
      },
    ],
  },

  // ------------------------------------------------------------------ 16.9
  {
    sectionId: 'calc-ch16-s9',
    readingTime: 10,
    intro: 'The divergence theorem closes the chapter by trading the flux of a field through a closed surface for a triple integral of its divergence over the enclosed solid — Gauss’s law in calculus clothing. With it, all five great integration theorems, from the FTC of Chapter 5 to Green, Stokes and this, snap into one master pattern: integrate a derivative over a region and you get an integral over its boundary.',
    objectives: [
      'State the divergence theorem with its outward-orientation convention',
      'Compute flux through closed surfaces by integrating $\\operatorname{div}\\mathbf{F}$ over the volume, including piecewise surfaces',
      'Use the theorem to compute flux through open surfaces by capping them, and to interpret sources and sinks',
      'Organize all five fundamental theorems of this course into the single boundary-of-a-region pattern',
    ],
    concepts: [
      {
        term: 'The divergence theorem',
        kind: 'theorem',
        statement: 'Let $E$ be a simple solid region with closed, outward-oriented boundary surface $S$. If $\\mathbf{F} = P\\,\\mathbf{i} + Q\\,\\mathbf{j} + R\\,\\mathbf{k}$ has continuous partials on an open region containing $E$, then $$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_E \\operatorname{div}\\mathbf{F}\\;dV = \\iiint_E \\left(\\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}\\right) dV.$$',
        detail: 'The proof cuts $E$ into tiny boxes: for each box the net outflow is approximately $\\operatorname{div}\\mathbf{F}$ times its volume (this is literally what divergence measures), interior faces cancel in pairs, and the boundary flux is what remains. All the geometry of the surface cancels — only the divergence accumulated over the volume survives.',
      },
      {
        term: 'Sources, sinks and Gauss’s law',
        kind: 'insight',
        statement: 'The divergence theorem says net outflow through the boundary equals total divergence inside — a positive-divergence region is a **source** (more leaves than enters), a negative-divergence region a **sink**. Gauss’s law makes it physics: $\\iint_S \\mathbf{E} \\cdot d\\mathbf{S} = Q/\\varepsilon_0$, with $\\operatorname{div}\\mathbf{E} = \\rho/\\varepsilon_0$ the charge density.',
        detail: 'For the point-charge field of Section 16.5 — divergence $0$ everywhere except the origin — any sphere around the charge carries flux $Q/\\varepsilon_0$ no matter its radius: the flux just counts the enclosed charge. This is why electric field lines begin only on positive charges and end only on negative ones, and why the divergence theorem is the electrician’s favorite tool (the Art of Electronics’ chapters on fields exploit the same picture).',
      },
      {
        term: 'Working with piecewise and open surfaces',
        kind: 'method',
        statement: 'The boundary of a solid may have several smooth pieces (a capped paraboloid is a curved cap plus a flat disk) — the theorem applies to their **sum** with the outward normal on each. For an open surface $S$, add a cap $S\'$, apply the theorem to the closed surface $S + S\'$, then subtract the (usually easy) flux through $S\'$.',
        detail: 'Strategy summary: flux through a closed surface $\\to$ integrate $\\operatorname{div}\\mathbf{F}$ over the volume; flux through an open surface $\\to$ close it, integrate the volume, subtract the cap. Cylindrical and spherical coordinates from Sections 15.8–15.9 are the natural languages for the volumes of pipes, balls and shells.',
      },
      {
        term: 'A consistency check on the whole chapter',
        kind: 'insight',
        statement: 'Two internal cross-checks: (1) applying the divergence theorem to $\\mathbf{F} = \\operatorname{curl}\\mathbf{G}$ gives $\\iint_S (\\operatorname{curl}\\mathbf{G}) \\cdot d\\mathbf{S} = \\iiint 0\\,dV = 0$ — consistent with Stokes, since any closed surface has an empty boundary; (2) applying it to a flat “pillbox” region recovers the planar flux form of Green’s theorem.',
        detail: 'The first check is the identity $\\operatorname{div}(\\operatorname{curl}\\mathbf{F}) = 0$ in integral clothing: the total curl flux out of a closed surface must vanish because the surface has no boundary curve for circulation to accumulate on. These coherence facts are how physicists remember which theorem applies to which integral.',
      },
      {
        term: 'The five theorems as one FTC',
        kind: 'insight',
        statement: 'Every major theorem of this course is the same statement at different dimensions — integrate a derivative over a region, get values on its boundary: $$\\int_a^b F\'(x)\\,dx = F(b) - F(a)$$ $$\\int_C \\nabla f \\cdot d\\mathbf{r} = f(\\text{endpoints}) - f(\\text{start})$$ $$\\oint_{\\partial D} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_D \\operatorname{curl}\\mathbf{F} \\cdot \\mathbf{k}\\;dA \\ \\ \\text{(Green)}$$ $$\\oint_{\\partial S} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S \\operatorname{curl}\\mathbf{F} \\cdot d\\mathbf{S} \\ \\ \\text{(Stokes)}$$ $$\\iint_{\\partial E} \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_E \\operatorname{div}\\mathbf{F}\\;dV \\ \\ \\text{(Divergence)}$$',
        detail: 'In each line the left side lives on a boundary (two points, a curve’s endpoints, a region’s rim, a surface’s rim, a solid’s skin) and the right side integrates a derivative over the region inside: $F\'$ is a one-dimensional derivative, $\\nabla f$ a gradient, $\\operatorname{curl}$ a two-dimensional derivative, $\\operatorname{div}$ a three-dimensional one. Mathematicians compress all five into $\\int_{\\partial \\Omega} \\omega = \\int_{\\Omega} d\\omega$, the generalized Stokes theorem of differential forms — the single idea this entire course has been approaching.',
      },
      {
        term: 'Choosing your weapon',
        kind: 'method',
        statement: 'Decision guide for closed-boundary problems: line integral around a plane curve $\\to$ Green; circulation around a space curve $\\to$ Stokes (with the flattest spanning surface); flux through a closed surface $\\to$ divergence theorem; flux through an open curved surface $\\to$ cap it and use the divergence theorem; and always check orientation conventions before writing the first integral.',
        detail: 'When $\\operatorname{div}\\mathbf{F}$ is constant, the volume integral is just (constant $\\times$ volume of the solid), and tables of volume formulas — balls, boxes, cones, paraboloid caps in cylindrical coordinates — finish the problem. When $\\operatorname{curl}\\mathbf{F} = \\mathbf{0}$ or $\\operatorname{div}\\mathbf{F} = 0$, look for the corresponding integral to vanish before computing anything.',
      },
    ],
    examples: [
      {
        title: 'Flux through a sphere two ways',
        problem: 'Compute the flux of $\\mathbf{F} = x\\,\\mathbf{i} + y\\,\\mathbf{j} + z\\,\\mathbf{k}$ out of the sphere $x^{2} + y^{2} + z^{2} = a^{2}$, both directly and by the divergence theorem.',
        steps: [
          { label: 'Step 1: Direct method — dot with the normal', text: 'The outward unit normal is $\\mathbf{n} = \\langle x, y, z \\rangle / a$. Since $\\mathbf{F}$ is exactly the position vector, $\\mathbf{F} \\cdot \\mathbf{n} = (x^{2} + y^{2} + z^{2})/a = a^{2}/a = a$ — constant over the whole sphere.' },
          { label: 'Step 2: Direct method — finish', text: 'Flux $= \\iint_S a\\,dS = a \\times (\\text{area } 4\\pi a^{2}) = 4\\pi a^{3}$.' },
          { label: 'Step 3: Divergence method — compute div', text: '$\\operatorname{div}\\mathbf{F} = \\partial x/\\partial x + \\partial y/\\partial y + \\partial z/\\partial z = 1 + 1 + 1 = 3$, a constant.' },
          { label: 'Step 4: Divergence method — integrate', text: 'Flux $= \\iiint_E 3\\,dV = 3 \\times (\\text{volume of the ball}) = 3 \\cdot \\tfrac{4}{3}\\pi a^{3} = 4\\pi a^{3}$.' },
          { label: 'Step 5: Interpret', text: 'The two methods agree: $4\\pi a^{3}$. The divergence method needed only “constant $3$ times the ball volume” — no normal vectors at all. This is the prototype computation behind Gauss’s law in electrostatics, where $\\mathbf{F} = q\\mathbf{r}/(4\\pi\\varepsilon_0 r^{3})$ yields flux $q/\\varepsilon_0$ through every sphere around the charge.' },
        ],
        result: 'Flux $= 4\\pi a^{3}$, verified by both the direct constant-integrand trick and the divergence theorem’s constant-times-volume computation.',
      },
      {
        title: 'A capped paraboloid, tying the chapter together',
        problem: 'Find the flux of $\\mathbf{F} = y\\,\\mathbf{i} + x\\,\\mathbf{j} + z\\,\\mathbf{k}$ out of the solid $E$ bounded below by the plane $z = 0$ and above by the paraboloid $z = 4 - x^{2} - y^{2}$.',
        steps: [
          { label: 'Step 1: Close the picture', text: 'The boundary of $E$ has two pieces: the curved cap $z = 4 - x^{2} - y^{2}$ (outward = upward) and the base disk $z = 0$, $x^{2} + y^{2} \\le 4$ (outward = downward). The divergence theorem handles their sum at once.' },
          { label: 'Step 2: Compute the divergence', text: '$\\operatorname{div}\\mathbf{F} = \\partial(y)/\\partial x + \\partial(x)/\\partial y + \\partial(z)/\\partial z = 0 + 0 + 1 = 1$.' },
          { label: 'Step 3: Integrate over the volume', text: 'Flux $= \\iiint_E 1\\,dV = \\operatorname{volume}(E)$. In cylindrical coordinates: $V = \\int_0^{2\\pi}\\!\\int_0^{2}\\!\\int_0^{4 - r^{2}} r\\,dz\\,dr\\,d\\theta = 2\\pi\\int_0^{2} r(4 - r^{2})\\,dr = 2\\pi\\left[2r^{2} - \\tfrac{r^{4}}{4}\\right]_0^{2} = 8\\pi$.' },
          { label: 'Step 4: Cross-check the pieces', text: 'Section 16.7 computed the upward flux through the paraboloid cap alone: $8\\pi$. The base disk with downward normal $-\\mathbf{k}$ contributes $\\iint \\mathbf{F} \\cdot (-\\mathbf{k})\\,dA = \\iint (-z)\\,dA = 0$ since $z = 0$ on the disk. Total: $8\\pi + 0 = 8\\pi$ — the divergence theorem’s answer, re-derived piecewise.' },
          { label: 'Step 5: The moral', text: 'The $z$-component of $\\mathbf{F}$ acts as a uniform source of strength $1$ per unit volume, and the flux counts the total volume: for this field, “net outflow equals volume” is literally the punchline of the divergence theorem.' },
        ],
        result: 'Flux $= 8\\pi$, computed by one triple integral and confirmed by the 16.7 cap flux $8\\pi$ plus the zero base contribution.',
      },
    ],
    keyTakeaways: [
      'Divergence theorem: $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_E \\operatorname{div}\\mathbf{F}\\,dV$ for closed surfaces with outward orientation.',
      'Net outflow through the boundary equals total divergence inside — sources in, sinks out; Gauss’s law $\\iint \\mathbf{E} \\cdot d\\mathbf{S} = Q/\\varepsilon_0$ is the physics version.',
      'For open surfaces, cap them, apply the theorem, and subtract the cap flux; for piecewise boundaries, add the pieces with outward normals.',
      'When $\\operatorname{div}\\mathbf{F}$ is constant, the flux is constant $\\times$ volume — e.g. $\\langle x, y, z \\rangle$ gives $3V = 4\\pi a^{3}$ for a ball.',
      'Applying the theorem to $\\operatorname{curl}\\mathbf{F}$ gives zero flux through any closed surface, matching the empty-boundary logic of Stokes.',
      'FTC, FTC for line integrals, Green, Stokes and the divergence theorem are one theorem in rising dimension: integrate a derivative over a region, get the boundary integral.',
    ],
    quiz: [
      {
        q: 'The divergence theorem converts the flux $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$ through a closed surface $S$ into:',
        options: [`$\\iiint_E \\operatorname{curl}\\mathbf{F}\\,dV$`, `$\\iiint_E \\operatorname{div}\\mathbf{F}\\,dV$`, '$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ around a boundary curve', `$\\iint_S f\\,dS$ for a potential $f$`],
        answer: 1,
        explanation: 'Flux through the boundary becomes the volume integral of the divergence — the divergence is precisely flux density (outflow per unit volume). Stokes, not Gauss, is the theorem that produces curl.',
      },
      {
        q: 'In the divergence theorem, the boundary surface must be oriented:',
        options: ['Upward', 'Counterclockwise', 'Outward, away from the enclosed solid', 'Along the direction of $\\mathbf{F}$'],
        answer: 2,
        explanation: 'The closed boundary takes the outward normal by convention, so the theorem computes NET OUTFLOW. An inward orientation would flip the sign of the entire integral.',
      },
      {
        q: 'The flux of $\\mathbf{F} = \\langle x, y, z \\rangle$ out of the ball of radius $3$ is:',
        options: [`$36\\pi$`, `$108\\pi$`, `$\\tfrac{27\\pi}{4}$`, `$27\\pi$`],
        answer: 1,
        explanation: '$\\operatorname{div}\\mathbf{F} = 3$ everywhere, so flux $= 3 \\times \\tfrac{4}{3}\\pi(3^{3}) = 108\\pi$. Equivalently, on the sphere $\\mathbf{F} \\cdot \\mathbf{n} = 3$ and $3 \\times 4\\pi(3^{2}) = 108\\pi$.',
      },
      {
        q: 'You need the flux of $\\mathbf{F}$ through an open paraboloid cap. The divergence-theorem strategy is:',
        options: ['Apply the theorem directly to the cap', 'Close the cap with a flat disk, apply the theorem to the solid, then subtract the disk’s flux', 'Multiply the cap’s surface area by $\\operatorname{div}\\mathbf{F}$ at one point', 'Use Stokes’ theorem instead, since the cap is not closed'],
        answer: 1,
        explanation: 'The theorem needs a closed surface. Cap the opening (choosing a cap whose flux is easy — often $0$), apply the divergence theorem to the enclosed solid, and subtract what the cap contributed.',
      },
      {
        q: 'Which pairing correctly matches “dimension of the derivative” with the theorem?',
        options: ['Gradient $\\to$ divergence theorem', 'Curl $\\to$ Stokes’ theorem; divergence $\\to$ divergence theorem; plain derivative $\\to$ FTC', 'Divergence $\\to$ Green’s theorem only', 'Curl $\\to$ divergence theorem'],
        answer: 1,
        explanation: 'FTC integrates $F\'$ over an interval; the line-integral FTC integrates $\\nabla f$ over a curve; Stokes integrates $\\operatorname{curl}$ over a surface; the divergence theorem integrates $\\operatorname{div}$ over a solid — one pattern in dimensions one through three, always boundary versus region.',
      },
      {
        q: 'A vector field has $\\operatorname{div}\\mathbf{F} = 0$ everywhere inside and on a closed surface $S$. The divergence theorem gives $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = 0$. Physically:',
        options: ['The field does not exist inside $S$', 'Whatever flows in must flow out — the field is source-free (incompressible) inside $S$', 'The field must be constant on $S$', '$\\mathbf{F}$ is perpendicular to $S$ everywhere'],
        answer: 1,
        explanation: 'Zero divergence means no sources or sinks: the field is incompressible, so all inflow balances all outflow across the boundary. Magnetic fields satisfy this identically ($\\nabla \\cdot \\mathbf{B} = 0$) — there are no magnetic monopoles.',
      },
      // PYQ-pattern: JEE Advanced 2021 — flux via divergence theorem (rephrased, values changed)
      {
        q: 'Let $\\mathbf{F}(x, y, z) = \\langle x, y, z \\rangle$. The outward flux through the unit sphere $x^{2} + y^{2} + z^{2} = 1$ equals:',
        options: [`$4\\pi$`, `$0$`, `$\\frac{4\\pi}{3}$`, `$12\\pi$`],
        answer: 0,
        explanation: 'Step 1: Restate flux as $\\iint_{S}\\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_{D}\\operatorname{div}\\mathbf{F}\\,dV$ via the divergence theorem. Step 2: Recall the key computation $\\operatorname{div}\\mathbf{F} = 1 + 1 + 1 = 3$. Step 3: Reduce the triple integral to $3 \\times \\text{Volume}(D)$. Step 4: Insert $\\text{Volume} = \\frac{4\\pi}{3}$ for the unit ball to get $3 \\times \\frac{4\\pi}{3} = 4\\pi$. Step 5: The distractors fail since $0$ needs zero divergence, $\\frac{4\\pi}{3}$ forgets the factor $3$, and $12\\pi$ uses the surface area $4\\pi$ instead of the volume $4\\pi/3$. Step 6: Hence the outward flux is $4\\pi$.'
      },
    ],
  },
]
