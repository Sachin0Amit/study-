import type { SectionContent } from "../library"

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition, Chapter 24
// Special and General Relativity (Sections 24.1 – 24.4)
// ============================================================================

export const ewenCh24Content: SectionContent[] = [
  {
    sectionId: "ewen-ch24-s1",
    readingTime: 5,
    intro: "In 1905 a patent clerk rewrote space and time by trusting two facts: physics works the same in every lab, and light speed never changes. This section meets Einstein, frames the ether failure (Michelson–Morley), and states the two postulates.",
    objectives: [
      "Place Einstein's 1905 miracle year and its papers in context",
      "Describe the Michelson–Morley null result and the ether's fall",
      "State the two postulates of special relativity",
    ],
    concepts: [
      {
        term: "Einstein's miracle year",
        kind: "insight",
        statement: "In 1905 Einstein published the photoelectric paper, Brownian motion, special relativity, and $E = mc^{2}$ — four revolutions in months.",
        detail: "The patent office outsider re-derived electrodynamics from two postulates while peers added ether patches.",
      },
      {
        term: "Michelson–Morley null result",
        kind: "law",
        statement: "No ether drift was ever found: light speed is $c$ in every direction at every season, to parts in $10^{17}$ today.",
        detail: "The expected fringe shift never appeared — the experiment that launched relativity by failing.",
      },
      {
        term: "First postulate (relativity)",
        kind: "law",
        statement: "The laws of physics are identical in all inertial (unaccelerated) frames — no lab can claim absolute rest.",
        detail: "Billiards, circuits, and light all behave alike on a smooth train or a still platform.",
      },
      {
        term: "Second postulate (constant c)",
        kind: "law",
        statement: "Vacuum light speed $c$ is the same for every inertial observer, regardless of source or observer motion.",
        detail: "Chasing a beam at $0.9c$ still measures it leaving at $c$ — everyday velocity addition fails.",
      },
      {
        term: "Inertial frames",
        kind: "definition",
        statement: "Inertial frames move at constant velocity without rotation; Newton's first law holds exactly in them.",
        detail: "Accelerating frames feel pseudo-forces — the bridge to general relativity.",
      },
    ],
    examples: [
      {
        title: "Headlight paradox preview",
        problem: "A rocket at $0.80c$ fires a light beam forward. What speed does a station observer measure for that light?",
        steps: [
          { label: "Step 1: Classical guess", text: "$0.80c + c = 1.80c$ — faster than light." },
          { label: "Step 2: Second postulate", text: "Every inertial observer measures exactly $c$." },
        ],
        result: "$c$ ($3.00 \\times 10^{8} \\text{ m}/\\text{s}$) — addition intuition surrenders.",
      },
      {
        title: "Ether-wind expectation",
        problem: "Earth orbits at $30.0 \\text{ km}/\\text{s}$. What fractional ether shift did Michelson expect for light?",
        steps: [
          { label: "Step 1: Ratio", text: "$v/c = 30.0/300{,}000 = 10^{-4}$; second-order shift $\\sim (v/c)^{2} = 10^{-8}$ of a wavelength path." },
          { label: "Step 2: Verdict", text: "Interferometers easily resolve this — yet measured zero." },
        ],
        result: "Expected $10^{-8}$-scale fringes; observed none — no ether.",
      },
    ],
    keyTakeaways: [
      "1905: quanta, atoms, relativity, $E = mc^{2}$ — one author, one year.",
      "Michelson–Morley found no ether; $c$ is direction- and season-independent.",
      "Same physics in all inertial frames; same $c$ for all observers.",
    ],
    quiz: [
      {
        q: "Michelson–Morley showed:",
        options: ["Ether drift of $30 \\text{ km}/\\text{s}$", "No detectable ether drift", "Light needs air", "Earth is stationary"],
        answer: 1,
        explanation: "The null result killed the ether and forced constant-$c$ physics.",
      },
      {
        q: "The first postulate says:",
        options: ["Light speed varies by lab", "Physics is identical in all inertial frames", "Only mechanics is relative", "Acceleration is undetectable"],
        answer: 1,
        explanation: "No inertial experiment — mechanical, electrical, or optical — reveals absolute motion.",
      },
      {
        q: "You chase a light beam at $0.99c$ and measure its speed as:",
        options: ["$0.01c$", "$c$", "$1.99c$", "$0$"],
        answer: 1,
        explanation: "Second postulate: every inertial observer gets $c$, full stop.",
      },
    ],
  },
  {
    sectionId: "ewen-ch24-s2",
    readingTime: 7,
    intro: "Constant $c$ forces moving clocks to tick slow, moving rods to shrink, and mass to carry energy $E = mc^{2}$. This section computes time dilation, length contraction, and mass–energy with the Lorentz factor $\\gamma = 1/\\sqrt{1-v^{2}/c^{2}}$.",
    objectives: [
      "Apply $\\Delta t = \\gamma\\Delta t_{0}$ and $L = L_{0}/\\gamma$ quantitatively",
      "Explain simultaneity failure and the twin paradox resolution",
      "Use $E = mc^{2}$ and $E^{2} = (pc)^{2} + (mc^{2})^{2}$ for energy scales",
    ],
    concepts: [
      {
        term: "Time dilation",
        kind: "law",
        statement: "Moving clocks run slow: $\\Delta t = \\gamma\\Delta t_{0}$ with $\\gamma = 1/\\sqrt{1 - v^{2}/c^{2}}$; $\\Delta t_{0}$ is the proper (rest) time.",
        detail: "Muons ($2.20 \\mu\\text{s}$ proper) cross the atmosphere at $\\gamma \\approx 20$ — living $44 \\mu\\text{s}$ in our frame.",
      },
      {
        term: "Length contraction",
        kind: "law",
        statement: "Moving rods shrink along motion: $L = L_{0}/\\gamma$; transverse sizes never change.",
        detail: "A $100 \\text{ m}$ ship at $0.866c$ ($\\gamma = 2$) measures $50.0 \\text{ m}$ trackside.",
      },
      {
        term: "Simultaneity is relative",
        kind: "insight",
        statement: "Events simultaneous in one frame are not in another moving along their separation — clock synchronization disagrees by $vL/c^{2}$.",
        detail: "The train–platform lightning paradox dissolves: each frame's clocks are honestly out of sync in the other.",
      },
      {
        term: "Twin paradox resolved",
        kind: "insight",
        statement: "The traveling twin ages less because turnaround breaks symmetry — only the stay-home twin keeps one inertial frame throughout.",
        detail: "Atomic clocks flown eastward versus westward confirmed the asymmetric aging directly.",
      },
      {
        term: "Mass–energy",
        kind: "theorem",
        statement: "$E = mc^{2}$ (rest) and $E = \\gamma mc^{2}$ (moving); invariant form $E^{2} = (pc)^{2} + (mc^{2})^{2}$.",
        detail: "$1 \\text{ kg}$ is $9.00 \\times 10^{16} \\text{ J}$; particle masses quote in $\\text{MeV}/c^{2}$ (electron $0.511$, proton $938$).",
      },
    ],
    figures: [
      {
        caption: "Light clock: the moving path zigzags longer at $ct/2$, so $\\Delta t = \\gamma\\Delta t_{0}$ ticks slower.",
        svg: "<svg role='img' aria-label='Light clock: the moving path zigzags longer at ct/2, so Delta t = gammaDelta t_0 ticks slower.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"60\" y1=\"150\" x2=\"60\" y2=\"60\"/><line x1=\"140\" y1=\"150\" x2=\"140\" y2=\"60\"/><line x1=\"60\" y1=\"150\" x2=\"180\" y2=\"150\"/><line x1=\"60\" y1=\"60\" x2=\"180\" y2=\"60\"/><path d=\"M230 150 L290 60 L350 150\"/><line x1=\"230\" y1=\"150\" x2=\"350\" y2=\"150\" stroke-dasharray=\"5 4\"/><text x=\"50\" y=\"180\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">rest: straight up</text><text x=\"230\" y=\"180\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">moving: zigzag longer</text></svg>",
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Muon survival",
        problem: "Muons form $10.0 \\text{ km}$ up with $v = 0.998c$ ($\\gamma = 15.8$) and proper life $2.20 \\mu\\text{s}$. Show relativity lets them reach the ground.",
        steps: [
          { label: "Step 1: Dilated life", text: "$\\Delta t = 15.8 \\times 2.20 = 34.8 \\mu\\text{s}$." },
          { label: "Step 2: Range", text: "$d \\approx c\\Delta t = (3.00 \\times 10^{8})(34.8 \\times 10^{-6}) = 10.4 \\text{ km}$." },
        ],
        result: "$10.4 \\text{ km}$ range — ground reached; classical $660 \\text{ m}$ would fail.",
      },
      {
        title: "Electron rest energy",
        problem: "Find the rest energy of an electron ($m = 9.11 \\times 10^{-31} \\text{ kg}$) in joules and eV.",
        steps: [
          { label: "Step 1: Joules", text: "$E = (9.11 \\times 10^{-31})(3.00 \\times 10^{8})^{2} = 8.20 \\times 10^{-14} \\text{ J}$." },
          { label: "Step 2: eV", text: "$/1.60 \\times 10^{-19} = 5.11 \\times 10^{5} \\text{ eV}$." },
        ],
        result: "$0.511 \\text{ MeV}$ — the positron-annihilation line.",
      },
    ],
    keyTakeaways: [
      "Moving clocks slow by $\\gamma$; moving rods shrink by $\\gamma$ along motion.",
      "Simultaneity is frame-dependent; the twin asymmetry is the turnaround.",
      "Mass is frozen energy: $E = mc^{2}$, invariant $E^{2} - (pc)^{2} = (mc^{2})^{2}$.",
    ],
    quiz: [
      {
        q: "A ship passes at $\\gamma = 2$. Its onboard $1.00 \\text{ s}$ tick takes Earth time:",
        options: ["$0.500 \\text{ s}$", "$1.00 \\text{ s}$", "$2.00 \\text{ s}$", "$4.00 \\text{ s}$"],
        answer: 2,
        explanation: "$\\Delta t = \\gamma\\Delta t_{0} = 2.00 \\text{ s}$.",
      },
      {
        q: "The same ship's $120 \\text{ m}$ rest length measures trackside:",
        options: ["$240 \\text{ m}$", "$120 \\text{ m}$", "$60.0 \\text{ m}$", "$0 \\text{ m}$"],
        answer: 2,
        explanation: "$L = L_{0}/\\gamma = 60.0 \\text{ m}$ along motion.",
      },
      {
        q: "$1.00 \\text{ g}$ annihilated with antimatter releases about:",
        options: ["$9.00 \\times 10^{10} \\text{ J}$", "$9.00 \\times 10^{13} \\text{ J}$", "$3.00 \\times 10^{8} \\text{ J}$", "$1.00 \\text{ J}$"],
        answer: 1,
        explanation: "$2 \\times (0.001)c^{2} = 1.80 \\times 10^{14} \\text{ J}$ total for the pair; $9.00 \\times 10^{13} \\text{ J}$ per gram.",
      },
    ],
  },
  {
    sectionId: "ewen-ch24-s3",
    readingTime: 6,
    intro: "Relativity fuses space and time into one four-dimensional fabric where $c$ converts seconds to meters. This section draws Minkowski diagrams, classifies intervals ($s^{2}$), and shows why $c$ is causality's speed limit.",
    objectives: [
      "Describe space-time as $3+1$ dimensions with $ct$ as the time axis",
      "Classify timelike, lightlike, and spacelike intervals",
      "Read worldlines, light cones, and causality on Minkowski diagrams",
    ],
    concepts: [
      {
        term: "Space-time",
        kind: "definition",
        statement: "Events are points $(ct, x, y, z)$; worldlines thread them, with light always at $45^{\\circ}$ when axes share $c$ units.",
        detail: "Your worldline runs from birth to now; a photon's runs at exactly the cone slope.",
      },
      {
        term: "Invariant interval",
        kind: "theorem",
        statement: "$s^{2} = (c\\Delta t)^{2} - \\Delta x^{2} - \\Delta y^{2} - \\Delta z^{2}$ is identical in all inertial frames.",
        detail: "Frames disagree on space and time separately but agree on this combination — relativity's true invariant.",
      },
      {
        term: "Three interval kinds",
        kind: "definition",
        statement: "$s^{2} > 0$ timelike (causally connectable), $= 0$ lightlike (photon-reachable), $< 0$ spacelike (no influence possible).",
        detail: "Spacelike pairs disagree even on time order — neither causes the other, so no paradox.",
      },
      {
        term: "Light cones and causality",
        kind: "insight",
        statement: "Each event's cone splits space-time into absolute past, absolute future, and elsewhere — $c$ walls off cause from effect.",
        detail: "Faster-than-light signaling would escape some cone and scramble cause and effect.",
      },
      {
        term: "Proper time as path length",
        kind: "insight",
        statement: "Clocks read space-time path length: straight (inertial) worldlines age most; detours age less — geometry behind the twin result.",
        detail: "GPS receivers solve these interval relations for four satellites at once.",
      },
    ],
    examples: [
      {
        title: "Classify an interval",
        problem: "Two events are $3.00 \\text{ s}$ apart in time and $1.20 \\times 10^{9} \\text{ m}$ apart in space. Classify the interval.",
        steps: [
          { label: "Step 1: Compare $c\\Delta t$ with $\\Delta x$", text: "$c\\Delta t = 9.00 \\times 10^{8} \\text{ m} < 1.20 \\times 10^{9} \\text{ m}$." },
          { label: "Step 2: Sign", text: "$s^{2} < 0$: spacelike — no causal link possible." },
        ],
        result: "Spacelike (elsewhere); frames disagree on their order.",
      },
      {
        title: "GPS clock arithmetic",
        problem: "GPS satellites tick $38.0 \\mu\\text{s}/\\text{day}$ fast (net GR+SR). What ranging error accrues daily uncorrected?",
        steps: [
          { label: "Step 1: Multiply by $c$", text: "$(3.00 \\times 10^{8})(38.0 \\times 10^{-6}) = 11{,}400 \\text{ m}$." },
        ],
        result: "$11.4 \\text{ km}/\\text{day}$ drift — navigation fails in minutes without relativity.",
      },
    ],
    keyTakeaways: [
      "Events live in $3+1$ space-time; light cones bound causality.",
      "$s^{2} = (c\\Delta t)^{2} - \\Delta r^{2}$ is the agreed invariant.",
      "Timelike connects, lightlike photons reach, spacelike stays elsewhere.",
    ],
    quiz: [
      {
        q: "On a $ct$-versus-$x$ diagram light worldlines run at:",
        options: ["$0^{\\circ}$", "$45^{\\circ}$", "$90^{\\circ}$", "Any angle"],
        answer: 1,
        explanation: "Equal $ct$ and $x$ steps ($\\Delta x = c\\Delta t$) make unit slope.",
      },
      {
        q: "Two spacelike-separated events:",
        options: ["Have absolute time order", "Cannot influence each other", "Are always simultaneous", "Share a worldline"],
        answer: 1,
        explanation: "No signal at $\\leq c$ bridges them; order is frame-dependent.",
      },
      {
        q: "GPS must correct $38 \\mu\\text{s}/\\text{day}$ mainly from:",
        options: ["Ionosphere only", "Relativity (SR slowdown + GR speedup, net fast)", "Battery drift", "Solar wind"],
        answer: 1,
        explanation: "Orbital speed slows clocks $7 \\mu\\text{s}$; weak gravity speeds them $45 \\mu\\text{s}$ — net $+38$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch24-s4",
    readingTime: 6,
    intro: "Gravity is not a force pulling through space but curvature of space-time itself — Einstein's general theory. This section states the equivalence principle, bends light and time in gravity wells, and tours black holes, waves, and GPS corrections.",
    objectives: [
      "State the equivalence principle (gravity = acceleration locally)",
      "Describe gravitational time dilation, redshift, and light bending",
      "Name black holes, gravitational waves, and expanding-universe evidence",
    ],
    concepts: [
      {
        term: "Equivalence principle",
        kind: "law",
        statement: "Locally, gravity is indistinguishable from acceleration: sealed labs cannot tell $g$ from a $g$-rocket.",
        detail: "Inertial and gravitational mass match exactly — the coincidence Einstein promoted to principle.",
      },
      {
        term: "Curved space-time",
        kind: "insight",
        statement: "Mass-energy curves space-time; free bodies follow straightest paths (geodesics) in the curved geometry — planets orbit without any pull.",
        detail: "Bowling-ball-on-sheet analogies capture space curvature; time curvature does most of Newton's work.",
      },
      {
        term: "Gravitational time dilation",
        kind: "theorem",
        statement: "Clocks deeper in a gravity well tick slower ($\\Delta t \\approx \\Delta t_{0}(1 + gh/c^{2})$ weakly); light climbing out redshifts.",
        detail: "Pound–Rebka measured it over $22.5 \\text{ m}$; GPS gains $45 \\mu\\text{s}/\\text{day}$ upstairs.",
      },
      {
        term: "Light bending and lensing",
        kind: "law",
        statement: "Gravity deflects light ($1.75^{\\prime\\prime}$ at the solar limb); galaxies lens background quasars into arcs and crosses.",
        detail: "Eddington's 1919 eclipse confirmed the factor-of-two GR prediction over Newton's.",
      },
      {
        term: "Black holes and waves",
        kind: "insight",
        statement: "Collapse past the Schwarzschild radius $R_{s} = 2GM/c^{2}$ seals an event horizon; mergers ripple space-time (LIGO, 2015).",
        detail: "Earth's $R_{s}$ is $8.87 \\text{ mm}$; the Sun's $2.95 \\text{ km}$ — density, not just mass, decides.",
      },
    ],
    figures: [
      {
        caption: "Mass curves space-time; light and orbits follow geodesics — bending near the Sun, trapped past $R_{s}$. ",
        svg: "<svg role='img' aria-label='Mass curves space-time; light and orbits follow geodesics — bending near the Sun, trapped past R_s.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"200\" cy=\"130\" rx=\"150\" ry=\"25\"/><ellipse cx=\"200\" cy=\"130\" rx=\"100\" ry=\"17\" opacity=\"0.6\"/><ellipse cx=\"200\" cy=\"130\" rx=\"55\" ry=\"10\" opacity=\"0.4\"/><circle cx=\"200\" cy=\"130\" r=\"14\" fill=\"currentColor\"/><line x1=\"20\" y1=\"60\" x2=\"380\" y2=\"90\"/><line x1=\"20\" y1=\"170\" x2=\"380\" y2=\"150\" opacity=\"0.5\"/><text x=\"205\" y=\"135\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">M</text><text x=\"280\" y=\"70\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">light bends</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Earth as a black hole",
        problem: "Compute Earth's Schwarzschild radius ($M = 5.97 \\times 10^{24} \\text{ kg}$, $G = 6.67 \\times 10^{-11}$).",
        steps: [
          { label: "Step 1: Formula", text: "$R_{s} = 2GM/c^{2}$." },
          { label: "Step 2: Substitute", text: "$R_{s} = 2(6.67 \\times 10^{-11})(5.97 \\times 10^{24})/(9.00 \\times 10^{16}) = 8.85 \\times 10^{-3} \\text{ m}$." },
        ],
        result: "$8.85 \\text{ mm}$ — compress Earth to a marble and it seals.",
      },
      {
        title: "Tower-clock redshift",
        problem: "Estimate fractional tick gain over $h = 100 \\text{ m}$ of height ($gh/c^{2}$).",
        steps: [
          { label: "Step 1: Ratio", text: "$(9.80)(100)/(9.00 \\times 10^{16}) = 1.09 \\times 10^{-14}$." },
        ],
        result: "$1.1 \\times 10^{-14}$ fast upstairs — optical clocks resolve it.",
      },
    ],
    keyTakeaways: [
      "Equivalence: local gravity equals acceleration — curvature follows.",
      "Gravity slows clocks, reddens light, and bends rays ($1.75^{\\prime\\prime}$ solar).",
      "$R_{s} = 2GM/c^{2}$ horizons and LIGO waves complete the tested picture.",
    ],
    quiz: [
      {
        q: "In a sealed windowless lab you cannot distinguish:",
        options: ["North from south", "Uniform gravity from uniform acceleration", "Day from night", "Hot from cold"],
        answer: 1,
        explanation: "Equivalence: identical local experiments give identical results in both.",
      },
      {
        q: "Clocks on GPS satellites versus ground clocks run:",
        options: ["Slower (SR only)", "Faster net ($+38 \\mu\\text{s}/\\text{day}$)", "Identically", "Backward"],
        answer: 1,
        explanation: "Weak-gravity speedup ($+45$) beats velocity slowdown ($-7$).",
      },
      {
        q: "Eddington's 1919 eclipse expedition confirmed:",
        options: ["Time dilation", "Gravitational light bending", "Black holes directly", "The expanding universe"],
        answer: 1,
        explanation: "Star positions near the eclipsed Sun shifted by GR's $1.75^{\\prime\\prime}$ prediction.",
      },
    ],
  },
]
