import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e (Extended)
// Chapter 13 — Gravitation (HRW pp. 354–385)
// 8 sections: 13.1 Newton's law · 13.2 superposition · 13.3 near Earth ·
// 13.4 inside Earth (shell theorem) · 13.5 potential energy · 13.6 Kepler ·
// 13.7 satellite orbits and energy · 13.8 Einstein and gravitation
// ============================================================================

export const hallCh13Content: SectionContent[] = [
  // ------------------------------------------------------------------ 13.1
  {
    sectionId: 'hall-ch13-s1',
    readingTime: 5,
    intro: "Newton's masterstroke in the Principia (1687) was to claim that the force pulling an apple to the ground and the force holding the Moon in its orbit are one and the same. The law he proposed is breathtakingly simple — every pair of masses attracts along the line joining them — and it turned the heavens into a machine that calculus could predict. This section states the law, meets its constant $G$, and gets a feel for the size of the force.",
    objectives: [
      "State Newton's law of gravitation with the correct direction, proportionality, and constant",
      "Evaluate gravitational forces between real astronomical bodies",
      "Explain why the weakest fundamental force nevertheless rules the cosmos",
    ],
    concepts: [
      {
        term: "Newton's law of gravitation",
        kind: 'law',
        statement: "**Every particle attracts every other particle with a force along the line joining them, proportional to the product of their masses and inversely proportional to the square of their separation:** $$F = G\\,\\frac{m_1 m_2}{r^2}.$$ The force is always attractive, never repulsive.",
        detail: "For extended spherical bodies (Earth, Sun, a uniform ball), $r$ is measured center to center — a shortcut justified by the shell theorem of Section 13-4. The law is universal: the same $G$ works for apples, moons, and galaxies.",
      },
      {
        term: 'The gravitational constant',
        kind: 'definition',
        statement: "$$G = 6.67\\times10^{-11}\\ \\mathrm{N\\cdot m^2/kg^2}$$ is the gravitational constant, measured by Henry Cavendish in 1798 with a torsion balance — 111 years after the law was published.",
        detail: "Because $G$ is tiny, gravity between laboratory objects is almost immeasurably small. Cavendish's measurement of $G$ instantly gave the mass of the Earth, $M_E = gR^2/G$ — which is why his experiment is remembered as weighing the Earth.",
      },
      {
        term: 'Inverse-square falloff',
        kind: 'insight',
        statement: "Tripling the separation cuts the force to $1/9$; halving it multiplies the force by 4. The $1/r^2$ dependence is the signature of a force that spreads out over spheres of area $4\\pi r^2$.",
        detail: "Because the same total flux of influence threads ever-larger spheres, its intensity per unit area dies as $r^{-2}$. Newton tested this against the Moon: the Moon is 60 Earth radii away, and $9.8/60^2 = 2.7\\times10^{-3}\\ \\mathrm{m/s^2}$ — exactly the Moon's orbital centripetal acceleration.",
      },
      {
        term: 'Gravity among the forces',
        kind: 'insight',
        statement: "Gravitation is by far the **weakest** of the fundamental interactions (about $10^{38}$ times weaker than the strong force between two protons), yet it structures the universe because it is **always attractive and has infinite range**.",
        detail: "Electric charge comes in two signs and cancels; mass only comes in one sign, so gravity accumulates relentlessly over astronomical amounts of matter. In ordinary life gravity matters only because the Earth beneath you is enormously massive.",
      },
      {
        term: "Newton's Law of Gravitation: solution protocol",
        kind: "method",
        statement: "**Solve Newton's Law of Gravitation problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Newton gravitation with superposition and the shell theorem; the working equation is $F = Gm_1m_2/r^2$, $G = 6.67\\times 10^{-11}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2$, $U = -GMm/r$, $T^2 = 4\\pi^2r^3/GM$; every substitution must carry its units so the final unit ($\\text{N}$, $\\text{J}$, years for $T$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{esc}} = 11.2\\ \\text{km/s}$; $g = 9.8\\ \\text{m/s}^2$ at the surface; point masses or spherical symmetry (shell theorem); outside or $r\\gg$ size.",
      },
    ],
    examples: [
      {
        title: 'The Sun–Earth pull',
        problem: "The Sun ($M = 1.99\\times10^{30}$ kg) and Earth ($m = 5.97\\times10^{24}$ kg) are separated by $r = 1.496\\times10^{11}$ m, center to center. (a) What gravitational force does the Sun exert on Earth? (b) Compare with the Moon's pull on Earth ($m_{Moon} = 7.35\\times10^{22}$ kg at $r_{Moon} = 3.84\\times10^{8}$ m).",
        steps: [
          { label: 'Write the law', text: "$F = Gm_1 m_2/r^2$ with $G = 6.67\\times10^{-11}\\ \\mathrm{N\\cdot m^2/kg^2}$." },
          { label: 'Substitute for the Sun', text: "Numerator: $(6.67\\times10^{-11})(1.99\\times10^{30})(5.97\\times10^{24}) = 7.92\\times10^{44}$. Denominator: $(1.496\\times10^{11})^2 = 2.24\\times10^{22}$." },
          { label: 'Sun–Earth result', text: "$F = 7.92\\times10^{44}/2.24\\times10^{22} \\approx 3.5\\times10^{22}$ N." },
          { label: 'Moon for comparison', text: "$F_{Moon} = (6.67\\times10^{-11})(7.35\\times10^{22})(5.97\\times10^{24})/(3.84\\times10^{8})^2 \\approx 2.0\\times10^{20}$ N." },
        ],
        result: "$F_{Sun} \\approx 3.5\\times10^{22}$ N — about 178 times the Moon's $2.0\\times10^{20}$ N. Gravity governs the planets because the masses are astronomical, not because the force is strong between everyday objects.",
      },
      {
        title: "Newton's Law of Gravitation: orbit weight check",
        problem: "A $1500\\ \\text{kg}$ satellite orbits $400\\ \\text{km}$ above Earth ($r \\approx 6.77\\times 10^6\\ \\text{m}$). What gravitational force holds it?",
        steps: [
          { label: "Formula", text: "$F = GMm/r^2$ with $GM = 3.98\\times 10^{14}\\ \\text{m}^3/\\text{s}^2$." },
          { label: "Substitute", text: "$F = 3.98\\times 10^{14}\\times 1500/(6.77\\times 10^6)^2$." },
          { label: "Compute", text: "$F \\approx 13000\\ \\text{N}$ ($8.69\\ \\text{m/s}^2$, about $0.89g$)." },
        ],
        result: "$F \\approx 13000\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      "$F = Gm_1m_2/r^2$ along the line joining the two masses, always attractive.",
      "$G = 6.67\\times10^{-11}\\ \\mathrm{N\\cdot m^2/kg^2}$ was measured by Cavendish and lets us compute the Earth's mass.",
      "Gravity is the weakest interaction but never cancels, so it dominates astronomy.",
    ],
    quiz: [
      {
        q: "If the separation between two point masses is tripled, the gravitational force between them becomes:",
        options: ['one-third as large', 'one-sixth as large', 'one-ninth as large', 'one-twenty-seventh as large'],
        answer: 2,
        explanation: 'The force is proportional to $1/r^2$; tripling $r$ divides $F$ by $3^2 = 9$.',
      },
      {
        q: "Cavendish's 1798 measurement of G is called weighing the Earth because it first allowed computation of:",
        options: ["Earth's mass from $M_E = gR^2/G$", 'the distance from Earth to the Moon', "the Sun\'s mass from Kepler's third law", 'a standard value of g in any laboratory'],
        answer: 0,
        explanation: 'With $G$, $g$, and $R$ measured, $M_E = gR^2/G$ follows immediately — a mass no scale could ever weigh directly.',
      },
      {
        q: "Both masses in a pair are doubled and the center-to-center separation is also doubled. The gravitational force is:",
        options: ['halved', 'unchanged', 'doubled', 'quadrupled'],
        answer: 1,
        explanation: 'The mass factor gives $2\\times2 = 4$ in the numerator; the distance factor gives $2^2 = 4$ in the denominator. They cancel.',
      },
      {
        q: 'Gravity structures the universe despite being the weakest interaction because it:',
        options: ['acts instantaneously', 'is always attractive and has infinite range, so it accumulates over huge masses', 'is carried by photons', 'dominates at nuclear distances'],
        answer: 1,
        explanation: 'There is no negative mass to cancel the attraction, so over astronomical amounts of matter gravity always wins in the end.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.2
  {
    sectionId: 'hall-ch13-s2',
    readingTime: 5,
    intro: "Newton's law gives the force between two particles. Real situations have three or more bodies: a planet tugged by a star and its sibling planets, a spacecraft feeling Earth and Moon at once. Gravitation obeys a principle of superposition: each pair interacts as if the others were not there, and the net force is the plain vector sum. All of multi-body gravitation is bookkeeping on top of that one rule.",
    objectives: [
      'Compute net gravitational forces by componentwise vector addition',
      'Exploit symmetry to predict when forces cancel',
      'Explain when an extended body may be treated as a point mass',
    ],
    concepts: [
      {
        term: 'Principle of superposition',
        kind: 'law',
        statement: "**Gravitational forces add as vectors.** The net force on particle 1 is $$\\vec F_{1,net} = \\sum_{j=2}^{N} \\vec F_{1j},$$ where each $\\vec F_{1j} = -Gm_1m_j\\,\\hat r_{1j}/r_{1j}^2$ is computed as if the other particles were absent.",
        detail: 'Gravity is linear in its sources. Nature does not let one planet shield or modify another planet\u2019s pull — you simply keep adding arrows, one per pair, with signs and components carrying all the geometry.',
      },
      {
        term: 'The component recipe',
        kind: 'method',
        statement: 'For each source body $j$: compute $F_{1j} = Gm_1m_j/r_{1j}^2$, resolve it into components along your axes with the geometry of the layout, then sum the $x$-components and $y$-components separately before recombining into magnitude and direction.',
        detail: 'A sketch with all force arrows drawn away from the target particle is the essential first step. Errors in these problems are almost always sign errors, not arithmetic errors.',
      },
      {
        term: 'Symmetry cancellations',
        kind: 'insight',
        statement: 'When identical masses sit symmetrically about the target, the net force can vanish: at the midpoint between two equal masses the pulls cancel exactly, and three equal masses at the corners of an equilateral triangle each feel a resultant aimed at the centroid.',
        detail: 'Lagrange exploited such cancellations: there exist points (L1–L5) in the Sun–Earth system where gravitational pulls and orbital motion balance, and modern telescopes park there.',
      },
      {
        term: 'Spheres as point masses',
        kind: 'theorem',
        statement: 'A uniform sphere (or any spherically symmetric mass distribution) attracts an external particle **as if all its mass were concentrated at its center**.',
        detail: 'This is half of the shell theorem proved in Section 13-4. It is why the $r$ in the law of gravitation may be taken center-to-center for planets and stars, and why Newton could apply his law to the Moon even though Earth is not a point.',
      },
      {
        term: "Gravitation and the Principle of Superposition: solution protocol",
        kind: "method",
        statement: "**Solve Gravitation and the Principle of Superposition problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Newton gravitation with superposition and the shell theorem; the working equation is $F = Gm_1m_2/r^2$, $G = 6.67\\times 10^{-11}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2$, $U = -GMm/r$, $T^2 = 4\\pi^2r^3/GM$; every substitution must carry its units so the final unit ($\\text{N}$, $\\text{J}$, years for $T$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{esc}} = 11.2\\ \\text{km/s}$; $g = 9.8\\ \\text{m/s}^2$ at the surface; point masses or spherical symmetry (shell theorem); outside or $r\\gg$ size.",
      },
    ],
    examples: [
      {
        title: 'Net force from two nearby masses',
        problem: "A $m_3 = 20$ kg sphere sits at the origin. A $m_1 = 500$ kg sphere is at $(-0.30, 0)$ m and a $m_2 = 300$ kg sphere is at $(0, +0.40)$ m. Find the net gravitational force on $m_3$.",
        steps: [
          { label: 'Geometry', text: 'Distances: $r_1 = 0.30$ m (along $-x$), $r_2 = 0.40$ m (along $+y$). Pulls point from $m_3$ toward each source.' },
          { label: 'Force from m₁', text: "$F_1 = (6.67\\times10^{-11})(500)(20)/(0.30)^2 = 7.41\\times10^{-6}$ N in the $-\\hat{x}$ direction." },
          { label: 'Force from m₂', text: "$F_2 = (6.67\\times10^{-11})(300)(20)/(0.40)^2 = 2.50\\times10^{-6}$ N in the $+\\hat{y}$ direction." },
          { label: 'Vector sum', text: "$F = \\sqrt{(7.41)^2 + (2.50)^2}\\times10^{-6} = 7.82\\times10^{-6}$ N, at $\\tan^{-1}(2.50/7.41) = 18.7^{\\circ}$ above the $-x$ axis." },
        ],
        result: "A net force of $7.8\\times10^{-6}$ N — a whisper, even though half a tonne of matter is within half a meter. Gravity is genuinely weak.",
      },
      {
        title: "Gravitation and the Principle of Superposition: orbit weight check",
        problem: "A $2000\\ \\text{kg}$ satellite orbits $400\\ \\text{km}$ above Earth ($r \\approx 6.77\\times 10^6\\ \\text{m}$). What gravitational force holds it?",
        steps: [
          { label: "Formula", text: "$F = GMm/r^2$ with $GM = 3.98\\times 10^{14}\\ \\text{m}^3/\\text{s}^2$." },
          { label: "Substitute", text: "$F = 3.98\\times 10^{14}\\times 2000/(6.77\\times 10^6)^2$." },
          { label: "Compute", text: "$F \\approx 17400\\ \\text{N}$ ($8.69\\ \\text{m/s}^2$, about $0.89g$)." },
        ],
        result: "$F \\approx 17400\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      'Net gravitational force = vector sum of the individual pair forces.',
      'Sum components separately; geometry errors live in the signs.',
      'Symmetry can kill whole force terms before any arithmetic begins.',
    ],
    quiz: [
      {
        q: 'A particle sits exactly at the midpoint between two identical masses. The net gravitational force on it is:',
        options: ['directed toward the nearer mass', 'zero', 'directed along the perpendicular bisector', 'twice the force from one mass'],
        answer: 1,
        explanation: 'The two equal-magnitude pulls point in opposite directions along the same line, so they cancel exactly.',
      },
      {
        q: 'Three equal masses sit at the corners of an equilateral triangle. The net force on any one of them due to the other two points:',
        options: ['along a side, toward either neighbor', 'toward the centroid of the triangle', 'away from the centroid', 'parallel to the opposite side'],
        answer: 1,
        explanation: 'The two equal pulls add along the angle bisector by symmetry — which is the line from that vertex to the centroid.',
      },
      {
        q: 'To find the net gravitational force on body 1 from bodies 2 and 3, you should:',
        options: ['add the two force magnitudes', 'add the magnitudes and keep the sign of the larger', 'add the force vectors component by component', 'use only the nearest body'],
        answer: 2,
        explanation: 'Superposition is vector addition; magnitudes alone would be correct only if the forces happened to be collinear.',
      },
      {
        q: 'A uniform sphere attracts an external particle as if:',
        options: ['its mass were spread along the line joining it to the particle', 'all its mass were concentrated at its center', 'only the half of the sphere facing the particle acted', 'the force fell off as $1/r$'],
        answer: 1,
        explanation: 'This is the shell theorem (Section 13-4), and it licenses center-to-center $r$ in the law of gravitation for planets and stars.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.3
  {
    sectionId: 'hall-ch13-s3',
    readingTime: 5,
    intro: "Near Earth's surface the free-fall acceleration $g$ is the gravitational pull of the planet divided by your mass — which means the same law that moves the Moon fixes how fast an apple falls. Applied at the surface, the law predicts $g$ from Earth's mass and radius. It also predicts precisely how $g$ weakens with altitude, and — comparing with measurement — reveals that the real Earth is lumpy, spinning, and inhomogeneous.",
    objectives: [
      "Derive $g = GM/R^2$ from the law of gravitation and check it against $9.8\\ \\mathrm{m/s^2}$",
      'Compute $g$ at a given altitude above the surface',
      'Explain the observed variation of $g$ over Earth\u2019s surface',
    ],
    concepts: [
      {
        term: 'g from the law of gravitation',
        kind: 'method',
        statement: "Setting the gravitational force on a mass $m$ equal to $mg$ at Earth's surface gives $$g = \\frac{GM_E}{R^2} = \\frac{(6.67\\times10^{-11})(5.98\\times10^{24})}{(6.37\\times10^{6})^2} \\approx 9.8\\ \\mathrm{m/s^2}.$$ The mass of the falling body cancels — all bodies fall alike.",
        detail: 'That $m$ cancels is the equality of gravitational and inertial mass, an experimental fact Newton took as given and Einstein would later elevate to a founding principle (Section 13-8).',
      },
      {
        term: 'Altitude correction',
        kind: 'method',
        statement: "At height $h$ above the surface, $$g(h) = \\frac{GM_E}{(R_E+h)^2}.$$ At the space shuttle's $h = 300$ km this still gives $g \\approx 9.0\\ \\mathrm{m/s^2}$ — 91% of the surface value.",
        detail: 'Astronauts float not because gravity is absent up there but because they and their spacecraft are in perpetual free fall around the Earth. Weightlessness is free fall, not zero-$g$.',
      },
      {
        term: 'Variation over the surface',
        kind: 'insight',
        statement: "Measured $g$ runs from $9.780\\ \\mathrm{m/s^2}$ at the equator to $9.832\\ \\mathrm{m/s^2}$ at the poles, because the spinning Earth bulges at the equator (surface farther from the center) and because rotation must supply centripetal acceleration there.",
        detail: 'Both effects make the equatorial $g$ about 0.052 m/s² smaller. Mountains, ocean trenches, and density contrasts in the crust add finer ripples of order $10^{-5}$ m/s².',
      },
      {
        term: 'Gravimetric prospecting',
        kind: 'insight',
        statement: "A gravimeter trekking across countryside measures tiny local changes in $g$ that map density contrasts below: heavy ore bodies pull slightly harder, salt domes and oil traps pull slightly weaker.",
        detail: 'This is superposition in the field: the local value of $g$ is the vector sum of the contribution of the whole Earth plus the anomaly of the buried body.',
      },
      {
        term: "Gravitation Near Earth's Surface: solution protocol",
        kind: "method",
        statement: "**Solve Gravitation Near Earth's Surface problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Newton gravitation with superposition and the shell theorem; the working equation is $F = Gm_1m_2/r^2$, $G = 6.67\\times 10^{-11}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2$, $U = -GMm/r$, $T^2 = 4\\pi^2r^3/GM$; every substitution must carry its units so the final unit ($\\text{N}$, $\\text{J}$, years for $T$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{esc}} = 11.2\\ \\text{km/s}$; $g = 9.8\\ \\text{m/s}^2$ at the surface; point masses or spherical symmetry (shell theorem); outside or $r\\gg$ size.",
      },
    ],
    examples: [
      {
        title: 'g at shuttle altitude',
        problem: "What is the free-fall acceleration at the altitude of a satellite orbiting $h = 300$ km above Earth's surface ($M_E = 5.98\\times10^{24}$ kg, $R_E = 6.37\\times10^{6}$ m)?",
        steps: [
          { label: 'Form the constant', text: "$GM_E = (6.67\\times10^{-11})(5.98\\times10^{24}) = 3.99\\times10^{14}\\ \\mathrm{m^3/s^2}$." },
          { label: 'Radius at altitude', text: "$r = R_E + h = 6.37\\times10^{6} + 3.00\\times10^{5} = 6.67\\times10^{6}$ m." },
          { label: 'Apply the law', text: "$g = GM_E/r^2 = 3.99\\times10^{14}/(6.67\\times10^{6})^2 = 3.99\\times10^{14}/4.45\\times10^{13}$." },
          { label: 'Compare with surface', text: '$g \\approx 8.96\\ \\mathrm{m/s^2}$, which is $8.96/9.82 \\approx 91\\%$ of the sea-level value.' },
        ],
        result: "$g \\approx 8.96\\ \\mathrm{m/s^2}$ at 300 km. Orbiting astronauts feel nothing not because gravity has faded but because they fall with their ship.",
      },
      {
        title: "Gravitation Near Earth's Surface: orbit weight check",
        problem: "A $2500\\ \\text{kg}$ satellite orbits $400\\ \\text{km}$ above Earth ($r \\approx 6.77\\times 10^6\\ \\text{m}$). What gravitational force holds it?",
        steps: [
          { label: "Formula", text: "$F = GMm/r^2$ with $GM = 3.98\\times 10^{14}\\ \\text{m}^3/\\text{s}^2$." },
          { label: "Substitute", text: "$F = 3.98\\times 10^{14}\\times 2500/(6.77\\times 10^6)^2$." },
          { label: "Compute", text: "$F \\approx 21700\\ \\text{N}$ ($8.69\\ \\text{m/s}^2$, about $0.89g$)." },
        ],
        result: "$F \\approx 21700\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      "$g = GM_E/R_E^2$ at the surface; the falling mass cancels.",
      "$g$ falls off as $1/r^2$ from Earth's center: only 9% weaker at 300 km.",
      'Latitude and density variations make $g$ a measurably local quantity.',
    ],
    quiz: [
      {
        q: 'At an altitude of one Earth radius above the surface (distance $2R_E$ from the center), the free-fall acceleration is:',
        options: [`$g/2$`, `$g/\\sqrt{2}$`, `$g/4$`, `$2g$`],
        answer: 2,
        explanation: 'Doubling the distance from the center divides $g$ by $2^2 = 4$.',
      },
      {
        q: 'g is smaller at the equator than at the poles mainly because:',
        options: [
          'the equatorial surface is farther from the center and rotation supplies part of the needed centripetal acceleration',
          'the oceans are deeper at the equator',
          'the equator receives more sunlight',
          'air pressure is lower at the poles',
        ],
        answer: 0,
        explanation: 'The bulge (larger $R$) and the centrifugal requirement (rotation) both reduce the measured $g$ at the equator by a combined 0.052 m/s².',
      },
      {
        q: 'A planet has the same mass as Earth but twice the radius. Its surface gravitational acceleration is:',
        options: [`$4g$`, `$2g$`, `$g/4$`, `$g/2$`],
        answer: 2,
        explanation: '$g = GM/R^2$; doubling $R$ with $M$ fixed divides $g$ by four.',
      },
      {
        q: 'Gravimeters can detect buried ore bodies because:',
        options: [
          'ore changes the local value of $G$',
          'a dense body adds a small extra pull to the local $g$, while a low-density body subtracts from it',
          'ore magnetically shields gravity',
          '$g$ depends on the time of day',
        ],
        answer: 1,
        explanation: 'Superposition: the buried anomaly adds its own inverse-square contribution to the background field of the Earth.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.4
  {
    sectionId: 'hall-ch13-s4',
    readingTime: 6,
    intro: "What does Earth weigh when you are inside it? Newton proved a result so elegant it deserves its own name: a uniform spherical shell of matter exerts no net gravitational force on a particle inside it, while outside the shell pulls as if all its mass sat at the center. Together these two statements — the shell theorem — turn gravitation inside a planet into a one-line computation, and they even make the fantasy of a gravity train through the Earth a solvable physics problem.",
    objectives: [
      'State both halves of the shell theorem and their consequence for computing forces',
      "Compute $g$ inside a uniform Earth as a function of $r$",
      'Treat the through-Earth tunnel as simple harmonic motion',
    ],
    concepts: [
      {
        term: 'Shell theorem, part 1 (outside)',
        kind: 'theorem',
        statement: 'A uniform shell of matter attracts a particle **outside** it as if the entire shell\u2019s mass were concentrated at its center. Any spherically symmetric body is a nest of such shells, so planets and stars may be treated as point masses for external bodies.',
        detail: 'The proof integrates the vector contributions of shell elements over the sphere; the transverse components cancel pairwise and the radial pieces assemble exactly into $GmM_{shell}/r^2$.',
      },
      {
        term: 'Shell theorem, part 2 (inside)',
        kind: 'theorem',
        statement: 'A uniform shell of matter exerts **no net force** on a particle located anywhere inside it. Every pull from the near wall is exactly canceled by the combined pull of the more distant, but more extensive, far wall.',
        detail: 'The cancellation is a geometric miracle of the inverse-square law: it fails for any other force law. Inside a hollow planet you would float in permanent free fall at the center of a bottomless well.',
      },
      {
        term: 'g inside a uniform Earth',
        kind: 'method',
        statement: "At radius $r < R$ only the mass interior to you pulls (the outer shells cancel), and that interior mass is $M(r) = M_E\\,(r/R)^3$. So $$g(r) = \\frac{GM(r)}{r^2} = \\frac{GM_E}{R^3}\\,r = g_{surface}\\frac{r}{R}:$$ **linear in $r$, zero at the center.**",
        detail: 'Down you go, more mass is left behind you and less lies beneath: $g$ decreases smoothly from 9.8 m/s² at the surface to zero at the center — for a uniform planet.',
      },
      {
        term: 'The real Earth',
        kind: 'insight',
        statement: "The real Earth is not uniform: the iron core is about twice as dense as the mantle, so $g$ actually **increases** as you descend, peaking near $10.7\\ \\mathrm{m/s^2}$ at the core–mantle boundary before falling to zero at the center.",
        detail: 'Seismology reads this density profile from earthquake waves; gravitation fixes its consequences. Uniform-density modeling is the idealization to be refined, not the truth.',
      },
      {
        term: "Gravitation Inside Earth: solution protocol",
        kind: "method",
        statement: "**Solve Gravitation Inside Earth problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Newton gravitation with superposition and the shell theorem; the working equation is $F = Gm_1m_2/r^2$, $G = 6.67\\times 10^{-11}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2$, $U = -GMm/r$, $T^2 = 4\\pi^2r^3/GM$; every substitution must carry its units so the final unit ($\\text{N}$, $\\text{J}$, years for $T$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{esc}} = 11.2\\ \\text{km/s}$; $g = 9.8\\ \\text{m/s}^2$ at the surface; point masses or spherical symmetry (shell theorem); outside or $r\\gg$ size.",
      },
    ],
    figures: [
      {
        caption: "Free-fall acceleration $g$ versus distance $r$ from the center for an idealized uniform Earth: $g = GMr/R^3$ rises linearly from zero at the center to $GM/R^2$ at the surface, then joins the inverse-square $1/r^2$ falloff outside. For the real (denser-cored) Earth the interior curve bulges above this line, peaking near $10.7\\ \\mathrm{m/s^2}$ at the core–mantle boundary.",
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="g versus r for a uniform Earth: linear inside, inverse-square outside">
  <rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/>
  <polygon points="80,300 360,60 370,76 380,91 400,116 440,155 480,182 520,203 560,218 600,230 640,240 640,300" fill="currentColor" opacity="0.07"/>
  <line x1="80" y1="300" x2="672" y2="300" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="300" x2="80" y2="42" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="295" x2="80" y2="305" stroke="currentColor" stroke-width="2"/>
  <line x1="360" y1="295" x2="360" y2="305" stroke="currentColor" stroke-width="2"/>
  <line x1="640" y1="295" x2="640" y2="305" stroke="currentColor" stroke-width="2"/>
  <text x="80" y="326" font-size="15" fill="currentColor" text-anchor="middle">0</text>
  <text x="360" y="326" font-size="15" fill="currentColor" text-anchor="middle">R</text>
  <text x="640" y="326" font-size="15" fill="currentColor" text-anchor="middle">2R</text>
  <text x="668" y="320" font-size="16" fill="currentColor">r</text>
  <text x="72" y="48" font-size="16" fill="currentColor" text-anchor="end">g</text>
  <line x1="360" y1="60" x2="360" y2="300" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.5"/>
  <line x1="80" y1="60" x2="360" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.5"/>
  <text x="86" y="52" font-size="14" fill="currentColor">g(R) = 9.8 m/s²</text>
  <circle cx="360" cy="60" r="4" fill="currentColor"/>
  <line x1="80" y1="300" x2="360" y2="60" stroke="currentColor" stroke-width="3"/>
  <polyline points="360,60 370,76 380,91 400,116 440,155 480,182 520,203 560,218 600,230 640,240" fill="none" stroke="currentColor" stroke-width="3"/>
  <text x="150" y="214" font-size="15" fill="currentColor" transform="rotate(-41 150 214)">inside: g = GMr/R³ ∝ r</text>
  <text x="452" y="126" font-size="15" fill="currentColor" transform="rotate(27 452 126)">outside: g ∝ 1/r²</text>
  <text x="360" y="352" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.8">uniform-density Earth (idealized): linear inside, inverse-square outside</text>
</svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'The through-Earth gravity train',
        problem: 'A straight tunnel is bored through the center of a uniform-density Earth ($R_E = 6.37\\times10^{6}$ m). A package is dropped in. Show that its motion is simple harmonic and find the one-way travel time to the antipodes.',
        steps: [
          { label: 'Force inside', text: 'By the shell theorem only the mass interior to the package pulls, so $g(r) = (GM_E/R_E^3)\\,r$ — proportional to the displacement $s$ from the center and pointing back toward it.' },
          { label: 'Recognize SHM', text: '$a = -(GM_E/R_E^3)s$ matches $a = -\\omega^2 s$ with $\\omega = \\sqrt{GM_E/R_E^3} = \\sqrt{g/R_E}$.' },
          { label: 'Period', text: "$T = 2\\pi\\sqrt{R_E/g} = 2\\pi\\sqrt{6.37\\times10^{6}/9.8} = 5.06\\times10^{3}$ s $\\approx 84$ min." },
          { label: 'One-way trip', text: 'The antipodes are reached at half a period: about 42 min. At the center the speed is $\\omega R_E = \\sqrt{gR_E} = 7.9$ km/s — exactly the surface orbital speed.' },
        ],
        result: 'A 42-minute ride to the far side of the planet, independent of the tunnel length through the center — the same physics Chapter 15 develops as simple harmonic motion.',
      },
      {
        title: "Gravitation Inside Earth: orbit weight check",
        problem: "A $1000\\ \\text{kg}$ satellite orbits $400\\ \\text{km}$ above Earth ($r \\approx 6.77\\times 10^6\\ \\text{m}$). What gravitational force holds it?",
        steps: [
          { label: "Formula", text: "$F = GMm/r^2$ with $GM = 3.98\\times 10^{14}\\ \\text{m}^3/\\text{s}^2$." },
          { label: "Substitute", text: "$F = 3.98\\times 10^{14}\\times 1000/(6.77\\times 10^6)^2$." },
          { label: "Compute", text: "$F \\approx 8690\\ \\text{N}$ ($8.69\\ \\text{m/s}^2$, about $0.89g$)." },
        ],
        result: "$F \\approx 8690\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      'Shell theorem: outside, a shell acts as a point mass; inside, it exerts no net force at all.',
      'Only the mass interior to your radius pulls you inward.',
      'Uniform Earth: $g = g_s r/R$ linear inside; the real Earth\u2019s dense core raises the interior curve.',
    ],
    quiz: [
      {
        q: 'Inside a uniform spherical shell of matter, the net gravitational force on a particle placed anywhere inside the shell is:',
        options: ['directed toward the center', 'zero', 'directed toward the nearest wall', 'proportional to the distance from the center'],
        answer: 1,
        explanation: 'Near-wall pulls are weaker but the far wall has more of them; for an inverse-square force the cancellation is exact.',
      },
      {
        q: 'For a uniform-density Earth, the value of $g$ at $r = R/2$ from the center is:',
        options: ['$9.8$ m/s²', '$4.9$ m/s²', '$2.45$ m/s²', '$19.6$ m/s²'],
        answer: 1,
        explanation: 'Inside a uniform sphere $g$ is linear in $r$: at half the radius it is half the surface value.',
      },
      {
        q: 'A package dropped into a frictionless tunnel through the center of a uniform Earth will:',
        options: ['fall with constant acceleration 9.8 m/s² until it reaches the center', 'oscillate in simple harmonic motion with a period of about 84 min', 'come permanently to rest at the center', 'fly out the far side and escape'],
        answer: 1,
        explanation: 'The restoring force is proportional to displacement from the center — the definition of SHM — with $T = 2\\pi\\sqrt{R/g} \\approx 84$ min.',
      },
      {
        q: 'In the real Earth, $g$ increases slightly as you descend from the surface because:',
        options: [
          'the shell theorem fails for nonuniform bodies',
          'the dense iron core means the mass interior to you shrinks more slowly than $r^2$',
          'the mantle is liquid',
          'the centrifugal effect reverses underground',
        ],
        answer: 1,
        explanation: '$g = GM(r)/r^2$ grows when $M(r)$ falls more slowly than $r^2$ — which is what a dense core guarantees until near the center.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.5
  {
    sectionId: 'hall-ch13-s5',
    readingTime: 6,
    intro: "Near Earth's surface we wrote $U = mgy$, but that linear formula is a local approximation to something deeper: the exact potential energy of gravitation falls off as $-1/r$ and is defined to be zero only at infinite separation. The negative sign is not decoration — it is what makes orbits, escape speeds, and the very notion of a bound system quantitative. This section builds that exact energy function and puts it to work.",
    objectives: [
      'Use $U = -Gm_1m_2/r$ with its zero at infinite separation',
      'Derive and compute escape speeds',
      'Apply energy conservation to motion in a gravitational field',
    ],
    concepts: [
      {
        term: 'Gravitational potential energy',
        kind: 'definition',
        statement: "For two masses separated by $r$, $$U = -\\,\\frac{Gm_1 m_2}{r},$$ with the arbitrary zero chosen at $r = \\infty$ (where $U = 0$).",
        detail: 'Because $U$ approaches zero from below as $r$ grows, any finite separation stores negative energy. Pulling masses apart requires positive work — gravity is attractive, so separation costs energy.',
      },
      {
        term: 'Why the sign matters',
        kind: 'insight',
        statement: 'The negative sign encodes binding: a system with **total** energy $E = K + U < 0$ cannot separate to infinity (where $K \\ge 0 = U$), and is therefore bound. Escape is exactly the condition $E = 0$.',
        detail: 'The choice $U(\\infty) = 0$ is what makes this bookkeeping universal — every bound system in the universe, atom to galaxy cluster, is negative-total-energy by this convention.',
      },
      {
        term: 'Path independence',
        kind: 'theorem',
        statement: "The work done by gravity moving a mass from $r_2$ to $r_1$ is $$W = Gm_1m_2\\!\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right),$$ independent of the path taken — gravitation is a **conservative** force.",
        detail: 'Only the endpoints appear, so $U$ is a genuine state function and $W = -\\Delta U$ for any route, curved or straight, thrown or lowered.',
      },
      {
        term: 'Escape speed',
        kind: 'method',
        statement: "Setting $K = -U$ at the surface: $$v_{esc} = \\sqrt{\\frac{2GM}{R}} = 11.2\\ \\mathrm{km/s}$$ for Earth — independent of the projectile's mass and launch direction.",
        detail: 'The Moon\u2019s smaller $M/R$ gives 2.4 km/s, which is why gas molecules escaping lunar gravity stripped its atmosphere, while Earth\u2019s 11.2 km/s retains most gases.',
      },
      {
        term: "Gravitational Potential Energy: solution protocol",
        kind: "method",
        statement: "**Solve Gravitational Potential Energy problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Newton gravitation with superposition and the shell theorem; the working equation is $F = Gm_1m_2/r^2$, $G = 6.67\\times 10^{-11}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2$, $U = -GMm/r$, $T^2 = 4\\pi^2r^3/GM$; every substitution must carry its units so the final unit ($\\text{N}$, $\\text{J}$, years for $T$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{esc}} = 11.2\\ \\text{km/s}$; $g = 9.8\\ \\text{m/s}^2$ at the surface; point masses or spherical symmetry (shell theorem); outside or $r\\gg$ size.",
      },
    ],
    examples: [
      {
        title: 'Escape from Earth — and a partial climb',
        problem: "(a) What launch speed escapes Earth's gravity from the surface? (b) A projectile is instead launched straight up at 5.0 km/s. How high does it coast before falling back? ($GM_E = 3.99\\times10^{14}$, $R_E = 6.37\\times10^{6}$ m.)",
        steps: [
          { label: 'Escape condition', text: 'Escape means arriving at infinity with zero speed: $\\tfrac12 mv^2 - GM_Em/R_E = 0$, so $v = \\sqrt{2GM_E/R_E}$.' },
          { label: 'Numbers', text: "$v = \\sqrt{2(3.99\\times10^{14})/6.37\\times10^{6}} = \\sqrt{1.25\\times10^{8}} = 1.12\\times10^{4}$ m/s $= 11.2$ km/s." },
          { label: 'Part (b): conserve energy', text: '$\\tfrac12 v_0^2 - GM_E/R_E = -GM_E/r_{max}$, so $r_{max} = 1/\\left(\\frac{1}{R_E} - \\frac{v_0^2}{2GM_E}\\right)$.' },
          { label: 'Evaluate', text: 'With $v_0 = 5.0\\times10^{3}$ m/s: $r_{max} = 1/(1.57\\times10^{-7} - 3.14\\times10^{-8}) = 7.96\\times10^{6}$ m — an altitude of $1.6\\times10^{6}$ m.' },
        ],
        result: '11.2 km/s to escape forever; at 5.0 km/s the projectile peaks only 1600 km up and falls back. Energy bookkeeping decides everything.',
      },
      {
        title: "Gravitational Potential Energy: orbit weight check",
        problem: "A $1500\\ \\text{kg}$ satellite orbits $400\\ \\text{km}$ above Earth ($r \\approx 6.77\\times 10^6\\ \\text{m}$). What gravitational force holds it?",
        steps: [
          { label: "Formula", text: "$F = GMm/r^2$ with $GM = 3.98\\times 10^{14}\\ \\text{m}^3/\\text{s}^2$." },
          { label: "Substitute", text: "$F = 3.98\\times 10^{14}\\times 1500/(6.77\\times 10^6)^2$." },
          { label: "Compute", text: "$F \\approx 13000\\ \\text{N}$ ($8.69\\ \\text{m/s}^2$, about $0.89g$)." },
        ],
        result: "$F \\approx 13000\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      '$U = -Gm_1m_2/r$ with $U(\\infty) = 0$; gravitation is conservative.',
      '$E < 0$ means bound; $E = 0$ is the escape boundary.',
      "Escape speed from Earth is 11.2 km/s, independent of mass or direction.",
    ],
    quiz: [
      {
        q: 'The gravitational potential energy of a two-body system is negative because:',
        options: [
          'gravity does negative work',
          'the zero is chosen at infinite separation and bound systems have $E < 0$ by that convention',
          'the masses carry negative gravitational charge',
          'all potential energies are negative',
        ],
        answer: 1,
        explanation: 'Convention plus binding: it takes positive work to raise $U$ to zero at infinity, so every finite-separation state sits below zero.',
      },
      {
        q: 'The escape speed from a planet depends on:',
        options: ['the mass of the escaping projectile', 'the planet\u2019s mass and radius only', 'the direction of launch', 'the speed the projectile has at infinity'],
        answer: 1,
        explanation: '$v = \\sqrt{2GM/R}$ — energy conservation cancels the projectile mass, and any direction works because escape depends on energy alone.',
      },
      {
        q: "A probe's gravitational potential energy at $r = 2R$ from a planet's center is $-40$ MJ. Moving it to $r = 4R$ changes $U$ to:",
        options: ['$-20$ MJ', '$-10$ MJ', '$-80$ MJ', '$+20$ MJ'],
        answer: 0,
        explanation: '$U \\propto -1/r$: doubling $r$ halves the magnitude, from $-40$ MJ to $-20$ MJ.',
      },
      {
        q: "With $U_{surface} = -6.3\\times10^{9}$ J for a 100 kg object at Earth's surface, the work an external agent must supply to move it to infinity is:",
        options: ['$+6.3\\times10^{9}$ J', '$-6.3\\times10^{9}$ J', '$+6.3\\times10^{11}$ J', 'zero'],
        answer: 0,
        explanation: 'To end at $U = 0$ from $U = -6.3\\times10^{9}$ J the agent adds exactly $+6.3\\times10^{9}$ J (gravity does $-6.3\\times10^{9}$ J).',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.6
  {
    sectionId: 'hall-ch13-s6',
    readingTime: 7,
    intro: "Tycho Brahe's naked-eye data and Kepler\'s twenty years of curve-fitting produced three laws of planetary motion a full generation before Newton explained them. Newton's triumph was to show that all three laws are not separate empirical facts but corollaries of the inverse-square law plus conservation of angular momentum. This section states the three laws and derives them from gravitation — the masters tier carries the complete derivation.",
    objectives: [
      'State Kepler\u2019s three laws precisely',
      'Explain the second law as angular momentum conservation',
      'Use the law of periods to weigh a central body',
    ],
    concepts: [
      {
        term: 'First law: the law of orbits',
        kind: 'law',
        statement: '**Each planet moves in an ellipse with the Sun at one focus.** The orbit is a closed curve with the Sun off-center, not a circle.',
        detail: 'The eccentricity $e = c/a$ (focus offset over semi-major axis) measures the departure from circularity: Earth\u2019s $e = 0.017$ is nearly round; Halley\u2019s comet has $e = 0.967$.',
      },
      {
        term: 'Second law: the law of areas',
        kind: 'law',
        statement: 'The line from the Sun to a planet sweeps out **equal areas in equal times**: the planet speeds up near perihelion and slows near aphelion.',
        detail: 'This is conservation of angular momentum in disguise: since the gravitational force is central (zero torque about the Sun), $L = mrv_\\perp$ is constant, and the areal velocity $dA/dt = L/2m$ is constant with it.',
      },
      {
        term: 'Third law: the law of periods',
        kind: 'law',
        statement: "For all bodies orbiting the same central mass, $$\\frac{T^2}{a^3} = \\frac{4\\pi^2}{GM}$$ is the same constant, where $a$ is the semi-major axis.",
        detail: 'In solar units ($T$ in years, $a$ in AU) the constant is 1 for everything orbiting the Sun — a planet, an asteroid, a comet. The law measures the central mass: $M = 4\\pi^2a^3/GT^2$.',
      },
      {
        term: 'Ellipse vocabulary',
        kind: 'notation',
        statement: 'An ellipse has semi-major axis $a$, semi-minor axis $b$, and focal offset $c = \\sqrt{a^2 - b^2}$; the Sun sits at a focus. Closest approach is **perihelion** ($r_p = a - c$), farthest is **aphelion** ($r_a = a + c$).',
        detail: 'The mean of $r_p$ and $r_a$ is exactly $a$ — which is why the semi-major axis, not the average distance in time, appears in the third law.',
      },
      {
        term: "Planets and Satellites: Kepler's Laws: solution protocol",
        kind: "method",
        statement: "**Solve Planets and Satellites: Kepler's Laws problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Newton gravitation with superposition and the shell theorem; the working equation is $F = Gm_1m_2/r^2$, $G = 6.67\\times 10^{-11}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2$, $U = -GMm/r$, $T^2 = 4\\pi^2r^3/GM$; every substitution must carry its units so the final unit ($\\text{N}$, $\\text{J}$, years for $T$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{esc}} = 11.2\\ \\text{km/s}$; $g = 9.8\\ \\text{m/s}^2$ at the surface; point masses or spherical symmetry (shell theorem); outside or $r\\gg$ size.",
      },
    ],
    figures: [
      {
        caption: "Kepler's first two laws: the orbit is an ellipse with the Sun at a focus, and the radius vector sweeps equal areas in equal times. The fat wedge near perihelion and the needle-thin wedge near aphelion contain the same area — so the planet races through the near-Sun end of its orbit and crawls through the far end.",
        svg: `<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Elliptical orbit with Sun at one focus and two equal-area wedges">
  <rect x="0" y="0" width="720" height="380" fill="currentColor" opacity="0"/>
  <line x1="110" y1="180" x2="610" y2="180" stroke="currentColor" stroke-width="1" stroke-dasharray="6 5" opacity="0.35"/>
  <ellipse cx="360" cy="180" rx="250" ry="150" fill="currentColor" opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
  <line x1="352" y1="180" x2="368" y2="180" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
  <line x1="360" y1="172" x2="360" y2="188" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
  <polygon points="560,180 594.8,128.6 606.2,153.9 610,180 606.2,206.1 594.8,231.4" fill="currentColor" opacity="0.18" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="560,180 110.1,176.3 110.1,183.7" fill="currentColor" opacity="0.18" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <circle cx="160" cy="180" r="3.5" fill="currentColor" opacity="0.5"/>
  <circle cx="560" cy="180" r="6.5" fill="currentColor"/>
  <text x="572" y="168" font-size="15" fill="currentColor">Sun</text>
  <text x="572" y="186" font-size="13" fill="currentColor" opacity="0.7">(focus)</text>
  <circle cx="605" cy="150.2" r="4.5" fill="currentColor"/>
  <circle cx="115" cy="209.8" r="4.5" fill="currentColor"/>
  <line x1="605" y1="150" x2="592" y2="112" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="592,112 588,121 598,121" fill="currentColor"/>
  <line x1="115" y1="210" x2="102" y2="248" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="102,248 98,239 108,239" fill="currentColor"/>
  <text x="588" y="182" font-size="13" fill="currentColor">ΔA</text>
  <text x="335" y="168" font-size="13" fill="currentColor">ΔA</text>
  <line x1="360" y1="152" x2="606" y2="152" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="360,152 368,148 368,156" fill="currentColor"/>
  <polygon points="606,152 598,148 598,156" fill="currentColor"/>
  <text x="483" y="144" font-size="14" fill="currentColor" text-anchor="middle">a</text>
  <text x="610" y="100" font-size="14" fill="currentColor" text-anchor="end">perihelion (fastest)</text>
  <text x="145" y="292" font-size="14" fill="currentColor" text-anchor="middle">aphelion (slowest)</text>
  <text x="360" y="352" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.85">both shaded wedges have equal area and are swept in equal times</text>
</svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Weighing the Sun',
        problem: "Earth orbits the Sun in $T = 365.26$ days at $r = 1.496\\times10^{11}$ m. Use Kepler's third law to compute the Sun\'s mass.",
        steps: [
          { label: 'Solve for M', text: 'From $T^2 = 4\\pi^2r^3/GM$: $M = 4\\pi^2r^3/GT^2$.' },
          { label: 'Powers of ten', text: '$r^3 = 3.35\\times10^{33}\\ \\mathrm{m^3}$; $T = 3.156\\times10^{7}$ s so $T^2 = 9.96\\times10^{14}\\ \\mathrm{s^2}$.' },
          { label: 'Assemble', text: 'Numerator $4\\pi^2r^3 = 1.32\\times10^{35}$; denominator $GT^2 = 6.64\\times10^{4}$.' },
          { label: 'Result', text: '$M = 1.99\\times10^{30}$ kg — about 333,000 Earth masses.' },
        ],
        result: 'A balance never touched the Sun; a stopwatch and a ruler (plus $G$) weighed it. As a check, Halley\u2019s comet ($a = 17.8$ AU) should have $T = 17.8^{3/2} = 75$ yr — observed: 76 yr.',
      },
      {
        title: "Planets and Satellites: Kepler's Laws: orbit weight check",
        problem: "A $2000\\ \\text{kg}$ satellite orbits $400\\ \\text{km}$ above Earth ($r \\approx 6.77\\times 10^6\\ \\text{m}$). What gravitational force holds it?",
        steps: [
          { label: "Formula", text: "$F = GMm/r^2$ with $GM = 3.98\\times 10^{14}\\ \\text{m}^3/\\text{s}^2$." },
          { label: "Substitute", text: "$F = 3.98\\times 10^{14}\\times 2000/(6.77\\times 10^6)^2$." },
          { label: "Compute", text: "$F \\approx 17400\\ \\text{N}$ ($8.69\\ \\text{m/s}^2$, about $0.89g$)." },
        ],
        result: "$F \\approx 17400\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      'Orbits are ellipses with the central body at one focus.',
      'Equal areas in equal times = conservation of angular momentum for a central force.',
      '$T^2 = 4\\pi^2a^3/GM$ — the ratio $T^2/a^3$ is the same for everything orbiting a given mass.',
    ],
    quiz: [
      {
        q: "Kepler's second law (equal areas in equal times) follows directly from:",
        options: [
          'conservation of linear momentum',
          'the force being central, so the torque about the Sun is zero and angular momentum is conserved',
          'the small eccentricity of planetary orbits',
          'the law of periods',
        ],
        answer: 1,
        explanation: 'Zero torque gives constant $L$, and the areal velocity equals $L/2m$ — so swept area accumulates at a constant rate.',
      },
      {
        q: 'A planet orbits a star of solar mass with semi-major axis 4 AU. Its period is:',
        options: ['2 yr', '4 yr', '8 yr', '16 yr'],
        answer: 2,
        explanation: 'In years and AU, $T = a^{3/2} = 4^{3/2} = 8$ yr.',
      },
      {
        q: 'A planet in an elliptical orbit moves fastest:',
        options: ['at aphelion', 'at perihelion', 'crossing the minor axis', 'nowhere — the speed is constant'],
        answer: 1,
        explanation: 'Constant areal velocity demands larger $v$ where $r$ is smallest.',
      },
      {
        q: 'The ratio $T^2/a^3$ is the same for every planet orbiting the Sun because it equals:',
        options: ['$4\\pi^2/GM_s$, depending only on the Sun\u2019s mass', 'a universal constant of nature like $G$', 'the planet\u2019s mass', 'the orbital eccentricity'],
        answer: 0,
        explanation: 'The law of periods: the planet\u2019s own mass cancels out of the derivation.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: "Kepler's three laws, derived from Newton\'s law of gravitation",
        blocks: [
          {
            kind: 'para',
            heading: 'What Newton actually proved',
            body: "Kepler found the laws in data; Newton found them in one formula. The program: gravity is the only force, it is central, and it is inverse-square. Everything below uses $M$ for the Sun, $m$ for the planet, and assumes $M \\gg m$ so the Sun sits (nearly) at the focus; the final remark repairs even that assumption.",
          },
          {
            kind: 'theorem',
            heading: 'Second law ⇔ angular momentum conservation',
            body: "Because $\\vec F$ is always antiparallel to $\\vec r$, the torque about the Sun is $\\vec\\tau = \\vec r \\times \\vec F = 0$, so $\\vec L = \\vec r \\times m\\vec v$ is constant in magnitude and direction — the orbit lies in a fixed plane. In time $dt$ the radius sweeps a triangle of area $dA = \\tfrac12 |\\vec r \\times \\vec v|\\,dt = \\tfrac{L}{2m}dt$, hence $$\\frac{dA}{dt} = \\frac{L}{2m} = \\text{const.}$$ Kepler\u2019s second law is angular momentum conservation wearing astronomical clothes; it holds for **any** central force, inverse-square or not.",
          },
          {
            kind: 'derivation',
            heading: 'Third law for circular orbits',
            body: 'Gravity supplies the centripetal force: $GMm/r^2 = m\\omega^2 r$. With $\\omega = 2\\pi/T$, $$T^2 = \\frac{4\\pi^2}{GM}r^3.$$ Two lessons hide in one line: the planet\u2019s mass cancels (heavy and light worlds orbit alike), and the constant depends only on the central mass — so $T^2/r^3$ is a fingerprint of whatever is being orbited.',
          },
          {
            kind: 'derivation',
            heading: 'Third law for elliptical orbits',
            body: 'Cover the ellipse by area: its area is $\\pi ab$ and the areal rate is $L/2m$, so $T = 2\\pi m ab/L$. Evaluate $L$ at perihelion, where $r_p = a(1-e)$. Energy conservation between perihelion and aphelion gives $v_p^2 = GM\\,(1+e)/\\big(a(1-e)\\big)$, and therefore $$L^2 = m^2v_p^2r_p^2 = GMm^2\\,a(1-e)(1+e) = GMm^2\\,\\frac{b^2}{a}$$ (using $b^2 = a^2(1-e^2)$). Substituting, $$T^2 = \\frac{4\\pi^2m^2a^2b^2}{L^2} = \\frac{4\\pi^2m^2a^2b^2}{GMm^2b^2/a} = \\frac{4\\pi^2a^3}{GM}.$$ The $b$ and the planetary mass both cancel: **only the semi-major axis sets the period**. A circle and a needle-thin ellipse with the same $a$ keep the same time.',
          },
          {
            kind: 'derivation',
            heading: 'First law: conics from Newton\u2019s second law',
            body: 'With $u \\equiv 1/r$, the orbital equation $m(\\ddot r - r\\dot\\theta^2) = -GMm/r^2$ combined with $L = mr^2\\dot\\theta$ collapses to a harmonic-oscillator equation in the angular variable: $$\\frac{d^2u}{d\\theta^2} + u = \\frac{GMm^2}{L^2},\\quad\\text{with solution}\\quad u(\\theta) = \\frac{GMm^2}{L^2}\\big(1 + e\\cos(\\theta - \\theta_0)\\big).$$ That is exactly the polar equation of a conic section with one focus at the force center and eccentricity $$e = \\sqrt{1 + \\frac{2EL^2}{G^2M^2m^3}}.$$ So the sign of the total energy fixes the orbit\u2019s very shape: $E < 0 \\Rightarrow e < 1$, an ellipse (Kepler\u2019s first law); $E = 0 \\Rightarrow e = 1$, a parabola; $E > 0 \\Rightarrow e > 1$, a hyperbola. Boundness and geometry are the same statement.',
          },
          {
            kind: 'remark',
            heading: 'The two-body repair, and history',
            body: 'When the planet\u2019s mass is not negligible, $M$ is replaced by $M + m$: $T^2 = 4\\pi^2a^3/G(M+m)$. Astronomers exploit this to weigh binary stars and unseen companions — the wobble of a star plus the third law has revealed thousands of exoplanets. Historically, Newton\u2019s derivation, published in the Principia (1687) as a running argument with geometric limits instead of calculus, united Kepler\u2019s laws, Galileo\u2019s projectile paths, and the tides in one scheme; Halley bet on it, financed its printing, and used it to predict his comet\u2019s 1758 return — arriving right on schedule, sixteen years after his death.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 13.7
  {
    sectionId: 'hall-ch13-s7',
    readingTime: 6,
    intro: 'Orbiting is falling that keeps missing. Newton\u2019s mountain-top cannonball thought experiment becomes quantitative here: circular orbits follow from one line of Newton\u2019s second law, and their energies obey a striking trio of relations — kinetic energy positive, potential twice as negative, total exactly half the potential. Satellites, space stations, and geosynchronous communications platforms are all applications of these formulas.',
    objectives: [
      'Derive orbital speed and period for a circular orbit',
      'Use the relations $E = -K$, $U = 2E$ for circular orbits',
      'Explain what sets a geosynchronous orbit',
    ],
    concepts: [
      {
        term: 'Orbital speed and period',
        kind: 'method',
        statement: "Gravity as centripetal force gives, for a circular orbit of radius $r$, $$v = \\sqrt{\\frac{GM}{r}}, \\qquad T = \\frac{2\\pi r}{v} = 2\\pi\\sqrt{\\frac{r^3}{GM}}.$$ Higher orbits are slower and take longer.",
        detail: 'Note what is absent: the satellite\u2019s own mass. A hammer and the ISS fly in formation if released at the same altitude and speed.',
      },
      {
        term: 'The energy trio',
        kind: 'theorem',
        statement: "For a circular orbit, $$U = -\\frac{GMm}{r},\\qquad K = +\\frac{GMm}{2r},\\qquad E = -\\frac{GMm}{2r},$$ so **$U = 2E$ and $K = -E$**: the total energy is negative (bound) with magnitude exactly half the kinetic energy.",
        detail: 'Astonishing consequence: to raise a satellite to a higher orbit you must **add** energy, yet it then orbits **slower** — the added energy goes into climbing the potential well, with a factor left over that reduces $K$.',
      },
      {
        term: 'Bound and unbound orbits',
        kind: 'insight',
        statement: 'The sign of $E$ names the conic: $E < 0$ gives a closed ellipse (circle as special case); $E = 0$ a parabolic escape; $E > 0$ a hyperbolic flyby. Circular orbits are the lowest-energy ellipses of a given angular momentum family.',
        detail: 'This unifies Section 13-6\u2019s eccentricity formula with mission design: interplanetary probes are launched onto hyperbolic departure trajectories from Earth.',
      },
      {
        term: 'Geosynchronous orbit',
        kind: 'insight',
        statement: 'A satellite that must hover over one equatorial spot needs its period to equal one sidereal day, $T = 86{,}164$ s. The third law then demands $r \\approx 4.22\\times10^{7}$ m — about 42,000 km from Earth\u2019s center, 35,800 km above the equator.',
        detail: 'That single ring is prime real estate: TV, weather, and communication satellites all must share it, which is why orbital slots are internationally licensed.',
      },
      {
        term: "Satellites: Orbits and Energy: solution protocol",
        kind: "method",
        statement: "**Solve Satellites: Orbits and Energy problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Newton gravitation with superposition and the shell theorem; the working equation is $F = Gm_1m_2/r^2$, $G = 6.67\\times 10^{-11}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2$, $U = -GMm/r$, $T^2 = 4\\pi^2r^3/GM$; every substitution must carry its units so the final unit ($\\text{N}$, $\\text{J}$, years for $T$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{esc}} = 11.2\\ \\text{km/s}$; $g = 9.8\\ \\text{m/s}^2$ at the surface; point masses or spherical symmetry (shell theorem); outside or $r\\gg$ size.",
      },
    ],
    examples: [
      {
        title: 'A 1000 kg satellite at two Earth radii',
        problem: 'A 1000 kg satellite is placed in a circular orbit of radius $r = 2R_E = 1.274\\times10^{7}$ m. Find its speed, period, kinetic, potential, and total energies, and the energy required to boost it to $3R_E$.',
        steps: [
          { label: 'Speed', text: '$v = \\sqrt{GM/r} = \\sqrt{3.99\\times10^{14}/1.274\\times10^{7}} = 5.59\\times10^{3}$ m/s $= 5.6$ km/s.' },
          { label: 'Period', text: '$T = 2\\pi r/v = 8.00\\times10^{7}/5.59\\times10^{3} = 1.43\\times10^{4}$ s $\\approx 4.0$ h.' },
          { label: 'Energies', text: '$K = \\tfrac12mv^2 = 1.56\\times10^{10}$ J; $U = -GMm/r = -3.13\\times10^{10}$ J; $E = -1.56\\times10^{10}$ J $= -K$.' },
          { label: 'Boost to 3R', text: '$E(3R) = -GMm/(2\\cdot 3R_E) = -1.04\\times10^{10}$ J, so $\\Delta E = E(3R) - E(2R) = +5.2\\times10^{9}$ J.' },
        ],
        result: 'Note the paradox resolved: $K(3R) = +1.04\\times10^{10}$ J is *less* than at $2R_E$ even though energy was added — the rest bought altitude.',
      },
      {
        title: "Satellites: Orbits and Energy: orbit weight check",
        problem: "A $2500\\ \\text{kg}$ satellite orbits $400\\ \\text{km}$ above Earth ($r \\approx 6.77\\times 10^6\\ \\text{m}$). What gravitational force holds it?",
        steps: [
          { label: "Formula", text: "$F = GMm/r^2$ with $GM = 3.98\\times 10^{14}\\ \\text{m}^3/\\text{s}^2$." },
          { label: "Substitute", text: "$F = 3.98\\times 10^{14}\\times 2500/(6.77\\times 10^6)^2$." },
          { label: "Compute", text: "$F \\approx 21700\\ \\text{N}$ ($8.69\\ \\text{m/s}^2$, about $0.89g$)." },
        ],
        result: "$F \\approx 21700\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      '$v = \\sqrt{GM/r}$ and $T = 2\\pi\\sqrt{r^3/GM}$ — independent of the satellite\u2019s mass.',
      'Circular orbit: $U = 2E$, $K = -E$, and $E < 0$ always.',
      'Raising an orbit adds energy while lowering the orbital speed.',
    ],
    quiz: [
      {
        q: 'For a satellite in a circular orbit, the energies satisfy:',
        options: [`$E = -K$ and $U = 2E$`, `$E = K + U > 0$`, `$K = U$`, `$U = -K$`],
        answer: 0,
        explanation: 'With $K = GMm/2r$, $U = -GMm/r$, $E = -GMm/2r$: the total is minus the kinetic and the potential is twice the total.',
      },
      {
        q: 'To move a satellite from a low circular orbit to a higher one, you must:',
        options: [
          'remove energy, since it will speed up',
          'add energy; $E = -GMm/2r$ becomes less negative',
          'fire only retro-rockets',
          'do nothing; orbits rise by themselves',
        ],
        answer: 1,
        explanation: 'Higher orbit = less negative $E$ = energy input, even though the final orbital speed is smaller.',
      },
      {
        q: 'The orbital speed of a satellite in a circular orbit of radius $4R_E$ about Earth, given 7.9 km/s at the surface radius, is:',
        options: ['3.95 km/s', '15.8 km/s', '7.9 km/s', '1.98 km/s'],
        answer: 0,
        explanation: '$v \\propto 1/\\sqrt{r}$: quadrupling $r$ halves the speed to 3.95 km/s.',
      },
      {
        q: 'A geosynchronous satellite must orbit:',
        options: [
          'at any latitude, at 300 km altitude',
          'in the equatorial plane, with a one-sidereal-day period at about 42,000 km radius',
          'over the poles at 800 km',
          'with any period at any altitude',
        ],
        answer: 1,
        explanation: 'To appear fixed over one spot the orbit must be equatorial (else it wanders north–south) and match Earth\u2019s rotation period, which fixes $r \\approx 42,200$ km.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.8
  {
    sectionId: 'hall-ch13-s8',
    readingTime: 5,
    intro: "Newton's law paints gravity as a force acting instantaneously across empty space — an action at a distance that Newton himself confessed he could not explain. Special relativity forbids anything, influence included, from outrunning light, and that forced a rebuild. Einstein\'s general relativity (1915) deletes the force entirely: mass curves spacetime, and free bodies simply follow the straightest available paths through the curved geometry. The old law survives as the low-speed, weak-field limit of a deeper theory.",
    objectives: [
      'State the principle of equivalence and its experimental status',
      'Describe gravity as curvature of spacetime rather than force',
      'Explain the relativistic corrections GPS must apply',
    ],
    concepts: [
      {
        term: 'The problem with action at a distance',
        kind: 'insight',
        statement: "Newton's formula responds to a mass's position *instantaneously*, but relativity caps all influence at the speed of light. If the Sun vanished this instant, Newton says Earth flies off at once; relativity says the news arrives only 8.3 minutes later.",
        detail: 'The discrepancy matters only when fields are strong or motions relativistic — which is exactly where Newton\u2019s predictions measurably fail.',
      },
      {
        term: 'Principle of equivalence',
        kind: 'definition',
        statement: '**Gravitational mass equals inertial mass.** Locally (in a small enough region), no experiment distinguishes uniform gravitation from uniform acceleration — a person in a windowless freely falling elevator feels exactly weightless, and a rocket accelerating at $g$ in deep space houses an ordinary physics laboratory.',
        detail: 'Eötvös tested the equality to parts in $10^9$; the MICROSCOPE satellite (2022) pushed it to a few parts in $10^{15}$. Because the two masses cancel, the equivalence principle is the reason all bodies fall alike — and it is the seed from which Einstein grew the whole theory.',
      },
      {
        term: 'Gravity as geometry',
        kind: 'insight',
        statement: 'In general relativity, mass–energy tells spacetime how to curve, and curved spacetime tells matter how to move: planets follow **geodesics** (straightest possible world-lines) through a geometry deformed by the Sun. What we call the gravitational force is the bookkeeping error of insisting on straight lines in a curved space.',
        detail: 'Light follows geodesics too: Eddington\u2019s 1919 eclipse expedition measured the 1.75″ deflection of starlight grazing the Sun, and **gravitational lensing** now maps dark matter by the same bending.',
      },
      {
        term: 'Relativistic tests and GPS',
        kind: 'insight',
        statement: 'Three classic confirmations exceed Newton: the 43″-per-century precession of Mercury\u2019s perihelion, light bending, and gravitational redshift/time dilation. Modern engineering lives inside them: GPS satellite clocks tick fast by 45.7 μs/day (weaker gravity at altitude) and slow by 7.1 μs/day (orbital motion), a net +38 μs/day that must be engineered away.',
        detail: 'Uncorrected, $38\\times10^{-6}$ s of clock error per day is a position error of $c\\,\\Delta t = 11.6$ km per day. Every GPS receiver is a working monument to both relativity theories.',
      },
      {
        term: "Einstein and Gravitation: solution protocol",
        kind: "method",
        statement: "**Solve Einstein and Gravitation problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Newton gravitation with superposition and the shell theorem; the working equation is $F = Gm_1m_2/r^2$, $G = 6.67\\times 10^{-11}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2$, $U = -GMm/r$, $T^2 = 4\\pi^2r^3/GM$; every substitution must carry its units so the final unit ($\\text{N}$, $\\text{J}$, years for $T$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{esc}} = 11.2\\ \\text{km/s}$; $g = 9.8\\ \\text{m/s}^2$ at the surface; point masses or spherical symmetry (shell theorem); outside or $r\\gg$ size.",
      },
    ],
    examples: [
      {
        title: 'GPS and the price of 38 microseconds',
        problem: 'A GPS satellite clock is effectively at a higher gravitational potential (+45.7 μs/day) and moving at orbital speed (−7.1 μs/day). If the net bias were left uncorrected, how far would a position fix drift per day?',
        steps: [
          { label: 'Net rate', text: '$\\Delta t = +45.7\\ \\mu\\mathrm{s} - 7.1\\ \\mu\\mathrm{s} = +38.6$ μs gained per day.' },
          { label: 'Convert to distance', text: 'Position error $\\approx c\\,\\Delta t = (3.00\\times10^{8}\\ \\mathrm{m/s})(38.6\\times10^{-6}\\ \\mathrm{s})$.' },
          { label: 'Evaluate', text: '$= 1.16\\times10^{4}$ m per day — about 11.6 km.' },
        ],
        result: 'Roughly 11.6 km of accumulated error per day: GPS would be useless within minutes without the onboard relativistic clock correction.',
      },
      {
        title: "Einstein and Gravitation: orbit weight check",
        problem: "A $1000\\ \\text{kg}$ satellite orbits $400\\ \\text{km}$ above Earth ($r \\approx 6.77\\times 10^6\\ \\text{m}$). What gravitational force holds it?",
        steps: [
          { label: "Formula", text: "$F = GMm/r^2$ with $GM = 3.98\\times 10^{14}\\ \\text{m}^3/\\text{s}^2$." },
          { label: "Substitute", text: "$F = 3.98\\times 10^{14}\\times 1000/(6.77\\times 10^6)^2$." },
          { label: "Compute", text: "$F \\approx 8690\\ \\text{N}$ ($8.69\\ \\text{m/s}^2$, about $0.89g$)." },
        ],
        result: "$F \\approx 8690\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      'Gravitational mass = inertial mass (verified to $\\sim10^{-15}$) is the principle of equivalence.',
      'General relativity replaces gravitational force with geodesic motion in curved spacetime.',
      'Newton\u2019s law is the weak-field, low-speed limit — but GPS proves daily that the corrections are real.',
    ],
    quiz: [
      {
        q: 'The principle of equivalence states that:',
        options: [
          'gravitational mass and inertial mass are equal, so uniform gravitation is locally indistinguishable from uniform acceleration',
          'gravity and electromagnetism unify at high energy',
          'all reference frames are equivalent',
          'mass and energy are the same thing',
        ],
        answer: 0,
        explanation: 'A freely falling lab and an unaccelerated lab far from all masses are locally identical — Einstein\u2019s elevator.',
      },
      {
        q: 'Which observation is explained by general relativity but not by Newtonian gravitation?',
        options: ["Kepler's third law", 'the 43″-per-century precession of Mercury\u2019s perihelion', 'ocean tides', 'the phases of the Moon'],
        answer: 1,
        explanation: 'Newton\u2019s theory leaves 43 arc seconds per century unaccounted; curved spacetime computes it exactly.',
      },
      {
        q: 'Overall, GPS satellite clocks run fast relative to ground clocks because:',
        options: [
          'they move faster',
          'they are lighter',
          'the weaker gravity at orbital altitude more than compensates the special-relativistic slowing, netting +38 μs per day',
          'satellite clocks are more accurate by construction',
        ],
        answer: 2,
        explanation: 'Gravitational blueshift (+45.7 μs/day) beats time dilation from motion (−7.1 μs/day).',
      },
      {
        q: 'In general relativity, a freely falling planet:',
        options: [
          'is pulled by a force through flat space',
          'follows a geodesic — the straightest possible path — through spacetime curved by the Sun',
          'violates energy conservation',
          'moves at constant speed',
        ],
        answer: 1,
        explanation: 'Matter curves geometry; geometry guides matter. Force language is the flat-space approximation.',
      },
      // PYQ-pattern: JEE Mains 2020 — gravitation field strength (rephrased, values changed)
      {
        q: 'Taking $g = 9.8 \\text{ m/s}^{2}$ at the surface of a uniform planet of radius $R$, the acceleration due to gravity at altitude $h = R$ above the surface is:',
        options: [`$9.8 \\text{ m/s}^{2}$`, `$4.9 \\text{ m/s}^{2}$`, `$0$`, `$2.45 \\text{ m/s}^{2}$`],
        answer: 3,
        explanation: 'Step 1: Given surface value $g = 9.8 \\text{ m/s}^{2}$ and center distance growing from $R$ to $2R$. Step 2: Governing law is the inverse square $g(r) = GM/r^{2}$, so $g$ scales as $1/r^{2}$. Step 3: Key equation: $$g(2R) = \\frac{GM}{(2R)^{2}} = \\frac{1}{4}\\frac{GM}{R^{2}} = \\frac{g}{4}.$$ Step 4: Numerics give $9.8/4 = 2.45 \\text{ m/s}^{2}$; units stay $\\text{m/s}^{2}$ and the value must fall with distance. Step 5: Distractors fail because $9.8$ ignores altitude, $4.9$ halves instead of quartering, and $0$ claims weightlessness outside the atmosphere. Step 6: Conclude gravity there is **$2.45 \\text{ m/s}^{2}$**.',
      },
      // PYQ-pattern: JEE Advanced 2019 — satellite period (rephrased, values changed)
      {
        q: 'A craft circles a planet in a low orbit of radius $r = 2R$, where $R = 6.37 \\times 10^{6} \\text{ m}$ is the planetary radius and $GM = 3.98 \\times 10^{14} \\text{ m}^{3}\\text{/s}^{2}$. Its orbital period is closest to:',
        options: [`$4.0 \\text{ h}$`, `$1.4 \\text{ h}$`, `$24 \\text{ h}$`, `$2.0 \\text{ h}$`],
        answer: 0,
        explanation: 'Step 1: Given $r = 2R = 1.274 \\times 10^{7} \\text{ m}$ and $GM = 3.98 \\times 10^{14} \\text{ m}^{3}\\text{/s}^{2}$. Step 2: Governing law is Kepler III from $mv^{2}/r = GMm/r^{2}$, giving $T = 2\\pi\\sqrt{r^{3}/GM}$. Step 3: Key equation: $$T = 2\\pi\\sqrt{\\frac{(1.274 \\times 10^{7})^{3}}{3.98 \\times 10^{14}}}.$$ Step 4: Numerics give $r^{3} \\approx 2.07 \\times 10^{21}$, ratio $\\approx 5.19 \\times 10^{6}$, root $\\approx 2278 \\text{ s}$, so $T \\approx 14300 \\text{ s} \\approx 4.0 \\text{ h}$; units of $\\sqrt{\\text{m}^{3}/(\\text{m}^{3}\\text{/s}^{2})}$ are seconds. Step 5: Distractors fail because $1.4 \\text{ h}$ is the surface-skimming period, $24 \\text{ h}$ assumes a stationary orbit, and $2.0 \\text{ h}$ halves the true value. Step 6: Conclude the period is about **$4.0 \\text{ h}$**.',
      },
      // PYQ-pattern: GATE PH 2021 — escape velocity (rephrased, values changed)
      {
        q: 'For a planet with surface orbital speed $7.9 \\text{ km/s}$, the escape speed from the surface is:',
        options: [`$7.9 \\text{ km/s}$`, `$15.8 \\text{ km/s}$`, `$11.2 \\text{ km/s}$`, `$5.6 \\text{ km/s}$`],
        answer: 2,
        explanation: 'Step 1: Given circular surface speed $v_{orb} = \\sqrt{GM/R} = 7.9 \\text{ km/s}$. Step 2: Governing law is energy balance $\\frac{1}{2}mv_{esc}^{2} = GMm/R$, so $v_{esc} = \\sqrt{2GM/R}$. Step 3: Key equation: $$v_{esc} = \\sqrt{2}\\,v_{orb} = (1.414)(7.9).$$ Step 4: Numerics give $v_{esc} \\approx 11.2 \\text{ km/s}$; units are $\\text{km/s}$ and escape must exceed orbital speed. Step 5: Distractors fail because $7.9$ is the bound orbital speed, $15.8$ doubles instead of scaling by $\\sqrt{2}$, and $5.6$ divides by $\\sqrt{2}$. Step 6: Conclude escape needs **$11.2 \\text{ km/s}$**.',
      },
      // PYQ-pattern: JEE Mains 2021 — orbital energy (rephrased, values changed)
      {
        q: 'A $1000 \\text{ kg}$ vehicle moves in a circular orbit of radius $r = 2R$ with $GM = 3.98 \\times 10^{14} \\text{ m}^{3}\\text{/s}^{2}$ and $R = 6.37 \\times 10^{6} \\text{ m}$. Its orbital kinetic energy is closest to:',
        options: [`$3.1 \\times 10^{10} \\text{ J}$`, `$1.6 \\times 10^{10} \\text{ J}$`, `$-1.6 \\times 10^{10} \\text{ J}$`, `$6.3 \\times 10^{10} \\text{ J}$`],
        answer: 1,
        explanation: 'Step 1: Given $m = 1000 \\text{ kg}$ and $r = 1.274 \\times 10^{7} \\text{ m}$. Step 2: Governing law combines $mv^{2}/r = GMm/r^{2}$ with $K = \\frac{1}{2}mv^{2}$, giving $K = GMm/2r$. Step 3: Key equation: $$K = \\frac{(3.98 \\times 10^{14})(1000)}{2(1.274 \\times 10^{7})}.$$ Step 4: Numerics give $K \\approx 1.56 \\times 10^{10} \\text{ J} \\approx 1.6 \\times 10^{10} \\text{ J}$; units $\\text{N}\\cdot\\text{m}$ are joules and kinetic energy must be positive. Step 5: Distractors fail because $3.1 \\times 10^{10}$ drops the half, $-1.6 \\times 10^{10}$ is the total energy $E = -K$, and $6.3 \\times 10^{10}$ uses the surface radius. Step 6: Conclude the orbital kinetic energy is about **$1.6 \\times 10^{10} \\text{ J}$**.',
      },
      // PYQ-pattern: JEE Advanced 2016 — geostationary orbit (rephrased, values changed)
      {
        q: 'A planet of radius $R$ spins with period $24 \\text{ h}$ and has $GM = 3.98 \\times 10^{14} \\text{ m}^{3}\\text{/s}^{2}$. The radius of the stationary orbit, in units of $R = 6.37 \\times 10^{6} \\text{ m}$, is closest to:',
        options: [`$6.6R$`, `$2.0R$`, `$60R$`, `$1.0R$`],
        answer: 0,
        explanation: 'Step 1: Given spin period $T = 86400 \\text{ s}$ and $GM = 3.98 \\times 10^{14} \\text{ m}^{3}\\text{/s}^{2}$. Step 2: Governing law is Kepler III $T^{2} = 4\\pi^{2}r^{3}/GM$ solved for $r$. Step 3: Key equation: $$r = \\left(\\frac{GMT^{2}}{4\\pi^{2}}\\right)^{1/3} = \\left(\\frac{(3.98 \\times 10^{14})(86400)^{2}}{4\\pi^{2}}\\right)^{1/3}.$$ Step 4: Numerics give $r \\approx 4.22 \\times 10^{7} \\text{ m}$, and dividing by $6.37 \\times 10^{6}$ yields $6.6R$; units of the cube root are meters. Step 5: Distractors fail because $2.0R$ is a low orbit, $60R$ is the lunar distance, and $1.0R$ sits on the surface. Step 6: Conclude the stationary orbit is at about **$6.6R$**.',
      },
      // PYQ-pattern: GATE PH 2017 — mass from surface gravity (rephrased, values changed)
      {
        q: 'A spherical body has radius $R = 3.40 \\times 10^{6} \\text{ m}$ and surface gravity $g = 3.70 \\text{ m/s}^{2}$. With $G = 6.67 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^{2}\\text{/kg}^{2}$, its mass is closest to:',
        options: [`$6.4 \\times 10^{22} \\text{ kg}$`, `$6.4 \\times 10^{24} \\text{ kg}$`, `$1.0 \\times 10^{23} \\text{ kg}$`, `$6.4 \\times 10^{23} \\text{ kg}$`],
        answer: 3,
        explanation: 'Step 1: Given $R = 3.40 \\times 10^{6} \\text{ m}$ and $g = 3.70 \\text{ m/s}^{2}$. Step 2: Governing law is $g = GM/R^{2}$, so $M = gR^{2}/G$. Step 3: Key equation: $$M = \\frac{(3.70)(3.40 \\times 10^{6})^{2}}{6.67 \\times 10^{-11}}.$$ Step 4: Numerics give $M = 4.28 \\times 10^{13}/6.67 \\times 10^{-11} \\approx 6.4 \\times 10^{23} \\text{ kg}$; units $(\\text{m/s}^{2})(\\text{m}^{2})/(\\text{N}\\cdot\\text{m}^{2}\\text{/kg}^{2})$ reduce to $\\text{kg}$. Step 5: Distractors fail because the $10^{22}$ and $10^{24}$ choices slip a power of ten and $1.0 \\times 10^{23}$ mis-squares the radius. Step 6: Conclude the mass is about **$6.4 \\times 10^{23} \\text{ kg}$**.',
      },
    ],
  },
]
