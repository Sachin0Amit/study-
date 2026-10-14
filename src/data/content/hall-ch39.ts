import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 39
// More About Matter Waves — sections 39-1 … 39-6 (ids hall-ch39-s1 … s6)
// Core: infinite-well energies E_n = n²h²/8mL², normalized wave functions,
// the finite well with penetration, 2D/3D traps and degeneracy, the hydrogen
// atom (quantum numbers, E_n = −13.60 eV/n², radial probability), and the
// angular momentum of atoms (L = √(l(l+1))ħ, space quantization, spin).
// ============================================================================

export const hallCh39Content: SectionContent[] = [
  // ------------------------------------------------------------------ 39-1
  {
    sectionId: 'hall-ch39-s1',
    readingTime: 6,
    intro: "Trap an electron between two impenetrable walls and its matter wave must fit: like a string fixed at both ends, only standing waves survive, and only certain wavelengths — therefore momenta, therefore energies. This is the infinite potential well, the simplest system quantum mechanics solves exactly, and the cleanest place to watch energy quantization emerge from boundary conditions rather than postulates.",
    objectives: [
      'Explain why confinement forces standing-wave matter patterns with discrete wavelengths',
      'Apply $E_n = n^2h^2/8mL^2 = n^2E_1$ and compute level spacings',
      'Interpret the nonzero ground-state energy as the uncertainty principle at work',
    ],
    concepts: [
      {
        term: 'The infinite well',
        kind: 'definition',
        statement: '**An electron trapped between rigid walls at $x = 0$ and $x = L$ (infinite potential outside) has wave functions that vanish at both walls.** The surviving standing de Broglie waves carry $n$ half-wavelengths: $\\lambda_n = 2L/n$, so $p_n = nh/2L$.',
      },
      {
        term: 'Trapped-electron energies',
        kind: 'law',
        statement: '**The allowed energies of the trapped electron are** $$E_n = \\frac{n^2h^2}{8mL^2} = n^2E_1, \\qquad n = 1, 2, 3, \\ldots$$ with $E_1 = h^2/8mL^2$. Levels climb as $n^2$: the gap from $n$ to $n+1$ grows as $2n+1$.',
        detail: 'Substitute $p = nh/2L$ into $E = p^2/2m$ — the quantization is pure de Broglie plus fitting.',
      },
      {
        term: 'Zero-point energy',
        kind: 'insight',
        statement: '**The ground state is not zero energy: $E_1 > 0$ always.** Confinement to $\\Delta x = L$ forces $\\Delta p \\geq \\hbar/L$, and the accompanying kinetic energy is exactly the uncertainty principle made visible. Nothing trapped can ever be at rest.',
      },
      {
        term: 'Transitions',
        kind: 'method',
        statement: '**A jump from $n_\\text{hi}$ to $n_\\text{lo}$ emits a photon of energy** $$hf = E_{n_\\text{hi}} - E_{n_\\text{lo}} = (n_\\text{hi}^2 - n_\\text{lo}^2)E_1.$$ The well\'s spectrum is a fingerprint of its size: smaller traps emit bluer photons.',
      },
      {
        term: "Energies of a Trapped Electron: solution protocol",
        kind: "method",
        statement: "**Solve Energies of a Trapped Electron problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quantized traps with $E_n = n^2h^2/8mL^2$ and hydrogen $E_n = -13.6\\ \\text{eV}/n^2$; the working equation is $E_n = n^2h^2/8mL^2$, $\\psi_n = \\sqrt{2/L}\\sin(n\\pi x/L)$, $E_n = -13.6\\ \\text{eV}/n^2$; every substitution must carry its units so the final unit ($\\text{eV}$ and nanometers) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E_1\\sim \\text{eV}$ for nm wells; $a_0 = 0.529\\ \\text{\\AA}$; infinite-well idealization; $n = 1,2,\\dots$ only.",
      },
    ],
    examples: [
      {
        title: 'An atom-sized trap',
        problem: 'An electron is trapped in an infinite well of width $L = 100$ pm (one atomic diameter). Find $E_1$, the photon emitted in the $n = 2 \\to 1$ jump, and its wavelength.',
        steps: [
          { label: 'Ground energy', text: '$E_1 = h^2/8mL^2 = (6.626\\times10^{-34})^2/[8(9.11\\times10^{-31})(10^{-10})^2] = 6.03\\times10^{-18}$ J $= 37.7$ eV.' },
          { label: 'Transition energy', text: '$\\Delta E = (4 - 1)E_1 = 3 \\times 37.7 = 113$ eV.' },
          { label: 'Wavelength', text: '$\\lambda = hc/\\Delta E = 1240/113 = 11.0$ nm — extreme ultraviolet, ten times bluer than visible light.' },
          { label: 'Scale check', text: 'Atomic-scale confinement naturally produces electron-volt energies and UV photons — the same arithmetic that runs real atoms.' },
        ],
        result: 'E₁ = 37.7 eV; the 2→1 photon carries 113 eV at λ = 11.0 nm.',
      },
      {
        title: "Energies of a Trapped Electron: well-energy check",
        problem: "An electron is trapped in an infinite well of width $L = 1\\ \\text{nm}$. Estimate $E_1 = h^2/8mL^2$ in eV.",
        steps: [
          { label: "Numerator", text: "$h^2 = (6.63\\times 10^{-34})^2 = 4.39\\times 10^{-67}$." },
          { label: "Denominator", text: "$8mL^2 = 8\\times 9.11\\times 10^{-31}\\times (1\\times 10^{-9})^2 = 7.29\\times 10^{-48}$." },
          { label: "eV", text: "$E_1 \\approx 6.02\\times 10^{-20}\\ \\text{J} = 0.376\\ \\text{eV}$; $E_2 = 4E_1$." },
        ],
        result: "$E_1 \\approx 0.376\\ \\text{eV}$.",
      },
    ],
    keyTakeaways: [
      'Fitting $n$ half-wavelengths into width $L$ quantizes momentum and energy: $E_n = n^2h^2/8mL^2$.',
      'The ground state energy is never zero — confinement plus the uncertainty principle forbid rest.',
      'Level spacings grow with $n^2$ and shrink as $L^2$ widens: bigger traps, closer levels.',
    ],
    quiz: [
      {
        q: 'For a particle in an infinite well, doubling $L$ changes the ground energy to:',
        options: ['one quarter of its former value', 'half', 'double', 'unchanged'],
        answer: 0,
        explanation: '$E_1 = h^2/8mL^2 \\propto 1/L^2$.',
      },
      {
        q: 'The ratio $E_3/E_1$ for a trapped electron equals:',
        options: ['9', '3', '6', '1/9'],
        answer: 0,
        explanation: '$E_n = n^2E_1$.',
      },
      {
        q: 'The ground state energy is nonzero because:',
        options: ['confinement forces a momentum spread, hence kinetic energy (the uncertainty principle)', 'the electron spins', 'walls repel the electron', 'photons leak in'],
        answer: 0,
        explanation: 'Zero momentum spread over the whole box is impossible if the position is confined to it.',
      },
    ],
  },
  // ------------------------------------------------------------------ 39-2
  {
    sectionId: 'hall-ch39-s2',
    readingTime: 6,
    intro: "The energies are only half the solution of the infinite well; the other half is what the electron is doing inside. The normalized wave functions are standing sine waves, and their squared magnitudes are probability densities: the ground state piles probability in the middle, excited states carve nodes, and expectation values become honest integrals. This is where the Born rule earns its keep as a calculation tool.",
    objectives: [
      'Write and normalize the wave functions $\\psi_n = \\sqrt{2/L}\\sin(n\\pi x/L)$',
      'Compute probabilities as areas under $|\\psi_n|^2$ for given intervals',
      'Evaluate $\\langle x \\rangle$ and contrast quantum and classical probability densities',
    ],
    concepts: [
      {
        term: 'Normalized wave functions',
        kind: 'law',
        statement: '**The stationary states of the infinite well are** $$\\psi_n(x) = \\sqrt{\\frac{2}{L}}\\sin\\frac{n\\pi x}{L}, \\qquad 0 < x < L,$$ zero elsewhere. The prefactor $\\sqrt{2/L}$ enforces $\\int_0^L |\\psi_n|^2 dx = 1$.',
        detail: 'State $n$ has $n - 1$ interior nodes (zeros); the more nodes, the higher the kinetic energy — curvature is kinetic energy in the Schrödinger equation.',
      },
      {
        term: 'Probability from density',
        kind: 'method',
        statement: '**The probability of finding the electron between $x_a$ and $x_b$ is the area under the density curve:** $$P = \\int_{x_a}^{x_b} |\\psi_n(x)|^2\\,dx = \\left[\\frac{x}{L} - \\frac{1}{2n\\pi}\\sin\\frac{2n\\pi x}{L}\\right]_{x_a}^{x_b}.$$ Probabilities are areas, never point values: $|\\psi|^2$ at a single point contributes nothing.',
      },
      {
        term: 'Expectation values',
        kind: 'method',
        statement: '**The average of repeated position measurements is $\\langle x \\rangle = \\int x|\\psi_n|^2 dx$ — which equals $L/2$ for every $n$** by the symmetry of each standing wave about the box\'s center. A measurement of energy, by contrast, returns exactly $E_n$ every time.',
      },
      {
        term: 'Quantum versus classical probability',
        kind: 'insight',
        statement: '**A classical particle bounces equally everywhere — its density is the flat $1/L$.** The quantum ground state instead peaks at the center and vanishes at the walls; but as $n$ grows the oscillations crowd together and the averaged quantum density flattens toward the classical one — Bohr\'s correspondence principle in a box.',
      },
      {
        term: "Wave Functions of a Trapped Electron: solution protocol",
        kind: "method",
        statement: "**Solve Wave Functions of a Trapped Electron problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quantized traps with $E_n = n^2h^2/8mL^2$ and hydrogen $E_n = -13.6\\ \\text{eV}/n^2$; the working equation is $E_n = n^2h^2/8mL^2$, $\\psi_n = \\sqrt{2/L}\\sin(n\\pi x/L)$, $E_n = -13.6\\ \\text{eV}/n^2$; every substitution must carry its units so the final unit ($\\text{eV}$ and nanometers) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E_1\\sim \\text{eV}$ for nm wells; $a_0 = 0.529\\ \\text{\\AA}$; infinite-well idealization; $n = 1,2,\\dots$ only.",
      },
    ],
    examples: [
      {
        title: 'Probability in the left quarter',
        problem: 'For the ground state ($n = 1$) of an electron in a well of width $L$, what is the probability of finding it in the left quarter, $0 \\leq x \\leq L/4$? Compare with $n = 2$.',
        steps: [
          { label: 'Set up the integral', text: '$P = \\int_0^{L/4} (2/L)\\sin^2(\\pi x/L)\\,dx = [x/L - \\sin(2\\pi x/L)/(2\\pi)]_0^{L/4}$.' },
          { label: 'Evaluate for n = 1', text: '$P = 1/4 - \\sin(\\pi/2)/(2\\pi) = 0.25 - 0.159 = 0.091$.' },
          { label: 'Evaluate for n = 2', text: 'With $n = 2$ the sine argument is $4\\pi x/L$; at $x = L/4$ it is $\\pi$, so $P = 1/4 - \\sin\\pi/(4\\pi) = 0.250$.' },
          { label: 'Interpretation', text: 'The ground state huddles at the center — only 9% in the left quarter — while the first excited state\'s antinode region makes the first quarter hold exactly its classical share.' },
        ],
        result: '9.1% for the ground state; 25.0% for the first excited state.',
      },
      {
        title: "Wave Functions of a Trapped Electron: well-energy check",
        problem: "An electron is trapped in an infinite well of width $L = 1.5\\ \\text{nm}$. Estimate $E_1 = h^2/8mL^2$ in eV.",
        steps: [
          { label: "Numerator", text: "$h^2 = (6.63\\times 10^{-34})^2 = 4.39\\times 10^{-67}$." },
          { label: "Denominator", text: "$8mL^2 = 8\\times 9.11\\times 10^{-31}\\times (1.5\\times 10^{-9})^2 = 1.64\\times 10^{-47}$." },
          { label: "eV", text: "$E_1 \\approx 2.68\\times 10^{-20}\\ \\text{J} = 0.167\\ \\text{eV}$; $E_2 = 4E_1$." },
        ],
        result: "$E_1 \\approx 0.167\\ \\text{eV}$.",
      },
    ],
    keyTakeaways: [
      '$\\psi_n = \\sqrt{2/L}\\sin(n\\pi x/L)$; normalization is built into the prefactor.',
      'Probabilities are areas under $|\\psi|^2$ — 9.1% for the ground state in the left quarter, 25% for $n = 2$.',
      '$\\langle x \\rangle = L/2$ for all $n$; high-$n$ densities average to the classical $1/L$.',
    ],
    quiz: [
      {
        q: 'The wave function $\\psi_3$ of an infinite well has how many interior nodes?',
        options: ['2', '3', '4', '6'],
        answer: 0,
        explanation: 'State $n$ has $n-1$ interior zeros.',
      },
      {
        q: 'The probability of finding the electron exactly at $x = L/2$ (ground state) is:',
        options: ['zero — probability requires an interval', '1, since it is the peak', '1/2', '2/L'],
        answer: 0,
        explanation: 'A point has zero width; only areas under $|\\psi|^2$ carry probability.',
      },
      {
        q: 'For state $n$, the expectation value $\\langle x \\rangle$ equals:',
        options: [`$L/2$ for every $n$`, `$L/2$ only for $n = 1$`, '0 for every $n$', 'the position of an antinode'],
        answer: 0,
        explanation: 'Each standing wave is symmetric about the box\'s center.',
      },
    ],
  },
  // ------------------------------------------------------------------ 39-3
  {
    sectionId: 'hall-ch39-s3',
    readingTime: 6,
    intro: "Real walls are not infinitely high: they are steep hills of finite height $U_0$. Three things change. The electron can no longer count on being trapped — only energies below $U_0$ are bound. The wave functions do not die at the walls — they leak exponentially into them. And every bound level sinks below its infinite-well value, because the leakage effectively widens the box.",
    objectives: [
      'Explain why a finite well binds only a finite number of levels with $E < U_0$',
      'Describe the exponential penetration into the walls and estimate its depth $1/\\kappa$',
      'Account for the lowering of bound-state energies relative to the infinite well',
    ],
    concepts: [
      {
        term: 'Finite well',
        kind: 'definition',
        statement: '**A finite well: $U = 0$ inside $0 < x < L$ and $U = U_0$ outside.** Bound states have $E < U_0$; any state with $E > U_0$ is unbound (scattering). The number of bound states is finite — roughly the largest $n$ with $n^2E_1^{(\\infty)} < U_0$.',
      },
      {
        term: 'Penetration into the walls',
        kind: 'law',
        statement: '**Inside the forbidden walls the wave function decays as $e^{-\\kappa x}$ with** $$\\kappa = \\frac{\\sqrt{2m(U_0-E)}}{\\hbar},$$ so the probability reaches a characteristic depth $1/\\kappa$ beyond the wall. Shallow states (small $U_0 - E$) are the leakiest; deep states barely notice the boundary.',
      },
      {
        term: 'Energies sink',
        kind: 'insight',
        statement: '**Because the wave extends past the walls, the effective box is wider than $L$ — and wider boxes mean lower $E_n$.** Every bound level sits below its infinite-well counterpart, with the ground state lowered most in relative terms. Exact values require matching $\\psi$ and $\\psi\'$ numerically (transcendental equations); the trends are rigorous.',
      },
      {
        term: "An Electron in a Finite Well: solution protocol",
        kind: "method",
        statement: "**Solve An Electron in a Finite Well problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quantized traps with $E_n = n^2h^2/8mL^2$ and hydrogen $E_n = -13.6\\ \\text{eV}/n^2$; the working equation is $E_n = n^2h^2/8mL^2$, $\\psi_n = \\sqrt{2/L}\\sin(n\\pi x/L)$, $E_n = -13.6\\ \\text{eV}/n^2$; every substitution must carry its units so the final unit ($\\text{eV}$ and nanometers) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E_1\\sim \\text{eV}$ for nm wells; $a_0 = 0.529\\ \\text{\\AA}$; infinite-well idealization; $n = 1,2,\\dots$ only.",
      },
      {
        term: "An Electron in a Finite Well: scales and validity",
        kind: "insight",
        statement: "**An Electron in a Finite Well lives at $E_1\\sim \\text{eV}$ for nm wells; $a_0 = 0.529\\ \\text{\\AA}$ and the textbook model holds while infinite-well idealization; $n = 1,2,\\dots$ only.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a An Electron in a Finite Well calculation gives seconds when $\\text{eV}$ and nanometers demands meters, or a value orders of magnitude beyond $E_1\\sim \\text{eV}$ for nm wells; $a_0 = 0.529\\ \\text{\\AA}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Counting the states of a deep well',
        problem: 'An electron occupies a finite well with $L = 100$ pm and $U_0 = 1000$ eV. Using the infinite-well levels as an estimate, how many bound states are there, and how far does the top state penetrate the walls?',
        steps: [
          { label: 'Infinite-well scale', text: 'From the previous section, $E_1 = 37.7$ eV for this width, so estimated levels sit at $n^2 \\times 37.7$ eV.' },
          { label: 'Bound-state count', text: 'Require $n^2(37.7) < 1000$: $n < \\sqrt{26.5} = 5.2$, so five bound states ($n = 1$ to $5$; $E_5 \\approx 943$ eV, just under the rim).' },
          { label: 'Penetration of the top state', text: 'For $E_5$: $\\kappa = \\sqrt{2m(U_0-E_5)}/\\hbar = \\sqrt{2(9.11\\times10^{-31})(57)(1.602\\times10^{-19})}/(1.055\\times10^{-34}) = 3.9\\times10^{10}\\ \\mathrm{m^{-1}}$, a depth of $1/\\kappa = 26$ pm — a quarter of the box width.' },
          { label: 'Contrast', text: 'The ground state ($U_0 - E \\approx 960$ eV) has $1/\\kappa \\approx 6$ pm: deep states barely leak, shallow ones spill out.' },
        ],
        result: 'Five bound states; the topmost reaches ~26 pm into each wall, the ground state only ~6 pm — and true energies lie slightly below these estimates.',
      },
      {
        title: "An Electron in a Finite Well: well-energy check",
        problem: "An electron is trapped in an infinite well of width $L = 0.5\\ \\text{nm}$. Estimate $E_1 = h^2/8mL^2$ in eV.",
        steps: [
          { label: "Numerator", text: "$h^2 = (6.63\\times 10^{-34})^2 = 4.39\\times 10^{-67}$." },
          { label: "Denominator", text: "$8mL^2 = 8\\times 9.11\\times 10^{-31}\\times (0.5\\times 10^{-9})^2 = 1.82\\times 10^{-48}$." },
          { label: "eV", text: "$E_1 \\approx 2.41\\times 10^{-19}\\ \\text{J} = 1.5\\ \\text{eV}$; $E_2 = 4E_1$." },
        ],
        result: "$E_1 \\approx 1.5\\ \\text{eV}$.",
      },
    ],
    keyTakeaways: [
      'A finite well traps only levels with $E < U_0$ — a finite count, roughly $n^2E_1 < U_0$.',
      'Wave functions leak a depth $1/\\kappa = \\hbar/\\sqrt{2m(U_0-E)}$ into the walls; shallow states leak farthest.',
      'Leakage widens the effective box, lowering every bound energy below the infinite-well value.',
    ],
    quiz: [
      {
        q: 'Compared with an infinite well of the same width, the finite well\'s bound energies are:',
        options: ['lower, because the wave extends into the walls', 'higher, by energy conservation', 'identical', 'complex numbers'],
        answer: 0,
        explanation: 'A longer effective wavelength fits, meaning lower momentum and energy.',
      },
      {
        q: 'The penetration depth $1/\\kappa$ into the wall is largest for:',
        options: ['the state closest to the rim $U_0$', 'the ground state', 'all states equally', 'the state with most interior nodes only'],
        answer: 0,
        explanation: '$\\kappa \\propto \\sqrt{U_0 - E}$: the smaller the deficit, the deeper the leak.',
      },
      {
        q: 'A finite well has five bound states. A sixth measurement of the energy could yield:',
        options: ['any value above $U_0$ (unbound scattering energies)', 'exactly $U_0$', 'a sixth bound level', 'zero'],
        answer: 0,
        explanation: 'Beyond the five bound states, the spectrum is continuous — the electron is free.',
      },
    ],
  },
  // ------------------------------------------------------------------ 39-4
  {
    sectionId: 'hall-ch39-s4',
    readingTime: 6,
    intro: "Extend the trap to two or three dimensions and the arithmetic multiplies: the wave function factorizes, each dimension carries its own quantum number, and the energies add. New physics appears — distinct states can share one energy, called degeneracy — and so does new technology: quantum dots, tiny boxes whose emitted color is set by their size, are engineered degeneracy-and-confinement playgrounds.",
    objectives: [
      'Write the energies $E = (h^2/8m)(n_x^2/L_x^2 + n_y^2/L_y^2)$ for a rectangular 2D trap',
      'Define degeneracy and count states for square traps from sums of squares',
      'Connect trap size to transition frequencies, as in quantum dots',
    ],
    concepts: [
      {
        term: 'Separable solutions',
        kind: 'method',
        statement: '**In a rectangular trap the Schrödinger equation separates: $\\psi(x, y) = \\psi_x(x)\\psi_y(y)$, and the energies add.** Each dimension behaves as its own infinite well, labeled by its own quantum number $n_x$, $n_y$ (and $n_z$ in 3D).',
      },
      {
        term: 'Two-dimensional trap energies',
        kind: 'law',
        statement: '**For a rectangular trap of sides $L_x, L_y$:** $$E_{n_x n_y} = \\frac{h^2}{8m}\\left(\\frac{n_x^2}{L_x^2} + \\frac{n_y^2}{L_y^2}\\right),$$ and for a square ($L_x = L_y = L$) simply $E = (h^2/8mL^2)(n_x^2 + n_y^2)$ — sums of two squares.'  ,
      },
      {
        term: 'Degeneracy',
        kind: 'definition',
        statement: '**Two different quantum states with the same energy are degenerate.** In a square trap, $(1, 2)$ and $(2, 1)$ share $5(h^2/8mL^2)$ — a two-fold degeneracy from the symmetry of swapping $x$ and $y$. Accidental degeneracies add more: $50 = 1 + 49 = 25 + 25$ gives $(1,7)$, $(7,1)$, $(5,5)$ — three states, one energy.',
      },
      {
        term: 'Quantum dots',
        kind: 'insight',
        statement: '**A nanometer-scale box for electrons is a quantum dot: its level spacing — hence its absorbed and emitted colors — is tuned by size.** Shrinking the dot from 1 µm to 10 nm raises the fundamental spacing by a factor of $10^4$, from microwaves into the infrared and visible. Semiconductor dots (with effective masses) put this arithmetic to work in lasers, displays and qubits.',
      },
      {
        term: "Two- and Three-Dimensional Electron Traps: solution protocol",
        kind: "method",
        statement: "**Solve Two- and Three-Dimensional Electron Traps problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quantized traps with $E_n = n^2h^2/8mL^2$ and hydrogen $E_n = -13.6\\ \\text{eV}/n^2$; the working equation is $E_n = n^2h^2/8mL^2$, $\\psi_n = \\sqrt{2/L}\\sin(n\\pi x/L)$, $E_n = -13.6\\ \\text{eV}/n^2$; every substitution must carry its units so the final unit ($\\text{eV}$ and nanometers) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E_1\\sim \\text{eV}$ for nm wells; $a_0 = 0.529\\ \\text{\\AA}$; infinite-well idealization; $n = 1,2,\\dots$ only.",
      },
    ],
    examples: [
      {
        title: 'A menu of levels for a square trap',
        problem: 'An electron occupies a square 2D trap with $L = 10$ nm. List the lowest energies in units of $E_0 = h^2/8mL^2$, their quantum numbers, and degeneracies; then find the photon for the $(1,1) \\to (2,1)$ transition.',
        steps: [
          { label: 'Unit of energy', text: 'From the 1D result scaled to $L = 10$ nm: $E_0 = 37.7\\ \\mathrm{eV} \\times (100\\ \\mathrm{pm}/10\\ \\mathrm{nm})^2 = 3.8\\times10^{-3}$ eV.' },
          { label: 'Ladder', text: 'Ground $(1,1)$: $2E_0$; next $(1,2)$ and $(2,1)$: $5E_0$, doubly degenerate; then $(2,2)$: $8E_0$; $(1,3)$ and $(3,1)$: $10E_0$, doubly degenerate; $(2,3)$ and $(3,2)$: $13E_0$.' },
          { label: 'Transition', text: '$\\Delta E = 5E_0 - 2E_0 = 3E_0 = 0.0113$ eV.' },
          { label: 'Photon', text: '$\\lambda = hc/\\Delta E = 1240/0.0113 = 1.1\\times10^{5}$ nm $= 0.11$ mm — far infrared, a microwave-scale transition.' },
        ],
        result: '2E₀ (1 state), 5E₀ (2), 8E₀ (1), 10E₀ (2), 13E₀ (2), …; the first excitation emits at λ ≈ 0.11 mm.',
      },
      {
        title: "Two- and Three-Dimensional Electron Traps: well-energy check",
        problem: "An electron is trapped in an infinite well of width $L = 1\\ \\text{nm}$. Estimate $E_1 = h^2/8mL^2$ in eV.",
        steps: [
          { label: "Numerator", text: "$h^2 = (6.63\\times 10^{-34})^2 = 4.39\\times 10^{-67}$." },
          { label: "Denominator", text: "$8mL^2 = 8\\times 9.11\\times 10^{-31}\\times (1\\times 10^{-9})^2 = 7.29\\times 10^{-48}$." },
          { label: "eV", text: "$E_1 \\approx 6.02\\times 10^{-20}\\ \\text{J} = 0.376\\ \\text{eV}$; $E_2 = 4E_1$." },
        ],
        result: "$E_1 \\approx 0.376\\ \\text{eV}$.",
      },
    ],
    keyTakeaways: [
      '2D and 3D traps: energies add one $n^2/L^2$ term per dimension.',
      'Degeneracy: distinct quantum states sharing an energy, beginning with $(1,2)$ ↔ $(2,1)$ in a square trap.',
      'Level spacing scales as $1/L^2$ — the knob that tunes quantum-dot colors.',
    ],
    quiz: [
      {
        q: 'In a square 2D trap, the states $(1, 3)$ and $(3, 1)$ are:',
        options: ['degenerate', 'forbidden', 'unbound', 'orthogonal in energy'],
        answer: 0,
        explanation: 'Both carry $n_x^2 + n_y^2 = 10$, and the square\'s symmetry makes the energies equal.',
      },
      {
        q: 'The ground-state energy of a cubical 3D trap, in units of $E_0 = h^2/8mL^2$, is:',
        options: ['3', '1', '2', '9'],
        answer: 0,
        explanation: 'Each dimension contributes its own $1^2$: $(1+1+1)E_0 = 3E_0$.',
      },
      {
        q: 'Shrinking a quantum dot from 100 nm to 10 nm multiplies its level spacings by:',
        options: ['100', '10', '1000', '1/100'],
        answer: 0,
        explanation: 'Spacings go as $1/L^2$: a tenfold shorter side gives a hundredfold boost.',
      },
    ],
  },
  // ------------------------------------------------------------------ 39-5
  {
    sectionId: 'hall-ch39-s5',
    readingTime: 7,
    intro: "Hydrogen is the only atom nature solves in closed form, and it repays the effort: the Coulomb potential in three dimensions yields the exact energies, the three quantum numbers, and wave functions whose shapes — spheres, dumbbells, cloverleafs — underlie all of chemistry. The levels agree with Bohr's $-13.60$ eV/n², but now they come from the Schrödinger equation, with orbits replaced by probability clouds.",
    objectives: [
      'State the three quantum numbers $n$, $l$, $m_l$ and their allowed values',
      'Use $E_n = -13.60\\ \\mathrm{eV}/n^2$ to compute transition wavelengths',
      'Describe the ground-state wave function, radial probability, and the Bohr radius',
    ],
    concepts: [
      {
        term: 'Three quantum numbers',
        kind: 'definition',
        statement: '**Solving the Schrödinger equation for the Coulomb potential labels each state by** $$n = 1, 2, 3, \\ldots; \\qquad l = 0, 1, \\ldots, n-1; \\qquad m_l = -l, \\ldots, 0, \\ldots, +l.$$ The state count for level $n$ (ignoring spin) is $n^2$ — hydrogen\'s famous degeneracy.',
      },
      {
        term: 'Hydrogen energies',
        kind: 'law',
        statement: '**The bound-state energies are** $$E_n = -\\frac{13.60\\ \\mathrm{eV}}{n^2},$$ with $E = 0$ the ionization threshold. They depend on $n$ alone — the special symmetry of the $1/r$ potential that Bohr guessed and Schrödinger derived.',
      },
      {
        term: 'Wave functions and radii',
        kind: 'definition',
        statement: '**The ground state is spherically symmetric, $\\psi_{100} \\propto e^{-r/a_0}$, with the Bohr radius $a_0 = 52.9$ pm.** The radial probability $P(r) = r^2|R(r)|^2$ peaks exactly at $r = a_0$: the most probable finding-distance reproduces the first Bohr orbit. States with $l > 0$ carry angular shapes (dumbbells for $l = 1$) set by the $Y_l^{m_l}$ angular factors.',
      },
      {
        term: 'The spectrum organized',
        kind: 'insight',
        statement: '**Jumping between levels emits photons $hf = 13.60(1/n_\\text{lo}^2 - 1/n_\\text{hi}^2)$ eV.** The Lyman series (to $n = 1$) lies ultraviolet, Balmer (to $n = 2$) spans the visible — Hα at 656 nm — and Paschen and beyond fall infrared. Ionizing the ground state takes exactly 13.6 eV.',
      },
      {
        term: "The Hydrogen Atom: solution protocol",
        kind: "method",
        statement: "**Solve The Hydrogen Atom problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quantized traps with $E_n = n^2h^2/8mL^2$ and hydrogen $E_n = -13.6\\ \\text{eV}/n^2$; the working equation is $E_n = n^2h^2/8mL^2$, $\\psi_n = \\sqrt{2/L}\\sin(n\\pi x/L)$, $E_n = -13.6\\ \\text{eV}/n^2$; every substitution must carry its units so the final unit ($\\text{eV}$ and nanometers) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E_1\\sim \\text{eV}$ for nm wells; $a_0 = 0.529\\ \\text{\\AA}$; infinite-well idealization; $n = 1,2,\\dots$ only.",
      },
    ],
    figures: [
      {
        caption: 'The hydrogen energy ladder $E_n = -13.60\\ \\mathrm{eV}/n^2$. Levels crowd toward the ionization limit $E = 0$. Balmer transitions into $n = 2$ give the visible series (Hα 656 nm, Hβ 486 nm); Lyman transitions into $n = 1$ give ultraviolet lines (Lyman α 122 nm).',
        svg: `<svg viewBox="0 0 720 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hydrogen energy level ladder with Lyman and Balmer transition arrows labeled by wavelength"><defs><marker id="hydA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="70" y1="24" x2="70" y2="322" stroke="currentColor" stroke-width="1.6" marker-end="url(#hydA)"/><text x="52" y="30" font-size="15" fill="currentColor">E</text><line x1="80" y1="70" x2="540" y2="70" stroke="currentColor" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.7"/><text x="552" y="66" font-size="14" fill="currentColor">E = 0, n = ∞</text><text x="552" y="84" font-size="13" fill="currentColor" opacity="0.8">(ionization)</text><line x1="170" y1="300" x2="500" y2="300" stroke="currentColor" stroke-width="3"/><line x1="170" y1="127" x2="500" y2="127" stroke="currentColor" stroke-width="3"/><line x1="170" y1="96" x2="500" y2="96" stroke="currentColor" stroke-width="3"/><line x1="170" y1="84" x2="500" y2="84" stroke="currentColor" stroke-width="3"/><text x="160" y="305" text-anchor="end" font-size="15" fill="currentColor">n = 1</text><text x="160" y="132" text-anchor="end" font-size="15" fill="currentColor">n = 2</text><text x="160" y="101" text-anchor="end" font-size="15" fill="currentColor">n = 3</text><text x="160" y="89" text-anchor="end" font-size="15" fill="currentColor">n = 4</text><text x="512" y="305" font-size="14" fill="currentColor">−13.60 eV</text><text x="512" y="132" font-size="14" fill="currentColor">−3.40 eV</text><text x="512" y="101" font-size="14" fill="currentColor">−1.51 eV</text><text x="512" y="89" font-size="14" fill="currentColor">−0.85 eV</text><line x1="235" y1="127" x2="235" y2="300" stroke="currentColor" stroke-width="2.2" marker-end="url(#hydA)"/><text x="228" y="205" text-anchor="end" font-size="14" fill="currentColor">Lyman α: 122 nm</text><line x1="415" y1="96" x2="415" y2="127" stroke="currentColor" stroke-width="2.2" marker-end="url(#hydA)"/><text x="424" y="109" font-size="14" fill="currentColor">Hα: 656 nm</text><line x1="465" y1="84" x2="465" y2="127" stroke="currentColor" stroke-width="2.2" marker-end="url(#hydA)"/><text x="474" y="122" font-size="14" fill="currentColor">Hβ: 486 nm</text><text x="110" y="150" font-size="14" fill="currentColor" opacity="0.8" transform="rotate(-90 110 150)">Lyman (UV)</text><text x="642" y="120" font-size="14" fill="currentColor" opacity="0.8" transform="rotate(-90 642 120)">Balmer (visible)</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'The Hα line, exactly',
        problem: 'Compute the wavelength of the $n = 3 \\to 2$ transition in hydrogen (the red Hα line), and of $n = 2 \\to 1$ (Lyman α).',
        steps: [
          { label: 'Energy drop', text: '$\\Delta E = 13.60(1/2^2 - 1/3^2) = 13.60(5/36) = 1.89$ eV.' },
          { label: 'Wavelength', text: '$\\lambda = hc/\\Delta E = 1240/1.89 = 656$ nm — the red line that colors hydrogen nebulae.' },
          { label: 'Lyman α', text: '$\\Delta E = 13.60(1 - 1/4) = 10.2$ eV, so $\\lambda = 1240/10.2 = 122$ nm — ultraviolet.' },
          { label: 'Ionization', text: 'A photon needs $\\geq 13.6$ eV ($\\lambda \\leq 91.2$ nm) to strip the ground-state electron entirely.' },
        ],
        result: 'Hα = 656 nm (red); Lyman α = 122 nm (UV); ionization edge at 91.2 nm.',
      },
      {
        title: "The Hydrogen Atom: well-energy check",
        problem: "An electron is trapped in an infinite well of width $L = 1.5\\ \\text{nm}$. Estimate $E_1 = h^2/8mL^2$ in eV.",
        steps: [
          { label: "Numerator", text: "$h^2 = (6.63\\times 10^{-34})^2 = 4.39\\times 10^{-67}$." },
          { label: "Denominator", text: "$8mL^2 = 8\\times 9.11\\times 10^{-31}\\times (1.5\\times 10^{-9})^2 = 1.64\\times 10^{-47}$." },
          { label: "eV", text: "$E_1 \\approx 2.68\\times 10^{-20}\\ \\text{J} = 0.167\\ \\text{eV}$; $E_2 = 4E_1$." },
        ],
        result: "$E_1 \\approx 0.167\\ \\text{eV}$.",
      },
    ],
    keyTakeaways: [
      'Quantum numbers $n \\geq 1$, $l < n$, $|m_l| \\leq l$ label the hydrogen states; level $n$ is $n^2$-fold degenerate.',
      '$E_n = -13.60\\ \\mathrm{eV}/n^2$: the Schrödinger derivation of Bohr\'s levels.',
      'The ground state $\\psi \\propto e^{-r/a_0}$ peaks in radial probability at the Bohr radius $a_0 = 52.9$ pm.',
    ],
    quiz: [
      {
        q: 'For $n = 3$, the allowed values of $l$ are:',
        options: ['0, 1, 2', '1, 2, 3', '0, 1, 2, 3', '3 only'],
        answer: 0,
        explanation: '$l$ runs from 0 up to $n - 1$.',
      },
      {
        q: 'How many hydrogen states share $n = 3$ (ignoring spin)?',
        options: ['9', '3', '6', '18'],
        answer: 0,
        explanation: 'One $(n=3, l=0)$ + three $(l=1)$ + five $(l=2)$ = 9 = $n^2$.',
      },
      {
        q: 'The energy needed to ionize hydrogen from its ground state is:',
        options: ['13.6 eV', '3.4 eV', '27.2 eV', '0'],
        answer: 0,
        explanation: 'Lift the electron from $-13.6$ eV to the $E = 0$ continuum.',
      },
    ],
  },
  // ------------------------------------------------------------------ 39-6
  {
    sectionId: 'hall-ch39-s6',
    readingTime: 6,
    intro: "Quantum mechanics does not just quantize the magnitude of atomic angular momentum — it quantizes its orientation in space. For a given $l$, the component along any chosen axis takes only $2l + 1$ values, equally spaced: space quantization. Add the electron's intrinsic spin, and atoms acquire the magnetic fingerprints by which spectroscopy, Stern–Gerlach experiments, and the whole periodic table are read.",
    objectives: [
      'Compute orbital angular momentum magnitudes $L = \\sqrt{l(l+1)}\\,\\hbar$',
      'Apply space quantization $L_z = m_l\\hbar$ and find allowed orientations',
      'Describe electron spin and the Stern–Gerlach evidence',
    ],
    concepts: [
      {
        term: 'Orbital angular momentum',
        kind: 'law',
        statement: '**An atomic state with orbital quantum number $l$ carries angular momentum of magnitude** $$L = \\sqrt{l(l+1)}\\,\\hbar.$$ For $l = 0$ it vanishes exactly — s states orbit nothing, another break with Bohr\'s imagery of circulating electrons.',
      },
      {
        term: 'Space quantization',
        kind: 'law',
        statement: '**Along any chosen axis (set, say, by a magnetic field) the angular momentum component takes only the values** $$L_z = m_l\\hbar, \\qquad m_l = -l, \\ldots, 0, \\ldots, +l$$ — $2l + 1$ orientations and no others. The vector $\\vec L$ makes specific angles with the axis, none of which aligns it perfectly: $|m_l|\\hbar < \\sqrt{l(l+1)}\\hbar$ always.',
      },
      {
        term: 'Electron spin',
        kind: 'definition',
        statement: '**The electron carries intrinsic angular momentum with spin quantum number $s = 1/2$:** $$S = \\sqrt{s(s+1)}\\,\\hbar = \\sqrt{3/2}\\,\\hbar, \\qquad S_z = \\pm\\tfrac{1}{2}\\hbar.$$ Spin is not rotation in space — it is an internal label, the fourth quantum number $m_s$, doubling every state count.',
      },
      {
        term: 'Stern–Gerlach evidence',
        kind: 'insight',
        statement: '**A beam of silver atoms sent through a nonuniform magnetic field split into two spots — exactly the two $S_z$ values of one unpaired electron.** Space quantization made visible on a plate (1922), before quantum mechanics was even written. Orbital and spin magnetic moments, their coupling, and the addition rules $\\vec J = \\vec L + \\vec S$ generate the fine structure and the multiplet patterns by which atomic spectra are decoded.',
      },
      {
        term: "Angular Momentum of Atoms: solution protocol",
        kind: "method",
        statement: "**Solve Angular Momentum of Atoms problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quantized traps with $E_n = n^2h^2/8mL^2$ and hydrogen $E_n = -13.6\\ \\text{eV}/n^2$; the working equation is $E_n = n^2h^2/8mL^2$, $\\psi_n = \\sqrt{2/L}\\sin(n\\pi x/L)$, $E_n = -13.6\\ \\text{eV}/n^2$; every substitution must carry its units so the final unit ($\\text{eV}$ and nanometers) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $E_1\\sim \\text{eV}$ for nm wells; $a_0 = 0.529\\ \\text{\\AA}$; infinite-well idealization; $n = 1,2,\\dots$ only.",
      },
    ],
    examples: [
      {
        title: 'Orientations for $l = 2$',
        problem: 'An atomic state has $l = 2$. Find the magnitude of $\\vec L$, the possible $L_z$ values, and the smallest allowed angle with the $z$-axis.',
        steps: [
          { label: 'Magnitude', text: '$L = \\sqrt{2(3)}\\,\\hbar = \\sqrt{6}\\,\\hbar = 2.45\\hbar$.' },
          { label: 'Components', text: '$m_l = -2, -1, 0, +1, +2$: five orientations, $L_z = -2\\hbar$ to $+2\\hbar$ in steps of $\\hbar$.' },
          { label: 'Smallest angle', text: '$\\cos\\theta_\\min = L_z/L = 2/\\sqrt{6} = 0.816$, so $\\theta_\\min = 35.3^\\circ$.' },
          { label: 'Moral', text: 'Even the steepest allowed tilt falls short of the axis — $L_z$ can never equal the full magnitude $L$. Angular momentum vectors refuse to line up with any axis.' },
        ],
        result: 'L = 2.45ħ, five $L_z$ values from −2ħ to +2ħ, closest tilt 35.3° from the axis.',
      },
      {
        title: "Angular Momentum of Atoms: well-energy check",
        problem: "An electron is trapped in an infinite well of width $L = 0.5\\ \\text{nm}$. Estimate $E_1 = h^2/8mL^2$ in eV.",
        steps: [
          { label: "Numerator", text: "$h^2 = (6.63\\times 10^{-34})^2 = 4.39\\times 10^{-67}$." },
          { label: "Denominator", text: "$8mL^2 = 8\\times 9.11\\times 10^{-31}\\times (0.5\\times 10^{-9})^2 = 1.82\\times 10^{-48}$." },
          { label: "eV", text: "$E_1 \\approx 2.41\\times 10^{-19}\\ \\text{J} = 1.5\\ \\text{eV}$; $E_2 = 4E_1$." },
        ],
        result: "$E_1 \\approx 1.5\\ \\text{eV}$.",
      },
    ],
    keyTakeaways: [
      '$L = \\sqrt{l(l+1)}\\hbar$ and $L_z = m_l\\hbar$ with $2l+1$ allowed orientations — space quantization.',
      'The vector never aligns with the axis: $|m_l|\\hbar < \\sqrt{l(l+1)}\\hbar$ always.',
      'Electron spin ($s = 1/2$, $S_z = \\pm\\hbar/2$) doubles every state and produced the two-spot Stern–Gerlach pattern.',
    ],
    quiz: [
      {
        q: 'For $l = 3$, the magnitude of the orbital angular momentum is:',
        options: [`$\\sqrt{12}\\,\\hbar$`, `$3\\hbar$`, `$6\\hbar$`, `$7\\hbar$`],
        answer: 0,
        explanation: '$L = \\sqrt{3(4)}\\,\\hbar = \\sqrt{12}\\,\\hbar \\approx 3.46\\hbar$ — not simply $l\\hbar$.',
      },
      {
        q: 'For $l = 1$, the allowed $L_z$ values are:',
        options: [`$-\\hbar$, 0, $+\\hbar$`, '0, $\\hbar$, $2\\hbar$', `$\\pm\\sqrt{2}\\,\\hbar$`, `$\\pm\\hbar/2$`],
        answer: 0,
        explanation: '$2l + 1 = 3$ orientations, spaced by $\\hbar$.',
      },
      {
        q: 'The Stern–Gerlach experiment split a silver beam into two spots because:',
        options: ['the unpaired electron has $s = 1/2$: two $S_z$ orientations', 'the orbital quantum number was 2', 'silver atoms are magnetic dipoles of all strengths', 'the field was nonuniform by accident'],
        answer: 0,
        explanation: 'One unpaired $5s$ electron gives $m_s = \\pm 1/2$ — space quantization of spin made visible.',
      },
    ],
  },
]
