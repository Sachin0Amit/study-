import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X63 pass (2026-10-26): CENGAGE-20261026-1 — Mathematics Master     */
/*  Library enriched at Cengage depth, per the user's directive to     */
/*  search the Cengage book lists, download what is legitimately       */
/*  available, and use the content (theory + questions with           */
/*  solutions) with ZERO repetition.                                  */
/*                                                                     */
/*  SOURCING PATH (all legitimate):                                    */
/*  - The OFFICIAL Cengage India catalog (cengage.co.in, Test Prep →   */
/*    JEE (Advanced)) was browsed and the complete 17-volume series    */
/*    recorded: Physics B. M. Sharma (6 vols), Mathematics G. Tewani   */
/*    (5 vols), Chemistry K. S. Verma (6 vols) — full list persisted  */
/*    in coverage/popular-book-lists.md.                               */
/*  - The publisher's own book-information PDFs for all five Tewani    */
/*    volumes were downloaded from cengage.co.in (book-pdf endpoint,   */
/*    ~195KB each, legitimate publisher releases) and read: they give  */
/*    the official TOCs and the series pedagogy (Theory → Solved      */
/*    Illustrations → Concept Application Exercises → Advanced Solved */
/*    Problems → graded exercises with full Solutions → DPP booklet). */
/*  - Full commercial volumes have NO legal free PDF: GitHub repo      */
/*    search returned 0 results for the series; every filetype:pdf    */
/*    full-copy hit is a pirated scan and was REFUSED per policy.      */
/*    Fallback to genuinely popular full-text equivalents, both       */
/*    public-domain classics on archive.org, both downloaded and read  */
/*    in scope this run:                                               */
/*    · Joseph Edwards, "A Treatise on the Integral Calculus, vol. I"  */
/*      (Macmillan 1921; archive.org treatiseonintegr01edwauoft) —    */
/*      Chapter IX "General Theorems on Integration" arts 321–336     */
/*      (dummy variable, concatenation, sign swap, the reflection     */
/*      property ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a−x)dx with its geometric proof,  */
/*      the 2a symmetry propositions, the periodic-function theorem   */
/*      ∫₀^{na} = n∫₀ᵃ, the first mean value theorem) and Chapter X   */
/*      "Differentiation of a Definite Integral with regard to a      */
/*      Parameter" arts 354–355 (the Leibniz rule with variable       */
/*      limits and its geometric meaning) — read in full.             */
/*    · Charles Smith, "An Elementary Treatise on Solid Geometry"      */
/*      (Macmillan; archive.org elementarytreati00smituoft) — the     */
/*      quadric-surface theory grounding the sphere lesson: the       */
/*      general second-degree surface, tangent plane at a point of    */
/*      a central conicoid, tangency condition for a plane, plane     */
/*      sections of a quadric, centres of plane sections, diametral   */
/*      planes — read in scope.                                       */
/*                                                                     */
/*  THREE CONFIRMED GAPS (grep-verified 0 live hits in fields/ +      */
/*  content/ before writing), each filled as one lesson below with    */
/*  4-question quiz incl. explanations:                               */
/*  1. math-sphere-three-dimensions — the sphere as a quadric:        */
/*     centre-radius and general equations, great/small circles,      */
/*     tangent plane xx₁+yy₁+zz₁=a², tangency condition, tangent      */
/*     length, two-sphere intersection. 'sphere' had ZERO hits in     */
/*     maths content (only Earth-geometry and atmosphere uses).       */
/*     Carved against math-earth-geometry (OWNS the geographic        */
/*     sphere: latitude/longitude/great-circle navigation — one-line  */
/*     deference) and the line/plane 3D sections (own lines, planes,  */
/*     skew lines; this lesson owns the one quadric surface the      */
/*     syllabus names).                                              */
/*  2. calc-definite-integral-properties — Edwards' General           */
/*     Propositions (the reflection "King" property, 2a symmetry,     */
/*     periodicity, mean value) + the Leibniz rule. 'King's rule'/    */
/*     'Leibniz rule' had ZERO hits in knowledge fields. Carved       */
/*     against calc-ch5 'Integrals' (OWNS the definite integral's     */
/*     definition, FTC, substitution, odd/even symmetry basics —      */
/*     one-line deference) and calc-ch7 (OWNS the indefinite          */
/*     techniques); this lesson owns the PROPERTIES that make hard    */
/*     definite integrals tractable.                                  */
/*  3. math-modulus-logarithm-inequalities — the Cengage Algebra      */
/*     signature chapter "Inequalities, Modulus and Logarithm":       */
/*     modulus as distance, |x−a|+|x−b| bands, case-splitting, base-  */
/*     aware logarithm inequalities, domain-first discipline.         */
/*     'modulus inequality'/'logarithmic inequality' had ZERO live    */
/*     hits. Carved against math-sk2 (OWNS SAT-level nonlinear        */
/*     equations incl. basic absolute-value equations),               */
/*     advmath-ch16 'Classical Inequalities' (OWNS AM-GM/Cauchy      */
/*     theory) and calc-ch1's log lesson (OWNS the log laws); this   */
/*     lesson owns the inequality-solving craft on |·| and logs.      */
/*                                                                     */
/*  All three verified word-count honest via count-topic-words-      */
/*  exact; PDFs deleted after full coverage.                          */
/* ------------------------------------------------------------------ */

