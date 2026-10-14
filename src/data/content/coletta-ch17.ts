import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 17: The Electric Field (Sections 17.1 – 17.5)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh17Content: SectionContent[] = [
  {
    sectionId: "coletta-ch17-s1",
    readingTime: 5,
    intro: "Rubbed amber lifts straw, and a combed balloon sticks to a wall: charge is real and everyday. Coletta starts electrostatics with what charge is, how it moves in conductors versus insulators, and the twin rules of conservation and quantization. Everything in this chapter rests on these facts.",
    objectives: [
      "State the properties of charge: two signs, attraction-repulsion rule, conservation, and quantization",
      "Distinguish conductors, insulators, and semiconductors by electron mobility",
      "Explain charging by friction, conduction, and induction with electron motion"
    ],
    concepts: [
      {
        term: "Electric charge",
        kind: "definition",
        statement: "Charge is a fundamental property with two signs: **like charges repel** and **unlike charges attract**, with total charge measured in coulombs (C).",
        detail: "Benjamin Franklin named the signs positive and negative, and the electron carries $-e$ while the proton carries $+e$ with $e = 1.60 \\times 10^{-19}$ C."
      },
      {
        term: "Conservation of charge",
        kind: "law",
        statement: "The net charge of an isolated system is **conserved**: charge is never created or destroyed, only separated or transferred, so $\\sum q_{before} = \\sum q_{after}$.",
        detail: "Rubbing glass with silk moves electrons to the silk, leaving equal and opposite charges whose sum is still zero."
      },
      {
        term: "Quantization of charge",
        kind: "law",
        statement: "Every observable charge is an integer multiple $q = Ne$ of the elementary charge $e = 1.60 \\times 10^{-19}$ C, as Millikan's oil-drop experiment proved.",
        detail: "A charge of $1.0$ C therefore contains about $6.2 \\times 10^{18}$ electrons, which is why single-electron steps go unnoticed in circuits."
      },
      {
        term: "Conductors and insulators",
        kind: "definition",
        statement: "**Conductors** (metals) have free electrons that spread over the surface in equilibrium, while **insulators** pin electrons to atoms so charge stays where it is placed.",
        detail: "Touching a charged metal sphere with an identical neutral one splits the charge evenly because the metal lets electrons flow until both are equipotentials."
      },
      {
        term: "Charging by induction",
        kind: "method",
        statement: "Bring a charged rod near a grounded conductor and opposite charge is attracted while like charge escapes to ground; removing the ground traps the induced charge without ever touching the rod.",
        detail: "An electroscope charged this way ends with the opposite sign to the rod, whereas charging by direct contact copies the rod's own sign."
      }
    ],
    examples: [
      {
        title: "Electrons in a nanocoulomb",
        problem: "A plastic rod holds $-3.2$ nC. How many excess electrons is that?",
        steps: [
          { label: "Convert", text: "$q = 3.2 \\times 10^{-9}$ C of excess negative charge." },
          { label: "Divide by e", text: "$N = q/e = 3.2 \\times 10^{-9}/1.60 \\times 10^{-19} = 2.0 \\times 10^{10}$." },
          { label: "Interpret", text: "Twenty billion electrons, still a negligible fraction of the rod's atoms." }
        ],
        result: "$2.0 \\times 10^{10}$ excess electrons."
      },
      {
        title: "Splitting charge between spheres",
        problem: "A metal sphere with $+6.0$ nC touches an identical neutral sphere, then they separate. What is each charge?",
        steps: [
          { label: "Conservation", text: "Total $+6.0$ nC is conserved across both spheres." },
          { label: "Symmetry", text: "Identical conductors share evenly, so each takes half." },
          { label: "Result", text: "Each sphere ends with $+3.0$ nC." }
        ],
        result: "$+3.0$ nC on each sphere."
      }
    ],
    keyTakeaways: [
      "Charge comes in two signs, is conserved, and is quantized in units of $e$.",
      "Metals conduct by free electrons while insulators localize charge.",
      "Induction charges without contact; conduction copies the sign."
    ],
    quiz: [
      {
        q: "A glass rod rubbed with silk becomes positive because:",
        options: ["Positive charge is created", "Protons move onto the rod", "Electrons move from rod to silk", "Neutrons leave the rod"],
        answer: 2,
        explanation: "Only electrons transfer; the rod loses electrons to the silk, leaving a net positive charge with total charge conserved."
      },
      {
        q: "Which charge is impossible for an isolated object?",
        options: ["$+3e$", "$-5e$", "$+2.5e$", "$-10e$"],
        answer: 2,
        explanation: "Charge must be an integer multiple of $e$, so a half-integer $2.5e$ cannot occur."
      },
      {
        q: "A neutral conductor is grounded near a positive rod, then the ground is removed first. The conductor ends:",
        options: ["Negative", "Neutral", "Discharged to zero field", "Positive"],
        answer: 0,
        explanation: "Electrons drawn up from ground are trapped when it is removed, leaving net negative charge opposite to the rod."
      }
    ]
  },
  {
    sectionId: "coletta-ch17-s2",
    readingTime: 6,
    intro: "Coulomb's law is the Newton gravitation of electrostatics, but vastly stronger and with two signs. Coletta states it for point charges, applies superposition to groups of charges, and compares electrical with gravitational force directly. The worked numbers show why atoms ignore gravity.",
    objectives: [
      "Compute forces with $F = k|q_{1}q_{2}|/r^{2}$ including direction along the line of centers",
      "Add Coulomb forces as vectors using superposition for multiple charges",
      "Compare electric and gravitational forces between elementary particles"
    ],
    concepts: [
      {
        term: "Coulomb's law",
        kind: "law",
        statement: "Point charges attract or repel with $F = k|q_{1}q_{2}|/r^{2}$ along the line joining them, where $k = 1/4\\pi\\epsilon_{0} = 8.99 \\times 10^{9}$ N·m$^{2}$/C$^{2}$.",
        detail: "The inverse square matches gravity, but the constant $k$ makes electrical forces some $10^{42}$ times stronger for protons."
      },
      {
        term: "Superposition of forces",
        kind: "method",
        statement: "Each pair of charges interacts independently, so the net force on any charge is the **vector sum** $\\vec{F} = \\vec{F}_{1} + \\vec{F}_{2} + \\cdots$ over all partners.",
        detail: "Symmetric arrangements cancel by components: two equal repulsions at right angles sum along the bisector with magnitude $\\sqrt{2}F$."
      },
      {
        term: "Point-charge idealization",
        kind: "insight",
        statement: "Any spherically symmetric charge distribution acts externally as a **point charge** at its center, which is why Coulomb's law applies to nuclei, ions, and charged spheres alike.",
        detail: "Coletta treats protons and metal spheres as points whenever their separation greatly exceeds their radii."
      },
      {
        term: "Electric versus gravitational force",
        kind: "theorem",
        statement: "For two protons, $F_{e}/F_{g} = k e^{2}/G m_{p}^{2} \\approx 1.2 \\times 10^{36}$, so gravity is utterly negligible inside atoms and molecules.",
        detail: "Bulk matter feels gravity only because opposite charges cancel electrically while mass always adds."
      },
      {
        term: "Equilibrium of three charges",
        kind: "method",
        statement: "A charge between two fixed like charges balances where the two repulsions cancel, $kQq/x^{2} = kQq/(L - x)^{2}$, giving the midpoint for equal fixed charges.",
        detail: "Stability needs checking in all directions: balance along the line is unstable sideways, a hint of Earnshaw's theorem."
      }
    ],
    examples: [
      {
        title: "Force between nanocoulombs",
        problem: "Charges $+4.0$ nC and $-6.0$ nC sit $3.0$ cm apart. Find the force magnitude.",
        steps: [
          { label: "Insert into Coulomb", text: "$F = k|q_{1}q_{2}|/r^{2} = 8.99 \\times 10^{9} \\times 4.0 \\times 10^{-9} \\times 6.0 \\times 10^{-9}/(0.030)^{2}$." },
          { label: "Numerator", text: "$8.99 \\times 10^{9} \\times 2.40 \\times 10^{-17} = 2.158 \\times 10^{-7}$." },
          { label: "Divide by $r^{2}$", text: "$2.158 \\times 10^{-7}/9.0 \\times 10^{-4} \\approx 2.40 \\times 10^{-4}$ N, attractive." }
        ],
        result: "About $2.4 \\times 10^{-4}$ N toward each other."
      },
      {
        title: "Hydrogen electric versus gravity",
        problem: "Compare the electric and gravitational forces between the proton and electron at $r = 0.53 \\times 10^{-10}$ m.",
        steps: [
          { label: "Electric", text: "$F_{e} = ke^{2}/r^{2} = 8.99 \\times 10^{9} \\times (1.60 \\times 10^{-19})^{2}/(0.53 \\times 10^{-10})^{2} \\approx 8.20 \\times 10^{-8}$ N." },
          { label: "Gravitational", text: "$F_{g} = Gm_{p}m_{e}/r^{2} = 6.67 \\times 10^{-11} \\times 1.67 \\times 10^{-27} \\times 9.11 \\times 10^{-31}/(0.53 \\times 10^{-10})^{2} \\approx 3.6 \\times 10^{-47}$ N." },
          { label: "Ratio", text: "$F_{e}/F_{g} \\approx 2.3 \\times 10^{39}$, so gravity can be ignored." }
        ],
        result: "$F_{e} \\approx 8.2 \\times 10^{-8}$ N dwarfs $F_{g} \\approx 3.6 \\times 10^{-47}$ N."
      }
    ],
    keyTakeaways: [
      "Coulomb forces follow $F = k|q_{1}q_{2}|/r^{2}$ along the line of centers.",
      "Multiple charges add as vectors by superposition.",
      "Electric forces beat gravity by roughly $10^{36}$–$10^{42}$ for particles."
    ],
    quiz: [
      {
        q: "Separation between two point charges doubles. The force becomes:",
        options: ["One quarter", "Four times", "Twice", "Half"],
        answer: 0,
        explanation: "The inverse-square law gives $1/2^{2} = 1/4$ of the original force."
      },
      {
        q: "Three charges lie on a line with $+Q$ at each end and $-q$ free between them. Where does $-q$ balance for equal $Q$?",
        options: ["Nowhere; impossible", "At the midpoint", "One quarter from the left", "Against the right charge"],
        answer: 1,
        explanation: "Equal repulsions need equal distances, so $x = L - x$ puts the balance at the midpoint."
      },
      {
        q: "Why is gravity ignored inside an atom?",
        options: ["It cancels exactly", "It is $10^{39}$ times weaker than the electric force", "Electrons have no mass", "Coulomb's law forbids it"],
        answer: 1,
        explanation: "The computed ratio $F_{e}/F_{g} \\approx 10^{39}$ makes gravity utterly negligible at atomic scale."
      }
    ]
  },
  {
    sectionId: "coletta-ch17-s3",
    readingTime: 6,
    intro: "The electric field lets us describe the influence of charges without tracking every victim charge. Coletta defines $\\vec{E} = \\vec{F}/q_{0}$, computes it for point charges and dipoles, and shows how to map forces onto any new charge instantly. Field thinking replaces action at a distance.",
    objectives: [
      "Define $\\vec{E} = \\vec{F}/q_{0}$ and find the field of a point charge",
      "Superpose fields from several charges as vectors at a field point",
      "Describe the dipole field and the torque $\\vec{\\tau} = \\vec{p} \\times \\vec{E}$ on a dipole"
    ],
    concepts: [
      {
        term: "Electric field",
        kind: "definition",
        statement: "The **electric field** $\\vec{E} = \\vec{F}/q_{0}$ is the force per unit positive test charge in N/C, pointing away from positive and toward negative sources.",
        detail: "A $2.0$ nC charge in a $500$ N/C field feels $F = qE = 1.0$ micronewton along $\\vec{E}$ (opposite for negative $q$)."
      },
      {
        term: "Field of a point charge",
        kind: "theorem",
        statement: "A point charge $Q$ produces $E = k|Q|/r^{2}$ radially, $\\vec{E} = kQ\\hat{r}/r^{2}$, outward for $Q > 0$ and inward for $Q < 0$.",
        detail: "At $10$ cm from $1.0$ nC the field is $E = 8.99 \\times 10^{9} \\times 10^{-9}/0.01 = 899$ N/C."
      },
      {
        term: "Superposition of fields",
        kind: "method",
        statement: "Fields add as vectors at the field point: $\\vec{E} = \\sum kq_{i}\\hat{r}_{i}/r_{i}^{2}$, computed component by component with $E_{x} = \\sum E_{i}\\cos\\theta_{i}$.",
        detail: "At the midpoint between equal opposite charges both fields point the same way and double; between equal like charges they cancel."
      },
      {
        term: "Electric dipole",
        kind: "definition",
        statement: "A **dipole** of moment $\\vec{p} = q\\vec{d}$ (from $-q$ to $+q$) in a uniform field feels torque $\\tau = pE\\sin\\theta$ aligning it with the field and energy $U = -\\vec{p} \\cdot \\vec{E}$.",
        detail: "Polar water molecules rotate toward an external field by exactly this torque, the basis of dielectric response in Chapter 18."
      },
      {
        term: "Far field of a dipole",
        kind: "insight",
        statement: "Far from a dipole the opposite charges nearly cancel, leaving $E \\propto 1/r^{3}$ on axis ($E = 2kp/r^{3}$) instead of the $1/r^{2}$ of a lone charge.",
        detail: "Neutral matter therefore reaches out only weakly, which is why intermolecular forces are short-ranged."
      }
    ],
    figures: [
      {
        caption: "Superposed fields $\\vec{E}_{1}$ and $\\vec{E}_{2}$ add as vectors at field point $P$",
        svg: '<svg role="img" aria-label="Superposed fields vecE_1 and vecE_2 add as vectors at field point P" viewBox="0 0 400 170" width="100%" height="170"><circle cx="90" cy="85" r="7" fill="currentColor"/><text x="90" y="112" text-anchor="middle" font-size="13" fill="currentColor">+q1</text><circle cx="310" cy="85" r="7" fill="currentColor"/><text x="310" y="112" text-anchor="middle" font-size="13" fill="currentColor">+q2</text><circle cx="200" cy="45" r="5" fill="none" stroke="currentColor" stroke-width="2"/><line x1="97" y1="80" x2="192" y2="49" stroke="currentColor" stroke-width="1.6"/><line x1="303" y1="80" x2="208" y2="49" stroke="currentColor" stroke-width="1.6"/><line x1="200" y1="45" x2="200" y2="12" stroke="currentColor" stroke-width="2"/><polygon points="200,6 195,16 205,16" fill="currentColor"/><text x="140" y="52" font-size="12" fill="currentColor">E1</text><text x="248" y="52" font-size="12" fill="currentColor">E2</text><text x="212" y="28" font-size="12" fill="currentColor">E net</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Field between opposite charges",
        problem: "Charges $+5.0$ nC and $-5.0$ nC are $6.0$ cm apart. Find $\\vec{E}$ at the midpoint.",
        steps: [
          { label: "One charge contribution", text: "Distance $r = 0.030$ m, so $E_{1} = kq/r^{2} = 8.99 \\times 10^{9} \\times 5.0 \\times 10^{-9}/9.0 \\times 10^{-4} \\approx 4.99 \\times 10^{4}$ N/C." },
          { label: "Directions", text: "Away from $+$ and toward $-$, both point from $+$ to $-$, so they add." },
          { label: "Total", text: "$E = 2E_{1} \\approx 9.99 \\times 10^{4}$ N/C from positive to negative." }
        ],
        result: "About $1.0 \\times 10^{5}$ N/C pointing toward the negative charge."
      },
      {
        title: "Force from a given field",
        problem: "An electron sits in a $2.5 \\times 10^{3}$ N/C field pointing east. What force does it feel?",
        steps: [
          { label: "Magnitude", text: "$F = eE = 1.60 \\times 10^{-19} \\times 2.5 \\times 10^{3} = 4.0 \\times 10^{-16}$ N." },
          { label: "Direction", text: "Negative charge moves opposite the field, so west." },
          { label: "Acceleration note", text: "$a = F/m_{e} \\approx 4.4 \\times 10^{14}$ m/s$^{2}$, enormous because the electron is so light." }
        ],
        result: "$4.0 \\times 10^{-16}$ N west."
      }
    ],
    keyTakeaways: [
      "Fields give force per unit charge via $\\vec{F} = q\\vec{E}$ for any new charge.",
      "Point-charge fields $kQ/r^{2}$ superpose as vectors at each field point.",
      "Dipoles align with torque $\\vec{\\tau} = \\vec{p} \\times \\vec{E}$ and fade as $1/r^{3}$."
    ],
    quiz: [
      {
        q: "A $+3$ nC and $-3$ nC pair: at the exact midpoint the field points:",
        options: ["Toward the negative charge", "Zero by symmetry", "Perpendicular to the axis", "Toward the positive charge"],
        answer: 0,
        explanation: "Both contributions point from + to −, so they reinforce toward the negative charge."
      },
      {
        q: "Distance from a point charge triples. Field magnitude becomes:",
        options: ["$1/9$", "$3$ times", "$1/3$", "$1/6$"],
        answer: 0,
        explanation: "$E \\propto 1/r^{2}$, so tripling $r$ gives one ninth the field."
      },
      {
        q: "A dipole in a uniform field has minimum energy when:",
        options: ["At any angle", "Anti-aligned with the field", "Perpendicular to the field", "Aligned with the field"],
        answer: 3,
        explanation: "$U = -pE\\cos\\theta$ is lowest at $\\theta = 0$, aligned with the field."
      }
    ]
  },
  {
    sectionId: "coletta-ch17-s4",
    readingTime: 7,
    intro: "Real objects hold smeared-out charge, not points. Coletta builds fields of rods, rings, disks, and plates by slicing them into $dq$ pieces and integrating $d\\vec{E}$, then harvests the symmetry shortcuts. The infinite-plane result underlies every capacitor in the next chapter.",
    objectives: [
      "Set up $dE = k\\,dq/r^{2}$ integrals with $\u03bb$, $\u03c3$ charge densities",
      "State the ring, disk, and infinite-plane results and their limits",
      "Find the uniform field $E = \\sigma/\\epsilon_{0}$ between oppositely charged plates"
    ],
    concepts: [
      {
        term: "Charge densities",
        kind: "notation",
        statement: "Extended charge uses $\\lambda = dq/dl$ (C/m), $\\sigma = dq/dA$ (C/m$^{2}$), and $\\rho = dq/dV$ (C/m$^{3}$), with $dq$ replacing $q$ in every point formula.",
        detail: "A rod of length $L$ with uniform $\\lambda$ carries $Q = \\lambda L$, and each slice $dx$ contributes $dq = \\lambda\\,dx$."
      },
      {
        term: "Integration method",
        kind: "method",
        statement: "Slice the object into $dq$, write $d\\vec{E} = k\\,dq\\,\\hat{r}/r^{2}$, kill components by symmetry, and integrate the survivor: $E = \\int dE_{\\text{kept}}$.",
        detail: "On the axis of a symmetric ring every radial component cancels and only the axial projection $dE\\cos\\theta$ survives."
      },
      {
        term: "Ring and disk on axis",
        kind: "theorem",
        statement: "A ring of radius $R$ and charge $Q$ gives $E = kQx/(x^{2} + R^{2})^{3/2}$ on axis, and a disk of density $\\sigma$ gives $E = (\\sigma/2\\epsilon_{0})(1 - x/\\sqrt{x^{2} + R^{2}})$.",
        detail: "Far away ($x \\gg R$) the ring returns to $kQ/x^{2}$ and the disk to $kQ/x^{2}$ with $Q = \\sigma\\pi R^{2}$, as distant objects look pointlike."
      },
      {
        term: "Infinite plane",
        kind: "theorem",
        statement: "An infinite sheet of density $\\sigma$ produces the uniform field $E = \\sigma/2\\epsilon_{0}$ on each side, pointing away for $\\sigma > 0$.",
        detail: "Two opposite sheets superpose to $E = \\sigma/\\epsilon_{0}$ between them and zero outside, the capacitor field of Chapter 18."
      },
      {
        term: "Finite rod",
        kind: "theorem",
        statement: "A finite rod gives $E = 2k\\lambda\\sin\\phi/y$ style results that reduce to $E = 2k\\lambda/y = \\lambda/2\\pi\\epsilon_{0}y$ for the infinite line.",
        detail: "Near the middle of a long charged rod the field falls as $1/y$ and points radially outward, the cylindrical analogue of the plane result."
      }
    ],
    examples: [
      {
        title: "Ring on axis",
        problem: "A ring of radius $5.0$ cm holds $20$ nC. Find $E$ on axis $12$ cm from center.",
        steps: [
          { label: "Formula", text: "$E = kQx/(x^{2} + R^{2})^{3/2}$ with $x = 0.12$ m and $R = 0.050$ m." },
          { label: "Denominator", text: "$(0.0144 + 0.0025)^{3/2} = (0.0169)^{3/2} = 0.0169 \\times 0.13 = 2.197 \\times 10^{-3}$." },
          { label: "Numerator", text: "$kQx = 8.99 \\times 10^{9} \\times 20 \\times 10^{-9} \\times 0.12 = 21.58$, so $E = 21.58/2.197 \\times 10^{-3} \\approx 9822$ N/C." }
        ],
        result: "About $9.8 \\times 10^{3}$ N/C along the axis."
      },
      {
        title: "Capacitor plates",
        problem: "Opposite plates carry $\\sigma = \\pm 4.4 \\times 10^{-6}$ C/m$^{2}$. Find the field between them.",
        steps: [
          { label: "Use plane superposition", text: "$E = \\sigma/\\epsilon_{0}$ between, zero outside." },
          { label: "Compute", text: "$E = 4.4 \\times 10^{-6}/8.85 \\times 10^{-12} \\approx 4.97 \\times 10^{5}$ N/C." },
          { label: "Direction", text: "From positive to negative plate, uniform throughout the gap." }
        ],
        result: "About $5.0 \\times 10^{5}$ N/C."
      }
    ],
    keyTakeaways: [
      "Extended charge is handled by $dq$ integration with symmetry killing components.",
      "Ring, disk, and rod formulas all return to $kQ/r^{2}$ far away.",
      "Opposite plates give the uniform capacitor field $E = \\sigma/\\epsilon_{0}$."
    ],
    quiz: [
      {
        q: "On-axis field at the exact center of a uniformly charged ring is:",
        options: ["Maximum", "$kQ/R^{2}$", "Zero", "Infinite"],
        answer: 2,
        explanation: "Every $dq$ pulls equally in all radial directions at the center, so the vector sum cancels to zero."
      },
      {
        q: "Field between large opposite plates of density $\\sigma$ is:",
        options: ["$\\sigma/\\epsilon_{0}$", "$2\\sigma/\\epsilon_{0}$", "Zero", "$\\sigma/2\\epsilon_{0}$"],
        answer: 0,
        explanation: "Each sheet gives $\\sigma/2\\epsilon_{0}$ and they reinforce between the plates while canceling outside."
      },
      {
        q: "Near a long charged wire the field falls as:",
        options: ["Constant", "$r^{2}$", "$1/r^{2}$", "$1/r$"],
        answer: 3,
        explanation: "Cylindrical symmetry spreads flux over $2\\pi rL$, giving $E = \\lambda/2\\pi\\epsilon_{0}r$."
      }
    ]
  },
  {
    sectionId: "coletta-ch17-s5",
    readingTime: 5,
    intro: "Field lines turn vector calculus into pictures: direction, strength, and superposition at a glance. Coletta states the drawing rules precisely and uses them to diagnose charge arrangements and conductor behavior. A correct sketch is half of every electrostatics solution.",
    objectives: [
      "State the four field-line rules and sketch lines for dipoles and pairs",
      "Read field strength from line density and direction from tangents",
      "Explain why lines meet conductors perpendicularly and never cross"
    ],
    concepts: [
      {
        term: "Field-line construction",
        kind: "definition",
        statement: "A **field line** is everywhere tangent to $\\vec{E}$, drawn out of positive and into negative charge with number proportional to $|q|$.",
        detail: "An isolated $+2Q$ therefore sprouts twice as many lines as $+Q$, and a dipole's lines run from the positive to the negative charge."
      },
      {
        term: "Line rules",
        kind: "law",
        statement: "Lines never cross, never form closed loops in electrostatics, start or end only on charges (or infinity), and crowd where $E$ is strong.",
        detail: "Crossing would give two field directions at one point, which contradicts the unique vector sum $\\vec{E}$ there."
      },
      {
        term: "Density means strength",
        kind: "insight",
        statement: "The number of lines per unit perpendicular area measures $|\\vec{E}|$: dense bundles are strong fields and sparse regions are weak.",
        detail: "Between close opposite plates the lines are straight, parallel, and evenly spaced, picturing the uniform capacitor field."
      },
      {
        term: "Conductors and lines",
        kind: "theorem",
        statement: "In equilibrium the conductor surface is an equipotential, so field lines meet it **perpendicularly** and the interior holds $\\vec{E} = 0$.",
        detail: "Any parallel component would drag surface electrons until it vanished, which is why sharp points crowd lines and spark first."
      },
      {
        term: "Sketching method",
        kind: "method",
        statement: "Start symmetric lines from each charge, bend them by mutual repulsion or attraction, and check counts against $|q|$ ratios before declaring the sketch done.",
        detail: "For $+2Q$ beside $-Q$, twice as many lines leave the positive as enter the negative, with the surplus escaping to infinity." }
    ],
    figures: [
      {
        caption: "Dipole field lines run from $+q$ to $−q$ with density marking $|\\vec{E}|$",
        svg: '<svg role="img" aria-label="Dipole field lines run from +q to −q with density marking |vecE|" viewBox="0 0 400 150" width="100%" height="150"><circle cx="140" cy="75" r="8" fill="currentColor"/><text x="140" y="103" text-anchor="middle" font-size="13" fill="currentColor">+q</text><circle cx="260" cy="75" r="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="260" y="103" text-anchor="middle" font-size="13" fill="currentColor">−q</text><path d="M148,75 L252,75" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M144,60 C180,20 220,20 256,60" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M144,90 C180,130 220,130 256,90" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M136,58 C100,30 100,120 136,92" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><path d="M264,58 C300,30 300,120 264,92" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.7"/></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Counting lines",
        problem: "A $+6$ nC charge sits near a $-3$ nC charge. If $12$ lines leave the positive, how many enter the negative?",
        steps: [
          { label: "Line count rule", text: "Lines entering a charge are proportional to $|q|$." },
          { label: "Ratio", text: "The negative has half the magnitude, so it collects half the lines: $6$." },
          { label: "Remainder", text: "The other $6$ lines escape to infinity." }
        ],
        result: "$6$ lines enter the negative charge."
      },
      {
        title: "Conductor interior",
        problem: "A hollow metal box sits in an external field. What is the field inside the metal and in the cavity?",
        steps: [
          { label: "In the metal", text: "$\\vec{E} = 0$ in electrostatic equilibrium, since free charges cancel any interior field." },
          { label: "In the empty cavity", text: "With no enclosed charge the cavity field is also zero; lines terminate on the outer surface." },
          { label: "Use", text: "This shielding is a Faraday cage, protecting electronics from external fields." }
        ],
        result: "Zero field in both metal and empty cavity."
      }
    ],
    keyTakeaways: [
      "Lines are tangent to $\\vec{E}$ with counts proportional to charge.",
      "Density encodes strength; lines never cross or close in electrostatics.",
      "Conductors force perpendicular incidence and zero interior field."
    ],
    quiz: [
      {
        q: "Field lines of an electrostatic field cannot:",
        options: ["Spread with distance", "Start on positive charge", "End on negative charge", "Cross each other"],
        answer: 3,
        explanation: "Each point has one net field vector, so two crossing lines would demand two directions at once."
      },
      {
        q: "Near a sharp metal point the field is strong because:",
        options: ["Lines crowd at high curvature", "Charge is created there", "Insulators gather there", "Gravity adds to it"],
        answer: 0,
        explanation: "Surface charge piles at sharp curvature to keep the surface equipotential, crowding the lines."
      },
      {
        q: "Inside an isolated conductor in equilibrium:",
        options: ["$E = 0$", "$E$ points along the surface", "$E$ oscillates", "$E$ is uniform nonzero"],
        answer: 0,
        explanation: "Free electrons shift until they cancel every interior component, leaving zero field."
      }
    ]
  }
]
