import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 20: Direct Current Circuits (Sections 20.1 – 20.7)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh20Content: SectionContent[] = [
  {
    sectionId: "coletta-ch20-s1",
    readingTime: 5,
    intro: "A circuit is a loop where charge leaves the source, spends energy in devices, and returns for more. Coletta sets the vocabulary: series versus parallel, shorts and opens, and schematic symbols. Every analysis in this chapter starts by naming the topology correctly.",
    objectives: [
      "Distinguish series from parallel connections by current versus voltage sharing",
      "Read schematic symbols for battery, resistor, switch, and ground",
      "Identify shorts, opens, and the single-loop constraint"
    ],
    concepts: [
      {
        term: "Circuit loop",
        kind: "definition",
        statement: "A **circuit** is a closed conducting path: without a complete loop steady current cannot flow because charge has nowhere to return.",
        detail: "A switch works by opening that loop, dropping the current everywhere to zero at once."
      },
      {
        term: "Series connection",
        kind: "definition",
        statement: "**Series** devices share one current in a single chain, so the same $I$ passes through each while voltages divide: $V = V_{1} + V_{2}$.",
        detail: "Old holiday lights wired in series all died when one bulb opened, which is why modern strings parallelize."
      },
      {
        term: "Parallel connection",
        kind: "definition",
        statement: "**Parallel** devices share one voltage across common nodes while currents divide: $I = I_{1} + I_{2}$ with $V$ equal on each branch.",
        detail: "Household outlets parallelize so each appliance sees the full $120$ V independently."
      },
      {
        term: "Short and open",
        kind: "definition",
        statement: "A **short** is a zero-resistance bypass carrying huge current, while an **open** is a break carrying zero current with full voltage across it.",
        detail: "Dropped wrenches short batteries dramatically; a blown fuse protects by deliberately opening."
      },
      {
        term: "Schematic symbols",
        kind: "notation",
        statement: "Batteries draw as long-short plate pairs ($\\mathcal{E}$), resistors as zigzags or boxes ($R$), with dots marking joined nodes and hops marking unjoined crossings.",
        detail: "Reading dots correctly separates true junctions from drawing overlaps, the most common beginner error." }
    ],
    figures: [
      {
        caption: "Series chain shares $I$ while parallel branches share $V$",
        svg: '<svg role="img" aria-label="Series chain shares I while parallel branches share V" viewBox="0 0 400 140" width="100%" height="140"><rect x="30" y="30" width="150" height="80" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="60" y="55" width="40" height="16" fill="none" stroke="currentColor" stroke-width="2"/><rect x="120" y="55" width="40" height="16" fill="none" stroke="currentColor" stroke-width="2"/><text x="105" y="125" text-anchor="middle" font-size="12" fill="currentColor">series: one I</text><rect x="230" y="30" width="140" height="80" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="250" y1="70" x2="350" y2="70" stroke="currentColor" stroke-width="1.5"/><rect x="270" y="45" width="40" height="14" fill="none" stroke="currentColor" stroke-width="2"/><rect x="270" y="76" width="40" height="14" fill="none" stroke="currentColor" stroke-width="2"/><text x="300" y="125" text-anchor="middle" font-size="12" fill="currentColor">parallel: one V</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Two-bulb series",
        problem: "Two $6.0$ ohm bulbs in series connect to $12$ V. Find the current and each bulb voltage.",
        steps: [
          { label: "Total resistance", text: "Series adds: $R = 6.0 + 6.0 = 12$ ohm." },
          { label: "Current", text: "$I = V/R = 12/12 = 1.0$ A through both." },
          { label: "Each voltage", text: "$V_{1} = IR_{1} = 6.0$ V, half the supply each." }
        ],
        result: "$1.0$ A with $6.0$ V per bulb."
      },
      {
        title: "Two-branch parallel",
        problem: "A $4.0$ ohm and $12$ ohm resistor parallel across $24$ V. Find each branch current.",
        steps: [
          { label: "Branch currents", text: "$I_{1} = 24/4.0 = 6.0$ A and $I_{2} = 24/12 = 2.0$ A." },
          { label: "Total", text: "$I = 8.0$ A from the supply." },
          { label: "Check power", text: "$P = 24 \\times 8.0 = 192$ W matches $144 + 48$ W per branch." }
        ],
        result: "$6.0$ A and $2.0$ A branches."
      }
    ],
    keyTakeaways: [
      "Series shares current and divides voltage; parallel shares voltage and divides current.",
      "Schematics use standard symbols with dots marking true junctions.",
      "Shorts maximize current while opens zero it."
    ],
    quiz: [
      {
        q: "Two resistors in series carry:",
        options: ["The same power always", "Zero current", "The same current", "The same voltage"],
        answer: 2,
        explanation: "One chain means one current, with voltages dividing by resistance."
      },
      {
        q: "An open switch in a single loop gives:",
        options: ["A short", "Maximum current", "Zero current everywhere", "Double voltage"],
        answer: 2,
        explanation: "The loop is broken, so no charge can circulate and current is zero throughout."
      },
      {
        q: "Household appliances are wired in parallel so that each:",
        options: ["Shares one current", "Sees full line voltage", "Turns off together", "Doubles resistance"],
        answer: 1,
        explanation: "Parallel branches each span the full $120$ V independently."
      }
    ]
  },
  {
    sectionId: "coletta-ch20-s2",
    readingTime: 6,
    intro: "Kirchhoff's rules are conservation laws wearing circuit clothes: charge at junctions and energy around loops. Coletta states the junction rule $\\sum I = 0$ and loop rule $\\sum \\Delta V = 0$ with sign conventions that remove guesswork. They solve any DC network.",
    objectives: [
      "Apply the junction rule $\\sum I_{in} = \\sum I_{out}$ at any node",
      "Traverse loops with $\\sum \\Delta V = 0$ using consistent sign rules",
      "Set up the independent equations for a two-loop network"
    ],
    concepts: [
      {
        term: "Junction rule",
        kind: "law",
        statement: "At any node $\\sum I_{in} = \\sum I_{out}$: charge cannot accumulate, so what flows in flows out.",
        detail: "A $5$ A wire splitting into $2$ A and an unknown branch forces $3$ A in the second branch."
      },
      {
        term: "Loop rule",
        kind: "law",
        statement: "Around any closed loop $\\sum \\Delta V = 0$: gains from batteries balance drops across resistors, since potential returns to its start.",
        detail: "This is energy conservation per coulomb: each charge regains at the source exactly what it spent in the loads."
      },
      {
        term: "Sign convention",
        kind: "method",
        statement: "Crossing a resistor with the traversal gives $-IR$ and against it $+IR$; crossing a battery from $-$ to $+$ gives $+\\mathcal{E}$ and $+$ to $-$ gives $-\\mathcal{E}$.",
        detail: "A negative solved current simply flows opposite the guessed arrow, never a mistake, only a direction correction."
      },
      {
        term: "Independent equations",
        kind: "method",
        statement: "A network with $m$ branches needs junction equations plus enough loops so every branch is traversed: typically loops $=$ meshes of the circuit.",
        detail: "Double-traversing the same loop adds no information, so each new equation must include a previously unused branch."
      },
      {
        term: "Single-loop circuit",
        kind: "theorem",
        statement: "One loop with $\\mathcal{E}$ and total $R$ carries $I = \\mathcal{E}/R_{total}$ including internal $r$, with terminal $V = \\mathcal{E} - Ir$.",
        detail: "This collapses the full machinery to Ohm's law whenever the topology is a single ring." }
    ],
    examples: [
      {
        title: "Single loop with internal resistance",
        problem: "A $12$ V battery ($r = 1.0$ ohm) drives $5.0$ ohm. Find $I$ and terminal voltage.",
        steps: [
          { label: "Loop equation", text: "$\\mathcal{E} - Ir - IR = 0$, so $I = 12/(1.0 + 5.0) = 2.0$ A." },
          { label: "Terminal voltage", text: "$V = \\mathcal{E} - Ir = 12 - 2.0 = 10$ V." },
          { label: "Check", text: "Load drop $2.0 \\times 5.0 = 10$ V matches the terminal voltage." }
        ],
        result: "$2.0$ A with $10$ V at terminals."
      },
      {
        title: "Junction split",
        problem: "A $9.0$ A feed reaches a node with branches drawing $3.5$ A and $2.5$ A plus one unknown. Find the unknown branch.",
        steps: [
          { label: "Junction rule", text: "$9.0 = 3.5 + 2.5 + I_{x}$." },
          { label: "Solve", text: "$I_{x} = 9.0 - 6.0 = 3.0$ A outward." },
          { label: "Meaning", text: "Any other assumption about direction would return a negative value of the same magnitude." }
        ],
        result: "$3.0$ A leaving the node."
      }
    ],
    keyTakeaways: [
      "Junctions conserve charge and loops conserve energy per charge.",
      "Sign rules make traversal mechanical: $\\pm IR$ and $\\pm\\mathcal{E}$.",
      "Negative answers correct arrow guesses, not the physics."
    ],
    quiz: [
      {
        q: "Traversing a resistor with the assumed current contributes:",
        options: ["$-IR$", "$+\\mathcal{E}$", "Zero", "$+IR$"],
        answer: 0,
        explanation: "Moving with the current runs downhill in potential, a drop of $IR$."
      },
      {
        q: "A solved branch current comes out $-2.0$ A. This means:",
        options: ["The branch is open", "Voltage is zero", "Kirchhoff failed", "It flows opposite the arrow at $2.0$ A"],
        answer: 3,
        explanation: "The magnitude is right and the sign corrects the guessed direction."
      },
      {
        q: "The loop rule is fundamentally:",
        options: ["Newton's third law", "Charge conservation", "Energy conservation per charge", "Magnetic flux rule"],
        answer: 2,
        explanation: "Returning to the same potential means net work per charge around the loop is zero."
      }
    ]
  },
  {
    sectionId: "coletta-ch20-s3",
    readingTime: 6,
    intro: "Equivalent resistance compresses tangles of resistors into one value the battery sees. Coletta derives $R_{s} = \\sum R_{i}$ and $1/R_{p} = \\sum 1/R_{i}$, then reduces ladders stepwise from the far end. Reduction order is the whole skill.",
    objectives: [
      "Compute series $R_{s} = R_{1} + R_{2}$ and parallel $R_{p} = R_{1}R_{2}/(R_{1}+R_{2})$",
      "Reduce combo networks stepwise and back-solve branch currents",
      "Explain why parallel always lowers resistance"
    ],
    concepts: [
      {
        term: "Series equivalent",
        kind: "theorem",
        statement: "Series resistors add: $R_{s} = R_{1} + R_{2} + \\cdots$, because one current crosses successive drops $V = I(R_{1} + R_{2})$.",
        detail: "Three $10$ ohm resistors in series present $30$ ohm to the source."
      },
      {
        term: "Parallel equivalent",
        kind: "theorem",
        statement: "Parallel resistors combine reciprocally: $1/R_{p} = 1/R_{1} + 1/R_{2}$, or $R_{p} = R_{1}R_{2}/(R_{1} + R_{2})$ for two.",
        detail: "A $6$ and $3$ ohm pair gives $2$ ohm, less than either branch alone."
      },
      {
        term: "Parallel lowers resistance",
        kind: "insight",
        statement: "Each added branch opens another lane for current, so conductance $G = 1/R$ adds and equivalent $R$ must fall.",
        detail: "Ten $100$ ohm resistors in parallel give $10$ ohm: many weak lanes beat one."
      },
      {
        term: "Reduction order",
        kind: "method",
        statement: "Collapse the network from the end farthest from the source inward, redrawing after each step, then unfold voltages and currents outward.",
        detail: "Solving inward finds total $I$; walking back out divides $V$ and $I$ at each fork by the branch values."
      },
      {
        term: "Voltage divider",
        kind: "method",
        statement: "Two series resistors split $V$ as $V_{1} = V R_{1}/(R_{1} + R_{2})$, the basis of volume knobs and sensor biases.",
        detail: "Equal resistors halve the supply; a $1$:$9$ ratio taps $10$ percent of it." }
    ],
    examples: [
      {
        title: "Combo reduction",
        problem: "A $4.0$ ohm and $6.0$ ohm pair in parallel sits in series with $3.0$ ohm across $24$ V. Find total current.",
        steps: [
          { label: "Parallel block", text: "$R_{p} = 4.0 \\times 6.0/10.0 = 2.4$ ohm." },
          { label: "Total", text: "$R = 2.4 + 3.0 = 5.4$ ohm." },
          { label: "Current", text: "$I = 24/5.4 \\approx 4.44$ A through the battery and $3.0$ ohm resistor." }
        ],
        result: "About $4.4$ A total."
      },
      {
        title: "Branch currents back-solve",
        problem: "In the same circuit, find the voltage across the parallel block and the $4.0$ ohm current.",
        steps: [
          { label: "Series drop", text: "$V_{3} = 4.44 \\times 3.0 \\approx 13.3$ V." },
          { label: "Parallel voltage", text: "$V_{p} = 24 - 13.3 = 10.7$ V." },
          { label: "Branch", text: "$I_{4} = 10.7/4.0 \\approx 2.67$ A." }
        ],
        result: "About $2.7$ A in the $4.0$ ohm branch."
      }
    ],
    keyTakeaways: [
      "Series adds directly while parallel adds reciprocally.",
      "Parallel equivalent is always smaller than the smallest branch.",
      "Reduce inward from the far end, then unfold outward."
    ],
    quiz: [
      {
        q: "A $10$ ohm and $15$ ohm parallel pair equals:",
        options: ["$25$ ohm", "$6.0$ ohm", "$5.0$ ohm", "$150$ ohm"],
        answer: 1,
        explanation: "$R_{p} = 10 \\times 15/25 = 150/25 = 6.0$ ohm."
      },
      {
        q: "Adding a parallel branch to a network:",
        options: ["Lowers total $R$", "Leaves $R$ unchanged", "Opens the circuit", "Raises total $R$"],
        answer: 0,
        explanation: "More parallel lanes mean more conductance, so equivalent resistance falls."
      },
      {
        q: "Two equal series resistors across $V$ give each:",
        options: ["$2V$", "Zero", "$V$", "$V/2$"],
        answer: 3,
        explanation: "The divider $VR/(R + R)$ hands half the supply to each."
      }
    ]
  },
  {
    sectionId: "coletta-ch20-s4",
    readingTime: 7,
    intro: "Real circuits have several batteries pushing in different loops at once. Coletta solves multiloop networks with full Kirchhoff systems: label currents, write junctions and loops, and solve. The two-battery case shows charging versus discharging clearly.",
    objectives: [
      "Label branch currents and write the full Kirchhoff system for two loops",
      "Solve two-loop networks for currents, terminal voltages, and power",
      "Tell whether a battery is supplying or absorbing power"
    ],
    concepts: [
      {
        term: "Branch-current method",
        kind: "method",
        statement: "Assign an arrow to every branch, write $\\sum I = 0$ at nodes and $\\sum \\Delta V = 0$ for each mesh, then solve the linear system.",
        detail: "Two meshes with a shared branch give two loop equations plus one junction relation for three branch currents."
      },
      {
        term: "Opposing batteries",
        kind: "insight",
        statement: "The stronger battery wins: it drives current backward through the weaker one, which then **charges** ($V > \\mathcal{E}$) instead of discharging.",
        detail: "Car alternators exploit this by holding above battery voltage to force recharge current."
      },
      {
        term: "Power audit",
        kind: "method",
        statement: "Check every solution with $\\sum \\mathcal{E}I = \\sum I^{2}R$: chemical power in equals resistive heat out, up to sign for charging batteries.",
        detail: "A mismatch locates the algebra error faster than re-solving blindly."
      },
      {
        term: "Ground reference",
        kind: "notation",
        statement: "**Ground** ($0$ V) is the arbitrary potential datum; only differences matter, so one node per circuit is declared zero for convenience.",
        detail: "Chassis ground in cars is the return conductor itself, not the earth."
      },
      {
        term: "Bridge balance",
        kind: "theorem",
        statement: "A Wheatstone bridge with arms $R_{1}/R_{2} = R_{3}/R_{4}$ carries no center current, letting unknown $R_{x} = R_{known} \\times$ ratio be read at null.",
        detail: "Null methods beat meter accuracy because zero current means zero lead-resistance error." }
    ],
    figures: [
      {
        caption: "Two-loop network: label $I_{1}$, $I_{2}$, $I_{3}$ then write one junction plus two loop equations",
        svg: '<svg role="img" aria-label="Two-loop network: label I_1, I_2, I_3 then write one junction plus two loop equations" viewBox="0 0 400 150" width="100%" height="150"><rect x="80" y="30" width="120" height="90" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="200" y="30" width="120" height="90" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="140" y1="30" x2="140" y2="20" stroke="currentColor" stroke-width="2"/><text x="140" y="14" text-anchor="middle" font-size="11" fill="currentColor">I1</text><text x="260" y="14" text-anchor="middle" font-size="11" fill="currentColor">I2</text><text x="200" y="140" text-anchor="middle" font-size="11" fill="currentColor">shared branch I3 = I1 + I2</text><rect x="95" y="60" width="30" height="12" fill="none" stroke="currentColor" stroke-width="2"/><rect x="240" y="60" width="30" height="12" fill="none" stroke="currentColor" stroke-width="2"/><rect x="192" y="60" width="16" height="30" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Two batteries, one load",
        problem: "Batteries $12$ V and $6.0$ V (plus to plus through a $4.0$ ohm shared load, each with $r = 1.0$ ohm in its own lead) oppose. Find the load current direction and size using the outer loop.",
        steps: [
          { label: "Outer loop", text: "Net EMF $12 - 6.0 = 6.0$ V drives $1.0 + 4.0 + 1.0 = 6.0$ ohm, so $I = 1.0$ A." },
          { label: "Direction", text: "The $12$ V battery wins; current enters the $+$ terminal of the $6.0$ V battery, charging it." },
          { label: "Load voltage", text: "$V_{load} = 1.0 \\times 4.0 = 4.0$ V." }
        ],
        result: "$1.0$ A with the weaker battery charging."
      },
      {
        title: "Power audit",
        problem: "In the same circuit verify energy balance.",
        steps: [
          { label: "Supplied", text: "$12 \\times 1.0 = 12$ W from the strong battery." },
          { label: "Absorbed", text: "Resistors take $1^{2}(1 + 4 + 1) = 6.0$ W and the weak battery absorbs $6.0 \\times 1.0 = 6.0$ W." },
          { label: "Balance", text: "$12 = 6.0 + 6.0$ W, which audits clean." }
        ],
        result: "Power balances at $12$ W."
      }
    ],
    keyTakeaways: [
      "Multiloop means branch arrows plus junction and mesh equations.",
      "Stronger sources charge weaker ones by reverse current.",
      "Audit with $\\sum \\mathcal{E}I = \\sum I^{2}R$ to catch errors."
    ],
    quiz: [
      {
        q: "Current enters the positive terminal of a battery. The battery is:",
        options: ["Shorted", "Supplying power", "Being charged", "Disconnected"],
        answer: 2,
        explanation: "Forward discharge leaves via +, so entering + means absorbing $\\mathcal{E}I$ as charging."
      },
      {
        q: "A two-mesh circuit with $3$ branches needs:",
        options: ["One equation", "One junction plus two loops", "Three loops only", "No junction rule"],
        answer: 1,
        explanation: "Three unknown branch currents need three independent relations: junctions plus each mesh."
      },
      {
        q: "Bridge balance $R_{1}/R_{2} = R_{3}/R_{4}$ implies center current is:",
        options: ["Zero", "Equal to supply", "Alternating", "Maximum"],
        answer: 0,
        explanation: "Balanced ratios equalize the midpoint potentials, so no voltage drives the center branch."
      }
    ]
  },
  {
    sectionId: "coletta-ch20-s5",
    readingTime: 5,
    intro: "Meters must observe without disturbing: ammeters join in series with near-zero resistance and voltmeters span in parallel with near-infinite resistance. Coletta shows ideal versus real meters and the shunt-multiplier tricks that extend ranges. Wrong hookup ruins both reading and meter.",
    objectives: [
      "Place ammeters in series and voltmeters in parallel with the target",
      "Explain loading: low $R_{A}$ and high $R_{V}$ ideals",
      "Design shunt and multiplier resistors for extended ranges"
    ],
    concepts: [
      {
        term: "Ideal meters",
        kind: "definition",
        statement: "An ideal **ammeter** has $R = 0$ (invisible in series) and an ideal **voltmeter** has $R = \\infty$ (invisible in parallel).",
        detail: "Real meters approach these: milliohms for ammeters, megohms for voltmeters."
      },
      {
        term: "Ammeter loading",
        kind: "insight",
        statement: "An ammeter's resistance adds to the branch, so it always reads slightly low: $I = \\mathcal{E}/(R + R_{A})$.",
        detail: "A $0.50$ ohm meter in a $10$ ohm circuit steals nearly $5$ percent of the current."
      },
      {
        term: "Voltmeter loading",
        kind: "insight",
        statement: "A voltmeter bleeds a parallel path, so it always reads slightly low: $R_{eq} = RR_{V}/(R + R_{V}) < R$.",
        detail: "Measuring a $1$ Mohm divider with a $1$ Mohm meter halves the reading, a classic loading disaster."
      },
      {
        term: "Shunt resistor",
        kind: "method",
        statement: "A low **shunt** $R_{s}$ in parallel with a galvanometer of $R_{g}$ extends current range: $R_{s} = I_{g}R_{g}/(I - I_{g})$.",
        detail: "To read $1.0$ A with a $1.0$ mA, $50$ ohm movement needs $R_{s} \\approx 0.050$ ohm."
      },
      {
        term: "Multiplier resistor",
        kind: "method",
        statement: "A high **multiplier** $R_{m}$ in series extends voltage range: $R_{m} = V/I_{g} - R_{g}$.",
        detail: "A $1.0$ mA movement reads $10$ V with $R_{m} \\approx 10{,}000$ ohm in series." }
    ],
    examples: [
      {
        title: "Shunt design",
        problem: "A $100$ microA, $1.0$ kohm galvanometer must read $2.0$ A. Find the shunt.",
        steps: [
          { label: "Galvanometer drop", text: "$V_{g} = 10^{-4} \\times 1000 = 0.10$ V." },
          { label: "Shunt current", text: "$I_{s} = 2.0 - 10^{-4} \\approx 1.9999$ A at the same $0.10$ V." },
          { label: "Shunt", text: "$R_{s} = 0.10/1.9999 \\approx 0.050$ ohm." }
        ],
        result: "About $50$ milliohms in parallel."
      },
      {
        title: "Voltmeter loading check",
        problem: "A $10$ Mohm meter spans a $4.7$ Mohm resistor fed by $10$ V with a $4.7$ Mohm partner. Estimate the error.",
        steps: [
          { label: "Unloaded", text: "Divider gives $5.0$ V." },
          { label: "Loaded", text: "Meter parallels one arm: $4.7 \\parallel 10 = 3.197$ Mohm, so $V = 10 \\times 3.197/(3.197 + 4.7) \\approx 4.05$ V." },
          { label: "Error", text: "Reads $0.95$ V low, about $19$ percent, because $R_{V}$ is not far above $R$." }
        ],
        result: "About $4.0$ V instead of $5.0$ V."
      }
    ],
    keyTakeaways: [
      "Ammeters go in series with tiny $R$; voltmeters across with huge $R$.",
      "Both meters read low by loading the circuit.",
      "Shunts parallel and multipliers series-extend galvanometer ranges."
    ],
    quiz: [
      {
        q: "An ammeter should ideally have resistance:",
        options: ["Equal to the load", "Negative", "Infinite", "Zero"],
        answer: 3,
        explanation: "Zero series resistance leaves the branch current unchanged."
      },
      {
        q: "A voltmeter across a high-resistance divider reads low because it:",
        options: ["Has zero capacitance", "Adds series resistance", "Bleeds parallel current", "Reverses polarity"],
        answer: 2,
        explanation: "Its finite $R_{V}$ parallels the arm and lowers the equivalent resistance and voltage."
      },
      {
        q: "To double a voltmeter's range, add a series resistor equal to:",
        options: ["Zero", "The meter resistance", "Half the meter resistance", "Infinite"],
        answer: 1,
        explanation: "Equal $R_{m} = R_{g}$ doubles total resistance so full-scale current needs twice the voltage."
      }
    ]
  },
  {
    sectionId: "coletta-ch20-s6",
    readingTime: 6,
    intro: "Resistor-capacitor circuits add time: charging and discharging trace exponentials with time constant $\\tau = RC$. Coletta derives $q = Q_{max}(1 - e^{-t/RC})$ and the mirror decay, then uses half-lives and the five-tau rule. Camera flashes and wipers live here.",
    objectives: [
      "Write charge and voltage for charging $1 - e^{-t/RC}$ and discharging $e^{-t/RC}$",
      "Use the time constant $\\tau = RC$ and the five-tau settled rule",
      "Analyze RC timing and flash-discharge applications"
    ],
    concepts: [
      {
        term: "RC time constant",
        kind: "definition",
        statement: "The **time constant** $\\tau = RC$ in seconds sets the pace: after $\\tau$ a charging capacitor reaches $63$ percent and a discharging one falls to $37$ percent.",
        detail: "Big $R$ trickles charge slowly and big $C$ needs more of it, so both lengthen $\\tau$."
      },
      {
        term: "Charging equation",
        kind: "theorem",
        statement: "Charging through $R$ toward $\\mathcal{E}$ gives $q = Q_{max}(1 - e^{-t/RC})$ and $V_{C} = \\mathcal{E}(1 - e^{-t/RC})$ with $Q_{max} = C\\mathcal{E}$.",
        detail: "Current starts at $\\mathcal{E}/R$ and decays as $e^{-t/RC}$ because the growing capacitor back-voltage chokes the flow."
      },
      {
        term: "Discharging equation",
        kind: "theorem",
        statement: "Discharging $C$ through $R$ gives $q = Q_{0}e^{-t/RC}$ and $V = V_{0}e^{-t/RC}$, halving every $t_{1/2} = RC\\ln 2 \\approx 0.693\\,RC$.",
        detail: "A $1.0$ kohm, $1000$ muF pair halves voltage every $0.69$ s from any starting level."
      },
      {
        term: "Five-tau rule",
        kind: "method",
        statement: "After $5\\tau$ the transient is $99.3$ percent done ($e^{-5} \\approx 0.0067$), so $5RC$ is the practical settling time.",
        detail: "Timing circuits pick $R$ and $C$ so $5\\tau$ brackets the desired delay with margin."
      },
      {
        term: "Flash and timing uses",
        kind: "insight",
        statement: "Cameras charge slowly through large $R$ then dump through the low-resistance flash tube for a brilliant millisecond pulse.",
        detail: "Intermittent wipers similarly charge to a threshold, flip the relay, and repeat." }
    ],
    figures: [
      {
        caption: "Charging $1 - e^{-t/RC}$ rises to $\\mathcal{E}$ while discharge $e^{-t/RC}$ falls to zero",
        svg: '<svg role="img" aria-label="Charging 1 - e^-t/RC rises to mathcalE while discharge e^-t/RC falls to zero" viewBox="0 0 400 150" width="100%" height="150"><line x1="40" y1="10" x2="40" y2="130" stroke="currentColor" stroke-width="1"/><line x1="40" y1="130" x2="380" y2="130" stroke="currentColor" stroke-width="1"/><path d="M40,130 C120,128 160,60 380,35" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M40,35 C160,40 220,100 380,128" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 4"/><text x="300" y="28" font-size="12" fill="currentColor">charging</text><text x="300" y="118" font-size="12" fill="currentColor">discharging</text><line x1="150" y1="130" x2="150" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.6"/><text x="150" y="143" font-size="11" fill="currentColor">RC</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Charging to threshold",
        problem: "A $10$ kohm, $100$ muF RC charges from $12$ V. When does $V_{C}$ reach $8.0$ V?",
        steps: [
          { label: "Time constant", text: "$\\tau = RC = 10^{4} \\times 10^{-4} = 1.0$ s." },
          { label: "Solve", text: "$8.0 = 12(1 - e^{-t})$, so $e^{-t} = 1/3$ and $t = \\ln 3 \\approx 1.099$ s." },
          { label: "Check", text: "Two-thirds charged in about one $\\tau$, consistent with $63$ percent per $\\tau$." }
        ],
        result: "About $1.1$ s."
      },
      {
        title: "Camera flash decay",
        problem: "A $200$ muF capacitor at $300$ V discharges through a $5.0$ ohm flash tube. Find initial current and energy.",
        steps: [
          { label: "Initial current", text: "$I_{0} = V_{0}/R = 300/5.0 = 60$ A." },
          { label: "Time constant", text: "$\\tau = 5.0 \\times 200 \\times 10^{-6} = 1.0$ ms, so the flash is millisecond-scale." },
          { label: "Energy", text: "$U = CV^{2}/2 = 200 \\times 10^{-6} \\times 90000/2 = 9.0$ J per flash." }
        ],
        result: "$60$ A peak delivering $9.0$ J in about a millisecond."
      }
    ],
    keyTakeaways: [
      "Charge and discharge are exponentials in $t/RC$.",
      "One $\\tau$ means $63$ percent charged or $37$ percent left.",
      "Five time constants settle any RC transient."
    ],
    quiz: [
      {
        q: "A charging RC reaches $63$ percent of $\\mathcal{E}$ after:",
        options: ["$RC$", "$2RC$", "$5RC$", "$RC/2$"],
        answer: 0,
        explanation: "By definition $1 - e^{-1} \\approx 0.632$ at $t = RC$."
      },
      {
        q: "Discharging voltage halves every:",
        options: ["$2RC$", "$5RC$", "$RC$", "$0.693\\,RC$"],
        answer: 3,
        explanation: "Setting $e^{-t/RC} = 1/2$ gives $t = RC\\ln 2$."
      },
      {
        q: "Resistance in an RC timer doubles at fixed $C$. Timing:",
        options: ["Unchanged", "Halves", "Doubles", "Quadruples"],
        answer: 2,
        explanation: "$\\tau = RC$ scales linearly with $R$."
      }
    ]
  },
  {
    sectionId: "coletta-ch20-s7",
    readingTime: 5,
    intro: "Household electricity must be powerful yet safe. Coletta explains wiring, breakers, grounding, and the current thresholds that separate tingle from lethal fibrillation. The $120$ V outlet is safe only because protection and practice contain it.",
    objectives: [
      "Describe hot, neutral, and ground wiring with breakers and fuses",
      "State physiological current thresholds from perception to fibrillation",
      "Explain why voltage alone does not determine shock severity"
    ],
    concepts: [
      {
        term: "Household wiring",
        kind: "definition",
        statement: "Outlets provide **hot** ($120$ V rms), **neutral** (near $0$ V return), and **ground** (safety earth), with appliances paralleled across hot-neutral.",
        detail: "The ground wire bonds metal cases to earth so a fault trips the breaker instead of electrifying the chassis."
      },
      {
        term: "Breakers and fuses",
        kind: "definition",
        statement: "**Breakers** and **fuses** open above rated current ($15$–$20$ A for branches), stopping $I^{2}R$ heating before wires ignite.",
        detail: "A $1500$ W heater plus a $1000$ W toaster on one $15$ A branch draws over $20$ A and trips it by design."
      },
      {
        term: "Shock thresholds",
        kind: "theorem",
        statement: "About $1$ mA tingles, $10$–$20$ mA locks muscles (can't-let-go), and $50$–$100$ mA through the chest can trigger **fibrillation**.",
        detail: "$120$ V across wet $1$ kohm skin drives $120$ mA, lethal, while dry $100$ kohm skin passes $1.2$ mA, merely felt."
      },
      {
        term: "Why current kills",
        kind: "insight",
        statement: "Damage scales with **current through the body**, set by $I = V/R_{body}$: resistance (wet versus dry, path) matters as much as voltage.",
        detail: "Birds perch on high lines unharmed with no path to ground, while a grounded ladder completes one."
      },
      {
        term: "GFCI protection",
        kind: "method",
        statement: "A **ground-fault interrupter** trips at $\u007e5$ mA of hot-neutral imbalance, guarding wet locations where small leaks can kill.",
        detail: "It watches Kirchhoff's rule directly: outgoing and returning currents must match to the milliamp." }
    ],
    examples: [
      {
        title: "Branch overload",
        problem: "A $15$ A, $120$ V branch feeds a $1400$ W heater and an $800$ W microwave. Does it trip?",
        steps: [
          { label: "Total power", text: "$P = 2200$ W." },
          { label: "Current", text: "$I = P/V = 2200/120 \\approx 18.3$ A." },
          { label: "Verdict", text: "Exceeds $15$ A, so the breaker trips." }
        ],
        result: "Yes, at $18.3$ A it trips."
      },
      {
        title: "Wet-skin shock",
        problem: "Wet hands ($R = 1.5$ kohm) span $120$ V rms. Estimate the current and risk.",
        steps: [
          { label: "RMS current", text: "$I = 120/1500 = 0.080$ A $= 80$ mA." },
          { label: "Peak", text: "Peaks near $113$ mA sixty times per second." },
          { label: "Risk", text: "Inside the fibrillation range if it crosses the chest; potentially lethal." }
        ],
        result: "About $80$ mA rms, dangerous."
      }
    ],
    keyTakeaways: [
      "Hot-neutral powers loads while ground and breakers contain faults.",
      "Milliamps separate tingle from can't-let-go from fibrillation.",
      "Body resistance decides shock current via $I = V/R$."
    ],
    quiz: [
      {
        q: "A GFCI trips when:",
        options: ["Voltage exceeds $120$ V", "Hot and neutral currents differ by milliamps", "Power exceeds $1$ kW", "Frequency shifts"],
        answer: 1,
        explanation: "Imbalance means current leaks through another path, possibly a person, so it opens fast."
      },
      {
        q: "Most dangerous shock path crosses:",
        options: ["Hand to foot through the chest", "Toe to toe", "Hair to hat", "Finger to finger, one hand"],
        answer: 0,
        explanation: "Chest-crossing current can fibrillate the heart at tens of milliamps."
      },
      {
        q: "A $20$ A breaker feeding $2400$ W at $120$ V:",
        options: ["Holds with margin", "Shorts", "Trips immediately", "Holds at $20$ A exactly"],
        answer: 3,
        explanation: "$I = 2400/120 = 20$ A sits at the rating edge; continuous code wants margin below it."
      }
    ]
  }
]
