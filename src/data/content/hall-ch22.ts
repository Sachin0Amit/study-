import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 22
// Electric Fields — sections 22-1 … 22-7 (ids hall-ch22-s1 … hall-ch22-s7)
// Key results of the chapter: E = kq/r², dipole 2kp/r³ (axial),
// λ/2πε₀d (line), σ/2ε₀ (sheet), F = qE, τ = p×E, U = −p·E.
// ============================================================================

export const hallCh22Content: SectionContent[] = [
  // ------------------------------------------------------------------ 22-1
  {
    sectionId: 'hall-ch22-s1',
    readingTime: 6,
    intro: "Action at a distance troubled Faraday, and his answer was one of the great ideas of physics: a charge does not tug on distant charges directly \u2014 it fills the surrounding space with an electric field, and that field pushes whatever charge happens to be there. The field is defined operationally by the force on a small positive test charge, it can be mapped with field lines, and it is the object Chapter 23 and all of electromagnetism are built on.",
    objectives: [
      'Define the electric field as force per unit test charge, $\\vec E = \\vec F/q_0$, with units N/C',
      'State the four rules for electric field lines and read both direction and relative magnitude from a field-line picture',
      'Explain why the test charge must be small, and why superposition applies to fields',
    ],
    concepts: [
      {
        term: 'Electric field',
        kind: 'definition',
        statement: "**The electric field at a point is the electric force per unit positive charge placed there:** $$\\vec E = \\frac{\\vec F}{q_0},$$ measured in N/C. The test charge $q_0$ must be tiny so it does not disturb the charges that create the field; in the limit $q_0 \\to 0$ the field is a property of the point in space, with or without any charge present.",
      },
      {
        term: 'Electric field lines',
        kind: 'definition',
        statement: '**A field line is a curve whose tangent at every point gives the direction of $\\vec E$ there.** Four rules: (1) lines start on positive charge and end on negative charge (or run off to infinity); (2) the tangent to a line gives the direction of $\\vec E$; (3) lines never cross (a point has one field direction); (4) the density of lines is proportional to the magnitude of $\\vec E$ \u2014 where lines crowd, the field is strong.',
      },
      {
        term: "Faraday's field idea",
        kind: 'insight',
        statement: '**The field is the physical intermediary, not a bookkeeping device.** Charge $q_1$ modifies the state of space around it; charge $q_2$ responds to the field at its own location. This localization of cause and effect becomes indispensable once charges move and waves propagate.',
      },
      {
        term: 'Superposition of fields',
        kind: 'method',
        statement: '**Fields add vectorially.** If several charges are present, each contributes its own $\\vec E$ at every point as if the others were absent, and the net field is the vector sum. Field-line pictures respect this automatically: lines of the total field never cross.',
      },
      {
        term: "The Electric Field: solution protocol",
        kind: "method",
        statement: "**Solve The Electric Field problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the electric field and dipoles; the working equation is $\\vec E = \\vec F/q_0$, $E = kq/r^2$, $\\vec\\tau = \\vec p\\times\\vec E$, $U = -\\vec p\\cdot\\vec E$; every substitution must carry its units so the final unit ($\\text{N/C}$ ($\\text{V/m}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E\\sim 10^3$--$10^6\\ \\text{N/C}$ in textbook setups; small test charge; far-field dipole $1/r^3$ only for $z\\gg d$.",
      },
    ],
    figures: [
      {
        caption: 'The defining picture of a field line: its tangent at $P$ gives the direction of $\\vec E$, and a test charge placed there feels $\\vec F = q_0\\vec E$ parallel to that tangent. The arrows on the lines point the way a positive charge would be pushed.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Field line through point P with tangent equal to E, and a test charge feeling F equals q0 E"><defs><marker id="flA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><circle cx="150" cy="150" r="24" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="2.5"/><text x="150" y="157" text-anchor="middle" font-size="18" fill="currentColor">+q</text><line x1="150" y1="122" x2="150" y2="45" stroke="currentColor" stroke-width="2" marker-end="url(#flA)"/><line x1="150" y1="178" x2="150" y2="255" stroke="currentColor" stroke-width="2" marker-end="url(#flA)"/><line x1="122" y1="150" x2="45" y2="150" stroke="currentColor" stroke-width="2" marker-end="url(#flA)"/><line x1="170" y1="131" x2="252" y2="53" stroke="currentColor" stroke-width="2" marker-end="url(#flA)"/><line x1="170" y1="169" x2="252" y2="247" stroke="currentColor" stroke-width="2" marker-end="url(#flA)"/><path d="M 170,135 C 320,60 480,55 640,110" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#flA)"/><circle cx="417" cy="74" r="5" fill="currentColor"/><text x="417" y="45" text-anchor="middle" font-size="16" fill="currentColor">P</text><line x1="320" y1="77" x2="600" y2="68" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6" marker-end="url(#flA)"/><text x="615" y="63" font-size="17" fill="currentColor">E</text><circle cx="470" cy="175" r="13" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="2"/><text x="470" y="180" text-anchor="middle" font-size="12" fill="currentColor">+q₀</text><line x1="485" y1="175" x2="575" y2="169" stroke="currentColor" stroke-width="2.5" marker-end="url(#flA)"/><text x="532" y="200" text-anchor="middle" font-size="15" fill="currentColor">F = q₀E</text><text x="360" y="285" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.85">the field line through P; its tangent at P is the direction of E, and the test charge is pushed along it</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Reading a field specification',
        problem: 'At a certain point the electric field is uniform with magnitude $E = 100$ N/C directed east. Find the force on (a) a $+3.0\\ \\mu$C charge and (b) an electron placed at that point.',
        steps: [
          { label: 'Positive charge', text: '$\\vec F = q\\vec E$: magnitude $F = (3.0\\times 10^{-6})(100) = 3.0\\times 10^{-4}$ N, directed east (parallel to $\\vec E$).' },
          { label: 'Electron', text: 'Magnitude $F = eE = (1.602\\times 10^{-19})(100) = 1.6\\times 10^{-17}$ N.' },
          { label: 'Direction', text: 'The electron is negative, so the force is antiparallel to the field: $1.6\\times 10^{-17}$ N west.' },
        ],
        result: '$3.0\\times 10^{-4}$ N east for the positive charge; $1.6\\times 10^{-17}$ N west for the electron \u2014 same field, opposite forces.',
      },
      {
        title: "The Electric Field: point-charge field check",
        problem: "Find $E = kq/r^2$ at $15\\ \\text{cm}$ from a $4\\ \\mu\\text{C}$ point charge.",
        steps: [
          { label: "Substitute", text: "$E = 8.99\\times 10^9\\times 4\\times 10^{-6}/(0.15)^2$." },
          { label: "Compute", text: "$E \\approx 1.60\\times 10^{+6}\\ \\text{N/C}$ radially outward." },
        ],
        result: "$E \\approx 1.60\\times 10^{+6}\\ \\text{N/C}$.",
      },
    ],
    keyTakeaways: [
      '$\\vec E = \\vec F/q_0$ defines the field at a point independently of whether a charge is actually there; units are N/C.',
      'Field-line tangents give directions, line density gives magnitude, and the lines begin/end on charges.',
      'Net field = vector sum of the fields of all charges present.',
    ],
    quiz: [
      {
        q: 'The direction of $\\vec E$ at a point is defined as the direction of the force on:',
        options: ['any charge placed there', 'a positive test charge', 'a negative test charge', 'an electron'],
        answer: 1,
        explanation: 'By convention the field direction is that of the force on a positive test charge; negative charges feel the opposite force.',
      },
      {
        q: 'Field lines can never cross because:',
        options: ['like charges repel', 'the field has a unique direction at each point', 'crossing lines would mean infinite charge', 'the lines are equipotentials'],
        answer: 1,
        explanation: 'At an intersection the tangent \u2014 and hence $\\vec E$ \u2014 would have two directions at once, which is impossible.',
      },
      {
        q: 'Where field lines are drawn more densely:',
        options: ['the field is weaker', 'the field is stronger', 'the potential is higher', 'the field is zero'],
        answer: 1,
        explanation: 'Rule 4 of field-line pictures: density is proportional to field magnitude.',
      },
      {
        q: 'A charge placed at a point where $\\vec E = 0$ must have:',
        options: ['zero force and zero potential energy', 'zero force; its potential energy depends on $V$ there', 'zero force only if it is positive', 'a nonzero force along the field line'],
        answer: 1,
        explanation: 'Force needs $\\vec E$, but potential energy depends on the scalar potential $V$ \u2014 a point of zero field can sit at nonzero potential.',
      },
    ],
  },
  // ------------------------------------------------------------------ 22-2
  {
    sectionId: 'hall-ch22-s2',
    readingTime: 6,
    intro: 'A single charged particle is the simplest possible source of field, and its field \u2014 radial, inverse-square, pointing outward for positive charge \u2014 is the building block from which every other field in this book is assembled by superposition. This section writes the point-charge field, fixes the direction conventions for both signs of source charge, and finds the points where two fields cancel.',
    objectives: [
      'Write and evaluate the field of a point charge, $E = kq/r^2$ radially',
      'Combine two or more point-charge fields as vectors, including locating null points',
      'Recognize that the field of a source charge exists independently of any test charge',
    ],
    concepts: [
      {
        term: 'Field of a point charge',
        kind: 'theorem',
        statement: "**A particle of charge $q$ produces at distance $r$ the field** $$\\vec E = k\\,\\frac{q}{r^2}\\,\\hat r,$$ where $\\hat r$ points radially away from the charge. For $q > 0$ the field points outward; for $q < 0$ the same formula holds and the minus sign pulls the field inward.",
        detail: 'Dividing Coulomb\u2019s law $\\vec F = q_0\\vec E$ by the test charge gives this immediately \u2014 the field is the force per unit charge, computed once for all future probes.',
      },
      {
        term: 'Inverse-square falloff',
        kind: 'insight',
        statement: '**Doubling the distance from a point charge cuts the field to one quarter.** The field spreads over spheres of area $4\\pi r^2$, and the same flux divides over ever-larger shells \u2014 the geometric root of the inverse-square law.',
      },
      {
        term: 'Vector superposition',
        kind: 'method',
        statement: '**The net field of several point charges is the vector sum of the individual fields.** Compute each $\\vec E_i$ with its own distance and direction, then add components \u2014 never add magnitudes blindly, because fields in opposite directions cancel.',
      },
      {
        term: 'The field is there anyway',
        kind: 'insight',
        statement: '**A charge\u2019s field permeates all space whether or not anything is there to feel it.** The test charge is a measuring device, not a participant: remove it and the field at the point remains.',
      },
      {
        term: "The Electric Field Due to a Charged Particle: solution protocol",
        kind: "method",
        statement: "**Solve The Electric Field Due to a Charged Particle problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the electric field and dipoles; the working equation is $\\vec E = \\vec F/q_0$, $E = kq/r^2$, $\\vec\\tau = \\vec p\\times\\vec E$, $U = -\\vec p\\cdot\\vec E$; every substitution must carry its units so the final unit ($\\text{N/C}$ ($\\text{V/m}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E\\sim 10^3$--$10^6\\ \\text{N/C}$ in textbook setups; small test charge; far-field dipole $1/r^3$ only for $z\\gg d$.",
      },
    ],
    examples: [
      {
        title: 'The field inside the hydrogen atom',
        problem: "Find the magnitude of the electric field produced by the proton at the orbit radius of the electron, $r = 5.29\\times 10^{-11}$ m.",
        steps: [
          { label: 'Formula', text: '$E = ke/r^2$ with $e = 1.602\\times 10^{-19}$ C.' },
          { label: 'Numerator', text: '$ke = (8.99\\times 10^{9})(1.602\\times 10^{-19}) = 1.44\\times 10^{-9}\\ \\mathrm{N\\cdot m^2/C}$.' },
          { label: 'Divide', text: '$r^2 = 2.80\\times 10^{-21}\\ \\mathrm{m^2}$, so $E = 1.44\\times 10^{-9}/2.80\\times 10^{-21} = 5.1\\times 10^{11}$ N/C.' },
        ],
        result: '$E = 5.1\\times 10^{11}$ N/C, directed radially away from the proton \u2014 an enormous field by laboratory standards, produced by a single elementary charge at atomic distance.',
      },
      {
        title: 'Where the field cancels',
        problem: "Charges $q_1 = +2.0\\ \\mu$C sit at $x = 0$ and $q_2 = +8.0\\ \\mu$C at $x = 6.0$ m. Where on the $x$ axis is the net electric field zero?",
        steps: [
          { label: 'Locate the region', text: 'Between the charges the two fields are oppositely directed (away from each positive charge), so cancellation is possible there; outside the segment both point the same way.' },
          { label: 'Set magnitudes equal', text: '$kq_1/x^2 = kq_2/(6.0 - x)^2 \\Rightarrow 2/x^2 = 8/(6.0-x)^2$.' },
          { label: 'Solve', text: '$(6.0 - x)/x = 2$, so $x = 2.0$ m.' },
          { label: 'Check', text: 'At $x = 2.0$ m: $k(2.0\\ \\mu\\mathrm{C})/(2.0)^2 = k(8.0\\ \\mu\\mathrm{C})/(4.0)^2 = 0.50k\\ \\mu\\mathrm{C/m^2}$.\u2713' },
        ],
        result: 'The null point is $x = 2.0$ m from the smaller charge \u2014 always closer to the weaker source.',
      },
    ],
    keyTakeaways: [
      '$\\vec E = kq\\hat r/r^2$; one sign rule covers both charges: the field points away from positive sources and toward negative ones.',
      'Multiple-charge fields add as vectors; null points lie between like charges, nearer the smaller charge.',
      'The proton in hydrogen creates a field of $5.1\\times 10^{11}$ N/C at the electron\u2019s orbit.',
    ],
    quiz: [
      {
        q: 'The field of a negative point charge at distance $r$ is:',
        options: ['of magnitude $kq/r^2$, pointing away from the charge', 'of magnitude $kq/r^2$, pointing toward the charge', 'zero', 'of magnitude $kq/r$, pointing inward'],
        answer: 1,
        explanation: 'The magnitude formula uses $|q|$; for negative sources the field points radially inward.',
      },
      {
        q: 'At twice the distance from a positive point charge, the field magnitude is:',
        options: ['E/4', 'E/2', '2E', 'E'],
        answer: 0,
        explanation: 'The field spreads over $4\\pi r^2$: doubling $r$ multiplies the area by 4 and divides $E$ by 4.',
      },
      {
        q: 'With $+2.0\\ \\mu$C at $x = 0$ and $+8.0\\ \\mu$C at $x = 6.0$ m, the net field is zero at:',
        options: ['x = 2.0 m', 'x = 3.0 m', 'x = 4.0 m', 'no point between them'],
        answer: 0,
        explanation: 'Equal magnitudes require $2/x^2 = 8/(6-x)^2$, giving $x = 2.0$ m, nearer the smaller charge.',
      },
      {
        q: 'A point charge produces a field at a point in empty space. The field at that point:',
        options: ['exists only when a test charge is placed there', 'exists whether or not a test charge is present', 'exists only if the source charge is positive', 'is always canceled by the test charge\u2019s own field'],
        answer: 1,
        explanation: 'The test charge merely samples the field; the field itself is a property of the point due to the source charge.',
      },
    ],
  },
  // ------------------------------------------------------------------ 22-3
  {
    sectionId: 'hall-ch22-s3',
    readingTime: 7,
    intro: 'Two equal and opposite charges separated by a fixed distance form the electric dipole \u2014 the simplest electrically neutral object, and the workhorse model for molecules. Because the two charges nearly cancel, the dipole\u2019s far field falls off one power of $r$ faster than a point charge\u2019s. HRW derives the field on the dipole axis and states the result on the perpendicular bisector; both are inverse-cube in $p/r^3$.',
    objectives: [
      'Define the electric dipole and its moment $\\vec p = q\\vec d$ (directed from $-$ to $+$)',
      'Derive and use the far-field results on the axis, $E = 2kp/r^3$, and on the bisector, $E = kp/r^3$ antiparallel to $\\vec p$',
      'Explain why neutral systems produce fields that fall faster than $1/r^2$',
    ],
    concepts: [
      {
        term: 'Electric dipole',
        kind: 'definition',
        statement: '**An electric dipole is a pair of charges $+q$ and $-q$ separated by distance $d$.** Its **dipole moment** is $$\\vec p = q\\vec d,$$ a vector of magnitude $qd$ pointing from the negative charge to the positive one. Water ($p = 6.2\\times 10^{-30}\\ \\mathrm{C\\cdot m}$) and HCl are permanent dipoles.',
      },
      {
        term: 'Field on the dipole axis (far away)',
        kind: 'theorem',
        statement: '**At a point on the dipole axis a distance $r \\gg d$ from the center, the field points along $\\vec p$ with magnitude** $$E = \\frac{1}{2\\pi\\varepsilon_0}\\frac{p}{r^3} = \\frac{2kp}{r^3}.$$ The far charge is subtracted from the near one and the difference is of order $d/r$ times either field.',
        detail: 'Exact derivation: the point is $r - d/2$ from $+q$ and $r + d/2$ from $-q$; subtracting the two inverse-squares and expanding to first order in $d/r$ gives $2kqd/r^3$.',
      },
      {
        term: 'Field on the perpendicular bisector',
        kind: 'theorem',
        statement: '**At a point on the bisector of the dipole, far from it, the field is opposite to $\\vec p$ with half the axial magnitude:** $$\\vec E = -\\frac{1}{4\\pi\\varepsilon_0}\\frac{\\vec p}{r^3}.$$ On the bisector both charges push/pull at the same distance, and their components along $\\vec p$ add while the perpendicular ones cancel.',
      },
      {
        term: 'The $1/r^3$ lesson',
        kind: 'insight',
        statement: '**Neutral systems cancel their leading $1/r^2$ fields.** What survives at large distance is the dipole $1/r^3$ term \u2014 this is why distant neutral matter (your heart\u2019s electric signals, molecules) communicates so feebly, and why higher multipoles matter only nearby.',
      },
      {
        term: "The Electric Field Due to a Dipole: solution protocol",
        kind: "method",
        statement: "**Solve The Electric Field Due to a Dipole problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the electric field and dipoles; the working equation is $\\vec E = \\vec F/q_0$, $E = kq/r^2$, $\\vec\\tau = \\vec p\\times\\vec E$, $U = -\\vec p\\cdot\\vec E$; every substitution must carry its units so the final unit ($\\text{N/C}$ ($\\text{V/m}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E\\sim 10^3$--$10^6\\ \\text{N/C}$ in textbook setups; small test charge; far-field dipole $1/r^3$ only for $z\\gg d$.",
      },
    ],
    figures: [
      {
        caption: 'Field lines of an electric dipole. Every line leaves the positive charge and ends on the negative one, so the pattern is symmetric about both the dipole axis and the perpendicular bisector. On the axis (between the charges) $\\vec E$ points from $+$ to $-$, along $\\vec p$; on the bisector it points opposite $\\vec p$ \u2014 both far-field results of this section.',
        svg: `<svg viewBox="0 0 720 310" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electric field lines of a dipole, curving from the positive charge to the negative charge"><defs><marker id="dpA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><path d="M 502,143 C 545,100 415,62 360,62 C 305,62 175,100 218,143" fill="none" stroke="currentColor" stroke-width="2" marker-mid="url(#dpA)"/><path d="M 502,146 C 528,112 420,86 360,86 C 300,86 192,112 218,146" fill="none" stroke="currentColor" stroke-width="2" marker-mid="url(#dpA)"/><path d="M 502,150 L 360,150 L 218,150" fill="none" stroke="currentColor" stroke-width="2" marker-mid="url(#dpA)"/><path d="M 502,154 C 528,188 420,214 360,214 C 300,214 192,188 218,154" fill="none" stroke="currentColor" stroke-width="2" marker-mid="url(#dpA)"/><path d="M 502,157 C 545,200 415,238 360,238 C 305,238 175,200 218,157" fill="none" stroke="currentColor" stroke-width="2" marker-mid="url(#dpA)"/><circle cx="240" cy="150" r="22" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="2.5"/><text x="240" y="157" text-anchor="middle" font-size="18" fill="currentColor">−q</text><circle cx="480" cy="150" r="22" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="2.5"/><text x="480" y="157" text-anchor="middle" font-size="18" fill="currentColor">+q</text><line x1="240" y1="272" x2="480" y2="272" stroke="currentColor" stroke-width="2.5" marker-end="url(#dpA)"/><text x="360" y="264" text-anchor="middle" font-size="17" fill="currentColor">p = qd</text><text x="620" y="290" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.85">arrows: direction of E</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'The field of a water molecule',
        problem: "A water molecule has dipole moment $p = 6.2\\times 10^{-30}\\ \\mathrm{C\\cdot m}$. Find the field magnitude (a) on the dipole axis and (b) on the perpendicular bisector, both at $r = 10$ nm from the molecule.",
        steps: [
          { label: 'Axial point', text: '$E_\\text{axial} = 2kp/r^3 = 2(8.99\\times 10^{9})(6.2\\times 10^{-30})/(1.0\\times 10^{-8})^3$.' },
          { label: 'Evaluate', text: 'Numerator $= 1.11\\times 10^{-19}$; $r^3 = 1.0\\times 10^{-24}\\ \\mathrm{m^3}$; so $E_\\text{axial} = 1.1\\times 10^{2}$ N/C along $\\vec p$.' },
          { label: 'Bisector point', text: 'Half as large: $E_\\text{bis} = kp/r^3 = 5.6\\times 10^{1}$ N/C, directed opposite to $\\vec p$.' },
        ],
        result: 'About $1.1\\times 10^{2}$ N/C on the axis and $5.6\\times 10^{1}$ N/C on the bisector \u2014 a single molecule is detectable, but only just, at ten atomic diameters.',
      },
      {
        title: "The Electric Field Due to a Dipole: point-charge field check",
        problem: "Find $E = kq/r^2$ at $25\\ \\text{cm}$ from a $3\\ \\mu\\text{C}$ point charge.",
        steps: [
          { label: "Substitute", text: "$E = 8.99\\times 10^9\\times 3\\times 10^{-6}/(0.25)^2$." },
          { label: "Compute", text: "$E \\approx 4.31\\times 10^{+5}\\ \\text{N/C}$ radially outward." },
        ],
        result: "$E \\approx 4.31\\times 10^{+5}\\ \\text{N/C}$.",
      },
    ],
    keyTakeaways: [
      'Dipole moment $\\vec p = q\\vec d$ points from the negative to the positive charge.',
      'Far field: on the axis $E = 2kp/r^3$ (along $\\vec p$); on the bisector $E = kp/r^3$ (opposite $\\vec p$).',
      'Neutral systems cancel their leading fields \u2014 dipole fields fall as $1/r^3$, one power faster than point charges.',
    ],
    quiz: [
      {
        q: 'The dipole moment $\\vec p$ of a pair of charges points:',
        options: ['from the positive charge to the negative charge', 'from the negative charge to the positive charge', 'perpendicular to the line joining them', 'along the external field'],
        answer: 1,
        explanation: 'By convention $\\vec p = q\\vec d$ with $\\vec d$ drawn from $-$ to $+$.',
      },
      {
        q: 'Far from a dipole, the field magnitude falls with distance as:',
        options: [`$1/r$`, `$1/r^2$`, `$1/r^3$`, `$1/r^4$`],
        answer: 2,
        explanation: 'The two opposite charges nearly cancel; the surviving dipole term goes as $p/r^3$.',
      },
      {
        q: 'On the perpendicular bisector of a dipole (far away), $\\vec E$ is:',
        options: ['parallel to $\\vec p$', 'antiparallel to $\\vec p$', 'radially outward', 'zero'],
        answer: 1,
        explanation: 'Each charge\u2019s bisector field has a component opposite $\\vec p$; those components add while the perpendicular ones cancel.',
      },
      {
        q: 'At a given large distance, the axial field of a dipole differs from the bisector field by a factor of:',
        options: ['2, with the axial field larger', '2, with the bisector field larger', '4', 'they are equal'],
        answer: 0,
        explanation: '$2kp/r^3$ on the axis versus $kp/r^3$ on the bisector.',
      },
    ],
  },
  // ------------------------------------------------------------------ 22-4
  {
    sectionId: 'hall-ch22-s4',
    readingTime: 8,
    intro: 'A charged rod, wire, or plastic tube is not a point particle \u2014 its field must be built by slicing it into infinitesimal elements, each treated as a point charge, and summing (integrating) their contributions. This section works the method out for a straight line of charge, where symmetry does half the work, and lands the exact field of an infinite uniformly charged line: $\\lambda/2\\pi\\varepsilon_0 d$, falling only as $1/d$.',
    objectives: [
      'Slice a continuous charge distribution into elements $dq$ and set up the integral for the field',
      'Use symmetry to eliminate field components before integrating',
      'Derive and apply the infinite-line result $E = \\lambda/2\\pi\\varepsilon_0 d$',
    ],
    concepts: [
      {
        term: 'Linear charge density',
        kind: 'notation',
        statement: "**Charge per unit length**, $\\lambda = q/L$ in C/m. An element of length $dy$ of the line carries charge $dq = \\lambda\\,dy$ \u2014 the bookkeeping that turns geometry into charge.",
      },
      {
        term: 'Slice, then superpose',
        kind: 'method',
        statement: "**Treat every element as a point charge and add the vectors.** The element $dq$ contributes $d\\vec E = k\\,dq\\,\\hat r/r^2$; the total field is the integral over the distribution. This is superposition made continuous.",
      },
      {
        term: 'Symmetry first',
        kind: 'insight',
        statement: '**For a point opposite the midpoint of a uniform line, the components parallel to the line cancel in pairs.** Elements at $+y$ and $-y$ push the point equally along the line in opposite directions, so only the perpendicular component survives \u2014 halving the work and halving the error surface of the integral.',
      },
      {
        term: 'Field of an infinite line of charge',
        kind: 'theorem',
        statement: '**A uniformly charged infinite line produces, at perpendicular distance $d$, the field** $$E = \frac{\lambda}{2\pi\varepsilon_0 d} = \frac{2k\lambda}{d},$$ directed radially away from the line if $\lambda > 0$. The falloff is $1/d$ — slower than a point charge\u2019s $1/r^2$, because the line stretches away past you on both sides.',
      },
      {
        term: "The Electric Field Due to a Line of Charge: solution protocol",
        kind: "method",
        statement: "**Solve The Electric Field Due to a Line of Charge problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the electric field and dipoles; the working equation is $\\vec E = \\vec F/q_0$, $E = kq/r^2$, $\\vec\\tau = \\vec p\\times\\vec E$, $U = -\\vec p\\cdot\\vec E$; every substitution must carry its units so the final unit ($\\text{N/C}$ ($\\text{V/m}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E\\sim 10^3$--$10^6\\ \\text{N/C}$ in textbook setups; small test charge; far-field dipole $1/r^3$ only for $z\\gg d$.",
      },
    ],
    examples: [
      {
        title: 'Deriving the infinite-line field',
        problem: "An infinite line carries uniform charge density $\\lambda$. Find the field at point $P$, a perpendicular distance $d$ from the line, by direct integration.",
        steps: [
          { label: 'Set up', text: 'Put the line along the $y$ axis and $P$ on the $x$ axis at distance $d$. The element $dq = \\lambda\\,dy$ at height $y$ is a distance $r = \\sqrt{y^2 + d^2}$ from $P$.' },
          { label: 'Kill by symmetry', text: 'The partner element at $-y$ cancels the $y$-component of $d\\vec E$, so only the $x$-component survives: $dE_x = k\\lambda\\,dy\\cos\\theta/(y^2+d^2)$ with $\\cos\\theta = d/\\sqrt{y^2+d^2}$.' },
          { label: 'Integrate', text: 'Doubling the half-line, $$E = 2k\\lambda d\\int_0^{\\infty}\\frac{dy}{(y^2+d^2)^{3/2}} = 2k\\lambda d\\left[\\frac{y}{d^2\\sqrt{y^2+d^2}}\\right]_0^{\\infty} = 2k\\lambda d\\cdot\\frac{1}{d^2}.$$' },
          { label: 'Result', text: '$E = 2k\\lambda/d = \\lambda/2\\pi\\varepsilon_0 d$, pointing straight away from the line.' },
        ],
        result: 'The integral collapses to $1/d^2$ at the upper limit, leaving $E = \\lambda/2\\pi\\varepsilon_0 d$ \u2014 the same result Gauss\u2019 law will deliver in Section 23-4 in four lines.',
      },
      {
        title: 'Field near a charged wire',
        problem: "A long straight wire carries $\\lambda = -5.0$ nC/m (excess electrons). Find the field 4.0 cm from the wire.",
        steps: [
          { label: 'Magnitude', text: '$E = 2k|\\lambda|/d = 2(8.99\\times 10^{9})(5.0\\times 10^{-9})/(0.040)$.' },
          { label: 'Evaluate', text: 'Numerator $= 89.9$ N·m/C; dividing by 0.040 m gives $E = 2.2\\times 10^{3}$ N/C.' },
          { label: 'Direction', text: 'The line is negative, so the field points toward the wire at all distances.' },
        ],
        result: '$2.2\\times 10^{3}$ N/C, pointing inward toward the wire.',
      },
    ],
    keyTakeaways: [
      'Continuous distributions are handled by $dq = \\lambda\\,dy$ slices, each contributing $d\\vec E = k\\,dq\\hat r/r^2$, integrated.',
      'Symmetry (mirror elements about the perpendicular) cancels the line-parallel components.',
      'Infinite line: $E = \\lambda/2\\pi\\varepsilon_0 d$, falling as $1/d$, and Gauss\u2019 law will recover it effortlessly.',
    ],
    quiz: [
      {
        q: 'The field of an infinite uniformly charged line, at perpendicular distance $d$, is proportional to:',
        options: [`$1/d$`, `$1/d^2$`, `$1/d^3$`, 'independent of $d$'],
        answer: 0,
        explanation: '$E = \\lambda/2\\pi\\varepsilon_0 d$: the infinite extent replenishes the field, leaving only one power of distance.',
      },
      {
        q: 'Standing twice as far from the midpoint of a long charged line multiplies the field by:',
        options: ['1/2', '1/4', '2', '1'],
        answer: 0,
        explanation: 'With $E \\propto 1/d$, doubling the distance halves the field \u2014 contrast a point charge\u2019s factor $1/4$.',
      },
      {
        q: 'For a point opposite the midpoint of a uniform line, the components of the element fields parallel to the line:',
        options: ['add to give the total field', 'cancel in pairs by symmetry', 'double the perpendicular component', 'are undefined for negative $\\lambda$'],
        answer: 1,
        explanation: 'Mirror elements at $\\pm y$ push equally and oppositely along the line; only the perpendicular parts add.',
      },
      {
        q: 'A line with $\\lambda = -5.0$ nC/m. At $d = 4.0$ cm the field is:',
        options: ['$2.2\\times 10^{3}$ N/C toward the line', '$2.2\\times 10^{3}$ N/C away from the line', '$1.1\\times 10^{3}$ N/C toward the line', '$4.4\\times 10^{3}$ N/C away from the line'],
        answer: 0,
        explanation: '$E = 2k|\\lambda|/d = 2.2\\times 10^{3}$ N/C; negative charge means the field points inward.',
      },
    ],
  },
  // ------------------------------------------------------------------ 22-5
  {
    sectionId: 'hall-ch22-s5',
    readingTime: 7,
    intro: 'Slice a disk into rings and the rings into point charges, and a uniformly charged disk yields an exact closed-form field on its axis. Two limits bookend the result: very far away the disk looks like a point charge ($kq/z^2$), and very close (or infinitely wide) it becomes the distance-independent field of an infinite sheet, $\\sigma/2\\varepsilon_0$ \u2014 the field between the plates of a capacitor before edge effects.',
    objectives: [
      'Build the disk from rings, using the on-axis field of each ring element',
      'State and use $E = (\\sigma/2\\varepsilon_0)(1 - z/\\sqrt{z^2+R^2})$ on the disk axis',
      'Take the sheet limit $\\sigma/2\\varepsilon_0$ and combine two sheets into the parallel-plate field $\\sigma/\\varepsilon_0$',
    ],
    concepts: [
      {
        term: 'Field of a ring on its axis',
        kind: 'theorem',
        statement: "**A ring of radius $R$ carrying charge $q$ produces, on its axis a distance $z$ from the center,** $$E_z = \\frac{kqz}{(z^2+R^2)^{3/2}},$$ along the axis. Off-axis components cancel by symmetry; the center of the ring ($z = 0$) has $E = 0$ by symmetry too.",
        detail: 'Each element of the ring is the same distance $\\sqrt{z^2+R^2}$ from the axial point, so the integration only tracks the $z$-projection $\\cos\\theta = z/\\sqrt{z^2+R^2}$.',
      },
      {
        term: 'Field of a charged disk on its axis',
        kind: 'theorem',
        statement: '**A disk of radius $R$ with uniform surface density $\\sigma$ produces on its axis** $$E = \\frac{\\sigma}{2\\varepsilon_0}\\left(1 - \\frac{z}{\\sqrt{z^2+R^2}}\\right),$$ pointing away from the disk for $\\sigma > 0$. The integral over rings uses $dq = \\sigma\\,(2\\pi r\\,dr)$ and the ring formula element by element.',
      },
      {
        term: 'The infinite-sheet limit',
        kind: 'insight',
        statement: '**As $R \\to \\infty$ (or $z \\to 0$ at the disk center), $E \\to \\sigma/2\\varepsilon_0$ \u2014 independent of distance.** An infinite sheet cannot be "gotten away from": every step back reveals proportionally more charge. Gauss\u2019 law derives this in one line in Chapter 23.',
      },
      {
        term: 'Parallel plates',
        kind: 'insight',
        statement: '**Two sheets of $+\\sigma$ and $-\\sigma$ facing each other give $E = \\sigma/\\varepsilon_0$ between the plates and zero outside** \u2014 the fields add in the gap and cancel beyond it. This uniform field drives every oscilloscope, ink-jet printer and electron accelerator in the problems.',
      },
      {
        term: "The Electric Field Due to a Charged Disk: solution protocol",
        kind: "method",
        statement: "**Solve The Electric Field Due to a Charged Disk problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the electric field and dipoles; the working equation is $\\vec E = \\vec F/q_0$, $E = kq/r^2$, $\\vec\\tau = \\vec p\\times\\vec E$, $U = -\\vec p\\cdot\\vec E$; every substitution must carry its units so the final unit ($\\text{N/C}$ ($\\text{V/m}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E\\sim 10^3$--$10^6\\ \\text{N/C}$ in textbook setups; small test charge; far-field dipole $1/r^3$ only for $z\\gg d$.",
      },
    ],
    examples: [
      {
        title: 'Field of a charged disk',
        problem: "A disk of radius $R = 2.5$ cm carries uniform density $\\sigma = 2.0\\ \\mu\\mathrm{C/m^2}$. Find the field on the axis at $z = 3.0$ cm.",
        steps: [
          { label: 'Prefactor', text: '$\\sigma/2\\varepsilon_0 = (2.0\\times 10^{-6})/(2\\times 8.85\\times 10^{-12}) = 1.13\\times 10^{5}$ N/C.' },
          { label: 'Geometric factor', text: '$z/\\sqrt{z^2+R^2} = 0.030/\\sqrt{(0.030)^2+(0.025)^2} = 0.030/0.039 = 0.77$.' },
          { label: 'Combine', text: '$E = (1.13\\times 10^{5})(1 - 0.77) = 2.6\\times 10^{4}$ N/C.' },
          { label: 'Reality check', text: 'An infinite sheet of the same $\\sigma$ would give $1.13\\times 10^{5}$ N/C; the finite disk delivers about 23% of that at this distance.' },
        ],
        result: '$E = 2.6\\times 10^{4}$ N/C, pointing away from the disk along the axis.',
      },
      {
        title: 'Between capacitor plates',
        problem: "Two large parallel plates carry $+\\sigma$ and $-\\sigma$ with $\\sigma = 2.0\\ \\mu\\mathrm{C/m^2}$. Find the field between the plates and outside them, treating them as infinite sheets.",
        steps: [
          { label: 'One sheet alone', text: 'Each sheet produces $\\sigma/2\\varepsilon_0 = 1.13\\times 10^{5}$ N/C on each side, away from the positive sheet and toward the negative one.' },
          { label: 'Between', text: 'In the gap the two fields point the same way (from $+$ toward $-$): $E = \\sigma/2\\varepsilon_0 + \\sigma/2\\varepsilon_0 = \\sigma/\\varepsilon_0 = 2.3\\times 10^{5}$ N/C.' },
          { label: 'Outside', text: 'Beyond the pair the fields are oppositely directed and cancel: $E = 0$.' },
        ],
        result: '$E = \\sigma/\\varepsilon_0 = 2.3\\times 10^{5}$ N/C between the plates, essentially zero outside \u2014 the ideal parallel-plate capacitor field.',
      },
    ],
    keyTakeaways: [
      'Ring on axis: $E_z = kqz/(z^2+R^2)^{3/2}$; disk on axis: $E = (\\sigma/2\\varepsilon_0)(1 - z/\\sqrt{z^2+R^2})$.',
      'Infinite sheet: $E = \\sigma/2\\varepsilon_0$ on each side, with no distance dependence.',
      'Facing $\\pm\\sigma$ sheets superpose to $\\sigma/\\varepsilon_0$ between and zero outside.',
    ],
    quiz: [
      {
        q: 'In the limit $R \\to \\infty$ with $\\sigma$ fixed, the on-axis field of the disk approaches:',
        options: [`$\\sigma/2\\varepsilon_0$, independent of $z$`, `$\\sigma/2\\varepsilon_0$ times $1/z$`, 'zero', `$kq/z^2$`],
        answer: 0,
        explanation: 'The geometric factor $z/\\sqrt{z^2+R^2} \\to 0$, leaving the constant sheet field $\\sigma/2\\varepsilon_0$.',
      },
      {
        q: 'Very far from a finite charged disk ($z \\gg R$), the field approaches that of:',
        options: ['an infinite sheet', 'a point charge with the same total charge', 'a dipole', 'zero'],
        answer: 1,
        explanation: 'When the disk subtends a tiny angle it is indistinguishable from a point: $E \\to kq/z^2$ with $q = \\sigma\\pi R^2$.',
      },
      {
        q: 'Two large parallel plates carry $+\\sigma$ and $-\\sigma$. The field between them is:',
        options: [`$\\sigma/2\\varepsilon_0$`, `$\\sigma/\\varepsilon_0$`, 'zero', `$2\\sigma/\\varepsilon_0$`],
        answer: 1,
        explanation: 'The two sheet fields add in the gap: $\\sigma/2\\varepsilon_0 + \\sigma/2\\varepsilon_0 = \\sigma/\\varepsilon_0$.',
      },
      {
        q: 'At the center of a uniformly charged ring (in its plane, at the center point), the field is:',
        options: [`$kq/R^2$`, 'zero by symmetry', `$kq/R$`, `$\\sigma/2\\varepsilon_0$`],
        answer: 1,
        explanation: 'Every element of the ring is matched by a diametrically opposite one pushing the center in the opposite direction.',
      },
    ],
  },
  // ------------------------------------------------------------------ 22-6
  {
    sectionId: 'hall-ch22-s6',
    readingTime: 7,
    intro: 'Turn the field around: instead of asking what field a charge creates, ask what a field does to a charge. The rule is one line \u2014 $\\vec F = q\\vec E$ \u2014 but its consequences fill oscilloscopes, ink-jet printers and particle accelerators. Because the electric force vastly outmuscles gravity, an electron in a modest laboratory field accelerates at $10^{14}$ m/s², and its motion is pure projectile mechanics with $g$ replaced.',
    objectives: [
      'Apply $\\vec F = q\\vec E$ to positive and negative charges, ignoring gravity with justification',
      'Compute accelerations and trajectories of charges in uniform fields',
      'Solve deflection problems (plates of length $L$, entry speed $v$) with projectile methods',
    ],
    concepts: [
      {
        term: 'Force on a charge in a field',
        kind: 'law',
        statement: "**A charge $q$ placed in electric field $\\vec E$ feels force** $$\\vec F = q\\vec E,$$ independent of the charge\u2019s speed (in electrostatics) and of every other property. Positive charges are pushed along $\\vec E$; negative charges are pushed against it.",
      },
      {
        term: 'Gravity is negligible',
        kind: 'insight',
        statement: '**For particles, the electric force beats gravity by $10^{12}$ or more in laboratory fields.** An electron in a mere $1000$ N/C field accelerates at $1.8\\times 10^{14}\\ \\mathrm{m/s^2}$ \u2014 eighteen trillion gravities \u2014 so $mg$ never survives a comparison.',
      },
      {
        term: 'Projectile method',
        kind: 'method',
        statement: '**In a uniform field the acceleration $\\vec a = q\\vec E/m$ is constant, so the trajectory is a parabola.** Split the motion: constant velocity along the plates, $y = \\frac{1}{2}at^2$ across them, with flight time $t = L/v$ over plate length $L$ \u2014 exactly the machinery of Chapter 4 with a tunable "gravity".',
      },
      {
        term: 'Deflection devices',
        kind: 'insight',
        statement: '**Ink-jet printers and CRT displays are this section in hardware.** Charged drops or electrons cross a uniform-field region, accumulate sideways displacement and exit at an angle $\\tan\\theta = a t/v$ \u2014 steer the field and you steer the beam.',
      },
      {
        term: "A Point Charge in an Electric Field: solution protocol",
        kind: "method",
        statement: "**Solve A Point Charge in an Electric Field problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the electric field and dipoles; the working equation is $\\vec E = \\vec F/q_0$, $E = kq/r^2$, $\\vec\\tau = \\vec p\\times\\vec E$, $U = -\\vec p\\cdot\\vec E$; every substitution must carry its units so the final unit ($\\text{N/C}$ ($\\text{V/m}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E\\sim 10^3$--$10^6\\ \\text{N/C}$ in textbook setups; small test charge; far-field dipole $1/r^3$ only for $z\\gg d$.",
      },
    ],
    examples: [
      {
        title: 'An electron crossing charged plates',
        problem: "An electron enters the midplane of a region of uniform field $E = 1.0\\times 10^{3}$ N/C (pointing vertically upward) with horizontal speed $v = 1.0\\times 10^{7}$ m/s. The plates are $L = 2.0$ cm long. Find its acceleration, vertical deflection, and exit angle.",
        steps: [
          { label: 'Acceleration', text: '$a = eE/m = (1.602\\times 10^{-19})(1.0\\times 10^{3})/(9.11\\times 10^{-31}) = 1.8\\times 10^{14}\\ \\mathrm{m/s^2}$, directed downward (against $\\vec E$).' },
          { label: 'Flight time', text: '$t = L/v = (0.020)/(1.0\\times 10^{7}) = 2.0\\times 10^{-9}$ s.' },
          { label: 'Deflection', text: '$y = \\frac{1}{2}at^2 = \\frac{1}{2}(1.8\\times 10^{14})(2.0\\times 10^{-9})^2 = 3.5\\times 10^{-4}$ m \u2014 about a third of a millimeter.' },
          { label: 'Exit angle', text: '$v_y = at = 3.5\\times 10^{5}$ m/s, so $\\tan\\theta = v_y/v = 0.035$ and $\\theta \\approx 2.0^\\circ$ below the initial line.' },
        ],
        result: 'The electron leaves the plates deflected 0.35 mm downward at $2.0^\\circ$ \u2014 small on the plates, but amplified over the flight to a screen.',
      },
      {
        title: "A Point Charge in an Electric Field: point-charge field check",
        problem: "Find $E = kq/r^2$ at $20\\ \\text{cm}$ from a $3\\ \\mu\\text{C}$ point charge.",
        steps: [
          { label: "Substitute", text: "$E = 8.99\\times 10^9\\times 3\\times 10^{-6}/(0.2)^2$." },
          { label: "Compute", text: "$E \\approx 6.74\\times 10^{+5}\\ \\text{N/C}$ radially outward." },
        ],
        result: "$E \\approx 6.74\\times 10^{+5}\\ \\text{N/C}$.",
      },
    ],
    keyTakeaways: [
      '$\\vec F = q\\vec E$: same field, opposite pushes for opposite signs; mass never enters the force, only the response.',
      'Uniform field means constant acceleration \u2014 reuse the projectile equations with $a = qE/m$.',
      'Laboratory fields accelerate electrons at $10^{12}$\u2013$10^{14}$ gravities, so gravity is dropped without apology.',
    ],
    quiz: [
      {
        q: 'An electron sits in a field pointing east. Its acceleration is:',
        options: ['eastward', 'westward', 'upward', 'zero because electrons are light'],
        answer: 1,
        explanation: '$\\vec F = q\\vec E$ with $q = -e$ reverses the direction: the force (and acceleration) point west.',
      },
      {
        q: 'A proton and an electron are placed in the same uniform field. They experience:',
        options: ['forces of the same magnitude and the same acceleration', 'forces of the same magnitude; the electron accelerates about 1836 times more', 'the same acceleration but different-magnitude forces', 'no force until they move'],
        answer: 1,
        explanation: '$F = eE$ is the same for both, but $a = F/m$ and the proton is 1836 times heavier.',
      },
      {
        q: 'A charged particle crosses a uniform electric field region with its velocity perpendicular to $\\vec E$. Its path is:',
        options: ['a circle', 'a parabola', 'a straight line', 'a spiral'],
        answer: 1,
        explanation: 'Constant transverse acceleration plus constant forward velocity is exactly the projectile setup \u2014 a parabola (a circle needs a force that stays perpendicular to $\\vec v$).',
      },
      {
        q: 'In a field of $1.0\\times 10^{3}$ N/C, the magnitude of an electron\u2019s acceleration is about:',
        options: [`$1.8\\times 10^{14}\\ \\mathrm{m/s^2}$`, `$1.8\\times 10^{11}\\ \\mathrm{m/s^2}$`, `$1.8\\times 10^{8}\\ \\mathrm{m/s^2}$`, `$1.6\\times 10^{-16}\\ \\mathrm{m/s^2}$`],
        answer: 0,
        explanation: '$a = eE/m = (1.6\\times 10^{-19})(10^3)/(9.11\\times 10^{-31}) \\approx 1.8\\times 10^{14}\\ \\mathrm{m/s^2}$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 22-7
  {
    sectionId: 'hall-ch22-s7',
    readingTime: 6,
    intro: 'Put a dipole in a uniform field and the two charges feel equal and opposite forces \u2014 the net force is zero, but the pair twists. This is the torque that lines up compass needles, polar molecules, and the antennae of your radio physics course: $\\vec\\tau = \\vec p \\times \\vec E$, with a stored energy $U = -\\vec p\\cdot\\vec E$ that makes the alignment the state of lowest energy.',
    objectives: [
      'Show that a uniform field exerts zero net force but torque $\\tau = pE\\sin\\theta$ on a dipole',
      'Use $U = -\\vec p\\cdot\\vec E$ to find the work required to rotate a dipole',
      'Identify stable and unstable equilibrium orientations',
    ],
    concepts: [
      {
        term: 'Torque on a dipole',
        kind: 'theorem',
        statement: "**In a uniform field a dipole feels torque** $$\\vec\\tau = \\vec p \\times \\vec E,\\qquad |\\tau| = pE\\sin\\theta,$$ where $\\theta$ is the angle between $\\vec p$ and $\\vec E$. The torque vanishes at $\\theta = 0$ (stable) and $\\theta = 180^\\circ$ (unstable), and is maximal at $\\theta = 90^\\circ$.",
        detail: 'Each charge feels $qE$ in opposite directions a lever arm apart; the couple\u2019s moment arm is $d\\sin\\theta$, giving $\\tau = qE\\,d\\sin\\theta = pE\\sin\\theta$.',
      },
      {
        term: 'Dipole potential energy',
        kind: 'theorem',
        statement: '**A dipole in a uniform field stores** $$U = -\\vec p\\cdot\\vec E = -pE\\cos\\theta,$$ with the zero chosen at $\\theta = 90^\\circ$. Energy is lowest aligned with the field and highest anti-aligned \u2014 flipping a dipole costs $2pE$.',
      },
      {
        term: 'Zero net force, nonzero torque',
        kind: 'insight',
        statement: '**A uniform field grabs the dipole by both ends and twists but does not translate it.** Net force requires a non-uniform field ($F_z = p\\,dE/dz$ in the simple aligned case) \u2014 the reason microwave ovens need oscillating gradients and tips of charged rods collect dust.',
      },
      {
        term: 'Work to rotate',
        kind: 'method',
        statement: '**External work to turn a dipole from $\\theta_i$ to $\\theta_f$ is** $$W = \\Delta U = pE(\\cos\\theta_i - \\cos\\theta_f).$$ Turn it from aligned to anti-aligned and you deposit $2pE$ of potential energy, all recoverable on release.',
      },
      {
        term: "A Dipole in an Electric Field: solution protocol",
        kind: "method",
        statement: "**Solve A Dipole in an Electric Field problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the electric field and dipoles; the working equation is $\\vec E = \\vec F/q_0$, $E = kq/r^2$, $\\vec\\tau = \\vec p\\times\\vec E$, $U = -\\vec p\\cdot\\vec E$; every substitution must carry its units so the final unit ($\\text{N/C}$ ($\\text{V/m}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E\\sim 10^3$--$10^6\\ \\text{N/C}$ in textbook setups; small test charge; far-field dipole $1/r^3$ only for $z\\gg d$.",
      },
    ],
    examples: [
      {
        title: 'Twisting a molecular dipole',
        problem: "A molecule with dipole moment $p = 4.0\\times 10^{-30}\\ \\mathrm{C\\cdot m}$ sits perpendicular to a uniform field of $E = 2.0\\times 10^{4}$ N/C. Find the torque now, and the work required to flip it from aligned ($0^\\circ$) to anti-aligned ($180^\\circ$).",
        steps: [
          { label: 'Torque at 90\u00b0', text: '$\\tau = pE\\sin 90^\\circ = (4.0\\times 10^{-30})(2.0\\times 10^{4})(1) = 8.0\\times 10^{-26}$ N·m \u2014 the maximum.' },
          { label: 'Energy change', text: '$\\Delta U = -pE(\\cos 180^\\circ - \\cos 0^\\circ) = -pE(-1 - 1) = 2pE$.' },
          { label: 'Evaluate', text: '$W = 2pE = 2(4.0\\times 10^{-30})(2.0\\times 10^{4}) = 1.6\\times 10^{-25}$ J.' },
          { label: 'Scale it', text: 'Divided by $k_BT \\approx 4.1\\times 10^{-21}$ J at room temperature, $2pE/k_BT \\approx 4\\times 10^{-5}$ \u2014 thermal jostling overwhelms the alignment at ordinary fields, which is why water\u2019s molecular dipoles stay scrambled until very strong fields or low temperatures.' },
        ],
        result: 'Torque $8.0\\times 10^{-26}$ N·m; flip work $1.6\\times 10^{-25}$ J \u2014 real, but tiny compared with thermal energy.',
      },
      {
        title: "A Dipole in an Electric Field: point-charge field check",
        problem: "Find $E = kq/r^2$ at $25\\ \\text{cm}$ from a $4\\ \\mu\\text{C}$ point charge.",
        steps: [
          { label: "Substitute", text: "$E = 8.99\\times 10^9\\times 4\\times 10^{-6}/(0.25)^2$." },
          { label: "Compute", text: "$E \\approx 5.75\\times 10^{+5}\\ \\text{N/C}$ radially outward." },
        ],
        result: "$E \\approx 5.75\\times 10^{+5}\\ \\text{N/C}$.",
      },
    ],
    keyTakeaways: [
      'Uniform field: zero net force on an ideal dipole, but torque $\\tau = pE\\sin\\theta$ that drives alignment.',
      '$U = -pE\\cos\\theta$; aligned is stable, anti-aligned unstable, flip costs $2pE$.',
      'A net translational force needs a non-uniform field.',
    ],
    quiz: [
      {
        q: 'The net force on an ideal dipole in a perfectly uniform electric field is:',
        options: [`$qE$`, 'zero', `$pE$`, `$2qE$`],
        answer: 1,
        explanation: 'The two charges feel equal and opposite forces: translation cancels, rotation remains.',
      },
      {
        q: 'The torque on a dipole is maximal when the angle between $\\vec p$ and $\\vec E$ is:',
        options: [`$0^\\circ$`, `$45^\\circ$`, `$90^\\circ$`, `$180^\\circ$`],
        answer: 2,
        explanation: '$\\tau = pE\\sin\\theta$ peaks at $\\sin\\theta = 1$.',
      },
      {
        q: 'The external work needed to rotate a dipole from aligned to anti-aligned is:',
        options: ['zero', `$pE$`, `$2pE$`, `$\\pi pE$`],
        answer: 2,
        explanation: '$W = \\Delta U = 2pE$, since $U$ goes from $-pE$ to $+pE$.',
      },
      {
        q: 'A dipole can experience a net translational force when:',
        options: ['the field is uniform and strong', 'the field is non-uniform', 'it is perfectly aligned', 'its charges are equal in magnitude'],
        answer: 1,
        explanation: 'Equal and opposite forces hold only in uniform fields; gradients make one side feel more than the other.',
      },
    ],
  },
]
