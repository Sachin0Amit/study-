import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse Physical Chemistry — Atomic Structure and Quantum Numbers
// Chapter 2: sections 2.1 to 2.4. Master study content.
// Math is KaTeX via the RichText pipeline. Plain subscripts and arrows only.
// ============================================================================

export const chemCh02Content: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: 'chem-ch2-s1',
    readingTime: 9,
    intro: 'Bohr picture of circular orbits explains why hydrogen emits only sharp lines instead of a continuous rainbow. This section connects orbit energy to the Rydberg formula and maps Lyman, Balmer and higher series to their level jumps. Wavenumber, wavelength and photon-energy conversions are practised so line problems reduce to arithmetic.',
    objectives: [
      'Apply Bohr energy and radius formulae for hydrogen and hydrogen-like ions',
      'Use the Rydberg relation to assign series and compute line wavelengths',
      'Convert among wavenumber, wavelength, frequency and photon energy'
    ],
    concepts: [
      {
        term: 'Bohr orbit energy',
        kind: 'law',
        statement: 'The **Bohr energy** of level `n` is $E_n = -R_H Z^2/n^2$ with $R_H = 13.6 eV$ per atom, or $E_n = -2.18 \\times 10^{-18} Z^2/n^2 J$. Radius grows as $r_n = a_0 n^2/Z$ with $a_0 = 0.529$ angstrom.',
        detail: 'Negative sign marks bound states with zero at ionization: deeper levels are more negative. Energy scales as $Z^2$ while radius scales as $1/Z$, so $He^+$ is four times deeper and half the size of $H$ at the same $n$.'
      },
      {
        term: 'Rydberg line formula',
        kind: 'theorem',
        statement: 'The **Rydberg relation** gives the `wavenumber` of any jump as $1/\\lambda = R Z^2 (1/n_1^2 - 1/n_2^2)$ with $R = 1.097 \\times 10^7 m^{-1}$. Here $n_2$ is greater than $n_1$ for absorption and the reverse for emission.',
        detail: 'Lyman has $n_1 = 1$, Balmer $n_1 = 2$, Paschen $n_1 = 3$, Brackett $n_1 = 4$ and Pfund $n_1 = 5$. Swapping $n_1$ and $n_2$ flips the sign: keep $n_2$ greater than $n_1$ and take magnitude for emitted light.'
      },
      {
        term: 'Series limits and ionization',
        kind: 'insight',
        statement: 'The **series limit** is the `convergence edge` at $n_2 \\to \\infty$, giving $1/\\lambda_{limit} = R Z^2/n_1^2$. For Lyman this edge equals the ionization energy from level $n_1$.',
        detail: 'Beyond the limit lies continuum: photons with larger energy eject the electron with kinetic energy $h\\nu - IE$. Lines crowd toward the limit because spacing $1/n^2$ differences shrink at high $n$.'
      },
      {
        term: 'Photon energy ladder',
        kind: 'definition',
        statement: 'Photon energy follows **Planck ranking** $E = h\\nu = hc/\\lambda = hc \\times \\bar\\nu$ where `wavenumber` is $\\bar\\nu = 1/\\lambda$. Useful form is $E(eV) = 1240/\\lambda(nm)$ with $\\lambda$ in $nm$.',
        detail: 'Frequency, wavenumber and inverse wavelength all scale with energy, while wavelength is inverse. Trap: convert $nm$ to $m$ before using $R$ in $m^{-1}$; factor $10^9$ errors are the most common slip.'
      },
      {
        term: 'Hydrogen-like scaling and traps',
        kind: 'insight',
        statement: 'For **hydrogen-like ions** every hydrogen value scales by a `Z power`: energy and wavenumber by $Z^2$ and radius by $1/Z$. Thus $E(He^+, n=1) = -54.4 eV$ and Balmer lines of $Li^{2+}$ shift by $9$ times.',
        detail: 'Rydberg formula with $Z = 1$ applied to $He^+$ underestimates wavenumber fourfold. Also count lines from excited $n$ as $n(n-1)/2$ inside $...$ as $n(n-1)/2$: level $4$ can emit $6$ lines.'
      }
    ],
    figures: [
      {
        caption: 'Bohr levels follow $E_n = -13.6 Z^2/n^2$ eV with Rydberg $1/\lambda = R Z^2(1/n_1^2 - 1/n_2^2)$: the $n = 3$ to $n = 2$ drop emits $656.3 nm$ red Balmer light.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bohr circular orbits with Balmer emission arrow"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">Bohr orbits and the Balmer 3 to 2 line</text><circle cx="200" cy="200" r="10" fill="currentColor" stroke="none"/><text x="188" y="235" font-size="12" fill="currentColor" font-family="sans-serif">nucleus</text><circle cx="200" cy="200" r="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="245" y="175" font-size="12" fill="currentColor" font-family="sans-serif">n=1</text><circle cx="200" cy="200" r="75" fill="none" stroke="currentColor" stroke-width="2"/><text x="275" y="150" font-size="12" fill="currentColor" font-family="sans-serif">n=2</text><circle cx="200" cy="200" r="110" fill="none" stroke="currentColor" stroke-width="2"/><text x="305" y="120" font-size="12" fill="currentColor" font-family="sans-serif">n=3</text><circle cx="275" cy="200" r="6" fill="currentColor" stroke="none"/><circle cx="310" cy="200" r="6" fill="none" stroke="currentColor" stroke-width="2"/><line x1="300" y1="190" x2="270" y2="150" stroke="currentColor" stroke-width="2.5"/><polygon points="270,150 268,162 278,158" fill="currentColor" stroke="none"/><text x="310" y="165" font-size="13" fill="currentColor" font-family="sans-serif">656.3 nm red</text><line x1="420" y1="80" x2="420" y2="300" stroke="currentColor" stroke-width="1.5"/><text x="430" y="100" font-size="12" fill="currentColor" font-family="sans-serif">Lyman n1=1 UV</text><text x="430" y="140" font-size="12" fill="currentColor" font-family="sans-serif">Balmer n1=2 visible</text><text x="430" y="180" font-size="12" fill="currentColor" font-family="sans-serif">Paschen n1=3 IR</text><text x="430" y="220" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">limit: n2 to infinity</text><text x="430" y="260" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">E(eV) = 1240 / nm</text><text x="40" y="335" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">lines crowd to the limit; Z scales energy by Z squared</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Balmer line wavelength',
        problem: 'Compute the wavelength of the $n = 3$ to $n = 2$ emission line of hydrogen.',
        steps: [
          { label: 'Step 1', text: 'Identify $n_1 = 2$, $n_2 = 3$, $Z = 1$. Write $1/\\lambda = R (1/2^2 - 1/3^2)$ with $R = 1.097 \\times 10^7 m^{-1}$.' },
          { label: 'Step 2', text: 'Evaluate the bracket and wavelength:\n```txt\n1/4 - 1/9 = (9-4)/36 = 5/36 = 0.1389\n1/lambda = 1.097e7 x 0.1389 = 1.523e6 m^-1\nlambda = 1/1.523e6 = 6.563e-7 m = 656.3 nm\n```' },
          { label: 'Step 3', text: 'So $1/\\lambda = 1.523 \\times 10^6 m^{-1}$ giving $\\lambda = 6.563 \\times 10^{-7} m = 656.3 nm$. This red line is the first Balmer member, matching the observed glow.' }
        ],
        result: 'Wavelength is 656.3 nm in the red region of the Balmer series.'
      },
      {
        title: 'Bohr energy and ionization check',
        problem: 'Find the energy of $He^+$ in $n = 2$ and the ionization energy from that level.',
        steps: [
          { label: 'Step 1', text: 'Use $E_n = -13.6 Z^2/n^2 eV$ with $Z = 2$ and $n = 2$. Then $Z^2 = 4$ and $n^2 = 4$, so $E_2 = -13.6 \\times 4/4$.' },
          { label: 'Step 2', text: 'Compute directly:\n```txt\nE2 = -13.6 x 4 / 4 = -13.6 eV\nIE from n=2 = 0 - (-13.6) = 13.6 eV\nphoton lambda = 1240/13.6 = 91.2 nm\n```' },
          { label: 'Step 3', text: 'Hence $E_2 = -13.6 eV$ and ionization needs $+13.6 eV$. Equivalent wavelength $\\lambda = 1240/13.6 = 91.2 nm$ sits at the $He^+$ Balmer limit scaled by $Z^2$.' }
        ],
        result: 'E2 is minus 13.6 eV and ionization from n = 2 needs 13.6 eV.'
      }
    ],
    keyTakeaways: [
      'Bohr levels follow En = minus RHZ2/n2 with radius a0n2/Z.',
      'Rydberg wavenumber uses 1/n1 squared minus 1/n2 squared times R Z squared.',
      'Lyman, Balmer, Paschen, Brackett and Pfund fix n1 as 1 through 5.',
      'Series limit at infinity gives ionization energy from the lower level.'
    ],
    quiz: [
      // PYQ-pattern: Balmer wavelength from Rydberg bracket
      {
        q: 'The hydrogen emission $n = 3$ to $n = 2$ has $1/\\lambda = R(1/4 - 1/9)$. What is $\\lambda$? ($R = 1.097 \\times 10^7 m^{-1}$)',
        options: [`$103 nm$`, `$486 nm$`, `$656 nm$`, `$434 nm$`], answer: 2,
        explanation: 'Step 1: Bracket $1/4 - 1/9 = 5/36 = 0.1389$. Step 2: Multiply $1.097 \\times 10^7 \\times 0.1389 = 1.523 \\times 10^6 m^{-1}$. Step 3: Invert $1/1.523 \\times 10^6 = 6.563 \\times 10^{-7} m = 656.3 nm$. Step 4: Value $103 nm$ is a Lyman line from $n_1 = 1$.'
      },
      {
        q: 'How many emission lines appear when hydrogen atoms fall from $n = 4$ to ground?',
        options: [`$6$`, `$4$`, `$3$`, `$10$`], answer: 0,
        explanation: 'Step 1: Count pairs with $n(n-1)/2$. Step 2: Insert $4 \\times 3/2 = 12/2 = 6$. Step 3: List: $4 \\to 3$, $4 \\to 2$, $4 \\to 1$, $3 \\to 2$, $3 \\to 1$, $2 \\to 1$. Step 4: Count $4$ misses cascade lines among lower levels.'
      },
      {
        q: 'Energy of $He^+$ ($Z = 2$) in $n = 1$ equals?',
        options: [`$-13.6 eV$`, `$-27.2 eV$`, `$-6.8 eV$`, `$-54.4 eV$`], answer: 3,
        explanation: 'Step 1: Use $E = -13.6 Z^2/n^2$. Step 2: Insert $Z^2 = 4$, $n^2 = 1$. Step 3: Product $-13.6 \\times 4 = -54.4 eV$. Step 4: Value $-13.6 eV$ forgets the $Z^2$ scaling.'
      },
      {
        q: 'Lyman limit wavelength for hydrogen is $91.2 nm$. What is the $He^+$ Lyman limit?',
        options: [`$182.4 nm$`, `$45.6 nm$`, `$91.2 nm$`, `$22.8 nm$`], answer: 1,
        explanation: 'Step 1: Limit wavenumber scales as $Z^2$. Step 2: For $He^+$, $Z^2 = 4$, so wavenumber quadruples. Step 3: Wavelength is inverse, so $91.2/4 = 22.8 nm$. Step 4: Option $182.4 nm$ scales the wrong way by doubling.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.2
  {
    sectionId: 'chem-ch2-s2',
    readingTime: 8,
    intro: 'Light can knock electrons out of metals and particles can behave like waves, two facts that classical physics could not reconcile. This section quantifies threshold frequency and stopping potential for the photoelectric effect and pairs them with de Broglie wavelength. Together they set the scale where quantum effects take over from everyday mechanics.',
    objectives: [
      'Solve photoelectric problems with work function, threshold and kinetic energy',
      'Compute de Broglie wavelength for electrons, ions and macroscopic bodies',
      'Compare photon and matter-wave energies at atomic scales'
    ],
    concepts: [
      {
        term: 'Work function and threshold',
        kind: 'definition',
        statement: 'The **work function** $h\\nu_0$ is the minimum `photon energy` to release an electron, with threshold frequency $\\nu_0$ and wavelength $\\lambda_0 = c/\\nu_0$. Below $\\nu_0$ no emission occurs at any intensity.',
        detail: 'Work function is often quoted in $eV$: divide joules by $1.602 \\times 10^{-19}$. Intensity raises electron count, never electron energy; only frequency controls energy.'
      },
      {
        term: 'Einstein photoelectric equation',
        kind: 'law',
        statement: 'Energy conservation gives **Einstein balance** $h\\nu = h\\nu_0 + KE_{max}$ where `kinetic energy` is $KE_{max} = eV_0$ with stopping potential $V_0$. In wavelength form $hc/\\lambda = hc/\\lambda_0 + eV_0$.',
        detail: 'Plot of $KE$ versus $\\nu$ is a straight line of slope $h$ with intercept $-h\\nu_0$. Trap: $V_0$ measures energy per charge, so $KE$ in $eV$ equals $V_0$ in volts numerically.'
      },
      {
        term: 'de Broglie wavelength',
        kind: 'law',
        statement: 'Moving matter carries a **matter wave** of wavelength `\\lambda = h/p` written as $\\lambda = h/mv$ for slow particles. For electrons accelerated by $V$ volts, $\\lambda = 12.27/\\sqrt{V}$ angstrom with $V$ in volts.',
        detail: 'Derivation: $eV = p^2/2m$ gives $p = \\sqrt{2meV}$, and $h/p$ evaluates to the $12.27$ rule. At $100 V$ the wavelength is about $1.23$ angstrom, comparable to atomic spacing, which is why electron diffraction works.'
      },
      {
        term: 'Wave-particle duality conditions',
        kind: 'insight',
        statement: 'Waves show **particle kicks** in `photoelectric` emission while particles show wave interference when $\\lambda = h/mv$ approaches the aperture size. Heavy slow bodies have unresolvably small $\\lambda$.',
        detail: 'A $0.1 kg$ ball at $10 m/s$ has $\\lambda = 6.626 \\times 10^{-34}/1.0 = 6.6 \\times 10^{-34} m$, far below nuclear scales. Duality is universal but observable only for light masses such as electrons, protons and neutrons.'
      },
      {
        term: 'Uncertainty preview',
        kind: 'insight',
        statement: 'Confining a wave raises its momentum spread by **Heisenberg spread** $\\Delta x \\cdot \\Delta p \\geq h/4\\pi$ with `position-momentum` product bounded below. Ground-state energy of confined electrons follows directly.',
        detail: 'Narrower slits widen diffraction patterns because $\\Delta p$ grows as $\\Delta x$ shrinks. This bound, not instrument error, sets the minimum width of spectral lines and orbitals.'
      }
    ],
    figures: [
      {
        caption: 'Einstein balance $h\\nu = h\\nu_0 + eV_0$ sets kinetic energy while matter waves follow $\lambda = h/mv$: $100 V$ electrons diffract near $1.23$ angstrom.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Photoelectric emission and kinetic energy plot"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">photoelectric plate and KE versus frequency</text><rect x="60" y="100" width="20" height="140" fill="currentColor" stroke="none" opacity="0.3"/><rect x="60" y="100" width="20" height="140" fill="none" stroke="currentColor" stroke-width="2"/><text x="35" y="260" font-size="12" fill="currentColor" font-family="sans-serif">metal</text><line x1="20" y1="120" x2="60" y2="130" stroke="currentColor" stroke-width="2"/><polygon points="60,130 50,126 50,136" fill="currentColor" stroke="none"/><line x1="20" y1="160" x2="60" y2="160" stroke="currentColor" stroke-width="2"/><polygon points="60,160 50,156 50,164" fill="currentColor" stroke="none"/><text x="10" y="105" font-size="12" fill="currentColor" font-family="sans-serif">hv in</text><line x1="80" y1="160" x2="160" y2="130" stroke="currentColor" stroke-width="2.5"/><polygon points="160,130 150,130 154,140" fill="currentColor" stroke="none"/><text x="165" y="125" font-size="12" fill="currentColor" font-family="sans-serif">e- out, KE = eV0</text><rect x="250" y="80" width="20" height="160" fill="none" stroke="currentColor" stroke-width="2"/><text x="240" y="260" font-size="12" fill="currentColor" font-family="sans-serif">collector</text><text x="60" y="295" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">below nu0: nothing at any brightness</text><line x1="400" y1="260" x2="640" y2="260" stroke="currentColor" stroke-width="1.5"/><line x1="400" y1="260" x2="400" y2="100" stroke="currentColor" stroke-width="1.5"/><text x="390" y="285" font-size="12" fill="currentColor" font-family="sans-serif">KE</text><text x="640" y="280" font-size="12" fill="currentColor" font-family="sans-serif">nu</text><line x1="400" y1="260" x2="640" y2="120" stroke="currentColor" stroke-width="2.5"/><circle cx="480" cy="212" r="5" fill="currentColor" stroke="none"/><text x="485" y="230" font-size="11" fill="currentColor" font-family="sans-serif">nu0 threshold</text><text x="400" y="90" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">slope = h</text><text x="520" y="320" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">de Broglie 12.27 / sqrt(V) angstrom for e-</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Stopping potential from incident light',
        problem: 'Light of $400 nm$ falls on metal with work function $2.0 eV$. Find maximum kinetic energy and stopping potential.',
        steps: [
          { label: 'Step 1', text: 'Photon energy $E = 1240/400 = 3.10 eV$. Subtract work function: $KE = 3.10 - 2.0 = 1.10 eV$ by $h\\nu = h\\nu_0 + KE$.' },
          { label: 'Step 2', text: 'Convert and record:\n```txt\nE photon = 1240/400 = 3.10 eV\nKE max = 3.10 - 2.0 = 1.10 eV\nV0 = 1.10 V ; v = sqrt(2 KE/m)\nKE = 1.10 x 1.602e-19 = 1.76e-19 J\n```' },
          { label: 'Step 3', text: 'Stopping potential $V_0 = 1.10 V$ since $KE = eV_0$. In joules $KE = 1.10 \\times 1.602 \\times 10^{-19} = 1.76 \\times 10^{-19} J$.' }
        ],
        result: 'Maximum kinetic energy is 1.10 eV and stopping potential is 1.10 V.'
      },
      {
        title: 'de Broglie wavelength of an electron',
        problem: 'Find the de Broglie wavelength of an electron accelerated through $100 V$.',
        steps: [
          { label: 'Step 1', text: 'Use $\\lambda = 12.27/\\sqrt{V}$ angstrom for electrons. Here $\\sqrt{100} = 10$, so division is direct.' },
          { label: 'Step 2', text: 'Compute stepwise:\n```txt\nlambda = 12.27/sqrt(100) angstrom\nlambda = 12.27/10 = 1.227 angstrom\nlambda = 1.227e-10 m\n```' },
          { label: 'Step 3', text: 'Thus $\\lambda = 1.227$ angstrom which is $1.227 \\times 10^{-10} m$. Full form $\\lambda = h/\\sqrt{2meV}$ gives the same value on substitution.' }
        ],
        result: 'Wavelength is 1.23 angstrom, of the order of interatomic spacing.'
      }
    ],
    keyTakeaways: [
      'No emission below threshold frequency at any light intensity.',
      'Einstein balance hν = hν0 + KEmax with KEmax = eV0 governs energetics.',
      'Matter wavelength λ = h/mv gives 12.27/sqrt(V) angstrom for electrons.',
      'Heavy bodies have negligible wavelength while electrons diffract at crystals.'
    ],
    quiz: [
      // PYQ-pattern: stopping potential from wavelength and work function
      {
        q: '$400 nm$ light ($3.10 eV$) hits metal of work function $2.0 eV$. What is $V_0$?',
        options: [`$5.10 V$`, `$1.10 V$`, `$3.10 V$`, `$2.00 V$`], answer: 1,
        explanation: 'Step 1: Photon $1240/400 = 3.10 eV$. Step 2: Subtract $3.10 - 2.0 = 1.10 eV$ kinetic. Step 3: Convert $V_0 = 1.10 V$ via $KE = eV_0$. Step 4: Sum $5.10 V$ adds instead of subtracting the work function.'
      },
      {
        q: 'Doubling light intensity at fixed frequency above threshold changes?',
        options: ['Kinetic energy doubles', 'Threshold frequency halves', 'Stopping potential doubles', 'Photoelectron count doubles, energy unchanged'], answer: 3,
        explanation: 'Step 1: Photon energy $h\\nu$ is fixed by frequency. Step 2: Intensity counts photons per second. Step 3: Hence more electrons at same $KE = h\\nu - h\\nu_0$. Step 4: Energy and $V_0$ shift only when frequency shifts.'
      },
      {
        q: 'Electron accelerated by $100 V$ has wavelength?',
        options: ['$1.23$ angstrom', '$12.27$ angstrom', '$0.123$ angstrom', '$123$ angstrom'], answer: 0,
        explanation: 'Step 1: Rule $\\lambda = 12.27/\\sqrt{V}$ angstrom. Step 2: Root $\\sqrt{100} = 10$. Step 3: Ratio $12.27/10 = 1.227$ angstrom. Step 4: Value $12.27$ forgets division by the root.'
      },
      {
        q: 'A $0.10 kg$ ball at $10 m/s$ has $\\lambda = h/mv$. What is its scale?',
        options: [`$6.6 \\times 10^{-10} m$`, `$6.6 \\times 10^{-24} m$`, `$6.6 \\times 10^{-34} m$`, `$6.6 \\times 10^{-7} m$`], answer: 2,
        explanation: 'Step 1: Momentum $p = 0.10 \\times 10 = 1.0 kg m/s$. Step 2: Ratio $6.626 \\times 10^{-34}/1.0$. Step 3: Result $6.6 \\times 10^{-34} m$, far below atomic size. Step 4: Atomic-scale options wrongly use electron mass.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.3
  {
    sectionId: 'chem-ch2-s3',
    readingTime: 8,
    intro: 'Four quantum numbers label every electron, and their allowed ranges explain the shape of the periodic table. This section defines n, l, m and s and links them to radial and angular nodes. Node counting turns abstract orbital Shakespeare into a fast visual check.',
    objectives: [
      'Assign valid quantum-number sets and reject forbidden combinations',
      'Count radial, angular and total nodes for any orbital',
      'Sketch s, p and d shapes from angular quantum number'
    ],
    concepts: [
      {
        term: 'Principal and azimuthal numbers',
        kind: 'definition',
        statement: 'The **principal number** `n` sets size and energy shell with $n = 1, 2, 3, ...$ while azimuthal `l` sets subshell shape with $l = 0$ to $n-1$. Code $l = 0, 1, 2, 3$ as $s, p, d, f$.',
        detail: 'Energy in hydrogen depends only on $n$ as $E_n = -13.6/n^2 eV$, but in many-electron atoms $l$ splits each shell. For $n = 3$ allowed $l$ values are $0$, $1$ and $2$ only.'
      },
      {
        term: 'Magnetic and spin numbers',
        kind: 'definition',
        statement: 'The **magnetic number** `m` orients the orbital with $m = -l, ..., +l$ giving $2l+1$ orbitals, while spin `s` is $+1/2$ or $-1/2$. A set $(n, l, m, s)$ labels one electron state.',
        detail: 'For $l = 2$ the five $m$ values $-2, -1, 0, +1, +2$ give five $d$ orbitals. Spin does not affect shape but doubles capacity to two electrons per orbital.'
      },
      {
        term: 'Node counting rules',
        kind: 'theorem',
        statement: 'Nodes are surfaces of **zero probability**, with `radial nodes` $= n-l-1$ and angular nodes $= l$. Total nodes equal $n-1$ by $n-l-1 + l$.',
        detail: 'Examples: $3s$ has $2$ radial and $0$ angular, $3p$ has $1$ and $1$, $3d$ has $0$ and $2$, all totalling $2$. Trap: $2d$ and $3f$ style labels with $l$ greater than or equal to $n$ cannot exist.'
      },
      {
        term: 'Orbital shapes from l',
        kind: 'insight',
        statement: 'Shape follows **angular nodes**: `s` with $l = 0$ is spherical, $p$ with $l = 1$ is dumbbell with one nodal plane, $d$ with $l = 2$ is clover with two nodal planes.',
        detail: 'Radial nodes are concentric spheres where the radial function crosses zero. Number of peaks in radial distribution equals radial nodes plus one.'
      },
      {
        term: 'Valid-set sieve',
        kind: 'method',
        statement: 'A set is **valid** only if `l` is below $n$ and `m` lies within $-l$ to $+l$, written as $0 \\leq l \\leq n-1$ and $|m| \\leq l$. Spin must be $+1/2$ or $-1/2$.',
        detail: 'Reject $(2, 2, 0, +1/2)$ since $l = 2$ equals $n$, and reject $(3, 2, +3, +1/2)$ since $|m| = 3$ exceeds $l = 2$. Check $l$ first, then $m$, then spin.'
      }
    ],
    figures: [
      {
        caption: 'Nodes split as radial $n-l-1$ plus angular $l$ with total $n-1$: $s$ is spherical, $p$ is dumbbell with one plane and $d$ is clover with two planes.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Orbital shapes s sphere p dumbbell d clover"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">s, p and d shapes from angular nodes</text><circle cx="120" cy="150" r="55" fill="currentColor" stroke="none" opacity="0.12"/><circle cx="120" cy="150" r="55" fill="none" stroke="currentColor" stroke-width="2"/><text x="85" y="235" font-size="13" fill="currentColor" font-family="sans-serif">s: sphere, l=0</text><text x="70" y="255" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">3s: 2 radial + 0</text><ellipse cx="330" cy="150" rx="30" ry="55" fill="currentColor" stroke="none" opacity="0.15"/><ellipse cx="390" cy="150" rx="30" ry="55" fill="currentColor" stroke="none" opacity="0.15"/><ellipse cx="330" cy="150" rx="30" ry="55" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="390" cy="150" rx="30" ry="55" fill="none" stroke="currentColor" stroke-width="2"/><line x1="360" y1="95" x2="360" y2="205" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="315" y="235" font-size="13" fill="currentColor" font-family="sans-serif">p: dumbbell, 1 plane</text><text x="315" y="255" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">3p: 1 radial + 1</text><ellipse cx="540" cy="125" rx="45" ry="20" fill="currentColor" stroke="none" opacity="0.15"/><ellipse cx="540" cy="175" rx="45" ry="20" fill="currentColor" stroke="none" opacity="0.15"/><ellipse cx="515" cy="150" rx="20" ry="45" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="565" cy="150" rx="20" ry="45" fill="none" stroke="currentColor" stroke-width="2"/><line x1="490" y1="100" x2="590" y2="200" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="590" y1="100" x2="490" y2="200" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="505" y="235" font-size="13" fill="currentColor" font-family="sans-serif">d: clover, 2 planes</text><text x="505" y="255" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">3d: 0 radial + 2</text><text x="40" y="300" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">2d and 3f labels impossible since l must stay below n</text><text x="40" y="325" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">peaks in radial plot = radial nodes + 1</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Node audit of 4d orbital',
        problem: 'For a $4d$ orbital give n, l, radial nodes, angular nodes and total nodes.',
        steps: [
          { label: 'Step 1', text: 'Read $4d$ as $n = 4$ and $l = 2$. Apply radial $n-l-1 = 4-2-1 = 1$ and angular $l = 2$.' },
          { label: 'Step 2', text: 'Tabulate the count:\n```txt\nn = 4, l = 2 (d)\nradial = 4-2-1 = 1\nangular = 2\ntotal = 1+2 = 3 = n-1\n```' },
          { label: 'Step 3', text: 'Total $1 + 2 = 3$ equals $n-1 = 3$, confirming the split. Shape is clover with two angular planes plus one radial sphere.' }
        ],
        result: '4d has 1 radial node, 2 angular nodes and 3 total nodes.'
      },
      {
        title: 'Sifting quantum sets',
        problem: 'Which set is allowed: A $(3, 2, -2, +1/2)$, B $(2, 2, 0, +1/2)$, C $(3, 1, +2, -1/2)$?',
        steps: [
          { label: 'Step 1', text: 'Test A: $n = 3$, $l = 2$ satisfies $l < n$, and $|m| = 2$ meets $|m| \\leq 2$. Spin is valid, so A passes.' },
          { label: 'Step 2', text: 'Test each remainder:\n```txt\nA (3,2,-2,+1/2): l<n ok, |m|<=l ok -> allowed\nB (2,2,0,+1/2): l=2 not < 2 -> rejected\nC (3,1,+2,-1/2): |m|=2 > l=1 -> rejected\n```' },
          { label: 'Step 3', text: 'B fails since $l = n$ and C fails since $|m|$ exceeds $l$. Only A names a real $3d$ electron state.' }
        ],
        result: 'Only set A is allowed; B and C violate l and m bounds.'
      }
    ],
    keyTakeaways: [
      'Ranges are 1,2,3 for n, 0 to n-1 for l and minus l to plus l for m.',
      'Radial nodes equal n-l-1 and angular nodes equal l with total n-1.',
      's, p, d, f correspond to l = 0,1,2,3 with 1,3,5,7 orientations.',
      'Labels with l at or above n, like 2d, have no physical orbital.'
    ],
    quiz: [
      // PYQ-pattern: node count for named orbital
      {
        q: 'How many radial and angular nodes does $3p$ have?',
        options: ['$1$ radial, $1$ angular', '$2$ radial, $0$ angular', '$0$ radial, $2$ angular', '$1$ radial, $2$ angular'], answer: 0,
        explanation: 'Step 1: Read $n = 3$, $l = 1$. Step 2: Radial $= 3-1-1 = 1$. Step 3: Angular $= l = 1$. Step 4: Total $1 + 1 = 2 = n-1$ confirms the split.'
      },
      {
        q: 'Which quantum set is forbidden?',
        options: [`$(3, 2, -2, +1/2)$`, `$(4, 1, 0, -1/2)$`, `$(2, 2, 0, +1/2)$`, `$(3, 0, 0, +1/2)$`], answer: 2,
        explanation: 'Step 1: Rule $l \\leq n-1$. Step 2: Option three has $n = 2$, $l = 2$, violating $2 \\leq 1$. Step 3: Others satisfy $|m| \\leq l$ with valid spin. Step 4: Hence only the third set names no orbital.'
      },
      {
        q: 'How many orbitals sit in subshell $l = 3$?',
        options: [`$3$`, `$7$`, `$5$`, `$9$`], answer: 1,
        explanation: 'Step 1: Count $= 2l+1$. Step 2: Insert $2 \\times 3 + 1 = 7$. Step 3: These are the seven $f$ orientations $m = -3$ to $+3$. Step 4: Count $5$ belongs to $d$ with $l = 2$.'
      },
      {
        q: 'Total nodes of $4s$ equal?',
        options: [`$1$`, `$2$`, `$4$`, `$3$`], answer: 3,
        explanation: 'Step 1: Total $= n-1$. Step 2: Insert $4 - 1 = 3$. Step 3: Split is $3$ radial and $0$ angular since $l = 0$. Step 4: Value $4$ counts $n$ instead of $n-1$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.4
  {
    sectionId: 'chem-ch2-s4',
    readingTime: 7,
    intro: 'Filling order decides magnetic behaviour, ion sizes and much of periodic trends. This section states Aufbau, Pauli and Hund rules and explains why chromium and copper break the expected pattern. Box diagrams and noble-gas shorthand turn long configurations into compact codes.',
    objectives: [
      'Write ground configurations using Aufbau order and noble-gas shorthand',
      'Apply Pauli and Hund rules to box diagrams and magnetic moments',
      'Explain half-filled and fully filled stability exceptions'
    ],
    concepts: [
      {
        term: 'Aufbau filling order',
        kind: 'law',
        statement: 'The **Aufbau order** fills by rising `n+l` energy: $1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p$ and onward. Lower $n+l$ fills first, with lower $n$ breaking ties.',
        detail: 'Hence $4s$ with $n+l = 4$ fills before $3d$ with $n+l = 5$. Order is a guide for neutral atoms; ions lose $ns$ electrons before $(n-1)d$ on ionization.'
      },
      {
        term: 'Pauli exclusion',
        kind: 'law',
        statement: 'The **Pauli rule** allows at most `two electrons` per orbital with opposite spins, so no two electrons share all four quantum numbers. Capacity of a shell is $2n^2$ with $n^2$ orbitals.',
        detail: 'Consequence: $s$ holds $2$, $p$ holds $6$, $d$ holds $10$ and $f$ holds $14$. Third electron in helium $1s$ has nowhere legal to sit without violating spin pairing.'
      },
      {
        term: 'Hund maximum multiplicity',
        kind: 'law',
        statement: 'Within one subshell electrons spread singly with **parallel spins** before pairing, maximizing `multiplicity`. Nitrogen $2p^3$ has three unpaired electrons, oxygen $2p^4$ has two.',
        detail: 'Parallel layout cuts electron repulsion through exchange stabilization. Pairing starts only when each orientation already holds one electron.'
      },
      {
        term: 'Half and full shell exceptions',
        kind: 'insight',
        statement: 'Half-filled and fully filled subshells gain **exchange stability**, so `Cr` is $[Ar] 3d^5 4s^1$ not $3d^4 4s^2$ and `Cu` is $[Ar] 3d^{10} 4s^1$ not $3d^9 4s^2$. One $s$ electron shifts to complete the $d$ set.',
        detail: 'Same logic gives $Mo$ as $4d^5 5s^1$ and $Ag$ as $4d^{10} 5s^1$. The shift pays because symmetric $d^5$ and $d^{10}$ exchange energy outweighs the $s$-to-$d$ promotion cost.'
      },
      {
        term: 'Spin-only magnetic moment',
        kind: 'theorem',
        statement: 'Unpaired count $n$ gives **spin moment** $\\mu = \\sqrt{n(n+2)} BM$ in `Bohr magnetons`. High-spin $d^5$ gives $\\sqrt{35} = 5.92 BM$ while $d^3$ gives $\\sqrt{15} = 3.87 BM$.',
        detail: 'Zero unpaired means diamagnetic, nonzero means paramagnetic with attraction scaling in $n$. Trap: use unpaired electrons after pairing per Hund, not total $d$ electrons.'
      }
    ],
    figures: [
      {
        caption: 'Filling follows $n+l$ order with $4s$ before $3d$: $Fe$ is $[Ar]4s^2 3d^6$ with $4$ unpaired and $\mu = \sqrt{24} = 4.90$ BM while $Cr$ shifts to $3d^5 4s^1$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aufbau box diagram for iron configuration"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">Aufbau boxes: Fe with four unpaired d electrons</text><text x="40" y="80" font-size="12" fill="currentColor" font-family="sans-serif">1s</text><rect x="80" y="60" width="60" height="28" fill="none" stroke="currentColor" stroke-width="2"/><line x1="95" y1="82" x2="95" y2="66" stroke="currentColor" stroke-width="2"/><polygon points="95,62 91,70 99,70" fill="currentColor" stroke="none"/><line x1="115" y1="66" x2="115" y2="82" stroke="currentColor" stroke-width="2"/><polygon points="115,86 111,78 119,78" fill="currentColor" stroke="none"/><text x="160" y="80" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">2s 2p: full</text><text x="40" y="120" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">3s 3p: full</text><text x="40" y="155" font-size="12" fill="currentColor" font-family="sans-serif">4s</text><rect x="80" y="135" width="60" height="28" fill="none" stroke="currentColor" stroke-width="2"/><line x1="95" y1="157" x2="95" y2="141" stroke="currentColor" stroke-width="2"/><polygon points="95,137 91,145 99,145" fill="currentColor" stroke="none"/><line x1="115" y1="141" x2="115" y2="157" stroke="currentColor" stroke-width="2"/><polygon points="115,161 111,153 119,153" fill="currentColor" stroke="none"/><text x="40" y="200" font-size="12" fill="currentColor" font-family="sans-serif">3d</text><rect x="80" y="185" width="40" height="28" fill="none" stroke="currentColor" stroke-width="2"/><rect x="125" y="185" width="40" height="28" fill="none" stroke="currentColor" stroke-width="2"/><rect x="170" y="185" width="40" height="28" fill="none" stroke="currentColor" stroke-width="2"/><rect x="215" y="185" width="40" height="28" fill="none" stroke="currentColor" stroke-width="2"/><rect x="260" y="185" width="40" height="28" fill="none" stroke="currentColor" stroke-width="2"/><text x="80" y="232" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">paired + 4 single: Hund first</text><rect x="400" y="60" width="280" height="150" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="415" y="85" font-size="12" fill="currentColor" font-family="sans-serif">order: 1s 2s 2p 3s 3p 4s 3d 4p</text><text x="415" y="110" font-size="12" fill="currentColor" font-family="sans-serif">Cr [Ar] 3d5 4s1, Cu 3d10 4s1</text><text x="415" y="135" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">half and full shell bonus</text><text x="415" y="160" font-size="12" fill="currentColor" font-family="sans-serif">mu = sqrt(n(n+2)) BM</text><text x="415" y="185" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">pair only after single spread</text><text x="40" y="270" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">ions lose ns before (n-1)d; spin decides paramagnetism</text><text x="40" y="300" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">s 2, p 6, d 10, f 14 by Pauli two per orbital</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Configuration and moment of iron',
        problem: 'Write the ground configuration of $Fe$ ($Z = 26$) and find its unpaired count and spin moment.',
        steps: [
          { label: 'Step 1', text: 'Count to $26$: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$, shorthand $[Ar] 4s^2 3d^6$. Five $d$ orientations get one electron each, sixth pairs one.' },
          { label: 'Step 2', text: 'Count unpaired and moment:\n```txt\nFe: [Ar] 4s2 3d6\n3d boxes: up/down, up, up, up, up -> 4 unpaired\nmu = sqrt(4x6) = sqrt(24) = 4.90 BM\n```' },
          { label: 'Step 3', text: 'Unpaired $n = 4$ gives $\\mu = \\sqrt{4(4+2)} = \\sqrt{24} = 4.90 BM$. Iron is paramagnetic with four parallel excess spins.' }
        ],
        result: 'Fe is [Ar] 4s2 3d6 with 4 unpaired electrons and moment 4.90 BM.'
      },
      {
        title: 'Chromium exception logic',
        problem: 'Why is chromium $[Ar] 3d^5 4s^1$ rather than $[Ar] 3d^4 4s^2$?',
        steps: [
          { label: 'Step 1', text: 'Expected $3d^4 4s^2$ has four unpaired $d$ electrons and a full $s$ pair. Shifting one $4s$ electron gives $3d^5 4s^1$ with six unpaired electrons total.' },
          { label: 'Step 2', text: 'Compare stability ledgers:\n```txt\nexpected: 3d4 (4 unpaired) + 4s2 (0) = 4 unpaired\nactual: 3d5 (5 unpaired) + 4s1 (1) = 6 unpaired\nmore parallel pairs -> more exchange stabilization\n```' },
          { label: 'Step 3', text: 'Half-filled $d^5$ symmetry plus extra parallel spins outweighs promotion energy, so $3d^5 4s^1$ is the ground state. Copper repeats the logic to reach $d^{10}$.' }
        ],
        result: 'Chromium shifts one s electron to gain half-filled d5 stability.'
      }
    ],
    keyTakeaways: [
      'Fill by n+l order with 4s before 3d and 5s before 4d.',
      'One orbital holds two opposite-spin electrons at most.',
      'Spread singly with parallel spins before pairing within a subshell.',
      'Cr and Cu shift one s electron to reach d5 and d10 symmetry.'
    ],
    quiz: [
      // PYQ-pattern: configuration plus spin moment count
      {
        q: 'Ground configuration of $Fe$ ($Z = 26$) is?',
        options: [`$[Ar] 4s^2 3d^4 4p^2$`, `$[Ar] 4s^1 3d^7$`, `$[Ar] 3d^8$`, `$[Ar] 4s^2 3d^6$`], answer: 3,
        explanation: 'Step 1: Count $18$ for $[Ar]$ leaving $8$ electrons. Step 2: Fill $4s^2$ then $3d^6$ by Aufbau. Step 3: Total $2 + 6 = 8$ matches $26 - 18$. Step 4: Option two is an excited shuffle, not the ground layout.'
      },
      {
        q: 'How many unpaired electrons sit in ground nitrogen $1s^2 2s^2 2p^3$?',
        options: [`$1$`, `$3$`, `$2$`, `$5$`], answer: 1,
        explanation: 'Step 1: Three $p$ orientations each take one electron by Hund. Step 2: Spins stay parallel with none paired. Step 3: Count $= 3$ unpaired. Step 4: Count $1$ would pair two electrons prematurely.'
      },
      {
        q: 'Why is copper $[Ar] 3d^{10} 4s^1$?',
        options: ['To keep $4s$ empty for bonding', 'Pauli forbids $3d^9 4s^2$', 'Fully filled $d^{10}$ exchange stability outweighs promotion cost', 'Hund forbids pairing in $4s$'], answer: 2,
        explanation: 'Step 1: Expected $3d^9 4s^2$ is allowed by Pauli and Hund. Step 2: Shifted form reaches symmetric $d^{10}$ plus one $s$. Step 3: Extra exchange stabilization exceeds the $4s$ to $3d$ gap. Step 4: Pauli and Hund permit both layouts but energetics picks $d^{10}$.'
      },
      {
        q: 'Spin-only moment for $3$ unpaired electrons equals?',
        options: [`$3.87 BM$`, `$3.00 BM$`, `$5.92 BM$`, `$1.73 BM$`], answer: 0,
        explanation: 'Step 1: Use $\\mu = \\sqrt{n(n+2)}$. Step 2: Insert $\\sqrt{3 \\times 5} = \\sqrt{15}$. Step 3: Root $= 3.87 BM$. Step 4: Value $5.92 BM$ belongs to $n = 5$.'
      }
    ]
  }
]
