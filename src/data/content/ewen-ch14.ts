import type { SectionContent } from "../library"

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition, Chapter 14
// Temperature and Heat Transfer (Sections 14.1 – 14.8)
// ============================================================================

export const ewenCh14Content: SectionContent[] = [
  {
    sectionId: "ewen-ch14-s1",
    readingTime: 5,
    intro: "Temperature tells how hot an object is; heat tells how much thermal energy moves because of that difference. This section defines the Fahrenheit, Celsius, and Kelvin scales, converts among them, and introduces absolute zero as the floor of temperature.",
    objectives: [
      "Convert temperatures among $^{\\circ}\\text{F}$, $^{\\circ}\\text{C}$, and kelvins",
      "Explain absolute zero and why the Kelvin scale starts there",
      "Read expansion, bimetallic, thermocouple, and resistance thermometers by principle",
    ],
    concepts: [
      {
        term: "Temperature versus heat",
        kind: "definition",
        statement: "Temperature measures the average kinetic energy per molecule; heat is thermal energy in transit from hot to cold.",
        detail: "A spark is hot but carries little heat; a warm lake is cool but stores enormous thermal energy.",
      },
      {
        term: "Fahrenheit–Celsius conversion",
        kind: "method",
        statement: "The scales are linked by $T_{F} = \\tfrac{9}{5}T_{C} + 32$ and $T_{C} = \\tfrac{5}{9}(T_{F} - 32)$.",
        detail: "A Celsius degree is $1.8$ Fahrenheit degrees; $-40^{\\circ}$ is the unique point where both read alike.",
      },
      {
        term: "Kelvin scale and absolute zero",
        kind: "definition",
        statement: "Kelvin temperature is $T_{K} = T_{C} + 273$, starting at absolute zero ($-273^{\\circ}\\text{C}$), where molecular motion is minimal.",
        detail: "Gas laws and all absolute-temperature formulas require kelvins, never $^{\\circ}\\text{C}$ or $^{\\circ}\\text{F}$ directly.",
      },
      {
        term: "Boiling and freezing reference points",
        kind: "notation",
        statement: "Water freezes at $0^{\\circ}\\text{C}$ ($32^{\\circ}\\text{F}$, $273 \\text{ K}$) and boils at $100^{\\circ}\\text{C}$ ($212^{\\circ}\\text{F}$, $373 \\text{ K}$) at $1 \\text{ atm}$.",
        detail: "These two fixed points anchor both thermometer calibration and the $100$-versus-$180$-degree interval ratio.",
      },
      {
        term: "Thermometer principles",
        kind: "insight",
        statement: "Liquid thermometers use thermal expansion, bimetallic strips use unequal expansion, thermocouples use junction voltage, and thermistors use resistance change.",
        detail: "The shop chooses by range and speed: thermocouples for furnaces, resistance sensors for precision HVAC work.",
      },
    ],
    figures: [
      {
        caption: "Three scales side by side: $32^{\\circ}\\text{F} = 0^{\\circ}\\text{C} = 273 \\text{ K}$ at freezing; $212^{\\circ}\\text{F} = 100^{\\circ}\\text{C} = 373 \\text{ K}$ at boiling.",
        svg: "<svg role='img' aria-label='Three scales side by side: 32^circtextF = 0^circtextC = 273 text K at freezing; 212^circtextF = 100^circtextC = 373 text K at boiling.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"170\"/><line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"170\"/><line x1=\"300\" y1=\"20\" x2=\"300\" y2=\"170\"/><line x1=\"85\" y1=\"140\" x2=\"115\" y2=\"140\"/><line x1=\"85\" y1=\"50\" x2=\"115\" y2=\"50\"/><line x1=\"185\" y1=\"140\" x2=\"215\" y2=\"140\"/><line x1=\"185\" y1=\"50\" x2=\"215\" y2=\"50\"/><line x1=\"285\" y1=\"140\" x2=\"315\" y2=\"140\"/><line x1=\"285\" y1=\"50\" x2=\"315\" y2=\"50\"/><text x=\"80\" y=\"185\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">F: 32 / 212</text><text x=\"180\" y=\"185\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">C: 0 / 100</text><text x=\"280\" y=\"185\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">K: 273 / 373</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Convert a shop temperature",
        problem: "A heat-treat oven runs at $425^{\\circ}\\text{F}$. Express this in $^{\\circ}\\text{C}$ and kelvins.",
        steps: [
          { label: "Step 1: To Celsius", text: "$T_{C} = (5/9)(425 - 32) = (5/9)(393) = 218^{\\circ}\\text{C}$." },
          { label: "Step 2: To kelvins", text: "$T_{K} = 218 + 273 = 491 \\text{ K}$." },
        ],
        result: "$218^{\\circ}\\text{C}$ ($491 \\text{ K}$).",
      },
      {
        title: "Cold-day conversion",
        problem: "An outdoor thermometer reads $-15.0^{\\circ}\\text{C}$. Find $^{\\circ}\\text{F}$ and kelvins.",
        steps: [
          { label: "Step 1: To Fahrenheit", text: "$T_{F} = (9/5)(-15.0) + 32 = -27.0 + 32 = 5.0^{\\circ}\\text{F}$." },
          { label: "Step 2: To kelvins", text: "$T_{K} = -15.0 + 273 = 258 \\text{ K}$." },
        ],
        result: "$5.0^{\\circ}\\text{F}$ ($258 \\text{ K}$).",
      },
    ],
    keyTakeaways: [
      "Use $T_{F} = 1.8T_{C} + 32$ for conversions and $T_{K} = T_{C} + 273$ for absolute work.",
      "Temperature is intensity; heat is energy transferred down a temperature difference.",
      "Thermometers convert expansion, voltage, or resistance change into a temperature reading.",
    ],
    quiz: [
      {
        q: "Room temperature $68^{\\circ}\\text{F}$ equals:",
        options: ["$10^{\\circ}\\text{C}$", "$20^{\\circ}\\text{C}$", "$30^{\\circ}\\text{C}$", "$293^{\\circ}\\text{C}$"],
        answer: 1,
        explanation: "$(5/9)(68-32) = 20^{\\circ}\\text{C}$ ($293 \\text{ K}$).",
      },
      {
        q: "Absolute zero is:",
        options: ["$0^{\\circ}\\text{F}$", "$0^{\\circ}\\text{C}$", "$-273^{\\circ}\\text{C}$ ($0 \\text{ K}$)", "$-273^{\\circ}\\text{F}$"],
        answer: 2,
        explanation: "Absolute zero is $-273.15^{\\circ}\\text{C}$, the zero of the Kelvin scale.",
      },
      {
        q: "A thermocouple thermometer works because:",
        options: ["A liquid expands in a capillary", "Two joined dissimilar metals generate a temperature-dependent voltage", "A bimetallic strip bends", "Radiation pressure moves a vane"],
        answer: 1,
        explanation: "The Seebeck voltage at the hot junction varies with temperature and is read electrically.",
      },
    ],
  },
  {
    sectionId: "ewen-ch14-s2",
    readingTime: 5,
    intro: "Heat is energy crossing a boundary because of a temperature difference, measured in calories, Btu, or joules. This section defines the three heat units, relates them, and distinguishes heat from internal and mechanical energy.",
    objectives: [
      "Define the calorie, kilocalorie, Btu, and joule and convert among them",
      "Distinguish heat, temperature, and internal energy in shop language",
      "Compute simple heat quantities from unit definitions",
    ],
    concepts: [
      {
        term: "Heat",
        kind: "definition",
        statement: "Heat $Q$ is thermal energy transferred by a temperature difference, flowing spontaneously from hot to cold.",
        detail: "Once transferred it becomes internal energy of the receiver; bodies contain internal energy but never contain heat.",
      },
      {
        term: "Calorie and Btu",
        kind: "notation",
        statement: "One calorie ($1 \\text{ cal}$) warms $1 \\text{ g}$ of water $1^{\\circ}\\text{C}$; one British thermal unit ($1 \\text{ Btu}$) warms $1 \\text{ lb}$ of water $1^{\\circ}\\text{F}$.",
        detail: "Food Calories are kilocalories: $1 \\text{ Cal} = 1000 \\text{ cal}$.",
      },
      {
        term: "Mechanical equivalent of heat",
        kind: "law",
        statement: "Heat and work are the same currency: $1 \\text{ cal} = 4.186 \\text{ J}$ and $1 \\text{ Btu} = 1055 \\text{ J} = 252 \\text{ cal}$.",
        detail: "Joule's paddle-wheel experiments fixed this rate; every heat problem can be finished in joules.",
      },
      {
        term: "Internal energy",
        kind: "definition",
        statement: "Internal energy is the total molecular kinetic plus potential energy stored in a body.",
        detail: "Heating raises it, cooling or doing work lowers it — the bookkeeping behind calorimetry and engines.",
      },
      {
        term: "Direction rule",
        kind: "insight",
        statement: "Net heat always flows from higher to lower temperature, never the reverse without work input.",
        detail: "Refrigerators and heat pumps pay with electrical work to force heat uphill.",
      },
    ],
    examples: [
      {
        title: "Btu rating in joules",
        problem: "A portable heater is rated at $5200 \\text{ Btu}/\\text{h}$. Find its power in watts.",
        steps: [
          { label: "Step 1: Convert energy", text: "$5200 \\text{ Btu} = 5200 \\times 1055 \\text{ J} = 5.49 \\times 10^{6} \\text{ J}$ per hour." },
          { label: "Step 2: Divide by time", text: "$P = 5.49 \\times 10^{6}/3600 = 1524 \\text{ W}$." },
        ],
        result: "About $1.52 \\text{ kW}$.",
      },
      {
        title: "Calories to warm a kettle",
        problem: "How much heat warms $2.00 \\text{ kg}$ of water from $20.0^{\\circ}\\text{C}$ to $100^{\\circ}\\text{C}$? Give kilocalories and joules.",
        steps: [
          { label: "Step 1: Use the calorie definition", text: "$Q = mc\\Delta T = (2000 \\text{ g})(1.00 \\text{ cal}/\\text{g}^{\\circ}\\text{C})(80.0) = 160{,}000 \\text{ cal} = 160 \\text{ kcal}$." },
          { label: "Step 2: To joules", text: "$160{,}000 \\times 4.186 = 670{,}000 \\text{ J}$." },
        ],
        result: "$160 \\text{ kcal}$ ($670 \\text{ kJ}$).",
      },
    ],
    keyTakeaways: [
      "Heat is energy in transit; temperature and internal energy describe states.",
      "$1 \\text{ cal} = 4.186 \\text{ J}$ and $1 \\text{ Btu} = 252 \\text{ cal} = 1055 \\text{ J}$.",
      "Heat flows hot to cold; forcing it uphill costs work.",
    ],
    quiz: [
      {
        q: "Which statement is physically correct?",
        options: ["A body contains heat", "Heat is energy transferred by a temperature difference", "Temperature measures total internal energy", "Cold flows from ice into soda"],
        answer: 1,
        explanation: "Bodies store internal energy; heat names the transfer, which always runs hot to cold.",
      },
      {
        q: "$2.00 \\text{ Btu}$ equals about:",
        options: ["$8.37 \\text{ J}$", "$504 \\text{ cal}$", "$2110 \\text{ J}$", "$0.50 \\text{ cal}$"],
        answer: 2,
        explanation: "$2 \\times 1055 \\text{ J} = 2110 \\text{ J}$ (also $504 \\text{ cal}$).",
      },
      {
        q: "A diet soda label says $1 \\text{ Cal}$. That is:",
        options: ["$1 \\text{ cal}$", "$1000 \\text{ cal}$ ($4186 \\text{ J}$)", "$1055 \\text{ J}$", "$1 \\text{ Btu}$"],
        answer: 1,
        explanation: "Food Calories are kilocalories: $1000$ physics calories, or $4186 \\text{ J}$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch14-s3",
    readingTime: 6,
    intro: "Heat travels by conduction through solids, convection in moving fluids, and radiation across empty space — and real equipment uses all three at once. This section compares the mechanisms, introduces conductivity and the Stefan–Boltzmann trend, and shows how insulation and heat exchangers are chosen.",
    objectives: [
      "Distinguish conduction, convection, and radiation with shop examples",
      "Compute conducted heat rate from $Q/t = kA\\Delta T/d$",
      "Explain insulation R-value, heat-exchanger flow, and radiation's $T^{4}$ growth",
    ],
    concepts: [
      {
        term: "Conduction",
        kind: "definition",
        statement: "Conduction carries heat molecule-to-molecule through a material at rate $Q/t = kA(T_{hot} - T_{cold})/d$, with conductivity $k$.",
        detail: "Metals conduct hundreds of times better than brick or fiberglass; doubling thickness halves the loss.",
      },
      {
        term: "Convection",
        kind: "definition",
        statement: "Convection carries heat in bulk fluid motion — natural (buoyant rise) or forced (fans, pumps).",
        detail: "Car radiators, baseboard heaters, and cooling towers all move a fluid to dump heat elsewhere.",
      },
      {
        term: "Radiation",
        kind: "law",
        statement: "Every surface radiates with power growing as $T^{4}$ (Kelvin): $P = \\epsilon\\sigma A T^{4}$, with emissivity $\\epsilon$ and $\\sigma = 5.67 \\times 10^{-8} \\text{ W}/\\text{m}^{2}\\text{K}^{4}$.",
        detail: "Doubling absolute temperature multiplies radiation sixteen-fold; polished shields ($\u03b5$ small) block it.",
      },
      {
        term: "Insulation and R-value",
        kind: "method",
        statement: "Insulators (fiberglass, foam, dead air) have tiny $k$; building R-value adds per layer, $R_{total} = R_{1} + R_{2} + \\cdots$.",
        detail: "Twice the R-value halves the conducted loss for the same temperature drop.",
      },
      {
        term: "Heat exchangers",
        kind: "insight",
        statement: "Radiators, condensers, and intercoolers maximize $A$ and fluid flow so conduction plus forced convection dump heat fast.",
        detail: "Fins multiply surface area; counter-flow layouts keep $\\Delta T$ large along the whole path.",
      },
    ],
    figures: [
      {
        caption: "Three heat paths: conduction through the wall ($kA\\Delta T/d$), convection plume rising, radiation $\\sigma T^{4}$ leaving the surface.",
        svg: "<svg role='img' aria-label='Three heat paths: conduction through the wall (kADelta T/d), convection plume rising, radiation sigma T^4 leaving the surface.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"150\" y=\"60\" width=\"40\" height=\"100\"/><line x1=\"60\" y1=\"110\" x2=\"150\" y2=\"110\"/><line x1=\"190\" y1=\"110\" x2=\"250\" y2=\"110\"/><path d=\"M280 160 Q270 130 285 110 Q295 95 285 75\"/><path d=\"M305 160 Q295 130 310 110 Q320 95 310 75\"/><path d=\"M90 170 L70 190 M90 170 L90 192 M90 170 L110 190\"/><text x=\"40\" y=\"50\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">hot</text><text x=\"255\" y=\"50\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">cold</text><text x=\"120\" y=\"180\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">conduction</text><text x=\"270\" y=\"180\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">convection + radiation</text></svg>",
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Heat loss through a wall",
        problem: "A $12.0 \\text{ m}^{2}$ brick wall $0.200 \\text{ m}$ thick ($k = 0.710 \\text{ W}/\\text{m}^{\\circ}\\text{C}$) separates $22.0^{\\circ}\\text{C}$ indoors from $2.00^{\\circ}\\text{C}$ outdoors. Find the conducted loss rate.",
        steps: [
          { label: "Step 1: Write Fourier's law", text: "$Q/t = kA\\Delta T/d$." },
          { label: "Step 2: Substitute", text: "$Q/t = (0.710)(12.0)(20.0)/0.200 = 852 \\text{ W}$." },
        ],
        result: "$852 \\text{ W}$ of steady heat loss — nearly a space heater running continuously.",
      },
      {
        title: "Radiation ratio",
        problem: "A furnace wall rises from $400 \\text{ K}$ to $800 \\text{ K}$. By what factor does its radiated power grow?",
        steps: [
          { label: "Step 1: Fourth-power law", text: "$P \\propto T^{4}$, so the ratio is $(800/400)^{4} = 2^{4}$." },
          { label: "Step 2: Evaluate", text: "$2^{4} = 16$." },
        ],
        result: "Sixteen times the radiated power.",
      },
    ],
    keyTakeaways: [
      "Conduction follows $kA\\Delta T/d$; convection moves heat in fluid streams; radiation scales as $T^{4}$.",
      "R-values add; doubling insulation halves conduction loss.",
      "Real cooling stacks all three: fins, airflow, and low-emissivity shields.",
    ],
    quiz: [
      {
        q: "A pot handle stays cool because it is made of a material with:",
        options: ["High conductivity", "Low conductivity", "High emissivity", "Large thermal expansion"],
        answer: 1,
        explanation: "Low-$k$ handles (wood, plastic) throttle conduction from the hot pot to the hand.",
      },
      {
        q: "Doubling wall thickness while keeping $\\Delta T$ fixed:",
        options: ["Doubles conducted power", "Halves conducted power", "Leaves it unchanged", "Quadruples it"],
        answer: 1,
        explanation: "$Q/t = kA\\Delta T/d$ is inverse in $d$, so doubling $d$ halves the rate.",
      },
      {
        q: "Which process needs no material medium?",
        options: ["Conduction", "Natural convection", "Forced convection", "Radiation"],
        answer: 3,
        explanation: "Radiation crosses vacuum (sunlight proves it); conduction and convection need matter.",
      },
    ],
  },
  {
    sectionId: "ewen-ch14-s4",
    readingTime: 6,
    intro: "Different materials need different amounts of heat for the same temperature rise — that capacity is the specific heat. This section computes heat storage with $Q = mc\\Delta T$, reads the table (water $1.00$, aluminum $0.215$, copper $0.0923 \\text{ cal}/\\text{g}^{\\circ}\\text{C}$), and sizes heating jobs.",
    objectives: [
      "Define specific heat $c$ and quote key table values",
      "Compute $Q = mc\\Delta T$ in calories, Btu, and joules",
      "Explain why water dominates heating, cooling, and climate buffering",
    ],
    concepts: [
      {
        term: "Specific heat",
        kind: "definition",
        statement: "Specific heat $c$ is the heat per unit mass per degree: $Q = mc\\Delta T$, with water $c = 1.00 \\text{ cal}/\\text{g}^{\\circ}\\text{C} = 4186 \\text{ J}/\\text{kg}^{\\circ}\\text{C}$.",
        detail: "Aluminum needs only $0.215$ and copper $0.0923 \\text{ cal}/\\text{g}^{\\circ}\\text{C}$ — metals heat and cool fast.",
      },
      {
        term: "Heat capacity versus specific heat",
        kind: "definition",
        statement: "Heat capacity $C = mc$ belongs to one object; specific heat $c$ belongs to the material.",
        detail: "A swimming pool and a cup of water share $c$ but differ enormously in $C$.",
      },
      {
        term: "Unit-consistent calculation",
        kind: "method",
        statement: "Match mass units to the table: grams with $\\text{cal}/\\text{g}^{\\circ}\\text{C}$, kilograms with $\\text{J}/\\text{kg}^{\\circ}\\text{C}$, pounds with $\\text{Btu}/\\text{lb}^{\\circ}\\text{F}$.",
        detail: "Water is $1.00$ in all three consistent sets — the memory anchor for conversions.",
      },
      {
        term: "Water as thermal buffer",
        kind: "insight",
        statement: "Water's huge $c$ makes it the standard coolant, heating medium, and climate moderator.",
        detail: "Coastal climates swing less than deserts because the ocean banks summer heat and returns it in winter.",
      },
      {
        term: "Sign convention",
        kind: "notation",
        statement: "Absorbed heat is positive ($\\Delta T > 0$); released heat is negative — the same equation tracks both.",
        detail: "Mixture problems equate one side's loss to the other's gain with signs handled by $(T_{f} - T_{i})$ ordering.",
      },
    ],
    examples: [
      {
        title: "Heating an aluminum block",
        problem: "How much heat raises $3.00 \\text{ kg}$ of aluminum ($c = 903 \\text{ J}/\\text{kg}^{\\circ}\\text{C}$) from $25.0^{\\circ}\\text{C}$ to $185^{\\circ}\\text{C}$?",
        steps: [
          { label: "Step 1: Temperature rise", text: "$\\Delta T = 185 - 25.0 = 160^{\\circ}\\text{C}$." },
          { label: "Step 2: Apply $Q = mc\\Delta T$", text: "$Q = (3.00)(903)(160) = 433{,}000 \\text{ J}$." },
        ],
        result: "$433 \\text{ kJ}$ (about $103 \\text{ kcal}$).",
      },
      {
        title: "Btu for a water heater",
        problem: "A heater warms $40.0 \\text{ gal}$ of water ($334 \\text{ lb}$) from $60.0^{\\circ}\\text{F}$ to $140^{\\circ}\\text{F}$. Find the heat in Btu.",
        steps: [
          { label: "Step 1: Water shortcut", text: "For water $c = 1.00 \\text{ Btu}/\\text{lb}^{\\circ}\\text{F}$, so $Q = m\\Delta T$." },
          { label: "Step 2: Substitute", text: "$Q = (334)(80.0) = 26{,}700 \\text{ Btu}$." },
        ],
        result: "$2.67 \\times 10^{4} \\text{ Btu}$ (about $7.8 \\text{ kWh}$).",
      },
    ],
    keyTakeaways: [
      "$Q = mc\\Delta T$ sizes every sensible-heating job; keep mass units matched to $c$.",
      "Water ($1.00$) stores far more heat per degree than aluminum ($0.215$) or copper ($0.092$).",
      "Heat capacity $mc$ is per-object; specific heat is per-material.",
    ],
    quiz: [
      {
        q: "Equal masses of water and copper absorb equal heat. The copper's temperature rise is about:",
        options: ["The same", "Eleven times larger", "Eleven times smaller", "Zero"],
        answer: 1,
        explanation: "$\\Delta T = Q/mc$; copper's $c \\approx 0.093$ versus water's $1.00$ gives roughly $11\\times$ the rise.",
      },
      {
        q: "$500 \\text{ g}$ of water cools $30^{\\circ}\\text{C}$. Heat released is:",
        options: ["$15{,}000 \\text{ cal}$", "$167 \\text{ cal}$", "$16.7 \\text{ cal}$", "$1500 \\text{ J}$"],
        answer: 0,
        explanation: "$Q = (500)(1.00)(30) = 15{,}000 \\text{ cal}$ ($62.8 \\text{ kJ}$).",
      },
      {
        q: "Desert nights cool far more than coastal nights mainly because:",
        options: ["Sand has higher conductivity", "Water's large specific heat banks daytime heat", "Deserts radiate nothing", "Air pressure differs"],
        answer: 1,
        explanation: "The ocean's huge $mc$ stores the day's heat and releases it slowly; dry sand cannot.",
      },
    ],
  },
  {
    sectionId: "ewen-ch14-s5",
    readingTime: 6,
    intro: "Drop hot steel into water and they meet at an in-between temperature fixed by energy conservation: heat lost equals heat gained. This section solves mixture (calorimetry) problems, including the calorimeter cup correction technicians must not forget.",
    objectives: [
      "Write the mixture equation $m_{1}c_{1}(T_{f}-T_{1}) + m_{2}c_{2}(T_{f}-T_{2}) = 0$",
      "Solve for final temperature or unknown specific heat",
      "Include the calorimeter vessel's own heat capacity",
    ],
    concepts: [
      {
        term: "Method of mixtures",
        kind: "method",
        statement: "In an insulated exchange, $\\sum mc(T_{f} - T_{i}) = 0$: every calorie lost by hot bodies is gained by cold ones.",
        detail: "Write one term per body, all with $(T_{f} - T_{initial})$, and solve the linear equation for $T_{f}$.",
      },
      {
        term: "Calorimeter correction",
        kind: "method",
        statement: "The cup, stirrer, and thermometer absorb heat too — add an $m_{cal}c_{cal}(T_{f} - T_{cal})$ term.",
        detail: "Ignoring a $100 \\text{ g}$ aluminum cup can bias a student result by several degrees.",
      },
      {
        term: "Unknown-specific-heat procedure",
        kind: "method",
        statement: "Heat the unknown, drop it into known water, measure $T_{f}$, and solve the mixture equation for $c_{unknown}$.",
        detail: "This is the standard shop-lab identification of mystery alloys.",
      },
      {
        term: "Equilibrium assumption",
        kind: "insight",
        statement: "The method assumes no heat escapes and the wait is long enough for one uniform $T_{f}$.",
        detail: "Lids, stirring, and quick readings protect the no-loss assumption.",
      },
      {
        term: "Two-body shortcut",
        kind: "theorem",
        statement: "For two bodies, $T_{f} = (m_{1}c_{1}T_{1} + m_{2}c_{2}T_{2})/(m_{1}c_{1} + m_{2}c_{2})$, the heat-capacity-weighted average.",
        detail: "The body with the bigger $mc$ drags $T_{f}$ toward its own starting temperature.",
      },
    ],
    examples: [
      {
        title: "Quenching steel in water",
        problem: "A $2.00 \\text{ kg}$ steel part at $600^{\\circ}\\text{C}$ ($c = 460 \\text{ J}/\\text{kg}^{\\circ}\\text{C}$) is quenched in $20.0 \\text{ kg}$ of water at $20.0^{\\circ}\\text{C}$. Find $T_{f}$ (neglect the tank).",
        steps: [
          { label: "Step 1: Mixture equation", text: "$(2.00)(460)(T_{f} - 600) + (20.0)(4186)(T_{f} - 20.0) = 0$." },
          { label: "Step 2: Collect", text: "$920T_{f} - 552{,}000 + 83{,}720T_{f} - 1{,}674{,}400 = 0$, so $84{,}640T_{f} = 2{,}226{,}400$." },
          { label: "Step 3: Solve", text: "$T_{f} = 26.3^{\\circ}\\text{C}$." },
        ],
        result: "$26.3^{\\circ}\\text{C}$ — the water's huge capacity nearly pins the result.",
      },
      {
        title: "Finding an unknown alloy",
        problem: "A $0.300 \\text{ kg}$ alloy at $95.0^{\\circ}\\text{C}$ is dropped into $0.500 \\text{ kg}$ of water at $18.0^{\\circ}\\text{C}$; equilibrium is $22.4^{\\circ}\\text{C}$. Find $c$ of the alloy.",
        steps: [
          { label: "Step 1: Water gain", text: "$Q_{w} = (0.500)(4186)(22.4 - 18.0) = 9210 \\text{ J}$." },
          { label: "Step 2: Equate to alloy loss", text: "$(0.300)c(95.0 - 22.4) = 9210$, so $(21.78)c = 9210$." },
          { label: "Step 3: Solve", text: "$c = 423 \\text{ J}/\\text{kg}^{\\circ}\\text{C}$." },
        ],
        result: "$423 \\text{ J}/\\text{kg}^{\\circ}\\text{C}$ — near brass/copper alloys.",
      },
    ],
    keyTakeaways: [
      "Mixtures conserve energy: the signed sum $\\sum mc(T_{f}-T_{i})$ is zero.",
      "Always add the calorimeter cup term for accurate lab results.",
      "The same equation finds $T_{f}$ or an unknown $c$.",
    ],
    quiz: [
      {
        q: "Hot coffee ($mc$ small) mixes with cold milk ($mc$ large). The final temperature lands:",
        options: ["Halfway between", "Near the coffee's temperature", "Near the milk's temperature", "Above both"],
        answer: 2,
        explanation: "$T_{f}$ is the $mc$-weighted average, dragged toward the larger-capacity body.",
      },
      {
        q: "A mixture calculation ignores a $200 \\text{ g}$ aluminum calorimeter cup initially cold. The computed $c_{unknown}$ will be:",
        options: ["Too large", "Too small", "Unaffected", "Negative"],
        answer: 1,
        explanation: "Part of the hot body's heat warmed the cup, not the water; crediting it all to the water understates the heat the sample gave, shrinking $c$.",
      },
      {
        q: "$1.0 \\text{ kg}$ of water at $80^{\\circ}\\text{C}$ mixes with $1.0 \\text{ kg}$ at $20^{\\circ}\\text{C}$ (insulated). $T_{f}$ is:",
        options: ["$30^{\\circ}\\text{C}$", "$50^{\\circ}\\text{C}$", "$60^{\\circ}\\text{C}$", "$100^{\\circ}\\text{C}$"],
        answer: 1,
        explanation: "Equal capacities give the midpoint: $(80+20)/2 = 50^{\\circ}\\text{C}$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch14-s6",
    readingTime: 6,
    intro: "Bridges need expansion joints and power lines sag in summer because solids grow when heated. This section quantifies linear expansion $\\Delta L = \\alpha L_{0}\\Delta T$, reads the $\\alpha$ table, and solves shrink-fit and joint-gap problems.",
    objectives: [
      "Apply $\\Delta L = \\alpha L_{0}\\Delta T$ with table coefficients",
      "Explain expansion joints, sagging lines, and bimetallic strips",
      "Solve shrink-fit and hole-expansion problems",
    ],
    concepts: [
      {
        term: "Linear expansion law",
        kind: "law",
        statement: "A rod of length $L_{0}$ changes by $\\Delta L = \\alpha L_{0} \\Delta T$, with $\\alpha$ the linear coefficient.",
        detail: "Typical $\\alpha$: aluminum $24 \\times 10^{-6}$, copper $17 \\times 10^{-6}$, steel $12 \\times 10^{-6}$, glass $9 \\times 10^{-6}$ per $^{\\circ}\\text{C}$.",
      },
      {
        term: "Holes expand too",
        kind: "insight",
        statement: "A hole in a plate grows as if it were filled with the plate material — thermal expansion is photographic enlargement.",
        detail: "That is why heating a seized nut loosens it: the hole outgrows the bolt (if heated together, the larger $\\alpha$ wins).",
      },
      {
        term: "Bimetallic strip",
        kind: "insight",
        statement: "Bonded strips of different $\\alpha$ bend toward the low-$\\alpha$ side when heated.",
        detail: "Thermostats, breakers, and thermal relays convert that bend into switching motion.",
      },
      {
        term: "Expansion joints and sag",
        kind: "insight",
        statement: "Long steel structures must leave gaps $\\approx \\alpha L \\Delta T$; power lines are strung with summer slack.",
        detail: "A $100 \\text{ m}$ steel bridge over a $60^{\\circ}\\text{C}$ swing grows $7.2 \\text{ cm}$ — joint space is structural, not cosmetic.",
      },
      {
        term: "Shrink fits",
        kind: "method",
        statement: "Heat the outer part (or chill the inner) to gain clearance $\\delta = \\alpha D \\Delta T$, assemble, and let seizure lock the joint.",
        detail: "Bearing races, gear hubs, and bandsaw tires are mounted exactly this way.",
      },
    ],
    figures: [
      {
        caption: "Bimetallic strip: bonded metals with $\\alpha_{1} > \\alpha_{2}$ bend toward the low-expansion side when heated.",
        svg: "<svg role='img' aria-label='Bimetallic strip: bonded metals with alpha_1 > alpha_2 bend toward the low-expansion side when heated.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"40\" y=\"60\" width=\"150\" height=\"14\"/><rect x=\"40\" y=\"74\" width=\"150\" height=\"14\"/><path d=\"M230 90 Q300 90 340 130\" stroke-width=\"14\"/><path d=\"M230 104 Q300 104 340 144\" stroke-width=\"14\" opacity=\"0.35\"/><text x=\"40\" y=\"40\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">cold: straight</text><text x=\"230\" y=\"40\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">hot: bends down</text><text x=\"40\" y=\"120\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">alpha1 &gt; alpha2</text></svg>",
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Bridge expansion gap",
        problem: "A steel bridge span is $80.0 \\text{ m}$ long at $10.0^{\\circ}\\text{C}$ ($\\alpha = 12 \\times 10^{-6}/^{\\circ}\\text{C}$). How much does it grow at $40.0^{\\circ}\\text{C}$?",
        steps: [
          { label: "Step 1: Rise", text: "$\\Delta T = 30.0^{\\circ}\\text{C}$." },
          { label: "Step 2: Expand", text: "$\\Delta L = (12 \\times 10^{-6})(80.0)(30.0) = 0.0288 \\text{ m}$." },
        ],
        result: "$2.88 \\text{ cm}$ of growth — the joint gap must exceed this.",
      },
      {
        title: "Shrink-fit a bearing race",
        problem: "A steel ring of bore $5.000 \\text{ cm}$ must clear a $5.008 \\text{ cm}$ shaft. What $\\Delta T$ suffices?",
        steps: [
          { label: "Step 1: Needed strain", text: "$\\Delta L/L_{0} = 0.008/5.000 = 1.60 \\times 10^{-3}$." },
          { label: "Step 2: Temperature", text: "$\\Delta T = (1.60 \\times 10^{-3})/(12 \\times 10^{-6}) = 133^{\\circ}\\text{C}$." },
        ],
        result: "Heat the ring about $133^{\\circ}\\text{C}$ above the shaft (plus handling margin).",
      },
    ],
    keyTakeaways: [
      "$\\Delta L = \\alpha L_{0}\\Delta T$; aluminum grows twice as fast per degree as steel.",
      "Holes expand with the plate; bimetallic strips bend toward the low-$\\alpha$ side.",
      "Joints, sags, and shrink fits are sized directly from $\\alpha L \\Delta T$.",
    ],
    quiz: [
      {
        q: "A $1.000 \\text{ m}$ aluminum rod ($\\alpha = 24 \\times 10^{-6}$) warms $50^{\\circ}\\text{C}$. Its growth is:",
        options: ["$0.12 \\text{ mm}$", "$1.20 \\text{ mm}$", "$12.0 \\text{ mm}$", "$24.0 \\text{ mm}$"],
        answer: 1,
        explanation: "$(24 \\times 10^{-6})(1.000)(50) = 1.20 \\times 10^{-3} \\text{ m} = 1.20 \\text{ mm}$.",
      },
      {
        q: "A steel washer is heated uniformly. Its center hole:",
        options: ["Shrinks", "Keeps the same diameter", "Grows as if filled with steel", "Grows only if the washer is thin"],
        answer: 2,
        explanation: "Thermal expansion scales every linear dimension, holes included.",
      },
      {
        q: "A copper–steel bimetallic strip is heated. It bends toward:",
        options: ["The copper side", "The steel side", "Neither — it stays straight", "Whichever side is thicker"],
        answer: 1,
        explanation: "Copper ($\\alpha = 17 \\times 10^{-6}$) outgrows steel ($12 \\times 10^{-6}$), so the strip cups toward the steel face.",
      },
    ],
  },
  {
    sectionId: "ewen-ch14-s7",
    readingTime: 5,
    intro: "Liquids expand more than their containers, so thermometers, fuel tanks, and hot-water systems must leave room. This section applies volume expansion $\\Delta V = \\beta V_{0}\\Delta T$, corrects for the container, and explains water's anomalous dip near freezing.",
    objectives: [
      "Apply $\\Delta V = \\beta V_{0}\\Delta T$ to fuels, tanks, and thermometer bulbs",
      "Correct apparent expansion for the container's own growth",
      "Describe water's density maximum at $4^{\\circ}\\text{C}$ and its consequences",
    ],
    concepts: [
      {
        term: "Volume expansion law",
        kind: "law",
        statement: "A liquid of volume $V_{0}$ changes by $\\Delta V = \\beta V_{0} \\Delta T$, with $\\beta$ roughly $10^{-4}$–$10^{-3}$ per $^{\\circ}\\text{C}$.",
        detail: "Gasoline $\\beta \\approx 950 \\times 10^{-6}$, mercury $182 \\times 10^{-6}$: fuels need ullage space in every tank.",
      },
      {
        term: "Apparent versus true expansion",
        kind: "method",
        statement: "The observed rise is the liquid's expansion minus the container's: $\\beta_{apparent} = \\beta_{liquid} - 3\\alpha_{solid}$.",
        detail: "Glass bulbs grow slightly too, so thermometer calibration absorbs the glass correction.",
      },
      {
        term: "Solid-volume shortcut",
        kind: "theorem",
        statement: "For isotropic solids, $\\beta \\approx 3\\alpha$: a steel block's volume coefficient is about $36 \\times 10^{-6}/^{\\circ}\\text{C}$.",
        detail: "Use this when only the linear table is printed.",
      },
      {
        term: "Water anomaly",
        kind: "insight",
        statement: "Water contracts warming from $0$ to $4^{\\circ}\\text{C}$, then expands; it is densest at $4^{\\circ}\\text{C}$.",
        detail: "Ice floats and lakes freeze top-down, protecting aquatic life — a rare and vital exception.",
      },
      {
        term: "Overflow sizing",
        kind: "method",
        statement: "Size expansion tanks and fuel ullage from $\\Delta V = \\beta V \\Delta T$ plus a safety margin.",
        detail: "A $50 \\text{ gal}$ gasoline tank warming $30^{\\circ}\\text{C}$ expels over a gallon if filled brim-full.",
      },
    ],
    examples: [
      {
        title: "Gasoline overflow",
        problem: "A $60.0 \\text{ L}$ steel tank is filled brim-full with gasoline at $10.0^{\\circ}\\text{C}$ ($\\beta = 950 \\times 10^{-6}/^{\\circ}\\text{C}$). How much spills if it warms to $35.0^{\\circ}\\text{C}$? (Neglect the tank.)",
        steps: [
          { label: "Step 1: Rise", text: "$\\Delta T = 25.0^{\\circ}\\text{C}$." },
          { label: "Step 2: Expand", text: "$\\Delta V = (950 \\times 10^{-6})(60.0)(25.0) = 1.43 \\text{ L}$." },
        ],
        result: "About $1.4 \\text{ L}$ overflows — never fill tight in winter.",
      },
      {
        title: "Mercury thermometer rise",
        problem: "A thermometer bulb holds $0.500 \\text{ cm}^{3}$ of mercury warming $30.0^{\\circ}\\text{C}$. Find $\\Delta V$ (use $\\beta = 182 \\times 10^{-6}$).",
        steps: [
          { label: "Step 1: Substitute", text: "$\\Delta V = (182 \\times 10^{-6})(0.500)(30.0) = 2.73 \\times 10^{-3} \\text{ cm}^{3}$." },
          { label: "Step 2: Read", text: "That $2.73 \\text{ mm}^{3}$ climbs the fine capillary into a long, readable column." },
        ],
        result: "$2.73 \\times 10^{-3} \\text{ cm}^{3}$ of extra mercury drives the column.",
      },
    ],
    keyTakeaways: [
      "Liquids follow $\\Delta V = \\beta V_{0}\\Delta T$ with $\\beta$ far larger than solids' $3\\alpha$.",
      "Subtract container growth for true liquid expansion.",
      "Water's $4^{\\circ}\\text{C}$ density peak explains floating ice and winter lake layering.",
    ],
    quiz: [
      {
        q: "A brim-full fuel tank warms up. The correct practice is to:",
        options: ["Fill brim-full regardless", "Leave ullage space for $\\beta V\\Delta T$", "Vent the tank to vacuum", "Chill the fuel first"],
        answer: 1,
        explanation: "Expansion must go somewhere; ullage sized by $\\Delta V = \\beta V\\Delta T$ prevents spills and pressure.",
      },
      {
        q: "For an isotropic solid with $\\alpha = 12 \\times 10^{-6}$, the volume coefficient is about:",
        options: ["$4 \\times 10^{-6}$", "$12 \\times 10^{-6}$", "$36 \\times 10^{-6}$", "$144 \\times 10^{-6}$"],
        answer: 2,
        explanation: "$\\beta \\approx 3\\alpha = 36 \\times 10^{-6}$ per $^{\\circ}\\text{C}$.",
      },
      {
        q: "Water is densest at:",
        options: ["$0^{\\circ}\\text{C}$", "$4^{\\circ}\\text{C}$", "$100^{\\circ}\\text{C}$", "$-4^{\\circ}\\text{C}$"],
        answer: 1,
        explanation: "The anomaly: contraction to $4^{\\circ}\\text{C}$, then expansion — maximum density at $4^{\\circ}\\text{C}$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch14-s8",
    readingTime: 6,
    intro: "Melting ice and boiling water absorb large heat with no temperature change — latent heat. This section computes phase-change heat $Q = mL$ (ice $80 \\text{ cal}/\\text{g}$, steam $540 \\text{ cal}/\\text{g}$), walks heating curves, and solves ice-to-steam problems end to end.",
    objectives: [
      "Define latent heats of fusion and vaporization and quote water's values",
      "Read heating/cooling curves with sensible plus latent segments",
      "Solve multi-step ice–water–steam calorimetry problems",
    ],
    concepts: [
      {
        term: "Latent heat",
        kind: "definition",
        statement: "Latent heat $L$ is heat per mass for a phase change at constant temperature: $Q = mL$.",
        detail: "Water: $L_{f} = 80.0 \\text{ cal}/\\text{g}$ ($334 \\text{ kJ}/\\text{kg}$), $L_{v} = 540 \\text{ cal}/\\text{g}$ ($2260 \\text{ kJ}/\\text{kg}$).",
      },
      {
        term: "Sensible versus latent segments",
        kind: "method",
        statement: "On a heating curve, sloped segments are sensible ($mc\\Delta T$) and flat plateaus are latent ($mL$).",
        detail: "Total heat is the sum over every segment from start to finish state.",
      },
      {
        term: "Why vaporization costs most",
        kind: "insight",
        statement: "Vaporization breaks nearly all intermolecular bonds, so $L_{v}$ is about seven times $L_{f}$ for water.",
        detail: "Steam burns are severe because condensing steam dumps $540 \\text{ cal}/\\text{g}$ plus the hot-water cooling that follows.",
      },
      {
        term: "Refrigeration by evaporation",
        kind: "insight",
        statement: "Evaporating refrigerants and sweat absorb $mL_{v}$ from their surroundings, the basis of cooling cycles and body cooling.",
        detail: "A refrigerator boils its working fluid at low pressure indoors and condenses it outdoors.",
      },
      {
        term: "Phase-change calorimetry plan",
        kind: "method",
        statement: "List segments (warm ice, melt, warm water, boil, heat steam), compute each, and add — checking that available heat covers each plateau in order.",
        detail: "If heat runs out mid-plateau, the mixture sits at the transition temperature partly changed.",
      },
    ],
    figures: [
      {
        caption: "Heating curve for water: sloped $mc\\Delta T$ segments joined by flat $mL_{f}$ and $mL_{v}$ plateaus.",
        svg: "<svg role='img' aria-label='Heating curve for water: sloped mcDelta T segments joined by flat mL_f and mL_v plateaus.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"30\" y1=\"170\" x2=\"350\" y2=\"170\"/><line x1=\"30\" y1=\"30\" x2=\"30\" y2=\"170\"/><path d=\"M40 160 L110 110 L190 110 L250 60 L320 60\"/><text x=\"115\" y=\"100\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">melt Lf</text><text x=\"255\" y=\"50\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">boil Lv</text><text x=\"55\" y=\"185\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">ice water steam</text><text x=\"5\" y=\"100\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">T</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Melting ice in a drink",
        problem: "How much heat melts $150 \\text{ g}$ of ice at $0^{\\circ}\\text{C}$ and warms the water to $25.0^{\\circ}\\text{C}$?",
        steps: [
          { label: "Step 1: Melt", text: "$Q_{1} = mL_{f} = (150)(80.0) = 12{,}000 \\text{ cal}$." },
          { label: "Step 2: Warm", text: "$Q_{2} = mc\\Delta T = (150)(1.00)(25.0) = 3750 \\text{ cal}$." },
          { label: "Step 3: Total", text: "$Q = 15{,}750 \\text{ cal} = 15.8 \\text{ kcal}$ ($65.9 \\text{ kJ}$)." },
        ],
        result: "$15.8 \\text{ kcal}$ absorbed from the drink.",
      },
      {
        title: "Making steam from ice",
        problem: "Find the heat to convert $50.0 \\text{ g}$ of ice at $-10.0^{\\circ}\\text{C}$ to steam at $100^{\\circ}\\text{C}$ ($c_{ice} = 0.500 \\text{ cal}/\\text{g}^{\\circ}\\text{C}$).",
        steps: [
          { label: "Step 1: Warm ice", text: "$(50.0)(0.500)(10.0) = 250 \\text{ cal}$." },
          { label: "Step 2: Melt", text: "$(50.0)(80.0) = 4000 \\text{ cal}$." },
          { label: "Step 3: Warm water", text: "$(50.0)(1.00)(100) = 5000 \\text{ cal}$." },
          { label: "Step 4: Vaporize", text: "$(50.0)(540) = 27{,}000 \\text{ cal}$; total $36{,}250 \\text{ cal}$." },
        ],
        result: "$36.3 \\text{ kcal}$ ($152 \\text{ kJ}$) — vaporization dominates.",
      },
    ],
    keyTakeaways: [
      "Phase changes absorb $Q = mL$ at fixed temperature: $80 \\text{ cal}/\\text{g}$ to melt, $540 \\text{ cal}/\\text{g}$ to boil water.",
      "Heating curves add sensible slopes and latent flats in order.",
      "Evaporation cooling and steam heating both exploit the huge $L_{v}$.",
    ],
    quiz: [
      {
        q: "Boiling away $10.0 \\text{ g}$ of water at $100^{\\circ}\\text{C}$ requires:",
        options: ["$80 \\text{ cal}$", "$800 \\text{ cal}$", "$5400 \\text{ cal}$", "$10{,}000 \\text{ cal}$"],
        answer: 2,
        explanation: "$Q = mL_{v} = 10 \\times 540 = 5400 \\text{ cal}$.",
      },
      {
        q: "On a heating curve the flat regions represent:",
        options: ["Sensible heating $mc\\Delta T$", "Phase change at constant $T$ ($mL$)", "Superheating", "Heat loss to the room"],
        answer: 1,
        explanation: "Temperature stalls while bonds break or form; all heat goes into the phase change.",
      },
      {
        q: "Why is a steam burn worse than a hot-water burn at the same temperature?",
        options: ["Steam is denser", "Condensing steam releases $L_{v}$ plus subsequent cooling heat", "Water cannot exceed $100^{\\circ}\\text{C}$", "Steam is radioactive"],
        answer: 1,
        explanation: "Condensation dumps $540 \\text{ cal}/\\text{g}$ before the resulting water even begins cooling on the skin.",
      },
    ],
  },
]
