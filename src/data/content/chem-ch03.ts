import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse Physical Chemistry — Gaseous State and Kinetic Theory
// Chapter 3: sections 3.1 to 3.4. Master study content.
// Math is KaTeX via the RichText pipeline. Plain subscripts and arrows only.
// ============================================================================

export const chemCh03Content: SectionContent[] = [
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: 'chem-ch3-s1',
    readingTime: 8,
    intro: 'Gas behaviour collapses into a few proportionalities that combine into one ideal equation. This section states Boyle, Charles and Avogadro relations and merges them into PV = nRT with Dalton partial pressures. Unit discipline for pressure, volume and temperature is emphasized because it fixes most numerical slips.',
    objectives: [
      'Apply Boyle, Charles and combined laws to changing gas samples',
      'Use PV = nRT with correct units for moles, pressure and temperature',
      'Split total pressure into mole-fraction partial pressures'
    ],
    concepts: [
      {
        term: 'Boyle and Charles laws',
        kind: 'law',
        statement: 'At fixed temperature **Boyle law** gives `P V = constant` as $P_1V_1 = P_2V_2$, while at fixed pressure **Charles law** gives $V/T = constant$ as $V_1/T_1 = V_2/T_2$ with `T` in kelvin.',
        detail: 'Combined form $P_1V_1/T_1 = P_2V_2/T_2$ handles joint changes. Trap: Celsius must shift by $273.15$ before any ratio; doubling $27$ Celsius does not double volume.'
      },
      {
        term: 'Avogadro and ideal equation',
        kind: 'law',
        statement: 'Equal volumes hold equal moles at same conditions by **Avogadro law**, $V/n = constant$, merging into the `ideal equation` $PV = nRT$ with $R = 0.0821 L atm/mol K$.',
        detail: 'Common $R$ set: $8.314 J/mol K$, $62.36 L torr/mol K$ and $1.987 cal/mol K$. Pick $R$ to match pressure and volume units so no extra conversion is needed.'
      },
      {
        term: 'Dalton partial pressures',
        kind: 'law',
        statement: 'In a mixture each gas exerts its **partial pressure** $P_i = x_i P_{total}$ where `mole fraction` is $x_i = n_i/n_{total}$. Total $P_{total} = P_1 + P_2 + ...$ sums all parts.',
        detail: 'Collecting gas over water needs vapour correction: $P_{dry} = P_{total} - P_{water}$. Mole fraction also equals volume fraction and pressure fraction for ideal gases.'
      },
      {
        term: 'Density and molar mass form',
        kind: 'method',
        statement: 'Ideal gas rearranges to **density form** $d = PM/RT$ with `molar mass` $M = dRT/P$. One measurement of density at known $P$ and $T$ yields the molar mass.',
        detail: 'Example: $d = 1.43 g/L$ for $O_2$ at standard conditions returns $M$ near $32$. Denser gases sink and lighter gases rise by the same relation at shared $P$ and $T$.'
      },
      {
        term: 'Kelvin and unit traps',
        kind: 'insight',
        statement: 'All gas laws need **absolute temperature** `T in kelvin` as $T_K = T_C + 273.15$. Pressure and volume need only share a consistent scale on both sides for ratio laws.',
        detail: 'For $PV = nRT$ units must match $R$: litres with $atm$, pascals with cubic metres, $torr$ with $62.36$ constant. Manometer readings add or subtract $h\\rho g$ per fluid column side.'
      }
    ],
    figures: [
      {
        caption: 'Boyle gives $P_1V_1 = P_2V_2$ and Charles gives $V_1/T_1 = V_2/T_2$ in kelvin: Dalton adds $P_i = x_i P_{total}$ with $P_{dry} = P_{total} - P_{water}$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boyle pressure volume curve and Charles volume temperature line"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">Boyle hyperbola and Charles line</text><line x1="60" y1="280" x2="320" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="280" x2="60" y2="80" stroke="currentColor" stroke-width="1.5"/><text x="30" y="90" font-size="13" fill="currentColor" font-family="sans-serif">P</text><text x="310" y="300" font-size="13" fill="currentColor" font-family="sans-serif">V</text><path d="M80,260 Q150,250 180,200 Q210,150 300,120" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="180" y="110" font-size="12" fill="currentColor" font-family="sans-serif">P x V fixed</text><text x="60" y="310" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">Boyle at fixed T</text><line x1="400" y1="280" x2="660" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="400" y1="280" x2="400" y2="80" stroke="currentColor" stroke-width="1.5"/><text x="370" y="90" font-size="13" fill="currentColor" font-family="sans-serif">V</text><text x="650" y="300" font-size="13" fill="currentColor" font-family="sans-serif">T(K)</text><line x1="410" y1="260" x2="640" y2="110" stroke="currentColor" stroke-width="2.5"/><text x="500" y="110" font-size="12" fill="currentColor" font-family="sans-serif">V / T fixed</text><text x="410" y="310" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">Charles at fixed P</text><text x="40" y="340" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">T in kelvin only; R matches units: 0.0821 for L atm</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Combined-law volume shift',
        problem: 'A gas occupies $4.00 L$ at $1.00 atm$ and $300 K$. Find its volume at $2.00 atm$ and $450 K$.',
        steps: [
          { label: 'Step 1', text: 'Write $P_1V_1/T_1 = P_2V_2/T_2$, so $V_2 = P_1V_1T_2/P_2T_1$. Insert $P_1 = 1.00$, $V_1 = 4.00$, $T_2 = 450$, $P_2 = 2.00$, $T_1 = 300$.' },
          { label: 'Step 2', text: 'Compute stepwise:\n```txt\nV2 = 1.00 x 4.00 x 450 / (2.00 x 300)\nV2 = 1800 / 600 = 3.00 L\n```' },
          { label: 'Step 3', text: 'Thus $V_2 = 1800/600 = 3.00 L$. Pressure doubling alone would halve to $2.00 L$ but heating by $450/300 = 1.5$ lifts it to $3.00 L$.' }
        ],
        result: 'Final volume is 3.00 L after joint pressure and temperature change.'
      },
      {
        title: 'Partial pressure over water',
        problem: 'Hydrogen collected over water at $25$ Celsius and $755 torr$ occupies $0.500 L$. Vapour pressure is $24 torr$. Find moles of dry hydrogen.',
        steps: [
          { label: 'Step 1', text: 'Dry pressure $P = 755 - 24 = 731 torr$. Convert to $atm$: $731/760 = 0.962$. Temperature $T = 25 + 273 = 298 K$.' },
          { label: 'Step 2', text: 'Apply ideal equation:\n```txt\nP dry = 755 - 24 = 731 torr = 0.962 atm\nn = P V / R T = 0.962 x 0.500 / (0.0821 x 298)\nn = 0.481 / 24.47 = 0.0197 mol\n```' },
          { label: 'Step 3', text: 'So $n = 0.962 \\times 0.500/(0.0821 \\times 298) = 0.0197$. Forgetting vapour correction would give $0.0203$, overstating hydrogen by $3$ percent.' }
        ],
        result: 'Dry hydrogen amounts to 0.0197 mol at 731 torr partial pressure.'
      }
    ],
    keyTakeaways: [
      'Boyle, Charles and Avogadro merge into P1V1/T1 = P2V2/T2 and PV = nRT.',
      'Temperature in gas ratios must be absolute kelvin.',
      'Partial pressure equals mole fraction times total pressure.',
      'Density form d = PM/RT yields molar mass from one density reading.'
    ],
    quiz: [
      // PYQ-pattern: combined law with pressure doubling plus heating
      {
        q: 'Gas at $4.00 L$, $1.00 atm$, $300 K$ moves to $2.00 atm$, $450 K$. What is the new volume?',
        options: [`$2.00 L$`, `$6.00 L$`, `$3.00 L$`, `$1.50 L$`], answer: 2,
        explanation: 'Step 1: Use $V_2 = 1.00 \\times 4.00 \\times 450/(2.00 \\times 300)$. Step 2: Numerator $1800$, denominator $600$. Step 3: Ratio $1800/600 = 3.00 L$. Step 4: Value $2.00 L$ omits the heating factor $1.5$.'
      },
      {
        q: 'Hydrogen over water shows $755 torr$ total with $24 torr$ vapour. What is dry pressure?',
        options: [`$731 torr$`, `$779 torr$`, `$755 torr$`, `$24 torr$`], answer: 0,
        explanation: 'Step 1: Dalton gives $P_{dry} = 755 - 24$. Step 2: Subtraction $= 731 torr$. Step 3: In $atm$ this is $731/760 = 0.962$. Step 4: Sum $779 torr$ adds vapour instead of removing it.'
      },
      {
        q: 'Which R suits $P$ in $atm$ and $V$ in $L$?',
        options: [`$8.314 J/mol K$`, `$1.987 L atm/mol K$`, `$62.36 L torr/mol K$`, `$0.0821 L atm/mol K$`], answer: 3,
        explanation: 'Step 1: Match energy and volume units to $R$. Step 2: Litre-atm constant is $0.0821$. Step 3: Value $8.314$ needs SI pascals and cubic metres. Step 4: Value $62.36$ needs pressure in $torr$.'
      },
      {
        q: 'Two moles at $300 K$ in $10.0 L$ exert what pressure? ($R = 0.0821$)',
        options: [`$0.49 atm$`, `$4.93 atm$`, `$2.46 atm$`, `$49.3 atm$`], answer: 1,
        explanation: 'Step 1: Use $P = nRT/V$. Step 2: Numerator $2.0 \\times 0.0821 \\times 300 = 49.26$. Step 3: Divide $49.26/10.0 = 4.926 atm$. Step 4: Value $0.49$ misplaces volume by tenfold.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.2
  {
    sectionId: 'chem-ch3-s2',
    readingTime: 8,
    intro: 'Light molecules escape faster and push with the same pressure law that kinetic theory derives from collisions. This section quantifies Graham diffusion, defines three molecular speeds and lists the postulates behind pressure. Linking temperature to kinetic energy explains why all gases share one energy scale.',
    objectives: [
      'Apply Graham law to rate, time and molar-mass problems',
      'Distinguish most probable, average and rms speeds by formula',
      'State kinetic-theory postulates and the temperature-energy link'
    ],
    concepts: [
      {
        term: 'Graham diffusion law',
        kind: 'law',
        statement: 'Lighter gases diffuse faster by **Graham law** with `rate ratio` $r_1/r_2 = \\sqrt{M_2/M_1}$. For equal volumes, time ratio inverts as $t_2/t_1 = \\sqrt{M_2/M_1}$ written with $...$ as $t_2/t_1$.',
        detail: 'Rates compare moles or volumes per second under same conditions. Trap: ratio uses molar masses in the same order flipped relative to rates; hydrogen versus oxygen gives factor $4$.'
      },
      {
        term: 'Molecular speed trio',
        kind: 'theorem',
        statement: 'Three speeds share **one scale** $\\sqrt{RT/M}$: most probable $v_{mp} = \\sqrt{2RT/M}$, `average` $v_{av} = \\sqrt{8RT/\\pi M}$ and rms $v_{rms} = \\sqrt{3RT/M}$. Order is always $v_{mp} < v_{av} < v_{rms}$.',
        detail: 'Ratios are fixed: $v_{mp}:v_{av}:v_{rms} = 1:1.128:1.224$. Heavier gases are slower by $1/\\sqrt{M}$ at the same $T$; doubling $T$ raises each speed by $\\sqrt{2}$.'
      },
      {
        term: 'Kinetic postulates',
        kind: 'definition',
        statement: 'Kinetic theory assumes **point masses** in `random motion` with elastic collisions, negligible volume and no attractions. Pressure comes from wall momentum transfer, not static repulsion.',
        detail: 'Five points: huge count, straight flight between hits, tiny size, elastic impacts and uniform temperature. Real gases depart when volume and attractions stop being negligible.'
      },
      {
        term: 'Temperature as kinetic energy',
        kind: 'theorem',
        statement: 'Absolute temperature measures **mean kinetic energy** by `equipartition` $KE_{avg} = 3RT/2$ per mole or $3k_BT/2$ per molecule. All gases at one $T$ share one mean energy.',
        detail: 'Hence $PV = 2N \\times KE_{avg}/3$ reproduces $PV = nRT$. Heating raises speed spread and frequency of hits, not molecular size.'
      },
      {
        term: 'Effusion versus diffusion',
        kind: 'insight',
        statement: 'Small-hole **effusion** follows the same `Graham root` as spreading diffusion, but counts molecules escaping a vessel rather than mixing. Rate falls as pressure drops, so timing needs constant conditions.',
        detail: 'Pinhole must be smaller than mean free path for molecular flow; wide holes give bulk flow with no separation. Uranium enrichment exploits tiny mass differences through many stages.'
      }
    ],
    figures: [
      {
        caption: 'Graham gives $r_1/r_2 = \sqrt{M_2/M_1}$ while speeds order $v_{mp} < v_{av} < v_{rms}$ as $\sqrt{2RT/M}$ to $\sqrt{3RT/M}$: mean energy is $3RT/2$ per mole.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graham diffusion vessels and Maxwell curves"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">diffusion race and Maxwell speed trio</text><rect x="40" y="60" width="140" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="80" font-size="12" fill="currentColor" font-family="sans-serif">light H2 fast</text><circle cx="70" cy="120" r="4" fill="currentColor" stroke="none"/><circle cx="110" cy="110" r="4" fill="currentColor" stroke="none"/><circle cx="140" cy="130" r="4" fill="currentColor" stroke="none"/><line x1="180" y1="110" x2="230" y2="110" stroke="currentColor" stroke-width="2"/><polygon points="230,110 222,104 222,116" fill="currentColor" stroke="none"/><rect x="230" y="60" width="140" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="245" y="80" font-size="12" fill="currentColor" font-family="sans-serif">heavy O2 slow</text><circle cx="270" cy="120" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="310" cy="125" r="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="40" y="185" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">rate ratio = sqrt(M heavy / M light)</text><line x1="420" y1="200" x2="680" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="420" y1="200" x2="420" y2="80" stroke="currentColor" stroke-width="1.5"/><path d="M430,195 Q480,190 500,130 Q520,70 560,110 Q590,150 650,190" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="500" y1="130" x2="500" y2="200" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><line x1="525" y1="110" x2="525" y2="200" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><line x1="550" y1="120" x2="550" y2="200" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><text x="485" y="220" font-size="11" fill="currentColor" font-family="sans-serif">mp av rms</text><text x="420" y="235" font-size="11" fill="currentColor" font-family="sans-serif" opacity="0.8">heavier: taller, left</text><text x="40" y="260" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">postulates: point mass, random elastic hits, no pull; T sets mean KE</text><text x="40" y="285" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">pinhole effusion needs hole below mean free path</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Graham molar-mass find',
        problem: 'An unknown gas diffuses $1.41$ times slower than methane ($M = 16$). Find its molar mass.',
        steps: [
          { label: 'Step 1', text: 'Rate ratio $r_{CH_4}/r_X = 1.41 = \\sqrt{M_X/16}$. Square both sides: $M_X/16 = 1.41^2$.' },
          { label: 'Step 2', text: 'Solve the root:\n```txt\nr ratio = 1.41 = sqrt(Mx/16)\nMx/16 = 1.41^2 = 1.988\nMx = 16 x 1.988 = 31.8 g/mol\n```' },
          { label: 'Step 3', text: 'Thus $M_X = 16 \\times 1.988 = 31.8$, near $32$ for oxygen. Slower rate means heavier mass by the square of the ratio.' }
        ],
        result: 'Unknown molar mass is about 32 g/mol.'
      },
      {
        title: 'rms speed of oxygen at 300 K',
        problem: 'Compute $v_{rms}$ for $O_2$ ($M = 0.032 kg/mol$) at $300 K$ with $R = 8.314 J/mol K$.',
        steps: [
          { label: 'Step 1', text: 'Use $v_{rms} = \\sqrt{3RT/M}$. Numerator $3 \\times 8.314 \\times 300 = 7482.6$. Divide by $0.032$ to get $233831$.' },
          { label: 'Step 2', text: 'Evaluate the root:\n```txt\n3RT = 3 x 8.314 x 300 = 7482.6\n3RT/M = 7482.6/0.032 = 233831\nvrms = sqrt(233831) = 483.6 m/s\n```' },
          { label: 'Step 3', text: 'So $v_{rms} = \\sqrt{233831} = 484 m/s$. Average is lower at $445 m/s$ and most probable at $395 m/s$ by fixed ratios.' }
        ],
        result: 'rms speed is about 484 m/s at 300 K.'
      }
    ],
    keyTakeaways: [
      'Graham ratio is root of inverse molar masses for rates and direct for times.',
      'Speed order is most probable below average below rms with fixed ratios.',
      'Temperature sets mean kinetic energy 3RT/2 per mole for every gas.',
      'Postulates are point size, random elastic motion and no attractions.'
    ],
    quiz: [
      // PYQ-pattern: Graham time ratio to unknown molar mass
      {
        q: 'Gas X takes $1.41$ times longer than methane ($16$) to effuse equal volume. What is $M_X$?',
        options: [`$8$`, `$32$`, `$16$`, `$64$`], answer: 1,
        explanation: 'Step 1: Time ratio $= \\sqrt{M_X/16} = 1.41$. Step 2: Square $1.41^2 = 1.988$. Step 3: Multiply $16 \\times 1.988 = 31.8$, about $32$. Step 4: Value $8$ inverts the root direction.'
      },
      {
        q: 'Rate ratio of $H_2$ ($2$) to $O_2$ ($32$) at same conditions equals?',
        options: [`$1/4$`, `$16/1$`, `$1/16$`, `$4/1$`], answer: 3,
        explanation: 'Step 1: Ratio $r_H/r_O = \\sqrt{32/2}$. Step 2: Inside $32/2 = 16$. Step 3: Root $\\sqrt{16} = 4$, so $4/1$. Step 4: Option $1/4$ assigns the fast rate to heavy oxygen.'
      },
      {
        q: 'Which speed ordering is correct?',
        options: [`$v_{mp} < v_{av} < v_{rms}$`, `$v_{av} < v_{mp} < v_{rms}$`, `$v_{rms} < v_{av} < v_{mp}$`, `$v_{mp} = v_{av} = v_{rms}$`], answer: 0,
        explanation: 'Step 1: Coefficients are $\\sqrt{2} = 1.414$, $\\sqrt{8/\\pi} = 1.596$, $\\sqrt{3} = 1.732$. Step 2: Multiply each by $\\sqrt{RT/M}$. Step 3: Order follows coefficients, so $mp < av < rms$. Step 4: Equality would need zero spread, impossible at finite $T$.'
      },
      {
        q: 'Mean kinetic energy per mole at temperature T equals?',
        options: [`$RT$`, `$2RT/3$`, `$3RT/2$`, `$RT/2$`], answer: 2,
        explanation: 'Step 1: Per molecule $3k_BT/2$. Step 2: Multiply by $N_A$ giving $3RT/2$. Step 3: At $300 K$ this is $3 \\times 8.314 \\times 300/2 = 3741 J$. Step 4: Value $RT$ misses the three translational directions factor $3/2$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.3
  {
    sectionId: 'chem-ch3-s3',
    readingTime: 9,
    intro: 'Real gases stray from PV = nRT when pressure packs molecules close or cold slows them into attraction. This section introduces compressibility as the deviation meter, defines Boyle temperature where attraction and size cancel, and states van der Waals corrections with critical constants. Reading Z charts and a, b trends becomes a rapid diagnostic.',
    objectives: [
      'Interpret compressibility factor above and below one',
      'Compute Boyle temperature and its cancellation meaning',
      'Apply van der Waals equation and critical-constant relations'
    ],
    concepts: [
      {
        term: 'Compressibility factor',
        kind: 'definition',
        statement: 'Deviation is measured by **compressibility** `Z = PV/RT` per mole, with $Z = 1$ ideal, $Z < 1$ attraction-led and $Z > 1$ size-led. Plot $Z$ versus $P$ dips then climbs.',
        detail: 'At low $P$ attractions pull molecules together so volume shrinks below ideal. At high $P$ finite size resists compression so volume exceeds ideal. Slope at zero pressure separates the two regimes.'
      },
      {
        term: 'Boyle temperature',
        kind: 'theorem',
        statement: 'At the **Boyle temperature** `T_B = a/Rb` the second virial term vanishes and $Z \\approx 1$ over a wide low-pressure range. Below $T_B$ attraction wins initially, above it size wins from the start.',
        detail: 'For nitrogen $a = 1.39$ and $b = 0.0391$ give $T_B$ near $430 K$. Boyle point is not the ideal point at all pressures: high-pressure $Z$ still climbs.'
      },
      {
        term: 'van der Waals equation',
        kind: 'law',
        statement: 'Corrections enter as **van der Waals** $(P + a n^2/V^2)(V - nb) = nRT$ with `a` for attraction and `b` for excluded volume. Term $a n^2/V^2$ adds lost wall pull, $nb$ removes dead volume.',
        detail: 'Units: $a$ in $L^2 atm/mol^2$, $b$ in $L/mol$. Larger $a$ means easier liquefaction; larger $b$ means bulkier molecules. Hydrogen and helium have tiny $a$ and resist liquefaction.'
      },
      {
        term: 'Critical constants',
        kind: 'theorem',
        statement: 'The **critical point** ends liquid-gas distinction with `P_c = a/27b^2`, $V_c = 3b$ per mole and $T_c = 8a/27Rb$. Above $T_c$ no compression liquefies the gas.',
        detail: 'Inversion gives $a = 27R^2T_c^2/64P_c$ and $b = RT_c/8P_c$ from measured critical data. Ratio $P_cV_c/RT_c = 3/8$ inside $...$ as $3/8$ tests van der Waals fit.'
      },
      {
        term: 'a and b trend reading',
        kind: 'insight',
        statement: 'Across gases **a rises** with `polarizability` and boiling point while b tracks molecular size. Ordering $He < H_2 < N_2 < CO_2 < H_2O$ for $a$ mirrors liquefaction ease.',
        detail: 'Water has huge $a$ from hydrogen bonding, so it deviates strongly and liquefies readily. Trap: $b$ is about four times actual molecular volume, not equal to it.'
      }
    ],
    figures: [
      {
        caption: 'Compressibility $Z = PV/RT$ dips below one for attraction and climbs above one for size: Boyle point $T_B = a/Rb$ cancels the low pressure slope.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compressibility factor dipping then rising with pressure"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">Z versus P: dip then climb around Z = 1</text><line x1="80" y1="280" x2="640" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="80" y1="280" x2="80" y2="60" stroke="currentColor" stroke-width="1.5"/><text x="50" y="70" font-size="13" fill="currentColor" font-family="sans-serif">Z</text><text x="630" y="300" font-size="13" fill="currentColor" font-family="sans-serif">P</text><line x1="80" y1="180" x2="640" y2="180" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.6"/><text x="645" y="185" font-size="12" fill="currentColor" font-family="sans-serif">Z=1 ideal</text><path d="M80,180 Q200,175 260,140 Q340,90 420,150 Q500,210 640,230" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="250" y="120" font-size="12" fill="currentColor" font-family="sans-serif">attraction: Z below 1</text><text x="480" y="250" font-size="12" fill="currentColor" font-family="sans-serif">size: Z above 1</text><text x="330" y="90" font-size="11" fill="currentColor" font-family="sans-serif" opacity="0.8">dip at low P</text><rect x="80" y="295" width="560" height="35" fill="none" stroke="currentColor" stroke-width="1"/><text x="95" y="318" font-size="12" fill="currentColor" font-family="sans-serif">TB = a/Rb near 433 K for N2; Pc = a/27b2, Vc = 3b, Tc = 8a/27Rb</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Boyle temperature from a and b',
        problem: 'For nitrogen $a = 1.39 L^2 atm/mol^2$ and $b = 0.0391 L/mol$. Compute $T_B$ with $R = 0.0821$.',
        steps: [
          { label: 'Step 1', text: 'Use $T_B = a/Rb$. Denominator $Rb = 0.0821 \\times 0.0391 = 0.003210$.' },
          { label: 'Step 2', text: 'Divide the constants:\n```txt\nRb = 0.0821 x 0.0391 = 0.003210\nTB = 1.39 / 0.003210 = 433 K\n```' },
          { label: 'Step 3', text: 'Thus $T_B = 1.39/0.003210 = 433 K$. Near this temperature nitrogen looks ideal at modest pressure, dipping neither far below nor above $Z = 1$.' }
        ],
        result: 'Boyle temperature is about 433 K for nitrogen.'
      },
      {
        title: 'Critical constants from a and b',
        problem: 'For $CO_2$ with $a = 3.59$ and $b = 0.0427$ find $T_c$ and $P_c$ using $R = 0.0821$.',
        steps: [
          { label: 'Step 1', text: 'Use $T_c = 8a/27Rb$ and $P_c = a/27b^2$. First $Rb = 0.0821 \\times 0.0427 = 0.003506$.' },
          { label: 'Step 2', text: 'Insert numbers:\n```txt\nTc = 8 x 3.59/(27 x 0.003506) = 28.72/0.09466 = 303.4 K\nPc = 3.59/(27 x 0.0427^2) = 3.59/0.04922 = 72.9 atm\n```' },
          { label: 'Step 3', text: 'Hence $T_c = 303.4 K$ and $P_c = 72.9 atm$, matching handbook $304 K$ and $73 atm$. Above $303 K$ carbon dioxide cannot liquefy by pressure alone.' }
        ],
        result: 'Critical point is about 303 K and 72.9 atm.'
      }
    ],
    keyTakeaways: [
      'Z = PV/RT below one signals attraction and above one signals size.',
      'Boyle temperature a/Rb cancels low-pressure deviation.',
      'van der Waals adds an2/V2 to pressure and subtracts nb from volume.',
      'Critical point follows Pc = a/27b2, Vc = 3b and Tc = 8a/27Rb.'
    ],
    quiz: [
      // PYQ-pattern: Boyle temperature numeric from a and b
      {
        q: 'With $a = 1.39$ and $b = 0.0391$ ($R = 0.0821$), what is $T_B$?',
        options: [`$433 K$`, `$35.6 K$`, `$17.8 K$`, `$1090 K$`], answer: 0,
        explanation: 'Step 1: Denominator $0.0821 \\times 0.0391 = 0.003210$. Step 2: Ratio $1.39/0.003210 = 433$. Step 3: Units kelvin follow from $L^2 atm$ over $L atm/K$. Step 4: Value $35.6$ multiplies by $Rb$ instead of dividing.'
      },
      {
        q: 'At low pressure $Z < 1$ means?',
        options: ['Finite size dominates', 'Gas is ideal', 'Attractions dominate over size', 'Temperature exceeds Boyle point'], answer: 2,
        explanation: 'Step 1: $Z = PV/RT$ below one means volume shortfall. Step 2: Shortfall comes from inward pull reducing wall force. Step 3: Hence attraction regime, typical below $T_B$. Step 4: Size dominance pushes $Z$ above one at high $P$.'
      },
      {
        q: 'Which gas liquefies most readily by largest a?',
        options: [`$He$`, `$CO_2$`, `$N_2$`, `$H_2$`], answer: 1,
        explanation: 'Step 1: Larger $a$ means stronger attraction. Step 2: Order is $He < H_2 < N_2 < CO_2$ in $a$. Step 3: Carbon dioxide has $a$ near $3.59$ versus $0.034$ for helium. Step 4: Helium with tiny $a$ needs extreme cold to liquefy.'
      },
      {
        q: 'van der Waals $P_c$ in terms of a and b equals?',
        options: [`$3/8 RT_c/P_c$`, `$8a/27Rb$`, `$3b$`, `$a/27b^2$`], answer: 3,
        explanation: 'Step 1: Critical set is $P_c = a/27b^2$, $V_c = 3b$, $T_c = 8a/27Rb$. Step 2: Option two names $T_c$, option three $V_c$. Step 3: Check units: $a/b^2$ yields pressure. Step 4: Last option scrambles the $3/8$ ratio form.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.4
  {
    sectionId: 'chem-ch3-s4',
    readingTime: 7,
    intro: 'Cooling by expansion and weighing vapours connect the gas laws to the laboratory. This section previews Joule-Thomson cooling below inversion, uses vapour density for molar mass and treats eudiometry where gas volumes react in whole-number ratios. Volume contraction after sparking is the signature move.',
    objectives: [
      'Predict heating versus cooling from inversion temperature logic',
      'Find molar mass from vapour-density doubling rule',
      'Solve eudiometric combustion by volume contraction'
    ],
    concepts: [
      {
        term: 'Joule-Thomson preview',
        kind: 'insight',
        statement: 'Free expansion through a plug **cools** only below `inversion temperature` $T_i = 2a/Rb$; above it the same drop warms the gas. Cooling needs work against attractions to dominate.',
        detail: 'Most gases have high $T_i$ and cool at room conditions, but $H_2$ and $He$ have $T_i$ far below room value and warm on throttling. Precooling below $T_i$ is why hydrogen liquefaction needs a cold bath first.'
      },
      {
        term: 'Vapour density method',
        kind: 'method',
        statement: 'Relative **vapour density** to hydrogen is `VD = M/2`, so $M = 2 \\times VD$. A vapour $22$ times denser than hydrogen has $M = 44$, pointing to $CO_2$.',
        detail: 'Definition uses equal $T$ and $P$ densities: $VD = d_{gas}/d_{H_2}$. Trap: reference is hydrogen molecules $H_2$ with $M = 2$, not hydrogen atoms.'
      },
      {
        term: 'Eudiometry volume law',
        kind: 'law',
        statement: 'In **eudiometry** gas volumes react in `whole-number ratios` equal to mole ratios, as $2H_2 + O_2 \\to 2H_2O$ contracts $3$ volumes to liquid. Steam volume counts only when it stays vapour.',
        detail: 'At above $100$ Celsius water counts as $2$ volumes; at room conditions it condenses and counts zero. Contraction $=$ initial gas volume minus final gas volume.'
      },
      {
        term: 'Liquefaction ladder',
        kind: 'definition',
        statement: 'Gases **liquefy** by cooling below `T_c` plus compression, staged through compression, cooling and throttling. Critical temperature gates the whole ladder.',
        detail: 'Above $T_c$ molecules are too energetic for attractions to bind them at any pressure. Cascade and Linde cycles repeat the cool-throttle loop to climb down in temperature.'
      },
      {
        term: 'Mixture mean mass',
        kind: 'method',
        statement: 'A mixture shows **mean molar mass** $M_{avg} = \\sum x_i M_i$ with `mole fractions` $x_i$. Vapour density of the mix then gives $M_{avg}$ directly.',
        detail: 'Example: equal moles of $He$ ($4$) and $CH_4$ ($16$) give $M_{avg} = 10$. Lighter fraction enriches on diffusion, shifting $M_{avg}$ over time.'
      }
    ],
    figures: [
      {
        caption: 'Eudiometric volumes follow mole ratios with liquid water counting zero: $10 mL$ $C_3H_8$ needs $50 mL$ $O_2$ to give $30 mL$ $CO_2$ while $M = 2 \times VD$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Eudiometer tube showing gas volume contraction"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">eudiometer: spark, contraction, CO2 left</text><path d="M120,60 L120,300 L200,300 L200,60" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="120" y1="120" x2="200" y2="120" stroke="currentColor" stroke-width="1.5"/><text x="205" y="125" font-size="12" fill="currentColor" font-family="sans-serif">60 mL start</text><text x="205" y="145" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">10 fuel + 50 O2</text><line x1="120" y1="220" x2="200" y2="220" stroke="currentColor" stroke-width="2.5"/><text x="205" y="225" font-size="12" fill="currentColor" font-family="sans-serif">30 mL CO2 left</text><text x="205" y="245" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">water condensed</text><line x1="140" y1="160" x2="180" y2="160" stroke="currentColor" stroke-width="2"/><circle cx="140" cy="160" r="4" fill="currentColor" stroke="none"/><circle cx="180" cy="160" r="4" fill="currentColor" stroke="none"/><text x="135" y="185" font-size="11" fill="currentColor" font-family="sans-serif">spark gap</text><line x1="260" y1="100" x2="260" y2="280" stroke="currentColor" stroke-width="1.5"/><text x="270" y="150" font-size="12" fill="currentColor" font-family="sans-serif">x = V(CO2)/V(fuel) = 3</text><text x="270" y="175" font-size="12" fill="currentColor" font-family="sans-serif">5.0 = 3 + y/4 gives y = 8</text><text x="270" y="200" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">contraction 60 - 30 = 30</text><rect x="400" y="60" width="280" height="120" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="415" y="85" font-size="12" fill="currentColor" font-family="sans-serif">vapour density: M = 2 x VD</text><text x="415" y="110" font-size="12" fill="currentColor" font-family="sans-serif">VD 22 gives M 44 for CO2</text><text x="415" y="135" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">throttle cools only below Ti</text><text x="415" y="158" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">Ti = 2a/Rb; H2 warms at room</text><text x="40" y="330" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">steam counts only above 100 C, else zero volume</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Eudiometric hydrocarbon find',
        problem: '$10 mL$ of gaseous hydrocarbon $C_xH_y$ burns with $50 mL$ oxygen giving $30 mL$ $CO_2$ and liquid water. Find x and the formula type.',
        steps: [
          { label: 'Step 1', text: 'Reaction $C_xH_y + (x + y/4) O_2 \\to x CO_2 + (y/2) H_2O(l)$. Volumes scale as moles: $10 mL$ fuel gives $30 mL$ $CO_2$, so $x = 30/10 = 3$.' },
          { label: 'Step 2', text: 'Use oxygen balance for y:\n```txt\nx = 30/10 = 3\nO2 used = 50 mL for 10 mL fuel -> 5.0 per fuel\n5.0 = x + y/4 = 3 + y/4 -> y/4 = 2.0 -> y = 8\nfuel = C3H8\n```' },
          { label: 'Step 3', text: 'Oxygen per fuel is $50/10 = 5.0 = x + y/4 = 3 + y/4$, so $y/4 = 2.0$ and $y = 8$. Formula is $C_3H_8$ with contraction $60 - 30 = 30 mL$.' }
        ],
        result: 'Hydrocarbon is C3H8 from x = 3 and y = 8.'
      },
      {
        title: 'Vapour density to molar mass',
        problem: 'A vapour has density $22$ times that of hydrogen at same T and P. Identify molar mass and a matching gas.',
        steps: [
          { label: 'Step 1', text: 'Rule $M = 2 \\times VD$ gives $M = 2 \\times 22 = 44$. Candidate gases near $44$ are $CO_2$ and $N_2O$.' },
          { label: 'Step 2', text: 'Record the doubling:\n```txt\nVD = d(gas)/d(H2) = 22\nM = 2 x 22 = 44 g/mol\nmatch: CO2 = 12 + 32 = 44\n```' },
          { label: 'Step 3', text: 'Check $CO_2$: $12 + 2 \\times 16 = 44$, consistent. Chemical tests then separate $CO_2$ from $N_2O$ at the same mass.' }
        ],
        result: 'Molar mass is 44 g/mol, matching CO2.'
      }
    ],
    keyTakeaways: [
      'Throttling cools only below inversion Ti = 2a/Rb.',
      'Vapour density to hydrogen doubles into molar mass M = 2 × VD.',
      'Eudiometric volumes follow mole ratios with liquid water counting zero.',
      'Mean molar mass of mixtures is mole-fraction weighted.'
    ],
    quiz: [
      // PYQ-pattern: eudiometry contraction to hydrocarbon formula
      {
        q: '$10 mL$ $C_xH_y$ plus $50 mL$ $O_2$ gives $30 mL$ $CO_2$ plus liquid water. What is the fuel?',
        options: [`$CH_4$`, `$C_2H_6$`, `$C_4H_{10}$`, `$C_3H_8$`], answer: 3,
        explanation: 'Step 1: Carbon $x = 30/10 = 3$. Step 2: Oxygen per fuel $50/10 = 5.0 = x + y/4$. Step 3: Insert $3 + y/4 = 5.0$ giving $y = 8$. Step 4: Hence $C_3H_8$; $C_2H_6$ would give only $20 mL$ $CO_2$.'
      },
      {
        q: 'Vapour density $22$ to hydrogen means molar mass?',
        options: [`$11$`, `$44$`, `$22$`, `$88$`], answer: 1,
        explanation: 'Step 1: Rule $M = 2 \\times VD$. Step 2: Insert $2 \\times 22 = 44$. Step 3: Match $CO_2 = 44$. Step 4: Value $22$ forgets doubling against $H_2$ mass $2$.'
      },
      {
        q: 'Hydrogen warms on throttling at room temperature because?',
        options: ['Its a constant is the largest', 'It is ideal at all temperatures', 'Its inversion temperature lies far below room value', 'Its molecules are the heaviest'], answer: 2,
        explanation: 'Step 1: Cooling needs $T < T_i = 2a/Rb$. Step 2: Hydrogen has tiny $a$, so $T_i$ near $200 K$. Step 3: Room $298 K$ exceeds $T_i$, giving warming. Step 4: Largest-$a$ claim reverses the trend since big $a$ raises $T_i$.'
      },
      {
        q: 'Equal moles of He ($4$) and CH4 ($16$) have mean mass?',
        options: [`$10$`, `$20$`, `$8$`, `$12$`], answer: 0,
        explanation: 'Step 1: Mean $= 0.50 \\times 4 + 0.50 \\times 16$. Step 2: Parts $2.0 + 8.0 = 10.0$. Step 3: So $M_{avg} = 10$. Step 4: Value $20$ sums without weighting by one half.'
      }
    ]
  }
]
