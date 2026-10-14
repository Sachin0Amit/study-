import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 27: Relativity (Sections 27.1 – 27.5)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh27Content: SectionContent[] = [
  {
    sectionId: "coletta-ch27-s1",
    readingTime: 6,
    intro: "Einstein rebuilt time by asking how distant clocks are even set. Coletta presents the two postulates — physics is identical in all inertial frames and $c$ is invariant — with light-signal synchronization. Simultaneity becomes frame-dependent from page one.",
    objectives: [
      "State Einstein's two postulates of special relativity",
      "Explain light-signal clock synchronization and simultaneity failure",
      "Distinguish inertial from accelerated frames"
    ],
    concepts: [
      {
        term: "First postulate",
        kind: "law",
        statement: "The laws of physics are **identical in all inertial frames**: no experiment inside a smooth spaceship reveals its uniform velocity.",
        detail: "A tossed ball arcs the same in a steady jet as on the runway; only acceleration betrays motion."
      },
      {
        term: "Second postulate",
        kind: "law",
        statement: "Light in vacuum travels at **$c$ in every inertial frame**, independent of source or observer motion.",
        detail: "Chasing a beam at $0.9c$ still measures it receding at $c$, never $0.1c$, breaking Galilean addition."
      },
      {
        term: "Inertial frame",
        kind: "definition",
        statement: "An **inertial frame** moves uniformly without acceleration or rotation, where Newton's first law holds exactly.",
        detail: "Earth's surface is nearly inertial over short experiments; spinning and orbiting add tiny fictitious corrections."
      },
      {
        term: "Synchronization",
        kind: "method",
        statement: "Distant clocks **synchronize** by light signals: $B$ sets $t_{B} = (t_{send} + t_{return})/2$ from $A$'s round trip, assuming $c$ both ways.",
        detail: "This operational definition makes time a measured procedure rather than a background river."
      },
      {
        term: "Relativity of simultaneity",
        kind: "insight",
        statement: "Events simultaneous in one frame are **not simultaneous** in another moving frame, because light-travel corrections differ.",
        detail: "A platform observer sees symmetric flashes together while a train rider meets one wavefront first." }
    ],
    figures: [
      {
        caption: "Train experiment: ground sees simultaneous flashes; rider meets the forward one first",
        svg: '<svg role="img" aria-label="Train experiment: ground sees simultaneous flashes; rider meets the forward one first" viewBox="0 0 400 140" width="100%" height="140"><rect x="90" y="50" width="220" height="40" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="70" r="6" fill="currentColor"/><circle cx="340" cy="70" r="6" fill="currentColor"/><circle cx="200" cy="70" r="5" fill="none" stroke="currentColor" stroke-width="2"/><line x1="60" y1="70" x2="180" y2="70" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><line x1="340" y1="70" x2="220" y2="70" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><line x1="200" y1="90" x2="260" y2="90" stroke="currentColor" stroke-width="1.6"/><polygon points="260,90 250,85 250,95" fill="currentColor"/><text x="200" y="125" text-anchor="middle" font-size="11" fill="currentColor">rider moving right meets right flash first</text></svg>',
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "Chasing light",
        problem: "A ship moves at $0.80c$ relative to Earth and fires a forward beam. What speed does each frame measure?",
        steps: [
          { label: "Earth frame", text: "The beam leaves at $c$ by the second postulate." },
          { label: "Ship frame", text: "Ship instruments also read $c$, not $0.20c$." },
          { label: "Moral", text: "Velocities do not subtract Galilean-style near $c$." }
        ],
        result: "Both frames measure $c$."
      },
      {
        title: "Sync correction",
        problem: "Clock $B$ is $300$ m from $A$. $A$ sends at $t = 0$ and gets reply at $t = 2.0$ mus. What should $B$ read at reflection?",
        steps: [
          { label: "One-way time", text: "$1.0$ mus each way at $c$ ($300/3.00 \\times 10^{8} = 10^{-6}$ s)." },
          { label: "Set", text: "$B$ sets $(0 + 2.0)/2 = 1.0$ mus at the bounce." },
          { label: "Meaning", text: "Synchronization bakes in light-travel delay explicitly." }
        ],
        result: "$1.0$ mus at reflection."
      }
    ],
    keyTakeaways: [
      "Physics is frame-blind and $c$ is frame-proof: the two postulates.",
      "Time is defined by light-signal synchronization.",
      "Simultaneity depends on the observer's motion."
    ],
    quiz: [
      {
        q: "Einstein's second postulate says light speed in vacuum:",
        options: ["Is $c$ in all inertial frames", "Depends on color", "Is infinite", "Adds to source speed"],
        answer: 0,
        explanation: "Every inertial observer measures $c$ regardless of how source or observer moves."
      },
      {
        q: "Two flashes simultaneous on the platform appear to a moving rider as:",
        options: ["Backward flash first", "Never seen", "Simultaneous", "Forward flash first"],
        answer: 3,
        explanation: "The rider runs into the forward wavefront, meeting it before the rear one."
      },
      {
        q: "An inertial frame is one that:",
        options: ["Sits on Earth always", "Accelerates uniformly", "Moves uniformly without acceleration", "Rotates steadily"],
        answer: 2,
        explanation: "Uniform motion preserves Newton's first law; acceleration breaks it."
      }
    ]
  },
  {
    sectionId: "coletta-ch27-s2",
    readingTime: 6,
    intro: "Moving clocks run slow by the light-clock argument: the zigzag photon travels farther at fixed $c$. Coletta derives $\\Delta t = \\gamma\\Delta t_{0}$ with $\\gamma = 1/\\sqrt{1 - v^{2}/c^{2}}$ and verifies it with muons. Time stretches with speed.",
    objectives: [
      "Derive time dilation $\\Delta t = \\gamma\\Delta t_{0}$ from the light clock",
      "Identify proper time as the single-clock rest measurement",
      "Apply dilation to muon decay and twin-paradox numbers"
    ],
    concepts: [
      {
        term: "Proper time",
        kind: "definition",
        statement: "**Proper time** $\\Delta t_{0}$ is measured by one clock present at both events (rest frame); any other frame reads longer $\\Delta t = \\gamma\\Delta t_{0}$.",
        detail: "Astronauts age by proper time aboard; Earth must apply $\\gamma$ to their clock."
      },
      {
        term: "Lorentz factor",
        kind: "notation",
        statement: "$\\gamma = 1/\\sqrt{1 - v^{2}/c^{2}}$ is $1.00$ at everyday speeds, $1.15$ at $0.50c$, $2.29$ at $0.90c$, and unbounded as $v \\to c$.",
        detail: "At $0.10c$, $\\gamma \\approx 1.005$, a half-percent effect already dwarfing clock precision."
      },
      {
        term: "Light-clock derivation",
        kind: "method",
        statement: "Mirrors $L$ apart tick $\\Delta t_{0} = 2L/c$ at rest; moving at $v$ the photon zigzags $2\\sqrt{L^{2} + (v\\Delta t/2)^{2}}/c = \\Delta t$, solving to $\\Delta t = \\gamma\\Delta t_{0}$.",
        detail: "The longer path at fixed $c$ forces the longer time with no mechanical assumption."
      },
      {
        term: "Muon proof",
        kind: "insight",
        statement: "Muons ($\\tau = 2.2$ mus) at $0.99c$ live $\\gamma \\approx 7.1$ times longer in Earth's frame, reaching ground that $c\\tau = 660$ m range forbids.",
        detail: "Sea-level muon flux is time dilation made countable."
      },
      {
        term: "Twin paradox resolved",
        kind: "insight",
        statement: "The traveling twin ages less because turnaround **accelerates**: only Earth stays inertial throughout, breaking the symmetry.",
        detail: "A $0.80c$ round trip of $10$ Earth years returns a $6$-year-older traveler." }
    ],
    examples: [
      {
        title: "Muon survival",
        problem: "Muons at $v = 0.99c$ descend $6000$ m. What fraction survives with $\\tau = 2.2$ mus?",
        steps: [
          { label: "Gamma", text: "$\\gamma = 1/\\sqrt{1 - 0.9801} = 1/0.1411 \\approx 7.09$." },
          { label: "Dilated life", text: "$\\tau_{Earth} = 7.09 \\times 2.2 = 15.6$ mus." },
          { label: "Travel time", text: "$t = 6000/(0.99 \\times 3.00 \\times 10^{8}) \\approx 20.2$ mus, so fraction $e^{-20.2/15.6} = e^{-1.295} \\approx 0.274$." }
        ],
        result: "About $27$ percent survive; undilated $e^{-9.2}$ is $0.01$ percent."
      },
      {
        title: "Jet-lag clocks",
        problem: "An atomic clock flies at $300$ m/s for $10$ hours. How much does it lag Earth?",
        steps: [
          { label: "Gamma excess", text: "$\\gamma - 1 \\approx v^{2}/2c^{2} = 90000/(2 \\times 9 \\times 10^{16}) = 5.0 \\times 10^{-13}$." },
          { label: "Lag", text: "$\\Delta = 5.0 \\times 10^{-13} \\times 36000 \\approx 1.8 \\times 10^{-8}$ s." },
          { label: "Note", text: "$18$ ns slow, measurable by cesium clocks (Hafele-Keating style)." }
        ],
        result: "About $18$ ns behind."
      }
    ],
    keyTakeaways: [
      "Moving clocks tick $\\gamma$ slower: $\\Delta t = \\gamma\\Delta t_{0}$.",
      "Proper time is the single rest-clock reading.",
      "Muons and jets verify dilation directly."
    ],
    quiz: [
      {
        q: "A ship clock ticks $1.0$ s proper while passing at $0.60c$. Earth measures:",
        options: ["$0.80$ s", "$1.0$ s", "$1.25$ s", "$1.67$ s"],
        answer: 2,
        explanation: "$\\gamma = 1/\\sqrt{1 - 0.36} = 1.25$, so $1.25$ s."
      },
      {
        q: "Proper time is measured:",
        options: ["By one clock at both events", "Only on Earth", "Only for light", "By two separated clocks"],
        answer: 0,
        explanation: "Presence at both events defines the rest frame and shortest time."
      },
      {
        q: "Muons reach sea level because:",
        options: ["They never decay", "Air slows time", "They speed past $c$", "Earth-frame dilation extends their life"],
        answer: 3,
        explanation: "$\\gamma \\approx 7$ stretches $2.2$ mus to $\u007e16$ mus of flight time."
      }
    ]
  },
  {
    sectionId: "coletta-ch27-s3",
    readingTime: 5,
    intro: "Moving rulers shrink along motion by the same $\\gamma$: $L = L_{0}/\\gamma$. Coletta ties contraction to dilation through $L = v\\Delta t_{0}$ reasoning and stresses that only the motion axis contracts. Fast ships fit in short hangars.",
    objectives: [
      "Apply $L = L_{0}/\\gamma$ with proper length as the rest measurement",
      "Explain why transverse dimensions are unaffected",
      "Resolve barn-ladder style simultaneity puzzles"
    ],
    concepts: [
      {
        term: "Proper length",
        kind: "definition",
        statement: "**Proper length** $L_{0}$ is measured at rest alongside the object; moving observers read shorter $L = L_{0}/\\gamma$.",
        detail: "A $100$ m ship at $0.80c$ ($\\gamma = 1.667$) measures $60$ m from Earth."
      },
      {
        term: "Contraction mechanism",
        kind: "method",
        statement: "Timing the nose-to-tail pass at $v$ takes dilated $\\Delta t$ on Earth but proper $\\Delta t_{0}$ aboard, so $L = v\\Delta t_{0} = L_{0}/\\gamma$.",
        detail: "Length and time effects are two faces of simultaneity failure at the endpoints."
      },
      {
        term: "Longitudinal only",
        kind: "theorem",
        statement: "Only the **motion-parallel** dimension contracts; heights and widths perpendicular to $\\vec{v}$ are unchanged.",
        detail: "A speeding disk becomes an ellipse, never a smaller circle."
      },
      {
        term: "No stress felt",
        kind: "insight",
        statement: "Contraction is a **measurement** effect of simultaneity, not a squeeze: the crew feels and measures normal length aboard.",
        detail: "Forces and strains stay rest-frame quantities; no crusher acts on fast ships."
      },
      {
        term: "Barn paradox",
        kind: "insight",
        statement: "A $\\gamma$-contracted ladder fits a barn in Earth's frame but not its own; the doors' simultaneity differs, dissolving the contradiction.",
        detail: "Both frames agree on whether paint scratches, once signal timing is tracked." }
    ],
    examples: [
      {
        title: "Contracted train",
        problem: "A $120$ m train passes at $0.90c$. What length does a ground observer measure?",
        steps: [
          { label: "Gamma", text: "$\\gamma = 1/\\sqrt{1 - 0.81} = 1/0.4359 \\approx 2.294$." },
          { label: "Length", text: "$L = 120/2.294 \\approx 52.3$ m." },
          { label: "Aboard", text: "Passengers still measure $120$ m with their rest meter sticks." }
        ],
        result: "About $52$ m on the ground."
      },
      {
        title: "Pion track",
        problem: "A pion ($\\tau = 26$ ns) at $0.99c$ travels how far in the lab?",
        steps: [
          { label: "Dilated life", text: "$\\gamma \\approx 7.09$, so $t = 7.09 \\times 26 = 184$ ns." },
          { label: "Distance", text: "$d = 0.99c \\times 184$ ns $= 0.99 \\times 3.00 \\times 10^{8} \\times 1.84 \\times 10^{-7} \\approx 54.6$ m." },
          { label: "Pion view", text: "Aboard, the lab is contracted by $7.09$ and the trip is $7.7$ m." }
        ],
        result: "About $55$ m in the lab."
      }
    ],
    keyTakeaways: [
      "Moving lengths contract as $L = L_{0}/\\gamma$ along motion only.",
      "Proper length is the rest-frame measurement.",
      "Contraction is simultaneity geometry, not compression."
    ],
    quiz: [
      {
        q: "A $60$ m rocket passes at $\\gamma = 3$. Ground length is:",
        options: ["$6.7$ m", "$180$ m", "$60$ m", "$20$ m"],
        answer: 3,
        explanation: "$L = L_{0}/\\gamma = 60/3 = 20$ m."
      },
      {
        q: "Which dimension contracts for horizontal motion?",
        options: ["Height", "Width", "Length along motion", "All equally"],
        answer: 2,
        explanation: "Simultaneity shifts only the motion-axis endpoints."
      },
      {
        q: "The crew of a contracted ship feels:",
        options: ["Perfectly normal length", "Stretched longer", "Weightless always", "Crushed shorter"],
        answer: 0,
        explanation: "Their meter sticks contract with them; rest measurements are unchanged."
      }
    ]
  },
  {
    sectionId: "coletta-ch27-s4",
    readingTime: 5,
    intro: "Velocities no longer add by $u + v$: Einstein's $u^{\\prime} = (u - v)/(1 - uv/c^{2})$ keeps everything below $c$. Coletta checks the low-speed and light-speed limits and applies it to headlights on fast ships. The formula protects causality.",
    objectives: [
      "Apply Einstein velocity addition $u^{\\prime} = (u - v)/(1 - uv/c^{2})$",
      "Verify it returns $c$ for light and $u - v$ at low speed",
      "Explain why no signal exceeds $c$"
    ],
    concepts: [
      {
        term: "Velocity addition",
        kind: "theorem",
        statement: "If $S^{\\prime}$ moves at $v$ from $S$ and an object moves at $u$ in $S$, its $S^{\\prime}$ speed is $u^{\\prime} = (u - v)/(1 - uv/c^{2})$.",
        detail: "A $0.70c$ probe fired forward from a $0.70c$ ship reaches $0.94c$, not $1.40c$."
      },
      {
        term: "Light-speed invariance",
        kind: "theorem",
        statement: "For $u = c$, $u^{\\prime} = (c - v)/(1 - v/c) = c$ for any $v$: the formula encodes the second postulate.",
        detail: "Headlight beams outrun every chase craft at exactly $c$."
      },
      {
        term: "Low-speed limit",
        kind: "insight",
        statement: "When $uv \\ll c^{2}$ the denominator is $1$ and $u^{\\prime} \\approx u - v$, recovering Galileo for cars and balls.",
        detail: "A $30$ m/s pass from a $20$ m/s train gives $10$ m/s to parts in $10^{-14}$."
      },
      {
        term: "Opposite directions",
        kind: "method",
        statement: "Head-on speeds combine as $(u + v)/(1 + uv/c^{2})$: two $0.90c$ rockets approach at $0.994c$, not $1.80c$.",
        detail: "Closing speed counted in one frame still never lets either rocket pass light."
      },
      {
        term: "Causality guard",
        kind: "insight",
        statement: "Sub-$c$ addition preserves cause-before-effect in all frames; superluminal signals would arrive before they were sent somewhere.",
        detail: "Relativity bans $v > c$ messaging, not just travel." }
    ],
    examples: [
      {
        title: "Probe from a ship",
        problem: "A ship at $0.60c$ fires a probe at $0.50c$ relative to the ship forward. Find Earth-frame speed.",
        steps: [
          { label: "Formula", text: "$u = (0.50 + 0.60)c/(1 + 0.30) = 1.10c/1.30$." },
          { label: "Evaluate", text: "$u \\approx 0.846c$." },
          { label: "Compare", text: "Well below the Galilean $1.10c$." }
        ],
        result: "About $0.85c$."
      },
      {
        title: "Head-on rockets",
        problem: "Two rockets approach Earth from opposite sides at $0.80c$ each. What is one's speed in the other's frame?",
        steps: [
          { label: "Formula", text: "$u^{\\prime} = (0.80 + 0.80)c/(1 + 0.64) = 1.60c/1.64$." },
          { label: "Evaluate", text: "$u^{\\prime} \\approx 0.976c$." },
          { label: "Note", text: "Enormous but still subluminal." }
        ],
        result: "About $0.98c$."
      }
    ],
    keyTakeaways: [
      "Einstein addition $(u \\mp v)/(1 \\mp uv/c^{2})$ replaces Galileo.",
      "Light stays $c$ and slow speeds stay Galilean as limits.",
      "No frame observes $v \\geq c$ for matter or signals."
    ],
    quiz: [
      {
        q: "Ship at $0.50c$ fires a beam forward. Earth measures the beam at:",
        options: ["$1.50c$", "$0.25c$", "$0.50c$", "$1.0c$"],
        answer: 3,
        explanation: "Light is $c$ in every inertial frame regardless of source motion."
      },
      {
        q: "At $u, v \\ll c$ the addition formula:",
        options: ["Diverges", "Gives $c$ always", "Reduces to $u - v$", "Gives zero"],
        answer: 2,
        explanation: "The $uv/c^{2}$ term vanishes, restoring Galileo."
      },
      {
        q: "Two $0.90c$ rockets head-on close in Earth's frame at $1.80c$. This:",
        options: ["Violates relativity", "Is a coordinate rate, neither rocket exceeds $c$", "Lets signals beat light", "Reverses causality"],
        answer: 1,
        explanation: "Separation rate is not any object's speed; each rocket still sees the other below $c$."
      }
    ]
  },
  {
    sectionId: "coletta-ch27-s5",
    readingTime: 6,
    intro: "Mass grows with speed and rests as energy: $m = \\gamma m_{0}$ and $E = mc^{2}$ remake mechanics. Coletta derives kinetic $K = (\\gamma - 1)m_{0}c^{2}$, checks its Newtonian limit, and prices nuclear reactions in mass defect. Sunshine is weighed mass.",
    objectives: [
      "State $E_{0} = m_{0}c^{2}$, $E = \\gamma m_{0}c^{2}$, and $K = (\\gamma-1)m_{0}c^{2}$",
      "Recover $K = mv^{2}/2$ at low speed from the $\\gamma$ expansion",
      "Compute reaction energies from mass defect $\\Delta m$"
    ],
    concepts: [
      {
        term: "Rest energy",
        kind: "law",
        statement: "Mass itself is energy: $E_{0} = m_{0}c^{2}$, so $1$ kg corresponds to $9.0 \\times 10^{16}$ J.",
        detail: "An electron's $511$ keV and proton's $938$ MeV rest energies set particle-physics units."
      },
      {
        term: "Relativistic energy",
        kind: "theorem",
        statement: "Moving energy is $E = \\gamma m_{0}c^{2}$ with kinetic part $K = (\\gamma - 1)m_{0}c^{2}$, unbounded as $v \\to c$.",
        detail: "At $0.80c$ ($\\gamma = 1.667$) an electron carries $341$ keV of kinetic energy."
      },
      {
        term: "Newtonian limit",
        kind: "method",
        statement: "Expanding $\\gamma \\approx 1 + v^{2}/2c^{2}$ gives $K \\approx m_{0}v^{2}/2$, so Newton survives at $v \\ll c$.",
        detail: "At $0.10c$ the exact and classical $K$ differ by under one percent."
      },
      {
        term: "Mass defect",
        kind: "method",
        statement: "Reaction energy is $Q = \\Delta m\\,c^{2}$ with $1$ u $= 931.5$ MeV: lost mass reappears as kinetic energy and photons.",
        detail: "Fusing four protons to helium sacrifices $0.0287$ u ($26.7$ MeV), the Sun's per-reaction wage."
      },
      {
        term: "Momentum form",
        kind: "notation",
        statement: "**Relativistic momentum** $p = \\gamma m_{0}v$ pairs with energy as $E^{2} = (pc)^{2} + (m_{0}c^{2})^{2}$.",
        detail: "Photons ride the $m_{0} = 0$ line with $E = pc$ exactly." }
    ],
    figures: [
      {
        caption: "Kinetic energy $(\\gamma-1)m_{0}c^{2}$ leaves $mv^{2}/2$ and diverges at $c$",
        svg: '<svg role="img" aria-label="Kinetic energy (gamma-1)m_0c^2 leaves mv^2/2 and diverges at c" viewBox="0 0 400 140" width="100%" height="140"><line x1="40" y1="10" x2="40" y2="125" stroke="currentColor" stroke-width="1"/><line x1="40" y1="125" x2="380" y2="125" stroke="currentColor" stroke-width="1"/><path d="M40,120 L200,90 L300,60" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><path d="M40,120 C150,105 250,80 360,15" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="250" y="118" font-size="11" fill="currentColor">classical</text><text x="280" y="45" font-size="11" fill="currentColor">relativistic</text><line x1="360" y1="125" x2="360" y2="15" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/><text x="360" y="135" text-anchor="middle" font-size="11" fill="currentColor">c</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Electron at 0.90c",
        problem: "Find the kinetic energy of an electron ($m_{0}c^{2} = 511$ keV) at $0.90c$.",
        steps: [
          { label: "Gamma", text: "$\\gamma = 1/\\sqrt{1 - 0.81} = 2.294$." },
          { label: "Kinetic", text: "$K = (2.294 - 1) \\times 511 = 1.294 \\times 511 \\approx 661$ keV." },
          { label: "Compare", text: "Classical $mv^{2}/2$ gives $0.81 \\times 511/2 \\approx 207$ keV, far short." }
        ],
        result: "About $661$ keV."
      },
      {
        title: "Fusion wage",
        problem: "Four protons ($4 \\times 1.00728$ u) fuse to helium ($4.00260$ u) plus positrons/neutrinos carrying $0.00055$ u each side net. With net $\\Delta m = 0.0287$ u, find $Q$.",
        steps: [
          { label: "Mass lost", text: "$\\Delta m = 0.0287$ u." },
          { label: "Energy", text: "$Q = 0.0287 \\times 931.5 \\approx 26.73$ MeV." },
          { label: "Scale", text: "Grams per second of such loss power the Sun's $3.8 \\times 10^{26}$ W." }
        ],
        result: "About $26.7$ MeV per helium made."
      }
    ],
    keyTakeaways: [
      "Rest mass is energy $m_{0}c^{2}$; motion multiplies by $\\gamma$.",
      "Kinetic $(\u03b3-1)m_{0}c^{2}$ recovers $mv^{2}/2$ slowly.",
      "Mass defect $\\Delta m$ prices every nuclear reaction."
    ],
    quiz: [
      {
        q: "Rest energy of $1.0$ g of mass is about:",
        options: ["$9 \\times 10^{13}$ J", "$3 \\times 10^{8}$ J", "$1$ J", "$9 \\times 10^{7}$ J"],
        answer: 0,
        explanation: "$E = 10^{-3} \\times (3.00 \\times 10^{8})^{2} = 9.0 \\times 10^{13}$ J."
      },
      {
        q: "As $v \\to c$, relativistic kinetic energy:",
        options: ["Returns to zero", "Stays classical", "Caps at $m_{0}c^{2}$", "Diverges to infinity"],
        answer: 3,
        explanation: "$\\gamma \\to \\infty$ makes $(\u03b3-1)m_{0}c^{2}$ unbounded, banning $c$ for mass."
      },
      {
        q: "A reaction loses $0.010$ u of mass. Energy released is about:",
        options: ["$931$ MeV", "$0.931$ MeV", "$9.3$ MeV", "$93$ MeV"],
        answer: 2,
        explanation: "$0.010 \\times 931.5 \\approx 9.3$ MeV."
      }
    ]
  }
]
