import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 27
// Magnetic Field and Magnetic Forces (Sections 27.1 – 27.9)
// ============================================================================

export const youngCh27Content: SectionContent[] = [
  {
    sectionId: "young-ch27-s1",
    readingTime: 4,
    intro: "Lodestone attracted iron two millennia before anyone linked it to current. Young surveys permanent magnets, poles, and Oersted's compass-deflecting discovery that moving charge makes magnetism.",
    objectives: [
      "Describe poles, attraction-repulsion, and pole inseparability",
      "Recount Oersted's experiment linking current to magnetism",
      "Distinguish magnetic from electric interactions",
    ],
    concepts: [
      {
        term: "Magnetic poles",
        kind: "definition",
        statement: "Every magnet has **north** and **south** poles: like repel, unlike attract; cutting a magnet yields two smaller dipoles — no isolated monopole has been found.",
        detail: "Dirac's quantization argument permits monopoles, but searches (including lunar rock and cosmic rays) report zero.",
      },
      {
        term: "Oersted's discovery",
        kind: "insight",
        statement: "In 1820 Oersted saw a wire's current deflect a compass: **moving charge produces magnetic effects** — electricity and magnetism unified in one demonstration.",
        detail: "Ampère mathematized it within weeks: parallel currents attract, antiparallel repel (Chapter 28 quantifies).",
      },
      {
        term: "Ferromagnetism preview",
        kind: "definition",
        statement: "Iron, cobalt, nickel, and gadolinium hold aligned atomic moments in domains, making permanent magnets; heating past the Curie point ($1043\\ \\mathrm{K}$ for iron) destroys order.",
        detail: "Section 28.8 and Chapter 42 return with hysteresis and domains in full.",
      },
      {
        term: "Magnetic versus electric forces",
        kind: "law",
        statement: "Magnetic forces act only on moving charges (or moments), do no work, and circle rather than radiate — velocity-dependent and perpendicular, unlike the radial Coulomb pull.",
        detail: "A stationary electron ignores tesla-scale fields that would violently steer it at speed.",
      },
      {
        term: "Compass and Earth",
        kind: "notation",
        statement: "Earth's field ($\\sim 5 \\times 10^{-5}\\ \\mathrm{T}$) is a tilted offset dipole from core dynamo currents; compass north seeks Earth's magnetic north (a physical south pole).",
        detail: "Declination maps correct the $10^{\\circ}$-scale offsets navigators must apply.",
      },
    ],
    examples: [
      {
        title: "Broken magnet poles",
        problem: "A bar magnet is cut into three equal pieces. Describe the poles of each piece.",
        steps: [
          { label: "No monopoles", text: "Each fragment re-establishes N and S faces — three complete dipoles, weaker per piece." },
          { label: "Field check", text: "Sprinkled filings still loop N-to-S around every fragment." },
          { label: "Limit", text: "Down to atomic moments the dipole persists; monopole pieces never appear." },
        ],
        result: "Three small N-S dipoles; monopoles remain unfound.",
      },
      {
        title: "Oersted deflection sense",
        problem: "A north-south wire carries current north; a compass sits east of it. Which way does it deflect (RHR preview)?",
        steps: [
          { label: "Field circles", text: "Current-north field lines circle the wire; east of it they point downward into the ground... precisely: for northward current, east side field points up-out (right-hand rule: thumb north, fingers curl; east of wire field exits toward observer-up)." },
          { label: "Compass response", text: "Needle north swings toward the local $\\vec{B}$ — visibly deflected from geomagnetic north." },
          { label: "Scale", text: "Ampere-scale currents beat Earth's $50\\ \\mu\\mathrm{T}$ within centimeters — Oersted's lecture-table miracle." },
        ],
        result: "Compass deflects toward the wire's circular field, overwhelming Earth's field nearby.",
      },
    ],
    keyTakeaways: [
      "Poles come in N-S pairs; cutting never isolates one.",
      "Oersted (1820): currents deflect compasses — magnetism is moving charge.",
      "Magnetic forces need motion, do no work, and circle rather than radiate.",
    ],
    quiz: [
      {
        q: "Cutting a bar magnet in half produces:",
        options: ["An isolated N and isolated S", "Two smaller N-S dipoles", "Demagnetized iron", "A quadrupole only"],
        answer: 1,
        explanation: "Domain alignment re-terminates at each new face; monopoles never separate out.",
      },
      {
        q: "Oersted's experiment proved:",
        options: ["Magnets attract iron", "Currents create magnetic fields", "Charge is quantized", "Light is a wave"],
        answer: 1,
        explanation: "The deflecting compass beside a live wire joined electricity to magnetism.",
      },
      {
        q: "A stationary charge in a magnetic field feels:",
        options: ["$qvB$ force", "Zero magnetic force", "Maximum force", "Friction"],
        answer: 1,
        explanation: "Magnetic force needs velocity ($\\vec{F} = q\\vec{v} \\times \\vec{B}$); rest charges feel nothing.",
      },
    ],
  },
  {
    sectionId: "young-ch27-s2",
    readingTime: 5,
    intro: "The magnetic field is defined by the force it exerts on moving charge: $\\vec{F} = q\\vec{v} \\times \\vec{B}$. Young unpacks magnitude, direction (right-hand rule), and the tesla with lab-scale numbers.",
    objectives: [
      "State $\\vec{F} = q\\vec{v} \\times \\vec{B}$ with $F = |q|vB\\sin\\phi$",
      "Apply the right-hand rule for $\\vec{v} \\times \\vec{B}$ direction",
      "Use tesla units with representative field strengths",
    ],
    concepts: [
      {
        term: "Magnetic force law",
        kind: "law",
        statement: "A charge $q$ at velocity $\\vec{v}$ in $\\vec{B}$ feels $\\vec{F} = q\\vec{v} \\times \\vec{B}$ with magnitude $F = |q|vB\\sin\\phi$ ($\\phi$ from $\\vec{v}$ to $\\vec{B}$).",
        detail: "Maximum for perpendicular motion, zero for parallel — velocity angle gates the force.",
      },
      {
        term: "Right-hand rule",
        kind: "method",
        statement: "Point fingers along $\\vec{v}$, curl toward $\\vec{B}$: thumb gives $\\vec{v} \\times \\vec{B}$ for $+q$; $-q$ flips it. Component form: $(\\vec{v} \\times \\vec{B})_{x} = v_{y}B_{z} - v_{z}B_{y}$ (cyclic).",
        detail: "Fleming's left-hand motor variant encodes the same cross product for $+q$ current flow.",
      },
      {
        term: "Tesla and gauss",
        kind: "notation",
        statement: "The **tesla** ($1\\ \\mathrm{T} = 1\\ \\mathrm{N/(A \\cdot m)}$) with $1\\ \\mathrm{G} = 10^{-4}\\ \\mathrm{T}$: Earth $0.5\\ \\mathrm{G}$, fridge magnet $10^{2}\\ \\mathrm{G}$, MRI $1.5$–$7\\ \\mathrm{T}$, magnetars $10^{11}\\ \\mathrm{T}$.",
        detail: "$1\\ \\mu\\mathrm{C}$ at $10^{3}\\ \\mathrm{m/s}$ in $1\\ \\mathrm{T}$ feels $10^{-3}\\ \\mathrm{N}$ — lab forces from modest charges.",
      },
      {
        term: "No work by B",
        kind: "theorem",
        statement: "$\\vec{F} \\perp \\vec{v}$ always, so $dW = \\vec{F} \\cdot d\\vec{l} = 0$: magnetic fields steer but never energize — speed is constant, direction turns.",
        detail: "Cyclotrons need electric gaps for acceleration; magnets only bend (Section 27.5).",
      },
      {
        term: "Lorentz force",
        kind: "definition",
        statement: "Combined fields exert the **Lorentz force** $\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$: $\\vec{E}$ energizes along itself, $\\vec{B}$ steers across motion.",
        detail: "Velocity selectors zero them against each other ($v = E/B$); mass spectrometers sequence them.",
      },
    ],
    examples: [
      {
        title: "Proton in 1 tesla",
        problem: "A proton ($q = +e$) moves at $v = 2.00 \\times 10^{6}\\ \\mathrm{m/s}$ perpendicular to $B = 1.00\\ \\mathrm{T}$. Find $F$.",
        steps: [
          { label: "Magnitude", text: "$F = qvB = (1.602 \\times 10^{-19})(2.00 \\times 10^{6})(1.00) = 3.204 \\times 10^{-13}\\ \\mathrm{N}$." },
          { label: "Direction", text: "Perpendicular to both $\\vec{v}$ and $\\vec{B}$ by RHR — centripetal for circular motion." },
          { label: "Acceleration", text: "$a = F/m = 3.204 \\times 10^{-13}/1.673 \\times 10^{-27} = 1.915 \\times 10^{14}\\ \\mathrm{m/s^{2}}$." },
        ],
        result: "$F = 3.20 \\times 10^{-13}\\ \\mathrm{N}$ perpendicular to motion.",
      },
      {
        title: "Electron parallel to B",
        problem: "An electron moves parallel to $B = 0.500\\ \\mathrm{T}$ at $10^{7}\\ \\mathrm{m/s}$. Find the magnetic force.",
        steps: [
          { label: "Angle", text: "$\\phi = 0$, so $\\sin\\phi = 0$." },
          { label: "Force", text: "$F = evB\\sin 0 = 0$ — field-aligned motion is force-free." },
          { label: "Use", text: "Magnetic bottles exploit this: only perpendicular velocity mirrors (Section 27.4)." },
        ],
        result: "Zero force for field-aligned motion.",
      },
    ],
    keyTakeaways: [
      "$\\vec{F} = q\\vec{v} \\times \\vec{B}$; $F = |q|vB\\sin\\phi$ with RHR direction.",
      "Tesla scale: Earth $50\\ \\mu\\mathrm{T}$, labs teslas, magnetars $10^{11}\\ \\mathrm{T}$.",
      "$\\vec{B}$ steers ($\\vec{F} \\perp \\vec{v}$, no work); $\\vec{E}$ energizes.",
    ],
    quiz: [
      {
        q: "A $+q$ charge moves perpendicular to $\\vec{B}$. The force points:",
        options: ["Along $\\vec{v}$", "Perpendicular to both $\\vec{v}$ and $\\vec{B}$ (RHR)", "Along $\\vec{B}$", "Opposite $\\vec{v}$"],
        answer: 1,
        explanation: "Cross-product geometry: $\\vec{v} \\times \\vec{B}$ is orthogonal to the $v$-$B$ plane.",
      },
      {
        q: "Magnetic forces do no work because:",
        options: ["They are weak", "$\\vec{F} \\perp \\vec{v}$ always, so $\\vec{F} \\cdot d\\vec{l} = 0$", "Energy is conserved trivially", "Charges have no mass"],
        answer: 1,
        explanation: "Perpendicular force changes direction, never speed — zero power $\\vec{F} \\cdot \\vec{v}$.",
      },
      {
        q: "Reversing charge sign with fixed $\\vec{v}$, $\\vec{B}$:",
        options: ["Leaves $\\vec{F}$ unchanged", "Flips $\\vec{F}$ direction", "Doubles $|\\vec{F}|$", "Zeros $\\vec{F}$"],
        answer: 1,
        explanation: "$\\vec{F} = q(\\vec{v} \\times \\vec{B})$: $q \\to -q$ negates the vector.",
      },
    ],
  },
  {
    sectionId: "young-ch27-s3",
    readingTime: 4,
    intro: "Magnetic field lines never start or end — they loop. Young sketches them for bars and currents, defines magnetic flux, and states Gauss's law for magnetism ($\\Phi_{B} = 0$ always).",
    objectives: [
      "Sketch $\\vec{B}$ lines for magnets and straight wires",
      "Define $\\Phi_{B} = \\int \\vec{B} \\cdot d\\vec{A}$ and the weber",
      "State Gauss's law for magnetism and its monopole meaning",
    ],
    concepts: [
      {
        term: "B-line topology",
        kind: "definition",
        statement: "Magnetic lines exit N, enter S externally, continue through the magnet, and encircle currents — always closed loops with no beginning or end.",
        detail: "Iron filings map these loops; compasses tangent them point by point.",
      },
      {
        term: "Magnetic flux",
        kind: "definition",
        statement: "**Magnetic flux** $\\Phi_{B} = \\int \\vec{B} \\cdot d\\vec{A}$ in **webers** ($1\\ \\mathrm{Wb} = 1\\ \\mathrm{T \\cdot m^{2}}$) counts $\\vec{B}$ lines through a surface — Faraday's raw material (Chapter 29).",
        detail: "A $1\\ \\mathrm{T}$ field through $2\\ \\mathrm{cm^{2}}$ is $2 \\times 10^{-4}\\ \\mathrm{Wb}$.",
      },
      {
        term: "Gauss's law for magnetism",
        kind: "law",
        statement: "$\\oint \\vec{B} \\cdot d\\vec{A} = 0$ for every closed surface: equal lines in and out — the mathematical absence of magnetic charge.",
        detail: "Electric Gauss counts enclosed $Q$; magnetic Gauss always reports zero — asymmetry demanding monopoles' absence.",
      },
      {
        term: "No monopoles consequence",
        kind: "insight",
        statement: "Zero net flux plus looping lines forbids isolated magnetic charge: dipoles are the fundamental magnetic lumps (spin and orbital moments).",
        detail: "Finding $\\oint \\vec{B} \\cdot d\\vec{A} \\ne 0$ anywhere would be monopole discovery — watched for since 1931.",
      },
      {
        term: "Uniform-B depiction",
        kind: "notation",
        statement: "Even parallel $\\vec{B}$ lines mean uniform field (solenoid interiors, gap magnets); $\\times$ (in) and $\\cdot$ (out) mark perpendicular fields on paper.",
        detail: "Dots-and-crosses notation compresses 3D steering problems onto 2D pages.",
      },
    ],
    examples: [
      {
        title: "Flux through a loop",
        problem: "Uniform $B = 0.800\\ \\mathrm{T}$ threads a $0.050\\ \\mathrm{m}$-radius loop whose normal tilts $30^{\\circ}$ from $\\vec{B}$. Find $\\Phi_{B}$.",
        steps: [
          { label: "Area", text: "$A = \\pi(0.050)^{2} = 7.854 \\times 10^{-3}\\ \\mathrm{m^{2}}$." },
          { label: "Flux", text: "$\\Phi_{B} = BA\\cos 30^{\\circ} = (0.800)(7.854 \\times 10^{-3})(0.8660) = 5.442 \\times 10^{-3}\\ \\mathrm{Wb}$." },
          { label: "Max", text: "Face-on would give $6.28\\ \\mathrm{mWb}$; tilt costs $13$ percent." },
        ],
        result: "$\\Phi_{B} = 5.44\\ \\mathrm{mWb}$.",
      },
      {
        title: "Closed-box flux",
        problem: "A bar magnet sits inside a closed cardboard box. What is $\\oint \\vec{B} \\cdot d\\vec{A}$ over the box?",
        steps: [
          { label: "Apply", text: "Gauss for magnetism: identically zero for every closed surface." },
          { label: "Lines", text: "Each line exiting the box re-enters elsewhere — loops cannot accumulate." },
          { label: "Contrast", text: "An enclosed electric charge would report $Q/\\epsilon_{0}$; magnets report nothing." },
        ],
        result: "Zero — always, for any closed surface.",
      },
    ],
    keyTakeaways: [
      "$\\vec{B}$ lines loop without ends; density $\\propto B$.",
      "$\\Phi_{B} = \\int \\vec{B} \\cdot d\\vec{A}$ in webers feeds Faraday's law.",
      "$\\oint \\vec{B} \\cdot d\\vec{A} = 0$: no magnetic monopoles.",
    ],
    quiz: [
      {
        q: "Magnetic field lines differ from electric lines by:",
        options: ["Being straight", "Forming closed loops with no start/end", "Never passing through magnets", "Repelling compasses"],
        answer: 1,
        explanation: "No magnetic charge exists to source or sink them; they must close on themselves.",
      },
      {
        q: "$\\oint \\vec{B} \\cdot d\\vec{A} = 0$ means:",
        options: ["$\\vec{B}$ is always zero", "Net magnetic flux through any closed surface vanishes (no monopoles)", "Flux is undefined", "Electric charge is zero"],
        answer: 1,
        explanation: "Entering flux always balances leaving flux — the integral signature of sourcelessness.",
      },
      {
        q: "One weber equals:",
        options: ["$1\\ \\mathrm{T/m^{2}}$", "$1\\ \\mathrm{T \\cdot m^{2}}$", "$1\\ \\mathrm{N/C}$", "$1\\ \\mathrm{A \\cdot m}$"],
        answer: 1,
        explanation: "Flux is field times area: tesla-square-meters.",
      },
    ],
  },
  {
    sectionId: "young-ch27-s4",
    readingTime: 6,
    intro: "Perpendicular velocity plus $\\vec{B}$ means circles: Young derives cyclotron radius $r = mv/qB$, frequency $\\omega = qB/m$, helices for angled injection, and magnetic-bottle mirrors.",
    objectives: [
      "Derive $r = mv_{\\perp}/(|q|B)$ and $\\omega = |q|B/m$",
      "Describe helical motion for $\\vec{v}$ at an angle to $\\vec{B}$",
      "Explain magnetic mirrors and confinement",
    ],
    concepts: [
      {
        term: "Cyclotron motion",
        kind: "theorem",
        statement: "With $\\vec{v} \\perp \\vec{B}$, $|q|vB = mv^{2}/r$ gives $r = mv/(|q|B)$ and angular frequency $\\omega = |q|B/m$ — independent of $v$ (nonrelativistically).",
        detail: "A $10\\ \\mathrm{eV}$ electron in $1\\ \\mathrm{mT}$ circles at $r = 10.7\\ \\mathrm{mm}$; double the speed, double the radius, same period.",
      },
      {
        term: "Cyclotron frequency",
        kind: "definition",
        statement: "**Cyclotron frequency** $f = |q|B/(2\\pi m)$ ($28\\ \\mathrm{GHz/T}$ for electrons, $42.6\\ \\mathrm{MHz/T}$ for protons) clocks plasma, NMR, and accelerator RF.",
        detail: "Tuning RF to $f$ pumps resonant energy each turn — cyclotrons and MRI excitation share this dial.",
      },
      {
        term: "Helical motion",
        kind: "method",
        statement: "Velocity at pitch angle splits: $v_{\\perp}$ circles while $v_{\\parallel}$ drifts, winding a helix of radius $mv_{\\perp}/(|q|B)$ and pitch $v_{\\parallel}(2\\pi m/|q|B)$.",
        detail: "Auroral electrons spiral down geomagnetic lines, radiating at the cyclotron frequency (whistlers).",
      },
      {
        term: "Magnetic mirror",
        kind: "insight",
        statement: "Converging $\\vec{B}$ converts $v_{\\parallel}$ to $v_{\\perp}$ (adiabatic $\\mu = mv_{\\perp}^{2}/2B$ conserved), reflecting particles — the bottle and Van Allen belts' trapping.",
        detail: "Loss cones leak the most field-aligned particles; fusion mirrors plug leaks with steep gradients.",
      },
      {
        term: "Relativistic correction",
        kind: "notation",
        statement: "At $\\gamma \\gg 1$, $r = \\gamma mv/(|q|B)$ and $\\omega = |q|B/(\\gamma m)$: synchrotrons ramp $B$ or RF with energy to hold orbits.",
        detail: "LEP electrons at $100\\ \\mathrm{GeV}$ needed $\\gamma = 2 \\times 10^{5}$ accounting — nonrelativistic $f$ would miss by five orders.",
      },
    ],
    figures: [
      {
        caption: "Helix in uniform $\\vec{B}$: $v_{\\perp}$ gyrates at $\\omega = qB/m$ while $v_{\\parallel}$ advances each turn by pitch $p = v_{\\parallel}T$.",
        svg: `<svg viewBox="0 0 400 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Helical charged particle motion"><line x1="40" y1="90" x2="370" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5" opacity="0.5"/><text x="372" y="94" font-size="13" fill="currentColor">B</text><path d="M60,90 Q75,60 100,60 Q125,60 125,90 Q125,120 100,120 Q75,120 60,90 Q75,60 100,60" fill="none" stroke="currentColor" stroke-width="2"/><path d="M125,90 Q140,60 165,60 Q190,60 190,90 Q190,120 165,120 Q140,120 125,90" fill="none" stroke="currentColor" stroke-width="2"/><path d="M190,90 Q205,60 230,60 Q255,60 255,90 Q255,120 230,120 Q205,120 190,90" fill="none" stroke="currentColor" stroke-width="2"/><text x="150" y="140" font-size="12" fill="currentColor">r = mv⊥/qB, pitch = v∥T</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Electron gyroradius",
        problem: "A $100\\ \\mathrm{eV}$ electron moves perpendicular to $B = 2.00\\ \\mathrm{mT}$. Find $r$ and $f$.",
        steps: [
          { label: "Speed", text: "$v = \\sqrt{2K/m} = \\sqrt{2(100 \\times 1.602 \\times 10^{-19})/9.11 \\times 10^{-31}} = \\sqrt{3.517 \\times 10^{13}} = 5.931 \\times 10^{6}\\ \\mathrm{m/s}$." },
          { label: "Radius", text: "$r = mv/(eB) = (9.11 \\times 10^{-31})(5.931 \\times 10^{6})/(1.602 \\times 10^{-19} \\times 2.00 \\times 10^{-3}) = 5.403 \\times 10^{-24}/3.204 \\times 10^{-22} = 1.686 \\times 10^{-2}\\ \\mathrm{m}$." },
          { label: "Frequency", text: "$f = eB/(2\\pi m) = (1.602 \\times 10^{-19})(2.00 \\times 10^{-3})/(2\\pi \\times 9.11 \\times 10^{-31}) = 5.60 \\times 10^{7}\\ \\mathrm{Hz} = 56.0\\ \\mathrm{MHz}$." },
        ],
        result: "$r = 16.9\\ \\mathrm{mm}$; $f = 56.0\\ \\mathrm{MHz}$.",
      },
      {
        title: "Proton helix pitch",
        problem: "A proton at $v = 3.00 \\times 10^{5}\\ \\mathrm{m/s}$, pitch angle $30^{\\circ}$ to $B = 0.500\\ \\mathrm{T}$. Find $r$ and pitch.",
        steps: [
          { label: "Components", text: "$v_{\\perp} = v\\sin 30^{\\circ} = 1.50 \\times 10^{5}$; $v_{\\parallel} = v\\cos 30^{\\circ} = 2.598 \\times 10^{5}\\ \\mathrm{m/s}$." },
          { label: "Radius", text: "$r = mv_{\\perp}/(eB) = (1.673 \\times 10^{-27})(1.50 \\times 10^{5})/(1.602 \\times 10^{-19} \\times 0.5) = 2.510 \\times 10^{-22}/8.01 \\times 10^{-20} = 3.13 \\times 10^{-3}\\ \\mathrm{m}$." },
          { label: "Pitch", text: "$T = 2\\pi m/(eB) = 1.312 \\times 10^{-7}\\ \\mathrm{s}$; $p = v_{\\parallel}T = 3.41 \\times 10^{-2}\\ \\mathrm{m} = 3.41\\ \\mathrm{cm}$." },
        ],
        result: "$r = 3.13\\ \\mathrm{mm}$; pitch $3.41\\ \\mathrm{cm}$.",
      },
    ],
    keyTakeaways: [
      "$r = mv_{\\perp}/(|q|B)$; $\\omega = |q|B/m$ independent of $v$.",
      "Angled injection winds helices; pitch $= v_{\\parallel}T$.",
      "Converging fields mirror particles ($\\mu$ conserved) — bottles and belts.",
    ],
    quiz: [
      {
        q: "Doubling particle speed in perpendicular $\\vec{B}$:",
        options: ["Doubles $r$, leaves $T$ unchanged", "Halves $r$", "Doubles both $r$ and $T$", "Leaves both unchanged"],
        answer: 0,
        explanation: "$r = mv/qB \\propto v$ but $T = 2\\pi m/qB$ has no $v$.",
      },
      {
        q: "Cyclotron frequency depends on:",
        options: ["Speed only", "$q/m$ ratio and $B$ only (nonrelativistically)", "Radius only", "Temperature"],
        answer: 1,
        explanation: "$f = |q|B/(2\\pi m)$: charge-to-mass and field, nothing else.",
      },
      {
        q: "Magnetic mirrors reflect particles by:",
        options: ["Electric repulsion", "Converting $v_{\\parallel}$ into $v_{\\perp}$ until parallel motion stops", "Friction", "Radiation pressure"],
        answer: 1,
        explanation: "Adiabatic $\\mu$ conservation trades parallel for perpendicular energy in rising $B$.",
      },
      {
        q: "An electron and proton at equal $v_{\\perp}$ in the same $B$ have radii in ratio:",
        options: ["$1:1$", "$1:1836$ (electron:proton)", "$1836:1$", "$1:42.6$"],
        answer: 1,
        explanation: "$r \\propto m$: $m_{p}/m_{e} = 1836$ times wider for the proton.",
      },
    ],
  },
  {
    sectionId: "young-ch27-s5",
    readingTime: 5,
    intro: "Bent trajectories become instruments: velocity selectors, mass spectrometers, and cyclotrons. Young shows how crossed fields and resonant acceleration turn $r = mv/qB$ into discovery machines.",
    objectives: [
      "Explain velocity selection with $v = E/B$",
      "Analyze mass spectrometers via $m/q = Br/v$ chains",
      "Derive cyclotron energy $K = q^{2}B^{2}R^{2}/(2m)$",
    ],
    concepts: [
      {
        term: "Velocity selector",
        kind: "method",
        statement: "Crossed $\\vec{E} \\perp \\vec{B}$ pass only $v = E/B$: Lorentz forces $qE$ and $qvB$ cancel exactly at one speed, dispersing all others onto stops.",
        detail: "$E = 10^{4}\\ \\mathrm{V/m}$, $B = 0.01\\ \\mathrm{T}$ select $10^{6}\\ \\mathrm{m/s}$ — Bainbridge's front end.",
      },
      {
        term: "Mass spectrometer",
        kind: "theorem",
        statement: "Selector-fixed $v$ injected into $B^{\\prime}$ hits radius $r = mv/(qB^{\\prime})$, so $m/q = rB^{\\prime}/v$: position reads mass-to-charge.",
        detail: "Carbon dating and uranium enrichment assay separated isotopes by millimeters on photographic plates.",
      },
      {
        term: "Cyclotron",
        kind: "definition",
        statement: "A **cyclotron** spirals particles with RF synced to $f = qB/(2\\pi m)$, gaining $qV$ per gap crossing to final $K = q^{2}B^{2}R^{2}/(2m)$ at dee radius $R$.",
        detail: "$B = 1.5\\ \\mathrm{T}$, $R = 0.5\\ \\mathrm{m}$ protons reach $K = 13.5\\ \\mathrm{MeV}$ — hospital isotope factories.",
      },
      {
        term: "Charge-to-mass measurement",
        kind: "insight",
        statement: "Thomson's $e/m$ ($1.759 \\times 10^{11}\\ \\mathrm{C/kg}$) balanced $E$ against $B$ deflection — the first particle identification by trajectory alone.",
        detail: "Every spectrometer since is Thomson's apparatus refined: select $v$, bend in $B$, read $r$.",
      },
      {
        term: "Relativistic ceiling",
        kind: "notation",
        statement: "Fixed-$f$ cyclotrons stall near $\\gamma \\approx 1.05$ as $\\omega = qB/(\\gamma m)$ slips; synchrocyclotrons and synchrotrons modulate $f$ or $B$ to follow.",
        detail: "LHC protons at $7\\ \\mathrm{TeV}$ need $\\gamma = 7460$ tracking — modulated RF around $400\\ \\mathrm{MHz}$.",
      },
    ],
    examples: [
      {
        title: "Selecting 1 MeV protons",
        problem: "A selector uses $B = 0.200\\ \\mathrm{T}$. What $E$ passes $K = 1.00\\ \\mathrm{MeV}$ protons?",
        steps: [
          { label: "Speed", text: "$v = \\sqrt{2K/m} = \\sqrt{2(1.602 \\times 10^{-13})/(1.673 \\times 10^{-27})} = \\sqrt{1.915 \\times 10^{14}} = 1.384 \\times 10^{7}\\ \\mathrm{m/s}$." },
          { label: "Field", text: "$E = vB = (1.384 \\times 10^{7})(0.200) = 2.768 \\times 10^{6}\\ \\mathrm{V/m}$." },
          { label: "Check", text: "$2.77\\ \\mathrm{MV/m}$ across $1\\ \\mathrm{cm}$ needs $27.7\\ \\mathrm{kV}$ — stiff but standard." },
        ],
        result: "$E = 2.77 \\times 10^{6}\\ \\mathrm{V/m}$.",
      },
      {
        title: "Cyclotron final energy",
        problem: "A cyclotron has $B = 1.20\\ \\mathrm{T}$, $R = 0.400\\ \\mathrm{m}$. Find max proton $K$ in $\\mathrm{MeV}$.",
        steps: [
          { label: "Formula", text: "$K = q^{2}B^{2}R^{2}/(2m) = (1.602 \\times 10^{-19})^{2}(1.44)(0.16)/(2 \\times 1.673 \\times 10^{-27})$." },
          { label: "Numerator", text: "$(2.566 \\times 10^{-38})(0.2304) = 5.913 \\times 10^{-39}$." },
          { label: "Divide", text: "$5.913 \\times 10^{-39}/3.346 \\times 10^{-27} = 1.767 \\times 10^{-12}\\ \\mathrm{J} = 11.03\\ \\mathrm{MeV}$." },
        ],
        result: "$K_{\\max} = 11.0\\ \\mathrm{MeV}$.",
      },
    ],
    keyTakeaways: [
      "Selectors pass $v = E/B$; spectrometers read $m/q = rB/v$.",
      "Cyclotrons sync RF to $qB/(2\\pi m)$, reaching $q^{2}B^{2}R^{2}/2m$.",
      "Relativity caps fixed-$f$ machines; modulation extends them.",
    ],
    quiz: [
      {
        q: "In a velocity selector, particles faster than $E/B$ deflect toward:",
        options: ["The $\\vec{E}$ side", "The $\\vec{v} \\times \\vec{B}$ side ($qvB > qE$)", "Neither (all pass)", "Backward"],
        answer: 1,
        explanation: "Magnetic $qvB$ outgrows electric $qE$ above the selected speed.",
      },
      {
        q: "Mass spectrometer radius for fixed $v$, $B$ scales with:",
        options: ["$m/q$", "$q/m$", "$m^{2}$", "Charge only"],
        answer: 0,
        explanation: "$r = mv/(qB)$: heavier or less-charged ions swing wider.",
      },
      {
        q: "Cyclotron RF must match:",
        options: ["Orbital frequency $qB/(2\\pi m)$", "Line frequency $60\\ \\mathrm{Hz}$", "Plasma frequency", "Larmor optical frequency"],
        answer: 0,
        explanation: "Each gap crossing must arrive in accelerating phase — synchronism with gyration.",
      },
    ],
  },
  {
    sectionId: "young-ch27-s6",
    readingTime: 5,
    intro: "Currents are moving charges, so wires feel $\\vec{F} = I\\vec{l} \\times \\vec{B}$. Young computes forces on straight and curved conductors and bends current loops quantitatively.",
    objectives: [
      "Apply $\\vec{F} = I\\vec{l} \\times \\vec{B}$ to straight segments",
      "Integrate $d\\vec{F} = I\\,d\\vec{l} \\times \\vec{B}$ on curved wires",
      "Find net force on closed loops in uniform fields",
    ],
    concepts: [
      {
        term: "Force on straight wire",
        kind: "law",
        statement: "Straight current $I$ along $\\vec{l}$ in $\\vec{B}$ feels $\\vec{F} = I\\vec{l} \\times \\vec{B}$ with $F = IlB\\sin\\phi$: $2\\ \\mathrm{A}$ in $1\\ \\mathrm{m}$, $0.5\\ \\mathrm{T}$ perpendicular gives $1.0\\ \\mathrm{N}$.",
        detail: "Direction follows current (positive flow); electron drift opposes but $I$ arrows already encode $+q$ motion.",
      },
      {
        term: "Curved-wire integral",
        kind: "method",
        statement: "$d\\vec{F} = I\\,d\\vec{l} \\times \\vec{B}$ integrates along the path; in uniform $\\vec{B}$ the net is $I\\vec{L}_{\\mathrm{endpoints}} \\times \\vec{B}$ — only endpoints matter.",
        detail: "A semicircle of radius $R$ feels $2IRB$ — the diameter's worth, regardless of the arc's route.",
      },
      {
        term: "Closed loop net force",
        kind: "theorem",
        statement: "Closed loops in uniform $\\vec{B}$ feel zero net force ($\\oint d\\vec{l} = 0$) but nonzero torque (Section 27.7) — translation cancels, rotation remains.",
        detail: "Nonuniform fields add $\\vec{F} = \\nabla(\\vec{\\mu} \\cdot \\vec{B})$: loops dive toward stronger $B$.",
      },
      {
        term: "Rail-gun scaling",
        kind: "insight",
        statement: "$F = IlB$ accelerates armatures: $10^{5}\\ \\mathrm{A}$ across $1\\ \\mathrm{m}$ in $5\\ \\mathrm{T}$ pushes $5 \\times 10^{5}\\ \\mathrm{N}$ — artillery without chemistry.",
        detail: "Rails must survive their own $I^{2}R$ and mutual repulsion — engineering, not physics, limits muzzle velocity.",
      },
      {
        term: "Direction discipline",
        kind: "notation",
        statement: "$I\\vec{l}$ is the $q\\vec{v}$ stand-in: point fingers along current, curl to $\\vec{B}$, thumb pushes — sign errors vanish when arrows are drawn first.",
        detail: "Reversing either $I$ or $\\vec{B}$ flips $\\vec{F}$; reversing both restores it.",
      },
    ],
    figures: [
      {
        caption: "Straight wire: $\\vec{F} = I\\vec{l} \\times \\vec{B}$ perpendicular to the current-field plane; curved paths reduce to endpoint vector $\\vec{L}$ in uniform $\\vec{B}$.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Force on current carrying wire"><line x1="60" y1="120" x2="300" y2="120" stroke="currentColor" stroke-width="3"/><polygon points="300,113 316,120 300,127" fill="currentColor"/><text x="170" y="110" font-size="13" fill="currentColor">I</text><g stroke="currentColor" stroke-width="1.2"><line x1="150" y1="30" x2="150" y2="45"/><line x1="142" y1="37" x2="158" y2="37"/><line x1="220" y1="30" x2="220" y2="45"/><line x1="212" y1="37" x2="228" y2="37"/></g><text x="145" y="25" font-size="12" fill="currentColor">B in</text><line x1="180" y1="120" x2="180" y2="70" stroke="currentColor" stroke-width="2"/><text x="185" y="95" font-size="12" fill="currentColor">F=IlB up</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Wire in a magnet gap",
        problem: "$I = 8.00\\ \\mathrm{A}$ crosses $l = 0.150\\ \\mathrm{m}$ perpendicular to $B = 0.600\\ \\mathrm{T}$. Find $F$.",
        steps: [
          { label: "Apply", text: "$F = IlB = (8.00)(0.150)(0.600) = 0.720\\ \\mathrm{N}$." },
          { label: "Direction", text: "RHR: current cross field — perpendicular out of the $I$-$B$ plane." },
          { label: "Weight check", text: "Lifts $73\\ \\mathrm{g}$ — lab-demo levitation scale." },
        ],
        result: "$F = 0.720\\ \\mathrm{N}$ perpendicular to $I$ and $B$.",
      },
      {
        title: "Semicircular loop half",
        problem: "A semicircular wire radius $R = 0.100\\ \\mathrm{m}$ carries $I = 5.00\\ \\mathrm{A}$ in uniform $B = 0.300\\ \\mathrm{T}$ perpendicular to its plane... find force with $\\vec{B}$ in-plane perpendicular to the diameter.",
        steps: [
          { label: "Endpoints", text: "Endpoint vector $|\\vec{L}| = 2R = 0.200\\ \\mathrm{m}$." },
          { label: "Force", text: "$F = ILB = (5.00)(0.200)(0.300) = 0.300\\ \\mathrm{N}$." },
          { label: "Arc irrelevance", text: "Any path sharing endpoints gives $0.300\\ \\mathrm{N}$ — integration shortcut confirmed." },
        ],
        result: "$F = 0.300\\ \\mathrm{N}$ along the diameter-normal.",
      },
    ],
    keyTakeaways: [
      "$\\vec{F} = I\\vec{l} \\times \\vec{B}$: current-length crosses field.",
      "Curved wires reduce to endpoints in uniform $\\vec{B}$; loops feel zero net force.",
      "Draw $I$ arrows first; RHR does the rest.",
    ],
    quiz: [
      {
        q: "A wire parallel to $\\vec{B}$ feels force:",
        options: ["Maximum $IlB$", "Zero ($\\sin 0 = 0$)", "$IlB/2$", "Infinite"],
        answer: 1,
        explanation: "$F = IlB\\sin\\phi$ vanishes for aligned current and field.",
      },
      {
        q: "A closed loop in uniform $\\vec{B}$ has net magnetic force:",
        options: ["$IAB$", "Zero", "$2IAB$", "Infinite"],
        answer: 1,
        explanation: "$\\oint I\\,d\\vec{l} \\times \\vec{B} = I(\\oint d\\vec{l}) \\times \\vec{B} = 0$.",
      },
      {
        q: "Semicircle versus diameter (same endpoints, uniform $\\vec{B}$):",
        options: ["Semicircle feels more", "Equal forces", "Diameter feels more", "Both zero"],
        answer: 1,
        explanation: "Only the endpoint vector survives $\\int I\\,d\\vec{l} \\times \\vec{B}$ for uniform fields.",
      },
    ],
  },
  {
    sectionId: "young-ch27-s7",
    readingTime: 5,
    intro: "Current loops are magnetic dipoles: torque $\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$ with $\\vec{\\mu} = NI\\vec{A}$ turns them, and $U = -\\vec{\\mu} \\cdot \\vec{B}$ prices orientation. Young derives both — the motor principle.",
    objectives: [
      "Define $\\vec{\\mu} = NI\\vec{A}$ with right-hand normal",
      "Compute $\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$ and $U = -\\vec{\\mu} \\cdot \\vec{B}$",
      "Explain galvanometer and motor action from loop torque",
    ],
    concepts: [
      {
        term: "Magnetic dipole moment",
        kind: "definition",
        statement: "A plane loop of $N$ turns, area $A$, current $I$ has **moment** $\\vec{\\mu} = NI\\vec{A}$ ($\\mathrm{A \\cdot m^{2}}$ = $\\mathrm{J/T}$), normal by RHR fingers-with-current.",
        detail: "$N = 100$, $I = 50\\ \\mathrm{mA}$, $A = 10\\ \\mathrm{cm^{2}}$ gives $\\mu = 5.0 \\times 10^{-3}\\ \\mathrm{A \\cdot m^{2}}$.",
      },
      {
        term: "Torque on a loop",
        kind: "theorem",
        statement: "Uniform $\\vec{B}$ exerts $\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$ ($\\tau = \\mu B\\sin\\phi$): maximum broadside, zero aligned — the galvanometer deflection and motor rotation.",
        detail: "Rectangular-loop derivation ($F = IlB$ on two arms $\\times$ lever $b\\sin\\phi$) generalizes to all plane shapes via $\\mu = IA$.",
      },
      {
        term: "Orientation energy",
        kind: "theorem",
        statement: "$U = -\\vec{\\mu} \\cdot \\vec{B} = -\\mu B\\cos\\phi$: aligned moments sit deepest; flipping costs $2\\mu B$ — paramagnet alignment fights $kT$ with this Boltzmann factor.",
        detail: "NMR tips moments uphill with RF photons ($h\\nu = 2\\mu B$); relaxation falls back, radiating the signal.",
      },
      {
        term: "Electric-magnetic dipole parallel",
        kind: "insight",
        statement: "$\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$, $U = -\\vec{\\mu} \\cdot \\vec{B}$ mirror $\\vec{p} \\times \\vec{E}$, $-\\vec{p} \\cdot \\vec{E}$ exactly — one mathematics, two interactions.",
        detail: "Atomic moments precess (Larmor) like electric dipoles librate — spectroscopy in both domains.",
      },
      {
        term: "Nonuniform-B force",
        kind: "method",
        statement: "Gradient fields pull dipoles via $\\vec{F} = \\nabla(\\vec{\\mu} \\cdot \\vec{B})$: Stern-Gerlach splits silver atoms by $\\mu_{z}$ — quantization made visible as two spots.",
        detail: "Uniform fields torque; gradients translate — the complete dipole force inventory.",
      },
    ],
    figures: [
      {
        caption: "Rectangular loop: opposite $I\\vec{l} \\times \\vec{B}$ forces on the arms form couple $\\tau = \\mu B\\sin\\phi$ turning $\\vec{\\mu}$ toward $\\vec{B}$.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Current loop torque from arm forces"><rect x="120" y="45" width="160" height="80" fill="none" stroke="currentColor" stroke-width="2"/><line x1="120" y1="85" x2="120" y2="40" stroke="currentColor" stroke-width="2.5"/><line x1="280" y1="85" x2="280" y2="130" stroke="currentColor" stroke-width="2.5"/><text x="100" y="35" font-size="12" fill="currentColor">F up</text><text x="270" y="150" font-size="12" fill="currentColor">F down</text><text x="175" y="30" font-size="12" fill="currentColor">B right</text><text x="170" y="90" font-size="12" fill="currentColor">torque turns loop</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Galvanometer torque",
        problem: "A $50$-turn coil ($A = 4.00 \\times 10^{-4}\\ \\mathrm{m^{2}}$) carries $I = 2.00\\ \\mathrm{mA}$ broadside ($\\phi = 90^{\\circ}$) in $B = 0.200\\ \\mathrm{T}$. Find $\\tau$.",
        steps: [
          { label: "Moment", text: "$\\mu = NIA = (50)(2.00 \\times 10^{-3})(4.00 \\times 10^{-4}) = 4.00 \\times 10^{-5}\\ \\mathrm{A \\cdot m^{2}}$." },
          { label: "Torque", text: "$\\tau = \\mu B = (4.00 \\times 10^{-5})(0.200) = 8.00 \\times 10^{-6}\\ \\mathrm{N \\cdot m}$." },
          { label: "Spring", text: "A hairspring counters with $\\kappa\\theta$: $8\\ \\mu\\mathrm{N \\cdot m}$ deflects full-scale — delicate but readable." },
        ],
        result: "$\\tau = 8.00\\ \\mu\\mathrm{N \\cdot m}$.",
      },
      {
        title: "Flipping a moment",
        problem: "How much work flips $\\mu = 9.27 \\times 10^{-24}\\ \\mathrm{J/T}$ (Bohr magneton) antiparallel in $B = 2.00\\ \\mathrm{T}$?",
        steps: [
          { label: "Energy gap", text: "$\\Delta U = 2\\mu B = 2(9.27 \\times 10^{-24})(2.00) = 3.708 \\times 10^{-23}\\ \\mathrm{J}$." },
          { label: "Frequency", text: "$\\nu = \\Delta U/h = 3.708 \\times 10^{-23}/6.626 \\times 10^{-34} = 5.60 \\times 10^{10}\\ \\mathrm{Hz} = 56.0\\ \\mathrm{GHz}$." },
          { label: "Context", text: "Microwave ESR transitions — electron-spin resonance in a line." },
        ],
        result: "$3.71 \\times 10^{-23}\\ \\mathrm{J}$ ($56\\ \\mathrm{GHz}$ photon).",
      },
    ],
    keyTakeaways: [
      "$\\vec{\\mu} = NI\\vec{A}$ (RHR normal); $\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$, $U = -\\vec{\\mu} \\cdot \\vec{B}$.",
      "Torque turns, energy orients — motors and compasses in two formulas.",
      "Gradients translate dipoles (Stern-Gerlach); uniform fields only torque.",
    ],
    quiz: [
      {
        q: "Loop torque vanishes when:",
        options: ["Broadside ($\\phi = 90^{\\circ}$)", "Aligned ($\\vec{\\mu} \\parallel \\vec{B}$)", "Current is maximal", "Field is maximal"],
        answer: 1,
        explanation: "$\\tau = \\mu B\\sin\\phi = 0$ at $\\phi = 0$ — equilibrium (stable aligned, unstable antialigned).",
      },
      {
        q: "Doubling both $N$ and $I$ changes $\\tau$ by:",
        options: ["$2$ times", "$4$ times", "Unchanged", "$1/2$"],
        answer: 1,
        explanation: "$\\mu = NIA \\propto NI$: $2 \\times 2 = 4$.",
      },
      {
        q: "Stern-Gerlach splitting needs:",
        options: ["Uniform $\\vec{B}$", "Nonuniform $\\vec{B}$ (gradient force)", "Zero field", "Electric field only"],
        answer: 1,
        explanation: "Translation needs $\\nabla(\\vec{\\mu} \\cdot \\vec{B})$; uniform fields only torque.",
      },
    ],
  },
  {
    sectionId: "young-ch27-s8",
    readingTime: 4,
    intro: "Loop torque becomes continuous rotation with a commutator that flips current each half-turn. Young explains the DC motor, back emf, and the motor-generator duality.",
    objectives: [
      "Explain commutator action sustaining rotation",
      "Define back emf and its load dependence",
      "Relate motor and generator operation",
    ],
    concepts: [
      {
        term: "Commutator",
        kind: "definition",
        statement: "A split-ring **commutator** reverses loop current every half-turn, keeping $\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$ forward through dead spots — pulsed DC rotation from steady supply.",
        detail: "Brushes ride the split ring; multi-segment commutators smooth torque ripple in real armatures.",
      },
      {
        term: "Back emf",
        kind: "theorem",
        statement: "Spinning coils cut flux, inducing **back emf** $\\mathcal{E}_{\\mathrm{back}} \\propto \\omega$ opposing the supply: net $I = (V - \\mathcal{E}_{\\mathrm{back}})/R$ self-limits speed.",
        detail: "Stalled motors draw $V/R$ (huge); free spinners draw little — fuses size for stall, efficiency peaks at speed.",
      },
      {
        term: "Motor power",
        kind: "method",
        statement: "Mechanical output $P = \\mathcal{E}_{\\mathrm{back}}I$; heat $I^{2}R$ wastes the rest: efficiency $= \\mathcal{E}_{\\mathrm{back}}/V$ rises toward $1$ as $I$ falls.",
        detail: "A $12\\ \\mathrm{V}$ motor spinning $10\\ \\mathrm{V}$ back emf at $2\\ \\mathrm{A}$ delivers $20\\ \\mathrm{W}$ at $83$ percent.",
      },
      {
        term: "Motor-generator duality",
        kind: "insight",
        statement: "Every motor is a generator: spin its shaft and back emf becomes output — regenerative braking harvests $\\mathcal{E}_{\\mathrm{back}}$ into batteries.",
        detail: "Electric cars run the same machine both ways; Chapter 29 derives the induction behind it.",
      },
      {
        term: "StartingLoading behavior",
        kind: "notation",
        statement: "Loaded motors slow, back emf sags, current rises to meet torque demand — automatic feedback matching supply to load.",
        detail: "Drill stalls bite current (and breakers); unloaded Dremels scream fast on milliamps.",
      },
    ],
    figures: [
      {
        caption: "DC motor: commutator flips $I$ each half-turn so $\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$ always drives forward; spinning induces back emf $\\propto \\omega$.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DC motor loop with commutator"><rect x="120" y="40" width="160" height="90" fill="none" stroke="currentColor" stroke-width="2"/><line x1="120" y1="85" x2="90" y2="85" stroke="currentColor" stroke-width="2"/><line x1="280" y1="85" x2="310" y2="85" stroke="currentColor" stroke-width="2"/><circle cx="90" cy="85" r="12" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="310" cy="85" r="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="60" y="70" font-size="11" fill="currentColor">brush</text><text x="320" y="70" font-size="11" fill="currentColor">brush</text><text x="180" y="30" font-size="12" fill="currentColor">B → torque τ=μ×B</text><path d="M200,40 Q240,70 200,130" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="235" y="90" font-size="12" fill="currentColor">spin</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Motor current versus speed",
        problem: "A $12.0\\ \\mathrm{V}$ motor has $R = 2.00\\ \\Omega$. Find stall current and running current with $\\mathcal{E}_{\\mathrm{back}} = 9.00\\ \\mathrm{V}$.",
        steps: [
          { label: "Stall", text: "$I = V/R = 12.0/2.00 = 6.00\\ \\mathrm{A}$ ($72\\ \\mathrm{W}$ all heat)." },
          { label: "Running", text: "$I = (12.0 - 9.00)/2.00 = 1.50\\ \\mathrm{A}$; output $(9.00)(1.50) = 13.5\\ \\mathrm{W}$ at $75$ percent." },
          { label: "Lesson", text: "Speed buys efficiency; stalls buy smoke — sizes fuses and cooling." },
        ],
        result: "$6.00\\ \\mathrm{A}$ stalled; $1.50\\ \\mathrm{A}$ running ($13.5\\ \\mathrm{W}$ out).",
      },
      {
        title: "Regenerative braking",
        problem: "The motor above coasts with $\\mathcal{E}_{\\mathrm{back}} = 14.0\\ \\mathrm{V}$ into its $12.0\\ \\mathrm{V}$ battery ($R = 2.00\\ \\Omega$ total). Find recharge current.",
        steps: [
          { label: "Net emf", text: "$14.0 - 12.0 = 2.00\\ \\mathrm{V}$ driving backward." },
          { label: "Current", text: "$I = 2.00/2.00 = 1.00\\ \\mathrm{A}$ into the battery." },
          { label: "Power", text: "$(12.0)(1.00) = 12\\ \\mathrm{W}$ recovered (minus $I^{2}R = 2\\ \\mathrm{W}$ heat)." },
        ],
        result: "$1.00\\ \\mathrm{A}$ recharge current.",
      },
    ],
    keyTakeaways: [
      "Commutators flip current each half-turn for continuous torque.",
      "Back emf $\\propto \\omega$ self-limits speed; $I = (V-\\mathcal{E}_{\\mathrm{back}})/R$.",
      "Motors generate when spun — regenerative braking harvests motion.",
    ],
    quiz: [
      {
        q: "A stalled DC motor draws large current because:",
        options: ["Back emf is maximal", "Back emf is zero ($\\omega = 0$), so $I = V/R$", "Resistance vanishes", "Commutators fail"],
        answer: 1,
        explanation: "No spin means no opposing $\\mathcal{E}_{\\mathrm{back}}$; full supply hits $R$.",
      },
      {
        q: "Motor efficiency equals:",
        options: ["$I^{2}R/V$", "$\\mathcal{E}_{\\mathrm{back}}/V$", "$V/\\mathcal{E}_{\\mathrm{back}}$", "Always $50$ percent"],
        answer: 1,
        explanation: "Output $\\mathcal{E}_{\\mathrm{back}}I$ over input $VI$: fast spinners approach $1$.",
      },
      {
        q: "Regenerative braking works because:",
        options: ["Friction pads recharge", "The motor as generator converts motion to $\\mathcal{E}_{\\mathrm{back}}$-driven current", "Batteries reverse chemistry", "Commutators spark"],
        answer: 1,
        explanation: "Spinning coils induce emf; loads (batteries) absorb it as charge.",
      },
    ],
  },
  {
    sectionId: "young-ch27-s9",
    readingTime: 5,
    intro: "A current-carrying slab in $\\vec{B}$ develops a transverse voltage — the Hall effect. Young derives $V_{H} = IB/(nqt)$, uses it to count carriers and sign them, and surveys probes and astrophysics.",
    objectives: [
      "Derive Hall voltage $V_{H} = IB/(nqt)$ from $qE = qv_{d}B$ balance",
      "Determine carrier sign and density from Hall measurements",
      "Describe Hall probes and quantum Hall precision",
    ],
    concepts: [
      {
        term: "Hall effect",
        kind: "definition",
        statement: "Transverse **Hall field** $E_{H} = v_{d}B$ builds until electric $qE_{H}$ balances magnetic $qv_{d}B$; the steady voltage across width $w$ is $V_{H} = E_{H}w = IB/(nqt)$ for thickness $t$.",
        detail: "Silver's $10\\ \\mu\\mathrm{V}$-scale signals need amplification; semiconductors give volts — sensor materials by design.",
      },
      {
        term: "Carrier sign from polarity",
        kind: "method",
        statement: "Electrons pile on one face, holes on the other: $V_{H}$ polarity directly reports whether $n$- or $p$-carriers dominate — bismuth's electron-like versus zinc's hole-like conduction settled this way.",
        detail: "Some metals (Be, Zn) show hole-like Hall signs despite electron bands — Fermi-surface curvature decides, not chemistry.",
      },
      {
        term: "Hall coefficient",
        kind: "notation",
        statement: "**Hall coefficient** $R_{H} = E_{H}/(JB) = 1/(nq)$ inverts to carrier density $n = 1/(e|R_{H}|)$: copper's $R_{H} = -5.3 \\times 10^{-11}\\ \\mathrm{m^{3}/C}$ gives $n = 1.18 \\times 10^{29}\\ \\mathrm{m^{-3}}$.",
        detail: "One measurement counts carriers — the semiconductor industry's routine wafer check.",
      },
      {
        term: "Hall probes",
        kind: "insight",
        statement: "Calibrated thin-film probes read $B$ via $V_{H}$ from $\\mu\\mathrm{T}$ to teslas with millitesla accuracy — gaussmeters in every magnet lab.",
        detail: "Three-axis probes map MRI fringe fields; cryogenic probes survive tesla bore fields.",
      },
      {
        term: "Quantum Hall effect",
        kind: "law",
        statement: "At cryogenic $T$ and high $B$, 2D gases quantize $R_{H} = h/(\\nu e^{2})$ in integer (von Klitzing) or fractional (Laughlin) steps — resistance standard to $10^{-9}$ via $R_{K} = h/e^{2} = 25{,}812.8\\ \\Omega$.",
        detail: "Topology protects the plateaus: disorder-immune quantization redefining the ohm.",
      },
    ],
    figures: [
      {
        caption: "Hall slab: $I\\vec{B}$ deflection piles charge until $qE_{H} = qv_{d}B$; transverse $V_{H} = IB/(nqt)$ reports sign and density.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hall effect charge separation"><rect x="80" y="50" width="240" height="70" fill="none" stroke="currentColor" stroke-width="2"/><line x1="80" y1="85" x2="140" y2="85" stroke="currentColor" stroke-width="2.5"/><text x="145" y="89" font-size="12" fill="currentColor">I (vd slow)</text><text x="180" y="40" font-size="12" fill="currentColor">B out of page</text><text x="330" y="70" font-size="12" fill="currentColor">+ VH</text><text x="330" y="110" font-size="12" fill="currentColor">− (e− pile)</text><line x1="320" y1="60" x2="320" y2="110" stroke="currentColor" stroke-width="1.5"/></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Hall voltage in copper",
        problem: "Copper strip ($t = 0.100\\ \\mathrm{mm}$, $n = 8.5 \\times 10^{28}$) carries $I = 5.00\\ \\mathrm{A}$ in $B = 1.00\\ \\mathrm{T}$. Find $V_{H}$.",
        steps: [
          { label: "Formula", text: "$V_{H} = IB/(nqt) = (5.00)(1.00)/(8.5 \\times 10^{28} \\times 1.602 \\times 10^{-19} \\times 10^{-4})$." },
          { label: "Denominator", text: "$(8.5 \\times 10^{28})(1.602 \\times 10^{-23}) = 1.362 \\times 10^{6}$." },
          { label: "Voltage", text: "$V_{H} = 5.00/1.362 \\times 10^{6} = 3.67 \\times 10^{-6}\\ \\mathrm{V} = 3.67\\ \\mu\\mathrm{V}$." },
        ],
        result: "$V_{H} = 3.67\\ \\mu\\mathrm{V}$ — lock-in-amplifier territory.",
      },
      {
        title: "Counting semiconductor carriers",
        problem: "A silicon slab ($t = 0.500\\ \\mathrm{mm}$) with $I = 1.00\\ \\mathrm{mA}$, $B = 0.500\\ \\mathrm{T}$ shows $V_{H} = 12.5\\ \\mathrm{mV}$. Find $n$.",
        steps: [
          { label: "Invert", text: "$n = IB/(qV_{H}t) = (10^{-3})(0.5)/(1.602 \\times 10^{-19} \\times 0.0125 \\times 5.00 \\times 10^{-4})$." },
          { label: "Denominator", text: "$(1.602 \\times 10^{-19})(6.25 \\times 10^{-6}) = 1.001 \\times 10^{-24}$." },
          { label: "Density", text: "$n = 5.00 \\times 10^{-4}/1.001 \\times 10^{-24} = 4.99 \\times 10^{20}\\ \\mathrm{m^{-3}}$ — lightly doped silicon." },
        ],
        result: "$n = 5.0 \\times 10^{20}\\ \\mathrm{m^{-3}}$.",
      },
    ],
    keyTakeaways: [
      "$V_{H} = IB/(nqt)$ from $qE_{H} = qv_{d}B$ balance.",
      "Polarity signs carriers; $R_{H} = 1/(nq)$ counts them.",
      "Probes read $B$; quantum plateaus $h/(\\nu e^{2})$ define resistance.",
    ],
    quiz: [
      {
        q: "Hall voltage polarity tells:",
        options: ["Field strength only", "Carrier sign (electrons versus holes)", "Temperature", "Wire length"],
        answer: 1,
        explanation: "Deflection piles whichever carrier flows; the charged face's sign names the carrier.",
      },
      {
        q: "Thinner Hall slabs ($t$ small) give:",
        options: ["Smaller $V_{H}$", "Larger $V_{H} \\propto 1/t$", "Unchanged $V_{H}$", "Zero $V_{H}$"],
        answer: 1,
        explanation: "$V_{H} = IB/(nqt)$: thin films amplify — sensor design in one formula.",
      },
      {
        q: "The von Klitzing constant $R_{K} = h/e^{2}$ anchors:",
        options: ["The volt", "The ohm via quantum Hall plateaus", "The tesla", "The ampere-hour"],
        answer: 1,
        explanation: "$25{,}812.8\\ \\Omega$ plateaus reproduce to $10^{-9}$ — metrology's resistance anchor.",
      },
    ],
  },
]
