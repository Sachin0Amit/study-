import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 0: An Introduction to Physics (pp 18-26)
// ============================================================================

export const ewenCh0Content: SectionContent[] = [
  {
    sectionId: 'young-ch1-s14',
    readingTime: 5,
    intro: "Technicians meet physics every day in motors, circuits, brakes, and beams, often without naming it. This section makes the case that a working knowledge of a few laws and a disciplined method pays off directly on the job.",
    objectives: [
      "Explain why a technician needs physics even when the job looks purely practical",
      "Identify physics ideas hidden in familiar shop and everyday devices",
      "Describe what studying physics gives you beyond formulas",
    ],
    concepts: [
      {
        term: "Physics as the study of matter, motion, and energy",
        kind: "definition",
        statement: "Physics studies **matter, motion, energy, and their interactions**, expressed as compact laws such as $F = ma$ and $W = Fd$ that predict how things behave.",
        detail: "Ewen keeps the treatment algebra-based and applied: laws are tools for sizing, measuring, and troubleshooting rather than abstract theory.",
      },
      {
        term: "Technician dependence on physics",
        kind: "insight",
        statement: "Almost every technical task — wiring a circuit, aligning a belt drive, reading a gauge — **applies a physics law**, whether or not the worker states it.",
        detail: "The auto mechanic balancing torque against friction, the electrician sizing wire by $P = VI$, and the machinist holding tolerances all use physics quantitatively.",
      },
      {
        term: "Prediction before building",
        kind: "method",
        statement: "Physics lets you **predict results before cutting metal**: compute the force, current, or stopping distance first, then verify by measurement.",
        detail: "That predict-then-verify habit saves material, time, and accidents, and it recurs in every chapter of the book.",
      },
      {
        term: "Measurement as the language",
        kind: "notation",
        statement: "A physical quantity is a **number plus a unit**, such as $12.5\\ \\mathrm{V}$ or $3.20\\ \\mathrm{m}$; the number alone means nothing.",
        detail: "Chapters 1-2 build the unit and substitution habits that make later calculations trustworthy.",
      },
      {
        term: "Physics confidence on the job",
        kind: "insight",
        statement: "Studying physics builds **quantitative judgment**: estimating orders of magnitude, spotting unreasonable answers, and arguing from data.",
        detail: "An answer like a $5000\\ \\mathrm{A}$ lighting circuit or a negative stopping distance should trigger instant suspicion.",
      },
    ],
    figures: [
      {
        caption: "Physics behind familiar shop devices: force, motion, energy, and electricity in one bench",
        svg: '<svg role="img" aria-label="Physics behind familiar shop devices: force, motion, energy, and electricity in one bench" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="30" y="60" width="90" height="60" rx="4"/><circle cx="150" cy="120" r="8"/><line x1="150" y1="120" x2="150" y2="60"/><circle cx="150" cy="52" r="10"/><rect x="220" y="60" width="60" height="60" rx="4"/><line x1="300" y1="60" x2="300" y2="120"/><line x1="330" y1="60" x2="330" y2="120"/><circle cx="315" cy="140" r="14"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="38" y="145">motor F=ma</text><text x="128" y="145">pendulum</text><text x="222" y="145">circuit</text><text x="292" y="165">pulley</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Spotting physics in a car stop",
        problem: "A $1200\\ \\mathrm{kg}$ car slows from $20\\ \\mathrm{m/s}$ to rest. Which physics ideas will Chapters 4-6 use to analyze it?",
        steps: [
          { label: "Motion", text: "Chapter 4 describes the motion: stopping distance and time follow $v^2 = v_0^2 + 2as$." },
          { label: "Force", text: "Chapter 5 finds the braking force from $F = ma$ once the acceleration $a$ is known." },
          { label: "Energy and momentum", text: "Chapter 8 checks the work $W = Fd$ against kinetic energy $\\frac{1}{2}mv^2 = 240{,}000\\ \\mathrm{J}$, and Chapter 6 frames the impulse $Ft$." },
        ],
        result: "One everyday stop uses motion, force, energy, and momentum — the core arc of the course.",
      },
      {
        title: "Number plus unit",
        problem: "A meter reads 12.5. Why is that reading useless until the unit is known?",
        steps: [
          { label: "Candidate 1", text: "$12.5\\ \\mathrm{V}$ across a car battery terminal is normal and healthy." },
          { label: "Candidate 2", text: "$12.5\\ \\mathrm{A}$ through a lamp cord is a heavy, possibly dangerous load." },
          { label: "Rule", text: "Same digits, different units, totally different meaning — always record and carry the unit." },
        ],
        result: "A measurement is complete only as number times unit.",
      },
    ],
    keyTakeaways: [
      "Physics is the working science behind motors, structures, circuits, and machines technicians service.",
      "Its value is prediction: compute first with a law, then verify by measurement.",
      "Every quantity is a number plus a unit, and quantitative judgment starts there.",
    ],
    quiz: [
      {
        q: "Why does Ewen argue a technician should study physics?",
        options: ["To pass a licensing exam only", "Because technical work constantly applies physics laws to real devices", "To derive new fundamental theories", "Because shop work never involves measurement"],
        answer: 1,
        explanation: "The chapter shows motors, brakes, circuits, and structures all run on physics laws the technician must apply.",
      },
      {
        q: "Which best completes a measurement?",
        options: ["A bare number like 12.5", "A number plus its unit, such as $12.5\\ \\mathrm{V}$", "A unit alone, such as volts", "An estimate with no digits"],
        answer: 1,
        explanation: "A physical quantity is number times unit; either part alone is meaningless.",
      },
      {
        q: "A car braking analysis will use which chain of ideas?",
        options: ["Only chemistry", "Motion, force, work-energy, and impulse", "Only color theory", "Relativity alone"],
        answer: 1,
        explanation: "Stopping involves kinematics, $F = ma$, $W = Fd$ versus $\\frac{1}{2}mv^2$, and $Ft = \\Delta p$.",
      },
    ],
  },
  {
    sectionId: 'young-ch1-s15',
    readingTime: 5,
    intro: "Modern technology is applied physics made concrete, from the steam engine to the microchip. This section traces that link so the laws ahead feel like the operating principles of the devices around you.",
    objectives: [
      "Relate major technologies to the physics laws behind them",
      "Explain how applied physics turns discovery into devices",
      "Give shop examples of energy conversion governed by physics",
    ],
    concepts: [
      {
        term: "Technology as applied physics",
        kind: "insight",
        statement: "Each technological era rests on physics: **heat engines on thermodynamics, electronics on electromagnetism, computers on quantum solids**.",
        detail: "Studying the law first makes the device intelligible; studying the device motivates the law.",
      },
      {
        term: "Energy conversion chain",
        kind: "definition",
        statement: "Most machines are **energy converters** — chemical to thermal to mechanical to electrical — and every step obeys conservation of energy.",
        detail: "A power plant, a car engine, and a flashlight battery all illustrate the same bookkeeping: energy in equals energy out plus losses.",
      },
      {
        term: "Electricity and magnetism at work",
        kind: "law",
        statement: "Electric motors, generators, and transformers run on the relation between **current and magnetic field**, quantified later as $F = BIL$ and induced emf.",
        detail: "The technician who troubleshoots a motor is testing those relations with a meter.",
      },
      {
        term: "Mechanics at work",
        kind: "law",
        statement: "Vehicles, lifts, and machine tools obey **$F = ma$, $W = Fd$, and $P = W/t$**: force causes acceleration, work moves loads, power sets the rate.",
        detail: "Horsepower ratings, gear ratios, and brake specifications are these laws in commercial dress.",
      },
      {
        term: "Applied versus pure emphasis",
        kind: "insight",
        statement: "This book stresses **applied physics**: use the law to size, predict, and check, leaving deep theoretical derivations to later courses.",
        detail: "Algebra plus units plus careful measurement carries the whole course.",
      },
    ],
    examples: [
      {
        title: "Power plant chain",
        problem: "Trace the energy conversions in a fossil-fuel power plant driving a shop motor.",
        steps: [
          { label: "Plant", text: "Chemical energy in fuel becomes thermal energy in steam, then mechanical energy in the turbine, then electrical energy in the generator." },
          { label: "Shop", text: "The motor converts electrical energy back to mechanical energy at the shaft, with heat as loss at each step." },
          { label: "Bookkeeping", text: "If the generator delivers $500\\ \\mathrm{kW}$ at $92\\%$ efficiency, the shaft input was $500/0.92 \\approx 543\\ \\mathrm{kW}$." },
        ],
        result: "Every link is an energy conversion with an efficiency cost — the theme of Chapter 8.",
      },
      {
        title: "Motor current estimate",
        problem: "A $120\\ \\mathrm{V}$ drill draws $5.0\\ \\mathrm{A}$. What power does physics predict?",
        steps: [
          { label: "Law", text: "Electric power is $P = VI$." },
          { label: "Substitute", text: "$P = (120\\ \\mathrm{V})(5.0\\ \\mathrm{A}) = 600\\ \\mathrm{W}$." },
          { label: "Interpret", text: "About $0.80\\ \\mathrm{hp}$ input (since $1\\ \\mathrm{hp} = 746\\ \\mathrm{W}$) before motor losses." },
        ],
        result: "About $600\\ \\mathrm{W}$ of electrical input — physics predicts the nameplate.",
      },
    ],
    keyTakeaways: [
      "Technology advances by applying physics laws to energy conversion and control.",
      "Motors, generators, engines, and lifts each embody mechanics plus electromagnetism.",
      "Applied physics means computing real ratings, currents, and powers with algebra and units.",
    ],
    quiz: [
      {
        q: "A car engine plus drivetrain is best described as",
        options: ["A creator of energy", "A chain of energy conversions with losses at each step", "A device outside physics laws", "A purely chemical system"],
        answer: 1,
        explanation: "Chemical to thermal to mechanical with heat and friction losses; conservation always holds.",
      },
      {
        q: "A $120\\ \\mathrm{V}$, $5.0\\ \\mathrm{A}$ drill draws about",
        options: ["$24\\ \\mathrm{W}$", "$600\\ \\mathrm{W}$", "$125\\ \\mathrm{W}$", "$0.04\\ \\mathrm{W}$"],
        answer: 1,
        explanation: "$P = VI = 120 \\times 5.0 = 600\\ \\mathrm{W}$.",
      },
      {
        q: "Electric motors and generators both depend on",
        options: ["The link between current and magnetic fields", "Only on gear ratios", "Only on fluid pressure", "Action at a distance without fields"],
        answer: 0,
        explanation: "Motor force and generator emf both come from current-field interaction.",
      },
    ],
  },
  {
    sectionId: 'young-ch1-s16',
    readingTime: 4,
    intro: "Physics does not stand alone: chemistry, biology, and engineering all build on its laws. Seeing those bridges early helps you transfer each formula to allied trades and sciences.",
    objectives: [
      "Describe how physics underlies chemistry, biology, and engineering",
      "Give one cross-field example for each connection",
      "Explain why technicians benefit from seeing those links",
    ],
    concepts: [
      {
        term: "Physics beneath chemistry",
        kind: "insight",
        statement: "Chemical bonding, gas pressure, and heat of reaction are **electrical forces and energy bookkeeping** at the atomic scale.",
        detail: "Gas laws ($PV = nRT$), specific heat, and electrochemistry in later chapters are shared physics-chemistry ground.",
      },
      {
        term: "Physics beneath biology and medicine",
        kind: "insight",
        statement: "Blood pressure, bone levers, optics of the eye, and ultrasound imaging obey **fluid, force, lens, and wave laws**.",
        detail: "A blood-pressure cuff reads hydrostatic pressure; an X-ray or ultrasound applies wave and photon physics.",
      },
      {
        term: "Physics beneath engineering technology",
        kind: "insight",
        statement: "Statics, circuits, heat transfer, and materials selection are **engineering chapters written in physics vocabulary**.",
        detail: "Beam equilibrium, wire sizing, insulation ratings, and density tables all come from Chapters 1-12 laws.",
      },
      {
        term: "Shared quantities across fields",
        kind: "notation",
        statement: "Force, energy, power, pressure, and temperature **keep the same units across fields**: $1\\ \\mathrm{N}$, $1\\ \\mathrm{J}$, $1\\ \\mathrm{W}$, $1\\ \\mathrm{Pa}$, $1\\ \\mathrm{K}$ mean the same everywhere.",
        detail: "That shared unit system is what lets a nurse, an electrician, and an engineer trust one another numbers.",
      },
      {
        term: "Transfer of method",
        kind: "method",
        statement: "Unit checking, significant digits, and the **predict-compute-verify loop transfer unchanged** to any technical field.",
        detail: "Learn them once in physics and reuse them in every trade calculation.",
      },
    ],
    examples: [
      {
        title: "Three fields, one pressure",
        problem: "Show that tire pressure, blood pressure, and hydraulic pressure are the same quantity.",
        steps: [
          { label: "Tires", text: "A tire at $220\\ \\mathrm{kPa}$ pushes outward on every square centimeter with force $F = PA$." },
          { label: "Blood", text: "$120/80\\ \\mathrm{mmHg}$ is the same force-per-area idea: $120\\ \\mathrm{mmHg} \\approx 16.0\\ \\mathrm{kPa}$." },
          { label: "Hydraulics", text: "A jack lifting with $10\\ \\mathrm{MPa}$ uses $F = PA$ identically — only the magnitude changes." },
        ],
        result: "One definition $P = F/A$, one unit family, three trades.",
      },
      {
        title: "Levers in body and shop",
        problem: "Compare the forearm holding a load with a shop crowbar.",
        steps: [
          { label: "Body", text: "The biceps pulls a few centimeters from the elbow to support a load $30\\ \\mathrm{cm}$ out — a third-class lever with $MA < 1$." },
          { label: "Shop", text: "A crowbar with effort arm $90\\ \\mathrm{cm}$ and load arm $15\\ \\mathrm{cm}$ gives $MA = 6$." },
          { label: "Common law", text: "Both obey moment balance $F_1 d_1 = F_2 d_2$ from Chapter 7/10." },
        ],
        result: "Anatomy and tools share the same moment law with different trade-offs.",
      },
    ],
    keyTakeaways: [
      "Chemistry, life science, and engineering all quantify with physics units and laws.",
      "Pressure, energy, levers, and waves reappear in every technical field.",
      "Mastering units and method once pays off across all of them.",
    ],
    quiz: [
      {
        q: "$120\\ \\mathrm{mmHg}$ blood pressure and $220\\ \\mathrm{kPa}$ tire pressure share",
        options: ["Nothing at all", "The same quantity $P = F/A$ in convertible units", "The same numerical value", "A biological origin"],
        answer: 1,
        explanation: "Both are force per area; $1\\ \\mathrm{mmHg} \\approx 133\\ \\mathrm{Pa}$ converts between them.",
      },
      {
        q: "The forearm holding a weight and a crowbar both obey",
        options: ["The mirror formula", "Moment balance $F_1 d_1 = F_2 d_2$", "Boyle law", "The Doppler shift"],
        answer: 1,
        explanation: "Both are levers; equilibrium of moments governs each.",
      },
      {
        q: "Why do shared SI units matter across fields?",
        options: ["They let different trades trust and convert each other numbers", "They make numbers larger", "They remove the need for measurement", "They apply only to physics"],
        answer: 0,
        explanation: "Common units make a joule, pascal, or watt mean the same thing to everyone.",
      },
    ],
  },
  {
    sectionId: 'young-ch1-s17',
    readingTime: 6,
    intro: "Physics advances by testing theories against measurement and distilling the survivors into laws. This section defines those terms precisely and introduces the step-by-step problem routine used throughout the book.",
    objectives: [
      "Distinguish a theory, a law, and a hypothesis correctly",
      "State how laws are tested and why they remain revisable",
      "Apply the book problem-solving routine to a simple formula",
    ],
    concepts: [
      {
        term: "Hypothesis, theory, and law",
        kind: "definition",
        statement: "A **hypothesis** is a testable guess, a **theory** is a well-tested explanatory framework, and a **law** is a concise, repeatedly verified relation such as $F = ma$.",
        detail: "Laws describe what happens quantitatively; theories explain why within their tested range.",
      },
      {
        term: "How laws earn trust",
        kind: "method",
        statement: "A law survives only by **agreeing with controlled measurement again and again**, and it stays open to refinement when instruments improve.",
        detail: "Newton laws rule everyday speeds and sizes; relativity and quantum extend the range without repealing the shop-floor results.",
      },
      {
        term: "Ewen problem-solving routine",
        kind: "method",
        statement: "State the **given data with units, pick the law, solve it symbolically, substitute, and check units and sense** — the five-step habit of Chapters 2-3.",
        detail: "Writing $v = 20\\ \\mathrm{m/s}$ rather than bare $20$ catches most errors before they propagate.",
      },
      {
        term: "Unit check as error filter",
        kind: "method",
        statement: "The **units must balance**: both sides of $s = vt$ give meters since $(\\mathrm{m/s})(\\mathrm{s}) = \\mathrm{m}$.",
        detail: "If they do not, the setup is wrong no matter how careful the arithmetic.",
      },
      {
        term: "Reasonableness check",
        kind: "insight",
        statement: "Every answer needs a **sense check**: sign, size, and unit plausibility against experience before boxing it.",
        detail: "A car stopping distance of $3\\ \\mathrm{mm}$ or a negative absolute temperature fails this filter instantly.",
      },
    ],
    figures: [
      {
        caption: "The test loop: hypothesis, measurement, law, and the problem routine that applies it",
        svg: '<svg role="img" aria-label="The test loop: hypothesis, measurement, law, and the problem routine that applies it" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="20" y="60" width="80" height="50" rx="20"/><rect x="160" y="60" width="80" height="50" rx="4"/><rect x="300" y="60" width="80" height="50" rx="20"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="100" y1="85" x2="160" y2="85"/><line x1="240" y1="85" x2="300" y2="85"/><path d="M 200 110 L 200 140 L 60 140 L 60 110" fill="none"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="32" y="90">predict</text><text x="172" y="90">measure</text><text x="318" y="90">law?</text><text x="150" y="160">units + sense check</text></g></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Using the routine on $s = vt$",
        problem: "A conveyor moves stock at $v = 1.50\\ \\mathrm{m/s}$ for $t = 12.0\\ \\mathrm{s}$. How far does the stock travel?",
        steps: [
          { label: "Given and law", text: "$v = 1.50\\ \\mathrm{m/s}$, $t = 12.0\\ \\mathrm{s}$; law $s = vt$." },
          { label: "Substitute", text: "$s = (1.50\\ \\mathrm{m/s})(12.0\\ \\mathrm{s}) = 18.0\\ \\mathrm{m}$; seconds cancel." },
          { label: "Check", text: "Units give meters as required; $18\\ \\mathrm{m}$ is a sensible conveyor run." },
        ],
        result: "$s = 18.0\\ \\mathrm{m}$ with units balanced and magnitude reasonable.",
      },
      {
        title: "Catching an error by units",
        problem: "A student writes stopping time $t = v \\cdot a$ with $v$ in $\\mathrm{m/s}$ and $a$ in $\\mathrm{m/s^2}$. Is it plausible?",
        steps: [
          { label: "Check units", text: "$(\\mathrm{m/s})(\\mathrm{m/s^2}) = \\mathrm{m^2/s^3}$, not seconds." },
          { label: "Repair", text: "The correct form $t = v/a$ gives $(\\mathrm{m/s})/(\\mathrm{m/s^2}) = \\mathrm{s}$." },
          { label: "Numbers", text: "$v = 20\\ \\mathrm{m/s}$, $a = 5.0\\ \\mathrm{m/s^2}$ gives $t = 4.0\\ \\mathrm{s}$, which is sensible." },
        ],
        result: "Unit mismatch exposes the error; $t = v/a = 4.0\\ \\mathrm{s}$ is the correct form.",
      },
    ],
    keyTakeaways: [
      "Hypotheses are tested, theories explain, and laws state verified quantitative relations.",
      "Laws hold within tested ranges and are refined, not casually discarded.",
      "Given-units, law, substitution, unit check, sense check solves nearly every problem ahead.",
    ],
    quiz: [
      {
        q: "Which ordering is correct?",
        options: ["Law becomes theory after proof", "Hypothesis (guess) → theory (tested framework) → law (verified relation)", "Theory is weaker than a guess", "Laws need no measurement"],
        answer: 1,
        explanation: "Hypotheses are tested into theories; the most compact verified relations are stated as laws.",
      },
      {
        q: "A student proposes $t = v \\cdot a$ for stopping time. The unit check gives",
        options: ["Seconds, so it is fine", "$\\mathrm{m^2/s^3}$, so the form is wrong; $t = v/a$ is correct", "Kilograms", "No information"],
        answer: 1,
        explanation: "Units must balance; only $v/a$ yields seconds.",
      },
      {
        q: "The final step of every Ewen solution should be",
        options: ["Boxing the bare number", "Checking units, sign, and order of magnitude", "Deleting the units", "Adding more digits"],
        answer: 1,
        explanation: "A sense check catches sign, size, and unit errors the arithmetic hides.",
      },
    ],
  },
]
