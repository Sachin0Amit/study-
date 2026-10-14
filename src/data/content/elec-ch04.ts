import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Electronics Master Library — Chapter 4: Electrostatics & Capacitance
// Hughes, "Electrical & Electronic Technology" 12e — Ch 5 (pp 117–156)
// Nilsson & Riedel, "Electric Circuits" 12e — Ch 6 §6.2–6.3, Ch 7 §7.2, 7.4
// Master study content. All worked-example numbers are the books’ own.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh4Content: SectionContent[] = [
  // ------------------------------------------------------------------ 4.1
  {
    sectionId: 'elec-ch4-s1',
    readingTime: 8,
    intro: 'A capacitor does more than store charge — the space around its plates is where the energy actually lives, in an electric field. Before we can compute capacitance from geometry we therefore need the electrostatic vocabulary: field strength, flux density, and permittivity, the constant that links them. Hughes develops these ideas directly from the parallel-plate capacitor and then extends them to multi-plate and composite-dielectric constructions.',
    objectives: [
      'Define electric field strength $E$ and electric flux density $D$ and relate them through the permittivities',
      'Derive $E = V/d$ and $D = Q/A$ for the ideal parallel-plate capacitor',
      'Distinguish permittivity of free space, relative permittivity and absolute permittivity',
      'Compute the capacitance of a multi-plate capacitor',
      'Analyse composite dielectrics and the stress concentration they create',
    ],
    concepts: [
      {
        term: 'The electric field and its lines of force',
        kind: 'definition',
        statement: 'The space in which a charged body experiences an electric force is the **electric field** of the charge. Lines of force (1) emanate from or terminate in charges, running conventionally from positive to negative, (2) point in the direction of the force on a positive search charge, and (3) **never intersect**, since the resultant force at a point can have only one direction.',
        detail: 'All points on the surface of a conductor are equipotential, and lines of force leave equipotential surfaces at right angles. The two practical field arrangements are parallel plates (the simple capacitor) and concentric cylinders (the television aerial cable).',
      },
      {
        term: 'Electric field strength',
        kind: 'law',
        statement: 'The magnitude of the force experienced by a unit charge at a point is the **electric field strength** (or electric stress) $E$ there. Moving 1 C through a p.d. of $V$ volts requires $V$ joules, so between parallel plates separated by $d$ metres, $$E = \\frac{V}{d} \\ \\text{volts per metre}.$$',
        detail: 'Because work equals force times distance, the force on the unit charge is $V/d$ newtons — so $E$ carries two identical units: volts per metre and newtons per coulomb. In Hughes’s Example 5.5, a 400 V p.d. across a 0.3 mm dielectric produces $E = 400/0.0003 = 1\\,333\\,000$ V/m, that is 1330 kV/m.',
      },
      {
        term: 'Electric flux and flux density',
        kind: 'law',
        statement: 'The total electric effect of a system, as described by its lines of force, is the **electric flux**; a charge of $Q$ coulombs creates a flux of $Q$ coulombs. The **electric flux density** is the flux passing at right angles through unit area: $$D = \\frac{Q}{A} \\ \\text{coulombs per square metre}.$$',
        detail: 'Flux is measured in the same units as charge because the number of lines of force is chosen equal to the charge in coulombs that creates them.',
      },
      {
        term: 'Permittivity of free space',
        kind: 'definition',
        statement: 'The ratio of electric flux density to electric field strength in a vacuum is the **permittivity of free space** $\\varepsilon_0$, a constant determined experimentally by charging a capacitor of known dimensions with vacuum dielectric and measuring the charge with a ballistic galvanometer: $$\\varepsilon_0 = 8.85 \\times 10^{-12}\\ \\text{F/m}.$$',
        detail: 'From $D/E = Cd/A$ for a vacuum capacitor, $C = \\varepsilon_0 A/d$. The experiment: charge the capacitor to a known p.d. $V$, discharge through a ballistic galvanometer of constant $k$ coulombs per deflection division, read the first throw $\\theta$ (so $Q = CV = k\\theta$), and evaluate $\\varepsilon_0 = k\\theta d/\\left(VA\\right)$.',
      },
      {
        term: 'Relative permittivity',
        kind: 'definition',
        statement: 'The **relative permittivity** $\\varepsilon_r$ of a material is the ratio of the capacitance of a capacitor with that material as dielectric to the capacitance of the same capacitor with vacuum (or air) dielectric. It is a pure number, and it can vary with frequency.',
        detail: 'Hughes’s table: vacuum 1.0, air 1.0006, dry paper and polythene 2–2.5, insulating oil 3–4, bakelite 4.5–5.5, glass 5–10, rubber 2–3.5, mica 3–7, porcelain 6–7, distilled water 80, and barium titanate 6000 or more.',
      },
      {
        term: 'Absolute permittivity',
        kind: 'law',
        statement: 'The **absolute permittivity** $\\varepsilon$ of a dielectric is $$\\varepsilon = \\frac{D}{E} = \\varepsilon_0 \\varepsilon_r,$$ measured in farads per metre; it generalizes $D = \\varepsilon_0 E$ (vacuum) to any medium as $D = \\varepsilon E$.',
        detail: 'Absolute permittivity can also be recovered from a measured capacitance: $\\varepsilon = Cd/A$. Note the parallel with the magnetic circuits of Chapter 5, where permeability plays the corresponding role.',
      },
      {
        term: 'Multi-plate capacitors',
        kind: 'law',
        statement: 'For $n$ parallel plates, alternate plates connected together, each side of the three inner plates is in contact with the dielectric but only one side of each outer plate, so the useful area of each set is $\\left(n - 1\\right)A$ and $$C = \\frac{\\varepsilon_0 \\varepsilon_r \\left(n - 1\\right) A}{d}.$$',
        detail: 'A seven-plate capacitor (four plates to terminal A, three to B) therefore has $6A$ of useful surface — six effective capacitor gaps, not seven.',
      },
      {
        term: 'Composite dielectrics',
        kind: 'law',
        statement: 'When two dielectrics of the same cross-section lie in series, the boundary between them is an **equipotential surface**, and the field strengths are inversely proportional to their relative permittivities: $$\\frac{E_1}{E_2} = \\frac{\\varepsilon_{r2}}{\\varepsilon_{r1}}.$$ The layers therefore behave as capacitances $C_1 = \\varepsilon_1 A/d_1$ and $C_2 = \\varepsilon_2 A/d_2$ in series.',
        detail: 'Inserting an infinitely thin metal foil at the boundary would not disturb the field — which is exactly the argument that the two layers are independent series capacitors. The total capacitance follows from the series combination rule.',
      },
      {
        term: 'Stress concentration in the low-permittivity layer',
        kind: 'insight',
        statement: 'In a composite dielectric, **the material with the lower relative permittivity carries the stronger field** — a result with very important applications in high-voltage work, since a thin low-$\\varepsilon_r$ layer can be stressed close to breakdown while the neighbouring high-$\\varepsilon_r$ material is barely working.',
        detail: 'In Hughes’s Example 5.6, a 1 mm paper layer ($\\varepsilon_r = 2$) on 5 mm of glass ($\\varepsilon_r = 8$) across 10 kV takes 4.45 kV/mm while the glass sees only 1.11 kV/mm; a homogeneous filling would have given 10/6 = 1.67 kV/mm everywhere.',
      },
    ],
    examples: [
      {
        title: 'A seven-plate mica capacitor (Hughes Examples 5.4 and 5.5)',
        problem: 'A capacitor is made with seven metal plates connected alternately, separated by mica sheets of thickness 0.3 mm and relative permittivity 6. The area of one side of each plate is 500 cm². A p.d. of 400 V is maintained across the terminals. Find the capacitance, the charge, the electric field strength and the electric flux density.',
        steps: [
          { label: 'Step 1: Assemble the parameters', text: '$n = 7$, $A = 0.05$ m², $d = 0.0003$ m, $\\varepsilon_r = 6$.' },
          { label: 'Step 2: Compute the capacitance', text: '$C = \\frac{8.85 \\times 10^{-12} \\times 6 \\times 6 \\times 0.05}{0.0003} = 0.0531 \\times 10^{-6}$ F = 0.053 μF — the factor $\\left(n-1\\right) = 6$ counts the useful plate surfaces.' },
          { label: 'Step 3: Charge at 400 V', text: '$Q = CV = 0.0531\\ \\mu\\text{F} \\times 400\\ \\text{V} = 21.2\\ \\mu\\text{C}$.' },
          { label: 'Step 4: Field strength in the dielectric', text: '$E = V/d = 400/0.0003 = 1\\,333\\,000$ V/m ≈ 1330 kV/m.' },
          { label: 'Step 5: Flux density', text: 'The flux passes through all six useful plate areas: $D = Q/\\left(6A\\right) = 21.24\\ \\mu\\text{C}/\\left(6 \\times 0.05\\ \\text{m}^2\\right) = 70.8\\ \\mu\\text{C/m}^2$.' },
        ],
        result: '$C = 0.053$ μF, $Q = 21.2$ μC, $E = 1330$ kV/m and $D = 70.8$ μC/m².',
      },
      {
        title: 'Glass and paper in series (Hughes Example 5.6)',
        problem: 'Two metal plates, each 400 × 400 mm, are spaced 6 mm apart. The gap is filled with a 5 mm glass plate of relative permittivity 8 and a 1 mm paper layer of relative permittivity 2. Find the capacitance and the field strength in each dielectric when 10 kV is applied across the plates.',
        steps: [
          { label: 'Step 1: Model as two series capacitors', text: 'The glass–paper boundary is an equipotential surface, so the layers are independent capacitors: $C_p = \\frac{8.85 \\times 10^{-12} \\times 2 \\times 0.16}{0.001} = 2.83$ nF for the paper and $C_g = \\frac{8.85 \\times 10^{-12} \\times 8 \\times 0.16}{0.005} = 2.265$ nF for the glass.' },
          { label: 'Step 2: Combine', text: '$\\frac{1}{C} = \\frac{1}{2.83} + \\frac{1}{2.265} = 0.7955 \\times 10^{9}$, so $C = 1.257 \\times 10^{-9}$ F ≈ 1260 pF.' },
          { label: 'Step 3: Share the 10 kV', text: 'Series capacitors divide voltage in inverse ratio to capacitance: $V_p = 10 \\times \\frac{2.265}{2.83 + 2.265} = 4.45$ kV across the paper, leaving $V_g = 10 - 4.45 = 5.55$ kV across the glass.' },
          { label: 'Step 4: Field strengths', text: 'Paper: $4.45/1 = 4.45$ kV/mm. Glass: $5.55/5 = 1.11$ kV/mm. The low-permittivity paper is stressed four times as hard, exactly as $E_p/E_g = \\varepsilon_{rg}/\\varepsilon_{rp} = 8/2$ predicts.' },
          { label: 'Step 5: Compare with the homogeneous case', text: 'A uniform dielectric over the full 6 mm would see only $10/6 = 1.67$ kV/mm — the composite’s paper layer is 2.7 times more stressed than that average.' },
        ],
        result: '$C \\approx 1260$ pF; the paper endures 4.45 kV/mm while the glass sees 1.11 kV/mm.',
      },
    ],
    keyTakeaways: [
      'Electric field strength $E = V/d$ (V/m) is simultaneously the force per unit charge (N/C).',
      'Electric flux density $D = Q/A$ (C/m²), with flux measured in coulombs because $Q$ coulombs of charge creates $Q$ coulombs of flux.',
      '$D/E = \\varepsilon = \\varepsilon_0\\varepsilon_r$, with $\\varepsilon_0 = 8.85 \\times 10^{-12}$ F/m measured by the ballistic-galvanometer experiment.',
      'Relative permittivity is a capacitance ratio — vacuum 1, air 1.0006, up to barium titanate at 6000 or more.',
      'Multi-plate capacitors multiply useful area to $\\left(n-1\\right)A$, the outer plates contributing only one face each.',
      'Series dielectric layers act as series capacitors; the lower-$\\varepsilon_r$ material carries the proportionally stronger field.',
    ],
    quiz: [
      {
        q: 'A p.d. of 400 V appears across a dielectric 0.3 mm thick. What is the electric field strength?',
        options: ['120 V/m', '1.2 kV/m', '1330 kV/m', '1200 MV/m'],
        answer: 2,
        explanation: '$E = V/d = 400/0.0003 = 1.33 \\times 10^{6}$ V/m = 1330 kV/m — Hughes’s own figure for the seven-plate mica capacitor.',
      },
      {
        q: 'The relative permittivity of a material is defined as:',
        options: ['The ratio $D/E$ for that material', 'The capacitance with that dielectric divided by the capacitance of the same capacitor with vacuum dielectric', 'The product $\\varepsilon_0 \\varepsilon$', 'The flux density per unit charge'],
        answer: 1,
        explanation: 'Relative permittivity is a pure-number capacitance ratio measured on the *same geometry*: $\\varepsilon_r = C_{\\text{material}}/C_{\\text{vacuum}}$. The ratio $D/E$ is the absolute permittivity $\\varepsilon = \\varepsilon_0\\varepsilon_r$.',
      },
      {
        q: 'A capacitor has five plates, alternately connected. Compared with a single gap of the same plate area and spacing, its capacitance is:',
        options: ['Five times larger', 'Four times larger', 'One-fifth as large', 'Unchanged'],
        answer: 1,
        explanation: 'Useful area per set is $\\left(n - 1\\right)A = 4A$, so $C = \\varepsilon_0\\varepsilon_r\\left(n-1\\right)A/d$ — four times the single-gap value. Only the inner faces of the outer plates count.',
      },
      {
        q: 'Two equal-area dielectric layers with $\\varepsilon_{r1} = 2$ and $\\varepsilon_{r2} = 8$ lie in series between plates. The ratio of the field strengths $E_1/E_2$ is:',
        options: ['1/4', '4', '2', '8'],
        answer: 1,
        explanation: 'For series dielectrics of the same area the fields are inversely proportional to the relative permittivities: $E_1/E_2 = \\varepsilon_{r2}/\\varepsilon_{r1} = 8/2 = 4$ — the weaker dielectric is stressed harder.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.2
  {
    sectionId: 'elec-ch4-s2',
    readingTime: 10,
    intro: 'The capacitor is the first of the three great circuit components. Hughes introduces it with a rolled sandwich of foil and waxed paper, a hydraulic analogy that makes charging and discharging intuitive, and the experimental law $Q = CV$; Nilsson then gives the same device its circuit-theory identity: the element whose current is proportional to the rate of change of its voltage, and whose stored energy is $\\frac{1}{2}Cv^2$.',
    objectives: [
      'Define capacitance and the farad, and compute charge from $Q = CV$',
      'Explain charging and discharging qualitatively through the hydraulic analogy',
      'Combine capacitors in series and in parallel, including the voltage distribution rule',
      'Derive the parallel-plate capacitance $C = \\varepsilon_0\\varepsilon_r A/d$ from geometry',
      'Use the capacitor $i$–$v$ relations to find current, power and stored energy',
    ],
    concepts: [
      {
        term: 'The capacitor and the farad',
        kind: 'definition',
        statement: 'A **capacitor** is a device that holds electric charge — two conductors of large area brought very close together yet insulated from each other. Its ability to hold charge is its **capacitance**, measured in **farads**: one farad is the capacitance between plates across which 1 coulomb of charge produces a p.d. of 1 volt.',
        detail: 'A simple practical capacitor is two strips of metal foil interleaved with waxed paper (the wax keeps damp out) and rolled up. The farad is inconveniently large, so values are quoted in microfarads ($1\\ \\mu\\text{F} = 10^{-6}$ F) or picofarads ($1\\ \\text{pF} = 10^{-12}$ F). The old name “condenser” is obsolete.',
      },
      {
        term: 'The hydraulic analogy',
        kind: 'insight',
        statement: 'Charging a capacitor is like pumping water against an elastic **diaphragm** stretched across a cylinder: the force on the piston corresponds to the e.m.f., the quantity of water displaced to the charge, the flow rate to the current, and the cylinder with its strained diaphragm to the capacitor. The pipe resistance sets how long the transfer takes.',
        detail: 'When the force is removed, the strained diaphragm pushes the water back — the discharge — and its strain energy is converted to heat in the pipes, just as electrostatic energy becomes heat in the resistor. Strain the diaphragm too far and it bursts, exactly as excessive p.d. punctures a dielectric.',
      },
      {
        term: 'Charge and voltage: $Q = CV$',
        kind: 'law',
        statement: 'For a given capacitor the ratio of charge to p.d. is a constant — the **capacitance**. Measured by discharging through a ballistic galvanometer (whose first deflection is proportional to charge), the relation is $$Q = CV \\ \\text{coulombs}.$$',
        detail: 'Hughes’s Example 5.1: an 80 μF capacitor across a 500 V d.c. supply holds $Q = \\left(80 \\times 10^{-6}\\right)\\left(500\\right) = 0.04$ C = 40 mC.',
      },
      {
        term: 'The charging and discharging experiment',
        kind: 'insight',
        statement: 'Connect a 20 μF capacitor through 1 MΩ to a battery and the current **jumps to a maximum, then decays to zero** as the capacitor fills; switching to discharge reverses the deflection. Doubling the resistance to 2 MΩ halves the initial current and roughly **doubles the duration** of both curves.',
        detail: 'The area between the current curve and the time axis is the charge in coulombs — the same area, with opposite sign, on charge and discharge. This behaviour is the visible face of the transients analysed in Section 4.4.',
      },
      {
        term: 'Capacitors in parallel and in series',
        kind: 'law',
        statement: 'In **parallel**, each capacitor sees the same $V$ and the charges add, so $$C = C_1 + C_2 + \\cdots$$ In **series**, each capacitor carries the same charge $Q$ and the p.d.s add, so $$\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\cdots$$ — the exact mirror image of the resistor rules of Chapter 2.',
        detail: 'Series capacitors are effectively one capacitor with a thicker dielectric — which is why the equivalent is *smaller* than the smallest member, and why doubling plate separation halves capacitance.',
      },
      {
        term: 'Voltage distribution across series capacitors',
        kind: 'law',
        statement: 'Two series capacitors share the applied voltage in inverse ratio to their capacitances: $$V_1 = V \\cdot \\frac{C_2}{C_1 + C_2}, \\qquad V_2 = V \\cdot \\frac{C_1}{C_1 + C_2}.$$',
        detail: 'Hughes’s Example 5.3: 6 μF and 10 μF in series across 200 V put $V_1 = 200 \\times \\frac{10}{16} = 125$ V on the 6 μF unit and $V_2 = 75$ V on the 10 μF unit; each then holds $Q = 6 \\times 10^{-6} \\times 125 = 750$ μC. The *smaller* capacitor takes the *larger* share of the voltage.',
      },
      {
        term: 'Capacitance from geometry',
        kind: 'law',
        statement: 'Because capacitance is proportional to plate area and inversely proportional to plate separation, $$C = \\frac{\\varepsilon_0 \\varepsilon_r A}{d}$$ for a parallel-plate capacitor — the design formula that links construction to circuit value.',
        detail: 'Two identical capacitors in parallel double the area and double $C$; in series they double the effective dielectric thickness and halve $C$ — the two experiments that fix the geometry dependence before permittivity is introduced.',
      },
      {
        term: 'The capacitor $i$–$v$ relations',
        kind: 'law',
        statement: 'The current at a capacitor’s terminals equals its capacitance times the rate of change of voltage: $$i = C\\frac{dv}{dt}.$$ Conversely, $v\\left(t\\right) = \\frac{1}{C}\\int_{t_0}^{t} i\\,d\\tau + v\\left(t_0\\right)$. Two consequences: with **constant voltage the capacitor is an open circuit**, and **the terminal voltage cannot change instantaneously** — a finite step would demand infinite current.',
        detail: 'The physical current at the terminals is a conduction current in the leads; inside the dielectric it continues as Maxwell’s displacement current (Section 4.3). Hughes derives the same relation for a uniform ramp: a p.d. rising at $V/t_1$ draws the constant current $i_1 = CV/t_1$.',
      },
      {
        term: 'Energy stored in a capacitor',
        kind: 'law',
        statement: 'Charging from 0 to $V$ volts stores $$W = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} \\ \\text{joules},$$ obtained by integrating the instantaneous power $p = Cv\\,\\left(dv/dt\\right)$ over the voltage rise. Per unit volume of dielectric the energy density is $\\frac{1}{2}\\varepsilon E^2 = \\frac{1}{2}DE = \\frac{D^2}{2\\varepsilon}$ joules per cubic metre.',
        detail: 'The integral $\\int_0^V Cv\\,dv$ charges each coulomb through the instantaneous p.d. $v$, which is always below the final $V$ — which is why the stored energy is only half of $QV$. The loss mechanisms (resistance, spark, radiation) reappear when charged capacitors are connected together (Section 4.5).',
      },
    ],
    examples: [
      {
        title: 'Combining and sharing: three capacitors, two ways (Hughes Examples 5.2 and 5.3)',
        problem: 'Three capacitors of 2, 4 and 8 μF are connected (a) in parallel and (b) in series. Find the total capacitance in each case. Then a 6 μF and a 10 μF capacitor are connected in series across a 200 V supply: find the p.d. across each and the charge.',
        steps: [
          { label: 'Step 1: Parallel combination', text: 'Capacitances add directly: $C = 2 + 4 + 8 = 14$ μF.' },
          { label: 'Step 2: Series combination', text: 'Reciprocals add: $\\frac{1}{C} = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} = 0.875$ per μF, so $C = 1.14$ μF — smaller than the smallest member.' },
          { label: 'Step 3: Series pair across 200 V', text: 'Voltage divides in inverse ratio to capacitance: the 6 μF unit takes $V_1 = 200 \\times \\frac{10}{6 + 10} = 125$ V and the 10 μF unit takes $V_2 = 200 - 125 = 75$ V.' },
          { label: 'Step 4: Charge on each', text: 'In series every capacitor holds the same charge: $Q = C_1V_1 = 6 \\times 10^{-6} \\times 125 = 750$ μC (check: $C_2V_2 = 10 \\times 10^{-6} \\times 75 = 750$ μC).' },
        ],
        result: 'Parallel: 14 μF. Series: 1.14 μF. The series pair across 200 V divides 125 V to 75 V with 750 μC on each.',
      },
      {
        title: 'Current, power and energy for a voltage pulse (Nilsson Example 6.4)',
        problem: 'The voltage across a 0.5 μF capacitor rises as $4t$ V for $0 \\le t \\le 1$ s, then decays as $4e^{-\\left(t-1\\right)}$ V for $t \\ge 1$ s. Derive the current, power and energy, and evaluate the energy stored and later returned.',
        steps: [
          { label: 'Step 1: Current from $i = C\\,dv/dt$', text: 'During the ramp $i = \\left(0.5\\ \\mu\\text{F}\\right)\\left(4\\right) = 2$ μA; during the decay $i = \\left(0.5\\ \\mu\\text{F}\\right)\\left(-4e^{-\\left(t-1\\right)}\\right) = -2e^{-\\left(t-1\\right)}$ μA.' },
          { label: 'Step 2: Power from $p = vi$', text: 'On the ramp $p = \\left(4t\\right)\\left(2\\ \\mu\\text{A}\\right) = 8t$ μW (positive — storing). After 1 s, $p = -8e^{-2\\left(t-1\\right)}$ μW (negative — returning).' },
          { label: 'Step 3: Energy from $w = \\frac{1}{2}Cv^2$', text: 'On the ramp $w = \\frac{1}{2}\\left(0.5\\ \\mu\\text{F}\\right)\\left(16t^2\\right) = 4t^2$ μJ; after 1 s, $w = 4e^{-2\\left(t-1\\right)}$ μJ.' },
          { label: 'Step 4: Integrate the power', text: '$\\int_0^1 8t\\,dt = 4$ μJ stored between 0 and 1 s, and $\\int_1^{\\infty} -8e^{-2\\left(t-1\\right)}dt = -4$ μJ returned thereafter.' },
          { label: 'Step 5: Interpret', text: 'The two integrals cancel exactly: the voltage returns to zero, so an ideal capacitor must give back every joule it stored — it can only store energy, never dissipate it.' },
        ],
        result: '$i = 2$ μA then $-2e^{-\\left(t-1\\right)}$ μA; $p = 8t$ μW then $-8e^{-2\\left(t-1\\right)}$ μW; 4 μJ stored is exactly the 4 μJ later returned.',
      },
      {
        title: 'Charge sharing loses energy (Hughes Example 5.12)',
        problem: 'A 50 μF capacitor is charged from a 200 V supply, disconnected, then immediately connected in parallel with an initially uncharged 30 μF capacitor. Find the common p.d. and the electrostatic energy before and after the connection.',
        steps: [
          { label: 'Step 1: Charge before connection', text: '$Q = CV = \\left(50 \\times 10^{-6}\\right)\\left(200\\right) = 0.01$ C.' },
          { label: 'Step 2: Common p.d. after paralleling', text: 'The total capacitance is $50 + 30 = 80$ μF carrying the same 0.01 C, so the p.d. becomes $0.01/\\left(80 \\times 10^{-6}\\right) = 125$ V.' },
          { label: 'Step 3: Energy before', text: '$W_1 = \\frac{1}{2}\\left(50 \\times 10^{-6}\\right)\\left(200\\right)^2 = 1.0$ J.' },
          { label: 'Step 4: Energy after', text: '$W_2 = \\frac{1}{2}\\left(80 \\times 10^{-6}\\right)\\left(125\\right)^2 = 0.625$ J — a 0.375 J reduction.' },
          { label: 'Step 5: Where did it go?', text: 'Charge is conserved but energy is not: the difference appears as heat in the circuit resistance, in any spark at the instant of connection, and as electromagnetic radiation if the equalizing current oscillates.' },
        ],
        result: 'Common p.d. = 125 V; the stored energy falls from 1.0 J to 0.625 J even though no charge is lost.',
      },
    ],
    keyTakeaways: [
      'Capacitance is charge per volt, $Q = CV$, with the farad an impractically large unit (μF and pF are the working units).',
      'Parallel capacitors add; series capacitors combine reciprocally — the dual of the resistor rules.',
      'Series capacitors share voltage inversely as their capacitance: the small one takes the big share.',
      'The parallel-plate formula $C = \\varepsilon_0\\varepsilon_r A/d$ follows from area-proportional, distance-inverse behaviour.',
      '$i = C\\,dv/dt$ makes the capacitor an open circuit to d.c. and forbids instantaneous voltage changes.',
      'Stored energy is $\\frac{1}{2}CV^2 = \\frac{1}{2}QV = Q^2/2C$, with energy density $\\frac{1}{2}DE$ in the field.',
      'Connecting a charged capacitor to an uncharged one conserves charge but always loses energy.',
    ],
    quiz: [
      {
        q: 'A 6 μF and a 10 μF capacitor are in series across 200 V. What is the p.d. across the 6 μF unit?',
        options: ['75 V', '100 V', '125 V', '200 V'],
        answer: 2,
        explanation: '$V_1 = V \\cdot C_2/\\left(C_1 + C_2\\right) = 200 \\times \\frac{10}{16} = 125$ V — the smaller capacitor takes the larger voltage share, and both hold 750 μC.',
      },
      {
        q: 'The current into a capacitor is proportional to:',
        options: ['The voltage across it', 'The square of the voltage across it', 'The rate of change of voltage across it', 'The charge already stored'],
        answer: 2,
        explanation: '$i = C\\,dv/dt$: with a constant voltage the current is zero (open-circuit behaviour), and an instantaneous voltage change would require an infinite current.',
      },
      {
        q: 'Three capacitors of 2, 4 and 8 μF are connected in series. The equivalent capacitance is:',
        options: ['14 μF', '4.67 μF', '1.14 μF', '0.875 μF'],
        answer: 2,
        explanation: 'Reciprocals add: $1/C = 1/2 + 1/4 + 1/8 = 0.875$ per μF, giving $C = 1.14$ μF — always below the smallest individual capacitor.',
      },
      {
        q: 'A 0.5 μF capacitor is charged to 4 V. How much energy does it store?',
        options: ['2 μJ', '4 μJ', '8 μJ', '1 μJ'],
        answer: 1,
        explanation: '$w = \\frac{1}{2}Cv^2 = \\frac{1}{2}\\left(0.5\\right)\\left(16\\right) = 4$ μJ — matching the integral of the power pulse in Nilsson’s Example 6.4.',
      },
      {
        q: 'In the hydraulic analogy of a capacitor, the strained rubber diaphragm corresponds to:',
        options: ['The dielectric of the capacitor storing energy in strain', 'The connecting pipes', 'The water flow rate', 'The battery e.m.f.'],
        answer: 0,
        explanation: 'The elastic diaphragm stretched across the cylinder is the dielectric: force ↔ e.m.f., displaced water ↔ charge, flow ↔ current, and a bursting diaphragm ↔ dielectric puncture by excessive p.d.',
      },
      // PYQ-pattern: ISRO 2016 — series capacitor voltage sharing (rephrased, values changed)
      {
        q: 'An 8 μF capacitor in series with a 12 μF capacitor connects across a 250 V supply. The charge on each capacitor is closest to:',
        options: ['1.20 mC', '1.50 mC', '2.00 mC', '3.00 mC'],
        answer: 0,
        explanation: 'Step 1 — Given: $C_{1} = 8$ μF, $C_{2} = 12$ μF in series, $V = 250$ V. Step 2 — Governing laws: series branches carry one common charge $Q = C_{1}V_{1} = C_{2}V_{2}$, and voltages divide inversely with capacitance as $V_{1} = V\\frac{C_{2}}{C_{1} + C_{2}}$. Step 3 — Algebra: $V_{1} = 250 \\times \\frac{12}{20} = 150$ V and $V_{2} = 100$ V, so $Q = 8 \\times 150 = 1200$ μC, that is $1.20$ mC. Step 4 — Sanity check: the equivalent $\\frac{8 \\times 12}{20} = 4.8$ μF times $250$ V gives the same $1200$ μC, and the smaller capacitor takes the larger voltage as required. Step 5 — Distractor analysis: 1.50 mC assumes an equal split, 2.00 mC adds the capacitances, and 3.00 mC multiplies peak values. Step 6 — Conclude: each capacitor holds about 1.20 mC.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.3
  {
    sectionId: 'elec-ch4-s3',
    readingTime: 8,
    intro: 'Between the plates of a real capacitor stands a real material, and materials have limits. Push a dielectric too hard and it punctures; leave a charged capacitor on the shelf and it slowly leaks away; look inside the dielectric while it charges and you find Maxwell’s displacement current keeping the circuit “complete”. This section is the materials science of the capacitor — and the catalogue of the families engineers choose from.',
    objectives: [
      'Define dielectric strength and use its units of MV/m',
      'Explain why dielectric strength falls with increasing thickness',
      'Distinguish leakage, charging and conduction currents in a capacitor',
      'State Maxwell’s displacement-current concept and why it was needed',
      'Match capacitor families — paper, electrolytic, mica, polyester, ceramic, tantalum — to their applications',
    ],
    concepts: [
      {
        term: 'Dielectric strength',
        kind: 'definition',
        statement: 'The potential gradient necessary to cause breakdown of an insulating medium is its **dielectric strength**, expressed in megavolts per metre. Breakdown usually leaves a tiny hole or puncture through the dielectric, rendering it useless as an insulator.',
        detail: 'The value decreases with increasing thickness. Hughes’s figures: air falls from 5.75 MV/m at 0.2 mm to 4.46 MV/m at 1 mm and 2.98 MV/m at 10 mm; mica falls from 200 MV/m at 0.01 mm to 61 MV/m at 1 mm. Glass (density 2.5) manages 28.5 MV/m at 1 mm, ebonite 50 MV/m, paraffin-waxed paper 40–60 MV/m at 0.1 mm, transformer oil about 200 MV/m at 1 mm, and ceramics about 50 MV/m at 1 mm.',
      },
      {
        term: 'Why thin sections are stronger',
        kind: 'insight',
        statement: 'Because dielectric strength is a **gradient** (volts per metre), a material’s usable voltage does not scale linearly with thickness — doubling the thickness less than doubles the withstand voltage, so thin films and multi-layer stacks buy more working volts per millimetre than monolithic slabs.',
        detail: 'This is one reason why the high-$\\varepsilon_r$ ceramics and ultra-thin oxide layers of electrolytics achieve such enormous capacitance in small volumes: thin dielectric helps capacitance ($C \\propto 1/d$) *and* raises the stress the film survives.',
      },
      {
        term: 'Leakage current',
        kind: 'definition',
        statement: 'No dielectric is perfect: impurities leave a few free electrons, so every real capacitor behaves as an ideal capacitance in parallel with a very large resistance — typically **exceeding 100 MΩ** — through which a small **leakage current** passes between the plates whenever a voltage is applied.',
        detail: 'A charged, disconnected capacitor therefore self-discharges on a time constant $RC$ that is enormous compared with circuit time constants — Hughes notes the charge is measurably reduced after a few hours. Leakage is negligible in most circuit calculations but sets the shelf-life of sample-and-hold and timing circuits.',
      },
      {
        term: 'Charging current versus conduction current',
        kind: 'definition',
        statement: 'The **charging current** flows in the conductors connecting the source to the plates. The **conduction current** is the electron flow in the plates and external circuit that does *not* pass through the battery: electrons displaced from one plate are simultaneously replaced at the other.',
        detail: 'In Hughes’s two-capacitor figure, closing the switch moves electrons from the positive plate of one capacitor via the battery to the negative plate of the other, while electrons flow directly between the outer plates — the latter loop is the conduction current.',
      },
      {
        term: 'Displacement current',
        kind: 'definition',
        statement: 'Maxwell (1865) postulated that **any change in the electric flux in a region is equivalent to an electric current in that region** — the **displacement current** — so that the current appears continuous even through a vacuum, where no electrons can move.',
        detail: 'The space between charged plates is in a state of electrostatic strain whose exact nature is as unknown as that of magnetic strain; the displacement current is the bookkeeping that lets Kirchhoff’s current law hold at a capacitor’s plates. At the terminals it is indistinguishable from the conduction current — Nilsson makes this the very definition of the capacitor’s $i = C\\,dv/dt$.',
      },
      {
        term: 'The practical capacitor equivalent circuit',
        kind: 'insight',
        statement: 'A real capacitor is modelled as the ideal capacitance in parallel with a large leakage resistance (and, at high frequency, parasitic inductance): $C$ in parallel with $R > 100$ MΩ in Hughes’s representation.',
        detail: 'The parallel resistance gives the self-discharge: the capacitor decays with a very large time constant, which is why an apparently “dead” high-voltage capacitor can still hold a dangerous charge hours later.',
      },
      {
        term: 'Capacitor families',
        kind: 'definition',
        statement: '**Paper** capacitors (foil interleaved with waxed or oil-impregnated paper) serve appliance power circuits; **electrolytic** types use an aluminium-oxide film only about 0.15 μm thick at a 100 V working voltage, giving very large capacitance in small volume but low insulation resistance and **polarized** operation; **mica** (clamped foil or silvered films) serves high-frequency low-loss circuits; **polyester** films as thin as 2 μm are metallized on one side and rolled, working to a few thousand volts with ~100 MΩ leakage; **ceramic** stacks cover 1 pF to about 1 μF, up to thousands of volts, leakage ~1000 MΩ, and tolerate high temperatures.',
        detail: 'Solid **tantalum electrolytics** replace the wet electrolyte with manganese dioxide over sintered tantalum powder coated with oxide — much smaller than the aluminium equivalents. **Variable** capacitors use interleaved rigid air-spaced plates, one set rotating — the radio tuning component. Barium-titanate ceramics ($\\varepsilon_r \\ge 6000$) allow tiny separations and high values.',
      },
      {
        term: 'Stray capacitance',
        kind: 'insight',
        statement: 'Capacitance exists between **any** two conductors, so every circuit has capacitance; it is usually negligible because conductors are small and far apart, but it dominates behaviour on long transmission lines and in high-frequency communications systems.',
        detail: 'At the level of circuit theory we ignore it except where capacitors are deliberately present — but the designer of radio-frequency and high-speed digital circuits lives with it daily.',
      },
    ],
    examples: [
      {
        title: 'How much voltage can an air gap hold?',
        problem: 'Hughes’s Example 5.13 geometry — two metal discs 100 mm in diameter spaced 1.0 mm apart in air — is tested with an applied p.d. Using the dielectric strength of air from Table 5.3, estimate the breakdown voltage, and compare the working stress at 1.0 kV.',
        steps: [
          { label: 'Step 1: Field at the working voltage', text: 'At 1.0 kV across 1.0 mm, $E = V/d = 1000/0.001 = 10^{6}$ V/m = 1 MV/m.' },
          { label: 'Step 2: Look up the limit', text: 'Table 5.3 gives the dielectric strength of air at 1 mm thickness as 4.46 MV/m.' },
          { label: 'Step 3: Breakdown voltage', text: 'The gap punctures when $V = E_{\\text{bd}} \\times d = 4.46 \\times 10^{6} \\times 0.001 = 4.46$ kV.' },
          { label: 'Step 4: Safety factor', text: 'At 1 kV the working stress is only $1/4.46 \\approx 22$ per cent of breakdown — a comfortable margin, but one that shrinks if the gap is thinner, since thinner air gaps actually withstand somewhat higher gradients.' },
        ],
        result: 'The 1 mm air gap breaks down near 4.46 kV; operating at 1 kV stresses it to about 22 per cent of its limit.',
      },
      {
        title: 'Self-discharge through leakage resistance',
        problem: 'Using Hughes’s statement that a practical capacitor’s leakage resistance exceeds 100 MΩ, estimate how long a 1 μF capacitor charged to a working voltage takes to discharge itself through its own leakage.',
        steps: [
          { label: 'Step 1: Model the leakage', text: 'The capacitor is $C = 1\\ \\mu\\text{F}$ in parallel with $R > 100\\ \\text{M}\\Omega$.' },
          { label: 'Step 2: Compute the time constant', text: '$\\tau = CR > \\left(1 \\times 10^{-6}\\right)\\left(100 \\times 10^{6}\\right) = 100$ s.' },
          { label: 'Step 3: Apply the five-time-constant rule', text: 'After $5\\tau \\approx 500$ s — under ten minutes — the voltage has fallen to $e^{-5} \\approx 0.7$ per cent of its initial value: effectively discharged.' },
          { label: 'Step 4: Interpret against Hughes’s remark', text: 'For a capacitor left for hours the charge visibly disappears — consistent with a decay constant of this order, and the reason stored-charge warnings are printed on high-voltage equipment even though the capacitances there are far smaller (their $R$ is larger, but $5\\tau$ still arrives on the scale of hours).' },
        ],
        result: 'A 1 μF capacitor self-discharges with $\\tau > 100$ s — effectively flat within about 500 s through leakage alone.',
      },
    ],
    keyTakeaways: [
      'Dielectric strength is the breakdown gradient in MV/m; it falls as thickness grows, so thin films hold the most volts per millimetre.',
      'Air breaks down near 4.46 MV/m at 1 mm; mica manages 200 MV/m at 0.01 mm; paraffin-waxed paper 40–60 MV/m at 0.1 mm.',
      'Leakage current flows through the dielectric’s few free electrons — modelled as $R > 100$ MΩ in parallel with the ideal capacitance.',
      'Conduction current flows in plates and leads; displacement current is Maxwell’s name for the flux change inside the dielectric that keeps current appearing continuous.',
      'Electrolytics pack microfarads into small volume via a sub-micron oxide film but are polarized and leaky; mica and ceramic win at high frequency and high temperature.',
      'Every pair of conductors forms a capacitor — stray capacitance is invisible at low frequency and decisive at high frequency.',
    ],
    quiz: [
      {
        q: 'Dielectric strength is expressed as:',
        options: ['Volts across the sample', 'Megavolts per metre of thickness', 'Joules per coulomb', 'Amperes per square metre'],
        answer: 1,
        explanation: 'It is the potential gradient (field strength) at which breakdown occurs, in MV/m — and it decreases with increasing sample thickness.',
      },
      {
        q: 'Why must electrolytic capacitors never have their applied voltage reversed?',
        options: ['Their capacitance is too large', 'The aluminium oxide film forming the dielectric requires a maintained polarity and breaks down if the field reverses', 'They contain paper that chars', 'Their terminals are not interchangeable'],
        answer: 1,
        explanation: 'The oxide film is formed electrochemically on one foil and only survives while that foil stays positive — Hughes lists reverse-polarity operation among the type’s two main disadvantages (with low insulation resistance).',
      },
      {
        q: 'Maxwell introduced the displacement current in 1865 in order to:',
        options: ['Explain leakage through imperfect dielectrics', 'Describe the heat produced in a charging resistor', 'Treat a changing electric flux as a current so that current appears continuous through a capacitor', 'Account for the force between capacitor plates'],
        answer: 2,
        explanation: 'In a vacuum no electrons can cross the gap, yet the charging circuit behaves as if current flowed through it; Maxwell postulated that a changing electric flux is equivalent to a current — the displacement current.',
      },
      {
        q: 'A circuit must hold its voltage for many minutes with a leakage-limited capacitor. Which family is the poorest choice?',
        options: ['Polystyrene-type film capacitors with leakage resistances near 100 MΩ or better', 'Electrolytic capacitors, whose insulation resistance is comparatively low', 'Ceramic capacitors with ~1000 MΩ leakage', 'Mica capacitors for low-loss high-frequency circuits'],
        answer: 1,
        explanation: 'Hughes lists the electrolytic’s comparatively low insulation resistance as its other main disadvantage — its leakage discharges the stored voltage far faster than film, ceramic or mica types.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.4
  {
    sectionId: 'elec-ch4-s4',
    readingTime: 10,
    intro: 'Because a capacitor’s current is proportional to the rate of change of its voltage, nothing about a capacitor happens instantly: charging and discharging through a resistor follow the universal exponential. This section derives the growth and decay laws, attaches the time constant $\\tau = CR$ to them, and then adopts Nilsson’s modern shortcut — the general solution $x(t) = X_f + (X_0 - X_f)e^{-t/\\tau}$ — which solves every first-order CR transient in five routine steps.',
    objectives: [
      'Derive the growth law $v = V\\left(1 - e^{-t/RC}\\right)$ from the circuit differential equation',
      'State and interpret the time constant $T = CR$, including the 63.2 per cent rule and the initial-slope construction',
      'Write the discharge laws for voltage and current',
      'Apply the five-step natural-response method of Nilsson to RC circuits',
      'Use the general solution $x(t) = X_f + (X_0 - X_f)e^{-t/\\tau}$ for any first-order transient',
    ],
    concepts: [
      {
        term: 'Charging current and the rate of change of voltage',
        kind: 'law',
        statement: 'If the p.d. across a capacitor rises uniformly from 0 to $V$ in $t_1$ seconds, the charging current is the constant $i_1 = CV/t_1$ — current in amperes equals capacitance times the **rate of change of p.d.** For a general ramp, $i = C\\,dv/dt$; during discharge the falling voltage makes the current negative.',
        detail: 'Hughes demonstrates this with a slider driven at uniform speed along a resistor: the voltmeter climbs linearly and the microammeter holds a steady reading; reversing the slider reverses the current. The two rectangles of charge (out and back) are equal in area.',
      },
      {
        term: 'The growth law',
        kind: 'law',
        statement: 'Charging a capacitor $C$ through a resistor $R$ from a source $V$, the p.d. across the capacitor obeys $V = v + RC\\,dv/dt$, whose solution is $$v = V\\left(1 - e^{-t/RC}\\right) \\ \\text{volts}.$$',
        detail: 'Separating variables and integrating: $t/RC = \\ln\\left(V/\\left(V - v\\right)\\right)$. At the switching instant $v = 0$, so the whole applied voltage appears across $R$ and the initial current is $I = V/R$.',
      },
      {
        term: 'The decay of charging current',
        kind: 'law',
        statement: 'The charging current is $$i = \\frac{V}{R}e^{-t/RC} = I e^{-t/RC},$$ the mirror image of the voltage curve — its shape is identical for charge and discharge (with the same $R$).',
        detail: 'The instantaneous charging current is always proportional to $V - v$, the vertical gap between the final value and the curve; that gap closes exponentially.',
      },
      {
        term: 'The time constant',
        kind: 'definition',
        statement: 'The **time constant** $T = CR$ seconds is the time in which the p.d. would reach its final value if it continued at its initial rate — the initial slope construction. In reality the voltage reaches $1 - e^{-1} = 63.2$ per cent of its final value in one time constant.',
        detail: 'Hughes builds the curve graphically by successive tangents, each of length $T$. Example 5.7: a 20 μF capacitor discharging through 100 kΩ has $T = 2$ s and an initial current $400/100\\,000 = 4$ mA, so the tangent construction uses steps of 2 s falling from 4 mA.',
      },
      {
        term: 'The discharge laws',
        kind: 'law',
        statement: 'A capacitor charged to $V$ and discharged through $R$ obeys $$v = V e^{-t/RC}, \\qquad i = -\\frac{V}{R}e^{-t/RC} = -I e^{-t/RC},$$ the minus sign marking the reversed current direction.',
        detail: 'The derivation mirrors the growth case: $v/R = -C\\,dv/dt$ integrates to $t/RC = \\ln\\left(V/v\\right)$. Both curves are the same exponential decay — voltage from above, current from below the axis.',
      },
      {
        term: 'The exponential and the five-time-constant rule',
        kind: 'insight',
        statement: 'All CR transients share the decay factor $e^{-x}$: $e^{-1} = 0.3679$, $e^{-2} = 0.1353$, $e^{-3} = 0.0497$, $e^{-4} = 0.0183$, $e^{-5} = 0.0067$. After **five time constants the decay is effectively over** (0.7 per cent remains).',
        detail: 'This defines “almost immediately” for switching: if the interval between two switchings is shorter than $5T$, the second transient begins before the first has finished — the situation of Hughes’s Examples 5.9 and 5.10, where the same network switched at 100 ms behaves quite differently from one switched at 10 ms.',
      },
      {
        term: 'The natural-response method (Nilsson)',
        kind: 'method',
        statement: 'To find the natural response of an RC circuit: (1) determine the initial capacitor voltage $V_0$ by analysing the circuit for $t < 0$; (2) compute $\\tau = R_{\\text{eq}}C$ using the equivalent resistance attached to the capacitor for $t \\ge 0$; (3) write $v\\left(t\\right) = V_0 e^{-t/\\tau}$; (4) find every other quantity — currents, powers, energies — from resistive analysis on top of $v\\left(t\\right)$.',
        detail: 'The method extends to multiple capacitors provided they combine into a single equivalent — as Nilsson’s Example 7.4 does with two series capacitors that become one 4 μF element charged to 20 V.',
      },
      {
        term: 'The general solution',
        kind: 'law',
        statement: 'Every first-order natural or step response obeys $$x\\left(t\\right) = X_f + \\left(X_0 - X_f\\right)e^{-t/\\tau}, \\qquad t \\ge 0,$$ where $x$ is the continuous variable (capacitor voltage or inductor current), $X_0$ its initial value, $X_f$ its final value, and $\\tau = RC$ — with $X_f = 0$ for source-free natural response.',
        detail: 'The four quantities are read from three snapshots of the circuit: $X_0$ from the $t < 0$ circuit, $\\tau$ from the $t \\ge 0$ resistance seen by the storage element, and $X_f$ from the circuit as $t \\to \\infty$ (where the capacitor is an open circuit).',
      },
      {
        term: 'Transients in pulsed CR networks',
        kind: 'insight',
        statement: 'When a CR network is driven by pulses, each switching launches a new exponential measured **from that switching instant**, with the initial value left by the previous interval — Hughes’s Examples 5.9–5.11 chain growth, decay and Thévenin reduction together for exactly this behaviour.',
        detail: 'In Example 5.9 a 10 V source, 100 kΩ and 0.1 μF give $\\tau_1 = 10$ ms, so switching at $t = 100$ ms (ten time constants later) finds the capacitor fully charged and the discharge starts cleanly from 10 V through 200 kΩ ($\\tau_2 = 20$ ms). Switch at 10 ms instead (Example 5.10) and the discharge starts from only $10\\left(1 - e^{-1}\\right) = 6.32$ V.',
      },
    ],
    examples: [
      {
        title: 'Growth to 80 per cent of final value (Hughes Example 5.8)',
        problem: 'An 8 μF capacitor is connected in series with a 0.5 MΩ resistor across a 200 V d.c. supply. Find (a) the time constant, (b) the initial charging current, (c) the time for the capacitor voltage to reach 160 V, and (d) the current and capacitor voltage 4.0 s after connection.',
        steps: [
          { label: 'Step 1: Time constant', text: '$T = CR = 0.5 \\times 10^{6} \\times 8 \\times 10^{-6} = 4.0$ s.' },
          { label: 'Step 2: Initial charging current', text: 'At switch-on the capacitor is uncharged, so the full 200 V appears across the resistor: $I = V/R = 200/\\left(0.5 \\times 10^{6}\\right) = 400$ μA.' },
          { label: 'Step 3: Time to reach 160 V', text: 'Set $160 = 200\\left(1 - e^{-t/4}\\right)$, so $e^{-t/4} = 0.2$. Taking natural logs: $t = 4\\ln 5 = 4 \\times 1.609 = 6.44$ s.' },
          { label: 'Step 4: Conditions at t = 4 s (one time constant)', text: '$v = 200\\left(1 - e^{-1}\\right) = 200 \\times 0.632 = 126.4$ V — the 63.2 per cent rule in action.' },
          { label: 'Step 5: The current at that moment', text: '$i = 400e^{-1} = 400 \\times 0.368 = 147$ μA.' },
        ],
        result: '$T = 4.0$ s, $I = 400$ μA, $t\\left(160\\text{ V}\\right) = 6.44$ s, and at 4 s: $v = 126.4$ V with $i = 147$ μA.',
      },
      {
        title: 'Natural response with a resistive divider (Nilsson Example 7.3)',
        problem: 'A switch has been in position x for a long time, connecting a 100 V source through 10 kΩ to a 0.5 μF capacitor in parallel with 240 kΩ and 60 kΩ; a 32 kΩ resistor sits in the source branch. At $t = 0$ the switch moves to y, leaving the capacitor to discharge through the resistor network. Find $v_C\\left(t\\right)$, the output voltage $v_o\\left(t\\right)$ across the 60 kΩ resistor, the current $i_o\\left(t\\right)$, and the total energy dissipated in the 60 kΩ resistor.',
        steps: [
          { label: 'Step 1: Initial capacitor voltage (t < 0)', text: 'The capacitor is an open circuit in steady state, so it charges to the source voltage: $V_0 = 100$ V.' },
          { label: 'Step 2: Time constant (t ≥ 0)', text: 'With the source disconnected, the resistance seen by the capacitor is $R_{\\text{eq}} = 32{,}000 + \\left(240{,}000 \\parallel 60{,}000\\right) = 32{,}000 + 48{,}000 = 80$ kΩ, so $\\tau = \\left(80 \\times 10^{3}\\right)\\left(0.5 \\times 10^{-6}\\right) = 40$ ms.' },
          { label: 'Step 3: Capacitor voltage', text: '$v_C\\left(t\\right) = 100e^{-t/0.04} = 100e^{-25t}$ V for $t \\ge 0$.' },
          { label: 'Step 4: Output voltage and current', text: 'The resistors form a divider: $v_o\\left(t\\right) = \\frac{48{,}000}{80{,}000}\\left(100e^{-25t}\\right) = 60e^{-25t}$ V, and $i_o\\left(t\\right) = v_o/60{,}000 = e^{-25t}$ mA.' },
          { label: 'Step 5: Energy in the 60 kΩ resistor', text: '$p = i_o^2\\left(60{,}000\\right) = 60e^{-50t}$ mW, and $w = \\int_0^{\\infty} 60e^{-50t}\\,dt = 60/50 = 1.2$ mJ.' },
        ],
        result: '$v_C = 100e^{-25t}$ V, $v_o = 60e^{-25t}$ V, $i_o = e^{-25t}$ mA; the 60 kΩ resistor dissipates 1.2 mJ of the capacitor’s stored 2.5 mJ.',
      },
      {
        title: 'A transient solved by Thévenin (Hughes Example 5.11)',
        problem: 'A 6 V source feeds two 100 kΩ resistors in series; the junction drives a further 100 kΩ in series with a 0.2 μF capacitor to the return rail, and a 200 kΩ discharge resistor can be switched across the capacitor. The switch closes on charge at $t = 0$ and moves to discharge at $t = 20$ ms. Find the capacitor voltage at $t = 30$ ms.',
        steps: [
          { label: 'Step 1: Thévenize the supply network', text: 'Looking into the junction: $R_c = 100 + \\frac{100 \\times 100}{100 + 100} = 150$ kΩ and $V = 6 \\times \\frac{100}{100 + 100} = 3$ V — the Chapter 3 theorem collapsing the source network to one battery and one resistance.' },
          { label: 'Step 2: Charging transient (0 ≤ t < 20 ms)', text: '$\\tau_1 = CR_c = 0.2 \\times 10^{-6} \\times 150 \\times 10^{3} = 30$ ms, so $v_c = 3\\left(1 - e^{-t/30\\text{ ms}}\\right)$ V.' },
          { label: 'Step 3: Voltage at the second switching', text: 'At $t = 20$ ms: $v_c = 3\\left(1 - e^{-20/30}\\right) = 3\\left(1 - e^{-2/3}\\right) = 1.46$ V.' },
          { label: 'Step 4: Discharge transient (t ≥ 20 ms)', text: 'The capacitor now decays through the 200 kΩ resistor alone: $\\tau_2 = 0.2 \\times 10^{-6} \\times 200 \\times 10^{3} = 40$ ms, so $v_c = 1.46\\,e^{-t^{\\prime}/40\\text{ ms}}$ with $t^{\\prime}$ measured from the second switching.' },
          { label: 'Step 5: Evaluate at t = 30 ms', text: 'That is $t^{\\prime} = 10$ ms into the discharge: $v_c = 1.46\\,e^{-10/40} = 1.46 \\times 0.779 = 1.14$ V.' },
        ],
        result: 'The capacitor voltage at 30 ms is 1.14 V, after peaking at 1.46 V when the discharge began.',
      },
    ],
    keyTakeaways: [
      'Charging: $v = V\\left(1 - e^{-t/RC}\\right)$ and $i = \\left(V/R\\right)e^{-t/RC}$; discharging: $v = Ve^{-t/RC}$ and $i = -\\left(V/R\\right)e^{-t/RC}$.',
      'The time constant $T = CR$ is the initial-slope intercept and the 63.2 per cent point; five time constants end any transient for practical purposes.',
      'At switch-on the capacitor looks like a short circuit ($i = V/R$); at the end it looks like an open circuit ($i = 0$).',
      'Nilsson’s recipe: initial value from the $t < 0$ circuit, $\\tau$ from the resistance seen by $C$ for $t \\ge 0$, then $v = V_0e^{-t/\\tau}$.',
      'The general solution $x = X_f + \\left(X_0 - X_f\\right)e^{-t/\\tau}$ covers natural and step responses of RL and RC circuits alike.',
      'Sequential switching restarts the clock: each new transient inherits the voltage left by the last.',
      'Thévenin’s theorem plus the exponential laws handles networks far more complex than a plain series CR.',
    ],
    quiz: [
      {
        q: 'A 0.5 μF capacitor discharges through the 80 kΩ it sees in a resistive network. What is the time constant?',
        options: ['4 ms', '40 ms', '0.4 s', '160 ms'],
        answer: 1,
        explanation: '$\\tau = R_{\\text{eq}}C = \\left(80 \\times 10^{3}\\right)\\left(0.5 \\times 10^{-6}\\right) = 0.04$ s = 40 ms — the value of Nilsson’s Example 7.3.',
      },
      {
        q: 'After how many time constants has an RC transient effectively finished?',
        options: ['One', 'Two', 'Three', 'Five'],
        answer: 3,
        explanation: '$e^{-5} = 0.0067$: only 0.7 per cent of the initial value remains after five time constants, which is Hughes’s definition of “almost immediately” complete.',
      },
      {
        q: 'At the instant a discharging switch closes on a capacitor charged to $V$ through resistance $R$, the current is:',
        options: ['Zero, because the capacitor blocks d.c.', '$V/R$, because the full voltage appears across the resistor', `$V/\\left(RC\\right)$`, 'Infinite'],
        answer: 1,
        explanation: 'The capacitor voltage cannot change instantly, so at $t = 0^{+}$ the entire $V$ sits across $R$ and $i = V/R$ — thereafter both decay as $e^{-t/RC}$.',
      },
      {
        q: 'The general solution $x\\left(t\\right) = X_f + \\left(X_0 - X_f\\right)e^{-t/\\tau}$ is applied to an RC step response. Where does the final value $X_f$ come from?',
        options: ['The circuit as $t \\to \\infty$, with the capacitor treated as an open circuit', 'The initial charge on the capacitor', 'The equivalent resistance seen by the capacitor', 'The short-circuit current at the terminals'],
        answer: 0,
        explanation: 'Three snapshots feed the formula: $X_0$ from the $t < 0$ circuit, $\\tau$ from the $t \\ge 0$ resistance seen by the capacitor, and $X_f$ from the long-term behaviour in which the capacitor has stopped changing voltage.',
      },
      {
        q: 'A CR network is switched 10 ms after charging begins, and its time constant during charge is 10 ms. The discharge starts from:',
        options: ['The full supply voltage', '63.2 per cent of the supply voltage', '36.8 per cent of the supply voltage', 'Zero'],
        answer: 1,
        explanation: 'One time constant of growth reaches $1 - e^{-1} = 0.632$ of the final value — Hughes’s Example 5.10, where the 10 V source leaves 6.32 V on the capacitor at the moment of switching.',
      },
      // PYQ-pattern: GATE 2018 — RC charging time to a voltage level (rephrased, values changed)
      {
        q: 'A 10 μF capacitor in series with a 200 kΩ resistor connects across a 100 V supply, the capacitor initially uncharged. The time for the capacitor voltage to reach 80 V is closest to:',
        options: ['1.4 s', '2.0 s', '3.2 s', '6.4 s'],
        answer: 2,
        explanation: 'Step 1 — Given: $R = 200$ kΩ, $C = 10$ μF, final value $V = 100$ V, target $80$ V, zero initial voltage. Step 2 — Governing law: charging obeys $v = V(1 - e^{\\frac{-t}{RC}})$ with time constant $\\tau = RC$. Step 3 — Algebra: $\\tau = 200 \\times 10^{3} \\times 10 \\times 10^{-6} = 2.0$ s; setting $80 = 100(1 - e^{\\frac{-t}{2}})$ gives $e^{\\frac{-t}{2}} = 0.2$, so $t = 2\\ln 5 \\approx 3.22$ s. Step 4 — Sanity check: 80 per cent needs about $1.6\\tau$ since $\\ln 5 \\approx 1.61$, correctly beyond one time constant at 63 per cent and below two at 86 per cent. Step 5 — Distractor analysis: 2.0 s quotes $\\tau$ itself, 1.4 s confuses rise with decay, and 6.4 s doubles the correct interval. Step 6 — Conclude: about 3.2 s is needed.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.5
  {
    sectionId: 'elec-ch4-s5',
    readingTime: 8,
    intro: 'Capacitors are energy devices: the work done moving charge onto the plates is stored in the field, and that storage can be spent as force, re-shared between capacitors, or computed per cubic metre of dielectric. This closing section assembles the energy and force laws of the charged capacitor, the complete series–parallel combination rules with initial conditions (Nilsson), and the duality that pairs every capacitor statement with an inductor statement.',
    objectives: [
      'Derive $W = \\frac{1}{2}CV^2$ by integrating the charging power',
      'Compute energy density and the attractive force between charged plates',
      'Combine capacitors in series and parallel, carrying initial voltages through the reduction',
      'State the inductor combination rules and the capacitor–inductor duality',
      'Account for energy when charge redistributes between capacitors',
    ],
    concepts: [
      {
        term: 'Energy stored — the derivation',
        kind: 'law',
        statement: 'During charging, the instantaneous power delivered is $p = vi = Cv\\,dv/dt$, so the energy added when the p.d. rises from $v$ to $v + dv$ is $Cv\\,dv$ joules. Integrating from 0 to $V$: $$W = \\int_0^V Cv\\,dv = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} \\ \\text{joules}.$$',
        detail: 'The same integration appears in Nilsson as $dw = Cv\\,dv$ leading to $w = \\frac{1}{2}Cv^2$, with the zero-energy reference at zero voltage. Half the energy is the coefficient that a linear rise of voltage “costs” on average.',
      },
      {
        term: 'Energy density in the dielectric',
        kind: 'law',
        statement: 'Dividing stored energy by the dielectric volume $Ad$ gives the energy per cubic metre: $$w = \\frac{1}{2}\\varepsilon E^2 = \\frac{1}{2}DE = \\frac{D^2}{2\\varepsilon} \\ \\text{joules per cubic metre},$$ using $C = \\varepsilon A/d$ and $E = V/d$.',
        detail: 'These expressions are the electrostatic counterparts of the magnetic-field energy density derived in Chapter 6 — Hughes points out the formal similarity explicitly.',
      },
      {
        term: 'Force between oppositely charged plates',
        kind: 'law',
        statement: 'With the charged capacitor disconnected from its supply (charge constant), pulling one plate outwards by $dx$ does work $F\\,dx$ against the attraction; the field energy in the swept volume exactly matches it, giving $$F = \\frac{1}{2}\\varepsilon A\\left(\\frac{V}{x}\\right)^2 = \\frac{1}{2}\\varepsilon A E^2 \\ \\text{newtons}.$$',
        detail: 'Because the charge (and hence $D$ and $E$) is fixed during the displacement, the energy per cubic metre is constant and all the new volume’s energy comes from the mechanical work. This is the electrostatic force law behind attraction-type instruments.',
      },
      {
        term: 'Series capacitors and their initial voltages',
        kind: 'law',
        statement: 'The reciprocal of the equivalent of $n$ series capacitors is the sum of the reciprocals, and the **initial voltage on the equivalent is the algebraic sum of the initial voltages** on the individuals.',
        detail: 'Nilsson’s Example 6.7: a 20 μF (12 V) in series with the parallel group of a 14 μF and a 10 μF–15 μF chain (8 V and 16 V) reduces as $10 \\parallel 15 = 6$ μF, then $6 + 14 = 20$ μF, then $20 \\parallel 20$ (series) = 10 μF, carrying $v\\left(0\\right) = 12 - 8 + 16 = 20$ V around the perimeter.',
      },
      {
        term: 'Parallel capacitors and their initial voltages',
        kind: 'law',
        statement: 'The equivalent of $n$ parallel capacitors is the sum of the capacitances, and they must share a common voltage: the initial voltage across the equivalent equals the common initial voltage across the originals.',
        detail: 'When parallel capacitors start at different voltages, charge flows until the voltages equalize — and the redistribution always dissipates energy (Hughes’s 1.0 J → 0.625 J example of Section 4.2).',
      },
      {
        term: 'Inductor combinations and duality',
        kind: 'insight',
        statement: 'Inductors combine exactly as resistors do — series inductances add, parallel inductances combine reciprocally — and Table 6.1 of Nilsson makes the symmetry explicit: voltage ↔ current, short circuit ↔ open circuit, inductance ↔ capacitance, series ↔ parallel, $v = L\\,di/dt$ ↔ $i = C\\,dv/dt$, $w = \\frac{1}{2}Li^2$ ↔ $w = \\frac{1}{2}Cv^2$.',
        detail: 'The duality means every capacitor result of this chapter reappears in Chapter 6 with $L$ for $C$: the RL natural response $i = I_0e^{-\\left(R/L\\right)t}$ is the mirror of the RC discharge $v = V_0e^{-t/RC}$.',
      },
      {
        term: 'Energy accounting in redistributing charge',
        kind: 'insight',
        statement: 'Charge is conserved when capacitors are interconnected, but **stored energy always falls** unless the initial voltages already matched: the difference is dissipated in resistance, spark and radiation during the equalizing transient.',
        detail: 'Nilsson’s Example 7.4 traces the full ledger: two series capacitors ($5\\ \\mu\\text{F}$ at $-4$ V and $20\\ \\mu\\text{F}$ at $+24$ V, equivalent to 4 μF at 20 V) discharge through 250 kΩ; the stored energy falls from 5800 μJ to 5000 μJ and exactly 800 μJ reaches the resistor — the same 800 μJ computed from the equivalent capacitor, since the equivalent reproduces terminal behaviour.',
      },
    ],
    examples: [
      {
        title: 'Reducing a capacitor network (Nilsson Example 6.7)',
        problem: 'Four capacitors are interconnected between terminals a and b: a 20 μF (initially 12 V) in series with a group consisting of a 10 μF (8 V) in series with a 15 μF (16 V), with a 14 μF in parallel with that series chain. Find the single equivalent capacitance and its initial voltage.',
        steps: [
          { label: 'Step 1: Combine the inner series pair', text: 'The 10 μF and 15 μF in series: $\\left(1/10 + 1/15\\right)^{-1} = 6$ μF.' },
          { label: 'Step 2: Absorb the parallel element', text: 'The 14 μF in parallel with the 6 μF equivalent gives $6 + 14 = 20$ μF.' },
          { label: 'Step 3: Finish the series chain', text: 'The remaining 20 μF (left, 12 V) in series with the new 20 μF: $\\left(1/20 + 1/20\\right)^{-1} = 10$ μF.' },
          { label: 'Step 4: Sum the initial voltages around the perimeter', text: 'KVL on the outer loop of the original network: $v\\left(0\\right) = 12 - 8 + 16 = 20$ V across the equivalent capacitor a–b.' },
        ],
        result: '$C_{\\text{eq}} = 10$ μF with an initial voltage of 20 V — the two-terminal behaviour of the whole network.',
      },
      {
        title: 'Force between charged discs (Hughes Example 5.13)',
        problem: 'Two parallel metal discs, each 100 mm in diameter, are spaced 1.0 mm apart with air as the dielectric. Calculate the force on each disc when the p.d. between them is 1.0 kV.',
        steps: [
          { label: 'Step 1: Plate area', text: '$A = \\pi d^2/4 = 0.7854 \\times \\left(0.1\\right)^2 = 0.007854$ m².' },
          { label: 'Step 2: Potential gradient', text: '$E = V/x = 1000/0.001 = 10^{6}$ V/m.' },
          { label: 'Step 3: Apply the force law', text: '$F = \\frac{1}{2}\\varepsilon_0 A\\left(V/x\\right)^2 = \\frac{1}{2} \\times 8.85 \\times 10^{-12} \\times 0.007854 \\times \\left(10^{6}\\right)^2$.' },
          { label: 'Step 4: Evaluate', text: '$F = 0.035$ N — a small but entirely measurable pull, proportional to $E^2$ and to the plate area.' },
        ],
        result: 'Each disc is attracted to the other with about 0.035 N.',
      },
      {
        title: 'Energy ledger of discharging series capacitors (Nilsson Example 7.4)',
        problem: 'A 5 μF capacitor charged to $-4$ V sits in series with a 20 μF capacitor charged to $+24$ V, and the pair is connected across a 250 kΩ resistor at $t = 0$. Find the voltage and current expressions and account for all the energy.',
        steps: [
          { label: 'Step 1: Equivalent capacitor', text: 'Series combination: $C_{\\text{eq}} = \\left(5 \\times 20\\right)/25 = 4$ μF, charged to $V_0 = 24 - 4 = 20$ V.' },
          { label: 'Step 2: Natural response', text: '$\\tau = \\left(250 \\times 10^{3}\\right)\\left(4 \\times 10^{-6}\\right) = 1$ s, so $v\\left(t\\right) = 20e^{-t}$ V and $i\\left(t\\right) = v/250{,}000 = 80e^{-t}$ μA.' },
          { label: 'Step 3: Individual capacitor voltages', text: 'Integrating the current through each: $v_1\\left(t\\right) = 16e^{-t} - 20$ V and $v_2\\left(t\\right) = 4e^{-t} + 20$ V — they settle at $-20$ V and $+20$ V, whose sum is zero as it must be across the resistorless final circuit.' },
          { label: 'Step 4: Initial stored energy', text: '$w_1 = \\frac{1}{2}\\left(5\\ \\mu\\text{F}\\right)\\left(4\\right)^2 = 40$ μJ and $w_2 = \\frac{1}{2}\\left(20\\ \\mu\\text{F}\\right)\\left(24\\right)^2 = 5760$ μJ — a total of 5800 μJ.' },
          { label: 'Step 5: Final stored energy and the difference', text: 'As $t \\to \\infty$: $w_\\infty = \\frac{1}{2}\\left(5\\right)\\left(400\\right) + \\frac{1}{2}\\left(20\\right)\\left(400\\right) = 5000$ μJ. The resistor receives $\\int_0^{\\infty}\\left(20e^{-t}\\right)\\left(80 \\times 10^{-6}e^{-t}\\right)dt = 800$ μJ — precisely $5800 - 5000$ μJ, and equal to the energy of the equivalent capacitor $\\frac{1}{2}\\left(4\\ \\mu\\text{F}\\right)\\left(20\\right)^2 = 800$ μJ.' },
        ],
        result: '$v = 20e^{-t}$ V, $i = 80e^{-t}$ μA; 5800 μJ start, 5000 μJ remain trapped, 800 μJ reach the resistor — the books balance exactly.',
      },
    ],
    keyTakeaways: [
      'Stored energy is $\\frac{1}{2}CV^2 = \\frac{1}{2}QV = Q^2/2C$; energy density in the field is $\\frac{1}{2}DE = \\frac{1}{2}\\varepsilon E^2$.',
      'The attraction between charged plates at constant charge is $F = \\frac{1}{2}\\varepsilon A E^2$ newtons.',
      'Series capacitors: reciprocals add and initial voltages add algebraically; parallel capacitors: capacitances add and initial voltages must agree.',
      'Inductors combine like resistors (series add, parallel reciprocals) — the exact dual of capacitor rules.',
      'The capacitor–inductor duality exchanges voltage↔current, open↔short, $C$↔$L$ and series↔parallel.',
      'Charge redistribution between capacitors conserves charge but always dissipates energy; the equivalent capacitor correctly predicts the terminal (delivered) energy but not what remains inside each unit.',
    ],
    quiz: [
      {
        q: 'A capacitor is charged to 200 V and stores 1.0 J. If the voltage is doubled to 400 V with the same capacitance, the stored energy becomes:',
        options: ['2 J', '4 J', '0.5 J', '1.41 J'],
        answer: 1,
        explanation: '$W = \\frac{1}{2}CV^2$ is quadratic in voltage: doubling $V$ quadruples the energy, from 1.0 J to 4.0 J.',
      },
      {
        q: 'Two capacitors in series carry initial voltages of $+12$ V, $-8$ V and a third in the chain sits at $+16$ V measured the same way around. The initial voltage of the equivalent capacitor is:',
        options: ['36 V', '20 V', '4 V', '12 V'],
        answer: 1,
        explanation: 'Series initial voltages add algebraically around the loop: $12 - 8 + 16 = 20$ V — Nilsson’s Example 6.7 result.',
      },
      {
        q: 'The dual of the capacitor relation $i = C\\,dv/dt$ is:',
        options: [`$v = C\\,di/dt$`, `$v = L\\,di/dt$`, `$i = L\\,dv/dt$`, `$v = Ri$`],
        answer: 1,
        explanation: 'Under duality, voltage ↔ current and $C$ ↔ $L$: the capacitor’s current–voltage law maps onto the inductor’s $v = L\\,di/dt$.',
      },
      {
        q: 'A charged 50 μF capacitor is connected in parallel with an uncharged 30 μF capacitor. Which quantity is conserved in the redistribution?',
        options: ['The total stored energy', 'The common final voltage', 'The total charge', 'The energy in each capacitor separately'],
        answer: 2,
        explanation: 'Charge simply redistributes between the plates — total $Q$ is fixed. Energy always falls (Hughes: 1.0 J to 0.625 J), the difference becoming heat, spark and radiation.',
      },
      {
        q: 'Two parallel plates of area $A$, separation $x$, hold p.d. $V$ in a dielectric of permittivity $\\varepsilon$ (supply disconnected). The attractive force is:',
        options: [`$\\varepsilon A\\left(V/x\\right)^2$`, `$\\frac{1}{2}\\varepsilon A\\left(V/x\\right)^2$`, `$\\frac{1}{2}\\varepsilon A V/x$`, `$\\frac{1}{2}CV^2$`],
        answer: 1,
        explanation: 'At constant charge, the work $F\\,dx$ supplies the field energy in the swept volume, giving $F = \\frac{1}{2}\\varepsilon A E^2 = \\frac{1}{2}\\varepsilon A\\left(V/x\\right)^2$ newtons.',
      },
    ],
  },
]

export const elecCh4Formulas: FormulaEntry[] = [
  {
    chapterId: 'elec-ch4',
    section: '4.1',
    name: 'Electric field strength',
    formula: 'E = V/d',
    latex: 'E = \\frac{V}{d}',
    note: 'volts per metre — also the force in newtons on a unit charge',
  },
  {
    chapterId: 'elec-ch4',
    section: '4.1',
    name: 'Electric flux density and permittivity',
    formula: 'D = Q/A,  D = εE = ε₀εᵣE',
    latex: 'D = \\frac{Q}{A}, \\quad D = \\varepsilon E = \\varepsilon_0\\varepsilon_r E',
    note: 'ε₀ = 8.85 × 10⁻¹² F/m; εᵣ is the capacitance ratio versus vacuum',
  },
  {
    chapterId: 'elec-ch4',
    section: '4.2',
    name: 'Parallel-plate capacitance',
    formula: 'C = ε₀εᵣA/d',
    latex: 'C = \\frac{\\varepsilon_0\\varepsilon_r A}{d}',
    note: 'multi-plate: use (n − 1)A as the useful plate area',
  },
  {
    chapterId: 'elec-ch4',
    section: '4.2',
    name: 'Charge–voltage relation',
    formula: 'Q = CV,  i = C·dv/dt',
    latex: 'Q = CV, \\quad i = C\\frac{dv}{dt}',
    note: 'the farad: 1 C of charge per volt; current tracks the rate of change of voltage',
  },
  {
    chapterId: 'elec-ch4',
    section: '4.2',
    name: 'Series and parallel capacitors',
    formula: '1/C = 1/C₁ + 1/C₂,  V₁ = V·C₂/(C₁+C₂);  C_par = C₁ + C₂',
    latex: '\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}, \\quad V_1 = V\\frac{C_2}{C_1 + C_2}; \\quad C_{\\text{par}} = C_1 + C_2',
    note: 'mirror image of the resistor rules; the smaller capacitor takes the larger voltage share',
  },
  {
    chapterId: 'elec-ch4',
    section: '4.2',
    name: 'Stored energy',
    formula: 'W = ½CV² = Q²/2C',
    latex: 'W = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}',
    note: 'energy density in the field: ½DE = ½εE² joules per cubic metre',
  },
  {
    chapterId: 'elec-ch4',
    section: '4.4',
    name: 'CR growth (charging)',
    formula: 'v = V(1 − exp(−t/τ)),  τ = RC',
    latex: 'v = V\\left(1 - e^{-t/RC}\\right)',
    note: '63.2 per cent of final value after one time constant; five ends it',
  },
  {
    chapterId: 'elec-ch4',
    section: '4.4',
    name: 'CR decay (discharging) and the general solution',
    formula: 'v = V·exp(−t/τ);  x(t) = X_f + (X₀ − X_f)·exp(−t/τ)',
    latex: 'v = Ve^{-t/RC}; \\quad x\\left(t\\right) = X_f + \\left(X_0 - X_f\\right)e^{-t/\\tau}',
    note: 'the general form solves every first-order natural and step response',
  },
  {
    chapterId: 'elec-ch4',
    section: '4.5',
    name: 'Force between charged plates',
    formula: 'F = ½εA(V/d)² = ½εAE²',
    latex: 'F = \\frac{1}{2}\\varepsilon A\\left(\\frac{V}{d}\\right)^2 = \\frac{1}{2}\\varepsilon AE^2',
    note: 'newtons; derived at constant charge with the supply disconnected',
  },
]
