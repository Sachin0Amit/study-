import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 41: Atomic Structure.

export const youngCh41Content: SectionContent[] = [
  {
    sectionId: "young-ch41-s1",
    readingTime: 6,
    intro: "Three dimensions multiply quantum numbers: each axis contributes its confinement energy and node count. Separation of variables splits the box and oscillator into independent 1D problems. Degeneracy appears when different node patterns share one energy.",
    objectives: [
      "Separate 3D Schrodinger into three 1D equations",
      "Write box energies $E = h^{2}(n_{x}^{2}/L_{x}^{2} + ...)/8m$ style sums",
      "Define degeneracy with examples"
    ],
    concepts: [
      {
        term: "Separation of variables",
        kind: "method",
        statement: "For $U(x,y,z) = U_{x} + U_{y} + U_{z}$, **$\\psi = X(x)Y(y)Z(z)$** and $E = E_{x} + E_{y} + E_{z}$.",
        detail: "Box and 3D oscillator separate; hydrogen separates in spherical coordinates instead."
      },
      {
        term: "Three quantum numbers",
        kind: "notation",
        statement: "Independent integers **$(n_{x}, n_{y}, n_{z})$** count nodes per axis; the state is their product.",
        detail: "$(2,1,1)$ has one interior nodal plane perpendicular to $x$."
      },
      {
        term: "Degeneracy",
        kind: "definition",
        statement: "**Distinct states sharing one energy** (e.g. $(2,1,1)$, $(1,2,1)$, $(1,1,2)$ in a cube) are degenerate.",
        detail: "Symmetry causes degeneracy; perturbations split it (Zeeman, Stark)."
      },
      {
        term: "Density of states preview",
        kind: "insight",
        statement: "Counting $(n_{x},n_{y},n_{z})$ lattice points **grows as $E^{1/2}$ per volume**, seeding Fermi statistics (Chapter 42).",
        detail: "Each unit cell of n-space holds one orbital times spin two."
      },
      {
        term: "3D oscillator",
        kind: "theorem",
        statement: "Isotropic oscillator: **$E = (N + 3/2)\\hbar\\omega$** with $N = n_{x}+n_{y}+n_{z}$ and degeneracy $(N+1)(N+2)/2$.",
        detail: "Nuclear shells echo this ladder with spin-orbit tweaks."
      }
    ],
    examples: [
      {
        title: "Cube degeneracies",
        problem: "Cube $L = 1$ nm electron. List states through second excited energy.",
        steps: [
          { label: "Step 1: Unit", text: "$E_{0} = h^{2}/8mL^{2} = 0.376$ eV; $E = E_{0}(n_{x}^{2}+n_{y}^{2}+n_{z}^{2})$." },
          { label: "Step 2: Ladder", text: "Ground $3E_{0} = 1.13$ eV $(1,1,1)$; first $6E_{0}$ threefold; second $9E_{0}$ threefold $(2,2,1)$ permutations." },
          { label: "Step 3: Photon", text: "First-to-ground gap $3E_{0} = 1.13$ eV: $1100$ nm." }
        ],
        result: "Ground single, excited manifolds threefold each."
      },
      {
        title: "Anisotropic lift",
        problem: "Box $L_{x} = 1$ nm, $L_{y} = L_{z} = 2$ nm. Which of $(2,1,1)$ vs $(1,1,2)$ is lower?",
        steps: [
          { label: "Step 1: Scale", text: "Energy weights $1/L^{2}$: $x$ confinement costs $4$ times $y$ or $z$." },
          { label: "Step 2: Compare", text: "$(2,1,1)$ adds $3E_{0x}$; $(1,1,2)$ adds small $z$ cost: latter lower." },
          { label: "Step 3: Lesson", text: "Stretching splits cubic degeneracy predictably." }
        ],
        result: "$(1,1,2)$ lies below $(2,1,1)$."
      }
    ],
    keyTakeaways: [
      "Separable potentials sum 1D energies and multiply states.",
      "Three integers label nodes per axis.",
      "Symmetry degenerates; asymmetry splits."
    ],
    quiz: [
      {
        q: "Cubic box first excited manifold is degenerate:",
        options: ["1-fold", "3-fold", "6-fold", "9-fold"],
        answer: 1,
        explanation: "Permutations (211), (121), (112) share energy."
      },
      {
        q: "Separation works when potential is:",
        options: ["Spherically symmetric only", "A sum of per-axis terms", "Zero everywhere", "Infinite everywhere"],
        answer: 1,
        explanation: "Additive U splits the PDE into independent ODEs."
      },
      {
        q: "3D isotropic oscillator degeneracy of N = 1 is:",
        options: ["$1$", "$3$", "$6$", "$2$"],
        answer: 1,
        explanation: "$(N+1)(N+2)/2 = 3$ states: one quantum on x, y, or z."
      }
    ]
  },
  {
    sectionId: "young-ch41-s2",
    readingTime: 5,
    intro: "The cubic box solved in Section 41.1 doubles as a state counter: each $(n_{x},n_{y},n_{z})$ triple is one orbital, two electrons with spin. Summing filled levels builds Fermi seas and periodic-table blocks. Degeneracy counting here pays off in metals and atoms.",
    objectives: [
      "Count states in a 3D box through Fermi energy estimates",
      "Relate degeneracy to shell filling order",
      "Compute electron count for a filled manifold"
    ],
    concepts: [
      {
        term: "State counting",
        kind: "method",
        statement: "**One orbital per positive-octant lattice point**, two electrons with spin; count octant volume for large $N$.",
        detail: "Fermi sphere radius in n-space sets metal electron energies."
      },
      {
        term: "Fermi energy preview",
        kind: "theorem",
        statement: "**$E_{F} = (\\hbar^{2}/2m)(3\\pi^{2}n)^{2/3}$** for density $n$: the top filled level at zero temperature.",
        detail: "Copper $E_{F} \\approx 7$ eV, $v_{F} \\approx 10^{6}$ m/s."
      },
      {
        term: "Shell filling",
        kind: "method",
        statement: "Fill lowest orbitals first (**Aufbau**) respecting Pauli; Hund maximizes spin in degenerate manifolds.",
        detail: "Full rules arrive in Section 41.6; the box shows why shells exist."
      },
      {
        term: "Degeneracy times spin",
        kind: "notation",
        statement: "**Capacity $= 2 \\times$ orbital degeneracy**; $p$-like manifold holds $6$.",
        detail: "Hydrogen $n = 2$ holds $8$ counting spin (Section 41.3)."
      },
      {
        term: "Box to atom bridge",
        kind: "insight",
        statement: "Box levels go as **sums of squares**; Coulomb goes as **$1/n^{2}$**: different ladders, same filling logic.",
        detail: "Order swaps ($4s$ before $3d$) come from radial details, not the counting."
      }
    ],
    examples: [
      {
        title: "Copper Fermi energy",
        problem: "Copper $n = 8.47 \\times 10^{28}$ per m-cubed. Find $E_{F}$.",
        steps: [
          { label: "Step 1: Formula", text: "$E_{F} = (\\hbar^{2}/2m)(3\\pi^{2}n)^{2/3}$." },
          { label: "Step 2: Number", text: "$(3\\pi^{2}n)^{2/3} = 1.64 \\times 10^{20}$ per m-squared; times $\\hbar^{2}/2m = 6.10 \\times 10^{-39}$ gives $1.13 \\times 10^{-18}$ J." },
          { label: "Step 3: eV", text: "$7.03$ eV; Fermi temperature $81000$ K." }
        ],
        result: "$E_{F} = 7.0$ eV for copper."
      },
      {
        title: "Filled-manifold capacity",
        problem: "How many electrons fill cubic $(1,1,1)$ plus all three $(2,1,1)$ permutations?",
        steps: [
          { label: "Step 1: Orbitals", text: "$1 + 3 = 4$ orbitals." },
          { label: "Step 2: Spin", text: "Times $2$ gives $8$ electrons." },
          { label: "Step 3: Echo", text: "Same $8$ as hydrogen $n = 2$ shell: $2s + 2p$." }
        ],
        result: "$8$ electrons close the manifold."
      }
    ],
    keyTakeaways: [
      "Count orbitals in n-space, double for spin.",
      "Fermi energy is the top filled box level.",
      "Filling logic previews atomic shells."
    ],
    quiz: [
      {
        q: "Each (nx,ny,nz) orbital holds electrons numbering:",
        options: ["$1$", "$2$", "$4$", "$8$"],
        answer: 1,
        explanation: "Pauli allows spin up plus spin down."
      },
      {
        q: "Fermi energy scales with density as:",
        options: ["$n$", "$n^{2/3}$", "$n^{1/2}$", "$1/n$"],
        answer: 1,
        explanation: "Sphere volume in k-space gives the two-thirds power."
      },
      {
        q: "(1,1,1) plus (2,1,1) permutations hold total electrons:",
        options: ["$4$", "$6$", "$8$", "$2$"],
        answer: 2,
        explanation: "Four orbitals times spin two."
      }
    ]
  },
  {
    sectionId: "young-ch41-s3",
    readingTime: 8,
    intro: "Coulomb's $1/r$ potential quantizes to $E_{n} = -13.6/n^{2}$ eV with orbitals labeled by $n$, $l$, $m_{l}$. Radial nodes plus angular lobes shape $s$, $p$, $d$ clouds; $|\\psi|^{2}$ peaks near Bohr radii without ever being an orbit. This is the hydrogen solution behind all chemistry.",
    objectives: [
      "State quantum numbers $n$, $l$, $m_{l}$ with ranges $0 \\le l \\le n-1$, $|m_{l}| \\le l$",
      "Write $E_{n} = -13.6/n^{2}$ eV and degeneracy $2n^{2}$",
      "Sketch $1s$, $2s$, $2p$ radial probabilities and name shapes"
    ],
    concepts: [
      {
        term: "Hydrogen quantum numbers",
        kind: "notation",
        statement: "**$n = 1,2$,...; $l = 0,...,n-1$; $m_{l} = -l,...,l$** label energy, angular momentum $\\sqrt{l(l+1)}\\hbar$, and $z$-component $m_{l}\\hbar$.",
        detail: "Letters $s,p,d,f$ are $l = 0,1,2,3$."
      },
      {
        term: "Energy depends only on n",
        kind: "theorem",
        statement: "**Nonrelativistic Coulomb: $E_{n} = -13.6/n^{2}$ eV**, degenerate in $l$, $m_{l}$ ($n^{2}$ orbitals, $2n^{2}$ with spin).",
        detail: "Relativity, spin-orbit, and Lamb shift later split $l$ finely."
      },
      {
        term: "Radial probability",
        kind: "method",
        statement: "**$P(r)dr = |R|^{2}r^{2}dr$** peaks at $a_{0}$ for $1s$; $2s$ has one radial node, $2p$ none but vanishes at origin.",
        detail: "$r^{2}$ volume factor moves peaks outward from $R$ maxima."
      },
      {
        term: "Orbital shapes",
        kind: "definition",
        statement: "**$s$ spheres, $p$ dumbbells ($3$ orientations), $d$ clovers ($5$)** from $|Y_{l}^{m}|^{2}$ angular patterns.",
        detail: "Chemistry bonds are these lobes overlapping."
      },
      {
        term: "Cloud versus orbit",
        kind: "insight",
        statement: "**No trajectory exists**; $a_{0}$ is the likeliest radius, not a track. Bohr gets $E_{n}$ right with wrong pictures.",
        detail: "Ground $\\langle r \\rangle = 1.5a_{0}$ but most probable $a_{0}$: distributions, not circles."
      }
    ],
    figures: [
      {
        caption: "Hydrogen $1s$, $2s$, $2p$ radial probability $P(r)$: peak near $a_{0}$ with $n-l-1$ radial nodes",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Hydrogen 1s, 2s, 2p radial probability P(r): peak near a_0 with n-l-1 radial nodes"><rect x="0" y="0" width="400" height="200" fill="none"/><line x1="40" y1="160" x2="370" y2="160" stroke="currentColor" stroke-width="1.5"/><path d="M 40 160 C 70 160, 75 60, 110 60 C 145 60, 150 160, 200 160" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M 40 160 C 90 160, 120 140, 160 100 C 200 60, 240 90, 300 150" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6,4"/><text x="105" y="45" font-size="12" fill="currentColor">1s peak at a0</text><text x="230" y="80" font-size="12" fill="currentColor">2p (no node)</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "n = 2 manifold",
        problem: "List $n = 2$ states and capacity.",
        steps: [
          { label: "Step 1: Orbitals", text: "$2s$ ($l = 0$, $m = 0$) plus $2p$ ($l = 1$, $m = -1,0,1$): $4$ orbitals." },
          { label: "Step 2: Energy", text: "All $-3.40$ eV nonrelativistically." },
          { label: "Step 3: Electrons", text: "Times spin $2$ gives $8$: the neon-shell octet seed." }
        ],
        result: "$4$ orbitals, $8$ electrons, all $-3.40$ eV."
      },
      {
        title: "Most likely versus mean",
        problem: "$1s$ radial density $P = 4r^{2}e^{-2r/a_{0}}/a_{0}^{3}$. Verify peak and mean.",
        steps: [
          { label: "Step 1: Peak", text: "$dP/dr = 0$ gives $r = a_{0}$ most probable." },
          { label: "Step 2: Mean", text: "$\\langle r \\rangle = 3a_{0}/2 = 1.5a_{0}$ by gamma integral." },
          { label: "Step 3: Moral", text: "Skewed tail pulls mean past the peak: quote carefully." }
        ],
        result: "Peak $a_{0}$, mean $1.5a_{0}$."
      }
    ],
    keyTakeaways: [
      "$(n,l,m_{l})$ with $l < n$, $|m_{l}| \\le l$ label every orbital.",
      "$E_{n} = -13.6/n^{2}$ eV with $2n^{2}$ capacity.",
      "Radial nodes $n-l-1$ plus angular lobes shape the clouds."
    ],
    quiz: [
      {
        q: "n = 3 holds orbitals numbering:",
        options: ["$3$", "$6$", "$9$", "$18$"],
        answer: 2,
        explanation: "$n^{2} = 9$ orbitals; $18$ with spin."
      },
      {
        q: "l for a d orbital is:",
        options: ["$0$", "$1$", "$2$", "$3$"],
        answer: 2,
        explanation: "s, p, d, f are 0, 1, 2, 3."
      },
      {
        q: "1s most probable radius is:",
        options: ["Zero", "$a_{0}$", "1.5 $a_{0}$", "2 $a_{0}$"],
        answer: 1,
        explanation: "Radial probability peaks at the Bohr radius."
      },
      {
        q: "2s versus 2p radial nodes:",
        options: ["Both zero", "2s one, 2p zero", "2s zero, 2p one", "Both one"],
        answer: 1,
        explanation: "$n-l-1$: 1 for 2s, 0 for 2p."
      }
    ]
  },
  {
    sectionId: "young-ch41-s4",
    readingTime: 5,
    intro: "A magnetic field shifts $m_{l}$ levels by $\\Delta E = m_{l}\\mu_{B}B$: the normal Zeeman triplet. Lines split into $\\pi$ and $\\sigma$ components with strict polarization rules. Splittings weigh $B$ in labs, sunspots, and stellar atmospheres.",
    objectives: [
      "State $\\Delta E = m_{l}\\mu_{B}B$ with $\\mu_{B} = 5.79 \\times 10^{-5}$ eV/T",
      "Predict triplet polarization ($\\pi$ parallel, $\\sigma$ perpendicular)",
      "Use splitting to measure $B$"
    ],
    concepts: [
      {
        term: "Bohr magneton",
        kind: "definition",
        statement: "**$\\mu_{B} = e\\hbar/2m_{e} = 5.788 \\times 10^{-5}$ eV/T** is the orbital magnetic unit.",
        detail: "Moment $\\mu = -m_{l}\\mu_{B}$ along $B$; energy $-\\mu \\cdot B$."
      },
      {
        term: "Normal Zeeman shift",
        kind: "theorem",
        statement: "**$\\Delta E = m_{l}\\mu_{B}B$** splits $l$ into $2l+1$ evenly spaced levels.",
        detail: "$1$ T shifts $m = \\pm 1$ by $\\pm 58$ microeV."
      },
      {
        term: "Selection and polarization",
        kind: "method",
        statement: "**$\\Delta m = 0$ ($\\pi$, polarized parallel) and $\\pm 1$ ($\\sigma$, circular transverse)** give the Lorentz triplet.",
        detail: "Viewing geometry selects which components appear."
      },
      {
        term: "Anomalous Zeeman",
        kind: "insight",
        statement: "**Spin doubles the pattern** ($g \\approx 2$); full splitting needs $m_{l} + 2m_{s}$ (next section).",
        detail: "Observed quartets and sextets forced spin's discovery."
      },
      {
        term: "Magnetometry",
        kind: "method",
        statement: "**Split width reads $B$**: sunspot $0.3$ T splits H-alpha by $0.02$ nm.",
        detail: "Stellar and MRI magnets calibrate the same way."
      }
    ],
    examples: [
      {
        title: "Sodium D splitting",
        problem: "$3p$ ($m = 0, \\pm 1$) to $3s$ ($m = 0$) in $B = 2.00$ T. Find line energies about $2.10$ eV.",
        steps: [
          { label: "Step 1: Shift", text: "$\\mu_{B}B = 5.788 \\times 10^{-5} \\times 2.00 = 1.158 \\times 10^{-4}$ eV." },
          { label: "Step 2: Lines", text: "$\\pi$: $2.10$ eV; $\\sigma$: $2.10 \\pm 0.000116$ eV." },
          { label: "Step 3: Wavelength", text: "$\\Delta\\lambda \\approx \\lambda^{2}\\Delta E/hc = 0.0058$ nm at $589$ nm." }
        ],
        result: "Triplet spanning $232$ microeV, $0.006$ nm."
      },
      {
        title: "Sunspot field",
        problem: "Splitting $0.020$ nm at $630$ nm. Estimate $B$.",
        steps: [
          { label: "Step 1: Energy", text: "$\\Delta E = hc\\Delta\\lambda/\\lambda^{2} = 1240(0.020)/630^{2} = 6.25 \\times 10^{-5}$ eV." },
          { label: "Step 2: Field", text: "$B = \\Delta E/\\mu_{B} = 1.08$ T with g-factors order unity." },
          { label: "Step 3: Sense", text: "Kilogauss spots: Zeeman's solar payoff." }
        ],
        result: "$B \\sim 1$ T in the spot."
      }
    ],
    keyTakeaways: [
      "$\\Delta E = m_{l}\\mu_{B}B$ splits lines by $58$ microeV per tesla.",
      "$\\pi$ and $\\sigma$ polarizations fingerprint $\\Delta m$.",
      "Splittings are stellar and lab magnetometers."
    ],
    quiz: [
      {
        q: "$\\mu_{B}$ in eV/T is about:",
        options: ["$5.79e-5$", "$13.6$", "$511000$", "$1.6e-19$"],
        answer: 0,
        explanation: "Orbital magnetic unit from e hbar / 2m."
      },
      {
        q: "Normal Zeeman of p to s gives lines numbering:",
        options: ["$1$", "$2$", "$3$", "$5$"],
        answer: 2,
        explanation: "Delta-m 0, plus or minus 1 triplet."
      },
      {
        q: "Anomalous patterns forced:",
        options: ["Relativity", "Electron spin", "Quarks", "Dark matter"],
        answer: 1,
        explanation: "Extra doubling needed g about 2 spin magnetism."
      }
    ]
  },
  {
    sectionId: "young-ch41-s5",
    readingTime: 6,
    intro: "Stern-Gerlach split silver atoms into two spots, not a smear: electrons carry intrinsic $\\hbar/2$ spin with $g \\approx 2$. Spin-orbit coupling then fine-splits every $l > 0$ level. Spin is the two-state system behind MRI, qubits, and the periodic table's doubling.",
    objectives: [
      "State spin $s = 1/2$, $m_{s} = \\pm 1/2$ with $\\mu_{s} = -g_{s}m_{s}\\mu_{B}$",
      "Explain Stern-Gerlach as spin quantization proof",
      "Describe spin-orbit doublets qualitatively"
    ],
    concepts: [
      {
        term: "Electron spin",
        kind: "definition",
        statement: "**$S = \\sqrt{3/4}\\,\\hbar$, $S_{z} = \\pm\\hbar/2$**; two projections only, never a continuum.",
        detail: "Intrinsic, not rotation: pointlike to $10^{-18}$ m probes."
      },
      {
        term: "Stern-Gerlach",
        kind: "law",
        statement: "**Gradient magnets deflect $m_{s}$ into two beams**; classical moments would smear continuously.",
        detail: "Silver $5s$ atoms image the lone electron's spin directly."
      },
      {
        term: "Spin g-factor",
        kind: "theorem",
        statement: "**$g_{s} = 2.0023$**, twice orbital; Dirac predicts $2$, QED adds $0.0023$ (most precise agreement in physics).",
        detail: "Spin magnetism outweighs orbital per unit angular momentum."
      },
      {
        term: "Spin-orbit coupling",
        kind: "insight",
        statement: "**$l$ and $s$ lock to $j = l \\pm 1/2$**, splitting $p$ into doublets (Na D $0.002$ eV).",
        detail: "Electron's rest frame sees nuclear motion as a magnetic field torqueing spin."
      },
      {
        term: "Total angular momentum",
        kind: "notation",
        statement: "**$j$, $m_{j}$ with $|l-s| \\le j \\le l+s$** label fine levels; $s_{1/2}$, $p_{3/2}$ spectroscopic notation follows.",
        detail: "Selection $\\Delta j = 0, \\pm 1$ governs doublet intensities."
      }
    ],
    figures: [
      {
        caption: "Stern-Gerlach: gradient magnet splits silver into two $m_{s}$ spots, never a smear",
        svg: '<svg viewBox="0 0 400 170" style="width:100%;height:auto" role="img" aria-label="Stern-Gerlach: gradient magnet splits silver into two m_s spots, never a smear"><rect x="0" y="0" width="400" height="170" fill="none"/><line x1="30" y1="85" x2="150" y2="85" stroke="currentColor" stroke-width="2"/><polygon points="100,20 180,85 100,150" fill="none" stroke="currentColor" stroke-width="2"/><line x1="180" y1="85" x2="300" y2="40" stroke="currentColor" stroke-width="2"/><line x1="180" y1="85" x2="300" y2="130" stroke="currentColor" stroke-width="2"/><circle cx="300" cy="40" r="4" fill="currentColor"/><circle cx="300" cy="130" r="4" fill="currentColor"/><text x="305" y="43" font-size="12" fill="currentColor">up</text><text x="305" y="133" font-size="12" fill="currentColor">down</text><text x="110" y="40" font-size="12" fill="currentColor">gradient B</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Silver deflection",
        problem: "Silver atoms ($\\mu \\approx \\mu_{B}$) cross $10$ cm of $dB/dz = 100$ T/m at $500$ m/s. Estimate split.",
        steps: [
          { label: "Step 1: Force", text: "$F = \\mu\\,dB/dz = (9.27 \\times 10^{-24})(100) = 9.27 \\times 10^{-22}$ N." },
          { label: "Step 2: Time", text: "$t = 0.10/500 = 2.0 \\times 10^{-4}$ s; $a = F/m = 5.17 \\times 10^{3}$ m/s-squared." },
          { label: "Step 3: Split", text: "$\\Delta z = at^{2} = 2.07 \\times 10^{-4}$ m each way; beams $0.41$ mm apart." }
        ],
        result: "Two $0.2$ mm-deflected spots, never a smear."
      },
      {
        title: "Sodium doublet",
        problem: "Na D lines $589.0$/$589.6$ nm. Find spin-orbit gap.",
        steps: [
          { label: "Step 1: Energies", text: "$1240/589.0 = 2.10526$ eV; $1240/589.6 = 2.10312$ eV." },
          { label: "Step 2: Gap", text: "$0.00214$ eV $= 2.1$ meV $p_{3/2}$-$p_{1/2}$ split." },
          { label: "Step 3: Scale", text: "Grows as $Z^{4}$: heavy atoms split by eV." }
        ],
        result: "$2.1$ meV fine splitting."
      }
    ],
    keyTakeaways: [
      "Spin $1/2$ gives two $m_{s}$ states with $g \\approx 2$.",
      "Stern-Gerlach proves quantization by splitting, not smearing.",
      "Spin-orbit makes $j = l \\pm 1/2$ doublets."
    ],
    quiz: [
      {
        q: "Stern-Gerlach silver splits into:",
        options: ["One spot", "Two spots", "Continuous smear", "Three spots"],
        answer: 1,
        explanation: "Two $m_{s}$ projections quantize the force."
      },
      {
        q: "Electron spin g-factor is about:",
        options: ["$1$", "$2$", "$0$", "$137$"],
        answer: 1,
        explanation: "Dirac 2 plus QED thousandth."
      },
      {
        q: "Spin-orbit splits p levels into:",
        options: ["Singlets", "Doublets j = 1/2, 3/2", "Triplets", "No split"],
        answer: 1,
        explanation: "l plus or minus s gives two j values."
      }
    ]
  },
  {
    sectionId: "young-ch41-s6",
    readingTime: 7,
    intro: "Pauli forbids two electrons sharing all four numbers $(n,l,m_{l},m_{s})$, so shells fill in $1s$, $2s2p$, $3s3p$ order with Hund's spin-maximizing rule. The periodic table is this filling read aloud. Screening explains why $4s$ beats $3d$ and why chemistry repeats.",
    objectives: [
      "State Pauli exclusion for four quantum numbers",
      "Fill configurations through argon with Hund's rule",
      "Explain screening, $4s$-before-$3d$, and periodic repeats"
    ],
    concepts: [
      {
        term: "Pauli exclusion",
        kind: "law",
        statement: "**No two electrons share $(n,l,m_{l},m_{s})$**; each orbital takes two opposite spins.",
        detail: "Antisymmetric wave functions enforce it; bosons contrast by sharing freely."
      },
      {
        term: "Aufbau order",
        kind: "method",
        statement: "**Fill lowest available $n + l$ first**: $1s$, $2s$, $2p$, $3s$, $3p$, $4s$, $3d$, ...",
        detail: "Potassium is [Ar]$4s^{1}$, not $3d^{1}$, by penetration screening."
      },
      {
        term: "Hund's rule",
        kind: "theorem",
        statement: "**Maximize $S$ in degenerate orbitals first** (parallel spins), then pair: lowers Coulomb via exchange.",
        detail: "Nitrogen $2p^{3}$ is all-parallel $S = 3/2$; oxygen starts pairing."
      },
      {
        term: "Screening",
        kind: "insight",
        statement: "**Inner electrons shield $Z$ to $Z_{eff}$**; $s$ penetrates and binds tighter than $d$.",
        detail: "Sodium's $3s$ sees $Z_{eff} \\approx 2.5$, not $11$."
      },
      {
        term: "Table as filling",
        kind: "insight",
        statement: "**Columns share outer $l^{m}$**, so chemistry repeats: alkalis $ns^{1}$, nobles $np^{6}$.",
        detail: "Anomalies (Cr, Cu) trade $s$-$d$ by exchange wins."
      }
    ],
    figures: [
      {
        caption: "Aufbau filling $1s 2s 2p 3s 3p 4s 3d$: Hund parallel spins precede pairing",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Aufbau filling 1s 2s 2p 3s 3p 4s 3d: Hund parallel spins precede pairing"><rect x="0" y="0" width="400" height="200" fill="none"/><text x="40" y="40" font-size="13" fill="currentColor">1s [up down]</text><text x="40" y="70" font-size="13" fill="currentColor">2s [up down] 2p [up][up][up] then pair</text><text x="40" y="100" font-size="13" fill="currentColor">3s [up down] 3p [up][up][up] then pair</text><text x="40" y="130" font-size="13" fill="currentColor">4s before 3d (penetration)</text><text x="40" y="165" font-size="12" fill="currentColor">Pauli: no shared (n,l,ml,ms); Hund: maximize S</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Iron configuration",
        problem: "Write Fe ($Z = 26$) ground configuration.",
        steps: [
          { label: "Step 1: Argon core", text: "[Ar] $= 1s^{2}2s^{2}2p^{6}3s^{2}3p^{6}$ ($18$ electrons)." },
          { label: "Step 2: Rest", text: "$4s^{2}3d^{6}$: $4s$ fills first, then six $d$ with four unpaired (Hund)." },
          { label: "Step 3: Ion", text: "Fe$^{2+}$ loses $4s$ first: [Ar]$3d^{6}$." }
        ],
        result: "[Ar]$4s^{2}3d^{6}$ with four unpaired spins."
      },
      {
        title: "Oxygen spins",
        problem: "Oxygen $2p^{4}$. How many unpaired?",
        steps: [
          { label: "Step 1: Hund", text: "Three parallel first ($2p^{3}$), fourth pairs one: two unpaired remain." },
          { label: "Step 2: Magnetism", text: "$S = 1$: paramagnetic, diradical character." },
          { label: "Step 3: Contrast", text: "Nitrogen $2p^{3}$ has three unpaired; neon pairs all." }
        ],
        result: "Two unpaired electrons."
      }
    ],
    keyTakeaways: [
      "Pauli plus Aufbau plus Hund generate every configuration.",
      "Screening orders $4s$ before $3d$ and repeats chemistry.",
      "Outer shells explain columns; transitions fill $d$ and $f$."
    ],
    quiz: [
      {
        q: "Pauli forbids sharing all of:",
        options: ["$(n,l)$ only", "$(n,l,m_l,m_s)$", "Spin only", "Energy only"],
        answer: 1,
        explanation: "Full four-number identity is banned for fermions."
      },
      {
        q: "Potassium Z = 19 config ends:",
        options: ["$3d^1$", "$4s^1$", "$3p^6$", "$4p^1$"],
        answer: 1,
        explanation: "n+l ordering puts 4s below 3d."
      },
      {
        q: "Nitrogen 2p3 has unpaired electrons numbering:",
        options: ["$1$", "$2$", "$3$", "$0$"],
        answer: 2,
        explanation: "Hund keeps all three parallel before pairing."
      },
      {
        q: "Fe2+ loses electrons first from:",
        options: ["$3d$", "$4s$", "$3p$", "$2p$"],
        answer: 1,
        explanation: "Highest n goes first despite filling first."
      }
    ]
  },
  {
    sectionId: "young-ch41-s7",
    readingTime: 5,
    intro: "Knock out a $K$ electron and $L$ drops in, emitting keV x-rays with $f \\propto (Z-1)^{2}$: Moseley's law. Each element's lines fingerprint $Z$ absolutely, sorting the table and assaying materials. Selection rules $\\Delta l = \\pm 1$ gate the allowed jumps.",
    objectives: [
      "State Moseley $\\sqrt{f} = A(Z - \\sigma)$ for K-alpha",
      "Compute K-alpha energies from $(Z-1)^{2} \\times 10.2$ eV",
      "Explain XRF elemental analysis"
    ],
    concepts: [
      {
        term: "Moseley law",
        kind: "law",
        statement: "**$f_{K\\alpha} \\approx (3cR/4)(Z-1)^{2}$**, i.e. $E \\approx 10.2(Z-1)^{2}$ eV.",
        detail: "Screening $\\sigma \\approx 1$ from the remaining $K$ electron."
      },
      {
        term: "K-alpha energy rule",
        kind: "method",
        statement: "**$E_{K\\alpha} = 10.2(Z-1)^{2}$ eV**: Cu ($29$) $8.04$ keV, Mo ($42$) $17.4$ keV.",
        detail: "Lyman-like jump inside screened Coulomb field."
      },
      {
        term: "Selection rules",
        kind: "theorem",
        statement: "Dipole x-rays need **$\\Delta l = \\pm 1$, $\\Delta j = 0, \\pm 1$**; $2s$-to-$1s$ is two-photon forbidden singly.",
        detail: "Shapes gate rates; $p$-to-$s$ shines, $s$-to-$s$ waits."
      },
      {
        term: "X-ray fluorescence",
        kind: "method",
        statement: "**Excite then read lines**: handheld XRF guns assay alloys, lead paint, and art pigments by $Z$.",
        detail: "Each element's $K$, $L$ combs are unique barcodes."
      },
      {
        term: "Ordering by Z",
        kind: "insight",
        statement: "Moseley **sorted Co/Ni and Ar/K by physics**, fixing chemical inversions and predicting Hf.",
        detail: "Atomic number became the table's axis in 1913."
      }
    ],
    examples: [
      {
        title: "Copper K-alpha",
        problem: "Predict Cu ($Z = 29$) K-alpha.",
        steps: [
          { label: "Step 1: Formula", text: "$E = 10.2(28)^{2} = 10.2 \\times 784 = 7997$ eV." },
          { label: "Step 2: Wavelength", text: "$\\lambda = 1240/7997$ nm $= 0.155$ nm." },
          { label: "Step 3: Measured", text: "$8.04$ keV / $0.154$ nm: screening tweaks percent-level." }
        ],
        result: "$8.0$ keV, $0.155$ nm prediction."
      },
      {
        title: "Identify by line",
        problem: "K-alpha at $17.5$ keV. Which element?",
        steps: [
          { label: "Step 1: Invert", text: "$(Z-1)^{2} = 17500/10.2 = 1716$; $Z - 1 = 41.4$." },
          { label: "Step 2: Round", text: "$Z = 42$: molybdenum (tabulated $17.4$ keV)." },
          { label: "Step 3: Use", text: "Mo tubes image mammography at this energy." }
        ],
        result: "Molybdenum $Z = 42$."
      }
    ],
    keyTakeaways: [
      "$E_{K\\alpha} = 10.2(Z-1)^{2}$ eV fingerprints atomic number.",
      "Selection $\\Delta l = \\pm 1$ gates bright lines.",
      "XRF reads composition from line barcodes."
    ],
    quiz: [
      {
        q: "Moseley plots sqrt(f) versus:",
        options: ["$Z$", "$Z - 1$", "$Z^{2}$", "$1/Z$"],
        answer: 1,
        explanation: "Screened K line scales with effective nuclear charge."
      },
      {
        q: "Fe Z = 26 K-alpha is about:",
        options: ["$6.4$ keV", "$10$ eV", "$511$ keV", "$1$ eV"],
        answer: 0,
        explanation: "$10.2\\times 25^{2} = 6375$ eV."
      },
      {
        q: "XRF identifies elements by:",
        options: ["Color", "Characteristic x-ray energies", "Density", "Smell"],
        answer: 1,
        explanation: "Each Z emits unique K and L combs."
      }
    ]
  },
  {
    sectionId: "young-ch41-s8",
    readingTime: 6,
    intro: "Entangled pairs share correlations no local story can match: measure one spin, the other's outcome locks instantly, yet no signal travels. Bell inequalities bound every local-hidden-variable story, and experiment breaks the bound. Entanglement is now a resource for cryptography and computing.",
    objectives: [
      "Define entanglement versus classical correlation",
      "State Bell's theorem: local realism predicts $|S| \\le 2$",
      "Describe Aspect tests and no-signaling resolution"
    ],
    concepts: [
      {
        term: "Entangled state",
        kind: "definition",
        statement: "**Joint state with no per-particle states**, e.g. singlet $(|up\\,down\\rangle - |down\\,up\\rangle)/\\sqrt{2}$.",
        detail: "Neither spin has a direction until measured; the pair has total zero always."
      },
      {
        term: "EPR argument",
        kind: "insight",
        statement: "Einstein saw **perfect anti-correlation plus locality forcing hidden instructions**; Bohr replied the pair is one system.",
        detail: "1935 thought experiment became 1972 laboratory program."
      },
      {
        term: "Bell inequality",
        kind: "theorem",
        statement: "**Local realism caps CHSH $|S| \\le 2$**; quantum singlet reaches **$2\\sqrt{2}$** at chosen angles.",
        detail: "Statistics of four angle-pairs separate worldviews numerically."
      },
      {
        term: "Experimental verdict",
        kind: "law",
        statement: "**Aspect, Zeilinger, and loophole-free 2015 tests violate Bell** ($S \\approx 2.7$), closing locality, detection, and freedom loopholes.",
        detail: "2022 Nobel honored the entanglement program."
      },
      {
        term: "No signaling",
        kind: "insight",
        statement: "**Random local outcomes carry no message**; correlations appear only on comparing notes subluminally.",
        detail: "Relativity survives: instant coordination without communication."
      }
    ],
    examples: [
      {
        title: "Singlet odds",
        problem: "Singlet pair measured along the same axis. What outcomes occur?",
        steps: [
          { label: "Step 1: Rule", text: "Always opposite: up-down or down-up at half odds each." },
          { label: "Step 2: Never", text: "Up-up and down-down have zero probability." },
          { label: "Step 3: Tilted", text: "Angle $\\theta$ between axes gives $\\cos^{2}(\\theta/2)$ opposite, $\\sin^{2}(\\theta/2)$ same." }
        ],
        result: "Perfect anti-correlation on shared axes."
      },
      {
        title: "CHSH numbers",
        problem: "Angles $0^{\\circ}$, $45^{\\circ}$, $22.5^{\\circ}$, $67.5^{\\circ}$ give quantum $S = 2.828$. What does it mean?",
        steps: [
          { label: "Step 1: Bound", text: "Local stories cap at $2.0$." },
          { label: "Step 2: Excess", text: "$2.828 > 2$ by $0.828$, many sigma with millions of pairs." },
          { label: "Step 3: Verdict", text: "No local-hidden-variable model survives; entanglement is real." }
        ],
        result: "$S = 2\\sqrt{2}$ violates local realism."
      }
    ],
    keyTakeaways: [
      "Entanglement is joint definiteness without individual definiteness.",
      "Bell $|S| \\le 2$ bounds local stories; quantum hits $2\\sqrt{2}$.",
      "Experiments side with quantum; no signaling saves relativity."
    ],
    quiz: [
      {
        q: "Entangled singlet measured on shared axis gives:",
        options: ["Always same", "Always opposite", "Always up", "Nothing"],
        answer: 1,
        explanation: "Total spin zero forces anti-correlation."
      },
      {
        q: "Bell CHSH bound for local realism is:",
        options: ["$|S| <= 1$", "$|S| <= 2$", "$|S| <= 4$", "Unbounded"],
        answer: 1,
        explanation: "Local hidden variables cap the four-correlator sum."
      },
      {
        q: "Entanglement cannot send signals because local outcomes are:",
        options: ["Predetermined", "Random until compared", "Always up", "Delayed"],
        answer: 1,
        explanation: "Messages need controllable bias; randomness carries none."
      }
    ]
  }
];
