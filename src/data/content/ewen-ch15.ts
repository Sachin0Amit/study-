import type { SectionContent } from "../library"

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition, Chapter 15
// Properties of Gases (Sections 15.1 – 15.3)
// ============================================================================

export const ewenCh15Content: SectionContent[] = [
  {
    sectionId: "ewen-ch15-s1",
    readingTime: 6,
    intro: "Heat a confined gas and it pushes harder — volume grows in direct proportion to absolute temperature. This section states Charles's law $V_{1}/T_{1} = V_{2}/T_{2}$, insists on kelvins, and applies it to tires, tanks, and hot-air balloons.",
    objectives: [
      "State Charles's law for constant-pressure gas and explain its absolute-temperature basis",
      "Convert Celsius to kelvins before every gas-law substitution",
      "Predict volumes and temperatures for heating, cooling, and balloon problems",
    ],
    concepts: [
      {
        term: "Charles's law",
        kind: "law",
        statement: "At constant pressure, gas volume is proportional to absolute temperature: $V_{1}/T_{1} = V_{2}/T_{2}$ with $T$ in kelvins.",
        detail: "Doubling kelvins doubles the volume; plots of $V$ versus $T_{K}$ are straight lines through the origin.",
      },
      {
        term: "Kelvin requirement",
        kind: "method",
        statement: "Always add $273$ to $^{\\circ}\\text{C}$ first: proportionality holds only from absolute zero.",
        detail: "Using $^{\\circ}\\text{C}$ directly is the classic failure — $10^{\\circ}\\text{C}$ to $20^{\\circ}\\text{C}$ is $283 \\text{ K}$ to $293 \\text{ K}$, barely a $4$ percent change.",
      },
      {
        term: "Constant-pressure condition",
        kind: "definition",
        statement: "Charles's law assumes a free or controlled boundary (piston, balloon) holding pressure fixed while temperature changes.",
        detail: "Sealed rigid tanks change pressure instead — that is Gay-Lussac/combined-law territory.",
      },
      {
        term: "Absolute zero from extrapolation",
        kind: "insight",
        statement: "Extending $V$-versus-$T$ lines to zero volume hits $-273^{\\circ}\\text{C}$, the experimental origin of absolute zero.",
        detail: "Real gases liquefy first, but the ideal extrapolation is exact enough to define the scale.",
      },
      {
        term: "Balloon and tire warm-up",
        kind: "insight",
        statement: "Hot-air balloons rise because heating at (nearly) atmospheric pressure expands air and spills mass overboard, lowering average density.",
        detail: "Tires left in the sun grow slightly in volume while their pressure climbs — combined-law behavior with Charles's part dominant.",
      },
    ],
    examples: [
      {
        title: "Heating a gas cylinder",
        problem: "A piston holds $2.40 \\text{ L}$ of air at $20.0^{\\circ}\\text{C}$ at constant pressure. Find its volume at $120^{\\circ}\\text{C}$.",
        steps: [
          { label: "Step 1: To kelvins", text: "$T_{1} = 293 \\text{ K}$, $T_{2} = 393 \\text{ K}$." },
          { label: "Step 2: Charles's law", text: "$V_{2} = V_{1}(T_{2}/T_{1}) = 2.40(393/293) = 3.22 \\text{ L}$." },
        ],
        result: "$3.22 \\text{ L}$.",
      },
      {
        title: "Cold-morning balloon",
        problem: "A weather balloon holds $500 \\text{ m}^{3}$ at $25.0^{\\circ}\\text{C}$. What volume does the same gas occupy at $-15.0^{\\circ}\\text{C}$ (same pressure)?",
        steps: [
          { label: "Step 1: Kelvins", text: "$298 \\text{ K}$ down to $258 \\text{ K}$." },
          { label: "Step 2: Shrink", text: "$V_{2} = 500(258/298) = 433 \\text{ m}^{3}$." },
        ],
        result: "$433 \\text{ m}^{3}$ — lift falls with the cold.",
      },
    ],
    keyTakeaways: [
      "Charles's law: $V/T$ is constant at fixed pressure — kelvins only.",
      "Volume scales with the Kelvin ratio, so Celsius changes look deceptively large.",
      "Extrapolating to zero volume locates absolute zero.",
    ],
    quiz: [
      {
        q: "A gas at $300 \\text{ K}$ and fixed pressure is heated until its volume doubles. Its new temperature is:",
        options: ["$150 \\text{ K}$", "$300^{\\circ}\\text{C}$", "$600 \\text{ K}$", "$600^{\\circ}\\text{C}$"],
        answer: 2,
        explanation: "Doubling $V$ doubles $T_{K}$: $2 \\times 300 = 600 \\text{ K}$.",
      },
      {
        q: "Why must gas-law temperatures be in kelvins?",
        options: ["Kelvins are smaller units", "Proportionality starts at absolute zero, not at the freezing point", "The book prefers SI", "Celsius thermometers are inaccurate"],
        answer: 1,
        explanation: "$V \\propto T$ only when $T$ is measured from absolute zero; $^{\\circ}\\text{C}$ has the wrong zero.",
      },
      {
        q: "$3.00 \\text{ L}$ of gas at $27^{\\circ}\\text{C}$ cools at constant pressure to $0^{\\circ}\\text{C}$. New volume:",
        options: ["$0 \\text{ L}$", "$2.73 \\text{ L}$", "$3.00 \\text{ L}$", "$0.33 \\text{ L}$"],
        answer: 1,
        explanation: "$V_{2} = 3.00(273/300) = 2.73 \\text{ L}$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch15-s2",
    readingTime: 6,
    intro: "Squeeze a gas into half its volume and its pressure doubles — Boyle's law. This section states $P_{1}V_{1} = P_{2}V_{2}$ at constant temperature, stresses absolute pressure, and sizes compressors, tanks, and scuba problems.",
    objectives: [
      "State Boyle's law and its constant-temperature condition",
      "Use absolute (not gauge) pressure in every Boyle calculation",
      "Solve compressor, tank-storage, and breathing-air problems",
    ],
    concepts: [
      {
        term: "Boyle's law",
        kind: "law",
        statement: "At constant temperature, $P_{1}V_{1} = P_{2}V_{2}$: pressure and volume are inversely proportional.",
        detail: "Halving the volume doubles the pressure; $P$-versus-$V$ curves are hyperbolas.",
      },
      {
        term: "Absolute pressure only",
        kind: "method",
        statement: "Convert gauge readings by adding $101 \\text{ kPa}$ ($14.7 \\text{ psi}$) before multiplying $PV$.",
        detail: "A $0 \\text{ psi}$-gauge tank still holds a full atmosphere — gauge zero is not physical zero.",
      },
      {
        term: "Isothermal condition",
        kind: "definition",
        statement: "Boyle's law assumes slow compression with heat escaping so temperature stays fixed.",
        detail: "Fast compression heats the gas (diesel ignition exploits this); slow shop filling approximates isothermal.",
      },
      {
        term: "Pressure–volume work picture",
        kind: "insight",
        statement: "Compressing a gas stores energy in it; expanding gas does work on pistons and tools.",
        detail: "Pneumatic tools run on this stored $PV$ energy banked by the compressor.",
      },
      {
        term: "Scuba and lung safety",
        kind: "insight",
        statement: "Ascending halves ambient pressure and doubles trapped-gas volume — breath-holding ascents rupture lungs.",
        detail: "Boyle's law is the quantitative reason divers breathe continuously while ascending.",
      },
    ],
    figures: [
      {
        caption: "Boyle's law: the $P$-versus-$V$ hyperbola $PV = \\text{constant}$ at fixed $T$; halving $V$ doubles $P$.",
        svg: "<svg role='img' aria-label='Boyle&#39;s law: the P-versus-V hyperbola PV = textconstant at fixed T; halving V doubles P.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"40\" y1=\"160\" x2=\"370\" y2=\"160\"/><line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"20\"/><path d=\"M60 140 Q120 60 340 40\"/><circle cx=\"100\" cy=\"95\" r=\"4\" fill=\"currentColor\"/><circle cx=\"180\" cy=\"60\" r=\"4\" fill=\"currentColor\"/><text x=\"90\" y=\"115\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">P1V1</text><text x=\"185\" y=\"80\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">P2V2</text><text x=\"330\" y=\"180\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">V</text><text x=\"15\" y=\"40\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">P</text></svg>",
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Compressor tank fill",
        problem: "A compressor squeezes $12.0 \\text{ ft}^{3}$ of free air ($14.7 \\text{ psia}$) into a $2.00 \\text{ ft}^{3}$ tank at constant temperature. Find the tank pressure in psig.",
        steps: [
          { label: "Step 1: Boyle's law", text: "$P_{2} = P_{1}(V_{1}/V_{2}) = 14.7(12.0/2.00) = 88.2 \\text{ psia}$." },
          { label: "Step 2: To gauge", text: "$88.2 - 14.7 = 73.5 \\text{ psig}$." },
        ],
        result: "$73.5 \\text{ psig}$ ($88.2 \\text{ psia}$).",
      },
      {
        title: "Scuba air use",
        problem: "A $12.0 \\text{ L}$ tank at $200 \\text{ bar}$ absolute feeds a diver breathing $20.0 \\text{ L}/\\text{min}$ of surface-pressure air. Estimate dive minutes (ignore depth).",
        steps: [
          { label: "Step 1: Free-air equivalent", text: "$V_{free} = V_{tank}(P_{tank}/P_{surf}) = 12.0(200/1.00) = 2400 \\text{ L}$." },
          { label: "Step 2: Time", text: "$2400/20.0 = 120 \\text{ min}$ at the surface." },
        ],
        result: "About $120$ surface-equivalent minutes (depth multiplies consumption).",
      },
    ],
    keyTakeaways: [
      "Boyle: $PV$ is constant at fixed $T$; halve $V$, double $P$.",
      "Pressures must be absolute — add the atmosphere to gauge readings.",
      "Slow fills are near-isothermal; fast ones heat and need the combined law.",
    ],
    quiz: [
      {
        q: "A gas at $100 \\text{ kPa}$ absolute occupies $6.00 \\text{ L}$. Compressed isothermally to $2.00 \\text{ L}$, its pressure is:",
        options: ["$33.3 \\text{ kPa}$", "$100 \\text{ kPa}$", "$300 \\text{ kPa}$", "$600 \\text{ kPa}$"],
        answer: 2,
        explanation: "$P_{2} = 100(6.00/2.00) = 300 \\text{ kPa}$ absolute.",
      },
      {
        q: "A tire gauge reads $30.0 \\text{ psig}$. The absolute pressure for a Boyle calculation is:",
        options: ["$30.0 \\text{ psia}$", "$15.3 \\text{ psia}$", "$44.7 \\text{ psia}$", "$0 \\text{ psia}$"],
        answer: 2,
        explanation: "Add $14.7$: $30.0 + 14.7 = 44.7 \\text{ psia}$.",
      },
      {
        q: "Rapidly pumping a bicycle tire warms the air. Boyle's law alone then:",
        options: ["Still applies exactly", "Underpredicts the pressure (heat adds extra $P$)", "Overpredicts the pressure", "Reverses direction"],
        answer: 1,
        explanation: "Heating raises $P$ beyond the isothermal prediction; the combined law is needed.",
      },
    ],
  },
  {
    sectionId: "ewen-ch15-s3",
    readingTime: 7,
    intro: "Real service jobs change pressure, volume, and temperature all at once — that is the combined gas law $P_{1}V_{1}/T_{1} = P_{2}V_{2}/T_{2}$. This section merges Charles and Boyle, runs the standard tire/tank/compressor problems, and previews the ideal-gas form $PV = nRT$.",
    objectives: [
      "Write and apply the combined gas law with kelvins and absolute pressures",
      "Solve tire-heating, tank-filling, and altitude-balloon problems",
      "State $PV = nRT$ and identify $R$ and moles",
    ],
    concepts: [
      {
        term: "Combined gas law",
        kind: "law",
        statement: "For a fixed mass of gas, $P_{1}V_{1}/T_{1} = P_{2}V_{2}/T_{2}$ with $P$ absolute and $T$ in kelvins.",
        detail: "Hold $P$ fixed to recover Charles, hold $T$ fixed to recover Boyle — one equation contains both.",
      },
      {
        term: "Solution routine",
        kind: "method",
        statement: "List six quantities, convert $P$ to absolute and $T$ to kelvins, solve for the unknown, and convert back if the shop wants gauge or $^{\\circ}\\text{C}$.",
        detail: "Five knowns plus one unknown is the standard applied problem; unit conversion is half the work.",
      },
      {
        term: "Hot-tire pressure rise",
        kind: "insight",
        statement: "A nearly rigid tire gains pressure almost in Kelvin proportion: $P_{2} \\approx P_{1}(T_{2}/T_{1})$ absolute.",
        detail: "Under-inflated tires flex, heat further, and climb past ratings — check pressures cold.",
      },
      {
        term: "Ideal gas law preview",
        kind: "notation",
        statement: "With moles $n$, $PV = nRT$ where $R = 8.31 \\text{ J}/\\text{mol}\\cdot\\text{K}$ ($0.0821 \\text{ L}\\cdot\\text{atm}/\\text{mol}\\cdot\\text{K}$).",
        detail: "The combined law is $PV = nRT$ with the unknown $nR$ cancelling between states.",
      },
      {
        term: "Standard conditions",
        kind: "notation",
        statement: "STP ($0^{\\circ}\\text{C}$, $1 \\text{ atm}$) gives one mole $22.4 \\text{ L}$; free-air compressor ratings use these liters.",
        detail: "Comparing tank contents to free-air liters is a mole count in disguise.",
      },
    ],
    examples: [
      {
        title: "Tire heating on the highway",
        problem: "A tire holds $35.0 \\text{ psig}$ at $20.0^{\\circ}\\text{C}$. After driving it reaches $60.0^{\\circ}\\text{C}$ at nearly constant volume. Find the hot gauge pressure.",
        steps: [
          { label: "Step 1: Absolute and kelvins", text: "$P_{1} = 49.7 \\text{ psia}$; $T_{1} = 293 \\text{ K}$, $T_{2} = 333 \\text{ K}$." },
          { label: "Step 2: Combined law at fixed $V$", text: "$P_{2} = 49.7(333/293) = 56.5 \\text{ psia}$." },
          { label: "Step 3: Back to gauge", text: "$56.5 - 14.7 = 41.8 \\text{ psig}$." },
        ],
        result: "About $41.8 \\text{ psig}$ — a $6.8 \\text{ psi}$ heat gain.",
      },
      {
        title: "Compressor tank in the sun",
        problem: "A rigid $100 \\text{ L}$ tank holds air at $500 \\text{ kPa}$ absolute and $20.0^{\\circ}\\text{C}$. It sits in the sun at $50.0^{\\circ}\\text{C}$. Find the new pressure; then find the free-air liters stored ($101 \\text{ kPa}$, $20^{\\circ}\\text{C}$).",
        steps: [
          { label: "Step 1: Heat at fixed $V$", text: "$P_{2} = 500(323/293) = 551 \\text{ kPa}$ absolute." },
          { label: "Step 2: Free-air equivalent", text: "$V_{free} = 100(551/101)(293/323) = 495 \\text{ L}$." },
        ],
        result: "$551 \\text{ kPa}$ absolute; $495 \\text{ L}$ of free air.",
      },
    ],
    keyTakeaways: [
      "$P_{1}V_{1}/T_{1} = P_{2}V_{2}/T_{2}$ handles every fixed-mass gas change.",
      "Convert first (absolute $P$, kelvins), solve, then convert back for the shop.",
      "$PV = nRT$ with $22.4 \\text{ L}/\\text{mol}$ at STP extends the same idea to moles.",
    ],
    quiz: [
      {
        q: "A sealed rigid tank is heated from $300 \\text{ K}$ to $450 \\text{ K}$. Absolute pressure:",
        options: ["Halves", "Stays the same", "Rises by $1.5\\times$", "Triples"],
        answer: 2,
        explanation: "At fixed $V$, $P \\propto T$: $450/300 = 1.50$.",
      },
      {
        q: "A balloon rises where pressure halves and Kelvin temperature drops $10$ percent. Its volume changes by:",
        options: ["$0.45\\times$", "$0.90\\times$", "$1.80\\times$", "$2.00\\times$"],
        answer: 2,
        explanation: "$V_{2} = V_{1}(P_{1}/P_{2})(T_{2}/T_{1}) = V_{1}(2)(0.90) = 1.80V_{1}$.",
      },
      {
        q: "One mole of ideal gas at STP occupies about:",
        options: ["$1.00 \\text{ L}$", "$8.31 \\text{ L}$", "$22.4 \\text{ L}$", "$100 \\text{ L}$"],
        answer: 2,
        explanation: "The STP molar volume $22.4 \\text{ L}$ follows directly from $V = nRT/P$.",
      },
    ],
  },
]
