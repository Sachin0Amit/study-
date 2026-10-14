import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 37: p-Block Depth Groups 13-15 (Lee ch10 focus)
// Sections 37.1 - 37.4. Boron anomalies, carbon silicon contrasts, nitrogen
// family depth, fixation and fertilizer chemistry.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh37Content: SectionContent[] = [
  // ---------------------------------------------------------------- 37.1
  {
    sectionId: 'chem-ch37-s1',
    readingTime: 9,
    intro: 'Group $13$ runs from electron hungry boron to the inert pair ruled thallium. Boron builds three centre bridged hydrides and a borazine ring with benzene like pi overlap, while aluminium trades covalency for strong Lewis acidity in its bridged dimer. Descending the group the $+1$ state grows until $Tl$ plus $1$ outlives $Tl$ plus $3$.',
    objectives: [
      'Draw diborane bridging plus borazine ring with $BN$ pi logic',
      'Contrast $H_{3}BO_{3}$ acidity with $Al(OH)_{3}$ amphoterism plus $AlCl_{3}$ dimer',
      'Apply inert pair rule to $Tl$ plus $1$ versus $Ga$ plus $3$ stability'
    ],
    concepts: [
      {
        term: 'Boron electron deficiency',
        kind: 'definition',
        statement: 'A **boron sextet seeks bridges or pi donation** `boron-deficient` $B_{2}H_{6}$ uses two $B-H-B$ three centre two electron bridges instead of an ethane skeleton.',
        detail: 'Terminal $B-H$ bonds are normal two electron bonds while each bridge spreads one pair over three atoms. $BF_{3}$ stays trigonal planar with an empty $p$ orbital ready for $NH_{3}$ or $F$ minus donors.'
      },
      {
        term: 'Borazine inorganic benzene',
        kind: 'theorem',
        statement: 'A **B3N3 ring mimics benzene with polar pi bonds** `borazine` $B_{3}N_{3}H_{6}$ is planar hexagonal with $N$ lone pairs feeding empty $B$ orbitals.',
        detail: 'Bond lengths equalise but polarity makes borazine far more reactive than benzene toward addition and hydrolysis. $BN$ ceramics inherit the same strong polar lattice bonding.'
      },
      {
        term: 'Boric acid versus aluminium hydroxide',
        kind: 'law',
        statement: 'A **boric acid accepts OH while aluminium hydroxide does both** `B-Al-contrast` $B(OH)_{3}$ plus $H_{2}O$ gives $B(OH)_{4}$ minus plus $H$ plus, while $Al(OH)_{3}$ dissolves in acid and in base.',
        detail: '$B_{2}O_{3}$ is acidic like $SiO_{2}$ whereas $Al_{2}O_{3}$ is amphoteric, and borax titrates with $HCl$ to methyl orange since $H_{3}BO_{3}$ is too weak to shift it. Cis diols complex borate and sharpen the end point.'
      },
      {
        term: 'Aluminium chloride acidity',
        kind: 'method',
        statement: 'A **bridged Al2Cl6 dimer cracks open on donor attack** `AlCl3-acid` $AlCl_{3}$ dimer plus $Cl$ minus gives $AlCl_{4}$ minus while hydrolysis fumes $HCl$ violently.',
        detail: 'Anhydrous $AlCl_{3}$ drives Friedel Crafts alkylation by ionising $RCl$ to carbocations, and aqueous $Al$ three plus hydrolyses to acidic $Al(H_{2}O)_{5}OH$ two plus. Alums $MAl(SO_{4})_{2}$ crystallise the octahedral aqua ion.'
      },
      {
        term: 'Inert pair descent',
        kind: 'insight',
        statement: 'A **6s pair refuses ionisation down the group** `inert-pair` $Tl$ plus $1$ beats $Tl$ plus $3$ while $Ga$ plus $3$ and $In$ plus $3$ dominate their chemistry.',
        detail: 'Poor shielding by filled $d$ and $f$ shells raises effective charge on $s$ electrons, so $Pb$ plus $2$ and $Bi$ plus $3$ repeat the pattern in later groups. $TlOH$ is a strong base like an alkali hydroxide.'
      }
    ],
    figures: [
      {
        caption: 'Diborane $B-H-B$ bridges plus borazine $B_{3}N_{3}$ ring versus $Al_{2}Cl_{6}$ dimer, with $Tl$ plus $1$ favoured by the inert $6s$ pair.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boron bridges borazine and aluminium dimer with inert pair"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">B2H6 bridges</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">B H B 3c 2e</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">sextet solved</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">B3N3 borazine</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">N to B pi ring</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">polar benzene</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">Al2Cl6 dimer</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">Tl plus 1 wins</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">B acid by OH capture, Al both ways</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Diborane bridge count',
        problem: '$B_{2}H_{6}$ has six hydrogen atoms but no ethane structure. Count terminal versus bridging hydrogens and bonding.',
        steps: [
          { label: 'Step 1', text: 'Sketch the skeleton:\n```text\n4 terminal B-H bonds\n2 bridging B-H-B units\nboron stays octet via bridges\n```\nEach bridge is one pair over three atoms.' },
          { label: 'Step 2', text: 'Assign four normal two electron $B-H$ terminal bonds, two on each boron.' },
          { label: 'Step 3', text: 'Assign two three centre two electron $B-H-B$ bridges holding the dimer together.' }
        ],
        result: 'Four terminal plus two bridging hydrogens with $3c$ minus $2e$ bonding.'
      },
      {
        title: 'Borax titration indicator',
        problem: 'Borax $Na_{2}B_{4}O_{7}$ titrates with $HCl$ to methyl orange although boric acid forms. Justify the indicator.',
        steps: [
          { label: 'Step 1', text: 'Write borax plus $HCl$ giving $NaCl$ plus $H_{3}BO_{3}$ in solution.' },
          { label: 'Step 2', text: 'Note $H_{3}BO_{3}$ is too weak to affect methyl orange, so the end point marks strong acid excess only.' },
          { label: 'Step 3', text: 'Add mannitol cis diol if a sharper boric end point is needed by complexation.' }
        ],
        result: 'Methyl orange works because product $H_{3}BO_{3}$ stays silent to it.'
      }
    ],
    keyTakeaways: [
      '$B_{2}H_{6}$ uses $B-H-B$ three centre bridges and $BF_{3}$ stays a strong Lewis acid.',
      'Borazine $B_{3}N_{3}H_{6}$ is polar inorganic benzene with easy addition.',
      '$B(OH)_{3}$ is acidic by $OH$ capture while $Al(OH)_{3}$ is amphoteric.',
      'Inert pair makes $Tl$ plus $1$ dominant while lighter members keep $+3$.'
    ],
    quiz: [
      {
        q: 'Bridging in $B_{2}H_{6}$ is:',
        options: ['Two $B-H-B$ three centre two electron bridges', 'One $B-B$ triple bond', 'Ionic $B$ plus plus $H$ minus lattice', 'No bonding at all'],
        answer: 0,
        explanation: 'Step 1: Count six hydrogens on two borons. Step 2: Place four terminal $B-H$ bonds. Step 3: Bridge the rest as $B-H-B$ three centre pairs.'
      },
      // PYQ-pattern: boric acid versus aluminium hydroxide behaviour drill
      {
        q: '$B(OH)_{3}$ versus $Al(OH)_{3}$ behaviour is:',
        options: ['Both strongly basic', 'Boric acidic by $OH$ capture, aluminium amphoteric', 'Both neutral oxides', 'Boric basic, aluminium acidic only'],
        answer: 1,
        explanation: 'Step 1: Hydrate $B(OH)_{3}$ to $B(OH)_{4}$ minus plus $H$ plus. Step 2: Dissolve $Al(OH)_{3}$ in acid and in base. Step 3: Assign acidic versus amphoteric.'
      },
      {
        q: '$AlCl_{3}$ fumes in moist air because:',
        options: ['It sublimes unchanged', 'It forms $Al$ metal mist', 'It hydrolyses releasing $HCl$', 'It absorbs $N_{2}$ gas'],
        answer: 2,
        explanation: 'Step 1: Expose $Al_{2}Cl_{6}$ to water. Step 2: Break $Al-Cl$ to $Al-OH$ plus $HCl$. Step 3: Observe $HCl$ white fumes.'
      },
      {
        q: 'Most stable thallium ion in solution is:',
        options: ['$Tl$ plus $3$ always', '$Tl$ minus $1$', '$Tl$ plus $5$', '$Tl$ plus $1$ by inert $6s$ pair'],
        answer: 3,
        explanation: 'Step 1: Recall poor $d$ plus $f$ shielding. Step 2: Keep $6s$ pair unionised. Step 3: Select $Tl$ plus $1$ as dominant.'
      }
    ]
  },
  // ---------------------------------------------------------------- 37.2
  {
    sectionId: 'chem-ch37-s2',
    readingTime: 10,
    intro: 'Carbon and silicon share group $14$ but diverge everywhere that matters. Carbon catenates into chains, rings and pi bonded oxides while silicon builds single bonded $Si-O$ networks and hydrolysable chlorides. The $+2$ state is a curiosity for carbon but a stable player for tin and lead by the inert pair.',
    objectives: [
      'Contrast catenation plus pi bonding in carbon versus silicon chemistry',
      'Explain $CCl_{4}$ inertness versus $SiCl_{4}$ hydrolysis by coordination logic',
      'Rank $CO$ plus $CO_{2}$ molecular oxides against silicate networks plus silicones'
    ],
    concepts: [
      {
        term: 'Catenation and pi reluctance',
        kind: 'definition',
        statement: 'A **carbon chain extends while silicon chains stop** `catenation` $C-C$ near $347$ kJ per mol supports alkanes and arenes while $Si-Si$ near $230$ kJ per mol loses to $Si-O$ near $368$ kJ per mol.',
        detail: 'Small $2p$ orbitals overlap sideways into strong $C$ double bond $C$ pi bonds, but diffuse $3p$ orbitals overlap poorly so $Si$ double bond $Si$ stays transient. Silicate $Si-O$ networks therefore replace $CO_{2}$ style molecules.'
      },
      {
        term: 'Hydrolysis contrast of tetrachlorides',
        kind: 'theorem',
        statement: 'A **silicon centre expands while carbon cannot** `hydrolysis-gap` $SiCl_{4}$ plus $H_{2}O$ hydrolyses violently while $CCl_{4}$ survives boiling water.',
        detail: 'Silicon reaches five or six coordination in the transition state using low lying acceptor orbitals, but carbon has no such path past the octet. $SnCl_{4}$ and $PbCl_{4}$ follow silicon with $PbCl_{4}$ oxidising as it goes.'
      },
      {
        term: 'Oxides molecular versus network',
        kind: 'law',
        statement: 'A **CO2 molecule contrasts a SiO2 giant lattice** `oxide-gap` $CO_{2}$ sublimes as discrete $O$ double bond $C$ double bond $O$ while $SiO_{2}$ melts above $1700$ degree as corner shared $SiO_{4}$ tetrahedra.',
        detail: '$CO$ is a neutral pi acceptor ligand for metals while $SiO$ is a high temperature transient. $SnO_{2}$ and $PbO_{2}$ turn amphoteric to basic with $PbO_{2}$ a strong oxidant.'
      },
      {
        term: 'Silicates and silicones',
        kind: 'method',
        statement: 'A **corner shared tetrahedron builds every silicate class** `silicate-build` isolated $SiO_{4}$ four minus, chain $(SiO_{3})_{n}$ two minus $n$, sheet $(Si_{2}O_{5})_{n}$ two minus $n$ share corners progressively.',
        detail: 'Hydrolysis of $Me_{2}SiCl_{2}$ gives silicone $Si-O$ chains capped by $Me_{3}SiCl$, with oil, rubber or resin set by crosslink ratio. Zeolite cages extend the same corner sharing to catalysis.'
      },
      {
        term: 'Tin lead inert pair chemistry',
        kind: 'insight',
        statement: 'A **plus two state grows from Ge to Pb** `Sn-Pb-pair` $Sn$ two plus reduces while $Pb$ two plus sits stable, and $Pb$ plus $4$ oxidises chloride to $Cl_{2}$.',
        detail: '$SnCl_{2}$ reduces $Fe$ three plus to $Fe$ two plus, while $PbO_{2}$ oxidises $Mn$ two plus to $MnO_{4}$ minus in acid. Red lead $Pb_{3}O_{4}$ is the mixed $2PbO$ dot $PbO_{2}$ oxide.'
      }
    ],
    figures: [
      {
        caption: 'Carbon keeps $C-C$ chains plus $CO_{2}$ molecules while silicon builds $SiO_{4}$ networks plus hydrolysable $SiCl_{4}$, with $Pb$ plus $2$ stable by the inert pair.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carbon silicon contrasts with silicate network and inert pair"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">C chains, CO2 gas</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">strong pi bonds</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">CCl4 inert</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">SiO4 network</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">SiCl4 hydrolyses</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">silicone chains</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">Sn2 plus to</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">Pb2 plus stable</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">Si O wins over Si Si every time</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Tetrachloride hydrolysis call',
        problem: '$CCl_{4}$ versus $SiCl_{4}$ drops of each meet moist air. Predict fuming and products.',
        steps: [
          { label: 'Step 1', text: 'Test coordination:\n```text\nC max 4, no low path -> inert\nSi reaches 5 or 6 -> hydrolyses\nSnCl4 like Si, PbCl4 oxidises\n```\nOctet expansion decides the outcome.' },
          { label: 'Step 2', text: 'Leave $CCl_{4}$ unchanged with no fumes in moist air.' },
          { label: 'Step 3', text: 'Hydrolyse $SiCl_{4}$ plus $H_{2}O$ to $SiO_{2}$ plus $HCl$ white fumes.' }
        ],
        result: '$SiCl_{4}$ fumes to silica plus $HCl$ while $CCl_{4}$ stays inert.'
      },
      {
        title: 'Lead oxide redox assignment',
        problem: 'Red lead $Pb_{3}O_{4}$ plus $HNO_{3}$ gives brown $PbO_{2}$ solid plus solution $Pb(NO_{3})_{2}$. Assign the mixed oxide.',
        steps: [
          { label: 'Step 1', text: 'Split $Pb_{3}O_{4}$ into $2PbO$ dot $PbO_{2}$ by oxidation states $+2$ plus $+4$.' },
          { label: 'Step 2', text: 'Dissolve $PbO$ part in $HNO_{3}$ to soluble $Pb$ two plus nitrate.' },
          { label: 'Step 3', text: 'Leave $PbO_{2}$ as the brown $+4$ residue, proving the mixed formulation.' }
        ],
        result: 'Red lead is $2PbO$ dot $PbO_{2}$, split by dilute $HNO_{3}$.'
      }
    ],
    keyTakeaways: [
      'Carbon catenates with strong pi bonds while silicon builds $Si-O$ networks.',
      '$SiCl_{4}$ hydrolyses by expansion but $CCl_{4}$ cannot pass the octet.',
      '$CO_{2}$ is molecular while $SiO_{2}$ is a giant corner shared lattice.',
      '$Sn$ two plus reduces and $Pb$ two plus rests stable by the inert pair.'
    ],
    quiz: [
      {
        q: '$SiCl_{4}$ fumes but $CCl_{4}$ does not because:',
        options: ['Silicon expands coordination, carbon cannot', 'Carbon is larger', 'Silicon lacks orbitals', '$C-Cl$ is weaker'],
        answer: 0,
        explanation: 'Step 1: Compare octet limits of $C$ versus $Si$. Step 2: Allow five or six coordinate $Si$ transition state. Step 3: Hydrolyse $SiCl_{4}$ while $CCl_{4}$ rests.'
      },
      {
        q: 'Strongest bond deciding silicon chemistry is:',
        options: ['$Si-Si$ near $230$ kJ per mol', '$Si-O$ near $368$ kJ per mol', '$C-H$ bond', '$O-H$ bond'],
        answer: 1,
        explanation: 'Step 1: List $Si-Si$ versus $Si-O$ values. Step 2: Note $Si-O$ exceeds by over $100$ kJ per mol. Step 3: Send silicon to oxides and silicates.'
      },
      // PYQ-pattern: mixed oxide formulation drill
      {
        q: 'Red lead $Pb_{3}O_{4}$ is formulated as:',
        options: ['$3PbO$ only', '$PbO_{2}$ only', '$2PbO$ dot $PbO_{2}$ mixed oxide', '$Pb$ metal plus $O_{2}$'],
        answer: 2,
        explanation: 'Step 1: Balance total $Pb$ as $+2$ plus $+4$. Step 2: Split into two $PbO$ plus one $PbO_{2}$. Step 3: Confirm by $HNO_{3}$ leaving brown $PbO_{2}$.'
      },
      {
        q: 'Silicone chains come from hydrolysis of:',
        options: ['$CCl_{4}$ plus water', '$NaCl$ brine', '$CH_{4}$ combustion', '$Me_{2}SiCl_{2}$ capped by $Me_{3}SiCl$'],
        answer: 3,
        explanation: 'Step 1: Hydrolyse difunctional $Me_{2}SiCl_{2}$ to chains. Step 2: Cap ends with monofunctional $Me_{3}SiCl$. Step 3: Set oil versus rubber by crosslinker share.'
      }
    ]
  },
  // ---------------------------------------------------------------- 37.3
  {
    sectionId: 'chem-ch37-s3',
    readingTime: 11,
    intro: 'Group $15$ spans basic ammonia, explosive hydrazine, the Ostwald nitric acid tower and the oxoacid ladder of phosphorus. Nitrogen caps at four coordination with strong $p$ pi to $p$ pi bonds, while phosphorus expands to five and six coordination with $P$ double bond $O$ payoff. The $P-H$ bond count in phosphorus oxoacids fixes both basicity and reducing power.',
    objectives: [
      'Order hydride basicity plus bond angle fall from $NH_{3}$ to $BiH_{3}$',
      'Write Haber plus Ostwald conditions with catalysts and equations',
      'Rank $H_{3}PO_{4}$ plus $H_{3}PO_{3}$ plus $H_{3}PO_{2}$ by $P-H$ count'
    ],
    concepts: [
      {
        term: 'Ammonia basicity and shape',
        kind: 'definition',
        statement: 'An **ammonia lone pair sets base plus ligand chemistry** `NH3-base` $NH_{3}$ pyramidal near $107$ degree donates to $H$ plus, $Ag$ plus and $Cu$ two plus centres.',
        detail: 'Down the group bond angles sink toward $90$ degree as heavier hydrides use near pure $p$ orbitals, and donor power fades so $PH_{3}$ barely dissolves in water. $NH_{3}$ plus $H_{2}O$ gives $NH_{4}$ plus $OH$ minus weakly.'
      },
      {
        term: 'Hydrazine and hydroxylamine redox',
        kind: 'theorem',
        statement: 'A **N-N single bond stores rocket grade energy** `N2H4-fuel` $N_{2}H_{4}$ gauche with $N$ minus $2$ state acts as reductant toward $I_{2}$ and $Cu$ two plus.',
        detail: 'Raschig synthesis oxidises $NH_{3}$ with $OCl$ minus, and $N_{2}H_{4}$ plus acid gives $N_{2}H_{5}$ plus salts with shortened $N-N$ debate. Hydroxylamine $NH_{2}OH$ bridges $NH_{3}$ and $HNO_{2}$ redox levels.'
      },
      {
        term: 'Nitric acid Ostwald ladder',
        kind: 'method',
        statement: 'An **ammonia burner climbs to nitric acid in three steps** `Ostwald` $NH_{3}$ plus $O_{2}$ over $Pt$ $Rh$ gives $NO$, then $NO_{2}$, then $HNO_{3}$ near $68$ percent azeotrope.',
        detail: '$N_{2}O$ is neutral laughing gas, $NO$ plus $NO_{2}$ are neutral to acidic radicals, and $N_{2}O_{5}$ is the true anhydride $2HNO_{3}$ minus $H_{2}O$. Concentrated $HNO_{3}$ passivates $Al$ and oxidises $Cu$ to $NO_{2}$.'
      },
      {
        term: 'Phosphorus allotropes and halides',
        kind: 'insight',
        statement: 'A **P4 tetrahedron strains toward polymer red and layered black** `P-allotrope` white $P_{4}$ ignites near $35$ degree while red polymer waits past $400$ degree.',
        detail: '$PCl_{3}$ is pyramidal and hydrolyses to $H_{3}PO_{3}$, while $PCl_{5}$ is trigonal bipyramidal gas that ionises to $PCl_{4}$ plus $PCl_{6}$ minus in the solid. $P_{4}O_{10}$ with six $P-O-P$ bridges dehydrates to $H_{3}PO_{4}$.'
      },
      {
        term: 'Phosphorus oxoacid ladder',
        kind: 'law',
        statement: 'A **P-H bond subtracts one unit of basicity** `P-oxoacid` $H_{3}PO_{4}$ tribasic non reducing, $H_{3}PO_{3}$ dibasic reducing, $H_{3}PO_{2}$ monobasic strongly reducing.',
        detail: 'Only $O-H$ protons ionise, so each $P-H$ cuts basicity by one and adds reducing power toward $Ag$ plus and $Cu$ two plus. Thermal routes interconvert them with $PH_{3}$ release.'
      }
    ],
    figures: [
      {
        caption: 'Haber $NH_{3}$ plus Ostwald $HNO_{3}$ towers beside $P_{4}$ tetrahedron and the $H_{3}PO_{4}$ to $H_{3}PO_{2}$ basicity ladder set by $P-H$ count.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nitrogen fixation routes and phosphorus oxoacid ladder"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">Haber NH3</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">Fe, heat, pressure</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">N2 plus H2</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Ostwald HNO3</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">Pt Rh, NO NO2</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">acid tower</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">P oxoacids</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">3 2 1 basic</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">each P H cuts basicity, adds reduction</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Oxoacid basicity assignment',
        problem: 'Three bottles hold $H_{3}PO_{4}$, $H_{3}PO_{3}$ and $H_{3}PO_{2}$. Assign basicity plus reducing order from structures.',
        steps: [
          { label: 'Step 1', text: 'Count P-H bonds:\n```text\nH3PO4: 0 P-H -> tribasic\nH3PO3: 1 P-H -> dibasic\nH3PO2: 2 P-H -> monobasic\nonly O-H ionises\n```\nReducing power rises with $P-H$ count.' },
          { label: 'Step 2', text: 'Rank basicity $H_{3}PO_{4}$ three over $H_{3}PO_{3}$ two over $H_{3}PO_{2}$ one.' },
          { label: 'Step 3', text: 'Reverse for reduction: $H_{3}PO_{2}$ strongest toward $Ag$ plus, $H_{3}PO_{4}$ silent.' }
        ],
        result: 'Basicity $3$ over $2$ over $1$ with reduction $1$ over $2$ over $3$ in reverse.'
      },
      {
        title: 'Brown ring precursor logic',
        problem: '$NO_{3}$ minus plus $FeSO_{4}$ plus concentrated $H_{2}SO_{4}$ gives the brown ring. Write the redox ladder behind it.',
        steps: [
          { label: 'Step 1', text: 'Reduce $NO_{3}$ minus with $Fe$ two plus in acid to $NO$ gas at the junction.' },
          { label: 'Step 2', text: 'Trap $NO$ on excess $Fe$ two plus as $Fe(H_{2}O)_{5}NO$ two plus brown complex.' },
          { label: 'Step 3', text: 'Layer acid below so the ring forms exactly at the interface.' }
        ],
        result: 'Brown $Fe$ $NO$ complex marks nitrate reduced to $NO$ in situ.'
      }
    ],
    keyTakeaways: [
      '$NH_{3}$ is pyramidal basic while heavier $MH_{3}$ flatten toward $90$ degree and weaken.',
      'Haber $Fe$ plus Ostwald $Pt$ $Rh$ towers fix nitrogen to $NH_{3}$ and $HNO_{3}$.',
      'White $P_{4}$ is strained reactive while red and black polymer forms stabilise.',
      'Each $P-H$ cuts oxoacid basicity by one and raises reducing power.'
    ],
    quiz: [
      {
        q: 'Bond angle trend $NH_{3}$ to $SbH_{3}$ is:',
        options: ['Falls from $107$ degree toward $90$ degree', 'Rises to $180$ degree', 'Stays fixed', 'Inverts to linear'],
        answer: 0,
        explanation: 'Step 1: Start $NH_{3}$ near $107$ degree pyramidal. Step 2: Shift heavier centres to pure $p$ bonding. Step 3: Settle angles near $90$ degree.'
      },
      // PYQ-pattern: phosphorus oxoacid basicity by P-H count
      {
        q: 'Basicity of $H_{3}PO_{2}$ is one because:',
        options: ['It has no oxygen', 'It has two $P-H$ bonds and one $O-H$ set', 'It is polymeric', 'Phosphorus is $+5$ always'],
        answer: 1,
        explanation: 'Step 1: Draw two $P-H$ plus one $P=O$ plus one $O-H$. Step 2: Ionise $O-H$ only. Step 3: Count one series of salts, monobasic.'
      },
      {
        q: 'Ostwald catalyst for $NH_{3}$ to $NO$ is:',
        options: ['$V_{2}O_{5}$ pellets', 'Iron filings cold', '$Pt$ $Rh$ gauze at high temperature', 'No catalyst needed'],
        answer: 2,
        explanation: 'Step 1: Burn $NH_{3}$ with $O_{2}$. Step 2: Pass over hot $Pt$ $Rh$ gauze. Step 3: Collect $NO$ then $NO_{2}$ to acid.'
      },
      {
        q: 'White phosphorus is stored under water since it:',
        options: ['Dissolves to acid', 'Is denser than mercury', 'Evaporates as $P_{2}$ only', 'Ignites near $35$ degree in air'],
        answer: 3,
        explanation: 'Step 1: Note strained $P_{4}$ tetrahedron. Step 2: Recall ignition near $35$ degree. Step 3: Blanket with water against air.'
      }
    ]
  },
  // ---------------------------------------------------------------- 37.4
  {
    sectionId: 'chem-ch37-s4',
    readingTime: 8,
    intro: 'Industrial nitrogen turns air into bread through two catalytic towers and a salt finishing line. The Haber synthesis forces $N_{2}$ plus $H_{2}$ to ammonia over promoted iron, and Ostwald burns part of it on to nitric acid. Phosphate rock plus ammonia then finish as superphosphate, urea and mixed $N$ $P$ $K$ grades.',
    objectives: [
      'State Haber plus Ostwald conditions with catalysts and trade offs',
      'Write superphosphate plus urea formation routes from rock and $NH_{3}$',
      'Explain $N$ $P$ $K$ label meaning with handling cautions'
    ],
    concepts: [
      {
        term: 'Haber Bosch equilibrium push',
        kind: 'definition',
        statement: 'A **high pressure moderate temperature iron bed makes ammonia** `Haber` $N_{2}$ plus $3H_{2}$ over $Fe$ near $450$ degree and $200$ atm gives $NH_{3}$ with $K$ promotion.',
        detail: 'Exothermic moles shrinking reaction wants cold plus pressure, but rate wants heat, so $450$ degree with recycle loop is the compromise. $CO$ plus sulfur poison the bed, so feed gas is scrubbed first.'
      },
      {
        term: 'Ostwald acid finishing',
        kind: 'method',
        statement: 'A **hot gauze burn converts ammonia to acid** `Ostwald-run` $NH_{3}$ to $NO$ to $NO_{2}$ to $HNO_{3}$ with absorption towers and tail gas bleach.',
        detail: 'Gauze near $900$ degree gives seconds of contact, then cooling plus oxidation plus water absorption build $68$ percent azeotropic acid. $NO$ recycle lifts overall yield toward $98$ percent.'
      },
      {
        term: 'Phosphate fertilizer routes',
        kind: 'theorem',
        statement: 'A **rock phosphate acidulation unlocks soluble P** `superphosphate` $Ca_{3}(PO_{4})_{2}$ plus $H_{2}SO_{4}$ gives $Ca(H_{2}PO_{4})_{2}$ plus $CaSO_{4}$ as single superphosphate.',
        detail: 'Using $H_{3}PO_{4}$ instead skips gypsum waste and gives triple superphosphate $Ca(H_{2}PO_{4})_{2}$ concentrated. Ammoniation then yields $MAP$ plus $DAP$ grades $NH_{4}H_{2}PO_{4}$ and $(NH_{4})_{2}HPO_{4}$.'
      },
      {
        term: 'Urea nitrogen carrier',
        kind: 'law',
        statement: 'A **urea prill packs the densest solid nitrogen** `urea` $NH_{3}$ plus $CO_{2}$ to $NH_{2}CONH_{2}$ near $46$ percent nitrogen by mass.',
        detail: 'High temperature pressure synthesis with ammonia recycle gives prills that hydrolyse in soil by urease to $NH_{4}$ plus $CO_{2}$. Biuret impurity above limits burns seedlings, so grade is capped.'
      },
      {
        term: 'NPK grades and safety',
        kind: 'insight',
        statement: 'A **label triple states N P K mass shares** `NPK` grade $15$ $15$ $15$ means equal nitrogen, phosphate and potash fractions with filler making the rest.',
        detail: 'Ammonium nitrate carries $35$ percent nitrogen but mixed with fuel it detonates, so prills add limestone to $CAN$ grade. $K$ comes from $KCl$ muriate or $K_{2}SO_{4}$ for chloride sensitive crops.'
      }
    ],
    figures: [
      {
        caption: 'Haber $Fe$ bed feeds Ostwald $Pt$ $Rh$ gauze, then rock phosphate plus $NH_{3}$ finish as superphosphate, urea $46$ percent $N$, and $NPK$ grades.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Haber to Ostwald to fertilizer finishing line"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">Haber Fe bed</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">pressure loop</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">NH3 out</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Ostwald gauze</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">NO to NO2</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">HNO3 tower</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">urea, MAP</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">superphosphate</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">recycle unreacted gas, scrub poisons first</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Haber recycle reasoning',
        problem: 'Single pass conversion is near $15$ percent yet the plant yields almost complete use of feed. Show the loop logic.',
        steps: [
          { label: 'Step 1', text: 'Balance the bed:\n```text\nN2 + 3H2 ⇋ 2NH3, exothermic\n450 degree, 200 atm, Fe-K-Al2O3\ncondense NH3, recycle N2 + H2\n```\nCold favours yield while heat favours rate.' },
          { label: 'Step 2', text: 'Condense $NH_{3}$ out after each pass to drag equilibrium right.' },
          { label: 'Step 3', text: 'Recycle unreacted $N_{2}$ plus $H_{2}$ so overall feed use nears completion.' }
        ],
        result: 'Low pass yield times recycle gives near full feed conversion.'
      },
      {
        title: 'Single versus triple superphosphate',
        problem: 'Rock $Ca_{3}(PO_{4})_{2}$ treated with $H_{2}SO_{4}$ versus $H_{3}PO_{4}$ gives different grades. Write both products.',
        steps: [
          { label: 'Step 1', text: 'Acidulate with $H_{2}SO_{4}$ to $Ca(H_{2}PO_{4})_{2}$ plus $CaSO_{4}$ gypsum ballast.' },
          { label: 'Step 2', text: 'Acidulate with $H_{3}PO_{4}$ to $Ca(H_{2}PO_{4})_{2}$ alone as triple grade concentrated.' },
          { label: 'Step 3', text: 'Ammoniate part of the acidulate to $MAP$ or $DAP$ for $N$ plus $P$ combined grades.' }
        ],
        result: 'Sulfuric route is single grade dilute, phosphoric route is triple grade rich.'
      }
    ],
    keyTakeaways: [
      'Haber $Fe$ bed near $450$ degree and $200$ atm with recycle beats low pass yield.',
      'Ostwald $Pt$ $Rh$ gauze burns $NH_{3}$ to $NO$ and finishes $HNO_{3}$ towers.',
      'Sulfuric acidulation gives single superphosphate, phosphoric gives triple.',
      'Urea near $46$ percent $N$ leads solids while $NPK$ labels state mass shares.'
    ],
    quiz: [
      {
        q: 'Haber compromise conditions are:',
        options: ['$Fe$ near $450$ degree and $200$ atm with recycle', 'Cold plus ambient pressure only', 'No catalyst at room state', 'Vacuum plus freezing'],
        answer: 0,
        explanation: 'Step 1: Note exothermic moles shrinking equilibrium. Step 2: Balance rate against yield near $450$ degree. Step 3: Pressurise and recycle unreacted gas.'
      },
      {
        q: 'Triple superphosphate avoids:',
        options: ['All phosphorus', 'Gypsum ballast by using $H_{3}PO_{4}$', 'Calcium fully', 'Water fully'],
        answer: 1,
        explanation: 'Step 1: React rock with $H_{3}PO_{4}$. Step 2: Skip $CaSO_{4}$ waste of the sulfuric route. Step 3: Concentrate $Ca(H_{2}PO_{4})_{2}$ grade.'
      },
      // PYQ-pattern: fertilizer grade and nitrogen share drill
      {
        q: 'Highest solid nitrogen share belongs to:',
        options: ['Sodium nitrate dilute', 'Gypsum waste', 'Urea near $46$ percent $N$', 'Sand filler'],
        answer: 2,
        explanation: 'Step 1: Write urea $NH_{2}CONH_{2}$ molar mass. Step 2: Count two nitrogens per formula. Step 3: Rank above ammonium salts and nitrates.'
      },
      {
        q: 'Ammonium nitrate handling rule is:',
        options: ['Mix freely with fuel oil', 'Store wet with organics', 'Heat sealed always', 'Keep from fuel plus heat as $CAN$ cuts risk'],
        answer: 3,
        explanation: 'Step 1: Note oxidiser plus fuel detonation pair. Step 2: Dilute with limestone to $CAN$. Step 3: Store cool away from fuels.'
      }
    ]
  }
]
