import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 16: Atomic Structure and Spectra (Atkins Focus 8)
// Sections 16.1 - 16.4. Master study content in Atkins language.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh16Content: SectionContent[] = [
  // ---------------------------------------------------------------- 16.1
  {
    sectionId: 'chem-ch16-s1',
    readingTime: 9,
    intro: 'Hydrogenic atoms separate cleanly into a radial part and an angular part, and three quantum numbers label every one-electron orbital. Energy depends only on the principal number while shape and orientation come from the angular pair. This section turns the Rydberg lines and the separated solutions into working orbital language.',
    objectives: [
      'Assign hydrogenic lines to series from the Rydberg expression',
      'Count radial and angular nodes for any orbital from quantum numbers',
      'Rank penetration and shielding power as s above p above d above f'
    ],
    concepts: [
      {
        term: 'Rydberg lines and hydrogenic energies',
        kind: 'theorem',
        statement: 'The **Rydberg formula** `Rydberg` gives $\\tilde{\\nu} = R_{H}(1/n_{1}^{2} - 1/n_{2}^{2})$ with $R_{H} = 109677$ cm$^{-1}$, and hydrogenic energies $E_{n} = -hcR_{H}Z^{2}/n^{2}$ place Lyman at $n_{1} = 1$, Balmer at $n_{1} = 2$ and Paschen at $n_{1} = 3$.',
        detail: 'Reduced mass $\\mu$ corrects $R_{H}$ slightly per isotope, but $m_{e}$ suffices except in precision work. Each series limit marks ionization from that lower level.'
      },
      {
        term: 'Separated wavefunction and quantum numbers',
        kind: 'definition',
        statement: 'Every **hydrogenic orbital** `nlm` factors as $\\psi = R(r)Y(\\theta,\\phi)$ with $n = 1, 2, \\ldots$, $l = 0, \\ldots, n-1$ and $m_{l} = 0, \\pm 1, \\ldots, \\pm l$, fixing energy, magnitude and orientation of angular momentum.',
        detail: 'The radial equation carries the effective potential with its centrifugal $l(l+1)\\hbar^{2} /(2r^{2})$ wall, while the angular equation returns the spherical harmonics. Centrosymmetry is what permits the separation.'
      },
      {
        term: 'Node counting rule',
        kind: 'method',
        statement: 'The **node budget** `nodes` splits as $n - l - 1$ radial nodes plus $l$ angular nodes, totalling $n - 1$, so $3s$ has two radial spheres, $3p$ has one of each kind, and $3d$ has two angular surfaces.',
        detail: 'Radial distribution functions plot $4\\pi r^{2}R^{2}$ to show shell groupings in many-electron atoms. Inner maxima near the nucleus drive penetration differences.'
      },
      {
        term: 'Penetration and effective charge preview',
        kind: 'insight',
        statement: 'At fixed $n$, **penetration** `penetration` runs $s > p > d > f$ because only $s$ density reaches the nucleus, so $2s$ feels a larger $Z_{eff}$ than $2p$ once other electrons shield with $Z_{eff} = Z - \\sigma$.',
        detail: 'This ordering breaks hydrogenic degeneracy in many-electron atoms and sets the filling sequence. Hartree-Fock radial plots show the shell structure explicitly for sodium.'
      },
      {
        term: 'Angular shapes from spherical harmonics',
        kind: 'notation',
        statement: 'Real **orbital shapes** `shapes` come from combining $Y_{l,m}$ pairs, giving $p_{x}$ and $p_{y}$ in the $xy$-plane from $Y_{1,+1}$ and $Y_{1,-1}$, with $d_{z^{2}}$ and $d_{x^{2}-y^{2}}$ as the two distinct $d$ silhouettes.',
        detail: 'Linear combinations carry zero $m_{l}$ character and point along axes for bonding use. Sign colours on lobes record the phase that controls overlap integrals.'
      }
    ],
    figures: [
      {
        caption: 'Radial functions $R(r)$ for $1s$, $2s$ and $3s$: each higher shell adds one radial node while keeping $l = 0$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Radial wavefunctions of 1s 2s and 3s orbitals showing increasing nodes"><line x1="70" y1="200" x2="650" y2="200" stroke="currentColor" stroke-width="2"/><line x1="100" y1="320" x2="100" y2="50" stroke="currentColor" stroke-width="2"/><text x="630" y="225" font-size="15" fill="currentColor">r</text><text x="70" y="60" font-size="15" fill="currentColor">R(r)</text><path d="M100,90 C160,120 220,180 330,198" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="340" y="150" font-size="14" fill="currentColor">1s: no node</text><path d="M100,120 C170,150 200,200 260,200 C330,200 360,120 470,190" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 4"/><circle cx="260" cy="200" r="5" fill="currentColor"/><text x="420" y="130" font-size="14" fill="currentColor">2s: one node</text><path d="M100,140 C150,160 160,200 200,200 C250,200 260,140 320,140 C390,140 400,220 450,220 C510,220 540,150 610,195" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 4"/><circle cx="200" cy="200" r="5" fill="currentColor"/><circle cx="400" cy="220" r="5" fill="currentColor"/><text x="480" y="90" font-size="14" fill="currentColor">3s: two nodes</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Balmer line from n equals 3 to n equals 2',
        problem: 'Compute the wavenumber and wavelength of the $n = 3 \\to n = 2$ hydrogen line and name the series.',
        steps: [
          { label: 'Step 1', text: 'Apply $\\tilde{\\nu} = R_{H}(1/4 - 1/9)$:\n```text\n1/4 - 1/9 = 5/36\nnu-tilde = 109677 * 5/36 ~ 15233 cm-1\n```\nLower level $n_{1} = 2$ marks the Balmer series.' },
          { label: 'Step 2', text: 'Invert to wavelength: $\\lambda = 1/\\tilde{\\nu} \\approx 6.565 \\times 10^{-7}$ m, the red $H_{\\alpha}$ line at $656.5$ nm.' },
          { label: 'Step 3', text: 'Check sense: $n = 4 \\to 2$ must lie bluer, and the $n \\to \\infty$ limit converges to $27419$ cm$^{-1}$.' }
        ],
        result: '$\\tilde{\\nu} \\approx 15233$ cm$^{-1}$ ($656.5$ nm), the Balmer $H_{\\alpha}$ line.'
      },
      {
        title: 'Node audit of 3p versus 3d',
        problem: 'List radial, angular and total nodes for $3p$ and $3d$ and sketch what each surface means.',
        steps: [
          { label: 'Step 1', text: 'Use $n - l - 1$ radial plus $l$ angular: $3p$ gives $1$ radial and $1$ angular, while $3d$ gives $0$ radial and $2$ angular.' },
          { label: 'Step 2', text: 'Draw the meaning: $3p$ has one spherical nodal surface plus its planar lobe divider; $3d$ is divided only by two angular surfaces through the nucleus.' },
          { label: 'Step 3', text: 'Total both give $2 = n - 1$, confirming the budget while shapes differ completely.' }
        ],
        result: '$3p$: one radial plus one angular; $3d$: zero radial plus two angular; two total each.'
      }
    ],
    keyTakeaways: [
      '$\\tilde{\\nu} = R_{H}(1/n_{1}^{2} - 1/n_{2}^{2})$ sorts Lyman, Balmer and Paschen by lower $n$.',
      '$\\psi = R(r)Y(\\theta,\\phi)$ with $n$, $l$, $m_{l}$ fixes energy, shape and orientation.',
      'Nodes total $n - 1$: $n - l - 1$ radial plus $l$ angular.',
      'Penetration $s > p > d > f$ sets $Z_{eff}$ ordering in many-electron atoms.'
    ],
    quiz: [
      {
        q: 'The $n = 2 \\to n = 1$ line belongs to:',
        options: ['Balmer', 'Paschen', 'Lyman', 'Brackett'],
        answer: 2,
        explanation: 'Step 1: Read the lower level $n_{1} = 1$. Step 2: Match $1$ to Lyman, $2$ to Balmer, $3$ to Paschen. Step 3: Assign the ultraviolet line to Lyman.'
      },
      // PYQ-pattern: node counting drill
      {
        q: 'A $4f$ orbital has radial and angular nodes of:',
        options: ['$0$ radial and $3$ angular', '$1$ radial and $2$ angular', '$2$ radial and $1$ angular', '$3$ radial and $0$ angular'],
        answer: 0,
        explanation: 'Step 1: Insert $n = 4$, $l = 3$. Step 2: Compute $4 - 3 - 1 = 0$ radial. Step 3: Count $l = 3$ angular surfaces.'
      },
      {
        q: 'Why does $2s$ lie below $2p$ in lithium but not in hydrogen?',
        options: ['$p$ orbitals vanish in lithium', 'Relativity reverses all levels', 'Hydrogen lacks neutrons', '$2s$ penetrates to feel larger $Z_{eff}$ under shielding'],
        answer: 3,
        explanation: 'Step 1: Note hydrogenic $n$-only degeneracy. Step 2: Add shielding $Z_{eff} = Z - \\sigma$. Step 3: Give penetrating $2s$ the deeper effective charge.'
      },
      {
        q: 'Real $p_{x}$ and $p_{y}$ arise from:',
        options: ['Averaging over all $m_{l}$ magnitudes', 'Adding and subtracting $Y_{1,+1}$ and $Y_{1,-1}$', 'Squaring the $1s$ function', 'Mixing $2s$ with $3d$'],
        answer: 1,
        explanation: 'Step 1: Recall complex harmonics carry $e^{\\pm i\\phi}$. Step 2: Form sum and difference for cosine and sine azimuth. Step 3: Point the lobes along $x$ and $y$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 16.2
  {
    sectionId: 'chem-ch16-s2',
    readingTime: 10,
    intro: 'Adding electrons brings shielding, the exclusion principle and electron-electron repulsion, so subshells split and configurations need term symbols. Russell-Saunders coupling collects each configuration into terms labelled by total orbital and spin momenta. This section builds configurations, Hund ordering and full term symbols with levels.',
    objectives: [
      'Write ground configurations using penetration order and the exclusion principle',
      'Derive Russell-Saunders terms for equivalent electrons with Clebsch-Gordan series',
      'Order terms by Hund rules and attach spin-orbit levels'
    ],
    concepts: [
      {
        term: 'Shielding and the building-up order',
        kind: 'definition',
        statement: 'Each electron feels **effective charge** `Zeff` as $Z_{eff} = Z - \\sigma$, and penetration $ns < np$ energy splitting plus the $4s$-below-$3d$ crossover fix the filling sequence up to the $d$ block.',
        detail: 'Closed shells sum to zero orbital and spin momentum, so only open-shell electrons enter term analysis. Hartree-Fock radial groupings visualise the shell structure.'
      },
      {
        term: 'Pauli principle for identical fermions',
        kind: 'law',
        statement: 'The **Pauli principle** `antisymmetric` demands sign change under fermion label exchange, so no two electrons share all four quantum numbers and lithium third electron must leave $1s^{2}$ for $2s$.',
        detail: 'Parallel-spin electrons gain a Fermi hole that lowers repulsion, which is the physical root of Hund first rule. Bosons contrast by keeping sign.'
      },
      {
        term: 'Russell-Saunders terms from L and S',
        kind: 'theorem',
        statement: 'Coupling $l_{1}$ and $l_{2}$ gives **total momenta** `L,S` with $L = l_{1}+l_{2}, \\ldots, |l_{1}-l_{2}|$ and $S = s_{1}+s_{2}, \\ldots, |s_{1}-s_{2}|$, so $p^{2}$ yields $^{1}S + ^{1}D + ^{3}P$ before ordering.',
        detail: 'Uppercase $S, P, D, F$ encode $L = 0, 1, 2, 3$ exactly as lowercase letters encode $l$. Only the open subshell needs coupling.'
      },
      {
        term: 'Hund rules for term ordering',
        kind: 'law',
        statement: 'The **Hund ordering** `Hund` ranks highest multiplicity first, then highest $L$ among those, then lowest $J$ for less-than-half shells and highest $J$ beyond half-filling.',
        detail: 'For $p^{2}$ the ground term is $^{3}P_{0}$: triplet beats singlets, then $J = 0$ wins below half-filling. Spin correlation, not orbital mechanics, drives the first rule.'
      },
      {
        term: 'Term symbols with spin-orbit levels',
        kind: 'notation',
        statement: 'A full **term symbol** `2S+1LJ` reads $^{2S+1}L_{J}$ with multiplicity $2S+1$ and $J = L+S, \\ldots, |L-S|$, so $[Ne]3p^{1}$ splits into $^{2}P_{3/2}$ above $^{2}P_{1/2}$ with $j = l \\pm \\tfrac{1}{2}$.',
        detail: 'Single $s$ electrons give lone $^{2}S_{1/2}$ levels since $l = 0$ carries no orbital momentum. Level gaps scale as $Z^{4}$, tiny in hydrogen but thousands of reciprocal centimetres in lead.'
      }
    ],
    figures: [
      {
        caption: 'Terms of $p^{2}$: Coulomb repulsion splits $^{3}P$, $^{1}D$, $^{1}S$, and spin-orbit coupling fans $^{3}P$ into $J = 2, 1, 0$ with $^{3}P_{0}$ lowest.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Term splitting diagram for a p2 configuration into singlet and triplet terms with J levels"><line x1="120" y1="90" x2="120" y2="300" stroke="currentColor" stroke-width="2"/><text x="90" y="70" font-size="15" fill="currentColor">E</text><line x1="200" y1="230" x2="320" y2="230" stroke="currentColor" stroke-width="3"/><text x="250" y="220" text-anchor="middle" font-size="14" fill="currentColor">3P ground</text><line x1="380" y1="190" x2="500" y2="190" stroke="currentColor" stroke-width="3"/><text x="440" y="180" text-anchor="middle" font-size="14" fill="currentColor">1D</text><line x1="380" y1="130" x2="500" y2="130" stroke="currentColor" stroke-width="3"/><text x="440" y="120" text-anchor="middle" font-size="14" fill="currentColor">1S top</text><line x1="560" y1="252" x2="660" y2="252" stroke="currentColor" stroke-width="2.5"/><text x="610" y="268" text-anchor="middle" font-size="13" fill="currentColor">J=0</text><line x1="560" y1="238" x2="660" y2="238" stroke="currentColor" stroke-width="2.5"/><text x="610" y="234" text-anchor="middle" font-size="13" fill="currentColor">J=1</text><line x1="560" y1="224" x2="660" y2="224" stroke="currentColor" stroke-width="2.5"/><text x="610" y="220" text-anchor="middle" font-size="13" fill="currentColor">J=2</text><path d="M320,230 C420,230 460,240 560,240" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><text x="430" y="262" font-size="13" fill="currentColor">spin-orbit fan</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Terms of the carbon ground configuration',
        problem: 'Find all Russell-Saunders terms of $1s^{2}2s^{2}2p^{2}$ and identify the ground level.',
        steps: [
          { label: 'Step 1', text: 'Drop closed $1s^{2}2s^{2}$ since closed shells contribute $L = 0$, $S = 0$:\n```text\nopen shell: p^2 only\nL = 2,1,0 ; S = 1,0\nterms: 3P + 1D + 1S\n```\nCouple $l_{1} = l_{2} = 1$ through the Clebsch-Gordan series.' },
          { label: 'Step 2', text: 'Apply Hund first rule: the triplet $^{3}P$ lies lowest, then $^{1}D$, then $^{1}S$ highest by repulsion differences.' },
          { label: 'Step 3', text: 'Split $^{3}P$ with $L = 1$, $S = 1$ into $J = 2, 1, 0$; less-than-half filling puts $^{3}P_{0}$ at the bottom.' }
        ],
        result: 'Terms $^{3}P + ^{1}D + ^{1}S$ with ground level $^{3}P_{0}$.'
      },
      {
        title: 'Reading a doublet term symbol',
        problem: 'A sodium-like centre is labelled $^{2}P_{3/2}$. Decode every piece and state its spin-orbit partner.',
        steps: [
          { label: 'Step 1', text: 'Letter $P$ means $L = 1$; superscript $2$ means $2S+1 = 2$ so $S = \\tfrac{1}{2}$; subscript $3/2$ is $J$.' },
          { label: 'Step 2', text: 'Reconstruct $l = 1$ single electron with $j = l + \\tfrac{1}{2}$, parallel spin and orbital momenta giving the upper level.' },
          { label: 'Step 3', text: 'Name the partner $^{2}P_{1/2}$ with $j = l - \\tfrac{1}{2}$; their gap is the doublet fine-structure splitting.' }
        ],
        result: '$^{2}P_{3/2}$ is the upper spin-orbit level of a $^{2}P$ term; $^{2}P_{1/2}$ is its partner.'
      }
    ],
    keyTakeaways: [
      '$Z_{eff} = Z - \\sigma$ with penetration order sets configuration filling.',
      '$p^{2}$ couples to $^{1}S + ^{1}D + ^{3}P$ via $L$ and $S$ series.',
      'Hund rules rank multiplicity, then $L$, then $J$ by shell filling.',
      '$^{2S+1}L_{J}$ with $J = L+S, \\ldots, |L-S|$ labels every spin-orbit level.'
    ],
    quiz: [
      {
        q: 'Ground term of nitrogen $2p^{3}$ is:',
        options: ['$^{2}D$', '$^{4}S$', '$^{2}P$', '$^{1}S$'],
        answer: 1,
        explanation: 'Step 1: Maximize spin with three parallel electrons, $S = 3/2$. Step 2: Symmetric $p^{3}$ half-shell gives $L = 0$. Step 3: Multiplicity $4$ yields $^{4}S$.'
      },
      // PYQ-pattern: Hund ordering drill
      {
        q: 'For $p^{2}$, the correct energy order is:',
        options: ['$^{3}P < ^{1}D < ^{1}S$', '$^{1}D < ^{3}P < ^{1}S$', 'All three degenerate', '$^{1}S < ^{1}D < ^{3}P$'],
        answer: 0,
        explanation: 'Step 1: Apply Hund first rule for the triplet lowest. Step 2: Rank singlets by $L$, $D$ below $S$. Step 3: Confirm $^{3}P_{0}$ as the ground level.'
      },
      {
        q: 'Multiplicity $2S+1 = 1$ means:',
        options: ['Three parallel spins', 'No electrons present', 'One unpaired electron', 'All spins paired, a singlet'],
        answer: 3,
        explanation: 'Step 1: Solve $2S+1 = 1$ for $S = 0$. Step 2: Zero net spin needs full pairing. Step 3: Label the term singlet.'
      },
      {
        q: 'Spin-orbit splitting scales with nuclear charge as:',
        options: ['Independent of $Z$', '$Z^{2}$', '$Z^{4}$', '$1/Z$'],
        answer: 2,
        explanation: 'Step 1: Ride with the electron to see nuclear current grow. Step 2: Add closer approach raising the field further. Step 3: Combine into the steep $Z^{4}$ dependence.'
      }
    ]
  },
  // ---------------------------------------------------------------- 16.3
  {
    sectionId: 'chem-ch16-s3',
    readingTime: 8,
    intro: 'Not every jump between terms appears: photon spin and parity filter the possibilities through selection rules. Electric-dipole transitions demand a change of orbital momentum and no spin flip, while violations borrow intensity or proceed by higher multipoles. This section makes allowed versus forbidden a mechanical check.',
    objectives: [
      'Test one-electron and many-electron jumps against orbital and spin rules',
      'Distinguish allowed, spin-forbidden and Laporte-forbidden intensities',
      'Explain how vibronic coupling and spin-orbit mixing lend intensity'
    ],
    concepts: [
      {
        term: 'One-electron orbital rule',
        kind: 'law',
        statement: 'The **orbital rule** `Δl` requires $\\Delta l = \\pm 1$ because the photon carries one unit of angular momentum, so $s \\leftrightarrow p$ and $p \\leftrightarrow d$ shine while $s \\leftrightarrow s$ and $p \\leftrightarrow p$ stay dark.',
        detail: 'Conservation of total angular momentum is the whole reason: the electron must hand the photon spin to the field. Radial overlap then sets the brightness among allowed lines.'
      },
      {
        term: 'Spin and term rules',
        kind: 'law',
        statement: 'Electric-dipole **term rules** `ΔS` demand $\\Delta S = 0$ with $\\Delta L = 0, \\pm 1$ but never $L = 0 \\to 0$, so singlets never jump to triplets and $S \\to S$ is barred.',
        detail: 'Total $\\Delta J = 0, \\pm 1$ except $J = 0 \\to 0$ completes the filter. Spin-orbit coupling relaxes $\\Delta S = 0$ weakly in heavy atoms, lighting faint intercombination lines.'
      },
      {
        term: 'Laporte parity rule',
        kind: 'law',
        statement: 'In centrosymmetric atoms the **Laporte rule** `parity` allows only $g \\leftrightarrow u$ transitions since the dipole operator is ungerade, killing $d \\to d$ until vibrations break the centre.',
        detail: 'Octahedral $d$-$d$ bands are weak precisely for this reason, gaining strength through odd-parity vibrational modes. Tetrahedral centres lacking $i$ absorb far more strongly.'
      },
      {
        term: 'Intensity borrowing mechanisms',
        kind: 'insight',
        statement: 'Forbidden lines steal **borrowed intensity** `borrowing` when spin-orbit mixing blends $S$ character or vibronic coupling blends $g$ with $u$, with magnetic-dipole and electric-quadrupole routes far weaker behind them.',
        detail: 'The sodium $3p \\to 3s$ doublet is fully allowed and intense, while phosphorescence leaks slowly through the spin-orbit crack. Intensity ratios directly report the mixing strength.'
      },
      {
        term: 'Reading Grotrian diagrams',
        kind: 'method',
        statement: 'A **Grotrian diagram** `levels` stacks terms by energy and draws only rule-passing arrows, so the $2P_{3/2} \\to 2S_{1/2}$ and $2P_{1/2} \\to 2S_{1/2}$ pair explains the sodium doublet at a glance.',
        detail: 'Each arrow length encodes the photon wavenumber and each missing arrow encodes a rule. Building the diagram first prevents wasted line assignments.'
      }
    ],
    figures: [
      {
        caption: 'Grotrian pair: both $^{2}P$ levels drop to $^{2}S$ by allowed $\\Delta l = -1$ jumps, giving the sodium $D$-line doublet.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grotrian diagram with two allowed transitions from split P levels to an S level"><line x1="240" y1="140" x2="480" y2="140" stroke="currentColor" stroke-width="3"/><text x="360" y="128" text-anchor="middle" font-size="15" fill="currentColor">2P3/2 upper</text><line x1="240" y1="180" x2="480" y2="180" stroke="currentColor" stroke-width="3"/><text x="360" y="168" text-anchor="middle" font-size="15" fill="currentColor">2P1/2 lower</text><line x1="240" y1="280" x2="480" y2="280" stroke="currentColor" stroke-width="3"/><text x="360" y="305" text-anchor="middle" font-size="15" fill="currentColor">2S1/2 ground</text><line x1="300" y1="140" x2="300" y2="280" stroke="currentColor" stroke-width="2.5"/><polygon points="300,280 294,268 306,268" fill="currentColor"/><text x="250" y="215" font-size="13" fill="currentColor">588.99 nm</text><line x1="420" y1="180" x2="420" y2="280" stroke="currentColor" stroke-width="2.5"/><polygon points="420,280 414,268 426,268" fill="currentColor"/><text x="435" y="235" font-size="13" fill="currentColor">589.59 nm</text><line x1="560" y1="140" x2="560" y2="180" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><text x="575" y="165" font-size="13" fill="currentColor">17 cm-1 gap</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Filtering a candidate line list',
        problem: 'Which of $3s \\to 2p$, $3d \\to 2p$, $3p \\to 3s$, $4s \\to 3s$ are electric-dipole allowed?',
        steps: [
          { label: 'Step 1', text: 'Apply $\\Delta l = \\pm 1$ to each pair:\n```text\n3s->2p: s-p, allowed\n3d->2p: d-p, allowed\n3p->3s: p-s, allowed\n4s->3s: s-s, forbidden\n```\nOnly the $s \\to s$ jump fails the photon-spin test.' },
          { label: 'Step 2', text: 'Confirm spin is untouched in all four, so $\\Delta S = 0$ passes everywhere.' },
          { label: 'Step 3', text: 'Rank expected strength: the three allowed lines intense, the $4s \\to 3s$ line at most a weak two-photon or higher-multipole feature.' }
        ],
        result: 'All allowed except $4s \\to 3s$, which violates $\\Delta l = \\pm 1$.'
      },
      {
        title: 'Why octahedral d-d bands are pale',
        problem: 'Explain the low molar absorptivity of $[Ti(H_{2}O)_{6}]^{3+}$ $d$-$d$ absorption versus charge-transfer bands.',
        steps: [
          { label: 'Step 1', text: 'Note $d \\to d$ is $g \\to g$, Laporte-forbidden in the centrosymmetric octahedron.' },
          { label: 'Step 2', text: 'Invoke odd vibrations that transiently destroy $i$, lending weak $u$ character and faint intensity.' },
          { label: 'Step 3', text: 'Contrast fully $u \\leftrightarrow g$ charge-transfer jumps, allowed and thousands of times stronger.' }
        ],
        result: 'Laporte $g \\to g$ blocking plus weak vibronic rescue explains the pale $d$-$d$ colour.'
      }
    ],
    keyTakeaways: [
      '$\\Delta l = \\pm 1$ spends the photon spin; $s \\leftrightarrow s$ never shines electrically.',
      '$\\Delta S = 0$ with $\\Delta L = 0, \\pm 1$ (not $0 \\to 0$) filters term jumps.',
      'Laporte allows only $g \\leftrightarrow u$ where a centre exists.',
      'Spin-orbit and vibronic mixing lend intensity to formally dark lines.'
    ],
    quiz: [
      {
        q: 'Which jump is electric-dipole allowed?',
        options: ['$2s \\to 1s$', '$2p \\to 1s$', '$3d \\to 2s$ with spin flip', '$4s \\to 3s$'],
        answer: 1,
        explanation: 'Step 1: Test $\\Delta l$ for each pair. Step 2: Keep only $p \\to s$ with unit change. Step 3: Reject spin-flip and $s \\to s$ options.'
      },
      // PYQ-pattern: Laporte rule application
      {
        q: 'Octahedral $[Co(NH_{3})_{6}]^{3+}$ d-d bands are weak because:',
        options: ['$d \\to d$ is $g \\to g$ and Laporte-forbidden', 'Ammonia blocks all light', 'Selection rules never apply to complexes', 'Cobalt has no d electrons'],
        answer: 0,
        explanation: 'Step 1: Assign $g$ parity to all $d$ orbitals. Step 2: Note the dipole operator is $u$. Step 3: Conclude $g \\to g$ needs vibrational rescue.'
      },
      {
        q: 'An $S \\to S$ ($L = 0 \\to 0$) electric-dipole line is:',
        options: ['Allowed for two-electron jumps', 'Independent of angular momentum', 'Always the strongest', 'Forbidden by the $\\Delta L$ clause'],
        answer: 3,
        explanation: 'Step 1: Recall $\\Delta L = 0, \\pm 1$ excludes $0 \\to 0$. Step 2: Check no photon state carries zero change properly. Step 3: Bar the line electrically.'
      },
      {
        q: 'Phosphorescence (triplet to singlet emission) is slow mainly because:',
        options: ['It needs two photons always', 'It violates energy conservation', 'It violates $\\Delta S = 0$ and borrows weak spin-orbit intensity', 'Triplet states cannot emit at all'],
        answer: 2,
        explanation: 'Step 1: Identify the spin flip. Step 2: Apply the $\\Delta S = 0$ rule. Step 3: Attribute the slow rate to faint borrowed intensity.'
      }
    ]
  },
  // ---------------------------------------------------------------- 16.4
  {
    sectionId: 'chem-ch16-s4',
    readingTime: 8,
    intro: 'Electron spin talks to orbital motion through the magnetic fields each generates, splitting every term into fine-structure levels. An external field then fans each level into magnetic substates, which is the Zeeman effect. This section quantifies the coupling, its steep nuclear-charge scaling and the field response.',
    objectives: [
      'Split one-electron terms into j levels and order them by relative orientation',
      'Use the Z-to-fourth scaling to compare fine structure across atoms',
      'Predict Zeeman component counts from J and selection rules'
    ],
    concepts: [
      {
        term: 'Spin-orbit levels from total j',
        kind: 'definition',
        statement: 'One electron gives **total momentum** `j` with $j = l + \\tfrac{1}{2}$ or $|l - \\tfrac{1}{2}|$, so $p$ splits into $j = 3/2$ high and $j = 1/2$ low while $s$ stays a lone $j = \\tfrac{1}{2}$.',
        detail: 'Parallel spin and orbital momenta raise the energy; opposed momenta lower it through magnetic-moment alignment. The $j$ value labels each fine-structure level.'
      },
      {
        term: 'Steep nuclear-charge scaling',
        kind: 'law',
        statement: 'The **coupling strength** `Z4` grows as $Z^{4}$ because heavier nuclei both drive larger orbital currents and pull electrons closer, moving shifts from $0.4$ cm$^{-1}$ in hydrogen to thousands in lead.',
        detail: 'Sodium $3p$ splits by only $17$ cm$^{-1}$ into the $D$ doublet, a mid-table preview of the heavy-atom regime where $jj$-coupling replaces Russell-Saunders labels.'
      },
      {
        term: 'Sodium D-line doublet',
        kind: 'theorem',
        statement: 'The **D lines** `D-lines` at $588.99$ nm and $589.59$ nm are $^{2}P_{3/2} \\to ^{2}S_{1/2}$ and $^{2}P_{1/2} \\to ^{2}S_{1/2}$, jointly the fine-structure fingerprint of one $p$ electron.',
        detail: 'Both upper levels are thermally populated in flames and discharges, so the yellow glow is always a doublet under resolution. Wavenumber gap $17.2$ cm$^{-1}$ converts directly to the $3p$ spin-orbit constant.'
      },
      {
        term: 'Zeeman fanning in a field',
        kind: 'law',
        statement: 'A field $B$ shifts each **magnetic substate** `mJ` by $\\Delta E = g_{J}\\mu_{B}Bm_{J}$, fanning level $J$ into $2J+1$ components with $\\Delta m_{J} = 0, \\pm 1$ for allowed jumps.',
        detail: 'Normal Zeeman triplets appear when spin is zero; anomalous patterns with more components flag $S \\neq 0$. Level-crossing and optical pumping exploit these fans.'
      },
      {
        term: 'From Russell-Saunders toward jj',
        kind: 'insight',
        statement: 'Light atoms couple **L with S first** `coupling` then add spin-orbit as perturbation, but heavy atoms couple each $l$ with its own $s$ into $j$ first, keeping Russell-Saunders symbols as convenience labels only.',
        detail: 'Selection-rule violations grow with $Z$ as $S$ mixing strengthens. Reading heavy-atom spectra means tracking $J$ while expecting $\\Delta S = 0$ leaks.'
      }
    ],
    figures: [
      {
        caption: 'Zeeman fan: a $J = 1$ level splits into $m_{J} = -1, 0, +1$ branches linear in $B$, with $\\Delta m_{J} = 0, \\pm 1$ jumps.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Zeeman splitting of a J equals 1 level into three magnetic components"><line x1="90" y1="60" x2="90" y2="310" stroke="currentColor" stroke-width="2"/><text x="60" y="330" font-size="14" fill="currentColor">B=0</text><text x="600" y="330" font-size="14" fill="currentColor">B large</text><circle cx="90" cy="180" r="6" fill="currentColor"/><text x="105" y="185" font-size="14" fill="currentColor">J=1</text><line x1="90" y1="180" x2="620" y2="100" stroke="currentColor" stroke-width="2.5"/><text x="630" y="100" font-size="14" fill="currentColor">m=+1</text><line x1="90" y1="180" x2="620" y2="180" stroke="currentColor" stroke-width="2.5"/><text x="630" y="184" font-size="14" fill="currentColor">m=0</text><line x1="90" y1="180" x2="620" y2="260" stroke="currentColor" stroke-width="2.5"/><text x="630" y="264" font-size="14" fill="currentColor">m=-1</text><line x1="300" y1="120" x2="300" y2="240" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><text x="285" y="260" font-size="13" fill="currentColor">fan opens with B</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Splitting the sodium 3p term',
        problem: 'The sodium $3p$ spin-orbit gap is $17.2$ cm$^{-1}$. Order the levels and compute the D-line separation in nm near $589$ nm.',
        steps: [
          { label: 'Step 1', text: 'Assign $j = 3/2$ upper (parallel) and $j = 1/2$ lower (opposed) with $\\Delta\\tilde{\\nu} = 17.2$ cm$^{-1}$:\n```text\nupper: 2P3/2, E higher by 17.2 cm-1\nlower: 2P1/2\nboth -> 2S1/2 ground\n```\nBoth drops are $\\Delta l = -1$ allowed.' },
          { label: 'Step 2', text: 'Convert differentially: $\\Delta\\lambda \\approx \\lambda^{2}\\Delta\\tilde{\\nu} = (589 \\times 10^{-9})^{2} \\times 1720$ m$^{-1}$.' },
          { label: 'Step 3', text: 'Evaluate $\\Delta\\lambda \\approx 0.60$ nm, matching $589.59 - 588.99$ nm.' }
        ],
        result: 'Doublet split by $17.2$ cm$^{-1}$ ($0.60$ nm): $^{2}P_{3/2}$ gives $588.99$ nm, $^{2}P_{1/2}$ gives $589.59$ nm.'
      },
      {
        title: 'Counting Zeeman components',
        problem: 'A $^{3}P_{1} \\to ^{3}S_{1}$-type jump is placed in a weak field. How many lines appear?',
        steps: [
          { label: 'Step 1', text: 'Fan each $J = 1$ level into $2J+1 = 3$ substates $m_{J} = -1, 0, +1$.' },
          { label: 'Step 2', text: 'Allow $\\Delta m_{J} = 0, \\pm 1$: nine pairings collapse by equal spacing into three groups $\\pi$ and $\\sigma^{\\pm}$.' },
          { label: 'Step 3', text: 'Report the normal triplet, polarized parallel ($\\pi$) and perpendicular ($\\sigma$) to the field.' }
        ],
        result: 'Three Zeeman components: unshifted $\\pi$ plus symmetrically shifted $\\sigma$ pair.'
      }
    ],
    keyTakeaways: [
      '$j = l \\pm \\tfrac{1}{2}$ splits each term; parallel lies above opposed.',
      'Spin-orbit gaps scale as $Z^{4}$ from hydrogen to lead.',
      'Sodium $D$ lines at $588.99$ and $589.59$ nm mark $^{2}P_{3/2}$ and $^{2}P_{1/2}$ drops.',
      '$B$ fans $J$ into $2J+1$ substates with $\\Delta m_{J} = 0, \\pm 1$.'
    ],
    quiz: [
      {
        q: 'A $p$ electron gives fine-structure levels:',
        options: ['$j = 3/2$ only', '$j = 3/2$ and $j = 1/2$', '$j = 1/2$ only', 'No splitting at all'],
        answer: 1,
        explanation: 'Step 1: Add $l = 1$ and $s = \\tfrac{1}{2}$. Step 2: Form parallel and opposed totals. Step 3: List both $j$ values.'
      },
      // PYQ-pattern: Z-scaling comparison
      {
        q: 'Hydrogen $2p$ splits by $0.4$ cm$^{-1}$. A hydrogenic ion with $Z = 4$ splits roughly by:',
        options: ['$1.6$ cm$^{-1}$', '$0.4 \\times 4^{4} = 102$ cm$^{-1}$', '$0.4/4$ cm$^{-1}$', '$0.4$ cm$^{-1}$ unchanged'],
        answer: 1,
        explanation: 'Step 1: Recall the $Z^{4}$ rule for hydrogenic scaling. Step 2: Compute $4^{4} = 256$. Step 3: Multiply $0.4 \\times 256$ for about $102$ cm$^{-1}$.'
      },
      {
        q: 'In a field, a $J = 2$ level yields:',
        options: ['$5$ substates', '$1$ substate', '$2$ substates', '$3$ substates'],
        answer: 0,
        explanation: 'Step 1: Apply the $2J+1$ count. Step 2: Insert $J = 2$. Step 3: List $m_{J} = -2$ through $+2$.'
      },
      {
        q: 'Heavy-atom spectra keep Russell-Saunders symbols as:',
        options: ['Proof of $\\Delta S = 0$ strictness', 'Exact quantum numbers', 'Convenience labels while $jj$-coupling rules', 'Banned notation'],
        answer: 2,
        explanation: 'Step 1: Note spin-orbit rivals repulsion for large $Z$. Step 2: Couple $l$ with $s$ per electron first. Step 3: Retain old symbols only for continuity.'
      }
    ]
  }
]
