import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 19: Statistical Thermodynamics (Atkins Focus 13)
// Sections 19.1 - 19.4. Master study content in Atkins language.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh19Content: SectionContent[] = [
  // ---------------------------------------------------------------- 19.1
  {
    sectionId: 'chem-ch19-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Boltzmann distribution from multiplicity and Lagrange multipliers',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Maximizing arrangements under fixed energy and number',
            body: 'Count arrangements of molecules over levels with degeneracies $g_i$ and occupation numbers $n_i$, take the logarithm of the multiplicity, and maximize with Stirling approximation subject to fixed total number and total energy. Lagrange multipliers for the two constraints exponentiate into $n_i \\propto g_i \\exp(-\\epsilon_i/kT)$ with temperature emerging as the energy constraint multiplier. The derivation shows the exponential is not assumed but forced by combinatorics: the distribution with overwhelmingly many microstates dominates all others so completely that thermodynamics becomes counting at scale.'
          },
          {
            kind: 'theorem',
            heading: 'Population ratios with degeneracy versus energy tradeoff',
            body: 'The **population theorem** reads $n_2/n_1 = (g_2/g_1)\\exp(-\\Delta\\epsilon/kT)$ for any two levels, so higher degeneracy can outweigh higher energy at high temperature. Electronic ground states dominate at room temperature because gaps dwarf thermal energy, while rotational levels spread widely since their spacings match it. Negative temperature language for inverted laser populations follows from the same ratio run backward, showing how far combinatorics reaches into optics.'
          },
          {
            kind: 'application',
            heading: 'Barometric profiles and stellar lines from one ratio',
            body: 'The barometric formula applies the Boltzmann factor to gravitational potential energy, predicting exponential thinning of the atmosphere with altitude at fixed temperature. Stellar absorption spectra invert the same ratio to read excitation temperatures from line strengths, and chemical equilibrium constants emerge when the level picture is extended from one molecule to reacting populations. Atmospheric modeling and astrophysics thus share one graduate statistical root with the laboratory gas laws.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Macroscopic behaviour emerges from how molecules distribute over energy states, and the Boltzmann distribution is the rule that governs the sharing. Equal a priori probabilities plus a fixed total energy force an exponential fall of population with energy. This section derives the distribution exactly as Atkins Topic 13A builds it.',
    objectives: [
      'Write population ratios with degeneracies for any two levels',
      'Find the temperature of a two-level system from a measured ratio',
      'Explain why high degeneracies can beat energy gaps at high temperature'
    ],
    concepts: [
      {
        term: 'Configurations and equal probabilities',
        kind: 'definition',
        statement: 'A **configuration** `Ni` is the population list $\\{N_{0}, N_{1}, \\ldots\\}$ over states of energies $\\epsilon_{0}, \\epsilon_{1}, \\ldots$, and equal a priori probabilities weight every reachable distribution blind to motion type.',
        detail: 'The dominant configuration maximizes weight $W$ under fixed $N$ and total energy. Stirling logarithms turn the combinatorics into the exponential law.'
      },
      {
        term: 'Boltzmann distribution over states',
        kind: 'theorem',
        statement: 'The **Boltzmann law** `Boltzmann` gives $N_{i}/N = e^{-\\beta\\epsilon_{i}}/q$ with $\\beta = 1 /kT$ and partition sum $q = \\sum_{i} e^{-\\beta\\epsilon_{i}}$, normalizing every fraction.',
        detail: 'Colder systems collapse onto the ground state; hotter systems spread over the ladder. The denominator $q$ counts thermally accessible states.'
      },
      {
        term: 'Level ratios with degeneracy',
        kind: 'law',
        statement: 'For energy **levels** `gi` of degeneracy $g$, populations obey $N_{i}/N_{j} = (g_{i}/g_{j}) e^{-(\\epsilon_{i}-\\epsilon_{j}) /kT}$, so degeneracy multiplies the raw exponential.',
        detail: 'Rotational levels with $g = 2J+1$ climb in population before falling, peaking away from $J = 0$. Ignoring $g$ is the standard ratio error.'
      },
      {
        term: 'Two-level temperature reading',
        kind: 'method',
        statement: 'A measured **population ratio** `ratio` inverts to $T = -\\Delta\\epsilon /(k\\ln[(N_{u}/N_{l})(g_{l}/g_{u})])$, giving for a $400$ cm$^{-1}$ gap with upper at one third a temperature near $524$ K.',
        detail: 'Upper fractions near one half mean $kT$ dwarfs the gap; trace upper populations mean $kT$ is tiny beside it. Ten percent in a $540$ cm$^{-1}$ state marks about $353$ K.'
      },
      {
        term: 'Density of states versus energy cost',
        kind: 'insight',
        statement: 'High **density of states** `density` can outweigh $\\Delta E_{0}$ at high temperature through the $kT/\\epsilon$ prefactor, which is why endothermic products with many states win on heating.',
        detail: 'This is the molecular root of Gibbs-energy control: entropy counts states while enthalpy counts gaps. Low temperature always restores the lowest state.'
      }
    ],
    figures: [
      {
        caption: 'Boltzmann fall-off: state populations drop as $e^{-\\epsilon /kT}$, spreading wider as $T$ rises from cold to hot.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of Boltzmann populations at low and high temperature"><line x1="80" y1="300" x2="660" y2="300" stroke="currentColor" stroke-width="2"/><line x1="80" y1="300" x2="80" y2="60" stroke="currentColor" stroke-width="2"/><text x="60" y="50" font-size="15" fill="currentColor">N</text><text x="640" y="325" font-size="14" fill="currentColor">energy</text><rect x="140" y="120" width="50" height="180" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="210" y="200" width="50" height="100" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="280" y="250" width="50" height="50" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="350" y="275" width="50" height="25" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="240" y="330" font-size="13" fill="currentColor">cold: steep fall</text><rect x="470" y="200" width="36" height="100" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/><rect x="512" y="225" width="36" height="75" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/><rect x="554" y="245" width="36" height="55" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/><rect x="596" y="260" width="36" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/><text x="551" y="330" font-size="13" fill="currentColor">hot: spread out</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Temperature from a one-third upper population',
        problem: 'A non-degenerate two-level gap equals $400$ cm$^{-1}$ and $N_{u} = N_{l}/3$. Find $T$.',
        steps: [
          { label: 'Step 1', text: 'Convert the gap: $\\Delta\\epsilon = hc\\tilde{\\nu} = 6.626 \\times 10^{-34} \\times 3.00 \\times 10^{8} \\times 40000$ m$^{-1}$:\n```text\nDelta-eps = h c nu-tilde, nu-tilde = 400 cm-1\nratio Nu/Nl = 1/3 = exp(-Delta-eps / kT)\nT = -Delta-eps / (k ln(1/3))\n```\nDegeneracies cancel at unity here.' },
          { label: 'Step 2', text: 'Insert $\\Delta\\epsilon \\approx 7.95 \\times 10^{-21}$ J and $k = 1.381 \\times 10^{-23}$ J K$^{-1}$.' },
          { label: 'Step 3', text: 'Evaluate $T = 7.95 \\times 10^{-21} /(1.381 \\times 10^{-23} \\times 1.0986) \\approx 524$ K.' }
        ],
        result: '$T \\approx 524$ K populates the upper state at one third.'
      },
      {
        title: 'Ten percent excitation temperature',
        problem: 'A $540$ cm$^{-1}$ non-degenerate state holds $10$ percent of molecules. Find $T$.',
        steps: [
          { label: 'Step 1', text: 'Write $0.10/0.90 = e^{-\\Delta\\epsilon /kT}$ for the upper-to-lower ratio $1/9$.' },
          { label: 'Step 2', text: 'Solve $T = -\\Delta\\epsilon /(k\\ln(1/9))$ with $\\Delta\\epsilon = hc \\times 54000$ m$^{-1}$.' },
          { label: 'Step 3', text: 'Evaluate $T \\approx 353$ K, body-temperature scale for this gap.' }
        ],
        result: '$T \\approx 353$ K gives ten percent in the upper state.'
      }
    ],
    keyTakeaways: [
      'Configurations $\\{N_{i}\\}$ peak at the Boltzmann weights under fixed $N$ and energy.',
      '$N_{i}/N = e^{-\\beta\\epsilon_{i}}/q$ with $\\beta = 1 /kT$.',
      'Level ratios carry $(g_{i}/g_{j})$ degeneracy factors.',
      'High state density can beat energy gaps as $T$ rises.'
    ],
    quiz: [
      {
        q: 'The Boltzmann denominator $q$ is:',
        options: ['The speed of light', 'The sum $\\sum_{i} e^{-\\beta\\epsilon_{i}}$ normalizing populations', 'The electron charge', 'A selection rule'],
        answer: 1,
        explanation: 'Step 1: Sum unnormalized weights over states. Step 2: Divide each weight by the sum. Step 3: Guarantee fractions total unity.'
      },
      // PYQ-pattern: ratio with degeneracy drill
      {
        q: 'Levels with $g_{u} = 3$, $g_{l} = 1$ and gap $\\Delta\\epsilon$ have $N_{u}/N_{l}$ of:',
        options: ['$3e^{-\\Delta\\epsilon /kT}$', '$e^{-3\\Delta\\epsilon /kT}$', '$1/3$ always', '$e^{-\\Delta\\epsilon /kT}$'],
        answer: 0,
        explanation: 'Step 1: Multiply the exponential by the degeneracy ratio. Step 2: Insert $3/1$. Step 3: Keep the gap exponent unchanged.'
      },
      {
        q: 'As $T \\to 0$, the Boltzmann distribution:',
        options: ['Inverts the populations', 'Becomes uniform over levels', 'Equalizes all states', 'Collapses everything into the ground state'],
        answer: 3,
        explanation: 'Step 1: Let $\\beta \\to \\infty$ in the weights. Step 2: Suppress every excited exponential to zero. Step 3: Leave only the lowest state filled.'
      },
      {
        q: 'Rotational populations peak above $J = 0$ because:',
        options: ['Centrifugal force adds energy', 'Energy falls with $J$', 'Degeneracy $2J+1$ rises against the falling exponential', 'Selection rules force it'],
        answer: 2,
        explanation: 'Step 1: Write weight $(2J+1)e^{-BJ(J+1) /kT}$. Step 2: Grow the prefactor while the exponential decays. Step 3: Maximize the product past zero.'
      }
    ]
  },
  // ---------------------------------------------------------------- 19.2
  {
    sectionId: 'chem-ch19-s2',
    depth: [
      {
        tier: 'masters',
        title: 'Partition functions that factor into measurable thermodynamics',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Factorization across independent motions',
            body: 'Write the molecular sum over total states as $q = q_{trans}q_{rot}q_{vib}q_{elec}$ because independent energies add in the exponent and exponentials of sums factor into products. Translational states use a particle in a box continuum, rotation uses quantized angular momentum with symmetry numbers, vibration uses harmonic ladders, and electronic states truncate to ground plus low lying terms. Each factor then yields closed forms from mass geometry temperature and vibrational wavenumbers, turning spectroscopy constants directly into thermodynamic functions.'
          },
          {
            kind: 'theorem',
            heading: 'Thermodynamics as logarithmic derivatives of the sum',
            body: 'The **bridge theorem** states that internal energy entropy and free energy follow from temperature derivatives of the logarithm of the partition function, so one measured ladder gives all macroscopic potentials. Heat capacity curves that rise in steps as rotation then vibration unfreeze are direct images of successive factors activating with temperature. Statistical mechanics thus replaces separate empirical rules with a single sum whose derivatives reproduce calorimetry from first principles.'
          },
          {
            kind: 'example',
            heading: 'Thermal wavelength check for a light gas',
            body: 'Evaluate the translational factor for hydrogen near room temperature from mass and temperature to find a thermal wavelength far smaller than the average spacing, confirming classical Maxwell statistics apply without quantum corrections. The rotational temperature near eighty kelvin units shows rotation is fully active while the vibrational temperature in the thousands shows vibration frozen to its ground state. This three line estimate predicts the observed heat capacity before any calorimeter is switched on, the hallmark of graduate statistical reasoning.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'The molecular partition function packages every motion into one sum, and because independent motions multiply, translation, rotation, vibration and electronic parts factor cleanly. Each factor has a closed form from its own ladder. This section evaluates all four exactly as Atkins Topic 13B derives them.',
    objectives: [
      'Factor q into translational, rotational, vibrational and electronic parts',
      'Evaluate each factor from mass, geometry, temperature and wavenumbers',
      'Combine factors to get state populations and thermal wavelengths'
    ],
    concepts: [
      {
        term: 'Factorization over motions',
        kind: 'theorem',
        statement: 'Independent modes give **factored q** `factor` as $q = q^{T}q^{R}q^{V}q^{E}$, so each motion contributes its own ladder sum without cross terms.',
        detail: 'Energies add across separable modes, and exponentials of sums factor into products of sums. Coupled motions like rotation-vibration need corrections later.'
      },
      {
        term: 'Translational factor and thermal wavelength',
        kind: 'law',
        statement: 'A mass $m$ in volume $V$ gives **translation sum** `qT` $q^{T} = V/\\Lambda^{3}$ with $\\Lambda = h /(2\\pi mkT)^{1/2}$, reaching about $10^{28}$ for small organics in $1$ cm$^{3}$ at $300$ K.',
        detail: 'Heavy, hot and roomy systems access enormously many states. $\\Lambda$ also marks when quantum statistics must replace classical counting.'
      },
      {
        term: 'Rotational factor with symmetry number',
        kind: 'law',
        statement: 'The high-temperature **rotation sum** `qR` is $q^{R} = T /(\\sigma\\theta^{R})$ for linear rotors with $\\theta^{R} = hc\\tilde{B}/k$, dividing by symmetry number $\\sigma$ against overcounting indistinguishable orientations.',
        detail: '$H_{2}$ takes $\\sigma = 2$, $NH_{3}$ takes $\\sigma = 3$, and $CH_{4}$ takes $\\sigma = 12$. Nonlinear tops multiply three such roots with $(ABC)^{1/2}$ constants.'
      },
      {
        term: 'Vibrational factor per mode',
        kind: 'theorem',
        statement: 'Each harmonic **vibration sum** `qV` is $q^{V} = 1 /(1 - e^{-\\beta hc\\tilde{\\nu}})$, near unity for stiff modes at room temperature and large for soft modes, multiplying over all $3N-6$ or $3N-5$ modes.',
        detail: '$CS_{2}$ with $658$, $397$ doubly degenerate and $1535$ cm$^{-1}$ modes evaluates mode by mode. Low-frequency bends dominate vibrational heat capacity.'
      },
      {
        term: 'Electronic factor and excited states',
        kind: 'definition',
        statement: 'The **electronic sum** `qE` is $q^{E} = g_{0} + g_{1}e^{-\\beta\\epsilon_{1}} + \\cdots$ from ground degeneracy upward, so $NO$ rises from $2$ toward $4$ as its low spin-orbit excited states fill.',
        detail: 'Most closed-shell molecules keep $q^{E} = 1$ since gaps dwarf $kT$. Atoms with low terms like halogens need the first excited entries.'
      }
    ],
    figures: [
      {
        caption: 'Partition-factor stack: $q^{T}$ dominates the count, $q^{R}$ adds hundreds, $q^{V}$ hovers near unity per stiff mode, $q^{E}$ counts low electronic states.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stacked blocks showing relative sizes of translational rotational vibrational and electronic partition functions"><line x1="70" y1="300" x2="660" y2="300" stroke="currentColor" stroke-width="2"/><rect x="110" y="90" width="100" height="210" fill="none" stroke="currentColor" stroke-width="3"/><text x="160" y="200" text-anchor="middle" font-size="13" fill="currentColor">q-T huge</text><rect x="240" y="180" width="100" height="120" fill="none" stroke="currentColor" stroke-width="3"/><text x="290" y="245" text-anchor="middle" font-size="13" fill="currentColor">q-R</text><rect x="370" y="250" width="100" height="50" fill="none" stroke="currentColor" stroke-width="3"/><text x="420" y="280" text-anchor="middle" font-size="13" fill="currentColor">q-V</text><rect x="500" y="265" width="100" height="35" fill="none" stroke="currentColor" stroke-width="3"/><text x="550" y="288" text-anchor="middle" font-size="13" fill="currentColor">q-E</text><text x="360" y="60" text-anchor="middle" font-size="14" fill="currentColor">q = qT qR qV qE</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Translational partition of a heavy organic',
        problem: 'Estimate $q^{T}$ at $300$ K and $3000$ K for $M = 150$ g mol$^{-1}$ in $1.00$ cm$^{3}$.',
        steps: [
          { label: 'Step 1', text: 'Form $\\Lambda = h /(2\\pi mkT)^{1/2}$ with $m = 150 \\times 10^{-3}/N_{A}$:\n```text\nm per molecule = M / NA\nLambda ~ h / sqrt(2 pi m kT)\nqT = V / Lambda^3, V = 1 cm3\n```\nWavelength shrinks as $T^{-1/2}$.' },
          { label: 'Step 2', text: 'At $300$ K, $\\Lambda \\approx 6.6$ pm gives $q^{T} \\approx 3.5 \\times 10^{27}$; at $3000$ K, $\\Lambda$ falls by $\\sqrt{10}$ so $q^{T}$ rises by $10^{3/2}$.' },
          { label: 'Step 3', text: 'Conclude translation always dominates molecular $q$ under ordinary volumes.' }
        ],
        result: '$q^{T} \\approx 3.5 \\times 10^{27}$ at $300$ K, larger by about $32$ times at $3000$ K.'
      },
      {
        title: 'Vibrational partition of carbon disulfide',
        problem: 'Evaluate $q^{V}$ of $CS_{2}$ at $500$ K from $658$, $397$ doubly degenerate and $1535$ cm$^{-1}$.',
        steps: [
          { label: 'Step 1', text: 'Convert each with $x = hc\\tilde{\\nu} /kT$: soft bend $x \\approx 1.14$, symmetric stretch $x \\approx 1.89$, asymmetric $x \\approx 4.42$.' },
          { label: 'Step 2', text: 'Evaluate $1 /(1-e^{-x})$ per mode: bend $1.47$ each, symmetric $1.18$, asymmetric $1.01$.' },
          { label: 'Step 3', text: 'Multiply $1.18 \\times 1.47^{2} \\times 1.01 \\approx 2.58$ for the molecular $q^{V}$.' }
        ],
        result: '$q^{V} \\approx 2.6$ at $500$ K, dominated by the soft doubly degenerate bend.'
      }
    ],
    keyTakeaways: [
      '$q = q^{T}q^{R}q^{V}q^{E}$ factors over independent motions.',
      '$q^{T} = V/\\Lambda^{3}$ with $\\Lambda = h /(2\\pi mkT)^{1/2}$ dominates counts.',
      '$q^{R} = T /(\\sigma\\theta^{R})$ divides by symmetry number $\\sigma$.',
      '$q^{V} = 1 /(1 - e^{-\\beta hc\\tilde{\\nu}})$ per mode; $q^{E}$ sums low electronic states.'
    ],
    quiz: [
      {
        q: 'Factorization $q = q^{T}q^{R}q^{V}q^{E}$ holds because:',
        options: ['All energies are equal', 'Independent-mode energies add, so exponentials multiply', 'Partition functions always multiply by definition', 'Temperature is constant'],
        answer: 1,
        explanation: 'Step 1: Write total energy as a sum over modes. Step 2: Split the exponential into a product. Step 3: Sum each factor over its own ladder.'
      },
      // PYQ-pattern: symmetry number drill
      {
        q: 'Symmetry numbers of $HCl$, $H_{2}$ and $CH_{4}$ are:',
        options: ['$2$, $2$, $2$', '$1$, $1$, $1$', '$12$, $12$, $12$', '$1$, $2$, $12$'],
        answer: 3,
        explanation: 'Step 1: Count indistinguishable orientations per rotation. Step 2: Assign $1$ to heteronuclear, $2$ to homonuclear diatomic, $12$ to tetrahedron. Step 3: Divide each $q^{R}$ accordingly.'
      },
      {
        q: 'A stiff $3000$ cm$^{-1}$ mode at $300$ K has $q^{V}$ about:',
        options: ['Barely above $1$', '$0$', '$100$', '$30$'],
        answer: 0,
        explanation: 'Step 1: Compare $hc\\tilde{\\nu}$ with $kT$. Step 2: Note the exponent near $-14$. Step 3: Leave $1 /(1-e^{-x})$ essentially unity.'
      },
      {
        q: 'Electronic $q^{E}$ of $NO$ rises from $2$ toward $4$ because:',
        options: ['Vibration couples in', 'Nitrogen has two isotopes', 'Low spin-orbit excited states fill with temperature', 'The bond breaks'],
        answer: 2,
        explanation: 'Step 1: Note the $^{2}\\Pi$ ground degeneracy of $2$. Step 2: Add the nearby excited spin-orbit manifold. Step 3: Approach $4$ total states when hot.'
      }
    ]
  },
  // ---------------------------------------------------------------- 19.3
  {
    sectionId: 'chem-ch19-s3',
    readingTime: 9,
    intro: 'Heat capacity counts how new energy spreads over accessible states, and statistical thermodynamics computes it from the curvature of log q. Each motion contributes its own share, freezing out when its gap dwarfs thermal energy. This section recovers equipartition where it holds and explains the famous dips where it fails.',
    objectives: [
      'Compute internal energy and heat capacity from derivatives of log q',
      'Add translational, rotational and vibrational shares for any gas',
      'Explain frozen modes at low temperature from gap-to-kT ratios'
    ],
    concepts: [
      {
        term: 'Energy and heat capacity from log q',
        kind: 'theorem',
        statement: 'Derivatives give **thermal functions** `derivatives` as $U(T) - U(0) = -N(\\partial\\ln q/\\partial\\beta)_{V}$ and $C_{V} = Nk\\beta^{2}(\\partial^{2}\\ln q/\\partial\\beta^{2})_{V}$, summing mode by mode.',
        detail: 'First slope reads mean energy; curvature reads its thermal spread, which is the heat capacity. Independent factors add their $\\ln q$ before differentiating.'
      },
      {
        term: 'Translation and rotation shares',
        kind: 'law',
        statement: 'Every gas carries **quadratic shares** `3R/2` of $C_{V,m}^{T} = 3R/2$ from translation, plus $R$ per linear rotor and $3R/2$ per nonlinear rotor once $T$ exceeds $\\theta^{R}$.',
        detail: 'Rotational temperatures are a few kelvin, so rotation is fully awake at room temperature except for $H_{2}$ subtleties. These are the equipartition values recovered statistically.'
      },
      {
        term: 'Vibrational share and freezing',
        kind: 'law',
        statement: 'Each vibration adds **Einstein share** `frozen` $C_{V,m}^{V} = R(\\theta^{V}/T)^{2}e^{-\\theta^{V}/T} /(1-e^{-\\theta^{V}/T})^{2}$ with $\\theta^{V} = hc\\tilde{\\nu}/k$, vanishing when $\\theta^{V}$ dwarfs $T$.',
        detail: 'Room-temperature $HCl$ vibration with $\\theta^{V}$ near $4300$ K contributes almost nothing. Soft bends with small $\\theta^{V}$ are the first to wake on heating.'
      },
      {
        term: 'Hydrogen heat-capacity anomaly',
        kind: 'insight',
        statement: 'Ortho-para **hydrogen lag** `ortho-para` freezes the rotational share near $50$ K because interconversion is slow, so fast measurements miss equilibrium $C_{V}$ there.',
        detail: 'Equilibrium hydrogen blends $J$-even para and $J$-odd ortho weights $1$:$3$ by temperature. Catalysts restore equilibrium and the full curve.'
      },
      {
        term: 'Solids and the Dulong-Petit ceiling',
        kind: 'theorem',
        statement: 'Three-dimensional **oscillator solids** `3R` approach $C_{V,m} \\to 3R$ per mole of atoms at high $T$, with Debye $T^{3}$ fall-off replacing Einstein single-frequency gaps at low $T$.',
        detail: 'Diamond with huge $\\theta^{V}$ stays far below $3R$ at room temperature. Metals add a small linear electronic term from conduction electrons.'
      }
    ],
    figures: [
      {
        caption: 'Heat-capacity ladder: translation plus rotation plateau first, vibrations wake stepwise, approaching the classical ceiling only when hot.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heat capacity versus temperature curve with stepwise vibrational awakening"><line x1="80" y1="300" x2="640" y2="300" stroke="currentColor" stroke-width="2"/><line x1="80" y1="300" x2="80" y2="60" stroke="currentColor" stroke-width="2"/><text x="620" y="325" font-size="14" fill="currentColor">T</text><text x="50" y="70" font-size="14" fill="currentColor">Cv</text><path d="M80,260 L250,260 C300,260 300,220 380,220 C460,220 460,170 620,170" fill="none" stroke="currentColor" stroke-width="3"/><line x1="80" y1="260" x2="640" y2="260" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4"/><text x="150" y="250" font-size="12" fill="currentColor">trans + rot</text><text x="420" y="210" font-size="12" fill="currentColor">soft modes wake</text><text x="520" y="160" font-size="12" fill="currentColor">stiff modes wake</text><circle cx="300" cy="245" r="5" fill="currentColor"/><circle cx="450" cy="195" r="5" fill="currentColor"/></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Room-temperature Cv of HCl gas',
        problem: 'Estimate $C_{V,m}$ of $HCl$ at $300$ K from its motion shares.',
        steps: [
          { label: 'Step 1', text: 'Add translation $3R/2$ and linear rotation $R$:\n```text\ntrans: 3R/2 = 12.47 J/mol K\nrot: R = 8.31 J/mol K\nvib: theta-V ~ 4300 K, frozen ~ 0\n```\nRotation is awake since $\\theta^{R}$ is near $15$ K.' },
          { label: 'Step 2', text: 'Evaluate vibration: $\\theta^{V}/T \\approx 14$, so the Einstein share is exponentially tiny.' },
          { label: 'Step 3', text: 'Total $C_{V,m} \\approx 5R/2 = 20.8$ J mol$^{-1}$ K$^{-1}$, the equipartition pair without vibration.' }
        ],
        result: '$C_{V,m} \\approx 20.8$ J mol$^{-1}$ K$^{-1}$ with vibration frozen.'
      },
      {
        title: 'When a soft bend wakes up',
        problem: 'A $200$ cm$^{-1}$ bend has $\\theta^{V} \\approx 288$ K. Estimate its share at $300$ K and $1000$ K.',
        steps: [
          { label: 'Step 1', text: 'Form $x = \\theta^{V}/T$: $0.96$ at $300$ K, $0.29$ at $1000$ K.' },
          { label: 'Step 2', text: 'Insert into $R x^{2}e^{-x} /(1-e^{-x})^{2}$: about $0.92R$ at $300$ K, about $0.99R$ at $1000$ K.' },
          { label: 'Step 3', text: 'Conclude soft modes count nearly fully at room temperature while stiff ones sleep.' }
        ],
        result: 'About $0.9R$ at $300$ K rising to $R$ at $1000$ K.'
      }
    ],
    keyTakeaways: [
      '$U$ and $C_{V}$ come from first and second $\\beta$ derivatives of $\\ln q$.',
      'Translation gives $3R/2$; linear rotation adds $R$.',
      'Vibrations add Einstein shares, frozen while $\\theta^{V}$ exceeds $T$.',
      'Solids ceiling at $3R$ per mole of atoms with Debye $T^{3}$ winters.'
    ],
    quiz: [
      {
        q: 'Molar $C_{V}$ of a monatomic perfect gas is:',
        options: ['$R$', '$3R/2$', '$3R$', '$R/2$'],
        answer: 1,
        explanation: 'Step 1: Keep only translational $q$. Step 2: Differentiate $\\ln q^{T}$ twice. Step 3: Read $3R/2$ per mole.'
      },
      // PYQ-pattern: frozen-mode reasoning drill
      {
        q: '$N_{2}$ vibration ($\\tilde{\\nu} = 2330$ cm$^{-1}$) at $300$ K is:',
        options: ['Frozen near zero share', 'Negative in share', 'Equal to translation', 'Fully awake at $R$'],
        answer: 0,
        explanation: 'Step 1: Compute $\\theta^{V} \\approx 3350$ K. Step 2: Compare with $T = 300$ K. Step 3: Suppress the Einstein share exponentially.'
      },
      {
        q: 'Heat-capacity dip of hydrogen near $50$ K reflects:',
        options: ['Ionization', 'Relativistic cooling', 'Bond breaking', 'Slow ortho-para conversion missing equilibrium'],
        answer: 3,
        explanation: 'Step 1: Note rotation should be half-awake there. Step 2: Blame slow nuclear-spin interconversion. Step 3: Recover the curve with catalysts.'
      },
      {
        q: 'Diamond stays below $3R$ at room temperature because:',
        options: ['Heat capacity caps at $R$', 'It has too many atoms', 'Its $\\theta^{V}$ values dwarf $T$', 'Carbon lacks vibrations'],
        answer: 2,
        explanation: 'Step 1: Recall stiff bonds give huge $\\theta^{V}$. Step 2: Freeze most Einstein shares. Step 3: Climb toward $3R$ only when much hotter.'
      }
    ]
  },
  // ---------------------------------------------------------------- 19.4
  {
    sectionId: 'chem-ch19-s4',
    readingTime: 9,
    intro: 'Entropy counts accessible states and equilibrium constants compare them between reactants and products. Both emerge from the same partition functions that gave energies and heat capacities. This section derives the Sackur-Tetrode entropy, residual zero-point entropy and the statistical equilibrium constant.',
    objectives: [
      'Compute molar entropy from q including the Sackur-Tetrode term',
      'Account residual entropy from frozen orientations at zero kelvin',
      'Write K from partition ratios and read density-of-states effects'
    ],
    concepts: [
      {
        term: 'Boltzmann entropy from state counts',
        kind: 'definition',
        statement: 'Statistical **entropy** `S` is $S = k\\ln W$ with $W$ the dominant weight, expanding for molecules into $S = (U-U(0))/T + Nk\\ln q$ for distinguishable and $+Nk\\ln(qe/N)$ for indistinguishable particles.',
        detail: 'Dividing by $N!$ corrects ghost permutations of identical gases. Each newly accessible state raises $W$ and hence $S$.'
      },
      {
        term: 'Sackur-Tetrode molar entropy',
        kind: 'theorem',
        statement: 'Monatomic gases carry **Sackur-Tetrode entropy** `Sackur` $S_{m} = R\\ln(V_{m}e^{5/2} /(N_{A}\\Lambda^{3}))$, growing with mass, volume and temperature through $\\Lambda$.',
        detail: 'Absolute entropies from calorimetry match this formula without adjustable parameters. Heavier noble gases rank strictly by mass at fixed conditions.'
      },
      {
        term: 'Residual zero-point entropy',
        kind: 'law',
        statement: 'Frozen disorder keeps **residual entropy** `residual` $S_{m}(0) = R\\ln s$ with $s$ equivalent orientations, as in $CO$ chains and ice $H$-bond networks that never order by $0$ K.',
        detail: 'Perfect crystals reach zero by the third law; glasses and random alloys keep $R\\ln s$. Measuring the deficit diagnoses the frozen options.'
      },
      {
        term: 'Equilibrium constant from partitions',
        kind: 'theorem',
        statement: 'The **statistical K** `K` compares product and reactant $q$ ratios times $e^{-\\Delta_{r}E_{0} /RT}$, so big $kT/\\epsilon$ state density on the product side can pull $K$ above unity even endothermically.',
        detail: 'For $A_{2} \\rightleftharpoons 2A$ at $500$ K the translational explosion on dissociation fights the $D_{0}$ exponent. High $T$ favours the side with more accessible states.'
      },
      {
        term: 'Gibbs energy as states versus gaps',
        kind: 'insight',
        statement: 'Writing $\\Delta_{r}G^{\\ominus} = -RT\\ln K$ splits control into **energy gaps** `gaps` via $\\Delta_{r}E_{0}$ and state counts via $q$ ratios, the molecular face of enthalpy-entropy competition.',
        detail: 'Large positive $\\Delta_{r}E_{0}$ kills $K$ at low $T$; rising $T$ lets dense product states overturn it. This reproduces the standard temperature dependence of equilibrium from counting.'
      }
    ],
    figures: [
      {
        caption: 'States-versus-gaps contest: products win equilibrium when their denser accessible states outweigh a positive $\\Delta_{r}E_{0}$ at high $T$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy diagram comparing reactant and product state densities"><line x1="80" y1="300" x2="640" y2="300" stroke="currentColor" stroke-width="2"/><line x1="180" y1="250" x2="300" y2="250" stroke="currentColor" stroke-width="3"/><text x="240" y="275" text-anchor="middle" font-size="14" fill="currentColor">R: few states</text><line x1="420" y1="180" x2="540" y2="180" stroke="currentColor" stroke-width="3"/><text x="480" y="205" text-anchor="middle" font-size="14" fill="currentColor">P: many states</text><line x1="240" y1="250" x2="480" y2="180" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><text x="360" y="200" font-size="13" fill="currentColor">Delta-E0 up</text><line x1="420" y1="180" x2="420" y2="130" stroke="currentColor" stroke-width="1.6"/><line x1="440" y1="180" x2="440" y2="130" stroke="currentColor" stroke-width="1.6"/><line x1="460" y1="180" x2="460" y2="130" stroke="currentColor" stroke-width="1.6"/><line x1="480" y1="180" x2="480" y2="130" stroke="currentColor" stroke-width="1.6"/><line x1="500" y1="180" x2="500" y2="130" stroke="currentColor" stroke-width="1.6"/><text x="470" y="115" font-size="13" fill="currentColor">dense P states</text><text x="360" y="330" font-size="13" fill="currentColor">hot: P wins; cold: R wins</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Residual entropy of frozen carbon monoxide',
        problem: 'Solid $CO$ freezes with each molecule randomly $CO$ or $OC$. Estimate $S_{m}(0)$.',
        steps: [
          { label: 'Step 1', text: 'Count equivalent orientations $s = 2$ per site:\n```text\ns = 2 orientations per CO\nSm(0) = R ln 2 ~ 5.76 J/mol K\n```\nNo ordering transition intervenes.' },
          { label: 'Step 2', text: 'Evaluate $R\\ln 2 \\approx 5.76$ J mol$^{-1}$ K$^{-1}$.' },
          { label: 'Step 3', text: 'Compare calorimetric shortfall against spectroscopic absolute entropy to confirm.' }
        ],
        result: '$S_{m}(0) \\approx 5.8$ J mol$^{-1}$ K$^{-1}$ of frozen orientational disorder.'
      },
      {
        title: 'Dissociation equilibrium from state counting',
        problem: 'For $A_{2} \\rightleftharpoons 2A$ at $500$ K, explain how $K$ can exceed unity despite $D_{0}$ near $1300$ cm$^{-1}$.',
        steps: [
          { label: 'Step 1', text: 'Write $K \\propto (q_{A}^{2}/q_{A_{2}})e^{-D_{0} /RT}$ with translation $q^{T} \\propto V$ exploding on doubling particle count.' },
          { label: 'Step 2', text: 'Estimate $D_{0} /RT \\approx 3.7$ giving $e^{-3.7} \\approx 0.025$, beaten by the translational prefactor of order hundreds.' },
          { label: 'Step 3', text: 'Conclude dissociation wins hot and loses cold, the endothermic-density trade in action.' }
        ],
        result: 'Translational state explosion overcomes the $D_{0}$ exponent at $500$ K.'
      }
    ],
    keyTakeaways: [
      '$S = k\\ln W$ expands to $q$-based formulas with $N!$ correction for gases.',
      '$S_{m} = R\\ln(V_{m}e^{5/2} /(N_{A}\\Lambda^{3}))$ gives absolute gas entropies.',
      '$S_{m}(0) = R\\ln s$ keeps frozen disorder at zero kelvin.',
      '$K$ from $q$ ratios times $e^{-\\Delta_{r}E_{0} /RT}$ pits states against gaps.'
    ],
    quiz: [
      {
        q: 'Dividing $q^{N}$ by $N!$ for gases corrects:',
        options: ['Quantum tunnelling', 'Overcounting indistinguishable permutations', 'Zero-point energy', 'Nuclear spin'],
        answer: 1,
        explanation: 'Step 1: Count labelled arrangements first. Step 2: Note identical molecules swap silently. Step 3: Divide by $N!$ permutations.'
      },
      // PYQ-pattern: residual entropy drill
      {
        q: 'A crystal with $3$ frozen orientations per molecule has $S_{m}(0)$ of:',
        options: ['$R\\ln 3$', '$3R$', '$R/3$', '$0$'],
        answer: 0,
        explanation: 'Step 1: Set $s = 3$ equivalent options. Step 2: Apply $S_{m}(0) = R\\ln s$. Step 3: Keep the disorder down to zero kelvin.'
      },
      {
        q: 'Endothermic dissociation favoured hot but not cold shows:',
        options: ['Broken thermometry', 'Catalyst action', 'Enthalpy-only control', 'Dense product states beating $\\Delta E_{0}$ as $T$ rises'],
        answer: 3,
        explanation: 'Step 1: Write $K$ with $q$-ratio prefactor. Step 2: Grow $kT/\\epsilon$ with heating. Step 3: Overturn the gap exponent.'
      },
      {
        q: 'Sackur-Tetrode entropy rises with:',
        options: ['Fewer particles', 'Falling volume only', 'Mass, volume and temperature via $\\Lambda$', 'Lower temperature'],
        answer: 2,
        explanation: 'Step 1: Inspect $V_{m}/\\Lambda^{3}$ inside the log. Step 2: Shrink $\\Lambda$ with mass and temperature. Step 3: Raise the count of accessible states.'
      }
    ]
  }
]
