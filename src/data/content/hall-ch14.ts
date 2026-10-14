import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e (Extended)
// Chapter 14 — Fluids (HRW pp. 386–412)
// 7 sections: 14.1 density/pressure · 14.2 fluids at rest · 14.3 measuring
// pressure · 14.4 Pascal · 14.5 Archimedes · 14.6 continuity · 14.7 Bernoulli
// ============================================================================

export const hallCh14Content: SectionContent[] = [
  // ------------------------------------------------------------------ 14.1
  {
    sectionId: 'hall-ch14-s1',
    readingTime: 5,
    intro: "A fluid is anything that flows — liquid or gas — because its layers slide past one another when sheared. Solids resist shear with rigidity; fluids respond by moving, and the only stress they can sustain at rest is a squeeze perpendicular to any surface. That squeeze, measured as force per area, is pressure, and it is the central character of this chapter: fluids push, and how they push explains dams, ship floats, blood flow, and airplane lift.",
    objectives: [
      'Define density and pressure, with SI units and everyday magnitudes',
      'Explain why pressure in a static fluid is a scalar acting in all directions',
      'Compute pressure under a given force and area',
    ],
    concepts: [
      {
        term: 'What is a fluid',
        kind: 'definition',
        statement: 'A **fluid** is a substance that cannot sustain a shear stress at rest — it keeps deforming (flows) under any applied shear. Liquids and gases are both fluids; solids are not.',
        detail: 'Liquids are nearly incompressible and keep a fixed volume; gases expand to fill any container. Both share the pressure-based mechanics developed here.',
      },
      {
        term: 'Density',
        kind: 'definition',
        statement: 'Density is mass per unit volume, $$\\rho = \\frac{m}{V}.$$ Benchmark values: water $1000\\ \\mathrm{kg/m^3}$ (by definition, $1\\ \\mathrm{g/cm^3}$), air $1.21$, ice $917$, aluminum $2700$, mercury $13{,}600$, gold $19{,}300\\ \\mathrm{kg/m^3}$.',
        detail: 'Specific gravity is the ratio of a density to water\u2019s: mercury\u2019s 13.6 and gold\u2019s 19.3 read straight off this table.',
      },
      {
        term: 'Pressure',
        kind: 'definition',
        statement: 'Pressure is the magnitude of the normal force per unit area, $$p = \\frac{F}{A},$$ measured in pascals: $1\\ \\mathrm{Pa} = 1\\ \\mathrm{N/m^2}$. Atmospheric pressure is $1$ atm $= 1.01\\times10^{5}$ Pa $= 760$ mm of mercury.',
        detail: 'Pressure is a **scalar**: at a point in a static fluid it has the same value in every direction, because any small test surface placed there is pushed equally no matter how it is oriented.',
      },
      {
        term: 'Small area, huge pressure',
        kind: 'insight',
        statement: 'The same force spread over a smaller area produces proportionally larger pressure — a stiletto heel concentrates body weight onto a square centimeter, a hypodermic needle onto a fraction of a square millimeter.',
        detail: 'Conversely, wide tires and snowshoes *reduce* pressure by enlarging the area. Engineering pressure is mostly the engineering of area.',
      },
      {
        term: "Fluids, Density, and Pressure: solution protocol",
        kind: "method",
        statement: "**Solve Fluids, Density, and Pressure problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is hydrostatics and ideal flow; the working equation is $\\rho = m/V$, $p = p_0+\\rho gh$, $F_b = \\rho_{\\text{fluid}}Vg$, $A_1v_1 = A_2v_2$, $p+\\tfrac12\\rho v^2+\\rho gy = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$ and $\\text{kg/m}^3$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$; incompressible, nonviscous, steady flow for Bernoulli.",
      },
    ],
    examples: [
      {
        title: 'Stiletto versus elephant',
        problem: 'A 50 kg woman puts all her weight on one stiletto heel of area $1.0\\ \\mathrm{cm^2} = 1.0\\times10^{-4}\\ \\mathrm{m^2}$. A 3000 kg elephant stands on four feet of total contact area $0.060\\ \\mathrm{m^2}$. Compare the pressures.',
        steps: [
          { label: 'Woman\u2019s force', text: '$F = mg = 50 \\times 9.8 = 4.9\\times10^{2}$ N.' },
          { label: 'Woman\u2019s pressure', text: '$p = F/A = 4.9\\times10^{2}/1.0\\times10^{-4} = 4.9\\times10^{6}$ Pa $\\approx 48$ atm.' },
          { label: 'Elephant\u2019s pressure', text: '$F = 3000 \\times 9.8 = 2.94\\times10^{4}$ N; $p = 2.94\\times10^{4}/0.060 = 4.9\\times10^{5}$ Pa $\\approx 4.8$ atm.' },
          { label: 'Compare', text: 'The heel exceeds the elephant\u2019s foot pressure by a factor of ten — and dents wooden floors accordingly.' },
        ],
        result: 'Heel: $4.9\\times10^{6}$ Pa; elephant: $4.9\\times10^{5}$ Pa. Same physics, opposite strategies of area.',
      },
      {
        title: "Fluids, Density, and Pressure: hydrostatic check",
        problem: "Find the absolute pressure $10\\ \\text{m}$ below the surface of water ($p_0 = 1.01\\times 10^5\\ \\text{Pa}$).",
        steps: [
          { label: "Formula", text: "$p = p_0+\\rho gh$." },
          { label: "Substitute", text: "$p = 1.01\\times 10^5+1000\\times 9.8\\times 10 = 1.01\\times 10^5+98000$." },
          { label: "Compute", text: "$p \\approx 1.99\\times 10^{+5}\\ \\text{Pa}$ ($\\approx 1.97\\ \\text{atm}$)." },
        ],
        result: "$p \\approx 1.99\\times 10^{+5}\\ \\text{Pa}$.",
      },
    ],
    keyTakeaways: [
      '$\\rho = m/V$; water is $1000\\ \\mathrm{kg/m^3}$, mercury $13{,}600$, gold $19{,}300$.',
      '$p = F/A$ in pascals; $1$ atm $= 1.01\\times10^{5}$ Pa.',
      'Pressure is a scalar with no direction; the associated force is always perpendicular to whatever surface it acts on.',
    ],
    quiz: [
      {
        q: 'Pressure at a point in a static fluid:',
        options: ['is a vector along the area normal', 'is a scalar, with the same value in every direction at that point', 'depends on the total area of the container', 'has units of newtons'],
        answer: 1,
        explanation: 'Any small surface at the point is pushed equally regardless of orientation — so only a magnitude exists.',
      },
      {
        q: 'One atmosphere expressed in pascals is about:',
        options: [`$1.01\\times10^{3}$`, `$1.01\\times10^{5}$`, `$9.8$`, `$1.01\\times10^{7}$`],
        answer: 1,
        explanation: 'Standard atmospheric pressure is $1.01\\times10^{5}$ Pa — roughly 10 tonnes pressing on every square meter.',
      },
      {
        q: 'A 60 kg person stands on one foot of contact area $0.020\\ \\mathrm{m^2}$. The average pressure is about:',
        options: ['$2.9\\times10^{4}$ Pa', '$5.9\\times10^{4}$ Pa', '$2.9\\times10^{3}$ Pa', '$1.5\\times10^{5}$ Pa'],
        answer: 0,
        explanation: '$p = mg/A = 588/0.020 = 2.94\\times10^{4}$ Pa — about a third of an atmosphere above ambient.',
      },
      {
        q: 'Liquids and gases are both fluids because both:',
        options: ['hold a fixed shape', 'cannot sustain a shear stress at rest and flow instead', 'are incompressible', 'transmit only normal forces when moving'],
        answer: 1,
        explanation: 'Flow under shear is the defining property; the rest are details of the particular fluid.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.2
  {
    sectionId: 'hall-ch14-s2',
    readingTime: 6,
    intro: "Drop a sensor into still water and it reads the same pressure at a given depth no matter where it is moved horizontally — but lower it further and the reading climbs. A fluid's own weight stacks pressure onto pressure: every layer must carry everything above it. One short derivation gives the law of hydrostatics, $p = p_0 + \\rho gh$, and with it the design of dams, diving tables, and the reason your ears pop.",
    objectives: [
      "Derive $p = p_0 + \\rho gh$ from Newton's second law applied to a fluid column",
      "Distinguish gauge from absolute pressure",
      'Explain why pressure at a depth is independent of container shape',
    ],
    concepts: [
      {
        term: 'Pressure variation with depth',
        kind: 'method',
        statement: "Balance the vertical forces on a vertical cylinder of fluid of height $h$ and cross-section $A$: the bottom must push up harder than the top pushes down, by the column's weight. Hence $$p = p_0 + \\rho g h,$$ where $p_0$ is the pressure at the top surface (often the atmosphere).",
        detail: 'The increment $\\rho gh$ is the weight of fluid per unit area above you: about $9.8\\times10^{3}$ Pa per meter of freshwater, i.e. one extra atmosphere every 10.3 m.',
      },
      {
        term: 'Shape independence',
        kind: 'insight',
        statement: 'At a given depth in a connected fluid at rest, the pressure is the same everywhere — no matter how the container narrows, widens, or coils on its way to that depth.',
        detail: 'This *hydrostatic paradox* fools intuition: a skinny 10 m tube of water bursts a plug at its base with the same force per area as a whole 10 m lake pressing on it. Only the height of fluid above matters, not its amount.',
      },
      {
        term: 'Gauge versus absolute pressure',
        kind: 'notation',
        statement: '**Gauge pressure** is the reading above ambient: $p_{gauge} = \\rho gh$ below an open surface. **Absolute pressure** includes the atmosphere: $p_{abs} = p_{atm} + \\rho gh$. Tire gauges and most pressure sensors read gauge.',
        detail: 'The distinction is a life-or-death matter in diving and vacuum work: a $\\rho gh$ of 4 atm gauge at 40 m depth is 5 atm absolute.',
      },
      {
        term: 'Fluids push on every surface',
        kind: 'insight',
        statement: 'The pressure force on any submerged surface acts perpendicular to that surface, with magnitude $pA$. Curved dam walls, submarine hulls, and your eardrums all feel this normal push from every direction at once.',
        detail: 'Because the force is everywhere normal, deep containers fail along their seams — pressure tries to burst them radially outward, not to drag them down.',
      },
      {
        term: "Fluids at Rest: solution protocol",
        kind: "method",
        statement: "**Solve Fluids at Rest problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is hydrostatics and ideal flow; the working equation is $\\rho = m/V$, $p = p_0+\\rho gh$, $F_b = \\rho_{\\text{fluid}}Vg$, $A_1v_1 = A_2v_2$, $p+\\tfrac12\\rho v^2+\\rho gy = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$ and $\\text{kg/m}^3$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$; incompressible, nonviscous, steady flow for Bernoulli.",
      },
    ],
    examples: [
      {
        title: 'A scuba diver at 30 m',
        problem: 'A diver descends to 30 m in a freshwater lake ($\\rho = 1000\\ \\mathrm{kg/m^3}$; $p_{atm} = 1.01\\times10^{5}$ Pa). Find the gauge and absolute pressures, and explain why the diver must never hold their breath while ascending.',
        steps: [
          { label: 'Gauge pressure', text: '$p_{gauge} = \\rho gh = (1000)(9.8)(30) = 2.94\\times10^{5}$ Pa $\\approx 2.9$ atm.' },
          { label: 'Absolute pressure', text: '$p_{abs} = 1.01\\times10^{5} + 2.94\\times10^{5} = 3.95\\times10^{5}$ Pa $\\approx 3.9$ atm.' },
          { label: 'Rule of thumb check', text: '30 m is about three 10.3 m increments, so roughly 3 extra atmospheres — consistent.' },
          { label: 'The ascent warning', text: 'As $h$ shrinks, the water pressure squeezing the diver\u2019s lungs falls, so trapped air expands proportionally ($\\sim 1/p$); holding your breath risks rupturing the lungs.' },
        ],
        result: 'About 2.9 atm gauge, 3.9 atm absolute at 30 m — and a physics reason for the first rule of scuba: keep breathing.',
      },
      {
        title: "Fluids at Rest: hydrostatic check",
        problem: "Find the absolute pressure $15\\ \\text{m}$ below the surface of water ($p_0 = 1.01\\times 10^5\\ \\text{Pa}$).",
        steps: [
          { label: "Formula", text: "$p = p_0+\\rho gh$." },
          { label: "Substitute", text: "$p = 1.01\\times 10^5+1000\\times 9.8\\times 15 = 1.01\\times 10^5+1.47\\times 10^{+5}$." },
          { label: "Compute", text: "$p \\approx 2.48\\times 10^{+5}\\ \\text{Pa}$ ($\\approx 2.46\\ \\text{atm}$)." },
        ],
        result: "$p \\approx 2.48\\times 10^{+5}\\ \\text{Pa}$.",
      },
    ],
    keyTakeaways: [
      '$p = p_0 + \\rho gh$: depth, not amount of fluid, sets the pressure.',
      'Freshwater adds about one atmosphere per 10.3 m of depth.',
      'Gauge pressure excludes the atmosphere; absolute pressure includes it.',
    ],
    quiz: [
      {
        q: 'The gauge pressure at depth $h$ below the open surface of a liquid of density $\\rho$ is:',
        options: [`$\\rho g h$`, `$p_{atm} + \\rho g h$`, `$\\rho h / g$`, `$\\rho g / h$`],
        answer: 0,
        explanation: 'Gauge means above the ambient surface pressure; only the fluid\u2019s own weight column contributes.',
      },
      {
        q: 'The absolute pressure at the bottom of a 10 m deep pool open to 1 atm is about:',
        options: ['1 atm', '1.5 atm', '2 atm', '10 atm'],
        answer: 2,
        explanation: '$\\rho gh \\approx 0.98\\times10^{5}$ Pa $\\approx 1$ atm of extra gauge pressure, so about 2 atm absolute.',
      },
      {
        q: 'At a given depth in a connected fluid at rest, the pressure:',
        options: [
          'depends on the shape of the container above that point',
          'is the same at all points at that depth',
          'is larger under narrow columns',
          'depends on the total volume of fluid',
        ],
        answer: 1,
        explanation: 'Only the height of fluid above matters — the hydrostatic paradox.',
      },
      {
        q: 'A diver must never hold their breath while ascending because:',
        options: [
          'air expands as ambient pressure drops, which can rupture the lungs',
          'air contracts as ambient pressure drops',
          'nitrogen dissolves instantly',
          'the buoyancy vest fails',
        ],
        answer: 0,
        explanation: 'The lung\u2019s trapped air follows the falling ambient pressure and expands; the lungs are not infinitely stretchable.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.3
  {
    sectionId: 'hall-ch14-s3',
    readingTime: 5,
    intro: "You cannot weigh the atmosphere, but you can let it hold up a column of mercury and measure the column. Torricelli's 1643 barometer did exactly that and, in the process, produced the first sustained vacuum and the unit that weather reports still use. The same liquid-column trick, deployed as the open-tube manometer, turns any unknown gas pressure into a readable height difference.",
    objectives: [
      'Compute barometer column heights from $p = \\rho gh$',
      'Read an open-tube manometer as a gauge-pressure meter',
      'Convert among Pa, atm, and mmHg (torr)',
    ],
    concepts: [
      {
        term: 'The mercury barometer',
        kind: 'method',
        statement: 'A tube closed at one end is filled with mercury, inverted into a pool. The liquid falls until its weight per area balances atmospheric pressure: $$p_{atm} = \\rho g h \\Rightarrow h = 760\\ \\mathrm{mm}$$ for standard air, leaving a near-vacuum above the column.',
        detail: 'Torricelli\u2019s insight: the atmosphere is an ocean of air pressing on the pool\u2019s surface, and the column stands exactly as high as that push can support.',
      },
      {
        term: 'The open-tube manometer',
        kind: 'method',
        statement: 'A U-tube open to the atmosphere connects to a gas supply. The gas\u2019s **gauge pressure** is $p_{gauge} = \\rho g\\Delta h$, where $\\Delta h$ is the difference in the two liquid levels — positive when the gas side is pushed higher, negative when it is sucked lower.',
        detail: 'Closed-tube versions read absolute pressure when the sealed side is evacuated. Both devices translate pressure into the one quantity human eyes measure best: a length.',
      },
      {
        term: 'Units of pressure',
        kind: 'notation',
        statement: '$1$ atm $= 1.01\\times10^{5}$ Pa $= 760$ mmHg $= 760$ torr $\\approx 1$ bar. Blood pressure 120/80 mmHg is gauge pressure in these torr units.',
        detail: 'The mmHg survives medicine and meteorology because the barometer was the first pressure gauge; SI purists convert everything to pascals.',
      },
      {
        term: "Measuring Pressure: solution protocol",
        kind: "method",
        statement: "**Solve Measuring Pressure problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is hydrostatics and ideal flow; the working equation is $\\rho = m/V$, $p = p_0+\\rho gh$, $F_b = \\rho_{\\text{fluid}}Vg$, $A_1v_1 = A_2v_2$, $p+\\tfrac12\\rho v^2+\\rho gy = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$ and $\\text{kg/m}^3$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$; incompressible, nonviscous, steady flow for Bernoulli.",
      },
      {
        term: "Measuring Pressure: scales and validity",
        kind: "insight",
        statement: "**Measuring Pressure lives at $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$ and the textbook model holds while incompressible, nonviscous, steady flow for Bernoulli.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Measuring Pressure calculation gives seconds when $\\text{Pa}$ and $\\text{kg/m}^3$ demands meters, or a value orders of magnitude beyond $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$, recheck the setup before trusting the arithmetic.",
      },
    ],
    figures: [
      {
        caption: 'Torricelli\u2019s mercury barometer: atmospheric pressure on the pool surface supports a 760 mm column, $p_{atm} = \\rho g h = (13{,}600)(9.8)(0.760) \\approx 1.01\\times10^{5}$ Pa. Above the column sits only a trace of mercury vapor.',
        svg: `<svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mercury barometer: inverted tube in a pool, 760 mm column">
  <rect x="0" y="0" width="720" height="340" fill="currentColor" opacity="0"/>
  <rect x="181" y="225" width="358" height="74" fill="currentColor" opacity="0.15"/>
  <path d="M180,225 L180,299 L540,299 L540,225" fill="none" stroke="currentColor" stroke-width="3"/>
  <rect x="331" y="125" width="18" height="147" fill="currentColor" opacity="0.3"/>
  <line x1="330" y1="62" x2="330" y2="272" stroke="currentColor" stroke-width="2.5"/>
  <line x1="350" y1="62" x2="350" y2="272" stroke="currentColor" stroke-width="2.5"/>
  <line x1="330" y1="62" x2="350" y2="62" stroke="currentColor" stroke-width="3"/>
  <text x="365" y="98" font-size="14" fill="currentColor">near-vacuum (Hg vapor only)</text>
  <line x1="322" y1="125" x2="322" y2="225" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="322,125 318,134 326,134" fill="currentColor"/>
  <polygon points="322,225 318,216 326,216" fill="currentColor"/>
  <text x="312" y="181" font-size="14" fill="currentColor" text-anchor="end">h = 760 mm</text>
  <line x1="330" y1="125" x2="250" y2="125" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
  <line x1="330" y1="225" x2="250" y2="225" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
  <line x1="245" y1="198" x2="245" y2="222" stroke="currentColor" stroke-width="2"/>
  <polygon points="245,225 241,216 249,216" fill="currentColor"/>
  <line x1="415" y1="198" x2="415" y2="222" stroke="currentColor" stroke-width="2"/>
  <polygon points="415,225 411,216 419,216" fill="currentColor"/>
  <line x1="495" y1="198" x2="495" y2="222" stroke="currentColor" stroke-width="2"/>
  <polygon points="495,225 491,216 499,216" fill="currentColor"/>
  <text x="372" y="196" font-size="13" fill="currentColor" opacity="0.8">atmosphere presses on the pool surface</text>
  <text x="470" y="272" font-size="14" fill="currentColor">mercury pool</text>
  <text x="360" y="326" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.85">the column height measures p_atm independently of tube width</text>
</svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Why mercury, not water',
        problem: 'How tall would a water barometer have to be to read standard atmospheric pressure ($\\rho_w = 1000$, $\\rho_{Hg} = 13{,}600\\ \\mathrm{kg/m^3}$)?',
        steps: [
          { label: 'Solve for height', text: '$h = p_{atm}/\\rho g$.' },
          { label: 'Water column', text: '$h = 1.01\\times10^{5}/(1000)(9.8) = 10.3$ m — a three-story instrument.' },
          { label: 'Mercury column', text: 'For comparison $h = 1.01\\times10^{5}/(13{,}600)(9.8) = 0.760$ m, a convenient desktop size.' },
          { label: 'Why the difference', text: 'The heights scale as $1/\\rho$; mercury\u2019s 13.6-fold density makes the column 13.6 times shorter.' },
        ],
        result: '10.3 m of water versus 0.760 m of mercury: mercury\u2019s density makes the barometer pocket-sized — and gives the mmHg its name.',
      },
      {
        title: "Measuring Pressure: hydrostatic check",
        problem: "Find the absolute pressure $20\\ \\text{m}$ below the surface of water ($p_0 = 1.01\\times 10^5\\ \\text{Pa}$).",
        steps: [
          { label: "Formula", text: "$p = p_0+\\rho gh$." },
          { label: "Substitute", text: "$p = 1.01\\times 10^5+1000\\times 9.8\\times 20 = 1.01\\times 10^5+1.96\\times 10^{+5}$." },
          { label: "Compute", text: "$p \\approx 2.97\\times 10^{+5}\\ \\text{Pa}$ ($\\approx 2.94\\ \\text{atm}$)." },
        ],
        result: "$p \\approx 2.97\\times 10^{+5}\\ \\text{Pa}$.",
      },
    ],
    keyTakeaways: [
      'A barometer converts pressure into a height: $h = p/\\rho g$.',
      '760 mmHg $= 1$ atm $= 1.01\\times10^{5}$ Pa.',
      'A manometer reads gauge pressure as a liquid-level difference.',
    ],
    quiz: [
      {
        q: 'A mercury barometer reads 760 mm at sea level. On a mountain where atmospheric pressure is 0.90 atm, it reads about:',
        options: ['760 mm', '684 mm', '844 mm', '90 mm'],
        answer: 1,
        explanation: '$h \\propto p$: $0.90 \\times 760 = 684$ mm.',
      },
      {
        q: 'Water is impractical as a barometer liquid mainly because:',
        options: ['it evaporates instantly', 'the column would need to be about 10.3 m tall', 'water is too dense', 'water is compressible'],
        answer: 1,
        explanation: 'Its low density demands a ten-meter tube — and water vapor contaminates the vacuum.',
      },
      {
        q: 'In an open-tube manometer, the gas gauge pressure equals:',
        options: ['$\\rho g \\Delta h$, the difference in liquid levels', 'atmospheric pressure', 'the absolute gas pressure', 'zero'],
        answer: 0,
        explanation: 'The open leg contributes $p_{atm}$; the level difference carries the excess — the gauge value.',
      },
      {
        q: 'The space above the mercury column in Torricelli\u2019s barometer:',
        options: ['contains air at 1 atm', 'contains only negligible mercury vapor', 'is filled with water vapor', 'pulls the mercury upward'],
        answer: 1,
        explanation: 'The liquid falls away from the closed end leaving essentially empty space — the first laboratory vacuum.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.4
  {
    sectionId: 'hall-ch14-s4',
    readingTime: 5,
    intro: 'Pump a car\u2019s brake pedal and the force of your foot appears, undiminished in pressure, at four tiny cylinders meters away. That is Pascal\u2019s principle: squeeze an enclosed fluid anywhere and every bit of the fluid — and every wall it touches — feels the same added pressure. Combined with pistons of different areas, it multiplies forces like a hydraulic lever.',
    objectives: [
      'State Pascal\u2019s principle for enclosed fluids',
      'Compute the force multiplication of a hydraulic lift',
      'Explain why pressure is multiplied but energy is not',
    ],
    concepts: [
      {
        term: "Pascal's principle",
        kind: 'law',
        statement: 'A pressure change applied to an enclosed fluid is transmitted **undiminished to every portion of the fluid and to the walls of its container**. Squeezing anywhere squeezes everywhere.',
        detail: 'The principle is a corollary of the incompressibility of liquids combined with the isotropy of pressure — an extra push at one point must be carried equally by the whole connected volume.',
      },
      {
        term: 'The hydraulic lever',
        kind: 'method',
        statement: 'An input piston of area $A_1$ pushed with force $F_1$ creates $p = F_1/A_1$. An output piston of area $A_2$ then delivers $$F_2 = p\\,A_2 = F_1\\frac{A_2}{A_1}.$$ Area ratio 50 gives a 50-fold force gain.',
        detail: 'Applications: hydraulic car lifts and jacks, dentist chairs, power-steering and brake systems, and the fluid-driven machinery of construction sites.',
      },
      {
        term: 'No free lunch',
        kind: 'insight',
        statement: 'Energy is conserved: the work you do on the small piston equals the work the large piston does, $F_1 d_1 = F_2 d_2$. To gain 50 in force you pay 50 in stroke — lifting the car 1 cm means pumping the small piston 50 cm.',
        detail: 'The hydraulic lift trades distance for force, exactly as a lever or a block-and-tackle does; it never trades energy.',
      },
      {
        term: "Pascal's Principle: solution protocol",
        kind: "method",
        statement: "**Solve Pascal's Principle problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is hydrostatics and ideal flow; the working equation is $\\rho = m/V$, $p = p_0+\\rho gh$, $F_b = \\rho_{\\text{fluid}}Vg$, $A_1v_1 = A_2v_2$, $p+\\tfrac12\\rho v^2+\\rho gy = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$ and $\\text{kg/m}^3$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$; incompressible, nonviscous, steady flow for Bernoulli.",
      },
      {
        term: "Pascal's Principle: scales and validity",
        kind: "insight",
        statement: "**Pascal's Principle lives at $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$ and the textbook model holds while incompressible, nonviscous, steady flow for Bernoulli.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Pascal's Principle calculation gives seconds when $\\text{Pa}$ and $\\text{kg/m}^3$ demands meters, or a value orders of magnitude beyond $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Lifting a car with a bathroom scale\u2019s worth of force',
        problem: 'A hydraulic lift has an input piston of area $A_1 = 10\\ \\mathrm{cm^2} = 1.0\\times10^{-3}\\ \\mathrm{m^2}$ and an output piston of area $A_2 = 500\\ \\mathrm{cm^2} = 5.0\\times10^{-2}\\ \\mathrm{m^2}$. The input piston is pushed with $F_1 = 100$ N. Find the lift force and the stroke ratio.',
        steps: [
          { label: 'Pressure transmitted', text: '$p = F_1/A_1 = 100/1.0\\times10^{-3} = 1.0\\times10^{5}$ Pa — one atmosphere of added pressure.' },
          { label: 'Output force', text: '$F_2 = pA_2 = (1.0\\times10^{5})(5.0\\times10^{-2}) = 5.0\\times10^{3}$ N.' },
          { label: 'What it lifts', text: '$F_2/mg = 5000/9.8 \\approx 510$ kg of car.' },
          { label: 'Stroke ratio', text: 'By energy conservation $d_2 = d_1(A_1/A_2)$: to raise the car 1.0 cm you must stroke the input piston $d_1 = 1.0\\ \\mathrm{cm}\\times 50 = 50$ cm.' },
        ],
        result: 'A 100 N push (a sturdy one-handed press) lifts half a tonne — over a 50-times-shorter distance.',
      },
      {
        title: "Pascal's Principle: hydrostatic check",
        problem: "Find the absolute pressure $5\\ \\text{m}$ below the surface of water ($p_0 = 1.01\\times 10^5\\ \\text{Pa}$).",
        steps: [
          { label: "Formula", text: "$p = p_0+\\rho gh$." },
          { label: "Substitute", text: "$p = 1.01\\times 10^5+1000\\times 9.8\\times 5 = 1.01\\times 10^5+49000$." },
          { label: "Compute", text: "$p \\approx 1.50\\times 10^{+5}\\ \\text{Pa}$ ($\\approx 1.49\\ \\text{atm}$)." },
        ],
        result: "$p \\approx 1.50\\times 10^{+5}\\ \\text{Pa}$.",
      },
    ],
    keyTakeaways: [
      'Pressure applied to an enclosed fluid is transmitted everywhere undiminished.',
      '$F_2/F_1 = A_2/A_1$ — the hydraulic lever.',
      'Work is not multiplied: force gains are paid for in stroke length.',
    ],
    quiz: [
      {
        q: "Pascal's principle states that a pressure change applied to an enclosed fluid is:",
        options: [
          'amplified by the container walls',
          'transmitted undiminished to every portion of the fluid and to the walls',
          'reduced by the fluid\u2019s weight',
          'converted to temperature',
        ],
        answer: 1,
        explanation: 'Every connected point of the fluid feels the same increment — the basis of all hydraulics.',
      },
      {
        q: 'A hydraulic lift multiplies the input force by 50. To raise the output piston 1.0 cm, the input piston must move:',
        options: ['1.0 cm', '2.0 cm', '50 cm', '2500 cm'],
        answer: 2,
        explanation: 'Equal work: $F_2d_2 = F_1d_1$ gives $d_1 = 50\\,d_2$ when the force ratio is 50.',
      },
      {
        q: 'The hydraulic system does NOT multiply:',
        options: ['force', 'pressure difference', 'energy', 'torque capability'],
        answer: 2,
        explanation: 'Energy in equals energy out (ideally); force and stroke trade off one for one.',
      },
      {
        q: 'Brake fluid in a car\u2019s hydraulic system must be:',
        options: ['compressible, to absorb shocks', 'essentially incompressible so pedal pressure transmits instantly to the wheel cylinders', 'very dense', 'gaseous'],
        answer: 1,
        explanation: 'Compression would soak up pedal travel as fluid-squeeze instead of transmitting it — Pascal\u2019s principle needs incompressibility.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.5
  {
    sectionId: 'hall-ch14-s5',
    readingTime: 6,
    intro: "Why does a steel ship float while its cargo of solid steel sinks? Archimedes answered 2200 years ago with a rule of disarming simplicity: a fluid pushes up on any immersed body with a force equal to the weight of the fluid the body displaces. The upthrust has nothing to do with the object's material — only with the hole it makes in the liquid. Hiero's suspected-gold crown, specific gravity measurements, submarines, and helium balloons all live inside one formula.",
    objectives: [
      'State Archimedes\u2019 principle and derive it from hydrostatic pressure',
      'Predict floating depth from density ratios',
      'Compute apparent weights of submerged objects',
    ],
    concepts: [
      {
        term: "Archimedes' principle",
        kind: 'law',
        statement: "A body wholly or partially immersed in a fluid is pushed up by a **buoyant force** equal to the weight of the fluid displaced: $$F_b = \\rho_{fluid}\\, g\\, V_{disp},$$ directed vertically upward through the center of gravity of the displaced fluid.",
        detail: 'The force depends only on the fluid\u2019s density and the displaced volume — never on the object\u2019s material, shape, or mass.',
      },
      {
        term: 'Why buoyancy exists',
        kind: 'method',
        statement: 'Pressure grows with depth ($\\rho gh$), so the fluid pushes harder on an immersed body\u2019s bottom than on its top. The difference, integrated over the body, is $F_b = (p_{bottom} - p_{top})A = \\rho g V_{disp}$ for a simple block — and for any shape.',
        detail: 'Buoyancy is hydrostatics in disguise: nothing new is added to pressure, it only acts unevenly because the body occupies a pressure gradient.',
      },
      {
        term: 'The rule of flotation',
        kind: 'method',
        statement: 'A floating body displaces exactly its own weight of fluid. Hence the submerged fraction equals the density ratio: $$\\frac{V_{disp}}{V_{body}} = \\frac{\\rho_{body}}{\\rho_{fluid}}.$$ Ice ($917\\ \\mathrm{kg/m^3}$) rides 91.7% below fresh water; a ship is a hollow steel bowl whose *average* density is below water\u2019s.',
        detail: 'Load a ship and it sits deeper — increasing displaced weight to match. The Plimsoll line on a hull marks the legal limit of this loading, higher for warm, salty, less-dense tropical water.',
      },
      {
        term: 'Apparent weight and density measurement',
        kind: 'method',
        statement: 'Weighing an object in air and then in liquid gives the buoyant force by difference, and from it the object\u2019s volume — hence its density. Legend says Archimedes used exactly this to expose the goldsmith\u2019s silver-debased crown for King Hiero.',
        detail: 'Submerged apparent weight: $W_{app} = mg\\,(1 - \\rho_f/\\rho_{body})$. When $\\rho_{body} < \\rho_f$ this goes negative — the object is pushed up, not pulled down.',
      },
      {
        term: "Archimedes' Principle: solution protocol",
        kind: "method",
        statement: "**Solve Archimedes' Principle problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is hydrostatics and ideal flow; the working equation is $\\rho = m/V$, $p = p_0+\\rho gh$, $F_b = \\rho_{\\text{fluid}}Vg$, $A_1v_1 = A_2v_2$, $p+\\tfrac12\\rho v^2+\\rho gy = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$ and $\\text{kg/m}^3$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$; incompressible, nonviscous, steady flow for Bernoulli.",
      },
    ],
    figures: [
      {
        caption: 'Buoyancy as displaced volume. The floating block pushes liquid out of a volume $V_{disp}$ (shaded); the liquid pushes back with $F_b = \\rho_w g V_{disp}$ acting at the center of buoyancy. Floating in equilibrium means $F_b = W = \\rho_{body} g V_{body}$, so the submerged fraction equals the density ratio $\\rho_{body}/\\rho_w$.',
        svg: `<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Floating block with displaced volume and buoyant and weight forces">
  <rect x="0" y="0" width="720" height="380" fill="currentColor" opacity="0"/>
  <path d="M140,60 L140,330 L580,330 L580,60" fill="none" stroke="currentColor" stroke-width="3"/>
  <rect x="141" y="140" width="438" height="190" fill="currentColor" opacity="0.08"/>
  <line x1="140" y1="140" x2="580" y2="140" stroke="currentColor" stroke-width="2" opacity="0.55"/>
  <text x="572" y="126" font-size="14" fill="currentColor" text-anchor="end">liquid, density ρ_w</text>
  <rect x="300" y="70" width="120" height="180" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <rect x="300" y="140" width="120" height="110" fill="currentColor" opacity="0.25"/>
  <rect x="300" y="140" width="120" height="110" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.7"/>
  <text x="424" y="160" font-size="13" fill="currentColor">displaced</text>
  <text x="424" y="176" font-size="13" fill="currentColor">volume V_disp</text>
  <line x1="345" y1="195" x2="345" y2="82" stroke="currentColor" stroke-width="3"/>
  <polygon points="345,70 339,84 351,84" fill="currentColor"/>
  <text x="337" y="66" font-size="14" fill="currentColor" text-anchor="end">F_b = ρ_w g V_disp</text>
  <line x1="375" y1="160" x2="375" y2="288" stroke="currentColor" stroke-width="3"/>
  <polygon points="375,300 369,286 381,286" fill="currentColor"/>
  <text x="383" y="298" font-size="14" fill="currentColor">W = ρ_body g V_body</text>
  <circle cx="345" cy="195" r="3" fill="currentColor"/>
  <circle cx="375" cy="160" r="3" fill="currentColor"/>
  <line x1="140" y1="140" x2="292" y2="140" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>
  <text x="214" y="132" font-size="13" fill="currentColor" opacity="0.8">waterline</text>
  <text x="360" y="358" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.85">floating in equilibrium: F_b = W, so V_disp / V_body = ρ_body / ρ_w</text>
</svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Crown tests and icebergs',
        problem: "(a) A 1.0 kg aluminum block ($\\rho = 2700\\ \\mathrm{kg/m^3}$) hangs from a scale submerged in water. What does the scale read? (b) What fraction of an ice floe ($\\rho_i = 917$) rides below fresh water ($\\rho_w = 1000$)? Below seawater ($\\rho_{sw} = 1025$)?",
        steps: [
          { label: 'Block volume', text: '$V = m/\\rho = 1.0/2700 = 3.7\\times10^{-4}\\ \\mathrm{m^3}$.' },
          { label: 'Buoyant force', text: '$F_b = \\rho_w g V = (1000)(9.8)(3.7\\times10^{-4}) = 3.6$ N.' },
          { label: 'Apparent weight', text: '$W_{app} = 9.8 - 3.6 = 6.2$ N — the scale reads about 63% of the in-air value. (This ratio measures density: exactly Archimedes\u2019 crown test.)' },
          { label: 'Ice fractions', text: 'Fresh water: $917/1000 = 91.7\\%$ submerged. Seawater: $917/1025 = 89.5\\%$ submerged.' },
        ],
        result: 'The block reads 6.2 N in water; ice rides 91.7% under fresh water and 89.5% under seawater — which is why sailors repeat that you see only a tenth of an iceberg.',
      },
      {
        title: "Archimedes' Principle: hydrostatic check",
        problem: "Find the absolute pressure $10\\ \\text{m}$ below the surface of water ($p_0 = 1.01\\times 10^5\\ \\text{Pa}$).",
        steps: [
          { label: "Formula", text: "$p = p_0+\\rho gh$." },
          { label: "Substitute", text: "$p = 1.01\\times 10^5+1000\\times 9.8\\times 10 = 1.01\\times 10^5+98000$." },
          { label: "Compute", text: "$p \\approx 1.99\\times 10^{+5}\\ \\text{Pa}$ ($\\approx 1.97\\ \\text{atm}$)." },
        ],
        result: "$p \\approx 1.99\\times 10^{+5}\\ \\text{Pa}$.",
      },
    ],
    keyTakeaways: [
      '$F_b = \\rho_{fluid}\\,g\\,V_{disp}$ — the weight of fluid pushed aside, nothing more.',
      'Floating: submerged fraction $= \\rho_{body}/\\rho_{fluid}$.',
      'Weighing in and out of a liquid yields the object\u2019s density.',
    ],
    quiz: [
      {
        q: 'A 2.0 N wooden block floats at rest with 60% of its volume submerged. The buoyant force on it is:',
        options: ['1.2 N', '2.0 N', '0.8 N', 'impossible to determine'],
        answer: 1,
        explanation: 'Floating at rest means equilibrium: the buoyant force exactly balances the 2.0 N weight, whatever the submerged fraction.',
      },
      {
        q: 'A block reads 9.8 N on a spring scale in air and 6.2 N when submerged in water. The buoyant force is:',
        options: ['3.6 N', '6.2 N', '9.8 N', '16 N'],
        answer: 0,
        explanation: 'The scale reads $W - F_b$, so $F_b = 9.8 - 6.2 = 3.6$ N.',
      },
      {
        q: 'Ice (917 kg/m³) floats in seawater (1025 kg/m³). The submerged fraction is about:',
        options: ['89.5%', '91.7%', '96%', '100%'],
        answer: 0,
        explanation: '$917/1025 = 0.895$ in seawater — note the fresh-water answer would be 91.7%.',
      },
      {
        q: "Archimedes' principle says the buoyant force equals:",
        options: ['the weight of the object', 'the weight of the fluid displaced by the object', 'the pressure at the bottom times the object\u2019s top area', 'the object\u2019s volume times g'],
        answer: 1,
        explanation: 'Only the displaced fluid matters — its weight is the upthrust, independent of the object\u2019s own weight.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.6
  {
    sectionId: 'hall-ch14-s6',
    readingTime: 5,
    intro: 'Pinch a garden hose\u2019s nozzle and the water shoots out faster — no pump was added, so where did the speed come from? The answer is conservation of mass: an incompressible fluid must deliver the same volume per second through every cross-section of a pipe. Narrow the pipe and the fluid has no choice but to speed up. That single bookkeeping rule is the equation of continuity, and it powers everything from fire hoses to your own arteries.',
    objectives: [
      'State the conditions defining ideal flow',
      'Apply $A_1v_1 = A_2v_2$ to pipes of varying cross-section',
      'Compute volume and mass flow rates',
    ],
    concepts: [
      {
        term: 'The ideal fluid',
        kind: 'definition',
        statement: 'The flowing-fluid model of this chapter assumes four idealizations: the fluid is (1) **incompressible** (constant $\\rho$), (2) **nonviscous** (no internal friction), (3) **steady** (pattern not changing in time), and (4) **irrotational** (no eddies).',
        detail: 'Real fluids violate all four at some level, but water in ordinary pipes comes remarkably close.',
      },
      {
        term: 'Streamlines',
        kind: 'notation',
        statement: 'A **streamline** is the path followed by a fluid element in steady flow; streamlines never cross, and their density visualizes speed — where the channel narrows, streamlines crowd together.',
        detail: 'In steady flow the streamline pattern is frozen in space, so a dye trace photographs the flow architecture.',
      },
      {
        term: 'Equation of continuity',
        kind: 'law',
        statement: 'Conservation of mass for an incompressible fluid forces the **volume flow rate** to be the same through every cross-section: $$R_V = A_1 v_1 = A_2 v_2 = \\text{const}.$$ The product $\\rho A v$ is the constant mass flow rate (kg/s).',
        detail: 'Speed varies inversely with area: half the cross-section, double the speed. This is why rivers run slow and deep in wide pools and quick in narrows.',
      },
      {
        term: "The Equation of Continuity: solution protocol",
        kind: "method",
        statement: "**Solve The Equation of Continuity problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is hydrostatics and ideal flow; the working equation is $\\rho = m/V$, $p = p_0+\\rho gh$, $F_b = \\rho_{\\text{fluid}}Vg$, $A_1v_1 = A_2v_2$, $p+\\tfrac12\\rho v^2+\\rho gy = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$ and $\\text{kg/m}^3$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$; incompressible, nonviscous, steady flow for Bernoulli.",
      },
      {
        term: "The Equation of Continuity: scales and validity",
        kind: "insight",
        statement: "**The Equation of Continuity lives at $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$ and the textbook model holds while incompressible, nonviscous, steady flow for Bernoulli.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a The Equation of Continuity calculation gives seconds when $\\text{Pa}$ and $\\text{kg/m}^3$ demands meters, or a value orders of magnitude beyond $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Fire hose and nozzle',
        problem: 'A fire hose of cross-section $A_1 = 5.0\\ \\mathrm{cm^2}$ carries water at $v_1 = 2.0$ m/s. It feeds a nozzle of cross-section $A_2 = 1.0\\ \\mathrm{cm^2}$. Find the flow rate and the exit speed.',
        steps: [
          { label: 'Volume flow rate', text: '$R_V = A_1v_1 = (5.0\\times10^{-4})(2.0) = 1.0\\times10^{-3}\\ \\mathrm{m^3/s}$ = 1.0 L/s (60 L/min).' },
          { label: 'Continuity at the nozzle', text: '$v_2 = A_1v_1/A_2 = R_V/A_2$.' },
          { label: 'Exit speed', text: '$v_2 = 1.0\\times10^{-3}/1.0\\times10^{-4} = 10$ m/s — fivefold gain.' },
          { label: 'Mass flow', text: '$\\rho R_V = (1000)(1.0\\times10^{-3}) = 1.0$ kg/s of water delivered continuously.' },
        ],
        result: 'One liter per second through a thumb-sized nozzle arrives at 10 m/s: continuity converts a fat slow hose into a thin fast jet.',
      },
      {
        title: "The Equation of Continuity: hydrostatic check",
        problem: "Find the absolute pressure $15\\ \\text{m}$ below the surface of water ($p_0 = 1.01\\times 10^5\\ \\text{Pa}$).",
        steps: [
          { label: "Formula", text: "$p = p_0+\\rho gh$." },
          { label: "Substitute", text: "$p = 1.01\\times 10^5+1000\\times 9.8\\times 15 = 1.01\\times 10^5+1.47\\times 10^{+5}$." },
          { label: "Compute", text: "$p \\approx 2.48\\times 10^{+5}\\ \\text{Pa}$ ($\\approx 2.46\\ \\text{atm}$)." },
        ],
        result: "$p \\approx 2.48\\times 10^{+5}\\ \\text{Pa}$.",
      },
    ],
    keyTakeaways: [
      '$A v = $ constant along any pipe of incompressible fluid.',
      'Volume flow rate in m³/s; mass flow rate $\\rho A v$ in kg/s.',
      'Narrow the channel and the fluid must accelerate — same volume per second must fit through.',
    ],
    quiz: [
      {
        q: 'Water flows at 2.0 m/s in a 5.0 cm² hose. The volume flow rate is:',
        options: ['10 cm³/s', '100 cm³/s', '1000 cm³/s', '10,000 cm³/s'],
        answer: 2,
        explanation: '$A v = (5\\ \\mathrm{cm^2})(200\\ \\mathrm{cm/s}) = 1000\\ \\mathrm{cm^3/s}$.',
      },
      {
        q: 'If a pipe narrows to half its cross-sectional area (same liquid, same flow), the speed:',
        options: ['halves', 'doubles', 'quadruples', 'is unchanged'],
        answer: 1,
        explanation: '$v \\propto 1/A$ from $Av = $ const.',
      },
      {
        q: 'The continuity equation for incompressible flow ultimately expresses:',
        options: ['energy conservation', 'mass conservation: what flows in must flow out', 'Newton\u2019s third law', 'thermal equilibrium'],
        answer: 1,
        explanation: 'An incompressible fluid cannot pile up or drain away anywhere in the pipe.',
      },
      {
        q: 'Compared with a narrow, shallow rapid, the deep wide section of the same river has:',
        options: ['higher speed and higher flow rate', 'lower speed with the same flow rate', 'higher speed with the same flow rate', 'no flow at all'],
        answer: 1,
        explanation: 'The river carries the same $R_V$ everywhere; the wide section spreads it over more area and slows.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.7
  {
    sectionId: 'hall-ch14-s7',
    readingTime: 7,
    intro: "Daniel Bernoulli (1738) applied energy conservation to a flowing fluid and produced the most famous — and most misapplied — equation in fluid mechanics: fast-moving fluid is low-pressure fluid. One relation links pressure, speed, and height along a streamline, and from it fall Torricelli's efflux law, venturi meters, carburetors, atomizers, and the first pass at understanding why wings and curveballs do what they do.",
    objectives: [
      "State Bernoulli's equation and the conditions under which it applies",
      'Apply it to pipes changing speed and elevation',
      'Derive and use Torricelli\u2019s efflux result',
    ],
    concepts: [
      {
        term: "Bernoulli's equation",
        kind: 'theorem',
        statement: "For ideal (incompressible, nonviscous, steady) flow along a streamline, $$p + \\tfrac12 \\rho v^2 + \\rho g y = \\text{constant}.$$ Each term is an energy density: pressure work per unit volume, kinetic energy per unit volume, and gravitational potential energy per unit volume.",
        detail: 'It is the work–energy theorem for a fluid slice: the net pressure work done on the slice equals the change of its mechanical energy. Viscosity would dissipate some of that into heat — which is why the equation fails for honey and molasses.',
      },
      {
        term: 'Fast means low pressure',
        kind: 'insight',
        statement: "At constant height, $p + \\tfrac12\\rho v^2 = $ const: **where an ideal fluid speeds up, its pressure drops**. The stagnation point on the front of a pitot tube trades all speed for maximum pressure; a constricted venturi throat trades pressure for speed.",
        detail: 'Applications: atomizers and paint sprayers (fast airstream sucks liquid up), venturi meters (measure speed from the pressure dip), shower curtains bowing inward, and two trucks sucked together when passing on the highway.',
      },
      {
        term: "Torricelli's result",
        kind: 'method',
        statement: "For a small hole a depth $h$ below the surface of an open tank (with the tank large enough that the top surface barely moves), applying Bernoulli between surface and hole gives $$v = \\sqrt{2gh}$$ — exactly the speed of free fall from height $h$.",
        detail: 'Draining a 4 m tank through a spigot: $v = \\sqrt{2(9.8)(4.0)} = 8.9$ m/s, independent of the fluid\u2019s density (air or water, if both were ideal).',
      },
      {
        term: 'Lift and the spinning ball',
        kind: 'insight',
        statement: 'An asymmetric flow — air longer and faster over a wing\u2019s curved top, or dragged around a spinning ball (the Magnus effect) — leaves lower pressure on the fast side. Pressure imbalance integrated over the surface is lift (or curveball break).',
        detail: 'A full account of lift also needs Newton\u2019s third law on the downwash; Bernoulli alone is the standard first estimate, not the whole story.',
      },
      {
        term: "Bernoulli's Equation: solution protocol",
        kind: "method",
        statement: "**Solve Bernoulli's Equation problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is hydrostatics and ideal flow; the working equation is $\\rho = m/V$, $p = p_0+\\rho gh$, $F_b = \\rho_{\\text{fluid}}Vg$, $A_1v_1 = A_2v_2$, $p+\\tfrac12\\rho v^2+\\rho gy = \\text{const}$; every substitution must carry its units so the final unit ($\\text{Pa}$ and $\\text{kg/m}^3$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p_{\\text{atm}} = 1.01\\times 10^5\\ \\text{Pa}$; $\\rho_{\\text{water}} = 1000\\ \\text{kg/m}^3$; incompressible, nonviscous, steady flow for Bernoulli.",
      },
    ],
    figures: [
      {
        caption: "Bernoulli's equation along a pipe that narrows and rises. Section 1: large area, slow speed, high pressure (tall standpipe column). Section 2: small area, high speed, raised elevation — pressure falls both from the speed-up ($\\tfrac12\\rho v_2^2$ term) and the climb ($\\rho g y_2$). $p_1 + \\tfrac12\\rho v_1^2 + \\rho g y_1 = p_2 + \\tfrac12\\rho v_2^2 + \\rho g y_2$.",
        svg: `<svg viewBox="0 0 720 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pipe narrowing and rising, with standpipes showing the pressure drop">
  <rect x="0" y="0" width="720" height="400" fill="currentColor" opacity="0"/>
  <polygon points="60,230 320,230 480,145 660,145 660,195 480,195 320,330 60,330" fill="currentColor" opacity="0.08"/>
  <path d="M60,230 L320,230 L480,145 L660,145" fill="none" stroke="currentColor" stroke-width="3"/>
  <path d="M60,330 L320,330 L480,195 L660,195" fill="none" stroke="currentColor" stroke-width="3"/>
  <line x1="192" y1="230" x2="192" y2="66" stroke="currentColor" stroke-width="1.5"/>
  <line x1="212" y1="230" x2="212" y2="66" stroke="currentColor" stroke-width="1.5"/>
  <rect x="192" y="102" width="20" height="128" fill="currentColor" opacity="0.25"/>
  <text x="222" y="92" font-size="13" fill="currentColor">high static head: p₁ large</text>
  <line x1="552" y1="145" x2="552" y2="66" stroke="currentColor" stroke-width="1.5"/>
  <line x1="572" y1="145" x2="572" y2="66" stroke="currentColor" stroke-width="1.5"/>
  <rect x="552" y="132" width="20" height="13" fill="currentColor" opacity="0.25"/>
  <text x="582" y="120" font-size="13" fill="currentColor">low static head: p₂ small</text>
  <line x1="120" y1="280" x2="260" y2="280" stroke="currentColor" stroke-width="3"/>
  <polygon points="268,280 254,274 254,286" fill="currentColor"/>
  <text x="130" y="266" font-size="13" fill="currentColor">v₁ small, A₁ large</text>
  <line x1="500" y1="170" x2="620" y2="170" stroke="currentColor" stroke-width="3"/>
  <polygon points="628,170 614,164 614,176" fill="currentColor"/>
  <text x="508" y="158" font-size="13" fill="currentColor">v₂ large, A₂ small</text>
  <line x1="60" y1="352" x2="660" y2="352" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5" opacity="0.6"/>
  <text x="664" y="356" font-size="13" fill="currentColor" opacity="0.8">y = 0</text>
  <line x1="84" y1="280" x2="84" y2="352" stroke="currentColor" stroke-width="1.5"/>
  <line x1="79" y1="280" x2="89" y2="280" stroke="currentColor" stroke-width="1.5"/>
  <line x1="79" y1="352" x2="89" y2="352" stroke="currentColor" stroke-width="1.5"/>
  <text x="70" y="322" font-size="13" fill="currentColor" text-anchor="end">y₁</text>
  <line x1="688" y1="170" x2="688" y2="352" stroke="currentColor" stroke-width="1.5"/>
  <line x1="683" y1="170" x2="693" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="683" y1="352" x2="693" y2="352" stroke="currentColor" stroke-width="1.5"/>
  <text x="692" y="268" font-size="13" fill="currentColor" text-anchor="start">y₂</text>
  <text x="360" y="390" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.85">narrow + high + fast ⇒ low pressure (energy per unit volume is conserved)</text>
</svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'A rising, narrowing pipe',
        problem: "Water ($\\rho = 1000\\ \\mathrm{kg/m^3}$) flows through a pipe at $v_1 = 2.0$ m/s with $p_1 = 2.0\\times10^{5}$ Pa at $y_1 = 0$. The pipe then narrows so that $v_2 = 5.0$ m/s and climbs to $y_2 = 4.0$ m. Find $p_2$.",
        steps: [
          { label: 'Write Bernoulli', text: '$p_2 = p_1 + \\tfrac12\\rho(v_1^2 - v_2^2) - \\rho g(y_2 - y_1)$.' },
          { label: 'Speed term', text: '$\\tfrac12(1000)(2.0^2 - 5.0^2) = 500(4 - 25) = -1.05\\times10^{4}$ Pa.' },
          { label: 'Height term', text: '$\\rho g \\Delta y = (1000)(9.8)(4.0) = 3.92\\times10^{4}$ Pa, subtracted.' },
          { label: 'Assemble', text: '$p_2 = 2.0\\times10^{5} - 1.05\\times10^{4} - 3.92\\times10^{4} = 1.50\\times10^{5}$ Pa.' },
        ],
        result: '$p_2 = 1.5\\times10^{5}$ Pa: speeding up *and* climbing both drain the pressure budget — half an atmosphere lost in a few meters of pipe.',
      },
      {
        title: 'Torricelli\u2019s tank',
        problem: 'A large open tank drains through a small hole 4.0 m below the water surface. What is the efflux speed, and what does it have in common with free fall?',
        steps: [
          { label: 'Bernoulli, surface to hole', text: 'Both ends are open to the atmosphere ($p_1 = p_2 = p_{atm}$), and the tank is wide so $v_1 \\approx 0$.' },
          { label: 'Cancel pressures', text: '$\\tfrac12 \\rho v_2^2 = \\rho g(y_1 - y_2) = \\rho gh$.' },
          { label: 'Solve', text: '$v = \\sqrt{2gh} = \\sqrt{2(9.8)(4.0)} = 8.9$ m/s.' },
          { label: 'Interpretation', text: 'The water leaves as if it had freely fallen the depth $h$ — density cancels, so the answer is the same for any ideal fluid.' },
        ],
        result: '8.9 m/s from 4.0 m of head — Torricelli\u2019s law is free fall in disguise.',
      },
    ],
    keyTakeaways: [
      "$p + \\tfrac12\\rho v^2 + \\rho gy$ is constant along a streamline of ideal flow.",
      'Higher speed or height at fixed energy density means lower pressure.',
      'Torricelli: efflux speed $\\sqrt{2gh}$, equal to free-fall speed from the surface.',
    ],
    quiz: [
      {
        q: "Bernoulli's equation is, in essence:",
        options: ["Newton's second law for fluids", 'conservation of energy per unit volume along a streamline', 'conservation of mass', 'the ideal gas law'],
        answer: 1,
        explanation: 'Each term is an energy density — pressure work, kinetic, gravitational — and their sum is conserved for ideal flow.',
      },
      {
        q: 'Where an ideal fluid flows fastest (at the same height), the pressure is:',
        options: ['highest', 'lowest', 'unchanged', 'zero'],
        answer: 1,
        explanation: '$p + \\tfrac12\\rho v^2$ is constant: speed gains come out of the pressure budget.',
      },
      {
        q: 'Water drains from a hole 4.0 m below the surface of a large open tank. The efflux speed is about:',
        options: ['8.9 m/s', '4.4 m/s', '19.6 m/s', '39.2 m/s'],
        answer: 0,
        explanation: 'Torricelli: $v = \\sqrt{2gh} = \\sqrt{2(9.8)(4)} = 8.85$ m/s.',
      },
      {
        q: "Bernoulli's equation in its standard form requires:",
        options: [
          'steady, incompressible, nonviscous flow along a streamline',
          'turbulent flow',
          'a compressible fluid',
          'a horizontal pipe',
        ],
        answer: 0,
        explanation: 'The height term handles any elevation; the real requirements are the ideal-fluid assumptions.',
      },
    ],
  },
]
