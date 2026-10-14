import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 21
// Electric Charge and Electric Field (Sections 21.1 – 21.7)
// ============================================================================

export const youngCh21Content: SectionContent[] = [
  {
    sectionId: "young-ch21-s1",
    readingTime: 4,
    intro: "Rubbed amber lifts straw — the oldest electrical experiment opens Young's E&M. Charge comes in two signs, is conserved and quantized, and two centuries of friction, contact, and oil drops pin down its rules.",
    objectives: [
      "Distinguish positive from negative charge and their interactions",
      "State charge conservation and quantization with the elementary charge",
      "Describe charging by friction and contact at the electron level",
    ],
    concepts: [
      {
        term: "Two kinds of charge",
        kind: "definition",
        statement: "Charge comes in **positive** and **negative** types: like charges repel, unlike attract, with neutral matter containing equal amounts.",
        detail: "Franklin named the surplus on rubbed glass positive; electrons carry the negative $-e$, protons $+e$.",
      },
      {
        term: "Conservation of charge",
        kind: "law",
        statement: "The algebraic sum of charge in an isolated system is constant: rubbing moves electrons but creates none, and pair creation makes $+e$ with $-e$.",
        detail: "A $+3\\ \\mathrm{nC}$ rod and $-3\\ \\mathrm{nC}$ cloth sum to zero — every charging process balances its books.",
      },
      {
        term: "Quantization and the electron",
        kind: "definition",
        statement: "Charge is quantized in units of $e = 1.602 \\times 10^{-19}\\ \\mathrm{C}$; Millikan's oil drops measured $q = Ne$ for integer $N$, and quarks carry $\\pm e/3$, $\\pm 2e/3$ but never appear free.",
        detail: "A $1\\ \\mathrm{nC}$ charge is $6.24 \\times 10^{9}$ electrons — discreteness is invisible at laboratory scales.",
      },
      {
        term: "Charging by friction and contact",
        kind: "method",
        statement: "Rubbing transfers electrons by work-function differences (triboelectric series); touching conductors then shares net charge by conduction until potentials equalize.",
        detail: "Glass rubbed with silk goes positive (loses electrons); rubber with fur goes negative (gains them).",
      },
      {
        term: "Electrostatic versus gravitational force",
        kind: "insight",
        statement: "Two protons repel electrically $10^{36}$ times harder than they attract gravitationally — electrostatics dominates the microscopic world while gravity rules the neutral macroscopic one.",
        detail: "$k e^{2}/(Gm_{p}^{2}) = (8.99 \\times 10^{9})(1.602 \\times 10^{-19})^{2}/(6.67 \\times 10^{-11})(1.673 \\times 10^{-27})^{2} \\approx 1.24 \\times 10^{36}$.",
      },
    ],
    examples: [
      {
        title: "Electrons in a nanocoulomb",
        problem: "A plastic rod carries $-5.00\\ \\mathrm{nC}$. How many excess electrons is that?",
        steps: [
          { label: "Convert", text: "$Q = -5.00 \\times 10^{-9}\\ \\mathrm{C}$." },
          { label: "Divide", text: "$N = |Q|/e = 5.00 \\times 10^{-9}/1.602 \\times 10^{-19} = 3.121 \\times 10^{10}$." },
          { label: "Mass check", text: "$(3.12 \\times 10^{10})(9.11 \\times 10^{-31}) = 2.84 \\times 10^{-20}\\ \\mathrm{kg}$ — unweighable." },
        ],
        result: "$3.12 \\times 10^{10}$ excess electrons.",
      },
      {
        title: "Charge sharing by contact",
        problem: "Identical metal spheres carry $+6.0\\ \\mathrm{nC}$ and $-2.0\\ \\mathrm{nC}$. They touch, then separate. Find each final charge.",
        steps: [
          { label: "Total", text: "$Q_{\\mathrm{tot}} = 6.0 + (-2.0) = +4.0\\ \\mathrm{nC}$ conserved." },
          { label: "Share", text: "Identical spheres split equally: $+2.0\\ \\mathrm{nC}$ each." },
          { label: "Electrons moved", text: "$(4.0 \\times 10^{-9})/(1.602 \\times 10^{-19}) = 2.5 \\times 10^{10}$ electrons flowed from negative to positive sphere." },
        ],
        result: "$+2.0\\ \\mathrm{nC}$ on each sphere.",
      },
    ],
    keyTakeaways: [
      "Two signs: like repel, unlike attract; neutral means balanced.",
      "Charge is conserved and quantized in units of $e = 1.602 \\times 10^{-19}\\ \\mathrm{C}$.",
      "Friction moves electrons; contact shares net charge among conductors.",
    ],
    quiz: [
      {
        q: "Glass rubbed with silk becomes positive because:",
        options: ["Protons move onto the glass", "Electrons leave the glass for the silk", "Neutrons are created", "Charge is created"],
        answer: 1,
        explanation: "Only electrons move in solids; the glass's electron loss leaves net positive charge, balanced by the silk's gain.",
      },
      {
        q: "A charge of $+3.2 \\times 10^{-19}\\ \\mathrm{C}$ corresponds to:",
        options: ["One electron", "Two missing electrons ($+2e$)", "Half an electron", "One quark"],
        answer: 1,
        explanation: "$3.2 \\times 10^{-19}/1.602 \\times 10^{-19} = 2.0$: a $+2e$ ion — quantization holds.",
      },
      {
        q: "In an isolated system the total charge:",
        options: ["Always increases", "Is conserved", "Decays with time", "Depends on temperature"],
        answer: 1,
        explanation: "Charging only redistributes; pair processes create equal and opposite amounts.",
      },
    ],
  },
  {
    sectionId: "young-ch21-s2",
    readingTime: 4,
    intro: "Why does a charged rod attract neutral paper? Conductors, insulators, and induced charge explain. Young sorts materials by electron mobility and shows how induction charges without contact.",
    objectives: [
      "Distinguish conductors from insulators microscopically",
      "Explain charging by induction step by step",
      "Describe polarization of insulators in electric fields",
    ],
    concepts: [
      {
        term: "Conductors and insulators",
        kind: "definition",
        statement: "**Conductors** (metals, $\\sim 10^{28}$ free electrons/$\\mathrm{m^{3}}$) let charge flow freely; **insulators** (glass, rubber) pin electrons to atoms; **semiconductors** lie between with tunable carriers.",
        detail: "Copper's one free electron per atom gives its $10^{28}\\ \\mathrm{m^{-3}}$ conduction sea — the source of its luster and conductivity.",
      },
      {
        term: "Electrostatic equilibrium",
        kind: "law",
        statement: "In electrostatic equilibrium the electric field inside a conductor is zero and all excess charge resides on its surface — free charges rearrange until no force remains.",
        detail: "This is why car bodies shield occupants from lightning (Faraday cage preview of Section 22.5).",
      },
      {
        term: "Charging by induction",
        kind: "method",
        statement: "Bring a charged rod near a grounded conductor, let charge flow, remove ground, then remove the rod: the conductor keeps the opposite net charge — charged without ever touching the rod.",
        detail: "Ground supplies or drains the electrons; order matters — disconnect ground before removing the rod or the charge flows back.",
      },
      {
        term: "Induced charge without grounding",
        kind: "insight",
        statement: "Even ungrounded, a nearby charge separates $+$ and $-$ regions (near side opposite, far side alike); net charge stays zero but the near attraction wins — a charged rod lifts neutral paper.",
        detail: "Force falls faster than $1/r^{2}$ for induced attraction (dipole-like $1/r^{3}$ forces in Section 21.7 preview).",
      },
      {
        term: "Polarization of dielectrics",
        kind: "definition",
        statement: "Insulators **polarize**: molecules stretch or rotate, forming aligned dipoles whose bound surface charge mimics induction — the basis of dielectric response in Chapter 24.",
        detail: "Water's permanent dipoles rotate; nonpolar plastics stretch electron clouds — both present bound charge to external fields.",
      },
    ],
    examples: [
      {
        title: "Induction sequence numbers",
        problem: "A neutral $+0$ electroscope (two leaves) is approached by a $-10\\ \\mathrm{nC}$ rod, then grounded momentarily, ungrounded, and the rod removed. Track the electroscope charge.",
        steps: [
          { label: "Approach", text: "Electrons flee to the leaves: knob $+$, leaves $-$ (diverge); net still $0$." },
          { label: "Ground", text: "Leaf electrons drain to Earth; electroscope holds $+Q_{\\mathrm{ind}}$ bound by the rod." },
          { label: "Unground then remove", text: "Trapped positive charge spreads: leaves diverge with net $+$. Final $Q > 0$ (a few $\\mathrm{nC}$ depending on geometry)." },
        ],
        result: "Electroscope ends positively charged without contact.",
      },
      {
        title: "Why neutral paper jumps",
        problem: "Explain quantitatively why a $-5\\ \\mathrm{nC}$ rod at $1\\ \\mathrm{cm}$ lifts a $0.1\\ \\mathrm{g}$ paper scrap although net paper charge is zero.",
        steps: [
          { label: "Induced dipole", text: "Rod repels paper electrons, leaving near-face positive; near attraction beats far repulsion since $F \\propto 1/r^{2}$ favors the closer charge." },
          { label: "Force scale", text: "Induced forces of $\\sim 10^{-3}\\ \\mathrm{N}$ exceed weight $mg = (10^{-4})(9.8) = 9.8 \\times 10^{-4}\\ \\mathrm{N}$." },
          { label: "Contact flip", text: "On touching, paper gains electrons, turns negative, and is repelled — the familiar jump-then-flee." },
        ],
        result: "Near-side attraction ($\sim 10^{-3}\\ \\mathrm{N}$) beats weight ($9.8 \\times 10^{-4}\\ \\mathrm{N}$).",
      },
    ],
    keyTakeaways: [
      "Conductors flow, insulators pin, semiconductors tune — mobility classifies matter.",
      "Induction charges via ground with no contact; order of steps matters.",
      "Neutral matter still attracts via induced separation or polarization.",
    ],
    quiz: [
      {
        q: "In electrostatic equilibrium inside a conductor:",
        options: ["$E$ is maximal", "$E = 0$ with excess charge on the surface", "Charge fills the volume uniformly", "Electrons stop existing"],
        answer: 1,
        explanation: "Free charges move until no field remains to push them; mutual repulsion puts the excess on the surface.",
      },
      {
        q: "Charging by induction requires:",
        options: ["Touching the rod to the object", "A ground connection made and broken in the right order", "Heating the object", "Cutting the conductor"],
        answer: 1,
        explanation: "Ground exchanges electrons while the rod's field holds the separation; breaking ground first traps the charge.",
      },
      {
        q: "A charged rod attracts neutral paper because:",
        options: ["Paper is secretly charged", "Induced separation puts opposite charge nearer, and nearer wins by $1/r^{2}$", "Gravity assists", "Air currents push"],
        answer: 1,
        explanation: "Zero net charge still polarizes; the near-side force exceeds the far-side repulsion.",
      },
    ],
  },
  {
    sectionId: "young-ch21-s3",
    readingTime: 6,
    intro: "Coulomb's law is electrostatics' Newton gravity — an inverse-square force with charge playing the role of mass. Young states it precisely and solves the vector-superposition problems that dominate exams.",
    objectives: [
      "State Coulomb's law $F = k|q_{1}q_{2}|/r^{2}$ with $k = 8.99 \\times 10^{9}$",
      "Compute vector superpositions of pair forces",
      "Compare electrostatic and gravitational forces numerically",
    ],
    concepts: [
      {
        term: "Coulomb's law",
        kind: "law",
        statement: "Point charges exert $F = (1/4\\pi\\epsilon_{0})|q_{1}q_{2}|/r^{2}$ along their line of centers — repulsive for like, attractive for unlike — with $k = 8.988 \\times 10^{9}\\ \\mathrm{N \\cdot m^{2}/C^{2}}$ and $\\epsilon_{0} = 8.854 \\times 10^{-12}\\ \\mathrm{C^{2}/(N \\cdot m^{2})}$.",
        detail: "Torsion-balance measurements fix $k$; the inverse square is tested from $10^{-16}\\ \\mathrm{m}$ to kilometers.",
      },
      {
        term: "Superposition of forces",
        kind: "method",
        statement: "Each pair interacts independently: $\\vec{F}_{0} = \\sum_{i} kq_{0}q_{i}\\hat{r}_{0i}/r_{0i}^{2}$ — resolve into components, sum, then reassemble magnitude and direction.",
        detail: "Symmetry kills components before arithmetic: place axes through symmetric charges to zero out sums by inspection.",
      },
      {
        term: "Shell and point-charge equivalence",
        kind: "theorem",
        statement: "Spherically symmetric charge acts externally as a point charge at its center (proven via Gauss in Chapter 22); nuclei and ions use this freely.",
        detail: "Rutherford scattering assumed it for alpha-gold collisions — and the data confirmed the pointlike nucleus.",
      },
      {
        term: "Hydrogen binding benchmark",
        kind: "insight",
        statement: "Electron-proton attraction at $a_{0} = 5.29 \\times 10^{-11}\\ \\mathrm{m}$ is $F = ke^{2}/a_{0}^{2} = 8.24 \\times 10^{-8}\\ \\mathrm{N}$ — the atomic force scale binding all chemistry.",
        detail: "Gravity between them is $3.6 \\times 10^{-47}\\ \\mathrm{N}$: $39$ orders of magnitude weaker — atoms are electrical.",
      },
      {
        term: "Inverse-square discipline",
        kind: "notation",
        statement: "Always write unit vectors $\\hat{r}$ explicitly: $\\vec{F}_{12} = kq_{1}q_{2}(\\vec{r}_{1} - \\vec{r}_{2})/|\\vec{r}_{1} - \\vec{r}_{2}|^{3}$ — the cubed denominator with vector numerator prevents sign disasters.",
        detail: "Newton's-third-law pairs are automatic in this form: swapping indices flips the vector.",
      },
    ],
    figures: [
      {
        caption: "Superposition: $\\vec{F}_{0}$ on $q_{0}$ is the vector sum of pair forces $kq_{0}q_{i}\\hat{r}_{0i}/r_{0i}^{2}$ along each line of centers.",
        svg: `<svg viewBox="0 0 400 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coulomb superposition of two pair forces"><circle cx="200" cy="100" r="8" fill="currentColor"/><text x="196" y="130" font-size="13" fill="currentColor">q0</text><circle cx="90" cy="60" r="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="82" y="50" font-size="13" fill="currentColor">q1</text><circle cx="90" cy="145" r="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="82" y="168" font-size="13" fill="currentColor">q2</text><line x1="100" y1="66" x2="190" y2="96" stroke="currentColor" stroke-width="2"/><line x1="100" y1="139" x2="190" y2="104" stroke="currentColor" stroke-width="2"/><line x1="200" y1="100" x2="300" y2="100" stroke="currentColor" stroke-width="2.5"/><text x="305" y="104" font-size="13" fill="currentColor">F net</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Force between nanocoulombs",
        problem: "Charges $q_{1} = +3.00\\ \\mathrm{nC}$ and $q_{2} = -5.00\\ \\mathrm{nC}$ sit $0.200\\ \\mathrm{m}$ apart. Find the force magnitude and direction.",
        steps: [
          { label: "Magnitude", text: "$F = k|q_{1}q_{2}|/r^{2} = (8.988 \\times 10^{9})(3.00 \\times 10^{-9})(5.00 \\times 10^{-9})/0.0400$." },
          { label: "Numerator", text: "$(8.988 \\times 10^{9})(1.50 \\times 10^{-17}) = 1.348 \\times 10^{-7}$; divide by $0.0400$ gives $3.37 \\times 10^{-6}\\ \\mathrm{N}$." },
          { label: "Direction", text: "Opposite signs attract: each charge is pulled toward the other along the line of centers." },
        ],
        result: "$F = 3.37\\ \\mu\\mathrm{N}$, attractive.",
      },
      {
        title: "Balanced trio on a line",
        problem: "Charges $+q$ at $x = 0$ and $+q$ at $x = 2a$ flank $q_{0} = -q$ at $x = a$. Find the net force on $q_{0}$ with $q = 2.00\\ \\mathrm{nC}$, $a = 0.050\\ \\mathrm{m}$.",
        steps: [
          { label: "Left pull", text: "$F_{L} = kq^{2}/a^{2}$ toward $-x$ (unlike attract): $(8.988 \\times 10^{9})(4.00 \\times 10^{-18})/0.0025 = 1.438 \\times 10^{-5}\\ \\mathrm{N}$." },
          { label: "Right pull", text: "Equal $1.438 \\times 10^{-5}\\ \\mathrm{N}$ toward $+x$." },
          { label: "Net", text: "Equal and opposite: $F_{\\mathrm{net}} = 0$ — symmetric equilibrium (unstable, as Earnshaw demands)." },
        ],
        result: "Net force zero by symmetry.",
      },
    ],
    keyTakeaways: [
      "$F = k|q_{1}q_{2}|/r^{2}$ along the line of centers; like repel, unlike attract.",
      "Forces superpose vectorially — components first, magnitude last.",
      "Atomic forces ($\sim 10^{-8}\\ \\mathrm{N}$) dwarf gravity by $\sim 10^{39}$.",
    ],
    quiz: [
      {
        q: "Doubling the separation of two point charges changes the force by:",
        options: ["$2$ times", "$1/2$", "$1/4$", "$4$ times"],
        answer: 2,
        explanation: "Inverse square: $F \\propto 1/r^{2}$, so $2^{2} = 4$ in the denominator.",
      },
      {
        q: "Three charges in a line with symmetric outer charges give the middle charge net force:",
        options: ["Always repulsive", "Zero by symmetry for equal outer charges", "Always attractive", "Perpendicular to the line"],
        answer: 1,
        explanation: "Equal magnitudes at equal distances pull oppositely with equal strength — vector cancellation.",
      },
      {
        q: "The constant $k$ and $\\epsilon_{0}$ relate by:",
        options: ["$k = 1/(4\\pi\\epsilon_{0})$", "$k = 4\\pi\\epsilon_{0}$", "$k = \\epsilon_{0}^{2}$", "Unrelated"],
        answer: 0,
        explanation: "$k = 8.988 \\times 10^{9} = 1/(4\\pi \\times 8.854 \\times 10^{-12})$ — two notations for one constant.",
      },
      {
        q: "Coulomb force between electron and proton at $a_{0}$ versus their gravity is larger by about:",
        options: ["$10^{3}$", "$10^{12}$", "$10^{39}$", "Equal"],
        answer: 2,
        explanation: "$8.24 \\times 10^{-8}\\ \\mathrm{N}$ versus $3.6 \\times 10^{-45}\\ \\mathrm{N}$-scale gravity — electricity wins overwhelmingly.",
      },
    ],
  },
  {
    sectionId: "young-ch21-s4",
    readingTime: 5,
    intro: "Coulomb's law answers pair forces, but the field answers every question at once. Young defines $\\vec{E} = \\vec{F}_{0}/q_{0}$, the force per unit charge, and computes it for the point-charge arrangements exams love.",
    objectives: [
      "Define electric field $\\vec{E} = \\vec{F}_{0}/q_{0}$ and its units",
      "Compute fields of point-charge groups by superposition",
      "Find forces on charges placed in known fields",
    ],
    concepts: [
      {
        term: "Electric field defined",
        kind: "definition",
        statement: "The **electric field** at a point is $\\vec{E} = \\vec{F}_{0}/q_{0}$: the force a tiny positive test charge would feel, in $\\mathrm{N/C}$ ($= \\mathrm{V/m}$).",
        detail: "The test charge must not disturb the sources; $\\vec{E}$ exists whether or not anything feels it.",
      },
      {
        term: "Field of a point charge",
        kind: "law",
        statement: "A point charge $q$ makes $\\vec{E} = kq\\hat{r}/r^{2}$: radially outward for $q > 0$, inward for $q < 0$, falling as $1/r^{2}$.",
        detail: "A $1\\ \\mathrm{nC}$ charge makes $9.0\\ \\mathrm{N/C}$ at $1\\ \\mathrm{m}$ and $900\\ \\mathrm{N/C}$ at $10\\ \\mathrm{cm}$.",
      },
      {
        term: "Field superposition",
        kind: "method",
        statement: "Fields add vectorially: $\\vec{E}_{P} = \\sum_{i} kq_{i}\\hat{r}_{iP}/r_{iP}^{2}$ — compute the field once, then $\\vec{F} = q\\vec{E}$ for any charge dropped at $P$.",
        detail: "Dipole and quadrupole patterns emerge from cancellation of leading terms — Sections 21.5 and 21.7 systematize it.",
      },
      {
        term: "Force from field",
        kind: "insight",
        statement: "Given $\\vec{E}$, forces follow instantly: an electron ($-e$) in $E = 1000\\ \\mathrm{N/C}$ feels $F = eE = 1.602 \\times 10^{-16}\\ \\mathrm{N}$ opposite $\\vec{E}$.",
        detail: "Cathode-ray tubes and inkjet printers steer beams with exactly this $q\\vec{E}$ force.",
      },
      {
        term: "Field versus force language",
        kind: "notation",
        statement: "Forces need pairs; fields need sources only: $\\vec{E}$-language separates what charges make from what they feel, enabling Gauss's law in Chapter 22.",
        detail: "Action-at-a-distance becomes local: charges make fields here, fields push charges there.",
      },
    ],
    examples: [
      {
        title: "Field midway between opposites",
        problem: "$+4.00\\ \\mathrm{nC}$ at $x = -0.100\\ \\mathrm{m}$ and $-4.00\\ \\mathrm{nC}$ at $x = +0.100\\ \\mathrm{m}$. Find $\\vec{E}$ at the origin.",
        steps: [
          { label: "From positive", text: "$E_{+} = kq/r^{2} = (8.988 \\times 10^{9})(4.00 \\times 10^{-9})/0.0100 = 3595\\ \\mathrm{N/C}$, pointing away from $+$: toward $+x$." },
          { label: "From negative", text: "$E_{-} = 3595\\ \\mathrm{N/C}$, pointing toward $-$: also toward $+x$." },
          { label: "Sum", text: "$E = 3595 + 3595 = 7190\\ \\mathrm{N/C}$ in $+x$ — partners reinforce between opposites." },
        ],
        result: "$\\vec{E} = 7.19 \\times 10^{3}\\ \\mathrm{N/C}$ toward the negative charge.",
      },
      {
        title: "Electron in a lab field",
        problem: "A uniform $E = 500\\ \\mathrm{N/C}$ points east. Find the force and acceleration of an electron placed in it.",
        steps: [
          { label: "Force", text: "$F = eE = (1.602 \\times 10^{-19})(500) = 8.01 \\times 10^{-17}\\ \\mathrm{N}$ west (negative charge opposes $\\vec{E}$)." },
          { label: "Acceleration", text: "$a = F/m = 8.01 \\times 10^{-17}/9.11 \\times 10^{-31} = 8.79 \\times 10^{13}\\ \\mathrm{m/s^{2}}$." },
          { label: "Scale", text: "Ten trillion $g$'s — lab fields dominate electron motion utterly." },
        ],
        result: "$8.01 \\times 10^{-17}\\ \\mathrm{N}$ west; $8.8 \\times 10^{13}\\ \\mathrm{m/s^{2}}$.",
      },
    ],
    keyTakeaways: [
      "$\\vec{E} = \\vec{F}_{0}/q_{0}$: force per unit positive test charge.",
      "Point charge $\\vec{E} = kq\\hat{r}/r^{2}$; groups superpose vectorially.",
      "Forces follow as $\\vec{F} = q\\vec{E}$ with sign-aware direction.",
    ],
    quiz: [
      {
        q: "The field at $2\\ \\mathrm{m}$ from $+1\\ \\mathrm{nC}$ compared with $1\\ \\mathrm{m}$ is:",
        options: ["Doubled", "Halved", "Quartered", "Unchanged"],
        answer: 2,
        explanation: "$E \\propto 1/r^{2}$: doubling $r$ quarters the field.",
      },
      {
        q: "A negative test charge placed in $\\vec{E}$ feels force:",
        options: ["Along $\\vec{E}$", "Opposite $\\vec{E}$", "Perpendicular to $\\vec{E}$", "Zero always"],
        answer: 1,
        explanation: "$\\vec{F} = q\\vec{E}$ with $q < 0$ flips the direction.",
      },
      {
        q: "Between equal and opposite charges the fields:",
        options: ["Cancel", "Reinforce along the axis", "Point perpendicular", "Vanish everywhere"],
        answer: 1,
        explanation: "Away-from-positive and toward-negative both point the same way on the axis — they add.",
      },
    ],
  },
  {
    sectionId: "young-ch21-s5",
    readingTime: 7,
    intro: "Real charge is smeared over rods, rings, and disks — Young integrates Coulomb's law over continuous distributions to get the line, ring, and disk fields that Gauss's law will later reproduce in one line.",
    objectives: [
      "Set up $d\\vec{E} = kdq\\,\\hat{r}/r^{2}$ with linear, surface, and volume densities",
      "Derive the ring-axis and charged-disk fields",
      "Take point-charge and infinite-sheet limits correctly",
    ],
    concepts: [
      {
        term: "Charge densities",
        kind: "definition",
        statement: "Continuous charge uses $\\lambda = dq/dl$ ($\\mathrm{C/m}$), $\\sigma = dq/dA$ ($\\mathrm{C/m^{2}}$), $\\rho = dq/dV$ ($\\mathrm{C/m^{3}}$); each $dq$ contributes $d\\vec{E} = kdq\\,\\hat{r}/r^{2}$.",
        detail: "Uniform rods, rings, and disks fix one density constant; symmetry then kills all but one field component.",
      },
      {
        term: "Finite line of charge",
        kind: "theorem",
        statement: "A rod of length $2a$, total $Q$, makes at distance $y$ on its bisector $E_{y} = (1/4\\pi\\epsilon_{0})(2Q)/(y\\sqrt{y^{2}+a^{2}})$; for $y \\gg a$ this reduces to $kQ/y^{2}$, and for infinite lines to $E = \\lambda/(2\\pi\\epsilon_{0}y)$.",
        detail: "The $1/y$ infinite-line falloff (not $1/y^{2}$) reflects the line's endless supply of nearby charge.",
      },
      {
        term: "Ring on axis",
        kind: "theorem",
        statement: "A ring of radius $a$, charge $Q$, makes on-axis $E_{x} = kQx/(x^{2}+a^{2})^{3/2}$: zero at center, maximum at $x = a/\\sqrt{2}$, approaching $kQ/x^{2}$ far away.",
        detail: "Transverse components cancel pairwise; only the axial cosine projections survive integration.",
      },
      {
        term: "Charged disk",
        kind: "theorem",
        statement: "A disk of radius $R$, density $\\sigma$, makes on-axis $E_{x} = (\\sigma/2\\epsilon_{0})[1 - x/\\sqrt{x^{2}+R^{2}}]$, approaching the uniform $\\sigma/(2\\epsilon_{0})$ of an infinite sheet as $R \\to \\infty$.",
        detail: "Two oppositely charged sheets make $\\sigma/\\epsilon_{0}$ between and zero outside — the parallel-plate capacitor preview.",
      },
      {
        term: "Integration strategy",
        kind: "method",
        statement: "Always: sketch, choose $dq$, write $d\\vec{E}$ components, kill by symmetry, integrate scalars, check limits ($x \\to 0$, $x \\to \\infty$).",
        detail: "Limit checks catch most setup errors: every finite distribution must look pointlike far away.",
      },
    ],
    figures: [
      {
        caption: "Ring of radius $a$: transverse $dE$ pairs cancel; axial projections $dE\\cos\\theta$ sum to $E_{x} = kQx/(x^{2}+a^{2})^{3/2}$.",
        svg: `<svg viewBox="0 0 400 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ring field integration geometry"><ellipse cx="110" cy="90" rx="30" ry="60" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="260" cy="90" r="6" fill="currentColor"/><text x="256" y="115" font-size="12" fill="currentColor">P(x)</text><line x1="110" y1="40" x2="260" y2="90" stroke="currentColor" stroke-width="1.5"/><line x1="110" y1="140" x2="260" y2="90" stroke="currentColor" stroke-width="1.5"/><line x1="110" y1="90" x2="260" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="170" y="75" font-size="12" fill="currentColor">r</text><text x="170" y="105" font-size="12" fill="currentColor">x</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Ring field maximum",
        problem: "A ring has $Q = +6.00\\ \\mathrm{nC}$, $a = 0.100\\ \\mathrm{m}$. Find $E_{x}$ at $x = 0.0707\\ \\mathrm{m}$ ($a/\\sqrt{2}$, the maximum) and at $x = 1.00\\ \\mathrm{m}$.",
        steps: [
          { label: "At maximum", text: "$x^{2}+a^{2} = 0.005+0.01 = 0.015$; $(0.015)^{3/2} = 1.837 \\times 10^{-3}$. $E = (8.988 \\times 10^{9})(6.00 \\times 10^{-9})(0.0707)/1.837 \\times 10^{-3} = 3.813/1.837 \\times 10^{-3} = 2076\\ \\mathrm{N/C}$." },
          { label: "Far away", text: "$E = (8.988 \\times 10^{9})(6.00 \\times 10^{-9})(1.00)/(1.01)^{3/2} = 53.93/1.015 = 53.1\\ \\mathrm{N/C}$." },
          { label: "Point check", text: "$kQ/x^{2} = 53.93\\ \\mathrm{N/C}$ — within $2$ percent at $10$ radii. Confirmed." },
        ],
        result: "$2.08 \\times 10^{3}\\ \\mathrm{N/C}$ at the maximum; $53.1\\ \\mathrm{N/C}$ far away.",
      },
      {
        title: "Infinite sheet numbers",
        problem: "A large plastic sheet carries $\\sigma = +2.00\\ \\mu\\mathrm{C/m^{2}}$. Find $E$ near its surface.",
        steps: [
          { label: "Formula", text: "$E = \\sigma/(2\\epsilon_{0}) = 2.00 \\times 10^{-6}/(2 \\times 8.854 \\times 10^{-12})$." },
          { label: "Evaluate", text: "$E = 2.00 \\times 10^{-6}/1.771 \\times 10^{-11} = 1.129 \\times 10^{5}\\ \\mathrm{N/C}$." },
          { label: "Direction", text: "Away from the sheet on both sides — uniform, distance-independent." },
        ],
        result: "$1.13 \\times 10^{5}\\ \\mathrm{N/C}$ uniform near the sheet.",
      },
    ],
    keyTakeaways: [
      "$d\\vec{E} = kdq\\,\\hat{r}/r^{2}$ with $\\lambda, \\sigma, \\rho$; symmetry selects surviving components.",
      "Ring $kQx/(x^{2}+a^{2})^{3/2}$; disk $(\\sigma/2\\epsilon_{0})[1-x/\\sqrt{x^{2}+R^{2}}]$.",
      "Far fields go pointlike; infinite lines give $1/y$, sheets give uniform fields.",
    ],
    quiz: [
      {
        q: "The field at the center of a uniformly charged ring is:",
        options: ["Maximum", "$kQ/a^{2}$", "Zero by symmetry", "Infinite"],
        answer: 2,
        explanation: "Every $dq$ has a diametrically opposite partner; all vectors cancel at the center.",
      },
      {
        q: "An infinite line of charge has field falling as:",
        options: ["$1/r^{2}$", "$1/r$", "Constant", "$r^{2}$"],
        answer: 1,
        explanation: "$E = \\lambda/(2\\pi\\epsilon_{0}r)$: the line's endless charge softens the falloff to $1/r$.",
      },
      {
        q: "Two oppositely charged infinite sheets ($\\pm\\sigma$) give between them:",
        options: ["Zero", "$\\sigma/\\epsilon_{0}$ uniform", "$2\\sigma/\\epsilon_{0}$", "A $1/r^{2}$ field"],
        answer: 1,
        explanation: "Each contributes $\\sigma/(2\\epsilon_{0})$ in the same direction between; outside they cancel.",
      },
    ],
  },
  {
    sectionId: "young-ch21-s6",
    readingTime: 4,
    intro: "Field lines make the invisible visible: direction, relative strength, and topology at a glance. Young teaches the sketching rules that turn algebra into pictures — and pictures into predictions.",
    objectives: [
      "State the field-line sketching rules (origin, termination, density, non-crossing)",
      "Sketch dipole, parallel-charge, and sheet fields",
      "Read field strength and direction from line diagrams",
    ],
    concepts: [
      {
        term: "Field-line rules",
        kind: "definition",
        statement: "Lines start on $+$ (or $\\infty$), end on $-$ (or $\\infty$), never cross, and crowd where $E$ is strong: line density $\\propto |E|$.",
        detail: "Counting lines through a surface previews electric flux — Chapter 22's headline quantity.",
      },
      {
        term: "Dipole pattern",
        kind: "insight",
        statement: "Dipole lines loop from $+$ to $-$ with far-field density falling as $1/r^{3}$-strength; the pattern is the template for molecules, antennas, and magnets.",
        detail: "Memorize this plate: it recurs in dielectrics, potential maps, and radiation patterns.",
      },
      {
        term: "Uniform-field depiction",
        kind: "notation",
        statement: "Parallel equally spaced lines mean uniform $\\vec{E}$ — the parallel-plate interior, Millikan's chamber, and CRT deflection zones.",
        detail: "Straight parallel trajectories for $q\\vec{E}$ with no $1/r^{2}$ complications make these regions calculational sanctuaries.",
      },
      {
        term: "Lines and conductors",
        kind: "law",
        statement: "In equilibrium, field lines meet conductor surfaces perpendicularly (no tangential $E$ could persist) and never penetrate the field-free interior.",
        detail: "Sharp points crowd lines (high $E$, corona discharge) — lightning rods exploit exactly this.",
      },
      {
        term: "What lines never do",
        kind: "method",
        statement: "Lines never start/end in empty space (no charge there), never cross (unique $\\vec{E}$ per point), and never form closed loops in electrostatics (that needs changing $\\vec{B}$).",
        detail: "A sketch violating these advertises its own error — use them as self-checks.",
      },
    ],
    figures: [
      {
        caption: "Dipole field lines: loops from $+$ to $-$, dense near charges, thinning as $1/r^{3}$-strength far away.",
        svg: `<svg viewBox="0 0 400 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electric dipole field lines"><circle cx="150" cy="90" r="9" fill="currentColor"/><text x="146" y="94" font-size="11" fill="#fff">+</text><circle cx="250" cy="90" r="9" fill="currentColor"/><text x="246" y="94" font-size="11" fill="#fff">−</text><g fill="none" stroke="currentColor" stroke-width="1.4"><path d="M159,90 Q200,40 241,90"/><path d="M159,90 Q200,140 241,90"/><path d="M150,81 Q120,40 150,20 Q200,10 250,20 Q280,40 250,81"/><path d="M150,99 Q120,140 150,160 Q200,170 250,160 Q280,140 250,99"/></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Reading a line map",
        problem: "A diagram shows $12$ lines leaving a $+3\\ \\mathrm{nC}$ charge and $8$ entering a nearby unknown charge. Find the unknown charge.",
        steps: [
          { label: "Proportionality", text: "Line count $\\propto |q|$: $|q_{x}|/3.0 = 8/12$." },
          { label: "Magnitude", text: "$|q_{x}| = 3.0(8/12) = 2.0\\ \\mathrm{nC}$." },
          { label: "Sign", text: "Lines enter it, so it is negative: $q_{x} = -2.0\\ \\mathrm{nC}$." },
        ],
        result: "$q_{x} = -2.0\\ \\mathrm{nC}$.",
      },
      {
        title: "Lightning-rod crowding",
        problem: "A blunt dome (radius $10\\ \\mathrm{cm}$) and a sharp tip (radius $1\\ \\mathrm{mm}$) sit at the same potential $V$. Compare surface fields via $E \\approx V/r$.",
        steps: [
          { label: "Dome", text: "$E_{\\mathrm{dome}} \\approx V/0.10 = 10V$." },
          { label: "Tip", text: "$E_{\\mathrm{tip}} \\approx V/0.001 = 1000V$ — $100$ times stronger." },
          { label: "Consequence", text: "Air breaks down first at the tip ($3 \\times 10^{6}\\ \\mathrm{V/m}$), launching the leader — rods work by crowding lines." },
        ],
        result: "Tip field $100$ times the dome field at equal $V$.",
      },
    ],
    keyTakeaways: [
      "Lines $+$ to $-$, never cross, density $\\propto E$.",
      "Dipole loops are the canonical pattern; uniform means parallel and even.",
      "Lines meet conductors perpendicularly and avoid field-free interiors.",
    ],
    quiz: [
      {
        q: "Field lines can never cross because:",
        options: ["They repel each other", "$\\vec{E}$ has one value (magnitude and direction) at each point", "Charges forbid it", "They are only cartoons"],
        answer: 1,
        explanation: "Crossing would give two tangent directions — two fields — at one point, which is impossible.",
      },
      {
        q: "Where lines are twice as dense, the field is:",
        options: ["Half as strong", "Twice as strong", "Four times as strong", "Unchanged"],
        answer: 1,
        explanation: "Density is drawn proportional to magnitude: double lines, double $E$.",
      },
      {
        q: "Field lines meeting a conductor in equilibrium are:",
        options: ["Parallel to the surface", "Perpendicular to the surface", "At $45^{\\circ}$", "Absent everywhere including outside"],
        answer: 1,
        explanation: "Any tangential component would drive surface currents; equilibrium kills it, leaving normal incidence.",
      },
    ],
  },
  {
    sectionId: "young-ch21-s7",
    readingTime: 5,
    intro: "Two opposite charges a fixed distance apart — the dipole — torques into alignment with fields and models molecules, antennas, and dielectrics. Young derives its torque, energy, and far field.",
    objectives: [
      "Compute dipole torque $\\vec{\\tau} = \\vec{p} \\times \\vec{E}$ and energy $U = -\\vec{p} \\cdot \\vec{E}$",
      "Define dipole moment $\\vec{p} = q\\vec{d}$ with direction",
      "State the far-field $1/r^{3}$ dependence on axis and bisector",
    ],
    concepts: [
      {
        term: "Dipole moment",
        kind: "definition",
        statement: "An electric dipole pairs $+q$ and $-q$ separated by $\\vec{d}$ (from $-$ to $+$) with moment $\\vec{p} = q\\vec{d}$, magnitude $p = qd$ in $\\mathrm{C \\cdot m}$.",
        detail: "Water's $p = 6.2 \\times 10^{-30}\\ \\mathrm{C \\cdot m}$ drives its solvent power and microwave absorption.",
      },
      {
        term: "Torque on a dipole",
        kind: "theorem",
        statement: "A uniform field exerts $\\vec{\\tau} = \\vec{p} \\times \\vec{E}$ with magnitude $\\tau = pE\\sin\\phi$, aligning $\\vec{p}$ with $\\vec{E}$ like a compass needle.",
        detail: "Net force is zero in uniform $\\vec{E}$; only rotation results — nonuniform fields add $\\vec{F} = (\\vec{p} \\cdot \\nabla)\\vec{E}$ (dielectrophoresis preview).",
      },
      {
        term: "Potential energy of alignment",
        kind: "theorem",
        statement: "$U = -\\vec{p} \\cdot \\vec{E} = -pE\\cos\\phi$: minimum $-pE$ aligned, maximum $+pE$ antialigned, zero broadside — work $W = \\Delta U$ rotates the dipole.",
        detail: "Microwave ovens pump water dipoles near this torsional resonance; friction of lagging alignment heats food.",
      },
      {
        term: "Dipole far field",
        kind: "law",
        statement: "On axis $E \\approx 2kp/r^{3}$ and on the bisector $E \\approx kp/r^{3}$ (opposite direction): dipoles fall as $1/r^{3}$, faster than point charges, because $+q$ and $-q$ nearly cancel.",
        detail: "Neutral matter's fields are dipole-led — the $1/r^{3}$ law is why static cling is short-ranged.",
      },
      {
        term: "Dipole in nonuniform fields",
        kind: "insight",
        statement: "Nonuniform $\\vec{E}$ pulls dipoles toward stronger field ($\\vec{F} \\propto \\nabla E$): charged rods lift neutral paper via this dielectrophoretic force.",
        detail: "Optical tweezers and electrostatic precipitators scale this gradient force to atoms and ash.",
      },
    ],
    examples: [
      {
        title: "Water dipole in a strong field",
        problem: "A water molecule ($p = 6.2 \\times 10^{-30}\\ \\mathrm{C \\cdot m}$) sits at $\\phi = 60^{\\circ}$ in $E = 1.0 \\times 10^{6}\\ \\mathrm{N/C}$. Find $\\tau$ and $U$.",
        steps: [
          { label: "Torque", text: "$\\tau = pE\\sin\\phi = (6.2 \\times 10^{-30})(1.0 \\times 10^{6})(0.866) = 5.37 \\times 10^{-24}\\ \\mathrm{N \\cdot m}$." },
          { label: "Energy", text: "$U = -pE\\cos\\phi = -(6.2 \\times 10^{-24})(0.500) = -3.10 \\times 10^{-24}\\ \\mathrm{J}$." },
          { label: "Versus kT", text: "$kT = 4.14 \\times 10^{-21}\\ \\mathrm{J}$ at $300\\ \\mathrm{K}$ — $1000$ times larger, so thermal tumbling dominates. Consistent with weak-field alignment." },
        ],
        result: "$\\tau = 5.4 \\times 10^{-24}\\ \\mathrm{N \\cdot m}$, $U = -3.1 \\times 10^{-24}\\ \\mathrm{J}$.",
      },
      {
        title: "Dipole far field strength",
        problem: "An $HCl$ molecule has $p = 3.6 \\times 10^{-30}\\ \\mathrm{C \\cdot m}$. Estimate its on-axis field at $r = 1.0\\ \\mathrm{nm}$.",
        steps: [
          { label: "Formula", text: "$E = 2kp/r^{3} = 2(8.988 \\times 10^{9})(3.6 \\times 10^{-30})/(10^{-9})^{3}$." },
          { label: "Numerator", text: "$2(8.988 \\times 10^{9})(3.6 \\times 10^{-30}) = 6.471 \\times 10^{-20}$." },
          { label: "Divide", text: "$6.471 \\times 10^{-20}/10^{-27} = 6.47 \\times 10^{7}\\ \\mathrm{N/C}$." },
        ],
        result: "$6.5 \\times 10^{7}\\ \\mathrm{N/C}$ at $1\\ \\mathrm{nm}$ — huge locally, gone by micrometers.",
      },
    ],
    keyTakeaways: [
      "$\\vec{p} = q\\vec{d}$ ($-$ to $+$); $\\vec{\\tau} = \\vec{p} \\times \\vec{E}$, $U = -\\vec{p} \\cdot \\vec{E}$.",
      "Uniform fields torque but do not translate dipoles; gradients attract them.",
      "Far fields fall as $1/r^{3}$: $2kp/r^{3}$ on axis, $kp/r^{3}$ on bisector.",
    ],
    quiz: [
      {
        q: "A dipole in uniform $\\vec{E}$ experiences:",
        options: ["Net force only", "Torque aligning $\\vec{p}$ with $\\vec{E}$, zero net force", "Neither torque nor force", "Force along $\\vec{E}$ always"],
        answer: 1,
        explanation: "$+q$ and $-q$ forces cancel vectorially but form a couple $\\vec{p} \\times \\vec{E}$.",
      },
      {
        q: "Minimum-energy orientation of a dipole is:",
        options: ["Antialigned ($\\phi = 180^{\\circ}$)", "Aligned ($\\phi = 0^{\\circ}$)", "Broadside ($\\phi = 90^{\\circ}$)", "All equal"],
        answer: 1,
        explanation: "$U = -pE\\cos\\phi$ is minimal ($-pE$) at $\\phi = 0$.",
      },
      {
        q: "Dipole far fields fall as $1/r^{3}$ rather than $1/r^{2}$ because:",
        options: ["Charge is lost", "Opposite charges nearly cancel, leaving the first surviving multipole", "Dipoles radiate", "The medium absorbs"],
        answer: 1,
        explanation: "Monopole ($1/r^{2}$) terms cancel for net-zero charge; the dipole term leads.",
      },
      {
        q: "A charged rod attracts a neutral polar molecule mainly via:",
        options: ["Monopole force", "Gradient force on the induced/aligned dipole toward stronger $E$", "Gravity", "Magnetic force"],
        answer: 1,
        explanation: "Nonuniform fields exert $(\\vec{p} \\cdot \\nabla)\\vec{E}$ toward high field — dielectrophoresis.",
      },
    ],
  },
]
