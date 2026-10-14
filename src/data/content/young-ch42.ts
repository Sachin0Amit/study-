import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 42: Molecules and Condensed Matter.

export const youngCh42Content: SectionContent[] = [
  {
    sectionId: "young-ch42-s1",
    readingTime: 6,
    intro: "Atoms bind by sharing, donating, pooling, or faintly attracting electrons: covalent, ionic, metallic, and van der Waals bonds. Potential curves with $eV$-deep minima set bond lengths near angstroms. Bond type predicts conductivity, hardness, and melting at a glance.",
    objectives: [
      "Classify ionic, covalent, metallic, van der Waals bonds",
      "Read bond length and dissociation energy off potential curves",
      "Predict properties from bond type"
    ],
    concepts: [
      {
        term: "Ionic bond",
        kind: "definition",
        statement: "**Electron transfer plus Coulomb attraction** (NaCl): large electronegativity gap, conducting melts, brittle crystals.",
        detail: "Lattice Madelung sums reach $8$ eV per pair."
      },
      {
        term: "Covalent bond",
        kind: "definition",
        statement: "**Shared-pair exchange lowering** (H2 $4.5$ eV, diamond): directional, hard, insulating or semiconducting.",
        detail: "Symmetric spatial states pair with singlet spins by Pauli."
      },
      {
        term: "Metallic bond",
        kind: "definition",
        statement: "**Delocalized electron sea over ion cores**: conductive, malleable, lustrous, close-packed.",
        detail: "Nondirectional pooling allows planes to slide."
      },
      {
        term: "van der Waals bond",
        kind: "definition",
        statement: "**Induced-dipole $1/r^{6}$ attraction** (Ne, wax): meV depths, soft, low melting.",
        detail: "Quantum fluctuations correlate dipoles; $r^{-12}$ repulsion balances at contact."
      },
      {
        term: "Potential curves",
        kind: "method",
        statement: "**Minimum locates $r_{0}$, depth gives $D_{e}$**; curvature gives vibrational $k$ (next section).",
        detail: "Morse fits interpolate dissociation from spectroscopy."
      }
    ],
    examples: [
      {
        title: "NaCl lattice energy",
        problem: "Estimate NaCl pair Coulomb energy at $r_{0} = 0.281$ nm.",
        steps: [
          { label: "Step 1: Pair", text: "$U = -e^{2}/(4\\pi\\epsilon_{0}r) = -1.44/0.281 = -5.12$ eV." },
          { label: "Step 2: Lattice", text: "Madelung $1.748$ plus repulsion gives $\\approx -7.9$ eV per pair in crystal." },
          { label: "Step 3: Check", text: "Born-Haber $7.6$ eV: Coulomb rules ionic energetics." }
        ],
        result: "$-5.1$ eV per pair, $-7.9$ eV in lattice."
      },
      {
        title: "Bond from curve",
        problem: "Morse minimum $4.5$ eV at $0.074$ nm. Identify bond.",
        steps: [
          { label: "Step 1: Depth", text: "eV-scale: chemical, not van der Waals meV." },
          { label: "Step 2: Length", text: "Sub-angstrom: compact H2-like covalent." },
          { label: "Step 3: Properties", text: "Expect hard gas with $4000+$ K dissociation scale." }
        ],
        result: "Covalent H2 bond."
      }
    ],
    keyTakeaways: [
      "Four bonds span eV chemical to meV physical strengths.",
      "Minima give lengths, depths give energies, curvature gives stiffness.",
      "Bond type foretells conductivity and mechanics."
    ],
    quiz: [
      {
        q: "NaCl bonding is chiefly:",
        options: ["Covalent", "Ionic", "Metallic", "Hydrogen only"],
        answer: 1,
        explanation: "Full transfer with Coulomb lattice sums."
      },
      {
        q: "Deepest typical bond class is:",
        options: ["van der Waals", "Covalent/ionic eV scale", "Thermal kT", "Gravity"],
        answer: 1,
        explanation: "Chemical bonds are eV; physical bonds meV."
      },
      {
        q: "Metals conduct because electrons are:",
        options: ["Tightly bound", "Delocalized over cores", "Absent", "Frozen"],
        answer: 1,
        explanation: "Sea electrons accelerate freely under fields."
      }
    ]
  },
  {
    sectionId: "young-ch42-s2",
    readingTime: 6,
    intro: "Molecules rotate in $BJ(J+1)$ ladders and vibrate near $\\hbar\\omega$, emitting microwave and infrared combs. Line spacings weigh bond lengths to picometers and spring constants to newtons per meter. Selection rules $\\Delta J = \\pm 1$ shape every branch.",
    objectives: [
      "Write rotational $E_{J} = BJ(J+1)$ with $B = \\hbar^{2}/2I$",
      "Extract $r_{0}$ from microwave spacing $2B$",
      "Extract $k$ from vibrational $\\hbar\\omega$"
    ],
    concepts: [
      {
        term: "Rotational ladder",
        kind: "theorem",
        statement: "**$E_{J} = (\\hbar^{2}/2I)J(J+1)$**; absorption lines space **$2B$** ($B$ in energy).",
        detail: "CO spacing $3.86$ per cm gives $r_{0} = 0.113$ nm."
      },
      {
        term: "Bond length from B",
        kind: "method",
        statement: "**$I = \\mu r_{0}^{2} = \\hbar^{2}/2B$** inverts spacing to geometry.",
        detail: "Isotope substitution shifts $\\mu$ and confirms assignments."
      },
      {
        term: "Vibrational ladder",
        kind: "theorem",
        statement: "**$E_{v} = (v+1/2)\\hbar\\omega$**, $\\omega = \\sqrt{k/\\mu}$; IR fundamental near $10^{14}$ Hz.",
        detail: "HCl $2886$ per cm gives $k = 480$ N/m."
      },
      {
        term: "Selection rules",
        kind: "theorem",
        statement: "**Rotation $\\Delta J = \\pm 1$; vibration $\\Delta v = \\pm 1$ with $\\Delta J = \\pm 1$** (P/Q/R branches).",
        detail: "Homopolar H2 lacks dipole rotation lines; Raman fills the gap."
      },
      {
        term: "Zero-point chemistry",
        kind: "insight",
        statement: "**$\\hbar\\omega/2$ shifts reaction barriers**; deuteration slows rates (kinetic isotope effect).",
        detail: "Heavy bonds sit lower and climb higher."
      }
    ],
    examples: [
      {
        title: "CO bond length",
        problem: "CO microwave spacing $2B = 3.86$ per cm. Find $r_{0}$ ($\\mu = 6.86$ u).",
        steps: [
          { label: "Step 1: B energy", text: "$B = 1.93$ per cm $= 3.836 \\times 10^{-23}$ J." },
          { label: "Step 2: Inertia", text: "$I = \\hbar^{2}/2B = 1.453 \\times 10^{-46}$ kg-m-squared." },
          { label: "Step 3: Length", text: "$r = \\sqrt{I/\\mu} = \\sqrt{1.453 \\times 10^{-46}/1.139 \\times 10^{-26}} = 1.13 \\times 10^{-10}$ m." }
        ],
        result: "$r_{0} = 0.113$ nm."
      },
      {
        title: "HCl spring",
        problem: "$\\tilde{\\nu} = 2886$ per cm for HCl ($\\mu = 0.979$ u). Find $k$.",
        steps: [
          { label: "Step 1: Omega", text: "$\\omega = 2\\pi c\\tilde{\\nu} = 5.437 \\times 10^{14}$ rad/s." },
          { label: "Step 2: k", text: "$k = \\mu\\omega^{2} = (1.626 \\times 10^{-27})(2.956 \\times 10^{29}) = 481$ N/m." },
          { label: "Step 3: Sense", text: "Stiff chemical spring, $0.36$ eV steps." }
        ],
        result: "$k = 480$ N/m."
      }
    ],
    keyTakeaways: [
      "Microwave combs space $2B$ and weigh bond lengths.",
      "IR bands step $\\hbar\\omega$ and weigh bond stiffness.",
      "Selection rules branch every band into P/Q/R."
    ],
    quiz: [
      {
        q: "Rotational absorption lines are spaced by:",
        options: ["$B$", "$2B$", "$B/2$", "$hbar omega$"],
        answer: 1,
        explanation: "J to J+1 gaps grow as 2B(J+1); sequence spaces 2B."
      },
      {
        q: "Heavier isotope at same bond:",
        options: ["Widens spacing", "Narrows spacing", "No change", "Removes lines"],
        answer: 1,
        explanation: "Larger I shrinks B = hbar-squared / 2I."
      },
      {
        q: "HCl k is about:",
        options: ["$5$ N/m", "$480$ N/m", "$50000$ N/m", "$0.05$ N/m"],
        answer: 1,
        explanation: "IR frequency with reduced mass gives chemical stiffness."
      }
    ]
  },
  {
    sectionId: "young-ch42-s3",
    readingTime: 5,
    intro: "Crystals repeat a unit cell on Bravais lattices: cubic families plus hexagonal close packing cover most elements. Coordination, packing fraction, and Miller indices name every plane that diffracts. Defects, vacancies through dislocations, set real strength and color.",
    objectives: [
      "Name SC, BCC, FCC with coordination and packing",
      "Index planes $(hkl)$ and directions $[uvw]$",
      "Classify point, line, and planar defects"
    ],
    concepts: [
      {
        term: "Cubic lattices",
        kind: "definition",
        statement: "**SC (6, 52 percent), BCC (8, 68 percent), FCC (12, 74 percent)**: coordination plus packing fingerprint each.",
        detail: "Iron swaps BCC-FCC with temperature; aluminum stays FCC."
      },
      {
        term: "Miller indices",
        kind: "notation",
        statement: "**(hkl) reciprocals of intercepts** name planes; [uvw] name directions; families use braces.",
        detail: "$(111)$ close-packs FCC; Bragg reads these planes (Chapter 36)."
      },
      {
        term: "Close packing",
        kind: "theorem",
        statement: "**FCC/HCP stack $74$ percent dense** (ABC versus AB order); octahedral and tetrahedral holes host alloys.",
        detail: "Steel carbon sits in iron's holes, hardening it."
      },
      {
        term: "Defects",
        kind: "definition",
        statement: "**Vacancies, interstitials, dislocations, grain boundaries** break perfection and set conductivity, strength, color.",
        detail: "Dislocation glide makes metals ductile; pinning hardens them."
      },
      {
        term: "Amorphous versus crystal",
        kind: "insight",
        statement: "**Glasses lack long-range order**: sharp Bragg spots blur to halos, bands tail into gaps.",
        detail: "Same bonds, different organization, different spectra."
      }
    ],
    examples: [
      {
        title: "FCC density of Al",
        problem: "Al FCC $a = 0.405$ nm. Find density.",
        steps: [
          { label: "Step 1: Atoms", text: "$4$ per cell." },
          { label: "Step 2: Mass", text: "$4(26.98$ u$) = 1.792 \\times 10^{-25}$ kg per $(4.05 \\times 10^{-10})^{3} = 6.643 \\times 10^{-29}$ m-cubed." },
          { label: "Step 3: Density", text: "$2698$ kg/m-cubed, matching $2700$ tabulated." }
        ],
        result: "$2.70$ g/cm-cubed from lattice alone."
      },
      {
        title: "Indexing (111)",
        problem: "Plane cuts axes at $(1,1,1)$ cell units. What are indices?",
        steps: [
          { label: "Step 1: Reciprocals", text: "$1/1, 1/1, 1/1 = (111)$." },
          { label: "Step 2: Meaning", text: "Diagonal close-packed plane of the cube." },
          { label: "Step 3: Cut at (2,1,inf)", text: "Reciprocals $(1/2,1,0) \\to (210)$ after clearing." }
        ],
        result: "$(111)$ diagonal; scheme generalizes."
      }
    ],
    keyTakeaways: [
      "Bravais plus basis builds every crystal; cubics plus HCP dominate.",
      "Miller $(hkl)$ names Bragg planes.",
      "Defects engineer strength, color, and conduction."
    ],
    quiz: [
      {
        q: "FCC packing fraction is:",
        options: ["$52$ percent", "$68$ percent", "$74$ percent", "$100$ percent"],
        answer: 2,
        explanation: "Close-packed spheres fill about three quarters."
      },
      {
        q: "(111) plane intercepts axes at:",
        options: ["$(1,0,0)$", "$(1,1,1)$ in cell units", "$(2,2,2)$ only", "Origin only"],
        answer: 1,
        explanation: "Equal intercepts invert to equal indices."
      },
      {
        q: "Dislocations control:",
        options: ["Color only", "Plastic slip and hardness", "Nuclear decay", "Lattice constant exactly"],
        answer: 1,
        explanation: "Line-defect motion is macroscopic deformation."
      }
    ]
  },
  {
    sectionId: "young-ch42-s4",
    readingTime: 7,
    intro: "Atomic levels broaden into bands as wells merge: filled valence bands plus empty conduction bands sort every solid. Gap size decides conductor, semiconductor, insulator. Band curvature mints effective masses that drift, absorb, and emit.",
    objectives: [
      "Explain band formation from level splitting with $N$ atoms",
      "Classify solids by gap $E_{g}$ and filling",
      "Define effective mass $m^{\\ast}$ from curvature"
    ],
    concepts: [
      {
        term: "Band formation",
        kind: "theorem",
        statement: "**$N$ coupled orbitals split into $N$-state bands**; overlap grows with closeness, splitting with interaction.",
        detail: "Dimer splits $2$; crystal fans $10^{23}$ into quasi-continua."
      },
      {
        term: "Gap classification",
        kind: "law",
        statement: "**Overlapping bands conduct; $E_{g} \\sim 1$ eV semiconducts; $E_{g} > 3$ eV insulates**; filled bands carry nothing.",
        detail: "Si $1.12$ eV, GaAs $1.42$ eV, diamond $5.5$ eV, copper overlapped."
      },
      {
        term: "Effective mass",
        kind: "definition",
        statement: "**$m^{\\ast} = \\hbar^{2}/(d^{2}E/dk^{2})$**: band curvature stands in for inertia, even negative near tops.",
        detail: "GaAs electrons $0.067m_{e}$ sprint; heavy holes lumber."
      },
      {
        term: "Holes",
        kind: "definition",
        statement: "**Missing valence electrons act as positive carriers** with upward-curving energy.",
        detail: "Current sums electron plus hole drifts; Hall signs reveal both."
      },
      {
        term: "Direct versus indirect gaps",
        kind: "method",
        statement: "**Direct gaps emit light efficiently** (GaAs LEDs); **indirect need phonons** (Si glows poorly).",
        detail: "Momentum alignment, not just size, picks optoelectronics."
      }
    ],
    figures: [
      {
        caption: "Bands versus gap $E_{g}$: overlapping (metal), small-gap (semiconductor), large-gap (insulator)",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Bands versus gap E_g: overlapping (metal), small-gap (semiconductor), large-gap (insulator)"><rect x="0" y="0" width="400" height="200" fill="none"/><rect x="50" y="60" width="60" height="50" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><rect x="50" y="120" width="60" height="50" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><rect x="170" y="60" width="60" height="40" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><rect x="170" y="130" width="60" height="40" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><rect x="290" y="50" width="60" height="35" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><rect x="290" y="135" width="60" height="35" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><text x="45" y="190" font-size="12" fill="currentColor">metal: overlap</text><text x="160" y="190" font-size="12" fill="currentColor">semi: small Eg</text><text x="285" y="190" font-size="12" fill="currentColor">insulator: big Eg</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Silicon cutoff",
        problem: "Si $E_{g} = 1.12$ eV. Find absorption edge.",
        steps: [
          { label: "Step 1: Wavelength", text: "$\\lambda_{g} = 1240/1.12 = 1107$ nm." },
          { label: "Step 2: Meaning", text: "Transparent beyond $1100$ nm; solar cells waste that infrared." },
          { label: "Step 3: Versus GaAs", text: "$1.42$ eV gives $873$ nm: better single-junction sun match." }
        ],
        result: "$1107$ nm silicon edge."
      },
      {
        title: "Effective acceleration",
        problem: "GaAs electron $m^{\\ast} = 0.067m_{e}$ in $10^{4}$ V/m. Find acceleration.",
        steps: [
          { label: "Step 1: Force", text: "$F = eE = 1.602 \\times 10^{-15}$ N." },
          { label: "Step 2: Mass", text: "$m^{\\ast} = 6.10 \\times 10^{-32}$ kg." },
          { label: "Step 3: a", text: "$2.63 \\times 10^{16}$ m/s-squared, $15$ times free-electron response." }
        ],
        result: "Light effective mass sprints $15$ times faster."
      }
    ],
    keyTakeaways: [
      "Coupling fans levels into bands; gaps plus filling classify solids.",
      "$m^{\\ast}$ and holes rewrite carrier dynamics.",
      "Direct gaps light up; indirect gaps compute."
    ],
    quiz: [
      {
        q: "Filled band carries current:",
        options: ["Large", "Zero net", "Negative always", "Infinite"],
        answer: 1,
        explanation: "Symmetric k-fill cancels velocity sums."
      },
      {
        q: "Si 1.12 eV is a:",
        options: ["Metal", "Semiconductor", "Insulator", "Superconductor"],
        answer: 1,
        explanation: "eV-scale gap with thermal and dopant carriers."
      },
      {
        q: "LEDs want gaps that are:",
        options: ["Indirect", "Direct", "Zero", "Infinite"],
        answer: 1,
        explanation: "Momentum-matched recombination emits photons efficiently."
      }
    ]
  },
  {
    sectionId: "young-ch42-s5",
    readingTime: 6,
    intro: "Valence electrons roam as a Fermi gas: $E_{F}$ near $7$ eV, $v_{F}$ near $10^{6}$ m/s, degeneracy pressure holding metals up. Conductivity $\\sigma = ne^{2}\\tau/m$ prices scattering time $\\tau$; heat capacity grows as $T/T_{F}$. Drude plus Fermi explains shine, conduction, and contact potentials.",
    objectives: [
      "State Fermi-Dirac $f(E) = 1/(e^{(E-E_{F})/kT} + 1)$ and $E_{F}$ scale",
      "Derive $\\sigma = ne^{2}\\tau/m$ qualitatively",
      "Explain work function and contact potential"
    ],
    concepts: [
      {
        term: "Fermi-Dirac occupation",
        kind: "law",
        statement: "**$f(E) = 1/[e^{(E-E_{F})/kT}+1]$**: step at $0$ K smeared over $kT$ at room.",
        detail: "$T_{F} \\sim 80000$ K dwarfs $300$ K: metals stay degenerate."
      },
      {
        term: "Drude conductivity",
        kind: "theorem",
        statement: "**$\\sigma = ne^{2}\\tau/m$**; resistivity prices collision rate $1/\\tau$ from phonons plus impurities.",
        detail: "Copper $\\tau \\approx 25$ fs at $300$ K; Matthiessen sums rates."
      },
      {
        term: "Electronic heat capacity",
        kind: "theorem",
        statement: "**$C_{el} = \\gamma T$** with only $T/T_{F}$ electrons active; phonons ($T^{3}$) win except near zero.",
        detail: "Sommerfeld linear term fingerprints $E_{F}$ density of states."
      },
      {
        term: "Work function",
        kind: "definition",
        statement: "**$\\phi = E_{vac} - E_{F}$** prices electron escape ($2$-$5$ eV); photoelectric and thermionic currents follow.",
        detail: "Cesium $2.14$ eV ejects under green; tungsten $4.5$ eV needs heat plus field."
      },
      {
        term: "Contact potential",
        kind: "insight",
        statement: "**Joining metals aligns $E_{F}$**, spilling charge until Volta $\\Delta\\phi/e$ balances.",
        detail: "Thermocouples and Schottky barriers are this alignment in action."
      }
    ],
    examples: [
      {
        title: "Copper scattering time",
        problem: "Copper $\\sigma = 5.96 \\times 10^{7}$ S/m, $n = 8.47 \\times 10^{28}$ per m-cubed. Find $\\tau$ and mean free path.",
        steps: [
          { label: "Step 1: Tau", text: "$\\tau = \\sigma m/ne^{2} = (5.96 \\times 10^{7})(9.11 \\times 10^{-31})/(8.47 \\times 10^{28}(1.602 \\times 10^{-19})^{2}) = 2.50 \\times 10^{-14}$ s." },
          { label: "Step 2: Path", text: "$l = v_{F}\\tau = (1.57 \\times 10^{6})(2.50 \\times 10^{-14}) = 39$ nm." },
          { label: "Step 3: Atoms", text: "$\\sim 150$ spacings between collisions at room temperature." }
        ],
        result: "$\\tau = 25$ fs, $l = 39$ nm."
      },
      {
        title: "Active fraction",
        problem: "What fraction of copper electrons carry heat at $300$ K?",
        steps: [
          { label: "Step 1: Ratio", text: "$T/T_{F} = 300/81000 = 0.0037$." },
          { label: "Step 2: Meaning", text: "Under $1$ percent participate; the Fermi sea is frozen." },
          { label: "Step 3: Contrast", text: "Classical gas would give $3R/2$ per mole; observed electronic $\\sim 1$ percent of that." }
        ],
        result: "$0.4$ percent of electrons thermally active."
      }
    ],
    keyTakeaways: [
      "Fermi step at $E_{F}$ (eV scale) governs all metal electrons.",
      "$\\sigma = ne^{2}\\tau/m$ separates density from scattering.",
      "Work functions and contacts align Fermi seas."
    ],
    quiz: [
      {
        q: "Fermi function at E = $E_{F}$ equals:",
        options: ["$1$", "$1/2$", "$0$", "Infinity"],
        answer: 1,
        explanation: "Exponent zero gives half occupation at any T."
      },
      {
        q: "Resistivity rises with T because:",
        options: ["n drops", "Phonon scattering shortens tau", "Electrons freeze", "Work function rises"],
        answer: 1,
        explanation: "Lattice vibration rate grows roughly linearly."
      },
      {
        q: "Electronic heat capacity scales as:",
        options: ["$T^{3}$", "$T$", "$1/T$", "Constant"],
        answer: 1,
        explanation: "Only the thermal shell near $E_{F}$ contributes."
      }
    ]
  },
  {
    sectionId: "young-ch42-s6",
    readingTime: 7,
    intro: "A pinch of dopant rewrites conductivity: donors park electrons below the conduction band, acceptors park holes above valence. The law of mass action $np = n_{i}^{2}$ trades electrons against holes. Conductivity $\\sigma = e(n\\mu_{e} + p\\mu_{h})$ spans $10$ orders with doping and temperature.",
    objectives: [
      "Distinguish n-type donors from p-type acceptors with band sketches",
      "Apply $np = n_{i}^{2}$ with $n_{i}$ for Si",
      "Compute $\\sigma$ from $n$, $p$, mobilities"
    ],
    concepts: [
      {
        term: "Donors and acceptors",
        kind: "definition",
        statement: "**P in Si donates $45$ meV electrons (n-type); B accepts holes (p-type)**; hydrogenic levels scaled by $\\epsilon$, $m^{\\ast}$.",
        detail: "ppm doping beats intrinsic $10^{10}$ per cm-cubed by $10^{6}$."
      },
      {
        term: "Mass action",
        kind: "law",
        statement: "**$np = n_{i}^{2}$** in equilibrium; doping raises one carrier and suppresses the other.",
        detail: "Si $n_{i} = 10^{10}$ per cm-cubed at $300$ K; GaAs $10^{6}$."
      },
      {
        term: "Conductivity tuning",
        kind: "theorem",
        statement: "**$\\sigma = e(n\\mu_{e} + p\\mu_{h})$** with mobilities $\\mu = e\\tau/m^{\\ast}$ (Si $1350$/$480$ cm-squared/V-s).",
        detail: "Resistivity charts span doped-Si $10^{-3}$ to intrinsic $10^{5}$ ohm-cm."
      },
      {
        term: "Freeze-out to intrinsic",
        kind: "insight",
        statement: "**Cold freezes dopants out; heat excites across the gap**: extrinsic plateau sits between.",
        detail: "Devices live on the plateau; sensors exploit the intrinsic rise."
      },
      {
        term: "Hall identification",
        kind: "method",
        statement: "**Hall sign names the majority carrier**; magnitude weighs $1/ne$.",
        detail: "Negative Hall: electrons; positive: holes."
      }
    ],
    figures: [
      {
        caption: "Doping: donor electrons below $E_{c}$ (n-type) and acceptor holes above $E_{v}$ (p-type)",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Doping: donor electrons below E_c (n-type) and acceptor holes above E_v (p-type)"><rect x="0" y="0" width="400" height="200" fill="none"/><rect x="60" y="40" width="100" height="30" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><rect x="60" y="130" width="100" height="30" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="105" x2="160" y2="105" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4"/><circle cx="110" cy="105" r="4" fill="currentColor"/><rect x="240" y="40" width="100" height="30" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><rect x="240" y="130" width="100" height="30" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><line x1="240" y1="125" x2="340" y2="125" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4"/><circle cx="290" cy="125" r="5" fill="none" stroke="currentColor" stroke-width="2"/><text x="70" y="30" font-size="12" fill="currentColor">n-type donor e</text><text x="250" y="30" font-size="12" fill="currentColor">p-type acceptor hole</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Phosphorus doping",
        problem: "Si doped $N_{d} = 10^{16}$ per cm-cubed fully ionized. Find $n$, $p$, $\\rho$ ($\\mu_{e} = 1350$ cm-squared/V-s).",
        steps: [
          { label: "Step 1: Carriers", text: "$n = 10^{16}$; $p = n_{i}^{2}/n = 10^{20}/10^{16} = 10^{4}$ per cm-cubed." },
          { label: "Step 2: Conductivity", text: "$\\sigma = (1.602 \\times 10^{-19})(10^{16})(1350) = 2.16$ S/cm." },
          { label: "Step 3: Resistivity", text: "$\\rho = 0.463$ ohm-cm versus intrinsic $2 \\times 10^{5}$: $10^{5}$ times more conducting." }
        ],
        result: "$n = 10^{16}$, $p = 10^{4}$ per cm-cubed, $\\rho = 0.46$ ohm-cm."
      },
      {
        title: "Intrinsic Si",
        problem: "Intrinsic Si $n = p = 10^{10}$ per cm-cubed. Find $\\sigma$.",
        steps: [
          { label: "Step 1: Sum", text: "$\\sigma = e n(\\mu_{e}+\\mu_{h}) = (1.602 \\times 10^{-19})(10^{10})(1830) = 2.93 \\times 10^{-6}$ S/cm." },
          { label: "Step 2: Rho", text: "$\\rho = 3.4 \\times 10^{5}$ ohm-cm." },
          { label: "Step 3: Lesson", text: "Pure silicon is a poor conductor; doping makes electronics." }
        ],
        result: "$\\rho = 3.4 \\times 10^{5}$ ohm-cm intrinsic."
      }
    ],
    keyTakeaways: [
      "Donors give electrons, acceptors give holes, meV from bands.",
      "$np = n_{i}^{2}$ always; doping trades majority for minority.",
      "Mobility-weighted carriers set $\\sigma$ across $10$ orders."
    ],
    quiz: [
      {
        q: "P in Si is a:",
        options: ["Acceptor", "Donor", "Isotope", "Trap only"],
        answer: 1,
        explanation: "Group V adds a loosely bound fifth electron."
      },
      {
        q: "n = 1e16/cm3 in Si gives p:",
        options: ["$1e16$", "$1e4$", "$1e10$", "$1e20$"],
        answer: 1,
        explanation: "$10^{20}/10^{16} = 10^{4}$ per cm-cubed."
      },
      {
        q: "Hall coefficient negative means majority carriers are:",
        options: ["Holes", "Electrons", "Ions", "Photons"],
        answer: 1,
        explanation: "Sign follows the drifting charge."
      }
    ]
  },
  {
    sectionId: "young-ch42-s7",
    readingTime: 7,
    intro: "Join p to n and diffusion builds a depletion field that rectifies: forward bias flattens the hill, reverse steepens it. Transistors gate this hill with a third terminal to switch and amplify. Diodes plus transistors are the alphabet of chips.",
    objectives: [
      "Explain built-in $V_{bi}$ and depletion width formation",
      "State diode $I = I_{s}(e^{eV/kT} - 1)$ with forward/reverse behavior",
      "Distinguish BJT current gain from MOSFET gate control"
    ],
    concepts: [
      {
        term: "Built-in potential",
        kind: "theorem",
        statement: "**$V_{bi} = (kT/e)\\ln(N_{a}N_{d}/n_{i}^{2})$** ($\\sim 0.7$ V Si): diffusion versus drift balance.",
        detail: "$N = 10^{16}$ each side gives $0.69$ V."
      },
      {
        term: "Diode equation",
        kind: "law",
        statement: "**$I = I_{s}(e^{eV/kT}-1)$**: exponential forward, $-I_{s}$ reverse until breakdown.",
        detail: "$60$ mV per decade at room; $0.7$ V turns Si on."
      },
      {
        term: "BJT action",
        kind: "definition",
        statement: "**Base current meters collector flow**: $I_{C} = \\beta I_{B}$ ($\\beta \\sim 100$) across a thin base.",
        detail: "Emitter injects, base steers, collector gathers."
      },
      {
        term: "MOSFET action",
        kind: "definition",
        statement: "**Gate voltage inverts a channel** under oxide; drain current follows $V_{GS}$ with (near) zero DC gate current.",
        detail: "CMOS pairs n- and p-FETs for switch-only dissipation."
      },
      {
        term: "Light devices",
        kind: "method",
        statement: "**LEDs forward-inject to emit $hc/E_{g}$; solar cells collect photo-splits** at the same junction reversed.",
        detail: "Same diode, opposite energy direction."
      }
    ],
    figures: [
      {
        caption: "p-n junction: diffusion builds depletion field $V_{bi}$; forward bias flattens the hill",
        svg: '<svg viewBox="0 0 400 190" style="width:100%;height:auto" role="img" aria-label="p-n junction: diffusion builds depletion field V_bi; forward bias flattens the hill"><rect x="0" y="0" width="400" height="190" fill="none"/><rect x="60" y="60" width="120" height="70" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="220" y="60" width="120" height="70" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="110" y="100" font-size="13" fill="currentColor">p</text><text x="270" y="100" font-size="13" fill="currentColor">n</text><line x1="180" y1="60" x2="180" y2="130" stroke="currentColor" stroke-width="2" stroke-dasharray="5,4"/><text x="150" y="155" font-size="12" fill="currentColor">depletion: built-in E</text><path d="M 60 40 L 180 40 L 180 90 L 340 90" fill="none" stroke="currentColor" stroke-width="2"/><text x="345" y="93" font-size="12" fill="currentColor">band hill Vbi</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Built-in voltage",
        problem: "Si $N_{a} = N_{d} = 10^{16}$ per cm-cubed. Find $V_{bi}$ at $300$ K.",
        steps: [
          { label: "Step 1: Formula", text: "$V_{bi} = 0.02585\\ln(10^{32}/10^{20}) = 0.02585\\ln(10^{12})$." },
          { label: "Step 2: Number", text: "$= 0.02585 \\times 27.63 = 0.714$ V." },
          { label: "Step 3: Depletion", text: "Width $\\sim 0.3$ microM shared by both sides." }
        ],
        result: "$V_{bi} = 0.71$ V."
      },
      {
        title: "Diode current jump",
        problem: "Si diode current at $0.60$ V is $1.0$ mA. Estimate at $0.66$ V.",
        steps: [
          { label: "Step 1: Decades", text: "$0.060$ V is one decade ($60$ mV/decade).", },
          { label: "Step 2: Scale", text: "$I = 10$ mA." },
          { label: "Step 3: Heating", text: "Series resistance and self-heating temper real jumps." }
        ],
        result: "$10$ mA, tenfold per $60$ mV."
      }
    ],
    keyTakeaways: [
      "Depletion fields rectify via $V_{bi}$ and exponential injection.",
      "BJTs amplify current; MOSFETs switch voltage with no gate DC.",
      "Optoelectronics run the same junction forward (LED) or backward (cell)."
    ],
    quiz: [
      {
        q: "$V_{bi}$ for symmetric 1e16 Si is about:",
        options: ["$0.07$ V", "$0.7$ V", "$7$ V", "$70$ V"],
        answer: 1,
        explanation: "kT/e times log of doping over ni-squared."
      },
      {
        q: "Forward Si diode drops about:",
        options: ["$0.07$ V", "$0.7$ V", "$7$ V", "$70$ V"],
        answer: 1,
        explanation: "Exponential turn-on lands near 0.6-0.8 V."
      },
      {
        q: "MOSFET advantage over BJT is:",
        options: ["Higher power always", "Near-zero DC gate current", "No switching", "Vacuum operation"],
        answer: 1,
        explanation: "Insulated gate draws only transient charge."
      },
      {
        q: "Solar cell is a p-n junction run:",
        options: ["Forward emitting", "Reverse collecting photocarriers", "Shorted always", "Open never"],
        answer: 1,
        explanation: "Built-in field sweeps photo-pairs to contacts."
      }
    ]
  },
  {
    sectionId: "young-ch42-s8",
    readingTime: 6,
    intro: "Cool mercury and resistance vanishes: Cooper pairs condense into one macroscopic wave function with gapped excitations. Meissner expels flux; type-II threads it in quantized vortices to $100+$ T. BCS phonon glue explains low-$T_{c}$; cuprates and hydrides chase room temperature.",
    objectives: [
      "State zero resistance plus Meissner as the two superconducting hallmarks",
      "Distinguish type-I $H_{c}$ from type-II $H_{c1}$, $H_{c2}$",
      "Describe Cooper pairs, gap $2\\Delta$, and flux quantization $\\Phi_{0}$"
    ],
    concepts: [
      {
        term: "Two hallmarks",
        kind: "law",
        statement: "**$\\rho = 0$ below $T_{c}$ plus $B = 0$ inside (Meissner)** define superconductivity; perfect conductors lack the second.",
        detail: "Hg $4.2$ K (1911); NbTi $9.5$ K; YBCO $92$ K; hydrides $250+$ K under pressure."
      },
      {
        term: "Cooper pairs",
        kind: "theorem",
        statement: "**Phonon-mediated $k$-up/$-k$-down pairs** condense with gap **$2\\Delta \\approx 3.5kT_{c}$** (BCS).",
        detail: "Gap blocks scattering: no states to scatter into."
      },
      {
        term: "Type I versus II",
        kind: "definition",
        statement: "**Type-I expels to $H_{c}$ then quits; type-II admits vortices $H_{c1}$-$H_{c2}$** to $100+$ T.",
        detail: "MRI NbTi at $5$ T and LHC Nb3Sn at $8$ T are type-II vortex states."
      },
      {
        term: "Flux quantization",
        kind: "theorem",
        statement: "**$\\Phi = n\\Phi_{0}$**, $\\Phi_{0} = h/2e = 2.07 \\times 10^{-15}$ Wb; SQUIDs count single quanta.",
        detail: "$2e$ charge of pairs halves the flux unit."
      },
      {
        term: "Beyond BCS",
        kind: "insight",
        statement: "**Cuprates, pnictides, hydrides exceed phonon ceilings** with magnetic or unknown glue; room-$T$ at ambient pressure stays open.",
        detail: "Mechanism Nobel awaits; applications advance regardless."
      }
    ],
    examples: [
      {
        title: "Lead gap",
        problem: "Pb $T_{c} = 7.2$ K. Estimate BCS gap.",
        steps: [
          { label: "Step 1: Formula", text: "$2\\Delta = 3.5kT_{c} = 3.5(8.617 \\times 10^{-5})(7.2) = 2.17 \\times 10^{-3}$ eV." },
          { label: "Step 2: Frequency", text: "$= 2.2$ meV, about $0.5$ THz photons break pairs." },
          { label: "Step 3: Measured", text: "$2.7$ meV (strong coupling exceeds BCS $3.5$ slightly)." }
        ],
        result: "$2.2$ meV BCS estimate."
      },
      {
        title: "Vortex spacing at 5 T",
        problem: "Triangular lattice at $B = 5.0$ T. Find vortex spacing.",
        steps: [
          { label: "Step 1: Cell", text: "Area per quantum $\\Phi_{0}/B = 2.07 \\times 10^{-15}/5.0 = 4.14 \\times 10^{-16}$ m-squared." },
          { label: "Step 2: Spacing", text: "$a = \\sqrt{2\\Phi_{0}/(\\sqrt{3}B)} = 21.9$ nm." },
          { label: "Step 3: Pinning", text: "Defects pin this lattice to carry loss-free current." }
        ],
        result: "$22$ nm vortex lattice."
      }
    ],
    keyTakeaways: [
      "Zero $\\rho$ plus Meissner expulsion define the state.",
      "Pairs plus gap explain persistence; vortices extend magnets to $100$ T.",
      "Flux quantizes in $h/2e$ units read by SQUIDs."
    ],
    quiz: [
      {
        q: "Superconductivity requires:",
        options: ["Zero resistance only", "Zero resistance plus Meissner expulsion", "High resistance", "Ferromagnetism"],
        answer: 1,
        explanation: "Perfect conductors mimic the first, never the second."
      },
      {
        q: "Flux quantum is h/2e because carriers are:",
        options: ["Single electrons", "Cooper pairs", "Protons", "Photons"],
        answer: 1,
        explanation: "Pair charge 2e halves the Aharonov-Bohm period."
      },
      {
        q: "Type-II magnets reach high field via:",
        options: ["Thicker wire", "Vortex state between Hc1 and Hc2", "Heating", "AC only"],
        answer: 1,
        explanation: "Quantized flux threads without quenching to Hc2."
      }
    ]
  }
];
