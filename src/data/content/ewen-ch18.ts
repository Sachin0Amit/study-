import type { SectionContent } from "../library"

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition, Chapter 18
// Magnetism (Sections 18.1 – 18.7)
// ============================================================================

export const ewenCh18Content: SectionContent[] = [
  {
    sectionId: "ewen-ch18-s1",
    readingTime: 5,
    intro: "Magnets attract iron, point north, and never show a lone pole — the signature of dipole magnetism. This section defines poles, domains, and field lines, and shows how to magnetize and demagnetize tool steel.",
    objectives: [
      "State pole rules and the no-monopole fact",
      "Explain domain alignment as the cause of magnetization",
      "Draw magnetic field lines and magnetize/demagnetize steel",
    ],
    concepts: [
      {
        term: "Magnetic poles",
        kind: "definition",
        statement: "Every magnet has inseparable north and south poles: like poles repel, unlike poles attract.",
        detail: "Cutting a magnet yields two smaller dipoles, never an isolated pole.",
      },
      {
        term: "Domains",
        kind: "insight",
        statement: "Ferromagnetic metals contain microscopic aligned-spin domains; magnetizing rotates them into line, demagnetizing scrambles them.",
        detail: " stroking with a pole, solenoid pulses, or heating past the Curie point all reset domains.",
      },
      {
        term: "Field-line map",
        kind: "method",
        statement: "Magnetic lines exit north, enter south, never cross, and crowd where $B$ is strong — the same grammar as electric lines.",
        detail: "Iron filings and compasses trace these lines directly on the bench.",
      },
      {
        term: "Hard versus soft iron",
        kind: "definition",
        statement: "Hard steel keeps alignment (permanent magnets); soft iron aligns only in place (cores, chucks) and releases on removal.",
        detail: "Motors and transformers need soft cores; screwdrivers want hard tips.",
      },
      {
        term: "Compass and earth field",
        kind: "insight",
        statement: "A compass is a free dipole aligning with the horizontal component of earth's field; magnetic north differs from true north by local declination.",
        detail: "Earth's field (~$50 \\mu\\text{T}$) is the reference behind navigation corrections.",
      },
    ],
    examples: [
      {
        title: "Making a screwdriver magnetic",
        problem: "Describe stroking a steel screwdriver with a known north pole to magnetize its tip south, and how to undo it.",
        steps: [
          { label: "Step 1: Stroke one way", text: "Draw the north pole along the shaft toward the handle repeatedly, lifting clear on the return — domains line up with south at the tip." },
          { label: "Step 2: Test", text: "The tip now attracts the south-seeking end of a compass needle (a north compass pole)." },
          { label: "Step 3: Undo", text: "Heat past Curie temperature, hammer randomly, or apply decaying AC in a demagnetizer coil." },
        ],
        result: "Tip-south magnet, reversible by scrambling domains.",
      },
      {
        title: "Broken magnet poles",
        problem: "A bar magnet marked N–S snaps in half. What poles do the pieces show?",
        steps: [
          { label: "Step 1: Apply no-monopole rule", text: "Each fragment is a new dipole: the break faces become opposite new poles." },
        ],
        result: "Two N–S magnets; the original N stays N, the original S stays S, new poles at the break.",
      },
    ],
    keyTakeaways: [
      "Poles always pair; like repels, unlike attracts.",
      "Magnetization is domain alignment; heat, shock, or AC scrambles it.",
      "Field lines exit N and enter S, crowding where the field is strong.",
    ],
    quiz: [
      {
        q: "Cutting a bar magnet in half produces:",
        options: ["One N piece and one S piece", "Two smaller N–S magnets", "Two unmagnetized pieces", "One strong and one dead piece"],
        answer: 1,
        explanation: "No monopoles exist; each fragment carries both poles with new faces at the break.",
      },
      {
        q: "Soft iron is preferred for transformer cores because it:",
        options: ["Stays permanently magnetized", "Magnetizes and demagnetizes easily each cycle", "Has no domains", "Repels all fields"],
        answer: 1,
        explanation: "Low hysteresis lets the core follow AC with little energy loss per cycle.",
      },
      {
        q: "Iron filings around a magnet reveal:",
        options: ["Electric charge", "Field-line direction and relative strength", "The Curie temperature", "Atomic mass"],
        answer: 1,
        explanation: "Each filing becomes an induced dipole aligning head-to-tail along $B$, dense where $B$ is strong.",
      },
    ],
  },
  {
    sectionId: "ewen-ch18-s2",
    readingTime: 6,
    intro: "Every current makes a magnetic field — Oersted's discovery that unites electricity and magnetism. This section applies the straight-wire and coil right-hand rules, computes solenoid fields, and routes compass deflections.",
    objectives: [
      "Apply the straight-wire right-hand rule for field circles",
      "Apply the coil/solenoid rule for N-pole location",
      "Compute solenoid field $B = \\mu_{0}nI$ and explain core gain",
    ],
    concepts: [
      {
        term: "Oersted's discovery",
        kind: "law",
        statement: "Current in a wire generates circular magnetic field lines centered on the wire: grasp with right thumb along $I$, fingers curl along $B$.",
        detail: "Compasses ringed around a vertical wire point tangentially — the 1820 experiment every bench can repeat.",
      },
      {
        term: "Loop and coil rule",
        kind: "method",
        statement: "Curl right fingers with loop current; the thumb points to the coil's north face.",
        detail: "Each turn's field stacks, so $N$ turns multiply the single-loop field.",
      },
      {
        term: "Solenoid field",
        kind: "theorem",
        statement: "A long solenoid gives nearly uniform $B = \\mu_{0}nI$ inside (with $n$ turns per meter) and near zero outside.",
        detail: "With $\\mu_{0} = 4\\pi \\times 10^{-7} \\text{ T}\\cdot\\text{m}/\\text{A}$, $1000 \\text{ turns}/\\text{m}$ at $2 \\text{ A}$ yields $2.51 \\text{ mT}$ air-core.",
      },
      {
        term: "Iron-core gain",
        kind: "insight",
        statement: "A soft-iron core multiplies solenoid $B$ by hundreds (permeability $\\mu \\gg \\mu_{0}$) until saturation.",
        detail: "Relays, contactors, and lifting magnets all exploit this free amplification.",
      },
      {
        term: "Wire-field strength trend",
        kind: "theorem",
        statement: "Field circles weaken with distance: $B = \\mu_{0}I/2\\pi r$ around a long straight wire.",
        detail: "$10 \\text{ A}$ at $5 \\text{ cm}$ gives $40 \\mu\\text{T}$ — comparable to earth's field.",
      },
    ],
    figures: [
      {
        caption: "Right-hand rules: thumb along $I$ curls $B$ around a wire; fingers with coil current point the thumb to N.",
        svg: "<svg role='img' aria-label='Right-hand rules: thumb along I curls B around a wire; fingers with coil current point the thumb to N.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"170\"/><ellipse cx=\"100\" cy=\"100\" rx=\"45\" ry=\"18\"/><ellipse cx=\"100\" cy=\"100\" rx=\"70\" ry=\"30\" opacity=\"0.5\"/><rect x=\"250\" y=\"70\" width=\"100\" height=\"60\"/><line x1=\"250\" y1=\"70\" x2=\"250\" y2=\"130\"/><line x1=\"275\" y1=\"70\" x2=\"275\" y2=\"130\"/><line x1=\"300\" y1=\"70\" x2=\"300\" y2=\"130\"/><line x1=\"325\" y1=\"70\" x2=\"325\" y2=\"130\"/><line x1=\"350\" y1=\"100\" x2=\"390\" y2=\"100\"/><polygon points=\"390,100 380,95 380,105\" fill=\"currentColor\" stroke=\"none\"/><text x=\"70\" y=\"20\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">I up, B circles</text><text x=\"240\" y=\"160\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">coil: N to the right</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Solenoid for a relay",
        problem: "A $12.0 \\text{ cm}$ solenoid has $600$ turns carrying $1.50 \\text{ A}$. Find air-core $B$ inside.",
        steps: [
          { label: "Step 1: Turns per meter", text: "$n = 600/0.120 = 5000 \\text{ m}^{-1}$." },
          { label: "Step 2: Field", text: "$B = (4\\pi \\times 10^{-7})(5000)(1.50) = 9.42 \\times 10^{-3} \\text{ T}$." },
        ],
        result: "$9.42 \\text{ mT}$ air-core (tenths of a tesla with iron).",
      },
      {
        title: "Field beside a feeder wire",
        problem: "Find $B$ at $4.00 \\text{ cm}$ from a long wire carrying $25.0 \\text{ A}$.",
        steps: [
          { label: "Step 1: Apply $B = \\mu_{0}I/2\\pi r$", text: "$B = (4\\pi \\times 10^{-7})(25.0)/(2\\pi \\times 0.0400) = 1.25 \\times 10^{-4} \\text{ T}$." },
        ],
        result: "$125 \\mu\\text{T}$, circling by the right-hand rule.",
      },
    ],
    keyTakeaways: [
      "Currents make circling $B$ fields; coils stack turns into a solenoid pole pair.",
      "$B = \\mu_{0}nI$ inside long solenoids; iron cores multiply it.",
      "Right-hand rules give every direction without memorized signs.",
    ],
    quiz: [
      {
        q: "Current flows straight toward you. Its magnetic lines:",
        options: ["Point toward you", "Circle counterclockwise", "Circle clockwise", "Vanish"],
        answer: 1,
        explanation: "Right thumb at yourself, fingers curl counterclockwise as seen by you.",
      },
      {
        q: "Doubling both $n$ and $I$ in a solenoid multiplies $B$ by:",
        options: ["$2$", "$4$", "$1$ (unchanged)", "$1/2$"],
        answer: 1,
        explanation: "$B = \\mu_{0}nI$ is proportional to each, so $2 \\times 2 = 4$.",
      },
      {
        q: "An iron core is inserted into a current-carrying solenoid. The field:",
        options: ["Vanishes", "Grows by hundreds until saturation", "Reverses", "Becomes AC"],
        answer: 1,
        explanation: "Aligned domains add their magnetization to the coil's field, limited by saturation.",
      },
    ],
  },
  {
    sectionId: "ewen-ch18-s3",
    readingTime: 5,
    intro: "Soft iron becomes a magnet inside a coil — the electromagnet behind doorbells, scrapyard cranes, and MRI shims. This section builds practical electromagnets, controls them with current, and compares permanent versus coil magnets.",
    objectives: [
      "Explain induced magnetism in soft iron near poles or coils",
      "Design an electromagnet (core, turns, current, air gap)",
      "Control strength and polarity electrically",
    ],
    concepts: [
      {
        term: "Induced magnetism",
        kind: "definition",
        statement: "Unmagnetized iron in an external field becomes a temporary magnet with the near face opposite in polarity.",
        detail: "Paper clips chain from a permanent magnet by successive induction.",
      },
      {
        term: "Electromagnet anatomy",
        kind: "method",
        statement: "Strength grows with turns $N$, current $I$, core permeability, and small air gaps: more ampere-turns $NI$ means more $B$.",
        detail: "Relay coils are thousands of fine turns; crane magnets are few massive water-cooled turns.",
      },
      {
        term: "Polarity control",
        kind: "method",
        statement: "Reversing coil current flips N and S instantly; varying $I$ (rheostat, PWM) varies holding force.",
        detail: "Electric door locks and sorting flappers exploit this fast electrical control.",
      },
      {
        term: "Residual magnetism",
        kind: "insight",
        statement: "Cores retain some field at $I = 0$ (remanence); AC demagnetizers or reverse pulses erase it.",
        detail: "Magnetic chucks switch DC off but need a reverse pulse to release thin work.",
      },
      {
        term: "Permanent versus electromagnet",
        kind: "insight",
        statement: "Permanent magnets need no power but cannot switch; electromagnets switch and scale but need power and cooling.",
        detail: "Cranes use electromagnets to drop loads on command — with battery backup for outages.",
      },
    ],
    examples: [
      {
        title: "Sizing ampere-turns",
        problem: "Relay A uses $2000$ turns at $0.100 \\text{ A}$; relay B uses $500$ turns at $0.500 \\text{ A}$ (same core). Which pulls harder?",
        steps: [
          { label: "Step 1: Compare $NI$", text: "A: $2000 \\times 0.100 = 200 \\text{ A}\\cdot\\text{t}$; B: $500 \\times 0.500 = 250 \\text{ A}\\cdot\\text{t}$." },
        ],
        result: "Relay B (25% more magnetizing force on the same core).",
      },
      {
        title: "Lifting-magnet current",
        problem: "A crane magnet needs $NI = 20{,}000 \\text{ A}\\cdot\\text{t}$ from a $200$-turn coil. Find $I$ and the $220 \\text{ V}$ coil power if $R = 2.20 \\text{ }\\Omega$.",
        steps: [
          { label: "Step 1: Current", text: "$I = 20{,}000/200 = 100 \\text{ A}$." },
          { label: "Step 2: Check resistance", text: "$V = IR = 220 \\text{ V}$ — consistent; $P = VI = 22.0 \\text{ kW}$." },
        ],
        result: "$100 \\text{ A}$; $22.0 \\text{ kW}$ of coil heat to cool.",
      },
    ],
    keyTakeaways: [
      "Iron near a field becomes a temporary opposite-faced magnet.",
      "Electromagnet strength scales with ampere-turns $NI$ and core quality.",
      "Current direction sets polarity; current size sets holding force.",
    ],
    quiz: [
      {
        q: "A nail touched to a magnet's north pole becomes:",
        options: ["North at the contact end", "South at the contact end", "Unmagnetized", "Permanently north throughout"],
        answer: 1,
        explanation: "Induction makes the near face opposite: south at contact, north at the far tip.",
      },
      {
        q: "To strengthen an electromagnet you can:",
        options: ["Remove turns", "Raise current or turns and close air gaps", "Use a wooden core", "Reverse every other turn"],
        answer: 1,
        explanation: "More $NI$, better $\\mu$, and tighter magnetic circuits all raise $B$.",
      },
      {
        q: "A magnetic chuck holds work after switch-off. Best release is:",
        options: ["More DC current", "A decaying reverse/AC pulse", "Heating to melt", "A bigger fuse"],
        answer: 1,
        explanation: "Remanence needs coercion back to zero — reverse or decaying-AC cycles scramble it.",
      },
    ],
  },
  {
    sectionId: "ewen-ch18-s4",
    readingTime: 6,
    intro: "Move a magnet near a coil and voltage appears — electromagnetic induction, Faraday's and Lenz's laws. This section predicts induced emf size and direction, and grounds transformers, pickups, and induction sensors.",
    objectives: [
      "State Faraday's law $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$",
      "Apply Lenz's law for induced-current direction",
      "Explain the $N$, speed, and field-strength dependencies",
    ],
    concepts: [
      {
        term: "Magnetic flux",
        kind: "definition",
        statement: "Flux $\\Phi = BA\\cos\\theta$ measures field lines threading a loop; only changes in $\\Phi$ induce emf.",
        detail: "A static magnet near a static coil does nothing — motion, switching, or AC is required.",
      },
      {
        term: "Faraday's law",
        kind: "law",
        statement: "Induced emf is $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$: turns times the rate of flux change.",
        detail: "Double the speed, double the volts; double the turns, double the volts.",
      },
      {
        term: "Lenz's law",
        kind: "law",
        statement: "Induced current opposes the change that caused it — the minus sign in Faraday's law.",
        detail: "Pushing a magnet in meets repulsion from the induced pole; pulling out meets attraction. Energy is conserved.",
      },
      {
        term: "Three ways to change flux",
        kind: "method",
        statement: "Change $B$ (move magnet, switch coil), change area/orientation (rotate, squeeze), or change $N$ coupling (slide core).",
        detail: "Generators rotate, transformers alternate $B$, microphones vibrate area — one law, three handles.",
      },
      {
        term: "Eddy currents",
        kind: "insight",
        statement: "Solid cores host swirling induced currents that waste heat; laminations and ferrites choke them.",
        detail: "Induction furnaces and brakes turn the same waste into tools.",
      },
    ],
    figures: [
      {
        caption: "Moving the magnet changes $\\Phi$ through the coil; faster motion and more turns raise $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$.",
        svg: "<svg role='img' aria-label='Moving the magnet changes Phi through the coil; faster motion and more turns raise mathcalE = -NDeltaPhi/Delta t.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"60\" y=\"60\" width=\"30\" height=\"50\"/><rect x=\"90\" y=\"60\" width=\"30\" height=\"50\"/><ellipse cx=\"220\" cy=\"85\" rx=\"15\" ry=\"40\"/><ellipse cx=\"260\" cy=\"85\" rx=\"15\" ry=\"40\"/><ellipse cx=\"300\" cy=\"85\" rx=\"15\" ry=\"40\"/><line x1=\"315\" y1=\"85\" x2=\"360\" y2=\"85\"/><circle cx=\"365\" cy=\"85\" r=\"12\"/><text x=\"55\" y=\"135\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">N S magnet</text><text x=\"355\" y=\"115\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">meter</text><text x=\"150\" y=\"90\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">motion -&gt;</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Drop-magnet emf estimate",
        problem: "A magnet plunges through a $200$-turn coil, changing flux by $3.00 \\times 10^{-4} \\text{ Wb}$ in $0.150 \\text{ s}$. Estimate average emf.",
        steps: [
          { label: "Step 1: Rate per turn", text: "$\\Delta\\Phi/\\Delta t = 3.00 \\times 10^{-4}/0.150 = 2.00 \\times 10^{-3} \\text{ V}$." },
          { label: "Step 2: Times $N$", text: "$\\mathcal{E} = 200 \\times 2.00 \\times 10^{-3} = 0.400 \\text{ V}$." },
        ],
        result: "$0.400 \\text{ V}$ average (peaks higher mid-plunge).",
      },
      {
        title: "Lenz direction check",
        problem: "A north pole approaches a loop face-on. What pole does the loop's induced current present to the magnet?",
        steps: [
          { label: "Step 1: Oppose the increase", text: "Approaching N raises inward flux; induction fights the increase." },
          { label: "Step 2: Face polarity", text: "The loop presents a north face, repelling the approach." },
        ],
        result: "Induced north face — approach is resisted, conserving energy.",
      },
    ],
    keyTakeaways: [
      "Only changing flux induces: $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$.",
      "Lenz: induced effects oppose the change — energy bookkeeping, not malice.",
      "Speed, turns, and field strength are the three volume knobs.",
    ],
    quiz: [
      {
        q: "A magnet sits motionless inside a coil. Induced emf is:",
        options: ["Maximum", "Proportional to strength", "Zero", "Reversed"],
        answer: 2,
        explanation: "No $\\Delta\\Phi/\\Delta t$ means no induction, however strong the static field.",
      },
      {
        q: "Doubling plunge speed and halving turns changes emf by:",
        options: ["$4\\times$", "$2\\times$", "Unchanged ($2 \\times 1/2$)", "$1/4\\times$"],
        answer: 2,
        explanation: "$\\mathcal{E} \\propto N \\times$ rate: $2 \\times (1/2) = 1$.",
      },
      {
        q: "Transformer cores are laminated to:",
        options: ["Raise $N$", "Block eddy-current waste", "Increase weight", "Store charge"],
        answer: 1,
        explanation: "Thin insulated sheets break up swirl paths while passing flux.",
      },
    ],
  },
  {
    sectionId: "ewen-ch18-s5",
    readingTime: 6,
    intro: "Rotate a coil in a magnetic field and the flux swings sinusoidally — the AC generator. This section derives the sine-wave output, relates frequency to rpm, and tours practical alternators from bench units to power stations.",
    objectives: [
      "Explain sine generation by rotation: $\\mathcal{E} = NBA\\omega\\sin\\omega t$",
      "Relate electrical frequency to shaft speed and pole count",
      "Describe slip rings versus commutators (AC versus DC output)",
    ],
    concepts: [
      {
        term: "Rotating-coil emf",
        kind: "theorem",
        statement: "A coil of $N$ turns and area $A$ spinning at $\\omega$ in field $B$ gives $\\mathcal{E} = NBA\\omega\\sin\\omega t$, peaking when cutting fastest.",
        detail: "Peak $\\mathcal{E}_{max} = NBA\\omega$; household $120 \\text{ V}$ rms corresponds to $170 \\text{ V}$ peak.",
      },
      {
        term: "Frequency from rotation",
        kind: "method",
        statement: "One revolution per cycle per pole pair: $f = (\\text{rpm} \\times \\text{pole pairs})/60$.",
        detail: "A 2-pole $3600 \\text{ rpm}$ shaft gives $60 \\text{ Hz}$; 4-pole machines need $1800 \\text{ rpm}$.",
      },
      {
        term: "Slip rings versus commutator",
        kind: "definition",
        statement: "Slip rings preserve AC sine output; a split-ring commutator rectifies mechanically into pulsing DC.",
        detail: "Alternators plus diodes beat DC dynamos for cars — the next chapter's rectifiers finish the job.",
      },
      {
        term: "Practical alternator parts",
        kind: "insight",
        statement: "Field windings (rotor), armature (stator), and exciters scale the bench generator to megawatts.",
        detail: "Power stations spin multi-pole rotors slowly with huge $NBA$; bikes spin tiny magnets fast.",
      },
      {
        term: "Back emf preview",
        kind: "insight",
        statement: "The same rotation that generates in a generator resists in a motor — back emf limits motor current as speed builds.",
        detail: "That symmetry is the next section's motor principle.",
      },
    ],
    examples: [
      {
        title: "Bench generator peak volts",
        problem: "A $100$-turn coil of $0.0200 \\text{ m}^{2}$ spins at $60.0 \\text{ rev}/\\text{s}$ in $0.300 \\text{ T}$. Find peak emf.",
        steps: [
          { label: "Step 1: Angular speed", text: "$\\omega = 2\\pi(60.0) = 377 \\text{ rad}/\\text{s}$." },
          { label: "Step 2: Peak", text: "$\\mathcal{E}_{max} = (100)(0.300)(0.0200)(377) = 226 \\text{ V}$." },
        ],
        result: "$226 \\text{ V}$ peak ($160 \\text{ V}$ rms sine).",
      },
      {
        title: "Hydro-plant pole count",
        problem: "A hydro shaft turns $150 \\text{ rpm}$ and must output $60.0 \\text{ Hz}$. How many poles?",
        steps: [
          { label: "Step 1: Pairs needed", text: "Pairs $= 60f/\\text{rpm} = 3600/150 = 24$ pairs." },
          { label: "Step 2: Poles", text: "$48$ poles — the wide slow-spinning hydro look." },
        ],
        result: "$48$ poles ($24$ pole pairs).",
      },
    ],
    keyTakeaways: [
      "Rotation in $B$ generates $\\mathcal{E}_{max}\\sin\\omega t$ with peak $NBA\\omega$.",
      "Frequency follows shaft speed times pole pairs.",
      "Slip rings give AC; commutators mechanically rectify to DC.",
    ],
    quiz: [
      {
        q: "Doubling spin speed of a generator (same coil/field) changes output by:",
        options: ["Halving voltage and frequency", "Doubling peak voltage and frequency", "Doubling voltage only", "No change"],
        answer: 1,
        explanation: "Both $\\omega$ in $NBA\\omega$ and cycles-per-second double.",
      },
      {
        q: "A $4$-pole alternator needs what rpm for $60 \\text{ Hz}$?",
        options: ["$3600$", "$1800$", "$900$", "$120$"],
        answer: 1,
        explanation: "Two pole pairs: $60 \\times 60/2 = 1800 \\text{ rpm}$.",
      },
      {
        q: "A split-ring commutator on a rotating coil produces:",
        options: ["Pure AC sine", "Pulsing DC (mechanically rectified)", "No output", "Three-phase AC"],
        answer: 1,
        explanation: "The split ring swaps connections each half-turn, flipping the negative lobe upward.",
      },
    ],
  },
  {
    sectionId: "ewen-ch18-s6",
    readingTime: 6,
    intro: "Current in a magnetic field feels a force — the motor principle that spins every appliance. This section applies $F = BIL$, builds the commutated DC motor cycle, and shows back emf regulating speed.",
    objectives: [
      "Apply $F = BIL$ (with $\\sin\\theta$) to wires and coils",
      "Explain commutator switching that keeps torque one-way",
      "Describe back emf, starting current, and motor ratings",
    ],
    concepts: [
      {
        term: "Force on a current",
        kind: "law",
        statement: "A wire carrying $I$ across field $B$ feels $F = BIL\\sin\\theta$, perpendicular to both by the left-hand (motor) rule.",
        detail: "Maximum broadside ($\\theta = 90^{\\circ}$); zero when aligned with $B$.",
      },
      {
        term: "Torque on a coil",
        kind: "theorem",
        statement: "A coil feels torque $\\tau = NBIA\\sin\\theta$, strongest in the plane of the field, zero at the dead-center perpendicular.",
        detail: "Momentum carries it through dead center; the commutator then flips current to keep pulling forward.",
      },
      {
        term: "Commutator action",
        kind: "method",
        statement: "The split ring reverses coil current each half-turn so torque never reverses sign.",
        detail: "Brushes feed the rotating ring; sparking at the gaps is suppressed with capacitors and timing.",
      },
      {
        term: "Back emf",
        kind: "law",
        statement: "The spinning coil generates $\\mathcal{E}_{back} \\propto$ speed, opposing the supply; running current is $(V - \\mathcal{E}_{back})/R$.",
        detail: "Stalled motors draw huge current (no back emf) — starters and fuses protect them.",
      },
      {
        term: "Motor types",
        kind: "insight",
        statement: "DC (series/shunt), universal, single- and three-phase induction motors all trade starting torque against speed control.",
        detail: "Series motors start hard (cranes); induction motors run maintenance-free (pumps, fans).",
      },
    ],
    figures: [
      {
        caption: "DC motor: coil current across $B$ feels $F = BIL$ torque; the split ring flips current each half-turn.",
        svg: "<svg role='img' aria-label='DC motor: coil current across B feels F = BIL torque; the split ring flips current each half-turn.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"60\" y=\"50\" width=\"20\" height=\"100\"/><rect x=\"320\" y=\"50\" width=\"20\" height=\"100\"/><rect x=\"150\" y=\"70\" width=\"100\" height=\"60\"/><circle cx=\"200\" cy=\"100\" r=\"8\"/><line x1=\"150\" y1=\"70\" x2=\"120\" y2=\"70\"/><line x1=\"250\" y1=\"130\" x2=\"280\" y2=\"130\"/><line x1=\"150\" y1=\"100\" x2=\"150\" y2=\"40\"/><polygon points=\"150,40 145,50 155,50\" fill=\"currentColor\" stroke=\"none\"/><line x1=\"250\" y1=\"100\" x2=\"250\" y2=\"160\"/><polygon points=\"250,160 245,150 255,150\" fill=\"currentColor\" stroke=\"none\"/><text x=\"40\" y=\"40\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">N</text><text x=\"330\" y=\"40\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">S</text><text x=\"160\" y=\"170\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">commutator flips I each half turn</text></svg>",
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Force on an armature wire",
        problem: "A $0.200 \\text{ m}$ armature conductor carries $15.0 \\text{ A}$ broadside in $0.400 \\text{ T}$. Find the force.",
        steps: [
          { label: "Step 1: Apply $F = BIL$", text: "$F = (0.400)(15.0)(0.200) = 1.20 \\text{ N}$ per conductor." },
          { label: "Step 2: Scale", text: "Hundreds of conductors sum to tens of newtons of tangential drive." },
        ],
        result: "$1.20 \\text{ N}$ per wire, motor-rule directed.",
      },
      {
        title: "Starting versus running current",
        problem: "A $120 \\text{ V}$ motor has armature $R = 2.00 \\text{ }\\Omega$ and develops $110 \\text{ V}$ back emf at speed. Find starting and running currents.",
        steps: [
          { label: "Step 1: Stalled", text: "$I_{start} = 120/2.00 = 60.0 \\text{ A}$." },
          { label: "Step 2: Running", text: "$I = (120 - 110)/2.00 = 5.00 \\text{ A}$." },
        ],
        result: "$60.0 \\text{ A}$ inrush, $5.00 \\text{ A}$ running — starters limit the first.",
      },
    ],
    keyTakeaways: [
      "$F = BIL$ (broadside) drives every motor conductor.",
      "Commutators flip current each half-turn for one-way torque.",
      "Back emf chokes running current; stalls draw destructive current.",
    ],
    quiz: [
      {
        q: "A wire parallel to $B$ carrying current feels:",
        options: ["Maximum force", "Zero force", "Reversed voltage", "Double current"],
        answer: 1,
        explanation: "$\\sin 0^{\\circ} = 0$: no cross product, no force.",
      },
      {
        q: "The commutator's job is to:",
        options: ["Generate the field", "Reverse coil current each half-turn", "Cool the brushes", "Rectify the supply"],
        answer: 1,
        explanation: "Without flipping, torque would alternate and the motor would only buzz.",
      },
      {
        q: "A motor draws excessive current at start mainly because:",
        options: ["Resistance is infinite", "Back emf is zero at zero speed", "Voltage doubles", "Brushes short"],
        answer: 1,
        explanation: "$I = (V - 0)/R$ is maximal until spin builds opposing emf.",
      },
    ],
  },
  {
    sectionId: "ewen-ch18-s7",
    readingTime: 5,
    intro: "Moving charges curve in magnetic fields — the force $F = qvB$ behind CRTs, mass spectrometers, and auroras. This section computes the deflection, derives the circular-orbit radius, and applies velocity selectors.",
    objectives: [
      "Apply $F = qvB$ with the correct hand rule",
      "Derive circular motion $r = mv/qB$ for perpendicular entry",
      "Explain CRT steering, mass spectrometry, and aurora trapping",
    ],
    concepts: [
      {
        term: "Force on a moving charge",
        kind: "law",
        statement: "Charge $q$ at speed $v$ across $B$ feels $F = qvB\\sin\\theta$, perpendicular to $\\mathbf{v}$ and $\\mathbf{B}$.",
        detail: "Positive charges follow a right-hand rule; electrons curve oppositely.",
      },
      {
        term: "Circular trapping",
        kind: "theorem",
        statement: "Perpendicular entry gives circular motion with $qvB = mv^{2}/r$, so $r = mv/qB$.",
        detail: "Faster or heavier particles ring wider; stronger $B$ or bigger $q$ winds tighter.",
      },
      {
        term: "Velocity selector",
        kind: "method",
        statement: "Crossed $E$ and $B$ pass only speed $v = E/B$ undeflected ($qE = qvB$).",
        detail: "Spectrometers and inkjet filters stage this selector before the bending magnet.",
      },
      {
        term: "CRT and TV steering",
        kind: "insight",
        statement: "Electron guns plus deflection coils sweep beams across phosphors — magnetic steering with $F = qvB$ aim.",
        detail: "Oscilloscopes use electric deflection for speed; old TVs used magnetic yokes for angle.",
      },
      {
        term: "Auroras and belts",
        kind: "insight",
        statement: "Earth's dipole traps solar particles in Van Allen belts; polar precipitation lights auroras.",
        detail: "The same $r = mv/qB$ spirals particles along field lines toward the poles.",
      },
    ],
    examples: [
      {
        title: "Proton orbit in a spectrometer",
        problem: "A proton ($m = 1.67 \\times 10^{-27} \\text{ kg}$, $q = 1.60 \\times 10^{-19} \\text{ C}$) enters $0.500 \\text{ T}$ at $2.00 \\times 10^{5} \\text{ m}/\\text{s}$ perpendicularly. Find $r$.",
        steps: [
          { label: "Step 1: Formula", text: "$r = mv/qB$." },
          { label: "Step 2: Substitute", text: "$r = (1.67 \\times 10^{-27})(2.00 \\times 10^{5})/(1.60 \\times 10^{-19} \\times 0.500) = 4.18 \\times 10^{-3} \\text{ m}$." },
        ],
        result: "$4.18 \\text{ mm}$ orbit — benchtop-scale bending.",
      },
      {
        title: "Velocity selector setting",
        problem: "A selector with $E = 3000 \\text{ V}/\\text{m}$ and $B = 0.0200 \\text{ T}$ passes which speed?",
        steps: [
          { label: "Step 1: Balance", text: "$v = E/B = 3000/0.0200 = 1.50 \\times 10^{5} \\text{ m}/\\text{s}$." },
        ],
        result: "$1.50 \\times 10^{5} \\text{ m}/\\text{s}$ undeflected; others smear aside.",
      },
    ],
    keyTakeaways: [
      "$F = qvB$ bends moving charges perpendicular to motion — no work, only steering.",
      "Perpendicular fields trap circles of radius $mv/qB$.",
      "Selectors ($E/B$), spectrometers, and CRTs are one force applied three ways.",
    ],
    quiz: [
      {
        q: "An electron enters $B$ along the field lines ($\\theta = 0$). It:",
        options: ["Circles tightly", "Continues straight undeflected", "Stops instantly", "Reverses"],
        answer: 1,
        explanation: "$\\sin 0^{\\circ} = 0$: no perpendicular component, no force.",
      },
      {
        q: "Doubling particle speed in a spectrometer magnet (same $B$):",
        options: ["Halves $r$", "Doubles $r$", "Leaves $r$ unchanged", "Quadruples $r$"],
        answer: 1,
        explanation: "$r = mv/qB$ is linear in $v$.",
      },
      {
        q: "Auroras occur near the poles because charged particles:",
        options: ["Are created there", "Spiral along converging field lines into the atmosphere", "Fall as rain", "Reflect sunlight"],
        answer: 1,
        explanation: "Dipole geometry funnels trapped particles to polar precipitation zones.",
      },
    ],
  },
]
