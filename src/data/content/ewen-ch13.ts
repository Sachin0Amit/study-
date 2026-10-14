import type { SectionContent } from "../library"

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition, Chapter 13
// Fluids (Sections 13.1 – 13.5)
// ============================================================================

export const ewenCh13Content: SectionContent[] = [
  {
    sectionId: "ewen-ch13-s1",
    readingTime: 6,
    intro: "Every fluid system a technician services — from a water tower to a lubrication line — is governed by one fact: pressure in a fluid at rest depends only on depth and density. This section builds the hydrostatic pressure formula $P = \\rho g h$ and shows how to compute forces on tanks, dams, and gauge faces in both metric and U.S. units.",
    objectives: [
      "State the hydrostatic pressure law and explain why pressure is the same in all directions at a given depth",
      "Compute pressure and total force from $P = \\rho g h$ and $F = PA$ with consistent units",
      "Convert fluently among pascals, kilopascals, $\\text{lb}/\\text{in}^{2}$, and feet of water head",
    ],
    concepts: [
      {
        term: "Pressure",
        kind: "definition",
        statement: "Pressure is force per unit area, $P = F/A$, measured in pascals ($1 \\text{ Pa} = 1 \\text{ N}/\\text{m}^{2}$) or in $\\text{lb}/\\text{in}^{2}$ (psi).",
        detail: "A fluid pushes perpendicular to every surface it touches, so the same pressure acts on the bottom, walls, and any submerged object at one depth.",
      },
      {
        term: "Hydrostatic pressure law",
        kind: "law",
        statement: "In a continuous fluid at rest the pressure at depth $h$ is $P = \\rho g h = w h$, where $\\rho$ is the mass density and $w$ the weight density.",
        detail: "Only the vertical depth counts: a wide lake and a narrow pipe filled to the same height give the same bottom pressure.",
      },
      {
        term: "Weight density of water",
        kind: "notation",
        statement: "Water has weight density $w = 9810 \\text{ N}/\\text{m}^{3}$ ($62.4 \\text{ lb}/\\text{ft}^{3}$), so each foot of water depth adds about $0.433 \\text{ psi}$.",
        detail: "Ewen works many problems with water head in feet: $P(\\text{psi}) \\approx 0.433 \\times h(\\text{ft})$.",
      },
      {
        term: "Gauge versus absolute pressure",
        kind: "definition",
        statement: "Gauge pressure is measured above the surrounding atmosphere; absolute pressure adds the atmospheric $101 \\text{ kPa}$ ($14.7 \\text{ psi}$), so $P_{abs} = P_{gauge} + P_{atm}$.",
        detail: "Tire gauges and shop gauges read gauge pressure; gas-law calculations always need absolute pressure.",
      },
      {
        term: "Force on a submerged surface",
        kind: "method",
        statement: "The total force on a flat surface is $F = P_{avg} A$, using the pressure at the centroid depth for a vertical surface.",
        detail: "Because pressure grows with depth, a dam feels a triangular load distribution; the average pressure acts at half the total depth.",
      },
      {
        term: "Pascal and the head concept",
        kind: "insight",
        statement: "Pressure can be quoted as a height of fluid column (head): $14.7 \\text{ psi}$ equals $34 \\text{ ft}$ of water or $30 \\text{ in}$ of mercury.",
        detail: "Head language lets pump and piping problems be solved in feet of water instead of pressure units.",
      },
    ],
    examples: [
      {
        title: "Pressure at the bottom of a water tank",
        problem: "A storage tank holds water $4.50 \\text{ m}$ deep. Find the gauge pressure at the bottom in kilopascals.",
        steps: [
          { label: "Step 1: Write the law", text: "Hydrostatic pressure is $P = \\rho g h$ with $\\rho = 1000 \\text{ kg}/\\text{m}^{3}$ and $g = 9.80 \\text{ m}/\\text{s}^{2}$." },
          { label: "Step 2: Substitute", text: "$P = (1000)(9.80)(4.50) = 44{,}100 \\text{ Pa}$." },
          { label: "Step 3: Convert", text: "$44{,}100 \\text{ Pa} = 44.1 \\text{ kPa}$ gauge." },
        ],
        result: "$44.1 \\text{ kPa}$ gauge (about $6.40 \\text{ psi}$).",
      },
      {
        title: "Force on a dam gate",
        problem: "A vertical rectangular floodgate is $3.00 \\text{ ft}$ wide and extends from the surface to $6.00 \\text{ ft}$ deep in water. Find the total force on the gate.",
        steps: [
          { label: "Step 1: Average pressure", text: "Pressure at the centroid ($3.00 \\text{ ft}$ deep) is $P_{avg} = w h = (62.4)(3.00) = 187.2 \\text{ lb}/\\text{ft}^{2}$." },
          { label: "Step 2: Area", text: "$A = (3.00)(6.00) = 18.0 \\text{ ft}^{2}$." },
          { label: "Step 3: Force", text: "$F = P_{avg}A = (187.2)(18.0) = 3370 \\text{ lb}$." },
        ],
        result: "About $3.37 \\times 10^{3} \\text{ lb}$ acting $4.00 \\text{ ft}$ below the surface.",
      },
    ],
    keyTakeaways: [
      "Hydrostatic pressure $P = \\rho g h$ depends only on fluid density and vertical depth, never on container shape.",
      "Total force on an area is $F = PA$; on vertical surfaces use the centroid pressure.",
      "Distinguish gauge from absolute pressure, and convert freely between pascals, psi, and feet of head.",
    ],
    quiz: [
      {
        q: "Two tanks hold water to the same depth, but one has ten times the base area. The pressure at the bottom of the larger tank is:",
        options: ["Ten times greater", "The same in both tanks", "Ten times smaller", "Dependent on the total weight"],
        answer: 1,
        explanation: "Hydrostatic pressure depends only on depth and density ($P = \\rho g h$), so equal depths give equal pressures regardless of area or shape.",
      },
      {
        q: "A diver descends $10.0 \\text{ m}$ in seawater ($\\rho = 1025 \\text{ kg}/\\text{m}^{3}$). The added gauge pressure is about:",
        options: ["$9.81 \\text{ kPa}$", "$101 \\text{ kPa}$", "$201 \\text{ kPa}$", "$10.1 \\text{ kPa}$"],
        answer: 1,
        explanation: "$P = \\rho g h = (1025)(9.80)(10.0) \\approx 1.00 \\times 10^{5} \\text{ Pa} \\approx 101 \\text{ kPa}$, roughly one extra atmosphere.",
      },
      {
        q: "A pressure gauge on a boiler reads $40.0 \\text{ psi}$. The absolute pressure is approximately:",
        options: ["$25.3 \\text{ psi}$", "$40.0 \\text{ psi}$", "$54.7 \\text{ psi}$", "$74.7 \\text{ psi}$"],
        answer: 2,
        explanation: "Add atmospheric pressure: $40.0 + 14.7 = 54.7 \\text{ psi}$ absolute.",
      },
    ],
  },
  {
    sectionId: "ewen-ch13-s2",
    readingTime: 6,
    intro: "A small force on a small piston can lift a car on a large piston — that is the hydraulic principle behind every jack, lift, and brake system. This section derives the force-multiplication rule from Pascal's principle and tracks the trade-off: force is multiplied, but distance is divided.",
    objectives: [
      "State Pascal's principle for a confined fluid",
      "Compute output force, pressure, and piston travel with $F_{2} = F_{1}(A_{2}/A_{1})$",
      "Explain why hydraulic machines conserve energy despite multiplying force",
    ],
    concepts: [
      {
        term: "Pascal's principle",
        kind: "law",
        statement: "Pressure applied to a confined fluid is transmitted undiminished to every part of the fluid and the walls: $P_{1} = P_{2}$ throughout.",
        detail: "Pushing one piston pressurizes the whole system instantly (at technician speeds), so all pistons feel the same pressure.",
      },
      {
        term: "Hydraulic force multiplication",
        kind: "theorem",
        statement: "With equal pressures, $F_{1}/A_{1} = F_{2}/A_{2}$, so $F_{2} = F_{1}(A_{2}/A_{1})$: output force scales with piston-area ratio.",
        detail: "A 100-to-1 area ratio turns a $50 \\text{ lb}$ handle effort into a $5000 \\text{ lb}$ lift.",
      },
      {
        term: "Distance trade-off",
        kind: "insight",
        statement: "Because the displaced fluid volume is the same, $A_{1}d_{1} = A_{2}d_{2}$: the large piston moves a much shorter distance.",
        detail: "Force times distance is conserved, so no free energy — many small strokes of the pump piston produce one short, powerful lift stroke.",
      },
      {
        term: "Hydraulic pressure sizing",
        kind: "method",
        statement: "Size any jack or press by first finding system pressure $P = F_{load}/A_{load}$, then the input force $F_{in} = P A_{in}$.",
        detail: "Working backward from the load guarantees the pressure rating covers the job with margin.",
      },
      {
        term: "Applications: jacks, lifts, brakes",
        kind: "insight",
        statement: "Service-station lifts, floor jacks, log splitters, and automotive brakes are all Pascal-principle machines differing only in piston layout.",
        detail: "Brakes add a master cylinder feeding several wheel cylinders; the pedal force is distributed as equal pressure to each.",
      },
    ],
    figures: [
      {
        caption: "Hydraulic lift: equal pressure $P$ under unequal pistons gives $F_{2} = F_{1}(A_{2}/A_{1})$; the small piston travels farther.",
        svg: "<svg role='img' aria-label='Hydraulic lift: equal pressure P under unequal pistons gives F_2 = F_1(A_2/A_1); the small piston travels farther.' viewBox=\"0 0 400 220\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"40\" y=\"120\" width=\"60\" height=\"60\"/><rect x=\"260\" y=\"90\" width=\"110\" height=\"90\"/><rect x=\"20\" y=\"180\" width=\"360\" height=\"10\"/><line x1=\"70\" y1=\"120\" x2=\"70\" y2=\"80\"/><line x1=\"315\" y1=\"90\" x2=\"315\" y2=\"50\"/><rect x=\"50\" y=\"65\" width=\"40\" height=\"15\"/><rect x=\"285\" y=\"35\" width=\"60\" height=\"15\"/><line x1=\"100\" y1=\"150\" x2=\"260\" y2=\"150\"/><text x=\"52\" y=\"112\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">A1</text><text x=\"300\" y=\"82\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">A2</text><text x=\"30\" y=\"60\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">F1 down</text><text x=\"270\" y=\"25\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">F2 up</text><text x=\"150\" y=\"145\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">fluid P</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Lifting a car with a shop jack",
        problem: "A hydraulic lift has a pump piston of area $2.00 \\text{ in}^{2}$ and a lift piston of area $200 \\text{ in}^{2}$. What input force lifts a $6000 \\text{ lb}$ car, and how far must the small piston move to raise the car $6.00 \\text{ in}$?",
        steps: [
          { label: "Step 1: Force ratio", text: "$F_{1} = F_{2}(A_{1}/A_{2}) = 6000(2.00/200) = 60.0 \\text{ lb}$." },
          { label: "Step 2: Volume equality", text: "$d_{1} = d_{2}(A_{2}/A_{1}) = 6.00(200/2.00) = 600 \\text{ in} = 50.0 \\text{ ft}$ of total pump travel." },
          { label: "Step 3: Interpret", text: "One person easily supplies $60 \\text{ lb}$ repeatedly; the $50 \\text{ ft}$ is accumulated over many pump strokes." },
        ],
        result: "$60.0 \\text{ lb}$ input; $50.0 \\text{ ft}$ of cumulative pump-piston travel.",
      },
      {
        title: "Hydraulic brake pressure",
        problem: "A master cylinder of diameter $1.00 \\text{ in}$ feeds a wheel cylinder of diameter $2.00 \\text{ in}$. If the driver applies $80.0 \\text{ lb}$ to the master piston, find the clamping force at that wheel.",
        steps: [
          { label: "Step 1: Areas scale with diameter squared", text: "$A_{2}/A_{1} = (2.00/1.00)^{2} = 4.00$." },
          { label: "Step 2: Multiply force", text: "$F_{2} = 80.0 \\times 4.00 = 320 \\text{ lb}$." },
        ],
        result: "$320 \\text{ lb}$ at the wheel cylinder (before lever and booster gains).",
      },
    ],
    keyTakeaways: [
      "Pascal's principle: confined-fluid pressure acts equally everywhere, $P_{1} = P_{2}$.",
      "Force multiplies by the area ratio while piston travel divides by it, conserving work.",
      "Brakes, jacks, and lifts are one idea with different piston arrangements.",
    ],
    quiz: [
      {
        q: "The output piston has 25 times the area of the input piston. An input force of $40 \\text{ lb}$ produces an output force of:",
        options: ["$1.6 \\text{ lb}$", "$40 \\text{ lb}$", "$1000 \\text{ lb}$", "$25 \\text{ lb}$"],
        answer: 2,
        explanation: "$F_{2} = F_{1}(A_{2}/A_{1}) = 40 \\times 25 = 1000 \\text{ lb}$.",
      },
      {
        q: "In the same machine, raising the load $2.0 \\text{ in}$ requires a total input-piston travel of:",
        options: ["$2.0 \\text{ in}$", "$0.08 \\text{ in}$", "$50 \\text{ in}$", "$27 \\text{ in}$"],
        answer: 2,
        explanation: "$d_{1} = d_{2}(A_{2}/A_{1}) = 2.0 \\times 25 = 50 \\text{ in}$, accumulated over many strokes.",
      },
      {
        q: "Why does a hydraulic lift not create free energy?",
        options: ["Friction eats the extra energy", "Force gain is paid for by reduced distance, so $F_{1}d_{1} = F_{2}d_{2}$", "Fluid compressibility absorbs it", "The atmosphere supplies the difference"],
        answer: 1,
        explanation: "Displaced volumes match, so work in equals work out (ideally); force is traded for distance.",
      },
    ],
  },
  {
    sectionId: "ewen-ch13-s3",
    readingTime: 5,
    intro: "We live at the bottom of an ocean of air, and its weight presses on every surface with about $14.7 \\text{ lb}$ on each square inch. This section measures that air pressure with barometers and manometers and shows how suction pumps, siphons, and vacuum devices are really pushed by the atmosphere.",
    objectives: [
      "Explain atmospheric pressure as the weight of the air column and quote its standard values",
      "Read barometers and U-tube manometers to find absolute and gauge pressures",
      "Apply the $34 \\text{-ft}$ water / $30 \\text{-in}$ mercury limits to pumps and siphons",
    ],
    concepts: [
      {
        term: "Standard atmosphere",
        kind: "notation",
        statement: "One standard atmosphere is $1 \\text{ atm} = 101 \\text{ kPa} = 14.7 \\text{ psi} = 760 \\text{ mmHg} = 30.0 \\text{ in Hg}$.",
        detail: "Memorize this chain; Ewen switches units freely between weather, shop, and lab problems.",
      },
      {
        term: "Mercury barometer",
        kind: "method",
        statement: "A barometer balances the air column against a mercury column: $P_{atm} = \\rho_{Hg} g h$, with $760 \\text{ mm}$ at standard pressure.",
        detail: "Mercury is $13.6$ times denser than water, so the air ocean supports only $0.76 \\text{ m}$ of mercury but $10.3 \\text{ m}$ ($34 \\text{ ft}$) of water.",
      },
      {
        term: "U-tube manometer",
        kind: "method",
        statement: "The difference in liquid levels gives the gauge pressure directly: $P_{gauge} = \\rho g \\Delta h$.",
        detail: "Open-tube manometers read the pressure of tanks and gas lines; the high side marks the lower pressure.",
      },
      {
        term: "Suction limit",
        kind: "law",
        statement: "No suction pump can lift water more than about $34 \\text{ ft}$ ($10.3 \\text{ m}$), because only atmospheric pressure is doing the pushing.",
        detail: "Above that height even a perfect vacuum at the top cannot support the column; deep wells need submerged (force) pumps.",
      },
      {
        term: "Siphons and drinking straws",
        kind: "insight",
        statement: "Siphons, straws, and vacuum cups work because the atmosphere pushes fluid toward the evacuated region.",
        detail: "There is no pulling force in suction — removing air lets the outside atmosphere do the pushing.",
      },
    ],
    examples: [
      {
        title: "Reading a mercury barometer",
        problem: "A mercury barometer reads $745 \\text{ mmHg}$. Express the air pressure in kilopascals and psi.",
        steps: [
          { label: "Step 1: Scale from standard", text: "$P = (745/760)(101 \\text{ kPa}) = 99.0 \\text{ kPa}$." },
          { label: "Step 2: Convert", text: "$P = (745/760)(14.7 \\text{ psi}) = 14.4 \\text{ psi}$." },
        ],
        result: "$99.0 \\text{ kPa}$ ($14.4 \\text{ psi}$) — a typical low-pressure weather system.",
      },
      {
        title: "U-tube manometer on a gas tank",
        problem: "An open water manometer on a gas line shows the gas side $18.0 \\text{ in}$ lower than the open side. Find the gauge pressure in psi.",
        steps: [
          { label: "Step 1: Water head", text: "$\\Delta h = 18.0 \\text{ in} = 1.50 \\text{ ft}$ of water." },
          { label: "Step 2: Convert head to psi", text: "$P = 0.433 \\times 1.50 = 0.650 \\text{ psi}$." },
        ],
        result: "About $0.65 \\text{ psi}$ above atmospheric ($4.48 \\text{ kPa}$).",
      },
    ],
    keyTakeaways: [
      "The atmosphere exerts $101 \\text{ kPa}$ ($14.7 \\text{ psi}$); barometers read it as a mercury-column height.",
      "Manometer level differences give gauge pressure via $P = \\rho g \\Delta h$.",
      "Suction devices are pushed by the atmosphere and cannot lift water past $34 \\text{ ft}$.",
    ],
    quiz: [
      {
        q: "Standard atmospheric pressure equals all of the following EXCEPT:",
        options: ["$101 \\text{ kPa}$", "$14.7 \\text{ psi}$", "$760 \\text{ mmHg}$", "$34 \\text{ in}$ of water"],
        answer: 3,
        explanation: "The water equivalent is $34 \\text{ ft}$ (about $10.3 \\text{ m}$), not $34 \\text{ in}$.",
      },
      {
        q: "A perfect suction pump at sea level tries to lift water $40 \\text{ ft}$. What happens?",
        options: ["Water rises the full $40 \\text{ ft}$", "Water rises about $34 \\text{ ft}$ and no farther", "Water rises $40 \\text{ ft}$ but at reduced flow", "The pump overheats before lifting anything"],
        answer: 1,
        explanation: "Atmospheric pressure can support only ~$34 \\text{ ft}$ of water; a deeper lift needs a submerged pump.",
      },
      {
        q: "In an open U-tube manometer the liquid stands higher on the open (air) side. The tank pressure is:",
        options: ["Below atmospheric", "Equal to atmospheric", "Above atmospheric", "Exactly zero absolute"],
        answer: 2,
        explanation: "Tank pressure pushes its column down, so the air side rides higher; the difference $\\rho g \\Delta h$ is the positive gauge pressure.",
      },
    ],
  },
  {
    sectionId: "ewen-ch13-s4",
    readingTime: 6,
    intro: "Steel ships float and helium balloons rise for one reason: the fluid pushes up with a force equal to the weight of the fluid pushed aside. This section states Archimedes' principle, defines specific gravity, and solves float-versus-sink problems for solids, ships, and balloons.",
    objectives: [
      "State Archimedes' principle and compute buoyant force as displaced-fluid weight",
      "Use specific gravity to predict floating, sinking, and the submerged fraction",
      "Solve ship-displacement and balloon-lift problems",
    ],
    concepts: [
      {
        term: "Archimedes' principle",
        kind: "law",
        statement: "The buoyant force equals the weight of displaced fluid: $F_{B} = w_{fluid} V_{submerged} = \\rho_{fluid} g V_{submerged}$.",
        detail: "The force comes from pressure increasing with depth — the upward push on the bottom exceeds the downward push on the top.",
      },
      {
        term: "Float or sink rule",
        kind: "theorem",
        statement: "An object floats if its average density is less than the fluid's; the submerged fraction is $V_{sub}/V_{total} = \\rho_{obj}/\\rho_{fluid}$.",
        detail: "Ice ($\\rho \\approx 0.917 \\text{ g}/\\text{cm}^{3}$) floats with about $92$ percent submerged in fresh water.",
      },
      {
        term: "Specific gravity",
        kind: "notation",
        statement: "Specific gravity is the dimensionless ratio $SG = \\rho_{substance}/\\rho_{water}$ at the same temperature.",
        detail: "Lead has $SG = 11.3$, aluminum $2.70$, gasoline about $0.68$; $SG$ converts instantly to $\\text{g}/\\text{cm}^{3}$ or $1000 \\times SG \\text{ kg}/\\text{m}^{3}$.",
      },
      {
        term: "Apparent weight loss",
        kind: "method",
        statement: "Weighing submerged gives $W_{app} = W - F_{B}$, so $F_{B} = W_{air} - W_{water}$ measures the displaced water directly.",
        detail: "Jewelers and technicians use this to identify alloys: the loss equals the weight of an equal volume of water.",
      },
      {
        term: "Ship displacement and balloon lift",
        kind: "insight",
        statement: "A ship floats when its hull displaces water weighing as much as the ship; a balloon rises when the displaced air outweighs balloon plus gas plus payload.",
        detail: "Displacement tonnage is literally the weight of water displaced; helium ($\\rho \\approx 0.179 \\text{ g}/\\text{L}$) displaces air ($1.29 \\text{ g}/\\text{L}$) for about $1.11 \\text{ g}$ of lift per liter.",
      },
    ],
    figures: [
      {
        caption: "Archimedes' principle: $F_{B}$ equals the weight of displaced fluid; floating bodies displace their own weight.",
        svg: "<svg role='img' aria-label='Archimedes&#39; principle: F_B equals the weight of displaced fluid; floating bodies displace their own weight.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"30\" y=\"90\" width=\"150\" height=\"80\"/><line x1=\"20\" y1=\"120\" x2=\"380\" y2=\"120\" stroke-dasharray=\"5 4\"/><rect x=\"230\" y=\"60\" width=\"120\" height=\"50\"/><line x1=\"105\" y1=\"170\" x2=\"105\" y2=\"60\"/><polygon points=\"105,60 97,76 113,76\" fill=\"currentColor\" stroke=\"none\"/><line x1=\"290\" y1=\"110\" x2=\"290\" y2=\"170\"/><polygon points=\"290,170 282,154 298,154\" fill=\"currentColor\" stroke=\"none\"/><text x=\"115\" y=\"80\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">FB up</text><text x=\"298\" y=\"160\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">W down</text><text x=\"40\" y=\"110\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">water line</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Is the crown gold?",
        problem: "A metal block weighs $7.85 \\text{ N}$ in air and $6.86 \\text{ N}$ submerged in water. Find its specific gravity and identify the metal (gold $19.3$, lead $11.3$, steel $7.85$).",
        steps: [
          { label: "Step 1: Buoyant force", text: "$F_{B} = 7.85 - 6.86 = 0.99 \\text{ N}$, the weight of the displaced water." },
          { label: "Step 2: Specific gravity", text: "$SG = W_{air}/F_{B} = 7.85/0.99 = 7.93$." },
          { label: "Step 3: Identify", text: "$7.93 \\approx 7.85$: the block is steel, not gold." },
        ],
        result: "$SG \\approx 7.9$ — steel.",
      },
      {
        title: "Helium balloon lift",
        problem: "A balloon holds $5.00 \\text{ m}^{3}$ of helium. Air weighs $12.6 \\text{ N}/\\text{m}^{3}$ and helium $1.75 \\text{ N}/\\text{m}^{3}$. The envelope plus payload weigh $30.0 \\text{ N}$. Does it rise?",
        steps: [
          { label: "Step 1: Buoyant force", text: "$F_{B} = (12.6)(5.00) = 63.0 \\text{ N}$." },
          { label: "Step 2: Total weight", text: "$W = (1.75)(5.00) + 30.0 = 8.75 + 30.0 = 38.75 \\text{ N}$." },
          { label: "Step 3: Compare", text: "Net lift $= 63.0 - 38.75 = 24.25 \\text{ N}$ upward." },
        ],
        result: "Yes — about $24 \\text{ N}$ ($5.5 \\text{ lb}$) of net lift.",
      },
    ],
    keyTakeaways: [
      "Buoyant force is the weight of displaced fluid: $F_{B} = \\rho g V_{sub}$.",
      "Floating fraction equals the density ratio; $SG$ predicts float or sink at a glance.",
      "Submerged weighing ($W_{air} - W_{water}$) measures volume and identifies materials.",
    ],
    quiz: [
      {
        q: "A $2.00 \\text{ m}^{3}$ log floats half-submerged in fresh water. The buoyant force is about:",
        options: ["$981 \\text{ N}$", "$9810 \\text{ N}$", "$19{,}600 \\text{ N}$", "$2000 \\text{ N}$"],
        answer: 1,
        explanation: "Displaced volume $1.00 \\text{ m}^{3}$ of water weighs $(1000)(9.80)(1.00) = 9810 \\text{ N}$.",
      },
      {
        q: "An object with $SG = 0.60$ is placed in water. The fraction submerged is:",
        options: ["$40$ percent", "$60$ percent", "$100$ percent (it sinks)", "None — it rests on top dry"],
        answer: 1,
        explanation: "Floating fraction $= \\rho_{obj}/\\rho_{fluid} = 0.60$, so $60$ percent sits below the surface.",
      },
      {
        q: "A ship sails from a river into the denser ocean. To displace its own weight it must submerge:",
        options: ["More hull than in the river", "Less hull than in the river", "Exactly the same hull volume", "Its full hull in both cases"],
        answer: 1,
        explanation: "Denser water gives the needed displaced weight with less volume, so the ship rides higher.",
      },
    ],
  },
  {
    sectionId: "ewen-ch13-s5",
    readingTime: 7,
    intro: "When fluids move — through pipes, nozzles, pumps, and carburetors — two conservation laws run the show: mass conservation (continuity) and energy conservation (Bernoulli). This section applies both to pipe sizing, hose nozzles, and lift, including Torricelli's drain-speed formula.",
    objectives: [
      "Apply the continuity equation $A_{1}v_{1} = A_{2}v_{2}$ to pipes and nozzles",
      "Apply Bernoulli's equation relating pressure, speed, and elevation",
      "Compute drain and Torricelli speeds $v = \\sqrt{2gh}$ and explain lift and atomizer action",
    ],
    concepts: [
      {
        term: "Volume flow rate",
        kind: "definition",
        statement: "The volume flow rate is $Q = Av$, in $\\text{m}^{3}/\\text{s}$ or $\\text{gal}/\\text{min}$, the volume crossing a section per second.",
        detail: "Pump ratings and pipe schedules are quoted in $Q$; velocity follows once the pipe area is known.",
      },
      {
        term: "Continuity equation",
        kind: "law",
        statement: "For steady flow of an incompressible fluid, $A_{1}v_{1} = A_{2}v_{2}$: where the pipe narrows, the fluid speeds up.",
        detail: "Halving the diameter quarters the area and quadruples the speed — the reason nozzles jet.",
      },
      {
        term: "Bernoulli's equation",
        kind: "law",
        statement: "Along a streamline, $P + \\tfrac{1}{2}\\rho v^{2} + \\rho g h = \\text{constant}$: pressure, kinetic, and elevation energy trade among themselves.",
        detail: "Faster flow means lower pressure at the same elevation — the Venturi effect behind carburetors, atomizers, and curve balls.",
      },
      {
        term: "Torricelli's theorem",
        kind: "theorem",
        statement: "Fluid draining through a small hole at depth $h$ exits with $v = \\sqrt{2gh}$, the speed of free fall from the surface.",
        detail: "A tank $4.00 \\text{ m}$ deep drains at $\\sqrt{2(9.80)(4.00)} = 8.85 \\text{ m}/\\text{s}$ (ideal, neglecting viscosity).",
      },
      {
        term: "Lift and drag reading",
        kind: "insight",
        statement: "Airfoil lift, chimney draft, and shower-curtain billow are all Bernoulli pressure drops in fast-moving streams.",
        detail: "Ewen keeps the treatment practical: faster streamlines push less, so panels, roofs, and curtains are drawn toward the flow.",
      },
      {
        term: "Limits: viscosity and turbulence",
        kind: "insight",
        statement: "Real fluids lose energy to viscosity and turbulence, so Bernoulli sets the ideal upper bound and long pipes need pump head to overcome friction loss.",
        detail: "That is why small-diameter, long runs demand larger pumps than the ideal equations predict.",
      },
    ],
    figures: [
      {
        caption: "Venturi meter: the constriction speeds flow ($v_{2} > v_{1}$) and the manometer shows the pressure drop $P_{1} > P_{2}$.",
        svg: "<svg role='img' aria-label='Venturi meter: the constriction speeds flow (v_2 > v_1) and the manometer shows the pressure drop P_1 > P_2.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M20 80 L140 80 L180 105 L260 105 L300 80 L380 80\"/><path d=\"M20 140 L140 140 L180 115 L260 115 L300 140 L380 140\"/><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"40\"/><line x1=\"220\" y1=\"105\" x2=\"220\" y2=\"40\"/><line x1=\"100\" y1=\"40\" x2=\"220\" y2=\"40\"/><line x1=\"100\" y1=\"55\" x2=\"100\" y2=\"80\" stroke-width=\"6\"/><line x1=\"220\" y1=\"70\" x2=\"220\" y2=\"105\" stroke-width=\"6\"/><text x=\"85\" y=\"30\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">P1 high</text><text x=\"205\" y=\"30\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">P2 low</text><text x=\"150\" y=\"175\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">flow v1 -&gt; v2 -&gt; v1</text></svg>",
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Garden-hose nozzle",
        problem: "A hose of inside diameter $1.60 \\text{ cm}$ feeds a nozzle of diameter $0.500 \\text{ cm}$. Water approaches at $1.20 \\text{ m}/\\text{s}$. Find the jet speed and the flow rate.",
        steps: [
          { label: "Step 1: Area ratio", text: "$v_{2} = v_{1}(D_{1}/D_{2})^{2} = 1.20(1.60/0.500)^{2} = 1.20(10.24) = 12.3 \\text{ m}/\\text{s}$." },
          { label: "Step 2: Flow rate", text: "$A_{1} = \\pi(0.00800)^{2} = 2.01 \\times 10^{-4} \\text{ m}^{2}$; $Q = A_{1}v_{1} = 2.41 \\times 10^{-4} \\text{ m}^{3}/\\text{s}$ ($0.241 \\text{ L}/\\text{s}$)." },
        ],
        result: "Jet speed $12.3 \\text{ m}/\\text{s}$; flow $0.241 \\text{ L}/\\text{s}$.",
      },
      {
        title: "Draining a tank (Torricelli)",
        problem: "A vented tank holds water $3.20 \\text{ m}$ above a drain hole. Estimate the exit speed and the pressure at the hole in gauge kilopascals before flow starts.",
        steps: [
          { label: "Step 1: Torricelli speed", text: "$v = \\sqrt{2gh} = \\sqrt{2(9.80)(3.20)} = \\sqrt{62.7} = 7.92 \\text{ m}/\\text{s}$." },
          { label: "Step 2: Static pressure", text: "$P = \\rho g h = (1000)(9.80)(3.20) = 31{,}400 \\text{ Pa} = 31.4 \\text{ kPa}$." },
        ],
        result: "Exit speed $7.92 \\text{ m}/\\text{s}$; static gauge pressure $31.4 \\text{ kPa}$.",
      },
    ],
    keyTakeaways: [
      "Continuity $A_{1}v_{1} = A_{2}v_{2}$: constrictions speed the flow; speeds scale with the inverse square of diameter.",
      "Bernoulli trades pressure for speed and elevation along a streamline; Venturi throats read flow by pressure drop.",
      "Torricelli $v = \\sqrt{2gh}$ gives ideal drain speed; friction always reduces real flows.",
    ],
    quiz: [
      {
        q: "A pipe narrows from diameter $D$ to $D/2$. For the same flow rate the velocity becomes:",
        options: ["Half", "Double", "Four times greater", "Sixteen times greater"],
        answer: 2,
        explanation: "Area drops by $(1/2)^{2} = 1/4$, so $v = Q/A$ quadruples.",
      },
      {
        q: "In a horizontal Venturi the pressure at the narrow throat is:",
        options: ["Higher than upstream", "Equal to upstream", "Lower than upstream", "Always zero gauge"],
        answer: 2,
        explanation: "Bernoulli at constant elevation: higher $v$ means lower $P$ at the throat.",
      },
      {
        q: "Two identical tanks drain through identical holes, one with double the water depth. The deeper tank's exit speed is greater by a factor of:",
        options: ["$2$", "$\\sqrt{2}$", "$4$", "It is the same"],
        answer: 1,
        explanation: "$v = \\sqrt{2gh}$ scales with $\\sqrt{h}$, so doubling $h$ multiplies $v$ by $\\sqrt{2}$.",
      },
    ],
  },
]
