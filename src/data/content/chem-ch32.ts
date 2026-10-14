import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 32: Coordination Problem Workshops (Lee Guha focus 5)
// Sections 32.1 - 32.4. Second-opinion problem workshops complementing theory.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh32Content: SectionContent[] = [
  // ---------------------------------------------------------------- 32.1
  {
    sectionId: 'chem-ch32-s1',
    readingTime: 9,
    intro: 'Lee Guha naming plus isomerism drills turn formulae into systematic names with oxidation state plus ligand order plus isomer counts. Anionic ligands end in $o$ with $chlorido$ plus $cyanido$ while neutral ligands keep $ammine$ plus $aqua$ spellings. This workshop names complexes then counts ionisation plus linkage plus geometric plus optical isomers.',
    objectives: [
      'Name complexes with ligand order plus $o$ endings plus oxidation state in Roman numerals',
      'Assign oxidation state plus coordination number from formula and counter ions',
      'Count ionisation plus linkage plus geometric plus optical isomers for classic formulae'
    ],
    concepts: [
      {
        term: 'Ligand naming order',
        kind: 'definition',
        statement: 'A **name lists ligands alphabetically before the metal** `naming` anionic $Cl$ as $chlorido$ plus $CN$ as $cyanido$ with neutral $NH_{3}$ as $ammine$ and $H_{2}O$ as $aqua$.',
        detail: 'Prefixes $di$ plus $tri$ plus $tetra$ count simple ligands while $bis$ plus $tris$ count complex ligands. Anionic complexes add $ate$ to the metal name as in $ferrate$ plus $cobaltate$.'
      },
      {
        term: 'Oxidation state extraction',
        kind: 'method',
        statement: 'A **charge balance isolates metal oxidation state** `oxidation-state` $x$ plus sum ligand charges equals complex charge with $K^{+}$ plus $Cl$ counter ions included.',
        detail: '$K_{4}[Fe(CN)_{6}]$ gives $Fe$ $+2$ since six $CN$ contribute $ -6$ with four $K^{+}$ balancing $ -4$. $[Co(NH_{3})_{5}Cl]Cl_{2}$ gives $Co$ $+3$ with one bound $Cl$ plus two free $Cl$.'
      },
      {
        term: 'Ionisation versus linkage isomerism',
        kind: 'theorem',
        statement: 'A **counter ion swap gives ionisation isomers** `ionisation` $[Co(NH_{3})_{5}SO_{4}]Br$ versus $[Co(NH_{3})_{5}Br]SO_{4}$ while **donor atom swap gives linkage isomers** `linkage` $NO_{2}$ nitro versus $ONO$ nitrito.',
        detail: 'Silver nitrate test precipitates free $Br$ but not bound $Br$, distinguishing ionisation pair. Infrared $N$-$O$ stretches separate nitro $N$ bound from nitrito $O$ bound.'
      },
      {
        term: 'Geometric isomer counting',
        kind: 'law',
        statement: 'A **square planar plus octahedral MA2B2 type shows cis trans pair** `geometric` $Pt(NH_{3})_{2}Cl_{2}$ cis versus trans and $[Co(NH_{3})_{4}Cl_{2}]^{+}$ cis versus trans.',
        detail: 'Cis places identical ligands at $90$ degree neighbours while trans places them at $180$ degree opposites. Tetrahedral $MA_{2}B_{2}$ shows one form only by all adjacent geometry.'
      },
      {
        term: 'Optical isomer recognition',
        kind: 'insight',
        statement: 'A **non superimposable mirror pair rotates plane polarised light** `optical` $cis$ $[Co(en)_{2}Cl_{2}]^{+}$ chiral versus trans achiral with mirror plane.',
        detail: 'Bidentate $en$ chelate rings create propeller chirality in the cis form, so $delta$ plus $lambda$ enantiomers separate by chiral resolving agents. Trans form holds inversion centre and stays optically inactive.'
      }
    ],
    figures: [
      {
        caption: 'Naming $chlorido$ plus $ammine$ plus $ate$ with $x$ from charge balance, then $ionisation$ plus $linkage$ plus $cis$ $trans$ plus $delta$ $lambda$ counts.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordination naming and isomerism drills"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">ligands A to Z</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">chlorido ammine ate</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">x from charge sum</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">Roman numerals</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">CN counts donors</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">cis trans delta</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">linkage ion pair</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">AgNO3 frees ions, IR splits linkage</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Hexacyanoferrate naming plus state',
        problem: '$K_{4}[Fe(CN)_{6}]$ needs systematic name plus $Fe$ oxidation state plus coordination number.',
        steps: [
          { label: 'Step 1', text: 'Balance charge:\n```text\n6 CN = -6 total ligands\n4 K = +4 counters, complex = -4\nFe x minus 6 = -4 so x = +2\n```\nLigand $CN$ names as $cyanido$ with $hexa$ prefix and $Fe$ as $ferrate$ anion.' },
          { label: 'Step 2', text: 'Order ligands alphabetically: $hexacyanido$ single set before $ferrate$ with $II$ Roman numeral.' },
          { label: 'Step 3', text: 'Name potassium $hexacyanidoferrate$ $II$ with coordination number $6$ octahedral.' }
        ],
        result: 'Potassium hexacyanidoferrate II with $Fe$ $+2$ and coordination number $6$.'
      },
      {
        title: 'Platinum diammine isomer count',
        problem: '$Pt(NH_{3})_{2}Cl_{2}$ square planar shows two forms while tetrahedral $Ni$ analog would show one. Count and label the pair.',
        steps: [
          { label: 'Step 1', text: 'Place $NH_{3}$ pair at $90$ degree neighbours for cis $Pt(NH_{3})_{2}Cl_{2}$ with net dipole.' },
          { label: 'Step 2', text: 'Place $NH_{3}$ pair at $180$ degree opposites for trans isomer with zero dipole.' },
          { label: 'Step 3', text: 'Contrast tetrahedral geometry where all positions stay adjacent, so no cis trans split.' }
        ],
        result: 'Cis polar plus trans nonpolar pair for square planar $Pt$ type.'
      }
    ],
    keyTakeaways: [
      'Anionic ligands end in $o$ with $chlorido$ plus $cyanido$ and $ammine$ plus $aqua$ neutral.',
      'Charge balance gives $x$ with Roman numerals and $ate$ for anionic complexes.',
      'Counter ion swap means ionisation while donor atom swap means linkage.',
      'Square planar plus octahedral $MA_{2}B_{2}$ show cis trans while cis chelates add $delta$ $lambda$.'
    ],
    quiz: [
      {
        q: '$Fe$ state in $K_{4}[Fe(CN)_{6}]$ is:',
        options: ['$+2$', '$+3$', '$+4$', 'Zero'],
        answer: 0,
        explanation: 'Step 1: Sum six $CN$ as $ -6$. Step 2: Balance four $K^{+}$ leaving $ -4$ complex. Step 3: Solve $x$ minus $6$ equals $ -4$ giving $+2$.'
      },
      // PYQ-pattern: linkage versus ionisation distinction drill
      {
        q: '$NO_{2}$ nitro versus $ONO$ nitrito is:',
        options: ['Ionisation isomerism', 'Linkage isomerism by donor atom', 'Geometric isomerism', 'No isomerism'],
        answer: 1,
        explanation: 'Step 1: Keep formula fixed with bound $NO_{2}$. Step 2: Swap $N$ donor to $O$ donor. Step 3: Assign linkage isomerism.'
      },
      {
        q: 'Cis trans pair occurs in:',
        options: ['Tetrahedral $MA_{2}B_{2}$', 'Linear $MA_{2}$', 'Square planar $Pt(NH_{3})_{2}Cl_{2}$', 'No geometry'],
        answer: 2,
        explanation: 'Step 1: Need $90$ versus $180$ positions. Step 2: Find square planar plus octahedral types. Step 3: Select $Pt(NH_{3})_{2}Cl_{2}$ pair.'
      },
      {
        q: 'Optically active form is:',
        options: ['Trans $[Co(en)_{2}Cl_{2}]^{+}$', 'Both always inactive', 'No chelate effect', 'Cis $[Co(en)_{2}Cl_{2}]^{+}$ $delta$ $lambda$'],
        answer: 3,
        explanation: 'Step 1: Check mirror plane in trans form. Step 2: Find propeller chirality in cis form. Step 3: Assign $delta$ plus $lambda$ activity.'
      }
    ]
  },
  // ---------------------------------------------------------------- 32.2
  {
    sectionId: 'chem-ch32-s2',
    readingTime: 9,
    intro: 'Lee Guha splitting diagrams turn spectrochemical order plus geometry into electron filling calls with pairing energy $P$ as price. Octahedral $t_{2g}$ plus $e_{g}$ gap $\\Delta_{o}$ competes with $P$ while tetrahedral $e$ plus $t_{2}$ gap $\\Delta_{t}$ stays small. This workshop fills $d^{4}$ to $d^{7}$ cases across octahedral plus tetrahedral plus square planar fields.',
    objectives: [
      'Split octahedral $t_{2g}$ plus $e_{g}$ versus tetrahedral $e$ plus $t_{2}$ with correct order',
      'Decide high spin versus low spin by $\\Delta$ versus $P$ for $d^{4}$ to $d^{7}$ octahedral ions',
      'Fill square planar $d^{8}$ with strong field $Ni$ plus $Pd$ plus $Pt$ logic'
    ],
    concepts: [
      {
        term: 'Octahedral splitting order',
        kind: 'definition',
        statement: 'An **octahedral field lifts eg above t2g** `octahedral` $t_{2g}$ lower triple plus $e_{g}$ upper double with gap $\\Delta_{o}$ and $e_{g}$ pointing at ligands.',
        detail: 'Axial plus equatorial ligands repel $d_{z^{2}}$ plus $d_{x^{2}-y^{2}}$ $e_{g}$ lobes directly, while $d_{xy}$ plus $d_{xz}$ plus $d_{yz}$ $t_{2g}$ lobes point between ligands and stay lower.'
      },
      {
        term: 'Tetrahedral inverted small gap',
        kind: 'theorem',
        statement: 'A **tetrahedral field inverts and shrinks the gap** `tetrahedral` $e$ lower double plus $t_{2}$ upper triple with $\\Delta_{t}$ near $4$ over $9$ $\\Delta_{o}$ and always high spin.',
        detail: 'Fewer ligands plus off axis approach cut repulsion, so $\\Delta_{t}$ never pays pairing price $P$. Tetrahedral $d^{5}$ keeps five unpaired electrons like free ion.'
      },
      {
        term: 'High spin versus low spin call',
        kind: 'law',
        statement: 'A **large gap pairs while small gap spreads** `spin-call` $\\Delta_{o}$ greater than $P$ gives low spin with $t_{2g}$ filled first while $\\Delta_{o}$ below $P$ gives high spin with $e_{g}$ occupied early.',
        detail: 'Weak $F$ plus $H_{2}O$ give high spin $Fe^{3+}$ $t_{2g}^{3}e_{g}^{2}$ while strong $CN$ gives low spin $t_{2g}^{5}$ with one unpaired electron. $d^{3}$ plus $d^{8}$ to $d^{10}$ lack high low choice.'
      },
      {
        term: 'Spectrochemical ligand order',
        kind: 'method',
        statement: 'A **ligand series orders field strength** `spectrochemical` $I$ below $Br$ below $Cl$ below $F$ below $H_{2}O$ below $NH_{3}$ below $en$ below $CN$ below $CO$.',
        detail: 'Pi donor halides cut $\\Delta_{o}$ while pi acceptor $CO$ plus $CN$ boost it by back bonding. $Fe^{2+}$ crosses from high to low spin along this series.'
      },
      {
        term: 'Square planar d8 filling',
        kind: 'insight',
        statement: 'A **square planar field isolates dx2 minus y2 highest** `square-planar` $d_{x^{2}-y^{2}}$ top empty for $d^{8}$ $Ni^{2+}$ plus $Pd^{2+}$ plus $Pt^{2+}$ giving diamagnetic $16$ electron complexes.',
        detail: 'Removing axial ligands drops $d_{z^{2}}$ while $x$-$y$ plane crowding lifts $d_{x^{2}-y^{2}}$, so eight electrons pair in four lower orbitals. Strong field $CN$ plus phosphines enforce the planar geometry.'
      }
    ],
    figures: [
      {
        caption: 'Octahedral $t_{2g}$ plus $e_{g}$ gap $\\Delta_{o}$ versus tetrahedral $e$ plus $t_{2}$ gap $\\Delta_{t}$ with $\\Delta$ versus $P$ spin call.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Splitting diagrams for octahedral tetrahedral and square planar"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">oct: t2g low eg up</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">gap is delta o</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">tet: e low t2 up</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">small, high spin</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">4 over 9 delta o</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">delta vs P call</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">square d8 paired</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">I to CO series sets gap size</text></svg>`,
        afterConcept: 1
      }
    ],
    derivations: [
      {
        title: 'Octahedral Crystal Field Stabilization Energy',
        statement: 'Derivation of $CFSE = (-0.4n_{t2g} + 0.6n_{eg})\\Delta_{o}$ with low spin $d^{6}$ value $-2.4\\Delta_{o} + 2P$',
        prerequisites: [
          'Octahedral splitting with $t_{2g}$ below $e_{g}$ by gap $\\Delta_{o}$',
          'Barycentre conservation of total orbital energy',
          'Pairing energy $P$ for forced electron pairing'
        ],
        steps: [
          {
            label: 'Step 1: Split the spherical level by ligand approach',
            formula: '$$\\Delta_{o} = E(e_{g}) - E(t_{2g})$$',
            explanation: 'Axial orbitals pointing at ligands rise while interaxial orbitals pointing between ligands sink relative to the spherical average. The gap $\\Delta_{o}$ measures this differential repulsion. Defining the gap first lets all later energies be counted from a common reference.'
          },
          {
            label: 'Step 2: Fix orbital energies by barycentre conservation',
            formula: '$$E(t_{2g}) = -0.4\\Delta_{o} \\quad E(e_{g}) = +0.6\\Delta_{o}$$',
            explanation: 'Total energy is conserved on splitting, so three lowered orbitals times $0.4$ balance two raised orbitals times $0.6$. These weights follow from $3$ times $-0.4$ plus $2$ times $0.6$ equal to zero. Each electron then contributes a known stabilization or penalty by occupancy.'
          },
          {
            label: 'Step 3: Sum over electron occupancy with pairing cost',
            formula: '$$CFSE = (-0.4n_{t2g} + 0.6n_{eg})\\Delta_{o} + mP$$',
            explanation: 'Counting $n_{t2g}$ electrons at $-0.4$ and $n_{eg}$ electrons at $+0.6$ gives the raw field balance. Extra pairs $m$ beyond the high spin reference each cost pairing energy $P$ from repulsion. Adding $mP$ completes the comparison between spreading and pairing strategies.'
          },
          {
            label: 'Step 4: Apply to high spin and low spin $d^{6}$',
            formula: '$$CFSE(t_{2g}^{6}) = -2.4\\Delta_{o} + 2P \\quad CFSE(t_{2g}^{4}e_{g}^{2}) = -0.4\\Delta_{o}$$',
            explanation: 'High spin $t_{2g}^{4}e_{g}^{2}$ gains only $-0.4$ units while low spin $t_{2g}^{6}$ gains $-2.4$ units at the price of two extra pairs. Low spin wins when $\\Delta_{o}$ exceeds $P$, which strong ligands such as $CN^-$ enforce. Large stabilization then explains short bonds, slow substitution and deep colour.'
          }
        ],
        result: 'Octahedral $CFSE = (-0.4n_{t2g} + 0.6n_{eg})\\Delta_{o} + mP$, so low spin $d^{6}$ $t_{2g}^{6}$ gains $-2.4\\Delta_{o} + 2P$ and turns inert when $\\Delta_{o}$ exceeds $P$.'
      }
    ],
    examples: [
      {
        title: 'Iron three plus spin call',
        problem: '$[FeF_{6}]^{3-}$ shows five unpaired electrons while $[Fe(CN)_{6}]^{3-}$ shows one unpaired electron for $d^{5}$ $Fe^{3+}$. Fill both diagrams.',
        steps: [
          { label: 'Step 1', text: 'Order ligands:\n```text\nF weak -> small delta o < P -> high spin\nCN strong -> large delta o > P -> low spin\nd5 octahedral t2g + eg fill\n```\nSpectrochemical $F$ below $H_{2}O$ below $CN$ sets $\\Delta_{o}$ size.' },
          { label: 'Step 2', text: 'High spin $t_{2g}^{3}e_{g}^{2}$ with five unpaired for $[FeF_{6}]^{3-}$ by Hund spread.' },
          { label: 'Step 3', text: 'Low spin $t_{2g}^{5}$ with one unpaired for $[Fe(CN)_{6}]^{3-}$ by pairing first.' }
        ],
        result: 'Weak $F$ high spin five unpaired and strong $CN$ low spin one unpaired.'
      },
      {
        title: 'Tetrahedral cobalt two plus filling',
        problem: '$[CoCl_{4}]^{2-}$ tetrahedral $d^{7}$ $Co^{2+}$ shows three unpaired electrons. Show why low spin never appears.',
        steps: [
          { label: 'Step 1', text: 'Split tetrahedral $e$ lower plus $t_{2}$ upper with $\\Delta_{t}$ near $4$ over $9$ $\\Delta_{o}$.' },
          { label: 'Step 2', text: 'Compare small $\\Delta_{t}$ with pairing $P$: gap never pays pairing cost.' },
          { label: 'Step 3', text: 'Fill $e^{4}t_{2}^{3}$ with three unpaired, always high spin.' }
        ],
        result: 'Tetrahedral $d^{7}$ always high spin with three unpaired electrons.'
      }
    ],
    keyTakeaways: [
      'Octahedral $t_{2g}$ low plus $e_{g}$ high with gap $\\Delta_{o}$ from axial hit.',
      'Tetrahedral $e$ low plus $t_{2}$ high with $\\Delta_{t}$ near $4$ over $9$ $\\Delta_{o}$ always high spin.',
      '$\\Delta_{o}$ greater than $P$ low spin while $\\Delta_{o}$ below $P$ high spin for $d^{4}$ to $d^{7}$.',
      'Square planar $d^{8}$ pairs to diamagnetic with top $d_{x^{2}-y^{2}}$ empty.'
    ],
    quiz: [
      {
        q: 'Octahedral lower set is:',
        options: ['$t_{2g}$ triple', '$e_{g}$ double', '$t_{2}$ triple', '$e$ double'],
        answer: 0,
        explanation: 'Step 1: Point $e_{g}$ at ligands. Step 2: Point $t_{2g}$ between ligands. Step 3: Place $t_{2g}$ lower triple.'
      },
      // PYQ-pattern: high spin versus low spin call drill
      {
        q: '$d^{5}$ with strong $CN$ gives:',
        options: ['High spin five unpaired', 'Low spin one unpaired $t_{2g}^{5}$', 'Zero unpaired always', 'Seven unpaired'],
        answer: 1,
        explanation: 'Step 1: Order $CN$ as strong field. Step 2: Set $\\Delta_{o}$ greater than $P$. Step 3: Pair to $t_{2g}^{5}$ one unpaired.'
      },
      {
        q: 'Tetrahedral gap is:',
        options: ['Larger than $\\Delta_{o}$', 'Zero always', 'Near $4$ over $9$ $\\Delta_{o}$ always high spin', 'Only low spin'],
        answer: 2,
        explanation: 'Step 1: Count fewer off axis ligands. Step 2: Shrink gap to $4$ over $9$ $\\Delta_{o}$. Step 3: Keep high spin always.'
      },
      {
        q: 'Square planar $d^{8}$ $Pt^{2+}$ is typically:',
        options: ['Paramagnetic five unpaired', 'High spin tetrahedral', 'Free ion', 'Diamagnetic paired'],
        answer: 3,
        explanation: 'Step 1: Lift $d_{x^{2}-y^{2}}$ top. Step 2: Pair eight electrons below. Step 3: Report diamagnetic $16$ electron complex.'
      }
    ]
  },
  // ---------------------------------------------------------------- 32.3
  {
    sectionId: 'chem-ch32-s3',
    readingTime: 8,
    intro: 'Lee Guha magnetism arithmetic converts unpaired counts into spin only moments with orbital flags for heavy deviations. Gouy balance pull plus $\\mu = \\sqrt{n(n+2)}$ $BM$ in Bohr magnetons assigns $n$ quickly. This workshop computes moments plus separates spin only matches from orbital enhanced $Co^{2+}$ plus $Fe^{2+}$ cases.',
    objectives: [
      'Compute $\\mu = \\sqrt{n(n+2)}$ $BM$ for $n$ equal to $1$ to $5$ unpaired sets',
      'Assign $n$ from measured $\\mu$ with $1.73$ plus $2.83$ plus $3.87$ plus $4.90$ plus $5.92$ ladder',
      'Flag orbital contribution when $Co^{2+}$ plus $Fe^{2+}$ exceed spin only values'
    ],
    concepts: [
      {
        term: 'Spin only moment law',
        kind: 'law',
        statement: 'A **moment follows unpaired count by square root rule** `spin-only` $\\mu = \\sqrt{n(n+2)}$ $BM$ with $n$ unpaired electrons and $BM$ as Bohr magneton.',
        detail: 'One unpaired gives $1.73$ $BM$ while two give $2.83$ $BM$ plus three give $3.87$ $BM$ plus four give $4.90$ $BM$ plus five give $5.92$ $BM$. Diamagnetic $n$ equal to $0$ gives $\\mu$ equal to $0$.'
      },
      {
        term: 'Gouy pull reading',
        kind: 'method',
        statement: 'A **balance pull measures susceptibility** `Gouy` paramagnetic samples pull into the field with $\\chi$ positive while diamagnetic samples push out with $\\chi$ negative.',
        detail: 'Calibrate tube with $HgCo(SCN)_{4}$ standard, then convert pull to $\\chi_{m}$ corrected for ligands by Pascal constants. Temperature plot $\\chi$ versus $1$ over $T$ checks Curie behaviour.'
      },
      {
        term: 'Moment to n assignment',
        kind: 'theorem',
        statement: 'A **measured moment rounds to the ladder rung** `n-assignment` $5.1$ $BM$ means $n$ equal to $4$ high spin $d^{4}$ or $d^{6}$ while $1.9$ $BM$ means $n$ equal to $1$.',
        detail: '$[FeF_{6}]^{3-}$ near $5.92$ $BM$ proves five unpaired high spin $d^{5}$, while $[Fe(CN)_{6}]^{3-}$ near $2.0$ $BM$ proves one unpaired low spin $d^{5}$. Intermediate values flag mixtures or equilibria.'
      },
      {
        term: 'Orbital contribution flag',
        kind: 'definition',
        statement: 'A **T ground term adds orbital momentum** `orbital` octahedral $Co^{2+}$ $T$ term plus tetrahedral $Fe^{2+}$ plus $Co^{2+}$ exceed spin only by $0.5$ to $1.0$ $BM$.',
        detail: 'Spin orbit coupling mixes excited $T$ states into the ground state, so $Co^{2+}$ high spin reads $4.4$ to $5.2$ $BM$ above $3.87$ spin only. $A$ plus $E$ ground terms stay near spin only.'
      },
      {
        term: 'Temperature behaviour split',
        kind: 'insight',
        statement: 'A **Curie plot separates ferro plus antiferro coupling** `temperature` $\\mu$ steady with $T$ means isolated centres while $\\mu$ falling on cooling means antiferromagnetic pairing.',
        detail: 'Dimeric $Cu^{2+}$ acetate drops $\\mu$ per $Cu$ on cooling by singlet pairing. Spin crossover $Fe^{2+}$ jumps $\\mu$ from $0$ to $5$ $BM$ with $T$ plus $P$ switching.'
      }
    ],
    figures: [
      {
        caption: 'Spin only ladder $1.73$ to $5.92$ $BM$ from $\\mu = \\sqrt{n(n+2)}$ with Gouy pull and $T$ term orbital flags.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Magnetism arithmetic with spin only ladder and orbital flags"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">mu root n n plus 2</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">1.73 2.83 3.87</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Gouy pull to chi</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">para in, dia out</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">Pascal correct</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">T term high</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">Co2 plus Fe2 flag</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">cool fall is antiferro, jump is crossover</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Moment assignment for iron pair',
        problem: '$[FeF_{6}]^{3-}$ reads $5.9$ $BM$ while $[Fe(CN)_{6}]^{3-}$ reads $2.0$ $BM$ for $d^{5}$ $Fe^{3+}$. Assign $n$ plus spin states.',
        steps: [
          { label: 'Step 1', text: 'Recall ladder:\n```text\nn=5 -> 5.92 BM\nn=1 -> 1.73 BM\nn=3 -> 3.87 BM\nmatch nearest rung\n```\nSpin only $\\mu = \\sqrt{n(n+2)}$ $BM$ sets the rungs.' },
          { label: 'Step 2', text: 'Match $5.9$ $BM$ to $n$ equal to $5$ high spin $t_{2g}^{3}e_{g}^{2}$ for weak $F$.' },
          { label: 'Step 3', text: 'Match $2.0$ $BM$ to $n$ equal to $1$ low spin $t_{2g}^{5}$ for strong $CN$.' }
        ],
        result: 'Fluoride high spin five unpaired and cyanide low spin one unpaired.'
      },
      {
        title: 'Orbital flag on cobalt two plus',
        problem: 'High spin $[Co(H_{2}O)_{6}]^{2+}$ $d^{7}$ reads $4.8$ $BM$ above $3.87$ spin only for $n$ equal to $3$. Explain the excess.',
        steps: [
          { label: 'Step 1', text: 'Compute spin only $\\sqrt{3 \\times 5}$ equals $3.87$ $BM$ for three unpaired.' },
          { label: 'Step 2', text: 'Identify $T$ ground term for octahedral $d^{7}$ with unquenched orbital momentum.' },
          { label: 'Step 3', text: 'Add $0.5$ to $1.0$ $BM$ orbital enhancement to reach observed $4.8$ $BM$.' }
        ],
        result: '$Co^{2+}$ excess marks $T$ term orbital contribution, not extra unpaired electrons.'
      }
    ],
    keyTakeaways: [
      '$\\mu = \\sqrt{n(n+2)}$ $BM$ gives $1.73$ plus $2.83$ plus $3.87$ plus $4.90$ plus $5.92$.',
      'Gouy pull into field means para while push out means dia with Pascal correction.',
      'Nearest ladder rung assigns $n$ with $5.9$ as five and $2.0$ as one for $d^{5}$ pair.',
      '$T$ term $Co^{2+}$ plus $Fe^{2+}$ exceed spin only by $0.5$ to $1.0$ $BM$.'
    ],
    quiz: [
      {
        q: '$n$ equal to $3$ spin only $\\mu$ is:',
        options: ['$1.73$ $BM$', '$2.83$ $BM$', '$3.87$ $BM$', '$5.92$ $BM$'],
        answer: 2,
        explanation: 'Step 1: Write $\\mu = \\sqrt{n(n+2)}$. Step 2: Insert $n$ equal to $3$ giving $\\sqrt{15}$. Step 3: Report $3.87$ $BM$.'
      },
      // PYQ-pattern: moment to n assignment drill
      {
        q: '$5.9$ $BM$ for $Fe^{3+}$ means:',
        options: ['$n$ equal to $1$ low spin', '$n$ equal to $3$', '$n$ equal to $5$ high spin', 'Diamagnetic'],
        answer: 2,
        explanation: 'Step 1: Recall $5.92$ rung for $n$ equal to $5$. Step 2: Match $5.9$ reading. Step 3: Assign high spin $d^{5}$.'
      },
      {
        q: 'Gouy pull into field signals:',
        options: ['Diamagnetism', 'Paramagnetism with $\\chi$ positive', 'No magnetism', 'Superconductivity'],
        answer: 1,
        explanation: 'Step 1: Place sample in field gradient. Step 2: Observe pull inward. Step 3: Assign $\\chi$ positive paramagnetism.'
      },
      {
        q: '$Co^{2+}$ $4.8$ $BM$ versus $3.87$ means:',
        options: ['Extra two unpaired electrons', 'Orbital $T$ term enhancement', 'Experimental error only', 'Low spin proof'],
        answer: 1,
        explanation: 'Step 1: Compute spin only $3.87$ for $n$ equal to $3$. Step 2: Note $0.9$ excess. Step 3: Flag $T$ term orbital contribution.'
      }
    ]
  },
  // ---------------------------------------------------------------- 32.4
  {
    sectionId: 'chem-ch32-s4',
    readingTime: 9,
    intro: 'Lee Guha stability reasoning orders formation constants by chelate plus macrocyclic plus size match effects. Stepwise $K_{1}$ plus $K_{2}$ multiply to overall $\\beta$ with $log \\beta$ sums. This workshop compares monodentate versus chelate versus macrocycle $log \\beta$ gaps with spectrochemical position context.',
    objectives: [
      'Multiply stepwise $K$ to overall $\\beta$ with $log \\beta = log K_{1} + log K_{2}$ sums',
      'Rank $NH_{3}$ below $en$ below $trien$ below macrocycle by $log \\beta$ gaps',
      'Explain chelate gain by entropy of freed solvent plus enthalpy of fit'
    ],
    concepts: [
      {
        term: 'Stepwise versus overall constants',
        kind: 'definition',
        statement: 'A **stepwise K tracks each ligand addition** `stepwise` $K_{1}$ for $M$ plus $L$ to $ML$ times $K_{2}$ for $ML$ plus $L$ to $ML_{2}$ giving $\\beta_{2} = K_{1}K_{2}$.',
        detail: 'Log form adds: $log \\beta_{2} = log K_{1} + log K_{2}$ with $K_{1}$ above $K_{2}$ by statistics plus charge falloff. Overall $\\beta$ compares total assembly across ligand sets.'
      },
      {
        term: 'Chelate entropy gain',
        kind: 'theorem',
        statement: 'A **multidentate ligand frees many solvent molecules** `chelate` $M(H_{2}O)_{6}$ plus $en$ to $M(en)(H_{2}O)_{4}$ plus $2H_{2}O$ gains $\\Delta S$ positive with $log \\beta$ jump.',
        detail: 'Two $NH_{3}$ release two $H_{2}O$ while one $en$ releases two $H_{2}O$ with fewer particles lost, so $en$ beats $2NH_{3}$ by $10^{2}$ to $10^{4}$ in $\\beta$. Five membered chelate rings optimise the bite.'
      },
      {
        term: 'Macrocyclic extra hold',
        kind: 'law',
        statement: 'A **preorganised ring adds beyond open chelates** `macrocyclic` cyclam $log \\beta$ exceeds $trien$ open chain by $10^{2}$ to $10^{4}$ for matched $M$ size.',
        detail: 'Ring rigidity cuts reorganisation energy while cavity size selects $M$ radius. Porphyrin plus crown plus cryptand hosts extend the same preorganisation logic.'
      },
      {
        term: 'Size match selectivity',
        kind: 'method',
        statement: 'A **cavity plus ion radius match peaks stability** `size-match` $18$-crown-$6$ prefers $K^{+}$ near $138$ pm while $15$-crown-$5$ prefers $Na^{+}$ near $102$ pm.',
        detail: 'Mismatched ions strain the ring or rattle inside, lowering $\\Delta H$ fit. Lee Guha radius ratio rules preview the same packing logic for solids.'
      },
      {
        term: 'Spectrochemical stability context',
        kind: 'insight',
        statement: 'A **strong field ligand adds ligand field stabilisation** `LFSE` $CN$ plus $en$ boost $\\beta$ for $d^{3}$ plus low spin $d^{6}$ by $t_{2g}$ filling over $e_{g}$ avoidance.',
        detail: 'Weak $F$ leaves $LFSE$ small while strong $CN$ drops $t_{2g}$ and raises $e_{g}$, favouring low spin $Co^{3+}$ $t_{2g}^{6}$ enormously. Jahn Teller $d^{9}$ $Cu^{2+}$ distorts to extra stability.'
      }
    ],
    figures: [
      {
        caption: 'Stability $\\beta = K_{1}K_{2}$ with $NH_{3}$ below $en$ below macrocycle by $log \\beta$ jumps and cavity size match.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stability constants with chelate and macrocyclic effects"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">K1 times K2 is beta</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">log beta sums</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">en beats 2 NH3</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">frees solvent, S up</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">5 ring best bite</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">ring beats chain</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">cavity fits ion</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">strong field adds LFSE bonus</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Ammonia versus ethylenediamine gap',
        problem: '$Ni^{2+}$ with $6NH_{3}$ gives $log \\beta_{6}$ near $8$ while with $3en$ gives $log \\beta_{3}$ near $18$. Quantify chelate gain per $en$.',
        steps: [
          { label: 'Step 1', text: 'Compare totals:\n```text\n6 NH3 log beta = 8\n3 en log beta = 18\ngap = 10 log units\nper en gap near 3.3\n```\nOverall $\\beta$ multiplies stepwise $K$ values with $log$ sums.' },
          { label: 'Step 2', text: 'Assign entropy gain: $en$ frees two $H_{2}O$ per ligand with fewer free particles lost than $2NH_{3}$.' },
          { label: 'Step 3', text: 'Add five membered ring enthalpy fit for $Ni$-$en$ bite near ideal.' }
        ],
        result: 'Chelate gain near $10^{10}$ overall with $10^{3}$ per $en$ over $NH_{3}$.'
      },
      {
        title: 'Crown size match selection',
        problem: '$18$-crown-$6$ binds $K^{+}$ $138$ pm over $Na^{+}$ $102$ pm while $15$-crown-$5$ reverses the preference. Explain with cavity fit.',
        steps: [
          { label: 'Step 1', text: 'Match cavity near $140$ pm for $18$-crown-$6$ with $K^{+}$ near $138$ pm.' },
          { label: 'Step 2', text: 'Rattle $Na^{+}$ $102$ pm loosely in large ring with weak $\\Delta H$ contact.' },
          { label: 'Step 3', text: 'Fit $Na^{+}$ snugly in $15$-crown-$5$ near $100$ pm cavity for reversed selectivity.' }
        ],
        result: 'Size match peaks $log K$ where cavity meets ion radius.'
      }
    ],
    keyTakeaways: [
      '$\\beta_{2} = K_{1}K_{2}$ with $log \\beta$ sums for total assembly comparison.',
      '$en$ beats $2NH_{3}$ by $10^{2}$ to $10^{4}$ via $\\Delta S$ of freed $H_{2}O$.',
      'Macrocycles beat open chains by preorganisation plus cavity fit.',
      'Strong field $CN$ plus $en$ add $LFSE$ bonus for $d^{3}$ plus low spin $d^{6}$.'
    ],
    quiz: [
      {
        q: 'Overall $\\beta_{2}$ equals:',
        options: ['$K_{1}K_{2}$ with $log$ sum', '$K_{1} + K_{2}$', '$K_{1}$ over $K_{2}$', '$K_{1}$ only'],
        answer: 0,
        explanation: 'Step 1: Multiply stepwise $K_{1}$ times $K_{2}$. Step 2: Add logs as $log K_{1} + log K_{2}$. Step 3: Report $\\beta_{2}$ for total assembly.'
      },
      // PYQ-pattern: chelate versus monodentate stability drill
      {
        q: '$en$ beats $2NH_{3}$ mainly by:',
        options: ['Higher mass', 'Entropy of freed solvent plus ring fit', 'Lower denticity', 'No thermodynamic cause'],
        answer: 1,
        explanation: 'Step 1: Count freed $H_{2}O$ per ligand. Step 2: Save particles with one $en$ versus two $NH_{3}$. Step 3: Add five ring enthalpy fit.'
      },
      {
        q: '$18$-crown-$6$ prefers:',
        options: ['$Na^{+}$ small', 'No ions', '$K^{+}$ matched near $138$ pm', 'Anions only'],
        answer: 2,
        explanation: 'Step 1: Size cavity near $140$ pm. Step 2: Match $K^{+}$ near $138$ pm. Step 3: Select $K^{+}$ over $Na^{+}$.'
      },
      {
        q: 'Extra $CN$ stability for $Co^{3+}$ comes from:',
        options: ['Zero field effect', 'Larger ion size only', 'No bonding', '$LFSE$ of $t_{2g}^{6}$ low spin'],
        answer: 3,
        explanation: 'Step 1: Split $t_{2g}$ low plus $e_{g}$ high. Step 2: Fill $t_{2g}^{6}$ with strong $CN$. Step 3: Bank large $LFSE$ bonus.'
      }
    ]
  }
]
