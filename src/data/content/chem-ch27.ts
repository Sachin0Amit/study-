import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 27: Solutions Colligative Properties and Phase Equilibria (Mahan foci 4, 8)
// Sections 27.1 - 27.4. Second-opinion problem workshops complementing theory.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh27Content: SectionContent[] = [
  // ---------------------------------------------------------------- 27.1
  {
    sectionId: 'chem-ch27-s1',
    readingTime: 9,
    intro: 'Mahan builds ideal solutions from vapour pressure lowering where $P_{A}$ falls as $x_{A}$ times $P_{A}^{\\circ}$ and the lowering grows with temperature. Real pairs deviate when unlike attractions differ from like attractions, giving activity corrections and constant boiling azeotropes that resist separation by distillation. This workshop turns Raoult plots into reading drills for ideal lines, positive and negative bows, and azeotropic endpoints.',
    objectives: [
      'Read $P$ versus $x$ plots to separate ideal lines from positive and negative deviations',
      'Predict azeotrope formation from hydrogen bonding mismatch and boiling point ordering',
      'Apply $\\Delta P = x_{2}P^{\\circ}$ to vapour lowering and molar mass estimation'
    ],
    concepts: [
      {
        term: 'Raoult law for ideal pairs',
        kind: 'law',
        statement: 'An **ideal solution holds vapour pressure proportional to mole fraction** `Raoult` $P_{A} = x_{A}P_{A}^{\\circ}$ with $P = P_{A} + P_{B}$ and $x_{A} + x_{B} = 1$.',
        detail: 'Mahan derives lowering $\\Delta P = x_{2}P^{\\circ}$ for nonvolatile solute and uses measured $\\Delta P$ with known $P^{\\circ}$ to find $MW_{2}$ from $W_{2}$ and $W_{1}$ as in the sucrose water illustration.'
      },
      {
        term: 'Positive deviation and minimum azeotrope',
        kind: 'definition',
        statement: 'A **weaker unlike attraction raises vapour pressure above ideal** `positive-deviation` $P_{obs}$ above $P_{ideal}$ with $\\gamma$ above $1$ and boiling point depressed to a minimum.',
        detail: 'Ethanol plus water and $C_{6}H_{6}$ plus $CH_{3}OH$ show higher $P$ than Raoult prediction because hydrogen bonds break without equal replacement, so the mixture boils below either pure liquid at the azeotropic composition.'
      },
      {
        term: 'Negative deviation and maximum azeotrope',
        kind: 'theorem',
        statement: 'A **stronger unlike attraction lowers vapour pressure below ideal** `negative-deviation` $P_{obs}$ below $P_{ideal}$ with $\\gamma$ below $1$ and boiling point raised to a maximum.',
        detail: 'Water plus $HCl$ and acetone plus $CHCl_{3}$ form hydrogen bonded complexes with lower $P$ than ideal, so the maximum boiling azeotrope distils at fixed composition rich in the less volatile partner.'
      },
      {
        term: 'Activity correction for real solutions',
        kind: 'method',
        statement: 'An **effective mole fraction replaces mole fraction in nonideal work** `activity` $a_{A} = \\gamma_{A}x_{A}$ with $P_{A} = a_{A}P_{A}^{\\circ}$ recovering Raoult form when $\\gamma_{A}$ approaches $1$.',
        detail: 'Mahan introduces $\\gamma$ near $1$ for dilute solutions and far from $1$ near azeotropes, so colligative arithmetic stays reliable only where $\\gamma$ corrections stay small.'
      },
      {
        term: 'Azeotrope recognition on phase plots',
        kind: 'insight',
        statement: 'A **constant boiling mixture distils unchanged at extremum composition** `azeotrope` where liquid $x$ equals vapour $y$ and $T$ versus $x$ shows a minimum or maximum.',
        detail: 'Minimum $T$ azeotrope signals positive deviation while maximum $T$ signals negative deviation, so the sign of $P$ deviation predicts the direction of $T$ extremum without extra data.'
      }
    ],
    figures: [
      {
        caption: 'Raoult $P$ versus $x$ ideal lines bowed upward for positive deviation and downward for negative deviation, with minimum $T$ and maximum $T$ azeotropes at the extrema.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Raoult pressure composition plot with positive and negative deviation and azeotropes"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">ideal: straight P vs x</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">P equals x times P0</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">positive bow up</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">min T azeotrope</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">ethanol and water case</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">negative bow down</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">max T azeotrope</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">liquid x equals vapour y at azeotrope</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Sucrose molar mass from vapour lowering',
        problem: 'Water $H_{2}O$ at fixed $T$ has $P^{\\circ}$ equal to $17.54$ mm. Dissolving $114$ g sucrose in $1000$ g water lowers $P$ by $0.11$ mm. Estimate $MW_{2}$ by Mahan ideal relation.',
        steps: [
          { label: 'Step 1', text: 'Set mole fraction from lowering ratio:\n```text\nfraction = dP over P0 = 0.11 over 17.54\nmoles water = 1000 over 18.0 = 55.5\nsolve MW2 = 114 over (fraction times total moles)\n```\nMahan equation $\\Delta P$ over $P^{\\circ}$ equals $x_{2}$ for dilute solutions.' },
          { label: 'Step 2', text: 'Convert $1000$ g water to about $55.5$ mol and solve $MW_{2}$ near $342$ from $114$ g solute over the small $x_{2}$ fraction.' },
          { label: 'Step 3', text: 'Check dilute limit where $n_{2}$ stays far below $n_{1}$ so $x_{2}$ approximates $n_{2}$ over $n_{1}$ and activity corrections stay near $1$.' }
        ],
        result: 'Molar mass near $342$ matching $C_{12}H_{22}O_{11}$ and confirming ideal lowering arithmetic.'
      },
      {
        title: 'Deviation sign from boiling behaviour',
        problem: 'Ethanol water boils below either pure liquid at fixed composition while water $HCl$ boils above either pure liquid. Assign deviation signs and azeotrope types.',
        steps: [
          { label: 'Step 1', text: 'Higher $P$ than ideal means weaker unlike bonds, so ethanol water shows positive deviation with $\\gamma$ above $1$.' },
          { label: 'Step 2', text: 'Lower $P$ than ideal means stronger unlike bonds, so water $HCl$ shows negative deviation with $\\gamma$ below $1$.' },
          { label: 'Step 3', text: 'Positive maps to minimum $T$ azeotrope and negative maps to maximum $T$ azeotrope, so distillation stalls at those compositions.' }
        ],
        result: 'Ethanol water minimum boiling positive case and water $HCl$ maximum boiling negative case.'
      }
    ],
    keyTakeaways: [
      'Ideal $P_{A} = x_{A}P_{A}^{\\circ}$ gives straight $P$ versus $x$ lines and $\\Delta P = x_{2}P^{\\circ}$ for dilute work.',
      'Positive deviation raises $P$ above ideal with $\\gamma$ above $1$ and minimum $T$ azeotrope.',
      'Negative deviation lowers $P$ below ideal with $\\gamma$ below $1$ and maximum $T$ azeotrope.',
      'Liquid $x$ equals vapour $y$ at azeotrope, so simple distillation cannot cross that composition.'
    ],
    quiz: [
      {
        q: 'Ideal vapour lowering follows:',
        options: ['$P$ independent of $x$', '$\\Delta P = x_{2}P^{\\circ}$ with $P_{A} = x_{A}P_{A}^{\\circ}$', '$P$ always above ideal', '$P$ always below ideal'],
        answer: 1,
        explanation: 'Step 1: Write $P_{A} = x_{A}P_{A}^{\\circ}$ for ideal solvent. Step 2: Subtract from $P^{\\circ}$ to get $\\Delta P = x_{2}P^{\\circ}$. Step 3: Select the lowering law over the deviation choices.'
      },
      // PYQ-pattern: azeotrope deviation sign drill
      {
        q: 'Ethanol water minimum boiling azeotrope signals:',
        options: ['Negative deviation with $\\gamma$ below $1$', 'Ideal behaviour with $\\gamma$ equal to $1$', 'Positive deviation with $\\gamma$ above $1$', 'Immiscibility with no $P$ change'],
        answer: 2,
        explanation: 'Step 1: Note boiling below either pure liquid means raised $P$. Step 2: Link raised $P$ to weaker unlike attractions. Step 3: Assign positive deviation with minimum $T$.'
      },
      {
        q: 'At azeotropic composition:',
        options: ['Liquid $x$ equals vapour $y$ so composition stays fixed', 'Liquid $x$ exceeds vapour $y$ always', 'Vapour $y$ vanishes to zero', '$P$ drops to zero'],
        answer: 0,
        explanation: 'Step 1: Recall extremum where liquid and vapour meet. Step 2: Set $x$ equal to $y$ at that point. Step 3: Conclude distillation cannot shift composition.'
      },
      {
        q: 'Activity correction restores Raoult form by:',
        options: ['Setting $\\gamma$ to zero always', 'Ignoring $x$ dependence', 'Using $P$ without $x$', 'Writing $a_{A} = \\gamma_{A}x_{A}$ with $P_{A} = a_{A}P_{A}^{\\circ}$'],
        answer: 3,
        explanation: 'Step 1: Replace $x_{A}$ by effective $a_{A}$. Step 2: Define $a_{A}$ as $\\gamma_{A}$ times $x_{A}$. Step 3: Recover $P_{A}$ equals $a_{A}$ times $P_{A}^{\\circ}$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 27.2
  {
    sectionId: 'chem-ch27-s2',
    readingTime: 10,
    intro: 'Mahan turns vapour lowering into boiling elevation plus freezing depression plus osmotic pressure with one particle counting logic. Dilute ideal relations $\\Delta T_{b} = K_{b}m$ and $\\Delta T_{f} = K_{f}m$ plus $\\Pi = cRT$ share molality or molarity with total particle count. This drill converts $K_{b}$ and $K_{f}$ tables into molar mass answers with van t Hoff factor $i$ for salts.',
    objectives: [
      'Use $\\Delta T_{b} = K_{b}m$ and $\\Delta T_{f} = K_{f}m$ to find $m$ then molar mass from weighed masses',
      'Apply $i$ to count ions for $NaCl$ and $BaCl_{2}$ type salts in freezing and boiling arithmetic',
      'Choose $\\Pi = cRT$ for large molar mass solutes where $\\Delta T$ stays too small to measure'
    ],
    concepts: [
      {
        term: 'Boiling elevation law',
        kind: 'law',
        statement: 'A **boiling point rise stays proportional to molality** `ebullioscopy` $\\Delta T_{b} = K_{b}m$ with $K_{b}$ set by solvent only and $m$ counting total particles.',
        detail: 'Water $K_{b}$ equals $0.51$ degree per molal while benzene $K_{b}$ equals $2.53$ degree per molal, so the same $m$ gives larger $\\Delta T_{b}$ in benzene. Mahan urea illustration finds $K_{b}$ from measured $\\Delta T_{b}$ over known $m$.'
      },
      {
        term: 'Freezing depression law',
        kind: 'theorem',
        statement: 'A **freezing point fall stays proportional to molality** `cryoscopy` $\\Delta T_{f} = K_{f}m$ with $K_{f}$ larger than $K_{b}$ for most solvents and $m$ again total.',
        detail: 'Benzene $K_{f}$ equals $5.12$ degree per molal gives naphthalene molar mass near $128$ in the Mahan illustration. Water $K_{f}$ equals $1.86$ degree per molal supports salt dissociation tests.'
      },
      {
        term: 'Osmotic pressure relation',
        kind: 'definition',
        statement: 'An **osmotic pressure follows molarity times gas constant times temperature** `osmosis` $\\Pi = cRT$ with $c$ in mol per litre and $R$ matched to pressure units for $\\Pi$ in $atm$.',
        detail: 'Dilute $\\Pi$ grows large enough to read for polymers and proteins where $\\Delta T_{f}$ stays below thermometer resolution. Semipermeable membrane passes $H_{2}O$ but blocks large solute, so solvent flows to the solution side.'
      },
      {
        term: 'Van t Hoff particle count',
        kind: 'method',
        statement: 'A **total particle molality replaces formula molality for electrolytes** `van-t-Hoff` $m_{total} = i m_{formula}$ with $i$ near $2$ for $NaCl$ and near $3$ for $BaCl_{2}$ at high dilution.',
        detail: 'Mahan mercuric nitrate versus mercuric chloride comparison uses $\\Delta T_{f}$ to show one salt dissociates while the other stays molecular. Ion pairing lowers $i$ below integer values at higher $m$.'
      },
      {
        term: 'Molar mass method choice',
        kind: 'insight',
        statement: 'A **molar mass method follows signal size and volatility** `molar-mass` choosing $\\Delta T_{b}$ or $\\Delta T_{f}$ for small molecules and $\\Pi$ for large molecules where $\\Delta T$ vanishes.',
        detail: 'Volatile solute breaks the nonvolatile assumption, so $\\Delta P$ analysis needs vapour correction. For polymers, $\\Pi$ near room $T$ gives readable heights while $\\Delta T_{f}$ stays in noise.'
      }
    ],
    figures: [
      {
        caption: 'Colligative $\\Delta T_{b}$ and $\\Delta T_{f}$ scale with $m$ while $\\Pi$ scales with $c$, all multiplied by $i$ for salts.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Colligative toolkit with boiling freezing and osmotic pressure scaling"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">dTb equals Kb times m</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">urea finds Kb</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">dTf equals Kf times m</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">naphthalene finds MW</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">salts use total m</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">pi equals cRT</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">polymers best</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">m times i counts all particles</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Water Kb from urea boiling data',
        problem: 'Dissolving $1.00$ g urea $CH_{4}N_{2}O$ of molar mass $60.1$ in $75.0$ g water raises boiling by $0.114$ degree. Find $K_{b}$ for water.',
        steps: [
          { label: 'Step 1', text: 'Convert to molality first:\n```text\nmoles urea = 1.00 over 60.1 = 0.0166\nkg solvent = 75.0 over 1000 = 0.075\nm = 0.0166 over 0.075 = 0.222 molal\n```\nMahan molality uses $m$ as mol per $1000$ g solvent.' },
          { label: 'Step 2', text: 'Divide $\\Delta T_{b}$ equal to $0.114$ degree by $m$ equal to $0.222$ to get $K_{b}$ near $0.51$.' },
          { label: 'Step 3', text: 'Confirm $K_{b}$ depends on water only, so the same constant serves glucose and sucrose work at dilute $m$.' }
        ],
        result: '$K_{b}$ near $0.51$ degree per molal for water.'
      },
      {
        title: 'Naphthalene mass from benzene freezing data',
        problem: 'Benzene freezing at $5.40$ degree falls to $4.95$ degree when $1.15$ g naphthalene dissolves in $100$ g benzene with $K_{f}$ equal to $5.12$. Find molar mass.',
        steps: [
          { label: 'Step 1', text: 'Find $m$ from $\\Delta T_{f}$ equal to $0.45$ degree over $K_{f}$ equal to $5.12$ giving $m$ near $0.088$.' },
          { label: 'Step 2', text: 'Scale $1.15$ g per $100$ g to $11.5$ g per $1000$ g solvent, then divide by $m$ near $0.088$.' },
          { label: 'Step 3', text: 'Obtain molar mass near $130$ matching $C_{10}H_{8}$ near $128$, confirming the $K_{f}$ route.' }
        ],
        result: 'Molar mass near $130$ for naphthalene by freezing depression.'
      }
    ],
    keyTakeaways: [
      '$\\Delta T_{b} = K_{b}m$ finds $m$ from boiling rise with solvent only $K_{b}$.',
      '$\\Delta T_{f} = K_{f}m$ finds $m$ from freezing fall with larger $K_{f}$ signal.',
      '$\\Pi = cRT$ suits large $MW$ solutes where $\\Delta T$ stays unreadable.',
      'Use $m_{total} = i m_{formula}$ so $NaCl$ counts near $2$ and $BaCl_{2}$ near $3$.'
    ],
    quiz: [
      {
        q: 'Urea data give water $K_{b}$ by:',
        options: ['$m$ from masses then $K_{b}$ equals $\\Delta T_{b}$ over $m$', '$K_{b}$ equals $m$ over $\\Delta T_{b}$', '$K_{b}$ independent of $\\Delta T_{b}$', '$K_{b}$ from $\\Pi$ only'],
        answer: 0,
        explanation: 'Step 1: Compute $m$ near $0.222$ from $1.00$ g over $75.0$ g. Step 2: Divide $\\Delta T_{b}$ equal to $0.114$ by $m$. Step 3: Report $K_{b}$ near $0.51$.'
      },
      // PYQ-pattern: van t Hoff factor counting drill
      {
        q: 'Freezing depression for dilute $NaCl$ uses:',
        options: ['Formula $m$ only', 'Zero particles', '$m_{total}$ near $2$ times formula $m$', '$m$ of water only'],
        answer: 2,
        explanation: 'Step 1: Dissociate $NaCl$ to $Na^{+}$ plus $Cl^{-}$. Step 2: Count $i$ near $2$ particles per formula. Step 3: Multiply formula $m$ by $i$.'
      },
      {
        q: 'Osmotic pressure best suits:',
        options: ['Volatile solvents alone', 'Small $MW$ with large $\\Delta T$', 'Insoluble gases', 'Large $MW$ polymers with tiny $\\Delta T$'],
        answer: 3,
        explanation: 'Step 1: Compare $\\Delta T$ size for large $MW$. Step 2: Note $\\Pi = cRT$ stays readable at low $c$. Step 3: Choose $\\Pi$ for polymers and proteins.'
      },
      {
        q: 'Naphthalene in benzene result near $130$ proves:',
        options: ['$K_{f}$ route gives $MW$ from $\\Delta T_{f}$ over $K_{f}$', '$K_{b}$ always zero', '$\\Pi$ always zero', 'Salts never dissociate'],
        answer: 0,
        explanation: 'Step 1: Find $m$ as $\\Delta T_{f}$ over $K_{f}$. Step 2: Scale solute mass to per $1000$ g solvent. Step 3: Divide mass by $m$ to get $MW$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 27.3
  {
    sectionId: 'chem-ch27-s3',
    readingTime: 8,
    intro: 'Mahan phase work reads one component $P$ versus $T$ maps with solid plus liquid plus vapour fields meeting at the triple point. The liquid vapour dome ends at the critical point where meniscus vanishes and supercritical fluid remains. This section drills heating curve plateaus plus triple point logic plus water versus carbon dioxide slope signs.',
    objectives: [
      'Locate solid plus liquid plus vapour fields with triple point and critical point on $P$ versus $T$ plots',
      'Read heating curves for melting and boiling plateaus with heat of fusion and vaporisation',
      'Contrast water negative melting slope with carbon dioxide positive slope and sublimation at $1$ atm'
    ],
    concepts: [
      {
        term: 'One component phase map',
        kind: 'definition',
        statement: 'A **pressure temperature map shows stable phase fields** `phase-diagram` with $P$ on the vertical axis and $T$ on the horizontal axis crossed by coexistence curves.',
        detail: 'Each curve gives $P$ versus $T$ coexistence for solid with vapour, liquid with vapour, and solid with liquid. Off curve regions hold single stable phases while on curve regions hold two phases together.'
      },
      {
        term: 'Triple point invariance',
        kind: 'theorem',
        statement: 'A **triple point fixes all three phases together** `triple-point` at one $P$ plus $T$ pair where $solid$ plus $liquid$ plus $vapour$ coexist with zero freedom.',
        detail: 'Water triple point sits at $0.01$ degree and $4.58$ mm where ice plus liquid plus vapour persist together. Adding or removing heat at that $P$ shifts phase amounts while $T$ stays locked.'
      },
      {
        term: 'Critical point termination',
        kind: 'law',
        statement: 'A **liquid vapour curve ends at the critical point** `critical-point` beyond which $liquid$ and $vapour$ merge to supercritical fluid with $T_{c}$ plus $P_{c}$ fixed per substance.',
        detail: 'Water $T_{c}$ sits high near $374$ degree with $P_{c}$ near $218$ atm while $CO_{2}$ $T_{c}$ sits near $31$ degree, so $CO_{2}$ liquefies at room $T$ under pressure but water needs far higher $P$.'
      },
      {
        term: 'Heating curve plateau reading',
        kind: 'method',
        statement: 'A **temperature plateau marks latent heat without temperature change** `heating-curve` where added $q$ melts solid at $T_{m}$ or boils liquid at $T_{b}$ with flat $T$ versus $q$ segments.',
        detail: 'Slope segments heat single phases with $q = m c \\Delta T$ while flat segments convert phases with $q = n \\Delta H_{fus}$ or $n \\Delta H_{vap}$. Longer $T_{b}$ plateau than $T_{m}$ plateau reflects larger $\\Delta H_{vap}$ than $\\Delta H_{fus}$.'
      },
      {
        term: 'Water versus carbon dioxide contrast',
        kind: 'insight',
        statement: 'A **melting slope sign reveals density ordering** `slope-sign` with water slope negative since $liquid$ denser than $ice$ and $CO_{2}$ slope positive since $solid$ denser than $liquid$.',
        detail: 'Ice skates on pressure melted film because higher $P$ favours dense $H_{2}O$ liquid, while $CO_{2}$ solid at $1$ atm warms to vapour directly since triple point $P$ sits above $1$ atm.'
      }
    ],
    figures: [
      {
        caption: 'Single component $P$ versus $T$ map with triple point $T_{t}$ plus $P_{t}$ and critical point $T_{c}$ plus $P_{c}$, and water negative versus $CO_{2}$ positive melting slopes.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Phase diagram with triple point critical point and heating plateaus"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">P vs T fields</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">solid liquid vapour</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">triple meets all three</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">critical ends dome</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">plateau is latent heat</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">water slope down</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">CO2 slope up</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">heat flat at Tm and Tb</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Water triple point behaviour',
        problem: 'A sealed cell holds ice plus liquid $H_{2}O$ plus vapour at $0.01$ degree and $4.58$ mm. Heat leaks in slowly at fixed volume. Predict $T$ and $P$ evolution.',
        steps: [
          { label: 'Step 1', text: 'Identify invariant point:\n```text\nphases = solid + liquid + vapour = 3\nfreedom = 3 minus phases = 0\nT and P locked while all three persist\n```\nMahan triple point has zero freedom at fixed $P$ plus $T$.' },
          { label: 'Step 2', text: 'Send added $q$ into melting ice to water at fixed $T$ equal to $0.01$ degree with $P$ fixed at $4.58$ mm.' },
          { label: 'Step 3', text: 'Leave invariance only after ice vanishes, then $T$ plus $P$ rise along the liquid vapour curve.' }
        ],
        result: '$T$ plus $P$ locked until one phase vanishes, then rise together.'
      },
      {
        title: 'Carbon dioxide versus water at one atm',
        problem: 'Solid $CO_{2}$ warms at $1$ atm from low $T$ while ice warms at $1$ atm. Explain why one sublimes and the other melts then boils.',
        steps: [
          { label: 'Step 1', text: 'Place $1$ atm against triple point $P$: water triple $4.58$ mm lies below $1$ atm while $CO_{2}$ triple near $5.1$ atm lies above $1$ atm.' },
          { label: 'Step 2', text: 'Cross solid to liquid field for water at $1$ atm, but cross solid to vapour field for $CO_{2}$ at $1$ atm.' },
          { label: 'Step 3', text: 'Read slopes: water melting favoured by $P$ while $CO_{2}$ needs pressure above $5.1$ atm to show liquid.' }
        ],
        result: 'Water melts then boils at $1$ atm while $CO_{2}$ sublimes at $1$ atm.'
      }
    ],
    keyTakeaways: [
      '$P$ versus $T$ fields meet at triple point with zero freedom for one component.',
      'Liquid vapour dome ends at $T_{c}$ plus $P_{c}$ with supercritical fluid beyond.',
      'Flat $T$ versus $q$ plateaus at $T_{m}$ and $T_{b}$ measure $\\Delta H_{fus}$ and $\\Delta H_{vap}$.',
      'Water melting slope negative while $CO_{2}$ slope positive by density ordering.'
    ],
    quiz: [
      {
        q: 'Triple point for one component has:',
        options: ['Zero freedom with $solid$ plus $liquid$ plus $vapour$', 'Two freedoms with free $P$ plus $T$', 'No phases present', 'Only $vapour$ present'],
        answer: 0,
        explanation: 'Step 1: Count three coexisting phases. Step 2: Apply phase rule giving zero freedom. Step 3: Lock $P$ plus $T$ until one phase leaves.'
      },
      // PYQ-pattern: critical point reading drill
      {
        q: 'Beyond $T_{c}$ plus $P_{c}$:',
        options: ['Solid always stable', '$liquid$ and $vapour$ merge to supercritical fluid', '$P$ drops to zero', 'Triple point repeats'],
        answer: 1,
        explanation: 'Step 1: Follow liquid vapour curve to its end. Step 2: Note meniscus vanishes at $T_{c}$ plus $P_{c}$. Step 3: Name the single fluid beyond as supercritical.'
      },
      {
        q: 'Heating plateau at $T_{b}$ reflects:',
        options: ['$q$ raising $T$ only', 'Cooling without $q$', '$q$ as $n \\Delta H_{vap}$ at fixed $T$', 'Zero heat exchange'],
        answer: 2,
        explanation: 'Step 1: Hold $T$ at $T_{b}$ during boiling. Step 2: Send $q$ into vaporisation as $n$ times $\\Delta H_{vap}$. Step 3: Resume $T$ rise after liquid vanishes.'
      },
      {
        q: 'Water melting slope negative since:',
        options: ['$ice$ less dense than $liquid$ so $P$ favours liquid', '$ice$ denser than $liquid$', '$vapour$ denser than $liquid$', 'No density difference'],
        answer: 0,
        explanation: 'Step 1: Compare $ice$ versus $H_{2}O$ liquid density. Step 2: Note $P$ favours dense phase. Step 3: Tilt melting curve to lower $T$ with higher $P$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 27.4
  {
    sectionId: 'chem-ch27-s4',
    readingTime: 9,
    intro: 'Mahan vapour pressure slopes quantify boiling shifts through the Clausius Clapeyron relation between $P$ and $T$. Two point vapour data give $\\Delta H_{vap}$ without calorimetry, then predict boiling at new $P$. This workshop runs log slope arithmetic plus boiling point correction plus enthalpy extraction drills.',
    objectives: [
      'Write $ln P$ versus $1$ over $T$ slope as $\\Delta H_{vap}$ over $R$ for liquid vapour equilibrium',
      'Extract $\\Delta H_{vap}$ from two $P$ plus $T$ points with correct $ln$ and $R$ units',
      'Predict boiling $T$ shift when external $P$ moves away from $1$ atm'
    ],
    concepts: [
      {
        term: 'Clausius Clapeyron slope',
        kind: 'law',
        statement: 'A **log vapour slope measures enthalpy over gas constant** `Clapeyron` $ln P = C - \\Delta H_{vap}$ over $R T$ with slope $m$ equal to $\\Delta H_{vap}$ over $R$ in magnitude.',
        detail: 'Mahan plots solution and solvent vapour curves where steeper $ln P$ versus $1$ over $T$ means larger $\\Delta H_{vap}$. Lowered $P$ curves intersect $1$ atm at higher $T$, giving boiling elevation graphically.'
      },
      {
        term: 'Two point enthalpy extraction',
        kind: 'method',
        statement: 'A **two point vapour pair gives enthalpy directly** `two-point` $ln$ of $P_{2}$ over $P_{1}$ equals $\\Delta H_{vap}$ over $R$ times $1$ over $T_{1}$ minus $1$ over $T_{2}$.',
        detail: 'Use $R$ equal to $8.314$ joule per mol per degree with $T$ in kelvin and $P_{1}$ plus $P_{2}$ in matched units so the ratio cancels units. Mahan boiling triangle reasoning is the linearised form of this exact log law.'
      },
      {
        term: 'Boiling point pressure correction',
        kind: 'theorem',
        statement: 'A **boiling point moves to meet external pressure** `boiling-shift` where liquid boils when $P_{vap}$ equals $P_{ext}$ with higher $P_{ext}$ raising $T_{b}$ and lower $P_{ext}$ lowering $T_{b}$.',
        detail: 'Hill stations boil water below $100$ degree since $P_{ext}$ sits below $1$ atm, while pressure cookers boil above $100$ degree since $P_{ext}$ sits above $1$ atm. The same $ln P$ line predicts both shifts.'
      },
      {
        term: 'Solution vapour curve offset',
        kind: 'insight',
        statement: 'A **dissolved nonvolatile solute lowers the whole vapour curve** `curve-offset` so $P_{sol}$ sits below $P_{pure}$ at each $T$ and $T_{b}$ moves up while $T_{f}$ moves down.',
        detail: 'Figures in Mahan show pure plus two solution curves with growing gaps at higher $T$, matching $\\Delta P = x_{2}P^{\\circ}$ growth with $P^{\\circ}$. Steeper high $T$ gaps explain larger absolute lowering near boiling.'
      },
      {
        term: 'Enthalpy from slope limits',
        kind: 'definition',
        statement: 'A **constant enthalpy reading needs narrow range plus ideal vapour** `slope-limit` where $\\Delta H_{vap}$ stays fixed and $V_{gas}$ dominates $V_{liq}$ with $gas$ near ideal.',
        detail: 'Wide $T$ spans bend $ln P$ plots since $\\Delta H_{vap}$ falls toward zero near $T_{c}$. Association in vapour or nonideality bends the line, so choose close $T_{1}$ plus $T_{2}$ for clean $\\Delta H_{vap}$.'
      }
    ],
    figures: [
      {
        caption: '$ln P$ versus $1$ over $T$ line with slope $\\Delta H_{vap}$ over $R$ shifting $T_{b}$ where $P_{vap}$ equals $P_{ext}$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clausius Clapeyron log pressure versus inverse temperature slope"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">ln P vs 1 over T</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">slope is enthalpy over R</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">two points give dHvap</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">R matched to joule</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">T in kelvin only</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">boil when equal</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">Pvap equals Pext</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">solution curve lower, Tb higher</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Enthalpy from two vapour points',
        problem: 'Water $H_{2}O$ shows $P_{1}$ equal to $17.54$ mm at $T_{1}$ equal to $293$ K and $P_{2}$ equal to $31.8$ mm at $T_{2}$ equal to $303$ K. Estimate $\\Delta H_{vap}$.',
        steps: [
          { label: 'Step 1', text: 'Form log ratio and inverse gap:\n```text\nln ratio = ln(31.8 over 17.54) = 0.595\ninv gap = 1 over 293 minus 1 over 303\nR = 8.314 joule per mol per K\n```\nTwo point law uses $ln$ of $P_{2}$ over $P_{1}$ with $T$ in kelvin.' },
          { label: 'Step 2', text: 'Solve $\\Delta H_{vap}$ equals $R$ times $ln$ ratio over the inverse $T$ gap, giving near $44$ kJ per mol.' },
          { label: 'Step 3', text: 'Check sign: higher $T_{2}$ gives higher $P_{2}$, so $\\Delta H_{vap}$ stays positive for endothermic vaporisation.' }
        ],
        result: '$\\Delta H_{vap}$ near $44$ kJ per mol for water in this range.'
      },
      {
        title: 'Boiling shift at reduced pressure',
        problem: 'A hill station has $P_{ext}$ equal to $0.85$ atm. Using the $ln P$ line for water $H_{2}O$, decide whether $T_{b}$ lies above or below $100$ degree and estimate direction.',
        steps: [
          { label: 'Step 1', text: 'Set boiling condition $P_{vap}$ equals $P_{ext}$ equal to $0.85$ atm below the $1$ atm mark.' },
          { label: 'Step 2', text: 'Travel down the $ln P$ versus $1$ over $T$ line to lower $P$, which meets the curve at larger $1$ over $T$ and smaller $T$.' },
          { label: 'Step 3', text: 'Conclude $T_{b}$ below $100$ degree, so food needs longer heating at altitude.' }
        ],
        result: 'Boiling below $100$ degree at $0.85$ atm external pressure.'
      }
    ],
    keyTakeaways: [
      '$ln P$ versus $1$ over $T$ slope magnitude equals $\\Delta H_{vap}$ over $R$.',
      'Two point $ln$ of $P_{2}$ over $P_{1}$ with $T$ in kelvin gives $\\Delta H_{vap}$.',
      'Boiling occurs where $P_{vap}$ equals $P_{ext}$, so low $P_{ext}$ lowers $T_{b}$.',
      'Solute lowers $P$ curve and raises $T_{b}$ with gap growing as $P^{\\circ}$ grows.'
    ],
    quiz: [
      {
        q: 'Clausius Clapeyron slope gives:',
        options: ['$\\Delta H_{vap}$ over $R$ from $ln P$ versus $1$ over $T$', '$R$ over $\\Delta H_{vap}$ inverted', '$P$ independent of $T$', '$T$ independent of $P$'],
        answer: 0,
        explanation: 'Step 1: Plot $ln P$ against $1$ over $T$. Step 2: Read slope magnitude as $\\Delta H_{vap}$ over $R$. Step 3: Multiply by $R$ to get $\\Delta H_{vap}$.'
      },
      // PYQ-pattern: two point enthalpy arithmetic drill
      {
        q: 'Two point $\\Delta H_{vap}$ needs:',
        options: ['$T$ in degree C only', 'Mismatched $P$ units', '$T$ in kelvin with matched $P$ units', 'Zero $R$ value'],
        answer: 2,
        explanation: 'Step 1: Convert $T_{1}$ plus $T_{2}$ to kelvin. Step 2: Match $P_{1}$ plus $P_{2}$ units so ratio cancels. Step 3: Use $R$ equal to $8.314$ joule per mol per K.'
      },
      {
        q: 'At $0.85$ atm external pressure water boils:',
        options: ['Above $100$ degree', 'At $100$ degree always', 'Below $100$ degree', 'Never boils'],
        answer: 2,
        explanation: 'Step 1: Set $P_{vap}$ equal to $P_{ext}$. Step 2: Lower $P_{ext}$ meets vapour curve earlier. Step 3: Read $T_{b}$ below $100$ degree.'
      },
      {
        q: 'Solution vapour curve versus pure solvent shows:',
        options: ['$P_{sol}$ above $P_{pure}$ at each $T$', '$P_{sol}$ below $P_{pure}$ with higher $T_{b}$', 'No shift in $T_{b}$', '$T_{f}$ raised by solute'],
        answer: 1,
        explanation: 'Step 1: Lower $P$ at each $T$ by $\\Delta P$. Step 2: Intersect $1$ atm at higher $T$. Step 3: Assign raised $T_{b}$ and lowered $T_{f}$.'
      }
    ]
  }
]
