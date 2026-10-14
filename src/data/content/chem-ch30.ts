import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 30: Thermochemistry Depth Lab (Mahan foci 8, 7)
// Sections 30.1 - 30.4. Second-opinion problem workshops complementing theory.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh30Content: SectionContent[] = [
  // ---------------------------------------------------------------- 30.1
  {
    sectionId: 'chem-ch30-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Hess cycles as state functions with bond estimate limits',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Hess path independence for enthalpy',
            body: 'The **Hess theorem** states that $\\Delta H$ depends only on initial and final states because enthalpy is a state function, so any convenient path sums to the true reaction enthalpy. Formation data build products minus reactants while combustion data invert the same bookkeeping for fuels, with stoichiometric multiples carried on every term. Bond energy sums estimate the same gap from average bond tables but miss resonance and phase effects, which is why they remain estimates rather than measurements.'
          },
          {
            kind: 'derivation',
            heading: 'Formation versus combustion sums with phase guards',
            body: 'Write $\\Delta H = \\sum \\nu_i \\Delta H_i$ over formation steps with signed stoichiometric coefficients, checking that every species carries its correct phase because gas to liquid gaps rival reaction energies. For combustion routes subtract product combustion sums from reactant sums with the same phase discipline. The $q_p$ versus $q_v$ correction $\\Delta n_gRT$ then converts bomb data to flow conditions, where $\\Delta n_g$ counts gas moles produced minus consumed.'
          },
          {
            kind: 'application',
            heading: 'Fuel values audited by two independent paths',
            body: 'Engine laboratories certify fuels by measuring combustion directly and by summing formation data from independent synthesis routes, accepting the value only when both agree within error. Discrepancies flag missing hydrates, wrong polymorphs or incomplete combustion to carbon monoxide rather than dioxide. Current carbon accounting extends the same closure to life cycle analysis, where Hess style sums across supply chains replace single point measurements.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Mahan formation plus combustion cycles turn hard reactions into Hess sums of easy steps with state function logic. Standard enthalpies $\\Delta H^{\\circ}$ at $1$ atm plus $298$ K combine by stoichiometric multiples while bond energy sums estimate the same gaps. This workshop drills multi step Hess arithmetic with bond estimate limits.',
    objectives: [
      'Build Hess sums from formation plus combustion data with correct stoichiometric multiples',
      'Estimate $\\Delta H$ from bond energies and flag resonance plus phase limits',
      'Separate $q_{p}$ as $\\Delta H$ from $q_{v}$ as $\\Delta U$ with $\\Delta n_{g}RT$ correction'
    ],
    concepts: [
      {
        term: 'Standard formation reaction',
        kind: 'definition',
        statement: 'A **formation reaction builds one mol from stable elements** `formation` $C$ plus $O_{2}$ to $CO_{2}$ with $\\Delta H_{f}^{\\circ}$ equal to $ -393.5$ kJ per mol.',
        detail: 'Mahan standard state means most stable form at $1$ atm plus $298$ K, so $C$ means graphite and $O_{2}$ means gas. Elements in standard states carry zero $\\Delta H_{f}^{\\circ}$ by definition.'
      },
      {
        term: 'Hess cycle summation',
        kind: 'theorem',
        statement: 'An **enthalpy change sums over any path** `Hess` $\\Delta H_{net}$ equals sum $n \\Delta H_{steps}$ with reversal flipping sign and scaling multiplying $\\Delta H$.',
        detail: 'Carbon to carbon monoxide resists direct calorimetry, so Mahan subtracts $CO$ combustion from $C$ combustion to isolate $C$ to $CO$. Each $1$ over $2$ $O_{2}$ coefficient scales its step enthalpy.'
      },
      {
        term: 'Combustion to formation inversion',
        kind: 'method',
        statement: 'A **combustion set inverts to formation data** `combustion` $\\Delta H_{rxn}^{\\circ}$ equals sum $n \\Delta H_{f}^{\\circ}$ products minus sum $n \\Delta H_{f}^{\\circ}$ reactants.',
        detail: 'Glucose plus oxygen calorimetry with known $CO_{2}$ plus $H_{2}O$ formation data returns glucose $\\Delta H_{f}^{\\circ}$. Sign errors flip results, so products minus reactants order stays fixed.'
      },
      {
        term: 'Bond energy estimate',
        kind: 'law',
        statement: 'A **bond sum approximates reaction enthalpy** `bond-energy` $\\Delta H$ near sum $D$ broken minus sum $D$ formed with average $D$ values per bond type.',
        detail: 'Methane chlorination estimate uses $C$-$H$ plus $Cl$-$Cl$ broken versus $C$-$Cl$ plus $H$-$Cl$ formed. Resonance in benzene plus phase changes break average bond additivity.'
      },
      {
        term: 'Constant pressure versus volume heat',
        kind: 'insight',
        statement: 'A **measured heat equals enthalpy only at constant pressure** `qp-qv` $q_{p} = \\Delta H$ while $q_{v} = \\Delta U$ with $\\Delta H = \\Delta U + \\Delta n_{g}RT$.',
        detail: 'Bomb calorimeters read $q_{v}$ at fixed volume while coffee cup calorimeters read $q_{p}$ near $1$ atm. Gas mole growth $\\Delta n_{g}$ positive makes $\\Delta H$ exceed $\\Delta U$.'
      }
    ],
    figures: [
      {
        caption: 'Hess triangle $C$ to $CO$ to $CO_{2}$ with $\\Delta H$ summation plus bond broken minus formed estimate.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hess cycle with formation combustion and bond energy estimate"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">C to CO2 direct</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">minus 393.5 kJ</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">CO to CO2 step</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">minus 283.0 kJ</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">difference is C to CO</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">bonds estimate</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">broken minus formed</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">qp is dH, qv is dU plus gas correction</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Carbon monoxide formation by difference',
        problem: '$C$ graphite to $CO_{2}$ releases $393.5$ kJ per mol while $CO$ to $CO_{2}$ releases $283.0$ kJ per mol. Find $C$ to $CO$ formation enthalpy.',
        steps: [
          { label: 'Step 1', text: 'Write Hess pair:\n```text\nC + O2 -> CO2  dH = -393.5\nCO + half O2 -> CO2  dH = -283.0\ntarget C + half O2 -> CO\n```\nState function allows subtraction of the second step from the first.' },
          { label: 'Step 2', text: 'Subtract $CO$ combustion $283.0$ from $C$ combustion $393.5$ with sign care to get $110.5$ kJ per mol released.' },
          { label: 'Step 3', text: 'Assign $\\Delta H_{f}^{\\circ}$ of $CO$ near $ -110.5$ kJ per mol for $C$ plus $1$ over $2$ $O_{2}$ to $CO$.' }
        ],
        result: '$CO$ formation near $ -110.5$ kJ per mol by Hess difference.'
      },
      {
        title: 'Bond estimate versus calorimetry gap',
        problem: 'Estimate methane chlorination $CH_{4}$ plus $Cl_{2}$ to $CH_{3}Cl$ plus $HCl$ by bonds with $C$-$H$ $410$ plus $Cl$-$Cl$ $242$ versus $C$-$Cl$ $330$ plus $H$-$Cl$ $431$ kJ per mol. Compare to measured $ -100$ kJ per mol.',
        steps: [
          { label: 'Step 1', text: 'Sum broken $410$ plus $242$ equals $652$ and formed $330$ plus $431$ equals $761$ kJ per mol.' },
          { label: 'Step 2', text: 'Subtract formed from broken to estimate near $ -109$ kJ per mol.' },
          { label: 'Step 3', text: 'Attribute $9$ kJ gap to average bond values versus exact molecular environments.' }
        ],
        result: 'Bond estimate near $ -109$ versus calorimetric $ -100$ kJ per mol.'
      }
    ],
    keyTakeaways: [
      '$\\Delta H_{rxn}^{\\circ}$ equals products minus reactants formation sums.',
      'Hess reversal flips sign and scaling multiplies $\\Delta H$ step values.',
      'Bonds broken minus formed estimates $\\Delta H$ with average value limits.',
      '$q_{p} = \\Delta H$ and $q_{v} = \\Delta U$ differ by $\\Delta n_{g}RT$.'
    ],
    quiz: [
      {
        q: '$C$ to $CO$ from given combustions is:',
        options: ['$ -676.5$ kJ per mol', '$ -110.5$ kJ per mol', '$ +110.5$ kJ per mol', 'Zero'],
        answer: 1,
        explanation: 'Step 1: Write $C$ to $CO_{2}$ minus $393.5$. Step 2: Subtract $CO$ to $CO_{2}$ minus $283.0$. Step 3: Obtain minus $110.5$ kJ per mol.'
      },
      // PYQ-pattern: Hess stoichiometric scaling drill
      {
        q: 'Doubling a step with $\\Delta H$ equal to $50$ gives:',
        options: ['$25$', '$50$ unchanged', '$100$', 'Zero'],
        answer: 2,
        explanation: 'Step 1: Scale moles by factor $2$. Step 2: Multiply $\\Delta H$ by $2$. Step 3: Report $100$ for doubled path.'
      },
      {
        q: 'Bond estimate uses:',
        options: ['Formed minus broken', 'Broken minus formed', 'Products only', 'Reactants only'],
        answer: 1,
        explanation: 'Step 1: Sum $D$ broken as energy cost. Step 2: Sum $D$ formed as energy release. Step 3: Subtract formed from broken.'
      },
      {
        q: '$\\Delta H$ versus $\\Delta U$ for $\\Delta n_{g}$ equal to $1$ gives:',
        options: ['$\\Delta H$ equals $\\Delta U$', '$\\Delta H$ above $\\Delta U$ by $RT$', '$\\Delta H$ below $\\Delta U$ by $RT$', 'No relation'],
        answer: 1,
        explanation: 'Step 1: Write $\\Delta H = \\Delta U + \\Delta n_{g}RT$. Step 2: Insert $\\Delta n_{g}$ equal to $1$. Step 3: Raise $\\Delta H$ above $\\Delta U$ by $RT$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 30.2
  {
    sectionId: 'chem-ch30-s2',
    readingTime: 8,
    intro: 'Mahan calorimetry separates bomb constant volume work from coffee cup constant pressure work with heat capacity bookkeeping. Known $C_{cal}$ times $\\Delta T$ gives $q_{cal}$ while solution $m c \\Delta T$ gives $q_{soln}$ with sign discipline. This section drills calibration plus limiting reagent heat plus per mol conversion.',
    objectives: [
      'Convert $\\Delta T$ to $q$ with $C_{cal}$ plus $m c$ bookkeeping and sign rules',
      'Separate bomb $q_{v}$ from cup $q_{p}$ and convert with $\\Delta n_{g}RT$ where needed',
      'Divide total $q$ by limiting mol to report molar $\\Delta H$ or $\\Delta U$'
    ],
    concepts: [
      {
        term: 'Bomb calorimeter constant volume',
        kind: 'definition',
        statement: 'A **steel bomb holds volume fixed for combustion** `bomb` $q_{v} = C_{cal}\\Delta T$ with $C_{cal}$ calibrated by benzoic acid standard.',
        detail: 'Rigid walls block $P$-$V$ work, so temperature rise reads $\\Delta U$ directly. Water jacket plus thermometer plus stirrer keep $T$ uniform for clean $\\Delta T$.'
      },
      {
        term: 'Coffee cup constant pressure',
        kind: 'theorem',
        statement: 'A **foam cup holds pressure near one atm for solution heats** `coffee-cup` $q_{p} = m c \\Delta T$ with $c$ near $4.18$ joule per gram per degree for dilute water.',
        detail: 'Open cup vents to air, so measured $q$ equals $\\Delta H$ for neutralisation plus dissolution. Lid plus minimal conduction cuts heat leak to surroundings.'
      },
      {
        term: 'Calibration heat capacity',
        kind: 'method',
        statement: 'A **known combustion fixes calorimeter capacity** `calibration` $C_{cal} = q_{known}$ over $\\Delta T_{obs}$ with benzoic acid $\\Delta U$ tabulated.',
        detail: 'Burning $1.00$ g benzoic acid releasing $26.4$ kJ with $\\Delta T$ equal to $2.50$ degree gives $C_{cal}$ near $10.6$ kJ per degree. Later unknowns divide observed $\\Delta T$ into $q$ by this $C_{cal}$.'
      },
      {
        term: 'Sign and limiting mol discipline',
        kind: 'law',
        statement: 'A **released heat carries negative sign per system convention** `sign` $q_{rxn} = -q_{cal} - q_{soln}$ with per mol $\\Delta H = q_{rxn}$ over $n_{lim}$.',
        detail: 'Rising $T$ means system lost heat, so $q_{rxn}$ stays negative for exothermic change. Dividing by limiting $n_{lim}$ converts total joule to kJ per mol.'
      },
      {
        term: 'Heat leak correction insight',
        kind: 'insight',
        statement: 'A **cooling curve extrapolates to true delta T** `heat-leak` $\\Delta T_{true}$ from pre plus post drift lines exceeds raw $T_{max}$ minus $T_{init}$ for leaky cups.',
        detail: 'Newton cooling loses heat during slow dissolution, so linear back extrapolation recovers adiabatic $\\Delta T$. Fast neutralisation needs smaller correction than slow salt dissolution.'
      }
    ],
    figures: [
      {
        caption: 'Bomb $q_{v} = C_{cal}\\Delta T$ versus cup $q_{p} = m c \\Delta T$ with calibration and $q_{rxn}$ over $n_{lim}$ per mol step.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calorimetry with bomb versus cup and per mol conversion"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">bomb: fixed V</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">qv is dU</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">cup: open P</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">qp is dH</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">m c dT book</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">per mol last</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">q over n lim</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">calibrate Ccal, correct leak, sign rule</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Benzoic acid bomb calibration',
        problem: 'Burning $1.00$ g benzoic acid $C_{7}H_{6}O_{2}$ releasing $26.4$ kJ raises bomb $T$ by $2.50$ degree. Find $C_{cal}$ then use it for unknown rise $3.20$ degree.',
        steps: [
          { label: 'Step 1', text: 'Calibrate capacity:\n```text\nCcal = q known over dT = 26.4 over 2.50\nCcal = 10.56 kJ per degree\nunknown q = Ccal times 3.20\n```\nBomb $q_{v}$ equals $C_{cal}$ times $\\Delta T$ with $\\Delta U$ sign.' },
          { label: 'Step 2', text: 'Multiply $10.56$ by $3.20$ to get $33.8$ kJ released as $q_{v}$.' },
          { label: 'Step 3', text: 'Assign $q_{rxn}$ equal to $ -33.8$ kJ total, then divide by unknown mol for molar $\\Delta U$.' }
        ],
        result: '$C_{cal}$ near $10.6$ kJ per degree and unknown $q_{v}$ near $ -33.8$ kJ.'
      },
      {
        title: 'Neutralisation molar enthalpy in cup',
        problem: '$50$ mL $1.0$ M $HCl$ plus $50$ mL $1.0$ M $NaOH$ in a cup raises $T$ by $6.8$ degree with solution mass near $100$ g. Find molar $\\Delta H_{neut}$.',
        steps: [
          { label: 'Step 1', text: 'Compute $q_{soln}$ as $100$ times $4.18$ times $6.8$ giving $2842$ joule absorbed by solution.' },
          { label: 'Step 2', text: 'Set $q_{rxn}$ equal to $ -2842$ joule for $0.050$ mol limiting reagent.' },
          { label: 'Step 3', text: 'Divide $ -2842$ by $0.050$ to get near $ -57$ kJ per mol neutralisation.' }
        ],
        result: 'Neutralisation near $ -57$ kJ per mol by cup arithmetic.'
      }
    ],
    keyTakeaways: [
      'Bomb $q_{v} = C_{cal}\\Delta T$ reads $\\Delta U$ at fixed volume.',
      'Cup $q_{p} = m c \\Delta T$ reads $\\Delta H$ near $1$ atm.',
      '$C_{cal}$ from standard combustion converts later $\\Delta T$ to $q$.',
      '$q_{rxn} = -q_{cal} - q_{soln}$ over $n_{lim}$ gives molar enthalpy.'
    ],
    quiz: [
      {
        q: 'Bomb calorimeter reads:',
        options: ['$q_{v}$ as $\\Delta U$', '$q_{p}$ as $\\Delta H$', 'No heat', '$P$ only'],
        answer: 0,
        explanation: 'Step 1: Fix volume with steel walls. Step 2: Block expansion work. Step 3: Assign $q_{v}$ to $\\Delta U$.'
      },
      // PYQ-pattern: per mol calorimetry conversion drill
      {
        q: 'Per mol $\\Delta H$ needs:',
        options: ['Total $q$ only', 'Total $q$ over limiting $n$', 'Limiting $n$ over $q$', '$T$ only'],
        answer: 1,
        explanation: 'Step 1: Find total $q_{rxn}$ with sign. Step 2: Identify limiting $n_{lim}$. Step 3: Divide $q$ by $n$ for kJ per mol.'
      },
      {
        q: 'Cup $c$ for dilute water is near:',
        options: ['$1.00$', '$0.51$', '$4.18$ joule per gram per degree', '$8.314$'],
        answer: 2,
        explanation: 'Step 1: Recall water heat capacity. Step 2: Use $4.18$ joule per gram per degree. Step 3: Multiply by $m$ times $\\Delta T$.'
      },
      {
        q: 'Exothermic $T$ rise means $q_{rxn}$ is:',
        options: ['Positive', 'Zero', 'Infinite', 'Negative by system convention'],
        answer: 3,
        explanation: 'Step 1: Note solution gains heat. Step 2: System loses equal heat. Step 3: Assign negative $q_{rxn}$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 30.3
  {
    sectionId: 'chem-ch30-s3',
    readingTime: 9,
    intro: 'Mahan molecular entropy counts positional probability with isothermal expansion plus mixing as core drills. Doubling volume doubles positions per molecule, giving $\\Delta S = nR ln V_{2}$ over $V_{1}$ without heat input. This section runs expansion plus mixing spontaneity with Third Law absolute entropy context.',
    objectives: [
      'Compute $\\Delta S = nR ln V_{2}$ over $V_{1}$ for isothermal expansion and compression',
      'Predict mixing spontaneity from $\\Delta S_{mix}$ positive with $\\Delta H_{mix}$ near zero',
      'Read absolute $S^{\\circ}$ from Third Law zero at $0$ K with phase jump structure'
    ],
    concepts: [
      {
        term: 'Positional probability root',
        kind: 'definition',
        statement: 'An **entropy rise tracks accessible positions** `probability` $S = k ln W$ with $W$ counting microstates and $k$ as Boltzmann constant.',
        detail: 'Doubling $V$ doubles $W$ per molecule, so $\\Delta S$ grows by $k ln 2$ per molecule. Ordering into crystals cuts $W$ and lowers $S$ toward zero.'
      },
      {
        term: 'Isothermal expansion entropy',
        kind: 'theorem',
        statement: 'An **isothermal volume change carries reversible heat over T** `expansion` $\\Delta S = nR ln V_{2}$ over $V_{1}$ with $\\Delta U$ equal to $0$ for ideal gas.',
        detail: 'Free expansion against zero external $P$ does no work, yet $\\Delta S$ stays positive by $nR ln$ ratio. Compression reverses sign with $V_{2}$ below $V_{1}$ giving negative $\\Delta S$.'
      },
      {
        term: 'Mixing spontaneity rule',
        kind: 'law',
        statement: 'A **gas mixing entropy stays positive** `mixing` $\\Delta S_{mix} = -nR$ sum $x ln x$ with each $x ln x$ negative so $\\Delta S_{mix}$ positive.',
        detail: 'Two ideal gases at same $T$ plus $P$ mix with $\\Delta H_{mix}$ near zero but $\\Delta S_{mix}$ positive, so $\\Delta G_{mix}$ negative drives spontaneity. Unmixing needs work input.'
      },
      {
        term: 'Absolute entropy scale',
        kind: 'method',
        statement: 'A **Third Law zero anchors absolute values** `third-law` $S$ equal to $0$ at $0$ K for perfect crystals with $S^{\\circ}$ built by $C_{p}$ over $T$ integration plus phase jumps.',
        detail: 'Mahan heats plus melts plus boils stepwise: solid warming plus $\\Delta H_{fus}$ over $T_{m}$ plus liquid warming plus $\\Delta H_{vap}$ over $T_{b}$. Larger molar mass plus softer lattices raise $S^{\\circ}$.'
      },
      {
        term: 'Entropy versus enthalpy competition',
        kind: 'insight',
        statement: 'A **spontaneity call balances dispersal against heat** `competition` $\\Delta G = \\Delta H - T\\Delta S$ with mixing won by $\\Delta S$ and freezing won by $\\Delta H$.',
        detail: 'Water freezing below $0$ degree releases $\\Delta H$ negative enough to beat $\\Delta S$ negative ordering. Gas expansion wins by $\\Delta S$ positive with $\\Delta H$ near zero.'
      }
    ],
    figures: [
      {
        caption: 'Expansion $\\Delta S = nR ln V_{2}$ over $V_{1}$ plus mixing $-nR$ sum $x ln x$ with $S^{\\circ}$ built from $0$ K.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Entropy of expansion mixing and absolute scale"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">V double: S up</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">nR ln V2 over V1</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">mixing always up</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">minus nR sum x ln x</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">dG negative</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">S zero at 0 K</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">add Cp over T</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">dG = dH minus T dS decides</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Doubling volume entropy change',
        problem: '$1.00$ mol ideal gas expands isothermally from $1.00$ L to $2.00$ L at $300$ K. Find $\\Delta S$ plus $q_{rev}$ plus $w_{rev}$ signs.',
        steps: [
          { label: 'Step 1', text: 'Apply expansion law:\n```text\ndS = nR ln(V2 over V1) = 1 times 8.314 times ln 2\nln 2 = 0.693, dS = 5.76 J per K\nisothermal ideal dU = 0\n```\n$\\Delta S$ positive by $nR ln V_{2}$ over $V_{1}$ with $V$ in matched units.' },
          { label: 'Step 2', text: 'Set $q_{rev}$ equal to $T\\Delta S$ near $1728$ joule absorbed to keep $T$ fixed.' },
          { label: 'Step 3', text: 'Set $w_{rev}$ equal to $ -q_{rev}$ by $\\Delta U$ equal to $0$, so work done by system.' }
        ],
        result: '$\\Delta S$ near $+5.76$ joule per K with $q$ positive and $w$ negative.'
      },
      {
        title: 'Equal mol mixing spontaneity',
        problem: '$0.50$ mol $N_{2}$ plus $0.50$ mol $O_{2}$ mix at fixed $T$ plus $P$ from partitioned to shared $1.00$ mol volume. Find $\\Delta S_{mix}$ sign and $\\Delta G_{mix}$ sign.',
        steps: [
          { label: 'Step 1', text: 'Use $\\Delta S_{mix} = -nR$ sum $x ln x$ with $x$ equal to $0.50$ each.' },
          { label: 'Step 2', text: 'Compute $ -1.00$ times $R$ times $2$ times $0.50$ times $ln 0.50$ giving $+5.76$ joule per K.' },
          { label: 'Step 3', text: 'Set $\\Delta H_{mix}$ near zero for ideal gases, so $\\Delta G_{mix}$ equals $ -T\\Delta S_{mix}$ negative.' }
        ],
        result: 'Mixing $\\Delta S$ positive and $\\Delta G$ negative, so spontaneous.'
      }
    ],
    keyTakeaways: [
      '$\\Delta S = nR ln V_{2}$ over $V_{1}$ for isothermal ideal gas volume change.',
      '$\\Delta S_{mix} = -nR$ sum $x ln x$ stays positive for gas mixing.',
      'Perfect crystal $S$ equals $0$ at $0$ K anchoring absolute $S^{\\circ}$.',
      '$\\Delta G = \\Delta H - T\\Delta S$ decides mixing versus freezing spontaneity.'
    ],
    quiz: [
      {
        q: 'Doubling $V$ isothermally gives $\\Delta S$:',
        options: ['Zero', 'Negative $nR ln 2$', 'Positive $nR ln 2$', 'Infinite'],
        answer: 2,
        explanation: 'Step 1: Write $\\Delta S = nR ln V_{2}$ over $V_{1}$. Step 2: Insert ratio $2$. Step 3: Report positive $nR ln 2$.'
      },
      // PYQ-pattern: mixing entropy sign drill
      {
        q: 'Ideal gas mixing has:',
        options: ['$\\Delta S_{mix}$ negative', '$\\Delta S_{mix}$ zero', '$\\Delta S_{mix}$ positive with $\\Delta G$ negative', 'No change possible'],
        answer: 2,
        explanation: 'Step 1: Apply $-nR$ sum $x ln x$. Step 2: Note each $x ln x$ negative. Step 3: Get positive $\\Delta S$ with negative $\\Delta G$.'
      },
      {
        q: 'Third Law sets:',
        options: ['$S$ equal to $0$ at $0$ K for perfect crystals', '$S$ infinite at $0$ K', '$S$ zero at boiling point', 'No absolute scale'],
        answer: 0,
        explanation: 'Step 1: Cool perfect crystal to $0$ K. Step 2: Reduce microstates $W$ to $1$. Step 3: Set $S = k ln W$ to zero.'
      },
      {
        q: 'Free expansion $q$ versus $w$ gives:',
        options: ['$q$ zero always', '$w$ zero with $\\Delta S$ positive', '$\\Delta S$ zero', '$\\Delta U$ large positive'],
        answer: 1,
        explanation: 'Step 1: Expand against zero external $P$. Step 2: Set $w$ to zero with $q$ zero. Step 3: Keep $\\Delta S$ positive by volume ratio.'
      }
    ]
  },
  // ---------------------------------------------------------------- 30.4
  {
    sectionId: 'chem-ch30-s4',
    readingTime: 9,
    intro: 'Mahan cell energetics link measured voltages to equilibrium plus corrosion with $\\Delta G^{\\circ} = -nF E^{\\circ}$ as bridge. Modest $E^{\\circ}$ means huge $K$ by ten to the power $nE$ over $0.059$ at $298$ K. This workshop drills $K$ from $E$ plus concentration cells plus sacrificial protection.',
    objectives: [
      'Convert $E^{\\circ}$ to $K$ by $log K = nE^{\\circ}$ over $0.059$ at $298$ K',
      'Read concentration cells for solubility products and $pH$ style sensing',
      'Assign anode plus cathode in corrosion and choose sacrificial $Zn$ plus $Mg$ protection'
    ],
    concepts: [
      {
        term: 'Cell free energy bridge',
        kind: 'theorem',
        statement: 'A **cell voltage measures free energy per charge** `cell-bridge` $\\Delta G^{\\circ} = -nF E^{\\circ}$ with $F$ equal to $96485$ coulomb per mol.',
        detail: 'Mahan iron plus iodine illustration turns $0.235$ volt into $K$ near $10^{8}$ by exponent leverage. Positive $E^{\\circ}$ gives negative $\\Delta G^{\\circ}$ and $K$ above $1$.'
      },
      {
        term: 'Voltage to equilibrium conversion',
        kind: 'method',
        statement: 'A **log equilibrium scales with voltage** `E-to-K` $log K = nE^{\\circ}$ over $0.059$ at $298$ K with $n$ electrons counted from balanced halves.',
        detail: 'Two electron $0.32$ volt magnitude swings $K$ by ten to the power $11$, so $1$ M $Zn$ plus $Fe$ cells leave trace $Fe$ near $10^{-11}$ M. Mismatched $n$ breaks the exponent.'
      },
      {
        term: 'Concentration cell sensing',
        kind: 'definition',
        statement: 'A **same chemistry concentration gap drives voltage** `concentration-cell` $E = 0.059$ over $n$ times $log$ of high over low ion activity.',
        detail: 'Silver $Ag$ wire in $1$ M $Ag^{+}$ versus $AgCl$ saturated $Cl$ bath reads $K_{sp}$ from measured $E$. Glass $pH$ probes repeat the logic with $H^{+}$ activity gap.'
      },
      {
        term: 'Corrosion galvanic map',
        kind: 'law',
        statement: 'A **rust cell pairs iron oxidation with oxygen reduction** `corrosion` $Fe$ to $Fe^{2+}$ at anode plus $O_{2}$ to $OH$ at cathode with water plus salt completing the circuit.',
        detail: 'Droplet edges turn anodic and centres turn cathodic by $O_{2}$ access difference, so rust rings form at edges. Acid plus chloride accelerate the anode step.'
      },
      {
        term: 'Sacrificial protection choice',
        kind: 'insight',
        statement: 'A **more active metal donates electrons to the structure** `sacrificial` $Zn$ plus $Mg$ anodes dissolve as $Zn^{2+}$ while iron stays cathodic and reduced.',
        detail: 'Buried $Zn$ blocks wired to pipelines corrode first and get replaced on schedule. Paint plus coating break the circuit when intact, while scratches reactivate galvanic demand.'
      }
    ],
    figures: [
      {
        caption: '$\\Delta G^{\\circ} = -nF E^{\\circ}$ to $log K = nE^{\\circ}$ over $0.059$ with concentration cell sensing and $Zn$ sacrificial guard.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cell energetics with equilibrium corrosion and protection"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">dG is minus nFE</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">K from voltage</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">concentration cell</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">Ksp from E gap</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">pH probe same</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">Zn guards Fe</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">anode dissolves</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">O2 to OH at cathode, Fe saved</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Iron iodine equilibrium from voltage',
        problem: '$2Fe^{3+}$ plus $3I$ to $2Fe^{2+}$ plus $I_{3}$-type halves give $E^{\\circ}$ equal to $0.235$ volt with $n$ equal to $2$. Find $K$ at $298$ K.',
        steps: [
          { label: 'Step 1', text: 'Balance electrons:\n```text\ncathode 2 x (Fe3+ + e -> Fe2+)  n = 2\nanode I3- + 2e -> 3I- reversed\nE = 0.771 minus 0.536 = 0.235 V\n```\nMahan halves subtract to net $E^{\\circ}$ with $n$ equal to $2$.' },
          { label: 'Step 2', text: 'Apply $log K = nE^{\\circ}$ over $0.059$ giving $2$ times $0.235$ over $0.059$ near $7.97$.' },
          { label: 'Step 3', text: 'Raise $10$ to $7.97$ giving $K$ near $9$ times $10^{7}$, huge from modest volts.' }
        ],
        result: '$K$ near $10^{8}$ from $0.235$ volt with two electrons.'
      },
      {
        title: 'Sacrificial choice for iron pipe',
        problem: 'An iron pipeline in moist soil shows rust at scratches. Choose $Zn$ versus $Cu$ block protection and assign electrodes.',
        steps: [
          { label: 'Step 1', text: 'Rank activity: $Zn$ more active than $Fe$ while $Cu$ less active than $Fe$.' },
          { label: 'Step 2', text: 'Wire $Zn$ to pipe so $Zn$ turns anode $Zn$ to $Zn^{2+}$ plus $2e$ and pipe turns cathode with $O_{2}$ to $OH$.' },
          { label: 'Step 3', text: 'Reject $Cu$ since iron would turn anode and dissolve faster under $Cu$ coupling.' }
        ],
        result: '$Zn$ sacrificial anode guards iron while $Cu$ would accelerate rust.'
      }
    ],
    keyTakeaways: [
      '$\\Delta G^{\\circ} = -nF E^{\\circ}$ links volts to free energy.',
      '$log K = nE^{\\circ}$ over $0.059$ at $298$ K turns volts to $K$.',
      'Concentration $E$ gaps read $K_{sp}$ and $pH$ style activities.',
      '$Zn$ plus $Mg$ anodes guard $Fe$ by dissolving first.'
    ],
    quiz: [
      {
        q: '$E^{\\circ}$ equal to $0.235$ volt with $n$ equal to $2$ gives $K$ near:',
        options: ['$10^{2}$', '$10^{4}$', '$10^{8}$', '$10^{-8}$'],
        answer: 2,
        explanation: 'Step 1: Compute $nE^{\\circ}$ over $0.059$ near $7.97$. Step 2: Raise $10$ to that power. Step 3: Report near $10^{8}$.'
      },
      // PYQ-pattern: sacrificial anode selection drill
      {
        q: 'To guard iron select:',
        options: ['$Cu$ cathode metal', '$Zn$ more active anode', 'No metal contact', 'Insulator only'],
        answer: 1,
        explanation: 'Step 1: Need anode more active than $Fe$. Step 2: Dissolve $Zn$ to $Zn^{2+}$ first. Step 3: Hold iron cathodic and safe.'
      },
      {
        q: 'Concentration cell voltage tracks:',
        options: ['$log$ of high over low activity', 'Total mass only', 'Volume only', 'No ion dependence'],
        answer: 0,
        explanation: 'Step 1: Write $E = 0.059$ over $n$ times $log$ ratio. Step 2: Place high activity over low. Step 3: Read $K_{sp}$ or $pH$ from $E$.'
      },
      {
        q: 'Rust anode reaction is:',
        options: ['$O_{2}$ to $OH$', '$Fe$ to $Fe^{2+}$ plus $2e$', '$H_{2}$ to $H^{+}$', '$Zn$ to $Zn^{2+}$ always'],
        answer: 1,
        explanation: 'Step 1: Oxidise iron at anode. Step 2: Release $2e$ per $Fe$. Step 3: Reduce $O_{2}$ at cathode separately.'
      }
    ]
  }
]
