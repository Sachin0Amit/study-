import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 18
// Temperature, Heat, and the First Law of Thermodynamics
// Sections 18-1 … 18-6 (ids hall-ch18-s1 … hall-ch18-s6)
// Constants: c(water) = 4187 J/kg·K, c(ice) = 2220, c(Cu) = 386, c(Al) = 900;
// L_F(water) = 333 kJ/kg, L_V(water) = 2256 kJ/kg; σ = 5.67×10⁻⁸ W/m²·K⁴.
// ============================================================================

export const hallCh18Content: SectionContent[] = [
  // ------------------------------------------------------------------ 18-1
  {
    sectionId: 'hall-ch18-s1',
    readingTime: 6,
    intro: "Thermodynamics begins with a deceptively modest question: when are two objects equally hot? The answer — the zeroth law of thermodynamics — is what makes the thermometer, and therefore all of temperature measurement, possible. This section defines temperature operationally, through equilibrium rather than through any particular substance.",
    objectives: [
      'Define thermal equilibrium and explain why temperature is the property that governs it',
      "State the zeroth law of thermodynamics and explain how it licenses the use of a thermometer as a reference body",
      'Describe what a thermometric property is and how a thermometer is calibrated',
    ],
    concepts: [
      {
        term: 'Thermal equilibrium',
        kind: 'definition',
        statement: "**Two systems are in thermal equilibrium when, placed in thermal contact, no net exchange of energy occurs between them.** Temperature is the macroscopic property that decides the direction of energy flow: energy moves spontaneously from the hotter system to the colder one until the two temperatures are equal.",
        detail: "Temperature is not heat and not internal energy — a spark at 2000 K holds far less energy than a bathtub of water at 40 °C. It is the intensive quantity that equalizes when contact is maintained.",
      },
      {
        term: 'The zeroth law of thermodynamics',
        kind: 'law',
        statement: "**If bodies A and B are each separately in thermal equilibrium with a third body C, then A and B are in thermal equilibrium with each other.** Written with temperatures: $T_A = T_C$ and $T_B = T_C$ imply $T_A = T_B$.",
        detail: "The law earns its name (added after the first and second laws were numbered) because it underpins them all: it is the transitivity of thermal equilibrium that lets one body C serve as a thermometer for every other body, and it is what makes temperature a well-defined scalar rather than a pairwise relation.",
      },
      {
        term: 'Thermometers and thermometric properties',
        kind: 'method',
        statement: "**A thermometer is a body equipped with a thermometric property — a measurable property that changes with temperature.** The length of a mercury column, the pressure of a fixed volume of gas, the electrical resistance of a platinum wire: each can be calibrated between reproducible fixed points (ice point, steam point, triple point) to assign numbers to temperatures.",
        detail: "Different thermometric substances disagree away from their calibration points — mercury, alcohol and gas thermometers interpolate differently — which is why the constant-volume gas thermometer (Section 18-2) was adopted as the standard: all gases agree as their pressure is lowered toward zero.",
      },
      {
        term: 'What temperature means microscopically',
        kind: 'insight',
        statement: '**At the molecular level, temperature measures how vigorously molecules move.** For a gas, $T$ turns out to be proportional to the average translational kinetic energy per molecule, $\\langle K \\rangle = \\tfrac{3}{2}k_BT$ (Chapter 19). Hotter means faster, on average.',
        detail: "This is the bridge between the macroscopic thermodynamics of this chapter and the kinetic theory of gases that explains it.",
      },
      {
        term: "Temperature: solution protocol",
        kind: "method",
        statement: "**Solve Temperature problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is temperature, heat and the first law; the working equation is $\\Delta L = \\alpha L\\Delta T$, $Q = mc\\Delta T$, $Q = mL$, $\\Delta E_{\\text{int}} = Q-W$; every substitution must carry its units so the final unit (kelvin, joules, watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $c_{\\text{water}} = 4186\\ \\text{J/kg}\\cdot\\text{K}$; $\\alpha_{\\text{steel}} \\approx 12\\times 10^{-6}/\\text{K}$; no phase change for $Q = mc\\Delta T$; steady 1D conduction.",
      },
    ],
    examples: [
      {
        title: 'Calibrating a liquid-in-glass thermometer',
        problem: 'A mercury thermometer is calibrated by immersion in an ice bath and in boiling water at 1 atm. The mercury column stands at $L_0 = 4.00$ cm at 0 °C and at $L_{100} = 24.0$ cm at 100 °C. Assuming the column length grows linearly with temperature, what temperature corresponds to a column of 13.0 cm?',
        steps: [
          { label: 'Set up linearity', text: 'Assume $T = aL + b$. The two fixed points give $0 = 4.00a + b$ and $100 = 24.0a + b$.' },
          { label: 'Solve', text: 'Subtracting: $100 = 20.0a$, so $a = 5.00$ °C/cm and $b = -20.0$ °C.' },
          { label: 'Evaluate', text: 'For $L = 13.0$ cm: $T = (5.00)(13.0) - 20.0 = 45.0$ °C.' },
        ],
        result: 'The thermometer reads $T = 45.0$ °C — but the reading is only as trustworthy as the linearity assumption, which is why gas thermometers are the gold standard.',
      },
      {
        title: "Temperature: heating numbers",
        problem: "How much heat raises $1\\ \\text{kg}$ of water by $20\\ \\text{K}$? ($c = 4186\\ \\text{J/kg}\\cdot\\text{K}$)",
        steps: [
          { label: "Formula", text: "$Q = mc\\Delta T$ (no phase change)." },
          { label: "Substitute", text: "$Q = 1\\times 4186\\times 20 = 83700\\ \\text{J}$." },
          { label: "Sense", text: "About 0.0233\\ \\text{kWh}$ — heating water is expensive." },
        ],
        result: "$Q \\approx 83700\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      'Temperature is the property that determines the direction of spontaneous energy flow; equal temperatures mean no net flow.',
      'The zeroth law (transitivity of thermal equilibrium) is what makes thermometry possible: body C can certify that A and B are in equilibrium without ever putting them in contact.',
      'A thermometer works through a thermometric property calibrated against reproducible fixed points.',
    ],
    quiz: [
      { q: 'Systems A and B are each separately in thermal equilibrium with system C. According to the zeroth law, what follows about A and B?', options: ['They are in thermal equilibrium with each other, so no net energy flows if they touch', 'They must exchange energy until one changes phase', 'Nothing — the law requires all three to be in contact at once', 'They have equal internal energies'], answer: 0, explanation: 'The zeroth law is transitivity: equal-to-C implies equal-to-each-other. Equal internal energy is not implied — that depends on mass and composition.' },
      { q: 'What makes a physical property usable as a thermometric property?', options: ['It stays constant while temperature changes', 'It is found only in gases', 'It changes measurably and reproducibly with temperature and can be calibrated against fixed points', 'It measures only very high temperatures'], answer: 2, explanation: 'Any reproducible, temperature-sensitive quantity — column length, gas pressure, resistance — can anchor a thermometer once calibrated.' },
      { q: 'At the molecular level, the temperature of a gas is a measure of', options: ['the total kinetic energy of all its molecules', 'the average translational kinetic energy per molecule', 'the average potential energy of intermolecular bonds', 'the average separation between molecules'], answer: 1, explanation: 'Kinetic theory gives $\\langle K\\rangle = \\tfrac{3}{2}k_BT$: temperature tracks the mean translational KE per molecule, not the total energy of the sample.' },
      { q: 'A thermometer reads 21.5 °C in cup A and 21.5 °C in cup B. If the two cups are poured together, energy will', options: ['flow from A to B because mixing always transfers heat', 'flow from B to A', 'not flow, because they are already in thermal equilibrium', 'flow until one cup freezes'], answer: 2, explanation: 'Both cups are in equilibrium with the thermometer, so by the zeroth law they are in equilibrium with each other — same temperature, no net flow.' },
    ],
  },

  // ------------------------------------------------------------------ 18-2
  {
    sectionId: 'hall-ch18-s2',
    readingTime: 6,
    intro: "The Celsius and Fahrenheit scales are historical accidents tied to the freezing and boiling of water; the Kelvin scale is tied to physics itself, bottoming out at absolute zero. This section gives the conversion formulas and shows how the constant-volume gas thermometer — the standard instrument of low-temperature metrology — defines the Kelvin scale.",
    objectives: [
      'Convert temperatures among the Celsius, Fahrenheit and Kelvin scales',
      'Explain the role of the triple point of water and absolute zero in defining the Kelvin scale',
      'Use a constant-volume gas thermometer to measure an unknown temperature',
    ],
    concepts: [
      {
        term: 'The Celsius and Fahrenheit scales',
        kind: 'definition',
        statement: "**The two everyday scales are fixed by water's ice and steam points: 0 °C = 32 °F and 100 °C = 212 °F.** Because a Celsius degree is $\\tfrac{100}{180} = \\tfrac{5}{9}$ of a Fahrenheit degree, $$T_F = \\tfrac{9}{5}T_C + 32,\\qquad T_C = \\tfrac{5}{9}(T_F - 32).$$",
        detail: 'The two scales agree at exactly one reading: setting $T_F = T_C = t$ gives $t = \\tfrac{9}{5}t + 32$, i.e. $t = -40°$. Below that Fahrenheit runs ahead; above it lags.',
      },
      {
        term: 'The Kelvin scale and absolute zero',
        kind: 'definition',
        statement: "**The Kelvin (SI) scale shifts Celsius by 273.15: $T_K = T_C + 273.15$.** Its zero is absolute zero, the temperature at which molecular thermal motion has no translational kinetic energy to give up — experimentally approached but never reached (unattainability is one form of the third law of thermodynamics).",
        detail: 'The scale is fixed by the triple point of water — where ice, liquid and vapor coexist — at exactly $T_3 = 273.16$ K. Since 2019 the kelvin is defined through the fixed value of the Boltzmann constant $k_B = 1.380649\\times10^{-23}$ J/K.',
      },
      {
        term: 'The constant-volume gas thermometer',
        kind: 'method',
        statement: "**A sealed bulb of dilute gas kept at constant volume has a pressure that grows linearly with temperature; the reading is $T = 273.16\\,(p/p_3)$ K, where $p_3$ is the pressure at the triple point.** Experiments with different gases converge to the same $T$ as $p_3$ is made smaller, which is why this instrument defines the scale.",
        detail: 'Extrapolating the measured straight line of $p$ versus $T$ to $p = 0$ lands all gases, whatever their amount or kind, at the same intercept: $-273.15$ °C. That universal vanishing of pressure is the experimental discovery of absolute zero.',
      },
      {
        term: "The Celsius and Fahrenheit Scales: solution protocol",
        kind: "method",
        statement: "**Solve The Celsius and Fahrenheit Scales problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is temperature, heat and the first law; the working equation is $\\Delta L = \\alpha L\\Delta T$, $Q = mc\\Delta T$, $Q = mL$, $\\Delta E_{\\text{int}} = Q-W$; every substitution must carry its units so the final unit (kelvin, joules, watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $c_{\\text{water}} = 4186\\ \\text{J/kg}\\cdot\\text{K}$; $\\alpha_{\\text{steel}} \\approx 12\\times 10^{-6}/\\text{K}$; no phase change for $Q = mc\\Delta T$; steady 1D conduction.",
      },
      {
        term: "The Celsius and Fahrenheit Scales: scales and validity",
        kind: "insight",
        statement: "**The Celsius and Fahrenheit Scales lives at $c_{\\text{water}} = 4186\\ \\text{J/kg}\\cdot\\text{K}$; $\\alpha_{\\text{steel}} \\approx 12\\times 10^{-6}/\\text{K}$ and the textbook model holds while no phase change for $Q = mc\\Delta T$; steady 1D conduction.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a The Celsius and Fahrenheit Scales calculation gives seconds when kelvin, joules, watts demands meters, or a value orders of magnitude beyond $c_{\\text{water}} = 4186\\ \\text{J/kg}\\cdot\\text{K}$; $\\alpha_{\\text{steel}} \\approx 12\\times 10^{-6}/\\text{K}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Body temperature in three scales',
        problem: 'Normal human body temperature is 98.6 °F. Express it in Celsius and in kelvin.',
        steps: [
          { label: 'To Celsius', text: '$T_C = \\tfrac{5}{9}(98.6 - 32) = \\tfrac{5}{9}(66.6) = 37.0$ °C.' },
          { label: 'To kelvin', text: '$T_K = 37.0 + 273.15 = 310.2$ K (about 310 K, a convenient round number for body temperature).' },
        ],
        result: 'Body temperature is $37.0\\ ^\\circ\\mathrm{C} = 310.2$ K. A fever of 100 °F is 37.8 °C — a rise of less than one kelvin already means trouble.',
      },
      {
        title: 'A gas thermometer finds the steam point',
        problem: 'A constant-volume thermometer filled with dilute gas reads $p_3 = 5.00\\times10^{4}$ Pa at the triple point of water. Immersed in steam above boiling water it reads $p = 6.85\\times10^{4}$ Pa. What temperature does it assign, in kelvin and in Celsius?',
        steps: [
          { label: 'Apply the definition', text: '$T = 273.16\\,(p/p_3) = 273.16\\,(6.85/5.00) = 273.16 \\times 1.370 = 374.2$ K.' },
          { label: 'Convert', text: '$T_C = 374.2 - 273.15 = 101.1$ °C.' },
          { label: 'Interpret', text: 'The gas thermometer over-shoots the accepted steam point (100.0 °C) by about 1 °C because the gas is not infinitely dilute; repeating the experiment at lower $p_3$ drives the reading toward exactly 100 °C.' },
        ],
        result: '$T \\approx 374$ K, i.e. about 101 °C — and the reading converges to the true steam point as the gas becomes more dilute.',
      },
    ],
    keyTakeaways: [
      '$T_F = \\tfrac{9}{5}T_C + 32$; the scales cross at $-40°$.',
      'The Kelvin scale has its zero at absolute zero and its size fixed by the triple point of water, $273.16$ K.',
      'The constant-volume gas thermometer defines $T = 273.16\\,(p/p_3)$ K and gives the same answer for every gas in the dilute limit.',
    ],
    quiz: [
      { q: 'Convert 68 °F (a pleasant spring day) to Celsius.', options: ['5.0 °C', '15.0 °C', '20.0 °C', '25.0 °C'], answer: 2, explanation: '$T_C = \\tfrac{5}{9}(68 - 32) = \\tfrac{5}{9}(36) = 20.0$ °C.' },
      { q: 'At what reading do the Celsius and Fahrenheit scales agree?', options: ['-40°', '0°', '-32°', '100°'], answer: 0, explanation: 'Setting $t = \\tfrac{9}{5}t + 32$ gives $-\\tfrac{4}{5}t = 32$, so $t = -40$.' },
      { q: 'A constant-volume gas thermometer reads pressures $p_3$ at the triple point of water and $p$ at an unknown temperature. The assigned Kelvin temperature is', options: ['$T = 273.16\\,p_3/p$ K', '$T = 273.16\\,p/p_3$ K', '$T = p/p_3$ K', '$T = 273.16 + p/p_3$ K'], answer: 1, explanation: 'At fixed volume $p \\propto T$ for dilute gas, and the proportionality is pinned by the triple point: $T = 273.16\\,(p/p_3)$.' },
      { q: 'Room temperature is about 300 K. In Celsius this is closest to', options: ['27 °C', '300 °C', '−27 °C', '573 °C'], answer: 0, explanation: '$T_C = 300 - 273.15 \\approx 26.9 \\approx 27$ °C.' },
    ],
  },

  // ------------------------------------------------------------------ 18-3
  {
    sectionId: 'hall-ch18-s3',
    readingTime: 7,
    intro: "A thermometer tells you that a railroad rail gets longer on a hot afternoon — by how much is the business of this section. Thermal expansion affects every engineered structure from bridges to dental fillings, and its small coefficients hide big consequences when lengths are large or tolerances are tight.",
    objectives: [
      'Apply $\\Delta L = L\\alpha\\Delta T$ and $\\Delta V = V\\beta\\Delta T$ with $\\beta = 3\\alpha$ for isotropic solids',
      'Explain why holes and cavities expand exactly as if filled with the surrounding material',
      'Describe the anomalous expansion of water between 0 °C and 4 °C',
    ],
    concepts: [
      {
        term: 'Linear expansion',
        kind: 'law',
        statement: "**A solid rod of length $L$ whose temperature changes by $\\Delta T$ changes length by $$\\Delta L = L\\,\\alpha\\,\\Delta T,$$ where the linear expansion coefficient $\\alpha$ is a property of the material (per °C).** Values: steel $11\\times10^{-6}$/°C, aluminum $23\\times10^{-6}$/°C, Pyrex glass $3.2\\times10^{-6}$/°C, Invar $0.7\\times10^{-6}$/°C.",
        detail: 'The change is proportional to both the length and the temperature swing, and $\\alpha$ itself varies slightly with temperature. For small changes the new length is $L + \\Delta L$ with $\\Delta L/L$ typically of order $10^{-5}$ to $10^{-4}$ — tiny per meter, not tiny per kilometer.',
      },
      {
        term: 'Area and volume expansion',
        kind: 'law',
        statement: "**An isotropic solid expands in volume according to $\\Delta V = V\\beta\\Delta T$ with $\\beta \\approx 3\\alpha$** (each of the three dimensions grows by the same fractional amount, so their product grows by $3\\alpha\\Delta T$ to first order). Areas grow with $\\beta = 2\\alpha$ for the same reason. Liquids, having no fixed shape, are described by $\\beta$ alone: water $\\approx 21\\times10^{-5}$/°C near room temperature, mercury $18\\times10^{-5}$/°C, gasoline $96\\times10^{-5}$/°C.",
        detail: 'Because a liquid must sit in a container, what you usually observe is the overflow: the fractional change of the liquid minus that of the container.',
      },
      {
        term: 'Holes expand when heated',
        kind: 'insight',
        statement: "**A hole in a plate expands on heating exactly as a disk of the same material would — it gets bigger, not smaller.** Every linear dimension of the object scales by $(1 + \\alpha\\Delta T)$, including gaps, holes and the distance between two scribed marks.",
        detail: 'This is why a stuck metal lid loosens under hot water (the lid and its hole outgrow the jar rim) and why shrink-fitted machine parts are assembled hot and gripped tight when they cool.',
      },
      {
        term: "Water's anomaly",
        kind: 'insight',
        statement: "**Between 0 °C and 4 °C water contracts as it warms: its density peaks at about 4 °C.** Above 4 °C it expands normally. Ice is also about 9% less dense than liquid water, so it floats.",
        detail: 'A lake freezes from the top down: cooling surface water sinks until the whole lake is at 4 °C, after which the coldest water stays on top and freezes first — leaving fish a liquid habitat under the ice through the winter.',
      },
      {
        term: "Thermal Expansion: solution protocol",
        kind: "method",
        statement: "**Solve Thermal Expansion problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is temperature, heat and the first law; the working equation is $\\Delta L = \\alpha L\\Delta T$, $Q = mc\\Delta T$, $Q = mL$, $\\Delta E_{\\text{int}} = Q-W$; every substitution must carry its units so the final unit (kelvin, joules, watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $c_{\\text{water}} = 4186\\ \\text{J/kg}\\cdot\\text{K}$; $\\alpha_{\\text{steel}} \\approx 12\\times 10^{-6}/\\text{K}$; no phase change for $Q = mc\\Delta T$; steady 1D conduction.",
      },
    ],
    examples: [
      {
        title: 'A steel rail needs room to grow',
        problem: 'A steel rail is 12.0 m long at 20 °C. In the summer sun its temperature reaches 50 °C. How much does it lengthen, and what does that imply for a track built of such rails?',
        steps: [
          { label: 'Identify quantities', text: '$L = 12.0$ m, $\\alpha = 11\\times10^{-6}$/°C for steel, $\\Delta T = 30$ °C.' },
          { label: 'Compute', text: '$\\Delta L = L\\alpha\\Delta T = (12.0)(11\\times10^{-6})(30) = 3.96\\times10^{-3}$ m $\\approx 4.0$ mm.' },
          { label: 'Scale it', text: 'A kilometer of continuous track would grow $(1000/12)\\times4.0$ mm $\\approx 33$ cm — which is why expansion joints and gaps are engineered into every rail line.' },
        ],
        result: 'The single rail grows about $4.0$ mm; without designed-in gaps the accumulated expansion of a long track would buckle it sideways.',
      },
      {
        title: 'The overflowing fuel tank',
        problem: 'A steel tank is filled to the brim with 40.0 L of gasoline at 20.0 °C. The tank and contents warm to 35.0 °C. How much gasoline spills? ($\\beta_\\text{gas} = 96\\times10^{-5}$/°C for gasoline; $\\alpha = 11\\times10^{-6}$/°C for steel.)',
        steps: [
          { label: 'Gasoline expansion', text: '$\\Delta V_\\text{gas} = V\\beta\\Delta T = (40.0\\ \\mathrm{L})(96\\times10^{-5})(15.0) = 0.576$ L.' },
          { label: 'Tank expansion', text: 'For the steel, $\\beta = 3\\alpha = 33\\times10^{-6}$/°C, so $\\Delta V_\\text{tank} = (40.0)(33\\times10^{-6})(15.0) = 0.0198$ L $\\approx 0.02$ L.' },
          { label: 'Overflow', text: 'Spill $= 0.576 - 0.020 = 0.556$ L $\\approx 0.56$ L.' },
        ],
        result: 'About $0.56$ L overflows — the tank grows too, but the gasoline out-expands it by a factor of nearly 30 because liquids have far larger $\\beta$ than metals.',
      },
    ],
    keyTakeaways: [
      '$\\Delta L = L\\alpha\\Delta T$; the fractional change is what the coefficient controls, so long objects and big temperature swings are the dangerous combinations.',
      'Volume expansion has $\\beta = 3\\alpha$ for isotropic solids; observed liquid expansion is liquid minus container.',
      'Holes and gaps expand like the material around them; water contracts on warming below 4 °C, so lakes freeze from the top.',
    ],
    quiz: [
      { q: 'A steel plate with a circular hole is uniformly heated. The hole', options: ['expands just as if it were filled with a disk of the same material', 'shrinks because metal grows inward to fill it', 'keeps exactly its original diameter', 'expands only if the plate is thin'], answer: 0, explanation: 'Every linear dimension of the plate — including the hole diameter — scales by the factor $(1 + \\alpha\\Delta T)$.' },
      { q: 'For an isotropic solid, the volume expansion coefficient $\\beta$ is', options: [`$\\alpha/3$`, `$\\alpha$`, `$2\\alpha$`, `$3\\alpha$`], answer: 3, explanation: 'Three linear dimensions each grow by $\\alpha\\Delta T$, so the product grows by $3\\alpha\\Delta T$ to first order.' },
      { q: 'Liquid water reaches its maximum density at about', options: ['0 °C', '4 °C', '25 °C', '100 °C'], answer: 1, explanation: 'Below 4 °C water expands on cooling, so 4 °C water sinks and ice forms on the surface.' },
      { q: "An aluminum rod ($\\alpha = 23\\times10^{-6}$/°C) is 2.00 m long at 20 °C. Heated to 70 °C, it grows by about", options: ['1.2 mm', '2.3 mm', '4.6 mm', '6.9 mm'], answer: 1, explanation: '$\\Delta L = L\\alpha\\Delta T = (2.00)(23\\times10^{-6})(50) = 2.3\\times10^{-3}$ m.' },
    ],
  },

  // ------------------------------------------------------------------ 18-4
  {
    sectionId: 'hall-ch18-s4',
    readingTime: 8,
    intro: "Left in your coffee, a spoon warms and the coffee cools until they share a temperature. Quantifying that exchange needs two ideas: heat capacity, which says how much energy a body must absorb to warm by one degree, and latent heat, which says how much energy a substance absorbs to change phase at constant temperature. Together they make calorimetry — the bookkeeping of energy conservation for thermal mixing — a working laboratory tool.",
    objectives: [
      'Compute heat with $Q = cm\\Delta T$ and compare specific heats of common substances',
      'Apply conservation of energy (calorimetry) to find equilibrium temperatures of mixed systems',
      'Include phase changes with $Q = Lm$ at constant temperature',
    ],
    concepts: [
      {
        term: 'Heat as energy in transit',
        kind: 'definition',
        statement: "**Heat $Q$ is energy transferred between a system and its surroundings because of a temperature difference.** It is measured in joules (historically in calories: $1$ cal $= 4.1868$ J, defined as the energy to warm 1 g of water by 1 °C). Heat is not a substance contained in a body — it is energy on the move, counted positive when it enters the system.",
        detail: 'Once transferred, the energy lives in the system as internal energy; saying a body "contains heat" is the calorist mistake that thermodynamics corrected.',
      },
      {
        term: 'Specific heat and heat capacity',
        kind: 'law',
        statement: "**The heat needed to change the temperature of a mass $m$ of substance by $\\Delta T$ is $$Q = c\\,m\\,\\Delta T,$$ where $c$ is the specific heat (J/kg·K).** Water is the champion at $c = 4187$ J/kg·K; ice is 2220; aluminum 900; iron 450; copper 386; lead 128.",
        detail: 'The heat capacity of a body is $C = mc$; the molar specific heat (Chapter 19) divides by moles instead of kilograms. Water\'s huge $c$ — a legacy of its hydrogen-bond network — is why coastal climates are mild and radiators use water.',
      },
      {
        term: 'Calorimetry: conservation of energy',
        kind: 'method',
        statement: "**In an insulated (adiabatic) container the total heat exchanged is zero: $$\\sum_i Q_i = 0,$$ with each $Q_i = c_i m_i (T_f - T_i)$ signed by whether the body warmed or cooled.** The equilibrium temperature follows from this one equation.",
        detail: 'The final temperature always lies between the initial temperatures, and lands closest to the body with the larger $mc$ product. Bodies never "average temperatures" unless their $mc$ values match.',
      },
      {
        term: 'Latent heat of phase change',
        kind: 'law',
        statement: "**To change phase at constant temperature, a mass $m$ must absorb or release $$Q = L\\,m,$$ with $L$ the latent heat of the transformation.** For water: $L_F = 333$ kJ/kg to melt or freeze, $L_V = 2256$ kJ/kg to evaporate or condense — sublimation takes both at once ($L_S = 2838$ kJ/kg for ice to vapor).",
        detail: 'The energies are remarkable: melting 1 kg of ice takes as much heat as warming 1 kg of water by 80 °C, and boiling it away at 100 °C takes 2256 kJ — nearly seven times the fusion value. Evaporating sweat at skin temperature carries off about 2.4 MJ per kilogram, which is how cooling by perspiration works.',
      },
      {
        term: "Absorption of Heat: solution protocol",
        kind: "method",
        statement: "**Solve Absorption of Heat problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is temperature, heat and the first law; the working equation is $\\Delta L = \\alpha L\\Delta T$, $Q = mc\\Delta T$, $Q = mL$, $\\Delta E_{\\text{int}} = Q-W$; every substitution must carry its units so the final unit (kelvin, joules, watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $c_{\\text{water}} = 4186\\ \\text{J/kg}\\cdot\\text{K}$; $\\alpha_{\\text{steel}} \\approx 12\\times 10^{-6}/\\text{K}$; no phase change for $Q = mc\\Delta T$; steady 1D conduction.",
      },
    ],
    examples: [
      {
        title: 'A hot copper block quenched in water',
        problem: 'A 0.200 kg copper block at 150.0 °C is dropped into 0.500 kg of water at 20.0 °C in an insulated container. Find the equilibrium temperature.',
        steps: [
          { label: 'Set the balance', text: '$\\sum Q = 0$: $c_\\mathrm{Cu}m_\\mathrm{Cu}(T_f - 150) + c_w m_w (T_f - 20.0) = 0$.' },
          { label: 'Insert numbers', text: '$(386)(0.200)(T_f - 150) + (4187)(0.500)(T_f - 20.0) = 0$, i.e. $77.2(T_f - 150) + 2093.5(T_f - 20.0) = 0$.' },
          { label: 'Solve', text: '$77.2T_f - 11,580 + 2093.5T_f - 41,870 = 0$, so $2170.7T_f = 53,450$ and $T_f = 24.6$ °C.' },
        ],
        result: 'The mixture settles at $T_f \\approx 24.6$ °C — far closer to the water\'s start than the copper\'s, because water\'s $mc$ is 27 times larger.',
      },
      {
        title: 'Ice cubes in warm water',
        problem: 'A 50.0 g ice cube at 0.0 °C is dropped into 0.500 kg of water at 40.0 °C in an insulated glass. What is the final temperature? Does all the ice melt?',
        steps: [
          { label: 'Check melting capacity', text: 'Melting all the ice takes $Q = L_F m = (3.33\\times10^{5})(0.0500) = 1.67\\times10^{4}$ J. The water can cool to 0 °C giving up $(4187)(0.500)(40.0) = 8.37\\times10^{4}$ J — more than enough, so all ice melts and $T_f > 0$ °C.' },
          { label: 'Energy ledger', text: 'Warming the melt from 0 °C to $T_f$ must also be paid: $2093.5(40.0 - T_f) = 16,650 + 209.4T_f$.' },
          { label: 'Solve', text: '$83,740 - 2093.5T_f = 16,650 + 209.4T_f$ gives $2302.9T_f = 67,090$, so $T_f = 29.1$ °C.' },
        ],
        result: 'All the ice melts and the drink lands at $T_f \\approx 29.1$ °C — chilling it mostly, note, by the latent heat rather than by warming ice-cold water.',
      },
    ],
    keyTakeaways: [
      '$Q = cm\\Delta T$ for temperature change; $Q = Lm$ for phase change at constant $T$.',
      'Calorimetry is energy conservation: $\\sum Q_i = 0$ in an insulated container; the equilibrium temperature sits nearest the largest $mc$.',
      "Water's specific heat (4187 J/kg·K) and latent heats (333 kJ/kg and 2256 kJ/kg) are enormous — this shapes climate, cooking and cooling by evaporation.",
    ],
    quiz: [
      { q: 'While ice melts at 0 °C at atmospheric pressure, energy added to it', options: ['raises its temperature steadily', 'breaks intermolecular bonds while the temperature stays constant', 'goes entirely into translational kinetic energy', 'does work lifting the container'], answer: 1, explanation: 'Melting is isothermal: the energy goes into partially freeing molecules from the crystal — that is the latent heat of fusion.' },
      { q: 'Heating 0.50 kg of water by 10 °C requires about', options: ['21 kJ', '2.1 kJ', '210 kJ', '4.2 kJ'], answer: 0, explanation: '$Q = cm\\Delta T = (4187)(0.50)(10) \\approx 2.1\\times10^{4}$ J.' },
      { q: 'A hot metal block is dropped into cool water in an insulated container. The final equilibrium temperature', options: ['is the arithmetic average of the two initial temperatures', 'lies closer to the water\'s initial temperature because the water\'s $mc$ is larger', 'lies closer to the block\'s initial temperature', 'ends up below both initial temperatures'], answer: 1, explanation: 'Energy conservation weights each body by $mc$; the body with the larger heat capacity moves the mixture less per joule exchanged, so $T_f$ gravitates toward it.' },
      { q: "Equal masses of water and copper receive equal heat input. Compared with the water, the copper", options: ['warms less', 'warms more, roughly ten times', 'warms by exactly the same number of degrees', 'does not warm at all'], answer: 1, explanation: '$\\Delta T = Q/mc$ and $c$ for copper (386) is about 1/11 of water\'s (4187), so copper warms about eleven times more.' },
    ],
  },

  // ------------------------------------------------------------------ 18-5
  {
    sectionId: 'hall-ch18-s5',
    readingTime: 8,
    intro: "Heat, work and internal energy meet in one equation. The first law of thermodynamics is energy conservation stated for thermal systems: the internal energy a gas gains equals what it absorbs as heat minus what it spends doing work on the piston. Its sign conventions and its pV-diagram geometry are the working tools for every engine in Chapter 20.",
    objectives: [
      'State the first law with the HRW sign convention and apply it to a stated process',
      'Compute the work of a gas as an area under the curve in a pV diagram',
      'Analyze the special cases: isobaric, isochoric, isothermal, cyclic, adiabatic and free expansion',
    ],
    concepts: [
      {
        term: 'The first law of thermodynamics',
        kind: 'law',
        statement: "**For any system, the change in internal energy is the heat added minus the work done by the system: $$\\Delta E_\\text{int} = Q - W.$$** $Q > 0$ means heat flows in; $W > 0$ means the system does work on its surroundings (typically a gas pushing a piston outward).",
        detail: 'The law is energy conservation in disguise: $\\Delta E_\\text{int} = Q - W$ says the energy ledger of the system balances what arrives as heat against what leaves as mechanical work. It holds for every process, reversible or not.',
      },
      {
        term: 'Work and the pV diagram',
        kind: 'method',
        statement: "**The work done by a gas during a volume change is $$W = \\int_{V_i}^{V_f} p\\,dV,$$ the area under the process curve in a $pV$ diagram** (positive for expansion, negative for compression, zero for constant volume). For an isothermal ideal gas this integrates to $W = nRT\\ln(V_f/V_i)$.",
        detail: 'In a cyclic process — the gas returns to its starting state — the net work is the area enclosed by the closed loop, positive if the cycle runs clockwise. This enclosed area is literally what any heat engine harvests.',
      },
      {
        term: 'Internal energy is a state function; heat and work are not',
        kind: 'insight',
        statement: "**$E_\\text{int}$ depends only on the state of the system (for an ideal gas, only on $T$), so any path between two states gives the same $\\Delta E_\\text{int}$.** But $Q$ and $W$ individually depend on the path taken — they are energies in transit, not properties of the state.",
        detail: 'Between the same two states an ideal gas can be taken isothermally ($\\Delta E_\\text{int} = 0$, so $Q = W$) or isochorically then isobarically (different $Q$ and $W$, same sum). Only the difference $Q - W$ is fixed.',
      },
      {
        term: 'Special processes from the first law',
        kind: 'method',
        statement: "**Isochoric (constant $V$): $W = 0$, so $\\Delta E_\\text{int} = Q$. Isobaric (constant $p$): $W = p\\,\\Delta V$. Isothermal ideal gas: $\\Delta E_\\text{int} = 0$, so $Q = W$. Cyclic: $\\Delta E_\\text{int} = 0$ and net $Q = $ net $W$. Adiabatic: $Q = 0$, so $\\Delta E_\\text{int} = -W$ — the gas that expands quickly cools. Free expansion into vacuum: $Q = W = 0$, so $\\Delta E_\\text{int} = 0$ and the ideal gas temperature is unchanged.**",
        detail: 'Adiabatic processes need speed or insulation; free expansion needs neither quasi-static care nor a piston — it is the textbook irreversible process, and Chapter 20 will show its entropy still grows.',
      },
      {
        term: "The First Law of Thermodynamics: solution protocol",
        kind: "method",
        statement: "**Solve The First Law of Thermodynamics problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is temperature, heat and the first law; the working equation is $\\Delta L = \\alpha L\\Delta T$, $Q = mc\\Delta T$, $Q = mL$, $\\Delta E_{\\text{int}} = Q-W$; every substitution must carry its units so the final unit (kelvin, joules, watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $c_{\\text{water}} = 4186\\ \\text{J/kg}\\cdot\\text{K}$; $\\alpha_{\\text{steel}} \\approx 12\\times 10^{-6}/\\text{K}$; no phase change for $Q = mc\\Delta T$; steady 1D conduction.",
      },
    ],
    examples: [
      {
        title: 'Heated gas in a cylinder at constant pressure',
        problem: 'A gas in a cylinder with a frictionless piston is held at constant pressure $p = 2.00\\times10^{5}$ Pa while it absorbs $Q = 9000$ J of heat and expands by $\\Delta V = 0.0300$ m³. Find the work done by the gas and the change in its internal energy.',
        steps: [
          { label: 'Work at constant pressure', text: '$W = p\\,\\Delta V = (2.00\\times10^{5})(0.0300) = 6000$ J (the gas pushes the piston out).' },
          { label: 'First law', text: '$\\Delta E_\\text{int} = Q - W = 9000 - 6000 = 3000$ J.' },
          { label: 'Interpretation', text: 'One-third of the absorbed heat leaks out of the gas as mechanical work; only 3000 J stays stored internally, raising the temperature.' },
        ],
        result: '$W = 6000$ J and $\\Delta E_\\text{int} = 3000$ J — heating at constant pressure is inherently "leaky" compared with heating at constant volume.',
      },
      {
        title: 'A rectangular cycle on the pV diagram',
        problem: 'A gas goes through a cycle: (1) isobaric expansion at $p = 2.00\\times10^{5}$ Pa from $V = 0.0100$ to $0.0400$ m³; (2) isochoric pressure drop to $1.00\\times10^{5}$ Pa; (3) isobaric compression back to $0.0100$ m³; (4) isochoric pressure rise back to the start. Find the net work per cycle and the net heat.',
        steps: [
          { label: 'Expansion leg', text: '$W_1 = p\\Delta V = (2.00\\times10^{5})(0.0300) = +6000$ J.' },
          { label: 'Constant-volume legs', text: '$W_2 = W_4 = 0$: no volume change, no work.' },
          { label: 'Compression leg', text: '$W_3 = (1.00\\times10^{5})(-0.0300) = -3000$ J.' },
          { label: 'Assemble the cycle', text: 'Net $W = 6000 - 3000 = 3000$ J — exactly the enclosed rectangular area $(1.00\\times10^{5})(0.0300)$. Since $\\Delta E_\\text{int} = 0$ over a cycle, net $Q = 3000$ J as well.' },
        ],
        result: 'Each cycle the gas converts $3000$ J of absorbed heat into work — the geometric heart of every heat engine.',
      },
    ],
    keyTakeaways: [
      '$\\Delta E_\\text{int} = Q - W$ with $W$ the work done by the gas; the equation holds for every process.',
      'Work is the area under the pV curve; over a closed cycle the net work is the enclosed area and $\\Delta E_\\text{int} = 0$.',
      'Special cases: isochoric $W = 0$; isothermal ideal gas $Q = W$; adiabatic $Q = 0$; free expansion $Q = W = 0$.',
    ],
    quiz: [
      { q: 'In the convention $\\Delta E_\\text{int} = Q - W$, the symbol $W$ stands for', options: ['the work done by the gas on its surroundings', 'the work done on the gas by the surroundings', 'the heat transferred at constant volume', 'the net heat over a cycle'], answer: 0, explanation: 'HRW counts $W$ as work done by the system, so compression (work done on the gas) enters with a minus sign.' },
      { q: 'A gas completes a full cycle and returns to its initial state. Which statement is correct?', options: ['$W = 0$ because the state is restored', '$Q = 0$ for any cycle', 'The internal energy depends on the direction of travel around the cycle', 'The net work is the area enclosed by the cycle, and it equals the net heat'], answer: 3, explanation: 'Internal energy is a state function, so $\\Delta E_\\text{int} = 0$ per cycle; then $Q = W$, and that net work is the enclosed pV area.' },
      { q: 'An ideal gas expands freely into an evacuated, insulated chamber. The gas temperature', options: ['drops because the gas spreads out', 'is unchanged, because $Q = 0$ and the gas does no work', 'rises because the molecules fall into the new volume', 'doubles along with the volume'], answer: 1, explanation: 'Free expansion: no heat, no piston to push, so $\\Delta E_\\text{int} = 0$; since ideal-gas internal energy depends only on $T$, the temperature is unchanged.' },
      { q: 'A gas is heated in a rigid sealed container. The first law gives', options: [`$Q = \\Delta E_\\text{int}$ because $W = 0$`, '$Q = W$ because the pressure rises', '$\\Delta E_\\text{int} = 0$ because the volume is fixed', '$Q = 0$ because nothing moves'], answer: 0, explanation: 'Isochoric means no $p\\,dV$ work, so all the heat becomes internal energy.' },
    ],
  },

  // ------------------------------------------------------------------ 18-6
  {
    sectionId: 'hall-ch18-s6',
    readingTime: 7,
    intro: "Heat moves without pistons and without metering. Three mechanisms carry it: conduction through contact, convection by bulk transport, and radiation by electromagnetic waves. Understanding their scaling laws — linear in temperature difference for the first two, fourth-power in absolute temperature for the third — is the physics of insulation, weather and thermal design.",
    objectives: [
      'Compute conduction rates with $P_\\text{cond} = kA\\Delta T/L$',
      'Distinguish conduction, convection and radiation by their mechanisms and scaling',
      'Apply the Stefan–Boltzmann law, including net exchange between a body and its surroundings',
    ],
    concepts: [
      {
        term: 'Conduction',
        kind: 'law',
        statement: "**Energy passed molecule-to-molecule through a slab of area $A$, thickness $L$, spanning a temperature difference $\\Delta T$ flows at rate $$P_\\text{cond} = kA\\,\\frac{\\Delta T}{L},$$ with thermal conductivity $k$ in W/m·K.** Copper conducts at $k \\approx 400$ W/m·K, steel $\\approx 50$, glass $\\approx 0.8$, body fat $\\approx 0.2$, wool or fiberglass insulation $\\approx 0.04$, still air $0.026$.",
        detail: 'Metallic conduction is dominated by free electrons, which is why the best electrical conductors are the best thermal ones. The rate scales with $\\Delta T/L$, a thermal "gradient-drive" analogous to Ohm\'s law; engineers combine materials in series as thermal resistances $R = L/kA$.',
      },
      {
        term: 'Convection',
        kind: 'definition',
        statement: "**Convection is energy transported by macroscopic motion of a fluid** — warm air rising, water circulating in a pot. Because the moving fluid carries its internal energy along, convection can move heat far faster than conduction alone.",
        detail: 'Natural convection is driven by buoyancy (warm fluid expands, becomes less dense, rises); forced convection uses a fan or pump. Its rate is captured empirically by Newton\'s law of cooling, $P_\\text{conv} = hA\\Delta T$, with a coefficient $h$ that depends on geometry and flow — messy because fluid dynamics is messy.',
      },
      {
        term: 'Radiation',
        kind: 'law',
        statement: "**Every surface emits electromagnetic radiation at a rate $$P_\\text{rad} = \\varepsilon\\sigma A T^{4},$$ with the Stefan–Boltzmann constant $\\sigma = 5.67\\times10^{-8}$ W/m²·K⁴, emissivity $0 \\le \\varepsilon \\le 1$, and $T$ in kelvin.** A body also absorbs from surroundings at $T_\\text{env}$, so the net radiated power is $$P_\\text{net} = \\varepsilon\\sigma A (T^{4} - T_\\text{env}^{4}).$$",
        detail: 'Radiation needs no medium — the Sun warms Earth across vacuum. A perfect emitter ($\\varepsilon = 1$) is a blackbody radiator, and good absorbers are good emitters at the same wavelengths: that is why white clothing and shiny thermal blankets ($\\varepsilon \\approx 0.1$) both work.',
      },
      {
        term: 'Why the fourth power dominates hot things',
        kind: 'insight',
        statement: '**Doubling the absolute temperature of a radiator multiplies its output by $2^4 = 16$.** At room temperature $T^4$ differences are gentle, so radiation competes with convection; at the 3000 K of a lamp filament or the 5800 K of the Sun\'s surface, radiation overwhelms everything else.',
        detail: 'This steep scaling is also why the Earth\'s surface temperature is so sensitive to small changes in the atmosphere\'s infrared opacity — the greenhouse effect lives in the fourth power.',
      },
      {
        term: "Heat Transfer Mechanisms: solution protocol",
        kind: "method",
        statement: "**Solve Heat Transfer Mechanisms problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is temperature, heat and the first law; the working equation is $\\Delta L = \\alpha L\\Delta T$, $Q = mc\\Delta T$, $Q = mL$, $\\Delta E_{\\text{int}} = Q-W$; every substitution must carry its units so the final unit (kelvin, joules, watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $c_{\\text{water}} = 4186\\ \\text{J/kg}\\cdot\\text{K}$; $\\alpha_{\\text{steel}} \\approx 12\\times 10^{-6}/\\text{K}$; no phase change for $Q = mc\\Delta T$; steady 1D conduction.",
      },
    ],
    examples: [
      {
        title: 'Conduction down a copper rod',
        problem: 'A copper rod ($k = 401$ W/m·K) has length 0.250 m and cross-sectional area $2.00\\times10^{-4}$ m². One end is held at 100 °C, the other at 0 °C. At what rate does heat flow along the rod?',
        steps: [
          { label: 'Apply the law', text: '$P_\\text{cond} = kA\\Delta T/L = (401)(2.00\\times10^{-4})(100)/(0.250)$.' },
          { label: 'Compute', text: 'Numerator: $(401)(2.00\\times10^{-4})(100) = 8.02$ W·m; dividing by $0.250$ m gives $P = 32.1$ W.' },
          { label: 'Check the scaling', text: 'Halving the rod length or doubling the area would double the rate; replacing copper with steel ($k \\approx 50$) would drop it by a factor of 8.' },
        ],
        result: 'Heat flows at about $32$ W — copper is a thermal expressway, which is why pot bottoms and heat-sink fins are made of it.',
      },
      {
        title: 'Radiative chill of exposed skin',
        problem: 'Estimate the net radiative loss from exposed skin at $T = 306$ K (33 °C) in a room at $T_\\text{env} = 293$ K (20 °C). Take area $A = 1.4$ m² and emissivity $\\varepsilon \\approx 1$ (skin is nearly a blackbody in the infrared).',
        steps: [
          { label: 'Radiated power', text: '$P_\\text{rad} = \\varepsilon\\sigma A T^4 = (5.67\\times10^{-8})(1.4)(306)^4$. Since $306^4 = 8.77\\times10^{9}$, this gives $P_\\text{rad} \\approx 696$ W.' },
          { label: 'Absorbed power', text: 'From the room, $P_\\text{abs} = (5.67\\times10^{-8})(1.4)(293)^4 = (5.67\\times10^{-8})(1.4)(7.37\\times10^{9}) \\approx 585$ W.' },
          { label: 'Net loss', text: '$P_\\text{net} = 696 - 585 \\approx 111$ W — a hefty fraction of the body\'s resting metabolic output of about 100 W.' },
        ],
        result: 'The skin loses roughly $110$ W by radiation alone — which is why you feel cold in a 20 °C room long before convection matters, and why reflective blankets of low $\\varepsilon$ rescue hypothermia victims.',
      },
    ],
    keyTakeaways: [
      'Conduction: $P = kA\\Delta T/L$ — linear in area and temperature difference, inverse in thickness; metals excel via free electrons.',
      'Convection moves energy with the fluid itself; radiation needs no medium and goes as $T^4$.',
      'Net radiation is $\\varepsilon\\sigma A(T^4 - T_\\text{env}^4)$; emissivity and absorptivity go together.',
    ],
    quiz: [
      { q: 'The conduction rate through a wall is $kA\\Delta T/L$. If the wall\'s thickness is doubled (all else fixed), the rate', options: ['halves', 'doubles', 'quadruples', 'is unchanged'], answer: 0, explanation: 'The rate is inversely proportional to the thickness: twice the thickness, twice the thermal path, half the flow.' },
      { q: 'A surface radiates power $P$ at absolute temperature $T$. At temperature $2T$ (all else equal) it radiates', options: [`$2P$`, `$4P$`, `$8P$`, `$16P$`], answer: 3, explanation: 'The Stefan–Boltzmann law has a fourth-power dependence: $(2T)^4 = 16T^4$.' },
      { q: 'A surface that strongly absorbs radiation of a given wavelength will, at that wavelength,', options: ['be a poor emitter', 'reflect it completely', 'conduct it away', 'be an equally strong emitter'], answer: 3, explanation: 'Absorptivity and emissivity are linked; a good absorber is a good emitter — the blackbody ideal has both equal to 1.' },
      { q: 'Which statement best captures convection?', options: ['Energy passes molecule-to-molecule with no bulk motion', 'Energy is carried by macroscopic circulation of fluid', 'Energy travels as electromagnetic waves through vacuum', 'Energy flows only in metals'], answer: 1, explanation: 'Convection = transport by the motion of the fluid itself (rising warm air, circulating water); the other options describe conduction and radiation.' },
    ],
  },
]
