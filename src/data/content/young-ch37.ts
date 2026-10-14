import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 37: Relativity.

export const youngCh37Content: SectionContent[] = [
  {
    sectionId: "young-ch37-s1",
    readingTime: 5,
    intro: "Relativity starts by demoting absolute rest: the laws of physics, including Maxwell's, are identical in every inertial frame. Only relative motion matters. The Michelson-Morley null forces the second postulate, invariant light speed, which breaks Galilean velocity addition.",
    objectives: [
      "State the two postulates of special relativity",
      "Distinguish inertial from noninertial frames",
      "Explain why Galilean transforms fail for light"
    ],
    concepts: [
      {
        term: "Principle of relativity",
        kind: "law",
        statement: "**The laws of physics are identical in all inertial frames**; no experiment detects absolute uniform motion.",
        detail: "Mechanics already obeyed this (Galileo's ship); Einstein extends it to electromagnetism."
      },
      {
        term: "Invariance of c",
        kind: "law",
        statement: "**Light speed in vacuum is $c$ in every inertial frame**, independent of source or observer motion.",
        detail: "Confirmed by Michelson-Morley and countless particle-accelerator timings."
      },
      {
        term: "Inertial frame",
        kind: "definition",
        statement: "A frame where **Newton's first law holds**: free particles move uniformly. Noninertial frames need fictitious forces.",
        detail: "Relativity restricts its simple transforms to inertial frames; general relativity handles the rest."
      },
      {
        term: "Galilean failure",
        kind: "insight",
        statement: "Galileo adds velocities ($u^{\\prime} = u - v$), predicting **light at $c \\pm v$**; experiment says $c$ always.",
        detail: "Keeping Maxwell plus $c$-invariance forces new space-time transforms."
      },
      {
        term: "Ether abandoned",
        kind: "insight",
        statement: "**No ether frame exists**; fields propagate in vacuum with no preferred rest frame.",
        detail: "The null result is elevated from puzzle to postulate."
      }
    ],
    examples: [
      {
        title: "Galileo predicts what?",
        problem: "A ship moves $v = 20$ m/s; a masthead light fires forward at $c$. What do Galilean and relativistic rules predict ashore?",
        steps: [
          { label: "Step 1: Galilean", text: "$c + 20$ m/s ashore by vector addition." },
          { label: "Step 2: Relativistic", text: "Exactly $c = 299792458$ m/s by postulate two." },
          { label: "Step 3: Test", text: "Moving-source starlight and pion-decay photons confirm $c$ to $10^{-6}$." }
        ],
        result: "Galileo says $c + v$; nature says $c$."
      },
      {
        title: "Inertial check",
        problem: "Is a braking car inertial? A cruising jet?",
        steps: [
          { label: "Step 1: Braking car", text: "Free objects lurch forward: fictitious force needed, noninertial." },
          { label: "Step 2: Cruising jet", text: "Smooth uniform flight: coffee sits level, inertial to micro-g." },
          { label: "Step 3: Scope", text: "Relativity's simple formulas apply to the jet frame, not the braking frame." }
        ],
        result: "Cruise is inertial; braking is not."
      }
    ],
    keyTakeaways: [
      "Physics laws are frame independent across inertial frames.",
      "Light speed $c$ is invariant, breaking Galilean addition.",
      "No ether; vacuum needs no rest frame."
    ],
    quiz: [
      {
        q: "First postulate states:",
        options: ["c varies with source", "Laws of physics are same in all inertial frames", " simultaneity is absolute", "Mass is invariant at all speeds"],
        answer: 1,
        explanation: "Relativity principle generalizes Galilean invariance to all physics."
      },
      {
        q: "Second postulate states:",
        options: ["Time is absolute", "Light speed is c in every inertial frame", "Ether exists", "Gravity is geometry"],
        answer: 1,
        explanation: "Invariance of c plus relativity forces new transforms."
      },
      {
        q: "Galilean velocity addition fails for:",
        options: ["Baseballs", "Light in vacuum", "Walking pace", "Sound in still air"],
        answer: 1,
        explanation: "It predicts c plus or minus v, contradicted by experiment."
      }
    ]
  },
  {
    sectionId: "young-ch37-s2",
    readingTime: 6,
    intro: "If $c$ is invariant, simultaneity cannot be absolute. Lightning striking both ends of a moving train looks simultaneous on the platform but sequential aboard. Young uses Einstein's train to show that now depends on frame.",
    objectives: [
      "Explain Einstein's train simultaneity argument",
      "Define clock synchronization by light signals",
      "State why no frame's now is privileged"
    ],
    concepts: [
      {
        term: "Relativity of simultaneity",
        kind: "theorem",
        statement: "**Events simultaneous in one frame are generally not in another** moving relative to it.",
        detail: "Light-travel delay plus invariant $c$ splits the verdicts; neither observer errs."
      },
      {
        term: "Einstein synchronization",
        kind: "method",
        statement: "**Clocks sync by half-round-trip light signals**: emission at $t_{1}$, return at $t_{2}$, set distant clock to $(t_{1}+t_{2})/2$.",
        detail: "Assumes isotropic $c$, which postulate two guarantees."
      },
      {
        term: "Train argument",
        kind: "insight",
        statement: "Platform sees **equal travel to the midpoint** (simultaneous); train sees the front flash arrive first because it rushes toward that wavefront.",
        detail: "Each frame's verdict follows correctly from $c$-isotropy in its own frame."
      },
      {
        term: "Spacelike separation",
        kind: "definition",
        statement: "Events with **no light-speed connection can reorder in time** across frames; causally linked events never reorder.",
        detail: "Cause always precedes effect in every frame; simultaneity disputes only touch spacelike pairs."
      },
      {
        term: "No universal now",
        kind: "insight",
        statement: "Each inertial frame slices spacetime at its own angle; **now is a convention, not a cosmic plane**.",
        detail: "Spacetime diagrams draw these tilted simultaneity lines explicitly."
      }
    ],
    figures: [
      {
        caption: "Einstein train: platform sees simultaneous strikes; aboard, the front flash arrives first so strikes are sequential",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Einstein train: platform sees simultaneous strikes; aboard, the front flash arrives first so strikes are sequential"><rect x="0" y="0" width="400" height="200" fill="none"/><rect x="100" y="80" width="200" height="40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="40" y1="140" x2="360" y2="140" stroke="currentColor" stroke-width="2"/><circle cx="100" cy="80" r="6" fill="currentColor"/><circle cx="300" cy="80" r="6" fill="currentColor"/><circle cx="200" cy="100" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 100 80 L 200 100 M 300 80 L 200 100" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4"/><text x="90" y="65" font-size="12" fill="currentColor">rear flash</text><text x="285" y="65" font-size="12" fill="currentColor">front flash</text><text x="170" y="170" font-size="12" fill="currentColor">platform: equal paths, same time</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Platform versus train timing",
        problem: "Train length $L = 120$ m, speed $v = 0.60c$. Platform sees end strikes simultaneous. What does the train see?",
        steps: [
          { label: "Step 1: Platform midpoint", text: "Light from each end travels $L/2 = 60$ m to the platform midpoint, arriving together." },
          { label: "Step 2: Train view", text: "Aboard, the midpoint rushes toward the front flash at $0.60c$, so front light meets it first." },
          { label: "Step 3: Order", text: "Front strike first, rear later; gap $\\approx \\gamma^{2}vL/c^{2}$ relativistically, $vL/c^{2}$ to first order." }
        ],
        result: "Platform simultaneous; train front-then-rear."
      },
      {
        title: "Syncing two clocks",
        problem: "Clocks $300$ m apart in one frame. How to sync with light?",
        steps: [
          { label: "Step 1: Send", text: "Emit at $t_{1} = 0$ from A; pulse travels $1.00$ microsec each way." },
          { label: "Step 2: Return", text: "Reflection returns at $t_{2} = 2.00$ microsec." },
          { label: "Step 3: Set", text: "Set B to $1.00$ microsec at arrival instant; frames moving past disagree on this setting." }
        ],
        result: "Einstein sync sets B to the half-trip time."
      }
    ],
    keyTakeaways: [
      "Simultaneity is frame dependent for spacelike events.",
      "Einstein sync uses isotropic $c$ to set distant clocks.",
      "Causality survives: causes still precede effects everywhere."
    ],
    quiz: [
      {
        q: "Relativity of simultaneity means:",
        options: ["Clocks run slow", "Simultaneous in one frame may not be in another", "Light speed varies", "Lengths grow"],
        answer: 1,
        explanation: "Invariant c plus motion splits now-verdicts."
      },
      {
        q: "Einstein synchronization sets the distant clock to:",
        options: ["Emission time", "Half the round-trip time", "Return time", "Zero always"],
        answer: 1,
        explanation: "Isotropic travel splits the round trip equally."
      },
      {
        q: "Which event pairs can reorder in time?",
        options: ["Cause and effect", "Spacelike separated with no light connection", "Same-place events", "Same-time same-place"],
        answer: 1,
        explanation: "Only spacelike pairs lack invariant order; causal order is absolute."
      }
    ]
  },
  {
    sectionId: "young-ch37-s3",
    readingTime: 7,
    intro: "A light clock bouncing vertically ticks slower as it flies past: the photon takes a longer diagonal at speed $c$, so the period stretches by $\\gamma = 1/\\sqrt{1-v^{2}/c^{2}}$. Moving clocks run slow, verified by muons living $8$ times past their rest lifetime at $0.99c$.",
    objectives: [
      "Derive $\\Delta t = \\gamma\\,\\Delta t_{0}$ from the light clock",
      "Define proper time as the rest-frame interval",
      "Apply time dilation to muons and atomic clocks"
    ],
    concepts: [
      {
        term: "Proper time",
        kind: "definition",
        statement: "**Proper time $\\Delta t_{0}$ is measured where the two events share one place** (clock's rest frame); all others see longer $\\Delta t$.",
        detail: "It is the shortest possible interval between the events."
      },
      {
        term: "Time dilation",
        kind: "theorem",
        statement: "**$\\Delta t = \\gamma\\,\\Delta t_{0}$** with **$\\gamma = 1/\\sqrt{1-\\beta^{2}}$**, $\\beta = v/c$.",
        detail: "$v = 0.80c$ gives $\\gamma = 1.667$; $0.99c$ gives $7.09$."
      },
      {
        term: "Light-clock proof",
        kind: "method",
        statement: "Vertical photon path $2h/c$ stretches to **$2\\sqrt{h^{2}+(v\\Delta t/2)^{2}}/c$** diagonally; solving yields $\\gamma$.",
        detail: "Uses only Pythagoras plus invariant $c$."
      },
      {
        term: "Muon verification",
        kind: "law",
        statement: "Muons ($\\tau_{0} = 2.20$ microsec) at $0.998c$ reach ground because **$\\gamma \\approx 16$ stretches life to $35$ microsec**.",
        detail: "Without dilation few would cross $10$ km of air; with it most survive."
      },
      {
        term: "Twin paradox resolved",
        kind: "insight",
        statement: "The traveling twin ages less because **turnaround breaks symmetry**: only the stay-at-home twin stays inertial throughout.",
        detail: "Accelerated worldline has shorter proper time between reunions."
      }
    ],
    figures: [
      {
        caption: "Light clock: vertical photon path stretches to a diagonal at speed $v$, giving $\gamma$",
        svg: '<svg viewBox="0 0 400 190" style="width:100%;height:auto" role="img" aria-label="Light clock: vertical photon path stretches to a diagonal at speed v, giving \gamma"><rect x="0" y="0" width="400" height="190" fill="none"/><line x1="80" y1="150" x2="80" y2="40" stroke="currentColor" stroke-width="2"/><polygon points="80,40 75,50 85,50" fill="currentColor"/><text x="60" y="170" font-size="12" fill="currentColor">rest: 2h/c</text><line x1="220" y1="150" x2="220" y2="150" stroke="currentColor" stroke-width="1"/><line x1="220" y1="150" x2="300" y2="40" stroke="currentColor" stroke-width="2"/><line x1="220" y1="150" x2="300" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4"/><text x="235" y="170" font-size="12" fill="currentColor">v Dt/2</text><text x="305" y="100" font-size="12" fill="currentColor">c Dt/2</text><text x="215" y="60" font-size="12" fill="currentColor">moving: diagonal</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Muon survival",
        problem: "Muons at $v = 0.990c$ descend $10.0$ km. What fraction survives? ($\\tau_{0} = 2.20$ microsec.)",
        steps: [
          { label: "Step 1: Gamma", text: "$\\gamma = 1/\\sqrt{1-0.9801} = 1/\\sqrt{0.0199} = 7.09$." },
          { label: "Step 2: Lab lifetime", text: "$\\tau = 7.09 \\times 2.20 = 15.6$ microsec; travel time $10^{4}/(0.990 \\times 3.00 \\times 10^{8}) = 33.7$ microsec $= 2.16\\tau$." },
          { label: "Step 3: Survival", text: "$e^{-2.16} = 0.115$: $12$ percent survive; rest-frame prediction $e^{-15.3} \\approx 0$." }
        ],
        result: "$12$ percent reach ground with dilation; none without."
      },
      {
        title: "Jet atomic clocks",
        problem: "A clock flies $10.0$ hr at $300$ m/s. How much does it lag?",
        steps: [
          { label: "Step 1: Gamma", text: "$\\beta = 10^{-6}$; $\\gamma - 1 \\approx \\beta^{2}/2 = 5 \\times 10^{-13}$." },
          { label: "Step 2: Lag", text: "$\\Delta = 36000 \\times 5 \\times 10^{-13} = 1.8 \\times 10^{-8}$ s $= 18$ ns." },
          { label: "Step 3: Experiment", text: "Hafele-Keating saw tens of ns plus gravitational blueshift, matching relativity." }
        ],
        result: "Special-relativistic lag $18$ ns eastward-scale."
      }
    ],
    keyTakeaways: [
      "$\\Delta t = \\gamma\\Delta t_{0}$; moving clocks tick slower.",
      "Proper time is the one-place rest-frame interval.",
      "Muons, jets, and GPS confirm dilation daily."
    ],
    quiz: [
      {
        q: "gamma at v = 0.6c is:",
        options: ["$1.0$", "$1.25$", "$1.67$", "$2.0$"],
        answer: 1,
        explanation: "$1/\\sqrt{1-0.36} = 1/0.8 = 1.25$."
      },
      {
        q: "Proper time is measured:",
        options: ["In any frame", "Where both events share one position", "Only on Earth", "At light speed"],
        answer: 1,
        explanation: "Same-place clock reads the shortest interval."
      },
      {
        q: "Twin paradox resolves because:",
        options: ["Both twins are symmetric", "Traveler accelerates, breaking inertial symmetry", "Clocks malfunction", "Distance contracts to zero"],
        answer: 1,
        explanation: "Only the stay-home worldline is fully inertial."
      },
      {
        q: "Muons reach ground mainly due to:",
        options: ["Higher speed than light", "Time dilation extending lab lifetime", "Shielding", "Larger mass"],
        answer: 1,
        explanation: "Gamma stretches decay time in Earth's frame."
      }
    ]
  },
  {
    sectionId: "young-ch37-s4",
    readingTime: 6,
    intro: "Measuring a speeding rod means marking both ends simultaneously, and simultaneity is frame dependent. The rod that is $L_{0}$ at rest fits into $L = L_{0}/\\gamma$ while passing. Contraction strikes only along motion; transverse sizes never shrink.",
    objectives: [
      "Derive $L = L_{0}/\\gamma$ from time dilation",
      "Define proper length as the rest-frame length",
      "Explain why only the parallel dimension contracts"
    ],
    concepts: [
      {
        term: "Proper length",
        kind: "definition",
        statement: "**Proper length $L_{0}$ is measured at rest**; any frame with the rod moving sees it shorter.",
        detail: "Longest length belongs to the rest frame, dual to shortest time."
      },
      {
        term: "Length contraction",
        kind: "theorem",
        statement: "**$L = L_{0}/\\gamma$** along motion; perpendicular lengths unchanged.",
        detail: "$0.80c$ rod shrinks to $60$ percent; $0.99c$ to $14$ percent."
      },
      {
        term: "Measurement protocol",
        kind: "method",
        statement: "**Mark both ends at the same frame time**; disagreeing nows disagree on length.",
        detail: "Photographing is not measuring: light-travel distortion differs from contraction."
      },
      {
        term: "Transverse invariance",
        kind: "theorem",
        statement: "**Perpendicular sizes never contract** by symmetry: no preferred transverse direction exists.",
        detail: "A fast train narrows in length, never in height or width."
      },
      {
        term: "Muon view",
        kind: "insight",
        statement: "Earth sees **muon time dilated**; muon sees **atmosphere contracted** by the same $\\gamma$: both agree it lands.",
        detail: "$10$ km at $\\gamma = 16$ becomes $625$ m in the muon frame."
      }
    ],
    examples: [
      {
        title: "Spaceship squeeze",
        problem: "Ship rest length $100$ m passes at $0.80c$. What length does Earth measure?",
        steps: [
          { label: "Step 1: Gamma", text: "$\\gamma = 1/\\sqrt{1-0.64} = 1.667$." },
          { label: "Step 2: Contract", text: "$L = 100/1.667 = 60.0$ m." },
          { label: "Step 3: Aboard", text: "Crew still measures $100$ m; Earth rulers are the contracted ones in the ship frame." }
        ],
        result: "Earth sees $60.0$ m along motion."
      },
      {
        title: "Muon atmosphere",
        problem: "$\\gamma = 16$ muon meets $10.0$ km of air. How thick in the muon frame?",
        steps: [
          { label: "Step 1: Contract", text: "$L = 10.0/16 = 0.625$ km $= 625$ m." },
          { label: "Step 2: Time", text: "Crossing at $\\approx c$ takes $2.08$ microsec, within rest lifetime $2.20$ microsec." },
          { label: "Step 3: Agreement", text: "Both frames predict landing; time versus length tell the same story." }
        ],
        result: "$625$ m of air in the muon frame."
      }
    ],
    keyTakeaways: [
      "$L = L_{0}/\\gamma$ along motion only.",
      "Proper length is the rest length, the longest.",
      "Simultaneous-end marking is what contracts."
    ],
    quiz: [
      {
        q: "A 10 m rod at 0.8c measures:",
        options: ["$10$ m", "$6$ m", "$16.7$ m", "$8$ m"],
        answer: 1,
        explanation: "$\\gamma = 5/3$, so $10/(5/3) = 6$ m."
      },
      {
        q: "Transverse dimensions under boost:",
        options: ["Contract equally", "Expand", "Are unchanged", "Vanish"],
        answer: 2,
        explanation: "Symmetry forbids transverse change; only parallel contracts."
      },
      {
        q: "Length contraction follows from:",
        options: ["Material compression", "Time dilation plus simultaneity protocol", "Optical illusion", "Gravity"],
        answer: 1,
        explanation: "Same gamma from light-clock timing applied to end marking."
      }
    ]
  },
  {
    sectionId: "young-ch37-s5",
    readingTime: 7,
    intro: "Lorentz transforms replace Galileo with the $\\gamma$-mixed space-time that keeps $c$ invariant. Time and position rotate into each other; velocity addition caps at $c$. Spacetime intervals, not separate space and time gaps, are the frame-independent reality.",
    objectives: [
      "Write Lorentz $x^{\\prime}$, $t^{\\prime}$ transforms and recover Galileo at $v \\ll c$",
      "Apply relativistic velocity addition $u^{\\prime} = (u-v)/(1-uv/c^{2})$",
      "Compute invariance of $s^{2} = c^{2}t^{2} - x^{2}$"
    ],
    concepts: [
      {
        term: "Lorentz transformations",
        kind: "theorem",
        statement: "**$x^{\\prime} = \\gamma(x - vt)$**, **$t^{\\prime} = \\gamma(t - vx/c^{2})$** (standard configuration); $y, z$ unchanged.",
        detail: "Derived from linearity plus $x = ct$ mapping to $x^{\\prime} = ct^{\\prime}$."
      },
      {
        term: "Galileo recovered",
        kind: "insight",
        statement: "At $v \\ll c$, $\\gamma \\to 1$ and $vx/c^{2} \\to 0$, so **Lorentz degrades to $x^{\\prime} = x - vt$, $t^{\\prime} = t$**.",
        detail: "Newton is the slow limit, not a rival."
      },
      {
        term: "Velocity addition",
        kind: "theorem",
        statement: "**$u^{\\prime} = (u-v)/(1-uv/c^{2})$**; no composition of sublight speeds reaches $c$.",
        detail: "$0.9c + 0.9c$ (relativistically) is $0.994c$, never $1.8c$."
      },
      {
        term: "Invariant interval",
        kind: "law",
        statement: "**$s^{2} = c^{2}\\Delta t^{2} - \\Delta x^{2}$** is identical in all frames; its sign sorts timelike, spacelike, lightlike pairs.",
        detail: "Proper time is $\\sqrt{s^{2}}/c$ for timelike pairs."
      },
      {
        term: "Spacetime diagram tilt",
        kind: "method",
        statement: "Moving axes tilt symmetrically toward the light line; **simultaneity lines slope $v/c$**, worldlines slope $c/v$.",
        detail: "Reading intervals off tilted axes replaces algebra with geometry."
      }
    ],
    figures: [
      {
        caption: "Spacetime axes: light line at $45^{\\circ}$, moving-frame axes tilted symmetrically toward it",
        svg: '<svg viewBox="0 0 400 220" style="width:100%;height:auto" role="img" aria-label="Spacetime axes: light line at 45^circ, moving-frame axes tilted symmetrically toward it"><rect x="0" y="0" width="400" height="220" fill="none"/><line x1="200" y1="200" x2="200" y2="20" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="180" x2="360" y2="180" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="200" x2="340" y2="20" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6,4"/><line x1="200" y1="200" x2="260" y2="20" stroke="currentColor" stroke-width="2"/><line x1="200" y1="200" x2="380" y2="140" stroke="currentColor" stroke-width="2"/><text x="300" y="60" font-size="12" fill="currentColor">light x = ct</text><text x="262" y="60" font-size="12" fill="currentColor">ct-prime</text><text x="330" y="160" font-size="12" fill="currentColor">x-prime</text><text x="205" y="40" font-size="12" fill="currentColor">ct</text></svg>',
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "Adding 0.9c and 0.9c",
        problem: "A rocket at $0.90c$ fires a probe at $0.90c$ relative to itself forward. What speed does Earth see?",
        steps: [
          { label: "Step 1: Formula", text: "$u = (0.90c + 0.90c)/(1 + 0.81) = 1.80c/1.81$." },
          { label: "Step 2: Number", text: "$u = 0.9945c$, barely faster than either alone." },
          { label: "Step 3: Light check", text: "Firing a photon ($u^{\\prime} = c$) gives $(v + c)/(1 + v/c) = c$ always." }
        ],
        result: "$0.994c$ Earth-frame; light stays $c$."
      },
      {
        title: "Interval invariance",
        problem: "Frame S: $\\Delta t = 5.00$ microsec, $\\Delta x = 1200$ m. Find $s^{2}$ and proper time.",
        steps: [
          { label: "Step 1: Terms", text: "$c\\Delta t = 1500$ m; $s^{2} = 1500^{2} - 1200^{2} = 2250000 - 1440000 = 810000$ m-squared." },
          { label: "Step 2: Proper time", text: "$\\tau = \\sqrt{s^{2}}/c = 900/(3.00 \\times 10^{8}) = 3.00$ microsec." },
          { label: "Step 3: Meaning", text: "A clock present at both events reads $3.00$ microsec while S reads $5.00$." }
        ],
        result: "$s^{2} = 8.10 \\times 10^{5}$ m-squared, $\\tau = 3.00$ microsec."
      }
    ],
    keyTakeaways: [
      "Lorentz mixes $x$ and $t$ with $\\gamma$ to preserve $c$.",
      "Velocities add subluminally via $(u-v)/(1-uv/c^{2})$.",
      "Interval $c^{2}t^{2}-x^{2}$ is the invariant all frames share."
    ],
    quiz: [
      {
        q: "Lorentz at v much less than c becomes:",
        options: ["No transform", "Galilean transform", "Length expansion", "Quantum mechanics"],
        answer: 1,
        explanation: "Gamma approaches 1 and vx/c-squared vanishes."
      },
      {
        q: "Rocket 0.5c launches probe 0.5c forward (ship frame). Earth sees:",
        options: ["$1.0c$", "$0.8c$", "$0.5c$", "$1.25c$"],
        answer: 1,
        explanation: "$(0.5+0.5)/(1+0.25) = 1/1.25 = 0.8c$."
      },
      {
        q: "Invariant interval is:",
        options: ["$x + ct$", "$c^{2}t^{2} - x^{2}$", "$x/t$", "$gamma x$"],
        answer: 1,
        explanation: "Lorentz preserves this combination across frames."
      }
    ]
  },
  {
    sectionId: "young-ch37-s6",
    readingTime: 5,
    intro: "Light redshifts when source and observer recede because successive crests travel farther. Relativity replaces the separate source/observer formulas with one $\\sqrt{(1+\\beta)/(1-\\beta)}$ factor governed by relative speed. Hubble's law turns this shift into the expansion of the universe.",
    objectives: [
      "State the relativistic Doppler $f = f_{0}\\sqrt{(1-\\beta)/(1+\\beta)}$ for recession",
      "Distinguish longitudinal redshift from transverse time-dilation shift",
      "Apply $z \\approx v/c$ nearby and Hubble's law far away"
    ],
    concepts: [
      {
        term: "Longitudinal Doppler",
        kind: "law",
        statement: "Receding at $\\beta$: **$\\lambda = \\lambda_{0}\\sqrt{(1+\\beta)/(1-\\beta)}$** (redshift); approaching inverts the root (blueshift).",
        detail: "Combines wave-travel stretch with emitter time dilation."
      },
      {
        term: "Low-speed limit",
        kind: "theorem",
        statement: "At $\\beta \\ll 1$, **$\\Delta\\lambda/\\lambda \\approx \\beta$**, matching sound-like intuition with $c$ as the wave speed.",
        detail: "Police radar and stellar $z = 0.001$ work here."
      },
      {
        term: "Transverse Doppler",
        kind: "theorem",
        statement: "Sideways motion still redshifts by **$\\gamma$** ($f = f_{0}/\\gamma$) from pure time dilation, with no classical analogue.",
        detail: "Ives-Stilwell confirmed it with canal rays."
      },
      {
        term: "Redshift parameter",
        kind: "notation",
        statement: "**$z = (\\lambda-\\lambda_{0})/\\lambda_{0}$**; nearby $z = v/c$, cosmological $z$ tracks scale-factor growth.",
        detail: "$z = 1$ means doubled wavelength, not light-speed recession."
      },
      {
        term: "Hubble connection",
        kind: "insight",
        statement: "**$v = H_{0}d$** maps redshift to distance; large $z$ is expanding-space stretch, not local speeding.",
        detail: "General relativity owns the far field; Doppler owns peculiar motion."
      }
    ],
    examples: [
      {
        title: "Galaxy at 0.10c",
        problem: "H-alpha $656.3$ nm recedes at $0.100c$. Find observed $\\lambda$.",
        steps: [
          { label: "Step 1: Factor", text: "$\\sqrt{1.10/0.90} = \\sqrt{1.2222} = 1.1055$." },
          { label: "Step 2: Shift", text: "$\\lambda = 656.3 \\times 1.1055 = 725.6$ nm." },
          { label: "Step 3: z", text: "$z = 0.1055$, near $\\beta = 0.100$ with second-order correction." }
        ],
        result: "$725.6$ nm, redshifted $69.3$ nm."
      },
      {
        title: "Police radar feel",
        problem: "Car recedes at $30.0$ m/s; radar $10.0$ GHz. Fractional shift?",
        steps: [
          { label: "Step 1: Beta", text: "$\\beta = 30.0/(3.00 \\times 10^{8}) = 10^{-7}$." },
          { label: "Step 2: Two-way", text: "Round trip doubles: $\\Delta f/f = 2\\beta = 2 \\times 10^{-7}$." },
          { label: "Step 3: Hertz", text: "$\\Delta f = 2.0$ kHz, easily heterodyned." }
        ],
        result: "$2.0$ kHz return shift."
      }
    ],
    keyTakeaways: [
      "Relativistic Doppler depends only on relative $\\beta$, not who moves.",
      "Recession redshifts by $\\sqrt{(1+\\beta)/(1-\\beta)}$, approaching blueshifts.",
      "Transverse $\\gamma$ shift is pure time dilation."
    ],
    quiz: [
      {
        q: "Source recedes at 0.2c. Wavelength factor is:",
        options: ["$1.0$", "$1.225$", "$0.816$", "$1.5$"],
        answer: 1,
        explanation: "$\\sqrt{1.2/0.8} = \\sqrt{1.5} = 1.225$."
      },
      {
        q: "Transverse Doppler at 0.6c gives frequency:",
        options: ["$f_0$", "$f_0/1.25$", "$1.25 f_0$", "Zero"],
        answer: 1,
        explanation: "$\\gamma = 1.25$; sideways clocks run slow so light redshifts."
      },
      {
        q: "Small-z redshift measures:",
        options: ["Temperature", "Recession speed over c", "Magnetic field", "Mass"],
        answer: 1,
        explanation: "$z \\approx v/c$ for nearby sources."
      }
    ]
  },
  {
    sectionId: "young-ch37-s7",
    readingTime: 6,
    intro: "Newton's $p = mv$ would let forces push particles past $c$. Relativity repairs momentum to $p = \\gamma mv$, which diverges as $v$ nears $c$. Accelerators verify this daily: doubling energy barely budges speed near the top, it fattens $\\gamma$ instead.",
    objectives: [
      "State $p = \\gamma mv$ and explain the $c$ speed limit",
      "Compute $\\gamma$ and $p$ for accelerator electrons and protons",
      "Show $p \\approx mv$ recovered at low speed"
    ],
    concepts: [
      {
        term: "Relativistic momentum",
        kind: "law",
        statement: "**$p = \\gamma mv$** is the conserved momentum; $m$ is invariant rest mass.",
        detail: "Force is $dp/dt$, not $ma$; longitudinal and transverse inertia differ."
      },
      {
        term: "Speed limit",
        kind: "theorem",
        statement: "Finite $p$ implies **$v = pc^{2}/E < c$ always**; infinite momentum is needed to reach $c$.",
        detail: "$v \\to c$ asymptotically as $p \\to \\infty$."
      },
      {
        term: "Newtonian limit",
        kind: "insight",
        statement: "**$\\gamma \\approx 1 + v^{2}/2c^{2}$** gives $p \\approx mv$ below $0.1c$ to percent accuracy.",
        detail: "Correspondence holds term by term with energy below."
      },
      {
        term: "Why mass is not gamma-m",
        kind: "notation",
        statement: "Modern use keeps **$m$ invariant** and puts $\\gamma$ on $p$ and $E$, avoiding confusing relativistic mass.",
        detail: "Young follows this invariant-mass convention."
      },
      {
        term: "Accelerator evidence",
        kind: "law",
        statement: "**Bertozzi's electrons** saturate speed near $c$ while $p$ and $E$ grow linearly with push, matching $\\gamma mv$.",
        detail: "$1.5$ MeV electrons already exceed $0.9c$ yet keep accepting momentum."
      }
    ],
    examples: [
      {
        title: "1 GeV proton momentum",
        problem: "Proton ($mc^{2} = 938$ MeV) with kinetic $1.00$ GeV. Find $\\gamma$, $v$, $p$.",
        steps: [
          { label: "Step 1: Gamma", text: "$E = 1938$ MeV; $\\gamma = 1938/938 = 2.066$." },
          { label: "Step 2: Speed", text: "$\\beta = \\sqrt{1-1/\\gamma^{2}} = \\sqrt{1-0.2343} = 0.875$: $v = 0.875c$." },
          { label: "Step 3: Momentum", text: "$pc = \\sqrt{E^{2}-(mc^{2})^{2}} = \\sqrt{1938^{2}-938^{2}} = 1696$ MeV, so $p = 1.70$ GeV/c." }
        ],
        result: "$\\gamma = 2.07$, $v = 0.875c$, $p = 1.70$ GeV/c."
      },
      {
        title: "When is Newton fine?",
        problem: "At what $v$ does $\\gamma$ exceed $1.01$ (one percent momentum error)?",
        steps: [
          { label: "Step 1: Solve", text: "$1/\\sqrt{1-\\beta^{2}} = 1.01$ gives $1-\\beta^{2} = 0.9803$." },
          { label: "Step 2: Beta", text: "$\\beta^{2} = 0.0197$, $\\beta = 0.140$." },
          { label: "Step 3: Rule", text: "Below $0.14c$ ($\u2009\\sim 4 \\times 10^{7}$ m/s) Newton suffices to one percent." }
        ],
        result: "$v = 0.14c$ is the one-percent boundary."
      }
    ],
    keyTakeaways: [
      "$p = \\gamma mv$ is conserved; $m$ stays invariant.",
      "$c$ is unreachable with finite momentum.",
      "Low-speed expansion restores $mv$."
    ],
    quiz: [
      {
        q: "Relativistic momentum is:",
        options: ["$mv$", "$gamma m v$", "$m v^{2}$", "$E/c^{2}$ only"],
        answer: 1,
        explanation: "Gamma factor enforces conservation plus c limit."
      },
      {
        q: "As v approaches c, momentum:",
        options: ["Saturates", "Diverges to infinity", "Goes to zero", "Stays mv"],
        answer: 1,
        explanation: "Gamma diverges so finite push yields shrinking speed gain."
      },
      {
        q: "Modern convention treats mass as:",
        options: ["Speed dependent", "Invariant rest mass", "Zero always", "Photon only"],
        answer: 1,
        explanation: "Gamma lives on p and E, not on m."
      }
    ]
  },
  {
    sectionId: "young-ch37-s8",
    readingTime: 8,
    intro: "Work on a relativistic particle feeds $E = \\gamma mc^{2}$, whose rest piece $mc^{2}$ is frozen energy convertible to kinetic and back. Mass is not separately conserved; total energy is. Pair creation and nuclear binding are the receipts for $\\Delta E = \\Delta m\\,c^{2}$.",
    objectives: [
      "State $E = \\gamma mc^{2}$, $K = (\\gamma-1)mc^{2}$, and $E^{2} = (pc)^{2} + (mc^{2})^{2}$",
      "Convert mass differences to MeV with $1\\,\\mathrm{u} = 931.5$ MeV/c-squared",
      "Explain mass nonconservation with total-energy conservation"
    ],
    concepts: [
      {
        term: "Total energy",
        kind: "law",
        statement: "**$E = \\gamma mc^{2}$** includes rest plus kinetic; a body at rest holds **$E_{0} = mc^{2}$**.",
        detail: "One gram at rest equals $9.0 \\times 10^{13}$ J, about a kiloton of TNT per $50$ g."
      },
      {
        term: "Kinetic energy",
        kind: "theorem",
        statement: "**$K = (\\gamma-1)mc^{2}$**, reducing to $mv^{2}/2$ at low speed via $\\gamma - 1 \\approx v^{2}/2c^{2}$.",
        detail: "$0.10c$ electron: $K = 2.57$ keV versus Newtonian $2.56$ keV."
      },
      {
        term: "Energy-momentum invariant",
        kind: "theorem",
        statement: "**$E^{2} - (pc)^{2} = (mc^{2})^{2}$** in every frame; massless photons obey $E = pc$.",
        detail: "Invariant mass can be weighed from $E$ and $p$ of fragments."
      },
      {
        term: "Mass-energy conversion",
        kind: "law",
        statement: "**Rest mass converts to other energy and back**; $\\Delta E = \\Delta m\\,c^{2}$ prices every reaction.",
        detail: "Helium weighs $0.7$ percent less than its nucleons; the missing mass is binding radiated away."
      },
      {
        term: "Binding and creation",
        kind: "insight",
        statement: "Nuclei, pairs, and annihilation all balance **total $E$**, never mass alone: $e^{+}e^{-} \\to 2\\gamma$ needs $1.022$ MeV minimum each way.",
        detail: "Chapter 43-44 cash this principle repeatedly."
      }
    ],
    figures: [
      {
        caption: "Energy-momentum invariant $E^{2} = (pc)^{2} + (mc^{2})^{2}$: rest energy plus kinetic from $\\gamma$",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Energy-momentum invariant E^2 = (pc)^2 + (mc^2)^2: rest energy plus kinetic from gamma"><rect x="0" y="0" width="400" height="200" fill="none"/><line x1="60" y1="160" x2="340" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="160" x2="60" y2="30" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="160" x2="160" y2="160" stroke="currentColor" stroke-width="3"/><text x="100" y="180" font-size="12" fill="currentColor">mc² (rest)</text><line x1="160" y1="160" x2="320" y2="50" stroke="currentColor" stroke-width="2.5"/><text x="240" y="80" font-size="12" fill="currentColor">E = γmc²</text><line x1="160" y1="160" x2="160" y2="105" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4"/><text x="165" y="135" font-size="12" fill="currentColor">pc rises with v</text></svg>',
        afterConcept: 3
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "From work-energy to E = mc-squared and the invariant norm",
        blocks: [
          {
            kind: "derivation",
            heading: "Work integral with p = gamma m v",
            body: "Start from $dK = F\\,dx = (dp/dt)\\,dx = v\\,dp$ with $p = \\gamma m v$. Write $dp = m\\,d(\\gamma v) = m\\gamma^{3}\\,dv$ along the motion (differentiating $\\gamma = (1-v^{2}/c^{2})^{-1/2}$ gives $d\\gamma = \\gamma^{3}v\\,dv/c^{2}$). Then $dK = v\\,m\\gamma^{3}\\,dv = mc^{2}\\,d\\gamma$, integrating from rest ($\\gamma = 1$) to $\\gamma$ gives **$K = (\\gamma-1)mc^{2}$** exactly. Adding the integration constant as rest energy defines **$E = K + mc^{2} = \\gamma mc^{2}$**."
          },
          {
            kind: "theorem",
            heading: "Invariant norm E-squared minus (pc)-squared",
            body: "With $p = \\gamma mv$ and $E = \\gamma mc^{2}$, form $E^{2} - (pc)^{2} = \\gamma^{2}m^{2}c^{4} - \\gamma^{2}m^{2}v^{2}c^{2} = \\gamma^{2}m^{2}c^{4}(1-v^{2}/c^{2}) = m^{2}c^{4}$. Hence **$E^{2} = (pc)^{2} + (mc^{2})^{2}$** in all frames. Lorentz transforms act as hyperbolic rotations preserving this Minkowski norm, which is why $m = \\sqrt{E^{2}-(pc)^{2}}/c^{2}$ is the frame-independent mass reconstructed in collider detectors."
          },
          {
            kind: "proof",
            heading: "Low-speed correspondence",
            body: "Expand $\\gamma = 1 + v^{2}/2c^{2} + 3v^{4}/8c^{4} + \\cdots$. Then $K = mc^{2}(v^{2}/2c^{2} + 3v^{4}/8c^{4} + \\cdots) = mv^{2}/2 + 3mv^{4}/8c^{2} + \\cdots$. The leading term is Newton; the first correction at $v = 0.1c$ is $0.75$ percent, matching the Section 37.7 boundary. No alternative definition of $K$ can both conserve with $p = \\gamma mv$ and reduce to $mv^{2}/2$."
          },
          {
            kind: "application",
            heading: "Threshold physics: why mass must be paid",
            body: "In $p + p \\to p + p + \\pi^{0}$ the pion rest mass $135$ MeV/c-squared cannot come from lab kinetic energy alone: momentum conservation wastes energy on center-of-mass motion. The invariant $s = (p_{1}+p_{2})^{2}$ fixes available energy $\\sqrt{s}$; threshold lab energy exceeds $280$ MeV for this reaction, not $135$ MeV. Every accelerator and every fusion Q-value in Chapters 43-44 is this norm in disguise."
          }
        ]
      }
    ],
    examples: [
      {
        title: "Electron at 0.99c",
        problem: "Electron $mc^{2} = 511$ keV moves at $0.990c$. Find $\\gamma$, $E$, $K$, $p$.",
        steps: [
          { label: "Step 1: Gamma", text: "$\\gamma = 7.09$ (Section 37.3); $E = 7.09 \\times 511 = 3623$ keV." },
          { label: "Step 2: Kinetic", text: "$K = E - 511 = 3112$ keV $= 3.11$ MeV." },
          { label: "Step 3: Momentum", text: "$pc = \\sqrt{3623^{2}-511^{2}} = 3587$ keV, so $p = 3.59$ MeV/c." }
        ],
        result: "$E = 3.62$ MeV, $K = 3.11$ MeV, $p = 3.59$ MeV/c."
      },
      {
        title: "Helium mass defect",
        problem: "Two protons plus two neutrons weigh $4.03188$ u; He-4 weighs $4.00260$ u. Find binding energy.",
        steps: [
          { label: "Step 1: Defect", text: "$\\Delta m = 0.02928$ u." },
          { label: "Step 2: Convert", text: "$1$ u $= 931.5$ MeV/c-squared, so $\\Delta E = 0.02928 \\times 931.5 = 27.27$ MeV." },
          { label: "Step 3: Per nucleon", text: "$6.82$ MeV each: the Sun's fuel receipt." }
        ],
        result: "$27.3$ MeV binding, $6.8$ MeV per nucleon."
      }
    ],
    keyTakeaways: [
      "$E = \\gamma mc^{2}$; rest energy $mc^{2}$ is convertible currency.",
      "$E^{2} = (pc)^{2} + (mc^{2})^{2}$ is the invariant behind all collision analysis.",
      "Total energy is conserved; rest mass alone is not."
    ],
    quiz: [
      {
        q: "Rest energy of 1 kg is about:",
        options: ["$9 \\times 10^{16}$ J", "$3 \\times 10^{8}$ J", "$1$ J", "$9 \\times 10^{6}$ J"],
        answer: 0,
        explanation: "$mc^{2} = 1\\times (3\\times 10^{8})^{2} = 9\\times 10^{16}$ J.",
      },
      {
        q: "Photon relation from the invariant with m = 0 is:",
        options: ["$E = 0$", "$E = pc$", "$E = mv^{2}/2$", "$p = 0$"],
        answer: 1,
        explanation: "$E^{2} = (pc)^{2}$ gives $E = pc$."
      },
      {
        q: "Kinetic energy relativistically is:",
        options: ["$gamma m c^{2}$", "$(gamma-1) m c^{2}$", "$m v^{2}/2$ exactly", "$p c$ always"],
        answer: 1,
        explanation: "Subtract rest energy from total."
      }
    ]
  },
  {
    sectionId: "young-ch37-s9",
    readingTime: 5,
    intro: "Relativity contains Newton the way optics contains rays: as the slow limit. Every $\\gamma$ expands to $1 + v^{2}/2c^{2}$, restoring Galilean transforms, $p = mv$, and $K = mv^{2}/2$. Young closes by checking that no tested mechanics breaks in this limit.",
    objectives: [
      "Expand $\\gamma$ to recover Newtonian formulas",
      "State the correspondence principle for relativity",
      "Identify the speed scale where corrections matter"
    ],
    concepts: [
      {
        term: "Correspondence principle",
        kind: "law",
        statement: "**Relativity must reproduce Newton at $v \\ll c$**; any failure there would falsify it.",
        detail: "All expansions below are this principle in algebra."
      },
      {
        term: "Gamma expansion",
        kind: "theorem",
        statement: "**$\\gamma = 1 + v^{2}/2c^{2} + 3v^{4}/8c^{4} + \\cdots$** via binomial series.",
        detail: "First correction is half a part per million at airline speed."
      },
      {
        term: "Recovered mechanics",
        kind: "theorem",
        statement: "$p \\to mv$, $K \\to mv^{2}/2$, Lorentz $\\to$ Galileo **term by term** as $v/c \\to 0$.",
        detail: "Time dilation and contraction become unmeasurable, not absent."
      },
      {
        term: "Everyday irrelevance",
        kind: "insight",
        statement: "At $300$ m/s, $\\gamma - 1 = 5 \\times 10^{-13}$: **Newton errs by nanoseconds per day**, GPS notwithstanding.",
        detail: "Only cumulative atomic clocks notice."
      },
      {
        term: "When relativity rules",
        kind: "method",
        statement: "Use full formulas when **$K$ rivals $mc^{2}$** (keV electrons, MeV nucleons) or timing needs $10^{-9}$.",
        detail: "Rule of thumb: $v > 0.1c$ or precision work."
      }
    ],
    examples: [
      {
        title: "Airliner correction",
        problem: "Find $\\gamma - 1$ at $250$ m/s and the daily clock error.",
        steps: [
          { label: "Step 1: Beta", text: "$\\beta = 8.34 \\times 10^{-7}$; $\\gamma - 1 \\approx \\beta^{2}/2 = 3.48 \\times 10^{-13}$." },
          { label: "Step 2: Daily", text: "$86400 \\times 3.48 \\times 10^{-13} = 3.0 \\times 10^{-8}$ s $= 30$ ns." },
          { label: "Step 3: Verdict", text: "Newton fine for trajectories; relativity needed for GPS clocks." }
        ],
        result: "$30$ ns per day special-relativistic lag."
      },
      {
        title: "Kinetic recovery",
        problem: "Show $K = 10$ keV electron is nearly Newtonian.",
        steps: [
          { label: "Step 1: Ratio", text: "$K/mc^{2} = 10/511 = 0.0196$; $\\gamma = 1.0196$." },
          { label: "Step 2: Speed", text: "$\\beta = \\sqrt{1-1/\\gamma^{2}} = 0.195$." },
          { label: "Step 3: Error", text: "Newtonian $mv^{2}/2$ under by $1.5$ percent: fine for tubes, not spectrometers." }
        ],
        result: "Newton within $2$ percent at $10$ keV."
      }
    ],
    keyTakeaways: [
      "Newton is the $v/c \\to 0$ limit of Einstein, verified expansion by expansion.",
      "Corrections scale as $v^{2}/c^{2}$; $0.1c$ is the practical boundary.",
      "Correspondence is a constraint every new theory must pass."
    ],
    quiz: [
      {
        q: "gamma expansion to second order is:",
        options: ["$1 + v/c$", "$1 + v^{2}/2c^{2}$", "$1 - v^{2}/2c^{2}$", "$v/c$"],
        answer: 1,
        explanation: "Binomial $(1-x)^{-1/2}$ with $x = v^{2}/c^{2}$."
      },
      {
        q: "Relativity is required when:",
        options: ["Speeds are everyday", "K approaches rest energy or precision is high", "Masses are large", "Temperatures are low"],
        answer: 1,
        explanation: "Gamma departs from 1 with energy ratio or cumulative timing."
      },
      {
        q: "Correspondence principle demands:",
        options: ["New theory contradicts old everywhere", "New theory reproduces old in its tested domain", "Old theory is discarded", "Constants change"],
        answer: 1,
        explanation: "Newton's success at low speed constrains Einstein."
      },
      // PYQ-pattern: JEE Mains 2021 — muon time dilation (rephrased, values changed)
      {
        q: "Muons with proper lifetime $2.2 \\text{ }\\mu\\text{s}$ stream down at $v = 0.99c$. The mean distance they cover before decay is closest to:",
        options: ["$0.66 \\text{ km}$", "$32 \\text{ km}$", "$4.6 \\text{ km}$", "$310 \\text{ km}$"],
        answer: 2,
        explanation: "Step 1: Given $\\tau_{0} = 2.2 \\text{ }\\mu\\text{s}$ and $\\beta = 0.99$. Step 2: Governing laws are $\\gamma = 1/\\sqrt{1-\\beta^{2}}$ and dilated life $\\tau = \\gamma\\tau_{0}$ with range $d = v\\tau$. Step 3: Key equation: $$\\gamma = \\frac{1}{\\sqrt{1-0.9801}} = 7.09, \\qquad d = (0.99c)(7.09)(2.2 \\times 10^{-6}).$$ Step 4: Numerics give $\\tau \\approx 15.6 \\text{ }\\mu\\text{s}$ and $d \\approx 4.6 \\times 10^{3} \\text{ m} = 4.6 \\text{ km}$; units of $c\\tau$ are meters. Step 5: Distractors fail because $0.66$ is the undilated $c\\tau_{0}$, $32$ squares $\\gamma$, and $310$ misplaces the micro prefix. Step 6: Conclude dilation stretches the reach to about **$4.6 \\text{ km}$**."
      },
      // PYQ-pattern: JEE Advanced 2018 — length contraction (rephrased, values changed)
      {
        q: "A rod of proper length $L_{0} = 100 \\text{ m}$ flies past at $v = 0.80c$. Its length measured in the lab frame is:",
        options: ["$60 \\text{ m}$", "$100 \\text{ m}$", "$167 \\text{ m}$", "$80 \\text{ m}$"],
        answer: 0,
        explanation: "Step 1: Given $L_{0} = 100 \\text{ m}$ and $\\beta = 0.80$. Step 2: Governing law is Lorentz contraction $L = L_{0}/\\gamma$ with $\\gamma = 1/\\sqrt{1-\\beta^{2}}$. Step 3: Key equation: $$\\gamma = \\frac{1}{\\sqrt{1-0.64}} = \\frac{1}{0.60} = 1.667, \\qquad L = \\frac{100}{1.667}.$$ Step 4: Numerics give $L = 60 \\text{ m}$; units stay meters and motion must shorten, never stretch. Step 5: Distractors fail because $100$ ignores relativity, $167$ multiplies by $\\gamma$, and $80$ copies $\\beta$ as a percent. Step 6: Conclude the lab measures **$60 \\text{ m}$**."
      },
      // PYQ-pattern: GATE PH 2019 — velocity addition (rephrased, values changed)
      {
        q: "A craft moves at $0.50c$ relative to the ground and launches a probe forward at $0.50c$ relative to the craft. The probe speed seen from the ground is:",
        options: ["$1.00c$", "$0.25c$", "$0.50c$", "$0.80c$"],
        answer: 3,
        explanation: "Step 1: Given $u = 0.50c$ and $v = 0.50c$ along the same line. Step 2: Governing law is the Lorentz sum $u_{obs} = (u+v)/(1+uv/c^{2})$. Step 3: Key equation: $$u_{obs} = \\frac{0.50c+0.50c}{1+0.25} = \\frac{1.00c}{1.25}.$$ Step 4: Numerics give $u_{obs} = 0.80c$; units are fractions of $c$ and the result stays below $c$ as required. Step 5: Distractors fail because $1.00c$ adds Galilean style, $0.25c$ multiplies the fractions, and $0.50c$ copies one frame. Step 6: Conclude the ground observer records **$0.80c$**."
      },
      // PYQ-pattern: JEE Mains 2022 — relativistic kinetic energy (rephrased, values changed)
      {
        q: "An electron ($mc^{2} = 511 \\text{ keV}$) moves at $v = 0.60c$. Its kinetic energy is closest to:",
        options: ["$640 \\text{ keV}$", "$128 \\text{ keV}$", "$511 \\text{ keV}$", "$320 \\text{ keV}$"],
        answer: 1,
        explanation: "Step 1: Given $\\beta = 0.60$ and rest energy $mc^{2} = 511 \\text{ keV}$. Step 2: Governing law is $K = (\\gamma-1)mc^{2}$ with $\\gamma = 1/\\sqrt{1-\\beta^{2}}$. Step 3: Key equation: $$\\gamma = \\frac{1}{\\sqrt{1-0.36}} = 1.25, \\qquad K = (0.25)(511).$$ Step 4: Numerics give $K \\approx 128 \\text{ keV}$; units are energy and $K$ must lie below the rest energy here. Step 5: Distractors fail because $640$ is the total energy $\\gamma mc^{2}$, $511$ is the rest energy, and $320$ mis-evaluates $\\gamma$. Step 6: Conclude the kinetic energy is about **$128 \\text{ keV}$**."
      },
      // PYQ-pattern: GATE PH 2021 — invariant mass (rephrased, values changed)
      {
        q: "A particle has total energy $E = 5.0 \\text{ MeV}$ and momentum $pc = 4.0 \\text{ MeV}$. Its rest energy is:",
        options: ["$3.0 \\text{ MeV}$", "$9.0 \\text{ MeV}$", "$1.0 \\text{ MeV}$", "$5.0 \\text{ MeV}$"],
        answer: 0,
        explanation: "Step 1: Given $E = 5.0 \\text{ MeV}$ and $pc = 4.0 \\text{ MeV}$. Step 2: Governing law is the invariant $E^{2}-(pc)^{2} = (mc^{2})^{2}$, the same in every frame. Step 3: Key equation: $$mc^{2} = \\sqrt{25-16} = \\sqrt{9}.$$ Step 4: Numerics give $mc^{2} = 3.0 \\text{ MeV}$; units are energy and the rest part must be smaller than the total. Step 5: Distractors fail because $9.0$ forgets the square root, $1.0$ subtracts linearly, and $5.0$ copies the total energy. Step 6: Conclude the rest energy is **$3.0 \\text{ MeV}$**."
      },
      // PYQ-pattern: JEE Advanced 2020 — moving clock (rephrased, values changed)
      {
        q: "A clock moving at $v = 0.60c$ ticks $100 \\text{ s}$ of its own proper time. The time read on lab clocks is:",
        options: ["$100 \\text{ s}$", "$80 \\text{ s}$", "$125 \\text{ s}$", "$160 \\text{ s}$"],
        answer: 2,
        explanation: "Step 1: Given proper interval $\\Delta\\tau = 100 \\text{ s}$ and $\\beta = 0.60$. Step 2: Governing law is time dilation $\\Delta t = \\gamma\\Delta\\tau$ with $\\gamma = 1/\\sqrt{1-\\beta^{2}}$. Step 3: Key equation: $$\\gamma = \\frac{1}{\\sqrt{1-0.36}} = 1.25, \\qquad \\Delta t = (1.25)(100).$$ Step 4: Numerics give $\\Delta t = 125 \\text{ s}$; units are seconds and the lab interval must exceed the proper one. Step 5: Distractors fail because $100$ ignores dilation, $80$ divides by $\\gamma$, and $160$ uses $\\gamma = 1.60$. Step 6: Conclude lab clocks record **$125 \\text{ s}$**."
      }
    ]
  }
];
