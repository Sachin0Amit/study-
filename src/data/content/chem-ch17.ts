import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 17: Molecular Structure and Symmetry (Atkins Foci 9-10)
// Sections 17.1 - 17.4. Master study content in Atkins language.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh17Content: SectionContent[] = [
  // ---------------------------------------------------------------- 17.1
  {
    sectionId: 'chem-ch17-s1',
    readingTime: 9,
    intro: 'Molecular orbitals grow by adding atomic orbitals in phase and out of phase, and the balance of electrons in bonding versus antibonding combinations fixes bond order, length and magnetism. Overlap and energy matching decide how strongly each pair mixes. This section builds the LCAO ladder from the hydrogen molecule-ion to second-period diatomics.',
    objectives: [
      'Build bonding and antibonding orbitals from overlap signs and count bond order',
      'Predict magnetism and bond trends across Li-two to Ne-two from configurations',
      'Explain s-p mixing and read photoelectron band positions from orbital energies'
    ],
    concepts: [
      {
        term: 'LCAO bonding and antibonding pair',
        kind: 'definition',
        statement: 'Each **molecular orbital** `MO` is $\\psi = c_{A}\\phi_{A} + c_{B}\\phi_{B}$, with in-phase overlap piling density between nuclei (bonding, energy down) and out-of-phase overlap inserting a node (antibonding, energy up).',
        detail: 'Overlap integral $S$ and resonance integral $\\beta$ set the split: big $S$ with matched energies gives deep bonding and high antibonding partners. Zero net overlap makes a nonbonding orbital.'
      },
      {
        term: 'Bond order and its consequences',
        kind: 'theorem',
        statement: 'The **bond order** `BO` is $b = (N_{b} - N_{a})/2$, so $H_{2}$ with $(\\sigma_{g1s})^{2}$ has $b = 1$ while $He_{2}$ with $(\\sigma_{g1s})^{2}(\\sigma_{u1s}^{*})^{2}$ cancels to $b = 0$ and does not bind.',
        detail: 'Higher $b$ shortens and stiffens bonds: $N_{2}$ at $b = 3$ is short and strong, $O_{2}$ at $b = 2$ is longer and weaker. Fractional orders appear in ions like $O_{2}^{+}$ with $b = 2.5$.'
      },
      {
        term: 'Sigma-pi labelling and parity',
        kind: 'notation',
        statement: 'Cylindrical **symmetry labels** `σπ` call $\\lambda = 0$ orbitals $\\sigma$ and $|\\lambda| = 1$ orbitals $\\pi$, with $g$ even and $u$ odd under inversion, written $\\sigma_{g}$, $\\sigma_{u}^{*}$, $\\pi_{u}$, $\\pi_{g}^{*}$ in order.',
        detail: 'Stars flag antibonding character at a glance. Heteronuclear diatomics lose $g$ and $u$ but keep $\\sigma$ and $\\pi$ from axial symmetry.'
      },
      {
        term: 'Second-period configurations and magnetism',
        kind: 'law',
        statement: 'Filling $(\\sigma_{g2s})(\\sigma_{u2s}^{*})(\\pi_{u2p})(\\sigma_{g2p})(\\pi_{g2p}^{*})$ with **s-p mixing** `mixing` below $O_{2}$ flips $\\pi_{u}$ under $\\sigma_{g2p}$, giving $B_{2}$ and $O_{2}$ two unpaired electrons each and paramagnetism.',
        detail: 'Valence-bond theory cannot explain $O_{2}$ paramagnetism, but half-filled degenerate $\\pi_{g}^{*}$ pairs do it immediately. $N_{2}$ with all shells closed is diamagnetic with the great $b = 3$ strength.'
      },
      {
        term: 'Photoelectron reading of orbital energies',
        kind: 'method',
        statement: 'A **photoelectron spectrum** `PES` plots ion counts against ionization energy $I = h\\nu - E_{k}$, and each band edge reads one orbital energy, confirming for $N_{2}$ that $\\sigma_{g2p}$ lies above $\\pi_{u2p}$ by mixing.',
        detail: 'Vibrational fine structure on a band reports the ion bonding change: short progressions mean nonbonding ejection, long ones mean bonding or antibonding ejection. Helium lamp lines fix $h\\nu$.'
      }
    ],
    figures: [
      {
        caption: 'MO ladder of $H_{2}$: two $1s$ orbitals split into $\\sigma_{g1s}$ below and $\\sigma_{u1s}^{*}$ above, both electrons bonding for $b = 1$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Molecular orbital diagram of H2 with bonding level filled and antibonding level empty"><line x1="150" y1="150" x2="150" y2="280" stroke="currentColor" stroke-width="2"/><line x1="570" y1="150" x2="570" y2="280" stroke="currentColor" stroke-width="2"/><text x="150" y="305" text-anchor="middle" font-size="14" fill="currentColor">1s(A)</text><text x="570" y="305" text-anchor="middle" font-size="14" fill="currentColor">1s(B)</text><line x1="130" y1="215" x2="170" y2="215" stroke="currentColor" stroke-width="3"/><line x1="550" y1="215" x2="590" y2="215" stroke="currentColor" stroke-width="3"/><line x1="310" y1="265" x2="410" y2="265" stroke="currentColor" stroke-width="3"/><text x="360" y="290" text-anchor="middle" font-size="14" fill="currentColor">sigma-g (bonding)</text><line x1="310" y1="130" x2="410" y2="130" stroke="currentColor" stroke-width="3"/><text x="360" y="115" text-anchor="middle" font-size="14" fill="currentColor">sigma-u star</text><line x1="150" y1="215" x2="310" y2="265" stroke="currentColor" stroke-width="1.4"/><line x1="570" y1="215" x2="410" y2="265" stroke="currentColor" stroke-width="1.4"/><line x1="150" y1="215" x2="310" y2="130" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><line x1="570" y1="215" x2="410" y2="130" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><polygon points="352,250 348,258 356,258" fill="currentColor"/><polygon points="368,250 364,258 372,258" fill="currentColor"/><text x="360" y="90" text-anchor="middle" font-size="13" fill="currentColor">energy up</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Bond orders across the second period',
        problem: 'Compute $b$ and magnetism for $B_{2}$, $C_{2}$, $N_{2}$ and $O_{2}$ from their MO configurations.',
        steps: [
          { label: 'Step 1', text: 'Fill with s-p mixing order for $B_{2}$ to $N_{2}$ and normal order from $O_{2}$:\n```text\nB2: ... pi-u(2), b = 1, paramagnetic\nC2: ... pi-u(4), b = 2, diamagnetic\nN2: ... + sigma-g(2), b = 3, diamagnetic\nO2: ... pi-g*(2), b = 2, paramagnetic\n```\nCount $(N_{b} - N_{a})/2$ each time.' },
          { label: 'Step 2', text: 'Check magnetism: half-filled degenerate $\\pi$ shells in $B_{2}$ and $\\pi^{*}$ shells in $O_{2}$ leave two parallel spins by Hund rule.' },
          { label: 'Step 3', text: 'Order strengths: $N_{2}$ shortest and strongest, $B_{2}$ weakest bound of the set, matching dissociation data.' }
        ],
        result: '$b = 1, 2, 3, 2$ with $B_{2}$ and $O_{2}$ paramagnetic, $C_{2}$ and $N_{2}$ diamagnetic.'
      },
      {
        title: 'Why He-two does not exist',
        problem: 'Show from orbitals that $He_{2}$ has no net bond while $He_{2}^{+}$ is weakly bound.',
        steps: [
          { label: 'Step 1', text: 'Write $He_{2}$ as $(\\sigma_{g1s})^{2}(\\sigma_{u1s}^{*})^{2}$: $N_{b} = 2$, $N_{a} = 2$, so $b = 0$.' },
          { label: 'Step 2', text: 'Remove one antibonding electron for $He_{2}^{+}$: $b = (2 - 1)/2 = 0.5$, a weak half bond observed spectroscopically.' },
          { label: 'Step 3', text: 'Generalize: bond order, not electron count alone, decides binding.' }
        ],
        result: '$b = 0$ forbids $He_{2}$; $b = 0.5$ permits fragile $He_{2}^{+}$.'
      }
    ],
    keyTakeaways: [
      '$\\psi = c_{A}\\phi_{A} + c_{B}\\phi_{B}$ splits into bonding (density in) and antibonding (node between).',
      '$b = (N_{b} - N_{a})/2$ predicts existence, length, strength and magnetism.',
      's-p mixing reorders $\\pi_{u}$ below $\\sigma_{g2p}$ for $B_{2}$ through $N_{2}$.',
      'Photoelectron bands read orbital energies via $I = h\\nu - E_{k}$.'
    ],
    quiz: [
      {
        q: 'Bond order of $O_{2}^{+}$ is:',
        options: ['$1$', '$1.5$', '$2.5$', '$3$'],
        answer: 2,
        explanation: 'Step 1: Start from $O_{2}$ with $b = 2$. Step 2: Remove one $\\pi_{g}^{*}$ antibonding electron. Step 3: Recompute $(10 - 5)/2 = 2.5$.'
      },
      // PYQ-pattern: magnetism prediction drill
      {
        q: '$B_{2}$ is paramagnetic because:',
        options: ['Two electrons half-fill degenerate $\\pi_{u}$ orbitals with parallel spins', 'Boron is a metal', 'All diatomics are paramagnetic', 'It has an odd electron count'],
        answer: 0,
        explanation: 'Step 1: Write the mixed configuration ending in $\\pi_{u}^{2}$. Step 2: Apply Hund rule to the degenerate pair. Step 3: Count two unpaired parallel spins.'
      },
      {
        q: 's-p mixing matters when:',
        options: ['Only for noble gases', 'Never in homonuclear molecules', 'Always, for every molecule', '$2s$-$2p$ gaps are small, reordering $\\pi_{u}$ below $\\sigma_{g2p}$ in early second-period diatomics'],
        answer: 3,
        explanation: 'Step 1: Compare $2s$ and $2p$ energy gaps along the period. Step 2: Mix strongly where the gap is small. Step 3: Flip the order for $B_{2}$ through $N_{2}$ only.'
      },
      {
        q: 'A long vibrational progression on a photoelectron band means the ejected electron was:',
        options: ['Unrelated to bonding', 'Nonbonding', 'Bonding or antibonding, reshaping the ion', 'A core $1s$ electron always'],
        answer: 2,
        explanation: 'Step 1: Link geometry change to vibrational excitation. Step 2: Note nonbonding ejection barely moves nuclei. Step 3: Assign long progressions to bonding shifts.'
      }
    ]
  },
  // ---------------------------------------------------------------- 17.2
  {
    sectionId: 'chem-ch17-s2',
    readingTime: 8,
    intro: 'Conjugated pi systems delocalize over the whole carbon frame, and the Hückel method captures their pattern with just two parameters. Three approximations turn the secular determinant into a solvable ladder. This section solves the allyl and butadiene prototypes and states the aromaticity rule they imply.',
    objectives: [
      'State the three Hückel approximations and the meaning of alpha and beta',
      'Solve three- and four-centre pi ladders and fill them by Aufbau',
      'Apply the four-n-plus-two rule and delocalization energy to stability calls'
    ],
    concepts: [
      {
        term: 'Hückel approximations',
        kind: 'definition',
        statement: 'The **Hückel model** `Hückel` sets overlap $S = 0$, keeps resonance $\\beta$ only for neighbours, and gives every carbon the same Coulomb $\\alpha$, turning $\\pi$ Hamiltonians into tridiagonal determinants.',
        detail: 'Energies then read $E = \\alpha + m\\beta$ with topological numbers $m$ from the carbon skeleton. One $\\beta$ fits a whole family of hydrocarbons.'
      },
      {
        term: 'Allyl three-level ladder',
        kind: 'theorem',
        statement: 'The allyl **pi ladder** `allyl` is $E = \\alpha + \\sqrt{2}\\beta$, $\\alpha$, $\\alpha - \\sqrt{2}\\beta$, with the nonbonding middle level noding on the central carbon.',
        detail: 'Cation, radical and anion all share the ladder and differ only in middle-level occupancy. Delocalization spreads charge over both ends equally.'
      },
      {
        term: 'Butadiene four-level ladder',
        kind: 'theorem',
        statement: 'Butadiene **pi levels** `butadiene` sit at $\\alpha \\pm 1.62\\beta$ and $\\alpha \\pm 0.62\\beta$, so four electrons fill two bonding levels for total $E_{\\pi} = 4\\alpha + 4.47\\beta$.',
        detail: 'Against two isolated ethylenes at $4\\alpha + 4\\beta$, the extra $0.47\\beta$ is the delocalization energy. HOMO-LUMO gap $1.24|\\beta|$ sets the long-wavelength absorption.'
      },
      {
        term: 'Aromaticity counting rule',
        kind: 'law',
        statement: 'Cyclic **aromaticity** `4n+2` needs $4n+2$ $\\pi$ electrons in a planar conjugated ring, giving benzene $6$ with deep stabilization while $4$ and $8$ go antiaromatic or distort out of plane.',
        detail: 'Benzene ladder $\\alpha+2\\beta$, degenerate $\\alpha+\\beta$ pair filled, then empty upper pair, explains the closed-shell robustness. Cyclobutadiene rectangularizes to escape the open-shell penalty.'
      },
      {
        term: 'Frontier-orbital reactivity reading',
        kind: 'insight',
        statement: 'Coefficients of **HOMO and LUMO** `frontier` mark reactive atoms, since large same-sign lobes bond together in cycloadditions and large HOMO density invites electrophiles.',
        detail: 'Diels-Alder matching pairs diene HOMO with dienophile LUMO by lobe size and phase. This is the bridge from Hückel numbers to pericyclic selection rules.'
      }
    ],
    figures: [
      {
        caption: 'Allyl $\\pi$ ladder: bonding, nonbonding and antibonding levels with $\\beta$ units marked and two electrons in the cation shown.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Huckel energy level diagram of the allyl system with three levels"><line x1="90" y1="60" x2="90" y2="310" stroke="currentColor" stroke-width="2"/><text x="60" y="50" font-size="15" fill="currentColor">E</text><line x1="220" y1="250" x2="420" y2="250" stroke="currentColor" stroke-width="3"/><text x="430" y="254" font-size="14" fill="currentColor">alpha + 1.41 beta</text><polygon points="300,240 296,248 304,248" fill="currentColor"/><polygon points="340,240 336,248 344,248" fill="currentColor"/><line x1="220" y1="185" x2="420" y2="185" stroke="currentColor" stroke-width="3"/><text x="430" y="189" font-size="14" fill="currentColor">alpha (nonbonding)</text><line x1="220" y1="120" x2="420" y2="120" stroke="currentColor" stroke-width="3"/><text x="430" y="124" font-size="14" fill="currentColor">alpha - 1.41 beta</text><line x1="500" y1="250" x2="500" y2="120" stroke="currentColor" stroke-width="1.6"/><polygon points="500,120 495,130 505,130" fill="currentColor"/><polygon points="500,250 495,240 505,240" fill="currentColor"/><text x="515" y="190" font-size="13" fill="currentColor">2.82 beta span</text><text x="220" y="300" font-size="13" fill="currentColor">nodes: 0, 1, 2 bottom to top</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Delocalization energy of butadiene',
        problem: 'Compute the Hückel $\\pi$ energy of butadiene and its stabilization over two ethylenes.',
        steps: [
          { label: 'Step 1', text: 'Fill the ladder bottom-up with four electrons:\n```text\nlevels: a+1.62b (2e), a+0.62b (2e)\nE-pi = 4a + 4.47b\n2 x ethylene = 4a + 4b\n```\nGround configuration is closed-shell.' },
          { label: 'Step 2', text: 'Subtract: $\\Delta E = 0.47\\beta$, negative since $\\beta < 0$, a genuine stabilization.' },
          { label: 'Step 3', text: 'Quote per electron or per bond as needed; the sign convention $\\beta < 0$ must be stated with the number.' }
        ],
        result: '$E_{\\pi} = 4\\alpha + 4.47\\beta$, stabilized by $0.47\\beta$ over two isolated double bonds.'
      },
      {
        title: 'Aromaticity calls for ring ions',
        problem: 'Classify benzene, cyclobutadiene and cyclopentadienyl anion by the Hückel rule.',
        steps: [
          { label: 'Step 1', text: 'Count cyclic $\\pi$ electrons: benzene $6$, cyclobutadiene $4$, $C_{5}H_{5}^{-}$ $6$ (four from double bonds plus two from the carbanion centre).' },
          { label: 'Step 2', text: 'Test $4n+2$: $6$ fits $n = 1$, $4$ misses and goes antiaromatic.' },
          { label: 'Step 3', text: 'Predict benzene and $C_{5}H_{5}^{-}$ stabilized and planar, cyclobutadiene distorted and reactive.' }
        ],
        result: 'Benzene and $C_{5}H_{5}^{-}$ aromatic; cyclobutadiene antiaromatic.'
      }
    ],
    keyTakeaways: [
      'Hückel uses $S = 0$, neighbour-only $\\beta$ and uniform $\\alpha$ for $E = \\alpha + m\\beta$.',
      'Allyl spans $\\alpha \\pm \\sqrt{2}\\beta$ about a central-noded nonbonding level.',
      'Butadiene gains $0.47\\beta$ delocalization over two ethylenes.',
      '$4n+2$ planar cyclic $\\pi$ electrons mark aromatic stabilization.'
    ],
    quiz: [
      {
        q: 'Which is NOT a Hückel approximation?',
        options: ['Neglect overlap $S = 0$', 'Resonance $\\beta$ for neighbours only', 'Uniform Coulomb $\\alpha$', 'Exact all-electron repulsion integrals'],
        answer: 3,
        explanation: 'Step 1: List the three stated simplifications. Step 2: Spot the exact-integral option as foreign. Step 3: Reject it; Hückel is topological by design.'
      },
      // PYQ-pattern: aromaticity count drill
      {
        q: 'Cycloheptatrienyl cation $C_{7}H_{7}^{+}$ with $6$ cyclic pi electrons is:',
        options: ['Aromatic by $4n+2$ with $n = 1$', 'Non-conjugated', 'A radical dimer', 'Antiaromatic'],
        answer: 0,
        explanation: 'Step 1: Count $6$ delocalized electrons over the ring. Step 2: Fit $6 = 4n+2$ with $n = 1$. Step 3: Assign aromatic stabilization.'
      },
      {
        q: 'Allyl anion places its extra electrons in:',
        options: ['A sigma framework orbital', 'A metal d orbital', 'The antibonding top level', 'The nonbonding middle level'],
        answer: 3,
        explanation: 'Step 1: Fill bonding first with two electrons. Step 2: Put the pair into the $\\alpha$ level. Step 3: Note the centre node keeps charge on the ends.'
      },
      {
        q: 'Butadiene HOMO-LUMO gap in Hückel units is:',
        options: ['$3.24|\\beta|$', '$0.62|\\beta|$', '$1.24|\\beta|$', '$2.00|\\beta|$'],
        answer: 2,
        explanation: 'Step 1: Identify HOMO at $\\alpha + 0.62\\beta$. Step 2: Identify LUMO at $\\alpha - 0.62\\beta$. Step 3: Subtract for $1.24|\\beta|$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 17.3
  {
    sectionId: 'chem-ch17-s3',
    readingTime: 9,
    intro: 'Symmetry compresses molecular shape into a point-group symbol that predicts polarity, chirality and spectroscopic activity. Five kinds of operations generate every group, and a flow chart assigns the symbol mechanically. This section works the assignment procedure on the standard small molecules.',
    objectives: [
      'Name the five symmetry operations and their elements',
      'Run the flow-chart assignment for common molecules without guessing',
      'Infer polarity and chirality directly from the assigned group'
    ],
    concepts: [
      {
        term: 'The five symmetry operations',
        kind: 'definition',
        statement: 'Every **symmetry operation** `operations` is one of $E$, $C_{n}$ rotation, $\\sigma$ reflection, $i$ inversion or $S_{n}$ improper rotation, each performed against its element of whole object, axis, plane, point or coupled axis.',
        detail: '$CH_{4}$ carries three $S_{4}$ axes while staggered ethane carries $S_{6}$; naphthalene shows $C_{2}$ axes plus $\\sigma_{h}$, $\\sigma_{v}$ planes and $i$. Doing nothing, $E$, belongs to every molecule.'
      },
      {
        term: 'Flow-chart point-group assignment',
        kind: 'method',
        statement: 'The **flow chart** `point group` asks linear, then $i$, then high $C_{n}$ axes, then $\\sigma_{h}$, $\\sigma_{v}$ and $S_{2n}$ in order, landing for instance $H_{2}O$ in $C_{2v}$ and $NH_{3}$ in $C_{3v}$ without ambiguity.',
        detail: 'Highest-order $C_{n}$ becomes principal and $nC_{2}$ perpendiculars decide $D$ versus $C$ families. Ruthenocene with $C_{5}$, five perpendicular $C_{2}$ axes and $\\sigma_{h}$ lands in $D_{5h}$.'
      },
      {
        term: 'Linear and high-symmetry groups',
        kind: 'definition',
        statement: 'Linear molecules take **infinite groups** `inf` as $D_{\\infty h}$ with $i$ like $CO_{2}$ or $C_{\\infty v}$ without it like $HCl$, while tetrahedra, octahedra and icosahedra take $T_{d}$, $O_{h}$ and $I_{h}$.',
        detail: '$CH_{4}$ is $T_{d}$, $SF_{6}$ is $O_{h}$, and $C_{60}$ is $I_{h}$. Linearity is always tested first because it short-circuits the rest of the chart.'
      },
      {
        term: 'Polarity from group membership',
        kind: 'theorem',
        statement: 'Only **polar groups** `polar` $C_{n}$, $C_{nv}$ and $C_{s}$ can host a permanent dipole along the principal axis, so $H_{2}O$ ($C_{2v}$) and $NH_{3}$ ($C_{3v}$) are polar while $CO_{2}$ ($D_{\\infty h}$) and $CH_{4}$ ($T_{d}$) are not.',
        detail: 'Any perpendicular mirror, inversion or $C_{2}$ flip would reverse the dipole, which is why those elements veto polarity. Gas-phase $BeH_{2}$ linearity kills its bond-dipole sum.'
      },
      {
        term: 'Chirality from missing improper operations',
        kind: 'theorem',
        statement: 'A molecule is **chiral** `chiral` exactly when it lacks all $S_{n}$ including $\\sigma$ and $i$, restricting it to $C_{n}$, $D_{n}$, $T$, $O$ or $I$, which is why twisted allenes qualify and planar $BF_{3}$ does not.',
        detail: 'Optical activity needs chirality; $C_{1}$ and $C_{2}$ gauche forms are the common chiral minima. Detecting one mirror plane already rules chirality out.'
      }
    ],
    figures: [
      {
        caption: 'Symmetry elements of $H_{2}O$ ($C_{2v}$): the $C_{2}$ axis plus two vertical mirrors $\\sigma_{v}$ and $\\sigma_{v}^{\\prime}$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Water molecule with its C2 axis and two mirror planes"><line x1="360" y1="40" x2="360" y2="320" stroke="currentColor" stroke-width="2.5"/><text x="372" y="60" font-size="14" fill="currentColor">C2 axis</text><circle cx="360" cy="180" r="26" fill="none" stroke="currentColor" stroke-width="3"/><text x="352" y="188" font-size="15" fill="currentColor">O</text><circle cx="300" cy="250" r="18" fill="none" stroke="currentColor" stroke-width="3"/><text x="293" y="256" font-size="13" fill="currentColor">H</text><circle cx="420" cy="250" r="18" fill="none" stroke="currentColor" stroke-width="3"/><text x="413" y="256" font-size="13" fill="currentColor">H</text><ellipse cx="360" cy="200" rx="120" ry="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><text x="490" y="205" font-size="13" fill="currentColor">molecular plane</text><rect x="250" y="80" width="220" height="34" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="360" y="102" text-anchor="middle" font-size="13" fill="currentColor">second plane through C2, perp</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Assigning water and ammonia',
        problem: 'Find the point groups of $H_{2}O$ and $NH_{3}$ by the flow chart.',
        steps: [
          { label: 'Step 1', text: 'Test linear: both bent, so continue past $D_{\\infty h}$ and $C_{\\infty v}$:\n```text\nH2O: bent, C2 present, no i\nNH3: pyramidal, C3 present, no i\n```\nNeither has a centre of inversion.' },
          { label: 'Step 2', text: 'Count perpendicular $C_{2}$ axes: none for either, so both stay in the $C$ family rather than $D$.' },
          { label: 'Step 3', text: 'Count vertical mirrors: two for $H_{2}O$ giving $C_{2v}$, three for $NH_{3}$ giving $C_{3v}$.' }
        ],
        result: '$H_{2}O$ is $C_{2v}$ and $NH_{3}$ is $C_{3v}$, both polar.'
      },
      {
        title: 'Polarity and chirality calls',
        problem: 'Decide polarity for pyridine, nitroethane, linear $BeH_{2}$ and $B_{2}H_{6}$, and chirality for each.',
        steps: [
          { label: 'Step 1', text: 'Pyridine ($C_{2v}$) and nitroethane (low symmetry) keep axial dipoles: polar. Linear $BeH_{2}$ ($D_{\\infty h}$) cancels: nonpolar.' },
          { label: 'Step 2', text: '$B_{2}H_{6}$ ($D_{2h}$) has $i$ and mirrors: nonpolar despite polar bridges.' },
          { label: 'Step 3', text: 'All four carry $\\sigma$ or $i$, so none is chiral; twisted allene derivatives would be the contrasting chiral case.' }
        ],
        result: 'Pyridine and nitroethane polar; $BeH_{2}$ and $B_{2}H_{6}$ nonpolar; none chiral.'
      }
    ],
    keyTakeaways: [
      'Five operations $E$, $C_{n}$, $\\sigma$, $i$, $S_{n}$ generate every point group.',
      'The flow chart orders linear, $i$, high axes, mirrors and improper tests.',
      'Polar molecules live only in $C_{n}$, $C_{nv}$ or $C_{s}$.',
      'Chirality needs zero $S_{n}$: no mirrors and no inversion.'
    ],
    quiz: [
      {
        q: '$CH_{4}$ belongs to:',
        options: ['$C_{2v}$', '$T_{d}$', '$D_{\\infty h}$', '$C_{s}$'],
        answer: 1,
        explanation: 'Step 1: Find four $C_{3}$ axes through bonds. Step 2: Note three $S_{4}$ axes and mirrors. Step 3: Assign the tetrahedral group $T_{d}$.'
      },
      // PYQ-pattern: polarity from group drill
      {
        q: 'Which molecule must be nonpolar?',
        options: ['$H_{2}O$ ($C_{2v}$)', '$CO_{2}$ ($D_{\\infty h}$)', 'Pyridine ($C_{2v}$)', '$NH_{3}$ ($C_{3v}$)'],
        answer: 1,
        explanation: 'Step 1: Check each group for dipole permission. Step 2: Give $D_{\\infty h}$ an inversion centre. Step 3: Cancel the bond dipoles in $CO_{2}$.'
      },
      {
        q: 'A molecule with a mirror plane cannot be:',
        options: ['Coloured', 'Volatile', 'Polar', 'Chiral'],
        answer: 3,
        explanation: 'Step 1: Recall $\\sigma$ is $S_{1}$. Step 2: Apply the chirality rule needing no $S_{n}$. Step 3: Rule chirality out immediately.'
      },
      {
        q: 'Staggered ethane carries $S_{6}$ because:',
        options: ['It has an inversion double bond', 'It has six atoms total', 'A $60^{\\circ}$ rotation plus perpendicular reflection superimposes it', 'It is linear'],
        answer: 2,
        explanation: 'Step 1: Rotate by $360^{\\circ}/6$ about the $C$-$C$ axis. Step 2: Reflect through the perpendicular plane. Step 3: Observe self-superposition defining $S_{6}$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 17.4
  {
    sectionId: 'chem-ch17-s4',
    readingTime: 9,
    intro: 'Character tables compress group theory into rows of plus and minus ones that label every orbital and vibration. Matching the characters of a combination to a table row names its symmetry species. This section reads $C_{2v}$ and $C_{3v}$ tables the way Atkins Topics 10B and 10C use them.',
    objectives: [
      'Look up irreps and basis functions in a printed character table',
      'Assign symmetry species to orbital combinations by character matching',
      'Test electric-dipole transitions with direct-product rules'
    ],
    concepts: [
      {
        term: 'Anatomy of a character table',
        kind: 'definition',
        statement: 'Each **character table** `table` lists classes across the top, irreducible rows labelled $A$, $B$, $E$, $T$ for dimensions $1$, $1$, $2$, $3$, plus basis functions $x$, $y$, $z$ and rotations on the right.',
        detail: 'Subscripts $1$ and $2$ track behaviour under the principal $C_{n}$; primes track $\\sigma_{h}$. The identity column entry equals the degeneracy dimension.'
      },
      {
        term: 'Assigning orbital species by characters',
        kind: 'method',
        statement: 'A combination earns **symmetry species** `species` by recording $+1$ (unchanged), $-1$ (sign flip) or $0$ (moved away) under each class, then matching the row, as $\\psi_{A} - \\psi_{B}$ of $O$ $p_{x}$ pair in $NO_{2}$ matches $A_{2}$ in $C_{2v}$.',
        detail: 'Under $C_{2}$ the minus combination stays itself ($+1$); under both vertical mirrors it changes sign ($-1$ each). Row $A_{2}$ reads $1, 1, -1, -1$ across $E, C_{2}, \\sigma_{v}, \\sigma_{v}^{\\prime}$.'
      },
      {
        term: 'Transition-dipole selection test',
        kind: 'theorem',
        statement: 'An electric-dipole jump is **symmetry-allowed** `allowed` only when $\\Gamma_{f} \\times \\Gamma_{\\mu} \\times \\Gamma_{i}$ contains $A_{1}$ (totally symmetric), so $A_{1} \\to A_{2}$ in $C_{3v}$ is forbidden since neither $x$, $y$ ($E$) nor $z$ ($A_{1}$) spans $A_{2}$.',
        detail: 'Magnetic and Raman tests swap the operator irrep but keep the $A_{1}$-containment logic. Forbidden here means zero by symmetry, not merely weak.'
      },
      {
        term: 'Degeneracy ceiling from dimensions',
        kind: 'law',
        statement: 'The **degeneracy cap** `degeneracy` equals the largest irrep dimension, so $C_{3v}$ with an $E$ row allows at most double degeneracy and no triplets.',
        detail: 'Bases spanning $E$ like $(p_{x}, p_{y})$ always travel together energetically. Character of $E$ under identity reads $2$, announcing the pair.'
      },
      {
        term: 'Symmetry-adapted combinations for bonding',
        kind: 'insight',
        statement: 'Ligand orbitals precombine into **SALCs** `SALC` of matching species before bonding, such as three $H$ $1s$ functions in $NH_{3}$ giving $a_{1} + e$ that meet $N$ $2s$ ($a_{1}$) and $2p$ ($a_{1} + e$).',
        detail: 'Only same-species overlaps survive integration, which is why SALCs prune secular determinants. Mismatched species give exactly zero interaction.'
      }
    ],
    figures: [
      {
        caption: 'Minus combination $\\psi_{A} - \\psi_{B}$ in $C_{2v}$: characters $1, 1, -1, -1$ match row $A_{2}$ ($B_{1}$ and $B_{2}$ differ in the mirror signs).',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Character matching diagram for an A2 orbital combination"><text x="60" y="60" font-size="15" fill="currentColor">chars:</text><rect x="140" y="30" width="90" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="185" y="57" text-anchor="middle" font-size="14" fill="currentColor">E: +1</text><rect x="245" y="30" width="90" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="290" y="57" text-anchor="middle" font-size="14" fill="currentColor">C2: +1</text><rect x="350" y="30" width="110" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="405" y="57" text-anchor="middle" font-size="14" fill="currentColor">sig-v: -1</text><rect x="475" y="30" width="120" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="535" y="57" text-anchor="middle" font-size="14" fill="currentColor">sig-v-prime: -1</text><circle cx="260" cy="180" r="30" fill="none" stroke="currentColor" stroke-width="3"/><text x="260" y="188" text-anchor="middle" font-size="15" fill="currentColor">+A</text><circle cx="460" cy="180" r="30" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="6 4"/><text x="460" y="188" text-anchor="middle" font-size="15" fill="currentColor">-B</text><line x1="290" y1="180" x2="430" y2="180" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><rect x="250" y="250" width="220" height="44" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="277" text-anchor="middle" font-size="15" fill="currentColor">row match: A2</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Testing A-one to A-two in C-three-v',
        problem: 'Is the $A_{1} \\to A_{2}$ electric-dipole transition allowed in a $C_{3v}$ molecule?',
        steps: [
          { label: 'Step 1', text: 'Form $A_{2} \\times \\Gamma_{\\mu} \\times A_{1} = A_{2} \\times \\Gamma_{\\mu}$:\n```text\nz dipole: A1 -> A2 x A1 = A2, no A1\nx,y dipole: E -> A2 x E = E, no A1\n```\nNeither product contains $A_{1}$.' },
          { label: 'Step 2', text: 'Conclude all three polarization directions vanish by symmetry.' },
          { label: 'Step 3', text: 'Contrast $A_{1} \\to E$ with $x,y$: $E \\times E$ contains $A_{1}$, so perpendicular light is allowed.' }
        ],
        result: '$A_{1} \\to A_{2}$ is electric-dipole forbidden in $C_{3v}$.'
      },
      {
        title: 'SALCs of ammonia ligand set',
        problem: 'Build the symmetry-adapted $H_{3}$ combinations in $NH_{3}$ ($C_{3v}$) and state their partners on nitrogen.',
        steps: [
          { label: 'Step 1', text: 'Add all three $1s$ in phase: unchanged by every operation, species $a_{1}$, partner $N$ $2s$ and $2p_{z}$.' },
          { label: 'Step 2', text: 'Form the two orthogonal difference patterns spanning $e$, partners $N$ $2p_{x}$ and $2p_{y}$.' },
          { label: 'Step 3', text: 'Bond $a_{1}$ with $a_{1}$ and $e$ with $e$ only; cross-species $a_{1}$-$e$ overlap integrates to zero.' }
        ],
        result: '$H_{3}$ gives $a_{1} + e$, bonding $N$ $2s,2p_{z}$ and $2p_{x},2p_{y}$ respectively.'
      }
    ],
    keyTakeaways: [
      'Rows $A$, $B$, $E$, $T$ have dimensions $1$, $1$, $2$, $3$ read under $E$.',
      'Characters $+1$, $-1$, $0$ per class identify the species row.',
      'Dipole transitions need $A_{1}$ inside $\\Gamma_{f} \\times \\Gamma_{\\mu} \\times \\Gamma_{i}$.',
      'SALCs bond only with same-species partners; the rest vanish.'
    ],
    quiz: [
      {
        q: 'Basis $(x, y)$ in $C_{3v}$ spans:',
        options: ['$A_{1}$', '$A_{2}$', '$E$', '$B_{1}$'],
        answer: 2,
        explanation: 'Step 1: Open the $C_{3v}$ table right columns. Step 2: Find $(x, y)$ listed together. Step 3: Read the row label $E$.'
      },
      // PYQ-pattern: forbidden transition drill
      {
        q: '$A_{1} \\to A_{2}$ with $z$-polarized light in $C_{3v}$ is forbidden because:',
        options: ['Photons carry no momentum', '$A_{1}$ states do not exist', '$z$ light cannot propagate', '$A_{2} \\times A_{1} = A_{2}$ lacks $A_{1}$'],
        answer: 3,
        explanation: 'Step 1: Assign $z$ to $A_{1}$ from the table. Step 2: Multiply $A_{2} \\times A_{1} \\times A_{1} = A_{2}$. Step 3: Note $A_{1}$ containment fails.'
      },
      {
        q: 'Maximum degeneracy in $C_{4v}$ is:',
        options: ['$2$ from its $E$ irrep', '$3$', '$4$', '$1$'],
        answer: 0,
        explanation: 'Step 1: Scan irreps for the largest dimension. Step 2: Find $E$ with character $2$ under $E$. Step 3: Cap degeneracy at doubling.'
      },
      {
        q: 'An $a_{1}$ SALC on ligands bonds with:',
        options: ['An $e$ orbital on the centre', 'Only $a_{1}$ orbitals on the centre', 'Any orbital regardless of species', 'No orbital ever'],
        answer: 1,
        explanation: 'Step 1: Demand matching species for nonzero overlap. Step 2: Pair $a_{1}$ with $a_{1}$. Step 3: Zero all $a_{1}$-$e$ integrals by symmetry.'
      }
    ]
  }
]
