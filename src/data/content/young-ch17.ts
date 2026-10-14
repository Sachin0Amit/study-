import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 17
// Temperature and Heat (Sections 17.1 – 17.7)
// ============================================================================

export const youngCh17Content: SectionContent[] = [
  {
    sectionId: "young-ch17-s1",
    readingTime: 4,
    intro: "Temperature feels primitive, but physics must define it operationally before it can be used. Young starts from thermal equilibrium and the zeroth law, the logical foundation on which thermometers and the entire temperature concept rest.",
    objectives: [
      "Define thermal equilibrium and temperature operationally",
      "State the zeroth law of thermodynamics and explain its logical role",
      "Distinguish thermal contact from thermal insulation with examples",
    ],
    concepts: [
      {
        term: "Thermal equilibrium",
        kind: "definition",
        statement: "Two systems are in **thermal equilibrium** when, placed in thermal contact with no net energy flow between them, their macroscopic properties stop changing.",
        detail: "A hot coin dropped in cool water is not in equilibrium; after stirring stops changing the water temperature, coin and water share one equilibrium temperature.",
      },
      {
        term: "Zeroth law of thermodynamics",
        kind: "law",
        statement: "If systems $A$ and $B$ are each in thermal equilibrium with a third system $C$, then $A$ and $B$ are in thermal equilibrium with each other — so all three share one property called **temperature**.",
        detail: "The law earns its number by being logically prior to the first and second laws: without transitivity of equilibrium, temperature could not be defined at all.",
      },
      {
        term: "Thermal contact versus insulation",
        kind: "definition",
        statement: "**Thermal contact** permits heat exchange leading to equilibrium; **thermal insulation** (idealized as perfect) blocks it, freezing each system's state.",
        detail: "A styrofoam cooler approximates insulation; a copper rod approximates perfect contact. Real walls lie on a spectrum quantified by conductivity in Section 17.7.",
      },
      {
        term: "Temperature as equilibrium label",
        kind: "insight",
        statement: "Temperature is the single number that labels classes of mutually equilibrating systems — the operational meaning behind every thermometer reading.",
        detail: "Any monotonic equilibrium property (mercury length, gas pressure, resistance) can serve as a thermometric property once calibrated against fixed points.",
      },
      {
        term: "Thermal time scales",
        kind: "method",
        statement: "Equilibrium is an idealization reached over a **thermal time constant** $\\tau \\sim mc/(hA)$; measurements must wait several $\\tau$ or correct for the approach curve.",
        detail: "A thick roast needs hours while a thermocouple bead needs a second — same law, vastly different $mc$ and surface coupling.",
      },
    ],
    examples: [
      {
        title: "Checking the zeroth law in the kitchen",
        problem: "A thermometer reads $22.0^{\\circ}\\mathrm{C}$ in room air. It is plunged into soup, rises, and settles at $68.0^{\\circ}\\mathrm{C}$; a second thermometer placed later also settles at $68.0^{\\circ}\\mathrm{C}$. What does the zeroth law conclude?",
        steps: [
          { label: "First equilibrium", text: "Thermometer 1 in equilibrium with soup shares the soup's temperature: $T = 68.0^{\\circ}\\mathrm{C}$." },
          { label: "Second equilibrium", text: "Thermometer 2, also in equilibrium with the soup, reads the same $68.0^{\\circ}\\mathrm{C}$." },
          { label: "Transitivity", text: "Both thermometers in equilibrium with the soup are in equilibrium with each other — they agree without ever touching." },
        ],
        result: "Both thermometers and the soup share $T = 68.0^{\\circ}\\mathrm{C}$ by zeroth-law transitivity.",
      },
      {
        title: "Why the metal feels colder",
        problem: "A steel railing and a wooden bench sit overnight at $5^{\\circ}\\mathrm{C}$. Explain why the steel feels colder although a thermometer gives the same reading on both.",
        steps: [
          { label: "Same temperature", text: "Hours of contact with the air bring both to $5^{\\circ}\\mathrm{C}$ — they are in equilibrium with the air and hence with each other." },
          { label: "Different heat flow", text: "Steel's high conductivity (Section 17.7) drains heat from the $37^{\\circ}\\mathrm{C}$ hand far faster than wood does." },
          { label: "Sensation", text: "Cold sensation tracks heat flux from skin, not object temperature — a conductivity effect, not a zeroth-law violation." },
        ],
        result: "Equal temperatures, unequal fluxes: feeling is about flow rate, not $T$.",
      },
    ],
    keyTakeaways: [
      "Thermal equilibrium means no net energy flow and unchanging macroscopic state.",
      "The zeroth law makes temperature a well-defined shared property via transitivity.",
      "Cold feel tracks heat flow rate, not temperature alone.",
    ],
    quiz: [
      {
        q: "The zeroth law of thermodynamics states:",
        options: ["Energy is conserved", "Entropy never decreases", "Transitivity of thermal equilibrium defines temperature", "Absolute zero is unreachable"],
        answer: 2,
        explanation: "If $A$ and $B$ each equilibrate with $C$, they equilibrate with each other — the shared label is temperature.",
      },
      {
        q: "Two objects at the same thermometer reading but different materials feel different because:",
        options: ["The thermometer is wrong", "Heat flux from the hand differs with conductivity", "They are at different temperatures", "The zeroth law fails for metals"],
        answer: 1,
        explanation: "Sensation follows energy flow rate; high-conductivity steel drains the hand faster than wood at identical $T$.",
      },
      {
        q: "Thermal insulation ideally:",
        options: ["Speeds equilibration", "Blocks heat exchange so states stay frozen", "Fixes temperature at $0^{\\circ}\\mathrm{C}$", "Converts heat to work"],
        answer: 1,
        explanation: "Insulation is the no-contact limit: no flow, no approach to a common temperature.",
      },
    ],
  },
  {
    sectionId: "young-ch17-s2",
    readingTime: 4,
    intro: "Once temperature exists as a concept, it needs numbers. Young surveys liquid, resistance, and thermocouple thermometers and the Celsius and Fahrenheit scales pinned to the ice and steam points.",
    objectives: [
      "Describe liquid-in-glass, resistance, and thermocouple thermometers",
      "Convert between Celsius and Fahrenheit scales",
      "Explain calibration with fixed points and linear interpolation",
    ],
    concepts: [
      {
        term: "Thermometric property",
        kind: "definition",
        statement: "A **thermometric property** is any monotonic function of temperature — liquid column length, gas pressure, electrical resistance, or thermocouple emf — used to assign numbers to hotness.",
        detail: "Different properties agree at calibration points but can disagree between them; that disagreement motivates the absolute gas scale of Section 17.3.",
      },
      {
        term: "Celsius scale",
        kind: "definition",
        statement: "The **Celsius scale** sets $0^{\\circ}\\mathrm{C}$ at the ice point and $100^{\\circ}\\mathrm{C}$ at the steam point (at $1\\ \\mathrm{atm}$), dividing the interval into $100$ equal degrees.",
        detail: "Anders Celsius originally set $0$ at boiling and $100$ at freezing; Linnaeus inverted it into the modern form.",
      },
      {
        term: "Fahrenheit scale",
        kind: "definition",
        statement: "The **Fahrenheit scale** sets $32^{\\circ}\\mathrm{F}$ at the ice point and $212^{\\circ}\\mathrm{F}$ at the steam point, so $T_{F} = \\tfrac{9}{5}T_{C} + 32$.",
        detail: "One Celsius degree is $1.8$ Fahrenheit degrees; body temperature $37.0^{\\circ}\\mathrm{C}$ converts to $98.6^{\\circ}\\mathrm{F}$.",
      },
      {
        term: "Resistance thermometers and thermistors",
        kind: "method",
        statement: "Platinum **resistance thermometers** exploit the nearly linear $R(T)$ of pure metals for precision work, while **thermistors** use the steep exponential $R(T)$ of semiconductors for sensitivity over narrow spans.",
        detail: "A $100\\ \\Omega$ platinum sensor changes about $0.385\\ \\Omega$ per Celsius degree — easily resolved to millikelvins with a bridge.",
      },
      {
        term: "Thermocouples",
        kind: "insight",
        statement: "**Thermocouples** join two dissimilar metals; the Seebeck emf between a hot junction and a cold reference junction measures temperature with tiny thermal mass and wide range.",
        detail: "Type-K (chromel-alumel) spans $-200^{\\circ}\\mathrm{C}$ to $1350^{\\circ}\\mathrm{C}$, which is why engines, kilns, and labs all use it despite millivolt signals.",
      },
    ],
    examples: [
      {
        title: "Fever check conversion",
        problem: "A patient reads $39.2^{\\circ}\\mathrm{C}$. Convert to Fahrenheit and find the elevation above normal $98.6^{\\circ}\\mathrm{F}$.",
        steps: [
          { label: "Convert", text: "$T_{F} = (9/5)(39.2) + 32 = 70.56 + 32 = 102.56^{\\circ}\\mathrm{F}$." },
          { label: "Elevation", text: "$102.56 - 98.6 = 3.96^{\\circ}\\mathrm{F} \\approx 4.0^{\\circ}\\mathrm{F}$ above normal." },
          { label: "Celsius view", text: "Equivalently $39.2 - 37.0 = 2.2^{\\circ}\\mathrm{C}$, and $2.2 \\times 1.8 = 3.96^{\\circ}\\mathrm{F}$. Consistent." },
        ],
        result: "$102.6^{\\circ}\\mathrm{F}$, about $4.0^{\\circ}\\mathrm{F}$ of fever.",
      },
      {
        title: "Calibrating a resistance sensor",
        problem: "A platinum sensor reads $100.0\\ \\Omega$ at $0^{\\circ}\\mathrm{C}$ and $138.5\\ \\Omega$ at $100^{\\circ}\\mathrm{C}$. Assuming linearity, what temperature gives $123.1\\ \\Omega$?",
        steps: [
          { label: "Slope", text: "$(138.5 - 100.0)/100 = 0.385\\ \\Omega/^{\\circ}\\mathrm{C}$." },
          { label: "Invert", text: "$T = (123.1 - 100.0)/0.385 = 23.1/0.385 = 60.0^{\\circ}\\mathrm{C}$." },
          { label: "Check", text: "Linear interpolation between fixed points is exactly how practical scales are built." },
        ],
        result: "$T = 60.0^{\\circ}\\mathrm{C}$.",
      },
    ],
    keyTakeaways: [
      "Any monotonic equilibrium property can be a thermometer once calibrated.",
      "Celsius and Fahrenheit share fixed points: $T_{F} = (9/5)T_{C} + 32$.",
      "Resistance sensors give precision; thermocouples give range and speed.",
    ],
    quiz: [
      {
        q: "A change of $10$ Celsius degrees equals:",
        options: ["$10$ Fahrenheit degrees", "$18$ Fahrenheit degrees", "$5.6$ Fahrenheit degrees", "$50$ Fahrenheit degrees"],
        answer: 1,
        explanation: "Degree sizes differ by $9/5 = 1.8$: $10 \\times 1.8 = 18\\ ^{\\circ}\\mathrm{F}$.",
      },
      {
        q: "Different thermometers can disagree between fixed points because:",
        options: ["The zeroth law fails", "Each uses a different thermometric property with its own $T$ dependence", "Heat flows uphill", "Calibration is impossible"],
        answer: 1,
        explanation: "Mercury length, gas pressure, and resistance interpolate differently between the ice and steam points.",
      },
      {
        q: "A thermocouple measures temperature via:",
        options: ["Thermal expansion of a liquid", "Seebeck emf between dissimilar-metal junctions", "Blackbody color", "Gas volume at constant pressure"],
        answer: 1,
        explanation: "Two joined metals generate an emf set by the junction temperature difference.",
      },
    ],
  },
  {
    sectionId: "young-ch17-s3",
    readingTime: 5,
    intro: "All practical thermometers disagree somewhere — so which scale is true? The constant-volume gas thermometer points to absolute zero, the unattainable cold limit where gas pressure extrapolates to zero and the kelvin scale begins.",
    objectives: [
      "Explain the constant-volume gas thermometer and pressure extrapolation",
      "Define the kelvin and absolute zero with the triple-point reference",
      "Convert between Celsius and kelvin scales",
    ],
    concepts: [
      {
        term: "Constant-volume gas thermometer",
        kind: "method",
        statement: "A fixed amount of dilute gas held at constant volume has pressure proportional to temperature; measuring $p$ with a mercury manometer gives $T$ up to an additive constant.",
        detail: "Dilute gases agree with each other regardless of species — the signature of a fundamental scale beneath the practical ones.",
      },
      {
        term: "Absolute zero",
        kind: "definition",
        statement: "**Absolute zero** is the temperature at which the extrapolated gas pressure vanishes: $0\\ \\mathrm{K} = -273.15^{\\circ}\\mathrm{C}$, the coldest possible temperature.",
        detail: "Extrapolating $p$ versus $T_{C}$ lines for oxygen, nitrogen, and helium all meet the axis at $-273.15^{\\circ}\\mathrm{C}$ — one universal zero.",
      },
      {
        term: "Kelvin scale",
        kind: "definition",
        statement: "The **kelvin** has the same degree size as the Celsius degree with $T_{K} = T_{C} + 273.15$; by SI definition the triple point of water is $273.16\\ \\mathrm{K}$ ($0.01^{\\circ}\\mathrm{C}$).",
        detail: "Gas-law and kinetic-theory formulas ($pV = nRT$, $\\tfrac{1}{2}m\\overline{v^{2}} = \\tfrac{3}{2}kT$) require absolute $T$ in kelvins — never Celsius.",
      },
      {
        term: "Triple point of water",
        kind: "notation",
        statement: "The **triple point** ($273.16\\ \\mathrm{K}$, $611.7\\ \\mathrm{Pa}$) where ice, liquid, and vapor coexist in equilibrium is the reproducible fixed point anchoring the kelvin.",
        detail: "Unlike ice and steam points, the triple point needs no pressure specification — three phases coexist at exactly one $(p, T)$.",
      },
      {
        term: "Why absolute matters",
        kind: "insight",
        statement: "Ratios and proportionalities in thermal physics ($v \\propto \\sqrt{T}$, $p \\propto T$) hold only on an absolute scale; doubling $20^{\\circ}\\mathrm{C}$ to $40^{\\circ}\\mathrm{C}$ does not double any kinetic energy.",
        detail: "But $293\\ \\mathrm{K}$ to $586\\ \\mathrm{K}$ genuinely doubles mean molecular kinetic energy — the kelvin makes proportionality physical.",
      },
    ],
    figures: [
      {
        caption: "Gas-thermometer pressure versus Celsius temperature extrapolates to zero at $-273.15^{\\circ}\\mathrm{C}$ for every dilute gas — absolute zero.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pressure extrapolation to absolute zero"><line x1="40" y1="150" x2="380" y2="150" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="150" x2="150" y2="20" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/><line x1="150" y1="150" x2="360" y2="30" stroke="currentColor" stroke-width="2"/><line x1="150" y1="150" x2="360" y2="55" stroke="currentColor" stroke-width="2" opacity="0.6"/><line x1="150" y1="150" x2="360" y2="80" stroke="currentColor" stroke-width="2" opacity="0.35"/><circle cx="150" cy="150" r="4" fill="currentColor"/><text x="138" y="168" font-size="12" fill="currentColor">-273.15°C</text><text x="300" y="165" font-size="12" fill="currentColor">T (°C) →</text><text x="20" y="60" font-size="12" fill="currentColor">p</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Room temperature in kelvins",
        problem: "Convert $20.0^{\\circ}\\mathrm{C}$ to kelvins and find the fractional error if someone uses $273$ instead of $273.15$.",
        steps: [
          { label: "Convert", text: "$T_{K} = 20.0 + 273.15 = 293.15\\ \\mathrm{K}$." },
          { label: "Approximation", text: "Using $273$ gives $293.00\\ \\mathrm{K}$, off by $0.15\\ \\mathrm{K}$." },
          { label: "Fraction", text: "$0.15/293.15 = 5.1 \\times 10^{-4}$, about $0.05$ percent — negligible for most work, kept for precision." },
        ],
        result: "$293.15\\ \\mathrm{K}$; the $273$ shortcut errs by $0.05$ percent.",
      },
      {
        title: "Doubling the kinetic energy",
        problem: "Air at $27^{\\circ}\\mathrm{C}$ ($300\\ \\mathrm{K}$) is heated until mean molecular kinetic energy doubles. Find the final Celsius temperature.",
        steps: [
          { label: "Absolute doubling", text: "Energy $\\propto T_{K}$, so $T_{2} = 2(300) = 600\\ \\mathrm{K}$." },
          { label: "Back to Celsius", text: "$T_{C} = 600 - 273.15 = 326.85^{\\circ}\\mathrm{C} \\approx 327^{\\circ}\\mathrm{C}$." },
          { label: "Naive trap", text: "Doubling $27$ to $54^{\\circ}\\mathrm{C}$ would give only $327/300 = 1.09$ times the energy — the Celsius-doubling fallacy." },
        ],
        result: "$327^{\\circ}\\mathrm{C}$, not $54^{\\circ}\\mathrm{C}$.",
      },
    ],
    keyTakeaways: [
      "Gas thermometers extrapolate to zero pressure at $-273.15^{\\circ}\\mathrm{C}$: absolute zero.",
      "Kelvins share the Celsius degree size: $T_{K} = T_{C} + 273.15$.",
      "All proportional gas and kinetic laws demand absolute temperature.",
    ],
    quiz: [
      {
        q: "Absolute zero is best described as:",
        options: ["$0^{\\circ}\\mathrm{C}$", "The temperature where dilute-gas pressure extrapolates to zero, $-273.15^{\\circ}\\mathrm{C}$", "The triple point of water", "Unneeded since Celsius suffices for gas laws"],
        answer: 1,
        explanation: "Every dilute gas's $p$-versus-$T_{C}$ line meets zero at $-273.15^{\\circ}\\mathrm{C}$ — one universal cold limit.",
      },
      {
        q: "A gas at $300\\ \\mathrm{K}$ is heated to $600\\ \\mathrm{K}$ at constant volume. Its pressure:",
        options: ["Is unchanged", "Doubles", "Quadruples", "Halves"],
        answer: 1,
        explanation: "$p \\propto T_{K}$ at fixed $n, V$: doubling absolute temperature doubles pressure.",
      },
      {
        q: "The triple point of water is used because:",
        options: ["It is the hottest liquid water can reach", "Three phases coexist at a single unique $(p,T)$, needing no pressure correction", "It equals $0\\ \\mathrm{K}$", "Ice melts there at any pressure"],
        answer: 1,
        explanation: "The unique triple $(273.16\\ \\mathrm{K}, 611.7\\ \\mathrm{Pa})$ is perfectly reproducible, unlike pressure-dependent ice/steam points.",
      },
    ],
  },
  {
    sectionId: "young-ch17-s4",
    readingTime: 5,
    intro: "Bridges expand, cavities shrink-fit, and thermostats click — all from thermal expansion. Young quantifies linear, area, and volume expansion and shows how to engineer around (or exploit) the effect.",
    objectives: [
      "Apply $\\Delta L = \\alpha L_{0}\\Delta T$ and $\\Delta V = \\beta V_{0}\\Delta T$ numerically",
      "Relate $\\beta = 3\\alpha$ for isotropic solids",
      "Explain thermal stress and the anomalous expansion of water",
    ],
    concepts: [
      {
        term: "Linear expansion",
        kind: "law",
        statement: "For temperature change $\\Delta T$, a rod of length $L_{0}$ changes by $\\Delta L = \\alpha L_{0} \\Delta T$, where $\\alpha$ is the **coefficient of linear expansion**.",
        detail: "Typical $\\alpha$: aluminum $2.3 \\times 10^{-5}/^{\\circ}\\mathrm{C}$, steel $1.2 \\times 10^{-5}/^{\\circ}\\mathrm{C}$, invar $0.09 \\times 10^{-5}/^{\\circ}\\mathrm{C}$ — the surveyor's alloy.",
      },
      {
        term: "Volume expansion and isotropy",
        kind: "theorem",
        statement: "Heating scales every linear dimension by $(1 + \\alpha\\Delta T)$, so volume scales by $(1 + \\alpha\\Delta T)^{3} \\approx 1 + 3\\alpha\\Delta T$: hence $\\beta = 3\\alpha$ for isotropic solids, with $\\Delta V = \\beta V_{0}\\Delta T$.",
        detail: "A hole in a plate expands exactly as if filled with the plate material — thermal expansion is a photographic enlargement.",
      },
      {
        term: "Thermal stress",
        kind: "method",
        statement: "A bar clamped against expansion develops stress $F/A = Y\\alpha\\Delta T$; a $50^{\\circ}\\mathrm{C}$ chill on clamped steel gives $(2.0 \\times 10^{11})(1.2 \\times 10^{-5})(50) = 1.2 \\times 10^{8}\\ \\mathrm{Pa}$ — near yield.",
        detail: "Expansion joints, roller bridge ends, and looped pipelines exist to avoid exactly this stress.",
      },
      {
        term: "Bimetallic strip",
        kind: "insight",
        statement: "Bonded strips with different $\\alpha$ bend on heating toward the low-$\\alpha$ side with curvature $\\propto (\\alpha_{2} - \\alpha_{1})\\Delta T$ — the thermostat and breaker mechanism.",
        detail: "Brass on invar curls dramatically for small $\\Delta T$, snapping a contact open or closed at the set temperature.",
      },
      {
        term: "Anomalous expansion of water",
        kind: "law",
        statement: "Liquid water contracts on warming from $0^{\\circ}\\mathrm{C}$ to $4^{\\circ}\\mathrm{C}$ (maximum density at $3.98^{\\circ}\\mathrm{C}$) and only then expands — so ice floats and lakes freeze top-down.",
        detail: "Below $4^{\\circ}\\mathrm{C}$ the open hydrogen-bonded network collapses faster than thermal agitation spreads molecules; aquatic life survives winter on this anomaly.",
      },
    ],
    examples: [
      {
        title: "Expansion joint on a bridge",
        problem: "A $120\\ \\mathrm{m}$ steel span ($\\alpha = 1.2 \\times 10^{-5}/^{\\circ}\\mathrm{C}$) swings from $-20^{\\circ}\\mathrm{C}$ to $+40^{\\circ}\\mathrm{C}$. How wide must the expansion gap be?",
        steps: [
          { label: "Temperature swing", text: "$\\Delta T = 40 - (-20) = 60\\ ^{\\circ}\\mathrm{C}$." },
          { label: "Expansion", text: "$\\Delta L = \\alpha L_{0}\\Delta T = (1.2 \\times 10^{-5})(120)(60) = 8.64 \\times 10^{-2}\\ \\mathrm{m}$." },
          { label: "Gap", text: "Allow margin: a $10\\ \\mathrm{cm}$ joint covers the $8.6\\ \\mathrm{cm}$ growth." },
        ],
        result: "$\\Delta L = 8.6\\ \\mathrm{cm}$; specify a $\\sim 10\\ \\mathrm{cm}$ joint.",
      },
      {
        title: "Shrink-fitting a ring",
        problem: "An aluminum ring of inner diameter $5.000\\ \\mathrm{cm}$ at $20^{\\circ}\\mathrm{C}$ must slip over a $5.020\\ \\mathrm{cm}$ shaft ($\\alpha = 2.3 \\times 10^{-5}/^{\\circ}\\mathrm{C}$). To what temperature must it be heated?",
        steps: [
          { label: "Needed strain", text: "$\\Delta L/L_{0} = 0.020/5.000 = 4.00 \\times 10^{-3}$." },
          { label: "Temperature rise", text: "$\\Delta T = (\\Delta L/L_{0})/\\alpha = 4.00 \\times 10^{-3}/2.3 \\times 10^{-5} = 174^{\\circ}\\mathrm{C}$." },
          { label: "Target", text: "$T = 20 + 174 = 194^{\\circ}\\mathrm{C}$; heat to $\\sim 200^{\\circ}\\mathrm{C}$ for clearance." },
        ],
        result: "Heat to about $194^{\\circ}\\mathrm{C}$.",
      },
    ],
    keyTakeaways: [
      "Linear $\\Delta L = \\alpha L_{0}\\Delta T$ and volume $\\Delta V = \\beta V_{0}\\Delta T$ with $\\beta = 3\\alpha$ for isotropic solids.",
      "Clamped expansion produces stress $Y\\alpha\\Delta T$ large enough to need joints.",
      "Water's density maximum at $4^{\\circ}\\mathrm{C}$ makes ice float and lakes freeze top-down.",
    ],
    quiz: [
      {
        q: "A metal washer is heated uniformly. Its hole:",
        options: ["Shrinks", "Expands as if filled with metal", "Stays fixed", "Expands only if the washer is thin"],
        answer: 1,
        explanation: "Thermal expansion is a uniform scaling: every linear dimension, including hole diameter, grows by $(1 + \\alpha\\Delta T)$.",
      },
      {
        q: "For an isotropic solid, the volume coefficient $\\beta$ relates to $\\alpha$ by:",
        options: ["$\\beta = \\alpha$", "$\\beta = 3\\alpha$", "$\\beta = \\alpha^{3}$", "$\\beta = \\alpha/3$"],
        answer: 1,
        explanation: "$(1+\\alpha\\Delta T)^{3} \\approx 1 + 3\\alpha\\Delta T$ to first order.",
      },
      {
        q: "Ice floats because:",
        options: ["Surface tension holds it up", "Water is densest at $4^{\\circ}\\mathrm{C}$ and expands on freezing", "Ice contains air bubbles only", "Cold water rises"],
        answer: 1,
        explanation: "The $0$–$4^{\\circ}\\mathrm{C}$ contraction anomaly plus expansion on freezing make ice ($917\\ \\mathrm{kg/m^{3}}$) lighter than liquid water.",
      },
      {
        q: "A bimetallic strip heated bends toward:",
        options: ["The high-$\\alpha$ side", "The low-$\\alpha$ side", "Neither; it stays straight", "The hotter end only"],
        answer: 1,
        explanation: "The high-$\\alpha$ metal lengthens more, forcing the strip to curl with the low-$\\alpha$ metal on the inside.",
      },
    ],
  },
  {
    sectionId: "young-ch17-s5",
    readingTime: 5,
    intro: "Heat is energy in transit, and Young makes it quantitative: specific heat ties joules to temperature change, and molar heat capacity prepares the kinetic-theory connection of Chapter 18.",
    objectives: [
      "Apply $Q = mc\\Delta T$ to heating and cooling problems",
      "Distinguish specific heat from molar heat capacity and convert between them",
      "Explain why water's huge specific heat moderates climate",
    ],
    concepts: [
      {
        term: "Heat and its units",
        kind: "definition",
        statement: "**Heat** $Q$ is energy transferred by thermal contact; its SI unit is the joule, with the historical calorie $1\\ \\mathrm{cal} = 4.186\\ \\mathrm{J}$ and $1\\ \\mathrm{kcal} = 4186\\ \\mathrm{J}$ (the food Calorie).",
        detail: "Joule's paddle-wheel experiments proved heat is energy, fixing the mechanical equivalent $4.186\\ \\mathrm{J/cal}$ that ended the caloric-fluid theory.",
      },
      {
        term: "Specific heat",
        kind: "definition",
        statement: "The **specific heat** $c$ is defined by $Q = mc\\Delta T$: the energy per unit mass per degree. Water's $c = 4190\\ \\mathrm{J/(kg \\cdot K)}$ dwarfs aluminum's $900$ and copper's $390$.",
        detail: "Sign convention: $Q > 0$ warms ($\\Delta T > 0$); $Q < 0$ cools. Heat capacity $C = mc$ is the whole-object version in $\\mathrm{J/K}$.",
      },
      {
        term: "Molar heat capacity",
        kind: "notation",
        statement: "**Molar heat capacity** $C_{m}$ gives $Q = nC_{m}\\Delta T$ per mole; $C_{m} = Mc$ where $M$ is the molar mass in $\\mathrm{kg/mol}$.",
        detail: "Water: $M = 0.0180\\ \\mathrm{kg/mol}$ gives $C_{m} = (0.0180)(4190) = 75.4\\ \\mathrm{J/(mol \\cdot K)} \\approx 9R$ — far above the $3R$ Dulong-Petit value, a hint of extra molecular storage.",
      },
      {
        term: "Water as thermal reservoir",
        kind: "insight",
        statement: "Water's enormous $c$ makes oceans and bodies thermal flywheels: $1\\ \\mathrm{kg}$ of water stores as much per degree as $4.7\\ \\mathrm{kg}$ of aluminum or $10.7\\ \\mathrm{kg}$ of copper.",
        detail: "Maritime climates are mild and humans are $\\sim 60$ percent water precisely because temperature swings cost so much energy.",
      },
      {
        term: "Limits of constant $c$",
        kind: "method",
        statement: "Tabulated $c$ values apply near room temperature; for large spans use $Q = m\\int c(T)\\,dT$, and near phase changes $c$ effectively diverges as energy goes into breaking bonds.",
        detail: "Cryogenic heat capacities plunge toward zero (Debye $T^{3}$ law preview), while phase-change energy is handled by latent heats in Section 17.6.",
      },
    ],
    examples: [
      {
        title: "Heating a kettle",
        problem: "How much energy heats $1.50\\ \\mathrm{kg}$ of water from $20.0^{\\circ}\\mathrm{C}$ to $100^{\\circ}\\mathrm{C}$ ($c = 4190\\ \\mathrm{J/(kg \\cdot K)}$)? How long with a $1500\\ \\mathrm{W}$ kettle at $90$ percent efficiency?",
        steps: [
          { label: "Energy", text: "$Q = mc\\Delta T = (1.50)(4190)(80.0) = 5.03 \\times 10^{5}\\ \\mathrm{J}$." },
          { label: "Useful power", text: "$P = 0.90(1500) = 1350\\ \\mathrm{W}$." },
          { label: "Time", text: "$t = Q/P = 5.03 \\times 10^{5}/1350 = 373\\ \\mathrm{s} \\approx 6.2\\ \\mathrm{min}$." },
        ],
        result: "$5.03 \\times 10^{5}\\ \\mathrm{J}$; about $6.2\\ \\mathrm{min}$ of heating.",
      },
      {
        title: "Copper versus water",
        problem: "A $2.00\\ \\mathrm{kg}$ copper block ($c = 390$) and $2.00\\ \\mathrm{kg}$ of water both absorb $10.0\\ \\mathrm{kJ}$. Compare $\\Delta T$.",
        steps: [
          { label: "Copper", text: "$\\Delta T = Q/(mc) = 10{,}000/(2.00 \\times 390) = 12.8^{\\circ}\\mathrm{C}$." },
          { label: "Water", text: "$\\Delta T = 10{,}000/(2.00 \\times 4190) = 1.19^{\\circ}\\mathrm{C}$." },
          { label: "Ratio", text: "$12.8/1.19 = 10.7$: copper swings nearly eleven times farther per joule." },
        ],
        result: "Copper rises $12.8^{\\circ}\\mathrm{C}$; water only $1.19^{\\circ}\\mathrm{C}$.",
      },
    ],
    keyTakeaways: [
      "$Q = mc\\Delta T$ with $c$ in $\\mathrm{J/(kg \\cdot K)}$; sign tracks warming versus cooling.",
      "Molar form $Q = nC_{m}\\Delta T$ with $C_{m} = Mc$ bridges to kinetic theory.",
      "Water's $4190\\ \\mathrm{J/(kg \\cdot K)}$ makes it Earth's thermal flywheel.",
    ],
    quiz: [
      {
        q: "Dumping $4186\\ \\mathrm{J}$ into $1.00\\ \\mathrm{kg}$ of water warms it by:",
        options: ["$0.10^{\\circ}\\mathrm{C}$", "$1.00^{\\circ}\\mathrm{C}$", "$4.186^{\\circ}\\mathrm{C}$", "$10.0^{\\circ}\\mathrm{C}$"],
        answer: 1,
        explanation: "$\\Delta T = Q/(mc) = 4186/(1.00 \\times 4190) \\approx 1.00^{\\circ}\\mathrm{C}$ — the calorie definition in action.",
      },
      {
        q: "A food Calorie ($1\\ \\mathrm{kcal}$) equals:",
        options: ["$4.186\\ \\mathrm{J}$", "$4186\\ \\mathrm{J}$", "$1\\ \\mathrm{J}$", "$1000\\ \\mathrm{kcal}$"],
        answer: 1,
        explanation: "Capital-C Calorie is a kilocalorie: $1000 \\times 4.186\\ \\mathrm{J} = 4186\\ \\mathrm{J}$.",
      },
      {
        q: "Coastal climates are milder than continental ones at the same latitude mainly because:",
        options: ["The ocean is always warm", "Water's huge specific heat stores and releases energy slowly", "Salt raises conductivity", "Wind averages temperatures"],
        answer: 1,
        explanation: "Oceans absorb summer heat with small $\\Delta T$ and return it in winter — a giant $c$-driven flywheel.",
      },
    ],
  },
  {
    sectionId: "young-ch17-s6",
    readingTime: 6,
    intro: "What happens when added heat causes no temperature change at all? Young solves calorimetry with phase changes — melting, boiling, and the energy bookkeeping of $Q = mL$ that governs everything from ice water to steam burns.",
    objectives: [
      "Solve calorimetry problems with $Q = mc\\Delta T$ plus $Q = \\pm mL$ terms",
      "State heats of fusion and vaporization for water numerically",
      "Explain why steam burns are severe and ice water stays at $0^{\\circ}\\mathrm{C}$",
    ],
    concepts: [
      {
        term: "Calorimetry energy balance",
        kind: "method",
        statement: "In an isolated system $\\sum Q_{i} = 0$: every warming, cooling, melting, freezing, boiling, and condensing term sums to zero, with $Q = mc\\Delta T$ for temperature changes and $Q = \\pm mL$ for phase changes.",
        detail: "Strategy: assume a final state, write all terms with correct signs, solve, and check the assumption (e.g., that all ice melts) — then revise if contradicted.",
      },
      {
        term: "Heat of fusion",
        kind: "definition",
        statement: "The **heat of fusion** $L_{f}$ is the energy per unit mass to melt at constant $T$: for water $L_{f} = 3.34 \\times 10^{5}\\ \\mathrm{J/kg}$, so melting $1\\ \\mathrm{kg}$ of ice costs as much as warming that water $79.7^{\\circ}\\mathrm{C}$.",
        detail: "Melting breaks hydrogen-bond order without speeding molecules — energy into structure, not temperature.",
      },
      {
        term: "Heat of vaporization",
        kind: "definition",
        statement: "The **heat of vaporization** $L_{v}$ vaporizes liquid at constant $T$: for water $L_{v} = 2.256 \\times 10^{6}\\ \\mathrm{J/kg}$ — nearly seven times $L_{f}$ and equal to heating water $539^{\\circ}\\mathrm{C}$.",
        detail: "Condensing steam dumps this enormous energy onto skin, which is why a $100^{\\circ}\\mathrm{C}$ steam burn far exceeds a $100^{\\circ}\\mathrm{C}$ water burn.",
      },
      {
        term: "Phase-change plateau",
        kind: "insight",
        statement: "During a phase change at fixed pressure, added heat changes the phase fraction, not $T$: ice water holds $0^{\\circ}\\mathrm{C}$ and boiling water holds $100^{\\circ}\\mathrm{C}$ until conversion completes.",
        detail: "This plateau is the basis of fixed-point calibration baths and of sweating as a thermostat — evaporation pins skin near its wet-bulb temperature.",
      },
      {
        term: "Sign discipline",
        kind: "notation",
        statement: "Melting and vaporization take $Q = +mL$ (energy in); freezing and condensation release $Q = -mL$; warming takes $+mc\\Delta T$ and cooling $-mc|\\Delta T|$.",
        detail: "Most calorimetry errors are sign errors, not arithmetic — writing every term as (final minus initial) form prevents them.",
      },
    ],
    figures: [
      {
        caption: "Heating curve of water: sensible slopes ($Q = mc\\Delta T$) alternate with flat latent plateaus ($Q = mL$) at $0^{\\circ}\\mathrm{C}$ and $100^{\\circ}\\mathrm{C}$.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heating curve with melting and boiling plateaus"><line x1="30" y1="160" x2="380" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="160" x2="30" y2="15" stroke="currentColor" stroke-width="1.5"/><polyline points="30,140 90,110 150,110 210,60 290,60 340,25" fill="none" stroke="currentColor" stroke-width="2"/><text x="95" y="100" font-size="11" fill="currentColor">melt Lf</text><text x="215" y="50" font-size="11" fill="currentColor">boil Lv</text><text x="300" y="175" font-size="12" fill="currentColor">Q added →</text><text x="5" y="80" font-size="12" fill="currentColor">T</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Iced drink equilibrium",
        problem: "A $0.250\\ \\mathrm{kg}$ glass of water at $25.0^{\\circ}\\mathrm{C}$ receives $0.050\\ \\mathrm{kg}$ of ice at $0^{\\circ}\\mathrm{C}$. Find the final temperature (insulated cup, $c = 4190$, $L_{f} = 3.34 \\times 10^{5}$).",
        steps: [
          { label: "Melt cost", text: "$Q_{\\mathrm{melt}} = mL_{f} = (0.050)(3.34 \\times 10^{5}) = 1.67 \\times 10^{4}\\ \\mathrm{J}$." },
          { label: "Available cooling", text: "Cooling all water to $0$: $Q = (0.250)(4190)(25.0) = 2.62 \\times 10^{4}\\ \\mathrm{J} > 1.67 \\times 10^{4}$ — all ice melts." },
          { label: "Balance", text: "$(0.250)(4190)(T - 25.0) + 1.67 \\times 10^{4} + (0.050)(4190)T = 0$ gives $1257T = 9495$, so $T = 7.55^{\\circ}\\mathrm{C}$." },
        ],
        result: "All ice melts; final $T \\approx 7.6^{\\circ}\\mathrm{C}$.",
      },
      {
        title: "Energy in a steam burn",
        problem: "Compare the energy released when $1.0\\ \\mathrm{g}$ of $100^{\\circ}\\mathrm{C}$ steam versus $100^{\\circ}\\mathrm{C}$ water cools to skin at $37^{\\circ}\\mathrm{C}$.",
        steps: [
          { label: "Water cooling", text: "$Q = mc\\Delta T = (0.0010)(4190)(63) = 264\\ \\mathrm{J}$." },
          { label: "Steam extra", text: "Condensation adds $mL_{v} = (0.0010)(2.256 \\times 10^{6}) = 2256\\ \\mathrm{J}$." },
          { label: "Total steam", text: "$2256 + 264 = 2520\\ \\mathrm{J}$ — nearly ten times the water-only burn." },
        ],
        result: "Steam dumps $2520\\ \\mathrm{J}$ versus $264\\ \\mathrm{J}$ for water — $9.5$ times worse.",
      },
    ],
    keyTakeaways: [
      "Isolated calorimetry: $\\sum Q_{i} = 0$ with $mc\\Delta T$ and $\\pm mL$ terms.",
      "Water: $L_{f} = 3.34 \\times 10^{5}\\ \\mathrm{J/kg}$, $L_{v} = 2.256 \\times 10^{6}\\ \\mathrm{J/kg}$.",
      "Phase plateaus pin $T$; condensation energy makes steam burns severe.",
    ],
    quiz: [
      {
        q: "Ice water left standing stays near $0^{\\circ}\\mathrm{C}$ until all ice melts because:",
        options: ["Ice insulates the water", "Added heat melts ice ($Q = mL_{f}$) instead of raising $T$", "Water cannot warm above zero", "Evaporation cools it exactly"],
        answer: 1,
        explanation: "At fixed pressure the melting plateau absorbs energy as phase fraction, not temperature.",
      },
      {
        q: "$2.0\\ \\mathrm{kg}$ of ice at $0^{\\circ}\\mathrm{C}$ needs what energy to melt completely?",
        options: ["$8.38\\ \\mathrm{kJ}$", "$668\\ \\mathrm{kJ}$", "$4512\\ \\mathrm{kJ}$", "$167\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$Q = mL_{f} = (2.0)(3.34 \\times 10^{5}) = 6.68 \\times 10^{5}\\ \\mathrm{J} = 668\\ \\mathrm{kJ}$.",
      },
      {
        q: "The most common calorimetry mistake is:",
        options: ["Using kelvins", "Sign errors on $Q$ terms", "Using $g$ instead of $kg$ only", "Ignoring the container always"],
        answer: 1,
        explanation: "Writing each term as (final minus initial) with $+mL$ for melting/boiling and $-mL$ for freezing/condensing prevents it.",
      },
    ],
  },
  {
    sectionId: "young-ch17-s7",
    readingTime: 6,
    intro: "Heat moves by conduction, convection, and radiation — three mechanisms with three rate laws. Young quantifies each, from Fourier's law through the Stefan-Boltzmann $T^{4}$ radiation that sets Earth's climate.",
    objectives: [
      "Apply Fourier conduction $H = kA(T_{h} - T_{c})/L$ to slabs and composites",
      "Distinguish natural from forced convection and its approximate laws",
      "Compute net radiative transfer with $H = Ae\\sigma(T^{4} - T_{s}^{4})$",
    ],
    concepts: [
      {
        term: "Fourier conduction law",
        kind: "law",
        statement: "The conducted heat current is $H = dQ/dt = kA(T_{h} - T_{c})/L$, where $k$ is the **thermal conductivity**; in differential form $H = -kA\\,dT/dx$.",
        detail: "Copper $k \\approx 385\\ \\mathrm{W/(m \\cdot K)}$ versus styrofoam $0.027$: four orders of magnitude separate conductors from insulators.",
      },
      {
        term: "Thermal resistance and composites",
        kind: "method",
        statement: "Define $R = L/(kA)$ so $H = \\Delta T/R$; series layers add ($R = R_{1} + R_{2}$) and parallel paths combine reciprocally — the exact thermal analogue of electrical resistance.",
        detail: "Building R-values are $R$ in imperial units; double glazing wins by trapping a low-$k$ air gap between panes.",
      },
      {
        term: "Convection",
        kind: "definition",
        statement: "**Convection** carries heat by bulk fluid motion: **natural** convection from buoyancy (hot air rising) or **forced** convection from pumps, fans, and winds.",
        detail: "No simple universal law exists; engineers use empirical $H = hA\\Delta T$ with situation-dependent $h$. Blood circulation is the body's forced-convection system.",
      },
      {
        term: "Stefan-Boltzmann radiation",
        kind: "law",
        statement: "A surface of emissivity $e$ and area $A$ at $T$ radiates $H = Ae\\sigma T^{4}$ with $\\sigma = 5.67 \\times 10^{-8}\\ \\mathrm{W/(m^{2} \\cdot K^{4})}$; net exchange with surroundings at $T_{s}$ is $H_{\\mathrm{net}} = Ae\\sigma(T^{4} - T_{s}^{4})$.",
        detail: "The $T^{4}$ dependence makes radiation negligible near room temperature but dominant in furnaces, stars, and climate balance.",
      },
      {
        term: "Blackbody and emissivity",
        kind: "notation",
        statement: "A **blackbody** ($e = 1$) absorbs and emits perfectly; polished silver has $e \\approx 0.02$ while flat black paint has $e \\approx 0.95$ — which is why thermos flasks are silvered.",
        detail: "Kirchhoff's insight: good absorbers are good emitters at the same wavelength, so space blankets reflect your own infrared back at you.",
      },
    ],
    figures: [
      {
        caption: "Three mechanisms side by side: conduction through a slab ($H \\propto \\Delta T/L$), convection loop, and $T^{4}$ radiation exchange.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conduction convection radiation diagrams"><rect x="20" y="40" width="90" height="90" fill="currentColor" opacity="0.25" stroke="currentColor"/><text x="30" y="30" font-size="12" fill="currentColor">conduction</text><text x="30" y="145" font-size="11" fill="currentColor">Th → Tc</text><ellipse cx="210" cy="85" rx="45" ry="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="185" y="30" font-size="12" fill="currentColor">convection</text><circle cx="330" cy="85" r="25" fill="currentColor" opacity="0.7"/><g stroke="currentColor" stroke-width="1.5"><line x1="330" y1="45" x2="330" y2="25"/><line x1="330" y1="125" x2="330" y2="145"/><line x1="290" y1="85" x2="270" y2="85"/><line x1="370" y1="85" x2="390" y2="85"/></g><text x="305" y="30" font-size="12" fill="currentColor">radiation</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Heat through a window",
        problem: "A $1.5\\ \\mathrm{m^{2}}$ single glass pane ($L = 3.0\\ \\mathrm{mm}$, $k = 0.80$) separates $20^{\\circ}\\mathrm{C}$ indoors from $0^{\\circ}\\mathrm{C}$ outdoors. Find the heat loss rate.",
        steps: [
          { label: "Fourier", text: "$H = kA\\Delta T/L = (0.80)(1.5)(20)/0.0030 = 24/0.0030 = 8000\\ \\mathrm{W}$." },
          { label: "Interpretation", text: "$8\\ \\mathrm{kW}$ through one window — which is why single glazing is effectively a hole in the wall." },
          { label: "Double glazing", text: "Adding a $1\\ \\mathrm{cm}$ air gap ($k = 0.024$) contributes $R = 0.01/(0.024 \\times 1.5) = 0.278\\ \\mathrm{K/W}$ versus glass $0.0025$ — cutting loss by roughly $100$ times." },
        ],
        result: "$H = 8.0\\ \\mathrm{kW}$ single-glazed; an air gap cuts it by two orders of magnitude.",
      },
      {
        title: "Human radiation loss",
        problem: "Estimate the net radiative loss of a $A = 1.5\\ \\mathrm{m^{2}}$, $e = 0.95$ person at $T = 307\\ \\mathrm{K}$ ($34^{\\circ}\\mathrm{C}$ skin) in a $293\\ \\mathrm{K}$ room.",
        steps: [
          { label: "Fourth powers", text: "$307^{4} = 8.88 \\times 10^{9}$; $293^{4} = 7.37 \\times 10^{9}$; difference $1.51 \\times 10^{9}$." },
          { label: "Net rate", text: "$H = (1.5)(0.95)(5.67 \\times 10^{-8})(1.51 \\times 10^{9}) = 1.425 \\times 85.6 = 122\\ \\mathrm{W}$." },
          { label: "Meaning", text: "Comparable to basal metabolic rate ($\\sim 100\\ \\mathrm{W}$) — radiation alone nearly balances metabolism indoors." },
        ],
        result: "$H_{\\mathrm{net}} \\approx 122\\ \\mathrm{W}$ radiated away.",
      },
    ],
    keyTakeaways: [
      "Conduction $H = kA\\Delta T/L$ with layered $R = L/(kA)$ adding in series.",
      "Convection moves heat by bulk flow; radiation by $\\sigma T^{4}$ photons.",
      "Net radiation $Ae\\sigma(T^{4} - T_{s}^{4})$ balances human metabolism and Earth's climate.",
    ],
    quiz: [
      {
        q: "Doubling a slab's thickness with the same $\\Delta T$:",
        options: ["Doubles $H$", "Halves $H$", "Quadruples $H$", "Leaves $H$ unchanged"],
        answer: 1,
        explanation: "$H = kA\\Delta T/L$ is inversely proportional to $L$.",
      },
      {
        q: "A thermos flask is silvered to:",
        options: ["Increase conduction", "Suppress radiation with low emissivity", "Stop convection only", "Raise heat capacity"],
        answer: 1,
        explanation: "Silvering gives $e \\approx 0.02$, cutting $Ae\\sigma(T^{4}-T_{s}^{4})$ roughly fifty-fold versus black walls; the vacuum gap kills conduction and convection.",
      },
      {
        q: "If absolute temperature doubles, radiated power grows by:",
        options: ["$2$ times", "$4$ times", "$8$ times", "$16$ times"],
        answer: 3,
        explanation: "$H = Ae\\sigma T^{4}$: $2^{4} = 16$.",
      },
      {
        q: "Blood circulation warms the skin mainly by:",
        options: ["Conduction through tissue only", "Forced convection", "Radiation inside the body", "Evaporation"],
        answer: 1,
        explanation: "Bulk flow of warm blood is textbook forced convection — a pump-driven heat-transfer loop.",
      },
    ],
  },
]
