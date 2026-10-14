import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 24
// Electric Potential — sections 24-1 … 24-8 (ids hall-ch24-s1 … hall-ch24-s8)
// Core: ΔV = −W/q₀, V = kq/r, equipotentials, dipole and continuous
// distributions, E = −∇V (with the masters-tier dipole gradient derivation),
// U = Σ kq_iq_j/r_ij, and the equipotential conductor.
// ============================================================================

export const hallCh24Content: SectionContent[] = [
  // ------------------------------------------------------------------ 24-1
  {
    sectionId: 'hall-ch24-s1',
    readingTime: 6,
    intro: 'Force tells you how a charge is shoved; potential tells you how much energy each coulomb carries at each point. Because the electrostatic force is conservative, the work per unit charge between two points is path-independent, and that single number \u2014 the potential difference, measured in volts \u2014 is what batteries supply, what voltmeters read, and what accelerates every electron in a CRT, an X-ray tube, or a particle accelerator. One megavolt across a proton buys it 5 MeV of kinetic energy.',
    objectives: [
      'Define potential difference as work per unit charge, $\\Delta V = -W/q_0$, and potential as $V = U/q_0$ with the zero at infinity',
      'Convert between joules and electron-volts and compute speeds gained across a potential difference',
      'Relate the work of the applied force to $q_0\\Delta V$ for a slowly moved charge',
    ],
    concepts: [
      {
        term: 'Electric potential',
        kind: 'definition',
        statement: "**The electric potential at a point is the potential energy per unit charge** $$V = \\frac{U}{q_0},$$ measured in volts ($1\\ \\mathrm{V} = 1\\ \\mathrm{J/C}$). Potential is a scalar field: only differences are physical, and by convention the zero sits at infinity for finite charge distributions.",
      },
      {
        term: 'Potential difference',
        kind: 'definition',
        statement: "**Moving a test charge from point $i$ to point $f$, the potential changes by the negative of the work the field does per unit charge:** $$V_f - V_i = -\\frac{W}{q_0}.$$ If instead you haul the charge slowly with an applied force, your work is $W_\\text{app} = q_0\\Delta V$ \u2014 positive to move positive charge up the potential hill.",
        detail: 'This sign bookkeeping is the same as mechanics: the electric force does positive work when a positive charge moves downhill in potential, from high $V$ to low $V$.',
      },
      {
        term: 'The electron-volt',
        kind: 'definition',
        statement: '**One electron-volt is the energy a charge $e$ gains falling through one volt:** $$1\\ \\mathrm{eV} = 1.602\\times 10^{-19}\\ \\mathrm{J}.$$ Atomic and particle physics runs on eV, keV, MeV and GeV because joules are far too large for particles.',
      },
      {
        term: 'Why a scalar suffices',
        kind: 'insight',
        statement: '**Potential energy exists because the electrostatic force is conservative.** The field\u2019s work between two points is the same along every path \u2014 so we may store its information in one number per point instead of tracking three components of force along trajectories.',
      },
      {
        term: "Electric Potential: solution protocol",
        kind: "method",
        statement: "**Solve Electric Potential problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric potential from work per charge; the working equation is $V = U/q_0$, $V = kq/r$, $E = -dV/dx$ (1D), $U = kq_1q_2/r$; every substitution must carry its units so the final unit (volts ($\\text{J/C}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $V\\sim 10^2$--$10^4\\ \\text{V}$ for $\\mu\\text{C}$ at cm--m; $V = 0$ at infinity convention; $E = -\\nabla V$ always.",
      },
    ],
    examples: [
      {
        title: 'A proton through a TV-scale voltage',
        problem: "A proton is accelerated from rest through a potential difference of $5.0\\times 10^{6}$ V. What kinetic energy (in eV and joules) does it gain, and how fast does it leave?",
        steps: [
          { label: 'Energy from voltage', text: 'The field does work $W = q\\Delta V$; the proton falls through $-\\Delta V$, gaining $K = e(5.0\\times 10^{6}\\ \\mathrm{V}) = 5.0$ MeV.' },
          { label: 'In joules', text: '$K = 5.0\\times 10^{6}\\times 1.602\\times 10^{-19} = 8.0\\times 10^{-13}$ J.' },
          { label: 'Speed', text: '$v = \\sqrt{2K/m_p} = \\sqrt{2(8.0\\times 10^{-13})/(1.673\\times 10^{-27})} = \\sqrt{9.6\\times 10^{14}} = 3.1\\times 10^{7}$ m/s.' },
          { label: 'Relativity check', text: '$v \\approx 0.10c$, so the nonrelativistic formula is good to about half a percent \u2014 for real accelerators you would switch to $K = (\\gamma - 1)mc^2$.' },
        ],
        result: '5.0 MeV = $8.0\\times 10^{-13}$ J, giving $3.1\\times 10^{7}$ m/s \u2014 a tenth the speed of light from a car-battery-sized stack of volts multiplied a hundred-thousandfold.',
      },
      {
        title: "Electric Potential: volt check",
        problem: "Find $V = kq/r$ at $0.75\\ \\text{m}$ from $2\\ \\mu\\text{C}$ (zero at infinity).",
        steps: [
          { label: "Substitute", text: "$V = 8.99\\times 10^9\\times 2\\times 10^{-6}/0.75$." },
          { label: "Compute", text: "$V \\approx 24000\\ \\text{V}$." },
        ],
        result: "$V \\approx 24000\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      '$\\Delta V = -W/q_0$: volts are joules per coulomb, and only differences are measurable.',
      'A positive charge released in a field falls toward lower potential; the field\u2019s positive work becomes kinetic energy.',
      '1 eV = $1.602\\times 10^{-19}$ J \u2014 the natural energy unit whenever charge $e$ meets voltage.',
    ],
    quiz: [
      {
        q: 'A positive charge is released from rest in an electric field. Subsequently its potential energy and the local potential along its path:',
        options: ['both increase', 'both decrease', 'potential energy decreases while it moves toward lower $V$', 'potential energy increases while it moves toward lower $V$'],
        answer: 2,
        explanation: 'The field does positive work on it, so $U$ falls; for positive charges that means traveling from high $V$ to low $V$.',
      },
      {
        q: 'One electron-volt equals:',
        options: ['$1.602\\times 10^{-19}$ J', '$1.602\\times 10^{-19}$ C', '$9.11\\times 10^{-31}$ J', '$6.24\\times 10^{18}$ J'],
        answer: 0,
        explanation: 'Energy = charge $e$ times 1 volt: $1.602\\times 10^{-19}$ C × 1 V.',
      },
      {
        q: 'An electron is moved (slowly) from a point at $V = 0$ to a point at $V = +100$ V. Its potential energy:',
        options: ['increases by 100 eV', 'decreases by 100 eV', 'stays the same', 'increases by 50 eV'],
        answer: 1,
        explanation: '$\\Delta U = q\\Delta V = (-e)(+100\\ \\mathrm{V}) = -100$ eV: moving a negative charge to higher potential *lowers* its energy.',
      },
      {
        q: 'To move a $+2.0\\ \\mu$C charge slowly through a potential rise of 50 V, the applied force must do work:',
        options: ['$1.0\\times 10^{-4}$ J', '$2.5\\times 10^{-5}$ J', 'zero', '$100$ J'],
        answer: 0,
        explanation: '$W_\\text{app} = q\\Delta V = (2.0\\times 10^{-6})(50) = 1.0\\times 10^{-4}$ J.',
      },
    ],
  },
  // ------------------------------------------------------------------ 24-2
  {
    sectionId: 'hall-ch24-s2',
    readingTime: 5,
    intro: 'Connect the points of equal potential and the landscape of voltage becomes a contour map. Two facts organize the whole subject: field lines cross equipotential surfaces at right angles (any parallel component would do work along the surface), and where the contours crowd together the field is strong \u2014 the spacing is a direct read of magnitude. Conductors, having zero interior field, are entire volumes of a single potential.',
    objectives: [
      'Define an equipotential surface and explain why no work is done moving charge along one',
      'Prove that $\\vec E$ is perpendicular to every equipotential surface and points from high to low $V$',
      'Read field magnitude from equipotential spacing, and identify conductors as equipotential volumes',
    ],
    concepts: [
      {
        term: 'Equipotential surface',
        kind: 'definition',
        statement: "**An equipotential surface is the set of all points at the same potential.** Moving a charge along one costs no work ($\\Delta V = 0$), and the surface can be drawn through any point where $V$ is defined \u2014 concentric spheres for a point charge, parallel planes for a uniform field.",
      },
      {
        term: 'Field ⟂ equipotential',
        kind: 'theorem',
        statement: "**The electric field is everywhere perpendicular to equipotential surfaces and points from higher to lower potential.** If $\\vec E$ had a component along the surface, it would do work on a charge moving within the surface \u2014 impossible at fixed $V$.",
      },
      {
        term: 'Spacing reads strength',
        kind: 'insight',
        statement: '**Closely spaced equipotentials mean a strong field.** Between neighboring surfaces differing by $\\Delta V$ and separated by $\\Delta d$, the field magnitude is about $E = \\Delta V/\\Delta d$ \u2014 a topographic map in which the slope is $E$.',
      },
      {
        term: 'Conductors are equipotentials',
        kind: 'insight',
        statement: '**A conductor in electrostatic equilibrium is one equipotential volume: $V$ is the same on the surface and throughout the interior.** Since $\\vec E = 0$ inside, no potential difference can exist anywhere in the metal \u2014 the fact that makes every wire in a circuit a single node.',
      },
      {
        term: "Equipotential Surfaces and the Electric Field: solution protocol",
        kind: "method",
        statement: "**Solve Equipotential Surfaces and the Electric Field problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric potential from work per charge; the working equation is $V = U/q_0$, $V = kq/r$, $E = -dV/dx$ (1D), $U = kq_1q_2/r$; every substitution must carry its units so the final unit (volts ($\\text{J/C}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $V\\sim 10^2$--$10^4\\ \\text{V}$ for $\\mu\\text{C}$ at cm--m; $V = 0$ at infinity convention; $E = -\\nabla V$ always.",
      },
    ],
    figures: [
      {
        caption: 'Equipotential surfaces (dashed) of a positive point charge: concentric spheres of radius $r_1 < r_2 < r_3$, with $V_1 > V_2 > V_3$ since $V = kq/r$. The field crosses every sphere at $90^\\circ$, pointing outward from high to low $V$; the surfaces crowd near the charge where $E = kq/r^2$ is strongest.',
        svg: `<svg viewBox="0 0 720 320" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concentric dashed equipotential circles around a charge with radial field arrows crossing them perpendicularly"><defs><marker id="epA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><circle cx="250" cy="160" r="140" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 6" opacity="0.45"/><circle cx="250" cy="160" r="90" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="7 6" opacity="0.65"/><circle cx="250" cy="160" r="55" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6" opacity="0.9"/><circle cx="250" cy="160" r="18" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="2.5"/><text x="250" y="166" text-anchor="middle" font-size="15" fill="currentColor">+q</text><text x="310" y="122" font-size="15" fill="currentColor">V₁</text><text x="330" y="95" font-size="15" fill="currentColor">V₂</text><text x="358" y="58" font-size="15" fill="currentColor">V₃</text><text x="90" y="45" font-size="16" fill="currentColor">V₁ &gt; V₂ &gt; V₃</text><line x1="272" y1="160" x2="432" y2="160" stroke="currentColor" stroke-width="2.5" marker-end="url(#epA)"/><text x="445" y="152" font-size="16" fill="currentColor">E</text><line x1="227" y1="137" x2="148" y2="58" stroke="currentColor" stroke-width="2.5" marker-end="url(#epA)"/><text x="132" y="48" font-size="16" fill="currentColor">E</text><line x1="227" y1="183" x2="148" y2="262" stroke="currentColor" stroke-width="2.5" marker-end="url(#epA)"/><text x="132" y="278" font-size="16" fill="currentColor">E</text><text x="540" y="215" font-size="15" fill="currentColor" opacity="0.85">E crosses each surface at 90°;</text><text x="540" y="238" font-size="15" fill="currentColor" opacity="0.85">surfaces crowd where E is strong</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Mapping a uniform field',
        problem: "In a cathode-ray tube the field between plates is $E = 5.0\\times 10^{4}$ N/C. How far apart are the equipotential planes that differ by 100 V, and what is the work done moving an electron 2.0 cm along one of them?",
        steps: [
          { label: 'Spacing', text: 'For planes, $\\Delta V = E\\,\\Delta d$, so $\\Delta d = \\Delta V/E = 100/(5.0\\times 10^{4}) = 2.0$ mm.' },
          { label: 'Along the surface', text: 'An equipotential plane runs perpendicular to $\\vec E$; moving along it means $\\Delta V = 0$, so the work is zero regardless of the charge and the distance.' },
          { label: 'Across it', text: 'Moving the electron the same 2.0 cm *along the field* instead would change $V$ by $Ed = 1000$ V and its energy by 1000 eV.' },
        ],
        result: 'Contour planes every 2.0 mm; motion along a contour is free \u2014 the work appears only when you cross contours.',
      },
      {
        title: "Equipotential Surfaces and the Electric Field: volt check",
        problem: "Find $V = kq/r$ at $1\\ \\text{m}$ from $3\\ \\mu\\text{C}$ (zero at infinity).",
        steps: [
          { label: "Substitute", text: "$V = 8.99\\times 10^9\\times 3\\times 10^{-6}/1$." },
          { label: "Compute", text: "$V \\approx 27000\\ \\text{V}$." },
        ],
        result: "$V \\approx 27000\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      'Equipotential surfaces connect points of equal $V$; no work is done moving charge along one.',
      '$\\vec E$ is perpendicular to equipotentials and points downhill in $V$; $E \\approx \\Delta V/\\Delta d$ from the local spacing.',
      'A conductor in equilibrium is a single equipotential volume.',
    ],
    quiz: [
      {
        q: 'The work done moving a $3\\ \\mu$C charge 5 cm along an equipotential surface is:',
        options: ['zero', '$15\\ \\mu$J', 'depends on the path taken', `$qV$`],
        answer: 0,
        explanation: '$W = -q\\Delta V$ and $\\Delta V = 0$ along the surface \u2014 any charge, any distance.',
      },
      {
        q: 'The angle between $\\vec E$ and the equipotential surface at any point of crossing is:',
        options: [`$0^\\circ$`, `$45^\\circ$`, `$90^\\circ$`, `$180^\\circ$`],
        answer: 2,
        explanation: 'A parallel component of $\\vec E$ would do work along the surface, contradicting fixed $V$.',
      },
      {
        q: 'On an equipotential map, closely spaced surfaces (equal $\\Delta V$ steps) indicate:',
        options: ['a weak field', 'a strong field', 'a region of zero potential', 'a conductor'],
        answer: 1,
        explanation: '$E \\approx \\Delta V/\\Delta d$: the same voltage drop packed into less distance means more field.',
      },
    ],
  },
  // ------------------------------------------------------------------ 24-3
  {
    sectionId: 'hall-ch24-s3',
    readingTime: 6,
    intro: 'For point charges the potential is pinned down by a single formula with the zero chosen at infinity: $V = kq/r$. The great practical advantage over fields: potential is a scalar, so multi-charge potentials are plain sums with signs, no components, no trigonometry. A point where the field cancels can still sit at high potential \u2014 the scalar simply does not care about direction.',
    objectives: [
      'Derive and use $V = kq/r$ for a point charge, with correct signs',
      'Superpose point-charge potentials as scalars, and locate points of zero potential',
      'Distinguish clearly between $V$ (a scalar) and $\\vec E$ (a vector) at the same point',
    ],
    concepts: [
      {
        term: 'Potential of a point charge',
        kind: 'theorem',
        statement: "**A point charge $q$ produces, at distance $r$, the potential** $$V = \\frac{kq}{r}$$ with $V(\\infty) = 0$. Positive charge raises the potential everywhere; negative charge lowers it, and $V$ never changes sign for a single charge.",
        detail: 'The work to bring a test charge $q_0$ from infinity to $r$ is $q_0V = kqq_0/r$ \u2014 the same integral that defines $U$ in Section 24-7.',
      },
      {
        term: 'Scalar superposition',
        kind: 'method',
        statement: "**The potential of many point charges is the plain algebraic sum** $$V = \\sum_i \\frac{kq_i}{r_i},$$ each term carrying the sign of its charge. No components, no angles \u2014 this is why circuit and field maps are usually drawn in potential language.",
      },
      {
        term: 'Zero field is not zero potential',
        kind: 'insight',
        statement: '**$V = 0$ does not imply $\\vec E = 0$, nor the reverse.** At the midpoint between two equal positive charges the fields cancel while $V = 2kq/r > 0$; near a dipole\u2019s bisector the potential is zero but the field is not.',
      },
      {
        term: 'Potential is energy per charge',
        kind: 'notation',
        statement: '**The potential energy of charge $q$ placed at a point is $U = qV$.** Positive charges store energy by climbing potentials, negative charges by descending them \u2014 the accounting that runs batteries and bonds alike.',
      },
      {
        term: "Potential Due to a Charged Particle: solution protocol",
        kind: "method",
        statement: "**Solve Potential Due to a Charged Particle problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric potential from work per charge; the working equation is $V = U/q_0$, $V = kq/r$, $E = -dV/dx$ (1D), $U = kq_1q_2/r$; every substitution must carry its units so the final unit (volts ($\\text{J/C}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $V\\sim 10^2$--$10^4\\ \\text{V}$ for $\\mu\\text{C}$ at cm--m; $V = 0$ at infinity convention; $E = -\\nabla V$ always.",
      },
    ],
    examples: [
      {
        title: 'Superposing two potentials',
        problem: "Charge $q_1 = +2.0\\ \\mu$C sits at the origin; $q_2 = -3.0\\ \\mu$C at $(0.50\\ \\mathrm{m}, 0)$. Find the potential at $P = (0, 0.30\\ \\mathrm{m})$.",
        steps: [
          { label: 'Distances', text: '$r_1 = 0.30$ m; $r_2 = \\sqrt{0.50^2 + 0.30^2} = \\sqrt{0.34} = 0.583$ m.' },
          { label: 'Each term', text: '$kq_1/r_1 = (8.99\\times 10^{9})(2.0\\times 10^{-6})/0.30 = +6.0\\times 10^{4}$ V; $kq_2/r_2 = (8.99\\times 10^{9})(-3.0\\times 10^{-6})/0.583 = -4.6\\times 10^{4}$ V.' },
          { label: 'Add scalars', text: '$V = +6.0\\times 10^{4} - 4.6\\times 10^{4} = +1.4\\times 10^{4}$ V.' },
        ],
        result: '$V = +1.4\\times 10^{4}$ V \u2014 note the field at $P$ would require vector components; the potential is two sums and done.',
      },
      {
        title: 'Where the potential is zero',
        problem: "Charges $+2.0\\ \\mu$C at $x = 0$ and $-6.0\\ \\mu$C at $x = 1.0$ m. Where on the axis is $V = 0$?",
        steps: [
          { label: 'Set up', text: '$V = k\\left(\\dfrac{2.0}{x} - \\dfrac{6.0}{1.0 - x}\\right) = 0$ (charges in $\\mu$C).' },
          { label: 'Solve', text: '$2.0/x = 6.0/(1.0 - x) \\Rightarrow 2.0(1.0 - x) = 6.0x \\Rightarrow x = 0.25$ m.' },
          { label: 'Check', text: 'At $x = 0.25$: $2.0/0.25 = 8.0$ and $6.0/0.75 = 8.0$ \u2014 equal and opposite.\u2713 (A second zero lies at $x = -0.50$ m, outside the pair, where both $1/r$ factors again balance.)' },
        ],
        result: '$V = 0$ at $x = 0.25$ m between the charges \u2014 and the field there is decidedly nonzero.',
      },
    ],
    keyTakeaways: [
      '$V = kq/r$ with zero at infinity; sign of $q$ carries through to the sign of $V$.',
      'Multi-charge potentials add as scalars: $V = \\Sigma kq_i/r_i$.',
      '$V = 0$ and $\\vec E = 0$ are independent conditions; energy is $U = qV$.',
    ],
    quiz: [
      {
        q: 'At twice the distance from a positive point charge, the potential is:',
        options: [`$V/4$`, `$V/2$`, `$2V$`, 'unchanged'],
        answer: 1,
        explanation: '$V = kq/r$ falls as $1/r$ \u2014 one power, not the two powers of the field. (A common trap!)',
      },
      {
        q: 'Near an isolated electron, the potential is:',
        options: ['positive everywhere', 'negative everywhere', 'zero everywhere', 'positive inside one radius and negative outside'],
        answer: 1,
        explanation: '$V = kq/r$ with $q = -e$ gives negative potential at every finite distance.',
      },
      {
        q: 'At the midpoint between two equal positive charges, compared with a single charge alone:',
        options: [`$\\vec E = 0$ but $V > 0$`, `$\\vec E \\neq 0$ and $V = 0$`, 'both are zero', 'both are doubled'],
        answer: 0,
        explanation: 'The two outward fields cancel by symmetry, while the two positive scalar potentials simply add.',
      },
      {
        q: 'The electric potential energy of a charge $q$ at a point where the potential is $V$ is:',
        options: [`$qV$`, `$q/V$`, `$V/q$`, `$q^2V$`],
        answer: 0,
        explanation: 'By definition $U = qV$ \u2014 energy per charge times charge.',
      },
    ],
  },
  // ------------------------------------------------------------------ 24-4
  {
    sectionId: 'hall-ch24-s4',
    readingTime: 5,
    intro: 'Because potential is a scalar, the dipole\u2019s potential comes almost for free: add $+kq/r_+$ and $-kq/r_-$, expand for $r \\gg d$, and out drops $V = kp\\cos\\theta/r^2$. This one formula previews the whole pattern of multipole physics \u2014 the potential of any neutral object is dominated by its dipole term \u2014 and it is the raw material from which Section 24-6 rebuilds the dipole field by differentiation.',
    objectives: [
      'Derive the far-field dipole potential $V = kp\\cos\\theta/r^2$',
      'Use the angle convention ($\\theta$ from the dipole axis) and locate the zero-potential surface',
      'Explain the $1/r^2$ falloff relative to the point-charge $1/r$ potential',
    ],
    concepts: [
      {
        term: 'Dipole potential',
        kind: 'theorem',
        statement: "**At a point a distance $r \\gg d$ from a dipole of moment $p$, at angle $\\theta$ from the dipole axis,** $$V = \\frac{k p \\cos\\theta}{r^2}.$$ It comes from $kq/r_+ - kq/r_-$ with $r_\\pm \\approx r \\mp (d/2)\\cos\\theta$ keeping only first order in $d/r$.",
      },
      {
        term: 'Angle convention',
        kind: 'notation',
        statement: '**$\\theta$ is measured from the dipole axis (the direction of $\\vec p$).** On the axis $\\cos\\theta = \\pm 1$ and $V$ is maximal in magnitude; on the perpendicular bisector $\\cos\\theta = 0$ and the entire plane is an equipotential at $V = 0$.',
      },
      {
        term: 'Why one power faster',
        kind: 'insight',
        statement: '**Neutral objects cancel their monopole ($1/r$) potential terms.** The dipole potential falls as $1/r^2$, its field as $1/r^3$ \u2014 each differentiation adds a power of $1/r$, which is why the far field of Chapter 22 fell as $1/r^3$.',
      },
      {
        term: "Potential Due to an Electric Dipole: solution protocol",
        kind: "method",
        statement: "**Solve Potential Due to an Electric Dipole problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric potential from work per charge; the working equation is $V = U/q_0$, $V = kq/r$, $E = -dV/dx$ (1D), $U = kq_1q_2/r$; every substitution must carry its units so the final unit (volts ($\\text{J/C}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $V\\sim 10^2$--$10^4\\ \\text{V}$ for $\\mu\\text{C}$ at cm--m; $V = 0$ at infinity convention; $E = -\\nabla V$ always.",
      },
      {
        term: "Potential Due to an Electric Dipole: scales and validity",
        kind: "insight",
        statement: "**Potential Due to an Electric Dipole lives at $V\\sim 10^2$--$10^4\\ \\text{V}$ for $\\mu\\text{C}$ at cm--m and the textbook model holds while $V = 0$ at infinity convention; $E = -\\nabla V$ always.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Potential Due to an Electric Dipole calculation gives seconds when volts ($\\text{J/C}$) demands meters, or a value orders of magnitude beyond $V\\sim 10^2$--$10^4\\ \\text{V}$ for $\\mu\\text{C}$ at cm--m, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'The potential of a water molecule',
        problem: "A water molecule has $p = 6.2\\times 10^{-30}\\ \\mathrm{C\\cdot m}$. Find the potential at $r = 4.0$ nm from the molecule, at $\\theta = 30^\\circ$ from its dipole axis.",
        steps: [
          { label: 'Formula', text: '$V = kp\\cos\\theta/r^2 = (8.99\\times 10^{9})(6.2\\times 10^{-30})(\\cos 30^\\circ)/(4.0\\times 10^{-9})^2$.' },
          { label: 'Numerator', text: '$kp\\cos\\theta = (5.57\\times 10^{-20})(0.866) = 4.83\\times 10^{-20}\\ \\mathrm{V\\cdot m^2}$.' },
          { label: 'Divide', text: '$r^2 = 1.6\\times 10^{-17}\\ \\mathrm{m^2}$, so $V = 3.0\\times 10^{-3}$ V.' },
          { label: 'Scale', text: 'Millivolts at nanometers \u2014 but across a cell membrane 5 nm wide with $10^7$ V/m fields, membrane potentials of tens of mV add up to biology\u2019s batteries.' },
        ],
        result: '$V = 3.0$ mV \u2014 tiny, yet these are the potentials that steer ions through protein channels.',
      },
      {
        title: "Potential Due to an Electric Dipole: volt check",
        problem: "Find $V = kq/r$ at $0.5\\ \\text{m}$ from $2\\ \\mu\\text{C}$ (zero at infinity).",
        steps: [
          { label: "Substitute", text: "$V = 8.99\\times 10^9\\times 2\\times 10^{-6}/0.5$." },
          { label: "Compute", text: "$V \\approx 36000\\ \\text{V}$." },
        ],
        result: "$V \\approx 36000\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      'Far-field dipole potential: $V = kp\\cos\\theta/r^2$, with $\\theta$ from the dipole axis.',
      'The entire perpendicular-bisector plane is the $V = 0$ equipotential.',
      'Neutrality kills the $1/r$ term, leaving $1/r^2$ \u2014 differentiation in Section 24-6 will make it $1/r^3$ for the field.',
    ],
    quiz: [
      {
        q: 'The potential of a dipole (far away) is zero everywhere on:',
        options: ['the dipole axis', 'the perpendicular bisector plane', 'a sphere of radius $r = d$', 'no surface'],
        answer: 1,
        explanation: 'On the bisector $\\theta = 90^\\circ$, so $\\cos\\theta = 0$ at every point.',
      },
      {
        q: 'Far from a dipole, the potential falls with distance as:',
        options: [`$1/r$`, `$1/r^2$`, `$1/r^3$`, `$1/r^4$`],
        answer: 1,
        explanation: '$V = kp\\cos\\theta/r^2$; the field, being its derivative, falls one power faster.',
      },
      {
        q: 'At a fixed large distance $r$, $|V|$ is largest at which angles?',
        options: ['$\\theta = 0$ only', `$\\theta = 90^\\circ$`, `$\\theta = 0$ and $\\theta = 180^\\circ$`, 'independent of $\\theta$'],
        answer: 2,
        explanation: '$|\\cos\\theta|$ peaks at 1 on both ends of the axis \u2014 positive near the $+$ end, negative near the $-$ end.',
      },
    ],
  },
  // ------------------------------------------------------------------ 24-5
  {
    sectionId: 'hall-ch24-s5',
    readingTime: 7,
    intro: 'Continuous charge distributions yield their potentials to the same slicing method you used for fields in Chapter 22 \u2014 but with scalar $dq/r$ terms instead of vector components, the integrals are friendlier. A ring gives $kq/\\sqrt{z^2+R^2}$; a disk, assembled from rings, gives the clean closed form $\\sigma(\\sqrt{z^2+R^2} - z)/2\\varepsilon_0$; and both collapse to the point-charge result when you back far away.',
    objectives: [
      'Set up $V = k\\int dq/r$ for a continuous distribution',
      'State and use the on-axis ring result $V = kq/\\sqrt{z^2+R^2}$',
      'Derive and use the disk potential $V = (\\sigma/2\\varepsilon_0)(\\sqrt{z^2+R^2} - z)$, including its limits',
    ],
    concepts: [
      {
        term: 'Potential by integration',
        kind: 'method',
        statement: "**Slice the charge into elements $dq$ and sum $k\\,dq/r$:** $$V = k\\int \\frac{dq}{r}.$$ Every element is the same distance from points on a symmetry axis, and signs are handled automatically \u2014 the reason potentials are integrated before fields whenever geometry permits.",
      },
      {
        term: 'Ring on its axis',
        kind: 'theorem',
        statement: "**A uniformly charged ring of radius $R$ and total charge $q$ produces, on its axis, the potential** $$V = \\frac{kq}{\\sqrt{z^2+R^2}}$$ \u2014 every element of the ring is the same distance $\\sqrt{z^2+R^2}$ from the field point, so the integral is $k/r$ times $q$.",
      },
      {
        term: 'Disk on its axis',
        kind: 'theorem',
        statement: "**A disk of radius $R$ and uniform $\\sigma$ produces on its axis** $$V = \\frac{\\sigma}{2\\varepsilon_0}\\left(\\sqrt{z^2+R^2} - z\\right),$$ built by stacking rings with $dq = \\sigma(2\\pi r\\,dr)$. At $z = 0$ it reads $V = \\sigma R/2\\varepsilon_0$; far away it approaches $kq/z$ with $q = \\sigma\\pi R^2$.",
      },
      {
        term: 'Limits as sanity checks',
        kind: 'insight',
        statement: '**Every distribution\u2019s potential must look like $kq/z$ from far enough away.** The ring formula reduces to it for $z \\gg R$; the disk formula expands as $\\sigma R^2/2\\varepsilon_0 z \\cdot (1 + \\cdots) = kq/z$. Checking limits is the cheapest error filter in physics.',
      },
      {
        term: "Potential Due to a Continuous Charge Distribution: solution protocol",
        kind: "method",
        statement: "**Solve Potential Due to a Continuous Charge Distribution problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric potential from work per charge; the working equation is $V = U/q_0$, $V = kq/r$, $E = -dV/dx$ (1D), $U = kq_1q_2/r$; every substitution must carry its units so the final unit (volts ($\\text{J/C}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $V\\sim 10^2$--$10^4\\ \\text{V}$ for $\\mu\\text{C}$ at cm--m; $V = 0$ at infinity convention; $E = -\\nabla V$ always.",
      },
    ],
    examples: [
      {
        title: 'A 3\u20134\u20135 ring',
        problem: "A ring of radius $R = 3.0$ cm carries $q = +2.0\\ \\mu$C. Find $V$ on the axis at $z = 4.0$ cm.",
        steps: [
          { label: 'Formula', text: '$V = kq/\\sqrt{z^2+R^2}$.' },
          { label: 'The geometry', text: '$\\sqrt{(0.040)^2 + (0.030)^2} = \\sqrt{0.0025} = 0.050$ m \u2014 a 3-4-5 triangle.' },
          { label: 'Evaluate', text: '$V = (8.99\\times 10^{9})(2.0\\times 10^{-6})/0.050 = 3.6\\times 10^{5}$ V.' },
        ],
        result: '$V = 3.6\\times 10^{5}$ V \u2014 compare the point charge at the same 5 cm distance: identical, since the ring masquerades as a point from the axis only if you measure $r$ the right way.',
      },
      {
        title: 'Disk potential near its center',
        problem: "A disk of radius $R = 5.0$ cm carries $\\sigma = 2.0\\ \\mu\\mathrm{C/m^2}$. Find $V$ on the axis at $z = 10$ cm, and the potential difference from the disk\u2019s center.",
        steps: [
          { label: 'Axis point', text: '$V(z) = (\\sigma/2\\varepsilon_0)(\\sqrt{z^2+R^2} - z) = (1.13\\times 10^{5})(\\sqrt{0.0125} - 0.10)$.' },
          { label: 'Evaluate', text: '$\\sqrt{0.0125} = 0.112$ m, so $V = (1.13\\times 10^{5})(0.012) = 1.3\\times 10^{3}$ V.' },
          { label: 'At the center', text: '$V(0) = \\sigma R/2\\varepsilon_0 = (1.13\\times 10^{5})(0.050) = 5.6\\times 10^{3}$ V.' },
          { label: 'Difference', text: '$V(0) - V(z) = 5.6\\times 10^{3} - 1.3\\times 10^{3} = 4.3\\times 10^{3}$ V \u2014 the potential falls off by about 77% over 10 cm.' },
        ],
        result: 'About $1.3\\times 10^{3}$ V at 10 cm, down from $5.6\\times 10^{3}$ V at the center \u2014 the disk is a mound of potential, flattening slowly toward $kq/z$ far away.',
      },
    ],
    keyTakeaways: [
      '$V = k\\int dq/r$ \u2014 scalar slicing, no components to project.',
      'Ring: $V = kq/\\sqrt{z^2+R^2}$; disk: $V = (\\sigma/2\\varepsilon_0)(\\sqrt{z^2+R^2} - z)$.',
      'All finite distributions approach the point-charge potential $kq/z$ at large distance \u2014 use it as a check.',
    ],
    quiz: [
      {
        q: 'At the center of a uniformly charged ring (in its plane), the potential is:',
        options: ['zero', `$kq/R$`, `$kq/\\sqrt{2}R$`, '$kq/z$ with $z = 0$, hence infinite'],
        answer: 1,
        explanation: 'Set $z = 0$ in $V = kq/\\sqrt{z^2+R^2}$: every element is at distance $R$, so $V = kq/R$.',
      },
      {
        q: 'Far from the disk ($z \\gg R$), its potential approaches:',
        options: [`$\\sigma/2\\varepsilon_0$`, 'zero', `$kq/z$ with $q = \\sigma\\pi R^2$`, `$\\sigma z/2\\varepsilon_0$`],
        answer: 2,
        explanation: '$\\sqrt{z^2+R^2} - z \\approx R^2/2z$, and $(\\sigma/2\\varepsilon_0)(R^2/2z) = k(\\sigma\\pi R^2)/z$.',
      },
      {
        q: 'Compared with integrating fields, integrating potentials is easier because:',
        options: ['potential is always positive', 'the contributions are scalars with no components to project', 'charges can be ignored in the integral', 'no distances are needed'],
        answer: 1,
        explanation: 'Each $dq$ contributes $k\\,dq/r$ with a built-in sign; there is no geometry of directions to track.',
      },
    ],
  },
  // ------------------------------------------------------------------ 24-6
  {
    sectionId: 'hall-ch24-s6',
    readingTime: 8,
    intro: 'Everything flows downhill, and the electric field is no exception: $\\vec E$ points in the direction in which $V$ drops fastest, and its magnitude is the slope of the potential. The relation $\\vec E = -\\nabla V$ is the great trade of this chapter \u2014 compute one scalar function by any means convenient (integrals, symmetry, even measurement on a voltmeter), then differentiate to get all three components of the field at once.',
    objectives: [
      'State the component rule $E_s = -\\partial V/\\partial s$ and the Cartesian gradient $\\vec E = -\\nabla V$',
      'Recover $\\vec E$ on symmetry axes by $E_z = -dV/dz$ for rings, disks and point charges',
      'Connect the sign: fields point from high potential to low potential, perpendicular to equipotentials',
    ],
    concepts: [
      {
        term: 'Field as slope of potential',
        kind: 'theorem',
        statement: "**The component of $\\vec E$ along any direction $s$ is minus the rate of change of $V$ in that direction:** $$E_s = -\\frac{\\partial V}{\\partial s}.$$ The field points from high $V$ toward low $V$, perpendicular to the equipotentials, with magnitude equal to the steepest local slope.",
      },
      {
        term: 'The gradient',
        kind: 'theorem',
        statement: "**Assembling all three Cartesian components,** $$\\vec E = -\\nabla V = -\\left(\\frac{\\partial V}{\\partial x}\\hat x + \\frac{\\partial V}{\\partial y}\\hat y + \\frac{\\partial V}{\\partial z}\\hat z\\right).$$ For axisymmetric distributions, one derivative suffices: $E_z = -dV/dz$ on the axis.",
        detail: 'Units work: V/m is the same as N/C, and each division by meters converts potential back into field.',
      },
      {
        term: 'Negative sign, geometric meaning',
        kind: 'insight',
        statement: '**The minus sign is physics, not bookkeeping: positive charges coast downhill in $V$.** Release one anywhere and it accelerates along $-\\nabla V$; an electron, weighing the same slope, climbs instead.',
      },
      {
        term: 'Zero slope means zero field',
        kind: 'insight',
        statement: '**Where $V$ is constant in space, $\\vec E = 0$ \u2014 and conversely.** A flat region of the potential map is a field-free room: the interior of a conductor, the center of a charged ring\u2019s plane, the exact midpoint between identical charges.',
      },
      {
        term: "Calculating the Field from the Potential: solution protocol",
        kind: "method",
        statement: "**Solve Calculating the Field from the Potential problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric potential from work per charge; the working equation is $V = U/q_0$, $V = kq/r$, $E = -dV/dx$ (1D), $U = kq_1q_2/r$; every substitution must carry its units so the final unit (volts ($\\text{J/C}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $V\\sim 10^2$--$10^4\\ \\text{V}$ for $\\mu\\text{C}$ at cm--m; $V = 0$ at infinity convention; $E = -\\nabla V$ always.",
      },
    ],
    examples: [
      {
        title: 'Field of a ring, differentiated',
        problem: "A ring of radius $R = 3.0$ cm carries $q = +2.0\\ \\mu$C. Use the ring potential to find $E_z$ on the axis at $z = 4.0$ cm.",
        steps: [
          { label: 'Start from $V$', text: '$V = kq(z^2+R^2)^{-1/2}$.' },
          { label: 'Differentiate', text: '$E_z = -dV/dz = kq z\\,(z^2+R^2)^{-3/2}$ \u2014 the Chapter 22 ring-field formula, for free.' },
          { label: 'Insert numbers', text: 'With $z = 0.040$ m, $(z^2+R^2)^{3/2} = (0.050)^3 = 1.25\\times 10^{-4}\\ \\mathrm{m^3}$: $E_z = (8.99\\times 10^{9})(2.0\\times 10^{-6})(0.040)/(1.25\\times 10^{-4})$.' },
          { label: 'Evaluate', text: '$E_z = 5.8\\times 10^{6}$ N/C, pointing away from the ring.' },
        ],
        result: '$E_z = 5.8\\times 10^{6}$ N/C \u2014 one derivative replaces the vector integration of Chapter 22.',
      },
      {
        title: "Calculating the Field from the Potential: volt check",
        problem: "Find $V = kq/r$ at $1\\ \\text{m}$ from $1\\ \\mu\\text{C}$ (zero at infinity).",
        steps: [
          { label: "Substitute", text: "$V = 8.99\\times 10^9\\times 1\\times 10^{-6}/1$." },
          { label: "Compute", text: "$V \\approx 8990\\ \\text{V}$." },
        ],
        result: "$V \\approx 8990\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      '$E_s = -\\partial V/\\partial s$ in every direction; the full statement is $\\vec E = -\\nabla V$.',
      'On symmetry axes a single derivative $E_z = -dV/dz$ recovers the whole axial field.',
      'Constant $V$ region means $\\vec E = 0$; the minus sign sends fields from high to low potential.',
    ],
    quiz: [
      {
        q: 'The electric field at any point points:',
        options: ['toward higher potential', 'toward lower potential', 'along the equipotential surface', 'in the direction of $\\nabla V$'],
        answer: 1,
        explanation: '$\\vec E = -\\nabla V$: the field is the downhill direction of the potential landscape.',
      },
      {
        q: 'In a region the potential is $V = 5x^2$ (volts, with $x$ in meters). At $x = 2.0$ m, $E_x$ equals:',
        options: ['$-20$ V/m', '$+20$ V/m', '$-10$ V/m', '$-5$ V/m'],
        answer: 0,
        explanation: '$E_x = -dV/dx = -10x = -20$ V/m at $x = 2.0$ m.',
      },
      {
        q: 'If $V$ is constant throughout a region of space, then there:',
        options: ['is no charge anywhere', 'is no electric field in that region', 'are no equipotentials', 'is a uniform field'],
        answer: 1,
        explanation: 'Zero slope everywhere means $\\vec E = -\\nabla V = 0$; charges may still sit outside the region.',
      },
      {
        q: 'V/m and N/C are:',
        options: ['different quantities', 'the same unit for $E$', 'units of potential and flux respectively', 'related by $\\varepsilon_0$'],
        answer: 1,
        explanation: 'From $W = q\\Delta V$ and $E_s = -\\partial V/\\partial s$, both reduce to force per charge.',
      },
    ],
    // ---------------- masters tier: the gradient machinery, fully worked
    depth: [
      {
        tier: 'masters',
        title: 'The gradient, fully worked: the dipole field from its potential',
        blocks: [
          {
            kind: 'para',
            heading: 'Why one scalar beats three components',
            body: "A vector field demands three numbers per point; the electrostatic potential promises just one, yet loses nothing. The reason is the conservative character of the field: its work around any closed loop is zero, so $V$ is a well-defined function of position, and all three components of $\\vec E$ are partial derivatives of it. Whatever tool produced $V$ \u2014 direct integration, symmetry, a Laplace solver, or a voltmeter sweeping a tank of electrolyte \u2014 differentiation returns the complete field. The price is that differentiation must be done in the coordinates the symmetry hands you, which is where the spherical-coordinate gradient enters.",
          },
          {
            kind: 'theorem',
            heading: 'E = \u2212\u2207V in spherical coordinates',
            body: "For a potential with no \u03c6-dependence (any axisymmetric distribution \u2014 point charge, ring, disk, dipole), the gradient has two components: $$E_r = -\\frac{\\partial V}{\\partial r},\\qquad E_\\theta = -\\frac{1}{r}\\frac{\\partial V}{\\partial \\theta}.$$ The factor $1/r$ on the \u03b8-term is the metric of spherical coordinates \u2014 a small angular step covers a distance $r\\,d\\theta$, and slope must be change-in-$V$ per unit actual distance. The \u03c6 term drops out by symmetry, and each component carries its own minus sign.",
          },
          {
            kind: 'derivation',
            heading: 'The dipole field, component by component',
            body: "Start from the far-field potential of Section 24-4, $V = kp\\cos\\theta/r^{2}$. The radial derivative gives $$E_r = -\\frac{\\partial}{\\partial r}\\left(\\frac{kp\\cos\\theta}{r^{2}}\\right) = \\frac{2kp\\cos\\theta}{r^{3}},$$ and the angular derivative gives $$E_\\theta = -\\frac{1}{r}\\frac{\\partial}{\\partial\\theta}\\left(\\frac{kp\\cos\\theta}{r^{2}}\\right) = \\frac{kp\\sin\\theta}{r^{3}}.$$ The full dipole field is therefore $$\\vec E = \\frac{kp}{r^{3}}\\left(2\\cos\\theta\\,\\hat r + \\sin\\theta\\,\\hat\\theta\\right),$$ with every $1/r^{3}$ power and every trigonometric factor inherited from differentiating the $1/r^{2}$ scalar \u2014 no vector sums, no law of cosines, no component bookkeeping.",
          },
          {
            kind: 'example',
            heading: 'The two special directions, checked',
            body: "On the dipole axis ($\\theta = 0$): $\\hat\\theta$ contributes nothing and $\\vec E = (2kp/r^{3})\\hat r$ \u2014 exactly the axial result $2kp/r^{3}$ of Section 22-3, along $\\vec p$. On the perpendicular bisector ($\\theta = 90^\\circ$): $\\cos\\theta = 0$ kills $E_r$, leaving $\\vec E = (kp/r^{3})\\hat\\theta$; at the equator $\\hat\\theta$ points opposite to $\\vec p$, recovering the bisector result $kp/r^{3}$ antiparallel to the dipole moment. Numerically for water ($p = 6.2\\times 10^{-30}\\ \\mathrm{C\\cdot m}$) at $r = 10$ nm and $\\theta = 30^\\circ$: $E_r = 2kp\\cos 30^\\circ/r^{3} = 97$ N/C and $E_\\theta = kp\\sin 30^\\circ/r^{3} = 28$ N/C, combining to $|\\vec E| = 100$ N/C at $17^\\circ$ from the radial direction.",
          },
          {
            kind: 'remark',
            heading: 'What the gradient formalism proves about the field',
            body: "Any field of the form $\\vec E = -\\nabla V$ has identically zero curl \u2014 $\\nabla\\times\\nabla V = \\vec 0$ is a vector identity \u2014 which is precisely the statement that the electrostatic work $\\oint \\vec E\\cdot d\\vec s$ vanishes around closed loops. The converse holds too: every curl-free field on a simply connected region is a gradient. Potential theory is thus not a convenience layered on electrostatics but equivalent to it, and it is this structure that Laplace\u2019s equation $\\nabla^{2}V = 0$ exploits in charge-free regions. The day fields become time-dependent, Faraday\u2019s law breaks the zero-curl property, $\\vec E$ acquires a $-\\partial\\vec A/\\partial t$ part, and the scalar potential alone no longer suffices \u2014 the first hint of the vector potential that carries light.",
          },
          {
            kind: 'application',
            heading: 'Conductors, corona and lightning rods',
            body: "The gradient viewpoint makes conductor physics immediate. Inside the metal $\\vec E = 0$, so $V$ is constant \u2014 a conductor is an equipotential volume, and its surface is an equipotential that the external field meets at right angles. Near a sharp point of radius of curvature $r$, the equipotential surfaces crowd together to stay perpendicular to the surface, so $|\\vec E| \\approx \\Delta V/\\Delta d$ grows large where $\\Delta d$ shrinks; when it exceeds about $3\\times 10^{6}$ V/m, air itself breaks down and corona discharge leaks charge away. A lightning rod is nothing more than a device for concentrating gradient: it raises itself to the cloud\u2019s potential neighborhood while presenting a tiny radius on which $\\sigma/\\varepsilon_0$ exceeds breakdown \u2014 and bleeds the storm quietly rather than explosively.",
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ 24-7
  {
    sectionId: 'hall-ch24-s7',
    readingTime: 6,
    intro: 'A single charge brings no energy cost from infinity \u2014 but bring a second charge nearby and you must push against the first, and a third against both. The total work to assemble a system of charges, brought in from infinity one at a time, is stored as the system\u2019s electric potential energy: one $kq_iq_j/r$ term for every pair, counted once. Because the force is conservative, the answer cannot depend on the order or the paths \u2014 only on the final arrangement.',
    objectives: [
      'Write the potential energy of a system of charges as $U = \\Sigma_{\\text{pairs}} kq_iq_j/r_{ij}$',
      'Compute assembly work charge by charge, and verify order-independence',
      'Interpret the sign of $U$: positive for like-charge repulsion, negative for bound unlike pairs',
    ],
    concepts: [
      {
        term: 'Potential energy of a system',
        kind: 'theorem',
        statement: "**The electric potential energy of a system of point charges is the sum over all distinct pairs:** $$U = \\sum_{i<j} \\frac{k q_i q_j}{r_{ij}}.$$ It equals the total external work needed to assemble the system from infinity, one charge at a time \u2014 in any order, along any paths.",
      },
      {
        term: 'Assembly method',
        kind: 'method',
        statement: '**Bring the charges in one at a time and add the work of each step.** The $n$-th charge costs $W_n = q_n\\Sigma_{i<n} kq_i/r_{in}$ \u2014 the potential of everything already in place, times the newcomer. Summing all steps reproduces the pair formula with each pair once.',
      },
      {
        term: 'Reading the sign',
        kind: 'insight',
        statement: '**Like pairs cost positive work (pushed together under repulsion); unlike pairs release energy (bound).** Positive total $U$ means the system flies apart if released; negative total $U$ \u2014 like the electron\u2019s $-27$ eV in hydrogen \u2014 means it holds together.',
      },
      {
        term: 'Path independence',
        kind: 'insight',
        statement: '**The assembly result is a function of the final configuration only.** Reorder the assembly, take wild curved paths, pause midway \u2014 the conservative field keeps the books and the same $U$ drops out, because each pair\u2019s energy depends only on its separation.',
      },
      {
        term: "Electric Potential Energy of a System of Charged Particles: solution protocol",
        kind: "method",
        statement: "**Solve Electric Potential Energy of a System of Charged Particles problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric potential from work per charge; the working equation is $V = U/q_0$, $V = kq/r$, $E = -dV/dx$ (1D), $U = kq_1q_2/r$; every substitution must carry its units so the final unit (volts ($\\text{J/C}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $V\\sim 10^2$--$10^4\\ \\text{V}$ for $\\mu\\text{C}$ at cm--m; $V = 0$ at infinity convention; $E = -\\nabla V$ always.",
      },
    ],
    figures: [
      {
        caption: 'Assembling a triangle of three like charges: $q_1$ is free, $q_2$ costs $kq_1q_2/r$, and $q_3$ costs $kq_3(q_1+q_2)/r$ \u2014 two pair terms. The total $U = 3kq^2/r$ for equal charges counts every edge of the triangle exactly once, whichever order the charges arrive.',
        svg: `<svg viewBox="0 0 720 330" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Assembly of three charges at the corners of a triangle, brought in from infinity along dashed paths"><defs><marker id="asA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="200" y1="80" x2="520" y2="80" stroke="currentColor" stroke-width="1.5" opacity="0.6"/><line x1="520" y1="80" x2="360" y2="280" stroke="currentColor" stroke-width="1.5" opacity="0.6"/><line x1="360" y1="280" x2="200" y2="80" stroke="currentColor" stroke-width="1.5" opacity="0.6"/><text x="360" y="68" text-anchor="middle" font-size="16" fill="currentColor">r</text><text x="455" y="190" text-anchor="middle" font-size="16" fill="currentColor">r</text><text x="265" y="190" text-anchor="middle" font-size="16" fill="currentColor">r</text><circle cx="200" cy="80" r="22" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="2.5"/><text x="200" y="87" text-anchor="middle" font-size="16" fill="currentColor">q₁</text><circle cx="520" cy="80" r="22" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="2.5"/><text x="520" y="87" text-anchor="middle" font-size="16" fill="currentColor">q₂</text><circle cx="360" cy="280" r="22" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="2.5"/><text x="360" y="287" text-anchor="middle" font-size="16" fill="currentColor">q₃</text><path d="M 680,190 C 655,105 600,80 552,80" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6" marker-end="url(#asA)"/><text x="640" y="225" text-anchor="middle" font-size="15" fill="currentColor">q₂ from ∞</text><path d="M 60,240 C 140,300 250,296 328,284" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6" marker-end="url(#asA)"/><text x="110" y="210" text-anchor="middle" font-size="15" fill="currentColor">q₃ from ∞</text><text x="640" y="130" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.85">W₂ = kq₁q₂/r</text><text x="120" y="320" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.85">W₃ = kq₃(q₁ + q₂)/r</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Assembling an equilateral triangle',
        problem: "Three charges $q = +5.0\\ \\mu$C are placed at the corners of an equilateral triangle of side $a = 3.0$ cm. How much work does the assembly take?",
        steps: [
          { label: 'One pair', text: 'A single pair stores $kq^2/a = (8.99\\times 10^{9})(5.0\\times 10^{-6})^2/0.030 = 7.5$ J.' },
          { label: 'Count pairs', text: 'Three charges give $\\binom{3}{2} = 3$ pairs: three edges of the triangle.' },
          { label: 'Total', text: '$U = 3kq^2/a = 3(7.5) = 22.5$ J.' },
          { label: 'Step check', text: 'Charge by charge: $W_2 = kq^2/a = 7.5$ J; $W_3 = 2kq^2/a = 15.0$ J; total $7.5 + 15.0 = 22.5$ J.\u2713' },
        ],
        result: 'The assembly stores 22.5 J \u2014 release the clamps and the like charges spend exactly that much kinetic energy flying apart.',
      },
      {
        title: "Electric Potential Energy of a System of Charged Particles: volt check",
        problem: "Find $V = kq/r$ at $1.25\\ \\text{m}$ from $2\\ \\mu\\text{C}$ (zero at infinity).",
        steps: [
          { label: "Substitute", text: "$V = 8.99\\times 10^9\\times 2\\times 10^{-6}/1.25$." },
          { label: "Compute", text: "$V \\approx 14400\\ \\text{V}$." },
        ],
        result: "$V \\approx 14400\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      'System energy: $U = \\Sigma_{\\text{pairs}} kq_iq_j/r_{ij}$, each pair counted once.',
      'Assembly work is order- and path-independent \u2014 conservatism guarantees it.',
      'Positive $U$ means stored repulsion (explodes); negative $U$ means binding.',
    ],
    quiz: [
      {
        q: 'A system of three charges has how many pair terms in its potential energy?',
        options: ['2', '3', '6', '9'],
        answer: 1,
        explanation: 'Each unordered pair contributes once: $\\binom{3}{2} = 3$ terms.',
      },
      {
        q: 'The potential energy of an electron\u2013proton pair at separation $r$ is:',
        options: ['positive, $+ke^2/r$', 'negative, $-ke^2/r$', 'zero, since the charges are equal in magnitude', 'positive but half as large'],
        answer: 1,
        explanation: 'The product $q_1q_2 < 0$, so $U < 0$: work is released as they come together \u2014 the hydrogen ground state\u2019s $-13.6$ eV structure.',
      },
      {
        q: 'For three equal charges at the corners of an equilateral triangle of side $a$, the total assembly work is:',
        options: [`$kq^2/a$`, `$2kq^2/a$`, `$3kq^2/a$`, `$6kq^2/a$`],
        answer: 2,
        explanation: 'Three identical pairs, each $kq^2/a$.',
      },
      {
        q: 'Assembling the same final configuration in a different order:',
        options: ['changes the total work', 'gives the same total work', 'gives zero total work', 'doubles the number of pair terms'],
        answer: 1,
        explanation: 'The electrostatic force is conservative: $U$ depends only on the final pair separations, never on the assembly sequence.',
      },
    ],
  },
  // ------------------------------------------------------------------ 24-8
  {
    sectionId: 'hall-ch24-s8',
    readingTime: 6,
    intro: 'A conductor already knows it is an equipotential \u2014 now that becomes quantitative. An isolated charged sphere of radius $R$ sits entirely at $V = kq/R$, the same formula as a point charge evaluated at the surface. Connect two distant spheres by a thin wire and they become one conductor: charge flows until both share the same potential, piling more charge (and more surface density) onto the bigger sphere \u2014 the physics of the lightning rod, the Van de Graaff generator\u2019s belt-to-dome handoff, and every sharp edge that hisses in the rain.',
    objectives: [
      'Show that a charged isolated conductor is at a single potential, $V = kq/R$ for a sphere',
      'Analyze connected conductors: charge splits so that $V_1 = V_2$',
      'Explain why sharp points (small $R$, large $\\sigma$) reach breakdown first \u2014 corona discharge',
    ],
    concepts: [
      {
        term: 'Potential of a conductor',
        kind: 'theorem',
        statement: "**A charged isolated conductor is at one potential throughout \u2014 surface and interior alike.** For a sphere of radius $R$ carrying charge $q$: $$V = \\frac{kq}{R}$$ at and inside the surface, while outside $V = kq/r$ as if all charge sat at the center.",
      },
      {
        term: 'Connected conductors share potential',
        kind: 'theorem',
        statement: "**Charges joined by a wire flow until the whole assembly is one equipotential.** Two distant spheres ($R_1, R_2$, total charge $Q$) reach $V = kQ/(R_1+R_2)$, carrying $q_1 = Q R_1/(R_1+R_2)$ and $q_2 = Q R_2/(R_1+R_2)$: charge goes to the larger sphere, surface density $\\sigma = q/4\\pi R^2$ goes to the smaller one.",
      },
      {
        term: 'Charge crowds to small radii',
        kind: 'insight',
        statement: '**Equal potentials mean $\\sigma \\propto 1/R$.** The smaller sphere ends with the larger surface charge density and the stronger surface field $E = \\sigma/\\varepsilon_0$ \u2014 curvature is where field concentrates.',
      },
      {
        term: 'Corona and breakdown',
        kind: 'insight',
        statement: '**When the surface field of a conductor exceeds about $3\\times 10^{6}$ V/m, air ionizes and corona discharge leaks charge away.** Because sharp points have tiny local $R$, they reach this limit first \u2014 the reason lightning rods are pointed, high-voltage hardware is rounded, and Saint Elmo\u2019s fire glows on mast tips in storms.',
      },
      {
        term: "Potential of a Charged Isolated Conductor: solution protocol",
        kind: "method",
        statement: "**Solve Potential of a Charged Isolated Conductor problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is electric potential from work per charge; the working equation is $V = U/q_0$, $V = kq/r$, $E = -dV/dx$ (1D), $U = kq_1q_2/r$; every substitution must carry its units so the final unit (volts ($\\text{J/C}$)) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $V\\sim 10^2$--$10^4\\ \\text{V}$ for $\\mu\\text{C}$ at cm--m; $V = 0$ at infinity convention; $E = -\\nabla V$ always.",
      },
    ],
    examples: [
      {
        title: 'Two spheres on a wire',
        problem: "Spheres of radii $R_1 = 1.0$ cm and $R_2 = 2.0$ cm, far apart, are connected by a thin wire, and the pair carries total charge $Q = +3.0$ nC. Find the common potential and the charge on each sphere.",
        steps: [
          { label: 'Equal potentials', text: '$q_1/R_1 = q_2/R_2$ with $q_1 + q_2 = Q$ \u2014 one conductor, one potential.' },
          { label: 'Solve', text: '$q_1 = QR_1/(R_1+R_2) = (3.0\\ \\mathrm{nC})(1.0/3.0) = 1.0$ nC and $q_2 = 2.0$ nC.' },
          { label: 'Common potential', text: '$V = kq_1/R_1 = (8.99\\times 10^{9})(1.0\\times 10^{-9})/0.010 = 9.0\\times 10^{2}$ V (check: $kq_2/R_2 = 8.99\\times 10^{9}\\times 2\\times 10^{-9}/0.02 = 9.0\\times 10^{2}$ V too).' },
          { label: 'Densities', text: '$\\sigma_1 = q_1/4\\pi R_1^2 = 0.80\\ \\mu\\mathrm{C/m^2}$ versus $\\sigma_2 = 0.40\\ \\mu\\mathrm{C/m^2}$: the small sphere carries twice the density and twice the surface field.' },
        ],
        result: 'Common potential 900 V; charges 1.0 nC and 2.0 nC \u2014 the bigger sphere hoards the charge, the smaller one the field.',
      },
      {
        title: "Potential of a Charged Isolated Conductor: volt check",
        problem: "Find $V = kq/r$ at $0.5\\ \\text{m}$ from $3\\ \\mu\\text{C}$ (zero at infinity).",
        steps: [
          { label: "Substitute", text: "$V = 8.99\\times 10^9\\times 3\\times 10^{-6}/0.5$." },
          { label: "Compute", text: "$V \\approx 53900\\ \\text{V}$." },
        ],
        result: "$V \\approx 53900\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      'An isolated charged sphere sits entirely at $V = kq/R$; outside, $V = kq/r$ like a point charge.',
      'Connected conductors reach a single potential; charge divides in proportion to radius, density as $1/R$.',
      'Sharp points mean large $\\sigma$ and $E = \\sigma/\\varepsilon_0$, reaching air\u2019s breakdown field first \u2014 corona.',
    ],
    quiz: [
      {
        q: 'A conducting sphere of radius $R$ carries charge $q$. The potential at its center (inside the metal) is:',
        options: ['$kq/R$ \u2014 the same as at the surface', 'zero', '$kq/r$ with $r = 0$: infinite', 'half the surface value'],
        answer: 0,
        explanation: 'The conductor is a single equipotential: $V = kq/R$ on the surface and everywhere inside.',
      },
      {
        q: 'Two distant spheres connected by a thin wire share their total charge. After equilibrium, compared with the smaller sphere, the larger sphere has:',
        options: ['more charge and larger $\\sigma$', 'more charge but smaller $\\sigma$', 'less charge and larger $\\sigma$', 'the same charge'],
        answer: 1,
        explanation: 'Equal potentials force $q \\propto R$ but $\\sigma = q/4\\pi R^2 \\propto 1/R$.',
      },
      {
        q: 'A Van de Graaff dome is made smoothly round rather than knobby because:',
        options: ['round domes hold more total charge', 'knobs have small local radii, hence large $\\sigma$ and fields that trigger corona at lower voltage', 'sharp points attract electrons only', 'the potential of a knob is higher than that of the dome'],
        answer: 1,
        explanation: 'The whole conductor is at one potential; local surface field $\\sigma/\\varepsilon_0$ blows up at small radii of curvature, and air breaks down near $3\\times 10^{6}$ V/m.',
      },
      {
        q: 'Spheres of radii 1.0 cm and 2.0 cm are connected and carry a total of 3.0 nC. The common potential is about:',
        options: ['300 V', '900 V', '1800 V', '2700 V'],
        answer: 1,
        explanation: '$V = kQ/(R_1+R_2) = (8.99\\times 10^{9})(3.0\\times 10^{-9})/0.030 \\approx 900$ V.',
      },
    ],
  },
]
