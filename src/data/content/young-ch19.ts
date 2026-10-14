import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 19
// The First Law of Thermodynamics (Sections 19.1 – 19.8)
// ============================================================================

export const youngCh19Content: SectionContent[] = [
  {
    sectionId: "young-ch19-s1",
    readingTime: 4,
    intro: "Thermodynamics studies systems that exchange heat and work with their surroundings. Young defines the system-surroundings split, state variables, and the sign conventions that keep every later calculation consistent.",
    objectives: [
      "Define system, surroundings, state, and process with examples",
      "State the sign conventions for $Q$ and $W$ used throughout the chapter",
      "Distinguish equilibrium from nonequilibrium states",
    ],
    concepts: [
      {
        term: "Thermodynamic system",
        kind: "definition",
        statement: "A **thermodynamic system** is the chosen collection of matter under study; everything else is the **surroundings**, and their interface passes heat and work.",
        detail: "The gas in a cylinder is the system; piston, walls, and flame are surroundings. Choosing the boundary well is half of every problem.",
      },
      {
        term: "State variables",
        kind: "definition",
        statement: "**State variables** ($p$, $V$, $T$, $n$, $U$) describe the current condition independent of history; a **thermodynamic process** is a path of states from initial to final.",
        detail: "Pressure and temperature are state functions; heat and work are not — the same endpoints admit many $(Q, W)$ pairs.",
      },
      {
        term: "Sign conventions",
        kind: "notation",
        statement: "$Q > 0$ means heat flows **into** the system; $W > 0$ means the system **does** work on the surroundings (expansion). Both reverse with opposite flows.",
        detail: "Chemistry often uses the opposite work sign; Young's physics convention keeps $\\Delta U = Q - W$ with work done by the system subtracted.",
      },
      {
        term: "Thermal equilibrium of states",
        kind: "insight",
        statement: "A well-defined state requires internal equilibrium — uniform $p$ and $T$ throughout — so quasistatic processes pass through a continuum of equilibrium states.",
        detail: "Explosions and turbulence are nonequilibrium; thermodynamics handles them only via endpoints, never the path.",
      },
      {
        term: "Isolated systems",
        kind: "definition",
        statement: "An **isolated system** exchanges neither heat nor work ($Q = W = 0$); its internal energy is strictly constant.",
        detail: "A sealed thermos approximates isolation; the universe is the ultimate isolated system — the basis of entropy's rise in Chapter 20.",
      },
    ],
    examples: [
      {
        title: "Signs for a compressing piston",
        problem: "A piston compresses $0.020\\ \\mathrm{m^{3}}$ of gas to $0.010\\ \\mathrm{m^{3}}$ while $800\\ \\mathrm{J}$ of heat leaves the gas. Assign signs to $Q$ and $W$.",
        steps: [
          { label: "Heat", text: "Heat leaves the system, so $Q = -800\\ \\mathrm{J}$." },
          { label: "Work", text: "Compression means surroundings do work on the gas; the gas does negative work, $W < 0$ (magnitude from $\\int p\\,dV$ in Section 19.2)." },
          { label: "Energy preview", text: "$\\Delta U = Q - W = -800 - (\\text{negative}) = -800 + |W|$: compression energy fights heat loss." },
        ],
        result: "$Q < 0$, $W < 0$ for compression with heat loss.",
      },
      {
        title: "State versus path quantities",
        problem: "Gas goes from $(p_{1}, V_{1})$ to $(p_{2}, V_{2})$ by two different routes. Which quantities must agree: $\\Delta T$, $Q$, $W$?",
        steps: [
          { label: "Temperature", text: "$T = pV/(nR)$ at each endpoint is fixed, so $\\Delta T$ is identical — state function." },
          { label: "Heat and work", text: "$Q$ and $W$ individually differ by route (Sections 19.2–19.3 prove it); only $Q - W = \\Delta U$ agrees." },
          { label: "Lesson", text: "Endpoints fix state changes; paths fix transfers. Never call $Q$ or $W$ state functions." },
        ],
        result: "$\\Delta T$ agrees; $Q$ and $W$ are path-dependent.",
      },
    ],
    keyTakeaways: [
      "System plus surroundings define every analysis; states need internal equilibrium.",
      "$Q > 0$ in, $W > 0$ out (by the system): the physics convention.",
      "$p, V, T, U$ are state functions; $Q$ and $W$ are path-dependent transfers.",
    ],
    quiz: [
      {
        q: "In Young's convention, expanding gas doing $500\\ \\mathrm{J}$ of work while absorbing $200\\ \\mathrm{J}$ of heat has:",
        options: ["$Q = 200\\ \\mathrm{J}$, $W = 500\\ \\mathrm{J}$", "$Q = -200\\ \\mathrm{J}$, $W = -500\\ \\mathrm{J}$", "$Q = 500\\ \\mathrm{J}$, $W = 200\\ \\mathrm{J}$", "$Q = 200\\ \\mathrm{J}$, $W = -500\\ \\mathrm{J}$"],
        answer: 0,
        explanation: "Heat in is positive; work by the system is positive: $Q = +200$, $W = +500$.",
      },
      {
        q: "Which are state functions?",
        options: ["$Q$ and $W$", "$p$, $V$, $T$, $U$", "Only $Q$", "Only $W$"],
        answer: 1,
        explanation: "State variables depend only on the current equilibrium condition; $Q$ and $W$ describe the path taken.",
      },
      {
        q: "An isolated system's internal energy:",
        options: ["Always rises", "Is constant since $Q = W = 0$", "Always falls", "Depends on the path"],
        answer: 1,
        explanation: "No transfers means $\\Delta U = 0$ by the first law.",
      },
    ],
  },
  {
    sectionId: "young-ch19-s2",
    readingTime: 5,
    intro: "Expanding gas pushes pistons, and the push has a price measured in joules. Young derives boundary work $W = \\int p\\,dV$ and reads it as area on the $p$-$V$ diagram — the geometric key to all engine analysis.",
    objectives: [
      "Derive $dW = p\\,dV$ for quasistatic volume change",
      "Compute work for isobaric, isochoric, and isothermal changes",
      "Interpret work as area under the $p$-$V$ curve with correct signs",
    ],
    concepts: [
      {
        term: "Boundary work",
        kind: "theorem",
        statement: "For quasistatic change the work done **by** the system is $W = \\int_{V_{1}}^{V_{2}} p\\,dV$, from $dW = F\\,dx = (pA)\\,dx = p\\,dV$ on a piston of area $A$.",
        detail: "Finite pushes need quasistatic $p$ defined at each step; free expansion into vacuum does zero work despite volume change — no opposing force.",
      },
      {
        term: "Work as p-V area",
        kind: "insight",
        statement: "The integral is the **area under the $p$-$V$ curve**: expansion ($dV > 0$) sweeps positive area (work out), compression sweeps negative area (work in).",
        detail: "Cyclic processes enclose net area — the engine's output per cycle read straight off the diagram.",
      },
      {
        term: "Isobaric and isochoric work",
        kind: "method",
        statement: "At constant pressure $W = p(V_{2} - V_{1})$; at constant volume $W = 0$ regardless of pressure change — a rectangle versus no area.",
        detail: "Heating a rigid tank does no boundary work; all heat becomes internal energy (Section 19.5).",
      },
      {
        term: "Isothermal ideal-gas work",
        kind: "theorem",
        statement: "At fixed $T$, $p = nRT/V$ gives $W = nRT\\ln(V_{2}/V_{1})$: logarithmic growth because falling pressure discounts later expansion.",
        detail: "Doubling volume at $300\\ \\mathrm{K}$ for $1\\ \\mathrm{mol}$ yields $(8.314)(300)\\ln 2 = 1729\\ \\mathrm{J}$ — the benchmark slow-expansion result.",
      },
      {
        term: "Quasistatic requirement",
        kind: "notation",
        statement: "The formula needs a defined $p$ at every instant — a **quasistatic** (slow, equilibrated) path. Sudden expansion against zero external pressure does $W = 0$.",
        detail: "Against constant external $p_{\\mathrm{ext}}$, $W = p_{\\mathrm{ext}}\\Delta V$ even if internal $p$ is undefined mid-process.",
      },
    ],
    figures: [
      {
        caption: "Work as area: isobaric expansion sweeps a rectangle $p\\Delta V$; the isothermal $nRT/V$ curve sweeps a logarithmic area.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Work as area under p-V curves"><line x1="40" y1="160" x2="380" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor" stroke-width="1.5"/><rect x="80" y="80" width="120" height="80" fill="currentColor" opacity="0.25" stroke="currentColor"/><text x="95" y="125" font-size="12" fill="currentColor">pΔV</text><path d="M230,140 Q280,100 350,60" fill="none" stroke="currentColor" stroke-width="2"/><path d="M230,140 L230,160 L350,160 L350,60 Z" fill="currentColor" opacity="0.18"/><text x="255" y="175" font-size="12" fill="currentColor">nRT ln(V2/V1)</text><text x="45" y="40" font-size="12" fill="currentColor">p</text><text x="355" y="175" font-size="12" fill="currentColor">V</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Isobaric expansion work",
        problem: "A gas at $p = 2.00 \\times 10^{5}\\ \\mathrm{Pa}$ expands from $0.010\\ \\mathrm{m^{3}}$ to $0.030\\ \\mathrm{m^{3}}$ at constant pressure. Find $W$.",
        steps: [
          { label: "Apply", text: "$W = p\\Delta V = (2.00 \\times 10^{5})(0.030 - 0.010) = (2.00 \\times 10^{5})(0.020)$." },
          { label: "Evaluate", text: "$W = 4000\\ \\mathrm{J}$ done by the gas." },
          { label: "Diagram", text: "A $2.00 \\times 10^{5}$-tall, $0.020$-wide rectangle: area $4000\\ \\mathrm{J}$. Consistent." },
        ],
        result: "$W = 4.00\\ \\mathrm{kJ}$ by the gas.",
      },
      {
        title: "Isothermal doubling",
        problem: "One mole at $T = 400\\ \\mathrm{K}$ expands isothermally from $V$ to $3V$. Find $W$.",
        steps: [
          { label: "Formula", text: "$W = nRT\\ln(V_{2}/V_{1}) = (1)(8.314)(400)\\ln 3$." },
          { label: "Numbers", text: "$(3325.6)(1.0986) = 3653.5\\ \\mathrm{J}$." },
          { label: "Sign", text: "Expansion gives $W > 0$; heat $Q = W$ must enter to hold $T$ (Section 19.4)." },
        ],
        result: "$W = 3.65\\ \\mathrm{kJ}$ by the gas.",
      },
    ],
    keyTakeaways: [
      "$W = \\int p\\,dV$: area under the $p$-$V$ path, positive for expansion.",
      "Isobaric $W = p\\Delta V$; isochoric $W = 0$; isothermal $W = nRT\\ln(V_{2}/V_{1})$.",
      "Free expansion does no work; quasistatic paths are required for $\\int p\\,dV$.",
    ],
    quiz: [
      {
        q: "Gas expands from $1\\ \\mathrm{L}$ to $3\\ \\mathrm{L}$ against zero external pressure (free expansion). The work done is:",
        options: ["$p\\Delta V$", "$nRT\\ln 3$", "$0$", "Infinite"],
        answer: 2,
        explanation: "No opposing force means no $F\\,dx$: free expansion does zero work despite the volume change.",
      },
      {
        q: "Compression from $V_{2}$ back to $V_{1} < V_{2}$ along the same quasistatic path gives work:",
        options: ["Equal and positive", "Equal in magnitude but negative", "Zero", "Twice as large"],
        answer: 1,
        explanation: "Reversing $dV$ flips the sign of each $p\\,dV$ slice: same area, opposite sign.",
      },
      {
        q: "$2.0\\ \\mathrm{mol}$ at $300\\ \\mathrm{K}$ doubles isothermally. $W$ equals:",
        options: ["$0$", "$(2.0)(8.314)(300)\\ln 2 = 3.46\\ \\mathrm{kJ}$", "$(2.0)(8.314)(300) = 4.99\\ \\mathrm{kJ}$", "$-3.46\\ \\mathrm{kJ}$"],
        answer: 1,
        explanation: "$W = nRT\\ln 2 = (2.0)(8.314)(300)(0.6931) = 3458\\ \\mathrm{J}$.",
      },
    ],
  },
  {
    sectionId: "young-ch19-s3",
    readingTime: 5,
    intro: "Same endpoints, different work and heat — Young proves path dependence with the classic two-route experiment. The combination $Q - W$ is nevertheless path-independent, forcing the existence of internal energy.",
    objectives: [
      "Demonstrate with examples that $Q$ and $W$ depend on path",
      "Show $Q - W$ is path-independent for given endpoints",
      "Infer the existence of a state function $U$ from path independence",
    ],
    concepts: [
      {
        term: "Path dependence of work",
        kind: "theorem",
        statement: "Different $p$-$V$ routes between fixed endpoints sweep different areas, so $W$ differs: e.g. expand-then-cool versus cool-then-expand give $W = p_{2}(V_{2}-V_{1})$ versus $W = p_{1}(V_{2}-V_{1})$.",
        detail: "With $p_{1} = 3.0\\ \\mathrm{atm}$, $p_{2} = 1.0\\ \\mathrm{atm}$, $\\Delta V = 2.0\\ \\mathrm{L}$: routes give $202.6\\ \\mathrm{J}$ versus $607.9\\ \\mathrm{J}$ — a factor of three.",
      },
      {
        term: "Path dependence of heat",
        kind: "theorem",
        statement: "$Q$ likewise differs by route, since each leg's $mc\\Delta T$-style heating depends on when volume changes; only the difference $Q - W$ repeats.",
        detail: "Joule's paddle-wheel versus slow heating reach the same $\\Delta T$ with wildly different $(Q, W)$ splits.",
      },
      {
        term: "Q minus W is path-independent",
        kind: "law",
        statement: "For all paths between given equilibrium states, $Q - W$ takes one common value — the experimental fact behind the first law.",
        detail: "Route A with $(Q, W) = (800, 300)$ and route B with $(500, 0)$ both give $Q - W = 500\\ \\mathrm{J}$: same endpoints, same difference.",
      },
      {
        term: "State function from path independence",
        kind: "insight",
        statement: "A path-independent difference must be the change of something depending only on state: $\\Delta U = Q - W$ defines **internal energy** $U$.",
        detail: "This mirrors conservative forces in mechanics, where path-independent work defines potential energy — thermodynamics' parallel construction.",
      },
      {
        term: "Cyclic processes",
        kind: "method",
        statement: "Returning to the start gives $\\Delta U = 0$, so $Q_{\\mathrm{net}} = W_{\\mathrm{net}}$: net heat in equals net work out, the engine's operating principle.",
        detail: "Clockwise $p$-$V$ loops output work; counterclockwise loops (refrigerators) absorb it — area sets the scale.",
      },
    ],
    figures: [
      {
        caption: "Two paths between the same states sweep different areas ($W_{A} \\ne W_{B}$) but share $Q - W = \\Delta U$.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two thermodynamic paths between shared endpoints"><line x1="40" y1="160" x2="380" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor" stroke-width="1.5"/><circle cx="110" cy="120" r="5" fill="currentColor"/><circle cx="300" cy="70" r="5" fill="currentColor"/><path d="M110,120 L300,120 L300,70" fill="none" stroke="currentColor" stroke-width="2"/><path d="M110,120 L110,70 L300,70" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 4"/><text x="100" y="140" font-size="12" fill="currentColor">1</text><text x="295" y="55" font-size="12" fill="currentColor">2</text><text x="200" y="135" font-size="11" fill="currentColor">path A</text><text x="120" y="90" font-size="11" fill="currentColor">path B</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Two routes, one difference",
        problem: "Route A: $Q = 1200\\ \\mathrm{J}$, $W = 700\\ \\mathrm{J}$. Route B between the same states has $W = 300\\ \\mathrm{J}$. Find $Q_{B}$ and $\\Delta U$.",
        steps: [
          { label: "Delta U from A", text: "$\\Delta U = Q_{A} - W_{A} = 1200 - 700 = 500\\ \\mathrm{J}$." },
          { label: "Heat on B", text: "$Q_{B} = \\Delta U + W_{B} = 500 + 300 = 800\\ \\mathrm{J}$." },
          { label: "Moral", text: "$Q$ and $W$ differ ($1200$ vs $800$, $700$ vs $300$) but $Q - W = 500\\ \\mathrm{J}$ always." },
        ],
        result: "$\\Delta U = 500\\ \\mathrm{J}$; $Q_{B} = 800\\ \\mathrm{J}$.",
      },
      {
        title: "Engine cycle bookkeeping",
        problem: "A cycle absorbs $Q_{h} = 2000\\ \\mathrm{J}$, rejects $Q_{c} = 1400\\ \\mathrm{J}$. Find net work and efficiency preview.",
        steps: [
          { label: "Net heat", text: "$Q_{\\mathrm{net}} = 2000 - 1400 = 600\\ \\mathrm{J}$." },
          { label: "Net work", text: "$W_{\\mathrm{net}} = Q_{\\mathrm{net}} = 600\\ \\mathrm{J}$ since $\\Delta U = 0$." },
          { label: "Efficiency", text: "$e = W/Q_{h} = 600/2000 = 0.30$ — Chapter 20's headline ratio." },
        ],
        result: "$W_{\\mathrm{net}} = 600\\ \\mathrm{J}$, $e = 30$ percent.",
      },
    ],
    keyTakeaways: [
      "$Q$ and $W$ are path-dependent; areas differ by route.",
      "$Q - W$ is path-independent for fixed endpoints.",
      "Path independence defines $U$; cycles give $Q_{\\mathrm{net}} = W_{\\mathrm{net}}$.",
    ],
    quiz: [
      {
        q: "Two paths between the same states have $(Q_{A}, W_{A}) = (900, 400)$ and $W_{B} = 100$. Then $Q_{B}$ is:",
        options: ["$900\\ \\mathrm{J}$", "$600\\ \\mathrm{J}$", "$100\\ \\mathrm{J}$", "$400\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$\\Delta U = 900 - 400 = 500$, so $Q_{B} = 500 + 100 = 600\\ \\mathrm{J}$.",
      },
      {
        q: "For any complete cycle, the first law requires:",
        options: ["$Q_{\\mathrm{net}} = 0$", "$W_{\\mathrm{net}} = 0$", "$Q_{\\mathrm{net}} = W_{\\mathrm{net}}$", "$\\Delta U > 0$"],
        answer: 2,
        explanation: "Return to the start means $\\Delta U = 0$, so $0 = Q_{\\mathrm{net}} - W_{\\mathrm{net}}$.",
      },
      {
        q: "Path independence of $Q - W$ implies:",
        options: ["$Q$ is a state function", "Existence of internal energy $U$ with $\\Delta U = Q - W$", "$W$ is a state function", "All paths give equal $Q$"],
        answer: 1,
        explanation: "A route-independent difference must be a state change — the definition of $U$.",
      },
    ],
  },
  {
    sectionId: "young-ch19-s4",
    readingTime: 5,
    intro: "Energy is conserved — now with heat counted. Young states the first law $\\Delta U = Q - W$, the most important equation of the thermal chapters, and applies it to cycles, isolated systems, and sign-checked problems.",
    objectives: [
      "State the first law $\\Delta U = Q - W$ and its differential form",
      "Apply it to cyclic, isolated, and single-process changes",
      "Solve sign-consistent numerical first-law problems",
    ],
    concepts: [
      {
        term: "First law of thermodynamics",
        kind: "law",
        statement: "In any process, $\\Delta U = Q - W$: heat added minus work done by the system equals the change in **internal energy**. Differentially $dU = dQ - dW$.",
        detail: "Microscopically $U$ sums molecular kinetic plus binding energies; macroscopically it is measured purely through $Q - W$.",
      },
      {
        term: "Internal energy as state function",
        kind: "definition",
        statement: "**Internal energy** $U$ depends only on state ($U = U(T)$ for ideal gases, Section 19.6); $Q$ and $W$ are its path-dependent couriers.",
        detail: "Joule's free-expansion experiment (no $\\Delta T$) proved $U$ ignores $V$ for ideal gases — temperature alone rules.",
      },
      {
        term: "Special-case forms",
        kind: "method",
        statement: "Adiabatic ($Q = 0$): $\\Delta U = -W$. Isochoric ($W = 0$): $\\Delta U = Q$. Cyclic ($\\Delta U = 0$): $Q = W$. Isolated: $\\Delta U = 0$.",
        detail: "Each special case kills one term, turning the first law into a one-line solver — memorize the four reductions.",
      },
      {
        term: "Problem strategy",
        kind: "insight",
        statement: "Always (1) fix signs of $Q$ and $W$ first, (2) write $\\Delta U = Q - W$, (3) solve, (4) sanity-check: expansion with no heat must cool ($\\Delta U < 0$).",
        detail: "Ninety percent of first-law errors are sign errors on $W$; drawing the $p$-$V$ arrow before computing prevents them.",
      },
      {
        term: "First law as conservation",
        kind: "law",
        statement: "The first law extends mechanical energy conservation to include heat: energy converts among heat, work, and internal storage but is never created or destroyed.",
        detail: "Perpetual-motion machines of the first kind (work from nothing) violate exactly this law.",
      },
    ],
    examples: [
      {
        title: "Compression with cooling",
        problem: "A gas is compressed with $W = -1500\\ \\mathrm{J}$ (work by gas) while losing $Q = -2200\\ \\mathrm{J}$ of heat. Find $\\Delta U$.",
        steps: [
          { label: "Apply", text: "$\\Delta U = Q - W = (-2200) - (-1500) = -700\\ \\mathrm{J}$." },
          { label: "Interpret", text: "Internal energy falls: heat loss beats compression heating — the gas cools." },
          { label: "Reverse check", text: "Expanding back with $+1500\\ \\mathrm{J}$ of work and no heat would give $\\Delta U = -1500\\ \\mathrm{J}$. Consistent direction." },
        ],
        result: "$\\Delta U = -700\\ \\mathrm{J}$.",
      },
      {
        title: "Adiabatic compression heating",
        problem: "An insulated piston compresses $1.00\\ \\mathrm{mol}$ of monatomic gas with $1200\\ \\mathrm{J}$ of work done on it. Find $\\Delta U$ and $\\Delta T$ ($C_{V} = 12.47$).",
        steps: [
          { label: "First law", text: "$Q = 0$, $W = -1200\\ \\mathrm{J}$, so $\\Delta U = 0 - (-1200) = +1200\\ \\mathrm{J}$." },
          { label: "Temperature", text: "$\\Delta U = nC_{V}\\Delta T$ gives $\\Delta T = 1200/(1.00 \\times 12.47) = 96.2\\ \\mathrm{K}$." },
          { label: "Meaning", text: "Shaft work alone heats the gas $96\\ \\mathrm{K}$ — diesel ignition uses this." },
        ],
        result: "$\\Delta U = +1.20\\ \\mathrm{kJ}$, $\\Delta T = +96.2\\ \\mathrm{K}$.",
      },
    ],
    keyTakeaways: [
      "$\\Delta U = Q - W$ governs every thermal process.",
      "Kill-a-term cases: adiabatic, isochoric, cyclic, isolated.",
      "Sign discipline first; arithmetic second.",
    ],
    quiz: [
      {
        q: "A system absorbs $300\\ \\mathrm{J}$ and does $100\\ \\mathrm{J}$ of work. $\\Delta U$ is:",
        options: ["$400\\ \\mathrm{J}$", "$200\\ \\mathrm{J}$", "$-200\\ \\mathrm{J}$", "$300\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$\\Delta U = Q - W = 300 - 100 = 200\\ \\mathrm{J}$.",
      },
      {
        q: "In an adiabatic compression, the work done on the gas:",
        options: ["Leaves $U$ unchanged", "Raises $U$ by exactly the work input", "Escapes as heat", "Lowers $U$"],
        answer: 1,
        explanation: "$Q = 0$ gives $\\Delta U = -W = +|W_{\\mathrm{on}}|$: all shaft work becomes internal energy.",
      },
      {
        q: "A perpetual-motion machine of the first kind violates:",
        options: ["The zeroth law", "The first law (energy conservation)", "The ideal-gas law", "Equipartition"],
        answer: 1,
        explanation: "Creating work without energy input contradicts $\\Delta U = Q - W$.",
      },
      {
        q: "For a complete cycle $\\Delta U$ equals:",
        options: ["$Q_{\\mathrm{net}}$", "$W_{\\mathrm{net}}$", "$0$", "$Q_{h}$"],
        answer: 2,
        explanation: "State functions return to start: $\\Delta U = 0$, forcing $Q_{\\mathrm{net}} = W_{\\mathrm{net}}$.",
      },
    ],
  },
  {
    sectionId: "young-ch19-s5",
    readingTime: 5,
    intro: "Isothermal, adiabatic, isochoric, isobaric — Young classifies the four canonical processes, each killing a different term of the first law, and tabulates their $Q$, $W$, and $\\Delta U$ signatures.",
    objectives: [
      "List the four canonical processes and their held-constant variables",
      "Write the $Q$-$W$-$\\Delta U$ signature of each process",
      "Identify processes from $p$-$V$ curve shapes",
    ],
    concepts: [
      {
        term: "Isothermal process",
        kind: "definition",
        statement: "**Isothermal** means constant $T$ ($\\Delta U = 0$ for ideal gases), so $Q = W = nRT\\ln(V_{2}/V_{1})$: heat flows to pay for work exactly.",
        detail: "Slow expansion in a conducting cylinder with a heat bath approximates it; $p$-$V$ hyperbolas are the visual signature.",
      },
      {
        term: "Adiabatic process",
        kind: "definition",
        statement: "**Adiabatic** means $Q = 0$ (insulation or speed), so $\\Delta U = -W$: expansion cools, compression heats, with $pV^{\\gamma} = $ constant for ideal gases (Section 19.8).",
        detail: "Steeper-than-isotherm $p$-$V$ curves mark adiabats; sound waves and diesel compression are adiabatic.",
      },
      {
        term: "Isochoric process",
        kind: "definition",
        statement: "**Isochoric** means constant $V$ ($W = 0$), so $\\Delta U = Q = nC_{V}\\Delta T$: vertical $p$-$V$ lines, all heat into temperature.",
        detail: "Heating a sealed tank or a bomb calorimeter is isochoric — pressure gauges read temperature directly.",
      },
      {
        term: "Isobaric process",
        kind: "definition",
        statement: "**Isobaric** means constant $p$ ($W = p\\Delta V$), so $Q = nC_{p}\\Delta T$ and $\\Delta U = nC_{V}\\Delta T$: horizontal $p$-$V$ lines splitting heat between work and storage.",
        detail: "Open-pan boiling and piston-with-free-weights processes are isobaric.",
      },
      {
        term: "Reading the diagram",
        kind: "method",
        statement: "Horizontal lines are isobars, vertical lines isochors, hyperbolas isotherms, steep curves adiabats — shape identifies process before any number is computed.",
        detail: "Carnot (Chapter 20) alternates two isotherms with two adiabats; Otto alternates isochors with adiabats.",
      },
    ],
    figures: [
      {
        caption: "Four canonical $p$-$V$ signatures from one state: horizontal isobar, vertical isochor, hyperbolic isotherm, steep adiabat.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four thermodynamic process curves"><line x1="40" y1="160" x2="380" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="100" r="5" fill="currentColor"/><line x1="150" y1="100" x2="330" y2="100" stroke="currentColor" stroke-width="2"/><line x1="150" y1="100" x2="150" y2="30" stroke="currentColor" stroke-width="2"/><path d="M150,100 Q230,95 330,60" fill="none" stroke="currentColor" stroke-width="2"/><path d="M150,100 Q230,90 330,35" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="300" y="115" font-size="11" fill="currentColor">isobar</text><text x="158" y="45" font-size="11" fill="currentColor">isochor</text><text x="280" y="80" font-size="11" fill="currentColor">isotherm</text><text x="280" y="30" font-size="11" fill="currentColor">adiabat</text></svg>`,
        afterConcept: 5,
      },
    ],
    examples: [
      {
        title: "Isochoric pressure cooker",
        problem: "$0.500\\ \\mathrm{mol}$ of diatomic gas ($C_{V} = 20.79$) in a rigid tank warms from $300\\ \\mathrm{K}$ to $400\\ \\mathrm{K}$. Find $Q$, $W$, $\\Delta U$.",
        steps: [
          { label: "Work", text: "$W = 0$ (rigid, $\\Delta V = 0$)." },
          { label: "Heat", text: "$Q = nC_{V}\\Delta T = (0.500)(20.79)(100) = 1039.5\\ \\mathrm{J}$." },
          { label: "Energy", text: "$\\Delta U = Q - W = 1039.5\\ \\mathrm{J}$ — all heat stored." },
        ],
        result: "$Q = \\Delta U = 1.04\\ \\mathrm{kJ}$, $W = 0$.",
      },
      {
        title: "Isobaric heating split",
        problem: "$1.00\\ \\mathrm{mol}$ monatomic gas at $p = 1.013 \\times 10^{5}\\ \\mathrm{Pa}$ warms $100\\ \\mathrm{K}$ isobarically ($C_{V} = 12.47$, $C_{p} = 20.79$). Split $Q$ into $W$ and $\\Delta U$.",
        steps: [
          { label: "Heat in", text: "$Q = nC_{p}\\Delta T = (1.00)(20.79)(100) = 2079\\ \\mathrm{J}$." },
          { label: "Work out", text: "$W = nR\\Delta T = (1.00)(8.314)(100) = 831.4\\ \\mathrm{J}$." },
          { label: "Stored", text: "$\\Delta U = nC_{V}\\Delta T = 1247\\ \\mathrm{J}$; check $1247 + 831 = 2078$. Consistent." },
        ],
        result: "$2.08\\ \\mathrm{kJ}$ in; $0.83\\ \\mathrm{kJ}$ work, $1.25\\ \\mathrm{kJ}$ stored.",
      },
    ],
    keyTakeaways: [
      "Isothermal: $Q = W$, $\\Delta U = 0$ (ideal gas). Adiabatic: $Q = 0$, $\\Delta U = -W$.",
      "Isochoric: $W = 0$, $\\Delta U = Q$. Isobaric: $W = p\\Delta V$.",
      "Curve shape on $p$-$V$ identifies the process at a glance.",
    ],
    quiz: [
      {
        q: "An ideal gas expands adiabatically. Its temperature:",
        options: ["Rises", "Falls", "Stays constant", "First rises then falls"],
        answer: 1,
        explanation: "$Q = 0$ gives $\\Delta U = -W < 0$ for expansion: internal energy and $T$ drop.",
      },
      {
        q: "Which $p$-$V$ curve is steepest for expansion from a common state?",
        options: ["Isotherm", "Adiabat", "Isobar", "Isochor"],
        answer: 1,
        explanation: "Adiabats fall as $V^{-\\gamma}$ with $\\gamma > 1$ versus $V^{-1}$ for isotherms — steeper.",
      },
      {
        q: "Heating a sealed rigid tank is:",
        options: ["Isobaric", "Isochoric with $W = 0$", "Isothermal", "Adiabatic"],
        answer: 1,
        explanation: "Fixed volume means no boundary work; all heat becomes $\\Delta U$.",
      },
    ],
  },
  {
    sectionId: "young-ch19-s6",
    readingTime: 4,
    intro: "Joule's free-expansion experiment delivers a shock: an ideal gas's internal energy ignores volume entirely. Young shows $U = U(T)$ and explains why real gases deviate.",
    objectives: [
      "State that ideal-gas $U$ depends only on $T$ with Joule's evidence",
      "Explain the result via absent intermolecular forces",
      "Describe Joule-Thomson deviations for real gases",
    ],
    concepts: [
      {
        term: "Joule free-expansion experiment",
        kind: "method",
        statement: "Joule let gas rush from one insulated tank into an evacuated twin: $Q = W = 0$ yet thermometers showed $\\Delta T = 0$, so $\\Delta U = 0$ despite doubled volume — hence $U \\ne U(V)$.",
        detail: "Modern repeats detect millikelvin cooling from residual attractions, but the ideal limit $\\Delta T = 0$ is exact.",
      },
      {
        term: "U depends only on T",
        kind: "law",
        statement: "For an ideal gas $(\\partial U/\\partial V)_{T} = 0$: $U = U(T)$ only, with $\\Delta U = nC_{V}\\Delta T$ for any process, not just isochoric.",
        detail: "This universality is why $C_{V}$ data from a tank experiment predict adiabatic and isobaric changes too.",
      },
      {
        term: "Microscopic reason",
        kind: "insight",
        statement: "No intermolecular forces means no distance-dependent potential energy; $U$ is pure molecular kinetic energy, fixed by $T$ alone via $(3/2)kT$-style equipartition.",
        detail: "Real gases store $V$-dependent attraction energy — the $an^{2}/V^{2}$ van der Waals term is exactly this missing piece.",
      },
      {
        term: "Joule-Thomson effect",
        kind: "definition",
        statement: "Throttled real gases change temperature at constant enthalpy; the **Joule-Thomson coefficient** $\\mu = (\\partial T/\\partial P)_{H}$ is positive (cooling) below the inversion temperature.",
        detail: "Nitrogen ($T_{\\mathrm{inv}} = 621\\ \\mathrm{K}$) cools on expansion and liquefies in Linde machines; hydrogen ($205\\ \\mathrm{K}$) must be pre-cooled first.",
      },
      {
        term: "Using U(T) in problems",
        kind: "notation",
        statement: "Write $\\Delta U = nC_{V}\\Delta T$ for ideal gases always — even for isotherms ($\\Delta T = 0 \\Rightarrow \\Delta U = 0$) and adiabats.",
        detail: "The most-used line of the chapter: one formula for $\\Delta U$ across all four canonical processes.",
      },
    ],
    examples: [
      {
        title: "Free expansion of two moles",
        problem: "$2.00\\ \\mathrm{mol}$ of ideal gas free-expands, doubling volume in insulation. Find $W$, $Q$, $\\Delta U$, $\\Delta T$.",
        steps: [
          { label: "Work and heat", text: "$W = 0$ (vacuum), $Q = 0$ (insulated)." },
          { label: "Energy", text: "$\\Delta U = 0 - 0 = 0$." },
          { label: "Temperature", text: "$\\Delta U = nC_{V}\\Delta T = 0$ gives $\\Delta T = 0$ — ideal free expansion is isothermal." },
        ],
        result: "All zeros: $W = Q = \\Delta U = \\Delta T = 0$.",
      },
      {
        title: "U change on an isotherm",
        problem: "$1.50\\ \\mathrm{mol}$ of diatomic gas ($C_{V} = 20.79$) expands isothermally at $350\\ \\mathrm{K}$ doing $2000\\ \\mathrm{J}$ of work. Find $\\Delta U$ and $Q$.",
        steps: [
          { label: "Energy", text: "$\\Delta T = 0$ gives $\\Delta U = nC_{V}(0) = 0$." },
          { label: "Heat", text: "$Q = \\Delta U + W = 0 + 2000 = 2000\\ \\mathrm{J}$ in." },
          { label: "Lesson", text: "$C_{V}$ never forces heat to zero on non-isochoric paths — only $\\Delta U$ uses $C_{V}$ universally." },
        ],
        result: "$\\Delta U = 0$; $Q = 2.00\\ \\mathrm{kJ}$ in.",
      },
    ],
    keyTakeaways: [
      "Ideal-gas $U = U(T)$: Joule's free expansion proves $V$-independence.",
      "No forces means no $V$-dependent potential energy.",
      "$\\Delta U = nC_{V}\\Delta T$ holds for every ideal-gas process.",
    ],
    quiz: [
      {
        q: "Ideal gas free-expands into vacuum with insulation. Which is true?",
        options: ["$T$ rises", "$T$ is unchanged", "$T$ falls to zero", "$p$ is unchanged"],
        answer: 1,
        explanation: "$Q = W = 0$ gives $\\Delta U = 0$, and $U(T)$ forces $\\Delta T = 0$.",
      },
      {
        q: "$\\Delta U = nC_{V}\\Delta T$ for an ideal gas applies:",
        options: ["Only isochorically", "To every process between the same $\\Delta T$", "Only adiabatically", "Never for mixtures"],
        answer: 1,
        explanation: "$U$ is a state function of $T$ alone, so its change depends only on $\\Delta T$.",
      },
      {
        q: "Real gases cool on throttled expansion below inversion temperature because:",
        options: ["They are ideal", "Attractive forces store $V$-dependent energy released as work", "Friction heats them", "The first law fails"],
        answer: 1,
        explanation: "Pulling molecules apart against attraction costs energy from kinetic stores — $U$ gains $V$-dependence.",
      },
    ],
  },
  {
    sectionId: "young-ch19-s7",
    readingTime: 5,
    intro: "Why does heating at constant pressure cost more than at constant volume? Young derives Mayer's relation $C_{p} - C_{V} = R$ from the first law and interprets $\\gamma = C_{p}/C_{V}$ as the work-storage split.",
    objectives: [
      "Derive $C_{p} = C_{V} + R$ for ideal gases",
      "Compute $\\gamma$ for monatomic, diatomic, and polyatomic gases",
      "Explain physically why $C_{p} > C_{V}$",
    ],
    concepts: [
      {
        term: "Heat capacities defined",
        kind: "definition",
        statement: "$C_{V} = (dQ/dT)_{V}$ and $C_{p} = (dQ/dT)_{p}$ are the heat per mole per degree under constant-volume and constant-pressure conditions.",
        detail: "Subscripts matter: the constraint changes where the heat goes (storage versus storage-plus-work).",
      },
      {
        term: "Mayer relation",
        kind: "theorem",
        statement: "For an ideal gas $C_{p} - C_{V} = R$, proved by heating isobarically: $dQ = dU + p\\,dV = C_{V}\\,dT + R\\,dT$.",
        detail: "Per mole the extra $R = 8.314\\ \\mathrm{J/(mol \\cdot K)}$ is exactly the boundary work $p\\,dV = R\\,dT$ per degree.",
      },
      {
        term: "Gamma",
        kind: "notation",
        statement: "**$\\gamma = C_{p}/C_{V}$** is the adiabatic exponent: $1.67$ monatomic, $1.40$ diatomic, $\\sim 1.33$ polyatomic — measured via sound speed $v = \\sqrt{\\gamma RT/M}$.",
        detail: "Larger $f$ dilutes the work fraction, so $\\gamma = (f+2)/f$ falls toward $1$ for complex molecules.",
      },
      {
        term: "Why Cp exceeds Cv",
        kind: "insight",
        statement: "At constant pressure part of each joule leaves as expansion work, so more heat is needed per degree; at constant volume every joule stays as $U$.",
        detail: "For solids and liquids $\\Delta V \\approx 0$ makes $C_{p} \\approx C_{V}$ — the split is a gas phenomenon.",
      },
      {
        term: "Tabulated values",
        kind: "method",
        statement: "Young's Table 19.1: He $C_{V} = 12.47$, $C_{p} = 20.79$; $\\mathrm{N_{2}}$ $20.76$, $29.07$; $\\mathrm{CO_{2}}$ $28.46$, $36.94$ — Mayer holds to $0.1\\ \\mathrm{J/(mol \\cdot K)}$. ",
        detail: "Vibrational thawing raises both $C$'s with $T$ while preserving their $R$ gap.",
      },
    ],
    examples: [
      {
        title: "Mayer check for nitrogen",
        problem: "Given $C_{p} = 29.07\\ \\mathrm{J/(mol \\cdot K)}$ for $\\mathrm{N_{2}}$, predict $C_{V}$ and $\\gamma$.",
        steps: [
          { label: "Subtract R", text: "$C_{V} = C_{p} - R = 29.07 - 8.314 = 20.76\\ \\mathrm{J/(mol \\cdot K)}$." },
          { label: "Gamma", text: "$\\gamma = 29.07/20.76 = 1.400$." },
          { label: "Matches theory", text: "$(5/2)R = 20.785$ and $7/5 = 1.40$ — diatomic equipartition confirmed." },
        ],
        result: "$C_{V} = 20.76$, $\\gamma = 1.40$.",
      },
      {
        title: "Cost of the extra R",
        problem: "Heating $3.00\\ \\mathrm{mol}$ of monatomic gas $40.0\\ \\mathrm{K}$ costs how much more isobarically than isochorically?",
        steps: [
          { label: "Difference", text: "$\\Delta Q = n(C_{p} - C_{V})\\Delta T = nR\\Delta T$." },
          { label: "Numbers", text: "$(3.00)(8.314)(40.0) = 997.7\\ \\mathrm{J}$." },
          { label: "As work", text: "That $998\\ \\mathrm{J}$ is exactly $W = nR\\Delta T$ done on the atmosphere." },
        ],
        result: "$998\\ \\mathrm{J}$ extra — all of it expansion work.",
      },
    ],
    keyTakeaways: [
      "$C_{p} - C_{V} = R$ per mole: the work cost per degree.",
      "$\\gamma = (f+2)/f$: $1.67$, $1.40$, $\\sim 1.33$ by complexity.",
      "Solids and liquids have $C_{p} \\approx C_{V}$ (no expansion work).",
    ],
    quiz: [
      {
        q: "For an ideal gas $C_{p} > C_{V}$ because:",
        options: ["Pressure raises heat capacity mystically", "Isobaric heat partly leaves as $p\\,dV$ work", "Volume changes create heat", "$\\gamma$ is always $2$"],
        answer: 1,
        explanation: "The first law splits isobaric heat into $\\Delta U$ plus work; isochoric heat is pure storage.",
      },
      {
        q: "A gas has $C_{V} = (5/2)R$. Its $\\gamma$ is:",
        options: ["$1.67$", "$1.40$", "$1.29$", "$1.00$"],
        answer: 1,
        explanation: "$C_{p} = (7/2)R$, so $\\gamma = 7/5 = 1.40$ — diatomic.",
      },
      {
        q: "Mayer's relation fails for liquids mainly because:",
        options: ["They are not ideal: $p\\,dV$ work per degree is tiny and $U$ gains $V$-dependence", "They have no temperature", "Their $R$ is larger", "Heat cannot enter liquids"],
        answer: 0,
        explanation: "Near-zero expansion kills the $R$ work term while attractions make $U(V)$-dependent.",
      },
    ],
  },
  {
    sectionId: "young-ch19-s8",
    readingTime: 6,
    intro: "Fast compression heats, fast expansion cools — the adiabatic relations make it exact. Young derives $pV^{\\gamma}$ and $TV^{\\gamma-1}$ constants and computes work for insulated changes from diesel engines to voice-driven sound waves.",
    objectives: [
      "Derive $p_{1}V_{1}^{\\gamma} = p_{2}V_{2}^{\\gamma}$ and $T_{1}V_{1}^{\\gamma-1} = T_{2}V_{2}^{\\gamma-1}$",
      "Compute adiabatic work via $W = (p_{1}V_{1} - p_{2}V_{2})/(\\gamma - 1)$",
      "Apply adiabats to compression heating and expansion cooling",
    ],
    concepts: [
      {
        term: "Adiabatic condition",
        kind: "definition",
        statement: "An **adiabatic** change has $Q = 0$ — via insulation, speed (sound waves), or steady-flow throttling — so $dU = -p\\,dV$ at every step.",
        detail: "Approximately adiabatic: bicycle pumps, diesel compression, interstellar cloud collapse.",
      },
      {
        term: "Poisson relations",
        kind: "theorem",
        statement: "For ideal-gas adiabats $pV^{\\gamma} = $ constant, $TV^{\\gamma-1} = $ constant, and $T^{\\gamma}p^{1-\\gamma} = $ constant, derived by integrating $C_{V}\\,dT = -(RT/V)\\,dV$.",
        detail: "Each form suits different given pairs $(p,V)$, $(T,V)$, $(T,p)$ — pick the one matching the data.",
      },
      {
        term: "Adiabatic work",
        kind: "theorem",
        statement: "Adiabatic work by the gas is $W = (p_{1}V_{1} - p_{2}V_{2})/(\\gamma - 1) = nC_{V}(T_{1} - T_{2})$: the internal-energy overdraft pays for expansion.",
        detail: "Expansion ($T_{2} < T_{1}$) gives $W > 0$; the formula needs only endpoints, never the path integral.",
      },
      {
        term: "Adiabats are steeper",
        kind: "insight",
        statement: "Since $\\gamma > 1$, adiabats fall faster than isotherms on $p$-$V$: expansion cools the gas, dropping pressure both by dilution and by temperature loss.",
        detail: "Crossing behavior forbids cycles of only adiabats — engines must alternate with heat-exchanging legs (Chapter 20).",
      },
      {
        term: "Free versus reversible adiabats",
        kind: "method",
        statement: "Reversible adiabats obey $pV^{\\gamma} = $ constant; irreversible ones (free expansion, throttling) do not — entropy rises instead (Chapter 20 preview).",
        detail: "Only quasistatic $p$ admits the integrating derivation; turbulence breaks the Poisson relations.",
      },
    ],
    figures: [
      {
        caption: "Adiabat versus isotherm through one state: the adiabat ($pV^{\\gamma}$) dives steeper because expansion cools the gas.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Adiabat steeper than isotherm"><line x1="40" y1="160" x2="380" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor" stroke-width="1.5"/><circle cx="140" cy="90" r="5" fill="currentColor"/><path d="M140,90 Q230,95 350,120" fill="none" stroke="currentColor" stroke-width="2"/><path d="M140,90 Q230,100 350,150" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 4"/><text x="270" y="110" font-size="12" fill="currentColor">isotherm</text><text x="270" y="145" font-size="12" fill="currentColor">adiabat</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Diesel compression heating",
        problem: "A diesel cylinder compresses air ($\\gamma = 1.40$) adiabatically from $V_{1}$ to $V_{1}/15$ starting at $T_{1} = 300\\ \\mathrm{K}$. Find $T_{2}$ and $p_{2}/p_{1}$.",
        steps: [
          { label: "Temperature", text: "$T_{2} = T_{1}(V_{1}/V_{2})^{\\gamma-1} = 300(15)^{0.40}$. With $\\ln 15 = 2.708$, $15^{0.40} = e^{1.0832} = 2.954$." },
          { label: "Evaluate", text: "$T_{2} = 300(2.954) = 886\\ \\mathrm{K}$ ($613^{\\circ}\\mathrm{C}$) — above diesel's ignition point." },
          { label: "Pressure", text: "$p_{2}/p_{1} = 15^{1.40} = 15(2.954) = 44.3$." },
        ],
        result: "$T_{2} = 886\\ \\mathrm{K}$, $p_{2} = 44\\,p_{1}$ — compression ignition.",
      },
      {
        title: "Adiabatic expansion work",
        problem: "$1.00\\ \\mathrm{mol}$ monatomic gas ($\\gamma = 5/3$, $C_{V} = 12.47$) cools adiabatically from $500\\ \\mathrm{K}$ to $300\\ \\mathrm{K}$. Find work done by the gas.",
        steps: [
          { label: "Formula", text: "$W = nC_{V}(T_{1} - T_{2}) = (1.00)(12.47)(500 - 300)$." },
          { label: "Evaluate", text: "$W = (12.47)(200) = 2494\\ \\mathrm{J}$." },
          { label: "Check", text: "$Q = 0$ so $\\Delta U = -2494\\ \\mathrm{J} = nC_{V}(-200\\ \\mathrm{K})$. Consistent." },
        ],
        result: "$W = 2.49\\ \\mathrm{kJ}$ by the gas.",
      },
    ],
    keyTakeaways: [
      "Adiabats: $pV^{\\gamma}$, $TV^{\\gamma-1}$, $T^{\\gamma}p^{1-\\gamma}$ constant.",
      "Work $W = (p_{1}V_{1} - p_{2}V_{2})/(\\gamma-1)$ needs endpoints only.",
      "Compression ignites (diesel); expansion chills — steeper than isotherms.",
    ],
    quiz: [
      {
        q: "Ideal gas compressed adiabatically from $V$ to $V/8$ with $\\gamma = 1.40$ warms by factor:",
        options: ["$8$", "$8^{0.40} = 2.30$", "$8^{1.40}$", "$1$ (no change)"],
        answer: 1,
        explanation: "$T_{2}/T_{1} = (V_{1}/V_{2})^{\\gamma-1} = 8^{0.40} = e^{0.40\\ln 8} = 2.30$.",
      },
      {
        q: "Adiabatic expansion work comes from:",
        options: ["Incoming heat", "Stored internal energy, so the gas cools", "External work input", "Nowhere — it is free"],
        answer: 1,
        explanation: "$Q = 0$ forces $W = -\\Delta U$: the gas spends its own $U(T)$.",
      },
      {
        q: "Which statement is true of reversible adiabats?",
        options: ["They coincide with isotherms", "They are steeper than isotherms on $p$-$V$", "They are horizontal lines", "They are vertical lines"],
        answer: 1,
        explanation: "$p \\propto V^{-\\gamma}$ with $\\gamma > 1$ falls faster than $p \\propto V^{-1}$.",
      },
    ],
  },
]
