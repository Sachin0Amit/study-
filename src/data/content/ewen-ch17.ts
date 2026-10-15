import type { SectionContent } from "../library"

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition, Chapter 17
// Basic Electricity (Sections 17.1 – 17.13)
// ============================================================================

export const ewenCh17Content: SectionContent[] = [
  {
    sectionId: "ewen-ch17-s1",
    readingTime: 5,
    intro: "All electricity starts with charge: two kinds, conserved, and quantized in units of the electron. This section defines conductors, insulators, and semiconductors, states charge conservation, and quantifies static charging with $Q = ne$.",
    objectives: [
      "State the two charge types, like/unlike force rules, and charge conservation",
      "Classify conductors, insulators, semiconductors, and superconductors",
      "Compute static charge from $Q = ne$ with $e = 1.60 \\times 10^{-19} \\text{ C}$",
    ],
    concepts: [
      {
        term: "Electric charge",
        kind: "definition",
        statement: "Charge comes in positive and negative kinds: like charges repel, unlike charges attract, and net charge is conserved.",
        detail: "Electrons carry $-e$, protons $+e$; atoms are neutral when the counts match.",
      },
      {
        term: "Quantization of charge",
        kind: "law",
        statement: "Every observed free charge is an integer multiple $Q = ne$ of the elementary charge $e = 1.60 \\times 10^{-19} \\text{ C}$.",
        detail: "One coulomb needs $6.25 \\times 10^{18}$ electrons — static sparks move billionths of a coulomb.",
      },
      {
        term: "Conductors and insulators",
        kind: "definition",
        statement: "Conductors (copper, aluminum) offer mobile charges; insulators (rubber, glass, dry air) pin charges in place.",
        detail: "Power wiring is a conductor–insulator sandwich: copper carries, plastic contains.",
      },
      {
        term: "Semiconductors",
        kind: "definition",
        statement: "Semiconductors (silicon, germanium) conduct weakly when pure and controllably when doped — the basis of diodes and transistors.",
        detail: "Chapter 19's rectifiers and amplifiers are doped-silicon applications.",
      },
      {
        term: "Conservation of charge",
        kind: "law",
        statement: "Charge is never created or destroyed, only separated: every $+Q$ gained somewhere leaves $-Q$ behind.",
        detail: "Rubbing glass transfers electrons to the cloth; the two charges always sum to zero net change.",
      },
    ],
    examples: [
      {
        title: "Electrons in a static spark",
        problem: "A comb picks up $Q = -3.20 \\times 10^{-9} \\text{ C}$ from hair. How many excess electrons is that?",
        steps: [
          { label: "Step 1: Divide by $e$", text: "$n = Q/e = 3.20 \\times 10^{-9}/1.60 \\times 10^{-19} = 2.00 \\times 10^{10}$." },
        ],
        result: "$2.00 \\times 10^{10}$ excess electrons.",
      },
      {
        title: "Charge separation check",
        problem: "A glass rod ends with $+0.800 \\text{ nC}$ after rubbing. What charge sits on the cloth?",
        steps: [
          { label: "Step 1: Conserve", text: "Net change is zero, so the cloth holds $-0.800 \\text{ nC}$." },
        ],
        result: "$-0.800 \\text{ nC}$ ($5.00 \\times 10^{9}$ electrons gained).",
      },
    ],
    keyTakeaways: [
      "Like repels, unlike attracts; net charge is always conserved.",
      "Charge is quantized: $Q = ne$ with $e = 1.60 \\times 10^{-19} \\text{ C}$.",
      "Conductor–insulator–semiconductor behavior depends on charge mobility.",
    ],
    quiz: [
      {
        q: "A neutral atom loses two electrons. It becomes:",
        options: ["Negatively charged with $-2e$", "Positively charged with $+2e$", "Neutral with extra mass", "A different element"],
        answer: 1,
        explanation: "Removing negative charge leaves net $+2e$; the proton count (element) is unchanged.",
      },
      {
        q: "Which material is a semiconductor?",
        options: ["Copper", "Rubber", "Silicon", "Glass"],
        answer: 2,
        explanation: "Doped silicon conducts controllably — the foundation of electronics.",
      },
      {
        q: "$1.00 \\text{ C}$ of charge contains about:",
        options: ["$1.60 \\times 10^{-19}$ electrons", "$6.25 \\times 10^{18}$ electrons", "$1000$ electrons", "$3.00 \\times 10^{8}$ electrons"],
        answer: 1,
        explanation: "$1/e = 1/(1.60 \\times 10^{-19}) = 6.25 \\times 10^{18}$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch17-s2",
    readingTime: 5,
    intro: "A charged rod can attract neutral paper and charge an electroscope without ever touching it. This section explains conduction versus induction charging, grounding, and the polarization of insulators.",
    objectives: [
      "Contrast charging by conduction with charging by induction",
      "Use grounding to control the sign left by induction",
      "Explain insulator polarization and electroscope action",
    ],
    concepts: [
      {
        term: "Charging by conduction",
        kind: "definition",
        statement: "Touching a charged object to a neutral one shares charge; both end with the same sign.",
        detail: "Contact equalizes potential, splitting the net charge by capacitance.",
      },
      {
        term: "Charging by induction",
        kind: "method",
        statement: "Bring a charge near, ground the far side to drain the repelled charge, remove ground, then remove the charge — leaving the opposite sign.",
        detail: "No contact occurs; the original rod keeps its full charge and can repeat the cycle.",
      },
      {
        term: "Grounding",
        kind: "definition",
        statement: "Grounding connects a body to the earth reservoir, which accepts or supplies electrons while holding ~$0 \\text{ V}$.",
        detail: "Safety grounds, static straps, and lightning rods all exploit this infinite charge sink.",
      },
      {
        term: "Polarization of insulators",
        kind: "insight",
        statement: "A nearby charge shifts electron clouds in an insulator, attracting neutral paper, combs lifting bits, and balloons sticking to walls.",
        detail: "No electrons leave their molecules; the surface facing the charge simply goes opposite in sign.",
      },
      {
        term: "Electroscope reading",
        kind: "method",
        statement: "Like-charged leaves diverge; the divergence angle measures charge magnitude and a known rod tests sign.",
        detail: "Approaching (not touching) with the same sign increases divergence; opposite sign collapses it.",
      },
    ],
    examples: [
      {
        title: "Induction sequence",
        problem: "A neutral sphere is grounded while a negatively charged rod is held nearby, then the ground is removed, then the rod. What is the sphere's final charge?",
        steps: [
          { label: "Step 1: Approach", text: "The rod repels sphere electrons; grounding drains them to earth, leaving the sphere positive near the rod." },
          { label: "Step 2: Isolate then withdraw", text: "Removing ground traps the deficit; removing the rod spreads positive charge uniformly." },
        ],
        result: "Positively charged — opposite to the inducing rod.",
      },
      {
        title: "Conduction sharing",
        problem: "Two identical spheres hold $+6.0 \\text{ nC}$ and $-2.0 \\text{ nC}$. They touch, then separate. Find each final charge.",
        steps: [
          { label: "Step 1: Total", text: "Net $+4.0 \\text{ nC}$ is conserved." },
          { label: "Step 2: Split evenly", text: "Identical spheres share equally: $+2.0 \\text{ nC}$ each." },
        ],
        result: "$+2.0 \\text{ nC}$ on each sphere.",
      },
    ],
    keyTakeaways: [
      "Conduction shares the same sign by touch; induction leaves the opposite sign without touch.",
      "Ground first, then isolate, then withdraw — order matters in induction.",
      "Neutral insulators attract via polarization, not net charge.",
    ],
    quiz: [
      {
        q: "Induction charging with a negative rod and proper grounding leaves the sphere:",
        options: ["Negative", "Positive", "Neutral", "Alternating"],
        answer: 1,
        explanation: "Electrons are driven to ground; the trapped deficit is positive once the rod is withdrawn.",
      },
      {
        q: "A charged balloon sticks to a neutral wall because:",
        options: ["The wall is grounded", "The balloon polarizes the wall surface", "Air pressure holds it", "Gravity reverses"],
        answer: 1,
        explanation: "Molecular dipoles align toward the balloon, and the near opposite layer attracts.",
      },
      {
        q: "Touching a $+8 \\text{ nC}$ identical sphere to a neutral identical sphere gives:",
        options: ["$+8$ and $0 \\text{ nC}$", "$+4$ and $+4 \\text{ nC}$", "$+8$ and $+8 \\text{ nC}$", "$-4$ and $-4 \\text{ nC}$"],
        answer: 1,
        explanation: "Conduction equalizes: the $+8 \\text{ nC}$ total splits evenly.",
      },
    ],
  },
  {
    sectionId: "ewen-ch17-s3",
    readingTime: 6,
    intro: "Coulomb's law $F = kq_{1}q_{2}/r^{2}$ is the $F = ma$ of electrostatics: an inverse-square force with a huge constant. This section computes forces between point charges, handles one-dimensional resultants, and compares electrical with gravitational strength.",
    objectives: [
      "Apply $F = kq_{1}q_{2}/r^{2}$ with $k = 9.00 \\times 10^{9} \\text{ N}\\cdot\\text{m}^{2}/\\text{C}^{2}$",
      "Assign directions from attraction/repulsion and add collinear forces",
      "Compare Coulomb and gravitational forces for basic particles",
    ],
    concepts: [
      {
        term: "Coulomb's law",
        kind: "law",
        statement: "Point charges attract or repel with $F = k|q_{1}q_{2}|/r^{2}$ along their joining line, with $k = 9.00 \\times 10^{9} \\text{ N}\\cdot\\text{m}^{2}/\\text{C}^{2}$.",
        detail: "Doubling distance quarters the force; doubling either charge doubles it.",
      },
      {
        term: "Direction rule",
        kind: "method",
        statement: "Like signs push apart, unlike signs pull together; resolve each pair force, then add as vectors.",
        detail: "In one dimension, choose + toward the right and sum signed forces on the target charge.",
      },
      {
        term: "Microcoulomb scale",
        kind: "notation",
        statement: "Shop static charges are microcoulombs ($1 \\mu\\text{C} = 10^{-6} \\text{ C}$) and nanocoulombs; whole coulombs would be explosive.",
        detail: "Two $1 \\text{ C}$ charges $1 \\text{ m}$ apart would repel with $9 \\times 10^{9} \\text{ N}$.",
      },
      {
        term: "Superposition",
        kind: "theorem",
        statement: "Each pair interacts independently; the net force is the vector sum over all pairs.",
        detail: "Three-charge line problems add two signed Coulomb terms on the middle charge.",
      },
      {
        term: "Electrical versus gravitational",
        kind: "insight",
        statement: "For two protons, the Coulomb repulsion exceeds gravitational attraction by about $10^{36}$ — gravity is irrelevant inside atoms.",
        detail: "Both are inverse-square, but $k$ dwarfs $G$ for particle-scale masses and charges.",
      },
    ],
    examples: [
      {
        title: "Force between two microcoulomb charges",
        problem: "Charges $q_{1} = +2.00 \\mu\\text{C}$ and $q_{2} = +3.00 \\mu\\text{C}$ sit $0.400 \\text{ m}$ apart. Find the repulsive force.",
        steps: [
          { label: "Step 1: Convert", text: "$q_{1} = 2.00 \\times 10^{-6} \\text{ C}$, $q_{2} = 3.00 \\times 10^{-6} \\text{ C}$." },
          { label: "Step 2: Coulomb", text: "$F = (9.00 \\times 10^{9})(2.00 \\times 10^{-6})(3.00 \\times 10^{-6})/(0.400)^{2} = 0.0540/0.160 = 0.338 \\text{ N}$." },
        ],
        result: "$0.338 \\text{ N}$ repulsion along the joining line.",
      },
      {
        title: "Net force on a middle charge",
        problem: "Charges $+4.00 \\mu\\text{C}$ (left), $-2.00 \\mu\\text{C}$ (middle), $+4.00 \\mu\\text{C}$ (right) sit on a line with $0.300 \\text{ m}$ spacing. Find the net force on the middle charge.",
        steps: [
          { label: "Step 1: Left pulls left", text: "$F_{L} = k(4.00 \\times 10^{-6})(2.00 \\times 10^{-6})/0.0900 = 0.800 \\text{ N}$ toward the left." },
          { label: "Step 2: Right pulls right", text: "Symmetric $0.800 \\text{ N}$ toward the right." },
          { label: "Step 3: Add", text: "Equal and opposite — net zero." },
        ],
        result: "Zero net force by symmetry (unstable equilibrium).",
      },
    ],
    keyTakeaways: [
      "$F = kq_{1}q_{2}/r^{2}$ along the joining line; signs set push versus pull.",
      "Work in microcoulombs and meters; add collinear forces with signs.",
      "Electrostatic forces dwarf gravity at atomic scales.",
    ],
    quiz: [
      {
        q: "Two point charges are moved from $r$ to $3r$. The force becomes:",
        options: ["$3\\times$ larger", "The same", "$1/3$ as large", "$1/9$ as large"],
        answer: 3,
        explanation: "Inverse-square: $F \\propto 1/r^{2}$, so $1/3^{2} = 1/9$.",
      },
      {
        q: "$+5.0 \\mu\\text{C}$ and $-5.0 \\mu\\text{C}$ are $0.20 \\text{ m}$ apart. The force is about:",
        options: ["$0.0056 \\text{ N}$", "$5.6 \\text{ N}$", "$225 \\text{ N}$", "$0 \\text{ N}$"],
        answer: 1,
        explanation: "$(9.00 \\times 10^{9})(25 \\times 10^{-12})/0.040 = 5.6 \\text{ N}$ attractive.",
      },
      {
        q: "Coulomb's law and Newton's gravitation are alike in that both:",
        options: ["Are always attractive", "Fall as $1/r^{2}$", "Use the same constant", "Act only on contact"],
        answer: 1,
        explanation: "Both are inverse-square central forces; Coulomb can also repel and is vastly stronger per particle.",
      },
    ],
  },
  {
    sectionId: "ewen-ch17-s4",
    readingTime: 5,
    intro: "A charge fills the space around it with an electric field — the force per coulomb a test charge would feel. This section defines $E = F/q$, sketches field-line maps, and computes fields of point charges and uniform plates.",
    objectives: [
      "Define field $E = F/q$ in $\\text{N}/\\text{C}$ (equivalently $\\text{V}/\\text{m}$)",
      "Draw and read field-line diagrams for charges and plates",
      "Compute point-charge fields $E = kQ/r^{2}$ and uniform-plate fields",
    ],
    concepts: [
      {
        term: "Electric field",
        kind: "definition",
        statement: "The field at a point is the force per unit positive test charge: $\\mathbf{E} = \\mathbf{F}/q$, in $\\text{N}/\\text{C}$.",
        detail: "A $+2.00 \\text{ N}$ force on $0.500 \\text{ C}$ means $E = 4.00 \\text{ N}/\\text{C}$ there, pointing along the force.",
      },
      {
        term: "Point-charge field",
        kind: "theorem",
        statement: "A point charge $Q$ produces $E = k|Q|/r^{2}$, pointing away from $+Q$ and toward $-Q$.",
        detail: "Fields superpose as vectors; a dipole's far field falls faster than $1/r^{2}$ by cancellation.",
      },
      {
        term: "Field-line rules",
        kind: "method",
        statement: "Lines exit $+$ and enter $-$, never cross, and crowd where $E$ is strong; line count measures charge.",
        detail: "Parallel evenly spaced lines mark a uniform field between oppositely charged plates.",
      },
      {
        term: "Uniform field between plates",
        kind: "theorem",
        statement: "Large parallel plates at voltage $V$ and spacing $d$ give $E = V/d$, uniform except at edges.",
        detail: "This is the workhorse field of capacitors, CRT deflection, and inkjet steering.",
      },
      {
        term: "Shielding by conductors",
        kind: "insight",
        statement: "Free charges in a conductor cancel external static fields inside — the Faraday-cage effect.",
        detail: "Cars shield lightning; shielded cable braids protect signals the same way.",
      },
    ],
    figures: [
      {
        caption: "Field lines exit positive and enter negative charges; parallel-plate lines are straight, even, and uniform.",
        svg: "<svg role='img' aria-label='Field lines exit positive and enter negative charges; parallel-plate lines are straight, even, and uniform.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"80\" cy=\"100\" r=\"10\"/><circle cx=\"200\" cy=\"100\" r=\"10\"/><line x1=\"270\" y1=\"60\" x2=\"370\" y2=\"60\" stroke-width=\"4\"/><line x1=\"270\" y1=\"140\" x2=\"370\" y2=\"140\" stroke-width=\"4\"/><line x1=\"80\" y1=\"80\" x2=\"80\" y2=\"40\"/><line x1=\"80\" y1=\"120\" x2=\"80\" y2=\"160\"/><line x1=\"62\" y1=\"100\" x2=\"130\" y2=\"100\"/><line x1=\"270\" y1=\"75\" x2=\"270\" y2=\"125\"/><line x1=\"300\" y1=\"75\" x2=\"300\" y2=\"125\"/><line x1=\"330\" y1=\"75\" x2=\"330\" y2=\"125\"/><line x1=\"360\" y1=\"75\" x2=\"360\" y2=\"125\"/><text x=\"72\" y=\"104\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">+</text><text x=\"192\" y=\"104\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">-</text></svg>",
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Field of a point charge",
        problem: "Find $E$ at $0.250 \\text{ m}$ from a $+6.00 \\text{ nC}$ charge.",
        steps: [
          { label: "Step 1: Convert", text: "$Q = 6.00 \\times 10^{-9} \\text{ C}$." },
          { label: "Step 2: Apply $E = kQ/r^{2}$", text: "$E = (9.00 \\times 10^{9})(6.00 \\times 10^{-9})/0.0625 = 864 \\text{ N}/\\text{C}$, pointing away." },
        ],
        result: "$864 \\text{ N}/\\text{C}$ radially outward.",
      },
      {
        title: "Field between charged plates",
        problem: "Plates $2.00 \\text{ mm}$ apart hold $120 \\text{ V}$. Find $E$ and the force on a proton ($e = 1.60 \\times 10^{-19} \\text{ C}$).",
        steps: [
          { label: "Step 1: Uniform field", text: "$E = V/d = 120/0.00200 = 60{,}000 \\text{ N}/\\text{C}$." },
          { label: "Step 2: Force", text: "$F = eE = (1.60 \\times 10^{-19})(60{,}000) = 9.60 \\times 10^{-15} \\text{ N}$." },
        ],
        result: "$60.0 \\text{ kN}/\\text{C}$; $9.60 \\times 10^{-15} \\text{ N}$ on the proton.",
      },
    ],
    keyTakeaways: [
      "$E = F/q$ maps the force a charge would feel at every point.",
      "Point charges give $kQ/r^{2}$; plates give uniform $V/d$.",
      "Field lines start on $+$, end on $-$, and crowd where the field is strong.",
    ],
    quiz: [
      {
        q: "A $+3.0 \\mu\\text{C}$ test charge feels $0.060 \\text{ N}$. The field is:",
        options: ["$0.18 \\text{ N}/\\text{C}$", "$20{,}000 \\text{ N}/\\text{C}$", "$0.020 \\text{ N}/\\text{C}$", "$50 \\text{ N}/\\text{C}$"],
        answer: 1,
        explanation: "$E = F/q = 0.060/3.0 \\times 10^{-6} = 20{,}000 \\text{ N}/\\text{C}$.",
      },
      {
        q: "Field lines of a single positive point charge:",
        options: ["Circle around it", "Point radially outward", "Point radially inward", "Run parallel"],
        answer: 1,
        explanation: "Lines exit positive charges radially; they enter negative ones.",
      },
      {
        q: "Inside a hollow metal car struck by lightning, occupants are safe mainly because:",
        options: ["Rubber tires insulate", "The conductor cancels the internal field", "Lightning avoids metal", "Glass blocks charge"],
        answer: 1,
        explanation: "Free charges redistribute to kill the interior field — a Faraday cage.",
      },
    ],
  },
  {
    sectionId: "ewen-ch17-s5",
    readingTime: 5,
    intro: "A circuit is a closed conducting loop where a source pushes charge through a load and back. This section defines current, voltage, and resistance, traces the loop convention, and distinguishes open, closed, and short circuits.",
    objectives: [
      "Define current ($I = Q/t$), voltage, and resistance with units",
      "Trace a simple loop from source through load and switch",
      "Classify open, closed, and short circuits by behavior",
    ],
    concepts: [
      {
        term: "Electric current",
        kind: "definition",
        statement: "Current is charge flow rate, $I = Q/t$, in amperes ($1 \\text{ A} = 1 \\text{ C}/\\text{s}$).",
        detail: "Electron flow runs $-$ to $+$; conventional current is drawn $+$ to $-$ for historical consistency.",
      },
      {
        term: "Voltage (potential difference)",
        kind: "definition",
        statement: "Voltage is energy per coulomb, $V = W/Q$, in volts ($1 \\text{ V} = 1 \\text{ J}/\\text{C}$).",
        detail: "The source lifts charges to high potential; the load drops them back, converting energy to heat, light, or motion.",
      },
      {
        term: "Resistance",
        kind: "definition",
        statement: "Resistance $R$ in ohms ($\\Omega$) opposes current; loads, wire, and internal source resistance all contribute.",
        detail: "Long thin hot wires resist most; short thick cold ones resist least.",
      },
      {
        term: "Simple loop anatomy",
        kind: "method",
        statement: "Every working circuit has source, conductors, load, and (usually) control: trace $+$ terminal → load → $-$ terminal without breaks.",
        detail: "Schematics straighten this loop into rectangles; current arrows mark the single loop direction.",
      },
      {
        term: "Open versus short",
        kind: "insight",
        statement: "An open circuit has a break ($I = 0$, full voltage across the break); a short bypasses the load ($R \\approx 0$, destructive current).",
        detail: "Fuses and breakers exist to kill shorts before wire insulation does.",
      },
    ],
    figures: [
      {
        caption: "Simple loop: source $V$ drives conventional current $I$ through switch and load $R$; $V = IR$ around the loop.",
        svg: "<svg role='img' aria-label='Simple loop: source V drives conventional current I through switch and load R; V = IR around the loop.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"90\" y=\"40\" width=\"220\" height=\"120\"/><line x1=\"90\" y1=\"40\" x2=\"90\" y2=\"110\" stroke-width=\"6\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"80\" stroke-width=\"6\"/><rect x=\"170\" y=\"30\" width=\"60\" height=\"20\"/><circle cx=\"310\" cy=\"120\" r=\"8\"/><text x=\"165\" y=\"90\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">R load</text><text x=\"60\" y=\"90\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">V</text><text x=\"240\" y=\"150\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">I</text><text x=\"300\" y=\"60\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">switch</text></svg>",
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Current from charge flow",
        problem: "$3.60 \\text{ C}$ passes a point in $2.00 \\text{ s}$. Find the current.",
        steps: [
          { label: "Step 1: Apply $I = Q/t$", text: "$I = 3.60/2.00 = 1.80 \\text{ A}$." },
        ],
        result: "$1.80 \\text{ A}$ conventional current.",
      },
      {
        title: "Energy delivered by a battery",
        problem: "A $12.0 \\text{ V}$ battery moves $5.00 \\text{ C}$ through a lamp. How much electrical energy converts to light and heat?",
        steps: [
          { label: "Step 1: Use $W = VQ$", text: "$W = (12.0)(5.00) = 60.0 \\text{ J}$." },
        ],
        result: "$60.0 \\text{ J}$ delivered to the lamp.",
      },
    ],
    keyTakeaways: [
      "Current $I = Q/t$ (amperes); voltage $V = W/Q$ (volts); resistance in ohms.",
      "Circuits are closed loops: source → load → source.",
      "Opens stop current; shorts bypass loads and blow protection.",
    ],
    quiz: [
      {
        q: "$2.00 \\text{ A}$ flows for $30.0 \\text{ s}$. Charge passed is:",
        options: ["$0.067 \\text{ C}$", "$15.0 \\text{ C}$", "$60.0 \\text{ C}$", "$32.0 \\text{ C}$"],
        answer: 2,
        explanation: "$Q = It = 2.00 \\times 30.0 = 60.0 \\text{ C}$.",
      },
      {
        q: "Conventional current direction is drawn:",
        options: ["$-$ to $+$ with electrons", "Both ways at once", "$+$ to $-$ around the outside circuit", "Only inside the battery"],
        answer: 2,
        explanation: "Franklin's convention predates electron discovery; electron flow is opposite.",
      },
      {
        q: "A wire directly across a battery with no load is a:",
        options: ["Open circuit", "Short circuit", "Parallel branch", "Grounded neutral"],
        answer: 1,
        explanation: "Near-zero resistance draws maximum current — fuses exist for exactly this fault.",
      },
    ],
  },
  {
    sectionId: "ewen-ch17-s6",
    readingTime: 7,
    intro: "Ohm's law $V = IR$ turns every DC circuit into arithmetic: given any two of voltage, current, and resistance, the third follows. This section drills the law in all three forms, reads resistor codes and ratings, and sizes current-limiting resistors.",
    objectives: [
      "Apply $V = IR$ flexibly as $V = IR$, $I = V/R$, $R = V/I$",
      "Read resistor values, tolerances, and power ratings",
      "Size series dropping resistors for LEDs and small loads",
    ],
    concepts: [
      {
        term: "Ohm's law",
        kind: "law",
        statement: "At fixed temperature, current through a conductor is proportional to voltage: $V = IR$.",
        detail: "Ohmic devices (plain resistors) graph as straight $I$-versus-$V$ lines through the origin with slope $1/R$.",
      },
      {
        term: "Three-form fluency",
        kind: "method",
        statement: "Cover the wanted letter in the $V$-over-$IR$ triangle: $V = IR$, $I = V/R$, $R = V/I$.",
        detail: "Troubleshoot by computing the expected third quantity and comparing with the meter.",
      },
      {
        term: "Resistor codes and tolerance",
        kind: "notation",
        statement: "Color bands (or printed numbers) give value and tolerance; gold means $\\pm 5\\%$, silver $\\pm 10\\%$.",
        detail: "A $470 \\text{ }\\Omega$ gold-band resistor may read $447$–$494 \\text{ }\\Omega$ and still be good.",
      },
      {
        term: "Non-ohmic devices",
        kind: "insight",
        statement: "Filaments, diodes, and transistors curve on $I$-versus-$V$ plots because $R$ itself changes with $T$ or bias.",
        detail: "Ohm's law still defines the static ratio $R = V/I$ at each point, but the ratio is no longer constant.",
      },
      {
        term: "Rate the resistor's watts",
        kind: "method",
        statement: "Size power rating at least twice the dissipation $P = I^{2}R$ for reliability.",
        detail: "A resistor dropping $0.50 \\text{ W}$ should be a $1 \\text{ W}$ part or larger.",
      },
    ],
    figures: [
      {
        caption: "Ohm's triangle: cover the wanted letter — $V = IR$, $I = V/R$, $R = V/I$.",
        svg: "<svg role='img' aria-label='Ohm&#39;s triangle: cover the wanted letter — V = IR, I = V/R, R = V/I.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"200\" cy=\"100\" r=\"60\"/><line x1=\"140\" y1=\"100\" x2=\"260\" y2=\"100\"/><line x1=\"200\" y1=\"100\" x2=\"200\" y2=\"160\"/><text x=\"192\" y=\"75\" font-size=\"16\" fill=\"currentColor\" stroke=\"none\">V</text><text x=\"160\" y=\"140\" font-size=\"16\" fill=\"currentColor\" stroke=\"none\">I</text><text x=\"225\" y=\"140\" font-size=\"16\" fill=\"currentColor\" stroke=\"none\">R</text></svg>",
        afterConcept: 2,
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "From Drude conduction to Thevenin equivalents",
        blocks: [
          {
            kind: "theorem",
            heading: "Microscopic Ohm's law",
            body: "In the Drude model, electrons of density $n$ and charge $-e$ accelerate for a mean free time $\\tau$ between collisions, gaining drift velocity $v_{d} = eE\\tau/m$. Current density is then $J = nev_{d} = (ne^{2}\\tau/m)E$, so conductivity $\\sigma = ne^{2}\\tau/m$ and resistivity $\\rho = 1/\\sigma$. Macroscopic $V = IR$ follows by integrating $E$ along a uniform wire of length $L$ and area $A$: $V = EL = (J/\\sigma)L = (I/A\\sigma)L$, giving $R = \\rho L/A$.",
          },
          {
            kind: "derivation",
            heading: "Thevenin equivalence sketch",
            body: "Any network of independent sources and linear resistors seen from two terminals is equivalent to one source $V_{th}$ in series with one resistor $R_{th}$: $V_{th}$ is the open-circuit terminal voltage, and $R_{th}$ is the resistance seen with sources zeroed (voltage sources shorted, current sources opened). Superposition guarantees linearity, so terminal behavior $V = V_{th} - IR_{th}$ is a straight line fully fixed by these two measurements.",
          },
          {
            kind: "application",
            heading: "Maximum power transfer",
            body: "With load $R_{L}$ on a Thevenin source, $P_{L} = V_{th}^{2}R_{L}/(R_{th} + R_{L})^{2}$. Differentiating, $dP_{L}/dR_{L} = 0$ gives $R_{L} = R_{th}$ for maximum delivered power, at $50\\%$ efficiency. Audio and RF stages match impedances for this reason; power utilities instead minimize $R_{th}$ for efficiency over transfer.",
          },
        ],
      },
    ],
    examples: [
      {
        title: "Lamp current and resistance",
        problem: "A $120 \\text{ V}$ lamp draws $0.833 \\text{ A}$. Find its hot resistance.",
        steps: [
          { label: "Step 1: Use $R = V/I$", text: "$R = 120/0.833 = 144 \\text{ }\\Omega$." },
        ],
        result: "$144 \\text{ }\\Omega$ hot (cold resistance reads much lower).",
      },
      {
        title: "LED dropping resistor",
        problem: "A $9.00 \\text{ V}$ battery drives an LED dropping $2.00 \\text{ V}$ at $20.0 \\text{ mA}$. Size the series resistor and its wattage.",
        steps: [
          { label: "Step 1: Resistor voltage", text: "$V_{R} = 9.00 - 2.00 = 7.00 \\text{ V}$." },
          { label: "Step 2: Resistance", text: "$R = 7.00/0.0200 = 350 \\text{ }\\Omega$ (use $360 \\text{ }\\Omega$ standard)." },
          { label: "Step 3: Power", text: "$P = IV = (0.0200)(7.00) = 0.140 \\text{ W}$ — specify $1/4 \\text{ W}$ or larger." },
        ],
        result: "$360 \\text{ }\\Omega$, $1/4 \\text{ W}$ resistor.",
      },
    ],
    keyTakeaways: [
      "$V = IR$ in all three forms solves any single-resistor DC question.",
      "Resistor markings give value plus tolerance; wattage must exceed $I^{2}R$ with margin.",
      "Non-ohmic parts still use $R = V/I$ point by point, but the ratio shifts.",
    ],
    quiz: [
      {
        q: "$24.0 \\text{ V}$ across $8.00 \\text{ }\\Omega$ gives current:",
        options: ["$0.333 \\text{ A}$", "$3.00 \\text{ A}$", "$192 \\text{ A}$", "$32.0 \\text{ A}$"],
        answer: 1,
        explanation: "$I = V/R = 24.0/8.00 = 3.00 \\text{ A}$.",
      },
      {
        q: "A resistor's voltage doubles while its resistance stays fixed. Current:",
        options: ["Halves", "Stays the same", "Doubles", "Quadruples"],
        answer: 2,
        explanation: "$I = V/R$ is proportional in $V$ for ohmic parts.",
      },
      {
        q: "A lamp filament's $I$-versus-$V$ curve bends flat at high voltage because:",
        options: ["Ohm's law is repealed", "Heating raises its resistance", "Charge is quantized", "The socket polarizes"],
        answer: 1,
        explanation: "Hot tungsten resists more, so current grows slower than $V$ — non-ohmic but still analyzable point by point.",
      },
    ],
  },
  {
    sectionId: "ewen-ch17-s7",
    readingTime: 6,
    intro: "String loads end to end and one current threads them all: the series circuit. This section adds resistances $R_{T} = R_{1} + R_{2} + \\cdots$, divides voltage proportionally, and finds total power in strings of lamps and heaters.",
    objectives: [
      "State the three series rules (same $I$, divided $V$, summed $R$)",
      "Compute $R_{T}$, branch voltages, and total power",
      "Diagnose opens in series strings",
    ],
    concepts: [
      {
        term: "Series connection",
        kind: "definition",
        statement: "Components are in series when they share one current path end to end: $I$ is identical through each.",
        detail: "Old Christmas strings were series — one dead bulb killed the whole loop.",
      },
      {
        term: "Total series resistance",
        kind: "theorem",
        statement: "Resistances in series add: $R_{T} = R_{1} + R_{2} + \\cdots + R_{n}$.",
        detail: "Each resistor's voltage drop adds to the source: $V_{T} = V_{1} + V_{2} + \\cdots$.",
      },
      {
        term: "Voltage divider",
        kind: "method",
        statement: "Each resistor takes $V_{n} = V_{T}(R_{n}/R_{T})$ — voltage divides in proportion to resistance.",
        detail: "Two equal resistors split the source exactly in half.",
      },
      {
        term: "Series power",
        kind: "theorem",
        statement: "Total power is $P_{T} = V_{T}I = I^{2}R_{T}$, equal to the sum of resistor dissipations.",
        detail: "The largest resistor dissipates the most ($I^{2}R$ with common $I$).",
      },
      {
        term: "Series fault signature",
        kind: "insight",
        statement: "An open anywhere kills all current; full source voltage appears across the break.",
        detail: "Half-splitting with a voltmeter localizes the open in a few readings.",
      },
    ],
    examples: [
      {
        title: "Three resistors in series",
        problem: "$R_{1} = 100 \\text{ }\\Omega$, $R_{2} = 200 \\text{ }\\Omega$, $R_{3} = 300 \\text{ }\\Omega$ in series across $120 \\text{ V}$. Find $I$ and each voltage.",
        steps: [
          { label: "Step 1: Total $R$", text: "$R_{T} = 600 \\text{ }\\Omega$." },
          { label: "Step 2: Current", text: "$I = 120/600 = 0.200 \\text{ A}$." },
          { label: "Step 3: Voltages", text: "$V_{1} = 20.0 \\text{ V}$, $V_{2} = 40.0 \\text{ V}$, $V_{3} = 60.0 \\text{ V}$ (sum $120 \\text{ V}$)." },
        ],
        result: "$0.200 \\text{ A}$; drops $20/40/60 \\text{ V}$.",
      },
      {
        title: "Series heater power",
        problem: "Two $72.0 \\text{ }\\Omega$ heater elements in series run on $120 \\text{ V}$. Find total power versus one element alone.",
        steps: [
          { label: "Step 1: Series total", text: "$R_{T} = 144 \\text{ }\\Omega$; $P = V^{2}/R_{T} = 14{,}400/144 = 100 \\text{ W}$." },
          { label: "Step 2: Single element", text: "$P_{1} = 14{,}400/72.0 = 200 \\text{ W}$." },
        ],
        result: "Series pair gives $100 \\text{ W}$ — half of one element (the low switch setting).",
      },
    ],
    keyTakeaways: [
      "Series: one current, voltages add, $R_{T}$ is the sum.",
      "Voltage divides as $V_{n} = V_{T}R_{n}/R_{T}$.",
      "Opens kill the loop; the break holds full source voltage.",
    ],
    quiz: [
      {
        q: "$10$, $20$, and $30 \\text{ }\\Omega$ in series give $R_{T}$:",
        options: ["$5.45 \\text{ }\\Omega$", "$60 \\text{ }\\Omega$", "$6000 \\text{ }\\Omega$", "$20 \\text{ }\\Omega$"],
        answer: 1,
        explanation: "Series adds: $10 + 20 + 30 = 60 \\text{ }\\Omega$.",
      },
      {
        q: "In a series pair with $R_{2} = 3R_{1}$, the voltage across $R_{2}$ is:",
        options: ["Equal to $V_{1}$", "Three times $V_{1}$", "One-third of $V_{1}$", "Zero"],
        answer: 1,
        explanation: "Common current gives $V \\propto R$: $V_{2} = 3V_{1}$ (three-quarters of the source).",
      },
      {
        q: "A series string of lamps goes fully dark. First check:",
        options: ["Replace every lamp", "Test for an open (one failed lamp or wire)", "Double the source voltage", "Add a parallel branch"],
        answer: 1,
        explanation: "One open stops all series current; locate it by half-splitting.",
      },
    ],
  },
  {
    sectionId: "ewen-ch17-s8",
    readingTime: 6,
    intro: "Wire loads side by side and each sees full voltage: the parallel circuit of house wiring. This section applies the reciprocal rule $1/R_{T} = 1/R_{1} + 1/R_{2} + \\cdots$, splits current by conductance, and explains why one failed branch leaves the rest lit.",
    objectives: [
      "State the three parallel rules (same $V$, divided $I$, reciprocal $R$)",
      "Compute $R_{T}$ directly and by the two-branch product-over-sum shortcut",
      "Explain branch independence and main-line current sizing",
    ],
    concepts: [
      {
        term: "Parallel connection",
        kind: "definition",
        statement: "Components are in parallel when they share the same two nodes: $V$ is identical across each branch.",
        detail: "House outlets are parallel — every appliance sees $120 \\text{ V}$ regardless of the others.",
      },
      {
        term: "Reciprocal resistance rule",
        kind: "theorem",
        statement: "Conductances add: $1/R_{T} = 1/R_{1} + 1/R_{2} + \\cdots$, so $R_{T}$ is always smaller than the smallest branch.",
        detail: "More branches mean more paths, hence less total resistance.",
      },
      {
        term: "Product-over-sum shortcut",
        kind: "method",
        statement: "Two branches combine as $R_{T} = R_{1}R_{2}/(R_{1} + R_{2})$; equal branches give $R/n$.",
        detail: "Three $60 \\text{ }\\Omega$ branches give $20 \\text{ }\\Omega$ instantly.",
      },
      {
        term: "Current divider",
        kind: "method",
        statement: "Branch currents are $I_{n} = V/R_{n}$; the smallest resistor hogs the most current.",
        detail: "Main-line current is the sum: $I_{T} = I_{1} + I_{2} + \\cdots$.",
      },
      {
        term: "Branch independence",
        kind: "insight",
        statement: "Opening one branch only removes its current; the rest keep full voltage and brightness.",
        detail: "That is why one burned-out appliance never darkens the house — unlike a series string.",
      },
    ],
    figures: [
      {
        caption: "Parallel branches share voltage $V$; currents $I_{1}, I_{2}$ add in the main line and $1/R_{T} = 1/R_{1} + 1/R_{2}$.",
        svg: "<svg role='img' aria-label='Parallel branches share voltage V; currents I_1, I_2 add in the main line and 1/R_T = 1/R_1 + 1/R_2.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"60\" y1=\"40\" x2=\"60\" y2=\"160\" stroke-width=\"4\"/><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"160\" stroke-width=\"4\"/><line x1=\"60\" y1=\"40\" x2=\"340\" y2=\"40\"/><line x1=\"60\" y1=\"160\" x2=\"340\" y2=\"160\"/><rect x=\"180\" y=\"65\" width=\"50\" height=\"18\"/><rect x=\"180\" y=\"120\" width=\"50\" height=\"18\"/><text x=\"240\" y=\"80\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">R1 I1</text><text x=\"240\" y=\"135\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">R2 I2</text><text x=\"30\" y=\"105\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">V</text><text x=\"150\" y=\"35\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">IT in</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Two-branch parallel circuit",
        problem: "$R_{1} = 60.0 \\text{ }\\Omega$ and $R_{2} = 30.0 \\text{ }\\Omega$ in parallel across $120 \\text{ V}$. Find $R_{T}$, $I_{T}$, and each branch current.",
        steps: [
          { label: "Step 1: Combine", text: "$R_{T} = (60.0 \\times 30.0)/90.0 = 20.0 \\text{ }\\Omega$." },
          { label: "Step 2: Branch currents", text: "$I_{1} = 120/60.0 = 2.00 \\text{ A}$; $I_{2} = 120/30.0 = 4.00 \\text{ A}$." },
          { label: "Step 3: Total", text: "$I_{T} = 6.00 \\text{ A}$ (check: $120/20.0 = 6.00 \\text{ A}$)." },
        ],
        result: "$R_{T} = 20.0 \\text{ }\\Omega$; $2.00 + 4.00 = 6.00 \\text{ A}$ total.",
      },
      {
        title: "Adding a house load",
        problem: "A $120 \\text{ V}$ line already feeds a $12.0 \\text{ A}$ heater. A $6.00 \\text{ A}$ appliance is plugged into the same (parallel) circuit. Find the new main current.",
        steps: [
          { label: "Step 1: Add currents", text: "$I_{T} = 12.0 + 6.00 = 18.0 \\text{ A}$." },
          { label: "Step 2: Judge", text: "A $15 \\text{ A}$ breaker trips — the loads must split across circuits." },
        ],
        result: "$18.0 \\text{ A}$ — over a $15 \\text{ A}$ breaker.",
      },
    ],
    keyTakeaways: [
      "Parallel: one voltage, currents add, $1/R_{T}$ is the sum of reciprocals.",
      "Two-branch shortcut $R_{1}R_{2}/(R_{1}+R_{2})$; equal branches divide by $n$.",
      "Branches are independent; main current is the sum — size wire and breakers for it.",
    ],
    quiz: [
      {
        q: "$30$ and $60 \\text{ }\\Omega$ in parallel give:",
        options: ["$90 \\text{ }\\Omega$", "$20 \\text{ }\\Omega$", "$45 \\text{ }\\Omega$", "$1800 \\text{ }\\Omega$"],
        answer: 1,
        explanation: "$(30 \\times 60)/90 = 20 \\text{ }\\Omega$.",
      },
      {
        q: "Adding a third parallel branch to a live circuit:",
        options: ["Lowers $R_{T}$ and raises $I_{T}$", "Raises $R_{T}$", "Dims the other branches", "Stops all current"],
        answer: 0,
        explanation: "Another conductance path always lowers $R_{T}$; at fixed $V$ the main current must rise.",
      },
      {
        q: "One lamp of three parallel lamps burns open. The others:",
        options: ["Go dark", "Burn at full brightness", "Double in brightness", "Explode"],
        answer: 1,
        explanation: "Each branch keeps full $V$; only the failed branch's current vanishes.",
      },
    ],
  },
  {
    sectionId: "ewen-ch17-s9",
    readingTime: 7,
    intro: "Real circuits mix series strings with parallel blocks — compound circuits. This section reduces them block by block (parallels first), then unfolds voltages and currents back out to every resistor.",
    objectives: [
      "Reduce compound networks by collapsing parallel blocks, then series",
      "Unfold total current back into branch voltages and currents",
      "Compute total resistance, current, and power for mixed networks",
    ],
    concepts: [
      {
        term: "Compound circuit",
        kind: "definition",
        statement: "A compound (series-parallel) circuit has at least one resistor in series with a parallel combination.",
        detail: "Car wiring, divider-plus-load stages, and heater-switch networks are all compound.",
      },
      {
        term: "Reduction order",
        kind: "method",
        statement: "Collapse the innermost parallel blocks to single equivalents, add series parts, solve the simple loop, then unfold outward.",
        detail: "Redraw after each collapse — errors come from unfolding in the wrong order.",
      },
      {
        term: "Unfolding rule",
        kind: "method",
        statement: "Series parts share the loop current; parallel parts share the block voltage — apply the right divider at each level.",
        detail: "Track $V$ drops across series parts; what remains sits across the parallel block.",
      },
      {
        term: "Equivalent resistance bounds",
        kind: "insight",
        statement: "Every parallel block is smaller than its smallest branch, so $R_{T}$ always lies between the plain series sum and the series-plus-smallest-branch sum.",
        detail: "Use the bounds as an arithmetic check before unfolding.",
      },
      {
        term: "Power audit",
        kind: "method",
        statement: "Verify by power: $V_{T}I_{T}$ must equal $\\sum I_{n}^{2}R_{n}$ over every resistor.",
        detail: "A mismatch pinpoints the mis-unfolded branch.",
      },
    ],
    figures: [
      {
        caption: "Compound reduction: collapse the parallel block to one $R$, solve the series loop, then unfold outward.",
        svg: "<svg role='img' aria-label='Compound reduction: collapse the parallel block to one R, solve the series loop, then unfold outward.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"60\" y=\"50\" width=\"280\" height=\"100\"/><rect x=\"110\" y=\"42\" width=\"40\" height=\"16\"/><rect x=\"230\" y=\"75\" width=\"40\" height=\"16\"/><rect x=\"230\" y=\"115\" width=\"40\" height=\"16\"/><text x=\"105\" y=\"90\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">R1</text><text x=\"275\" y=\"90\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">R2</text><text x=\"275\" y=\"130\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">R3</text><text x=\"150\" y=\"170\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">collapse R2||R3 first</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Series resistor feeding a parallel pair",
        problem: "$R_{1} = 10.0 \\text{ }\\Omega$ in series with $R_{2} = 20.0 \\text{ }\\Omega \\parallel R_{3} = 30.0 \\text{ }\\Omega$, across $24.0 \\text{ V}$. Find every current and voltage.",
        steps: [
          { label: "Step 1: Collapse the pair", text: "$R_{23} = (20.0 \\times 30.0)/50.0 = 12.0 \\text{ }\\Omega$." },
          { label: "Step 2: Total loop", text: "$R_{T} = 22.0 \\text{ }\\Omega$; $I_{T} = 24.0/22.0 = 1.091 \\text{ A}$ through $R_{1}$." },
          { label: "Step 3: Unfold", text: "$V_{1} = 10.91 \\text{ V}$; block voltage $= 24.0 - 10.91 = 13.09 \\text{ V}$; $I_{2} = 0.655 \\text{ A}$, $I_{3} = 0.436 \\text{ A}$ (sum $1.091 \\text{ A}$)." },
        ],
        result: "$I_{1} = 1.09 \\text{ A}$; $I_{2} = 0.655 \\text{ A}$; $I_{3} = 0.436 \\text{ A}$.",
      },
      {
        title: "Power audit",
        problem: "Audit the previous circuit's power.",
        steps: [
          { label: "Step 1: Source power", text: "$P_{T} = (24.0)(1.091) = 26.2 \\text{ W}$." },
          { label: "Step 2: Resistor sum", text: "$(1.091)^{2}(10.0) + (0.655)^{2}(20.0) + (0.436)^{2}(30.0) = 11.9 + 8.58 + 5.70 = 26.2 \\text{ W}$." },
        ],
        result: "Balances at $26.2 \\text{ W}$ — the unfold is correct.",
      },
    ],
    keyTakeaways: [
      "Collapse parallels first, add series, solve, then unfold outward.",
      "Series shares current; parallel shares voltage — use the matching divider.",
      "Audit with power: source watts must equal the resistor sum.",
    ],
    quiz: [
      {
        q: "First step in solving a compound circuit is to:",
        options: ["Measure everything live", "Collapse parallel blocks into equivalents", "Add all resistors directly", "Remove the source"],
        answer: 1,
        explanation: "Reduction goes inside-out: parallels first, then the resulting series loop.",
      },
      {
        q: "In the worked example the parallel block voltage was:",
        options: ["$24.0 \\text{ V}$", "$10.9 \\text{ V}$", "$13.1 \\text{ V}$", "$0 \\text{ V}$"],
        answer: 2,
        explanation: "Source minus the $R_{1}$ drop: $24.0 - 10.91 = 13.09 \\text{ V}$ across both branches.",
      },
      {
        q: "A power audit disagrees with the source power. Most likely cause:",
        options: ["Wrong meter batteries", "A branch current or voltage mis-unfolded", "Resistor color blindness", "The laws of physics changed"],
        answer: 1,
        explanation: "Power must balance exactly in DC resistive circuits; mismatch means an arithmetic slip in unfolding.",
      },
    ],
  },
  {
    sectionId: "ewen-ch17-s10",
    readingTime: 5,
    intro: "Voltmeters, ammeters, and ohmmeters each connect differently — and each can disturb the circuit it measures. This section hooks meters correctly (volts across, amps in series, ohms on dead circuits) and extends ranges with multipliers and shunts.",
    objectives: [
      "Connect voltmeters in parallel and ammeters in series with correct polarity",
      "Explain meter loading and choose high-$Z$ voltmeters and low-$Z$ ammeters",
      "Size multiplier and shunt resistors for extended ranges",
    ],
    concepts: [
      {
        term: "Voltmeter connection",
        kind: "method",
        statement: "Voltmeters bridge across the component (parallel), with high internal resistance so they draw negligible current.",
        detail: "A $10 \\text{ M}\\Omega$ digital meter barely perturbs ordinary circuits.",
      },
      {
        term: "Ammeter connection",
        kind: "method",
        statement: "Ammeters insert in series with the branch, with near-zero resistance, after opening the loop.",
        detail: "Never bridge an ammeter across a source — that is a short through the meter fuse.",
      },
      {
        term: "Ohmmeter rule",
        kind: "method",
        statement: "Ohmmeters power the resistor themselves: measure only on dead, isolated components.",
        detail: "Parallel paths and live voltage both corrupt resistance readings — lift one lead.",
      },
      {
        term: "Meter loading",
        kind: "insight",
        statement: "Low-$Z$ voltmeters drain divider circuits and read low; high-current shunts must dwarf connection resistance.",
        detail: "Loading error is worst in high-resistance electronics — use $10 \\text{ M}\\Omega$ or higher.",
      },
      {
        term: "Multipliers and shunts",
        kind: "method",
        statement: "A series multiplier extends voltmeter range; a parallel shunt carries most current past the meter movement.",
        detail: "A $50 \\text{ mV}$ movement with a shunt reads hundreds of amperes in starter-circuit tests.",
      },
    ],
    figures: [
      {
        caption: "Meter rules: voltmeter bridges across (parallel), ammeter breaks into the line (series), ohmmeter tests dead parts.",
        svg: "<svg role='img' aria-label='Meter rules: voltmeter bridges across (parallel), ammeter breaks into the line (series), ohmmeter tests dead parts.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"40\" y=\"40\" width=\"140\" height=\"110\"/><rect x=\"230\" y=\"40\" width=\"140\" height=\"110\"/><circle cx=\"110\" cy=\"130\" r=\"14\"/><circle cx=\"300\" cy=\"95\" r=\"14\"/><text x=\"102\" y=\"135\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">A</text><text x=\"292\" y=\"100\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">V</text><text x=\"50\" y=\"30\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">ammeter in series</text><text x=\"240\" y=\"30\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">voltmeter across</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Multiplier for a 0–5 V movement",
        problem: "A $1.00 \\text{ mA}$ movement reads full scale at $0.100 \\text{ V}$. Size the series multiplier for a $0$–$10.0 \\text{ V}$ range.",
        steps: [
          { label: "Step 1: Movement resistance", text: "$R_{m} = 0.100/0.00100 = 100 \\text{ }\\Omega$." },
          { label: "Step 2: Total needed", text: "$R_{total} = 10.0/0.00100 = 10{,}000 \\text{ }\\Omega$." },
          { label: "Step 3: Multiplier", text: "$R_{mult} = 9900 \\text{ }\\Omega$ in series." },
        ],
        result: "$9.90 \\text{ k}\\Omega$ series multiplier.",
      },
      {
        title: "Shunt for a starter-current meter",
        problem: "The same $1.00 \\text{ mA}$, $100 \\text{ }\\Omega$ movement must read $0$–$100 \\text{ A}$. Find the shunt.",
        steps: [
          { label: "Step 1: Shunt voltage", text: "Full scale: $V = (0.00100)(100) = 0.100 \\text{ V}$ across the parallel pair." },
          { label: "Step 2: Shunt current", text: "$I_{shunt} \\approx 99.999 \\text{ A}$." },
          { label: "Step 3: Shunt $R$", text: "$R_{s} = 0.100/99.999 = 1.00 \\times 10^{-3} \\text{ }\\Omega$." },
        ],
        result: "$1.00 \\text{ m}\\Omega$ shunt — a calibrated copper bar, not a resistor.",
      },
    ],
    keyTakeaways: [
      "Volts across, amps in series, ohms on dead isolated parts.",
      "High-$Z$ volts, low-$Z$ amps; watch loading in high-$R$ circuits.",
      "Multipliers (series) raise voltage range; shunts (parallel) raise current range.",
    ],
    quiz: [
      {
        q: "To measure a resistor's voltage drop, the voltmeter goes:",
        options: ["In series with it", "Across it (parallel)", "In place of it", "Nowhere — estimate"],
        answer: 1,
        explanation: "Voltage is a between-points quantity; bridging reads the drop without breaking the loop.",
      },
      {
        q: "Connecting an ammeter directly across a battery is dangerous because:",
        options: ["It reads zero", "Its near-zero resistance shorts the battery", "Voltage cannot be measured", "Electrons flow backward"],
        answer: 1,
        explanation: "Series instruments across a source see the full short-circuit current and blow fuses or worse.",
      },
      {
        q: "Resistance must be measured with the circuit:",
        options: ["Live at full voltage", "Dead and the resistor isolated", "Shorted", "At resonance"],
        answer: 1,
        explanation: "The ohmmeter supplies its own test current; outside voltage or parallel paths corrupt it.",
      },
    ],
  },
  {
    sectionId: "ewen-ch17-s11",
    readingTime: 5,
    intro: "Batteries and generators are electromotive-force sources with internal resistance that sags under load. This section models terminal voltage $V = \\mathcal{E} - Ir$, distinguishes ideal from real sources, and compares primary, secondary, and supply types.",
    objectives: [
      "Define emf $\\mathcal{E}$ and distinguish it from terminal voltage",
      "Apply $V = \\mathcal{E} - Ir$ to loaded sources",
      "Compare primary cells, rechargeables, and regulated supplies",
    ],
    concepts: [
      {
        term: "Electromotive force",
        kind: "definition",
        statement: "Emf $\\mathcal{E}$ is the open-circuit energy per coulomb a source provides, in volts — a cause, not a force.",
        detail: "Chemical, magnetic, photoelectric, and thermal actions all generate emf.",
      },
      {
        term: "Internal resistance",
        kind: "definition",
        statement: "Real sources carry series resistance $r$; loaded terminal voltage is $V = \\mathcal{E} - Ir$.",
        detail: "Cranking sags a $12.6 \\text{ V}$ battery toward $10 \\text{ V}$ because hundreds of amps cross $r$.",
      },
      {
        term: "Ideal versus real source",
        kind: "insight",
        statement: "Ideal sources hold voltage at any current; real ones sag linearly with load and short at $\\mathcal{E}/r$.",
        detail: "Regulated supplies use feedback to imitate the ideal over their rated range.",
      },
      {
        term: "Primary and secondary cells",
        kind: "definition",
        statement: "Primary cells (alkaline, lithium) are single-use; secondary cells (lead-acid, Li-ion, NiMH) recharge by reversing chemistry.",
        detail: "Capacity in ampere-hours ($\\text{A}\\cdot\\text{h}$) rates stored charge, not energy — multiply by volts for watt-hours.",
      },
      {
        term: "Source combinations preview",
        kind: "insight",
        statement: "Cells stack in series for voltage and parallel for capacity — the next section's sizing rules.",
        detail: "Matched cells only: mixed states invite reverse-charging and leaks.",
      },
    ],
    examples: [
      {
        title: "Terminal voltage under load",
        problem: "A battery has $\\mathcal{E} = 12.6 \\text{ V}$ and $r = 0.0200 \\text{ }\\Omega$. Find terminal voltage at $30.0 \\text{ A}$.",
        steps: [
          { label: "Step 1: Internal drop", text: "$Ir = (30.0)(0.0200) = 0.600 \\text{ V}$." },
          { label: "Step 2: Terminal", text: "$V = 12.6 - 0.600 = 12.0 \\text{ V}$." },
        ],
        result: "$12.0 \\text{ V}$ at the terminals.",
      },
      {
        title: "Battery energy capacity",
        problem: "A $12.0 \\text{ V}$, $70.0 \\text{ A}\\cdot\\text{h}$ car battery is drawn at $7.00 \\text{ A}$. Find ideal run time and stored energy.",
        steps: [
          { label: "Step 1: Time", text: "$t = 70.0/7.00 = 10.0 \\text{ h}$." },
          { label: "Step 2: Energy", text: "$W = VQ = (12.0)(70.0) = 840 \\text{ W}\\cdot\\text{h} = 3.02 \\text{ MJ}$." },
        ],
        result: "$10.0 \\text{ h}$ ideal; $840 \\text{ Wh}$ stored.",
      },
    ],
    keyTakeaways: [
      "Emf is open-circuit volts; terminal voltage sags by $Ir$.",
      "Internal resistance sets short-circuit current $\\mathcal{E}/r$.",
      "Ampere-hours rate charge; times volts they rate energy.",
    ],
    quiz: [
      {
        q: "A source with $\\mathcal{E} = 9.00 \\text{ V}$, $r = 1.00 \\text{ }\\Omega$ delivers $2.00 \\text{ A}$. Terminal voltage is:",
        options: ["$9.00 \\text{ V}$", "$11.0 \\text{ V}$", "$7.00 \\text{ V}$", "$18.0 \\text{ V}$"],
        answer: 2,
        explanation: "$V = 9.00 - (2.00)(1.00) = 7.00 \\text{ V}$.",
      },
      {
        q: "A $100 \\text{ A}\\cdot\\text{h}$, $12 \\text{ V}$ battery stores about:",
        options: ["$1200 \\text{ Wh}$", "$8.3 \\text{ Wh}$", "$100 \\text{ W}$", "$12 \\text{ A}$"],
        answer: 0,
        explanation: "Energy $= V \\times$ charge $= 12 \\times 100 = 1200 \\text{ Wh}$.",
      },
      {
        q: "Headlights dim while cranking mainly because:",
        options: ["The starter steals voltage via $Ir$ drop", "Lights switch to series", "The battery reverses", "Wires superconduct"],
        answer: 0,
        explanation: "Hundreds of cranking amps across internal plus cable resistance sag the bus voltage.",
      },
    ],
  },
  {
    sectionId: "ewen-ch17-s12",
    readingTime: 5,
    intro: "Cells combine like building blocks: series adds voltage, parallel adds capacity. This section stacks voltages with polarities, parallels matched cells for ampere-hours, and warns against mismatched paralleling.",
    objectives: [
      "Add series cells with aiding/opposing polarities",
      "Parallel matched cells for capacity at the same voltage",
      "Avoid reverse-charge and circulating-current mistakes",
    ],
    concepts: [
      {
        term: "Cells in series",
        kind: "theorem",
        statement: "Series aiding voltages add ($\\mathcal{E}_{T} = \\mathcal{E}_{1} + \\mathcal{E}_{2} + \\cdots$); opposing cells subtract.",
        detail: "Four $1.50 \\text{ V}$ cells aiding give $6.00 \\text{ V}$; one reversed drops the stack to $3.00 \\text{ V}$.",
      },
      {
        term: "Cells in parallel",
        kind: "theorem",
        statement: "Matched parallel cells hold one-cell voltage while capacities (ampere-hours) add.",
        detail: "Three $12 \\text{ V}$, $50 \\text{ A}\\cdot\\text{h}$ batteries parallel to $12 \\text{ V}$, $150 \\text{ A}\\cdot\\text{h}$.",
      },
      {
        term: "Internal resistance combining",
        kind: "method",
        statement: "Series stacks add $r$; $n$ matched parallel cells divide $r$ by $n$.",
        detail: "Paralleling stiffens the source: same emf with less sag under load.",
      },
      {
        term: "Mismatched-parallel hazard",
        kind: "insight",
        statement: "Unequal voltages in parallel drive circulating currents that overheat and leak cells.",
        detail: "Charge states and chemistry must match; diode isolation or battery managers separate the rest.",
      },
      {
        term: "Practical stacks",
        kind: "insight",
        statement: "Flashlights stack in series for volts; RV and marine banks parallel for ampere-hours; EVs do both.",
        detail: "A $48 \\text{ V}$ bank of $12 \\text{ V}$ blocks in series, doubled in parallel, multiplies both specs.",
      },
    ],
    examples: [
      {
        title: "Flashlight stack with one reversed cell",
        problem: "Four $1.50 \\text{ V}$ AA cells sit in series, one reversed. Find net emf and explain the dim bulb.",
        steps: [
          { label: "Step 1: Net", text: "$1.50 + 1.50 + 1.50 - 1.50 = 3.00 \\text{ V}$ instead of $6.00 \\text{ V}$." },
        ],
        result: "$3.00 \\text{ V}$ — half voltage, dim orange filament.",
      },
      {
        title: "RV battery bank",
        problem: "Two $12.0 \\text{ V}$, $100 \\text{ A}\\cdot\\text{h}$ batteries parallel feed a $5.00 \\text{ A}$ load. Find bank spec and run time.",
        steps: [
          { label: "Step 1: Bank", text: "$12.0 \\text{ V}$, $200 \\text{ A}\\cdot\\text{h}$." },
          { label: "Step 2: Time", text: "$200/5.00 = 40.0 \\text{ h}$ ideal." },
        ],
        result: "$12.0 \\text{ V}$, $200 \\text{ A}\\cdot\\text{h}$; $40 \\text{ h}$ at $5 \\text{ A}$.",
      },
    ],
    keyTakeaways: [
      "Series aiding adds volts; one reversed cell subtracts twice its voltage from the stack.",
      "Parallel matched cells add ampere-hours at one-cell voltage and stiffen the source.",
      "Never parallel mismatched voltages or states of charge.",
    ],
    quiz: [
      {
        q: "Six $2.00 \\text{ V}$ lead-acid cells in series aiding give:",
        options: ["$2.00 \\text{ V}$", "$6.00 \\text{ V}$", "$12.0 \\text{ V}$", "$0.33 \\text{ V}$"],
        answer: 2,
        explanation: "$6 \\times 2.00 = 12.0 \\text{ V}$ — the car battery.",
      },
      {
        q: "Two matched $12 \\text{ V}$, $60 \\text{ A}\\cdot\\text{h}$ batteries in parallel give:",
        options: ["$24 \\text{ V}$, $60 \\text{ A}\\cdot\\text{h}$", "$12 \\text{ V}$, $120 \\text{ A}\\cdot\\text{h}$", "$24 \\text{ V}$, $120 \\text{ A}\\cdot\\text{h}$", "$6.0 \\text{ V}$, $60 \\text{ A}\\cdot\\text{h}$"],
        answer: 1,
        explanation: "Voltage stays at one-cell value; capacities add.",
      },
      {
        q: "Paralleling a fresh and a dead $12 \\text{ V}$ battery is bad because:",
        options: ["Voltage doubles dangerously", "Circulating current overheats both", "Capacity cancels to zero", "AC appears"],
        answer: 1,
        explanation: "The voltage difference drives internal circulating current through small $r$ paths.",
      },
    ],
  },
  {
    sectionId: "ewen-ch17-s13",
    readingTime: 6,
    intro: "Power is the paycheck of a circuit: $P = VI = I^{2}R = V^{2}/R$ sizes bills, breakers, and heater elements. This section prices kilowatt-hours, derates real loads, and explains why utilities transmit at high voltage.",
    objectives: [
      "Apply $P = VI = I^{2}R = V^{2}/R$ to any resistive load",
      "Price energy from $E = Pt$ in kilowatt-hours",
      "Explain high-voltage transmission and fuse/breaker sizing",
    ],
    concepts: [
      {
        term: "Electric power",
        kind: "definition",
        statement: "Power is energy rate, $P = VI$, in watts ($1 \\text{ W} = 1 \\text{ J}/\\text{s} = 1 \\text{ V}\\cdot\\text{A}$).",
        detail: "Resistive loads also obey $P = I^{2}R = V^{2}/R$ — pick the form matching knowns.",
      },
      {
        term: "Kilowatt-hour billing",
        kind: "notation",
        statement: "Energy sold is $E = Pt$: $1 \\text{ kWh} = 3.60 \\times 10^{6} \\text{ J}$, costing rate $\\times$ kWh.",
        detail: "A $1500 \\text{ W}$ heater for $4 \\text{ h}$ burns $6.0 \\text{ kWh}$.",
      },
      {
        term: "Form selection",
        kind: "method",
        statement: "Use $I^{2}R$ when current is fixed (series, motors), $V^{2}/R$ when voltage is fixed (parallel appliances).",
        detail: "Halving voltage quarters appliance power — brownout heaters go lukewarm fast.",
      },
      {
        term: "High-voltage transmission",
        kind: "insight",
        statement: "Delivering power $P = VI$ at high $V$ shrinks $I$, and line loss $I^{2}R$ falls with the square.",
        detail: "Doubling transmission voltage quarters line losses — the reason for transformers and HV lines.",
      },
      {
        term: "Protection sizing",
        kind: "method",
        statement: "Fuses and breakers are rated just above normal $I = P/V$ with wire ampacity above the breaker.",
        detail: "Continuous loads use the $80\\%$ rule: a $15 \\text{ A}$ circuit carries $12 \\text{ A}$ continuously.",
      },
    ],
    figures: [
      {
        caption: "Power triangle: $P = VI$; resistive forms $I^{2}R$ and $V^{2}/R$ agree on every ohmic load.",
        svg: "<svg role='img' aria-label='Power triangle: P = VI; resistive forms I^2R and V^2/R agree on every ohmic load.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"200,30 80,160 320,160\"/><line x1=\"200\" y1=\"30\" x2=\"200\" y2=\"160\"/><line x1=\"140\" y1=\"95\" x2=\"260\" y2=\"95\"/><text x=\"190\" y=\"60\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\">P</text><text x=\"140\" y=\"140\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\">I</text><text x=\"260\" y=\"140\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\">V</text><text x=\"60\" y=\"185\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">P = VI = I²R = V²/R</text></svg>",
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Heater current and resistance",
        problem: "A $1500 \\text{ W}$, $120 \\text{ V}$ space heater runs $4.00 \\text{ h}$ at $\\$0.180/\\text{kWh}$. Find its current, resistance, and operating cost.",
        steps: [
          { label: "Step 1: Current", text: "$I = P/V = 1500/120 = 12.5 \\text{ A}$." },
          { label: "Step 2: Resistance", text: "$R = V^{2}/P = 14{,}400/1500 = 9.60 \\text{ }\\Omega$." },
          { label: "Step 3: Cost", text: "$E = 1.50 \\times 4.00 = 6.00 \\text{ kWh}$; cost $= 6.00 \\times 0.180 = \\$1.08$." },
        ],
        result: "$12.5 \\text{ A}$, $9.60 \\text{ }\\Omega$, $\\$1.08$ per evening.",
      },
      {
        title: "Transmission upgrade",
        problem: "A line delivers $10.0 \\text{ MW}$ at $100 \\text{ kV}$ with $R = 5.00 \\text{ }\\Omega$. Find line loss; repeat at $200 \\text{ kV}$.",
        steps: [
          { label: "Step 1: Current at $100 \\text{ kV}$", text: "$I = 10.0 \\times 10^{6}/1.00 \\times 10^{5} = 100 \\text{ A}$; loss $= (100)^{2}(5.00) = 50.0 \\text{ kW}$." },
          { label: "Step 2: At $200 \\text{ kV}$", text: "$I = 50.0 \\text{ A}$; loss $= (50.0)^{2}(5.00) = 12.5 \\text{ kW}$." },
        ],
        result: "Loss falls $50.0 \\to 12.5 \\text{ kW}$ — one quarter.",
      },
    ],
    keyTakeaways: [
      "$P = VI = I^{2}R = V^{2}/R$; choose the form matching the fixed quantity.",
      "Bills multiply $\\text{kW} \\times$ hours $\\times$ rate.",
      "High voltage means low current and $I^{2}R$ losses that fall with $V^{2}$.",
    ],
    quiz: [
      {
        q: "A $120 \\text{ V}$, $9.60 \\text{ }\\Omega$ heater dissipates:",
        options: ["$12.5 \\text{ W}$", "$1500 \\text{ W}$", "$1152 \\text{ W}$", "$0.08 \\text{ W}$"],
        answer: 1,
        explanation: "$V^{2}/R = 14{,}400/9.60 = 1500 \\text{ W}$.",
      },
      {
        q: "A $60 \\text{ W}$ bulb runs $25 \\text{ h}$ at $\\$0.20/\\text{kWh}$. Cost is:",
        options: ["$\\$0.30$", "$\\$3.00$", "$\\$30$", "$\\$0.03$"],
        answer: 0,
        explanation: "$0.060 \\times 25 = 1.50 \\text{ kWh}$; $1.50 \\times 0.20 = \\$0.30$.",
      },
      {
        q: "Utilities transmit at very high voltage chiefly to:",
        options: ["Raise frequency", "Reduce $I^{2}R$ line losses", "Avoid transformers", "Increase wire resistance"],
        answer: 1,
        explanation: "Fixed power at higher $V$ needs less $I$, and losses scale with $I^{2}$.",
      },
      // PYQ-pattern — Coulomb force (rephrased, values changed)
      {
        q: "Charges $Q_{1} = 2.0 \\text{ }\\mu\\text{C}$ and $Q_{2} = 3.0 \\text{ }\\mu\\text{C}$ sit $r = 0.30 \\text{ m}$ apart in air. The repulsion magnitude is:",
        options: ["$0.060 \\text{ N}$", "$0.60 \\text{ N}$", "$6.0 \\text{ N}$", "$60 \\text{ N}$"],
        answer: 1,
        explanation: "Step 1: Given $Q_{1} = 2.0 \\times 10^{-6} \\text{ C}$, $Q_{2} = 3.0 \\times 10^{-6} \\text{ C}$, $r = 0.30 \\text{ m}$. Step 2: Governing law is $F = kQ_{1}Q_{2}/r^{2}$ with $k = 9.0 \\times 10^{9}$. Step 3: Key equation: $$F = \\frac{(9.0 \\times 10^{9})(2.0 \\times 10^{-6})(3.0 \\times 10^{-6})}{(0.30)^{2}}.$$ Step 4: Numerics give numerator $5.40 \\times 10^{-2}$ over $0.090$, so $F = 0.60 \\text{ N}$; units $\\text{N}$ check out. Step 5: Distractors fail because $6.0$ uses centimeters as meters, $0.060$ slips a decimal, and $60$ drops both micro prefixes. Step 6: Conclude the force is **$0.60 \\text{ N}$** repulsive."
      },
      // PYQ-pattern — wire resistance (rephrased, values changed)
      {
        q: "A copper wire ($\\rho = 1.68 \\times 10^{-8} \\text{ }\\Omega\\cdot\\text{m}$) has length $L = 2.0 \\text{ m}$ and cross-section $A = 1.0 \\text{ mm}^{2}$. Its resistance is:",
        options: ["$3.36 \\text{ }\\Omega$", "$0.336 \\text{ }\\Omega$", "$33.6 \\text{ }\\Omega$", "$0.0336 \\text{ }\\Omega$"],
        answer: 3,
        explanation: "Step 1: Given $\\rho = 1.68 \\times 10^{-8}$, $L = 2.0 \\text{ m}$, $A = 1.0 \\times 10^{-6} \\text{ m}^{2}$. Step 2: Governing law is $R = \\rho L/A$. Step 3: Key equation: $$R = \\frac{(1.68 \\times 10^{-8})(2.0)}{1.0 \\times 10^{-6}}.$$ Step 4: Numerics give $R = 3.36 \\times 10^{-2} = 0.0336 \\text{ }\\Omega$; units $\\Omega\\cdot\\text{m}\\times\\text{m}/\\text{m}^{2}$ are ohms. Step 5: Distractors fail by powers of ten from mishandling $1 \\text{ mm}^{2} = 10^{-6} \\text{ m}^{2}$. Step 6: Conclude the wire presents **$0.0336 \\text{ }\\Omega$**."
      },
      // PYQ-pattern — series-parallel circuit (rephrased, values changed)
      {
        q: "Resistors $6 \\text{ }\\Omega$ and $3 \\text{ }\\Omega$ in parallel sit in series with $4 \\text{ }\\Omega$ across $12 \\text{ V}$. The total current is:",
        options: ["$2.0 \\text{ A}$", "$6.0 \\text{ A}$", "$1.0 \\text{ A}$", "$3.0 \\text{ A}$"],
        answer: 0,
        explanation: "Step 1: Given $6$ and $3$ in parallel, plus $4$ in series, all in ohms, fed by $12 \\text{ V}$. Step 2: Governing laws are $1/R_{p} = 1/6+1/3$ and $I = V/R_{tot}$. Step 3: Key equation: $$R_{p} = \\frac{(6)(3)}{6+3} = 2.0 \\text{ }\\Omega, \\qquad R_{tot} = 2.0+4.0 = 6.0 \\text{ }\\Omega.$$ Step 4: Numerics give $I = 12/6.0 = 2.0 \\text{ A}$; units $\\text{V}/\\Omega$ are amperes. Step 5: Distractors fail because $6.0$ divides by the parallel part alone, $1.0$ adds all three directly, and $3.0$ mis-adds the parallel pair. Step 6: Conclude the battery supplies **$2.0 \\text{ A}$**."
      },
      // PYQ-pattern — bulb resistance (rephrased, values changed)
      {
        q: "A $120 \\text{ V}$, $60 \\text{ W}$ bulb runs at rated voltage. Its filament resistance and current are:",
        options: ["$2.0 \\text{ }\\Omega$, $30 \\text{ A}$", "$0.50 \\text{ }\\Omega$, $120 \\text{ A}$", "$240 \\text{ }\\Omega$, $0.50 \\text{ A}$", "$7200 \\text{ }\\Omega$, $0.017 \\text{ A}$"],
        answer: 2,
        explanation: "Step 1: Given $V = 120 \\text{ V}$ fixed and $P = 60 \\text{ W}$. Step 2: Governing laws are $P = V^{2}/R$ for fixed voltage and $I = P/V$. Step 3: Key equation: $$R = \\frac{V^{2}}{P} = \\frac{14400}{60}, \\qquad I = \\frac{60}{120}.$$ Step 4: Numerics give $R = 240 \\text{ }\\Omega$ and $I = 0.50 \\text{ A}$; check $VI = 60 \\text{ W}$ closes the loop. Step 5: Distractors fail because $2.0$ computes $P/V$ as resistance, $0.50$ quotes the current as resistance, and $7200$ multiplies $V$ by $P$. Step 6: Conclude the hot filament is **$240 \\text{ }\\Omega$ carrying $0.50 \\text{ A}$**."
      },
      // PYQ-pattern — point charge field (rephrased, values changed)
      {
        q: "A point charge $Q = 5.0 \\text{ nC}$ sits in air. The field magnitude $0.10 \\text{ m}$ away is:",
        options: ["$450 \\text{ V/m}$", "$4500 \\text{ V/m}$", "$45000 \\text{ V/m}$", "$45 \\text{ V/m}$"],
        answer: 1,
        explanation: "Step 1: Given $Q = 5.0 \\times 10^{-9} \\text{ C}$ and $r = 0.10 \\text{ m}$. Step 2: Governing law is $E = kQ/r^{2}$ with $k = 9.0 \\times 10^{9}$. Step 3: Key equation: $$E = \\frac{(9.0 \\times 10^{9})(5.0 \\times 10^{-9})}{(0.10)^{2}}.$$ Step 4: Numerics give numerator $45$ over $0.010$, so $E = 4500 \\text{ V/m}$; units $\\text{N/C} = \\text{V/m}$ confirm the form. Step 5: Distractors fail by factors of ten from squaring $0.10$ wrongly or reading centimeters as meters. Step 6: Conclude the field is **$4500 \\text{ V/m}$** outward."
      },
      // PYQ-pattern — energy billing (rephrased, values changed)
      {
        q: "A $1.50 \\text{ kW}$ heater runs $4.00 \\text{ h}$ at $\\$0.180/\\text{kWh}$. The operating cost is:",
        options: ["$\\$1.08$", "$\\$10.80$", "$\\$0.11$", "$\\$6.00$"],
        answer: 0,
        explanation: "Step 1: Given $P = 1.50 \\text{ kW}$ and $t = 4.00 \\text{ h}$ at rate $0.180$ dollars per unit. Step 2: Governing law is billed energy $E = Pt$ times the rate. Step 3: Key equation: $$E = (1.50)(4.00) = 6.00 \\text{ kWh}, \\qquad \\text{cost} = (6.00)(0.180).$$ Step 4: Numerics give $\\$1.08$; units $\\text{kW}\\times\\text{h}$ are the billed energy unit. Step 5: Distractors fail because $\\$10.80$ slips a decimal, $\\$0.11$ divides instead of multiplying, and $\\$6.00$ quotes the energy as the bill. Step 6: Conclude the evening costs **$\\$1.08$**."
      },
    ],
  },
]
