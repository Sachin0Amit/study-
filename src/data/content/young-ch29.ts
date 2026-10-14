import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 29
// Electromagnetic Induction (Sections 29.1 – 29.8)
// ============================================================================

export const youngCh29Content: SectionContent[] = [
  {
    sectionId: "young-ch29-s1",
    readingTime: 4,
    intro: "Push a magnet into a coil and current flows with no battery — Faraday's 1831 miracle. Young replays the magnet-and-coil, switch-and-coil, and generator experiments that force changing flux into the story.",
    objectives: [
      "Describe the induction experiments and their common trigger",
      "Identify changing magnetic flux as the universal inducer",
      "Distinguish induced current direction cases qualitatively",
    ],
    concepts: [
      {
        term: "Faraday's experiments",
        kind: "definition",
        statement: "Moving magnets, switched currents, and squeezed coils all induce current **only while changing**: static fields induce nothing — change is the trigger.",
        detail: "Galvanometers kick during motion and settle at rest — the transient is the phenomenon.",
      },
      {
        term: "Changing flux trigger",
        kind: "insight",
        statement: "Every experiment varies $\\Phi_{B} = \\int \\vec{B} \\cdot d\\vec{A}$ — via $B$, area, or angle — unifying magnet plunges, switch clicks, and coil crushes under one quantity.",
        detail: "This pattern recognition (flux, not field) is Faraday's leap; Section 29.2 quantifies it.",
      },
      {
        term: "Relative motion symmetry",
        kind: "law",
        statement: "Only relative magnet-coil motion matters: pushing either induces identically — the seed of electromagnetic relativity (Chapter 37's magnet-conductor paradox).",
        detail: "Einstein's 1905 opening cites exactly this symmetry: induction cares about relative velocity alone.",
      },
      {
        term: "Induced versus conducted current",
        kind: "definition",
        statement: "**Induced currents** are driven by non-electrostatic fields ($-d\\Phi_{B}/dt$) with no battery; **conduction currents** follow $\\vec{E}$ from charges — same $I$, different push.",
        detail: "Loop with $10\\ \\Omega$ showing $0.5\\ \\mathrm{A}$ implies $5\\ \\mathrm{V}$ of induced emf — sourceless voltage.",
      },
      {
        term: "Galvanometer as detector",
        kind: "method",
        statement: "Center-zero galvanometers read kick direction and size ($\\int I\\,dt = \\Delta\\Phi_{B}/R$): ballistic charge measures flux change absolutely.",
        detail: "Flip coils calibrate magnetometers this way — $180^{\\circ}$ rotation gives $2BA/R$ coulombs.",
      },
    ],
    examples: [
      {
        title: "Plunge versus hold",
        problem: "A magnet plunges into a $200$-turn coil ($A = 5.00 \\times 10^{-4}\\ \\mathrm{m^{2}}$) in $0.100\\ \\mathrm{s}$, raising mean $B$ through it from $0$ to $0.200\\ \\mathrm{T}$, then holds still. Compare galvanometer readings.",
        steps: [
          { label: "Flux change", text: "$\\Delta\\Phi_{B} = (0.200)(5.00 \\times 10^{-4}) = 1.00 \\times 10^{-4}\\ \\mathrm{Wb}$ per turn; $200$ turns link $0.0200\\ \\mathrm{Wb}$-turns." },
          { label: "During plunge", text: "Emf $\\approx 0.0200/0.100 = 0.200\\ \\mathrm{V}$ — visible kick." },
          { label: "Holding", text: "$d\\Phi_{B}/dt = 0$: zero deflection despite strong static field — change, not presence, induces." },
        ],
        result: "$0.200\\ \\mathrm{V}$ while moving; $0$ while held.",
      },
      {
        title: "Squeeze the loop",
        problem: "A circular loop ($r = 0.100\\ \\mathrm{m}$) in $B = 0.500\\ \\mathrm{T}$ normal is crushed to half its area in $0.200\\ \\mathrm{s}$. Find mean emf.",
        steps: [
          { label: "Area change", text: "$A_{1} = \\pi(0.01) = 0.03142$; $A_{2} = 0.01571\\ \\mathrm{m^{2}}$; $\\Delta A = -0.01571$." },
          { label: "Flux change", text: "$\\Delta\\Phi_{B} = (0.500)(-0.01571) = -7.854 \\times 10^{-3}\\ \\mathrm{Wb}$." },
          { label: "Emf", text: "$|\\mathcal{E}| = 7.854 \\times 10^{-3}/0.200 = 0.0393\\ \\mathrm{V} = 39.3\\ \\mathrm{mV}$." },
        ],
        result: "$39\\ \\mathrm{mV}$ from area change alone.",
      },
    ],
    keyTakeaways: [
      "Induction needs change: motion, switching, or deformation — statics induce nothing.",
      "Changing $\\Phi_{B}$ (via $B$, $A$, or angle) unifies all experiments.",
      "Relative motion suffices — the relativity seed.",
    ],
    quiz: [
      {
        q: "A magnet held stationary inside a coil induces:",
        options: ["Steady current", "No current", "Steady voltage only", "Growing current"],
        answer: 1,
        explanation: "Static flux gives $d\\Phi_{B}/dt = 0$: galvanometers rest despite the field's presence.",
      },
      {
        q: "Pushing the coil onto a fixed magnet versus pushing the magnet in gives:",
        options: ["Opposite effects", "Identical induction (relative motion)", "No induction either way", "Double induction"],
        answer: 1,
        explanation: "Only relative velocity changes flux — the symmetry Einstein elevated.",
      },
      {
        q: "Ballistic galvanometer charge $\\int I\\,dt$ measures:",
        options: ["Resistance", "Flux change $\\Delta\\Phi_{B}/R$", "Temperature", "Capacitance"],
        answer: 1,
        explanation: "$IR = -d\\Phi_{B}/dt$ integrates to $Q = -\\Delta\\Phi_{B}/R$ — absolute flux metrology.",
      },
    ],
  },
  {
    sectionId: "young-ch29-s2",
    readingTime: 6,
    intro: "Faraday's law — $\\mathcal{E} = -d\\Phi_{B}/dt$ — is the chapter's master equation: the rate of flux change through a loop equals the emf around it, times turns. Young states it, signs it, and prices real coils.",
    objectives: [
      "State $\\mathcal{E} = -N\\,d\\Phi_{B}/dt$ with each symbol defined",
      "Compute emfs for $B(t)$, $A(t)$, and $\\theta(t)$ variations",
      "Apply the law to multi-turn coils numerically",
    ],
    concepts: [
      {
        term: "Faraday's law",
        kind: "law",
        statement: "Induced emf around a loop is $\\mathcal{E} = -d\\Phi_{B}/dt$; $N$ turns give $\\mathcal{E} = -N\\,d\\Phi_{B}/dt$ — volts equal webers per second (times turns).",
        detail: "$0.01\\ \\mathrm{Wb/s}$ through $500$ turns makes $5\\ \\mathrm{V}$ — induction arithmetic in one line.",
      },
      {
        term: "Flux rule components",
        kind: "method",
        statement: "$\\Phi_{B} = BA\\cos\\theta$: differentiate whichever varies — $A\\cos\\theta\\,dB/dt$ (transformers), $B\\cos\\theta\\,dA/dt$ (rail guns), $-BA\\sin\\theta\\,d\\theta/dt$ (generators).",
        detail: "Generators rotate ($d\\theta/dt = \\omega$); transformers pulse $B$; crush sensors shrink $A$ — one law, three industries.",
      },
      {
        term: "Minus sign (Lenz preview)",
        kind: "notation",
        statement: "The minus sign aims $\\mathcal{E}$ to oppose the flux change (Section 29.3 proves it); magnitudes ignore it, directions obey it.",
        detail: "Dropping the sign predicts helper currents that bootstrap energy from nothing — impossible by conservation.",
      },
      {
        term: "Emf versus potential",
        kind: "definition",
        statement: "Induced emf $\\oint \\vec{E} \\cdot d\\vec{l} = -d\\Phi_{B}/dt$ is work per charge around a closed path — not a potential difference (no endpoints, nonconservative $\\vec{E}$).",
        detail: "Voltmeters across identical points read differently with enclosed $d\\Phi_{B}/dt$ between probes — Lewin's paradox resolved.",
      },
      {
        term: "Weber-per-second volts",
        kind: "insight",
        statement: "Units check everything: $[\\Phi_{B}]/[t] = \\mathrm{Wb/s} = \\mathrm{T \\cdot m^{2}/s} = \\mathrm{(N/(A \\cdot m)) \\cdot m^{2}/s} = \\mathrm{J/C} = \\mathrm{V}$ — flux rate is voltage by dimensional identity.",
        detail: "Order-of-magnitude induction estimates reduce to area-times-tesla-per-second.",
      },
    ],
    figures: [
      {
        caption: "Flux $\\Phi_{B} = BA\\cos\\theta$ changes via $B(t)$, $A(t)$, or $\\theta(t)$ — each time-derivative drives $\\mathcal{E} = -N\\,d\\Phi_{B}/dt$.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three flux change mechanisms"><circle cx="80" cy="85" r="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="150" font-size="11" fill="currentColor">B(t) pulses</text><circle cx="200" cy="85" r="40" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="200" cy="85" r="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><text x="175" y="150" font-size="11" fill="currentColor">A(t) shrinks</text><ellipse cx="320" cy="85" rx="40" ry="25" fill="none" stroke="currentColor" stroke-width="2"/><text x="295" y="150" font-size="11" fill="currentColor">θ(t) spins</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Transformer-core emf",
        problem: "A $300$-turn coil wraps $A = 4.00 \\times 10^{-4}\\ \\mathrm{m^{2}}$ with $B(t) = (0.500\\ \\mathrm{T})\\sin(377t)$. Find peak emf.",
        steps: [
          { label: "Flux", text: "$\\Phi_{B} = AB = (4.00 \\times 10^{-4})(0.500)\\sin(377t) = 2.00 \\times 10^{-4}\\sin(377t)$." },
          { label: "Differentiate", text: "$\\mathcal{E} = -N\\,d\\Phi_{B}/dt = -(300)(2.00 \\times 10^{-4})(377)\\cos(377t) = -22.62\\cos(377t)\\ \\mathrm{V}$." },
          { label: "Peak", text: "$22.6\\ \\mathrm{V}$ peak ($16.0\\ \\mathrm{V}$ rms) — mains-frequency secondaries in a line." },
        ],
        result: "$\\mathcal{E}_{\\mathrm{peak}} = 22.6\\ \\mathrm{V}$.",
      },
      {
        title: "Rotating loop generator",
        problem: "A $50$-turn, $A = 0.020\\ \\mathrm{m^{2}}$ coil spins at $60\\ \\mathrm{Hz}$ ($\\omega = 377\\ \\mathrm{rad/s}$) in $B = 0.800\\ \\mathrm{T}$. Find peak emf.",
        steps: [
          { label: "Flux", text: "$\\Phi_{B} = BA\\cos(\\omega t) = (0.800)(0.020)\\cos(\\omega t) = 0.0160\\cos(\\omega t)$." },
          { label: "Emf", text: "$\\mathcal{E} = -N\\,d\\Phi_{B}/dt = (50)(0.0160)(377)\\sin(\\omega t) = 301.6\\sin(\\omega t)\\ \\mathrm{V}$." },
          { label: "Peak and rms", text: "$302\\ \\mathrm{V}$ peak, $213\\ \\mathrm{V}$ rms — household-scale generation from a hand-sized coil." },
        ],
        result: "$302\\ \\mathrm{V}$ peak ($213\\ \\mathrm{V}$ rms).",
      },
    ],
    keyTakeaways: [
      "$\\mathcal{E} = -N\\,d\\Phi_{B}/dt$: flux rate (times turns) is voltage.",
      "Vary $B$, $A$, or $\\theta$ — transformers, crushers, generators.",
      "Induced emf loops closed paths; it is not a potential difference.",
    ],
    quiz: [
      {
        q: "Doubling turns and halving $d\\Phi_{B}/dt$ changes $|\\mathcal{E}|$ by:",
        options: ["$2$ times", "Unchanged", "$1/2$", "$4$ times"],
        answer: 1,
        explanation: "$|\\mathcal{E}| = N|d\\Phi_{B}/dt|$: $2 \\times 1/2 = 1$.",
      },
      {
        q: "A loop in steady uniform $\\vec{B}$ has induced emf:",
        options: ["$BA$", "Zero", "$NBA$", "Infinite"],
        answer: 1,
        explanation: "No time variation means $d\\Phi_{B}/dt = 0$ regardless of flux size.",
      },
      {
        q: "$1\\ \\mathrm{Wb/s}$ equals:",
        options: ["$1\\ \\mathrm{T}$", "$1\\ \\mathrm{V}$", "$1\\ \\mathrm{A}$", "$1\\ \\Omega$"],
        answer: 1,
        explanation: "Flux rate dimensionally is work per charge — volts.",
      },
      {
        q: "Generator coils produce sinusoidal emf because:",
        options: ["$B$ oscillates", "Area oscillates", "$\\cos(\\omega t)$ differentiates to $\\mp\\omega\\sin(\\omega t)$", "Turns vary"],
        answer: 2,
        explanation: "Rotation varies $\\theta = \\omega t$; the derivative pulls out $\\omega$ with sine phase.",
      },
    ],
  },
  {
    sectionId: "young-ch29-s3",
    readingTime: 5,
    intro: "Lenz's law gives Faraday's minus sign teeth: induced currents oppose the change that makes them. Young turns opposition into a direction algorithm that never fails — and proves helpers would break energy conservation.",
    objectives: [
      "State Lenz's law as opposition to flux change",
      "Assign induced-current directions for rising/falling flux",
      "Rule out helper currents via energy conservation",
    ],
    concepts: [
      {
        term: "Lenz's law",
        kind: "law",
        statement: "Induced effects **oppose the change** in flux: rising $\\Phi_{B}$ induces fields fighting the rise; falling $\\Phi_{B}$ induces fields fighting the fall — inertia for flux.",
        detail: "Push N-pole in: coil becomes N-facing-N (repel); pull out: S-facing-N (attract) — mechanical resistance you can feel.",
      },
      {
        term: "Direction algorithm",
        kind: "method",
        statement: "(1) Name $\\vec{B}$ and whether $|\\Phi_{B}|$ rises or falls. (2) Induced $\\vec{B}_{\\mathrm{ind}}$ opposes the change (opposite for rise, same for fall). (3) RHR-grasp $\\vec{B}_{\\mad ind}$ gives $I$ direction.",
        detail: "Three steps, any geometry: bar magnets, solenoids, loops in uniform $B(t)$ all submit.",
      },
      {
        term: "Energy proof",
        kind: "theorem",
        statement: "Helper currents (aiding the change) would grow flux, growing emf, growing current — bootstrapping infinite energy from a nudge. Opposition is conservation's demand, not convention.",
        detail: "Lenz's minus sign is the second law's electromagnetic cousin: no free amplification.",
      },
      {
        term: "Lenz force on motion",
        kind: "insight",
        statement: "Motional induction always resists the motion ($\\vec{F} = -b\\vec{v}$-like): pushing magnets takes work that becomes $I^{2}R$ heat — thegenerator's mechanical-to-electrical conversion felt in the arm.",
        detail: "Drop a magnet through copper pipe: eddy braking floats it down slowly — Lenz levitation and damping.",
      },
      {
        term: "Sign-error firewall",
        kind: "notation",
        statement: "Compute magnitudes with $|\\mathcal{E}| = N|d\\Phi_{B}/dt|$, then assign direction purely by Lenz — never by formula signs. Separation prevents $90$ percent of induction errors.",
        detail: "Formulas give size; palms give sense: magnitude from calculus, direction from hands.",
      },
    ],
    examples: [
      {
        title: "Magnet plunge directions",
        problem: "N-pole plunges toward a loop, then withdraws. Give induced $B$ and current sense (viewed from magnet side) in each phase.",
        steps: [
          { label: "Approach", text: "Flux toward loop rises; induced $\\vec{B}$ points back toward magnet (oppose rise) — current counterclockwise viewed from magnet (RHR grasp toward observer)." },
          { label: "Withdraw", text: "Flux falls; induced $\\vec{B}$ follows the retreating field (oppose fall) — current clockwise." },
          { label: "Work", text: "Approach repels your push; withdrawal attracts against your pull — you fund $I^{2}R$ both ways." },
        ],
        result: "Approach: CCW; withdraw: CW (from magnet side).",
      },
      {
        title: "Solenoid switch-off",
        problem: "A solenoid's rightward $B$ collapses (switch opened). Which way does a surrounding loop's induced current point?",
        steps: [
          { label: "Change", text: "Rightward flux falls." },
          { label: "Oppose", text: "Induced $\\vec{B}$ points right (sustain the dying flux)." },
          { label: "Current", text: "RHR grasp right: fingers curl with current — viewed from the right, counterclockwise." },
        ],
        result: "Current sustains rightward flux: CCW from the right.",
      },
    ],
    keyTakeaways: [
      "Induced fields oppose flux change — rise fights, fall sustains.",
      "Three-step algorithm (change → $\\vec{B}_{\\mathrm{ind}}$ → RHR current) never fails.",
      "Opposition is energy conservation; helpers would bootstrap infinity.",
    ],
    quiz: [
      {
        q: "Pushing N toward a loop induces a facing pole that:",
        options: ["Attracts (S)", "Repels (N opposes the rise)", "Does nothing", "Demagnetizes"],
        answer: 1,
        explanation: "Rising toward-flux induces away-pointing $\\vec{B}$: N-facing-N repulsion resisting the push.",
      },
      {
        q: "Lenz's law follows from:",
        options: ["Coulomb's law", "Energy conservation (helpers would self-amplify)", "The zeroth law", "Ohm's law alone"],
        answer: 1,
        explanation: "Aiding currents would grow their own cause without bound — free energy, forbidden.",
      },
      {
        q: "Withdrawing the magnet reverses current because:",
        options: ["Field direction flips", "Falling flux must be sustained, opposite to fighting a rise", "Resistance changes", "Turns reverse"],
        answer: 1,
        explanation: "Opposition targets the change: rise versus fall demand opposite induced fields.",
      },
    ],
  },
  {
    sectionId: "young-ch29-s4",
    readingTime: 6,
    intro: "Move a conductor through $\\vec{B}$ and charges separate by $q\\vec{v} \\times \\vec{B}$ — motional emf. Young derives $\\mathcal{E} = vBl$, analyzes the sliding-bar generator with $I^{2}R$ and $Fv$ balance, and spins AC/DC machines.",
    objectives: [
      "Derive $\\mathcal{E} = vBl$ for perpendicular motion",
      "Solve sliding-bar problems with $I = vBl/R$ and $F = B^{2}l^{2}v/R$",
      "Explain AC (slip rings) versus DC (commutator) output",
    ],
    concepts: [
      {
        term: "Motional emf",
        kind: "theorem",
        statement: "Rod of length $l$ at speed $v \\perp \\vec{B}$ (mutually perpendicular) develops $\\mathcal{E} = vBl$: $2\\ \\mathrm{m/s} \\times 0.3\\ \\mathrm{m} \\times 0.5\\ \\mathrm{T} = 0.3\\ \\mathrm{V}$ — flight through fields makes volts.",
        detail: "Charges pile until $qE = qvB$ balances: $E = vB$ across $l$ gives $V = vBl$.",
      },
      {
        term: "Sliding-bar generator",
        kind: "method",
        statement: "Bar on rails ($R$ total): $I = vBl/R$ circulates (Lenz opposes motion with $F = IlB = B^{2}l^{2}v/R$); mechanical $Fv = B^{2}l^{2}v^{2}/R$ equals electrical $I^{2}R$ exactly.",
        detail: "Pulling at $3\\ \\mathrm{m/s}$ with $B = 0.4\\ \\mathrm{T}$, $l = 0.5\\ \\mathrm{m}$, $R = 2\\ \\Omega$: $I = 0.3\\ \\mathrm{A}$, $F = 0.06\\ \\mathrm{N}$, $P = 0.18\\ \\mathrm{W}$ both ledgers.",
      },
      {
        term: "General motional form",
        kind: "law",
        statement: "$\\mathcal{E} = \\int (\\vec{v} \\times \\vec{B}) \\cdot d\\vec{l}$ handles arbitrary angles and nonuniform $\\vec{B}$ — only perpendicular components contribute.",
        detail: "Parallel motion gives zero; tilted gives $vBl\\sin$-factors per cross-product geometry.",
      },
      {
        term: "Generators: AC and DC",
        kind: "insight",
        statement: "Rotating coils give $\\mathcal{E} = NBA\\omega\\sin(\\omega t)$; slip rings output AC, split-ring commutators rectify to pulsing DC — same physics, different pickoff.",
        detail: "Mains $50/60\\ \\mathrm{Hz}$ is rotation frequency made electrical; car alternators rectify with diodes instead of commutators.",
      },
      {
        term: "Eddy braking preview",
        kind: "notation",
        statement: "Bulk conductors cut flux in patches, swirling eddy currents whose $I\\vec{l} \\times \\vec{B}$ always brakes — Section 29.6's trains and meters.",
        detail: "Sliding bars are eddies straightened into one loop: same $vBl$, same opposition.",
      },
    ],
    figures: [
      {
        caption: "Sliding bar on rails: $\\mathcal{E} = vBl$ drives $I = vBl/R$; Lenz drag $F = B^{2}l^{2}v/R$ balances pull, $Fv = I^{2}R$.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sliding bar generator with Lenz drag"><line x1="60" y1="50" x2="340" y2="50" stroke="currentColor" stroke-width="2"/><line x1="60" y1="120" x2="340" y2="120" stroke="currentColor" stroke-width="2"/><line x1="340" y1="50" x2="340" y2="120" stroke="currentColor" stroke-width="3"/><line x1="150" y1="50" x2="150" y2="120" stroke="currentColor" stroke-width="4"/><text x="140" y="140" font-size="12" fill="currentColor">bar v→</text><text x="345" y="90" font-size="12" fill="currentColor">R</text><text x="200" y="40" font-size="12" fill="currentColor">B out; I loops; F drag ←</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Sliding bar full solution",
        problem: "$B = 0.600\\ \\mathrm{T}$ (out), $l = 0.400\\ \\mathrm{m}$, $v = 5.00\\ \\mathrm{m/s}$, $R = 3.00\\ \\Omega$. Find $\\mathcal{E}$, $I$, $F$, $P$.",
        steps: [
          { label: "Emf", text: "$\\mathcal{E} = vBl = (5.00)(0.600)(0.400) = 1.20\\ \\mathrm{V}$." },
          { label: "Current", text: "$I = 1.20/3.00 = 0.400\\ \\mathrm{A}$ (Lenz direction opposing motion)." },
          { label: "Force and power", text: "$F = IlB = (0.400)(0.400)(0.600) = 0.0960\\ \\mathrm{N}$; $Fv = 0.480\\ \\mathrm{W} = I^{2}R = 0.160(3.00)$. Balanced." },
        ],
        result: "$1.20\\ \\mathrm{V}$, $0.400\\ \\mathrm{A}$, $0.096\\ \\mathrm{N}$ drag, $0.480\\ \\mathrm{W}$ converted.",
      },
      {
        title: "Airplane wing emf",
        problem: "A $30.0\\ \\mathrm{m}$ wing flies at $250\\ \\mathrm{m/s}$ through Earth's $B_{\\perp} = 4.00 \\times 10^{-5}\\ \\mathrm{T}$. Find wingtip emf.",
        steps: [
          { label: "Apply", text: "$\\mathcal{E} = vBl = (250)(4.00 \\times 10^{-5})(30.0) = 0.300\\ \\mathrm{V}$." },
          { label: "Use", text: "Too small to power, big enough to measure — magnetometer flights read $B$ this way." },
          { label: "Polarity", text: "$q\\vec{v} \\times \\vec{B}$ signs the tips; reversing heading flips polarity." },
        ],
        result: "$0.300\\ \\mathrm{V}$ wingtip to wingtip.",
      },
    ],
    keyTakeaways: [
      "$\\mathcal{E} = vBl$ (mutually perpendicular); general form integrates $\\vec{v} \\times \\vec{B}$.",
      "Sliding bars balance $Fv = I^{2}R$ with Lenz drag $B^{2}l^{2}v/R$.",
      "Rotation gives $NBA\\omega\\sin(\\omega t)$; rings pick AC, commutators DC.",
    ],
    quiz: [
      {
        q: "Motional emf vanishes when motion is:",
        options: ["Perpendicular to $\\vec{B}$", "Parallel to $\\vec{B}$", "Fast", "In strong $\\vec{B}$"],
        answer: 1,
        explanation: "$\\vec{v} \\times \\vec{B} = 0$ for aligned motion — no charge separation.",
      },
      {
        q: "Sliding-bar drag force scales with $v$ as:",
        options: ["Constant", "Linearly ($F = B^{2}l^{2}v/R$)", "Quadratically", "Inversely"],
        answer: 1,
        explanation: "$I \\propto v$ and $F = IlB$: viscous-like magnetic damping.",
      },
      {
        q: "Pulling power $Fv$ in the sliding bar equals:",
        options: ["Zero", "$I^{2}R$ dissipated", "Stored capacitance", "Radiated light"],
        answer: 1,
        explanation: "Mechanical input converts fully (ideal) to Joule heating — energy conservation verified.",
      },
    ],
  },
  {
    sectionId: "young-ch29-s5",
    readingTime: 5,
    intro: "Changing flux induces not just emf but a whole new electric field — circulating, nonconservative, with no charges. Young introduces $\\oint \\vec{E} \\cdot d\\vec{l} = -d\\Phi_{B}/dt$ and prices betatrons.",
    objectives: [
      "State the induced-$\\vec{E}$ law and its nonconservative meaning",
      "Compute $E = (r/2)|dB/dt|$ inside uniform $d\\vec{B}/dt$ regions",
      "Contrast induced fields with Coulomb fields",
    ],
    concepts: [
      {
        term: "Induced electric field",
        kind: "definition",
        statement: "A changing $\\vec{B}$ creates $\\vec{E}$ with $\\oint \\vec{E} \\cdot d\\vec{l} = -d\\Phi_{B}/dt$: field lines are closed loops encircling $d\\vec{B}/dt$ (RHR-opposed).",
        detail: "No charges source it; no scalar $V$ describes it globally — voltmeters become path-dependent inside.",
      },
      {
        term: "Cylindrical solution",
        kind: "theorem",
        statement: "Uniform $dB/dt$ over radius $R$: $E = (r/2)|dB/dt|$ for $r < R$, $E = (R^{2}/2r)|dB/dt|$ for $r > R$ — linear rise inside, $1/r$ fall outside.",
        detail: "$dB/dt = 10\\ \\mathrm{T/s}$, $R = 5\\ \\mathrm{cm}$: $E = 0.25\\ \\mathrm{V/m}$ at rim — betatron-scale gradients.",
      },
      {
        term: "Nonconservative signature",
        kind: "law",
        statement: "$\\oint \\vec{E} \\cdot d\\vec{l} \\ne 0$ breaks path independence: $\\nabla \\times \\vec{E} = -\\partial\\vec{B}/\\partial t$ — Maxwell's third equation, first half of light.",
        detail: "Electrostatics' $\\oint \\vec{E} \\cdot d\\vec{l} = 0$ holds only for static $\\vec{B}$; dynamics adds the curl.",
      },
      {
        term: "Betatron",
        kind: "insight",
        statement: "**Betatrons** accelerate electrons with induced $E$ around a rising $\\vec{B}$ ($2$:$1$ Widerøe condition holds orbits) — transformers with the secondary replaced by a vacuum ring.",
        detail: "$100\\ \\mathrm{MeV}$ betatrons X-rayed steel before linacs took over — pure Faraday acceleration.",
      },
      {
        term: "Coulomb versus induced",
        kind: "method",
        statement: "Coulomb $\\vec{E}$ starts/ends on charge with $\\nabla \\cdot \\vec{E} = \\rho/\\epsilon_{0}$; induced $\\vec{E}$ loops with $\\nabla \\times \\vec{E} = -\\partial\\vec{B}/\\partial t$ — Helmholtz splits every field into both parts.",
        detail: "Antennas radiate the induced part; capacitors hold the Coulomb part.",
      },
    ],
    examples: [
      {
        title: "Solenoid ramp field",
        problem: "A solenoid ($R = 0.040\\ \\mathrm{m}$) ramps $dB/dt = 2.50\\ \\mathrm{T/s}$ uniform inside. Find induced $E$ at $r = 0.030\\ \\mathrm{m}$ and $r = 0.080\\ \\mathrm{m}$.",
        steps: [
          { label: "Inside", text: "$E = (r/2)dB/dt = (0.030/2)(2.50) = 0.0375\\ \\mathrm{V/m}$ azimuthal." },
          { label: "Outside", text: "$E = (R^{2}/2r)dB/dt = (0.0016/0.160)(2.50) = (0.0100)(2.50) = 0.0250\\ \\mathrm{V/m}$." },
          { label: "Peak at rim", text: "$E(R) = (0.040/2)(2.50) = 0.0500\\ \\mathrm{V/m}$ — maximum at the boundary, as theory demands." },
        ],
        result: "$37.5\\ \\mathrm{mV/m}$ inside; $25.0\\ \\mathrm{mV/m}$ outside.",
      },
      {
        title: "Betatron energy gain",
        problem: "Electrons orbit $r = 0.500\\ \\mathrm{m}$ with rim $E = 20.0\\ \\mathrm{V/m}$. Find energy gain per turn and turns to $50\\ \\mathrm{MeV}$.",
        steps: [
          { label: "Per turn", text: "$\\Delta K = eE(2\\pi r) = (20.0)(\\pi) = 62.83\\ \\mathrm{eV}$ per revolution." },
          { label: "Turns", text: "$50 \\times 10^{6}/62.83 = 7.96 \\times 10^{5}$ turns." },
          { label: "Time", text: "At near-$c$ ($3\\ \\mathrm{ns}$/turn): $2.4\\ \\mathrm{ms}$ to full energy — milliseconds of circling." },
        ],
        result: "$62.8\\ \\mathrm{eV}$/turn; $8.0 \\times 10^{5}$ turns to $50\\ \\mathrm{MeV}$.",
      },
    ],
    keyTakeaways: [
      "$\\oint \\vec{E} \\cdot d\\vec{l} = -d\\Phi_{B}/dt$: changing $\\vec{B}$ curls $\\vec{E}$ into loops.",
      "Cylindrical $E$: $(r/2)dB/dt$ inside, $(R^{2}/2r)dB/dt$ outside.",
      "Induced $\\vec{E}$ is nonconservative ($\\nabla \\times \\vec{E} \\ne 0$); betatrons surf it.",
    ],
    quiz: [
      {
        q: "Induced electric field lines are:",
        options: ["Radial from charges", "Closed loops around $d\\vec{B}/dt$", "Straight uniform lines", "Nonexistent"],
        answer: 1,
        explanation: "No source charges exist; Faraday's law curls them around the flux change.",
      },
      {
        q: "Outside a uniform $dB/dt$ region, induced $E$ falls as:",
        options: ["$r$", "$1/r$", "$r^{2}$", "Constant"],
        answer: 1,
        explanation: "Fixed enclosed $d\\Phi_{B}/dt$ spread over $2\\pi r$: $E = (R^{2}/2r)dB/dt$.",
      },
      {
        q: "A betatron accelerates with:",
        options: ["Static Coulomb fields", "Induced azimuthal $E$ from rising $B$", "Permanent magnets only", "Laser pressure"],
        answer: 1,
        explanation: "$-d\\Phi_{B}/dt$ drives the ring field each cycle — transformer action on free electrons.",
      },
    ],
  },
  {
    sectionId: "young-ch29-s6",
    readingTime: 4,
    intro: "Bulk metal in changing flux swirls with eddy currents — braking trains, damping meters, heating pots. Young explains their Lenz opposition and the laminations that tame them.",
    objectives: [
      "Explain eddy-current origin in bulk conductors",
      "Describe braking, damping, and induction-heating uses",
      "Explain laminations and slots that suppress eddies",
    ],
    concepts: [
      {
        term: "Eddy currents",
        kind: "definition",
        statement: "**Eddy currents** are induced loops inside bulk conductors exposed to $d\\Phi_{B}/dt$ or motion through $\\vec{B}$ — Faraday's law with the circuit being the metal itself.",
        detail: "No wires needed: any $vBl$-scale patch drives circulating $I = \\mathcal{E}/R_{\\mathrm{path}}$.",
      },
      {
        term: "Eddy braking",
        kind: "law",
        statement: "Motion through $\\vec{B}$ breeds eddies whose $I\\vec{l} \\times \\vec{B}$ opposes motion ($F \\propto v$): maglev and coaster brakes dissipate $mv^{2}/2$ as $I^{2}R$ without contact.",
        detail: "Drop a magnet down copper pipe: seconds-long fall — Lenz levitation in a tube.",
      },
      {
        term: "Induction heating",
        kind: "method",
        statement: "AC $\\vec{B}$ ($\\mathrm{kHz}$–$\\mathrm{MHz}$) drives skin-depth eddies ($\\delta = \\sqrt{2\\rho/(\\omega\\mu)}$) heating cookware and forging billets from within — $\\sim 90$ percent efficient.",
        detail: "Ferromagnetic pans concentrate flux (high $\\mu$) and resist (hysteresis adds) — induction-ready by physics.",
      },
      {
        term: "Meter damping",
        kind: "insight",
        statement: "Galvanometer coils swing aluminum formers through magnet gaps: eddy drag ($\\propto \\omega$) critically damps needles without overshoot — Lenz as shock absorber.",
        detail: "Dead-beat movements settle in one swing; undamped ones oscillate for seconds.",
      },
      {
        term: "Laminations",
        kind: "notation",
        statement: "**Laminations** (thin insulated sheets) and slots break eddy paths, raising $R_{\\mathrm{path}}$ and cutting $\\mathcal{E}^{2}/R$ loss — transformer cores and motor armatures are sliced by design.",
        detail: "$0.3\\ \\mathrm{mm}$ silicon-steel sheets cut $60\\ \\mathrm{Hz}$ losses hundred-fold versus solid iron.",
      },
    ],
    examples: [
      {
        title: "Falling magnet in copper pipe",
        problem: "Explain quantitatively why a neodymium magnet ($m = 0.020\\ \\mathrm{kg}$) falls slowly through copper pipe but fast through PVC.",
        steps: [
          { label: "Copper", text: "Motion induces eddies ($\\mathcal{E} \\sim vBl$); drag $F \\propto v$ balances $mg = 0.196\\ \\mathrm{N}$ at $v_{t} \\sim 0.1\\ \\mathrm{m/s}$ — seconds per meter." },
          { label: "PVC", text: "No carriers, no eddies: free fall $9.8\\ \\mathrm{m/s^{2}}$ — tenths of a second." },
          { label: "Energy", text: "$mgh$ becomes $I^{2}R$ heat in copper (pipe warms); in PVC it becomes kinetic." },
        ],
        result: "Eddy drag terminal velocity versus free fall — Lenz made visible.",
      },
      {
        title: "Induction cooktop power",
        problem: "A cooktop induces $\\mathcal{E}_{\\mathrm{rms}} = 2.00\\ \\mathrm{V}$ around eddy paths of $R = 0.050\\ \\Omega$ in a pan. Find heating power.",
        steps: [
          { label: "Power", text: "$P = \\mathcal{E}^{2}/R = 4.00/0.050 = 80.0\\ \\mathrm{W}$ per path-family." },
          { label: "Many paths", text: "Dozens of parallel patch-loops sum to $\\sim 2\\ \\mathrm{kW}$ — dinner in minutes." },
          { label: "Control", text: "$P \\propto \\mathcal{E}^{2} \\propto f^{2}B^{2}$: frequency knob is the burner dial." },
        ],
        result: "$80\\ \\mathrm{W}$ per eddy family; kilowatts total.",
      },
    ],
    keyTakeaways: [
      "Bulk $d\\Phi_{B}/dt$ or motion swirls eddies — Faraday without wires.",
      "Eddies brake ($F \\propto v$), damp meters, and heat ($\\mathcal{E}^{2}/R$) efficiently.",
      "Laminations raise path $R$ to starve unwanted eddies.",
    ],
    quiz: [
      {
        q: "Eddy braking force scales with speed as:",
        options: ["Constant", "Proportional to $v$", "$v^{2}$", "$1/v$"],
        answer: 1,
        explanation: "$\\mathcal{E} \\propto v$ gives $I \\propto v$ and $F = IlB \\propto v$ — magnetic viscosity.",
      },
      {
        q: "Laminated cores reduce losses by:",
        options: ["Raising $B$", "Breaking eddy paths (higher $R$, lower $\\mathcal{E}^{2}/R$)", "Increasing frequency", "Removing iron"],
        answer: 1,
        explanation: "Thin insulation slices circulation area; each sheet's emf and volume shrink together.",
      },
      {
        q: "Induction cooktops heat efficiently because eddies flow:",
        options: ["In the ceramic", "Inside the pan metal itself (skin-depth $I^{2}R$)", "Through the air", "Only in copper coils"],
        answer: 1,
        explanation: "The food vessel is the shorted secondary — heat born in the load, not transferred to it.",
      },
    ],
  },
  {
    sectionId: "young-ch29-s7",
    readingTime: 6,
    intro: "Ampère's law breaks for charging capacitors — unless changing $\\vec{E}$ counts as current. Young adds Maxwell's displacement current, completes the four equations, and predicts waves.",
    objectives: [
      "Explain the charging-capacitor paradox for Ampère's law",
      "State Maxwell-Ampère with $i_{D} = \\epsilon_{0}\\,d\\Phi_{E}/dt$",
      "List Maxwell's equations and their wave implication",
    ],
    concepts: [
      {
        term: "Capacitor paradox",
        kind: "insight",
        statement: "An Ampèrian loop around a charging wire threads conduction current through a spanning disk but zero current through a bag bulging between capacitor plates — same loop, contradictory $I_{\\mathrm{enc}}$ — so Ampère's form is incomplete.",
        detail: "Surfaces sharing a boundary must agree; conduction alone lets them disagree — a law-breaking ambiguity.",
      },
      {
        term: "Displacement current",
        kind: "definition",
        statement: "**Displacement current** $i_{D} = \\epsilon_{0}\\,d\\Phi_{E}/dt$ flows wherever $\\vec{E}$ changes (vacuum included); between charging plates it exactly equals the wire's $i_{C}$ — continuity restored.",
        detail: "$1\\ \\mathrm{A}$ charging builds $d\\Phi_{E}/dt = 1.13 \\times 10^{11}\\ \\mathrm{V \\cdot m/s}$; times $\\epsilon_{0}$ returns $1\\ \\mathrm{A}$ of $i_{D}$.",
      },
      {
        term: "Maxwell-Ampère law",
        kind: "law",
        statement: "$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_{0}(i_{C} + i_{D}) = \\mu_{0}i_{C} + \\mu_{0}\\epsilon_{0}\\,d\\Phi_{E}/dt$: conduction plus displacement thread loops on equal footing.",
        detail: "Capacitor gaps magnetize as if current crossed — compasses between plates deflect during charging.",
      },
      {
        term: "Maxwell's equations",
        kind: "theorem",
        statement: "Vacuum dynamics close as $\\oint \\vec{E} \\cdot d\\vec{A} = Q/\\epsilon_{0}$, $\\oint \\vec{B} \\cdot d\\vec{A} = 0$, $\\oint \\vec{E} \\cdot d\\vec{l} = -d\\Phi_{B}/dt$, $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_{0}i + \\mu_{0}\\epsilon_{0}\\,d\\Phi_{E}/dt$ — four lines governing all classical electromagnetism.",
        detail: "Symmetric time-derivatives ($-d\\Phi_{B}/dt$, $+\\mu_{0}\\epsilon_{0}\\,d\\Phi_{E}/dt$) bootstrap waves: changing $\\vec{E}$ makes $\\vec{B}$ makes $\\vec{E}$ — light (Chapter 32).",
      },
      {
        term: "Wave speed preview",
        kind: "notation",
        statement: "The product $\\mu_{0}\\epsilon_{0} = 1/c^{2}$ sets $c = 3.00 \\times 10^{8}\\ \\mathrm{m/s}$ — displacement current's coefficient is light speed in disguise.",
        detail: "Maxwell computed $1/\\sqrt{\\mu_{0}\\epsilon_{0}}$ from lab constants and found optics' $c$ — the unification moment.",
      },
    ],
    figures: [
      {
        caption: "Charging capacitor: disk surface threads $i_{C}$ but the bag threads none — displacement $i_{D} = \\epsilon_{0}\\,d\\Phi_{E}/dt$ between plates restores agreement.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Displacement current between capacitor plates"><line x1="150" y1="30" x2="150" y2="70" stroke="currentColor" stroke-width="3"/><line x1="250" y1="30" x2="250" y2="70" stroke="currentColor" stroke-width="3"/><line x1="150" y1="100" x2="150" y2="140" stroke="currentColor" stroke-width="3"/><line x1="250" y1="100" x2="250" y2="140" stroke="currentColor" stroke-width="3"/><ellipse cx="200" cy="85" rx="70" ry="30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 3"/><text x="170" y="90" font-size="12" fill="currentColor">iD=E-dot flux</text><text x="120" y="25" font-size="12" fill="currentColor">iC in wire</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Displacement between plates",
        problem: "A $2.00\\ \\mu\\mathrm{F}$ capacitor charges at $dV/dt = 500\\ \\mathrm{V/s}$. Find $i_{D}$ and compare with $i_{C}$.",
        steps: [
          { label: "Conduction", text: "$i_{C} = C\\,dV/dt = (2.00 \\times 10^{-6})(500) = 1.00 \\times 10^{-3}\\ \\mathrm{A}$." },
          { label: "Displacement", text: "$i_{D} = \\epsilon_{0}A\\,dE/dt = C\\,dV/dt = 1.00\\ \\mathrm{mA}$ — identical by $C = \\epsilon_{0}A/d$ algebra." },
          { label: "Meaning", text: "The gap carries the full ampere as field change — Ampère's loop reads $1\\ \\mathrm{mA}$ through every spanning surface." },
        ],
        result: "$i_{D} = i_{C} = 1.00\\ \\mathrm{mA}$.",
      },
      {
        title: "B between charging plates",
        problem: "Circular plates ($R = 0.060\\ \\mathrm{m}$) charge at $i_{C} = 2.00\\ \\mathrm{A}$. Find $B$ at $r = 0.030\\ \\mathrm{m}$ between them.",
        steps: [
          { label: "Enclosed displacement", text: "$i_{D,\\mathrm{enc}} = i_{C}(r/R)^{2} = 2.00(0.25) = 0.500\\ \\mathrm{A}$." },
          { label: "Ampère", text: "$B(2\\pi r) = \\mu_{0}(0.500)$; $B = (4\\pi \\times 10^{-7})(0.500)/(0.1885) = 6.283 \\times 10^{-7}/0.1885 = 3.333 \\times 10^{-6}\\ \\mathrm{T}$." },
          { label: "At rim", text: "$r = R$: $B = \\mu_{0}i_{C}/(2\\pi R) = 6.67\\ \\mu\\mathrm{T}$ — as if the gap conducted." },
        ],
        result: "$3.33\\ \\mu\\mathrm{T}$ at half radius.",
      },
    ],
    keyTakeaways: [
      "Capacitor paradox: conduction alone makes $I_{\\mathrm{enc}}$ surface-dependent.",
      "$i_{D} = \\epsilon_{0}\\,d\\Phi_{E}/dt$ completes Ampère: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_{0}(i_{C}+i_{D})$.",
      "Four Maxwell equations imply waves at $c = 1/\\sqrt{\\mu_{0}\\epsilon_{0}}$.",
    ],
    quiz: [
      {
        q: "Displacement current exists:",
        options: ["Only in conductors", "Wherever $\\vec{E}$ changes, including vacuum", "Only in magnets", "Never physically"],
        answer: 1,
        explanation: "$i_{D} = \\epsilon_{0}\\,d\\Phi_{E}/dt$ needs changing field, not charges — vacuum qualifies.",
      },
      {
        q: "Between charging plates, $i_{D}$ versus wire $i_{C}$ is:",
        options: ["Zero", "Equal ($i_{D} = i_{C}$)", "Double", "Opposite always"],
        answer: 1,
        explanation: "$C\\,dV/dt$ algebra makes them identical — continuity through the gap.",
      },
      {
        q: "Maxwell added $i_{D}$ to:",
        options: ["Gauss's electric law", "Ampère's law for time-varying fields", "Faraday's law", "Coulomb's law"],
        answer: 1,
        explanation: "Static Ampère survived; dynamics needed the $\\mu_{0}\\epsilon_{0}\\,d\\Phi_{E}/dt$ term.",
      },
      {
        q: "$\\mu_{0}\\epsilon_{0}$ equals:",
        options: ["$c^{2}$", "$1/c^{2}$", "$c$", "$0$"],
        answer: 1,
        explanation: "Lab constants multiply to $1.11 \\times 10^{-17} = 1/(3.00 \\times 10^{8})^{2}$ — light speed encoded.",
      },
    ],
  },
  {
    sectionId: "young-ch29-s8",
    readingTime: 4,
    intro: "Zero resistance, expelled flux — superconductivity ends the chapter with quantum macroscopics. Young introduces $T_{c}$, critical fields, and the Meissner effect with maglev payoff.",
    objectives: [
      "Define superconductivity ($R = 0$ below $T_{c}$)",
      "Describe the Meissner flux expulsion",
      "State critical fields/temperatures and applications",
    ],
    concepts: [
      {
        term: "Zero resistance",
        kind: "definition",
        statement: "Below critical temperature $T_{c}$ (Hg $4.15\\ \\mathrm{K}$, NbTi $9.5\\ \\mathrm{K}$, YBCO $92\\ \\mathrm{K}$) resistance drops to exactly zero — persistent currents decay with $\\tau > 10^{5}$ years.",
        detail: "Onnes (1911) saw mercury's $4.2\\ \\mathrm{K}$ plunge; Bednorz-Müller (1986) broke the nitrogen barrier.",
      },
      {
        term: "Meissner effect",
        kind: "law",
        statement: "Superconductors expel $\\vec{B}$ ($B = 0$ inside, beyond $\\sim 10$–$100\\ \\mathrm{nm}$ penetration): field-cooled samples levitate — perfect diamagnetism ($\\chi_{m} = -1$), not just $R = 0$.",
        detail: "A zero-$R$ ring would trap flux; Meissner actively expels it — thermodynamics, not just conductivity.",
      },
      {
        term: "Critical field",
        kind: "notation",
        statement: "**Critical field** $B_{c}$ (or $B_{c2}$ for Type II) quenches superconductivity: NbTi $15\\ \\mathrm{T}$, $\\mathrm{Nb_{3}Sn}$ $30\\ \\mathrm{T}$, YBCO $> 100\\ \\mathrm{T}$ — magnets live below these ceilings.",
        detail: "Type II threads quantized vortices ($\\Phi_{0} = h/2e$) between $B_{c1}$ and $B_{c2}$ — pinned vortices carry campus-scale currents.",
      },
      {
        term: "Cooper pairs",
        kind: "insight",
        statement: "BCS theory (1957): phonon-mediated electron pairs ($2e$ bosons) condense into one quantum state with gap $\\Delta$ — scattering needs pair-breaking energy, hence zero $R$.",
        detail: "Cuprates' $d$-wave pairing defies phonon glue — mechanism still debated, applications proceeding anyway.",
      },
      {
        term: "Applications",
        kind: "method",
        statement: "MRI ($1.5$–$7\\ \\mathrm{T}$ persistent solenoids), maglev (pinned-flux suspension), SQUIDs ($10^{-15}\\ \\mathrm{T}$ sensing via Josephson flux quantization) — zero-$R$ plus Meissner as technology.",
        detail: "A $7\\ \\mathrm{T}$ MRI stores megajoules circulating losslessly for a decade on one charge.",
      },
    ],
    examples: [
      {
        title: "Persistent decay bound",
        problem: "A superconducting ring ($L = 1.00\\ \\mu\\mathrm{H}$) carries $I_{0} = 100\\ \\mathrm{A}$. If $R < 10^{-23}\\ \\Omega$, bound the decay time.",
        steps: [
          { label: "Time constant", text: "$\\tau = L/R > 10^{-6}/10^{-23} = 10^{17}\\ \\mathrm{s}$." },
          { label: "Years", text: "$10^{17}/3.156 \\times 10^{7} = 3.17 \\times 10^{9}$ years — gigayears." },
          { label: "Meaning", text: "Measured bounds exceed the universe's age fractionally — zero for every purpose." },
        ],
        result: "$\\tau > 3 \\times 10^{9}$ years.",
      },
      {
        title: "Meissner levitation pressure",
        problem: "Estimate magnetic pressure $B^{2}/(2\\mu_{0})$ for $B = 0.500\\ \\mathrm{T}$ holding a maglev pad.",
        steps: [
          { label: "Pressure", text: "$p = (0.25)/(2 \\times 4\\pi \\times 10^{-7}) = 0.25/2.513 \\times 10^{-6} = 9.95 \\times 10^{4}\\ \\mathrm{Pa} \\approx 1.0\\ \\mathrm{atm}$." },
          { label: "Support", text: "$10\\ \\mathrm{cm^{2}}$ pads hold $\\sim 100\\ \\mathrm{N}$ ($10\\ \\mathrm{kg}$) — palm-sized levitation." },
          { label: "Scale", text: "Halbach arrays reach tesla-scale gaps: tons on square meters." },
        ],
        result: "$\\approx 1\\ \\mathrm{atm}$ of magnetic pressure at $0.5\\ \\mathrm{T}$.",
      },
    ],
    keyTakeaways: [
      "$R = 0$ below $T_{c}$: persistent currents on gigayear scales.",
      "Meissner expels $\\vec{B}$ — perfect diamagnetism beyond conductivity.",
      "Critical $(T_{c}, B_{c})$ bound applications: MRI, maglev, SQUIDs.",
    ],
    quiz: [
      {
        q: "The Meissner effect is:",
        options: ["Infinite conductivity alone", "Active flux expulsion ($B = 0$ inside)", "Flux trapping", "Normal resistance"],
        answer: 1,
        explanation: "Zero-$R$ rings trap; superconductors expel — thermodynamics beyond Ohm's law.",
      },
      {
        q: "Type-II superconductors between $B_{c1}$ and $B_{c2}$:",
        options: ["Go normal", "Thread quantized vortices while staying superconducting", "Expel all current", "Melt"],
        answer: 1,
        explanation: "$\\Phi_{0} = h/2e$ vortices penetrate; pinning sustains high-$J_{c}$ magnets.",
      },
      {
        q: "BCS theory pairs electrons via:",
        options: ["Direct repulsion", "Phonon-mediated attraction into $2e$ bosons", "Photon exchange only", "Gravity"],
        answer: 1,
        explanation: "Lattice distortions glue opposite-momentum electrons; condensation gaps the spectrum.",
      },
    ],
  },
]
