import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 19
// The Kinetic Theory of Gases
// Sections 19-1 … 19-9 (ids hall-ch19-s1 … hall-ch19-s9)
// Constants: N_A = 6.02×10²³ /mol, k_B = 1.38×10⁻²³ J/K, R = 8.31 J/mol·K.
// Compact density by design: 3 concepts, 1 example, 3 quiz per section.
// ============================================================================

export const hallCh19Content: SectionContent[] = [
  // ------------------------------------------------------------------ 19-1
  {
    sectionId: 'hall-ch19-s1',
    readingTime: 5,
    intro: "Kinetic theory counts molecules, and the counting unit is Avogadro's number — the bridge between the gram-scale of the laboratory and the atom-scale of the gas. One number lets you weigh out a counted population.",
    objectives: [
      "Use Avogadro's number to convert between moles, molecules and mass",
      'Compute the mass of a single molecule from the molar mass',
      'Explain why the mole makes atomic-scale physics measurable with a balance',
    ],
    concepts: [
      {
        term: "Avogadro's number and the mole",
        kind: 'definition',
        statement: "**One mole is the amount of substance containing $N_A = 6.02\\times10^{23}$ elementary entities** (atoms, molecules, ions — whatever is being counted). The number of moles in a sample is $$n = \\frac{N}{N_A},$$ the population divided by the census unit.",
        detail: 'Since 2019 the SI fixes the mole exactly: $N_A = 6.02214076\\times10^{23}$ with no uncertainty, defining the mole the way the meter defines length.',
      },
      {
        term: 'Molar mass: counting by weighing',
        kind: 'method',
        statement: "**The molar mass $M$ (g/mol) is numerically the molecular mass in atomic mass units, so a sample of mass $m$ contains $$n = \\frac{m}{M}$$ moles.** Water: $M = 18.0$ g/mol; nitrogen gas $N_2$: $M = 28.0$ g/mol; oxygen gas: $M = 32.0$ g/mol.",
        detail: 'This is the everyday trick of chemistry: a balance is a molecule counter because every molecule of a species carries the same mass $m_0 = M/N_A$.',
      },
      {
        term: 'The size of the atomic census',
        kind: 'insight',
        statement: "**A single glass of water holds about $10^{25}$ molecules.** With $N_A \\approx 6\\times10^{23}$ per mole, macroscopic samples contain moles of molecules — the enormous factor that later makes the statistical laws of Chapter 20 iron-clad.",
        detail: 'One water molecule has mass $m_0 = M/N_A = 18.0\\times10^{-3}/(6.02\\times10^{23}) \\approx 3\\times10^{-26}$ kg — matter is almost entirely empty space occupied by astonishingly light, astonishingly numerous particles.',
      },
      {
        term: "Avogadro's Number: solution protocol",
        kind: "method",
        statement: "**Solve Avogadro's Number problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic theory with $pV = nRT = NkT$; the working equation is $pV = nRT = NkT$, $K_{\\text{avg}} = \\tfrac32kT$, $v_{\\text{rms}} = \\sqrt{3RT/M}$, $pV^{\\gamma} = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$, $\\text{mol}$, $\\text{K}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$; ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.",
      },
      {
        term: "Avogadro's Number: scales and validity",
        kind: "insight",
        statement: "**Avogadro's Number lives at $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$ and the textbook model holds while ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Avogadro's Number calculation gives seconds when $\\text{Pa}$, $\\text{mol}$, $\\text{K}$ demands meters, or a value orders of magnitude beyond $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Counting the molecules in 10 grams of water',
        problem: 'How many molecules are in a 10.0 g sip of water, and what does one molecule weigh?',
        steps: [
          { label: 'Moles', text: '$n = m/M = 10.0\\ \\mathrm{g}/18.0\\ \\mathrm{g/mol} = 0.556$ mol.' },
          { label: 'Molecules', text: '$N = nN_A = (0.556)(6.02\\times10^{23}) = 3.35\\times10^{23}$ molecules.' },
          { label: 'Per molecule', text: '$m_0 = M/N_A = 0.0180/(6.02\\times10^{23}) = 2.99\\times10^{-26}$ kg.' },
        ],
        result: 'About $3.3\\times10^{23}$ molecules, each of mass $3\\times10^{-26}$ kg — a sip is a census of a third of a mole.',
      },
      {
        title: "Avogadro's Number: mole count check",
        problem: "A $24\\ \\text{g}$ sample of carbon-12 ($M = 12.0\\ \\text{g/mol}$) contains how many moles and atoms?",
        steps: [
          { label: "Moles", text: "$n = m/M = 24/12.0 = 2\\ \\text{mol}$." },
          { label: "Atoms", text: "$N = nN_A = 2\\times 6.02\\times 10^{23} = 1.20e+1\\times 10^{23}$." },
        ],
        result: "$n = 2\\ \\text{mol}$; $N \\approx 1.20e+1\\times 10^{23}$ atoms.",
      },
    ],
    keyTakeaways: [
      '$n = N/N_A = m/M$; Avogadro\'s number $N_A = 6.02\\times10^{23}$ converts counting to weighing.',
      'A single molecule of molar mass $M$ weighs $m_0 = M/N_A$.',
      'Macroscopic samples hold $\\sim10^{25}$ molecules — the huge numbers behind thermodynamics.',
    ],
    quiz: [
      { q: 'How many moles are in 36 g of water ($M = 18.0$ g/mol)?', options: ['1.0 mol', '2.0 mol', '18 mol', '36 mol'], answer: 1, explanation: '$n = m/M = 36/18.0 = 2.0$ mol.' },
      { q: 'One mole of oxygen gas (O₂) contains about how many oxygen atoms?', options: [`$3.01\\times10^{23}$`, `$6.02\\times10^{23}$`, `$1.20\\times10^{24}$`, `$2.41\\times10^{24}$`], answer: 2, explanation: 'A mole of O₂ is $6.02\\times10^{23}$ molecules, and each diatomic molecule carries 2 atoms: $1.20\\times10^{24}$.' },
      { q: 'The mass of one water molecule ($M = 18.0$ g/mol) is about', options: ['$3\\times10^{-26}$ kg', '$3\\times10^{-23}$ kg', '$18\\times10^{-26}$ kg', '$6\\times10^{-23}$ kg'], answer: 0, explanation: '$m_0 = M/N_A = 0.0180\\ \\mathrm{kg}/6.02\\times10^{23} \\approx 3\\times10^{-26}$ kg.' },
    ],
  },

  // ------------------------------------------------------------------ 19-2
  {
    sectionId: 'hall-ch19-s2',
    readingTime: 5,
    intro: 'Dilute gases of every species obey one law to remarkable accuracy: pressure times volume goes as the product of moles, the gas constant and absolute temperature. The ideal gas law is the empirical backbone of this chapter, and its constants come in a macroscopic and a microscopic flavor.',
    objectives: [
      'Apply $pV = nRT = Nk_BT$ with consistent SI units',
      'Relate $R$ and $k_B$ through Avogadro\'s number',
      'Compute isothermal expansion work with $W = nRT\\ln(V_f/V_i)$',
    ],
    concepts: [
      {
        term: 'The ideal gas law',
        kind: 'law',
        statement: "**For a dilute gas — density low, temperature well above condensation — $$pV = nRT = Nk_BT,$$ with $p$ in pascals, $V$ in m³ and $T$ in kelvin.** The law improves as density decreases, and every gas obeys it in the dilute limit.",
        detail: 'Isotherms ($T$ fixed) are hyperbolas $pV = $ const: doubling the volume at fixed temperature halves the pressure. "Standard" conditions — 1 atm ($1.013\\times10^{5}$ Pa) and 273.15 K — give a molar volume of 22.4 L/mol.',
      },
      {
        term: 'Two gas constants',
        kind: 'notation',
        statement: "**The gas constant $R = 8.31$ J/mol·K serves molar bookkeeping; the Boltzmann constant $k_B = R/N_A = 1.38\\times10^{-23}$ J/K serves per-molecule bookkeeping.** Same physics, different census: $nRT$ and $Nk_BT$ are the same product counted by moles or by molecules.",
        detail: 'Keep the pair straight by checking units: $RT$ is a joules-per-mole times kelvin cancelled to plain joules per mole; $k_BT$ is plain joules per molecule.',
      },
      {
        term: 'Work along an isotherm',
        kind: 'method',
        statement: "**An ideal gas expanding isothermally from $V_i$ to $V_f$ does work $$W = nRT\\ln\\frac{V_f}{V_i}.$$** Because $T$ is fixed, $\\Delta E_\\text{int} = 0$ and every joule of work is paid for by heat absorbed: $Q = W$.",
        detail: 'The logarithm is the integral $W = \\int p\\,dV$ with $p = nRT/V$; the area under a hyperbola grows only logarithmically with the volume ratio.',
      },
      {
        term: "Ideal Gases: solution protocol",
        kind: "method",
        statement: "**Solve Ideal Gases problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic theory with $pV = nRT = NkT$; the working equation is $pV = nRT = NkT$, $K_{\\text{avg}} = \\tfrac32kT$, $v_{\\text{rms}} = \\sqrt{3RT/M}$, $pV^{\\gamma} = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$, $\\text{mol}$, $\\text{K}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$; ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.",
      },
      {
        term: "Ideal Gases: scales and validity",
        kind: "insight",
        statement: "**Ideal Gases lives at $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$ and the textbook model holds while ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Ideal Gases calculation gives seconds when $\\text{Pa}$, $\\text{mol}$, $\\text{K}$ demands meters, or a value orders of magnitude beyond $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'One mole doubles its volume isothermally',
        problem: 'One mole of ideal gas at $T = 300$ K expands from $V_i = 0.0200$ m³ to $V_f = 0.0400$ m³, staying in thermal contact with a reservoir. Find the initial and final pressures and the work done.',
        steps: [
          { label: 'Pressures', text: '$p = nRT/V$: $p_i = (1)(8.31)(300)/0.0200 = 1.25\\times10^{5}$ Pa, and $p_f = p_i/2 = 6.23\\times10^{4}$ Pa (hyperbola).' },
          { label: 'Work', text: '$W = nRT\\ln(V_f/V_i) = (8.31)(300)\\ln 2 = 2493\\times0.693 = 1.73\\times10^{3}$ J.' },
          { label: 'First-law check', text: 'Isothermal ideal gas: $\\Delta E_\\text{int} = 0$, so the gas must absorb $Q = 1.73$ kJ from the reservoir.' },
        ],
        result: '$p$ falls from $1.25\\times10^{5}$ Pa to $6.23\\times10^{4}$ Pa while the gas does $1.73$ kJ of work, all of it supplied as absorbed heat.',
      },
      {
        title: "Ideal Gases: mole count check",
        problem: "A $36\\ \\text{g}$ sample of carbon-12 ($M = 12.0\\ \\text{g/mol}$) contains how many moles and atoms?",
        steps: [
          { label: "Moles", text: "$n = m/M = 36/12.0 = 3\\ \\text{mol}$." },
          { label: "Atoms", text: "$N = nN_A = 3\\times 6.02\\times 10^{23} = 1.81e+1\\times 10^{23}$." },
        ],
        result: "$n = 3\\ \\text{mol}$; $N \\approx 1.81e+1\\times 10^{23}$ atoms.",
      },
    ],
    keyTakeaways: [
      '$pV = nRT = Nk_BT$ holds for any dilute gas in SI units.',
      '$R = 8.31$ J/mol·K and $k_B = R/N_A = 1.38\\times10^{-23}$ J/K are the macroscopic and microscopic gas constants.',
      'Isothermal work is $W = nRT\\ln(V_f/V_i)$, exactly balanced by absorbed heat.',
    ],
    quiz: [
      { q: 'A mole of ideal gas at 300 K occupies 0.025 m³. Its pressure is about', options: ['$1.0\\times10^{5}$ Pa', '$2.5\\times10^{3}$ Pa', '$3.3\\times10^{-21}$ Pa', '$1.0\\times10^{7}$ Pa'], answer: 0, explanation: '$p = nRT/V = (8.31)(300)/0.025 \\approx 1.0\\times10^{5}$ Pa, about one atmosphere.' },
      { q: 'The Boltzmann constant equals', options: [`$N_A/R$`, `$R/N_A$`, `$R - N_A$`, `$RN_A$`], answer: 1, explanation: '$k_B = R/N_A$: divide the per-mole constant by the number of molecules per mole.' },
      { q: 'One mole at 300 K doubles its volume isothermally. The work done by the gas is about', options: ['0 J', '$2.5\\times10^{3}$ J', '$7.5\\times10^{3}$ J', '$1.7\\times10^{3}$ J'], answer: 3, explanation: '$W = nRT\\ln 2 = (2493)(0.693) \\approx 1.7$ kJ — logarithmic, not linear, in the volume ratio.' },
    ],
  },

  // ------------------------------------------------------------------ 19-3
  {
    sectionId: 'hall-ch19-s3',
    readingTime: 5,
    intro: 'Pressure is not a gas property — it is what molecules do to a wall. Treating a gas as a swarm of elastic point masses reproduces the measured gas law and, in one step, defines absolute temperature as a measure of molecular motion.',
    objectives: [
      'Reproduce the kinetic-theory pressure formula $pV = \\tfrac{1}{3}Nm_0v_\\text{rms}^2$',
      'Derive and use $v_\\text{rms} = \\sqrt{3RT/M}$',
      'Compare rms speeds of light and heavy gases at the same temperature',
    ],
    concepts: [
      {
        term: 'Pressure from bombardment',
        kind: 'theorem',
        statement: "**A box of $N$ molecules of mass $m_0$ exerts $$pV = \\tfrac{1}{3}N\\,m_0\\,v_\\text{rms}^{2}$$ on its walls.** One molecule hitting the far wall rebounds, handing it momentum $2m_0v_x$; it returns every $2L/v_x$, so its average force is $m_0v_x^{2}/L$. Summing over all molecules and using isotropy ($\\langle v_x^2\\rangle = \\tfrac13\\langle v^2\\rangle$) gives the law.",
        detail: 'Pressure is the time-averaged drumbeat of molecular impacts — room-temperature air pounds each square meter of wall with about $10^{27}$ collisions every second.',
      },
      {
        term: 'The rms speed',
        kind: 'law',
        statement: "**Setting the kinetic result equal to the measured ideal gas law fixes the speed scale: $$v_\\text{rms} = \\sqrt{\\frac{3k_BT}{m_0}} = \\sqrt{\\frac{3RT}{M}}.$$** The heavier the molecule, the slower; the hotter the gas, the faster — as $\\sqrt{T}$.",
        detail: 'The "root-mean-square" label matters: kinetic theory naturally averages $v^2$, so the speed built from it is the root of the mean square, not the plain average speed.',
      },
      {
        term: 'What the agreement fixes',
        kind: 'insight',
        statement: "**Kinetic theory plus the ideal gas law forces $\\tfrac12 m_0 v_\\text{rms}^2 = \\tfrac32 k_BT$: absolute temperature is two-thirds of the mean translational kinetic energy per molecule, for every gas.** This is the microscopic meaning of the Kelvin scale.",
        detail: 'It also explains atmospheric escape: hydrogen at 300 K averages 1.9 km/s, a healthy fraction of Earth\'s 11.2 km/s escape speed, so fast-tail hydrogen leaks away over geological time while oxygen (0.48 km/s average) stays trapped.',
      },
      {
        term: "Pressure, Temperature, and the RMS Speed: solution protocol",
        kind: "method",
        statement: "**Solve Pressure, Temperature, and the RMS Speed problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic theory with $pV = nRT = NkT$; the working equation is $pV = nRT = NkT$, $K_{\\text{avg}} = \\tfrac32kT$, $v_{\\text{rms}} = \\sqrt{3RT/M}$, $pV^{\\gamma} = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$, $\\text{mol}$, $\\text{K}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$; ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.",
      },
      {
        term: "Pressure, Temperature, and the RMS Speed: scales and validity",
        kind: "insight",
        statement: "**Pressure, Temperature, and the RMS Speed lives at $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$ and the textbook model holds while ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Pressure, Temperature, and the RMS Speed calculation gives seconds when $\\text{Pa}$, $\\text{mol}$, $\\text{K}$ demands meters, or a value orders of magnitude beyond $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Hydrogen outruns oxygen',
        problem: 'Compare $v_\\text{rms}$ of hydrogen ($M = 2.02$ g/mol) and oxygen ($M = 32.0$ g/mol) molecules at 300 K.',
        steps: [
          { label: 'Hydrogen', text: '$v_\\text{rms} = \\sqrt{3RT/M} = \\sqrt{(3)(8.31)(300)/0.00202} = \\sqrt{3.70\\times10^{6}} = 1.92\\times10^{3}$ m/s.' },
          { label: 'Oxygen', text: '$v_\\text{rms} = \\sqrt{(3)(8.31)(300)/0.0320} = \\sqrt{2.34\\times10^{5}} = 483$ m/s.' },
          { label: 'Ratio', text: '$1.92\\times10^{3}/483 \\approx 4 = \\sqrt{32.0/2.02}$ — the $M^{-1/2}$ scaling in action.' },
        ],
        result: 'Hydrogen molecules average about $1.9$ km/s, four times oxygen\'s $0.48$ km/s at the same temperature — one reason Earth keeps its oxygen but lost its hydrogen.',
      },
      {
        title: "Pressure, Temperature, and the RMS Speed: $v_{\\text{rms}}$ check",
        problem: "Estimate $v_{\\text{rms}} = \\sqrt{3RT/M}$ for air ($M = 0.029\\ \\text{kg/mol}$) at $T = 350\\ \\text{K}$.",
        steps: [
          { label: "Numerator", text: "$3RT = 3\\times 8.31\\times 350 = 8730\\ \\text{J/mol}$." },
          { label: "Divide", text: "$/M$: 8730/0.029 = 3.01\\times 10^{+5}\\ \\text{m}^2/\\text{s}^2$." },
          { label: "Root", text: "$v_{\\text{rms}} \\approx 549\\ \\text{m/s}$." },
        ],
        result: "$v_{\\text{rms}} \\approx 549\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      'Pressure comes from molecular impacts: $pV = \\tfrac13 N m_0 v_\\text{rms}^2$.',
      '$v_\\text{rms} = \\sqrt{3RT/M}$ — slower for heavier molecules, growing only as $\\sqrt{T}$.',
      'Absolute temperature is proportional to mean translational kinetic energy per molecule.',
    ],
    quiz: [
      { q: 'At fixed temperature, $v_\\text{rms}$ of a gas scales with molar mass $M$ as', options: [`$\\sqrt{M}$`, `$M$`, `$1/M$`, `$1/\\sqrt{M}$`], answer: 3, explanation: '$v_\\text{rms} = \\sqrt{3RT/M}$ — the molar mass sits under the square root in the denominator.' },
      { q: 'Doubling the absolute temperature multiplies $v_\\text{rms}$ by', options: [`$\\sqrt{2}$`, '2', '4', '8'], answer: 0, explanation: 'The speed grows as $\\sqrt{T}$, so $T \\to 2T$ gives a factor $\\sqrt2 \\approx 1.41$.' },
      { q: 'At 300 K, hydrogen molecules ($M = 2.02$ g/mol) have $v_\\text{rms}$ of about', options: ['11 km/s', '1.9 km/s', '483 m/s', '192 m/s'], answer: 1, explanation: '$\\sqrt{(3)(8.31)(300)/0.00202} \\approx 1.9$ km/s — fast, but well below the 11.2 km/s escape speed for the average molecule.' },
    ],
  },

  // ------------------------------------------------------------------ 19-4
  {
    sectionId: 'hall-ch19-s4',
    readingTime: 4,
    intro: 'The kinetic-theory temperature formula converts directly into an energy statement, and that statement becomes the internal energy of the simplest gases: a function of temperature alone.',
    objectives: [
      'Compute mean translational kinetic energy per molecule, $\\tfrac32 k_BT$',
      'Write the internal energy of a monatomic ideal gas, $E_\\text{int} = \\tfrac32 nRT$',
      'Explain why ideal-gas internal energy depends only on temperature',
    ],
    concepts: [
      {
        term: 'Mean translational kinetic energy',
        kind: 'law',
        statement: "**Every molecule of every gas at temperature $T$ carries, on average, $$\\langle K\\rangle = \\tfrac{3}{2}k_BT$$ of translational kinetic energy** — three translational directions, $\\tfrac12 k_BT$ each. At room temperature this is $6.2\\times10^{-21}$ J, about $1/25$ eV.",
        detail: 'Independent of molecular mass: at the same $T$, light molecules move faster and heavy ones slower so that $\\tfrac12 m_0\\langle v^2\\rangle$ comes out identical.',
      },
      {
        term: 'Internal energy of a monatomic ideal gas',
        kind: 'insight',
        statement: "**Summing over the sample, a monatomic ideal gas stores $$E_\\text{int} = \\tfrac{3}{2}nRT$$ — and nothing else.** For ideal gases the molecules neither attract nor rotate nor vibrate, so internal energy is translational kinetic energy alone, a function of the temperature only.",
        detail: 'Because $E_\\text{int}$ depends only on the state (through $T$), changes of internal energy between two states are path-independent — the anchor that made the first law usable.',
      },
      {
        term: 'Absolute zero as an energy floor',
        kind: 'insight',
        statement: '**As $T \\to 0$ the classical translational kinetic energy vanishes with it.** The Kelvin scale bottoms out where molecular translation has no energy left to surrender.',
        detail: 'Quantum mechanics adds a small caveat — a residual zero-point motion — but the classical picture is the right one for gases: temperature is kinetic energy, and zero temperature is zero jiggling.',
      },
      {
        term: "Translational Kinetic Energy: solution protocol",
        kind: "method",
        statement: "**Solve Translational Kinetic Energy problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic theory with $pV = nRT = NkT$; the working equation is $pV = nRT = NkT$, $K_{\\text{avg}} = \\tfrac32kT$, $v_{\\text{rms}} = \\sqrt{3RT/M}$, $pV^{\\gamma} = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$, $\\text{mol}$, $\\text{K}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$; ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.",
      },
      {
        term: "Translational Kinetic Energy: scales and validity",
        kind: "insight",
        statement: "**Translational Kinetic Energy lives at $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$ and the textbook model holds while ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Translational Kinetic Energy calculation gives seconds when $\\text{Pa}$, $\\text{mol}$, $\\text{K}$ demands meters, or a value orders of magnitude beyond $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'The internal energy of a mole of helium',
        problem: 'A balloon holds 1.00 mol of monatomic helium at 300 K. How much translational kinetic energy does it store, per molecule and in total?',
        steps: [
          { label: 'Per molecule', text: '$\\langle K\\rangle = \\tfrac32 k_BT = (1.5)(1.38\\times10^{-23})(300) = 6.21\\times10^{-21}$ J — about $0.039$ eV.' },
          { label: 'Total', text: '$E_\\text{int} = \\tfrac32 nRT = (1.5)(8.31)(300) = 3.74\\times10^{3}$ J.' },
          { label: 'Consistency', text: 'Multiplying $6.21\\times10^{-21}$ J by $N_A = 6.02\\times10^{23}$ returns $3.74\\times10^{3}$ J — the same census, counted both ways.' },
        ],
        result: 'Each helium atom carries $6.2\\times10^{-21}$ J; the mole together stores $3.74$ kJ of translational energy.',
      },
      {
        title: "Translational Kinetic Energy: $v_{\\text{rms}}$ check",
        problem: "Estimate $v_{\\text{rms}} = \\sqrt{3RT/M}$ for air ($M = 0.029\\ \\text{kg/mol}$) at $T = 400\\ \\text{K}$.",
        steps: [
          { label: "Numerator", text: "$3RT = 3\\times 8.31\\times 400 = 9980\\ \\text{J/mol}$." },
          { label: "Divide", text: "$/M$: 9980/0.029 = 3.44\\times 10^{+5}\\ \\text{m}^2/\\text{s}^2$." },
          { label: "Root", text: "$v_{\\text{rms}} \\approx 587\\ \\text{m/s}$." },
        ],
        result: "$v_{\\text{rms}} \\approx 587\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      '$\\langle K\\rangle = \\tfrac32 k_BT$ per molecule — identical for all gases at the same temperature.',
      'Monatomic ideal gas: $E_\\text{int} = \\tfrac32 nRT$, a function of temperature only.',
      'Absolute zero is the vanishing point of classical translational motion.',
    ],
    quiz: [
      { q: 'Helium and oxygen gas sit in the same room at the same temperature. The two gases share the same', options: ['average translational kinetic energy per molecule', 'rms speed', 'molecular mass', 'internal energy per mole'], answer: 0, explanation: '$\\langle K\\rangle = \\tfrac32 k_BT$ depends only on $T$; speeds differ ($v_\\text{rms} \\propto M^{-1/2}$) and energies per mole differ (rotations for O₂).' },
      { q: 'Doubling the absolute temperature does what to the mean translational kinetic energy per molecule?', options: ['Halves it', 'Leaves it unchanged', 'Doubles it', 'Quadruples it'], answer: 2, explanation: '$\\langle K\\rangle \\propto T$ — a linear, not a square-root, relationship.' },
      { q: 'The internal energy of an ideal gas depends only on', options: ['the process used to reach the state', 'its temperature', 'its pressure', 'its volume'], answer: 1, explanation: 'For an ideal gas $E_\\text{int} = (f/2)nRT$ with fixed $f$ — pressure and volume are irrelevant until $T$ changes.' },
    ],
  },

  // ------------------------------------------------------------------ 19-5
  {
    sectionId: 'hall-ch19-s5',
    readingTime: 5,
    intro: 'Molecules in a gas are not dodging one another — each is hit billions of times per second, and the straight flights between hits average only a few hundred molecular diameters. The mean free path sets the scale for diffusion, viscosity and every transport process in a gas.',
    objectives: [
      'Compute the mean free path $\\lambda = 1/(\\sqrt2\\,\\pi d^2 n_V)$',
      'Compute the collision frequency $f = v_\\text{avg}/\\lambda$',
      'Explain how $\\lambda$ scales with pressure at fixed temperature',
    ],
    concepts: [
      {
        term: 'Mean free path',
        kind: 'law',
        statement: "**The average distance a molecule flies between collisions is $$\\lambda = \\frac{1}{\\sqrt{2}\\,\\pi d^{2}\\,n_V},$$** where $d$ is the molecular diameter and $n_V$ the number of molecules per cubic meter.",
        detail: 'A molecule sweeps a collision cylinder of cross-section $\\pi d^2$; the mean free path is where the expected number of targets in that cylinder reaches one.',
      },
      {
        term: 'The moving-target factor',
        kind: 'insight',
        statement: "**The $\\sqrt2$ in the denominator enters because the other molecules are moving too:** the typical relative speed between randomly directed molecules is $\\sqrt{2}$ times the average speed, so collisions occur $\\sqrt2$ more often than a stationary-target calculation predicts.",
        detail: 'This is the same geometry as the random-walk: two uniformly random directions differ, on average, by a right angle\'s worth ($\\langle\\cos\\theta\\rangle = 0$), giving $\\sqrt{\\langle v_\\text{rel}^2\\rangle} = \\sqrt{2}\\,v_\\text{avg}$.',
      },
      {
        term: 'Mean free path and pressure',
        kind: 'insight',
        statement: "**Since $n_V = p/k_BT$, the mean free path is $$\\lambda = \\frac{k_BT}{\\sqrt{2}\\,\\pi d^{2}\\,p}$$ — inversely proportional to pressure at fixed temperature.** In a good laboratory vacuum the flight between collisions stretches to meters or more.",
        detail: 'This is why vacuum technology matters for particle beams and thin-film deposition: below about $10^{-4}$ Pa, molecules simply do not meet one another, or the chamber walls, often enough to matter.',
      },
      {
        term: "Mean Free Path: solution protocol",
        kind: "method",
        statement: "**Solve Mean Free Path problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic theory with $pV = nRT = NkT$; the working equation is $pV = nRT = NkT$, $K_{\\text{avg}} = \\tfrac32kT$, $v_{\\text{rms}} = \\sqrt{3RT/M}$, $pV^{\\gamma} = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$, $\\text{mol}$, $\\text{K}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$; ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.",
      },
      {
        term: "Mean Free Path: scales and validity",
        kind: "insight",
        statement: "**Mean Free Path lives at $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$ and the textbook model holds while ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Mean Free Path calculation gives seconds when $\\text{Pa}$, $\\text{mol}$, $\\text{K}$ demands meters, or a value orders of magnitude beyond $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Air at room conditions: 68 nm between hits',
        problem: 'Estimate the mean free path and collision frequency for a nitrogen molecule in air at 1.0 atm and 300 K, taking $d = 3.70\\times10^{-10}$ m.',
        steps: [
          { label: 'Number density', text: '$n_V = p/k_BT = (1.01\\times10^{5})/[(1.38\\times10^{-23})(300)] = 2.44\\times10^{25}$ m⁻³.' },
          { label: 'Mean free path', text: '$\\lambda = 1/(\\sqrt2\\,\\pi d^2 n_V) = 1/[(1.414)(\\pi)(1.37\\times10^{-19})(2.44\\times10^{25})] = 1/(1.48\\times10^{7}) = 6.7\\times10^{-8}$ m.' },
          { label: 'Collision rate', text: 'With $v_\\text{avg} \\approx 476$ m/s, $f = v_\\text{avg}/\\lambda = 476/(6.7\\times10^{-8}) \\approx 7\\times10^{9}$ collisions per second.' },
        ],
        result: 'About $67$ nm — some 180 molecular diameters — and a collision every $10^{-10}$ s: a smell crossing a still room is slow because the molecules are endlessly re-routed, even though each flies at rifle-bullet speed.',
      },
      {
        title: "Mean Free Path: $v_{\\text{rms}}$ check",
        problem: "Estimate $v_{\\text{rms}} = \\sqrt{3RT/M}$ for air ($M = 0.029\\ \\text{kg/mol}$) at $T = 300\\ \\text{K}$.",
        steps: [
          { label: "Numerator", text: "$3RT = 3\\times 8.31\\times 300 = 7480\\ \\text{J/mol}$." },
          { label: "Divide", text: "$/M$: 7480/0.029 = 2.58\\times 10^{+5}\\ \\text{m}^2/\\text{s}^2$." },
          { label: "Root", text: "$v_{\\text{rms}} \\approx 508\\ \\text{m/s}$." },
        ],
        result: "$v_{\\text{rms}} \\approx 508\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      '$\\lambda = 1/(\\sqrt2\\pi d^2 n_V)$: tighter packing or fatter molecules means shorter flights.',
      'The $\\sqrt2$ corrects for moving targets; collision frequency is $f = v_\\text{avg}/\\lambda \\sim 10^{9}$–$10^{10}$ per second for air.',
      'At fixed $T$, $\\lambda \\propto 1/p$ — vacuum buys you free flight.',
    ],
    quiz: [
      { q: 'Halving the number density of a gas (fixed $T$, fixed $d$) does what to the mean free path?', options: ['Quadruples it', 'Halves it', 'Doubles it', 'Leaves it unchanged'], answer: 2, explanation: '$\\lambda \\propto 1/n_V$: half the targets means twice the room to fly between hits.' },
      { q: 'The factor $\\sqrt{2}$ in $\\lambda = 1/(\\sqrt2\\pi d^2 n_V)$ is present because', options: ['molecules are assumed spherical', 'the target molecules are also moving, raising the typical relative speed by $\\sqrt2$', 'of the $T^4$ radiation law', 'the gas is monatomic'], answer: 1, explanation: 'Random directions make the mean relative speed $\\sqrt2$ times the mean speed; collisions therefore come $\\sqrt2$ more often.' },
      { q: 'For air at room conditions the mean free path is closest to', options: ['67 nm', '67 μm', '67 pm', '6.7 mm'], answer: 0, explanation: 'With $n_V \\approx 2.4\\times10^{25}$ m⁻³ and $d \\approx 3.7\\times10^{-10}$ m, $\\lambda \\approx 6.7\\times10^{-8}$ m.' },
    ],
  },

  // ------------------------------------------------------------------ 19-6
  {
    sectionId: 'hall-ch19-s6',
    readingTime: 6,
    intro: 'Molecules in a gas do not share one speed; they share a distribution. Maxwell\'s formula for it — arrived at before anyone could measure it — is one of the great triumphs of statistical physics, and its three characteristic speeds and hot tails govern everything from atmospheric escape to reaction rates.',
    objectives: [
      'State the Maxwell–Boltzmann speed distribution and the meaning of its area',
      'Compute the most probable, mean and rms speeds and order them',
      'Predict how the distribution changes when temperature rises',
    ],
    concepts: [
      {
        term: 'The Maxwell–Boltzmann distribution',
        kind: 'law',
        statement: "**The fraction of molecules with speeds between $v$ and $v + dv$ is $P(v)\\,dv$, with $$P(v) = 4\\pi\\left(\\frac{M}{2\\pi RT}\\right)^{3/2} v^{2} e^{-Mv^{2}/2RT}.$$** The $v^2$ factor says faster states are more numerous; the Gaussian tail says they are exponentially rarer. The area under the whole curve is exactly 1.",
        detail: 'Maxwell derived it in 1860 from nothing but isotropy and independence of velocity components; the first experimental confirmation came half a century later with molecular beams.',
      },
      {
        term: 'Three characteristic speeds',
        kind: 'notation',
        statement: "**Each way of averaging the distribution gives a different speed: most probable $$v_P = \\sqrt{2RT/M},$$ mean $$v_\\text{avg} = \\sqrt{8RT/\\pi M} \\approx 1.13\\,v_P,$$ rms $$v_\\text{rms} = \\sqrt{3RT/M} \\approx 1.22\\,v_P.$$** Thus $v_P < v_\\text{avg} < v_\\text{rms}$ always.",
        detail: 'The ordering is the signature of a right-skewed curve: the mean sits above the mode because of the long high-speed tail, and the rms higher still because squaring weights the tail harder.',
      },
      {
        term: 'What raising the temperature does',
        kind: 'insight',
        statement: "**Heating shifts the peak to higher speed as $\\sqrt{T}$ and lowers the peak height as $1/\\sqrt{T}$, keeping the area at 1.** The high-speed tail thickens dramatically — a small rise in $T$ multiplies the population far out on the tail by a large factor.",
        detail: 'That exponential sensitivity is why reaction rates, evaporation and atmospheric escape are so temperature-sensitive: each is gated by rare fast molecules from the tail.',
      },
      {
        term: "The Distribution of Molecular Speeds: solution protocol",
        kind: "method",
        statement: "**Solve The Distribution of Molecular Speeds problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic theory with $pV = nRT = NkT$; the working equation is $pV = nRT = NkT$, $K_{\\text{avg}} = \\tfrac32kT$, $v_{\\text{rms}} = \\sqrt{3RT/M}$, $pV^{\\gamma} = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$, $\\text{mol}$, $\\text{K}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$; ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.",
      },
      {
        term: "The Distribution of Molecular Speeds: scales and validity",
        kind: "insight",
        statement: "**The Distribution of Molecular Speeds lives at $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$ and the textbook model holds while ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a The Distribution of Molecular Speeds calculation gives seconds when $\\text{Pa}$, $\\text{mol}$, $\\text{K}$ demands meters, or a value orders of magnitude beyond $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    figures: [
      {
        caption: "The Maxwell–Boltzmann speed distribution $P(v)$ for nitrogen ($M = 28.0$ g/mol) at $T = 300$ K and $T = 1200$ K. Quadrupling $T$ shifts the most probable speed by $\\sqrt{4} = 2$ (from 422 to 844 m/s) while flattening and broadening the peak; the area under each curve remains exactly 1.",
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maxwell-Boltzmann speed distributions at 300 K and 1200 K"><line x1="70" y1="300" x2="700" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="70" y1="300" x2="70" y2="50" stroke="currentColor" stroke-width="1.5"/><line x1="70" y1="300" x2="70" y2="306" stroke="currentColor" stroke-width="1.5"/><line x1="225" y1="300" x2="225" y2="306" stroke="currentColor" stroke-width="1.5"/><line x1="380" y1="300" x2="380" y2="306" stroke="currentColor" stroke-width="1.5"/><line x1="535" y1="300" x2="535" y2="306" stroke="currentColor" stroke-width="1.5"/><line x1="690" y1="300" x2="690" y2="306" stroke="currentColor" stroke-width="1.5"/><text x="70" y="322" text-anchor="middle" font-size="13" fill="currentColor">0</text><text x="225" y="322" text-anchor="middle" font-size="13" fill="currentColor">500</text><text x="380" y="322" text-anchor="middle" font-size="13" fill="currentColor">1000</text><text x="535" y="322" text-anchor="middle" font-size="13" fill="currentColor">1500</text><text x="690" y="322" text-anchor="middle" font-size="13" fill="currentColor">2000</text><text x="385" y="345" text-anchor="middle" font-size="15" fill="currentColor">speed v (m/s)</text><text x="30" y="175" font-size="15" fill="currentColor" transform="rotate(-90 30 175)" text-anchor="middle">probability density P(v)</text><path d="M70.0,300.0 L 79.9,296.3 L 89.8,285.6 L 99.8,268.6 L 109.7,246.4 L 119.6,220.5 L 129.5,192.5 L 139.4,164.2 L 149.4,137.3 L 159.3,113.2 L 169.2,93.3 L 179.1,78.4 L 189.0,68.9 L 199.0,65.1 L 208.9,66.7 L 218.8,73.4 L 228.7,84.2 L 238.6,98.5 L 248.6,115.3 L 258.5,133.7 L 268.4,152.7 L 278.3,171.7 L 288.2,190.1 L 298.2,207.2 L 308.1,222.9 L 318.0,236.9 L 327.9,249.1 L 337.8,259.5 L 347.8,268.3 L 357.7,275.5 L 367.6,281.3 L 377.5,285.9 L 387.4,289.6 L 397.4,292.4 L 407.3,294.5 L 417.2,296.1 L 427.1,297.2 L 437.0,298.1 L 447.0,298.7 L 456.9,299.1 L 466.8,299.4 L 476.7,299.6 L 486.6,299.7 L 496.6,299.8 L 506.5,299.9 L 516.4,299.9 L 526.3,300.0 L 536.2,300.0 L 546.2,300.0 L 556.1,300.0 L 566.0,300.0 L 575.9,300.0 L 585.8,300.0 L 595.8,300.0 L 605.7,300.0 L 615.6,300.0 L 625.5,300.0 L 635.4,300.0 L 645.4,300.0 L 655.3,300.0 L 665.2,300.0 L 675.1,300.0 L 685.0,300.0" fill="none" stroke="currentColor" stroke-width="3" opacity="0.95"/><path d="M70.0,300.0 L 79.9,299.5 L 89.8,298.2 L 99.8,295.9 L 109.7,292.8 L 119.6,288.9 L 129.5,284.3 L 139.4,279.0 L 149.4,273.2 L 159.3,266.9 L 169.2,260.2 L 179.1,253.3 L 189.0,246.2 L 199.0,239.1 L 208.9,232.1 L 218.8,225.2 L 228.7,218.6 L 238.6,212.4 L 248.6,206.6 L 258.5,201.4 L 268.4,196.7 L 278.3,192.6 L 288.2,189.2 L 298.2,186.5 L 308.1,184.4 L 318.0,183.1 L 327.9,182.5 L 337.8,182.6 L 347.8,183.4 L 357.7,184.7 L 367.6,186.7 L 377.5,189.2 L 387.4,192.1 L 397.4,195.5 L 407.3,199.3 L 417.2,203.3 L 427.1,207.7 L 437.0,212.2 L 447.0,216.8 L 456.9,221.6 L 466.8,226.4 L 476.7,231.1 L 486.6,235.9 L 496.6,240.5 L 506.5,245.0 L 516.4,249.4 L 526.3,253.6 L 536.2,257.6 L 546.2,261.5 L 556.1,265.1 L 566.0,268.4 L 575.9,271.6 L 585.8,274.5 L 595.8,277.3 L 605.7,279.8 L 615.6,282.1 L 625.5,284.1 L 635.4,286.0 L 645.4,287.7 L 655.3,289.3 L 665.2,290.7 L 675.1,291.9 L 685.0,293.0" fill="none" stroke="currentColor" stroke-width="2.5" opacity="0.55"/><line x1="201" y1="65" x2="201" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.4"/><line x1="332" y1="183" x2="332" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.4"/><text x="201" y="48" text-anchor="middle" font-size="14" fill="currentColor">v<tspan dy="4" font-size="11">P</tspan><tspan dy="-4">(300 K) = 422 m/s</tspan></text><text x="375" y="155" text-anchor="middle" font-size="14" fill="currentColor">v<tspan dy="4" font-size="11">P</tspan><tspan dy="-4">(1200 K) = 844 m/s</tspan></text><text x="255" y="80" text-anchor="start" font-size="14" fill="currentColor" opacity="0.95">T = 300 K</text><text x="470" y="247" text-anchor="start" font-size="14" fill="currentColor" opacity="0.7">T = 1200 K</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Three speeds for oxygen at room temperature',
        problem: 'For oxygen gas ($M = 32.0$ g/mol) at 300 K, find the most probable, mean and rms speeds.',
        steps: [
          { label: 'Most probable', text: '$v_P = \\sqrt{2RT/M} = \\sqrt{(2)(8.31)(300)/0.0320} = \\sqrt{1.56\\times10^{5}} = 395$ m/s.' },
          { label: 'Mean', text: '$v_\\text{avg} = \\sqrt{8RT/\\pi M} = (1.128)(395) = 446$ m/s.' },
          { label: 'Rms', text: '$v_\\text{rms} = \\sqrt{3RT/M} = (1.225)(395) = 483$ m/s.' },
        ],
        result: '$v_P = 395$ m/s $< v_\\text{avg} = 446$ m/s $< v_\\text{rms} = 483$ m/s — the universal ordering stamped by the asymmetric tail.',
      },
      {
        title: "The Distribution of Molecular Speeds: $v_{\\text{rms}}$ check",
        problem: "Estimate $v_{\\text{rms}} = \\sqrt{3RT/M}$ for air ($M = 0.029\\ \\text{kg/mol}$) at $T = 350\\ \\text{K}$.",
        steps: [
          { label: "Numerator", text: "$3RT = 3\\times 8.31\\times 350 = 8730\\ \\text{J/mol}$." },
          { label: "Divide", text: "$/M$: 8730/0.029 = 3.01\\times 10^{+5}\\ \\text{m}^2/\\text{s}^2$." },
          { label: "Root", text: "$v_{\\text{rms}} \\approx 549\\ \\text{m/s}$." },
        ],
        result: "$v_{\\text{rms}} \\approx 549\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      '$P(v) = 4\\pi(M/2\\pi RT)^{3/2}v^2e^{-Mv^2/2RT}$; its total area is 1 at every temperature.',
      '$v_P : v_\\text{avg} : v_\\text{rms} = 1 : 1.128 : 1.225$, all proportional to $\\sqrt{T/M}$.',
      'Higher $T$: peak moves right as $\\sqrt{T}$, drops as $1/\\sqrt{T}$, tail fattens — the lever that controls escape and reaction rates.',
    ],
    quiz: [
      { q: 'For any gas in equilibrium, the order of the characteristic speeds is', options: [`$v_P > v_\\text{avg} > v_\\text{rms}$`, `$v_\\text{avg} > v_\\text{rms} > v_P$`, `$v_\\text{rms} > v_\\text{avg} > v_P$`, 'all three are equal'], answer: 2, explanation: 'The long high-speed tail pulls the mean above the mode and the rms above both: $v_P < v_\\text{avg} < v_\\text{rms}$.' },
      { q: 'When a gas is heated at fixed volume, the peak of $P(v)$', options: ['moves to higher speed and becomes lower, keeping the area equal to 1', 'moves to higher speed and becomes higher', 'stays in place but sharpens', 'moves to lower speed and broadens'], answer: 0, explanation: 'The peak scales as $\\sqrt{T}$ and its height as $1/\\sqrt{T}$; normalization keeps the area at exactly 1.' },
      { q: 'For oxygen at 300 K, the most probable speed is about', options: ['483 m/s', '446 m/s', '395 m/s', '276 m/s'], answer: 2, explanation: '$v_P = \\sqrt{2RT/M} = 395$ m/s; 446 and 483 are the mean and rms speeds.' },
    ],
  },

  // ------------------------------------------------------------------ 19-7
  {
    sectionId: 'hall-ch19-s7',
    readingTime: 5,
    intro: 'How much heat does a mole of gas need to warm by one degree? Kinetic theory answers at once for constant volume, and the first law itself supplies the constant-pressure answer — one gas constant larger, because a heated gas at constant pressure must also push the atmosphere out of the way.',
    objectives: [
      'Use $Q = nC_V\\Delta T$ and $Q = nC_P\\Delta T$ for ideal-gas heating',
      'Derive and explain $C_P - C_V = R$',
      'Compute the heat-capacity ratio $\\gamma$ for monatomic and diatomic gases',
    ],
    concepts: [
      {
        term: 'Molar specific heat at constant volume',
        kind: 'definition',
        statement: "**Heating $n$ moles of gas held at constant volume by $\\Delta T$ takes $$Q = nC_V\\Delta T.$$** For a monatomic ideal gas kinetic theory gives $C_V = \\tfrac32 R = 12.5$ J/mol·K, exactly the translational energy $\\Delta E_\\text{int} = \\tfrac32 nR\\Delta T$.",
        detail: 'At constant volume there is no work to fund, so every joule goes into internal energy — $C_V$ is the direct price of warming the molecules.',
      },
      {
        term: "Why $C_P = C_V + R$",
        kind: 'law',
        statement: "**At constant pressure the gas must also do expansion work $p\\Delta V = nR\\Delta T$ (from the ideal gas law), so $$C_P = C_V + R.$$** For monatomic gas: $C_P = \\tfrac52 R = 20.8$ J/mol·K.",
        detail: 'The difference is pure bookkeeping, not new physics: one extra mole-times-R of joules per kelvin, spent pushing the piston outward rather than warming the gas.',
      },
      {
        term: 'The heat-capacity ratio γ',
        kind: 'notation',
        statement: "**The ratio $$\\gamma = \\frac{C_P}{C_V}$$ is 1.67 for monatomic and 1.40 for ordinary diatomic gases.** It measures how steeply adiabatic curves dive in a $pV$ diagram, and it is the single parameter of Section 19-9.",
        detail: 'Because $C_P > C_V$ always, $\\gamma > 1$ for every gas — the fact that makes adiabats steeper than isotherms.',
      },
      {
        term: "The Molar Specific Heats of an Ideal Gas: solution protocol",
        kind: "method",
        statement: "**Solve The Molar Specific Heats of an Ideal Gas problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic theory with $pV = nRT = NkT$; the working equation is $pV = nRT = NkT$, $K_{\\text{avg}} = \\tfrac32kT$, $v_{\\text{rms}} = \\sqrt{3RT/M}$, $pV^{\\gamma} = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$, $\\text{mol}$, $\\text{K}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$; ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.",
      },
      {
        term: "The Molar Specific Heats of an Ideal Gas: scales and validity",
        kind: "insight",
        statement: "**The Molar Specific Heats of an Ideal Gas lives at $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$ and the textbook model holds while ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a The Molar Specific Heats of an Ideal Gas calculation gives seconds when $\\text{Pa}$, $\\text{mol}$, $\\text{K}$ demands meters, or a value orders of magnitude beyond $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Heating helium two ways',
        problem: 'Heat 2.00 mol of monatomic helium by $\\Delta T = 50$ K, once in a rigid box and once in a piston cylinder at constant pressure. Compare the heat required.',
        steps: [
          { label: 'Constant volume', text: '$Q_V = nC_V\\Delta T = (2.00)(12.5)(50) = 1250$ J.' },
          { label: 'Constant pressure', text: '$Q_p = nC_P\\Delta T = (2.00)(20.8)(50) = 2080$ J.' },
          { label: 'The difference', text: '$Q_p - Q_V = 830$ J $= nR\\Delta T = (2.00)(8.31)(50) = 831$ J — exactly the expansion work at constant pressure.' },
        ],
        result: 'The constant-pressure heating costs $2080$ J versus $1250$ J — the extra $831$ J is the $p\\,\\Delta V$ work of pushing the piston.',
      },
      {
        title: "The Molar Specific Heats of an Ideal Gas: adiabatic squeeze",
        problem: "One mole of monatomic gas ($\\gamma = 5/3 \\approx 1.67$; use $1.40$ for air) is compressed adiabatically from $2.0\\ \\text{L}$ to $1.0\\ \\text{L}$ starting at $1.01\\times 10^5\\ \\text{Pa}$. Estimate the final pressure.",
        steps: [
          { label: "Relation", text: "$p_1V_1^{\\gamma} = p_2V_2^{\\gamma}$." },
          { label: "Ratio", text: "$p_2 = p_1(V_1/V_2)^{\\gamma} = 1.01\\times 10^5\\times 2^{1.40}$." },
          { label: "Compute", text: "$2^{1.40} \\approx 2.64$, so $p_2 \\approx 2.67\\times 10^5\\ \\text{Pa}$." },
        ],
        result: "$p_2 \\approx 2.7\\times 10^5\\ \\text{Pa}$.",
      },
    ],
    keyTakeaways: [
      '$Q = nC_V\\Delta T$ at constant volume; $C_V = \\tfrac32R$ for a monatomic ideal gas.',
      '$C_P = C_V + R$ because constant-pressure heating must also pay for expansion work.',
      '$\\gamma = C_P/C_V$: 1.67 monatomic, 1.40 diatomic — the adiabatic exponent.',
    ],
    quiz: [
      { q: 'For an ideal gas, $C_P - C_V$ equals', options: [`$k_B$`, '0', `$R$`, `$\\gamma$`], answer: 2, explanation: 'The one-gas-constant gap is the constant-pressure expansion work per mole per kelvin.' },
      { q: 'A monatomic ideal gas has $C_V =$', options: [`$R/2$`, `$\\tfrac32 R$`, `$\\tfrac52 R$`, `$3R$`], answer: 1, explanation: 'Three translational degrees of freedom at $\\tfrac12R$ each: $C_V = \\tfrac32R = 12.5$ J/mol·K.' },
      { q: 'For a diatomic gas such as nitrogen at room temperature, $\\gamma$ is about', options: ['1.67', '1.33', '1.25', '1.40'], answer: 3, explanation: 'Five active degrees of freedom give $C_V = \\tfrac52R$, $C_P = \\tfrac72R$, $\\gamma = 7/5 = 1.40$.' },
    ],
  },

  // ------------------------------------------------------------------ 19-8
  {
    sectionId: 'hall-ch19-s8',
    readingTime: 5,
    intro: 'Why is $C_V$ of nitrogen $5R/2$ rather than $3R/2$? Because molecules can store energy in rotation and vibration as well as translation. Equipartition counts the channels — and its failure at low temperature was the first unmistakable hint of quantum mechanics.',
    objectives: [
      'State the equipartition theorem and the energy per degree of freedom',
      "Count degrees of freedom for monatomic, diatomic and polyatomic gases and compute $C_V$",
      'Explain the temperature dependence of hydrogen\'s heat capacity as quantum freeze-out',
    ],
    concepts: [
      {
        term: 'The equipartition theorem',
        kind: 'theorem',
        statement: "**In thermal equilibrium, every independent quadratic degree of freedom of a molecule carries mean energy $$\\tfrac{1}{2}k_BT \\ \\text{per molecule}\\quad(\\tfrac12 R\\ \\text{per mole}),$$ whatever its nature — translational, rotational or vibrational.**",
        detail: 'The theorem is the energy side of the Maxwell–Boltzmann machinery: a quadratic energy term coupled to a thermal reservoir always equilibrates to $\\tfrac12k_BT$.',
      },
      {
        term: 'Counting degrees of freedom',
        kind: 'method',
        statement: "**A molecule has $f = 3$ translational coordinates; diatomics add 2 rotational ones ($f = 5$); each vibration adds 2 more (kinetic + potential, so $f = 7$ for a vibrating diatomic). Then $$C_V = \\tfrac{f}{2}R,\\qquad E_\\text{int} = \\tfrac{f}{2}nRT.$$**",
        detail: 'Monatomic: $C_V = 3R/2 = 12.5$; diatomic at room temperature: $5R/2 = 20.8$ (two rotation axes carry energy; rotation about the bond does not, by its tiny moment of inertia) — both beautifully confirmed by measurement.',
      },
      {
        term: 'The quantum hint',
        kind: 'insight',
        statement: "**Equipartition overcounts at low temperature: energy comes in quanta, and a mode only joins in when $k_BT$ exceeds its level spacing.** Hydrogen\'s $C_V$ climbs in steps — $\\tfrac32R$ below about 80 K (translation only), $\\tfrac52R$ from roughly 250–1000 K (rotation joins), toward $\\tfrac72R$ above (vibration joins).",
        detail: 'The measured steps in $C_V(T)$ were worked out before quantum theory existed and cried out for explanation: classical equipartition, which always counts every mode, cannot produce a plateau. Discrete energy levels can.',
      },
      {
        term: "Degrees of Freedom and Molar Specific Heats: solution protocol",
        kind: "method",
        statement: "**Solve Degrees of Freedom and Molar Specific Heats problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic theory with $pV = nRT = NkT$; the working equation is $pV = nRT = NkT$, $K_{\\text{avg}} = \\tfrac32kT$, $v_{\\text{rms}} = \\sqrt{3RT/M}$, $pV^{\\gamma} = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$, $\\text{mol}$, $\\text{K}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$; ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.",
      },
      {
        term: "Degrees of Freedom and Molar Specific Heats: scales and validity",
        kind: "insight",
        statement: "**Degrees of Freedom and Molar Specific Heats lives at $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$ and the textbook model holds while ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Degrees of Freedom and Molar Specific Heats calculation gives seconds when $\\text{Pa}$, $\\text{mol}$, $\\text{K}$ demands meters, or a value orders of magnitude beyond $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Nitrogen, cool and hot',
        problem: 'For 1.00 mol of nitrogen at 300 K and again at 2500 K (where vibration participates), compute $C_V$ and the internal energy.',
        steps: [
          { label: 'At 300 K', text: 'Rotation active, vibration frozen: $f = 5$, so $C_V = \\tfrac52R = 20.8$ J/mol·K and $E_\\text{int} = \\tfrac52(8.31)(300) = 6.24$ kJ.' },
          { label: 'At 2500 K', text: 'Vibration joins: $f = 7$, so $C_V = \\tfrac72R = 29.1$ J/mol·K and $E_\\text{int} = \\tfrac72(8.31)(2500) = 72.7$ kJ.' },
          { label: 'Reading it', text: 'The hotter gas stores energy in two channels the cooler one does not have — the extra 2 degrees of freedom raise the molar energy at 2500 K by 40% over the $f = 5$ value.' },
        ],
        result: '$C_V$ rises from 20.8 to 29.1 J/mol·K as vibrational modes unfreeze — equipartition with a quantum gatekeeper.',
      },
      {
        title: "Degrees of Freedom and Molar Specific Heats: adiabatic squeeze",
        problem: "One mole of monatomic gas ($\\gamma = 5/3 \\approx 1.67$; use $1.40$ for air) is compressed adiabatically from $2.0\\ \\text{L}$ to $1.0\\ \\text{L}$ starting at $1.01\\times 10^5\\ \\text{Pa}$. Estimate the final pressure.",
        steps: [
          { label: "Relation", text: "$p_1V_1^{\\gamma} = p_2V_2^{\\gamma}$." },
          { label: "Ratio", text: "$p_2 = p_1(V_1/V_2)^{\\gamma} = 1.01\\times 10^5\\times 2^{1.40}$." },
          { label: "Compute", text: "$2^{1.40} \\approx 2.64$, so $p_2 \\approx 2.67\\times 10^5\\ \\text{Pa}$." },
        ],
        result: "$p_2 \\approx 2.7\\times 10^5\\ \\text{Pa}$.",
      },
    ],
    keyTakeaways: [
      'Equipartition: each quadratic degree of freedom carries $\\tfrac12k_BT$ per molecule.',
      '$f = 3$ (monatomic), 5 (diatomic with rotation), 7 (with vibration); $C_V = (f/2)R$.',
      'Heat capacities step with temperature as modes freeze out — the quantum hint that broke classical physics.',
    ],
    quiz: [
      { q: 'By equipartition, each quadratic degree of freedom stores, per molecule,', options: [`$k_BT$`, `$\\tfrac32 k_BT$`, `$\\tfrac12 k_BT$`, `$2k_BT$`], answer: 2, explanation: 'One quadratic channel, half a $k_BT$ — the 3 translational ones together make $\\tfrac32k_BT$.' },
      { q: 'A diatomic ideal gas at room temperature has how many active degrees of freedom?', options: ['3', '5', '6', '7'], answer: 1, explanation: 'Translation (3) + the two rotations with appreciable moment of inertia (2) = 5; vibration is still frozen out.' },
      { q: "At very low temperature hydrogen's $C_V$ falls to $\\tfrac32R$ because", options: ['rotational energy levels are too widely spaced for $k_BT$ to excite them', 'the molecules dissociate', 'the gas becomes monatomic', 'translation also freezes'], answer: 0, explanation: 'Quantum level spacing: with $k_BT$ below the gap, rotation cannot be excited, so only the 3 translational modes store energy.' },
    ],
  },

  // ------------------------------------------------------------------ 19-9
  {
    sectionId: 'hall-ch19-s9',
    readingTime: 7,
    intro: 'Compress a gas quickly — no time for heat — and it warms; let it expand against a piston without heat input and it cools. Adiabatic processes power diesel engines and shape the temperature profile of the atmosphere. Their governing curve, $pV^\\gamma = $ constant, is derived from the first law in the masters tier below.',
    objectives: [
      'Apply the adiabatic relations $pV^\\gamma = $ const and $TV^{\\gamma-1} = $ const',
      'Compute temperature and pressure changes for adiabatic compression or expansion',
      'Explain why adiabats are steeper than isotherms, and why free expansion is different',
    ],
    concepts: [
      {
        term: 'Adiabatic means no heat',
        kind: 'law',
        statement: "**A quasi-static adiabatic process has $Q = 0$, so the first law reads $$\\Delta E_\\text{int} = -W.$$** Compress the gas (work done on it, $W < 0$) and the internal energy — the temperature — rises; let it expand doing work and it cools.",
        detail: 'Speed or insulation buys adiabaticity: sound waves, pump strokes and rising air parcels are all effectively adiabatic because heat conduction is far slower than the process.',
      },
      {
        term: 'The adiabatic relations',
        kind: 'law',
        statement: "**Along a quasi-static adiabat of an ideal gas with constant $\\gamma$, $$pV^{\\gamma} = \\text{const},\\qquad TV^{\\gamma-1} = \\text{const}.$$** Work done by the gas: $$W = \\frac{p_iV_i - p_fV_f}{\\gamma - 1} = nC_V(T_i - T_f).$$",
        detail: 'The masters tier derives $pV^\\gamma$ from $nC_V\\,dT = -p\\,dV$ in three lines of calculus — the cleanest example in the book of a thermodynamic law emerging from the first law.',
      },
      {
        term: 'Steepness, and the free-expansion caveat',
        kind: 'insight',
        statement: "**An adiabat through any point falls $\\gamma$ times steeper than the isotherm through that point** (slopes $-\\gamma p/V$ versus $-p/V$), because expansion along an adiabat loses both pressure and temperature. **Free expansion into a vacuum is adiabatic but not quasi-static: no piston, no work, and the ideal gas does not cool — $pV^\\gamma$ does not apply.**",
        detail: 'The two processes look similar in a diagram (gas rushes into a bigger volume) but are thermodynamically different worlds: one is a controlled curve of equilibrium states, the other an irreversible jump between two equilibrium states with no quasi-static path between them.',
      },
      {
        term: "The Adiabatic Expansion of an Ideal Gas: solution protocol",
        kind: "method",
        statement: "**Solve The Adiabatic Expansion of an Ideal Gas problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic theory with $pV = nRT = NkT$; the working equation is $pV = nRT = NkT$, $K_{\\text{avg}} = \\tfrac32kT$, $v_{\\text{rms}} = \\sqrt{3RT/M}$, $pV^{\\gamma} = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$, $\\text{mol}$, $\\text{K}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$; ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.",
      },
      {
        term: "The Adiabatic Expansion of an Ideal Gas: scales and validity",
        kind: "insight",
        statement: "**The Adiabatic Expansion of an Ideal Gas lives at $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$ and the textbook model holds while ideal, dilute, equilibrium gas; $\\gamma = 5/3$ monatomic, $7/5$ diatomic.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a The Adiabatic Expansion of an Ideal Gas calculation gives seconds when $\\text{Pa}$, $\\text{mol}$, $\\text{K}$ demands meters, or a value orders of magnitude beyond $v_{\\text{rms}}(\\text{air},300\\ \\text{K}) \\approx 517\\ \\text{m/s}$; $RT \\approx 2.5\\ \\text{kJ/mol}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Squeezing a monatomic gas to half its volume',
        problem: 'A monatomic ideal gas ($\\gamma = 5/3$) at $T_i = 300$ K and $p_i = 1.00$ atm is compressed adiabatically and quasi-statically to half its volume. Find $T_f$ and $p_f$.',
        steps: [
          { label: 'Temperature', text: '$TV^{\\gamma-1} = $ const: $T_f = T_i(V_i/V_f)^{\\gamma-1} = 300\\times2^{2/3} = 300\\times1.587 = 476$ K.' },
          { label: 'Pressure', text: '$p_f = p_i(V_i/V_f)^{\\gamma} = 1.00\\times2^{5/3} = 3.17$ atm.' },
          { label: 'Cross-check', text: '$p_fV_f/(p_iV_i) = (3.17)(0.5) = 1.587 = T_f/T_i \\approx 476/300$ ✓ — consistent with $pV = nRT$.' },
        ],
        result: 'Halving the volume adiabatically takes the gas to about $476$ K (203 °C) at $3.17$ atm — compression heats.',
      },
      {
        title: "The Adiabatic Expansion of an Ideal Gas: adiabatic squeeze",
        problem: "One mole of monatomic gas ($\\gamma = 5/3 \\approx 1.67$; use $1.40$ for air) is compressed adiabatically from $2.0\\ \\text{L}$ to $1.0\\ \\text{L}$ starting at $1.01\\times 10^5\\ \\text{Pa}$. Estimate the final pressure.",
        steps: [
          { label: "Relation", text: "$p_1V_1^{\\gamma} = p_2V_2^{\\gamma}$." },
          { label: "Ratio", text: "$p_2 = p_1(V_1/V_2)^{\\gamma} = 1.01\\times 10^5\\times 2^{1.40}$." },
          { label: "Compute", text: "$2^{1.40} \\approx 2.64$, so $p_2 \\approx 2.67\\times 10^5\\ \\text{Pa}$." },
        ],
        result: "$p_2 \\approx 2.7\\times 10^5\\ \\text{Pa}$.",
      },
    ],
    keyTakeaways: [
      'Adiabatic: $Q = 0$ and $\\Delta E_\\text{int} = -W$ — compression heats, expansion cools.',
      '$pV^\\gamma$ and $TV^{\\gamma-1}$ are constant on a quasi-static adiabat; $W = (p_iV_i - p_fV_f)/(\\gamma-1)$.',
      'Adiabats are $\\gamma$ times steeper than isotherms; free expansion is adiabatic but follows none of these curves.',
    ],
    quiz: [
      { q: 'During an adiabatic compression of an ideal gas,', options: ['the temperature falls', 'the temperature is unchanged', 'the temperature rises', 'the pressure stays constant'], answer: 2, explanation: 'With $Q = 0$, work done on the gas ($W<0$) increases $E_\\text{int}$, and for an ideal gas that means higher $T$.' },
      { q: 'A monatomic gas is adiabatically compressed to half its volume. Its temperature multiplies by', options: ['2', `$2^{2/3} \\approx 1.59$`, `$2^{5/3}$`, `$1/2$`], answer: 1, explanation: '$TV^{\\gamma-1}$ = const with $\\gamma - 1 = 2/3$: $T_f/T_i = (V_i/V_f)^{2/3} = 2^{2/3}$.' },
      { q: 'Through a given point in a pV diagram, the adiabat is steeper than the isotherm because', options: ['adiabatic expansion lowers temperature as well as spreading molecules', 'pressure is not defined on adiabats', 'isotherms only apply to real gases', 'the gas absorbs heat along an adiabat'], answer: 0, explanation: 'On an isotherm only the $1/V$ dilution acts; on an adiabat cooling also drops the pressure — slope ratio $\\gamma$.' },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Deriving $pV^\\gamma = $ constant — the adiabatic laws from the first law',
        blocks: [
          {
            kind: 'theorem',
            heading: 'The adiabatic laws',
            body: 'Let an ideal gas with constant heat capacities undergo a **quasi-static adiabatic** process (infinitesimally slow, zero heat exchange). Then along the process curve, $$pV^{\\gamma} = \\text{const},\\qquad TV^{\\gamma-1} = \\text{const},\\qquad T^{\\gamma}p^{1-\\gamma} = \\text{const},$$ where $\\gamma = C_P/C_V$. Hypotheses matter: the gas must be ideal, the path quasi-static (a curve of equilibrium states), and $\\gamma$ constant over the temperature range.',
          },
          {
            kind: 'derivation',
            heading: 'First law with the heat tap closed',
            body: 'Write the first law for an infinitesimal step: $dE_\\text{int} = dQ - p\\,dV$. Adiabatic means $dQ = 0$, and since ideal-gas internal energy depends only on temperature, $dE_\\text{int} = nC_V\\,dT$. Therefore $$nC_V\\,dT = -p\\,dV.$$ The pressure is not free — the gas stays on its equation of state $pV = nRT$ throughout the quasi-static process. Substituting $p = nRT/V$: $$nC_V\\,dT = -\\frac{nRT}{V}\\,dV.$$',
          },
          {
            kind: 'derivation',
            heading: 'Separate, integrate, identify γ − 1',
            body: 'Separating variables: $$\\frac{dT}{T} = -\\frac{R}{C_V}\\frac{dV}{V}.$$ Now $R = C_P - C_V$ (Section 19-7), so $R/C_V = C_P/C_V - 1 = \\gamma - 1$. Integrating from state $i$ to state $f$: $$\\ln\\frac{T_f}{T_i} = -(\\gamma-1)\\ln\\frac{V_f}{V_i},$$ that is, $$T_fV_f^{\\gamma-1} = T_iV_i^{\\gamma-1}.$$ To reach the pressure form, insert $T = pV/nR$ from the equation of state: $$pV^{\\gamma} = (nR)\\,T\\,V^{\\gamma-1} = \\text{const},$$ since the right-hand side is a product of constants.',
          },
          {
            kind: 'derivation',
            heading: 'The work formula, two ways',
            body: 'Work done by the gas is $W = \\int p\\,dV$ with $p = K/V^{\\gamma}$ (K constant along the adiabat): $$W = K\\int_{V_i}^{V_f}V^{-\\gamma}\\,dV = \\frac{K\\,V_i^{1-\\gamma} - K\\,V_f^{1-\\gamma}}{\\gamma - 1} = \\frac{p_iV_i - p_fV_f}{\\gamma - 1}.$$ The first law demands the same answer as $W = -\\Delta E_\\text{int} = nC_V(T_i - T_f)$; the two agree because $p_iV_i - p_fV_f = nR(T_i - T_f)$ and $C_V = R/(\\gamma-1)$ — an exact identity following from $\\gamma = C_P/C_V$ and $C_P = C_V + R$.',
          },
          {
            kind: 'example',
            heading: 'A diesel stroke',
            body: 'Diesel engines ignite fuel without a spark by brute compression. Air ($\\gamma = 1.40$) enters at $T_i = 300$ K and is squeezed to $1/16$ of its volume. Then $T_f = T_i(V_i/V_f)^{\\gamma-1} = 300\\times16^{0.4} = 300\\times3.03 = 909$ K, and $p_f = p_i(V_i/V_f)^{\\gamma} = 16^{1.4}\\,p_i = 48.5\\,p_i$ — near fifty atmospheres. The spray injected into 909 K (636 °C) air self-ignites; the Otto engine can match that temperature only with a spark and timed flame.',
          },
          {
            kind: 'remark',
            heading: 'Why free expansion escapes the law',
            body: 'Every step above used quasi-staticness: $W = \\int p\\,dV$ only makes sense when the gas has a single well-defined pressure at each instant. In free expansion the gas rushes into a vacuum — no piston, no defined intermediate pressure, $W = 0$ exactly. Yet heat is also zero, so $\\Delta E_\\text{int} = 0$ and the ideal gas lands at its original temperature. Same $Q = 0$, wildly different outcome: the adiabatic *curve* describes controlled equilibrium steps, while free expansion is an irreversible jump between two equilibrium points. The distinction is invisible to the first law and central to the second — it is precisely free expansion whose entropy increase (Chapter 20) cannot be undone.',
          },
        ],
      },
    ],
  },
]
