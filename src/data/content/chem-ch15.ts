import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 15: Quantum Theory Foundations (Atkins Focus 7)
// Sections 15.1 - 15.4. Master study content in Atkins language.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh15Content: SectionContent[] = [
  // ---------------------------------------------------------------- 15.1
  {
    sectionId: 'chem-ch15-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Operators commutators and the uncertainty principle',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Hermitian operators give real measurable values',
            body: 'The **Hermitian theorem** states that operators satisfying the conjugate transpose condition have real eigenvalues and orthogonal eigenfunctions, which is why every observable in quantum mechanics is carried by such an operator. Energy quantization already hints at this through $E = h\\nu$, where frequency fixes the allowed packet size and measurement returns real numbers rather than complex artifacts. Position momentum and Hamiltonian operators all pass the Hermitian test, so repeated measurements average to real expectation values while non Hermitian constructions remain mere calculational tools.'
          },
          {
            kind: 'proof',
            heading: 'Noncommutation forces the uncertainty tradeoff',
            body: 'Assume position and momentum operators that do not commute, with commutator $[x,p] = i\\hbar$ along one axis, and apply the general variance inequality for any two Hermitian operators. The cross term survives as the squared commutator magnitude, giving $\\Delta x \\Delta p \\ge \\hbar/2$ after taking square roots. The proof shows uncertainty is not instrument noise but Hilbert space geometry: no state vector can be simultaneously sharp in two directions whose operators refuse to share eigenfunctions, a conclusion confirmed by squeezed light experiments that narrow one quadrature only by widening the other.'
          },
          {
            kind: 'remark',
            body: 'Research connections run from quantum dots whose colors tune with box size to scanning probes that image orbitals node by node, all resting on the operator algebra proved above. The same commutator logic governs angular momentum components and number phase pairs in quantum optics, so mastering one derivation transfers across atomic molecular and optical spectra. Graduate coursework uses Dirac notation to compress these proofs, but the physical content remains the commutator deciding which questions nature permits simultaneously.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Every observable in quantum mechanics is carried by an operator, and the mathematics of those operators decides what can be known simultaneously. Hermitian operators give real eigenvalues, non-commuting pairs give complementarity, and the commutator of position and momentum hardens into the Heisenberg uncertainty relation. This section builds that operator machinery exactly as Atkins Topics 7B and 7C develop it.',
    objectives: [
      'Test Hermiticity and orthogonality of eigenfunctions for position, momentum and Hamiltonian operators',
      'Expand any state as a superposition and read probabilities plus expectation values from the coefficients',
      'Apply the commutator and the uncertainty relation to complementary pairs along one axis'
    ],
    concepts: [
      {
        term: 'Hermitian operators and real eigenvalues',
        kind: 'definition',
        statement: 'A **Hermitian operator** `Ω̂` satisfies $\\int \\psi_{m}^{*} \\hat{\\Omega} \\psi_{n} \\, d\\tau = \\int (\\hat{\\Omega} \\psi_{m})^{*} \\psi_{n} \\, d\\tau$ for all acceptable functions, so every measured eigenvalue $\\omega$ is real and eigenfunctions of different eigenvalues are orthogonal.',
        detail: 'The Hamiltonian is Hermitian, which is why energies are real and why orthogonality eliminates most integrals in bonding and spectroscopy. Orthogonality of $\\sin(n\\pi x/L)$ partners in the box is the prototype calculation.'
      },
      {
        term: 'The fundamental commutator',
        kind: 'law',
        statement: 'The **position-momentum commutator** `[x̂, p̂]` reads $[\\hat{x}, \\hat{p}_{x}] = i\\hbar$, and Atkins takes this commutator as the postulate-level distinction between classical and quantum mechanics because order of operations changes the outcome.',
        detail: 'Acting on a test function, $\\hat{x}\\hat{p}_{x}\\psi - \\hat{p}_{x}\\hat{x}\\psi = i\\hbar\\psi$ with $\\hat{p}_{x} = (\\hbar/i)(d/dx)$. Any pair with a non-zero commutator is complementary and cannot be sharp together.'
      },
      {
        term: 'Superposition and measurement probabilities',
        kind: 'theorem',
        statement: 'A **superposition** `Σckψk` written as $\\psi = \\sum_{k} c_{k} \\psi_{k}$ yields one eigenvalue per single measurement, and over many trials the eigenvalue belonging to $\\psi_{k}$ appears with probability proportional to $|c_{k}|^{2}$.',
        detail: 'The textbook case is $\\cos kx = (e^{ikx} + e^{-ikx})/2$, giving momentum $+k\\hbar$ half the time and $-k\\hbar$ half the time. Equal weights mean equal traffic in both directions.'
      },
      {
        term: 'Expectation values from the integral',
        kind: 'method',
        statement: 'The **expectation value** `⟨Ω⟩` for normalized $\\psi$ is $\\langle \\Omega \\rangle = \\int \\psi^{*} \\hat{\\Omega} \\psi \\, d\\tau$, the mean of many measurements, so for the box ground state $\\langle x \\rangle = L/2$ sits at the centre by symmetry.',
        detail: 'Kinetic energy follows the same route as $\\langle E_{k} \\rangle$ from the second-derivative operator, which is why sharp curvature where $\\psi$ is large raises the observed energy. Always normalize before integrating.'
      },
      {
        term: 'Heisenberg uncertainty and complementarity',
        kind: 'law',
        statement: 'The **uncertainty relation** `ΔpΔq` states $\\Delta p_{q} \\, \\Delta q \\geq \\hbar/2$ with root-mean-square widths, so exact position forces $\\Delta p_{q} \\to \\infty$ and exact momentum forces $\\Delta q \\to \\infty$ along the same axis.',
        detail: 'Position on $x$ with momentum along $y$ or $z$ is unrestricted because the relation binds only the same direction. Minimum-uncertainty Gaussian packets saturate the bound and model the sharpest allowed compromise.'
      }
    ],
    figures: [
      {
        caption: 'Minimum-uncertainty packet: narrowing the position spread $\\Delta x$ widens the momentum spread $\\Delta p_{x}$ so that $\\Delta p_{x} \\, \\Delta x \\geq \\hbar/2$ always holds.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gaussian wave packet with position width and momentum width arrows showing the uncertainty trade-off"><line x1="60" y1="290" x2="660" y2="290" stroke="currentColor" stroke-width="2"/><line x1="90" y1="290" x2="90" y2="60" stroke="currentColor" stroke-width="2"/><text x="640" y="315" font-size="16" fill="currentColor">x</text><text x="60" y="50" font-size="16" fill="currentColor">ψ</text><path d="M150,290 C210,290 230,150 290,150 C350,150 370,290 430,290" fill="none" stroke="currentColor" stroke-width="3"/><line x1="230" y1="250" x2="350" y2="250" stroke="currentColor" stroke-width="2"/><polygon points="350,250 340,245 340,255" fill="currentColor"/><polygon points="230,250 240,245 240,255" fill="currentColor"/><text x="262" y="240" font-size="15" fill="currentColor">Δx</text><line x1="480" y1="150" x2="480" y2="250" stroke="currentColor" stroke-width="2"/><polygon points="480,150 475,160 485,160" fill="currentColor"/><polygon points="480,250 475,240 485,240" fill="currentColor"/><text x="495" y="205" font-size="15" fill="currentColor">Δp</text><rect x="460" y="80" width="200" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="560" y="108" text-anchor="middle" font-size="14" fill="currentColor">squeeze x, spread p</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Proving the fundamental commutator on a test function',
        problem: 'Show that $[\\hat{x}, \\hat{p}_{x}]\\psi = i\\hbar\\psi$ for an arbitrary $\\psi(x)$ using $\\hat{p}_{x} = (\\hbar/i)(d/dx)$.',
        steps: [
          { label: 'Step 1', text: 'Write both orderings with the product rule kept explicit:\n```text\nx-hat p-hat psi = x (hbar/i) dpsi/dx\np-hat x-hat psi = (hbar/i) d(x psi)/dx\n```\nThe derivative of the product $x\\psi$ is where the non-commutation hides.' },
          { label: 'Step 2', text: 'Expand $d(x\\psi)/dx = \\psi + x \\, d\\psi/dx$ and subtract: $\\hat{x}\\hat{p}_{x}\\psi - \\hat{p}_{x}\\hat{x}\\psi = -(\\hbar/i)\\psi = i\\hbar\\psi$. The $x$-derivative terms cancel exactly.' },
          { label: 'Step 3', text: 'Read the physics: the surviving $i\\hbar\\psi$ is independent of $\\psi$, so the commutator is the operator identity $[\\hat{x}, \\hat{p}_{x}] = i\\hbar$.' }
        ],
        result: '$[\\hat{x}, \\hat{p}_{x}] = i\\hbar$ as an operator identity, the source of complementarity.'
      },
      {
        title: 'Uncertainty estimate for a localized macroscopic ball',
        problem: 'A ball of mass $500$ g is known within $\\Delta x = 1.0 \\times 10^{-6}$ m. Find the minimum uncertainty in its speed.',
        steps: [
          { label: 'Step 1', text: 'Insert the bound $\\Delta p_{x} \\geq \\hbar /(2\\Delta x)$ with $\\hbar = 1.055 \\times 10^{-34}$ J s. This is the smallest momentum spread the theory permits.' },
          { label: 'Step 2', text: 'Divide by the mass: $\\Delta v_{x} = \\Delta p_{x} /m \\geq 1.055 \\times 10^{-34} /(2 \\times 10^{-6} \\times 0.50)$, which evaluates near $1.1 \\times 10^{-28}$ m s$^{-1}$.' },
          { label: 'Step 3', text: 'Conclude the quantum fuzz is utterly unobservable for macroscopic masses, while the same formula gives large spreads for electrons and protons.' }
        ],
        result: '$\\Delta v_{x}$ is at least about $10^{-28}$ m s$^{-1}$, confirming classical determinism emerges for heavy objects.'
      }
    ],
    keyTakeaways: [
      'Hermitian operators have real eigenvalues and orthogonal eigenfunctions for distinct values.',
      '$\\psi = \\sum_{k} c_{k} \\psi_{k}$ gives eigenvalue probabilities $|c_{k}|^{2}$ and mean $\\langle \\Omega \\rangle = \\int \\psi^{*} \\hat{\\Omega} \\psi \\, d\\tau$.',
      '$[\\hat{x}, \\hat{p}_{x}] = i\\hbar$ is the postulate-level split between classical and quantum mechanics.',
      '$\\Delta p_{q} \\, \\Delta q \\geq \\hbar/2$ binds only the same axis; transverse pairs stay unrestricted.'
    ],
    quiz: [
      // PYQ-pattern: hermiticity and real eigenvalues drill
      {
        q: 'Why must observables be represented by Hermitian operators?',
        options: ['Only Hermitian matrices fit on a page', 'Hermiticity guarantees real eigenvalues and orthogonal eigenfunctions for distinct values', 'Hermitian operators always commute with each other', 'Hermiticity removes the need for normalization'],
        answer: 1,
        explanation: 'Step 1: Recall measured values are real numbers. Step 2: Hermitian operators have real eigenvalues by the defining integral identity. Step 3: Distinct eigenvalues give orthogonal eigenfunctions, simplifying all later integrals.'
      },
      {
        q: 'For $\\psi = (e^{ikx} + e^{-ikx})/2$, repeated momentum measurements give:',
        options: ['$-k\\hbar$ every time', 'Zero momentum every time', 'Half $+k\\hbar$ and half $-k\\hbar$ with equal weight', '$+k\\hbar$ every time'],
        answer: 2,
        explanation: 'Step 1: Expand the superposition into momentum eigenfunctions. Step 2: Read equal coefficients for both signs. Step 3: Square the moduli to get half-and-half probabilities.'
      },
      {
        q: 'Evaluate $[\\hat{x}, \\hat{p}_{x}]$:',
        options: ['$-\\hbar^{2} d^{2}/dx^{2}$', '$k\\hbar$', '$0$', '$i\\hbar$'],
        answer: 3,
        explanation: 'Step 1: Apply both orderings to a test function. Step 2: Use the product rule on $\\hat{p}_{x}(x\\psi)$. Step 3: Cancel to leave the constant $i\\hbar$.'
      },
      // PYQ-pattern: uncertainty application check
      {
        q: 'A proton momentum is fixed to $0.0100$ percent precision. What must happen to its position uncertainty?',
        options: ['It becomes negative to compensate', 'It can still be made zero with better apparatus', 'It must grow so that $\\Delta p \\, \\Delta x \\geq \\hbar/2$ holds', 'It shrinks in the same proportion'],
        answer: 2,
        explanation: 'Step 1: Write the bound for the same axis. Step 2: Note shrinking $\\Delta p$ forces $\\Delta x$ upward. Step 3: Conclude exact momentum means completely indefinite position.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.2
  {
    sectionId: 'chem-ch15-s2',
    depth: [
      {
        tier: 'masters',
        title: 'Confinement nodes and tunneling through finite barriers',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Box quantization from vanishing boundary conditions',
            body: 'Confine a particle of mass $m$ to length $L$ with infinite walls where the wavefunction must vanish, and solve the free wave equation with sine waves that fit whole half waves. The allowed wavelengths give energies $E_n = n^2h^2/8mL^2$ with $n = 1, 2, 3$ counting half waves and nodes as $n - 1$ interior zeros. Zero point energy follows immediately since $n = 0$ would make the wavefunction vanish everywhere, and at large $n$ the level spacing falls relative to energy so the spectrum approaches the classical continuum by the correspondence principle.'
          },
          {
            kind: 'theorem',
            heading: 'Tunneling transmission decays exponentially with barrier area',
            body: 'The **tunneling theorem** states that for a rectangular barrier of height above the particle energy and width $L$, the transmission probability falls exponentially with barrier thickness times the square root of the deficit. Heavier masses suppress leakage sharply, which is why electron tunneling drives scanning microscopes while proton tunneling needs thin biological barriers and alpha decay waits for nuclear widths. Field emission displays and flash memory erase cycles are engineered versions of the same exponential, with voltage used to thin the barrier in real time.'
          },
          {
            kind: 'application',
            heading: 'Dots microscopes and decay clocks built on confinement',
            body: 'Semiconductor nanocrystals tune fluorescence color through box size alone, with smaller dots pushing $E_n = n^2h^2/8mL^2$ gaps toward the blue exactly as confinement predicts. Scanning tunneling microscopes hold a tip angstroms from a surface so electron leakage reports topography atom by atom, and geochronology reads alpha decay half lives as tunneling clocks through Coulomb barriers. Together these devices turn textbook boundary conditions into nanotechnology and dating methods that share one exponential law.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'Confining a particle between impenetrable walls forces its wavefunction to vanish at the boundaries, and only sine waves with whole half-waves fit. That single boundary condition generates quantization, nodes, zero-point energy and the correspondence principle in one stroke. When the wall becomes a finite barrier instead, the same mathematics lets the particle leak through by tunnelling.',
    objectives: [
      'Write box wavefunctions and energies and count nodes for any quantum number',
      'Explain zero-point energy two ways and use the correspondence principle at high quantum numbers',
      'Estimate tunnelling transmission from barrier height, width and particle mass'
    ],
    concepts: [
      {
        term: 'Boundary conditions quantize the box',
        kind: 'law',
        statement: 'The **particle-in-a-box states** `ψn` are $\\psi_{n} = (2/L)^{1/2} \\sin(n\\pi x/L)$ with $n = 1, 2, \\ldots$, because vanishing at $x = 0$ and $x = L$ admits only integer half-waves in the box.',
        detail: 'The integer $n$ is the quantum number: it labels the state and computes its energy. Satisfying boundary conditions is the general origin of discrete eigenvalues.'
      },
      {
        term: 'Box energies and zero-point energy',
        kind: 'theorem',
        statement: 'The **box energy ladder** `En` climbs as $E_{n} = n^{2}h^{2} /(8mL^{2})$, so the lowest allowed energy is the irremovable zero-point energy $E_{1} = h^{2} /(8mL^{2})$, never zero.',
        detail: 'Level gaps $E_{n+1} - E_{n} = (2n+1)h^{2} /(8mL^{2})$ shrink relatively as $L$ grows, so laboratory vessels show effectively continuous translation. Two readings of $E_{1}$: uncertainty forbids rest, and a nodeless-between-walls curve must carry curvature energy.'
      },
      {
        term: 'Nodes and the correspondence principle',
        kind: 'insight',
        statement: 'Each **node count** `n-1` adds one zero crossing since $\\psi_{n}$ has $n - 1$ nodes, and at large $n$ the dense $\\sin^{2}$ maxima average to the uniform classical density, which is the correspondence principle.',
        detail: 'Shorter wavelength at higher $n$ means sharper average curvature and hence larger kinetic energy at $V = 0$. Momentum stays indefinite since $\\sin kx$ mixes $+n\\pi\\hbar/L$ and $-n\\pi\\hbar/L$ equally.'
      },
      {
        term: 'Finite wells and bound states',
        kind: 'definition',
        statement: 'A **finite square well** `bound states` of depth $V_{0}$ and width $L$ holds only finitely many states with $E < V_{0}$, with the count growing as $(8mV_{0})^{1/2}L/h$ increases, recovering the infinite box as $V_{0} \\to \\infty$.',
        detail: 'Inside the walls the functions still oscillate, but they decay exponentially into the walls with continuous value and slope. Semiconductor junctions are modelled exactly this way.'
      },
      {
        term: 'Tunnelling through barriers',
        kind: 'law',
        statement: 'The **tunnelling transmission** `T` decays inside the barrier as $e^{-\\kappa x}$ with $\\kappa = (2m(V_{0}-E))^{1/2}/\\hbar$, giving $T \\approx e^{-2\\kappa W}$ across width $W$, so light particles cross far more readily than heavy ones.',
        detail: 'Scanning tunnelling microscopy images surfaces because the current tracks $T$ exponentially with tip distance. Proton transfer at low temperature can be dominated by tunnelling through, not over, the barrier.'
      }
    ],
    figures: [
      {
        caption: 'First three box states: $\\psi_{1}$ has no node, $\\psi_{2}$ has one node, $\\psi_{3}$ has two nodes, with energies in the ratio $1:4:9$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Particle in a box showing the first three sine wavefunctions with increasing nodes"><line x1="80" y1="300" x2="640" y2="300" stroke="currentColor" stroke-width="2"/><line x1="140" y1="60" x2="140" y2="300" stroke="currentColor" stroke-width="3"/><line x1="580" y1="60" x2="580" y2="300" stroke="currentColor" stroke-width="3"/><text x="130" y="325" font-size="15" fill="currentColor">0</text><text x="570" y="325" font-size="15" fill="currentColor">L</text><path d="M140,300 C250,300 250,170 360,170 C470,170 470,300 580,300" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="600" y="200" font-size="14" fill="currentColor">n=1</text><path d="M140,300 C220,300 220,130 300,130 C380,130 380,300 360,300 C340,300 340,130 420,130 C500,130 500,300 580,300" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 4"/><text x="600" y="150" font-size="14" fill="currentColor">n=2</text><path d="M140,300 C190,300 190,100 240,100 C290,100 290,300 360,300 C430,300 430,100 480,100 C530,100 530,300 580,300" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 4"/><text x="600" y="110" font-size="14" fill="currentColor">n=3</text><circle cx="360" cy="300" r="5" fill="currentColor"/><text x="330" y="330" font-size="13" fill="currentColor">node of n=2</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Ground-state energy of an electron in a nanometre box',
        problem: 'Estimate $E_{1}$ for an electron confined to $L = 1.0$ nm and compare it with thermal energy at room temperature.',
        steps: [
          { label: 'Step 1', text: 'Insert $E_{1} = h^{2} /(8mL^{2})$ with $h = 6.626 \\times 10^{-34}$ J s and $m_{e} = 9.109 \\times 10^{-31}$ kg:\n```text\nE1 = h^2 / (8 m L^2), L = 1.0 nm\nE1 ~ 6.0e-20 J ~ 0.38 eV\n```\nConfinement to nanometres already costs fractions of an electronvolt.' },
          { label: 'Step 2', text: 'Compare with $kT$ near $4.1 \\times 10^{-21}$ J at $298$ K: the zero-point energy exceeds thermal energy by more than an order of magnitude.' },
          { label: 'Step 3', text: 'Scale the lesson: $E_{1}$ falls as $1/L^{2}$, so a $100$ nm region drops the cost by four orders of magnitude toward the classical continuum.' }
        ],
        result: '$E_{1} \\approx 6.0 \\times 10^{-20}$ J, far above $kT$, so nanoscale confinement is intrinsically quantum.'
      },
      {
        title: 'Tunnelling through a semiconductor-style barrier',
        problem: 'An electron of energy $1.5$ eV meets a rectangular barrier of height $2.0$ eV and width $100$ pm. Estimate the transmission probability.',
        steps: [
          { label: 'Step 1', text: 'Form the deficit $V_{0} - E = 0.50$ eV $= 8.0 \\times 10^{-20}$ J and the decay constant $\\kappa = (2m(V_{0}-E))^{1/2}/\\hbar$.' },
          { label: 'Step 2', text: 'Evaluate $\\kappa \\approx 3.6 \\times 10^{9}$ m$^{-1}$, so $2\\kappa W = 2 \\times 3.6 \\times 10^{9} \\times 10^{-10} \\approx 0.72$.' },
          { label: 'Step 3', text: 'Exponentiate: $T \\approx e^{-0.72} \\approx 0.49$, a large leakage because the barrier is thin and low; doubling $W$ would square the suppression.' }
        ],
        result: '$T \\approx 0.5$: roughly half the amplitude gets through, showing why thin barriers leak badly.'
      }
    ],
    keyTakeaways: [
      '$\\psi_{n} = (2/L)^{1/2} \\sin(n\\pi x/L)$ with $E_{n} = n^{2}h^{2} /(8mL^{2})$ and $n - 1$ nodes.',
      'Zero-point energy $E_{1} = h^{2} /(8mL^{2})$ follows from uncertainty and from mandatory curvature.',
      'High-$n$ densities average to the classical uniform result: the correspondence principle.',
      '$T \\approx e^{-2\\kappa W}$ with $\\kappa = (2m(V_{0}-E))^{1/2}/\\hbar$ makes tunnelling mass- and width-sensitive.'
    ],
    quiz: [
      {
        q: 'How many nodes does $\\psi_{4}$ of the one-dimensional box have?',
        options: ['$4$', '$5$', '$3$', '$0$'],
        answer: 2,
        explanation: 'Step 1: Recall the node rule $n - 1$. Step 2: Insert $n = 4$. Step 3: Count three interior zeros plus vanishing endpoints.'
      },
      // PYQ-pattern: zero-point energy origin check
      {
        q: 'Which pair both explain the box zero-point energy?',
        options: ['Uncertainty forbidding rest and curvature required between the walls', 'Electron spin plus nuclear charge', 'Viscosity plus surface tension', 'Pauli exclusion plus Hund rule'],
        answer: 0,
        explanation: 'Step 1: Finite $\\Delta x$ forces finite $\\Delta p$. Step 2: A smooth wall-to-wall function must curve. Step 3: Both routes forbid zero kinetic energy.'
      },
      {
        q: 'A square two-dimensional box has states $(1,2)$ and $(2,1)$. They are:',
        options: ['Forbidden by the Pauli principle', 'Separated by the zero-point gap', 'Identical wavefunctions', 'Degenerate partners with the same energy $5h^{2} /(8mL^{2})$'],
        answer: 3,
        explanation: 'Step 1: Write $E = (n_{1}^{2} + n_{2}^{2})h^{2} /(8mL^{2})$. Step 2: Both pairs give $1 + 4 = 5$. Step 3: Different functions, same energy means degeneracy.'
      },
      {
        q: 'Tunnelling probability falls fastest when increasing:',
        options: ['The temperature of the walls', 'The incident energy above the barrier', 'Barrier width and the square root of mass times deficit', 'The box length'],
        answer: 2,
        explanation: 'Step 1: Inspect $T \\approx e^{-2\\kappa W}$. Step 2: Note $\\kappa$ grows with $(m(V_{0}-E))^{1/2}$. Step 3: Wider barriers and heavier particles suppress $T$ exponentially.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.3
  {
    sectionId: 'chem-ch15-s3',
    readingTime: 8,
    intro: 'The postulates compress the whole theory into five statements about wavefunctions, probabilities, operators and measurement. Superposition is the working consequence: any state is a sum of eigenstates, and the squared coefficients are the entire prediction for repeated experiments. This section states each postulate in words and drills the two canonical applications.',
    objectives: [
      'Recite the five postulates and match each to its equation',
      'Judge wavefunction acceptability by finiteness, continuity and normalization',
      'Predict single-shot versus many-shot outcomes from superposition coefficients'
    ],
    concepts: [
      {
        term: 'Wavefunction postulate',
        kind: 'definition',
        statement: 'The **state postulate** `ψ` asserts that all dynamical information sits in $\\psi$, found by solving the Schrödinger equation $- (\\hbar^{2}/2m)(d^{2}\\psi/dx^{2}) + V(x)\\psi = E\\psi$ with the system boundary conditions.',
        detail: 'No trajectory is postulated; the function plus its equation replaces orbits. Every later postulate is a rule for extracting numbers from $\\psi$.'
      },
      {
        term: 'Born interpretation and normalization',
        kind: 'law',
        statement: 'The **Born rule** `|ψ|²` gives probability $P \\propto |\\psi|^{2} d\\tau$ in volume $d\\tau = dx\\,dy\\,dz$, with normalization $\\int |\\psi|^{2} d\\tau = 1$ fixing total probability to unity.',
        detail: 'Acceptable functions must be single-valued, continuous, finite over finite regions, and of continuous slope except at infinite jumps. Nodes where $\\psi = 0$ are allowed and mark zero-density points.'
      },
      {
        term: 'Observable-operator correspondence',
        kind: 'definition',
        statement: 'Each **observable** `Ω̂` owns an operator built by its classical recipe, for instance $\\hat{x} = x\\times$ for position and $\\hat{p}_{x} = (\\hbar/i)(d/dx)$ for momentum, with energy carried by the Hamiltonian.',
        detail: 'Constructing the potential-energy operator by inserting $V(x)$ is the standard first exercise. Hermitian construction guarantees the eigenvalues can be read on a meter.'
      },
      {
        term: 'Eigenvalues and single measurements',
        kind: 'theorem',
        statement: 'A **sharp value** `eigenvalue` exists only when $\\hat{\\Omega}\\psi = \\omega\\psi$ holds, and then one measurement returns exactly $\\omega$; otherwise repeated trials scatter over the contributing eigenvalues.',
        detail: '$\\cos kx$ is an energy eigenfunction with $E = k^{2}\\hbar^{2}/2m$ yet not a momentum eigenfunction. Operators share sharp values only when they share eigenfunctions.'
      },
      {
        term: 'Superposition completeness',
        kind: 'insight',
        statement: 'The **complete set** `basis` property lets any $\\psi$ expand as $\\psi = \\sum_{k} c_{k} \\psi_{k}$, so chemistry predicts distributions $|c_{k}|^{2}$ rather than single trajectories whenever states mix.',
        detail: 'Hybrid orbitals, molecular orbitals and coupled-spin states are all practical superposition expansions. Truncating the sum is the everyday approximation behind variational calculations.'
      }
    ],
    figures: [
      {
        caption: 'Born density $|\\psi|^{2}$ for the box $n=2$ state: the node has zero probability while the two lobes carry equal weight.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Probability density of the second particle in a box state with two equal lobes and a central node"><line x1="70" y1="290" x2="650" y2="290" stroke="currentColor" stroke-width="2"/><line x1="130" y1="290" x2="130" y2="60" stroke="currentColor" stroke-width="3"/><line x1="560" y1="290" x2="560" y2="60" stroke="currentColor" stroke-width="3"/><path d="M130,290 C190,290 190,120 250,120 C310,120 310,290 345,290 C380,290 380,120 440,120 C500,120 500,290 560,290" fill="none" stroke="currentColor" stroke-width="3"/><line x1="345" y1="290" x2="345" y2="120" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><text x="345" y="315" text-anchor="middle" font-size="14" fill="currentColor">node: P = 0</text><rect x="180" y="200" width="110" height="40" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="235" y="225" text-anchor="middle" font-size="14" fill="currentColor">lobe A</text><rect x="400" y="200" width="110" height="40" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="455" y="225" text-anchor="middle" font-size="14" fill="currentColor">lobe B</text><text x="345" y="60" text-anchor="middle" font-size="14" fill="currentColor">probabilities A = B = half</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Mean position in the box ground state',
        problem: 'For $\\psi_{1} = (2/L)^{1/2}\\sin(\\pi x/L)$ on $0$ to $L$, evaluate $\\langle x \\rangle$.',
        steps: [
          { label: 'Step 1', text: 'Set up $\\langle x \\rangle = \\int_{0}^{L} \\psi_{1} x \\psi_{1} dx = (2/L)\\int_{0}^{L} x\\sin^{2}(\\pi x/L) dx$ for the normalized real function.' },
          { label: 'Step 2', text: 'Use symmetry: $\\sin^{2}$ is symmetric about $L/2$, and $x$ weights both halves equally, giving:\n```text\n<x> = L/2 by symmetry of sin^2 about centre\nno off-centre shift survives integration\n```\nThe integral evaluates to $L/2$.' },
          { label: 'Step 3', text: 'Interpret over many trials: the electron averages to the centre although no single detection is smeared there.' }
        ],
        result: '$\\langle x \\rangle = L/2$, the centre of the box.'
      },
      {
        title: 'Momentum content of a cosine wave',
        problem: 'A free particle has $\\psi = \\cos kx$. What momenta appear on measurement and with what probabilities?',
        steps: [
          { label: 'Step 1', text: 'Rewrite $\\cos kx = (e^{ikx} + e^{-ikx})/2$ as a superposition of momentum eigenfunctions with eigenvalues $+k\\hbar$ and $-k\\hbar$.' },
          { label: 'Step 2', text: 'Square equal coefficients: each branch carries half the weight, so energy $k^{2}\\hbar^{2}/2m$ is sharp while momentum sign is maximally uncertain.' },
          { label: 'Step 3', text: 'State the laboratory reading: equal numbers drift left and right with speed $|k|\\hbar /m$.' }
        ],
        result: 'Momenta $\\pm k\\hbar$ each with probability one half; energy sharp, direction unsharp.'
      }
    ],
    keyTakeaways: [
      '$\\psi$ holds all dynamics; $|\\psi|^{2}d\\tau$ with $\\int |\\psi|^{2}d\\tau = 1$ gives the probabilities.',
      'Observables map to Hermitian operators; sharp values need $\\hat{\\Omega}\\psi = \\omega\\psi$.',
      '$\\psi = \\sum_{k} c_{k}\\psi_{k}$ predicts $|c_{k}|^{2}$ frequencies over many trials.',
      'One measurement returns one eigenvalue; the mean of many is $\\langle \\Omega \\rangle$.'
    ],
    quiz: [
      {
        q: 'Which wavefunction is unacceptable over a finite region?',
        options: ['Continuous and normalized sine', 'Single-valued Gaussian', 'A function infinite over a finite interval', 'A smooth decaying exponential'],
        answer: 2,
        explanation: 'Step 1: Apply the Born finiteness constraint. Step 2: Infinite amplitude over finite volume breaks probabilities. Step 3: Reject that candidate while keeping the rest.'
      },
      // PYQ-pattern: superposition probability drill
      {
        q: '$\\psi = c_{1}\\psi_{1} + c_{2}\\psi_{2}$ with $|c_{1}|^{2} = 0.25$. In $400$ trials, eigenvalue $1$ appears about:',
        options: ['$300$ times', '$100$ times', '$25$ times', '$400$ times'],
        answer: 1,
        explanation: 'Step 1: Identify probability with $|c_{1}|^{2}$. Step 2: Multiply $0.25 \\times 400$. Step 3: Expect about $100$ outcomes with statistical scatter.'
      },
      {
        q: '$\\cos kx$ is an eigenfunction of:',
        options: ['Position with eigenvalue $x = k$', 'Nothing, it is unusable', 'Momentum with eigenvalue $+k\\hbar$', 'Energy with $E = k^{2}\\hbar^{2}/2m$ but not of momentum'],
        answer: 3,
        explanation: 'Step 1: Differentiate twice to confirm the energy equation. Step 2: Try the first derivative and find sign mixing. Step 3: Conclude sharp energy coexists with indefinite momentum.'
      },
      {
        q: 'Normalization $\\int |\\psi|^{2}d\\tau = 1$ means:',
        options: ['The momentum is sharp', 'The particle sits at one point', 'Total probability over all space is unity', 'The energy is zero'],
        answer: 2,
        explanation: 'Step 1: Integrate the Born density everywhere. Step 2: Demand the particle be somewhere with certainty. Step 3: Fix the scale factor of $\\psi$ accordingly.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.4
  {
    sectionId: 'chem-ch15-s4',
    readingTime: 8,
    intro: 'Molecular bonds vibrate, and the quantum harmonic oscillator is the model that turns stiffness and mass into evenly spaced vibrational levels. Its ground state keeps a zero-point energy, its wavefunctions leak past the classical turning points, and its frequency formula connects directly to infrared spectra. This section previews the oscillator exactly where Atkins Topic 7E leaves it.',
    objectives: [
      'Write oscillator energies from force constant and mass and extract zero-point energy',
      'Sketch Hermite-Gaussian wavefunctions and count their nodes',
      'Convert between vibrational wavenumber, frequency and force constant'
    ],
    concepts: [
      {
        term: 'Evenly spaced oscillator levels',
        kind: 'theorem',
        statement: 'The **oscillator ladder** `Ev` is $E_{v} = (v + \\tfrac{1}{2})\\hbar\\omega$ with $\\omega = (k_{f} /m)^{1/2}$ and $v = 0, 1, 2, \\ldots$, so neighbours split by exactly $\\hbar\\omega$.',
        detail: 'Stiffer $k_{f}$ raises the rung spacing while heavier $m$ compresses it. Infrared fundamentals measure this spacing directly.'
      },
      {
        term: 'Oscillator zero-point energy',
        kind: 'law',
        statement: 'The **vibrational zero-point** `E0` is $E_{0} = \\tfrac{1}{2}\\hbar\\omega$, an irremovable half-quantum that keeps bonds delocalized even at absolute zero.',
        detail: 'Dissociation energies from spectra must add back this half-quantum to reach the true well depth. Isotope substitution lowers $E_{0}$ through the heavier reduced mass.'
      },
      {
        term: 'Hermite-Gaussian wavefunctions',
        kind: 'definition',
        statement: 'Each **oscillator state** `ψv` is $\\psi_{v} \\propto H_{v}(y)e^{-y^{2}/2}$ with $y \\propto x$, a Hermite polynomial times a Gaussian bell, carrying exactly $v$ nodes.',
        detail: 'The $v = 0$ Gaussian has its maximum at zero displacement with $\\langle x \\rangle = 0$. Classical turning-point leakage is large for $v = 0$ and fades as $v$ grows.'
      },
      {
        term: 'Spreads and the virial balance',
        kind: 'method',
        statement: 'The **mean-square spread** `⟨x²⟩` obeys $\\langle x^{2} \\rangle = (v + \\tfrac{1}{2})\\hbar /(mk_{f})^{1/2}$, and the virial theorem splits each $E_{v}$ evenly between kinetic and potential averages.',
        detail: 'Mean displacement vanishes but mean-square displacement grows with $v$. Hot bands sample these wider, more anharmonic regions of the well.'
      },
      {
        term: 'Bridge to molecular vibration',
        kind: 'insight',
        statement: 'Real **bond vibrations** `k-f` follow $\\tilde{\\nu} = (2\\pi c)^{-1}(k_{f} /\\mu)^{1/2}$ in wavenumbers, so a measured $\\tilde{\\nu}$ inverts to stiffness $k_{f}$ with reduced mass $\\mu$.',
        detail: 'Typical single bonds give $k_{f}$ of hundreds of N m$^{-1}$ and fundamentals of hundreds to thousands of reciprocal centimetres. Anharmonicity later corrects this harmonic preview.'
      }
    ],
    figures: [
      {
        caption: 'Harmonic well $V = k_{f}x^{2}/2$ with rungs $v = 0$ to $3$ spaced by $\\hbar\\omega$ above the zero-point energy $E_{0}$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parabolic potential with four equally spaced vibrational levels"><path d="M120,300 C220,300 260,90 360,90 C460,90 500,300 600,300" fill="none" stroke="currentColor" stroke-width="3"/><line x1="285" y1="255" x2="435" y2="255" stroke="currentColor" stroke-width="2.5"/><text x="445" y="259" font-size="14" fill="currentColor">v=0</text><line x1="262" y1="215" x2="458" y2="215" stroke="currentColor" stroke-width="2.5"/><text x="468" y="219" font-size="14" fill="currentColor">v=1</text><line x1="245" y1="175" x2="475" y2="175" stroke="currentColor" stroke-width="2.5"/><text x="485" y="179" font-size="14" fill="currentColor">v=2</text><line x1="232" y1="135" x2="488" y2="135" stroke="currentColor" stroke-width="2.5"/><text x="498" y="139" font-size="14" fill="currentColor">v=3</text><line x1="120" y1="290" x2="600" y2="290" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><text x="610" y="294" font-size="13" fill="currentColor">V=0</text><line x1="360" y1="255" x2="360" y2="215" stroke="currentColor" stroke-width="1.6"/><polygon points="360,215 355,225 365,225" fill="currentColor"/><polygon points="360,255 355,245 365,245" fill="currentColor"/><text x="300" y="240" font-size="13" fill="currentColor">ℏω</text><text x="150" y="120" font-size="14" fill="currentColor">V(x)</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Zero-point energy of a hydrogen-chloride-like bond',
        problem: 'A diatomic has $k_{f} = 480$ N m$^{-1}$ and reduced mass $\\mu = 1.63 \\times 10^{-27}$ kg. Find $E_{0}$ and the fundamental wavenumber.',
        steps: [
          { label: 'Step 1', text: 'Compute $\\omega = (k_{f} /\\mu)^{1/2} \\approx 5.43 \\times 10^{14}$ s$^{-1}$:\n```text\nomega = sqrt(kf / mu)\nE0 = hbar omega / 2\nnu-tilde = omega / (2 pi c)\n```\nStiffness over tiny mass gives a very fast oscillator.' },
          { label: 'Step 2', text: 'Halve the quantum: $E_{0} = \\tfrac{1}{2}\\hbar\\omega \\approx 2.86 \\times 10^{-20}$ J, the energy the bond keeps at zero kelvin.' },
          { label: 'Step 3', text: 'Convert spacing to wavenumbers: $\\tilde{\\nu} = \\omega /(2\\pi c) \\approx 2886$ cm$^{-1}$, the familiar hydrogen-stretch region.' }
        ],
        result: '$E_{0} \\approx 2.9 \\times 10^{-20}$ J with fundamental near $2886$ cm$^{-1}$.'
      },
      {
        title: 'Force constant from an observed fundamental',
        problem: 'Carbon monoxide absorbs at $\\tilde{\\nu} = 2143$ cm$^{-1}$ with $\\mu = 1.14 \\times 10^{-26}$ kg. Estimate $k_{f}$.',
        steps: [
          { label: 'Step 1', text: 'Invert $\\tilde{\\nu} = (2\\pi c)^{-1}(k_{f} /\\mu)^{1/2}$ to $k_{f} = 4\\pi^{2}\\mu c^{2}\\tilde{\\nu}^{2}$ with $\\tilde{\\nu}$ in m$^{-1}$.' },
          { label: 'Step 2', text: 'Insert $\\tilde{\\nu} = 2.143 \\times 10^{5}$ m$^{-1}$: $k_{f} \\approx 4\\pi^{2} \\times 1.14 \\times 10^{-26} \\times (3.00 \\times 10^{8})^{2} \\times (2.143 \\times 10^{5})^{2}$.' },
          { label: 'Step 3', text: 'Evaluate to $k_{f} \\approx 1.86 \\times 10^{3}$ N m$^{-1}$, the stiff triple-bond value.' }
        ],
        result: '$k_{f} \\approx 1900$ N m$^{-1}$, consistent with a very stiff CO bond.'
      }
    ],
    keyTakeaways: [
      '$E_{v} = (v + \\tfrac{1}{2})\\hbar\\omega$ with $\\omega = (k_{f} /m)^{1/2}$ gives uniform rung spacing.',
      '$E_{0} = \\tfrac{1}{2}\\hbar\\omega$ is irremovable and shifts with isotopic mass.',
      '$\\psi_{v}$ has $v$ nodes and leaks past classical turning points, most at $v = 0$.',
      '$\\tilde{\\nu} = (2\\pi c)^{-1}(k_{f} /\\mu)^{1/2}$ converts spectra into bond stiffness.'
    ],
    quiz: [
      {
        q: 'Adjacent harmonic-oscillator levels are separated by:',
        options: ['$\\hbar\\omega/2$', '$\\hbar\\omega$', '$2\\hbar\\omega$', 'A gap growing with $v^{2}$'],
        answer: 1,
        explanation: 'Step 1: Subtract $E_{v+1} - E_{v}$. Step 2: Cancel the half-quanta. Step 3: Leave exactly one $\\hbar\\omega$.'
      },
      {
        q: 'The $v = 2$ wavefunction has how many nodes?',
        options: ['$0$', '$1$', '$2$', '$3$'],
        answer: 2,
        explanation: 'Step 1: Recall the Hermite degree equals $v$. Step 2: A degree-$2$ polynomial has two zeros. Step 3: Count two nodes inside the bell.'
      },
      // PYQ-pattern: isotope effect on frequency check
      {
        q: 'Replacing $^{1}$H by $^{2}$H in a bond, with $k_{f}$ fixed, the fundamental:',
        options: ['Stays identical', 'Becomes imaginary', 'Doubles exactly', 'Falls by about $\\sqrt{2}$ from heavier $\\mu$'],
        answer: 3,
        explanation: 'Step 1: Write $\\omega \\propto \\mu^{-1/2}$. Step 2: Double $\\mu$ to scale $\\omega$ by $1 /\\sqrt{2}$. Step 3: Conclude the heavier isotopologue vibrates lower.'
      },
      {
        q: 'Where is ground-state leakage past turning points largest?',
        options: ['At $v = 0$, then fading with $v$', 'At the highest bound $v$', 'Nowhere, leakage is forbidden', 'Only for free particles'],
        answer: 0,
        explanation: 'Step 1: Compare Gaussian tails with classical confinement. Step 2: Note relative forbidden weight shrinks as states grow. Step 3: Identify $v = 0$ as the most non-classical state.'
      }
    ]
  }
]
