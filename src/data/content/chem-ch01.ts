import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse Physical Chemistry — Mole Concept and Stoichiometry
// Chapter 1: sections 1.1 to 1.4. Master study content.
// Math is KaTeX via the RichText pipeline. Plain subscripts and arrows only.
// ============================================================================

export const chemCh01Content: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'chem-ch1-s1',
    readingTime: 8,
    intro: 'One mole is a counting unit that links the invisible world of atoms to grams that can be weighed on a balance. This section builds the mole scale from Avogadro number through empirical and molecular formulae to balanced equations read as mole ratios. Once equations are read in moles, every later calculation in this chapter becomes routine arithmetic.',
    objectives: [
      'Convert among mass, moles, particles and gas volume using Avogadro scale relations',
      'Deduce empirical and molecular formulae from percentage composition data',
      'Read balanced equations as mole ratios and apply atom conservation'
    ],
    concepts: [
      {
        term: 'Mole and Avogadro scale',
        kind: 'definition',
        statement: 'One **mole** is exactly `6.02214076 × 10^23` entities, so amount $n = m/M$ links weighed mass to particle count by $N = n N_A$. For gases at standard temperature and pressure one mole occupies about $22.4 L$, written as $V = n \\times 22.4 L$.',
        detail: 'Molar mass $M$ is grams per mole of the stated entity: atoms, molecules, ions or formula units must be named explicitly. Classic slip is using atomic mass where molecular mass is needed, for example $O$ versus $O_2$ in $2H_2 + O_2 \\to 2H_2O$.'
      },
      {
        term: 'Empirical versus molecular formula',
        kind: 'definition',
        statement: 'The **empirical formula** is the simplest whole-number ratio while the `molecular formula` is the true atom count, related by $MF = (EF)_n$ with $n = M_{mol}/M_{emp}$. Percentage to mass to moles to ratio is the fixed route: assume $100 g$, convert to moles, divide by the smallest value.',
        detail: 'Round only at the end: apparent ratios such as $1.5$ and $1.33$ mean multiply by $2$ and $3$ respectively to clear decimals. Ratio $1.5$ gives subscripts $3$ and $2$ after doubling, while $1.33$ gives $4$ and $3$ after tripling.'
      },
      {
        term: 'Balancing and reading equations',
        kind: 'method',
        statement: 'A **balanced equation** conserves every atom, and coefficients are read as `mole ratios`, never as grams. In $N_2 + 3H_2 \\to 2NH_3$ one mole of $N_2$ needs exactly $3$ mol of $H_2$ to give $2$ mol of $NH_3$.',
        detail: 'Balance by hit and trial for simple cases, saving $H$ and $O$ for last, and treat polyatomic ions that survive intact as single units. Never change subscripts to balance: changing $H_2O$ to $H_3O$ changes the substance itself.'
      },
      {
        term: 'Stoichiometric mole map',
        kind: 'method',
        statement: 'Every conversion follows the map **moles of given to moles of wanted** using `mole ratio` from the balanced equation, expressed as $n_{wanted} = n_{given} \\times coef_{wanted}/coef_{given}$. Mass or volume enters only before and after this mole step. For $CaCO_3 \\to CaO + CO_2$ the ratio $n_{CO_2}/n_{CaCO_3} = 1/1$ sits inside $...$ as $1/1$.',
        detail: 'Grams cannot be compared across substances directly: convert each mass to moles, apply the coefficient ratio, then convert back. Volume ratios equal mole ratios only for gases at same temperature and pressure by Avogadro law.'
      },
      {
        term: 'POAC atom conservation',
        kind: 'insight',
        statement: 'The **principle of atom conservation** says moles of an element are conserved through any sequence, so `POAC` equates $n_{element}$ in reactants and products without balancing each step. If all carbon in a fuel ends as $CO_2$ then $n_C(fuel) = n_{CO_2}$ directly.',
        detail: 'POAC is fastest for combustion analysis, mixture problems and multi-step sequences where intermediate equations are messy. Write one conservation line per element: for $C_xH_y + O_2 \\to CO_2 + H_2O$ use $x = n_{CO_2}/n_{fuel}$ and $y = 2 n_{H_2O}/n_{fuel}$.'
      }
    ],
    figures: [
      {
        caption: 'One mole links mass, particles and gas volume through $n = m/M$, $N = n N_A$ and $V = n \times 22.4 L$: the map always passes through moles when changing substance.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mole map linking mass moles particles and gas volume"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">mole map: every route passes through moles</text><rect x="40" y="60" width="150" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="85" font-size="14" fill="currentColor" font-family="sans-serif">mass m</text><text x="55" y="107" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">divide by M</text><rect x="285" y="60" width="150" height="60" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="300" y="85" font-size="14" fill="currentColor" font-family="sans-serif">moles n</text><text x="300" y="107" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">central hub</text><rect x="530" y="60" width="150" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="545" y="85" font-size="14" fill="currentColor" font-family="sans-serif">particles N</text><text x="545" y="107" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">times NA</text><line x1="190" y1="90" x2="285" y2="90" stroke="currentColor" stroke-width="2"/><polygon points="285,90 277,84 277,96" fill="currentColor" stroke="none"/><line x1="435" y1="90" x2="530" y2="90" stroke="currentColor" stroke-width="2"/><polygon points="530,90 522,84 522,96" fill="currentColor" stroke="none"/><rect x="285" y="170" width="150" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="295" y="195" font-size="14" fill="currentColor" font-family="sans-serif">gas volume V</text><text x="295" y="217" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">times 22.4 L</text><line x1="360" y1="120" x2="360" y2="170" stroke="currentColor" stroke-width="2"/><polygon points="360,170 354,160 366,160" fill="currentColor" stroke="none"/><rect x="40" y="260" width="640" height="60" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="55" y="285" font-size="13" fill="currentColor" font-family="sans-serif">EF from percent: 100 g -&gt; moles -&gt; smallest ratio; MF = (EF)n</text><text x="55" y="307" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.8">POAC: n(C fuel) = n(CO2) without full balancing</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Empirical and molecular formula from analysis',
        problem: 'A compound contains carbon $40.0$ percent, hydrogen $6.7$ percent and oxygen $53.3$ percent by mass with molar mass about $180 g/mol$. Find its empirical and molecular formulae.',
        steps: [
          { label: 'Step 1', text: 'Assume $100 g$ sample, so masses are $40.0 g$ of $C$, $6.7 g$ of $H$ and $53.3 g$ of $O$. Convert to moles: $n_C = 40.0/12.0 = 3.33$, $n_H = 6.7/1.0 = 6.7$, $n_O = 53.3/16.0 = 3.33$.' },
          { label: 'Step 2', text: 'Divide by the smallest value $3.33$ to get ratio $C:H:O = 1:2:1$, so empirical formula is $CH_2O$ with $M_{emp} = 30 g/mol$. Record the route:\n```txt\nC: 40.0/12.0 = 3.33 -> 3.33/3.33 = 1\nH: 6.7/1.0 = 6.7 -> 6.7/3.33 = 2\nO: 53.3/16.0 = 3.33 -> 3.33/3.33 = 1\nn = 180/30 = 6, so MF = C6H12O6\n```' },
          { label: 'Step 3', text: 'Compute $n = 180/30 = 6$ inside $...$ as $180/30$, giving molecular formula $C_6H_{12}O_6$. Check: molar mass $6 \\times 12 + 12 \\times 1 + 6 \\times 16 = 180$, matching the given value.' }
        ],
        result: 'Empirical formula is CH2O and molecular formula is C6H12O6, with n = 6.'
      },
      {
        title: 'Mole-ratio use of a balanced equation',
        problem: 'How many grams of water form when $8.0 g$ of hydrogen burns in excess oxygen by $2H_2 + O_2 \\to 2H_2O$?',
        steps: [
          { label: 'Step 1', text: 'Convert given mass to moles: $M_{H_2} = 2.0 g/mol$, so $n_{H_2} = 8.0/2.0 = 4.0$. The balanced equation gives ratio $n_{H_2O}/n_{H_2} = 2/2$ which equals $1/1$.' },
          { label: 'Step 2', text: 'Apply the mole ratio:\n```txt\nn(H2) = 8.0 / 2.0 = 4.0 mol\nn(H2O) = 4.0 x (2/2) = 4.0 mol\nm(H2O) = 4.0 x 18.0 = 72.0 g\n```' },
          { label: 'Step 3', text: 'Convert wanted moles back to mass with $M_{H_2O} = 18.0 g/mol$: $m = 4.0 \\times 18.0 = 72.0 g$. Oxygen is stated excess, so hydrogen limits and no limiting comparison is needed here.' }
        ],
        result: 'Water formed is 72.0 g from 4.0 mol of H2 and 4.0 mol of H2O.'
      }
    ],
    keyTakeaways: [
      'Moles link mass, particles and gas volume: n = m/M, N = nNA and V = n × 22.4 L at standard conditions.',
      'Empirical formula is simplest ratio and molecular formula is (EF)n with n = Mmol/Memp.',
      'Coefficients are mole ratios, so convert mass to moles before comparing substances.',
      'POAC conserves moles of each element and bypasses full balancing in analysis problems.'
    ],
    quiz: [
      // PYQ-pattern: percentage composition to molecular formula
      {
        q: 'A compound is $40.0$ percent C, $6.7$ percent H and $53.3$ percent O with molar mass near $180 g/mol$. What is its molecular formula?',
        options: [`$CH_2O$`, `$C_2H_4O_2$`, `$C_6H_{12}O_6$`, `$C_{12}H_{22}O_{11}$`], answer: 2,
        explanation: 'Step 1: Assume $100 g$ giving $40.0 g$ C, $6.7 g$ H and $53.3 g$ O. Step 2: Moles are $40.0/12.0 = 3.33$, $6.7/1.0 = 6.7$ and $53.3/16.0 = 3.33$, ratio $1:2:1$ so EF is $CH_2O$ with mass $30$. Step 3: Compute $n = 180/30 = 6$, so MF is $C_6H_{12}O_6$. Step 4: The other options have masses $30$, $60$ and $342$, none matching $180$.'
      },
      {
        q: 'For $N_2 + 3H_2 \\to 2NH_3$, $10.0 mol$ of $H_2$ reacts with enough $N_2$. How many moles of $NH_3$ form?',
        options: [`$6.7 mol$`, `$20.0 mol$`, `$10.0 mol$`, `$3.3 mol$`], answer: 0,
        explanation: 'Step 1: Write the ratio $n_{NH_3}/n_{H_2} = 2/3$. Step 2: Multiply $10.0 \\times 2/3 = 20.0/3 = 6.67$. Step 3: Check units: moles to moles needs no molar mass step. Step 4: Option $20.0$ ignores the coefficient $3$ and $10.0$ copies the given amount.'
      },
      {
        q: 'What does POAC state for element carbon burning fully to $CO_2$?',
        options: ['Mass of carbon equals mass of $CO_2$', 'Moles of $O_2$ equal moles of $CO_2$', 'Volume of fuel equals volume of $CO_2$', 'Moles of carbon atoms in fuel equal moles of $CO_2$ formed'], answer: 3,
        explanation: 'Step 1: POAC conserves atoms, not molecules or mass across different substances. Step 2: Each $CO_2$ carries one C, so $n_C = n_{CO_2}$ exactly. Step 3: Example: $0.50 mol$ fuel giving $1.00 mol$ $CO_2$ means $x = 1.00/0.50 = 2$. Step 4: Mass and volume equalities fail because molar masses and states differ.'
      },
      {
        q: '$4.4 g$ of $CO_2$ contains how many oxygen atoms? ($M = 44 g/mol$)',
        options: [`$3.01 \\times 10^{22}$`, `$1.20 \\times 10^{23}$`, `$6.02 \\times 10^{22}$`, `$6.02 \\times 10^{23}$`], answer: 1,
        explanation: 'Step 1: Moles $n = 4.4/44 = 0.10$. Step 2: Molecules $N = 0.10 \\times 6.022 \\times 10^{23} = 6.022 \\times 10^{22}$. Step 3: Each $CO_2$ has $2$ O atoms, so O atoms $= 2 \\times 6.022 \\times 10^{22} = 1.204 \\times 10^{23}$. Step 4: The first option counts molecules halved and the second counts molecules only.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.2
  {
    sectionId: 'chem-ch1-s2',
    readingTime: 7,
    intro: 'Most reactions are run with one reactant in short supply, and that reactant decides how much product can appear. This section shows how to spot the limiting reactant by comparing mole ratios, then converts that decision into theoretical and percentage yield. Excess and impurity arithmetic are included because they ride on the same comparison.',
    objectives: [
      'Identify the limiting reactant from given amounts and the balanced equation',
      'Compute theoretical yield and percentage yield from actual product mass',
      'Handle excess reactant remainder and impure sample adjustments'
    ],
    concepts: [
      {
        term: 'Limiting reactant test',
        kind: 'method',
        statement: 'The **limiting reactant** is found by computing `moles divided by coefficient` for each reactant, as $n_i/coef_i$, and taking the smallest value. That reactant is consumed first and caps the product.',
        detail: 'Example $N_2 + 3H_2 \\to 2NH_3$: with $2$ mol $N_2$ giving $2/1 = 2$ and $3$ mol $H_2$ giving $3/3 = 1$, hydrogen limits. Comparing grams directly without dividing by coefficients always misleads.'
      },
      {
        term: 'Theoretical yield',
        kind: 'definition',
        statement: 'The **theoretical yield** is the maximum product from the `limiting reactant` via $n_{product} = n_{lim} \\times coef_{product}/coef_{lim}$. It assumes full conversion with no side paths and no losses.',
        detail: 'Convert the limiting amount to moles, apply the coefficient ratio, then convert to grams or volume. All other reactants are treated as enough, even when their amounts are stated.'
      },
      {
        term: 'Percentage yield and losses',
        kind: 'definition',
        statement: 'The **percentage yield** is `actual over theoretical` times one hundred, $yield = m_{actual}/m_{theo} \\times 100$. Values below $100$ percent reflect incomplete reaction, side products and handling losses.',
        detail: 'Yield above $100$ percent signals wet or impure product or a wrong limiting assignment, never super-efficient chemistry. Keep actual and theoretical in the same units before dividing.'
      },
      {
        term: 'Excess remainder',
        kind: 'method',
        statement: 'Reactant left after reaction is **excess remainder**, found by `consumed versus initial` subtraction as $n_{left} = n_{initial} - n_{consumed}$. Consumed excess follows the limiting reactant through the mole ratio.',
        detail: 'For $2H_2 + O_2 \\to 2H_2O$ with $5$ mol $H_2$ and $2$ mol $O_2$, oxygen limits, consuming $4$ mol $H_2$ and leaving $1$ mol $H_2$. The leftover never contributes to product.'
      },
      {
        term: 'Purity and impurity correction',
        kind: 'insight',
        statement: 'An **impure sample** contributes only its `pure fraction`, so effective mass is $m_{pure} = purity \\times m_{sample}$. A $90$ percent pure $100 g$ limestone gives $90 g$ of $CaCO_3$ for the mole step.',
        detail: 'If product mass includes impurity, subtract it before yield division. Trap: purity applies to the weighed reactant, not to the product, unless stated otherwise.'
      }
    ],
    figures: [
      {
        caption: 'The limiter is the smallest $n_i/coef_i$: for $N_2 + 3H_2 \to 2NH_3$ the values $1.0$ and $1.33$ leave $N_2$ limiting with $34.0 g$ $NH_3$ in theory.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Limiting reactant bars for nitrogen versus hydrogen"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">limiting test: moles divided by coefficient</text><text x="40" y="80" font-size="14" fill="currentColor" font-family="sans-serif">N2: 1.0 mol / 1 = 1.00</text><rect x="260" y="60" width="200" height="24" fill="currentColor" stroke="none" opacity="0.3"/><rect x="260" y="60" width="200" height="24" fill="none" stroke="currentColor" stroke-width="2"/><text x="470" y="78" font-size="13" fill="currentColor" font-family="sans-serif">limiter</text><line x1="260" y1="60" x2="260" y2="84" stroke="currentColor" stroke-width="2"/><text x="40" y="130" font-size="14" fill="currentColor" font-family="sans-serif">H2: 4.0 mol / 3 = 1.33</text><rect x="260" y="110" width="266" height="24" fill="none" stroke="currentColor" stroke-width="2"/><rect x="260" y="110" width="266" height="24" fill="currentColor" stroke="none" opacity="0.12"/><text x="535" y="128" font-size="13" fill="currentColor" font-family="sans-serif">excess</text><line x1="40" y1="170" x2="680" y2="170" stroke="currentColor" stroke-width="1" opacity="0.4"/><text x="40" y="200" font-size="13" fill="currentColor" font-family="sans-serif">theory from limiter only: n(NH3) = 1.0 x 2/1 = 2.0 mol -&gt; 34.0 g</text><line x1="40" y1="230" x2="400" y2="230" stroke="currentColor" stroke-width="2"/><polygon points="400,230 392,224 392,236" fill="currentColor" stroke="none"/><text x="410" y="235" font-size="13" fill="currentColor" font-family="sans-serif">product capped</text><text x="40" y="270" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">left H2 = 4.0 - 3.0 = 1.0 mol; purity first: m(pure) = purity x sample</text><text x="40" y="300" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">yield = actual / theory x 100, never above 100 for dry pure product</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Finding the limiter and the product mass',
        problem: 'Mix $28.0 g$ of nitrogen with $8.0 g$ of hydrogen for $N_2 + 3H_2 \\to 2NH_3$. Which reactant limits and what mass of ammonia forms in theory?',
        steps: [
          { label: 'Step 1', text: 'Convert to moles: $n_{N_2} = 28.0/28.0 = 1.0$ and $n_{H_2} = 8.0/2.0 = 4.0$. Divide by coefficients: $1.0/1 = 1.0$ for $N_2$ and $4.0/3 = 1.33$ for $H_2$.' },
          { label: 'Step 2', text: 'Compare and compute product:\n```txt\nN2: 1.0/1 = 1.0 ; H2: 4.0/3 = 1.33\nlimiter = N2 (smaller value)\nn(NH3) = 1.0 x (2/1) = 2.0 mol\nm(NH3) = 2.0 x 17.0 = 34.0 g\n```' },
          { label: 'Step 3', text: 'Nitrogen limits since $1.0$ is less than $1.33$, so $n_{NH_3} = 1.0 \\times 2/1 = 2.0$ and $m = 2.0 \\times 17.0 = 34.0 g$. Hydrogen left = $4.0 - 3.0 = 1.0 mol$ excess.' }
        ],
        result: 'Nitrogen limits and theoretical ammonia is 34.0 g, with 1.0 mol of hydrogen left over.'
      },
      {
        title: 'Percentage yield with an impure ore',
        problem: '$50.0 g$ of $80$ percent pure $CaCO_3$ is heated by $CaCO_3 \\to CaO + CO_2$ and gives $16.0 g$ of $CaO$. Find the percentage yield.',
        steps: [
          { label: 'Step 1', text: 'Pure mass $m = 0.80 \\times 50.0 = 40.0 g$. Moles $n = 40.0/100.0 = 0.40$ of $CaCO_3$, so theory gives $0.40 mol$ of $CaO$ by ratio $1/1$.' },
          { label: 'Step 2', text: 'Convert theory to grams and compare:\n```txt\npure CaCO3 = 0.80 x 50.0 = 40.0 g\nn = 40.0/100.0 = 0.40 mol\ntheory CaO = 0.40 x 56.0 = 22.4 g\nyield = 16.0/22.4 x 100 = 71.4 percent\n```' },
          { label: 'Step 3', text: 'Theory is $0.40 \\times 56.0 = 22.4 g$ and actual is $16.0 g$, so $yield = 16.0/22.4 \\times 100 = 71.4$ percent. Forgetting purity would give $28.0 g$ theory and a falsely low $57.1$ percent.' }
        ],
        result: 'Theoretical CaO is 22.4 g and percentage yield is 71.4 percent.'
      }
    ],
    keyTakeaways: [
      'Divide moles by coefficients and take the smallest n/coef as the limiter.',
      'Theoretical yield flows only from the limiting reactant through the mole ratio.',
      'Percentage yield is actual over theoretical times 100 and never exceeds 100 for pure dry product.',
      'Multiply sample mass by purity before the mole step and track excess by subtraction.'
    ],
    quiz: [
      // PYQ-pattern: limiting-reagent decision plus theoretical mass
      {
        q: '$28.0 g$ $N_2$ ($28.0 g/mol$) and $8.0 g$ $H_2$ ($2.0 g/mol$) react by $N_2 + 3H_2 \\to 2NH_3$. Which limits and how much $NH_3$ forms in theory?',
        options: [`$H_2$ limits, $45.3 g$`, `$N_2$ limits, $34.0 g$`, `$N_2$ limits, $17.0 g$`, 'Neither limits, $42.0 g$'], answer: 1,
        explanation: 'Step 1: Moles are $28.0/28.0 = 1.0$ and $8.0/2.0 = 4.0$. Step 2: Compare $1.0/1 = 1.0$ versus $4.0/3 = 1.33$, so $N_2$ limits. Step 3: Product $n = 1.0 \\times 2/1 = 2.0 mol$, mass $2.0 \\times 17.0 = 34.0 g$. Step 4: Hydrogen-limit assignment reverses the comparison and gives the wrong $45.3 g$.'
      },
      {
        q: 'Theory predicts $22.4 g$ and $16.0 g$ is isolated. What is the percentage yield?',
        options: ['$140.0$ percent', '$28.6$ percent', '$40.0$ percent', '$71.4$ percent'], answer: 3,
        explanation: 'Step 1: Yield $= 16.0/22.4 \\times 100$. Step 2: Division $16.0/22.4 = 0.714$. Step 3: Multiply by $100$ to get $71.4$ percent. Step 4: The $140.0$ percent option inverts the fraction and is physically impossible for dry pure product.'
      },
      {
        q: '$5.0 mol$ $H_2$ and $2.0 mol$ $O_2$ react by $2H_2 + O_2 \\to 2H_2O$. How much $H_2$ remains?',
        options: [`$1.0 mol$`, `$3.0 mol$`, `$0.0 mol$`, `$2.0 mol$`], answer: 0,
        explanation: 'Step 1: Compare $5.0/2 = 2.5$ versus $2.0/1 = 2.0$, so $O_2$ limits. Step 2: Consumed $H_2 = 2.0 \\times 2/1 = 4.0 mol$. Step 3: Remainder $= 5.0 - 4.0 = 1.0 mol$. Step 4: Zero remainder would need $4.0 mol$ $H_2$ exactly, but $5.0 mol$ was loaded.'
      },
      {
        q: 'A $50.0 g$ sample is $80$ percent pure $CaCO_3$. What pure mass enters the mole step?',
        options: [`$50.0 g$`, `$62.5 g$`, `$40.0 g$`, `$10.0 g$`], answer: 2,
        explanation: 'Step 1: Pure mass $= 0.80 \\times 50.0$. Step 2: Product $= 40.0 g$. Step 3: Moles then are $40.0/100.0 = 0.40$. Step 4: Using $50.0 g$ skips purity and $10.0 g$ uses impurity fraction instead of pure fraction.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.3
  {
    sectionId: 'chem-ch1-s3',
    readingTime: 9,
    intro: 'Solution calculations hinge on expressing concentration in the unit that matches the task at hand. This section defines molarity, molality, mole fraction and related scales and shows how density converts among them. Temperature dependence and the mole-fraction sum rule are stressed because they drive many quick decisions.',
    objectives: [
      'Apply molarity, molality, mole fraction and mass percent in numerical problems',
      'Interconvert concentration scales using density and molar mass',
      'Choose the temperature-independent scale when heating or dilution is involved'
    ],
    concepts: [
      {
        term: 'Molarity',
        kind: 'definition',
        statement: 'The **molarity** is moles of solute per litre of `solution`, $M = n/V_L$. It fixes reaction volumes through $M_1V_1 = M_2V_2$ on dilution because moles are conserved.',
        detail: 'Molarity changes with temperature since solution volume expands, so it is ideal for volumetric work at one temperature but not for heating studies. Trap: volume in the formula is solution volume, not solvent volume.'
      },
      {
        term: 'Molality and mole fraction',
        kind: 'definition',
        statement: 'The **molality** is moles per kilogram of `solvent`, $m = n/W_{kg}$, while mole fraction is $x_i = n_i/n_{total}$ with $x_{solute} + x_{solvent} = 1$. Both are `temperature independent` because no volume appears.',
        detail: 'Molality drives colligative-property work and mole fraction drives vapour-pressure and gas-mixture work. For dilute aqueous work molality and molarity are numerically close since $1 L$ of water is about $1 kg$.'
      },
      {
        term: 'Mass percent, ppm and density bridge',
        kind: 'notation',
        statement: 'The **mass percent** is `grams of solute per 100 g of solution`, $w = m_{solute}/m_{soln} \\times 100$, and ppm is $m_{solute}/m_{soln} \\times 10^6$. Density $d$ in $g/mL$ bridges to molarity by $M = w \\times d \\times 10/M_{solute}$.',
        detail: 'Example: $10$ percent $NaOH$ with $d = 1.11 g/mL$ gives $M = 10 \\times 1.11 \\times 10/40 = 2.775$. Factor $10$ converts $mL$ to $L$ for $100 g$ of solution. ppm is reserved for trace levels such as dissolved minerals.'
      },
      {
        term: 'Normality and n-factor',
        kind: 'definition',
        statement: 'The **normality** is equivalents per litre, `N = M \\times n_{factor}`, where $n_{factor}$ is $H^+$ count for acids, $OH^-$ count for bases and electron count for redox agents. Equivalent mass is $E = M/n_{factor}$.',
        detail: 'For $H_2SO_4$ the factor is $2$, so $1.0 M$ is $2.0 N$, while for $KMnO_4$ in acid the factor is $5$. Normality simplifies titration to $N_1V_1 = N_2V_2$ but the factor must match the stated reaction.'
      },
      {
        term: 'Dilution and mixing conservation',
        kind: 'method',
        statement: 'On **dilution** moles stay fixed so `M V` is conserved, $M_{conc}V_{conc} = M_{dil}V_{dil}$. On mixing, total moles add: $M_{mix} = (M_1V_1 + M_2V_2)/(V_1 + V_2)$ for volumes in the same unit.',
        detail: 'Add volumes only for dilute aqueous mixing where contraction is ignored; otherwise use masses. Classic slip is adding molarities directly without weighting by their volumes.'
      }
    ],
    figures: [
      {
        caption: 'Molarity uses litres of solution as $M = n/V_L$ while molality uses kilograms of solvent as $m = n/W_{kg}$: density bridges mass percent to molarity by $M = w d \times 10/M$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Molarity and molality beakers with mixing"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">Molarity vs molality vs mole fraction</text><path d="M60,90 L60,240 L160,240 L160,90" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="60" y="150" width="100" height="90" fill="currentColor" stroke="none" opacity="0.15"/><line x1="60" y1="150" x2="160" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><text x="55" y="265" font-size="12" fill="currentColor" font-family="sans-serif">M: per L solution</text><text x="55" y="285" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">varies with T</text><path d="M280,90 L280,240 L380,240 L380,90" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="280" y="170" width="100" height="70" fill="currentColor" stroke="none" opacity="0.15"/><text x="272" y="265" font-size="12" fill="currentColor" font-family="sans-serif">m: per kg solvent</text><text x="272" y="285" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">T independent</text><line x1="380" y1="160" x2="470" y2="160" stroke="currentColor" stroke-width="2"/><polygon points="470,160 462,154 462,166" fill="currentColor" stroke="none"/><text x="385" y="145" font-size="12" fill="currentColor" font-family="sans-serif">mix adds moles</text><path d="M490,90 L490,240 L590,240 L590,90" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="490" y="140" width="100" height="100" fill="currentColor" stroke="none" opacity="0.2"/><text x="485" y="265" font-size="12" fill="currentColor" font-family="sans-serif">Mmix weighted</text><text x="485" y="285" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">by volumes</text><text x="40" y="320" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">x(solute) + x(solvent) = 1; N1V1 = N2V2 only with matched n-factor</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Density to molarity conversion',
        problem: 'Concentrated hydrochloric acid is $37.0$ percent by mass with density $1.19 g/mL$ and $M_{HCl} = 36.5 g/mol$. Find its molarity.',
        steps: [
          { label: 'Step 1', text: 'Take $100 g$ of solution: solute mass $37.0 g$, so $n = 37.0/36.5 = 1.014$. Solution volume $V = 100/1.19 = 84.03 mL$ which is $0.08403 L$.' },
          { label: 'Step 2', text: 'Apply the bridge formula:\n```txt\nM = w x d x 10 / Msolute\nM = 37.0 x 1.19 x 10 / 36.5\nM = 440.3 / 36.5 = 12.06 mol/L\n```' },
          { label: 'Step 3', text: 'Hence $M = 37.0 \\times 1.19 \\times 10/36.5 = 12.1$. Check: concentrated acid near $12 M$ is the known laboratory value, confirming the arithmetic.' }
        ],
        result: 'Molarity is about 12.1 M, the standard concentrated value.'
      },
      {
        title: 'Mixing two molarities',
        problem: '$200 mL$ of $2.0 M$ $NaOH$ is mixed with $300 mL$ of $1.0 M$ $NaOH$. Find the final molarity ignoring volume change.',
        steps: [
          { label: 'Step 1', text: 'Moles add: $n_1 = 2.0 \\times 0.200 = 0.40$ and $n_2 = 1.0 \\times 0.300 = 0.30$. Total moles $0.70$ in total volume $0.500 L$.' },
          { label: 'Step 2', text: 'Weighted average:\n```txt\nn1 = 2.0 x 0.200 = 0.40 mol\nn2 = 1.0 x 0.300 = 0.30 mol\nMmix = (0.40 + 0.30) / 0.500 = 1.40 M\n```' },
          { label: 'Step 3', text: 'So $M_{mix} = 0.70/0.500 = 1.40$. The result lies between $1.0$ and $2.0$ and nearer $1.0$ since its volume is larger, as expected.' }
        ],
        result: 'Final molarity is 1.40 M in 0.500 L of mixture.'
      }
    ],
    keyTakeaways: [
      'Molarity uses litres of solution while molality uses kilograms of solvent.',
      'Mole fractions sum to one and suit vapour and gas-mixture work.',
      'Density bridges mass percent to molarity by M = w × d × 10/Msolute.',
      'Dilution keeps MV fixed and mixing adds moles before dividing by total volume.'
    ],
    quiz: [
      // PYQ-pattern: mass percent plus density to molarity
      {
        q: '$10$ percent $NaOH$ by mass has density $1.11 g/mL$ ($M = 40 g/mol$). What is its molarity?',
        options: [`$2.78 M$`, `$1.11 M$`, `$4.44 M$`, `$0.28 M$`], answer: 0,
        explanation: 'Step 1: Use $M = 10 \\times 1.11 \\times 10/40$. Step 2: Numerator $10 \\times 1.11 \\times 10 = 111.0$. Step 3: Divide $111.0/40 = 2.775$, about $2.78 M$. Step 4: Omitting factor $10$ gives $0.28 M$, a tenfold slip.'
      },
      {
        q: 'Which scale is independent of temperature?',
        options: ['Molarity', 'Normality using litres of solution', 'Molality and mole fraction', 'Volume percent'], answer: 2,
        explanation: 'Step 1: Temperature changes volume but not mass or mole counts. Step 2: Molality uses $kg$ solvent and mole fraction uses mole counts only. Step 3: Molarity, normality and volume percent all contain volume and shift on heating. Step 4: Hence only molality and mole fraction qualify.'
      },
      {
        q: '$200 mL$ of $2.0 M$ plus $300 mL$ of $1.0 M$ $NaOH$ are mixed. What is $M_{mix}$?',
        options: [`$1.50 M$`, `$1.40 M$`, `$3.00 M$`, `$1.00 M$`], answer: 1,
        explanation: 'Step 1: Moles $2.0 \\times 0.200 = 0.40$ and $1.0 \\times 0.300 = 0.30$. Step 2: Total $0.70 mol$ in $0.500 L$. Step 3: Ratio $0.70/0.500 = 1.40 M$. Step 4: Simple average $1.50 M$ ignores the unequal volumes.'
      },
      {
        q: '$1.0 M$ $H_2SO_4$ for full neutralization has what normality?',
        options: [`$0.50 N$`, `$1.0 N$`, `$3.0 N$`, `$2.0 N$`], answer: 3,
        explanation: 'Step 1: Normality $N = M \\times n_{factor}$. Step 2: For $H_2SO_4$ giving $2$ protons, $n_{factor} = 2$. Step 3: So $N = 1.0 \\times 2 = 2.0$. Step 4: $1.0 N$ forgets the second proton and $0.50 N$ divides instead of multiplying.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.4
  {
    sectionId: 'chem-ch1-s4',
    readingTime: 9,
    intro: 'Titration turns a measured volume of known strength into the strength of the unknown through equivalent arithmetic. This section covers acid-base volume relations, back titration and redox equivalents including iodometry. Indicator choice and n-factor discipline decide whether the endpoint matches the equivalence point.',
    objectives: [
      'Solve acid-base titrations with normality and mole-ratio methods',
      'Apply back-titration logic when the analyte reacts slowly or is impure',
      'Assign redox n-factors and equivalent masses in iodometric steps'
    ],
    concepts: [
      {
        term: 'Equivalence and normality equation',
        kind: 'law',
        statement: 'At the **equivalence point** equivalents match, so `N1 V1 = N2 V2` with volumes in the same unit. One equivalent is $n_{eq} = N \\times V_L$ and also $n_{eq} = m/E$.',
        detail: 'Normality already embeds the reaction stoichiometry, so no extra balancing is needed once n-factors are right. Molar form $M_1V_1/n_2 = M_2V_2/n_1$ is equivalent but slower; pick one route and stay with it.'
      },
      {
        term: 'Acid-base n-factors and polyprotic steps',
        kind: 'definition',
        statement: 'An acid n-factor is its **replaceable hydrogen count** and a base factor is its `hydroxide count`, so $E = M/n_{factor}$. For $H_3PO_4$ the factor is $3$ to full salt but $1$ or $2$ to intermediate salts with matching indicator.',
        detail: 'Phenolphthalein marks the second step of carbonate work while methyl orange marks full neutralization, changing the effective factor. Trap: using full $n_{factor}$ when the observed endpoint stops at bicarbonate halves the answer.'
      },
      {
        term: 'Back titration',
        kind: 'method',
        statement: 'In **back titration** a known excess of `reagent A` reacts with the analyte and the leftover is titrated with `reagent B`, giving $n_{analyte} = n_{A,total} - n_{B,used}$ in equivalents. It suits slow, volatile or insoluble analytes.',
        detail: 'Example: antacid tablet with excess $HCl$, back-titrate residual acid with $NaOH$. All quantities must be in equivalents or moles of the same reaction before subtraction.'
      },
      {
        term: 'Redox equivalents',
        kind: 'definition',
        statement: 'A redox n-factor is the **electron count** per formula, so `equivalent mass` is $E = M/n_e$. For $KMnO_4$ in acid $Mn^{7+} \\to Mn^{2+}$ gives $n_e = 5$, while in neutral medium to $MnO_2$ it is $3$.',
        detail: 'Dichromate $Cr_2O_7^{2-} \\to 2Cr^{3+}$ carries $n_e = 6$ per dichromate. The same bottle has different normality in different media, so the medium must be read before the factor.'
      },
      {
        term: 'Iodometry basics',
        kind: 'method',
        statement: 'In **iodometry** the analyte liberates `iodine` from excess iodide, as in $2Cu^{2+} + 4I^- \\to 2CuI + I_2$, and liberated $I_2$ is titrated with thiosulphate by $I_2 + 2S_2O_3^{2-} \\to 2I^- + S_4O_6^{2-}$. Starch added near the end sharpens the blue endpoint.',
        detail: 'One mole of $I_2$ needs $2$ mol thiosulphate, so $n_{thio} = 2 n_{I_2}$. Trap: starch added at the start adsorbs iodine and dulls the endpoint; add it only when the solution turns pale straw.'
      }
    ],
    figures: [
      {
        caption: 'At equivalence equivalents match as $N_1V_1 = N_2V_2$: burette base neutralises flask acid with $n_{eq} = N \times V_L$ on each side.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Titration burette dripping into conical flask"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">acid-base titration: burette into conical flask</text><rect x="140" y="60" width="40" height="150" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="140" y1="90" x2="180" y2="90" stroke="currentColor" stroke-width="1"/><line x1="140" y1="120" x2="180" y2="120" stroke="currentColor" stroke-width="1"/><line x1="140" y1="150" x2="180" y2="150" stroke="currentColor" stroke-width="1"/><text x="190" y="100" font-size="13" fill="currentColor" font-family="sans-serif">burette NaOH</text><text x="190" y="155" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">0.120 M</text><rect x="152" y="210" width="16" height="18" fill="none" stroke="currentColor" stroke-width="2"/><line x1="160" y1="228" x2="160" y2="250" stroke="currentColor" stroke-width="2"/><circle cx="160" cy="258" r="4" fill="currentColor" stroke="none"/><path d="M100,260 L220,260 L200,320 L120,320 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M115,295 L205,295 L200,320 L120,320 Z" fill="currentColor" stroke="none" opacity="0.2"/><text x="230" y="295" font-size="13" fill="currentColor" font-family="sans-serif">flask H2SO4 25.0 mL</text><text x="230" y="315" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">41.7 mL to pink end</text><rect x="400" y="70" width="280" height="160" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="415" y="95" font-size="13" fill="currentColor" font-family="sans-serif">equivalence: N1V1 = N2V2</text><text x="415" y="120" font-size="12" fill="currentColor" font-family="sans-serif">acid N = 0.100 x 2 = 0.200 N</text><text x="415" y="142" font-size="12" fill="currentColor" font-family="sans-serif">eq = 0.200 x 0.0250 = 0.00500</text><text x="415" y="164" font-size="12" fill="currentColor" font-family="sans-serif">V = 0.00500 / 0.120 = 41.7 mL</text><text x="415" y="190" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">back: total minus leftover</text><text x="415" y="212" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">starch near end for iodine</text><text x="40" y="345" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">indicator marks the observed endpoint, n-factor sets the true equivalence</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Acid-base volume by equivalents',
        problem: '$25.0 mL$ of $0.100 M$ $H_2SO_4$ is titrated with $0.120 M$ $NaOH$. What volume of base reaches equivalence?',
        steps: [
          { label: 'Step 1', text: 'Acid factor $2$ gives $N_{acid} = 0.100 \\times 2 = 0.200$. Equivalents of acid $= 0.200 \\times 0.0250 = 0.00500$. Base factor $1$ gives $N_{base} = 0.120$.' },
          { label: 'Step 2', text: 'Solve for base volume:\n```txt\nN(acid) = 0.100 x 2 = 0.200 N\neq = 0.200 x 0.0250 = 0.00500\nV(base) = 0.00500 / 0.120 = 0.04167 L = 41.7 mL\n```' },
          { label: 'Step 3', text: 'Thus $V = 0.00500/0.120 = 0.04167 L$ which is $41.7 mL$. Mole check: $n_{H^+} = 2 \\times 0.00250 = 0.00500$ needs $0.00500 mol$ $OH^-$, giving $0.00500/0.120 = 0.04167 L$.' }
        ],
        result: 'Base volume at equivalence is 41.7 mL.'
      },
      {
        title: 'Iodometric copper estimation',
        problem: 'Copper from a $2.00 g$ alloy liberates iodine that needs $20.0 mL$ of $0.100 M$ thiosulphate. Find mass percent of copper ($M_{Cu} = 63.5 g/mol$).',
        steps: [
          { label: 'Step 1', text: 'Thiosulphate moles $n = 0.100 \\times 0.0200 = 0.00200$. From $I_2 + 2S_2O_3^{2-} \\to 2I^- + S_4O_6^{2-}$ we get $n_{I_2} = 0.00200/2 = 0.00100$.' },
          { label: 'Step 2', text: 'Link to copper and percent:\n```txt\nn(thio) = 0.100 x 0.0200 = 0.00200 mol\nn(I2) = 0.00200/2 = 0.00100 mol\nn(Cu) = 2 x 0.00100 = 0.00200 mol\nm(Cu) = 0.00200 x 63.5 = 0.127 g -> 6.35 percent\n```' },
          { label: 'Step 3', text: 'From $2Cu^{2+} + 4I^- \\to 2CuI + I_2$ we have $n_{Cu} = 2 n_{I_2} = 0.00200$, mass $0.00200 \\times 63.5 = 0.127 g$. Percent $= 0.127/2.00 \\times 100 = 6.35$ percent.' }
        ],
        result: 'Copper mass is 0.127 g, so the alloy is 6.35 percent copper.'
      }
    ],
    keyTakeaways: [
      'Equivalence means equal equivalents, so N1V1 = N2V2 with matched volumes.',
      'Acid and base n-factors follow replaceable H and OH counts to the observed endpoint.',
      'Back titration subtracts leftover equivalents from total added equivalents.',
      'Redox and iodometric factors count electrons, with starch added near the endpoint.'
    ],
    quiz: [
      // PYQ-pattern: normality volume for diprotic acid versus base
      {
        q: '$25.0 mL$ of $0.100 M$ $H_2SO_4$ is titrated with $0.120 M$ $NaOH$. What base volume gives equivalence?',
        options: [`$20.8 mL$`, `$50.0 mL$`, `$25.0 mL$`, `$41.7 mL$`], answer: 3,
        explanation: 'Step 1: Acid normality $= 0.100 \\times 2 = 0.200 N$. Step 2: Equivalents $= 0.200 \\times 0.0250 = 0.00500$. Step 3: Volume $= 0.00500/0.120 = 0.04167 L = 41.7 mL$. Step 4: Half value $20.8 mL$ treats sulphuric acid as monobasic.'
      },
      {
        q: 'Excess $HCl$ of $0.0500$ equivalents reacts with an antacid, and $0.0200$ equivalents of acid remain for back titration. How many equivalents did the tablet neutralize?',
        options: [`$0.0700$`, `$0.0300$`, `$0.0200$`, `$0.0500$`], answer: 1,
        explanation: 'Step 1: Total acid $= 0.0500$ equivalents. Step 2: Leftover $= 0.0200$ equivalents. Step 3: Consumed $= 0.0500 - 0.0200 = 0.0300$. Step 4: Adding instead gives $0.0700$, which double counts the leftover.'
      },
      {
        q: 'What is the n-factor of $KMnO_4$ in acidic medium ($Mn^{7+}$ to $Mn^{2+}$)?',
        options: [`$1$`, `$3$`, `$5$`, `$7$`], answer: 2,
        explanation: 'Step 1: Oxidation number drops from $+7$ to $+2$. Step 2: Change $= 7 - 2 = 5$ electrons per Mn. Step 3: So $n_{factor} = 5$ and $E = M/5$. Step 4: Value $3$ belongs to neutral medium forming $MnO_2$.'
      },
      {
        q: 'Liberated $I_2$ needs $20.0 mL$ of $0.100 M$ thiosulphate. How many moles of $I_2$ were present?',
        options: [`$0.00100 mol$`, `$0.00200 mol$`, `$0.00400 mol$`, `$0.00050 mol$`], answer: 0,
        explanation: 'Step 1: Thio moles $= 0.100 \\times 0.0200 = 0.00200$. Step 2: Equation needs $2$ thio per $I_2$. Step 3: So $n_{I_2} = 0.00200/2 = 0.00100$. Step 4: Option $0.00200$ forgets the $1/2$ factor.'
      }
    ]
  }
]
