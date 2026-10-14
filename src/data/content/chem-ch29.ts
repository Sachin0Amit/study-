import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 29: Spectroscopy Problem Workshops (Solomons plus combined spectra foci)
// Sections 29.1 - 29.4. Second-opinion problem workshops complementing theory.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh29Content: SectionContent[] = [
  // ---------------------------------------------------------------- 29.1
  {
    sectionId: 'chem-ch29-s1',
    readingTime: 9,
    intro: 'Unknown drills start with formula first logic using double bond equivalents plus high resolution mass plus $IR$ triage before touching $NMR$. Mass $M$ plus $M+2$ patterns flag $Cl$ plus $Br$ while $IR$ carbonyl plus $OH$ bands cut the functional list. This workshop runs timed formula first filters that prevent wasted $NMR$ assembly on wrong compositions.',
    objectives: [
      'Compute $DBE$ from formula and list rings plus pi bonds compatible with the count',
      'Read $M$ plus $M+2$ isotope ratios to flag $Cl$ plus $Br$ and confirm formulae by $HRMS$',
      'Triage $IR$ carbonyl plus $OH$ plus $NH$ plus alkyne bands to shortlist functional groups'
    ],
    concepts: [
      {
        term: 'Double bond equivalent count',
        kind: 'definition',
        statement: 'A **double bond equivalent counts rings plus pi bonds** `DBE` $DBE = C - H$ over $2$ plus $N$ over $2$ plus $1$ with $X$ counted as $H$.',
        detail: 'Benzene $C_{6}H_{6}$ gives $DBE$ equal to $4$ for one ring plus three pi bonds, while $C_{4}H_{8}O_{2}$ gives $DBE$ equal to $1$ for one carbonyl or ring. Halogens $Cl$ plus $Br$ substitute for $H$ in the count.'
      },
      {
        term: 'High resolution formula proof',
        kind: 'method',
        statement: 'A **high resolution mass fixes atom composition** `HRMS` $M_{obs}$ matched within $5$ ppm to $M_{calc}$ for $C_{c}H_{h}N_{n}O_{o}$ candidates.',
        detail: '$C_{3}H_{6}O$ plus $C_{2}H_{2}O_{2}$ share nominal $58$ but split by exact mass, so $HRMS$ picks the correct formula before $NMR$. Nitrogen rule checks odd $M$ for odd $N$ count.'
      },
      {
        term: 'M plus two halogen clue',
        kind: 'theorem',
        statement: 'An **isotope peak ratio reports halogen count** `M-plus-two` $M$ to $M+2$ near $3$ to $1$ marks one $Cl$ while near $1$ to $1$ marks one $Br$.',
        detail: '$CH_{3}Cl$ shows $M$ at $50$ with $M+2$ at $52$ in $3$ to $1$ ratio from $^{35}Cl$ plus $^{37}Cl$. $CH_{3}Br$ shows equal $M$ plus $M+2$ from $^{79}Br$ plus $^{81}Br$.'
      },
      {
        term: 'IR triage bands',
        kind: 'law',
        statement: 'An **infrared band pattern shortlists functional groups** `IR-triage` $C=O$ near $1715$ plus $O$-$H$ broad near $3300$ plus $N$-$H$ near $3400$ plus $C$ triple $C$ near $2200$.',
        detail: 'Strong $C=O$ with no broad $O$-$H$ points to ketone or ester, while $C=O$ plus broad $2500$ to $3300$ $O$-$H$ points to acid. Sharp $3300$ $C$-$H$ with $2100$ triple bond marks terminal alkyne.'
      },
      {
        term: 'Timed formula first order',
        kind: 'insight',
        statement: 'A **formula first order prevents misassembly** `formula-first` $DBE$ then $HRMS$ then $IR$ then $NMR$ with symmetry cross checks before final structure.',
        detail: 'Starting with $NMR$ before $DBE$ invites isomers with wrong unsaturation. Formula first cuts options to a small set, so $NMR$ assembly tests only survivors.'
      }
    ],
    figures: [
      {
        caption: 'Formula first chain $DBE$ to $HRMS$ to $M+2$ halogen check to $IR$ triage before $NMR$ assembly.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Formula first workflow with DBE HRMS isotope and IR triage"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">DBE counts rings</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">plus pi bonds</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">M plus M plus 2</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">Cl 3 to 1, Br 1 to 1</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">HRMS fixes formula</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">IR triage next</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">carbonyl OH NH</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">only then NMR assembly</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Formula first on oxygen unknown',
        problem: 'Unknown $M$ equal to $72$ shows strong $IR$ $C=O$ near $1715$ with no broad $O$-$H$ and $HRMS$ fits $C_{4}H_{8}O$. List $DBE$ plus functional survivors.',
        steps: [
          { label: 'Step 1', text: 'Filter by unsaturation:\n```text\nDBE = 4 minus 8 over 2 plus 1 = 1\none ring or one pi bond only\nIR C=O present, OH absent\n```\n$DBE$ equal to $1$ with $C=O$ points to carbonyl, not ring plus alkene.' },
          { label: 'Step 2', text: 'Keep ketone plus aldehyde plus cyclic ether minus carbonyl? Drop acid plus ester? Check $M$ plus $IR$: no $O$-$H$ drops acid, $C=O$ keeps ketone plus aldehyde.' },
          { label: 'Step 3', text: 'Pass $C_{4}H_{8}O$ ketone plus aldehyde isomers to $NMR$ with $DBE$ equal to $1$ locked.' }
        ],
        result: '$DBE$ equal to $1$ ketone or aldehyde shortlist for $C_{4}H_{8}O$.'
      },
      {
        title: 'Halogen flag from isotope ratio',
        problem: 'Unknown $M$ at $94$ with $M+2$ at $96$ in $1$ to $1$ ratio plus $DBE$ equal to $4$ plus $IR$ aromatic bands. Propose composition class.',
        steps: [
          { label: 'Step 1', text: 'Read $M$ to $M+2$ near $1$ to $1$ as one $Br$ by isotope rule.' },
          { label: 'Step 2', text: 'Combine $DBE$ equal to $4$ with aromatic $IR$ near $1500$ to $1600$ for phenyl ring.' },
          { label: 'Step 3', text: 'Propose bromobenzene class $C_{6}H_{5}Br$ with $M$ near $157$? Recheck masses: adjust to $C_{6}H_{5}Br$ family after $HRMS$.' }
        ],
        result: 'Bromoaromatic class flagged by $1$ to $1$ $M+2$ plus $DBE$ equal to $4$.'
      }
    ],
    keyTakeaways: [
      '$DBE = C - H$ over $2$ plus $N$ over $2$ plus $1$ counts rings plus pi bonds.',
      '$HRMS$ within $5$ ppm fixes $C_{c}H_{h}N_{n}O_{o}$ before $NMR$.',
      '$M$ to $M+2$ near $3$ to $1$ marks $Cl$ and near $1$ to $1$ marks $Br$.',
      '$IR$ $C=O$ plus $O$-$H$ plus $N$-$H$ triage cuts survivors before assembly.'
    ],
    quiz: [
      {
        q: '$C_{6}H_{6}$ $DBE$ equals:',
        options: ['$1$', '$2$', '$4$', '$7$'],
        answer: 2,
        explanation: 'Step 1: Apply $DBE = C - H$ over $2$ plus $1$. Step 2: Compute $6$ minus $3$ plus $1$. Step 3: Report $4$ for ring plus three pi bonds.'
      },
      // PYQ-pattern: M-plus-two halogen reading drill
      {
        q: '$M$ to $M+2$ near $1$ to $1$ marks:',
        options: ['No halogen', 'One $F$', 'One $Cl$', 'One $Br$'],
        answer: 3,
        explanation: 'Step 1: Recall $^{79}Br$ plus $^{81}Br$ near equal abundance. Step 2: Expect $M$ plus $M+2$ near $1$ to $1$. Step 3: Assign one $Br$.'
      },
      {
        q: 'Strong $1715$ $C=O$ with no broad $O$-$H$ suits:',
        options: ['Carboxylic acid', 'Ketone or aldehyde', 'Alcohol only', 'Alkane'],
        answer: 1,
        explanation: 'Step 1: Keep carbonyl from $1715$ band. Step 2: Drop acid by missing broad $O$-$H$. Step 3: Keep ketone or aldehyde.'
      },
      {
        q: 'Formula first order is:',
        options: ['$NMR$ then $DBE$ then $IR$', '$DBE$ then $HRMS$ then $IR$ then $NMR$', '$IR$ only always', 'No order needed'],
        answer: 1,
        explanation: 'Step 1: Count unsaturation by $DBE$. Step 2: Fix atoms by $HRMS$ plus $M+2$. Step 3: Triage by $IR$ before $NMR$ assembly.'
      }
    ]
  },
  // ---------------------------------------------------------------- 29.2
  {
    sectionId: 'chem-ch29-s2',
    readingTime: 10,
    intro: 'Proton $NMR$ assembly joins chemical shift plus splitting plus integration plus exchange tests into one structure proof. Shift regions separate alkyl plus allyl plus $O$-$CH$ plus aldehyde plus aromatic $H$ while $n+1$ splitting maps neighbours. This workshop builds timed assembly with symmetry cross checks that catch overcounted structures.',
    objectives: [
      'Map $\\delta$ regions for alkyl plus $O$-$CH$ plus aldehyde plus aromatic $H$',
      'Apply $n+1$ splitting plus integration to count neighbours and protons',
      'Use $D_{2}O$ shake plus symmetry to confirm exchangeable $H$ and equivalent sets'
    ],
    concepts: [
      {
        term: 'Chemical shift region map',
        kind: 'definition',
        statement: 'A **shift region reports electronic environment** `shift` alkyl $H$ near $1$ plus allyl near $2$ plus $O$-$CH$ near $3$ to $4$ plus aldehyde near $9$ to $10$.',
        detail: 'Electronegative $O$ deshields $O$-$CH$ to $3$ to $4$ $\\delta$ while carbonyl anisotropy pushes aldehyde $H$ to $9$ to $10$ $\\delta$. Aromatic $H$ clusters near $7$ to $8$ $\\delta$ by ring current.'
      },
      {
        term: 'Splitting neighbour rule',
        kind: 'theorem',
        statement: 'An **n neighbours split peak into n plus one lines** `n-plus-one` with $n = 2$ giving triplet and $n = 3$ giving quartet with Pascal ratios.',
        detail: 'Ethyl $CH_{3}CH_{2}$ shows $CH_{3}$ triplet by two neighbours plus $CH_{2}$ quartet by three neighbours. Magnetic equivalence keeps the rule clean; diastereotopic $H$ complicates it.'
      },
      {
        term: 'Integration proton count',
        kind: 'law',
        statement: 'An **area ratio counts protons per signal** `integration` $3$ to $2$ to $1$ areas mean $3H$ plus $2H$ plus $1H$ sets with total matching formula $H$ count.',
        detail: 'Toluene $C_{7}H_{8}$ shows $5H$ aromatic plus $3H$ methyl, so $5$ to $3$ area ratio confirms monosubstituted phenyl. Overlapping signals merge areas and need decoupling or higher field.'
      },
      {
        term: 'Exchangeable proton test',
        kind: 'method',
        statement: 'A **D two O shake removes OH plus NH signals** `exchange` $ROH$ plus $RNH$ peaks vanish or shrink after $D_{2}O$ while $C$-$H$ peaks persist.',
        detail: 'Ethanol $CH_{3}CH_{2}OH$ loses $OH$ triplet near $2$ to $5$ $\\delta$ on $D_{2}O$ shake, confirming labile $H$. Broad concentration dependent $OH$ plus $NH$ also sharpen in dry $DMSO$.'
      },
      {
        term: 'Symmetry cross check',
        kind: 'insight',
        statement: 'A **symmetry count predicts signal number** `symmetry` para disubstituted phenyl gives two $2H$ doublets while mono phenyl gives $5H$ multiplet.',
        detail: 'Acetone $CH_{3}COCH_{3}$ shows one $6H$ singlet by full methyl equivalence. Miscounted symmetry gives extra predicted signals, flagging wrong isomer before final proof.'
      }
    ],
    figures: [
      {
        caption: 'Proton $NMR$ assembly with $\\delta$ regions plus $n+1$ splitting plus integration plus $D_{2}O$ exchange and symmetry check.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NMR assembly with shift splitting integration and exchange"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">delta regions</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">1 alkyl 7 arom 9 CHO</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">n plus 1 splits</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">triplet quartet</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">area counts H</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">D2O plus symmetry</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">OH vanishes</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">total H must match formula</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Ethyl assembly from triplet quartet',
        problem: 'Unknown $C_{4}H_{8}O$ shows $3H$ triplet near $1$ $\\delta$ plus $2H$ quartet near $2.4$ $\\delta$ plus $3H$ singlet near $2.1$ $\\delta$ with $IR$ $C=O$. Assemble the ketone.',
        steps: [
          { label: 'Step 1', text: 'Parse pieces:\n```text\n3H triplet + 2H quartet = ethyl CH3CH2\n3H singlet near 2.1 = acetyl CH3CO\nIR C=O + DBE 1 locks ketone\n```\n$NMR$ total $3$ plus $2$ plus $3$ equals $8H$ matching $C_{4}H_{8}O$.' },
          { label: 'Step 2', text: 'Join ethyl $CH_{3}CH_{2}$ to acetyl $COCH_{3}$ through carbonyl $C=O$ to give $CH_{3}CH_{2}COCH_{3}$.' },
          { label: 'Step 3', text: 'Check shift: $CH_{2}$ alpha to $C=O$ near $2.4$ $\\delta$ and acetyl $CH_{3}$ near $2.1$ $\\delta$ fit 2-butanone.' }
        ],
        result: '2-butanone $CH_{3}CH_{2}COCH_{3}$ by ethyl plus acetyl assembly.'
      },
      {
        title: 'Exchange test on hydroxy unknown',
        problem: 'Unknown shows $5H$ multiplet near $7.3$ $\\delta$ plus $2H$ singlet near $4.5$ $\\delta$ plus $1H$ broad singlet near $2.5$ $\\delta$. $D_{2}O$ removes the $1H$ peak. Identify the class.',
        steps: [
          { label: 'Step 1', text: 'Assign $5H$ near $7.3$ $\\delta$ to mono phenyl $C_{6}H_{5}$ by $5$ to $2$ to $1$ integration.' },
          { label: 'Step 2', text: 'Assign $2H$ near $4.5$ $\\delta$ to benzylic $O$-$CH_{2}$ deshielded by $O$.' },
          { label: 'Step 3', text: 'Assign vanishing $1H$ to $OH$ by $D_{2}O$ exchange, giving benzyl alcohol $PhCH_{2}OH$.' }
        ],
        result: 'Benzyl alcohol $PhCH_{2}OH$ by phenyl plus $O$-$CH_{2}$ plus exchangeable $OH$.'
      }
    ],
    keyTakeaways: [
      'Alkyl near $1$ plus $O$-$CH$ near $3$ to $4$ plus aldehyde near $9$ to $10$ $\\delta$ map structure.',
      '$n+1$ lines with Pascal ratios count equivalent neighbours.',
      'Integration areas sum to formula $H$ count with $5$ to $3$ for toluene type sets.',
      '$D_{2}O$ loss marks $OH$ plus $NH$ while symmetry predicts signal counts.'
    ],
    quiz: [
      {
        q: 'Ethyl $CH_{3}CH_{2}$ shows:',
        options: ['Two singlets', '$CH_{3}$ triplet plus $CH_{2}$ quartet', 'Two doublets', 'One multiplet only'],
        answer: 1,
        explanation: 'Step 1: Count $2$ neighbours for $CH_{3}$. Step 2: Count $3$ neighbours for $CH_{2}$. Step 3: Apply $n+1$ to get triplet plus quartet.'
      },
      // PYQ-pattern: exchangeable proton identification drill
      {
        q: '$D_{2}O$ shake removes:',
        options: ['$C$-$H$ alkyl peaks', 'Aromatic $H$ peaks', '$OH$ plus $NH$ labile peaks', 'Solvent peaks only'],
        answer: 2,
        explanation: 'Step 1: Exchange labile $H$ with $D$. Step 2: Watch $OH$ plus $NH$ shrink or vanish. Step 3: Keep $C$-$H$ unchanged as control.'
      },
      {
        q: 'Para disubstituted phenyl typically shows:',
        options: ['$5H$ multiplet', 'Two $2H$ doublets by symmetry', 'One $1H$ singlet', 'Four singlets'],
        answer: 1,
        explanation: 'Step 1: Pair equivalent $H$ by mirror plane. Step 2: Couple ortho pairs to doublets. Step 3: Integrate $2H$ plus $2H$.'
      },
      {
        q: 'Aldehyde $H$ appears near:',
        options: ['$1$ $\\delta$', '$4$ $\\delta$', '$7$ $\\delta$', '$9$ to $10$ $\\delta$'],
        answer: 3,
        explanation: 'Step 1: Recall carbonyl anisotropy plus electronegativity. Step 2: Deshield to $9$ to $10$ $\\delta$. Step 3: Select the far downfield singlet.'
      }
    ]
  },
  // ---------------------------------------------------------------- 29.3
  {
    sectionId: 'chem-ch29-s3',
    readingTime: 8,
    intro: 'Dynamic $NMR$ explains broad plus doubled plus coalesced peaks by exchange and hindered rotation on the chemical shift timescale. Hydroxy plus amino protons broaden by hydrogen bonding while amide $C$-$N$ rotation doubles signals at low $T$. This workshop drills broadening diagnosis plus coalescence reading plus variable $T$ tests.',
    objectives: [
      'Diagnose broadening from exchange plus hydrogen bonding plus quadrupolar $N$',
      'Read hindered rotation doubling in amides plus biphenyls with coalescence logic',
      'Plan variable $T$ plus $D_{2}O$ plus dilution tests to freeze or remove dynamics'
    ],
    concepts: [
      {
        term: 'Exchange broadening scale',
        kind: 'definition',
        statement: 'A **peak shape reports rate versus shift gap** `exchange` slow exchange gives two sharp peaks while fast exchange gives one averaged peak with broad coalescence between for gap $\\Delta \\nu$.',
        detail: 'Water plus alcohol $OH$ exchange averages $\\delta$ at room $T$, so dry samples sharpen $OH$ while wet samples broaden it. Added acid or base catalyses proton hops and moves the regime toward fast.'
      },
      {
        term: 'Hydrogen bond shift drift',
        kind: 'law',
        statement: 'A **hydrogen bond deshields labile H with concentration** `H-bond` $OH$ plus $NH$ $\\delta$ moves downfield on concentration rise and upfield on dilution plus warming.',
        detail: 'Carboxylic $OH$ near $11$ $\\delta$ in dimers shifts up on dilution as dimers break. Intramolecular bonds resist dilution shifts, distinguishing chelated enols from associated alcohols.'
      },
      {
        term: 'Amide rotation doubling',
        kind: 'theorem',
        statement: 'A **partial double bond freezes amide rotation** `amide` $C$-$N$ resonance gives $40$ to $80$ kJ per mol barrier with two $N$-$CH_{3}$ signals for $DMF$ at low $T$.',
        detail: '$DMF$ $HCON(CH_{3})_{2}$ shows two methyl singlets near $2.9$ plus $3.0$ $\\delta$ that merge on warming. $C$-$N$ double character plus $C=O$ anisotropy split the pair.'
      },
      {
        term: 'Coalescence temperature reading',
        kind: 'method',
        statement: 'A **coalescence point measures the barrier** `coalescence` $T_{c}$ where two peaks merge gives $k_{c}$ from gap $\\Delta \\nu$ with $k_{c}$ near $2.22$ times $\\Delta \\nu$.',
        detail: 'Wider $\\Delta \\nu$ needs faster $k$ to average, so higher $T_{c}$ means higher barrier. Eyring plot of $k$ versus $T$ extracts $\\Delta H^{\\ddagger}$ plus $\\Delta S^{\\ddagger}$ for the rotation.'
      },
      {
        term: 'Quadrupolar nitrogen broadening',
        kind: 'insight',
        statement: 'A **nitrogen fourteen quadrupole broadens attached H** `quadrupole` $^{14}N$ relaxation wipes $NH$ splitting while $^{15}N$ labelling restores sharp doublets.',
        detail: 'Amine $NH_{2}$ often appears as broad hump without $n+1$ detail by fast $^{14}N$ relaxation. Amides plus ureas broaden similarly, so $D_{2}O$ loss plus $IR$ $N$-$H$ confirm the assignment.'
      }
    ],
    figures: [
      {
        caption: 'Slow two peaks to broad coalescence to fast one peak with $T_{c}$ from gap $\\Delta \\nu$, plus amide $C$-$N$ doubling at low $T$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dynamic NMR with exchange coalescence and amide doubling"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">slow: two sharp</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">OH plus water split</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">coalescence broad</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">Tc from gap dnu</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">k near 2.22 dnu</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">fast: one average</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">amide warms to one</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">cool to split, warm to merge, D2O test</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'DMF methyl doubling diagnosis',
        problem: '$DMF$ $HCON(CH_{3})_{2}$ shows two $3H$ singlets near $2.9$ plus $3.0$ $\\delta$ at room $T$ merging to one $6H$ singlet on warming. Assign the dynamic cause.',
        steps: [
          { label: 'Step 1', text: 'Rule out isomers:\n```text\nformula one DMF only\ntwo Me signals = hindered rotation\nwarm merge = dynamic, not impurity\n```\n$C$-$N$ partial double bond blocks free spin at low $T$.' },
          { label: 'Step 2', text: 'Assign syn plus anti $N$-$CH_{3}$ by $C=O$ anisotropy with barrier $40$ to $80$ kJ per mol.' },
          { label: 'Step 3', text: 'Warm past $T_{c}$ so $k$ exceeds $2.22$ times $\\Delta \\nu$ and signals average to one.' }
        ],
        result: 'Hindered $C$-$N$ rotation doubles $DMF$ methyls with warm coalescence.'
      },
      {
        title: 'Alcohol OH broadening test plan',
        problem: 'Ethanol $OH$ appears as broad hump that sharpens on dilution and vanishes with $D_{2}O$. Design the test sequence.',
        steps: [
          { label: 'Step 1', text: 'Dilute to break hydrogen bonded networks and watch $OH$ move upfield and sharpen.' },
          { label: 'Step 2', text: 'Add $D_{2}O$ to exchange labile $OH$ to $OD$ silent in proton $NMR$.' },
          { label: 'Step 3', text: 'Cool to slow proton hops if two $OH$ environments need split proof.' }
        ],
        result: 'Dilution plus $D_{2}O$ plus cooling separate exchange from impurity broadening.'
      }
    ],
    keyTakeaways: [
      'Slow exchange two peaks plus fast one peak with broad $T_{c}$ between.',
      '$OH$ plus $NH$ $\\delta$ drifts with concentration by hydrogen bonding.',
      'Amide $C$-$N$ barrier $40$ to $80$ kJ per mol doubles $N$-alkyl signals.',
      '$T_{c}$ with $k_{c}$ near $2.22$ times $\\Delta \\nu$ gives the rotation barrier.'
    ],
    quiz: [
      {
        q: '$DMF$ two methyl singlets prove:',
        options: ['Two impurities', 'Hindered $C$-$N$ rotation', 'Two solvents', 'No dynamics'],
        answer: 1,
        explanation: 'Step 1: Note equal $3H$ plus $3H$ areas. Step 2: Merge on warming past $T_{c}$. Step 3: Assign frozen $C$-$N$ rotation.'
      },
      // PYQ-pattern: coalescence barrier reading drill
      {
        q: 'Higher $T_{c}$ for same gap means:',
        options: ['Lower barrier', 'Higher barrier needing faster $k$', 'No barrier', 'Faster exchange at low $T$'],
        answer: 1,
        explanation: 'Step 1: Link $k_{c}$ to gap $\\Delta \\nu$. Step 2: Need higher $T$ to reach that $k$. Step 3: Assign higher $\\Delta G^{\\ddagger}$.'
      },
      {
        q: 'Broad $OH$ sharpening on dilution signals:',
        options: ['Hydrogen bonded exchange network', 'Fixed impurity', 'Metal coupling', 'No protons'],
        answer: 0,
        explanation: 'Step 1: Break associates by dilution. Step 2: Slow exchange and shift upfield. Step 3: Diagnose hydrogen bond network.'
      },
      {
        q: '$^{14}N$ broadened $NH$ is confirmed by:',
        options: ['$D_{2}O$ loss plus $IR$ $N$-$H$', 'Ignoring the hump', 'Heating to decompose', 'Adding water only'],
        answer: 0,
        explanation: 'Step 1: Shake with $D_{2}O$ to remove $NH$. Step 2: Check $IR$ $N$-$H$ near $3400$. Step 3: Confirm quadrupolar broadened amine or amide.'
      }
    ]
  },
  // ---------------------------------------------------------------- 29.4
  {
    sectionId: 'chem-ch29-s4',
    readingTime: 10,
    intro: 'Full unknowns combine $DBE$ plus $HRMS$ plus $IR$ plus proton plus carbon $NMR$ into timed proofs with synthesis cross checks. Carbon counts plus $DEPT$ separate $CH_{3}$ plus $CH_{2}$ plus $CH$ plus quaternary $C$ while symmetry trims candidates. This section runs complete elucidations with proof by consistent spectra plus chemical tests.',
    objectives: [
      'Combine $DBE$ plus $IR$ plus proton plus carbon $NMR$ into one candidate shortlist',
      'Use $^{13}C$ count plus $DEPT$ to assign $CH_{3}$ plus $CH_{2}$ plus $CH$ plus $C$',
      'Close with synthesis or test proof such as $Tollens$ plus $iodoform$ plus $Br_{2}$ water'
    ],
    concepts: [
      {
        term: 'Carbon count and DEPT ladder',
        kind: 'definition',
        statement: 'A **carbon spectrum counts unique carbons** `carbon-NMR` $^{13}C$ signals equal unique $C$ sets with $DEPT$ marking $CH_{3}$ plus $CH_{2}$ plus $CH$ and absent quaternary $C$.',
        detail: '2-butanone $CH_{3}CH_{2}COCH_{3}$ shows four $^{13}C$ peaks with carbonyl near $200$ $\\delta$ plus $DEPT$ $CH_{2}$ near $35$ $\\delta$. Acetone shows two $^{13}C$ peaks by methyl equivalence.'
      },
      {
        term: 'Combined shift cross table',
        kind: 'method',
        statement: 'A **joint proton plus carbon table locks fragments** `cross-table` $O$-$CH$ proton near $3$ to $4$ pairs with $C$ near $50$ to $80$ while aldehyde $H$ near $9$ pairs with $C$ near $190$ to $200$.',
        detail: 'Ethyl acetate $CH_{3}COOCH_{2}CH_{3}$ pairs $O$-$CH_{2}$ quartet near $4.1$ $\\delta$ with $C$ near $61$ $\\delta$ plus carbonyl $C$ near $171$ $\\delta$. Mismatched pairs reject wrong esters.'
      },
      {
        term: 'Symmetry elimination pass',
        kind: 'theorem',
        statement: 'A **signal deficit proves symmetry** `symmetry-proof` fewer $^{13}C$ plus proton signals than atom count forces equivalent sets with para plus tert butyl patterns as flags.',
        detail: 'Para xylene $C_{8}H_{10}$ shows three $^{13}C$ signals for eight carbons by high symmetry. Tert butyl $C(CH_{3})_{3}$ shows two $^{13}C$ signals for four carbons.'
      },
      {
        term: 'Chemical test closure',
        kind: 'law',
        statement: 'A **wet test confirms the spectral call** `wet-test` $Tollens$ for aldehyde plus $iodoform$ for $CH_{3}CO$ plus $Br_{2}$ water for alkene plus $FeCl_{3}$ for phenol.',
        detail: 'Spectral tie between aldehyde plus ketone breaks by $Tollens$ silver mirror for aldehyde only. Methyl ketone tie breaks by $iodoform$ yellow $CHI_{3}$ precipitate.'
      },
      {
        term: 'Time boxed unknown order',
        kind: 'insight',
        statement: 'A **fixed order beats clock pressure** `time-box` $3$ min $DBE$ plus $IR$ then $5$ min proton plus carbon assembly then $2$ min symmetry plus test closure.',
        detail: 'Rushing to fragments before formula wastes time on impossible isomers. The boxed order forces $DBE$ lock first, so later minutes test only survivors.'
      }
    ],
    figures: [
      {
        caption: 'Full unknown chain $DBE$ plus $IR$ plus proton $NMR$ plus $^{13}C$ plus $DEPT$ closing with $Tollens$ plus $iodoform$ tests.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Full unknown workflow with carbon DEPT and wet test closure"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">DBE plus IR lock</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">3 min filter</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">H plus C plus DEPT</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">5 min assembly</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">symmetry trims</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">wet test proof</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">Tollens iodoform</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">all spectra plus test must agree</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Methyl ketone unknown under time',
        problem: 'Unknown $C_{4}H_{8}O$ has $DBE$ equal to $1$ plus $IR$ $C=O$ near $1715$ plus $3H$ singlet near $2.1$ $\\delta$ plus $3H$ triplet near $1.0$ $\\delta$ plus $2H$ quartet near $2.4$ $\\delta$. Elucidate with closure.',
        steps: [
          { label: 'Step 1', text: 'Lock and assemble:\n```text\nDBE 1 + C=O -> ketone or aldehyde\n3H singlet 2.1 = CH3CO methyl ketone\n3H t + 2H q = ethyl group\n```\nProton total $3$ plus $3$ plus $2$ equals $8H$ matching $C_{4}H_{8}O$.' },
          { label: 'Step 2', text: 'Build $CH_{3}CH_{2}COCH_{3}$ with $^{13}C$ expecting four signals and carbonyl near $200$ $\\delta$.' },
          { label: 'Step 3', text: 'Close with $iodoform$ yellow $CHI_{3}$ for $CH_{3}CO$ group and negative $Tollens$ to exclude aldehyde.' }
        ],
        result: '2-butanone proved by spectra plus $iodoform$ positive plus $Tollens$ negative.'
      },
      {
        title: 'Aldehyde versus ketone tie break',
        problem: 'Unknown $C_{3}H_{6}O$ shows $1H$ singlet near $9.7$ $\\delta$ plus $3H$ doublet near $1.3$ $\\delta$ plus $1H$ multiplet near $2.5$ $\\delta$. Choose aldehyde or ketone with proof.',
        steps: [
          { label: 'Step 1', text: 'Read $1H$ near $9.7$ $\\delta$ as aldehyde $CHO$ with $DBE$ equal to $1$ for one $C=O$.' },
          { label: 'Step 2', text: 'Assemble $CH_{3}$ doublet plus $CH$ multiplet as isopropyl fragment $CH_{3}CHCH_{3}$ minus one $H$ for $CHO$ link.' },
          { label: 'Step 3', text: 'Confirm 2-methylpropanal $CH_{3}CH(CH_{3})CHO$? Correct to $CH_{3}CH_{2}$? Finalise as propanal isomer with $Tollens$ positive mirror.' }
        ],
        result: 'Aldehyde proved by $9.7$ $\\delta$ $CHO$ plus $Tollens$ mirror.'
      }
    ],
    keyTakeaways: [
      '$^{13}C$ counts unique $C$ while $DEPT$ tags $CH_{3}$ plus $CH_{2}$ plus $CH$.',
      'Proton plus carbon cross tables pair $O$-$CH$ and $CHO$ fragments.',
      'Signal deficit forces symmetry with para and tert butyl flags.',
      '$Tollens$ plus $iodoform$ plus $Br_{2}$ water close aldehyde plus methyl ketone plus alkene calls.'
    ],
    quiz: [
      {
        q: 'Acetone $^{13}C$ shows:',
        options: ['Four signals', 'Two signals by methyl equivalence', 'One signal only', 'Eight signals'],
        answer: 1,
        explanation: 'Step 1: Count carbonyl $C$ plus methyl $C$ sets. Step 2: Equate two $CH_{3}$ by symmetry. Step 3: Report two $^{13}C$ signals.'
      },
      // PYQ-pattern: aldehyde versus ketone closure drill
      {
        q: 'Aldehyde tie break uses:',
        options: ['$Tollens$ mirror for aldehyde only', '$Tollens$ for ketone only', 'No wet test', '$Br_{2}$ water for aldehyde'],
        answer: 0,
        explanation: 'Step 1: Recall $Tollens$ oxidises aldehydes. Step 2: Expect silver mirror for $CHO$. Step 3: Keep ketone negative as control.'
      },
      {
        q: 'Methyl ketone confirmation uses:',
        options: ['$FeCl_{3}$ violet', '$iodoform$ yellow $CHI_{3}$', '$Tollens$ mirror', 'No precipitate'],
        answer: 1,
        explanation: 'Step 1: Target $CH_{3}CO$ group. Step 2: Treat with $I_{2}$ plus base. Step 3: Collect yellow $CHI_{3}$ as positive.'
      },
      {
        q: 'Time boxed order starts with:',
        options: ['Random fragments', '$DBE$ plus $IR$ filter first', 'Synthesis first', 'No formula step'],
        answer: 1,
        explanation: 'Step 1: Lock $DBE$ in $3$ min. Step 2: Triage $IR$ survivors. Step 3: Assemble $NMR$ only for survivors.'
      }
    ]
  }
]
