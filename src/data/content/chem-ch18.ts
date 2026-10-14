import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 18: Spectroscopy (Atkins Foci 11-12)
// Sections 18.1 - 18.4. Master study content in Atkins language.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh18Content: SectionContent[] = [
  // ---------------------------------------------------------------- 18.1
  {
    sectionId: 'chem-ch18-s1',
    readingTime: 10,
    intro: 'Rotation reports bond lengths through moments of inertia while vibration reports stiffness through force constants, and each has its own gross and specific selection rules. Anharmonicity and centrifugal distortion then bend the ideal ladders in predictable ways. This section reads both spectra the way Atkins Topics 11B through 11D teach them.',
    objectives: [
      'Predict rotational line spacing and extract bond lengths from the B constant',
      'Assign fundamental, overtone and hot bands from anharmonic progressions',
      'Read P, Q and R branch structure from simultaneous rotation changes'
    ],
    concepts: [
      {
        term: 'Rigid-rotor ladder and bond lengths',
        kind: 'theorem',
        statement: 'The rotor **term ladder** `BJ` is $\\tilde{F}(J) = \\tilde{B}J(J+1)$ with $\\tilde{B} = \\hbar /(4\\pi cI)$ and $I = \\mu R^{2}$, so lines space by $2\\tilde{B}$ and $\\tilde{B}$ inverts to bond length $R$.',
        detail: 'Isotopic substitution shifts $\\tilde{B}$ through $\\mu$ alone, giving clean structural pairs. Centrifugal distortion $-\\tilde{D}J^{2}(J+1)^{2}$ droops high-$J$ lines slightly.'
      },
      {
        term: 'Rotational selection rules',
        kind: 'law',
        statement: 'Pure rotation needs a **polar rotor** `polar` for microwave activity with $\\Delta J = \\pm 1$ and $\\Delta M_{J} = 0, \\pm 1$, plus $\\Delta K = 0$ for symmetric tops, while Raman rotation needs anisotropic polarizability with $\\Delta J = 0, \\pm 2$.',
        detail: 'Homopolar $H_{2}$ and $CO_{2}$ are microwave-silent but Raman-active. Nuclear-spin statistics wipe alternate lines in $CO_{2}$ and $H_{2}$ families.'
      },
      {
        term: 'Vibrational fundamentals and overtones',
        kind: 'law',
        statement: 'Infrared activity needs $d\\mu/dR \\neq 0$ with harmonic rule **$\\Delta v$** `delta-v` of $\\Delta v = \\pm 1$, so $v = 1 \\gets 0$ fundamentals dominate while anharmonicity unlocks weak $2 \\gets 0$ and $3 \\gets 0$ overtones.',
        detail: 'Morse curves converge levels toward dissociation, and Birge-Sponer extrapolation of overtone gaps measures $D_{0}$. Raman vibration instead needs $d\\alpha/dR \\neq 0$ with the same $\\Delta v$ rule.'
      },
      {
        term: 'Hot bands and population thermometry',
        kind: 'insight',
        statement: 'Transitions from **hot levels** `hot bands` like $v = 2 \\to 1$ sit slightly red of fundamentals by anharmonicity and grow with $e^{-hc\\tilde{\\nu} /kT}$, so their intensity ratio reads the vibrational temperature.',
        detail: 'Room-temperature $HCl$ shows faint hot structure beside the strong fundamental. Stiff high-frequency modes freeze their hot bands out almost completely.'
      },
      {
        term: 'Rotation-vibration branch structure',
        kind: 'notation',
        statement: 'Gas-phase bands split into **P, Q, R branches** `branches` by simultaneous $\\Delta J = -1, 0, +1$, with $Q$ missing for $\\Sigma$-$\\Sigma$ diatomics and the $R$ head turning over in heavy hydrides.',
        detail: 'Line spacing near $2\\tilde{B}$ on both sides of the gap maps $B$ in both states. Stokes and anti-Stokes Raman branches carry the parallel $O$, $Q$, $S$ naming.'
      }
    ],
    figures: [
      {
        caption: 'Rigid-rotor stick spectrum: lines at $2\\tilde{B}, 4\\tilde{B}, 6\\tilde{B}$ from $\\Delta J = +1$ jumps between $\\tilde{B}J(J+1)$ rungs.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rotational energy rungs with equally spaced spectral lines"><line x1="90" y1="300" x2="90" y2="60" stroke="currentColor" stroke-width="2"/><text x="60" y="50" font-size="15" fill="currentColor">E</text><line x1="90" y1="280" x2="220" y2="280" stroke="currentColor" stroke-width="3"/><text x="230" y="284" font-size="13" fill="currentColor">J=0</text><line x1="90" y1="240" x2="220" y2="240" stroke="currentColor" stroke-width="3"/><text x="230" y="244" font-size="13" fill="currentColor">J=1</text><line x1="90" y1="190" x2="220" y2="190" stroke="currentColor" stroke-width="3"/><text x="230" y="194" font-size="13" fill="currentColor">J=2</text><line x1="90" y1="130" x2="220" y2="130" stroke="currentColor" stroke-width="3"/><text x="230" y="134" font-size="13" fill="currentColor">J=3</text><line x1="330" y1="300" x2="650" y2="300" stroke="currentColor" stroke-width="2"/><line x1="380" y1="300" x2="380" y2="180" stroke="currentColor" stroke-width="3"/><text x="372" y="320" font-size="13" fill="currentColor">2B</text><line x1="470" y1="300" x2="470" y2="150" stroke="currentColor" stroke-width="3"/><text x="462" y="320" font-size="13" fill="currentColor">4B</text><line x1="560" y1="300" x2="560" y2="130" stroke="currentColor" stroke-width="3"/><text x="552" y="320" font-size="13" fill="currentColor">6B</text><path d="M200,240 C260,230 320,210 380,185" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><path d="M200,190 C270,180 380,160 470,155" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><text x="270" y="90" font-size="13" fill="currentColor">delta-J = +1 jumps</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Bond length of carbon monoxide from B',
        problem: 'The $J = 0 \\to 1$ microwave line of $^{12}C^{16}O$ lies at $3.845$ cm$^{-1}$. Find $\\tilde{B}$ and the bond length.',
        steps: [
          { label: 'Step 1', text: 'Halve the first line since $\\tilde{\\nu} = 2\\tilde{B}(J+1)$ with $J = 0$:\n```text\nB-tilde = 3.845 / 2 = 1.9225 cm-1\nI = hbar / (4 pi c B-tilde)\nR = sqrt(I / mu)\n```\nSpacing $2\\tilde{B}$ is the ruler.' },
          { label: 'Step 2', text: 'Convert $\\tilde{B} = 192.25$ m$^{-1}$ to $I = \\hbar /(4\\pi c\\tilde{B}) \\approx 1.456 \\times 10^{-46}$ kg m$^{2}$.' },
          { label: 'Step 3', text: 'Insert $\\mu = 1.139 \\times 10^{-26}$ kg: $R = (I /\\mu)^{1/2} \\approx 1.131 \\times 10^{-10}$ m, the $113.1$ pm bond.' }
        ],
        result: '$\\tilde{B} = 1.923$ cm$^{-1}$ giving $R \\approx 113$ pm for $CO$.'
      },
      {
        title: 'Fundamental versus overtone assignment',
        problem: 'Bands appear at $2886$, $5668$ and $8347$ cm$^{-1}$ in an $HCl$-like spectrum. Assign them.',
        steps: [
          { label: 'Step 1', text: 'Test harmonic doubling: $2 \\times 2886 = 5772$, but the observed $5668$ falls short by $104$ cm$^{-1}$, the anharmonic deficit.' },
          { label: 'Step 2', text: 'Assign $2886$ fundamental, $5668$ first overtone $2 \\gets 0$, $8347$ second overtone $3 \\gets 0$ with growing deficits.' },
          { label: 'Step 3', text: 'Extrapolate the shrinking gaps by Birge-Sponer toward zero to estimate dissociation.' }
        ],
        result: 'Fundamental plus two anharmonic overtones with converging gaps.'
      }
    ],
    keyTakeaways: [
      '$\\tilde{F}(J) = \\tilde{B}J(J+1)$ spaces microwave lines by $2\\tilde{B}$ and inverts to $R$.',
      'Microwave needs polarity with $\\Delta J = \\pm 1$; Raman rotation needs anisotropy with $\\Delta J = 0, \\pm 2$.',
      'Infrared needs $d\\mu/dR \\neq 0$; overtones mark anharmonicity.',
      'P, Q, R branches track simultaneous $\\Delta J = -1, 0, +1$.'
    ],
    quiz: [
      {
        q: 'First three microwave lines of a rigid rotor sit at:',
        options: ['$\\tilde{B}, 2\\tilde{B}, 3\\tilde{B}$', '$2\\tilde{B}, 4\\tilde{B}, 6\\tilde{B}$', '$\\tilde{B}, 3\\tilde{B}, 5\\tilde{B}$', 'Equal wavenumbers'],
        answer: 1,
        explanation: 'Step 1: Write $\\tilde{\\nu} = 2\\tilde{B}(J+1)$. Step 2: Insert $J = 0, 1, 2$. Step 3: Read $2$, $4$, $6$ times $\\tilde{B}$.'
      },
      // PYQ-pattern: bond length from B drill
      {
        q: 'If $\\tilde{B}$ halves on isotopic substitution, the bond length:',
        options: ['Grows by $\\sqrt{2}$ at fixed geometry rules via $I$', 'Stays identical always', 'Doubles exactly', 'Halves'],
        answer: 0,
        explanation: 'Step 1: Write $I \\propto 1/\\tilde{B}$. Step 2: Double $I$ for halved $\\tilde{B}$. Step 3: Take $R = (I /\\mu)^{1/2}$ with heavier $\\mu$; geometry nearly fixed so $I$ tracks $\\mu$.'
      },
      {
        q: '$N_{2}$ shows no pure rotational microwave spectrum because:',
        options: ['Its bond is too short', 'Nitrogen is inert', 'It rotates too fast', 'It has no permanent dipole'],
        answer: 3,
        explanation: 'Step 1: State the gross rule of polarity. Step 2: Note homonuclear symmetry kills the dipole. Step 3: Allow only Raman rotation instead.'
      },
      {
        q: 'Overtone $2 \\gets 0$ appears through:',
        options: ['Relativistic mass gain', 'Harmonic perfection', 'Anharmonicity relaxing $\\Delta v = \\pm 1$', 'Field ionization'],
        answer: 2,
        explanation: 'Step 1: Recall the harmonic rule admits only unit jumps. Step 2: Add Morse anharmonic mixing. Step 3: Open weak $\\Delta v = \\pm 2$ intensity.'
      }
    ]
  },
  // ---------------------------------------------------------------- 18.2
  {
    sectionId: 'chem-ch18-s2',
    readingTime: 9,
    intro: 'Electronic excitation rearranges electrons faster than nuclei can follow, so absorption strikes vertically on the nuclear framework. The overlap of vibrational wavefunctions then sculpts band progressions, and symmetry plus spin filter which jumps survive. This section applies the Franck-Condon picture exactly as Atkins Topic 11F presents it.',
    objectives: [
      'Draw vertical transitions on displaced potentials and locate the intensity maximum',
      'Assign vibronic progressions and dissociation limits from band convergence',
      'Filter electronic jumps by orbital, spin and Laporte rules'
    ],
    concepts: [
      {
        term: 'Vertical transitions and Franck-Condon weights',
        kind: 'law',
        statement: 'The **Franck-Condon principle** `vertical` freezes nuclei during the jump, weighting each $v^{\\prime} \\gets v$ line by $|\\int \\psi_{v^{\\prime}}^{*} \\psi_{v} d\\tau|^{2}$, maximal where the upper wavefunction peaks above the lower maximum.',
        detail: 'Displaced excited wells push maxima toward high $v^{\\prime}$, stretching long progressions; nested wells pile intensity into $0 \\gets 0$. Nodal patterns imprint directly on band envelopes.'
      },
      {
        term: 'Vibronic progressions and dissociation caps',
        kind: 'method',
        statement: 'Band spacings track the **upper-state vibration** `progression`, converging to the dissociation limit where the progression crowds and continuum absorption begins.',
        detail: 'Extrapolating convergence gives the excited-state dissociation energy, as in $H_{2}$ Lyman bands. Rotational fine structure may overlay each vibronic member in gas samples.'
      },
      {
        term: 'Linear-molecule and Laporte filters',
        kind: 'law',
        statement: 'Electronic **selection rules** `selection` require $\\Delta\\Lambda = 0, \\pm 1$ with $\\Delta S = 0$, $\\Delta\\Sigma = 0$, $\\Delta\\Omega = 0, \\pm 1$, plus $u \\leftrightarrow g$ only where a centre exists.',
        detail: 'Strong $\\pi \\to \\pi^{*}$ bands pass all filters while $n \\to \\pi^{*}$ gains weakness from poor overlap. Singlet-triplet absorption borrows faint spin-orbit intensity.'
      },
      {
        term: 'd-d and charge-transfer bands',
        kind: 'definition',
        statement: 'Ligand fields split **d orbitals** `d-d` so Laporte-forbidden $d \\to d$ bands appear weakly by vibronic rescue, whereas ligand-to-metal or metal-to-ligand **charge-transfer** `CT` jumps are fully allowed and intense.',
        detail: 'Permanganate purple is charge-transfer intensity, while pale aqua complexes show rescued $d$-$d$ weakness. $\\Delta_{o}$ reads straight from the $d$-$d$ maximum.'
      },
      {
        term: 'Chromophores and intensity language',
        kind: 'insight',
        statement: 'A **chromophore** `chromophore` is the absorbing group with its characteristic band, and molar absorptivity separates spin-allowed $\\pi \\to \\pi^{*}$ thousands from spin-forbidden singlets near zero.',
        detail: 'Conjugation red-shifts $\\pi \\to \\pi^{*}$ systematically as the box lengthens. Solvatochromic shifts then report dipole change on excitation.'
      }
    ],
    figures: [
      {
        caption: 'Vertical excitation: absorption rises from the ground-state maximum to the upper vibrational level with best overlap, peaking mid-progression for displaced wells.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Franck Condon diagram with vertical arrow between displaced potential wells"><path d="M90,300 C150,300 170,200 230,200 C290,200 310,300 370,300" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="220" y="330" font-size="13" fill="currentColor">ground well</text><path d="M350,220 C410,220 430,120 490,120 C550,120 570,220 630,220" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="480" y="250" font-size="13" fill="currentColor">excited well</text><line x1="230" y1="255" x2="460" y2="255" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><line x1="230" y1="225" x2="490" y2="225" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><line x1="230" y1="265" x2="230" y2="160" stroke="currentColor" stroke-width="3"/><polygon points="230,160 224,172 236,172" fill="currentColor"/><text x="245" y="210" font-size="13" fill="currentColor">vertical jump</text><rect x="440" y="270" width="220" height="40" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="550" y="295" text-anchor="middle" font-size="13" fill="currentColor">best overlap: mid v-prime</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Locating the vertical maximum',
        problem: 'An excited well is displaced so overlap peaks at $v^{\\prime} = 3$. Sketch the expected band envelope for absorption from $v = 0$.',
        steps: [
          { label: 'Step 1', text: 'Draw both wells with the upper minimum shifted right:\n```text\nv=0 peak sits over upper v-prime=3 lobe\n0<-0 weak, rising to 3<-0 max, fading after\n```\nVertical projection lands on the displaced lobe.' },
          { label: 'Step 2', text: 'Weight members by squared overlaps: rising $0$ through $3$, falling beyond as oscillations mismatch.' },
          { label: 'Step 3', text: 'Contrast the nested-well case where $0 \\gets 0$ dominates and the progression dies fast.' }
        ],
        result: 'Envelope rises to $3 \\gets 0$ maximum then fades, the displaced-well signature.'
      },
      {
        title: 'Classifying three band types',
        problem: 'Label intense $210$ nm, weak $280$ nm and faint $340$ nm bands of a carbonyl compound.',
        steps: [
          { label: 'Step 1', text: 'Assign intense short-wave to allowed $\\pi \\to \\pi^{*}$ with big overlap and full selection pass.' },
          { label: 'Step 2', text: 'Assign weak $280$ nm to $n \\to \\pi^{*}$, symmetry-allowed but overlap-poor.' },
          { label: 'Step 3', text: 'Assign faintest to singlet-triplet borrowing through spin-orbit mixing.' }
        ],
        result: '$\\pi \\to \\pi^{*}$ strong, $n \\to \\pi^{*}$ weak, singlet-triplet faintest.'
      }
    ],
    keyTakeaways: [
      'Nuclei freeze during jumps; $|overlap|^{2}$ picks the brightest $v^{\\prime} \\gets v$.',
      'Progressions converge to excited-state dissociation limits.',
      '$\\Delta\\Lambda = 0, \\pm 1$, $\\Delta S = 0$ and $u \\leftrightarrow g$ filter bands.',
      '$d$-$d$ weakness versus charge-transfer strength diagnoses band type.'
    ],
    quiz: [
      {
        q: 'Franck-Condon maximum for a strongly displaced well sits at:',
        options: ['$0 \\gets 0$ always', 'High $v^{\\prime}$ with best vertical overlap', 'The dissociation continuum only', 'Negative $v^{\\prime}$'],
        answer: 1,
        explanation: 'Step 1: Project the ground maximum vertically. Step 2: Land on an excited lobe mid-ladder. Step 3: Weight that member brightest.'
      },
      // PYQ-pattern: band-type diagnosis drill
      {
        q: 'Permanganate is intensely purple because its visible band is:',
        options: ['Allowed ligand-to-metal charge transfer', 'Singlet-triplet absorption', 'Pure rotational overtone', 'Laporte-forbidden $d$-$d$'],
        answer: 0,
        explanation: 'Step 1: Note $Mn$ is $d^{0}$, killing $d$-$d$. Step 2: Identify ligand-to-metal electron migration. Step 3: Assign full $u \\leftrightarrow g$ allowed intensity.'
      },
      {
        q: 'Which electronic jump is spin-forbidden?',
        options: ['Doublet to doublet', 'Charge transfer with spin kept', 'Singlet to singlet $\\pi \\to \\pi^{*}$', 'Singlet to triplet absorption'],
        answer: 3,
        explanation: 'Step 1: Apply $\\Delta S = 0$. Step 2: Spot the singlet-triplet change. Step 3: Bar it pending spin-orbit borrowing.'
      },
      {
        q: 'Band convergence at high $v^{\\prime}$ signals:',
        options: ['Sample freezing', 'Better resolution ahead', 'Approach to dissociation and continuum onset', 'Laser failure'],
        answer: 2,
        explanation: 'Step 1: Track shrinking vibronic gaps. Step 2: Extrapolate to zero gap. Step 3: Read the dissociation limit there.'
      }
    ]
  },
  // ---------------------------------------------------------------- 18.3
  {
    sectionId: 'chem-ch18-s3',
    readingTime: 10,
    intro: 'Nuclear magnetic resonance splits spin states in a magnet and reads the electron cloud through chemical shifts and splittings. Shielding moves whole multiplets while neighbour spins carve them into predictable trees. This section works shift scales, the n-plus-one rule and exchange effects as Atkins Topic 12B teaches them.',
    objectives: [
      'Convert between shift, frequency and field using the delta scale',
      'Build first-order multiplets and integration ratios from neighbour counts',
      'Predict exchange broadening, coalescence and decoupling outcomes'
    ],
    concepts: [
      {
        term: 'Chemical shift and shielding scale',
        kind: 'definition',
        statement: 'The **chemical shift** `δ` is $\\delta = 10^{6}(\\nu - \\nu_{ref})/\\nu_{ref}$ in ppm, with shielded nuclei upfield at low $\\delta$ and deshielded nuclei downfield at high $\\delta$.',
        detail: 'TMS at $0$ anchors proton and carbon scales; electron withdrawal, anisotropy cones and ring currents all move $\\delta$. Higher $B_{0}$ spreads hertz separations but leaves ppm fixed.'
      },
      {
        term: 'n-plus-one splitting trees',
        kind: 'law',
        statement: 'Equivalent neighbours give the **multiplicity rule** `n+1` as $n+1$ lines with binomial ratios, so $CH_{3}$ beside $CH_{2}$ is a $1$:$2$:$1$ triplet and the $CH_{2}$ beside $CH_{3}$ is a $1$:$3$:$3$:$1$ quartet.',
        detail: 'Coupling constants $J$ in hertz are field-independent and shared by both partners. Strong coupling where $\\Delta\\nu \\approx J$ roofs the trees toward each other.'
      },
      {
        term: 'Integration and chemical equivalence',
        kind: 'method',
        statement: 'Peak **areas** `integration` count nuclei in each environment, so ethanol shows $3$:$2$:$1$ across $CH_{3}$, $CH_{2}$ and $OH$, with symmetry collapsing equivalent sites to one signal.',
        detail: 'Para-disubstituted rings show the symmetric pair-of-doublets pattern. Accidental overlap may need higher field or shift reagents to resolve.'
      },
      {
        term: 'Exchange and coalescence',
        kind: 'insight',
        statement: 'Migrating nuclei average **exchange-broadened** `exchange` signals that coalesce when the rate passes $k \\approx \\pi\\Delta\\nu /\\sqrt{2}$, as with $OH$ protons lost to moisture or amide rotation freezing into two peaks on cooling.',
        detail: 'Line-shape fitting across temperatures extracts activation parameters for the exchange. $D_{2}O$ shakes remove labile $OH$ and $NH$ signals by deuteration.'
      },
      {
        term: 'Decoupling and carbon-13 practice',
        kind: 'method',
        statement: 'Broadband **decoupling** `decoupling` collapses $^{13}C$-$^{1}H$ splittings to singlets while $^{13}C$ shifts span about $200$ ppm with low natural abundance demanding more scans.',
        detail: 'DEPT editing sorts $CH_{3}$, $CH_{2}$, $CH$ and quaternary carbons by phase. Proton spectra stay quantitative; carbon intensities need care from NOE differences.'
      }
    ],
    figures: [
      {
        caption: 'First-order trees: a $CH_{3}$ triplet ($1$:$2$:$1$) coupled to $CH_{2}$ beside a $CH_{2}$ quartet ($1$:$3$:$3$:$1$) coupled to $CH_{3}$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NMR triplet and quartet splitting trees with intensity ratios"><line x1="60" y1="300" x2="340" y2="300" stroke="currentColor" stroke-width="2"/><line x1="120" y1="300" x2="120" y2="220" stroke="currentColor" stroke-width="3"/><line x1="180" y1="300" x2="180" y2="140" stroke="currentColor" stroke-width="3"/><line x1="240" y1="300" x2="240" y2="220" stroke="currentColor" stroke-width="3"/><text x="180" y="325" text-anchor="middle" font-size="13" fill="currentColor">triplet 1:2:1</text><line x1="400" y1="300" x2="660" y2="300" stroke="currentColor" stroke-width="2"/><line x1="440" y1="300" x2="440" y2="220" stroke="currentColor" stroke-width="3"/><line x1="495" y1="300" x2="495" y2="140" stroke="currentColor" stroke-width="4"/><line x1="550" y1="300" x2="550" y2="140" stroke="currentColor" stroke-width="4"/><line x1="605" y1="300" x2="605" y2="220" stroke="currentColor" stroke-width="3"/><text x="522" y="325" text-anchor="middle" font-size="13" fill="currentColor">quartet 1:3:3:1</text><text x="360" y="80" text-anchor="middle" font-size="14" fill="currentColor">same J shared by partners</text><line x1="240" y1="110" x2="440" y2="110" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><polygon points="440,110 430,105 430,115" fill="currentColor"/></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Ethanol spectrum from structure',
        problem: 'Predict the proton spectrum pattern of $CH_{3}CH_{2}OH$ at low resolution with dry sample.',
        steps: [
          { label: 'Step 1', text: 'Split by neighbours: $CH_{3}$ sees two $CH_{2}$ protons as a triplet; $CH_{2}$ sees three $CH_{3}$ protons as a quartet:\n```text\nCH3: triplet, area 3, upfield\nCH2: quartet, area 2, midfield\nOH: singlet, area 1, variable shift\n```\n$OH$ coupling is quenched by exchange.' },
          { label: 'Step 2', text: 'Order shifts: $CH_{3}$ most shielded upfield, $CH_{2}$ deshielded by oxygen, $OH$ wandering with hydrogen bonding.' },
          { label: 'Step 3', text: 'Check areas $3$:$2$:$1$ sum to six protons, closing the audit.' }
        ],
        result: 'Triplet plus quartet plus singlet with $3$:$2$:$1$ areas.'
      },
      {
        title: 'Reading a coalescence temperature',
        problem: 'Two sites $100$ Hz apart coalesce at some temperature. Estimate the exchange rate there.',
        steps: [
          { label: 'Step 1', text: 'Apply $k_{c} \\approx \\pi\\Delta\\nu /\\sqrt{2}$ with $\\Delta\\nu = 100$ Hz.' },
          { label: 'Step 2', text: 'Evaluate $k_{c} \\approx 222$ s$^{-1}$, the traffic rate that just blurs the pair.' },
          { label: 'Step 3', text: 'Fit full line shapes above and below to extract $\\Delta H^{\\ddagger}$ and $\\Delta S^{\\ddagger}$ of the exchange.' }
        ],
        result: '$k_{c} \\approx 2.2 \\times 10^{2}$ s$^{-1}$ at coalescence.'
      }
    ],
    keyTakeaways: [
      '$\\delta = 10^{6}(\\nu - \\nu_{ref})/\\nu_{ref}$ fixes ppm shifts independent of field.',
      '$n+1$ lines with binomial ratios and shared $J$ mark first-order coupling.',
      'Areas count nuclei; symmetry collapses equivalent sites.',
      'Exchange coalesces near $k \\approx \\pi\\Delta\\nu /\\sqrt{2}$.'
    ],
    quiz: [
      {
        q: 'A proton doublet of area $1$ beside a quartet of area $3$ suggests:',
        options: ['Isolated $CH_{4}$', '$CH$-$CH_{3}$ fragment with mutual coupling', 'Two unrelated singlets', 'A carbon-$13$ satellite'],
        answer: 1,
        explanation: 'Step 1: Match areas to proton counts. Step 2: Pair doublet with one neighbour and quartet with three. Step 3: Join them as one coupled fragment.'
      },
      // PYQ-pattern: shift-direction reasoning drill
      {
        q: 'Electronegative neighbours move proton signals:',
        options: ['Downfield by deshielding', 'Nowhere, shifts ignore substituents', 'Out of the spectrum', 'Upfield by shielding'],
        answer: 0,
        explanation: 'Step 1: Withdraw electrons from around the proton. Step 2: Reduce local shielding currents. Step 3: Shift resonance downfield to higher $\\delta$.'
      },
      {
        q: 'Adding $D_{2}O$ to an alcohol sample removes:',
        options: ['All carbon signals', 'The TMS reference', 'The $CH_{3}$ triplet', 'The labile $OH$ signal by deuterium exchange'],
        answer: 3,
        explanation: 'Step 1: Identify the exchangeable proton. Step 2: Swap $H$ for silent $D$. Step 3: Watch the $OH$ peak vanish.'
      },
      {
        q: 'Proton-decoupled $^{13}C$ spectra show:',
        options: ['Only solvent peaks', 'Quartets for every carbon', 'Singlets per distinct carbon', 'No signals at all'],
        answer: 2,
        explanation: 'Step 1: Irradiate the proton band to average couplings. Step 2: Collapse each carbon multiplet. Step 3: Count one singlet per environment.'
      }
    ]
  },
  // ---------------------------------------------------------------- 18.4
  {
    sectionId: 'chem-ch18-s4',
    readingTime: 8,
    intro: 'Electron paramagnetic resonance watches unpaired electrons the way NMR watches nuclei, but with roughly thousand-fold larger splittings reached with microwaves. The g-value reports the chemical home of the electron while hyperfine lines count magnetic neighbours. This section covers resonance, g-shifts and hyperfine reading as Atkins Topics 12A and 12D teach them.',
    objectives: [
      'Write the resonance condition and compare electron versus nuclear splittings',
      'Read g-values for organic radicals versus transition-metal centres',
      'Count hyperfine lines from equivalent nuclei and extract coupling constants'
    ],
    concepts: [
      {
        term: 'Resonance condition and populations',
        kind: 'definition',
        statement: 'Magnetic **resonance** `resonance` needs $h\\nu = g\\mu_{B}B_{0}$ for electrons (and $h\\nu = \\gamma\\hbar B_{0}$ for nuclei), with tiny Boltzmann excess $N_{\\beta}/N_{\\alpha} \\approx e^{-h\\nu /kT}$ driving absorption.',
        detail: 'Electron splittings at $0.3$ T need gigahertz microwaves while protons need megahertz radio waves. Only about two electrons per thousand carry the excess at room temperature.'
      },
      {
        term: 'g-values as electron addresses',
        kind: 'law',
        statement: 'The free-electron **g-value** `g` is $g_{e} = 2.0023$, with organic radicals staying near it while spin-orbit coupling drags metal centres far away and anisotropically.',
        detail: 'Nitroxide labels report mobility through $g$ and hyperfine averaging. Large $g$ shifts flag heavy-atom or low-symmetry metal sites.'
      },
      {
        term: 'Hyperfine line counting',
        kind: 'theorem',
        statement: 'Equivalent nuclei of spin $I$ split each line into **$2nI+1$ components** `hyperfine`, so one $^{14}N$ ($I = 1$) gives three equal lines and two equivalent protons give a $1$:$2$:$1$ triplet.',
        detail: 'Spacings read the isotropic coupling $a$ in gauss or megahertz. Inequivalent sets multiply trees sequentially, branching every line again.'
      },
      {
        term: 'McConnell relation for pi radicals',
        kind: 'law',
        statement: 'Proton couplings in **pi radicals** `McConnell` follow $a_{H} = Q\\rho$ with $Q \\approx -2.5$ mT, converting each splitting into carbon $2p_{z}$ spin population $\\rho$.',
        detail: 'Negative $Q$ reflects spin polarization throwing opposite density onto hydrogen. Summed populations audit to one electron over the frame.'
      },
      {
        term: 'Relaxation and line widths',
        kind: 'insight',
        statement: 'Fast **relaxation** `relaxation` broadens lines by $\\Delta B \\propto 1/T_{2}$, so slow-tumbling metals smear while rapidly tumbling radicals sharpen, and oxygen broadens by Heisenberg exchange.',
        detail: 'Saturation-transfer methods clock slow motion from line-shape changes. Degassing sharpens spectra by removing oxygen broadening.'
      }
    ],
    figures: [
      {
        caption: 'Nitroxide triplet: one $^{14}N$ with $I = 1$ splits the resonance into three equal lines spaced by $a_{N}$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="EPR spectrum with three equal hyperfine lines"><line x1="70" y1="290" x2="650" y2="290" stroke="currentColor" stroke-width="2"/><text x="350" y="320" text-anchor="middle" font-size="14" fill="currentColor">magnetic field B</text><path d="M180,290 L205,290 L205,140 L230,140 L230,290" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M320,290 L345,290 L345,140 L370,140 L370,290" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M460,290 L485,290 L485,140 L510,140 L510,290" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="217" y="125" text-anchor="middle" font-size="13" fill="currentColor">m=-1</text><text x="357" y="125" text-anchor="middle" font-size="13" fill="currentColor">m=0</text><text x="497" y="125" text-anchor="middle" font-size="13" fill="currentColor">m=+1</text><line x1="230" y1="250" x2="345" y2="250" stroke="currentColor" stroke-width="1.6"/><polygon points="345,250 335,245 335,255" fill="currentColor"/><polygon points="230,250 240,245 240,255" fill="currentColor"/><text x="287" y="240" text-anchor="middle" font-size="13" fill="currentColor">a-N</text><text x="560" y="150" font-size="13" fill="currentColor">1:1:1 heights</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Resonance field for X-band on a radical',
        problem: 'An organic radical with $g = 2.003$ is run at $\\nu = 9.50$ GHz. Find the resonance field.',
        steps: [
          { label: 'Step 1', text: 'Rearrange $h\\nu = g\\mu_{B}B_{0}$ to $B_{0} = h\\nu /(g\\mu_{B})$:\n```text\nB0 = h nu / (g mu-B)\nh = 6.626e-34, mu-B = 9.274e-24\nB0 ~ 0.339 T\n```\nMicrowaves match the thousand-fold electron splitting.' },
          { label: 'Step 2', text: 'Insert numbers: $B_{0} \\approx 6.626 \\times 10^{-34} \\times 9.50 \\times 10^{9} /(2.003 \\times 9.274 \\times 10^{-24})$.' },
          { label: 'Step 3', text: 'Evaluate $B_{0} \\approx 0.339$ T, the standard X-band electromagnet range.' }
        ],
        result: '$B_{0} \\approx 0.34$ T for $g = 2.003$ at $9.50$ GHz.'
      },
      {
        title: 'Hyperfine audit of a dinitroxide fragment',
        problem: 'Predict the pattern for an electron coupled to one $^{14}N$ ($I = 1$, $a = 1.5$ mT) and two equivalent protons ($a = 0.4$ mT).',
        steps: [
          { label: 'Step 1', text: 'Split by nitrogen first: $2 \\times 1 \\times 1 + 1 = 3$ equal lines $1.5$ mT apart.' },
          { label: 'Step 2', text: 'Split each by two protons: $2 \\times 2 \\times \\tfrac{1}{2} + 1 = 3$ lines $1$:$2$:$1$ at $0.4$ mT spacing.' },
          { label: 'Step 3', text: 'Stack to nine lines in three triplets, intensities scaled by the nitrogen equal thirds.' }
        ],
        result: 'Three nitrogen lines, each a $1$:$2$:$1$ proton triplet: nine lines total.'
      }
    ],
    keyTakeaways: [
      '$h\\nu = g\\mu_{B}B_{0}$ sets electron resonance in the microwave band.',
      '$g_{e} = 2.0023$ anchors radicals; metals shift and split $g$ widely.',
      '$2nI+1$ lines with binomial weights count equivalent magnetic nuclei.',
      '$a_{H} = Q\\rho$ maps proton splittings onto pi spin populations.'
    ],
    quiz: [
      {
        q: 'X-band EPR uses microwaves because electron splittings are about:',
        options: ['Equal to nuclear splittings', 'A thousand times nuclear splittings', 'Zero in most radicals', 'Optical in size'],
        answer: 1,
        explanation: 'Step 1: Compare $\\mu_{B}$ with nuclear magnetons. Step 2: Scale frequencies by the thousand-fold moment. Step 3: Land in gigahertz microwaves.'
      },
      // PYQ-pattern: hyperfine counting drill
      {
        q: 'Two equivalent $^{14}N$ nuclei ($I = 1$) give how many lines?',
        options: ['$5$ with $1$:$2$:$3$:$2$:$1$ weights', '$4$', '$2$', '$3$'],
        answer: 0,
        explanation: 'Step 1: Apply $2nI+1$ with $n = 2$. Step 2: Compute $2 \\times 2 \\times 1 + 1 = 5$. Step 3: Weight by trinomial stacking.'
      },
      {
        q: 'A metal-centre $g$ of $2.25$ versus $2.0023$ mainly reports:',
        options: ['Extra electrons created', 'Broken selection rules only', 'Wrong field calibration', 'Spin-orbit coupling mixing orbital character'],
        answer: 3,
        explanation: 'Step 1: Recall free-electron $g_{e}$ as baseline. Step 2: Add orbital fields through spin-orbit mixing. Step 3: Read large shifts as metal-centred character.'
      },
      {
        q: 'Dissolved oxygen broadens EPR lines by:',
        options: ['Removing hyperfine nuclei', 'Raising the microwave power', 'Heisenberg spin exchange shortening $T_{2}$', 'Lowering the $g$-value to zero'],
        answer: 2,
        explanation: 'Step 1: Collide paramagnetic oxygen with radicals. Step 2: Exchange spins and cut coherence time. Step 3: Widen lines as $1/T_{2}$ grows.'
      }
    ]
  }
]
