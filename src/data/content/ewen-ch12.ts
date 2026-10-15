import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 12: Matter (pp 327-358)
// ============================================================================

export const ewenCh12Content: SectionContent[] = [
  {
    sectionId: 'hall-ch18-s38',
    readingTime: 5,
    intro: "Everything technicians cut, pour, pump, or wire is matter in one of three phases. This section defines matter, mass, and the phase behaviors the next sections detail.",
    objectives: [
      "Define matter, mass, and inertia precisely",
      "Contrast solid, liquid, and gas behavior",
      "Classify phase changes by energy direction",
    ],
    concepts: [
      {
        term: "Matter and mass",
        kind: "definition",
        statement: "**Matter** is anything occupying space with mass; **mass** in kilograms measures its inertia and gravitational pull.",
        detail: "Fields and energy cross space without being matter in this classical sense.",
      },
      {
        term: "Three phases",
        kind: "definition",
        statement: "**Solids hold shape and volume; liquids hold volume but flow; gases fill their container** — molecular freedom increases across the sequence.",
        detail: "Steel beams, hydraulic oil, and compressed air exemplify the three.",
      },
      {
        term: "Atomic picture",
        kind: "insight",
        statement: "Bulk behavior comes from **molecular bonding and motion**: bound lattices (solids), sliding neighbors (liquids), free flight (gases).",
        detail: "Heating feeds molecular motion until bonds yield — melting, then boiling.",
      },
      {
        term: "Phase changes",
        kind: "method",
        statement: "**Melting, freezing, vaporization, condensation, sublimation** trade thermal energy for bonding at fixed temperatures.",
        detail: "Ice melts at $0\\ \\mathrm{^{\\circ}C}$ absorbing $334\\ \\mathrm{kJ/kg}$ without warming.",
      },
      {
        term: "Technician phase stakes",
        kind: "insight",
        statement: "Phase decides **containment and hazard**: tanks hold liquids, vessels hold pressure gases, structures rely on solid strength.",
        detail: "Misjudging phase means burst vessels or collapsed supports.",
      },
    ],
    figures: [
      {
        caption: "Three phases: lattice (solid), sliding neighbors (liquid), free flight (gas)",
        svg: '<svg role="img" aria-label="Three phases: lattice (solid), sliding neighbors (liquid), free flight (gas)" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="1.2" fill="none"><rect x="30" y="30" width="90" height="90"/><rect x="155" y="30" width="90" height="90"/><rect x="280" y="30" width="90" height="90"/></g><g fill="currentColor"><circle cx="50" cy="50" r="4"/><circle cx="70" cy="50" r="4"/><circle cx="90" cy="50" r="4"/><circle cx="50" cy="70" r="4"/><circle cx="70" cy="70" r="4"/><circle cx="90" cy="70" r="4"/><circle cx="175" cy="60" r="4"/><circle cx="195" cy="75" r="4"/><circle cx="215" cy="60" r="4"/><circle cx="185" cy="95" r="4"/><circle cx="210" cy="100" r="4"/><circle cx="300" cy="45" r="4"/><circle cx="340" cy="80" r="4"/><circle cx="310" cy="105" r="4"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="55" y="140">solid</text><text x="180" y="140">liquid</text><text x="308" y="140">gas</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Shop phase inventory",
        problem: "Classify: steel beam, hydraulic oil, shop air, welding arc plasma (note), ice coolant.",
        steps: [
          { label: "Solids", text: "Steel beam and ice hold shape and volume — solids." },
          { label: "Fluids", text: "Hydraulic oil is liquid (volume fixed, flows); shop air is gas (fills vessels)." },
          { label: "Beyond", text: "The arc is plasma, a fourth high-energy state outside this chapter model." },
        ],
        result: "Beam, ice: solid; oil: liquid; air: gas; arc: plasma.",
      },
      {
        title: "Melting energy budget",
        problem: "How much energy melts $5.00\\ \\mathrm{kg}$ of ice at $0\\ \\mathrm{^{\\circ}C}$ ($L_f = 334\\ \\mathrm{kJ/kg}$)?",
        steps: [
          { label: "Apply", text: "$Q = mL_f = 5.00 \\times 334 = 1670\\ \\mathrm{kJ}$." },
          { label: "Meaning", text: "That is $0.464\\ \\mathrm{kWh}$ of cooling before any warming." },
          { label: "Use", text: "Ice banks pack this latent capacity into coolers and process loads." },
        ],
        result: "$1.67\\ \\mathrm{MJ}$ absorbed at constant $0\\ \\mathrm{^{\\circ}C}$.",
      },
    ],
    keyTakeaways: [
      "Matter has mass and volume; phases differ in shape freedom.",
      "Molecular bonding versus motion explains solid, liquid, gas.",
      "Phase changes bank or release latent energy at fixed temperature.",
    ],
    quiz: [
      {
        q: "Which holds volume but flows?",
        options: ["Solid", "Liquid", "Gas", "Vacuum"],
        answer: 1,
        explanation: "Liquids keep volume while taking the container shape.",
      },
      {
        q: "Melting $5.00\\ \\mathrm{kg}$ of ice absorbs about",
        options: ["$66.8\\ \\mathrm{kJ}$", "$1670\\ \\mathrm{kJ}$", "$334\\ \\mathrm{J}$", "$5.00\\ \\mathrm{kJ}$"],
        answer: 1,
        explanation: "$5.00 \\times 334 = 1670\\ \\mathrm{kJ}$.",
      },
      {
        q: "Gases differ from liquids by",
        options: ["Holding fixed volume", "Expanding to fill the container", "Holding fixed shape", "Being incompressible always"],
        answer: 1,
        explanation: "Gas molecules fly free until walls stop them.",
      },
    ],
  },
  {
    sectionId: 'hall-ch18-s39',
    readingTime: 5,
    intro: "Structures stand on solid properties: strength, stiffness, hardness, and ductility. This section defines each and reads material choices off density and strength tables.",
    objectives: [
      "Define stress, strength, elasticity, and hardness",
      "Distinguish ductile from brittle failure",
      "Select materials from property tables",
    ],
    concepts: [
      {
        term: "Stress and strength",
        kind: "definition",
        statement: "**Stress $\\sigma = F/A$** in $\\mathrm{Pa}$ loads material; **strength** is the stress at failure — tension, compression, and shear separately.",
        detail: "Structural steel yields near $250\\ \\mathrm{MPa}$ in tension.",
      },
      {
        term: "Elasticity",
        kind: "definition",
        statement: "**Elastic** deformation springs back; past the **elastic limit** it stays bent (plastic) and then fractures.",
        detail: "Springs live elastically; car bodies sacrifice plastically in crashes.",
      },
      {
        term: "Hardness and ductility",
        kind: "definition",
        statement: "**Hardness** resists scratching and dents; **ductility** draws into wire without breaking — often traded against each other.",
        detail: "Quenched steel is hard but brittle; copper is soft but richly ductile.",
      },
      {
        term: "Crystalline versus amorphous",
        kind: "insight",
        statement: "**Crystals** (metals, quartz) order atoms in lattices with directional strengths; **amorphous** solids (glass, plastics) freeze disorder.",
        detail: "Grain and heat treatment tune metal crystals for the job.",
      },
      {
        term: "Thermal and electrical behavior",
        kind: "insight",
        statement: "Solids also rate by **conductivity and expansion**: copper wires, aluminum fins, and Invar instruments each exploit one extreme.",
        detail: "Chapters 14 and 17 quantify those behaviors.",
      },
    ],
    examples: [
      {
        title: "Cable stress check",
        problem: "A $5000\\ \\mathrm{N}$ load hangs on a steel rod of diameter $10.0\\ \\mathrm{mm}$. Find tensile stress and judge against $250\\ \\mathrm{MPa}$ yield.",
        steps: [
          { label: "Area", text: "$A = \\pi(0.00500)^2 = 7.854 \\times 10^{-5}\\ \\mathrm{m^2}$." },
          { label: "Stress", text: "$\\sigma = 5000/7.854 \\times 10^{-5} = 6.366 \\times 10^{7}\\ \\mathrm{Pa} = 63.7\\ \\mathrm{MPa}$." },
          { label: "Judge", text: "$63.7 < 250$ with factor $3.9$ — safe for static load." },
        ],
        result: "$63.7\\ \\mathrm{MPa}$ — safe with margin.",
      },
      {
        title: "Wire ductility choice",
        problem: "Choose between glass rod and copper wire for a bent conductor path.",
        steps: [
          { label: "Glass", text: "Hard and strong in compression but brittle — bending fractures it." },
          { label: "Copper", text: "Ductile and conductive — bends without breaking while carrying current." },
          { label: "Pick", text: "Copper wire; glass only where transparency plus rigidity rule." },
        ],
        result: "Copper for bent conductors; property-matched choice.",
      },
    ],
    keyTakeaways: [
      "Stress $F/A$ versus directional strengths sizes every part.",
      "Elastic returns; plastic stays; brittle snaps without warning.",
      "Match hardness, ductility, and conductivity to the job.",
    ],
    quiz: [
      {
        q: "$5000\\ \\mathrm{N}$ on $10.0\\ \\mathrm{mm}$ rod stresses it at about",
        options: ["$6.37\\ \\mathrm{MPa}$", "$63.7\\ \\mathrm{MPa}$", "$637\\ \\mathrm{MPa}$", "$0.637\\ \\mathrm{MPa}$"],
        answer: 1,
        explanation: "$5000/7.85 \\times 10^{-5} = 63.7\\ \\mathrm{MPa}$.",
      },
      {
        q: "Past the elastic limit, deformation becomes",
        options: ["Fully reversible", "Plastic (permanent)", "Zero", "Upward only"],
        answer: 1,
        explanation: "Yielding leaves permanent set, then fracture.",
      },
      {
        q: "Bent conductors want",
        options: ["Brittle glass", "Ductile copper", "Unglazed ceramic", "Chalk"],
        answer: 1,
        explanation: "Ductility plus conductivity is the copper combination.",
      },
    ],
  },
  {
    sectionId: 'hall-ch18-s40',
    readingTime: 5,
    intro: "Oils, water, and coolants transmit pressure, lubricate, and carry heat because they flow. This section covers viscosity, surface tension, and pressure transmission in liquids.",
    objectives: [
      "Define viscosity and its temperature dependence",
      "Explain surface tension and capillary action",
      "Apply pressure transmission to hydraulic problems",
    ],
    concepts: [
      {
        term: "Viscosity",
        kind: "definition",
        statement: "**Viscosity** is resistance to flow (internal friction): honey high, water low — falling steeply with temperature for oils.",
        detail: "SAE grades rate that curve so engines start cold yet film hot.",
      },
      {
        term: "Surface tension",
        kind: "definition",
        statement: "**Surface tension** skins liquid surfaces (water about $0.073\\ \\mathrm{N/m}$), beading drops and floating needles.",
        detail: "Detergents lower it so wash water wets and penetrates.",
      },
      {
        term: "Capillarity",
        kind: "insight",
        statement: "**Capillary action** climbs narrow tubes where adhesion beats cohesion — wicks, soils, and solder joints exploit it.",
        detail: "Finer bores lift higher but carry less volume.",
      },
      {
        term: "Pressure in liquids",
        kind: "law",
        statement: "Confined liquids transmit **pressure undiminished** ($P = F/A$) and add **hydrostatic $\\rho g h$** with depth — the hydraulic principle of Chapter 13.",
        detail: "$1.00\\ \\mathrm{m}$ of water adds $9.80\\ \\mathrm{kPa}$.",
      },
      {
        term: "Incompressibility",
        kind: "insight",
        statement: "Liquids are nearly **incompressible**, so small piston motions pressurize instantly — the hydraulic stiffness advantage over air.",
        detail: "That stiffness is why jacks lift and brakes bite without sponginess.",
      },
    ],
    examples: [
      {
        title: "Hydraulic depth pressure",
        problem: "Find the pressure $2.50\\ \\mathrm{m}$ deep in oil of density $850\\ \\mathrm{kg/m^3}$ (gauge).",
        steps: [
          { label: "Apply", text: "$P = \\rho g h = 850 \\times 9.80 \\times 2.50$." },
          { label: "Compute", text: "$850 \\times 24.5 = 20{,}825\\ \\mathrm{Pa} \\approx 20.8\\ \\mathrm{kPa}$." },
          { label: "Sense", text: "Less than water ($24.5\\ \\mathrm{kPa}$) because oil is lighter." },
        ],
        result: "About $20.8\\ \\mathrm{kPa}$ gauge at depth.",
      },
      {
        title: "Oil-grade reasoning",
        problem: "Why does equipment specify $10$W-$30$ multigrade oil?",
        steps: [
          { label: "Cold", text: "$10$W flows at winter starts, limiting wear when films are thin." },
          { label: "Hot", text: "$30$ holds viscosity at operating temperature so bearings keep film strength." },
          { label: "Viscosity", text: "Multigrade chemistry flattens the temperature-viscosity fall." },
        ],
        result: "Pumpable cold, protective hot — one oil, both duties.",
      },
    ],
    keyTakeaways: [
      "Viscosity resists flow and falls with temperature; grades manage it.",
      "Surface tension and capillarity govern drops, wicks, and solder.",
      "Liquids transmit $P = F/A$ plus $\\rho gh$ nearly incompressibly.",
    ],
    quiz: [
      {
        q: "Pressure $2.50\\ \\mathrm{m}$ deep in $850\\ \\mathrm{kg/m^3}$ oil is about",
        options: ["$2.08\\ \\mathrm{kPa}$", "$20.8\\ \\mathrm{kPa}$", "$208\\ \\mathrm{kPa}$", "$8.33\\ \\mathrm{kPa}$"],
        answer: 1,
        explanation: "$850(9.80)(2.50) = 20.8\\ \\mathrm{kPa}$.",
      },
      {
        q: "Multigrade $10$W-$30$ means",
        options: ["Two oils mixed randomly", "Cold-flow $10$W with hot-film $30$ behavior", "Fixed single viscosity", "No temperature dependence"],
        answer: 1,
        explanation: "Additives flatten the viscosity-temperature curve.",
      },
      {
        q: "Hydraulics beat pneumatics in stiffness because liquids are",
        options: ["Compressible", "Nearly incompressible", "Heavier always", "Hotter"],
        answer: 1,
        explanation: "Incompressibility transmits motion without spongy delay.",
      },
    ],
  },
  {
    sectionId: 'hall-ch18-s41',
    readingTime: 5,
    intro: "Gases fill, press, and expand with temperature — the behaviors behind tires, tanks, and HVAC. This section previews gas pressure and temperature relations detailed in Chapter 15.",
    objectives: [
      "Explain gas pressure as molecular bombardment",
      "Relate pressure, volume, and temperature qualitatively",
      "Compute gas-mass from density and vessel volume",
    ],
    concepts: [
      {
        term: "Gas pressure mechanism",
        kind: "definition",
        statement: "**Gas pressure is molecular collisions** with walls — faster or denser molecules hit harder and raise $P$.",
        detail: "Pumping more molecules into fixed $V$ raises collision rate and pressure together.",
      },
      {
        term: "Boyle preview",
        kind: "law",
        statement: "At fixed temperature, **$P_1V_1 = P_2V_2$**: halving volume doubles pressure — squeezing crowds collisions.",
        detail: "A $10.0\\ \\mathrm{L}$ tank at $100\\ \\mathrm{kPa}$ squeezed to $5.00\\ \\mathrm{L}$ reaches $200\\ \\mathrm{kPa}$.",
      },
      {
        term: "Charles preview",
        kind: "law",
        statement: "At fixed pressure, **$V/T$ is constant** (kelvin): heating expands gas proportionally.",
        detail: "Warming $300\\ \\mathrm{K}$ gas to $450\\ \\mathrm{K}$ expands it $1.50\\times$.",
      },
      {
        term: "Gas density",
        kind: "method",
        statement: "**$\\rho = m/V$** still rules: air near $1.20\\ \\mathrm{kg/m^3}$ at standard conditions fills vessels by volume times density.",
        detail: "A $0.500\\ \\mathrm{m^3}$ tank holds about $0.600\\ \\mathrm{kg}$ of air at STP-ish density.",
      },
      {
        term: "Compressibility contrast",
        kind: "insight",
        statement: "Gases are **highly compressible** unlike liquids — tanks store large masses by pressure, with temperature swings as the price.",
        detail: "That is why gas math needs $T$ while hydraulics mostly do not.",
      },
    ],
    examples: [
      {
        title: "Tire squeeze check",
        problem: "A $40.0\\ \\mathrm{L}$ tire cavity at $200\\ \\mathrm{kPa}$ is compressed (isothermally) to $32.0\\ \\mathrm{L}$ by loading. Find new pressure.",
        steps: [
          { label: "Boyle", text: "$P_2 = P_1V_1/V_2 = 200 \\times 40.0/32.0$." },
          { label: "Compute", text: "$P_2 = 250\\ \\mathrm{kPa}$." },
          { label: "Note", text: "Isothermal ideal; real flexing warms the air and nudges higher." },
        ],
        result: "$250\\ \\mathrm{kPa}$ after compression.",
      },
      {
        title: "Tank air mass",
        problem: "A $0.500\\ \\mathrm{m^3}$ receiver holds air at density $6.00\\ \\mathrm{kg/m^3}$ (pressurized). Find air mass.",
        steps: [
          { label: "Apply", text: "$m = \\rho V = 6.00 \\times 0.500 = 3.00\\ \\mathrm{kg}$." },
          { label: "Compare", text: "Five times the $0.600\\ \\mathrm{kg}$ at ambient density — pressure stores mass." },
          { label: "Use", text: "Tool runtime follows from this stored mass and flow rate." },
        ],
        result: "$3.00\\ \\mathrm{kg}$ of stored air.",
      },
    ],
    keyTakeaways: [
      "Gas pressure is wall bombardment by moving molecules.",
      "$P_1V_1 = P_2V_2$ (Boyle) and $V/T$ fixed (Charles) preview Chapter 15.",
      "Gases store mass by compression; temperature always matters.",
    ],
    quiz: [
      {
        q: "$40.0\\ \\mathrm{L}$ at $200\\ \\mathrm{kPa}$ squeezed to $32.0\\ \\mathrm{L}$ (same $T$) reaches",
        options: ["$160\\ \\mathrm{kPa}$", "$250\\ \\mathrm{kPa}$", "$200\\ \\mathrm{kPa}$", "$640\\ \\mathrm{kPa}$"],
        answer: 1,
        explanation: "$200(40/32) = 250\\ \\mathrm{kPa}$.",
      },
      {
        q: "$0.500\\ \\mathrm{m^3}$ at $6.00\\ \\mathrm{kg/m^3}$ holds air mass",
        options: ["$12.0\\ \\mathrm{kg}$", "$3.00\\ \\mathrm{kg}$", "$0.083\\ \\mathrm{kg}$", "$6.50\\ \\mathrm{kg}$"],
        answer: 1,
        explanation: "$m = \\rho V = 3.00\\ \\mathrm{kg}$.",
      },
      {
        q: "Heating a fixed-pressure gas from $300$ to $450\\ \\mathrm{K}$",
        options: ["Halves volume", "Expands it $1.5\\times$", "Leaves volume fixed", "Condenses it"],
        answer: 1,
        explanation: "$V \\propto T$ in kelvin (Charles).",
      },
    ],
  },
  {
    sectionId: 'hall-ch18-s42',
    readingTime: 6,
    intro: "Density is the working property for materials selection: mass packed per volume. This section computes densities, specific gravities, and float-sink verdicts for shop materials.",
    objectives: [
      "Compute density with $\\rho = m/V$",
      "Use specific gravity for fast identification",
      "Predict float versus sink in a fluid",
    ],
    concepts: [
      {
        term: "Density",
        kind: "definition",
        statement: "**Density $\\rho = m/V$** in $\\mathrm{kg/m^3}$ (or $\\mathrm{g/cm^3}$) packs mass per volume: aluminum $2700$, steel $7860$, water $1000$.",
        detail: "$1\\ \\mathrm{g/cm^3} = 1000\\ \\mathrm{kg/m^3}$ bridges lab and SI tables.",
      },
      {
        term: "Specific gravity",
        kind: "notation",
        statement: "**Specific gravity $= \\rho/\\rho_{water}$** is unit-free: steel $7.86$, aluminum $2.70$, oak $0.70$.",
        detail: "Below $1.0$ floats in water; above sinks — instant verdicts.",
      },
      {
        term: "Density by displacement",
        kind: "method",
        statement: "Weigh the sample, dunk it, and read **displaced volume**: $\\rho = m/V_{displaced}$ — Archimedes graduate-cylinder method.",
        detail: "Irregular castings yield exact volumes no ruler can give.",
      },
      {
        term: "Weight density",
        kind: "notation",
        statement: "**Weight density $= \\rho g$** in $\\mathrm{N/m^3}$ gives force per volume for load and pressure work.",
        detail: "Steel weighs $77{,}100\\ \\mathrm{N/m^3}$ ($7860 \\times 9.80$).",
      },
      {
        term: "Selecting by density",
        kind: "insight",
        statement: "**Low density buys lightness, high density buys compactness**: aircraft aluminum versus flywheel steel versus lead ballast.",
        detail: "Strength-to-density ratio, not density alone, picks aerospace winners.",
      },
    ],
    figures: [
      {
        caption: "Float or sink: body density below fluid floats, above sinks ($\\rho$ vs $\\rho_{fluid}$)",
        svg: '<svg role="img" aria-label="Float or sink: body density below fluid floats, above sinks (rho vs rho_fluid)" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="30" y1="70" x2="370" y2="70"/><rect x="30" y="70" width="340" height="60"/></g><g fill="currentColor"><rect x="70" y="45" width="50" height="20" rx="3"/><rect x="250" y="80" width="50" height="20" rx="3"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="60" y="130">oak 0.70: floats</text><text x="240" y="130">steel 7.86: sinks</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Block density identification",
        problem: "A block $0.200 \\times 0.100 \\times 0.0500\\ \\mathrm{m}$ has mass $2.70\\ \\mathrm{kg}$. Find density and identify it.",
        steps: [
          { label: "Volume", text: "$V = 0.200 \\times 0.100 \\times 0.0500 = 0.001000\\ \\mathrm{m^3}$." },
          { label: "Density", text: "$\\rho = 2.70/0.001000 = 2700\\ \\mathrm{kg/m^3} = 2.70\\ \\mathrm{g/cm^3}$." },
          { label: "Identify", text: "Matches aluminum ($2700$); specific gravity $2.70$." },
        ],
        result: "$2700\\ \\mathrm{kg/m^3}$ — aluminum.",
      },
      {
        title: "Crown-displacement test",
        problem: "A $1.50\\ \\mathrm{kg}$ part displaces $190\\ \\mathrm{cm^3}$ of water. Find density and float verdict.",
        steps: [
          { label: "Density", text: "$\\rho = 1500\\ \\mathrm{g}/190\\ \\mathrm{cm^3} = 7.895\\ \\mathrm{g/cm^3} = 7895\\ \\mathrm{kg/m^3}$." },
          { label: "Identify", text: "Near steel $7860$ — plausibly steel within error." },
          { label: "Float", text: "Specific gravity $7.9 > 1$: sinks in water." },
        ],
        result: "$7895\\ \\mathrm{kg/m^3}$; sinks — consistent with steel.",
      },
    ],
    keyTakeaways: [
      "$\\rho = m/V$; $1\\ \\mathrm{g/cm^3} = 1000\\ \\mathrm{kg/m^3}$.",
      "Specific gravity under $1$ floats, over $1$ sinks in water.",
      "Displacement volumetry nails irregular parts.",
    ],
    quiz: [
      {
        q: "Block $0.001\\ \\mathrm{m^3}$, $2.70\\ \\mathrm{kg}$ has density",
        options: ["$270\\ \\mathrm{kg/m^3}$", "$2700\\ \\mathrm{kg/m^3}$", "$27{,}000\\ \\mathrm{kg/m^3}$", "$0.0027\\ \\mathrm{kg/m^3}$"],
        answer: 1,
        explanation: "$2.70/0.001 = 2700\\ \\mathrm{kg/m^3}$ (aluminum).",
      },
      {
        q: "$1500\\ \\mathrm{g}$ displacing $190\\ \\mathrm{cm^3}$ gives density about",
        options: ["$0.127\\ \\mathrm{g/cm^3}$", "$7.89\\ \\mathrm{g/cm^3}$", "$285\\ \\mathrm{g/cm^3}$", "$1.00\\ \\mathrm{g/cm^3}$"],
        answer: 1,
        explanation: "$1500/190 = 7.89\\ \\mathrm{g/cm^3}$.",
      },
      {
        q: "Oak ($SG = 0.70$) in water will",
        options: ["Sink", "Float", "Dissolve", "Hover mid-depth forever"],
        answer: 1,
        explanation: "Below $1.0$ floats with $70\\%$ submerged.",
      },
    ],
  },
]