export const x63CengagePassTopics: KnowledgeTopic[] = [
  /* --------------------------------------------------------------- */
  {
    id: 'math-sphere-three-dimensions',
    title: 'The Sphere in Three-Dimensional Coordinate Geometry',
    domain: 'Mathematics',
    field: 'Geometry & Measurement',
    branch: 'Solid Geometry',
    tier: 'advanced',
    concepts: [
      'The sphere as the simplest quadric surface',
      'Centre-radius equation and the general form',
      'Completing the square in three variables',
      'Plane sections: great circles and small circles',
      'The tangent plane formula xx₁ + yy₁ + zz₁ = a²',
      'Tangency condition: distance from centre equals radius',
      'Tangent length and the power of an external point',
      'Intersection of two spheres is a circle in a plane',
    ],
    words: 2047,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'A plane is ruled by first-degree equations; the moment geometry moves into space and allows a second degree, the first surface worth mastering is the sphere — the set of all points at a fixed distance r (the radius) from a fixed point C (the centre). Charles Smith\u2019s classic treatise on solid geometry classifies it as the simplest of the central conicoids, and everything about it follows from that symmetry: every direction through the centre behaves identically, every plane slice is a circle, and tangency reduces to one perpendicularity. This lesson builds the full coordinate toolkit for the sphere — its equations, its sections, its tangent planes and the way two spheres meet — at the depth the most demanding engineering-entrance syllabi demand.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Spheres model planets, tanks, bubbles, atomic shells and satellite orbits; the tangent-plane condition is the mathematics of contact angles and of line-of-sight horizons; and the two-sphere intersection is the geometry behind trilateration — the way GPS receivers and underground surveys locate a point from distances alone.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'With centre C = (u, v, w) and radius r, the distance formula turns the definition directly into the centre-radius equation: the point P = (x, y, z) lies on the sphere exactly when its distance from C equals r, that is when (x − u)² + (y − v)² + (z − w)² = r². Squaring out and collecting terms gives the general form x² + y² + z² + 2gx + 2fy + 2hz + c = 0, where the centre reads off as (−g, −f, −h) and the radius satisfies r² = g² + f² + h² − c. The surface is a real sphere only when that quantity is positive; if it is zero the equation is a single point, and if negative there is no real point at all — the algebra survives even when the geometry does not, a fact examiners exploit relentlessly.',
      },
      {
        kind: 'formula',
        name: 'General equation of a sphere',
        latex: 'x^2 + y^2 + z^2 + 2gx + 2fy + 2hz + c = 0',
        meaning: 'Centre (−g, −f, −h); radius r with r² = g² + f² + h² − c. Recover it by completing the square in all three variables.',
      },
      {
        kind: 'para',
        text: 'Because a sphere is a quadric — its equation is of the second degree — Smith\u2019s general theory of second-degree surfaces applies. His first structural result is that every plane section of a quadric is a conic; for the sphere, where all directions are equivalent, that conic is always a circle. Slice the sphere x² + y² + z² = a² with the plane z = k. Substituting gives x² + y² = a² − k², a circle of radius √(a² − k²) centred on the axis. Two regimes matter: when the plane passes through the centre (k = 0) the slice is a great circle of maximum radius a — the circle the Earth-geometry lesson uses for navigation — and any other plane cuts a small circle whose radius shrinks as the plane retreates, collapsing to a point when |k| = a: the tangent case.',
      },
      {
        kind: 'para',
        text: 'Tangency deserves the full treatment. For the sphere x² + y² + z² = a² centred at the origin and a point T = (x₁, y₁, z₁) on it, Smith\u2019s tangent-plane construction for a central conicoid specialises beautifully: the tangent plane is x x₁ + y y₁ + z z₁ = a². The geometry explains the algebra — the radius vector OT = (x₁, y₁, z₁) is normal to this plane, because the plane\u2019s coefficients are exactly the coordinates of T, and a sphere\u2019s radius always meets its tangent plane at right angles. Checking: T itself satisfies the plane equation since x₁² + y₁² + z₁² = a², and the perpendicular distance from the origin to the plane is a²/√(x₁² + y₁² + z₁²) = a²/a = a — exactly the radius, as tangency demands.',
      },
      {
        kind: 'formula',
        name: 'Tangent plane and tangent length',
        latex: 'xx_1 + yy_1 + zz_1 = a^2 \\qquad\\text{and}\\qquad L = \\sqrt{S_1}',
        meaning: 'Left: tangent plane at (x₁, y₁, z₁) on x² + y² + z² = a². Right: the length L of the tangent from an external point P, where S₁ is what the sphere\u2019s left-hand side takes at P (the power of the point).',
      },
      {
        kind: 'para',
        text: 'The tangency condition for an arbitrary plane lx + my + nz = p and a sphere of centre C and radius r is the single sentence: the perpendicular distance from C to the plane equals r. Conversely, a line is tangent to the sphere when the perpendicular distance from the centre to the line equals the radius. For an external point P at distance d from the centre, the two tangent segments from P to the sphere have equal length √(d² − r²) — the right triangle formed by the centre, P and any point of tangency is the whole proof, and the quantity d² − r² is the sphere\u2019s power of the point, the three-dimensional sibling of the circle\u2019s tangent-secant theorem.',
      },
      {
        kind: 'para',
        text: 'Finally, how do two spheres meet? Subtract their general equations: the quadratic terms x² + y² + z² cancel identically, leaving a first-degree equation — a plane. All points common to both spheres therefore lie in this plane, and since each sphere cuts the plane in a circle, the intersection of two spheres is a circle lying in the plane obtained by subtracting the equations (empty or a single point in the degenerate limiting cases). That plane is called the radical plane, and the same subtraction trick shows a family of spheres through a common circle — write S + λS\u2032 = 0 for the sphere through the intersection of spheres S = 0 and S\u2032 = 0, the exact analogue of the family of circles through two points.',
      },
      { kind: 'heading', text: 'Worked Examples' },
      {
        kind: 'example',
        title: 'Worked Example — reading a general equation and testing a tangent plane',
        steps: [
          'Given x² + y² + z² − 4x + 2y − 6z + 5 = 0, complete the square in each variable: (x − 2)² + (y + 1)² + (z − 3)² = −5 + 4 + 1 + 9 = 9.',
          'Read off the geometry: centre C = (2, −1, 3) and radius r = 3.',
          'Now test the plane 2x − 2y + z = 12 for tangency. The perpendicular distance from C to the plane is |2(2) − 2(−1) + 3 − 12| / √(4 + 4 + 1) = |4 + 2 + 3 − 12| / 3 = 3/3 = 1.',
          'Compare with the radius: 1 < 3, so the plane cuts the sphere in a small circle — it is NOT tangent. For tangency the distance would have to equal 3 exactly.',
          'For contrast take the plane x + 2y + 2z = 21: distance from C is |2 + (−2) + 6 − 21|/3 = 15/3 = 5 ≠ 3, also a cutting plane; while a plane like x − y + 3z = 11 gives distance |2 + 1 + 9 − 11|/√11 = 1/√11, again interior. The test is always one distance computation against r.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example — tangent length and a two-sphere intersection',
        steps: [
          'Tangent length: from P = (6, 8, 0) to the sphere x² + y² + z² = 25 (centre O, radius 5). First confirm P is outside: OP² = 36 + 64 + 0 = 100 > 25.',
          'The power of P is S₁ = 100 − 25 = 75, so each tangent segment from P has length L = √75 = 5√3 — and both tangents from P share it, by the symmetry of the right triangle O–P–T.',
          'Intersection: take S = x² + y² + z² − 9 = 0 and S\u2032 = x² + y² + z² − 4x + 2y − 2z + 1 = 0. Subtracting, the quadratic terms cancel: −4x + 2y − 2z + 1 + 9 = 0, i.e. 2x − y + z = 5.',
          'Every common point lies in the plane 2x − y + z = 5, and each sphere cuts that plane in a circle — so the two spheres intersect in the circle lying in this plane.',
          'Every sphere through the same circle belongs to the family S + λS\u2032 = 0 — infinitely many spheres sharing one circle, the spatial twin of the coaxial circle family.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Trilateration and GPS: each satellite distance defines a sphere around the receiver; intersecting three spheres narrows position to two points, and a fourth resolves time — the two-sphere circle is the working geometry',
          'Horizon distance: for a viewer at height h above a sphere of radius R, the horizon sits at distance √((R+h)² − R²) ≈ √(2Rh) — the tangent-length formula in navigation disguise',
          'Computer graphics and CAD: spheres are the primitive of collision detection, and the plane-tangency distance test is the cheapest exact collision check in the toolbox',
          'Crystallography and chemistry: packing of equal spheres, the contact geometry of atoms in a lattice, and ionic radii are all tangent-sphere problems',
          'Geodesy: the great-circle/small-circle distinction is the rigorous core of longitude, flight paths and time zones — deferred to the Earth-geometry lesson for the navigational detail',
        ],
      },
      { kind: 'heading', text: 'Pitfalls and Exam Traps' },
      {
        kind: 'list',
        items: [
          'Forgetting that r² = g² + f² + h² − c can be negative: always state the reality condition before answering anything about the surface',
          'Using the tangent-plane formula xx₁ + yy₁ + zz₁ = a² when the sphere is NOT centred at the origin — shift the centre first, or the formula silently gives a wrong plane',
          'Confusing a small circle with a great circle: only centre-passing sections have the full radius a',
          'Testing a plane against the wrong centre — read the centre from the completed-square form, not from the raw coefficients, which carry the factor 2',
          'Assuming two spheres always intersect in a circle: they can also touch at one point or miss entirely; the radical plane still exists but is empty of real common points',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'Great circle', def: 'A plane section through the sphere\u2019s centre; the largest circle on the surface, radius equal to the sphere\u2019s.' },
          { term: 'Small circle', def: 'Any other plane section; radius √(a² − k²) where k is the plane\u2019s distance from the centre.' },
          { term: 'Tangent plane', def: 'The unique plane meeting the sphere at exactly one point; its normal is the radius to that point.' },
          { term: 'Power of a point', def: 'S₁ = d² − r², the squared tangent length from an external point at distance d from the centre.' },
          { term: 'Radical plane', def: 'The plane containing the common circle of two spheres, obtained by subtracting their equations.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The equation x² + y² + z² − 6x + 8y + 2z − 10 = 0 represents a sphere with centre and radius:',
            options: [
              'centre (6, −8, −2), radius 10',
              'centre (−3, 4, 1), radius 6',
              'centre (3, −4, −1), radius 6',
              'centre (3, −4, −1), radius 36',
            ],
            answer: 2,
            explain: 'Completing squares: (x−3)² + (y+4)² + (z+1)² = 10 + 9 + 16 + 1 = 36 = 6². Centre (3, −4, −1), radius 6 — the centre coordinates flip the signs of the half-coefficients, and the radius is the square root.',
          },
          {
            q: 'The tangent plane to x² + y² + z² = 9 at the point (1, 2, 2) is:',
            options: [
              'x + 2y + 2z = 9',
              'x + 2y + 2z = 3',
              '2x + y + 2z = 9',
              'x + y + z = 9',
            ],
            answer: 0,
            explain: 'The formula xx₁ + yy₁ + zz₁ = a² gives x + 2y + 2z = 9. Sanity checks: (1,2,2) lies on the sphere (1+4+4=9) and satisfies the plane (1+4+4=9); the plane\u2019s normal (1,2,2) is exactly the radius vector.',
          },
          {
            q: 'The plane 2x − 2y + z = 9 is tangent to the sphere x² + y² + z² = r². Then r equals:',
            options: [
              '9',
              '3',
              '1',
              '4.5',
            ],
            answer: 1,
            explain: 'Tangency means the distance from the centre (origin) to the plane equals r: |−9|/√(4+4+1) = 9/3 = 3. Always compute the normalising square root — it is where wrong options come from.',
          },
          {
            q: 'Two spheres S = 0 and S\u2032 = 0 intersect. Subtracting their equations produces a plane because:',
            options: [
              'the spheres have equal radii',
              'the second-degree terms x² + y² + z² cancel identically',
              'every plane cuts a sphere in a circle',
              'the centres coincide',
            ],
            answer: 1,
            explain: 'Both equations carry the same leading terms x² + y² + z² with unit coefficients, so subtraction kills all quadratic terms and leaves a linear equation — the radical plane containing the common circle.',
          },
        ],
      },
    ],
  },

  /* --------------------------------------------------------------- */
  {
    id: 'calc-definite-integral-properties',
    title: 'Properties of Definite Integrals: Reflection, Periodicity and the Leibniz Rule',
    domain: 'Mathematics',
    field: 'Calculus',
    branch: 'Integral Calculus',
    tier: 'advanced',
    concepts: [
      'The definite integral as independent of its dummy variable',
      'Sign swap on exchanging limits; concatenation of intervals',
      'The reflection property ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a − x)dx',
      'Symmetry about the mid-ordinate on [0, 2a]',
      'Periodic functions: ∫₀^{nT} f = n ∫₀^T f',
      'The workhorse ∫₀^{π/2} f(sin, cos) symmetry',
      'First mean value theorem for integrals',
      'Leibniz rule: differentiating an integral with variable limits',
    ],
    words: 2050,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'Computing a definite integral from an antiderivative is only half the craft; the other half — the half that cracks the integrals no substitution will ever simplify — is a short list of structural properties that let you compare, fold and reflect integrals before computing anything. Joseph Edwards\u2019 classic treatise on the integral calculus opens its chapter of general theorems by saying these are propositions "many of which are almost self-evident from the definition of integration or from geometrical considerations… but which require to be definitely stated." Modern coaching culture has nicknamed the most powerful of them the King property; Edwards proves it as his Proposition IV, with a two-line substitution and a picture. This lesson states the full family, proves each one honestly, and then runs them on the classic integrals they were born to solve.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'These properties convert impossible integrals into arithmetic: they are the reason ∫₀^{π/2} sinⁿx/(sinⁿx + cosⁿx) dx can be evaluated without ever antidifferentiating, the reason periodic signals integrate over whole periods by multiplying one period, and — through the Leibniz rule — the foundation of how engineers differentiate accumulated quantities whose limits themselves move.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Foundational Properties' },
      {
        kind: 'para',
        text: 'Three properties are nearly free. The dummy-variable property: ∫ₐᵇ φ(x)dx = ∫ₐᵇ φ(z)dz — the letter of integration is a bookkeeping device; both sides equal Ψ(b) − Ψ(a) for any antiderivative Ψ. The sign-swap property: reversing the limits multiplies the integral by −1, ∫ₐᵇ = −∫ᵇₐ, again because Ψ(b) − Ψ(a) flips sign. And concatenation: for any intermediate c, ∫ₐᵇ φ = ∫ₐᶜ φ + ∫ᶜᵇ φ — geometrically, the area under the curve adds up piece by piece. Edwards draws the picture for areas and the proofs are one line each, but every later property leans on these three.',
      },
      {
        kind: 'para',
        text: 'Now the first star. Proposition IV — the reflection property: for any integrable f, ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a − x)dx. The proof is a model of substitution craft: set x = a − X, so dx = −dX and the limits swap (x = 0 gives X = a, x = a gives X = 0); then ∫₀ᵃ f(x)dx = −∫ₐ⁰ f(a − X)dX = ∫₀ᵃ f(a − X)dX by the sign-swap property, and the dummy-variable property renames X back to x. Geometrically, as Edwards puts it, you may take the origin at the far end and add up the area from right to left instead of left to right — it cannot affect the total. The property looks almost too innocent to matter; the worked examples below show it demolishing integrals that resist every direct attack.',
      },
      {
        kind: 'formula',
        name: 'The reflection (King) property and its 2a companion',
        latex: '\\int_0^a f(x)\\,dx = \\int_0^a f(a-x)\\,dx \\qquad\\qquad \\int_0^{2a} f(x)\\,dx = \\int_0^a f(x)\\,dx + \\int_0^a f(2a-x)\\,dx',
        meaning: 'Left: a definite integral equals its own mirror image about the midpoint a/2. Right: the integral over [0, 2a] folds onto [0, a] — so if f(2a − x) = f(x) the integral doubles to 2∫₀ᵃ, and if f(2a − x) = −f(x) it vanishes.',
      },
      {
        kind: 'para',
        text: 'The 2a symmetry propositions follow by splitting [0, 2a] at a and reflecting the second half by the same substitution. Two corollaries do enormous work. If f(2a − x) = f(x) — symmetry about the mid-ordinate, like sin²x on [0, π] — then ∫₀²ᵃ f = 2∫₀ᵃ f. If f(2a − x) = −f(x) — antisymmetry about the midpoint, like cos³x on [0, π] — the integral is exactly zero: the two halves cancel algebraically. Edwards notes this is "very useful in the integrals of the trigonometric or of any periodic functions": since sinⁿ(π − x) = sinⁿx, we get ∫₀^π sinⁿx dx = 2∫₀^{π/2} sinⁿx dx, while cos^{2n+1}(π − x) = −cos^{2n+1}x forces ∫₀^π cos^{2n+1}x dx = 0. Over a full period both symmetries combine: ∫₀^{2π} sin^{2n}x dx = 4∫₀^{π/2} sin^{2n}x dx, and the odd cosine powers vanish outright.',
      },
      {
        kind: 'para',
        text: 'The periodic property deserves its own statement: if f has period T (meaning f(x + T) = f(x) for all x), then ∫₀^{nT} f(x)dx = n ∫₀^T f(x)dx. The graph is the same curve repeated n times, so the areas over successive periods are equal — Edwards\u2019 picture shows the copies stacked along the axis. One subtlety worth flagging: the periodic property does NOT say an integral over an arbitrary window of length T is period-independent; it counts whole periods from a fixed origin. And a companion fact for the trigonometric workhorse: on [0, π/2] the substitution x → π/2 − x swaps sine and cosine, so ∫₀^{π/2} f(sin x, cos x)dx = ∫₀^{π/2} f(cos x, sin x)dx — the reason sinⁿ and cosⁿ share the same integral over the first quadrant, ∫₀^{π/2} sinⁿx dx = ∫₀^{π/2} cosⁿx dx, for every n.',
      },
      {
        kind: 'para',
        text: 'One comparison result completes the family. The first mean value theorem for integrals: if φ is continuous and ψ keeps one sign on [a, b], then ∫ₐᵇ φ(x)ψ(x)dx = φ(ξ)∫ₐᵇ ψ(x)dx for some ξ between a and b — informally, a weighted average of φ is attained somewhere inside. With ψ = 1 this says the integral equals (b − a) times some intermediate value of the function: the average height is actually achieved. Edwards derives it by squeezing the integral between the maximum and minimum values scaled by ∫ψ, then invoking continuity to land exactly on some intermediate value.',
      },
      { kind: 'heading', text: 'The Leibniz Rule' },
      {
        kind: 'para',
        text: 'Edwards\u2019 next chapter changes the question: instead of evaluating integrals, differentiate them. Let u = ∫_{a(c)}^{b(c)} φ(x, c)dx, where the integrand carries a parameter c and the limits themselves move with c. Then the Leibniz rule states du/dc = φ(b, c)·db/dc − φ(a, c)·da/dc + ∫_{a}^{b} ∂φ/∂c dx. Read it as three contributions: the top limit slides and contributes the new area swept in at the top, the bottom limit slides and subtracts the area swept out at the bottom, and the integrand itself thickens or thins everywhere in between. Edwards proves it by expanding u(c + δc) − u(c), using the mean value theorem on the two limit terms (each strip contributes its height times its width δb or δa) and on the interior change, then letting δc vanish; his geometric picture is exactly the area-sweping interpretation. The rule is how accumulation functions with moving boundaries are differentiated — and, read in reverse with a cleverly chosen parameter, it evaluates whole families of integrals by solving a differential equation in c.',
      },
      {
        kind: 'formula',
        name: 'Leibniz rule for variable limits and a parameter',
        latex: '\\frac{d}{dc}\\int_{a(c)}^{b(c)} \\varphi(x, c)\\,dx \\;=\\; \\varphi(b, c)\\,\\frac{db}{dc} \\;-\\; \\varphi(a, c)\\,\\frac{da}{dc} \\;+\\; \\int_{a(c)}^{b(c)} \\frac{\\partial \\varphi}{\\partial c}\\,dx',
        meaning: 'The derivative of a moving-window integral: top-edge contribution minus bottom-edge contribution plus the interior thickening. With no parameter and constant lower limit this collapses to the Fundamental Theorem of Calculus.',
      },
      { kind: 'heading', text: 'Worked Examples' },
      {
        kind: 'example',
        title: 'Worked Example — the reflection property evaluates an "impossible" integral',
        steps: [
          'Let I = ∫₀^{π/2} sinⁿx / (sinⁿx + cosⁿx) dx for any positive n. No substitution simplifies it — apply reflection with a = π/2: I = ∫₀^{π/2} sinⁿ(π/2 − x) / (sinⁿ(π/2 − x) + cosⁿ(π/2 − x)) dx.',
          'Use sin(π/2 − x) = cos x and cos(π/2 − x) = sin x: I = ∫₀^{π/2} cosⁿx / (cosⁿx + sinⁿx) dx.',
          'Add the two expressions: 2I = ∫₀^{π/2} [sinⁿ/(sinⁿ + cosⁿ) + cosⁿ/(cosⁿ + sinⁿ)] dx = ∫₀^{π/2} 1 dx = π/2, because the numerators sum to exactly the shared denominator.',
          'Hence I = π/4 — independent of n. The integral never needed an antiderivative; reflection plus addition did everything.',
          'The same template powers many classics: replace sinⁿ + cosⁿ by any symmetric combination f(sin, cos) and the folded sum still simplifies.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example — folding [0, π] and differentiating a moving window',
        steps: [
          'Let I = ∫₀^π x sin x / (1 + cos²x) dx. The x-factor blocks every direct attack. Reflect about a = π: I = ∫₀^π (π − x) sin(π − x) / (1 + cos²(π − x)) dx = ∫₀^π (π − x) sin x / (1 + cos²x) dx, since sin(π − x) = sin x and cos²(π − x) = cos²x.',
          'Add the two forms: 2I = ∫₀^π π sin x / (1 + cos²x) dx = π ∫₀^π sin x / (1 + cos²x) dx.',
          'Evaluate the remaining integral by substitution t = cos x, dt = −sin x dx: it becomes ∫ from t = 1 to t = −1 of −dt/(1 + t²) = [arctan t] from −1 to 1 = π/4 − (−π/4) = π/2.',
          'So 2I = π · π/2 = π²/2, giving I = π²/4 — one of the most celebrated applications of the folding idea.',
          'Leibniz companion: let F(x) = ∫ₓ^{2x} (sin t)/t dt. Then F\u2032(x) = (sin 2x)/(2x) · 2 − (sin x)/x · 1 = sin 2x / x − sin x / x. The top edge contributes its height times its sliding speed 2, the bottom edge subtracts its height times speed 1, and there is no parameter term.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Signal processing: the average power of a periodic waveform over whole periods is n times one period\u2019s energy — the periodic property doing the bookkeeping',
          'Probability: expected values of symmetric distributions often need no antiderivative at all — reflection and antisymmetry make half the computation vanish',
          'Physics accumulations: work from a moving boundary, heat entering a growing control volume, and flux through a sliding surface are all Leibniz-rule problems',
          'Numerical analysis: error bounds and quadrature estimates lean on the first mean value theorem to replace an integral by a representative value times a length',
          'Economics: accumulated revenue between two moving dates (price index changing, window shifting) is exactly a variable-limit integral awaiting the Leibniz rule',
        ],
      },
      { kind: 'heading', text: 'Pitfalls and Exam Traps' },
      {
        kind: 'list',
        items: [
          'Applying the reflection property on [0, π/2] with f(2a − x): match the property to the interval — the [0, a] reflection uses a − x, the [0, 2a] fold uses 2a − x',
          'Forgetting that reflection gives a SECOND expression for I, not a value: the power move is adding the two expressions so the integrands combine',
          'Using ∫₀^{nT} = n∫₀^T for windows that are not whole periods from the origin — the periodic property counts complete periods only',
          'Dropping the sign on the lower-limit term of the Leibniz rule — it enters with a minus, and reversing limits silently flips answers',
          'Citing the reflection property for improper integrals without checking convergence first — the substitution is legal only when the integral exists',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'Reflection property', def: '∫₀ᵃ f(x)dx = ∫₀ᵃ f(a − x)dx: the integral equals its mirror about the midpoint; proved by the substitution x = a − X plus sign-swap.' },
          { term: 'Folding property', def: '∫₀²ᵃ f = ∫₀ᵃ [f(x) + f(2a − x)] dx; doubles symmetric integrands and kills antisymmetric ones.' },
          { term: 'Periodic property', def: 'For f with period T: ∫₀^{nT} f = n ∫₀^T f — whole periods multiply.' },
          { term: 'First mean value theorem', def: '∫ₐᵇ φψ = φ(ξ)∫ₐᵇ ψ for some ξ in (a, b) when ψ keeps one sign; with ψ = 1 the integral is a length times an attained average height.' },
          { term: 'Leibniz rule', def: 'The derivative of ∫_{a(c)}^{b(c)} φ(x, c)dx: top-edge term minus bottom-edge term plus the parameter derivative integrated inside.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The value of ∫₀^{π/2} sin⁵x / (sin⁵x + cos⁵x) dx is:',
            options: [
              'π/8',
              'π/4',
              'π/2',
              'it depends on the antiderivative of sin⁵x',
            ],
            answer: 1,
            explain: 'By reflection (x → π/2 − x) the integral equals ∫₀^{π/2} cos⁵/(cos⁵ + sin⁵) dx; adding the two forms gives 2I = ∫₀^{π/2} 1 dx = π/2, so I = π/4 for ANY positive power — no antiderivative required.',
          },
          {
            q: '∫₀^π x sin x / (1 + cos²x) dx equals:',
            options: [
              'π²/4',
              'π²/2',
              'π/4',
              '0, by antisymmetry about π/2',
            ],
            answer: 0,
            explain: 'Reflection about π gives I = ∫₀^π (π − x) sin x/(1 + cos²x) dx; adding, 2I = π∫₀^π sin x/(1 + cos²x) dx = π · π/2 = π²/2, so I = π²/4. Note the integrand is NOT antisymmetric — the x-factor breaks that.',
          },
          {
            q: 'If f has period 2π and ∫₀^{2π} f(x)dx = 6, then ∫₀^{8π} f(x)dx equals:',
            options: [
              '6',
              '12',
              '24',
              '48',
            ],
            answer: 2,
            explain: '8π is exactly 4 full periods, so the periodic property gives 4 × 6 = 24. Counting periods (8π/2π = 4) is the whole task — but only because the window starts at 0 and covers whole periods.',
          },
          {
            q: 'For F(x) = ∫₀^{x²} cos t dt, the derivative F\u2032(x) is:',
            options: [
              'cos(x²)',
              '2x cos(x²)',
              'x² cos(x²)',
              'sin(x²)',
            ],
            answer: 1,
            explain: 'Leibniz rule with top limit b(x) = x²: F\u2032(x) = cos(x²) · 2x − 0 = 2x cos(x²). The chain rule on the moving limit is exactly the top-edge term; forgetting the factor 2x is the classic error.',
          },
        ],
      },
    ],
  },

  /* --------------------------------------------------------------- */
  {
    id: 'math-modulus-logarithm-inequalities',
    title: 'Modulus and Logarithm Inequalities: The Algebra of Distance and of Growth',
    domain: 'Mathematics',
    field: 'Algebra',
    branch: 'Inequalities',
    tier: 'advanced',
    concepts: [
      'Modulus as distance on the number line',
      '|x| < a and |x| > a as interval statements',
      'Sum of distances |x − a| + |x − b| and its band geometry',
      'Case-splitting versus squaring — when each is legal',
      '|f(x)| < g(x) resolved as −g < f < g',
      'Logarithm inequalities: the base decides the direction',
      'Domain first: the logarithm\u2019s argument must stay positive',
      'Exponential inequalities as mirrored logarithm problems',
    ],
    words: 2047,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'Two families of inequalities dominate the algebra portion of every demanding engineering-entrance syllabus and ruin more solutions than any other topic: inequalities carrying modulus signs and inequalities carrying logarithms. They fail for the same underlying reason — both hide a branch decision. The modulus |x| is defined by cases, and the logarithm\u2019s order depends on its base. Solve either family on autopilot — multiply through, square both sides, "take log of both sides" — and the branch decision silently corrupts the answer set. The standard treatment (it heads the algebra volume of the most-used advanced series, as the chapter "Inequalities, Modulus and Logarithm") builds the discipline this lesson teaches: read the modulus as distance, read the logarithm as growth, and let the geometry and the base decide the direction before any algebra begins.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Modulus inequalities describe tolerances and error bands (a machined part within ±0.05 mm of spec, a signal within a corridor); distance-sum forms are literally how facilities and routing problems are posed; logarithm inequalities govern pH thresholds, decibel limits, earthquake magnitudes, compound-interest doubling times and every "how many digits" question in computer science. The branch discipline itself — checking which case you are in — is the same discipline required wherever piecewise functions meet inequalities.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The modulus |x − a| is the distance between x and a on the number line — this single reading generates every rule. |x| < a (with a > 0) says: x is within distance a of 0, i.e. −a < x < a, one open interval. |x| > a says: x is FARTHER than a from 0, i.e. x < −a or x > a — two rays, and the word "or" is what careless solvers drop. The same two patterns apply to |x − a| < b, the points within b of a: the interval (a − b, a + b). Watch the strictness: |x − a| ≤ b closes the endpoints. And if the right side is negative, |anything| < negative has no solution while |anything| > negative is true everywhere — checking the right side\u2019s sign first costs one second and saves whole wrong answers.',
      },
      {
        kind: 'para',
        text: 'The distance reading shines on sums. The expression |x − 2| + |x − 5| is the total walking distance from x to 2 plus from x to 5 — the classic facilities question. Between the two points the sum is constant, exactly the gap 3 (one leg shrinks as the other grows); outside, each step away adds two to the sum. So |x − 2| + |x − 5| ≥ 3 always, with equality exactly on the segment [2, 5] — the triangle inequality materialised on a line. This turns inequality questions into geometry: |x − 2| + |x − 5| < 9 asks where the total distance is under 9, and the answer is a symmetric band around the segment: the distance-budget 9 exceeds the gap by 6, split evenly, giving (2 − 3, 5 + 3) = (−1, 8). No case-splitting needed — though the case method below must give the same answer, and checking both against each other is excellent practice.',
      },
      {
        kind: 'formula',
        name: 'Distance-sum bounds',
        latex: '|x-a| + |x-b| \\;\\ge\\; |a-b| \\quad\\text{(equality exactly on } [a,b]\\text{)}',
        meaning: 'The sum of distances from x to two fixed points is least between them, where it equals the gap; every unit of movement outside the segment adds two units to the sum. Read |x−a| + |x−b| < d as a band when d exceeds the gap, empty when d is smaller.',
      },
      {
        kind: 'para',
        text: 'When geometry does not finish the job, two algebraic engines exist: case-splitting and squaring. Case-splitting is universal: the modulus\u2019s zeros chop the line into intervals, on each of which every modulus opens with a known sign, and the resulting ordinary inequalities are intersected with their own intervals before the pieces union. Squaring is faster but conditional: |f(x)| < g(x) is equivalent to f² < g² (both sides were non-negative), which factorises as (f − g)(f + g) < 0. The cleanest general form worth memorising: for g(x) > 0, the chain |f(x)| < g(x) ⟺ −g(x) < f(x) < g(x), and |f(x)| > g(x) ⟺ f(x) > g(x) or f(x) < −g(x). Never split |f(x)| < g(x) into "f(x) < ±g(x)" without the conjunction discipline — the double inequality is the safe memory.',
      },
      {
        kind: 'para',
        text: 'Logarithm inequalities add the second branch. The logarithm log_b(x) is increasing when b > 1 (each doubling of x adds a fixed amount) and DECREASING when 0 < b < 1 — the base decides the direction, exactly as the modulus\u2019s argument decides the case. So log_b(f(x)) < log_b(g(x)) becomes f(x) < g(x) when b > 1 but f(x) > g(x) when 0 < b < 1, and in both cases the domain f(x) > 0, g(x) > 0 must accompany the comparison. The compound discipline is absolute: DOMAIN FIRST, then the order. The same mirror holds for exponential inequalities: b^{f(x)} > b^{g(x)} means f > g when b > 1 and f < g when 0 < b < 1 — the exponential and logarithm rules are the same fact read in opposite directions, since they are inverse functions.',
      },
      {
        kind: 'para',
        text: 'A final workhorse pattern: inequalities where the logarithm hides behind a disguise. The expression (log x)² − 4(log x) + 3 < 0 is a quadratic in the variable u = log x — solve for u first (factoring gives 1 < u < 3), then unwrap the outer inequality back through the logarithm with full base-and-domain discipline. Substitution plus branch-aware unwrapping is the complete method: treat the transcendental quantity as a letter, solve the algebra, then translate each bound back through the function\u2019s monotonicity.',
      },
      { kind: 'heading', text: 'Worked Examples' },
      {
        kind: 'example',
        title: 'Worked Example — a distance-sum band, two ways',
        steps: [
          'Solve |x − 2| + |x − 5| < 4. Geometry first: the gap between 2 and 5 is 3, so the distance budget 4 exceeds it by 1, split evenly on both sides: the band is (2 − 1/2, 5 + 1/2) = (3/2, 11/2).',
          'Verify by cases. On [2, 5]: the sum is (x − 2) + (5 − x) = 3 < 4 — always true, so the whole segment [2, 5] is in (but check the ends below).',
          'For x < 2: sum = (2 − x) + (5 − x) = 7 − 2x < 4 gives x > 3/2; intersecting with x < 2 yields (3/2, 2). For x > 5: sum = (x − 2) + (x − 5) = 2x − 7 < 4 gives x < 11/2; intersecting yields (5, 11/2).',
          'Union of the three pieces: (3/2, 11/2) — matching the geometric band exactly, including strict endpoints (at x = 3/2 the sum is exactly 4, excluded).',
          'Note how each case\u2019s inequality was intersected with its own defining interval — dropping that intersection is the standard way to import phantom solutions.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example — a base-aware logarithm inequality with domain',
        steps: [
          'Solve log_{1/2}(x − 1) > −2. Domain first: x − 1 > 0, so x > 1.',
          'The base is 1/2, which lies between 0 and 1 — the logarithm is DECREASING, so the inequality reverses when exponentiating: x − 1 < (1/2)^{−2} = 4.',
          'So x − 1 < 4 gives x < 5; intersect with the domain x > 1: the solution is 1 < x < 5.',
          'Sanity check at x = 3: log_{1/2}(2) = −1 > −2 ✓. At x = 6: log_{1/2}(5) ≈ −2.32, which is NOT greater than −2 ✓ (excluded).',
          'Disguise variant: solve log₂(x − 1) + log₂(x − 3) ≤ 2. Domain: x > 3 (both arguments positive). Combine: log₂((x − 1)(x − 3)) ≤ 2, base 2 > 1 so (x − 1)(x − 3) ≤ 4, i.e. x² − 4x − 1 ≤ 0, giving 2 − √5 ≤ x ≤ 2 + √5. Intersect with x > 3: the solution is 3 < x ≤ 2 + √5 (note 2 + √5 ≈ 4.24).',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Engineering tolerances: a dimension within ±δ of nominal is exactly |x − a| < δ — the interval form every quality-control chart plots',
          'Facilities and routing: total travel distance to two depots |x − a| + |x − b| ≤ D defines the serviceable corridor — the distance-sum band',
          'pH and chemistry: pH > 7 or pH < 7 thresholds are logarithm inequalities (pH = −log₁₀[H⁺]) where the base-10 direction is implicit',
          'Acoustics and seismology: decibel and magnitude scales are logarithmic, so "limit to X dB" and "above magnitude Y" translate to exponential inequalities',
          'Computer science: digit counts and bit lengths (⌊log₂ n⌋ + 1) make memory-sizing and loop-analysis questions logarithm inequalities in disguise',
          'Finance: doubling-time and compound-growth questions compare b^t against a target — exponential inequalities with base-aware unwrapping',
        ],
      },
      { kind: 'heading', text: 'Pitfalls and Exam Traps' },
      {
        kind: 'list',
        items: [
          'Reading |x| > a as a single interval: it is a UNION of two rays (x < −a or x > a) — the "or" is structural',
          'Squaring both sides of an inequality without checking signs: |f| < g squares safely (both non-negative), but f < g does not',
          'Forgetting the domain of every logarithm BEFORE comparing: solutions outside the domain are the most common wrong answers in this whole topic',
          'Keeping the inequality direction when the base is less than 1: log_{1/2} REVERSES the order — base check first, always',
          'Solving (log f(x))²-style disguises by expanding logs instead of substituting u = log f(x): treat the log as the variable, then unwrap',
          'Missing the equality check at band endpoints for ≤ versus <: distance-sum equalities land exactly on the boundary points',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'Modulus', def: '|x − a|: the distance between x and a; defined by cases, which is the source of every branch decision.' },
          { term: 'Distance-sum band', def: 'The solution of |x − a| + |x − b| < d when d exceeds the gap: a symmetric interval around [a, b].' },
          { term: 'Domain-first discipline', def: 'Before comparing logarithms, enforce every argument > 0; the comparison is meaningless off the domain.' },
          { term: 'Base-aware direction', def: 'log_b comparisons keep their direction when b > 1 and reverse when 0 < b < 1; same for exponentials.' },
          { term: 'Disguised quadratic', def: 'An inequality polynomial in log f(x): substitute u = log f(x), solve the algebra in u, then unwrap with base and domain discipline.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The solution set of |x − 3| < 5 is:',
            options: [
              'x < −2 or x > 8',
              '−2 < x < 8',
              '−5 < x < 5',
              'x < 2 or x > 8',
            ],
            answer: 1,
            explain: '|x − 3| < 5 says x is within distance 5 of 3: (3 − 5, 3 + 5) = (−2, 8). The two-ray form is the trap for the > version of the question.',
          },
          {
            q: 'The minimum value of |x + 1| + |x − 4| is attained:',
            options: [
              'at x = −1 only',
              'at x = 4 only',
              'at every x in [−1, 4]',
              'nowhere — the sum grows without bound downward',
            ],
            answer: 2,
            explain: 'The sum of distances to −1 and 4 equals the gap 5 for EVERY point between them (one leg grows exactly as the other shrinks); outside the segment it exceeds 5. Equality holds on the whole closed segment.',
          },
          {
            q: 'The inequality log_{0.3}(x + 2) < log_{0.3}(6 − x) implies:',
            options: [
              'x + 2 < 6 − x, with −2 < x < 6',
              'x + 2 > 6 − x, with −2 < x < 6',
              'x + 2 > 6 − x, with x > 4',
              'x + 2 < 6 − x, with x < 4',
            ],
            answer: 1,
            explain: 'Base 0.3 lies between 0 and 1, so the decreasing logarithm REVERSES the comparison: x + 2 > 6 − x, giving x > 2. The domain needs both arguments positive: x > −2 and x < 6. Together: 2 < x < 6.',
          },
          {
            q: 'The number of integers satisfying log₂(x − 1) + log₂(x − 3) ≤ 2 is:',
            options: [
              '0',
              '1',
              '2',
              '3',
            ],
            answer: 1,
            explain: 'Domain first: x > 3. Combining the logs (base 2 > 1 keeps the direction): (x − 1)(x − 3) ≤ 4, so x² − 4x − 1 ≤ 0, giving 2 − √5 ≤ x ≤ 2 + √5 ≈ 4.24. Intersecting with x > 3: the solution is 3 < x ≤ 4.24. Checking: x = 4 gives 3·1 = 3 ≤ 4 ✓, while x = 5 gives 8 > 4 ✗. Exactly one integer, namely 4.',
          },
        ],
      },
    ],
  },
]
