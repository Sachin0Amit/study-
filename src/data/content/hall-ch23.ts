import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 23
// Gauss' Law — sections 23-1 … 23-5 (ids hall-ch23-s1 … hall-ch23-s5)
// Core: Φ = ∫E·dA, ε₀Φ = q_enc, conductor results, the three standard
// geometries (sphere, line, sheet), and Coulomb's law recovered from Gauss.
// ============================================================================

export const hallCh23Content: SectionContent[] = [
  // ------------------------------------------------------------------ 23-1
  {
    sectionId: 'hall-ch23-s1',
    readingTime: 6,
    intro: "Before Gauss' law can be stated, electric flux must be defined: the measure of how much electric field passes through a surface, as a river's flow rate measures water crossing a gate. The picture that makes it intuitive is the field-line map \u2014 flux counts the net number of lines punching through the surface, signed by direction. This section defines flux, computes it for flat surfaces in uniform fields, and notes the crucial closed-surface fact: in a uniform field, inflow exactly cancels outflow.",
    objectives: [
      'Define electric flux as $\\Phi = \\int \\vec E\\cdot d\\vec A$ and give its units (N·m²/C)',
      'Compute the flux of a uniform field through a flat surface, $\\Phi = EA\\cos\\theta$',
      'Explain why the net flux through any closed surface in a uniform field is zero',
    ],
    concepts: [
      {
        term: 'Electric flux',
        kind: 'definition',
        statement: "**The electric flux through a surface is the surface integral of the perpendicular component of the field:** $$\\Phi = \\int \\vec E\\cdot d\\vec A,$$ a scalar with units $\\mathrm{N\\cdot m^2/C}$. Field lines entering the closed surface count negative, lines leaving count positive \u2014 flux is the signed count of field lines through the surface.",
      },
      {
        term: 'The area vector',
        kind: 'notation',
        statement: "**Each surface element carries an area vector $d\\vec A$: magnitude equal to the element\u2019s area, direction along its outward normal** (for closed surfaces, outward by convention). The dot product $\\vec E\\cdot d\\vec A = E\\,dA\\cos\\theta$ keeps only the field component that actually goes through.",
      },
      {
        term: 'Uniform field, flat surface',
        kind: 'theorem',
        statement: "**If $\\vec E$ is uniform and the surface is flat with area $A$, the flux is** $$\\Phi = EA\\cos\\theta,$$ where $\\theta$ is the angle between the field and the normal of the surface. Maximum flux when the field is perpendicular to the surface ($\\theta = 0$); zero when it skims along it ($\\theta = 90^\\circ$).",
      },
      {
        term: 'Closed surface in a uniform field',
        kind: 'insight',
        statement: '**A closed surface bathed in a uniform field has zero net flux.** Every field line that enters must also leave, so the incoming flux through one part of the surface is paid back by outgoing flux elsewhere; only surfaces that enclose charge can have nonzero net flux \u2014 the seed of Gauss\u2019 law.',
      },
      {
        term: "Electric Flux: solution protocol",
        kind: "method",
        statement: "**Solve Electric Flux problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric flux and Gauss's law; the working equation is $\\Phi = \\oint\\vec E\\cdot d\\vec A = q_{\\text{enc}}/\\varepsilon_0$, $\\varepsilon_0 = 8.85\\times 10^{-12}\\ \\text{C}^2/\\text{N}\\cdot\\text{m}^2$; every substitution must carry its units so the final unit ($\\text{N}\\cdot\\text{m}^2/\\text{C}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against flux $\\sim 10^3\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$ for $\\mu\\text{C}$; closed surface; symmetry to pull $E$ out of the integral.",
      },
    ],
    examples: [
      {
        title: 'Flux through a tilted disk',
        problem: "A uniform field of magnitude $E = 2.0\\times 10^{3}$ N/C passes through a circular disk of radius $8.0$ cm whose normal makes $60^\\circ$ with the field. Find the flux.",
        steps: [
          { label: 'Area', text: '$A = \\pi r^2 = \\pi(0.080)^2 = 2.0\\times 10^{-2}\\ \\mathrm{m^2}$.' },
          { label: 'Flux formula', text: '$\\Phi = EA\\cos\\theta = (2.0\\times 10^{3})(2.0\\times 10^{-2})\\cos 60^\\circ$.' },
          { label: 'Evaluate', text: '$\\Phi = 40\\times 0.50 = 20\\ \\mathrm{N\\cdot m^2/C}$.' },
          { label: 'Tilt it flat', text: 'Had the disk been perpendicular to the field ($\\theta = 0$), the flux would double to 40 N·m²/C; edge-on ($90^\\circ$) it would vanish.' },
        ],
        result: '$\\Phi = 20\\ \\mathrm{N\\cdot m^2/C}$ \u2014 the same disk catches half the field when tilted to $60^\\circ$.',
      },
      {
        title: "Electric Flux: flux numbers",
        problem: "A closed surface encloses $3\\ \\mu\\text{C}$. What is the outward flux?",
        steps: [
          { label: "Gauss", text: "$\\Phi = q_{\\text{enc}}/\\varepsilon_0$." },
          { label: "Substitute", text: "$\\Phi = 3\\times 10^{-6}/8.85\\times 10^{-12} = 3.39\\times 10^{+5}\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$." },
        ],
        result: "$\\Phi \\approx 3.39\\times 10^{+5}\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$.",
      },
    ],
    keyTakeaways: [
      'Flux is the signed count of field lines through a surface: $\\Phi = \\int\\vec E\\cdot d\\vec A$.',
      'Uniform field, flat surface: $\\Phi = EA\\cos\\theta$ with $\\theta$ measured from the normal.',
      'Any closed surface in a uniform field has zero net flux \u2014 only enclosed charge changes the count.',
    ],
    quiz: [
      {
        q: 'A uniform field is parallel to a flat surface (perpendicular to its normal). The flux through the surface is:',
        options: [`$EA$`, `$EA/2$`, 'zero', `$E/A$`],
        answer: 2,
        explanation: '$\\Phi = EA\\cos 90^\\circ = 0$: a field skimming along a surface crosses none of it.',
      },
      {
        q: 'Keeping $E$ and $A$ fixed, the surface normal is tilted from $30^\\circ$ to $60^\\circ$ relative to the field. The flux is multiplied by:',
        options: ['0.58', '1.15', '0.50', '2.0'],
        answer: 0,
        explanation: 'Ratio $= \\cos 60^\\circ/\\cos 30^\\circ = 0.50/0.866 \\approx 0.58$.',
      },
      {
        q: 'Electric flux is:',
        options: ['a vector along $\\vec E$', 'a scalar', 'a vector along the surface normal', 'always positive'],
        answer: 1,
        explanation: 'The dot product $\\vec E\\cdot d\\vec A$ produces a scalar, which can be positive, negative or zero.',
      },
      {
        q: 'A closed cube sits in a uniform electric field. The net flux through the cube is:',
        options: [`$6EA$`, 'positive, because the field enters', 'zero', '$q/\\varepsilon_0$ where $q$ is the charge producing the field'],
        answer: 2,
        explanation: 'Whatever enters one face leaves another: inflow and outflow cancel exactly, so the net flux is zero.',
      },
    ],
  },
  // ------------------------------------------------------------------ 23-2
  {
    sectionId: 'hall-ch23-s2',
    readingTime: 7,
    intro: "Gauss' law ties the net flux through any closed surface to the charge enclosed inside that surface: $\\varepsilon_0\\Phi = q_\\text{enc}$. It is one of Maxwell\u2019s four equations and the deepest statement of electrostatics \u2014 Coulomb\u2019s law is one of its corollaries. The key insights: flux counts charge, not field lines from outside charges, and the count is independent of the surface\u2019s shape and size.",
    objectives: [
      "State Gauss' law, $\\varepsilon_0\\Phi = q_\\text{enc}$, and apply it to compute flux from enclosed charge",
      'Explain why charges outside a closed surface contribute zero net flux, and why moving an enclosed charge around inside changes nothing',
      'Recognize when symmetry makes a Gaussian surface useful for finding $\\vec E$',
    ],
    concepts: [
      {
        term: "Gauss' law",
        kind: 'law',
        statement: "**The net electric flux through any closed surface equals the net charge enclosed, divided by $\\varepsilon_0$:** $$\\varepsilon_0 \\Phi = q_\\text{enc},\\qquad \\Phi = \\oint \\vec E\\cdot d\\vec A.$$ The surface can be any shape whatsoever \u2014 real or imagined \u2014 and only the charge inside it counts.",
        detail: 'The circle on the integral sign marks a closed surface. Lines from outside charges that enter must also exit, contributing equal negative and positive flux; their net contribution is exactly zero.',
      },
      {
        term: 'External charges contribute nothing',
        kind: 'insight',
        statement: '**A charge outside the surface bends and distorts the local field, but its field lines pass straight through: every entry is balanced by an exit.** Enclosed charge alone sets the net flux \u2014 which is why the law is about counting, not about geometry.',
      },
      {
        term: 'The concentric-sphere check',
        kind: 'insight',
        statement: '**Spheres of different radii around the same point charge all carry the same flux $q/\\varepsilon_0$.** Since the area grows as $4\\pi r^2$ while the field falls as $1/r^2$, the product stays fixed \u2014 flux conservation is the geometric content of the inverse-square law.',
      },
      {
        term: 'Choosing a Gaussian surface',
        kind: 'method',
        statement: "**To find $\\vec E$ with Gauss\u2019 law, pick a surface that matches the symmetry of the charge**: concentric sphere for a point or spherical charge, coaxial cylinder for a line, pillbox for a sheet. On each piece of a good surface $E$ is constant and either parallel or perpendicular to $d\\vec A$, so the integral collapses to $EA$ or zero.",
      },
      {
        term: "Gauss' Law: solution protocol",
        kind: "method",
        statement: "**Solve Gauss' Law problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric flux and Gauss's law; the working equation is $\\Phi = \\oint\\vec E\\cdot d\\vec A = q_{\\text{enc}}/\\varepsilon_0$, $\\varepsilon_0 = 8.85\\times 10^{-12}\\ \\text{C}^2/\\text{N}\\cdot\\text{m}^2$; every substitution must carry its units so the final unit ($\\text{N}\\cdot\\text{m}^2/\\text{C}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against flux $\\sim 10^3\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$ for $\\mu\\text{C}$; closed surface; symmetry to pull $E$ out of the integral.",
      },
    ],
    figures: [
      {
        caption: "Gauss' law in pictures: a closed surface (dashed) surrounds a charge, and the field arrows cross it radially, everywhere parallel to the little area vector $d\\vec A$ on the patch shown. Because the same lines that leave this sphere leave any larger sphere, the flux $q_\\text{enc}/\\varepsilon_0$ is independent of the radius \u2014 and charges outside would enter and exit in equal amounts.",
        svg: `<svg viewBox="0 0 720 350" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gaussian sphere around a charge with outward flux arrows and an area vector patch"><defs><marker id="gsA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><circle cx="330" cy="175" r="112" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/><circle cx="330" cy="175" r="11" fill="currentColor"/><text x="330" y="208" text-anchor="middle" font-size="16" fill="currentColor">+q</text><line x1="425" y1="175" x2="492" y2="175" stroke="currentColor" stroke-width="2.5" marker-end="url(#gsA)"/><text x="470" y="163" font-size="16" fill="currentColor">E</text><line x1="377.5" y1="257.3" x2="410" y2="313.6" stroke="currentColor" stroke-width="2.5" marker-end="url(#gsA)"/><text x="407" y="336" font-size="16" fill="currentColor">E</text><line x1="282.5" y1="257.3" x2="250" y2="313.6" stroke="currentColor" stroke-width="2.5" marker-end="url(#gsA)"/><line x1="235" y1="175" x2="168" y2="175" stroke="currentColor" stroke-width="2.5" marker-end="url(#gsA)"/><text x="175" y="163" font-size="16" fill="currentColor">E</text><line x1="235" y1="92.7" x2="168" y2="36.4" stroke="currentColor" stroke-width="2.5" marker-end="url(#gsA)"/><text x="175" y="30" font-size="16" fill="currentColor">E</text><line x1="377.5" y1="92.7" x2="410" y2="36.4" stroke="currentColor" stroke-width="2.5" marker-end="url(#gsA)"/><ellipse cx="233" cy="119" rx="16" ry="9" transform="rotate(-60 233 119)" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/><line x1="233" y1="119" x2="183" y2="90" stroke="currentColor" stroke-width="2.5" marker-end="url(#gsA)"/><text x="160" y="82" font-size="16" fill="currentColor">dA</text><text x="575" y="335" font-size="17" fill="currentColor">ε₀Φ = q</text><text x="575" y="312" font-size="15" fill="currentColor" opacity="0.85">flux = charge / ε₀</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Reading flux backward to charge',
        problem: "The net flux through an unknown closed surface is measured to be $\\Phi = -3.4\\times 10^{3}\\ \\mathrm{N\\cdot m^2/C}$. What is the enclosed charge?",
        steps: [
          { label: 'Gauss\u2019 law', text: '$q_\\text{enc} = \\varepsilon_0\\Phi = (8.85\\times 10^{-12})(-3.4\\times 10^{3})$.' },
          { label: 'Evaluate', text: '$q_\\text{enc} = -3.0\\times 10^{-8}\\ \\mathrm{C} = -30$ nC.' },
          { label: 'Interpret the sign', text: 'Negative flux means more field lines enter than leave \u2014 exactly what a negative enclosed charge guarantees, whatever the surface\u2019s shape.' },
        ],
        result: 'The surface encloses $-30$ nC \u2014 negative because the net flux points inward.',
      },
      {
        title: 'Flux through two concentric spheres',
        problem: "A point charge $q = +1.0$ nC sits at the common center of spheres of radius $r_1 = 2.0$ m and $r_2 = 4.0$ m. Compare the flux and the field at the two surfaces.",
        steps: [
          { label: 'Flux is a count', text: 'Each sphere encloses the same charge, so $\\Phi_1 = \\Phi_2 = q/\\varepsilon_0 = (1.0\\times 10^{-9})/(8.85\\times 10^{-12}) = 113\\ \\mathrm{N\\cdot m^2/C}$.' },
          { label: 'Field at $r_1$', text: '$E_1 = \\Phi_1/4\\pi r_1^2 = 113/(4\\pi\\times 4.0) = 2.25$ N/C \u2014 the same as $kq/r_1^2$.' },
          { label: 'Field at $r_2$', text: 'Doubling the radius quarters the area, so $E_2 = 0.56$ N/C while $\\Phi$ is untouched.' },
        ],
        result: 'Flux 113 N·m²/C through both spheres; the field falls from 2.25 to 0.56 N/C. Flux counts charge \u2014 area does the dilution.',
      },
    ],
    keyTakeaways: [
      '$\\varepsilon_0\\Phi = q_\\text{enc}$: net flux through any closed surface depends only on the enclosed charge.',
      'External charges contribute zero net flux; moving the enclosed charge around inside changes $\\vec E$ locally but never the total count.',
      'Gaussian surfaces are chosen to match symmetry, turning the surface integral into $EA$.',
    ],
    quiz: [
      {
        q: 'A charge sits inside a closed surface and is then moved to another point still inside. The net flux:',
        options: ['increases', 'is unchanged', 'decreases', 'reverses sign'],
        answer: 1,
        explanation: 'The count of enclosed lines is set by the enclosed charge alone; its position inside does not matter.',
      },
      {
        q: 'A charge is brought from far away to just outside a closed surface. The net flux through the surface:',
        options: ['grows with proximity', 'stays zero', 'doubles', 'depends on the surface\u2019s shape'],
        answer: 1,
        explanation: 'Field lines of an external charge enter and exit in equal numbers; net contribution is zero at any distance outside.',
      },
      {
        q: 'Doubling the charge enclosed by a closed surface:',
        options: ['doubles the net flux', 'quadruples the flux', 'doubles the field everywhere on the surface', 'halves the flux'],
        answer: 0,
        explanation: 'Flux is proportional to enclosed charge: $\\Phi = q_\\text{enc}/\\varepsilon_0$. The field on the surface changes shape too, but the flux count simply doubles.',
      },
      {
        q: 'Concentric spheres of radii $r$ and $2r$ surround the same charge. Compare their fluxes:',
        options: [`$\\Phi(r) > \\Phi(2r)$`, `$\\Phi(r) = \\Phi(2r)$`, `$\\Phi(r) < \\Phi(2r)$`, 'Depends on $\\varepsilon_0$ of the material between them'],
        answer: 1,
        explanation: 'The larger sphere has four times the area but one quarter the field; the product \u2014 the flux \u2014 is identical.',
      },
    ],
  },
  // ------------------------------------------------------------------ 23-3
  {
    sectionId: 'hall-ch23-s3',
    readingTime: 6,
    intro: 'Conductors are Gauss\u2019 law\u2019s finest customers. In electrostatic equilibrium the free charges inside a conductor stop moving only when the interior field is zero, and Gauss\u2019 law then forces all excess charge onto the surface, where it produces the crisp result $E = \\sigma/\\varepsilon_0$ just outside. Cavities inherit a bonus: whatever charge you hide in a hole in a conductor, the outside world cannot touch it.',
    objectives: [
      'Argue that $\\vec E = 0$ everywhere inside a conductor in electrostatic equilibrium',
      'Show that excess charge resides on the surface and that $E = \\sigma/\\varepsilon_0$ just outside',
      'Apply the cavity rules: induced wall charge and electrostatic shielding',
    ],
    concepts: [
      {
        term: 'Zero field inside a conductor',
        kind: 'theorem',
        statement: "**In electrostatic equilibrium the electric field is zero at every point inside a conductor.** Free electrons would otherwise keep moving, contradicting equilibrium \u2014 and any Gaussian surface drawn in the metal encloses zero net charge, since $\\Phi = 0$.",
      },
      {
        term: 'Excess charge lives on the surface',
        kind: 'theorem',
        statement: "**Any excess charge placed on a conductor resides entirely on its outer surface.** A Gaussian surface just inside the metal encloses zero net charge (since $E = 0$ gives $\\Phi = 0$), so no excess can be hiding in the bulk.",
      },
      {
        term: 'Field just outside a conductor',
        kind: 'theorem',
        statement: "**Just outside the surface of a charged conductor the field is perpendicular to the surface with magnitude** $$E = \\frac{\\sigma}{\\varepsilon_0},$$ where $\\sigma$ is the local surface charge density. A tangent component would drag charges along the surface \u2014 forbidden in equilibrium \u2014 and a pillbox straddling the surface turns Gauss\u2019 law into $\\varepsilon_0 E = \\sigma$.",
        detail: 'Note the factor of 2 versus the insulating sheet\u2019s $\\sigma/2\\varepsilon_0$: a conductor puts all its flux into the one outside direction.',
      },
      {
        term: 'Cavities and shielding',
        kind: 'insight',
        statement: '**A charge $q$ inside a cavity of a neutral conductor induces $-q$ on the cavity wall and $+q$ on the outer surface.** Empty cavities have zero field in them no matter what charges sit outside the conductor \u2014 the Faraday cage, why you are safe inside a car in a lightning storm and why electronics ship in metallized bags.',
      },
      {
        term: "A Charged Isolated Conductor: solution protocol",
        kind: "method",
        statement: "**Solve A Charged Isolated Conductor problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric flux and Gauss's law; the working equation is $\\Phi = \\oint\\vec E\\cdot d\\vec A = q_{\\text{enc}}/\\varepsilon_0$, $\\varepsilon_0 = 8.85\\times 10^{-12}\\ \\text{C}^2/\\text{N}\\cdot\\text{m}^2$; every substitution must carry its units so the final unit ($\\text{N}\\cdot\\text{m}^2/\\text{C}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against flux $\\sim 10^3\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$ for $\\mu\\text{C}$; closed surface; symmetry to pull $E$ out of the integral.",
      },
    ],
    examples: [
      {
        title: 'Field at the surface of a charged sphere',
        problem: "A conducting sphere of radius $R = 15$ cm carries net charge $q = -2.0\\ \\mu$C. Find the surface charge density and the field magnitude just outside the surface, and compare with the point-charge formula.",
        steps: [
          { label: 'Spread over the surface', text: '$\\sigma = q/4\\pi R^2 = (-2.0\\times 10^{-6})/(4\\pi(0.15)^2) = -7.1\\times 10^{-6}\\ \\mathrm{C/m^2}$.' },
          { label: 'Conductor surface field', text: '$E = |\\sigma|/\\varepsilon_0 = (7.1\\times 10^{-6})/(8.85\\times 10^{-12}) = 8.0\\times 10^{5}$ N/C, pointing radially inward (negative charge).' },
          { label: 'Cross-check', text: 'Treat the sphere as a point charge at its center: $E = kq/R^2 = (8.99\\times 10^{9})(2.0\\times 10^{-6})/(0.15)^2 = 8.0\\times 10^{5}$ N/C.\u2713 The two routes agree \u2014 as they must.' },
        ],
        result: '$\\sigma = -7.1\\ \\mu\\mathrm{C/m^2}$ and $E = 8.0\\times 10^{5}$ N/C just outside \u2014 the pillbox and point-charge pictures agree exactly.',
      },
      {
        title: 'A hidden charge in a cavity',
        problem: "A point charge $q = +5.0$ nC sits in an empty cavity inside a neutral conductor. What charge appears on the cavity wall and on the outer surface, and what field does a distant outsider see?",
        steps: [
          { label: 'Cavity wall', text: 'A Gaussian surface in the metal around the cavity encloses $q$ plus the wall charge and must have $\\Phi = 0$; hence the wall carries $-5.0$ nC.' },
          { label: 'Outer surface', text: 'The conductor is neutral overall, so the outer surface carries $+5.0$ nC.' },
          { label: 'Outside view', text: 'A distant observer sees the outer $+5.0$ nC spread (if the conductor is spherical, as if a $+5.0$ nC point charge sat at the center) \u2014 the details of the cavity are invisible from outside.' },
        ],
        result: 'Wall: $-5.0$ nC, outer surface: $+5.0$ nC \u2014 the net enclosed charge seen from outside is always the true total.',
      },
    ],
    keyTakeaways: [
      'Electrostatic equilibrium means $\\vec E = 0$ throughout the interior of a conductor, and excess charge sits on the surface.',
      'Just outside: $E = \\sigma/\\varepsilon_0$, perpendicular to the surface \u2014 twice the infinite insulating sheet\u2019s field.',
      'A charge in a cavity induces $-q$ on the wall and $+q$ outside; empty cavities are perfectly shielded from external fields.',
    ],
    quiz: [
      {
        q: 'A conductor in electrostatic equilibrium has a large net charge. The field inside the conducting material is:',
        options: ['large, because the charge is large', 'zero, always', 'zero only if the conductor is spherical', 'equal to $\\sigma/\\varepsilon_0$'],
        answer: 1,
        explanation: 'Any interior field would move the free charges \u2014 contradicting equilibrium. The charge arranges itself on the surface precisely to kill the interior field.',
      },
      {
        q: 'A point charge $+q$ sits in a cavity inside a neutral conductor. The charge induced on the cavity wall is:',
        options: [`$-q$`, 'zero', `$+q$`, '$-q$ only if the conductor is grounded'],
        answer: 0,
        explanation: 'A Gaussian surface in the metal around the cavity must enclose zero net charge (field is zero in the metal), so the wall must carry exactly $-q$.',
      },
      {
        q: 'Just outside the surface of a conductor with local surface charge density $\\sigma$, the field magnitude is:',
        options: [`$\\sigma/2\\varepsilon_0$`, `$\\sigma/\\varepsilon_0$`, `$2\\sigma/\\varepsilon_0$`, 'zero'],
        answer: 1,
        explanation: 'The pillbox argument: all the flux from the local patch goes into the one outward direction, giving $E = \\sigma/\\varepsilon_0$.',
      },
      {
        q: 'A neutral hollow conductor sits in a strong external field. The field inside the empty cavity is:',
        options: ['strong near the cavity walls', 'zero', 'equal to the external field', 'zero only if the conductor is spherical'],
        answer: 1,
        explanation: 'Shielding: the conductor\u2019s charges rearrange to cancel the external field within metal and cavity alike.',
      },
    ],
  },
  // ------------------------------------------------------------------ 23-4
  {
    sectionId: 'hall-ch23-s4',
    readingTime: 8,
    intro: "Gauss' law pays its rent on the three symmetric distributions: the charged sphere, the infinite line, and the infinite sheet. Each is solved by matching a Gaussian surface to the symmetry \u2014 sphere, cylinder, pillbox \u2014 so that the flux integral collapses to a product. This section works all three, including the inside-the-charge results: zero field inside a shell, and a field growing linearly with $r$ inside a uniformly charged solid sphere.",
    objectives: [
      'Apply spherical Gaussian surfaces to shells and uniformly charged solid spheres, inside and out',
      'Derive the line-of-charge and sheet-of-charge fields by cylindrical and pillbox surfaces',
      'Combine sheets into the parallel-plate field and compare conductor vs insulating sheets',
    ],
    concepts: [
      {
        term: 'Symmetry matching',
        kind: 'method',
        statement: '**Pick the Gaussian surface so that $\\vec E$ is constant and either parallel or perpendicular to $d\\vec A$ on each piece.** Sphere for spherical charge, coaxial cylinder for a line, flat pillbox for a sheet. Then $\\oint\\vec E\\cdot d\\vec A$ becomes $E A$ on the active pieces and zero elsewhere.',
      },
      {
        term: 'Charged sphere, inside and out',
        kind: 'theorem',
        statement: "**A uniformly charged shell acts as a point charge outside and produces zero field inside.** A uniformly charged *solid* insulating sphere of total charge $q$ and radius $R$ gives $$E = \\frac{kq}{r^2}\\ (r \\geq R),\\qquad E = \\frac{kq\\,r}{R^3}\\ (r \\leq R),$$ the interior field growing linearly because the enclosed charge shrinks as $r^3$ while the sphere\u2019s area grows as $r^2$.",
      },
      {
        term: 'Line of charge',
        kind: 'theorem',
        statement: "**A coaxial cylindrical surface of radius $d$ and length $L$ around an infinite line with density $\\lambda$ catches flux $E(2\\pi d L)$ and charge $\\lambda L$, giving** $$E = \\frac{\\lambda}{2\\pi\\varepsilon_0 d}.$$ The caps contribute nothing (field skims them); only the curved wall counts.",
      },
      {
        term: 'Sheet of charge',
        kind: 'theorem',
        statement: "**A pillbox of area $A$ straddling an infinite nonconducting sheet of density $\\sigma$ catches flux $2EA$ and charge $\\sigma A$, giving** $$E = \\frac{\\sigma}{2\\varepsilon_0}$$ on each side, pointing away from a positive sheet \u2014 independent of distance. For a conducting sheet the same pillbox catches flux $EA$ (the far side is inside the metal), giving $\\sigma/\\varepsilon_0$.",
      },
      {
        term: "Applications of Gauss' Law: solution protocol",
        kind: "method",
        statement: "**Solve Applications of Gauss' Law problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric flux and Gauss's law; the working equation is $\\Phi = \\oint\\vec E\\cdot d\\vec A = q_{\\text{enc}}/\\varepsilon_0$, $\\varepsilon_0 = 8.85\\times 10^{-12}\\ \\text{C}^2/\\text{N}\\cdot\\text{m}^2$; every substitution must carry its units so the final unit ($\\text{N}\\cdot\\text{m}^2/\\text{C}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against flux $\\sim 10^3\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$ for $\\mu\\text{C}$; closed surface; symmetry to pull $E$ out of the integral.",
      },
    ],
    figures: [
      {
        caption: 'The pillbox for an infinite sheet of charge. The flat caps of area $A$ catch the field perpendicular to the sheet on both sides; the curved wall is parallel to $\\vec E$ and catches nothing. With charge $\\sigma A$ inside and flux $2EA$ out of the two caps, Gauss\u2019 law gives $E = \\sigma/2\\varepsilon_0$ \u2014 the same at any distance.',
        svg: `<svg viewBox="0 0 720 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cylindrical Gaussian pillbox straddling an infinite charged sheet, with field arrows leaving both flat caps"><defs><marker id="pbA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="40" y1="170" x2="680" y2="170" stroke="currentColor" stroke-width="2"/><path d="M55,170 l-11,14 M90,170 l-11,14 M125,170 l-11,14 M160,170 l-11,14 M195,170 l-11,14 M230,170 l-11,14 M265,170 l-11,14 M300,170 l-11,14 M335,170 l-11,14 M370,170 l-11,14 M405,170 l-11,14 M440,170 l-11,14 M475,170 l-11,14 M510,170 l-11,14 M545,170 l-11,14 M580,170 l-11,14 M615,170 l-11,14 M650,170 l-11,14" stroke="currentColor" stroke-width="1.5" opacity="0.6"/><text x="120" y="150" font-size="18" fill="currentColor">σ</text><ellipse cx="360" cy="95" rx="62" ry="15" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><line x1="298" y1="95" x2="298" y2="245" stroke="currentColor" stroke-width="2"/><line x1="422" y1="95" x2="422" y2="245" stroke="currentColor" stroke-width="2"/><ellipse cx="360" cy="245" rx="62" ry="15" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/><line x1="360" y1="80" x2="360" y2="20" stroke="currentColor" stroke-width="2.5" marker-end="url(#pbA)"/><text x="378" y="35" font-size="17" fill="currentColor">E</text><line x1="360" y1="260" x2="360" y2="320" stroke="currentColor" stroke-width="2.5" marker-end="url(#pbA)"/><text x="378" y="312" font-size="17" fill="currentColor">E</text><text x="442" y="90" font-size="16" fill="currentColor">area A</text><text x="445" y="175" font-size="15" fill="currentColor" opacity="0.85">curved wall ∥ E</text><text x="560" y="325" font-size="17" fill="currentColor">ε₀(2EA) = σA → E = σ/2ε₀</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'Inside a uniformly charged solid sphere',
        problem: "A solid insulating sphere of radius $R = 3.0$ cm carries total charge $q = +2.0\\ \\mu$C spread uniformly. Find $E$ at $r = 1.5$ cm (halfway out) and at the surface.",
        steps: [
          { label: 'Enclosed charge shrinks', text: 'The Gaussian sphere of radius $r$ encloses a fraction $(r/R)^3$ of the volume, so $q_\\text{enc} = q(r/R)^3 = (2.0\\ \\mu\\mathrm{C})(1/8) = 0.25\\ \\mu$C.' },
          { label: 'Gauss\u2019 law', text: '$E(4\\pi r^2) = q_\\text{enc}/\\varepsilon_0$, so $E = kq_\\text{enc}/r^2 = (8.99\\times 10^{9})(2.5\\times 10^{-7})/(0.015)^2$.' },
          { label: 'Evaluate', text: '$E = 1.0\\times 10^{7}$ N/C at half radius.' },
          { label: 'Surface', text: 'At $r = R$: $E = kq/R^2 = (8.99\\times 10^{9})(2.0\\times 10^{-6})/(0.030)^2 = 2.0\\times 10^{7}$ N/C \u2014 exactly twice the half-radius value, confirming the linear growth $E \\propto r$ inside.' },
        ],
        result: '$E = 1.0\\times 10^{7}$ N/C at half radius and $2.0\\times 10^{7}$ N/C at the surface \u2014 inside a uniformly charged solid sphere the field grows linearly with $r$ all the way out.',
      },
      {
        title: 'Parallel plates from sheets',
        problem: "Two large parallel nonconducting sheets carry $+\\sigma$ and $-\\sigma$ with $\\sigma = 2.0\\ \\mu\\mathrm{C/m^2}$. Find the field between and outside them.",
        steps: [
          { label: 'Each sheet alone', text: '$\\sigma/2\\varepsilon_0 = (2.0\\times 10^{-6})/(2\\times 8.85\\times 10^{-12}) = 1.13\\times 10^{5}$ N/C, away from the positive sheet.' },
          { label: 'Between', text: 'Both fields point from $+$ to $-$: $E = \\sigma/2\\varepsilon_0 + \\sigma/2\\varepsilon_0 = \\sigma/\\varepsilon_0 = 2.3\\times 10^{5}$ N/C.' },
          { label: 'Outside', text: 'The fields oppose: $E = 0$.' },
        ],
        result: 'A uniform $2.3\\times 10^{5}$ N/C fills the gap and nothing outside \u2014 the capacitor field, now from Gauss\u2019 law rather than integration.',
      },
    ],
    keyTakeaways: [
      'Sphere: point-charge field outside, zero inside a shell, linear $E = kqr/R^3$ inside a uniform solid sphere.',
      'Infinite line: $E = \\lambda/2\\pi\\varepsilon_0 d$ from a coaxial cylinder; caps contribute nothing.',
      'Infinite insulating sheet: $E = \\sigma/2\\varepsilon_0$ from a pillbox; facing sheets make the capacitor field $\\sigma/\\varepsilon_0$.',
    ],
    quiz: [
      {
        q: 'Inside a uniformly charged solid insulating sphere, the field grows with $r$ as:',
        options: [`$1/r^2$`, 'linearly with $r$', 'constant', 'zero everywhere'],
        answer: 1,
        explanation: 'Enclosed charge grows as $r^3$ while the Gaussian area grows as $r^2$, leaving $E \\propto r$.',
      },
      {
        q: 'Inside a uniformly charged spherical *shell* (not solid), the field is:',
        options: [`$kq/r^2$`, 'zero', `$kqr/R^3$`, 'constant and nonzero'],
        answer: 1,
        explanation: 'A Gaussian sphere inside the shell encloses no charge at all, so $E = 0$ everywhere inside.',
      },
      {
        q: 'For an infinite sheet of charge, doubling your distance from the sheet changes the field to:',
        options: ['half', 'a quarter', 'the same value', 'double'],
        answer: 2,
        explanation: '$E = \\sigma/2\\varepsilon_0$ has no distance in it \u2014 the sheet looks infinite from anywhere.',
      },
      {
        q: 'An insulating sheet and a conductor each carry surface density $\\sigma$. The fields they produce (on the outside of each) are:',
        options: ['$\\sigma/2\\varepsilon_0$ for the sheet, $\\sigma/\\varepsilon_0$ for the conductor', 'both $\\sigma/2\\varepsilon_0$', 'both $\\sigma/\\varepsilon_0$', '$\\sigma/\\varepsilon_0$ for the sheet, $\\sigma/2\\varepsilon_0$ for the conductor'],
        answer: 0,
        explanation: 'The sheet sends flux out both faces ($2EA$), halving the field; the conductor sends all flux into the one outside face ($EA$).',
      },
    ],
  },
  // ------------------------------------------------------------------ 23-5
  {
    sectionId: 'hall-ch23-s5',
    readingTime: 5,
    intro: "Gauss' law is not merely a computational shortcut \u2014 it is the more fundamental of the two statements. Given the symmetry of a point charge, Gauss' law alone forces the inverse-square law: flux through concentric spheres is conserved, so the field must dilute exactly as $1/r^2$. This section runs that derivation and follows the experimental thread: if the exponent were not exactly two, the interior of a charged shell would not be field-free, and laboratory tests put any deviation below one part in $10^{16}$.",
    objectives: [
      "Derive Coulomb's law from Gauss\' law plus spherical symmetry",
      'Explain why the inverse-square exponent is tied to the zero field inside a charged shell',
      'Place Gauss\u2019 law within Maxwell\u2019s equations',
    ],
    concepts: [
      {
        term: "Coulomb's law from Gauss\' law",
        kind: 'method',
        statement: "**Symmetry first, then flux.** For an isolated point charge, the field must be radial with a magnitude depending only on $r$. Any concentric sphere then has $\\vec E \\parallel d\\vec A$ everywhere with constant magnitude, so $\\Phi = E\\,(4\\pi r^2) = q/\\varepsilon_0$, giving $E = kq/r^2$. Multiplying by a second charge $q'$ reproduces Coulomb\u2019s law exactly.",
      },
      {
        term: 'Flux conservation is the inverse square',
        kind: 'insight',
        statement: '**The $1/r^2$ falloff is the unique law that lets flux pass undiminished through nested spheres.** In three spatial dimensions, field lines that are not created or destroyed in empty space must spread over spheres whose area grows as $r^2$ \u2014 dilution by exactly $1/r^2$ is geometry plus charge conservation.',
      },
      {
        term: 'Testing the exponent',
        kind: 'insight',
        statement: '**If the force fell as $1/r^{2+\\delta}$ with $\\delta \\neq 0$, a charged shell would exert a force on charges inside it.** Null experiments inside conducting shells (Cavendish in 1772; Williams, Faller and Hill in 1971 with modern electronics) find $|\\delta| < 10^{-16}$ \u2014 the inverse-square law is one of the most precisely tested facts in physics.',
      },
      {
        term: 'A Maxwell equation',
        kind: 'insight',
        statement: "**Gauss' law survives everything.** In differential form it reads $\\nabla\\cdot\\vec E = \\rho/\\varepsilon_0$ \u2014 the first of Maxwell\u2019s four equations \u2014 and it holds for moving charges and time-dependent fields alike, while Coulomb\u2019s law is strictly the electrostatic special case.",
      },
      {
        term: "Coulomb's Law from Gauss' Law: solution protocol",
        kind: "method",
        statement: "**Solve Coulomb's Law from Gauss' Law problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric flux and Gauss's law; the working equation is $\\Phi = \\oint\\vec E\\cdot d\\vec A = q_{\\text{enc}}/\\varepsilon_0$, $\\varepsilon_0 = 8.85\\times 10^{-12}\\ \\text{C}^2/\\text{N}\\cdot\\text{m}^2$; every substitution must carry its units so the final unit ($\\text{N}\\cdot\\text{m}^2/\\text{C}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against flux $\\sim 10^3\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$ for $\\mu\\text{C}$; closed surface; symmetry to pull $E$ out of the integral.",
      },
    ],
    examples: [
      {
        title: 'The shell, inside and out',
        problem: "A uniformly charged thin shell of radius $R = 10$ cm carries $q = +4.0\\ \\mu$C. Find the field at $r = 5.0$ cm and at $r = 20$ cm from the center.",
        steps: [
          { label: 'Inside', text: 'A Gaussian sphere with $r = 5.0$ cm lies entirely in the empty interior and encloses no charge: $E = 0$.' },
          { label: 'Outside', text: 'For $r = 20$ cm the shell acts as a point charge at the center: $E = kq/r^2 = (8.99\\times 10^{9})(4.0\\times 10^{-6})/(0.20)^2$.' },
          { label: 'Evaluate', text: '$E = 9.0\\times 10^{5}$ N/C, directed radially outward.' },
        ],
        result: 'Zero inside, $9.0\\times 10^{5}$ N/C at 20 cm \u2014 the two Gauss\u2019-law facts that fail if the force law departs from $1/r^2$.',
      },
      {
        title: "Coulomb's Law from Gauss' Law: flux numbers",
        problem: "A closed surface encloses $4\\ \\mu\\text{C}$. What is the outward flux?",
        steps: [
          { label: "Gauss", text: "$\\Phi = q_{\\text{enc}}/\\varepsilon_0$." },
          { label: "Substitute", text: "$\\Phi = 4\\times 10^{-6}/8.85\\times 10^{-12} = 4.52\\times 10^{+5}\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$." },
        ],
        result: "$\\Phi \\approx 4.52\\times 10^{+5}\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$.",
      },
    ],
    keyTakeaways: [
      "Gauss' law plus radial symmetry reproduces Coulomb\'s law in three lines: $E(4\\pi r^2) = q/\\varepsilon_0$.",
      'Flux conservation through nested spheres forces the exact $1/r^2$ falloff in three dimensions.',
      'Shell-interior null experiments bound deviations from inverse-square below one part in $10^{16}$; Gauss\u2019 law is one of Maxwell\u2019s equations and outlives electrostatics.',
    ],
    quiz: [
      {
        q: "Deriving Coulomb's law from Gauss\' law requires, besides the law itself, the assumption that:",
        options: ['charge is quantized', 'the field of a point charge is radial with magnitude depending only on $r$', 'the potential is continuous', 'space is two-dimensional'],
        answer: 1,
        explanation: 'Symmetry is the second ingredient: it makes $\\vec E$ parallel to $d\\vec A$ and constant over the sphere, collapsing the integral to $E\\cdot 4\\pi r^2$.',
      },
      {
        q: 'If the electric force fell as $1/r^{2.01}$, then inside a uniformly charged spherical shell the field would be:',
        options: ['still exactly zero', 'nonzero', 'infinite', 'zero only for negative charges'],
        answer: 1,
        explanation: 'With a steeper-than-inverse-square law, nearer parts of the shell would win, leaving a residual interior field \u2014 exactly what the null experiments rule out.',
      },
      {
        q: 'Which statement is correct about the ranges of validity?',
        options: ["Gauss' law holds always; Coulomb\'s law holds only in electrostatics", "Coulomb\'s law holds always; Gauss' law only in electrostatics", 'Both hold only in electrostatics', 'Neither holds for moving charges'],
        answer: 0,
        explanation: 'Gauss\u2019 law is a Maxwell equation, true for any charge motion; Coulomb\u2019s law is its electrostatic, symmetry-flavored corollary.',
      },
    ],
  },
]
