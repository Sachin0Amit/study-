import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 33
// Electromagnetic Waves — sections 33-1 … 33-7 (ids hall-ch33-s1 … s7).
// The wave that falls out of Maxwell's equations, energy transport and the
// Poynting vector (with the full masters-level derivation), radiation
// pressure, polarization, reflection and refraction, total internal
// reflection, and polarization by reflection.
// ============================================================================

export const hallCh33Content: SectionContent[] = [
  // ------------------------------------------------------------------ 33-1
  {
    sectionId: 'hall-ch33-s1',
    readingTime: 6,
    intro: "Maxwell's equations, completed with the displacement current, contain a surprise: in vacuum they force electric and magnetic fields to travel together as a transverse wave moving at $1/\\sqrt{\\mu_0\\varepsilon_0} = 3.00\\times 10^8$ m/s — the measured speed of light. Light, radio, X-rays: all are the same electromagnetic wave, differing only in wavelength.",
    objectives: [
      'Describe an electromagnetic wave: transverse, with $\\vec E\\perp\\vec B\\perp$ propagation, and $E = cB$',
      'Compute the speed of light from $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$',
      'Relate wavelength, frequency and speed through $c = \\lambda\\nu$',
    ],
    concepts: [
      {
        term: 'Electromagnetic wave',
        kind: 'definition',
        statement: "**A traveling pattern of coupled $\\vec E$ and $\\vec B$ fields.** Both fields are transverse (perpendicular to the direction of travel), mutually perpendicular, oscillating in phase, and locked in magnitude: at every point and instant $E = cB$. The plane of polarization is the plane in which $\\vec E$ oscillates.",
        detail: 'A sinusoidal wave traveling in the $+x$ direction with $\\vec E$ along $\\hat y$: $E = E_m\\sin(kx - \\omega t)$ and $B = (E_m/c)\\sin(kx - \\omega t)$, with $k = 2\\pi/\\lambda$ and $\\omega = 2\\pi\\nu$.',
      },
      {
        term: 'The speed of light',
        kind: 'theorem',
        statement: "**From Maxwell's equations in vacuum, the wave speed is** $$c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} = 2.998\\times 10^{8}\\ \\mathrm{m/s}.$$ That two laboratory constants of electricity and magnetism conspire to give the measured speed of light is the founding evidence that light is an electromagnetic wave.",
      },
      {
        term: 'The right-hand orientation rule',
        kind: 'law',
        statement: "**$\\vec E\\times\\vec B$ points along the direction of propagation.** Cross $\\vec E$ into $\\vec B$ with the right hand: the thumb gives the direction the wave travels. Reversing either field or swapping their roles reverses the propagation.",
      },
      {
        term: 'The electromagnetic spectrum',
        kind: 'insight',
        statement: '**One family, one speed, wavelengths from kilometers to femtometers:** radio (meters and up), microwaves, infrared, the narrow visible band 400–700 nm, ultraviolet, X-rays, gamma rays. All obey $c = \\lambda\\nu$, and all are produced by accelerating charges or quantum transitions.',
      },
      {
        term: "Electromagnetic Waves: solution protocol",
        kind: "method",
        statement: "**Solve Electromagnetic Waves problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling EM waves with Poynting flow and polarization; the working equation is $c = 2.998\\times 10^8\\ \\text{m/s}$, $I = c\\varepsilon_0E_{\\text{rms}}^2$, $I = I_0\\cos^2\\theta$, $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$; every substitution must carry its units so the final unit ($\\text{W/m}^2$ and pascals of radiation pressure) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I_{\\odot} \\approx 1400\\ \\text{W/m}^2$; $p_r\\sim 10^{-6}\\ \\text{Pa}$; far field in vacuum; Malus needs polarized input.",
      },
    ],
    figures: [
      {
        caption: 'A plane electromagnetic wave: $\\vec E$ oscillates vertically, $\\vec B$ horizontally (drawn in perspective), both perpendicular to each other and to the direction of travel. The two fields are in phase, with $E = cB$ at every point — note the shared nodes and the equal-amplitude crests one wavelength apart.',
        afterConcept: 3,
        svg: `<svg viewBox="0 0 720 400" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electromagnetic wave: perpendicular E and B fields in phase, propagating along x">
  <text x="30" y="34" font-size="15" fill="currentColor" opacity="0.75">plane EM wave: E and B in phase, mutually perpendicular</text>
  <line x1="60" y1="200" x2="672" y2="200" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
  <path d="M 660 194 L 672 200 L 660 206" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
  <text x="585" y="221" font-size="14" fill="currentColor" opacity="0.6">x (propagation)</text>
  <polyline fill="none" stroke="currentColor" stroke-width="2.5" opacity="0.95" points="80,200.0 88,183.9 96,168.4 104,153.8 112,140.8 120,129.6 128,120.7 136,114.4 144,110.8 152,110.1 160,112.3 168,117.2 176,124.9 184,134.9 192,147.1 200,161.0 208,176.1 216,191.9 224,208.1 232,223.9 240,239.0 248,252.9 256,265.1 264,275.1 272,282.8 280,287.7 288,289.9 296,289.2 304,285.6 312,279.3 320,270.4 328,259.2 336,246.2 344,231.6 352,216.1 360,200.0 368,183.9 376,168.4 384,153.8 392,140.8 400,129.6 408,120.7 416,114.4 424,110.8 432,110.1 440,112.3 448,117.2 456,124.9 464,134.9 472,147.1 480,161.0 488,176.1 496,191.9 504,208.1 512,223.9 520,239.0 528,252.9 536,265.1 544,275.1 552,282.8 560,287.7 568,289.9 576,289.2 584,285.6 592,279.3 600,270.4 608,259.2 616,246.2 624,231.6 632,216.1 640,200.0"/>
  <polyline fill="none" stroke="currentColor" stroke-width="2.5" opacity="0.5" points="80.0,200.0 79.2,213.5 78.6,226.6 78.6,238.8 79.4,249.7 81.3,259.1 84.4,266.6 88.9,271.9 94.9,274.9 102.5,275.5 111.7,273.7 122.5,269.5 134.7,263.1 148.2,254.6 162.9,244.4 178.5,232.8 194.8,220.1 211.6,206.8 228.4,193.2 245.2,179.9 261.5,167.2 277.1,155.6 291.8,145.4 305.3,136.9 317.5,130.5 328.3,126.3 337.5,124.5 345.1,125.1 351.1,128.1 355.6,133.4 358.7,140.9 360.6,150.3 361.4,161.2 361.4,173.4 360.8,186.5 360.0,200.0 359.2,213.5 358.6,226.6 358.6,238.8 359.4,249.7 361.3,259.1 364.4,266.6 368.9,271.9 374.9,274.9 382.5,275.5 391.7,273.7 402.5,269.5 414.7,263.1 428.2,254.6 442.9,244.4 458.5,232.8 474.8,220.1 491.6,206.8 508.4,193.2 525.2,179.9 541.5,167.2 557.1,155.6 571.8,145.4 585.3,136.9 597.5,130.5 608.3,126.3 617.5,124.5 625.1,125.1 631.1,128.1 635.6,133.4 638.7,140.9 640.6,150.3 641.4,161.2 641.4,173.4 640.8,186.5 640.0,200.0"/>
  <line x1="150" y1="200" x2="150" y2="114" stroke="currentColor" stroke-width="2.5"/>
  <path d="M 144 124 L 150 112 L 156 124" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="162" y="116" font-size="18" font-weight="bold" fill="currentColor">E</text>
  <line x1="150" y1="200" x2="102" y2="273" stroke="currentColor" stroke-width="2.5" opacity="0.7"/>
  <path d="M 111.3 268.3 L 100.5 275.6 L 102.9 262.8" fill="none" stroke="currentColor" stroke-width="2.5" opacity="0.7"/>
  <text x="84" y="292" font-size="18" font-weight="bold" fill="currentColor" opacity="0.7">B</text>
  <line x1="150" y1="88" x2="430" y2="88" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <path d="M 160 83 L 150 88 L 160 93" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <path d="M 420 83 L 430 88 L 420 93" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <line x1="150" y1="92" x2="150" y2="106" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/>
  <line x1="430" y1="92" x2="430" y2="106" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/>
  <text x="283" y="78" font-size="16" fill="currentColor">λ</text>
</svg>`,
      },
    ],
    examples: [
      {
        title: 'Fields of a radio wave',
        problem: 'A plane electromagnetic wave has electric-field amplitude $E_m = 6.0$ V/m and frequency $\\nu = 100$ MHz. Find (a) the magnetic amplitude, (b) the wavelength and period, (c) the direction of $\\vec B$ if $\\vec E$ oscillates along $\\hat y$ and the wave travels along $+\\hat x$.',
        steps: [
          { label: 'Magnetic amplitude', text: '$B_m = E_m/c = 6.0/(3.00\\times 10^{8}) = 2.0\\times 10^{-8}$ T.' },
          { label: 'Wavelength and period', text: '$\\lambda = c/\\nu = (3.00\\times 10^{8})/(1.00\\times 10^{8}) = 3.0$ m; $T = 1/\\nu = 10$ ns.' },
          { label: 'Direction of B', text: 'Propagation must be along $\\vec E\\times\\vec B = \\hat x$, so with $\\vec E$ along $\\hat y$ the magnetic field must oscillate along $\\hat z$, in phase.' },
          { label: 'Check', text: 'At the instant $E = +6.0$ V/m along $+\\hat y$, $B = +2.0\\times 10^{-8}$ T along $+\\hat z$ — and $\\hat y\\times\\hat z = \\hat x$.' },
        ],
        result: '$B_m = 20$ nT, $\\lambda = 3.0$ m, $T = 10$ ns, with $\\vec B$ along $\\hat z$.',
      },
      {
        title: "Electromagnetic Waves: Snell check",
        problem: "Light in air ($n_1 = 1.00$) strikes glass ($n_2 = 1.50$) at $40^\\circ$ from the normal. Find $\\theta_2$ via $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$.",
        steps: [
          { label: "Sine", text: "$\\sin\\theta_2 = \\sin 40^\\circ/1.50 = 0.429$." },
          { label: "Angle", text: "$\\theta_2 \\approx 25.4^\\circ$ — bent toward the normal." },
        ],
        result: "$\\theta_2 \\approx 25.4^\\circ$.",
      },
    ],
    keyTakeaways: [
      'EM waves are transverse with $\\vec E \\perp \\vec B \\perp$ propagation, in phase, and $E = cB$ everywhere.',
      '$c = 1/\\sqrt{\\mu_0\\varepsilon_0} = 3.00\\times 10^8$ m/s — light is an electromagnetic wave.',
      '$\\vec E\\times\\vec B$ gives the propagation direction; $c = \\lambda\\nu$ organizes the whole spectrum.',
    ],
    quiz: [
      {
        q: 'In an electromagnetic wave, the ratio of electric to magnetic field amplitudes is:',
        options: [`$1/\\mu_0$`, `$c$`, `$\\mu_0\\varepsilon_0$`, `$2c$`],
        answer: 1,
        explanation: 'The fields are locked by the wave structure: $E_m = cB_m$.',
      },
      {
        q: 'A wave travels along $+\\hat x$ with $\\vec E$ along $\\hat y$. The magnetic field oscillates along:',
        options: [`$\\hat y$`, `$\\hat z$`, `$-\\hat y$`, `$\\hat x$`],
        answer: 1,
        explanation: '$\\hat y\\times\\hat z = \\hat x$: the cross product must point along the propagation.',
      },
      {
        q: 'If the frequency of a wave is doubled while it stays in the same medium (vacuum), its wavelength:',
        options: ['doubles', 'halves', 'is unchanged', 'quadruples'],
        answer: 1,
        explanation: '$\\lambda = c/\\nu$ with $c$ fixed.',
      },
      {
        q: 'Which configuration cannot be an electromagnetic wave in vacuum?',
        options: [`$\\vec E \\perp \\vec B$`, `$\\vec E$ parallel to $\\vec B$`, '$\\vec E \\perp$ propagation', 'fields in phase'],
        answer: 1,
        explanation: 'Both fields must be transverse and mutually perpendicular; a parallel component is impossible for a free wave.',
      },
    ],
  },
  // ------------------------------------------------------------------ 33-2
  {
    sectionId: 'hall-ch33-s2',
    readingTime: 7,
    intro: "An electromagnetic wave is not just a moving pattern — it is moving energy. The energy per volume is shared equally between the electric and magnetic fields, and it flows in the propagation direction at exactly $c$. The bookkeeping vector for that flow is the Poynting vector, and its time average is the intensity that detectors, eyes, and solar panels actually measure.",
    objectives: [
      'Compute energy flow with the Poynting vector $\\vec S = \\vec E\\times\\vec B/\\mu_0$',
      'State the energy density of an EM wave and its equal electric and magnetic shares',
      'Convert between intensity and the field amplitudes $E_m, B_m$ (and rms values)',
    ],
    concepts: [
      {
        term: 'Poynting vector',
        kind: 'definition',
        statement: "**The instantaneous energy flux of the fields is** $$\\vec S = \\frac{1}{\\mu_0}\\,\\vec E\\times\\vec B,$$ in $\\mathrm{W/m^2}$. Its direction is the direction of energy transport — for a plane wave, the propagation direction — and its magnitude is the energy crossing unit area per unit time.",
      },
      {
        term: 'Intensity',
        kind: 'definition',
        statement: "**The intensity is the time-averaged magnitude of $\\vec S$.** For a sinusoidal wave, $$I = \\frac{E_mB_m}{2\\mu_0} = \\frac{E_m^2}{2\\mu_0 c} = \\frac{c\\varepsilon_0 E_m^2}{2} = \\frac{cB_m^2}{2\\mu_0}.$$ In rms quantities, $I = c\\varepsilon_0 E_\\text{rms}^2 = E_\\text{rms}B_\\text{rms}/\\mu_0$, with $E_\\text{rms} = E_m/\\sqrt2$.",
      },
      {
        term: 'Energy density of the wave',
        kind: 'theorem',
        statement: "**The instantaneous energy density splits equally:** $$u = \\frac{\\varepsilon_0 E^2}{2} + \\frac{B^2}{2\\mu_0} = \\varepsilon_0 E^2,$$ the last step because $B = E/c$ makes the two shares identical. Averaging over a cycle, $\\langle u\\rangle = \\varepsilon_0 E_m^2/2 = I/c$.",
      },
      {
        term: 'Energy travels at c',
        kind: 'insight',
        statement: '**The Poynting vector equals energy density times speed: $S = cu$ for a plane wave.** Energy does not merely accompany the wave — it *is* the wave, moving at exactly $c$. The masters tier below derives this, and the $S = (1/\\mu_0)\\vec E\\times\\vec B$ formula, from Maxwell\u2019s equations themselves.',
      },
      {
        term: "Energy Transport and the Poynting Vector: solution protocol",
        kind: "method",
        statement: "**Solve Energy Transport and the Poynting Vector problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling EM waves with Poynting flow and polarization; the working equation is $c = 2.998\\times 10^8\\ \\text{m/s}$, $I = c\\varepsilon_0E_{\\text{rms}}^2$, $I = I_0\\cos^2\\theta$, $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$; every substitution must carry its units so the final unit ($\\text{W/m}^2$ and pascals of radiation pressure) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I_{\\odot} \\approx 1400\\ \\text{W/m}^2$; $p_r\\sim 10^{-6}\\ \\text{Pa}$; far field in vacuum; Malus needs polarized input.",
      },
    ],
    examples: [
      {
        title: 'Fields in sunlight',
        problem: 'Sunlight at ground level on a clear day has intensity about $I = 1.0\\times 10^{3}\\ \\mathrm{W/m^2}$. Find the field amplitudes and average energy density.',
        steps: [
          { label: 'Electric amplitude', text: 'From $I = c\\varepsilon_0 E_m^2/2$: $E_m = \\sqrt{2I/(c\\varepsilon_0)} = \\sqrt{(2.0\\times 10^{3})/(2.66\\times 10^{-3})}$.' },
          { label: 'Evaluate', text: '$E_m = 8.7\\times 10^{2}$ V/m, so $E_\\text{rms} = E_m/\\sqrt{2} = 6.1\\times 10^{2}$ V/m.' },
          { label: 'Magnetic amplitude', text: '$B_m = E_m/c = (8.7\\times 10^{2})/(3.00\\times 10^{8}) = 2.9\\times 10^{-6}$ T.' },
          { label: 'Energy density', text: '$\\langle u\\rangle = I/c = (1.0\\times 10^{3})/(3.00\\times 10^{8}) = 3.3\\times 10^{-6}\\ \\mathrm{J/m^3}$.' },
        ],
        result: '$E_m \\approx 870$ V/m, $B_m \\approx 2.9\\ \\mu$T — modest fields, yet enough flux to power the planet.',
      },
      {
        title: "Energy Transport and the Poynting Vector: Snell check",
        problem: "Light in air ($n_1 = 1.00$) strikes glass ($n_2 = 1.50$) at $50^\\circ$ from the normal. Find $\\theta_2$ via $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$.",
        steps: [
          { label: "Sine", text: "$\\sin\\theta_2 = \\sin 50^\\circ/1.50 = 0.511$." },
          { label: "Angle", text: "$\\theta_2 \\approx 30.7^\\circ$ — bent toward the normal." },
        ],
        result: "$\\theta_2 \\approx 30.7^\\circ$.",
      },
    ],
    keyTakeaways: [
      '$\\vec S = \\vec E\\times\\vec B/\\mu_0$ gives the instantaneous energy flux in $\\mathrm{W/m^2}$, along the propagation.',
      'Electric and magnetic field energies are exactly equal in an EM wave: $u = \\varepsilon_0 E^2$, and $I = \\langle S\\rangle = c\\varepsilon_0 E_m^2/2$.',
      'Sunlight at $1000\\ \\mathrm{W/m^2}$ corresponds to $E_m \\approx 870$ V/m and $B_m \\approx 2.9\\ \\mu$T.',
    ],
    quiz: [
      {
        q: 'The SI units of the Poynting vector are:',
        options: ['J/m³', 'W/m²', 'N/C', 'V/m'],
        answer: 1,
        explanation: 'It is energy per area per time: watts per square meter.',
      },
      {
        q: 'Doubling the electric-field amplitude of a wave multiplies its intensity by:',
        options: ['2', `$\\sqrt{2}$`, '4', '8'],
        answer: 2,
        explanation: '$I \\propto E_m^2$, and likewise $\\propto B_m^2$.',
      },
      {
        q: 'In an electromagnetic wave, the electric and magnetic contributions to the energy density are:',
        options: ['equal at every instant', 'equal only after averaging', 'always electric-dominated', 'always magnetic-dominated'],
        answer: 0,
        explanation: 'Because $B = E/c$, $B^2/2\\mu_0 = \\varepsilon_0E^2/2$ point by point — the equality is instantaneous, not just average.',
      },
      {
        q: 'The instantaneous Poynting vector of a sinusoidal wave:',
        options: ['is constant in time', 'oscillates between zero and twice the average, at twice the wave frequency', 'changes sign every half cycle', 'is always zero at wave crests'],
        answer: 1,
        explanation: '$S = E^2/\\mu_0 c \\propto \\sin^2(kx-\\omega t)$: it never reverses but pulses at $2\\nu$ — far too fast for any detector to follow.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Where the Poynting vector comes from',
        blocks: [
          {
            kind: 'para',
            heading: 'The question',
            body: "Formulas like $I = c\\varepsilon_0E_m^2/2$ are usually quoted on faith. But the Poynting vector is not a convention — it is *forced* by Maxwell's equations. Two questions deserve real answers: why must energy flow be exactly $S = EB/\\mu_0$, and why does that energy move at exactly $c$? Both follow from differentiating the field energy density and letting the two curl equations do the work.",
          },
          {
            kind: 'theorem',
            heading: 'Local energy conservation (1D)',
            body: 'For a wave traveling along $x$, define the total field energy density $$u(x,t) = \\frac{\\varepsilon_0 E^2}{2} + \\frac{B^2}{2\\mu_0}.$$ Then Maxwell\u2019s equations in vacuum imply $$\\frac{\\partial u}{\\partial t} = -\\frac{\\partial}{\\partial x}\\!\\left(\\frac{EB}{\\mu_0}\\right).$$ Energy is neither created nor destroyed anywhere: it can only change at a point by flowing through, with flux $S = EB/\\mu_0$.',
          },
          {
            kind: 'derivation',
            heading: 'Differentiate the energy density',
            body: 'Differentiate and group by field: $$\\frac{\\partial u}{\\partial t} = \\varepsilon_0 E\\frac{\\partial E}{\\partial t} + \\frac{B}{\\mu_0}\\frac{\\partial B}{\\partial t}.$$ Now feed in the two curl equations (transverse wave, $\\vec E$ along $\\hat y$, $\\vec B$ along $\\hat z$). Faraday\u2019s law gives $\\partial E/\\partial x = -\\partial B/\\partial t$, and the Ampère–Maxwell law with no conduction current gives $\\partial B/\\partial x = -\\mu_0\\varepsilon_0\\, \\partial E/\\partial t$, so $\\partial E/\\partial t = -(1/\\mu_0\\varepsilon_0)\\,\\partial B/\\partial x$. Substituting, $$\\frac{\\partial u}{\\partial t} = \\varepsilon_0 E\\left(-\\frac{1}{\\mu_0\\varepsilon_0}\\frac{\\partial B}{\\partial x}\\right) + \\frac{B}{\\mu_0}\\left(-\\frac{\\partial E}{\\partial x}\\right) = -\\frac{1}{\\mu_0}\\left(E\\frac{\\partial B}{\\partial x} + B\\frac{\\partial E}{\\partial x}\\right) = -\\frac{1}{\\mu_0}\\frac{\\partial (EB)}{\\partial x}.$$ The product rule collapses the bracket into a single derivative of $EB$ — the flux density appears by itself.',
          },
          {
            kind: 'derivation',
            heading: 'Equal shares, and speed c',
            body: 'A traveling wave satisfies $B = E/c$. Check the magnetic share: $$\\frac{B^2}{2\\mu_0} = \\frac{E^2}{2\\mu_0 c^2} = \\frac{\\varepsilon_0 E^2}{2}$$ using $c^2 = 1/\\mu_0\\varepsilon_0$ — identical to the electric share, instantaneously. Hence $u = \\varepsilon_0E^2$ and $$S = \\frac{EB}{\\mu_0} = \\frac{E(E/c)}{\\mu_0} = \\varepsilon_0 c\\, E^2 = c\\,u.$$ Energy flux equals energy density times speed, with speed exactly $c$: the energy of the wave cannot drift or lag, it is carried at the wave speed.',
          },
          {
            kind: 'derivation',
            heading: 'Averaging a sinusoid',
            body: 'With $E = E_m\\sin(kx-\\omega t)$ and $B$ in phase, $S = E_m^2\\sin^2(kx-\\omega t)/\\mu_0 c$, which pulses at frequency $2\\nu$. Every real detector integrates over many cycles, so using $\\langle\\sin^2\\rangle = 1/2$: $$I = \\langle S\\rangle = \\frac{E_m^2}{2\\mu_0 c} = \\frac{c\\varepsilon_0 E_m^2}{2} = \\frac{E_mB_m}{2\\mu_0}.$$ In rms language, $E_\\text{rms} = E_m/\\sqrt{2}$ makes these become $I = c\\varepsilon_0E_\\text{rms}^2 = E_\\text{rms}B_\\text{rms}/\\mu_0$ — the forms engineers use for circuit fields and radiation alike.',
          },
          {
            kind: 'application',
            heading: 'Sunlight, checked',
            body: 'At $I = 1000\\ \\mathrm{W/m^2}$: $E_m = \\sqrt{2I/c\\varepsilon_0} = 868$ V/m, $B_m = E_m/c = 2.9\\ \\mu$T, $\\langle u\\rangle = I/c = 3.3\\ \\mu\\mathrm{J/m^3}$. The equal-shares theorem also gives a quick sanity check of any claimed field pair: $E_m/B_m$ must come out to $2.998\\times 10^8$ m/s.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ 33-3
  {
    sectionId: 'hall-ch33-s3',
    readingTime: 5,
    intro: "If light carries energy, it must carry momentum too — relativity says the two are linked. Light striking a surface therefore pushes on it: radiation pressure, utterly tiny for sunlight, yet measurable in the lab and serious business for spacecraft sails and for the tails of comets.",
    objectives: [
      'Relate the momentum of light to its energy, $p = U/c$',
      'Compute radiation pressure for absorbing and reflecting surfaces',
      'Evaluate the force on a solar sail',
    ],
    concepts: [
      {
        term: 'Light carries momentum',
        kind: 'law',
        statement: "**Electromagnetic radiation of energy $U$ carries momentum $p = U/c$.** When a surface absorbs the radiation, that momentum is transferred whole: $\\Delta p = \\Delta U/c$. A beam of intensity $I$ delivers momentum $I/c$ per unit area per unit time to a perfect absorber.",
      },
      {
        term: 'Radiation pressure',
        kind: 'definition',
        statement: "**The pressure of light on a surface:** $$p_r = \\frac{I}{c}\\ \\text{(total absorption)}, \\qquad p_r = \\frac{2I}{c}\\ \\text{(total reflection)}.$$ Reflection reverses the momentum of the light, so the transfer — and the pressure — is doubled.",
      },
      {
        term: 'Why the factor of two',
        kind: 'insight',
        statement: '**A reflected photon gives up twice the momentum of an absorbed one.** Absorption: momentum changes from $+U/c$ to 0. Reflection: from $+U/c$ to $-U/c$, a swing of $2U/c$. Same physics as bouncing a ball off a wall versus sticking it with putty.',
      },
      {
        term: 'Solar sails and comet tails',
        kind: 'insight',
        statement: "**Sunlight above the atmosphere delivers $I = 1361\\ \\mathrm{W/m^2}$, a pressure of only $4.5\\ \\mu$Pa on an absorber.** But with no fuel to run out of, a sail of thousands of square meters can reach meaningful thrust over months — spacecraft have flown them. Solar radiation pressure also blows comet dust tails away from the Sun, always anti-sunward regardless of the comet\u2019s motion.",
      },
      {
        term: "Radiation Pressure: solution protocol",
        kind: "method",
        statement: "**Solve Radiation Pressure problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling EM waves with Poynting flow and polarization; the working equation is $c = 2.998\\times 10^8\\ \\text{m/s}$, $I = c\\varepsilon_0E_{\\text{rms}}^2$, $I = I_0\\cos^2\\theta$, $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$; every substitution must carry its units so the final unit ($\\text{W/m}^2$ and pascals of radiation pressure) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I_{\\odot} \\approx 1400\\ \\text{W/m}^2$; $p_r\\sim 10^{-6}\\ \\text{Pa}$; far field in vacuum; Malus needs polarized input.",
      },
    ],
    examples: [
      {
        title: 'Thrust of a solar sail',
        problem: 'A perfectly reflecting sail of area $A = 1000\\ \\mathrm{m^2}$ faces the Sun above the atmosphere ($I = 1361\\ \\mathrm{W/m^2}$). Find the pressure and total force.',
        steps: [
          { label: 'Pressure', text: 'Reflecting surface: $p_r = 2I/c = 2(1361)/(3.00\\times 10^{8}) = 9.1\\times 10^{-6}$ Pa.' },
          { label: 'Force', text: '$F = p_r A = (9.1\\times 10^{-6})(1000) = 9.1\\times 10^{-3}$ N.' },
          { label: 'Compare', text: 'Atmospheric pressure is $1.0\\times 10^{5}$ Pa — sunlight\u2019s push is about one ten-billionth of it, which is why radiation pressure went unnoticed for most of history.' },
          { label: 'Perspective', text: '9 mN is about the weight of a paperclip — but sustained for years with zero propellant, it can move a small craft across the solar system.' },
        ],
        result: '$p_r = 9.1\\ \\mu$Pa and $F = 9.1$ mN — tiny but free and continuous.',
      },
      {
        title: "Radiation Pressure: Snell check",
        problem: "Light in air ($n_1 = 1.00$) strikes glass ($n_2 = 1.50$) at $30^\\circ$ from the normal. Find $\\theta_2$ via $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$.",
        steps: [
          { label: "Sine", text: "$\\sin\\theta_2 = \\sin 30^\\circ/1.50 = 0.333$." },
          { label: "Angle", text: "$\\theta_2 \\approx 19.5^\\circ$ — bent toward the normal." },
        ],
        result: "$\\theta_2 \\approx 19.5^\\circ$.",
      },
    ],
    keyTakeaways: [
      'Radiation carries momentum $p = U/c$; pressure on an absorber is $I/c$, on a perfect reflector $2I/c$.',
      'Sunlight\u2019s pressure at Earth is only micropascals — yet measurable and useful (sails, comet tails).',
      'Reflection doubles the momentum transfer because the light\u2019s momentum reverses.',
    ],
    quiz: [
      {
        q: 'The ratio of radiation pressure on a perfect reflector to that on a perfect absorber (same beam) is:',
        options: ['1/2', '1', '2', '4'],
        answer: 2,
        explanation: 'Reflection reverses the light\u2019s momentum: transfer $2U/c$ instead of $U/c$.',
      },
      {
        q: 'Doubling the intensity of the incident beam on an absorbing surface:',
        options: ['doubles the radiation pressure', 'quadruples the pressure', 'halves the pressure', 'leaves pressure unchanged'],
        answer: 0,
        explanation: '$p_r = I/c$ is linear in intensity.',
      },
      {
        q: 'A beam of energy 30 J is absorbed. The momentum delivered is:',
        options: ['30 kg·m/s', '$1.0\\times 10^{-7}$ kg·m/s', '$9\\times 10^{16}$ kg·m/s', 'zero'],
        answer: 1,
        explanation: '$p = U/c = 30/(3.0\\times 10^{8}) = 1.0\\times 10^{-7}$ kg·m/s.',
      },
      {
        q: 'Comet dust tails point away from the Sun because:',
        options: ['the solar wind is electrically charged', 'solar radiation pressure pushes the dust anti-sunward', 'the comet\u2019s motion drags them backward', 'magnetic fields coil them'],
        answer: 1,
        explanation: 'Light\u2019s momentum continuously pushes dust particles outward — the tail leads or trails the comet but always streams anti-sunward.',
      },
    ],
  },
  // ------------------------------------------------------------------ 33-4
  {
    sectionId: 'hall-ch33-s4',
    readingTime: 6,
    intro: "Being transverse, light has a property sound lacks: a direction of oscillation within the plane perpendicular to travel — its polarization. A polarizing sheet filters that direction, and Malus's law tells exactly how much light survives each filter. Two crossed sheets block everything; three, surprisingly, need not.",
    objectives: [
      'Define the polarization direction of light and distinguish polarized from unpolarized light',
      'Apply Malus\u2019s law, $I = I_0\\cos^2\\theta$',
      'Predict transmission through sequences of polarizing sheets',
    ],
    concepts: [
      {
        term: 'Polarization direction',
        kind: 'definition',
        statement: "**The polarization of a wave is the direction in which its electric field oscillates.** Ordinary light from thermal sources is *unpolarized*: the direction fluctuates randomly and rapidly about the propagation direction. Light is *polarized* when $\\vec E$ oscillates along one fixed line.",
      },
      {
        term: 'Polarizing sheet',
        kind: 'definition',
        statement: "**A sheet with a polarizing axis transmits only the component of $\\vec E$ along that axis.** Polarized light at angle $\\theta$ to the axis emerges reduced in amplitude by $\\cos\\theta$ and rotated to the axis; unpolarized light, averaging $\\cos^2\\theta$ over all angles, transmits exactly half.",
      },
      {
        term: "Malus' law",
        kind: 'law',
        statement: "**Polarized light of intensity $I_0$ incident on a sheet whose axis makes angle $\\theta$ with the polarization direction emerges with** $$I = I_0\\cos^2\\theta.$$ At $\\theta = 0$ everything passes; at $\\theta = 90^\\circ$ nothing does.",
      },
      {
        term: 'The crossed-and-uncrossed puzzle',
        kind: 'insight',
        statement: '**Two sheets at $90^\\circ$ transmit zero light — but insert a third at $45^\\circ$ between them and light gets through again.** The middle sheet *rotates the polarization* of whatever it transmits, one $\\cos^2$ step at a time. Nature never lets you skip the intermediate step.',
      },
      {
        term: "Polarization: solution protocol",
        kind: "method",
        statement: "**Solve Polarization problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling EM waves with Poynting flow and polarization; the working equation is $c = 2.998\\times 10^8\\ \\text{m/s}$, $I = c\\varepsilon_0E_{\\text{rms}}^2$, $I = I_0\\cos^2\\theta$, $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$; every substitution must carry its units so the final unit ($\\text{W/m}^2$ and pascals of radiation pressure) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I_{\\odot} \\approx 1400\\ \\text{W/m}^2$; $p_r\\sim 10^{-6}\\ \\text{Pa}$; far field in vacuum; Malus needs polarized input.",
      },
    ],
    examples: [
      {
        title: 'Three polarizing sheets',
        problem: 'Unpolarized light of intensity $I_0$ meets three sheets with axes at $0^\\circ$, $45^\\circ$, and $90^\\circ$. Find the transmitted intensity with and without the middle sheet.',
        steps: [
          { label: 'First sheet', text: 'Unpolarized input always transmits half: $I_1 = I_0/2$, now polarized along $0^\\circ$.' },
          { label: 'Second sheet', text: 'Malus with $\\theta = 45^\\circ$: $I_2 = (I_0/2)\\cos^2 45^\\circ = (I_0/2)(1/2) = I_0/4$, polarized along $45^\\circ$.' },
          { label: 'Third sheet', text: '$\\theta = 45^\\circ$ again relative to the new polarization: $I_3 = (I_0/4)(1/2) = I_0/8$.' },
          { label: 'Without the middle sheet', text: 'Axes at $0^\\circ$ then $90^\\circ$: $\\theta = 90^\\circ$, $\\cos^2 = 0$, and no light passes.' },
        ],
        result: 'With all three sheets: $I_0/8$ transmitted — infinitely more than the zero from the crossed pair alone.',
      },
      {
        title: "Polarization: Malus check",
        problem: "Unpolarized light is discarded; polarized $I_0 = 100\\ \\text{W/m}^2$ meets a polarizer at $45^\\circ$. Find $I = I_0\\cos^2\\theta$.",
        steps: [
          { label: "Cosine", text: "$\\cos 45^\\circ = 0.707$." },
          { label: "Square", text: "$I = 100\\times 0.5 = 50\\ \\text{W/m}^2$." },
        ],
        result: "$I \\approx 50\\ \\text{W/m}^2$.",
      },
    ],
    keyTakeaways: [
      'Polarization direction = direction of $\\vec E$ oscillation; unpolarized light averages over all of them.',
      "Malus' law: $I = I_0\\cos^2\\theta$; unpolarized light through one sheet gives exactly $I_0/2$.",
      'A 45° sheet between crossed sheets transmits $I_0/8$ — polarization can be rotated stepwise, never skipped.',
    ],
    quiz: [
      {
        q: 'Unpolarized light passes through a polarizing sheet. Regardless of the sheet\u2019s orientation, the transmitted intensity is:',
        options: [`$I_0$`, `$I_0/2$`, `$I_0\\cos^2\\theta$`, 'zero'],
        answer: 1,
        explanation: 'The average of $\\cos^2\\theta$ over random polarization directions is $1/2$.',
      },
      {
        q: 'Vertically polarized light hits a sheet with a horizontal axis. Transmitted intensity:',
        options: [`$I_0$`, `$I_0/2$`, `$I_0/4$`, 'zero'],
        answer: 3,
        explanation: '$\\theta = 90^\\circ$ and $\\cos^2 90^\\circ = 0$.',
      },
      {
        q: 'Polarized light of intensity $I_0$ passes a sheet at $30^\\circ$ to its polarization, then a second sheet at $90^\\circ$ to the original direction. The final intensity is:',
        options: [`$0.19 I_0$`, `$0.56 I_0$`, `$0.75 I_0$`, 'zero'],
        answer: 0,
        explanation: 'First sheet: $I_0\\cos^2 30^\\circ = 0.75 I_0$, now polarized at $30^\\circ$. Second sheet is at $60^\\circ$ to that: $0.75 I_0 \\cos^2 60^\\circ = 0.19 I_0$.',
      },
      {
        q: 'Light from the sky is partially polarized because of:',
        options: ['absorption in the atmosphere', 'scattering by air molecules', 'Earth\u2019s magnetic field', 'its high frequency'],
        answer: 1,
        explanation: 'Rayleigh scattering preferentially sends light polarized perpendicular to the scattering plane toward the observer — bees use it to navigate.',
      },
    ],
  },
  // ------------------------------------------------------------------ 33-5
  {
    sectionId: 'hall-ch33-s5',
    readingTime: 6,
    intro: "When light crosses a boundary into a new material it slows, and its path bends: refraction. Snell's law quantifies the bending through the index of refraction, and the fact that the index depends slightly on wavelength splits white light into rainbows — dispersion, the reason prism spectroscopes work.",
    objectives: [
      'Apply the law of reflection and Snell\u2019s law, $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$',
      'Explain how speed, wavelength and frequency change on entering a medium',
      'Predict the direction of bending and the effect of dispersion',
    ],
    concepts: [
      {
        term: 'Law of reflection',
        kind: 'law',
        statement: "**Light striking a smooth boundary bounces with the angle of reflection equal to the angle of incidence**, both measured from the normal: $\\theta_1 = \\theta_1'$. The incident ray, reflected ray and normal lie in one plane.",
      },
      {
        term: 'Index of refraction',
        kind: 'definition',
        statement: "**The index of refraction of a medium is the ratio of the vacuum speed to the speed inside:** $$n = \\frac{c}{v}.$$ Typical values: air 1.0003, water 1.33, glass about 1.5, diamond 2.42. Light slows by the factor $n$; its frequency is unchanged, so its wavelength shrinks to $\\lambda_n = \\lambda/n$.",
      },
      {
        term: "Snell's law",
        kind: 'law',
        statement: "**At a boundary between media, the rays obey** $$n_1\\sin\\theta_1 = n_2\\sin\\theta_2.$$ Going into a higher index ($n_2 > n_1$) the ray bends *toward* the normal; into a lower index, away from it. The frequencies on both sides are identical — it is the wavelength change that forces the bend.",
      },
      {
        term: 'Chromatic dispersion',
        kind: 'insight',
        statement: '**The index depends (mildly) on wavelength — normally larger for blue than red.** Blue light bends more at every boundary, so a prism fans white light into a spectrum and water droplets build rainbows. Dispersion is the enemy of lens sharpness (chromatic aberration) and the working principle of every spectrometer.',
      },
      {
        term: "Reflection and Refraction: solution protocol",
        kind: "method",
        statement: "**Solve Reflection and Refraction problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling EM waves with Poynting flow and polarization; the working equation is $c = 2.998\\times 10^8\\ \\text{m/s}$, $I = c\\varepsilon_0E_{\\text{rms}}^2$, $I = I_0\\cos^2\\theta$, $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$; every substitution must carry its units so the final unit ($\\text{W/m}^2$ and pascals of radiation pressure) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I_{\\odot} \\approx 1400\\ \\text{W/m}^2$; $p_r\\sim 10^{-6}\\ \\text{Pa}$; far field in vacuum; Malus needs polarized input.",
      },
    ],
    examples: [
      {
        title: 'Air to glass',
        problem: 'Light of (vacuum) wavelength 500 nm in air strikes a glass plate ($n = 1.5$) at $40^\\circ$ to the normal. Find the refraction angle, the speed and wavelength inside.',
        steps: [
          { label: 'Snell', text: '$\\sin\\theta_2 = (n_1/n_2)\\sin\\theta_1 = (1.0/1.5)\\sin 40^\\circ = (0.667)(0.643) = 0.429$.' },
          { label: 'Refracted angle', text: '$\\theta_2 = \\sin^{-1}(0.429) = 25.4^\\circ$ — bent toward the normal, as expected entering the slower medium.' },
          { label: 'Speed', text: '$v = c/n = (3.00\\times 10^{8})/1.5 = 2.0\\times 10^{8}$ m/s.' },
          { label: 'Wavelength', text: '$\\lambda_n = \\lambda/n = 500/1.5 = 333$ nm inside; the frequency $\\nu = c/\\lambda = 6.0\\times 10^{14}$ Hz is unchanged.' },
        ],
        result: '$\\theta_2 = 25.4^\\circ$, $v = 2.0\\times 10^8$ m/s, $\\lambda = 333$ nm in the glass.',
      },
      {
        title: "Reflection and Refraction: Snell check",
        problem: "Light in air ($n_1 = 1.00$) strikes glass ($n_2 = 1.50$) at $50^\\circ$ from the normal. Find $\\theta_2$ via $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$.",
        steps: [
          { label: "Sine", text: "$\\sin\\theta_2 = \\sin 50^\\circ/1.50 = 0.511$." },
          { label: "Angle", text: "$\\theta_2 \\approx 30.7^\\circ$ — bent toward the normal." },
        ],
        result: "$\\theta_2 \\approx 30.7^\\circ$.",
      },
    ],
    keyTakeaways: [
      "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$: toward the normal entering a higher index, away entering lower.",
      'Frequency survives every boundary; speed and wavelength scale as $1/n$.',
      '$n$ depends on wavelength — blue bends more, giving spectra, rainbows and chromatic aberration.',
    ],
    quiz: [
      {
        q: 'Light travels from water into air. The refracted ray bends:',
        options: ['toward the normal', 'away from the normal', 'not at all', 'along the surface'],
        answer: 1,
        explanation: 'Entering the lower index (faster medium), $\\sin\\theta_2 > \\sin\\theta_1$: the ray swings away from the normal.',
      },
      {
        q: 'When light enters glass, which quantity stays the same?',
        options: ['speed', 'wavelength', 'frequency', 'both speed and wavelength'],
        answer: 2,
        explanation: 'Boundary conditions force the oscillation rate to match on both sides; speed and wavelength both drop by $n$.',
      },
      {
        q: 'Red and blue light cross the same glass boundary at the same incidence. Which refracts closer to the normal?',
        options: ['red', 'blue', 'both equally', 'depends on polarization'],
        answer: 1,
        explanation: 'Dispersion gives blue the larger index, so it bends more.',
      },
      {
        q: 'The index of refraction of a medium is best defined as:',
        options: [`$v/c$`, `$c/v$`, `$\\lambda_\\text{medium}/\\lambda$`, 'the fraction of light reflected'],
        answer: 1,
        explanation: '$n = c/v \\ge 1$ always (in ordinary media).',
      },
    ],
  },
  // ------------------------------------------------------------------ 33-6
  {
    sectionId: 'hall-ch33-s6',
    readingTime: 5,
    intro: "Try to pass light from water into air at a steep angle and something strange happens: at the critical angle the refracted ray skims along the surface, and beyond it there is no refracted ray at all — every bit of the light reflects back. This total internal reflection, stronger than any mirror, guides light through kilometers of glass fiber.",
    objectives: [
      'Compute the critical angle, $\\sin\\theta_c = n_2/n_1$, and state when total internal reflection occurs',
      'Explain why optical fibers trap light with a cladding layer',
      'Relate small critical angles to the brilliance of diamond',
    ],
    concepts: [
      {
        term: 'Critical angle',
        kind: 'law',
        statement: "**For light inside the higher-index medium ($n_1 > n_2$), the refracted ray bends away from the normal until, at** $$\\sin\\theta_c = \\frac{n_2}{n_1},$$ **the refracted ray would graze the surface.** For incidence beyond $\\theta_c$, Snell\u2019s law has no solution and all the light reflects — total internal reflection.",
      },
      {
        term: 'Why "total"',
        kind: 'insight',
        statement: '**Nothing is lost — not one percent.** Ordinary mirrors squander a few percent of the energy at every bounce; total internal reflection returns essentially all of it. Light can rattle through a glass fiber for kilometers, reflecting millions of times, and still arrive usable.',
      },
      {
        term: 'Optical fibers',
        kind: 'insight',
        statement: '**A glass core ($n_1$) inside a cladding ($n_2 < n_1$) traps rays that enter within a modest cone.** Each zigzag is a total internal reflection at the core–cladding boundary. This one idea carries phone and internet traffic, and lets surgeons see inside the body through an endoscope.',
      },
      {
        term: 'Diamond brilliance',
        kind: 'insight',
        statement: '**Diamond\u2019s huge index ($n = 2.42$) gives a critical angle of only $24.4^\\circ$.** Light entering the top of a cut diamond tends to exceed that angle at every internal bounce, so it rattle-traps and returns through the top facets — the sparkle. Glass ($n \\approx 1.5$, $\\theta_c = 41.8^\\circ$) leaks far more.',
      },
      {
        term: "Total Internal Reflection: solution protocol",
        kind: "method",
        statement: "**Solve Total Internal Reflection problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling EM waves with Poynting flow and polarization; the working equation is $c = 2.998\\times 10^8\\ \\text{m/s}$, $I = c\\varepsilon_0E_{\\text{rms}}^2$, $I = I_0\\cos^2\\theta$, $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$; every substitution must carry its units so the final unit ($\\text{W/m}^2$ and pascals of radiation pressure) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I_{\\odot} \\approx 1400\\ \\text{W/m}^2$; $p_r\\sim 10^{-6}\\ \\text{Pa}$; far field in vacuum; Malus needs polarized input.",
      },
    ],
    examples: [
      {
        title: 'Underwater window on the sky',
        problem: 'A diver looks up from beneath a smooth water surface ($n = 1.33$). (a) Find the critical angle. (b) Does a ray striking the surface at $60^\\circ$ from the normal escape?',
        steps: [
          { label: 'Critical angle', text: '$\\theta_c = \\sin^{-1}(n_2/n_1) = \\sin^{-1}(1.00/1.33) = \\sin^{-1}(0.752)$.' },
          { label: 'Evaluate', text: '$\\theta_c = 48.8^\\circ$.' },
          { label: 'Test the ray', text: 'Snell would require $\\sin\\theta_2 = 1.33\\sin 60^\\circ = (1.33)(0.866) = 1.15 > 1$ — impossible.' },
          { label: 'Conclude', text: 'The ray reflects totally back into the water. The diver sees the outside world only through a cone of half-angle $48.8^\\circ$; beyond it the surface is a mirror.' },
        ],
        result: '$\\theta_c = 48.8^\\circ$; the $60^\\circ$ ray undergoes total internal reflection.',
      },
      {
        title: "Total Internal Reflection: Snell check",
        problem: "Light in air ($n_1 = 1.00$) strikes glass ($n_2 = 1.50$) at $30^\\circ$ from the normal. Find $\\theta_2$ via $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$.",
        steps: [
          { label: "Sine", text: "$\\sin\\theta_2 = \\sin 30^\\circ/1.50 = 0.333$." },
          { label: "Angle", text: "$\\theta_2 \\approx 19.5^\\circ$ — bent toward the normal." },
        ],
        result: "$\\theta_2 \\approx 19.5^\\circ$.",
      },
    ],
    keyTakeaways: [
      'Total internal reflection requires $n_1 > n_2$ and incidence beyond $\\theta_c = \\sin^{-1}(n_2/n_1)$.',
      'It is lossless — the principle of cladded optical fibers and endoscopes.',
      'High index means small $\\theta_c$: diamond\u2019s $24.4^\\circ$ traps light and returns it as sparkle.',
    ],
    quiz: [
      {
        q: 'Total internal reflection can occur when light travels:',
        options: ['from air into water', 'from water into air at a large enough angle', 'from air into glass at any angle', 'through a vacuum'],
        answer: 1,
        explanation: 'It requires the higher-index side as the starting medium and an incidence angle beyond $\\theta_c$.',
      },
      {
        q: 'For a water–air boundary the critical angle is closest to:',
        options: [`$24^\\circ$`, `$34^\\circ$`, `$49^\\circ$`, `$90^\\circ$`],
        answer: 2,
        explanation: '$\\sin\\theta_c = 1/1.33$ gives $\\theta_c = 48.8^\\circ$.',
      },
      {
        q: 'An optical fiber keeps light inside the core because:',
        options: ['the core is coated with metal', 'the cladding has a lower index, giving total internal reflection at each bounce', 'the core is magnetic', 'light cannot enter glass'],
        answer: 1,
        explanation: 'Cladding with $n_2 < n_1$ makes every sufficiently oblique bounce total and lossless.',
      },
      {
        q: 'Diamond sparkles more than glass cut identically because diamond:',
        options: ['has a smaller critical angle', 'has a larger critical angle', 'reflects no light at all', 'is harder to scratch'],
        answer: 0,
        explanation: '$n = 2.42$ gives $\\theta_c = 24.4^\\circ$: nearly all internal rays exceed it and stay trapped until exiting the top.',
      },
    ],
  },
  // ------------------------------------------------------------------ 33-7
  {
    sectionId: 'hall-ch33-s7',
    readingTime: 5,
    intro: "Glinting lakes and gleaming roads do more than dazzle drivers: the glare is partially polarized, and at one special angle of incidence it is completely polarized. Brewster's angle is that angle, and a pair of polarized sunglasses aimed at it is one of the most satisfying experiments in all of optics.",
    objectives: [
      'State Brewster\u2019s angle, $\\tan\\theta_B = n_2/n_1$, and the polarization of its reflected ray',
      'Prove that at Brewster incidence the reflected and refracted rays are perpendicular',
      'Explain the design and use of polarized sunglasses',
    ],
    concepts: [
      {
        term: 'Partial polarization by reflection',
        kind: 'insight',
        statement: '**Reflected light is partially polarized parallel to the reflecting surface** (perpendicular to the plane of incidence); the refracted light is correspondingly weak in that component. At grazing angles from water or road, the reflected glare can be strongly polarized horizontally.',
      },
      {
        term: "Brewster's angle",
        kind: 'law',
        statement: "**At the incidence angle** $$\\tan\\theta_B = \\frac{n_2}{n_1},$$ **the reflected light is 100% polarized** (entirely perpendicular to the plane of incidence). For air to glass, $\\theta_B = \\tan^{-1}(1.5) = 56.3^\\circ$; for air to water, $53.1^\\circ$.",
      },
      {
        term: 'Reflected perpendicular to refracted',
        kind: 'theorem',
        statement: "**At Brewster incidence, the reflected and refracted rays are exactly $90^\\circ$ apart.** Proof: Snell gives $n_1\\sin\\theta_B = n_2\\sin\\theta_r$ and $\\tan\\theta_B = n_2/n_1$ gives $n_1\\sin\\theta_B = n_2\\cos\\theta_B$. Equating: $\\sin\\theta_r = \\cos\\theta_B = \\sin(90^\\circ - \\theta_B)$, so $\\theta_r = 90^\\circ - \\theta_B$.",
      },
      {
        term: 'Sunglasses and cameras',
        kind: 'insight',
        statement: '**Polarizing sunglasses pass vertical $\\vec E$ and block the horizontal glare.** Photographers use the same filter at Brewster angles to kill reflections from glass and water, and to deepen the polarization-rich blue of the sky.',
      },
      {
        term: "Polarization by Reflection: solution protocol",
        kind: "method",
        statement: "**Solve Polarization by Reflection problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling EM waves with Poynting flow and polarization; the working equation is $c = 2.998\\times 10^8\\ \\text{m/s}$, $I = c\\varepsilon_0E_{\\text{rms}}^2$, $I = I_0\\cos^2\\theta$, $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$; every substitution must carry its units so the final unit ($\\text{W/m}^2$ and pascals of radiation pressure) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I_{\\odot} \\approx 1400\\ \\text{W/m}^2$; $p_r\\sim 10^{-6}\\ \\text{Pa}$; far field in vacuum; Malus needs polarized input.",
      },
    ],
    examples: [
      {
        title: 'Glare off a lake',
        problem: 'Sunlight reflects off a calm lake toward a viewer. At what angle above the surface must the light travel for the reflection to be fully polarized, and what is the refracted angle?',
        steps: [
          { label: 'Brewster angle', text: 'Air to water: $\\tan\\theta_B = n_2/n_1 = 1.33$.' },
          { label: 'Evaluate', text: '$\\theta_B = 53.1^\\circ$ from the normal, i.e. $36.9^\\circ$ above the surface.' },
          { label: 'Refracted ray', text: 'Snell: $\\sin\\theta_r = \\sin 53.1^\\circ/1.33 = 0.800/1.33 = 0.602$, so $\\theta_r = 37.0^\\circ$.' },
          { label: 'Check', text: '$\\theta_B + \\theta_r = 53.1^\\circ + 37.0^\\circ = 90.1^\\circ \\approx 90^\\circ$ — the reflected and refracted rays are perpendicular, as the theorem demands.' },
        ],
        result: 'Brewster incidence at $53.1^\\circ$ from the normal; the reflected glare is then completely horizontally polarized.',
      },
      {
        title: "Polarization by Reflection: Malus check",
        problem: "Unpolarized light is discarded; polarized $I_0 = 100\\ \\text{W/m}^2$ meets a polarizer at $45^\\circ$. Find $I = I_0\\cos^2\\theta$.",
        steps: [
          { label: "Cosine", text: "$\\cos 45^\\circ = 0.707$." },
          { label: "Square", text: "$I = 100\\times 0.5 = 50\\ \\text{W/m}^2$." },
        ],
        result: "$I \\approx 50\\ \\text{W/m}^2$.",
      },
    ],
    keyTakeaways: [
      'Reflected light is partially polarized; at $\\tan\\theta_B = n_2/n_1$ it is completely polarized.',
      'At Brewster incidence, reflected ray $\\perp$ refracted ray.',
      'Polarized sunglasses block horizontally polarized glare from water and roads.',
    ],
    quiz: [
      {
        q: 'Brewster\u2019s angle for light in air reflecting off glass ($n = 1.5$) is closest to:',
        options: [`$33.7^\\circ$`, `$41.8^\\circ$`, `$56.3^\\circ$`, `$63.3^\\circ$`],
        answer: 2,
        explanation: '$\\theta_B = \\tan^{-1}(1.5) = 56.3^\\circ$.',
      },
      {
        q: 'At Brewster\u2019s angle, the reflected ray is polarized:',
        options: ['along the plane of incidence', 'perpendicular to the plane of incidence', 'parallel to the surface normal', 'not at all'],
        answer: 1,
        explanation: 'The reflected light contains only the component perpendicular to the plane of incidence — horizontal for a horizontal surface.',
      },
      {
        q: 'At Brewster incidence, the angle between the reflected and refracted rays is:',
        options: [`$180^\\circ$`, `$90^\\circ$`, 'equal to $\\theta_B$', 'equal to the critical angle'],
        answer: 1,
        explanation: 'Follows from combining Snell\u2019s law with $\\tan\\theta_B = n_2/n_1$.',
      },
      {
        q: 'Polarized sunglasses reduce road glare because their transmission axis is:',
        options: ['horizontal, matching the glare', 'vertical, blocking the horizontally polarized glare', 'at 45°, halving everything', 'switchable by the wearer'],
        answer: 1,
        explanation: 'Road and water glare is horizontally polarized; a vertical axis rejects it while passing most of the rest of the scene.',
      },
    ],
  },
]
