import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse Physical Chemistry — Thermodynamics and Thermochemistry
// Chapter 4: sections 4.1 to 4.4. Master study content.
// Math is KaTeX via the RichText pipeline. Plain subscripts and arrows only.
// ============================================================================

export const chemCh04Content: SectionContent[] = [
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: 'chem-ch4-s1',
    depth: [
      {
        tier: 'masters',
        title: 'First law to enthalpy: Legendre structure and heat capacities',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Enthalpy as the constant pressure Legendre transform',
            body: 'The first law fixes energy accounting as **internal energy** change equals heat plus work, and enthalpy emerges as its Legendre transform for constant pressure work. Define $H = U + pV$ so that at constant pressure the heat absorbed equals enthalpy change, with differential $dH = TdS + Vdp$ showing natural variables entropy and pressure. This is why chemists tabulate enthalpies rather than internal energies for open flask reactions, and why the gap between heat capacities carries the gas constant.'
          },
          {
            kind: 'derivation',
            heading: 'Heat capacity gap from the fundamental relation',
            body: 'Start from the definitions of heat capacities at constant volume and pressure and subtract them using the fundamental relation for a closed ideal gas. With $H = U + pV$ and $pV = nRT$ for one substance amount, differentiation at constant pressure gives $C_p - C_V = nR$ after the volume work term survives while internal energy depends only on temperature. The result explains why tabulated $C_p$ exceeds $C_V$ by about $8.314$ joule per mole kelvin units, and graduate calorimetry uses this gap to cross check bomb and flow calorimeter data on the same gas.'
          },
          {
            kind: 'application',
            heading: 'Research calorimetry and why tables choose enthalpy',
            body: 'Modern solution calorimeters and differential scanning instruments report enthalpy because the laboratory holds pressure fixed while temperature is scanned, so the measured heat flow is directly $q_p = \\Delta H$ without volume work corrections. For gases the companion relation $q_v = \\Delta U$ from bomb calorimetry differs by the expansion term, and the pair closes only when the substance amount and temperature change are known precisely. Current thermochemical tables exploit this Legendre structure to convert between bomb and flow data, and combustion research still audits fuel values by measuring both paths on the same sample.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Energy bookkeeping starts with the first law that splits change into heat and work. This section defines internal energy and enthalpy and derives their gap for gases. Heat capacities of monoatomic and diatomic gases close the loop for temperature-change arithmetic.',
    objectives: [
      'Apply first-law sign rules to heat, work and internal-energy changes',
      'Convert between enthalpy and internal energy with delta-ng RT',
      'Use Cp, Cv and gamma for heating and expansion problems'
    ],
    concepts: [
      {
        term: 'First law and signs',
        kind: 'law',
        statement: 'The **first law** states `energy conservation` as $\\Delta U = q + w$ with $w = -P_{ext}\\Delta V$ for expansion. Heat into the system and work done on it are positive.',
        detail: 'Expansion does work on surroundings so $w$ is negative; compression makes $w$ positive. At constant volume $w = 0$ and $q_V = \\Delta U$ directly.'
      },
      {
        term: 'Enthalpy definition',
        kind: 'definition',
        statement: 'At constant pressure heat equals **enthalpy change** `q_P = \\Delta H` where $H = U + PV$. For ideal gases $\\Delta H = \\Delta U + \\Delta n_g RT$ with $\\Delta n_g$ the gas-mole change.',
        detail: 'For $N_2 + 3H_2 \\to 2NH_3$ we have $\\Delta n_g = 2 - 4 = -2$, so $\\Delta H$ is more negative than $\\Delta U$ by $2RT$. Solids and liquids contribute negligibly to $\\Delta n_g$.'
      },
      {
        term: 'Heat capacities Cp and Cv',
        kind: 'definition',
        statement: 'Molar heats are **Cv** at `constant volume` with $q_V = nC_V\\Delta T$ and Cp at constant pressure with $q_P = nC_P\\Delta T$. For ideal gases $C_P - C_V = R$ per mole.',
        detail: 'Monoatomic: $C_V = 3R/2$ and $C_P = 5R/2$ inside $...$ as $3R/2$ and $5R/2$. Diatomic near room value: $C_V = 5R/2$ and $C_P = 7R/2$. Ratio $\\gamma = C_P/C_V$ is $5/3$ and $7/5$ respectively.'
      },
      {
        term: 'Work of standard paths',
        kind: 'method',
        statement: 'Path fixes work: **isochoric** `w = 0`, isobaric $w = -P\\Delta V = -nR\\Delta T$, isothermal reversible $w = -nRT \\ln(V_2/V_1)$. Adiabatic sets `q = 0` so $\\Delta U = w$.',
        detail: 'Reversible isothermal also gives $q = -w$ since $\\Delta U = 0$ for ideal gas at fixed $T$. Free expansion into vacuum has both $w = 0$ and $q = 0$.'
      },
      {
        term: 'State versus path trap',
        kind: 'insight',
        statement: 'Internal energy and enthalpy are **state functions** fixed by `endpoints`, while heat and work are path functions. Two routes between the same states share $\\Delta U$ and $\\Delta H$ but not $q$ and $w$.',
        detail: 'Cyclic process returns to start so $\\Delta U = 0$ and net $q = -w$. Trap: calling heat a state function and assigning one q to a state without naming the path.'
      }
    ],
    figures: [
      {
        caption: 'First law $\Delta U = q + w$ with $w = -P_{ext}\Delta V$ splits paths: isochoric $w = 0$, isobaric $w = -nR\Delta T$ and isothermal $w = -nRT\ln(V_2/V_1)$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pressure volume diagram with four thermodynamic paths"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">P-V paths from one start: work is area</text><line x1="100" y1="300" x2="620" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="300" x2="100" y2="60" stroke="currentColor" stroke-width="1.5"/><text x="70" y="70" font-size="13" fill="currentColor" font-family="sans-serif">P</text><text x="610" y="320" font-size="13" fill="currentColor" font-family="sans-serif">V</text><circle cx="200" cy="220" r="5" fill="currentColor" stroke="none"/><text x="150" y="245" font-size="12" fill="currentColor" font-family="sans-serif">start</text><line x1="200" y1="220" x2="200" y2="100" stroke="currentColor" stroke-width="2.5"/><text x="205" y="110" font-size="12" fill="currentColor" font-family="sans-serif">isochore w=0</text><line x1="200" y1="220" x2="450" y2="220" stroke="currentColor" stroke-width="2.5"/><text x="360" y="240" font-size="12" fill="currentColor" font-family="sans-serif">isobar w=-P dV</text><path d="M200,220 Q320,215 450,140" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="430" y="125" font-size="12" fill="currentColor" font-family="sans-serif">isotherm</text><path d="M200,220 Q320,200 450,100" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="440" y="85" font-size="12" fill="currentColor" font-family="sans-serif">adiabat q=0</text><text x="100" y="330" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">U and H fixed by endpoints; q and w depend on route; cycle gives net q = -w</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Enthalpy from internal energy',
        problem: 'Combustion of methane $CH_4 + 2O_2 \\to CO_2 + 2H_2O(l)$ has $\\Delta U = -885 kJ/mol$ at $298 K$. Find $\\Delta H$.',
        steps: [
          { label: 'Step 1', text: 'Count gases: reactants $1 + 2 = 3$, products $1$ since water is liquid. So $\\Delta n_g = 1 - 3 = -2$. Then $\\Delta H = \\Delta U + \\Delta n_g RT$.' },
          { label: 'Step 2', text: 'Insert RT in kJ:\n```txt\nRT = 8.314 x 298/1000 = 2.478 kJ/mol\ndelta-ng RT = -2 x 2.478 = -4.956 kJ/mol\ndelta-H = -885 + (-4.956) = -889.96 kJ/mol\n```' },
          { label: 'Step 3', text: 'Thus $\\Delta H = -885 - 4.96 = -890.0 kJ/mol$. Liquid water removes two gas moles, pulling enthalpy below internal energy.' }
        ],
        result: 'Enthalpy of combustion is about minus 890.0 kJ/mol.'
      },
      {
        title: 'Reversible isothermal work',
        problem: 'Two moles of ideal gas expand reversibly at $300 K$ from $5.0 L$ to $15.0 L$. Find w, delta-U, q and delta-H.',
        steps: [
          { label: 'Step 1', text: 'Isothermal ideal gas gives $\\Delta U = 0$ and $\\Delta H = 0$. Work $w = -nRT \\ln(V_2/V_1)$ with $V_2/V_1 = 15.0/5.0 = 3.0$.' },
          { label: 'Step 2', text: 'Compute the logarithm term:\n```txt\nnRT = 2 x 8.314 x 300 = 4988.4 J\nln(3.0) = 1.0986\nw = -4988.4 x 1.0986 = -5480 J\nq = -w = +5480 J\n```' },
          { label: 'Step 3', text: 'So $w = -5480 J$, $q = +5480 J$ and both $\\Delta U$ and $\\Delta H$ are zero. Heat absorbed exactly pays for expansion work at fixed temperature.' }
        ],
        result: 'Work is minus 5.48 kJ, heat plus 5.48 kJ, with zero U and H change.'
      }
    ],
    keyTakeaways: [
      'First law is ΔU = q + w with expansion work minus PextΔV.',
      'Constant-pressure heat is ΔH and ΔH = ΔU + ΔngRT for gases.',
      'CP minus CV equals R with gamma $5/3$ monoatomic and $7/5$ diatomic.',
      'U and H are state functions while q and w depend on path.'
    ],
    quiz: [
      // PYQ-pattern: delta-H from delta-U with gas-mole count
      {
        q: 'For $N_2 + 3H_2 \\to 2NH_3$ with $\\Delta U = -80.0 kJ$ at $298 K$, what is $\\Delta H$? ($RT = 2.48 kJ$)',
        options: [`$-75.0 kJ$`, `$-80.0 kJ$`, `$-85.0 kJ$`, `$-77.5 kJ$`], answer: 2,
        explanation: 'Step 1: Gas moles $2 - 4 = -2$. Step 2: Correction $-2 \\times 2.48 = -4.96 kJ$. Step 3: Sum $-80.0 + (-4.96) = -84.96$, about $-85.0 kJ$. Step 4: Option $-75.0$ adds the correction with wrong sign.'
      },
      {
        q: 'Two moles expand reversibly at $300 K$ from $5.0 L$ to $15.0 L$. What is w?',
        options: [`$-5.48 kJ$`, `$+5.48 kJ$`, `$0$`, `$-11.4 kJ$`], answer: 0,
        explanation: 'Step 1: $nRT = 2 \\times 8.314 \\times 300 = 4988.4 J$. Step 2: Factor $\\ln(15.0/5.0) = \\ln(3.0) = 1.0986$. Step 3: Product $-4988.4 \\times 1.0986 = -5480 J$. Step 4: Positive sign would describe compression, not expansion.'
      },
      {
        q: 'Molar Cv of monoatomic ideal gas equals?',
        options: [`$R$`, `$7R/2$`, `$5R/2$`, `$3R/2$`], answer: 3,
        explanation: 'Step 1: Three translational directions each carry $R/2$. Step 2: Sum $3 \\times R/2 = 3R/2$. Step 3: Then $C_P = 3R/2 + R = 5R/2$. Step 4: Value $5R/2$ names $C_P$, not $C_V$.'
      },
      {
        q: 'Which pair are both state functions?',
        options: ['q and w', 'U and H', 'q and H', 'w and U'], answer: 1,
        explanation: 'Step 1: State means fixed by endpoints. Step 2: $U$ and $H$ qualify; $q$ and $w$ vary by path. Step 3: Cycle test: $\\Delta U = 0$ but net $q$ need not vanish. Step 4: Pairs mixing $q$ or $w$ fail the endpoint test.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.2
  {
    sectionId: 'chem-ch4-s2',
    readingTime: 9,
    intro: 'Formation, combustion and bond tables all describe the same enthalpy landscape from different doors. This section builds Hess cycles that add reactions like vectors and contrasts atomization routes with bond-energy estimates. Born-Haber closure for ionic solids shows the cycle habit at full power.',
    objectives: [
      'Construct Hess cycles from formation or combustion data',
      'Estimate reaction enthalpy from bond energies with sign discipline',
      'Close Born-Haber cycles for lattice enthalpy'
    ],
    concepts: [
      {
        term: 'Hess law addition',
        kind: 'law',
        statement: 'Enthalpy is a **state function**, so target `ΔH` is the signed sum of step values: reverse a step to flip its sign and scale it to scale ΔH. Sum $\\Delta H_{net} = \\sum \\nu_i \\Delta H_i$ over the cycle.',
        detail: 'Manipulate equations first, then carry their $\\Delta H$ values through the same operations. Trap: multiplying an equation by $2$ without doubling its $\\Delta H$.'
      },
      {
        term: 'Formation route',
        kind: 'method',
        statement: 'Standard **formation enthalpies** give `reaction enthalpy` by $\\Delta H = \\sum n_p \\Delta H_f(products) - \\sum n_r \\Delta H_f(reactants)$. Elements in reference form contribute zero.',
        detail: 'Example graphite to $CO_2$: $\\Delta H_f = -393.5 kJ/mol$ anchors carbon arithmetic. Stable $O_2$, $N_2$ and graphite enter as zero, not as tabulated numbers.'
      },
      {
        term: 'Combustion route',
        kind: 'method',
        statement: 'Where formation data are missing, **combustion enthalpies** give the same `target` through fuel cycles: burn reactants and products separately and subtract. Relation mirrors formation with opposite sign logic.',
        detail: 'Classic for organics: $\\Delta H_{reaction} = \\sum n_r \\Delta H_c(reactants) - \\sum n_p \\Delta H_c(products)$. Note reactant-minus-product order flips relative to formation route.'
      },
      {
        term: 'Bond enthalpy estimate',
        kind: 'method',
        statement: 'Reaction heat approximates to **bonds broken** minus `bonds formed`: $\\Delta H = \\sum BE_{broken} - \\sum BE_{formed}$. It is approximate because tabulated means differ by environment.',
        detail: 'For $H_2 + Cl_2 \\to 2HCl$: $BE$ values $436 + 242 - 2 \\times 431 = -184 kJ$. Works best for gases; phase changes need extra latent terms.'
      },
      {
        term: 'Born-Haber closure',
        kind: 'theorem',
        statement: 'The **Born-Haber cycle** splits salt formation into `sublimation`, dissociation, ionization, electron gain and lattice steps summing to $\\Delta H_f$. Lattice enthalpy $U$ closes the loop as the largest term.',
        detail: 'For $NaCl$: $\\Delta H_f = S + D/2 + IE - EA - U$ in sign-consistent form. Rearranged, $U$ emerges near $787 kJ/mol$. Electron affinity enters with formation sign, the classic sign trap.'
      }
    ],
    figures: [
      {
        caption: 'Hess adds steps as $\Delta H_{net} = \sum \nu_i \Delta H_i$ so formation follows products minus reactants: methane gives $-393.5 + 2(-285.8) + 890.0 = -75.1$ kJ per mole.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hess cycle box for methane formation enthalpy"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">Hess box: combustions assemble formation</text><rect x="220" y="60" width="280" height="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="235" y="85" font-size="13" fill="currentColor" font-family="sans-serif">C + 2H2 -&gt; CH4 target</text><line x1="220" y1="100" x2="150" y2="180" stroke="currentColor" stroke-width="2"/><polygon points="150,180 154,170 144,172" fill="currentColor" stroke="none"/><line x1="500" y1="100" x2="570" y2="180" stroke="currentColor" stroke-width="2"/><polygon points="570,180 576,172 566,170" fill="currentColor" stroke="none"/><rect x="40" y="180" width="220" height="50" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="55" y="200" font-size="12" fill="currentColor" font-family="sans-serif">C+O2 -&gt; CO2 -393.5</text><text x="55" y="220" font-size="12" fill="currentColor" font-family="sans-serif">2 x (H2+O2/2 -&gt; H2O)</text><rect x="460" y="180" width="220" height="50" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="475" y="200" font-size="12" fill="currentColor" font-family="sans-serif">CH4+2O2 -&gt; CO2+2H2O</text><text x="475" y="220" font-size="12" fill="currentColor" font-family="sans-serif">-890.0, reversed +890.0</text><line x1="260" y1="230" x2="260" y2="270" stroke="currentColor" stroke-width="2"/><line x1="460" y1="230" x2="460" y2="270" stroke="currentColor" stroke-width="2"/><rect x="180" y="270" width="360" height="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="200" y="295" font-size="13" fill="currentColor" font-family="sans-serif">CO2 + 2H2O common floor</text><text x="40" y="330" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">broken minus formed for bonds; Born-Haber closes salts the same way</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Hess cycle for methane formation',
        problem: 'Given $C + O_2 \\to CO_2$ ($-393.5$), $H_2 + O_2/2 \\to H_2O(l)$ ($-285.8$) and $CH_4 + 2O_2 \\to CO_2 + 2H_2O(l)$ ($-890.0$), all in $kJ/mol$, find $\\Delta H_f$ of methane.',
        steps: [
          { label: 'Step 1', text: 'Target $C + 2H_2 \\to CH_4$. Add first two combustions and subtract the third: $\\Delta H = -393.5 + 2(-285.8) - (-890.0)$.' },
          { label: 'Step 2', text: 'Combine the numbers:\n```txt\n2 x (-285.8) = -571.6\nsum = -393.5 + (-571.6) = -965.1\nminus (-890.0) -> -965.1 + 890.0 = -75.1 kJ/mol\n```' },
          { label: 'Step 3', text: 'Thus $\\Delta H_f = -965.1 + 890.0 = -75.1 kJ/mol$. Reversing methane combustion flips $-890.0$ to $+890.0$, the decisive sign move.' }
        ],
        result: 'Standard formation enthalpy of methane is about minus 75.1 kJ/mol.'
      },
      {
        title: 'Bond-energy estimate for HCl formation',
        problem: 'Estimate $\\Delta H$ for $H_2 + Cl_2 \\to 2HCl$ with $BE$ values $H-H$ $436$, $Cl-Cl$ $242$, $H-Cl$ $431$, all $kJ/mol$.',
        steps: [
          { label: 'Step 1', text: 'Broken: $436 + 242 = 678$. Formed: $2 \\times 431 = 862$. Apply $\\Delta H = 678 - 862$.' },
          { label: 'Step 2', text: 'Subtract the ledgers:\n```txt\nbroken = 436 + 242 = 678 kJ\nformed = 2 x 431 = 862 kJ\ndelta-H = 678 - 862 = -184 kJ\n```' },
          { label: 'Step 3', text: 'Estimate $-184 kJ$ for two moles of $HCl$, or $-92 kJ/mol$ of $HCl$. Measured $-92.3$ agrees closely since all species are gases.' }
        ],
        result: 'Bond estimate is minus 184 kJ per reaction as written.'
      }
    ],
    keyTakeaways: [
      'Hess adds scaled and reversed steps with their ΔH values carried along.',
      'Formation route is products minus reactants with elements as zero.',
      'Combustion route reverses the subtraction order for fuel cycles.',
      'Bond route is broken minus formed and Born-Haber closes ionic loops.'
    ],
    quiz: [
      // PYQ-pattern: Hess combination of three combustions
      {
        q: 'With $C+O_2 \\to CO_2$ ($-393.5$), $H_2+O_2/2 \\to H_2O$ ($-285.8$) and $CH_4+2O_2 \\to CO_2+2H_2O$ ($-890.0$), what is $\\Delta H_f(CH_4)$?',
        options: [`$+75.1 kJ/mol$`, `$-75.1 kJ/mol$`, `$-890.0 kJ/mol$`, `$-1759 kJ/mol$`], answer: 1,
        explanation: 'Step 1: Double water step: $2 \\times (-285.8) = -571.6$. Step 2: Add carbon step: $-393.5 + (-571.6) = -965.1$. Step 3: Subtract methane combustion: $-965.1 + 890.0 = -75.1$. Step 4: Positive sign forgets to reverse the combustion equation.'
      },
      {
        q: 'For $H_2+Cl_2 \\to 2HCl$ with BE $436$, $242$, $431$, what is $\\Delta H$?',
        options: [`$+1109 kJ$`, `$+184 kJ$`, '$-92 kJ$ for two moles', `$-184 kJ$`], answer: 3,
        explanation: 'Step 1: Broken $436 + 242 = 678$. Step 2: Formed $2 \\times 431 = 862$. Step 3: Difference $678 - 862 = -184 kJ$. Step 4: Positive value swaps broken and formed ledgers.'
      },
      {
        q: '$\\Delta H_f$ of $O_2(g)$ in reference form equals?',
        options: [`$0$`, `$-249 kJ/mol$`, `$+142 kJ/mol$`, `$-393.5 kJ/mol$`], answer: 0,
        explanation: 'Step 1: Reference elements define the zero scale. Step 2: $O_2$ gas is the oxygen reference. Step 3: Hence tabulated $0$ by definition. Step 4: Nonzero values belong to compounds or non-reference allotropes like ozone.'
      },
      {
        q: 'In Born-Haber work, lattice formation from gaseous ions is?',
        options: ['Strongly endothermic', 'Zero by definition', 'Strongly exothermic', 'Equal to ionization energy'], answer: 2,
        explanation: 'Step 1: Opposite charges collapse with large energy release. Step 2: For $NaCl$ magnitude near $787 kJ/mol$ released. Step 3: Sign is negative for formation direction. Step 4: Endothermic sign belongs to the reverse dissociation direction.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.3
  {
    sectionId: 'chem-ch4-s3',
    readingTime: 8,
    intro: 'Entropy decides which way heat can flow and how far disorder must rise. This section defines entropy change for heating, phase change and mixing and states the second law for isolated systems. Carnot efficiency caps every heat engine between the same two reservoirs.',
    objectives: [
      'Compute entropy change for heating, phase change and gas expansion',
      'Apply second-law sign tests to total entropy of isolated systems',
      'Evaluate Carnot efficiency from reservoir temperatures'
    ],
    concepts: [
      {
        term: 'Entropy of reversible heat',
        kind: 'definition',
        statement: 'Reversible heat defines **entropy change** as `dS = dq_{rev}/T`, giving $\\Delta S = nC \\ln(T_2/T_1)$ for heating and $\\Delta S = \\Delta H_{trans}/T_{trans}$ for phase change. Units are $J/K$.',
        detail: 'Example vaporization of water: $40660/373 = 109 J/mol K$. Temperature must be kelvin; $C$ is the matching $C_P$ or $C_V$ for the path.'
      },
      {
        term: 'Second law',
        kind: 'law',
        statement: 'For any **isolated system** total `entropy never falls`: $\\Delta S_{total} = \\Delta S_{sys} + \\Delta S_{surr} \\geq 0$. Spontaneous means strictly greater, equilibrium means equal.',
        detail: 'System entropy alone may fall during freezing, but surroundings rise more from released heat. Trap: applying the inequality to the system only and calling ordering spontaneous.'
      },
      {
        term: 'Gas expansion and mixing',
        kind: 'theorem',
        statement: 'Isothermal gas change gives **mixing growth** $\\Delta S = nR \\ln(V_2/V_1) = -nR \\ln(P_2/P_1)$ per `mole count`. Mixing adds $-R \\sum n_i \\ln x_i$ which is always positive.',
        detail: 'Doubling volume gives $nR \\ln(2) = 5.76 J/K$ per mole. Same-$T,P$ mixing of ideal gases has no $\\Delta H$ but positive $\\Delta S$, so it is entropy driven.'
      },
      {
        term: 'Carnot efficiency',
        kind: 'theorem',
        statement: 'No engine between $T_h$ and $T_c$ beats **Carnot cap** `eta = 1 - T_c/T_h` with kelvin inputs. Reversible engines all reach it and irreversibles fall below.',
        detail: 'Between $600 K$ and $300 K$ the cap is $1 - 300/600 = 1/2$ inside $...$ as $1/2$. Higher $T_h$ or lower $T_c$ raises the ceiling; $100$ percent needs $T_c = 0$ or infinite $T_h$.'
      },
      {
        term: 'Absolute entropies',
        kind: 'definition',
        statement: 'Third-law **absolute entropies** `S` start at zero for perfect crystals at $0 K$, so reaction $\\Delta S = \\sum n_p S(products) - \\sum n_r S(reactants)$. Gases carry far larger $S$ than solids.',
        detail: 'Reactions producing gas gain entropy; consuming gas lose it. Standard tables quote $S$, not $\\Delta S_f$, unlike enthalpy practice.'
      }
    ],
    figures: [
      {
        caption: 'Entropy rises as $\Delta S = \Delta H_{trans}/T_{trans}$ with $\Delta S_{total} \geq 0$: Carnot caps work at $\eta = 1 - T_c/T_h$ so $600 K$ to $300 K$ gives $50$ percent.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carnot reservoirs with heat work and rejected heat arrows"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">Carnot engine between hot and cold reservoirs</text><rect x="200" y="50" width="320" height="50" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="280" y="80" font-size="14" fill="currentColor" font-family="sans-serif">hot Th = 600 K</text><rect x="280" y="150" width="160" height="70" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="315" y="180" font-size="14" fill="currentColor" font-family="sans-serif">engine</text><text x="315" y="200" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">eta max 1/2</text><rect x="200" y="270" width="320" height="50" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="280" y="300" font-size="14" fill="currentColor" font-family="sans-serif">cold Tc = 300 K</text><line x1="360" y1="100" x2="360" y2="150" stroke="currentColor" stroke-width="2.5"/><polygon points="360,150 354,140 366,140" fill="currentColor" stroke="none"/><text x="370" y="130" font-size="12" fill="currentColor" font-family="sans-serif">Qh 1000 J</text><line x1="360" y1="220" x2="360" y2="270" stroke="currentColor" stroke-width="2.5"/><polygon points="360,270 354,260 366,260" fill="currentColor" stroke="none"/><text x="370" y="250" font-size="12" fill="currentColor" font-family="sans-serif">Qc 500 J</text><line x1="440" y1="185" x2="550" y2="185" stroke="currentColor" stroke-width="2.5"/><polygon points="550,185 540,179 540,191" fill="currentColor" stroke="none"/><text x="460" y="170" font-size="12" fill="currentColor" font-family="sans-serif">W 500 J out</text><text x="40" y="340" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">dS = dq(rev)/T; mixing adds -R sum n ln x, always positive</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Entropy of vaporization',
        problem: 'Water boils at $373 K$ with $\\Delta H_{vap} = 40.66 kJ/mol$. Find $\\Delta S_{vap}$ and comment on order.',
        steps: [
          { label: 'Step 1', text: 'Use $\\Delta S = \\Delta H/T = 40660/373$. Division gives about $109$. Units $J/mol K$ since joules over kelvin.' },
          { label: 'Step 2', text: 'Divide explicitly:\n```txt\ndelta-H = 40660 J/mol, T = 373 K\ndelta-S = 40660/373 = 109.0 J/mol K\nTrouton ratio ~ 109, above 85-88 norm\n```' },
          { label: 'Step 3', text: 'Thus $\\Delta S = 109.0 J/mol K$. Value above Trouton norm near $85$ reflects hydrogen bonding order in liquid water released on boiling.' }
        ],
        result: 'Vaporization entropy is about 109 J/mol K.'
      },
      {
        title: 'Carnot cap between 600 K and 300 K',
        problem: 'Find maximum efficiency of an engine working between $600 K$ and $300 K$ and heat rejected when $1000 J$ is absorbed.',
        steps: [
          { label: 'Step 1', text: 'Cap $\\eta = 1 - T_c/T_h = 1 - 300/600 = 1 - 1/2 = 1/2$. Work is $1/2$ of input, rest rejected.' },
          { label: 'Step 2', text: 'Split the energy:\n```txt\neta = 1 - 300/600 = 0.50\nW = 0.50 x 1000 = 500 J\nQc = 1000 - 500 = 500 J\n```' },
          { label: 'Step 3', text: 'So $W = 500 J$ and rejected $Q_c = 500 J$. Real engines deliver less because of friction and finite-rate heat flow.' }
        ],
        result: 'Maximum efficiency is 50 percent with 500 J rejected.'
      }
    ],
    keyTakeaways: [
      'Entropy change is reversible heat over T with phase form ΔH/T.',
      'Isolated total entropy rises for spontaneous and holds at equilibrium.',
      'Gas expansion and mixing grow entropy by nR ln ratios.',
      'Carnot cap 1 − Tc/Th bounds every engine between two reservoirs.'
    ],
    quiz: [
      // PYQ-pattern: vaporization entropy from enthalpy over T
      {
        q: '$\\Delta H_{vap} = 40.66 kJ/mol$ at $373 K$. What is $\\Delta S_{vap}$?',
        options: [`$109 J/mol K$`, `$40.7 J/mol K$`, `$373 J/mol K$`, `$9.16 J/mol K$`], answer: 0,
        explanation: 'Step 1: Convert $40.66 kJ$ to $40660 J$. Step 2: Divide $40660/373 = 109.0$. Step 3: Units $J/mol K$ follow from $J$ over $K$. Step 4: Value $40.7$ forgets division by $T$.'
      },
      {
        q: 'Engine between $600 K$ and $300 K$ has Carnot efficiency?',
        options: ['$25$ percent', '$100$ percent', '$50$ percent', '$75$ percent'], answer: 2,
        explanation: 'Step 1: Ratio $300/600 = 1/2$. Step 2: Subtract $1 - 1/2 = 1/2$. Step 3: Percent $= 50$. Step 4: Value $100$ percent needs $T_c = 0$, unreachable.'
      },
      {
        q: 'One mole doubles volume isothermally. What is $\\Delta S$?',
        options: [`$0$`, `$R \\ln(2) = 5.76 J/K$`, `$-R \\ln(2)$`, `$R$`], answer: 1,
        explanation: 'Step 1: Use $\\Delta S = R \\ln(2)$. Step 2: $\\ln(2) = 0.693$. Step 3: Product $8.314 \\times 0.693 = 5.76 J/K$. Step 4: Negative sign belongs to compression, not expansion.'
      },
      {
        q: 'Freezing of water at $273 K$ has system $\\Delta S$ negative. Why can it occur?',
        options: ['Second law is violated', 'Carnot cap is exceeded', 'Entropy is not defined for phase change', 'Surroundings gain more entropy from released heat'], answer: 3,
        explanation: 'Step 1: Test total $\\Delta S_{sys} + \\Delta S_{surr}$. Step 2: Released $\\Delta H$ warms surroundings by $Q/T$. Step 3: Surroundings rise exceeds system fall, total positive. Step 4: Violation option misapplies the law to the system alone.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.4
  {
    sectionId: 'chem-ch4-s4',
    readingTime: 8,
    intro: 'Enthalpy and entropy pull in opposite directions, and Gibbs energy declares the winner at given temperature. This section reads sign combinations, finds crossover temperatures and links free energy to equilibrium constants. Coupled reactions show how a downhill step can tow an uphill one.',
    objectives: [
      'Predict spontaneity from delta-H and delta-S sign pairs',
      'Compute crossover temperature where equilibrium holds',
      'Link delta-G to equilibrium constant and coupled work'
    ],
    concepts: [
      {
        term: 'Gibbs definition',
        kind: 'definition',
        statement: 'Free energy is **G = H − TS**, so at fixed `T and P` change is $\\Delta G = \\Delta H - T\\Delta S$. Negative $\\Delta G$ marks spontaneous, zero marks equilibrium and positive marks nonspontaneous.',
        detail: 'Derivation from $\\Delta S_{total} \\geq 0$ gives $-T\\Delta S_{total} = \\Delta G$. Units must match: convert $\\Delta S$ in $J/K$ to $kJ/K$ before combining with $\\Delta H$ in $kJ$.'
      },
      {
        term: 'Four sign quadrants',
        kind: 'theorem',
        statement: 'Sign pairs fix fate: **negative H plus positive S** is `always spontaneous`, positive H plus negative S never, negative pair works at low $T$ and positive pair at high $T$. Crossover sits at $T = \\Delta H/\\Delta S$.',
        detail: 'Freezing has negative pair and runs cold; boiling has positive pair and runs hot. Trap: calling exothermic always spontaneous ignores entropy cost at high $T$.'
      },
      {
        term: 'Crossover temperature',
        kind: 'method',
        statement: 'Set $\\Delta G = 0$ to get **equilibrium temperature** `T_{eq} = \\Delta H/\\Delta S` with matched units. Above or below depends on quadrant logic, not blind inequality.',
        detail: 'Example $\\Delta H = 110 kJ$, $\\Delta S = 0.11 kJ/K$ gives $T = 110/0.11 = 1000 K$. For positive pair, spontaneous above $1000 K$; for negative pair the side flips.'
      },
      {
        term: 'Free energy and K',
        kind: 'theorem',
        statement: 'Standard free energy sets the **equilibrium constant** by `\\Delta G = -RT \\ln K`, or $\\Delta G = -2.303 RT \\log K$. Negative $\\Delta G$ means $K$ greater than one.',
        detail: 'At $298 K$, $2.303 RT = 5.71 kJ$ per $\\log$ unit, so $5.71 kJ$ shifts $K$ tenfold. $\\Delta G = 0$ gives $K = 1$ exactly.'
      },
      {
        term: 'Coupling and work',
        kind: 'insight',
        statement: 'An **uphill step** with `positive ΔG` can run when wired to a downhill step with larger negative sum, as $\\Delta G_{net} = \\sum \\Delta G_i$. Maximum non-expansion work is $w_{max} = \\Delta G$.',
        detail: 'Biology wires glucose formation to ATP hydrolysis; metallurgy wires oxide splitting to carbon oxidation. Coupling needs shared intermediates, not just paper addition.'
      }
    ],
    figures: [
      {
        caption: 'Gibbs $\Delta G = \Delta H - T\Delta S$ crosses zero at $T_{eq} = \Delta H/\Delta S$: $CaCO_3$ near $1106 K$ runs only hot while $\Delta G = -RT\ln K$ sets the constant.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gibbs free energy falling line crossing zero"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">Delta-G versus T: crossover at equilibrium</text><line x1="100" y1="300" x2="620" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="300" x2="100" y2="60" stroke="currentColor" stroke-width="1.5"/><text x="70" y="70" font-size="13" fill="currentColor" font-family="sans-serif">G</text><text x="610" y="320" font-size="13" fill="currentColor" font-family="sans-serif">T</text><line x1="100" y1="300" x2="100" y2="300" stroke="currentColor" stroke-width="1"/><line x1="120" y1="120" x2="560" y2="260" stroke="currentColor" stroke-width="1" opacity="0"/><line x1="140" y1="100" x2="540" y2="260" stroke="currentColor" stroke-width="2.5"/><line x1="100" y1="180" x2="620" y2="180" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.6"/><text x="625" y="185" font-size="12" fill="currentColor" font-family="sans-serif">G=0</text><circle cx="340" cy="180" r="6" fill="currentColor" stroke="none"/><text x="350" y="170" font-size="12" fill="currentColor" font-family="sans-serif">Teq 1106 K</text><text x="150" y="140" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">nonspontaneous above</text><text x="380" y="250" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">spontaneous above for +pair</text><rect x="100" y="300" width="520" height="1" fill="none" stroke="currentColor" stroke-width="1"/><text x="40" y="330" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">minus H plus S always runs; plus H minus S never runs at any T</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Crossover for calcium carbonate',
        problem: 'Decomposition $CaCO_3 \\to CaO + CO_2$ has $\\Delta H = 178 kJ/mol$ and $\\Delta S = 0.161 kJ/mol K$. Find the temperature where $\\Delta G = 0$ and state spontaneity above it.',
        steps: [
          { label: 'Step 1', text: 'Set $T = \\Delta H/\\Delta S = 178/0.161$. Division: $178/0.161 = 1105.6 K$.' },
          { label: 'Step 2', text: 'Evaluate the balance:\n```txt\nT = 178/0.161 = 1105.6 K\nat 298 K: delta-G = 178 - 298x0.161 = 130.0 kJ\nat 1200 K: delta-G = 178 - 1200x0.161 = -15.2 kJ\n```' },
          { label: 'Step 3', text: 'Positive pair means spontaneous above $1106 K$: at $298 K$ we get $+130.0 kJ$ but at $1200 K$ we get $-15.2 kJ$. Kilns run hot for exactly this reason.' }
        ],
        result: 'Equilibrium near 1106 K with high-temperature spontaneity.'
      },
      {
        title: 'K from standard free energy',
        problem: 'A reaction has $\\Delta G = -11.42 kJ/mol$ at $298 K$. Find K using $2.303 RT = 5.71 kJ/mol$.',
        steps: [
          { label: 'Step 1', text: 'Use $\\log K = -\\Delta G/2.303RT = 11.42/5.71 = 2.0$. Hence $K = 10^2$.' },
          { label: 'Step 2', text: 'Compute the exponent:\n```txt\nlog K = 11.42/5.71 = 2.00\nK = 10^2 = 100\ncheck: -5.71 x 2.00 = -11.42 kJ\n```' },
          { label: 'Step 3', text: 'So $K = 100$, product favoured. Each $5.71 kJ$ of negative $\\Delta G$ multiplies $K$ tenfold at room temperature.' }
        ],
        result: 'Equilibrium constant is 1.0 × 10^2.'
      }
    ],
    keyTakeaways: [
      'ΔG = ΔH − TΔS with negative marking spontaneous at fixed T and P.',
      'Negative H plus positive S always runs while reverse never runs.',
      'Equilibrium temperature is ΔH/ΔS with unit-matched division.',
      'ΔG = −RT ln K ties free energy to product favourability.'
    ],
    quiz: [
      // PYQ-pattern: crossover temperature plus spontaneity side
      {
        q: '$\\Delta H = 178 kJ$, $\\Delta S = 0.161 kJ/K$. Where is $\\Delta G = 0$?',
        options: [`$28658 K$`, `$298 K$`, `$28.7 K$`, `$1106 K$`], answer: 3,
        explanation: 'Step 1: Ratio $178/0.161$. Step 2: Division $= 1105.6 K$, about $1106 K$. Step 3: Positive pair means spontaneous above this $T$. Step 4: Value $28658$ multiplies instead of dividing.'
      },
      {
        q: 'Which sign pair is always spontaneous?',
        options: ['Positive H, positive S', 'Negative H, positive S', 'Negative H, negative S', 'Positive H, negative S'], answer: 1,
        explanation: 'Step 1: Write $\\Delta G = \\Delta H - T\\Delta S$. Step 2: Negative minus positive times $T$ stays negative. Step 3: Other pairs flip with $T$ or stay positive. Step 4: Positive-$H$ negative-$S$ stays positive at every $T$.'
      },
      {
        q: '$\\Delta G = -11.42 kJ$ at $298 K$ ($2.303RT = 5.71 kJ$). What is K?',
        options: [`$10$`, `$0.01$`, `$100$`, `$2.0$`], answer: 2,
        explanation: 'Step 1: $\\log K = 11.42/5.71 = 2.00$. Step 2: Antilog $10^{2.00} = 100$. Step 3: Check $-5.71 \\times 2.00 = -11.42$. Step 4: Value $10$ corresponds to half the free-energy magnitude.'
      },
      {
        q: 'At $298 K$ with $\\Delta H = 178 kJ$ and $\\Delta S = 0.161 kJ/K$, what is $\\Delta G$?',
        options: [`$+130.0 kJ$`, `$-130.0 kJ$`, `$+178 kJ$`, `$0$`], answer: 0,
        explanation: 'Step 1: Product $298 \\times 0.161 = 47.98 kJ$. Step 2: Subtract $178 - 47.98 = 130.02 kJ$. Step 3: Positive sign means nonspontaneous at room value. Step 4: Negative sign would wrongly add the entropy term.'
      }
    ]
  }
]
