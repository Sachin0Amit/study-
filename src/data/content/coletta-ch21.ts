import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 21: Magnetism (Sections 21.1 – 21.6)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh21Content: SectionContent[] = [
  {
    sectionId: "coletta-ch21-s1",
    readingTime: 6,
    intro: "Magnetism pushes sideways on moving charge, never along its motion. Coletta defines the field by $\\vec{F} = q\\vec{v} \\times \\vec{B}$, sets the tesla unit, and maps the right-hand rules that fix every direction. No motion means no magnetic force.",
    objectives: [
      "Compute magnetic force with $F = qvB\\sin\\theta$ including direction",
      "State the tesla unit and compare field strengths from Earth to MRI",
      "Explain why magnetic forces do no work"
    ],
    concepts: [
      {
        term: "Magnetic field",
        kind: "definition",
        statement: "The **magnetic field** $\\vec{B}$ is defined by $\\vec{F} = q\\vec{v} \\times \\vec{B}$ with magnitude $F = qvB\\sin\\theta$, perpendicular to both $\\vec{v}$ and $\\vec{B}$.",
        detail: "A $1$ nC charge at $10^{5}$ m/s across $0.50$ T feels $5.0 \\times 10^{-5}$ N sideways when perpendicular."
      },
      {
        term: "Tesla unit",
        kind: "notation",
        statement: "One **tesla** (T) is $1$ N·s/C·m: Earth supplies $\\sim5 \\times 10^{-5}$ T, fridge magnets $\\sim10^{-2}$ T, and MRI scanners $1$–$3$ T.",
        detail: "The older gauss is $10^{-4}$ T, so Earth is about half a gauss."
      },
      {
        term: "Right-hand rule",
        kind: "method",
        statement: "Point fingers along $\\vec{v}$, curl toward $\\vec{B}$, and the thumb gives $\\vec{F}$ for positive $q$ (reverse for electrons).",
        detail: "Up-velocity crossed into-page-field pushes positive charge to the left, the orientation behind every motor and meter."
      },
      {
        term: "Angle dependence",
        kind: "theorem",
        statement: "Force is maximum at $\\theta = 90^{\\circ}$ and zero for motion parallel to $\\vec{B}$, since only the perpendicular component $v_{\\perp} = v\\sin\\theta$ counts.",
        detail: "Charges spiraling along field lines feel force only on their circling part, leaving the parallel drift untouched."
      },
      {
        term: "No magnetic work",
        kind: "insight",
        statement: "Because $\\vec{F} \\perp \\vec{v}$, magnetic forces **never change speed**, only direction: $W = \\vec{F} \\cdot \\vec{v} = 0$ at every instant.",
        detail: "Cyclotrons need electric gaps for acceleration; magnets only steer the beam into those gaps." }
    ],
    figures: [
      {
        caption: "Right-hand rule: $\\vec{F} = q\\vec{v} \\times \\vec{B}$ points sideways for $\\vec{v} \\perp \\vec{B}$",
        svg: '<svg role="img" aria-label="Right-hand rule: vecF = qvecv times vecB points sideways for vecv perp vecB" viewBox="0 0 400 150" width="100%" height="150"><line x1="80" y1="75" x2="220" y2="75" stroke="currentColor" stroke-width="2"/><polygon points="220,75 210,70 210,80" fill="currentColor"/><text x="150" y="62" font-size="12" fill="currentColor">v</text><circle cx="300" cy="75" r="22" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="300" cy="75" r="3" fill="currentColor"/><text x="300" y="115" text-anchor="middle" font-size="12" fill="currentColor">B out of page</text><line x1="150" y1="75" x2="150" y2="20" stroke="currentColor" stroke-width="2"/><polygon points="150,14 145,24 155,24" fill="currentColor"/><text x="162" y="30" font-size="12" fill="currentColor">F (for +q)</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Proton across a field",
        problem: "A proton moves at $2.0 \\times 10^{5}$ m/s perpendicular to $B = 0.30$ T. Find the force.",
        steps: [
          { label: "Magnitude", text: "$F = qvB = 1.60 \\times 10^{-19} \\times 2.0 \\times 10^{5} \\times 0.30 = 9.6 \\times 10^{-15}$ N." },
          { label: "Direction", text: "Perpendicular to both $\\vec{v}$ and $\\vec{B}$ by the right-hand rule." },
          { label: "Acceleration", text: "$a = F/m_{p} = 9.6 \\times 10^{-15}/1.67 \\times 10^{-27} \\approx 5.7 \\times 10^{12}$ m/s$^{2}$." }
        ],
        result: "$9.6 \\times 10^{-15}$ N sideways."
      },
      {
        title: "Zero-force alignment",
        problem: "An electron moves parallel to a $0.80$ T field at $5.0 \\times 10^{6}$ m/s. What force acts?",
        steps: [
          { label: "Angle", text: "$\\theta = 0$, so $\\sin\\theta = 0$." },
          { label: "Force", text: "$F = evB\\sin 0 = 0$ exactly." },
          { label: "Motion", text: "The electron cruises straight along the field line undeflected." }
        ],
        result: "Zero force."
      }
    ],
    keyTakeaways: [
      "Magnetic force $F = qvB\\sin\\theta$ acts perpendicular to motion.",
      "Tesla scale runs from $10^{-5}$ T (Earth) to teslas (MRI).",
      "Magnetism steers but never does work on charges."
    ],
    quiz: [
      {
        q: "A charge moves parallel to $\\vec{B}$. The magnetic force is:",
        options: ["Along $\\vec{v}$", "Maximum", "Zero", "Along $\\vec{B}$"],
        answer: 2,
        explanation: "With $\\sin 0 = 0$ there is no perpendicular component to deflect."
      },
      {
        q: "Magnetic forces do no work because force is always:",
        options: ["Zero", "Perpendicular to velocity", "Parallel to velocity", "Conservative"],
        answer: 1,
        explanation: "$W = \\vec{F} \\cdot \\vec{v} = 0$ when the angle is $90^{\\circ}$ at every instant."
      },
      {
        q: "An electron and proton share $v$ perpendicular to $B$. The electron's force magnitude is:",
        options: ["Equal", "Smaller", "Zero", "Larger"],
        answer: 0,
        explanation: "Both carry $|q| = e$, so $qvB$ magnitudes match; only directions and accelerations differ."
      }
    ]
  },
  {
    sectionId: "coletta-ch21-s2",
    readingTime: 6,
    intro: "Currents are moving charges in bulk, so wires feel $\\vec{F} = I\\vec{L} \\times \\vec{B}$ and loops feel torque. Coletta turns this into galvanometers, motors, and loudspeakers. The same sideways push that bends beams spins machinery.",
    objectives: [
      "Compute wire force $F = ILB\\sin\\theta$ with direction",
      "Find loop torque $\\tau = NIAB\\sin\\phi$ and explain the commutator",
      "Describe galvanometer, motor, and speaker applications"
    ],
    concepts: [
      {
        term: "Force on a current",
        kind: "theorem",
        statement: "A straight wire carries $\\vec{F} = I\\vec{L} \\times \\vec{B}$ with $F = ILB\\sin\\theta$, each electron's $q\\vec{v} \\times \\vec{B}$ summing to the bulk push.",
        detail: "A $2.0$ A, $10$ cm wire across $0.50$ T feels $0.10$ N perpendicular to the wire-field plane."
      },
      {
        term: "Torque on a loop",
        kind: "theorem",
        statement: "A coil of $N$ turns and area $A$ feels $\\tau = NIAB\\sin\\phi$, where $\\phi$ is the angle between the normal and $\\vec{B}$.",
        detail: "Torque peaks when the coil plane parallels the field and vanishes when the normal aligns with it."
      },
      {
        term: "DC motor and commutator",
        kind: "method",
        statement: "A **commutator** flips coil current every half turn so torque keeps the same sense, converting battery energy into rotation.",
        detail: "Without the flip the coil would oscillate about alignment instead of spinning continuously."
      },
      {
        term: "Galvanometer",
        kind: "definition",
        statement: "A **galvanometer** balances magnetic torque against a hairspring: deflection $\\propto I$ measures small currents as Chapter 20's meter heart.",
        detail: "Full-scale microamps need only micronewton-meters of torque on a jeweled pivot."
      },
      {
        term: "Loudspeaker",
        kind: "insight",
        statement: "Audio current in a voice coil inside a magnet feels $F = ILB$ tracking the waveform, driving the cone that launches sound.",
        detail: "The speaker is a motor run backward in geometry: linear instead of rotary, but the same cross product." }
    ],
    examples: [
      {
        title: "Wire in a field",
        problem: "A $15$ cm wire carries $3.0$ A perpendicular to $B = 0.40$ T. Find the force.",
        steps: [
          { label: "Magnitude", text: "$F = ILB = 3.0 \\times 0.15 \\times 0.40 = 0.18$ N." },
          { label: "Direction", text: "Perpendicular to the wire and field by the right-hand rule." },
          { label: "Scale", text: "Nearly the weight of $18$ g, easily felt on a lab balance." }
        ],
        result: "$0.18$ N sideways."
      },
      {
        title: "Motor coil torque",
        problem: "A $50$-turn coil of area $8.0 \\times 10^{-4}$ m$^{2}$ carries $0.60$ A in $0.25$ T at $\\phi = 90^{\\circ}$. Find peak torque.",
        steps: [
          { label: "Formula", text: "$\\tau = NIAB\\sin\\phi$ with $\\sin 90 = 1$." },
          { label: "Compute", text: "$\\tau = 50 \\times 0.60 \\times 8.0 \\times 10^{-4} \\times 0.25 = 6.0 \\times 10^{-3}$ N·m." },
          { label: "Note", text: "Millinewton-meters per coil add across rotor windings to useful shaft torque." }
        ],
        result: "$6.0 \\times 10^{-3}$ N·m."
      }
    ],
    keyTakeaways: [
      "Wires obey $\\vec{F} = I\\vec{L} \\times \\vec{B}$; loops obey $\\tau = NIAB\\sin\\phi$.",
      "Commutators rectify torque into continuous rotation.",
      "Meters, motors, and speakers share one force law."
    ],
    quiz: [
      {
        q: "Wire current reverses in a fixed field. Force direction:",
        options: ["Doubles", "Vanishes", "Unchanged", "Reverses"],
        answer: 3,
        explanation: "$\\vec{L}$ flips sign in $I\\vec{L} \\times \\vec{B}$, reversing $\\vec{F}$."
      },
      {
        q: "Loop torque is zero when the coil normal is:",
        options: ["Always nonzero", "Perpendicular to B", "Parallel to B", "At $45^{\\circ}$"],
        answer: 2,
        explanation: "$\\tau = NIAB\\sin\\phi$ vanishes at $\\phi = 0$ when the normal aligns with the field."
      },
      {
        q: "A commutator's job is to:",
        options: ["Raise voltage", "Flip current each half turn", "Lower resistance", "Store charge"],
        answer: 1,
        explanation: "Flipping keeps the torque sense constant so the rotor spins rather than rocks."
      }
    ]
  },
  {
    sectionId: "coletta-ch21-s3",
    readingTime: 6,
    intro: "A charge crossing a uniform field circles at exactly the cyclotron frequency, independent of its speed. Coletta derives $r = mv/qB$ and $f = qB/2\\pi m$, then aims the result at mass spectrometers, velocity selectors, and the aurora. Spirals sort matter.",
    objectives: [
      "Derive cyclotron radius $r = mv/qB$ and frequency $f = qB/2\\pi m$",
      "Explain velocity selectors with $v = E/B$",
      "Describe helical motion and applications from mass spec to aurora"
    ],
    concepts: [
      {
        term: "Cyclotron motion",
        kind: "theorem",
        statement: "Perpendicular motion in uniform $B$ is circular with $qvB = mv^{2}/r$, giving $r = mv/qB$ and period $T = 2\\pi m/qB$.",
        detail: "Faster particles draw bigger circles but take the same lap time, the isochrony cyclotrons exploit."
      },
      {
        term: "Cyclotron frequency",
        kind: "notation",
        statement: "The lap frequency $f = qB/2\\pi m$ depends only on charge-to-mass ratio and $B$, never on $v$ or $r$.",
        detail: "Protons in $1.0$ T circle at about $15$ MHz, the RF a cyclotron must match."
      },
      {
        term: "Velocity selector",
        kind: "method",
        statement: "Crossed $\\vec{E} \\perp \\vec{B}$ passes only $v = E/B$ undeflected, where $qE = qvB$ cancels for one speed.",
        detail: "A $500$ V/m field with $0.010$ T selects $5.0 \\times 10^{4}$ m/s regardless of charge or mass."
      },
      {
        term: "Mass spectrometer",
        kind: "method",
        statement: "Selecting $v$ then bending in $B$ spreads ions by $m/q$: $r = mv/qB^{\\prime}$ reads mass from position on the detector.",
        detail: "Carbon-12 versus carbon-14 separate by radius ratio $14/12$ at the same $v$ and $B$."
      },
      {
        term: "Helical motion",
        kind: "insight",
        statement: "With parallel velocity added, the circle extrudes into a **helix** of pitch $v_{\\parallel}T$ around the field line.",
        detail: "Trapped solar particles spiral along Earth's lines and strike near the poles, lighting the aurora." }
    ],
    figures: [
      {
        caption: "Cyclotron circle $r = mv/qB$ with $\\vec{F}$ always toward the center",
        svg: '<svg role="img" aria-label="Cyclotron circle r = mv/qB with vecF always toward the center" viewBox="0 0 400 150" width="100%" height="150"><circle cx="200" cy="75" r="50" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="250" cy="75" r="5" fill="currentColor"/><line x1="250" y1="75" x2="250" y2="105" stroke="currentColor" stroke-width="1.8"/><polygon points="250,111 245,101 255,101" fill="currentColor"/><text x="256" y="125" font-size="12" fill="currentColor">v</text><line x1="250" y1="75" x2="200" y2="75" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/><text x="215" y="65" font-size="12" fill="currentColor">F to center</text><text x="200" y="20" font-size="12" fill="currentColor">B into page: circular path</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Proton cyclotron radius",
        problem: "A $1.0 \\times 10^{6}$ m/s proton enters $B = 0.50$ T perpendicularly. Find $r$ and $f$.",
        steps: [
          { label: "Radius", text: "$r = mv/qB = 1.67 \\times 10^{-27} \\times 10^{6}/(1.60 \\times 10^{-19} \\times 0.50) = 1.67 \\times 10^{-21}/8.0 \\times 10^{-20} \\approx 0.0209$ m." },
          { label: "Frequency", text: "$f = qB/2\\pi m = 1.60 \\times 10^{-19} \\times 0.50/(2\\pi \\times 1.67 \\times 10^{-27}) \\approx 7.63 \\times 10^{6}$ Hz." },
          { label: "Check", text: "$v = 2\\pi r f$ gives $2\\pi \\times 0.0209 \\times 7.63 \\times 10^{6} \\approx 1.0 \\times 10^{6}$ m/s consistently." }
        ],
        result: "$r \\approx 2.1$ cm at $7.6$ MHz."
      },
      {
        title: "Velocity selector setting",
        problem: "Select $v = 3.0 \\times 10^{5}$ m/s with $B = 0.20$ T. What $E$ is needed?",
        steps: [
          { label: "Balance", text: "$E = vB$." },
          { label: "Compute", text: "$E = 3.0 \\times 10^{5} \\times 0.20 = 6.0 \\times 10^{4}$ V/m." },
          { label: "Note", text: "Slower ions bend toward $E$, faster toward $B$, only $3.0 \\times 10^{5}$ m/s passes straight." }
        ],
        result: "$6.0 \\times 10^{4}$ V/m."
      }
    ],
    keyTakeaways: [
      "Uniform $B$ circles charges with $r = mv/qB$ and speed-free $f = qB/2\\pi m$.",
      "Crossed $E$ and $B$ select $v = E/B$ for spectrometers.",
      "Parallel velocity stretches circles into helices."
    ],
    quiz: [
      {
        q: "Two protons enter $B$ perpendicularly, one twice as fast. Its radius is:",
        options: ["Equal", "Double", "Quadruple", "Half"],
        answer: 1,
        explanation: "$r = mv/qB$ is linear in $v$."
      },
      {
        q: "Cyclotron frequency depends on:",
        options: ["$q/m$ and $B$", "Electric field", "Speed", "Radius"],
        answer: 0,
        explanation: "$f = qB/2\\pi m$ contains only charge-to-mass ratio and field."
      },
      {
        q: "In a velocity selector, an ion slower than $E/B$ bends toward:",
        options: ["Backward", "The $B$ force side", "The $E$ force side", "Neither; passes straight"],
        answer: 2,
        explanation: "For low $v$, $qE$ beats $qvB$, so the electric deflection wins."
      }
    ]
  },
  {
    sectionId: "coletta-ch21-s4",
    readingTime: 7,
    intro: "Currents make the fields that push currents: straight wires, loops, and solenoids each get a formula. Coletta presents Biot-Savart qualitatively, applies Ampere's law quantitatively, and lands the workhorses $B = \\mu_{0}I/2\\pi r$ and $B = \\mu_{0}nI$. Electromagnets follow.",
    objectives: [
      "State the wire, loop-center, and solenoid field formulas with $\\mu_{0}$",
      "Apply Ampere's law $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_{0}I_{enc}$ to symmetric currents",
      "Find directions with the wire and solenoid right-hand rules"
    ],
    concepts: [
      {
        term: "Permeability constant",
        kind: "notation",
        statement: "Magnetic fields scale with $\\mu_{0} = 4\\pi \\times 10^{-7}$ T·m/A, the magnetic cousin of $k$ in electrostatics.",
        detail: "Every current-field formula carries $\\mu_{0}$ times amps divided by a length."
      },
      {
        term: "Straight-wire field",
        kind: "theorem",
        statement: "A long straight wire gives $B = \\mu_{0}I/2\\pi r$ in circles around the wire, right thumb along $I$ with fingers curling along $\\vec{B}$.",
        detail: "A $10$ A wire makes $2.0 \\times 10^{-4}$ T at $1.0$ cm, four times Earth's field."
      },
      {
        term: "Loop and solenoid fields",
        kind: "theorem",
        statement: "A loop center has $B = \\mu_{0}I/2R$ ($N$ turns multiply by $N$), and a long solenoid has uniform $B = \\mu_{0}nI$ inside with near zero outside.",
        detail: "A $1000$-turn/m solenoid at $2.0$ A holds $2.5$ mT inside, the electromagnet formula."
      },
      {
        term: "Ampere's law",
        kind: "law",
        statement: "Around any closed path $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_{0}I_{enc}$: circulation of $\\vec{B}$ counts enclosed current.",
        detail: "Choosing a circle around a wire or a rectangle straddling a solenoid makes $B$ factor out and the formula drop out in lines."
      },
      {
        term: "Force between wires",
        kind: "insight",
        statement: "Parallel currents attract and antiparallel repel with $F/L = \\mu_{0}I_{1}I_{2}/2\\pi d$, each wire sitting in the other's circular field.",
        detail: "This force once defined the ampere: $2 \\times 10^{-7}$ N/m between $1$ A wires $1$ m apart." }
    ],
    figures: [
      {
        caption: "Circular $\\vec{B}$ around $I$ falls as $B = \\mu_{0}I/2\\pi r$",
        svg: '<svg role="img" aria-label="Circular vecB around I falls as B = mu_0I/2pi r" viewBox="0 0 400 150" width="100%" height="150"><line x1="200" y1="20" x2="200" y2="130" stroke="currentColor" stroke-width="3"/><polygon points="200,14 195,24 205,24" fill="currentColor"/><text x="212" y="40" font-size="12" fill="currentColor">I up</text><ellipse cx="200" cy="75" rx="40" ry="18" fill="none" stroke="currentColor" stroke-width="1.6"/><ellipse cx="200" cy="75" rx="70" ry="30" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><polygon points="240,75 232,71 233,80" fill="currentColor"/><polygon points="270,75 262,71 263,80" fill="currentColor" opacity="0.7"/></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Field beside a wire",
        problem: "Find $B$ at $2.0$ cm from a long wire carrying $8.0$ A.",
        steps: [
          { label: "Formula", text: "$B = \\mu_{0}I/2\\pi r$." },
          { label: "Insert", text: "$B = 4\\pi \\times 10^{-7} \\times 8.0/(2\\pi \\times 0.020) = 1.6 \\times 10^{-5}/0.020 \\times 10^{-1}$." },
          { label: "Evaluate", text: "$B = 8.0 \\times 10^{-5}$ T, circling the wire." }
        ],
        result: "$8.0 \\times 10^{-5}$ T."
      },
      {
        title: "Solenoid design",
        problem: "A solenoid with $800$ turns/m carries $1.5$ A. Find interior $B$.",
        steps: [
          { label: "Formula", text: "$B = \\mu_{0}nI$." },
          { label: "Compute", text: "$B = 4\\pi \\times 10^{-7} \\times 800 \\times 1.5 = 1.508 \\times 10^{-3}$ T." },
          { label: "Note", text: "Uniform inside and nearly zero outside for a long coil." }
        ],
        result: "About $1.5$ mT."
      }
    ],
    keyTakeaways: [
      "Wires circle field as $\\mu_{0}I/2\\pi r$; solenoids uniformize it to $\\mu_{0}nI$.",
      "Ampere's law converts symmetry into field formulas.",
      "Parallel currents attract with $F/L = \\mu_{0}I_{1}I_{2}/2\\pi d$."
    ],
    quiz: [
      {
        q: "Distance from a straight wire doubles at fixed $I$. $B$ becomes:",
        options: ["Double", "Half", "One quarter", "Unchanged"],
        answer: 1,
        explanation: "$B \\propto 1/r$, so doubling $r$ halves the field."
      },
      {
        q: "Solenoid turns per meter double at fixed current. Interior $B$:",
        options: ["Doubles", "Quadruples", "Vanishes", "Halves"],
        answer: 0,
        explanation: "$B = \\mu_{0}nI$ is linear in $n$."
      },
      {
        q: "Two parallel wires with currents in the same direction:",
        options: ["Exert no force", "Twist", "Attract", "Repel"],
        answer: 2,
        explanation: "Each sits in the other's field with $I\\vec{L} \\times \\vec{B}$ pointing inward."
      }
    ]
  },
  {
    sectionId: "coletta-ch21-s5",
    readingTime: 5,
    intro: "Permanent magnets need no batteries: aligned atomic currents supply the field. Coletta explains domains, how stroking magnetizes steel, and why heat or hammering destroys magnetism. Earth's field is a giant imperfect bar magnet.",
    objectives: [
      "Explain permanent magnetism with atomic currents and domains",
      "Describe magnetizing, demagnetizing, and cutting-magnet behavior",
      "State Earth's field strength and origin in the outer core"
    ],
    concepts: [
      {
        term: "Atomic current model",
        kind: "insight",
        statement: " orbiting and spinning electrons are microscopic current loops, each a tiny magnet whose fields normally cancel.",
        detail: "In iron a fraction of spins align spontaneously, leaving a net moment per atom where copper leaves none."
      },
      {
        term: "Magnetic domains",
        kind: "definition",
        statement: "**Domains** are micron-scale regions of aligned spins; magnetization grows them at the expense of misaligned neighbors.",
        detail: "Stroking with a magnet walks domain walls outward until the whole nail points one way."
      },
      {
        term: "Poles always pair",
        kind: "law",
        statement: "Every magnet has inseparable **north and south** poles: cutting one yields two smaller dipoles, never a monopole.",
        detail: "Field lines exit north, enter south, and continue through the body, always closing on themselves."
      },
      {
        term: "Curie temperature",
        kind: "definition",
        statement: "Above the **Curie temperature** ($770^{\\circ}$C for iron) thermal agitation defeats alignment and ferromagnetism vanishes.",
        detail: "Hammering and AC demagnetizers similarly scramble domains back to randomness."
      },
      {
        term: "Earth's field",
        kind: "definition",
        statement: "Earth's $\\sim5 \\times 10^{-5}$ T field tilts from the spin axis and is generated by convecting conducting iron in the outer core (the geodynamo).",
        detail: "Compasses follow its horizontal component while auroras trace its lines into the polar atmosphere." }
    ],
    examples: [
      {
        title: "Cutting a magnet",
        problem: "A bar magnet is cut in half across its middle. What results?",
        steps: [
          { label: "Poles", text: "Each half develops its own north-south pair at the cut faces." },
          { label: "Count", text: "Two smaller dipole magnets, each with both poles." },
          { label: "Repeat", text: "No subdivision isolates a monopole; domains always pair up." }
        ],
        result: "Two complete smaller magnets."
      },
      {
        title: "Compass torque",
        problem: "A needle of moment $0.010$ A·m$^{2}$ sits $60^{\\circ}$ from Earth's $5.0 \\times 10^{-5}$ T field. Find the aligning torque.",
        steps: [
          { label: "Formula", text: "$\\tau = \\mu B\\sin\\theta$." },
          { label: "Compute", text: "$\\tau = 0.010 \\times 5.0 \\times 10^{-5} \\times \\sin 60 = 5.0 \\times 10^{-7} \\times 0.866 \\approx 4.33 \\times 10^{-7}$ N·m." },
          { label: "Note", text: "Tiny but enough on a low-friction pivot." }
        ],
        result: "About $4.3 \\times 10^{-7}$ N·m."
      }
    ],
    keyTakeaways: [
      "Permanent magnets are aligned atomic loops grouped in domains.",
      "Poles always come in north-south pairs.",
      "Heat, shock, and AC fields demagnetize by scrambling domains."
    ],
    quiz: [
      {
        q: "Cutting a bar magnet in half produces:",
        options: ["An electric charge", "An isolated north pole", "Two smaller dipole magnets", "An unmagnetized pair"],
        answer: 2,
        explanation: "Domain alignment persists in each piece, so each cut face becomes a fresh opposite pole."
      },
      {
        q: "Heating iron above $770^{\\circ}$C:",
        options: ["Strengthens magnetism", "Destroys ferromagnetism", "Creates monopoles", "Changes charge"],
        answer: 1,
        explanation: "Thermal energy overcomes exchange alignment at the Curie point."
      },
      {
        q: "Earth's magnetic field is generated by:",
        options: ["Outer-core conducting flow", "Solar wind alone", "Moon tides", "Permanent crust magnets"],
        answer: 0,
        explanation: "Convecting liquid iron sustains the geodynamo; crustal fields are only local ripples."
      }
    ]
  },
  {
    sectionId: "coletta-ch21-s6",
    readingTime: 5,
    intro: "Matter answers magnetic fields in three ways: diamagnets weakly repel, paramagnets weakly attract, and ferromagnets strongly lock on. Coletta surveys the three classes with hysteresis as the ferromagnet's memory. Transformers and tapes depend on it.",
    objectives: [
      "Distinguish diamagnetic, paramagnetic, and ferromagnetic response",
      "Explain hysteresis loops with saturation, remanence, and coercivity",
      "Choose soft versus hard magnets for cores versus permanent use"
    ],
    concepts: [
      {
        term: "Diamagnetism",
        kind: "definition",
        statement: "**Diamagnets** ($\\mu$ slightly below $\\mu_{0}$) are weakly repelled as induced orbital changes oppose the applied field.",
        detail: "Water, copper, and superconductors (perfectly, by expulsion) are diamagnetic."
      },
      {
        term: "Paramagnetism",
        kind: "definition",
        statement: "**Paramagnets** ($\\mu$ slightly above $\\mu_{0}$) are weakly attracted as thermal-jostled moments partly align with $\\vec{B}$.",
        detail: "Aluminum and oxygen drift toward strong-field regions, losing the effect as $1/T$ (Curie's law)."
      },
      {
        term: "Ferromagnetism",
        kind: "definition",
        statement: "**Ferromagnets** (iron, nickel, cobalt) amplify fields thousands-fold through domain alignment below the Curie point.",
        detail: "A nail near a magnet becomes a magnet itself by induction, then attracts further."
      },
      {
        term: "Hysteresis loop",
        kind: "theorem",
        statement: "Cycling $B$ versus $H$ traces a **hysteresis** loop: **saturation** at full alignment, **remanence** kept at zero drive, and **coercivity** needed to erase it.",
        detail: "Loop area is energy lost per cycle as heat, narrow for transformer cores and wide for memory media."
      },
      {
        term: "Soft versus hard magnets",
        kind: "method",
        statement: "**Soft** materials (narrow loops) switch cheaply for cores and heads; **hard** materials (wide loops) keep remanence for permanent magnets.",
        detail: "Silicon steel cores minimize hum loss while alnico and neodymium maximize stored bite." }
    ],
    figures: [
      {
        caption: "Hysteresis loop with saturation, remanence $B_{r}$, and coercivity $H_{c}$",
        svg: '<svg viewBox="0 0 400 150" width="100%" height="150" role="img" aria-label="Magnetic hysteresis loop: saturation flats, remanence dot on the B axis, coercivity crossings on the H axis"><line x1="30" y1="75" x2="370" y2="75" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="200" y1="10" x2="200" y2="140" stroke="currentColor" stroke-width="1" opacity="0.5"/><path d="M90,110 C140,108 150,40 230,38 C300,36 310,108 250,112 C190,116 120,112 90,110" fill="none" stroke="currentColor" stroke-width="2"/><text x="320" y="70" font-size="12" fill="currentColor">H</text><text x="208" y="25" font-size="12" fill="currentColor">B</text><circle cx="200" cy="52" r="3" fill="currentColor"/><text x="150" y="45" font-size="11" fill="currentColor">remanence</text><text x="128" y="68" font-size="11" fill="currentColor">−Hc</text><text x="282" y="68" font-size="11" fill="currentColor">Hc</text><text x="252" y="30" font-size="11" fill="currentColor">saturation</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Sorting responses",
        problem: "Samples of copper, aluminum, and iron enter a strong gradient magnet. Predict each motion.",
        steps: [
          { label: "Copper", text: "Diamagnetic: weakly pushed to weaker field." },
          { label: "Aluminum", text: "Paramagnetic: weakly pulled to stronger field." },
          { label: "Iron", text: "Ferromagnetic: strongly yanked in and kept magnetized after." }
        ],
        result: "Repel, attract weakly, attract strongly."
      },
      {
        title: "Core loss reading",
        problem: "A core hysteresis loop encloses $400$ J/m$^{3}$ per cycle at $60$ Hz. Find power density wasted.",
        steps: [
          { label: "Per-cycle loss", text: "$400$ J/m$^{3}$ becomes heat each loop." },
          { label: "Rate", text: "$P/V = 400 \\times 60 = 24{,}000$ W/m$^{3}$." },
          { label: "Design moral", text: "Narrow-loop silicon steel cuts this loss drastically." }
        ],
        result: "$2.4 \\times 10^{4}$ W/m$^{3}$."
      }
    ],
    keyTakeaways: [
      "Dia repels weakly, para attracts weakly, ferro locks strongly.",
      "Hysteresis records saturation, remanence, and coercivity.",
      "Narrow loops serve cores; wide loops serve memory and magnets."
    ],
    quiz: [
      {
        q: "Which material is ferromagnetic?",
        options: ["Iron", "Aluminum", "Copper", "Water"],
        answer: 0,
        explanation: "Iron's exchange coupling aligns spins into domains; the others are dia- or paramagnetic."
      },
      {
        q: "Remanence is the field remaining when:",
        options: ["Frequency is $60$ Hz", "Drive is maximum", "Drive returns to zero", "Temperature peaks"],
        answer: 2,
        explanation: "It is the $B$ kept at $H = 0$ on the way down, the memory of the loop."
      },
      {
        q: "Transformer cores want hysteresis loops that are:",
        options: ["Wide for memory", "Narrow for low loss", "Open-ended", "Vertical only"],
        answer: 1,
        explanation: "Loop area is energy burned per cycle, so narrow soft loops waste least."
      }
    ]
  }
]
